// Introduction to Algebra chapter 17 — variations for section 17.1 (Basics).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text (or from the figure’s own
//    coordinates) and then confirmed a SECOND, INDEPENDENT way: a value read
//    off a graph is re-derived from the segment it sits on, a factorisation is
//    multiplied back out, an intercept is checked by substituting, and a count
//    of crossings is checked segment by segment.
//  - Every coordinate quoted in a question or a solution is a listed point of
//    that item’s own figure, or lies exactly on the straight piece joining two
//    listed points. A `curve` is drawn as a polyline through its `pts`, so the
//    heights between listed points are plain linear interpolation.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: SWAPPING THE COORDINATES of a point, ECHOING
//    THE INPUT as though it were the output, FLIPPING A SIGN, READING THE
//    NEIGHBOURING CORNER of a graph, CONFUSING THE DOMAIN WITH THE RANGE,
//    TAKING ONLY THE ENDPOINT HEIGHTS of a graph, GIVING THE x-INTERCEPT WHEN
//    THE y-INTERCEPT WAS ASKED (and the reverse), KEEPING ONLY ONE ROOT of a
//    quadratic, ADDING THE ROOTS INSTEAD OF SUBTRACTING them, MISSING AN
//    ENDPOINT that sits exactly on the axis, COUNTING A TURNING POINT as a
//    crossing, and BANNING REPEATED OUTPUTS (only repeated inputs are illegal).
//  - No two choices inside an item name the same number, point or set, even
//    when written two different ways.

const s171 = [
  // p1 — a point on the graph is one input-output fact.
  [
    {
      q: 'The point $(7, 2)$ is on the graph of $y = g(x)$. What is $g(7)$?',
      choices: ['$2$', '$7$', '$14$', '$9$'],
      answer: 0,
      solution:
        'A point $(a, b)$ on the graph records exactly one fact: $g(a) = b$, input first and output second. The input here is $7$ and the output is $2$, so $g(7) = 2$. Check a second, independent way by asking the question backwards — "where on the graph does the input $7$ live?" — the only listed point with first coordinate $7$ is $(7, 2)$, and its height is $2$ ✓. (The choice $7$ is ECHOING THE INPUT as though it were the output; the choice $14$ multiplies the two coordinates; the choice $9$ adds them.)',
    },
    {
      q: 'The point $(-4, 6)$ is on the graph of $y = h(x)$. What is $h(-4)$?',
      choices: ['$-4$', '$-6$', '$6$', '$2$'],
      answer: 2,
      solution:
        'Read the point as a fact about $h$: the input is $-4$ and the output is $6$, so $h(-4) = 6$. Check a second, independent way by rebuilding the point from the fact — $h(-4) = 6$ puts the point $(-4, 6)$ on the graph, which is exactly the point we were given ✓. (The choice $-4$ is ECHOING THE INPUT; the choice $-6$ FLIPS THE SIGN of the output, as though a negative input forced a negative output; the choice $2$ adds the two coordinates.)',
    },
    {
      q: 'A function $f$ satisfies $f(5) = 12$. Which point must be on the graph of $y = f(x)$?',
      choices: ['$(12, 5)$', '$(5, 17)$', '$(0, 12)$', '$(5, 12)$'],
      answer: 3,
      solution:
        'This is the same fact read in the other direction: $f(5) = 12$ says the input $5$ produces the output $12$, and the graph records that as the point (input, output) $= (5, 12)$. Check a second, independent way by translating the candidate back — the point $(5, 12)$ says $f(5) = 12$, which is what we were told ✓. (The choice $(12, 5)$ is SWAPPING THE COORDINATES, and it would say $f(12) = 5$ instead; the choice $(5, 17)$ adds the input to the output; the choice $(0, 12)$ treats every value of a function as a $y$-intercept, but the $y$-intercept is the point at input $0$, and we know nothing about $f(0)$.)',
    },
  ],
  // p2 — reading a value straight off a graph.
  [
    {
      q: 'The graph of $y = g(x)$ is shown below. What is the value of $g(0)$?',
      fig: {
        view: [-5, -4, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, 3], [-2, -2], [0, -1], [3, 4]] },
          { t: 'label', p: [-3.2, 4.3], text: 'y = g(x)' },
        ],
      },
      choices: ['$-1$', '$0$', '$1$', '$-2$'],
      answer: 0,
      solution:
        'To find $g(0)$, go to $x = 0$ on the horizontal axis and read the height of the graph there. The graph has a corner exactly on the $y$-axis at $(0, -1)$, one unit BELOW the axis, so $g(0) = -1$. Check a second, independent way with the piece to the right: it runs from $(0, -1)$ up to $(3, 4)$, a climb of $5$ over $3$ steps, and running that piece backwards to $x = 0$ lands at height $-1$ ✓. (The choice $0$ ECHOES THE INPUT; the choice $1$ FLIPS THE SIGN of the height; the choice $-2$ READS THE NEIGHBOURING CORNER at $(-2, -2)$ instead of the one on the axis.)',
    },
    {
      q: 'The graph of $y = h(x)$ is shown. What is $h(2)$?',
      fig: {
        view: [-4, -4, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 4], [0, 1], [2, -3], [4, 2]] },
          { t: 'label', p: [-2, 4.3], text: 'y = h(x)' },
        ],
      },
      choices: ['$2$', '$-3$', '$3$', '$1$'],
      answer: 1,
      solution:
        'Travel to $x = 2$ and read the height. The graph bottoms out there, at the corner $(2, -3)$, so $h(2) = -3$. Check a second, independent way with the piece on the left: it falls from $(0, 1)$ to $(2, -3)$, dropping $4$ over $2$ steps, so at $x = 2$ the height is $1 - 4 = -3$ ✓. (The choice $2$ ECHOES THE INPUT; the choice $3$ FLIPS THE SIGN of the height; the choice $1$ reads $h(0)$, using the wrong input.)',
    },
    {
      q: 'The graph of $y = p(x)$ is shown. What are the coordinates of the point where the graph crosses the $y$-axis?',
      fig: {
        view: [-5, -3, 4, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, -1], [-2, 1], [0, 3], [3, -2]] },
          { t: 'label', p: [1.2, 4.2], text: 'y = p(x)' },
        ],
      },
      choices: ['$(3, 0)$', '$(0, -3)$', '$(-3, 0)$', '$(0, 3)$'],
      answer: 3,
      solution:
        'The $y$-axis is the line $x = 0$, so the crossing point is $(0, p(0))$. The graph has a corner right on the axis at height $3$, so the point is $(0, 3)$. Check a second, independent way along the rising piece from $(-2, 1)$: it climbs $1$ unit for every $1$ unit right, so two steps right of $(-2, 1)$ the height is $1 + 2 = 3$, at $x = 0$ ✓. (The choice $(3, 0)$ is SWAPPING THE COORDINATES; the choice $(0, -3)$ FLIPS THE SIGN of the height, but the graph is above the axis there; the choice $(-3, 0)$ is the graph’s left $x$-intercept — the rising piece from $(-4, -1)$ to $(-2, 1)$ passes through $(-3, 0)$ — and an $x$-intercept is a different thing from a $y$-intercept.)',
    },
  ],
  // p3 — testing whether a point satisfies a rule.
  [
    {
      q: 'Which point is on the graph of $f(x) = 3x - 5$?',
      choices: ['$(7, 4)$', '$(4, 7)$', '$(4, 17)$', '$(0, 5)$'],
      answer: 1,
      solution:
        'Test a point by feeding its first coordinate in and seeing whether the second comes out: $f(4) = 3(4) - 5 = 12 - 5 = 7$, so $(4, 7)$ is on the graph. Check a second, independent way by rejecting the rivals one at a time: $f(7) = 21 - 5 = 16$, not $4$ ✗, and $f(0) = -5$, not $5$ ✗. (The choice $(7, 4)$ is $(4, 7)$ with the coordinates SWAPPED; the choice $(4, 17)$ computes $3(4) + 5$, FLIPPING THE SIGN of the constant; the choice $(0, 5)$ flips the sign of $f(0)$.)',
    },
    {
      q: 'Which point is on the graph of $g(x) = 5 - 2x$?',
      choices: ['$(3, 1)$', '$(-1, 3)$', '$(3, -1)$', '$(3, 11)$'],
      answer: 2,
      solution:
        'Substitute the first coordinate: $g(3) = 5 - 2(3) = 5 - 6 = -1$, so $(3, -1)$ is on the graph. Check a second, independent way by reading the rule as instructions — "double the input, then subtract that from $5$": doubling $3$ gives $6$, and $5$ take away $6$ is $-1$ ✓. (The choice $(3, 1)$ SUBTRACTS IN THE WRONG ORDER, computing $2(3) - 5$; the choice $(-1, 3)$ is the correct point with the coordinates SWAPPED; the choice $(3, 11)$ FLIPS THE SIGN inside the rule, computing $5 + 2(3)$.)',
    },
    {
      q: 'The point $(2, 9)$ lies on the graph of exactly one of these functions. Which one?',
      choices: ['$f(x) = x - 7$', '$f(x) = 5x + 1$', '$f(x) = 5x$', '$f(x) = 5x - 1$'],
      answer: 3,
      solution:
        'The point $(2, 9)$ demands a rule with $f(2) = 9$. Try the last one: $5(2) - 1 = 10 - 1 = 9$ ✓. Check a second, independent way by ruling the others out with the same input $2$: $2 - 7 = -5$ ✗, $5(2) + 1 = 11$ ✗, and $5(2) = 10$ ✗ — only one rule survives. (The choice $x - 7$ is what you pick after SWAPPING THE COORDINATES, since $9 - 7 = 2$; the choice $5x + 1$ FLIPS THE SIGN of the constant; the choice $5x$ DROPS THE CONSTANT altogether.)',
    },
  ],
  // p4 — the vertical line test.
  [
    {
      q: 'Which of these curves IS the graph of a function of $x$?',
      choices: [
        'A horizontal line at height $4$',
        'A vertical line at $x = 4$',
        'A circle of radius $4$ centred at the origin',
        'A sideways parabola opening to the right',
      ],
      answer: 0,
      solution:
        'A graph is a function of $x$ when no vertical line meets it more than once. A horizontal line meets each vertical line at exactly one point, so it passes — every input gets the single output $4$. Check a second, independent way by naming the rule: the horizontal line is the graph of $f(x) = 4$, an honest function that answers $4$ for every input ✓. (The vertical line at $x = 4$ fails in the worst way — the vertical line $x = 4$ lies right along it, giving that one input every output at once; the circle fails because a vertical line through its middle meets it once on top and once underneath; the sideways parabola opens rightward, so a vertical line inside the curve meets its upper and lower arms.)',
    },
    {
      q: 'Four graphs are described below. Which one fails the vertical line test?',
      choices: [
        'A straight line with slope $-2$',
        'A sideways parabola opening to the left',
        'The V-shaped graph of $y = |x| + 1$',
        'A horizontal line',
      ],
      answer: 1,
      solution:
        'The sideways parabola has two arms, an upper one and a lower one, meeting at a point on the left-facing tip. A vertical line drawn to the left of that tip meets both arms, so one input would get two outputs — it fails the test. Check a second, independent way with a concrete pair: a leftward parabola with tip at $(0, 0)$ contains both $(-4, 2)$ and $(-4, -2)$, two outputs for the input $-4$ ✗. (The slanted line and the horizontal line each meet a vertical line exactly once; the V is the graph of a genuine function, and its two arms sit side by side rather than one above the other, so no vertical line meets both.)',
    },
    {
      q: 'A curve passes through both $(4, 2)$ and $(4, -5)$. Which statement is true?',
      choices: [
        'It is the graph of a function, because the two outputs are different',
        'It passes the vertical line test, because the two points are different',
        'It is the graph of a function, because the two inputs agree',
        'It is not the graph of a function, because the vertical line $x = 4$ meets it twice',
      ],
      answer: 3,
      solution:
        'Both points sit at $x = 4$, so the vertical line $x = 4$ passes through both — one input, two outputs. That breaks the one-output-per-input rule, so the curve is not the graph of a function. Check a second, independent way in function language: the two points claim $f(4) = 2$ and $f(4) = -5$ at the same time, and no function may answer twice ✓. (The first choice has the rule BACKWARDS — differing outputs are exactly the problem here, not a rescue; the second choice thinks distinct points are enough, but the test is about their $x$-coordinates; the third choice treats MATCHING INPUTS as proof of being a function, when matching inputs with different outputs is the one thing banned.)',
    },
  ],
  // p5 — counting solutions by counting crossings.
  [
    {
      q: 'The graph of $y = g(x)$ is shown, running from $(-4, -3)$ to $(4, -1)$. How many solutions does $g(x) = 0$ have?',
      fig: {
        view: [-5, -4, 5, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, -3], [-1, 2], [2, -2], [4, -1]] },
          { t: 'point', p: [-4, -3] },
          { t: 'point', p: [4, -1] },
          { t: 'label', p: [1, 3.2], text: 'y = g(x)' },
        ],
      },
      choices: ['$2$', '$1$', '$3$', '$0$'],
      answer: 0,
      solution:
        'Solutions of $g(x) = 0$ are the places where the graph meets the $x$-axis, so walk the graph piece by piece. It climbs from $(-4, -3)$ to $(-1, 2)$, passing through the axis once on the way up (between $x = -3$ and $x = -2$); it falls from $(-1, 2)$ to $(2, -2)$, passing through once on the way down (between $x = 0$ and $x = 1$); then it rises only from $-2$ to $-1$ and stays below the axis. That is $2$ crossings, so $2$ solutions. Check a second, independent way by tracking the SIGN of the output: it starts negative at $(-4, -3)$, turns positive at $(-1, 2)$, and is negative again at both $(2, -2)$ and the end $(4, -1)$ — the sign changes exactly twice, and each change costs one crossing ✓. (The choice $1$ counts only the crossing on the way down; the choice $3$ COUNTS THE TURNING POINT at $(2, -2)$ as a crossing, but the graph climbs back only as far as $-1$, still below the axis ✗; the choice $0$ misses that a graph passing from below to above the axis has to cut through it.)',
    },
    {
      q: 'The graph of $y = h(x)$ is shown together with the dashed line $y = 2$. How many solutions does the equation $h(x) = 2$ have?',
      fig: {
        view: [-5, -3, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, -2], [-2, 4], [0, 0], [2, 4], [4, 1]] },
          { t: 'seg', a: [-4.8, 2], b: [4.8, 2], dash: true },
          { t: 'point', p: [-4, -2] },
          { t: 'point', p: [4, 1] },
          { t: 'label', p: [3.6, 2.6], text: 'y = 2' },
          { t: 'label', p: [-3.4, 3.6], text: 'y = h(x)' },
        ],
      },
      choices: ['$2$', '$3$', '$4$', '$1$'],
      answer: 2,
      solution:
        'Each meeting with the dashed line is one solution, so count the pieces that pass through height $2$. Rising from $(-4, -2)$ to $(-2, 4)$: one. Falling from $(-2, 4)$ to $(0, 0)$: one, at $x = -1$. Rising from $(0, 0)$ to $(2, 4)$: one, at $x = 1$. Falling from $(2, 4)$ to $(4, 1)$: one. That is $4$ solutions. Check a second, independent way by watching where the graph is ABOVE the line: it is above between the first and second crossings and again between the third and fourth, and each of those two stretches needs a crossing to start it and a crossing to end it — $2 \\times 2 = 4$ ✓. (The choice $2$ counts crossings of the $x$-AXIS instead of the dashed line, which really does happen twice; the choice $3$ MISSES THE LAST CROSSING on the descent from $(2, 4)$ to $(4, 1)$; the choice $1$ applies the vertical line test to a horizontal line, assuming a level line may meet a graph only once — no such rule exists.)',
    },
    {
      q: 'The graph of $y = q(x)$ is shown; it starts at $(-3, 0)$ and ends at $(4, 3)$. How many solutions does $q(x) = 0$ have?',
      fig: {
        view: [-4, -4, 5, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 0], [-1, -3], [1, 3], [2, 1], [4, 3]] },
          { t: 'point', p: [-3, 0] },
          { t: 'point', p: [4, 3] },
          { t: 'label', p: [3, -2.6], text: 'y = q(x)' },
        ],
      },
      choices: ['$1$', '$3$', '$4$', '$2$'],
      answer: 3,
      solution:
        'Hunt for every place the graph reaches height $0$. The very first point, $(-3, 0)$, sits ON the $x$-axis, so $x = -3$ is a solution. The graph then dips to $(-1, -3)$ and climbs to $(1, 3)$; that piece rises $6$ over $2$ steps, so it hits height $0$ halfway along, at $(0, 0)$ — a second solution. After that it only falls to $(2, 1)$ and rises to $(4, 3)$, staying above the axis. So there are $2$ solutions. Check a second, independent way with signs: the outputs go $0$, negative, then positive and stay positive, so the graph touches the axis once at the start and cuts it once more ✓. (The choice $1$ MISSES THE ENDPOINT $(-3, 0)$, which really does have output $0$; the choice $3$ COUNTS THE TURNING POINT at $(2, 1)$ as a crossing, but the graph turns a full unit above the axis ✗; the choice $4$ counts both turning points, $(-1, -3)$ and $(2, 1)$, on top of the two genuine solutions.)',
    },
  ],
  // p6 — intercepts of a quadratic, both kinds.
  [
    {
      q: 'What are the $x$-intercepts of the graph of $h(x) = x^2 - 36$?',
      choices: [
        '$(6, 0)$ and $(-6, 0)$',
        '$(6, 0)$ only',
        '$(0, -36)$',
        '$(36, 0)$ and $(-36, 0)$',
      ],
      answer: 0,
      solution:
        '$x$-intercepts are the points where the height is $0$, so solve $x^2 - 36 = 0$, that is $x^2 = 36$. TWO numbers square to $36$, namely $6$ and $-6$, so the graph crosses at $(6, 0)$ and $(-6, 0)$. Check a second, independent way by factoring: $x^2 - 36 = (x - 6)(x + 6)$, a product that is zero exactly when one factor is, giving the same pair ✓. (The choice $(6, 0)$ only KEEPS ONE ROOT and throws away the negative one; the choice $(0, -36)$ is the $y$-intercept, since $h(0) = -36$ — the right arithmetic for the wrong axis; the choice with $\\pm 36$ FORGETS TO TAKE THE SQUARE ROOT, and $36^2 - 36 = 1260$, nowhere near $0$ ✗.)',
    },
    {
      q: 'What is the $y$-intercept of the graph of $g(x) = x^2 + 4x - 12$?',
      choices: ['$(-12, 0)$', '$(0, -12)$', '$(2, 0)$', '$(0, 12)$'],
      answer: 1,
      solution:
        'The $y$-intercept is the point at input $0$: $g(0) = 0^2 + 4(0) - 12 = -12$, so the point is $(0, -12)$. Check a second, independent way by noticing that substituting $0$ wipes out every term carrying an $x$, so the $y$-intercept height is always just the constant term, $-12$ ✓. (The choice $(-12, 0)$ puts the number in the WRONG SLOT — an intercept on the $y$-axis must have first coordinate $0$; the choice $(2, 0)$ is an $x$-intercept, since $x^2 + 4x - 12 = (x + 6)(x - 2)$ is zero at $x = 2$; the choice $(0, 12)$ FLIPS THE SIGN of the constant.)',
    },
    {
      q: 'The graph of $k(x) = 5 - x^2$ meets the $y$-axis at exactly one point. Which point is it?',
      choices: ['$(5, 0)$', '$(0, -5)$', '$(0, 5)$', '$(\\sqrt{5}, 0)$'],
      answer: 2,
      solution:
        'Meeting the $y$-axis means the input is $0$: $k(0) = 5 - 0^2 = 5$, so the point is $(0, 5)$. Check a second, independent way with a nearby input to be sure the graph really is up there: $k(1) = 5 - 1 = 4$ and $k(-1) = 4$, so the curve arches over the axis with its top at height $5$ ✓. (The choice $(5, 0)$ is SWAPPING THE COORDINATES; the choice $(0, -5)$ reads the rule as $x^2 - 5$, FLIPPING THE SIGN of the constant; the choice $(\\sqrt{5}, 0)$ is a genuine $x$-intercept, since $5 - (\\sqrt{5})^2 = 0$, but the question asked for the other axis.)',
    },
  ],
  // p7 — domain and range read off a graph with marked endpoints.
  [
    {
      q: 'The graph of $y = f(x)$ shown starts at $(-3, 2)$ and ends at $(3, 5)$. What is the range of $f$?',
      fig: {
        view: [-4, -3, 4, 6],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 2], [0, -2], [3, 5]] },
          { t: 'point', p: [-3, 2] },
          { t: 'point', p: [3, 5] },
          { t: 'label', p: [-1.6, 4.6], text: 'y = f(x)' },
        ],
      },
      choices: ['$2 \\le y \\le 5$', '$-2 \\le y \\le 5$', '$-3 \\le y \\le 3$', '$-2 \\le y \\le 2$'],
      answer: 1,
      solution:
        'The range is the set of OUTPUTS — the graph’s shadow on the $y$-axis. The graph drops from $(-3, 2)$ to its lowest point $(0, -2)$, then climbs to its highest point $(3, 5)$. It is unbroken, so every height from $-2$ up to $5$ is reached: $-2 \\le y \\le 5$. Check a second, independent way by testing two heights: $y = 4$ is reached on the climbing piece (between $x = 2$ and $x = 3$) ✓, while $y = 6$ is above the tallest point, so no input produces it ✗. (The choice $2 \\le y \\le 5$ TAKES ONLY THE ENDPOINT HEIGHTS and forgets the dip below the axis; the choice $-3 \\le y \\le 3$ is the DOMAIN, the shadow on the $x$-axis, relabelled as $y$; the choice $-2 \\le y \\le 2$ finds the low point but stops at the left endpoint’s height instead of climbing to $5$.)',
    },
    {
      q: 'The graph of $y = g(x)$ shown starts at $(-2, 4)$ and ends at $(5, -1)$. What is the domain of $g$?',
      fig: {
        view: [-3, -4, 6, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-2, 4], [1, -3], [5, -1]] },
          { t: 'point', p: [-2, 4] },
          { t: 'point', p: [5, -1] },
          { t: 'label', p: [3, 3.6], text: 'y = g(x)' },
        ],
      },
      choices: ['$-3 \\le x \\le 4$', '$-1 \\le x \\le 4$', '$-2 \\le x \\le 5$', '$-3 \\le y \\le 4$'],
      answer: 2,
      solution:
        'The domain is the set of INPUTS — the graph’s shadow on the $x$-axis. The two marked ends tell you where the graph starts and stops horizontally: at $x = -2$ on the left and $x = 5$ on the right, with no gaps between. So the domain is $-2 \\le x \\le 5$. Check a second, independent way by testing two inputs: $x = 1$ has a point above it, namely $(1, -3)$ ✓, while $x = 6$ is past the right end, where the graph has stopped ✗. (The choice $-3 \\le x \\le 4$ uses the RANGE’s numbers but calls them $x$ — the lowest and highest heights are $-3$ and $4$; the choice $-1 \\le x \\le 4$ uses the two ENDPOINT HEIGHTS $4$ and $-1$ instead of the endpoint inputs; the choice $-3 \\le y \\le 4$ is the range itself, the correct set for the wrong question.)',
    },
    {
      q: 'The graph of $y = m(x)$ is shown, running from $(-4, 1)$ to $(3, -1)$. What is the range of $m$?',
      fig: {
        view: [-5, -5, 4, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, 1], [-1, -4], [1, 2], [3, -1]] },
          { t: 'point', p: [-4, 1] },
          { t: 'point', p: [3, -1] },
          { t: 'label', p: [1.4, 3.2], text: 'y = m(x)' },
        ],
      },
      choices: ['$-4 \\le x \\le 3$', '$-1 \\le y \\le 1$', '$-4 \\le y \\le 3$', '$-4 \\le y \\le 2$'],
      answer: 3,
      solution:
        'Sweep the graph for its lowest and highest heights. It falls from $(-4, 1)$ to $(-1, -4)$, climbs to $(1, 2)$, then falls to $(3, -1)$. The smallest output is $-4$ and the largest is $2$, and the graph is unbroken, so the range is $-4 \\le y \\le 2$. Check a second, independent way by testing two heights: $y = 0$ is reached three times over ✓, while $y = 3$ is above every corner of the graph, so nothing produces it ✗. (The choice $-4 \\le x \\le 3$ is the DOMAIN, the inputs rather than the outputs; the choice $-1 \\le y \\le 1$ TAKES ONLY THE ENDPOINT HEIGHTS and misses both the deep dip and the peak; the choice $-4 \\le y \\le 3$ finds the low point but borrows its top from the right end of the DOMAIN, $x = 3$, instead of the highest point $(1, 2)$.)',
    },
  ],
  // p8 — what a line crossing a graph n times really tells you.
  [
    {
      q: 'The horizontal line $y = -4$ crosses the graph of a function $f$ at exactly five points. What does this tell you?',
      choices: [
        'The equation $f(x) = -4$ has exactly five solutions',
        '$f(-4)$ has five different values',
        'The graph has five $x$-intercepts',
        '$f$ fails the vertical line test',
      ],
      answer: 0,
      solution:
        'Every point on the line $y = -4$ has height $-4$, so every crossing is a point of the graph whose OUTPUT is $-4$ — in other words, one solution of $f(x) = -4$. Five crossings, five solutions. Check a second, independent way by imagining the five crossing points written out as $(x_1, -4), (x_2, -4), \\ldots$: they share an output but have five different inputs, which is exactly what "five solutions" means ✓. (The choice about $f(-4)$ reads the $-4$ as an INPUT instead of an output, and a function may never give one input five values; the choice about $x$-intercepts uses the wrong line — intercepts come from $y = 0$; the last choice confuses the two tests, since repeated OUTPUTS are perfectly legal and the vertical line test is untouched here.)',
    },
    {
      q: 'The equation $f(x) = 6$ has exactly two solutions. What does this say about the graph of $f$?',
      choices: [
        'The graph crosses the $x$-axis at two points',
        'The graph passes through the point $(6, 0)$ twice',
        'The horizontal line $y = 6$ meets the graph at exactly two points',
        'The vertical line $x = 6$ meets the graph at exactly two points',
      ],
      answer: 2,
      solution:
        'A solution of $f(x) = 6$ is an input whose output is $6$, and every point of height $6$ lies on the horizontal line $y = 6$. Two solutions means that line meets the graph at exactly two points. Check a second, independent way with an example: $f(x) = x^2 + 2$ gives $x^2 + 2 = 6$, so $x = 2$ or $x = -2$, and the line $y = 6$ really does cut that parabola at $(2, 6)$ and $(-2, 6)$ — two points ✓. (The first choice uses the line $y = 0$ instead of $y = 6$; the second choice SWAPS THE COORDINATES, turning the output $6$ into an input, and a graph cannot pass through one point twice anyway; the last choice draws a VERTICAL line, which for a function can meet the graph only once — never twice.)',
    },
    {
      q: 'The line $y = 0$ meets the graph of $g$ at exactly two points. What does that tell you?',
      choices: [
        '$g(0)$ has two different values',
        'The graph has two $y$-intercepts',
        '$g$ is not a function',
        'The graph has exactly two $x$-intercepts',
      ],
      answer: 3,
      solution:
        'The line $y = 0$ IS the $x$-axis, so its meetings with the graph are the points where the graph crosses that axis: the $x$-intercepts. Two meetings, two $x$-intercepts. Check a second, independent way in equation language: those meetings are the solutions of $g(x) = 0$, and a graph crossing the $x$-axis at two places is exactly a rule with two such solutions ✓. (The first choice reads the $0$ as an INPUT rather than an output; the second choice mixes up the axes, and a function can have at most ONE $y$-intercept because the vertical line $x = 0$ may be met only once; the third choice confuses repeated outputs with repeated inputs — sharing the output $0$ is completely legal.)',
    },
  ],
  // p9 — factor to find both crossings, then answer the geometric question.
  [
    {
      q: 'The graph of $f(x) = x^2 - 4x - 21$ crosses the $x$-axis at two points. How far apart are they?',
      choices: ['$10$', '$4$', '$21$', '$7$'],
      answer: 0,
      solution:
        'The crossings solve $f(x) = 0$. Factor: $x^2 - 4x - 21 = (x - 7)(x + 3)$, since $-7 \\cdot 3 = -21$ and $-7 + 3 = -4$, so the crossings are at $x = 7$ and $x = -3$. Both points sit on the $x$-axis, so the distance between them is the gap in their inputs: $7 - (-3) = 10$. Check a second, independent way by multiplying the factors back out — $(x - 7)(x + 3) = x^2 + 3x - 7x - 21 = x^2 - 4x - 21$ ✓ — and by substituting: $f(7) = 49 - 28 - 21 = 0$ ✓ and $f(-3) = 9 + 12 - 21 = 0$ ✓. (The choice $4$ ADDS THE ROOTS INSTEAD OF SUBTRACTING, $7 + (-3)$; the choice $21$ grabs the constant term; the choice $7$ KEEPS ONLY ONE ROOT and measures from the origin instead of from the other crossing.)',
    },
    {
      q: 'The graph of $g(x) = x^2 + 2x - 15$ crosses the $x$-axis twice. What is the $x$-coordinate of the point exactly halfway between the two crossings?',
      choices: ['$8$', '$-1$', '$4$', '$-2$'],
      answer: 1,
      solution:
        'First find the crossings: $x^2 + 2x - 15 = (x + 5)(x - 3)$, since $5 \\cdot (-3) = -15$ and $5 + (-3) = 2$, so they are at $x = -5$ and $x = 3$. Halfway between two numbers is their average: $\\frac{-5 + 3}{2} = \\frac{-2}{2} = -1$. Check a second, independent way by measuring: the gap from $-5$ to $-1$ is $4$, and the gap from $-1$ to $3$ is also $4$, so $-1$ really does sit in the middle ✓. (The choice $8$ is the DISTANCE between the crossings, $3 - (-5)$, not the midpoint; the choice $4$ DROPS THE MINUS SIGN on $-5$ and averages $5$ and $3$; the choice $-2$ adds the two crossings but FORGETS TO HALVE.)',
    },
    {
      q: 'The graph of $h(x) = x^2 + x - 20$ crosses the $x$-axis at two points. Which crossing is farther from the origin, and how far away is it?',
      choices: [
        '$(4, 0)$, at distance $4$',
        '$(-5, 0)$, at distance $-5$',
        '$(-5, 0)$, at distance $5$',
        '$(0, -20)$, at distance $20$',
      ],
      answer: 2,
      solution:
        'Factor to find the crossings: $x^2 + x - 20 = (x + 5)(x - 4)$, since $5 \\cdot (-4) = -20$ and $5 + (-4) = 1$, so the graph meets the $x$-axis at $(-5, 0)$ and $(4, 0)$. Distance from the origin is how many units along the axis, ignoring direction: $5$ units for the first and $4$ for the second, so $(-5, 0)$ is farther, at distance $5$. Check a second, independent way by substituting: $h(-5) = 25 - 5 - 20 = 0$ ✓ and $h(4) = 16 + 4 - 20 = 0$ ✓, and on a number line $-5$ sits one step farther out than $4$ ✓. (The choice naming $(4, 0)$ assumes a NEGATIVE COORDINATE MUST BE CLOSER to the origin; the choice giving distance $-5$ picks the right point but reports a NEGATIVE DISTANCE, and a distance is never negative; the choice naming $(0, -20)$ gives the $y$-intercept, which is not a crossing of the $x$-axis at all.)',
    },
  ],
  // p10 — one input, one output: what a graph may not contain.
  [
    {
      q: 'The graph of a function $g$ passes through $(-1, 4)$. Which point CANNOT also be on the graph?',
      choices: ['$(-1, 0)$', '$(4, -1)$', '$(1, 4)$', '$(0, 4)$'],
      answer: 0,
      solution:
        'The graph already says $g(-1) = 4$. Adding $(-1, 0)$ would say $g(-1) = 0$ as well, giving the single input $-1$ two different outputs — impossible. Check a second, independent way with the vertical line test: $(-1, 4)$ and $(-1, 0)$ both sit on the vertical line $x = -1$, and that line may meet the graph only once ✗. (The choice $(4, -1)$ is the given point with the coordinates SWAPPED, but it merely says $g(4) = -1$, a fact about a different input; the choices $(1, 4)$ and $(0, 4)$ REPEAT AN OUTPUT, and repeated outputs are perfectly legal — only repeated inputs are banned.)',
    },
    {
      q: 'A function $h$ satisfies $h(5) = -2$. Which statement must be FALSE?',
      choices: ['$h(-2) = 5$', '$h(5) = 3$', '$h(3) = -2$', '$h(0) = -2$'],
      answer: 1,
      solution:
        'The input $5$ has already been answered: $h(5) = -2$. Claiming $h(5) = 3$ gives that one input a second, different output, which no function may do. Check a second, independent way on the graph: $h(5) = -2$ and $h(5) = 3$ would put both $(5, -2)$ and $(5, 3)$ on the vertical line $x = 5$, and that line may be met only once ✗. (The choice $h(-2) = 5$ SWAPS THE INPUT AND OUTPUT, but it talks about the untouched input $-2$, so it is allowed; the choices $h(3) = -2$ and $h(0) = -2$ REPEAT THE OUTPUT $-2$ at new inputs, which is legal — the ban is on repeated inputs.)',
    },
    {
      q: 'Which of these lists of three points could all lie on the graph of one single function?',
      choices: [
        '$(2, 5)$, $(2, 9)$, and $(7, 5)$',
        '$(0, 1)$, $(6, 1)$, and $(0, 4)$',
        '$(3, 8)$, $(8, 3)$, and $(3, 3)$',
        '$(1, 6)$, $(4, 6)$, and $(9, 6)$',
      ],
      answer: 3,
      solution:
        'A list works exactly when no input appears twice. The last list uses the inputs $1$, $4$ and $9$, all different, so a function may hold all three at once. Check a second, independent way by naming such a function: the constant rule $f(x) = 6$ answers $6$ for every input, so its graph contains $(1, 6)$, $(4, 6)$ and $(9, 6)$ ✓ — a horizontal line, which passes the vertical line test. (The first list gives the input $2$ the outputs $5$ and $9$; the second gives the input $0$ the outputs $1$ and $4$, hidden behind a middle point that looks harmless; the third tempts with the swapped pair $(3, 8)$ and $(8, 3)$, but its real problem is that $(3, 8)$ and $(3, 3)$ share the input $3$. Rejecting the correct list means BANNING REPEATED OUTPUTS, and only repeated inputs are illegal.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 17,
  sections: {
    '17.1': s171,
  },
}
