// Selective independent enumeration after the complete stem review.
// Run: node notes/audits/verify-counting-selected.mjs
import assert from 'node:assert/strict'
import { inventory } from '../../scripts/audit/lib/content.mjs'

const { records } = await inventory()
let checks = 0
function keyValue(p) {
  const key = String(p.choices ? p.choices[p.answer] : p.answer).replace(/[$,]/g, '')
  const fraction = key.match(/^\\frac\{(\d+)\}\{(\d+)\}$/)
  const value = fraction ? Number(fraction[1]) / Number(fraction[2]) : Number(key)
  assert.ok(Number.isFinite(value), `Unparsed key: ${key}`)
  return value
}
function check(chapter, group, number, round, actual) {
  const r = records.find(r => r.book === 'intro-counting' && r.chapter === chapter && r.group === group && r.index === number - 1 && r.round === round)
  assert.ok(r, `Missing ${chapter}/${group}/${number}/${round}`)
  assert.ok(Math.abs(actual - keyValue(r.p)) < 1e-12, `${chapter}/${group}/${number}/${round}: enumerated ${actual}; key ${keyValue(r.p)}`)
  checks++
}
function chooseSets(values, size, visit, prefix = [], start = 0) {
  if (!size) return visit(prefix)
  for (let i = start; i <= values.length - size; i++) chooseSets(values, size - 1, visit, [...prefix, values[i]], i + 1)
}
function permutations(values, visit, prefix = []) {
  if (!values.length) return visit(prefix)
  values.forEach((v, i) => permutations(values.filter((_, j) => i !== j), visit, [...prefix, v]))
}
function bounded(total, variables, cap) {
  if (variables === 1) return Number(total >= 0 && total <= cap)
  let count = 0
  for (let n = 0; n <= Math.min(total, cap); n++) count += bounded(total - n, variables - 1, cap)
  return count
}

let sameProducts = 0, largerFrontSum = 0
for (let n = 1000; n < 10000; n++) {
  const [a, b, c, d] = [...String(n)].map(Number)
  sameProducts += Number(a * b === c * d)
  largerFrontSum += Number(a + b > c + d)
}
check(15, 'challenge', 5, 2, sameProducts)
check(15, 'challenge', 5, 4, largerFrontSum)

const cells = Array.from({ length: 9 }, (_, i) => [i % 3, Math.floor(i / 3)])
for (const [size, corners, round] of [[4, false, 2], [3, true, 4]]) {
  let good = 0, total = 0
  chooseSets(cells, size, set => {
    total++
    if (set.every((a, i) => set.slice(i + 1).every(b => corners ? Math.max(Math.abs(a[0]-b[0]), Math.abs(a[1]-b[1])) > 1 : Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]) > 1))) good++
  })
  check(15, 'challenge', 8, round, good / total)
}

let oneLateRecord = 0, permutationCount = 0
permutations([1,2,3,4,5,6,7,8], order => {
  permutationCount++
  let greatest = 0, lateRecords = 0
  order.forEach((n, i) => { if (n > greatest) { greatest = n; if (i >= 5) lateRecords++ } })
  oneLateRecord += Number(lateRecords === 1)
})
check(15, 'challenge', 12, 4, oneLateRecord / permutationCount)

const dots5 = Array.from({ length: 25 }, (_, i) => [i % 5, Math.floor(i / 5)])
let squares = 0
chooseSets(dots5, 4, set => {
  const distances = []
  set.forEach((a, i) => set.slice(i + 1).forEach(b => distances.push((a[0]-b[0])**2 + (a[1]-b[1])**2)))
  distances.sort((a,b) => a-b)
  if (distances.slice(0,4).every(d => d === distances[0]) && distances[4] === 2*distances[0] && distances[5] === distances[4]) squares++
})
check(15, 'worksheet', 8, 3, squares)
let triangles = 0, triples = 0
chooseSets(Array.from({ length: 16 }, (_, i) => [i % 4, Math.floor(i / 4)]), 3, ([a,b,c]) => {
  triples++
  triangles += Number((b[0]-a[0])*(c[1]-a[1]) !== (b[1]-a[1])*(c[0]-a[0]))
})
check(15, 'worksheet', 8, 4, triangles / triples)

let equalRun = 0
for (let mask = 0; mask < 1024; mask++) equalRun += Number(/000|111/.test(mask.toString(2).padStart(10, '0')))
check(15, 'challenge', 11, 4, equalRun / 1024)
for (const [length, reds, round, wantRun] of [[9,5,3,false], [8,4,4,true]]) {
  let count = 0
  for (let mask = 0; mask < 2**length; mask++) {
    const s = mask.toString(2).padStart(length, '0')
    if ([...s].filter(c => c === '1').length === reds && /000|111/.test(s) === wantRun) count++
  }
  check(3, '3.2', 10, round, count)
}
check(13, '13.3', 3, 2, bounded(11, 5, 3))
check(13, 'challenge', 12, 3, bounded(22, 5, 6))
const caps = Array.from({ length: 12 }, (_, i) => i + 1).filter(cap => bounded(12, 3, cap) === 46)
assert.equal(caps.length, 1)
check(15, '15.2', 3, 4, caps[0])
let ballotGood = 0, ballotTotal = 0
for (let mask = 0; mask < 64; mask++) {
  const bits = [...mask.toString(2).padStart(6, '0')]
  if (bits.filter(c => c === '1').length !== 3) continue
  ballotTotal++
  let balance = 0, good = true
  for (const bit of bits) { balance += bit === '1' ? 1 : -1; if (balance < 0) good = false }
  ballotGood += Number(good)
}
check(15, '15.2', 6, 3, ballotGood / ballotTotal)

const unique = new Set()
permutations(['A','A','B','B','C','D'], p => { const s = p.join(''); if (!/AA|BB/.test(s)) unique.add(s) })
assert.equal(unique.size, 84, 'New two-adjacency worked example')
console.log(`${checks}/${checks} selected answer keys verified by independent enumeration; new overlap example also verified.`)
