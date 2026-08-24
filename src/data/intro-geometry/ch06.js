// Introduction to Geometry — Chapter 6: Right Triangles
// All problems, explanations, and examples are original MathQuest content.

const s61 = {
  id: '6.1',
  title: 'Pythagorean Theorem',
  learn: {
    concepts: [
      {
        heading: 'The most famous theorem in math',
        body: 'In a right triangle, the two sides that form the right angle are the legs, and the side across from the right angle is the hypotenuse — always the longest side. The Pythagorean Theorem says the legs and hypotenuse are locked together: $a^2 + b^2 = c^2$, where $a$ and $b$ are the legs and $c$ is the hypotenuse.',
      },
      {
        heading: 'Why it works: rearranging squares',
        body: 'Take four copies of a right triangle with legs $a$, $b$ and hypotenuse $c$, and tuck them into a big square of side $a + b$. Arranged one way, the uncovered space is a single tilted square of area $c^2$. Slide the same four triangles into a different arrangement inside the same big square, and the uncovered space becomes two squares of areas $a^2$ and $b^2$. The leftover area did not change — only its shape did — so $a^2 + b^2 = c^2$.',
      },
      {
        heading: 'Finding a missing side',
        body: 'To find the hypotenuse, square both legs, add, and take the square root. To find a leg, square the hypotenuse, subtract the other leg squared, and take the square root: $b = \\sqrt{c^2 - a^2}$. Answers are often not whole numbers — leave them as simplified radicals like $2\\sqrt{14}$ rather than messy decimals.',
      },
      {
        heading: 'The converse: a right-angle detector',
        body: 'The theorem runs in reverse, too. If the sides of a triangle satisfy $a^2 + b^2 = c^2$ (where $c$ is the longest side), the angle opposite $c$ must be a right angle. If the equation fails, the triangle is not right. This lets you test for right angles armed with nothing but a ruler.',
      },
    ],
    examples: [
      {
        problem: 'A right triangle has legs of length $8$ and $15$. Find the hypotenuse.',
        steps: [
          'The hypotenuse $c$ satisfies $c^2 = 8^2 + 15^2$.',
          'Compute the squares: $64 + 225 = 289$.',
          'So $c = \\sqrt{289} = 17$. Notice $17$ is bigger than both legs, as a hypotenuse must be.',
        ],
        answer: 'The hypotenuse is $17$',
        fig: {
          view: [-2.5, -2.5, 18, 10.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]], fill: false },
            { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
            { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
            { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 0 },
            { t: 'label', p: [7.5, 4], text: '?', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: 'A right triangle has hypotenuse $9$ and one leg of length $5$. Find the other leg exactly.',
        steps: [
          'This time we know $c = 9$, so subtract: $b^2 = 9^2 - 5^2 = 81 - 25 = 56$.',
          'Then $b = \\sqrt{56}$. Simplify by pulling out the biggest perfect square factor: $56 = 4 \\times 14$.',
          'So $b = \\sqrt{4}\\cdot\\sqrt{14} = 2\\sqrt{14}$, which is about $7.5$ — sensibly shorter than the hypotenuse $9$.',
        ],
        answer: 'The other leg is $2\\sqrt{14}$',
        fig: {
          view: [-2, -2.5, 10, 7.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [7.48, 0], [0, 5]], fill: false },
            { t: 'right', at: [0, 0], from: [7.48, 0], to: [0, 5] },
            { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
            { t: 'label', p: [3.74, 0], text: '?', dx: 0, dy: 14 },
            { t: 'label', p: [3.74, 2.5], text: '9', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: 'A triangle has sides $6$, $7$, and $9$. Is it a right triangle?',
        steps: [
          'If the triangle is right, its longest side $9$ must be the hypotenuse, so test whether $6^2 + 7^2 = 9^2$.',
          'Left side: $36 + 49 = 85$. Right side: $81$.',
          'Since $85 \\ne 81$, the equation fails — no right angle here. (In fact $85 > 81$ means the angle opposite the $9$ is slightly less than $90^\\circ$.)',
        ],
        answer: 'No — since $6^2 + 7^2 = 85 \\ne 81 = 9^2$, the triangle is not right',
      },
    ],
  },
  problems: [
    {
      q: 'A right triangle has legs $6$ and $8$. What is the length of the hypotenuse?',
      fig: {
        view: [-2.5, -2.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [4, 3], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$10$', '$14$', '$2\\sqrt{7}$', '$48$'],
      answer: 0,
      solution: 'Square the legs and add: $6^2 + 8^2 = 36 + 64 = 100$, so the hypotenuse is $\\sqrt{100} = 10$. Watch out for $14$ — that comes from adding the legs themselves instead of their squares. The Pythagorean Theorem works with squares of sides, never the sides directly.',
    },
    {
      q: 'A right triangle has legs $5$ and $12$. What is the length of the hypotenuse?',
      fig: {
        view: [-2.5, -2.5, 15, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 5]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 5] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
          { t: 'label', p: [6, 2.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$17$', '$\\sqrt{119}$', '$13$', '$60$'],
      answer: 2,
      solution: 'Compute $5^2 + 12^2 = 25 + 144 = 169$, and $\\sqrt{169} = 13$. The trap $\\sqrt{119}$ comes from subtracting $144 - 25$ — but we subtract only when hunting for a leg. Here we want the hypotenuse, so we add.',
    },
    {
      q: 'A right triangle has hypotenuse $10$ and one leg of length $6$. How long is the other leg?',
      fig: {
        view: [-2.5, -2.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [4, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [4, 3], text: '10', dx: 12, dy: -8 },
        ],
      },
      choices: ['$\\sqrt{136}$', '$8$', '$4$', '$16$'],
      answer: 1,
      solution: 'The hypotenuse is already known, so subtract: $10^2 - 6^2 = 100 - 36 = 64$, and $\\sqrt{64} = 8$. Choosing $\\sqrt{136}$ means the $10$ was treated as a leg — but $10$ is the hypotenuse, the longest side, so the missing leg must come out smaller than $10$. It does: $8 < 10$. ✓',
    },
    {
      q: 'A right triangle has legs $2$ and $3$. What is the exact length of the hypotenuse?',
      fig: {
        view: [-1.5, -1.5, 4.5, 3.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [0, 2]], fill: false },
          { t: 'right', at: [0, 0], from: [3, 0], to: [0, 2] },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1], text: '2', dx: -10, dy: 0 },
          { t: 'label', p: [1.5, 1], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$5$', '$\\sqrt{5}$', '$6$', '$\\sqrt{13}$'],
      answer: 3,
      solution: 'Here $c^2 = 2^2 + 3^2 = 4 + 9 = 13$, so $c = \\sqrt{13}$. That is an exact answer — no perfect square divides $13$, so it cannot be simplified further. The choice $\\sqrt{5}$ comes from subtracting $9 - 4$, and $5$ comes from adding the legs; both mix up the recipe.',
    },
    {
      q: 'A $13$-foot ladder leans against a wall with its foot $5$ feet from the base of the wall. How high up the wall does the ladder reach?',
      fig: {
        view: [-2.5, -2, 8.5, 14.5],
        elems: [
          { t: 'seg', a: [-1.5, 0], b: [7, 0] },
          { t: 'seg', a: [0, 0], b: [0, 13.5] },
          { t: 'seg', a: [5, 0], b: [0, 12] },
          { t: 'right', at: [0, 0], from: [5, 0], to: [0, 12] },
          { t: 'label', p: [2.5, 6], text: '13', dx: 12, dy: -6 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [0, 6], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$18$ feet', '$12$ feet', '$\\sqrt{194}$ feet', '$8$ feet'],
      answer: 1,
      solution: 'The wall, the ground, and the ladder form a right triangle with the ladder as the hypotenuse. The height satisfies $h^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $h = 12$ feet. The ladder itself is the longest side, so the height had to be less than $13$ — a quick sanity check that $\\sqrt{194}$ (from adding) could never pass.',
    },
    {
      q: 'A rectangle is $8$ units long and $6$ units wide. How long is its diagonal?',
      fig: {
        view: [-1.5, -2.5, 10.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 6], [0, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 6], dash: true },
          { t: 'right', at: [8, 0], from: [0, 0], to: [8, 6] },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [8, 3], text: '6', dx: 12, dy: 0 },
          { t: 'label', p: [4, 3], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$14$', '$48$', '$10$', '$2\\sqrt{7}$'],
      answer: 2,
      solution: 'The diagonal cuts the rectangle into two right triangles whose legs are the rectangle\'s sides. So the diagonal is $\\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$. Every rectangle hides a right triangle — the diagonal is always a hypotenuse.',
    },
    {
      q: 'Which of these side lengths forms a right triangle?',
      choices: ['$6$, $8$, $10$', '$4$, $5$, $6$', '$5$, $6$, $8$', '$7$, $9$, $11$'],
      answer: 0,
      solution: 'Test each set against the converse, using the longest side as the candidate hypotenuse. For $6$, $8$, $10$: $36 + 64 = 100 = 10^2$. ✓ The others fail: $16 + 25 = 41 \\ne 36$, $25 + 36 = 61 \\ne 64$, and $49 + 81 = 130 \\ne 121$. Only a perfect match makes a right angle.',
    },
    {
      q: 'A right triangle has hypotenuse $8$ and one leg of length $4$. What is the exact length of the other leg?',
      choices: ['$4$', '$4\\sqrt{5}$', '$6$', '$4\\sqrt{3}$'],
      answer: 3,
      solution: 'Subtract squares: $8^2 - 4^2 = 64 - 16 = 48$, so the leg is $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$. Always simplify: pulling the $16$ out of the radical is the finishing move. The choice $4\\sqrt{5}$ is $\\sqrt{80}$, which comes from adding $64 + 16$ — but the hypotenuse was already given, so we subtract.',
    },
    {
      q: 'Starting from camp, a hiker walks $9$ km east and then $3$ km north. Exactly how far is the hiker from camp?',
      choices: ['$12$ km', '$6\\sqrt{2}$ km', '$3\\sqrt{10}$ km', '$90$ km'],
      answer: 2,
      solution: 'East and north are perpendicular directions, so the two walks are legs of a right triangle and the straight-line distance is the hypotenuse: $\\sqrt{9^2 + 3^2} = \\sqrt{81 + 9} = \\sqrt{90} = \\sqrt{9 \\times 10} = 3\\sqrt{10}$ km, a bit under $9.5$ km. The answer $90$ forgets the final square root, and $12$ just adds the two walks — that would be the walking distance, not the straight-line distance.',
    },
    {
      q: 'The legs of a right triangle are $x$ and $x + 2$, and the hypotenuse is $10$. What is the length of the shorter leg?',
      fig: {
        view: [-3, -2.5, 10.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [4, 0], text: 'x + 2', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3], text: 'x', dx: -10, dy: 0 },
          { t: 'label', p: [4, 3], text: '10', dx: 12, dy: -8 },
        ],
      },
      choices: ['$4$', '$6$', '$8$', '$5$'],
      answer: 1,
      solution: 'Set up the theorem: $x^2 + (x+2)^2 = 100$, so $2x^2 + 4x + 4 = 100$, which simplifies to $x^2 + 2x - 48 = 0$. Factor: $(x + 8)(x - 6) = 0$, and since a length must be positive, $x = 6$. The legs are $6$ and $8$ — and indeed $6^2 + 8^2 = 100$. ✓ The choice $8$ is the longer leg, so read carefully which one is asked for.',
    },
  ],
}

const s62 = {
  id: '6.2',
  title: 'Two Special Right Triangles',
  learn: {
    concepts: [
      {
        heading: 'The 45-45-90 triangle: half a square',
        body: 'Cut a square along its diagonal and you get two triangles with angles $45^\\circ$, $45^\\circ$, $90^\\circ$. Because two angles are equal, the two legs are equal, and the Pythagorean Theorem gives the hypotenuse: $\\sqrt{\\ell^2 + \\ell^2} = \\ell\\sqrt{2}$. One rule covers everything: hypotenuse $=$ leg $\\cdot \\sqrt{2}$.',
      },
      {
        heading: 'The 30-60-90 triangle: half an equilateral triangle',
        body: 'Drop an altitude in an equilateral triangle and each half is a $30$-$60$-$90$ triangle. Its sides come in the fixed ratio $1 : \\sqrt{3} : 2$. The shortest side sits opposite the $30^\\circ$ angle, the $\\sqrt{3}$ side sits opposite the $60^\\circ$ angle, and the hypotenuse (the $2$) is opposite the right angle — always exactly double the short leg.',
      },
      {
        heading: 'Work through the short leg',
        body: 'In a $30$-$60$-$90$ triangle, make the short leg your home base. Given the hypotenuse, halve it to get the short leg. Given the long leg, divide by $\\sqrt{3}$ (multiply top and bottom by $\\sqrt{3}$ to tidy up: $\\frac{9}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}$). Once you hold the short leg, the other two sides are just a $\\times\\sqrt{3}$ and a $\\times 2$ away.',
      },
      {
        heading: 'Where these triangles hide',
        body: 'Any square\'s diagonal creates $45$-$45$-$90$ triangles, so a square of side $s$ has diagonal $s\\sqrt{2}$. Any equilateral triangle\'s altitude creates $30$-$60$-$90$ triangles, so an equilateral triangle of side $s$ has altitude $\\frac{s}{2}\\sqrt{3}$. Spotting these hidden triangles lets you skip the Pythagorean computation entirely.',
      },
    ],
    examples: [
      {
        problem: 'An isosceles right triangle has legs of length $6$. Find the hypotenuse.',
        steps: [
          'An isosceles right triangle is exactly a $45$-$45$-$90$ triangle, so the hypotenuse is leg $\\cdot \\sqrt{2}$.',
          'That gives $6\\sqrt{2}$ right away.',
          'Check with Pythagoras: $\\sqrt{36 + 36} = \\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$. ✓',
        ],
        answer: 'The hypotenuse is $6\\sqrt{2}$',
        fig: {
          view: [-2, -2.5, 8, 7.8],
          elems: [
            { t: 'poly', pts: [[0, 0], [6, 0], [0, 6]], fill: false },
            { t: 'right', at: [0, 0], from: [6, 0], to: [0, 6] },
            { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
            { t: 'tick', a: [0, 0], b: [0, 6], n: 1 },
            { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
            { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
            { t: 'label', p: [3, 3], text: '?', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: 'A $30$-$60$-$90$ triangle has hypotenuse $10$. Find both legs.',
        steps: [
          'Start at home base: the short leg is half the hypotenuse, so it is $10 \\div 2 = 5$. That side faces the $30^\\circ$ angle.',
          'The long leg is the short leg times $\\sqrt{3}$: $5\\sqrt{3}$. That side faces the $60^\\circ$ angle.',
          'Check: $5^2 + (5\\sqrt{3})^2 = 25 + 75 = 100 = 10^2$. ✓',
        ],
        answer: 'The legs are $5$ and $5\\sqrt{3}$',
        fig: {
          view: [-2, -2.5, 11, 7],
          elems: [
            { t: 'poly', pts: [[0, 0], [8.66, 0], [0, 5]], fill: false },
            { t: 'right', at: [0, 0], from: [8.66, 0], to: [0, 5] },
            { t: 'angle', at: [8.66, 0], from: [0, 0], to: [0, 5], r: 1.6, label: '30' },
            { t: 'label', p: [4.33, 2.5], text: '10', dx: 10, dy: -8 },
            { t: 'label', p: [4.33, 0], text: '?', dx: 0, dy: 14 },
            { t: 'label', p: [0, 2.5], text: '?', dx: -10, dy: 0 },
          ],
        },
      },
      {
        problem: 'Find the altitude of an equilateral triangle with side length $8$.',
        steps: [
          'The altitude splits the equilateral triangle into two $30$-$60$-$90$ triangles. In each one, the hypotenuse is a full side, $8$, and the short leg is half the base, $4$.',
          'The altitude is the long leg — the short leg times $\\sqrt{3}$.',
          'So the altitude is $4\\sqrt{3}$, which is about $6.93$.',
        ],
        answer: 'The altitude is $4\\sqrt{3}$',
        fig: {
          view: [-1.5, -2.5, 9.5, 9],
          elems: [
            { t: 'poly', pts: [[0, 0], [8, 0], [4, 6.93]], fill: false },
            { t: 'seg', a: [4, 6.93], b: [4, 0], dash: true },
            { t: 'right', at: [4, 0], from: [8, 0], to: [4, 6.93] },
            { t: 'label', p: [2, 3.46], text: '8', dx: -12, dy: -6 },
            { t: 'label', p: [6, 3.46], text: '8', dx: 12, dy: -6 },
            { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
            { t: 'label', p: [6, 0], text: '4', dx: 0, dy: 14 },
            { t: 'label', p: [4, 3.46], text: '?', dx: -10, dy: 0 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'A $45$-$45$-$90$ triangle has legs of length $7$. What is the hypotenuse?',
      fig: {
        view: [-2, -2.5, 9, 8.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 7] },
          { t: 'tick', a: [0, 0], b: [7, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 7], n: 1 },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3.5], text: '7', dx: -10, dy: 0 },
          { t: 'label', p: [3.5, 3.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$14$', '$7\\sqrt{3}$', '$7\\sqrt{2}$', '$\\frac{7\\sqrt{2}}{2}$'],
      answer: 2,
      solution: 'In a $45$-$45$-$90$ triangle the hypotenuse is always leg $\\cdot \\sqrt{2}$, so it is $7\\sqrt{2} \\approx 9.9$. Doubling to get $14$ is the $30$-$60$-$90$ rule sneaking in where it does not belong — the two triangles have different multipliers, so keep them straight.',
    },
    {
      q: 'The short leg of a $30$-$60$-$90$ triangle (the side opposite the $30^\\circ$ angle) is $3$. What is the hypotenuse?',
      fig: {
        view: [-2, -2.5, 7.2, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.2, 0], [0, 3]], fill: false },
          { t: 'right', at: [0, 0], from: [5.2, 0], to: [0, 3] },
          { t: 'angle', at: [5.2, 0], from: [0, 0], to: [0, 3], r: 1.2, label: '30' },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [2.6, 1.5], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$6$', '$3\\sqrt{3}$', '$3\\sqrt{2}$', '$9$'],
      answer: 0,
      solution: 'The hypotenuse of a $30$-$60$-$90$ triangle is exactly double the short leg: $2 \\times 3 = 6$. The value $3\\sqrt{3}$ is the long leg — the side opposite $60^\\circ$ — not the hypotenuse. In the $1 : \\sqrt{3} : 2$ ratio, the hypotenuse is the $2$.',
    },
    {
      q: 'A square has side length $5$. How long is its diagonal?',
      fig: {
        view: [-1.5, -2.5, 7, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [5, 5], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [5, 5], dash: true },
          { t: 'right', at: [5, 0], from: [0, 0], to: [5, 5] },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [5, 2.5], text: '5', dx: 12, dy: 0 },
          { t: 'label', p: [2.5, 2.5], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$10$', '$5$', '$5\\sqrt{3}$', '$5\\sqrt{2}$'],
      answer: 3,
      solution: 'The diagonal splits the square into two $45$-$45$-$90$ triangles with legs $5$, so the diagonal is $5\\sqrt{2} \\approx 7.07$. Every square diagonal follows this pattern: side times $\\sqrt{2}$. The $\\sqrt{3}$ multiplier belongs to the $30$-$60$-$90$ family, not to squares.',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has hypotenuse $12$. What is the length of the longer leg?',
      fig: {
        view: [-2, -2.8, 13, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [10.39, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [10.39, 0], to: [0, 6] },
          { t: 'angle', at: [10.39, 0], from: [0, 0], to: [0, 6], r: 2, label: '30' },
          { t: 'label', p: [5.2, 3], text: '12', dx: 10, dy: -8 },
          { t: 'label', p: [5.2, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$6$', '$6\\sqrt{3}$', '$4\\sqrt{3}$', '$12\\sqrt{3}$'],
      answer: 1,
      solution: 'Go through home base: the short leg is half the hypotenuse, $12 \\div 2 = 6$. The long leg is the short leg times $\\sqrt{3}$, giving $6\\sqrt{3} \\approx 10.4$. Choosing just $6$ stops one step early — that is the short leg. And $12\\sqrt{3}$ multiplies the hypotenuse by $\\sqrt{3}$, skipping the halving step.',
    },
    {
      q: 'A $45$-$45$-$90$ triangle has hypotenuse $10$. What is the length of each leg?',
      fig: {
        view: [-2, -2.5, 9, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [7.07, 0], [0, 7.07]], fill: false },
          { t: 'right', at: [0, 0], from: [7.07, 0], to: [0, 7.07] },
          { t: 'tick', a: [0, 0], b: [7.07, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 7.07], n: 1 },
          { t: 'label', p: [3.54, 3.54], text: '10', dx: 12, dy: -8 },
          { t: 'label', p: [3.54, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$5\\sqrt{2}$', '$5$', '$10\\sqrt{2}$', '$5\\sqrt{3}$'],
      answer: 0,
      solution: 'Going backward means dividing by $\\sqrt{2}$: each leg is $\\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2} \\approx 7.07$. Check: $(5\\sqrt{2})\\sqrt{2} = 5 \\cdot 2 = 10$. ✓ The choice $10\\sqrt{2}$ multiplies instead of divides — but legs must be shorter than the hypotenuse, and $10\\sqrt{2} > 10$.',
    },
    {
      q: 'What is the length of the altitude of an equilateral triangle with side length $10$?',
      fig: {
        view: [-1.5, -2.5, 11.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [5, 8.66]], fill: false },
          { t: 'seg', a: [5, 8.66], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [10, 0], to: [5, 8.66] },
          { t: 'label', p: [2.5, 4.33], text: '10', dx: -12, dy: -6 },
          { t: 'label', p: [7.5, 4.33], text: '10', dx: 12, dy: -6 },
          { t: 'label', p: [5, 4.33], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$5$', '$10\\sqrt{3}$', '$5\\sqrt{3}$', '$5\\sqrt{2}$'],
      answer: 2,
      solution: 'The altitude creates a $30$-$60$-$90$ triangle with hypotenuse $10$ (a full side) and short leg $5$ (half the base). The altitude is the long leg: $5\\sqrt{3} \\approx 8.66$. Remember the shortcut: an equilateral triangle of side $s$ has altitude $\\frac{s}{2}\\sqrt{3}$.',
    },
    {
      q: 'The longer leg of a $30$-$60$-$90$ triangle is $9$. What is the hypotenuse?',
      fig: {
        view: [-2, -2.5, 11, 6.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [0, 5.2]], fill: false },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 5.2] },
          { t: 'angle', at: [9, 0], from: [0, 0], to: [0, 5.2], r: 1.8, label: '30' },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [4.5, 2.6], text: '?', dx: 10, dy: -8 },
        ],
      },
      choices: ['$18$', '$3\\sqrt{3}$', '$9\\sqrt{3}$', '$6\\sqrt{3}$'],
      answer: 3,
      solution: 'First find the short leg: $\\frac{9}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}$. Then double it for the hypotenuse: $6\\sqrt{3} \\approx 10.4$. The tempting $18$ doubles the long leg, but the doubling rule connects the hypotenuse to the SHORT leg only. And $3\\sqrt{3}$ is the short leg itself — one step from the finish line.',
    },
    {
      q: 'An isosceles right triangle has hypotenuse $8$. What is its area?',
      choices: ['$32$', '$16$', '$8\\sqrt{2}$', '$64$'],
      answer: 1,
      solution: 'Each leg is $\\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$. The legs are perpendicular, so they serve as base and height: area $= \\frac{1}{2}(4\\sqrt{2})(4\\sqrt{2}) = \\frac{1}{2}(32) = 16$. Forgetting the $\\frac{1}{2}$ gives $32$. A slick alternative: any isosceles right triangle has area $\\frac{c^2}{4}$ where $c$ is the hypotenuse, and $\\frac{64}{4} = 16$. ✓',
    },
    {
      q: 'A $45$-$45$-$90$ triangle has legs of length $4$. What is its perimeter?',
      choices: ['$12$', '$8\\sqrt{2}$', '$8 + 4\\sqrt{2}$', '$4 + 8\\sqrt{2}$'],
      answer: 2,
      solution: 'The two legs contribute $4 + 4 = 8$, and the hypotenuse is $4\\sqrt{2}$. Total: $8 + 4\\sqrt{2} \\approx 13.7$. The mixed-up choice $4 + 8\\sqrt{2}$ swaps which sides get the $\\sqrt{2}$ — but only the single hypotenuse carries it, and there are two plain legs.',
    },
    {
      q: 'The altitude of an equilateral triangle is $6$. What is the side length of the triangle?',
      fig: {
        view: [-1.5, -2.5, 8.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [6.93, 0], [3.46, 6]], fill: false },
          { t: 'seg', a: [3.46, 6], b: [3.46, 0], dash: true },
          { t: 'right', at: [3.46, 0], from: [6.93, 0], to: [3.46, 6] },
          { t: 'tick', a: [0, 0], b: [3.46, 6], n: 1 },
          { t: 'tick', a: [6.93, 0], b: [3.46, 6], n: 1 },
          { t: 'tick', a: [0, 0], b: [6.93, 0], n: 1 },
          { t: 'label', p: [3.46, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [5.2, 3], text: '?', dx: 14, dy: -6 },
        ],
      },
      choices: ['$4\\sqrt{3}$', '$12$', '$3\\sqrt{3}$', '$6\\sqrt{3}$'],
      answer: 0,
      solution: 'The altitude is the long leg of a $30$-$60$-$90$ triangle, so the short leg (half the side) is $\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$, and the full side is twice that: $4\\sqrt{3} \\approx 6.93$. Sanity check: the altitude of a triangle with side $4\\sqrt{3}$ is $\\frac{4\\sqrt{3}}{2}\\cdot\\sqrt{3} = 2\\sqrt{3}\\cdot\\sqrt{3} = 6$. ✓',
    },
  ],
}

const s63 = {
  id: '6.3',
  title: 'Pythagorean Triples',
  learn: {
    concepts: [
      {
        heading: 'Whole-number right triangles',
        body: 'A Pythagorean triple is a set of three whole numbers satisfying $a^2 + b^2 = c^2$. Four famous families are worth memorizing: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and $7$-$24$-$25$. Spot one of these in a problem and the answer appears with no squaring at all.',
      },
      {
        heading: 'Scaling makes new triples',
        body: 'Multiply every side of a right triangle by the same number and it stays right — the new triangle is similar to the old one. So $3$-$4$-$5$ spawns $6$-$8$-$10$, $9$-$12$-$15$, $30$-$40$-$50$, and infinitely many cousins. Algebra agrees: if $a^2 + b^2 = c^2$, then $(ka)^2 + (kb)^2 = k^2(a^2 + b^2) = (kc)^2$.',
      },
      {
        heading: 'Spotting hidden triples',
        body: 'Given two sides like $45$ and $75$, hunt for a common factor: both are $15$ times something — $15 \\times 3$ and $15 \\times 5$. That is the $3$-$4$-$5$ family in disguise, so the missing side is $15 \\times 4 = 60$. Factor out, match a family, scale back. This beats squaring $75$ any day.',
      },
      {
        heading: 'Read carefully: leg or hypotenuse?',
        body: 'Knowing sides $8$ and $17$ is not enough — you must know their roles. If they are the two legs, the hypotenuse is $\\sqrt{64 + 289} = \\sqrt{353}$, which is not a whole number. If $17$ is the hypotenuse, the missing leg is $15$, from the $8$-$15$-$17$ triple. A triple only applies when the largest number plays the hypotenuse.',
      },
    ],
    examples: [
      {
        problem: 'A right triangle has legs $30$ and $40$. Find the hypotenuse without squaring anything big.',
        steps: [
          'Both legs are $10$ times something small: $30 = 10 \\times 3$ and $40 = 10 \\times 4$.',
          'That is the $3$-$4$-$5$ triple scaled by $10$, so the hypotenuse is $10 \\times 5 = 50$.',
          'Quick check: $900 + 1600 = 2500 = 50^2$. ✓',
        ],
        answer: 'The hypotenuse is $50$',
        fig: {
          view: [-5, -6, 45, 34],
          elems: [
            { t: 'poly', pts: [[0, 0], [40, 0], [0, 30]], fill: false },
            { t: 'right', at: [0, 0], from: [40, 0], to: [0, 30] },
            { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
            { t: 'label', p: [0, 15], text: '30', dx: -12, dy: 0 },
            { t: 'label', p: [20, 15], text: '?', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: 'A right triangle has one leg $10$ and hypotenuse $26$. Find the other leg the fast way.',
        steps: [
          'Factor out the common $2$: the pair $10$ and $26$ is $2 \\times 5$ and $2 \\times 13$.',
          'A leg of $5$ with a hypotenuse of $13$ belongs to the $5$-$12$-$13$ family, so the missing leg is $2 \\times 12 = 24$.',
          'Check: $10^2 + 24^2 = 100 + 576 = 676 = 26^2$. ✓',
        ],
        answer: 'The other leg is $24$',
        fig: {
          view: [-4, -4, 28, 13],
          elems: [
            { t: 'poly', pts: [[0, 0], [24, 0], [0, 10]], fill: false },
            { t: 'right', at: [0, 0], from: [24, 0], to: [0, 10] },
            { t: 'label', p: [12, 0], text: '?', dx: 0, dy: 14 },
            { t: 'label', p: [0, 5], text: '10', dx: -12, dy: 0 },
            { t: 'label', p: [12, 5], text: '26', dx: 12, dy: -8 },
          ],
        },
      },
      {
        problem: 'Do the sides $20$, $21$, $29$ form a right triangle?',
        steps: [
          'These do not match a scaled version of our four famous families, so fall back on the converse test with the longest side as hypotenuse.',
          'Compute: $20^2 + 21^2 = 400 + 441 = 841$, and $29^2 = 841$.',
          'They match, so yes — this is a right triangle. In fact $20$-$21$-$29$ is a genuine Pythagorean triple; the famous four are just the most common, not the only ones.',
        ],
        answer: 'Yes — $400 + 441 = 841 = 29^2$, so it is a right triangle',
      },
    ],
  },
  problems: [
    {
      q: 'A right triangle has legs $9$ and $12$. Use a Pythagorean triple to find the hypotenuse.',
      fig: {
        view: [-3, -3, 14, 11],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [0, 9]], fill: false },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 9] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4.5], text: '9', dx: -10, dy: 0 },
          { t: 'label', p: [6, 4.5], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$21$', '$15$', '$13$', '$17$'],
      answer: 1,
      solution: 'Both legs are multiples of $3$: $9 = 3 \\times 3$ and $12 = 3 \\times 4$. That is the $3$-$4$-$5$ family scaled by $3$, so the hypotenuse is $3 \\times 5 = 15$. The choices $13$ and $17$ come from other famous triples — but those families need different legs.',
    },
    {
      q: 'A right triangle has one leg $8$ and hypotenuse $17$. What is the other leg?',
      fig: {
        view: [-3, -3, 17, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [15, 0], to: [0, 8] },
          { t: 'label', p: [7.5, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 4], text: '8', dx: -10, dy: 0 },
          { t: 'label', p: [7.5, 4], text: '17', dx: 12, dy: -8 },
        ],
      },
      choices: ['$9$', '$25$', '$13$', '$15$'],
      answer: 3,
      solution: 'A leg of $8$ with a hypotenuse of $17$ is the $8$-$15$-$17$ triple, so the other leg is $15$. Confirm: $64 + 225 = 289 = 17^2$. ✓ The choice $9$ is just $17 - 8$, but the Pythagorean Theorem never works by simple subtraction of sides.',
    },
    {
      q: 'A right triangle has legs $14$ and $48$. What is the hypotenuse?',
      fig: {
        view: [-5, -6, 54, 19],
        elems: [
          { t: 'poly', pts: [[0, 0], [48, 0], [0, 14]], fill: false },
          { t: 'right', at: [0, 0], from: [48, 0], to: [0, 14] },
          { t: 'label', p: [24, 0], text: '48', dx: 0, dy: 14 },
          { t: 'label', p: [0, 7], text: '14', dx: -12, dy: 0 },
          { t: 'label', p: [24, 7], text: '?', dx: 12, dy: -8 },
        ],
      },
      choices: ['$50$', '$62$', '$46$', '$34$'],
      answer: 0,
      solution: 'Halve both legs: $7$ and $24$ — the $7$-$24$-$25$ triple! Scale back up by $2$: the hypotenuse is $2 \\times 25 = 50$. Check: $196 + 2304 = 2500 = 50^2$. ✓ Recognizing the family turned big squares into one quick doubling.',
    },
    {
      q: 'Which of these side lengths does NOT form a right triangle?',
      choices: ['$9$, $12$, $15$', '$10$, $24$, $26$', '$7$, $10$, $12$', '$8$, $15$, $17$'],
      answer: 2,
      solution: 'Three of the sets are triples: $9$-$12$-$15$ is $3 \\times (3$-$4$-$5)$, $10$-$24$-$26$ is $2 \\times (5$-$12$-$13)$, and $8$-$15$-$17$ is famous on its own. For $7$, $10$, $12$: $49 + 100 = 149$, but $12^2 = 144$ — no match, so no right angle.',
    },
    {
      q: 'A right triangle has one leg $45$ and hypotenuse $75$. What is the other leg?',
      fig: {
        view: [-7, -8, 67, 52],
        elems: [
          { t: 'poly', pts: [[0, 0], [60, 0], [0, 45]], fill: false },
          { t: 'right', at: [0, 0], from: [60, 0], to: [0, 45] },
          { t: 'label', p: [30, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 22.5], text: '45', dx: -14, dy: 0 },
          { t: 'label', p: [30, 22.5], text: '75', dx: 14, dy: -8 },
        ],
      },
      choices: ['$30$', '$65$', '$55$', '$60$'],
      answer: 3,
      solution: 'Factor out $15$: the sides are $15 \\times 3$ and $15 \\times 5$, and in the $3$-$4$-$5$ family the $5$ is the hypotenuse — exactly the roles here. The missing leg is $15 \\times 4 = 60$. The choice $30$ is $75 - 45$, tempting but not how right triangles work.',
    },
    {
      q: 'A right triangle has one leg $24$ and hypotenuse $25$. What is the other leg?',
      fig: {
        view: [-3, -4, 28, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 7]], fill: false },
          { t: 'right', at: [0, 0], from: [24, 0], to: [0, 7] },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3.5], text: '?', dx: -10, dy: 0 },
          { t: 'label', p: [12, 3.5], text: '25', dx: 12, dy: -8 },
        ],
      },
      choices: ['$7$', '$1$', '$49$', '$17$'],
      answer: 0,
      solution: 'A leg of $24$ under a hypotenuse of $25$ is the $7$-$24$-$25$ triple, so the missing leg is $7$. Check: $49 + 576 = 625 = 25^2$. ✓ It is striking how short that third side is — the triangle is long and thin, but perfectly right-angled.',
    },
    {
      q: 'The sides of a right triangle are a multiple of the $5$-$12$-$13$ triple, and its hypotenuse is $65$. What is the length of the shorter leg?',
      fig: {
        view: [-7, -8, 67, 32],
        elems: [
          { t: 'poly', pts: [[0, 0], [60, 0], [0, 25]], fill: false },
          { t: 'right', at: [0, 0], from: [60, 0], to: [0, 25] },
          { t: 'label', p: [30, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12.5], text: '?', dx: -12, dy: 0 },
          { t: 'label', p: [30, 12.5], text: '65', dx: 14, dy: -8 },
        ],
      },
      choices: ['$60$', '$13$', '$25$', '$20$'],
      answer: 2,
      solution: 'The hypotenuse of the family is $13$, and $65 = 5 \\times 13$, so every side is scaled by $5$. The legs are $5 \\times 5 = 25$ and $5 \\times 12 = 60$, and the shorter one is $25$. Verify: $625 + 3600 = 4225 = 65^2$. ✓',
    },
    {
      q: 'A ship sails $16$ km east and then $30$ km north. How far is it from its starting point?',
      fig: {
        view: [-4, -5, 22, 34],
        elems: [
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [16, 0], b: [16, 30] },
          { t: 'seg', a: [0, 0], b: [16, 30], dash: true },
          { t: 'right', at: [16, 0], from: [0, 0], to: [16, 30] },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 12 },
          { t: 'point', p: [16, 30], label: 'F', dx: 10, dy: -8 },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'label', p: [16, 15], text: '30', dx: 14, dy: 0 },
          { t: 'label', p: [8, 15], text: '?', dx: -12, dy: -6 },
        ],
      },
      choices: ['$46$ km', '$34$ km', '$26$ km', '$38$ km'],
      answer: 1,
      solution: 'East then north makes a right angle, so the direct distance is a hypotenuse. Halve the legs: $8$ and $15$ — the $8$-$15$-$17$ triple — so the distance is $2 \\times 17 = 34$ km. The answer $46$ is the total sailing distance, not the straight-line distance back to the start.',
    },
    {
      q: 'The sides $20$, $48$, $52$ form a right triangle. Which triple family do they belong to?',
      choices: ['$3$-$4$-$5$', '$8$-$15$-$17$', '$7$-$24$-$25$', '$5$-$12$-$13$'],
      answer: 3,
      solution: 'Hunt for the common factor: all three sides are divisible by $4$, and $20 \\div 4 = 5$, $48 \\div 4 = 12$, $52 \\div 4 = 13$. That is $5$-$12$-$13$ scaled by $4$. Factoring out the greatest common factor is the quickest way to unmask a scaled triple.',
    },
    {
      q: 'A right triangle has whole-number sides. One leg is $12$, and the hypotenuse is $2$ more than the other leg. What is the hypotenuse?',
      choices: ['$35$', '$37$', '$13$', '$40$'],
      answer: 1,
      solution: 'Call the other leg $b$, so the hypotenuse is $b + 2$. Then $12^2 + b^2 = (b+2)^2 = b^2 + 4b + 4$, so $144 = 4b + 4$ and $b = 35$. The hypotenuse is $37$. This uncovers a less famous triple: $12$-$35$-$37$, since $144 + 1225 = 1369 = 37^2$. ✓ The choice $35$ is the other leg — the question asks for the hypotenuse.',
    },
  ],
}

const s64 = {
  id: '6.4',
  title: 'Congruence and Similarity Revisited',
  learn: {
    concepts: [
      {
        heading: 'HL: a congruence rule just for right triangles',
        body: 'In general, knowing two sides and a non-included angle (SSA) is NOT enough to pin down a triangle. But when that angle is a right angle, it is enough! If two right triangles share a hypotenuse length and one leg length, they are congruent — this is the Hypotenuse-Leg (HL) rule.',
      },
      {
        heading: 'Why HL works',
        body: 'The Pythagorean Theorem is doing the heavy lifting. If both triangles have hypotenuse $c$ and a leg $a$, then each remaining leg must equal $\\sqrt{c^2 - a^2}$ — the same number for both. So all three sides match, and the triangles are congruent by SSS. The right angle leaves the third side no freedom at all.',
      },
      {
        heading: 'Similar right triangles: one angle comes free',
        body: 'Two right triangles already share their $90^\\circ$ angles. So a single matching acute angle gives AA similarity. A right triangle with a $35^\\circ$ angle is similar to every other right triangle containing a $35^\\circ$ angle — or a $55^\\circ$ one, since $90^\\circ - 35^\\circ = 55^\\circ$ is the other acute angle.',
      },
      {
        heading: 'The altitude to the hypotenuse: three similar triangles',
        body: 'Drop an altitude from the right angle to the hypotenuse. It slices the triangle into two smaller right triangles, and all three triangles — small, medium, and original — are similar to one another (each pair shares an acute angle). Matching sides gives two power tools: the altitude satisfies $h^2 = pq$ where $p$ and $q$ are the two pieces of the hypotenuse, and each leg satisfies $\\text{leg}^2 = (\\text{adjacent piece}) \\times (\\text{whole hypotenuse})$.',
      },
    ],
    examples: [
      {
        problem: 'Right triangles $ABC$ and $DEF$ have right angles at $C$ and $F$, with $AB = DE = 13$ and $BC = EF = 5$. Show the triangles are congruent and find $AC$.',
        steps: [
          'Each triangle has hypotenuse $13$ and a leg $5$, so HL applies: the triangles are congruent.',
          'To see why, compute the third side of each: $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.',
          'Both remaining legs are forced to be $12$ — the triangles match side for side. So $AC = 12$.',
        ],
        answer: 'The triangles are congruent by HL, and $AC = 12$',
        fig: {
          view: [-2, -3, 30, 8],
          elems: [
            { t: 'poly', pts: [[0, 0], [12, 0], [0, 5]], fill: false },
            { t: 'right', at: [0, 0], from: [12, 0], to: [0, 5] },
            { t: 'point', p: [0, 5], label: 'B', dx: 0, dy: -10 },
            { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 12 },
            { t: 'point', p: [12, 0], label: 'A', dx: 10, dy: 12 },
            { t: 'label', p: [6, 2.5], text: '13', dx: 10, dy: -8 },
            { t: 'label', p: [0, 2.5], text: '5', dx: -10, dy: 0 },
            { t: 'poly', pts: [[16, 0], [28, 0], [16, 5]], fill: false },
            { t: 'right', at: [16, 0], from: [28, 0], to: [16, 5] },
            { t: 'point', p: [16, 5], label: 'E', dx: 0, dy: -10 },
            { t: 'point', p: [16, 0], label: 'F', dx: -10, dy: 12 },
            { t: 'point', p: [28, 0], label: 'D', dx: 10, dy: 12 },
            { t: 'label', p: [22, 2.5], text: '13', dx: 10, dy: -8 },
            { t: 'label', p: [16, 2.5], text: '5', dx: -10, dy: 0 },
          ],
        },
      },
      {
        problem: 'A right triangle has legs $6$ and $8$. Find the length of the altitude drawn to the hypotenuse.',
        steps: [
          'First find the hypotenuse: $6$-$8$-$10$, a scaled $3$-$4$-$5$ triple.',
          'Compute the area two ways. Using the legs: area $= \\frac{1}{2}(6)(8) = 24$.',
          'Using the hypotenuse as the base: $24 = \\frac{1}{2}(10)(h)$, so $h = \\frac{48}{10} = 4.8$.',
        ],
        answer: 'The altitude to the hypotenuse is $4.8$',
        fig: {
          view: [-1.5, -2.5, 11.5, 6.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [10, 0], [3.6, 4.8]], fill: false },
            { t: 'seg', a: [3.6, 4.8], b: [3.6, 0], dash: true },
            { t: 'right', at: [3.6, 4.8], from: [0, 0], to: [10, 0] },
            { t: 'right', at: [3.6, 0], from: [10, 0], to: [3.6, 4.8] },
            { t: 'label', p: [1.8, 2.4], text: '6', dx: -10, dy: -6 },
            { t: 'label', p: [6.8, 2.4], text: '8', dx: 12, dy: -6 },
            { t: 'label', p: [5, 0], text: '10', dx: 14, dy: 14 },
            { t: 'label', p: [3.6, 2.4], text: '?', dx: 10, dy: 4 },
          ],
        },
      },
      {
        problem: 'The altitude to the hypotenuse of a right triangle divides the hypotenuse into pieces of length $4$ and $9$. How long is the altitude?',
        steps: [
          'The altitude creates two smaller triangles similar to each other, and matching their sides gives $\\frac{4}{h} = \\frac{h}{9}$.',
          'Cross-multiply: $h^2 = 4 \\times 9 = 36$.',
          'So $h = 6$. The altitude is the geometric mean of the two hypotenuse pieces.',
        ],
        answer: 'The altitude is $6$',
        fig: {
          view: [-1.5, -2.5, 15, 8],
          elems: [
            { t: 'poly', pts: [[0, 0], [13, 0], [4, 6]], fill: false },
            { t: 'seg', a: [4, 6], b: [4, 0], dash: true },
            { t: 'right', at: [4, 6], from: [0, 0], to: [13, 0] },
            { t: 'right', at: [4, 0], from: [13, 0], to: [4, 6] },
            { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
            { t: 'label', p: [8.5, 0], text: '9', dx: 0, dy: 14 },
            { t: 'label', p: [4, 3], text: '?', dx: 10, dy: 0 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'Knowing two sides and a non-included angle (SSA) usually fails to guarantee congruence — yet HL works. Why?',
      choices: [
        'Because any two right triangles with a shared angle are congruent',
        'Because the hypotenuse is always the longest side, so it can only match one way',
        'Because the Pythagorean Theorem forces the third side to match too',
        'Because all right triangles are similar to each other',
      ],
      answer: 2,
      solution: 'With hypotenuse $c$ and leg $a$ fixed, the remaining leg has no choice: it must be $\\sqrt{c^2 - a^2}$ in both triangles. All three sides then agree, so the triangles are congruent by SSS. In general SSA leaves two possible triangles, but the right angle closes off the second possibility.',
    },
    {
      q: 'Two right triangles each have hypotenuse $10$ and a leg of length $6$, so they are congruent by HL. What is the third side of each triangle?',
      fig: {
        view: [-2, -3, 21, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'tick', a: [8, 0], b: [0, 6], n: 1 },
          { t: 'tick', a: [0, 0], b: [0, 6], n: 2 },
          { t: 'label', p: [4, 3], text: '10', dx: 10, dy: -8 },
          { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [4, 0], text: '?', dx: 0, dy: 14 },
          { t: 'poly', pts: [[11, 0], [19, 0], [11, 6]], fill: false },
          { t: 'right', at: [11, 0], from: [19, 0], to: [11, 6] },
          { t: 'tick', a: [19, 0], b: [11, 6], n: 1 },
          { t: 'tick', a: [11, 0], b: [11, 6], n: 2 },
          { t: 'label', p: [15, 3], text: '10', dx: 10, dy: -8 },
          { t: 'label', p: [11, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [15, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$8$', '$4$', '$2\\sqrt{34}$', '$16$'],
      answer: 0,
      solution: 'The third side is $\\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ — the $6$-$8$-$10$ triple again. This computation IS the reason HL works: both triangles are forced to have the same third side, namely $8$.',
    },
    {
      q: 'The altitude to the hypotenuse splits a right triangle into two smaller triangles. Which statement describes them?',
      choices: [
        'They are congruent to each other',
        'They are similar to the whole triangle and to each other',
        'They are similar to each other but not to the whole triangle',
        'They are both isosceles',
      ],
      answer: 1,
      solution: 'Each small triangle shares an acute angle with the original triangle and has its own right angle, so each is similar to the original by AA — and therefore to each other as well. They are almost never congruent, though: unless the big triangle is isosceles, one piece is larger than the other.',
    },
    {
      q: 'A right triangle has legs $3$ and $4$. How long is the altitude drawn to the hypotenuse?',
      fig: {
        view: [-1, -2.5, 6.5, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [1.8, 2.4]], fill: false },
          { t: 'seg', a: [1.8, 2.4], b: [1.8, 0], dash: true },
          { t: 'right', at: [1.8, 2.4], from: [0, 0], to: [5, 0] },
          { t: 'right', at: [1.8, 0], from: [5, 0], to: [1.8, 2.4] },
          { t: 'label', p: [0.9, 1.2], text: '3', dx: -10, dy: -6 },
          { t: 'label', p: [3.4, 1.2], text: '4', dx: 10, dy: -6 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 12, dy: 14 },
          { t: 'label', p: [1.8, 1.2], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$2$', '$2.5$', '$3.5$', '$2.4$'],
      answer: 3,
      solution: 'The hypotenuse is $5$ (the $3$-$4$-$5$ triple). The area is $\\frac{1}{2}(3)(4) = 6$, and viewing the hypotenuse as the base, $6 = \\frac{1}{2}(5)(h)$, so $h = \\frac{12}{5} = 2.4$. The altitude to the hypotenuse is always $\\frac{\\text{leg} \\times \\text{leg}}{\\text{hypotenuse}}$ — the area computed two ways in one formula.',
    },
    {
      q: 'The altitude to the hypotenuse divides the hypotenuse into pieces of length $2$ and $8$. How long is the altitude?',
      fig: {
        view: [-1.5, -2.5, 12, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [2, 4]], fill: false },
          { t: 'seg', a: [2, 4], b: [2, 0], dash: true },
          { t: 'right', at: [2, 4], from: [0, 0], to: [10, 0] },
          { t: 'right', at: [2, 0], from: [10, 0], to: [2, 4] },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [6, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [2, 2], text: '?', dx: 10, dy: 0 },
        ],
      },
      choices: ['$4$', '$5$', '$16$', '$6$'],
      answer: 0,
      solution: 'The altitude is the geometric mean of the two pieces: $h^2 = 2 \\times 8 = 16$, so $h = 4$. The choice $5$ is the average of $2$ and $8$ — the arithmetic mean — but the similar-triangle relationship demands the geometric mean, $\\sqrt{2 \\times 8}$.',
    },
    {
      q: 'In right triangle $ABC$, the altitude from the right angle at $C$ meets hypotenuse $\\overline{AB}$ at $D$, with $AD = 4$ and $AB = 16$. Find the leg $AC$.',
      fig: {
        view: [-2, -3, 18, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [4, 6.93]], fill: false },
          { t: 'seg', a: [4, 6.93], b: [4, 0], dash: true },
          { t: 'right', at: [4, 6.93], from: [0, 0], to: [16, 0] },
          { t: 'right', at: [4, 0], from: [16, 0], to: [4, 6.93] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [4, 6.93], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [4, 0], label: 'D', dx: 2, dy: 14 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [10, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [2, 3.46], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$10$', '$4\\sqrt{3}$', '$8$', '$12$'],
      answer: 2,
      solution: 'The leg $AC$ touches the hypotenuse piece $AD$, so use the leg rule: $AC^2 = AD \\times AB = 4 \\times 16 = 64$, giving $AC = 8$. The choice $4\\sqrt{3}$ is the altitude $CD$ (since $CD^2 = 4 \\times 12 = 48$) — a real length in the figure, but not the one asked for.',
    },
    {
      q: 'A right triangle has an acute angle of $35^\\circ$. Which of the following right triangles must be similar to it?',
      choices: [
        'one with an acute angle of $45^\\circ$',
        'one with an acute angle of $65^\\circ$',
        'one with an acute angle of $40^\\circ$',
        'one with an acute angle of $55^\\circ$',
      ],
      answer: 3,
      solution: 'The two acute angles of a right triangle add to $90^\\circ$, so a right triangle with a $55^\\circ$ angle also has a $35^\\circ$ angle. Both triangles then have angles $35^\\circ$, $55^\\circ$, $90^\\circ$ — similar by AA. The right angle always comes free, so one matching acute angle seals the deal.',
    },
    {
      q: 'A right triangle with legs $6$ and $8$ is similar to a larger right triangle with hypotenuse $25$. What is the longer leg of the larger triangle?',
      fig: {
        view: [-2, -3, 33, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
          { t: 'poly', pts: [[11, 0], [31, 0], [11, 15]], fill: false },
          { t: 'right', at: [11, 0], from: [31, 0], to: [11, 15] },
          { t: 'label', p: [21, 7.5], text: '25', dx: 12, dy: -8 },
          { t: 'label', p: [21, 0], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$15$', '$20$', '$18.75$', '$24$'],
      answer: 1,
      solution: 'The small triangle has hypotenuse $10$ (the $6$-$8$-$10$ triple), so the scale factor to the large triangle is $\\frac{25}{10} = 2.5$. Its legs are $6 \\times 2.5 = 15$ and $8 \\times 2.5 = 20$; the longer one is $20$. Similar triangles scale every side by the same factor — hypotenuse included.',
    },
    {
      q: 'The altitude to the hypotenuse of a right triangle has length $6$ and divides the hypotenuse into two pieces, one of length $3$. How long is the hypotenuse?',
      fig: {
        view: [-1.5, -3, 17, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [3, 6]], fill: false },
          { t: 'seg', a: [3, 6], b: [3, 0], dash: true },
          { t: 'right', at: [3, 6], from: [0, 0], to: [15, 0] },
          { t: 'right', at: [3, 0], from: [15, 0], to: [3, 6] },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [9, 0], text: '?', dx: 0, dy: 14 },
          { t: 'label', p: [3, 3], text: '6', dx: 10, dy: 0 },
        ],
      },
      choices: ['$15$', '$12$', '$9$', '$18$'],
      answer: 0,
      solution: 'The altitude relation $h^2 = pq$ gives $36 = 3q$, so the other piece is $q = 12$. The whole hypotenuse is $3 + 12 = 15$. Careful with $12$: that is only the second piece — the question asks for the entire hypotenuse.',
    },
    {
      q: 'A right triangle has hypotenuse $20$, and the altitude to the hypotenuse has length $9.6$. What is the length of the shorter leg?',
      fig: {
        view: [-2, -3, 22, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [7.2, 9.6]], fill: false },
          { t: 'seg', a: [7.2, 9.6], b: [7.2, 0], dash: true },
          { t: 'right', at: [7.2, 9.6], from: [0, 0], to: [20, 0] },
          { t: 'right', at: [7.2, 0], from: [20, 0], to: [7.2, 9.6] },
          { t: 'label', p: [10, 0], text: '20', dx: 16, dy: 14 },
          { t: 'label', p: [7.2, 4.8], text: '9.6', dx: 14, dy: 4 },
          { t: 'label', p: [3.6, 4.8], text: '?', dx: -12, dy: -4 },
        ],
      },
      choices: ['$10$', '$16$', '$12$', '$14$'],
      answer: 2,
      solution: 'Area two ways: $\\frac{1}{2}(20)(9.6) = 96$, so the legs satisfy $\\frac{1}{2}ab = 96$, meaning $ab = 192$. They also satisfy $a^2 + b^2 = 400$. Testing the triple family $12$-$16$-$20$ (which is $4 \\times (3$-$4$-$5)$): $12 \\times 16 = 192$. ✓ So the legs are $12$ and $16$, and the shorter is $12$. The choice $16$ is the longer leg.',
    },
  ],
}

const s65 = {
  id: '6.5',
  title: "Heron's Formula",
  learn: {
    concepts: [
      {
        heading: 'Area from sides alone',
        body: 'Heron\'s Formula computes a triangle\'s area from nothing but its three side lengths. First find the semiperimeter — half the perimeter — $s = \\frac{a+b+c}{2}$. Then the area is $\\sqrt{s(s-a)(s-b)(s-c)}$. No height, no angles, no coordinates needed.',
      },
      {
        heading: 'A built-in error check',
        body: 'After computing the three differences $s-a$, $s-b$, $s-c$, add them back up: they should total exactly $s$ (because $3s - (a+b+c) = 3s - 2s = s$). If they do not, a subtraction slipped. Small habits like this catch mistakes before they cost you.',
      },
      {
        heading: 'Cross-check when you can',
        body: 'For a right triangle, Heron must agree with the easy formula $\\frac{1}{2}(\\text{leg})(\\text{leg})$. For any triangle where a height is known, it must agree with $\\frac{1}{2}(\\text{base})(\\text{height})$. Running both computations is great practice and a powerful way to trust your result.',
      },
      {
        heading: 'Running Heron backward',
        body: 'Once Heron hands you the area $K$, you can extract any height: since $K = \\frac{1}{2}(\\text{base})(h)$, the height to a chosen base is $h = \\frac{2K}{\\text{base}}$. This finds heights in triangles where no right angle is in sight.',
      },
    ],
    examples: [
      {
        problem: 'Find the area of a triangle with sides $13$, $14$, and $15$.',
        steps: [
          'The semiperimeter is $s = \\frac{13 + 14 + 15}{2} = 21$.',
          'The differences are $21 - 13 = 8$, $21 - 14 = 7$, $21 - 15 = 6$. Check: $8 + 7 + 6 = 21 = s$. ✓',
          'Area $= \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$. (Grouping helps: $21 \\times 6 = 126$ and $8 \\times 7 = 56$, and $126 \\times 56 = 7056$.)',
        ],
        answer: 'The area is $84$',
        fig: {
          view: [-2, -2.5, 16, 14],
          elems: [
            { t: 'poly', pts: [[0, 0], [14, 0], [5, 12]], fill: false },
            { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
            { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
            { t: 'label', p: [9.5, 6], text: '15', dx: 12, dy: -4 },
          ],
        },
      },
      {
        problem: 'Find the area of a triangle with sides $5$, $5$, and $6$, then cross-check with base and height.',
        steps: [
          'Heron: $s = \\frac{5+5+6}{2} = 8$, so the area is $\\sqrt{8 \\times 3 \\times 3 \\times 2} = \\sqrt{144} = 12$.',
          'Cross-check: this triangle is isosceles, so the altitude to the base of $6$ hits its midpoint, making a right triangle with hypotenuse $5$ and leg $3$ — a $3$-$4$-$5$ triple, so the height is $4$.',
          'Base-height area: $\\frac{1}{2}(6)(4) = 12$. The two methods agree. ✓',
        ],
        answer: 'The area is $12$',
        fig: {
          view: [-1.5, -2.5, 8, 5.5],
          elems: [
            { t: 'poly', pts: [[0, 0], [6, 0], [3, 4]], fill: false },
            { t: 'seg', a: [3, 4], b: [3, 0], dash: true },
            { t: 'right', at: [3, 0], from: [6, 0], to: [3, 4] },
            { t: 'tick', a: [0, 0], b: [3, 4], n: 1 },
            { t: 'tick', a: [6, 0], b: [3, 4], n: 1 },
            { t: 'label', p: [1.5, 2], text: '5', dx: -10, dy: -6 },
            { t: 'label', p: [4.5, 2], text: '5', dx: 10, dy: -6 },
            { t: 'label', p: [3, 0], text: '6', dx: 14, dy: 14 },
            { t: 'label', p: [3, 2], text: '4', dx: -10, dy: 0 },
          ],
        },
      },
      {
        problem: 'A triangle has sides $10$, $17$, and $21$. Find the height drawn to the side of length $21$.',
        steps: [
          'First get the area from Heron: $s = \\frac{10+17+21}{2} = 24$, and the differences are $14$, $7$, $3$.',
          'Area $= \\sqrt{24 \\times 14 \\times 7 \\times 3} = \\sqrt{7056} = 84$.',
          'Now run it backward: $84 = \\frac{1}{2}(21)(h)$, so $h = \\frac{168}{21} = 8$.',
        ],
        answer: 'The height to the side of length $21$ is $8$',
        fig: {
          view: [-2, -2.5, 23, 10],
          elems: [
            { t: 'poly', pts: [[0, 0], [21, 0], [6, 8]], fill: false },
            { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
            { t: 'right', at: [6, 0], from: [21, 0], to: [6, 8] },
            { t: 'label', p: [10.5, 0], text: '21', dx: 20, dy: 14 },
            { t: 'label', p: [3, 4], text: '10', dx: -12, dy: -4 },
            { t: 'label', p: [13.5, 4], text: '17', dx: 12, dy: -4 },
            { t: 'label', p: [6, 4], text: '?', dx: 10, dy: 4 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'Use Heron\'s Formula to find the area of a triangle with sides $3$, $4$, and $5$.',
      fig: {
        view: [-1.5, -2, 5.5, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [0, 3]], fill: false },
          { t: 'right', at: [0, 0], from: [4, 0], to: [0, 3] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -10, dy: 0 },
          { t: 'label', p: [2, 1.5], text: '5', dx: 12, dy: -8 },
        ],
      },
      choices: ['$12$', '$36$', '$10$', '$6$'],
      answer: 3,
      solution: 'The semiperimeter is $s = \\frac{3+4+5}{2} = 6$, and the area is $\\sqrt{6 \\times 3 \\times 2 \\times 1} = \\sqrt{36} = 6$. Cross-check: this is a right triangle with legs $3$ and $4$, so the area is $\\frac{1}{2}(3)(4) = 6$. ✓ Heron and the leg formula must always agree. The choice $36$ forgets the final square root.',
    },
    {
      q: 'What is the semiperimeter of a triangle with sides $7$, $8$, and $9$?',
      choices: ['$24$', '$12$', '$11$', '$8$'],
      answer: 1,
      solution: 'The semiperimeter is HALF the perimeter: $s = \\frac{7 + 8 + 9}{2} = \\frac{24}{2} = 12$. The choice $24$ is the full perimeter — using it inside Heron\'s Formula would inflate every factor, so the halving step matters.',
    },
    {
      q: 'Find the area of a triangle with sides $5$, $5$, and $8$.',
      fig: {
        view: [-1.5, -2.5, 10, 4.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [4, 3]], fill: false },
          { t: 'tick', a: [0, 0], b: [4, 3], n: 1 },
          { t: 'tick', a: [8, 0], b: [4, 3], n: 1 },
          { t: 'label', p: [2, 1.5], text: '5', dx: -10, dy: -6 },
          { t: 'label', p: [6, 1.5], text: '5', dx: 10, dy: -6 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
        ],
      },
      choices: ['$20$', '$9$', '$12$', '$16$'],
      answer: 2,
      solution: 'Here $s = \\frac{5+5+8}{2} = 9$, so the area is $\\sqrt{9 \\times 4 \\times 4 \\times 1} = \\sqrt{144} = 12$. Fun comparison: the $5$-$5$-$6$ triangle also has area $12$! Different shapes, same sides-total, same area — a nice coincidence of these two triangles.',
    },
    {
      q: 'Use Heron\'s Formula on the triangle with sides $6$, $8$, and $10$, and check it against the right-triangle area formula. What is the area?',
      fig: {
        view: [-2, -2.5, 10.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'right', at: [0, 0], from: [8, 0], to: [0, 6] },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [0, 3], text: '6', dx: -10, dy: 0 },
          { t: 'label', p: [4, 3], text: '10', dx: 12, dy: -8 },
        ],
      },
      choices: ['$24$', '$48$', '$30$', '$12$'],
      answer: 0,
      solution: 'Heron: $s = 12$, area $= \\sqrt{12 \\times 6 \\times 4 \\times 2} = \\sqrt{576} = 24$. Right-triangle check: $6$-$8$-$10$ is right (a scaled $3$-$4$-$5$), so area $= \\frac{1}{2}(6)(8) = 24$. ✓ Two roads, one answer — exactly what should happen.',
    },
    {
      q: 'Find the exact area of a triangle with sides $7$, $8$, and $9$.',
      fig: {
        view: [-1.5, -2.5, 10.5, 8],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [3.67, 5.96]], fill: false },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [1.84, 2.98], text: '7', dx: -10, dy: -6 },
          { t: 'label', p: [6.34, 2.98], text: '8', dx: 10, dy: -6 },
        ],
      },
      choices: ['$24$', '$12\\sqrt{3}$', '$60$', '$12\\sqrt{5}$'],
      answer: 3,
      solution: 'With $s = 12$, the area is $\\sqrt{12 \\times 5 \\times 4 \\times 3} = \\sqrt{720}$. Simplify: $720 = 144 \\times 5$, so the area is $12\\sqrt{5} \\approx 26.8$. Not every Heron computation lands on a whole number — a clean radical is a perfectly good exact answer.',
    },
    {
      q: 'Find the area of a triangle with sides $4$, $13$, and $15$.',
      fig: {
        view: [-1.5, -2.5, 17, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [2.4, 3.2]], fill: false },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 14 },
          { t: 'label', p: [1.2, 1.6], text: '4', dx: -10, dy: -6 },
          { t: 'label', p: [8.7, 1.6], text: '13', dx: 8, dy: -10 },
        ],
      },
      choices: ['$30$', '$24$', '$26$', '$48$'],
      answer: 1,
      solution: 'Here $s = \\frac{4+13+15}{2} = 16$, and the differences are $12$, $3$, $1$ (check: $12+3+1 = 16$ ✓). Area $= \\sqrt{16 \\times 12 \\times 3 \\times 1} = \\sqrt{576} = 24$. This long, thin triangle shows Heron\'s power — no obvious height, yet the area falls right out.',
    },
    {
      q: 'A triangle has sides $10$, $10$, and $12$. What is the height drawn to the side of length $12$?',
      fig: {
        view: [-1.5, -2.5, 14, 10],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [6, 8]], fill: false },
          { t: 'seg', a: [6, 8], b: [6, 0], dash: true },
          { t: 'right', at: [6, 0], from: [12, 0], to: [6, 8] },
          { t: 'tick', a: [0, 0], b: [6, 8], n: 1 },
          { t: 'tick', a: [12, 0], b: [6, 8], n: 1 },
          { t: 'label', p: [3, 4], text: '10', dx: -12, dy: -4 },
          { t: 'label', p: [9, 4], text: '10', dx: 12, dy: -4 },
          { t: 'label', p: [6, 0], text: '12', dx: 16, dy: 14 },
          { t: 'label', p: [6, 4], text: '?', dx: -10, dy: 0 },
        ],
      },
      choices: ['$8$', '$10$', '$6$', '$4$'],
      answer: 0,
      solution: 'Heron first: $s = 16$, area $= \\sqrt{16 \\times 6 \\times 6 \\times 4} = \\sqrt{2304} = 48$. Backward: $48 = \\frac{1}{2}(12)(h)$ gives $h = 8$. Shortcut check: the altitude of this isosceles triangle makes a right triangle with hypotenuse $10$ and leg $6$ — the $6$-$8$-$10$ triple — so $h = 8$. ✓',
    },
    {
      q: 'Find the exact area of a triangle with sides $6$, $7$, and $11$.',
      choices: ['$12$', '$6\\sqrt{5}$', '$6\\sqrt{10}$', '$36$'],
      answer: 2,
      solution: 'Here $s = \\frac{6+7+11}{2} = 12$, with differences $6$, $5$, $1$. Area $= \\sqrt{12 \\times 6 \\times 5 \\times 1} = \\sqrt{360} = \\sqrt{36 \\times 10} = 6\\sqrt{10} \\approx 19$. Always pull out the largest perfect square when simplifying the radical.',
    },
    {
      q: 'What does Heron\'s Formula reveal about a "triangle" with sides $3$, $4$, and $7$?',
      choices: [
        'Its area is $0$ — the three lengths collapse into a flat segment',
        'Its area is $6$',
        'Its area is $\\sqrt{84}$',
        'Heron\'s Formula gives a negative number for these sides',
      ],
      answer: 0,
      solution: 'With $s = \\frac{3+4+7}{2} = 7$, the factor $s - 7 = 0$, so the area is $\\sqrt{7 \\times 4 \\times 3 \\times 0} = 0$. That zero is a message: since $3 + 4 = 7$ exactly, the two short sides just barely reach across the long one, flattening the triangle into a segment. Heron quietly encodes the triangle inequality.',
    },
    {
      q: 'A triangle has sides $13$, $20$, and $21$. What is the height drawn to the side of length $21$?',
      fig: {
        view: [-2, -2.5, 23, 14.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [21, 0], [5, 12]], fill: false },
          { t: 'seg', a: [5, 12], b: [5, 0], dash: true },
          { t: 'right', at: [5, 0], from: [21, 0], to: [5, 12] },
          { t: 'label', p: [10.5, 0], text: '21', dx: 20, dy: 14 },
          { t: 'label', p: [2.5, 6], text: '13', dx: -12, dy: -4 },
          { t: 'label', p: [13, 6], text: '20', dx: 12, dy: -4 },
          { t: 'label', p: [5, 6], text: '?', dx: 10, dy: 4 },
        ],
      },
      choices: ['$126$', '$12$', '$10$', '$14$'],
      answer: 1,
      solution: 'Heron: $s = \\frac{13+20+21}{2} = 27$, differences $14$, $7$, $6$. Area $= \\sqrt{27 \\times 14 \\times 7 \\times 6} = \\sqrt{15876} = 126$. Then $126 = \\frac{1}{2}(21)(h)$ gives $h = \\frac{252}{21} = 12$. The choice $126$ is the area itself — one more step turns it into the height.',
    },
  ],
}

const challenge = [
  {
    q: 'A $25$-foot ladder leans against a wall with its foot $7$ feet from the wall. The top then slips down so it rests $20$ feet up the wall. How far does the foot of the ladder slide outward?',
    fig: {
      view: [-3, -2.5, 19, 27],
      elems: [
        { t: 'seg', a: [-1.5, 0], b: [17.5, 0] },
        { t: 'seg', a: [0, 0], b: [0, 25.5] },
        { t: 'seg', a: [7, 0], b: [0, 24] },
        { t: 'seg', a: [15, 0], b: [0, 20], dash: true },
        { t: 'right', at: [0, 0], from: [7, 0], to: [0, 24] },
        { t: 'label', p: [3.5, 12], text: '25', dx: 12, dy: 0 },
        { t: 'label', p: [7.5, 10], text: '25', dx: 14, dy: 0 },
        { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
        { t: 'label', p: [0, 10], text: '20', dx: -14, dy: 0 },
      ],
    },
    choices: ['$4$ feet', '$8$ feet', '$15$ feet', '$5$ feet'],
    answer: 1,
    solution: 'Before: the height is $\\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$ (the $7$-$24$-$25$ triple). After: the foot sits $\\sqrt{25^2 - 20^2} = \\sqrt{225} = 15$ feet out (a scaled $3$-$4$-$5$). The foot slides from $7$ to $15$, a move of $8$ feet. Note the top slid down $4$ feet but the foot slid out $8$ — the two motions need not match!',
  },
  {
    q: 'In triangle $ABC$, the altitude from $A$ has length $6$ and meets $\\overline{BC}$ at $D$. Angle $B$ measures $45^\\circ$ and angle $C$ measures $30^\\circ$. What is the length of $\\overline{BC}$?',
    fig: {
      view: [-2, -2.5, 18.5, 8.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [16.39, 0], [6, 6]], fill: false },
        { t: 'seg', a: [6, 6], b: [6, 0], dash: true },
        { t: 'right', at: [6, 0], from: [16.39, 0], to: [6, 6] },
        { t: 'angle', at: [0, 0], from: [16.39, 0], to: [6, 6], r: 1.8, label: '45' },
        { t: 'angle', at: [16.39, 0], from: [0, 0], to: [6, 6], r: 2.4, label: '30' },
        { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 12 },
        { t: 'point', p: [16.39, 0], label: 'C', dx: 12, dy: 12 },
        { t: 'point', p: [6, 6], label: 'A', dx: 0, dy: -10 },
        { t: 'point', p: [6, 0], label: 'D', dx: 0, dy: 14 },
        { t: 'label', p: [6, 3], text: '6', dx: 10, dy: 0 },
      ],
    },
    choices: ['$12$', '$6 + 6\\sqrt{2}$', '$6 + 6\\sqrt{3}$', '$12\\sqrt{3}$'],
    answer: 2,
    solution: 'The altitude carves the triangle into two special right triangles. On the left, triangle $ABD$ is $45$-$45$-$90$, so its legs match: $BD = AD = 6$. On the right, triangle $ACD$ is $30$-$60$-$90$ with the right angle at $D$; the altitude $AD = 6$ sits opposite the $30^\\circ$ angle at $C$, making it the short leg, so the long leg is $DC = 6\\sqrt{3}$. Altogether $BC = BD + DC = 6 + 6\\sqrt{3} \\approx 16.4$.',
  },
  {
    q: 'Starting at point $A$, you walk $12$ m east and $9$ m north to reach point $C$. From $C$ you walk $8$ m in a direction perpendicular to $\\overline{AC}$, arriving at $D$. How far is $D$ from $A$?',
    fig: {
      view: [-2.5, -2.5, 15, 18],
      elems: [
        { t: 'seg', a: [0, 0], b: [12, 0] },
        { t: 'seg', a: [12, 0], b: [12, 9] },
        { t: 'seg', a: [0, 0], b: [12, 9], dash: true },
        { t: 'seg', a: [12, 9], b: [7.2, 15.4] },
        { t: 'seg', a: [0, 0], b: [7.2, 15.4], dash: true },
        { t: 'right', at: [12, 0], from: [0, 0], to: [12, 9] },
        { t: 'right', at: [12, 9], from: [0, 0], to: [7.2, 15.4] },
        { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
        { t: 'point', p: [12, 9], label: 'C', dx: 14, dy: 0 },
        { t: 'point', p: [7.2, 15.4], label: 'D', dx: 0, dy: -10 },
        { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
        { t: 'label', p: [12, 4.5], text: '9', dx: 12, dy: 0 },
        { t: 'label', p: [9.6, 12.2], text: '8', dx: 12, dy: 0 },
        { t: 'label', p: [3.6, 7.7], text: '?', dx: -12, dy: 0 },
      ],
    },
    choices: ['$17$', '$23$', '$\\sqrt{145}$', '$15$'],
    answer: 0,
    solution: 'First, $AC = \\sqrt{12^2 + 9^2} = 15$ (a $3$-$4$-$5$ scaled by $3$). Since $\\overline{CD} \\perp \\overline{AC}$, triangle $ACD$ is right with legs $15$ and $8$, so $AD = \\sqrt{225 + 64} = \\sqrt{289} = 17$ — the $8$-$15$-$17$ triple. Two famous triples chained together in one walk!',
  },
  {
    q: 'The longer leg of a $30$-$60$-$90$ triangle is $12$. What is the perimeter of the triangle?',
    choices: ['$36$', '$12 + 12\\sqrt{2}$', '$24\\sqrt{3}$', '$12 + 12\\sqrt{3}$'],
    answer: 3,
    solution: 'The short leg is $\\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$, and the hypotenuse is twice that: $8\\sqrt{3}$. Perimeter: $12 + 4\\sqrt{3} + 8\\sqrt{3} = 12 + 12\\sqrt{3} \\approx 32.8$. The radical terms combine neatly — collect like terms just as in algebra.',
  },
  {
    q: 'A triangle has sides $3.5$, $12$, and $12.5$. What is its area?',
    choices: ['$21$', '$42$', '$24$', '$18$'],
    answer: 0,
    solution: 'Doubling all sides gives $7$, $24$, $25$ — a Pythagorean triple! So the original triangle is right with legs $3.5$ and $12$ (halved from $7$ and $24$). Area $= \\frac{1}{2}(3.5)(12) = 21$. Triples scale by ANY positive factor, including fractions — scaling by $\\frac{1}{2}$ is just as legal as scaling by $2$.',
  },
  {
    q: 'The altitude to the hypotenuse of a right triangle divides the hypotenuse into segments of length $9$ and $16$. What is the perimeter of the (whole) triangle?',
    fig: {
      view: [-2, -3, 27, 15],
      elems: [
        { t: 'poly', pts: [[0, 0], [25, 0], [9, 12]], fill: false },
        { t: 'seg', a: [9, 12], b: [9, 0], dash: true },
        { t: 'right', at: [9, 12], from: [0, 0], to: [25, 0] },
        { t: 'right', at: [9, 0], from: [25, 0], to: [9, 12] },
        { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
        { t: 'label', p: [17, 0], text: '16', dx: 0, dy: 14 },
        { t: 'label', p: [4.5, 6], text: '?', dx: -12, dy: -4 },
        { t: 'label', p: [17, 6], text: '?', dx: 12, dy: -4 },
      ],
    },
    choices: ['$50$', '$25$', '$60$', '$72$'],
    answer: 2,
    solution: 'The altitude is $\\sqrt{9 \\times 16} = 12$. Each leg comes from the leg rule: one is $\\sqrt{9 \\times 25} = 15$, the other $\\sqrt{16 \\times 25} = 20$. (Check: $15^2 + 20^2 = 625 = 25^2$ ✓ — a scaled $3$-$4$-$5$.) Perimeter: $15 + 20 + 25 = 60$.',
  },
  {
    q: 'What is the area of a triangle with sides $15$, $28$, and $41$?',
    choices: ['$84$', '$126$', '$252$', '$63$'],
    answer: 1,
    solution: 'Heron: $s = \\frac{15+28+41}{2} = 42$, with differences $27$, $14$, $1$ (check: $27 + 14 + 1 = 42$ ✓). Area $= \\sqrt{42 \\times 27 \\times 14 \\times 1} = \\sqrt{15876} = 126$. Group smartly: $42 \\times 14 = 588$ and $588 \\times 27 = 15876$, and since $126^2 = 15876$, the root is exact.',
  },
  {
    q: 'What is the distance between the points $(-4, 7)$ and $(8, 2)$ in the coordinate plane?',
    choices: ['$17$', '$\\sqrt{119}$', '$15$', '$13$'],
    answer: 3,
    solution: 'The horizontal change is $8 - (-4) = 12$ and the vertical change is $2 - 7 = -5$, a drop of $5$. These are legs of a right triangle, so the distance is $\\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ — the $5$-$12$-$13$ triple. Distance in the plane is the Pythagorean Theorem wearing coordinates.',
  },
  {
    q: 'The diagonal of a square is $18$. What is the area of the square?',
    choices: ['$324$', '$81$', '$162$', '$162\\sqrt{2}$'],
    answer: 2,
    solution: 'If the side is $\\ell$, the diagonal is $\\ell\\sqrt{2} = 18$, so $\\ell = \\frac{18}{\\sqrt{2}} = 9\\sqrt{2}$ and the area is $\\ell^2 = 81 \\times 2 = 162$. Slicker: squaring the diagonal equation gives $2\\ell^2 = 324$ directly, so $\\ell^2 = 162$ with no radicals handled at all. The choice $324$ squares the diagonal but forgets to halve.',
  },
  {
    q: 'An equilateral triangle has side length $8$. What is its area?',
    choices: ['$16\\sqrt{3}$', '$32$', '$16$', '$32\\sqrt{3}$'],
    answer: 0,
    solution: 'The altitude is $\\frac{8}{2}\\sqrt{3} = 4\\sqrt{3}$ (from the hidden $30$-$60$-$90$ triangle). Area $= \\frac{1}{2}(8)(4\\sqrt{3}) = 16\\sqrt{3} \\approx 27.7$. In general an equilateral triangle of side $s$ has area $\\frac{s^2\\sqrt{3}}{4}$ — worth remembering, and now you know where it comes from.',
  },
  {
    q: 'Two vertical poles stand $24$ m apart on level ground. One is $10$ m tall and the other is $17$ m tall. What is the length of a straight wire connecting their tops?',
    fig: {
      view: [-3, -2.5, 28, 20],
      elems: [
        { t: 'seg', a: [-1.5, 0], b: [26, 0] },
        { t: 'seg', a: [0, 0], b: [0, 10] },
        { t: 'seg', a: [24, 0], b: [24, 17] },
        { t: 'seg', a: [0, 10], b: [24, 17], dash: true },
        { t: 'seg', a: [0, 10], b: [24, 10], dash: true },
        { t: 'right', at: [24, 10], from: [0, 10], to: [24, 17] },
        { t: 'label', p: [0, 5], text: '10', dx: -14, dy: 0 },
        { t: 'label', p: [24, 8.5], text: '17', dx: 14, dy: 0 },
        { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
        { t: 'label', p: [12, 13.5], text: '?', dx: 0, dy: -10 },
      ],
    },
    choices: ['$31$ m', '$24$ m', '$26$ m', '$25$ m'],
    answer: 3,
    solution: 'Slide a horizontal line across from the shorter pole\'s top: it meets the taller pole $10$ m up, leaving a vertical gap of $17 - 10 = 7$ m. The wire is the hypotenuse of a right triangle with legs $24$ and $7$: $\\sqrt{576 + 49} = \\sqrt{625} = 25$ m — the $7$-$24$-$25$ triple. Building the right triangle is the real work; the triple finishes it.',
  },
  {
    q: 'Triangle $P$ has sides $25$, $25$, $30$. Triangle $Q$ has sides $25$, $25$, $40$. Which has the larger area?',
    choices: [
      'Triangle $P$',
      'They have equal areas — both $300$',
      'Triangle $Q$',
      'It cannot be determined from side lengths alone',
    ],
    answer: 1,
    solution: 'Heron for $P$: $s = 40$, area $= \\sqrt{40 \\times 15 \\times 15 \\times 10} = \\sqrt{90000} = 300$. Heron for $Q$: $s = 45$, area $= \\sqrt{45 \\times 20 \\times 20 \\times 5} = \\sqrt{90000} = 300$. A tie! Height checks agree: $P$ has height $\\sqrt{625 - 225} = 20$ on base $30$, and $Q$ has height $\\sqrt{625 - 400} = 15$ on base $40$ — both give $300$. A wider base exactly traded off against a shorter height.',
  },
]

const worksheet = [
  {
    q: 'A right triangle has legs $7$ and $24$. Find the hypotenuse.',
    fig: {
      view: [-3, -4, 28, 10],
      elems: [
        { t: 'poly', pts: [[0, 0], [24, 0], [0, 7]], fill: false },
        { t: 'right', at: [0, 0], from: [24, 0], to: [0, 7] },
        { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 14 },
        { t: 'label', p: [0, 3.5], text: '7', dx: -10, dy: 0 },
        { t: 'label', p: [12, 3.5], text: '?', dx: 12, dy: -8 },
      ],
    },
    answer: '$25$',
    solution: 'By the Pythagorean Theorem, $c^2 = 7^2 + 24^2 = 49 + 576 = 625$, so $c = 25$. Even faster: recognize the $7$-$24$-$25$ triple and skip the arithmetic entirely.',
  },
  {
    q: 'A $45$-$45$-$90$ triangle has legs of length $9$. Find the exact length of the hypotenuse.',
    answer: '$9\\sqrt{2}$',
    solution: 'In a $45$-$45$-$90$ triangle the hypotenuse is always leg $\\cdot \\sqrt{2}$, so it is $9\\sqrt{2} \\approx 12.7$. Check with Pythagoras: $\\sqrt{81 + 81} = \\sqrt{162} = \\sqrt{81 \\times 2} = 9\\sqrt{2}$. ✓',
  },
  {
    q: 'A right triangle has one leg $40$ and hypotenuse $41$. Find the other leg.',
    fig: {
      view: [-4, -5, 45, 13],
      elems: [
        { t: 'poly', pts: [[0, 0], [40, 0], [0, 9]], fill: false },
        { t: 'right', at: [0, 0], from: [40, 0], to: [0, 9] },
        { t: 'label', p: [20, 0], text: '40', dx: 0, dy: 14 },
        { t: 'label', p: [0, 4.5], text: '?', dx: -10, dy: 0 },
        { t: 'label', p: [20, 4.5], text: '41', dx: 12, dy: -8 },
      ],
    },
    answer: '$9$',
    solution: 'Subtract squares: $41^2 - 40^2 = 1681 - 1600 = 81$, so the leg is $\\sqrt{81} = 9$. A shortcut using difference of squares: $41^2 - 40^2 = (41-40)(41+40) = 1 \\times 81 = 81$. This reveals another whole-number triple: $9$-$40$-$41$.',
  },
  {
    q: 'A $30$-$60$-$90$ triangle has hypotenuse $14$. Find both legs exactly.',
    answer: 'The legs are $7$ and $7\\sqrt{3}$',
    solution: 'The short leg (opposite $30^\\circ$) is half the hypotenuse: $7$. The long leg (opposite $60^\\circ$) is the short leg times $\\sqrt{3}$: $7\\sqrt{3} \\approx 12.1$. Check: $49 + 147 = 196 = 14^2$. ✓',
  },
  {
    q: 'Do the sides $10$, $24$, $26$ form a right triangle? Explain how you know.',
    answer: 'Yes — $10^2 + 24^2 = 676 = 26^2$',
    solution: 'Test the converse with $26$ as the candidate hypotenuse: $100 + 576 = 676$ and $26^2 = 676$ — a perfect match, so the triangle is right. Faster still: halving gives $5$-$12$-$13$, a famous triple, so the scaled version is right too.',
  },
  {
    q: 'Use Heron\'s Formula to find the area of a triangle with sides $6$, $25$, and $29$.',
    answer: '$60$',
    solution: 'The semiperimeter is $s = \\frac{6+25+29}{2} = 30$, with differences $24$, $5$, $1$ (check: $24+5+1 = 30$ ✓). Area $= \\sqrt{30 \\times 24 \\times 5 \\times 1} = \\sqrt{3600} = 60$. A very flat triangle, but Heron handles it without complaint.',
  },
  {
    q: 'A rectangle has a diagonal of length $26$ and one side of length $10$. Find the area of the rectangle.',
    fig: {
      view: [-2, -3.5, 27, 13],
      elems: [
        { t: 'poly', pts: [[0, 0], [24, 0], [24, 10], [0, 10]], fill: false },
        { t: 'seg', a: [0, 0], b: [24, 10], dash: true },
        { t: 'right', at: [24, 0], from: [0, 0], to: [24, 10] },
        { t: 'label', p: [12, 0], text: '?', dx: 0, dy: 14 },
        { t: 'label', p: [24, 5], text: '10', dx: 14, dy: 0 },
        { t: 'label', p: [12, 5], text: '26', dx: -14, dy: -6 },
      ],
    },
    answer: '$240$',
    solution: 'The diagonal and two sides form a right triangle with hypotenuse $26$ and one leg $10$. Halving gives $5$ and $13$ — the $5$-$12$-$13$ family — so the other side is $2 \\times 12 = 24$. The area is $10 \\times 24 = 240$. (Check the triple: $100 + 576 = 676 = 26^2$ ✓.)',
  },
  {
    q: 'An equilateral triangle has perimeter $36$. Find its exact area.',
    answer: '$36\\sqrt{3}$',
    solution: 'Each side is $36 \\div 3 = 12$. The altitude is $\\frac{12}{2}\\sqrt{3} = 6\\sqrt{3}$, from the $30$-$60$-$90$ triangle inside. Area $= \\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3} \\approx 62.4$. The formula $\\frac{s^2\\sqrt{3}}{4}$ agrees: $\\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$. ✓',
  },
  {
    q: 'A right triangle has legs $9$ and $12$. Find the length of the altitude drawn to the hypotenuse.',
    fig: {
      view: [-1.5, -3, 17, 9],
      elems: [
        { t: 'poly', pts: [[0, 0], [15, 0], [5.4, 7.2]], fill: false },
        { t: 'seg', a: [5.4, 7.2], b: [5.4, 0], dash: true },
        { t: 'right', at: [5.4, 7.2], from: [0, 0], to: [15, 0] },
        { t: 'right', at: [5.4, 0], from: [15, 0], to: [5.4, 7.2] },
        { t: 'label', p: [2.7, 3.6], text: '9', dx: -10, dy: -6 },
        { t: 'label', p: [10.2, 3.6], text: '12', dx: 12, dy: -6 },
        { t: 'label', p: [7.5, 0], text: '15', dx: 16, dy: 14 },
        { t: 'label', p: [5.4, 3.6], text: '?', dx: 10, dy: 4 },
      ],
    },
    answer: '$7.2$',
    solution: 'The hypotenuse is $15$ ($9$-$12$-$15$ is $3 \\times (3$-$4$-$5)$). Compute the area two ways: with the legs, $\\frac{1}{2}(9)(12) = 54$; with the hypotenuse as base, $54 = \\frac{1}{2}(15)(h)$, so $h = \\frac{108}{15} = 7.2$. The altitude to the hypotenuse is always $\\frac{\\text{leg} \\times \\text{leg}}{\\text{hypotenuse}}$.',
  },
  {
    q: 'A triangle has sides $25$, $29$, and $36$. Find the length of the height drawn to the side of length $36$.',
    fig: {
      view: [-2.5, -3, 39, 23],
      elems: [
        { t: 'poly', pts: [[0, 0], [36, 0], [15, 20]], fill: false },
        { t: 'seg', a: [15, 20], b: [15, 0], dash: true },
        { t: 'right', at: [15, 0], from: [36, 0], to: [15, 20] },
        { t: 'label', p: [18, 0], text: '36', dx: 24, dy: 14 },
        { t: 'label', p: [7.5, 10], text: '25', dx: -14, dy: -4 },
        { t: 'label', p: [25.5, 10], text: '29', dx: 14, dy: -4 },
        { t: 'label', p: [15, 10], text: '?', dx: 10, dy: 4 },
      ],
    },
    answer: '$20$',
    solution: 'Heron first: $s = \\frac{25+29+36}{2} = 45$, with differences $20$, $16$, $9$ (check: $20+16+9 = 45$ ✓). Area $= \\sqrt{45 \\times 20 \\times 16 \\times 9} = \\sqrt{129600} = 360$. Now run it backward: $360 = \\frac{1}{2}(36)(h)$, so $h = \\frac{720}{36} = 20$. Bonus check: the foot of the height splits the base into $15$ and $21$, and indeed $15$-$20$-$25$ and $20$-$21$-$29$ are both right triangles. ✓',
  },
]

export default {
  id: 'intro-geometry-ch06',
  book: 'intro-geometry',
  number: 6,
  title: 'Right Triangles',
  intro:
    'Right triangles are the workhorses of geometry, and this chapter hands you their master key: the Pythagorean Theorem. You will learn to find missing sides, recognize the special triangles and famous triples that make computations lightning-fast, see how right angles supercharge congruence and similarity, and finish with Heron\'s Formula — a way to find any triangle\'s area from its sides alone.',
  sections: [s61, s62, s63, s64, s65],
  challenge,
  worksheet,
}
