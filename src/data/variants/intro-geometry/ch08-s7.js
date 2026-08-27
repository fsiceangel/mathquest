// Introduction to Geometry chapter 8 — variations for section 8.7 (If and Only If).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - The section is entirely conceptual, so every keyed claim was verified by
//    two independent routes: a direct argument up or down the quadrilateral
//    hierarchy, and a counterexample hunt against each wrong choice (a tilted
//    rhombus, a long rectangle, a kite, an isosceles trapezoid). Each "always"
//    was attacked before it was written down.
//  - Figures are coordinate-exact: every tick group marks segments of one
//    true common length, every right marker was checked against a dot
//    product, and every labelled diagonal is drawn at its labelled length.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item say the same thing.

const s87 = [
  // s1 — which family statement runs a hierarchy arrow the true way.
  [
    {
      q: 'Which one of these four family claims is TRUE?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, -3], [3, 0], [0, 3], [-3, 0]], fill: false },
          { t: 'right', at: [3, 0], from: [0, -3], to: [0, 3] },
          { t: 'tick', a: [0, -3], b: [3, 0], n: 1 },
          { t: 'tick', a: [3, 0], b: [0, 3], n: 1 },
          { t: 'tick', a: [0, 3], b: [-3, 0], n: 1 },
          { t: 'tick', a: [-3, 0], b: [0, -3], n: 1 },
          { t: 'point', p: [0, -3], label: 'P', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'Q', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [-3, 0], label: 'S', dx: -12, dy: 0 },
        ],
      },
      choices: [
        'Every rectangle is a rhombus',
        'Every parallelogram is a square',
        'Every square is a rectangle',
        'Every rhombus is a rectangle',
      ],
      answer: 2,
      solution:
        'A rectangle charges exactly one admission fee — four right angles — and a square pays it in full, so every square is a rectangle ✓. Confirm by hunting counterexamples for the rest: a $5 \\times 3$ rectangle has unequal neighboring sides, so it is no rhombus ✗; a tilted parallelogram with a $60^\\circ$ angle is nowhere near a square ✗; and a rhombus with that same $60^\\circ$ tilt has no right angle, so it is not a rectangle ✗. (The first and last choices are JUMPING BETWEEN BRANCHES — rectangle and rhombus sit on separate limbs of the family tree ✗; the parallelogram claim is RUNNING THE ARROW BACKWARDS, promoting a shape two levels for free ✗.)',
    },
    {
      q: 'Exactly one of the following family claims about quadrilaterals is TRUE. Which one?',
      fig: {
        view: [-1.5, -1.5, 9.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [8, 4], [3, 4]], fill: false },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [8, 4], n: 1 },
          { t: 'tick', a: [8, 4], b: [3, 4], n: 1 },
          { t: 'tick', a: [3, 4], b: [0, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [3, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'Every rhombus is a parallelogram',
        'Every parallelogram is a rhombus',
        'Every trapezoid is a square',
        'Every rectangle is a square',
      ],
      answer: 0,
      solution:
        'A rhombus has all four sides equal, so each pair of opposite sides is equal — and a quadrilateral with both pairs of opposite sides equal is a parallelogram, like the tilted one drawn ✓. Now attack the others: a $5 \\times 3$ parallelogram frame has two long and two short sides, so it is no rhombus ✗; a right trapezoid with bases $3$ and $8$ is not a square ✗; and a $5 \\times 3$ rectangle fails the equal-sides test for squares ✗. (The second choice is RUNNING THE ARROW BACKWARDS ✗; the last two are each PROMOTING WITHOUT PAYING — the extra conditions for a square never come free ✗.)',
    },
    {
      q: 'Sort the true from the false: which statement below is TRUE?',
      fig: {
        view: [-1.5, -1.5, 8.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [7, 3], [0, 3]], fill: false },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 3] },
          { t: 'right', at: [7, 3], from: [7, 0], to: [0, 3] },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [7, 3], label: 'Y', dx: 10, dy: -8 },
          { t: 'point', p: [0, 3], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'Every parallelogram is a rectangle',
        'Every rhombus is a square',
        'Every trapezoid is a rhombus',
        'Every rectangle is a parallelogram',
      ],
      answer: 3,
      solution:
        'In a rectangle, the four right angles force each pair of opposite sides to run parallel — so every rectangle, like $WXYZ$ above, is a parallelogram ✓. The counterexample hunt sinks the rest: a tilted parallelogram with a $70^\\circ$ angle has no right angle ✗; a rhombus with that tilt has no right angle either, so it is not a square ✗; and a right trapezoid with unequal parallel sides has unequal sides all around, nothing like a rhombus ✗. (The first two choices are RUNNING THE ARROW BACKWARDS up the family tree ✗; the trapezoid claim is PROMOTING WITHOUT PAYING, skipping every requirement in between ✗.)',
    },
  ],
  // s2 — writing the converse of an if-then statement.
  [
    {
      q: 'What is the converse of the statement “If a quadrilateral is a rhombus, then it is a parallelogram”?',
      choices: [
        'If a quadrilateral is not a rhombus, then it is not a parallelogram.',
        'If a quadrilateral is a parallelogram, then it is a rhombus.',
        'If a quadrilateral is not a parallelogram, then it is not a rhombus.',
        'A quadrilateral is a rhombus if and only if it is a parallelogram.',
      ],
      answer: 1,
      solution:
        'The converse swaps the two halves and touches nothing else: “parallelogram” moves into the “if” seat and “rhombus” into the “then” seat ✓. Notice the converse happens to be false — a $5 \\times 3$ parallelogram is no rhombus — and that is fine: the question asks for the converse’s form, not its truth. (The first choice is KEEPING THE ORDER AND NEGATING BOTH — that is the inverse ✗; the third is SWAPPING AND NEGATING — the contrapositive, which always matches the original in truth ✗; the last is CLAIMING BOTH DIRECTIONS AT ONCE — a biconditional says strictly more than a converse ✗.)',
    },
    {
      q: 'What is the converse of the statement “If a quadrilateral is a square, then it has four equal sides”?',
      choices: [
        'If a quadrilateral does not have four equal sides, then it is not a square.',
        'If a quadrilateral is not a square, then it does not have four equal sides.',
        'If a quadrilateral has four equal sides, then it is not a square.',
        'If a quadrilateral has four equal sides, then it is a square.',
      ],
      answer: 3,
      solution:
        'To build a converse, lift the hypothesis and the conclusion and set them back down in swapped seats, with no negations added: “four equal sides” now leads, “square” now follows ✓. As a bonus check, this converse is false — a tilted rhombus has four equal sides and no right angle — which is exactly why converses must be written first and judged second. (The first choice is SWAPPING AND NEGATING — the contrapositive ✗; the second is KEEPING THE ORDER AND NEGATING BOTH — the inverse ✗; the third is SWAPPING BUT NEGATING THE CONCLUSION, a corrupted swap that says the opposite of the converse ✗.)',
    },
    {
      q: 'What is the converse of the statement “If a quadrilateral is a parallelogram, then its opposite angles are equal”?',
      choices: [
        'If the opposite angles of a quadrilateral are equal, then it is a parallelogram.',
        'If a quadrilateral is not a parallelogram, then its opposite angles are not equal.',
        'If the opposite angles of a quadrilateral are not equal, then it is not a parallelogram.',
        'A quadrilateral is a parallelogram if and only if its opposite angles are equal.',
      ],
      answer: 0,
      solution:
        'Swap the seats, keep every word positive: “opposite angles equal” becomes the hypothesis and “parallelogram” the conclusion ✓. This particular converse even turns out to be true — with both pairs of opposite angles equal, the four angles pair off so that each two consecutive angles sum to $180^\\circ$, which forces both pairs of sides parallel — but the question only asks for the converse’s shape, not its verdict. (The second choice is KEEPING THE ORDER AND NEGATING BOTH — the inverse ✗; the third is SWAPPING AND NEGATING — the contrapositive ✗; the last is CLAIMING BOTH DIRECTIONS AT ONCE, the full biconditional rather than the single reversed arrow ✗.)',
    },
  ],
  // s3 — a counterexample that defeats a false converse.
  [
    {
      q: 'The converse “If a quadrilateral has four equal sides, then it is a square” is FALSE. Which shape proves it false?',
      fig: {
        view: [-1.5, -1.5, 11, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [9.6, 4.8], [3.6, 4.8]], fill: false },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [9.6, 4.8], n: 1 },
          { t: 'tick', a: [9.6, 4.8], b: [3.6, 4.8], n: 1 },
          { t: 'tick', a: [3.6, 4.8], b: [0, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [9.6, 4.8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [3.6, 4.8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'a rhombus with a $70^\\circ$ angle',
        'a square',
        'a rectangle that is not a square',
        'an isosceles trapezoid',
      ],
      answer: 0,
      solution:
        'A counterexample must satisfy the “if” and defeat the “then”: the tilted rhombus drawn has four equal sides (the ticks), yet its $70^\\circ$ corner disqualifies it as a square — the converse falls ✓. Test the others against the same two-part job: a square triggers the hypothesis but also satisfies the conclusion, so it AGREES with the converse ✗; a non-square rectangle and an isosceles trapezoid both have unequal sides, so neither ever triggers the “if” ✗. (Choosing the square is PICKING A SHAPE THAT AGREES ✗; the other two are PICKING A SHAPE THAT NEVER TRIGGERS THE IF ✗ ✗.)',
    },
    {
      q: 'The converse “If the diagonals of a quadrilateral are perpendicular, then it is a rhombus” is FALSE. Which shape shows this?',
      fig: {
        view: [-4.5, -7.5, 4.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 4], [3, 0], [0, -6], [-3, 0]], fill: false },
          { t: 'seg', a: [0, 4], b: [0, -6], dash: true },
          { t: 'seg', a: [-3, 0], b: [3, 0], dash: true },
          { t: 'right', at: [0, 0], from: [3, 0], to: [0, 4] },
          { t: 'tick', a: [0, 4], b: [3, 0], n: 1 },
          { t: 'tick', a: [0, 4], b: [-3, 0], n: 1 },
          { t: 'tick', a: [3, 0], b: [0, -6], n: 2 },
          { t: 'tick', a: [-3, 0], b: [0, -6], n: 2 },
          { t: 'point', p: [0, 4], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'Q', dx: 12, dy: 0 },
          { t: 'point', p: [0, -6], label: 'R', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'S', dx: -12, dy: 0 },
        ],
      },
      choices: [
        'a square',
        'a rectangle with unequal sides',
        'a kite with two short sides and two long sides',
        'a parallelogram with a $120^\\circ$ angle',
      ],
      answer: 2,
      solution:
        'The kite drawn has perpendicular diagonals — its long diagonal is an axis of symmetry crossing the short one at $90^\\circ$ — yet its two short and two long sides (the ticks) rule out four equal sides, so it is no rhombus: hypothesis triggered, conclusion defeated ✓. The others fail the counterexample job: a square IS a rhombus, so it agrees with the converse ✗; a non-square rectangle and a tilted non-rhombus parallelogram both have diagonals that cross obliquely, so the “if” never fires ✗ ✗. (The square is PICKING A SHAPE THAT AGREES ✗; the rectangle and parallelogram are each PICKING A SHAPE THAT NEVER TRIGGERS THE IF ✗.)',
    },
    {
      q: 'The statement “If a quadrilateral is a parallelogram, then one of its diagonals cuts it into two congruent triangles” is true, but its converse is FALSE. Which shape defeats the converse?',
      fig: {
        view: [-5.5, -8.5, 5.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 5], [4, 0], [0, -7], [-4, 0]], fill: false },
          { t: 'seg', a: [0, 5], b: [0, -7], dash: true },
          { t: 'tick', a: [0, 5], b: [4, 0], n: 1 },
          { t: 'tick', a: [0, 5], b: [-4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [0, -7], n: 2 },
          { t: 'tick', a: [-4, 0], b: [0, -7], n: 2 },
          { t: 'point', p: [0, 5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [0, -7], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [-4, 0], label: 'D', dx: -12, dy: 0 },
        ],
      },
      choices: [
        'a rectangle',
        'a kite that is not a rhombus, cut along its axis of symmetry',
        'a parallelogram with a $110^\\circ$ angle',
        'a trapezoid with parallel sides $3$ and $8$',
      ],
      answer: 1,
      solution:
        'In the kite drawn, $AB = AD$ and $CB = CD$, and diagonal $\\overline{AC}$ is shared — so triangles $ABC$ and $ADC$ match side-for-side-for-side, congruent by SSS ✓. Yet the kite’s two different side lengths mean its opposite sides cannot be equal, so it is no parallelogram: the hypothesis fires and the conclusion dies ✓. The rectangle and the tilted parallelogram are parallelograms, so they AGREE with the converse ✗ ✗, and a trapezoid with unequal parallel sides has no diagonal producing congruent halves, so it never triggers the “if” ✗. (The first and third choices are PICKING A SHAPE THAT AGREES ✗; the trapezoid is PICKING A SHAPE THAT NEVER TRIGGERS THE IF ✗.)',
    },
  ],
  // s4 — always, sometimes, or never in the quadrilateral family.
  [
    {
      q: 'Always, sometimes, or never: a square is a rectangle.',
      fig: {
        view: [-1.5, -1.5, 7.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [6, 0], to: [0, 6] },
          { t: 'right', at: [6, 6], from: [6, 0], to: [0, 6] },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [6, 6], n: 1 },
          { t: 'tick', a: [6, 6], b: [0, 6], n: 1 },
          { t: 'tick', a: [0, 6], b: [0, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [6, 6], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 6], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'Never — a square’s equal sides disqualify it',
        'Sometimes — exactly when its diagonals are equal',
        'Always',
        'Only if its sides come in two different lengths',
      ],
      answer: 2,
      solution:
        'Run the definitions head-on: a rectangle asks for four right angles and nothing more, and every square carries four right angles — so the membership is automatic, with no counterexample possible ✓. A hunt confirms it: try to imagine a square that fails the rectangle test, and you would need a square missing a right angle, which does not exist ✓. (The “sometimes” choice is QUOTING A PROPERTY THE SHAPE ALREADY HAS — every square’s diagonals are equal, so that filter removes nothing ✗; “never” and the last choice are both INVENTING AN EXCLUSION RULE — no definition anywhere demands that a rectangle have unequal sides ✗ ✗.)',
    },
    {
      q: 'Under the inclusive definition of a trapezoid, always, sometimes, or never: a trapezoid is a rectangle.',
      fig: {
        view: [-1.5, -1.5, 10.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 4], [2, 4]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [6, 4], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [2, 4], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'Sometimes — a rectangle counts as a trapezoid, but most trapezoids are not rectangles',
        'Never — a trapezoid has exactly one pair of parallel sides',
        'Always',
        'Only if its two legs have equal length',
      ],
      answer: 0,
      solution:
        'Both directions of the hunt matter. A rectangle has a pair of parallel sides, so under the inclusive definition it qualifies as a trapezoid — “never” dies ✓. But the slanted trapezoid drawn has no right angle at all, so “always” dies too ✓ — the overlap is real and partial, which is precisely “sometimes.” (The “never” choice is USING THE EXCLUSIVE DEFINITION, which this course does not ✗; “always” is RUNNING THE ARROW BACKWARDS from the special shape to the general one ✗; the legs condition fails because an isosceles trapezoid has equal legs and still no right angle — TESTING THE WRONG FEATURE ✗.)',
    },
    {
      q: 'Always, sometimes, or never: a triangle is a quadrilateral.',
      fig: {
        view: [-1.5, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [2, 4]], fill: false },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'U', dx: 10, dy: 10 },
          { t: 'point', p: [2, 4], label: 'V', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'Sometimes — when it is equilateral',
        'Never',
        'Always',
        'Only if one of its angles is a right angle',
      ],
      answer: 1,
      solution:
        'A quadrilateral has four sides and four vertices by definition; a triangle has three of each, and no triangle can grow a fourth side without ceasing to be a triangle — so the answer is “never,” with no counterexample even conceivable ✓. The hunt is short: every triangle, equilateral or right or scalene, still counts to three ✓. (The “sometimes” and “only if” choices are DECORATING THE WRONG FEATURE — being equilateral or right-angled changes angles and sides’ lengths, never the count of sides ✗ ✗; “always” is IGNORING THE DEFINITION outright ✗.)',
    },
  ],
  // s5 — the extra condition that upgrades a parallelogram to a rhombus.
  [
    {
      q: 'A metalworker welds a parallelogram frame $ABCD$ and wants to certify it as a rhombus with one more measurement. Which check does the job?',
      choices: [
        'Its two diagonals have equal lengths',
        'One of its corners holds a right angle',
        'Its diagonals cut each other in half',
        'Its diagonals cross at right angles',
      ],
      answer: 3,
      solution:
        'In a parallelogram the diagonals already bisect each other at the center $O$; add perpendicularity and triangles $AOB$ and $COB$ become congruent by SAS ($AO = OC$, right angles at $O$, shared $\\overline{OB}$), so $AB = CB$ — two adjacent sides equal, and the parallelogram’s opposite-side matching spreads that equality to all four sides: a rhombus ✓. Hunt the failures: a long thin rectangle passes the equal-diagonals check and the right-angle check while staying far from a rhombus ✗ ✗. (Those first two choices are UPGRADING ALONG THE WRONG BRANCH — they certify a rectangle instead ✗; the bisecting check is QUOTING A PROPERTY THE SHAPE ALREADY HAS, true of every parallelogram ✗.)',
    },
    {
      q: 'Quadrilateral $PQRS$ is known to be a parallelogram. Which single additional fact would force it to be a rhombus?',
      choices: [
        'Its opposite angles are equal',
        'Diagonal $\\overline{PR}$ bisects angle $P$',
        'Its diagonals are congruent',
        'Its diagonals bisect each other',
      ],
      answer: 1,
      solution:
        'Let the diagonal $\\overline{PR}$ split angle $P$ evenly. Because $\\overline{PQ} \\parallel \\overline{SR}$, angle $QPR$ equals angle $SRP$ (alternate angles) — so angle $SPR$ equals angle $SRP$, making triangle $PSR$ isosceles with $SP = SR$. Two adjacent sides equal in a parallelogram means all four are: a rhombus ✓. Hunt the failures: every parallelogram already has equal opposite angles and bisecting diagonals, so those checks filter nothing ✗ ✗, and a $6 \\times 2$ rectangle has congruent diagonals without a hint of equal sides ✗. (The first and last choices are QUOTING A PROPERTY THE SHAPE ALREADY HAS ✗; the congruent-diagonals choice is UPGRADING ALONG THE WRONG BRANCH, toward the rectangle ✗.)',
    },
    {
      q: 'A drafting app labels quadrilateral $WXYZ$ a parallelogram. Which one extra measurement would let the app relabel it a rhombus?',
      choices: [
        'Two opposite sides have equal length',
        'Its consecutive angles add to $180^\\circ$',
        'Two sides that meet at a corner have equal length',
        'Its two diagonals are equal in length',
      ],
      answer: 2,
      solution:
        'A parallelogram already matches opposite sides in pairs, so the moment two sides sharing a corner also agree, the two pairs collapse into a single common length — four equal sides, a rhombus ✓. Confirm by counterexample hunt on the rest: opposite sides equal and consecutive angles supplementary hold for EVERY parallelogram, so a long thin one passes both while staying non-rhombic ✗ ✗, and an $8 \\times 3$ rectangle has equal diagonals with wildly unequal sides ✗. (The first two choices are QUOTING A PROPERTY THE SHAPE ALREADY HAS ✗; the equal-diagonals choice is UPGRADING ALONG THE WRONG BRANCH — that is the rectangle’s ticket, not the rhombus’s ✗.)',
    },
  ],
  // s6 — the extra condition that upgrades a rhombus to a square.
  [
    {
      q: 'A tile cutter has verified that tile $ABCD$ is a rhombus. Which one further check certifies it as a square?',
      fig: {
        view: [-6.5, -3.5, 6.5, 3.5],
        elems: [
          { t: 'poly', pts: [[-5, 0], [0, -2.5], [5, 0], [0, 2.5]], fill: false },
          { t: 'seg', a: [-5, 0], b: [5, 0], dash: true },
          { t: 'seg', a: [0, -2.5], b: [0, 2.5], dash: true },
          { t: 'tick', a: [-5, 0], b: [0, -2.5], n: 1 },
          { t: 'tick', a: [0, -2.5], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [0, 2.5], n: 1 },
          { t: 'tick', a: [0, 2.5], b: [-5, 0], n: 1 },
          { t: 'point', p: [-5, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -2.5], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [5, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 2.5], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'Its diagonals have equal lengths',
        'Its diagonals are perpendicular',
        'All four of its sides are equal',
        'Its diagonals bisect each other',
      ],
      answer: 0,
      solution:
        'A rhombus is a parallelogram, and a parallelogram whose diagonals are congruent is a rectangle — so a rhombus with equal diagonals is a rhombus AND a rectangle at once, which is exactly a square ✓. The flat tile drawn shows the danger: its long and short diagonals are plainly unequal, and it is no square ✓. Every other listed check is standard equipment on every rhombus — perpendicular diagonals, four equal sides, bisecting diagonals — so none of them can distinguish this tile from a square. (All three wrong choices are QUOTING A PROPERTY THE SHAPE ALREADY HAS ✗ ✗ ✗.)',
    },
    {
      q: 'Quadrilateral $EFGH$ is a rhombus. Which single additional fact would prove it is a square?',
      fig: {
        view: [-1.5, -1.5, 10.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [9, 3], [4, 3]], fill: false },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [9, 3], n: 1 },
          { t: 'tick', a: [9, 3], b: [4, 3], n: 1 },
          { t: 'tick', a: [4, 3], b: [0, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [9, 3], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [4, 3], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'Its opposite angles are equal',
        'Its diagonals cross at right angles',
        'One of its angles measures $90^\\circ$',
        'Its opposite sides are parallel',
      ],
      answer: 2,
      solution:
        'Give the rhombus one right angle and the parallelogram machinery does the rest: consecutive angles are supplementary, so the neighbors of the $90^\\circ$ corner are $90^\\circ$, and so is the corner opposite — four right angles on top of four equal sides is a square ✓. The tilted rhombus drawn fails only this one test, which is why the test has teeth ✓. The other choices are free with every rhombus: opposite angles equal and opposite sides parallel come with being a parallelogram, and perpendicular diagonals come with the equal sides. (All three are QUOTING A PROPERTY THE SHAPE ALREADY HAS ✗ ✗ ✗.)',
    },
    {
      q: 'A kite maker confirms frame $JKLM$ is a rhombus and wants the strongest label possible. Which one more measurement would justify the label “square”?',
      fig: {
        view: [-6.5, -4.5, 6.5, 4.5],
        elems: [
          { t: 'poly', pts: [[-5, 0], [0, -3], [5, 0], [0, 3]], fill: false },
          { t: 'tick', a: [-5, 0], b: [0, -3], n: 1 },
          { t: 'tick', a: [0, -3], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [0, 3], n: 1 },
          { t: 'tick', a: [0, 3], b: [-5, 0], n: 1 },
          { t: 'point', p: [-5, 0], label: 'J', dx: -12, dy: 0 },
          { t: 'point', p: [0, -3], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [5, 0], label: 'L', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'M', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'Its four sides are congruent',
        'Its diagonals cut each other in half',
        'Its diagonals meet at right angles',
        'Its two diagonals are congruent',
      ],
      answer: 3,
      solution:
        'Congruent diagonals are the missing credential: a rhombus is already a parallelogram, and a parallelogram with congruent diagonals is a rectangle — stack the two identities and the frame is a square ✓. A second route sees it in the triangles: the diagonals cut a rhombus into four right triangles with legs half of each diagonal, and equal diagonals make those triangles isosceles, forcing each corner of the rhombus to be split into two $45^\\circ$ halves — a $90^\\circ$ corner ✓. The frame drawn has one long and one short diagonal, so it stays a mere rhombus. (The other three checks — congruent sides, bisecting diagonals, perpendicular diagonals — pass on EVERY rhombus, each QUOTING A PROPERTY THE SHAPE ALREADY HAS ✗ ✗ ✗.)',
    },
  ],
  // s7 — spotting the true biconditional among one-way streets.
  [
    {
      q: 'Which of the following is a TRUE “if and only if” statement? ($Q$ stands for a quadrilateral.)',
      choices: [
        '$Q$ is a rectangle if and only if its diagonals are congruent.',
        'A rhombus is a square if and only if its diagonals are congruent.',
        '$Q$ is a square if and only if its diagonals are perpendicular.',
        '$Q$ is a rhombus if and only if its opposite sides are parallel.',
      ],
      answer: 1,
      solution:
        'A biconditional must survive in both directions. Starting from a RHOMBUS: a square’s diagonals are congruent (forward ✓), and in a rhombus the diagonals already bisect each other at right angles, so congruent diagonals make all four half-diagonals equal — the four sides then meet in four congruent right-angled triangles and every vertex angle becomes $90^\\circ$ (backward ✓) — the two-way ticket is genuine. Each rival dies in one direction: an isosceles trapezoid has congruent diagonals without being a rectangle ✗; a kite can have perpendicular diagonals without being a square ✗; and any tilted parallelogram has parallel opposite sides without equal side lengths ✗. (All three are DRESSING A ONE-WAY STREET AS TWO-WAY — the word “rhombus” in the true statement is the guard rail the others are missing ✗.)',
    },
    {
      q: 'Exactly one statement below is a TRUE biconditional. Which?',
      choices: [
        'A quadrilateral is a rhombus if and only if its diagonals are perpendicular.',
        'A quadrilateral is a parallelogram if and only if it has at least one pair of parallel sides.',
        'A quadrilateral is a square if and only if its diagonals bisect each other.',
        'A parallelogram is a rhombus if and only if its diagonals are perpendicular.',
      ],
      answer: 3,
      solution:
        'Check both arrows for the winner: a rhombus’s diagonals are always perpendicular (forward ✓), and in a parallelogram the diagonals bisect each other, so adding perpendicularity makes the four central triangles congruent by SAS and all four sides equal (backward ✓). The others each lose an arrow: a kite has perpendicular diagonals and unequal sides ✗; a trapezoid with just one parallel pair is not a parallelogram ✗; and every non-square parallelogram has bisecting diagonals without being a square ✗. (Each loser is DRESSING A ONE-WAY STREET AS TWO-WAY, and the first choice shows why the “parallelogram” qualifier in the last one earns its keep ✗ ✗ ✗.)',
    },
    {
      q: 'Which of the following “if and only if” claims is TRUE?',
      choices: [
        'A rectangle is a square if and only if two adjacent sides are congruent.',
        'A quadrilateral is a square if and only if it has four congruent sides.',
        'A parallelogram is a square if and only if its diagonals are congruent.',
        'A quadrilateral is a trapezoid if and only if it is a parallelogram.',
      ],
      answer: 0,
      solution:
        'Both directions of the first claim hold: a square’s sides are all equal, so any two adjacent ones are (forward ✓), and a RECTANGLE with two equal adjacent sides has all sides equal because opposite sides already match — a square (backward ✓). The rest each break one way: a tilted rhombus has four congruent sides and no right angle ✗; a $7 \\times 2$ rectangle is a parallelogram with congruent diagonals and is no square ✗; and under the inclusive definition every parallelogram is a trapezoid, but a right trapezoid with unequal parallel sides is no parallelogram ✗. (All three are DRESSING A ONE-WAY STREET AS TWO-WAY — one true arrow does not buy the return trip ✗ ✗ ✗.)',
    },
  ],
  // s8 — always/sometimes/never under the inclusive trapezoid definition.
  [
    {
      q: 'Under the inclusive definition of a trapezoid, always, sometimes, or never: a parallelogram is a trapezoid.',
      choices: [
        'Always — a parallelogram’s parallel sides already satisfy the trapezoid requirement',
        'Never — a trapezoid must have exactly one pair of parallel sides',
        'Sometimes — only when its angles are right angles',
        'Only when its diagonals are perpendicular',
      ],
      answer: 0,
      solution:
        'The inclusive definition sets the bar at “at least one pair of parallel sides,” and a parallelogram clears it with a pair to spare — every parallelogram qualifies, no exceptions to hunt ✓. The direct route agrees with the family tree: the arrow runs parallelogram $\\rightarrow$ trapezoid, and arrows in the tree mean “is always a” ✓. (The “never” choice is USING THE EXCLUSIVE DEFINITION, which demands exactly one pair — not the definition in force here ✗; the right-angle and perpendicular-diagonal conditions are DECORATING THE WRONG FEATURE, since parallel sides are what a trapezoid checks, not angles or diagonals ✗ ✗.)',
    },
    {
      q: 'Under the inclusive definition of a trapezoid, always, sometimes, or never: a rectangle is a trapezoid.',
      choices: [
        'Never — a rectangle’s sides meet at right angles',
        'Sometimes — only when it is not a square',
        'Always — its two pairs of parallel sides more than cover the requirement',
        'Only if its diagonals bisect each other',
      ],
      answer: 2,
      solution:
        'Chain the hierarchy: every rectangle is a parallelogram, and under the inclusive definition every parallelogram is a trapezoid — two arrows both pointing the right way, so the answer is “always” ✓. Directly: a trapezoid asks for at least one pair of parallel sides, and a rectangle offers two ✓. (The “never” choice is DECORATING THE WRONG FEATURE — right angles are no obstacle to having parallel sides ✗; the “sometimes” choice is INVENTING AN EXCLUSION RULE against squares that no definition contains ✗; and the diagonal condition is QUOTING A PROPERTY THE SHAPE ALREADY HAS, since every rectangle’s diagonals bisect each other ✗.)',
    },
    {
      q: 'Under the inclusive definition of a trapezoid, always, sometimes, or never: a trapezoid is a rhombus.',
      choices: [
        'Always',
        'Never',
        'Only when its diagonals are equal',
        'Sometimes — every rhombus counts as a trapezoid, but most trapezoids do not have four equal sides',
      ],
      answer: 3,
      solution:
        'Hunt in both directions. A right trapezoid with parallel sides $3$ and $8$ has unequal sides, so “always” fails ✓; a rhombus is a parallelogram, hence inclusively a trapezoid, so the overlap is nonempty and “never” fails too ✓ — the survivors meet at “sometimes.” (The “always” choice is RUNNING THE ARROW BACKWARDS from trapezoid up to rhombus ✗; “never” is FORGETTING THE INCLUSIVE OVERLAP that every rhombus provides ✗; and the equal-diagonals condition is TESTING THE WRONG FEATURE — a rhombus with equal diagonals is a square, and a typical rhombus has unequal diagonals, so that filter selects the wrong shapes entirely ✗.)',
    },
  ],
  // s9 — bisecting, perpendicular, unequal diagonals: the most specific name.
  [
    {
      q: 'Surveyors staking out plaza $ABCD$ find that its diagonals cut each other in half and cross at right angles, measuring $18$ m and $12$ m. What is the most specific name for the plaza?',
      fig: {
        w: 400,
        view: [-10.5, -7.5, 10.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-9, 0], [0, -6], [9, 0], [0, 6]], fill: false },
          { t: 'seg', a: [-9, 0], b: [9, 0], dash: true },
          { t: 'seg', a: [0, -6], b: [0, 6], dash: true },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 6] },
          { t: 'tick', a: [-9, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [9, 0], n: 1 },
          { t: 'tick', a: [0, -6], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [0, 6], n: 2 },
          { t: 'label', p: [-4.5, 0], text: '18', dx: 0, dy: 16 },
          { t: 'label', p: [0, 3], text: '12', dx: 14, dy: 0 },
          { t: 'point', p: [-9, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -6], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [9, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 6], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'a square',
        'a rectangle that is not a square',
        'a rhombus, though not necessarily a square',
        'a kite that is not a parallelogram',
      ],
      answer: 2,
      solution:
        'Climb the ladder one rung at a time: bisecting diagonals make $ABCD$ a parallelogram, and perpendicular bisecting diagonals upgrade it to a rhombus ✓. The square would demand one more credential — equal diagonals — and $18 \\ne 12$ refuses it ✓. A coordinate check agrees: with half-diagonals $9$ and $6$, every side is $\\sqrt{9^2 + 6^2} = \\sqrt{117}$, four equal sides with no right angle at the corners ✓. (The square is IGNORING THE UNEQUAL DIAGONALS ✗; the rectangle is UPGRADING ALONG THE WRONG BRANCH, since rectangles need equal diagonals, not perpendicular ones ✗; the kite label is DROPPING THE BISECTING CLUE, which already forces a parallelogram ✗.)',
    },
    {
      q: 'A jewelry designer sketches pendant $PQRS$: its diagonals bisect each other, meet at $90^\\circ$, and measure $14$ mm and $10$ mm. What is the most specific name for the pendant’s shape?',
      fig: {
        view: [-8.5, -6.5, 8.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-7, 0], [0, -5], [7, 0], [0, 5]], fill: false },
          { t: 'seg', a: [-7, 0], b: [7, 0], dash: true },
          { t: 'seg', a: [0, -5], b: [0, 5], dash: true },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 5] },
          { t: 'tick', a: [-7, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [7, 0], n: 1 },
          { t: 'tick', a: [0, -5], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [0, 5], n: 2 },
          { t: 'label', p: [-3.5, 0], text: '14', dx: 0, dy: 16 },
          { t: 'label', p: [0, 2.5], text: '10', dx: 14, dy: 0 },
          { t: 'point', p: [-7, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [0, -5], label: 'Q', dx: 0, dy: 14 },
          { t: 'point', p: [7, 0], label: 'R', dx: 12, dy: 0 },
          { t: 'point', p: [0, 5], label: 'S', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'a square',
        'a rhombus that need not be a square',
        'a rectangle',
        'a kite that is not a parallelogram',
      ],
      answer: 1,
      solution:
        'Bisecting diagonals certify a parallelogram; adding perpendicularity certifies a rhombus — and there the evidence stops, because the square’s remaining requirement is EQUAL diagonals, which $14$ versus $10$ denies ✓. Verify with the drawn coordinates: half-diagonals $7$ and $5$ give four sides of $\\sqrt{7^2 + 5^2} = \\sqrt{74}$ each, equal all around, while the unequal diagonals keep the corners away from $90^\\circ$ ✓. (Choosing the square is IGNORING THE UNEQUAL DIAGONALS ✗; the rectangle is UPGRADING ALONG THE WRONG BRANCH — its ticket is equal diagonals, the one thing this shape lacks ✗; the kite answer is DROPPING THE BISECTING CLUE that already locks in a parallelogram ✗.)',
    },
    {
      q: 'A stained-glass pane $WXYZ$ has diagonals that bisect each other and are perpendicular, with lengths $22$ cm and $8$ cm. What is the most specific name for the pane?',
      fig: {
        w: 440,
        view: [-12.5, -5.5, 12.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [0, -4], [11, 0], [0, 4]], fill: false },
          { t: 'seg', a: [-11, 0], b: [11, 0], dash: true },
          { t: 'seg', a: [0, -4], b: [0, 4], dash: true },
          { t: 'right', at: [0, 0], from: [11, 0], to: [0, 4] },
          { t: 'tick', a: [-11, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [11, 0], n: 1 },
          { t: 'tick', a: [0, -4], b: [0, 0], n: 2 },
          { t: 'tick', a: [0, 0], b: [0, 4], n: 2 },
          { t: 'label', p: [-5.5, 0], text: '22', dx: 0, dy: 16 },
          { t: 'label', p: [0, 2], text: '8', dx: 12, dy: 0 },
          { t: 'point', p: [-11, 0], label: 'W', dx: -12, dy: 0 },
          { t: 'point', p: [0, -4], label: 'X', dx: 0, dy: 14 },
          { t: 'point', p: [11, 0], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [0, 4], label: 'Z', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'a rhombus — and nothing forces it to be a square',
        'a square',
        'a rectangle',
        'an isosceles trapezoid',
      ],
      answer: 0,
      solution:
        'Two clues, two upgrades: diagonals that bisect each other make the pane a parallelogram, and perpendicular diagonals lift it to a rhombus ✓. The extreme mismatch $22$ versus $8$ slams the door on the square, whose diagonals must agree ✓. The coordinates confirm a very flat rhombus: half-diagonals $11$ and $4$ give four equal sides of $\\sqrt{11^2 + 4^2} = \\sqrt{137}$ and sharply unequal corner angles ✓. (The square is IGNORING THE UNEQUAL DIAGONALS ✗; the rectangle is UPGRADING ALONG THE WRONG BRANCH, needing equal rather than perpendicular diagonals ✗; the isosceles trapezoid is USING ONLY HALF THE EVIDENCE — it has equal diagonals, which this pane does not even have ✗.)',
    },
  ],
  // s10 — bisecting, equal, non-perpendicular diagonals: the most specific name.
  [
    {
      q: 'A frame shop tests frame $ABCD$: the two diagonals cut each other in half and each measures $16$ inches, but they do not cross at right angles. What is the most specific name for the frame?',
      fig: {
        view: [-1.5, -1.5, 14.5, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [12.8, 0], [12.8, 9.6], [0, 9.6]], fill: false },
          { t: 'seg', a: [0, 0], b: [12.8, 9.6], dash: true },
          { t: 'seg', a: [12.8, 0], b: [0, 9.6], dash: true },
          { t: 'tick', a: [0, 0], b: [6.4, 4.8], n: 1 },
          { t: 'tick', a: [6.4, 4.8], b: [12.8, 9.6], n: 1 },
          { t: 'tick', a: [12.8, 0], b: [6.4, 4.8], n: 1 },
          { t: 'tick', a: [6.4, 4.8], b: [0, 9.6], n: 1 },
          { t: 'label', p: [3.2, 2.4], text: '16', dx: 12, dy: 2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12.8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12.8, 9.6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 9.6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'a square',
        'a rhombus',
        'an isosceles trapezoid that is not a parallelogram',
        'a rectangle, though not necessarily a square',
      ],
      answer: 3,
      solution:
        'Bisecting diagonals put the frame in the parallelogram club, and equal diagonals promote a parallelogram to a rectangle ✓. The square would need perpendicular diagonals on top of that, which the shop explicitly rules out ✓. A second route through the center: all four corners sit half a diagonal — $8$ inches — from the crossing point, so they lie on one circle centered there, the signature of a rectangle ✓. (The square is DEMANDING A CREDENTIAL THE FRAME REFUSED, perpendicular diagonals ✗; the rhombus is UPGRADING ALONG THE WRONG BRANCH, since its ticket is perpendicularity, not equality ✗; the isosceles trapezoid is USING ONLY HALF THE EVIDENCE — equal diagonals alone — and DROPPING THE BISECTING CLUE ✗.)',
    },
    {
      q: 'A groundskeeper checks plot $EFGH$: its diagonals bisect each other, each is $20$ m long, and they meet at an angle that is not $90^\\circ$. What is the most specific name for the plot?',
      fig: {
        view: [-1.5, -1.5, 17.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 12], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [16, 12], dash: true },
          { t: 'seg', a: [16, 0], b: [0, 12], dash: true },
          { t: 'tick', a: [0, 0], b: [8, 6], n: 1 },
          { t: 'tick', a: [8, 6], b: [16, 12], n: 1 },
          { t: 'tick', a: [16, 0], b: [8, 6], n: 1 },
          { t: 'tick', a: [8, 6], b: [0, 12], n: 1 },
          { t: 'label', p: [4, 3], text: '20', dx: 12, dy: 2 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [16, 12], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'a rectangle that need not be a square',
        'a square',
        'a rhombus that is not a square',
        'an isosceles trapezoid',
      ],
      answer: 0,
      solution:
        'Two facts, two rungs: diagonals bisecting each other give a parallelogram, and equal diagonals upgrade it to a rectangle ✓ — while the non-right crossing angle blocks the final rung, since a square’s diagonals must be perpendicular ✓. The circle route confirms it: each corner lies $10$ m from the crossing point, so all four corners share one circle centered there, and a parallelogram inscribed that way must have right angles at its corners ✓. (The square is DEMANDING A CREDENTIAL THE PLOT REFUSED ✗; the rhombus is UPGRADING ALONG THE WRONG BRANCH — perpendicular diagonals are its price, and this plot declined ✗; the isosceles trapezoid is USING ONLY HALF THE EVIDENCE and DROPPING THE BISECTING CLUE ✗.)',
    },
    {
      q: 'A carpenter measures tabletop $JKLM$: the diagonals cut each other in half, each spans $26$ cm, and they cross obliquely — not at right angles. What is the most specific name for the tabletop?',
      fig: {
        w: 440,
        view: [-1.5, -2, 25.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 10], [0, 10]], fill: false },
          { t: 'seg', a: [0, 0], b: [24, 10], dash: true },
          { t: 'seg', a: [24, 0], b: [0, 10], dash: true },
          { t: 'tick', a: [0, 0], b: [12, 5], n: 1 },
          { t: 'tick', a: [12, 5], b: [24, 10], n: 1 },
          { t: 'tick', a: [24, 0], b: [12, 5], n: 1 },
          { t: 'tick', a: [12, 5], b: [0, 10], n: 1 },
          { t: 'label', p: [6, 2.5], text: '26', dx: 12, dy: 2 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [24, 10], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0, 10], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: [
        'a rhombus',
        'a square',
        'a rectangle — and nothing forces it to be a square',
        'a kite that is not a parallelogram',
      ],
      answer: 2,
      solution:
        'The bisecting diagonals make the tabletop a parallelogram; their equal lengths lift it to a rectangle; and the oblique crossing withholds the perpendicularity a square would also need — so “rectangle” is as specific as the evidence allows ✓. The center-circle route agrees: every corner sits $13$ cm from the crossing point, so the four corners ride one circle centered there, and only rectangles among parallelograms do that ✓. (The rhombus is UPGRADING ALONG THE WRONG BRANCH — it buys in with perpendicular diagonals, which this top lacks ✗; the square is DEMANDING A CREDENTIAL THE TABLETOP REFUSED ✗; the kite is DROPPING THE BISECTING CLUE, which already guarantees a parallelogram ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.7': s87,
  },
}
