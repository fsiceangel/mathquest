# Checkpoints — authoring spec

A checkpoint is a short contest-style paper that sits in a book's chapter list right
after the last chapter it covers. A chapter challenge tests one chapter's techniques
with the chapter's name on the page; a checkpoint hides which technique applies, mixes
everything the student has met in the book so far, and runs on a clock. It is the
bridge between chapter practice and the Challenge Arena.

## Files and shape

`src/data/checkpoints/<book>/cpN.js`, one module per checkpoint:

```js
export default {
  id: '<book>-cpN',        // e.g. 'prealgebra-cp2'
  book: '<book>',          // prealgebra | intro-counting | intro-algebra | intro-geometry
  number: N,               // 1, 2, 3 … within the book
  after: 6,                // the chapter it follows in the list
  covers: [1, 6],          // chapters whose techniques may appear (always from 1)
  title: '…',              // a short name in the arena style, two or three words
  blurb: '…',              // one or two sentences on the paper's feel; no difficulty numbers
  minutes: 25,
  problems: [ /* exactly 15 */ ],
}
```

Each problem is `{ q, fig?, choices: [5 strings], answer: <0-4>, solution, topic, chapter }`.
`topic` is one of: arithmetic, fractions, percents, ratios, rates, algebra, geometry,
counting, probability, number theory, statistics, patterns, logic. `chapter` is the
number of the covered chapter the problem leans on most; it must not exceed `covers[1]`.

## Placement

| book | checkpoints after chapter |
|---|---|
| prealgebra | 3, 6, 9, 12, 15 |
| intro-counting | 3, 6, 9, 12, 15 |
| intro-algebra | 3, 6, 9, 12, 15, 18, 22 |
| intro-geometry | 3, 6, 9, 12, 15, 19 |

Every checkpoint covers chapters 1 through `after`, weighted toward the newest three:
of the 15 problems, at least 8 lean on the three chapters just finished and at least 3
reach back further, so the paper both tests what is fresh and keeps earlier techniques
alive. For the three later books, Prealgebra is assumed known and may be drawn on freely
without counting toward either quota.

## Binding rules

1. **Choices are listed in increasing order** when they are numbers (fractions, decimals,
   π-multiples, negatives included — sort by value). Non-numeric choices go in a natural
   order. The answer index is therefore decided by the distractors, not chosen. Over the
   15 problems each of the five positions is correct at least 2 and at most 5 times.
2. **Every distractor is a specific wrong route** — a dropped step, the other quantity in
   the problem, an off-by-one, the answer to the unasked question. Never a random
   neighbor. The solution is ONE clear narrative paragraph in the arena voice: the route
   explained well, then which slip produces each tempting wrong choice, in choice order.
   Not the chapter-variation two-route ✓/✗ format.
3. **Difficulty.** There are no warm-ups; a checkpoint starts where a contest paper's
   middle begins. Solve time for a strong middle-school student:
   - Band A, #1–3: one to two minutes. Two-step problems with a reading step.
   - Band B, #4–7: two to three minutes. Multi-step with one real idea — a complementary
     count, a remainder argument, an angle chase, a system of two facts.
   - Band C, #8–11: three to five minutes. Needs an insight or organized casework:
     inclusion–exclusion, a pattern generalized to the nth term, a decomposition, a
     probability with several cases.
   - Band D, #12–15: five minutes or more. The problems most students miss: casework
     with several branches, an extremal argument, an invariant, a construction, two
     interacting constraints. Not guessable from the choices.
4. **Contest voice.** The stem never names the technique, the section, or the chapter.
   The problem should look like it could be about anything until the student sees the
   idea. Real objects, real scenarios, exact numbers; no "use the formula from …".
5. **Lanes are assigned** in the book's lane file (`notes/checkpoints/<book>.md`), one
   archetype per slot, chosen so that no two checkpoints in a book — and no checkpoint and
   arena paper — share an archetype with the same shape. The author picks the scenario,
   the numbers, and the key; the lane fixes the idea and the chapter.
6. **Verify every key** before writing choices: brute force in node for counting,
   probability, number theory and logic; coordinates for geometry; substitution for
   algebra. A wrong key on a timed paper is the worst possible defect.
7. **Figures** use the DSL in `src/components/Fig.jsx` (`poly`, `seg` with `dash:true`
   for auxiliary lines, `line`, `circle`, `arc`, `point`, `label`, `angle`, `right`,
   `tick`; `grid` where the chapter files use it). `view` is `[x0, y0, x1, y1]` at
   uniform scale, so never label the quantity asked for, and at least one distractor
   must sit on the same side of each labeled reference length as the answer. `label`
   text is plain SVG — no LaTeX. Three to five figures per checkpoint, where the lane says.
8. **Originality.** Everything is written fresh. Nothing reuses a stem, a number set, or
   a figure from the chapter library under `src/data/<book>/`, its variations, the four
   arena papers, or another checkpoint. Never name a textbook, a competition, or any
   other project anywhere, including comments and blurbs — "contest" is fine, a name is not.
9. **House style.** Curly apostrophes (’) inside words. "center", not "centre". Never
   the word "actually". No self-correcting prose. `\frac`, not `\dfrac`. `\$` for dollars,
   `\%` for percent, `^\circ` for degrees. Solutions use only `$…$` math.
10. **Economy.** Write the file in two or three large chunks with Write then Edit-append
    (the Bash tool strips one backslash level inside heredocs — never write file content
    through it). Never echo file contents back. Final message under 15 lines.

## Verification

```
node scripts/validate-content.mjs --only checkpoints/<book>/cpN
node scripts/audit/arena.mjs <book>
```

The validator checks shape, five choices, KaTeX, answer spread, and that no problem's
`chapter` tag exceeds the checkpoint's range. The arena audit checks ascending numeric
choices, position spread, cross-paper echoes, house style, and figures. Both must be clean.
