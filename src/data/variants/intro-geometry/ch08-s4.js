// Introduction to Geometry chapter 8 — variations for section 8.4 (Rhombi).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    the half-diagonal Pythagorean route against a scaled-triple recognition,
//    the diagonal area formula against the four-congruent-right-triangles sum,
//    base-times-height against a cut-and-slide rectangle, and the equilateral
//    triangle argument against a 30-60-90 half-diagonal computation. Both
//    routes must agree before a key is written down.
//  - Figures are built from their own numbers: diagonals cross at the center
//    at a true right angle, every labelled vertex angle is drawn at its exact
//    measure (half-diagonals in the tangent ratio of the half-angle), and
//    every tick-marked side has the same computed length.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item name the same value.

const s84 = [
  // s1 — perimeter of a rhombus → side length.
  [
    {
      q: 'A kite frame in the shape of a rhombus is edged with a single $68$-cm strip of ribbon, used completely with no overlap. How long is each side of the frame?',
      choices: ['$17$', '$34$', '$8.5$', '$64$'],
      answer: 0,
      solution:
        'All four sides of a rhombus are equal, so the ribbon splits evenly four ways: each side is $\\frac{68}{4} = 17$ cm ✓. Check a second, independent way by rebuilding the border: four sides of $17$ cm use $17 + 17 + 17 + 17 = 68$ cm, the whole strip ✓. (The choice $34$ is DIVIDING BY TWO, as if only two sides shared the ribbon ✗; $8.5$ is DIVIDING BY EIGHT, one halving too many ✗; $64$ is SUBTRACTING FOUR instead of dividing by it ✗.)',
    },
    {
      q: 'A walking path runs exactly once around a rhombus-shaped flower bed, a total stroll of $44$ m. What is the length of one edge of the bed?',
      choices: ['$22$', '$5.5$', '$11$', '$40$'],
      answer: 2,
      solution:
        'A rhombus has four equal edges, so each one is $\\frac{44}{4} = 11$ m ✓. Check a second, independent way by walking it back: $4 \\times 11 = 44$ m returns the full loop ✓. (The choice $22$ is DIVIDING BY TWO — a rhombus has four sides, not two ✗; $5.5$ is DIVIDING BY EIGHT ✗; $40$ is SUBTRACTING FOUR from the perimeter instead of dividing by it ✗.)',
    },
    {
      q: 'A metalworker bends one $92$-inch rod into a rhombus, using the entire rod with nothing trimmed off. How long is each side of the rhombus?',
      choices: ['$46$', '$23$', '$11.5$', '$88$'],
      answer: 1,
      solution:
        'The four sides of a rhombus are congruent, so the rod divides evenly: each side is $\\frac{92}{4} = 23$ inches ✓. Check a second, independent way by re-assembling: $4 \\times 23 = 92$ inches, the whole rod ✓. (The choice $46$ is DIVIDING BY TWO ✗; $11.5$ is DIVIDING BY EIGHT ✗; $88$ is SUBTRACTING FOUR rather than dividing by it ✗.)',
    },
  ],
  // s2 — every rhombus is a parallelogram (conceptual).
  [
    {
      q: 'A designer cuts a quadrilateral panel whose four sides all measure $30$ cm, and no angle is measured at all. Must the panel be a parallelogram?',
      choices: [
        'No — without an angle measurement, the sides could fail to be parallel',
        'Yes — both pairs of opposite sides are equal, and that alone forces a parallelogram',
        'Only if the two diagonals turn out to be equal',
        'Only if one of its angles happens to be a right angle',
      ],
      answer: 1,
      solution:
        'Four equal sides mean, in particular, that both pairs of opposite sides are equal — and that is a parallelogram test all by itself, no angle required ✓. Check a second, independent way with a diagonal: it splits the panel into two triangles that match side-for-side (SSS), so the alternate interior angles agree and both pairs of sides come out parallel ✓. (The first choice is MISSING THE SIDE TEST — the opposite-sides-equal test never asks for an angle ✗; equal diagonals is DEMANDING A RECTANGLE UPGRADE the question never needed ✗; a right angle is DEMANDING A SQUARE, far more than a parallelogram takes ✗.)',
    },
    {
      q: 'Tomas says, “My quadrilateral has four equal sides, so it automatically enjoys every parallelogram property — bisecting diagonals, equal opposite angles, all of it.” Is his shortcut sound?',
      choices: [
        'No — he must first verify that the diagonals bisect each other',
        'No — four equal sides make a kite, and a kite is never a parallelogram',
        'It is sound only when the shape is a square',
        'Yes — four equal sides make a rhombus, every rhombus is a parallelogram, and the properties follow',
      ],
      answer: 3,
      solution:
        'Four equal sides make the figure a rhombus, and every rhombus is a parallelogram because both pairs of opposite sides are equal — so the entire parallelogram toolkit arrives for free ✓. Check a second, independent way with one diagonal: SSS congruence of the two halves yields equal alternate interior angles, hence two pairs of parallel sides — a parallelogram by definition ✓. (Checking the diagonals first is RE-PROVING WHAT IS FREE — bisecting diagonals are a consequence, not a prerequisite ✗; the kite objection is STOPPING AT KITE — a rhombus is a kite that kept going ✗; restricting to squares is DEMANDING A SQUARE ✗.)',
    },
    {
      q: 'In a family tree of quadrilaterals, which statement places the rhombi correctly?',
      choices: [
        'Every rhombus sits inside the parallelogram family, since its opposite sides are equal',
        'Rhombi and parallelograms are separate families that overlap only at the squares',
        'A rhombus joins the parallelogram family only when its diagonals are equal',
        'Parallelograms sit inside the rhombus family, not the other way around',
      ],
      answer: 0,
      solution:
        'A rhombus has all four sides equal, so both pairs of opposite sides are equal — one of the parallelogram tests — and every rhombus lands inside the parallelogram family ✓. Check a second, independent way straight from parallelism: either diagonal cuts a rhombus into two SSS-congruent triangles, and the matching alternate interior angles force both pairs of sides parallel ✓. (Separate families is SPLITTING THE FAMILIES — the inclusion is total, not a mere overlap ✗; requiring equal diagonals is DEMANDING A RECTANGLE UPGRADE ✗; the reversed inclusion is FLIPPING THE FAMILY TREE, since plenty of parallelograms have unequal neighboring sides ✗.)',
    },
  ],
  // s3 — diagonals → area (figure).
  [
    {
      q: 'The rhombus-shaped logo $JKLM$ shown below has diagonals of length $14$ and $6$. How much area does the logo cover?',
      fig: {
        view: [-8.5, -4.5, 8.5, 4.5],
        elems: [
          { t: 'poly', pts: [[-7, 0], [0, -3], [7, 0], [0, 3]], fill: false },
          { t: 'seg', a: [-7, 0], b: [7, 0], dash: true },
          { t: 'seg', a: [0, -3], b: [0, 3], dash: true },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 3] },
          { t: 'label', p: [-3.5, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [0, -1.5], text: '6', dx: 12, dy: 0 },
          { t: 'point', p: [-7, 0], label: 'J', dx: -12, dy: 0 },
          { t: 'point', p: [0, -3], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [7, 0], label: 'L', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'M', dx: 0, dy: -12 },
        ],
      },
      choices: ['$84$', '$21$', '$42$', '$20$'],
      answer: 2,
      solution:
        'The diagonals of a rhombus are perpendicular, so Area $= \\frac{d_1 d_2}{2} = \\frac{14 \\times 6}{2} = 42$ ✓. Check a second, independent way with the four right triangles: the diagonals cross at the center and carve the logo into four congruent right triangles with legs $7$ and $3$, each of area $\\frac{7 \\times 3}{2} = 10.5$, and $4 \\times 10.5 = 42$ ✓. (The choice $84$ is FORGETTING THE HALF — that is the surrounding $14 \\times 6$ rectangle ✗; $21$ is HALVING TWICE ✗; $20$ is ADDING THE DIAGONALS, which never produces an area ✗.)',
    },
    {
      q: 'A rhombus-shaped garden plot has one straight diagonal path of $22$ m and another of $7$ m, as shown. What is the area of the plot?',
      fig: {
        w: 380,
        view: [-12.5, -5, 12.5, 5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [0, -3.5], [11, 0], [0, 3.5]], fill: false },
          { t: 'seg', a: [-11, 0], b: [11, 0], dash: true },
          { t: 'seg', a: [0, -3.5], b: [0, 3.5], dash: true },
          { t: 'right', at: [0, 0], from: [11, 0], to: [0, 3.5], s: 0.5 },
          { t: 'label', p: [-5.5, 0], text: '22', dx: 0, dy: 14 },
          { t: 'label', p: [0, -1.75], text: '7', dx: 12, dy: 0 },
          { t: 'point', p: [-11, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [0, -3.5], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [11, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3.5], label: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$77$', '$154$', '$38.5$', '$29$'],
      answer: 0,
      solution:
        'Perpendicular diagonals give Area $= \\frac{d_1 d_2}{2} = \\frac{22 \\times 7}{2} = 77$ square meters ✓. Check a second, independent way from the center: the paths cut the plot into four congruent right triangles with legs $11$ and $3.5$, each of area $\\frac{11 \\times 3.5}{2} = 19.25$, and $4 \\times 19.25 = 77$ ✓. (The choice $154$ is FORGETTING THE HALF — the full $22 \\times 7$ bounding rectangle ✗; $38.5$ is HALVING TWICE ✗; $29$ is ADDING THE DIAGONALS ✗.)',
    },
    {
      q: 'The diagonals of rhombus $WXYZ$ below measure $18$ and $9$. Compute its area.',
      fig: {
        view: [-10.5, -6, 10.5, 6],
        elems: [
          { t: 'poly', pts: [[-9, 0], [0, -4.5], [9, 0], [0, 4.5]], fill: false },
          { t: 'seg', a: [-9, 0], b: [9, 0], dash: true },
          { t: 'seg', a: [0, -4.5], b: [0, 4.5], dash: true },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 4.5], s: 0.5 },
          { t: 'label', p: [-4.5, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [0, -2.25], text: '9', dx: 12, dy: 0 },
          { t: 'point', p: [-9, 0], label: 'W', dx: -12, dy: 0 },
          { t: 'point', p: [0, -4.5], label: 'X', dx: 0, dy: 14 },
          { t: 'point', p: [9, 0], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [0, 4.5], label: 'Z', dx: 0, dy: -12 },
        ],
      },
      choices: ['$162$', '$40.5$', '$27$', '$81$'],
      answer: 3,
      solution:
        'Area $= \\frac{d_1 d_2}{2} = \\frac{18 \\times 9}{2} = 81$ ✓. Check a second, independent way with the four right triangles at the center: legs $9$ and $4.5$ give each triangle area $\\frac{9 \\times 4.5}{2} = 20.25$, and $4 \\times 20.25 = 81$ ✓. (The choice $162$ is FORGETTING THE HALF — the whole $18 \\times 9$ rectangle around the rhombus ✗; $40.5$ is HALVING TWICE ✗; $27$ is ADDING THE DIAGONALS ✗.)',
    },
  ],
  // s4 — vertex angle → angle between diagonal and side (figure).
  [
    {
      q: 'In rhombus $PQRS$ shown below, $\\angle SPQ = 112^\\circ$. What is the measure of the angle between diagonal $\\overline{PR}$ and side $\\overline{PQ}$?',
      fig: {
        view: [-6.5, -8.9, 6.5, 8.9],
        elems: [
          { t: 'poly', pts: [[-5, 0], [0, -7.4128], [5, 0], [0, 7.4128]], fill: false },
          { t: 'seg', a: [-5, 0], b: [5, 0], dash: true },
          { t: 'angle', at: [-5, 0], from: [0, -7.4128], to: [0, 7.4128], r: 0.9, label: '112°' },
          { t: 'angle', at: [-5, 0], from: [0, -7.4128], to: [5, 0], r: 2.4, label: '?' },
          { t: 'point', p: [-5, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [0, -7.4128], label: 'Q', dx: 0, dy: 14 },
          { t: 'point', p: [5, 0], label: 'R', dx: 12, dy: 0 },
          { t: 'point', p: [0, 7.4128], label: 'S', dx: 0, dy: -12 },
        ],
      },
      choices: ['$112^\\circ$', '$68^\\circ$', '$34^\\circ$', '$56^\\circ$'],
      answer: 3,
      solution:
        'A diagonal of a rhombus bisects the vertex angles at its endpoints, so $\\overline{PR}$ splits the $112^\\circ$ angle at $P$ into two $56^\\circ$ pieces ✓. Check a second, independent way inside triangle $PQR$: it is isosceles with $PQ = QR$, its apex angle at $Q$ is $180^\\circ - 112^\\circ = 68^\\circ$ (consecutive angles of a rhombus are supplementary), so each base angle is $\\frac{180^\\circ - 68^\\circ}{2} = 56^\\circ$ ✓. (The choice $112^\\circ$ is HANDING BACK THE VERTEX ANGLE unsplit ✗; $68^\\circ$ is ANSWERING THE NEIGHBORING VERTEX ANGLE ✗; $34^\\circ$ is HALVING THE WRONG VERTEX ANGLE — half of $68^\\circ$ is the job of the other diagonal ✗.)',
    },
    {
      q: 'Rhombus $WXYZ$ below has $\\angle ZWX = 128^\\circ$, and diagonal $\\overline{WY}$ is drawn. Find the measure of $\\angle YWX$.',
      fig: {
        view: [-5, -8.7, 5, 8.7],
        elems: [
          { t: 'poly', pts: [[-3.5, 0], [0, -7.1761], [3.5, 0], [0, 7.1761]], fill: false },
          { t: 'seg', a: [-3.5, 0], b: [3.5, 0], dash: true },
          { t: 'angle', at: [-3.5, 0], from: [0, -7.1761], to: [0, 7.1761], r: 0.9, label: '128°' },
          { t: 'angle', at: [-3.5, 0], from: [0, -7.1761], to: [3.5, 0], r: 2.2, label: '?' },
          { t: 'point', p: [-3.5, 0], label: 'W', dx: -12, dy: 0 },
          { t: 'point', p: [0, -7.1761], label: 'X', dx: 0, dy: 14 },
          { t: 'point', p: [3.5, 0], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [0, 7.1761], label: 'Z', dx: 0, dy: -12 },
        ],
      },
      choices: ['$128^\\circ$', '$64^\\circ$', '$52^\\circ$', '$26^\\circ$'],
      answer: 1,
      solution:
        'Diagonal $\\overline{WY}$ bisects the vertex angle at $W$, so $\\angle YWX = \\frac{128^\\circ}{2} = 64^\\circ$ ✓. Check a second, independent way in triangle $WXY$: it is isosceles with $WX = XY$, its apex angle at $X$ is $180^\\circ - 128^\\circ = 52^\\circ$ (consecutive angles are supplementary), so each base angle is $\\frac{180^\\circ - 52^\\circ}{2} = 64^\\circ$ ✓. (The choice $128^\\circ$ is HANDING BACK THE VERTEX ANGLE ✗; $52^\\circ$ is ANSWERING THE NEIGHBORING VERTEX ANGLE ✗; $26^\\circ$ is HALVING THE WRONG VERTEX ANGLE — half of $52^\\circ$ belongs to diagonal $\\overline{XZ}$ ✗.)',
    },
    {
      q: 'In the rhombus $JKLM$ below, the angle at vertex $J$ measures $74^\\circ$. What angle does diagonal $\\overline{JL}$ make with side $\\overline{JK}$?',
      fig: {
        view: [-7.5, -6, 7.5, 6],
        elems: [
          { t: 'poly', pts: [[-6, 0], [0, -4.5213], [6, 0], [0, 4.5213]], fill: false },
          { t: 'seg', a: [-6, 0], b: [6, 0], dash: true },
          { t: 'angle', at: [-6, 0], from: [0, -4.5213], to: [0, 4.5213], r: 1.1, label: '74°' },
          { t: 'angle', at: [-6, 0], from: [0, -4.5213], to: [6, 0], r: 2.6, label: '?' },
          { t: 'point', p: [-6, 0], label: 'J', dx: -12, dy: 0 },
          { t: 'point', p: [0, -4.5213], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [6, 0], label: 'L', dx: 12, dy: 0 },
          { t: 'point', p: [0, 4.5213], label: 'M', dx: 0, dy: -12 },
        ],
      },
      choices: ['$106^\\circ$', '$53^\\circ$', '$37^\\circ$', '$74^\\circ$'],
      answer: 2,
      solution:
        'The diagonal from a vertex bisects the angle there, so $\\overline{JL}$ splits the $74^\\circ$ angle at $J$ into two angles of $\\frac{74^\\circ}{2} = 37^\\circ$ ✓. Check a second, independent way in triangle $JKL$: $JK = KL$ makes it isosceles, the apex angle at $K$ is $180^\\circ - 74^\\circ = 106^\\circ$, so each base angle is $\\frac{180^\\circ - 106^\\circ}{2} = 37^\\circ$ ✓. (The choice $106^\\circ$ is ANSWERING THE NEIGHBORING VERTEX ANGLE ✗; $53^\\circ$ is HALVING THE WRONG VERTEX ANGLE — half of $106^\\circ$, which diagonal $\\overline{KM}$ handles ✗; $74^\\circ$ is HANDING BACK THE VERTEX ANGLE ✗.)',
    },
  ],
  // s5 — diagonals → side length (figure).
  [
    {
      q: 'The two diagonals of a rhombus-shaped window measure $30$ inches and $40$ inches, as shown. How long is each edge of the window?',
      fig: {
        w: 360,
        view: [-22.5, -17, 22.5, 17],
        elems: [
          { t: 'poly', pts: [[-20, 0], [0, -15], [20, 0], [0, 15]], fill: false },
          { t: 'seg', a: [-20, 0], b: [20, 0], dash: true },
          { t: 'seg', a: [0, -15], b: [0, 15], dash: true },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15], s: 1.0 },
          { t: 'label', p: [-10, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [0, -7.5], text: '30', dx: 14, dy: 0 },
          { t: 'point', p: [-20, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [0, -15], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [20, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [0, 15], label: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$25$', '$50$', '$35$', '$20$'],
      answer: 0,
      solution:
        'The diagonals bisect each other at right angles, so each edge is the hypotenuse of a right triangle with legs $\\frac{30}{2} = 15$ and $\\frac{40}{2} = 20$: $s = \\sqrt{15^2 + 20^2} = \\sqrt{625} = 25$ inches ✓. Check a second, independent way by scaling: the legs are $5 \\times 3$ and $5 \\times 4$, so the hypotenuse is $5 \\times 5 = 25$ — the $3$-$4$-$5$ triple, five times over ✓. Guard: $225 + 400 = 625 = 25^2$ ✓. (The choice $50$ is USING THE FULL DIAGONALS as the legs ✗; $35$ is ADDING THE HALF-DIAGONALS instead of applying Pythagoras ✗; $20$ is HANDING BACK A HALF-DIAGONAL ✗.)',
    },
    {
      q: 'In the rhombus below, the diagonals measure $12$ and $35$. What is the side length?',
      fig: {
        w: 430,
        view: [-19.5, -8, 19.5, 8],
        elems: [
          { t: 'poly', pts: [[-17.5, 0], [0, -6], [17.5, 0], [0, 6]], fill: false },
          { t: 'seg', a: [-17.5, 0], b: [17.5, 0], dash: true },
          { t: 'seg', a: [0, -6], b: [0, 6], dash: true },
          { t: 'right', at: [0, 0], from: [17.5, 0], to: [0, 6], s: 0.8 },
          { t: 'label', p: [-8.75, 0], text: '35', dx: 0, dy: 14 },
          { t: 'label', p: [0, -3], text: '12', dx: 14, dy: 0 },
          { t: 'point', p: [-17.5, 0], label: 'K', dx: -12, dy: 0 },
          { t: 'point', p: [0, -6], label: 'L', dx: 0, dy: 14 },
          { t: 'point', p: [17.5, 0], label: 'M', dx: 12, dy: 0 },
          { t: 'point', p: [0, 6], label: 'N', dx: 0, dy: -12 },
        ],
      },
      choices: ['$37$', '$23.5$', '$18.5$', '$17.5$'],
      answer: 2,
      solution:
        'Half-diagonals $6$ and $17.5$ are the legs of the right triangles inside, so $s = \\sqrt{6^2 + 17.5^2} = \\sqrt{36 + 306.25} = \\sqrt{342.25} = 18.5$ ✓. Check a second, independent way without decimals: double the whole picture — legs $12$ and $35$ give hypotenuse $\\sqrt{144 + 1225} = \\sqrt{1369} = 37$ (the $12$-$35$-$37$ triple), and the side is half of that, $18.5$ ✓. Guard: $6^2 + 17.5^2 = 342.25 = 18.5^2$ ✓. (The choice $37$ is USING THE FULL DIAGONALS as legs ✗; $23.5$ is ADDING THE HALF-DIAGONALS ✗; $17.5$ is HANDING BACK A HALF-DIAGONAL ✗.)',
    },
    {
      q: 'A rhombus-shaped tile has diagonals of $40$ mm and $42$ mm, as pictured. Find the length of one side of the tile.',
      fig: {
        w: 340,
        view: [-23.5, -22.5, 23.5, 22.5],
        elems: [
          { t: 'poly', pts: [[-21, 0], [0, -20], [21, 0], [0, 20]], fill: false },
          { t: 'seg', a: [-21, 0], b: [21, 0], dash: true },
          { t: 'seg', a: [0, -20], b: [0, 20], dash: true },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 20], s: 1.1 },
          { t: 'label', p: [-10.5, 0], text: '42', dx: 0, dy: 14 },
          { t: 'label', p: [0, -10], text: '40', dx: 14, dy: 0 },
          { t: 'point', p: [-21, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [0, -20], label: 'Q', dx: 0, dy: 14 },
          { t: 'point', p: [21, 0], label: 'R', dx: 12, dy: 0 },
          { t: 'point', p: [0, 20], label: 'S', dx: 0, dy: -12 },
        ],
      },
      choices: ['$58$', '$29$', '$41$', '$21$'],
      answer: 1,
      solution:
        'Each side is the hypotenuse over the half-diagonals $\\frac{40}{2} = 20$ and $\\frac{42}{2} = 21$: $s = \\sqrt{20^2 + 21^2} = \\sqrt{400 + 441} = \\sqrt{841} = 29$ mm — the $20$-$21$-$29$ triple ✓. Check a second, independent way by doubling: a right triangle with the full diagonals $40$ and $42$ as legs has hypotenuse $\\sqrt{1600 + 1764} = \\sqrt{3364} = 58$, and the side is half of it, $29$ ✓. Guard: $400 + 441 = 841 = 29^2$ ✓. (The choice $58$ is USING THE FULL DIAGONALS as legs ✗; $41$ is ADDING THE HALF-DIAGONALS ✗; $21$ is HANDING BACK A HALF-DIAGONAL ✗.)',
    },
  ],
  // s6 — diagonals → perimeter (figure).
  [
    {
      q: 'A groundskeeper lays out a rhombus on a field by stretching two strings along its diagonals — one $18$ m long and one $80$ m long, as shown. How much chalk line is needed to outline the rhombus?',
      fig: {
        w: 460,
        view: [-43, -11.5, 43, 11.5],
        elems: [
          { t: 'poly', pts: [[-40, 0], [0, -9], [40, 0], [0, 9]], fill: false },
          { t: 'seg', a: [-40, 0], b: [40, 0], dash: true },
          { t: 'seg', a: [0, -9], b: [0, 9], dash: true },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 9], s: 1.5 },
          { t: 'label', p: [-20, 0], text: '80', dx: 0, dy: 14 },
          { t: 'label', p: [0, -4.5], text: '18', dx: 14, dy: 0 },
          { t: 'point', p: [-40, 0], label: 'T', dx: -12, dy: 0 },
          { t: 'point', p: [0, -9], label: 'U', dx: 0, dy: 14 },
          { t: 'point', p: [40, 0], label: 'V', dx: 12, dy: 0 },
          { t: 'point', p: [0, 9], label: 'W', dx: 0, dy: -12 },
        ],
      },
      choices: ['$196$', '$164$', '$41$', '$328$'],
      answer: 1,
      solution:
        'The half-diagonals $\\frac{18}{2} = 9$ and $\\frac{80}{2} = 40$ are the legs of the right triangles inside, so each side is $\\sqrt{81 + 1600} = \\sqrt{1681} = 41$ m — the $9$-$40$-$41$ triple — and the outline needs $4 \\times 41 = 164$ m of chalk ✓. Check a second, independent way with a difference of squares: $41^2 - 40^2 = (41 - 40)(41 + 40) = 81 = 9^2$, confirming the triple before multiplying by four ✓. (The choice $196$ is TREATING THE DIAGONALS AS SIDES, $2(18 + 80)$ ✗; $41$ is STOPPING AT ONE SIDE ✗; $328$ is USING THE FULL DIAGONALS, $4\\sqrt{18^2 + 80^2} = 4 \\times 82$ ✗.)',
    },
    {
      q: 'A rhombus-shaped picture frame has diagonals of $20$ cm and $48$ cm, as shown. What total length of molding runs around the frame?',
      fig: {
        w: 420,
        view: [-26.5, -12.5, 26.5, 12.5],
        elems: [
          { t: 'poly', pts: [[-24, 0], [0, -10], [24, 0], [0, 10]], fill: false },
          { t: 'seg', a: [-24, 0], b: [24, 0], dash: true },
          { t: 'seg', a: [0, -10], b: [0, 10], dash: true },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 10], s: 1.0 },
          { t: 'label', p: [-12, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [0, -5], text: '20', dx: 14, dy: 0 },
          { t: 'point', p: [-24, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -10], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [24, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 10], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$136$', '$26$', '$208$', '$104$'],
      answer: 3,
      solution:
        'Half-diagonals $10$ and $24$ make each side $\\sqrt{100 + 576} = \\sqrt{676} = 26$ cm, so the molding totals $4 \\times 26 = 104$ cm ✓. Check a second, independent way by scaling: $10$ and $24$ are twice $5$ and $12$, so the hypotenuse is twice $13$ — the $5$-$12$-$13$ triple doubled to $26$, and $4 \\times 26 = 104$ again ✓. Guard: $10^2 + 24^2 = 676 = 26^2$ ✓. (The choice $136$ is TREATING THE DIAGONALS AS SIDES, $2(20 + 48)$ ✗; $26$ is STOPPING AT ONE SIDE ✗; $208$ is USING THE FULL DIAGONALS, $4\\sqrt{20^2 + 48^2} = 4 \\times 52$ ✗.)',
    },
    {
      q: 'The diagonals of the rhombus below measure $32$ and $24$. Find the distance all the way around it.',
      fig: {
        w: 340,
        view: [-18, -14, 18, 14],
        elems: [
          { t: 'poly', pts: [[-16, 0], [0, -12], [16, 0], [0, 12]], fill: false },
          { t: 'seg', a: [-16, 0], b: [16, 0], dash: true },
          { t: 'seg', a: [0, -12], b: [0, 12], dash: true },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12], s: 0.9 },
          { t: 'label', p: [-8, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [0, -6], text: '24', dx: 14, dy: 0 },
          { t: 'point', p: [-16, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [0, -12], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [16, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [0, 12], label: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$80$', '$112$', '$20$', '$160$'],
      answer: 0,
      solution:
        'The half-diagonals $16$ and $12$ are the legs of each interior right triangle, so a side is $\\sqrt{256 + 144} = \\sqrt{400} = 20$, and the perimeter is $4 \\times 20 = 80$ ✓. Check a second, independent way by scaling: $16$ and $12$ are four times $4$ and $3$, so the hypotenuse is four times $5$ — the $3$-$4$-$5$ triple scaled to $20$, giving $80$ around ✓. Guard: $16^2 + 12^2 = 400 = 20^2$ ✓. (The choice $112$ is TREATING THE DIAGONALS AS SIDES, $2(32 + 24)$ ✗; $20$ is STOPPING AT ONE SIDE ✗; $160$ is USING THE FULL DIAGONALS, $4\\sqrt{32^2 + 24^2} = 4 \\times 40$ ✗.)',
    },
  ],
  // s7 — side and height → area (figure).
  [
    {
      q: 'A rhombus-shaped sticker has sides of $9$ cm, and the perpendicular distance between one pair of its opposite edges is $7$ cm, as shown. What is the area of the sticker?',
      fig: {
        view: [-1, -1.5, 15.7, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [14.6569, 7], [5.6569, 7]], fill: false },
          { t: 'seg', a: [5.6569, 7], b: [5.6569, 0], dash: true },
          { t: 'right', at: [5.6569, 0], from: [9, 0], to: [5.6569, 7] },
          { t: 'tick', a: [0, 0], b: [9, 0], n: 1 },
          { t: 'tick', a: [9, 0], b: [14.6569, 7], n: 1 },
          { t: 'tick', a: [5.6569, 7], b: [14.6569, 7], n: 1 },
          { t: 'tick', a: [0, 0], b: [5.6569, 7], n: 1 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [5.6569, 3.5], text: '7', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [14.6569, 7], label: 'M', dx: 10, dy: -8 },
          { t: 'point', p: [5.6569, 7], label: 'N', dx: -10, dy: -8 },
        ],
      },
      choices: ['$81$', '$31.5$', '$63$', '$36$'],
      answer: 2,
      solution:
        'A rhombus is a parallelogram, so Area $=$ base $\\times$ height $= 9 \\times 7 = 63$ square cm ✓. Check a second, independent way by cut-and-slide: slice off the overhanging triangle at one end and slide it to the other end; the rhombus reassembles into a $9$-by-$7$ rectangle of area $63$ ✓. (The choice $81$ is SQUARING THE SIDE, which is only right when the rhombus is a square ✗; $31.5$ is HALVING AS IF THE GIVENS WERE DIAGONALS ✗; $36$ is ANSWERING THE PERIMETER ✗.)',
    },
    {
      q: 'Rhombus $PQRS$ below has all four sides equal to $12$, and the height between two opposite sides is $7$. Find its area.',
      fig: {
        w: 400,
        view: [-1, -1.5, 22.8, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [21.7468, 7], [9.7468, 7]], fill: false },
          { t: 'seg', a: [9.7468, 7], b: [9.7468, 0], dash: true },
          { t: 'right', at: [9.7468, 0], from: [12, 0], to: [9.7468, 7] },
          { t: 'tick', a: [0, 0], b: [12, 0], n: 1 },
          { t: 'tick', a: [12, 0], b: [21.7468, 7], n: 1 },
          { t: 'tick', a: [9.7468, 7], b: [21.7468, 7], n: 1 },
          { t: 'tick', a: [0, 0], b: [9.7468, 7], n: 1 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [9.7468, 3.5], text: '7', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [21.7468, 7], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [9.7468, 7], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$84$', '$144$', '$42$', '$48$'],
      answer: 0,
      solution:
        'Since a rhombus is a parallelogram, its area is base $\\times$ height $= 12 \\times 7 = 84$ ✓. Check a second, independent way by cut-and-slide: remove the right triangle hanging past one end and slide it across; the shape becomes a $12$-by-$7$ rectangle with area $84$ ✓. (The choice $144$ is SQUARING THE SIDE ✗; $42$ is HALVING AS IF THE GIVENS WERE DIAGONALS ✗; $48$ is ANSWERING THE PERIMETER, $4 \\times 12$ ✗.)',
    },
    {
      q: 'A patio paver is a rhombus with $15$-inch edges, and the strip it spans between two parallel edges is $11$ inches wide, as shown. What area does one paver cover?',
      fig: {
        w: 400,
        view: [-1, -1.5, 26.3, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [25.198, 11], [10.198, 11]], fill: false },
          { t: 'seg', a: [10.198, 11], b: [10.198, 0], dash: true },
          { t: 'right', at: [10.198, 0], from: [15, 0], to: [10.198, 11], s: 0.5 },
          { t: 'tick', a: [0, 0], b: [15, 0], n: 1 },
          { t: 'tick', a: [15, 0], b: [25.198, 11], n: 1 },
          { t: 'tick', a: [10.198, 11], b: [25.198, 11], n: 1 },
          { t: 'tick', a: [0, 0], b: [10.198, 11], n: 1 },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [10.198, 5.5], text: '11', dx: 13, dy: 0 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [25.198, 11], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [10.198, 11], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$225$', '$82.5$', '$60$', '$165$'],
      answer: 3,
      solution:
        'A rhombus is a parallelogram, so its area is base $\\times$ height $= 15 \\times 11 = 165$ square inches ✓. Check a second, independent way by cut-and-slide: cutting the overhang triangle and sliding it to the far end turns the paver into a $15$-by-$11$ rectangle of area $165$ ✓. (The choice $225$ is SQUARING THE SIDE, valid only for a square paver ✗; $82.5$ is HALVING AS IF THE GIVENS WERE DIAGONALS ✗; $60$ is ANSWERING THE PERIMETER, $4 \\times 15$ ✗.)',
    },
  ],
  // s8 — 60° rhombus: the shorter diagonal equals the side (figure).
  [
    {
      q: 'In rhombus $EFGH$, the angle at $E$ measures $60^\\circ$ and each side is $9$, as shown. Find the length of the shorter diagonal $\\overline{FH}$.',
      fig: {
        view: [-9.5, -6, 9.5, 6],
        elems: [
          { t: 'poly', pts: [[-7.7942, 0], [0, -4.5], [7.7942, 0], [0, 4.5]], fill: false },
          { t: 'seg', a: [0, -4.5], b: [0, 4.5], dash: true },
          { t: 'angle', at: [-7.7942, 0], from: [0, -4.5], to: [0, 4.5], r: 1.6, label: '60°' },
          { t: 'label', p: [3.8971, 2.25], text: '9', dx: 10, dy: -8 },
          { t: 'point', p: [-7.7942, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [0, -4.5], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [7.7942, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [0, 4.5], label: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$4.5$', '$9\\sqrt{3}$', '$18$', '$9$'],
      answer: 3,
      solution:
        'The shorter diagonal $\\overline{FH}$ joins the two obtuse ($120^\\circ$) vertices, so it faces the $60^\\circ$ angle at $E$. In triangle $EFH$, $EF = EH = 9$ with a $60^\\circ$ angle between them, so the two base angles share $\\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$ apiece — every angle is $60^\\circ$, the triangle is equilateral, and $FH = 9$ ✓. Check a second, independent way through the half-diagonals: diagonal $\\overline{EG}$ bisects the $60^\\circ$ angle into $30^\\circ$ halves, so half of $FH$ is $9 \\sin 30^\\circ = 4.5$, and $FH = 2 \\times 4.5 = 9$ ✓. (The choice $4.5$ is STOPPING AT THE HALF-DIAGONAL ✗; $9\\sqrt{3}$ is ANSWERING THE LONGER DIAGONAL, $2 \\times 9\\cos 30^\\circ$ ✗; $18$ is DOUBLING THE SIDE with no supporting geometry ✗.)',
    },
    {
      q: 'A rhombus $JKLM$ with side length $14$ has a $60^\\circ$ angle at $J$, as shown. How long is its shorter diagonal $\\overline{KM}$?',
      fig: {
        w: 380,
        view: [-14, -9, 14, 9],
        elems: [
          { t: 'poly', pts: [[-12.1244, 0], [0, -7], [12.1244, 0], [0, 7]], fill: false },
          { t: 'seg', a: [0, -7], b: [0, 7], dash: true },
          { t: 'angle', at: [-12.1244, 0], from: [0, -7], to: [0, 7], r: 2.2, label: '60°' },
          { t: 'label', p: [6.0622, 3.5], text: '14', dx: 10, dy: -8 },
          { t: 'point', p: [-12.1244, 0], label: 'J', dx: -12, dy: 0 },
          { t: 'point', p: [0, -7], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [12.1244, 0], label: 'L', dx: 12, dy: 0 },
          { t: 'point', p: [0, 7], label: 'M', dx: 0, dy: -12 },
        ],
      },
      choices: ['$7$', '$14$', '$14\\sqrt{3}$', '$28$'],
      answer: 1,
      solution:
        'Diagonal $\\overline{KM}$ connects the two $120^\\circ$ vertices, so it spans the $60^\\circ$ angle at $J$. Triangle $JKM$ has $JK = JM = 14$ with a $60^\\circ$ apex, forcing base angles of $\\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$ each — an equilateral triangle, so $KM = 14$ ✓. Check a second, independent way with the half-diagonals: diagonal $\\overline{JL}$ splits the $60^\\circ$ into $30^\\circ$ halves, making half of $KM$ equal to $14 \\sin 30^\\circ = 7$, so $KM = 14$ ✓. (The choice $7$ is STOPPING AT THE HALF-DIAGONAL ✗; $14\\sqrt{3}$ is ANSWERING THE LONGER DIAGONAL ✗; $28$ is DOUBLING THE SIDE ✗.)',
    },
    {
      q: 'A garden trellis cell is a rhombus $TUVW$ with $21$-cm sides and a $60^\\circ$ angle at $T$, as shown. What is the length of the shorter diagonal $\\overline{UW}$?',
      fig: {
        w: 400,
        view: [-20.5, -13, 20.5, 13],
        elems: [
          { t: 'poly', pts: [[-18.1865, 0], [0, -10.5], [18.1865, 0], [0, 10.5]], fill: false },
          { t: 'seg', a: [0, -10.5], b: [0, 10.5], dash: true },
          { t: 'angle', at: [-18.1865, 0], from: [0, -10.5], to: [0, 10.5], r: 3.2, label: '60°' },
          { t: 'label', p: [9.0933, 5.25], text: '21', dx: 10, dy: -8 },
          { t: 'point', p: [-18.1865, 0], label: 'T', dx: -12, dy: 0 },
          { t: 'point', p: [0, -10.5], label: 'U', dx: 0, dy: 14 },
          { t: 'point', p: [18.1865, 0], label: 'V', dx: 12, dy: 0 },
          { t: 'point', p: [0, 10.5], label: 'W', dx: 0, dy: -12 },
        ],
      },
      choices: ['$42$', '$10.5$', '$21$', '$21\\sqrt{3}$'],
      answer: 2,
      solution:
        'The shorter diagonal $\\overline{UW}$ runs between the two obtuse vertices and faces the $60^\\circ$ angle at $T$. In triangle $TUW$, $TU = TW = 21$ with the $60^\\circ$ angle between them, so the base angles are $\\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$ each — all three angles equal, the triangle is equilateral, and $UW = 21$ ✓. Check a second, independent way via the half-diagonals: diagonal $\\overline{TV}$ bisects the $60^\\circ$ into $30^\\circ$, so half of $UW$ is $21 \\sin 30^\\circ = 10.5$, and $UW = 21$ ✓. (The choice $42$ is DOUBLING THE SIDE ✗; $10.5$ is STOPPING AT THE HALF-DIAGONAL ✗; $21\\sqrt{3}$ is ANSWERING THE LONGER DIAGONAL ✗.)',
    },
  ],
  // s9 — side and one diagonal → area (figure).
  [
    {
      q: 'In the figure, rhombus $WXYZ$ has side length $15$, and diagonal $\\overline{WY}$ measures $24$. What is the area of $WXYZ$?',
      fig: {
        view: [-13.5, -10.5, 13.5, 10.5],
        elems: [
          { t: 'poly', pts: [[-12, 0], [0, -9], [12, 0], [0, 9]], fill: false },
          { t: 'seg', a: [-12, 0], b: [12, 0], dash: true },
          { t: 'seg', a: [0, -9], b: [0, 9], dash: true },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 9], s: 0.7 },
          { t: 'label', p: [-6, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [6, 4.5], text: '15', dx: 10, dy: -8 },
          { t: 'point', p: [-12, 0], label: 'W', dx: -12, dy: 0 },
          { t: 'point', p: [0, -9], label: 'X', dx: 0, dy: 14 },
          { t: 'point', p: [12, 0], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [0, 9], label: 'Z', dx: 0, dy: -12 },
        ],
      },
      choices: ['$216$', '$360$', '$432$', '$180$'],
      answer: 0,
      solution:
        'Half of the known diagonal is $\\frac{24}{2} = 12$, so each right triangle inside has hypotenuse $15$ and leg $12$; the other leg is $\\sqrt{15^2 - 12^2} = \\sqrt{81} = 9$ (the $9$-$12$-$15$ triple, three times $3$-$4$-$5$), so the other diagonal is $18$ and Area $= \\frac{24 \\times 18}{2} = 216$ ✓. Check a second, independent way from the center: the four congruent right triangles have legs $12$ and $9$, each of area $\\frac{12 \\times 9}{2} = 54$, and $4 \\times 54 = 216$ ✓. (The choice $360$ is MULTIPLYING SIDE BY DIAGONAL, which is no area formula ✗; $432$ is FORGETTING THE HALF on $24 \\times 18$ ✗; $180$ is USING THE SIDE AS A DIAGONAL, $\\frac{24 \\times 15}{2}$ ✗.)',
    },
    {
      q: 'Rhombus $EFGH$ below has sides of length $17$, and diagonal $\\overline{FH}$ measures $16$. Find its area.',
      fig: {
        w: 360,
        view: [-17, -10, 17, 10],
        elems: [
          { t: 'poly', pts: [[-15, 0], [0, -8], [15, 0], [0, 8]], fill: false },
          { t: 'seg', a: [-15, 0], b: [15, 0], dash: true },
          { t: 'seg', a: [0, -8], b: [0, 8], dash: true },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8], s: 0.8 },
          { t: 'label', p: [0, -4], text: '16', dx: 14, dy: 0 },
          { t: 'label', p: [7.5, 4], text: '17', dx: 10, dy: -8 },
          { t: 'point', p: [-15, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [0, -8], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [15, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [0, 8], label: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$272$', '$480$', '$240$', '$136$'],
      answer: 2,
      solution:
        'Half of $\\overline{FH}$ is $8$, so each interior right triangle has hypotenuse $17$ and leg $8$; the other leg is $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$ — the $8$-$15$-$17$ triple — so the other diagonal is $30$ and Area $= \\frac{16 \\times 30}{2} = 240$ ✓. Check a second, independent way by summing the four congruent right triangles at the center: each has area $\\frac{8 \\times 15}{2} = 60$, and $4 \\times 60 = 240$ ✓. (The choice $272$ is MULTIPLYING SIDE BY DIAGONAL, $17 \\times 16$ ✗; $480$ is FORGETTING THE HALF on $16 \\times 30$ ✗; $136$ is USING THE SIDE AS A DIAGONAL, $\\frac{17 \\times 16}{2}$ ✗.)',
    },
    {
      q: 'A rhombus-shaped sail $KLMN$ has edges of length $25$, and the batten along diagonal $\\overline{LN}$ measures $30$, as shown. What is the area of the sail?',
      fig: {
        w: 360,
        view: [-22.5, -17, 22.5, 17],
        elems: [
          { t: 'poly', pts: [[-20, 0], [0, -15], [20, 0], [0, 15]], fill: false },
          { t: 'seg', a: [-20, 0], b: [20, 0], dash: true },
          { t: 'seg', a: [0, -15], b: [0, 15], dash: true },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15], s: 1.0 },
          { t: 'label', p: [0, -7.5], text: '30', dx: 14, dy: 0 },
          { t: 'label', p: [10, 7.5], text: '25', dx: 10, dy: -8 },
          { t: 'point', p: [-20, 0], label: 'K', dx: -12, dy: 0 },
          { t: 'point', p: [0, -15], label: 'L', dx: 0, dy: 14 },
          { t: 'point', p: [20, 0], label: 'M', dx: 12, dy: 0 },
          { t: 'point', p: [0, 15], label: 'N', dx: 0, dy: -12 },
        ],
      },
      choices: ['$750$', '$600$', '$1200$', '$375$'],
      answer: 1,
      solution:
        'Half of the batten is $\\frac{30}{2} = 15$, so each right triangle inside has hypotenuse $25$ and leg $15$; the other leg is $\\sqrt{25^2 - 15^2} = \\sqrt{400} = 20$ (the $15$-$20$-$25$ triple, five times $3$-$4$-$5$), so the other diagonal is $40$ and Area $= \\frac{30 \\times 40}{2} = 600$ ✓. Check a second, independent way from the four congruent right triangles at the center: each has area $\\frac{15 \\times 20}{2} = 150$, and $4 \\times 150 = 600$ ✓. (The choice $750$ is MULTIPLYING SIDE BY DIAGONAL, $25 \\times 30$ ✗; $1200$ is FORGETTING THE HALF on $30 \\times 40$ ✗; $375$ is USING THE SIDE AS A DIAGONAL, $\\frac{25 \\times 30}{2}$ ✗.)',
    },
  ],
  // s10 — area and one diagonal → side length.
  [
    {
      q: 'A rhombus-shaped courtyard has area $864$ square feet, and one of its diagonals measures $36$ feet. How long is each side of the courtyard?',
      choices: ['$60$', '$30$', '$48$', '$24$'],
      answer: 1,
      solution:
        'From Area $= \\frac{d_1 d_2}{2}$: $864 = \\frac{36 \\cdot d_2}{2} = 18\\,d_2$, so $d_2 = 48$. The half-diagonals are $18$ and $24$, and the side is $\\sqrt{18^2 + 24^2} = \\sqrt{324 + 576} = \\sqrt{900} = 30$ feet — the $3$-$4$-$5$ triple scaled by six ✓. Check a second, independent way through one triangle at the center: each of the four congruent right triangles holds $\\frac{864}{4} = 216$ of the area, and $216 = \\frac{18 \\times \\ell}{2}$ gives the other leg $\\ell = 24$, so the hypotenuse is $\\sqrt{324 + 576} = 30$ again ✓. (The choice $60$ is USING THE FULL DIAGONALS $36$ and $48$ as legs ✗; $48$ is STOPPING AT THE OTHER DIAGONAL ✗; $24$ is MISSING THE $2$, computing the other diagonal as $\\frac{864}{36} = 24$ ✗.)',
    },
    {
      q: 'A stained-glass pane in the shape of a rhombus has area $384$ square inches, and its shorter diagonal measures $24$ inches. Find the length of one edge of the pane.',
      choices: ['$40$', '$32$', '$16$', '$20$'],
      answer: 3,
      solution:
        'From Area $= \\frac{d_1 d_2}{2}$: $384 = \\frac{24 \\cdot d_2}{2} = 12\\,d_2$, so $d_2 = 32$. The half-diagonals $12$ and $16$ are four times $3$ and $4$, so the edge is four times $5$: $\\sqrt{144 + 256} = \\sqrt{400} = 20$ inches ✓. Check a second, independent way through one triangle at the center: each of the four congruent right triangles carries $\\frac{384}{4} = 96$ of the area, and $96 = \\frac{12 \\times \\ell}{2}$ gives $\\ell = 16$, so the hypotenuse is $\\sqrt{144 + 256} = 20$ again ✓. (The choice $40$ is USING THE FULL DIAGONALS $24$ and $32$ as legs ✗; $32$ is STOPPING AT THE OTHER DIAGONAL ✗; $16$ is MISSING THE $2$, computing the other diagonal as $\\frac{384}{24} = 16$ ✗.)',
    },
    {
      q: 'A rhombus-shaped pond covers $480$ square meters, and the footbridge along one of its diagonals is $20$ meters long. How long is each side of the pond?',
      choices: ['$26$', '$52$', '$48$', '$24$'],
      answer: 0,
      solution:
        'From Area $= \\frac{d_1 d_2}{2}$: $480 = \\frac{20 \\cdot d_2}{2} = 10\\,d_2$, so $d_2 = 48$. The half-diagonals are $10$ and $24$ — twice $5$ and $12$ — so the side is twice $13$: $\\sqrt{100 + 576} = \\sqrt{676} = 26$ meters ✓. Check a second, independent way through one triangle at the center: each of the four congruent right triangles holds $\\frac{480}{4} = 120$ of the area, and $120 = \\frac{10 \\times \\ell}{2}$ gives $\\ell = 24$, so the hypotenuse is $\\sqrt{100 + 576} = 26$ again ✓. (The choice $52$ is USING THE FULL DIAGONALS $20$ and $48$ as legs ✗; $48$ is STOPPING AT THE OTHER DIAGONAL ✗; $24$ is MISSING THE $2$, computing the other diagonal as $\\frac{480}{20} = 24$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.4': s84,
  },
}
