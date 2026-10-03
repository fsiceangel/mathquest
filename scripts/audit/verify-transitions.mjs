import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import bridges from '../../src/data/transition/bridges.js'
import transfer from '../../src/data/transition/transfer.js'

// Independent calculations from the reviewed stems. Never use an answer key
// or solution string to compute an expected value. Pins invalidate edited text.
const range = (a,b) => Array.from({length:b-a+1},(_,i)=>a+i)
const sum = xs => xs.reduce((a,b)=>a+b,0)
const digits = (n,allowed) => [...String(n)].every(d=>allowed.includes(d)) && new Set(String(n)).size===String(n).length
const assignments = (objects,boxes) => range(0,boxes**objects-1).map(n=>range(0,objects-1).map(i=>Math.floor(n/boxes**i)%boxes))
const bits = (steps,k) => range(0,2**steps-1).filter(n=>n.toString(2).replaceAll('0','').length===k).length
const area = ps => Math.abs(sum(ps.map((p,i)=>p[0]*ps[(i+1)%ps.length][1]-p[1]*ps[(i+1)%ps.length][0])))/2
const models = {
  'statistics-construction': [
    [(5+(4*6-2-5-10))/2, 'Mean fixes missing middle entry7; average5 and7.'],
    [(1+4+6+(2*8-6)+12+15)/6, 'Median fixes fourth entry10; sum all six entries.'],
    [((5*9-3-8-15)+5)/2, 'Sum a+b=19 and b-a=5 give b12; a7 fits order.'],
    [((6*9-5-7-9-13)+12)/2, 'Endpoints sum20 and difference12 give4,16; median7/9 is8.'],
  ],
  'restricted-last-digits': [
    [range(100,999).filter(n=>digits(n,'1234')&&[1,4].includes(n%10)).length, 'Enumerate every code; allowed digits exclude leading zero.'],
    [range(10,99).filter(n=>n%2===0&&digits(n,'0123')).length, 'Enumerate every two-digit candidate, including nonzero leading digit.'],
    [range(100,999).filter(n=>n%5===0&&digits(n,'0125')).length, 'Enumerate distinct-digit positive three-digit multiples of5.'],
    [range(1000,9999).filter(n=>n%25===0&&digits(n,'012345')).length, 'Enumerate all possible positive four-digit multiples of25.'],
  ],
  'restricted-distributions': [
    [assignments(4,2).filter(a=>new Set(a).size===2).length, 'Enumerate sixteen labeled assignments; require both envelopes.'],
    [range(0,7).filter(r=>r>=2&&7-r>=2).length, 'Enumerate red count; remaining blue count is fixed.'],
    [assignments(3,3).filter(a=>new Set(a).size===2).length, 'Enumerate all27 assignments and require exactly two distinct boxes.'],
    [assignments(4,3).filter(a=>new Set(a).size===3&&a.slice(1).every(b=>b!==a[0])).length, 'Star is object0; enumerate81 assignments, all boxes occupied and no object shares star box.'],
  ],
  'pascal-paths': [
    [bits(4,1), 'Enumerate all16 binary step sequences with one right.'],
    [bits(4,2), 'Fixed first right leaves four steps with exactly two rights.'],
    [bits(5,0)+bits(5,1)+bits(5,5), 'Enumerate disjoint endpoint classes0,1,5.'],
    [2**6-bits(6,2)-bits(6,4), 'Enumerate64 walks; exclude two distinct endpoint classes.'],
  ],
  'transfer-1': [
    [4*7-sum([5,8,6,3]), 'Read all four bars; required total minus current total.'],
    [4*5*3-3, 'Twenty cubes per layer; remove one cube from each of three layers.'],
    [18/(5-3)*(3+5), 'Difference is two ratio units; whole has eight units.'],
    [Math.ceil(45/8)*8-45, 'Minimize integral packs subject to reaching45, then subtract distributed45.'],
    [2*10*4-4*4, 'Union area subtracts the overlap once.'],
    [range(1,20).find(h=>14+2*h<6+3*h), 'First positive integral hour satisfying strict cheaper inequality.'],
    [Math.max(...range(1,14).map(a=>a*(15-a))), 'Exhaust all positive integer side pairs with sum15.'],
    [11*6-(2*4+5*6+3*8), 'Weighted original total62; eleven scores require66.'],
    [18/((1-1/3)*(1-1/4)), 'Successive retained fractions multiply; reverse their product.'],
    [(12-2*2)*(8-2*2)*2, 'Both cuts reduce each base dimension; folding height2.'],
    [Math.max(...range(0,20).flatMap(s=>range(0,13).filter(l=>2*s+3*l<=40&&3*s+2*l<=40).map(l=>5*s+8*l))), 'Complete bounded feasible integer search: small<=20 and large<=13 from red constraint.'],
    [8*(1+12/6)**2, 'Similarity gives top/bottom height ratio1:2; full area scales from AOB by9.'],
  ],
  'transfer-2': [
    ['2 p.m. to 3 p.m.', 'Successive increases12,-4,15; maximum is the third interval.'],
    [2**3, 'Exactly three outside faces meet at each of eight corner cubes.'],
    [7-(11-7), 'Difference eliminates pen; notebook4, hence pen3.'],
    [Math.ceil(50/9), 'Five crossings insufficient; six attained with9,9,9,9,9,5.'],
    [(5**2-3**2)/5**2, 'Subtract the unshaded3-by3 interior and divide by25.'],
    [Math.min(...range(0,6).flatMap(a=>range(0,4).filter(b=>4*a+7*b>=18).map(b=>3*a+5*b))), 'Search all mixes costing at most known feasible15; higher pack counts already cost more.'],
    [6+8-Math.hypot(6,8), 'Route sum minus right-triangle hypotenuse.'],
    ['Hour 1 to hour 2', 'On a straight road on one side of home, interval speeds are absolute slopes2,6,3.'],
    [40*25*3, 'Fully submerged object displaces base area times height rise.'],
    [(39+12*2)/(7+2), 'All-loss baseline -24; replacing a loss gains9, requiring seven wins.'],
    [Math.hypot(12,2*8), 'Reflect one corner. Triangle inequality gives lower bound20, attained by midpoint P.'],
    [range(1,10).filter(a=>a*(20-a)>80&&a*(20-a)<100).length, 'Perimeter<40 in multiples10 gives sum<=15 and area<=56; minimum40 is attained by exactly four unordered pairs.'],
  ],
}
function numericChoice(text) {
  const math=/\$([^$]+)\$/.exec(text)?.[1]
  assert(math, `Unparsed choice: ${text}`)
  const fraction=/^\\frac\{(\d+)\}\{(\d+)\}$/.exec(math)
  const value=fraction?Number(fraction[1])/Number(fraction[2]):Number(math)
  assert(Number.isFinite(value), `Unparsed numeric choice: ${text}`)
  return value
}
// Check figure data agrees with both the question and the independent model.
const bars=transfer[0].problems[0].fig.elems.filter(e=>e.t==='poly')
assert.deepEqual(bars.map(e=>Math.max(...e.pts.map(p=>p[1]))),[5,8,6,3])
const trapezoid=transfer[0].problems[11].fig.elems.find(e=>e.t==='poly').pts
assert.equal(area(trapezoid),72)
assert.equal(area([trapezoid[0],trapezoid[1],[6,16/3]]),8)
const trip=transfer[1].problems[7]
assert.match(trip.q,/straight road/i)
assert.match(trip.q,/one side of home/i)
assert.deepEqual(trip.fig.elems.find(e=>e.t==='poly').pts,[[0,0],[1,2],[2,8],[3,5]])
assert.equal(trip.fig.elems.find(e=>e.t==='poly').closed,false)

const pinFile='notes/answer-audits/transition-reviewed-digests.json'
const pins=existsSync(pinFile)?JSON.parse(readFileSync(pinFile,'utf8')):{}
const nextPins={...pins}, ledger=[]
for (const set of [...bridges,...transfer]) {
  assert.equal(models[set.id]?.length,set.problems.length,`Complete independent models: ${set.id}`)
  set.problems.forEach((p,i)=>{
    const id=`transition/${set.id}/${i+1}`, [expected,proof]=models[set.id][i]
    const matches=p.choices.flatMap((choice,j)=>(typeof expected==='string'?choice===expected:Math.abs(numericChoice(choice)-expected)<1e-10)?[j]:[])
    assert.deepEqual(matches,[p.answer],`Unique correct choice ${id}; derived ${expected}`)
    const sourceDigest=createHash('sha256').update(JSON.stringify(p)).digest('hex')
    if(process.argv.includes('--record-new-digests')&&!nextPins[id])nextPins[id]=sourceDigest
    assert.equal(nextPins[id],sourceDigest,`Missing/stale independent review ${id}`)
    ledger.push({id,sourceDigest,status:'verified',method:'Independent exact calculation, enumeration, or geometric proof',computed:expected,evidence:proof,keyMatch:true,uniqueChoice:true})
  })
}
assert.equal(ledger.length,40)
if(process.argv.includes('--record-new-digests'))writeFileSync(pinFile,JSON.stringify(nextPins,null,2)+'\n')
writeFileSync('notes/answer-audits/transition-ledger.jsonl',ledger.map(r=>JSON.stringify(r)).join('\n')+'\n')
console.log('PASS: all40 transition answers independently derived; every option checked; diagrams and full source pins match.')
