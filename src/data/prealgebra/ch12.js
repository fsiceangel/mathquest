// Prealgebra — Chapter 12: Right Triangles and Quadrilaterals
// All problems, explanations, and examples are original MathQuest content.

const s121 = {
  id: '12.1',
  title: 'The Pythagorean Theorem',
  learn: {
    concepts: [
      {
        heading: 'The most famous theorem in math',
        body: 'In a right triangle, the two sides that form the right angle are called legs, and the side across from the right angle is the hypotenuse. The Pythagorean Theorem says the legs and hypotenuse are always linked by $a^2 + b^2 = c^2$, where $a$ and $b$ are the legs and $c$ is the hypotenuse.',
      },
      {
        heading: 'The hypotenuse is the boss',
        body: 'The hypotenuse is always the longest side, and it is always the one opposite the right angle. When you use $a^2 + b^2 = c^2$, make sure $c$ is the hypotenuse — mixing up a leg and the hypotenuse is the number one trap!',
      },
      {
        heading: 'Finding a missing leg',
        body: 'If you know the hypotenuse and one leg, rearrange the theorem: $b^2 = c^2 - a^2$. You subtract instead of add, because the legs are the smaller pieces. A quick sense check: a leg must come out shorter than the hypotenuse.',
      },
      {
        heading: 'Pythagorean triples save time',
        body: 'Some whole-number trios fit the theorem perfectly: $3$-$4$-$5$, $5$-$12$-$13$, and $8$-$15$-$17$ are the most famous. Multiples work too — doubling $3$-$4$-$5$ gives $6$-$8$-$10$, and tripling gives $9$-$12$-$15$. Spot a triple and you can skip the squaring entirely!',
      },
    ],
    examples: [
      {
        problem: 'A right triangle has legs of length $6$ and $8$. How long is the hypotenuse?',
        steps: [
          'Square each leg: $6^2 = 36$ and $8^2 = 64$.',
          'Add them: $36 + 64 = 100$, so $c^2 = 100$.',
          'Ask which positive number squares to $100$: that is $10$. (You might also notice $6$-$8$-$10$ is just $3$-$4$-$5$ doubled!)',
        ],
        answer: 'The hypotenuse is $10$',
      },
      {
        problem: 'A right triangle has a hypotenuse of length $13$ and one leg of length $5$. Find the other leg.',
        steps: [
          'The unknown side is a leg, so we subtract: $b^2 = 13^2 - 5^2$.',
          'Compute: $169 - 25 = 144$.',
          'Since $12^2 = 144$, the missing leg is $12$. Sense check: $12 < 13$, shorter than the hypotenuse, as a leg should be.',
        ],
        answer: 'The other leg is $12$',
      },
      {
        problem: 'A $25$-foot ladder leans against a wall, with its foot $7$ feet from the base of the wall. How high up the wall does the ladder reach?',
        steps: [
          'The ladder is the hypotenuse ($25$), the ground distance is one leg ($7$), and the height is the other leg.',
          'Subtract: $25^2 - 7^2 = 625 - 49 = 576$.',
          'Since $24^2 = 576$, the ladder reaches $24$ feet up the wall.',
        ],
        answer: 'The ladder reaches $24$ feet up the wall',
      },
    ],
  },
  problems: [
    {
      q: 'A right triangle has legs of length $3$ and $4$. How long is the hypotenuse?',
      choices: ['$5$', '$7$', '$25$', '$6$'],
      answer: 0,
      solution: 'Use $a^2 + b^2 = c^2$: here $9 + 16 = 25$, so $c^2 = 25$ and $c = 5$. (Careful: $7$ comes from adding $3 + 4$ without squaring, and $25$ is $c^2$, not $c$.)',
    },
    {
      q: 'In a right triangle, which side is the hypotenuse?',
      choices: ['The shortest side', 'Either of the sides that form the right angle', 'The side opposite the right angle', 'The side opposite the smallest angle'],
      answer: 2,
      solution: 'The hypotenuse sits directly across from the right angle, and it is always the longest side of the triangle. The two sides that form the right angle are the legs.',
    },
    {
      q: 'A right triangle has legs of length $5$ and $12$. How long is the hypotenuse?',
      choices: ['$17$', '$13$', '$15$', '$169$'],
      answer: 1,
      solution: 'Square and add: $25 + 144 = 169$, and $13^2 = 169$, so the hypotenuse is $13$. This is the famous $5$-$12$-$13$ triple! ($17$ is the trap of adding $5 + 12$, and $169$ is $c^2$ before taking the square root.)',
    },
    {
      q: 'A right triangle has a hypotenuse of length $10$ and one leg of length $6$. How long is the other leg?',
      choices: ['$4$', '$\\sqrt{136}$', '$12$', '$8$'],
      answer: 3,
      solution: 'The unknown side is a leg, so subtract: $10^2 - 6^2 = 100 - 36 = 64$, and $8^2 = 64$. The leg is $8$. ($\\sqrt{136}$ comes from adding when you should subtract, and $4$ comes from computing $10 - 6$ without squaring.)',
    },
    {
      q: 'A right triangle has legs of length $9$ and $12$. How long is the hypotenuse?',
      choices: ['$15$', '$21$', '$13$', '$17$'],
      answer: 0,
      solution: 'This is $3$-$4$-$5$ tripled: $9$-$12$-$15$. Check with the theorem: $81 + 144 = 225 = 15^2$. The hypotenuse is $15$.',
    },
    {
      q: 'A $17$-foot ladder leans against a wall with its foot $8$ feet from the wall. How high up the wall does the ladder reach?',
      choices: ['$9$ feet', '$25$ feet', '$15$ feet', '$13$ feet'],
      answer: 2,
      solution: 'The ladder is the hypotenuse. Subtract: $17^2 - 8^2 = 289 - 64 = 225$, and $15^2 = 225$. The ladder reaches $15$ feet — the $8$-$15$-$17$ triple in action! ($9$ is the trap of computing $17 - 8$.)',
    },
    {
      q: 'Leo walks $8$ blocks east and then $6$ blocks north. How far is he, in a straight line, from where he started?',
      choices: ['$14$ blocks', '$10$ blocks', '$12$ blocks', '$7$ blocks'],
      answer: 1,
      solution: 'His path forms the two legs of a right triangle, and the straight-line distance is the hypotenuse: $8^2 + 6^2 = 64 + 36 = 100$, so the distance is $10$ blocks. ($14$ is the walking distance along the streets, not the straight-line distance.)',
    },
    {
      q: 'Which of these could be the side lengths of a right triangle?',
      choices: ['$4$, $5$, $6$', '$6$, $7$, $9$', '$7$, $8$, $10$', '$5$, $12$, $13$'],
      answer: 3,
      solution: 'Test each set: does the sum of the squares of the two shorter sides equal the square of the longest? Only $5$, $12$, $13$ works: $25 + 144 = 169 = 13^2$. For the others: $16 + 25 = 41 \\ne 36$, $36 + 49 = 85 \\ne 81$, and $49 + 64 = 113 \\ne 100$.',
    },
    {
      q: 'A right triangle has a hypotenuse of length $25$ and one leg of length $15$. How long is the other leg?',
      choices: ['$\\sqrt{850}$', '$10$', '$20$', '$18$'],
      answer: 2,
      solution: 'Subtract for a missing leg: $25^2 - 15^2 = 625 - 225 = 400$, and $20^2 = 400$. The leg is $20$ — this is $3$-$4$-$5$ scaled by $5$ to give $15$-$20$-$25$. ($\\sqrt{850}$ is the trap of adding instead of subtracting.)',
    },
    {
      q: 'A rectangular garden is $24$ meters long and $7$ meters wide. How long is the diagonal path from one corner to the opposite corner?',
      choices: ['$31$ meters', '$23$ meters', '$26$ meters', '$25$ meters'],
      answer: 3,
      solution: 'The diagonal cuts the rectangle into two right triangles with legs $24$ and $7$. So the diagonal is the hypotenuse: $24^2 + 7^2 = 576 + 49 = 625$, and $25^2 = 625$. The diagonal is $25$ meters. ($31$ is the trap of adding $24 + 7$.)',
    },
  ],
}

const s122 = {
  id: '12.2',
  title: 'Some Special Triangles',
  learn: {
    concepts: [
      {
        heading: 'Isosceles and equilateral triangles',
        body: 'An isosceles triangle has two equal sides, and the angles opposite those sides (the base angles) are equal too. An equilateral triangle goes all the way: three equal sides and three equal angles. Since the angles of any triangle sum to $180^\\circ$, each angle of an equilateral triangle is exactly $60^\\circ$.',
      },
      {
        heading: 'The $45$-$45$-$90$ triangle',
        body: 'Slice a square along its diagonal and you get a right triangle with two $45^\\circ$ angles. Its legs are equal, and its hypotenuse is $\\sqrt{2}$ times as long as a leg. So a $45$-$45$-$90$ triangle with legs $5$ has hypotenuse $5\\sqrt{2}$.',
      },
      {
        heading: 'The $30$-$60$-$90$ triangle',
        body: 'Slice an equilateral triangle down the middle and you get a $30$-$60$-$90$ triangle. Its sides come in the ratio $1 : \\sqrt{3} : 2$. The shortest side is opposite the $30^\\circ$ angle, the hypotenuse is twice the shortest side, and the middle side (opposite $60^\\circ$) is the shortest side times $\\sqrt{3}$.',
      },
      {
        heading: 'Leave your answers exact',
        body: 'Numbers like $\\sqrt{2}$ and $\\sqrt{3}$ never end as decimals, so mathematicians leave them in radical form: $7\\sqrt{2}$ is an exact answer, while $9.899...$ is only an approximation. Exact answers are both prettier and more precise!',
      },
    ],
    examples: [
      {
        problem: 'A $45$-$45$-$90$ triangle has legs of length $5$. Find the hypotenuse.',
        steps: [
          'In a $45$-$45$-$90$ triangle, the hypotenuse is a leg times $\\sqrt{2}$.',
          'So the hypotenuse is $5\\sqrt{2}$. Check with the Pythagorean Theorem: $5^2 + 5^2 = 50$, and $(5\\sqrt{2})^2 = 25 \\times 2 = 50$. It matches!',
        ],
        answer: 'The hypotenuse is $5\\sqrt{2}$',
      },
      {
        problem: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $12$. Find the two legs.',
        steps: [
          'The hypotenuse is twice the shortest side, so the shortest side is $12 \\div 2 = 6$.',
          'The longer leg is the shortest side times $\\sqrt{3}$: that is $6\\sqrt{3}$.',
          'So the sides are $6$, $6\\sqrt{3}$, and $12$ — the ratio $1 : \\sqrt{3} : 2$ scaled by $6$.',
        ],
        answer: 'The legs are $6$ and $6\\sqrt{3}$',
      },
      {
        problem: 'An isosceles triangle has an apex angle of $40^\\circ$. Find each base angle.',
        steps: [
          'The three angles must sum to $180^\\circ$, so the two base angles together make $180^\\circ - 40^\\circ = 140^\\circ$.',
          'Base angles of an isosceles triangle are equal, so each is $140^\\circ \\div 2 = 70^\\circ$.',
        ],
        answer: 'Each base angle is $70^\\circ$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the measure of each angle in an equilateral triangle?',
      choices: ['$90^\\circ$', '$60^\\circ$', '$45^\\circ$', '$30^\\circ$'],
      answer: 1,
      solution: 'The three angles of any triangle sum to $180^\\circ$, and in an equilateral triangle they are all equal: $180^\\circ \\div 3 = 60^\\circ$.',
    },
    {
      q: 'An isosceles triangle has base angles of $65^\\circ$ each. What is the third angle?',
      choices: ['$65^\\circ$', '$115^\\circ$', '$40^\\circ$', '$50^\\circ$'],
      answer: 3,
      solution: 'The angles sum to $180^\\circ$. The base angles use up $65^\\circ + 65^\\circ = 130^\\circ$, leaving $180^\\circ - 130^\\circ = 50^\\circ$ for the apex angle.',
    },
    {
      q: 'A $45$-$45$-$90$ triangle has legs of length $7$. How long is the hypotenuse?',
      choices: ['$7\\sqrt{2}$', '$14$', '$7\\sqrt{3}$', '$14\\sqrt{2}$'],
      answer: 0,
      solution: 'The hypotenuse of a $45$-$45$-$90$ triangle is a leg times $\\sqrt{2}$, so it is $7\\sqrt{2}$. Check: $49 + 49 = 98$ and $(7\\sqrt{2})^2 = 49 \\times 2 = 98$. ($14$ would be doubling, which is the $30$-$60$-$90$ rule, not this one.)',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $10$. How long is its shortest side?',
      choices: ['$5\\sqrt{3}$', '$20$', '$5$', '$5\\sqrt{2}$'],
      answer: 2,
      solution: 'In a $30$-$60$-$90$ triangle the hypotenuse is twice the shortest side, so the shortest side is $10 \\div 2 = 5$. ($5\\sqrt{3}$ is the longer leg, not the shortest side — keep the two legs straight!)',
    },
    {
      q: 'A $45$-$45$-$90$ triangle has a hypotenuse of length $8\\sqrt{2}$. How long is each leg?',
      choices: ['$16$', '$8$', '$4$', '$4\\sqrt{2}$'],
      answer: 1,
      solution: 'The hypotenuse is a leg times $\\sqrt{2}$, so work backwards: leg $= 8\\sqrt{2} \\div \\sqrt{2} = 8$. Check: $8^2 + 8^2 = 128$ and $(8\\sqrt{2})^2 = 64 \\times 2 = 128$. ($16$ is the trap of multiplying by $\\sqrt{2}$ again instead of dividing.)',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has a shortest side of length $4$. How long is the longer leg?',
      choices: ['$8$', '$4\\sqrt{2}$', '$8\\sqrt{3}$', '$4\\sqrt{3}$'],
      answer: 3,
      solution: 'The longer leg is the shortest side times $\\sqrt{3}$: $4\\sqrt{3}$. ($8$ is the hypotenuse — twice the shortest side — not the longer leg.)',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $14$. How long is the side opposite the $60^\\circ$ angle?',
      choices: ['$7\\sqrt{3}$', '$7$', '$14\\sqrt{3}$', '$7\\sqrt{2}$'],
      answer: 0,
      solution: 'First find the shortest side: half the hypotenuse, so $7$. The side opposite $60^\\circ$ is the longer leg, which is the shortest side times $\\sqrt{3}$: $7\\sqrt{3}$. ($7$ alone is the shortest side, opposite $30^\\circ$.)',
    },
    {
      q: 'An isosceles triangle has one angle of $100^\\circ$. What is the measure of each of the other two angles?',
      choices: ['$80^\\circ$', '$100^\\circ$', '$40^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution: 'A triangle cannot have two $100^\\circ$ angles (that alone would pass $180^\\circ$), so the $100^\\circ$ angle is the apex and the other two are the equal base angles. They share $180^\\circ - 100^\\circ = 80^\\circ$, so each is $40^\\circ$.',
    },
    {
      q: 'A square has sides of length $10$. How long is its diagonal?',
      choices: ['$20$', '$10\\sqrt{2}$', '$10\\sqrt{3}$', '$5\\sqrt{2}$'],
      answer: 1,
      solution: 'The diagonal splits the square into two $45$-$45$-$90$ triangles with legs $10$. The diagonal is the hypotenuse: $10\\sqrt{2}$. Check: $100 + 100 = 200 = (10\\sqrt{2})^2$.',
    },
    {
      q: 'An equilateral triangle has sides of length $8$. What is its height?',
      choices: ['$8\\sqrt{3}$', '$4$', '$4\\sqrt{2}$', '$4\\sqrt{3}$'],
      answer: 3,
      solution: 'The height splits the triangle into two $30$-$60$-$90$ triangles: the shortest side is half the base ($4$) and the hypotenuse is $8$. The height is the longer leg: $4\\sqrt{3}$. Check with the Pythagorean Theorem: $8^2 - 4^2 = 64 - 16 = 48$, and $(4\\sqrt{3})^2 = 16 \\times 3 = 48$.',
    },
  ],
}

const s123 = {
  id: '12.3',
  title: 'Types of Quadrilaterals',
  learn: {
    concepts: [
      {
        heading: 'The quadrilateral family',
        body: 'A quadrilateral is any four-sided shape, and its angles always sum to $360^\\circ$. A trapezoid has at least one pair of parallel sides. A parallelogram has two pairs of parallel sides. From there the family gets fancier: rhombi, rectangles, and squares are all special parallelograms.',
      },
      {
        heading: 'Parallelogram angle rules',
        body: 'In a parallelogram, opposite sides are equal and opposite angles are equal. Angles next to each other (consecutive angles) are supplementary — they sum to $180^\\circ$. So if one angle of a parallelogram is $70^\\circ$, its neighbors are each $110^\\circ$.',
      },
      {
        heading: 'Rhombus, rectangle, square',
        body: 'A rhombus is a parallelogram with four equal sides. A rectangle is a parallelogram with four right angles. A square is both at once — four equal sides AND four right angles. That means every square is a rhombus, and every square is a rectangle, but a rhombus need not be a square.',
      },
      {
        heading: 'Diagonal secrets',
        body: 'Diagonals reveal a lot. In any parallelogram, the diagonals cut each other in half. In a rectangle, the two diagonals have equal length. In a rhombus, the diagonals cross at right angles. A square, being both, gets all of these properties at once.',
      },
    ],
    examples: [
      {
        problem: 'In parallelogram $ABCD$, angle $A = 70^\\circ$. Find angles $B$ and $C$.',
        steps: [
          'Angle $C$ is opposite angle $A$, and opposite angles of a parallelogram are equal, so angle $C = 70^\\circ$.',
          'Angle $B$ is next to angle $A$, and consecutive angles are supplementary: angle $B = 180^\\circ - 70^\\circ = 110^\\circ$.',
          'Quick check: $70 + 110 + 70 + 110 = 360$. The four angles sum to $360^\\circ$, as they must.',
        ],
        answer: 'Angle $B = 110^\\circ$ and angle $C = 70^\\circ$',
      },
      {
        problem: 'A rhombus has a perimeter of $36$. How long is each side?',
        steps: [
          'All four sides of a rhombus are equal.',
          'So each side is $36 \\div 4 = 9$.',
        ],
        answer: 'Each side is $9$',
      },
      {
        problem: 'Three angles of a quadrilateral measure $85^\\circ$, $95^\\circ$, and $100^\\circ$. Find the fourth angle.',
        steps: [
          'The four angles of any quadrilateral sum to $360^\\circ$.',
          'The three known angles total $85 + 95 + 100 = 280$ degrees.',
          'The fourth angle is $360^\\circ - 280^\\circ = 80^\\circ$.',
        ],
        answer: 'The fourth angle is $80^\\circ$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the sum of the angles of any quadrilateral?',
      choices: ['$180^\\circ$', '$540^\\circ$', '$360^\\circ$', '$270^\\circ$'],
      answer: 2,
      solution: 'A diagonal splits any quadrilateral into two triangles, and each triangle contributes $180^\\circ$. So the total is $2 \\times 180^\\circ = 360^\\circ$.',
    },
    {
      q: 'Which name describes a quadrilateral with four equal sides and four equal angles?',
      choices: ['A square', 'A rhombus', 'A rectangle', 'A trapezoid'],
      answer: 0,
      solution: 'Four equal sides makes it a rhombus; four equal angles (each $90^\\circ$) makes it a rectangle. A shape that is both at once is a square — the most special quadrilateral of all.',
    },
    {
      q: 'A rhombus has sides of length $7$. What is its perimeter?',
      choices: ['$14$', '$28$', '$21$', '$49$'],
      answer: 1,
      solution: 'All four sides of a rhombus are equal, so the perimeter is $4 \\times 7 = 28$. ($49$ is the trap of computing $7^2$ — that would be the area of a square, a different question!)',
    },
    {
      q: 'In parallelogram $ABCD$, angle $A = 70^\\circ$. What is the measure of angle $C$, the angle opposite angle $A$?',
      choices: ['$110^\\circ$', '$20^\\circ$', '$140^\\circ$', '$70^\\circ$'],
      answer: 3,
      solution: 'Opposite angles of a parallelogram are equal, so angle $C = 70^\\circ$. ($110^\\circ$ would be a neighboring angle — consecutive angles are the supplementary ones.)',
    },
    {
      q: 'In parallelogram $PQRS$, angle $P = 65^\\circ$. What is the measure of angle $Q$, which is next to angle $P$?',
      choices: ['$115^\\circ$', '$65^\\circ$', '$25^\\circ$', '$130^\\circ$'],
      answer: 0,
      solution: 'Consecutive angles of a parallelogram are supplementary: angle $Q = 180^\\circ - 65^\\circ = 115^\\circ$. ($65^\\circ$ would be the rule for opposite angles, and $25^\\circ$ comes from using $90^\\circ$ instead of $180^\\circ$.)',
    },
    {
      q: 'Which statement is always true?',
      choices: ['Every rhombus is a square', 'Every trapezoid is a parallelogram', 'Every square is a rhombus', 'Every parallelogram is a rectangle'],
      answer: 2,
      solution: 'A rhombus just needs four equal sides, and a square has them — so every square is a rhombus. The others fail: a rhombus can lean over without right angles, a trapezoid may have only one pair of parallel sides, and a parallelogram need not have right angles.',
    },
    {
      q: 'In which quadrilateral do the diagonals ALWAYS cross at right angles?',
      choices: ['A rectangle', 'A rhombus', 'Any parallelogram', 'Any trapezoid'],
      answer: 1,
      solution: 'Perpendicular diagonals are the special property of the rhombus. A rectangle promises equal diagonals instead — a non-square rectangle has diagonals that are equal but not perpendicular.',
    },
    {
      q: 'A rectangle is $12$ cm long and $5$ cm wide. How long is each diagonal?',
      choices: ['$17$ cm', '$60$ cm', '$15$ cm', '$13$ cm'],
      answer: 3,
      solution: 'A diagonal makes a right triangle with the length and width as legs: $12^2 + 5^2 = 144 + 25 = 169$, and $13^2 = 169$. Each diagonal is $13$ cm — and both diagonals are $13$, since a rectangle has equal diagonals. ($17$ is the trap of adding $12 + 5$.)',
    },
    {
      q: 'In a parallelogram, one angle is twice as large as the angle next to it. What is the measure of the smaller angle?',
      choices: ['$60^\\circ$', '$45^\\circ$', '$90^\\circ$', '$120^\\circ$'],
      answer: 0,
      solution: 'Call the smaller angle $x$; its neighbor is $2x$. Consecutive angles are supplementary, so $x + 2x = 180^\\circ$, giving $3x = 180^\\circ$ and $x = 60^\\circ$. The angles are $60^\\circ$ and $120^\\circ$.',
    },
    {
      q: 'A square has a perimeter of $36$. How long is its diagonal?',
      choices: ['$18$', '$9$', '$9\\sqrt{2}$', '$9\\sqrt{3}$'],
      answer: 2,
      solution: 'Each side is $36 \\div 4 = 9$. The diagonal of a square is a side times $\\sqrt{2}$ (it is the hypotenuse of a $45$-$45$-$90$ triangle), so the diagonal is $9\\sqrt{2}$.',
    },
  ],
}

const challenge = [
  {
    q: 'A right triangle has legs of length $20$ and $21$. How long is the hypotenuse?',
    choices: ['$29$', '$41$', '$28$', '$25$'],
    answer: 0,
    solution: 'Square and add: $400 + 441 = 841$, and $29^2 = 841$. The hypotenuse is $29$ — the lesser-known $20$-$21$-$29$ triple! ($41$ is the trap of adding $20 + 21$.)',
  },
  {
    q: 'A right triangle has a hypotenuse of length $26$ and one leg of length $24$. How long is the other leg?',
    choices: ['$\\sqrt{1252}$', '$2$', '$10$', '$12$'],
    answer: 2,
    solution: 'Subtract for a missing leg: $26^2 - 24^2 = 676 - 576 = 100$, so the leg is $10$. This is $5$-$12$-$13$ doubled: $10$-$24$-$26$. ($\\sqrt{1252}$ comes from adding, and $2$ from computing $26 - 24$ without squaring.)',
  },
  {
    q: 'A $45$-$45$-$90$ triangle has a hypotenuse of length $10$. How long is each leg?',
    choices: ['$5$', '$5\\sqrt{2}$', '$10\\sqrt{2}$', '$5\\sqrt{3}$'],
    answer: 1,
    solution: 'Each leg is the hypotenuse divided by $\\sqrt{2}$: $10 \\div \\sqrt{2} = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$. Check: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$. ($5$ is the trap of halving, which is the $30$-$60$-$90$ rule.)',
  },
  {
    q: 'The longer leg of a $30$-$60$-$90$ triangle has length $6\\sqrt{3}$. How long is the hypotenuse?',
    choices: ['$6$', '$12\\sqrt{3}$', '$18$', '$12$'],
    answer: 3,
    solution: 'The longer leg is the shortest side times $\\sqrt{3}$, so the shortest side is $6\\sqrt{3} \\div \\sqrt{3} = 6$. The hypotenuse is twice the shortest side: $12$. ($6$ stops one step early, and $12\\sqrt{3}$ doubles the wrong side.)',
  },
  {
    q: 'An isosceles triangle has a perimeter of $32$ and a base of length $12$. What is the height drawn to the base?',
    choices: ['$8$', '$10$', '$6$', '$\\sqrt{56}$'],
    answer: 0,
    solution: 'The two equal legs share $32 - 12 = 20$, so each leg is $10$. The height splits the base into halves of $6$, making a right triangle with hypotenuse $10$ and leg $6$: the height is $\\sqrt{100 - 36} = \\sqrt{64} = 8$. (A $6$-$8$-$10$ triple hiding inside!)',
  },
  {
    q: 'In parallelogram $ABCD$, angles $A$ and $C$ (a pair of opposite angles) sum to $140^\\circ$. What is the measure of angle $B$?',
    choices: ['$70^\\circ$', '$140^\\circ$', '$110^\\circ$', '$40^\\circ$'],
    answer: 2,
    solution: 'Opposite angles are equal, so angles $A$ and $C$ are each $140^\\circ \\div 2 = 70^\\circ$. Angle $B$ is consecutive to angle $A$, so it is supplementary: $180^\\circ - 70^\\circ = 110^\\circ$.',
  },
  {
    q: 'A square has a diagonal of length $6\\sqrt{2}$. What is its perimeter?',
    choices: ['$24$', '$36$', '$12$', '$24\\sqrt{2}$'],
    answer: 0,
    solution: 'The diagonal is a side times $\\sqrt{2}$, so each side is $6\\sqrt{2} \\div \\sqrt{2} = 6$. The perimeter is $4 \\times 6 = 24$. ($36$ is the area, a different measurement.)',
  },
  {
    q: 'A hiker walks $5$ km north, then $12$ km east. How far is she, in a straight line, from her starting point?',
    choices: ['$17$ km', '$7$ km', '$15$ km', '$13$ km'],
    answer: 3,
    solution: 'North and east are perpendicular, so her two walks are the legs of a right triangle: $5^2 + 12^2 = 25 + 144 = 169$, and $13^2 = 169$. She is $13$ km from her start. ($17$ is the distance she actually walked.)',
  },
  {
    q: 'An equilateral triangle has a perimeter of $30$. What is its height?',
    choices: ['$10\\sqrt{3}$', '$5\\sqrt{3}$', '$5\\sqrt{2}$', '$5$'],
    answer: 1,
    solution: 'Each side is $30 \\div 3 = 10$. The height makes a $30$-$60$-$90$ triangle with shortest side $5$ (half the base) and hypotenuse $10$, so the height is $5\\sqrt{3}$. Check: $10^2 - 5^2 = 75 = (5\\sqrt{3})^2$.',
  },
  {
    q: 'The diagonals of a rhombus have lengths $6$ and $8$. How long is each side of the rhombus?',
    choices: ['$7$', '$10$', '$14$', '$5$'],
    answer: 3,
    solution: 'The diagonals of a rhombus are perpendicular and cut each other in half, making four right triangles with legs $3$ and $4$. Each side of the rhombus is a hypotenuse: $\\sqrt{9 + 16} = \\sqrt{25} = 5$. ($7$ is the trap of averaging the diagonals.)',
  },
  {
    q: 'Which of these is NOT a right triangle?',
    choices: ['Sides $9$, $12$, $15$', 'Sides $7$, $10$, $12$', 'Sides $8$, $15$, $17$', 'Sides $10$, $24$, $26$'],
    answer: 1,
    solution: 'Check each with the Pythagorean Theorem. $81 + 144 = 225 = 15^2$ works, $64 + 225 = 289 = 17^2$ works, and $100 + 576 = 676 = 26^2$ works. But $49 + 100 = 149$, while $12^2 = 144$ — no match, so $7$, $10$, $12$ is not a right triangle.',
  },
  {
    q: 'In trapezoid $ABCD$, side $AB$ is parallel to side $CD$, and angle $A = 75^\\circ$. Angles $A$ and $D$ share the side $AD$. What is the measure of angle $D$?',
    choices: ['$75^\\circ$', '$15^\\circ$', '$105^\\circ$', '$285^\\circ$'],
    answer: 2,
    solution: 'Side $AD$ is a transversal cutting the two parallel sides, so angles $A$ and $D$ are supplementary: angle $D = 180^\\circ - 75^\\circ = 105^\\circ$. This is the same "consecutive angles" idea we used for parallelograms — it works between any pair of parallel sides.',
  },
]

const worksheet = [
  {
    q: 'A right triangle has legs of length $9$ and $40$. Find the hypotenuse.',
    answer: '$41$',
    solution: 'Square and add: $81 + 1600 = 1681$, and $41^2 = 1681$. The hypotenuse is $41$.',
  },
  {
    q: 'A right triangle has a hypotenuse of length $15$ and one leg of length $9$. Find the other leg.',
    answer: '$12$',
    solution: 'Subtract for a missing leg: $15^2 - 9^2 = 225 - 81 = 144$, and $12^2 = 144$. The leg is $12$ — this is $3$-$4$-$5$ tripled.',
  },
  {
    q: 'A $45$-$45$-$90$ triangle has legs of length $11$. Find the hypotenuse, in exact form.',
    answer: '$11\\sqrt{2}$',
    solution: 'The hypotenuse of a $45$-$45$-$90$ triangle is a leg times $\\sqrt{2}$: $11\\sqrt{2}$. Check: $121 + 121 = 242 = (11\\sqrt{2})^2$.',
  },
  {
    q: 'The shortest side of a $30$-$60$-$90$ triangle has length $7$. Find the hypotenuse.',
    answer: '$14$',
    solution: 'The hypotenuse of a $30$-$60$-$90$ triangle is twice the shortest side: $2 \\times 7 = 14$. (The remaining side, the longer leg, would be $7\\sqrt{3}$.)',
  },
  {
    q: 'In parallelogram $ABCD$, angle $A = 48^\\circ$. Find the other three angles.',
    answer: 'Angle $B = 132^\\circ$, angle $C = 48^\\circ$, angle $D = 132^\\circ$',
    solution: 'Opposite angles are equal, so angle $C = 48^\\circ$. Consecutive angles are supplementary, so angles $B$ and $D$ are each $180^\\circ - 48^\\circ = 132^\\circ$. Check: $48 + 132 + 48 + 132 = 360$. ✓',
  },
  {
    q: 'A rhombus has a perimeter of $52$. How long is each side?',
    answer: '$13$',
    solution: 'All four sides of a rhombus are equal, so each side is $52 \\div 4 = 13$.',
  },
  {
    q: 'A $13$-meter ladder leans against a wall and reaches a window $12$ meters above the ground. How far is the foot of the ladder from the wall?',
    answer: '$5$ meters',
    solution: 'The ladder is the hypotenuse and the height is a leg: $13^2 - 12^2 = 169 - 144 = 25$, and $5^2 = 25$. The foot of the ladder is $5$ meters from the wall — the $5$-$12$-$13$ triple.',
  },
  {
    q: 'A square has a diagonal of length $14$. Find the side length, in exact form.',
    answer: '$7\\sqrt{2}$',
    solution: 'The diagonal is a side times $\\sqrt{2}$, so the side is $14 \\div \\sqrt{2} = \\frac{14}{\\sqrt{2}} = 7\\sqrt{2}$. Check: $(7\\sqrt{2})^2 + (7\\sqrt{2})^2 = 98 + 98 = 196 = 14^2$. ✓',
  },
  {
    q: 'An isosceles triangle has two sides of length $13$ and a base of length $10$. Find its area.',
    answer: '$60$',
    solution: 'The height to the base splits it into halves of $5$, giving a right triangle with hypotenuse $13$ and leg $5$: the height is $\\sqrt{169 - 25} = \\sqrt{144} = 12$. The area is $\\frac{1}{2} \\times 10 \\times 12 = 60$.',
  },
  {
    q: 'The diagonals of a rhombus have lengths $10$ and $24$. Find the perimeter of the rhombus.',
    answer: '$52$',
    solution: 'The diagonals are perpendicular and bisect each other, making right triangles with legs $5$ and $12$. Each side is $\\sqrt{25 + 144} = \\sqrt{169} = 13$, so the perimeter is $4 \\times 13 = 52$.',
  },
]

export default {
  id: 'prealgebra-ch12',
  book: 'prealgebra',
  number: 12,
  title: 'Right Triangles and Quadrilaterals',
  intro:
    'Right triangles hide inside almost every shape you can draw — squares, rectangles, even ladders leaning against walls. In this chapter you will meet the Pythagorean Theorem, one of the oldest and most useful facts in all of mathematics, and then use it to unlock the secrets of special triangles and the whole quadrilateral family.',
  sections: [s121, s122, s123],
  challenge,
  worksheet,
}
