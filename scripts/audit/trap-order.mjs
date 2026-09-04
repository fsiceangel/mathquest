// Sweep: does each MC solution name the wrong choices in the same
// order the student reads them? The trap clauses live after the last ✓ (the end
// of route two), so scan only that tail and compare first-mention order against
// the choices array. Heuristic — a value can be named for another reason — so
// treat hits as candidates to eyeball, not verdicts.
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const books = ['prealgebra', 'intro-algebra', 'intro-geometry', 'intro-counting']
const only = process.argv[2] // optional book filter

// Strip LaTeX noise so '$\frac{9\pi}{64}$' and the solution's prose agree.
const norm = (s) =>
  String(s)
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}$\s,]/g, '')
    .toLowerCase()

let scanned = 0
let flagged = 0
for (const book of books) {
  if (only && book !== only) continue
  let files
  try {
    files = readdirSync(`./src/data/variants/${book}`)
  } catch {
    continue
  }
  for (const f of files) {
    let v
    try {
      v = (await import(new URL(`./src/data/variants/${book}/${f}`, ROOT).href)).default
    } catch {
      continue
    }
    const tables = [
      ...Object.entries(v.sections || {}).map(([k, t]) => [`S${k}`, t]),
      ['challenge', v.challenge],
      ['worksheet', v.worksheet],
    ]
    for (const [label, table] of tables) {
      if (!Array.isArray(table)) continue
      table.forEach((vs, i) =>
        vs.forEach((p, j) => {
          if (!p.choices || typeof p.answer !== 'number') return
          scanned++
          const sol = String(p.solution || '')
          // Trap clauses follow the final ✓; if there is none, scan the whole thing.
          const cut = sol.lastIndexOf('✓')
          const tail = cut >= 0 ? sol.slice(cut) : sol
          const order = []
          p.choices.forEach((c, k) => {
            if (k === p.answer) return
            const idx = tail.indexOf(norm(c).replace(/[^0-9a-z/.-]/g, '')) // cheap probe
            const n = norm(c)
            // Find the first place the tail mentions this choice's normalized form.
            let at = -1
            for (let s = 0; s < tail.length; s++) {
              if (norm(tail.slice(s, s + n.length + 12)).startsWith(n)) {
                at = s
                break
              }
            }
            order.push({ k, at, c })
          })
          if (order.some((o) => o.at < 0)) return // a trap not named by value; skip
          const seq = order.map((o) => o.at)
          const sorted = [...seq].sort((a, b) => a - b)
          if (seq.join() !== sorted.join()) {
            flagged++
            console.log(
              `${book}/${f} ${label}[${i + 1}]v${j + 1}: choices ${order
                .map((o) => o.c)
                .join(' , ')} but named in order ${order
                .slice()
                .sort((a, b) => a.at - b.at)
                .map((o) => o.c)
                .join(' , ')}`,
            )
          }
        }),
      )
    }
  }
}
console.log(`\nscanned ${scanned} MC variation items, ${flagged} with traps out of choice order`)
