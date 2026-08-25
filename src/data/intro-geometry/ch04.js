// Introduction to Geometry — Chapter 4: Perimeter and Area
// All problems, explanations, and examples are original MathQuest content.

const s41 = {
  id: '4.1',
  title: 'Perimeter',
  learn: {
    concepts: [
      {
        heading: 'Perimeter is a walk around the edge',
        body: 'The perimeter of a polygon is the total distance you travel walking once around its boundary — just add up all the side lengths. Two shortcuts you already trust: a rectangle with length $l$ and width $w$ has perimeter $2(l + w)$, and a square with side $s$ has perimeter $4s$. Perimeter is measured in plain length units, never square units.',
      },
      {
        heading: 'Let algebra carry the sides',
        body: 'Side lengths are often given as expressions like $2x + 1$. No problem: the perimeter is still the sum of the sides. Add the expressions, set the total equal to the given perimeter, and solve. Always finish by computing the actual side lengths and checking that they add back up.',
      },
      {
        heading: 'The staircase secret',
        body: 'Take a shape whose sides all meet at right angles and whose boundary climbs like a staircase. Slide every horizontal edge up to the top and every vertical edge out to the side: nothing overlaps and nothing is missed, so the perimeter equals the perimeter of the bounding rectangle! The number of steps does not matter at all — only the overall width and height do.',
      },
      {
        heading: 'Cuts that change nothing — and cuts that do',
        body: 'Snip a rectangular bite out of a corner: the two new edges exactly replace the two edges you removed, so the perimeter stays the same. But carve a notch into the middle of a side and the story changes: the floor of the notch replaces the piece of side you removed, while the two walls of the notch are pure bonus. A notch of depth $d$ adds $2d$ to the perimeter. Moral: shapes with equal perimeter can look wildly different — and, as we will see, hold very different areas.',
      },
    ],
    examples: [
      {
        problem: 'Every angle in this staircase shape is a right angle. Only two sides are labeled. Find the perimeter.',
        fig: {
          view: [-1.5, -1.5, 8.5, 7.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [7, 0], [7, 2], [5, 2], [5, 4], [3, 4], [3, 6], [0, 6]] },
            { t: 'seg', a: [7, 2], b: [7, 6], dash: true },
            { t: 'seg', a: [3, 6], b: [7, 6], dash: true },
            { t: 'label', p: [3.5, -0.7], text: '7' },
            { t: 'label', p: [-0.6, 3], text: '6' },
          ],
        },
        steps: [
          'It looks like we are missing information — six sides are unlabeled! But slide every short horizontal edge straight up: together they must span the same width as the bottom, $7$.',
          'Likewise, slide every short vertical edge to the right: together they climb the same height as the left side, $6$.',
          'So the perimeter equals the perimeter of the dashed bounding rectangle: $2(7 + 6) = 26$.',
        ],
        answer: 'The perimeter is $26$',
      },
      {
        problem: 'A triangle has sides of length $x + 3$, $2x$, and $x + 7$, and its perimeter is $30$. Find the three side lengths.',
        steps: [
          'The perimeter is the sum of the sides: $(x + 3) + 2x + (x + 7) = 4x + 10$.',
          'Set this equal to $30$: from $4x + 10 = 30$ we get $4x = 20$, so $x = 5$.',
          'Substitute back: the sides are $5 + 3 = 8$, $2 \\cdot 5 = 10$, and $5 + 7 = 12$. Check: $8 + 10 + 12 = 30$.',
        ],
        answer: 'The sides are $8$, $10$, and $12$',
      },
      {
        problem: 'A $10 \\times 6$ rectangle has a notch cut into its top side: the notch is $2$ wide and $1$ deep. Find the perimeter of the resulting shape.',
        fig: {
          view: [-1.5, -1.5, 11.5, 7.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [10, 0], [10, 6], [6, 6], [6, 5], [4, 5], [4, 6], [0, 6]] },
            { t: 'label', p: [5, -0.7], text: '10' },
            { t: 'label', p: [10.7, 3], text: '6' },
            { t: 'label', p: [5, 4.5], text: '2' },
            { t: 'label', p: [3.5, 5.5], text: '1' },
          ],
        },
        steps: [
          'The original rectangle has perimeter $2(10 + 6) = 32$.',
          'The notch removes a piece of the top of width $2$, but its floor puts a width of $2$ right back — no change there.',
          'The two side walls of the notch, each of depth $1$, are brand new boundary. They add $2 \\cdot 1 = 2$.',
          'So the perimeter is $32 + 2 = 34$. (Check by adding all eight sides: $10 + 6 + 4 + 1 + 2 + 1 + 4 + 6 = 34$.)',
        ],
        answer: 'The perimeter is $34$',
      },
    ],
  },
  problems: [
    {
      q: 'A rectangle has length $9$ and width $4$. What is its perimeter?',
      fig: {
        view: [-1.5, -1.5, 10.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 4], [0, 4]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.7, 2], text: '4' },
        ],
      },
      choices: ['$36$', '$13$', '$26$', '$22$'],
      answer: 2,
      solution: 'Perimeter adds all four sides: $2(9 + 4) = 2 \\cdot 13 = 26$. Watch the classic mix-up: $36$ is the area ($9 \\times 4$), which measures the inside, not the walk around the edge. And $13$ is only half the trip — you have to come back!',
    },
    {
      q: 'A square has perimeter $36$. How long is each side?',
      choices: ['$9$', '$6$', '$12$', '$18$'],
      answer: 0,
      solution: 'A square has four equal sides, so each side is $36 \\div 4 = 9$. (If you got $6$, you may have taken a square root — that would find the side of a square with AREA $36$. Perimeter divides, area square-roots.)',
    },
    {
      q: 'What is the perimeter of this right triangle?',
      fig: {
        view: [-1.5, -1.5, 14, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5]] },
          { t: 'right', at: [12, 0], from: [0, 0], to: [12, 5] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [12.8, 2.5], text: '5' },
          { t: 'label', p: [5.2, 3.2], text: '13' },
        ],
      },
      choices: ['$25$', '$30$', '$17$', '$60$'],
      answer: 1,
      solution: 'Add all three sides: $12 + 5 + 13 = 30$. Every side counts — $17$ uses only the two legs, and $25$ skips a side too. ($60$ is the product $12 \\times 5$, which belongs to an area computation, not a perimeter.)',
    },
    {
      q: 'A regular hexagon has sides of length $7$. What is its perimeter?',
      choices: ['$35$', '$28$', '$49$', '$42$'],
      answer: 3,
      solution: 'A regular hexagon has $6$ equal sides, so the perimeter is $6 \\times 7 = 42$. Counting sides carefully matters: $35$ would be a pentagon and $28$ a square. ($49$ is $7^2$ — squaring is an area move, not a perimeter move.)',
    },
    {
      q: 'Every angle in this shape is a right angle. What is its perimeter?',
      fig: {
        view: [-1.5, -1.5, 9.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 3], [6, 3], [6, 5], [4, 5], [4, 7], [0, 7]] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [-0.6, 3.5], text: '7' },
        ],
      },
      choices: ['$30$', '$28$', '$56$', '$32$'],
      answer: 0,
      solution: 'Slide each horizontal step up and each vertical step to the right: together they rebuild the top and right sides of an $8 \\times 7$ rectangle. So the perimeter is $2(8 + 7) = 30$ — the staircase costs nothing extra! ($56$ is the area of that bounding rectangle, a different measurement entirely.)',
    },
    {
      q: 'A rectangle has width $x$ and length $2x + 1$. Its perimeter is $44$. What is the length?',
      fig: {
        view: [-1.5, -2, 16.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [15, 7], [0, 7]] },
          { t: 'label', p: [7.5, -0.8], text: '2x + 1' },
          { t: 'label', p: [15.9, 3.5], text: 'x' },
        ],
      },
      choices: ['$7$', '$14$', '$22$', '$15$'],
      answer: 3,
      solution: 'The perimeter is $2(x + 2x + 1) = 2(3x + 1) = 6x + 2$. Setting $6x + 2 = 44$ gives $6x = 42$, so $x = 7$. Careful — the question asks for the LENGTH, which is $2x + 1 = 15$, not $x$ itself. Check: $2(7 + 15) = 44$.',
    },
    {
      q: 'A notch $2$ wide and $2$ deep is cut into the top side of a $12 \\times 5$ rectangle, as shown. What is the perimeter of the resulting shape?',
      fig: {
        view: [-1.5, -1.5, 13.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 5], [8, 5], [8, 3], [6, 3], [6, 5], [0, 5]] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [12.7, 2.5], text: '5' },
          { t: 'label', p: [7, 2.4], text: '2' },
          { t: 'label', p: [8.6, 4], text: '2' },
        ],
      },
      choices: ['$34$', '$38$', '$30$', '$42$'],
      answer: 1,
      solution: 'The floor of the notch replaces the width of top edge that was removed, so widths balance out. What is new: the two walls of the notch, each of depth $2$. The original perimeter $2(12 + 5) = 34$ grows by $2 \\cdot 2 = 4$, giving $38$. Cutting material INTO a shape can make its boundary longer — perimeter and area do not have to move together.',
    },
    {
      q: 'A $3 \\times 2$ rectangle is cut off the top-right corner of a $9 \\times 6$ rectangle, as shown. What is the perimeter of the L-shape that remains?',
      fig: {
        view: [-1.5, -1.5, 10.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 4], [6, 4], [6, 6], [0, 6]] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [9.7, 2], text: '4' },
          { t: 'label', p: [7.5, 4.5], text: '3' },
          { t: 'label', p: [6.6, 5], text: '2' },
          { t: 'label', p: [3, 6.5], text: '6' },
          { t: 'label', p: [-0.6, 3], text: '6' },
        ],
      },
      choices: ['$25$', '$28$', '$30$', '$32$'],
      answer: 2,
      solution: 'Add the six sides: $9 + 4 + 3 + 2 + 6 + 6 = 30$. Notice that is exactly $2(9 + 6)$, the perimeter of the original rectangle! A corner cut trades away two edges but replaces them with two new edges of the same total lengths — the boundary just dents inward without getting shorter.',
    },
    {
      q: 'A rectangle has perimeter $24$, and its side lengths are whole numbers. What is the largest area it could have?',
      choices: ['$20$', '$32$', '$35$', '$36$'],
      answer: 3,
      solution: 'Perimeter $24$ means length plus width is $12$. Try the pairs: $1 \\times 11 = 11$, $2 \\times 10 = 20$, $3 \\times 9 = 27$, $4 \\times 8 = 32$, $5 \\times 7 = 35$, $6 \\times 6 = 36$. The square wins with $36$. Same fence, very different yards — the closer to a square, the more area a fixed perimeter encloses.',
    },
    {
      q: 'Every angle in this four-step staircase is a right angle. What is its perimeter?',
      fig: {
        view: [-1.5, -1.5, 11.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 2], [8, 2], [8, 4], [6, 4], [6, 6], [3, 6], [3, 8], [0, 8]] },
          { t: 'label', p: [5, -0.8], text: '10' },
          { t: 'label', p: [-0.7, 4], text: '8' },
        ],
      },
      choices: ['$36$', '$80$', '$40$', '$34$'],
      answer: 0,
      solution: 'Four steps, two steps, ten steps — it makes no difference! The horizontal step edges slide up to rebuild a top of length $10$, and the vertical step edges slide right to rebuild a side of height $8$. Perimeter: $2(10 + 8) = 36$. ($80$ is the bounding rectangle AREA, and the staircase certainly holds less area than that — but its perimeter matches the rectangle exactly.)',
    },
  ],
}

const s42 = {
  id: '4.2',
  title: 'Area',
  learn: {
    concepts: [
      {
        heading: 'Area counts unit squares',
        body: 'The area of a region is the number of $1 \\times 1$ squares needed to tile it. A rectangle with length $l$ and width $w$ holds $w$ rows of $l$ squares each, so its area is $lw$. That row-counting picture is the seed from which every other area formula grows.',
      },
      {
        heading: 'Shear a parallelogram into a rectangle',
        body: 'Slice a right triangle off one end of a parallelogram and slide it to the other end: the shape becomes a rectangle with the same base $b$ and the same height $h$. So a parallelogram has area $bh$. One giant warning: $h$ is the perpendicular distance between the base and its opposite side — the slanted side is NOT the height, and using it always overestimates the area.',
      },
      {
        heading: 'Double a triangle',
        body: 'Take any triangle and attach a rotated copy of itself along one side: the two copies fit together into a parallelogram with the same base $b$ and height $h$. The triangle is exactly half of it, so its area is $\\frac{1}{2}bh$. We will write $[ABC]$ as a shorthand for "the area of triangle $ABC$" — geometers use this bracket notation constantly.',
      },
      {
        heading: 'Trapezoids and composite shapes',
        body: 'Two copies of a trapezoid, one flipped, join into a parallelogram with base $b_1 + b_2$ and the same height, so a trapezoid has area $\\frac{1}{2}(b_1 + b_2)h$. And for a complicated shape, do not hunt for a formula — cut it into rectangles and triangles and add, or surround it with a big rectangle and subtract the extra pieces.',
      },
    ],
    examples: [
      {
        problem: 'Find the area of a parallelogram with base $8$, slanted side $5$, and height $4$.',
        fig: {
          view: [-1.5, -1.5, 12.5, 5.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [8, 0], [11, 4], [3, 4]] },
            { t: 'seg', a: [3, 4], b: [3, 0], dash: true },
            { t: 'right', at: [3, 0], from: [3, 4], to: [8, 0] },
            { t: 'label', p: [4, -0.7], text: '8' },
            { t: 'label', p: [10.3, 1.8], text: '5' },
            { t: 'label', p: [2.4, 2], text: '4' },
          ],
        },
        steps: [
          'The formula is base times height: $A = bh$. The base is $8$ — but which other number is the height?',
          'The height is the perpendicular distance between the base and the top side, shown by the dashed segment: $4$. The slanted side $5$ is a distraction here.',
          'So $A = 8 \\cdot 4 = 32$. (Using the slant would give $40$, too big — the slant travels farther than straight up.)',
        ],
        answer: 'The area is $32$',
      },
      {
        problem: 'Find the area of a trapezoid with parallel sides $10$ and $6$ and height $4$.',
        fig: {
          view: [-1.5, -1.5, 11.5, 5.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [10, 0], [8, 4], [2, 4]] },
            { t: 'seg', a: [2, 4], b: [2, 0], dash: true },
            { t: 'right', at: [2, 0], from: [2, 4], to: [10, 0] },
            { t: 'label', p: [5, -0.7], text: '10' },
            { t: 'label', p: [5, 4.5], text: '6' },
            { t: 'label', p: [1.4, 2], text: '4' },
          ],
        },
        steps: [
          'The trapezoid formula averages the two parallel sides, then multiplies by the height: $A = \\frac{1}{2}(b_1 + b_2)h$.',
          'Here $A = \\frac{1}{2}(10 + 6) \\cdot 4 = \\frac{1}{2} \\cdot 16 \\cdot 4$.',
          'That is $8 \\cdot 4 = 32$. It makes sense: the trapezoid behaves like a rectangle whose width is the average of $10$ and $6$, namely $8$.',
        ],
        answer: 'The area is $32$',
      },
      {
        problem: 'Every angle in this L-shape is a right angle. Find its area.',
        fig: {
          view: [-1.5, -1.5, 11.5, 8.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [10, 0], [10, 3], [4, 3], [4, 7], [0, 7]] },
            { t: 'seg', a: [0, 3], b: [4, 3], dash: true },
            { t: 'label', p: [5, -0.7], text: '10' },
            { t: 'label', p: [10.7, 1.5], text: '3' },
            { t: 'label', p: [7, 3.5], text: '6' },
            { t: 'label', p: [4.6, 5], text: '4' },
            { t: 'label', p: [2, 7.5], text: '4' },
            { t: 'label', p: [-0.6, 3.5], text: '7' },
          ],
        },
        steps: [
          'Cut along the dashed line: the bottom piece is a $10 \\times 3$ rectangle with area $30$, and the top piece is a $4 \\times 4$ square with area $16$. Total: $30 + 16 = 46$.',
          'Or subtract instead: the bounding rectangle is $10 \\times 7 = 70$, and the missing bite is $6 \\times 4 = 24$, so $70 - 24 = 46$. Same answer, two roads.',
        ],
        answer: 'The area is $46$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the area of a rectangle with length $7$ and width $4$?',
      fig: {
        view: [-1.5, -1.5, 8.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [7, 4], [0, 4]] },
          { t: 'label', p: [3.5, -0.7], text: '7' },
          { t: 'label', p: [7.7, 2], text: '4' },
        ],
      },
      choices: ['$22$', '$28$', '$11$', '$56$'],
      answer: 1,
      solution: 'Area is length times width: $7 \\times 4 = 28$ unit squares — picture $4$ rows of $7$ squares each. ($22$ is the perimeter, the walk around the outside; area fills the inside.)',
    },
    {
      q: 'What is the area of this triangle?',
      fig: {
        view: [-1.5, -1.5, 11.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [4, 6]] },
          { t: 'seg', a: [4, 6], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 6], to: [10, 0] },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [3.4, 3], text: '6' },
        ],
      },
      choices: ['$60$', '$16$', '$30$', '$32$'],
      answer: 2,
      solution: 'A triangle is half a parallelogram: $[ABC] = \\frac{1}{2}bh = \\frac{1}{2} \\cdot 10 \\cdot 6 = 30$. The most common slip is forgetting the half and getting $60$ — that would be the full parallelogram built from two copies of this triangle.',
    },
    {
      q: 'What is the area of this parallelogram?',
      fig: {
        view: [-1.5, -1.5, 16.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [15, 4], [3, 4]] },
          { t: 'seg', a: [3, 4], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 4], to: [12, 0] },
          { t: 'label', p: [6, -0.7], text: '12' },
          { t: 'label', p: [14.3, 1.8], text: '5' },
          { t: 'label', p: [2.4, 2], text: '4' },
        ],
      },
      choices: ['$60$', '$24$', '$34$', '$48$'],
      answer: 3,
      solution: 'Area of a parallelogram is base times HEIGHT: $12 \\cdot 4 = 48$. The dashed segment is the height; the slanted side $5$ leans, so it is longer than the true height and would inflate the area to $60$. ($34$ is the perimeter, a different measurement.)',
    },
    {
      q: 'What is the area of this trapezoid?',
      fig: {
        view: [-1.5, -1.5, 9.5, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 3], [2, 3]] },
          { t: 'seg', a: [2, 3], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [2, 3], to: [8, 0] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [4, 3.5], text: '4' },
          { t: 'label', p: [1.4, 1.5], text: '3' },
        ],
      },
      choices: ['$18$', '$36$', '$15$', '$24$'],
      answer: 0,
      solution: 'Average the parallel sides, then multiply by the height: $\\frac{1}{2}(8 + 4) \\cdot 3 = 6 \\cdot 3 = 18$. Forgetting the $\\frac{1}{2}$ gives $36$, and using only the long base gives $8 \\cdot 3 = 24$ — the averaging is what makes it a trapezoid formula.',
    },
    {
      q: 'Every angle in this shape is a right angle. What is its area?',
      fig: {
        view: [-1.5, -1.5, 9.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 5], [5, 5], [5, 9], [0, 9]] },
          { t: 'label', p: [4, -0.7], text: '8' },
          { t: 'label', p: [8.7, 2.5], text: '5' },
          { t: 'label', p: [6.5, 5.5], text: '3' },
          { t: 'label', p: [5.6, 7], text: '4' },
          { t: 'label', p: [2.5, 9.5], text: '5' },
          { t: 'label', p: [-0.7, 4.5], text: '9' },
        ],
      },
      choices: ['$72$', '$34$', '$60$', '$57$'],
      answer: 2,
      solution: 'Split it: the bottom block is $8 \\times 5 = 40$, and the top block is $5 \\times 4 = 20$, for a total of $60$. Or subtract: the bounding $8 \\times 9$ rectangle has area $72$, minus the missing $3 \\times 4 = 12$ corner gives $60$. ($34$ is the perimeter — remember it also equals the bounding rectangle perimeter, by the staircase idea!)',
    },
    {
      q: 'A triangle has area $42$ and base $12$. What is the height to that base?',
      choices: ['$3.5$', '$7$', '$14$', '$6$'],
      answer: 1,
      solution: 'Run the formula backwards: $42 = \\frac{1}{2} \\cdot 12 \\cdot h = 6h$, so $h = 7$. (If you divided $42$ by $12$ directly you would get $3.5$ — that forgets that the formula already halved the base.)',
    },
    {
      q: 'This pentagon is a $10 \\times 6$ rectangle with a right-triangle corner removed, as shown by the dashed lines. What is its area?',
      fig: {
        view: [-1.5, -1.5, 11.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 3], [6, 6], [0, 6]] },
          { t: 'seg', a: [6, 6], b: [10, 6], dash: true },
          { t: 'seg', a: [10, 6], b: [10, 3], dash: true },
          { t: 'label', p: [5, -0.7], text: '10' },
          { t: 'label', p: [10.7, 1.5], text: '3' },
          { t: 'label', p: [3, 6.5], text: '6' },
          { t: 'label', p: [-0.6, 3], text: '6' },
          { t: 'label', p: [8, 6.5], text: '4' },
          { t: 'label', p: [10.7, 4.5], text: '3' },
        ],
      },
      choices: ['$60$', '$54$', '$48$', '$42$'],
      answer: 1,
      solution: 'Subtraction is the fast lane: the full rectangle has area $10 \\times 6 = 60$, and the removed right triangle has legs $4$ and $3$, so its area is $\\frac{1}{2} \\cdot 4 \\cdot 3 = 6$. The pentagon has area $60 - 6 = 54$. (Getting $48$ usually means subtracting $4 \\times 3 = 12$ — the full corner rectangle instead of half of it.)',
    },
    {
      q: 'A trapezoid has parallel sides $9$ and $5$ and area $35$. What is its height $h$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [7, 5], [2, 5]] },
          { t: 'seg', a: [2, 5], b: [2, 0], dash: true },
          { t: 'right', at: [2, 0], from: [2, 5], to: [9, 0] },
          { t: 'label', p: [4.5, -0.7], text: '9' },
          { t: 'label', p: [4.5, 5.5], text: '5' },
          { t: 'label', p: [1.4, 2.5], text: 'h' },
        ],
      },
      choices: ['$7$', '$2.5$', '$10$', '$5$'],
      answer: 3,
      solution: 'Set up the formula and solve: $35 = \\frac{1}{2}(9 + 5)h = 7h$, so $h = 5$. The average of the parallel sides is $7$, and $7 \\times 5 = 35$ checks out.',
    },
    {
      q: 'A rectangular picture frame has outer dimensions $12 \\times 9$. The opening in the middle is an $8 \\times 5$ rectangle. What is the area of the frame itself (the shaded border region)?',
      fig: {
        view: [-1.5, -1.5, 13.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 9], [0, 9]], fill: false },
          { t: 'poly', pts: [[2, 2], [10, 2], [10, 7], [2, 7]], fill: false },
          { t: 'label', p: [6, -0.8], text: '12' },
          { t: 'label', p: [-0.8, 4.5], text: '9' },
          { t: 'label', p: [6, 2.6], text: '8' },
          { t: 'label', p: [9.3, 4.5], text: '5' },
          { t: 'label', p: [6, 8], text: '2' },
        ],
      },
      choices: ['$40$', '$108$', '$60$', '$68$'],
      answer: 3,
      solution: 'Big minus small: the outer rectangle has area $12 \\times 9 = 108$, and the opening has area $8 \\times 5 = 40$. The frame is what remains: $108 - 40 = 68$. Subtracting regions is often far easier than chopping the border into four strips (though that works too — try it as a check!).',
    },
    {
      q: 'In triangle $ABC$, side $AB = 8$ and the height from $C$ to line $AB$ is $6$. If $BC = 12$, what is the height from $A$ to line $BC$?',
      choices: ['$4$', '$6$', '$8$', '$3$'],
      answer: 0,
      solution: 'One triangle, two base-height pairs — but only one area! First, $[ABC] = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$. Now use $BC$ as the base: $24 = \\frac{1}{2} \\cdot 12 \\cdot h = 6h$, so $h = 4$. A longer base needs a shorter height to sweep out the same area.',
    },
  ],
}

const s43 = {
  id: '4.3',
  title: 'Same Base/Same Altitude',
  learn: {
    concepts: [
      {
        heading: 'Slide the apex, keep the area',
        body: 'The formula $[ABC] = \\frac{1}{2}bh$ only cares about the base and the height — not where the apex sits left or right. So if the apex slides along a line parallel to the base, the height never changes, and the area never changes. Two triangles on the same base, with apexes on the same parallel line, have equal areas even when they look completely different.',
      },
      {
        heading: 'A median is an area-halver',
        body: 'A median of a triangle connects a vertex to the midpoint of the opposite side. If $M$ is the midpoint of $BC$, then triangles $ABM$ and $ACM$ have equal bases ($BM = MC$) and the very same height from $A$. Equal base, equal height — equal area: $[ABM] = [ACM] = \\frac{1}{2}[ABC]$.',
      },
      {
        heading: 'Areas in the same ratio as bases',
        body: 'Push the median idea further. If $D$ is any point on segment $BC$, triangles $ABD$ and $ACD$ share the same height from $A$, so their areas compare exactly as their bases do: $[ABD] : [ACD] = BD : DC$. This one principle turns length ratios into area ratios (and back) without computing a single height.',
      },
      {
        heading: 'Diagonals and the centroid',
        body: 'A diagonal cuts a quadrilateral into two triangles, so quadrilateral areas are usually best found one triangle at a time — and a diagonal of a parallelogram always cuts it into two congruent, equal-area halves. One more beautiful fact: the three medians of a triangle meet at a single point called the centroid, and connecting the centroid to the three vertices splits the triangle into three pieces of EQUAL area, each one third of the whole.',
      },
    ],
    examples: [
      {
        problem: 'Points $A$ and $D$ both lie on a line parallel to $BC$, with $BC = 10$ and the distance between the lines equal to $6$. Compare $[ABC]$ and $[DBC]$.',
        fig: {
          view: [-2, -1.5, 12, 7.5],
          elems: [
            { t: 'seg', a: [-1, 6], b: [11, 6], dash: true },
            { t: 'poly', pts: [[0, 0], [10, 0], [2, 6]], fill: false },
            { t: 'poly', pts: [[0, 0], [10, 0], [7, 6]], fill: false },
            { t: 'seg', a: [2, 6], b: [2, 0], dash: true },
            { t: 'right', at: [2, 0], from: [2, 6], to: [10, 0] },
            { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
            { t: 'point', p: [10, 0], label: 'C', dx: 10, dy: 12 },
            { t: 'point', p: [2, 6], label: 'A', dx: -4, dy: -10 },
            { t: 'point', p: [7, 6], label: 'D', dx: 6, dy: -10 },
            { t: 'label', p: [5, -0.7], text: '10' },
            { t: 'label', p: [1.4, 3], text: '6' },
          ],
        },
        steps: [
          'Both triangles stand on the same base $BC = 10$.',
          'Because $A$ and $D$ ride the same parallel line, each apex is exactly $6$ above the base — parallel lines stay a constant distance apart.',
          'So $[ABC] = \\frac{1}{2} \\cdot 10 \\cdot 6 = 30$ and $[DBC] = \\frac{1}{2} \\cdot 10 \\cdot 6 = 30$. Equal, even though the triangles have different shapes!',
        ],
        answer: '$[ABC] = [DBC] = 30$',
      },
      {
        problem: 'In triangle $ABC$, $M$ is the midpoint of $BC$. If $[ABC] = 30$, find $[ABM]$.',
        fig: {
          view: [-1.5, -1.5, 11.5, 7.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [10, 0], [2, 6]] },
            { t: 'seg', a: [2, 6], b: [5, 0] },
            { t: 'seg', a: [2, 6], b: [2, 0], dash: true },
            { t: 'right', at: [2, 0], from: [2, 6], to: [5, 0] },
            { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
            { t: 'tick', a: [5, 0], b: [10, 0], n: 1 },
            { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
            { t: 'point', p: [10, 0], label: 'C', dx: 10, dy: 12 },
            { t: 'point', p: [2, 6], label: 'A', dx: 0, dy: -12 },
            { t: 'point', p: [5, 0], label: 'M', dx: 0, dy: 14 },
            { t: 'label', p: [1.4, 3], text: '6' },
          ],
        },
        steps: [
          'The median $AM$ splits $BC$ into two equal bases: $BM = MC$.',
          'Triangles $ABM$ and $ACM$ both use the same height — the dashed perpendicular from $A$ down to line $BC$ serves them both.',
          'Equal bases and equal heights force equal areas, so each piece is half: $[ABM] = \\frac{1}{2} \\cdot 30 = 15$.',
        ],
        answer: '$[ABM] = 15$',
      },
      {
        problem: 'Point $D$ lies on $BC$ with $BD = 2$ and $DC = 6$. If $[ABD] = 5$, find $[ACD]$.',
        fig: {
          view: [-1.5, -1.5, 9.5, 6.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [8, 0], [3, 5]] },
            { t: 'seg', a: [3, 5], b: [2, 0] },
            { t: 'seg', a: [3, 5], b: [3, 0], dash: true },
            { t: 'right', at: [3, 0], from: [3, 5], to: [8, 0] },
            { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
            { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 12 },
            { t: 'point', p: [3, 5], label: 'A', dx: 0, dy: -12 },
            { t: 'point', p: [2, 0], label: 'D', dx: -2, dy: 14 },
            { t: 'label', p: [1, -0.6], text: '2' },
            { t: 'label', p: [5.5, -0.6], text: '6' },
          ],
        },
        steps: [
          'Triangles $ABD$ and $ACD$ share the apex $A$, and their bases $BD$ and $DC$ lie on the same line — so they share the same height.',
          'Same height means areas are proportional to bases: $[ABD] : [ACD] = BD : DC = 2 : 6 = 1 : 3$.',
          'So $[ACD]$ is $3$ times $[ABD]$: $[ACD] = 3 \\cdot 5 = 15$. We never needed to know the height itself!',
        ],
        answer: '$[ACD] = 15$',
      },
    ],
  },
  problems: [
    {
      q: 'Triangles $ABC$ and $DBC$ share base $BC$, and $A$ and $D$ lie on the same line parallel to $BC$, as shown. If $[ABC] = 20$, what is $[DBC]$?',
      fig: {
        view: [-2, -1.5, 10, 6.5],
        elems: [
          { t: 'seg', a: [-1, 5], b: [9, 5], dash: true },
          { t: 'poly', pts: [[0, 0], [8, 0], [1, 5]], fill: false },
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 5]], fill: false },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [1, 5], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [6, 5], label: 'D', dx: 6, dy: -10 },
          { t: 'label', p: [4, -0.7], text: '8' },
        ],
      },
      choices: ['$40$', '$20$', '$10$', 'It cannot be determined'],
      answer: 1,
      solution: 'Same base $BC$, and because $A$ and $D$ ride the same parallel line, the two apexes sit at the same height above that base. Same base, same height, same area: $[DBC] = 20$. The triangles look different, but area only listens to base and height.',
    },
    {
      q: 'In triangle $ABC$ shown, $M$ is the midpoint of $BC$ and $[ABC] = 36$. What is $[ABM]$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [3, 6]] },
          { t: 'seg', a: [3, 6], b: [6, 0] },
          { t: 'seg', a: [3, 6], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 6], to: [6, 0] },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [12, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [3, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'M', dx: 0, dy: 14 },
          { t: 'label', p: [2.4, 3], text: '6' },
        ],
      },
      choices: ['$12$', '$36$', '$18$', '$9$'],
      answer: 2,
      solution: 'The median $AM$ gives triangles $ABM$ and $ACM$ equal bases ($BM = MC$) and the same height from $A$. So each has half the area: $[ABM] = \\frac{1}{2} \\cdot 36 = 18$. A median is always a perfect area-halver, no matter how lopsided the triangle looks.',
    },
    {
      q: 'Point $D$ lies on $BC$ with $BD = 3$ and $DC = 9$. If $[ABD] = 6$, what is $[ACD]$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [5, 4]] },
          { t: 'seg', a: [5, 4], b: [3, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [5, 4], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'D', dx: 0, dy: 14 },
          { t: 'label', p: [1.5, -0.6], text: '3' },
          { t: 'label', p: [7.5, -0.6], text: '9' },
        ],
      },
      choices: ['$2$', '$12$', '$24$', '$18$'],
      answer: 3,
      solution: 'Both triangles use the same height from $A$, so areas match the base ratio: $[ABD] : [ACD] = BD : DC = 3 : 9 = 1 : 3$. Therefore $[ACD] = 3 \\cdot 6 = 18$. (Watch the direction of the ratio — $[ACD]$ has the LONGER base, so it must be the bigger area.)',
    },
    {
      q: 'A triangle has a fixed base, and its apex slides along a line parallel to that base. What happens to the area of the triangle as the apex slides?',
      choices: ['It increases', 'It decreases', 'It stays exactly the same', 'It depends on which direction the apex slides'],
      answer: 2,
      solution: 'Area is $\\frac{1}{2}bh$, and sliding along a parallel line changes neither the base $b$ nor the height $h$ — parallel lines keep a constant distance. So the area stays exactly the same. The triangle gets more and more slanted, but slant is free: it costs no area.',
    },
    {
      q: 'A parallelogram has area $56$. One of its diagonals is drawn, cutting it into two triangles. What is the area of each triangle?',
      choices: ['$28$', '$14$', '$56$', '$24$'],
      answer: 0,
      solution: 'A diagonal of a parallelogram cuts it into two congruent triangles — each one uses the same base and the same height as the parallelogram, and $\\frac{1}{2}bh$ is exactly half of $bh$. So each triangle has area $\\frac{1}{2} \\cdot 56 = 28$.',
    },
    {
      q: 'In quadrilateral $ABCD$ shown, diagonal $AC$ is drawn. If $[ABC] = 18$ and $[ACD] = 27$, what is the area of quadrilateral $ABCD$?',
      fig: {
        view: [-1.5, -7.5, 10.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 4], [9, 0], [5, -6]], fill: false },
          { t: 'seg', a: [0, 0], b: [9, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [3, 4], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [5, -6], label: 'D', dx: 0, dy: 14 },
        ],
      },
      choices: ['$22.5$', '$36$', '$54$', '$45$'],
      answer: 3,
      solution: 'The diagonal $AC$ splits the quadrilateral into two triangles that together cover it exactly, with no overlap. So the areas simply add: $[ABCD] = [ABC] + [ACD] = 18 + 27 = 45$. Cutting along a diagonal is the standard first move for any quadrilateral area.',
    },
    {
      q: 'In the triangle shown, $D$ lies on $BC$ with $BD = 4$ and $DC = 6$, and $[ABC] = 40$. What is $[ABD]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [3, 8]] },
          { t: 'seg', a: [3, 8], b: [4, 0] },
          { t: 'seg', a: [3, 8], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 8], to: [4, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [3, 8], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'D', dx: 4, dy: 14 },
          { t: 'label', p: [1.5, -0.6], text: '4' },
          { t: 'label', p: [7, -0.6], text: '6' },
          { t: 'label', p: [2.4, 4], text: '8' },
        ],
      },
      choices: ['$20$', '$16$', '$24$', '$8$'],
      answer: 1,
      solution: 'Triangle $ABD$ takes the fraction $\\frac{BD}{BC} = \\frac{4}{10}$ of the whole, since it shares the height from $A$ with all of triangle $ABC$. So $[ABD] = \\frac{4}{10} \\cdot 40 = 16$. (And $[ACD] = 24$ — the two pieces split $40$ in the ratio $4 : 6$.)',
    },
    {
      q: 'In trapezoid $PQRS$ shown, $PQ$ is parallel to $SR$. If $[PQS] = 20$, what is $[PQR]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [8, 4], [3, 4]], fill: false },
          { t: 'seg', a: [10, 0], b: [3, 4] },
          { t: 'seg', a: [0, 0], b: [8, 4] },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'Q', dx: 10, dy: 12 },
          { t: 'point', p: [8, 4], label: 'R', dx: 8, dy: -10 },
          { t: 'point', p: [3, 4], label: 'S', dx: -8, dy: -10 },
          { t: 'label', p: [5, -0.7], text: '10' },
        ],
      },
      choices: ['$40$', '$10$', '$20$', 'It cannot be determined'],
      answer: 2,
      solution: 'Triangles $PQS$ and $PQR$ stand on the same base $PQ$, and their apexes $S$ and $R$ both lie on line $SR$, which is parallel to $PQ$. Same base, same height, so $[PQR] = [PQS] = 20$. This "apex slides along the top of a trapezoid" trick is one of the most useful moves in all of area geometry.',
    },
    {
      q: 'In the triangle shown, the three medians meet at the centroid $G$, and $[ABC] = 36$. What is $[GBC]$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [3, 6]] },
          { t: 'seg', a: [3, 6], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [7.5, 3] },
          { t: 'seg', a: [12, 0], b: [1.5, 3] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [3, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [5, 2], label: 'G', dx: 8, dy: -8 },
        ],
      },
      choices: ['$18$', '$12$', '$9$', '$6$'],
      answer: 1,
      solution: 'Connecting the centroid to the three vertices splits the triangle into three equal-area pieces: $[GBC] = [GCA] = [GAB]$. So each is one third of the whole: $[GBC] = \\frac{36}{3} = 12$. (Behind the scenes: $G$ sits one third of the way up every median, so its height above $BC$ is one third of the height of $A$.)',
    },
    {
      q: 'In triangle $ABC$ shown, $D$ is the midpoint of $BC$ and $E$ is the midpoint of $AD$. If $[ABC] = 24$, what is $[ABE]$?',
      fig: {
        view: [-1.5, -1.5, 9.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [2, 6]] },
          { t: 'seg', a: [2, 6], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [3, 3] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [8, 0], n: 1 },
          { t: 'tick', a: [2, 6], b: [3, 3], n: 2 },
          { t: 'tick', a: [3, 3], b: [4, 0], n: 2 },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
          { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 12 },
          { t: 'point', p: [2, 6], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'D', dx: 0, dy: 14 },
          { t: 'point', p: [3, 3], label: 'E', dx: 10, dy: 0 },
        ],
      },
      choices: ['$6$', '$12$', '$8$', '$4$'],
      answer: 0,
      solution: 'Halve twice! First, $AD$ is a median of triangle $ABC$, so $[ABD] = \\frac{1}{2} \\cdot 24 = 12$. Next, look at triangle $ABD$: since $E$ is the midpoint of $AD$, segment $BE$ is a median of THAT triangle, so it halves it too: $[ABE] = \\frac{1}{2} \\cdot 12 = 6$. Stacking the median fact is a favorite contest move.',
    },
  ],
}

const challenge = [
  {
    q: 'A rectangle has perimeter $34$ and area $60$. What is the length of its longer side?',
    choices: ['$10$', '$15$', '$12$', '$7$'],
    answer: 2,
    solution: 'The sides add to $\\frac{34}{2} = 17$ and multiply to $60$. Hunt for the pair: $5 \\cdot 12 = 60$ and $5 + 12 = 17$. So the sides are $5$ and $12$, and the longer one is $12$.',
  },
  {
    q: 'Two square notches, each $1 \\times 1$, are cut into the top side of a $10 \\times 6$ rectangle, as shown. What is the perimeter of the resulting shape?',
    fig: {
      view: [-1.5, -1.5, 11.5, 7.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [10, 0], [10, 6], [8, 6], [8, 5], [7, 5], [7, 6], [4, 6], [4, 5], [3, 5], [3, 6], [0, 6]] },
        { t: 'label', p: [5, -0.7], text: '10' },
        { t: 'label', p: [10.7, 3], text: '6' },
        { t: 'label', p: [7.5, 4.4], text: '1' },
        { t: 'label', p: [3.5, 4.4], text: '1' },
      ],
    },
    choices: ['$32$', '$36$', '$34$', '$40$'],
    answer: 1,
    solution: 'The rectangle starts at $2(10 + 6) = 32$. Each notch keeps the horizontal lengths balanced (its floor replaces the removed piece of top edge) but adds two new walls of depth $1$, contributing $2$ per notch. Total: $32 + 2 + 2 = 36$.',
  },
  {
    q: 'A rectangle has perimeter $40$, and its side lengths are whole numbers. What is the SMALLEST area it could have?',
    choices: ['$100$', '$36$', '$20$', '$19$'],
    answer: 3,
    solution: 'The sides add to $20$. To make the area small, make the rectangle as lopsided as possible: $1 \\times 19 = 19$. (The other extreme, the $10 \\times 10$ square, gives the LARGEST area, $100$ — same perimeter, wildly different areas.)',
  },
  {
    q: 'A triangle has area equal to $\\frac{1}{2} \\cdot 15 \\cdot 4$ using one base. Using a different side of length $10$ as the base, what is the height to that side?',
    choices: ['$6$', '$4$', '$3$', '$12$'],
    answer: 0,
    solution: 'The area is $\\frac{1}{2} \\cdot 15 \\cdot 4 = 30$, and area does not change when you switch bases. So $30 = \\frac{1}{2} \\cdot 10 \\cdot h = 5h$, giving $h = 6$. Shorter base, taller height — the product stays locked at twice the area.',
  },
  {
    q: 'The dashed segment marks the height of this trapezoid. What is its area?',
    fig: {
      view: [-1.5, -1.5, 10.5, 8.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [10, 0], [8, 7], [2, 7]] },
        { t: 'seg', a: [2, 7], b: [2, 0], dash: true },
        { t: 'right', at: [2, 0], from: [2, 7], to: [10, 0] },
        { t: 'label', p: [5, -0.7], text: '10' },
        { t: 'label', p: [5, 7.5], text: '6' },
        { t: 'label', p: [1.4, 3.5], text: '7' },
      ],
    },
    choices: ['$112$', '$70$', '$56$', '$42$'],
    answer: 2,
    solution: 'Average the parallel sides and multiply by the height: $\\frac{1}{2}(10 + 6) \\cdot 7 = 8 \\cdot 7 = 56$. Check it forward by cutting the shape up: the dashed height splits off a right triangle with legs $2$ and $7$ (area $7$) on the left, leaving a $6 \\times 7$ rectangle (area $42$) and a right triangle with legs $2$ and $7$ (area $7$) on the right, and $7 + 42 + 7 = 56$. ✓ Skipping the $\\frac{1}{2}$ gives $112$; $70 = 10 \\cdot 7$ uses only the long base; $42 = 6 \\cdot 7$ uses only the short one — the average is the heart of the formula.',
  },
  {
    q: 'A rectangular pool measures $8 \\times 6$. It is surrounded on all four sides by a walkway of uniform width $2$. What is the area of the walkway?',
    choices: ['$48$', '$120$', '$56$', '$72$'],
    answer: 3,
    solution: 'The pool plus walkway forms a larger rectangle: the width $2$ is added on BOTH sides of each dimension, giving $(8 + 4) \\times (6 + 4) = 12 \\times 10 = 120$. Subtract the pool: $120 - 48 = 72$. (A common slip is adding $2$ only once per dimension, which gives $10 \\times 8 - 48 = 32$ — remember the walkway wraps all the way around.)',
  },
  {
    q: 'In trapezoid $ABCD$ shown, $AB$ is parallel to $DC$, and the diagonals meet at $X$. If $[BXC] = 12$, what is $[AXD]$?',
    fig: {
      view: [-1.5, -1.5, 13.5, 7.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [12, 0], [9, 6], [3, 6]], fill: false },
        { t: 'seg', a: [0, 0], b: [9, 6] },
        { t: 'seg', a: [12, 0], b: [3, 6] },
        { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
        { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 12 },
        { t: 'point', p: [9, 6], label: 'C', dx: 8, dy: -10 },
        { t: 'point', p: [3, 6], label: 'D', dx: -8, dy: -10 },
        { t: 'point', p: [6, 4], label: 'X', dx: 0, dy: -14 },
      ],
    },
    choices: ['$12$', '$24$', '$6$', 'It cannot be determined'],
    answer: 0,
    solution: 'Triangles $ABD$ and $ABC$ share base $AB$ and have apexes $D$ and $C$ on a line parallel to $AB$, so $[ABD] = [ABC]$. Both triangles contain triangle $ABX$; subtract it from each side to get $[AXD] = [BXC] = 12$. This equal pair of "side triangles" appears in every trapezoid — a lovely hidden symmetry.',
  },
  {
    q: 'Every side of this plus-shaped figure has length $4$, and every angle is a right angle. What is its area?',
    fig: {
      view: [-1.5, -1.5, 13.5, 13.5],
      elems: [
        { t: 'poly', pts: [[4, 0], [8, 0], [8, 4], [12, 4], [12, 8], [8, 8], [8, 12], [4, 12], [4, 8], [0, 8], [0, 4], [4, 4]] },
        { t: 'label', p: [6, -0.8], text: '4' },
        { t: 'label', p: [12.7, 6], text: '4' },
      ],
    },
    choices: ['$96$', '$80$', '$64$', '$144$'],
    answer: 1,
    solution: 'See the plus as a $12 \\times 12$ square with four $4 \\times 4$ corners removed: $144 - 4 \\cdot 16 = 144 - 64 = 80$. Or build it from five $4 \\times 4$ squares (center plus four arms): $5 \\cdot 16 = 80$. Two decompositions, one answer — a great self-check habit.',
  },
  {
    q: 'In triangle $ABC$, $M$ is the midpoint of $AB$ and $N$ is the midpoint of $AC$. If $[ABC] = 48$, what is $[AMN]$?',
    choices: ['$24$', '$16$', '$12$', '$6$'],
    answer: 2,
    solution: 'Halve in two steps. The median $CM$ splits triangle $ABC$, so $[AMC] = \\frac{1}{2} \\cdot 48 = 24$. Now inside triangle $AMC$, the segment $MN$ runs from $M$ to the midpoint $N$ of side $AC$ — a median of triangle $AMC$ — so $[AMN] = \\frac{1}{2} \\cdot 24 = 12$. In general, connecting two midpoints slices off exactly one quarter of the triangle.',
  },
  {
    q: 'Point $D$ lies on side $BC$ of triangle $ABC$ with $BD : DC = 3 : 5$. If $[ABC] = 64$, what is $[ACD]$?',
    choices: ['$24$', '$40$', '$32$', '$45$'],
    answer: 1,
    solution: 'Triangles $ABD$ and $ACD$ share the height from $A$, so they split the total area in the base ratio $3 : 5$. The whole is $64$, cut into $3 + 5 = 8$ equal shares of $8$ each. Triangle $ACD$ takes the $5$ shares: $5 \\cdot 8 = 40$. (Triangle $ABD$ gets $24$ — make sure you grab the piece the question asks for!)',
  },
  {
    q: 'The length of a rectangle is $3$ more than twice its width, and its perimeter is $36$. What is its area?',
    choices: ['$36$', '$40$', '$78$', '$65$'],
    answer: 3,
    solution: 'Let the width be $w$, so the length is $2w + 3$. The perimeter gives $2(w + 2w + 3) = 36$, so $3w + 3 = 18$ and $w = 5$. The length is $2 \\cdot 5 + 3 = 13$, and the area is $5 \\cdot 13 = 65$. Check the perimeter: $2(5 + 13) = 36$.',
  },
  {
    q: 'The medians of triangle $ABC$ meet at the centroid $G$. If $[ABG] = 7$, what is $[ABC]$?',
    choices: ['$21$', '$14$', '$7$', '$28$'],
    answer: 0,
    solution: 'The segments from the centroid to the three vertices cut the triangle into three pieces of equal area: $[ABG] = [BCG] = [CAG]$. Each piece is one third of the whole, so $[ABC] = 3 \\cdot 7 = 21$. Running the centroid fact backwards is just as easy as running it forwards.',
  },
]

const worksheet = [
  {
    q: 'A rectangle has length $14$ and width $6$. Find its perimeter.',
    answer: '$40$',
    solution: 'Add all four sides: $2(14 + 6) = 2 \\cdot 20 = 40$.',
  },
  {
    q: 'A triangle has base $9$ and height $8$. Find its area.',
    answer: '$36$',
    solution: 'Half of base times height: $\\frac{1}{2} \\cdot 9 \\cdot 8 = 36$.',
  },
  {
    q: 'Every angle in this staircase shape is a right angle. Find its perimeter.',
    fig: {
      view: [-1.5, -1.5, 10.5, 6.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [9, 0], [9, 2], [6, 2], [6, 4], [3, 4], [3, 5], [0, 5]] },
        { t: 'label', p: [4.5, -0.7], text: '9' },
        { t: 'label', p: [-0.6, 2.5], text: '5' },
      ],
    },
    answer: '$28$',
    solution: 'Slide the horizontal steps up and the vertical steps out: the perimeter matches the $9 \\times 5$ bounding rectangle, $2(9 + 5) = 28$.',
  },
  {
    q: 'Find the area of this parallelogram.',
    fig: {
      view: [-1.5, -1.5, 10.5, 7.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [7, 0], [9, 6], [2, 6]] },
        { t: 'seg', a: [2, 6], b: [2, 0], dash: true },
        { t: 'right', at: [2, 0], from: [2, 6], to: [7, 0] },
        { t: 'label', p: [3.5, -0.7], text: '7' },
        { t: 'label', p: [1.4, 3], text: '6' },
      ],
    },
    answer: '$42$',
    solution: 'Base times the perpendicular height (the dashed segment): $7 \\cdot 6 = 42$. The slanted side is longer than $6$, but it plays no role in the area.',
  },
  {
    q: 'A trapezoid has parallel sides $11$ and $5$ and height $4$. Find its area.',
    answer: '$32$',
    solution: 'Average the parallel sides, then multiply by the height: $\\frac{1}{2}(11 + 5) \\cdot 4 = 8 \\cdot 4 = 32$.',
  },
  {
    q: 'A rectangle has area $96$ and width $8$. Find its perimeter.',
    answer: '$40$',
    solution: 'First recover the length: $96 \\div 8 = 12$. Then the perimeter is $2(12 + 8) = 40$.',
  },
  {
    q: 'Every angle in this L-shape is a right angle. Find its area AND its perimeter.',
    fig: {
      view: [-1.5, -1.5, 12.5, 9.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [11, 0], [11, 4], [7, 4], [7, 8], [0, 8]] },
        { t: 'label', p: [5.5, -0.7], text: '11' },
        { t: 'label', p: [11.7, 2], text: '4' },
        { t: 'label', p: [9, 4.5], text: '4' },
        { t: 'label', p: [7.6, 6], text: '4' },
        { t: 'label', p: [3.5, 8.5], text: '7' },
        { t: 'label', p: [-0.7, 4], text: '8' },
      ],
    },
    answer: 'Area $72$, perimeter $38$',
    solution: 'Area by splitting: the bottom slab is $11 \\times 4 = 44$ and the top block is $7 \\times 4 = 28$, so the area is $44 + 28 = 72$. Perimeter: this L is a one-step staircase, so it matches the $11 \\times 8$ bounding rectangle, $2(11 + 8) = 38$. (Adding the six sides, $11 + 4 + 4 + 4 + 7 + 8$, confirms $38$.)',
  },
  {
    q: 'In the triangle shown, $D$ lies on $BC$ with $BD = 5$ and $DC = 7$, and $[ABC] = 48$. Find $[ABD]$.',
    fig: {
      view: [-1.5, -1.5, 13.5, 9.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [12, 0], [4, 8]] },
        { t: 'seg', a: [4, 8], b: [5, 0] },
        { t: 'seg', a: [4, 8], b: [4, 0], dash: true },
        { t: 'right', at: [4, 0], from: [4, 8], to: [5, 0] },
        { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
        { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 12 },
        { t: 'point', p: [4, 8], label: 'A', dx: 0, dy: -12 },
        { t: 'point', p: [5, 0], label: 'D', dx: 6, dy: 14 },
        { t: 'label', p: [2, -0.6], text: '5' },
        { t: 'label', p: [8.5, -0.6], text: '7' },
        { t: 'label', p: [3.4, 4], text: '8' },
      ],
    },
    answer: '$20$',
    solution: 'Triangles $ABD$ and $ACD$ share the height from $A$, so triangle $ABD$ claims the fraction $\\frac{BD}{BC} = \\frac{5}{12}$ of the total area: $[ABD] = \\frac{5}{12} \\cdot 48 = 20$.',
  },
  {
    q: 'Points $D$ and $E$ lie on side $BC$ of triangle $ABC$ and cut it into three equal pieces: $BD = DE = EC$. If $[ABC] = 45$, find $[ADE]$.',
    answer: '$15$',
    solution: 'The three small triangles $ABD$, $ADE$, and $AEC$ all share the height from $A$ and stand on equal bases, so they have equal areas. Each is one third of the whole: $[ADE] = \\frac{45}{3} = 15$.',
  },
  {
    q: 'A wire of length $36$ is bent into a rectangle whose side lengths are whole numbers. Find the difference between the largest and smallest areas the rectangle could have.',
    answer: '$64$',
    solution: 'The sides add to $\\frac{36}{2} = 18$. The largest area comes from the squarest choice, $9 \\times 9 = 81$; the smallest comes from the most lopsided, $1 \\times 17 = 17$. The difference is $81 - 17 = 64$. Same wire, very different amounts of enclosed space!',
  },
]

export default {
  id: 'intro-geometry-ch04',
  book: 'intro-geometry',
  number: 4,
  title: 'Perimeter and Area',
  intro:
    'Perimeter is the walk around a shape; area is the carpet inside it. You have measured both before — but now algebra sneaks into the side lengths, shapes grow notches and staircases, and one quiet principle (same base, same height, same area) starts doing real geometry. By the end of this chapter you will compare areas without computing a single one.',
  sections: [s41, s42, s43],
  challenge,
  worksheet,
}
