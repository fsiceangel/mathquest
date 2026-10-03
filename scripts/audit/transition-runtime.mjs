import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Exercise the real registry, resume lookup, and rendered entry points without
// opening a port or touching the student's browser storage.
const memory = new Map()
globalThis.localStorage = {
  getItem: key => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, value),
  removeItem: key => memory.delete(key),
}
globalThis.window = { dispatchEvent() {} }
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { transitionSets, getTransitionSet } = await server.ssrLoadModule('/src/data/transition/index.js')
  const { default: authoredBridges } = await server.ssrLoadModule('/src/data/transition/bridges.js')
  const { default: authoredTransfer } = await server.ssrLoadModule('/src/data/transition/transfer.js')
  const { default: Run } = await server.ssrLoadModule('/src/views/TransitionRun.jsx')
  const { default: Arena } = await server.ssrLoadModule('/src/views/ArenaPage.jsx')
  const { default: Bridge } = await server.ssrLoadModule('/src/components/BridgeReview.jsx')
  const { newAttempt, saveAttempt, getAttempt, reconcileAttempt } = await server.ssrLoadModule('/src/lib/attempts.js')
  const { availableSavedProblems, loadSavedProblems } = await server.ssrLoadModule('/src/data/resume.js')
  const { versionSet } = await server.ssrLoadModule('/src/lib/variants.js')
  const bridges = transitionSets.filter(set => set.kind === 'bridge')
  const transfer = transitionSets.filter(set => set.kind === 'transfer')
  assert.equal(bridges.length, 4)
  assert.equal(transfer.length, 2)
  const allProblems = transitionSets.flatMap(set => set.problems)
  const { gradeEntry } = await server.ssrLoadModule('/src/lib/answer-entry.js')
  const { answerEntrySpecs } = await server.ssrLoadModule('/src/data/transition/answer-entry-specs.js')
  const entries = allProblems.filter(p => p.answerEntry)
  assert.equal(entries.length, 8)
  assert.deepEqual(entries.map(p => p.calibration.id).sort(), Object.keys(answerEntrySpecs).sort())
  for (const p of entries) {
    const keyedMath = p.choices[p.answer].match(/\$([^$]+)\$/)[1]
      .replace(/\\frac\{(-?\d+)\}\{(-?\d+)\}/g, '$1/$2')
    assert.deepEqual(gradeEntry(keyedMath, p.answerEntry), { valid: true, correct: true }, `${p.calibration.id}: typed key must match audited answer`)
  }
  assert.equal(allProblems.length, 40)
  assert.equal(new Set(allProblems.map(p => p.calibration.id)).size, 40, 'Duplicate transition IDs')
  for (const set of [...authoredBridges, ...authoredTransfer]) {
    assert(set.problems.every(p => !p.calibration), `${set.id}: registry mutated authoring objects`)
  }
  const skills = ['read-data', 'spatial', 'method-choice', 'discrete', 'optimization']
  for (const set of transfer) {
    assert.deepEqual(set.problems.map(p => p.level), [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4], `${set.id}: difficulty sequence`)
    for (const skill of skills) assert(set.problems.some(p => p.skill === skill), `${set.id}: missing ${skill}`)
    assert(set.problems.filter(p => ['geometry', 'algebra'].includes(p.topic)).length >= 6, `${set.id}: algebra/geometry coverage`)
  }
  for (const set of bridges) {
    assert.equal(set.problems.length, 4)
    for (let i = 1; i < set.problems.length; i++) {
      const gap = set.problems[i].level - set.problems[i - 1].level
      assert(gap >= 0 && gap <= 1, `${set.id}: steps must increase by at most one level`)
    }
  }
  for (const set of transitionSets) {
    assert.equal(getTransitionSet(set.id), set)
    set.problems.forEach((p, i) => {
      assert.equal(p.calibration.id, `transition/${set.id}/${i + 1}`)
      assert.equal(p.calibration.level, p.level)
      assert.equal(p.calibration.scope, 'bridge')
    })
    const problems = versionSet(set.problems, 0)
    const draft = newAttempt('quiz', problems)
    draft.answers = problems.map((p, i) => i < 3 ? (p.answerEntry ? { type:'input',value:p.answerEntry.expected } : p.answer) : null)
    draft.index = 3
    assert(saveAttempt(`transition/${set.id}`, draft))
    const ids = draft.questions.map(q => q.id)
    assert.deepEqual(availableSavedProblems(ids), problems)
    assert.deepEqual(await loadSavedProblems(ids), problems)
    const restored = reconcileAttempt(getAttempt(`transition/${set.id}`), problems)
    assert.equal(restored.changed, false)
    assert.equal(restored.attempt.answers.filter(v => v !== null).length, 3)
    assert.deepEqual(restored.attempt.answers, draft.answers)
    assert.equal(restored.attempt.index, 3)
    const html = renderToStaticMarkup(createElement(Run, { setId: set.id }))
    assert(html.includes('aria-valuenow="3"'), `${set.id}: saved progress not rendered`)
    assert(html.includes(`Question 4 of ${problems.length}`), `${set.id}: current question not restored`)
    assert(!html.includes('arena-timer'))
    assert(!html.includes('Version 1 of'))
    if (set.kind === 'bridge') {
      const entry = renderToStaticMarkup(createElement(Bridge, { book: set.book, chapter: set.chapter, group: set.group }))
      assert(entry.includes('Continue 3/4'))
      assert(entry.includes(`#/transition/${set.id}`))
      assert(html.includes('continue where you left off'))
      const chapterHref = `#/book/${set.book}/ch/${set.chapter}`
      const target = ['challenge', 'worksheet'].includes(set.group)
        ? `${chapterHref}/${set.group}` : `${chapterHref}/practice/${set.group}`
      assert(html.includes(`href="${target}"`), `${set.id}: missing return to target group`)
    }
  }
  const arena = renderToStaticMarkup(createElement(Arena))
  assert.equal((arena.match(/Continue 3\/12/g) ?? []).length, 2)
  const typedSet = getTransitionSet('statistics-construction')
  const inputDraft = newAttempt('quiz', typedSet.problems)
  inputDraft.inputs[0] = 'abc'
  saveAttempt('transition/statistics-construction', inputDraft)
  const inputHtml = renderToStaticMarkup(createElement(Run, { setId: typedSet.id }))
  assert(inputHtml.includes('value="abc"'))
  assert(inputHtml.includes('aria-valuenow="0"'))
  assert(inputHtml.includes('Check answer'))
  assert(!inputHtml.includes('class="choices"'))
  assert(!inputHtml.includes('class="solution"'))
  for (const set of transfer) assert(arena.includes(`#/transition/${set.id}`))
  assert.equal(getTransitionSet('missing'), undefined)
  assert(renderToStaticMarkup(createElement(Run, { setId: 'missing' })).includes('Practice not found'))
  console.log(JSON.stringify({ status: 'passed', sets: transitionSets.length, stableIds: allProblems.length,
    restoredThreeAnswerSets: transitionSets.length, bridgeEntries: bridges.length, transferEntries: transfer.length,
    checks: ['five skills per transfer set', 'transfer difficulty and topic quotas', 'bridge steps without skipped levels',
      'nonmutating registry', 'full saved-problem restoration', 'saved current question', 'continuation and target links',
      'untimed fixed sets', 'invalid route fallback'] }, null, 2))
} finally {
  await server.close()
}
