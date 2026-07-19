// Prealgebra — Chapter 11: Perimeter and Area
// All problems, explanations, and examples are original MathQuest content.

const s111 = {
  id: '11.1',
  title: 'Measuring Segments',
  learn: {
    concepts: [
      {
        heading: 'Distance on the number line',
        body: 'The distance between two points on the number line is how far apart they sit — always a positive amount. To find it, subtract the smaller number from the larger one. The distance from $3$ to $11$ is $11 - 3 = 8$, and the distance from $-2$ to $6$ is $6 - (-2) = 8$ as well.',
      },
      {
        heading: 'The midpoint is the average',
        body: 'The midpoint of a segment is the point exactly halfway between the two endpoints. To find it, average the endpoints: add them and divide by $2$. The midpoint of $4$ and $10$ is $\\frac{4 + 10}{2} = 7$, which is $3$ away from each end.',
      },
      {
        heading: 'Perimeter is the walk around',
        body: 'The perimeter of a shape is the total distance around its boundary — imagine an ant walking all the way around the edge and counting its steps. For a rectangle with length $\\ell$ and width $w$, the ant walks each length twice and each width twice, so the perimeter is $2\\ell + 2w = 2(\\ell + w)$.',
      },
      {
        heading: 'Shapes built from rectangles',
        body: 'Many shapes, like an L-shape, are rectangles with rectangular pieces attached or removed. To find the perimeter, trace the boundary one side at a time and figure out each missing length from the sides you know. Surprising fact: cutting a rectangular notch out of a corner does not change the perimeter at all — the two new edges exactly replace the two edges you removed!',
      },
    ],
    examples: [
      {
        problem: 'Find the distance between $-3$ and $8$ on the number line.',
        steps: [
          'Distance is the gap between the points, so subtract the smaller from the larger: $8 - (-3)$.',
          'Subtracting a negative is adding: $8 - (-3) = 8 + 3 = 11$.',
        ],
        answer: 'The distance is $11$ units',
      },
      {
        problem: 'A rectangle has length $9$ and width $4$. Find its perimeter.',
        steps: [
          'The ant walks two lengths and two widths: $2 \\times 9 + 2 \\times 4$.',
          'A faster way: add one length and one width, then double. $9 + 4 = 13$, and $2 \\times 13 = 26$.',
        ],
        answer: 'The perimeter is $26$ units',
      },
      {
        problem: 'An L-shaped garden is a $10 \\times 6$ rectangle with a $3 \\times 2$ rectangular corner removed. Find its perimeter.',
        steps: [
          'Trace the boundary: bottom $10$, up the right side $6 - 2 = 4$, left $3$, up $2$, left along the top $10 - 3 = 7$, and down the left side $6$.',
          'Add the six sides: $10 + 4 + 3 + 2 + 7 + 6 = 32$.',
          'Notice this equals the perimeter of the full $10 \\times 6$ rectangle, $2(10 + 6) = 32$ — the corner notch pushed the boundary inward without changing its total length!',
        ],
        answer: 'The perimeter is $32$ units',
      },
    ],
  },
  problems: [
    {
      q: 'What is the distance between $2$ and $9$ on the number line?',
      choices: ['$11$', '$6$', '$7$', '$8$'],
      answer: 2,
      solution: 'Distance is the larger number minus the smaller: $9 - 2 = 7$. (Adding the numbers gives $11$, but distance is a difference, not a sum.)',
    },
    {
      q: 'What is the distance between $-4$ and $5$ on the number line?',
      choices: ['$9$', '$1$', '$-9$', '$20$'],
      answer: 0,
      solution: 'Subtract the smaller from the larger: $5 - (-4) = 5 + 4 = 9$. The point $-4$ is $4$ steps left of zero and $5$ is $5$ steps right, so the gap is $4 + 5 = 9$. Distance is never negative!',
    },
    {
      q: 'What is the midpoint of the segment from $4$ to $10$?',
      choices: ['$6$', '$7$', '$14$', '$5$'],
      answer: 1,
      solution: 'The midpoint is the average of the endpoints: $\\frac{4 + 10}{2} = \\frac{14}{2} = 7$. Check: $7$ is exactly $3$ away from both $4$ and $10$.',
    },
    {
      q: 'A rectangle has length $8$ and width $5$. What is its perimeter?',
      choices: ['$40$', '$13$', '$21$', '$26$'],
      answer: 3,
      solution: 'Perimeter is the distance all the way around: $2(8 + 5) = 2 \\times 13 = 26$. (Careful: $8 \\times 5 = 40$ is the area — that counts the space inside, not the walk around.)',
    },
    {
      q: 'What is the perimeter of a square with side length $7$?',
      choices: ['$28$', '$49$', '$14$', '$21$'],
      answer: 0,
      solution: 'A square has four equal sides, so the perimeter is $4 \\times 7 = 28$. ($49$ is the area, $7 \\times 7$ — a different measurement!)',
    },
    {
      q: 'What is the midpoint of the segment from $-6$ to $10$?',
      choices: ['$8$', '$2$', '$4$', '$-2$'],
      answer: 1,
      solution: 'Average the endpoints: $\\frac{-6 + 10}{2} = \\frac{4}{2} = 2$. Check: the distance from $-6$ to $2$ is $8$, and from $2$ to $10$ is also $8$. Halfway exactly!',
    },
    {
      q: 'A rectangle has perimeter $36$ and length $11$. What is its width?',
      choices: ['$25$', '$14$', '$7$', '$5$'],
      answer: 2,
      solution: 'One length plus one width is half the perimeter: $11 + w = 18$. So $w = 18 - 11 = 7$. Check: $2(11 + 7) = 2 \\times 18 = 36$.',
    },
    {
      q: 'An L-shaped patio is a $10 \\times 6$ rectangle with a $3 \\times 2$ rectangular corner removed. What is its perimeter?',
      choices: ['$22$', '$26$', '$42$', '$32$'],
      answer: 3,
      solution: 'Trace the six sides: $10$, then $6 - 2 = 4$, then $3$, then $2$, then $10 - 3 = 7$, then $6$. The total is $10 + 4 + 3 + 2 + 7 + 6 = 32$ — exactly the perimeter of the uncut rectangle, because the notch\'s two new edges replace the two edges that were removed.',
    },
    {
      q: 'A rectangle\'s length is twice its width, and its perimeter is $54$. What is its length?',
      choices: ['$18$', '$9$', '$27$', '$12$'],
      answer: 0,
      solution: 'Let the width be $w$, so the length is $2w$. The perimeter is $2(w + 2w) = 6w = 54$, so $w = 9$ and the length is $2 \\times 9 = 18$. Check: $2(9 + 18) = 54$. (Careful: $9$ is the width — the question asks for the length!)',
    },
    {
      q: 'Point $M$ is the midpoint of segment $AB$. Point $A$ is at $-7$ and $M$ is at $3$. Where is point $B$?',
      choices: ['$-2$', '$10$', '$13$', '$8$'],
      answer: 2,
      solution: 'The midpoint sits in the middle, so $B$ is just as far past $M$ as $A$ is before it. From $-7$ to $3$ is a jump of $10$, so jump $10$ more: $3 + 10 = 13$. Check: the average of $-7$ and $13$ is $\\frac{6}{2} = 3$. ($-2$ would be the midpoint of $-7$ and $3$ — a different question.)',
    },
  ],
}

const s112 = {
  id: '11.2',
  title: 'Area',
  learn: {
    concepts: [
      {
        heading: 'Area counts unit squares',
        body: 'The area of a shape is how many $1 \\times 1$ squares fit inside it, so area is measured in square units. A rectangle with length $\\ell$ and width $w$ holds $w$ rows of $\\ell$ squares each, so its area is $\\ell \\times w$. A rectangle $8$ by $5$ has area $40$ square units.',
      },
      {
        heading: 'A triangle is half a rectangle',
        body: 'Slice a rectangle along its diagonal and you get two identical right triangles — so a right triangle\'s area is half the product of its legs. Amazingly, this works for every triangle: the area is $\\frac{1}{2}bh$, where $b$ is a base and $h$ is the height measured straight up from that base (perpendicular, not slanted).',
      },
      {
        heading: 'Parallelograms and trapezoids',
        body: 'A parallelogram is a pushed-over rectangle: slice a triangle off one end and slide it to the other, and you get a rectangle with the same base and height. So its area is $bh$. A trapezoid has two parallel sides $b_1$ and $b_2$; its area is $\\frac{1}{2}(b_1 + b_2)h$ — the average of the two parallel sides, times the height between them.',
      },
      {
        heading: 'Composite shapes: add or subtract',
        body: 'To find the area of a shape built from rectangles, either split it into rectangular pieces and add their areas, or start with a big rectangle and subtract the missing part. Both roads lead to the same answer — pick whichever needs less work. And remember: two shapes can have the same area but different perimeters, or the same perimeter but different areas!',
      },
    ],
    examples: [
      {
        problem: 'A triangle has base $10$ and height $7$. Find its area.',
        steps: [
          'Use the triangle formula: area $= \\frac{1}{2}bh = \\frac{1}{2} \\times 10 \\times 7$.',
          'Take half of $10$ first to keep the arithmetic easy: $5 \\times 7 = 35$.',
        ],
        answer: 'The area is $35$ square units',
      },
      {
        problem: 'A trapezoid has parallel sides of length $6$ and $10$, and the height between them is $4$. Find its area.',
        steps: [
          'Average the two parallel sides: $\\frac{6 + 10}{2} = 8$.',
          'Multiply by the height: $8 \\times 4 = 32$.',
          'This makes sense: the trapezoid holds exactly as much as an $8 \\times 4$ rectangle — its "average" rectangle.',
        ],
        answer: 'The area is $32$ square units',
      },
      {
        problem: 'An L-shaped garden is a $10 \\times 6$ rectangle with a $3 \\times 2$ rectangular corner removed. Find its area.',
        steps: [
          'Start with the full rectangle: $10 \\times 6 = 60$ square units.',
          'Subtract the missing corner: $3 \\times 2 = 6$ square units.',
          'So the garden covers $60 - 6 = 54$ square units. (Note: the notch shrank the area but, as we saw in Section 11.1, it left the perimeter alone!)',
        ],
        answer: 'The area is $54$ square units',
      },
    ],
  },
  problems: [
    {
      q: 'A rectangle has length $9$ and width $4$. What is its area?',
      choices: ['$26$', '$36$', '$13$', '$72$'],
      answer: 1,
      solution: 'Area is length times width: $9 \\times 4 = 36$ square units. ($26$ is the perimeter, $2(9+4)$ — that measures the boundary, not the inside.)',
    },
    {
      q: 'What is the area of a square with side length $6$?',
      choices: ['$24$', '$12$', '$30$', '$36$'],
      answer: 3,
      solution: 'A square is a rectangle whose length and width match: $6 \\times 6 = 36$ square units. ($24$ is the perimeter, $4 \\times 6$.)',
    },
    {
      q: 'A right triangle has legs of length $6$ and $8$. What is its area?',
      choices: ['$24$', '$48$', '$14$', '$10$'],
      answer: 0,
      solution: 'A right triangle is half of a $6 \\times 8$ rectangle: $\\frac{1}{2} \\times 6 \\times 8 = 24$ square units. ($48$ is the whole rectangle — the $\\frac{1}{2}$ is the easiest thing in the world to forget, so double-check for it!)',
    },
    {
      q: 'A parallelogram has base $7$ and height $5$. What is its area?',
      choices: ['$24$', '$\\frac{35}{2}$', '$35$', '$12$'],
      answer: 2,
      solution: 'A parallelogram is a pushed-over rectangle, so its area is base times height: $7 \\times 5 = 35$ square units. (No $\\frac{1}{2}$ here — that belongs to triangles only.)',
    },
    {
      q: 'A triangle has base $12$ and height $9$. What is its area?',
      choices: ['$108$', '$54$', '$21$', '$27$'],
      answer: 1,
      solution: 'Area $= \\frac{1}{2}bh = \\frac{1}{2} \\times 12 \\times 9$. Half of $12$ is $6$, and $6 \\times 9 = 54$ square units.',
    },
    {
      q: 'A trapezoid has parallel sides $5$ and $9$, with height $6$. What is its area?',
      choices: ['$42$', '$84$', '$45$', '$27$'],
      answer: 0,
      solution: 'Average the parallel sides, then multiply by the height: $\\frac{5 + 9}{2} = 7$, and $7 \\times 6 = 42$ square units. ($84$ comes from forgetting to take the average — that is, skipping the $\\frac{1}{2}$.)',
    },
    {
      q: 'An L-shaped room is made by joining an $8 \\times 5$ rectangle and a $4 \\times 3$ rectangle along an edge. What is the room\'s area?',
      choices: ['$40$', '$32$', '$46$', '$52$'],
      answer: 3,
      solution: 'When rectangles join without overlapping, their areas simply add: $8 \\times 5 = 40$ and $4 \\times 3 = 12$, so the room covers $40 + 12 = 52$ square units.',
    },
    {
      q: 'Among all rectangles with whole-number sides and perimeter $20$, what is the largest possible area?',
      choices: ['$24$', '$16$', '$25$', '$20$'],
      answer: 2,
      solution: 'Perimeter $20$ means length plus width is $10$. Try the pairs: $1 \\times 9 = 9$, $2 \\times 8 = 16$, $3 \\times 7 = 21$, $4 \\times 6 = 24$, $5 \\times 5 = 25$. The square wins! With a fixed perimeter, the closer the sides are to equal, the bigger the area.',
    },
    {
      q: 'A rectangle has area $48$, and its length is $2$ more than its width. What is its perimeter?',
      choices: ['$48$', '$28$', '$24$', '$14$'],
      answer: 1,
      solution: 'Hunt for two numbers that differ by $2$ and multiply to $48$: $6 \\times 8 = 48$ works. So the rectangle is $6$ by $8$, and its perimeter is $2(6 + 8) = 28$.',
    },
    {
      q: 'A square painting with side length $10$ hangs inside a frame that is $2$ units wide on every side. What is the area of the frame itself (not counting the painting)?',
      choices: ['$96$', '$44$', '$100$', '$40$'],
      answer: 0,
      solution: 'The frame adds $2$ units on each side, so the outer square is $10 + 2 + 2 = 14$ units across. Subtract the painting: $14 \\times 14 - 10 \\times 10 = 196 - 100 = 96$ square units. (A common slip is adding $2$ only once and getting $12 \\times 12 - 100 = 44$ — but the frame sits on both the left and the right!)',
    },
  ],
}

const s113 = {
  id: '11.3',
  title: 'Circles',
  learn: {
    concepts: [
      {
        heading: 'Radius and diameter',
        body: 'Every point on a circle is the same distance from the center — that distance is the radius $r$. The diameter $d$ runs all the way across through the center, so it is twice the radius: $d = 2r$. If someone hands you a diameter, cut it in half before using any circle formula that wants $r$.',
      },
      {
        heading: 'Circumference: the distance around',
        body: 'The perimeter of a circle has its own name: the circumference. For every circle, the circumference divided by the diameter is the same famous number, $\\pi \\approx 3.14$. So $C = \\pi d = 2\\pi r$. A circle of radius $5$ has circumference $2\\pi \\times 5 = 10\\pi$.',
      },
      {
        heading: 'Area of a circle',
        body: 'The area of a circle is $A = \\pi r^2$ — that is $\\pi \\times r \\times r$, and the radius gets squared before $\\pi$ joins in. A circle of radius $3$ has area $\\pi \\times 3^2 = 9\\pi$ square units. Watch out for the classic trap: never plug the diameter into $\\pi r^2$!',
      },
      {
        heading: 'Exact answers keep the pi',
        body: 'Since $\\pi$ goes on forever ($3.14159\\ldots$), the number $3.14$ is only an estimate. The exact answer keeps $\\pi$ as a symbol: a circle of radius $4$ has area exactly $16\\pi$, not $50.24$. In this chapter, leave all answers in terms of $\\pi$. For a semicircle (half a circle), halve the area — but for its perimeter, add the curved half-circumference $\\pi r$ AND the straight diameter $2r$ across the bottom.',
      },
    ],
    examples: [
      {
        problem: 'A circle has radius $6$. Find its circumference and its area, exactly.',
        steps: [
          'Circumference: $C = 2\\pi r = 2 \\times \\pi \\times 6 = 12\\pi$.',
          'Area: $A = \\pi r^2 = \\pi \\times 6^2 = 36\\pi$ square units.',
          'Both answers keep the $\\pi$ — that is what makes them exact.',
        ],
        answer: 'Circumference $12\\pi$, area $36\\pi$ square units',
      },
      {
        problem: 'A circular pond has diameter $10$ meters. Find its area, exactly.',
        steps: [
          'The area formula wants the radius, so halve the diameter first: $r = 10 \\div 2 = 5$.',
          'Now apply the formula: $A = \\pi r^2 = \\pi \\times 5^2 = 25\\pi$.',
          'If we had carelessly used $10$ as the radius, we would get $100\\pi$ — four times too big!',
        ],
        answer: 'The area is $25\\pi$ square meters',
      },
      {
        problem: 'A semicircle has radius $4$. Find its area and its perimeter, exactly.',
        steps: [
          'Area: half of a full circle\'s area. The full circle has area $\\pi \\times 4^2 = 16\\pi$, so the semicircle has area $8\\pi$ square units.',
          'Perimeter: the curved edge is half the circumference, $\\frac{1}{2} \\times 2\\pi \\times 4 = 4\\pi$.',
          'But the boundary also includes the straight edge across the bottom — the diameter, $8$. Total perimeter: $4\\pi + 8$.',
        ],
        answer: 'Area $8\\pi$ square units; perimeter $4\\pi + 8$ units',
      },
    ],
  },
  problems: [
    {
      q: 'A circle has radius $7$. What is its diameter?',
      choices: ['$7$', '$49$', '$21$', '$14$'],
      answer: 3,
      solution: 'The diameter goes all the way across the circle — two radii laid end to end. So $d = 2r = 2 \\times 7 = 14$.',
    },
    {
      q: 'What is the exact circumference of a circle with radius $5$?',
      choices: ['$5\\pi$', '$10\\pi$', '$25\\pi$', '$20\\pi$'],
      answer: 1,
      solution: 'Circumference is $2\\pi r = 2 \\times \\pi \\times 5 = 10\\pi$. ($25\\pi$ is the area, $\\pi r^2$ — a different formula for a different measurement.)',
    },
    {
      q: 'What is the exact area of a circle with radius $3$?',
      choices: ['$9\\pi$', '$6\\pi$', '$3\\pi$', '$12\\pi$'],
      answer: 0,
      solution: 'Area is $\\pi r^2 = \\pi \\times 3 \\times 3 = 9\\pi$ square units. ($6\\pi$ is the circumference, $2\\pi r$ — remember, area squares the radius.)',
    },
    {
      q: 'A circle has diameter $12$. What is its exact circumference?',
      choices: ['$24\\pi$', '$6\\pi$', '$12\\pi$', '$36\\pi$'],
      answer: 2,
      solution: 'The circumference is $\\pi$ times the diameter: $C = \\pi d = 12\\pi$. ($24\\pi$ comes from treating the diameter $12$ as if it were the radius — the classic trap!)',
    },
    {
      q: 'A circle has diameter $16$. What is its exact area?',
      choices: ['$256\\pi$', '$16\\pi$', '$32\\pi$', '$64\\pi$'],
      answer: 3,
      solution: 'Halve the diameter first: $r = 8$. Then $A = \\pi r^2 = \\pi \\times 8^2 = 64\\pi$ square units. (Plugging in $16$ as the radius gives $256\\pi$ — four times too big.)',
    },
    {
      q: 'A circle has circumference $18\\pi$. What is its radius?',
      choices: ['$9$', '$18$', '$6$', '$3$'],
      answer: 0,
      solution: 'Work the formula backwards: $2\\pi r = 18\\pi$, so $2r = 18$ and $r = 9$. ($18$ is the diameter — the radius is half of that.)',
    },
    {
      q: 'What is the exact area of a semicircle with radius $6$?',
      choices: ['$36\\pi$', '$18\\pi$', '$12\\pi$', '$9\\pi$'],
      answer: 1,
      solution: 'The full circle has area $\\pi \\times 6^2 = 36\\pi$, and a semicircle is exactly half: $\\frac{36\\pi}{2} = 18\\pi$ square units.',
    },
    {
      q: 'What is the exact perimeter of a semicircle with radius $10$?',
      choices: ['$10\\pi$', '$20\\pi + 20$', '$10\\pi + 20$', '$5\\pi + 20$'],
      answer: 2,
      solution: 'The curved part is half the circumference: $\\frac{1}{2} \\times 2\\pi \\times 10 = 10\\pi$. But the boundary also includes the straight diameter, $20$. Total: $10\\pi + 20$. (Choosing $10\\pi$ alone forgets that the flat edge is part of the walk around!)',
    },
    {
      q: 'A circle has area $49\\pi$. What is its exact circumference?',
      choices: ['$14\\pi$', '$7\\pi$', '$49\\pi$', '$98\\pi$'],
      answer: 0,
      solution: 'From $\\pi r^2 = 49\\pi$ we get $r^2 = 49$, so $r = 7$. Then the circumference is $2\\pi r = 14\\pi$. Two steps: un-square to find $r$, then use the other formula.',
    },
    {
      q: 'One large pizza has radius $6$ inches. Two small pizzas each have radius $3$ inches. How does the large pizza compare to the two small pizzas together?',
      choices: ['They have the same amount', 'The large has $2$ times as much', 'The large has $4$ times as much', 'The large has $3$ times as much'],
      answer: 1,
      solution: 'Compare areas. Large: $\\pi \\times 6^2 = 36\\pi$. Two smalls: $2 \\times \\pi \\times 3^2 = 18\\pi$. Since $36\\pi = 2 \\times 18\\pi$, the large pizza has twice as much. Doubling the radius quadruples one circle\'s area, so one big beats two smalls!',
    },
  ],
}

const challenge = [
  {
    q: 'A rectangle has perimeter $100$ and length $30$. What is its area?',
    choices: ['$600$', '$3000$', '$1500$', '$700$'],
    answer: 0,
    solution: 'Length plus width is half the perimeter: $30 + w = 50$, so $w = 20$. Then the area is $30 \\times 20 = 600$ square units.',
  },
  {
    q: 'Point $A$ is at $-12$ and point $B$ is at $18$ on the number line. Where is the midpoint of segment $AB$?',
    choices: ['$6$', '$15$', '$3$', '$-3$'],
    answer: 2,
    solution: 'Average the endpoints: $\\frac{-12 + 18}{2} = \\frac{6}{2} = 3$. Check: $3$ is $15$ away from both $-12$ and $18$. ($15$ is half the distance between the points, not the midpoint\'s location.)',
  },
  {
    q: 'A triangle has area $36$ and base $8$. What is its height?',
    choices: ['$\\frac{9}{2}$', '$9$', '$18$', '$12$'],
    answer: 1,
    solution: 'From $\\frac{1}{2} \\times 8 \\times h = 36$ we get $4h = 36$, so $h = 9$. Check: $\\frac{1}{2} \\times 8 \\times 9 = 36$. (Solving $8h = 36$ — forgetting the $\\frac{1}{2}$ — gives $\\frac{9}{2}$, which is too short.)',
  },
  {
    q: 'A trapezoid has parallel sides $7$ and $13$, with height $10$. What is its area?',
    choices: ['$200$', '$70$', '$91$', '$100$'],
    answer: 3,
    solution: 'Average the parallel sides: $\\frac{7 + 13}{2} = 10$. Multiply by the height: $10 \\times 10 = 100$ square units.',
  },
  {
    q: 'A square has area $81$. What is its perimeter?',
    choices: ['$81$', '$18$', '$36$', '$324$'],
    answer: 2,
    solution: 'The side length squares to $81$, so each side is $9$. The perimeter is $4 \\times 9 = 36$. ($18$ counts only two of the four sides.)',
  },
  {
    q: 'A circular fountain has diameter $20$ feet. What is its exact area?',
    choices: ['$100\\pi$', '$400\\pi$', '$20\\pi$', '$40\\pi$'],
    answer: 0,
    solution: 'Radius first: $r = 20 \\div 2 = 10$. Then $A = \\pi \\times 10^2 = 100\\pi$ square feet. (Using the diameter in $\\pi r^2$ gives $400\\pi$ — always halve first!)',
  },
  {
    q: 'An L-shaped deck is a $12 \\times 9$ rectangle with a $4 \\times 3$ rectangular corner removed. What is its area?',
    choices: ['$108$', '$120$', '$84$', '$96$'],
    answer: 3,
    solution: 'Big rectangle minus the missing corner: $12 \\times 9 - 4 \\times 3 = 108 - 12 = 96$ square units. Subtracting is faster than slicing the L into pieces here.',
  },
  {
    q: 'A window is shaped like a semicircle with diameter $12$. What is its exact area?',
    choices: ['$36\\pi$', '$18\\pi$', '$72\\pi$', '$12\\pi$'],
    answer: 1,
    solution: 'The radius is $12 \\div 2 = 6$, so the full circle would have area $\\pi \\times 6^2 = 36\\pi$. Half of that is $18\\pi$ square units. Two traps in one problem: halve the diameter, then halve the area!',
  },
  {
    q: 'Two rectangles each have area $36$: one is $4 \\times 9$ and the other is $6 \\times 6$. How much longer is the perimeter of the first than the second?',
    choices: ['$0$', '$4$', '$2$', '$6$'],
    answer: 2,
    solution: 'First: $2(4 + 9) = 26$. Second: $2(6 + 6) = 24$. The difference is $26 - 24 = 2$. Same area, different perimeters — the more stretched-out a rectangle is, the longer its boundary.',
  },
  {
    q: 'A bicycle wheel has radius $5$ inches. Exactly how far does the bike travel when the wheel makes one full turn?',
    choices: ['$10\\pi$', '$5\\pi$', '$25\\pi$', '$20\\pi$'],
    answer: 0,
    solution: 'One full turn rolls out one full circumference: $2\\pi r = 2\\pi \\times 5 = 10\\pi$ inches. ($25\\pi$ is the wheel\'s area, but rolling distance follows the rim, not the inside.)',
  },
  {
    q: 'A rectangle\'s length is $3$ times its width, and its perimeter is $64$. What is its area?',
    choices: ['$64$', '$256$', '$96$', '$192$'],
    answer: 3,
    solution: 'Let the width be $w$; the length is $3w$. Then $2(w + 3w) = 8w = 64$, so $w = 8$ and the length is $24$. The area is $8 \\times 24 = 192$ square units.',
  },
  {
    q: 'A circle has circumference $16\\pi$. What is its exact area?',
    choices: ['$16\\pi$', '$64\\pi$', '$256\\pi$', '$32\\pi$'],
    answer: 1,
    solution: 'From $2\\pi r = 16\\pi$ we get $r = 8$. Then the area is $\\pi \\times 8^2 = 64\\pi$ square units. The circumference tells you $r$; the area needs $r$ squared.',
  },
]

const worksheet = [
  {
    q: 'Find the distance between $-9$ and $14$ on the number line.',
    answer: '$23$',
    solution: 'Subtract the smaller from the larger: $14 - (-9) = 14 + 9 = 23$. The points sit $9$ and $14$ steps from zero, on opposite sides, so the gaps add.',
  },
  {
    q: 'A rectangle has length $12$ and width $7$. Find its perimeter.',
    answer: '$38$',
    solution: 'Add one length and one width, then double: $2(12 + 7) = 2 \\times 19 = 38$.',
  },
  {
    q: 'Find the area of a triangle with base $14$ and height $6$.',
    answer: '$42$ square units',
    solution: 'Area $= \\frac{1}{2}bh = \\frac{1}{2} \\times 14 \\times 6$. Half of $14$ is $7$, and $7 \\times 6 = 42$ square units.',
  },
  {
    q: 'Find the exact circumference of a circle with radius $9$.',
    answer: '$18\\pi$',
    solution: 'Circumference $= 2\\pi r = 2 \\times \\pi \\times 9 = 18\\pi$. Keep the $\\pi$ — that makes the answer exact.',
  },
  {
    q: 'Find the exact area of a circle with diameter $6$.',
    answer: '$9\\pi$ square units',
    solution: 'The radius is half the diameter: $r = 3$. Then $A = \\pi r^2 = \\pi \\times 3^2 = 9\\pi$ square units.',
  },
  {
    q: 'Find the midpoint of the segment from $5$ to $21$ on the number line.',
    answer: '$13$',
    solution: 'Average the endpoints: $\\frac{5 + 21}{2} = \\frac{26}{2} = 13$. Check: $13$ is exactly $8$ from each endpoint.',
  },
  {
    q: 'An L-shaped playground is a $14 \\times 8$ rectangle with a $5 \\times 3$ rectangular corner removed. Find its area and its perimeter.',
    answer: 'Area $97$ square units; perimeter $44$ units',
    solution: 'Area: subtract the notch from the full rectangle, $14 \\times 8 - 5 \\times 3 = 112 - 15 = 97$ square units. Perimeter: a corner notch does not change the total boundary length — the two new edges ($5$ and $3$) exactly replace the removed ones — so the perimeter equals the full rectangle\'s, $2(14 + 8) = 44$ units.',
  },
  {
    q: 'A trapezoid has area $60$ and parallel sides of length $7$ and $13$. Find its height.',
    answer: '$6$',
    solution: 'The average of the parallel sides is $\\frac{7 + 13}{2} = 10$, so the area equation is $10 \\times h = 60$. Dividing gives $h = 6$. Check: $\\frac{1}{2}(7 + 13) \\times 6 = 60$.',
  },
  {
    q: 'Find the exact perimeter of a semicircle with radius $8$.',
    answer: '$8\\pi + 16$',
    solution: 'The curved edge is half a circumference: $\\frac{1}{2} \\times 2\\pi \\times 8 = 8\\pi$. The straight edge is the diameter, $16$. The full walk around is $8\\pi + 16$ units — do not leave out the flat side!',
  },
  {
    q: 'A circle\'s area and circumference have the same numerical value. Find its radius.',
    answer: '$2$',
    solution: 'Set the formulas equal: $\\pi r^2 = 2\\pi r$. Divide both sides by $\\pi r$ (the radius is not zero): $r = 2$. Check: with $r = 2$, the area is $4\\pi$ and the circumference is $4\\pi$ — a perfect match.',
  },
]

export default {
  id: 'prealgebra-ch11',
  book: 'prealgebra',
  number: 11,
  title: 'Perimeter and Area',
  intro:
    'How much fence does a garden need, and how much grass fits inside? Those are two different questions — perimeter measures the walk around a shape, while area counts the space it covers. In this chapter you will measure segments, rectangles, triangles, trapezoids, and finally circles, where the famous number $\\pi$ makes its grand entrance.',
  sections: [s111, s112, s113],
  challenge,
  worksheet,
}
