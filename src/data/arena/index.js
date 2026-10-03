import { allChapters } from '../content.js'
import { allCheckpoints } from '../checkpoints/index.js'
import { arenaCalibration, inDifficultyOrder } from '../calibration/index.js'
import { calibratedPool, DRAW_PROFILES, selectPaper } from '../../lib/draw-paper.js'

const setModules = import.meta.glob('./set*.js', { eager: true })
export const arenaPapers = Object.values(setModules)
  .map(m => m.default)
  .filter(s => s && Array.isArray(s.problems))
  .sort((a, b) => a.id.localeCompare(b.id))
  .map(paper => ({ ...paper, problems: inDifficultyOrder(paper.problems.map((p, i) => ({ ...p, calibration: arenaCalibration(paper.id, i) }))) }))

export function getPaper(id) {
  return arenaPapers.find(p => p.id === id) ?? null
}

export function drawPaper(n, { mode = n === 10 ? 'quick' : 'draw' } = {}) {
  const profile = DRAW_PROFILES[mode]
  if (!profile || profile.length !== n) throw new Error('Unknown paper length or difficulty profile')
  return selectPaper(calibratedPool(allChapters(), allCheckpoints()), profile, { foundationOnly: mode !== 'draw' })
}

export const ARENA_MODES = [
  { id: 'bridge', title: 'Mixed Practice', count: 10, minutes: null,
    blurb: 'After Prealgebra: ten mixed problems, no clock, with feedback after every answer.' },
  { id: 'quick', title: 'Quick Round', count: 10, minutes: 15,
    blurb: 'The next step after mixed practice: ten Prealgebra problems in fifteen minutes.' },
  { id: 'draw', title: 'Random Draw', count: 25, minutes: 40,
    blurb: 'Core topics and contest bridges, with a gradual rise in difficulty. Four or five choices per problem.' },
]

export function getMode(id) {
  return ARENA_MODES.find(m => m.id === id) ?? null
}
