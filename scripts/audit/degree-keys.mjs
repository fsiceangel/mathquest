// Lists every degree answer in use, grouped by attempt round.
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const [book, num] = process.argv.slice(2)
const dir = `./src/data/variants/${book}/`
const files = readdirSync(dir).filter((f) => f.startsWith(`ch${num}-`))
const rounds = [[], [], []]

for (const f of files) {
  const v = (await import(new URL(dir + f, ROOT).href)).default
  const push = (label, t) => {
    if (!Array.isArray(t)) return
    t.forEach((vs, i) =>
      vs.forEach((p, j) => {
        const a = String(p.choices ? p.choices[p.answer] : p.answer)
        const m = a.match(/(\d+(?:\.\d+)?)\s*\^/)
        if (m) rounds[j].push([Number(m[1]), `${label}[${i + 1}]`])
      }),
    )
  }
  for (const [sid, t] of Object.entries(v.sections || {})) push(`S${sid}`, t)
  push('challenge', v.challenge)
  push('worksheet', v.worksheet)
}

rounds.forEach((r, i) => {
  const by = new Map()
  r.forEach(([n, tag]) => by.set(n, [...(by.get(n) || []), tag]))
  const line = [...by.keys()]
    .sort((a, b) => a - b)
    .map((n) => `${n}${by.get(n).length > 1 ? '*' + by.get(n).length : ''}`)
    .join(' ')
  console.log(`round ${i + 2}: ${line}`)
})
