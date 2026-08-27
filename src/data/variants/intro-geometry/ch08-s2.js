// Introduction to Geometry chapter 8 — variations for section 8.2 (Trapezoids).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice by routes that do not share arithmetic:
//    the midsegment average against a coordinate midpoint computation, the
//    trapezoid area formula against a rectangle-plus-triangle decomposition,
//    the same-side-interior supplement against the 360-degree angle sum, and
//    the equal-steps midsegment argument against solving the average equation.
//    Both routes must agree before a key is written down.
//  - Figures are built from their own numbers: parallel bases share a
//    y-coordinate, isosceles trapezoids are mirror-symmetric about x = 0,
//    right-trapezoid verticals are truly vertical, every labelled length
//    matches its drawn coordinates, and every slanted side closes its
//    Pythagorean triangle exactly.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.
//  - No two choices inside an item name the same value.

const s82 = [
  // s1 — the inclusive definition: every parallelogram is a trapezoid.
  [
    {
      q: 'Jayden is sorting quadrilateral cards into labelled bins, and his class uses the inclusive definition of a trapezoid: at least one pair of parallel sides. He picks up a card showing a parallelogram. Does it belong in the trapezoid bin?',
      choices: [
        'No — a parallelogram has too many parallel sides to be a trapezoid',
        'Only if the parallelogram’s four sides are all the same length',
        'Yes — two pairs of parallel sides certainly includes at least one pair',
        'Only if the parallelogram has a right angle',
      ],
      answer: 2,
      solution:
        'Run the membership test the definition sets up: a trapezoid needs at least one pair of parallel sides, and a parallelogram brings two pairs — the test passes with room to spare ✓. Check a second, independent way with an inclusion chain: parallelogram $\\Rightarrow$ two pairs of parallel sides $\\Rightarrow$ at least one pair $\\Rightarrow$ trapezoid, so the parallelogram bin sits entirely inside the trapezoid bin ✓. (The “too many parallel sides” choice is READING “AT LEAST” AS “EXACTLY” — that is the other book’s definition, not ours ✗; demanding equal sides is CONFUSING TRAPEZOID WITH RHOMBUS ✗; demanding a right angle is CONFUSING TRAPEZOID WITH RECTANGLE ✗.)',
    },
    {
      q: 'A quiz uses the inclusive definition of a trapezoid — at least one pair of parallel sides. Which statement must be true?',
      choices: [
        'Every trapezoid is a parallelogram',
        'Every parallelogram is a trapezoid',
        'No parallelogram is a trapezoid',
        'A parallelogram is a trapezoid only when it is a square',
      ],
      answer: 1,
      solution:
        'A parallelogram owns two pairs of parallel sides, and two pairs is more than enough to satisfy “at least one pair” — so every parallelogram clears the trapezoid bar ✓. Check a second, independent way by hunting for a counterexample: to break the claim we would need a parallelogram with no pair of parallel sides, and no such shape exists, so the claim stands ✓. (The reversed statement fails — a trapezoid with legs that are not parallel, like one with bases $10$ and $4$, is no parallelogram, so that choice is RUNNING THE ARROW BACKWARDS ✗; “no parallelogram” is READING “AT LEAST” AS “EXACTLY” ✗; the square-only choice is DEMANDING A SPECIAL CASE the definition never asks for ✗.)',
    },
    {
      q: 'Mira draws a rhombus — four equal sides, opposite sides parallel — and her textbook defines a trapezoid inclusively, as a quadrilateral with at least one pair of parallel sides. Is Mira’s rhombus a trapezoid?',
      choices: [
        'No, because its sides are all equal',
        'No, because it has two pairs of parallel sides instead of one',
        'Only if one of its angles measures $90^\\circ$',
        'Yes — it has at least one pair of parallel sides',
      ],
      answer: 3,
      solution:
        'Test the rhombus against the definition: opposite sides of a rhombus are parallel, so it carries two pairs of parallel sides, and two pairs includes at least one — the rhombus is a trapezoid ✓. Check a second, independent way through the family tree: every rhombus is a parallelogram, and under the inclusive definition every parallelogram is a trapezoid, so the rhombus inherits trapezoid membership twice over ✓. (Equal sides never disqualify a shape — that choice is TURNING A BONUS INTO A PENALTY ✗; “two pairs instead of one” is READING “AT LEAST” AS “EXACTLY” ✗; the right-angle demand is CONFUSING TRAPEZOID WITH SQUARE ✗.)',
    },
  ],
  // s2 — two bases given: the midsegment is their average.
  [
    {
      q: 'The cross-section of a raised flower bed is a trapezoid with parallel top and bottom edges of $14$ in and $8$ in. A support rail $\\overline{MN}$ joins the midpoints of the two slanted sides. How long is the rail?',
      fig: {
        view: [-8.5, -1.5, 8.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-7, 0], [7, 0], [4, 4], [-4, 4]], fill: false },
          { t: 'seg', a: [-5.5, 2], b: [5.5, 2], dash: true },
          { t: 'label', p: [0, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2], text: '?', dx: 0, dy: -10 },
          { t: 'point', p: [-7, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-4, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$11$', '$22$', '$5$', '$3$'],
      answer: 0,
      solution:
        'The rail is the midsegment of the trapezoid, and the midsegment is the average of the two bases: $\\frac{14 + 8}{2} = 11$ in ✓. Check a second, independent way with coordinates: put the corners at $A(-7, 0)$, $B(7, 0)$, $C(4, 4)$, $D(-4, 4)$; the leg midpoints are $M(-5.5, 2)$ and $N(5.5, 2)$, and the distance between them is $5.5 - (-5.5) = 11$ ✓. (The choice $22$ is ADDING THE BASES WITHOUT HALVING ✗; $5$ is AVERAGING THE LEGS — each slanted side here measures $5$, but the midsegment averages the bases ✗; $3$ is TAKING HALF THE DIFFERENCE, a useful number for overhangs but not for midsegments ✗.)',
    },
    {
      q: 'A kite panel is a trapezoid whose parallel edges measure $16$ cm and $10$ cm. A seam is sewn joining the midpoints of the two non-parallel edges. Find the length of the seam.',
      fig: {
        view: [-9.5, -1.5, 9.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [8, 0], [5, 4], [-5, 4]], fill: false },
          { t: 'seg', a: [-6.5, 2], b: [6.5, 2], dash: true },
          { t: 'label', p: [0, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2], text: '?', dx: 0, dy: -10 },
          { t: 'point', p: [-8, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [5, 4], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-5, 4], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$26$', '$6$', '$5$', '$13$'],
      answer: 3,
      solution:
        'The seam runs midpoint to midpoint, so it is the midsegment, and its length is the average of the parallel edges: $\\frac{16 + 10}{2} = 13$ cm ✓. Check a second, independent way with coordinates: with corners $P(-8, 0)$, $Q(8, 0)$, $R(5, 4)$, $S(-5, 4)$, the midpoints of the slanted edges are $(-6.5, 2)$ and $(6.5, 2)$, which sit $13$ apart ✓. (The choice $26$ is ADDING THE BASES WITHOUT HALVING ✗; $6$ is SUBTRACTING THE BASES ✗; $5$ is AVERAGING THE LEGS — each slanted edge is $5$ here, and legs never enter the midsegment formula ✗.)',
    },
    {
      q: 'A trapezoidal tabletop has parallel front and back edges of $22$ in and $8$ in. A stiffening brace is attached from the midpoint of one side edge to the midpoint of the other. How long must the brace be?',
      fig: {
        w: 380,
        view: [-12.5, -1.5, 12.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [11, 0], [4, 5], [-4, 5]], fill: false },
          { t: 'seg', a: [-7.5, 2.5], b: [7.5, 2.5], dash: true },
          { t: 'label', p: [0, 0], text: '22', dx: 0, dy: 14 },
          { t: 'label', p: [0, 5], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2.5], text: '?', dx: 0, dy: -10 },
          { t: 'point', p: [-11, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-4, 5], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$30$', '$15$', '$14$', '$11$'],
      answer: 1,
      solution:
        'Midpoint to midpoint across the legs is the midsegment, whose length is the average of the parallel edges: $\\frac{22 + 8}{2} = 15$ in ✓. Check a second, independent way with coordinates: corners $A(-11, 0)$, $B(11, 0)$, $C(4, 5)$, $D(-4, 5)$ give leg midpoints $(-7.5, 2.5)$ and $(7.5, 2.5)$, a span of $15$ ✓. (The choice $30$ is ADDING THE BASES WITHOUT HALVING ✗; $14$ is SUBTRACTING THE BASES ✗; $11$ is HALVING THE LONGER BASE and ignoring the shorter one ✗.)',
    },
  ],
  // s3 — two angles along one leg are supplementary.
  [
    {
      q: 'In trapezoid $PQRS$, $\\overline{PQ} \\parallel \\overline{SR}$ and $\\angle P = 62^\\circ$. Find $\\angle S$.',
      fig: {
        view: [-1, -1.5, 10, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6.5, 4], [2.127, 4]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [2.127, 4], r: 1.1, label: '62' },
          { t: 'angle', at: [2.127, 4], from: [0, 0], to: [6.5, 4], r: 0.9, label: '?' },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [6.5, 4], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [2.127, 4], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$118^\\circ$', '$62^\\circ$', '$28^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'Leg $\\overline{PS}$ is a transversal cutting the two parallel bases, so $\\angle P$ and $\\angle S$ are same-side interior angles and add to $180^\\circ$: $\\angle S = 180^\\circ - 62^\\circ = 118^\\circ$ ✓. Check a second, independent way with the quadrilateral angle sum: the other leg makes $\\angle Q + \\angle R = 180^\\circ$ the same way, so $\\angle S = 360^\\circ - 62^\\circ - 180^\\circ = 118^\\circ$ ✓. (The choice $62^\\circ$ is COPYING THE GIVEN ANGLE, treating same-side angles like alternate interior ones ✗; $28^\\circ$ is SUBTRACTING FROM 90 — a complement where a supplement is owed ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE nothing in the figure promises ✗.)',
    },
    {
      q: 'The side view of a skateboard ramp is trapezoid $JKLM$ with $\\overline{JK} \\parallel \\overline{ML}$. The ramp meets the ground at $\\angle J = 78^\\circ$. What is $\\angle M$, at the top of the same sloped side?',
      fig: {
        view: [-1, -1.5, 10, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6.6, 4], [0.85, 4]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [0.85, 4], r: 1.1, label: '78' },
          { t: 'angle', at: [0.85, 4], from: [0, 0], to: [6.6, 4], r: 0.9, label: '?' },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [6.6, 4], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [0.85, 4], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$78^\\circ$', '$12^\\circ$', '$102^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'The sloped side $\\overline{JM}$ crosses both parallel edges, so $\\angle J$ and $\\angle M$ are same-side interior angles: $\\angle M = 180^\\circ - 78^\\circ = 102^\\circ$ ✓. Check a second, independent way with the $360^\\circ$ sum: leg $\\overline{KL}$ forces $\\angle K + \\angle L = 180^\\circ$, leaving $\\angle M = 360^\\circ - 78^\\circ - 180^\\circ = 102^\\circ$ ✓. (The choice $78^\\circ$ is COPYING THE GIVEN ANGLE ✗; $12^\\circ$ is SUBTRACTING FROM 90 instead of $180$ ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE — the ramp side is slanted, not vertical ✗.)',
    },
    {
      q: 'Trapezoid $WXYZ$ has $\\overline{WX} \\parallel \\overline{ZY}$, and the two angles at the ends of leg $\\overline{WZ}$ are marked. If $\\angle W = 73^\\circ$, what is $\\angle Z$?',
      fig: {
        view: [-1, -1.5, 10, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6.8, 4], [1.223, 4]], fill: false },
          { t: 'angle', at: [0, 0], from: [9, 0], to: [1.223, 4], r: 1.1, label: '73' },
          { t: 'angle', at: [1.223, 4], from: [0, 0], to: [6.8, 4], r: 0.9, label: '?' },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [6.8, 4], label: 'Y', dx: 10, dy: -8 },
          { t: 'point', p: [1.223, 4], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      choices: ['$73^\\circ$', '$17^\\circ$', '$90^\\circ$', '$107^\\circ$'],
      answer: 3,
      solution:
        'Leg $\\overline{WZ}$ is a transversal between the parallel bases, so the two marked angles are same-side interior angles and are supplementary: $\\angle Z = 180^\\circ - 73^\\circ = 107^\\circ$ ✓. Check a second, independent way with the quadrilateral total: the far leg gives $\\angle X + \\angle Y = 180^\\circ$, so $\\angle Z = 360^\\circ - 73^\\circ - 180^\\circ = 107^\\circ$ ✓. (The choice $73^\\circ$ is COPYING THE GIVEN ANGLE ✗; $17^\\circ$ is SUBTRACTING FROM 90, pairing the angles as complements ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE ✗.)',
    },
  ],
  // s4 — area from two bases and the height.
  [
    {
      q: 'A vegetable plot is a trapezoid with parallel sides $12$ m and $6$ m, set $5$ m apart. How many square meters of soil does the plot cover?',
      fig: {
        view: [-1, -1.5, 13, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [9, 5], [3, 5]], fill: false },
          { t: 'seg', a: [3, 5], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [12, 0], to: [3, 5] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [6, 5], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [3, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [9, 5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [3, 5], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$90$', '$45$', '$60$', '$30$'],
      answer: 1,
      solution:
        'Area $= \\frac{b_1 + b_2}{2} \\cdot h = \\frac{12 + 6}{2} \\times 5 = 9 \\times 5 = 45$ square meters ✓. Check a second, independent way through the midsegment: the average of the bases is $9$, so the plot matches a $9 \\times 5$ rectangle — $45$ again ✓. (The choice $90$ is FORGETTING THE HALF, computing $(12 + 6) \\times 5$ ✗; $60$ is USING ONLY THE LONGER BASE, $12 \\times 5$ ✗; $30$ is USING ONLY THE SHORTER BASE, $6 \\times 5$ ✗.)',
    },
    {
      q: 'A boat’s sail panel is a trapezoid: its parallel edges measure $13$ ft and $9$ ft, and the perpendicular distance between them is $4$ ft. Find the area of the panel.',
      fig: {
        view: [-1, -1.5, 14, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [11, 4], [2, 4]], fill: false },
          { t: 'seg', a: [2, 4], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [13, 0], to: [2, 4] },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [6.5, 4], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [2, 2], text: '4', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [13, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [11, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [2, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$44$', '$88$', '$52$', '$36$'],
      answer: 0,
      solution:
        'Area $= \\frac{b_1 + b_2}{2} \\cdot h = \\frac{13 + 9}{2} \\times 4 = 11 \\times 4 = 44$ square feet ✓. Check a second, independent way with the midsegment picture: the average edge is $11$, so the panel holds the same cloth as an $11 \\times 4$ rectangle — $44$ ✓. (The choice $88$ is FORGETTING THE HALF, $(13 + 9) \\times 4$ ✗; $52$ is USING ONLY THE LONGER BASE, $13 \\times 4$ ✗; $36$ is USING ONLY THE SHORTER BASE, $9 \\times 4$ ✗.)',
    },
    {
      q: 'A theater stage extension is trapezoid-shaped, with parallel front and back edges of $15$ ft and $7$ ft and a depth (the perpendicular distance between them) of $6$ ft. What is its area?',
      fig: {
        w: 340,
        view: [-1, -1.5, 16, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [11, 6], [4, 6]], fill: false },
          { t: 'seg', a: [4, 6], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [15, 0], to: [4, 6] },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [7.5, 6], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [4, 3], text: '6', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [11, 6], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [4, 6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$132$', '$90$', '$66$', '$42$'],
      answer: 2,
      solution:
        'Area $= \\frac{b_1 + b_2}{2} \\cdot h = \\frac{15 + 7}{2} \\times 6 = 11 \\times 6 = 66$ square feet ✓. Check a second, independent way through the midsegment: averaging the edges gives $11$, so the extension carries exactly the area of an $11 \\times 6$ rectangle — $66$ ✓. (The choice $132$ is FORGETTING THE HALF, $(15 + 7) \\times 6$ ✗; $90$ is USING ONLY THE LONGER BASE, $15 \\times 6$ ✗; $42$ is USING ONLY THE SHORTER BASE, $7 \\times 6$ ✗.)',
    },
  ],
  // s5 — diagonals of an isosceles trapezoid are equal.
  [
    {
      q: 'A wooden picture frame is an isosceles trapezoid $ABCD$, and both diagonals are strung with wire for hanging. The wire along $\\overline{AC}$ measures $12$ in. How long is the wire along $\\overline{BD}$?',
      fig: {
        view: [-6.5, -1.5, 6.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-5, 0], [5, 0], [2.5, 5], [-2.5, 5]], fill: false },
          { t: 'seg', a: [-5, 0], b: [2.5, 5], dash: true },
          { t: 'seg', a: [5, 0], b: [-2.5, 5], dash: true },
          { t: 'tick', a: [-5, 0], b: [-2.5, 5], n: 1 },
          { t: 'tick', a: [5, 0], b: [2.5, 5], n: 1 },
          { t: 'point', p: [-5, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [2.5, 5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-2.5, 5], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$6$', '$12$', '$24$', 'It cannot be determined'],
      answer: 1,
      solution:
        'The diagonals of an isosceles trapezoid are always equal: reflecting the frame across its vertical line of symmetry swaps $A$ with $B$ and $D$ with $C$, carrying $\\overline{AC}$ onto $\\overline{BD}$, so $BD = 12$ in ✓. Check a second, independent way with congruence: triangles $ABC$ and $BAD$ share side $\\overline{AB}$, have equal legs $BC = AD$, and equal base angles $\\angle ABC = \\angle BAD$, so they are congruent by SAS and their third sides match: $AC = BD = 12$ ✓. (The choice $6$ is HALVING THE DIAGONAL as though the diagonals bisected each other — a parallelogram perk, not a trapezoid one ✗; $24$ is DOUBLING THE GIVEN ✗; “cannot be determined” is DEMANDING MORE DATA after symmetry has already answered ✗.)',
    },
    {
      q: 'A farm gate is braced as isosceles trapezoid $PQRS$ with two crossing diagonal boards. The board along $\\overline{PR}$ is $15$ ft long. How long is the board along $\\overline{QS}$?',
      fig: {
        view: [-7.5, -1.5, 7.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-6, 0], [6, 0], [3, 4], [-3, 4]], fill: false },
          { t: 'seg', a: [-6, 0], b: [3, 4], dash: true },
          { t: 'seg', a: [6, 0], b: [-3, 4], dash: true },
          { t: 'tick', a: [-6, 0], b: [-3, 4], n: 1 },
          { t: 'tick', a: [6, 0], b: [3, 4], n: 1 },
          { t: 'point', p: [-6, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [3, 4], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-3, 4], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$7.5$', '$30$', '$15$', 'It cannot be determined'],
      answer: 2,
      solution:
        'An isosceles trapezoid’s diagonals are equal, so the second board is also $15$ ft ✓ — the fold across the vertical line of symmetry swaps $P$ with $Q$ and $S$ with $R$, laying $\\overline{PR}$ exactly along $\\overline{QS}$. Check a second, independent way with congruent triangles: $\\triangle PQR \\cong \\triangle QPS$ by SAS (shared $\\overline{PQ}$, equal legs $QR = PS$, equal base angles at $P$ and $Q$), so the matching sides give $QS = PR = 15$ ✓. (The choice $7.5$ is HALVING THE DIAGONAL, importing the parallelogram bisection fact where it does not apply ✗; $30$ is DOUBLING THE GIVEN ✗; “cannot be determined” is DEMANDING MORE DATA the symmetry already supplies ✗.)',
    },
    {
      q: 'A jeweler’s pendant is isosceles trapezoid $ABCD$ with a fine chain laid along each diagonal. The chain on $\\overline{AC}$ measures $9.5$ mm. What is the length of the chain on $\\overline{BD}$?',
      fig: {
        view: [-6, -1.5, 6, 7],
        elems: [
          { t: 'poly', pts: [[-4.5, 0], [4.5, 0], [2, 5.5], [-2, 5.5]], fill: false },
          { t: 'seg', a: [-4.5, 0], b: [2, 5.5], dash: true },
          { t: 'seg', a: [4.5, 0], b: [-2, 5.5], dash: true },
          { t: 'tick', a: [-4.5, 0], b: [-2, 5.5], n: 1 },
          { t: 'tick', a: [4.5, 0], b: [2, 5.5], n: 1 },
          { t: 'point', p: [-4.5, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4.5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [2, 5.5], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-2, 5.5], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$4.75$', '$19$', 'It cannot be determined', '$9.5$'],
      answer: 3,
      solution:
        'Equal legs make the pendant symmetric about the vertical line through the midpoints of its bases, and that reflection carries diagonal $\\overline{AC}$ onto diagonal $\\overline{BD}$ — so $BD = AC = 9.5$ mm ✓. Check a second, independent way with SAS: triangles $ABC$ and $BAD$ have $AB$ in common, legs $BC = AD$, and equal base angles at $B$ and $A$, so they are congruent and $BD = AC = 9.5$ ✓. (The choice $4.75$ is HALVING THE DIAGONAL — diagonals of a trapezoid need not bisect each other ✗; $19$ is DOUBLING THE GIVEN ✗; “cannot be determined” is DEMANDING MORE DATA that the isosceles condition already provides ✗.)',
    },
  ],
  // s6 — isosceles trapezoid: one base angle pins down the opposite angle.
  [
    {
      q: 'In isosceles trapezoid $ABCD$ with $\\overline{AB} \\parallel \\overline{DC}$, the bottom angle at $A$ measures $68^\\circ$. Find $\\angle C$, the top angle diagonally across from $A$.',
      fig: {
        view: [-5.5, -1.5, 5.5, 5.2],
        elems: [
          { t: 'poly', pts: [[-4, 0], [4, 0], [2.5, 3.713], [-2.5, 3.713]], fill: false },
          { t: 'angle', at: [-4, 0], from: [4, 0], to: [-2.5, 3.713], r: 1, label: '68' },
          { t: 'angle', at: [2.5, 3.713], from: [-2.5, 3.713], to: [4, 0], r: 0.9, label: '?' },
          { t: 'tick', a: [-4, 0], b: [-2.5, 3.713], n: 1 },
          { t: 'tick', a: [4, 0], b: [2.5, 3.713], n: 1 },
          { t: 'point', p: [-4, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [2.5, 3.713], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-2.5, 3.713], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$68^\\circ$', '$22^\\circ$', '$44^\\circ$', '$112^\\circ$'],
      answer: 3,
      solution:
        'Symmetry makes the two bottom angles equal, so $\\angle B = \\angle A = 68^\\circ$; then leg $\\overline{BC}$ crosses the parallel bases, making $\\angle B$ and $\\angle C$ supplementary: $\\angle C = 180^\\circ - 68^\\circ = 112^\\circ$ ✓. Check a second, independent way with the angle sum: the four angles are $68^\\circ$, $68^\\circ$, $\\angle C$, $\\angle D$ with $\\angle C = \\angle D$ by symmetry, so $2\\angle C = 360^\\circ - 136^\\circ = 224^\\circ$ and $\\angle C = 112^\\circ$ ✓. (The choice $68^\\circ$ is COPYING THE BASE ANGLE — that value belongs to $\\angle B$, not $\\angle C$ ✗; $22^\\circ$ is SUBTRACTING FROM 90 instead of $180$ ✗; $44^\\circ$ is TREATING IT LIKE A TRIANGLE, computing $180^\\circ - 2 \\times 68^\\circ$ ✗.)',
    },
    {
      q: 'A flowerpot’s silhouette is isosceles trapezoid $PQRS$ with $\\overline{PQ} \\parallel \\overline{SR}$, and the pot meets the table at $\\angle P = 81^\\circ$. What is the measure of $\\angle R$, the rim angle diagonally opposite $P$?',
      fig: {
        view: [-5.5, -1.5, 5.5, 5.3],
        elems: [
          { t: 'poly', pts: [[-4, 0], [4, 0], [3.4, 3.788], [-3.4, 3.788]], fill: false },
          { t: 'angle', at: [-4, 0], from: [4, 0], to: [-3.4, 3.788], r: 1, label: '81' },
          { t: 'angle', at: [3.4, 3.788], from: [-3.4, 3.788], to: [4, 0], r: 0.9, label: '?' },
          { t: 'tick', a: [-4, 0], b: [-3.4, 3.788], n: 1 },
          { t: 'tick', a: [4, 0], b: [3.4, 3.788], n: 1 },
          { t: 'point', p: [-4, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [3.4, 3.788], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-3.4, 3.788], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$99^\\circ$', '$81^\\circ$', '$9^\\circ$', '$18^\\circ$'],
      answer: 0,
      solution:
        'The isosceles symmetry copies the bottom angle across: $\\angle Q = \\angle P = 81^\\circ$; then leg $\\overline{QR}$ runs between the parallel edges, so $\\angle Q$ and $\\angle R$ are supplementary and $\\angle R = 180^\\circ - 81^\\circ = 99^\\circ$ ✓. Check a second, independent way with the $360^\\circ$ total: the angles are $81^\\circ$, $81^\\circ$, $\\angle R$, $\\angle S$ with $\\angle R = \\angle S$, so $2\\angle R = 360^\\circ - 162^\\circ = 198^\\circ$, giving $\\angle R = 99^\\circ$ ✓. (The choice $81^\\circ$ is COPYING THE BASE ANGLE ✗; $9^\\circ$ is SUBTRACTING FROM 90 ✗; $18^\\circ$ is TREATING IT LIKE A TRIANGLE, $180^\\circ - 2 \\times 81^\\circ$ ✗.)',
    },
    {
      q: 'Isosceles trapezoid $JKLM$ has $\\overline{JK} \\parallel \\overline{ML}$, with the equal legs marked. Given the bottom angle $\\angle J = 59^\\circ$, find $\\angle L$.',
      fig: {
        view: [-6, -1.5, 6, 5.5],
        elems: [
          { t: 'poly', pts: [[-4.6, 0], [4.6, 0], [2.2, 3.994], [-2.2, 3.994]], fill: false },
          { t: 'angle', at: [-4.6, 0], from: [4.6, 0], to: [-2.2, 3.994], r: 1, label: '59' },
          { t: 'angle', at: [2.2, 3.994], from: [-2.2, 3.994], to: [4.6, 0], r: 0.9, label: '?' },
          { t: 'tick', a: [-4.6, 0], b: [-2.2, 3.994], n: 1 },
          { t: 'tick', a: [4.6, 0], b: [2.2, 3.994], n: 1 },
          { t: 'point', p: [-4.6, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [4.6, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [2.2, 3.994], label: 'L', dx: 10, dy: -8 },
          { t: 'point', p: [-2.2, 3.994], label: 'M', dx: -10, dy: -8 },
        ],
      },
      choices: ['$59^\\circ$', '$121^\\circ$', '$31^\\circ$', '$62^\\circ$'],
      answer: 1,
      solution:
        'By the trapezoid’s symmetry the other bottom angle matches: $\\angle K = \\angle J = 59^\\circ$; leg $\\overline{KL}$ then crosses the two parallel bases, so $\\angle K$ and $\\angle L$ add to $180^\\circ$: $\\angle L = 180^\\circ - 59^\\circ = 121^\\circ$ ✓. Check a second, independent way with the angle sum: with $\\angle L = \\angle M$, we need $2\\angle L = 360^\\circ - 59^\\circ - 59^\\circ = 242^\\circ$, so $\\angle L = 121^\\circ$ ✓. (The choice $59^\\circ$ is COPYING THE BASE ANGLE ✗; $31^\\circ$ is SUBTRACTING FROM 90, a complement in place of a supplement ✗; $62^\\circ$ is TREATING IT LIKE A TRIANGLE, $180^\\circ - 2 \\times 59^\\circ$ ✗.)',
    },
  ],
  // s7 — midsegment and one base given: recover the other base.
  [
    {
      q: 'A trapezoid’s midsegment measures $13$, and its shorter base measures $6$. Find the longer base.',
      fig: {
        w: 360,
        view: [-11.5, -1.5, 11.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-10, 0], [10, 0], [3, 4], [-3, 4]], fill: false },
          { t: 'seg', a: [-6.5, 2], b: [6.5, 2], dash: true },
          { t: 'label', p: [0, 4], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2], text: '13', dx: 0, dy: -10 },
          { t: 'label', p: [0, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-10, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [3, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-3, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$9.5$', '$26$', '$20$', '$19$'],
      answer: 2,
      solution:
        'The midsegment is the average of the bases, so $\\frac{6 + b}{2} = 13$ gives $6 + b = 26$ and $b = 20$ ✓. Check a second, independent way with equal steps: the midsegment sits exactly halfway between the bases, so it exceeds the short base by the same amount the long base exceeds it — the step up from $6$ to $13$ is $7$, so the long base is $13 + 7 = 20$ ✓. (The choice $9.5$ is AVERAGING THE TWO GIVENS, treating $13$ as a base ✗; $26$ is DOUBLING WITHOUT SUBTRACTING, stopping at $2 \\times 13$ ✗; $19$ is ADDING THE GIVENS, $13 + 6$ ✗.)',
    },
    {
      q: 'The midsegment of a trapezoid-shaped garden terrace is $10$ m long, and the terrace’s upper edge — one of the parallel sides — is $4$ m. How long is the lower edge?',
      fig: {
        view: [-9.5, -1.5, 9.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [8, 0], [2, 4], [-2, 4]], fill: false },
          { t: 'seg', a: [-5, 2], b: [5, 2], dash: true },
          { t: 'label', p: [0, 4], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [0, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-8, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [2, 4], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [-2, 4], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$7$', '$20$', '$6$', '$16$'],
      answer: 3,
      solution:
        'Set up the average: $\\frac{4 + b}{2} = 10$, so $4 + b = 20$ and $b = 16$ m ✓. Check a second, independent way with equal steps: the midsegment lies halfway between the edges, and it took a step of $10 - 4 = 6$ up from the top edge, so the bottom edge is one more equal step away: $10 + 6 = 16$ ✓. (The choice $7$ is AVERAGING THE TWO GIVENS ✗; $20$ is DOUBLING WITHOUT SUBTRACTING the known edge ✗; $6$ is SUBTRACTING THE GIVENS and stopping there ✗.)',
    },
    {
      q: 'In a trapezoid, the segment joining the midpoints of the legs measures $17$ cm, and the top base measures $12$ cm. What is the length of the bottom base?',
      fig: {
        w: 380,
        view: [-12.5, -1.5, 12.5, 5.5],
        elems: [
          { t: 'poly', pts: [[-11, 0], [11, 0], [6, 4], [-6, 4]], fill: false },
          { t: 'seg', a: [-8.5, 2], b: [8.5, 2], dash: true },
          { t: 'label', p: [0, 4], text: '12', dx: 0, dy: -10 },
          { t: 'label', p: [0, 2], text: '17', dx: 0, dy: -10 },
          { t: 'label', p: [0, 0], text: '?', dx: 0, dy: 14 },
          { t: 'point', p: [-11, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 4], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-6, 4], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$22$', '$14.5$', '$34$', '$5$'],
      answer: 0,
      solution:
        'The midpoint-to-midpoint segment is the midsegment, so $\\frac{12 + b}{2} = 17$, which gives $12 + b = 34$ and $b = 22$ cm ✓. Check a second, independent way with equal steps: halfway between the bases means equal gaps on both sides of the midsegment; the gap from $12$ up to $17$ is $5$, so the bottom base is $17 + 5 = 22$ ✓. (The choice $14.5$ is AVERAGING THE TWO GIVENS as if both were bases ✗; $34$ is DOUBLING WITHOUT SUBTRACTING the top base ✗; $5$ is SUBTRACTING THE GIVENS — that is the step size, not a base ✗.)',
    },
  ],
  // s8 — area and both bases given: solve for the height.
  [
    {
      q: 'A trapezoid-shaped patio has an area of $84$ square feet, with parallel edges of $9$ ft and $15$ ft. How far apart are the parallel edges?',
      choices: ['$7$', '$3.5$', '$12$', '$14$'],
      answer: 0,
      solution:
        'Area $= \\frac{b_1 + b_2}{2} \\cdot h$ gives $84 = \\frac{9 + 15}{2} \\cdot h = 12h$, so $h = 7$ ft ✓. Check a second, independent way by clearing the fraction first: $2 \\times 84 = (9 + 15) \\cdot h$, so $168 = 24h$ and $h = 7$ again ✓. (The choice $3.5$ is DIVIDING BY THE FULL SUM, $84 \\div 24$, after forgetting that the formula halves the sum ✗; $12$ is ANSWERING THE MIDSEGMENT — the average of the bases — instead of the height ✗; $14$ is DOUBLING THE HEIGHT, dividing $168$ by $12$ ✗.)',
    },
    {
      q: 'A banner is cut as a trapezoid with area $88$ square inches and parallel edges of $6$ in and $16$ in. What is the perpendicular distance between the parallel edges?',
      choices: ['$4$', '$8$', '$11$', '$8.8$'],
      answer: 1,
      solution:
        'From Area $= \\frac{b_1 + b_2}{2} \\cdot h$: $88 = \\frac{6 + 16}{2} \\cdot h = 11h$, so $h = 8$ in ✓. Check a second, independent way by doubling both sides up front: $2 \\times 88 = (6 + 16) \\cdot h$, so $176 = 22h$ and $h = 8$ ✓. (The choice $4$ is DIVIDING BY THE FULL SUM, $88 \\div 22$ ✗; $11$ is ANSWERING THE MIDSEGMENT instead of the height ✗; $8.8$ is DIVIDING BY THE DIFFERENCE, $88 \\div (16 - 6)$ ✗.)',
    },
    {
      q: 'The cross-section of a drainage channel is a trapezoid with area $126$ square cm, whose parallel sides measure $10$ cm and $18$ cm. Find the depth of the channel — the perpendicular distance between the parallel sides.',
      choices: ['$4.5$', '$14$', '$9$', '$18$'],
      answer: 2,
      solution:
        'Area $= \\frac{b_1 + b_2}{2} \\cdot h$ gives $126 = \\frac{10 + 18}{2} \\cdot h = 14h$, so $h = 9$ cm ✓. Check a second, independent way by clearing the half first: $2 \\times 126 = (10 + 18) \\cdot h$, so $252 = 28h$ and $h = 9$ ✓. (The choice $4.5$ is DIVIDING BY THE FULL SUM, $126 \\div 28$ ✗; $14$ is ANSWERING THE MIDSEGMENT, the average of $10$ and $18$ ✗; $18$ is DOUBLING THE HEIGHT — $252 \\div 14$ mixes the two routes together ✗.)',
    },
  ],
  // s9 — right trapezoid: the vertical side is the height, never the slant.
  [
    {
      q: 'Find the area of the right trapezoid shown, with bases $11$ and $7$, vertical left side $3$, and slanted right side $5$.',
      fig: {
        view: [-1, -1.5, 12, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [7, 3], [0, 3]], fill: false },
          { t: 'right', at: [0, 0], from: [11, 0], to: [0, 3] },
          { t: 'right', at: [0, 3], from: [0, 0], to: [7, 3] },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [3.5, 3], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [9, 1.5], text: '5', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7, 3], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 3], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$45$', '$54$', '$33$', '$27$'],
      answer: 3,
      solution:
        'Side $\\overline{AD}$ is perpendicular to both bases, so the height is $3$ — the slanted side $5$ never plays that role. Area $= \\frac{11 + 7}{2} \\times 3 = 9 \\times 3 = 27$ ✓. Check a second, independent way by slicing: a $7 \\times 3$ rectangle ($21$) plus a right triangle with legs $11 - 7 = 4$ and $3$ ($\\frac{1}{2} \\times 4 \\times 3 = 6$) totals $27$ ✓ — and that same triangle confirms the slant closes: $4^2 + 3^2 = 25 = 5^2$ ✓. (The choice $45$ is USING THE SLANT AS THE HEIGHT, $9 \\times 5$ ✗; $54$ is FORGETTING THE HALF, $(11 + 7) \\times 3$ ✗; $33$ is USING ONLY THE LONGER BASE, $11 \\times 3$ ✗.)',
    },
    {
      q: 'A loading dock’s side wall is the right trapezoid shown: bases $14$ m and $8$ m, vertical left edge $8$ m, and a sloped edge of $10$ m. How many square meters of paint cover the wall?',
      fig: {
        view: [-1, -1.5, 15, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [8, 8], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [14, 0], to: [0, 8] },
          { t: 'right', at: [0, 8], from: [0, 0], to: [8, 8] },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [4, 8], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [11, 4], text: '10', dx: 14, dy: 4 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [8, 8], label: 'R', dx: 10, dy: -8 },
          { t: 'point', p: [0, 8], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$88$', '$110$', '$176$', '$112$'],
      answer: 0,
      solution:
        'The vertical edge $\\overline{PS}$ meets both bases at right angles, so the height is $8$, not the sloped $10$. Area $= \\frac{14 + 8}{2} \\times 8 = 11 \\times 8 = 88$ square meters ✓. Check a second, independent way by slicing: an $8 \\times 8$ square ($64$) plus a right triangle with legs $14 - 8 = 6$ and $8$ ($\\frac{1}{2} \\times 6 \\times 8 = 24$) totals $88$ ✓ — and that triangle certifies the slope: $6^2 + 8^2 = 100 = 10^2$ ✓. (The choice $110$ is USING THE SLANT AS THE HEIGHT, $11 \\times 10$ ✗; $176$ is FORGETTING THE HALF, $(14 + 8) \\times 8$ ✗; $112$ is USING ONLY THE LONGER BASE, $14 \\times 8$ ✗.)',
    },
    {
      q: 'The gable end of a lean-to shed is the right trapezoid shown, with bases $12$ ft and $7$ ft, a vertical back wall of $12$ ft, and a sloped roofline of $13$ ft. Find the area of the gable end.',
      fig: {
        view: [-1, -1.5, 13, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [7, 12], [0, 12]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 12] },
          { t: 'right', at: [0, 12], from: [0, 0], to: [7, 12] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [3.5, 12], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [9.5, 6], text: '13', dx: 14, dy: 4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [0, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$123.5$', '$228$', '$114$', '$144$'],
      answer: 2,
      solution:
        'The back wall $\\overline{AD}$ is perpendicular to both bases, so the height is $12$ — the $13$-ft roofline is a slant, not a height. Area $= \\frac{12 + 7}{2} \\times 12 = \\frac{19}{2} \\times 12 = 114$ square feet ✓. Check a second, independent way by slicing: a $7 \\times 12$ rectangle ($84$) plus a right triangle with legs $12 - 7 = 5$ and $12$ ($\\frac{1}{2} \\times 5 \\times 12 = 30$) totals $114$ ✓ — and the triangle closes the roofline: $5^2 + 12^2 = 169 = 13^2$ ✓. (The choice $123.5$ is USING THE SLANT AS THE HEIGHT, $9.5 \\times 13$ ✗; $228$ is FORGETTING THE HALF, $(12 + 7) \\times 12$ ✗; $144$ is USING ONLY THE LONGER BASE, $12 \\times 12$ ✗.)',
    },
  ],
  // s10 — isosceles trapezoid, bases and legs: find the height, then the area.
  [
    {
      q: 'An isosceles trapezoid has bases $18$ and $8$ and legs of length $13$. Find its area.',
      fig: {
        view: [-10.5, -1.5, 10.5, 14.5],
        elems: [
          { t: 'poly', pts: [[-9, 0], [9, 0], [4, 12], [-4, 12]], fill: false },
          { t: 'seg', a: [4, 12], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [9, 0], to: [4, 12] },
          { t: 'tick', a: [-9, 0], b: [-4, 12], n: 1 },
          { t: 'tick', a: [9, 0], b: [4, 12], n: 1 },
          { t: 'label', p: [-2.5, 0], text: '18', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [6.5, 6], text: '13', dx: 12, dy: 0 },
          { t: 'point', p: [-9, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-4, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$169$', '$312$', '$156$', '$65$'],
      answer: 2,
      solution:
        'Drop a height from $C$: by symmetry its foot lands $\\frac{18 - 8}{2} = 5$ in from $B$, so the leg closes a right triangle with hypotenuse $13$ and base $5$, giving $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ — the $5$-$12$-$13$ triple, and $5^2 + 12^2 = 169 = 13^2$ ✓. Then Area $= \\frac{18 + 8}{2} \\times 12 = 13 \\times 12 = 156$ ✓. Check a second, independent way by slicing: an $8 \\times 12$ rectangle in the middle ($96$) plus two right triangles of legs $5$ and $12$ ($30$ each) totals $96 + 60 = 156$ ✓. (The choice $169$ is USING THE SLANT AS THE HEIGHT, $13 \\times 13$ ✗; $312$ is FORGETTING THE HALF, $(18 + 8) \\times 12$ ✗; $65$ is USING THE OVERHANG AS THE HEIGHT, $13 \\times 5$ ✗.)',
    },
    {
      q: 'A concert stage riser has an isosceles-trapezoid top: parallel edges of $24$ ft and $14$ ft, with equal slanted edges of $13$ ft. How many square feet of surface does the top provide?',
      fig: {
        w: 360,
        view: [-13.5, -1.5, 13.5, 14.5],
        elems: [
          { t: 'poly', pts: [[-12, 0], [12, 0], [7, 12], [-7, 12]], fill: false },
          { t: 'seg', a: [7, 12], b: [7, 0], dash: true },
          { t: 'right', at: [7, 0], from: [12, 0], to: [7, 12] },
          { t: 'tick', a: [-12, 0], b: [-7, 12], n: 1 },
          { t: 'tick', a: [12, 0], b: [7, 12], n: 1 },
          { t: 'label', p: [-3, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '14', dx: 0, dy: -10 },
          { t: 'label', p: [9.5, 6], text: '13', dx: 12, dy: 0 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [7, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-7, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$247$', '$456$', '$288$', '$228$'],
      answer: 3,
      solution:
        'Drop a height from $C$: symmetry puts its foot $\\frac{24 - 14}{2} = 5$ ft in from $B$, so $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ ft, with the guard $5^2 + 12^2 = 169 = 13^2$ ✓. Then Area $= \\frac{24 + 14}{2} \\times 12 = 19 \\times 12 = 228$ square feet ✓. Check a second, independent way by slicing: a $14 \\times 12$ rectangle ($168$) plus two right triangles with legs $5$ and $12$ ($30$ each) gives $168 + 60 = 228$ ✓. (The choice $247$ is USING THE SLANT AS THE HEIGHT, $19 \\times 13$ ✗; $456$ is FORGETTING THE HALF, $(24 + 14) \\times 12$ ✗; $288$ is USING ONLY THE LONGER BASE, $24 \\times 12$ ✗.)',
    },
    {
      q: 'A kite’s tail panel is an isosceles trapezoid with bases $20$ cm and $10$ cm and equal legs of $13$ cm. What is the area of the panel?',
      fig: {
        view: [-11.5, -1.5, 11.5, 14.5],
        elems: [
          { t: 'poly', pts: [[-10, 0], [10, 0], [5, 12], [-5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [10, 0], to: [5, 12] },
          { t: 'tick', a: [-10, 0], b: [-5, 12], n: 1 },
          { t: 'tick', a: [10, 0], b: [5, 12], n: 1 },
          { t: 'label', p: [-2.5, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '10', dx: 0, dy: -10 },
          { t: 'label', p: [7.5, 6], text: '13', dx: 12, dy: 0 },
          { t: 'point', p: [-10, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5, 12], label: 'C', dx: 10, dy: -8 },
          { t: 'point', p: [-5, 12], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$195$', '$180$', '$240$', '$75$'],
      answer: 1,
      solution:
        'Drop a height from $C$: the symmetric overhang is $\\frac{20 - 10}{2} = 5$ cm, so the leg completes a right triangle with hypotenuse $13$ and base $5$, giving $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm, and $5^2 + 12^2 = 169 = 13^2$ ✓. Then Area $= \\frac{20 + 10}{2} \\times 12 = 15 \\times 12 = 180$ square cm ✓. Check a second, independent way by slicing: a $10 \\times 12$ rectangle ($120$) plus two right triangles with legs $5$ and $12$ ($30$ each) totals $120 + 60 = 180$ ✓. (The choice $195$ is USING THE SLANT AS THE HEIGHT, $15 \\times 13$ ✗; $240$ is USING ONLY THE LONGER BASE, $20 \\times 12$ ✗; $75$ is USING THE OVERHANG AS THE HEIGHT, $15 \\times 5$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 8,
  sections: {
    '8.2': s82,
  },
}
