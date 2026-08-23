// Introduction to Algebra — Chapter 17: Graphing Functions
// All problems, explanations, and examples are original MathQuest content.

const s171 = {
  id: '17.1',
  title: 'Basics',
  learn: {
    concepts: [
      {
        heading: 'A graph is a picture of every input-output pair',
        body: 'The graph of a function $f$ is the collection of ALL points $(x, f(x))$ — one point for every allowed input. So the single statement "the point $(3, 7)$ is on the graph of $f$" means exactly $f(3) = 7$: input $3$, output $7$. The graph packs infinitely many facts about $f$ into one picture.',
      },
      {
        heading: 'The vertical line test',
        body: 'A function gives each input exactly ONE output. On a graph, all the points with $x = a$ sit on the vertical line through $a$ — so a graph of a function can touch each vertical line at most once. If some vertical line crosses a curve twice, that curve is not the graph of a function.',
      },
      {
        heading: 'Reading values and solving equations by eye',
        body: 'To find $f(a)$ from a graph: go to $x = a$ on the horizontal axis, travel straight up or down to the graph, and read off the height. To solve $f(x) = k$: draw the horizontal line $y = k$ and look for crossings — each crossing point gives one solution $x$, and the number of crossings is the number of solutions.',
      },
      {
        heading: 'Intercepts, domain, and range',
        body: 'The $y$-intercept is where the graph meets the $y$-axis: the point $(0, f(0))$. A function has at most one — that is the vertical line test at $x = 0$! The $x$-intercepts are the points where $f(x) = 0$, and there can be many. The domain is the graph’s shadow on the $x$-axis (all inputs used), and the range is its shadow on the $y$-axis (all outputs reached).',
      },
    ],
    examples: [
      {
        problem: 'The graph of $y = f(x)$ is shown. Find $f(1)$ and $f(-3)$.',
        steps: [
          'For $f(1)$: start at $x = 1$ on the horizontal axis and drop straight down to the graph. You land at the point $(1, -1)$, so $f(1) = -1$.',
          'For $f(-3)$: at $x = -3$ the graph passes through $(-3, 1)$, so $f(-3) = 1$.',
          'Notice we never needed a formula — the graph itself answers every "what is $f$ of..." question.',
        ],
        answer: '$f(1) = -1$ and $f(-3) = 1$',
        fig: {
          view: [-4, -3, 4, 4],
          grid: true,
          elems: [
            { t: 'curve', pts: [[-3, 1], [0, -2], [3, 1]] },
            { t: 'seg', a: [1, 0], b: [1, -1], dash: true },
            { t: 'point', p: [1, -1], label: 'P', dx: 10, dy: 8 },
            { t: 'label', p: [1.9, 2.4], text: 'y = f(x)' },
          ],
        },
      },
      {
        problem: 'The curve shown passes through both $(1, 1)$ and $(1, -1)$. Is it the graph of a function?',
        steps: [
          'A function must give the input $1$ exactly one output. This curve claims the output is $1$ AND $-1$ — that is two outputs for one input.',
          'Graphically: the vertical line $x = 1$ crosses the curve twice, so it fails the vertical line test.',
          'So this curve is not the graph of any function of $x$.',
        ],
        answer: 'No — the vertical line $x = 1$ hits it twice, so it fails the vertical line test',
        fig: {
          view: [-1, -3, 5, 3],
          grid: true,
          elems: [
            { t: 'curve', pts: [[4, -2], [3.24, -1.8], [2.56, -1.6], [1.96, -1.4], [1.44, -1.2], [1, -1], [0.64, -0.8], [0.36, -0.6], [0.16, -0.4], [0.04, -0.2], [0, 0], [0.04, 0.2], [0.16, 0.4], [0.36, 0.6], [0.64, 0.8], [1, 1], [1.44, 1.2], [1.96, 1.4], [2.56, 1.6], [3.24, 1.8], [4, 2]] },
            { t: 'seg', a: [1, -2.5], b: [1, 2.5], dash: true },
            { t: 'point', p: [1, 1] },
            { t: 'point', p: [1, -1] },
            { t: 'label', p: [1.6, 2.3], text: 'x = 1' },
          ],
        },
      },
      {
        problem: 'The point $(5, 2)$ is on the graph of $g$, and the $y$-intercept of the graph is $(0, 7)$. Find $g(5) + g(0)$.',
        steps: [
          'A point on the graph is an input-output fact: $(5, 2)$ on the graph means $g(5) = 2$.',
          'The $y$-intercept is the point with input $0$, so $(0, 7)$ means $g(0) = 7$.',
          'Add the two outputs: $g(5) + g(0) = 2 + 7 = 9$.',
        ],
        answer: '$g(5) + g(0) = 9$',
      },
    ],
  },
  problems: [
    {
      q: 'The point $(3, 8)$ is on the graph of $y = f(x)$. What is $f(3)$?',
      choices: ['$3$', '$8$', '$24$', '$5$'],
      answer: 1,
      solution: 'A point $(a, b)$ on the graph means exactly $f(a) = b$: the first coordinate is the input, the second is the output. So $f(3) = 8$. (Careful not to swap the coordinates — the input always comes first.)',
    },
    {
      q: 'The graph of $y = f(x)$ is shown. What is $f(0)$?',
      fig: {
        view: [-5, -3, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, -2], [-1, 4], [2, -2], [4, 2]] },
          { t: 'label', p: [-3.9, 3.6], text: 'y = f(x)' },
        ],
      },
      choices: ['$4$', '$0$', '$2$', '$-2$'],
      answer: 2,
      solution: '$f(0)$ is the height of the graph above $x = 0$ — where the graph crosses the $y$-axis. The segment from $(-1, 4)$ down to $(2, -2)$ drops $2$ units for every $1$ unit right, so one unit right of $(-1, 4)$ it passes through $(0, 2)$. Thus $f(0) = 2$.',
    },
    {
      q: 'Which point is on the graph of $f(x) = 2x - 3$?',
      choices: ['$(2, 1)$', '$(1, 2)$', '$(2, -1)$', '$(0, 3)$'],
      answer: 0,
      solution: 'Test each point by plugging in the $x$-coordinate: $f(2) = 2(2) - 3 = 1$, so $(2, 1)$ is on the graph. Checking the others: $f(1) = -1$ (not $2$), and $f(0) = -3$ (not $3$ — watch that sign!). The pair $(1, 2)$ is $(2, 1)$ with the coordinates swapped, a classic mix-up.',
    },
    {
      q: 'Which of these curves is NOT the graph of a function?',
      choices: ['A parabola opening upward', 'A V-shaped graph', 'A circle', 'A line with slope $3$'],
      answer: 2,
      solution: 'A vertical line through the middle of a circle crosses it twice — once on top, once on bottom — so a circle fails the vertical line test. The parabola, the V, and the slanted line each meet every vertical line at most once, so they all pass.',
    },
    {
      q: 'The graph of $y = f(x)$ is shown. How many solutions does the equation $f(x) = 0$ have?',
      fig: {
        view: [-5, -3, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, -2], [-1, 4], [2, -2], [4, 2]] },
          { t: 'label', p: [-3.9, 3.6], text: 'y = f(x)' },
        ],
      },
      choices: ['$2$', '$3$', '$1$', '$0$'],
      answer: 1,
      solution: 'Solutions of $f(x) = 0$ are the places where the graph crosses the $x$-axis. It crosses on the way up at $x = -3$, on the way down at $x = 1$, and on the way up again at $x = 3$ — three crossings, so three solutions.',
    },
    {
      q: 'What is the $y$-intercept of the graph of $f(x) = x^2 - 9$?',
      choices: ['$(-9, 0)$', '$(0, 9)$', '$(3, 0)$', '$(0, -9)$'],
      answer: 3,
      solution: 'The $y$-intercept is the point with input $0$: compute $f(0) = 0^2 - 9 = -9$, giving the point $(0, -9)$. The point $(3, 0)$ is an $x$-intercept — a different thing! And $(-9, 0)$ has the coordinates in the wrong slots.',
    },
    {
      q: 'The graph of $y = f(x)$ shown starts at $(-3, 1)$ and ends at $(4, -2)$. What is the range of $f$?',
      fig: {
        view: [-4, -3, 5, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 1], [1, 3], [4, -2]] },
          { t: 'point', p: [-3, 1] },
          { t: 'point', p: [4, -2] },
          { t: 'label', p: [2.8, 2.6], text: 'y = f(x)' },
        ],
      },
      choices: ['$-2 \\le y \\le 3$', '$-3 \\le y \\le 4$', '$1 \\le y \\le 3$', '$-2 \\le y \\le 1$'],
      answer: 0,
      solution: 'The range is the set of OUTPUTS — the graph’s shadow on the $y$-axis. The highest point is $(1, 3)$ and the lowest is $(4, -2)$, and the graph is unbroken, so every height from $-2$ up to $3$ is reached: $-2 \\le y \\le 3$. (The choice $-3 \\le y \\le 4$ is the domain, the shadow on the $x$-axis.)',
    },
    {
      q: 'The horizontal line $y = 2$ crosses the graph of a function $f$ exactly three times. What does this tell you?',
      choices: ['$f(2)$ has three different values', 'The equation $f(x) = 2$ has exactly three solutions', '$f$ is not a function', 'The graph has three $x$-intercepts'],
      answer: 1,
      solution: 'Each crossing with $y = 2$ is a point where the output equals $2$ — that is, a solution of $f(x) = 2$. Three crossings means exactly three solutions. It does NOT mean $f(2)$ has three values (that would violate the vertical line test), and $x$-intercepts come from the line $y = 0$, not $y = 2$.',
    },
    {
      q: 'The graph of $f(x) = x^2 - 2x - 8$ crosses the $x$-axis at two points. How far apart are they?',
      choices: ['$2$', '$4$', '$8$', '$6$'],
      answer: 3,
      solution: '$x$-intercepts solve $f(x) = 0$. Factor: $x^2 - 2x - 8 = (x - 4)(x + 2)$, so the crossings are at $x = 4$ and $x = -2$. Both points sit on the $x$-axis, so their distance is $4 - (-2) = 6$.',
    },
    {
      q: 'The graph of a function $f$ passes through $(2, 5)$. Which point CANNOT also be on the graph?',
      choices: ['$(5, 2)$', '$(-2, 5)$', '$(2, 7)$', '$(7, 2)$'],
      answer: 2,
      solution: 'A function gives the input $2$ only one output. Since $f(2) = 5$ already, the graph cannot also contain $(2, 7)$ — that would put two points on the vertical line $x = 2$. The other points are fine: $(5, 2)$ just says $f(5) = 2$, a different input, and outputs are allowed to repeat.',
    },
  ],
}

const s172 = {
  id: '17.2',
  title: 'Transformations',
  learn: {
    concepts: [
      {
        heading: 'Adding outside slides up or down',
        body: 'The graph of $y = f(x) + k$ is the graph of $f$ slid UP by $k$ (down if $k$ is negative). Why? Every output gets $k$ added, so every point rises: $(a, b)$ moves to $(a, b + k)$. The shape does not change at all — the whole picture just floats.',
      },
      {
        heading: 'Adding inside slides left or right — watch the direction!',
        body: 'The graph of $y = f(x - h)$ is the graph of $f$ slid RIGHT by $h$. The minus sign moving you right feels backwards, so here is the why: to get the same old output, the new input must be $h$ BIGGER, so $x - h$ hits the old value. Each point $(a, b)$ moves to $(a + h, b)$. Likewise $f(x + 4)$ slides LEFT $4$.',
      },
      {
        heading: 'Minus signs flip the graph',
        body: 'The graph of $y = -f(x)$ negates every output, flipping the graph over the $x$-axis: $(a, b) \\to (a, -b)$. The graph of $y = f(-x)$ negates every input, flipping over the $y$-axis: $(a, b) \\to (-a, b)$. Outside the function touches outputs (vertical); inside touches inputs (horizontal).',
      },
      {
        heading: 'Stretching, squashing, and combining',
        body: 'The graph of $y = 2f(x)$ doubles every height — a vertical stretch — while $y = \\frac{1}{2}f(x)$ squashes every height in half. Points on the $x$-axis have height $0$, so they never move! To combine transformations, track one point at a time: for $y = 2f(x - 3) + 1$, a point slides right $3$, has its height doubled, then rises $1$.',
      },
    ],
    examples: [
      {
        problem: 'The point $(3, 4)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x - 2) + 1$?',
        steps: [
          'Handle the inside first: $f(x - 2)$ slides the graph right $2$, so $(3, 4)$ moves to $(5, 4)$. Check: plugging $x = 5$ into $f(x - 2)$ gives $f(3) = 4$. It works!',
          'Now the outside: $+1$ raises every point by $1$, so $(5, 4)$ moves to $(5, 5)$.',
          'Inside changes touch the $x$-coordinate (in the tricky reversed way); outside changes touch the $y$-coordinate (in the natural way).',
        ],
        answer: 'The point $(5, 5)$ is on the graph of $y = f(x - 2) + 1$',
      },
      {
        problem: 'The graph of $f(x) = |x|$ and a second graph are shown. Describe the second graph using $f$.',
        steps: [
          'The two graphs are the same V shape — same size, same direction — so this is a pure slide, no flip or stretch.',
          'The corner moved from $(0, 0)$ to $(2, 0)$: a slide of $2$ to the RIGHT with no vertical motion.',
          'A slide right $2$ is written $y = f(x - 2)$ — minus inside for a rightward move. Check the corner: at $x = 2$, $f(2 - 2) = f(0) = 0$. Correct!',
        ],
        answer: 'The second graph is $y = f(x - 2)$, the graph of $f$ shifted right $2$',
        fig: {
          view: [-4, -1, 6, 4],
          grid: true,
          elems: [
            { t: 'curve', pts: [[-3, 3], [0, 0], [3, 3]] },
            { t: 'curve', pts: [[-1, 3], [2, 0], [5, 3]] },
            { t: 'label', p: [-2.6, 3.5], text: 'y = f(x)' },
            { t: 'label', p: [4.6, 3.5], text: 'new graph' },
          ],
        },
      },
      {
        problem: 'The point $(1, -3)$ is on the graph of $y = f(x)$. Where does it land on the graph of $y = -2f(x)$?',
        steps: [
          'Everything happens outside the function, so only the $y$-coordinate changes; the point stays at $x = 1$.',
          'First the stretch: $2f(1) = 2(-3) = -6$. Then the flip: $-2f(1) = 6$.',
          'So the point lands at $(1, 6)$: height doubled, then reflected over the $x$-axis.',
        ],
        answer: 'The point lands at $(1, 6)$',
      },
    ],
  },
  problems: [
    {
      q: 'How does the graph of $y = f(x) + 5$ compare to the graph of $y = f(x)$?',
      choices: ['It is shifted up $5$', 'It is shifted down $5$', 'It is shifted right $5$', 'It is shifted left $5$'],
      answer: 0,
      solution: 'The $+5$ sits OUTSIDE the function, so it adds $5$ to every output: each point $(a, b)$ rises to $(a, b + 5)$. The whole graph slides up $5$.',
    },
    {
      q: 'How does the graph of $y = f(x - 3)$ compare to the graph of $y = f(x)$?',
      choices: ['It is shifted left $3$', 'It is shifted up $3$', 'It is shifted down $3$', 'It is shifted right $3$'],
      answer: 3,
      solution: 'This is the classic direction trap! The $-3$ is INSIDE, and inside changes run backwards: to feed the function its old input, $x$ must be $3$ bigger. So the graph shifts RIGHT $3$. Check with a point: if $f(0) = 7$, then $f(x - 3)$ equals $7$ at $x = 3$ — the point moved from $x = 0$ to $x = 3$.',
    },
    {
      q: 'The point $(2, 7)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = -f(x)$?',
      choices: ['$(-2, 7)$', '$(2, -7)$', '$(-2, -7)$', '$(7, 2)$'],
      answer: 1,
      solution: 'The minus sign is outside, so it flips OUTPUTS: $(a, b) \\to (a, -b)$, a reflection over the $x$-axis. So $(2, 7)$ lands at $(2, -7)$. (The point $(-2, 7)$ is what $y = f(-x)$ would give — that flip negates inputs instead.)',
    },
    {
      q: 'The graph of $y = f(-x)$ is the graph of $y = f(x)$ flipped over which line?',
      choices: ['The $x$-axis', 'The $y$-axis', 'The line $y = x$', 'It is not flipped — it slides left'],
      answer: 1,
      solution: 'The minus sign is inside, so it negates INPUTS: the point $(a, b)$ moves to $(-a, b)$. Left and right trade places while heights stay put — that is a flip over the $y$-axis. (Flipping over the $x$-axis is $y = -f(x)$, with the minus outside.)',
    },
    {
      q: 'The point $(6, -2)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x + 4)$?',
      choices: ['$(2, -2)$', '$(10, -2)$', '$(6, 2)$', '$(10, 2)$'],
      answer: 0,
      solution: 'A $+4$ inside slides the graph LEFT $4$ (inside changes run backwards). So $(6, -2)$ moves to $(2, -2)$. Check: at $x = 2$, $f(2 + 4) = f(6) = -2$. The $y$-coordinate never changes in a horizontal slide.',
    },
    {
      q: 'The graph of $f(x) = |x|$ and a new graph are shown. Which equation describes the new graph?',
      fig: {
        view: [-4, -2, 4, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 3], [0, 0], [3, 3]] },
          { t: 'curve', pts: [[-3, -1], [0, 2], [3, -1]] },
          { t: 'label', p: [-2.6, 3.5], text: 'y = f(x)' },
          { t: 'label', p: [2.2, -1.6], text: 'new graph' },
        ],
      },
      choices: ['$y = f(-x) + 2$', '$y = -f(x + 2)$', '$y = f(x) - 2$', '$y = -f(x) + 2$'],
      answer: 3,
      solution: 'The new V opens DOWNWARD, so the graph was flipped over the $x$-axis: that requires a minus sign outside, $-f(x)$. Its peak sits at $(0, 2)$, two units up from the flipped corner, so we then add $2$: $y = -f(x) + 2$. Check a point: at $x = 3$, $-f(3) + 2 = -3 + 2 = -1$, matching the graph.',
    },
    {
      q: 'Let $g(x) = f(x - 1) - 4$. The point $(2, 3)$ is on the graph of $f$. Where does it land on the graph of $g$?',
      choices: ['$(1, -1)$', '$(3, 7)$', '$(3, -1)$', '$(1, 7)$'],
      answer: 2,
      solution: 'Inside: $x - 1$ slides right $1$, so the $x$-coordinate goes $2 \\to 3$. Outside: $-4$ slides down $4$, so the $y$-coordinate goes $3 \\to -1$. The point lands at $(3, -1)$. Check: $g(3) = f(2) - 4 = 3 - 4 = -1$.',
    },
    {
      q: 'No matter what the function $f$ is, which feature of its graph is guaranteed to stay the same on the graph of $y = 2f(x)$?',
      choices: ['The $y$-intercept', 'The $x$-intercepts', 'The highest point', 'Every point on the graph'],
      answer: 1,
      solution: 'A vertical stretch doubles every height — but a height of $0$ doubles to... still $0$! So every point ON the $x$-axis stays exactly where it is: the $x$-intercepts are unchanged. The $y$-intercept $(0, f(0))$ moves to $(0, 2f(0))$, which changes unless $f(0)$ happened to be $0$.',
    },
    {
      q: 'The graph of $y = f(x)$ is shown. Let $g(x) = f(x - 1) + 2$. What is $g(1)$?',
      fig: {
        view: [-3, -2, 3, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-2, 1], [0, 3], [2, -1]] },
          { t: 'label', p: [-1.6, 2.6], text: 'y = f(x)' },
        ],
      },
      choices: ['$3$', '$1$', '$5$', '$7$'],
      answer: 2,
      solution: 'Just follow the formula: $g(1) = f(1 - 1) + 2 = f(0) + 2$. From the graph, the peak is at $(0, 3)$, so $f(0) = 3$. Then $g(1) = 3 + 2 = 5$.',
    },
    {
      q: 'Start with the graph of $f(x) = x^2$, whose vertex is $(0, 0)$. What is the vertex of the graph of $y = f(x + 3) - 4$?',
      choices: ['$(3, -4)$', '$(-3, 4)$', '$(-3, -4)$', '$(3, 4)$'],
      answer: 2,
      solution: 'Track the vertex through each move. The $+3$ inside slides LEFT $3$: $(0, 0) \\to (-3, 0)$. The $-4$ outside slides DOWN $4$: $(-3, 0) \\to (-3, -4)$. Note both signs work against first instinct in different ways: inside is reversed, outside is not.',
    },
  ],
}

const s173 = {
  id: '17.3',
  title: 'Inverse Functions Revisited',
  learn: {
    concepts: [
      {
        heading: 'Inverse points are swapped points',
        body: 'The inverse function $f^{-1}$ undoes $f$: if $f(a) = b$, then $f^{-1}(b) = a$. In graph language: whenever $(a, b)$ is on the graph of $f$, the swapped point $(b, a)$ is on the graph of $f^{-1}$. Inputs and outputs trade jobs.',
      },
      {
        heading: 'The mirror is the line $y = x$',
        body: 'Swapping the coordinates of a point reflects it over the line $y = x$ — the point $(2, 5)$ and the point $(5, 2)$ are mirror images across that diagonal. Since EVERY point swaps, the whole graph of $f^{-1}$ is the reflection of the graph of $f$ over the line $y = x$.',
      },
      {
        heading: 'The horizontal line test',
        body: 'For $f^{-1}$ to be a function, each output of $f$ must come from only ONE input — otherwise $f^{-1}$ would not know which input to return. Graphically: no horizontal line may cross the graph of $f$ more than once. This is the horizontal line test, and it is exactly the vertical line test applied to the mirrored graph.',
      },
      {
        heading: 'Restricting the domain — and self-inverses',
        body: 'When a graph fails the horizontal line test, we can sometimes rescue an inverse by keeping only part of it. The parabola $y = x^2$ fails ($y = 4$ is hit at both $x = 2$ and $x = -2$), but the right half alone, with $x \\ge 0$, climbs steadily and passes. One more treat: a few functions are their OWN inverse — their graphs are symmetric across the line $y = x$, so reflecting changes nothing.',
      },
    ],
    examples: [
      {
        problem: 'Let $f(x) = 2x - 6$. The point $(5, 4)$ is on the graph of $f$. What point must be on the graph of $f^{-1}$, and what is $f^{-1}(4)$?',
        steps: [
          'First confirm the point: $f(5) = 2(5) - 6 = 4$, so $(5, 4)$ really is on the graph of $f$.',
          'The inverse swaps every point across $y = x$: $(5, 4)$ on $f$ becomes $(4, 5)$ on $f^{-1}$.',
          'A point $(4, 5)$ on the graph of $f^{-1}$ says exactly $f^{-1}(4) = 5$ — the inverse takes the output $4$ back to the input $5$.',
        ],
        answer: '$(4, 5)$ is on the graph of $f^{-1}$, so $f^{-1}(4) = 5$',
      },
      {
        problem: 'The graphs of $f(x) = 2x - 2$ and $f^{-1}$ are shown with the mirror line $y = x$ dashed. Use the picture to find $f^{-1}(4)$.',
        steps: [
          'The steep line is $f$; its mirror image over the dashed line $y = x$ is the shallow line, the graph of $f^{-1}$.',
          'We need the point on $f$ whose OUTPUT is $4$: since $f(3) = 2(3) - 2 = 4$, that point is $(3, 4)$.',
          'Swap it: $(4, 3)$ is on the graph of $f^{-1}$, so $f^{-1}(4) = 3$. Notice the two graphs cross at $(2, 2)$, right on the mirror line.',
        ],
        answer: '$f^{-1}(4) = 3$',
        fig: {
          view: [-5, -5, 5, 5],
          grid: true,
          elems: [
            { t: 'line', a: [-1, -4], b: [3, 4] },
            { t: 'line', a: [-4, -1], b: [4, 3] },
            { t: 'seg', a: [-4.5, -4.5], b: [4.5, 4.5], dash: true },
            { t: 'point', p: [2, 2] },
            { t: 'label', p: [1.4, 4.4], text: 'y = f(x)' },
            { t: 'label', p: [-3.5, 0.6], text: 'inverse' },
            { t: 'label', p: [4.2, 3.4], text: 'y = x' },
          ],
        },
      },
      {
        problem: 'Explain why $f(x) = x^2$ has no inverse, but becomes invertible if we restrict the domain to $x \\ge 0$.',
        steps: [
          'The horizontal line $y = 4$ crosses the full parabola twice, at $(-2, 4)$ and $(2, 4)$. An inverse would need $f^{-1}(4)$ to be both $-2$ and $2$ — impossible for a function.',
          'Keep only the right half ($x \\ge 0$): now the graph climbs steadily, and every horizontal line at height $y \\ge 0$ crosses exactly once.',
          'The restricted function passes the horizontal line test, so it has an inverse: for example $f^{-1}(4) = 2$, choosing the nonnegative input.',
        ],
        answer: 'The full parabola fails the horizontal line test; the half with $x \\ge 0$ passes, so that piece has an inverse',
      },
    ],
  },
  problems: [
    {
      q: 'The point $(3, 11)$ is on the graph of $y = f(x)$, and $f$ has an inverse. What point must be on the graph of $y = f^{-1}(x)$?',
      choices: ['$(3, 11)$', '$(-3, -11)$', '$(11, 3)$', '$(-11, -3)$'],
      answer: 2,
      solution: 'The inverse swaps inputs and outputs: $f(3) = 11$ becomes $f^{-1}(11) = 3$, which is the point $(11, 3)$. Swapping coordinates — not negating them — is the inverse move; negating both would be a rotation, a different transformation entirely.',
    },
    {
      q: 'The graph of $y = f^{-1}(x)$ is the reflection of the graph of $y = f(x)$ over:',
      choices: ['the $x$-axis', 'the $y$-axis', 'the origin', 'the line $y = x$'],
      answer: 3,
      solution: 'Every point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$, and swapping coordinates is exactly reflection over the diagonal line $y = x$. Flips over the axes come from minus signs ($-f(x)$ and $f(-x)$), not from inverses.',
    },
    {
      q: 'If $f(7) = 2$ and $f$ has an inverse, what is $f^{-1}(2)$?',
      choices: ['$7$', '$2$', '$\\frac{1}{2}$', '$\\frac{1}{7}$'],
      answer: 0,
      solution: '$f$ sends $7$ to $2$, so the inverse sends $2$ back to $7$: $f^{-1}(2) = 7$. Careful: $f^{-1}$ means the inverse FUNCTION, not the reciprocal — $\\frac{1}{2}$ would be $\\frac{1}{f(7)}$, a completely different object.',
    },
    {
      q: 'Which function passes the horizontal line test (and therefore has an inverse)?',
      choices: ['$f(x) = x^2$', '$f(x) = 2x + 1$', '$f(x) = |x|$', '$f(x) = 3$ (a constant function)'],
      answer: 1,
      solution: 'The line $y = 2x + 1$ climbs steadily, so each height is reached exactly once — every horizontal line crosses it once. The parabola and the V both hit most heights twice (once on each side), and the constant function is the worst offender: the line $y = 3$ overlaps its entire graph.',
    },
    {
      q: 'The graph of $y = f(x)$ is shown, and $f$ has an inverse. What is $f^{-1}(1)$?',
      fig: {
        view: [-4, -3, 5, 6],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, -2], [-1, 1], [2, 2], [4, 5]] },
          { t: 'seg', a: [-3.8, 1], b: [4.8, 1], dash: true },
          { t: 'label', p: [-3.3, 1.6], text: 'y = 1' },
          { t: 'label', p: [2.6, 4.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$-1$', '$1$', '$-3$', '$2$'],
      answer: 0,
      solution: '$f^{-1}(1)$ asks: which INPUT does $f$ send to the output $1$? Follow the dashed line $y = 1$ until it meets the graph — at the point $(-1, 1)$. So $f(-1) = 1$, which means $f^{-1}(1) = -1$. Reading an inverse value from the graph of $f$ means entering on the $y$-axis and exiting on the $x$-axis.',
    },
    {
      q: 'Which function is its own inverse?',
      choices: ['$f(x) = x + 10$', '$f(x) = 10 - x$', '$f(x) = 10x$', '$f(x) = x^2$'],
      answer: 1,
      solution: 'Apply $f(x) = 10 - x$ twice: $f(f(x)) = 10 - (10 - x) = x$ — you are back where you started, so $f$ undoes itself. Try a point: $f(3) = 7$ and $f(7) = 3$; the graph contains both $(3, 7)$ and $(7, 3)$, its own mirror image over $y = x$. The others fail: adding $10$ twice adds $20$, and multiplying by $10$ twice multiplies by $100$.',
    },
    {
      q: 'The graph of a function $f$ fails the horizontal line test. What does that mean?',
      choices: ['$f$ is not a function', 'The graph also fails the vertical line test', '$f^{-1}(x) = \\frac{1}{f(x)}$', 'Two different inputs give the same output, so $f$ has no inverse'],
      answer: 3,
      solution: 'A horizontal line crossing twice means two different inputs land on the same output. An inverse would have to send that output back to BOTH inputs at once — impossible for a function, so $f$ has no inverse. Note $f$ itself is still a perfectly good function; it is only the reverse trip that breaks.',
    },
    {
      q: 'Let $f(x) = x^2$ with the domain restricted to $x \\ge 0$. What is $f^{-1}(9)$?',
      choices: ['$81$', '$3$ or $-3$', '$3$', '$-3$'],
      answer: 2,
      solution: 'We need the input in the restricted domain that outputs $9$. Both $3^2 = 9$ and $(-3)^2 = 9$, but $-3$ was thrown out of the domain — that is exactly why we restricted! Only $x = 3$ remains, so $f^{-1}(9) = 3$. (And $81$ is $f(9)$, the forward direction by mistake.)',
    },
    {
      q: 'Let $f(x) = 3x - 8$. The graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross at exactly one point. What is it?',
      choices: ['$(4, 4)$', '$(8, 8)$', '$(-4, -4)$', '$(2, 2)$'],
      answer: 0,
      solution: 'Since $f$ is an increasing line, its graph and its mirror image can only meet ON the mirror $y = x$. Solve $f(x) = x$: $3x - 8 = x$ gives $2x = 8$, so $x = 4$ and the point is $(4, 4)$. Check: $f(4) = 4$, and a point equal to its own swap is on both graphs.',
    },
    {
      q: 'The full graph of $f(x) = |x| - 1$ is a V, which fails the horizontal line test. Which domain restriction makes $f$ invertible?',
      choices: ['Keep only $y \\ge 0$', 'Keep only $x \\ge 0$', 'Keep only $-2 \\le x \\le 2$', 'No restriction is needed'],
      answer: 1,
      solution: 'The V hits each height above $-1$ twice, once on each arm. Keeping only $x \\ge 0$ keeps a single climbing arm, so every horizontal line now crosses at most once — invertible! Note we must restrict the DOMAIN (which $x$-values are allowed); "keep $y \\ge 0$" trims outputs but still leaves two arms, and $-2 \\le x \\le 2$ still contains both arms too.',
    },
  ],
}

const challenge = [
  {
    q: 'The point $(-2, 5)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x - 3) + 1$?',
    choices: ['$(-5, 6)$', '$(1, 6)$', '$(1, 4)$', '$(-5, 4)$'],
    answer: 1,
    solution: 'The $-3$ inside slides right $3$: the $x$-coordinate goes $-2 \\to 1$. The $+1$ outside slides up $1$: the $y$-coordinate goes $5 \\to 6$. The point lands at $(1, 6)$. Check: $f(1 - 3) + 1 = f(-2) + 1 = 5 + 1 = 6$.',
  },
  {
    q: 'The point $(3, 7)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(-x)$?',
    choices: ['$(3, -7)$', '$(-3, -7)$', '$(-3, 7)$', '$(7, 3)$'],
    answer: 2,
    solution: 'The minus is inside, so it flips the graph over the $y$-axis: $(a, b) \\to (-a, b)$. At $x = -3$, the new function gives $f(-(-3)) = f(3) = 7$, so the point is $(-3, 7)$. The height is untouched — $(3, -7)$ would be the $x$-axis flip $y = -f(x)$ instead.',
  },
  {
    q: 'How many solutions does the equation $|x| + 3 = 3$ have? (Think of where the graph of $y = |x| + 3$ meets the horizontal line $y = 3$.)',
    choices: ['$0$', '$2$', 'Infinitely many', '$1$'],
    answer: 3,
    solution: 'The graph of $y = |x| + 3$ is a V with its lowest point at $(0, 3)$. The horizontal line $y = 3$ touches the graph only at that single corner point, so there is exactly one solution: $x = 0$. Algebra agrees: $|x| = 0$ forces $x = 0$.',
  },
  {
    q: 'Start with $f(x) = x^2$. The graph of $y = -f(x - 2) + 5$ is a parabola. What is its vertex, and which way does it open?',
    choices: ['$(-2, 5)$, opening upward', '$(2, -5)$, opening downward', '$(2, 5)$, opening upward', '$(2, 5)$, opening downward'],
    answer: 3,
    solution: 'Track the vertex $(0, 0)$ through each move: slide right $2$ gives $(2, 0)$; the flip over the $x$-axis leaves a point of height $0$ alone; the $+5$ lifts it to $(2, 5)$. The flip turns the upward parabola upside down, so it opens downward with its peak at $(2, 5)$.',
  },
  {
    q: 'Let $f(x) = 3x + 1$. What is $f^{-1}(x)$?',
    choices: ['$f^{-1}(x) = \\frac{1}{3x + 1}$', '$f^{-1}(x) = \\frac{x - 1}{3}$', '$f^{-1}(x) = 3x - 1$', '$f^{-1}(x) = \\frac{x}{3} - 1$'],
    answer: 1,
    solution: 'Swap the roles of input and output: from $y = 3x + 1$, solve $x = 3y + 1$ for $y$, giving $y = \\frac{x - 1}{3}$. The inverse undoes the steps in REVERSE order: $f$ multiplies then adds, so $f^{-1}$ subtracts then divides. Check: $f(2) = 7$ and $\\frac{7 - 1}{3} = 2$. The choice $\\frac{x}{3} - 1$ undoes the steps in the wrong order, and $\\frac{1}{3x + 1}$ is the reciprocal, not the inverse.',
  },
  {
    q: 'The point $(4, 2)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = 2f(x) - 3$?',
    choices: ['$(8, 1)$', '$(4, 1)$', '$(4, 7)$', '$(8, 7)$'],
    answer: 1,
    solution: 'Both changes are outside the function, so the $x$-coordinate stays at $4$. The height is doubled and then lowered by $3$: $2(2) - 3 = 1$. The point lands at $(4, 1)$. (A vertical stretch never touches $x$-coordinates — $(8, 1)$ stretched the wrong direction.)',
  },
  {
    q: 'A function $f$ satisfies $f(2) = 9$ and $f(-2) = 9$. Which statement is true?',
    choices: ['$f^{-1}(9) = 2$', '$f^{-1}(9) = -2$', '$f$ has no inverse function', '$f$ is not a function'],
    answer: 2,
    solution: 'Two different inputs, $2$ and $-2$, give the same output $9$ — the horizontal line $y = 9$ crosses the graph twice. An inverse would need $f^{-1}(9)$ to equal both $2$ and $-2$, which no function can do. So $f$ has no inverse. But $f$ itself is a fine function: repeated outputs are allowed, repeated inputs are not.',
  },
  {
    q: 'Suppose $f(0) = -1$. What is the $y$-intercept of the graph of $y = f(x) + 4$?',
    choices: ['$(0, 3)$', '$(0, -5)$', '$(4, -1)$', '$(0, 5)$'],
    answer: 0,
    solution: 'The $y$-intercept is the point at input $0$: the new function gives $f(0) + 4 = -1 + 4 = 3$, so the intercept is $(0, 3)$. Sliding a graph up $4$ slides its $y$-intercept up $4$ along with everything else.',
  },
  {
    q: 'The graph of $f$ has $x$-intercepts at $x = -1$ and $x = 5$. What are the $x$-intercepts of the graph of $y = \\frac{1}{2}f(x)$?',
    choices: ['$x = -\\frac{1}{2}$ and $x = \\frac{5}{2}$', '$x = -2$ and $x = 10$', '$x = -1$ and $x = 5$', 'They cannot be determined'],
    answer: 2,
    solution: 'A vertical squash halves every HEIGHT — and half of $0$ is still $0$. The points where the graph touches the $x$-axis do not move at all, so the $x$-intercepts stay at $x = -1$ and $x = 5$. Only a horizontal change could move them left or right.',
  },
  {
    q: 'Suppose $f(5) = 8$ and $f$ has an inverse. Let $g(x) = f(x) + 2$. What is $g^{-1}(10)$?',
    choices: ['$5$', '$10$', '$8$', '$7$'],
    answer: 0,
    solution: 'First find what $g$ does to $5$: $g(5) = f(5) + 2 = 8 + 2 = 10$. So $g$ sends $5$ to $10$, which means the inverse sends $10$ back: $g^{-1}(10) = 5$. Working forward first is often the fastest way to answer an inverse question.',
  },
  {
    q: 'The graph of $y = f(x)$ is shown with the dashed line $y = 1$. How many solutions does the equation $f(x) = 1$ have?',
    fig: {
      view: [-5, -3, 5, 5],
      grid: true,
      elems: [
        { t: 'curve', pts: [[-4, 0], [-2, 4], [1, -2], [4, 1]] },
        { t: 'seg', a: [-4.8, 1], b: [4.8, 1], dash: true },
        { t: 'label', p: [4.0, 1.7], text: 'y = 1' },
        { t: 'label', p: [-3.8, 3.4], text: 'y = f(x)' },
      ],
    },
    choices: ['$1$', '$2$', '$4$', '$3$'],
    answer: 3,
    solution: 'Count the meetings with the line $y = 1$: once on the rising piece from $(-4, 0)$ to $(-2, 4)$ (at $x = -3.5$), once on the falling piece from $(-2, 4)$ to $(1, -2)$ (at $x = -0.5$), and once at the right endpoint $(4, 1)$ itself. That is $3$ solutions — endpoints count when the graph actually reaches the line.',
  },
  {
    q: 'Let $f(x) = -x + 6$. What is $f^{-1}(x)$?',
    choices: ['$f^{-1}(x) = x - 6$', '$f^{-1}(x) = -x - 6$', '$f^{-1}(x) = -x + 6$', '$f^{-1}(x) = x + 6$'],
    answer: 2,
    solution: 'Swap and solve: from $x = -y + 6$ we get $y = 6 - x = -x + 6$ — the inverse is the SAME function! Check with a point: $f(4) = 2$ and $f(2) = 4$, so the graph contains both $(4, 2)$ and $(2, 4)$. A line with slope $-1$ is perpendicular to the mirror $y = x$, so it is its own reflection.',
  },
]

const worksheet = [
  {
    q: 'The point $(4, 9)$ is on the graph of $y = f(x)$. What is $f(4)$?',
    answer: '$f(4) = 9$',
    solution: 'A point $(a, b)$ on the graph records the fact $f(a) = b$: input first, output second. So $f(4) = 9$.',
  },
  {
    q: 'The point $(1, -2)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x) + 6$?',
    answer: '$(1, 4)$',
    solution: 'Adding $6$ outside raises every output by $6$: the point $(1, -2)$ rises to $(1, -2 + 6) = (1, 4)$. The $x$-coordinate never moves in a vertical slide.',
  },
  {
    q: 'The point $(5, 3)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x - 2)$?',
    answer: '$(7, 3)$',
    solution: 'The $-2$ inside slides the graph RIGHT $2$ (the input must be $2$ bigger to reach the old value). So $(5, 3)$ moves to $(7, 3)$. Check: $f(7 - 2) = f(5) = 3$.',
  },
  {
    q: 'Find the $x$-intercepts of the graph of $f(x) = x^2 - 16$.',
    answer: '$(4, 0)$ and $(-4, 0)$',
    solution: '$x$-intercepts solve $f(x) = 0$: from $x^2 - 16 = 0$ we get $x^2 = 16$, so $x = 4$ or $x = -4$. The graph crosses the $x$-axis at $(4, 0)$ and $(-4, 0)$ — remember an intercept is a point, with height $0$.',
  },
  {
    q: 'The point $(3, 8)$ is on the graph of $y = f(x)$, and $f$ has an inverse. What point must be on the graph of $y = f^{-1}(x)$?',
    answer: '$(8, 3)$',
    solution: 'The inverse swaps inputs and outputs: $f(3) = 8$ becomes $f^{-1}(8) = 3$. On the graph, $(3, 8)$ reflects over the line $y = x$ to $(8, 3)$.',
  },
  {
    q: 'The point $(2, 5)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = -f(-x)$?',
    answer: '$(-2, -5)$',
    solution: 'Two flips, one at a time. The inside minus flips over the $y$-axis: $(2, 5) \\to (-2, 5)$. The outside minus flips over the $x$-axis: $(-2, 5) \\to (-2, -5)$. Check: at $x = -2$, $-f(-(-2)) = -f(2) = -5$. Both flips together spin the point halfway around the origin.',
  },
  {
    q: 'The graph of $g$ is the graph of $f(x) = |x|$ shifted right $3$ and down $2$. Write a formula for $g(x)$, and find the $x$-intercepts of its graph.',
    answer: '$g(x) = |x - 3| - 2$; $x$-intercepts at $x = 1$ and $x = 5$',
    solution: 'Right $3$ puts $x - 3$ inside; down $2$ puts $-2$ outside: $g(x) = |x - 3| - 2$. For the intercepts, solve $|x - 3| - 2 = 0$, so $|x - 3| = 2$: the distance from $x$ to $3$ is $2$, giving $x = 1$ and $x = 5$. The V’s corner sits at $(3, -2)$, below the axis, so both arms cross it — two intercepts.',
  },
  {
    q: 'Let $f(x) = 2x - 7$. The graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross at exactly one point. Find it.',
    answer: '$(7, 7)$',
    solution: 'Since $f$ is an increasing line, its graph can only meet its own mirror image on the mirror line $y = x$. Solve $f(x) = x$: $2x - 7 = x$ gives $x = 7$, so the crossing point is $(7, 7)$. Check: $f(7) = 7$, and a point that equals its own swap lies on both graphs.',
  },
  {
    q: 'A function $f$ satisfies $f(1) = 4$ and $f(3) = 4$. Does $f$ have an inverse? Explain using the horizontal line test.',
    answer: 'No — the horizontal line $y = 4$ crosses the graph twice, so $f$ has no inverse',
    solution: 'The graph contains both $(1, 4)$ and $(3, 4)$, so the horizontal line $y = 4$ crosses it at least twice — the horizontal line test fails. An inverse would need $f^{-1}(4)$ to be both $1$ and $3$ at once, and no function can return two answers for one input.',
  },
  {
    q: 'The point $(2, 3)$ is on the graph of $y = 2f(x - 1) + 5$. Find a point that must be on the graph of $y = f(x)$.',
    answer: '$(1, -1)$',
    solution: 'Run the transformations backwards. The equation says $2f(2 - 1) + 5 = 3$, so $2f(1) = -2$ and $f(1) = -1$. That is the point $(1, -1)$ on the graph of $f$. Undoing in reverse order — subtract $5$, halve, then undo the shift — is the same "unwrapping" idea we use for inverse functions.',
  },
]

export default {
  id: 'intro-algebra-ch17',
  book: 'intro-algebra',
  number: 17,
  title: 'Graphing Functions',
  intro:
    'You already know how to graph lines and parabolas — now we zoom out and graph ANY function. A graph turns a function into a picture, and pictures let you answer questions at a glance: what is $f(2)$, how many solutions does $f(x) = 1$ have, does $f$ even have an inverse? By the end of this chapter you will also be able to slide, flip, and stretch graphs without recomputing a single point.',
  sections: [s171, s172, s173],
  challenge,
  worksheet,
}
