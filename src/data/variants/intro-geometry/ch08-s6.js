// Introduction to Geometry chapter 8 — variations for section 8.6 (Squares).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    the 45-45-90 ratio against a raw Pythagorean computation, the diagonal
//    area formula d²/2 against a side-first computation, a bisected-diagonal
//    argument against a coordinate distance, and a triangle-counting dissection
//    against direct area subtraction. Both routes must agree before a key is
//    written down.
//  - Figures are built from their own numbers: diamonds sit at exact
//    half-diagonal coordinates, midpoint squares are drawn at true midpoints,
//    right markers were checked against a dot product, and every angle marker
//    marks the angle the coordinates draw.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item name the same value.

const s86 = [
  // s1 — side given: the diagonal is s√2.
  [
    {
      q: 'A square windowpane has side length $7$, and a thin metal rod is fitted from one corner to the opposite corner to stiffen it. How long is the rod?',
      fig: {
        view: [-1, -1.5, 8, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [7, 7], [0, 7]], fill: false },
          { t: 'seg', a: [0, 0], b: [7, 7], dash: true },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [3.5, 3.5], text: '?', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [7, 7], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 7], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$7\\sqrt{2}$', '$14$', '$7\\sqrt{3}$', '$49$'],
      answer: 0,
      solution:
        'The rod is a diagonal, and a diagonal cuts the square into two $45$-$45$-$90$ triangles, so its length is $s\\sqrt{2} = 7\\sqrt{2} \\approx 9.90$ ✓. Check a second, independent way with the Pythagorean theorem on legs $7$ and $7$: $\\sqrt{7^2 + 7^2} = \\sqrt{98} = 7\\sqrt{2}$ ✓. (The choice $14$ is DOUBLING THE SIDE — two sides laid end to end overshoot the corner-to-corner trip ✗; $7\\sqrt{3}$ is GRABBING THE 30-60-90 RATIO from the wrong special triangle ✗; $49$ is ANSWERING THE AREA, a squared quantity where a length belongs ✗.)',
    },
    {
      q: 'A square plaza measures $11$ on each side. Instead of walking along two sides, Dana cuts straight across from one corner to the opposite corner. How far does she walk?',
      fig: {
        view: [-1.5, -2, 12.5, 13],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 11], [0, 11]], fill: false },
          { t: 'seg', a: [0, 0], b: [11, 11], dash: true },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [5.5, 5.5], text: '?', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [11, 11], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0, 11], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$22$', '$11\\sqrt{3}$', '$11\\sqrt{2}$', '$121$'],
      answer: 2,
      solution:
        'The shortcut is the diagonal of the square, and the diagonal of a square with side $s$ is $s\\sqrt{2}$, so Dana walks $11\\sqrt{2} \\approx 15.6$ ✓. Check a second, independent way with the Pythagorean theorem: $\\sqrt{11^2 + 11^2} = \\sqrt{242} = 11\\sqrt{2}$ ✓. (The choice $22$ is DOUBLING THE SIDE — that is the two-side walk she was avoiding, and the shortcut must beat it ✗; $11\\sqrt{3}$ is GRABBING THE 30-60-90 RATIO ✗; $121$ is ANSWERING THE AREA of the plaza, not a distance across it ✗.)',
    },
    {
      q: 'A drip hose is laid straight across a square herb bed from one corner to the opposite corner. The bed has side length $4$ m. How long is the hose?',
      fig: {
        view: [-1, -1.5, 5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [4, 4], dash: true },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [2, 2], text: '?', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [4, 4], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 4], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$8$', '$4\\sqrt{2}$', '$16$', '$4\\sqrt{3}$'],
      answer: 1,
      solution:
        'The hose runs along a diagonal, which splits the square bed into two $45$-$45$-$90$ triangles, so the hose measures $s\\sqrt{2} = 4\\sqrt{2} \\approx 5.66$ m ✓. Check a second, independent way with the Pythagorean theorem on legs $4$ and $4$: $\\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}$ ✓. (The choice $8$ is DOUBLING THE SIDE — two edges of the bed, not the straight cut across ✗; $16$ is ANSWERING THE AREA ✗; $4\\sqrt{3}$ is GRABBING THE 30-60-90 RATIO ✗.)',
    },
  ],
  // s2 — diagonal given: area = d²/2.
  [
    {
      q: 'A square trivet measures $6$ from one corner straight across to the opposite corner. What is the area of the trivet?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'poly', pts: [[-3, 0], [0, -3], [3, 0], [0, 3]], fill: false },
          { t: 'seg', a: [-3, 0], b: [3, 0], dash: true },
          { t: 'seg', a: [0, -3], b: [0, 3], dash: true },
          { t: 'right', at: [0, 0], from: [3, 0], to: [0, 3] },
          { t: 'label', p: [-1.5, 0], text: '6', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'W', dx: -12, dy: 0 },
          { t: 'point', p: [0, -3], label: 'X', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'Z', dx: 0, dy: -12 },
        ],
      },
      choices: ['$36$', '$9$', '$24$', '$18$'],
      answer: 3,
      solution:
        'A square is a rhombus whose two diagonals are equal, so Area $= \\frac{d \\cdot d}{2} = \\frac{6 \\times 6}{2} = 18$ ✓. Check a second, independent way through the side: $s\\sqrt{2} = 6$ gives $s = 3\\sqrt{2}$, and $s^2 = (3\\sqrt{2})^2 = 18$ ✓. (The choice $36$ is FORGETTING THE ½ — squaring the diagonal treats it as a side, overcounting by exactly a factor of $2$ ✗; $9$ is SQUARING THE HALF-DIAGONAL ✗; $24$ is CONFUSING AREA WITH PERIMETER, four copies of $6$ ✗.)',
    },
    {
      q: 'A square banner hangs from a pole that runs exactly corner to corner across it, and the pole is $16$ ft long. What is the area of the banner?',
      fig: {
        view: [-9.5, -9.5, 9.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [0, -8], [8, 0], [0, 8]], fill: false },
          { t: 'seg', a: [-8, 0], b: [8, 0], dash: true },
          { t: 'seg', a: [0, -8], b: [0, 8], dash: true },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 8] },
          { t: 'label', p: [-4, 0], text: '16', dx: 0, dy: 14 },
          { t: 'point', p: [-8, 0], label: 'E', dx: -12, dy: 0 },
          { t: 'point', p: [0, -8], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [8, 0], label: 'G', dx: 12, dy: 0 },
          { t: 'point', p: [0, 8], label: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$256$', '$128$', '$64$', '$8\\sqrt{2}$'],
      answer: 1,
      solution:
        'The pole is a diagonal, and a square is a rhombus with two equal diagonals, so Area $= \\frac{d^2}{2} = \\frac{256}{2} = 128$ ✓. Check a second, independent way through the side: $s\\sqrt{2} = 16$ gives $s = 8\\sqrt{2}$, and $s^2 = (8\\sqrt{2})^2 = 128$ ✓. (The choice $256$ is FORGETTING THE ½ in $\\frac{d^2}{2}$ ✗; $64$ is SQUARING THE HALF-DIAGONAL, $8^2$ ✗; $8\\sqrt{2}$ is ANSWERING THE SIDE, a length where an area belongs ✗.)',
    },
    {
      q: 'A straight irrigation pipe of length $20$ joins opposite corners of a square field. What is the area of the field?',
      fig: {
        view: [-11.5, -11.5, 11.5, 11.5],
        elems: [
          { t: 'poly', pts: [[-10, 0], [0, -10], [10, 0], [0, 10]], fill: false },
          { t: 'seg', a: [-10, 0], b: [10, 0], dash: true },
          { t: 'seg', a: [0, -10], b: [0, 10], dash: true },
          { t: 'right', at: [0, 0], from: [10, 0], to: [0, 10] },
          { t: 'label', p: [-5, 0], text: '20', dx: 0, dy: 14 },
          { t: 'point', p: [-10, 0], label: 'J', dx: -12, dy: 0 },
          { t: 'point', p: [0, -10], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [10, 0], label: 'L', dx: 12, dy: 0 },
          { t: 'point', p: [0, 10], label: 'N', dx: 0, dy: -12 },
        ],
      },
      choices: ['$200$', '$400$', '$100$', '$10\\sqrt{2}$'],
      answer: 0,
      solution:
        'The pipe is a diagonal, so the rhombus area formula with two equal diagonals gives Area $= \\frac{d^2}{2} = \\frac{400}{2} = 200$ ✓. Check a second, independent way through the side: $s\\sqrt{2} = 20$ gives $s = 10\\sqrt{2}$, and $s^2 = (10\\sqrt{2})^2 = 200$ ✓. (The choice $400$ is FORGETTING THE ½ — treating the diagonal as if it were a side ✗; $100$ is SQUARING THE HALF-DIAGONAL, $10^2$ ✗; $10\\sqrt{2}$ is ANSWERING THE SIDE ✗.)',
    },
  ],
  // s3 — diagonal given: the side is d√2/2.
  [
    {
      q: 'A square picture frame needs a cross-brace $18$ inches long to run between opposite corners. How long is each side of the frame?',
      fig: {
        view: [-10.5, -10.5, 10.5, 10.5],
        elems: [
          { t: 'poly', pts: [[-9, 0], [0, -9], [9, 0], [0, 9]], fill: false },
          { t: 'seg', a: [-9, 0], b: [9, 0], dash: true },
          { t: 'label', p: [-4.5, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [4.5, 4.5], text: '?', dx: 10, dy: -8 },
          { t: 'point', p: [-9, 0], label: 'T', dx: -12, dy: 0 },
          { t: 'point', p: [0, -9], label: 'U', dx: 0, dy: 14 },
          { t: 'point', p: [9, 0], label: 'V', dx: 12, dy: 0 },
          { t: 'point', p: [0, 9], label: 'W', dx: 0, dy: -12 },
        ],
      },
      choices: ['$18\\sqrt{2}$', '$9\\sqrt{2}$', '$9$', '$162$'],
      answer: 1,
      solution:
        'The brace is a diagonal, so $s\\sqrt{2} = 18$ and $s = \\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2} \\approx 12.7$ ✓. Check a second, independent way through the area: Area $= \\frac{d^2}{2} = \\frac{324}{2} = 162$, and $s = \\sqrt{162} = 9\\sqrt{2}$ ✓. Guard: $(9\\sqrt{2})\\sqrt{2} = 18$ ✓. (The choice $18\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING — that is the diagonal of a square with side $18$ ✗; $9$ is HALVING WITHOUT THE $\\sqrt{2}$ ✗; $162$ is ANSWERING THE AREA ✗.)',
    },
    {
      q: 'A square sail is stiffened by a batten of length $26$ that runs from one corner to the opposite corner. Find the side length of the sail.',
      fig: {
        view: [-14.5, -14.5, 14.5, 14.5],
        elems: [
          { t: 'poly', pts: [[-13, 0], [0, -13], [13, 0], [0, 13]], fill: false },
          { t: 'seg', a: [-13, 0], b: [13, 0], dash: true },
          { t: 'label', p: [-6.5, 0], text: '26', dx: 0, dy: 14 },
          { t: 'label', p: [6.5, 6.5], text: '?', dx: 10, dy: -8 },
          { t: 'point', p: [-13, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -13], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [13, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 13], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$13\\sqrt{2}$', '$26\\sqrt{2}$', '$13$', '$338$'],
      answer: 0,
      solution:
        'The batten is a diagonal, so $s\\sqrt{2} = 26$ and $s = \\frac{26}{\\sqrt{2}} = \\frac{26\\sqrt{2}}{2} = 13\\sqrt{2} \\approx 18.4$ ✓. Check a second, independent way through the area: Area $= \\frac{d^2}{2} = \\frac{676}{2} = 338$, and $s = \\sqrt{338} = 13\\sqrt{2}$ ✓. Guard: $(13\\sqrt{2})\\sqrt{2} = 26$ ✓. (The choice $26\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING ✗; $13$ is HALVING WITHOUT THE $\\sqrt{2}$ ✗; $338$ is ANSWERING THE AREA of the sail ✗.)',
    },
    {
      q: 'A string of lights $30$ m long stretches exactly from one corner of a square courtyard to the opposite corner. What is the side length of the courtyard?',
      fig: {
        view: [-16.5, -16.5, 16.5, 16.5],
        elems: [
          { t: 'poly', pts: [[-15, 0], [0, -15], [15, 0], [0, 15]], fill: false },
          { t: 'seg', a: [-15, 0], b: [15, 0], dash: true },
          { t: 'label', p: [-7.5, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [7.5, 7.5], text: '?', dx: 10, dy: -8 },
          { t: 'point', p: [-15, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [0, -15], label: 'Q', dx: 0, dy: 14 },
          { t: 'point', p: [15, 0], label: 'R', dx: 12, dy: 0 },
          { t: 'point', p: [0, 15], label: 'S', dx: 0, dy: -12 },
        ],
      },
      choices: ['$30\\sqrt{2}$', '$15$', '$15\\sqrt{2}$', '$450$'],
      answer: 2,
      solution:
        'The lights run along a diagonal, so $s\\sqrt{2} = 30$ and $s = \\frac{30}{\\sqrt{2}} = \\frac{30\\sqrt{2}}{2} = 15\\sqrt{2} \\approx 21.2$ m ✓. Check a second, independent way through the area: Area $= \\frac{d^2}{2} = \\frac{900}{2} = 450$, and $s = \\sqrt{450} = 15\\sqrt{2}$ ✓. Guard: $(15\\sqrt{2})\\sqrt{2} = 30$ ✓. (The choice $30\\sqrt{2}$ is MULTIPLYING BY $\\sqrt{2}$ INSTEAD OF DIVIDING — the diagonal of a far larger square ✗; $15$ is HALVING WITHOUT THE $\\sqrt{2}$ ✗; $450$ is ANSWERING THE AREA ✗.)',
    },
  ],
  // s4 — a diagonal meets a side at 45°.
  [
    {
      q: 'A square cracker snaps cleanly along one of its diagonals. At a corner the snap passes through, what angle does the snapped edge make with a side of the cracker?',
      fig: {
        view: [-1, -1.5, 9, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 8], dash: true },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [8, 8], r: 1.8, label: '?' },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [8, 8], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 8], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$90^\\circ$', '$22.5^\\circ$', '$45^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution:
        'A square is a rhombus, and a rhombus’s diagonals bisect its vertex angles, so the $90^\\circ$ corner splits into $45^\\circ + 45^\\circ$ ✓. Check a second, independent way inside one half of the cracker: it is an isosceles right triangle, so its two acute angles are equal and add to $90^\\circ$, forcing $45^\\circ$ apiece ✓. (The choice $90^\\circ$ is KEEPING THE WHOLE CORNER as if the snap never bisected it ✗; $22.5^\\circ$ is HALVING TWICE ✗; $60^\\circ$ is BORROWING FROM THE EQUILATERAL TRIANGLE ✗.)',
    },
    {
      q: 'A square gate is stiffened by a diagonal brace running from one bottom corner up to the opposite top corner. What angle does the brace make with the bottom rail of the gate?',
      fig: {
        view: [-1, -1.5, 10, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 9], [0, 9]], fill: false },
          { t: 'seg', a: [9, 0], b: [0, 9], dash: true },
          { t: 'angle', at: [9, 0], from: [0, 0], to: [0, 9], r: 2, label: '?' },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [9, 9], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0, 9], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$30^\\circ$', '$90^\\circ$', '$60^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution:
        'The brace is a diagonal, and because a square is a rhombus, each diagonal bisects the corner angles it meets — so the $90^\\circ$ corner at the rail splits into two $45^\\circ$ halves ✓. Check a second, independent way with the triangle below the brace: it has legs of equal length (two sides of the square), so it is an isosceles right triangle, and its acute angles share $90^\\circ$ equally at $45^\\circ$ each ✓. (The choice $30^\\circ$ is GRABBING THE 30-60-90 ANGLE from the wrong special triangle ✗; $90^\\circ$ is KEEPING THE WHOLE CORNER ✗; $60^\\circ$ is BORROWING FROM THE EQUILATERAL TRIANGLE ✗.)',
    },
    {
      q: 'Rosa folds a square sheet of origami paper corner to corner, pressing a crease along the diagonal. When she unfolds it, what angle does the crease make with each edge it reaches?',
      fig: {
        view: [-1, -1.5, 8, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [7, 7], [0, 7]], fill: false },
          { t: 'seg', a: [0, 0], b: [7, 7], dash: true },
          { t: 'angle', at: [7, 7], from: [7, 0], to: [0, 0], r: 1.6, label: '?' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [7, 7], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 7], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$22.5^\\circ$', '$45^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'The crease is a diagonal, and a square’s diagonals bisect its vertex angles because a square is a rhombus — so each $90^\\circ$ corner the crease reaches splits into two $45^\\circ$ pieces ✓. Check a second, independent way from the fold itself: the fold carries one edge at the corner exactly onto the other, so the crease makes equal angles with the two edges, and equal halves of $90^\\circ$ are $45^\\circ$ each ✓. (The choice $22.5^\\circ$ is HALVING TWICE ✗; $90^\\circ$ is KEEPING THE WHOLE CORNER ✗; $60^\\circ$ is BORROWING FROM THE EQUILATERAL TRIANGLE ✗.)',
    },
  ],
  // s5 — perimeter given: side = P/4, then area.
  [
    {
      q: 'A dog run is a square enclosed by $44$ m of fencing. How many square meters of ground does the run cover?',
      choices: ['$121$', '$44$', '$484$', '$22$'],
      answer: 0,
      solution:
        'Each side is $\\frac{44}{4} = 11$ m, so the area is $11^2 = 121$ ✓. Check a second, independent way with the direct formula: Area $= \\frac{P^2}{16} = \\frac{1936}{16} = 121$ ✓, and guard the side: $4 \\times 11 = 44$ ✓. (The choice $44$ is ANSWERING THE PERIMETER BACK — fencing and floor space are different measurements ✗; $484$ is HALVING INSTEAD OF QUARTERING, squaring a phantom side of $22$ ✗; $22$ is HALVING THE PERIMETER and stopping there ✗.)',
    },
    {
      q: 'A ribbon exactly $20$ inches long wraps once around the border of a square coaster with no overlap. What is the area of the coaster?',
      choices: ['$20$', '$100$', '$25$', '$5$'],
      answer: 2,
      solution:
        'The ribbon length is the perimeter, so each side is $\\frac{20}{4} = 5$ inches and the area is $5^2 = 25$ ✓. Check a second, independent way with the direct formula: Area $= \\frac{P^2}{16} = \\frac{400}{16} = 25$ ✓, and guard the side: $4 \\times 5 = 20$ ✓. (The choice $20$ is ANSWERING THE PERIMETER BACK ✗; $100$ is HALVING INSTEAD OF QUARTERING, squaring a phantom side of $10$ ✗; $5$ is ANSWERING THE SIDE, one step short of the area ✗.)',
    },
    {
      q: 'Baseboard trim totaling $52$ ft runs around the floor of a square room with no gaps or overlaps. What is the area of the floor?',
      choices: ['$52$', '$676$', '$13$', '$169$'],
      answer: 3,
      solution:
        'The trim length is the perimeter, so each wall is $\\frac{52}{4} = 13$ ft and the floor area is $13^2 = 169$ ✓. Check a second, independent way with the direct formula: Area $= \\frac{P^2}{16} = \\frac{2704}{16} = 169$ ✓, and guard the side: $4 \\times 13 = 52$ ✓. (The choice $52$ is ANSWERING THE PERIMETER BACK ✗; $676$ is HALVING INSTEAD OF QUARTERING, squaring a phantom side of $26$ ✗; $13$ is ANSWERING THE SIDE ✗.)',
    },
  ],
  // s6 — a square is both a rhombus and a rectangle.
  [
    {
      q: 'In math club, Maya claims “every square is a rectangle,” and Leo claims “every square is a rhombus.” Who is right?',
      choices: [
        'Only Maya — a square is a rectangle but not a rhombus',
        'Both of them — a square is a rectangle and a rhombus at once',
        'Only Leo — a square is a rhombus but not a rectangle',
        'Neither — a square is its own category, outside both families',
      ],
      answer: 1,
      solution:
        'A square has four right angles, which is the full membership requirement for rectangles — Maya is right ✓ — and four equal sides, the full requirement for rhombi — Leo is right too ✓. Check a second, independent way through diagonal fingerprints: a square’s diagonals are equal, the rectangle trait, and perpendicular, the rhombus trait, so it carries both families’ marks at the same time ✓. (Choosing only Maya is DENYING THE RHOMBUS SIDE of the family tree ✗; only Leo is DENYING THE RECTANGLE SIDE ✗; “neither” is ORPHANING THE SQUARE, which sits at the top of the hierarchy precisely because it belongs to both ✗.)',
    },
    {
      q: 'A classroom sorting station has one bin labeled “rhombus” and another labeled “rectangle,” and a shape may be counted in more than one bin. Into which bins does a square card correctly go?',
      choices: [
        'Both bins — the card qualifies as a rhombus and as a rectangle',
        'The rhombus bin only',
        'The rectangle bin only',
        'Neither bin — squares need a separate bin of their own',
      ],
      answer: 0,
      solution:
        'The card’s four equal sides earn it the rhombus bin, and its four right angles earn it the rectangle bin — it belongs in both ✓. Check a second, independent way through inherited properties: the card’s diagonals are perpendicular bisectors of each other that bisect the corner angles, all rhombus behavior, and they are also equal in length, pure rectangle behavior — no single-family shape shows both ✓. (The rhombus bin only is DENYING THE RECTANGLE SIDE ✗; the rectangle bin only is DENYING THE RHOMBUS SIDE ✗; a separate bin is ORPHANING THE SQUARE from the families whose tests it passes ✗.)',
    },
    {
      q: 'A shape-classifying robot scans a tile and reports two facts: four equal sides, four right angles. It must list every quadrilateral family the tile belongs to. Which listing is correct?',
      choices: [
        'Rhombus only',
        'Rectangle only',
        'Rhombus and rectangle, both at once',
        'Neither family fits the tile',
      ],
      answer: 2,
      solution:
        'Four equal sides is exactly the definition of a rhombus, and four right angles is exactly the definition of a rectangle, so the tile passes both membership tests and the robot must list both families ✓. Check a second, independent way by inheritance: a shape in both families gets equal diagonals from the rectangle side and perpendicular, angle-bisecting diagonals from the rhombus side — and a square’s diagonals do all of it, confirming the double membership ✓. (Rhombus only is DENYING THE RECTANGLE SIDE ✗; rectangle only is DENYING THE RHOMBUS SIDE ✗; “neither” is ORPHANING THE SQUARE from the very definitions it satisfies ✗.)',
    },
  ],
  // s7 — area given: d = √(2·A).
  [
    {
      q: 'A square skylight has area $98$. A support strip must run from one corner of the skylight to the opposite corner. How long must the strip be?',
      fig: {
        view: [-1, -1.5, 11, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9.8995, 0], [9.8995, 9.8995], [0, 9.8995]], fill: false },
          { t: 'seg', a: [0, 0], b: [9.8995, 9.8995], dash: true },
          { t: 'label', p: [6.8, 2.6], text: 'Area = 98', dx: 0, dy: 0 },
          { t: 'label', p: [4.95, 4.95], text: '?', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [9.8995, 0], label: 'U', dx: 10, dy: 10 },
          { t: 'point', p: [9.8995, 9.8995], label: 'V', dx: 10, dy: -8 },
          { t: 'point', p: [0, 9.8995], label: 'W', dx: -10, dy: -8 },
        ],
      },
      choices: ['$7\\sqrt{2}$', '$14\\sqrt{2}$', '$49$', '$14$'],
      answer: 3,
      solution:
        'Run the diagonal-area formula backwards: $\\frac{d^2}{2} = 98$ gives $d^2 = 196$, so $d = 14$ ✓. Check a second, independent way through the side: $s = \\sqrt{98} = 7\\sqrt{2}$, and $d = s\\sqrt{2} = 7\\sqrt{2} \\cdot \\sqrt{2} = 14$ ✓. (The choice $7\\sqrt{2} \\approx 9.9$ is ANSWERING THE SIDE ✗; $14\\sqrt{2}$ is DOUBLING THE SIDE INSTEAD OF MULTIPLYING BY $\\sqrt{2}$ ✗; $49$ is TAKING HALF THE AREA, an area where a length belongs ✗.)',
    },
    {
      q: 'A square rug has area $72$. Marco walks straight across it from one corner to the opposite corner. How long is his walk?',
      fig: {
        view: [-1, -1.5, 9.5, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [8.4853, 0], [8.4853, 8.4853], [0, 8.4853]], fill: false },
          { t: 'seg', a: [0, 0], b: [8.4853, 8.4853], dash: true },
          { t: 'label', p: [5.8, 2.2], text: 'Area = 72', dx: 0, dy: 0 },
          { t: 'label', p: [4.2426, 4.2426], text: '?', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [8.4853, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [8.4853, 8.4853], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 8.4853], label: 'H', dx: -10, dy: -8 },
        ],
      },
      choices: ['$6\\sqrt{2}$', '$12$', '$12\\sqrt{2}$', '$36$'],
      answer: 1,
      solution:
        'Reverse the diagonal-area formula: $\\frac{d^2}{2} = 72$ gives $d^2 = 144$, so $d = 12$ ✓. Check a second, independent way through the side: $s = \\sqrt{72} = 6\\sqrt{2}$, and $d = s\\sqrt{2} = 6\\sqrt{2} \\cdot \\sqrt{2} = 12$ ✓. (The choice $6\\sqrt{2} \\approx 8.5$ is ANSWERING THE SIDE ✗; $12\\sqrt{2}$ is DOUBLING THE SIDE INSTEAD OF MULTIPLYING BY $\\sqrt{2}$ ✗; $36$ is TAKING HALF THE AREA ✗.)',
    },
    {
      q: 'A square pond has area $162$, and a footbridge spans it from one corner to the opposite corner. How long is the footbridge?',
      fig: {
        view: [-1.5, -2, 14, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12.7279, 0], [12.7279, 12.7279], [0, 12.7279]], fill: false },
          { t: 'seg', a: [0, 0], b: [12.7279, 12.7279], dash: true },
          { t: 'label', p: [8.8, 3.2], text: 'Area = 162', dx: 0, dy: 0 },
          { t: 'label', p: [6.364, 6.364], text: '?', dx: -10, dy: -8 },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [12.7279, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [12.7279, 12.7279], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12.7279], label: 'N', dx: -10, dy: -8 },
        ],
      },
      choices: ['$18$', '$9\\sqrt{2}$', '$18\\sqrt{2}$', '$81$'],
      answer: 0,
      solution:
        'Reverse the diagonal-area formula: $\\frac{d^2}{2} = 162$ gives $d^2 = 324$, so $d = 18$ ✓. Check a second, independent way through the side: $s = \\sqrt{162} = 9\\sqrt{2}$, and $d = s\\sqrt{2} = 9\\sqrt{2} \\cdot \\sqrt{2} = 18$ ✓. (The choice $9\\sqrt{2} \\approx 12.7$ is ANSWERING THE SIDE ✗; $18\\sqrt{2}$ is DOUBLING THE SIDE INSTEAD OF MULTIPLYING BY $\\sqrt{2}$ ✗; $81$ is TAKING HALF THE AREA, not a length across the pond ✗.)',
    },
  ],
  // s8 — center of the square: distance to each vertex is s√2/2.
  [
    {
      q: 'A square stage has side length $8$, and two cables are stretched along its diagonals, crossing at the point $M$. How far is $M$ from each corner of the stage?',
      fig: {
        view: [-1, -1.5, 9, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 8], dash: true },
          { t: 'seg', a: [8, 0], b: [0, 8], dash: true },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [8, 8], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 8], label: 'H', dx: -10, dy: -8 },
          { t: 'point', p: [4, 4], label: 'M', dx: 4, dy: -12 },
        ],
      },
      choices: ['$4$', '$8$', '$4\\sqrt{2}$', '$8\\sqrt{2}$'],
      answer: 2,
      solution:
        'Each cable is a diagonal of length $8\\sqrt{2}$, and a square’s diagonals bisect each other, so the crossing point sits at half a diagonal from every corner: $\\frac{8\\sqrt{2}}{2} = 4\\sqrt{2} \\approx 5.66$ ✓. Check a second, independent way with coordinates: corners at $(0, 0)$, $(8, 0)$, $(8, 8)$, $(0, 8)$ put the center at $(4, 4)$, and its distance to $(0, 0)$ is $\\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$ ✓. (The choice $4$ is HALVING THE SIDE — that reaches the middle of a side, and the corner is farther from the center ✗; $8$ is HANDING BACK THE SIDE ✗; $8\\sqrt{2}$ is ANSWERING THE WHOLE DIAGONAL instead of half ✗.)',
    },
    {
      q: 'Walkways run along both diagonals of a square plaza with side $18$, meeting at a fountain $F$ at the center. Lamp posts stand at the four corners. How far is the fountain from each lamp post?',
      fig: {
        view: [-2, -2.5, 20, 20.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [18, 18], [0, 18]], fill: false },
          { t: 'seg', a: [0, 0], b: [18, 18], dash: true },
          { t: 'seg', a: [18, 0], b: [0, 18], dash: true },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [18, 18], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 18], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [9, 9], label: 'F', dx: 4, dy: -12 },
        ],
      },
      choices: ['$9$', '$18$', '$18\\sqrt{2}$', '$9\\sqrt{2}$'],
      answer: 3,
      solution:
        'Each diagonal walkway measures $18\\sqrt{2}$, and the diagonals of a square bisect each other, so the fountain sits half a diagonal from every lamp post: $\\frac{18\\sqrt{2}}{2} = 9\\sqrt{2} \\approx 12.7$ ✓. Check a second, independent way with coordinates: corners at $(0, 0)$, $(18, 0)$, $(18, 18)$, $(0, 18)$ put the center at $(9, 9)$, and its distance to $(0, 0)$ is $\\sqrt{81 + 81} = \\sqrt{162} = 9\\sqrt{2}$ ✓. (The choice $9$ is HALVING THE SIDE — the stroll from the fountain to the middle of an edge, which is shorter than the trip to a corner ✗; $18$ is HANDING BACK THE SIDE ✗; $18\\sqrt{2}$ is ANSWERING THE WHOLE DIAGONAL ✗.)',
    },
    {
      q: 'A rotating sprinkler sits at the point $O$ where the two diagonals of a square lawn with side $26$ cross. To water the whole lawn, its spray must reach each corner. How far is $O$ from a corner?',
      fig: {
        view: [-2.5, -3, 28.5, 29],
        elems: [
          { t: 'poly', pts: [[0, 0], [26, 0], [26, 26], [0, 26]], fill: false },
          { t: 'seg', a: [0, 0], b: [26, 26], dash: true },
          { t: 'seg', a: [26, 0], b: [0, 26], dash: true },
          { t: 'label', p: [13, 0], text: '26', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [26, 26], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 26], label: 'S', dx: -10, dy: -8 },
          { t: 'point', p: [13, 13], label: 'O', dx: 4, dy: -12 },
        ],
      },
      choices: ['$13$', '$13\\sqrt{2}$', '$26$', '$26\\sqrt{2}$'],
      answer: 1,
      solution:
        'Each diagonal has length $26\\sqrt{2}$, and the diagonals of a square bisect each other, so the sprinkler sits half a diagonal from every corner: $\\frac{26\\sqrt{2}}{2} = 13\\sqrt{2} \\approx 18.4$ ✓. Check a second, independent way with coordinates: corners at $(0, 0)$, $(26, 0)$, $(26, 26)$, $(0, 26)$ put the center at $(13, 13)$, and its distance to $(0, 0)$ is $\\sqrt{169 + 169} = \\sqrt{338} = 13\\sqrt{2}$ ✓. (The choice $13$ is HALVING THE SIDE — that spray only reaches the middle of each edge, leaving the corners dry ✗; $26$ is HANDING BACK THE SIDE ✗; $26\\sqrt{2}$ is ANSWERING THE WHOLE DIAGONAL ✗.)',
    },
  ],
  // s9 — same segment as side vs as diagonal: the areas sit at 2 : 1.
  [
    {
      q: 'A stained-glass artist cuts square $P$ with side length $10$ and square $Q$ whose corner-to-corner diagonal is $10$. What is the ratio of the area of $P$ to the area of $Q$?',
      fig: {
        w: 440,
        view: [-1, -1.5, 24, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 10], [0, 10]], fill: false },
          { t: 'poly', pts: [[12.5, 5], [17.5, 0], [22.5, 5], [17.5, 10]], fill: false },
          { t: 'seg', a: [12.5, 5], b: [22.5, 5], dash: true },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [17.5, 5], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [5, 10], text: 'P', dx: 0, dy: -12 },
          { t: 'label', p: [17.5, 10], text: 'Q', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2 : 1$', '$\\sqrt{2} : 1$', '$4 : 1$', '$1 : 1$'],
      answer: 0,
      solution:
        'Square $P$ has area $10^2 = 100$; square $Q$ was handed its diagonal, so its area is $\\frac{d^2}{2} = \\frac{100}{2} = 50$, and the ratio is $100 : 50 = 2 : 1$ ✓. Check a second, independent way by counting triangles: slicing each square along its diagonals yields right isosceles triangles with hypotenuse $10$ — four of them fill $P$, while only two fill $Q$, one on each side of its $10$-long diagonal, so $P$ holds exactly twice the glass ✓. (The choice $\\sqrt{2} : 1$ is COMPARING LENGTHS INSTEAD OF AREAS — that is the ratio of the sides ✗; $4 : 1$ is SQUARING THE 2 ✗; $1 : 1$ is TREATING EQUAL SEGMENTS AS EQUAL SQUARES, though one segment is a side and the other a diagonal ✗.)',
    },
    {
      q: 'Two square coasters are cut so that the first has side length $14$ while the second has a corner-to-corner diagonal of $14$. Find the ratio of the first coaster’s area to the second’s.',
      fig: {
        w: 460,
        view: [-1, -1.5, 32.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 14], [0, 14]], fill: false },
          { t: 'poly', pts: [[17, 7], [24, 0], [31, 7], [24, 14]], fill: false },
          { t: 'seg', a: [17, 7], b: [31, 7], dash: true },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [24, 7], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [7, 14], text: 'I', dx: 0, dy: -12 },
          { t: 'label', p: [24, 14], text: 'II', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\sqrt{2} : 1$', '$4 : 1$', '$2 : 1$', '$3 : 2$'],
      answer: 2,
      solution:
        'The first coaster has area $14^2 = 196$; the second, whose $14$ is a diagonal, has area $\\frac{d^2}{2} = \\frac{196}{2} = 98$, so the ratio is $196 : 98 = 2 : 1$ ✓. Check a second, independent way by counting triangles: cutting along diagonals turns each coaster into right isosceles triangles with hypotenuse $14$ — the first is four of them, the second just two, so the first holds double ✓. And the same $2 : 1$ appears for any segment length, since $s^2 \\div \\frac{s^2}{2} = 2$ ✓. (The choice $\\sqrt{2} : 1$ is COMPARING LENGTHS INSTEAD OF AREAS ✗; $4 : 1$ is SQUARING THE 2 ✗; $3 : 2$ is SPLITTING THE DIFFERENCE with a guess no formula produces ✗.)',
    },
    {
      q: 'A landscaper marks out square plot $G$ with side $20$ m and square plot $H$ whose corner-to-corner span is $20$ m. What is the ratio of the area of plot $G$ to the area of plot $H$?',
      fig: {
        w: 480,
        view: [-1.5, -2, 45.5, 21.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [20, 20], [0, 20]], fill: false },
          { t: 'poly', pts: [[24, 10], [34, 0], [44, 10], [34, 20]], fill: false },
          { t: 'seg', a: [24, 10], b: [44, 10], dash: true },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [34, 10], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [10, 20], text: 'G', dx: 0, dy: -12 },
          { t: 'label', p: [34, 20], text: 'H', dx: 0, dy: -12 },
        ],
      },
      choices: ['$4 : 1$', '$1 : 2$', '$\\sqrt{2} : 1$', '$2 : 1$'],
      answer: 3,
      solution:
        'Plot $G$ has area $20^2 = 400$; plot $H$, whose $20$ is a diagonal, has area $\\frac{d^2}{2} = \\frac{400}{2} = 200$, so the ratio is $400 : 200 = 2 : 1$ ✓. Check a second, independent way by counting triangles: diagonals slice each plot into right isosceles triangles with hypotenuse $20$ — four congruent pieces make up $G$ and only two make up $H$, so $G$ covers twice the ground ✓. (The choice $4 : 1$ is SQUARING THE 2 ✗; $1 : 2$ is INVERTING THE RATIO — the side-built square is the bigger one, since a diagonal of $20$ forces sides shorter than $20$ ✗; $\\sqrt{2} : 1$ is COMPARING LENGTHS INSTEAD OF AREAS ✗.)',
    },
  ],
  // s10 — midpoint square: exactly half the area.
  [
    {
      q: 'A quilt block is a square with side length $10$. The quilter marks the midpoint of each side and sews seams connecting the midpoints in order, outlining a smaller square patch. What is the area of the patch?',
      fig: {
        view: [-1, -1.5, 11, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 10], [0, 10]], fill: false },
          { t: 'seg', a: [5, 0], b: [10, 5], dash: true },
          { t: 'seg', a: [10, 5], b: [5, 10], dash: true },
          { t: 'seg', a: [5, 10], b: [0, 5], dash: true },
          { t: 'seg', a: [0, 5], b: [5, 0], dash: true },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 18 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [10, 10], label: 'G', dx: 10, dy: -8 },
          { t: 'point', p: [0, 10], label: 'H', dx: -10, dy: -8 },
          { t: 'point', p: [5, 0], label: 'J', dx: -14, dy: 8 },
          { t: 'point', p: [10, 5], label: 'K', dx: 12, dy: 0 },
          { t: 'point', p: [5, 10], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [0, 5], label: 'N', dx: -12, dy: 0 },
        ],
      },
      choices: ['$25$', '$50$', '$100$', '$200$'],
      answer: 1,
      solution:
        'Each seam is the hypotenuse of a corner triangle with legs $5$ and $5$, so the patch has side $\\sqrt{5^2 + 5^2} = 5\\sqrt{2}$ and area $(5\\sqrt{2})^2 = 50$ ✓. Check a second, independent way by removing the corners: the block has area $100$, and the four corner triangles each cover $\\frac{1}{2} \\times 5 \\times 5 = 12.5$, so the patch keeps $100 - 4 \\times 12.5 = 50$ — exactly half the block ✓. (The choice $25$ is SQUARING THE HALF-SIDE, as if the patch had side $5$ ✗; $100$ is ANSWERING THE OUTER AREA ✗; $200$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'The midpoints of the four edges of a square sticky note with side $6$ are joined in order, drawing a tilted square in the middle of the note. What is the area of the tilted square?',
      fig: {
        view: [-1, -1.5, 7, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'seg', a: [3, 0], b: [6, 3], dash: true },
          { t: 'seg', a: [6, 3], b: [3, 6], dash: true },
          { t: 'seg', a: [3, 6], b: [0, 3], dash: true },
          { t: 'seg', a: [0, 3], b: [3, 0], dash: true },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 18 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [6, 6], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 6], label: 'S', dx: -10, dy: -8 },
          { t: 'point', p: [3, 0], label: 'T', dx: -14, dy: 8 },
          { t: 'point', p: [6, 3], label: 'U', dx: 12, dy: 0 },
          { t: 'point', p: [3, 6], label: 'V', dx: 0, dy: -12 },
          { t: 'point', p: [0, 3], label: 'W', dx: -12, dy: 0 },
        ],
      },
      choices: ['$9$', '$36$', '$72$', '$18$'],
      answer: 3,
      solution:
        'Each edge of the tilted square is the hypotenuse of a corner triangle with legs $3$ and $3$, so its side is $\\sqrt{3^2 + 3^2} = 3\\sqrt{2}$ and its area is $(3\\sqrt{2})^2 = 18$ ✓. Check a second, independent way by removing the corners: the note has area $36$, the four corner triangles each cover $\\frac{1}{2} \\times 3 \\times 3 = 4.5$, and $36 - 4 \\times 4.5 = 18$ — the tilted square is exactly half the note ✓. (The choice $9$ is SQUARING THE HALF-SIDE ✗; $36$ is ANSWERING THE OUTER AREA ✗; $72$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'A square garden has side $12$, and a diamond-shaped gravel path connects the midpoints of its four sides in order. What area does the diamond enclose?',
      fig: {
        view: [-1.5, -2, 13.5, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
          { t: 'seg', a: [6, 0], b: [12, 6], dash: true },
          { t: 'seg', a: [12, 6], b: [6, 12], dash: true },
          { t: 'seg', a: [6, 12], b: [0, 6], dash: true },
          { t: 'seg', a: [0, 6], b: [6, 0], dash: true },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 18 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [12, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [6, 0], label: 'W', dx: -14, dy: 8 },
          { t: 'point', p: [12, 6], label: 'X', dx: 12, dy: 0 },
          { t: 'point', p: [6, 12], label: 'Y', dx: 0, dy: -12 },
          { t: 'point', p: [0, 6], label: 'Z', dx: -12, dy: 0 },
        ],
      },
      choices: ['$72$', '$36$', '$144$', '$288$'],
      answer: 0,
      solution:
        'Each stretch of path is the hypotenuse of a corner triangle with legs $6$ and $6$, so the diamond has side $\\sqrt{6^2 + 6^2} = 6\\sqrt{2}$ and encloses $(6\\sqrt{2})^2 = 72$ ✓. Check a second, independent way by removing the corners: the garden has area $144$, the four corner triangles each cover $\\frac{1}{2} \\times 6 \\times 6 = 18$, and $144 - 4 \\times 18 = 72$ — the diamond takes exactly half the garden ✓. (The choice $36$ is SQUARING THE HALF-SIDE, pretending the diamond has side $6$ ✗; $144$ is ANSWERING THE OUTER AREA ✗; $288$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.6': s86,
  },
}
