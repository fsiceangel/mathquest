# Problem variations

Every authored problem gets three *variations* — same idea and same difficulty,
different numbers, names, and framing. A student who retries a quiz gets a fresh
version instead of memorising an answer key, and a chapter worksheet can be
printed four times without repeating a single problem.

Base problems live in `src/data/<book>/chNN.js`. Variations live here, in
`src/data/variants/<book>/*.js`, and are merged onto the base problems at load
time by `src/data/content.js`. Base files are never edited to add variations.

## Module shape

A variation module is a plain object. Every key except `book` and `number` is
optional, so a chapter's variations may be split across several files (useful
when authoring a big chapter in parts — the registry deep-merges them).

```js
export default {
  book: 'prealgebra',
  number: 1,
  sections: {
    // key = section id; value = one entry per base problem, in order.
    // Each entry is an array of exactly 3 variations of that base problem.
    '1.2': [
      [ /* v1 */, /* v2 */, /* v3 */ ],   // variations of problems[0]
      [ /* v1 */, /* v2 */, /* v3 */ ],   // variations of problems[1]
      // ... one entry per base problem (10 of them)
    ],
  },
  challenge: [ /* 12 entries, each an array of 3 */ ],
  worksheet: [ /* 10 entries, each an array of 3 */ ],
}
```

A multiple-choice variation has the same shape as a base MC problem:

```js
{ q: '...', fig: { ... }, choices: ['$1$', '$2$', '$3$', '$4$'], answer: 2, solution: '...' }
```

A worksheet variation has the same shape as a base worksheet problem:

```js
{ q: '...', fig: { ... }, answer: '$42$', solution: '...' }
```

## Rules

1. **A variation is not a paraphrase.** Change the numbers, the context, and
   where sensible the direction of the question (solve for the other unknown,
   ask for the perimeter instead of the area). A reader who has just done the
   base problem must still have to do the arithmetic.
2. **Same skill, same difficulty.** The variation tests the concept the base
   problem tests, at the same level. Problem 9 of a section stays hard;
   problem 2 stays gentle.
3. **All content original.** Never copy a problem from a textbook or contest.
4. **Every answer verified.** Work the variation out; the keyed answer must be
   right and the three distractors must be wrong *and* distinct in value.
5. **Distractors earn their place.** Each wrong choice should be what a student
   gets from a specific, plausible mistake — not a random nearby number.
6. **Figures are coordinate-exact.** If the base problem has a `fig`, the
   variation needs its own `fig` whose coordinates match its own numbers.
   Figure labels are plain text, never LaTeX.
7. **Answer positions spread out.** Do not put every correct answer in slot A.
8. Currency inside math is written `$\$36$`. Math delimiters are `$…$`.

`npm run validate` checks structure, counts, KaTeX, figures, duplicate choices,
and that a variation is not textually identical to its base problem.
