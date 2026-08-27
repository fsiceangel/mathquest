// Introduction to Geometry chapter 8 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    solving the 360-degree equation vs. substituting back and re-adding all
//    four angles (slot 1); averaging the ratio parts vs. splitting the doubled
//    midsegment in the given ratio (slot 2); the bisecting-diagonals fact vs.
//    an explicit coordinate model centered at M (slot 3); the diameter-diagonal
//    argument vs. corner-distance verification from the center (slot 4);
//    computing both areas vs. the factored gap s(s - h) (slot 5); the property
//    argument vs. concrete example-and-counterexample coordinates (slot 6);
//    the counterexample test vs. checking each other shape never satisfies the
//    hypothesis (slot 7); overhang-plus-Pythagoras vs. rectangle-and-triangles
//    decomposition (slot 8); the ratio-area-Pythagoras chain vs. the
//    four-right-triangle decomposition naming the triple (slot 9); the
//    isosceles triangle on side AB vs. the isosceles triangle on side BC
//    (slot 10); the corner-triangles-fill argument vs. the half-diagonal side
//    computation (slot 11); the two-equations overhang split vs. computing the
//    height independently from each leg and decomposing (slot 12).
//  - Every figure is coordinate-exact: each quadrilateral in slot 1 is built
//    by turning through the true exterior angles, each slot 3 parallelogram is
//    centered at M with the stated side and half-diagonals, each inscribed
//    rectangle in slot 4 has its corners on the drawn circle, and each
//    trapezoid height foot sits at its computed x-coordinate.
//  - Figure labels are plain text: bare numerals, expressions like 2x+10, and
//    the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — algebraic angle expressions around a quadrilateral, find the
  // largest angle. Lane: 115 / 130 / 145.
  [
    {
      q: 'A stained-glass window pane has four corners, and the artist’s plan marks its interior angles, in order, as $x + 10^\\circ$, $2x$, $3x - 20^\\circ$, and $2x + 10^\\circ$. What is the measure of the pane’s largest angle?',
      fig: {
        view: [-1, -1.5, 7, 4.8],
        alt: 'Quadrilateral with interior angles marked x+10, 2x, 3x-20, and 2x+10',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 2.2], [2.64, 3.77]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [2.64, 3.77], r: 0.9, label: 'x+10' },
          { t: 'angle', at: [6, 0], from: [6, 2.2], to: [0, 0], r: 0.65, label: '2x' },
          { t: 'angle', at: [6, 2.2], from: [2.64, 3.77], to: [6, 0], r: 0.55, label: '3x-20' },
          { t: 'angle', at: [2.64, 3.77], from: [0, 0], to: [6, 2.2], r: 0.7, label: '2x+10' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 2.2], label: 'C', dx: 12, dy: -6 },
          { t: 'point', p: [2.64, 3.77], label: 'D', dx: -8, dy: -10 },
        ],
      },
      choices: ['$100^\\circ$', '$45^\\circ$', '$115^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'The four interior angles of any quadrilateral total $360^\\circ$: $(x + 10) + 2x + (3x - 20) + (2x + 10) = 8x = 360$, so $x = 45$. The angles are $55^\\circ$, $90^\\circ$, $115^\\circ$, and $100^\\circ$, and the largest is $3x - 20 = 115^\\circ$ ✓. Check a second, independent way by re-adding the finished angles: $55 + 90 + 115 + 100 = 360$ ✓, and the runner-up $2x + 10 = 100^\\circ$ falls $15^\\circ$ short of $115^\\circ$, so $3x - 20$ wins the comparison. (The choice $45^\\circ$ is STOPPING AT $x$ ITSELF; the choice $90^\\circ$ is PICKING $2x$, the right angle in the figure, instead of comparing all four; the choice $100^\\circ$ is MISTAKING $2x + 10$ FOR THE LARGEST because of its $+10$.)',
    },
    {
      q: 'Four solar panels tile a quadrilateral roof patch. A surveyor records its interior angles, going around the patch, as $x + 35^\\circ$, $2x$, $4x - 30^\\circ$, and $x + 35^\\circ$. Find the largest of the four angles.',
      fig: {
        view: [-1, -1.5, 7, 6.3],
        alt: 'Quadrilateral with interior angles marked x+35, 2x, 4x-30, and x+35',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [5.48, 2.95], [1.42, 5.29]], fill: false },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [1.42, 5.29], r: 0.9, label: 'x+35' },
          { t: 'angle', at: [6, 0], from: [5.48, 2.95], to: [0, 0], r: 0.9, label: '2x' },
          { t: 'angle', at: [5.48, 2.95], from: [1.42, 5.29], to: [6, 0], r: 0.55, label: '4x-30' },
          { t: 'angle', at: [1.42, 5.29], from: [0, 0], to: [5.48, 2.95], r: 0.7, label: 'x+35' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5.48, 2.95], label: 'C', dx: 12, dy: -6 },
          { t: 'point', p: [1.42, 5.29], label: 'D', dx: -8, dy: -10 },
        ],
      },
      choices: ['$130^\\circ$', '$40^\\circ$', '$80^\\circ$', '$150^\\circ$'],
      answer: 0,
      solution:
        'Set the sum equal to $360^\\circ$: $(x + 35) + 2x + (4x - 30) + (x + 35) = 8x + 40 = 360$, so $8x = 320$ and $x = 40$. The angles are $75^\\circ$, $80^\\circ$, $130^\\circ$, and $75^\\circ$; the largest is $4x - 30 = 130^\\circ$ ✓. Check a second, independent way by re-adding: $75 + 80 + 130 + 75 = 360$ ✓, and no other expression at $x = 40$ tops $80^\\circ$, so $4x - 30$ is the clear winner. (The choice $40^\\circ$ is STOPPING AT $x$; the choice $80^\\circ$ is PICKING $2x$ without comparing; the choice $150^\\circ$ is DROPPING THE CONSTANTS and solving $8x = 360$, which fakes $x = 45$ and $4x - 30 = 150$.)',
    },
    {
      q: 'In quadrilateral $PQRS$, $\\angle P = x$, $\\angle Q = 3x + 10^\\circ$, $\\angle R = 2x + 20^\\circ$, and $\\angle S = 2x - 30^\\circ$. What is the measure of the largest angle of $PQRS$?',
      fig: {
        view: [-1, -1.5, 8.1, 6.9],
        alt: 'Quadrilateral PQRS with interior angles marked x, 3x+10, 2x+20, and 2x-30',
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [7.05, 1.43], [5.86, 5.86]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [5.86, 5.86], r: 1.0, label: 'x' },
          { t: 'angle', at: [5, 0], from: [7.05, 1.43], to: [0, 0], r: 0.55, label: '3x+10' },
          { t: 'angle', at: [7.05, 1.43], from: [5.86, 5.86], to: [5, 0], r: 0.6, label: '2x+20' },
          { t: 'angle', at: [5.86, 5.86], from: [0, 0], to: [7.05, 1.43], r: 0.8, label: '2x-30' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'Q', dx: 4, dy: 12 },
          { t: 'point', p: [7.05, 1.43], label: 'R', dx: 12, dy: -4 },
          { t: 'point', p: [5.86, 5.86], label: 'S', dx: 6, dy: -10 },
        ],
      },
      choices: ['$45^\\circ$', '$110^\\circ$', '$135^\\circ$', '$145^\\circ$'],
      answer: 3,
      solution:
        'Add and set equal to $360^\\circ$: $x + (3x + 10) + (2x + 20) + (2x - 30) = 8x = 360$, since $+10 + 20 - 30$ cancels. So $x = 45$, and the angles are $45^\\circ$, $145^\\circ$, $110^\\circ$, and $60^\\circ$ — the largest is $\\angle Q = 3x + 10 = 145^\\circ$ ✓. Check a second, independent way by re-adding the results: $45 + 145 + 110 + 60 = 360$ ✓, and the nearest rival $2x + 20 = 110^\\circ$ trails by $35^\\circ$. (The choice $45^\\circ$ is STOPPING AT $x$; the choice $110^\\circ$ is THE SECOND-LARGEST angle $2x + 20$; the choice $135^\\circ$ is COMPUTING $3x$ AND DROPPING THE $+10$.)',
    },
  ],

  // slot 2 — midsegment length plus base ratio, recover the longer base.
  // Lane: 16 / 24 / 30.
  [
    {
      q: 'A wheelchair ramp’s side panel is a trapezoid. The stiffening bar welded across its middle — joining the midpoints of the two slanted edges — measures $14$, and the panel’s two parallel edges are in the ratio $3 : 4$. How long is the longer parallel edge?',
      choices: ['$12$', '$16$', '$28$', '$8$'],
      answer: 1,
      solution:
        'The bar is the midsegment, so it equals the average of the parallel edges. Write them as $3k$ and $4k$: $\\frac{3k + 4k}{2} = 14$, so $7k = 28$ and $k = 4$ — the edges are $12$ and $16$, and the longer is $16$ ✓. Check a second, independent way from the sum: the edges total $2 \\times 14 = 28$, and splitting $28$ in the ratio $3 : 4$ gives $12$ and $16$, whose average is indeed $14$ ✓. (The choice $12$ is THE SHORTER EDGE; the choice $28$ is THE SUM of the two edges; the choice $8$ is SETTING THE SUM $7k$ EQUAL TO THE MIDSEGMENT instead of the average.)',
    },
    {
      q: 'A trapezoidal banner has a crease along its midsegment measuring $18$ inches, and one parallel side of the banner is twice as long as the other. Find the longer parallel side.',
      choices: ['$12$', '$36$', '$18$', '$24$'],
      answer: 3,
      solution:
        'Call the shorter parallel side $b$, so the longer is $2b$. The midsegment averages them: $\\frac{b + 2b}{2} = 18$, so $3b = 36$ and $b = 12$ — the longer side is $2b = 24$ inches ✓. Check a second, independent way from the sum: the two sides total $2 \\times 18 = 36$ inches, and a $1 : 2$ split of $36$ is $12$ and $24$, which average back to $18$ ✓. (The choice $12$ is THE SHORTER SIDE; the choice $36$ is THE SUM of the two sides; the choice $18$ is TREATING THE MIDSEGMENT AS A BASE rather than the average of the bases.)',
    },
    {
      q: 'The midline of a trapezoid-shaped vineyard plot — the segment joining the midpoints of its two non-parallel sides — runs $25$ meters, and the plot’s parallel sides are in the ratio $2 : 3$. How long is the longer parallel side?',
      choices: ['$20$', '$50$', '$30$', '$10$'],
      answer: 2,
      solution:
        'With parallel sides $2k$ and $3k$, the midline is their average: $\\frac{2k + 3k}{2} = 25$, so $5k = 50$ and $k = 10$ — the sides are $20$ and $30$ meters, the longer being $30$ ✓. Check a second, independent way through the sum: the sides total $2 \\times 25 = 50$ meters, and dividing $50$ in the ratio $2 : 3$ gives $20$ and $30$; their average is $25$ ✓. (The choice $20$ is THE SHORTER SIDE; the choice $50$ is THE SUM of the sides; the choice $10$ is STOPPING AT THE RATIO UNIT $k$.)',
    },
  ],

  // slot 3 — parallelogram diagonals and one side, perimeter of triangle ABM.
  // Lane: 28 / 33 / 36.
  [
    {
      q: 'Two support rods run along the diagonals of a parallelogram-shaped gate $ABCD$, crossing at $M$. The gate’s rail $\\overline{AB}$ is $10$, rod $AC$ is $14$, and rod $BD$ is $22$. What is the perimeter of the triangular panel $ABM$?',
      fig: {
        view: [-8.5, -11, 8.5, 11],
        alt: 'Parallelogram ABCD with diagonals AC and BD crossing at M and side AB of length 10',
        elems: [
          { t: 'poly', pts: [[-7, 0], [-5, -9.8], [7, 0], [5, 9.8]], fill: false },
          { t: 'seg', a: [-7, 0], b: [7, 0], dash: true },
          { t: 'seg', a: [-5, -9.8], b: [5, 9.8], dash: true },
          { t: 'label', p: [-6, -4.9], text: '10', dx: -14, dy: 0 },
          { t: 'point', p: [-7, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [-5, -9.8], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [7, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [5, 9.8], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: 12, dy: -8 },
        ],
      },
      choices: ['$28$', '$46$', '$18$', '$23$'],
      answer: 0,
      solution:
        'The diagonals of a parallelogram bisect each other, so $AM = \\frac{14}{2} = 7$ and $BM = \\frac{22}{2} = 11$. The perimeter of $\\triangle ABM$ is $10 + 7 + 11 = 28$ ✓. Check a second, independent way with coordinates centered at $M(0, 0)$: put $A(-7, 0)$ and $B(-5, -9.8)$, so $AM = 7$, $BM = \\sqrt{25 + 96.04} \\approx 11$, and $AB = \\sqrt{4 + 96.04} \\approx 10$ ✓ — the three stated lengths genuinely coexist in one parallelogram, and their sum is $28$. (The choice $46$ is ADDING THE FULL DIAGONALS $10 + 14 + 22$, forgetting the bisection; the choice $18$ is DROPPING SIDE $AB$ and adding only $7 + 11$; the choice $23$ is HALVING $AB$ TOO, computing $5 + 7 + 11$.)',
    },
    {
      q: 'A drafting exercise shows parallelogram $ABCD$ with both diagonals drawn in, meeting at $M$. The measurements read $AC = 16$, $BD = 24$, and side $AB = 13$. What perimeter does triangle $ABM$ have?',
      fig: {
        view: [-9.5, -13, 9.5, 13],
        alt: 'Parallelogram ABCD with diagonals of length 16 and 24 crossing at M and side AB of length 13',
        elems: [
          { t: 'poly', pts: [[-8, 0], [-2.44, -11.75], [8, 0], [2.44, 11.75]], fill: false },
          { t: 'seg', a: [-8, 0], b: [8, 0], dash: true },
          { t: 'seg', a: [-2.44, -11.75], b: [2.44, 11.75], dash: true },
          { t: 'label', p: [-5.22, -5.88], text: '13', dx: -14, dy: 0 },
          { t: 'point', p: [-8, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [-2.44, -11.75], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [8, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [2.44, 11.75], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: 12, dy: -8 },
        ],
      },
      choices: ['$53$', '$20$', '$26.5$', '$33$'],
      answer: 3,
      solution:
        'Since the diagonals of a parallelogram bisect each other, $AM = \\frac{16}{2} = 8$ and $BM = \\frac{24}{2} = 12$, so the perimeter of $\\triangle ABM$ is $13 + 8 + 12 = 33$ ✓. Check a second, independent way with $M$ at the origin: $A(-8, 0)$ and $B(-2.44, -11.75)$ give $AM = 8$, $BM = \\sqrt{5.95 + 138.06} \\approx 12$, and $AB = \\sqrt{30.91 + 138.06} \\approx 13$ ✓ — a concrete parallelogram carries all three numbers at once. (The choice $53$ is ADDING THE FULL DIAGONALS $13 + 16 + 24$; the choice $20$ is DROPPING SIDE $AB$; the choice $26.5$ is HALVING $AB$ TOO, computing $6.5 + 8 + 12$.)',
    },
    {
      q: 'Parallelogram $ABCD$ has diagonals $\\overline{AC}$ and $\\overline{BD}$ crossing at $M$, with $AC = 22$, $BD = 20$, and $AB = 15$. A wire must trace the boundary of triangle $ABM$ exactly once. How much wire is needed?',
      fig: {
        view: [-12.5, -11.5, 12.5, 11.5],
        alt: 'Parallelogram ABCD with diagonals of length 22 and 20 crossing at M and side AB of length 15',
        elems: [
          { t: 'poly', pts: [[-11, 0], [0.18, -10], [11, 0], [-0.18, 10]], fill: false },
          { t: 'seg', a: [-11, 0], b: [11, 0], dash: true },
          { t: 'seg', a: [0.18, -10], b: [-0.18, 10], dash: true },
          { t: 'label', p: [-5.41, -5], text: '15', dx: -14, dy: 0 },
          { t: 'point', p: [-11, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0.18, -10], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [11, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [-0.18, 10], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'M', dx: 12, dy: -8 },
        ],
      },
      choices: ['$57$', '$36$', '$21$', '$28.5$'],
      answer: 1,
      solution:
        'The diagonals bisect each other at $M$, so $AM = \\frac{22}{2} = 11$ and $BM = \\frac{20}{2} = 10$. The wire needs $15 + 11 + 10 = 36$ ✓. Check a second, independent way with coordinates around $M(0, 0)$: $A(-11, 0)$ and $B(0.18, -10)$ give $AM = 11$, $BM = \\sqrt{0.03 + 100} \\approx 10$, and $AB = \\sqrt{124.99 + 100} \\approx 15$ ✓, so the triangle with sides $11$, $10$, $15$ is exactly the one the parallelogram builds. (The choice $57$ is ADDING THE FULL DIAGONALS $15 + 22 + 20$; the choice $21$ is DROPPING SIDE $AB$ and adding $11 + 10$; the choice $28.5$ is HALVING $AB$ TOO, computing $7.5 + 11 + 10$.)',
    },
  ],

  // slot 4 — rectangle inscribed in a circle, find the area.
  // Lane: 960 / 420 / 360.
  [
    {
      q: 'All four corners of a rectangular picture frame touch a circular mirror of radius $26$. One side of the frame measures $20$. What is the area of the frame’s rectangle?',
      fig: {
        view: [-28.5, -28, 28.5, 28],
        alt: 'Rectangle inscribed in a circle of radius 26, with side 20 and a dashed diagonal through the center',
        elems: [
          { t: 'circle', c: [0, 0], r: 26 },
          { t: 'poly', pts: [[-24, -10], [24, -10], [24, 10], [-24, 10]], fill: false },
          { t: 'seg', a: [-24, -10], b: [24, 10], dash: true },
          { t: 'label', p: [24, 0], text: '20', dx: -14, dy: 0 },
          { t: 'label', p: [0, -10], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-24, -10], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, -10], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [24, 10], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-24, 10], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$1040$', '$520$', '$480$', '$960$'],
      answer: 3,
      solution:
        'A diagonal of an inscribed rectangle passes through the center of the circle, so it is a diameter: $d = 2 \\times 26 = 52$. The other side is $\\sqrt{52^2 - 20^2} = \\sqrt{2704 - 400} = \\sqrt{2304} = 48$ — a $20$-$48$-$52$ triangle, four times $5$-$12$-$13$ — so the area is $20 \\times 48 = 960$ ✓. Check a second, independent way with the center at the origin: corners $(\\pm 24, \\pm 10)$ sit at distance $\\sqrt{576 + 100} = \\sqrt{676} = 26$ from the center ✓, and that rectangle measures $48$ by $20$, area $960$ ✓. (The choice $1040$ is USING THE DIAGONAL AS A SIDE, $20 \\times 52$; the choice $520$ is MULTIPLYING BY THE RADIUS, $20 \\times 26$; the choice $480$ is HALVING THE AREA as if the rectangle were a triangle.)',
    },
    {
      q: 'A circular saw blade of radius $14.5$ has a rectangular logo etched on it, with every corner of the logo on the blade’s rim. The logo is $21$ tall. Find the logo’s area.',
      fig: {
        view: [-16, -16, 16, 16],
        alt: 'Rectangle inscribed in a circle of radius 14.5, with vertical side 21 and a dashed diagonal',
        elems: [
          { t: 'circle', c: [0, 0], r: 14.5 },
          { t: 'poly', pts: [[-10, -10.5], [10, -10.5], [10, 10.5], [-10, 10.5]], fill: false },
          { t: 'seg', a: [-10, -10.5], b: [10, 10.5], dash: true },
          { t: 'label', p: [10, 0], text: '21', dx: -14, dy: 0 },
          { t: 'label', p: [0, -10.5], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-10, -10.5], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [10, -10.5], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [10, 10.5], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-10, 10.5], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$420$', '$609$', '$304.5$', '$210$'],
      answer: 0,
      solution:
        'Corners on the rim make each diagonal of the logo a diameter of the blade: $d = 2 \\times 14.5 = 29$. The other side is $\\sqrt{29^2 - 21^2} = \\sqrt{841 - 441} = \\sqrt{400} = 20$ — the $20$-$21$-$29$ triple — so the area is $21 \\times 20 = 420$ ✓. Check a second, independent way from the center: corners $(\\pm 10, \\pm 10.5)$ lie at $\\sqrt{100 + 110.25} = \\sqrt{210.25} = 14.5$ from the center ✓, and the rectangle they bound is $20$ wide and $21$ tall, area $420$ ✓. (The choice $609$ is USING THE DIAGONAL AS A SIDE, $21 \\times 29$; the choice $304.5$ is MULTIPLYING BY THE RADIUS, $21 \\times 14.5$; the choice $210$ is HALVING THE AREA as if the logo were a triangle.)',
    },
    {
      q: 'A rectangular dock floats in a circular pond so that its four corners just reach the bank. The pond’s radius is $20.5$ and the dock is $40$ long. What area does the dock cover?',
      fig: {
        view: [-22.5, -22, 22.5, 22],
        alt: 'Rectangle inscribed in a circle of radius 20.5, with long side 40 and a dashed diagonal',
        elems: [
          { t: 'circle', c: [0, 0], r: 20.5 },
          { t: 'poly', pts: [[-20, -4.5], [20, -4.5], [20, 4.5], [-20, 4.5]], fill: false },
          { t: 'seg', a: [-20, -4.5], b: [20, 4.5], dash: true },
          { t: 'label', p: [0, -4.5], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [20, 0], text: '?', dx: -12, dy: 0 },
          { t: 'point', p: [-20, -4.5], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [20, -4.5], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [20, 4.5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-20, 4.5], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$820$', '$1640$', '$360$', '$180$'],
      answer: 2,
      solution:
        'With all four corners on the bank, the dock’s diagonal is a diameter of the pond: $d = 2 \\times 20.5 = 41$. The short side is $\\sqrt{41^2 - 40^2} = \\sqrt{1681 - 1600} = \\sqrt{81} = 9$ — the $9$-$40$-$41$ triple — so the dock covers $40 \\times 9 = 360$ ✓. Check a second, independent way from the pond’s center: corners $(\\pm 20, \\pm 4.5)$ are $\\sqrt{400 + 20.25} = \\sqrt{420.25} = 20.5$ from the center ✓, and they bound a $40$ by $9$ rectangle of area $360$ ✓. (The choice $1640$ is USING THE DIAGONAL AS A SIDE, $40 \\times 41$; the choice $820$ is MULTIPLYING BY THE RADIUS, $40 \\times 20.5$; the choice $180$ is HALVING THE AREA as if the dock were a triangle.)',
    },
  ],

  // slot 5 — square vs. rhombus with equal perimeters, area difference.
  // Lane: 36 / 27 / 70.
  [
    {
      q: 'A jeweler bends two wires, each $48$ long, into closed shapes: one becomes a square, the other a rhombus whose height — the perpendicular distance between opposite sides — is $9$. By how much does the square’s area exceed the rhombus’s area?',
      choices: ['$0$', '$36$', '$3$', '$108$'],
      answer: 1,
      solution:
        'Equal perimeters give equal sides: each shape has side $\\frac{48}{4} = 12$. The square’s area is $12^2 = 144$; the rhombus is a parallelogram, so its area is base times height, $12 \\times 9 = 108$. The square wins by $144 - 108 = 36$ ✓. Check a second, independent way by factoring the gap: both areas share the base $12$, so the difference is $s(s - h) = 12(12 - 9) = 36$ ✓ — a square is just the rhombus whose height has grown to the full side length. (The choice $0$ is ASSUMING EQUAL PERIMETERS FORCE EQUAL AREAS; the choice $3$ is SUBTRACTING THE HEIGHTS $12 - 9$ instead of the areas; the choice $108$ is REPORTING THE RHOMBUS’S AREA rather than the difference.)',
    },
    {
      q: 'Two garden beds are edged with the same $36$ meters of border. One bed is a square; the other is rhombus-shaped, with its opposite edges $6$ meters apart. How many more square meters does the square bed cover?',
      choices: ['$54$', '$3$', '$27$', '$0$'],
      answer: 2,
      solution:
        'Both beds have side $\\frac{36}{4} = 9$ meters. The square bed covers $9^2 = 81$; the rhombus bed, as a parallelogram, covers base times height $= 9 \\times 6 = 54$. The square covers $81 - 54 = 27$ more ✓. Check a second, independent way with the factored form: the difference is $s(s - h) = 9(9 - 6) = 27$ ✓, confirming that shrinking a square’s height while keeping its perimeter always loses area. (The choice $54$ is REPORTING THE RHOMBUS BED’S AREA; the choice $3$ is SUBTRACTING THE HEIGHTS $9 - 6$; the choice $0$ is ASSUMING EQUAL PERIMETERS FORCE EQUAL AREAS.)',
    },
    {
      q: 'A square badge and a rhombus badge are cut so that each has perimeter $56$. The rhombus badge’s two pairs of parallel edges sit $9$ apart. Find the difference between the two badge areas.',
      choices: ['$70$', '$126$', '$5$', '$0$'],
      answer: 0,
      solution:
        'Each badge has side $\\frac{56}{4} = 14$. The square badge has area $14^2 = 196$; the rhombus badge has area base times height $= 14 \\times 9 = 126$. The difference is $196 - 126 = 70$ ✓. Check a second, independent way by factoring: $s(s - h) = 14(14 - 9) = 70$ ✓ — with the perimeter fixed, the rhombus’s tilt costs exactly $s$ times the lost height. (The choice $126$ is REPORTING THE RHOMBUS BADGE’S AREA; the choice $5$ is SUBTRACTING THE HEIGHTS $14 - 9$; the choice $0$ is ASSUMING EQUAL PERIMETERS FORCE EQUAL AREAS.)',
    },
  ],

  // slot 6 — the quadrilateral type with perpendicular bisecting diagonals.
  // Conceptual; three dressings, answer rhombus each time.
  [
    {
      q: 'Amara notices that in a certain type of quadrilateral, no matter which example of the type she draws, each diagonal crosses the other at its midpoint AND the two diagonals meet at $90^\\circ$. Which type of quadrilateral is she drawing?',
      choices: ['a rhombus', 'a kite', 'a rectangle', 'a parallelogram'],
      answer: 0,
      solution:
        'Bisecting diagonals make the shape a parallelogram, and in a parallelogram perpendicular diagonals force all four sides equal — so both properties together, holding for EVERY example, is exactly the rhombus’s signature ✓. Check a second, independent way with coordinates: any rhombus can be drawn with vertices $(\\pm a, 0)$ and $(0, \\pm b)$, so its diagonals lie along the axes — perpendicular, and cut in half at the origin — for every $a$ and $b$ ✓, while an $8 \\times 4$ rectangle’s diagonals cross at about $53^\\circ$, not $90^\\circ$. (A KITE has perpendicular diagonals, but in general only ONE of them is bisected; a RECTANGLE has bisecting, equal diagonals that are perpendicular only when it is a square; a PARALLELOGRAM guarantees the bisecting but NOT the right angle.)',
    },
    {
      q: 'A quadrilateral’s two diagonals are drawn. Which name below GUARANTEES, all by itself, that the diagonals are perpendicular and that each one splits the other into two equal pieces?',
      choices: ['a rectangle', 'an isosceles trapezoid', 'a kite', 'a rhombus'],
      answer: 3,
      solution:
        'Every rhombus is a parallelogram, so its diagonals bisect each other; and its four equal sides force those diagonals to meet at right angles. Both facts follow from the name alone ✓. Check a second, independent way by testing the other names with coordinates: the isosceles trapezoid $(-5, 0)$, $(5, 0)$, $(2, 4)$, $(-2, 4)$ has equal diagonals that cross at $\\left(0, \\frac{20}{7}\\right)$ — a point $\\frac{5}{7}$ of the way along each, so neither is bisected; a $12 \\times 5$ rectangle’s diagonals bisect each other but meet at about $45.2^\\circ$; and the rhombus $(\\pm 6, 0)$, $(0, \\pm 2.5)$ passes both tests on the axes ✓. (A RECTANGLE delivers bisecting and equal diagonals but NOT perpendicular ones; an ISOSCELES TRAPEZOID delivers equal diagonals that do NOT bisect each other; a KITE delivers the right angle but bisects only ONE diagonal in general.)',
    },
    {
      q: 'For which of these quadrilateral types is it TRUE in every case that the diagonals both bisect each other and meet at right angles?',
      choices: ['an isosceles trapezoid', 'a rhombus', 'a parallelogram', 'a kite'],
      answer: 1,
      solution:
        'The rhombus is the parallelogram with four equal sides, and that extra equality is precisely what turns its already-bisecting diagonals perpendicular — so every rhombus, squares included, passes both tests ✓. Check a second, independent way with examples: the rhombus $(\\pm 4, 0)$, $(0, \\pm 7)$ has its diagonals on the axes, perpendicular and mutually bisected ✓; the parallelogram $(0, 0)$, $(6, 0)$, $(8, 3)$, $(2, 3)$ has both diagonal midpoints at $(4, 1.5)$, yet the diagonal directions $(8, 3)$ and $(-4, 3)$ have dot product $-23 \\neq 0$, so no right angle; and the kite $(0, 5)$, $(2, 0)$, $(0, -3)$, $(-2, 0)$ bisects its horizontal diagonal but splits the vertical one $5$ to $3$. (An ISOSCELES TRAPEZOID’S diagonals are equal but do NOT bisect each other; a PARALLELOGRAM bisects but need NOT be perpendicular; a KITE is perpendicular but bisects only ONE diagonal.)',
    },
  ],

  // slot 7 — defeating the converse of a true square statement.
  // Answer each round: a rectangle that is not a square.
  [
    {
      q: 'The statement "If a quadrilateral is a square, then all four of its angles are right angles" is true. Which shape shows that its CONVERSE is false?',
      choices: [
        'a square',
        'a rhombus with a $60^\\circ$ angle',
        'a rectangle that is not a square',
        'a parallelogram with an $80^\\circ$ angle',
      ],
      answer: 2,
      solution:
        'The converse claims: four right angles force a square. A non-square rectangle has all four right angles yet unequal neighboring sides, so it satisfies the hypothesis and breaks the conclusion — a direct counterexample ✓. Check a second, independent way by auditing the other shapes: the $60^\\circ$ rhombus and the $80^\\circ$ parallelogram never have four right angles, so they never even trigger the converse’s "if" part, and a square simply agrees with the converse; only the non-square rectangle puts it to the test and defeats it — a $5 \\times 8$ rectangle does the job concretely ✓. (The SQUARE choice AGREES WITH THE CONVERSE instead of testing it; the RHOMBUS and PARALLELOGRAM choices NEVER SATISFY THE HYPOTHESIS, so they prove nothing.)',
    },
    {
      q: 'Every square has diagonals that are congruent AND bisect each other — a true statement. Tomás claims the converse: "Any quadrilateral whose diagonals are congruent and bisect each other must be a square." Which shape defeats his claim?',
      choices: [
        'a rhombus that is not a square',
        'a rectangle that is not a square',
        'an isosceles trapezoid',
        'a square',
      ],
      answer: 1,
      solution:
        'A non-square rectangle has diagonals that are congruent (a rectangle property) and that bisect each other (a parallelogram property), yet its sides are not all equal — the hypothesis holds and the conclusion fails, so Tomás’s converse is false ✓. Check a second, independent way with numbers: in a $6 \\times 10$ rectangle both diagonals measure $\\sqrt{36 + 100} = 2\\sqrt{34}$ and cross at their shared midpoint, but the shape is plainly not a square ✓ — and no other listed shape even qualifies: an isosceles trapezoid’s congruent diagonals do NOT bisect each other, and a non-square rhombus’s bisecting diagonals are NOT congruent. (The RHOMBUS choice FAILS THE CONGRUENT-DIAGONALS HYPOTHESIS; the ISOSCELES TRAPEZOID choice FAILS THE BISECTING HYPOTHESIS; the SQUARE choice AGREES WITH THE CLAIM instead of defeating it.)',
    },
    {
      q: '"If a quadrilateral is a square, then both pairs of its opposite sides are parallel and its two diagonals have equal length." This statement is true. To prove its converse false, which counterexample should you reach for?',
      choices: [
        'a rhombus with a $70^\\circ$ angle',
        'an isosceles trapezoid that is not a parallelogram',
        'a square',
        'a rectangle that is not a square',
      ],
      answer: 3,
      solution:
        'The converse says a parallelogram with equal diagonals must be a square. A non-square rectangle satisfies every part of the hypothesis — both pairs of opposite sides parallel, diagonals equal — while flunking the conclusion, so it is the counterexample ✓. Check a second, independent way: a $3 \\times 7$ rectangle has both diagonals equal to $\\sqrt{9 + 49} = \\sqrt{58}$ and is certainly a parallelogram, yet its sides differ ✓; meanwhile the $70^\\circ$ rhombus has parallel sides but UNEQUAL diagonals, and the isosceles trapezoid has equal diagonals but only ONE pair of parallel sides — neither ever satisfies the full hypothesis. (The RHOMBUS choice FAILS THE EQUAL-DIAGONALS HYPOTHESIS; the ISOSCELES TRAPEZOID choice FAILS THE PARALLEL-SIDES HYPOTHESIS; the SQUARE choice AGREES WITH THE CONVERSE.)',
    },
  ],

  // slot 8 — isosceles trapezoid from bases and legs, find the area.
  // Lane: 240 / 216 / 330.
  [
    {
      q: 'The face of a plant stand is an isosceles trapezoid: parallel edges of $25$ and $15$, and equal slanted edges of $13$. Find the area of the face.',
      fig: {
        view: [-14, -1.5, 14, 13.5],
        alt: 'Isosceles trapezoid with bases 25 and 15, legs 13, and a dashed height of 12',
        elems: [
          { t: 'poly', pts: [[-12.5, 0], [12.5, 0], [7.5, 12], [-7.5, 12]], fill: false },
          { t: 'seg', a: [7.5, 12], b: [7.5, 0], dash: true },
          { t: 'right', at: [7.5, 0], from: [12.5, 0], to: [7.5, 12] },
          { t: 'tick', a: [-12.5, 0], b: [-7.5, 12], n: 1 },
          { t: 'tick', a: [12.5, 0], b: [7.5, 12], n: 1 },
          { t: 'label', p: [-2.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '15', dx: 0, dy: -10 },
          { t: 'label', p: [10, 6], text: '13', dx: 12, dy: 0 },
          { t: 'point', p: [-12.5, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12.5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7.5, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-7.5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$240$', '$260$', '$480$', '$300$'],
      answer: 0,
      solution:
        'Drop a height from $C$; by symmetry its foot lands $\\frac{25 - 15}{2} = 5$ in from $B$, so the height is $\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ — a $5$-$12$-$13$ triangle. Area $= \\frac{25 + 15}{2} \\times 12 = 20 \\times 12 = 240$ ✓. Check a second, independent way by decomposition: a central $15 \\times 12$ rectangle contributes $180$, and the two end triangles contribute $2 \\times \\frac{1}{2} \\cdot 5 \\cdot 12 = 60$, for $180 + 60 = 240$ ✓. (The choice $260$ is USING THE SLANT EDGE AS THE HEIGHT, $20 \\times 13$; the choice $480$ is FORGETTING TO HALVE the sum of the bases, $40 \\times 12$; the choice $300$ is MULTIPLYING THE LONG BASE ALONE by the height, $25 \\times 12$.)',
    },
    {
      q: 'An isosceles-trapezoid awning has parallel edges of $23$ feet and $13$ feet, and each slanted edge measures $13$ feet. How many square feet of fabric does the awning use?',
      fig: {
        view: [-13, -1.5, 13, 13.5],
        alt: 'Isosceles trapezoid with bases 23 and 13, legs 13, and a dashed height of 12',
        elems: [
          { t: 'poly', pts: [[-11.5, 0], [11.5, 0], [6.5, 12], [-6.5, 12]], fill: false },
          { t: 'seg', a: [6.5, 12], b: [6.5, 0], dash: true },
          { t: 'right', at: [6.5, 0], from: [11.5, 0], to: [6.5, 12] },
          { t: 'tick', a: [-11.5, 0], b: [-6.5, 12], n: 1 },
          { t: 'tick', a: [11.5, 0], b: [6.5, 12], n: 1 },
          { t: 'label', p: [-2.5, 0], text: '23', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '13', dx: 0, dy: -10 },
          { t: 'label', p: [9, 6], text: '13', dx: 12, dy: 0 },
          { t: 'point', p: [-11.5, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11.5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6.5, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-6.5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$234$', '$156$', '$216$', '$432$'],
      answer: 2,
      solution:
        'The overhang on each side is $\\frac{23 - 13}{2} = 5$ feet, so the height is $\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ feet. Area $= \\frac{23 + 13}{2} \\times 12 = 18 \\times 12 = 216$ ✓. Check a second, independent way by slicing: the middle $13 \\times 12$ rectangle holds $156$, and the two side triangles hold $2 \\times \\frac{1}{2} \\cdot 5 \\cdot 12 = 60$, so $156 + 60 = 216$ ✓. (The choice $234$ is USING THE SLANT EDGE AS THE HEIGHT, $18 \\times 13$; the choice $432$ is FORGETTING TO HALVE the base sum, $36 \\times 12$; the choice $156$ is MULTIPLYING ONLY THE SHORT EDGE by the height, $13 \\times 12$.)',
    },
    {
      q: 'The cross-section of a drainage channel is an isosceles trapezoid with parallel sides $30$ and $14$ and equal legs of $17$. What is the cross-sectional area?',
      fig: {
        view: [-16.5, -1.5, 16.5, 16.5],
        alt: 'Isosceles trapezoid with bases 30 and 14, legs 17, and a dashed height of 15',
        elems: [
          { t: 'poly', pts: [[-15, 0], [15, 0], [7, 15], [-7, 15]], fill: false },
          { t: 'seg', a: [7, 15], b: [7, 0], dash: true },
          { t: 'right', at: [7, 0], from: [15, 0], to: [7, 15] },
          { t: 'tick', a: [-15, 0], b: [-7, 15], n: 1 },
          { t: 'tick', a: [15, 0], b: [7, 15], n: 1 },
          { t: 'label', p: [-4, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [0, 15], text: '14', dx: 0, dy: -10 },
          { t: 'label', p: [11, 7.5], text: '17', dx: 12, dy: 0 },
          { t: 'point', p: [-15, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7, 15], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-7, 15], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$374$', '$330$', '$660$', '$450$'],
      answer: 1,
      solution:
        'By symmetry each end of the long side overhangs by $\\frac{30 - 14}{2} = 8$, so the depth is $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$ — the $8$-$15$-$17$ triple. Area $= \\frac{30 + 14}{2} \\times 15 = 22 \\times 15 = 330$ ✓. Check a second, independent way by decomposition: the central $14 \\times 15$ rectangle holds $210$, and the two end triangles hold $2 \\times \\frac{1}{2} \\cdot 8 \\cdot 15 = 120$, giving $210 + 120 = 330$ ✓. (The choice $374$ is USING THE SLANT LEG AS THE HEIGHT, $22 \\times 17$; the choice $660$ is FORGETTING TO HALVE the base sum, $44 \\times 15$; the choice $450$ is MULTIPLYING THE LONG SIDE ALONE by the height, $30 \\times 15$.)',
    },
  ],

  // slot 9 — rhombus diagonal ratio and area, find the perimeter.
  // Lane: 52 / 50 / 68.
  [
    {
      q: 'A rhombus-shaped park has diagonals in the ratio $5 : 12$ and an area of $120$. A jogging path runs once around the park’s boundary. How long is the path?',
      choices: ['$104$', '$34$', '$13$', '$52$'],
      answer: 3,
      solution:
        'Write the diagonals as $5k$ and $12k$: $\\frac{(5k)(12k)}{2} = 30k^2 = 120$, so $k^2 = 4$ and $k = 2$ — the diagonals are $10$ and $24$. The half-diagonals $5$ and $12$ are the legs of each corner right triangle, so every side is $\\sqrt{5^2 + 12^2} = 13$ and the path is $4 \\times 13 = 52$ ✓. Check a second, independent way through the four congruent right triangles: each holds $\\frac{1}{2} \\cdot 5 \\cdot 12 = 30$, and $4 \\times 30 = 120$ ✓ matches the given area, while each hypotenuse is the $5$-$12$-$13$ triple’s $13$ ✓. (The choice $104$ is USING THE FULL DIAGONALS AS LEGS, faking a side of $26$; the choice $34$ is ADDING THE DIAGONALS $10 + 24$; the choice $13$ is STOPPING AT ONE SIDE.)',
    },
    {
      q: 'The diagonals of a rhombus compare as $3 : 4$, and the rhombus covers $150$ square units. What is its perimeter?',
      choices: ['$50$', '$100$', '$12.5$', '$35$'],
      answer: 0,
      solution:
        'Let the diagonals be $3k$ and $4k$: $\\frac{(3k)(4k)}{2} = 6k^2 = 150$, so $k^2 = 25$ and $k = 5$ — diagonals $15$ and $20$. The half-diagonals $7.5$ and $10$ give side $\\sqrt{7.5^2 + 10^2} = \\sqrt{156.25} = 12.5$, so the perimeter is $4 \\times 12.5 = 50$ ✓. Check a second, independent way with the four right triangles: each has area $\\frac{1}{2} \\cdot 7.5 \\cdot 10 = 37.5$, and $4 \\times 37.5 = 150$ ✓ — and $7.5$-$10$-$12.5$ is the $3$-$4$-$5$ triple scaled by $2.5$ ✓. (The choice $100$ is USING THE FULL DIAGONALS AS LEGS, faking a side of $25$; the choice $12.5$ is STOPPING AT ONE SIDE; the choice $35$ is ADDING THE DIAGONALS $15 + 20$.)',
    },
    {
      q: 'A rhombus-shaped window has area $240$, and one diagonal compares to the other as $8 : 15$. How much weather stripping is needed to seal all four edges?',
      choices: ['$46$', '$136$', '$68$', '$17$'],
      answer: 2,
      solution:
        'With diagonals $8k$ and $15k$: $\\frac{(8k)(15k)}{2} = 60k^2 = 240$, so $k^2 = 4$ and $k = 2$ — diagonals $16$ and $30$. Half-diagonals $8$ and $15$ make each edge $\\sqrt{8^2 + 15^2} = 17$, so the stripping totals $4 \\times 17 = 68$ ✓. Check a second, independent way by rebuilding the area from the four congruent right triangles: $4 \\times \\frac{1}{2} \\cdot 8 \\cdot 15 = 240$ ✓, and each hypotenuse is the $8$-$15$-$17$ triple’s $17$ ✓. (The choice $136$ is USING THE FULL DIAGONALS AS LEGS, faking an edge of $34$; the choice $46$ is ADDING THE DIAGONALS $16 + 30$; the choice $17$ is STOPPING AT ONE EDGE.)',
    },
  ],

  // slot 10 — rectangle diagonal angle with the longer side, acute angle
  // between the diagonals. Lane: 48 / 66 / 76.
  [
    {
      q: 'Rectangle $ABCD$ has $\\overline{AB}$ as its longer side, and diagonal $\\overline{AC}$ meets $\\overline{AB}$ at a $24^\\circ$ angle. The diagonals cross at $M$. What is the acute angle formed at $M$?',
      fig: {
        view: [-1, -1.5, 7, 3.5],
        alt: 'Rectangle with both diagonals drawn, the diagonal making a 24 degree angle with the longer side',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 2.67], [0, 2.67]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 2.67], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 2.67], dash: true },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [6, 2.67], r: 1.5, label: '24' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 2.67], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 2.67], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.34], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$24^\\circ$', '$48^\\circ$', '$132^\\circ$', '$66^\\circ$'],
      answer: 1,
      solution:
        'The diagonals of a rectangle are equal and bisect each other, so $MA = MB$ and triangle $ABM$ is isosceles: $\\angle MBA = \\angle MAB = 24^\\circ$, giving $\\angle AMB = 180^\\circ - 48^\\circ = 132^\\circ$ and an acute angle of $180^\\circ - 132^\\circ = 48^\\circ$ at $M$ ✓. Check a second, independent way in the other triangle: $\\angle ACB = 90^\\circ - 24^\\circ = 66^\\circ$, and since $MB = MC$, triangle $BMC$ is isosceles with base angles $66^\\circ$, so $\\angle BMC = 180^\\circ - 132^\\circ = 48^\\circ$ ✓ — the acute angle is exactly double the $24^\\circ$ we started with. (The choice $24^\\circ$ is LEAVING THE ANGLE UNCHANGED; the choice $132^\\circ$ is REPORTING THE OBTUSE ANGLE at $M$; the choice $66^\\circ$ is SUBTRACTING FROM $90^\\circ$ and stopping.)',
    },
    {
      q: 'In a rectangular courtyard, two straight walkways run corner to corner, crossing at the courtyard’s center. Each walkway makes a $33^\\circ$ angle with the longer wall it starts from. At what acute angle do the walkways cross?',
      fig: {
        view: [-1, -1.5, 7, 5],
        alt: 'Rectangle with both diagonal walkways drawn, each making a 33 degree angle with the longer wall',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 3.9], [0, 3.9]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 3.9], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 3.9], dash: true },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [6, 3.9], r: 1.5, label: '33' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 3.9], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 3.9], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [3, 1.95], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$66^\\circ$', '$33^\\circ$', '$114^\\circ$', '$57^\\circ$'],
      answer: 0,
      solution:
        'Call the crossing point $M$. Half-diagonals of a rectangle are equal, so triangle $ABM$ on the longer wall is isosceles with base angles $33^\\circ$; its apex angle is $180^\\circ - 66^\\circ = 114^\\circ$, making the acute crossing angle $180^\\circ - 114^\\circ = 66^\\circ$ ✓. Check a second, independent way from the short wall’s corner: the walkway meets the shorter wall at $90^\\circ - 33^\\circ = 57^\\circ$, and the isosceles triangle $BMC$ with base angles $57^\\circ$ has apex $180^\\circ - 114^\\circ = 66^\\circ$ ✓ — both triangles at $M$ agree. (The choice $33^\\circ$ is LEAVING THE ANGLE UNCHANGED; the choice $114^\\circ$ is REPORTING THE OBTUSE crossing angle; the choice $57^\\circ$ is SUBTRACTING FROM $90^\\circ$ and stopping.)',
    },
    {
      q: 'Diagonal $\\overline{PR}$ of rectangle $PQRS$ makes a $38^\\circ$ angle with $\\overline{PQ}$, the longer side. Find the acute angle between diagonals $\\overline{PR}$ and $\\overline{QS}$.',
      fig: {
        view: [-1, -1.5, 7, 5.8],
        alt: 'Rectangle PQRS with both diagonals drawn, diagonal PR making a 38 degree angle with side PQ',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 4.69], [0, 4.69]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 4.69], dash: true },
          { t: 'seg', a: [6, 0], b: [0, 4.69], dash: true },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [6, 4.69], r: 1.4, label: '38' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [6, 4.69], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4.69], label: 'S', dx: -10, dy: -8 },
          { t: 'point', p: [3, 2.35], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$52^\\circ$', '$104^\\circ$', '$38^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Let $M$ be where the diagonals cross. Since $MP = MQ$ (halves of equal diagonals), triangle $PQM$ is isosceles with base angles $38^\\circ$, so $\\angle PMQ = 180^\\circ - 76^\\circ = 104^\\circ$, and the acute angle between the diagonals is $180^\\circ - 104^\\circ = 76^\\circ$ ✓. Check a second, independent way in triangle $QMR$: the diagonal meets the shorter side at $90^\\circ - 38^\\circ = 52^\\circ$, and with $MQ = MR$ the base angles are both $52^\\circ$, so $\\angle QMR = 180^\\circ - 104^\\circ = 76^\\circ$ ✓ — the same acute angle, twice the original $38^\\circ$. (The choice $52^\\circ$ is SUBTRACTING FROM $90^\\circ$ and stopping; the choice $104^\\circ$ is REPORTING THE OBTUSE ANGLE; the choice $38^\\circ$ is LEAVING THE ANGLE UNCHANGED.)',
    },
  ],

  // slot 11 — midpoint-square construction performed twice, area divides by 4.
  // Lane: 34 / 58 / 62.
  [
    {
      q: 'A quilter starts with a square of fabric of area $136$ square inches. She marks the midpoints of its four sides, cuts along the marks, and keeps the inner square; then she repeats the whole midpoint cut on the piece she kept. What is the area of the final piece?',
      choices: ['$68$', '$17$', '$34$', '$8.5$'],
      answer: 2,
      solution:
        'Joining the midpoints of a square’s sides cuts off four corner triangles that together tile the inner square exactly, so each cut halves the area: $136 \\to 68 \\to 34$ square inches ✓. Check a second, independent way through side lengths: the inner square’s side is half the outer square’s diagonal, $\\frac{s\\sqrt{2}}{2}$, so its area is $\\frac{s^2}{2}$ — one halving per cut, and two cuts multiply the area by $\\frac{1}{4}$: $\\frac{136}{4} = 34$ ✓. (The choice $68$ is STOPPING AFTER ONE CUT; the choice $17$ is HALVING A THIRD TIME; the choice $8.5$ is TREATING EACH CUT AS QUARTERING the area, dividing by $16$.)',
    },
    {
      q: 'A mosaic design nests squares: each new square’s corners sit at the midpoints of the previous square’s sides. The outermost square has area $232$. What is the area of the square two layers in?',
      choices: ['$116$', '$58$', '$29$', '$14.5$'],
      answer: 1,
      solution:
        'Each layer’s corner triangles fold in to fill the next square exactly, so each nesting step halves the area: $232 \\to 116 \\to 58$ ✓. Check a second, independent way with the diagonal: a nested square’s side equals half the previous diagonal, $\\frac{s\\sqrt{2}}{2}$, so its area is $\\frac{s^2}{2}$; composing two steps scales the area by $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$, and $\\frac{232}{4} = 58$ ✓. (The choice $116$ is STOPPING AFTER ONE LAYER; the choice $29$ is HALVING A THIRD TIME; the choice $14.5$ is TREATING EACH LAYER AS QUARTERING the area.)',
    },
    {
      q: 'Start with a square tabletop of area $248$. A woodworker builds a second tabletop whose corners are the midpoints of the first’s sides, then a third whose corners are the midpoints of the second’s sides. Find the area of the third tabletop.',
      choices: ['$62$', '$124$', '$31$', '$15.5$'],
      answer: 0,
      solution:
        'The midpoint square always claims exactly half the area, because the four trimmed corner triangles reassemble into a copy of it. Two constructions: $248 \\to 124 \\to 62$ ✓. Check a second, independent way by tracking sides: each new side is half the old diagonal, $\\frac{s\\sqrt{2}}{2}$, so each new area is $\\frac{s^2}{2}$; two steps divide the area by $4$, and $\\frac{248}{4} = 62$ ✓ — halving twice divides by $4$, not by $2$ and not by $16$. (The choice $124$ is STOPPING AFTER ONE CONSTRUCTION; the choice $31$ is HALVING A THIRD TIME; the choice $15.5$ is TREATING EACH STEP AS QUARTERING the area.)',
    },
  ],

  // slot 12 — trapezoid with unequal legs, find the area.
  // Lane: 252 / 180 / 228.
  [
    {
      q: 'The gable end of a shed is a trapezoid: the base is $28$, the roofline parallel to it is $14$, and the two slanted edges are $13$ and $15$. Find the area of the gable end.',
      fig: {
        view: [-1, -1.5, 30, 13.5],
        alt: 'Trapezoid with bases 28 and 14 and legs 13 and 15, with two dashed heights of 12',
        elems: [
          { t: 'poly', pts: [[0, 0], [28, 0], [19, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'seg', a: [19, 12], b: [19, 0], dash: true },
          { t: 'right', at: [5, 0], from: [28, 0], to: [5, 12] },
          { t: 'right', at: [19, 0], from: [28, 0], to: [19, 12] },
          { t: 'label', p: [12, 0], text: '28', dx: 0, dy: 14 },
          { t: 'label', p: [12, 12], text: '14', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [23.5, 6], text: '15', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [28, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [19, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$273$', '$504$', '$315$', '$252$'],
      answer: 3,
      solution:
        'Drop both heights; the bases differ by $28 - 14 = 14$, split as $x$ under the $13$-edge and $y$ under the $15$-edge with $x + y = 14$. Equal heights force $13^2 - x^2 = 15^2 - y^2$, so $y^2 - x^2 = 56$ and $y - x = \\frac{56}{14} = 4$: $y = 9$, $x = 5$, and $h = \\sqrt{169 - 25} = 12$. Area $= \\frac{28 + 14}{2} \\times 12 = 21 \\times 12 = 252$ ✓. Check a second, independent way: the other edge confirms the height, $\\sqrt{15^2 - 9^2} = \\sqrt{144} = 12$ ✓, and the decomposition $14 \\times 12 + \\frac{1}{2} \\cdot 5 \\cdot 12 + \\frac{1}{2} \\cdot 9 \\cdot 12 = 168 + 30 + 54 = 252$ ✓. (The choice $273$ is USING THE $13$-EDGE AS THE HEIGHT, $21 \\times 13$; the choice $315$ is USING THE $15$-EDGE AS THE HEIGHT, $21 \\times 15$; the choice $504$ is FORGETTING TO HALVE the base sum, $42 \\times 12$.)',
    },
    {
      q: 'A garden plot shaped like a trapezoid has parallel edges $33$ and $12$ meters long and slanted edges of $10$ and $17$ meters. How many square meters of sod does the plot need?',
      fig: {
        view: [-1, -1.5, 35, 9.5],
        alt: 'Trapezoid with bases 33 and 12 and legs 10 and 17, with two dashed heights of 8',
        elems: [
          { t: 'poly', pts: [[0, 0], [33, 0], [18, 8], [6, 8]], fill: false },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'seg', a: [18, 8], b: [18, 0], dash: true },
          { t: 'right', at: [6, 0], from: [33, 0], to: [6, 8] },
          { t: 'right', at: [18, 0], from: [33, 0], to: [18, 8] },
          { t: 'label', p: [26, 0], text: '33', dx: 0, dy: 14 },
          { t: 'label', p: [12, 8], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [3, 4], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [25.5, 4], text: '17', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [33, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [18, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [6, 8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$225$', '$360$', '$180$', '$382.5$'],
      answer: 2,
      solution:
        'The bases differ by $33 - 12 = 21$; write the overhangs as $x$ under the $10$-edge and $y$ under the $17$-edge, so $x + y = 21$. Matching heights give $10^2 - x^2 = 17^2 - y^2$, so $y^2 - x^2 = 189$ and $y - x = \\frac{189}{21} = 9$: $y = 15$, $x = 6$, and $h = \\sqrt{100 - 36} = 8$. Area $= \\frac{33 + 12}{2} \\times 8 = 22.5 \\times 8 = 180$ ✓. Check a second, independent way: the $17$-edge gives the same height, $\\sqrt{289 - 225} = 8$ ✓, and slicing yields $12 \\times 8 + \\frac{1}{2} \\cdot 6 \\cdot 8 + \\frac{1}{2} \\cdot 15 \\cdot 8 = 96 + 24 + 60 = 180$ ✓. (The choice $225$ is USING THE $10$-EDGE AS THE HEIGHT, $22.5 \\times 10$; the choice $382.5$ is USING THE $17$-EDGE AS THE HEIGHT, $22.5 \\times 17$; the choice $360$ is FORGETTING TO HALVE the base sum, $45 \\times 8$.)',
    },
    {
      q: 'In trapezoid $ABCD$, $\\overline{AB} \\parallel \\overline{CD}$, with $AB = 26$, $CD = 12$, $AD = 13$, and $BC = 15$. Find the area of $ABCD$.',
      fig: {
        view: [-1, -1.5, 28, 13.5],
        alt: 'Trapezoid ABCD with bases 26 and 12 and legs 13 and 15, with two dashed heights of 12',
        elems: [
          { t: 'poly', pts: [[0, 0], [26, 0], [17, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'seg', a: [17, 12], b: [17, 0], dash: true },
          { t: 'right', at: [5, 0], from: [26, 0], to: [5, 12] },
          { t: 'right', at: [17, 0], from: [26, 0], to: [17, 12] },
          { t: 'label', p: [11, 0], text: '26', dx: 0, dy: 14 },
          { t: 'label', p: [11, 12], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [21.5, 6], text: '15', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [17, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$247$', '$228$', '$456$', '$285$'],
      answer: 1,
      solution:
        'Drop heights from $D$ and $C$; the bases differ by $26 - 12 = 14$, split as $x$ under $\\overline{AD}$ and $y$ under $\\overline{BC}$ with $x + y = 14$. Equal heights force $13^2 - x^2 = 15^2 - y^2$, so $y^2 - x^2 = 56$ and $y - x = 4$: $x = 5$, $y = 9$, and $h = \\sqrt{169 - 25} = 12$. Area $= \\frac{26 + 12}{2} \\times 12 = 19 \\times 12 = 228$ ✓. Check a second, independent way: leg $\\overline{BC}$ confirms $h = \\sqrt{225 - 81} = 12$ ✓, and the rectangle-plus-triangles split gives $12 \\times 12 + \\frac{1}{2} \\cdot 5 \\cdot 12 + \\frac{1}{2} \\cdot 9 \\cdot 12 = 144 + 30 + 54 = 228$ ✓. (The choice $247$ is USING LEG $AD$ AS THE HEIGHT, $19 \\times 13$; the choice $285$ is USING LEG $BC$ AS THE HEIGHT, $19 \\times 15$; the choice $456$ is FORGETTING TO HALVE the base sum, $38 \\times 12$.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  challenge,
}
