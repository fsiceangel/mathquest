// Introduction to Geometry chapter 5 — variations for section 5.1
// (What is Similarity?). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every length was worked twice, by two routes that do not share
//    arithmetic: the across-triangles scale factor against the inside-one-
//    triangle side ratio, a computed answer against a backward test of the
//    printed candidates, a scaled side list against the perimeter it must
//    rebuild, and a letter-order match against the size-order of the drawn
//    sides. The two routes must agree before a key is written down.
//  - Every similar-triangle pair is drawn as an exact scaled copy: the second
//    triangle's vertices are computed as translate + k times the first
//    triangle's vertices, so the drawn shapes really are similar, and every
//    labelled length is the exact drawn distance.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: DEMANDING CONGRUENCE,
//    MAKING ANGLES PROPORTIONAL, COMPARING PERIMETERS, DEMANDING EQUAL SIDES,
//    SWAPPING EQUAL AND PROPORTIONAL, SHIFTING THE MATCH, PAIRING THE OUTER
//    LETTERS, PICKING A SIDE OF THE FIRST TRIANGLE, INVERTING THE RATIO,
//    SUBTRACTING THE SIDES, MULTIPLYING THE SIDES, ADDING THE DIFFERENCE,
//    MULTIPLYING THE GIVEN SIDES, CROSSING THE PAIRS, USING THE WRONG PAIR,
//    FLIPPING ONE SIDE OF THE PROPORTION, SCALING THE WRONG SIDE, SQUARING
//    THE FACTOR, MULTIPLYING BY THE NUMERATOR ONLY, ADDING THE PERIMETER
//    DIFFERENCE, ANSWERING THE PERIMETER DIFFERENCE, ANSWERING THE LONGEST
//    SIDE, and ANSWERING THE SMALL PERIMETER.
//  - No two choices inside an item name the same value.

const s51 = [
  // s1 — the definition of similarity: equal angles, proportional sides.
  [
    {
      q: 'A design app lets you pinch-zoom a triangle so it grows without changing its shape. The original triangle and the zoomed copy are similar. Two triangles are similar exactly when they have',
      choices: [
        'corresponding angles equal and corresponding sides proportional',
        'corresponding angles and corresponding sides both equal',
        'corresponding angles proportional and corresponding sides proportional',
        'equal perimeters and corresponding angles proportional',
      ],
      answer: 0,
      solution:
        'Zooming multiplies every length by the same factor and bends nothing, so the angles come through unchanged — equal — while the sides all stretch in one common ratio — proportional ✓. Check the rejected choices with concrete triangles instead of the definition. A $3$-$4$-$5$ triangle and its double, a $6$-$8$-$10$ triangle, are certainly similar, yet no pair of corresponding sides is equal — so requiring the sides equal too is the definition of congruence, the special case with scale factor $1$ ✗. And angles can never be scaled by a factor other than $1$: tripling three angles that add to $180^\\circ$ would leave a triangle whose angles add to $540^\\circ$, which no triangle has ✗. (Requiring sides equal as well is DEMANDING CONGRUENCE ✗; any choice scaling the angles is MAKING ANGLES PROPORTIONAL, which the $180^\\circ$ sum forbids ✗; matching perimeters is COMPARING PERIMETERS, and the shapes $4$-$4$-$4$ and $3$-$4$-$5$ share a perimeter of $12$ without sharing a shape ✗.)',
    },
    {
      q: 'A classmate announces a shortcut: two triangles are similar whenever they have the same perimeter. What does similarity really require?',
      choices: [
        'all three pairs of corresponding sides equal',
        'corresponding sides proportional and the two perimeters equal',
        'corresponding angles proportional and corresponding sides equal',
        'corresponding angles equal and corresponding sides proportional',
      ],
      answer: 3,
      solution:
        'Similar means one triangle is a perfect enlargement or shrink of the other: the angles must match exactly, and the sides must all be scaled by one common factor — equal angles, proportional sides ✓. Now test the shortcut itself, which the definition never mentions. The triangles $4$-$4$-$4$ and $3$-$4$-$5$ both have perimeter $12$, yet one is equilateral and one is a right triangle — same perimeter, different shapes ✗. Meanwhile a $3$-$4$-$5$ triangle and a $6$-$8$-$10$ triangle are similar with perimeters $12$ and $24$ — same shape, different perimeters. The shortcut fails in both directions, so perimeter tells you nothing about shape. (Choice one is DEMANDING EQUAL SIDES, which is congruence ✗; choice two is COMPARING PERIMETERS, which forces scale factor $1$ and misses every true enlargement ✗; choice three is SWAPPING EQUAL AND PROPORTIONAL — scaled angles cannot keep the $180^\\circ$ sum ✗.)',
    },
    {
      q: 'An architect prints a triangular roof plan at $40\\%$ of full size. The printed triangle is similar to the full-size one: same shape, smaller. Similar triangles are exactly those with',
      choices: [
        'corresponding angles proportional and corresponding sides equal',
        'corresponding angles equal and corresponding sides proportional',
        'corresponding angles equal and corresponding sides equal',
        'equal perimeters',
      ],
      answer: 1,
      solution:
        'The printer multiplies every length by $0.4$ and turns nothing, so each printed side is $0.4$ times its original — proportional — while every corner keeps its exact measure — equal angles ✓. Check the other choices by asking what each would force on the printout. Equal corresponding sides would force the print to be full size, so it rules out every genuine reduction — that is congruence, not similarity ✗. Equal perimeters fails the same way, and worse: the triangles $5$-$5$-$5$ and $4$-$5$-$6$ share a perimeter of $15$ without sharing a shape ✗. Proportional angles at $40\\%$ would shrink the angle sum to $0.4 \\times 180^\\circ = 72^\\circ$, and no triangle has that ✗. (Choice one is SWAPPING EQUAL AND PROPORTIONAL ✗; choice three is DEMANDING CONGRUENCE ✗; choice four is COMPARING PERIMETERS ✗.)',
    },
  ],
  // s2 — read a correspondence out of a similarity statement.
  [
    {
      q: '$\\triangle PQR \\sim \\triangle STU$, as shown. Which side of $\\triangle STU$ corresponds to $\\overline{QR}$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [3, 3], label: 'R', dx: 0, dy: -12 },
          { t: 'poly', pts: [[6, 0], [12, 0], [10.5, 4.5]], fill: false },
          { t: 'point', p: [6, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'T', dx: 10, dy: 10 },
          { t: 'point', p: [10.5, 4.5], label: 'U', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overline{ST}$', '$\\overline{TU}$', '$\\overline{SU}$', '$\\overline{PQ}$'],
      answer: 1,
      solution:
        'Read the similarity statement letter by letter: $P \\leftrightarrow S$, $Q \\leftrightarrow T$, $R \\leftrightarrow U$. The side $\\overline{QR}$ runs between the second and third letters, so its partner runs between the second and third letters of the other name: $\\overline{TU}$ ✓. Check against the picture by size order, which never touches the letters: similar triangles keep their sides ranked the same way, and $\\overline{QR}$ is the SHORTEST side of $\\triangle PQR$, so its partner must be the shortest side of $\\triangle STU$ — the short slanted side $\\overline{TU}$ ✓. ($\\overline{ST}$ is SHIFTING THE MATCH to the first-and-second letters, which belong to $\\overline{PQ}$ ✗; $\\overline{SU}$ is PAIRING THE OUTER LETTERS, the partner of $\\overline{PR}$ ✗; $\\overline{PQ}$ is PICKING A SIDE OF THE FIRST TRIANGLE, which cannot be its own partner ✗.)',
    },
    {
      q: '$\\triangle JKL \\sim \\triangle MNP$, as shown. Which side of $\\triangle MNP$ corresponds to $\\overline{JL}$?',
      fig: {
        view: [-1.5, -1.5, 15.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 3], [0, 0], [4, 0]], fill: false },
          { t: 'point', p: [0, 3], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'poly', pts: [[6, 6], [6, 0], [14, 0]], fill: false },
          { t: 'point', p: [6, 6], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'N', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'P', dx: 10, dy: 10 },
        ],
      },
      choices: ['$\\overline{MN}$', '$\\overline{NP}$', '$\\overline{MP}$', '$\\overline{KL}$'],
      answer: 2,
      solution:
        'Match the names in the order they are written: $J \\leftrightarrow M$, $K \\leftrightarrow N$, $L \\leftrightarrow P$. The side $\\overline{JL}$ joins the first and third letters, so its partner joins the first and third letters of the second name: $\\overline{MP}$ ✓. Now confirm from the drawing without using letter order at all: $\\overline{JL}$ is the hypotenuse of the small right triangle, its LONGEST side, and similarity preserves the ranking of the sides, so the partner must be the longest side of $\\triangle MNP$ — the slanted hypotenuse $\\overline{MP}$ ✓. ($\\overline{MN}$ is SHIFTING THE MATCH to the first two letters, which pair with $\\overline{JK}$ ✗; $\\overline{NP}$ takes the last two letters, the partner of $\\overline{KL}$ ✗; $\\overline{KL}$ is PICKING A SIDE OF THE FIRST TRIANGLE ✗.)',
    },
    {
      q: '$\\triangle GHK \\sim \\triangle RST$, as shown. Which side of $\\triangle RST$ corresponds to $\\overline{HK}$?',
      fig: {
        view: [-1.5, -1.5, 16, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [1, 4]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [1, 4], label: 'K', dx: 0, dy: -12 },
          { t: 'poly', pts: [[7, 0], [14.5, 0], [8.5, 6]], fill: false },
          { t: 'point', p: [7, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [14.5, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [8.5, 6], label: 'T', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overline{RS}$', '$\\overline{RT}$', '$\\overline{GH}$', '$\\overline{ST}$'],
      answer: 3,
      solution:
        'The statement promises $G \\leftrightarrow R$, $H \\leftrightarrow S$, $K \\leftrightarrow T$. Since $\\overline{HK}$ connects the second and third letters, its partner connects the second and third letters on the other side: $\\overline{ST}$ ✓. Double-check by comparing lengths in the figure, a route that ignores the letters entirely: $\\overline{HK}$ is the LONGEST side of $\\triangle GHK$, and similar triangles keep the same size ranking, so its partner is the longest side of $\\triangle RST$ — the long slanted side $\\overline{ST}$ ✓. ($\\overline{RS}$ is SHIFTING THE MATCH to the first two letters, the partner of $\\overline{GH}$ ✗; $\\overline{RT}$ is PAIRING THE OUTER LETTERS, which belong to $\\overline{GK}$ ✗; $\\overline{GH}$ is PICKING A SIDE OF THE FIRST TRIANGLE ✗.)',
    },
  ],
  // s3 — one pair of corresponding sides; report the scale factor.
  [
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 4$ and $DE = 20$, as shown. What is the scale factor from $\\triangle ABC$ to $\\triangle DEF$?',
      fig: {
        view: [-1.5, -1.5, 27.5, 14],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.5, 2.5]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 2.5], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'poly', pts: [[6, 0], [26, 0], [13.5, 12.5]], fill: false },
          { t: 'point', p: [6, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [13.5, 12.5], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [16, 0], text: '20', dx: 0, dy: 14 },
        ],
      },
      choices: ['$5$', '$\\frac{1}{5}$', '$16$', '$80$'],
      answer: 0,
      solution:
        'The scale factor is new length over old: $\\frac{DE}{AB} = \\frac{20}{4} = 5$ ✓. Check it by running each printed candidate forward instead of dividing: $4 \\times 5 = 20$ ✓ lands exactly on $DE$, while $4 \\times \\frac{1}{5} = 0.8$ shrinks the side ✗, $4 \\times 16 = 64$ overshoots ✗, and $4 \\times 80 = 320$ is nowhere near ✗ — exactly one candidate carries $\\overline{AB}$ onto $\\overline{DE}$. ($\\frac{1}{5}$ is INVERTING THE RATIO, the factor for the return trip from big to small ✗; $16$ is SUBTRACTING THE SIDES, $20 - 4$ ✗; $80$ is MULTIPLYING THE SIDES, $20 \\times 4$ ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$ and $DE = 15$, as shown. What is the scale factor from $\\triangle ABC$ to $\\triangle DEF$?',
      fig: {
        view: [-1.5, -1.5, 24.5, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [2, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [2, 3], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'poly', pts: [[8, 0], [23, 0], [13, 7.5]], fill: false },
          { t: 'point', p: [8, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [23, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [13, 7.5], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [15.5, 0], text: '15', dx: 0, dy: 14 },
        ],
      },
      choices: ['$\\frac{2}{5}$', '$9$', '$\\frac{5}{2}$', '$21$'],
      answer: 2,
      solution:
        'Divide new by old: $\\frac{DE}{AB} = \\frac{15}{6} = \\frac{5}{2}$ ✓. Verify backward through the candidates, with no division anywhere: $6 \\times \\frac{5}{2} = 15$ ✓ reaches $DE$ on the nose, while $6 \\times \\frac{2}{5} = 2.4$ goes the wrong way ✗, $6 \\times 9 = 54$ blows past ✗, and $6 \\times 21 = 126$ is out of the picture ✗. Only one factor works, and it is bigger than $1$, as an enlargement must be. ($\\frac{2}{5}$ is INVERTING THE RATIO ✗; $9$ is SUBTRACTING THE SIDES, $15 - 6$ ✗; $21$ is ADDING THE SIDES instead of comparing them ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 3$ and $DE = 21$, as shown. What is the scale factor from $\\triangle ABC$ to $\\triangle DEF$?',
      fig: {
        view: [-1.5, -1.5, 27.5, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1, 1.5]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [1, 1.5], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'poly', pts: [[5, 0], [26, 0], [12, 10.5]], fill: false },
          { t: 'point', p: [5, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [12, 10.5], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [15.5, 0], text: '21', dx: 0, dy: 14 },
        ],
      },
      choices: ['$\\frac{1}{7}$', '$18$', '$24$', '$7$'],
      answer: 3,
      solution:
        'New over old: $\\frac{DE}{AB} = \\frac{21}{3} = 7$ ✓ — every length of $\\triangle DEF$ is $7$ times its match in $\\triangle ABC$. Confirm by testing candidates forward instead of dividing: $3 \\times 7 = 21$ ✓ hits $DE$ exactly, while $3 \\times \\frac{1}{7} = \\frac{3}{7}$ shrinks ✗, $3 \\times 18 = 54$ misses ✗, and $3 \\times 24 = 72$ misses badly ✗. One survivor, and the picture agrees: the second triangle is dramatically larger, so the factor should be well above $1$. ($\\frac{1}{7}$ is INVERTING THE RATIO, the big-to-small direction ✗; $18$ is SUBTRACTING THE SIDES, $21 - 3$ ✗; $24$ is ADDING THE SIDES ✗.)',
    },
  ],
  // s4 — scale factor from one pair, then find a second side.
  [
    {
      q: '$\\triangle ABC \\sim \\triangle XYZ$ with $AB = 4$, $BC = 7$, and $XY = 12$, as shown. Find $YZ$.',
      fig: {
        view: [-1.5, -1.5, 31.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 4], [0, 0], [7, 0]], fill: false },
          { t: 'point', p: [0, 4], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [7, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'label', p: [0, 2], text: '4', dx: -10, dy: 0 },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'poly', pts: [[9, 12], [9, 0], [30, 0]], fill: false },
          { t: 'point', p: [9, 12], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'label', p: [9, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [19.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$\\frac{7}{3}$', '$15$', '$21$', '$28$'],
      answer: 2,
      solution:
        'By letter order $\\overline{AB} \\leftrightarrow \\overline{XY}$, so the scale factor is $\\frac{XY}{AB} = \\frac{12}{4} = 3$, and $YZ = 3 \\times BC = 3 \\times 7 = 21$ ✓. Check with a comparison that never computes the scale factor: similarity preserves the ratio of two sides WITHIN a triangle, so $\\frac{YZ}{XY} = \\frac{BC}{AB} = \\frac{7}{4}$, giving $YZ = 12 \\times \\frac{7}{4} = 21$ ✓ — the same length from an inside proportion instead of an across one. ($15$ is ADDING THE DIFFERENCE: $12 = 4 + 8$, so $7 + 8$, but similarity multiplies and never adds ✗; $\\frac{7}{3}$ is INVERTING THE RATIO ✗; $28$ is MULTIPLYING THE GIVEN SIDES, $4 \\times 7$ ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle XYZ$ with $AB = 5$, $BC = 6$, and $XY = 15$, as shown. Find $YZ$.',
      fig: {
        view: [-1.5, -1.5, 28.5, 13.5],
        elems: [
          { t: 'poly', pts: [[3, 4], [0, 0], [6, 0]], fill: false },
          { t: 'point', p: [3, 4], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'label', p: [1.5, 2], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'poly', pts: [[18, 12], [9, 0], [27, 0]], fill: false },
          { t: 'point', p: [18, 12], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [27, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'label', p: [13.5, 6], text: '15', dx: -12, dy: 0 },
          { t: 'label', p: [18, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16$', '$18$', '$2$', '$30$'],
      answer: 1,
      solution:
        'The letters pair $\\overline{AB}$ with $\\overline{XY}$, so the scale factor is $\\frac{XY}{AB} = \\frac{15}{5} = 3$, and $YZ = 3 \\times BC = 3 \\times 6 = 18$ ✓. Cross-check with the inside ratio, which skips the factor entirely: $\\frac{YZ}{XY} = \\frac{BC}{AB} = \\frac{6}{5}$, so $YZ = 15 \\times \\frac{6}{5} = 18$ ✓ — two different proportions, one answer. ($16$ is ADDING THE DIFFERENCE: $15 = 5 + 10$, so $6 + 10$, but enlargement is multiplication, not addition ✗; $2$ is INVERTING THE RATIO and shrinking a side that must grow ✗; $30$ is MULTIPLYING THE GIVEN SIDES, $5 \\times 6$ ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle XYZ$ with $AB = 6$, $BC = 11$, and $XY = 18$, as shown. Find $YZ$.',
      fig: {
        view: [-1.5, -1.5, 25, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 3], [0, 0], [5.5, 0]], fill: false },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [5.5, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'label', p: [0, 1.5], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [2.75, 0], text: '11', dx: 0, dy: 14 },
          { t: 'poly', pts: [[7, 9], [7, 0], [23.5, 0]], fill: false },
          { t: 'point', p: [7, 9], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [23.5, 0], label: 'Z', dx: 10, dy: 10 },
          { t: 'label', p: [7, 4.5], text: '18', dx: -12, dy: 0 },
          { t: 'label', p: [15.25, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$23$', '$\\frac{11}{3}$', '$66$', '$33$'],
      answer: 3,
      solution:
        'From the letter order, $\\overline{AB} \\leftrightarrow \\overline{XY}$, so the scale factor is $\\frac{XY}{AB} = \\frac{18}{6} = 3$, and $YZ = 3 \\times BC = 3 \\times 11 = 33$ ✓. Confirm through the inside proportion, which never uses the factor $3$: $\\frac{YZ}{XY} = \\frac{BC}{AB} = \\frac{11}{6}$, so $YZ = 18 \\times \\frac{11}{6} = 33$ ✓. ($23$ is ADDING THE DIFFERENCE: $18 = 6 + 12$, so $11 + 12$, but similarity multiplies every side by the same factor and never adds ✗; $\\frac{11}{3}$ is INVERTING THE RATIO ✗; $66$ is MULTIPLYING THE GIVEN SIDES, $6 \\times 11$ ✗.)',
    },
  ],
  // s5 — which proportion is forced by the similarity statement.
  [
    {
      q: 'If $\\triangle PQR \\sim \\triangle XYZ$, which proportion must be true?',
      choices: [
        '$\\frac{PQ}{XY} = \\frac{QR}{YZ}$',
        '$\\frac{PQ}{YZ} = \\frac{QR}{XY}$',
        '$\\frac{PQ}{XY} = \\frac{RP}{YZ}$',
        '$\\frac{PQ}{QR} = \\frac{YZ}{XY}$',
      ],
      answer: 0,
      solution:
        'Match by letter order: $\\overline{PQ} \\leftrightarrow \\overline{XY}$ and $\\overline{QR} \\leftrightarrow \\overline{YZ}$, so both fractions $\\frac{PQ}{XY}$ and $\\frac{QR}{YZ}$ equal the same scale factor and must agree ✓. Test every choice on a concrete pair: let $\\triangle PQR$ have $PQ = 3$, $QR = 4$, $RP = 5$ and $\\triangle XYZ$ be its double with $XY = 6$, $YZ = 8$, $ZX = 10$. The first choice reads $\\frac{3}{6} = \\frac{4}{8}$ ✓. The second reads $\\frac{3}{8}$ against $\\frac{4}{6}$ ✗, the third reads $\\frac{3}{6}$ against $\\frac{5}{8}$ ✗, and the fourth reads $\\frac{3}{4}$ against $\\frac{8}{6}$ ✗ — only the keyed proportion survives an honest example. (Choice two is CROSSING THE PAIRS ✗; choice three is USING THE WRONG PAIR, since $\\overline{RP}$ matches $\\overline{ZX}$, not $\\overline{YZ}$ ✗; choice four is FLIPPING ONE SIDE OF THE PROPORTION ✗.)',
    },
    {
      q: 'If $\\triangle JKL \\sim \\triangle RST$, which proportion must be true?',
      choices: [
        '$\\frac{KL}{RS} = \\frac{LJ}{ST}$',
        '$\\frac{KL}{ST} = \\frac{LJ}{TR}$',
        '$\\frac{JK}{ST} = \\frac{KL}{RS}$',
        '$\\frac{JK}{KL} = \\frac{ST}{RS}$',
      ],
      answer: 1,
      solution:
        'The letters promise $J \\leftrightarrow R$, $K \\leftrightarrow S$, $L \\leftrightarrow T$, so $\\overline{KL} \\leftrightarrow \\overline{ST}$ and $\\overline{LJ} \\leftrightarrow \\overline{TR}$: both fractions in $\\frac{KL}{ST} = \\frac{LJ}{TR}$ equal the one scale factor ✓. Now audit all four choices with numbers: take $JK = 3$, $KL = 4$, $LJ = 5$ and the doubled triangle $RS = 6$, $ST = 8$, $TR = 10$. The keyed choice reads $\\frac{4}{8} = \\frac{5}{10}$ ✓. Choice one reads $\\frac{4}{6}$ against $\\frac{5}{8}$ ✗, choice three reads $\\frac{3}{8}$ against $\\frac{4}{6}$ ✗, and choice four reads $\\frac{3}{4}$ against $\\frac{8}{6}$ ✗. (Choice one is SHIFTING THE MATCH by one letter ✗; choice three is CROSSING THE PAIRS ✗; choice four is FLIPPING ONE SIDE OF THE PROPORTION — the true inside ratio is $\\frac{JK}{KL} = \\frac{RS}{ST}$ ✗.)',
    },
    {
      q: 'If $\\triangle MNP \\sim \\triangle UVW$, which proportion must be true?',
      choices: [
        '$\\frac{MN}{VW} = \\frac{NP}{UV}$',
        '$\\frac{MN}{UV} = \\frac{NP}{WU}$',
        '$\\frac{MN}{UV} = \\frac{PM}{WU}$',
        '$\\frac{NP}{PM} = \\frac{WU}{VW}$',
      ],
      answer: 2,
      solution:
        'Letter order pairs $M \\leftrightarrow U$, $N \\leftrightarrow V$, $P \\leftrightarrow W$, so $\\overline{MN} \\leftrightarrow \\overline{UV}$ and $\\overline{PM} \\leftrightarrow \\overline{WU}$ — both fractions in $\\frac{MN}{UV} = \\frac{PM}{WU}$ are the same scale factor ✓. Put numbers through every choice: let $MN = 3$, $NP = 4$, $PM = 5$ and the doubled triangle $UV = 6$, $VW = 8$, $WU = 10$. The keyed choice reads $\\frac{3}{6} = \\frac{5}{10}$ ✓. Choice one reads $\\frac{3}{8}$ against $\\frac{4}{6}$ ✗, choice two reads $\\frac{3}{6}$ against $\\frac{4}{10}$ ✗, and choice four reads $\\frac{4}{5}$ against $\\frac{10}{8}$ ✗ — the example convicts every distractor at once. (Choice one is CROSSING THE PAIRS ✗; choice two is USING THE WRONG PAIR, since $\\overline{NP}$ matches $\\overline{VW}$ ✗; choice four is FLIPPING ONE SIDE OF THE PROPORTION ✗.)',
    },
  ],
  // s6 — find a side when the scale factor comes out fractional.
  [
    {
      q: 'In the figure, $\\triangle ABC \\sim \\triangle DEF$, with $AB = 8$, $BC = 11$, and $DE = 12$. Find $EF$.',
      fig: {
        view: [-1.5, -1.5, 24.5, 14.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [1.4, 8.8]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [1.4, 8.8], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [4.7, 4.4], text: '11', dx: 12, dy: 0 },
          { t: 'poly', pts: [[11, 0], [23, 0], [13.1, 13.2]], fill: false },
          { t: 'point', p: [11, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [23, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [13.1, 13.2], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [17, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [18.05, 6.6], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$15$', '$16.5$', '$12$', '$\\frac{22}{3}$'],
      answer: 1,
      solution:
        'The scale factor is $\\frac{DE}{AB} = \\frac{12}{8} = \\frac{3}{2}$, so $EF = \\frac{3}{2} \\times 11 = 16.5$ ✓. Check with the inside proportion, which never forms the scale factor: $\\frac{EF}{DE} = \\frac{BC}{AB} = \\frac{11}{8}$, so $EF = 12 \\times \\frac{11}{8} = \\frac{132}{8} = 16.5$ ✓ — a fresh route to the same half-integer. ($15$ is ADDING THE DIFFERENCE: $12 = 8 + 4$, so $11 + 4$, but enlargement multiplies every side by the same factor, so the longer side must grow by MORE than $4$ ✗; $12$ is SCALING THE WRONG SIDE — $8 \\times \\frac{3}{2}$ only rebuilds $DE$ itself ✗; $\\frac{22}{3}$ is INVERTING THE RATIO, $11 \\times \\frac{2}{3}$ ✗.)',
    },
    {
      q: 'In the figure, $\\triangle ABC \\sim \\triangle DEF$, with $AB = 4$, $BC = 9$, and $DE = 6$. Find $EF$.',
      fig: {
        view: [-3, -1.5, 14.5, 12.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [-1.4, 7.2]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [-1.4, 7.2], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [1.3, 3.6], text: '9', dx: 12, dy: 0 },
          { t: 'poly', pts: [[7, 0], [13, 0], [4.9, 10.8]], fill: false },
          { t: 'point', p: [7, 0], label: 'D', dx: -8, dy: 12 },
          { t: 'point', p: [13, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [4.9, 10.8], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [10, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [8.95, 5.4], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$13.5$', '$11$', '$6$', '$36$'],
      answer: 0,
      solution:
        'The scale factor is $\\frac{DE}{AB} = \\frac{6}{4} = \\frac{3}{2}$, so $EF = \\frac{3}{2} \\times 9 = 13.5$ ✓. Verify by the inside proportion instead: within each triangle the second side is $\\frac{9}{4}$ of the first, so $EF = 6 \\times \\frac{9}{4} = \\frac{54}{4} = 13.5$ ✓ — same value, no scale factor in sight. ($11$ is ADDING THE DIFFERENCE: $6 = 4 + 2$, so $9 + 2$, but a $\\frac{3}{2}$ enlargement adds more to a longer side ✗; $6$ is INVERTING THE RATIO, $9 \\times \\frac{2}{3}$, which shrinks a side of the LARGER triangle ✗; $36$ is MULTIPLYING THE GIVEN SIDES, $4 \\times 9$ ✗.)',
    },
    {
      q: 'In the figure, $\\triangle ABC \\sim \\triangle DEF$, with $AB = 6$, $BC = 7$, and $DE = 15$. Find $EF$.',
      fig: {
        view: [-1.5, -1.5, 24.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [1.8, 5.6]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [1.8, 5.6], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [3.9, 2.8], text: '7', dx: 12, dy: 0 },
          { t: 'poly', pts: [[8, 0], [23, 0], [12.5, 14]], fill: false },
          { t: 'point', p: [8, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [23, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [12.5, 14], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [15.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [17.75, 7], text: '?', dx: 12, dy: 0 },
        ],
      },
      choices: ['$16$', '$2.8$', '$15$', '$17.5$'],
      answer: 3,
      solution:
        'The scale factor is $\\frac{DE}{AB} = \\frac{15}{6} = \\frac{5}{2}$, so $EF = \\frac{5}{2} \\times 7 = 17.5$ ✓. Check through the inside proportion, a route with no scale factor at all: $\\frac{EF}{DE} = \\frac{BC}{AB} = \\frac{7}{6}$, so $EF = 15 \\times \\frac{7}{6} = \\frac{105}{6} = 17.5$ ✓. ($16$ is ADDING THE DIFFERENCE: $15 = 6 + 9$, so $7 + 9$, but multiplication by $\\frac{5}{2}$ is not a flat $+9$ for every side ✗; $2.8$ is INVERTING THE RATIO, $7 \\times \\frac{2}{5}$ ✗; $15$ is SCALING THE WRONG SIDE — $6 \\times \\frac{5}{2}$ lands back on $DE$, not on $EF$ ✗.)',
    },
  ],
  // s7 — three sides given, scale DOWN to the smaller triangle.
  [
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$, with $AB = 12$, $BC = 18$, $CA = 24$, and $DE = 4$, as shown. Find $FD$.',
      fig: {
        view: [-1.5, -2.5, 36.5, 10.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [8.25, 8.7142]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [8.25, 8.7142], label: 'B', dx: 0, dy: -12 },
          { t: 'label', p: [4.125, 4.3571], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [16.125, 4.3571], text: '18', dx: 12, dy: -6 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'poly', pts: [[27, 0], [35, 0], [29.75, 2.9047]], fill: false },
          { t: 'point', p: [27, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [35, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [29.75, 2.9047], label: 'E', dx: 0, dy: -12 },
          { t: 'label', p: [28.375, 1.4524], text: '4', dx: -10, dy: -4 },
          { t: 'label', p: [31, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$6$', '$72$', '$16$', '$8$'],
      answer: 3,
      solution:
        'The scale factor is $\\frac{DE}{AB} = \\frac{4}{12} = \\frac{1}{3}$. By letter order, $\\overline{FD}$ corresponds to $\\overline{CA}$, so $FD = \\frac{1}{3} \\times 24 = 8$ ✓. Check with the inside proportion, which never divides by $3$: within $\\triangle ABC$, the side $\\overline{CA}$ is twice $\\overline{AB}$, so $FD$ must be twice $DE$: $FD = 2 \\times 4 = 8$ ✓ — the shape carries its own ratios down to the small copy. ($6$ is USING THE WRONG PAIR: $\\frac{18}{3} = 6$ is $EF$, the match for $\\overline{BC}$ ✗; $72$ is INVERTING THE RATIO and enlarging a triangle that must shrink ✗; $16$ is SUBTRACTING THE DIFFERENCE $24 - 8$, but similarity divides, it never subtracts ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$, with $AB = 10$, $BC = 14$, $CA = 18$, and $DE = 5$, as shown. Find $FD$.',
      fig: {
        view: [-1.5, -2.5, 31.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [6.3333, 7.7388]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [6.3333, 7.7388], label: 'B', dx: 0, dy: -12 },
          { t: 'label', p: [3.1667, 3.8694], text: '10', dx: -12, dy: 0 },
          { t: 'label', p: [12.1667, 3.8694], text: '14', dx: 12, dy: -6 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'poly', pts: [[21, 0], [30, 0], [24.1667, 3.8694]], fill: false },
          { t: 'point', p: [21, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [24.1667, 3.8694], label: 'E', dx: 0, dy: -12 },
          { t: 'label', p: [22.5834, 1.9347], text: '5', dx: -10, dy: -4 },
          { t: 'label', p: [25.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$9$', '$7$', '$36$', '$13$'],
      answer: 0,
      solution:
        'The scale factor is $\\frac{DE}{AB} = \\frac{5}{10} = \\frac{1}{2}$. The letters pair $\\overline{FD}$ with $\\overline{CA}$, so $FD = \\frac{1}{2} \\times 18 = 9$ ✓. Confirm with the inside proportion and no halving: in $\\triangle ABC$ the side $\\overline{CA}$ is $\\frac{18}{10} = \\frac{9}{5}$ of $\\overline{AB}$, and the small triangle keeps that shape, so $FD = \\frac{9}{5} \\times DE = \\frac{9}{5} \\times 5 = 9$ ✓. ($7$ is USING THE WRONG PAIR: half of $14$ is $EF$, the match for $\\overline{BC}$, and the correspondence order matters ✗; $36$ is INVERTING THE RATIO, $18 \\times 2$, which grows the triangle that must shrink ✗; $13$ is SUBTRACTING THE DIFFERENCE $18 - 5$, but similarity works by ratio, not by removal ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$, with $AB = 8$, $BC = 12$, $CA = 18$, and $DE = 2$, as shown. Find $FD$.',
      fig: {
        view: [-1.5, -2, 27, 6],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [6.7778, 4.25]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [6.7778, 4.25], label: 'B', dx: 0, dy: -12 },
          { t: 'label', p: [3.3889, 2.125], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [12.3889, 2.125], text: '12', dx: 12, dy: -6 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'poly', pts: [[21, 0], [25.5, 0], [22.6945, 1.0625]], fill: false },
          { t: 'point', p: [21, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [25.5, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [22.6945, 1.0625], label: 'E', dx: 0, dy: -12 },
          { t: 'label', p: [21.8473, 0.5313], text: '2', dx: -10, dy: -6 },
          { t: 'label', p: [23.25, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$3$', '$72$', '$4.5$', '$12$'],
      answer: 2,
      solution:
        'The scale factor is $\\frac{DE}{AB} = \\frac{2}{8} = \\frac{1}{4}$. By the letter order, $\\overline{FD}$ matches $\\overline{CA}$, so $FD = \\frac{1}{4} \\times 18 = 4.5$ ✓. Check by the inside proportion, with no quartering anywhere: $\\overline{CA}$ is $\\frac{18}{8} = \\frac{9}{4}$ of $\\overline{AB}$ in the big triangle, so in the small one $FD = \\frac{9}{4} \\times DE = \\frac{9}{4} \\times 2 = 4.5$ ✓ — the same length from the shape alone. ($3$ is USING THE WRONG PAIR: $\\frac{12}{4} = 3$ is $EF$, the match for $\\overline{BC}$ ✗; $72$ is INVERTING THE RATIO, $18 \\times 4$ ✗; $12$ is SUBTRACTING THE DIFFERENCE $18 - 6$ because $AB - DE = 6$, but shrinking is division by $4$, not a flat $-6$ ✗.)',
    },
  ],
  // s8 — perimeter rides along with the scale factor.
  [
    {
      q: '$\\triangle PQR$ has perimeter $20$. $\\triangle STU \\sim \\triangle PQR$ with scale factor $\\frac{3}{2}$. What is the perimeter of $\\triangle STU$?',
      choices: ['$45$', '$\\frac{40}{3}$', '$30$', '$60$'],
      answer: 2,
      solution:
        'Every side of $\\triangle STU$ is $\\frac{3}{2}$ times its match, so the sum of the sides is multiplied by the same $\\frac{3}{2}$: the perimeter is $20 \\times \\frac{3}{2} = 30$ ✓. Check with a concrete triangle instead of the general rule: give $\\triangle PQR$ sides $6$, $6$, $8$, which add to $20$; scaling each by $\\frac{3}{2}$ gives $9$, $9$, $12$, and $9 + 9 + 12 = 30$ ✓ — the shortcut and the side-by-side sum agree. ($45$ is SQUARING THE FACTOR, $20 \\times \\frac{9}{4}$, the mistake that belongs to areas, not perimeters ✗; $\\frac{40}{3}$ is INVERTING THE RATIO and shrinking an enlargement ✗; $60$ is MULTIPLYING BY THE NUMERATOR ONLY, $20 \\times 3$, forgetting the denominator ✗.)',
    },
    {
      q: 'A triangular garden bed has perimeter $16$ meters. A similar bed is laid out with scale factor $\\frac{7}{4}$. What is the perimeter of the larger bed?',
      choices: ['$49$', '$28$', '$\\frac{64}{7}$', '$112$'],
      answer: 1,
      solution:
        'Each edge of the new bed is $\\frac{7}{4}$ times the old edge, so the total edging is $\\frac{7}{4}$ times as long: $16 \\times \\frac{7}{4} = 28$ meters ✓. Verify on an explicit bed rather than by the rule: sides of $4$, $5$, $7$ meters add to $16$; scaled by $\\frac{7}{4}$ they become $7$, $8.75$, $12.25$, and $7 + 8.75 + 12.25 = 28$ ✓. Perimeter is a LENGTH, so it scales by the factor itself. ($49$ is SQUARING THE FACTOR, $16 \\times \\frac{49}{16}$ — that is how area behaves, not perimeter ✗; $\\frac{64}{7}$ is INVERTING THE RATIO ✗; $112$ is MULTIPLYING BY THE NUMERATOR ONLY, $16 \\times 7$ ✗.)',
    },
    {
      q: '$\\triangle JKL$ has perimeter $30$. $\\triangle MNP \\sim \\triangle JKL$ with scale factor $\\frac{8}{5}$. What is the perimeter of $\\triangle MNP$?',
      choices: ['$48$', '$76.8$', '$18.75$', '$240$'],
      answer: 0,
      solution:
        'Multiplying every side by $\\frac{8}{5}$ multiplies their sum by $\\frac{8}{5}$, so the perimeter of $\\triangle MNP$ is $30 \\times \\frac{8}{5} = 48$ ✓. Check with actual sides in place of the shortcut: let $\\triangle JKL$ have sides $8$, $10$, $12$, which total $30$; the scaled sides are $12.8$, $16$, $19.2$, and $12.8 + 16 + 19.2 = 48$ ✓ — both routes land together. ($76.8$ is SQUARING THE FACTOR, $30 \\times \\frac{64}{25}$, the area-style slip ✗; $18.75$ is INVERTING THE RATIO, $30 \\times \\frac{5}{8}$, which shrinks a triangle the factor says to enlarge ✗; $240$ is MULTIPLYING BY THE NUMERATOR ONLY, $30 \\times 8$ ✗.)',
    },
  ],
  // s9 — perimeters set the ratio; carry one side across.
  [
    {
      q: 'Two similar triangles have perimeters $18$ and $27$. A side of the smaller triangle has length $8$, as shown. How long is the corresponding side of the larger triangle?',
      fig: {
        view: [-1.5, -2, 23.5, 5.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [2.75, 2.9047]], fill: false },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'poly', pts: [[10, 0], [22, 0], [14.125, 4.3571]], fill: false },
          { t: 'label', p: [16, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$12$', '$17$', '$\\frac{16}{3}$', '$9$'],
      answer: 0,
      solution:
        'Corresponding sides are in the same ratio as perimeters: $\\frac{27}{18} = \\frac{3}{2}$, so the larger side is $8 \\times \\frac{3}{2} = 12$ ✓. Check by accounting for the leftover sides instead of scaling: the other two sides of the small triangle total $18 - 8 = 10$, so their partners must total $10 \\times \\frac{3}{2} = 15$, and $12 + 15 = 27$ ✓ rebuilds the large perimeter exactly. An answer of $17$ would leave only $27 - 17 = 10$ for the other two sides — no growth at all for them, which similarity forbids. ($17$ is ADDING THE PERIMETER DIFFERENCE, $8 + 9$ ✗; $\\frac{16}{3}$ is INVERTING THE RATIO ✗; $9$ is ANSWERING THE PERIMETER DIFFERENCE, $27 - 18$, which is not a side of anything ✗.)',
    },
    {
      q: 'Two similar triangles have perimeters $28$ and $35$. A side of the smaller triangle has length $12$, as shown. How long is the corresponding side of the larger triangle?',
      fig: {
        view: [-1.5, -2, 30.5, 7.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [8.6667, 4.9889]], fill: false },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'poly', pts: [[14, 0], [29, 0], [24.8334, 6.2361]], fill: false },
          { t: 'label', p: [21.5, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$19$', '$9.6$', '$15$', '$7$'],
      answer: 2,
      solution:
        'Sides scale exactly as perimeters do: the ratio is $\\frac{35}{28} = \\frac{5}{4}$, so the larger side is $12 \\times \\frac{5}{4} = 15$ ✓. Check by balancing the books on the remaining sides: the small triangle keeps $28 - 12 = 16$ for its other two sides, so the large one must keep $16 \\times \\frac{5}{4} = 20$, and $15 + 20 = 35$ ✓ — the large perimeter closes exactly. A candidate like $19$ would leave $16$ for the other two large sides, freezing them at small size while one side grows, which breaks similarity. ($19$ is ADDING THE PERIMETER DIFFERENCE, $12 + 7$ ✗; $9.6$ is INVERTING THE RATIO, $12 \\times \\frac{4}{5}$ ✗; $7$ is ANSWERING THE PERIMETER DIFFERENCE, $35 - 28$ ✗.)',
    },
    {
      q: 'Two similar triangles have perimeters $14$ and $35$. A side of the smaller triangle has length $4$, as shown. How long is the corresponding side of the larger triangle?',
      fig: {
        view: [-1.5, -2, 17.5, 12.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 4.5826]], fill: false },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'poly', pts: [[6, 0], [16, 0], [11, 11.4565]], fill: false },
          { t: 'label', p: [11, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$25$', '$\\frac{8}{5}$', '$21$', '$10$'],
      answer: 3,
      solution:
        'Perimeters of similar triangles are in the same ratio as sides: $\\frac{35}{14} = \\frac{5}{2}$, so the corresponding side is $4 \\times \\frac{5}{2} = 10$ ✓. Check by tracking what is left over: the small triangle has $14 - 4 = 10$ spread over its other two sides, so the large one must spread $10 \\times \\frac{5}{2} = 25$ over its partners, and $10 + 25 = 35$ ✓ — the perimeter is rebuilt with nothing missing. ($25$ is ADDING THE PERIMETER DIFFERENCE, $4 + 21$, but differences do not transfer between similar figures ✗; $\\frac{8}{5}$ is INVERTING THE RATIO, $4 \\times \\frac{2}{5}$, shrinking what must grow ✗; $21$ is ANSWERING THE PERIMETER DIFFERENCE, $35 - 14$ ✗.)',
    },
  ],
  // s10 — side triple plus a target perimeter; find the shortest new side.
  [
    {
      q: 'A triangle has sides $5$, $12$, and $13$, as shown. A similar triangle has perimeter $90$. What is the SHORTEST side of the larger triangle?',
      fig: {
        view: [-1.5, -2, 13.8, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]], fill: false },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 2.5], text: '5', dx: 10, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '13', dx: -10, dy: -8 },
        ],
      },
      choices: ['$36$', '$39$', '$30$', '$15$'],
      answer: 3,
      solution:
        'The small triangle has perimeter $5 + 12 + 13 = 30$, so the scale factor is $\\frac{90}{30} = 3$. The shortest side of the large triangle matches the shortest side of the small one: $5 \\times 3 = 15$ ✓. Check by writing out the whole large triangle: its sides are $15$, $36$, $39$, and $15 + 36 + 39 = 90$ ✓ — the target perimeter is hit exactly, and $15$ is plainly the smallest of the three. ($36$ is SCALING THE WRONG SIDE, $12 \\times 3$, the middle side ✗; $39$ is ANSWERING THE LONGEST SIDE, $13 \\times 3$ ✗; $30$ is ANSWERING THE SMALL PERIMETER, a stop halfway through the problem ✗.)',
    },
    {
      q: 'A triangle has sides $9$, $12$, and $15$, as shown. A similar triangle has perimeter $48$. What is the SHORTEST side of the larger triangle?',
      fig: {
        view: [-1.5, -2, 13.8, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 9]], fill: false },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 9] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 4.5], text: '9', dx: 10, dy: 0 },
          { t: 'label', p: [6, 4.5], text: '15', dx: -10, dy: -8 },
        ],
      },
      choices: ['$16$', '$12$', '$20$', '$36$'],
      answer: 1,
      solution:
        'The given triangle has perimeter $9 + 12 + 15 = 36$, so the scale factor is $\\frac{48}{36} = \\frac{4}{3}$. The shortest side scales to $9 \\times \\frac{4}{3} = 12$ ✓. Check by listing the full large triangle: $12$, $16$, $20$, and $12 + 16 + 20 = 48$ ✓ — the perimeter closes, and $12$ is the smallest entry on the list. Note that the answer happens to equal the middle side of the ORIGINAL triangle; the two are different sides of different triangles that share a number. ($16$ is SCALING THE WRONG SIDE, $12 \\times \\frac{4}{3}$, the middle side ✗; $20$ is ANSWERING THE LONGEST SIDE, $15 \\times \\frac{4}{3}$ ✗; $36$ is ANSWERING THE SMALL PERIMETER instead of finishing ✗.)',
    },
    {
      q: 'A triangle has sides $7$, $24$, and $25$, as shown. A similar triangle has perimeter $112$. What is the SHORTEST side of the larger triangle?',
      fig: {
        view: [-1.5, -2, 26.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [24, 7]], fill: false },
          { t: 'right', at: [24, 0], from: [0, 0], to: [24, 7] },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [24, 3.5], text: '7', dx: 10, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: -10, dy: -8 },
        ],
      },
      choices: ['$14$', '$48$', '$50$', '$56$'],
      answer: 0,
      solution:
        'The small triangle has perimeter $7 + 24 + 25 = 56$, so the scale factor is $\\frac{112}{56} = 2$. The shortest side doubles: $7 \\times 2 = 14$ ✓. Check by rebuilding the large triangle side by side: $14$, $48$, $50$, and $14 + 48 + 50 = 112$ ✓ — the required perimeter appears exactly, with $14$ the smallest of the three. ($48$ is SCALING THE WRONG SIDE, $24 \\times 2$, the middle side ✗; $50$ is ANSWERING THE LONGEST SIDE, $25 \\times 2$ ✗; $56$ is ANSWERING THE SMALL PERIMETER, the halfway number, not a side at all ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  sections: { '5.1': s51 },
}
