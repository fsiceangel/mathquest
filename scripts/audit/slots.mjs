// Per-slot key dump — base key plus the three variation keys — and
// a flag on any two ADJACENT rounds in the same slot that carry the same key.
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const [book, num] = process.argv.slice(2)
const base = (await import(new URL(`./src/data/${book}/ch${num}.js`, ROOT).href)).default
const dir = `./src/data/variants/${book}/`
const files = readdirSync(dir).filter((f) => f.startsWith(`ch${num}-`)).sort()

const norm = (s) =>
  String(s)
    .replace(/\$/g, '')
    .replace(/\\(?:text|mathrm)\{([^}]*)\}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
const keyOf = (p) => norm(p.choices ? p.choices[p.answer] : p.answer)

const baseOf = new Map()
for (const s of base.sections || []) baseOf.set(`S${s.id}`, s.problems)
baseOf.set('CH', base.challenge)
baseOf.set('WS', base.worksheet)

let flags = 0
for (const f of files) {
  const v = (await import(new URL(dir + f, ROOT).href)).default
  const groups = []
  if (v.sections) for (const [s, t] of Object.entries(v.sections)) groups.push([`S${s}`, t])
  if (v.challenge) groups.push(['CH', v.challenge])
  if (v.worksheet) groups.push(['WS', v.worksheet])
  console.log(`\n== ${f} ==`)
  for (const [label, table] of groups) {
    table.forEach((vs, i) => {
      const keys = [keyOf(baseOf.get(label)[i]), ...vs.map(keyOf)]
      const bad = []
      for (let r = 1; r < 4; r++) if (keys[r] === keys[r - 1]) bad.push(`r${r}=r${r + 1}`)
      if (bad.length) flags++
      console.log(
        `  ${label}[${i + 1}]`.padEnd(12) +
          keys.map((k) => k.padEnd(14)).join('| ') +
          (bad.length ? `  <<< ADJACENT REPEAT ${bad.join(',')}` : ''),
      )
    })
  }
}
console.log(`\n${flags} adjacent-repeat slot(s)`)
