# Challenge Arena — calibration spec for the four authored papers

Files: `src/data/arena/set01.js` … `set04.js`. Each is rewritten in full. Keep each
file's `id`, `title`, and `minutes: 40`; rewrite `blurb` to one or two sentences that
describe the paper's feel (no difficulty numbers, no competition names).

## Binding rules

1. **Shape.** `export default { id, title, blurb, minutes: 40, problems }` with exactly
   25 problems. Each problem is `{ q, fig?, choices: [5 strings], answer: <0-4>,
   solution, topic }`. `topic` is one of: arithmetic, fractions, percents, ratios, rates,
   algebra, geometry, counting, probability, number theory, statistics, patterns, logic.
2. **Choices are listed in increasing order** when they are numbers (fractions, decimals,
   π-multiples, negatives included — sort by value). Non-numeric choices (names, expressions,
   ordered pairs) go in a natural order. This is how a real contest paper reads, and it means
   the answer index is decided by the distractors, not chosen. Spread the correct position:
   over the 25 problems each of the five positions must be correct at least 3 times and at
   most 7 times.
3. **Every distractor is a specific wrong route** — a dropped step, a wrong formula, the other
   quantity in the problem, an off-by-one. Never a random neighbor. The solution names which
   slip produces each of the most tempting wrong choices where that is natural, in one clear
   narrative paragraph (the arena voice: one route explained well, plus the traps — NOT the
   chapter-variant two-route ✓/✗ format).
4. **Difficulty ramp** (solve time for a strong middle-school student):
   - Band A, #1–5: under a minute. Short story problems and small numeric expressions with
     one idea. Never a bare "compute this" drill — every opener has at least one reading
     step (a scenario, a comparison, a small pattern).
   - Band B, #6–10: one to two minutes. Two-step problems: a ratio split then a difference,
     an area then a perimeter, an average then a missing value.
   - Band C, #11–15: two to three minutes. Multi-step with one real idea: a complementary
     count, a remainder argument, an angle chase, a system of two facts.
   - Band D, #16–20: three to five minutes. Requires an insight or organized casework:
     inclusion–exclusion, a pattern generalized to the nth term, a geometric decomposition,
     a probability with several cases.
   - Band E, #21–25: five minutes or more. The problems most students miss: casework with
     several branches, an extremal argument, an invariant, a geometric construction, a
     number-theory problem with two interacting constraints. Answers should not be guessable
     from the choices.
5. **Lanes are assigned** (table below). Each slot names the archetype; the author picks the
   scenario, numbers, and key. The four papers have different archetypes in every slot, so
   no two papers share a problem — do not drift into another paper's lane.
6. **Verify every key.** For counting, probability, number theory, and logic problems, run a
   brute-force check in node before writing the choices. For geometry, verify with
   coordinates. A wrong key on a contest paper is the worst possible defect.
7. **Figures** use the DSL in `src/components/Fig.jsx` (`poly`, `seg` with `dash:true` for
   auxiliary lines, `line`, `circle`, `arc`, `point`, `label`, `angle`, `right`, `tick`).
   `view` is `[x0, y0, x1, y1]` at uniform scale, so figures are exactly to scale: never
   label the quantity asked for (mark it `?`), and at least one distractor must sit on the
   same side of each labeled reference length as the answer. `label` text is plain SVG —
   no LaTeX, no square-root glyphs. Aim for 5–7 figures per paper, in the geometry and
   grid-counting slots.
8. **Originality.** Everything is written fresh for this site. Do not reuse the stems,
   numbers, or figures of the current arena files, and do not copy any problem from the
   chapter library under `src/data/`. Never name a textbook, a competition, or any other
   project anywhere, including comments and blurbs — the word "contest" is fine, a name is not.
9. **House style.** Curly apostrophes (’) inside words. "center", not "centre". Never the word
   "actually". No self-correcting prose. `\frac`, not `\dfrac`. Dollar amounts as `\$`.
   Percent as `\%`. Degrees as `^\circ`.
10. **Economy.** Write the file in a few large chunks. Do not echo file contents back. Final
    message under 20 lines: which slots carry figures, the answer-position counts, and
    anything you are stopping on.

## Lane table

Slot | Band | Paper 1 (set01) | Paper 2 (set02) | Paper 3 (set03) | Paper 4 (set04)
---|---|---|---|---|---
1 | A | fraction of a fraction of a group (two steps in a story) | small expression with subtraction and division, negative result, wrapped in a "which is the value" stem | schedule story: something happens every k minutes across a time window, count occurrences | money change story with decimals
2 | A | percent of a quantity in a story | fraction of a quantity, then the remainder | estimation: which of five values is closest to a quotient | unit price comparison — which of two packages is cheaper per unit, by how much
3 | A | perimeter of a rectilinear figure with some sides unlabeled (figure) | mean of five values, find the missing one | angle on a straight line split into three labeled parts (figure) | count multiples of one number inside a range
4 | A | sum of digits of a power, or units digit of a small product | area of a rectangle with a square notch removed (figure) | order five fractions or decimals — which is largest | exterior angle of a triangle (figure)
5 | A | median of a small data set from a story | GCF or LCM story (tiles, packaging) | average speed from total distance and total time | mean vs median: difference between them for a small list
6 | B | product-rule count with one restriction (outfits, menus) | ratio split of a total, then a difference | arithmetic-sequence story (seats per row), find a term | percent increase from old to new value
7 | B | age problem, two people, one relation now and one later | "twice a number plus … equals …" two-step number puzzle | sum of consecutive integers, find one of them | coins puzzle: two coin types, total count and total value
8 | B | right triangle inside a rectangle, area of the rest (figure) | rectangle plus triangle composite area (figure) | square: area given, find perimeter (or reverse) with a twist | interior angle sum of a polygon, find one angle
9 | B | fill/drain rate with two faucets, simple | mean shifts when one value is added | map scale, distance conversion | single-event probability with a spinner of unequal sectors (figure)
10 | B | two coins or one die, simple compound event | handshakes among n people | complement probability from a bag | count rectangles in a 2×3 grid (figure)
11 | C | remainder story (books in stacks of 7 leave 3, …) | LCM story with three periodic events | sum or count of primes in a range | find the missing digit so a number is divisible by both 9 and 4
12 | C | area of a triangle on a coordinate grid (figure) | angle chase with an isosceles triangle (figure) | circle: circumference vs area comparison with π | similar triangles from a shadow or a ladder
13 | C | two travelers meeting, distance-rate-time | mixture: average of two groups of different sizes | two workers together, time to finish | two purchases give two equations, find a unit price
14 | C | lattice paths on a small grid, no obstacle (figure) | three-digit numbers with a digit condition | arrangements with two people kept together | committees of two with one forbidden pairing
15 | C | mean, median, and mode combine to pin down a list | two dice, probability the sum meets a condition | weighted average of two classes | two draws without replacement, probability of a match
16 | D | repeating cycle, find the 100th (or 2026th) term | dot-figure sequence, count the nth figure | units digit of a large power | sum of an arithmetic series in a story (bricks, seats)
17 | D | overlapping rectangles, area of the union (figure) | square inscribed in a circle, shaded area with π (figure) | folded rectangle, find a length by Pythagoras (figure) | area of a kite or trapezoid on a grid by decomposition (figure)
18 | D | two-digit numbers with a digit-sum condition plus a twist | count of divisors that are perfect squares | remainder of a large power on division by 7 | product of consecutive integers equals a given number, find the sum
19 | D | one truth-teller among several statements | ranking puzzle with several ordering constraints | round-robin tournament points puzzle | balance-scale weights puzzle
20 | D | probability by casework: three coins, at least two match a condition | pick two numbers from a set, probability the product is even | two spinners, probability of a combined event with cases | random point in a region, area probability (figure)
21 | E | casework count: integers 1–100 with a two-part digit property | count triangles in a figure (figure) | distribute identical items with a minimum per person, count by listing | ordered pairs of positive integers with a linear bound, count by cases
22 | E | area ratio from midpoints and a cevian (figure) | chord and tangent lengths via Pythagoras (figure) | painted cube, count sub-cubes by face count | cube net or box: surface area versus volume comparison
23 | E | extremal: largest number with digit and divisibility constraints | telescoping product, exact value | largest amount not makeable from two coin values, with justification | telescoping sum of unit fractions with an irregular gap
24 | E | maximize a value given mean and median constraints | lattice paths with a forbidden intersection on a larger grid (figure) | maximum possible score given several averages | seating or coloring with an adjacency constraint, count by cases
25 | E | three-stage random process, probability by full casework | integers up to 1000 with two interacting number-theory constraints | shaded region from overlapping circles or sectors (figure) | invariant or parity puzzle: what final value is forced

Working notes: slot 25 on Paper 4 must have a forced answer with a one-line invariant
proof in the solution. Slot 22 on Paper 1 wants a figure where the answer is a ratio or a
fraction of the whole, so the figure cannot be measured against. Slot 19 solutions must
show the elimination, not just state the answer. Where a lane says "(figure)" the figure
is required; elsewhere it is optional and usually absent.
