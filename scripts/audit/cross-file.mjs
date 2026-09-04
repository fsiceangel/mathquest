// Cross-file audit for one chapter's variations.
// Flags same-round echoes, choice values that collide once LaTeX is stripped,
// and worksheet items that carry the multiple-choice shape by mistake.
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const [book, num] = process.argv.slice(2)
const dir = `./src/data/variants/${book}/`
const files = readdirSync(dir).filter((f) => f.startsWith(`ch${num}-`))

// Relations and set words carry meaning, so keep them; drop only layout macros.
// Geometry notation macros are the ENTIRE distinction in a naming question:
// \overline{LJ} (segment) and \overrightarrow{LJ} (ray) are different figures,
// so dropping the macro collapses legitimate distractors onto each other.
// The trig function names carry the same weight: -\sin 20^\circ and
// -\cos 20^\circ are the two halves of a function-swap trap, and stripping
// the name reports them as the same choice.
// \pi likewise: 9\pi/64 and 9/64 are the answer and the "used a circle area"
// trap sitting side by side, and \pi/12 is not 1/12.
const KEEP =
  /^(le|ge|lt|gt|ne|neq|leq|geq|pm|mp|infty|cup|cap|frac|sqrt|lfloor|rfloor|lceil|rceil|overline|overrightarrow|overleftarrow|overleftrightarrow|overset|frown|angle|triangle|circ|parallel|perp|cong|sim|sin|cos|tan|pi)$/
const norm = (s) =>
  s
    .replace(/\\([a-zA-Z]+)/g, (m, w) => (KEEP.test(w) ? ' ' + w + ' ' : ' '))
    // Parentheses are NOT layout: 3(m-4) and 3m-4 are different expressions.
    // Stripping them is safe for numeric answers but produces false collisions
    // in expression-heavy chapters, so keep them.
    .replace(/[{}$\s,.]/g, '')
    .toLowerCase()

const items = []
for (const f of files) {
  const v = (await import(new URL(dir + f, ROOT).href)).default
  const push = (label, table) => {
    if (!Array.isArray(table)) return
    table.forEach((vs, i) =>
      vs.forEach((p, j) => items.push({ file: f, tag: `${label}[${i + 1}]v${j + 1}`, idx: j, p })),
    )
  }
  for (const [sid, t] of Object.entries(v.sections || {})) push(`S${sid}`, t)
  push('challenge', v.challenge)
  push('worksheet', v.worksheet)
}
console.log(`${files.length} files, ${items.length} items`)

// 1. shape
for (const { file, tag, p } of items) {
  const mc = Array.isArray(p.choices)
  if (mc && typeof p.answer !== 'number') console.log(`SHAPE ${file} ${tag}: MC but answer is not an index`)
  if (!mc && typeof p.answer !== 'string') console.log(`SHAPE ${file} ${tag}: free response but answer is not a string`)
  if (mc && p.choices.length !== 4) console.log(`SHAPE ${file} ${tag}: ${p.choices.length} choices`)
  if (!p.solution) console.log(`SHAPE ${file} ${tag}: no solution`)
}

// 2. distractors distinct once LaTeX noise is stripped
for (const { file, tag, p } of items) {
  if (!p.choices) continue
  const seen = new Map()
  p.choices.forEach((c, k) => {
    const n = norm(c)
    if (seen.has(n)) console.log(`DUPCHOICE ${file} ${tag}: [${seen.get(n)}] and [${k}] both "${c}"`)
    seen.set(n, k)
  })
}

// 3. same-round echoes: items sharing a variation index co-occur in one attempt
const byIdx = [[], [], []]
items.forEach((it) => byIdx[it.idx].push(it))
for (let r = 0; r < 3; r++) {
  const seen = new Map()
  for (const it of byIdx[r]) {
    const key = norm(it.p.q)
    if (seen.has(key)) {
      const o = seen.get(key)
      console.log(`ECHO round ${r + 2}: ${o.file} ${o.tag}  ==  ${it.file} ${it.tag}`)
    }
    seen.set(key, it)
  }
}

// 4. same-round answer echoes, as a weaker hint worth eyeballing
for (let r = 0; r < 3; r++) {
  const seen = new Map()
  for (const it of byIdx[r]) {
    const a = it.p.choices ? it.p.choices[it.p.answer] : it.p.answer
    const key = norm(String(a))
    if (!key.length) continue
    if (!seen.has(key)) seen.set(key, [])
    seen.get(key).push(it)
  }
  for (const [k, list] of seen) {
    if (list.length >= (Number(process.env.AR) || 3)) console.log(`ANSREPEAT round ${r + 2} "${k}" x${list.length}: ${list.map((i) => i.tag).join(' ')}`)
  }
}
