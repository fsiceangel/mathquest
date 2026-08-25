// Problem variations.
//
// A problem may carry up to three alternates in `problem.variants`. Together
// with the base problem that makes a rotation of four versions. Which version a
// student sees depends on how many times they have already finished that quiz:
// the first run is the base set, "Try again" hands them fresh numbers, and it
// takes four attempts before anything repeats.
//
// Rotating (rather than picking at random) keeps two promises: a student never
// gets the same version twice in a row, and a printed worksheet can be
// reproduced later by asking for the same version number.

export function versionCount(problems) {
  if (!problems?.length) return 1
  return problems.reduce((n, p) => Math.min(n, 1 + (p.variants?.length ?? 0)), Infinity)
}

// The `round`-th version of a single problem (round 0 is the base problem).
export function versionOf(problem, round) {
  const pool = [problem, ...(problem.variants ?? [])]
  return pool[((round % pool.length) + pool.length) % pool.length]
}

// The `round`-th version of a whole problem set. Problems without variations
// simply repeat, so a partially authored chapter still works.
export function versionSet(problems, round) {
  if (!round) return problems
  return problems.map((p) => versionOf(p, round))
}
