// Introduction to Geometry chapter 5 — variations for section 5.5
// (Using Similarity in Problems). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every length and ratio was worked twice, by two routes that do not share
//    arithmetic: the area computed two ways against a similar-triangle
//    proportion, a geometric-mean relation against a Pythagorean closure
//    check, a squared scale factor against an explicit base-and-height
//    rebuild, and a similarity ratio against a candidate test of the four
//    printed choices. The two routes must agree before a key is written down.
//  - The altitude-to-the-hypotenuse triangles deliberately avoid the
//    6–8–10 and 9–12–15 triples that the base section and its learn blocks
//    work in full; this file runs on the 15–20–25, 12–16–20, and 18–24–30
//    families instead. Within one round, the altitude problem and the
//    hypotenuse-piece problem revisit the same triangle from two angles,
//    mirroring the base section’s own design.
//  - Every figure was built from its own numbers: altitude feet sit at their
//    exact coordinates (leg-squared over hypotenuse-squared along each axis),
//    trapezoid diagonal crossings at the exact section point, and every
//    right-angle mark was checked against a dot product.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: DISOWNING THE ORIGINAL,
//    PROMOTING SIMILAR TO CONGRUENT, DENYING THE SPLIT, DEMANDING A SPECIAL
//    TRIANGLE, KEEPING ONLY ONE PIECE, STRETCHING THE AREA ONLY ONCE,
//    DOUBLING THE FACTOR INSTEAD OF SQUARING, CUBING THE FACTOR, ANSWERING A
//    HYPOTENUSE PIECE, HALVING THE HYPOTENUSE, FLIPPING THE RATIO, SQUARING
//    THE RATIO, COMPARING A PIECE TO THE WHOLE DIAGONAL, ANSWERING THE OTHER
//    PIECE, ANSWERING THE ALTITUDE, ANSWERING THE AREA RATIO, FLIPPING THE
//    AREA RATIO, MEASURING FROM THE HIGH END, COPYING THE FULL RISE, PARKING
//    THE POST AT THE MIDPOINT, USING THE RATIO ONLY ONCE, ADDING THE SIDE
//    DIFFERENCE, TAKING THE ARITHMETIC MEAN, FORGETTING THE SQUARE ROOT,
//    SUBTRACTING THE PIECES, ANSWERING THE CUT-OFF TRIANGLE, ASSUMING HALF
//    THE SIDES MEANS HALF THE AREA, and TREATING THE RATIO LIKE A VOLUME.
//  - No two choices inside an item name the same value.

const s55 = [
  // s1 — the altitude to the hypotenuse makes three similar triangles.
  [
    {
      q: 'A carpenter saws a right-triangular brace into two pieces, cutting along the altitude from the right-angle corner to the longest edge. Which statement about the two pieces and the original brace must be true?',
      choices: [
        'The two pieces are similar to each other, but neither is similar to the original brace',
        'The two pieces must be congruent to each other',
        'Each piece is similar to the original brace, and the two pieces are similar to each other',
        'Neither piece is similar to the original brace or to the other piece',
      ],
      answer: 2,
      solution:
        'Chase the angles through the cut. Call the brace’s two acute angles $x$ and $90^\\circ - x$. The piece keeping the corner of size $x$ has angles $x$, a right angle at the cut, and therefore $90^\\circ - x$ left over; the piece keeping the other corner has angles $90^\\circ - x$, a right angle at the cut, and $x$ left over. Both pieces carry exactly the angle set $\\{x, 90^\\circ - x, 90^\\circ\\}$ of the original, so all three triangles are similar ✓. Check a second, independent way without ever naming $x$: each piece shares one acute corner with the original brace and owns a right angle (one inherited, one made by the perpendicular cut), and two matching angle pairs is all AA Similarity asks — that puts each piece in the original’s family, and two triangles similar to the same triangle are similar to each other ✓. Same shape, three sizes. (The first choice is DISOWNING THE ORIGINAL, which shares an acute angle and a right angle with each piece and cannot leave the family ✗; "must be congruent" is PROMOTING SIMILAR TO CONGRUENT — the pieces agree in size only when the brace is an isosceles right triangle ✗; the last choice is DENYING THE SPLIT while the two freshly made right angles sit in plain view ✗.)',
    },
    {
      q: 'A sheet of paper shaped like a right triangle is cut with scissors along the altitude drawn from the right angle to the hypotenuse. The two triangles produced are',
      choices: [
        'always congruent to each other',
        'each similar to the original sheet, and similar to each other',
        'similar to each other, but never similar to the original sheet',
        'similar only if the original sheet is isosceles',
      ],
      answer: 1,
      solution:
        'Each new triangle keeps one acute corner of the sheet untouched, and the scissors line meets the hypotenuse at a right angle, so each new triangle has a right angle of its own. One shared acute angle plus one right angle is two matching pairs — AA — so each piece is similar to the whole sheet, and, both being similar to the same triangle, the pieces are similar to each other ✓. Check a second, independent way by counting degrees. If the sheet’s acute angles are $x$ and $90^\\circ - x$, the piece containing $x$ must fill in $180^\\circ - 90^\\circ - x = 90^\\circ - x$ at its third corner, and the other piece must fill in $x$ — each piece rebuilds the full angle set $\\{x, 90^\\circ - x, 90^\\circ\\}$, and same three angles means same shape ✓. (Congruent every time is PROMOTING SIMILAR TO CONGRUENT — the two pieces match in size only for an isosceles right sheet ✗; "never similar to the sheet" is DISOWNING THE ORIGINAL ✗; "only if isosceles" is DEMANDING A SPECIAL TRIANGLE when the AA argument uses no special property at all ✗.)',
    },
    {
      q: 'In right triangle $ABC$ the right angle is at $C$, and the altitude from $C$ meets the hypotenuse $\\overline{AB}$ at $H$. Which of the following is guaranteed?',
      choices: [
        '$\\triangle ACH \\sim \\triangle ABC$, but $\\triangle CBH$ matches neither triangle',
        '$\\triangle CBH \\sim \\triangle ABC$, but $\\triangle ACH$ matches neither triangle',
        '$\\triangle ACH \\sim \\triangle CBH$, but neither is similar to $\\triangle ABC$',
        '$\\triangle ACH$, $\\triangle CBH$, and $\\triangle ABC$ are all similar to one another',
      ],
      answer: 3,
      solution:
        'Run AA twice. $\\triangle ACH$ shares $\\angle A$ with $\\triangle ABC$ and has its right angle at $H$, so $\\triangle ACH \\sim \\triangle ABC$; $\\triangle CBH$ shares $\\angle B$ with $\\triangle ABC$ and has its right angle at $H$, so $\\triangle CBH \\sim \\triangle ABC$. Two triangles similar to the same triangle are similar to each other, so all three pairings hold ✓. Check a second, independent way by naming the angles: with $\\angle A = x$, the original has angles $x$, $90^\\circ - x$, $90^\\circ$; $\\triangle ACH$ has $x$ at $A$, $90^\\circ$ at $H$, so $90^\\circ - x$ at $C$; $\\triangle CBH$ has $90^\\circ - x$ at $B$, $90^\\circ$ at $H$, so $x$ at $C$ — one angle set, three triangles ✓. (The first choice is KEEPING ONLY ONE PIECE, forgetting that the argument at $A$ runs just as well at $B$ ✗; the second is the same slip on the other side ✗; the third is DISOWNING THE ORIGINAL even though each piece shares a full acute angle with it ✗.)',
    },
  ],
  // s2 — area is multiplied by the SQUARE of the scale factor.
  [
    {
      q: 'A triangular logo is blown up by a scale factor of $7$ for a poster. How many times as much area does the poster version cover?',
      choices: ['$7$', '$49$', '$14$', '$343$'],
      answer: 1,
      solution:
        'Area is built from two lengths. Scaling by $7$ multiplies the base by $7$ AND the height by $7$, and area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$ collects both: $7 \\times 7 = 49$ times the area ✓. Check a second, independent way with a concrete triangle: a right triangle with legs $2$ and $3$ has area $\\frac{1}{2} \\times 2 \\times 3 = 3$; blown up by $7$ its legs are $14$ and $21$, giving area $\\frac{1}{2} \\times 14 \\times 21 = 147$, and $\\frac{147}{3} = 49$ ✓ — the factor of $49$ appears in the arithmetic itself. (The choice $7$ is STRETCHING THE AREA ONLY ONCE, which is how perimeter behaves, not area ✗; $14$ is DOUBLING THE FACTOR INSTEAD OF SQUARING it ✗; $343$ is CUBING THE FACTOR, which is how volume would behave in three dimensions ✗.)',
    },
    {
      q: 'Every side of a triangular garden bed is stretched to $5$ times its old length. The new bed’s area is how many times the old area?',
      choices: ['$25$', '$5$', '$10$', '$125$'],
      answer: 0,
      solution:
        'The stretch multiplies the base by $5$ and the height by $5$, so the area picks up the factor twice: $5^2 = 25$ times the old area ✓. Check a second, independent way by tiling instead of multiplying. A triangle scaled by $5$ can be sliced by lines parallel to its sides into rows of copies of the original — $1$ copy in the top row, then $3$, $5$, $7$, and $9$ — and $1 + 3 + 5 + 7 + 9 = 25$ congruent copies fill it exactly ✓, so the big bed holds $25$ small beds’ worth of ground. (The choice $5$ is STRETCHING THE AREA ONLY ONCE — lengths scale once, areas scale twice ✗; $10$ is DOUBLING THE FACTOR INSTEAD OF SQUARING ✗; $125$ is CUBING THE FACTOR, a volume habit ✗.)',
    },
    {
      q: 'A triangular patch on a map is redrawn at $6$ times the original scale. Compared with the original, the redrawn patch has',
      choices: ['$6$ times the area', '$12$ times the area', '$216$ times the area', '$36$ times the area'],
      answer: 3,
      solution:
        'Both of the lengths that build area grow: the base becomes $6$ times as long and the height becomes $6$ times as tall, so the area is multiplied by $6 \\times 6 = 36$ ✓. Check a second, independent way on an explicit triangle: legs $1$ and $3$ give area $\\frac{1}{2} \\times 1 \\times 3 = 1.5$; redrawn, the legs are $6$ and $18$, giving $\\frac{1}{2} \\times 6 \\times 18 = 54$, and $\\frac{54}{1.5} = 36$ ✓ — the same multiplier falls out of raw numbers. A length on the map scales once; a patch of ground scales twice. (The choice $6$ is STRETCHING THE AREA ONLY ONCE ✗; $12$ is DOUBLING THE FACTOR INSTEAD OF SQUARING ✗; $216$ is CUBING THE FACTOR, which counts three dimensions where a map has two ✗.)',
    },
  ],
  // s3 — altitude to the hypotenuse from the two legs.
  [
    {
      q: 'In the figure, right triangle $PQR$ has its right angle at $Q$, with legs $QP = 32$ and $QR = 24$ and hypotenuse $PR = 40$. The altitude from $Q$ meets $\\overline{PR}$ at $F$. How long is $\\overline{QF}$?',
      fig: {
        view: [-1.5, -2, 34.5, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [0, 24]], fill: false },
          { t: 'seg', a: [0, 0], b: [11.52, 15.36], dash: true },
          { t: 'right', at: [0, 0], from: [32, 0], to: [0, 24] },
          { t: 'right', at: [11.52, 15.36], from: [32, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [32, 0], label: 'P', dx: 10, dy: 10 },
          { t: 'point', p: [0, 24], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [11.52, 15.36], label: 'F', dx: 10, dy: -6 },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '24', dx: -12, dy: 0 },
          { t: 'label', p: [16, 12], text: '40', dx: 12, dy: -6 },
          { t: 'label', p: [5.76, 7.68], text: '?', dx: 10, dy: 8 },
        ],
      },
      choices: ['$19.2$', '$25.6$', '$20$', '$14.4$'],
      answer: 0,
      solution:
        'Hold the area two ways. With the legs: $\\frac{1}{2} \\times 32 \\times 24 = 384$. With the hypotenuse as base: $\\frac{1}{2} \\times 40 \\times QF$. Equating, $20 \\times QF = 384$, so $QF = 19.2$ ✓. Check a second, independent way through similar triangles: $\\triangle PFQ \\sim \\triangle PQR$ (shared $\\angle P$, right angles at $F$ and $Q$), so $\\frac{QF}{RQ} = \\frac{PQ}{PR}$, giving $QF = 24 \\times \\frac{32}{40} = 19.2$ ✓. Guard with the geometric mean: the altitude splits the hypotenuse into $\\frac{32^2}{40} = 25.6$ and $\\frac{24^2}{40} = 14.4$, and $19.2^2 = 368.64 = 25.6 \\times 14.4$ ✓. (The choices $25.6$ and $14.4$ are each ANSWERING A HYPOTENUSE PIECE instead of the altitude ✗; $20$ is HALVING THE HYPOTENUSE, which is the length of the MEDIAN from the right angle, not the altitude ✗.)',
    },
    {
      q: 'A drafting template is the right triangle $JKL$ shown, with the right angle at $L$, legs $LJ = 16$ and $LK = 12$, and hypotenuse $JK = 20$. The altitude from $L$ meets the hypotenuse at $M$. Find $LM$.',
      fig: {
        view: [-1.5, -2, 18, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [5.76, 7.68], dash: true },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'right', at: [5.76, 7.68], from: [16, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'L', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'J', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [5.76, 7.68], label: 'M', dx: 10, dy: -6 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [8, 6], text: '20', dx: 12, dy: -6 },
          { t: 'label', p: [2.88, 3.84], text: '?', dx: 10, dy: 8 },
        ],
      },
      choices: ['$12.8$', '$10$', '$7.2$', '$9.6$'],
      answer: 3,
      solution:
        'The triangle’s area doesn’t care which base you pick. Legs first: $\\frac{1}{2} \\times 16 \\times 12 = 96$. Hypotenuse next: $\\frac{1}{2} \\times 20 \\times LM$. So $10 \\times LM = 96$ and $LM = 9.6$ ✓. Check a second, independent way with the similar triangles the altitude creates: $\\triangle JML \\sim \\triangle JLK$ (shared $\\angle J$, right angles at $M$ and $L$), so $\\frac{ML}{LK} = \\frac{JL}{JK}$, giving $LM = 12 \\times \\frac{16}{20} = 9.6$ ✓. Guard: the altitude to the hypotenuse is always shorter than either leg, and $9.6 < 12 < 16$ ✓. (The choices $12.8$ and $7.2$ are each ANSWERING A HYPOTENUSE PIECE — the altitude cuts the hypotenuse into $\\frac{16^2}{20} = 12.8$ and $\\frac{12^2}{20} = 7.2$ ✗; $10$ is HALVING THE HYPOTENUSE, the median’s job ✗.)',
    },
    {
      q: 'In right triangle $XYZ$ shown, the legs $ZX = 24$ and $ZY = 18$ meet at the right angle $Z$, and $XY = 30$. How long is the altitude $\\overline{ZW}$ drawn to the hypotenuse?',
      fig: {
        view: [-1.5, -2, 26, 19.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 18]], fill: false },
          { t: 'seg', a: [0, 0], b: [8.64, 11.52], dash: true },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 18] },
          { t: 'right', at: [8.64, 11.52], from: [24, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'Z', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'X', dx: 10, dy: 10 },
          { t: 'point', p: [0, 18], label: 'Y', dx: 0, dy: -12 },
          { t: 'point', p: [8.64, 11.52], label: 'W', dx: 10, dy: -6 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 9], text: '18', dx: -12, dy: 0 },
          { t: 'label', p: [12, 9], text: '30', dx: 12, dy: -6 },
          { t: 'label', p: [4.32, 5.76], text: '?', dx: 10, dy: 8 },
        ],
      },
      choices: ['$10.8$', '$19.2$', '$14.4$', '$15$'],
      answer: 2,
      solution:
        'Two bases, one area. From the legs: $\\frac{1}{2} \\times 24 \\times 18 = 216$. From the hypotenuse: $\\frac{1}{2} \\times 30 \\times ZW = 15 \\times ZW$. So $ZW = \\frac{216}{15} = 14.4$ ✓. Check a second, independent way by proportion in the similar triangles: $\\triangle XWZ \\sim \\triangle XZY$ (shared $\\angle X$, right angles at $W$ and $Z$), so $\\frac{WZ}{ZY} = \\frac{XZ}{XY}$, giving $ZW = 18 \\times \\frac{24}{30} = 14.4$ ✓. Guard with the geometric mean: the hypotenuse pieces are $\\frac{24^2}{30} = 19.2$ and $\\frac{18^2}{30} = 10.8$, and $14.4^2 = 207.36 = 19.2 \\times 10.8$ ✓. (The choices $19.2$ and $10.8$ are each ANSWERING A HYPOTENUSE PIECE ✗; $15$ is HALVING THE HYPOTENUSE — that gives the median from $Z$, which always beats the altitude ✗.)',
    },
  ],
  // s4 — trapezoid diagonals: P cuts each diagonal in the ratio of the parallel sides.
  [
    {
      q: 'In trapezoid $ABCD$ shown, $\\overline{AB} \\parallel \\overline{DC}$, with $AB = 6$ and $DC = 15$. The diagonals cross at $P$. What is $AP : PC$?',
      fig: {
        view: [-9.5, -1.5, 8.5, 8.5],
        elems: [
          { t: 'poly', pts: [[-8, 0], [7, 0], [6, 7], [0, 7]], fill: false },
          { t: 'seg', a: [0, 7], b: [7, 0] },
          { t: 'seg', a: [6, 7], b: [-8, 0] },
          { t: 'point', p: [0, 7], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [6, 7], label: 'B', dx: 10, dy: -6 },
          { t: 'point', p: [7, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-8, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [2, 5], label: 'P', dx: -4, dy: -12 },
          { t: 'label', p: [3, 7], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [-0.5, 0], text: '15', dx: 0, dy: 14 },
        ],
      },
      choices: ['$5 : 2$', '$4 : 25$', '$2 : 7$', '$2 : 5$'],
      answer: 3,
      solution:
        'The diagonals build an hourglass: $\\angle PAB = \\angle PCD$ (alternate angles from the parallels) and $\\angle APB = \\angle CPD$ (vertical angles), so $\\triangle PAB \\sim \\triangle PCD$ by AA. $\\overline{PA}$ and $\\overline{PC}$ are corresponding sides, so they sit in the ratio of the parallel sides: $AP : PC = AB : DC = 6 : 15 = 2 : 5$ ✓. Check a second, independent way by rebuilding: if $AP : PC = 2 : 5$, the scale factor from $\\triangle PAB$ up to $\\triangle PCD$ is $\\frac{5}{2}$, and $\\frac{5}{2} \\times AB = \\frac{5}{2} \\times 6 = 15 = DC$ ✓ — the given bases come back exactly. The short piece must sit next to the short parallel side, and $AP$, next to $AB = 6$, is the short one ✓. (The choice $5 : 2$ is FLIPPING THE RATIO, putting the long piece by the short base ✗; $4 : 25$ is SQUARING THE RATIO, the AREA comparison of the two triangles ✗; $2 : 7$ is COMPARING A PIECE TO THE WHOLE DIAGONAL, $AP : AC$ instead of $AP : PC$ ✗.)',
    },
    {
      q: 'A tabletop is cut as trapezoid $ABCD$ with $\\overline{AB} \\parallel \\overline{DC}$, $AB = 8$, and $DC = 12$. Its two diagonals meet at $P$, as shown. In what ratio does $P$ divide diagonal $\\overline{AC}$ — that is, what is $AP : PC$?',
      fig: {
        view: [-3.5, -1.5, 11.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-2, 0], [10, 0], [8, 5], [0, 5]], fill: false },
          { t: 'seg', a: [0, 5], b: [10, 0] },
          { t: 'seg', a: [8, 5], b: [-2, 0] },
          { t: 'point', p: [0, 5], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [8, 5], label: 'B', dx: 10, dy: -6 },
          { t: 'point', p: [10, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-2, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [4, 3], label: 'P', dx: -4, dy: -12 },
          { t: 'label', p: [4, 5], text: '8', dx: 0, dy: -10 },
          { t: 'label', p: [4, 0], text: '12', dx: 0, dy: 14 },
        ],
      },
      choices: ['$3 : 2$', '$2 : 3$', '$4 : 9$', '$2 : 5$'],
      answer: 1,
      solution:
        'Alternate angles from $\\overline{AB} \\parallel \\overline{DC}$ plus vertical angles at $P$ give $\\triangle PAB \\sim \\triangle PCD$ by AA, and corresponding sides $\\overline{PA}$, $\\overline{PC}$ inherit the ratio of the bases: $AP : PC = AB : DC = 8 : 12 = 2 : 3$ ✓. Check a second, independent way by rebuilding from the candidate: $AP : PC = 2 : 3$ says the scale factor from the small triangle to the large one is $\\frac{3}{2}$, and $\\frac{3}{2} \\times 8 = 12$ ✓ — exactly the printed $DC$; no other candidate regenerates the bases. Sanity: the bases $8$ and $12$ are close in size, so $P$ should sit near the middle of the diagonal, and $2 : 3$ does, while $2 : 5$ would shove it far off ✓. (The choice $3 : 2$ is FLIPPING THE RATIO ✗; $4 : 9$ is SQUARING THE RATIO — that compares the two triangles’ AREAS ✗; $2 : 5$ is COMPARING A PIECE TO THE WHOLE DIAGONAL, the fraction $\\frac{AP}{AC} = \\frac{2}{5}$ dressed up as a piece-to-piece ratio ✗.)',
    },
    {
      q: 'In the trapezoid $ABCD$ shown, $\\overline{AB} \\parallel \\overline{DC}$, $AB = 9$, and $DC = 12$, and the diagonals intersect at $P$. Find $AP : PC$.',
      fig: {
        view: [-6.5, -1.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[-5, 0], [7, 0], [9, 7], [0, 7]], fill: false },
          { t: 'seg', a: [0, 7], b: [7, 0] },
          { t: 'seg', a: [9, 7], b: [-5, 0] },
          { t: 'point', p: [0, 7], label: 'A', dx: -10, dy: -6 },
          { t: 'point', p: [9, 7], label: 'B', dx: 10, dy: -6 },
          { t: 'point', p: [7, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-5, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [3, 4], label: 'P', dx: -4, dy: -12 },
          { t: 'label', p: [4.5, 7], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [1, 0], text: '12', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4 : 3$', '$9 : 16$', '$3 : 4$', '$3 : 7$'],
      answer: 2,
      solution:
        'The crossing diagonals make the hourglass pair $\\triangle PAB \\sim \\triangle PCD$ by AA — alternate angles at $A$ and $C$ from the parallels, vertical angles at $P$. Corresponding sides carry the ratio of the parallel sides once: $AP : PC = AB : DC = 9 : 12 = 3 : 4$ ✓. Check a second, independent way by rebuilding: from $AP : PC = 3 : 4$ the enlargement taking $\\triangle PAB$ to $\\triangle PCD$ has factor $\\frac{4}{3}$, and $\\frac{4}{3} \\times 9 = 12$ ✓, the given long base — testing $4 : 3$ the same way would predict $DC = \\frac{3}{4} \\times 9 = 6.75$ ✗, nowhere near $12$. The piece next to the shorter base must be the shorter piece ✓. (The choice $4 : 3$ is FLIPPING THE RATIO ✗; $9 : 16$ is SQUARING THE RATIO, which is how the two triangles’ areas compare ✗; $3 : 7$ is COMPARING A PIECE TO THE WHOLE DIAGONAL, $AP : AC$ ✗.)',
    },
  ],
  // s5 — hypotenuse piece next to a leg: leg^2 = hypotenuse x adjacent piece.
  [
    {
      q: 'In right triangle $DEF$, the right angle is at $F$, with $FD = 32$, $FE = 24$, and hypotenuse $DE = 40$. The altitude from $F$ meets $\\overline{DE}$ at $H$, as shown. Find $DH$, the piece of the hypotenuse touching the leg of length $32$.',
      fig: {
        view: [-1.5, -2, 34.5, 26],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [0, 24]], fill: false },
          { t: 'seg', a: [0, 0], b: [11.52, 15.36], dash: true },
          { t: 'right', at: [0, 0], from: [32, 0], to: [0, 24] },
          { t: 'right', at: [11.52, 15.36], from: [32, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'F', dx: -10, dy: 10 },
          { t: 'point', p: [32, 0], label: 'D', dx: 10, dy: 10 },
          { t: 'point', p: [0, 24], label: 'E', dx: 0, dy: -12 },
          { t: 'point', p: [11.52, 15.36], label: 'H', dx: 6, dy: -10 },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '24', dx: -12, dy: 0 },
          { t: 'label', p: [21.76, 7.68], text: '?', dx: 12, dy: -6 },
        ],
      },
      choices: ['$14.4$', '$19.2$', '$25.6$', '$20$'],
      answer: 2,
      solution:
        'Use the similar triangles the altitude creates: $\\triangle DHF \\sim \\triangle DFE$ (shared $\\angle D$, right angles at $H$ and $F$), so $\\frac{DH}{DF} = \\frac{DF}{DE}$ — each leg is the geometric mean of the hypotenuse and its own piece. Then $DF^2 = DE \\times DH$: $1024 = 40 \\times DH$, so $DH = 25.6$ ✓. Check a second, independent way through the altitude and Pythagoras: the area gives $\\frac{1}{2} \\times 32 \\times 24 = 384 = \\frac{1}{2} \\times 40 \\times FH$, so $FH = 19.2$; in right triangle $DHF$, $DH = \\sqrt{32^2 - 19.2^2} = \\sqrt{655.36} = 25.6$ ✓. Guard: the other piece is $40 - 25.6 = 14.4 = \\frac{24^2}{40}$ ✓. (The choice $14.4$ is ANSWERING THE OTHER PIECE, the one next to the leg of length $24$ ✗; $19.2$ is ANSWERING THE ALTITUDE instead of a piece of the hypotenuse ✗; $20$ is HALVING THE HYPOTENUSE, where the median lands, not the altitude ✗.)',
    },
    {
      q: 'Right triangle $RST$ shown has its right angle at $T$, with $TR = 16$, $TS = 12$, and $RS = 20$. The altitude from $T$ lands on the hypotenuse at $H$. What is $RH$, the piece of the hypotenuse next to the leg $\\overline{TR}$?',
      fig: {
        view: [-1.5, -2, 18, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [5.76, 7.68], dash: true },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 12] },
          { t: 'right', at: [5.76, 7.68], from: [16, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'S', dx: 0, dy: -12 },
          { t: 'point', p: [5.76, 7.68], label: 'H', dx: 6, dy: -10 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '12', dx: -12, dy: 0 },
          { t: 'label', p: [10.88, 3.84], text: '?', dx: 12, dy: -6 },
        ],
      },
      choices: ['$12.8$', '$7.2$', '$9.6$', '$10$'],
      answer: 0,
      solution:
        '$\\triangle RHT \\sim \\triangle RTS$ (shared $\\angle R$, right angles at $H$ and $T$), so $\\frac{RH}{RT} = \\frac{RT}{RS}$, which packages as $RT^2 = RS \\times RH$: $256 = 20 \\times RH$, giving $RH = 12.8$ ✓. Check a second, independent way with no geometric mean in it: the area equation $\\frac{1}{2} \\times 16 \\times 12 = 96 = \\frac{1}{2} \\times 20 \\times TH$ gives the altitude $TH = 9.6$, and Pythagoras inside $\\triangle RHT$ gives $RH = \\sqrt{16^2 - 9.6^2} = \\sqrt{163.84} = 12.8$ ✓. Guard: the two pieces must rebuild the hypotenuse, and $12.8 + \\frac{12^2}{20} = 12.8 + 7.2 = 20$ ✓. (The choice $7.2$ is ANSWERING THE OTHER PIECE, the one hugging the leg of length $12$ ✗; $9.6$ is ANSWERING THE ALTITUDE ✗; $10$ is HALVING THE HYPOTENUSE — the altitude’s foot only lands at the midpoint in an isosceles right triangle ✗.)',
    },
    {
      q: 'In the figure, right triangle $KLM$ has the right angle at $M$, with $MK = 24$, $ML = 18$, and hypotenuse $KL = 30$. The altitude from $M$ meets $\\overline{KL}$ at $H$. How long is $KH$, the hypotenuse piece adjacent to the leg of length $24$?',
      fig: {
        view: [-1.5, -2, 26, 19.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 18]], fill: false },
          { t: 'seg', a: [0, 0], b: [8.64, 11.52], dash: true },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 18] },
          { t: 'right', at: [8.64, 11.52], from: [24, 0], to: [0, 0] },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [0, 18], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [8.64, 11.52], label: 'H', dx: 6, dy: -10 },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 9], text: '18', dx: -12, dy: 0 },
          { t: 'label', p: [16.32, 5.76], text: '?', dx: 12, dy: -6 },
        ],
      },
      choices: ['$14.4$', '$19.2$', '$10.8$', '$15$'],
      answer: 1,
      solution:
        'The altitude makes $\\triangle KHM \\sim \\triangle KML$ (shared $\\angle K$, right angles at $H$ and $M$), so $\\frac{KH}{KM} = \\frac{KM}{KL}$ — the leg is the geometric mean of the hypotenuse and its adjacent piece. So $KM^2 = KL \\times KH$: $576 = 30 \\times KH$, and $KH = 19.2$ ✓. Check a second, independent way through the altitude: the area two ways gives $\\frac{1}{2} \\times 24 \\times 18 = 216 = \\frac{1}{2} \\times 30 \\times MH$, so $MH = 14.4$, and then Pythagoras in $\\triangle KHM$: $KH = \\sqrt{24^2 - 14.4^2} = \\sqrt{368.64} = 19.2$ ✓. Guard: the pieces sum to the hypotenuse, $19.2 + \\frac{18^2}{30} = 19.2 + 10.8 = 30$ ✓. (The choice $10.8$ is ANSWERING THE OTHER PIECE, next to the $18$ leg ✗; $14.4$ is ANSWERING THE ALTITUDE ✗; $15$ is HALVING THE HYPOTENUSE, the median length ✗.)',
    },
  ],
  // s6 — side ratio recovered from two areas.
  [
    {
      q: 'Two similar triangles have areas $18$ and $50$. What is the ratio of their corresponding sides, larger triangle to smaller?',
      choices: ['$5 : 3$', '$25 : 9$', '$3 : 5$', '$9 : 25$'],
      answer: 0,
      solution:
        'Area carries the side ratio squared, so recovering sides from areas takes a square root: $\\sqrt{\\frac{50}{18}} = \\sqrt{\\frac{25}{9}} = \\frac{5}{3}$, so the sides are in the ratio $5 : 3$ ✓. Check a second, independent way by rebuilding forward: if the sides really are $5 : 3$, the areas must sit at $5^2 : 3^2 = 25 : 9$, and scaling the small area up, $18 \\times \\frac{25}{9} = 50$ ✓ — exactly the pair given. Run the same test on $25 : 9$ as a SIDE ratio: the areas would then be $625 : 81$, and $18 \\times \\frac{625}{81}$ is far past $50$ ✗. (The choice $25 : 9$ is ANSWERING THE AREA RATIO itself, skipping the square root ✗; $3 : 5$ is FLIPPING THE RATIO — the question asks larger to smaller ✗; $9 : 25$ is FLIPPING THE AREA RATIO, two mistakes stacked ✗.)',
    },
    {
      q: 'One triangular tile has area $12$; a similar tile has area $75$. Find the ratio of a side of the larger tile to the corresponding side of the smaller.',
      choices: ['$25 : 4$', '$2 : 5$', '$5 : 2$', '$4 : 25$'],
      answer: 2,
      solution:
        'Take the square root of the area ratio: $\\sqrt{\\frac{75}{12}} = \\sqrt{\\frac{25}{4}} = \\frac{5}{2}$, so corresponding sides run $5 : 2$ ✓. Check a second, independent way with concrete tiles: give the small tile base $2$ and height $12$, so area $\\frac{1}{2} \\times 2 \\times 12 = 12$; a similar tile with sides $\\frac{5}{2}$ as long has base $5$ and height $30$, so area $\\frac{1}{2} \\times 5 \\times 30 = 75$ ✓ — both printed areas reappear from actual lengths. Sides scale once; areas collect the factor twice. (The choice $25 : 4$ is ANSWERING THE AREA RATIO without the square root ✗; $2 : 5$ is FLIPPING THE RATIO, small to large ✗; $4 : 25$ is FLIPPING THE AREA RATIO ✗.)',
    },
    {
      q: 'Two similar triangular sails have areas $27$ and $48$. The ratio of corresponding side lengths, big sail to small sail, is',
      choices: ['$16 : 9$', '$3 : 4$', '$9 : 16$', '$4 : 3$'],
      answer: 3,
      solution:
        'Undo the squaring: the side ratio is $\\sqrt{\\frac{48}{27}} = \\sqrt{\\frac{16}{9}} = \\frac{4}{3}$, so the sides run $4 : 3$ ✓. Check a second, independent way by pushing the candidate forward: sides at $4 : 3$ force areas at $16 : 9$, and $27 \\times \\frac{16}{9} = 48$ ✓, the very areas given. Testing $16 : 9$ as a side ratio instead predicts areas of $256 : 81$, and $27 \\times \\frac{256}{81} = \\frac{256}{3}$, which is nowhere near $48$ ✗ — squaring twice overshoots. (The choice $16 : 9$ is ANSWERING THE AREA RATIO, forgetting the square root ✗; $3 : 4$ is FLIPPING THE RATIO when the big sail was asked for first ✗; $9 : 16$ is FLIPPING THE AREA RATIO ✗.)',
    },
  ],
  // s7 — ramp with a vertical post: post = rise x post-distance / run.
  [
    {
      q: 'A skateboard ramp rises $4$ m over a horizontal run of $16$ m. A vertical support post stands under the ramp, $6$ m (horizontally) from the low end. How tall is the post?',
      fig: {
        view: [-1.5, -1.5, 18, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 4]], fill: false },
          { t: 'seg', a: [6, 0], b: [6, 1.5] },
          { t: 'right', at: [16, 0], from: [0, 0], to: [16, 4] },
          { t: 'right', at: [6, 0], from: [16, 0], to: [6, 1.5] },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [11, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [16, 2], text: '4', dx: 10, dy: 0 },
          { t: 'label', p: [6, 0.75], text: '?', dx: -8, dy: 0 },
        ],
      },
      choices: ['$2.5$ m', '$1.5$ m', '$4$ m', '$2$ m'],
      answer: 1,
      solution:
        'The post cuts off a small right triangle at the low end that is similar to the whole ramp triangle by AA (shared angle at the low end, right angles at the ground). Heights match runs: $\\frac{\\text{post}}{6} = \\frac{4}{16}$, so the post is $6 \\times \\frac{1}{4} = 1.5$ m ✓. Check a second, independent way by walking the slope: the ramp climbs $4$ m in $16$ m, which is $\\frac{4}{16} = 0.25$ m of height for every meter of run, and after $6$ m of run the deck is $6 \\times 0.25 = 1.5$ m up ✓ — the same height with no proportion written down. Guard: the post must be shorter than the full rise, and $1.5 < 4$ ✓. (The choice $2.5$ m is MEASURING FROM THE HIGH END, using the $10$ m to the top of the ramp instead of $6$ m from the bottom ✗; $4$ m is COPYING THE FULL RISE ✗; $2$ m is PARKING THE POST AT THE MIDPOINT, halving the rise as if $6$ were $8$ ✗.)',
    },
    {
      q: 'A loading ramp climbs $5$ m of height across a horizontal distance of $20$ m. A vertical brace is bolted between the ground and the ramp, $8$ m (horizontally) from the ramp’s bottom edge. How long is the brace?',
      fig: {
        view: [-1.5, -1.5, 22, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [20, 5]], fill: false },
          { t: 'seg', a: [8, 0], b: [8, 2] },
          { t: 'right', at: [20, 0], from: [0, 0], to: [20, 5] },
          { t: 'right', at: [8, 0], from: [20, 0], to: [8, 2] },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [14, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [20, 2.5], text: '5', dx: 10, dy: 0 },
          { t: 'label', p: [8, 1], text: '?', dx: -8, dy: 0 },
        ],
      },
      choices: ['$3$ m', '$5$ m', '$2.5$ m', '$2$ m'],
      answer: 3,
      solution:
        'The brace, the ground, and the ramp form a small right triangle similar to the whole ramp triangle by AA — they share the angle at the bottom edge, and both stand on right angles. So $\\frac{\\text{brace}}{8} = \\frac{5}{20}$, giving $8 \\times \\frac{1}{4} = 2$ m ✓. Check a second, independent way through the grade of the ramp: it gains $\\frac{5}{20} = 0.25$ m per meter of horizontal travel, so $8$ m in from the bottom the deck sits $8 \\times 0.25 = 2$ m above the ground ✓. Guard: at $8$ m of a $20$ m run the brace should be a bit under half the full $5$ m rise, and $2 < 2.5$ ✓. (The choice $3$ m is MEASURING FROM THE HIGH END, running the proportion with the remaining $12$ m ✗; $5$ m is COPYING THE FULL RISE of the ramp ✗; $2.5$ m is PARKING THE POST AT THE MIDPOINT — half the rise belongs at $10$ m, not at $8$ m ✗.)',
    },
    {
      q: 'A straight playground slide drops from a deck $4$ m high to the ground, covering a horizontal distance of $10$ m. A vertical support stands $7$ m (horizontally) from the slide’s bottom end. How tall is that support?',
      fig: {
        view: [-1.5, -1.5, 12, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 4]], fill: false },
          { t: 'seg', a: [7, 0], b: [7, 2.8] },
          { t: 'right', at: [10, 0], from: [0, 0], to: [10, 4] },
          { t: 'right', at: [7, 0], from: [10, 0], to: [7, 2.8] },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [8.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [10, 2], text: '4', dx: 10, dy: 0 },
          { t: 'label', p: [7, 1.4], text: '?', dx: -8, dy: 0 },
        ],
      },
      choices: ['$2.8$ m', '$1.2$ m', '$4$ m', '$2$ m'],
      answer: 0,
      solution:
        'The support makes a right triangle nested inside the slide’s triangle, sharing the angle at the bottom end — similar by AA. Heights are in proportion to horizontal distances: $\\frac{\\text{support}}{7} = \\frac{4}{10}$, so the support is $7 \\times \\frac{2}{5} = 2.8$ m ✓. Check a second, independent way by rate of climb: the slide gains $\\frac{4}{10} = 0.4$ m of height per horizontal meter, and $7$ m along that is $7 \\times 0.4 = 2.8$ m ✓ — slope thinking and similar-triangle thinking land together. Guard: $7$ m is most of the $10$ m run, so the support should stand at most of the $4$ m height, and $2.8$ m is $70\\%$ of it ✓. (The choice $1.2$ m is MEASURING FROM THE HIGH END, using the $3$ m to the deck side ✗; $4$ m is COPYING THE FULL RISE ✗; $2$ m is PARKING THE POST AT THE MIDPOINT, taking half of $4$ regardless of where the support stands ✗.)',
    },
  ],
  // s8 — area of the second triangle from a pair of corresponding sides.
  [
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$ with $BC = 8$ and $EF = 12$. The area of $\\triangle ABC$ is $24$. What is the area of $\\triangle DEF$?',
      choices: ['$36$', '$28$', '$54$', '$81$'],
      answer: 2,
      solution:
        'The side ratio is $\\frac{EF}{BC} = \\frac{12}{8} = \\frac{3}{2}$, and area collects that factor twice: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, so the area of $\\triangle DEF$ is $24 \\times \\frac{9}{4} = 54$ ✓. Check a second, independent way by building the heights: the height of $\\triangle ABC$ to $\\overline{BC}$ is $\\frac{2 \\times 24}{8} = 6$; similarity scales that height by $\\frac{3}{2}$ to $9$, and $\\frac{1}{2} \\times 12 \\times 9 = 54$ ✓ — base and height each grew, and the area shows both growths. (The choice $36$ is USING THE RATIO ONLY ONCE, $24 \\times \\frac{3}{2}$, which is how perimeter scales ✗; $81$ is CUBING THE RATIO, one factor too many ✗; $28$ is ADDING THE SIDE DIFFERENCE $12 - 8$ to the area, mixing lengths into square units ✗.)',
    },
    {
      q: 'Triangles $ABC$ and $DEF$ are similar, with $\\overline{BC}$ corresponding to $\\overline{EF}$, $BC = 10$, and $EF = 15$. The smaller triangle $ABC$ has area $16$. Find the area of $\\triangle DEF$.',
      choices: ['$36$', '$24$', '$54$', '$21$'],
      answer: 0,
      solution:
        'The scale factor from $\\triangle ABC$ to $\\triangle DEF$ is $\\frac{EF}{BC} = \\frac{15}{10} = \\frac{3}{2}$, so area is multiplied by $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$: the area of $\\triangle DEF$ is $16 \\times \\frac{9}{4} = 36$ ✓. Check a second, independent way with explicit lengths: the height of $\\triangle ABC$ to $\\overline{BC}$ is $\\frac{2 \\times 16}{10} = 3.2$, the matching height in $\\triangle DEF$ is $3.2 \\times \\frac{3}{2} = 4.8$, and $\\frac{1}{2} \\times 15 \\times 4.8 = 36$ ✓ — the squared factor is the base’s growth and the height’s growth arriving together. (The choice $24$ is USING THE RATIO ONLY ONCE, $16 \\times \\frac{3}{2}$ ✗; $54$ is CUBING THE RATIO, $16 \\times \\frac{27}{8}$ ✗; $21$ is ADDING THE SIDE DIFFERENCE $15 - 10$ to the area ✗.)',
    },
    {
      q: '$\\triangle ABC \\sim \\triangle DEF$, where $BC = 6$, $EF = 15$, and the area of $\\triangle ABC$ is $8$. The area of $\\triangle DEF$ is',
      choices: ['$20$', '$125$', '$17$', '$50$'],
      answer: 3,
      solution:
        'The sides scale by $\\frac{EF}{BC} = \\frac{15}{6} = \\frac{5}{2}$, so the area scales by $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$: the area of $\\triangle DEF$ is $8 \\times \\frac{25}{4} = 50$ ✓. Check a second, independent way from raw base and height: $\\triangle ABC$ has height $\\frac{2 \\times 8}{6} = \\frac{8}{3}$ to $\\overline{BC}$; scaling by $\\frac{5}{2}$ gives the matching height $\\frac{8}{3} \\times \\frac{5}{2} = \\frac{20}{3}$ in $\\triangle DEF$, and $\\frac{1}{2} \\times 15 \\times \\frac{20}{3} = 50$ ✓ — same answer with the ratio never squared by hand. (The choice $20$ is USING THE RATIO ONLY ONCE, $8 \\times \\frac{5}{2}$ ✗; $125$ is CUBING THE RATIO, $8 \\times \\frac{125}{8}$ ✗; $17$ is ADDING THE SIDE DIFFERENCE $15 - 6$ to the area, which adds meters to square meters ✗.)',
    },
  ],
  // s9 — altitude from the two hypotenuse pieces: h = sqrt(AH x HB).
  [
    {
      q: 'In the figure, the altitude from the right angle $C$ of $\\triangle ACB$ meets the hypotenuse $\\overline{AB}$ at $H$, splitting it into $AH = 4$ and $HB = 25$. How long is the altitude $\\overline{CH}$?',
      fig: {
        view: [-1.5, -2.5, 30.5, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [29, 0], [4, 10]], fill: false },
          { t: 'seg', a: [4, 10], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [29, 0], to: [4, 10] },
          { t: 'right', at: [4, 10], from: [0, 0], to: [29, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [29, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 10], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'H', dx: 0, dy: 14 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [16.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [4, 5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$14.5$', '$10$', '$100$', '$21$'],
      answer: 1,
      solution:
        'The two small triangles the altitude creates are similar to each other: $\\triangle AHC \\sim \\triangle CHB$, so $\\frac{AH}{CH} = \\frac{CH}{HB}$, giving $CH^2 = 4 \\times 25 = 100$ and $CH = 10$ ✓ — the altitude is the geometric mean of the pieces. Check a second, independent way by closing the big right angle: with $CH = 10$, the legs come out as $AC^2 = 4^2 + 10^2 = 116$ and $CB^2 = 10^2 + 25^2 = 725$, and $116 + 725 = 841 = 29^2 = AB^2$ ✓ — the Pythagorean equation for $\\triangle ACB$ closes exactly, which only the true altitude can arrange. (The choice $14.5$ is TAKING THE ARITHMETIC MEAN of $4$ and $25$; the altitude is the GEOMETRIC mean, always smaller ✗; $100$ is FORGETTING THE SQUARE ROOT and reporting $CH^2$ ✗; $21$ is SUBTRACTING THE PIECES, $25 - 4$ ✗.)',
    },
    {
      q: 'A right triangle is drawn with its hypotenuse $\\overline{AB}$ along the ground, and the altitude from the right-angle vertex $C$ lands at $H$, cutting the hypotenuse into $AH = 16$ and $HB = 25$, as shown. Find $CH$.',
      fig: {
        view: [-1.5, -3, 42.5, 22],
        elems: [
          { t: 'poly', pts: [[0, 0], [41, 0], [16, 20]], fill: false },
          { t: 'seg', a: [16, 20], b: [16, 0], dash: true },
          { t: 'right', at: [16, 0], from: [41, 0], to: [16, 20] },
          { t: 'right', at: [16, 20], from: [0, 0], to: [41, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [41, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [16, 20], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [16, 0], label: 'H', dx: 0, dy: 14 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [28.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [16, 10], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$400$', '$20.5$', '$20$', '$9$'],
      answer: 2,
      solution:
        'The altitude splits the triangle into two similar pieces, $\\triangle AHC \\sim \\triangle CHB$, so matching sides give $\\frac{AH}{CH} = \\frac{CH}{HB}$: $CH^2 = 16 \\times 25 = 400$, and $CH = 20$ ✓. Check a second, independent way by rebuilding the whole triangle: with $CH = 20$, Pythagoras in the two small triangles gives $AC^2 = 16^2 + 20^2 = 656$ and $CB^2 = 20^2 + 25^2 = 1025$; the big triangle then needs $AC^2 + CB^2 = AB^2$, and $656 + 1025 = 1681 = 41^2$ ✓, exactly the hypotenuse $16 + 25 = 41$. (The choice $400$ is FORGETTING THE SQUARE ROOT — that number is $CH^2$ ✗; $20.5$ is TAKING THE ARITHMETIC MEAN of the pieces, a hair too big, and only equal to the geometric mean when the pieces match ✗; $9$ is SUBTRACTING THE PIECES ✗.)',
    },
    {
      q: 'The altitude $\\overline{CH}$ of right triangle $ACB$ runs from the right angle $C$ down to the hypotenuse, landing at $H$ with $AH = 25$ and $HB = 49$, as shown. What is $CH$?',
      fig: {
        view: [-3, -6, 78, 39.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [74, 0], [25, 35]], fill: false },
          { t: 'seg', a: [25, 35], b: [25, 0], dash: true },
          { t: 'right', at: [25, 0], from: [74, 0], to: [25, 35] },
          { t: 'right', at: [25, 35], from: [0, 0], to: [74, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [74, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [25, 35], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [25, 0], label: 'H', dx: 0, dy: 14 },
          { t: 'label', p: [12.5, 0], text: '25', dx: 0, dy: 14 },
          { t: 'label', p: [49.5, 0], text: '49', dx: 0, dy: 14 },
          { t: 'label', p: [25, 17.5], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$35$', '$1225$', '$37$', '$24$'],
      answer: 0,
      solution:
        'From $\\triangle AHC \\sim \\triangle CHB$, the altitude is the geometric mean of the two hypotenuse pieces: $\\frac{AH}{CH} = \\frac{CH}{HB}$, so $CH^2 = 25 \\times 49 = 1225$ and $CH = 35$ ✓ — and $\\sqrt{25 \\times 49} = 5 \\times 7$, the square roots multiplying with no long arithmetic at all. Check a second, independent way by making the big right angle close: with $CH = 35$, the legs satisfy $AC^2 = 25^2 + 35^2 = 1850$ and $CB^2 = 35^2 + 49^2 = 3626$, and $1850 + 3626 = 5476 = 74^2$ ✓ — exactly $AB^2$ for the hypotenuse $25 + 49 = 74$, so the $35$ really does stand under a right angle. (The choice $1225$ is FORGETTING THE SQUARE ROOT, reporting $CH^2$ ✗; $37$ is TAKING THE ARITHMETIC MEAN $\\frac{25 + 49}{2}$, which always edges out the geometric mean ✗; $24$ is SUBTRACTING THE PIECES, $49 - 25$ ✗.)',
    },
  ],
  // s10 — midpoints cut off a quarter; the trapezoid keeps three quarters.
  [
    {
      q: 'A triangular garden $ABC$ has area $64$. A straight path is laid from $D$, the midpoint of $\\overline{AB}$, to $E$, the midpoint of $\\overline{AC}$, so $\\overline{DE} \\parallel \\overline{BC}$. What is the area of the lower piece, trapezoid $DBCE$?',
      fig: {
        view: [-6.5, -1.5, 5.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-5, 0], [4, 0], [1, 6]], fill: false },
          { t: 'seg', a: [-2, 3], b: [2.5, 3] },
          { t: 'point', p: [1, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-5, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-2, 3], label: 'D', dx: -12, dy: 0 },
          { t: 'point', p: [2.5, 3], label: 'E', dx: 12, dy: 0 },
        ],
      },
      choices: ['$16$', '$32$', '$56$', '$48$'],
      answer: 3,
      solution:
        'The path cuts off $\\triangle ADE \\sim \\triangle ABC$ with ratio $\\frac{1}{2}$ (midpoints halve both sides), so its area is $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ of the garden: $\\frac{64}{4} = 16$. The trapezoid keeps the rest: $64 - 16 = 48$ ✓. Check a second, independent way by tiling instead of subtracting: joining the midpoints of all three sides cuts $\\triangle ABC$ into four congruent triangles, each a half-scale copy; $\\triangle ADE$ is one of the four, and the trapezoid $DBCE$ is the other three, so its area is $\\frac{3}{4} \\times 64 = 48$ ✓ — three tiles out of four, no similarity ratio needed. (The choice $16$ is ANSWERING THE CUT-OFF TRIANGLE at the top instead of the trapezoid ✗; $32$ is ASSUMING HALF THE SIDES MEANS HALF THE AREA — halving sides quarters area ✗; $56$ is TREATING THE RATIO LIKE A VOLUME, taking the top piece as $\\frac{1}{8}$ of the whole ✗.)',
    },
    {
      q: 'In the figure, $D$ and $E$ are the midpoints of sides $\\overline{AB}$ and $\\overline{AC}$ of $\\triangle ABC$, whose area is $56$, and $\\overline{DE} \\parallel \\overline{BC}$. Find the area of trapezoid $DBCE$.',
      fig: {
        view: [-5.5, -1.5, 6.5, 7.5],
        elems: [
          { t: 'poly', pts: [[-4, 0], [5, 0], [-1, 6]], fill: false },
          { t: 'seg', a: [-2.5, 3], b: [2, 3] },
          { t: 'point', p: [-1, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-4, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-2.5, 3], label: 'D', dx: -12, dy: 0 },
          { t: 'point', p: [2, 3], label: 'E', dx: 12, dy: 0 },
        ],
      },
      choices: ['$42$', '$28$', '$14$', '$49$'],
      answer: 0,
      solution:
        'Since $D$ and $E$ are midpoints, $\\triangle ADE \\sim \\triangle ABC$ with scale factor $\\frac{1}{2}$, so its area is $\\frac{1}{4}$ of the whole: $\\frac{56}{4} = 14$. Everything below the segment is the trapezoid: $56 - 14 = 42$ ✓. Check a second, independent way with the four-tile picture: the three midsegments of a triangle split it into four congruent half-size triangles; the trapezoid $DBCE$ is made of exactly three of them, so its area is $\\frac{3}{4} \\times 56 = 42$ ✓ — counted directly, with no subtraction. (The choice $14$ is ANSWERING THE CUT-OFF TRIANGLE $\\triangle ADE$ ✗; $28$ is ASSUMING HALF THE SIDES MEANS HALF THE AREA, using the ratio once ✗; $49$ is TREATING THE RATIO LIKE A VOLUME, shrinking the top piece to $\\frac{56}{8} = 7$ before subtracting ✗.)',
    },
    {
      q: 'A triangular banner $ABC$ of area $72$ is folded along the segment $\\overline{DE}$ joining $D$, the midpoint of $\\overline{AB}$, to $E$, the midpoint of $\\overline{AC}$, so that $\\overline{DE} \\parallel \\overline{BC}$. What is the area of the trapezoid $DBCE$ below the fold line?',
      fig: {
        view: [-4.5, -1.5, 7.5, 6.5],
        elems: [
          { t: 'poly', pts: [[-3, 0], [6, 0], [0, 5]], fill: false },
          { t: 'seg', a: [-1.5, 2.5], b: [3, 2.5] },
          { t: 'point', p: [0, 5], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [-3, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [-1.5, 2.5], label: 'D', dx: -12, dy: 0 },
          { t: 'point', p: [3, 2.5], label: 'E', dx: 12, dy: 0 },
        ],
      },
      choices: ['$36$', '$54$', '$18$', '$63$'],
      answer: 1,
      solution:
        'The fold line cuts off $\\triangle ADE$, similar to $\\triangle ABC$ with ratio $\\frac{1}{2}$, so the cut-off piece has area $\\left(\\frac{1}{2}\\right)^2 \\times 72 = 18$, and the trapezoid holds $72 - 18 = 54$ ✓. Check a second, independent way by counting tiles: connect the midpoints of all three sides and the banner falls apart into four congruent triangles; the trapezoid below the fold contains three of the four, so its area is $\\frac{3}{4} \\times 72 = 54$ ✓ — and the fold makes sense too, since flipping $\\triangle ADE$ down covers exactly one of the three tiles. (The choice $18$ is ANSWERING THE CUT-OFF TRIANGLE above the fold ✗; $36$ is ASSUMING HALF THE SIDES MEANS HALF THE AREA, when halving the sides quarters the area ✗; $63$ is TREATING THE RATIO LIKE A VOLUME, taking the top piece as $\\frac{72}{8} = 9$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 5,
  sections: {
    '5.5': s55,
  },
}
