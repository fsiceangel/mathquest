// Introduction to Geometry chapter 9 — variations for section 9.3 (Polygon Area).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed area was worked twice by routes that do not share arithmetic:
//    the equilateral-triangle build against the closed hexagon formula, the
//    half-apothem-perimeter shortcut against a triangle-by-triangle sum, a
//    slice decomposition against a bounding-rectangle subtraction, a diagonal
//    split against corner-triangle removal. Both routes must agree before a
//    key is written down.
//  - Figures are coordinate-exact: hexagons and octagons sit at their true
//    vertices (center at the origin, radius chosen so every drawn side equals
//    the stated side length), corner-cut octagons use the exact cut points,
//    and rectilinear shapes are drawn at the stated dimensions, so a shoelace
//    pass over any closed polygon reproduces the keyed area.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s93 = [
  // s1 — hexagon assembled from its 6 center triangles.
  [
    {
      q: 'A hexagonal mosaic tabletop is assembled from $6$ congruent triangular glass pieces that all meet at the center of the table. Each glass piece covers $9$ square inches. How many square inches does the whole tabletop cover?',
      choices: ['$27$', '$36$', '$54$', '$108$'],
      answer: 2,
      solution:
        'The $6$ triangles meet at the center and tile the hexagon with no gaps and no overlaps, so the tabletop covers $6 \\times 9 = 54$ square inches ✓. Check a second, independent way by pairing: glue the triangles into $3$ rhombi of two pieces each, $3 \\times 18 = 54$ ✓. (The choice $27$ is SLICING INTO ONLY THREE TRIANGLES — the center segments make six, not three ✗; $36$ is USING THE $n - 2$ TRIANGLE COUNT from the angle-sum formula, which triangulates from a vertex, not the center ✗; $108$ is COUNTING EVERY TRIANGLE TWICE, once for each side it touches ✗.)',
    },
    {
      q: 'Six paving strips run from a center post of a regular hexagonal garden bed out to its corners, splitting the bed into $6$ identical triangular plots. Each plot has area $11$ square feet. What is the area of the entire bed?',
      choices: ['$66$', '$44$', '$33$', '$132$'],
      answer: 0,
      solution:
        'The center-to-corner strips cut the hexagon into exactly $6$ congruent triangles, so the bed’s area is $6 \\times 11 = 66$ square feet ✓. Check a second, independent way by pairing plots across each strip into $3$ rhombus-shaped double plots: $3 \\times 22 = 66$ ✓. (The choice $44$ is USING THE $n - 2$ TRIANGLE COUNT, $4 \\times 11$ — that count belongs to triangulating from one vertex ✗; $33$ is SLICING INTO ONLY THREE TRIANGLES ✗; $132$ is COUNTING EVERY TRIANGLE TWICE ✗.)',
    },
    {
      q: 'A quilter sews a regular hexagonal quilt block out of $6$ identical triangular patches whose points all touch at the center of the block. If one patch uses $13$ square inches of fabric, how much fabric does the whole block use?',
      choices: ['$39$', '$52$', '$156$', '$78$'],
      answer: 3,
      solution:
        'The $6$ patches fit together around the center to cover the block exactly once, so the block uses $6 \\times 13 = 78$ square inches ✓. Check a second, independent way by pairing patches into $3$ two-patch rhombi: $3 \\times 26 = 78$ ✓. (The choice $39$ is SLICING INTO ONLY THREE TRIANGLES — half the true count ✗; $52$ is USING THE $n - 2$ TRIANGLE COUNT, $4 \\times 13$ ✗; $156$ is COUNTING EVERY TRIANGLE TWICE ✗.)',
    },
  ],
  // s2 — area of an equilateral triangle from its side.
  [
    {
      q: 'A sailboat carries the equilateral triangular sail shown, with each edge measuring $10$ feet. What is the area of the sail?',
      fig: {
        view: [-1, -1, 11, 9.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5, 8.6603]], fill: false },
          { t: 'tick', a: [0, 0], b: [10, 0], n: 1 },
          { t: 'tick', a: [10, 0], b: [5, 8.6603], n: 1 },
          { t: 'tick', a: [5, 8.6603], b: [0, 0], n: 1 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
        ],
      },
      choices: ['$50\\sqrt{3}$', '$25\\sqrt{3}$', '$100\\sqrt{3}$', '$10\\sqrt{3}$'],
      answer: 1,
      solution:
        'The equilateral formula gives $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4} \\cdot 100 = 25\\sqrt{3}$ square feet ✓. Check a second, independent way with base and height: the altitude of an equilateral triangle is $\\frac{s\\sqrt{3}}{2} = 5\\sqrt{3}$, so the area is $\\frac{1}{2} \\cdot 10 \\cdot 5\\sqrt{3} = 25\\sqrt{3}$ ✓. (The choice $50\\sqrt{3}$ is USING $\\frac{\\sqrt{3}}{2}$ INSTEAD OF $\\frac{\\sqrt{3}}{4}$ ✗; $100\\sqrt{3}$ is DROPPING THE $4$ entirely and taking $\\sqrt{3}\\,s^2$ ✗; $10\\sqrt{3}$ is MULTIPLYING THE SIDE ITSELF BY $\\sqrt{3}$ without ever squaring ✗.)',
    },
    {
      q: 'A metal warning plate is cut as the equilateral triangle shown, $8$ centimeters on each edge. How many square centimeters of metal does the plate contain?',
      fig: {
        view: [-1, -1, 9, 7.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [4, 6.9282]], fill: false },
          { t: 'tick', a: [0, 0], b: [8, 0], n: 1 },
          { t: 'tick', a: [8, 0], b: [4, 6.9282], n: 1 },
          { t: 'tick', a: [4, 6.9282], b: [0, 0], n: 1 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
        ],
      },
      choices: ['$8\\sqrt{3}$', '$32\\sqrt{3}$', '$64\\sqrt{3}$', '$16\\sqrt{3}$'],
      answer: 3,
      solution:
        'Apply $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4} \\cdot 64 = 16\\sqrt{3}$ square centimeters ✓. Check a second, independent way from the altitude: it measures $\\frac{8\\sqrt{3}}{2} = 4\\sqrt{3}$, so $\\frac{1}{2} \\cdot 8 \\cdot 4\\sqrt{3} = 16\\sqrt{3}$ ✓. (The choice $32\\sqrt{3}$ is USING $\\frac{\\sqrt{3}}{2}$ INSTEAD OF $\\frac{\\sqrt{3}}{4}$ ✗; $64\\sqrt{3}$ is DROPPING THE $4$ and computing $\\sqrt{3}\\,s^2$ ✗; $8\\sqrt{3}$ is HALVING TWICE — sneaking an extra $\\frac{1}{2}$ into $\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$, which already contains it ✗.)',
    },
    {
      q: 'A promotional sticker is the small equilateral triangle shown, $4$ centimeters to a side. What is the sticker’s area?',
      fig: {
        view: [-0.6, -0.6, 4.6, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.4641]], fill: false },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.4641], n: 1 },
          { t: 'tick', a: [2, 3.4641], b: [0, 0], n: 1 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4\\sqrt{3}$', '$8\\sqrt{3}$', '$16\\sqrt{3}$', '$12\\sqrt{3}$'],
      answer: 0,
      solution:
        'The formula gives $\\frac{\\sqrt{3}}{4}s^2 = \\frac{\\sqrt{3}}{4} \\cdot 16 = 4\\sqrt{3}$ square centimeters ✓. Check a second, independent way with base and height: the altitude is $\\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$, and $\\frac{1}{2} \\cdot 4 \\cdot 2\\sqrt{3} = 4\\sqrt{3}$ ✓. (The choice $8\\sqrt{3}$ is USING $\\frac{\\sqrt{3}}{2}$ INSTEAD OF $\\frac{\\sqrt{3}}{4}$ ✗; $16\\sqrt{3}$ is DROPPING THE $4$ and taking $\\sqrt{3}\\,s^2$ ✗; $12\\sqrt{3}$ is MULTIPLYING THE PERIMETER BY $\\sqrt{3}$ — a length, not an area ✗.)',
    },
  ],
  // s3 — area of a regular hexagon from its side.
  [
    {
      q: 'The regular hexagonal floor tile shown has side length $6$. What is its area?',
      fig: {
        view: [-7, -6.2, 7, 6.2],
        elems: [
          { t: 'poly', pts: [[6, 0], [3, 5.1962], [-3, 5.1962], [-6, 0], [-3, -5.1962], [3, -5.1962]], fill: false },
          { t: 'tick', a: [-3, -5.1962], b: [3, -5.1962], n: 1 },
          { t: 'tick', a: [3, -5.1962], b: [6, 0], n: 1 },
          { t: 'label', p: [0, -5.1962], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$54\\sqrt{3}$', '$108\\sqrt{3}$', '$9\\sqrt{3}$', '$27\\sqrt{3}$'],
      answer: 0,
      solution:
        'Split the hexagon from its center into $6$ equilateral triangles of side $6$: each has area $\\frac{\\sqrt{3}}{4} \\cdot 36 = 9\\sqrt{3}$, so the tile has area $6 \\cdot 9\\sqrt{3} = 54\\sqrt{3}$ ✓. Check a second, independent way with $\\frac{1}{2}aP$: the apothem is $\\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$ and the perimeter is $36$, so $\\frac{1}{2} \\cdot 3\\sqrt{3} \\cdot 36 = 54\\sqrt{3}$ ✓. (The choice $108\\sqrt{3}$ is DROPPING THE $2$ from $\\frac{3\\sqrt{3}}{2}s^2$ ✗; $9\\sqrt{3}$ is STOPPING AT ONE TRIANGLE ✗; $27\\sqrt{3}$ is USING THREE TRIANGLES instead of six ✗.)',
    },
    {
      q: 'A stained-glass window is the regular hexagon shown, with each edge $16$ inches long. How many square inches of glass does it hold?',
      fig: {
        view: [-18, -16, 18, 16],
        elems: [
          { t: 'poly', pts: [[16, 0], [8, 13.8564], [-8, 13.8564], [-16, 0], [-8, -13.8564], [8, -13.8564]], fill: false },
          { t: 'tick', a: [-8, -13.8564], b: [8, -13.8564], n: 1 },
          { t: 'tick', a: [8, -13.8564], b: [16, 0], n: 1 },
          { t: 'label', p: [0, -13.8564], text: '16', dx: 0, dy: 14 },
        ],
      },
      choices: ['$64\\sqrt{3}$', '$768\\sqrt{3}$', '$384\\sqrt{3}$', '$192\\sqrt{3}$'],
      answer: 2,
      solution:
        'Six equilateral triangles of side $16$ tile the hexagon, each with area $\\frac{\\sqrt{3}}{4} \\cdot 256 = 64\\sqrt{3}$, giving $6 \\cdot 64\\sqrt{3} = 384\\sqrt{3}$ ✓. Check a second, independent way with $\\frac{1}{2}aP$: the apothem is $\\frac{16\\sqrt{3}}{2} = 8\\sqrt{3}$ and the perimeter is $96$, so $\\frac{1}{2} \\cdot 8\\sqrt{3} \\cdot 96 = 384\\sqrt{3}$ ✓. (The choice $768\\sqrt{3}$ is DROPPING THE $2$ from $\\frac{3\\sqrt{3}}{2}s^2$ ✗; $64\\sqrt{3}$ is STOPPING AT ONE TRIANGLE ✗; $192\\sqrt{3}$ is USING THREE TRIANGLES ✗.)',
    },
    {
      q: 'A regular hexagonal patio is being poured with concrete; the plan shown gives each edge as $20$ feet. What area must the concrete cover?',
      fig: {
        view: [-22, -19.5, 22, 19.5],
        elems: [
          { t: 'poly', pts: [[20, 0], [10, 17.3205], [-10, 17.3205], [-20, 0], [-10, -17.3205], [10, -17.3205]], fill: false },
          { t: 'tick', a: [-10, -17.3205], b: [10, -17.3205], n: 1 },
          { t: 'tick', a: [10, -17.3205], b: [20, 0], n: 1 },
          { t: 'label', p: [0, -17.3205], text: '20', dx: 0, dy: 14 },
        ],
      },
      choices: ['$1200\\sqrt{3}$', '$600\\sqrt{3}$', '$100\\sqrt{3}$', '$300\\sqrt{3}$'],
      answer: 1,
      solution:
        'The hexagon splits from its center into $6$ equilateral triangles of side $20$, each of area $\\frac{\\sqrt{3}}{4} \\cdot 400 = 100\\sqrt{3}$, so the patio needs $6 \\cdot 100\\sqrt{3} = 600\\sqrt{3}$ square feet ✓. Check a second, independent way with $\\frac{1}{2}aP$: the apothem is $\\frac{20\\sqrt{3}}{2} = 10\\sqrt{3}$ and the perimeter is $120$, so $\\frac{1}{2} \\cdot 10\\sqrt{3} \\cdot 120 = 600\\sqrt{3}$ ✓. (The choice $1200\\sqrt{3}$ is DROPPING THE $2$ from $\\frac{3\\sqrt{3}}{2}s^2$ ✗; $100\\sqrt{3}$ is STOPPING AT ONE TRIANGLE ✗; $300\\sqrt{3}$ is USING THREE TRIANGLES ✗.)',
    },
  ],
  // s4 — house-shaped pentagon: rectangle plus triangular roof.
  [
    {
      q: 'The end wall of a barn is the house-shaped pentagon shown: a rectangle $10$ feet wide and $6$ feet tall, topped by a triangular gable that rises $4$ more feet. How many square feet of siding does the wall need?',
      fig: {
        view: [-1, -1, 11, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 6], [5, 10], [0, 6]], fill: false },
          { t: 'seg', a: [0, 6], b: [10, 6], dash: true },
          { t: 'seg', a: [5, 6], b: [5, 10], dash: true },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [10, 3], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [5, 8], text: '4', dx: 10, dy: 0 },
        ],
      },
      choices: ['$100$', '$60$', '$120$', '$80$'],
      answer: 3,
      solution:
        'Slice along the dashed line: the rectangle contributes $10 \\times 6 = 60$ and the gable is a triangle with base $10$ and height $4$, contributing $\\frac{1}{2} \\cdot 10 \\cdot 4 = 20$, for a total of $60 + 20 = 80$ ✓. Check a second, independent way by boxing it in: a $10 \\times 10$ rectangle up to the peak holds $100$, and the two empty corner triangles beside the roof each have legs $5$ and $4$, removing $2 \\cdot \\frac{1}{2} \\cdot 5 \\cdot 4 = 20$, so $100 - 20 = 80$ ✓. (The choice $100$ is TREATING THE ROOF AS A FULL RECTANGLE — the gable needs the $\\frac{1}{2}$ ✗; $60$ is DROPPING THE ROOF ✗; $120$ is USING THE PEAK HEIGHT $10$ FOR THE WALLS and then adding the roof on top of that ✗.)',
    },
    {
      q: 'The front of a doghouse is the pentagon shown: a rectangle $9$ decimeters wide and $6$ decimeters tall, with a triangular roof section rising $4$ decimeters above it. Find the area of the front panel.',
      fig: {
        view: [-1, -1, 10, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 6], [4.5, 10], [0, 6]], fill: false },
          { t: 'seg', a: [0, 6], b: [9, 6], dash: true },
          { t: 'seg', a: [4.5, 6], b: [4.5, 10], dash: true },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [9, 3], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [4.5, 8], text: '4', dx: 10, dy: 0 },
        ],
      },
      choices: ['$54$', '$72$', '$90$', '$108$'],
      answer: 1,
      solution:
        'Cut along the dashed line: the rectangle gives $9 \\times 6 = 54$ and the roof triangle, base $9$ and height $4$, gives $\\frac{1}{2} \\cdot 9 \\cdot 4 = 18$, so the panel has area $54 + 18 = 72$ ✓. Check a second, independent way with a bounding box: the $9 \\times 10$ box to the peak holds $90$, and the two empty triangles beside the roof, legs $4.5$ and $4$, remove $2 \\cdot \\frac{1}{2} \\cdot 4.5 \\cdot 4 = 18$, leaving $90 - 18 = 72$ ✓. (The choice $90$ is TREATING THE ROOF AS A FULL RECTANGLE ✗; $54$ is DROPPING THE ROOF ✗; $108$ is USING THE PEAK HEIGHT $10$ FOR THE WALLS and still adding the roof ✗.)',
    },
    {
      q: 'A storage shed’s gable wall is the pentagon shown: a rectangle $14$ feet wide and $5$ feet tall, capped by a triangle whose peak sits $6$ feet above the rectangle. What is the wall’s area?',
      fig: {
        view: [-1, -1, 15, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 5], [7, 11], [0, 5]], fill: false },
          { t: 'seg', a: [0, 5], b: [14, 5], dash: true },
          { t: 'seg', a: [7, 5], b: [7, 11], dash: true },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [14, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [7, 8], text: '6', dx: 10, dy: 0 },
        ],
      },
      choices: ['$154$', '$70$', '$112$', '$196$'],
      answer: 2,
      solution:
        'Slice at the dashed line: the rectangle holds $14 \\times 5 = 70$ and the triangular cap, base $14$ and height $6$, holds $\\frac{1}{2} \\cdot 14 \\cdot 6 = 42$, so the wall has area $70 + 42 = 112$ ✓. Check a second, independent way by boxing to the peak: the $14 \\times 11$ box holds $154$, and the two empty corner triangles, legs $7$ and $6$, remove $2 \\cdot \\frac{1}{2} \\cdot 7 \\cdot 6 = 42$, leaving $154 - 42 = 112$ ✓. (The choice $154$ is TREATING THE ROOF AS A FULL RECTANGLE ✗; $70$ is DROPPING THE ROOF ✗; $196$ is USING THE PEAK HEIGHT $11$ FOR THE WALLS and then adding the roof anyway ✗.)',
    },
  ],
  // s5 — regular octagon area estimated from side and apothem.
  [
    {
      q: 'The floor of a gazebo is the regular octagon shown, with side length $4$ and apothem approximately $4.8$. Estimate the floor’s area.',
      fig: {
        view: [-5.5, -5.5, 5.5, 5.5],
        elems: [
          { t: 'poly', pts: [[4.8284, 2], [2, 4.8284], [-2, 4.8284], [-4.8284, 2], [-4.8284, -2], [-2, -4.8284], [2, -4.8284], [4.8284, -2]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -4.8284], dash: true },
          { t: 'right', at: [0, -4.8284], from: [2, -4.8284], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -2.4], text: '4.8', dx: -18, dy: 0 },
          { t: 'label', p: [0, -4.8284], text: '4', dx: 26, dy: 14 },
        ],
      },
      choices: ['$76.8$', '$153.6$', '$38.4$', '$9.6$'],
      answer: 0,
      solution:
        'Use the regular-polygon shortcut $\\frac{1}{2}aP$: the perimeter is $8 \\times 4 = 32$, so the area is about $\\frac{1}{2} \\cdot 4.8 \\cdot 32 = 76.8$ ✓. Check a second, independent way with the $8$ center triangles, each with base $4$ and height $4.8$: $8 \\cdot \\frac{1}{2} \\cdot 4 \\cdot 4.8 = 76.8$ ✓. (The choice $153.6$ is FORGETTING THE $\\frac{1}{2}$ in $\\frac{1}{2}aP$ ✗; $38.4$ is USING A SQUARE’S FOUR SIDES for the perimeter instead of the octagon’s eight ✗; $9.6$ is STOPPING AT ONE TRIANGLE ✗.)',
    },
    {
      q: 'An octagonal area rug is a regular octagon, as shown, with each edge $8$ feet long and apothem approximately $9.7$ feet. About how many square feet of floor does the rug cover?',
      fig: {
        view: [-11, -11, 11, 11],
        elems: [
          { t: 'poly', pts: [[9.6569, 4], [4, 9.6569], [-4, 9.6569], [-9.6569, 4], [-9.6569, -4], [-4, -9.6569], [4, -9.6569], [9.6569, -4]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -9.6569], dash: true },
          { t: 'right', at: [0, -9.6569], from: [4, -9.6569], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -4.8], text: '9.7', dx: -18, dy: 0 },
          { t: 'label', p: [0, -9.6569], text: '8', dx: 26, dy: 14 },
        ],
      },
      choices: ['$155.2$', '$38.8$', '$310.4$', '$620.8$'],
      answer: 2,
      solution:
        'The shortcut $\\frac{1}{2}aP$ with perimeter $8 \\times 8 = 64$ gives about $\\frac{1}{2} \\cdot 9.7 \\cdot 64 = 310.4$ square feet ✓. Check a second, independent way from the $8$ center triangles, each with base $8$ and height $9.7$: $8 \\cdot \\frac{1}{2} \\cdot 8 \\cdot 9.7 = 310.4$ ✓. (The choice $620.8$ is FORGETTING THE $\\frac{1}{2}$ ✗; $155.2$ is USING A SQUARE’S FOUR SIDES in the perimeter ✗; $38.8$ is STOPPING AT ONE TRIANGLE ✗.)',
    },
    {
      q: 'A park pavilion has a regular octagonal roof deck, shown from above, with side length $10$ meters and apothem approximately $12$ meters. Estimate the deck’s area.',
      fig: {
        view: [-13.5, -13.5, 13.5, 13.5],
        elems: [
          { t: 'poly', pts: [[12.0711, 5], [5, 12.0711], [-5, 12.0711], [-12.0711, 5], [-12.0711, -5], [-5, -12.0711], [5, -12.0711], [12.0711, -5]], fill: false },
          { t: 'seg', a: [0, 0], b: [0, -12.0711], dash: true },
          { t: 'right', at: [0, -12.0711], from: [5, -12.0711], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: -10 },
          { t: 'label', p: [0, -6], text: '12', dx: -16, dy: 0 },
          { t: 'label', p: [0, -12.0711], text: '10', dx: 30, dy: 14 },
        ],
      },
      choices: ['$960$', '$480$', '$240$', '$60$'],
      answer: 1,
      solution:
        'With perimeter $8 \\times 10 = 80$, the shortcut $\\frac{1}{2}aP$ gives about $\\frac{1}{2} \\cdot 12 \\cdot 80 = 480$ square meters ✓. Check a second, independent way with the $8$ center triangles, each with base $10$ and height $12$: $8 \\cdot \\frac{1}{2} \\cdot 10 \\cdot 12 = 480$ ✓. (The choice $960$ is FORGETTING THE $\\frac{1}{2}$ ✗; $240$ is USING A SQUARE’S FOUR SIDES for the perimeter ✗; $60$ is STOPPING AT ONE TRIANGLE ✗.)',
    },
  ],
  // s6 — octagon left when a square's corners are snipped off.
  [
    {
      q: 'A machinist starts with a square steel plate $9$ centimeters on a side and mills off each corner along a right triangle with legs of length $2$, leaving the octagon shown. What area of steel remains?',
      fig: {
        view: [-1, -1, 10, 10],
        elems: [
          { t: 'poly', pts: [[2, 0], [7, 0], [9, 2], [9, 7], [7, 9], [2, 9], [0, 7], [0, 2]], fill: false },
          { t: 'seg', a: [0, 0], b: [2, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 2], dash: true },
          { t: 'seg', a: [9, 0], b: [7, 0], dash: true },
          { t: 'seg', a: [9, 0], b: [9, 2], dash: true },
          { t: 'seg', a: [9, 9], b: [7, 9], dash: true },
          { t: 'seg', a: [9, 9], b: [9, 7], dash: true },
          { t: 'seg', a: [0, 9], b: [2, 9], dash: true },
          { t: 'seg', a: [0, 9], b: [0, 7], dash: true },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1], text: '2', dx: -12, dy: 0 },
          { t: 'label', p: [4.5, 9], text: '9', dx: 0, dy: -10 },
        ],
      },
      choices: ['$65$', '$81$', '$73$', '$79$'],
      answer: 2,
      solution:
        'Subtract the snipped corners: the square holds $9^2 = 81$, and each corner triangle has area $\\frac{1}{2} \\cdot 2 \\cdot 2 = 2$, so the four cuts remove $4 \\cdot 2 = 8$, leaving $81 - 8 = 73$ ✓. Check a second, independent way by slicing the octagon into horizontal bands: the middle band is a $9 \\times 5$ rectangle ($45$), and the top and bottom bands are trapezoids with parallel sides $9$ and $5$ and height $2$, each $\\frac{1}{2}(9 + 5) \\cdot 2 = 14$, so $45 + 14 + 14 = 73$ ✓. (The choice $65$ is REMOVING FULL $2 \\times 2$ CORNER SQUARES instead of half-squares ✗; $79$ is CUTTING ONLY ONE CORNER ✗; $81$ is FORGETTING TO CUT THE CORNERS AT ALL ✗.)',
    },
    {
      q: 'A woodworker turns a square tabletop, $14$ inches on a side, into the octagon shown by sawing off each corner along a right triangle with legs of length $4$. What is the area of the octagonal top?',
      fig: {
        view: [-1, -1, 15, 15],
        elems: [
          { t: 'poly', pts: [[4, 0], [10, 0], [14, 4], [14, 10], [10, 14], [4, 14], [0, 10], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [4, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 4], dash: true },
          { t: 'seg', a: [14, 0], b: [10, 0], dash: true },
          { t: 'seg', a: [14, 0], b: [14, 4], dash: true },
          { t: 'seg', a: [14, 14], b: [10, 14], dash: true },
          { t: 'seg', a: [14, 14], b: [14, 10], dash: true },
          { t: 'seg', a: [0, 14], b: [4, 14], dash: true },
          { t: 'seg', a: [0, 14], b: [0, 10], dash: true },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2], text: '4', dx: -12, dy: 0 },
          { t: 'label', p: [7, 14], text: '14', dx: 0, dy: -10 },
        ],
      },
      choices: ['$132$', '$180$', '$188$', '$164$'],
      answer: 3,
      solution:
        'Start from the whole square, $14^2 = 196$, and subtract the four sawed corners: each is a right triangle of area $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$, so $196 - 4 \\cdot 8 = 196 - 32 = 164$ ✓. Check a second, independent way with horizontal bands: the middle band is a $14 \\times 6$ rectangle ($84$), and the top and bottom trapezoids have parallel sides $14$ and $6$ with height $4$, each $\\frac{1}{2}(14 + 6) \\cdot 4 = 40$, so $84 + 40 + 40 = 164$ ✓. (The choice $132$ is REMOVING FULL $4 \\times 4$ CORNER SQUARES ✗; $188$ is CUTTING ONLY ONE CORNER ✗; $180$ is CUTTING ONLY TWO CORNERS ✗.)',
    },
    {
      q: 'Each corner of a square ceramic tile with side $11$ is trimmed along a right triangle with legs of length $3$, producing the octagon shown. Find the octagon’s area.',
      fig: {
        view: [-1, -1, 12, 12],
        elems: [
          { t: 'poly', pts: [[3, 0], [8, 0], [11, 3], [11, 8], [8, 11], [3, 11], [0, 8], [0, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [3, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 3], dash: true },
          { t: 'seg', a: [11, 0], b: [8, 0], dash: true },
          { t: 'seg', a: [11, 0], b: [11, 3], dash: true },
          { t: 'seg', a: [11, 11], b: [8, 11], dash: true },
          { t: 'seg', a: [11, 11], b: [11, 8], dash: true },
          { t: 'seg', a: [0, 11], b: [3, 11], dash: true },
          { t: 'seg', a: [0, 11], b: [0, 8], dash: true },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -12, dy: 0 },
          { t: 'label', p: [5.5, 11], text: '11', dx: 0, dy: -10 },
        ],
      },
      choices: ['$103$', '$85$', '$112$', '$121$'],
      answer: 0,
      solution:
        'Subtract the trimmed corners from the square: $11^2 = 121$, and each corner triangle has area $\\frac{1}{2} \\cdot 3 \\cdot 3 = 4.5$, so the four trims remove $4 \\cdot 4.5 = 18$, leaving $121 - 18 = 103$ ✓. Check a second, independent way with horizontal bands: the middle band is an $11 \\times 5$ rectangle ($55$), and the top and bottom trapezoids have parallel sides $11$ and $5$ with height $3$, each $\\frac{1}{2}(11 + 5) \\cdot 3 = 24$, so $55 + 24 + 24 = 103$ ✓. (The choice $85$ is REMOVING FULL $3 \\times 3$ CORNER SQUARES ✗; $112$ is CUTTING ONLY TWO CORNERS ✗; $121$ is FORGETTING TO CUT THE CORNERS AT ALL ✗.)',
    },
  ],
  // s7 — area of an L-shaped rectilinear polygon.
  [
    {
      q: 'The floor plan of an L-shaped classroom is shown, with all lengths in meters. How many square meters of flooring does the room need?',
      fig: {
        view: [-1, -1, 13.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 8], [6, 8], [6, 5], [0, 5]], fill: false },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 4], text: '8', dx: 12, dy: 0 },
          { t: 'label', p: [9, 8], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [6, 6.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [3, 5], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -12, dy: 0 },
        ],
      },
      choices: ['$96$', '$78$', '$60$', '$114$'],
      answer: 1,
      solution:
        'Slice it: the bottom strip is a $12 \\times 5$ rectangle ($60$) and the upper-right wing is a $6 \\times 3$ rectangle ($18$), so the room needs $60 + 18 = 78$ ✓. Check a second, independent way by subtraction: the full $12 \\times 8$ bounding rectangle holds $96$, and the missing upper-left block measures $6 \\times 3 = 18$, so $96 - 18 = 78$ ✓. (The choice $96$ is TAKING THE WHOLE BOUNDING RECTANGLE without removing the notch ✗; $60$ is KEEPING ONLY THE BOTTOM RECTANGLE and dropping the wing ✗; $114$ is ADDING THE NOTCH INSTEAD OF SUBTRACTING it ✗.)',
    },
    {
      q: 'An L-shaped desk top has the outline shown, with all lengths in decimeters. What is the area of the desk top?',
      fig: {
        view: [-1, -1, 11.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 7], [6, 7], [6, 5], [0, 5]], fill: false },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [10, 3.5], text: '7', dx: 12, dy: 0 },
          { t: 'label', p: [8, 7], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [6, 6], text: '2', dx: -10, dy: 0 },
          { t: 'label', p: [3, 5], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -12, dy: 0 },
        ],
      },
      choices: ['$58$', '$70$', '$50$', '$82$'],
      answer: 0,
      solution:
        'Slice it: the bottom slab is a $10 \\times 5$ rectangle ($50$) and the upper-right return is a $4 \\times 2$ rectangle ($8$), so the top has area $50 + 8 = 58$ ✓. Check a second, independent way by subtraction: the full $10 \\times 7$ bounding rectangle holds $70$, and the missing upper-left block is $6 \\times 2 = 12$, so $70 - 12 = 58$ ✓. (The choice $70$ is TAKING THE WHOLE BOUNDING RECTANGLE ✗; $50$ is KEEPING ONLY THE BOTTOM RECTANGLE ✗; $82$ is ADDING THE NOTCH INSTEAD OF SUBTRACTING it ✗.)',
    },
    {
      q: 'A community garden is laid out in the L-shape shown, with all lengths in yards. How many square yards does the garden enclose?',
      fig: {
        view: [-1, -1, 12.5, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 10], [4, 10], [4, 6], [0, 6]], fill: false },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [11, 5], text: '10', dx: 12, dy: 0 },
          { t: 'label', p: [7.5, 10], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [4, 8], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [2, 6], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [0, 3], text: '6', dx: -12, dy: 0 },
        ],
      },
      choices: ['$110$', '$66$', '$126$', '$94$'],
      answer: 3,
      solution:
        'Slice it: the bottom plot is an $11 \\times 6$ rectangle ($66$) and the tall right plot above it is a $7 \\times 4$ rectangle ($28$), so the garden encloses $66 + 28 = 94$ ✓. Check a second, independent way by subtraction: the full $11 \\times 10$ bounding rectangle holds $110$, and the missing upper-left block is $4 \\times 4 = 16$, so $110 - 16 = 94$ ✓. (The choice $110$ is TAKING THE WHOLE BOUNDING RECTANGLE ✗; $66$ is KEEPING ONLY THE BOTTOM RECTANGLE ✗; $126$ is ADDING THE NOTCH INSTEAD OF SUBTRACTING it ✗.)',
    },
  ],
  // s8 — hexagon area from the long (vertex-to-opposite-vertex) diagonal.
  [
    {
      q: 'A regular hexagonal mirror is measured corner to opposite corner: the dashed diagonal shown is $28$ inches. What is the mirror’s area?',
      fig: {
        view: [-15.5, -13.5, 15.5, 13.5],
        elems: [
          { t: 'poly', pts: [[14, 0], [7, 12.1244], [-7, 12.1244], [-14, 0], [-7, -12.1244], [7, -12.1244]], fill: false },
          { t: 'seg', a: [-14, 0], b: [14, 0], dash: true },
          { t: 'label', p: [0, 0], text: '28', dx: 0, dy: -8 },
        ],
      },
      choices: ['$1176\\sqrt{3}$', '$392\\sqrt{3}$', '$147\\sqrt{3}$', '$294\\sqrt{3}$'],
      answer: 3,
      solution:
        'The corner-to-opposite-corner diagonal runs through the center and equals two side lengths, so $s = \\frac{28}{2} = 14$ and the area is $\\frac{3\\sqrt{3}}{2} \\cdot 196 = 294\\sqrt{3}$ ✓. Check a second, independent way: the diagonal splits the hexagon into two congruent trapezoids with parallel sides $14$ and $28$ and height equal to the apothem $7\\sqrt{3}$, each $\\frac{1}{2}(14 + 28) \\cdot 7\\sqrt{3} = 147\\sqrt{3}$, so together $294\\sqrt{3}$ ✓. (The choice $1176\\sqrt{3}$ is USING THE DIAGONAL AS THE SIDE ✗; $392\\sqrt{3}$ is TREATING $28$ AS THE SHORT DIAGONAL, which equals $s\\sqrt{3}$, not $2s$ ✗; $147\\sqrt{3}$ is STOPPING AT ONE TRAPEZOID ✗.)',
    },
    {
      q: 'The cover for a hexagonal hot tub is a regular hexagon whose widest measurement — between opposite corners, dashed in the figure — is $52$ inches. Find the cover’s area.',
      fig: {
        view: [-28.5, -25, 28.5, 25],
        elems: [
          { t: 'poly', pts: [[26, 0], [13, 22.5167], [-13, 22.5167], [-26, 0], [-13, -22.5167], [13, -22.5167]], fill: false },
          { t: 'seg', a: [-26, 0], b: [26, 0], dash: true },
          { t: 'label', p: [0, 0], text: '52', dx: 0, dy: -8 },
        ],
      },
      choices: ['$4056\\sqrt{3}$', '$1014\\sqrt{3}$', '$507\\sqrt{3}$', '$1352\\sqrt{3}$'],
      answer: 1,
      solution:
        'The long diagonal is two center-to-vertex segments, each equal to the side, so $s = \\frac{52}{2} = 26$ and the area is $\\frac{3\\sqrt{3}}{2} \\cdot 676 = 1014\\sqrt{3}$ ✓. Check a second, independent way: the diagonal cuts the cover into two trapezoids with parallel sides $26$ and $52$ and height $13\\sqrt{3}$ (the apothem), each $\\frac{1}{2}(26 + 52) \\cdot 13\\sqrt{3} = 507\\sqrt{3}$, so together $1014\\sqrt{3}$ ✓. (The choice $4056\\sqrt{3}$ is USING THE DIAGONAL AS THE SIDE ✗; $1352\\sqrt{3}$ is TREATING $52$ AS THE SHORT DIAGONAL, $s\\sqrt{3}$ ✗; $507\\sqrt{3}$ is STOPPING AT ONE TRAPEZOID ✗.)',
    },
    {
      q: 'A regular hexagonal deck is planned so that the dashed distance between opposite corners, shown in the figure, is $44$ feet. How many square feet of decking does the plan call for?',
      fig: {
        view: [-24.5, -21.5, 24.5, 21.5],
        elems: [
          { t: 'poly', pts: [[22, 0], [11, 19.0526], [-11, 19.0526], [-22, 0], [-11, -19.0526], [11, -19.0526]], fill: false },
          { t: 'seg', a: [-22, 0], b: [22, 0], dash: true },
          { t: 'label', p: [0, 0], text: '44', dx: 0, dy: -8 },
        ],
      },
      choices: ['$2904\\sqrt{3}$', '$968\\sqrt{3}$', '$726\\sqrt{3}$', '$363\\sqrt{3}$'],
      answer: 2,
      solution:
        'The corner-to-opposite-corner distance equals twice the side, so $s = \\frac{44}{2} = 22$ and the area is $\\frac{3\\sqrt{3}}{2} \\cdot 484 = 726\\sqrt{3}$ ✓. Check a second, independent way: the diagonal splits the deck into two trapezoids with parallel sides $22$ and $44$ and height $11\\sqrt{3}$ (the apothem), each $\\frac{1}{2}(22 + 44) \\cdot 11\\sqrt{3} = 363\\sqrt{3}$, so together $726\\sqrt{3}$ ✓. (The choice $2904\\sqrt{3}$ is USING THE DIAGONAL AS THE SIDE ✗; $968\\sqrt{3}$ is TREATING $44$ AS THE SHORT DIAGONAL, $s\\sqrt{3}$ ✗; $363\\sqrt{3}$ is STOPPING AT ONE TRAPEZOID ✗.)',
    },
  ],
  // s9 — quadrilateral area from coordinates.
  [
    {
      q: 'On a site map, a plot of land is the quadrilateral with corners at $(0, 0)$, $(8, 0)$, $(6, 7)$, and $(0, 5)$, as shown. What is the plot’s area?',
      fig: {
        view: [-1, -1, 9, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 7], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 7], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 12 },
          { t: 'point', p: [8, 0], label: 'Q', dx: 10, dy: 12 },
          { t: 'point', p: [6, 7], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 5], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$43$', '$86$', '$56$', '$49$'],
      answer: 0,
      solution:
        'Cut along the dashed diagonal $\\overline{PR}$. Triangle $PQR$ has base $PQ = 8$ on the $x$-axis and height $7$ (the $y$-coordinate of $R$): area $\\frac{1}{2} \\cdot 8 \\cdot 7 = 28$. Triangle $PRS$ has base $PS = 5$ on the $y$-axis and height $6$ (the $x$-coordinate of $R$): area $\\frac{1}{2} \\cdot 5 \\cdot 6 = 15$. Total: $28 + 15 = 43$ ✓. Check a second, independent way by boxing: the $8 \\times 7$ bounding rectangle holds $56$; removing the right triangle past $\\overline{QR}$ (legs $2$ and $7$, area $7$) and the triangle above $\\overline{RS}$ (legs $6$ and $2$, area $6$) leaves $56 - 7 - 6 = 43$ ✓. (The choice $86$ is FORGETTING THE $\\frac{1}{2}$ IN THE SHOELACE FORMULA ✗; $56$ is TAKING THE WHOLE BOUNDING RECTANGLE ✗; $49$ is SUBTRACTING ONLY ONE CORNER TRIANGLE ✗.)',
    },
    {
      q: 'A designer’s logo is the quadrilateral with vertices $(0, 0)$, $(9, 0)$, $(7, 5)$, and $(0, 3)$ on a coordinate grid, as shown. How many square units does the logo cover?',
      fig: {
        view: [-1, -1, 10, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [7, 5], [0, 3]], fill: false },
          { t: 'seg', a: [0, 0], b: [7, 5], dash: true },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [7, 5], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 3], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$45$', '$66$', '$40$', '$33$'],
      answer: 3,
      solution:
        'Split along the dashed diagonal $\\overline{EG}$. Triangle $EFG$ has base $EF = 9$ on the $x$-axis and height $5$ (the $y$-coordinate of $G$): area $\\frac{1}{2} \\cdot 9 \\cdot 5 = 22.5$. Triangle $EGH$ has base $EH = 3$ on the $y$-axis and height $7$ (the $x$-coordinate of $G$): area $\\frac{1}{2} \\cdot 3 \\cdot 7 = 10.5$. Total: $22.5 + 10.5 = 33$ ✓. Check a second, independent way by boxing: the $9 \\times 5$ bounding rectangle holds $45$; removing the triangle past $\\overline{FG}$ (legs $2$ and $5$, area $5$) and the triangle above $\\overline{GH}$ (legs $7$ and $2$, area $7$) leaves $45 - 5 - 7 = 33$ ✓. (The choice $66$ is FORGETTING THE $\\frac{1}{2}$ IN THE SHOELACE FORMULA ✗; $45$ is TAKING THE WHOLE BOUNDING RECTANGLE ✗; $40$ is SUBTRACTING ONLY ONE CORNER TRIANGLE ✗.)',
    },
    {
      q: 'A kite-shaped park occupies the quadrilateral with corners $(0, 0)$, $(6, 0)$, $(8, 6)$, and $(0, 8)$ on the city grid, as shown. Find the park’s area.',
      fig: {
        view: [-1, -1, 9, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [8, 6], [0, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 6], dash: true },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 12 },
          { t: 'point', p: [6, 0], label: 'K', dx: 10, dy: 12 },
          { t: 'point', p: [8, 6], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0, 8], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$64$', '$50$', '$100$', '$58$'],
      answer: 1,
      solution:
        'Cut along the dashed diagonal $\\overline{JL}$. Triangle $JKL$ has base $JK = 6$ on the $x$-axis and height $6$ (the $y$-coordinate of $L$): area $\\frac{1}{2} \\cdot 6 \\cdot 6 = 18$. Triangle $JLM$ has base $JM = 8$ on the $y$-axis and height $8$ (the $x$-coordinate of $L$): area $\\frac{1}{2} \\cdot 8 \\cdot 8 = 32$. Total: $18 + 32 = 50$ ✓. Check a second, independent way by boxing: the $8 \\times 8$ bounding square holds $64$; removing the triangle right of $\\overline{KL}$ (legs $2$ and $6$, area $6$) and the triangle above $\\overline{LM}$ (legs $8$ and $2$, area $8$) leaves $64 - 6 - 8 = 50$ ✓. (The choice $100$ is FORGETTING THE $\\frac{1}{2}$ IN THE SHOELACE FORMULA ✗; $64$ is TAKING THE WHOLE BOUNDING SQUARE ✗; $58$ is SUBTRACTING ONLY ONE CORNER TRIANGLE ✗.)',
    },
  ],
  // s10 — hexagon area from its apothem.
  [
    {
      q: 'A regular hexagonal conference table has apothem $9\\sqrt{3}$. What is the area of the tabletop?',
      choices: ['$972\\sqrt{3}$', '$81\\sqrt{3}$', '$486\\sqrt{3}$', '$243\\sqrt{3}$'],
      answer: 2,
      solution:
        'In a regular hexagon the apothem is the height of one of its equilateral triangles, so $a = \\frac{s\\sqrt{3}}{2}$. From $\\frac{s\\sqrt{3}}{2} = 9\\sqrt{3}$ we get $s = 18$, and the area is $\\frac{3\\sqrt{3}}{2} \\cdot 18^2 = \\frac{3\\sqrt{3}}{2} \\cdot 324 = 486\\sqrt{3}$ ✓. Check a second, independent way with $\\frac{1}{2}aP$: the perimeter is $6 \\cdot 18 = 108$, so $\\frac{1}{2} \\cdot 9\\sqrt{3} \\cdot 108 = 486\\sqrt{3}$ ✓. (The choice $972\\sqrt{3}$ is FORGETTING THE $\\frac{1}{2}$ in $\\frac{1}{2}aP$ ✗; $81\\sqrt{3}$ is STOPPING AT ONE TRIANGLE, $\\frac{1}{2} \\cdot 9\\sqrt{3} \\cdot 18$ ✗; $243\\sqrt{3}$ is USING HALF THE PERIMETER ✗.)',
    },
    {
      q: 'The base of a hexagonal planter is a regular hexagon whose apothem measures $10\\sqrt{3}$. How much ground does the planter cover?',
      choices: ['$600\\sqrt{3}$', '$1200\\sqrt{3}$', '$100\\sqrt{3}$', '$300\\sqrt{3}$'],
      answer: 0,
      solution:
        'The apothem of a regular hexagon is the height of one of its equilateral triangles: $a = \\frac{s\\sqrt{3}}{2}$. Solving $\\frac{s\\sqrt{3}}{2} = 10\\sqrt{3}$ gives $s = 20$, so the area is $\\frac{3\\sqrt{3}}{2} \\cdot 400 = 600\\sqrt{3}$ ✓. Check a second, independent way with $\\frac{1}{2}aP$: the perimeter is $6 \\cdot 20 = 120$, and $\\frac{1}{2} \\cdot 10\\sqrt{3} \\cdot 120 = 600\\sqrt{3}$ ✓. (The choice $1200\\sqrt{3}$ is FORGETTING THE $\\frac{1}{2}$ ✗; $100\\sqrt{3}$ is STOPPING AT ONE TRIANGLE, $\\frac{1}{2} \\cdot 10\\sqrt{3} \\cdot 20$ ✗; $300\\sqrt{3}$ is USING HALF THE PERIMETER ✗.)',
    },
    {
      q: 'A theater builds a regular hexagonal stage whose apothem is $12\\sqrt{3}$ feet. How many square feet of stage surface is that?',
      choices: ['$144\\sqrt{3}$', '$432\\sqrt{3}$', '$1728\\sqrt{3}$', '$864\\sqrt{3}$'],
      answer: 3,
      solution:
        'Since the apothem of a regular hexagon is the height of one of its equilateral triangles, $\\frac{s\\sqrt{3}}{2} = 12\\sqrt{3}$ gives $s = 24$, so the area is $\\frac{3\\sqrt{3}}{2} \\cdot 576 = 864\\sqrt{3}$ ✓. Check a second, independent way with $\\frac{1}{2}aP$: the perimeter is $6 \\cdot 24 = 144$, and $\\frac{1}{2} \\cdot 12\\sqrt{3} \\cdot 144 = 864\\sqrt{3}$ ✓. (The choice $1728\\sqrt{3}$ is FORGETTING THE $\\frac{1}{2}$ ✗; $144\\sqrt{3}$ is STOPPING AT ONE TRIANGLE, $\\frac{1}{2} \\cdot 12\\sqrt{3} \\cdot 24$ ✗; $432\\sqrt{3}$ is USING HALF THE PERIMETER ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 9,
  sections: {
    '9.3': s93,
  },
}
