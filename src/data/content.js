// Registry of authored chapter content. A chapter listed in books.js is
// playable iff a module exists here. Modules are loaded eagerly — content is
// plain data and the whole site ships as one static bundle.
const modules = {
  ...import.meta.glob('./prealgebra/ch*.js', { eager: true }),
  ...import.meta.glob('./intro-algebra/ch*.js', { eager: true }),
  ...import.meta.glob('./intro-geometry/ch*.js', { eager: true }),
}

const registry = {}
for (const [path, mod] of Object.entries(modules)) {
  const ch = mod.default
  if (!ch || !ch.book || !ch.number || !Array.isArray(ch.sections)) {
    console.warn(`Skipping malformed content module: ${path}`)
    continue
  }
  registry[`${ch.book}/${ch.number}`] = ch
}

export function getChapterContent(bookId, number) {
  return registry[`${bookId}/${number}`] ?? null
}

export function isChapterAvailable(bookId, number) {
  return `${bookId}/${number}` in registry
}
