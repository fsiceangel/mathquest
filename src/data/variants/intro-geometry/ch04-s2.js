// Introduction to Geometry chapter 4 — variations for section 4.2 (Area).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every area and height was computed twice, by two routes that do not share
//    arithmetic: a formula against a decomposition into rectangles and right
//    triangles, a subtraction from a bounding rectangle against a direct
//    split, a doubling into a rectangle or parallelogram against the half-base
//    formula, an algebraic solve against a backward test of the four printed
//    candidates, and a strip-by-strip count of a border against big-minus-
//    small. The two routes must agree before a key is written down.
//  - Every figure was built from its own numbers: bases and heights are exact
//    in coordinate units, every altitude foot lands on the base it belongs to,
//    and each slanted parallelogram side is drawn so its true length matches
//    its printed label.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: FINDING THE PERIMETER,
//    ADDING THE SIDES, HALVING LIKE A TRIANGLE, FORGETTING THE HALF, ADDING
//    BASE AND HEIGHT, TAKING THE HALF TWICE, AVERAGING BASE AND HEIGHT,
//    ADDING THE LEGS, AVERAGING THE LEGS, USING THE SLANT, USING ONLY THE
//    LONG SIDE, USING ONLY THE SHORT SIDE, STOPPING AT THE BOUNDING
//    RECTANGLE, MIXING UP PERIMETER AND AREA, SUBTRACTING A PIECE THAT IS
//    STILL THERE, DIVIDING WITHOUT DOUBLING, HALVING INSTEAD OF DOUBLING,
//    SUBTRACTING THE BASE, STOPPING AT THE FULL RECTANGLE, SUBTRACTING THE
//    WHOLE CORNER RECTANGLE, ADDING THE CORNER INSTEAD OF SUBTRACTING,
//    SKIPPING THE HALF, ANSWERING THE MIDSEGMENT, STOPPING AT THE OUTER
//    RECTANGLE, ANSWERING THE OPENING, ADDING INSTEAD OF SUBTRACTING,
//    COPYING THE GIVEN HEIGHT, DIVIDING THE AREA BY THE NEW BASE, and
//    DROPPING THE HALF ON ONE SIDE ONLY.
//  - No two choices inside an item name the same value.

const s42 = [
  // s1 — rectangle area from a labeled figure.
  [
    {
      q: 'What is the area of a rectangle with length $9$ and width $6$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 6], [0, 6]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.7, 3], text: '6' },
        ],
      },
      choices: ['$54$', '$30$', '$15$', '$27$'],
      answer: 0,
      solution:
        'Area is length times width: $9 \\times 6 = 54$ unit squares ✓ — picture $6$ rows of $9$ squares each. Check a second, independent way by slicing: cut the rectangle into a $9 \\times 4$ block and a $9 \\times 2$ block; they hold $36$ and $18$ squares, and $36 + 18 = 54$ ✓. (The choice $30$ is FINDING THE PERIMETER, $2(9 + 6)$ — the walk around the edge, not the fill inside ✗; $15$ is ADDING THE SIDES ✗; $27$ is HALVING LIKE A TRIANGLE, taking $\\frac{1}{2} \\cdot 9 \\cdot 6$ with no triangle in sight ✗.)',
    },
    {
      q: 'A tabletop is a rectangle $8$ units long and $5$ units wide, as shown. How many unit squares of area does it cover?',
      fig: {
        view: [-1.5, -1.5, 9.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 5], [0, 5]] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [8.7, 2.5], text: '5' },
        ],
      },
      choices: ['$26$', '$13$', '$40$', '$20$'],
      answer: 2,
      solution:
        'The tabletop holds $5$ rows of $8$ unit squares each: $8 \\times 5 = 40$ ✓. Check a second, independent way by splitting the length: an $8 \\times 5$ rectangle is a $5 \\times 5$ square next to a $3 \\times 5$ block, and $25 + 15 = 40$ ✓. (The choice $26$ is FINDING THE PERIMETER, $2(8 + 5)$ ✗; $13$ is ADDING THE SIDES ✗; $20$ is HALVING LIKE A TRIANGLE, taking half of $40$ when the whole rectangle is filled ✗.)',
    },
    {
      q: 'A rug is a $12 \\times 7$ rectangle. What is its area?',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 7], [0, 7]] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [12.8, 3.5], text: '7' },
        ],
      },
      choices: ['$38$', '$42$', '$19$', '$84$'],
      answer: 3,
      solution:
        'Length times width: $12 \\times 7 = 84$ unit squares ✓ — $7$ rows with $12$ squares in each row. Check a second, independent way by splitting the length at $10$: a $10 \\times 7$ block holds $70$ squares and the remaining $2 \\times 7$ strip holds $14$, and $70 + 14 = 84$ ✓. (The choice $38$ is FINDING THE PERIMETER, $2(12 + 7)$ ✗; $19$ is ADDING THE SIDES ✗; $42$ is HALVING LIKE A TRIANGLE — a rug covers its whole rectangle, not half of it ✗.)',
    },
  ],
  // s2 — triangle area from base and height.
  [
    {
      q: 'The dashed segment marks the height of this triangle. What is its area?',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [4, 7]] },
          { t: 'seg', a: [4, 7], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 7], to: [12, 0] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [3.4, 3.5], text: '7' },
        ],
      },
      choices: ['$42$', '$84$', '$19$', '$21$'],
      answer: 0,
      solution:
        'A triangle is half a parallelogram with the same base and height: $\\frac{1}{2}bh = \\frac{1}{2} \\cdot 12 \\cdot 7 = 42$ ✓. Check a second, independent way using the dashed altitude, which splits the triangle into two right triangles: the left one has legs $4$ and $7$, area $14$, and the right one has legs $8$ and $7$, area $28$, and $14 + 28 = 42$ ✓ — the base $12$ never appears whole in that route. (The choice $84$ is FORGETTING THE HALF, the area of the full parallelogram two copies would build ✗; $19$ is ADDING BASE AND HEIGHT ✗; $21$ is TAKING THE HALF TWICE, $\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot 12 \\cdot 7$ ✗.)',
    },
    {
      q: 'Find the area of the triangle shown.',
      fig: {
        view: [-1.5, -1.5, 11.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [4, 9]] },
          { t: 'seg', a: [4, 9], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 9], to: [10, 0] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [3.4, 4.5], text: '9' },
        ],
      },
      choices: ['$90$', '$45$', '$19$', '$9.5$'],
      answer: 1,
      solution:
        'Base times height, then halve: $\\frac{1}{2} \\cdot 10 \\cdot 9 = 45$ ✓. Check a second, independent way by doubling instead of halving: rotate a copy of the triangle and glue it along a slanted side to build a parallelogram with base $10$ and height $9$. That parallelogram holds $10 \\cdot 9 = 90$, and the triangle is exactly half of it, $45$ ✓. (The choice $90$ is FORGETTING THE HALF ✗; $19$ is ADDING BASE AND HEIGHT ✗; $9.5$ is AVERAGING BASE AND HEIGHT, which measures nothing here ✗.)',
    },
    {
      q: 'What is the area of this right triangle?',
      fig: {
        view: [-1.5, -1.5, 17.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 6]] },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 6] },
          { t: 'label', p: [8, -0.7], text: '16' },
          { t: 'label', p: [-0.6, 3], text: '6' },
        ],
      },
      choices: ['$96$', '$22$', '$11$', '$48$'],
      answer: 3,
      solution:
        'In a right triangle the two legs serve as base and height, so the area is $\\frac{1}{2} \\cdot 16 \\cdot 6 = 48$ ✓. Check a second, independent way with a rectangle: this triangle is exactly what a diagonal cut leaves of a $16 \\times 6$ rectangle, and the diagonal splits the rectangle into two matching halves, so the triangle holds $\\frac{96}{2} = 48$ ✓. (The choice $96$ is FORGETTING THE HALF — that is the whole rectangle ✗; $22$ is ADDING THE LEGS ✗; $11$ is AVERAGING THE LEGS ✗.)',
    },
  ],
  // s3 — parallelogram area: height, not slant.
  [
    {
      q: 'The dashed segment marks the height of this parallelogram. What is its area?',
      fig: {
        view: [-1.5, -1.5, 16.4, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [14.899, 5], [4.899, 5]] },
          { t: 'seg', a: [4.899, 5], b: [4.899, 0], dash: true },
          { t: 'right', at: [4.899, 0], from: [4.899, 5], to: [10, 0] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [13.2, 2.2], text: '7' },
          { t: 'label', p: [4.3, 2.5], text: '5' },
        ],
      },
      choices: ['$50$', '$70$', '$25$', '$34$'],
      answer: 0,
      solution:
        'Area of a parallelogram is base times HEIGHT: $10 \\cdot 5 = 50$ ✓. The dashed segment is the height; the slanted side $7$ leans, so it is longer than the straight drop and carries no area information of its own. Check a second, independent way by shearing: slice off the right triangle that leans past one end and slide it to the other end — nothing overlaps, nothing is lost, and the shape squares up into a $10 \\times 5$ rectangle holding $50$ unit squares ✓. (The choice $70$ is USING THE SLANT, $10 \\cdot 7$, which always overestimates ✗; $25$ is HALVING LIKE A TRIANGLE, but no doubling ever happened ✗; $34$ is FINDING THE PERIMETER, $2(10 + 7)$ ✗.)',
    },
    {
      q: 'A plot of farmland is the parallelogram shown. What is its area?',
      fig: {
        view: [-1.5, -1.5, 21.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [20, 6], [8, 6]] },
          { t: 'seg', a: [8, 6], b: [8, 0], dash: true },
          { t: 'right', at: [8, 0], from: [8, 6], to: [12, 0] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [16.8, 2.6], text: '10' },
          { t: 'label', p: [7.4, 3], text: '6' },
        ],
      },
      choices: ['$120$', '$72$', '$36$', '$44$'],
      answer: 1,
      solution:
        'Base times height: $12 \\cdot 6 = 72$ ✓ — the dashed drop of $6$ is the height, while the slanted side $10$ merely leans. Check a second, independent way by cutting along the vertical line through the base’s right end: the piece past it is a right triangle with legs $8$ and $6$, area $24$, and the piece before it is a trapezoid with parallel sides $12$ and $4$ and height $6$, area $\\frac{1}{2}(12 + 4) \\cdot 6 = 48$; together $24 + 48 = 72$ ✓. (The choice $120$ is USING THE SLANT, $12 \\cdot 10$ ✗; $36$ is HALVING LIKE A TRIANGLE ✗; $44$ is FINDING THE PERIMETER, $2(12 + 10)$ ✗.)',
    },
    {
      q: 'Find the area of the parallelogram shown.',
      fig: {
        view: [-1.5, -1.5, 14.4, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [12.873, 7], [3.873, 7]] },
          { t: 'seg', a: [3.873, 7], b: [3.873, 0], dash: true },
          { t: 'right', at: [3.873, 0], from: [3.873, 7], to: [9, 0] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [11.7, 3.3], text: '8' },
          { t: 'label', p: [3.27, 3.5], text: '7' },
        ],
      },
      choices: ['$72$', '$31.5$', '$63$', '$34$'],
      answer: 2,
      solution:
        'Base times height: $9 \\cdot 7 = 63$ ✓ — the height is the dashed perpendicular drop of $7$, never the slanted side $8$. Check a second, independent way through triangles: a diagonal cuts the parallelogram into two congruent triangles, each with base $9$ and height $7$, so each holds $\\frac{1}{2} \\cdot 9 \\cdot 7 = 31.5$ and the pair holds $63$ ✓. (The choice $72$ is USING THE SLANT, $9 \\cdot 8$ ✗; $31.5$ is HALVING LIKE A TRIANGLE — that is only one of the two congruent pieces ✗; $34$ is FINDING THE PERIMETER, $2(9 + 8)$ ✗.)',
    },
  ],
  // s4 — trapezoid area: average the parallel sides.
  [
    {
      q: 'In the trapezoid shown, the dashed segment is the height. What is the area?',
      fig: {
        view: [-1.5, -1.5, 8.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [5, 4], [2, 4]] },
          { t: 'seg', a: [2, 4], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [2, 4], to: [7, 0] },
          { t: 'label', p: [3.5, -0.7], text: '7' },
          { t: 'label', p: [3.5, 4.5], text: '3' },
          { t: 'label', p: [1.4, 2], text: '4' },
        ],
      },
      choices: ['$40$', '$20$', '$28$', '$12$'],
      answer: 1,
      solution:
        'Average the parallel sides, then multiply by the height: $\\frac{1}{2}(7 + 3) \\cdot 4 = 5 \\cdot 4 = 20$ ✓. Check a second, independent way by dissection: the two vertical cuts under the top side split the trapezoid into a left right triangle with legs $2$ and $4$ (area $4$), a middle $3 \\times 4$ rectangle (area $12$), and a right right triangle with legs $2$ and $4$ (area $4$); the pieces add to $4 + 12 + 4 = 20$ ✓. (The choice $40$ is FORGETTING THE HALF ✗; $28$ is USING ONLY THE LONG SIDE, $7 \\cdot 4$ ✗; $12$ is USING ONLY THE SHORT SIDE, $3 \\cdot 4$ ✗.)',
    },
    {
      q: 'Find the area of the trapezoid shown.',
      fig: {
        view: [-1.5, -1.5, 9.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 5], [2, 5]] },
          { t: 'seg', a: [2, 5], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [2, 5], to: [8, 0] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [4, 5.5], text: '4' },
          { t: 'label', p: [1.4, 2.5], text: '5' },
        ],
      },
      choices: ['$60$', '$40$', '$30$', '$20$'],
      answer: 2,
      solution:
        'The trapezoid formula averages the parallel sides: $\\frac{1}{2}(8 + 4) \\cdot 5 = 6 \\cdot 5 = 30$ ✓ — it behaves like a rectangle whose width is the average, $6$. Check a second, independent way with a dissection: dropping the two verticals from the top corners leaves a right triangle with legs $2$ and $5$ (area $5$) on each side of a $4 \\times 5$ rectangle (area $20$), and $5 + 20 + 5 = 30$ ✓. (The choice $60$ is FORGETTING THE HALF ✗; $40$ is USING ONLY THE LONG SIDE, $8 \\cdot 5$ ✗; $20$ is USING ONLY THE SHORT SIDE, $4 \\cdot 5$ ✗.)',
    },
    {
      q: 'In the trapezoid shown, the top side is parallel to the bottom side and the left side stands perpendicular to both. What is its area?',
      fig: {
        view: [-1.5, -1.5, 11.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [6, 3], [0, 3]] },
          { t: 'right', at: [0, 0], from: [10, 0], to: [0, 3] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [3, 3.5], text: '6' },
          { t: 'label', p: [-0.6, 1.5], text: '3' },
        ],
      },
      choices: ['$48$', '$30$', '$18$', '$24$'],
      answer: 3,
      solution:
        'The perpendicular left side IS the height, so the formula reads $\\frac{1}{2}(10 + 6) \\cdot 3 = 8 \\cdot 3 = 24$ ✓. Check a second, independent way by cutting along the vertical line under the top side’s right end: that leaves a $6 \\times 3$ rectangle (area $18$) and a right triangle with legs $4$ and $3$ (area $6$), and $18 + 6 = 24$ ✓. (The choice $48$ is FORGETTING THE HALF ✗; $30$ is USING ONLY THE LONG SIDE, $10 \\cdot 3$ ✗; $18$ is USING ONLY THE SHORT SIDE, $6 \\cdot 3$ ✗.)',
    },
  ],
  // s5 — rectilinear shape: split into rectangles.
  [
    {
      q: 'Every angle of the shape shown is a right angle. What is the area it encloses?',
      fig: {
        view: [-1.5, -1.5, 10.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 4], [5, 4], [5, 10], [0, 10]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.7, 2], text: '4' },
          { t: 'label', p: [7, 4.5], text: '4' },
          { t: 'label', p: [5.6, 7], text: '6' },
          { t: 'label', p: [2.5, 10.5], text: '5' },
          { t: 'label', p: [-0.7, 5], text: '10' },
        ],
      },
      choices: ['$66$', '$90$', '$38$', '$60$'],
      answer: 0,
      solution:
        'Split it with a horizontal cut at height $4$: the bottom slab is $9 \\times 4 = 36$ and the tall block above it is $5 \\times 6 = 30$, for a total of $36 + 30 = 66$ ✓. Check a second, independent way by subtracting: the bounding rectangle is $9 \\times 10 = 90$, and the missing bite at the top right measures $4 \\times 6 = 24$, so $90 - 24 = 66$ ✓ — two roads, one answer. (The choice $90$ is STOPPING AT THE BOUNDING RECTANGLE ✗; $38$ is MIXING UP PERIMETER AND AREA, since the staircase perimeter is $2(9 + 10)$ ✗; $60$ is SUBTRACTING A PIECE THAT IS STILL THERE, $90 - 30$, removing the $5 \\times 6$ block the shape keeps ✗.)',
    },
    {
      q: 'Every corner of this floor plan is a right angle. What is its area?',
      fig: {
        view: [-1.5, -1.5, 11.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 8], [7, 8], [7, 4], [0, 4]] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [10.7, 4], text: '8' },
          { t: 'label', p: [8.5, 8.5], text: '3' },
          { t: 'label', p: [6.4, 6], text: '4' },
          { t: 'label', p: [3.5, 4.5], text: '7' },
          { t: 'label', p: [-0.6, 2], text: '4' },
        ],
      },
      choices: ['$80$', '$52$', '$36$', '$68$'],
      answer: 1,
      solution:
        'Cut at height $4$: the bottom room is $10 \\times 4 = 40$, and the tower above sits on the right with footprint $3 \\times 4 = 12$, so the plan covers $40 + 12 = 52$ ✓. Check a second, independent way by subtracting: the bounding rectangle is $10 \\times 8 = 80$, and the missing upper-left region is $7 \\times 4 = 28$, so $80 - 28 = 52$ ✓. (The choice $80$ is STOPPING AT THE BOUNDING RECTANGLE ✗; $36$ is MIXING UP PERIMETER AND AREA, $2(10 + 8)$ ✗; $68$ is SUBTRACTING A PIECE THAT IS STILL THERE, $80 - 12$, removing the tower instead of the gap ✗.)',
    },
    {
      q: 'Every angle of the plot shown is a right angle. What is its area?',
      fig: {
        view: [-1.6, -1.5, 12.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 5], [11, 5], [11, 10], [0, 10]] },
          { t: 'label', p: [2, -0.7], text: '4' },
          { t: 'label', p: [4.6, 2.5], text: '5' },
          { t: 'label', p: [7.5, 4.3], text: '7' },
          { t: 'label', p: [11.7, 7.5], text: '5' },
          { t: 'label', p: [5.5, 10.5], text: '11' },
          { t: 'label', p: [-0.7, 5], text: '10' },
        ],
      },
      choices: ['$110$', '$42$', '$90$', '$75$'],
      answer: 3,
      solution:
        'Cut at height $5$: the wide slab on top is $11 \\times 5 = 55$, and the leg hanging below on the left is $4 \\times 5 = 20$, so the plot covers $55 + 20 = 75$ ✓. Check a second, independent way by subtracting: the bounding rectangle is $11 \\times 10 = 110$, and the missing lower-right region is $7 \\times 5 = 35$, so $110 - 35 = 75$ ✓. (The choice $110$ is STOPPING AT THE BOUNDING RECTANGLE ✗; $42$ is MIXING UP PERIMETER AND AREA, $2(11 + 10)$ ✗; $90$ is SUBTRACTING A PIECE THAT IS STILL THERE, $110 - 20$, removing the leg the plot keeps ✗.)',
    },
  ],
  // s6 — triangle area and base given; solve for the height.
  [
    {
      q: 'A triangular sail has area $54$ and its base measures $12$. What is the height to that base?',
      choices: ['$9$', '$4.5$', '$2.25$', '$42$'],
      answer: 0,
      solution:
        'Run the formula backwards: $54 = \\frac{1}{2} \\cdot 12 \\cdot h = 6h$, so $h = 9$ ✓. Check a second, independent way by testing the four printed candidates in $\\frac{1}{2} \\cdot 12 \\cdot h$, solving nothing. Try $4.5$: area $27$ ✗. Try $2.25$: area $13.5$ ✗. Try $42$: area $252$ ✗. Try $9$: area $54$ ✓ — exactly one candidate rebuilds the sail. (The choice $4.5$ is DIVIDING WITHOUT DOUBLING, $54 \\div 12$, which forgets the formula halves the product ✗; $2.25$ is HALVING INSTEAD OF DOUBLING, $54 \\div 24$ ✗; $42$ is SUBTRACTING THE BASE, $54 - 12$ ✗.)',
    },
    {
      q: 'A triangle has area $30$ and base $10$. What is the height to that base?',
      choices: ['$3$', '$1.5$', '$6$', '$20$'],
      answer: 2,
      solution:
        'Set up and solve: $30 = \\frac{1}{2} \\cdot 10 \\cdot h = 5h$, so $h = 6$ ✓. Check a second, independent way by doubling the picture: two copies of the triangle glue into a parallelogram with base $10$ and area $2 \\cdot 30 = 60$, and a parallelogram’s height is area over base, $60 \\div 10 = 6$ ✓ — no half anywhere in that route. (The choice $3$ is DIVIDING WITHOUT DOUBLING, $30 \\div 10$ ✗; $1.5$ is HALVING INSTEAD OF DOUBLING, $30 \\div 20$ ✗; $20$ is SUBTRACTING THE BASE, $30 - 10$ ✗.)',
    },
    {
      q: 'A triangle has area $56$, and one of its sides, of length $14$, is chosen as the base. What is the height to that side?',
      choices: ['$4$', '$2$', '$42$', '$8$'],
      answer: 3,
      solution:
        'From $56 = \\frac{1}{2} \\cdot 14 \\cdot h = 7h$ we get $h = 8$ ✓. Check a second, independent way by testing the printed candidates against $\\frac{1}{2} \\cdot 14 \\cdot h$. Try $4$: area $28$ ✗. Try $2$: area $14$ ✗. Try $42$: area $294$ ✗. Try $8$: area $56$ ✓ — one survivor, the same one the algebra named. (The choice $4$ is DIVIDING WITHOUT DOUBLING, $56 \\div 14$ ✗; $2$ is HALVING INSTEAD OF DOUBLING, $56 \\div 28$ ✗; $42$ is SUBTRACTING THE BASE, $56 - 14$ ✗.)',
    },
  ],
  // s7 — pentagon: rectangle minus a right-triangle corner.
  [
    {
      q: 'This pentagon is a $12 \\times 7$ rectangle with a right-triangle corner removed, as shown by the dashed lines. What is its area?',
      fig: {
        view: [-1.6, -1.5, 13.6, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 4], [8, 7], [0, 7]] },
          { t: 'seg', a: [8, 7], b: [12, 7], dash: true },
          { t: 'seg', a: [12, 7], b: [12, 4], dash: true },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [12.7, 2], text: '4' },
          { t: 'label', p: [4, 7.5], text: '8' },
          { t: 'label', p: [-0.7, 3.5], text: '7' },
          { t: 'label', p: [10, 7.5], text: '4' },
          { t: 'label', p: [12.7, 5.5], text: '3' },
        ],
      },
      choices: ['$84$', '$72$', '$90$', '$78$'],
      answer: 3,
      solution:
        'Subtract the corner: the full rectangle holds $12 \\times 7 = 84$, and the removed right triangle has legs $4$ and $3$, area $\\frac{1}{2} \\cdot 4 \\cdot 3 = 6$, so the pentagon holds $84 - 6 = 78$ ✓. Check a second, independent way by adding pieces instead: the vertical cut below the notch corner leaves an $8 \\times 7$ rectangle, area $56$, and a right trapezoid with parallel vertical sides $7$ and $4$ and width $4$, area $\\frac{1}{2}(7 + 4) \\cdot 4 = 22$; together $56 + 22 = 78$ ✓. (The choice $84$ is STOPPING AT THE FULL RECTANGLE ✗; $72$ is SUBTRACTING THE WHOLE CORNER RECTANGLE, $84 - 12$ ✗; $90$ is ADDING THE CORNER INSTEAD OF SUBTRACTING, $84 + 6$ ✗.)',
    },
    {
      q: 'This pentagon is a $9 \\times 5$ rectangle whose top-left corner was sliced off along a right triangle, as the dashed lines show. What is its area?',
      fig: {
        view: [-1.6, -1.5, 10.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 5], [3, 5], [0, 3]] },
          { t: 'seg', a: [0, 3], b: [0, 5], dash: true },
          { t: 'seg', a: [0, 5], b: [3, 5], dash: true },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.7, 2.5], text: '5' },
          { t: 'label', p: [6, 5.5], text: '6' },
          { t: 'label', p: [-0.6, 1.5], text: '3' },
          { t: 'label', p: [1.5, 5.5], text: '3' },
          { t: 'label', p: [-0.6, 4], text: '2' },
        ],
      },
      choices: ['$42$', '$45$', '$39$', '$48$'],
      answer: 0,
      solution:
        'Big minus small: the full rectangle holds $9 \\times 5 = 45$, and the sliced corner is a right triangle with legs $3$ and $2$, area $\\frac{1}{2} \\cdot 3 \\cdot 2 = 3$, so the pentagon holds $45 - 3 = 42$ ✓. Check a second, independent way by direct dissection: the vertical cut below the notch corner leaves a $6 \\times 5$ rectangle on the right, area $30$, and a right trapezoid on the left with parallel vertical sides $3$ and $5$ and width $3$, area $\\frac{1}{2}(3 + 5) \\cdot 3 = 12$; the pieces total $30 + 12 = 42$ ✓. (The choice $45$ is STOPPING AT THE FULL RECTANGLE ✗; $39$ is SUBTRACTING THE WHOLE CORNER RECTANGLE, $45 - 6$ ✗; $48$ is ADDING THE CORNER INSTEAD OF SUBTRACTING, $45 + 3$ ✗.)',
    },
    {
      q: 'This pentagon is an $11 \\times 6$ rectangle with a right-triangle corner removed, as shown by the dashed lines. What is its area?',
      fig: {
        view: [-1.6, -1.5, 12.6, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 2], [7, 6], [0, 6]] },
          { t: 'seg', a: [7, 6], b: [11, 6], dash: true },
          { t: 'seg', a: [11, 6], b: [11, 2], dash: true },
          { t: 'label', p: [5.5, -0.7], text: '11' },
          { t: 'label', p: [11.7, 1], text: '2' },
          { t: 'label', p: [3.5, 6.5], text: '7' },
          { t: 'label', p: [-0.7, 3], text: '6' },
          { t: 'label', p: [9, 6.5], text: '4' },
          { t: 'label', p: [11.7, 4], text: '4' },
        ],
      },
      choices: ['$66$', '$50$', '$58$', '$74$'],
      answer: 2,
      solution:
        'Subtraction first: the full rectangle holds $11 \\times 6 = 66$, and the removed right triangle has legs $4$ and $4$, area $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$, so the pentagon holds $66 - 8 = 58$ ✓. Check a second, independent way by adding: the vertical cut below the notch corner gives a $7 \\times 6$ rectangle, area $42$, plus a right trapezoid with parallel vertical sides $6$ and $2$ and width $4$, area $\\frac{1}{2}(6 + 2) \\cdot 4 = 16$; together $42 + 16 = 58$ ✓. (The choice $66$ is STOPPING AT THE FULL RECTANGLE ✗; $50$ is SUBTRACTING THE WHOLE CORNER RECTANGLE, $66 - 16$ ✗; $74$ is ADDING THE CORNER INSTEAD OF SUBTRACTING, $66 + 8$ ✗.)',
    },
  ],
  // s8 — trapezoid with area and parallel sides given; solve for the height.
  [
    {
      q: 'A trapezoid has parallel sides $8$ and $4$ and area $24$. What is its height $h$?',
      fig: {
        view: [-1.5, -1.5, 9.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 4], [2, 4]] },
          { t: 'seg', a: [2, 4], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [2, 4], to: [8, 0] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [4, 4.5], text: '4' },
          { t: 'label', p: [1.4, 2], text: 'h' },
        ],
      },
      choices: ['$3$', '$4$', '$2$', '$6$'],
      answer: 1,
      solution:
        'Set up the formula and solve: $24 = \\frac{1}{2}(8 + 4)h = 6h$, so $h = 4$ ✓ — the average of the parallel sides is $6$, and $6 \\times 4 = 24$ closes the loop. Check a second, independent way by testing the printed candidates in $\\frac{1}{2}(8 + 4)h$. Try $3$: area $18$ ✗. Try $2$: area $12$ ✗. Try $6$: area $36$ ✗. Try $4$: area $24$ ✓ — one candidate fits. (The choice $2$ is SKIPPING THE HALF, dividing $24$ by the full sum $12$ ✗; $3$ is USING ONLY THE LONG SIDE, $24 \\div 8$ ✗; $6$ is USING ONLY THE SHORT SIDE, $24 \\div 4$ ✗.)',
    },
    {
      q: 'A trapezoid has parallel sides $10$ and $4$ and area $35$. What is its height $h$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [7, 5], [3, 5]] },
          { t: 'seg', a: [3, 5], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 5], to: [10, 0] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [5, 5.5], text: '4' },
          { t: 'label', p: [2.4, 2.5], text: 'h' },
        ],
      },
      choices: ['$5$', '$2.5$', '$3.5$', '$8.75$'],
      answer: 0,
      solution:
        'From $35 = \\frac{1}{2}(10 + 4)h = 7h$ we get $h = 5$ ✓. Check a second, independent way by dissecting with the two verticals under the top side: they carve the trapezoid into a middle rectangle of width $4$ and two right triangles whose bases total $10 - 4 = 6$, so the area in terms of $h$ is $4h + \\frac{1}{2} \\cdot 6 \\cdot h = 7h$; setting $7h = 35$ gives $h = 5$ ✓ from a picture, not a formula. (The choice $2.5$ is SKIPPING THE HALF, dividing $35$ by the full sum $14$ ✗; $3.5$ is USING ONLY THE LONG SIDE, $35 \\div 10$ ✗; $8.75$ is USING ONLY THE SHORT SIDE, $35 \\div 4$ ✗.)',
    },
    {
      q: 'A trapezoid has parallel sides $9$ and $3$ and area $42$. What is its height $h$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 7], [3, 7]] },
          { t: 'seg', a: [3, 7], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 7], to: [9, 0] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [4.5, 7.5], text: '3' },
          { t: 'label', p: [2.4, 3.5], text: 'h' },
        ],
      },
      choices: ['$3.5$', '$14$', '$7$', '$6$'],
      answer: 2,
      solution:
        'Solve $42 = \\frac{1}{2}(9 + 3)h = 6h$, so $h = 7$ ✓. Check a second, independent way by doubling: a flipped copy glues onto the trapezoid to make a parallelogram with base $9 + 3 = 12$, the same height, and area $2 \\cdot 42 = 84$; then $12h = 84$ gives $h = 7$ ✓ with no half in sight. (The choice $3.5$ is SKIPPING THE HALF, dividing $42$ by the full sum $12$ ✗; $14$ is USING ONLY THE SHORT SIDE, $42 \\div 3$ ✗; $6$ is ANSWERING THE MIDSEGMENT, the average of $9$ and $3$, which is a length across, not up ✗.)',
    },
  ],
  // s9 — frame: outer rectangle minus the opening.
  [
    {
      q: 'A mirror frame has outer dimensions $13 \\times 10$, and the glass filling its opening is a $9 \\times 6$ rectangle. What is the area of the frame itself (the border region)?',
      fig: {
        view: [-1.6, -1.5, 14.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [13, 10], [0, 10]], fill: false },
          { t: 'poly', pts: [[2, 2], [11, 2], [11, 8], [2, 8]], fill: false },
          { t: 'label', p: [6.5, -0.8], text: '13' },
          { t: 'label', p: [-0.8, 5], text: '10' },
          { t: 'label', p: [6.5, 2.6], text: '9' },
          { t: 'label', p: [10.3, 5], text: '6' },
          { t: 'label', p: [6.5, 9], text: '2' },
        ],
      },
      choices: ['$76$', '$130$', '$54$', '$184$'],
      answer: 0,
      solution:
        'Big minus small: the outer rectangle holds $13 \\times 10 = 130$ and the opening holds $9 \\times 6 = 54$, so the frame is $130 - 54 = 76$ ✓. Check a second, independent way by counting the four strips of width $2$: the full-width top and bottom strips hold $13 \\times 2 = 26$ each, and the left and right strips between them hold $6 \\times 2 = 12$ each, so $26 + 26 + 12 + 12 = 76$ ✓ — no strip counted twice, no gap missed. (The choice $130$ is STOPPING AT THE OUTER RECTANGLE ✗; $54$ is ANSWERING THE OPENING, the glass instead of the frame ✗; $184$ is ADDING INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'A paved path completely surrounds a rectangular lawn. The outer edge of the paving is an $11 \\times 8$ rectangle and the lawn is a $7 \\times 4$ rectangle. What is the area of the paving?',
      fig: {
        view: [-1.6, -1.5, 12.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [11, 8], [0, 8]], fill: false },
          { t: 'poly', pts: [[2, 2], [9, 2], [9, 6], [2, 6]], fill: false },
          { t: 'label', p: [5.5, -0.8], text: '11' },
          { t: 'label', p: [-0.8, 4], text: '8' },
          { t: 'label', p: [5.5, 2.6], text: '7' },
          { t: 'label', p: [8.3, 4], text: '4' },
          { t: 'label', p: [5.5, 7], text: '2' },
        ],
      },
      choices: ['$88$', '$28$', '$60$', '$116$'],
      answer: 2,
      solution:
        'Subtract the lawn from the whole: $11 \\times 8 = 88$ minus $7 \\times 4 = 28$ leaves $88 - 28 = 60$ of paving ✓. Check a second, independent way strip by strip: the path is $2$ wide all around, so the top and bottom runs hold $11 \\times 2 = 22$ each and the two side runs between them hold $4 \\times 2 = 8$ each; $22 + 22 + 8 + 8 = 60$ ✓. (The choice $88$ is STOPPING AT THE OUTER RECTANGLE ✗; $28$ is ANSWERING THE OPENING, the lawn instead of the path ✗; $116$ is ADDING INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'A metal plate is a $14 \\times 10$ rectangle with a $10 \\times 7$ rectangular hole cut through its middle, as shown. What is the area of metal that remains?',
      fig: {
        view: [-1.6, -1.5, 15.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 10], [0, 10]], fill: false },
          { t: 'poly', pts: [[2, 1.5], [12, 1.5], [12, 8.5], [2, 8.5]], fill: false },
          { t: 'label', p: [7, -0.8], text: '14' },
          { t: 'label', p: [-0.8, 5], text: '10' },
          { t: 'label', p: [7, 2.1], text: '10' },
          { t: 'label', p: [11.3, 5], text: '7' },
        ],
      },
      choices: ['$140$', '$70$', '$210$', '$48$'],
      answer: 1,
      solution:
        'Big minus small: the plate starts at $14 \\times 10 = 140$, the hole removes $10 \\times 7 = 70$, and $140 - 70 = 70$ of metal remains ✓ — the hole here happens to take exactly half the plate. Check a second, independent way strip by strip: the side borders are $\\frac{14 - 10}{2} = 2$ wide and the top and bottom borders are $\\frac{10 - 7}{2} = 1.5$ wide, so the full-width top and bottom strips hold $14 \\times 1.5 = 21$ each and the side strips between them hold $7 \\times 2 = 14$ each; $21 + 21 + 14 + 14 = 70$ ✓. (The choice $140$ is STOPPING AT THE OUTER RECTANGLE ✗; $210$ is ADDING INSTEAD OF SUBTRACTING ✗; $48$ is MIXING UP PERIMETER AND AREA, the outer perimeter $2(14 + 10)$ ✗.)',
    },
  ],
  // s10 — one triangle, two base-height pairs, one area.
  [
    {
      q: 'In triangle $DEF$, side $DE = 9$ and the height from $F$ to line $DE$ is $8$. If $EF = 12$, what is the height from $D$ to line $EF$?',
      choices: ['$8$', '$3$', '$6$', '$12$'],
      answer: 2,
      solution:
        'One triangle, one area, two base-height pairs. First, $[DEF] = \\frac{1}{2} \\cdot 9 \\cdot 8 = 36$. Now read the area off the other base: $36 = \\frac{1}{2} \\cdot 12 \\cdot h = 6h$, so $h = 6$ ✓. Check a second, independent way by proportion, never computing the area: switching from base $9$ to base $12$ stretches the base by $\\frac{12}{9} = \\frac{4}{3}$, so the height must shrink by the same factor to keep the product fixed: $8 \\cdot \\frac{9}{12} = 6$ ✓. (The choice $8$ is COPYING THE GIVEN HEIGHT, which belongs to the other base ✗; $3$ is DIVIDING THE AREA BY THE NEW BASE, $36 \\div 12$, forgetting the doubling ✗; $12$ is DROPPING THE HALF ON ONE SIDE ONLY, solving $9 \\cdot 8 = \\frac{1}{2} \\cdot 12 \\cdot h$ ✗.)',
    },
    {
      q: 'In triangle $PQR$, side $PQ = 8$ and the height from $R$ to line $PQ$ is $9$. If $QR = 9$, what is the height from $P$ to line $QR$?',
      choices: ['$9$', '$4$', '$16$', '$8$'],
      answer: 3,
      solution:
        'The area does not care which base you pick. From the first pair, $[PQR] = \\frac{1}{2} \\cdot 8 \\cdot 9 = 36$. From the second, $36 = \\frac{1}{2} \\cdot 9 \\cdot h$, so $h = \\frac{72}{9} = 8$ ✓. Check a second, independent way with the locked product: every base-height pair of one triangle multiplies to twice the area, here $8 \\cdot 9 = 72$; the new base $9$ therefore needs height $\\frac{72}{9} = 8$ ✓ — base and height simply trade places. (The choice $9$ is COPYING THE GIVEN HEIGHT ✗; $4$ is DIVIDING THE AREA BY THE NEW BASE, $36 \\div 9$ ✗; $16$ is DROPPING THE HALF ON ONE SIDE ONLY, solving $8 \\cdot 9 = \\frac{1}{2} \\cdot 9 \\cdot h$ ✗.)',
    },
    {
      q: 'In triangle $XYZ$, side $XY = 12$ and the height from $Z$ to line $XY$ is $7$. If $YZ = 14$, what is the height from $X$ to line $YZ$?',
      choices: ['$3$', '$6$', '$7$', '$12$'],
      answer: 1,
      solution:
        'Compute the area once: $[XYZ] = \\frac{1}{2} \\cdot 12 \\cdot 7 = 42$. Then read it against the other base: $42 = \\frac{1}{2} \\cdot 14 \\cdot h = 7h$, so $h = 6$ ✓. Check a second, independent way by proportion: the base grows from $12$ to $14$, a factor of $\\frac{7}{6}$, so the height shrinks by the same factor, $7 \\cdot \\frac{12}{14} = 6$ ✓ — a longer base sweeps the same area with a shorter height. (The choice $3$ is DIVIDING THE AREA BY THE NEW BASE, $42 \\div 14$ ✗; $7$ is COPYING THE GIVEN HEIGHT ✗; $12$ is DROPPING THE HALF ON ONE SIDE ONLY, solving $12 \\cdot 7 = \\frac{1}{2} \\cdot 14 \\cdot h$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 4,
  sections: {
    '4.2': s42,
  },
}
