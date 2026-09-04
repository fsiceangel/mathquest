// Lists every answer key in use, grouped by attempt round, and flags repeats.
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const [book, num] = process.argv.slice(2)
const dir = `./src/data/variants/${book}/`
const files = readdirSync(dir).filter((f) => f.startsWith(`ch${num}-`)).sort()
const rounds = [new Map(), new Map(), new Map()]

const norm = (s) =>
  String(s)
    .replace(/\$/g, '')
    .replace(/\\(?:text|mathrm)\{([^}]*)\}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

for (const f of files) {
  const v = (await import(new URL(dir + f, ROOT).href)).default
  const push = (label, t) => {
    if (!Array.isArray(t)) return
    t.forEach((vs, i) =>
      vs.forEach((p, j) => {
        const key = norm(p.choices ? p.choices[p.answer] : p.answer)
        if (!rounds[j].has(key)) rounds[j].set(key, [])
        rounds[j].get(key).push(`${label}[${i + 1}]`)
      }),
    )
  }
  if (v.sections) for (const [s, t] of Object.entries(v.sections)) push(`S${s}`, t)
  push('CH', v.challenge)
  push('WS', v.worksheet)
}

rounds.forEach((m, j) => {
  const dupes = [...m].filter(([, w]) => w.length > 1)
  console.log(`\n== round ${j + 2} — ${m.size} distinct keys, ${dupes.length} repeated ==`)
  for (const [k, w] of dupes) console.log(`  "${k}" x${w.length}: ${w.join(' ')}`)
})
