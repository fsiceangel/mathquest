import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

export const bookIds = ['prealgebra', 'intro-counting', 'intro-algebra', 'intro-geometry']
export async function readModules(directory, pattern = /\.js$/) {
  const paths = (await readdir(directory)).filter((name) => pattern.test(name)).sort()
  return Promise.all(paths.map(async (name) => ({
    path: `${directory}/${name}`,
    data: (await import(pathToFileURL(resolve(directory, name)).href)).default,
  })))
}

// Stable source coordinates: ordering a displayed quiz must not change these IDs.
export async function inventory() {
  const chapters = [], checkpoints = [], papers = [], records = []
  for (const book of bookIds) {
    const bases = await readModules(`src/data/${book}`, /^ch\d+\.js$/)
    const variants = await readModules(`src/data/variants/${book}`)
    for (const { path, data: ch } of bases) {
      chapters.push(ch)
      const groups = [...ch.sections.map(s => [s.id, s.problems]), ['challenge', ch.challenge], ['worksheet', ch.worksheet]]
      for (const [group, problems] of groups) {
        problems.forEach((p, index) => records.push({ id: `${book}/${ch.number}/${group}/${index + 1}/1`, book, chapter: ch.number, group, index, round: 1, path, p }))
      }
    }
    for (const { path, data: v } of variants) {
      const groups = [...Object.entries(v.sections ?? {}), ['challenge', v.challenge], ['worksheet', v.worksheet]]
      for (const [group, table] of groups) {
        table?.forEach((vs, index) => vs.forEach((p, r) => records.push({ id: `${book}/${v.number}/${group}/${index + 1}/${r + 2}`, book, chapter: v.number, group, index, round: r + 2, path, p })))
      }
    }
    for (const { path, data: cp } of await readModules(`src/data/checkpoints/${book}`, /^cp\d+\.js$/)) {
      checkpoints.push(cp)
      cp.problems.forEach((p, index) => records.push({ id: `${book}/checkpoint/${cp.number}/${index + 1}`, book, checkpoint: cp.number, group: 'checkpoint', index, round: 1, path, p }))
    }
  }
  for (const { path, data: paper } of await readModules('src/data/arena', /^set\d+\.js$/)) {
    papers.push(paper)
    paper.problems.forEach((p, index) => records.push({ id: `arena/${paper.id}/${index + 1}`, paper: paper.id, group: 'arena', index, round: 1, path, p }))
  }
  const transitions = []
  for (const { path, data: sets } of await readModules('src/data/transition', /^(bridges|transfer)\.js$/)) {
    for (const set of sets) {
      transitions.push(set)
      set.problems.forEach((p, index) => records.push({ id: `transition/${set.id}/${index + 1}`, book: 'transition', transition: set.id, group: set.id, index, round: 1, path, p }))
    }
  }
  return { chapters, checkpoints, papers, transitions, records }
}
