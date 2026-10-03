import { allChapters, loadVariants } from './content.js'
import { allCheckpoints } from './checkpoints/index.js'
import { arenaPapers } from './arena/index.js'
import { transitionSets } from './transition/index.js'

export function availableSavedProblems(ids) {
  const wanted = new Set(ids), found = new Map()
  const add = p => { if (wanted.has(p.calibration?.id)) found.set(p.calibration.id, p) }
  for (const ch of allChapters()) for (const group of [...ch.sections.map(s => s.problems), ch.challenge, ch.worksheet]) {
    for (const p of group) { add(p); for (const v of p.variants ?? []) add(v) }
  }
  for (const paper of [...allCheckpoints(), ...arenaPapers, ...transitionSets]) paper.problems.forEach(add)
  const problems = ids.map(id => found.get(id))
  return problems.every(Boolean) ? problems : null
}

export async function loadSavedProblems(ids) {
  const chapters = new Map()
  for (const id of ids) {
    const match = /^(prealgebra|intro-algebra|intro-counting|intro-geometry)\/(\d+)\/[^/]+\/\d+\/([234])$/.exec(id)
    if (match) chapters.set(`${match[1]}/${match[2]}`, [match[1], Number(match[2])])
  }
  await Promise.all([...chapters.values()].map(([book, number]) => loadVariants(book, number)))
  return availableSavedProblems(ids)
}
