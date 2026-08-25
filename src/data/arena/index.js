// The Challenge Arena: timed, contest-style papers.
//
// Two kinds of paper exist. Authored papers (set01.js, set02.js, …) are fixed
// 25-question papers written to ramp from gentle to genuinely hard. Drawn
// papers are built on the spot from the chapter library, so they never repeat.
import { allChapters } from '../content.js'
import { versionOf } from '../../lib/variants.js'

const setModules = import.meta.glob('./set*.js', { eager: true })

export const arenaPapers = Object.values(setModules)
  .map((m) => m.default)
  .filter((s) => s && Array.isArray(s.problems))
  .sort((a, b) => a.id.localeCompare(b.id))

export function getPaper(id) {
  return arenaPapers.find((p) => p.id === id) ?? null
}

// Rough difficulty for library problems, used to order a drawn paper so it
// ramps the way a real contest does. Position inside a section is the strongest
// signal we have: the tenth problem of a section is always the hardest one.
const BOOK_WEIGHT = { prealgebra: 0, 'intro-algebra': 0.9, 'intro-geometry': 0.9 }

function buildPool() {
  const pool = []
  for (const ch of allChapters()) {
    const w = BOOK_WEIGHT[ch.book] ?? 0
    for (const s of ch.sections) {
      s.problems.forEach((p, i) => {
        if (i < 3) return // warm-up drills — too routine for the Arena
        pool.push({ p, diff: w + i / 9 })
      })
    }
    ;(ch.challenge ?? []).forEach((p, i) => {
      pool.push({ p, diff: w + 1.2 + i / 11 })
    })
  }
  return pool
}

let pool = null

function shuffle(items) {
  const a = items.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Draw `n` problems spread evenly across the difficulty range, then order them
// easiest first. Each problem arrives as a random one of its versions, so two
// drawn papers rarely share a single set of numbers.
export function drawPaper(n, { maxDiff = Infinity } = {}) {
  pool ??= buildPool()
  const eligible = pool.filter((e) => e.diff <= maxDiff)
  const ranked = eligible.slice().sort((a, b) => a.diff - b.diff)
  const picked = []
  const used = new Set()
  for (let band = 0; band < n; band++) {
    const lo = Math.floor((band * ranked.length) / n)
    const hi = Math.max(lo + 1, Math.floor(((band + 1) * ranked.length) / n))
    const slice = shuffle(ranked.slice(lo, hi))
    const choice = slice.find((e) => !used.has(e.p)) ?? slice[0]
    if (!choice) continue
    used.add(choice.p)
    picked.push(choice)
  }
  return picked
    .sort((a, b) => a.diff - b.diff)
    .map((e) => versionOf(e.p, Math.floor(Math.random() * 4)))
}

export const ARENA_MODES = [
  {
    id: 'quick',
    title: 'Quick Round',
    count: 10,
    minutes: 15,
    maxDiff: 1.4,
    blurb: 'Ten problems, fifteen minutes. A good way to start.',
  },
  {
    id: 'draw',
    title: 'Random Draw',
    count: 25,
    minutes: 40,
    blurb: 'Twenty-five problems pulled fresh from the whole library, easiest first.',
  },
]

export function getMode(id) {
  return ARENA_MODES.find((m) => m.id === id) ?? null
}
