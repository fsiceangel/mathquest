import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Exercise the actual import.meta.glob registry and lazy imports, not a second
// implementation of the content loader. No browser or dev port is required.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const content = await server.ssrLoadModule('/src/data/content.js')
  const { versionSet, versionCount } = await server.ssrLoadModule('/src/lib/variants.js')
  const { calibratedPool, selectPaper, DRAW_PROFILES } = await server.ssrLoadModule('/src/lib/draw-paper.js')
  const { allCheckpoints } = await server.ssrLoadModule('/src/data/checkpoints/index.js')
  const chapters = content.allChapters()
  const checkpoints = allCheckpoints()
  assert.equal(chapters.length, 71, 'Playable chapter inventory changed; inspect the expected coverage')
  const groups = chapters.flatMap(ch => [
    ...ch.sections.map(s => ({ id: `${ch.book}/${ch.number}/${s.id}`, problems: s.problems })),
    ...['challenge', 'worksheet'].map(group => ({ id: `${ch.book}/${ch.number}/${group}`, problems: ch[group] })),
  ])
  const withoutVariants = p => Object.fromEntries(Object.entries(p).filter(([key]) => key !== 'variants'))
  const authored = groups.map(g => JSON.stringify(g.problems.map(withoutVariants)))
  const signature = pool => JSON.stringify(pool.map(e => ({
    id: e.p.calibration.id, level: e.p.calibration.level, scope: e.p.calibration.scope,
    q: e.p.q, choices: e.p.choices, answer: e.p.answer, topic: e.topic,
  })))
  const seedRandom = seed => () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296)
  const drawRuns = pool => {
    const results = []
    for (const [name, profile] of Object.entries(DRAW_PROFILES)) {
      for (const seed of [1, 20260922]) {
        const paper = selectPaper(pool, profile, { random: seedRandom(seed) })
        assert.deepEqual(paper.map(p => p.calibration.level), profile, `${name}: difficulty profile`)
        assert.equal(new Set(paper.map(p => p.calibration.id)).size, profile.length, `${name}: duplicate source`)
        assert(paper.every(p => p.calibration.scope !== 'extension'), `${name}: optional extension entered the pool`)
        results.push(paper.map(p => p.calibration.id))
      }
    }
    const foundation = selectPaper(pool, DRAW_PROFILES.bridge, { random: seedRandom(42), foundationOnly: true })
    assert(foundation.every(p => p.calibration.id.startsWith('prealgebra/')), 'Foundation route crossed books')
    results.push(foundation.map(p => p.calibration.id))
    return results
  }
  const poolBefore = calibratedPool(chapters, checkpoints)
  const beforeSignature = signature(poolBefore)
  const drawsBefore = drawRuns(poolBefore)
  // Render the actual Mixed Practice -> QuizView path: a stable pool alone
  // cannot detect QuizView rotating a drawn paper into lazy chapter variants.
  const { DrawnPaper } = await server.ssrLoadModule('/src/views/ArenaRunner.jsx')
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')
  const originalRandom = Math.random
  const renderMixedPaper = round => {
    try {
      Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
        getItem: () => JSON.stringify({ rounds: { 'arena/bridge': round } }),
      } })
      Math.random = seedRandom(20260922)
      return renderToStaticMarkup(createElement(DrawnPaper, { modeId: 'bridge' }))
    } finally {
      Math.random = originalRandom
      if (originalStorage) Object.defineProperty(globalThis, 'localStorage', originalStorage)
      else delete globalThis.localStorage
    }
  }
  const mixedBefore = renderMixedPaper(0)
  await Promise.all(chapters.map(ch => content.loadVariants(ch.book, ch.number)))
  let roundSets = 0, problemVisits = 0, variants = 0
  for (let gi = 0; gi < groups.length; gi++) {
    const { id, problems } = groups[gi]
    assert.equal(JSON.stringify(problems.map(withoutVariants)), authored[gi], `${id}: lazy load modified authored fields`)
    assert.equal(versionCount(problems), 4, `${id}: incomplete round rotation`)
    variants += problems.reduce((sum, p) => sum + p.variants.length, 0)
    const sourceSnapshot = JSON.stringify(problems)
    for (let round = 0; round < 4; round++) {
      const expected = problems.map(p => round === 0 ? p : p.variants[round - 1])
      expected.forEach((p, index) => assert.equal(p.calibration.id, `${id}/${index + 1}/${round + 1}`, `${id}: variant attached to wrong authored slot`))
      const shown = versionSet(problems, round)
      assert.notEqual(shown, problems, `${id}: presentation returned the authored array`)
      assert.equal(new Set(shown.map(p => p.calibration.id)).size, problems.length, `${id}: lost or duplicate problem`)
      for (const p of shown) {
        assert.equal(expected.find(e => e.calibration.id === p.calibration.id), p, `${id}: sorting changed problem/answer identity`)
        if (p.choices) assert(Number.isInteger(p.answer) && p.answer >= 0 && p.answer < p.choices.length, `${p.calibration.id}: invalid answer position`)
      }
      for (let i = 1; i < shown.length; i++) {
        assert(shown[i - 1].calibration.level <= shown[i].calibration.level, `${id}: descending difficulty`)
        if (shown[i - 1].calibration.level === shown[i].calibration.level) assert(expected.indexOf(shown[i - 1]) < expected.indexOf(shown[i]), `${id}: unstable equal-level order`)
      }
      assert.equal(JSON.stringify(problems), sourceSnapshot, `${id}: round ordering mutated source`)
      roundSets++
      problemVisits += shown.length
    }
  }
  const poolAfter = calibratedPool(chapters, checkpoints)
  assert.equal(signature(poolAfter), beforeSignature, 'Lazy loading changed random-paper population or keys')
  assert.deepEqual(drawRuns(poolAfter), drawsBefore, 'Seeded papers changed after lazy loading')
  for (let round = 0; round < 4; round++) {
    assert.equal(renderMixedPaper(round), mixedBefore, `Mixed Practice: loaded variants or attempt ${round} replaced the drawn paper`)
  }
  await Promise.all(chapters.map(ch => content.loadVariants(ch.book, ch.number)))
  assert.equal(signature(calibratedPool(chapters, checkpoints)), beforeSignature, 'Repeated lazy load changed the pool')
  console.log(JSON.stringify({ status: 'passed', chapters: chapters.length, checkpoints: checkpoints.length, groups: groups.length, rounds: 4, roundSets, problemVisits, variants, poolEntries: poolAfter.length, seededPaperRuns: drawsBefore.length * 2, renderedMixedPaperRuns: 5, checks: ['stable source IDs and answer objects', 'nonmutating stable difficulty order', 'all four real lazy-loaded rounds', 'unchanged random-paper pool and seeded papers', 'drawn paper survives QuizView and attempt history', 'idempotent chapter loading'] }, null, 2))
} finally {
  await server.close()
}
