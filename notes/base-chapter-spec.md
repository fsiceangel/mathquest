# Counting & Probability — base chapter authoring spec

Book id `intro-counting`. Files: `src/data/intro-counting/chNN.js` (two-digit NN). Each
chapter is one module; look at `src/data/prealgebra/ch14.js` once for the exact shape and
voice (it is the closest existing chapter in subject), and at `src/data/intro-geometry/ch12.js`
for figures. Then write yours from scratch.

## Module shape (enforced by `node scripts/validate-content.mjs`)

```js
const sN2 = { id: 'N.2', title: '…', learn: { concepts: [...], examples: [...] }, problems: [10 MC] }
…
export default { id: 'intro-counting-chNN', book: 'intro-counting', number: N, title: '…',
  intro: '…', sections: [sN2, …], challenge: [12 MC], worksheet: [10 free response] }
```

- **Section ids follow the book’s numbering**, which starts each chapter at `N.1 Introduction`,
  so the first authored section is `N.2`. The per-chapter map is below; ids and titles are fixed.
- `learn.concepts`: exactly **4** `{ heading, body }`. Short, friendly, one idea each; the body
  may use inline LaTeX. Teach the technique, then say when it applies and what its trap is.
- `learn.examples`: exactly **3** `{ problem, steps: [3–5 strings], answer }`, ramping from a
  direct application to one that needs a small idea. Every step is one sentence of reasoning.
- `problems`: exactly **10** MC `{ q, fig?, choices: [4 strings], answer: <0-3>, solution }`.
  Ramp: 1–3 are direct drills on the section’s technique, 4–7 need a short setup, 8–10 are
  the section’s hardest (10 is the hardest — the Arena relies on that ordering). The four
  correct positions must not cluster (no position more than 5 of 10).
- `challenge`: exactly **12** MC problems that mix the whole chapter and ramp hard; 10–12
  should take a strong student several minutes.
- `worksheet`: exactly **10** free-response `{ q, fig?, answer: '<LaTeX string>', solution }` —
  no `choices`, `answer` is a string like `'$84$'` or `'$\\frac{5}{12}$'`.
- `intro`: two or three sentences that tell a kid what the chapter unlocks.
- `solution` voice (base chapters): ONE clear route in a short paragraph, then which slip
  produces each tempting wrong choice where natural. (This is not the two-route ✓/✗ format
  used in variation files.)

## Content rules

1. **Original.** Every concept sentence, example, and problem is written fresh for this site.
   Do not reproduce any textbook’s examples, exercises, numbers, or phrasing. The chapter and
   section titles are the only thing shared with the book a student works from. **Also read
   `src/data/prealgebra/ch14.js` (the site’s earlier counting chapter) and every earlier
   `intro-counting` chapter before writing: none of your problems may be one of theirs with
   new numbers or a new context, and none may be one of your own learn examples restated.**
   The ch01 checker had to replace 9 of 62 problems for exactly this.
2. **Never name** any textbook, publisher, competition, or other project anywhere — not in
   content, not in comments.
3. **Every key is verified.** Before writing a problem’s choices, brute-force the answer in
   node (enumerate the actual objects being counted; simulate or enumerate the sample space
   for probability). Counting problems fail on conventions, so every stem must settle them:
   are the people distinguishable, does order matter, is repetition allowed, is zero allowed,
   are rotations of a circle the same. If a stem could be read two ways, rewrite the stem.
4. **Distractors are specific slips**: forgetting to divide by symmetries, counting ordered
   when unordered was asked, off-by-one at a boundary, adding instead of multiplying, the
   complement instead of the event. Never a random neighbor.
5. **Probabilities** are fully reduced fractions in `\frac{}{}`; never decimals or percents
   unless the section is about them.
6. **Figures** only where they earn their place (grids for path counting, geometric
   probability regions, spinners). DSL in `src/components/Fig.jsx`: `poly`, `seg`
   (`dash:true` for auxiliary), `line`, `circle`, `arc`, `point`, `label`, `angle`, `right`,
   `tick`. `view` is `[x0, y0, x1, y1]` at uniform scale. `label` text is plain SVG — no
   LaTeX. Never label the quantity being asked.
7. **House style.** Curly apostrophes (’) inside words. "center", not "centre". Never the
   word "actually". No self-correcting prose. `\frac`, not `\dfrac`. `\$` for dollars,
   `\%` for percent, `\binom{n}{k}` for combinations, `n!` for factorials.
8. **Difficulty.** This book is harder than the Prealgebra counting chapter: a strong
   middle-schooler preparing for contests. Section problems 8–10 and challenge 8–12 should
   need real thought (casework with several branches, a symmetry argument, a
   complementary count with an overlap).
9. **Economy.** Write the file in five or six large chunks (Write the first section, then
   Edit-append the rest), never echo file contents back, and keep the final message under
   15 lines: per-section answer-position counts, figure count, and anything you stopped on.

## Chapter map (section ids → titles)

| ch | title | sections |
|---|---|---|
| 01 | Counting Is Arithmetic | 1.2 Counting Lists of Numbers · 1.3 Counting with Addition and Subtraction · 1.4 Counting Multiple Events · 1.5 Permutations |
| 02 | Basic Counting Techniques | 2.2 Casework · 2.3 Complementary Counting · 2.4 Constructive Counting · 2.5 Counting with Restrictions |
| 03 | Correcting for Overcounting | 3.2 Permutations with Repeated Elements · 3.3 Counting Pairs of Items · 3.4 Counting with Symmetries |
| 04 | Committees and Combinations | 4.2 Committee Forming · 4.3 How to Compute Combinations · 4.4 Our First Combinatorial Identity |
| 05 | More With Combinations | 5.2 Paths on a Grid · 5.3 More Committee-type Problems · 5.4 Distinguishability |
| 06 | Some Harder Counting Problems | 6.2 Problems |
| 07 | Introduction to Probability | 7.2 Basic Probability · 7.3 Equally Likely Outcomes · 7.4 Counting Techniques in Probability Problems |
| 08 | Basic Probability Techniques | 8.2 Probability and Addition · 8.3 Complementary Probabilities · 8.4 Probability and Multiplication · 8.5 Probability with Dependent Events · 8.6 Shooting Stars — a Hard Problem |
| 09 | Think About It! | 9.2 Problems |
| 10 | Geometric Probability | 10.2 Probability Using Lengths · 10.3 Probability Using Areas |
| 11 | Expected Value | 11.2 Definition of Expected Value · 11.3 Expected Value Problems · 11.4 A Funky Game |
| 12 | Pascal’s Triangle | 12.2 Constructing Pascal’s Triangle · 12.3 Those Numbers Look Familiar! · 12.4 An Interesting Combinatorial Identity · 12.5 Another Interesting Combinatorial Identity |
| 13 | The Hockey Stick Identity | 13.2 The Problem · 13.3 A Step-by-Step Solution · 13.4 A Clever Solution · 13.5 The Identity |
| 14 | The Binomial Theorem | 14.2 A Little Algebra · 14.3 The Theorem · 14.4 Applications of the Binomial Theorem · 14.5 Using the Binomial Theorem in Identities |
| 15 | More Challenging Problems | 15.2 Problems |

Section notes. Chapters 06, 09, 15 have a single "Problems" section: its learn block teaches
the *strategies* the chapter is about (reading a problem twice, choosing between casework
and complement, checking small cases, looking for a bijection), with three worked examples,
and its 10 problems are genuinely mixed. 8.6 "Shooting Stars" is a section built around one
hard multi-stage probability problem; teach the method (organize by stages, add the disjoint
paths) and pose ten problems of that kind. 11.4 "A Funky Game" is about games whose
expected value surprises (a fair-looking game that is not); 13.2–13.4 walk one distribution
problem three ways (brute list, step-by-step recursion, the clever hockey-stick count) — the
problems in 13.2 and 13.3 should be solvable by listing and by recursion respectively, and
13.4/13.5 by the identity.
