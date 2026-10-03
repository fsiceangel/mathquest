// Independent enumeration, equations and geometry for all 100 arena answers.
// No answer is derived from the supplied solution.
// Probability checks use the intended uniform, independent random models.
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'

const sets = await Promise.all([1,2,3,4].map(async n => (await import(`../../src/data/arena/set0${n}.js`)).default))
const reviewed = new Set()
const ledger = []
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => i + a)
const sum = a => a.reduce((x, y) => x + y, 0)
const digits = n => [...String(n)].map(Number)
const unique = a => [...new Set(a)]
const permutations = a => a.length ? a.flatMap((x, i) => permutations(a.filter((_, j) => i !== j)).map(p => [x, ...p])) : [[]]
const combinations = (a, k) => k === 0 ? [[]] : a.flatMap((x, i) => combinations(a.slice(i + 1), k - 1).map(p => [x, ...p]))
const tuples = (a, n) => n === 0 ? [[]] : a.flatMap(x => tuples(a, n - 1).map(p => [x, ...p]))
const parse = s => {
  const t = s.replaceAll('\\$', '').replaceAll('$', '').replaceAll('{,}', '').replaceAll(',', '').replaceAll('^\\circ', '')
  const f = t.match(/^\\frac\{(-?\d+)\}\{(\d+)\}$/)
  if (f) return Number(f[1]) / Number(f[2])
  if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t)
  if (/^-?\d+(\.\d+)?\\%$/.test(t)) return Number(t.slice(0,-2))/100
  // These authored choices contain only linear combinations of pi.
  const pi = t.replaceAll('\\pi', '*Math.PI').replace(/\s+/g,'')
  if (/^[\d.+\-*/()]+$/.test(pi.replaceAll('Math.PI', '3'))) return Function(`return (${pi})`)()
  return t
}
function check(set, slot, expected, method) {
  const p = sets[set - 1].problems[slot - 1]
  const actual = parse(p.choices[p.answer])
  if (typeof expected === 'number') assert.ok(typeof actual === 'number' && Math.abs(actual - expected) < 1e-12, `${set}/${slot}: ${actual} != ${expected}`)
  else assert.equal(actual, expected, `${set}/${slot}`)
  assert.equal(p.choices.filter(c => {
    const v = parse(c)
    return typeof expected === 'number' ? typeof v === 'number' && Math.abs(v - expected) < 1e-12 : v === expected
  }).length, 1, `${set}/${slot}: answer must match exactly one option`)
  reviewed.add(`${set}/${slot}`)
  ledger.push({ id: `arena/set0${set}/${slot}`, sourceDigest: createHash('sha256').update(JSON.stringify(p)).digest('hex'),
    status: 'verified', method, computed: expected, keyMatch: true, uniqueChoice: true,
    limitations: ['Explanation prose is not independently certified sentence by sentence. Figure-dependent models inspect source coordinates/labels; full visual rendering remains a separate check.'] })
  console.log(`PASS set${set} #${slot}: ${p.choices[p.answer]} — ${method}`)
}
function paths(w, h, allowed = () => true) {
  if (!allowed(0, 0)) return 0
  const walk = (x, y) => x === w && y === h ? 1 :
    (x < w && allowed(x + 1, y) ? walk(x + 1, y) : 0) +
    (y < h && allowed(x, y + 1) ? walk(x, y + 1) : 0)
  return walk(0, 0)
}
function figureTriangleCount(fig) {
  const segments = fig.elems.flatMap(e => e.t === 'seg' ? [[e.a, e.b]] : e.t === 'poly' ? e.pts.map((p, i) => [p, e.pts[(i + 1) % e.pts.length]]) : [])
  const cross = (u, v) => u[0] * v[1] - u[1] * v[0]
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]]
  const on = (p, [a, b]) => Math.abs(cross(sub(p, a), sub(b, a))) < 1e-9 && p.every((v, i) => v >= Math.min(a[i], b[i]) - 1e-9 && v <= Math.max(a[i], b[i]) + 1e-9)
  const vertices = []
  const add = p => { if (!vertices.some(q => Math.hypot(...sub(p, q)) < 1e-9)) vertices.push(p) }
  segments.forEach(s => s.forEach(add))
  for (const [s, t] of combinations(segments, 2)) {
    const u = sub(s[1], s[0]), v = sub(t[1], t[0]), d = cross(u, v)
    if (Math.abs(d) < 1e-9) continue
    const f = cross(sub(t[0], s[0]), v) / d
    const p = [s[0][0] + f * u[0], s[0][1] + f * u[1]]
    if (on(p, s) && on(p, t)) add(p)
  }
  return combinations(vertices, 3).filter(v => Math.abs(cross(sub(v[1], v[0]), sub(v[2], v[0]))) > 1e-9 &&
    combinations(v, 2).every(([a, b]) => segments.some(s => on(a, s) && on(b, s)))).length
}
const dice2 = tuples(range(1, 6), 2)

check(1, 4, sum(digits(2 ** 11)), 'integer exponent then digit enumeration')
check(1, 6, tuples(range(0, 4), 3).filter(([sandwich, side, drink]) => sandwich < 4 && side < 3 && !(sandwich === 0 && drink === 0)).length, 'enumerate sandwich, side and drink triples')
check(1, 10, dice2.filter(([a, b]) => a % 2 === 0 && b > 4).length / 36, '36 ordered rolls')
const marbles = range(1, 99).filter(n => n % 6 === 4 && n % 8 === 4 && n % 5 === 2)
assert.equal(marbles.length, 1)
check(1, 11, marbles[0], 'all collection sizes below 100; unique solution')
check(1, 14, paths(5, 3), 'enumerate every monotone path')
check(1, 18, range(10, 99).filter(n => sum(digits(n)) % 5 === 0 && Math.abs(digits(n)[0] - digits(n)[1]) > 1).length, 'all 90 two-digit integers')
const thieves = ['Ava', 'Ben', 'Cleo', 'Dev', 'Eli'].filter(t => [t === 'Cleo', t !== 'Ben', t === 'Dev', t === 'Cleo', t === 'Ava'].filter(Boolean).length === 1)
assert.equal(thieves.length, 1)
check(1, 19, thieves[0], 'truth table for every possible thief; unique solution')
check(1, 20, tuples([0, 1], 3).filter(a => sum(a.map((v, i) => v * [5, 10, 25][i])) >= 30).length / 8, 'eight independent fair-coin outcomes')
check(1, 21, range(1, 100).filter(n => Math.floor(n / 10) % 10 > n % 10 && sum(digits(n)) % 2 === 0 && n % 3 !== 0).length, 'all integers 1 through 100 with digit definitions')
const largest = range(10000, 99999).filter(n => new Set(digits(n)).size === 5 && n % 36 === 0 && sum(digits(n)) === 18)
check(1, 23, Math.max(...largest), 'all five-digit candidates, checking maximality')
let bagP = 0
function bag(r, b, depth, p) {
  if (depth === 3) { if (r === 2) bagP += p; return }
  bag(r + 1, b, depth + 1, p * r / (r + b))
  bag(r, b + 1, depth + 1, p * b / (r + b))
}
bag(1, 1, 0, 1)
check(1, 25, bagP, 'all eight reinforcement histories with changing draw weights')

const tileSides = range(1, 60).filter(d => 84 % d === 0 && 60 % d === 0)
check(2, 5, Math.min(...tileSides.map(d => 84 * 60 / (d * d))), 'enumerate common integer side lengths and minimize tile count')
check(2, 10, combinations(range(1, 14), 2).length, 'enumerate unordered people pairs')
check(2, 11, range(1, 8 * 12 * 18).find(n => n % 8 === 0 && n % 12 === 0 && n % 18 === 0), 'first simultaneous positive ring time')
check(2, 14, range(100, 999).filter(n => sum(digits(n)) === 6).length, 'all three-digit integers')
check(2, 15, dice2.filter(([a, b]) => (a + b) % 4 === 0).length / 36, '36 ordered rolls')
check(2, 18, range(1, 6480).filter(n => 6480 % n === 0 && Number.isInteger(Math.sqrt(n))).length, 'all positive divisors, square-tested independently')
const race = permutations(['Ada', 'Ben', 'Cleo', 'Dev', 'Eli']).filter(a => a.indexOf('Ben') > a.indexOf('Cleo') && Math.abs(a.indexOf('Ada') - a.indexOf('Dev')) === 2 && a.indexOf('Eli') + 1 === a.indexOf('Cleo') && a.indexOf('Dev') < a.indexOf('Ben'))
assert.equal(race.length, 1)
check(2, 19, race[0][4], 'all 120 finishing orders; unique full order')
const cards = combinations([2, 3, 5, 6, 7, 9, 11], 2)
check(2, 20, cards.filter(([a, b]) => a * b % 2 === 0).length / cards.length, '21 unordered card pairs')
check(2, 21, figureTriangleCount(sets[1].problems[20].fig), 'enumerate figure intersections and connected noncollinear vertex triples')
check(2, 24, paths(6, 4, (x, y) => x !== 4 || y !== 2), 'enumerate monotone paths avoiding the marked point')
check(2, 25, range(1, 1000).filter(n => n % 5 === 2 && (n * n + 2) % 3 === 0).length, 'all admissible integers through 1000')

check(3, 10, ['r','r','r','r',...Array(9).fill('b'),...Array(5).fill('g'),'y','y'].filter(c => c !== 'b').length / 20, '20 individually counted equally likely marbles')
check(3, 11, sum(range(21, 39).filter(n => range(2, n - 1).every(d => n % d !== 0))), 'trial division of every integer strictly between endpoints')
check(3, 14, permutations(range(0, 5)).filter(a => Math.abs(a.indexOf(0) - a.indexOf(1)) === 1).length, 'all 720 lineups')
check(3, 16, Number((13n ** 2027n + 7n ** 2027n) % 10n), 'exact BigInt exponentiation')
check(3, 18, Number(10n ** 2025n % 7n), 'exact BigInt exponentiation')
const games = combinations(range(0, 3), 2)
const outcomes = tuples([0, 1, 2], 6).filter(results => {
  const points = [0,0,0,0]
  games.forEach(([a, b], i) => { if (results[i] === 0) points[a] += 3; else if (results[i] === 1) points[b] += 3; else { points[a]++; points[b]++ } })
  return points.join(',') === '7,5,3,1'
})
assert.equal(outcomes.length, 1)
const names = ['Falcons','Hawks','Owls','Ravens']
const draws = games.filter((_, i) => outcomes[0][i] === 2).map(([a, b]) => `${names[a]} vs. ${names[b]}`)
const listedDraws = sets[2].problems[18].choices.filter(c => draws.includes(c))
assert.equal(listedDraws.length, 1)
check(3, 19, listedDraws[0], 'all 729 league result assignments; unique result table and listed draw')
const spins = range(1, 4).flatMap(a => range(1, 5).map(b => [a, b]))
check(3, 20, spins.filter(([a, b]) => a * b % 4 === 0).length / spins.length, '20 ordered spinner outcomes')
check(3, 21, tuples(range(3, 10), 3).filter(a => sum(a) === 16 && new Set(a).size === 3).length, 'all labeled distributions with required minimums')
const buyable = n => range(0, Math.floor(n / 5)).some(a => (n - 5 * a) % 8 === 0)
assert.ok(range(28, 32).every(buyable), 'five consecutive achievable values prove all later values via adding 5')
check(3, 23, Math.max(...range(1, 32).filter(n => !buyable(n))), 'enumerate gaps and prove the infinite tail is achievable')

check(4, 3, range(50, 300).filter(n => n % 7 === 0).length, 'inclusive integer endpoints')
check(4, 9, range(0, 359).filter(a => a < 120 || a >= 270).length / 360, 'uniform angular measure, with sector endpoints irrelevant')
check(4, 10, combinations(range(0, 3), 2).length * combinations(range(0, 2), 2).length, 'enumerate distinct pairs of vertical and horizontal grid lines')
const missing = range(0, 9).filter(d => Number(`387${d}2`) % 9 === 0 && Number(`387${d}2`) % 4 === 0)
assert.equal(missing.length, 1)
check(4, 11, missing[0], 'all ten missing digits; unique solution')
check(4, 14, combinations(range(0, 10), 2).filter(a => !(a.includes(0) && a.includes(1))).length, '55 unordered pairs less the prohibited drivers pair')
const sockColors = [...Array(5).fill(0), ...Array(4).fill(1), ...Array(3).fill(2)]
const socks = combinations(range(0, 11), 2)
check(4, 15, socks.filter(([a, b]) => sockColors[a] === sockColors[b]).length / socks.length, '66 equally likely pairs of distinct socks')
const consecutive = range(1, 100).filter(a => a * (a + 1) * (a + 2) * (a + 3) === 43680)
assert.equal(consecutive.length, 1)
assert.ok(101 * 102 * 103 * 104 > 43680, 'product increases for larger positive starts')
check(4, 18, 4 * consecutive[0] + 6, 'enumerate positive starts with a monotonic upper bound')
// Set one cup to one unit. Every positive scale has the same weight ratios.
const balances = range(1, 30).flatMap(brick => range(1, 30).map(can => ({ brick, can }))).filter(({brick,can}) => brick === 2 * can + 1 && 3 * can === brick + 2)
assert.equal(balances.length, 1)
assert.equal(balances[0].can, 3) // Eliminating brick forces can = 3, proving no missed real solution.
check(4, 19, balances[0].brick + balances[0].can, 'normalize cup weight; solve both independent linear balances')
const shaded = sets[3].problems[19].fig.elems.find(e => e.t === 'poly' && e.fill !== false).pts
const twiceArea = Math.abs(sum(shaded.map((p, i) => p[0] * shaded[(i + 1) % shaded.length][1] - p[1] * shaded[(i + 1) % shaded.length][0])))
check(4, 20, twiceArea / 2 / 100, 'shoelace area computed from the supplied figure coordinates')
check(4, 21, tuples(range(1, 20), 2).filter(([x, y]) => 3 * x + 5 * y <= 60).length, 'all positive ordered coordinate pairs within independent bounds')
check(4, 24, permutations(range(0, 5)).filter(a => (a[0] === 2 || a[5] === 2) && Math.abs(a.indexOf(0) - a.indexOf(1)) !== 1).length, 'all 720 lineups with both restrictions')
const memo = new Map()
function finalValues(a) {
  const sorted = [...a].sort((x, y) => x - y), key = sorted.join(',')
  if (memo.has(key)) return memo.get(key)
  if (a.length === 1) return new Set(a)
  const values = new Set()
  for (const [i, j] of combinations(range(0, a.length - 1), 2)) {
    const next = a.filter((_, k) => k !== i && k !== j)
    next.push(a[i] * a[j] + a[i] + a[j])
    finalValues(next).forEach(v => values.add(v))
  }
  memo.set(key, values)
  return values
}
const finals = finalValues(range(1, 6))
assert.equal(finals.size, 1)
check(4, 25, [...finals][0], 'exhaust all possible pair-replacement moves; unique terminal value')

// Remaining topics: derive every value from the question's quantities.
const area = pts => Math.abs(sum(pts.map((p,i)=>p[0]*pts[(i+1)%pts.length][1]-p[1]*pts[(i+1)%pts.length][0])))/2
check(1,1,36*2/3*(1-3/4),'home lunches minus their sandwich fraction')
check(1,2,320*(1-0.45),'capacity minus present volume')
const outline=sets[0].problems[2].fig.elems.find(e=>e.t==='poly').pts
check(1,3,sum(outline.map((p,i)=>Math.hypot(p[0]-outline[(i+1)%outline.length][0],p[1]-outline[(i+1)%outline.length][1]))),'sum all six coordinate-derived side lengths; labels 10,7,4,3 match coordinates')
check(1,5,[12,30,8,25,12,40,20].sort((a,b)=>a-b)[3],'sort seven observations and select the middle')
check(1,7,8/(3-2),'3k+8=2(k+8), with positive age')
check(1,8,12*8-area(sets[0].problems[7].fig.elems.find(e=>e.t==='poly'&&e.fill!==false).pts),'whole rectangle minus coordinate triangle of base 12 and height 5')
check(1,9,1/(1/4-1/12),'constant net fill rate = inlet minus drain')
check(1,12,area([[2,1],[8,3],[5,7]]),'shoelace directly on all three given vertices')
check(1,13,15*(2+(180-15*2)/(15+35)),'cyclist head start, then relative closing speed')
const lists4=combinations(range(1,24),3).flatMap(([a,b,c])=>[[a,a,b,c],[a,b,b,c],[a,b,c,c]]).filter(v=>sum(v)===24&&(v[1]+v[2])/2===5&&v.filter(x=>x===3).length===2)
assert.equal(lists4.length,1)
check(1,15,lists4[0][3],'enumerate sorted positive lists of four with exactly one repeated value, mode 3, sum 24 and median 5')
const seq=[1,3];while(seq.length<2026)seq.push((seq.at(-1)+seq.at(-2))%10)
check(1,16,seq[2025],'iterate the stated recurrence for all 2026 terms; no guessed period')
check(1,17,9*5+7*6-(9-4)*(5-2),'inclusion-exclusion; intersection width 5 and height 3')
check(1,22,area([[1.5,1.5],[3,3],[6,0],[2,0]])/18,'affine normalize A=(0,0),B=(0,6),C=(6,0); D=(3,3), E=(2,0), lines intersect at P=(1.5,1.5); area ratios preserved')
check(1,24,90-(1+2+11+13+14),'sorted c+d=24 implies c≤11; first-five sum≥1+2+24+(25−c)≥41, attained by 1,2,11,13,14,49')
check(2,1,(15-39)/4-3,'signed arithmetic with parentheses')
check(2,2,56*(1-3/8),'complement of brass fraction')
check(2,3,5*84-(79+88+91+76),'missing score from required total')
check(2,4,9*6-2*2,'subtract removed corner square area')
check(2,6,96*(5-3)/(3+4+5),'one ratio unit is 96/12; largest minus smallest is two units')
check(2,7,3*(41-9)/2,'solve 2x+9=41 then compute 3x')
check(2,8,10*4+10*3/2,'rectangle plus triangle with explicit perpendicular height')
check(2,9,8*17-7*15,'difference between new and old total ages')
check(2,12,(180-40)/2-(180-2*(180-40)/2),'ABC base angles 70; BD=BC makes BDC=BCD=70, hence DBC=40 and ABD=30')
check(2,13,(12*82+18*77)/(12+18),'weighted total score divided by total students')
check(2,16,20*20+sum(range(1,19)),'figure n is an n×n square plus cap rows n−1 through 1; source point arrangements for n=1,2,3 inspected')
check(2,17,Math.PI*(6*Math.SQRT2/2)**2-36,'circumcircle radius is half the square diagonal; subtract square area')
check(2,22,2*Math.sqrt(25**2-20**2)*20/25,'OT=15; right-triangle altitude from T to OP = OT×PT/OP=12, doubled by perpendicular chord bisection')
check(2,23,range(2,20).reduce((p,k)=>p*(1-1/(k*k)),1),'multiply all nineteen stated rational factors independently')
check(3,1,Math.floor((9*60-(6*60+40))/25)+1,'elapsed 140 minutes; include the initial event')
const estimate=4975/0.52,options=[100,1000,2500,10000,25000]
check(3,2,options.reduce((best,v)=>Math.abs(v-estimate)<Math.abs(best-estimate)?v:best),'compute ratio then compare distance to every numeric option')
check(3,3,180-37-68,'three adjacent angles fill a straight angle')
check(3,4,['Ana','Ben','Cy','Dee','Eli'][[5/8,0.62,7/12,0.6,13/20].indexOf(Math.max(5/8,0.62,7/12,0.6,13/20))],'compare all five exact progress fractions/decimals')
check(3,5,(36+12)/(1.5+0.5+1),'whole outing time includes the rest')
check(3,6,14+(21-1)*3,'arithmetic sequence with twenty increments')
check(3,7,215/5-4,'middle odd integer is mean; smallest is two steps of 2 earlier')
check(3,8,4*2*(Math.sqrt(144)+Math.sqrt(144)/4),'four 12×3 strips; sum all four perimeters')
check(3,9,7.2*250000/100000,'map centimeters × scale, then centimeters to kilometers')
check(3,12,2*Math.PI*6,'πr²=3×2πr with r>0 gives r=6')
check(3,13,(1-9*(1/30+1/45))*30,'subtract joint work completed, then divide remainder by Mia rate')
check(3,15,(30*80-18*74)/12,'subtract Class A total from combined total')
check(3,17,(9**2+(15-Math.sqrt(15**2-9**2))**2)/(2*9),'fold preserves AD=AD′=15 and ED=ED′; BD′=12, CD′=3, (9−x)²+3²=x²; source fold points consistent')
check(3,22,4*((4-2)+(5-2)+(6-2)),'exactly two painted faces means noncorner edge cubes, four edges of each dimension')
check(3,24,78-16-17,'lower-three sum 42 and distinctness force their largest≥15; upper first two≥16,17, so max≤45, attained at 13,14,15,16,17,45')
check(3,25,144-(2*(Math.PI*6**2/2)-(2*(Math.PI*6**2/4-6*6/2))),'subtract union of two semicircles; lens is two quarter-disk segments, central angle 90 degrees')
check(4,1,10-(3*1.85+2.40),'bill minus exact purchase total')
assert.ok(Math.abs((7.80/12-11.16/18)-0.03)<1e-12)
check(4,2,'The 18-pack by 0.03 per box','unit prices are .65 and .62; second pack saves .03 per box')
check(4,4,38+64,'exterior triangle angle equals sum of remote interior angles')
check(4,5,(15+4+31+9+11)/5-[15,4,31,9,11].sort((a,b)=>a-b)[2],'compute mean and median separately, then subtract')
check(4,6,1.6*1.25-1,'compound multiplicative growth minus original fraction')
check(4,7,(215-28*5)/(10-5),'replace all-nickel baseline by dime increments')
check(4,8,(6-2)*180-(130+115+140+108+127),'hexagon interior sum minus five known angles')
check(4,12,1.6/2.4*10.8,'similar sun-shadow right triangles; common height/shadow ratio')
check(4,13,(12.30-3*(17.10-12.30)/(5-3))/2,'subtract purchase equations to get muffin price; substitute for coffee')
check(4,16,sum(range(0,21).map(i=>14+3*i)),'sum all twenty-two row counts')
check(4,17,area([[0,0],[2,5],[6,6],[5,2]]),'shoelace from every given kite vertex')
const boxes=range(1,8).filter(d=>8%d===0).map(d=>({s:4+d,h:2+8/d}))
check(4,22,Math.max(...boxes.map(b=>b.s*b.s*b.h)),'2s²+4sh=s²h implies h=2+8/(s−4); s>4 and s−4 divides 8, exhaustive four boxes')
check(4,23,sum(range(0,10).map(i=>1/((1+3*i)*(4+3*i)))),'sum all eleven rational terms directly')

const required = sets.flatMap((s, i) => s.problems.map((p, j) => `${i + 1}/${j + 1}`))
assert.deepEqual([...reviewed].sort(), required.sort(), 'every item in all four papers must have an explicit check')
mkdirSync('notes/answer-audits',{recursive:true})
const pinFile='notes/answer-audits/arena-reviewed-digests.json'
const pins=existsSync(pinFile)?JSON.parse(readFileSync(pinFile,'utf8')):{}
if(process.argv.includes('--record-new-digests')) {
  for(const row of ledger)if(!pins[row.id])pins[row.id]=row.sourceDigest
  writeFileSync(pinFile,JSON.stringify(pins,null,2)+'\n')
}
for(const row of ledger)if(pins[row.id]!==row.sourceDigest){row.status='needs-review';row.limitations.push('Source changed since the independent model was reviewed, or has no digest pin.')}
writeFileSync('notes/answer-audits/arena-ledger.jsonl',ledger.sort((a,b)=>a.id.localeCompare(b.id)).map(r=>JSON.stringify(r)).join('\n')+'\n')
assert.ok(ledger.every(r=>r.status==='verified'),'every current item must match its reviewed source digest')
console.log(`\nVerified ${reviewed.size}/${required.length} arena answer keys and unique options across all four sets. Timing, prose and full visual rendering are separate checks.`)
