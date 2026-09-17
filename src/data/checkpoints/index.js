// Checkpoints: short contest-style papers that sit between chapters of a book.
//
// A chapter challenge tests one chapter's techniques, and the Arena mixes the
// whole library. A checkpoint sits between them: everything a student has met
// in the book so far, posed the way a contest poses it — no chapter label on
// the problem, the technique hidden, the clock running. Files live in
// src/data/checkpoints/<book>/cpN.js and are loaded eagerly like chapters.
const modules = import.meta.glob('./*/cp*.js', { eager: true })

const byBook = {}
for (const [path, mod] of Object.entries(modules)) {
  const cp = mod.default
  if (!cp || !cp.book || !cp.number || !Array.isArray(cp.problems)) {
    console.warn(`Skipping malformed checkpoint module: ${path}`)
    continue
  }
  ;(byBook[cp.book] ??= []).push(cp)
}
for (const list of Object.values(byBook)) list.sort((a, b) => a.number - b.number)

// Every checkpoint of one book, in order.
export function checkpointsFor(bookId) {
  return byBook[bookId] ?? []
}

export function getCheckpoint(bookId, number) {
  return checkpointsFor(bookId).find((cp) => cp.number === number) ?? null
}

export function allCheckpoints() {
  return Object.values(byBook).flat()
}
