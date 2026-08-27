// Introduction to Geometry chapter 7 — variations for section 7.6
// (Challenging Problems). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice, by two routes that do not share
//    arithmetic: the midsegment theorem against explicit midpoint coordinates,
//    Heron’s formula against a coordinate altitude, r = Area/s against a
//    point-to-line tangency distance, the centroid average against the 2:1
//    slice of a computed median, and h − r against a coordinate subtraction
//    on the axis of symmetry. The two routes must agree before a key is
//    written down.
//  - Every figure was built from its own numbers: apex heights come from a
//    Pythagorean subtraction, altitude feet and incenter coordinates were
//    computed exactly, and every incircle in a figure was checked by a
//    distance-to-side computation.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: DOUBLING INSTEAD OF
//    HALVING, COPYING THE SIDE, SPLITTING THE DIFFERENCE, HALVING TWICE,
//    HALVING AGAIN, COPYING THE MIDSEGMENT, ADDING THE MIDSEGMENT BACK,
//    QUARTERING LIKE AREA, DOUBLING THE LOOP, KEEPING THREE QUARTERS,
//    STOPPING AT THE DEFINITION, DROPPING THE ALTITUDE, DROPPING THE
//    PERPENDICULAR BISECTOR, RESERVING IT FOR EQUILATERAL, DENYING THE
//    MIDPOINT, DEMANDING MEASUREMENTS, IMPORTING THE CENTROID’S 2:1,
//    BISECTING THE WRONG ANGLES, OUTRANKING EVERY SEGMENT, DIVIDING BY THE
//    FULL PERIMETER, ANSWERING THE DIAMETER, ANSWERING AN ALTITUDE, PICKING
//    THE MIDDLE BASE, ANSWERING THE LONGEST ALTITUDE, FORGETTING THE 2,
//    ANSWERING THE SHORTEST SIDE, ANSWERING R ALONE, ANSWERING r ALONE,
//    TAKING THE WHOLE HYPOTENUSE AS R, ANSWERING THE WHOLE MEDIAN, ADDING
//    THE COORDINATES, TAKING A THIRD, SCALING AREA BY THE RATIO, REVERSING
//    THE SHRINK, SPLITTING INTO THREE, KEEPING THE THREE CORNERS, ANSWERING
//    THE INRADIUS, ANSWERING THE WHOLE ALTITUDE, and SUBTRACTING FROM THE
//    LEG.
//  - No two choices inside an item name the same value.

const s76 = [
  // s1 — midsegment from the third side: halve it.
  [
    {
      q: 'Triangle $DEF$ has $DE = 46$. Points $P$ and $Q$ are the midpoints of sides $\\overline{DF}$ and $\\overline{EF}$, and segment $\\overline{PQ}$ is drawn. What is $PQ$?',
      fig: {
        w: 380,
        view: [-2, -2, 48, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [46, 0], [12, 18]], fill: false },
          { t: 'seg', a: [6, 9], b: [29, 9], dash: true },
          { t: 'label', p: [23, 0], text: '46', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [46, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [12, 18], label: 'F', dx: 0, dy: -12 },
          { t: 'point', p: [6, 9], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [29, 9], label: 'Q', dx: 12, dy: 0 },
        ],
      },
      choices: ['$23$', '$92$', '$46$', '$34.5$'],
      answer: 0,
      solution:
        '$P$ and $Q$ are the midpoints of the two sides through $F$, so $\\overline{PQ}$ is a midsegment: parallel to $\\overline{DE}$ and exactly HALF its length, $PQ = \\frac{46}{2} = 23$ ✓. Check a second, independent way with the figure’s coordinates: $D(0, 0)$, $E(46, 0)$, $F(12, 18)$ put the midpoints at $P(6, 9)$ and $Q(29, 9)$; both sit at height $9$, so $\\overline{PQ}$ is horizontal — parallel to $\\overline{DE}$ — with length $29 - 6 = 23$ ✓. (The choice $92$ is DOUBLING INSTEAD OF HALVING, running the theorem backwards ✗; $46$ is COPYING THE SIDE, as if joining midpoints changed nothing ✗; $34.5$ is SPLITTING THE DIFFERENCE between $23$ and $46$, and no theorem hands out three-quarters ✗.)',
    },
    {
      q: 'A footbridge truss is a triangle whose deck measures $44$ ft. A stiffening bar connects the midpoints of the two sloping sides. How long is the bar?',
      fig: {
        w: 380,
        view: [-2, -2, 46, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [44, 0], [14, 16]], fill: false },
          { t: 'seg', a: [7, 8], b: [29, 8], dash: true },
          { t: 'label', p: [22, 0], text: '44', dx: 0, dy: 12 },
          { t: 'label', p: [18, 8], text: '?', dx: 0, dy: -8 },
        ],
      },
      choices: ['$11$ ft', '$44$ ft', '$22$ ft', '$33$ ft'],
      answer: 2,
      solution:
        'The bar joins the midpoints of two sides, so it is a midsegment: parallel to the deck and HALF as long, $\\frac{44}{2} = 22$ ft ✓. Check a second, independent way with coordinates: putting the deck ends at $(0, 0)$ and $(44, 0)$ and the peak at $(14, 16)$, the midpoints are $(7, 8)$ and $(29, 8)$ — the bar runs level at height $8$ with length $29 - 7 = 22$ ✓, parallel to the deck just as the theorem promises. (The choice $11$ ft is HALVING TWICE, shrinking the deck by four ✗; $44$ ft is COPYING THE SIDE ✗; $33$ ft is SPLITTING THE DIFFERENCE between $22$ and $44$ ✗.)',
    },
    {
      q: 'In triangle $RST$, point $M$ is the midpoint of $\\overline{RT}$ and point $N$ is the midpoint of $\\overline{ST}$. Given $RS = 32$, find $MN$.',
      fig: {
        w: 340,
        view: [-2, -2, 34, 16],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [10, 14]], fill: false },
          { t: 'seg', a: [5, 7], b: [21, 7], dash: true },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [32, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [10, 14], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [5, 7], label: 'M', dx: -12, dy: 0 },
          { t: 'point', p: [21, 7], label: 'N', dx: 12, dy: 0 },
        ],
      },
      choices: ['$64$', '$32$', '$8$', '$16$'],
      answer: 3,
      solution:
        'Joining the midpoints of $\\overline{RT}$ and $\\overline{ST}$ builds the midsegment parallel to $\\overline{RS}$, so $MN = \\frac{32}{2} = 16$ ✓ — triangle $MNT$ is similar to triangle $RST$ with ratio $1 : 2$ at the shared vertex $T$, which is where the halving comes from. Check a second, independent way with the figure’s coordinates: $R(0, 0)$, $S(32, 0)$, $T(10, 14)$ give $M(5, 7)$ and $N(21, 7)$, so $MN = 21 - 5 = 16$ ✓, riding level at height $7$. (The choice $64$ is DOUBLING INSTEAD OF HALVING ✗; $32$ is COPYING THE SIDE ✗; $8$ is HALVING TWICE ✗.)',
    },
  ],
  // s2 — midsegment given: double it to recover the parallel side.
  [
    {
      q: 'Kavya joins the midpoints of two sides of a triangular garden plot with a straight path. The path measures $14$ m. How long is the side of the plot the path runs parallel to?',
      choices: ['$28$ m', '$7$ m', '$14$ m', '$42$ m'],
      answer: 0,
      solution:
        'The path is a midsegment, so the parallel side is DOUBLE its length: $2 \\cdot 14 = 28$ m ✓ — going from side to midsegment halves, so going from midsegment to side must undo the halving. Check a second, independent way with a concrete plot: vertices $(0, 0)$, $(28, 0)$, $(8, 10)$ have side midpoints $(4, 5)$ and $(18, 5)$, and the path between them measures $18 - 4 = 14$ m ✓ — exactly the given length, so the $28$ m side is consistent. (The choice $7$ m is HALVING AGAIN, applying the theorem in the wrong direction ✗; $14$ m is COPYING THE MIDSEGMENT ✗; $42$ m is ADDING THE MIDSEGMENT BACK, $28 + 14$, instead of doubling ✗.)',
    },
    {
      q: 'Segment $\\overline{XY}$ joins the midpoints of sides $\\overline{JK}$ and $\\overline{JL}$ of triangle $JKL$, and $XY = 16$. What is $KL$?',
      choices: ['$8$', '$32$', '$16$', '$48$'],
      answer: 1,
      solution:
        '$\\overline{XY}$ is the midsegment parallel to $\\overline{KL}$, so $KL = 2 \\cdot 16 = 32$ ✓. The reason the doubling is forced: triangle $JXY$ is similar to triangle $JKL$ with ratio $1 : 2$ at the shared vertex $J$, so every length in the small triangle is half its partner in the big one. Check a second, independent way with coordinates: $K(0, 0)$, $L(32, 0)$, $J(10, 12)$ put the midpoints at $X(5, 6)$ and $Y(21, 6)$, and $XY = 21 - 5 = 16$ ✓ — the given data reappears, so $KL = 32$ closes the picture. (The choice $8$ is HALVING AGAIN when the theorem calls for doubling ✗; $16$ is COPYING THE MIDSEGMENT ✗; $48$ is ADDING THE MIDSEGMENT BACK, $32 + 16$ ✗.)',
    },
    {
      q: 'The middle chord of a triangular roof truss joins the midpoints of the two rafters and measures $19$ ft, running parallel to the ceiling beam below it. How long is the ceiling beam?',
      choices: ['$9.5$ ft', '$19$ ft', '$57$ ft', '$38$ ft'],
      answer: 3,
      solution:
        'The chord is a midsegment, so the beam it parallels is TWICE as long: $2 \\cdot 19 = 38$ ft ✓. Check a second, independent way with a concrete truss: beam ends at $(0, 0)$ and $(38, 0)$ with the peak at $(12, 9)$ give rafter midpoints $(6, 4.5)$ and $(25, 4.5)$, so the chord measures $25 - 6 = 19$ ft ✓ — the stated chord length, confirming the $38$ ft beam. (The choice $9.5$ ft is HALVING AGAIN — that shrinks the chord instead of growing it ✗; $19$ ft is COPYING THE MIDSEGMENT ✗; $57$ ft is ADDING THE MIDSEGMENT BACK, $38 + 19$ ✗.)',
    },
  ],
  // s3 — medial-triangle perimeter: half the original.
  [
    {
      q: 'A triangular park has a walking loop around its edge of total length $50$. Joining the midpoints of the three sides marks out an inner triangular loop — the medial triangle. How long is the inner loop?',
      choices: ['$12.5$', '$100$', '$25$', '$37.5$'],
      answer: 2,
      solution:
        'Each side of the medial triangle is a midsegment — half of one side of the park — so the inner loop is half the outer one: $\\frac{50}{2} = 25$ ✓. Check a second, independent way with an explicit park: sides $15$, $16$, $19$ total $50$, and their midsegments measure $7.5$, $8$, $9.5$, which total $25$ ✓ — the halving happens side by side, so it happens to the sum. (The choice $12.5$ is QUARTERING LIKE AREA — areas quarter under a medial step, but perimeters only halve ✗; $100$ is DOUBLING THE LOOP in the wrong direction ✗; $37.5$ is KEEPING THREE QUARTERS, as if only the corners were trimmed ✗.)',
    },
    {
      q: 'A triangle cut from cardstock has perimeter $54$. Mara folds each corner inward along the lines joining the midpoints of the sides, so the creases form the medial triangle. What is the perimeter of the medial triangle?',
      choices: ['$27$', '$13.5$', '$108$', '$40.5$'],
      answer: 0,
      solution:
        'The three creases are the three midsegments, each half of one side of the original, so the medial triangle’s perimeter is $\\frac{54}{2} = 27$ ✓. Check a second, independent way with a concrete triangle: sides $15$, $18$, $21$ total $54$, and the matching midsegments $7.5$, $9$, $10.5$ total $27$ ✓. (The choice $13.5$ is QUARTERING LIKE AREA — the quarter belongs to the area, not the perimeter ✗; $108$ is DOUBLING THE LOOP ✗; $40.5$ is KEEPING THREE QUARTERS of the boundary ✗.)',
    },
    {
      q: 'Triangle $ABC$ has perimeter $62$. Its medial triangle — the triangle whose vertices are the midpoints of the three sides — has what perimeter?',
      choices: ['$15.5$', '$31$', '$124$', '$46.5$'],
      answer: 1,
      solution:
        'Every side of the medial triangle is a midsegment of $ABC$, so each is half of one side of $ABC$ — and halving all three sides halves the total: $\\frac{62}{2} = 31$ ✓. Check a second, independent way with numbers: a triangle with sides $17$, $20$, $25$ has perimeter $62$, and its midsegments $8.5$, $10$, $12.5$ total $31$ ✓. (The choice $15.5$ is QUARTERING LIKE AREA — lengths halve while areas quarter, and the perimeter is a length ✗; $124$ is DOUBLING THE LOOP ✗; $46.5$ is KEEPING THREE QUARTERS ✗.)',
    },
  ],
  // s4 — the isosceles apex segment: four jobs, one segment.
  [
    {
      q: 'A carpenter’s roof frame is an isosceles triangle with equal rafters $CA = CB$. She installs a single brace from the peak $C$ to the midpoint $M$ of the base $\\overline{AB}$. Of the four special segments from $C$ — the median, the altitude, the angle bisector from $C$, and the segment lying along the perpendicular bisector of $\\overline{AB}$ — how many has she installed with this one brace?',
      fig: {
        view: [-1.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 8]], fill: false },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [12, 0], to: [6, 8] },
          { t: 'tick', a: [0, 0], b: [6, 8], n: 1 },
          { t: 'tick', a: [12, 0], b: [6, 8], n: 1 },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 2 },
          { t: 'tick', a: [6, 0], b: [12, 0], n: 2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'M', dx: 8, dy: 14 },
        ],
      },
      choices: [
        'one — the brace is the median and nothing more',
        'two — the median and the angle bisector from $C$, but not the altitude',
        'three — every job except lying on the perpendicular bisector of $\\overline{AB}$',
        'all four — the one brace is at once the median, the altitude, the angle bisector from $C$, and part of the perpendicular bisector of $\\overline{AB}$',
      ],
      answer: 3,
      solution:
        'Fold the frame along the brace: since $CA = CB$ and $MA = MB$, triangles $CMA$ and $CMB$ are congruent by SSS, so $\\angle CMA = \\angle CMB = 90°$ (altitude ✓) and $\\angle ACM = \\angle BCM$ (angle bisector ✓); the brace hits the midpoint by construction (median ✓) and, being perpendicular to $\\overline{AB}$ through its midpoint, it lies along the perpendicular bisector ✓ — all four jobs at once. Check a second, independent way with the figure’s coordinates: $A(0, 0)$, $B(12, 0)$, $C(6, 8)$ make the brace the vertical segment $x = 6$, which passes through the midpoint $(6, 0)$, meets the horizontal base at a right angle, and by symmetry splits the apex angle evenly ✓. (The first choice is STOPPING AT THE DEFINITION, granting only the job used to build the brace ✗; the second is DROPPING THE ALTITUDE the SSS congruence just delivered ✗; the third is DROPPING THE PERPENDICULAR BISECTOR, though perpendicular-through-the-midpoint is its exact definition ✗.)',
    },
    {
      q: 'In triangle $PQR$ with $RP = RQ$, Selin draws only the altitude from $R$, meeting $\\overline{PQ}$ at its foot $F$. Which statement is true?',
      fig: {
        view: [-1.5, -1.5, 19.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [9, 12]], fill: false },
          { t: 'seg', a: [9, 12], b: [9, 0], dash: true },
          { t: 'right', at: [9, 0], from: [18, 0], to: [9, 12] },
          { t: 'tick', a: [0, 0], b: [9, 12], n: 1 },
          { t: 'tick', a: [18, 0], b: [9, 12], n: 1 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [9, 12], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'F', dx: 8, dy: 14 },
        ],
      },
      choices: [
        '$F$ is the midpoint of $\\overline{PQ}$, and $\\overline{RF}$ also bisects $\\angle R$ and lies along the perpendicular bisector of $\\overline{PQ}$',
        '$F$ is the midpoint of $\\overline{PQ}$ only when the triangle is equilateral',
        '$\\overline{RF}$ bisects $\\angle R$, but $F$ lands off the midpoint of $\\overline{PQ}$',
        'nothing further can be concluded without the side lengths',
      ],
      answer: 0,
      solution:
        'Right triangles $RFP$ and $RFQ$ share leg $\\overline{RF}$ and have equal hypotenuses $RP = RQ$, so they are congruent by HL — hence $FP = FQ$ ($F$ is the midpoint ✓) and $\\angle PRF = \\angle QRF$ (the angle bisector ✓); perpendicular through the midpoint makes $\\overline{RF}$ part of the perpendicular bisector of $\\overline{PQ}$ ✓. In an isosceles triangle the four apex segments are one segment wearing four names. Check a second, independent way with the figure’s coordinates: $P(0, 0)$, $Q(18, 0)$, $R(9, 12)$ give $RP = RQ = \\sqrt{81 + 144} = 15$, and the altitude from $R$ drops straight down to $(9, 0)$ — precisely the midpoint of $\\overline{PQ}$ ✓. (The equilateral-only claim is RESERVING IT FOR EQUILATERAL a property every isosceles triangle owns ✗; the off-midpoint claim is DENYING THE MIDPOINT that HL congruence pins down ✗; “nothing further” is DEMANDING MEASUREMENTS when symmetry alone settles it ✗.)',
    },
    {
      q: 'Isosceles triangle $DEF$ has $FD = FE$. Tomas draws the angle bisector from $F$ and claims extra properties come along for free. Which claim is correct?',
      fig: {
        view: [-1.5, -1.5, 17.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [8, 6]], fill: false },
          { t: 'seg', a: [8, 6], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [16, 0], to: [8, 6] },
          { t: 'tick', a: [0, 0], b: [8, 6], n: 1 },
          { t: 'tick', a: [16, 0], b: [8, 6], n: 1 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [8, 6], label: 'F', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'it splits $\\overline{DE}$ in a $2 : 1$ ratio',
        'it must also bisect the angles at $D$ and $E$',
        'it doubles as the median and the altitude from $F$, and runs along the perpendicular bisector of $\\overline{DE}$',
        'it is longer than every other segment in the triangle',
      ],
      answer: 2,
      solution:
        'Let the bisector meet $\\overline{DE}$ at $G$. Triangles $FGD$ and $FGE$ are congruent by SAS ($FD = FE$, $\\angle DFG = \\angle EFG$, shared $\\overline{FG}$), so $GD = GE$ (median ✓) and $\\angle FGD = \\angle FGE = 90°$ (altitude ✓); perpendicular through the midpoint is the definition of the perpendicular bisector of $\\overline{DE}$ ✓. One drawn segment, four job titles. Check a second, independent way with the figure’s coordinates: $D(0, 0)$, $E(16, 0)$, $F(8, 6)$ give $FD = FE = 10$, and by symmetry across the line $x = 8$ the bisector from $F$ is that vertical line — it lands at the midpoint $(8, 0)$, meets $\\overline{DE}$ at a right angle, and bisects the apex angle ✓. (The $2 : 1$ split is IMPORTING THE CENTROID’S $2 : 1$, which lives on medians at the centroid, not here ✗; bisecting the base angles is BISECTING THE WRONG ANGLES — the base angles are equal but uncut ✗; “longer than every other segment” is OUTRANKING EVERY SEGMENT, and in this very figure the bisector measures $6$ while each leg measures $10$ ✗.)',
    },
  ],
  // s5 — scalene sides in, inradius out: Heron, then r = Area/s.
  [
    {
      q: 'A triangle has sides $5$, $29$, and $30$. What is its inradius?',
      fig: {
        w: 400,
        view: [-2, -1.5, 32, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [1.4, 4.8]], fill: false },
          { t: 'circle', c: [3, 2.25], r: 2.25 },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 12 },
          { t: 'label', p: [0.7, 2.4], text: '5', dx: -10, dy: -4 },
          { t: 'label', p: [15.7, 2.4], text: '29', dx: 8, dy: -8 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [1.4, 4.8], label: 'C', dx: -4, dy: -10 },
          { t: 'point', p: [3, 2.25], label: 'I', dx: 10, dy: -2 },
        ],
      },
      choices: ['$1.125$', '$2.25$', '$4.5$', '$4.8$'],
      answer: 1,
      solution:
        'Run the pipeline: $s = \\frac{5 + 29 + 30}{2} = 32$, so Heron gives Area $= \\sqrt{32 \\cdot 27 \\cdot 3 \\cdot 2} = \\sqrt{5184} = 72$, and $r = \\frac{72}{32} = 2.25$ ✓. Check a second, independent way with the figure’s coordinates: $C(1.4, 4.8)$ satisfies $\\sqrt{1.4^2 + 4.8^2} = \\sqrt{25} = 5$ ✓ and $\\sqrt{28.6^2 + 4.8^2} = \\sqrt{841} = 29$ ✓, so the altitude to the $30$ side is $4.8$, the area is $\\frac{1}{2} \\cdot 30 \\cdot 4.8 = 72$ ✓, and the incircle of radius $2.25$ drawn at $I(3, 2.25)$ sits tangent to the base at height $2.25$ ✓. (The choice $1.125$ is DIVIDING BY THE FULL PERIMETER $64$ instead of the semiperimeter ✗; $4.5$ is ANSWERING THE DIAMETER ✗; $4.8$ is ANSWERING AN ALTITUDE — the height to the $30$ side, not the incircle’s radius ✗.)',
    },
    {
      q: 'A metal sheet is cut as a triangle with sides $13$, $37$, and $40$. What is the radius of the largest circle that fits inside the sheet?',
      fig: {
        w: 400,
        view: [-2, -2, 42, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [35, 12]], fill: false },
          { t: 'circle', c: [32, 16 / 3], r: 16 / 3 },
          { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 12 },
          { t: 'label', p: [17.5, 6], text: '37', dx: -8, dy: -6 },
          { t: 'label', p: [37.5, 6], text: '13', dx: 12, dy: -2 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [35, 12], label: 'C', dx: 4, dy: -10 },
          { t: 'point', p: [32, 16 / 3], label: 'I', dx: -12, dy: -2 },
        ],
      },
      choices: ['$\\frac{8}{3}$', '$12$', '$\\frac{16}{3}$', '$\\frac{32}{3}$'],
      answer: 2,
      solution:
        'The largest circle inside a triangle is the incircle. Heron: $s = \\frac{13 + 37 + 40}{2} = 45$, Area $= \\sqrt{45 \\cdot 32 \\cdot 8 \\cdot 5} = \\sqrt{57600} = 240$, so $r = \\frac{240}{45} = \\frac{16}{3}$ ✓. Check a second, independent way with the figure’s coordinates: $C(35, 12)$ satisfies $\\sqrt{35^2 + 12^2} = \\sqrt{1369} = 37$ ✓ and $\\sqrt{5^2 + 12^2} = 13$ ✓, and the incenter $I(32, \\frac{16}{3})$ has distance to the line $BC$ (the line $12x + 5y - 480 = 0$, divided by $13$) equal to $\\frac{|384 + \\frac{80}{3} - 480|}{13} = \\frac{208/3}{13} = \\frac{16}{3}$ ✓ — tangent to that side too, so the circle truly fits. (The choice $\\frac{8}{3}$ is DIVIDING BY THE FULL PERIMETER $90$ ✗; $12$ is ANSWERING AN ALTITUDE, the height to the $40$ side ✗; $\\frac{32}{3}$ is ANSWERING THE DIAMETER ✗.)',
    },
    {
      q: 'A triangle has sides $15$, $28$, and $41$. Find the radius of its inscribed circle.',
      fig: {
        w: 400,
        view: [-14, -2, 30, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [-12, 9]], fill: false },
          { t: 'circle', c: [1, 3], r: 3 },
          { t: 'label', p: [14, 0], text: '28', dx: 0, dy: 12 },
          { t: 'label', p: [-6, 4.5], text: '15', dx: -10, dy: -4 },
          { t: 'label', p: [8, 4.5], text: '41', dx: 10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -4, dy: 14 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [-12, 9], label: 'C', dx: -6, dy: -8 },
          { t: 'point', p: [1, 3], label: 'I', dx: 12, dy: 0 },
        ],
      },
      choices: ['$3$', '$1.5$', '$9$', '$6$'],
      answer: 0,
      solution:
        'Heron first: $s = \\frac{15 + 28 + 41}{2} = 42$, and Area $= \\sqrt{42 \\cdot 27 \\cdot 14 \\cdot 1} = \\sqrt{15876} = 126$ — that last factor $s - 41 = 1$ is the sign of a very flat, obtuse triangle. Then $r = \\frac{126}{42} = 3$ ✓. Check a second, independent way with the figure’s coordinates: $C(-12, 9)$ satisfies $\\sqrt{12^2 + 9^2} = 15$ ✓ and $\\sqrt{40^2 + 9^2} = \\sqrt{1681} = 41$ ✓, and the incenter $I(1, 3)$ has distance to line $AC$ (the line $3x + 4y = 0$, divided by $5$) equal to $\\frac{|3 + 12|}{5} = 3$ ✓ — the same $3$ that separates $I$ from the base, so the circle is tangent all around. (The choice $1.5$ is DIVIDING BY THE FULL PERIMETER $84$ ✗; $9$ is ANSWERING AN ALTITUDE, the height to the $28$ side ✗; $6$ is ANSWERING THE DIAMETER ✗.)',
    },
  ],
  // s6 — the shortest altitude belongs to the longest side.
  [
    {
      q: 'A triangle has sides $13$, $14$, and $15$. What is the length of its shortest altitude?',
      fig: {
        w: 340,
        view: [-2, -2, 17, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [6.6, 11.2]], fill: false },
          { t: 'seg', a: [6.6, 11.2], b: [6.6, 0], dash: true },
          { t: 'right', at: [6.6, 0], from: [15, 0], to: [6.6, 11.2] },
          { t: 'label', p: [7.5, 0], text: '15', dx: 14, dy: 12 },
          { t: 'label', p: [3.3, 5.6], text: '13', dx: -10, dy: -6 },
          { t: 'label', p: [10.8, 5.6], text: '14', dx: 10, dy: -6 },
          { t: 'label', p: [6.6, 5.6], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$12$', '$\\frac{168}{13}$', '$5.6$', '$11.2$'],
      answer: 3,
      solution:
        'The shortest altitude lands on the LONGEST side — a fixed area makes base and height trade off. Heron: $s = \\frac{13 + 14 + 15}{2} = 21$, Area $= \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$, so $h = \\frac{2 \\cdot 84}{15} = 11.2$ ✓. Check a second, independent way with the figure’s coordinates: the apex $(6.6, 11.2)$ satisfies $6.6^2 + 11.2^2 = 169 = 13^2$ ✓ and $8.4^2 + 11.2^2 = 196 = 14^2$ ✓, so the dashed drop really measures $11.2$ over the $15$ base ✓. (The choice $12$ is PICKING THE MIDDLE BASE — the altitude to the $14$ side, $\\frac{168}{14}$ ✗; $\\frac{168}{13}$ is ANSWERING THE LONGEST ALTITUDE, the one to the shortest side ✗; $5.6$ is FORGETTING THE 2 in $h = \\frac{2 \\cdot \\text{Area}}{b}$ ✗.)',
    },
    {
      q: 'A triangular plaza has sides $25$ m, $29$ m, and $36$ m. Of the three altitudes of the triangle, how long is the shortest one?',
      fig: {
        w: 380,
        view: [-2.5, -2.5, 38.5, 22.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [36, 0], [15, 20]], fill: false },
          { t: 'seg', a: [15, 20], b: [15, 0], dash: true },
          { t: 'right', at: [15, 0], from: [36, 0], to: [15, 20] },
          { t: 'label', p: [18, 0], text: '36', dx: 14, dy: 12 },
          { t: 'label', p: [7.5, 10], text: '25', dx: -12, dy: -6 },
          { t: 'label', p: [25.5, 10], text: '29', dx: 12, dy: -6 },
          { t: 'label', p: [15, 10], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$20$ m', '$28.8$ m', '$10$ m', '$25$ m'],
      answer: 0,
      solution:
        'Since area is fixed, the longest base pairs with the shortest height, so aim at the $36$ m side. Heron: $s = \\frac{25 + 29 + 36}{2} = 45$, Area $= \\sqrt{45 \\cdot 20 \\cdot 16 \\cdot 9} = \\sqrt{129600} = 360$, and $h = \\frac{2 \\cdot 360}{36} = 20$ m ✓. Check a second, independent way with the figure’s coordinates: the apex $(15, 20)$ satisfies $15^2 + 20^2 = 625 = 25^2$ ✓ and $21^2 + 20^2 = 841 = 29^2$ ✓, so the plaza really rises $20$ m above its $36$ m side, and $\\frac{1}{2} \\cdot 36 \\cdot 20 = 360$ ✓ reproduces the Heron area. (The choice $28.8$ m is ANSWERING THE LONGEST ALTITUDE, $\\frac{720}{25}$, drawn to the shortest side ✗; $10$ m is FORGETTING THE 2 ✗; $25$ m is ANSWERING THE SHORTEST SIDE instead of the shortest altitude ✗.)',
    },
    {
      q: 'A triangle has sides $11$, $13$, and $20$. Find the length of its shortest altitude.',
      fig: {
        w: 380,
        view: [-2, -2, 22, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [8.8, 6.6]], fill: false },
          { t: 'seg', a: [8.8, 6.6], b: [8.8, 0], dash: true },
          { t: 'right', at: [8.8, 0], from: [20, 0], to: [8.8, 6.6] },
          { t: 'label', p: [10, 0], text: '20', dx: 14, dy: 12 },
          { t: 'label', p: [4.4, 3.3], text: '11', dx: -10, dy: -6 },
          { t: 'label', p: [14.4, 3.3], text: '13', dx: 10, dy: -6 },
          { t: 'label', p: [8.8, 3.3], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$12$', '$6.6$', '$3.3$', '$11$'],
      answer: 1,
      solution:
        'The shortest altitude is the one to the longest side, $20$. Heron: $s = \\frac{11 + 13 + 20}{2} = 22$, Area $= \\sqrt{22 \\cdot 11 \\cdot 9 \\cdot 2} = \\sqrt{4356} = 66$, so $h = \\frac{2 \\cdot 66}{20} = 6.6$ ✓. Check a second, independent way with the figure’s coordinates: the apex $(8.8, 6.6)$ satisfies $8.8^2 + 6.6^2 = 121 = 11^2$ ✓ and $11.2^2 + 6.6^2 = 169 = 13^2$ ✓, so the dashed altitude really measures $6.6$ ✓ — and $\\frac{1}{2} \\cdot 20 \\cdot 6.6 = 66$ matches Heron. (The choice $12$ is ANSWERING THE LONGEST ALTITUDE, $\\frac{132}{11}$, to the shortest side ✗; $3.3$ is FORGETTING THE 2 ✗; $11$ is ANSWERING THE SHORTEST SIDE, a side length rather than a height ✗.)',
    },
  ],
  // s7 — right triangle: inradius plus circumradius.
  [
    {
      q: 'A right triangle has legs $15$ and $20$. Let $r$ be its inradius and $R$ its circumradius. What is $r + R$?',
      choices: ['$12.5$', '$30$', '$17.5$', '$5$'],
      answer: 2,
      solution:
        'The hypotenuse completes the $3$-$4$-$5$ family scaled by $5$: $c = 25$. Circumradius: $R = \\frac{25}{2} = 12.5$, since the hypotenuse is a diameter of the circumcircle. Inradius: Area $= \\frac{1}{2} \\cdot 15 \\cdot 20 = 150$ over $s = \\frac{15 + 20 + 25}{2} = 30$ gives $r = 5$. So $r + R = 17.5$ ✓. Check a second, independent way with the right-triangle shortcuts: $r = s - c = 30 - 25 = 5$ ✓, and in any right triangle $r + R = \\frac{a + b}{2}$, here $\\frac{15 + 20}{2} = 17.5$ ✓ — both shortcuts land on the same total. (The choice $12.5$ is ANSWERING R ALONE ✗; $30$ is TAKING THE WHOLE HYPOTENUSE AS R, using $25$ for the circumradius and adding $r = 5$ ✗; $5$ is ANSWERING r ALONE ✗.)',
    },
    {
      q: 'A corner shelf is a right triangle whose legs measure $21$ and $28$. With $r$ its inradius and $R$ its circumradius, find $r + R$.',
      choices: ['$17.5$', '$42$', '$7$', '$24.5$'],
      answer: 3,
      solution:
        'The legs are $7 \\cdot 3$ and $7 \\cdot 4$, so the hypotenuse is $7 \\cdot 5 = 35$ and $R = \\frac{35}{2} = 17.5$. For $r$: Area $= \\frac{1}{2} \\cdot 21 \\cdot 28 = 294$ and $s = \\frac{21 + 28 + 35}{2} = 42$, so $r = \\frac{294}{42} = 7$. Total: $r + R = 24.5$ ✓. Check a second, independent way: the right-triangle identity $r = s - c$ gives $42 - 35 = 7$ ✓, and $r + R = \\frac{a + b}{2} = \\frac{21 + 28}{2} = 24.5$ ✓ without ever computing the area. (The choice $17.5$ is ANSWERING R ALONE ✗; $42$ is TAKING THE WHOLE HYPOTENUSE AS R and adding $r = 7$ ✗; $7$ is ANSWERING r ALONE ✗.)',
    },
    {
      q: 'The legs of a right triangle measure $12$ and $16$. Adding its inradius $r$ to its circumradius $R$ gives what value?',
      choices: ['$10$', '$14$', '$4$', '$24$'],
      answer: 1,
      solution:
        'The hypotenuse is $\\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$ (the $3$-$4$-$5$ family times $4$), so $R = \\frac{20}{2} = 10$. Inradius: Area $= \\frac{1}{2} \\cdot 12 \\cdot 16 = 96$ over $s = \\frac{12 + 16 + 20}{2} = 24$ gives $r = 4$. So $r + R = 14$ ✓. Check a second, independent way through the shortcuts: $r = s - c = 24 - 20 = 4$ ✓, and $r + R = \\frac{a + b}{2} = \\frac{12 + 16}{2} = 14$ ✓ — the identity that makes every right triangle’s $r + R$ half the leg sum. (The choice $10$ is ANSWERING R ALONE ✗; $4$ is ANSWERING r ALONE ✗; $24$ is TAKING THE WHOLE HYPOTENUSE AS R, $20 + 4$ ✗.)',
    },
  ],
  // s8 — centroid distance from the right-angle vertex.
  [
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(60, 0)$, and $C(0, 63)$. How far is the centroid from the right-angle vertex $A$?',
      fig: {
        w: 300,
        view: [-5, -5, 65, 68],
        elems: [
          { t: 'poly', pts: [[0, 0], [60, 0], [0, 63]], fill: false },
          { t: 'right', at: [0, 0], from: [60, 0], to: [0, 63] },
          { t: 'seg', a: [0, 0], b: [20, 21], dash: true },
          { t: 'label', p: [30, 0], text: '60', dx: 0, dy: 12 },
          { t: 'label', p: [0, 31.5], text: '63', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [60, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 63], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [20, 21], label: 'G', dx: 12, dy: -2 },
        ],
      },
      choices: ['$29$', '$43.5$', '$41$', '$14.5$'],
      answer: 0,
      solution:
        'The centroid averages the vertices: $G = \\left(\\frac{0 + 60 + 0}{3}, \\frac{0 + 0 + 63}{3}\\right) = (20, 21)$, so $AG = \\sqrt{20^2 + 21^2} = \\sqrt{841} = 29$ ✓ — the $20$-$21$-$29$ triple in miniature. Check a second, independent way through the median: from $A$ to the midpoint of $\\overline{BC}$ at $(30, 31.5)$ the median measures $\\sqrt{900 + 992.25} = \\sqrt{1892.25} = 43.5$, and the centroid sits two-thirds of the way along: $\\frac{2}{3} \\cdot 43.5 = 29$ ✓. (The choice $43.5$ is ANSWERING THE WHOLE MEDIAN instead of stopping at $G$ ✗; $41$ is ADDING THE COORDINATES $20 + 21$ instead of applying the distance formula ✗; $14.5$ is TAKING A THIRD of the median, the piece beyond $G$, not the piece from $A$ ✗.)',
    },
    {
      q: 'A right triangle sits on a grid with its right angle at $A(0, 0)$ and the other vertices at $B(48, 0)$ and $C(0, 90)$. Find the distance $AG$ from $A$ to the centroid $G$.',
      fig: {
        w: 240,
        view: [-5, -6, 53, 95],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [0, 90]], fill: false },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 90], s: 3 },
          { t: 'seg', a: [0, 0], b: [16, 30], dash: true },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 12 },
          { t: 'label', p: [0, 45], text: '90', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [48, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 90], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [16, 30], label: 'G', dx: 12, dy: -2 },
        ],
      },
      choices: ['$51$', '$17$', '$46$', '$34$'],
      answer: 3,
      solution:
        'Average the vertices: $G = \\left(\\frac{0 + 48 + 0}{3}, \\frac{0 + 0 + 90}{3}\\right) = (16, 30)$, so $AG = \\sqrt{16^2 + 30^2} = \\sqrt{256 + 900} = \\sqrt{1156} = 34$ ✓ — a scaled $8$-$15$-$17$ triple. Check a second, independent way with the $2 : 1$ centroid ratio: the median from $A$ runs to the midpoint of $\\overline{BC}$ at $(24, 45)$, with length $\\sqrt{576 + 2025} = \\sqrt{2601} = 51$, and $AG = \\frac{2}{3} \\cdot 51 = 34$ ✓. (The choice $51$ is ANSWERING THE WHOLE MEDIAN ✗; $17$ is TAKING A THIRD, the short piece of the median on the far side of $G$ ✗; $46$ is ADDING THE COORDINATES $16 + 30$ ✗.)',
    },
    {
      q: 'Triangle $PQR$ has its right angle at $P(0, 0)$, with $Q(21, 0)$ and $R(0, 72)$. The three medians meet at $G$. How long is $\\overline{PG}$?',
      fig: {
        w: 200,
        view: [-4, -4, 36, 75],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [0, 72]], fill: false },
          { t: 'right', at: [0, 0], from: [21, 0], to: [0, 72], s: 2.2 },
          { t: 'seg', a: [0, 0], b: [7, 24], dash: true },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 12 },
          { t: 'label', p: [0, 36], text: '72', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'P', dx: -12, dy: 10 },
          { t: 'point', p: [21, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [0, 72], label: 'R', dx: -10, dy: -8 },
          { t: 'point', p: [7, 24], label: 'G', dx: 12, dy: -2 },
        ],
      },
      choices: ['$37.5$', '$12.5$', '$25$', '$31$'],
      answer: 2,
      solution:
        'The medians meet at the centroid, the average of the vertices: $G = \\left(\\frac{0 + 21 + 0}{3}, \\frac{0 + 0 + 72}{3}\\right) = (7, 24)$, so $PG = \\sqrt{7^2 + 24^2} = \\sqrt{625} = 25$ ✓ — the $7$-$24$-$25$ triple made to order. Check a second, independent way along the median from $P$: it ends at the midpoint of $\\overline{QR}$, $(10.5, 36)$, with length $\\sqrt{110.25 + 1296} = \\sqrt{1406.25} = 37.5$, and the centroid claims two-thirds of it: $\\frac{2}{3} \\cdot 37.5 = 25$ ✓. (The choice $37.5$ is ANSWERING THE WHOLE MEDIAN ✗; $12.5$ is TAKING A THIRD of the median rather than two-thirds ✗; $31$ is ADDING THE COORDINATES $7 + 24$ ✗.)',
    },
  ],
  // s9 — medial-triangle area: a quarter of the original.
  [
    {
      q: 'A triangle has area $144$. What is the area of its medial triangle, the triangle whose vertices are the midpoints of its three sides?',
      choices: ['$72$', '$36$', '$576$', '$48$'],
      answer: 1,
      solution:
        'The medial triangle is similar to the original with ratio $\\frac{1}{2}$, and area scales by the SQUARE of the ratio: $144 \\cdot \\frac{1}{4} = 36$ ✓. Check a second, independent way by dissection: the three midsegments cut the original into four congruent triangles — three corner copies plus the medial triangle in the middle — so each piece holds $\\frac{144}{4} = 36$ ✓. (The choice $72$ is SCALING AREA BY THE RATIO — lengths halve, but areas quarter ✗; $576$ is REVERSING THE SHRINK, multiplying by $4$ ✗; $48$ is SPLITTING INTO THREE, as if the dissection made three pieces instead of four ✗.)',
    },
    {
      q: 'A triangular banner has area $176$. A seamstress marks the midpoints of all three edges and cuts out the middle triangle they form. What is the area of the cut-out piece?',
      choices: ['$88$', '$132$', '$704$', '$44$'],
      answer: 3,
      solution:
        'The cut-out is the medial triangle — similar to the banner with ratio $\\frac{1}{2}$, so its area is $\\frac{1}{4}$ of the original: $\\frac{176}{4} = 44$ ✓. Check a second, independent way by counting pieces: the midpoint cuts split the banner into four congruent triangles (fold each corner triangle onto the middle one and it fits exactly), so the middle piece is one of four equal shares, $\\frac{176}{4} = 44$ ✓. (The choice $88$ is SCALING AREA BY THE RATIO $\\frac{1}{2}$ instead of its square ✗; $132$ is KEEPING THE THREE CORNERS — the part left behind, not the cut-out ✗; $704$ is REVERSING THE SHRINK ✗.)',
    },
    {
      q: 'The medial triangle of triangle $XYZ$ is drawn. If $XYZ$ has area $104$, what is the area of the medial triangle?',
      choices: ['$26$', '$52$', '$78$', '$416$'],
      answer: 0,
      solution:
        'Each side of the medial triangle is half the matching side of $XYZ$, so the two triangles are similar with ratio $\\frac{1}{2}$ — and areas carry the square: $104 \\cdot \\left(\\frac{1}{2}\\right)^2 = 26$ ✓. Check a second, independent way by the four-piece dissection: the midsegments tile $XYZ$ with four congruent triangles, one of which is the medial triangle, so it holds $\\frac{104}{4} = 26$ ✓. (The choice $52$ is SCALING AREA BY THE RATIO, halving when areas quarter ✗; $78$ is KEEPING THE THREE CORNERS, $104 - 26$ ✗; $416$ is REVERSING THE SHRINK ✗.)',
    },
  ],
  // s10 — isosceles apex to incenter: CI = altitude − r.
  [
    {
      q: 'A climbing-wall panel is an isosceles triangle $PQR$ with base $PQ = 16$ and equal sides $RP = RQ = 17$, the apex $R$ directly above the midpoint of $\\overline{PQ}$. A circular pad is inscribed in the panel, centered at the incenter $I$. How far is the apex $R$ from $I$?',
      fig: {
        view: [-2, -2, 18, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [8, 15]], fill: false },
          { t: 'seg', a: [8, 15], b: [8, 0], dash: true },
          { t: 'circle', c: [8, 4.8], r: 4.8 },
          { t: 'label', p: [8, 0], text: '16', dx: -28, dy: 12 },
          { t: 'label', p: [4, 7.5], text: '17', dx: -10, dy: -6 },
          { t: 'label', p: [12, 7.5], text: '17', dx: 10, dy: -6 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [8, 15], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [8, 4.8], label: 'I', dx: 12, dy: -2 },
        ],
      },
      choices: ['$4.8$', '$15$', '$10.2$', '$12.2$'],
      answer: 2,
      solution:
        'Symmetry puts both $R$ and $I$ on the vertical axis through the base’s midpoint. The apex height is $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$, the area is $\\frac{1}{2} \\cdot 16 \\cdot 15 = 120$, and $s = \\frac{17 + 17 + 16}{2} = 25$, so $r = \\frac{120}{25} = 4.8$ — the incenter floats at height $4.8$. Then $RI = 15 - 4.8 = 10.2$ ✓. Check a second, independent way with a tangency distance: from $I(8, 4.8)$ to the side line $RP$ (the line $15x - 8y = 0$, divided by $17$) the distance is $\\frac{|120 - 38.4|}{17} = \\frac{81.6}{17} = 4.8$ ✓ — the pad of radius $4.8$ really touches the slanted side, so the incenter’s height, and with it $RI = 10.2$, is confirmed. (The choice $4.8$ is ANSWERING THE INRADIUS, the distance from $I$ down to the base ✗; $15$ is ANSWERING THE WHOLE ALTITUDE ✗; $12.2$ is SUBTRACTING FROM THE LEG, $17 - 4.8$, though $r$ is measured along the axis, not along a slanted side ✗.)',
    },
    {
      q: 'Isosceles triangle $ABC$ has base $AB = 30$ and legs $CA = CB = 25$, with apex $C$ over the midpoint of $\\overline{AB}$. How far is the incenter from apex $C$?',
      fig: {
        w: 340,
        view: [-2, -2, 32, 22],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [15, 20]], fill: false },
          { t: 'seg', a: [15, 20], b: [15, 0], dash: true },
          { t: 'circle', c: [15, 7.5], r: 7.5 },
          { t: 'label', p: [15, 0], text: '30', dx: -34, dy: 12 },
          { t: 'label', p: [7.5, 10], text: '25', dx: -12, dy: -6 },
          { t: 'label', p: [22.5, 10], text: '25', dx: 12, dy: -6 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 20], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [15, 7.5], label: 'I', dx: 12, dy: -2 },
        ],
      },
      choices: ['$7.5$', '$12.5$', '$20$', '$17.5$'],
      answer: 1,
      solution:
        'The altitude from $C$ measures $\\sqrt{25^2 - 15^2} = \\sqrt{400} = 20$, so with area $\\frac{1}{2} \\cdot 30 \\cdot 20 = 300$ and $s = \\frac{25 + 25 + 30}{2} = 40$ the inradius is $r = \\frac{300}{40} = 7.5$. The incenter rides the axis of symmetry at height $7.5$, so $CI = 20 - 7.5 = 12.5$ ✓. Check a second, independent way with a tangency distance: from $I(15, 7.5)$ to the line through $A(0, 0)$ and $C(15, 20)$ (the line $4x - 3y = 0$, divided by $5$) the distance is $\\frac{|60 - 22.5|}{5} = \\frac{37.5}{5} = 7.5$ ✓ — the incircle drawn in the figure is tangent to the leg, so the height of $I$, and with it $CI = 12.5$, checks out. (The choice $7.5$ is ANSWERING THE INRADIUS — the drop from $I$ to the BASE, not the climb to the apex ✗; $20$ is ANSWERING THE WHOLE ALTITUDE ✗; $17.5$ is SUBTRACTING FROM THE LEG, $25 - 7.5$ ✗.)',
    },
    {
      q: 'A pennant is an isosceles triangle $DEF$ with base $DE = 20$ and equal sides $FD = FE = 26$, the tip $F$ directly above the midpoint of the base. Its inscribed circle is centered at $I$. Find the distance $FI$ from the tip to $I$.',
      fig: {
        w: 260,
        view: [-2, -2, 22, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [10, 24]], fill: false },
          { t: 'seg', a: [10, 24], b: [10, 0], dash: true },
          { t: 'circle', c: [10, 20 / 3], r: 20 / 3 },
          { t: 'label', p: [10, 0], text: '20', dx: -30, dy: 12 },
          { t: 'label', p: [5, 12], text: '26', dx: -12, dy: -6 },
          { t: 'label', p: [15, 12], text: '26', dx: 12, dy: -6 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [10, 24], label: 'F', dx: 0, dy: -12 },
          { t: 'point', p: [10, 20 / 3], label: 'I', dx: 12, dy: -2 },
        ],
      },
      choices: ['$\\frac{20}{3}$', '$24$', '$\\frac{58}{3}$', '$\\frac{52}{3}$'],
      answer: 3,
      solution:
        'The tip stands at height $\\sqrt{26^2 - 10^2} = \\sqrt{576} = 24$ above the base. Area $= \\frac{1}{2} \\cdot 20 \\cdot 24 = 240$ and $s = \\frac{26 + 26 + 20}{2} = 36$, so $r = \\frac{240}{36} = \\frac{20}{3}$, and the incenter sits on the axis at that height. Then $FI = 24 - \\frac{20}{3} = \\frac{52}{3}$ ✓. Check a second, independent way with a tangency distance: from $I\\left(10, \\frac{20}{3}\\right)$ to the line through $D(0, 0)$ and $F(10, 24)$ (the line $12x - 5y = 0$, divided by $13$) the distance is $\\frac{\\left|120 - \\frac{100}{3}\\right|}{13} = \\frac{260/3}{13} = \\frac{20}{3}$ ✓ — the circle touches the slanted edge exactly, pinning $I$’s height and with it $FI = \\frac{52}{3}$. (The choice $\\frac{20}{3}$ is ANSWERING THE INRADIUS, the distance from $I$ to the base ✗; $24$ is ANSWERING THE WHOLE ALTITUDE ✗; $\\frac{58}{3}$ is SUBTRACTING FROM THE LEG, $26 - \\frac{20}{3}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  sections: {
    '7.6': s76,
  },
}
