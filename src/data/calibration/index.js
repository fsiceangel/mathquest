import prealgebra from './prealgebra.js'
import counting from './intro-counting.js'
import algebra from './intro-algebra.js'
import geometry from './intro-geometry.js'
import arena from './arena.js'

export const calibrations = Object.fromEntries([prealgebra, counting, algebra, geometry].map(b => [b.book, b]))
export const scopeLabels = { core: 'Core practice', bridge: 'Contest bridge', extension: 'Optional extension' }

export function sectionCalibration(book, chapter, section) {
  return calibrations[book]?.chapters[chapter]?.sections[section] ?? null
}

export function problemCalibration(book, chapter, group, index, round = 1) {
  const ch = calibrations[book]?.chapters[chapter]
  if (!ch) return null
  const section = ch.sections[group]
  const mixed = group === 'challenge' || group === 'worksheet'
  const baseLevel = (mixed ? ch[group] : section?.levels)?.[index]
  if (baseLevel == null) return null
  const defaultScope = Object.values(ch.sections).some(s => s.scope === 'extension') ? 'extension' : 'bridge'
  const scope = mixed
    ? ch[`${group}ScopeOverrides`]?.[index + 1] ?? ch[`${group}Scope`] ?? defaultScope
    : section.scopeOverrides?.[index + 1] ?? section.scope
  const override = (mixed ? ch[`${group}VariantOverrides`] : section.variantOverrides)?.[`${index + 1}.${round}`]
  const reviewed = ch.variantReview?.status === 'stem-reviewed' && ch.variantReview.rounds?.includes(round)
  return {
    id: `${book}/${chapter}/${group}/${index + 1}/${round}`,
    level: override?.level ?? baseLevel,
    scope: override?.scope ?? scope,
    basis: round === 1 ? 'editorial' : override ? 'variant-reviewed' : reviewed ? 'variant-equivalent' : 'inherited',
    reason: override?.reason,
  }
}

export function checkpointCalibration(book, number, index) {
  const cp = calibrations[book]?.checkpoints[number]
  if (cp?.levels[index] == null) return null
  return { id: `${book}/checkpoint/${number}/${index + 1}`, level: cp.levels[index], scope: cp.scopeOverrides?.[index + 1] ?? cp.scope, basis: 'editorial' }
}

export function arenaCalibration(id, index) {
  if (arena[id]?.[index] == null) return null
  return { id: `arena/${id}/${index + 1}`, level: arena[id][index], scope: 'bridge', basis: 'editorial' }
}

// Preserve authored positions for variants and saved source references. Only
// presentation copies are sorted, and equal-level items keep their order.
export function inDifficultyOrder(problems) {
  return problems.slice().sort((a, b) => (a.calibration?.level ?? 1) - (b.calibration?.level ?? 1))
}
