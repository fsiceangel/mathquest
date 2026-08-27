// Introduction to Geometry chapter 8 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet's phrasing shape: bare
//    degree/number strings for slots 1 and 5, the three-angle list for
//    slot 3, and the base's compound sentences for slots 2, 4, 6, 7, 8,
//    9, and 10 (e.g. 'Midsegment $= 13$; Area $= 78$').
//  - Every answer was worked twice by two genuinely different routes, and
//    the routes had to agree before the key was written: the 360-degree
//    subtraction vs. a closing-the-sum or deficit check (slot 1); midsegment
//    times height vs. the raw area formula plus the leg-midpoint coordinates
//    (slot 2); opposite/consecutive angle rules vs. the 360 total (slot 3);
//    Pythagoras on half-diagonals vs. the four-triangle dissection (slots 4
//    and 9); the Pythagorean sum vs. a difference-of-squares factoring
//    (slot 5); s^2 vs. the d^2/2 diagonal formula (slot 6); the symmetric
//    overhang vs. a rectangle-plus-triangles dissection (slot 7); the
//    named counterexample vs. a property-count or ASA argument (slot 8);
//    and the two-foot system vs. re-checking the height from BOTH legs
//    (slot 10).
//  - Figures are coordinate-exact and were verified numerically, never
//    eyeballed. Slot 1's quadrilaterals were built by exterior-angle
//    turning: (5.31, 3.53)/(-0.33, 2.33) realizes 98-79-89-94,
//    (4.05, 4.82)/(-0.92, 2.29) realizes 112-68-85-95, and
//    (5.19, 3.51)/(-0.54, 2.81) realizes 101-77-96-86, each within about
//    a tenth of a degree. Slot 2's dashed midsegments join true leg
//    midpoints ((2, 3)-(15, 3), (2, 2)-(17, 2), (3, 3)-(20, 3)). Slot 7
//    and slot 10 legs re-check by distance (e.g. (10, 0) to (4, 8) is 10;
//    (0, 0) to (5, 12) is 13; (27, 0) to (21, 8) is 10). Slot 8 lane 1's
//    diagonals share the exact midpoint (4, 1.5).
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Pin deviation, reported in the authoring report: slot 6 lane 2 was
//    pinned as perimeter 24 giving area 36 and diagonal 6√2, but that is
//    the exact square (side 6, area 36, diagonal 6√2) worked as Section
//    8.6's first learn example, which the house rules forbid restating;
//    this lane uses perimeter 56 giving area 196 and diagonal 14√2, both
//    values absent from the round-2 reserved list.
//  - Lanes that brush against base content, flagged in the authoring
//    report: slot 4 lane 1 shares diagonals 18/24 with Section 8.4
//    problem 5 (which asks only the side); slot 4 lane 2 is the 10-by-24
//    rhombus of Section 8.4's third learn example and of base worksheet
//    slot 9, with the givens inverted (both diagonals in, side out);
//    slot 9 lane 2 shares its rhombus (diagonals 9 and 12, side 7.5) with
//    Section 8.4 problem 10, given a different diagonal; slot 10 lane 2
//    reuses legs 10/17 and height 8 from the base slot under new bases.
//  - Traps that run through the file, named in CAPS at the end of each
//    solution: USING THE TRIANGLE TOTAL, STOPPING AT THE SUM, SKIPPING THE
//    HALVING, MULTIPLYING BASE BY BASE, SUPPLEMENTING THE OPPOSITE ANGLE,
//    USING NINETY INSTEAD OF ONE-EIGHTY, USING THE FULL DIAGONALS,
//    FORGETTING THE HALF IN THE AREA, ADDING THE SIDES, ANSWERING WITH THE
//    AREA, HALVING INSTEAD OF QUARTERING, DOUBLING FOR THE DIAGONAL, USING
//    THE LEG AS THE HEIGHT, TAKING THE FULL OVERHANG, WRITING THE INVERSE
//    INSTEAD, ASSUMING THE CONVERSE IS FREE, DROPPING THE FACTOR OF TWO,
//    SPLITTING THE OVERHANG EVENLY, and USING A LEG AS THE HEIGHT.

const worksheet = [
  // slot 1 — three angles of a quadrilateral, find the fourth (figure).
  //          Lanes: 98-79-89 -> 94; 112-68-85 -> 95; 101-77-96 -> 86.
  [
    {
      q: 'In quadrilateral $PQRS$, the angles at $P$, $Q$, and $R$ measure $98^\\circ$, $79^\\circ$, and $89^\\circ$, as shown. Find the angle at $S$.',
      fig: {
        view: [-1.5, -1.5, 7, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [5.31, 3.53], [-0.33, 2.33]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-0.33, 2.33], r: 0.9, label: '98' },
          { t: 'angle', at: [6, 0], from: [5.31, 3.53], to: [0, 0], r: 0.9, label: '79' },
          { t: 'angle', at: [5.31, 3.53], from: [-0.33, 2.33], to: [6, 0], r: 0.8, label: '89' },
          { t: 'angle', at: [-0.33, 2.33], from: [0, 0], to: [5.31, 3.53], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [5.31, 3.53], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-0.33, 2.33], label: 'S', dx: -10, dy: -8 },
        ],
      },
      answer: '$94^\\circ$',
      solution:
        'Any quadrilateral splits along a diagonal into two triangles, so its interior angles total $2 \\times 180^\\circ = 360^\\circ$. The three known angles sum to $98^\\circ + 79^\\circ + 89^\\circ = 266^\\circ$, leaving $\\angle S = 360^\\circ - 266^\\circ = 94^\\circ$. Second route, by closing the books: $98 + 79 + 89 + 94 = 360$ ✓, and the answer is plausible on sight — all four angles hover near $90^\\circ$, so the shape is close to a rectangle, which the figure confirms. USING THE TRIANGLE TOTAL subtracts from $180^\\circ$ and goes negative ✗ — four sides carry two triangles’ worth of angle, not one. STOPPING AT THE SUM hands in $266^\\circ$ ✗, a running total with the question still unanswered.',
    },
    {
      q: 'A four-sided park has corners $W$, $X$, $Y$, and $Z$. Surveyors measure the corner angles at $W$, $X$, and $Y$ as $112^\\circ$, $68^\\circ$, and $85^\\circ$. What must the angle at corner $Z$ be?',
      fig: {
        view: [-2, -1.5, 7, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [4.05, 4.82], [-0.92, 2.29]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-0.92, 2.29], r: 0.9, label: '112' },
          { t: 'angle', at: [6, 0], from: [4.05, 4.82], to: [0, 0], r: 0.9, label: '68' },
          { t: 'angle', at: [4.05, 4.82], from: [-0.92, 2.29], to: [6, 0], r: 0.8, label: '85' },
          { t: 'angle', at: [-0.92, 2.29], from: [0, 0], to: [4.05, 4.82], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [4.05, 4.82], label: 'Y', dx: 10, dy: -8 },
          { t: 'point', p: [-0.92, 2.29], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      answer: '$95^\\circ$',
      solution:
        'The four corner angles of any quadrilateral add to $360^\\circ$ — one straight path across the park cuts it into two triangles worth $180^\\circ$ each. The measured corners give $112^\\circ + 68^\\circ + 85^\\circ = 265^\\circ$, so $\\angle Z = 360^\\circ - 265^\\circ = 95^\\circ$. Second route in two supplements: $112^\\circ + 68^\\circ = 180^\\circ$ exactly, so the remaining pair must also total $180^\\circ$, and $180^\\circ - 85^\\circ = 95^\\circ$ ✓ — a shortcut that opens up only because the first two corners happen to be supplementary. USING THE TRIANGLE TOTAL tries $180^\\circ - 265^\\circ$ ✗ and produces a negative “angle.” STOPPING AT THE SUM reports $265^\\circ$ ✗, a subtotal rather than a corner of the park.',
    },
    {
      q: 'The angles of quadrilateral $JKLM$ at $J$, $K$, and $L$ come out to $101^\\circ$, $77^\\circ$, and $96^\\circ$. Without measuring, find the angle at $M$.',
      fig: {
        view: [-1.8, -1.5, 7, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [5.19, 3.51], [-0.54, 2.81]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-0.54, 2.81], r: 0.9, label: '101' },
          { t: 'angle', at: [6, 0], from: [5.19, 3.51], to: [0, 0], r: 0.9, label: '77' },
          { t: 'angle', at: [5.19, 3.51], from: [-0.54, 2.81], to: [6, 0], r: 0.8, label: '96' },
          { t: 'angle', at: [-0.54, 2.81], from: [0, 0], to: [5.19, 3.51], r: 0.7, label: '?' },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [5.19, 3.51], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [-0.54, 2.81], label: 'M', dx: -10, dy: -8 },
        ],
      },
      answer: '$86^\\circ$',
      solution:
        'The interior angles of a quadrilateral always total $360^\\circ$: a diagonal slices the shape into two triangles, and their $180^\\circ$ apiece accounts for every corner. Here $101^\\circ + 77^\\circ + 96^\\circ = 274^\\circ$, so $\\angle M = 360^\\circ - 274^\\circ = 86^\\circ$. Second route by deficit bookkeeping: measured against $90^\\circ$, the knowns run $+11$, $-13$, and $+6$, a net of $+4$, so the fourth angle must sit $4$ below $90^\\circ$ — that is $86^\\circ$ ✓, and the four angles then land on $360^\\circ$ on the nose ✓. Since every angle is under $180^\\circ$, the quadrilateral has no dent. USING THE TRIANGLE TOTAL treats the shape as a triangle and subtracts from $180^\\circ$ ✗. STOPPING AT THE SUM files $274^\\circ$ ✗ and never performs the subtraction.',
    },
  ],

  // slot 2 — trapezoid bases + height, find midsegment AND area (figure).
  //          Lanes: 17/9 h6 -> 13 and 78; 19/11 h4 -> 15 and 60;
  //          23/11 h6 -> 17 and 102.
  [
    {
      q: 'The trapezoid shown has bases $17$ and $9$ and height $6$. Find the length of its midsegment and its area.',
      fig: {
        view: [-1, -1.5, 18, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [13, 6], [4, 6]], fill: false },
          { t: 'seg', a: [2, 3], b: [15, 3], dash: true },
          { t: 'seg', a: [4, 6], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [17, 0], to: [4, 6] },
          { t: 'label', p: [8.5, 0], text: '17', dx: 0, dy: 14 },
          { t: 'label', p: [8.5, 6], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [4, 1.2], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [8.5, 3], text: '?', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [17, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [13, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [4, 6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Midsegment $= 13$; Area $= 78$',
      solution:
        'The midsegment averages the bases: $\\frac{17 + 9}{2} = 13$. The area is the midsegment times the height: $13 \\times 6 = 78$. Second route without the midsegment: Area $= \\frac{b_1 + b_2}{2} \\cdot h = \\frac{26}{2} \\times 6 = 78$ ✓, and the figure agrees — the legs run from $(0, 0)$ to $(4, 6)$ and from $(17, 0)$ to $(13, 6)$, and their midpoints $(2, 3)$ and $(15, 3)$ sit exactly $13$ apart ✓. Sanity: $9 < 13 < 17$, the midsegment landing between the bases as it must. SKIPPING THE HALVING reports a midsegment of $26$ and an area of $156$ ✗ — an average needs its divide-by-two. MULTIPLYING BASE BY BASE computes $17 \\times 9$ ✗, a product with no geometric meaning here.',
    },
    {
      q: 'A canal cross-section is a trapezoid with bases $19$ and $11$ and depth (height) $4$, as in the figure. Determine the midsegment and the area of the cross-section.',
      fig: {
        view: [-1, -1.5, 20, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [19, 0], [15, 4], [4, 4]], fill: false },
          { t: 'seg', a: [2, 2], b: [17, 2], dash: true },
          { t: 'seg', a: [4, 4], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [19, 0], to: [4, 4] },
          { t: 'label', p: [9.5, 0], text: '19', dx: 0, dy: 14 },
          { t: 'label', p: [9.5, 4], text: '11', dx: 0, dy: -10 },
          { t: 'label', p: [4, 0.8], text: '4', dx: 12, dy: 0 },
          { t: 'label', p: [9.5, 2], text: '?', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [19, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Midsegment $= 15$; Area $= 60$',
      solution:
        'Average the bases for the midsegment: $\\frac{19 + 11}{2} = 15$; then the area is that average times the depth, $15 \\times 4 = 60$. Second route by rectangle trade: a trapezoid holds exactly as much as the rectangle built on its midsegment, so picture a $15 \\times 4$ rectangle — area $60$ ✓ — and the coordinates concur, with the leg midpoints $(2, 2)$ and $(17, 2)$ lying $15$ apart ✓. The between test passes too: $11 < 15 < 19$ ✓. SKIPPING THE HALVING turns in $30$ and $120$ ✗, both exactly double the truth. MULTIPLYING BASE BY BASE offers $19 \\times 11 = 209$ ✗ — bases pair with heights, never with each other.',
    },
    {
      q: 'A garden bed is shaped like the trapezoid in the figure, with parallel edges $23$ and $11$ set $6$ apart. How long is the bed’s midsegment, and what is its area?',
      fig: {
        view: [-1, -1.5, 24, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [23, 0], [17, 6], [6, 6]], fill: false },
          { t: 'seg', a: [3, 3], b: [20, 3], dash: true },
          { t: 'seg', a: [6, 6], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [23, 0], to: [6, 6] },
          { t: 'label', p: [11.5, 0], text: '23', dx: 0, dy: 14 },
          { t: 'label', p: [11.5, 6], text: '11', dx: 0, dy: -10 },
          { t: 'label', p: [6, 1.2], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [11.5, 3], text: '?', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [23, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [17, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [6, 6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Midsegment $= 17$; Area $= 102$',
      solution:
        'Midsegment first: $\\frac{23 + 11}{2} = 17$. Area next: midsegment times height, $17 \\times 6 = 102$. Second route straight from the area formula: $\\frac{23 + 11}{2} \\cdot 6 = 17 \\times 6 = 102$ ✓ — the same halving met in a different order — and in the figure the leg midpoints $(3, 3)$ and $(20, 3)$ measure $17$ apart ✓. The result sits between the bases, $11 < 17 < 23$ ✓. SKIPPING THE HALVING doubles both answers to $34$ and $204$ ✗. MULTIPLYING BASE BY BASE tries $23 \\times 11 = 253$ ✗, which is not any measurement of this bed.',
    },
  ],

  // slot 3 — one parallelogram angle, find the other three (figure).
  //          Lanes: 81 -> 99/81/99; 58 -> 122/58/122; 87 -> 93/87/93.
  [
    {
      q: 'In parallelogram $EFGH$, the angle at $E$ measures $81^\\circ$, as shown. Find the other three angles.',
      fig: {
        view: [-1, -1.5, 8, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6.64, 4.05], [0.64, 4.05]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0.64, 4.05], r: 1, label: '81' },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [6.64, 4.05], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0.64, 4.05], label: 'H', dx: -10, dy: -8 },
        ],
      },
      answer: '$99^\\circ$, $81^\\circ$, and $99^\\circ$',
      solution:
        'Opposite angles of a parallelogram match, so $\\angle G = 81^\\circ$. Consecutive angles are supplementary — each pair sits between the same two parallel sides, making them same-side interior angles — so $\\angle F = \\angle H = 180^\\circ - 81^\\circ = 99^\\circ$. Second route through the total: the four angles must sum to $360^\\circ$, and $81 + 99 + 81 + 99 = 360$ ✓; with two equal pairs, the two values must average $90^\\circ$, and $\\frac{81 + 99}{2} = 90$ ✓. SUPPLEMENTING THE OPPOSITE ANGLE makes $\\angle G = 99^\\circ$ ✗ — opposite angles are twins, not supplements; only the neighbors flip. USING NINETY INSTEAD OF ONE-EIGHTY produces $9^\\circ$ ✗, mistaking supplementary for complementary.',
    },
    {
      q: 'One corner of a parallelogram-shaped table top measures $58^\\circ$. What are the measures of the remaining three corners?',
      fig: {
        view: [-1, -1.5, 9.5, 5.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [8.39, 3.82], [2.39, 3.82]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [2.39, 3.82], r: 1, label: '58' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8.39, 3.82], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [2.39, 3.82], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$122^\\circ$, $58^\\circ$, and $122^\\circ$',
      solution:
        'The corner across the table matches the given one: opposite angles of a parallelogram are equal, so it is also $58^\\circ$. The two corners adjacent to the given one are supplementary to it — same-side interior angles between parallel edges — so each measures $180^\\circ - 58^\\circ = 122^\\circ$. Second route through the total: $58 + 122 + 58 + 122 = 360$ ✓, exactly the quadrilateral angle sum, and the two distinct values average $\\frac{58 + 122}{2} = 90$ ✓ as a supplementary pair must. SUPPLEMENTING THE OPPOSITE ANGLE hands the far corner $122^\\circ$ ✗ and breaks the $360^\\circ$ total. USING NINETY INSTEAD OF ONE-EIGHTY reports neighbors of $32^\\circ$ ✗ — complements have no business in a parallelogram.',
    },
    {
      q: 'In parallelogram $JKLM$ shown, $\\angle J = 87^\\circ$. Determine $\\angle K$, $\\angle L$, and $\\angle M$.',
      fig: {
        view: [-1, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6.21, 3.99], [0.21, 3.99]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0.21, 3.99], r: 1, label: '87' },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [6.21, 3.99], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0.21, 3.99], label: 'M', dx: -10, dy: -8 },
        ],
      },
      answer: '$93^\\circ$, $87^\\circ$, and $93^\\circ$',
      solution:
        '$\\angle L$ sits opposite $\\angle J$, so $\\angle L = 87^\\circ$. Both $\\angle K$ and $\\angle M$ are consecutive to $\\angle J$, hence supplementary to it: each is $180^\\circ - 87^\\circ = 93^\\circ$. Second route by bookkeeping: the total $87 + 93 + 87 + 93 = 360$ ✓ matches the quadrilateral angle sum, and since $87^\\circ$ misses a right angle by $3$, its supplement must overshoot by the same $3$ — indeed $93^\\circ$ ✓, so this parallelogram is a near-rectangle leaning ever so slightly. SUPPLEMENTING THE OPPOSITE ANGLE gives $\\angle L = 93^\\circ$ ✗, confusing the twin with the neighbor. USING NINETY INSTEAD OF ONE-EIGHTY answers $3^\\circ$ ✗ — the leftover from $90^\\circ$, not from the straight angle the parallel sides demand.',
    },
  ],

  // slot 4 — rhombus diagonals, find side, perimeter, and area (figure).
  //          Lanes: 18/24 -> 15, 60, 216; 10/24 -> 13, 52, 120;
  //          16/30 -> 17, 68, 240.
  [
    {
      q: 'The diagonals of the rhombus shown measure $18$ and $24$. Find its side length, its perimeter, and its area.',
      fig: {
        view: [-13.5, -10.5, 13.5, 10.5],
        elems: [
          { t: 'poly', pts: [[-12, 0], [0, -9], [12, 0], [0, 9]], fill: false },
          { t: 'seg', a: [-12, 0], b: [12, 0], dash: true },
          { t: 'seg', a: [0, -9], b: [0, 9], dash: true },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 9] },
          { t: 'label', p: [-6, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, -4.5], text: '18', dx: 14, dy: 0 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -9], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [12, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 9], label: 'D', dx: 0, dy: -12 },
        ],
      },
      answer: 'Side $= 15$; Perimeter $= 60$; Area $= 216$',
      solution:
        'The diagonals of a rhombus bisect each other at right angles, so each side is the hypotenuse of a right triangle with legs $\\frac{18}{2} = 9$ and $\\frac{24}{2} = 12$: side $= \\sqrt{81 + 144} = \\sqrt{225} = 15$, the $3$-$4$-$5$ triple scaled by $3$. Perimeter: $4 \\times 15 = 60$. Area: $\\frac{18 \\times 24}{2} = 216$. Second route for the area: the diagonals carve the rhombus into four congruent right triangles of area $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$ each, and $4 \\times 54 = 216$ ✓; any one of those four triangles re-checks the side as $15$ by symmetry ✓. USING THE FULL DIAGONALS as legs manufactures a “side” of $30$ and a perimeter of $120$ ✗ — halve first, always. FORGETTING THE HALF IN THE AREA reports $432$ ✗, the area of the surrounding rectangle, twice the rhombus.',
    },
    {
      q: 'A rhombus-shaped kite frame has cross-sticks (its diagonals) of length $28$ and $45$. How long is each edge of the frame, what is the total edge length (perimeter), and how much sail material (area) does the kite need?',
      fig: {
        view: [-25, -16.5, 25, 16.5],
        elems: [
          { t: 'poly', pts: [[-22.5, 0], [0, -14], [22.5, 0], [0, 14]], fill: false },
          { t: 'seg', a: [-22.5, 0], b: [22.5, 0], dash: true },
          { t: 'seg', a: [0, -14], b: [0, 14], dash: true },
          { t: 'right', at: [0, 0], from: [22.5, 0], to: [0, 14] },
          { t: 'label', p: [-11.25, 0], text: '45', dx: 0, dy: 14 },
          { t: 'label', p: [0, -7], text: '28', dx: 14, dy: 0 },
          { t: 'point', p: [-22.5, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [0, -14], label: 'Q', dx: 0, dy: 14 },
          { t: 'point', p: [22.5, 0], label: 'R', dx: 12, dy: 0 },
          { t: 'point', p: [0, 14], label: 'S', dx: 0, dy: -12 },
        ],
      },
      answer: 'Side $= 26.5$; Perimeter $= 106$; Area $= 630$',
      solution:
        'The cross-sticks cut each other in half at right angles, leaving right triangles with legs $\\frac{28}{2} = 14$ and $\\frac{45}{2} = 22.5$. Each edge is the hypotenuse: $\\sqrt{196 + 506.25} = \\sqrt{702.25} = 26.5$ — half of the $28$-$45$-$53$ triple — so the perimeter is $4 \\times 26.5 = 106$. The sail area is $\\frac{28 \\times 45}{2} = 630$. Second route for the area: four congruent right triangles of $\\frac{1}{2} \\cdot 14 \\cdot 22.5 = 157.5$ each give $4 \\times 157.5 = 630$ ✓, and the side re-checks from any one of them: doubling the half-legs gives $28$ and $45$, whose hypotenuse $53$ halves back to $26.5$ ✓. USING THE FULL DIAGONALS builds the edge from $28$ and $45$ and reports $53$ with a perimeter of $212$ ✗ — that hypotenuse spans two edges’ worth of frame. FORGETTING THE HALF IN THE AREA orders $1260$ of material ✗, enough for the whole bounding rectangle.',
    },
    {
      q: 'The diagonals of a rhombus measure $16$ and $30$, as in the figure. Compute its side length, its perimeter, and its area.',
      fig: {
        view: [-16.5, -9.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-15, 0], [0, -8], [15, 0], [0, 8]], fill: false },
          { t: 'seg', a: [-15, 0], b: [15, 0], dash: true },
          { t: 'seg', a: [0, -8], b: [0, 8], dash: true },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
          { t: 'label', p: [-7.5, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [0, -4], text: '16', dx: 14, dy: 0 },
          { t: 'point', p: [-15, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -8], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [15, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 8], label: 'D', dx: 0, dy: -12 },
        ],
      },
      answer: 'Side $= 17$; Perimeter $= 68$; Area $= 240$',
      solution:
        'Half-diagonals first: $\\frac{16}{2} = 8$ and $\\frac{30}{2} = 15$. The perpendicular bisecting diagonals make each side the hypotenuse over those legs: $\\sqrt{64 + 225} = \\sqrt{289} = 17$, the $8$-$15$-$17$ triple. Perimeter: $4 \\times 17 = 68$. Area: $\\frac{16 \\times 30}{2} = 240$. Second route for the area: the four congruent right triangles measure $\\frac{1}{2} \\cdot 8 \\cdot 15 = 60$ apiece, and $4 \\times 60 = 240$ ✓ — and stacking any two of them re-forms half the rhombus, re-checking both side and area ✓. USING THE FULL DIAGONALS computes $\\sqrt{256 + 900} = 34$ for the side and $136$ for the perimeter ✗, double the truth in both places. FORGETTING THE HALF IN THE AREA claims $480$ ✗ — that is the $16 \\times 30$ rectangle the rhombus only half fills.',
    },
  ],

  // slot 5 — rectangle sides, find the diagonal (figure). Lanes:
  //          12 x 35 -> 37; 33 x 56 -> 65; 48 x 55 -> 73.
  [
    {
      q: 'A rectangular gate is $35$ wide and $12$ tall, and a diagonal brace runs corner to corner, as shown. How long is the brace?',
      fig: {
        view: [-1, -1.5, 37, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [35, 12], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [35, 12], dash: true },
          { t: 'right', at: [35, 0], from: [0, 0], to: [35, 12] },
          { t: 'label', p: [17.5, 0], text: '35', dx: 0, dy: 14 },
          { t: 'label', p: [35, 6], text: '12', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [35, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$37$',
      solution:
        'The brace is the hypotenuse of a right triangle whose legs are the gate’s width and height: $d = \\sqrt{35^2 + 12^2} = \\sqrt{1225 + 144} = \\sqrt{1369} = 37$. Second route by difference of squares: if $37$ is right, then $37^2 - 35^2 = (37 - 35)(37 + 35) = 2 \\times 72 = 144 = 12^2$ ✓, which locks in the $12$-$35$-$37$ Pythagorean triple with no big multiplication at all. Sanity: the straight cut must beat the longest side yet lose to walking the two sides in turn, and $35 < 37 < 47$ ✓. ADDING THE SIDES reports $47$ ✗ — that is the trip around the corner, not across it. ANSWERING WITH THE AREA turns in $420$ ✗, square units posing as a length.',
    },
    {
      q: 'A television screen is a rectangle $56$ units wide and $33$ units high. Find the corner-to-corner (diagonal) distance across the screen.',
      fig: {
        view: [-1, -1.5, 58, 35.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [56, 0], [56, 33], [0, 33]], fill: false },
          { t: 'seg', a: [0, 0], b: [56, 33], dash: true },
          { t: 'right', at: [56, 0], from: [0, 0], to: [56, 33] },
          { t: 'label', p: [28, 0], text: '56', dx: 0, dy: 14 },
          { t: 'label', p: [56, 16.5], text: '33', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [56, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [56, 33], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 33], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$65$',
      solution:
        'The diagonal closes a right triangle on the width and the height: $d = \\sqrt{56^2 + 33^2} = \\sqrt{3136 + 1089} = \\sqrt{4225} = 65$. Second route by factoring the claim: $65^2 - 56^2 = (65 - 56)(65 + 56) = 9 \\times 121 = 1089 = 33^2$ ✓ — both factors are perfect squares, so the $33$-$56$-$65$ triple confirms itself almost mentally. A last-digit check agrees too: $3136 + 1089$ ends in $5$, and $65^2 = 4225$ does as well ✓. ADDING THE SIDES advertises an $89$-unit screen ✗, measuring around the corner instead of through it. ANSWERING WITH THE AREA reports $1848$ ✗ — a quantity of screen, not a distance across it.',
    },
    {
      q: 'A rectangular playing field measures $55$ by $48$. A player sprints in a straight line from one corner to the opposite corner. How far does the player run?',
      fig: {
        view: [-1, -1.5, 57, 50],
        elems: [
          { t: 'poly', pts: [[0, 0], [55, 0], [55, 48], [0, 48]], fill: false },
          { t: 'seg', a: [0, 0], b: [55, 48], dash: true },
          { t: 'right', at: [55, 0], from: [0, 0], to: [55, 48] },
          { t: 'label', p: [27.5, 0], text: '55', dx: 0, dy: 14 },
          { t: 'label', p: [55, 24], text: '48', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [55, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [55, 48], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 48], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: '$73$',
      solution:
        'The sprint is the hypotenuse over the field’s two sides: $d = \\sqrt{55^2 + 48^2} = \\sqrt{3025 + 2304} = \\sqrt{5329} = 73$. Second route by difference of squares: $73^2 - 48^2 = (73 - 48)(73 + 48) = 25 \\times 121 = 3025 = 55^2$ ✓ — the factors $25$ and $121$ are both perfect squares, so the $48$-$55$-$73$ triple checks itself. Sanity: longer than the longest side, shorter than the two-side walk, $55 < 73 < 103$ ✓. ADDING THE SIDES logs a $103$-unit run ✗, the route along the boundary. ANSWERING WITH THE AREA submits $2640$ ✗, the whole field rather than one dash across it.',
    },
  ],

  // slot 6 — square perimeter, find area AND diagonal (no figure, matching
  //          the base slot). Lanes: P 40 -> 100 and 10√2; P 56 -> 196 and
  //          14√2 (pin deviation — the pinned P 24 square IS Section 8.6's
  //          first learn example); P 64 -> 256 and 16√2.
  [
    {
      q: 'A square courtyard has perimeter $40$. Find its area and the length of its diagonal.',
      answer: 'Area $= 100$; diagonal $= 10\\sqrt{2}$',
      solution:
        'Each side is $\\frac{40}{4} = 10$, so the area is $10^2 = 100$, and the diagonal — the hypotenuse of a $45$-$45$-$90$ triangle built on two sides — is $10\\sqrt{2} \\approx 14.1$. Second route through the diagonal formula: a square is a rhombus with two equal diagonals, so Area $= \\frac{d^2}{2} = \\frac{(10\\sqrt{2})^2}{2} = \\frac{200}{2} = 100$ ✓ — the two area formulas close the loop. Sanity: the diagonal beats a side but loses to two sides end to end, $10 < 14.1 < 20$ ✓. HALVING INSTEAD OF QUARTERING takes the side to be $20$ ✗ and inflates the area fourfold. DOUBLING FOR THE DIAGONAL claims $d = 20$ ✗ — corner to corner costs $\\sqrt{2}$ sides, not $2$.',
    },
    {
      q: 'A square quilt panel is stitched with $56$ of edging around its border (its perimeter). What are the panel’s area and its corner-to-corner diagonal?',
      answer: 'Area $= 196$; diagonal $= 14\\sqrt{2}$',
      solution:
        'The border spreads evenly over four equal edges, so each edge is $\\frac{56}{4} = 14$. Area: $14^2 = 196$. Diagonal: a diagonal splits the panel into $45$-$45$-$90$ triangles, so $d = 14\\sqrt{2} \\approx 19.8$. Second route in reverse: feeding the diagonal into the rhombus formula gives Area $= \\frac{(14\\sqrt{2})^2}{2} = \\frac{392}{2} = 196$ ✓, matching $s^2$ exactly, and the diagonal passes the size test $14 < 19.8 < 28$ ✓. HALVING INSTEAD OF QUARTERING cuts the border into two pieces of $28$ ✗ and sews a panel four times too large. DOUBLING FOR THE DIAGONAL guesses $28$ ✗ — that is two full edges, which overshoots the true corner-to-corner path.',
    },
    {
      q: 'The fence around a square paddock measures $64$ in total. Find the paddock’s area and the length of a straight path between opposite corners.',
      answer: 'Area $= 256$; diagonal $= 16\\sqrt{2}$',
      solution:
        'Four equal sides share the fence: each is $\\frac{64}{4} = 16$. The area is $16^2 = 256$, and the corner-to-corner path is the hypotenuse of a $45$-$45$-$90$ triangle: $16\\sqrt{2} \\approx 22.6$. Second route through the diagonal formula: Area $= \\frac{d^2}{2} = \\frac{(16\\sqrt{2})^2}{2} = \\frac{512}{2} = 256$ ✓ — the square earns the same area whether measured by side or by diagonal. Sanity: $16 < 22.6 < 32$ ✓, longer than a side, shorter than walking two sides of fence. HALVING INSTEAD OF QUARTERING makes each side $32$ ✗, a paddock four times too roomy. DOUBLING FOR THE DIAGONAL reports $32$ ✗ — the diagonal saves distance over the fence route; it cannot equal it.',
    },
  ],

  // slot 7 — isosceles trapezoid bases + legs, find height AND area
  //          (figure). Lanes: 20/8 legs 10 -> 8 and 112; 24/10 legs 25
  //          -> 24 and 408; 26/14 legs 10 -> 8 and 160.
  [
    {
      q: 'An isosceles trapezoid has bases $20$ and $8$ and legs of length $10$, as shown. Find its height and its area.',
      fig: {
        view: [-11.5, -1.5, 11.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-10, 0], [10, 0], [4, 8], [-4, 8]], fill: false },
          { t: 'seg', a: [4, 8], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [10, 0], to: [4, 8] },
          { t: 'tick', a: [-10, 0], b: [-4, 8], n: 1 },
          { t: 'tick', a: [10, 0], b: [4, 8], n: 1 },
          { t: 'label', p: [-3, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 8], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [7, 4], text: '10', dx: 12, dy: 4 },
          { t: 'point', p: [-10, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-4, 8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Height $= 8$; Area $= 112$',
      solution:
        'Drop a height from $C$; by symmetry the top base overhangs equally on both ends, so its foot lands $\\frac{20 - 8}{2} = 6$ in from $B$. That right triangle has hypotenuse $10$ and base $6$, so the height is $\\sqrt{100 - 36} = \\sqrt{64} = 8$ — the $6$-$8$-$10$ triple. Area: $\\frac{20 + 8}{2} \\times 8 = 14 \\times 8 = 112$. Second route by dissection: the trapezoid is an $8 \\times 8$ middle rectangle plus two $6$-by-$8$ right triangles, $64 + 2 \\times 24 = 112$ ✓, and the figure re-checks the leg, since $(10, 0)$ to $(4, 8)$ measures exactly $10$ ✓. USING THE LEG AS THE HEIGHT computes $14 \\times 10 = 140$ ✗ — the slant is longer than the true drop. TAKING THE FULL OVERHANG puts all $12$ on one side and asks for $\\sqrt{100 - 144}$ ✗, which does not exist.',
    },
    {
      q: 'The isosceles trapezoid in the figure has bases $24$ and $10$ and legs of length $25$. Determine its height and its area.',
      fig: {
        view: [-13.5, -1.5, 13.5, 25.5],
        elems: [
          { t: 'poly', pts: [[-12, 0], [12, 0], [5, 24], [-5, 24]], fill: false },
          { t: 'seg', a: [5, 24], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [12, 0], to: [5, 24] },
          { t: 'tick', a: [-12, 0], b: [-5, 24], n: 1 },
          { t: 'tick', a: [12, 0], b: [5, 24], n: 1 },
          { t: 'label', p: [-3.5, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 24], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [8.5, 12], text: '25', dx: 12, dy: 4 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 24], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-5, 24], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Height $= 24$; Area $= 408$',
      solution:
        'Symmetry splits the base difference evenly: each end overhangs $\\frac{24 - 10}{2} = 7$. The height triangle has hypotenuse $25$ and base $7$, so $h = \\sqrt{625 - 49} = \\sqrt{576} = 24$ — the $7$-$24$-$25$ triple standing on end. Area: $\\frac{24 + 10}{2} \\times 24 = 17 \\times 24 = 408$. Second route by dissection: a $10 \\times 24$ central rectangle plus two right triangles of $\\frac{1}{2} \\cdot 7 \\cdot 24 = 84$ gives $240 + 168 = 408$ ✓, and the figure’s leg from $(12, 0)$ to $(5, 24)$ measures $\\sqrt{49 + 576} = 25$ ✓. Notice how tall this trapezoid is: nearly all of each $25$-leg is vertical. USING THE LEG AS THE HEIGHT computes $17 \\times 25 = 425$ ✗, close but wrong — “close” because the legs are so steep, wrong because a slant never equals the drop. TAKING THE FULL OVERHANG uses $14$ and gets $\\sqrt{625 - 196}$ ✗, an irrational height that contradicts the clean figure.',
    },
    {
      q: 'A water trough’s end panel is an isosceles trapezoid with bases $26$ and $14$ and legs $10$ (see figure). Find the panel’s height and its area.',
      fig: {
        view: [-14.5, -1.5, 14.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-13, 0], [13, 0], [7, 8], [-7, 8]], fill: false },
          { t: 'seg', a: [7, 8], b: [7, 0], dash: true },
          { t: 'right', at: [7, 0], from: [13, 0], to: [7, 8] },
          { t: 'tick', a: [-13, 0], b: [-7, 8], n: 1 },
          { t: 'tick', a: [13, 0], b: [7, 8], n: 1 },
          { t: 'label', p: [-3, 0], text: '26', dx: 0, dy: 14 },
          { t: 'label', p: [0, 8], text: '14', dx: 0, dy: -10 },
          { t: 'label', p: [10, 4], text: '10', dx: 12, dy: 4 },
          { t: 'point', p: [-13, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [13, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-7, 8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Height $= 8$; Area $= 160$',
      solution:
        'The bases differ by $26 - 14 = 12$, and the isosceles symmetry gives each side an equal overhang of $6$. The height triangle has hypotenuse $10$ over a base of $6$, so $h = \\sqrt{100 - 36} = 8$. Area: $\\frac{26 + 14}{2} \\times 8 = 20 \\times 8 = 160$. Second route by dissection: the panel is a $14 \\times 8$ rectangle flanked by two $6$-by-$8$ right triangles, $112 + 2 \\times 24 = 160$ ✓, and the coordinates back the legs up — $(13, 0)$ to $(7, 8)$ is $\\sqrt{36 + 64} = 10$ ✓. Bonus check: the midsegment is $\\frac{26 + 14}{2} = 20$, and $20 \\times 8 = 160$ ✓ again. USING THE LEG AS THE HEIGHT bills for $20 \\times 10 = 200$ of panel ✗. TAKING THE FULL OVERHANG leans the whole $12$ against one leg and demands $\\sqrt{100 - 144}$ ✗ — the panel refuses to exist that way.',
    },
  ],

  // slot 8 — write a converse, judge it, justify (figure). Lanes:
  //          square -> bisecting diagonals (converse FALSE, non-square
  //          parallelogram); rectangle -> equal opposite sides (converse
  //          FALSE, slanted parallelogram); rhombus -> angle-bisecting
  //          diagonals (converse TRUE by double ASA; verified — a kite
  //          fails the hypothesis, so it is no counterexample).
  [
    {
      q: 'Consider the true statement: “If a quadrilateral is a square, then its diagonals bisect each other.” Write the converse, decide whether the converse is true, and support your decision with an example or counterexample.',
      fig: {
        view: [-1, -1.5, 9.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [8, 3], [2, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 3], dash: true },
          { t: 'seg', a: [6, 0], b: [2, 3], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 3], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [2, 3], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [4, 1.5], label: 'M', dx: 2, dy: -12 },
        ],
      },
      answer: 'Converse: “If the diagonals of a quadrilateral bisect each other, then it is a square.” It is FALSE — any non-square parallelogram is a counterexample.',
      solution:
        'The converse swaps hypothesis and conclusion. Diagonals that bisect each other certify a parallelogram — that is the standard parallelogram test — but nothing more. The slanted parallelogram in the figure defeats the converse: its diagonals cross at their shared midpoint $M(4, 1.5)$, the center of the shape, yet its sides are $6$ and $\\sqrt{13}$ and none of its angles is $90^\\circ$, so it is nowhere near a square. Second check, by counting requirements: a square needs diagonals that bisect each other AND are equal AND are perpendicular; the converse’s hypothesis grants only the first of the three, so it cannot force the other two ✗. WRITING THE INVERSE INSTEAD negates both halves and answers a different question ✗. ASSUMING THE CONVERSE IS FREE treats “if $P$ then $Q$” as reversible ✗ — truth does not flow backward on its own.',
    },
    {
      q: 'The statement “If a quadrilateral is a rectangle, then its opposite sides are equal” is true. State its converse, decide whether the converse holds, and justify your decision with an example or counterexample.',
      fig: {
        view: [-1, -1.5, 10.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [9, 3], [2, 3]], fill: false },
          { t: 'tick', a: [0, 0], b: [7, 0], n: 1 },
          { t: 'tick', a: [2, 3], b: [9, 3], n: 1 },
          { t: 'tick', a: [7, 0], b: [9, 3], n: 2 },
          { t: 'tick', a: [0, 0], b: [2, 3], n: 2 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [9, 3], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [2, 3], label: 'S', dx: -10, dy: -8 },
        ],
      },
      answer: 'Converse: “If the opposite sides of a quadrilateral are equal, then it is a rectangle.” It is FALSE — a slanted (non-rectangular) parallelogram is a counterexample.',
      solution:
        'The converse trades places: equal opposite sides move into the hypothesis, rectangle into the conclusion. Equal opposite sides do certify a parallelogram — another of the standard tests — but they say nothing about right angles. The figure’s parallelogram carries opposite sides equal in pairs ($7$ and $\\sqrt{13}$, marked with matching ticks), yet it leans: no angle is $90^\\circ$, so it is no rectangle, and the converse fails ✗. Second check by the family tree: “rectangle” sits strictly inside “parallelogram,” so a property owned by the whole parallelogram family can never single out the rectangle branch. WRITING THE INVERSE INSTEAD produces “if it is not a rectangle, then opposite sides differ” — not the converse, and false for its own reasons ✗. ASSUMING THE CONVERSE IS FREE forgets that a statement and its converse are independent claims ✗.',
    },
    {
      q: 'Consider the true statement: “If a quadrilateral is a rhombus, then its diagonals bisect its vertex angles.” Write the converse, decide whether the converse is true, and justify your decision.',
      fig: {
        view: [-7, -4.6, 7, 4.6],
        elems: [
          { t: 'poly', pts: [[-6, 0], [0, -3.5], [6, 0], [0, 3.5]], fill: false },
          { t: 'seg', a: [-6, 0], b: [6, 0], dash: true },
          { t: 'seg', a: [0, -3.5], b: [0, 3.5], dash: true },
          { t: 'angle', at: [-6, 0], from: [0, -3.5], to: [6, 0], r: 1.5 },
          { t: 'angle', at: [-6, 0], from: [6, 0], to: [0, 3.5], r: 1.5 },
          { t: 'tick', a: [-6, 0], b: [0, -3.5], n: 1 },
          { t: 'tick', a: [0, -3.5], b: [6, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [0, 3.5], n: 1 },
          { t: 'tick', a: [0, 3.5], b: [-6, 0], n: 1 },
          { t: 'point', p: [-6, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -3.5], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [6, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3.5], label: 'D', dx: 0, dy: -12 },
        ],
      },
      answer: 'Converse: “If the diagonals of a quadrilateral bisect its vertex angles, then it is a rhombus.” It is TRUE — the bisecting forces all four sides to be equal.',
      solution:
        'The converse assumes BOTH diagonals split BOTH of their vertex angles evenly. Follow diagonal $\\overline{AC}$: it bisects the angles at $A$ and $C$, so triangles $ABC$ and $ADC$ share side $\\overline{AC}$ and match it with equal angles at each end — congruent by ASA — which forces $AB = AD$ and $CB = CD$. Diagonal $\\overline{BD}$ plays the same game and forces $BA = BC$ and $DA = DC$. Chaining the equalities, all four sides are equal: the quadrilateral is a rhombus ✓. Second check, hunting a counterexample and failing: the kite is the tempting candidate, but only ONE of a kite’s diagonals bisects its vertex angles, so a kite never satisfies the hypothesis and cannot testify against the converse ✓. WRITING THE INVERSE INSTEAD swaps in negations and misses the question ✗. ASSUMING THE CONVERSE IS FREE happens to reach a true sentence this once, but without the ASA argument it is a guess, not a justification ✗.',
    },
  ],

  // slot 9 — rhombus area + one diagonal, find the other diagonal, side,
  //          and perimeter (no figure, matching the base slot). Lanes:
  //          336/14 -> 48, 25, 100; 54/9 -> 12, 7.5, 30 (rhombus shared
  //          with section 8.4 problem 10, given a different diagonal);
  //          384/32 -> 24, 20, 80.
  [
    {
      q: 'A rhombus has area $336$ and one diagonal of length $14$. Find the other diagonal, the side length, and the perimeter.',
      answer: 'Other diagonal $= 48$; side $= 25$; perimeter $= 100$',
      solution:
        'From Area $= \\frac{d_1 d_2}{2}$: $336 = \\frac{14 \\cdot d_2}{2} = 7 d_2$, so $d_2 = \\frac{336}{7} = 48$. The half-diagonals $7$ and $24$ are the legs of the right triangle whose hypotenuse is a side: side $= \\sqrt{49 + 576} = \\sqrt{625} = 25$ — the $7$-$24$-$25$ triple — and the perimeter is $4 \\times 25 = 100$. Second route, rebuilding the rhombus from the answers: diagonals $14$ and $48$ give $\\frac{14 \\times 48}{2} = 336$ ✓, and the four congruent right triangles give $4 \\times \\frac{1}{2} \\cdot 7 \\cdot 24 = 336$ ✓ — the same area from two directions. DROPPING THE FACTOR OF TWO computes $d_2 = \\frac{336}{14} = 24$ ✗, exactly half the true diagonal. USING THE FULL DIAGONALS builds the side from $14$ and $48$ and reports $50$ ✗, dragging along a phantom perimeter of $200$.',
    },
    {
      q: 'The area of a rhombus is $54$, and one of its diagonals measures $9$. Determine the other diagonal, the side length, and the perimeter.',
      answer: 'Other diagonal $= 12$; side $= 7.5$; perimeter $= 30$',
      solution:
        'Unwind the area formula: $54 = \\frac{9 \\cdot d_2}{2} = 4.5\\, d_2$, so $d_2 = \\frac{54}{4.5} = 12$. The half-diagonals $4.5$ and $6$ make each side $\\sqrt{20.25 + 36} = \\sqrt{56.25} = 7.5$, so the perimeter is $4 \\times 7.5 = 30$. Second route by scaling: $4.5$-$6$-$7.5$ is the $3$-$4$-$5$ triple scaled by $1.5$ ✓, and rebuilding the area from the recovered diagonals gives $\\frac{9 \\times 12}{2} = 54$ ✓ — everything closes. Sanity: the side must beat the longer half-diagonal, and $7.5 > 6$ ✓. DROPPING THE FACTOR OF TWO answers $d_2 = 6$ ✗, shrinking the rhombus to half its area. USING THE FULL DIAGONALS computes $\\sqrt{81 + 144} = 15$ for the side ✗ and a doubled perimeter of $60$ ✗.',
    },
    {
      q: 'A rhombus-shaped garden has area $384$, and its longer diagonal measures $32$. Find the shorter diagonal, the side length, and the perimeter of the garden.',
      answer: 'Other diagonal $= 24$; side $= 20$; perimeter $= 80$',
      solution:
        'From Area $= \\frac{d_1 d_2}{2}$: $384 = \\frac{32 \\cdot d_2}{2} = 16 d_2$, so $d_2 = \\frac{384}{16} = 24$ — shorter than $32$ ✓, as the problem promised. The half-diagonals $16$ and $12$ give side $= \\sqrt{256 + 144} = \\sqrt{400} = 20$, the $3$-$4$-$5$ triple scaled by $4$, so the perimeter is $4 \\times 20 = 80$. Second route, reassembling: diagonals $32$ and $24$ rebuild the area as $\\frac{32 \\times 24}{2} = 384$ ✓, and the four right triangles give $4 \\times \\frac{1}{2} \\cdot 16 \\cdot 12 = 384$ ✓. DROPPING THE FACTOR OF TWO reports a shorter diagonal of $12$ ✗ — that is a HALF-diagonal masquerading as a whole one. USING THE FULL DIAGONALS claims a side of $\\sqrt{1024 + 576} = 40$ ✗ and a fence of $160$ ✗, double the garden’s actual border.',
    },
  ],

  // slot 10 — trapezoid with unequal legs, find height AND area (figure).
  //           Lanes: 30/16 legs 13, 15 -> 12 and 276; 27/6 legs 17, 10
  //           -> 8 and 132 (legs and height shared with the base slot,
  //           under different bases); 24/10 legs 13, 15 -> 12 and 204.
  [
    {
      q: 'The trapezoid shown has bases $30$ and $16$ and legs $13$ and $15$. Find its height and its area.',
      fig: {
        view: [-1, -1.5, 32, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [21, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'seg', a: [21, 12], b: [21, 0], dash: true },
          { t: 'right', at: [5, 0], from: [30, 0], to: [5, 12] },
          { t: 'right', at: [21, 0], from: [30, 0], to: [21, 12] },
          { t: 'label', p: [26, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [13, 12], text: '16', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [25.5, 6], text: '15', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [21, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Height $= 12$; Area $= 276$',
      solution:
        'Drop a height from each top vertex. The bases differ by $30 - 16 = 14$, split into $x$ under the $13$-leg and $y$ under the $15$-leg with $x + y = 14$. The two drops are the same height, so $13^2 - x^2 = 15^2 - y^2$, giving $y^2 - x^2 = 56$ and $y - x = \\frac{56}{14} = 4$. Then $y = 9$, $x = 5$, and $h = \\sqrt{169 - 25} = \\sqrt{144} = 12$. Area: $\\frac{30 + 16}{2} \\times 12 = 23 \\times 12 = 276$. Second route, re-checking from the other leg: $\\sqrt{225 - 81} = \\sqrt{144} = 12$ ✓ — both legs must report the same height, and the twin triples $5$-$12$-$13$ and $9$-$12$-$15$ say they do ✓. SPLITTING THE OVERHANG EVENLY sets $x = y = 7$ and gets two clashing heights ✗ — unequal legs never share the difference equally. USING A LEG AS THE HEIGHT multiplies by $13$ or $15$ ✗; slant lengths never measure the gap between parallel bases.',
    },
    {
      q: 'A trapezoid has bases $27$ and $6$ and legs $17$ and $10$, as in the figure. Compute its height and its area.',
      fig: {
        view: [-1, -1.5, 29, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [27, 0], [21, 8], [15, 8]], fill: false },
          { t: 'seg', a: [15, 8], b: [15, 0], dash: true },
          { t: 'seg', a: [21, 8], b: [21, 0], dash: true },
          { t: 'right', at: [15, 0], from: [27, 0], to: [15, 8] },
          { t: 'right', at: [21, 0], from: [27, 0], to: [21, 8] },
          { t: 'label', p: [7, 0], text: '27', dx: 0, dy: 14 },
          { t: 'label', p: [18, 8], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [7.5, 4], text: '17', dx: -12, dy: -4 },
          { t: 'label', p: [24.5, 4], text: '10', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [27, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [21, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [15, 8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Height $= 8$; Area $= 132$',
      solution:
        'The bases differ by $27 - 6 = 21$: call the stretch under the $17$-leg $x$ and the stretch under the $10$-leg $y$, so $x + y = 21$. Equal heights force $17^2 - x^2 = 10^2 - y^2$, so $x^2 - y^2 = 189$ and $x - y = \\frac{189}{21} = 9$. Solving, $x = 15$ and $y = 6$, and the height is $h = \\sqrt{289 - 225} = \\sqrt{64} = 8$. Area: $\\frac{27 + 6}{2} \\times 8 = \\frac{33}{2} \\times 8 = 132$. Second route through the other leg: $\\sqrt{100 - 36} = 8$ ✓ — the $8$-$15$-$17$ and $6$-$8$-$10$ triples meet at the same height, which is exactly what makes the figure consistent ✓. SPLITTING THE OVERHANG EVENLY tries $x = y = 10.5$ and the two legs disagree about the height ✗. USING A LEG AS THE HEIGHT computes $16.5 \\times 17$ or $16.5 \\times 10$ ✗, neither of which is an area of anything drawn here.',
    },
    {
      q: 'A plot of land is a trapezoid with parallel sides $24$ and $10$ and the other two sides $13$ and $15$, as shown. What are its height and its area?',
      fig: {
        view: [-1, -1.5, 26, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [15, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'seg', a: [15, 12], b: [15, 0], dash: true },
          { t: 'right', at: [5, 0], from: [24, 0], to: [5, 12] },
          { t: 'right', at: [15, 0], from: [24, 0], to: [15, 12] },
          { t: 'label', p: [20.5, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [10, 12], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [20, 6], text: '15', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      answer: 'Height $= 12$; Area $= 204$',
      solution:
        'Both heights drop onto the long base and split its excess, $24 - 10 = 14$, into $x$ under the $13$-side and $y$ under the $15$-side: $x + y = 14$. Matching the heights, $13^2 - x^2 = 15^2 - y^2$ gives $y^2 - x^2 = 56$, so $y - x = \\frac{56}{14} = 4$ and the split is $x = 5$, $y = 9$. Height: $\\sqrt{169 - 25} = 12$. Area: $\\frac{24 + 10}{2} \\times 12 = 17 \\times 12 = 204$. Second route from the far side: $\\sqrt{225 - 81} = 12$ ✓ — the $5$-$12$-$13$ and $9$-$12$-$15$ triples share their height, and the figure’s feet at $x = 5$ and $x = 15$ mark the split exactly ✓. SPLITTING THE OVERHANG EVENLY assumes $x = y = 7$ and the two sides quote different heights ✗. USING A LEG AS THE HEIGHT surveys the plot with a slant measurement ✗ — the deed would overstate the land.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  worksheet,
}
