// Deliberately limited to eight numeric questions. The mathematical question,
// audited key, and stable ID remain the same; only the practice interaction changes.
export const answerEntrySpecs = {
  'transition/statistics-construction/1': { kind: 'integer', expected: '6' },
  'transition/statistics-construction/3': { kind: 'integer', expected: '12' },
  'transition/restricted-last-digits/2': { kind: 'integer', expected: '5' },
  'transition/restricted-distributions/1': { kind: 'integer', expected: '14' },
  'transition/pascal-paths/2': { kind: 'integer', expected: '6' },
  'transition/transfer-1/1': { kind: 'integer', expected: '6' },
  'transition/transfer-1/3': { kind: 'integer', expected: '72', unit: 'cm' },
  'transition/transfer-2/5': { kind: 'rational', expected: '16/25' },
}
