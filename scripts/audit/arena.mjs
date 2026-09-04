// Audit for the authored arena papers: ascending numeric choices,
// answer-position spread, cross-paper echoes, house style, and figure sanity.
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const dir = './src/data/arena/'
const files = readdirSync(dir).filter((f) => /^set\d+\.js$/.test(f)).sort()

// Parse a choice string to a number when it is one: integers, decimals, \frac{a}{b},
// mixed a\frac{b}{c}, k\pi, \sqrt{n}, \$x, x\%, negatives. Returns null otherwise.
function numeric(s) {
  let t = s.replace(/\$/g, '').replace(/\\\$/g, '').replace(/\\%/g, '').replace(/\\,/g, '').replace(/\s+/g, '').replace(/\\text\{[^}]*\}/g, '').replace(/[a-zA-Z]+$/g, (m) => (m === 'pi' ? m : ''))
  t = t.replace(/\^\\circ/g, '').replace(/\\circ/g, '').replace(/\\left|\\right/g, '')
  const sign = t.startsWith('-') ? -1 : 1
  if (sign < 0) t = t.slice(1)
  const pi = /\\pi$/.test(t)
  if (pi) t = t.replace(/\\pi$/, '') || '1'
  let m
  if ((m = t.match(/^(\d+)?\\frac\{(-?\d+)\}\{(\d+)\}$/))) {
    const whole = Number(m[1] ?? 0)
    return sign * (whole + Number(m[2]) / Number(m[3])) * (pi ? Math.PI : 1)
  }
  if ((m = t.match(/^\\sqrt\{(\d+)\}$/))) return sign * Math.sqrt(Number(m[1])) * (pi ? Math.PI : 1)
  if ((m = t.match(/^(\d+)\\sqrt\{(\d+)\}$/))) return sign * Number(m[1]) * Math.sqrt(Number(m[2])) * (pi ? Math.PI : 1)
  if (/^\d+(\.\d+)?$/.test(t)) return sign * Number(t) * (pi ? Math.PI : 1)
  return null
}

const norm = (s) => s.replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}$\s,.]/g, '').toLowerCase()
const all = []
let problems = 0
for (const f of files) {
  const set = (await import(new URL(dir + f, ROOT).href)).default
  const counts = [0, 0, 0, 0, 0]
  let figs = 0
  set.problems.forEach((p, i) => {
    problems++
    const tag = `${set.id}#${i + 1}`
    all.push({ tag, p })
    counts[p.answer]++
    if (p.fig) figs++
    const vals = p.choices.map(numeric)
    if (vals.every((v) => v !== null)) {
      for (let k = 1; k < 5; k++) if (!(vals[k] > vals[k - 1])) console.log(`ORDER ${tag}: choices not increasing at [${k}]: ${p.choices.join(' | ')}`)
    } else if (vals.filter((v) => v !== null).length >= 3) {
      console.log(`MIXED ${tag}: some choices parse as numbers and some do not: ${p.choices.join(' | ')}`)
    }
    const text = [p.q, p.solution, ...p.choices].join(' ')
    if (/\bactually\b/i.test(text)) console.log(`STYLE ${tag}: "actually"`)
    if (/centre/i.test(text)) console.log(`STYLE ${tag}: "centre"`)
    if (/\\dfrac/.test(text)) console.log(`STYLE ${tag}: dfrac`)
    if (/[a-z]'[a-z]/i.test(text)) console.log(`STYLE ${tag}: straight apostrophe inside a word`)
    if (/AMC|AoPS|Art of Problem|MATHCOUNTS|Mathcounts|AIME|Olympiad/i.test(text)) console.log(`NAME ${tag}: names a competition or publisher`)
    if (!p.topic) console.log(`TOPIC ${tag}: missing`)
  })
  console.log(`${set.id} "${set.title}": ${set.problems.length} problems, ${figs} figures, answer positions ${counts.join('/')}${counts.some((c) => c < 3 || c > 7) ? '  <-- SPREAD' : ''}`)
}
console.log(`${files.length} papers, ${problems} problems`)

// Cross-paper echoes: identical stems, and stems sharing most of their number set.
const nums = (s) => new Set((s.match(/\d+(\.\d+)?/g) || []).filter((n) => Number(n) > 9))
for (let a = 0; a < all.length; a++) {
  for (let b = a + 1; b < all.length; b++) {
    const A = all[a], B = all[b]
    if (A.tag.slice(0, 5) === B.tag.slice(0, 5)) continue
    if (norm(A.p.q) === norm(B.p.q)) { console.log(`ECHO ${A.tag} == ${B.tag}`); continue }
    const na = nums(A.p.q), nb = nums(B.p.q)
    if (na.size >= 3 && nb.size >= 3) {
      const shared = [...na].filter((n) => nb.has(n)).length
      if (shared >= Math.min(na.size, nb.size) && shared >= 3) console.log(`NUMSET ${A.tag} ~ ${B.tag}: share {${[...na].filter((n) => nb.has(n)).join(',')}}`)
    }
  }
}
