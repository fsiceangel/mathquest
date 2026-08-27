// Introduction to Geometry chapter 8 — variations for section 8.8
// (Quadrilateral Problems). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    midsegment-times-height against picked bases, the diagonal formula
//    against the 45-45-90 side, a Pythagorean triple against a
//    difference-of-squares factoring, the two-heights equal-area equation
//    against the inverse proportion, and the unequal-legs split solved from
//    (L2^2 - L1^2)/D and re-summed as rectangle plus two right triangles.
//    Both routes must agree before a key is written down.
//  - Figures are built from their own numbers: every drawn leg, diagonal, and
//    height was recomputed from the plotted coordinates, every right marker
//    checked against a dot product, and the 120-degree rhombus vertices
//    plotted from exact half-diagonals.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution. No two choices inside an item name the same value.

const s88 = [
  // s1 — midsegment times height gives the trapezoid area.
  [
    {
      q: 'A community garden bed is shaped like a trapezoid. Its midsegment measures $17$ m, and the two parallel edges are $6$ m apart. How many square meters of soil does the bed cover?',
      fig: {
        view: [-12.5, -1.5, 12.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [11, 0], [6, 6], [-6, 6]], fill: false },
          { t: 'seg', a: [-8.5, 3], b: [8.5, 3], dash: true },
          { t: 'seg', a: [6, 6], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [11, 0], to: [6, 6] },
          { t: 'label', p: [0, 3], text: '17', dx: 0, dy: -10 },
          { t: 'label', p: [6, 1.2], text: '6', dx: 12, dy: 0 },
          { t: 'point', p: [-11, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-6, 6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$102$', '$51$', '$69$', 'It cannot be determined without the bases'],
      answer: 0,
      solution:
        'The midsegment is already the average of the bases, so Area $=$ midsegment $\\times$ height $= 17 \\times 6 = 102$ square meters ✓. Check a second, independent way with a concrete pair of bases: any bases averaging $17$ — say $22$ and $12$, as drawn — give $\\frac{22 + 12}{2} \\times 6 = 17 \\times 6 = 102$ again ✓. (The choice $51$ is EXTRA HALVING — the $\\frac{1}{2}$ of the trapezoid formula is already built into the midsegment ✗; $69$ is MIXING THE HEIGHT INTO THE BASES, computing $\\frac{17 + 6}{2} \\times 6$ as if $6$ were a base ✗; the last choice is DEMANDING THE BASES when their average has already been handed over ✗.)',
    },
    {
      q: 'A woodworker cuts a trapezoidal tabletop. The strip joining the midpoints of its two slanted edges is $13$ ft long, and the parallel edges sit $6$ ft apart. Find the area of the tabletop.',
      fig: {
        view: [-9.5, -1.5, 9.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [8, 0], [5, 6], [-5, 6]], fill: false },
          { t: 'seg', a: [-6.5, 3], b: [6.5, 3], dash: true },
          { t: 'seg', a: [5, 6], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [8, 0], to: [5, 6] },
          { t: 'label', p: [0, 3], text: '13', dx: 0, dy: -10 },
          { t: 'label', p: [5, 1.2], text: '6', dx: 12, dy: 0 },
          { t: 'point', p: [-8, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-5, 6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$39$', '$57$', '$78$', 'It cannot be determined without the bases'],
      answer: 2,
      solution:
        'The strip through the midpoints of the legs is the midsegment, which equals $\\frac{b_1 + b_2}{2}$, so Area $= 13 \\times 6 = 78$ square feet ✓. Check a second, independent way by choosing bases with that average: $16$ and $10$, as drawn, give $\\frac{16 + 10}{2} \\times 6 = 13 \\times 6 = 78$ again ✓. (The choice $39$ is EXTRA HALVING — halving a value that is already an average ✗; $57$ is MIXING THE HEIGHT INTO THE BASES via $\\frac{13 + 6}{2} \\times 6$ ✗; the last choice is DEMANDING THE BASES that the midsegment already summarizes ✗.)',
    },
    {
      q: 'The side panel of a skateboard ramp is a trapezoid whose midsegment is $12$ in long, with a perpendicular distance of $9$ in between the parallel sides. What is the area of the panel?',
      fig: {
        view: [-9.5, -1.5, 9.5, 10.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [8, 0], [4, 9], [-4, 9]], fill: false },
          { t: 'seg', a: [-6, 4.5], b: [6, 4.5], dash: true },
          { t: 'seg', a: [4, 9], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [8, 0], to: [4, 9] },
          { t: 'label', p: [0, 4.5], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [4, 1.8], text: '9', dx: 12, dy: 0 },
          { t: 'point', p: [-8, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 9], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-4, 9], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$94.5$', '$108$', '$189$', 'It cannot be determined without the bases'],
      answer: 1,
      solution:
        'Area $=$ midsegment $\\times$ height $= 12 \\times 9 = 108$ square inches, because the midsegment IS the average $\\frac{b_1 + b_2}{2}$ ✓. Check a second, independent way with sample bases averaging $12$: the drawn bases $16$ and $8$ give $\\frac{16 + 8}{2} \\times 9 = 12 \\times 9 = 108$ again ✓. (The choice $94.5$ is MIXING THE HEIGHT INTO THE BASES, $\\frac{12 + 9}{2} \\times 9$ ✗; $189$ is CRAMMING BOTH GIVENS IN AS BASES, $(12 + 9) \\times 9$, and dropping the half as well ✗; the last choice is DEMANDING THE BASES the midsegment already averages ✗.)',
    },
  ],
  // s2 — consecutive parallelogram angles from a ratio.
  [
    {
      q: 'In parallelogram $PQRS$, angle $Q$ is three times as large as its neighbor, angle $P$. What is the measure of angle $Q$?',
      choices: ['$270^\\circ$', '$135^\\circ$', '$67.5^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'Consecutive angles of a parallelogram are supplementary, so $x + 3x = 180^\\circ$ gives $x = 45^\\circ$ and $\\angle Q = 3 \\times 45^\\circ = 135^\\circ$ ✓. Check a second, independent way with the full angle sum: opposite angles are equal, so the four angles run $1 : 3 : 1 : 3$, which is $8$ parts of $360^\\circ$; one part is $45^\\circ$, and three parts make $135^\\circ$ again ✓. (The choice $270^\\circ$ is SUMMING TWO NEIGHBORS TO 360 — two consecutive angles share only $180^\\circ$ ✗; $67.5^\\circ$ is SUMMING TO 90, treating the neighbors as complementary ✗; $90^\\circ$ is FORCING A RECTANGLE onto a parallelogram that never claimed right angles ✗.)',
    },
    {
      q: 'Two neighboring angles of a parallelogram have measures in the ratio $2 : 7$. Find the measure of the larger one.',
      choices: ['$280^\\circ$', '$90^\\circ$', '$160^\\circ$', '$140^\\circ$'],
      answer: 3,
      solution:
        'Neighboring angles of a parallelogram add to $180^\\circ$: $2x + 7x = 180^\\circ$, so $x = 20^\\circ$ and the larger angle is $7 \\times 20^\\circ = 140^\\circ$ ✓. Check a second, independent way around the whole shape: the four angles run $2 : 7 : 2 : 7$, which is $18$ parts of $360^\\circ$; one part is $20^\\circ$, and seven parts give $140^\\circ$ again ✓. (The choice $280^\\circ$ is SUMMING TWO NEIGHBORS TO 360 ✗; $90^\\circ$ is FORCING A RECTANGLE ✗; $160^\\circ$ is SKIPPING THE SCALE-UP — it subtracts the one-part value $20^\\circ$ from $180^\\circ$ instead of multiplying by $7$ ✗.)',
    },
    {
      q: 'One angle of a parallelogram measures five times its consecutive neighbor. How large is that bigger angle?',
      choices: ['$150^\\circ$', '$90^\\circ$', '$75^\\circ$', '$210^\\circ$'],
      answer: 0,
      solution:
        'The two neighbors are supplementary: $x + 5x = 180^\\circ$, so $x = 30^\\circ$ and the bigger angle is $5 \\times 30^\\circ = 150^\\circ$ ✓. Check a second, independent way with all four angles: opposite angles match, so the parallelogram carries $1 : 5 : 1 : 5$, twelve parts of $360^\\circ$; one part is $30^\\circ$, and five parts land on $150^\\circ$ again ✓. (The choice $90^\\circ$ is FORCING A RECTANGLE ✗; $75^\\circ$ is SUMMING TO 90, splitting a right angle in ratio $1 : 5$ instead of a straight one ✗; $210^\\circ$ is SWINGING TO THE REFLEX, subtracting the true answer from $360^\\circ$ ✗.)',
    },
  ],
  // s3 — square diagonal to area.
  [
    {
      q: 'A square courtyard has a straight walkway running corner to corner, and the walkway measures $22$ m. What is the area of the courtyard?',
      fig: {
        view: [-12.5, -12.5, 12.5, 12.5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [0, -11], [11, 0], [0, 11]], fill: false },
          { t: 'seg', a: [-11, 0], b: [11, 0], dash: true },
          { t: 'label', p: [-5.5, 0], text: '22', dx: 0, dy: 14 },
          { t: 'point', p: [-11, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -11], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [11, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 11], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$484$', '$60.5$', '$242$', '$44\\sqrt{2}$'],
      answer: 2,
      solution:
        'A square is a rhombus with equal diagonals, so Area $= \\frac{d_1 d_2}{2} = \\frac{22 \\times 22}{2} = 242$ square meters ✓. Check a second, independent way through the side: the diagonal of a square is $s\\sqrt{2}$, so $s = \\frac{22}{\\sqrt{2}} = 11\\sqrt{2}$ and Area $= s^2 = (11\\sqrt{2})^2 = 121 \\times 2 = 242$ again ✓. (The choice $484$ is SQUARING THE DIAGONAL, $d^2$ with the half forgotten ✗; $60.5$ is FEEDING HALF-DIAGONALS INTO THE FORMULA, $\\frac{11 \\times 11}{2}$ ✗; $44\\sqrt{2}$ is ANSWERING THE PERIMETER, $4 \\times 11\\sqrt{2}$ ✗.)',
    },
    {
      q: 'A square napkin is folded along a crease joining opposite corners, and the crease is $18$ in long. Find the area of the unfolded napkin.',
      fig: {
        view: [-10.5, -10.5, 10.5, 10.5],
        elems: [
          { t: 'poly', pts: [[-9, 0], [0, -9], [9, 0], [0, 9]], fill: false },
          { t: 'seg', a: [-9, 0], b: [9, 0], dash: true },
          { t: 'label', p: [-4.5, 0], text: '18', dx: 0, dy: 14 },
          { t: 'point', p: [-9, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -9], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [9, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 9], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$162$', '$324$', '$81$', '$36\\sqrt{2}$'],
      answer: 0,
      solution:
        'The corner-to-corner crease is a diagonal, and a square’s area is half the product of its diagonals: $\\frac{18 \\times 18}{2} = 162$ square inches ✓. Check a second, independent way through the side: $s = \\frac{18}{\\sqrt{2}} = 9\\sqrt{2}$, so Area $= (9\\sqrt{2})^2 = 81 \\times 2 = 162$ again ✓. (The choice $324$ is SQUARING THE DIAGONAL and skipping the half ✗; $81$ is SQUARING THE HALF-DIAGONAL, $9^2$ ✗; $36\\sqrt{2}$ is ANSWERING THE PERIMETER, $4 \\times 9\\sqrt{2}$ ✗.)',
    },
    {
      q: 'A square window frame is stiffened by a corner-to-corner brace of length $24$ in. How many square inches of glass does the frame enclose?',
      fig: {
        view: [-13.5, -13.5, 13.5, 13.5],
        elems: [
          { t: 'poly', pts: [[-12, 0], [0, -12], [12, 0], [0, 12]], fill: false },
          { t: 'seg', a: [-12, 0], b: [12, 0], dash: true },
          { t: 'label', p: [-6, 0], text: '24', dx: 0, dy: 14 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -12], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [12, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 12], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$576$', '$144$', '$48\\sqrt{2}$', '$288$'],
      answer: 3,
      solution:
        'The brace is a diagonal, so Area $= \\frac{d^2}{2} = \\frac{24 \\times 24}{2} = 288$ square inches ✓. Check a second, independent way through the side: $s = \\frac{24}{\\sqrt{2}} = 12\\sqrt{2}$, so Area $= (12\\sqrt{2})^2 = 144 \\times 2 = 288$ again ✓. (The choice $576$ is SQUARING THE DIAGONAL with the half forgotten ✗; $144$ is SQUARING THE HALF-DIAGONAL, $12^2$ ✗; $48\\sqrt{2}$ is ANSWERING THE PERIMETER, $4 \\times 12\\sqrt{2}$ ✗.)',
    },
  ],
  // s4 — rectangle diagonal by Pythagoras.
  [
    {
      q: 'A rectangular sports field measures $56$ m by $33$ m. A groundskeeper walks straight from one corner to the opposite corner. How far does she walk?',
      fig: {
        w: 400,
        view: [-2, -2.5, 58.5, 35.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [56, 0], [56, 33], [0, 33]], fill: false },
          { t: 'seg', a: [0, 0], b: [56, 33], dash: true },
          { t: 'right', at: [56, 0], from: [0, 0], to: [56, 33] },
          { t: 'label', p: [28, 0], text: '56', dx: 0, dy: 14 },
          { t: 'label', p: [56, 16.5], text: '33', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [56, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [56, 33], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 33], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$89$', '$23$', '$\\sqrt{2047}$', '$65$'],
      answer: 3,
      solution:
        'The diagonal is the hypotenuse of a right triangle with legs $56$ and $33$: $d = \\sqrt{56^2 + 33^2} = \\sqrt{3136 + 1089} = \\sqrt{4225} = 65$ m — the $33$-$56$-$65$ Pythagorean triple ✓. Check a second, independent way with a difference of squares: $65^2 - 56^2 = (65 - 56)(65 + 56) = 9 \\times 121 = 1089 = 33^2$, so $65$ closes the triangle exactly ✓. (The choice $89$ is ADDING THE SIDES, $56 + 33$ ✗; $23$ is SUBTRACTING THE SIDES ✗; $\\sqrt{2047}$ is SUBTRACTING THE SQUARES, $\\sqrt{56^2 - 33^2}$, as if the long side were a hypotenuse ✗.)',
    },
    {
      q: 'A rectangular vegetable garden is $48$ ft long and $20$ ft wide. What is the length of a hose stretched taut between opposite corners?',
      fig: {
        w: 400,
        view: [-2, -2, 50, 22.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [48, 20], [0, 20]], fill: false },
          { t: 'seg', a: [0, 0], b: [48, 20], dash: true },
          { t: 'right', at: [48, 0], from: [0, 0], to: [48, 20] },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [48, 10], text: '20', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [48, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [48, 20], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 20], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$68$', '$52$', '$\\sqrt{1904}$', '$2704$'],
      answer: 1,
      solution:
        'The hose is the hypotenuse over legs $48$ and $20$: $d = \\sqrt{48^2 + 20^2} = \\sqrt{2304 + 400} = \\sqrt{2704} = 52$ ft ✓. Check a second, independent way by scaling a known triple: $48$-$20$ is $4$ times $12$-$5$, and $5$-$12$-$13$ scales to $20$-$48$-$52$ — the same $52$ with no squaring at all ✓. (The choice $68$ is ADDING THE SIDES ✗; $\\sqrt{1904}$ is SUBTRACTING THE SQUARES, $\\sqrt{48^2 - 20^2}$ ✗; $2704$ is FORGETTING THE ROOT, reporting $d^2$ instead of $d$ ✗.)',
    },
    {
      q: 'A rectangular poster is $45$ cm wide and $28$ cm tall. How long is the ribbon glued along one of its diagonals?',
      fig: {
        w: 380,
        view: [-2, -2, 47, 30],
        elems: [
          { t: 'poly', pts: [[0, 0], [45, 0], [45, 28], [0, 28]], fill: false },
          { t: 'seg', a: [0, 0], b: [45, 28], dash: true },
          { t: 'right', at: [45, 0], from: [0, 0], to: [45, 28] },
          { t: 'label', p: [22.5, 0], text: '45', dx: 0, dy: 14 },
          { t: 'label', p: [45, 14], text: '28', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [45, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [45, 28], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 28], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$2809$', '$17$', '$53$', '$\\sqrt{1241}$'],
      answer: 2,
      solution:
        'The ribbon is a hypotenuse over legs $45$ and $28$: $d = \\sqrt{45^2 + 28^2} = \\sqrt{2025 + 784} = \\sqrt{2809} = 53$ cm — the $28$-$45$-$53$ triple ✓. Check a second, independent way with a difference of squares: $53^2 - 45^2 = (53 - 45)(53 + 45) = 8 \\times 98 = 784 = 28^2$, so the triple is genuine ✓. (The choice $2809$ is FORGETTING THE ROOT — it is $d^2$ ✗; $17$ is SUBTRACTING THE SIDES, $45 - 28$ ✗; $\\sqrt{1241}$ is SUBTRACTING THE SQUARES, $\\sqrt{45^2 - 28^2}$ ✗.)',
    },
  ],
  // s5 — isosceles trapezoid: bases and height to perimeter.
  [
    {
      q: 'The front face of a planter box is an isosceles trapezoid with parallel edges of $22$ in and $6$ in that sit $15$ in apart. A metal trim runs around the whole face. How long is the trim?',
      fig: {
        view: [-12.5, -1.5, 12.5, 16.5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [11, 0], [3, 15], [-3, 15]], fill: false },
          { t: 'seg', a: [3, 15], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [11, 0], to: [3, 15] },
          { t: 'tick', a: [-11, 0], b: [-3, 15], n: 1 },
          { t: 'tick', a: [11, 0], b: [3, 15], n: 1 },
          { t: 'label', p: [-4, 0], text: '22', dx: 0, dy: 14 },
          { t: 'label', p: [0, 15], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [3, 7.5], text: '15', dx: -14, dy: 0 },
          { t: 'point', p: [-11, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [3, 15], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-3, 15], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$62$', '$58$', '$210$', '$28 + 2\\sqrt{481}$'],
      answer: 0,
      solution:
        'Symmetry splits the base difference $22 - 6 = 16$ into an overhang of $8$ on each end, so each leg is the hypotenuse over legs $8$ and $15$: $\\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$ — the $8$-$15$-$17$ triple. Perimeter $= 22 + 6 + 17 + 17 = 62$ in ✓. Check a second, independent way with a difference of squares: $17^2 - 15^2 = (17 - 15)(17 + 15) = 2 \\times 32 = 64 = 8^2$, so the leg length $17$ is exact and the trim total stands at $62$ ✓. (The choice $58$ is USING THE HEIGHT AS A LEG, $22 + 6 + 15 + 15$ ✗; $210$ is ANSWERING THE AREA, $\\frac{22 + 6}{2} \\times 15$ ✗; $28 + 2\\sqrt{481}$ is HOARDING THE WHOLE OVERHANG, giving the full $16$ to one right triangle ✗.)',
    },
    {
      q: 'An isosceles trapezoidal flower plot has parallel sides of $26$ ft and $10$ ft, and the perpendicular distance between them is $15$ ft. How many feet of edging are needed to border the plot?',
      fig: {
        w: 340,
        view: [-14.5, -1.5, 14.5, 16.5],
        elems: [
          { t: 'poly', pts: [[-13, 0], [13, 0], [5, 15], [-5, 15]], fill: false },
          { t: 'seg', a: [5, 15], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [13, 0], to: [5, 15] },
          { t: 'tick', a: [-13, 0], b: [-5, 15], n: 1 },
          { t: 'tick', a: [13, 0], b: [5, 15], n: 1 },
          { t: 'label', p: [-4, 0], text: '26', dx: 0, dy: 14 },
          { t: 'label', p: [0, 15], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [5, 7.5], text: '15', dx: -14, dy: 0 },
          { t: 'point', p: [-13, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [13, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 15], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-5, 15], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$270$', '$53$', '$70$', '$36 + 2\\sqrt{481}$'],
      answer: 2,
      solution:
        'The bases differ by $26 - 10 = 16$, and symmetry parks $8$ of it under each leg. Each leg is then $\\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$, so the edging runs $26 + 10 + 17 + 17 = 70$ ft ✓. Check a second, independent way by factoring: $17^2 - 8^2 = (17 - 8)(17 + 8) = 9 \\times 25 = 225 = 15^2$, confirming the $8$-$15$-$17$ right triangle and the total of $70$ ✓. (The choice $270$ is ANSWERING THE AREA, $\\frac{26 + 10}{2} \\times 15$ ✗; $53$ is FORGETTING A LEG, $26 + 10 + 17$ ✗; $36 + 2\\sqrt{481}$ is HOARDING THE WHOLE OVERHANG, hanging all $16$ under a single leg ✗.)',
    },
    {
      q: 'A stage backdrop is an isosceles trapezoid whose parallel edges measure $34$ ft and $10$ ft, with $16$ ft between them. Rope lighting is strung once around the outline. Find the length of the rope.',
      fig: {
        w: 380,
        view: [-18.5, -1.5, 18.5, 17.5],
        elems: [
          { t: 'poly', pts: [[-17, 0], [17, 0], [5, 16], [-5, 16]], fill: false },
          { t: 'seg', a: [5, 16], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [17, 0], to: [5, 16] },
          { t: 'tick', a: [-17, 0], b: [-5, 16], n: 1 },
          { t: 'tick', a: [17, 0], b: [5, 16], n: 1 },
          { t: 'label', p: [-6, 0], text: '34', dx: 0, dy: 14 },
          { t: 'label', p: [0, 16], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [5, 8], text: '16', dx: -14, dy: 0 },
          { t: 'point', p: [-17, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [17, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 16], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-5, 16], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$352$', '$84$', '$64$', '$44 + 16\\sqrt{13}$'],
      answer: 1,
      solution:
        'The base difference $34 - 10 = 24$ splits evenly, putting an overhang of $12$ under each leg. Each leg is $\\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ — four times the $3$-$4$-$5$ triangle — so the rope measures $34 + 10 + 20 + 20 = 84$ ft ✓. Check a second, independent way by factoring: $20^2 - 16^2 = (20 - 16)(20 + 16) = 4 \\times 36 = 144 = 12^2$, so the leg of $20$ is exact and the perimeter is $84$ ✓. (The choice $352$ is ANSWERING THE AREA, $\\frac{34 + 10}{2} \\times 16$ ✗; $64$ is COUNTING ONE LEG, $34 + 10 + 20$ ✗; $44 + 16\\sqrt{13}$ is HOARDING THE WHOLE OVERHANG, wedging all $24$ under one leg ✗.)',
    },
  ],
  // s6 — rhombus: perimeter plus one diagonal to area.
  [
    {
      q: 'A rhombus-shaped kite uses $40$ in of ribbon around its edge, and one of its two cross spars — which run along the diagonals — is $16$ in long. What is the area of the kite fabric?',
      fig: {
        view: [-9.5, -7.5, 9.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [0, -6], [8, 0], [0, 6]], fill: false },
          { t: 'seg', a: [-8, 0], b: [8, 0], dash: true },
          { t: 'seg', a: [0, -6], b: [0, 6], dash: true },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [-4, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [4, 3], text: '10', dx: 10, dy: -8 },
          { t: 'point', p: [-8, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -6], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [8, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 6], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$192$', '$96$', '$100$', '$128$'],
      answer: 1,
      solution:
        'The side is $\\frac{40}{4} = 10$. The diagonals cross at the center at right angles, so half of the known spar, $8$, is one leg of a right triangle with hypotenuse $10$; the other leg is $\\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$, making the second diagonal $12$. Area $= \\frac{16 \\times 12}{2} = 96$ square inches ✓. Check a second, independent way by counting the four congruent right triangles the spars create: each has legs $8$ and $6$, area $\\frac{8 \\times 6}{2} = 24$, and $4 \\times 24 = 96$ again ✓. (The choice $192$ is FORGETTING THE HALF in $\\frac{d_1 d_2}{2}$ ✗; $100$ is SQUARING THE SIDE, as if the rhombus were a square ✗; $128$ is TREATING IT AS A SQUARE another way, $\\frac{16^2}{2}$ with equal diagonals assumed ✗.)',
    },
    {
      q: 'A rhombus-shaped garden tile has a perimeter of $100$ cm, and its longer diagonal measures $40$ cm. Find the area of the tile.',
      fig: {
        w: 340,
        view: [-22, -17, 22, 17],
        elems: [
          { t: 'poly', pts: [[-20, 0], [0, -15], [20, 0], [0, 15]], fill: false },
          { t: 'seg', a: [-20, 0], b: [20, 0], dash: true },
          { t: 'seg', a: [0, -15], b: [0, 15], dash: true },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 15] },
          { t: 'label', p: [-10, 0], text: '40', dx: 0, dy: 14 },
          { t: 'label', p: [10, 7.5], text: '25', dx: 10, dy: -8 },
          { t: 'point', p: [-20, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -15], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [20, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 15], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$600$', '$1200$', '$625$', '$800$'],
      answer: 0,
      solution:
        'The side is $\\frac{100}{4} = 25$, and half the known diagonal is $20$. Inside each right triangle at the center, the other leg is $\\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15$ — the $3$-$4$-$5$ family scaled by five — so the other diagonal is $30$ and Area $= \\frac{40 \\times 30}{2} = 600$ square centimeters ✓. Check a second, independent way with the four congruent right triangles: each has legs $20$ and $15$, area $150$, and $4 \\times 150 = 600$ again ✓. (The choice $1200$ is FORGETTING THE HALF, $d_1 d_2$ ✗; $625$ is SQUARING THE SIDE ✗; $800$ is TREATING IT AS A SQUARE, $\\frac{40^2}{2}$ ✗.)',
    },
    {
      q: 'A road-sign blank is a rhombus with a perimeter of $164$ cm whose shorter diagonal measures $18$ cm. What is the area of the blank?',
      fig: {
        w: 420,
        view: [-42, -11, 42, 11],
        elems: [
          { t: 'poly', pts: [[-40, 0], [0, -9], [40, 0], [0, 9]], fill: false },
          { t: 'seg', a: [-40, 0], b: [40, 0], dash: true },
          { t: 'seg', a: [0, -9], b: [0, 9], dash: true },
          { t: 'right', at: [0, 0], from: [40, 0], to: [0, 9] },
          { t: 'label', p: [0, -4.5], text: '18', dx: 14, dy: 0 },
          { t: 'label', p: [20, 4.5], text: '41', dx: 10, dy: -8 },
          { t: 'point', p: [-40, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -9], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [40, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 9], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$1440$', '$1681$', '$162$', '$720$'],
      answer: 3,
      solution:
        'The side is $\\frac{164}{4} = 41$, and half the short diagonal is $9$. The diagonals meet at the center at right angles, so the other half-diagonal is $\\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$ — the $9$-$40$-$41$ triple — making the long diagonal $80$. Area $= \\frac{18 \\times 80}{2} = 720$ square centimeters ✓. Check a second, independent way with the four congruent right triangles: each has legs $9$ and $40$, area $180$, and $4 \\times 180 = 720$ again ✓. (The choice $1440$ is FORGETTING THE HALF, $18 \\times 80$ ✗; $1681$ is SQUARING THE SIDE ✗; $162$ is TREATING IT AS A SQUARE, $\\frac{18^2}{2}$ ✗.)',
    },
  ],
  // s7 — parallelogram: one height determines the other.
  [
    {
      q: 'A parallelogram-shaped patio has sides of $16$ m and $6$ m, and the height drawn to the $16$ m side measures $3$ m. What is the height drawn to the $6$ m side?',
      choices: ['$3$', '$1.125$', '$8$', '$32$'],
      answer: 2,
      solution:
        'The area does not care which base is chosen: base times height gives $16 \\times 3 = 48$, so $6 \\times h = 48$ and $h = 8$ m ✓. Check a second, independent way with the inverse proportion: shrinking the base by the factor $\\frac{16}{6}$ stretches the height by the same factor, so $h = 3 \\times \\frac{16}{6} = 8$ again ✓ — and it passes the sense check that the shorter base carries the longer height. (The choice $3$ is KEEPING THE SAME HEIGHT for both bases ✗; $1.125$ is FLIPPING THE PROPORTION, $3 \\times \\frac{6}{16}$ ✗; $32$ is MULTIPLYING THE SIDES, $\\frac{16 \\times 6}{3}$, which invents an area of $96$ ✗.)',
    },
    {
      q: 'A parallelogram has sides $21$ cm and $14$ cm. The perpendicular distance between the pair of $21$ cm sides is $6$ cm. Find the perpendicular distance between the pair of $14$ cm sides.',
      choices: ['$6$', '$4$', '$4.5$', '$9$'],
      answer: 3,
      solution:
        'One area, two readings: $21 \\times 6 = 126$, so $14 \\times h = 126$ and $h = 9$ cm ✓. Check a second, independent way by proportion: $h = 6 \\times \\frac{21}{14} = 6 \\times \\frac{3}{2} = 9$ again ✓ — the shorter base always pairs with the taller height. (The choice $6$ is KEEPING THE SAME HEIGHT ✗; $4$ is FLIPPING THE PROPORTION, $6 \\times \\frac{14}{21}$ ✗; $4.5$ is HALVING LIKE A TRIANGLE, using $\\frac{1}{2} \\times 21 \\times 6 = 63$ as the area and dividing by $14$ ✗.)',
    },
    {
      q: 'In a parallelogram with sides $24$ in and $9$ in, the altitude to the $24$ in side is $6$ in. How long is the altitude to the $9$ in side?',
      choices: ['$16$', '$6$', '$2.25$', '$8$'],
      answer: 0,
      solution:
        'The parallelogram’s area is $24 \\times 6 = 144$ from one base, so from the other base $9 \\times h = 144$ gives $h = 16$ in ✓. Check a second, independent way by proportion: $h = 6 \\times \\frac{24}{9} = 6 \\times \\frac{8}{3} = 16$ again ✓, and the sense check holds — the much shorter base needs a much taller altitude. (The choice $6$ is KEEPING THE SAME HEIGHT ✗; $2.25$ is FLIPPING THE PROPORTION, $6 \\times \\frac{9}{24}$ ✗; $8$ is HALVING LIKE A TRIANGLE, taking $\\frac{1}{2} \\times 24 \\times 6 = 72$ as the area before dividing by $9$ ✗.)',
    },
  ],
  // s8 — trapezoid with unequal legs: split the overhang, then Pythagoras.
  [
    {
      q: 'A trapezoidal field has parallel sides of $24$ m and $10$ m and slanted sides of $13$ m and $15$ m. What is the area of the field?',
      fig: {
        w: 380,
        view: [-1.5, -1.5, 25.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [15, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'seg', a: [15, 12], b: [15, 0], dash: true },
          { t: 'right', at: [5, 0], from: [24, 0], to: [5, 12] },
          { t: 'right', at: [15, 0], from: [24, 0], to: [15, 12] },
          { t: 'label', p: [10, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [10, 12], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: 0 },
          { t: 'label', p: [19.5, 6], text: '15', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$221$', '$408$', '$34\\sqrt{30}$', '$204$'],
      answer: 3,
      solution:
        'Drop both heights. The extra base length $24 - 10 = 14$ splits into $x$ under the $13$ leg and $y$ under the $15$ leg, with $x + y = 14$. The two heights are the same, so $13^2 - x^2 = 15^2 - y^2$, giving $y^2 - x^2 = 225 - 169 = 56$; then $(y - x)(y + x) = 56$ forces $y - x = \\frac{56}{14} = 4$, so $x = 5$, $y = 9$, and $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ (the $15$ leg agrees: $\\sqrt{15^2 - 9^2} = 12$). Area $= \\frac{24 + 10}{2} \\times 12 = 17 \\times 12 = 204$ square meters ✓. Check a second, independent way by summing the pieces: left triangle $\\frac{5 \\times 12}{2} = 30$, middle rectangle $10 \\times 12 = 120$, right triangle $\\frac{9 \\times 12}{2} = 54$, and $30 + 120 + 54 = 204$ again ✓. (The choice $221$ is SLANT AS HEIGHT, $17 \\times 13$ ✗; $408$ is FORGETTING THE HALF, $(24 + 10) \\times 12$ ✗; $34\\sqrt{30}$ is SPLITTING THE OVERHANG EVENLY, a symmetry only isosceles trapezoids own ✗.)',
    },
    {
      q: 'A quilter cuts a trapezoid of fabric with parallel edges $30$ cm and $9$ cm and non-parallel edges $10$ cm and $17$ cm. How many square centimeters of fabric is that?',
      fig: {
        w: 400,
        view: [-1.5, -1.5, 31.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [15, 8], [6, 8]], fill: false },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'seg', a: [15, 8], b: [15, 0], dash: true },
          { t: 'right', at: [6, 0], from: [30, 0], to: [6, 8] },
          { t: 'right', at: [15, 0], from: [30, 0], to: [15, 8] },
          { t: 'label', p: [24, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [10.5, 8], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [3, 4], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [22.5, 4], text: '17', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [15, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [6, 8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$156$', '$195$', '$312$', 'It cannot be determined'],
      answer: 0,
      solution:
        'Drop both heights and split the extra base $30 - 9 = 21$ into $x$ under the $10$ edge and $y$ under the $17$ edge, so $x + y = 21$. Equal heights give $10^2 - x^2 = 17^2 - y^2$, so $y^2 - x^2 = 289 - 100 = 189$, and $(y - x)(y + x) = 189$ makes $y - x = \\frac{189}{21} = 9$: $x = 6$, $y = 15$, and $h = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$ (the other side agrees: $\\sqrt{17^2 - 15^2} = 8$). Area $= \\frac{30 + 9}{2} \\times 8 = 19.5 \\times 8 = 156$ square centimeters ✓. Check a second, independent way piece by piece: triangle $\\frac{6 \\times 8}{2} = 24$, rectangle $9 \\times 8 = 72$, triangle $\\frac{15 \\times 8}{2} = 60$, and $24 + 72 + 60 = 156$ again ✓. (The choice $195$ is SLANT AS HEIGHT, $19.5 \\times 10$ ✗; $312$ is FORGETTING THE HALF, $(30 + 9) \\times 8$ ✗; “cannot be determined” is DEMANDING MORE DATA — two legs and two bases pin the trapezoid down completely ✗.)',
    },
    {
      q: 'A park lawn is a trapezoid with parallel boundaries of $32$ yd and $18$ yd; the other two boundaries run $13$ yd and $15$ yd. Find the area of the lawn.',
      fig: {
        w: 400,
        view: [-1.5, -1.5, 33.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [23, 12], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'seg', a: [23, 12], b: [23, 0], dash: true },
          { t: 'right', at: [5, 0], from: [32, 0], to: [5, 12] },
          { t: 'right', at: [23, 0], from: [32, 0], to: [23, 12] },
          { t: 'label', p: [14, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [14, 12], text: '18', dx: 0, dy: -10 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: 0 },
          { t: 'label', p: [27.5, 6], text: '15', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [32, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [23, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$325$', '$375$', '$300$', '$50\\sqrt{30}$'],
      answer: 2,
      solution:
        'Drop the two heights. The overhang $32 - 18 = 14$ splits as $x$ under the $13$ boundary and $y$ under the $15$ boundary, with $x + y = 14$. Matching heights give $13^2 - x^2 = 15^2 - y^2$, so $y^2 - x^2 = 56$ and $y - x = \\frac{56}{14} = 4$: $x = 5$, $y = 9$, and $h = \\sqrt{169 - 25} = 12$, confirmed by $\\sqrt{225 - 81} = 12$ on the other side. Area $= \\frac{32 + 18}{2} \\times 12 = 25 \\times 12 = 300$ square yards ✓. Check a second, independent way with the decomposition: $\\frac{5 \\times 12}{2} + 18 \\times 12 + \\frac{9 \\times 12}{2} = 30 + 216 + 54 = 300$ again ✓. (The choice $325$ is SLANT AS HEIGHT with the $13$ side, $25 \\times 13$ ✗; $375$ is SLANT AS HEIGHT with the $15$ side ✗; $50\\sqrt{30}$ is SPLITTING THE OVERHANG EVENLY, which only a symmetric trapezoid allows ✗.)',
    },
  ],
  // s9 — rhombus with a 120-degree angle: area from the side alone.
  [
    {
      q: 'A mosaic tile is a rhombus with side length $10$ cm and one interior angle of $120^\\circ$. What is the area of the tile?',
      fig: {
        view: [-10, -6.5, 10, 6.5],
        elems: [
          { t: 'poly', pts: [[-8.66, 0], [0, -5], [8.66, 0], [0, 5]], fill: false },
          { t: 'angle', at: [0, 5], from: [-8.66, 0], to: [8.66, 0], r: 1.6, label: '120°' },
          { t: 'label', p: [4.33, 2.5], text: '10', dx: 10, dy: -8 },
          { t: 'point', p: [-8.66, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -5], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [8.66, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 5], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$100\\sqrt{3}$', '$50\\sqrt{3}$', '$100$', '$25\\sqrt{3}$'],
      answer: 1,
      solution:
        'The angles are $120^\\circ$ and $60^\\circ$. The height on a $10$ base is $10 \\sin 60^\\circ = 5\\sqrt{3}$, so Area $=$ base $\\times$ height $= 10 \\times 5\\sqrt{3} = 50\\sqrt{3}$ square centimeters ✓. Check a second, independent way with a cut: the short diagonal joins the two $120^\\circ$ corners and, with two sides, closes an equilateral triangle at each $60^\\circ$ corner — two equilateral triangles of side $10$, each of area $\\frac{\\sqrt{3}}{4} \\times 100 = 25\\sqrt{3}$, totaling $50\\sqrt{3}$ again ✓. (The choice $100\\sqrt{3}$ is FORGETTING THE HALF in the diagonal product $10 \\times 10\\sqrt{3}$ ✗; $100$ is IGNORING THE TILT, squaring the side as if the rhombus were a square ✗; $25\\sqrt{3}$ is HALVING LIKE A TRIANGLE, keeping only one of the two equilateral halves ✗.)',
    },
    {
      q: 'A charm on a bracelet is a small rhombus with sides of $6$ mm and a largest angle of $120^\\circ$. Find the area of the charm.',
      fig: {
        view: [-6.5, -4, 6.5, 4],
        elems: [
          { t: 'poly', pts: [[-5.196, 0], [0, -3], [5.196, 0], [0, 3]], fill: false },
          { t: 'angle', at: [0, 3], from: [-5.196, 0], to: [5.196, 0], r: 1, label: '120°' },
          { t: 'label', p: [2.598, 1.5], text: '6', dx: 10, dy: -8 },
          { t: 'point', p: [-5.196, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -3], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [5.196, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 3], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$36\\sqrt{3}$', '$36$', '$18\\sqrt{3}$', '$9\\sqrt{3}$'],
      answer: 2,
      solution:
        'With angles of $120^\\circ$ and $60^\\circ$, the height on a $6$ base is $6 \\sin 60^\\circ = 3\\sqrt{3}$, so Area $= 6 \\times 3\\sqrt{3} = 18\\sqrt{3}$ square millimeters ✓. Check a second, independent way by cutting along the short diagonal, which connects the two $120^\\circ$ corners: it produces two equilateral triangles of side $6$, each of area $\\frac{\\sqrt{3}}{4} \\times 36 = 9\\sqrt{3}$, and $2 \\times 9\\sqrt{3} = 18\\sqrt{3}$ again ✓. (The choice $36\\sqrt{3}$ is FORGETTING THE HALF in $\\frac{d_1 d_2}{2}$, multiplying $6 \\times 6\\sqrt{3}$ ✗; $36$ is IGNORING THE TILT and squaring the side ✗; $9\\sqrt{3}$ is HALVING LIKE A TRIANGLE, one equilateral piece instead of two ✗.)',
    },
    {
      q: 'A decorative garden paver is a rhombus with $14$ in sides, and its obtuse angles each measure $120^\\circ$. How many square inches does one paver cover?',
      fig: {
        view: [-13.5, -8.5, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[-12.124, 0], [0, -7], [12.124, 0], [0, 7]], fill: false },
          { t: 'angle', at: [0, 7], from: [-12.124, 0], to: [12.124, 0], r: 2.2, label: '120°' },
          { t: 'label', p: [6.062, 3.5], text: '14', dx: 10, dy: -8 },
          { t: 'point', p: [-12.124, 0], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [0, -7], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [12.124, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [0, 7], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$98\\sqrt{3}$', '$196\\sqrt{3}$', '$196$', '$49\\sqrt{3}$'],
      answer: 0,
      solution:
        'The height on a $14$ base is $14 \\sin 60^\\circ = 7\\sqrt{3}$, so Area $= 14 \\times 7\\sqrt{3} = 98\\sqrt{3}$ square inches ✓. Check a second, independent way with the short diagonal: it joins the two $120^\\circ$ corners and splits the paver into two equilateral triangles of side $14$, each of area $\\frac{\\sqrt{3}}{4} \\times 196 = 49\\sqrt{3}$, so the paver covers $2 \\times 49\\sqrt{3} = 98\\sqrt{3}$ again ✓. (The choice $196\\sqrt{3}$ is FORGETTING THE HALF in the diagonal product $14 \\times 14\\sqrt{3}$ ✗; $196$ is IGNORING THE TILT — a tilted square loses area ✗; $49\\sqrt{3}$ is HALVING LIKE A TRIANGLE, stopping at one equilateral half ✗.)',
    },
  ],
  // s10 — isosceles trapezoid: midsegment, leg, and height to the longer base.
  [
    {
      q: 'An isosceles trapezoid has a midsegment of length $18$, legs of length $10$, and height $8$. How long is its longer base?',
      fig: {
        view: [-13.5, -1.5, 13.5, 9.5],
        elems: [
          { t: 'poly', pts: [[-12, 0], [12, 0], [6, 8], [-6, 8]], fill: false },
          { t: 'seg', a: [-9, 4], b: [9, 4], dash: true },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [12, 0], to: [6, 8] },
          { t: 'tick', a: [-12, 0], b: [-6, 8], n: 1 },
          { t: 'tick', a: [12, 0], b: [6, 8], n: 1 },
          { t: 'label', p: [0, 4], text: '18', dx: 0, dy: -10 },
          { t: 'label', p: [9, 4], text: '10', dx: 14, dy: 0 },
          { t: 'label', p: [6, 2], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [0, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-6, 8], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$24$', '$30$', '$38$', 'It cannot be determined'],
      answer: 0,
      solution:
        'Each end triangle has hypotenuse $10$ and height $8$, so its base — the overhang — is $\\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$, the $6$-$8$-$10$ triangle. The midsegment gives $b_1 + b_2 = 36$, and two overhangs give $b_1 - b_2 = 12$; adding, $2b_1 = 48$, so $b_1 = 24$ ✓. Check a second, independent way without the system: the longer base always equals the midsegment plus ONE overhang, since $b_1 = \\frac{b_1 + b_2}{2} + \\frac{b_1 - b_2}{2}$, and $18 + 6 = 24$ again ✓. (The choice $30$ is ADDING THE WHOLE DIFFERENCE, $18 + 12$, to a midsegment that only wants half ✗; $38$ is USING THE LEGS AS OVERHANGS, $18 + 10 + 10$, skipping Pythagoras entirely ✗; “cannot be determined” is DEMANDING THE OTHER BASE when the midsegment already encodes it ✗.)',
    },
    {
      q: 'An isosceles trapezoid has a midsegment of $20$ cm, and each leg measures $17$ cm while the height is $15$ cm. Find the length of the longer parallel side.',
      fig: {
        w: 340,
        view: [-15.5, -1.5, 15.5, 16.5],
        elems: [
          { t: 'poly', pts: [[-14, 0], [14, 0], [6, 15], [-6, 15]], fill: false },
          { t: 'seg', a: [-10, 7.5], b: [10, 7.5], dash: true },
          { t: 'seg', a: [6, 15], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [14, 0], to: [6, 15] },
          { t: 'tick', a: [-14, 0], b: [-6, 15], n: 1 },
          { t: 'tick', a: [14, 0], b: [6, 15], n: 1 },
          { t: 'label', p: [0, 7.5], text: '20', dx: 0, dy: -10 },
          { t: 'label', p: [10, 7.5], text: '17', dx: 14, dy: 0 },
          { t: 'label', p: [6, 3.5], text: '15', dx: -14, dy: 0 },
          { t: 'label', p: [0, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-14, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 15], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-6, 15], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$36$', '$35$', '$54$', '$28$'],
      answer: 3,
      solution:
        'The end triangles have hypotenuse $17$ and height $15$, so each overhang is $\\sqrt{17^2 - 15^2} = \\sqrt{64} = 8$ — the $8$-$15$-$17$ triple. From the midsegment, $b_1 + b_2 = 40$; from the two overhangs, $b_1 - b_2 = 16$. Adding, $2b_1 = 56$, so $b_1 = 28$ cm ✓. Check a second, independent way: the longer base is the midsegment plus one overhang, $20 + 8 = 28$ again, because $b_1 = \\frac{b_1 + b_2}{2} + \\frac{b_1 - b_2}{2}$ ✓. (The choice $36$ is ADDING THE WHOLE DIFFERENCE, $20 + 16$ ✗; $35$ is ADDING THE HEIGHT, $20 + 15$, a length pointing the wrong way ✗; $54$ is USING THE LEGS AS OVERHANGS, $20 + 17 + 17$ ✗.)',
    },
    {
      q: 'In an isosceles trapezoid, the midsegment measures $23$ ft, the legs measure $26$ ft each, and the parallel sides are $24$ ft apart. What is the longer parallel side?',
      fig: {
        w: 340,
        view: [-18, -1.5, 18, 25.5],
        elems: [
          { t: 'poly', pts: [[-16.5, 0], [16.5, 0], [6.5, 24], [-6.5, 24]], fill: false },
          { t: 'seg', a: [-11.5, 12], b: [11.5, 12], dash: true },
          { t: 'seg', a: [6.5, 24], b: [6.5, 0], dash: true },
          { t: 'right', at: [6.5, 0], from: [16.5, 0], to: [6.5, 24] },
          { t: 'tick', a: [-16.5, 0], b: [-6.5, 24], n: 1 },
          { t: 'tick', a: [16.5, 0], b: [6.5, 24], n: 1 },
          { t: 'label', p: [0, 12], text: '23', dx: 0, dy: -10 },
          { t: 'label', p: [11.5, 12], text: '26', dx: 14, dy: 0 },
          { t: 'label', p: [6.5, 6], text: '24', dx: -14, dy: 0 },
          { t: 'label', p: [0, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-16.5, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16.5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6.5, 24], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-6.5, 24], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$43$', '$33$', '$13$', '$75$'],
      answer: 1,
      solution:
        'Each end triangle has hypotenuse $26$ and height $24$, so the overhang is $\\sqrt{26^2 - 24^2} = \\sqrt{676 - 576} = \\sqrt{100} = 10$ — twice the $5$-$12$-$13$ triple. The midsegment gives $b_1 + b_2 = 46$, the overhangs give $b_1 - b_2 = 20$, and adding yields $2b_1 = 66$, so $b_1 = 33$ ft ✓. Check a second, independent way: longer base $=$ midsegment $+$ one overhang $= 23 + 10 = 33$ again, since $b_1 = \\frac{b_1 + b_2}{2} + \\frac{b_1 - b_2}{2}$ ✓. (The choice $43$ is ADDING THE WHOLE DIFFERENCE, $23 + 20$ ✗; $13$ is ANSWERING THE SHORTER BASE ✗; $75$ is USING THE LEGS AS OVERHANGS, $23 + 26 + 26$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.8': s88,
  },
}
