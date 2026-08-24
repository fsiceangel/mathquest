// Introduction to Geometry — Chapter 17: Analytic Geometry
// All problems, explanations, and examples are original MathQuest content.

const s171 = {
  id: '17.1',
  title: 'Lines',
  learn: {
    concepts: [
      {
        heading: 'Slope is geometry in a fraction',
        body: 'The slope of the line through $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ — rise over run. Slope measures steepness AND direction: uphill lines have positive slope, downhill lines negative. Point-slope form $y - y_1 = m(x - x_1)$ builds the equation of a line from one point and the slope, which is exactly the information geometry usually hands us.',
      },
      {
        heading: 'The midpoint is the average',
        body: 'The midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$ — just average the $x$-coordinates and average the $y$-coordinates. It makes sense: the point halfway along is halfway across and halfway up. Careful: it is the average (sum over $2$), not the difference!',
      },
      {
        heading: 'The distance formula is the Pythagorean Theorem in disguise',
        body: 'To find the distance between $(x_1, y_1)$ and $(x_2, y_2)$, draw the horizontal leg (length $|x_2 - x_1|$) and the vertical leg (length $|y_2 - y_1|$). The segment you want is the hypotenuse, so $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. Do not memorize this as a new fact — it IS the Pythagorean Theorem, dressed up in coordinates.',
      },
      {
        heading: 'Parallel and perpendicular slopes',
        body: 'Parallel lines have equal slopes. Perpendicular lines have slopes that multiply to $-1$: each slope is the negative reciprocal of the other, so a line of slope $\\frac{2}{3}$ is perpendicular to any line of slope $-\\frac{3}{2}$. The perpendicular bisector of a segment combines both tools: it passes through the midpoint and uses the negative reciprocal of the segment’s slope.',
      },
    ],
    examples: [
      {
        problem: 'Find the distance between $A = (1, 2)$ and $B = (7, 10)$.',
        steps: [
          'Build a right triangle: walk horizontally from $(1, 2)$ to $(7, 2)$, a run of $7 - 1 = 6$, then vertically up to $(7, 10)$, a rise of $10 - 2 = 8$.',
          'The segment $AB$ is the hypotenuse of a right triangle with legs $6$ and $8$.',
          'By the Pythagorean Theorem, $AB = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
        ],
        answer: '$AB = 10$',
        fig: {
          view: [-1, -1, 10, 12],
          grid: true,
          elems: [
            { t: 'seg', a: [1, 2], b: [7, 10] },
            { t: 'seg', a: [1, 2], b: [7, 2], dash: true },
            { t: 'seg', a: [7, 2], b: [7, 10], dash: true },
            { t: 'right', at: [7, 2], from: [1, 2], to: [7, 10] },
            { t: 'point', p: [1, 2], label: 'A', dx: -10, dy: 8 },
            { t: 'point', p: [7, 10], label: 'B', dx: 10, dy: -8 },
            { t: 'label', p: [4, 2], text: '6', dx: 0, dy: 14 },
            { t: 'label', p: [7, 6], text: '8', dx: 12, dy: 0 },
          ],
        },
      },
      {
        problem: 'Find the midpoint of the segment with endpoints $(-3, 5)$ and $(7, -1)$.',
        steps: [
          'Average the $x$-coordinates: $\\dfrac{-3 + 7}{2} = \\dfrac{4}{2} = 2$.',
          'Average the $y$-coordinates: $\\dfrac{5 + (-1)}{2} = \\dfrac{4}{2} = 2$.',
          'So the midpoint is $(2, 2)$. Sanity check: $2$ is between $-3$ and $7$, and $2$ is between $-1$ and $5$. ✓',
        ],
        answer: 'Midpoint $= (2, 2)$',
      },
      {
        problem: 'Find the equation of the perpendicular bisector of the segment from $(0, 0)$ to $(6, 4)$.',
        steps: [
          'The perpendicular bisector needs two ingredients: a point (the midpoint) and a slope (the negative reciprocal of the segment’s slope).',
          'Midpoint: $\\left(\\dfrac{0 + 6}{2}, \\dfrac{0 + 4}{2}\\right) = (3, 2)$. Segment slope: $\\dfrac{4 - 0}{6 - 0} = \\dfrac{2}{3}$.',
          'The perpendicular slope is $-\\dfrac{3}{2}$. Point-slope form gives $y - 2 = -\\dfrac{3}{2}(x - 3)$, which simplifies to $y = -\\dfrac{3}{2}x + \\dfrac{13}{2}$.',
          'Every point on this line is equidistant from $(0, 0)$ and $(6, 4)$ — that is what makes perpendicular bisectors so useful.',
        ],
        answer: '$y = -\\dfrac{3}{2}x + \\dfrac{13}{2}$',
        fig: {
          view: [-2, -2, 8, 8],
          grid: true,
          elems: [
            { t: 'seg', a: [0, 0], b: [6, 4] },
            { t: 'line', a: [1, 5], b: [5, -1] },
            { t: 'right', at: [3, 2], from: [6, 4], to: [1, 5] },
            { t: 'point', p: [0, 0], dx: -10, dy: 12 },
            { t: 'point', p: [6, 4], dx: 12, dy: -6 },
            { t: 'point', p: [3, 2], label: 'M', dx: 12, dy: 10 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'What is the slope of the line through $(1, 2)$ and $(5, 10)$?',
      fig: {
        view: [-1, 0, 7, 12],
        grid: true,
        elems: [
          { t: 'line', a: [0, 0], b: [6, 12] },
          { t: 'point', p: [1, 2], dx: 12, dy: 6 },
          { t: 'point', p: [5, 10], dx: 12, dy: 6 },
        ],
      },
      choices: ['$\\dfrac{1}{2}$', '$2$', '$8$', '$-2$'],
      answer: 1,
      solution: 'Slope is rise over run: $m = \\dfrac{10 - 2}{5 - 1} = \\dfrac{8}{4} = 2$. The answer $\\frac{1}{2}$ comes from putting the run on top — always keep the $y$-change in the numerator. And $8$ is just the rise by itself, before dividing by the run.',
    },
    {
      q: 'What is the midpoint of the segment from $(2, 7)$ to $(8, 3)$?',
      choices: ['$(5, 5)$', '$(10, 10)$', '$(3, -2)$', '$(5, 4)$'],
      answer: 0,
      solution: 'Average each coordinate: $x = \\dfrac{2 + 8}{2} = 5$ and $y = \\dfrac{7 + 3}{2} = 5$, so the midpoint is $(5, 5)$. The point $(10, 10)$ is the sum without dividing by $2$, and $(3, -2)$ uses differences instead of sums — the midpoint always averages.',
    },
    {
      q: 'What is the distance from $(0, 0)$ to $(5, 12)$?',
      choices: ['$17$', '$169$', '$13$', '$7$'],
      answer: 2,
      solution: 'The legs of the right triangle are $5$ and $12$, so $d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Watch out: $169$ is the distance squared (forgetting the square root), and $17$ is $5 + 12$ — but the hypotenuse is always shorter than the two legs added together.',
    },
    {
      q: 'What is the distance between $(-2, 3)$ and $(4, 11)$?',
      fig: {
        view: [-4, 0, 6, 13],
        grid: true,
        elems: [
          { t: 'seg', a: [-2, 3], b: [4, 11] },
          { t: 'seg', a: [-2, 3], b: [4, 3], dash: true },
          { t: 'seg', a: [4, 3], b: [4, 11], dash: true },
          { t: 'point', p: [-2, 3], dx: -10, dy: 10 },
          { t: 'point', p: [4, 11], dx: 10, dy: -8 },
        ],
      },
      choices: ['$10$', '$2\\sqrt{17}$', '$14$', '$100$'],
      answer: 0,
      solution: 'Run: $4 - (-2) = 6$. Rise: $11 - 3 = 8$. Then $d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. The trap in this problem is the run: subtracting a negative gives $6$, not $2$ — the answer $2\\sqrt{17}$ comes from using a run of $2$. And $100$ is $d^2$, one square root away from the answer.',
    },
    {
      q: 'A line is perpendicular to $y = 3x - 5$. What is its slope?',
      choices: ['$3$', '$\\dfrac{1}{3}$', '$-3$', '$-\\dfrac{1}{3}$'],
      answer: 3,
      solution: 'Perpendicular slopes are negative reciprocals: flip $3 = \\frac{3}{1}$ to $\\frac{1}{3}$, then negate to get $-\\frac{1}{3}$. Check: $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$. ✓ The choice $\\frac{1}{3}$ flips without negating, and $-3$ negates without flipping — a perpendicular slope needs both moves.',
    },
    {
      q: 'Which line is parallel to the line $2x + 3y = 6$?',
      choices: ['$y = \\dfrac{2}{3}x + 1$', '$y = -\\dfrac{2}{3}x + 4$', '$y = \\dfrac{3}{2}x - 2$', '$y = -\\dfrac{3}{2}x + 5$'],
      answer: 1,
      solution: 'Solve for $y$ to see the slope: $3y = -2x + 6$, so $y = -\\frac{2}{3}x + 2$ — the slope is $-\\frac{2}{3}$. Parallel lines share the exact same slope, so $y = -\\frac{2}{3}x + 4$ is parallel. The slope $-\\frac{3}{2}$ would be perpendicular, and the positive versions have the wrong sign entirely.',
    },
    {
      q: 'The midpoint of $\\overline{AB}$ is $M = (4, 1)$, and $A = (1, -3)$. What is $B$?',
      choices: ['$\\left(\\dfrac{5}{2}, -1\\right)$', '$(3, 4)$', '$(7, 5)$', '$(-2, -7)$'],
      answer: 2,
      solution: 'Going from $A$ to $M$ takes a step of $(+3, +4)$. Since $M$ is exactly halfway, take that same step again: $B = (4 + 3, 1 + 4) = (7, 5)$. Check by averaging: $\\left(\\frac{1 + 7}{2}, \\frac{-3 + 5}{2}\\right) = (4, 1) = M$. ✓ The point $\\left(\\frac{5}{2}, -1\\right)$ is the midpoint of $A$ and $M$ — halfway to halfway, not the far endpoint.',
    },
    {
      q: 'What is the equation of the perpendicular bisector of the segment from $(2, 0)$ to $(6, 8)$?',
      fig: {
        view: [-1, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [2, 0], b: [6, 8] },
          { t: 'line', a: [0, 6], b: [8, 2] },
          { t: 'point', p: [2, 0], dx: -8, dy: -10 },
          { t: 'point', p: [6, 8], dx: 10, dy: -6 },
          { t: 'point', p: [4, 4], label: 'M', dx: 12, dy: 10 },
        ],
      },
      choices: ['$y = 2x - 4$', '$y = \\dfrac{1}{2}x + 2$', '$y = -\\dfrac{1}{2}x + 2$', '$y = -\\dfrac{1}{2}x + 6$'],
      answer: 3,
      solution: 'Midpoint: $\\left(\\frac{2 + 6}{2}, \\frac{0 + 8}{2}\\right) = (4, 4)$. Segment slope: $\\frac{8 - 0}{6 - 2} = 2$, so the perpendicular slope is $-\\frac{1}{2}$. Then $y - 4 = -\\frac{1}{2}(x - 4)$ gives $y = -\\frac{1}{2}x + 6$. The line $y = \\frac{1}{2}x + 2$ also passes through $(4, 4)$ but forgot to negate the slope, and $y = 2x - 4$ passes through the midpoint with the ORIGINAL slope — that is the line containing the segment, not its bisector.',
    },
    {
      q: 'Triangle $ABC$ has vertices $A = (0, 0)$, $B = (4, 2)$, and $C = (2, 6)$. At which vertex is the right angle?',
      fig: {
        view: [-1, -1, 6, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 2], [2, 6]], fill: false },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [4, 2], label: 'B', dx: 12, dy: 6 },
          { t: 'point', p: [2, 6], label: 'C', dx: 0, dy: -12 },
        ],
      },
      choices: ['$A$', '$B$', '$C$', 'There is no right angle'],
      answer: 1,
      solution: 'Compute the slopes: $\\overline{AB}$ has slope $\\frac{2 - 0}{4 - 0} = \\frac{1}{2}$, and $\\overline{BC}$ has slope $\\frac{6 - 2}{2 - 4} = -2$. Since $\\frac{1}{2} \\cdot (-2) = -1$, sides $\\overline{AB}$ and $\\overline{BC}$ are perpendicular — and they meet at $B$, so the right angle is at $B$. (Slope of $\\overline{AC}$ is $3$, which pairs with neither of the others.)',
    },
    {
      q: 'Which point on the $y$-axis is equidistant from $(2, 1)$ and $(4, 5)$?',
      choices: ['$(0, 3)$', '$(0, 4)$', '$\\left(0, \\dfrac{9}{2}\\right)$', '$\\left(0, \\dfrac{7}{2}\\right)$'],
      answer: 2,
      solution: 'Call the point $(0, y)$ and set the squared distances equal: $2^2 + (y - 1)^2 = 4^2 + (y - 5)^2$. Expanding: $4 + y^2 - 2y + 1 = 16 + y^2 - 10y + 25$, so $5 - 2y = 41 - 10y$, giving $8y = 36$ and $y = \\frac{9}{2}$. Check: both squared distances equal $\\frac{65}{4}$. ✓ The point $(0, 3)$ just averages the $y$-coordinates, but equidistant points live on the perpendicular bisector, not at the average height.',
    },
  ],
}

const s172 = {
  id: '17.2',
  title: 'Circles',
  learn: {
    concepts: [
      {
        heading: 'A circle is an equation about distance',
        body: 'A circle is all points at distance $r$ from a center $(h, k)$. Write that with the distance formula and square both sides: $(x - h)^2 + (y - k)^2 = r^2$. That is the standard form of a circle — it is nothing more than the distance formula holding hands with the definition of a circle.',
      },
      {
        heading: 'Read the center carefully — the signs flip',
        body: 'In $(x - 3)^2 + (y + 2)^2 = 25$, the center is $(3, -2)$, not $(-3, 2)$: the form is $x$ MINUS $h$, so $(y + 2)$ means $y - (-2)$. Also, the right side is $r^2$, not $r$ — here the radius is $\\sqrt{25} = 5$, not $25$. These two traps catch more students than everything else about circles combined.',
      },
      {
        heading: 'Completing the square uncovers hidden circles',
        body: 'An equation like $x^2 + y^2 - 6x + 4y - 12 = 0$ is a circle in disguise. Group the $x$-terms and $y$-terms, then complete each square: take half the coefficient of $x$, square it, and add it to both sides (and the same for $y$). The equation reshapes into standard form, revealing the center and radius.',
      },
      {
        heading: 'Inside, on, or outside?',
        body: 'To test a point against a circle, compare its distance from the center to the radius — or easier, compare the squared distance to $r^2$ and skip the square roots. Less than $r^2$ means inside, equal means on the circle, greater means outside. If a segment is a diameter, the center is the midpoint of the segment and the radius is HALF the segment’s length.',
      },
    ],
    examples: [
      {
        problem: 'Find the center and radius of the circle $(x - 3)^2 + (y + 2)^2 = 25$.',
        steps: [
          'Match against $(x - h)^2 + (y - k)^2 = r^2$. From $(x - 3)^2$ we read $h = 3$.',
          'Rewrite $(y + 2)^2$ as $(y - (-2))^2$ to read $k = -2$. The center is $(3, -2)$ — the signs flip from what you see!',
          'The right side is $r^2 = 25$, so $r = 5$ (not $25$).',
        ],
        answer: 'Center $(3, -2)$, radius $5$',
        fig: {
          view: [-3, -8, 9, 4],
          grid: true,
          elems: [
            { t: 'circle', c: [3, -2], r: 5 },
            { t: 'seg', a: [3, -2], b: [7, 1], dash: true },
            { t: 'point', p: [3, -2], dx: -4, dy: 12 },
            { t: 'label', p: [5, -0.5], text: '5', dx: 0, dy: -10 },
          ],
        },
      },
      {
        problem: 'Find the center and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.',
        steps: [
          'Group: $(x^2 - 6x) + (y^2 + 4y) = 12$.',
          'Complete each square: half of $-6$ is $-3$, and $(-3)^2 = 9$; half of $4$ is $2$, and $2^2 = 4$. Add both to both sides: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$.',
          'Factor: $(x - 3)^2 + (y + 2)^2 = 25$. The center is $(3, -2)$ and the radius is $\\sqrt{25} = 5$.',
        ],
        answer: 'Center $(3, -2)$, radius $5$',
      },
      {
        problem: 'A circle has a diameter with endpoints $(-1, 2)$ and $(5, 10)$. Find its equation.',
        steps: [
          'The center is the midpoint of the diameter: $\\left(\\dfrac{-1 + 5}{2}, \\dfrac{2 + 10}{2}\\right) = (2, 6)$.',
          'The diameter length is $\\sqrt{(5 - (-1))^2 + (10 - 2)^2} = \\sqrt{36 + 64} = 10$, so the radius is $\\dfrac{10}{2} = 5$.',
          'Standard form: $(x - 2)^2 + (y - 6)^2 = 25$. Check with an endpoint: $(-1 - 2)^2 + (2 - 6)^2 = 9 + 16 = 25$. ✓',
        ],
        answer: '$(x - 2)^2 + (y - 6)^2 = 25$',
        fig: {
          view: [-4, 0, 8, 12],
          grid: true,
          elems: [
            { t: 'circle', c: [2, 6], r: 5 },
            { t: 'seg', a: [-1, 2], b: [5, 10] },
            { t: 'point', p: [-1, 2], dx: -12, dy: 8 },
            { t: 'point', p: [5, 10], dx: 12, dy: -6 },
            { t: 'point', p: [2, 6], dx: 12, dy: 10 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'What are the center and radius of the circle $(x - 4)^2 + (y - 1)^2 = 9$?',
      choices: ['center $(4, 1)$, radius $3$', 'center $(-4, -1)$, radius $3$', 'center $(4, 1)$, radius $9$', 'center $(-4, -1)$, radius $9$'],
      answer: 0,
      solution: 'Match with $(x - h)^2 + (y - k)^2 = r^2$: the center is $(4, 1)$ and $r^2 = 9$ gives $r = 3$. The center $(-4, -1)$ misreads the minus signs (the form already contains them), and radius $9$ forgets that the right side is the radius squared.',
    },
    {
      q: 'Which equation describes the circle with center $(-2, 5)$ and radius $6$?',
      choices: ['$(x - 2)^2 + (y + 5)^2 = 36$', '$(x + 2)^2 + (y - 5)^2 = 6$', '$(x + 2)^2 + (y - 5)^2 = 36$', '$(x - 2)^2 + (y - 5)^2 = 36$'],
      answer: 2,
      solution: 'Substitute into the standard form: $(x - (-2))^2 + (y - 5)^2 = 6^2$, which is $(x + 2)^2 + (y - 5)^2 = 36$. A center of $-2$ produces a PLUS inside the parentheses, and the right side must be $r^2 = 36$, not $6$.',
    },
    {
      q: 'What is the radius of the circle $x^2 + y^2 = 49$?',
      choices: ['$49$', '$7$', '$\\sqrt{7}$', '$14$'],
      answer: 1,
      solution: 'This is a circle centered at the origin with $r^2 = 49$, so $r = \\sqrt{49} = 7$. The value $49$ is $r^2$, $\\sqrt{7}$ takes a square root of the radius itself, and $14$ is the diameter — twice the radius.',
    },
    {
      q: 'Is the point $(3, 4)$ inside, on, or outside the circle $x^2 + y^2 = 20$?',
      fig: {
        view: [-6, -6, 6, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: Math.sqrt(20) },
          { t: 'seg', a: [0, 0], b: [3, 4], dash: true },
          { t: 'point', p: [3, 4], dx: 12, dy: -6 },
        ],
      },
      choices: ['outside the circle', 'inside the circle', 'on the circle', 'at the center'],
      answer: 0,
      solution: 'Compare the squared distance from the center to $r^2$: the point gives $3^2 + 4^2 = 25$, and the circle has $r^2 = 20$. Since $25 > 20$, the point is farther from the origin than the circle reaches, so it lies outside. No square roots needed — comparing squares is enough.',
    },
    {
      q: 'What is the center of the circle $x^2 + y^2 - 8x + 2y + 8 = 0$?',
      choices: ['$(-4, 1)$', '$(8, -2)$', '$(4, 1)$', '$(4, -1)$'],
      answer: 3,
      solution: 'Complete the square: $(x^2 - 8x + 16) + (y^2 + 2y + 1) = -8 + 16 + 1$, so $(x - 4)^2 + (y + 1)^2 = 9$. The center is $(4, -1)$. A quick shortcut: the center coordinates are always MINUS HALF the coefficients of $x$ and $y$, so $-\\frac{-8}{2} = 4$ and $-\\frac{2}{2} = -1$. The choice $(4, 1)$ misses the sign on the $y$-coordinate.',
    },
    {
      q: 'What is the radius of the circle $x^2 + y^2 - 10x + 6y + 18 = 0$?',
      choices: ['$16$', '$4$', '$2\\sqrt{13}$', '$6$'],
      answer: 1,
      solution: 'Complete the square: $(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$, so $(x - 5)^2 + (y + 3)^2 = 16$ and $r = \\sqrt{16} = 4$. The value $16$ is $r^2$. And $2\\sqrt{13}$ comes from ADDING $18$ on the right instead of subtracting — the constant term moves across the equals sign, so it flips sign.',
    },
    {
      q: 'A circle has a diameter with endpoints $(1, 2)$ and $(7, 10)$. What is its equation?',
      fig: {
        view: [-2, 0, 10, 12],
        grid: true,
        elems: [
          { t: 'circle', c: [4, 6], r: 5 },
          { t: 'seg', a: [1, 2], b: [7, 10] },
          { t: 'point', p: [1, 2], dx: -10, dy: 10 },
          { t: 'point', p: [7, 10], dx: 12, dy: -6 },
          { t: 'point', p: [4, 6], dx: 12, dy: 8 },
        ],
      },
      choices: ['$(x - 4)^2 + (y - 6)^2 = 100$', '$(x + 4)^2 + (y + 6)^2 = 25$', '$(x - 4)^2 + (y - 6)^2 = 25$', '$(x - 3)^2 + (y - 4)^2 = 25$'],
      answer: 2,
      solution: 'Center = midpoint of the diameter: $\\left(\\frac{1 + 7}{2}, \\frac{2 + 10}{2}\\right) = (4, 6)$. Diameter length $= \\sqrt{6^2 + 8^2} = 10$, so $r = 5$ and $r^2 = 25$. The equation is $(x - 4)^2 + (y - 6)^2 = 25$. Setting the right side to $100$ uses the whole diameter as the radius — remember to halve it.',
    },
    {
      q: 'Which of these points lies ON the circle $(x - 1)^2 + (y + 2)^2 = 25$?',
      choices: ['$(4, 2)$', '$(4, -2)$', '$(3, 3)$', '$(0, 4)$'],
      answer: 0,
      solution: 'Plug each point into the left side and see which gives exactly $25$. For $(4, 2)$: $(4 - 1)^2 + (2 + 2)^2 = 9 + 16 = 25$. ✓ On the circle! For $(4, -2)$: $9 + 0 = 9$, which is less than $25$, so that point is inside. And $(3, 3)$ gives $4 + 25 = 29$, while $(0, 4)$ gives $1 + 36 = 37$ — both outside.',
    },
    {
      q: 'Where does the circle $(x - 3)^2 + (y - 4)^2 = 25$ cross the $x$-axis?',
      fig: {
        view: [-3, -2, 9, 10],
        grid: true,
        elems: [
          { t: 'circle', c: [3, 4], r: 5 },
          { t: 'point', p: [3, 4], dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], dx: -10, dy: -10 },
          { t: 'point', p: [6, 0], dx: 10, dy: -10 },
        ],
      },
      choices: ['$(-2, 0)$ and $(8, 0)$', '$(3, 0)$ only', 'It never crosses the $x$-axis', '$(0, 0)$ and $(6, 0)$'],
      answer: 3,
      solution: 'On the $x$-axis, $y = 0$. Substitute: $(x - 3)^2 + (0 - 4)^2 = 25$, so $(x - 3)^2 = 9$ and $x - 3 = \\pm 3$, giving $x = 0$ or $x = 6$. The crossings are $(0, 0)$ and $(6, 0)$. The choice $(-2, 0)$ and $(8, 0)$ walks the radius left and right from the center, ignoring that the center floats $4$ units above the axis — the crossings are pulled inward.',
    },
    {
      q: 'The circles $x^2 + y^2 = 25$ and $(x - 6)^2 + y^2 = 25$ intersect at which points?',
      fig: {
        view: [-6, -6, 12, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'circle', c: [6, 0], r: 5 },
          { t: 'point', p: [3, 4], dx: 0, dy: -12 },
          { t: 'point', p: [3, -4], dx: 0, dy: 12 },
        ],
      },
      choices: ['$(4, 3)$ and $(4, -3)$', '$(3, 4)$ and $(3, -4)$', '$(3, 0)$ only', '$(5, 0)$ and $(-5, 0)$'],
      answer: 1,
      solution: 'Both equations equal $25$, so set the left sides equal: $x^2 + y^2 = (x - 6)^2 + y^2$. The $y^2$ cancels and $x^2 = x^2 - 12x + 36$ gives $x = 3$ — the intersections lie on the vertical line halfway between the centers, which makes sense by symmetry. Substitute back: $9 + y^2 = 25$, so $y = \\pm 4$. The points are $(3, 4)$ and $(3, -4)$.',
    },
  ],
}

const s173 = {
  id: '17.3',
  title: 'Basic Analytic Geometry Problems',
  learn: {
    concepts: [
      {
        heading: 'Area by bounding box',
        body: 'To find the area of a triangle with known vertices, draw the smallest axis-aligned rectangle containing it — the bounding box. The box’s area is easy, and the leftover space between the triangle and the box splits into right triangles whose legs run along the grid. Area of triangle $=$ box $-$ corner pieces. It works for any polygon, not just triangles.',
      },
      {
        heading: 'The shoelace shortcut',
        body: 'For a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$, the area is $\\frac{1}{2}\\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\\right|$. Each $x$ is multiplied by the difference of the OTHER two $y$-values, in a cycle. The absolute value cleans up any negative — it just means you walked around the triangle clockwise instead of counterclockwise.',
      },
      {
        heading: 'Classifying triangles with distance and slope',
        body: 'Compute all three side lengths with the distance formula: two equal sides mean isosceles, all different means scalene. For right angles you have two tests: check whether $a^2 + b^2 = c^2$ for the side lengths, or check whether two sides have slopes multiplying to $-1$. Tip: compare SQUARED lengths and skip the square roots entirely.',
      },
      {
        heading: 'Collinearity and naming quadrilaterals',
        body: 'Three points are collinear exactly when the slope from the first to the second equals the slope from the second to the third — no bend means no triangle. For a quadrilateral, compute the slopes and lengths of all four sides: two pairs of parallel sides make a parallelogram, four equal sides a rhombus, right angles a rectangle, and all of the above a square.',
      },
    ],
    examples: [
      {
        problem: 'Find the area of the triangle with vertices $(0, 0)$, $(5, 1)$, and $(2, 4)$.',
        steps: [
          'Bounding box: $x$ runs from $0$ to $5$ and $y$ from $0$ to $4$, so the box has area $5 \\times 4 = 20$.',
          'Three right triangles fill the gap between the triangle and the box: legs $5$ and $1$ (area $\\frac{5}{2}$), legs $3$ and $3$ (area $\\frac{9}{2}$), and legs $2$ and $4$ (area $4$).',
          'Triangle area $= 20 - \\frac{5}{2} - \\frac{9}{2} - 4 = 9$.',
          'Shoelace check: $\\frac{1}{2}\\left|0(1 - 4) + 5(4 - 0) + 2(0 - 1)\\right| = \\frac{1}{2}\\left|20 - 2\\right| = 9$. ✓',
        ],
        answer: 'Area $= 9$',
        fig: {
          view: [-1, -1, 6, 5],
          grid: true,
          elems: [
            { t: 'poly', pts: [[0, 0], [5, 1], [2, 4]], fill: false },
            { t: 'seg', a: [0, 0], b: [5, 0], dash: true },
            { t: 'seg', a: [5, 0], b: [5, 4], dash: true },
            { t: 'seg', a: [5, 4], b: [0, 4], dash: true },
            { t: 'seg', a: [0, 4], b: [0, 0], dash: true },
            { t: 'point', p: [0, 0], dx: -10, dy: 10 },
            { t: 'point', p: [5, 1], dx: 12, dy: 6 },
            { t: 'point', p: [2, 4], dx: 0, dy: -12 },
          ],
        },
      },
      {
        problem: 'Are the points $(1, 2)$, $(4, 8)$, and $(6, 12)$ collinear?',
        steps: [
          'Slope from $(1, 2)$ to $(4, 8)$: $\\dfrac{8 - 2}{4 - 1} = 2$.',
          'Slope from $(4, 8)$ to $(6, 12)$: $\\dfrac{12 - 8}{6 - 4} = 2$.',
          'Equal slopes through a shared point mean all three points ride the same line — they are collinear. (In fact, all three satisfy $y = 2x$.)',
        ],
        answer: 'Yes — both slopes equal $2$, so the points are collinear',
      },
      {
        problem: 'Classify the triangle with vertices $(0, 0)$, $(4, 0)$, and $(2, 6)$: is it scalene, isosceles, or equilateral? Is it right?',
        steps: [
          'Squared side lengths: from $(0,0)$ to $(4,0)$ is $16$; from $(0,0)$ to $(2,6)$ is $4 + 36 = 40$; from $(4,0)$ to $(2,6)$ is $4 + 36 = 40$.',
          'Two sides have equal length ($\\sqrt{40}$ each), so the triangle is isosceles but not equilateral.',
          'Right angle check: does the largest pair satisfy the Pythagorean relation? $16 + 40 = 56 \\ne 40$ and $40 + 40 = 80 \\ne 16$ — no combination works, so there is no right angle.',
        ],
        answer: 'Isosceles, and not a right triangle',
      },
    ],
  },
  problems: [
    {
      q: 'What is the area of the triangle with vertices $(0, 0)$, $(6, 0)$, and $(0, 4)$?',
      fig: {
        view: [-1, -1, 7, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [0, 4]], fill: false },
          { t: 'right', at: [0, 0], from: [6, 0], to: [0, 4] },
          { t: 'point', p: [0, 0], dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], dx: 10, dy: 10 },
          { t: 'point', p: [0, 4], dx: -12, dy: -6 },
        ],
      },
      choices: ['$24$', '$10$', '$14$', '$12$'],
      answer: 3,
      solution: 'The legs sit right on the axes: base $6$ along the $x$-axis and height $4$ up the $y$-axis. Area $= \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$. The answer $24$ forgets the $\\frac{1}{2}$ — that is the area of the rectangle, twice the triangle.',
    },
    {
      q: 'Are the points $(2, 1)$, $(5, 7)$, and $(8, 13)$ collinear?',
      choices: [
        'Yes — the slope from each point to the next is $2$ both times',
        'No — the slopes between consecutive points are different',
        'No — the distances between them are different',
        'Yes — because all three $x$-coordinates are different',
      ],
      answer: 0,
      solution: 'Check slopes: from $(2, 1)$ to $(5, 7)$ the slope is $\\frac{6}{3} = 2$, and from $(5, 7)$ to $(8, 13)$ it is $\\frac{6}{3} = 2$. Same slope through a shared point means one straight line. Note that unequal distances would NOT rule out collinearity — points on a line can be spaced however they like; slope is the right test.',
    },
    {
      q: 'What is the perimeter of the triangle with vertices $(1, 1)$, $(4, 1)$, and $(4, 5)$?',
      choices: ['$6$', '$12$', '$7$', '$13$'],
      answer: 1,
      solution: 'The side from $(1, 1)$ to $(4, 1)$ is horizontal with length $3$; the side from $(4, 1)$ to $(4, 5)$ is vertical with length $4$. The third side is the hypotenuse: $\\sqrt{3^2 + 4^2} = 5$. Perimeter $= 3 + 4 + 5 = 12$. (The value $6$ is the area of this triangle, and $7$ counts only the two legs.)',
    },
    {
      q: 'The triangle with vertices $(0, 0)$, $(6, 0)$, and $(3, 4)$ is best described as:',
      fig: {
        view: [-1, -1, 7, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [3, 4]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], dx: 10, dy: 10 },
          { t: 'point', p: [3, 4], dx: 0, dy: -12 },
        ],
      },
      choices: ['equilateral', 'scalene', 'isosceles', 'right'],
      answer: 2,
      solution: 'Squared side lengths: base $= 36$; left side $= 3^2 + 4^2 = 25$; right side $= 3^2 + 4^2 = 25$. Two sides of length $5$ and one of length $6$: isosceles, but not equilateral. Right angle check: $25 + 25 = 50 \\ne 36$, so no right angle. The apex $(3, 4)$ sits exactly above the midpoint of the base — the giveaway symmetry of an isosceles triangle.',
    },
    {
      q: 'Use the shoelace formula to find the area of the triangle with vertices $(1, 0)$, $(5, 2)$, and $(2, 6)$.',
      fig: {
        view: [-1, -1, 6, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 0], [5, 2], [2, 6]], fill: false },
          { t: 'point', p: [1, 0], dx: -8, dy: 10 },
          { t: 'point', p: [5, 2], dx: 12, dy: 6 },
          { t: 'point', p: [2, 6], dx: 0, dy: -12 },
        ],
      },
      choices: ['$11$', '$22$', '$13$', '$9$'],
      answer: 0,
      solution: 'Shoelace: $\\frac{1}{2}\\left|1(2 - 6) + 5(6 - 0) + 2(0 - 2)\\right| = \\frac{1}{2}\\left|-4 + 30 - 4\\right| = \\frac{22}{2} = 11$. The answer $22$ stops before the final divide-by-two — the shoelace always ends with a $\\frac{1}{2}$.',
    },
    {
      q: 'Triangle $ABC$ has vertices $A = (-1, 1)$, $B = (2, 3)$, and $C = (4, 0)$. At which vertex is the right angle?',
      fig: {
        view: [-2, -1, 5, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-1, 1], [2, 3], [4, 0]], fill: false },
          { t: 'point', p: [-1, 1], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [2, 3], label: 'B', dx: 4, dy: -12 },
          { t: 'point', p: [4, 0], label: 'C', dx: 10, dy: 10 },
        ],
      },
      choices: ['$A$', '$C$', 'There is no right angle', '$B$'],
      answer: 3,
      solution: 'Slopes: $\\overline{AB}$ has slope $\\frac{3 - 1}{2 - (-1)} = \\frac{2}{3}$, and $\\overline{BC}$ has slope $\\frac{0 - 3}{4 - 2} = -\\frac{3}{2}$. Their product is $\\frac{2}{3} \\cdot \\left(-\\frac{3}{2}\\right) = -1$, so $\\overline{AB} \\perp \\overline{BC}$. Those two sides meet at $B$, so the right angle is at $B$.',
    },
    {
      q: 'The quadrilateral with vertices $(0, 0)$, $(5, 0)$, $(7, 3)$, $(2, 3)$ (in order) is a:',
      fig: {
        view: [-1, -1, 8, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [7, 3], [2, 3]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], dx: 10, dy: 10 },
          { t: 'point', p: [7, 3], dx: 10, dy: -8 },
          { t: 'point', p: [2, 3], dx: -10, dy: -8 },
        ],
      },
      choices: ['rectangle', 'parallelogram', 'rhombus', 'trapezoid with only one pair of parallel sides'],
      answer: 1,
      solution: 'Opposite sides: the bottom and top both have slope $0$ and length $5$; the two slanted sides both have slope $\\frac{3}{2}$ and length $\\sqrt{4 + 9} = \\sqrt{13}$. Two pairs of parallel sides make a parallelogram. It is not a rectangle (slope $0$ and slope $\\frac{3}{2}$ are not perpendicular) and not a rhombus ($5 \\ne \\sqrt{13}$).',
    },
    {
      q: 'The quadrilateral with vertices $(0, 0)$, $(5, 0)$, $(8, 4)$, $(3, 4)$ (in order) is a:',
      fig: {
        view: [-1, -1, 9, 5],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [8, 4], [3, 4]], fill: false },
          { t: 'point', p: [0, 0], dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], dx: 10, dy: 10 },
          { t: 'point', p: [8, 4], dx: 10, dy: -8 },
          { t: 'point', p: [3, 4], dx: -10, dy: -8 },
        ],
      },
      choices: ['square', 'rectangle', 'rhombus', 'kite that is not a rhombus'],
      answer: 2,
      solution: 'All four side lengths: bottom $= 5$; from $(5, 0)$ to $(8, 4)$ is $\\sqrt{9 + 16} = 5$; top $= 5$; from $(3, 4)$ back to $(0, 0)$ is $\\sqrt{9 + 16} = 5$. Four equal sides make a rhombus. But the sides have slopes $0$ and $\\frac{4}{3}$, which are not perpendicular, so there are no right angles — not a square.',
    },
    {
      q: 'What is the area of the triangle with vertices $A = (-2, 1)$, $B = (3, 4)$, and $C = (1, -3)$?',
      choices: ['$\\dfrac{29}{2}$', '$29$', '$15$', '$\\dfrac{27}{2}$'],
      answer: 0,
      solution: 'Shoelace: $\\frac{1}{2}\\left|(-2)(4 - (-3)) + 3((-3) - 1) + 1(1 - 4)\\right| = \\frac{1}{2}\\left|-14 - 12 - 3\\right| = \\frac{29}{2}$. All three terms came out negative, but the absolute value rescues us — a negative total only means we listed the vertices clockwise. Forgetting the $\\frac{1}{2}$ gives $29$.',
    },
    {
      q: 'For what value of $t$ is the point $(t, 7)$ collinear with $(1, 1)$ and $(3, 4)$?',
      fig: {
        view: [-2, -3, 7, 8],
        grid: true,
        elems: [
          { t: 'line', a: [-1, -2], b: [5, 7] },
          { t: 'seg', a: [0, 7], b: [6, 7], dash: true },
          { t: 'point', p: [1, 1], dx: 12, dy: 6 },
          { t: 'point', p: [3, 4], dx: 12, dy: 6 },
        ],
      },
      choices: ['$4$', '$\\dfrac{9}{2}$', '$5$', '$6$'],
      answer: 2,
      solution: 'The line through $(1, 1)$ and $(3, 4)$ has slope $\\frac{4 - 1}{3 - 1} = \\frac{3}{2}$. For $(t, 7)$ to join the line, the slope from $(1, 1)$ to $(t, 7)$ must also be $\\frac{3}{2}$: $\\frac{7 - 1}{t - 1} = \\frac{3}{2}$ gives $12 = 3(t - 1)$, so $t = 5$. Check from the other point: $\\frac{7 - 4}{5 - 3} = \\frac{3}{2}$. ✓',
    },
  ],
}

const s174 = {
  id: '17.4',
  title: 'Proofs with Analytic Geometry',
  learn: {
    concepts: [
      {
        heading: 'You choose where the axes go',
        body: 'A coordinate proof starts with a powerful free move: YOU place the axes. Put a vertex at the origin and a side along the $x$-axis, and half your coordinates become zeros. The shape does not care where the axes are — so park them where the algebra is easiest.',
      },
      {
        heading: 'Letters make it a proof',
        body: 'Placing a rectangle at $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$ uses letters, not numbers — and that is the whole point. A computation with $a$ and $b$ works for EVERY rectangle at once, so its conclusion is a theorem. If you used $(0,0)$, $(5, 0)$, $(5, 3)$, $(0, 3)$ instead, you would only prove the fact for one particular rectangle.',
      },
      {
        heading: 'The $2a$ trick keeps midpoints clean',
        body: 'If your proof will take midpoints, name the coordinates with even letters: use $(2a, 0)$ and $(2b, 2c)$ instead of $(a, 0)$ and $(b, c)$. Then midpoints come out as $(a, 0)$ and $(a + b, c)$ — no fractions anywhere. It is pure bookkeeping, but it keeps long computations readable and mistake-free.',
      },
      {
        heading: 'What the finished proof looks like',
        body: 'A coordinate proof has three beats: place the figure with well-chosen general coordinates, compute the quantities in question (lengths, slopes, midpoints) with the formulas from this chapter, and observe that the algebra forces the conclusion. Distance formula shows segments are equal, matching slopes show lines are parallel, a shared midpoint shows diagonals bisect each other.',
      },
    ],
    examples: [
      {
        problem: 'Prove that the diagonals of any rectangle have equal length.',
        steps: [
          'Place the rectangle with a vertex at the origin and sides on the axes: $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$.',
          'One diagonal runs from $(0, 0)$ to $(a, b)$: length $\\sqrt{(a - 0)^2 + (b - 0)^2} = \\sqrt{a^2 + b^2}$.',
          'The other runs from $(a, 0)$ to $(0, b)$: length $\\sqrt{(0 - a)^2 + (b - 0)^2} = \\sqrt{a^2 + b^2}$.',
          'The two lengths are identical expressions in $a$ and $b$, so the diagonals of every rectangle are equal. That is the entire proof — two distance computations.',
        ],
        answer: 'Both diagonals have length $\\sqrt{a^2 + b^2}$, so they are equal',
      },
      {
        problem: 'Prove the Midsegment Theorem: the segment connecting the midpoints of two sides of a triangle is parallel to the third side and half its length.',
        steps: [
          'Place the triangle at $(0, 0)$, $(2a, 0)$, $(2b, 2c)$ — the doubled letters are about to pay off.',
          'Midpoint $M$ of the side from $(0, 0)$ to $(2b, 2c)$ is $(b, c)$; midpoint $N$ of the side from $(2a, 0)$ to $(2b, 2c)$ is $(a + b, c)$. No fractions!',
          'Both $M$ and $N$ have $y$-coordinate $c$, so $\\overline{MN}$ is horizontal — parallel to the base along the $x$-axis.',
          'Its length is $(a + b) - b = a$, exactly half the base length $2a$. Both claims proved at once.',
        ],
        answer: '$\\overline{MN}$ is horizontal (parallel to the base) with length $a = \\frac{1}{2}(2a)$',
        fig: {
          view: [-1, -1, 7, 5],
          grid: true,
          elems: [
            { t: 'poly', pts: [[0, 0], [6, 0], [2, 4]], fill: false },
            { t: 'seg', a: [1, 2], b: [4, 2] },
            { t: 'point', p: [0, 0], dx: -8, dy: 12 },
            { t: 'point', p: [6, 0], dx: 10, dy: 12 },
            { t: 'point', p: [2, 4], dx: 0, dy: -12 },
            { t: 'label', p: [0, 0], text: '(0, 0)', dx: -6, dy: 26 },
            { t: 'label', p: [6, 0], text: '(2a, 0)', dx: 8, dy: 26 },
            { t: 'label', p: [2, 4], text: '(2b, 2c)', dx: 0, dy: -26 },
            { t: 'point', p: [1, 2], label: 'M', dx: -12, dy: -6 },
            { t: 'point', p: [4, 2], label: 'N', dx: 12, dy: -6 },
          ],
        },
      },
      {
        problem: 'Prove that the midpoints of the sides of ANY quadrilateral form a parallelogram.',
        steps: [
          'Place the quadrilateral at $(0, 0)$, $(2a, 0)$, $(2b, 2c)$, $(2d, 2e)$, taken in order around the figure.',
          'The four midpoints are $P = (a, 0)$, $Q = (a + b, c)$, $R = (b + d, c + e)$, and $S = (d, e)$.',
          'Compare opposite sides of $PQRS$. Going $P \\to Q$ moves by $(b, c)$; going $S \\to R$ moves by $((b + d) - d, (c + e) - e) = (b, c)$ — the same move!',
          'Side $\\overline{PQ}$ is parallel to $\\overline{SR}$ and equal in length, and one such pair is enough to force a parallelogram. Notice the quadrilateral could be lopsided in any way — the letters never cared.',
        ],
        answer: '$\\overline{PQ}$ and $\\overline{SR}$ are both a shift by $(b, c)$, so $PQRS$ is a parallelogram',
      },
    ],
  },
  problems: [
    {
      q: 'You want to prove a fact about all rectangles. Which placement of the vertices is the standard smart choice?',
      fig: {
        view: [-1, -1, 6, 4],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [5, 3], [0, 3]], fill: false },
          { t: 'label', p: [0, 0], text: '(0, 0)', dx: -4, dy: 14 },
          { t: 'label', p: [5, 0], text: '(a, 0)', dx: 6, dy: 14 },
          { t: 'label', p: [5, 3], text: '(a, b)', dx: 6, dy: -10 },
          { t: 'label', p: [0, 3], text: '(0, b)', dx: -4, dy: -10 },
        ],
      },
      choices: [
        '$(1, 1)$, $(a, 1)$, $(a, b)$, $(1, b)$',
        '$(0, 0)$, $(a, 0)$, $(b, a)$, $(0, b)$',
        '$(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$',
        '$(0, 0)$, $(a, a)$, $(a, b)$, $(b, b)$',
      ],
      answer: 2,
      solution: 'Put one corner at the origin and the sides along the axes: $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$. Opposite sides are automatically parallel and the angles are automatically right angles, with the fewest letters possible. The other placements either add clutter (starting at $(1,1)$) or do not even describe a rectangle.',
    },
    {
      q: 'A rectangle has vertices $(0, 0)$, $(a, 0)$, $(a, b)$, $(0, b)$. How long is the diagonal from $(0, 0)$ to $(a, b)$?',
      choices: ['$a + b$', '$\\sqrt{a^2 + b^2}$', '$a^2 + b^2$', '$\\sqrt{a^2 - b^2}$'],
      answer: 1,
      solution: 'The distance formula gives $\\sqrt{(a - 0)^2 + (b - 0)^2} = \\sqrt{a^2 + b^2}$ — the Pythagorean Theorem with legs $a$ and $b$. The expression $a^2 + b^2$ is the squared length, and $a + b$ would be walking along two sides instead of cutting across.',
    },
    {
      q: 'In coordinate proofs about midpoints, why do we label a vertex $(2a, 0)$ rather than $(a, 0)$?',
      choices: [
        'So the midpoints have coordinates without fractions',
        'Because midpoints only exist when coordinates are even numbers',
        'Because the distance formula requires doubled coordinates',
        'To make the triangle twice as large',
      ],
      answer: 0,
      solution: 'Taking a midpoint divides by $2$, so starting from $(2a, 0)$ produces the clean midpoint $(a, 0)$ instead of $\\left(\\frac{a}{2}, 0\\right)$. It changes nothing about the proof’s validity — $2a$ is just as general as $a$, since $a$ can be any number. It is purely a trick to keep the algebra tidy.',
    },
    {
      q: 'A right triangle has legs on the axes: vertices $(0, 0)$, $(2a, 0)$, and $(0, 2b)$. The midpoint of the hypotenuse is $M = (a, b)$. What is the distance from $M$ to the origin?',
      choices: ['$a + b$', '$\\dfrac{a + b}{2}$', '$a^2 + b^2$', '$\\sqrt{a^2 + b^2}$'],
      answer: 3,
      solution: 'Distance from $(a, b)$ to $(0, 0)$ is $\\sqrt{a^2 + b^2}$. Here is the beautiful part: the distance from $M$ to $(2a, 0)$ is $\\sqrt{(2a - a)^2 + b^2} = \\sqrt{a^2 + b^2}$ too, and likewise to $(0, 2b)$. The midpoint of the hypotenuse is equidistant from ALL THREE vertices — it is the center of the circle through them.',
    },
    {
      q: 'A parallelogram has three vertices at $(0, 0)$, $(a, 0)$, and $(b, c)$, with $(b, c)$ opposite neither of them. Which point completes the parallelogram as the vertex opposite $(0, 0)$... that is, adjacent to both $(a, 0)$ and $(b, c)$?',
      choices: ['$(a - b, c)$', '$(a + b, c)$', '$(a + c, b)$', '$(b - a, c)$'],
      answer: 1,
      solution: 'In a parallelogram, the fourth vertex is reached from $(a, 0)$ by the same shift that goes from $(0, 0)$ to $(b, c)$ — a move of $(b, c)$. So the fourth vertex is $(a + b, c)$. Check: the top side from $(b, c)$ to $(a + b, c)$ is horizontal with length $a$, matching the bottom side exactly.',
    },
    {
      q: 'You are proving a theorem about an isosceles triangle. Which placement makes its symmetry most visible?',
      choices: [
        'Base vertices $(-a, 0)$ and $(a, 0)$, apex $(0, b)$',
        'Vertices $(0, 0)$, $(a, 0)$, and $(b, c)$',
        'Vertices $(0, 0)$, $(a, 0)$, and $(a, b)$',
        'Vertices $(1, 1)$, $(a, 1)$, and $(b, c)$',
      ],
      answer: 0,
      solution: 'With the base endpoints at $(\\pm a, 0)$ and the apex on the $y$-axis at $(0, b)$, the two equal sides have lengths $\\sqrt{a^2 + b^2}$ each — visibly equal — and the $y$-axis is the axis of symmetry. The placement $(0, 0)$, $(a, 0)$, $(b, c)$ is a fine GENERAL triangle, but it does not build in the isosceles condition.',
    },
    {
      q: 'Take any quadrilateral and connect the midpoints of its four sides, in order. The new quadrilateral is always a:',
      fig: {
        view: [-1, -1, 9, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [8, 4], [2, 6]], fill: false },
          { t: 'poly', pts: [[3, 0], [7, 2], [5, 5], [1, 3]], fill: false },
          { t: 'point', p: [3, 0], dx: 0, dy: 14 },
          { t: 'point', p: [7, 2], dx: 12, dy: 0 },
          { t: 'point', p: [5, 5], dx: 4, dy: -12 },
          { t: 'point', p: [1, 3], dx: -12, dy: 0 },
        ],
      },
      choices: ['rectangle', 'rhombus', 'parallelogram', 'square'],
      answer: 2,
      solution: 'This is the midpoint-quadrilateral theorem we proved with coordinates: placing the quadrilateral at $(0,0)$, $(2a, 0)$, $(2b, 2c)$, $(2d, 2e)$, opposite sides of the midpoint figure turn out to be identical shifts, so it is always a parallelogram. It is usually NOT a rectangle or rhombus — those require special quadrilaterals to start from. (Slick alternative: each side of the midpoint figure is a midsegment of a triangle formed by a diagonal, so opposite sides are both parallel to that diagonal.)',
    },
    {
      q: 'To prove the diagonals of a rectangle are congruent using coordinates, what should you compute?',
      choices: [
        'The slopes of both diagonals, showing they are negative reciprocals',
        'The midpoint of one diagonal only',
        'The areas of the four triangles the diagonals create',
        'The lengths of both diagonals, showing each equals $\\sqrt{a^2 + b^2}$',
      ],
      answer: 3,
      solution: '“Congruent segments” means equal lengths, so the natural tool is the distance formula applied to both diagonals — each gives $\\sqrt{a^2 + b^2}$, and the proof is done. Slopes prove facts about angles and parallelism, not lengths; and one midpoint alone compares nothing.',
    },
    {
      q: 'A triangle has vertices $(0, 0)$, $(2a, 0)$, and $(2b, 2c)$. What is the midpoint of the side connecting $(2a, 0)$ and $(2b, 2c)$?',
      choices: ['$(a - b, c)$', '$(a + b, c)$', '$(a + b, 2c)$', '$(2a + 2b, 2c)$'],
      answer: 1,
      solution: 'Average each coordinate: $\\left(\\frac{2a + 2b}{2}, \\frac{0 + 2c}{2}\\right) = (a + b, c)$. The doubled letters were chosen precisely so this comes out fraction-free. The choice $(2a + 2b, 2c)$ is the sum without dividing, and $(a + b, 2c)$ halves one coordinate but forgets the other.',
    },
    {
      q: 'A parallelogram has vertices $(0, 0)$, $(a, 0)$, $(a + b, c)$, $(b, c)$. To show its diagonals bisect each other, you compute the midpoints of both diagonals. What do both midpoints equal?',
      choices: [
        '$\\left(\\dfrac{a + b}{2}, \\dfrac{c}{2}\\right)$',
        '$\\left(\\dfrac{a}{2}, \\dfrac{b}{2}\\right)$',
        '$(a + b, c)$',
        '$\\left(\\dfrac{a - b}{2}, \\dfrac{c}{2}\\right)$',
      ],
      answer: 0,
      solution: 'One diagonal joins $(0, 0)$ to $(a + b, c)$: midpoint $\\left(\\frac{a + b}{2}, \\frac{c}{2}\\right)$. The other joins $(a, 0)$ to $(b, c)$: midpoint $\\left(\\frac{a + b}{2}, \\frac{c}{2}\\right)$ — the very same point. Since each diagonal passes through the other’s midpoint, they cut each other in half. One shared midpoint, whole theorem proved.',
    },
  ],
}

const s175 = {
  id: '17.5',
  title: 'Distance Between a Point and a Line',
  learn: {
    concepts: [
      {
        heading: 'Distance means the perpendicular',
        body: 'The distance from a point to a line is the length of the perpendicular segment from the point to the line — the shortest possible path. Any other segment from the point to the line is a hypotenuse of some right triangle whose leg is the perpendicular, and a hypotenuse is always longer than a leg.',
      },
      {
        heading: 'The area method',
        body: 'Here is a lovely trick: build a triangle whose base sits on the line and whose apex is your point. Then the distance you want is the triangle’s height, and height $= \\dfrac{2 \\times \\text{area}}{\\text{base}}$. If you can find the area some other way (bounding box, shoelace, legs on the axes), the distance falls right out.',
      },
      {
        heading: 'The intersection method',
        body: 'More direct, more algebra: write the equation of the perpendicular line through your point (negative reciprocal slope), find where it crosses the original line by solving the system, then use the distance formula between your point and that foot. Three steps you already know, chained together.',
      },
      {
        heading: 'Parallel lines and a general shortcut',
        body: 'The distance between two parallel lines is measured along their common perpendicular: pick any convenient point on one line and find its distance to the other. Both methods above compress into one formula worth knowing: the distance from $(x_0, y_0)$ to the line $ax + by + c = 0$ is $\\dfrac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$.',
      },
    ],
    examples: [
      {
        problem: 'Find the distance from the origin to the line $3x + 4y = 12$ using the area method.',
        steps: [
          'The line crosses the axes at $(4, 0)$ and $(0, 3)$. Together with the origin these form a right triangle with legs $4$ and $3$, so its area is $\\frac{1}{2} \\cdot 4 \\cdot 3 = 6$.',
          'Now re-read the SAME triangle with the slanted side as the base: that base has length $\\sqrt{4^2 + 3^2} = 5$, and its height is exactly the distance from the origin to the line.',
          'Same triangle, same area: $\\frac{1}{2} \\cdot 5 \\cdot h = 6$, so $h = \\dfrac{12}{5}$.',
        ],
        answer: 'Distance $= \\dfrac{12}{5}$',
        fig: {
          view: [-1, -1, 5, 4],
          grid: true,
          elems: [
            { t: 'poly', pts: [[0, 0], [4, 0], [0, 3]], fill: false },
            { t: 'seg', a: [0, 0], b: [1.44, 1.92], dash: true },
            { t: 'right', at: [1.44, 1.92], from: [0, 0], to: [4, 0] },
            { t: 'point', p: [0, 0], dx: -10, dy: 10 },
            { t: 'point', p: [4, 0], dx: 10, dy: 10 },
            { t: 'point', p: [0, 3], dx: -10, dy: -6 },
            { t: 'label', p: [0.72, 0.96], text: 'h', dx: 12, dy: 4 },
          ],
        },
      },
      {
        problem: 'Find the distance from $(3, -1)$ to the line $y = x + 1$ by intersecting the perpendicular.',
        steps: [
          'The line has slope $1$, so the perpendicular through $(3, -1)$ has slope $-1$: $y - (-1) = -(x - 3)$, which is $y = -x + 2$.',
          'Find the foot — where the two lines cross: $x + 1 = -x + 2$ gives $x = \\frac{1}{2}$, so the foot is $\\left(\\frac{1}{2}, \\frac{3}{2}\\right)$.',
          'Distance from $(3, -1)$ to $\\left(\\frac{1}{2}, \\frac{3}{2}\\right)$: $\\sqrt{\\left(\\frac{5}{2}\\right)^2 + \\left(\\frac{5}{2}\\right)^2} = \\frac{5}{2}\\sqrt{2} = \\frac{5\\sqrt{2}}{2}$.',
          'Shortcut check: the line is $x - y + 1 = 0$, so $\\frac{|3 - (-1) + 1|}{\\sqrt{1^2 + 1^2}} = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$. ✓',
        ],
        answer: 'Distance $= \\dfrac{5\\sqrt{2}}{2}$',
      },
      {
        problem: 'Find the distance between the parallel lines $y = 2x + 1$ and $y = 2x + 6$.',
        steps: [
          'Both lines have slope $2$, so they are parallel and stay a constant distance apart. Warning: that distance is NOT $6 - 1 = 5$ — the gap of $5$ is measured vertically, but distance is measured perpendicular to the lines.',
          'Pick an easy point on the first line: $(0, 1)$. Now find its distance to $2x - y + 6 = 0$.',
          'Distance $= \\dfrac{|2(0) - 1 + 6|}{\\sqrt{2^2 + (-1)^2}} = \\dfrac{5}{\\sqrt{5}} = \\sqrt{5}$. The steeper the lines, the more the true distance shrinks below the vertical gap.',
        ],
        answer: 'Distance $= \\sqrt{5}$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the distance from $(0, 0)$ to the vertical line $x = 7$?',
      choices: ['$\\sqrt{7}$', '$7$', '$49$', '$14$'],
      answer: 1,
      solution: 'The perpendicular from the origin to a vertical line is horizontal: it runs from $(0, 0)$ straight over to $(7, 0)$, a distance of $7$. Vertical and horizontal lines are the friendly cases — the distance is just a coordinate difference.',
    },
    {
      q: 'What is the distance from $(2, 3)$ to the horizontal line $y = -1$?',
      choices: ['$2$', '$3$', '$5$', '$4$'],
      answer: 3,
      solution: 'Drop straight down from $(2, 3)$ to $(2, -1)$. The vertical gap is $3 - (-1) = 4$. Careful with the subtraction of a negative — the answer $2$ comes from computing $3 - 1$.',
    },
    {
      q: 'Using the area method, find the distance from the origin to the line $3x + 4y = 24$.',
      fig: {
        view: [-1, -1, 9, 7],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [0, 6]], fill: false },
          { t: 'seg', a: [0, 0], b: [2.88, 3.84], dash: true },
          { t: 'point', p: [8, 0], dx: 10, dy: 10 },
          { t: 'point', p: [0, 6], dx: -10, dy: -6 },
        ],
      },
      choices: ['$\\dfrac{24}{5}$', '$\\dfrac{12}{5}$', '$5$', '$6$'],
      answer: 0,
      solution: 'The line meets the axes at $(8, 0)$ and $(0, 6)$, making a right triangle with the origin of area $\\frac{1}{2} \\cdot 8 \\cdot 6 = 24$. The slanted base has length $\\sqrt{64 + 36} = 10$, so the height from the origin is $\\frac{2 \\cdot 24}{10} = \\frac{24}{5}$. That height IS the distance we want.',
    },
    {
      q: 'What is the distance from the point $(4, 0)$ to the line $y = x$?',
      choices: ['$4$', '$\\sqrt{2}$', '$2\\sqrt{2}$', '$2$'],
      answer: 2,
      solution: 'The perpendicular through $(4, 0)$ has slope $-1$: $y = -x + 4$. It meets $y = x$ where $x = -x + 4$, so the foot is $(2, 2)$. Distance: $\\sqrt{(4 - 2)^2 + (0 - 2)^2} = \\sqrt{8} = 2\\sqrt{2}$. The answer $4$ measures along the $x$-axis to the origin, which is a slanted trip relative to the line — longer than the true perpendicular distance.',
    },
    {
      q: 'What is the distance between the parallel lines $y = -x + 2$ and $y = -x + 8$?',
      choices: ['$6$', '$3\\sqrt{2}$', '$3$', '$6\\sqrt{2}$'],
      answer: 1,
      solution: 'Take the point $(0, 2)$ on the first line, and write the second as $x + y - 8 = 0$. Distance $= \\frac{|0 + 2 - 8|}{\\sqrt{1 + 1}} = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$. The vertical gap between the lines is $6$, but the lines are tilted at $45°$, so the true perpendicular distance is shorter by a factor of $\\frac{\\sqrt{2}}{2}$.',
    },
    {
      q: 'Which point on the line $y = 2x$ is closest to the point $(5, 0)$?',
      fig: {
        view: [-2, -3, 7, 7],
        grid: true,
        elems: [
          { t: 'line', a: [-1, -2], b: [3, 6] },
          { t: 'seg', a: [5, 0], b: [1, 2], dash: true },
          { t: 'point', p: [5, 0], dx: 10, dy: 10 },
          { t: 'point', p: [1, 2], dx: -12, dy: -6 },
        ],
      },
      choices: ['$(1, 2)$', '$(2, 4)$', '$\\left(\\dfrac{5}{2}, 5\\right)$', '$(2, 1)$'],
      answer: 0,
      solution: 'The closest point is the foot of the perpendicular. The perpendicular through $(5, 0)$ has slope $-\\frac{1}{2}$: $y = -\\frac{1}{2}(x - 5)$. Set equal to $y = 2x$: $2x = -\\frac{1}{2}x + \\frac{5}{2}$, so $\\frac{5}{2}x = \\frac{5}{2}$ and $x = 1$. The foot is $(1, 2)$ — and a quick check shows the segment from $(5, 0)$ to $(1, 2)$ has slope $-\\frac{1}{2}$, perpendicular to the line as it must be.',
    },
    {
      q: 'A triangle has vertices $(0, 0)$, $(5, 0)$, and $(0, 12)$. What is the distance from the origin to the line through $(5, 0)$ and $(0, 12)$?',
      choices: ['$5$', '$\\dfrac{30}{13}$', '$\\dfrac{12}{5}$', '$\\dfrac{60}{13}$'],
      answer: 3,
      solution: 'Area method: the right triangle has legs $5$ and $12$, so its area is $30$ and its hypotenuse is $\\sqrt{25 + 144} = 13$. Reading the hypotenuse as the base, the height from the origin is $\\frac{2 \\cdot 30}{13} = \\frac{60}{13}$. This “legs times legs over hypotenuse” pattern shows up constantly in right triangles: $\\frac{5 \\cdot 12}{13}$.',
    },
    {
      q: 'What is the distance from the point $(2, 7)$ to the line $4x - 3y = 0$?',
      choices: ['$\\dfrac{13}{25}$', '$\\dfrac{29}{5}$', '$\\dfrac{13}{5}$', '$13$'],
      answer: 2,
      solution: 'Use the shortcut formula with $a = 4$, $b = -3$, $c = 0$: distance $= \\frac{|4(2) - 3(7)|}{\\sqrt{4^2 + (-3)^2}} = \\frac{|8 - 21|}{5} = \\frac{13}{5}$. Forgetting the square root in the denominator gives $\\frac{13}{25}$, and dropping the denominator entirely gives $13$ — the numerator alone is not a distance.',
    },
    {
      q: 'What is the distance between the parallel lines $3x + 4y = 10$ and $3x + 4y = 30$?',
      choices: ['$4$', '$20$', '$2$', '$5$'],
      answer: 0,
      solution: 'Pick a point on the first line: $(2, 1)$ works since $3(2) + 4(1) = 10$. Its distance to $3x + 4y - 30 = 0$ is $\\frac{|3(2) + 4(1) - 30|}{\\sqrt{9 + 16}} = \\frac{20}{5} = 4$. In general, parallel lines $ax + by = c_1$ and $ax + by = c_2$ are $\\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}$ apart — the gap of $20$ in the constants gets divided by $5$.',
    },
    {
      q: 'What is the shortest distance from the circle $x^2 + y^2 = 9$ to the line $3x + 4y = 25$?',
      fig: {
        view: [-5, -5, 9, 9],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'line', a: [-1, 7], b: [7, 1] },
          { t: 'seg', a: [0, 0], b: [3, 4], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 10 },
          { t: 'point', p: [3, 4], dx: 12, dy: 4 },
        ],
      },
      choices: ['$5$', '$2$', '$\\dfrac{22}{5}$', '$8$'],
      answer: 1,
      solution: 'First find the distance from the CENTER to the line: $\\frac{|3(0) + 4(0) - 25|}{\\sqrt{9 + 16}} = \\frac{25}{5} = 5$. The circle reaches $3$ units toward the line along that same perpendicular, so the gap that remains is $5 - 3 = 2$. (The answer $5$ measures from the center, forgetting that the circle itself gets closer.)',
    },
  ],
}

const s176 = {
  id: '17.6',
  title: 'Advanced Analytic Geometry Problems',
  learn: {
    concepts: [
      {
        heading: 'Lines meet circles through substitution',
        body: 'To find where a line meets a circle, substitute the line’s expression for $y$ into the circle’s equation. Out pops a quadratic in $x$, and everything you know about quadratics applies: two roots mean the line crosses at two points, one repeated root means tangent, no real roots means the line misses entirely.',
      },
      {
        heading: 'Tangency two ways',
        body: 'A line is tangent to a circle exactly when they touch at ONE point. Algebraically: the substitution quadratic has discriminant $0$. Geometrically: the distance from the center to the line equals the radius exactly. Both tests always agree — pick whichever is less work, and use the other as a check.',
      },
      {
        heading: 'Two conditions, one system',
        body: 'A point “on line $\\ell$ AND equidistant from $A$ and $B$” must satisfy two equations at once. Translate each condition into an equation — equidistant from two points means: on their perpendicular bisector — then solve the system. Each geometric condition typically cuts the possibilities down; two conditions usually pin down finitely many points.',
      },
      {
        heading: 'Describing loci',
        body: 'A locus is the set of ALL points satisfying a condition. The classics: points at fixed distance $r$ from a center form a circle; points equidistant from two fixed points form the perpendicular bisector of the segment joining them. When a problem says “describe all points such that...”, expect the answer to be a familiar curve, not a list.',
      },
    ],
    examples: [
      {
        problem: 'Find the points where the line $y = x + 1$ meets the circle $x^2 + y^2 = 25$.',
        steps: [
          'Substitute $y = x + 1$: $x^2 + (x + 1)^2 = 25$, which expands to $2x^2 + 2x - 24 = 0$, or $x^2 + x - 12 = 0$.',
          'Factor: $(x + 4)(x - 3) = 0$, so $x = 3$ or $x = -4$.',
          'Feed each back into the line: $x = 3$ gives $(3, 4)$; $x = -4$ gives $(-4, -3)$. Check on the circle: $9 + 16 = 25$ ✓ and $16 + 9 = 25$ ✓.',
        ],
        answer: 'The line crosses the circle at $(3, 4)$ and $(-4, -3)$',
        fig: {
          view: [-7, -7, 7, 7],
          grid: true,
          elems: [
            { t: 'circle', c: [0, 0], r: 5 },
            { t: 'line', a: [-5, -4], b: [4, 5] },
            { t: 'point', p: [3, 4], dx: 12, dy: -4 },
            { t: 'point', p: [-4, -3], dx: -12, dy: 8 },
          ],
        },
      },
      {
        problem: 'For which values of $k$ is the line $y = x + k$ tangent to the circle $x^2 + y^2 = 8$?',
        steps: [
          'Substitute: $x^2 + (x + k)^2 = 8$ becomes $2x^2 + 2kx + (k^2 - 8) = 0$.',
          'Tangency means exactly one solution, so the discriminant is zero: $(2k)^2 - 4 \\cdot 2 \\cdot (k^2 - 8) = 0$.',
          'That is $4k^2 - 8k^2 + 64 = 0$, so $k^2 = 16$ and $k = \\pm 4$.',
          'Geometric check: the distance from $(0,0)$ to $x - y + k = 0$ is $\\frac{|k|}{\\sqrt{2}}$, and setting it equal to $r = 2\\sqrt{2}$ gives $|k| = 4$. ✓ Both methods agree.',
        ],
        answer: '$k = 4$ or $k = -4$',
      },
      {
        problem: 'Find the point on the $x$-axis that is equidistant from $A = (1, 2)$ and $B = (5, 4)$.',
        steps: [
          'Equidistant from $A$ and $B$ means: on the perpendicular bisector of $\\overline{AB}$. Midpoint: $(3, 3)$; slope of $\\overline{AB}$: $\\frac{1}{2}$; so the bisector is $y - 3 = -2(x - 3)$, or $y = -2x + 9$.',
          'The second condition is $y = 0$ (the $x$-axis). Solve: $0 = -2x + 9$ gives $x = \\frac{9}{2}$.',
          'The point is $\\left(\\frac{9}{2}, 0\\right)$. Check both distances squared: to $A$: $\\left(\\frac{7}{2}\\right)^2 + 4 = \\frac{65}{4}$; to $B$: $\\left(\\frac{1}{2}\\right)^2 + 16 = \\frac{65}{4}$. ✓',
        ],
        answer: '$\\left(\\dfrac{9}{2}, 0\\right)$',
      },
    ],
  },
  problems: [
    {
      q: 'Where does the horizontal line $y = 3$ meet the circle $x^2 + y^2 = 25$?',
      fig: {
        view: [-7, -7, 7, 7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'line', a: [-6, 3], b: [6, 3] },
          { t: 'point', p: [4, 3], dx: 12, dy: -6 },
          { t: 'point', p: [-4, 3], dx: -12, dy: -6 },
        ],
      },
      choices: ['$(3, 4)$ and $(-3, 4)$', '$(4, 3)$ only', '$(4, 3)$ and $(-4, 3)$', '$(5, 3)$ and $(-5, 3)$'],
      answer: 2,
      solution: 'Substitute $y = 3$: $x^2 + 9 = 25$, so $x^2 = 16$ and $x = \\pm 4$. The intersection points are $(4, 3)$ and $(-4, 3)$. The choice $(3, 4)$ swaps the coordinates — but here $y$ was FIXED at $3$, so $3$ must be the second coordinate. And $\\pm 5$ ignores that the line sits $3$ units above center, squeezing the crossing points inward.',
    },
    {
      q: 'Where does the line $y = x$ meet the circle $x^2 + y^2 = 18$?',
      choices: [
        '$(3, 3)$ and $(-3, -3)$',
        '$(3, 3)$ only',
        '$(\\sqrt{18}, \\sqrt{18})$ and $(-\\sqrt{18}, -\\sqrt{18})$',
        'They do not intersect',
      ],
      answer: 0,
      solution: 'Substitute $y = x$: $x^2 + x^2 = 18$, so $2x^2 = 18$, $x^2 = 9$, $x = \\pm 3$. Since $y = x$, the points are $(3, 3)$ and $(-3, -3)$. The distractor with $\\sqrt{18}$ forgets that BOTH coordinates contribute to the distance: the point $(\\sqrt{18}, \\sqrt{18})$ is $6$ from the origin, not $\\sqrt{18}$.',
    },
    {
      q: 'Where does the line $y = x + 5$ meet the circle $x^2 + y^2 = 25$?',
      choices: [
        '$(0, -5)$ and $(5, 0)$',
        '$(0, 5)$ and $(-5, 0)$',
        '$(0, 5)$ only — the line is tangent',
        '$(5, 5)$ and $(-5, -5)$',
      ],
      answer: 1,
      solution: 'Substitute: $x^2 + (x + 5)^2 = 25$ gives $2x^2 + 10x + 25 = 25$, so $2x(x + 5) = 0$: $x = 0$ or $x = -5$. The points are $(0, 5)$ and $(-5, 0)$. Two distinct solutions, so the line is a secant, not a tangent — and watch the signs: $(0, -5)$ and $(5, 0)$ are on the circle but NOT on this line.',
    },
    {
      q: 'How many points do the line $y = 2x + 10$ and the circle $x^2 + y^2 = 20$ have in common?',
      fig: {
        view: [-8, -6, 6, 8],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: Math.sqrt(20) },
          { t: 'line', a: [-6, -2], b: [-2, 6] },
          { t: 'point', p: [-4, 2], dx: -12, dy: -6 },
        ],
      },
      choices: ['$0$', '$2$', 'infinitely many', 'exactly $1$'],
      answer: 3,
      solution: 'Substitute: $x^2 + (2x + 10)^2 = 20$ expands to $5x^2 + 40x + 80 = 0$, or $x^2 + 8x + 16 = 0$ — that is $(x + 4)^2 = 0$, a repeated root at $x = -4$. One point of contact: the line is tangent at $(-4, 2)$. Distance check: from $(0,0)$ to $2x - y + 10 = 0$ is $\\frac{10}{\\sqrt{5}} = 2\\sqrt{5} = \\sqrt{20} = r$. ✓',
    },
    {
      q: 'For what positive value of $c$ is the line $y = x + c$ tangent to the circle $x^2 + y^2 = 2$?',
      choices: ['$2$', '$\\sqrt{2}$', '$4$', '$1$'],
      answer: 0,
      solution: 'Substituting gives $2x^2 + 2cx + (c^2 - 2) = 0$, with discriminant $4c^2 - 8(c^2 - 2) = 16 - 4c^2$. Setting it to zero: $c^2 = 4$, so $c = 2$ (taking the positive value). Quick geometric confirmation: the distance from the origin to $x - y + c = 0$ is $\\frac{|c|}{\\sqrt{2}}$, and $\\frac{2}{\\sqrt{2}} = \\sqrt{2} = r$. ✓ The distractor $\\sqrt{2}$ is the radius itself, not the value of $c$.',
    },
    {
      q: 'Which point lies on the line $y = x$ AND is equidistant from $(0, 0)$ and $(6, 0)$?',
      fig: {
        view: [-2, -2, 7, 5],
        grid: true,
        elems: [
          { t: 'line', a: [-1, -1], b: [4, 4] },
          { t: 'seg', a: [3, -1], b: [3, 4], dash: true },
          { t: 'point', p: [0, 0], dx: -10, dy: 12 },
          { t: 'point', p: [6, 0], dx: 10, dy: 12 },
          { t: 'point', p: [3, 3], dx: -6, dy: -12 },
        ],
      },
      choices: ['$(3, 0)$', '$(0, 3)$', '$(3, 3)$', '$(6, 6)$'],
      answer: 2,
      solution: 'Equidistant from $(0, 0)$ and $(6, 0)$ means: on their perpendicular bisector, the vertical line $x = 3$. Combined with $y = x$, the point is $(3, 3)$. Check: distance to each is $\\sqrt{9 + 9}$ and $\\sqrt{9 + 9}$. ✓ The midpoint $(3, 0)$ is equidistant too, but it fails the other condition — it is not on the line $y = x$.',
    },
    {
      q: 'Describe the locus of ALL points equidistant from $(2, 3)$ and $(8, 3)$.',
      choices: [
        'the line $y = 3$',
        'the vertical line $x = 5$',
        'the single point $(5, 3)$',
        'a circle centered at $(5, 3)$',
      ],
      answer: 1,
      solution: 'Points equidistant from two fixed points form the perpendicular bisector of the segment between them. Here the segment is horizontal with midpoint $(5, 3)$, so its perpendicular bisector is the vertical line $x = 5$. The midpoint alone is just ONE equidistant point — the locus is the entire line through it.',
    },
    {
      q: 'Which equation describes all points at distance $4$ from the point $(1, -2)$?',
      choices: [
        '$(x - 1)^2 + (y + 2)^2 = 16$',
        '$(x + 1)^2 + (y - 2)^2 = 16$',
        '$(x - 1)^2 + (y + 2)^2 = 4$',
        '$(x - 1)^2 + (y - 2)^2 = 16$',
      ],
      answer: 0,
      solution: 'All points at a fixed distance from a center form a circle — that is the definition! Center $(1, -2)$ and radius $4$ give $(x - 1)^2 + (y - (-2))^2 = 4^2$, which is $(x - 1)^2 + (y + 2)^2 = 16$. The right side must be $r^2 = 16$, and the $y$-term needs a PLUS because the center coordinate is negative.',
    },
    {
      q: 'A point lies on the line $y = 2x$ and is at distance $5$ from the origin. If the point is in the first quadrant, what is it?',
      choices: ['$(1, 2)$', '$(5, 10)$', '$(\\sqrt{5}, \\sqrt{5})$', '$(\\sqrt{5}, 2\\sqrt{5})$'],
      answer: 3,
      solution: 'Two conditions: $y = 2x$ and $x^2 + y^2 = 25$. Substitute: $x^2 + 4x^2 = 25$, so $x^2 = 5$ and $x = \\sqrt{5}$ in the first quadrant, giving $\\left(\\sqrt{5}, 2\\sqrt{5}\\right)$. Check the distance: $5 + 20 = 25$. ✓ The point $(5, 10)$ is on the line but $\\sqrt{125}$ from the origin, and $(1, 2)$ is only $\\sqrt{5}$ away.',
    },
    {
      q: 'The line $y = 3$ cuts a chord out of the circle $x^2 + y^2 = 25$. How long is that chord?',
      fig: {
        view: [-7, -7, 7, 7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [-4, 3], b: [4, 3] },
          { t: 'seg', a: [0, 0], b: [0, 3], dash: true },
          { t: 'point', p: [4, 3], dx: 12, dy: -6 },
          { t: 'point', p: [-4, 3], dx: -12, dy: -6 },
        ],
      },
      choices: ['$4$', '$8$', '$6$', '$10$'],
      answer: 1,
      solution: 'The endpoints of the chord come from $x^2 + 9 = 25$: the points $(-4, 3)$ and $(4, 3)$. The chord is horizontal, so its length is $4 - (-4) = 8$. You can also see a $3$-$4$-$5$ right triangle: the center sits $3$ from the chord, the radius is $5$, so the half-chord is $4$ — and the whole chord is $8$.',
    },
  ],
}

const challenge = [
  {
    q: 'Triangle $ABC$ has vertices $A = (1, 2)$, $B = (7, 2)$, and $C = (4, 6)$. What is its perimeter?',
    fig: {
      view: [-1, 0, 9, 8],
      grid: true,
      elems: [
        { t: 'poly', pts: [[1, 2], [7, 2], [4, 6]], fill: false },
        { t: 'point', p: [1, 2], label: 'A', dx: -10, dy: 10 },
        { t: 'point', p: [7, 2], label: 'B', dx: 10, dy: 10 },
        { t: 'point', p: [4, 6], label: 'C', dx: 0, dy: -12 },
      ],
    },
    choices: ['$16$', '$18$', '$6 + 2\\sqrt{13}$', '$11$'],
    answer: 0,
    solution: 'Side $AB$ is horizontal with length $6$. Sides $AC$ and $BC$: $AC = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$, and $BC = \\sqrt{(4-7)^2 + (6-2)^2} = 5$ as well. Perimeter $= 6 + 5 + 5 = 16$ — and the two equal sides tell us the triangle is isosceles, which matches the apex sitting exactly above the midpoint of $\\overline{AB}$.',
  },
  {
    q: 'Which point on the $x$-axis is equidistant from $(0, 2)$ and $(6, 4)$?',
    choices: ['$(3, 0)$', '$(4, 0)$', '$(5, 0)$', '$(3, 3)$'],
    answer: 1,
    solution: 'Let the point be $(x, 0)$ and equate squared distances: $x^2 + 4 = (x - 6)^2 + 16$. Expanding: $x^2 + 4 = x^2 - 12x + 52$, so $12x = 48$ and $x = 4$. The point is $(4, 0)$: it is $\\sqrt{16 + 4} = \\sqrt{20}$ from each given point. ✓ The tempting $(3, 0)$ just averages the $x$-coordinates, but the two given points have different heights, which drags the balance point toward the lower one.',
  },
  {
    q: 'Which of these points lies on the circle $x^2 + y^2 - 4x + 6y - 12 = 0$?',
    fig: {
      view: [-4, -9, 8, 3],
      grid: true,
      elems: [
        { t: 'circle', c: [2, -3], r: 5 },
        { t: 'point', p: [2, -3], dx: 0, dy: 14 },
        { t: 'point', p: [5, 1], dx: 12, dy: -4 },
      ],
    },
    choices: ['$(3, 3)$', '$(0, 0)$', '$(5, 1)$', '$(7, 1)$'],
    answer: 2,
    solution: 'Complete the square: $(x - 2)^2 + (y + 3)^2 = 12 + 4 + 9 = 25$, a circle with center $(2, -3)$ and radius $5$. Test $(5, 1)$: $(5 - 2)^2 + (1 + 3)^2 = 9 + 16 = 25$. ✓ On the circle. The others give $37$, $13$, and $41$ — you can also just plug points into the ORIGINAL equation and see which makes it $0$.',
  },
  {
    q: 'What is the area of the quadrilateral with vertices $(0, 0)$, $(6, 1)$, $(7, 5)$, $(1, 4)$, taken in order?',
    fig: {
      view: [-1, -1, 8, 6],
      grid: true,
      elems: [
        { t: 'poly', pts: [[0, 0], [6, 1], [7, 5], [1, 4]], fill: false },
        { t: 'point', p: [0, 0], dx: -10, dy: 10 },
        { t: 'point', p: [6, 1], dx: 12, dy: 8 },
        { t: 'point', p: [7, 5], dx: 10, dy: -8 },
        { t: 'point', p: [1, 4], dx: -10, dy: -8 },
      ],
    },
    choices: ['$46$', '$24$', '$21$', '$23$'],
    answer: 3,
    solution: 'Split along the diagonal from $(0,0)$ to $(7,5)$ and shoelace each triangle — or shoelace the whole quadrilateral: $\\frac{1}{2}\\left|(0 \\cdot 1 - 6 \\cdot 0) + (6 \\cdot 5 - 7 \\cdot 1) + (7 \\cdot 4 - 1 \\cdot 5) + (1 \\cdot 0 - 0 \\cdot 4)\\right| = \\frac{1}{2}\\left|0 + 23 + 23 + 0\\right| = 23$. (Bonus observation: the shift from $(0,0)$ to $(6,1)$ matches the shift from $(1,4)$ to $(7,5)$, so this is actually a parallelogram.)',
  },
  {
    q: 'Does the line $y = x$ intersect the circle $(x - 3)^2 + (y - 4)^2 = 4$?',
    choices: [
      'No — the line misses the circle entirely',
      'Yes — it crosses the circle at two points',
      'Yes — it is tangent, touching at exactly one point',
      'No — but only because the line passes through the center',
    ],
    answer: 1,
    solution: 'Compare the distance from the center $(3, 4)$ to the line $x - y = 0$ against the radius: distance $= \\frac{|3 - 4|}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\approx 0.71$, which is well under the radius $2$. A line closer to the center than the radius must cross the circle twice. No solving required — the distance test settles how many intersections exist before you find any of them.',
  },
  {
    q: 'For which values of $k$ is the vertical line $x = k$ tangent to the circle $(x - 5)^2 + y^2 = 9$?',
    choices: ['$k = 2$ and $k = 8$', '$k = -2$ and $k = 8$', '$k = 5 \\pm \\sqrt{3}$', '$k = 2$ only'],
    answer: 0,
    solution: 'A vertical line is tangent when its distance from the center equals the radius: $|k - 5| = 3$, so $k = 2$ or $k = 8$ — the lines hugging the circle’s left and right edges. The answer $5 \\pm \\sqrt{3}$ uses $\\sqrt{9}$ incorrectly (the radius is already $3$), and tangents come in pairs, one on each side.',
  },
  {
    q: 'Which point on the vertical line $x = 3$ is equidistant from $(0, 0)$ and $(4, 2)$?',
    fig: {
      view: [-2, -4, 6, 4],
      grid: true,
      elems: [
        { t: 'seg', a: [3, -3], b: [3, 3], dash: true },
        { t: 'point', p: [0, 0], dx: -10, dy: -10 },
        { t: 'point', p: [4, 2], dx: 12, dy: -4 },
        { t: 'point', p: [3, -1], dx: 12, dy: 8 },
      ],
    },
    choices: ['$(3, 1)$', '$(3, 0)$', '$(3, -1)$', '$(3, 2)$'],
    answer: 2,
    solution: 'The equidistant points form the perpendicular bisector of the segment: midpoint $(2, 1)$, segment slope $\\frac{1}{2}$, so the bisector is $y - 1 = -2(x - 2)$, or $y = -2x + 5$. At $x = 3$: $y = -1$, giving $(3, -1)$. Check squared distances: to $(0,0)$: $9 + 1 = 10$; to $(4, 2)$: $1 + 9 = 10$. ✓',
  },
  {
    q: 'A triangle has vertices $(0, 0)$, $(2a, 0)$, and $(2b, 2c)$. The midsegment connects the midpoints of the two sides that meet at $(2b, 2c)$. What is the length of the midsegment?',
    choices: ['$2a$', '$\\dfrac{a}{2}$', '$a + b$', '$a$'],
    answer: 3,
    solution: 'The midpoints are $(b, c)$ and $(a + b, c)$. Both have height $c$, so the midsegment is horizontal, and its length is $(a + b) - b = a$ — exactly half the base $2a$, in line with the Midsegment Theorem. The letters do all the work: no matter what $a$, $b$, $c$ are, the ratio is locked at one half.',
  },
  {
    q: 'A line passes through $(1, 7)$ and is perpendicular to the line $2x + y = 4$. What is its $y$-intercept?',
    choices: ['$\\dfrac{13}{2}$', '$\\dfrac{15}{2}$', '$7$', '$9$'],
    answer: 0,
    solution: 'The line $2x + y = 4$ has slope $-2$, so the perpendicular has slope $\\frac{1}{2}$ (flip AND negate). Through $(1, 7)$: $y - 7 = \\frac{1}{2}(x - 1)$. At $x = 0$: $y = 7 - \\frac{1}{2} = \\frac{13}{2}$. The answer $\\frac{15}{2}$ comes from a sign slip, adding $\\frac{1}{2}$ instead of subtracting when stepping from $x = 1$ back to $x = 0$.',
  },
  {
    q: 'A circle passes through $(0, 0)$, $(6, 0)$, and $(0, 8)$. What is its radius?',
    choices: ['$10$', '$5$', '$\\sqrt{50}$', '$4$'],
    answer: 1,
    solution: 'The triangle with these vertices has a right angle at the origin (its legs run along the axes). An inscribed right angle stands on a diameter, so the hypotenuse — from $(6, 0)$ to $(0, 8)$, length $\\sqrt{36 + 64} = 10$ — is a diameter. The radius is $5$, and the center is the hypotenuse’s midpoint $(3, 4)$. Check: the center is $\\sqrt{9 + 16} = 5$ from the origin. ✓',
  },
  {
    q: 'What is the shortest distance from the point $(7, 1)$ to the circle $(x - 1)^2 + (y - 1)^2 = 9$?',
    choices: ['$6$', '$9$', '$4$', '$3$'],
    answer: 3,
    solution: 'The center is $(1, 1)$ with radius $3$. The distance from $(7, 1)$ to the center is $\\sqrt{36 + 0} = 6$, and the nearest point of the circle lies on the segment toward the center, $3$ units out from it. Shortest distance $= 6 - 3 = 3$. (The answer $6$ measures to the center; the circle itself reaches halfway out to meet you.)',
  },
  {
    q: 'Which points are at distance $5$ from BOTH $(0, 0)$ and $(8, 0)$?',
    fig: {
      view: [-6, -6, 14, 6],
      grid: true,
      elems: [
        { t: 'circle', c: [0, 0], r: 5 },
        { t: 'circle', c: [8, 0], r: 5 },
        { t: 'point', p: [4, 3], dx: 0, dy: -12 },
        { t: 'point', p: [4, -3], dx: 0, dy: 12 },
      ],
    },
    choices: ['$(4, 0)$ only', '$(4, 5)$ and $(4, -5)$', '$(4, 3)$ and $(4, -3)$', 'There are no such points'],
    answer: 2,
    solution: 'Each condition is a circle of radius $5$; we need their intersection. By symmetry the meeting points sit on $x = 4$, halfway between the centers. Substitute into $x^2 + y^2 = 25$: $16 + y^2 = 25$, so $y = \\pm 3$. The points are $(4, 3)$ and $(4, -3)$. The choice $(4, \\pm 5)$ forgets that moving $4$ sideways uses up part of the radius — the height left over is $3$, not $5$.',
  },
]

const worksheet = [
  {
    q: 'Find the distance between $(-1, 3)$ and $(5, 11)$, and the midpoint of the segment connecting them.',
    fig: {
      view: [-3, 1, 7, 13],
      grid: true,
      elems: [
        { t: 'seg', a: [-1, 3], b: [5, 11] },
        { t: 'point', p: [-1, 3], dx: -10, dy: 10 },
        { t: 'point', p: [5, 11], dx: 10, dy: -8 },
        { t: 'point', p: [2, 7], label: 'M', dx: 12, dy: 8 },
      ],
    },
    answer: 'Distance $= 10$; midpoint $= (2, 7)$',
    solution: 'Run: $5 - (-1) = 6$; rise: $11 - 3 = 8$. Distance $= \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ — a $6$-$8$-$10$ right triangle. Midpoint: average the coordinates, $\\left(\\frac{-1 + 5}{2}, \\frac{3 + 11}{2}\\right) = (2, 7)$.',
  },
  {
    q: 'Find the center and radius of the circle $x^2 + y^2 + 4x - 10y + 20 = 0$.',
    answer: 'Center $(-2, 5)$, radius $3$',
    solution: 'Complete both squares: $(x^2 + 4x + 4) + (y^2 - 10y + 25) = -20 + 4 + 25$, so $(x + 2)^2 + (y - 5)^2 = 9$. The center is $(-2, 5)$ — signs opposite to what appears inside the parentheses — and the radius is $\\sqrt{9} = 3$.',
  },
  {
    q: 'Find the equation of the perpendicular bisector of the segment with endpoints $(1, 2)$ and $(7, 6)$.',
    answer: '$y = -\\dfrac{3}{2}x + 10$',
    solution: 'Midpoint: $\\left(\\frac{1 + 7}{2}, \\frac{2 + 6}{2}\\right) = (4, 4)$. Segment slope: $\\frac{6 - 2}{7 - 1} = \\frac{2}{3}$, so the bisector’s slope is the negative reciprocal, $-\\frac{3}{2}$. Point-slope: $y - 4 = -\\frac{3}{2}(x - 4)$, which simplifies to $y = -\\frac{3}{2}x + 10$. Check with $x = 4$: $y = -6 + 10 = 4$. ✓',
  },
  {
    q: 'Find the area of the triangle with vertices $(2, 1)$, $(7, 3)$, and $(4, 8)$.',
    fig: {
      view: [0, 0, 8, 9],
      grid: true,
      elems: [
        { t: 'poly', pts: [[2, 1], [7, 3], [4, 8]], fill: false },
        { t: 'point', p: [2, 1], dx: -10, dy: 10 },
        { t: 'point', p: [7, 3], dx: 12, dy: 6 },
        { t: 'point', p: [4, 8], dx: 0, dy: -12 },
      ],
    },
    answer: 'Area $= \\dfrac{31}{2}$',
    solution: 'Shoelace: $\\frac{1}{2}\\left|2(3 - 8) + 7(8 - 1) + 4(1 - 3)\\right| = \\frac{1}{2}\\left|-10 + 49 - 8\\right| = \\frac{31}{2}$. Bounding-box check: the box from $(2, 1)$ to $(7, 8)$ has area $35$; the three corner right triangles have areas $5$, $\\frac{15}{2}$, and $7$, and $35 - 5 - \\frac{15}{2} - 7 = \\frac{31}{2}$. ✓',
  },
  {
    q: 'Classify the triangle with vertices $(0, 0)$, $(5, 5)$, and $(10, 0)$ as precisely as you can.',
    fig: {
      view: [-1, -1, 11, 6],
      grid: true,
      elems: [
        { t: 'poly', pts: [[0, 0], [5, 5], [10, 0]], fill: false },
        { t: 'right', at: [5, 5], from: [0, 0], to: [10, 0] },
        { t: 'point', p: [0, 0], dx: -10, dy: 10 },
        { t: 'point', p: [5, 5], dx: 0, dy: -12 },
        { t: 'point', p: [10, 0], dx: 10, dy: 10 },
      ],
    },
    answer: 'An isosceles right triangle, with the right angle at $(5, 5)$',
    solution: 'Squared side lengths: $(0,0)$ to $(5,5)$ is $50$; $(5,5)$ to $(10,0)$ is $50$; the base is $100$. Two equal sides make it isosceles, and $50 + 50 = 100$ satisfies the Pythagorean relation, so the angle between the equal sides is right. Slope check: the slanted sides have slopes $1$ and $-1$, whose product is $-1$. ✓',
  },
  {
    q: 'Find the distance from the origin to the line through $(9, 0)$ and $(0, 12)$.',
    answer: '$\\dfrac{36}{5}$',
    solution: 'Area method: the triangle formed with the origin has legs $9$ and $12$, area $\\frac{1}{2} \\cdot 9 \\cdot 12 = 54$, and hypotenuse $\\sqrt{81 + 144} = 15$. Using the hypotenuse as base, the height is $\\frac{2 \\cdot 54}{15} = \\frac{36}{5}$. Formula check: the line is $4x + 3y = 36$, and $\\frac{|{-36}|}{\\sqrt{16 + 9}} = \\frac{36}{5}$. ✓',
  },
  {
    q: 'Find all points where the line $y = x - 2$ intersects the circle $x^2 + y^2 = 10$.',
    fig: {
      view: [-5, -5, 5, 5],
      grid: true,
      elems: [
        { t: 'circle', c: [0, 0], r: Math.sqrt(10) },
        { t: 'line', a: [-2, -4], b: [4, 2] },
        { t: 'point', p: [3, 1], dx: 12, dy: -4 },
        { t: 'point', p: [-1, -3], dx: -12, dy: 8 },
      ],
    },
    answer: '$(3, 1)$ and $(-1, -3)$',
    solution: 'Substitute $y = x - 2$: $x^2 + (x - 2)^2 = 10$ expands to $2x^2 - 4x - 6 = 0$, or $x^2 - 2x - 3 = 0$, which factors as $(x - 3)(x + 1) = 0$. So $x = 3$ (giving $y = 1$) or $x = -1$ (giving $y = -3$). Both check on the circle: $9 + 1 = 10$ and $1 + 9 = 10$. ✓',
  },
  {
    q: 'For which values of $k$ is the line $y = 2x + k$ tangent to the circle $x^2 + y^2 = 5$?',
    answer: '$k = 5$ or $k = -5$',
    solution: 'Substituting gives $x^2 + (2x + k)^2 = 5$, or $5x^2 + 4kx + (k^2 - 5) = 0$. Tangency needs discriminant zero: $16k^2 - 20(k^2 - 5) = 100 - 4k^2 = 0$, so $k = \\pm 5$. Geometric confirmation: the distance from the origin to $2x - y + k = 0$ is $\\frac{|k|}{\\sqrt{5}}$, and setting it equal to $\\sqrt{5}$ gives $|k| = 5$. ✓ One tangent line above the circle, one below.',
  },
  {
    q: 'A quadrilateral has vertices $(0, 0)$, $(8, 0)$, $(10, 6)$, and $(2, 8)$, in order. Find the midpoints of its four sides and verify that they form a parallelogram.',
    fig: {
      view: [-1, -1, 11, 9],
      grid: true,
      elems: [
        { t: 'poly', pts: [[0, 0], [8, 0], [10, 6], [2, 8]], fill: false },
        { t: 'poly', pts: [[4, 0], [9, 3], [6, 7], [1, 4]], fill: false },
        { t: 'point', p: [4, 0], dx: 0, dy: 14 },
        { t: 'point', p: [9, 3], dx: 12, dy: 0 },
        { t: 'point', p: [6, 7], dx: 6, dy: -10 },
        { t: 'point', p: [1, 4], dx: -12, dy: 0 },
      ],
    },
    answer: 'Midpoints $(4, 0)$, $(9, 3)$, $(6, 7)$, $(1, 4)$; opposite sides are the same shift, so it is a parallelogram',
    solution: 'The side midpoints, in order, are $(4, 0)$, $(9, 3)$, $(6, 7)$, $(1, 4)$. Going from $(4, 0)$ to $(9, 3)$ is a shift of $(5, 3)$, and from $(1, 4)$ to $(6, 7)$ is also $(5, 3)$ — one pair of opposite sides is parallel and equal, which already forces a parallelogram. (The other pair matches too: both are shifts of $(-3, 4)$.) This is the coordinate proof from Section 17.4 wearing specific numbers.',
  },
  {
    q: 'Find the point on the $y$-axis that is equidistant from $(3, 0)$ and $(7, 4)$.',
    fig: {
      view: [-1, -1, 8, 8],
      grid: true,
      elems: [
        { t: 'seg', a: [0, 7], b: [3, 0], dash: true },
        { t: 'seg', a: [0, 7], b: [7, 4], dash: true },
        { t: 'point', p: [3, 0], dx: 10, dy: 12 },
        { t: 'point', p: [7, 4], dx: 12, dy: 0 },
        { t: 'point', p: [0, 7], dx: -10, dy: -8 },
      ],
    },
    answer: '$(0, 7)$',
    solution: 'Let the point be $(0, y)$ and set squared distances equal: $9 + y^2 = 49 + (y - 4)^2$. Expanding the right side: $49 + y^2 - 8y + 16$, so $9 = 65 - 8y$, giving $8y = 56$ and $y = 7$. The point is $(0, 7)$, and both distances are $\\sqrt{9 + 49} = \\sqrt{58}$. ✓ Equivalently: $(0, 7)$ is where the perpendicular bisector of the segment happens to cross the $y$-axis.',
  },
]

export default {
  id: 'intro-geometry-ch17',
  book: 'intro-geometry',
  number: 17,
  title: 'Analytic Geometry',
  intro:
    'This chapter marries the two great languages of mathematics: algebra and geometry. Once shapes live on a coordinate plane, distances become the Pythagorean Theorem, circles become equations, and entire theorems can be proved with a few lines of careful arithmetic. By the end, you will place coordinates so cleverly that famous geometry facts practically prove themselves.',
  sections: [s171, s172, s173, s174, s175, s176],
  challenge,
  worksheet,
}
