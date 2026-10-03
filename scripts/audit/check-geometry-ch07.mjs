// Regression check: area/inradius identities alone do not prove a triangle exists.
import assert from 'node:assert/strict'
import base from '../../src/data/intro-geometry/ch07.js'
import s3 from '../../src/data/variants/intro-geometry/ch07-s3.js'
import mixed from '../../src/data/variants/intro-geometry/ch07-s7.js'
import ws from '../../src/data/variants/intro-geometry/ch07-ws.js'
import similarBase from '../../src/data/intro-geometry/ch05.js'
import similarVariants from '../../src/data/variants/intro-geometry/ch05-s6.js'

const cases = [
  [base.challenge[3], 'rA'],
  [mixed.challenge[3][0], 'Ar'],
  [mixed.challenge[3][2], 'rA'],
  [s3.sections['7.3'][2][0], 'AP'],
  [s3.sections['7.3'][5][0], 'rs'],
  [s3.sections['7.3'][5][1], 'Pr'],
  [s3.sections['7.3'][5][2], 'rs'],
  ...ws.worksheet[2].map(p => [p, 'PA']),
]
for (const [p, given] of cases) {
  const nums = [...p.q.matchAll(/\$(\d+(?:\.\d+)?)\$/g)].map(m => Number(m[1]))
  assert.equal(nums.length, 2, p.q)
  const v = Object.fromEntries([...given].map((key, i) => [key, nums[i]]))
  if (v.P !== undefined) v.s = v.P / 2
  if (v.A !== undefined && v.r !== undefined) v.s = v.A / v.r
  if (v.A === undefined) v.A = v.r * v.s
  if (v.r === undefined) v.r = v.A / v.s
  v.P = 2 * v.s
  // Among triangles of fixed perimeter, the equilateral triangle has greatest area.
  assert(v.A > 0 && v.A <= v.P ** 2 / (12 * Math.sqrt(3)) + 1e-9, p.q)
  const expected = given.includes('A') ? (given.includes('r') ? v.P : v.r) : v.A
  const answer = p.choices ? p.choices[p.answer] : p.answer
  assert.equal(Number(answer.match(/\d+(?:\.\d+)?/)[0]), expected, p.q)
}
console.log(`Geometry 7: ${cases.length} repaired numerical premises are feasible and their answer keys agree.`)

// The same feasibility issue affected the similar-triangle area family in ch5.
for (const p of [similarBase.challenge[9], ...similarVariants.challenge[9]]) {
  const values = [...p.q.matchAll(/\$(\d+(?:\.\d+)?)\$/g)].map(m => Number(m[1]))
  assert.equal(values.length, 3, p.q)
  const [smallPerimeter, largePerimeter, smallArea] = values
  const largeArea = smallArea * (largePerimeter / smallPerimeter) ** 2
  assert(smallArea <= smallPerimeter ** 2 / (12 * Math.sqrt(3)), p.q)
  assert(largeArea <= largePerimeter ** 2 / (12 * Math.sqrt(3)), p.q)
  assert.equal(Number(p.choices[p.answer].match(/\d+(?:\.\d+)?/)[0]), largeArea, p.q)
}
console.log('Geometry 5: 4 similar-triangle perimeter/area premises are feasible and their answer keys agree.')
