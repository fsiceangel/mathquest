// Registry of authored chapter content. A chapter listed in books.js is
// playable iff a module exists here. Modules are loaded eagerly — content is
// plain data and the whole site ships as one static bundle.
//
// Problem variations (src/data/variants/**) are merged on top of the base
// chapters here, so views never have to know where a problem came from: every
// problem simply carries a `variants` array of alternates when one exists.
const modules = {
  ...import.meta.glob('./prealgebra/ch*.js', { eager: true }),
  ...import.meta.glob('./intro-algebra/ch*.js', { eager: true }),
  ...import.meta.glob('./intro-geometry/ch*.js', { eager: true }),
  ...import.meta.glob('./intro-counting/ch*.js', { eager: true }),
}

// Variations are three times the weight of the base bank, and a student only
// meets them on a second attempt. They load per chapter, on demand.
const variantLoaders = import.meta.glob('./variants/*/*.js')

const registry = {}
for (const [path, mod] of Object.entries(modules)) {
  const ch = mod.default
  if (!ch || !ch.book || !ch.number || !Array.isArray(ch.sections)) {
    console.warn(`Skipping malformed content module: ${path}`)
    continue
  }
  registry[`${ch.book}/${ch.number}`] = ch
}

// Attach `variants` to the matching base problems. A variation file may cover
// only part of a chapter, so everything here is tolerant of gaps.
function attach(problems, table, where) {
  if (!Array.isArray(problems) || !Array.isArray(table)) return
  table.forEach((vs, i) => {
    if (!Array.isArray(vs) || vs.length === 0 || !problems[i]) return
    if (problems[i].variants) {
      console.warn(`Duplicate variations for ${where}[${i}] — keeping the first`)
      return
    }
    problems[i].variants = vs
  })
}

function applyVariants(v, path) {
  if (!v || !v.book || !v.number) {
    console.warn(`Skipping malformed variation module: ${path}`)
    return
  }
  const ch = registry[`${v.book}/${v.number}`]
  if (!ch) {
    console.warn(`Variation module ${path} has no matching chapter`)
    return
  }
  for (const [sid, table] of Object.entries(v.sections || {})) {
    const section = ch.sections.find((s) => s.id === sid)
    if (!section) {
      console.warn(`Variation module ${path} references unknown section ${sid}`)
      continue
    }
    attach(section.problems, table, `${v.book}/ch${v.number} §${sid}`)
  }
  attach(ch.challenge, v.challenge, `${v.book}/ch${v.number} challenge`)
  attach(ch.worksheet, v.worksheet, `${v.book}/ch${v.number} worksheet`)
}

const variantsInFlight = new Map()

// Load and attach every variation file for one chapter. Idempotent: the same
// chapter is only ever fetched and attached once.
export function loadVariants(bookId, number) {
  const key = `${bookId}/${number}`
  if (variantsInFlight.has(key)) return variantsInFlight.get(key)
  const pattern = new RegExp(`^\\./variants/${bookId}/ch0*${number}[-.]`)
  const paths = Object.keys(variantLoaders).filter((p) => pattern.test(p))
  const job = Promise.all(
    paths.map((p) =>
      variantLoaders[p]()
        .then((mod) => applyVariants(mod.default, p))
        .catch((e) => console.warn(`Could not load ${p}: ${e.message}`)),
    ),
  ).then(() => paths.length)
  variantsInFlight.set(key, job)
  return job
}

export function getChapterContent(bookId, number) {
  return registry[`${bookId}/${number}`] ?? null
}

export function isChapterAvailable(bookId, number) {
  return `${bookId}/${number}` in registry
}

// Every playable chapter, in book then chapter order. Used by the Arena to
// build its mixed pool.
export function allChapters() {
  return Object.values(registry)
}
