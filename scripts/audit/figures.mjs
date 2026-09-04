// Numeric figure auditor. Checks things the content validator cannot:
// geometry that contradicts its own labels.
//
//   node scripts/audit/figures.mjs intro-geometry 1          audit base chapter 1
//   node scripts/audit/figures.mjs intro-geometry 1 --var    audit chapter 1's variations
import { readdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const [book, chNum, mode] = process.argv.slice(2)
const isVar = mode === '--var'
const pad = (n) => String(n).padStart(2, '0')

const V = (a, b) => [b[0] - a[0], b[1] - a[1]]
const len = (v) => Math.hypot(v[0], v[1])
const dot = (u, v) => u[0] * v[0] + u[1] * v[1]
const cross = (u, v) => u[0] * v[1] - u[1] * v[0]
const angBetween = (at, from, to) => {
  const u = V(at, from)
  const v = V(at, to)
  if (!len(u) || !len(v)) return null
  return (Math.acos(Math.max(-1, Math.min(1, dot(u, v) / (len(u) * len(v))))) * 180) / Math.PI
}

const problems = []
function report(tag, msg) {
  problems.push(`${tag}: ${msg}`)
}

// Pull every [x,y] pair an element occupies, for view containment.
function coordsOf(e) {
  const out = []
  for (const key of ['p', 'a', 'b', 'c', 'at', 'from', 'to']) {
    const v = e[key]
    if (Array.isArray(v) && v.length === 2 && v.every(Number.isFinite)) out.push(v)
  }
  if (Array.isArray(e.pts)) for (const p of e.pts) if (Array.isArray(p)) out.push(p)
  return out
}

function auditFig(tag, fig) {
  const [x0, y0, x1, y1] = fig.view
  const elems = fig.elems || []

  // (A) everything inside the view box
  const EPS = 1e-9
  for (const e of elems) {
    if (e.t === 'line' || e.t === 'parabola') continue // deliberately run off-frame
    if (e.t === 'circle') {
      const [cx, cy] = e.c
      if (cx - e.r < x0 - EPS || cx + e.r > x1 + EPS || cy - e.r < y0 - EPS || cy + e.r > y1 + EPS)
        report(tag, `circle c=[${cx},${cy}] r=${e.r} escapes view [${x0},${y0},${x1},${y1}]`)
      continue
    }
    if (e.t === 'arc') {
      // The center is a construction parameter, not ink. Sample the swept path instead.
      const [cx, cy] = e.c
      const a0 = (e.from * Math.PI) / 180
      const span = (((e.to - e.from) % 360) + 360) % 360
      for (let i = 0; i <= 180; i++) {
        const th = a0 + ((span * i) / 180) * (Math.PI / 180)
        const x = cx + e.r * Math.cos(th)
        const y = cy + e.r * Math.sin(th)
        if (x < x0 - EPS || x > x1 + EPS || y < y0 - EPS || y > y1 + EPS) {
          report(tag, `arc c=[${cx},${cy}] r=${e.r} sweeps to [${x.toFixed(3)},${y.toFixed(3)}], outside view [${x0},${y0},${x1},${y1}]`)
          break
        }
      }
      continue
    }
    for (const [x, y] of coordsOf(e)) {
      if (x < x0 - EPS || x > x1 + EPS || y < y0 - EPS || y > y1 + EPS)
        report(tag, `${e.t} point [${x},${y}] outside view [${x0},${y0},${x1},${y1}]`)
    }
  }

  // (B) t:'label' renders as plain SVG text — LaTeX there shows up as literal junk
  for (const e of elems) {
    if (e.t === 'label' && typeof e.text === 'string' && /[$\\]|\^|_\{/.test(e.text))
      report(tag, `label text is not plain text: ${JSON.stringify(e.text)}`)
  }

  // (C) right-angle markers must mark actual right angles
  for (const e of elems) {
    if (e.t !== 'right') continue
    const a = angBetween(e.at, e.from, e.to)
    if (a === null) report(tag, `right marker at [${e.at}] has a zero-length arm`)
    else if (Math.abs(a - 90) > 0.5) report(tag, `right marker at [${e.at}] marks ${a.toFixed(2)}deg, not 90`)
  }

  // (D) a numeric angle label must match the angle actually drawn
  for (const e of elems) {
    if (e.t !== 'angle' || e.label == null) continue
    const m = String(e.label).match(/^\s*(\d+(?:\.\d+)?)\s*(?:°|\^?\\?circ)?\s*$/)
    if (!m) continue
    const claimed = Number(m[1])
    const actual = angBetween(e.at, e.from, e.to)
    if (actual === null) { report(tag, `angle at [${e.at}] has a zero-length arm`); continue }
    // the renderer always draws the non-reflex angle
    if (Math.abs(actual - claimed) > 1)
      report(tag, `angle labelled ${claimed} is drawn as ${actual.toFixed(2)}deg at [${e.at}]`)
  }

  // (E) equal tick counts assert equal lengths
  const byN = new Map()
  for (const e of elems) {
    if (e.t !== 'tick') continue
    const n = e.n ?? 1
    if (!byN.has(n)) byN.set(n, [])
    byN.get(n).push({ l: len(V(e.a, e.b)), a: e.a, b: e.b })
  }
  for (const [n, list] of byN) {
    if (list.length < 2) continue
    const base = list[0].l
    for (const t of list.slice(1)) {
      // 0.2% — loose enough for authored 3-decimal coordinates, tight enough
      // to catch a genuine "these are not actually congruent" error
      if (Math.abs(t.l - base) > 0.002 * Math.max(1, base))
        report(tag, `tick n=${n} marks unequal lengths ${base.toFixed(4)} vs ${t.l.toFixed(4)} ([${t.a}]-[${t.b}])`)
    }
  }

  // (F) two labelled points sitting on top of each other
  const pts = elems.filter((e) => e.t === 'point' && e.label)
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++)
      if (len(V(pts[i].p, pts[j].p)) < 1e-9)
        report(tag, `points ${pts[i].label} and ${pts[j].label} share coordinate [${pts[i].p}]`)

  // (G) degenerate polygons: repeated vertex or zero area
  for (const e of elems) {
    if (e.t !== 'poly' || !Array.isArray(e.pts) || e.pts.length < 3) continue
    if (e.closed === false) continue
    for (let i = 0; i < e.pts.length; i++) {
      const nxt = e.pts[(i + 1) % e.pts.length]
      if (len(V(e.pts[i], nxt)) < 1e-9) report(tag, `polygon has a repeated vertex [${e.pts[i]}]`)
    }
    let area2 = 0
    for (let i = 0; i < e.pts.length; i++) {
      const nxt = e.pts[(i + 1) % e.pts.length]
      area2 += cross(e.pts[i], nxt)
    }
    if (Math.abs(area2) < 1e-9) report(tag, `polygon [${e.pts.map((p) => `(${p})`).join('')}] has zero area`)
  }
}

// Walk a loaded module for items carrying figures.
function walk(tag, node) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(`${tag}[${i + 1}]`, v))
    return
  }
  if (!node || typeof node !== 'object') return
  if (node.fig && Array.isArray(node.fig.view)) auditFig(tag, node.fig)
  if (Array.isArray(node.problems)) walk(`${tag}`, node.problems)
  if (node.learn && Array.isArray(node.learn.examples)) walk(`${tag}ex`, node.learn.examples)
  if (Array.isArray(node.sections)) node.sections.forEach((s) => walk(`S${s.id}`, s))
  else if (node.sections && typeof node.sections === 'object')
    for (const [k, v] of Object.entries(node.sections)) walk(`S${k}`, v)
  if (Array.isArray(node.challenge)) walk('challenge', node.challenge)
  if (Array.isArray(node.worksheet)) walk('worksheet', node.worksheet)
}

const files = []
if (isVar) {
  const dir = resolve('src/data/variants', book)
  for (const f of await readdir(dir)) if (f.startsWith(`ch${pad(chNum)}-`)) files.push(resolve(dir, f))
} else {
  files.push(resolve('src/data', book, `ch${pad(chNum)}.js`))
}

let figCount = 0
const countFigs = (n) => {
  if (Array.isArray(n)) return n.forEach(countFigs)
  if (!n || typeof n !== 'object') return
  if (n.fig && Array.isArray(n.fig.view)) figCount++
  for (const v of Object.values(n)) if (v && typeof v === 'object') countFigs(v)
}

for (const f of files) {
  const mod = (await import(pathToFileURL(f).href)).default
  countFigs(mod)
  walk('', mod)
}

console.log(`${files.length} file(s), ${figCount} figure(s)`)
if (!problems.length) console.log('figures clean')
else problems.forEach((p) => console.log(p))
