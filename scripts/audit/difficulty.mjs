import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { inventory } from './lib/content.mjs'
import { calibrations, problemCalibration, checkpointCalibration, arenaCalibration, inDifficultyOrder } from '../../src/data/calibration/index.js'
import { calibratedPool, DRAW_PROFILES, selectPaper } from '../../src/lib/draw-paper.js'
import { bridges, bridgesFor } from '../../src/data/calibration/bridges.js'
import { transitionCalibration } from '../../src/data/transition/index.js'

const write = process.argv.includes('--write')
const data = await inventory()
const errors = [], gaps = [], counts = { items: 0, editorial: 0, inherited: 0, 'variant-reviewed': 0, 'variant-equivalent': 0, scopes: {}, levels: {} }
const rows = []
const sections = new Map(data.chapters.flatMap(ch => ch.sections.map(s => [`${ch.book}/${s.id}`, s])))
const prerequisiteGraph = new Map()
for (const b of bridges) {
  if (!b.note || !b.groups?.length || !b.sections?.length) errors.push(`Incomplete teaching bridge: ${b.book}/${b.chapter}`)
  for (const s of b.sections ?? []) if (!sections.has(`${b.book}/${s}`)) errors.push(`Missing bridge lesson: ${b.book}/${s}`)
}
for (const book of Object.values(calibrations)) for (const ch of Object.values(book.chapters)) {
  for (const [sid, s] of Object.entries(ch.sections)) {
    if (!sections.has(`${book.book}/${sid}`)) errors.push(`Unknown section ${book.book}/${sid}`)
    if (!s.rationale || !Array.isArray(s.prerequisites)) errors.push(`Missing rationale/prerequisites: ${book.book}/${sid}`)
    for (const key of s.prerequisites ?? []) if (!sections.has(key)) errors.push(`Unresolved prerequisite ${key} for ${book.book}/${sid}`)
    prerequisiteGraph.set(`${book.book}/${sid}`, s.prerequisites ?? [])
  }
}
const visited = new Set()
function checkPrerequisites(key, path = []) {
  if (path.includes(key)) { errors.push(`Prerequisite cycle: ${[...path,key].join(' -> ')}`); return }
  if (visited.has(key)) return
  for (const next of prerequisiteGraph.get(key) ?? []) checkPrerequisites(next, [...path,key])
  visited.add(key)
}
for (const key of prerequisiteGraph.keys()) checkPrerequisites(key)
for (const r of data.records) {
  const c = r.transition ? transitionCalibration(r.transition, r.index, r.p)
    : r.paper ? arenaCalibration(r.paper, r.index)
    : r.checkpoint ? checkpointCalibration(r.book, r.checkpoint, r.index)
    : problemCalibration(r.book, r.chapter, r.group, r.index, r.round)
  if (!c || !Number.isInteger(c.level) || c.level < 1 || c.level > 5 || !['core','bridge','extension'].includes(c.scope)) {
    errors.push(`Missing/invalid calibration ${r.id}`); continue
  }
  r.p.calibration = c
  counts.items++; counts[c.basis]++
  counts.scopes[c.scope] = (counts.scopes[c.scope] ?? 0) + 1
  counts.levels[c.level] = (counts.levels[c.level] ?? 0) + 1
  const digest = createHash('sha256').update(JSON.stringify(r.p, (key, value) => key === 'calibration' ? undefined : value)).digest('hex').slice(0, 16)
  rows.push({ id:r.id, path:r.path, level:c.level, scope:c.scope, basis:c.basis, digest })
}

// Fail on missing AND surplus ratings, instead of silently accepting stale tables.
for (const ch of data.chapters) {
  const spec = calibrations[ch.book]?.chapters[ch.number]
  if (!spec?.variantReview || spec.variantReview.status !== 'stem-reviewed' || JSON.stringify(spec.variantReview.rounds) !== '[2,3,4]' || !spec.variantReview.note) errors.push(`Missing/invalid variant review receipt ${ch.book}/${ch.number}`)
  for (const [name, ps] of [...ch.sections.map(s => [s.id, s.problems]), ['challenge', ch.challenge], ['worksheet', ch.worksheet]]) {
    const ratings = spec?.sections[name]?.levels ?? spec?.[name]
    if (ratings?.length !== ps.length) errors.push(`Rating count ${ch.book}/${ch.number}/${name}`)
    const overrides = spec?.sections[name]?.variantOverrides ?? spec?.[`${name}VariantOverrides`] ?? {}
    for (const [key, value] of Object.entries(overrides)) {
      const [slot, round] = key.split('.').map(Number)
      if (!/^\d+\.[234]$/.test(key) || slot < 1 || slot > ps.length || !Number.isInteger(value.level) || value.level < 1 || value.level > 5 || !value.reason) errors.push(`Invalid variant override ${ch.book}/${ch.number}/${name}/${key}`)
    }
    for (let round=1;round<=4;round++) {
      const scores = ps.map((_, i) => problemCalibration(ch.book, ch.number, name, i, round)?.level)
      const ordered = scores.slice().sort((a,b)=>a-b)
      const inversions = scores.slice(1).filter((v,i)=>v<scores[i]).length
      const jumps = scores.flatMap((v,i)=>i && v-scores[i-1]>1 ? [i+1] : [])
      const remainingJumps = ordered.slice(1).filter((v,i)=>v-ordered[i]>1).length
      const main = ps.map((_, i) => problemCalibration(ch.book, ch.number, name, i, round)).filter(c => c.scope !== 'extension').map(c => c.level).sort((a,b)=>a-b)
      const mainRemainingJumps = main.slice(1).filter((v,i)=>v-main[i]>1).length
      const support = bridgesFor(ch.book, ch.number, name).map(b => ({ sections:b.sections, note:b.note }))
      const practice = data.transitions.filter(set => set.book === ch.book && set.chapter === ch.number && set.group === name && set.round === round)
      const withPractice = [...main, ...practice.flatMap(set => set.problems.map(p => p.level))].sort((a,b)=>a-b)
      const mainRemainingJumpsAfterPractice = withPractice.slice(1).filter((v,i)=>v-withPractice[i]>1).length
      if (mainRemainingJumps && !support.length) errors.push(`Main-path gap needs a worked bridge: ${ch.book}/${ch.number}/${name} round ${round}`)
      if (mainRemainingJumps && (!practice.length || mainRemainingJumpsAfterPractice)) errors.push(`Main-path gap needs intermediate independent practice: ${ch.book}/${ch.number}/${name} round ${round}`)
      if (inversions || jumps.length || remainingJumps || mainRemainingJumps) gaps.push({ group:`${ch.book}/${ch.number}/${name}`,round,inversions,jumpBefore:jumps,remainingJumps,mainRemainingJumps,...(mainRemainingJumps ? {support, practiceSets:practice.map(set=>set.id), mainRemainingJumpsAfterPractice} : {}) })
    }
  }
}
for (const cp of data.checkpoints) if (calibrations[cp.book]?.checkpoints[cp.number]?.levels.length !== cp.problems.length) errors.push(`Checkpoint rating count ${cp.id}`)
assert.equal(new Set(rows.map(r=>r.id)).size, rows.length, 'Duplicate source IDs')
if (counts.inherited) errors.push(`${counts.inherited} variants have not had their stems reviewed`)

// Tests exercise real-bank selection: coverage, exact ramps, extension exclusion,
// no duplicates, broad topics, and no dependency on lazy-loaded variants.
let state = 94019
const random = () => ((state = (state * 1664525 + 1013904223) >>> 0) / 2 ** 32)
const pool = calibratedPool(data.chapters, data.checkpoints)
if (!errors.length) {
  for (const [mode, profile] of Object.entries(DRAW_PROFILES)) {
    for (let trial=0;trial<100;trial++) {
      const picked = selectPaper(pool, profile, { random, foundationOnly: mode !== 'draw' })
      assert.deepEqual(picked.map(p=>p.calibration.level), profile, `${mode} exact ramp`)
      assert.equal(new Set(picked.map(p=>p.calibration.id)).size, profile.length, `${mode} unique`)
      assert(picked.every(p=>p.calibration.scope !== 'extension' && p.calibration.basis === 'editorial'))
      if (mode !== 'draw') assert(picked.every(p=>p.calibration.id.startsWith('prealgebra/') && !p.calibration.id.includes('checkpoint')))
      assert(new Set(picked.map(p=>pool.find(e=>e.p===p).topic)).size >= 5, `${mode} topic spread`)
    }
  }
  assert.throws(()=>selectPaper([], [1]), /No unused/)
  for (const section of ['12.2','12.3','19.4']) {
    const chapter = Number(section.split('.')[0])
    for (let index=0;index<10;index++) assert.equal(problemCalibration('intro-algebra',chapter,section,index)?.scope,'extension')
  }
  for (const section of Object.keys(calibrations['intro-geometry'].chapters[18].sections)) {
    for (let index=0;index<10;index++) assert.equal(problemCalibration('intro-geometry',18,section,index)?.scope,'extension')
  }
  const original = [{calibration:{level:3}}, {calibration:{level:1}}, {calibration:{level:2}}]
  assert.deepEqual(inDifficultyOrder(original).map(p=>p.calibration.level), [1,2,3])
  assert.equal(original[0].calibration.level, 3, 'Sort must not mutate source order')
}

// Detect changed stems/keys/solutions since the reviewed snapshot. Updating the
// snapshot is an explicit authoring action, never part of the CI validation run.
const snapshotPath = 'src/data/calibration/source-snapshot.json'
const snapshot = Object.fromEntries(rows.map(r=>[r.id,r.digest]))
if (!write) {
  try {
    const saved = JSON.parse(await readFile(snapshotPath,'utf8'))
    for (const [id, hash] of Object.entries(snapshot)) if (saved[id] !== hash) errors.push(`Content changed; review calibration: ${id}`)
    for (const id of Object.keys(saved)) if (!(id in snapshot)) errors.push(`Removed source item: ${id}`)
  } catch (e) { errors.push(`Calibration snapshot unavailable: ${e.message}`) }
}
const summary = { ...counts, chapters:data.chapters.length, checkpoints:data.checkpoints.length, arenaPapers:data.papers.length,
  transitionSets:data.transitions.length,
  pool:pool.length, baseGroupsWithOrderChanges:gaps.filter(g=>g.round===1&&g.inversions).length,
  remainingGapGroups:gaps.filter(g=>g.remainingJumps).length,
  mainPathGapGroups:gaps.filter(g=>g.mainRemainingJumps).length,
  mainPathGapGroupsWithWorkedSupport:gaps.filter(g=>g.mainRemainingJumps&&g.support.length).length,
  mainPathGapGroupsWithIndependentPractice:gaps.filter(g=>g.mainRemainingJumps&&g.practiceSets?.length&&!g.mainRemainingJumpsAfterPractice).length,
  note:'Editorial estimates of reasoning demand. Variant-equivalent means all stems were compared and retained the base level; variant-reviewed has an explicit override. Inherited is provisional. Neither stem review nor a content hash proves every answer. No student timing/accuracy calibration has been performed.' }
if (write && !errors.length) {
  await mkdir('notes/audits', {recursive:true})
  await writeFile(snapshotPath, JSON.stringify(snapshot,null,2)+'\n')
  await writeFile('notes/audits/difficulty-summary.json', JSON.stringify({summary,gaps},null,2)+'\n')
  const csv = ['id,path,level,scope,basis', ...rows.map(r=>[r.id,r.path,r.level,r.scope,r.basis].join(','))].join('\n')+'\n'
  await writeFile('notes/audits/difficulty-items.csv',csv)
}
console.log(JSON.stringify(summary,null,2))
if (errors.length) { console.error(errors.join('\n')); process.exitCode=1 }
else console.log('PASS: complete rating coverage; 300 seeded papers; topic spread; source IDs; nonmutating order; source snapshot.')
