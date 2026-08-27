// Introduction to Geometry chapter 7 — variations for section 7.5 (Altitudes).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice, by two routes that do not share
//    arithmetic: the flipped area formula against a rebuilt area, a
//    Pythagorean subtraction against a triple-family scaling, an area
//    swap against a similar-triangle proportion (guarded by the
//    geometric-mean product of the hypotenuse pieces), and coordinate
//    intersections of two altitudes guarded by the third.
//  - Every figure was built from its own numbers: altitude feet sit at
//    their exact perpendicular feet, orthocenters at their computed
//    coordinates, and every right-angle square was checked against a dot
//    product.
//  - Each distractor is one named mistake, named at the end of the
//    solution in CAPS. The traps running through this section: MOVING IN
//    THE CIRCUMCENTER, MERGING THE CENTERS, COUNTING ONE ALTITUDE,
//    DENYING CONCURRENCY, EXILING THE ORTHOCENTER, KEEPING THE ACUTE
//    HABIT, PARKING AT A MIDPOINT, DROPPING THE 2, DOUBLING TWICE,
//    HANDING BACK THE EDGE, HANDING BACK THE SIDE, PUTTING THE 2 ON THE
//    WRONG SIDE, HANDING BACK THE SLANTED SIDE, HANDING BACK THE BASE,
//    ANSWERING THE HALF-BASE, SUBTRACTING THE LENGTHS, AIMING AT THE
//    MIDPOINT, SPLITTING THE TOP ANGLE, PERPENDICULAR FROM THE WRONG
//    ANCHOR, MERGING THE THREE, DESCRIBING THE MIDSEGMENT, DESCRIBING
//    THE MEDIAN, DESCRIBING THE ANGLE BISECTOR, BORROWING THE
//    RIGHT-TRIANGLE RULE, PROMOTING A MIDPOINT, PARKING ON THE BASE,
//    ANSWERING THE FOOT, PINNING IT TO A VERTEX, GRABBING THE CENTROID,
//    HALVING THE HYPOTENUSE, ANSWERING THE SHORTER LEG, AVERAGING THE
//    LEGS, DIVIDING BY THE LEG SUM, SUBTRACTING THE ALTITUDE FROM THE
//    AREA, HANDING BACK THE ALTITUDE, HANDING BACK THE AREA, LINING UP
//    IS NOT LANDING TOGETHER, KEEPING THEM MERELY INSIDE, SEPARATING THE
//    CENTERS, OUTLAWING THE EQUILATERAL, ONE ANGLE IS NOT THREE,
//    ANSWERING F’S COORDINATE, ANSWERING M’S COORDINATE, MEASURING FROM
//    THE FAR END, and PROMOTING THE CIRCUMCENTER.
//  - No two choices inside an item name the same value.

const s75 = [
  // s1 — the orthocenter of a right triangle is the right-angle vertex.
  [
    {
      q: 'Priya has drawn right triangle $PQR$ with its right angle at $Q$. She claims she can name the orthocenter without constructing a single new line. Why is her claim correct?',
      choices: [
        'The legs $\\overline{PQ}$ and $\\overline{QR}$ are already two of the three altitudes, and they cross at $Q$ — so the orthocenter is the right-angle vertex',
        'The orthocenter of every triangle sits at the midpoint of its longest side, which is visible as soon as the hypotenuse is drawn',
        'The orthocenter always coincides with the centroid, and the centroid needs no construction',
        'A right triangle has only one altitude, so there is nothing to intersect',
      ],
      answer: 0,
      solution:
        'An altitude runs from a vertex perpendicular to the line of the opposite side. Leg $\\overline{PQ}$ is perpendicular to leg $\\overline{QR}$, so each leg IS the altitude from its own endpoint, and those two altitudes already cross at $Q$ — the third altitude, from $Q$ itself, passes through $Q$ by definition ✓. Check a second, independent way with coordinates: put $Q(0, 0)$, $P(p, 0)$, $R(0, r)$. The altitude from $P$ is perpendicular to the vertical leg, so it is the line $y = 0$; the altitude from $R$ is the line $x = 0$; they meet at $(0, 0) = Q$ ✓. (The longest-side midpoint is MOVING IN THE CIRCUMCENTER — that address belongs to a different center of a right triangle ✗; the centroid claim is MERGING THE CENTERS, which only an equilateral triangle allows ✗; "only one altitude" is COUNTING ONE ALTITUDE when every triangle owns three ✗.)',
    },
    {
      q: 'Deshawn cuts a shelf bracket in the shape of a right triangle with the right angle at corner $E$. The design calls for a mounting screw exactly at the bracket’s orthocenter. Where should he drill?',
      choices: [
        'at the midpoint of the longest edge',
        'at the point where the three medians cross',
        'exactly at corner $E$, the right-angle corner',
        'nowhere — the altitudes of a right triangle never pass through one common point',
      ],
      answer: 2,
      solution:
        'The two edges meeting at $E$ are perpendicular to each other, so each one is an altitude of the bracket — and they intersect at $E$, which the altitude from $E$ also passes through ✓. Check a second, independent way with coordinates: place $E(0, 0)$ with the perpendicular edges along the axes. The altitude from the vertex on the x-axis is the horizontal line $y = 0$, the altitude from the vertex on the y-axis is the vertical line $x = 0$, and they concur at the origin, which is $E$ ✓. (The longest-edge midpoint is MOVING IN THE CIRCUMCENTER ✗; the median crossing is GRABBING THE CENTROID, a different center with a different job ✗; "nowhere" is DENYING CONCURRENCY — the three altitude lines of ANY triangle pass through one point ✗.)',
    },
    {
      q: 'Nadia sorts a pile of paper triangles into three bins by where each one’s orthocenter lands: strictly INSIDE the paper, ON its boundary, or OFF the paper entirely. Every right triangle in the pile ends up in the same bin. Which bin, and why?',
      choices: [
        'off the paper — the altitude lines of a right triangle meet beyond the hypotenuse',
        'inside — the orthocenter of any triangle stays strictly inside it',
        'on the boundary, at the midpoint of a leg',
        'on the boundary, at the right-angle corner, where the two legs-turned-altitudes already cross',
      ],
      answer: 3,
      solution:
        'In a right triangle each leg is perpendicular to the other, so the legs double as altitudes, and they intersect at the right-angle vertex — a point ON the paper’s boundary ✓. Check a second, independent way by walking the three shape families: an acute triangle keeps its orthocenter inside, an obtuse triangle pushes it outside, and the right triangle is the borderline case in between — the orthocenter lands exactly on the triangle, at the vertex of the right angle ✓. (The off-the-paper bin is EXILING THE ORTHOCENTER, the fate of obtuse triangles only ✗; the inside bin is KEEPING THE ACUTE HABIT ✗; a leg midpoint is PARKING AT A MIDPOINT no altitude aims for ✗.)',
    },
  ],
  // s2 — area and a side given; the altitude to that side wanted.
  [
    {
      q: 'A triangular flower bed covers $66$ square feet, and its street-side edge runs $12$ feet. The gardener wants the altitude drawn to that edge — how far the bed reaches back from the street. How long is that altitude?',
      choices: ['$11$', '$5.5$', '$22$', '$12$'],
      answer: 0,
      solution:
        'Flip the area formula: from $\\text{Area} = \\frac{1}{2} b h$, the height is $h = \\frac{2 \\cdot 66}{12} = 11$ ✓. Check by rebuilding the area from the answer: $\\frac{1}{2} \\cdot 12 \\cdot 11 = 66$ ✓ — only $h = 11$ hands the $66$ back. (The choice $5.5$ is DROPPING THE 2, computing $\\frac{66}{12}$ as if the bed were a rectangle — the triangle formula carries a built-in $\\frac{1}{2}$ that must be undone ✗; $22$ is DOUBLING TWICE, $\\frac{4 \\cdot 66}{12}$ ✗; $12$ is HANDING BACK THE EDGE the problem already gave ✗.)',
    },
    {
      q: 'A sail patch is a triangle of area $104$ square inches, and the edge sewn along the mast measures $16$ inches. What is the length of the altitude to the mast edge?',
      choices: ['$26$', '$16$', '$13$', '$6.5$'],
      answer: 2,
      solution:
        'Unwind $\\text{Area} = \\frac{1}{2} b h$: $h = \\frac{2 \\cdot 104}{16} = \\frac{208}{16} = 13$ ✓. Check by rebuilding: $\\frac{1}{2} \\cdot 16 \\cdot 13 = 8 \\cdot 13 = 104$ ✓. (The choice $6.5$ is DROPPING THE 2 — $\\frac{104}{16}$ treats the patch as a rectangle ✗; $26$ is DOUBLING TWICE, $\\frac{4 \\cdot 104}{16}$ ✗; $16$ is HANDING BACK THE SIDE ✗.)',
    },
    {
      q: 'A kite panel is a triangle with area $168$, and one strut of the frame runs along a side of length $16$. Find the altitude drawn to that side.',
      choices: ['$42$', '$21$', '$16$', '$5.25$'],
      answer: 1,
      solution:
        'From $\\text{Area} = \\frac{1}{2} b h$: $168 = \\frac{1}{2} \\cdot 16 \\cdot h = 8h$, so $h = 21$ ✓. Check by rebuilding the area: $\\frac{1}{2} \\cdot 16 \\cdot 21 = 168$ ✓. (The choice $42$ is DOUBLING TWICE, $\\frac{4 \\cdot 168}{16}$ ✗; $16$ is HANDING BACK THE SIDE ✗; $5.25$ is PUTTING THE 2 ON THE WRONG SIDE, $\\frac{168}{2 \\cdot 16}$, dividing by the $2$ that should multiply ✗.)',
    },
  ],
  // s3 — the apex altitude of an isosceles triangle (figure).
  [
    {
      q: 'The festival pennant shown is an isosceles triangle: $PQ = 14$ along the bottom and $RP = RQ = 25$. A stiffening rod runs from $R$ perpendicular to $\\overline{PQ}$. How long is the rod?',
      fig: {
        w: 240,
        view: [-2, -2, 16, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [7, 24]], fill: false },
          { t: 'seg', a: [7, 24], b: [7, 0], dash: true },
          { t: 'right', at: [7, 0], from: [14, 0], to: [7, 24], s: 0.8 },
          { t: 'label', p: [7, 0], text: '14', dx: -22, dy: 14 },
          { t: 'label', p: [3.5, 12], text: '25', dx: -12, dy: -4 },
          { t: 'label', p: [10.5, 12], text: '25', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [7, 24], label: 'R', dx: 0, dy: -10 },
        ],
      },
      choices: ['$25$', '$24$', '$7$', '$18$'],
      answer: 1,
      solution:
        'The altitude from the apex of an isosceles triangle lands on the midpoint of the base, splitting $14$ into halves of $7$. That builds a right triangle with hypotenuse $25$ and leg $7$, so the rod is $\\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ ✓. Check a second, independent way through the triple family: $7$-$24$-$25$ is a Pythagorean triple, and $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ closes exactly ✓. Guard: an altitude must be shorter than the slanted side it leaves from, and $24 < 25$ ✓. (The choice $25$ is HANDING BACK THE SLANTED SIDE ✗; $7$ is ANSWERING THE HALF-BASE, the other leg of the little right triangle ✗; $18$ is SUBTRACTING THE LENGTHS, $25 - 7$, where Pythagoras subtracts squares ✗.)',
    },
    {
      q: 'The front wall of an A-frame tent is an isosceles triangle: the floor edge $DE = 24$ and the two sloped edges $FD = FE = 20$. A center pole runs from the peak $F$ straight down, perpendicular to the floor. How tall is the pole?',
      fig: {
        view: [-2, -2, 26, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [12, 16]], fill: false },
          { t: 'seg', a: [12, 16], b: [12, 0], dash: true },
          { t: 'right', at: [12, 0], from: [24, 0], to: [12, 16], s: 0.8 },
          { t: 'label', p: [12, 0], text: '24', dx: -24, dy: 14 },
          { t: 'label', p: [6, 8], text: '20', dx: -12, dy: -4 },
          { t: 'label', p: [18, 8], text: '20', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [12, 16], label: 'F', dx: 0, dy: -10 },
        ],
      },
      choices: ['$20$', '$12$', '$16$', '$8$'],
      answer: 2,
      solution:
        'By symmetry the pole’s foot is the midpoint of the floor, $12$ from each corner. In the right triangle with hypotenuse $20$ and leg $12$, the pole is $\\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ ✓. Check a second, independent way through the triple family: $12$-$16$-$20$ is the $3$-$4$-$5$ triple scaled by $4$, so the missing side is $4 \\times 4 = 16$ ✓. Guard: $16 < 20$, as an altitude must be ✓. (The choice $20$ is HANDING BACK THE SLANTED SIDE ✗; $12$ is ANSWERING THE HALF-BASE ✗; $8$ is SUBTRACTING THE LENGTHS, $20 - 12$ ✗.)',
    },
    {
      q: 'The kite shown is an isosceles triangle with $JK = 40$ across the bottom and $LJ = LK = 52$. Its spine drops from $L$ perpendicular to $\\overline{JK}$. Find the spine’s length.',
      fig: {
        w: 280,
        view: [-3, -3, 43, 51],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [20, 48]], fill: false },
          { t: 'seg', a: [20, 48], b: [20, 0], dash: true },
          { t: 'right', at: [20, 0], from: [40, 0], to: [20, 48], s: 1.6 },
          { t: 'label', p: [20, 0], text: '40', dx: -26, dy: 14 },
          { t: 'label', p: [10, 24], text: '52', dx: -12, dy: -4 },
          { t: 'label', p: [30, 24], text: '52', dx: 12, dy: -4 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [20, 48], label: 'L', dx: 0, dy: -10 },
        ],
      },
      choices: ['$40$', '$20$', '$32$', '$48$'],
      answer: 3,
      solution:
        'The spine bisects the bottom edge, leaving a right triangle with hypotenuse $52$ and leg $20$. So the spine is $\\sqrt{52^2 - 20^2} = \\sqrt{2704 - 400} = \\sqrt{2304} = 48$ ✓. Check a second, independent way through the triple family: $20$-$48$-$52$ is the $5$-$12$-$13$ triple scaled by $4$, so the missing side is $4 \\times 12 = 48$ ✓. Guard: $48 < 52$, shorter than the slanted side it hangs from ✓. (The choice $40$ is HANDING BACK THE BASE ✗; $20$ is ANSWERING THE HALF-BASE ✗; $32$ is SUBTRACTING THE LENGTHS, $52 - 20$, instead of subtracting squares under a root ✗.)',
    },
  ],
  // s4 — which special segment is perpendicular to the opposite side.
  [
    {
      q: 'Leah places her set square so that a segment runs from vertex $C$ of $\\triangle ABC$ and meets line $AB$ at a $90^\\circ$ corner. Which special segment has she drawn?',
      choices: [
        'the altitude from $C$',
        'the median from $C$',
        'the angle bisector from $C$',
        'the perpendicular bisector of $\\overline{AB}$',
      ],
      answer: 0,
      solution:
        'Meeting the opposite side’s line at a right angle is the altitude’s defining job — it measures the triangle’s height above base $\\overline{AB}$ ✓. Check by comparing promises: the median promises to hit the MIDPOINT of $\\overline{AB}$, and the angle bisector promises to split $\\angle C$ evenly — neither promises a right angle at the base, while Leah’s set square guaranteed the right angle and nothing else ✓. (Choosing the median is AIMING AT THE MIDPOINT ✗; the bisector is SPLITTING THE TOP ANGLE ✗; the perpendicular bisector of $\\overline{AB}$ does cross $\\overline{AB}$ at $90^\\circ$, but it anchors at the midpoint of the side, not at the vertex $C$ — PERPENDICULAR FROM THE WRONG ANCHOR ✗.)',
    },
    {
      q: 'Three segments leave vertex $P$ of scalene triangle $PQR$: one lands on the midpoint of $\\overline{QR}$, one cuts $\\angle P$ into two equal pieces, and one strikes $\\overline{QR}$ at a right angle. Marcus needs the segment whose length is the height of the triangle when $\\overline{QR}$ is the base. Which one is it?',
      choices: [
        'the one landing on the midpoint of $\\overline{QR}$',
        'the one striking $\\overline{QR}$ at a right angle',
        'the one cutting $\\angle P$ into two equal pieces',
        'any of them — from one vertex the three segments always coincide',
      ],
      answer: 1,
      solution:
        'Height means perpendicular distance, so the segment that meets $\\overline{QR}$ at a right angle — the altitude — is the one whose length feeds $\\text{Area} = \\frac{1}{2} b h$ ✓. Check a second, independent way by tilting: lean a pole toward the midpoint or along the angle bisector and it gets LONGER than the perpendicular drop, since the perpendicular segment is the shortest path from $P$ to the base line — only the right-angle segment measures true height ✓. (The midpoint segment is AIMING AT THE MIDPOINT — that is the median’s job ✗; the angle splitter is SPLITTING THE TOP ANGLE ✗; "they always coincide" is MERGING THE THREE, which happens only when the triangle is isosceles with apex $P$, never in a scalene triangle ✗.)',
    },
    {
      q: 'One of the following is the definition of an altitude of a triangle. Which one?',
      choices: [
        'a segment joining the midpoints of two sides',
        'a segment from a vertex to the midpoint of the opposite side',
        'a segment from a vertex dividing the vertex angle into two congruent angles',
        'a segment from a vertex perpendicular to the line containing the opposite side',
      ],
      answer: 3,
      solution:
        'An altitude starts at a vertex and meets the LINE of the opposite side at a right angle — the phrase "line containing" matters, because in an obtuse triangle the foot can land on the side’s extension ✓. Check by matching each rival description to its true owner: midpoints of two sides describe a midsegment, a vertex-to-midpoint segment is a median, and an even split of the vertex angle is an angle bisector — three different segments with three different jobs, none of them guaranteeing a right angle ✓. (The first choice is DESCRIBING THE MIDSEGMENT, which never starts at a vertex ✗; the second is DESCRIBING THE MEDIAN ✗; the third is DESCRIBING THE ANGLE BISECTOR ✗.)',
    },
  ],
  // s5 — the orthocenter of an obtuse triangle lies outside (figure).
  [
    {
      q: 'Triangle $ABC$ has $A(0, 0)$, $B(8, 0)$, and $C(6, 3)$, with an obtuse angle at $C$, as shown. If all three altitude lines are extended until they cross, where does their common point $H$ end up?',
      fig: {
        view: [-1.5, -1.5, 9.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 3]], fill: false },
          { t: 'seg', a: [6, 4], b: [6, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [6, 4], dash: true },
          { t: 'right', at: [6, 0], from: [8, 0], to: [6, 3] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 3], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [6, 4], label: 'H', dx: -8, dy: -8 },
        ],
      },
      choices: [
        'outside the triangle',
        'inside the triangle',
        'at the obtuse vertex $C$',
        'at the midpoint of $\\overline{AB}$',
      ],
      answer: 0,
      solution:
        'The angle at $C$ is obtuse — the vectors to $A$ and $B$ give $(-6)(2) + (-3)(-3) = -3 < 0$ — so two altitudes only reach their opposite sides’ EXTENSIONS, and the crossing gets pushed off the triangle ✓. Check with coordinates: the altitude from $C$ is the vertical line $x = 6$, and the altitude from $A$ is perpendicular to $\\overline{BC}$ (slope $-\\frac{3}{2}$), so it runs along $y = \\frac{2}{3}x$; at $x = 6$ that gives $H(6, 4)$, above $C(6, 3)$ and outside ✓. Guard with the third altitude, from $B$: perpendicular to $\\overline{AC}$ (slope $\\frac{1}{2}$) means slope $-2$, so $y = -2(x - 8)$, and at $x = 6$ it too reaches $y = 4$ ✓. (Inside is KEEPING THE ACUTE HABIT ✗; the vertex answer is BORROWING THE RIGHT-TRIANGLE RULE, which pins $H$ to a vertex only when the angle there is exactly $90^\\circ$ ✗; the midpoint of $\\overline{AB}$ is PROMOTING A MIDPOINT — midpoints belong to medians and perpendicular bisectors, not to where altitudes cross ✗.)',
    },
    {
      q: 'The long, low triangle shown has vertices $A(0, 0)$, $B(7, 0)$, and $C(6, 2)$, and the angle at $C$ is obtuse. Which statement locates its orthocenter $H$?',
      fig: {
        view: [-1.5, -1.5, 8.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [6, 2]], fill: false },
          { t: 'seg', a: [6, 3], b: [6, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [6, 3], dash: true },
          { t: 'right', at: [6, 0], from: [7, 0], to: [6, 2] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 2], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [6, 3], label: 'H', dx: -8, dy: -8 },
        ],
      },
      choices: [
        '$H$ is inside the triangle, like every orthocenter',
        '$H$ lies outside the triangle — here at $(6, 3)$, just past $C$',
        '$H$ is at $C$, because the obtuse angle pulls the altitudes to itself',
        '$H$ is on side $\\overline{AB}$',
      ],
      answer: 1,
      solution:
        'Intersect two altitude lines: the altitude from $C$ is vertical, $x = 6$, and the altitude from $A$ is perpendicular to $\\overline{BC}$ (slope $-2$), so it runs along $y = \\frac{1}{2}x$; at $x = 6$ that gives $H(6, 3)$, above $C(6, 2)$ — outside the triangle ✓. Guard with the third altitude, from $B$: perpendicular to $\\overline{AC}$ (slope $\\frac{1}{3}$) means slope $-3$, so $y = -3(x - 7)$, which at $x = 6$ also gives $y = 3$ ✓ — all three lines agree. The obtuse angle at $C$ is what exiles $H$: the dot product of the vectors from $C$ to $A$ and to $B$ is $(-6)(1) + (-2)(-2) = -2 < 0$ ✓. (Inside is KEEPING THE ACUTE HABIT ✗; "the obtuse angle pulls the altitudes" is BORROWING THE RIGHT-TRIANGLE RULE — only a $90^\\circ$ angle parks $H$ at its vertex ✗; on $\\overline{AB}$ is PARKING ON THE BASE, where only a foot of an altitude lives ✗.)',
    },
    {
      q: 'An obtuse triangle has vertices $A(0, 0)$, $B(9, 0)$, and $C(8, 2)$, as shown. Its three altitude lines, each extended as far as needed, pass through one common point $H$. Where is $H$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [8, 2]], fill: false },
          { t: 'seg', a: [8, 4], b: [8, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [8, 4], dash: true },
          { t: 'right', at: [8, 0], from: [9, 0], to: [8, 2] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 2], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [8, 4], label: 'H', dx: -8, dy: -8 },
        ],
      },
      choices: [
        'at $(8, 0)$, the foot of the altitude from $C$',
        'at the vertex $B$',
        'at $(8, 4)$ — outside the triangle',
        'at $\\left(\\frac{17}{3}, \\frac{2}{3}\\right)$ — inside the triangle',
      ],
      answer: 2,
      solution:
        'The altitude from $C$ is the vertical line $x = 8$. The altitude from $A$ is perpendicular to $\\overline{BC}$, whose slope is $\\frac{2 - 0}{8 - 9} = -2$, so it runs along $y = \\frac{1}{2}x$ and reaches $(8, 4)$ — above $C(8, 2)$, outside the triangle ✓. Guard with the third altitude, from $B$: perpendicular to $\\overline{AC}$ (slope $\\frac{1}{4}$) means slope $-4$, so $y = -4(x - 9)$, and at $x = 8$ it also gives $y = 4$ ✓ — the three lines concur at $H(8, 4)$, and the obtuse angle at $C$ (dot product $(-8)(1) + (-2)(-2) = -4 < 0$) is why $H$ sits outside. (The choice $(8, 0)$ is ANSWERING THE FOOT, where one altitude lands rather than where all three meet ✗; the vertex $B$ is PINNING IT TO A VERTEX, the right-triangle special case ✗; $\\left(\\frac{17}{3}, \\frac{2}{3}\\right)$ is GRABBING THE CENTROID, the average of the vertices ✗.)',
    },
  ],
  // s6 — legs given; the altitude to the hypotenuse wanted (figure).
  [
    {
      q: 'A gusset plate for a zip-line tower is a right triangle with legs $12$ and $16$. A cable guide runs from the right-angle corner straight to the hypotenuse, meeting it at $90^\\circ$, as shown. How long is the cable guide?',
      fig: {
        view: [-2, -2.5, 22, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [7.2, 9.6]], fill: false },
          { t: 'seg', a: [7.2, 9.6], b: [7.2, 0], dash: true },
          { t: 'right', at: [7.2, 9.6], from: [0, 0], to: [20, 0], s: 0.6 },
          { t: 'right', at: [7.2, 0], from: [20, 0], to: [7.2, 9.6], s: 0.6 },
          { t: 'label', p: [3.6, 4.8], text: '12', dx: -12, dy: -6 },
          { t: 'label', p: [13.6, 4.8], text: '16', dx: 12, dy: -6 },
          { t: 'label', p: [13, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [7.2, 4.8], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$10$', '$9.6$', '$12$', '$14$'],
      answer: 1,
      solution:
        'One area, two bases. From the legs: $\\frac{1}{2} \\cdot 12 \\cdot 16 = 96$. The hypotenuse is $\\sqrt{12^2 + 16^2} = \\sqrt{400} = 20$, and using it as the base, $96 = \\frac{1}{2} \\cdot 20 \\cdot h$, so $h = 9.6$ ✓. Check a second, independent way with similar triangles: the small triangle at the $12$-leg’s corner shares that acute angle with the whole plate and adds its own right angle at the guide’s foot, so $\\frac{h}{16} = \\frac{12}{20}$ and $h = 16 \\cdot \\frac{12}{20} = 9.6$ ✓. Guard with the hypotenuse pieces: the foot splits the hypotenuse into $\\frac{12^2}{20} = 7.2$ and $\\frac{16^2}{20} = 12.8$, and $7.2 \\cdot 12.8 = 92.16 = 9.6^2$ ✓. (The choice $10$ is HALVING THE HYPOTENUSE — that is the median from the right angle, which always beats the altitude ✗; $12$ is ANSWERING THE SHORTER LEG ✗; $14$ is AVERAGING THE LEGS, which no altitude formula asks for ✗.)',
    },
    {
      q: 'A community garden plot is a right triangle whose legs, meeting at the right-angle corner, measure $18$ m and $24$ m. A watering hose is stretched from that corner perpendicular to the far edge, as shown. How long is the hose?',
      fig: {
        w: 340,
        view: [-2.5, -3, 32.5, 16.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [10.8, 14.4]], fill: false },
          { t: 'seg', a: [10.8, 14.4], b: [10.8, 0], dash: true },
          { t: 'right', at: [10.8, 14.4], from: [0, 0], to: [30, 0], s: 0.9 },
          { t: 'right', at: [10.8, 0], from: [30, 0], to: [10.8, 14.4], s: 0.9 },
          { t: 'label', p: [5.4, 7.2], text: '18', dx: -12, dy: -6 },
          { t: 'label', p: [20.4, 7.2], text: '24', dx: 12, dy: -6 },
          { t: 'label', p: [20, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [10.8, 7.2], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$18$', '$15$', '$14.4$', '$21$'],
      answer: 2,
      solution:
        'Hold the area steady while switching bases. Legs: $\\frac{1}{2} \\cdot 18 \\cdot 24 = 216$. The far edge is $\\sqrt{18^2 + 24^2} = 30$, so $216 = \\frac{1}{2} \\cdot 30 \\cdot h$ and $h = \\frac{432}{30} = 14.4$ m ✓. Check a second, independent way by proportion in the similar triangles the hose creates: the piece at the $18$-m corner shares that angle with the whole plot, so $\\frac{h}{24} = \\frac{18}{30}$ and $h = 24 \\cdot \\frac{18}{30} = 14.4$ ✓. Guard with the hypotenuse pieces: the hose’s end splits the far edge into $\\frac{18^2}{30} = 10.8$ and $\\frac{24^2}{30} = 19.2$, and $10.8 \\cdot 19.2 = 207.36 = 14.4^2$ ✓. (The choice $15$ is HALVING THE HYPOTENUSE, the median’s length rather than the altitude’s ✗; $18$ is ANSWERING THE SHORTER LEG ✗; $21$ is AVERAGING THE LEGS ✗.)',
    },
    {
      q: 'In right triangle $JKL$ the legs $JL = 21$ and $KL = 28$ meet at the right angle $L$. Find the length of the altitude from $L$ to the hypotenuse $\\overline{JK}$.',
      fig: {
        w: 340,
        view: [-2.5, -3.5, 37.5, 19],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [12.6, 16.8]], fill: false },
          { t: 'seg', a: [12.6, 16.8], b: [12.6, 0], dash: true },
          { t: 'right', at: [12.6, 16.8], from: [0, 0], to: [35, 0], s: 1 },
          { t: 'right', at: [12.6, 0], from: [35, 0], to: [12.6, 16.8], s: 1 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 12 },
          { t: 'point', p: [35, 0], label: 'K', dx: 10, dy: 12 },
          { t: 'point', p: [12.6, 16.8], label: 'L', dx: 0, dy: -10 },
          { t: 'label', p: [6.3, 8.4], text: '21', dx: -12, dy: -6 },
          { t: 'label', p: [23.8, 8.4], text: '28', dx: 12, dy: -6 },
          { t: 'label', p: [12.6, 8.4], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$17.5$', '$21$', '$12$', '$16.8$'],
      answer: 3,
      solution:
        'Compute the area twice. From the legs: $\\frac{1}{2} \\cdot 21 \\cdot 28 = 294$. The hypotenuse is $\\sqrt{21^2 + 28^2} = 35$ (the $3$-$4$-$5$ family scaled by $7$), and with it as the base, $294 = \\frac{1}{2} \\cdot 35 \\cdot h$, so $h = \\frac{588}{35} = 16.8$ ✓. Check a second, independent way with similar triangles: $\\triangle JFL \\sim \\triangle JLK$ for the altitude’s foot $F$ (shared $\\angle J$, right angles at $F$ and $L$), so $\\frac{h}{28} = \\frac{21}{35}$ and $h = 28 \\cdot \\frac{21}{35} = 16.8$ ✓. Guard with the hypotenuse pieces: $\\frac{21^2}{35} = 12.6$ and $\\frac{28^2}{35} = 22.4$, and $12.6 \\cdot 22.4 = 282.24 = 16.8^2$ ✓. (The choice $17.5$ is HALVING THE HYPOTENUSE — the median from $L$, not the altitude ✗; $21$ is ANSWERING THE SHORTER LEG ✗; $12$ is DIVIDING BY THE LEG SUM, $\\frac{2 \\cdot 294}{21 + 28}$, a base no side of the triangle supplies ✗.)',
    },
  ],
  // s7 — area and an altitude given; the side it lands on wanted (figure).
  [
    {
      q: 'A racing sail has area $104$ square feet, and the batten running perpendicular from one corner to the opposite edge — the altitude to that edge — measures $8$ feet, as shown. How long is that edge?',
      fig: {
        view: [-2, -2, 28, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [26, 0], [8, 8]], fill: false },
          { t: 'seg', a: [8, 8], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [26, 0], to: [8, 8], s: 0.7 },
          { t: 'label', p: [8, 4], text: '8', dx: 10, dy: 0 },
          { t: 'label', p: [17, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 8], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$26$', '$13$', '$96$', '$8$'],
      answer: 0,
      solution:
        'Unwind the area formula: $104 = \\frac{1}{2} \\cdot b \\cdot 8 = 4b$, so $b = 26$ ✓. Check by rebuilding: a base of $26$ under a height of $8$ encloses $\\frac{1}{2} \\cdot 26 \\cdot 8 = 104$ ✓ — only $b = 26$ hands the area back. (The choice $13$ is DROPPING THE 2, computing $\\frac{104}{8}$ as if area were base times height ✗; $96$ is SUBTRACTING THE ALTITUDE FROM THE AREA, $104 - 8$, arithmetic between quantities that do not even share units ✗; $8$ is HANDING BACK THE ALTITUDE ✗.)',
    },
    {
      q: 'A triangular tarp has area $120$, and one of its altitudes measures $6$, as shown. Find the length of the side that this altitude lands on.',
      fig: {
        w: 360,
        view: [-2.5, -2.5, 42.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [40, 0], [8, 6]], fill: false },
          { t: 'seg', a: [8, 6], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [40, 0], to: [8, 6], s: 0.7 },
          { t: 'label', p: [8, 3], text: '6', dx: 10, dy: 0 },
          { t: 'label', p: [24, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [8, 6], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$20$', '$10$', '$40$', '$6$'],
      answer: 2,
      solution:
        'From $\\text{Area} = \\frac{1}{2} b h$: $120 = \\frac{1}{2} \\cdot b \\cdot 6 = 3b$, so $b = 40$ ✓. Check by rebuilding the area: $\\frac{1}{2} \\cdot 40 \\cdot 6 = 120$ ✓. (The choice $20$ is DROPPING THE 2, computing $\\frac{120}{6}$ ✗; $10$ is PUTTING THE 2 ON THE WRONG SIDE, $\\frac{120}{2 \\cdot 6}$ ✗; $6$ is HANDING BACK THE ALTITUDE ✗.)',
    },
    {
      q: 'Amara knows two facts about her triangle: its area is $105$, and one altitude has length $6$, as shown. She claims that is enough to find the exact length of the side that altitude meets. What is it?',
      fig: {
        w: 340,
        view: [-2.5, -2.5, 37.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [35, 0], [10, 6]], fill: false },
          { t: 'seg', a: [10, 6], b: [10, 0], dash: true },
          { t: 'right', at: [10, 0], from: [35, 0], to: [10, 6], s: 0.7 },
          { t: 'label', p: [10, 3], text: '6', dx: 10, dy: 0 },
          { t: 'label', p: [22, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [10, 6], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$17.5$', '$35$', '$6$', '$105$'],
      answer: 1,
      solution:
        'She is right, because every base–height pair computes the same area: $105 = \\frac{1}{2} \\cdot b \\cdot 6 = 3b$, so $b = 35$ ✓. Check by rebuilding: $\\frac{1}{2} \\cdot 35 \\cdot 6 = 105$ ✓ — the pairing pins the side even though no side length was given directly. (The choice $17.5$ is DROPPING THE 2, computing $\\frac{105}{6}$ ✗; $6$ is HANDING BACK THE ALTITUDE ✗; $105$ is HANDING BACK THE AREA ✗.)',
    },
  ],
  // s8 — the triangle whose four centers coincide.
  [
    {
      q: 'A jeweler stamps a triangular charm and wants to set a single gem that marks the charm’s orthocenter, centroid, incenter, and circumcenter all at once. What shape must the charm be?',
      choices: [
        'a right isosceles triangle',
        'an equilateral triangle',
        'any acute triangle will do',
        'any isosceles triangle will do',
      ],
      answer: 1,
      solution:
        'Total symmetry is the only way: in an equilateral triangle each altitude is simultaneously a median, an angle bisector, and a perpendicular bisector, so the four crossing points have no choice but to coincide ✓. Check a second, independent way with a merely isosceles triangle, $(0, 0)$, $(6, 0)$, $(3, 4)$: all four centers sit on the axis $x = 3$, but at different heights — centroid $\\left(3, \\frac{4}{3}\\right)$, orthocenter $(3, 2.25)$, incenter $(3, 1.5)$, circumcenter $\\left(3, \\frac{7}{8}\\right)$ — lined up, never merged ✓, so symmetry across one axis is not enough. (Both isosceles choices fall to LINING UP IS NOT LANDING TOGETHER ✗; "any acute triangle" is KEEPING THEM MERELY INSIDE — an acute triangle keeps all four centers inside, but at four separate addresses ✗.)',
    },
    {
      q: 'Rocío computes her triangle’s orthocenter and its circumcenter and discovers they are the SAME point. What must be true of her triangle?',
      choices: [
        'it is a right triangle',
        'no triangle can make those two centers agree',
        'it is equilateral',
        'it is isosceles, but need not be equilateral',
      ],
      answer: 2,
      solution:
        'The altitude from $A$ and the perpendicular bisector of $\\overline{BC}$ are both perpendicular to $\\overline{BC}$, so they are parallel; if the orthocenter equals the circumcenter, these two parallels share a point and must be the SAME line — so the altitude from $A$ passes through the midpoint of $\\overline{BC}$, forcing $AB = AC$. Repeating the argument at $B$ forces $BA = BC$, and equilateral follows ✓. Check a second, independent way against the candidates: a right triangle keeps its orthocenter at the right-angle vertex but its circumcenter at the hypotenuse midpoint — different points ✗ — and the isosceles triangle $(0, 0)$, $(6, 0)$, $(3, 4)$ has orthocenter $(3, 2.25)$ but circumcenter $\\left(3, \\frac{7}{8}\\right)$, still different ✗, while the equilateral triangle passes ✓. ("Right triangle" is SEPARATING THE CENTERS it claims to merge ✗; "no triangle" is OUTLAWING THE EQUILATERAL ✗; "isosceles is enough" is LINING UP IS NOT LANDING TOGETHER ✗.)',
    },
    {
      q: 'For most triangles, the list {orthocenter, centroid, incenter, circumcenter} names four different points. For which triangle below does the whole list collapse to a single point?',
      choices: [
        'any triangle with a $60^\\circ$ angle',
        'any right triangle',
        'any triangle with two congruent sides',
        'an equilateral triangle',
      ],
      answer: 3,
      solution:
        'In an equilateral triangle every altitude doubles as a median, an angle bisector, and a perpendicular bisector, so the four families of lines are one family — and their four meeting points are one point ✓. Check a second, independent way by testing the rivals: a $30$-$60$-$90$ triangle has a $60^\\circ$ angle, yet its orthocenter sits at the right-angle vertex while its circumcenter sits at the hypotenuse midpoint — separate points, so one $60^\\circ$ angle guarantees nothing ✗; a triangle with two congruent sides only lines its centers up along the axis of symmetry, as separate points ✗. (The first choice is ONE ANGLE IS NOT THREE ✗; the right triangle is SEPARATING THE CENTERS ✗; two congruent sides is LINING UP IS NOT LANDING TOGETHER ✗.)',
    },
  ],
  // s9 — altitude foot vs median foot on the base, from coordinates (figure).
  [
    {
      q: 'Triangle $ABC$ has $A(0, 0)$, $B(12, 0)$, and $C(4, 6)$. From $C$, the altitude lands on $\\overline{AB}$ at $F$ and the median lands at $M$, as shown. Find the distance $FM$.',
      fig: {
        view: [-1.5, -1.5, 13.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [4, 6]], fill: false },
          { t: 'seg', a: [4, 6], b: [4, 0], dash: true },
          { t: 'seg', a: [4, 6], b: [6, 0], dash: true },
          { t: 'right', at: [4, 0], from: [0, 0], to: [4, 6] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 6], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'F', dx: -8, dy: 12 },
          { t: 'point', p: [6, 0], label: 'M', dx: 8, dy: 12 },
        ],
      },
      choices: ['$2$', '$4$', '$6$', '$8$'],
      answer: 0,
      solution:
        'Since $\\overline{AB}$ lies on the x-axis, the altitude from $C$ drops straight down to $F(4, 0)$ — its direction $(0, -6)$ is perpendicular to $\\overline{AB}$’s direction $(1, 0)$ ✓. The median instead aims at the midpoint of $\\overline{AB}$, which is $M(6, 0)$. So $FM = 6 - 4 = 2$ ✓. Check that the gap should exist at all: $CB = \\sqrt{8^2 + 6^2} = 10$ while $CA = \\sqrt{4^2 + 6^2} = \\sqrt{52}$, and only when those two are equal do the altitude and median from $C$ merge — unequal sides, separate feet ✓. (The choice $4$ is ANSWERING F’S COORDINATE ✗; $6$ is ANSWERING M’S COORDINATE — it is also the altitude’s length, but neither is the asked-for gap ✗; $8$ is MEASURING FROM THE FAR END, computing $FB = 12 - 4$ ✗.)',
    },
    {
      q: 'In triangle $PQR$, $P(0, 0)$, $Q(22, 0)$, and $R(4, 5)$. The altitude from $R$ meets $\\overline{PQ}$ at $F$, and the median from $R$ meets it at $M$, as shown. How far apart are $F$ and $M$?',
      fig: {
        w: 340,
        view: [-1.5, -1.5, 23.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [22, 0], [4, 5]], fill: false },
          { t: 'seg', a: [4, 5], b: [4, 0], dash: true },
          { t: 'seg', a: [4, 5], b: [11, 0], dash: true },
          { t: 'right', at: [4, 0], from: [0, 0], to: [4, 5] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [22, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [4, 5], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'F', dx: -8, dy: 12 },
          { t: 'point', p: [11, 0], label: 'M', dx: 8, dy: 12 },
        ],
      },
      choices: ['$4$', '$7$', '$11$', '$18$'],
      answer: 1,
      solution:
        'The altitude from $R$ is perpendicular to the x-axis, so its foot is directly below $R$: $F(4, 0)$. The median goes to the midpoint of $\\overline{PQ}$: $M(11, 0)$. So $FM = 11 - 4 = 7$ ✓. Check with the side lengths: $RP = \\sqrt{4^2 + 5^2} = \\sqrt{41}$ and $RQ = \\sqrt{18^2 + 5^2} = \\sqrt{349}$ — far from equal, and the wide gap of $7$ on a base of $22$ reflects how lopsided the triangle is; the feet would coincide only if $RP = RQ$ ✓. (The choice $4$ is ANSWERING F’S COORDINATE ✗; $11$ is ANSWERING M’S COORDINATE ✗; $18$ is MEASURING FROM THE FAR END, computing $FQ = 22 - 4$ ✗.)',
    },
    {
      q: 'A triangle has vertices $A(0, 0)$, $B(20, 0)$, and $C(6, 9)$, as shown. How far apart are the foot of the altitude from $C$ and the endpoint of the median from $C$, both of which lie on $\\overline{AB}$?',
      fig: {
        w: 340,
        view: [-1.5, -1.5, 21.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [6, 9]], fill: false },
          { t: 'seg', a: [6, 9], b: [6, 0], dash: true },
          { t: 'seg', a: [6, 9], b: [10, 0], dash: true },
          { t: 'right', at: [6, 0], from: [0, 0], to: [6, 9] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 9], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'F', dx: -8, dy: 12 },
          { t: 'point', p: [10, 0], label: 'M', dx: 8, dy: 12 },
        ],
      },
      choices: ['$6$', '$10$', '$14$', '$4$'],
      answer: 3,
      solution:
        'The altitude from $C$ meets the x-axis at a right angle, so it lands directly below $C$ at $F(6, 0)$; the median lands on the midpoint of $\\overline{AB}$, $M(10, 0)$. The gap is $FM = 10 - 6 = 4$ ✓. Check that the two segments should really differ: $CA = \\sqrt{6^2 + 9^2} = \\sqrt{117}$ and $CB = \\sqrt{14^2 + 9^2} = \\sqrt{277}$, unequal — a triangle sends its altitude and median from $C$ to the same point only when $CA = CB$ ✓. (The choice $6$ is ANSWERING F’S COORDINATE ✗; $10$ is ANSWERING M’S COORDINATE ✗; $14$ is MEASURING FROM THE FAR END, computing $FB = 20 - 6$ ✗.)',
    },
  ],
  // s10 — orthocenter coordinates of a right triangle.
  [
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(11, 0)$, and $C(0, 8)$, as shown. Find the coordinates of its orthocenter.',
      fig: {
        view: [-1.5, -1.5, 12.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [11, 0], to: [0, 8] },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 8], label: 'C', dx: -10, dy: -8 },
        ],
      },
      choices: ['$(0, 0)$', '$\\left(\\frac{11}{3}, \\frac{8}{3}\\right)$', '$(5.5, 4)$', '$(5.5, 0)$'],
      answer: 0,
      solution:
        'The legs lie along the axes, so the right angle is at $A(0, 0)$ — and a right triangle’s orthocenter is its right-angle vertex, because the legs already serve as two of the altitudes ✓. Check a second, independent way by intersecting altitude lines: the altitude from $B$ is perpendicular to the vertical side $\\overline{AC}$, so it is the horizontal line $y = 0$; the altitude from $C$ is perpendicular to $\\overline{AB}$, so it is the vertical line $x = 0$; they cross at $(0, 0)$ ✓. (The point $\\left(\\frac{11}{3}, \\frac{8}{3}\\right)$ is GRABBING THE CENTROID, the average of the vertices ✗; $(5.5, 4)$ is PROMOTING THE CIRCUMCENTER, the hypotenuse midpoint ✗; $(5.5, 0)$ is PARKING AT A MIDPOINT of a leg ✗.)',
    },
    {
      q: 'Right triangle $DEF$ has vertices $D(2, 0)$, $E(14, 0)$, and $F(2, 9)$, with its right angle at $D$, as shown. Where do its three altitude lines concur?',
      fig: {
        view: [0.5, -1.5, 15.5, 10.5],
        elems: [
          { t: 'poly', pts: [[2, 0], [14, 0], [2, 9]], fill: false },
          { t: 'right', at: [2, 0], from: [14, 0], to: [2, 9] },
          { t: 'point', p: [2, 0], label: 'D', dx: -12, dy: 10 },
          { t: 'point', p: [14, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [2, 9], label: 'F', dx: -10, dy: -8 },
        ],
      },
      choices: ['$(8, 4.5)$', '$(2, 0)$', '$(6, 3)$', '$(8, 0)$'],
      answer: 1,
      solution:
        'Side $\\overline{DE}$ runs horizontally and side $\\overline{DF}$ runs vertically, so they are perpendicular legs meeting at $D(2, 0)$ — and the orthocenter of a right triangle is the right-angle vertex ✓. Check a second, independent way by intersecting altitudes: the altitude from $E$ is perpendicular to the vertical leg $\\overline{DF}$, so it is the horizontal line $y = 0$; the altitude from $F$ is perpendicular to the horizontal leg $\\overline{DE}$, so it is the vertical line $x = 2$; they meet at $(2, 0) = D$ ✓. (The point $(6, 3)$ is GRABBING THE CENTROID, $\\left(\\frac{2 + 14 + 2}{3}, \\frac{0 + 0 + 9}{3}\\right)$ ✗; $(8, 4.5)$ is PROMOTING THE CIRCUMCENTER, the midpoint of the hypotenuse $\\overline{EF}$ ✗; $(8, 0)$ is PARKING AT A MIDPOINT of leg $\\overline{DE}$ ✗.)',
    },
    {
      q: 'The triangle shown has vertices at $(0, 3)$, $(12, 3)$, and $(0, 11)$. What are the coordinates of its orthocenter?',
      fig: {
        view: [-1.5, 1.5, 13.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 3], [12, 3], [0, 11]], fill: false },
          { t: 'right', at: [0, 3], from: [12, 3], to: [0, 11] },
          { t: 'point', p: [0, 3], label: '(0, 3)', dx: 6, dy: 16 },
          { t: 'point', p: [12, 3], label: '(12, 3)', dx: -14, dy: 16 },
          { t: 'point', p: [0, 11], label: '(0, 11)', dx: 10, dy: -4 },
        ],
      },
      choices: ['$(6, 7)$', '$\\left(4, \\frac{17}{3}\\right)$', '$(6, 3)$', '$(0, 3)$'],
      answer: 3,
      solution:
        'The side to $(12, 3)$ is horizontal and the side to $(0, 11)$ is vertical, so the right angle sits at $(0, 3)$ — and since the two legs are themselves altitudes, the orthocenter is that right-angle vertex ✓. Check a second, independent way by intersecting altitude lines: the altitude from $(12, 3)$ is perpendicular to the vertical leg, so it is the horizontal line $y = 3$; the altitude from $(0, 11)$ is perpendicular to the horizontal leg, so it is the vertical line $x = 0$; they cross at $(0, 3)$ ✓. (The point $\\left(4, \\frac{17}{3}\\right)$ is GRABBING THE CENTROID ✗; $(6, 7)$ is PROMOTING THE CIRCUMCENTER, the midpoint of the hypotenuse ✗; $(6, 3)$ is PARKING AT A MIDPOINT of the horizontal leg ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  sections: { '7.5': s75 },
}
