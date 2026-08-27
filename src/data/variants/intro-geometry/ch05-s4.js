// Introduction to Geometry chapter 5 — variations for section 5.4
// (SSS Similarity). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice, by two routes that do not share
//    arithmetic: the sorted-ratio test against rebuilding the whole triple by
//    scaling, a scale factor against reducing both triples to the same
//    simplest form, and a scaled perimeter against summing the three scaled
//    sides one by one. The two routes must agree before a key is written down.
//  - Every invented triple — keys AND distractors — was checked against the
//    triangle inequality, and each distractor triple in a "which is similar"
//    slot fails on exactly one of the three ratios.
//  - Figures are built from their own numbers: apex coordinates come from
//    intersecting the two circles the side lengths define, so a printed length
//    really is the length drawn, and similar pairs are drawn as true scaled
//    copies of one another.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution. The traps running through this section: DEMANDING ANGLE
//    INFORMATION, SCALING THE ANGLES, CONFUSING SIMILARITY WITH CONGRUENCE,
//    STOPPING AT TWO SIDES, TESTING ONLY THE PERIMETER, MIXING ONE SIDE WITH
//    ONE ANGLE, DEMANDING EQUAL SIDES, SQUARING THE FACTOR, SUBTRACTING
//    INSTEAD OF DIVIDING, INVERTING THE FACTOR, STOPPING AFTER TWO RATIOS,
//    USING ONLY ONE RATIO, SETTLING FOR TWO MATCHING RATIOS, DIVIDING TWO
//    SIDES OF THE SAME TRIANGLE, MATCHING THE SHARED SIDE TO ITSELF, PAIRING
//    THE PRINTED ORDER, FORGETTING TO SORT, SORTING ONLY ONE LIST, PRESERVING
//    THE DIFFERENCE, COPYING THE EQUAL LEG, TRUNCATING THE SCALE FACTOR,
//    MULTIPLYING THE BASE BY ITSELF, SCALING THE LEG AGAIN, MATCHING THE NEW
//    SIDE TO THE MIDDLE SIDE, MATCHING THE NEW SIDE TO THE LONGEST SIDE,
//    ANSWERING THE SMALL PERIMETER, and MATCHING THE 12 TO ITSELF.
//  - No two choices inside an item share a value.

const s54 = [
  // s1 — what SSS Similarity says, three conceptual dressings.
  [
    {
      q: 'A jeweler measures all three sides of two triangular pendants and finds that every side of the larger is exactly $1.5$ times the matching side of the smaller. She has measured no angles at all. What may she conclude?',
      choices: [
        'Nothing — deciding similarity always requires at least one angle',
        'The larger pendant’s angles are each $1.5$ times the smaller pendant’s angles',
        'The pendants are similar, so all three pairs of matching angles are equal',
        'The pendants are congruent',
      ],
      answer: 2,
      solution:
        'One common ratio across all three side pairs is exactly the hypothesis of SSS Similarity, so the pendants are similar and every pair of corresponding angles matches ✓. Check a second, independent way by thinking about what three sides determine: three lengths pin down a triangle’s shape completely, so the larger pendant is forced to be a scaled copy of the smaller — and scaling a shape never turns its corners, so each angle survives unchanged ✓. (The first choice is DEMANDING ANGLE INFORMATION, which SSS Similarity was built to avoid ✗; the $1.5$-times-the-angles choice is SCALING THE ANGLES — impossible, since the three enlarged angles would then total $1.5 \\times 180^\\circ = 270^\\circ$ ✗; "congruent" is CONFUSING SIMILARITY WITH CONGRUENCE, which needs ratio $1$, not $1.5$ ✗.)',
    },
    {
      q: 'You may request one list of measurements for each of two triangles, and then you must decide whether the triangles are similar. Which list is guaranteed to be enough on its own?',
      choices: [
        'the lengths of two sides of each triangle',
        'the lengths of all three sides of each triangle',
        'the perimeter of each triangle',
        'one side length and one angle of each triangle',
      ],
      answer: 1,
      solution:
        'All three sides of each triangle settle the question every time: sort each triple, divide matching entries, and SSS Similarity says the triangles are similar exactly when the three quotients agree ✓. Check a second, independent way by breaking each rival list with a concrete pair. Two sides each: triangles with sides $4, 4, 4$ and $8, 8, 2$ match on two doubled sides yet have completely different shapes. Perimeters: sides $3, 4, 5$ and $4, 4, 4$ both give perimeter $12$, but one is right and one is equilateral. One side and one angle: a tall spike and a low wedge can share both. Only the full three-side list never lies ✓. (Two sides is STOPPING AT TWO SIDES — without the included angle, two ratios prove nothing ✗; perimeter is TESTING ONLY THE PERIMETER, one number that many shapes share ✗; the last is MIXING ONE SIDE WITH ONE ANGLE, which pins down neither shape nor size ✗.)',
    },
    {
      q: 'Dividing each side of one triangular tile by the matching side of a second tile gives $\\frac{7}{4}$ all three times. Which statement is true?',
      choices: [
        'The tiles are congruent',
        'The tiles are similar only if a pair of equal angles is also found',
        'The tiles cannot be similar, because their sides are not equal',
        'The tiles are similar, and every pair of corresponding angles is equal',
      ],
      answer: 3,
      solution:
        'Three matching quotients of $\\frac{7}{4}$ is precisely SSS Similarity, so the tiles are similar — and similar triangles carry equal corresponding angles automatically ✓. Check a second, independent way by building rather than quoting: shrink the first tile by the factor $\\frac{4}{7}$. Its three sides then equal the second tile’s three sides exactly, and two triangles with identical side triples are copies of one another, so the original pair differ by nothing but size ✓. (The first choice is CONFUSING SIMILARITY WITH CONGRUENCE — congruence would need every quotient to be $1$ ✗; the second is DEMANDING ANGLE INFORMATION that the three side ratios already guarantee ✗; the third is DEMANDING EQUAL SIDES, which is the test for congruence, not similarity ✗.)',
    },
  ],
  // s2 — two triangles with all sides given: similar or not, and the factor.
  [
    {
      q: 'Two sail panels are cut as the triangles shown, with sides $5, 12, 13$ and $10, 24, 26$. Are the panels similar?',
      fig: {
        view: [-1.5, -2, 39.5, 11.5],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 10, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '13', dx: -8, dy: -8 },
          { t: 'poly', pts: [[14, 0], [38, 0], [38, 10]], fill: false },
          { t: 'label', p: [26, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [38, 5], text: '10', dx: 10, dy: 0 },
          { t: 'label', p: [26, 5], text: '26', dx: -8, dy: -8 },
        ],
      },
      choices: [
        'similar, with scale factor $2$',
        'not similar',
        'similar, with scale factor $4$',
        'similar only if an angle is also measured',
      ],
      answer: 0,
      solution:
        'Divide matching sides: $\\frac{10}{5} = \\frac{24}{12} = \\frac{26}{13} = 2$. All three quotients agree, so the panels are similar by SSS with scale factor $2$ ✓. Check a second, independent way by reducing instead of dividing across: $(10, 24, 26)$ has common factor $2$ and reduces to $(5, 12, 13)$ — the first triple exactly, so the big panel is a doubled copy ✓. Since $5^2 + 12^2 = 169 = 13^2$, both panels are right triangles, as the figure shows. ("Not similar" is DEMANDING EQUAL SIDES, the congruence test ✗; $4$ is SQUARING THE FACTOR — that is what happens to area, not to sides ✗; the angle choice is DEMANDING ANGLE INFORMATION that three side ratios make unnecessary ✗.)',
    },
    {
      q: 'The two garden plots shown are triangles with sides $7, 8, 9$ and $10.5, 12, 13.5$. Are the plots similar?',
      fig: {
        view: [-1.5, -2, 23.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [2, 6.7082]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [1, 3.3541], text: '7', dx: -10, dy: 0 },
          { t: 'label', p: [5, 3.3541], text: '9', dx: 12, dy: -4 },
          { t: 'poly', pts: [[10, 0], [22, 0], [13, 10.0623]], fill: false },
          { t: 'label', p: [16, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [11.5, 5.0312], text: '10.5', dx: -16, dy: 0 },
          { t: 'label', p: [17.5, 5.0312], text: '13.5', dx: 16, dy: -4 },
        ],
      },
      choices: [
        'not similar',
        'similar, with scale factor $\\frac{2}{3}$',
        'similar, with scale factor $\\frac{3}{2}$',
        'similar only if an angle is also measured',
      ],
      answer: 2,
      solution:
        'Both triples are already sorted, so divide matching entries: $\\frac{10.5}{7} = \\frac{12}{8} = \\frac{13.5}{9} = \\frac{3}{2}$. Three equal quotients — similar by SSS with scale factor $\\frac{3}{2}$ ✓. Check a second, independent way by building the big plot from the small one: $7 \\times \\frac{3}{2} = 10.5$, $8 \\times \\frac{3}{2} = 12$, $9 \\times \\frac{3}{2} = 13.5$ — the second triple appears exactly, side by side ✓. ("Not similar" is what SUBTRACTING INSTEAD OF DIVIDING suggests — the gaps $3.5, 4, 4.5$ are unequal, but similarity is about ratios, and gaps grow with size even in perfect scale copies ✗; $\\frac{2}{3}$ is INVERTING THE FACTOR, the shrink from large to small ✗; the angle choice is DEMANDING ANGLE INFORMATION ✗.)',
    },
    {
      q: 'Two ramp braces are the triangles shown, with sides $4, 6, 7$ and $6, 9, 10$. Are the braces similar?',
      fig: {
        view: [-1.5, -2, 20.5, 6.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [2.0714, 3.4218]], fill: false },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [1.0357, 1.7109], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [4.5357, 1.7109], text: '6', dx: 10, dy: -4 },
          { t: 'poly', pts: [[9, 0], [19, 0], [11.75, 5.3326]], fill: false },
          { t: 'label', p: [14, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [10.375, 2.6663], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [15.375, 2.6663], text: '9', dx: 10, dy: -4 },
        ],
      },
      choices: [
        'similar, with scale factor $\\frac{3}{2}$',
        'not similar',
        'similar, with scale factor $\\frac{10}{7}$',
        'similar only if an angle is also measured',
      ],
      answer: 1,
      solution:
        'Divide sorted matching sides: $\\frac{6}{4} = \\frac{3}{2}$ and $\\frac{9}{6} = \\frac{3}{2}$, but $\\frac{10}{7} \\neq \\frac{3}{2}$. One broken quotient is enough — the braces are NOT similar ✗→✓. Check a second, independent way by building what a true scale copy would be: $(4, 6, 7) \\times \\frac{3}{2} = (6, 9, 10.5)$, and the second brace’s longest side is $10$, half a unit short of the $10.5$ a scale copy demands ✓. (The $\\frac{3}{2}$ choice is STOPPING AFTER TWO RATIOS — two matches out of three prove nothing ✗; $\\frac{10}{7}$ is USING ONLY ONE RATIO, the longest pair alone ✗; the angle choice misreads SSS, which needs no angle to give its verdict either way — DEMANDING ANGLE INFORMATION ✗.)',
    },
  ],
  // s3 — a triangle is shown; pick the similar triple.
  [
    {
      q: 'The triangular flower bed shown has sides $4$, $6$, and $8$. Which side triple builds a bed similar to it?',
      fig: {
        view: [-1.5, -2, 9.5, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [2.75, 2.9047]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [1.375, 1.4524], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [5.375, 1.4524], text: '6', dx: 10, dy: -4 },
        ],
      },
      choices: ['$6, 10, 12$', '$6, 9, 12$', '$5, 9, 12$', '$6, 9, 13$'],
      answer: 1,
      solution:
        'Scale $(4, 6, 8)$ by $\\frac{3}{2}$: $4 \\times \\frac{3}{2} = 6$, $6 \\times \\frac{3}{2} = 9$, $8 \\times \\frac{3}{2} = 12$ — exactly $(6, 9, 12)$ ✓. Check a second, independent way by reducing: $(6, 9, 12)$ divides by $3$ to $(2, 3, 4)$, and $(4, 6, 8)$ divides by $2$ to $(2, 3, 4)$ — the same simplest triple, so the shapes match ✓. Each rival fails on exactly one entry: $(6, 10, 12)$ has $\\frac{10}{6} \\neq \\frac{3}{2}$ in the middle ✗, $(5, 9, 12)$ has $\\frac{5}{4} \\neq \\frac{3}{2}$ up front ✗, and $(6, 9, 13)$ has $\\frac{13}{8} \\neq \\frac{3}{2}$ at the end ✗ — every one of them is SETTLING FOR TWO MATCHING RATIOS, and two out of three is not similarity.',
    },
    {
      q: 'A sandbox is the triangle shown, with sides $5$, $6$, and $9$. Which triple of lengths makes a sandbox similar to this one?',
      fig: {
        view: [-1.5, -2, 10.5, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [3.8889, 3.1427]], fill: false },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [1.9445, 1.5714], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [6.4445, 1.5714], text: '6', dx: 10, dy: -4 },
        ],
      },
      choices: ['$10, 12, 16$', '$11, 12, 18$', '$10, 13, 18$', '$10, 12, 18$'],
      answer: 3,
      solution:
        'Doubling every side of $(5, 6, 9)$ gives $(10, 12, 18)$ on the nose, so the ratios are $2, 2, 2$ and the sandboxes are similar by SSS ✓. Check a second, independent way in reverse: halve the candidate, $(10, 12, 18) \\div 2 = (5, 6, 9)$, which is the printed triangle itself ✓. The rivals each break in exactly one place: $(10, 12, 16)$ ends with $\\frac{16}{9} \\neq 2$ ✗, $(11, 12, 18)$ opens with $\\frac{11}{5} \\neq 2$ ✗, and $(10, 13, 18)$ carries $\\frac{13}{6} \\neq 2$ in the middle ✗. All three are SETTLING FOR TWO MATCHING RATIOS — SSS demands all three.',
    },
    {
      q: 'The triangular window shown has sides $6$, $7$, and $8$. A glazier wants a similar window. Which side triple should she order?',
      fig: {
        view: [-1.5, -2, 9.5, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [3.1875, 5.0833]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [1.5938, 2.5417], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [5.5938, 2.5417], text: '7', dx: 10, dy: -4 },
        ],
      },
      choices: ['$9, 11, 12$', '$9, 10.5, 13$', '$9, 10.5, 12$', '$8, 10.5, 12$'],
      answer: 2,
      solution:
        'Scale $(6, 7, 8)$ by $\\frac{3}{2}$: $6 \\to 9$, $7 \\to 10.5$, $8 \\to 12$, which is exactly $(9, 10.5, 12)$ ✓. Check a second, independent way with the quotient test: $\\frac{9}{6} = \\frac{10.5}{7} = \\frac{12}{8} = \\frac{3}{2}$, three agreements, similar by SSS ✓. Each rival misses on a single side: $(9, 11, 12)$ has $\\frac{11}{7} \\neq \\frac{3}{2}$ in the middle ✗, $(9, 10.5, 13)$ has $\\frac{13}{8} \\neq \\frac{3}{2}$ at the end ✗, and $(8, 10.5, 12)$ has $\\frac{8}{6} \\neq \\frac{3}{2}$ up front ✗ — every one is SETTLING FOR TWO MATCHING RATIOS.',
    },
  ],
  // s4 — two right triangles; scale factor from smaller to larger.
  [
    {
      q: 'The two right triangles shown have sides $5, 12, 13$ and $12.5, 30, 32.5$. What number multiplies every side of the smaller triangle to produce the larger?',
      fig: {
        view: [-1.5, -2, 46.5, 14],
        w: 420,
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 10, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '13', dx: -8, dy: -8 },
          { t: 'poly', pts: [[14, 0], [44, 0], [44, 12.5]], fill: false },
          { t: 'label', p: [29, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [44, 6.25], text: '12.5', dx: 16, dy: 0 },
          { t: 'label', p: [29, 6.25], text: '32.5', dx: -12, dy: -8 },
        ],
      },
      choices: ['$\\frac{5}{2}$', '$\\frac{2}{5}$', '$\\frac{13}{5}$', '$\\frac{25}{4}$'],
      answer: 0,
      solution:
        'Match sorted sides: $\\frac{12.5}{5} = \\frac{30}{12} = \\frac{32.5}{13} = \\frac{5}{2}$ — every side of the large triangle is $\\frac{5}{2}$ times its partner ✓. Check a second, independent way by rebuilding the large triple: $5 \\times \\frac{5}{2} = 12.5$, $12 \\times \\frac{5}{2} = 30$, $13 \\times \\frac{5}{2} = 32.5$, which is the printed large triangle exactly ✓. ($\\frac{2}{5}$ is INVERTING THE FACTOR — that shrinks the large one back down ✗; $\\frac{13}{5}$ is DIVIDING TWO SIDES OF THE SAME TRIANGLE, the small hypotenuse by the small leg ✗; $\\frac{25}{4}$ is SQUARING THE FACTOR, the ratio of the areas rather than the sides ✗.)',
    },
    {
      q: 'A carpenter cuts the two right-triangle gussets shown, with sides $6, 8, 10$ and $21, 28, 35$. What is the enlargement factor from the small gusset to the large one?',
      fig: {
        view: [-1.5, -2, 40.5, 22.5],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 6]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 3], text: '6', dx: 10, dy: 0 },
          { t: 'label', p: [4, 3], text: '10', dx: -8, dy: -8 },
          { t: 'poly', pts: [[10, 0], [38, 0], [38, 21]], fill: false },
          { t: 'label', p: [24, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [38, 10.5], text: '21', dx: 12, dy: 0 },
          { t: 'label', p: [24, 10.5], text: '35', dx: -10, dy: -8 },
        ],
      },
      choices: ['$\\frac{2}{7}$', '$\\frac{49}{4}$', '$\\frac{7}{2}$', '$\\frac{5}{3}$'],
      answer: 2,
      solution:
        'Divide matching sorted sides: $\\frac{21}{6} = \\frac{28}{8} = \\frac{35}{10} = \\frac{7}{2}$ ✓. Check a second, independent way through the simplest form: $(6, 8, 10) = 2 \\times (3, 4, 5)$ and $(21, 28, 35) = 7 \\times (3, 4, 5)$ — both are blowups of the same $(3, 4, 5)$ core, one by $2$ and one by $7$, so the step from small to large is $\\frac{7}{2}$ ✓. ($\\frac{2}{7}$ is INVERTING THE FACTOR ✗; $\\frac{5}{3}$ is DIVIDING TWO SIDES OF THE SAME TRIANGLE, $\\frac{10}{6}$ inside the small gusset ✗; $\\frac{49}{4}$ is SQUARING THE FACTOR — the area grows by that much, the sides do not ✗.)',
    },
    {
      q: 'The two right triangles shown have sides $12, 16, 20$ and $15, 20, 25$. By what factor do the sides of the first stretch to give the second?',
      fig: {
        view: [-1.5, -2, 40.5, 16.5],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 12]], fill: false },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [16, 6], text: '12', dx: 12, dy: 0 },
          { t: 'label', p: [8, 6], text: '20', dx: -8, dy: -8 },
          { t: 'poly', pts: [[18, 0], [38, 0], [38, 15]], fill: false },
          { t: 'label', p: [28, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [38, 7.5], text: '15', dx: 12, dy: 0 },
          { t: 'label', p: [28, 7.5], text: '25', dx: -8, dy: -8 },
        ],
      },
      choices: ['$\\frac{4}{5}$', '$\\frac{25}{16}$', '$1$', '$\\frac{5}{4}$'],
      answer: 3,
      solution:
        'Pair sorted sides and divide: $\\frac{15}{12} = \\frac{20}{16} = \\frac{25}{20} = \\frac{5}{4}$ ✓. Check a second, independent way by reducing both triples: $(12, 16, 20) = 4 \\times (3, 4, 5)$ and $(15, 20, 25) = 5 \\times (3, 4, 5)$, so passing from the $4$-fold copy to the $5$-fold copy multiplies every side by $\\frac{5}{4}$ ✓. Beware the $20$ that appears in both lists: it is the first triangle’s LONGEST side but only the second triangle’s middle side, so it pairs with $25$, not with itself. (The choice $1$ is MATCHING THE SHARED SIDE TO ITSELF ✗; $\\frac{4}{5}$ is INVERTING THE FACTOR ✗; $\\frac{25}{16}$ is SQUARING THE FACTOR ✗.)',
    },
  ],
  // s5 — scrambled side lists; factor from the SECOND triangle to the FIRST.
  [
    {
      q: 'One metal bracket has sides $21, 9, 15$; a second has sides $10, 14, 6$, as shown. What scale factor carries the SECOND bracket onto the FIRST?',
      fig: {
        view: [-1.5, -2, 38.5, 7.2],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [7.0714, 5.5673]], fill: false },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 14 },
          { t: 'label', p: [3.5357, 2.7837], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [14.0357, 2.7837], text: '15', dx: 12, dy: -4 },
          { t: 'poly', pts: [[23, 0], [37, 0], [27.7143, 3.7115]], fill: false },
          { t: 'label', p: [30, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [25.3572, 1.8558], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [32.3572, 1.8558], text: '10', dx: 10, dy: -4 },
        ],
      },
      choices: ['$\\frac{21}{10}$', 'They are not similar', '$\\frac{2}{3}$', '$\\frac{3}{2}$'],
      answer: 3,
      solution:
        'Sort both lists first: $(9, 15, 21)$ and $(6, 10, 14)$. From second to first, $\\frac{9}{6} = \\frac{15}{10} = \\frac{21}{14} = \\frac{3}{2}$ ✓. Check a second, independent way through the reduced triple: $(9, 15, 21) = 3 \\times (3, 5, 7)$ and $(6, 10, 14) = 2 \\times (3, 5, 7)$ — the same core shape at sizes $3$ and $2$, so the growth from the second to the first is $\\frac{3}{2}$ ✓. ($\\frac{21}{10}$ is PAIRING THE PRINTED ORDER, dividing the first numbers as they happen to be listed ✗; "not similar" is FORGETTING TO SORT and then trusting the mismatched quotients ✗; $\\frac{2}{3}$ is INVERTING THE FACTOR — that goes from first to second ✗.)',
    },
    {
      q: 'A large stencil has sides $16, 10, 12$, and a small stencil has sides $5, 8, 6$, as shown. Multiplying the SECOND stencil’s sides by what factor yields the FIRST?',
      fig: {
        view: [-1.5, -2, 27.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [6.625, 7.4906]], fill: false },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [3.3125, 3.7453], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [11.3125, 3.7453], text: '12', dx: 12, dy: -4 },
          { t: 'poly', pts: [[18, 0], [26, 0], [21.3125, 3.7453]], fill: false },
          { t: 'label', p: [22, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [19.6563, 1.8727], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [23.6563, 1.8727], text: '6', dx: 10, dy: -4 },
        ],
      },
      choices: ['$2$', '$\\frac{16}{5}$', '$\\frac{1}{2}$', 'They are not similar'],
      answer: 0,
      solution:
        'Sorting gives $(10, 12, 16)$ and $(5, 6, 8)$. Second to first: $\\frac{10}{5} = \\frac{12}{6} = \\frac{16}{8} = 2$ ✓. Check a second, independent way by halving the first triple instead: $(10, 12, 16) \\div 2 = (5, 6, 8)$, the small stencil exactly, so doubling the small one rebuilds the large one ✓. ($\\frac{16}{5}$ is PAIRING THE PRINTED ORDER, dividing $16$ by $5$ just because each was listed first ✗; $\\frac{1}{2}$ is INVERTING THE FACTOR, the shrink from first to second ✗; "not similar" is FORGETTING TO SORT — the jumbled quotients disagree, but the sorted ones all read $2$ ✗.)',
    },
    {
      q: 'Triangle one has sides $24, 10, 20$ and triangle two has sides $12, 5, 10$, as shown. What is the scale factor from the SECOND triangle to the FIRST?',
      fig: {
        view: [-1.5, -2, 39.5, 9.7],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [5.75, 8.1815]], fill: false },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [2.875, 4.0908], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [14.875, 4.0908], text: '20', dx: 12, dy: -4 },
          { t: 'poly', pts: [[26, 0], [38, 0], [28.875, 4.0908]], fill: false },
          { t: 'label', p: [32, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [27.4375, 2.0454], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [33.4375, 2.0454], text: '10', dx: 10, dy: -4 },
        ],
      },
      choices: ['$\\frac{1}{2}$', '$2$', '$\\frac{24}{5}$', 'They are not similar'],
      answer: 1,
      solution:
        'Sort both lists: $(10, 20, 24)$ and $(5, 10, 12)$. Second to first: $\\frac{10}{5} = \\frac{20}{10} = \\frac{24}{12} = 2$ ✓. Check a second, independent way by doubling the second triple outright: $(5, 10, 12) \\times 2 = (10, 20, 24)$, which re-sorts into exactly the first list ✓. Note the $10$ appearing in both lists: it is the first triangle’s SHORTEST side but the second’s middle side, so it must not be paired with itself. ($\\frac{24}{5}$ is dividing the biggest entry anywhere by the smallest — PAIRING THE PRINTED ORDER at its worst ✗; $\\frac{1}{2}$ is INVERTING THE FACTOR ✗; "not similar" comes from SORTING ONLY ONE LIST and then comparing it against the other still jumbled ✗.)',
    },
  ],
  // s6 — similar isosceles pair with an unknown side.
  [
    {
      q: 'The two pennants shown are similar triangles, with sides $4, 4, 6$ and $22, 22, x$. Find $x$.',
      fig: {
        view: [-1.5, -2, 42.5, 16],
        w: 420,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 2.6458]], fill: false },
          { t: 'label', p: [1.5, 1.3229], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [4.5, 1.3229], text: '4', dx: 10, dy: 0 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'poly', pts: [[8, 0], [41, 0], [24.5, 14.5516]], fill: false },
          { t: 'label', p: [16.25, 7.2758], text: '22', dx: -12, dy: 0 },
          { t: 'label', p: [32.75, 7.2758], text: '22', dx: 12, dy: 0 },
          { t: 'label', p: [24.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$24$', '$22$', '$33$', '$30$'],
      answer: 2,
      solution:
        'The equal legs fix the factor: $\\frac{22}{4} = \\frac{11}{2}$. The base scales by the same amount: $x = 6 \\times \\frac{11}{2} = 33$ ✓. Check a second, independent way by reducing both triples: $(4, 4, 6) \\div 2 = (2, 2, 3)$, and $(22, 22, 33) \\div 11 = (2, 2, 3)$ — the same simplest shape, so $33$ closes the match; no other base does ✓. Triangle inequality guard: $22 + 22 = 44 > 33$ ✓. ($24$ is PRESERVING THE DIFFERENCE, adding the legs’ gap of $18$ to the base instead of multiplying ✗; $22$ is COPYING THE EQUAL LEG ✗; $30$ is TRUNCATING THE SCALE FACTOR from $5.5$ down to $5$ before multiplying ✗.)',
    },
    {
      q: 'A tiny logo triangle has sides $3, 3, 5$; the billboard version shown is similar, with sides $18, 18, x$. What is $x$?',
      fig: {
        view: [-1.5, -2, 38.5, 11.5],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [2.5, 1.6583]], fill: false },
          { t: 'label', p: [1.25, 0.8292], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [3.75, 0.8292], text: '3', dx: 10, dy: 0 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'poly', pts: [[7, 0], [37, 0], [22, 9.9499]], fill: false },
          { t: 'label', p: [14.5, 4.975], text: '18', dx: -12, dy: 0 },
          { t: 'label', p: [29.5, 4.975], text: '18', dx: 12, dy: 0 },
          { t: 'label', p: [22, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$20$', '$30$', '$18$', '$25$'],
      answer: 1,
      solution:
        'The legs give the blowup factor $\\frac{18}{3} = 6$, and the base rides along: $x = 5 \\times 6 = 30$ ✓. Check a second, independent way by shrinking the billboard instead: dividing $(18, 18, 30)$ by $6$ returns $(3, 3, 5)$, the logo exactly — and no other printed candidate divides by $6$ back onto the logo ✓. Guard: $18 + 18 = 36 > 30$, so the billboard triangle closes up properly ✓. ($20$ is PRESERVING THE DIFFERENCE — the legs grew by $15$, so the base "grows by $15$" too ✗; $18$ is COPYING THE EQUAL LEG ✗; $25$ is MULTIPLYING THE BASE BY ITSELF, $5 \\times 5$, instead of by the factor $6$ ✗.)',
    },
    {
      q: 'The two tent panels shown are similar triangles with sides $4, 4, 7$ and $16, 16, x$. Solve for $x$.',
      fig: {
        view: [-1.5, -2, 38.5, 9.3],
        w: 400,
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [3.5, 1.9365]], fill: false },
          { t: 'label', p: [1.75, 0.9683], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [5.25, 0.9683], text: '4', dx: 10, dy: 0 },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'poly', pts: [[9, 0], [37, 0], [23, 7.746]], fill: false },
          { t: 'label', p: [16, 3.873], text: '16', dx: -12, dy: 0 },
          { t: 'label', p: [30, 3.873], text: '16', dx: 12, dy: 0 },
          { t: 'label', p: [23, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$19$', '$16$', '$64$', '$28$'],
      answer: 3,
      solution:
        'The matching legs give the factor $\\frac{16}{4} = 4$, so the base is $x = 7 \\times 4 = 28$ ✓. Check a second, independent way by reducing: $(16, 16, 28) \\div 4 = (4, 4, 7)$, the small panel exactly, so the triples share one simplest form ✓. Guard: $16 + 16 = 32 > 28$, so the large panel is a genuine triangle ✓. ($19$ is PRESERVING THE DIFFERENCE, adding the legs’ growth of $12$ to the base of $7$ ✗; $16$ is COPYING THE EQUAL LEG ✗; $64$ is SCALING THE LEG AGAIN — multiplying $16$ by the factor $4$ as if the leg still needed enlarging ✗.)',
    },
  ],
  // s7 — which triple is similar; no figure.
  [
    {
      q: 'A triangle has sides $4$, $9$, and $11$. Which of these triangles is similar to it?',
      choices: ['sides $8, 18, 24$', 'sides $6, 12, 16.5$', 'sides $5, 13.5, 16.5$', 'sides $6, 13.5, 16.5$'],
      answer: 3,
      solution:
        'Build the scaled copy: $(4, 9, 11) \\times \\frac{3}{2} = (6, 13.5, 16.5)$ — a perfect match, so that triangle is similar by SSS ✓. Check a second, independent way with quotients: $\\frac{6}{4} = \\frac{13.5}{9} = \\frac{16.5}{11} = \\frac{3}{2}$, three agreements ✓. Each rival breaks on exactly one side: $(8, 18, 24)$ doubles the first two but $24 \\neq 2 \\times 11$ ✗; $(6, 12, 16.5)$ trips in the middle, $\\frac{12}{9} \\neq \\frac{3}{2}$ ✗; and $(5, 13.5, 16.5)$ opens wrong, $\\frac{5}{4} \\neq \\frac{3}{2}$ ✗. All three are SETTLING FOR TWO MATCHING RATIOS, and SSS gives no credit for two out of three.',
    },
    {
      q: 'A triangle has sides $8$, $12$, and $18$. Which of the following is similar to it?',
      choices: ['sides $12, 18, 27$', 'sides $12, 18, 24$', 'sides $10, 18, 27$', 'sides $12, 16, 27$'],
      answer: 0,
      solution:
        'Test $(12, 18, 27)$: $\\frac{12}{8} = \\frac{18}{12} = \\frac{27}{18} = \\frac{3}{2}$ — all three quotients agree, similar by SSS ✓. Check a second, independent way by scaling forward: $8 \\times \\frac{3}{2} = 12$, $12 \\times \\frac{3}{2} = 18$, $18 \\times \\frac{3}{2} = 27$, rebuilding the winning triple entry by entry ✓. The rest each fail once: $(12, 18, 24)$ ends with $\\frac{24}{18} = \\frac{4}{3} \\neq \\frac{3}{2}$ ✗; $(10, 18, 27)$ opens with $\\frac{10}{8} = \\frac{5}{4} \\neq \\frac{3}{2}$ ✗; $(12, 16, 27)$ carries $\\frac{16}{12} = \\frac{4}{3} \\neq \\frac{3}{2}$ in the middle ✗ — every one is SETTLING FOR TWO MATCHING RATIOS.',
    },
    {
      q: 'A triangle has sides $5$, $8$, and $12$. Which triangle below is similar to it?',
      choices: ['sides $7.5, 11, 18$', 'sides $7, 12, 18$', 'sides $7.5, 12, 18$', 'sides $7.5, 12, 16$'],
      answer: 2,
      solution:
        'Scale $(5, 8, 12)$ by $\\frac{3}{2}$: $5 \\to 7.5$, $8 \\to 12$, $12 \\to 18$, giving $(7.5, 12, 18)$ exactly ✓. Check a second, independent way with the quotient test: $\\frac{7.5}{5} = \\frac{12}{8} = \\frac{18}{12} = \\frac{3}{2}$, three matches ✓. The others each stumble on one entry only: $(7.5, 11, 18)$ has $\\frac{11}{8} \\neq \\frac{3}{2}$ in the middle ✗; $(7, 12, 18)$ has $\\frac{7}{5} \\neq \\frac{3}{2}$ up front ✗; $(7.5, 12, 16)$ has $\\frac{16}{12} \\neq \\frac{3}{2}$ at the end ✗. Each is SETTLING FOR TWO MATCHING RATIOS — one broken quotient sinks the whole claim.',
    },
  ],
  // s8 — four named triangles; which one is similar to the given triangle.
  [
    {
      q: 'Triangle $A$ has sides $3, 5, 7$. Triangle $J$ has sides $6, 10, 13$; triangle $K$ has sides $9, 15, 21$; triangle $L$ has sides $4.5, 8, 10.5$. Which triangle is similar to $A$?',
      choices: ['triangle $K$', 'triangle $J$', 'triangle $L$', 'none of them'],
      answer: 0,
      solution:
        'Triangle $K$: $\\frac{9}{3} = \\frac{15}{5} = \\frac{21}{7} = 3$ — three matching quotients, similar by SSS ✓. Check a second, independent way by reducing: $(9, 15, 21) \\div 3 = (3, 5, 7)$, which is triangle $A$ itself ✓. Triangle $J$ doubles two sides but not the third: $\\frac{6}{3} = \\frac{10}{5} = 2$ while $\\frac{13}{7} \\neq 2$ ✗. Triangle $L$ starts and ends at $\\frac{3}{2}$ but breaks in the middle: $\\frac{8}{5} \\neq \\frac{3}{2}$ ✗. Picking $J$ or $L$ is SETTLING FOR TWO MATCHING RATIOS, and "none of them" is DEMANDING EQUAL SIDES from a test that only needs a common ratio ✗.',
    },
    {
      q: 'Triangle $N$ has sides $4, 6, 9$. Three candidates are offered: triangle $T$ with sides $10, 15, 22.5$, triangle $U$ with sides $8, 12, 17$, and triangle $V$ with sides $6, 10, 13.5$. Which one is similar to $N$?',
      choices: ['triangle $U$', 'none of them', 'triangle $T$', 'triangle $V$'],
      answer: 2,
      solution:
        'Triangle $T$: $\\frac{10}{4} = \\frac{15}{6} = \\frac{22.5}{9} = \\frac{5}{2}$ — similar by SSS with factor $\\frac{5}{2}$ ✓. Check a second, independent way by building: $(4, 6, 9) \\times \\frac{5}{2} = (10, 15, 22.5)$, exactly triangle $T$, entry by entry ✓. Triangle $U$ doubles the first two sides but its last is $17$, not $2 \\times 9 = 18$ ✗. Triangle $V$ runs at $\\frac{3}{2}$ on the outside entries but $\\frac{10}{6} \\neq \\frac{3}{2}$ in the middle ✗. Choosing $U$ or $V$ is SETTLING FOR TWO MATCHING RATIOS ✗, and "none of them" gives up on a factor just because it is not a whole number — DEMANDING EQUAL SIDES in disguise ✗.',
    },
    {
      q: 'Triangle $G$ has sides $5, 7, 9$. Triangle $X$ has sides $12.5, 17.5, 22.5$; triangle $Y$ has sides $10, 14, 17$; triangle $Z$ has sides $7.5, 11, 13.5$. Which triangle is similar to $G$?',
      choices: ['triangle $Z$', 'triangle $X$', 'none of them', 'triangle $Y$'],
      answer: 1,
      solution:
        'Triangle $X$: $\\frac{12.5}{5} = \\frac{17.5}{7} = \\frac{22.5}{9} = \\frac{5}{2}$ — all three agree, similar by SSS ✓. Check a second, independent way by shrinking $X$ back down: $(12.5, 17.5, 22.5) \\div \\frac{5}{2} = (5, 7, 9)$, which is triangle $G$ on the nose ✓. Triangle $Y$ doubles two sides but finishes at $17$ instead of $2 \\times 9 = 18$ ✗. Triangle $Z$ holds $\\frac{3}{2}$ at both ends yet its middle reads $\\frac{11}{7} \\neq \\frac{3}{2}$ ✗. Both near-misses tempt you into SETTLING FOR TWO MATCHING RATIOS ✗, and "none of them" is DEMANDING EQUAL SIDES — a decimal factor is still a perfectly good factor ✗.',
    },
  ],
  // s9 — triple shown; similar triangle known by its shortest side; find its perimeter.
  [
    {
      q: 'The triangular deck shown has sides $8$, $15$, and $17$. A similar deck has shortest side $12$. How much railing runs around the larger deck — that is, what is its perimeter?',
      fig: {
        view: [-1.5, -2, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 8]], fill: false },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [15, 4], text: '8', dx: 10, dy: 0 },
          { t: 'label', p: [7.5, 4], text: '17', dx: -8, dy: -8 },
        ],
      },
      choices: ['$90$', '$60$', '$32$', '$52$'],
      answer: 1,
      solution:
        'Shortest pairs with shortest, so the factor is $\\frac{12}{8} = \\frac{3}{2}$. The small perimeter is $8 + 15 + 17 = 40$, and perimeter scales by the same factor: $40 \\times \\frac{3}{2} = 60$ ✓. Check a second, independent way by scaling each side and adding: $15 \\times \\frac{3}{2} = 22.5$ and $17 \\times \\frac{3}{2} = 25.5$, so the large deck measures $12 + 22.5 + 25.5 = 60$ ✓ — the same total without ever scaling the perimeter as a whole. ($90$ is SQUARING THE FACTOR, which is how AREA grows ✗; $32$ is MATCHING THE NEW SIDE TO THE MIDDLE SIDE, using $\\frac{12}{15}$ ✗; $52$ is PRESERVING THE DIFFERENCE, adding $4$ to every side instead of multiplying ✗.)',
    },
    {
      q: 'A triangular sticker shown has sides $7$, $11$, and $14$. A poster-sized similar copy has shortest side $17.5$. What is the perimeter of the poster copy?',
      fig: {
        view: [-1.5, -2, 15.5, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [4.4286, 5.4211]], fill: false },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [2.2143, 2.7106], text: '7', dx: -10, dy: 0 },
          { t: 'label', p: [9.2143, 2.7106], text: '11', dx: 12, dy: -4 },
        ],
      },
      choices: ['$200$', '$40$', '$63.5$', '$80$'],
      answer: 3,
      solution:
        'The $17.5$ corresponds to the sticker’s shortest side $7$, so the factor is $\\frac{17.5}{7} = \\frac{5}{2}$. The sticker’s perimeter is $7 + 11 + 14 = 32$, and $32 \\times \\frac{5}{2} = 80$ ✓. Check a second, independent way side by side: $11 \\times \\frac{5}{2} = 27.5$ and $14 \\times \\frac{5}{2} = 35$, so the poster runs $17.5 + 27.5 + 35 = 80$ around ✓ — two routes, one total. ($200$ is SQUARING THE FACTOR: $32 \\times \\frac{25}{4}$ is an area-style blowup ✗; $40$ is MATCHING THE NEW SIDE TO THE LONGEST SIDE, taking $\\frac{17.5}{14} = 1.25$ as the factor ✗; $63.5$ is PRESERVING THE DIFFERENCE, adding $10.5$ to each side ✗.)',
    },
    {
      q: 'The triangular garden path shown has sides $9$, $10$, and $17$. A similar path is laid out with shortest side $22.5$. Find the perimeter of the new path.',
      fig: {
        view: [-1.5, -2, 18.5, 5.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [7.9412, 4.2353]], fill: false },
          { t: 'label', p: [8.5, 0], text: '17', dx: 0, dy: 14 },
          { t: 'label', p: [3.9706, 2.1177], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [12.4706, 2.1177], text: '10', dx: 10, dy: -4 },
        ],
      },
      choices: ['$90$', '$225$', '$81$', '$76.5$'],
      answer: 0,
      solution:
        'Match shortest to shortest: the factor is $\\frac{22.5}{9} = \\frac{5}{2}$. The small perimeter is $9 + 10 + 17 = 36$, so the new path measures $36 \\times \\frac{5}{2} = 90$ ✓. Check a second, independent way by scaling every side first: $10 \\times \\frac{5}{2} = 25$ and $17 \\times \\frac{5}{2} = 42.5$, and $22.5 + 25 + 42.5 = 90$ ✓ — the sum of scaled sides agrees with the scaled sum. ($225$ is SQUARING THE FACTOR, the area rule applied to a length ✗; $81$ is MATCHING THE NEW SIDE TO THE MIDDLE SIDE, reading $\\frac{22.5}{10} = 2.25$ as the factor ✗; $76.5$ is PRESERVING THE DIFFERENCE, stretching every side by $+13.5$ instead of $\\times \\frac{5}{2}$ ✗.)',
    },
  ],
  // s10 — both triangles shown, second labeled only by its shortest side; perimeter.
  [
    {
      q: 'A triangle has sides $5$, $12$, and $13$. A similar triangle, shown beside it, has SHORTEST side $15$. What is the perimeter of the second triangle?',
      fig: {
        view: [-1.5, -2, 52.5, 16.5],
        w: 440,
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 10, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '13', dx: -8, dy: -8 },
          { t: 'poly', pts: [[14, 0], [50, 0], [50, 15]], fill: false },
          { t: 'label', p: [50, 7.5], text: '15', dx: 12, dy: 0 },
        ],
      },
      choices: ['$37.5$', '$30$', '$90$', '$270$'],
      answer: 2,
      solution:
        'The $15$ pairs with the shortest side $5$, so the factor is $\\frac{15}{5} = 3$, and the perimeter scales with it: $(5 + 12 + 13) \\times 3 = 30 \\times 3 = 90$ ✓. Check a second, independent way by listing the second triangle’s sides outright: $15, 36, 39$ — and $15 + 36 + 39 = 90$ ✓, with a bonus guard that $15^2 + 36^2 = 1521 = 39^2$, so the copy is right-angled just like the original. ($37.5$ is MATCHING THE NEW SIDE TO THE MIDDLE SIDE, taking $\\frac{15}{12} = 1.25$ as the factor ✗; $30$ is ANSWERING THE SMALL PERIMETER ✗; $270$ is SQUARING THE FACTOR — multiplying by $9$ is what happens to the area ✗.)',
    },
    {
      q: 'A triangle has sides $9$, $12$, and $15$. A similar triangle, drawn next to it, has SHORTEST side $12$. Find the perimeter of that second triangle.',
      fig: {
        view: [-1.5, -2, 31.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 9]], fill: false },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 4.5], text: '9', dx: 10, dy: 0 },
          { t: 'label', p: [6, 4.5], text: '15', dx: -8, dy: -8 },
          { t: 'poly', pts: [[14, 0], [30, 0], [30, 12]], fill: false },
          { t: 'label', p: [30, 6], text: '12', dx: 10, dy: 0 },
        ],
      },
      choices: ['$48$', '$36$', '$28.8$', '$64$'],
      answer: 0,
      solution:
        'The new shortest side $12$ corresponds to the OLD shortest side $9$ — not to the old $12$ — so the factor is $\\frac{12}{9} = \\frac{4}{3}$. The first perimeter is $9 + 12 + 15 = 36$, and $36 \\times \\frac{4}{3} = 48$ ✓. Check a second, independent way from the sides themselves: the second triangle measures $12, 16, 20$, and $12 + 16 + 20 = 48$ ✓, with the guard that $(12, 16, 20) = \\frac{4}{3} \\times (9, 12, 15)$ entry by entry. ($36$ is MATCHING THE 12 TO ITSELF — the shared number sits in different positions in the two triples, so the factor is not $1$ ✗; $28.8$ is MATCHING THE NEW SIDE TO THE LONGEST SIDE, using $\\frac{12}{15}$ ✗; $64$ is SQUARING THE FACTOR, $36 \\times \\frac{16}{9}$ ✗.)',
    },
    {
      q: 'A triangle has sides $6$, $8$, and $10$. Beside it sits a similar triangle whose SHORTEST side is $15$, as shown. What is the perimeter of the larger triangle?',
      fig: {
        view: [-1.5, -2, 31.5, 16.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 6]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 3], text: '6', dx: 10, dy: 0 },
          { t: 'label', p: [4, 3], text: '10', dx: -8, dy: -8 },
          { t: 'poly', pts: [[10, 0], [30, 0], [30, 15]], fill: false },
          { t: 'label', p: [30, 7.5], text: '15', dx: 10, dy: 0 },
        ],
      },
      choices: ['$24$', '$45$', '$150$', '$60$'],
      answer: 3,
      solution:
        'Shortest matches shortest, so the factor is $\\frac{15}{6} = \\frac{5}{2}$, and the perimeter follows: $(6 + 8 + 10) \\times \\frac{5}{2} = 24 \\times \\frac{5}{2} = 60$ ✓. Check a second, independent way by scaling the sides one at a time: $8 \\times \\frac{5}{2} = 20$ and $10 \\times \\frac{5}{2} = 25$, so the larger triangle measures $15 + 20 + 25 = 60$ around ✓ — and $15^2 + 20^2 = 625 = 25^2$ confirms it kept the right angle. ($24$ is ANSWERING THE SMALL PERIMETER ✗; $45$ is MATCHING THE NEW SIDE TO THE MIDDLE SIDE, taking $\\frac{15}{8}$ as the factor ✗; $150$ is SQUARING THE FACTOR, $24 \\times \\frac{25}{4}$, which grows areas rather than fences ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  sections: {
    '5.4': s54,
  },
}
