// Chapters 16–19: every base/variant stem compared, with targeted solution checks.
// These editorial judgments are not independent proofs of every answer.
export function applyLateGeometryReview(calibration) {
  const rows = {
    16: [],
    17: [
      ['17.3', 5, 2, 2, 'The prompt explicitly requires the optional shoelace formula.', 'extension'],
      ['17.3', 5, 3, 3, 'An arbitrary coordinate triangle needs a bounding-box decomposition or a chosen area method.', 'bridge'],
      ['17.3', 5, 4, 3, 'Choose and carry out an area method; the formula is no longer specified.', 'bridge'],
      ['17.4', 4, 4, 2, 'First compute the midpoint, then its distance from the remaining vertex.'],
      ['17.4', 7, 4, 2, 'The midpoint quadrilateral of a square simplifies the general symbolic argument.'],
      ['17.6', 6, 4, 3, 'Both coordinates change, so an equal-distance equation must be combined with y = x.'],
      ['17.6', 7, 3, 2, 'Construct a diagonal perpendicular bisector rather than read an axis-parallel one.'],
      ['17.6', 9, 4, 2, 'The first-quadrant ray has a 3:4:5 ratio; scale it to the given distance.'],
      ['challenge', 11, 3, 3, 'Complete the square to recover the center and radius before the point-circle distance.'],
    ],
    18: [
      ['18.1', 3, 4, 2, 'Combine sine and cosine as a quotient instead of recalling one ratio.'],
      ['18.1', 6, 4, 2, 'Recover a leg, then use the right-triangle altitude relation.'],
      ['18.2', 1, 4, 2, 'Find a reference angle and both coordinate signs; the base is an axis point.'],
      ['18.3', 6, 4, 1, 'Recognize a scaled 30–60–90 triangle or check Pythagoras directly.'],
      ['challenge', 5, 2, 1, 'An acute angle is identified by a single standard sine value.'],
      ['challenge', 5, 3, 1, 'A single standard positive cosine value identifies the angle in the specified interval.'],
      ['challenge', 5, 4, 1, 'An acute angle is identified by a single standard sine value.'],
      ['challenge', 6, 2, 2, 'Two 45-degree angles identify a special right triangle before scaling.'],
      ['challenge', 6, 4, 2, 'Two 45-degree angles identify a special right triangle before scaling.'],
      ['worksheet', 10, 2, 2, 'Recognize the isosceles right triangle and multiply its perpendicular legs.'],
      ['worksheet', 10, 3, 2, 'All sides are equal, so the angles and equilateral area follow directly.'],
    ],
    19: [
      ['19.1', 5, 4, 2, 'Two supplied right angles reduce the task to two Pythagorean calculations; no areas are combined.'],
      ['19.2', 4, 4, 3, 'Recover rectangle dimensions from a product and difference rather than a linear perimeter.'],
      ['19.3', 9, 3, 1, 'Recall the defining parallel sides; no angle theorem or proof chain is needed.'],
      ['worksheet', 8, 4, 2, 'Each chord is found independently from a supplied center distance; no relative placement decision remains.'],
    ],
  }
  calibration.chapters[17].sections['17.3'].scopeOverrides = { '5': 'extension' }
  for (const [number, entries] of Object.entries(rows)) {
    const chapter = calibration.chapters[number]
    chapter.variantReview = {
      status: 'stem-reviewed', rounds: [2, 3, 4],
      note: 'All variant stems compared with their bases; selected figures and nontrivial solutions checked. Not every answer independently proved.',
    }
    for (const [group, slot, round, level, reason, scope] of entries) {
      const container = chapter.sections[group] ?? chapter
      const field = chapter.sections[group] ? 'variantOverrides' : `${group}VariantOverrides`
      container[field] ??= {}
      container[field][`${slot}.${round}`] = { level, reason, ...(scope ? { scope } : {}) }
    }
  }
  return calibration
}
