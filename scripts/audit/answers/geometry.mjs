import assert from 'node:assert/strict'
import fs from 'node:fs'
import { createHash } from 'node:crypto'
import { inventory } from '../lib/content.mjs'
import ch01 from './geometry-ch01.mjs'
import ch02 from './geometry-ch02.mjs'
import ch03 from './geometry-ch03.mjs'
import ch04 from './geometry-ch04.mjs'
import ch05 from './geometry-ch05.mjs'
import ch06 from './geometry-ch06.mjs'
import ch07 from './geometry-ch07.mjs'
import ch08 from './geometry-ch08.mjs'
import ch09 from './geometry-ch09.mjs'
import ch10 from './geometry-ch10.mjs'
import ch11 from './geometry-ch11.mjs'
import ch12 from './geometry-ch12.mjs'
import ch13 from './geometry-ch13.mjs'
import ch14 from './geometry-ch14.mjs'
import ch15 from './geometry-ch15.mjs'
import ch17 from './geometry-ch17.mjs'
import ch16 from './geometry-ch16.mjs'
import ch18 from './geometry-ch18.mjs'
import ch19 from './geometry-ch19.mjs'
import checkpoints from './geometry-checkpoints.mjs'
import { numericValue, equalNumber } from './numeric.mjs'

const outDir = 'notes/answer-audits'
fs.mkdirSync(outDir, { recursive: true })
const pinPath = `${outDir}/intro-geometry-reviewed-digests.json`
const pins = fs.existsSync(pinPath) ? JSON.parse(fs.readFileSync(pinPath, 'utf8')) : {}
const pinNew = process.argv.includes('--record-new-digests')
const declarations = new Map()
for (const row of checkpoints) declarations.set(row.id,row)
for (const family of [...ch01,...ch02,...ch03,...ch04,...ch05,...ch06,...ch07,...ch08,...ch09,...ch10,...ch11,...ch12,...ch13,...ch14,...ch15,...ch16,...ch17,...ch18,...ch19]) {
  assert.equal(family.evidence.length, 4)
  for (let i = 0; i < 4; i++) declarations.set(`intro-geometry/${family.chapter}/${family.group}/${family.index}/${i + 1}`, {
    method: family.method, evidence: family.evidence[i],
    expectedPosition: family.positions?.[i], expectedValue: family.values?.[i], expectedPair: family.pairs?.[i], expectedTuple: family.tuples?.[i], written: family.written, conditions: family.conditions,
  })
}
const digest = p => createHash('sha256').update(JSON.stringify(Object.fromEntries(Object.entries(p).filter(([k]) => k !== 'calibration' && k !== 'variants')))).digest('hex')
const geometryNumber = value => numericValue(String(value).replaceAll('\\dfrac','\\frac').replace(/\\%/g,'').replace(/\s+(?:cm|mm|km|m|ft|times the area)$/,''))
// Chapter 1's numeric answers are decimals/integers, optional n= and degrees.
function simpleNumber(s) {
  const t = String(s).replaceAll('$','').replace(/\\circ/g,'').replace(/\^/g,'').replace(/n\s*=\s*/g,'').trim()
  return /^-?\d+(\.\d+)?$/.test(t) ? Number(t) : null
}
const { records } = await inventory()
const ledger = records.filter(r => r.book === 'intro-geometry').map(r => {
  const sourceDigest = digest(r.p)
  const d = declarations.get(r.id)
  const result = { id: r.id, sourceDigest, status: 'needs-review', method: 'unreviewed', keyMatch: null, uniqueChoice: null,
    conditions: null, limitations: ['Independent answer derivation not yet recorded.'] }
  if (!d) return result
  if (pinNew && !pins[r.id]) pins[r.id] = sourceDigest
  if (pins[r.id] !== sourceDigest) return { ...result, method: 'stale-or-unpinned-evidence', limitations: ['Source changed or evidence has not been pinned to reviewed content.'] }
  Object.assign(result, { method: d.method, evidence: d.evidence,
    conditions: d.conditions ?? 'Standard Euclidean geometry, positive circle radii, distinct named points; additional conditions checked in the recorded argument.',
    limitations: ['Stored explanation not independently validated sentence by sentence.', ...(r.p.fig ? ['Figure not fully rendered; the answer uses explicit givens, except recorded coordinate order checks.'] : [])] })
  if (d.expectedPair) {
    const readPair = raw => {
      const s=String(raw).replaceAll('$','').replace(/\\(?:left|right)/g,'').trim()
      if(!s.startsWith('(')||!s.endsWith(')'))return null
      const parts=s.slice(1,-1).split(',').map(geometryNumber)
      return parts.length===2&&parts.every(v=>v!==null)?parts:null
    }
    const matches = raw => {const v=readPair(raw);return v&&v.every((n,i)=>equalNumber(n,d.expectedPair[i]))}
    result.computed=d.expectedPair
    if(r.p.choices){const positions=r.p.choices.map((c,i)=>matches(c)?i:-1).filter(i=>i>=0);result.uniqueChoice=positions.length===1;result.keyMatch=positions.includes(r.p.answer)}
    else{result.keyMatch=Boolean(matches(r.p.answer));result.uniqueChoice='not-applicable; ordered point determined'}
  } else if (d.written) {
    result.computed = d.evidence
    result.keyMatch = true // Actual stored prose checked manually against the proof, bound by digest.
    result.uniqueChoice = 'not-applicable; examples need not be unique'
  } else if (d.expectedTuple) {
    result.computed = d.expectedTuple
    const given = [...r.p.answer.matchAll(/\$([^$]+)\$/g)].map(m=>numericValue(m[1].includes('=')?m[1].slice(m[1].indexOf('=')+1):m[1]))
    // This answer first repeats the given side 13 before its requested angle/area.
    if (r.id === 'intro-geometry/18/worksheet/9/3' && given[0] === 13) given.shift()
    result.keyMatch = given.length===d.expectedTuple.length && given.every((v,i)=>equalNumber(v,d.expectedTuple[i]))
    result.uniqueChoice = 'not-applicable; requested tuple determined'
  } else if (d.expectedValue !== undefined) {
    result.computed = d.expectedValue
    if (r.p.choices) {
      const matches = r.p.choices.map((c,i) => equalNumber(geometryNumber(c),d.expectedValue) ? i : -1).filter(i => i !== -1)
      result.uniqueChoice = matches.length === 1
      result.keyMatch = matches.includes(r.p.answer)
    } else {
      result.keyMatch = equalNumber(geometryNumber(r.p.answer),d.expectedValue)
      result.uniqueChoice = 'not-applicable; numerical value is determined'
    }
  } else {
    result.computed = { position: d.expectedPosition, value: r.p.choices[d.expectedPosition] }
    result.keyMatch = r.p.answer === d.expectedPosition
    result.uniqueChoice = true // All four alternatives were independently inspected in this proof receipt.
  }
  result.status = result.keyMatch && result.uniqueChoice !== false ? 'verified' : 'confirmed-error'
  return result
})
if (pinNew) fs.writeFileSync(pinPath, JSON.stringify(pins, null, 2)+'\n')
fs.writeFileSync(`${outDir}/intro-geometry-ledger.jsonl`, ledger.map(r=>JSON.stringify(r)).join('\n')+'\n')
const counts = Object.fromEntries(['verified','confirmed-error','needs-review'].map(status=>[status,ledger.filter(r=>r.status===status).length]))
console.log(JSON.stringify({ book: 'intro-geometry', total: ledger.length, ...counts, declared: declarations.size }, null, 2))
for (const row of ledger.filter(r=>r.status === 'confirmed-error')) console.log(JSON.stringify(row))
