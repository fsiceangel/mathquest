// Introduction to Geometry chapter 4 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    hunting the factor pair of the area with the right sum vs. the difference
//    of squares $(l-w)^2 = (l+w)^2 - 4lw$ (slot 1); "rectangle perimeter plus
//    $2d$ per notch" vs. adding every edge of the boundary one by one (slot 2);
//    naming the most lopsided rectangle vs. completing the square on $k(s-k)$
//    so the minimum is forced (slot 3); computing the area and solving for the
//    new height vs. scaling the old height by the ratio of the bases (slot 4);
//    the trapezoid formula vs. slicing into two right triangles and a rectangle
//    (slot 5); outer rectangle minus inner rectangle vs. four edge strips plus
//    four corner squares (slot 6); equal triangles on the parallel base minus
//    the shared piece vs. the ratio $XA:XC = XB:XD$ pushed through the point
//    $X$ (slot 7); five congruent squares vs. the bounding square minus its
//    four corners (slot 8); halving with two successive medians vs. the
//    half-scale similar triangle whose area is a quarter (slot 9); splitting
//    the whole into equal shares vs. finding the other piece and subtracting
//    it from the whole (slot 10); solving the perimeter equation for the width
//    vs. rewriting everything in terms of the length alone (slot 11); the
//    three-equal-pieces property of the centroid vs. the centroid sitting one
//    third of the way up, so the piece has one third of the height (slot 12).
//  - Every figure is coordinate-exact: notched rectangles use integer
//    coordinates and closed polys; every trapezoid height is a true vertical
//    dropped from a top vertex; the diagonals of slot 7 are drawn between the
//    labeled vertices and the point X sits at their computed intersection
//    ((5, 3.125), (6, 4.5), and (4.5, 3) respectively).
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this challenge set are: ANSWERING WITH
//    THE SHORTER SIDE, ANSWERING WITH THE HALF-PERIMETER SUM, GRABBING A
//    FACTOR PAIR WITH THE WRONG SUM, FORGETTING THE NOTCH WALLS, SUBTRACTING
//    INSTEAD OF ADDING, COUNTING ONLY ONE NOTCH, ADDING THE NOTCH FLOOR AS NEW
//    BOUNDARY, TREATING THE NOTCHES AS DEPTH ONE, ADDING EACH NOTCH'S FULL
//    PERIMETER, ANSWERING THE LARGEST AREA, STOPPING ONE STEP FROM THE END,
//    ANSWERING THE HALF-PERIMETER, COPYING THE GIVEN HEIGHT, DIVIDING THE AREA
//    BY THE BASE, FORGETTING THE HALF, MIXING UP THE BASES, USING ONLY THE
//    LONG BASE, USING ONLY THE SHORT BASE, ANSWERING THE OUTER AREA, ADDING
//    THE WIDTH ONLY ONCE, ANSWERING THE INNER AREA, MISSING THE CORNER
//    SQUARES, DOUBLING, HALVING, DEMANDING EXTRA INFORMATION, ANSWERING THE
//    BOUNDING SQUARE, DROPPING THE CENTER SQUARE, ANSWERING THE PERIMETER,
//    HALVING ONLY ONCE, ANSWERING THE OTHER PIECE, HALVING ONE TIME TOO MANY,
//    ANSWERING THE SMALLER PIECE, TREATING THE POINT AS A MIDPOINT, DEMANDING
//    THE HEIGHT, MISREADING THE GIVEN AREA, ANSWERING WITH ONE SHARE,
//    ANSWERING THE SIDE SUM, ANSWERING THE LENGTH, DOUBLING INSTEAD OF
//    TRIPLING, QUADRUPLING, COPYING THE GIVEN AREA, and TREATING THE PIECE AS
//    ONE SIXTH.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — perimeter and area both given; recover the longer side.
  // Lane: 11 / 9 / 15.
  [
    {
      q: 'A rectangular photograph has perimeter $38$ and area $88$. What is the length of its longer side?',
      choices: ['$11$', '$8$', '$19$', '$22$'],
      answer: 0,
      solution:
        'The two sides add to half the perimeter, $\\frac{38}{2} = 19$, and multiply to $88$. Hunt through the factor pairs of $88$: $1 \\cdot 88$, $2 \\cdot 44$, $4 \\cdot 22$, $8 \\cdot 11$ — only $8 + 11 = 19$ hits the required sum, so the sides are $8$ and $11$ and the longer one is $11$ ✓. Check a second, independent way that never lists a single factor. With sum $s = 19$ and product $p = 88$, the gap between the sides obeys $(l - w)^2 = s^2 - 4p = 361 - 352 = 9$, so $l - w = 3$, and the longer side is $\\frac{19 + 3}{2} = 11$ ✓. Confirm both givens: $11 \\cdot 8 = 88$ and $2(11 + 8) = 38$ ✓. (The choice $8$ is ANSWERING WITH THE SHORTER SIDE; the choice $19$ is ANSWERING WITH THE HALF-PERIMETER SUM; the choice $22$ is GRABBING A FACTOR PAIR WITH THE WRONG SUM, since $4 \\cdot 22 = 88$ but $4 + 22 = 26$, not $19$.)',
    },
    {
      q: 'A rectangular garden takes exactly $30$ meters of fence to enclose and exactly $54$ square meters of sod to cover. How long is its longer side, in meters?',
      choices: ['$6$', '$9$', '$15$', '$27$'],
      answer: 1,
      solution:
        'The fence gives the perimeter and the sod gives the area, so the sides add to $\\frac{30}{2} = 15$ and multiply to $54$. Run the factor pairs of $54$: $1 \\cdot 54$, $2 \\cdot 27$, $3 \\cdot 18$, $6 \\cdot 9$ — and only $6 + 9 = 15$ matches. The sides are $6$ and $9$, so the longer side is $9$ meters ✓. Check a second, independent way through the difference of squares: $(l - w)^2 = 15^2 - 4 \\cdot 54 = 225 - 216 = 9$, so the sides differ by $3$, and the longer one is $\\frac{15 + 3}{2} = 9$ ✓. Both givens check: $9 \\cdot 6 = 54$ and $2(9 + 6) = 30$ ✓. (The choice $6$ is ANSWERING WITH THE SHORTER SIDE; the choice $15$ is ANSWERING WITH THE HALF-PERIMETER SUM; the choice $27$ is GRABBING A FACTOR PAIR WITH THE WRONG SUM, from $2 \\cdot 27 = 54$ with sum $29$.)',
    },
    {
      q: 'A rectangle has area $105$ and perimeter $44$. Find the length of its longer side.',
      choices: ['$7$', '$21$', '$22$', '$15$'],
      answer: 3,
      solution:
        'The sides add to $\\frac{44}{2} = 22$ and multiply to $105$. Factor pairs of $105$: $1 \\cdot 105$, $3 \\cdot 35$, $5 \\cdot 21$, $7 \\cdot 15$ — only $7 + 15 = 22$ works, so the sides are $7$ and $15$ and the longer is $15$ ✓. Check a second, independent way with no factoring at all: $(l - w)^2 = 22^2 - 4 \\cdot 105 = 484 - 420 = 64$, so $l - w = 8$ and the longer side is $\\frac{22 + 8}{2} = 15$ ✓. Confirm: $15 \\cdot 7 = 105$ and $2(15 + 7) = 44$ ✓. (The choice $7$ is ANSWERING WITH THE SHORTER SIDE; the choice $22$ is ANSWERING WITH THE HALF-PERIMETER SUM; the choice $21$ is GRABBING A FACTOR PAIR WITH THE WRONG SUM, from $5 \\cdot 21 = 105$ with sum $26$.)',
    },
  ],

  // slot 2 — notches cut into a rectangle; perimeter grows by 2d per notch.
  // Lane: 38 / 38 / 44.
  [
    {
      q: 'Two square slots, each $1 \\times 1$, are milled into the top edge of an $11 \\times 6$ metal plate, as shown. What is the perimeter of the resulting shape?',
      fig: {
        view: [-1.5, -1.5, 12.5, 7.5],
        alt: 'An 11 by 6 rectangle with two small square slots cut into its top edge',
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 6], [9, 6], [9, 5], [8, 5], [8, 6], [4, 6], [4, 5], [3, 5], [3, 6], [0, 6]] },
          { t: 'label', p: [5.5, -0.7], text: '11' },
          { t: 'label', p: [11.7, 3], text: '6' },
          { t: 'label', p: [3.5, 4.4], text: '1' },
          { t: 'label', p: [8.5, 4.4], text: '1' },
        ],
      },
      choices: ['$34$', '$30$', '$36$', '$38$'],
      answer: 3,
      solution:
        'The plate starts at $2(11 + 6) = 34$. Each slot removes a piece of the top edge but lays its floor right back, so the horizontal lengths balance; what is new is the pair of side walls, each of depth $1$, adding $2$ per slot. Two slots give $34 + 2 + 2 = 38$ ✓. Check a second, independent way by walking the whole boundary and adding every edge: $11 + 6 + 2 + 1 + 1 + 1 + 4 + 1 + 1 + 1 + 3 + 6 = 38$ ✓. Cutting material away made the boundary LONGER — perimeter and area move independently. (The choice $34$ is FORGETTING THE NOTCH WALLS; the choice $30$ is SUBTRACTING INSTEAD OF ADDING, as if a cut must shorten the boundary; the choice $36$ is COUNTING ONLY ONE NOTCH.)',
    },
    {
      q: 'Two square notches, each $1 \\times 1$, are cut upward into the bottom edge of a $10 \\times 7$ rectangle, as shown. What is the perimeter of the resulting shape?',
      fig: {
        view: [-1.5, -1.5, 11.5, 8.5],
        alt: 'A 10 by 7 rectangle with two small square notches cut into its bottom edge',
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [2, 1], [3, 1], [3, 0], [6, 0], [6, 1], [7, 1], [7, 0], [10, 0], [10, 7], [0, 7]] },
          { t: 'label', p: [5, 7.6], text: '10' },
          { t: 'label', p: [10.7, 3.5], text: '7' },
          { t: 'label', p: [2.5, 1.55], text: '1' },
          { t: 'label', p: [6.5, 1.55], text: '1' },
        ],
      },
      choices: ['$38$', '$34$', '$40$', '$36$'],
      answer: 0,
      solution:
        'The rectangle alone has perimeter $2(10 + 7) = 34$. Each notch trades away a piece of the bottom edge for a floor of the same width — no change — and then contributes two brand-new walls of depth $1$, adding $2$. With two notches, $34 + 4 = 38$ ✓. Check a second, independent way by summing every edge along the boundary: across the bottom, $2 + 1 + 1 + 1 + 3 + 1 + 1 + 1 + 3$, then up the right side $7$, across the top $10$, and down the left side $7$: the total is $14 + 7 + 10 + 7 = 38$ ✓. Notches on the bottom behave exactly like notches on the top — the boundary does not care which way is up. (The choice $34$ is FORGETTING THE NOTCH WALLS; the choice $40$ is ADDING THE NOTCH FLOOR AS NEW BOUNDARY, charging $3$ per notch instead of $2$; the choice $36$ is COUNTING ONLY ONE NOTCH.)',
    },
    {
      q: 'Two rectangular notches, each $1$ wide and $2$ deep, are cut into the top edge of a $10 \\times 8$ rectangle, as shown. What is the perimeter of the resulting shape?',
      fig: {
        view: [-1.5, -1.5, 11.5, 9.5],
        alt: 'A 10 by 8 rectangle with two narrow notches of depth 2 cut into its top edge',
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 8], [8, 8], [8, 6], [7, 6], [7, 8], [4, 8], [4, 6], [3, 6], [3, 8], [0, 8]] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [10.7, 4], text: '8' },
          { t: 'label', p: [3.5, 5.45], text: '1' },
          { t: 'label', p: [2.45, 7], text: '2' },
          { t: 'label', p: [7.5, 5.45], text: '1' },
          { t: 'label', p: [8.55, 7], text: '2' },
        ],
      },
      choices: ['$36$', '$40$', '$44$', '$48$'],
      answer: 2,
      solution:
        'The rectangle begins at $2(10 + 8) = 36$. A notch of depth $d$ adds $2d$: the floor replaces the removed stretch of top edge, and the two walls of depth $2$ are pure bonus, $4$ per notch. Two notches give $36 + 4 + 4 = 44$ ✓. Check a second, independent way by adding all twelve edges of the boundary: $10 + 8 + 2 + 2 + 1 + 2 + 3 + 2 + 1 + 2 + 3 + 8 = 44$ ✓. Depth is what the perimeter pays for — a deep skinny notch costs more boundary than a wide shallow one. (The choice $36$ is FORGETTING THE NOTCH WALLS; the choice $40$ is TREATING THE NOTCHES AS DEPTH ONE; the choice $48$ is ADDING EACH NOTCH’S FULL PERIMETER, $1 + 2 + 1 + 2 = 6$ per notch, which double-charges the floor.)',
    },
  ],

  // slot 3 — fixed perimeter, whole-number sides, SMALLEST area.
  // Lane: 17 / 21 / 23.
  [
    {
      q: 'A rectangle has perimeter $36$, and its side lengths are whole numbers. What is the smallest area it could have?',
      choices: ['$81$', '$17$', '$32$', '$18$'],
      answer: 1,
      solution:
        'The sides add to $\\frac{36}{2} = 18$. Area shrinks as the rectangle grows lopsided, so push to the extreme the whole numbers allow: $1 \\times 17 = 17$ ✓. Check a second, independent way with algebra instead of a hunt: write the sides as $k$ and $18 - k$, so the area is $k(18 - k) = 81 - (k - 9)^2$. The farther $k$ sits from $9$, the smaller this gets, and the farthest a positive whole number can sit is $k = 1$, giving $81 - 64 = 17$ ✓. For comparison, the next-most-lopsided option $2 \\times 16 = 32$ is already nearly double. (The choice $81$ is ANSWERING THE LARGEST AREA, the $9 \\times 9$ square at the other extreme; the choice $32$ is STOPPING ONE STEP FROM THE END at $2 \\times 16$; the choice $18$ is ANSWERING THE HALF-PERIMETER instead of an area.)',
    },
    {
      q: 'A loop of string of length $44$ is pulled taut into a rectangle whose side lengths are whole numbers. What is the smallest area the rectangle could enclose?',
      choices: ['$121$', '$40$', '$21$', '$22$'],
      answer: 2,
      solution:
        'The loop is the perimeter, so the two sides add to $\\frac{44}{2} = 22$. The most lopsided whole-number rectangle is $1 \\times 21$, with area $21$ ✓. Check a second, independent way: sides $k$ and $22 - k$ give area $k(22 - k) = 121 - (k - 11)^2$, which drops as $k$ leaves $11$; the whole-number extreme is $k = 1$, where the area is $121 - 100 = 21$ ✓. Same string, wildly different areas: the square build holds $121$, almost six times as much. (The choice $121$ is ANSWERING THE LARGEST AREA; the choice $40$ is STOPPING ONE STEP FROM THE END at $2 \\times 20$; the choice $22$ is ANSWERING THE HALF-PERIMETER.)',
    },
    {
      q: 'A farmer bends $48$ meters of fencing into a rectangle with whole-number side lengths. What is the smallest area, in square meters, the fence could enclose?',
      choices: ['$23$', '$144$', '$44$', '$24$'],
      answer: 0,
      solution:
        'The sides add to $\\frac{48}{2} = 24$, and the skinniest whole-number pen is $1 \\times 23$, enclosing just $23$ square meters ✓. Check a second, independent way: with sides $k$ and $24 - k$, the area is $k(24 - k) = 144 - (k - 12)^2$, smallest when $k$ is as far from $12$ as possible — at $k = 1$ it is $144 - 121 = 23$ ✓. A fence this long could enclose $144$ square meters as a square; shape matters enormously. (The choice $144$ is ANSWERING THE LARGEST AREA; the choice $44$ is STOPPING ONE STEP FROM THE END at $2 \\times 22$; the choice $24$ is ANSWERING THE HALF-PERIMETER.)',
    },
  ],

  // slot 4 — one base-height pair fixes the area; find the height to another
  // side. Lane: 5 / 10 / 9.
  [
    {
      q: 'One side of a triangle has length $10$, and the height to that side is $4$. What is the height to a side of length $8$?',
      choices: ['$4$', '$2.5$', '$5$', '$10$'],
      answer: 2,
      solution:
        'One triangle, one area: $\\frac{1}{2} \\cdot 10 \\cdot 4 = 20$. Using the side of length $8$ as the base, $20 = \\frac{1}{2} \\cdot 8 \\cdot h = 4h$, so $h = 5$ ✓. Check a second, independent way that never computes the area: base times height is locked at twice the area, so heights scale INVERSELY with bases — $h = 4 \\cdot \\frac{10}{8} = 5$ ✓. A shorter base must carry a taller height. (The choice $4$ is COPYING THE GIVEN HEIGHT, as if every side had the same one; the choice $2.5$ is DIVIDING THE AREA BY THE BASE, $20 \\div 8$, forgetting the formula’s half; the choice $10$ is FORGETTING THE HALF from the start, treating $10 \\cdot 4 = 40$ as the area.)',
    },
    {
      q: 'In triangle $ABC$, $AB = 12$ and the height from $C$ to line $AB$ is $5$. If $BC = 6$, what is the height from $A$ to line $BC$?',
      choices: ['$5$', '$2.5$', '$20$', '$10$'],
      answer: 3,
      solution:
        'The area is pinned by the first pair: $[ABC] = \\frac{1}{2} \\cdot 12 \\cdot 5 = 30$. Switching the base to $BC$, $30 = \\frac{1}{2} \\cdot 6 \\cdot h = 3h$, so $h = 10$ ✓. Check a second, independent way by pure proportion: the base shrank by the factor $\\frac{12}{6} = 2$, so the height must grow by the same factor, $5 \\cdot 2 = 10$ ✓. The product of base and height never budges. (The choice $5$ is COPYING THE GIVEN HEIGHT; the choice $2.5$ is MIXING UP THE BASES and computing $30 \\div 12$; the choice $20$ is FORGETTING THE HALF, treating $12 \\cdot 5 = 60$ as the area.)',
    },
    {
      q: 'A triangle has a side of length $9$, and the height to that side is $8$. What is the height to a side of length $8$?',
      choices: ['$8$', '$9$', '$4.5$', '$18$'],
      answer: 1,
      solution:
        'The area is $\\frac{1}{2} \\cdot 9 \\cdot 8 = 36$. With the side of length $8$ as the base, $36 = \\frac{1}{2} \\cdot 8 \\cdot h = 4h$, so $h = 9$ ✓. Check a second, independent way by scaling: the base changed by the factor $\\frac{9}{8}$, so the height changes by the same factor the other way, $8 \\cdot \\frac{9}{8} = 9$ ✓. The numbers trade places — base $9$ with height $8$ carries exactly the same area as base $8$ with height $9$. (The choice $8$ is COPYING THE GIVEN HEIGHT; the choice $4.5$ is DIVIDING THE AREA BY THE BASE, $36 \\div 8$; the choice $18$ is FORGETTING THE HALF, treating $9 \\cdot 8 = 72$ as the area.)',
    },
  ],

  // slot 5 — trapezoid area with the height drawn in. Lane: 63 / 54 / 80.
  [
    {
      q: 'A trapezoid has parallel sides $12$ and $6$, and the dashed segment marks its height of $7$. What is its area?',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.5],
        alt: 'A trapezoid with bottom base 12, top base 6, and a dashed height of 7',
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [9, 7], [3, 7]] },
          { t: 'seg', a: [3, 7], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 7], to: [12, 0] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [6, 7.5], text: '6' },
          { t: 'label', p: [2.4, 3.5], text: '7' },
        ],
      },
      choices: ['$63$', '$126$', '$84$', '$42$'],
      answer: 0,
      solution:
        'Average the parallel sides and multiply by the height: $\\frac{1}{2}(12 + 6) \\cdot 7 = 9 \\cdot 7 = 63$ ✓. Check a second, independent way by slicing along the dashed height and its mirror on the right: a left right-triangle with legs $3$ and $7$ (area $10.5$), a $6 \\times 7$ rectangle (area $42$), and a right right-triangle with legs $3$ and $7$ (area $10.5$), totalling $10.5 + 42 + 10.5 = 63$ ✓. The trapezoid behaves like a rectangle of width $9$, the average of its two bases. (The choice $126$ is FORGETTING THE HALF; the choice $84$ is USING ONLY THE LONG BASE, $12 \\cdot 7$; the choice $42$ is USING ONLY THE SHORT BASE, $6 \\cdot 7$.)',
    },
    {
      q: 'The trapezoid shown has parallel sides $13$ and $5$, and the dashed segment marks its height of $6$. Find its area.',
      fig: {
        view: [-1.5, -1.5, 14.5, 7.5],
        alt: 'A trapezoid with bottom base 13, top base 5, and a dashed height of 6',
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [9, 6], [4, 6]] },
          { t: 'seg', a: [9, 6], b: [9, 0], dash: true },
          { t: 'right', at: [9, 0], from: [9, 6], to: [0, 0] },
          { t: 'label', p: [6.5, -0.7], text: '13' },
          { t: 'label', p: [6.5, 6.5], text: '5' },
          { t: 'label', p: [9.6, 3], text: '6' },
        ],
      },
      choices: ['$108$', '$78$', '$30$', '$54$'],
      answer: 3,
      solution:
        'The parallel sides are $13$ and $5$ and the height is $6$: $\\frac{1}{2}(13 + 5) \\cdot 6 = 9 \\cdot 6 = 54$ ✓. Check a second, independent way by cutting along the two heights dropped from the top vertices: a left right-triangle with legs $4$ and $6$ (area $12$), a $5 \\times 6$ rectangle in the middle (area $30$), and a right right-triangle with legs $4$ and $6$ (area $12$), and $12 + 30 + 12 = 54$ ✓. Averaging the bases is what earns the formula its keep. (The choice $108$ is FORGETTING THE HALF; the choice $78$ is USING ONLY THE LONG BASE, $13 \\cdot 6$; the choice $30$ is USING ONLY THE SHORT BASE, $5 \\cdot 6$.)',
    },
    {
      q: 'What is the area of a trapezoid with parallel sides $14$ and $6$ whose height, drawn dashed, is $8$?',
      fig: {
        view: [-1.5, -1.5, 15.5, 9.5],
        alt: 'A trapezoid with bottom base 14, top base 6, and a dashed height of 8',
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [10, 8], [4, 8]] },
          { t: 'seg', a: [4, 8], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 8], to: [14, 0] },
          { t: 'label', p: [7, -0.7], text: '14' },
          { t: 'label', p: [7, 8.5], text: '6' },
          { t: 'label', p: [3.4, 4], text: '8' },
        ],
      },
      choices: ['$160$', '$80$', '$112$', '$48$'],
      answer: 1,
      solution:
        'Apply the formula: $\\frac{1}{2}(14 + 6) \\cdot 8 = 10 \\cdot 8 = 80$ ✓. Check a second, independent way by decomposition: the two heights dropped from the top vertices carve off a left right-triangle with legs $4$ and $8$ (area $16$), a middle $6 \\times 8$ rectangle (area $48$), and a right right-triangle with legs $4$ and $8$ (area $16$), and $16 + 48 + 16 = 80$ ✓. Both roads meet at $80$. (The choice $160$ is FORGETTING THE HALF; the choice $112$ is USING ONLY THE LONG BASE, $14 \\cdot 8$; the choice $48$ is USING ONLY THE SHORT BASE, $6 \\cdot 8$.)',
    },
  ],

  // slot 6 — uniform border around a rectangle; big minus small.
  // Lane: 80 / 68 / 96.
  [
    {
      q: 'A rectangular pond measures $10 \\times 6$. A wooden deck of uniform width $2$ surrounds it on all four sides. What is the area of the deck?',
      choices: ['$140$', '$80$', '$36$', '$60$'],
      answer: 1,
      solution:
        'The deck adds $2$ on BOTH ends of each dimension, so pond plus deck spans $(10 + 4) \\times (6 + 4) = 14 \\times 10 = 140$. Subtract the pond: $140 - 60 = 80$ ✓. Check a second, independent way by building the deck from parts: two long strips along the $10$-sides, $2 \\cdot (10 \\cdot 2) = 40$; two short strips along the $6$-sides, $2 \\cdot (6 \\cdot 2) = 24$; and the four $2 \\times 2$ corner squares, $4 \\cdot 4 = 16$. Total: $40 + 24 + 16 = 80$ ✓. (The choice $140$ is ANSWERING THE OUTER AREA without removing the pond; the choice $36$ is ADDING THE WIDTH ONLY ONCE per dimension, $12 \\times 8 - 60$; the choice $60$ is ANSWERING THE INNER AREA, the pond itself.)',
    },
    {
      q: 'An $8 \\times 5$ flower bed is surrounded on all sides by a gravel path of uniform width $2$. What is the area of the path?',
      choices: ['$68$', '$108$', '$30$', '$40$'],
      answer: 0,
      solution:
        'Bed plus path forms a $(8 + 4) \\times (5 + 4) = 12 \\times 9 = 108$ rectangle, since the width $2$ appears on both sides of each dimension. Removing the bed leaves $108 - 40 = 68$ ✓. Check a second, independent way, piece by piece: two strips along the $8$-sides give $2 \\cdot (8 \\cdot 2) = 32$, two strips along the $5$-sides give $2 \\cdot (5 \\cdot 2) = 20$, and the four $2 \\times 2$ corners give $16$; the sum is $32 + 20 + 16 = 68$ ✓. The corners belong to the path but touch no side of the bed — the strip picture is what catches them. (The choice $108$ is ANSWERING THE OUTER AREA; the choice $30$ is ADDING THE WIDTH ONLY ONCE, $10 \\times 7 - 40$; the choice $40$ is ANSWERING THE INNER AREA.)',
    },
    {
      q: 'A $12 \\times 8$ skating rink is bordered on all four sides by a rubber mat of uniform width $2$. What is the area of the mat?',
      choices: ['$192$', '$44$', '$96$', '$80$'],
      answer: 2,
      solution:
        'Rink plus mat spans $(12 + 4) \\times (8 + 4) = 16 \\times 12 = 192$, and subtracting the rink leaves $192 - 96 = 96$ ✓. Check a second, independent way from strips and corners: the two long strips give $2 \\cdot (12 \\cdot 2) = 48$, the two short strips give $2 \\cdot (8 \\cdot 2) = 32$, and the four $2 \\times 2$ corner squares give $16$, so $48 + 32 + 16 = 96$ ✓. A pleasant coincidence: this mat covers exactly as much ground as the rink it wraps. (The choice $192$ is ANSWERING THE OUTER AREA; the choice $44$ is ADDING THE WIDTH ONLY ONCE, $14 \\times 10 - 96$; the choice $80$ is MISSING THE CORNER SQUARES, counting the four strips but not the $16$ in the corners.)',
    },
  ],

  // slot 7 — trapezoid diagonals; the two side triangles are equal.
  // Lane: 14 / 19 / 21. The middle lane hands over [AXD] and asks for [BXC],
  // so the equality is exercised in both directions across the round.
  [
    {
      q: 'In trapezoid $ABCD$ shown, $AB$ is parallel to $DC$, and the diagonals meet at $X$. If $[BXC] = 14$, what is $[AXD]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 6.5],
        alt: 'Trapezoid ABCD with parallel sides AB and DC and diagonals crossing at X',
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [8, 5], [2, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 5] },
          { t: 'seg', a: [10, 0], b: [2, 5] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [8, 5], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [2, 5], label: 'D', dx: -8, dy: -10 },
          { t: 'point', p: [5, 3.125], label: 'X', dx: 0, dy: -14 },
        ],
      },
      choices: ['$28$', '$7$', '$14$', 'It cannot be determined'],
      answer: 2,
      solution:
        'Triangles $ABC$ and $ABD$ share the base $AB$, and their apexes $C$ and $D$ ride the parallel line $DC$, so $[ABC] = [ABD]$. Each contains the middle triangle $ABX$; subtracting it from both sides leaves $[BXC] = [AXD]$, so $[AXD] = 14$ ✓. Check a second, independent way through the point $X$ itself. Since $AB \\parallel DC$, triangles $XAB$ and $XCD$ are similar, giving $XA : XC = XB : XD$. Triangles $AXD$ and $CXD$ have bases $XA$ and $XC$ on one line and share the apex $D$, so $[AXD] : [CXD] = XA : XC$; likewise $[BXC] : [CXD] = XB : XD$. Equal ratios of the same quantity force $[AXD] = [BXC] = 14$ ✓. (The choice $28$ is DOUBLING; the choice $7$ is HALVING; the last choice is DEMANDING EXTRA INFORMATION — the equality holds in every trapezoid, whatever its measurements.)',
    },
    {
      q: 'In trapezoid $ABCD$ shown, $AB$ is parallel to $DC$, and the diagonals cross at $X$. If $[AXD] = 19$, what is $[BXC]$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 7.5],
        alt: 'Trapezoid ABCD with parallel sides AB and DC and diagonals crossing at X',
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [8, 6], [4, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 6] },
          { t: 'seg', a: [12, 0], b: [4, 6] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [8, 6], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [4, 6], label: 'D', dx: -8, dy: -10 },
          { t: 'point', p: [6, 4.5], label: 'X', dx: 0, dy: -14 },
        ],
      },
      choices: ['$38$', '$19$', '$9.5$', 'It cannot be determined'],
      answer: 1,
      solution:
        'The equal pair works in both directions. Triangles $ABD$ and $ABC$ stand on the same base $AB$ with apexes $D$ and $C$ on the parallel line $DC$, so $[ABD] = [ABC]$; peel the shared triangle $ABX$ off each, and $[AXD] = [BXC]$ remains. So $[BXC] = 19$ ✓. Check a second, independent way with ratios at $X$: from $AB \\parallel DC$, triangles $XAB$ and $XCD$ are similar, so $XB : XD = XA : XC$. Comparing each side triangle to $CXD$ along a diagonal, $[BXC] : [CXD] = XB : XD$ and $[AXD] : [CXD] = XA : XC$ — equal ratios, so $[BXC] = [AXD] = 19$ ✓. (The choice $38$ is DOUBLING; the choice $9.5$ is HALVING; the last choice is DEMANDING EXTRA INFORMATION, when the parallel sides alone already settle it.)',
    },
    {
      q: 'The diagonals of trapezoid $ABCD$ shown meet at $X$, and $AB$ is parallel to $DC$. Given $[BXC] = 21$, find $[AXD]$.',
      fig: {
        view: [-1.5, -1.5, 10.5, 5.5],
        alt: 'Trapezoid ABCD with parallel sides AB and DC and diagonals crossing at X',
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 4], [3, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [6, 4] },
          { t: 'seg', a: [9, 0], b: [3, 4] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [6, 4], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [3, 4], label: 'D', dx: -8, dy: -10 },
          { t: 'point', p: [4.5, 3], label: 'X', dx: 0, dy: -14 },
        ],
      },
      choices: ['$42$', '$10.5$', 'It cannot be determined', '$21$'],
      answer: 3,
      solution:
        'Slide the apex along the top: triangles $ABC$ and $ABD$ share base $AB$ and have their apexes on line $DC$, parallel to $AB$, so $[ABC] = [ABD]$. Both contain $ABX$, and removing it from each leaves $[BXC] = [AXD]$. Hence $[AXD] = 21$ ✓. Check a second, independent way via the similar triangles $XAB$ and $XCD$ (they exist because $AB \\parallel DC$): $XA : XC = XB : XD$. Then $[AXD] : [CXD] = XA : XC$ and $[BXC] : [CXD] = XB : XD$, since each pair shares a height along a diagonal — so the two side triangles are the same multiple of $[CXD]$, and $[AXD] = [BXC] = 21$ ✓. (The choice $42$ is DOUBLING; the choice $10.5$ is HALVING; the remaining choice is DEMANDING EXTRA INFORMATION.)',
    },
  ],

  // slot 8 — plus-shaped figure with all twelve sides equal; area is 5 s^2.
  // Lane: 125 / 20 / 180.
  [
    {
      q: 'Every side of the plus-shaped figure shown has length $5$, and every angle is a right angle. What is its area?',
      fig: {
        view: [-1.5, -1.5, 16.5, 16.5],
        alt: 'A plus-shaped figure made of five squares of side 5',
        elems: [
          { t: 'poly', pts: [[5, 0], [10, 0], [10, 5], [15, 5], [15, 10], [10, 10], [10, 15], [5, 15], [5, 10], [0, 10], [0, 5], [5, 5]] },
          { t: 'label', p: [7.5, -0.8], text: '5' },
          { t: 'label', p: [15.7, 7.5], text: '5' },
        ],
      },
      choices: ['$225$', '$100$', '$60$', '$125$'],
      answer: 3,
      solution:
        'Build it from squares: a center $5 \\times 5$ square with four $5 \\times 5$ arms attached, five squares in all, so the area is $5 \\cdot 25 = 125$ ✓. Check a second, independent way by subtraction: the plus fits snugly in a $15 \\times 15$ bounding square, from which the four $5 \\times 5$ corner squares are missing, $225 - 4 \\cdot 25 = 225 - 100 = 125$ ✓. Five squares built up, or nine minus four torn down — the count agrees. (The choice $225$ is ANSWERING THE BOUNDING SQUARE; the choice $100$ is DROPPING THE CENTER SQUARE and counting only the four arms; the choice $60$ is ANSWERING THE PERIMETER, $12 \\cdot 5$.)',
    },
    {
      q: 'A tile in the shape of a plus sign has twelve sides, all of length $2$, and every angle is a right angle. What is the area of the tile?',
      fig: {
        view: [-1, -1, 7, 7],
        alt: 'A plus-shaped tile made of five squares of side 2',
        elems: [
          { t: 'poly', pts: [[2, 0], [4, 0], [4, 2], [6, 2], [6, 4], [4, 4], [4, 6], [2, 6], [2, 4], [0, 4], [0, 2], [2, 2]] },
          { t: 'label', p: [3, -0.6], text: '2' },
          { t: 'label', p: [6.6, 3], text: '2' },
        ],
      },
      choices: ['$36$', '$16$', '$20$', '$24$'],
      answer: 2,
      solution:
        'The tile is five $2 \\times 2$ squares — one in the center and one in each arm — so its area is $5 \\cdot 4 = 20$ ✓. Check a second, independent way from the outside in: the bounding square is $6 \\times 6 = 36$, and the four missing $2 \\times 2$ corners take away $16$, leaving $36 - 16 = 20$ ✓. (The choice $36$ is ANSWERING THE BOUNDING SQUARE; the choice $16$ is DROPPING THE CENTER SQUARE, four arms with no middle; the choice $24$ is ANSWERING THE PERIMETER, $12 \\cdot 2$.)',
    },
    {
      q: 'The plus-shaped patio shown has twelve sides, all of length $6$, and every angle is a right angle. Find its area.',
      fig: {
        view: [-1.5, -1.5, 19.8, 19.5],
        alt: 'A plus-shaped patio made of five squares of side 6',
        elems: [
          { t: 'poly', pts: [[6, 0], [12, 0], [12, 6], [18, 6], [18, 12], [12, 12], [12, 18], [6, 18], [6, 12], [0, 12], [0, 6], [6, 6]] },
          { t: 'label', p: [9, -0.9], text: '6' },
          { t: 'label', p: [18.8, 9], text: '6' },
        ],
      },
      choices: ['$180$', '$324$', '$144$', '$72$'],
      answer: 0,
      solution:
        'Tile the patio with $6 \\times 6$ squares: the center plus four arms makes five, so the area is $5 \\cdot 36 = 180$ ✓. Check a second, independent way by surrounding it: the bounding square is $18 \\times 18 = 324$, and each of the four notched corners is a missing $6 \\times 6$ square, so $324 - 4 \\cdot 36 = 324 - 144 = 180$ ✓. (The choice $324$ is ANSWERING THE BOUNDING SQUARE; the choice $144$ is DROPPING THE CENTER SQUARE; the choice $72$ is ANSWERING THE PERIMETER, $12 \\cdot 6$.)',
    },
  ],

  // slot 9 — midpoints of two sides cut off one quarter of the triangle.
  // Lane: 22 / 14 / 17.
  [
    {
      q: 'In triangle $PQR$, $M$ is the midpoint of $PQ$ and $N$ is the midpoint of $PR$. If $[PQR] = 88$, what is $[PMN]$?',
      choices: ['$22$', '$44$', '$66$', '$11$'],
      answer: 0,
      solution:
        'Halve twice. The median $RM$ splits the triangle: $[PMR] = \\frac{1}{2} \\cdot 88 = 44$. Inside triangle $PMR$, the segment $MN$ runs from $M$ to the midpoint $N$ of side $PR$, so it is a median of THAT triangle and halves it again: $[PMN] = \\frac{1}{2} \\cdot 44 = 22$ ✓. Check a second, independent way with similarity: triangle $PMN$ has $PM = \\frac{1}{2}PQ$ and $PN = \\frac{1}{2}PR$ around the shared angle at $P$, so it is a half-scale copy of triangle $PQR$, and areas scale by the SQUARE of the factor: $\\left(\\frac{1}{2}\\right)^2 \\cdot 88 = 22$ ✓. (The choice $44$ is HALVING ONLY ONCE; the choice $66$ is ANSWERING THE OTHER PIECE, the part of the triangle outside the corner; the choice $11$ is HALVING ONE TIME TOO MANY.)',
    },
    {
      q: 'In triangle $ABC$, the midpoints of sides $AB$ and $AC$ are joined by a segment, cutting off a corner triangle at $A$. If $[ABC] = 56$, what is the area of the corner triangle?',
      choices: ['$28$', '$14$', '$42$', '$7$'],
      answer: 1,
      solution:
        'Call the midpoints $M$ on $AB$ and $N$ on $AC$. The median $CM$ gives $[AMC] = \\frac{1}{2} \\cdot 56 = 28$, and then $MN$ is a median of triangle $AMC$ (it ends at the midpoint of $AC$), so $[AMN] = \\frac{1}{2} \\cdot 28 = 14$ ✓. Check a second, independent way: triangle $AMN$ shares the angle at $A$ and has both surrounding sides half as long, so it is similar to triangle $ABC$ with ratio $\\frac{1}{2}$, and its area is $\\left(\\frac{1}{2}\\right)^2 \\cdot 56 = 14$ ✓. Connecting two midpoints always slices off exactly one quarter. (The choice $28$ is HALVING ONLY ONCE; the choice $42$ is ANSWERING THE OTHER PIECE, the trapezoid left behind; the choice $7$ is HALVING ONE TIME TOO MANY.)',
    },
    {
      q: 'In triangle $DEF$, $P$ is the midpoint of $DE$ and $Q$ is the midpoint of $DF$. Given $[DEF] = 68$, find $[DPQ]$.',
      choices: ['$34$', '$8.5$', '$51$', '$17$'],
      answer: 3,
      solution:
        'Two halvings do it. The median $FP$ cuts the triangle in half, $[DPF] = \\frac{1}{2} \\cdot 68 = 34$; then $PQ$ is a median of triangle $DPF$, since $Q$ is the midpoint of side $DF$, so $[DPQ] = \\frac{1}{2} \\cdot 34 = 17$ ✓. Check a second, independent way through scaling: $DP = \\frac{1}{2}DE$ and $DQ = \\frac{1}{2}DF$ flank the common angle at $D$, so triangle $DPQ$ is a half-scale copy of triangle $DEF$ and carries $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ of its area: $\\frac{68}{4} = 17$ ✓. (The choice $34$ is HALVING ONLY ONCE; the choice $51$ is ANSWERING THE OTHER PIECE, $68 - 17$; the choice $8.5$ is HALVING ONE TIME TOO MANY.)',
    },
  ],

  // slot 10 — a point splits the base in a given ratio; areas follow the
  // bases. Lane: 51 / 58 / 55.
  [
    {
      q: 'Point $D$ lies on side $BC$ of triangle $ABC$ with $BD : DC = 1 : 3$. If $[ABC] = 68$, what is $[ACD]$?',
      choices: ['$17$', '$34$', 'It cannot be determined', '$51$'],
      answer: 3,
      solution:
        'Triangles $ABD$ and $ACD$ share the height from $A$, so they split the whole in the base ratio $1 : 3$. That is $1 + 3 = 4$ equal shares of $\\frac{68}{4} = 17$ each, and $[ACD]$ takes the $3$ shares on the long side: $3 \\cdot 17 = 51$ ✓. Check a second, independent way by finding the other piece first: $[ABD] = \\frac{BD}{BC} \\cdot [ABC] = \\frac{1}{4} \\cdot 68 = 17$, and what remains of the whole is $[ACD] = 68 - 17 = 51$ ✓. No height was ever computed — the ratio did all the work. (The choice $17$ is ANSWERING THE SMALLER PIECE, $[ABD]$; the choice $34$ is TREATING THE POINT AS A MIDPOINT and halving; the remaining choice is DEMANDING THE HEIGHT, which the shared-height argument makes unnecessary.)',
    },
    {
      q: 'Point $S$ lies on side $QR$ of triangle $PQR$ with $QS : SR = 1 : 2$. If $[PQR] = 87$, what is $[PSR]$?',
      choices: ['$58$', '$29$', '$43.5$', '$174$'],
      answer: 0,
      solution:
        'Both small triangles hang from the same apex $P$ and stand on pieces of the same line, so their areas match their bases: $[PQS] : [PSR] = 1 : 2$. The whole splits into $3$ shares of $\\frac{87}{3} = 29$, and $[PSR]$ takes two of them: $2 \\cdot 29 = 58$ ✓. Check a second, independent way by subtraction: $[PQS] = \\frac{QS}{QR} \\cdot [PQR] = \\frac{1}{3} \\cdot 87 = 29$, so $[PSR] = 87 - 29 = 58$ ✓. (The choice $29$ is ANSWERING THE SMALLER PIECE, $[PQS]$; the choice $43.5$ is TREATING THE POINT AS A MIDPOINT; the choice $174$ is MISREADING THE GIVEN AREA as $[PQS]$ and doubling it.)',
    },
    {
      q: 'Point $M$ lies on side $KL$ of triangle $JKL$ with $KM : ML = 3 : 5$. If $[JKL] = 88$, what is $[JML]$?',
      choices: ['$33$', '$44$', '$55$', '$11$'],
      answer: 2,
      solution:
        'Triangles $JKM$ and $JML$ share the height from $J$, so the areas divide as the bases do, $3 : 5$. Cut $88$ into $3 + 5 = 8$ shares of $\\frac{88}{8} = 11$; triangle $JML$ stands on the $5$-part of the base and takes $5 \\cdot 11 = 55$ ✓. Check a second, independent way the other way around: $[JKM] = \\frac{KM}{KL} \\cdot [JKL] = \\frac{3}{8} \\cdot 88 = 33$, and subtracting from the whole gives $[JML] = 88 - 33 = 55$ ✓. Grab the piece the question names — the ratio hands you both. (The choice $33$ is ANSWERING THE SMALLER PIECE, $[JKM]$; the choice $44$ is TREATING THE POINT AS A MIDPOINT; the choice $11$ is ANSWERING WITH ONE SHARE instead of five.)',
    },
  ],

  // slot 11 — length as an expression of the width, perimeter given, AREA
  // wanted. Lane: 75 / 55 / 85.
  [
    {
      q: 'The length of a rectangle is $5$ more than twice its width, and its perimeter is $40$. What is its area?',
      choices: ['$40$', '$75$', '$20$', '$15$'],
      answer: 1,
      solution:
        'Let the width be $w$; the length is $2w + 5$. The perimeter equation $2(w + 2w + 5) = 40$ gives $3w + 5 = 20$, so $w = 5$, the length is $2 \\cdot 5 + 5 = 15$, and the area is $5 \\cdot 15 = 75$ ✓. Check a second, independent way by working in the length $l$ instead: the width is $\\frac{l - 5}{2}$, so the perimeter is $2\\left(l + \\frac{l - 5}{2}\\right) = 3l - 5 = 40$, giving $l = 15$ and width $5$ again — area $75$ ✓. The perimeter checks too: $2(5 + 15) = 40$ ✓. (The choice $40$ is ANSWERING THE PERIMETER; the choice $20$ is ANSWERING THE SIDE SUM, half the perimeter; the choice $15$ is ANSWERING THE LENGTH and stopping before the final multiply.)',
    },
    {
      q: 'The length of a rectangular banner is $1$ more than twice its width, and its perimeter is $32$. Find the area of the banner.',
      choices: ['$32$', '$16$', '$55$', '$11$'],
      answer: 2,
      solution:
        'With width $w$, the length is $2w + 1$, and the perimeter gives $2(w + 2w + 1) = 32$, so $3w + 1 = 16$ and $w = 5$. The length is $2 \\cdot 5 + 1 = 11$, so the area is $5 \\cdot 11 = 55$ ✓. Check a second, independent way from the length side: writing $w = \\frac{l - 1}{2}$, the perimeter is $2\\left(l + \\frac{l - 1}{2}\\right) = 3l - 1 = 32$, so $l = 11$, and the width $5$ follows — the same $55$ ✓. Confirm: $2(5 + 11) = 32$ ✓. (The choice $32$ is ANSWERING THE PERIMETER; the choice $16$ is ANSWERING THE SIDE SUM; the choice $11$ is ANSWERING THE LENGTH.)',
    },
    {
      q: 'A rectangular playground is $2$ meters longer than three times its width, and $44$ meters of fence exactly enclose it. What is its area, in square meters?',
      choices: ['$85$', '$44$', '$22$', '$17$'],
      answer: 0,
      solution:
        'Let the width be $w$ meters; the length is $3w + 2$. The fence is the perimeter: $2(w + 3w + 2) = 44$, so $4w + 2 = 22$ and $w = 5$. The length is $3 \\cdot 5 + 2 = 17$, and the area is $5 \\cdot 17 = 85$ ✓. Check a second, independent way in terms of the length: $w = \\frac{l - 2}{3}$, so the perimeter is $2\\left(l + \\frac{l - 2}{3}\\right) = \\frac{8l - 4}{3} = 44$, giving $8l = 136$, $l = 17$, and again the area $85$ ✓. The fence checks: $2(5 + 17) = 44$ ✓. (The choice $44$ is ANSWERING THE PERIMETER; the choice $22$ is ANSWERING THE SIDE SUM; the choice $17$ is ANSWERING THE LENGTH.)',
    },
  ],

  // slot 12 — centroid piece to whole: multiply by three. Lane: 39 / 51 / 33.
  [
    {
      q: 'The medians of triangle $PQR$ meet at the centroid $G$. If $[PQG] = 13$, what is $[PQR]$?',
      choices: ['$26$', '$52$', '$39$', '$13$'],
      answer: 2,
      solution:
        'Joining the centroid to the three vertices cuts the triangle into three pieces of EQUAL area: $[PQG] = [QRG] = [RPG]$. The whole is three of them, so $[PQR] = 3 \\cdot 13 = 39$ ✓. Check a second, independent way through heights: the centroid sits one third of the way up every median, so the distance from $G$ to line $PQ$ is one third of the distance from $R$ to line $PQ$. Sharing the base $PQ$, triangle $PQG$ then has one third of the area of triangle $PQR$, so the whole is $3 \\cdot 13 = 39$ ✓. (The choice $26$ is DOUBLING INSTEAD OF TRIPLING; the choice $52$ is QUADRUPLING; the choice $13$ is COPYING THE GIVEN AREA.)',
    },
    {
      q: 'In triangle $ABC$, the three medians intersect at the centroid $G$. Given $[ABG] = 17$, find $[ABC]$.',
      choices: ['$34$', '$102$', '$17$', '$51$'],
      answer: 3,
      solution:
        'The three triangles formed by connecting $G$ to the vertices — $[ABG]$, $[BCG]$, and $[CAG]$ — are equal, so each is one third of the whole and $[ABC] = 3 \\cdot 17 = 51$ ✓. Check a second, independent way with the one-third height: $G$ divides each median $2 : 1$, sitting one third of the way up from the side, so its height above $AB$ is $\\frac{1}{3}$ of the height of $C$ above $AB$. With the common base $AB$, that makes $[ABG] = \\frac{1}{3}[ABC]$, and tripling recovers $[ABC] = 51$ ✓. (The choice $34$ is DOUBLING INSTEAD OF TRIPLING; the choice $102$ is TREATING THE PIECE AS ONE SIXTH — the six small median triangles are equal, but $[ABG]$ is two of them, not one; the choice $17$ is COPYING THE GIVEN AREA.)',
    },
    {
      q: 'The three medians of triangle $DEF$ intersect at the centroid $G$. If $[DEG] = 11$, what is $[DEF]$?',
      choices: ['$22$', '$33$', '$44$', '$66$'],
      answer: 1,
      solution:
        'Connecting the centroid to the three vertices splits the triangle into three equal-area pieces, so $[DEG]$ is one third of the whole and $[DEF] = 3 \\cdot 11 = 33$ ✓. Check a second, independent way from the medians themselves: $G$ lies one third of the way up the median from side $DE$, so the height of $G$ over $DE$ is one third of the height of $F$ over $DE$. Same base $DE$, one-third height: $[DEG] = \\frac{1}{3}[DEF]$, so $[DEF] = 33$ ✓. (The choice $22$ is DOUBLING INSTEAD OF TRIPLING; the choice $44$ is QUADRUPLING; the choice $66$ is TREATING THE PIECE AS ONE SIXTH and multiplying by six.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 4,
  challenge,
}
