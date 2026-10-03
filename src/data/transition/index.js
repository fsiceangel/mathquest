import bridges from './bridges.js'
import transfer from './transfer.js'
import { answerEntrySpecs } from './answer-entry-specs.js'

export function transitionCalibration(setId, index, problem) {
  return { id: `transition/${setId}/${index + 1}`, level: problem.level, scope: 'bridge', basis: 'editorial' }
}

// Keep authoring objects unchanged; stable IDs let saved attempts find these
// questions again even when another practice has been opened in between.
export const transitionSets = [
  ...bridges.map(set => ({ ...set, kind: 'bridge' })),
  ...transfer.map(set => ({ ...set, kind: 'transfer' })),
].map(set => ({
  ...set,
  problems: set.problems.map((problem, index) => ({
    ...problem, calibration: transitionCalibration(set.id, index, problem),
    ...(answerEntrySpecs[`transition/${set.id}/${index + 1}`] ? { answerEntry: answerEntrySpecs[`transition/${set.id}/${index + 1}`] } : {}),
  })),
}))

export function getTransitionSet(id) {
  return transitionSets.find(set => set.id === id)
}
