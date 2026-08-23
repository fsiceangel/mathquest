// Introduction to Algebra — Chapter 14: Graphing Quadratics
// All problems, explanations, and examples are original MathQuest content.

const s141 = {
  id: '14.1',
  title: 'Parabolas',
  learn: {
    concepts: [
      {
        heading: 'Every quadratic graphs as a parabola',
        body: 'The graph of $y = ax^2 + bx + c$ (with $a \\neq 0$) is a U-shaped curve called a parabola. The sign of $a$ tells you which way the U points: if $a > 0$ the parabola opens upward (a smile), and if $a < 0$ it opens downward (a frown). The bigger $|a|$ is, the skinnier the parabola.',
      },
      {
        heading: 'The vertex is the turning point',
        body: 'The vertex is where the parabola turns around — the lowest point if it opens up, the highest if it opens down. Completing the square rewrites the equation in vertex form $y = a(x-h)^2 + k$, and then the vertex is simply $(h, k)$. Watch the sign: $y = (x-3)^2 + 2$ has vertex $(3, 2)$, not $(-3, 2)$, because the squared part is $0$ exactly when $x = 3$.',
      },
      {
        heading: 'A shortcut and a mirror',
        body: 'Completing the square always lands the vertex at $x = -\\frac{b}{2a}$, so you can jump straight there: plug $x = -\\frac{b}{2a}$ into the equation to get the $y$-coordinate. The vertical line through the vertex, $x = -\\frac{b}{2a}$, is the axis of symmetry: the parabola is a perfect mirror image across it, so points with equal $y$-values sit the same distance from the axis on either side.',
      },
      {
        heading: 'Where the parabola meets the axes',
        body: 'Setting $x = 0$ gives $y = c$, so the $y$-intercept is $(0, c)$ — free of charge! The $x$-intercepts are the solutions of $ax^2 + bx + c = 0$, and the discriminant $b^2 - 4ac$ counts them: positive means two crossings, zero means the vertex just touches the axis, and negative means the graph misses the $x$-axis entirely.',
      },
    ],
    examples: [
      {
        problem: 'Find the vertex and axis of symmetry of $y = x^2 - 6x + 5$ by completing the square.',
        steps: [
          'Take half of $-6$ and square it: $(-3)^2 = 9$. So write $y = (x^2 - 6x + 9) - 9 + 5$.',
          'The first group is a perfect square: $y = (x-3)^2 - 4$.',
          'The squared part is smallest (zero) when $x = 3$, giving $y = -4$. So the vertex is $(3, -4)$ and the axis of symmetry is the line $x = 3$.',
        ],
        answer: 'Vertex $(3, -4)$; axis of symmetry $x = 3$',
        fig: {
          view: [-2, -6, 8, 8],
          grid: true,
          elems: [
            { t: 'parabola', a: 1, b: -6, c: 5 },
            { t: 'seg', a: [3, -6], b: [3, 8], dash: true },
            { t: 'point', p: [3, -4], label: 'V', dx: 8, dy: -8 },
          ],
        },
      },
      {
        problem: 'Find the vertex of $y = 2x^2 + 8x + 3$ using the vertex formula.',
        steps: [
          'Here $a = 2$ and $b = 8$, so the vertex sits at $x = -\\frac{b}{2a} = -\\frac{8}{4} = -2$.',
          'Plug $x = -2$ back in: $y = 2(-2)^2 + 8(-2) + 3 = 8 - 16 + 3 = -5$.',
          'Since $a = 2 > 0$, the parabola opens upward, so $(-2, -5)$ is its lowest point.',
        ],
        answer: 'Vertex $(-2, -5)$',
      },
      {
        problem: 'How many $x$-intercepts does the graph of $y = x^2 - 4x + 7$ have?',
        steps: [
          'The $x$-intercepts come from solving $x^2 - 4x + 7 = 0$, so check the discriminant: $b^2 - 4ac = 16 - 28 = -12$.',
          'A negative discriminant means no real solutions, so the graph never touches the $x$-axis.',
          'You can see why: the vertex is at $x = 2$, $y = 4 - 8 + 7 = 3$, and a parabola opening upward from $(2, 3)$ stays above the axis forever.',
        ],
        answer: 'Zero $x$-intercepts',
      },
    ],
  },
  problems: [
    {
      q: 'Which way does the graph of $y = -3x^2 + 2x + 5$ open?',
      choices: ['Upward, because $c = 5$ is positive', 'Downward, because $a = -3$ is negative', 'To the right', 'It depends on the value of $b$'],
      answer: 1,
      solution: 'Only the coefficient of $x^2$ decides the direction. Here $a = -3 < 0$, so the parabola opens downward — a frown. The values of $b$ and $c$ shift the parabola around but never flip it.',
    },
    {
      q: 'What is the $y$-intercept of the graph of $y = x^2 - 5x + 6$?',
      choices: ['$(0, 6)$', '$(0, -5)$', '$(6, 0)$', '$(0, 1)$'],
      answer: 0,
      solution: 'Set $x = 0$: every term with an $x$ vanishes, leaving $y = 6$. The $y$-intercept is $(0, 6)$ — for any quadratic $y = ax^2 + bx + c$, it is always $(0, c)$.',
    },
    {
      q: 'What is the vertex of the parabola $y = (x - 4)^2 + 3$?',
      choices: ['$(-4, 3)$', '$(4, -3)$', '$(4, 3)$', '$(-4, -3)$'],
      answer: 2,
      solution: 'In vertex form $y = a(x-h)^2 + k$, the vertex is $(h, k)$. The squared part $(x-4)^2$ is zero exactly when $x = 4$, and then $y = 3$. So the vertex is $(4, 3)$. Careful: the minus sign inside means $h = 4$, not $-4$.',
    },
    {
      q: 'What is the axis of symmetry of $y = x^2 + 6x + 1$?',
      choices: ['$x = 6$', '$x = 3$', '$x = -6$', '$x = -3$'],
      answer: 3,
      solution: 'The axis of symmetry passes through the vertex at $x = -\\frac{b}{2a} = -\\frac{6}{2} = -3$. Do not forget the minus sign in the formula — that is the most common slip.',
    },
    {
      q: 'What is the vertex of the parabola shown?',
      fig: {
        view: [-5, -6, 6, 6],
        grid: true,
        elems: [
          { t: 'parabola', a: 1, b: -2, c: -3 },
        ],
      },
      choices: ['$(1, -4)$', '$(-1, -4)$', '$(1, 4)$', '$(-1, 0)$'],
      answer: 0,
      solution: 'The vertex is the turning point — here the lowest point of the U, one unit right of the $y$-axis and four units down: $(1, -4)$. As a check, the graph crosses the $x$-axis at $x = -1$ and $x = 3$, and the vertex sits midway between them at $x = 1$.',
    },
    {
      q: 'What are the $x$-intercepts of the graph of $y = x^2 - x - 12$?',
      choices: ['$x = -4$ and $x = 3$', '$x = 12$ and $x = -1$', '$x = 4$ and $x = -3$', '$x = 3$ and $x = 4$'],
      answer: 2,
      solution: 'Set $y = 0$ and factor: $x^2 - x - 12 = (x - 4)(x + 3) = 0$, so $x = 4$ or $x = -3$. We need two numbers that multiply to $-12$ and add to $-1$: those are $-4$ and $+3$, which give roots $4$ and $-3$.',
    },
    {
      q: 'What is the vertex of $y = 2x^2 - 8x + 5$?',
      choices: ['$(-2, -3)$', '$(2, -3)$', '$(2, 5)$', '$(4, 5)$'],
      answer: 1,
      solution: 'The vertex is at $x = -\\frac{b}{2a} = -\\frac{-8}{4} = 2$. Then $y = 2(4) - 16 + 5 = -3$, so the vertex is $(2, -3)$. (The point $(4, 5)$ is on the parabola, but it comes from forgetting to divide by $2a$ — it is not the turning point.)',
    },
    {
      q: 'Which equation matches the parabola shown?',
      fig: {
        view: [-2, -4, 6, 6],
        grid: true,
        elems: [
          { t: 'parabola', a: -1, b: 4, c: 0 },
        ],
      },
      choices: ['$y = (x - 2)^2 + 4$', '$y = -(x + 2)^2 + 4$', '$y = -(x - 2)^2 - 4$', '$y = -(x - 2)^2 + 4$'],
      answer: 3,
      solution: 'The graph opens downward, so $a$ must be negative — that rules out the first choice. The highest point is the vertex $(2, 4)$, and vertex form with $h = 2$, $k = 4$ is $y = -(x-2)^2 + 4$. Check an easy point: at $x = 0$ this gives $y = -4 + 4 = 0$, and the graph does pass through the origin.',
    },
    {
      q: 'How many times does the graph of $y = x^2 + 2x + 5$ cross the $x$-axis?',
      choices: ['$0$', '$1$', '$2$', 'It cannot be determined'],
      answer: 0,
      solution: 'Check the discriminant: $b^2 - 4ac = 4 - 20 = -16 < 0$, so the equation $x^2 + 2x + 5 = 0$ has no real solutions and the graph never meets the $x$-axis. Indeed, the vertex is $(-1, 4)$ and the parabola opens up, so the whole graph floats above the axis.',
    },
    {
      q: 'A parabola has axis of symmetry $x = 2$ and passes through the point $(5, 7)$. Which point must also be on the parabola?',
      choices: ['$(1, 7)$', '$(5, -7)$', '$(-1, 7)$', '$(2, 7)$'],
      answer: 2,
      solution: 'The parabola is a mirror image across $x = 2$. The point $(5, 7)$ sits $3$ units to the right of the axis, so its mirror twin sits $3$ units to the left, at $x = 2 - 3 = -1$ with the same height: $(-1, 7)$.',
    },
  ],
}

const s142 = {
  id: '14.2',
  title: 'Circles',
  learn: {
    concepts: [
      {
        heading: 'A circle is a distance equation',
        body: 'A circle is all the points at a fixed distance $r$ (the radius) from a center. If the center is the origin, the distance formula (really the Pythagorean Theorem) says a point $(x, y)$ is on the circle exactly when $x^2 + y^2 = r^2$. Note the right side is $r^2$, not $r$: the circle $x^2 + y^2 = 25$ has radius $5$.',
      },
      {
        heading: 'Moving the center',
        body: 'A circle with center $(h, k)$ and radius $r$ has equation $(x-h)^2 + (y-k)^2 = r^2$. The signs flip just like in vertex form: $(x-3)^2 + (y+2)^2 = 25$ has center $(3, -2)$, because $y + 2$ is the same as $y - (-2)$.',
      },
      {
        heading: 'Inside, on, or outside?',
        body: 'To test a point, plug it into the left side $(x-h)^2 + (y-k)^2$ and compare with $r^2$. Less than $r^2$ means the point is closer than the radius — inside. Equal means it is on the circle. Greater means outside. No square roots needed!',
      },
      {
        heading: 'Unscrambling an expanded equation',
        body: 'An equation like $x^2 + y^2 - 6x + 4y - 12 = 0$ is a circle in disguise. Complete the square twice — once for the $x$ terms and once for the $y$ terms — to rebuild the form $(x-h)^2 + (y-k)^2 = r^2$ and read off the center and radius.',
      },
    ],
    examples: [
      {
        problem: 'Write the equation of the circle with center $(3, -2)$ and radius $5$.',
        steps: [
          'Use the template $(x-h)^2 + (y-k)^2 = r^2$ with $h = 3$, $k = -2$, and $r = 5$.',
          'Subtracting $k = -2$ means adding $2$: the equation is $(x-3)^2 + (y+2)^2 = 25$.',
          'Sanity check with a convenient point: $(8, -2)$ is $5$ units right of the center, and indeed $(8-3)^2 + (-2+2)^2 = 25$.',
        ],
        answer: '$(x-3)^2 + (y+2)^2 = 25$',
        fig: {
          view: [-4, -9, 10, 5],
          grid: true,
          elems: [
            { t: 'circle', c: [3, -2], r: 5 },
            { t: 'point', p: [3, -2], label: 'C', dx: 8, dy: -8 },
          ],
        },
      },
      {
        problem: 'Find the center and radius of the circle $x^2 + y^2 + 8x - 2y + 8 = 0$.',
        steps: [
          'Group and complete each square: $x^2 + 8x = (x+4)^2 - 16$ and $y^2 - 2y = (y-1)^2 - 1$.',
          'Substitute: $(x+4)^2 - 16 + (y-1)^2 - 1 + 8 = 0$, so $(x+4)^2 + (y-1)^2 = 9$.',
          'Read it off: the center is $(-4, 1)$ and the radius is $\\sqrt{9} = 3$.',
        ],
        answer: 'Center $(-4, 1)$, radius $3$',
      },
      {
        problem: 'Is the point $(4, 5)$ inside, on, or outside the circle $x^2 + y^2 = 36$?',
        steps: [
          'Plug the point into the left side: $4^2 + 5^2 = 16 + 25 = 41$.',
          'Compare with $r^2 = 36$: since $41 > 36$, the point is farther from the origin than the radius.',
          'So $(4, 5)$ lies outside the circle — its distance from the origin is $\\sqrt{41} \\approx 6.4$, a bit more than $6$.',
        ],
        answer: '$(4, 5)$ is outside the circle',
      },
    ],
  },
  problems: [
    {
      q: 'What is the radius of the circle $x^2 + y^2 = 49$?',
      choices: ['$49$', '$7$', '$14$', '$\\sqrt{7}$'],
      answer: 1,
      solution: 'The equation $x^2 + y^2 = r^2$ has $r^2 = 49$, so $r = \\sqrt{49} = 7$. The number on the right side is the radius squared, not the radius itself.',
    },
    {
      q: 'What is the center of the circle $(x - 2)^2 + (y + 5)^2 = 16$?',
      choices: ['$(-2, 5)$', '$(2, 5)$', '$(-2, -5)$', '$(2, -5)$'],
      answer: 3,
      solution: 'Match against $(x-h)^2 + (y-k)^2 = r^2$: we need $x - h = x - 2$, so $h = 2$, and $y - k = y + 5 = y - (-5)$, so $k = -5$. The center is $(2, -5)$ — the signs flip from what you see in the equation.',
    },
    {
      q: 'Which equation describes the circle centered at the origin with radius $6$?',
      choices: ['$x^2 + y^2 = 36$', '$x^2 + y^2 = 6$', '$x^2 + y^2 = 12$', '$x + y = 36$'],
      answer: 0,
      solution: 'With center $(0,0)$ and radius $6$, the equation is $x^2 + y^2 = r^2 = 6^2 = 36$. Remember to square the radius: $x^2 + y^2 = 6$ would be a much smaller circle, with radius $\\sqrt{6}$.',
    },
    {
      q: 'Where is the point $P = (3, 4)$ relative to the circle shown?',
      fig: {
        view: [-7, -7, 7, 7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'point', p: [3, 4], label: 'P', dx: 8, dy: -8 },
        ],
      },
      choices: ['Inside the circle', 'Outside the circle', 'On the circle', 'It cannot be determined'],
      answer: 2,
      solution: 'The circle is centered at the origin with radius $5$, so its equation is $x^2 + y^2 = 25$. Test the point: $3^2 + 4^2 = 9 + 16 = 25$, exactly $r^2$. The point sits exactly on the circle — $(3, 4)$ is $5$ units from the origin, the famous $3$-$4$-$5$ right triangle.',
    },
    {
      q: 'What is the equation of the circle shown?',
      fig: {
        view: [-3, -4, 7, 6],
        grid: true,
        elems: [
          { t: 'circle', c: [2, 1], r: 3 },
          { t: 'point', p: [2, 1], label: 'C', dx: 8, dy: -8 },
        ],
      },
      choices: ['$(x + 2)^2 + (y + 1)^2 = 9$', '$(x - 2)^2 + (y - 1)^2 = 9$', '$(x - 2)^2 + (y - 1)^2 = 3$', '$(x - 1)^2 + (y - 2)^2 = 9$'],
      answer: 1,
      solution: 'The center $C$ is at $(2, 1)$, and the circle reaches from $x = -1$ to $x = 5$, so the radius is $3$. The equation is $(x-2)^2 + (y-1)^2 = 3^2 = 9$. Watch two traps: the signs inside the parentheses are minus the center coordinates, and the right side is $r^2 = 9$, not $3$.',
    },
    {
      q: 'A circle has center $(-3, 4)$ and passes through the origin. What is its equation?',
      choices: ['$(x - 3)^2 + (y + 4)^2 = 25$', '$(x + 3)^2 + (y - 4)^2 = 5$', '$(x + 3)^2 + (y - 4)^2 = 7$', '$(x + 3)^2 + (y - 4)^2 = 25$'],
      answer: 3,
      solution: 'The radius is the distance from $(-3, 4)$ to $(0, 0)$: $r^2 = (-3)^2 + 4^2 = 9 + 16 = 25$. So the equation is $(x+3)^2 + (y-4)^2 = 25$. Handy shortcut: since we only need $r^2$, we never have to take a square root at all.',
    },
    {
      q: 'Is the point $(5, -2)$ inside, on, or outside the circle $(x - 1)^2 + (y + 2)^2 = 20$?',
      choices: ['Inside', 'On the circle', 'Outside', 'It depends on the radius'],
      answer: 0,
      solution: 'Plug in the point: $(5-1)^2 + (-2+2)^2 = 16 + 0 = 16$. Since $16 < 20 = r^2$, the point is closer to the center than the radius, so it lies inside the circle.',
    },
    {
      q: 'The equation $x^2 + y^2 - 4x + 6y + 4 = 0$ describes a circle. What are its center and radius?',
      choices: ['Center $(-2, 3)$, radius $3$', 'Center $(2, -3)$, radius $9$', 'Center $(2, -3)$, radius $3$', 'Center $(4, -6)$, radius $3$'],
      answer: 2,
      solution: 'Complete both squares: $x^2 - 4x = (x-2)^2 - 4$ and $y^2 + 6y = (y+3)^2 - 9$. The equation becomes $(x-2)^2 + (y+3)^2 - 4 - 9 + 4 = 0$, so $(x-2)^2 + (y+3)^2 = 9$. Center $(2, -3)$, radius $\\sqrt{9} = 3$.',
    },
    {
      q: 'Where does the circle $(x - 1)^2 + (y - 2)^2 = 8$ cross the $x$-axis?',
      choices: ['It never crosses the $x$-axis', 'At $(3, 0)$ and $(-1, 0)$', 'At $(1, 0)$ only', 'At $(2, 0)$ and $(0, 0)$'],
      answer: 1,
      solution: 'On the $x$-axis, $y = 0$. Substitute: $(x-1)^2 + 4 = 8$, so $(x-1)^2 = 4$, giving $x - 1 = \\pm 2$. Then $x = 3$ or $x = -1$, so the crossings are $(3, 0)$ and $(-1, 0)$. Do not forget the negative square root — that is where the second intercept hides.',
    },
    {
      q: 'A circle has a diameter with endpoints $(-1, 2)$ and $(5, 10)$. What is its equation?',
      choices: ['$(x - 2)^2 + (y - 6)^2 = 25$', '$(x - 2)^2 + (y - 6)^2 = 100$', '$(x + 2)^2 + (y + 6)^2 = 25$', '$(x - 4)^2 + (y - 8)^2 = 25$'],
      answer: 0,
      solution: 'The center is the midpoint of the diameter: $\\left(\\frac{-1+5}{2}, \\frac{2+10}{2}\\right) = (2, 6)$. The radius is the distance from the center to an endpoint: $r^2 = (5-2)^2 + (10-6)^2 = 9 + 16 = 25$. So the equation is $(x-2)^2 + (y-6)^2 = 25$. (Using the full diameter length $10$ would give $100$ — but the equation wants the radius squared.)',
    },
  ],
}

const challenge = [
  {
    q: 'What is the vertex of the parabola $y = x^2 + 4x + 1$?',
    choices: ['$(-2, -3)$', '$(2, -3)$', '$(-2, 1)$', '$(-4, 1)$'],
    answer: 0,
    solution: 'The vertex is at $x = -\\frac{b}{2a} = -\\frac{4}{2} = -2$, and $y = 4 - 8 + 1 = -3$. So the vertex is $(-2, -3)$. Completing the square agrees: $y = (x+2)^2 - 3$.',
  },
  {
    q: 'What are the $x$-intercepts of the parabola shown?',
    fig: {
      view: [-6, -4, 4, 6],
      grid: true,
      elems: [
        { t: 'parabola', a: -1, b: -2, c: 3 },
      ],
    },
    choices: ['$x = 3$ and $x = -1$', '$x = -1$ and $x = 4$', '$x = -3$ and $x = 1$', '$x = 0$ and $x = 3$'],
    answer: 2,
    solution: 'The $x$-intercepts are where the curve meets the $x$-axis: at $x = -3$ and $x = 1$. As a check, the axis of symmetry should sit midway between them at $x = -1$ — and the highest point of this downward parabola is indeed at $(-1, 4)$.',
  },
  {
    q: 'What is the vertex of $y = 3(x + 2)^2 - 7$?',
    choices: ['$(2, -7)$', '$(-2, -7)$', '$(2, 7)$', '$(-2, 7)$'],
    answer: 1,
    solution: 'Vertex form is $y = a(x-h)^2 + k$ with vertex $(h, k)$. Here $x + 2 = x - (-2)$, so $h = -2$, and $k = -7$. The vertex is $(-2, -7)$. The $3$ out front makes the parabola skinny but does not move the vertex.',
  },
  {
    q: 'The equation $x^2 + y^2 + 10x - 4y + 20 = 0$ describes a circle. What are its center and radius?',
    choices: ['Center $(5, -2)$, radius $3$', 'Center $(-5, 2)$, radius $9$', 'Center $(-10, 4)$, radius $3$', 'Center $(-5, 2)$, radius $3$'],
    answer: 3,
    solution: 'Complete both squares: $x^2 + 10x = (x+5)^2 - 25$ and $y^2 - 4y = (y-2)^2 - 4$. Then $(x+5)^2 + (y-2)^2 = 25 + 4 - 20 = 9$. The center is $(-5, 2)$ and the radius is $\\sqrt{9} = 3$.',
  },
  {
    q: 'How many $x$-intercepts does the graph of $y = -2x^2 + 4x - 2$ have?',
    choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
    answer: 1,
    solution: 'The discriminant is $b^2 - 4ac = 16 - 4(-2)(-2) = 16 - 16 = 0$, so there is exactly one solution — the vertex itself touches the axis. Indeed, $y = -2(x-1)^2$, which is $0$ only at $x = 1$.',
  },
  {
    q: 'What is the equation of the circle shown?',
    fig: {
      view: [-8, -3, 4, 9],
      grid: true,
      elems: [
        { t: 'circle', c: [-2, 3], r: 4 },
        { t: 'point', p: [-2, 3], label: 'C', dx: 8, dy: -8 },
      ],
    },
    choices: ['$(x + 2)^2 + (y - 3)^2 = 16$', '$(x - 2)^2 + (y + 3)^2 = 16$', '$(x + 2)^2 + (y - 3)^2 = 4$', '$(x - 3)^2 + (y + 2)^2 = 16$'],
    answer: 0,
    solution: 'The center $C$ is at $(-2, 3)$, and the circle reaches from $x = -6$ to $x = 2$, so the radius is $4$. The equation is $(x+2)^2 + (y-3)^2 = 4^2 = 16$: subtracting the negative center coordinate turns into a plus, and the right side is the radius squared.',
  },
  {
    q: 'What is the minimum value of $y = x^2 - 8x + 15$?',
    choices: ['$15$', '$4$', '$1$', '$-1$'],
    answer: 3,
    solution: 'Since $a = 1 > 0$ the parabola opens up, so the minimum happens at the vertex: $x = -\\frac{-8}{2} = 4$, and $y = 16 - 32 + 15 = -1$. The minimum value is $-1$. (The question asks for the smallest $y$, not the $x$ where it happens.)',
  },
  {
    q: 'Is the point $(2, -1)$ inside, on, or outside the circle $(x + 1)^2 + (y - 3)^2 = 25$?',
    choices: ['Inside', 'Outside', 'On the circle', 'It cannot be determined'],
    answer: 2,
    solution: 'Plug in: $(2+1)^2 + (-1-3)^2 = 9 + 16 = 25$, which equals $r^2$ exactly. The point is on the circle — it sits precisely $5$ units from the center $(-1, 3)$.',
  },
  {
    q: 'A parabola passes through the points $(0, 5)$ and $(6, 5)$. What is its axis of symmetry?',
    choices: ['$x = 5$', '$x = 3$', '$x = 6$', 'It cannot be determined'],
    answer: 1,
    solution: 'The two points have the same $y$-value, so they are mirror twins across the axis of symmetry. The axis passes exactly midway between $x = 0$ and $x = 6$: the line $x = 3$.',
  },
  {
    q: 'A circle with center $(4, -3)$ is tangent to the $y$-axis (it touches the axis at exactly one point). What is its equation?',
    choices: ['$(x - 4)^2 + (y + 3)^2 = 9$', '$(x + 4)^2 + (y - 3)^2 = 16$', '$(x - 4)^2 + (y + 3)^2 = 16$', '$(x - 4)^2 + (y + 3)^2 = 25$'],
    answer: 2,
    solution: 'The distance from the center $(4, -3)$ to the $y$-axis is $4$ (the horizontal distance). Tangent means the circle just barely reaches the axis, so the radius is exactly $4$ and $r^2 = 16$. The equation is $(x-4)^2 + (y+3)^2 = 16$. (Radius $3$ would come from using the vertical coordinate — but the $y$-axis is a vertical line, so horizontal distance is what matters.)',
  },
  {
    q: 'How many $x$-intercepts does $y = 2(x - 1)^2 + 3$ have?',
    choices: ['$0$', '$1$', '$2$', '$3$'],
    answer: 0,
    solution: 'The vertex is $(1, 3)$, which is above the $x$-axis, and $a = 2 > 0$ means the parabola opens upward from there. The whole graph stays at height $3$ or above, so it never reaches the $x$-axis: zero intercepts.',
  },
  {
    q: 'What is the equation of the parabola shown?',
    fig: {
      view: [-6, -3, 2, 7],
      grid: true,
      elems: [
        { t: 'parabola', a: 1, b: 4, c: 3 },
      ],
    },
    choices: ['$y = (x - 2)^2 - 1$', '$y = -(x + 2)^2 - 1$', '$y = (x + 2)^2 + 1$', '$y = (x + 2)^2 - 1$'],
    answer: 3,
    solution: 'The lowest point of the parabola is the vertex $(-2, -1)$, and it opens upward, so vertex form gives $y = a(x+2)^2 - 1$ with $a > 0$. Check the $y$-intercept: the graph crosses the $y$-axis at $(0, 3)$, and $(0+2)^2 - 1 = 3$ works perfectly with $a = 1$. So $y = (x+2)^2 - 1$.',
  },
]

const worksheet = [
  {
    q: 'Find the vertex and the axis of symmetry of the parabola $y = (x - 5)^2 + 2$.',
    answer: 'Vertex $(5, 2)$; axis of symmetry $x = 5$',
    solution: 'The equation is already in vertex form $y = a(x-h)^2 + k$ with $h = 5$ and $k = 2$, so the vertex is $(5, 2)$. The axis of symmetry is the vertical line through the vertex: $x = 5$.',
  },
  {
    q: 'Complete the square to write $y = x^2 + 6x + 4$ in vertex form, and give the vertex.',
    answer: '$y = (x + 3)^2 - 5$; vertex $(-3, -5)$',
    solution: 'Half of $6$ is $3$, and $3^2 = 9$: so $y = (x^2 + 6x + 9) - 9 + 4 = (x+3)^2 - 5$. The squared part vanishes when $x = -3$, giving the vertex $(-3, -5)$.',
  },
  {
    q: 'Find all intercepts of the graph of $y = x^2 - 2x - 8$.',
    answer: '$x$-intercepts $(4, 0)$ and $(-2, 0)$; $y$-intercept $(0, -8)$',
    solution: 'Factor to find the roots: $x^2 - 2x - 8 = (x-4)(x+2)$, so the graph crosses the $x$-axis at $x = 4$ and $x = -2$. Setting $x = 0$ gives $y = -8$, so the $y$-intercept is $(0, -8)$.',
  },
  {
    q: 'Write the equation of the circle with center $(2, -7)$ and radius $6$.',
    answer: '$(x - 2)^2 + (y + 7)^2 = 36$',
    solution: 'Use $(x-h)^2 + (y-k)^2 = r^2$ with $h = 2$, $k = -7$, $r = 6$. Subtracting $-7$ becomes adding $7$, and $r^2 = 36$: the equation is $(x-2)^2 + (y+7)^2 = 36$.',
  },
  {
    q: 'Find the center and radius of the circle $x^2 + y^2 - 2x - 8y + 8 = 0$.',
    answer: 'Center $(1, 4)$, radius $3$',
    solution: 'Complete both squares: $x^2 - 2x = (x-1)^2 - 1$ and $y^2 - 8y = (y-4)^2 - 16$. Then $(x-1)^2 + (y-4)^2 = 1 + 16 - 8 = 9$, so the center is $(1, 4)$ and the radius is $\\sqrt{9} = 3$.',
  },
  {
    q: 'Is the point $(7, 1)$ inside, on, or outside the circle $x^2 + y^2 = 49$?',
    answer: 'Outside',
    solution: 'Plug in: $7^2 + 1^2 = 49 + 1 = 50$. Since $50 > 49 = r^2$, the point is just barely outside the circle. The point $(7, 0)$ would be exactly on it — nudging up to $(7, 1)$ pushes the distance past the radius.',
  },
  {
    q: 'Find the maximum value of $y = -2x^2 + 12x - 11$, and the value of $x$ where it occurs.',
    answer: 'Maximum value $7$, at $x = 3$',
    solution: 'Since $a = -2 < 0$, the parabola opens downward and the vertex is the highest point. The vertex is at $x = -\\frac{12}{2(-2)} = 3$, and $y = -2(9) + 36 - 11 = -18 + 36 - 11 = 7$. So the maximum value is $7$, reached at $x = 3$.',
  },
  {
    q: 'Find the equation of the circle with center $(-3, 4)$ that passes through the point $(1, 1)$.',
    answer: '$(x + 3)^2 + (y - 4)^2 = 25$',
    solution: 'The radius squared is the squared distance from the center to the point: $r^2 = (1 - (-3))^2 + (1 - 4)^2 = 16 + 9 = 25$. So the equation is $(x+3)^2 + (y-4)^2 = 25$ — a radius of exactly $5$.',
  },
  {
    q: 'The parabola $y = x^2 + bx + c$ has vertex $(2, -9)$. Find $b$ and $c$.',
    answer: '$b = -4$ and $c = -5$',
    solution: 'The vertex sits at $x = -\\frac{b}{2}$, so $-\\frac{b}{2} = 2$ gives $b = -4$. Then plug the vertex in: $-9 = 2^2 - 4(2) + c = 4 - 8 + c$, so $c = -5$. Check: $y = x^2 - 4x - 5 = (x-2)^2 - 9$ has vertex $(2, -9)$.',
  },
  {
    q: 'Find the points where the circle $x^2 + y^2 - 6y - 16 = 0$ crosses the $x$-axis.',
    answer: '$(4, 0)$ and $(-4, 0)$',
    solution: 'First complete the square: $y^2 - 6y = (y-3)^2 - 9$, so the circle is $x^2 + (y-3)^2 = 25$ — center $(0, 3)$, radius $5$. On the $x$-axis, $y = 0$: then $x^2 + 9 = 25$, so $x^2 = 16$ and $x = \\pm 4$. The circle crosses at $(4, 0)$ and $(-4, 0)$.',
  },
]

export default {
  id: 'intro-algebra-ch14',
  book: 'intro-algebra',
  number: 14,
  title: 'Graphing Quadratics',
  intro:
    'You already know how to solve quadratic equations — now you get to see them. Every quadratic draws a graceful curve called a parabola, and the same completing-the-square trick you mastered will pinpoint its most important spot. Along the way we will meet the circle, whose equation is really the Pythagorean Theorem wearing a disguise.',
  sections: [s141, s142],
  challenge,
  worksheet,
}
