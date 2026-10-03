import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { inventory } from './lib/content.mjs'
import { sectionAnswerEntries } from '../../src/data/section-answer-entry.js'

// These receipts document human mathematical review; hashes detect subsequent
// edits, and do not substitute for independent derivation or visual inspection.
const reports = ['prealgebra', 'algebra-early', 'algebra-late', 'geometry'].map(name =>
  JSON.parse(readFileSync(`notes/audits/remaining-entry-${name}.json`, 'utf8')))
const sections = reports.flatMap(r => r.sections)
assert.equal(sections.length, 24)
assert.equal(new Set(sections.map(s => s.id)).size, 24)
const { records } = await inventory()
const actual = new Map(records.map(r => [r.id, r.p]))
const reviewed = new Set()
for (const section of sections) {
  assert.equal(section.slots.length, 10, section.id)
  for (const slot of section.slots) {
    assert(slot.reason, slot.id)
    assert.equal(slot.versions.length, 4, slot.id)
    for (let round = 1; round <= 4; round++) {
      const receipt = slot.versions.find(v => v.id === `${slot.id}/${round}`)
      assert(receipt, slot.id)
      assert(!reviewed.has(receipt.id), receipt.id)
      reviewed.add(receipt.id)
      const p = actual.get(receipt.id)
      assert(p, receipt.id)
      const hash = createHash('sha256').update(JSON.stringify([p.q, p.choices, p.answer, p.solution, p.fig])).digest('hex')
      assert.equal(hash, receipt.sha256 ?? receipt.sourceDigest, `Repeat review: ${receipt.id}`)
    }
  }
  for (const id of section.safeSlots) assert.equal(sectionAnswerEntries[id]?.length, 4, id)
}
assert.equal(reviewed.size, 960)
const safeSlots = sections.flatMap(s => s.safeSlots)
assert.equal(safeSlots.length, 10)
const findings = reports.flatMap(r => r.findings ?? [])
assert.equal(findings.length, 4)
const summary = {
  reviewedAt: '2026-10-02', sections: 24, slots: 240, versions: reviewed.size,
  convertedSlots: safeSlots.length, convertedVersions: safeSlots.length * 4,
  findings,
  calibrationReview: 'The four corrections clarify domain, required premises and direct proof reasons. They introduce no new prerequisite or solving step; existing level and scope retained.',
  limitations: 'Mathematical and conversion-suitability review. No new textbook-page comparison, rendered-figure audit or student performance calibration is claimed.',
  sectionDecisions: sections.map(s => ({ id: s.id, reviewedVersions: 40, safeSlots: s.safeSlots, reason: s.reason }))
}
if (process.argv.includes('--write')) writeFileSync('notes/audits/remaining-entry-summary.json', JSON.stringify(summary, null, 2) + '\n')
console.log(`PASS: 24 sections, 240 slots, 960 current review receipts; 10 converted slots / 40 versions; 4 corrected findings.`)
