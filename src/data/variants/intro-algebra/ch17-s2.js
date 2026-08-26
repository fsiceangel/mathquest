// Introduction to Algebra chapter 17 — variations for section 17.2
// (Transformations).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every direction claim was confirmed by MAPPING AN ACTUAL POINT through the
//    substitution, never from memory. For an inside change the landing input is
//    found by solving "inside = old input": for $g(x) = f(x - 5)$ the point at
//    $x = -1$ moves to $x = 4$, because $4 - 5 = -1$. Outside changes were
//    checked separately on the height, and a combined item was re-evaluated as
//    $g(\text{new }x)$ to make sure the two halves agree.
//  - Each distractor is one named mistake, named at the end of the solution:
//    SLIDING THE WRONG WAY INSIDE (the direction trap of this section),
//    REVERSING AN OUTSIDE SIGN (outside changes are not reversed), TREATING AN
//    INSIDE CHANGE AS VERTICAL and TREATING AN OUTSIDE CHANGE AS HORIZONTAL,
//    SWAPPING THE TWO REFLECTIONS ($-f(x)$ against $f(-x)$), APPLYING BOTH
//    FLIPS, SWAPPING THE COORDINATES, RUNNING A TRANSFORMATION FORWARD when the
//    question asks to undo it, SCALING THE INPUT instead of the output, ADDING
//    INSTEAD OF MULTIPLYING in a stretch, SUBTRACTING BEFORE DOUBLING (wrong
//    order for $2f(x) - 3$), and READING THE GRAPH AT THE UNSHIFTED INPUT.
//  - No two choices inside an item name the same point, number, or graph, even
//    when written two different ways: for $f(x) = |x|$ the expressions $f(-x)$
//    and $f(x)$ are the same graph, and $f(2x)$ and $2f(x)$ are the same graph,
//    so those pairs never appear together.
//  - Figures: every coordinate cited in a solution is a listed vertex of the
//    right `curve`, and `curve` is drawn as straight segments between its
//    listed points, so midpoints such as $(2, 2)$ on the V through
//    $(0, 0)$ and $(3, 3)$ are exact.

const s172 = [
  // p1 — an outside constant slides the graph up or down.
  [
    {
      q: 'How does the graph of $y = f(x) - 6$ compare to the graph of $y = f(x)$?',
      choices: ['It is shifted left $6$', 'It is shifted down $6$', 'It is shifted up $6$', 'It is shifted right $6$'],
      answer: 1,
      solution:
        'The $-6$ sits OUTSIDE the function, so it changes outputs, not inputs: every point $(a, b)$ drops to $(a, b - 6)$ and the whole graph slides down $6$. Check a second, independent way with a point: if $f(2) = 5$, then at $x = 2$ the new graph has height $5 - 6 = -1$, which is $6$ lower and still in the same column ✓. (The choice "up $6$" is REVERSING AN OUTSIDE SIGN — only inside changes run backwards; "left $6$" and "right $6$" are TREATING AN OUTSIDE CHANGE AS HORIZONTAL, but nothing here touches the input.)',
    },
    {
      q: 'The graph of $y = f(x)$ is slid up $9$ units. Which equation describes the new graph?',
      choices: ['$y = f(x + 9)$', '$y = f(x - 9)$', '$y = f(x) + 9$', '$y = f(x) - 9$'],
      answer: 2,
      solution:
        'Sliding up raises every height by $9$: $(a, b) \\to (a, b + 9)$. Adding $9$ outside the function does exactly that, so the new graph is $y = f(x) + 9$. Check a second, independent way with numbers: if $f(4) = 1$, then $(4, 1)$ is on the old graph and $(4, 10)$ must be on the new one — and $f(4) + 9 = 1 + 9 = 10$ ✓. (The choice $y = f(x) - 9$ slides DOWN $9$; the choices $f(x + 9)$ and $f(x - 9)$ change the input, which slides the graph sideways — left $9$ and right $9$ — and never lifts it.)',
    },
    {
      q: 'The point $(4, -1)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x) + 7$?',
      choices: ['$(11, -1)$', '$(4, -8)$', '$(-3, -1)$', '$(4, 6)$'],
      answer: 3,
      solution:
        'The $+7$ is outside, so it adds $7$ to the OUTPUT and leaves the input alone: $(4, -1) \\to (4, -1 + 7) = (4, 6)$. Check a second, independent way by evaluating the new rule at $x = 4$: its height is $f(4) + 7 = -1 + 7 = 6$ ✓. (The choice $(4, -8)$ subtracts $7$ instead of adding, REVERSING AN OUTSIDE SIGN; $(11, -1)$ and $(-3, -1)$ move the $x$-coordinate, TREATING AN OUTSIDE CHANGE AS HORIZONTAL, but a vertical slide never moves a point sideways.)',
    },
  ],
  // p2 — an inside constant slides the graph sideways, backwards from its sign.
  [
    {
      q: 'How does the graph of $y = f(x + 6)$ compare to the graph of $y = f(x)$?',
      choices: ['It is shifted right $6$', 'It is shifted up $6$', 'It is shifted left $6$', 'It is shifted down $6$'],
      answer: 2,
      solution:
        'Never trust the sign here — map a point. Suppose $f(0) = 5$ and write $g(x) = f(x + 6)$. Then $g(-6) = f(-6 + 6) = f(0) = 5$: the height that used to sit above $x = 0$ now sits above $x = -6$, so every point moves $6$ units LEFT. Check a second, independent way with another point: if $f(2) = 1$ then $g(-4) = f(2) = 1$, and $-4$ is again $6$ to the left of $2$ ✓. (The choice "right $6$" is SLIDING THE WRONG WAY INSIDE, following the $+$ sign instead of the substitution; "up $6$" and "down $6$" are TREATING AN INSIDE CHANGE AS VERTICAL, but heights never change in a horizontal slide.)',
    },
    {
      q: 'The graph of $y = f(x)$ is slid $8$ units to the right. Which equation describes the new graph?',
      choices: ['$y = f(x - 8)$', '$y = f(x + 8)$', '$y = f(x) + 8$', '$y = f(x) - 8$'],
      answer: 0,
      solution:
        'A slide right sends $(a, b)$ to $(a + 8, b)$, so the new rule must produce the old height $b$ at the input $a + 8$. Test $y = f(x - 8)$ there: it computes $f(a + 8 - 8) = f(a) = b$ ✓ — exactly right. Check a second, independent way with numbers: if $f(1) = 3$, the point $(1, 3)$ should move to $(9, 3)$, and $f(9 - 8) = f(1) = 3$ ✓. (The choice $f(x + 8)$ is SLIDING THE WRONG WAY INSIDE: it puts the old height at $a - 8$, a slide left. The choices $f(x) + 8$ and $f(x) - 8$ change heights instead of positions.)',
    },
    {
      q: 'The corner of the graph of $y = |x|$ sits at $(0, 0)$. Where is the corner of the graph of $y = |x - 7|$?',
      choices: ['$(-7, 0)$', '$(7, 0)$', '$(0, 7)$', '$(0, -7)$'],
      answer: 1,
      solution:
        'The corner of an absolute value graph is where the inside equals $0$: $x - 7 = 0$ gives $x = 7$, and the height there is $|0| = 0$, so the corner is $(7, 0)$ — the graph slid RIGHT $7$. Check a second, independent way by testing the rival: at $x = -7$ the height is $|-7 - 7| = 14$, nowhere near the bottom of the V ✗. (The choice $(-7, 0)$ is SLIDING THE WRONG WAY INSIDE, the trap this section is built around; $(0, 7)$ and $(0, -7)$ are TREATING AN INSIDE CHANGE AS VERTICAL, but the $-7$ lives inside the bars.)',
    },
  ],
  // p3 — an outside minus sign flips a point over the x-axis.
  [
    {
      q: 'The point $(-3, 5)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = -f(x)$?',
      choices: ['$(3, 5)$', '$(3, -5)$', '$(5, -3)$', '$(-3, -5)$'],
      answer: 3,
      solution:
        'The minus sign is outside the function, so it negates OUTPUTS: $(a, b) \\to (a, -b)$, a flip over the $x$-axis. The point becomes $(-3, -5)$. Check a second, independent way by evaluating: the new graph at $x = -3$ has height $-f(-3) = -5$ ✓. (The choice $(3, 5)$ is SWAPPING THE TWO REFLECTIONS — that is what $y = f(-x)$ gives; $(3, -5)$ is APPLYING BOTH FLIPS; $(5, -3)$ is SWAPPING THE COORDINATES, which is no reflection over either axis.)',
    },
    {
      q: 'The graph of $y = f(x)$ passes through $(0, 3)$ and $(2, -1)$. Which pair of points must be on the graph of $y = -f(x)$?',
      choices: [
        '$(0, -3)$ and $(2, 1)$',
        '$(0, 3)$ and $(-2, -1)$',
        '$(0, -3)$ and $(-2, 1)$',
        '$(0, 3)$ and $(2, 1)$',
      ],
      answer: 0,
      solution:
        'Negate each height and leave each input alone: $-f(0) = -3$ and $-f(2) = -(-1) = 1$, so the new graph passes through $(0, -3)$ and $(2, 1)$. Check a second, independent way with the point rule for a flip over the $x$-axis, $(a, b) \\to (a, -b)$: it sends $(0, 3) \\to (0, -3)$ and $(2, -1) \\to (2, 1)$ ✓. (The pair $(0, 3)$ and $(-2, -1)$ negates the INPUTS, which is SWAPPING THE TWO REFLECTIONS; the pair $(0, -3)$ and $(-2, 1)$ negates both coordinates, APPLYING BOTH FLIPS; the last pair flips only the second point and leaves the first untouched.)',
    },
    {
      q: 'The point $(5, -2)$ is on the graph of $y = -f(x)$. What is $f(5)$?',
      choices: ['$-2$', '$-5$', '$2$', '$5$'],
      answer: 2,
      solution:
        'The point says $-f(5) = -2$. Multiply both sides by $-1$: $f(5) = 2$. Check a second, independent way by going forward: if $f(5) = 2$, then $y = -f(x)$ has height $-2$ above $x = 5$, which is the given point ✓. (The choice $-2$ reads the height straight off the point, forgetting the minus sign; $5$ answers with the input instead of the output; $-5$ negates the input, but a minus OUTSIDE never touches $x$.)',
    },
  ],
  // p4 — naming the two reflections.
  [
    {
      q: 'The graph of $y = -f(x)$ is the graph of $y = f(x)$ flipped over which line?',
      choices: ['The $x$-axis', 'The $y$-axis', 'The line $y = x$', 'The line $y = -x$'],
      answer: 0,
      solution:
        'The minus sits outside, so it negates outputs: $(a, b) \\to (a, -b)$. Heights turn upside down while every input stays put, and that is a reflection over the $x$-axis. Check a second, independent way with a point: if $(4, 3)$ is on $y = f(x)$, then $-f(4) = -3$ puts $(4, -3)$ on the new graph — same column, mirrored height ✓. (Flipping over the $y$-axis is $y = f(-x)$, with the minus INSIDE, so choosing it is SWAPPING THE TWO REFLECTIONS; reflecting over $y = x$ swaps the coordinates; reflecting over $y = -x$ swaps and negates them.)',
    },
    {
      q: 'Reflecting the graph of $y = f(x)$ over the $y$-axis produces the graph of which equation?',
      choices: ['$y = -f(x)$', '$y = -f(-x)$', '$y = f(-x)$', '$y = f(x)$'],
      answer: 2,
      solution:
        'A reflection over the $y$-axis sends $(a, b) \\to (-a, b)$: left and right trade places, heights stay. Test $y = f(-x)$ at the new input $-a$: it computes $f(-(-a)) = f(a) = b$ ✓, exactly the height we want there. Check a second, independent way with numbers: if $f(3) = 8$, the mirrored point should be $(-3, 8)$, and $f(-(-3)) = f(3) = 8$ ✓. (The choice $y = -f(x)$ is SWAPPING THE TWO REFLECTIONS — it flips over the $x$-axis; $y = -f(-x)$ is APPLYING BOTH FLIPS, sending $(3, 8)$ to $(-3, -8)$; $y = f(x)$ is the original graph, unmoved.)',
    },
    {
      q: 'A graph is unchanged when it is flipped over the $y$-axis. Which statement must then be true for every input $x$?',
      choices: ['$f(-x) = -f(x)$', '$-f(x) = f(x)$', '$f(x) = x$', '$f(-x) = f(x)$'],
      answer: 3,
      solution:
        'Flipping over the $y$-axis turns the graph of $y = f(x)$ into the graph of $y = f(-x)$. Saying the picture is unchanged says those two graphs are identical, so $f(-x) = f(x)$ at every input. Check a second, independent way with an example: the graph of $f(x) = x^2$ is symmetric about the $y$-axis, and indeed $f(-x) = (-x)^2 = x^2 = f(x)$ ✓. (The statement $f(-x) = -f(x)$ describes symmetry through the origin, which is APPLYING BOTH FLIPS; $-f(x) = f(x)$ forces every height to be $0$ and describes the $x$-axis flip instead; $f(x) = x$ names a particular line, and its graph is not $y$-axis symmetric, since $f(-1) = -1$ while $f(1) = 1$ ✗.)',
    },
  ],
  // p5 — moving one point through a horizontal slide.
  [
    {
      q: 'The point $(-1, 8)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x - 5)$?',
      choices: ['$(-6, 8)$', '$(-1, 13)$', '$(4, 8)$', '$(-1, 3)$'],
      answer: 2,
      solution:
        'Do not guess the direction — find the input that makes the inside equal $-1$. For $g(x) = f(x - 5)$ we need $x - 5 = -1$, so $x = 4$, and then $g(4) = f(-1) = 8$. The point is $(4, 8)$, a slide RIGHT $5$. Check a second, independent way with the point rule $(a, b) \\to (a + 5, b)$: $-1 + 5 = 4$ and the height is untouched ✓. (The choice $(-6, 8)$ is SLIDING THE WRONG WAY INSIDE; $(-1, 13)$ and $(-1, 3)$ are TREATING AN INSIDE CHANGE AS VERTICAL, but the $-5$ is inside the function, so heights do not move.)',
    },
    {
      q: 'The point $(3, 4)$ is on the graph of $y = f(x + 7)$. Which point must be on the graph of $y = f(x)$?',
      choices: ['$(-4, 4)$', '$(3, 11)$', '$(3, -3)$', '$(10, 4)$'],
      answer: 3,
      solution:
        'Read what the point says: the height of $f(x + 7)$ at $x = 3$ is $f(3 + 7) = f(10)$, and that height is $4$. So $f(10) = 4$ and the point $(10, 4)$ is on the graph of $f$. Check a second, independent way with directions: $y = f(x + 7)$ is the graph of $f$ slid LEFT $7$, so undoing it slides the given point RIGHT $7$, and $3 + 7 = 10$ ✓. (The choice $(-4, 4)$ slides left again instead of undoing the slide; $(3, 11)$ and $(3, -3)$ are TREATING AN INSIDE CHANGE AS VERTICAL.)',
    },
    {
      q: 'The graph of $y = f(x)$ crosses the $x$-axis at $(9, 0)$. Where does the graph of $y = f(x + 2)$ cross the $x$-axis?',
      choices: ['$(11, 0)$', '$(7, 0)$', '$(9, 2)$', '$(9, -2)$'],
      answer: 1,
      solution:
        'Let $g(x) = f(x + 2)$ and hunt for the input that makes the inside equal $9$: $x + 2 = 9$ gives $x = 7$, and $g(7) = f(9) = 0$. The crossing moves to $(7, 0)$, a slide LEFT $2$. Check a second, independent way at the rival input: $g(11) = f(13)$, and nothing we know says $f(13) = 0$ ✗. (The choice $(11, 0)$ is SLIDING THE WRONG WAY INSIDE; $(9, 2)$ and $(9, -2)$ lift or drop the point, but a point moved off the $x$-axis is not an $x$-intercept at all.)',
    },
  ],
  // p6 — read a transformation off a picture (own figure per variation).
  [
    {
      q: 'The graph of $f(x) = |x|$ is shown along with a second graph. Which equation describes the second graph?',
      fig: {
        view: [-4, -5, 4, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 3], [0, 0], [3, 3]] },
          { t: 'curve', pts: [[-3, -4], [0, -1], [3, -4]] },
          { t: 'label', p: [-2.4, 3.5], text: 'y = f(x)' },
          { t: 'label', p: [2.2, -4.5], text: 'second graph' },
        ],
      },
      choices: ['$y = f(x) - 1$', '$y = -f(x) - 1$', '$y = -f(x) + 1$', '$y = f(x) + 1$'],
      answer: 1,
      solution:
        'The second V opens DOWNWARD, so the graph was flipped over the $x$-axis, and that needs the minus OUTSIDE: $-f(x)$, whose peak would sit at $(0, 0)$. The peak in the picture is at $(0, -1)$, one unit lower, so subtract $1$ outside as well: $y = -f(x) - 1$. Check a second, independent way at a far point: the formula gives $-f(3) - 1 = -3 - 1 = -4$ at $x = 3$, and the second graph does pass through $(3, -4)$ ✓. (The choice $y = f(x) - 1$ slides down without flipping, so it would still open upward; $y = -f(x) + 1$ flips correctly but puts the peak at $(0, 1)$, REVERSING AN OUTSIDE SIGN; $y = f(x) + 1$ does neither.)',
    },
    {
      q: 'The graph of $f(x) = |x|$ is drawn together with the graph of a second function. Which equation describes the second graph?',
      fig: {
        view: [-4, -2, 7, 4],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 3], [0, 0], [3, 3]] },
          { t: 'curve', pts: [[0, 3], [3, 0], [6, 3]] },
          { t: 'label', p: [-2.4, 3.5], text: 'y = f(x)' },
          { t: 'label', p: [5.4, 3.5], text: 'second graph' },
        ],
      },
      choices: ['$y = f(x + 3)$', '$y = f(x) - 3$', '$y = f(x - 3)$', '$y = -f(x) + 3$'],
      answer: 2,
      solution:
        'Both graphs are the same upward V — same width, same direction — so this is a pure horizontal slide, and the corner moved from $(0, 0)$ to $(3, 0)$: right $3$, with no vertical motion. A slide right $3$ is $y = f(x - 3)$; substitute the corner to be sure: at $x = 3$ the formula gives $f(3 - 3) = f(0) = 0$ ✓. Check a second, independent way at a far point: at $x = 6$ it gives $f(6 - 3) = f(3) = 3$, and the second graph does pass through $(6, 3)$ ✓. (The choice $y = f(x + 3)$ is SLIDING THE WRONG WAY INSIDE, which would put the corner at $(-3, 0)$; $y = f(x) - 3$ drops the corner to $(0, -3)$; $y = -f(x) + 3$ would open downward.)',
    },
    {
      q: 'The graph of $f(x) = |x|$ and a steeper V are shown on the same axes. Which equation describes the steeper graph?',
      fig: {
        view: [-4, -2, 4, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 3], [0, 0], [3, 3]] },
          { t: 'curve', pts: [[-2, 4], [0, 0], [2, 4]] },
          { t: 'label', p: [3.4, 2.6], text: 'y = f(x)' },
          { t: 'label', p: [2.2, 4.5], text: 'steeper graph' },
        ],
      },
      choices: ['$y = 2f(x)$', '$y = f(x) + 2$', '$y = f(x - 2)$', '$y = -2f(x)$'],
      answer: 0,
      solution:
        'Both Vs have their corner at $(0, 0)$, so nothing slid — the second graph is simply taller everywhere. Read one column: at $x = 2$ the first graph is at height $2$ and the steeper one is at height $4$, so every height was doubled, which is $y = 2f(x)$. Check a second, independent way on the other arm: at $x = -2$ the formula gives $2f(-2) = 2(2) = 4$, and the steeper graph does pass through $(-2, 4)$ ✓. (The choice $y = f(x) + 2$ is ADDING INSTEAD OF MULTIPLYING and would lift the corner to $(0, 2)$ without changing the steepness; $y = f(x - 2)$ would move the corner to $(2, 0)$; $y = -2f(x)$ is twice as tall but upside down.)',
    },
  ],
  // p7 — a combined transformation moving one point.
  [
    {
      q: 'Let $g(x) = f(x + 2) + 5$. The point $(-1, 4)$ is on the graph of $f$. Where does it land on the graph of $g$?',
      choices: ['$(-3, 9)$', '$(1, 9)$', '$(-3, -1)$', '$(1, -1)$'],
      answer: 0,
      solution:
        'Inside first: we need $x + 2 = -1$, so $x = -3$ — the point moves LEFT $2$. Outside next: the $+5$ raises the height from $4$ to $9$. The landing spot is $(-3, 9)$. Check a second, independent way by evaluating there: $g(-3) = f(-3 + 2) + 5 = f(-1) + 5 = 4 + 5 = 9$ ✓. (The choice $(1, 9)$ is SLIDING THE WRONG WAY INSIDE; $(-3, -1)$ subtracts $5$, REVERSING AN OUTSIDE SIGN; $(1, -1)$ makes both mistakes at once.)',
    },
    {
      q: 'Let $g(x) = f(x - 4) + 1$. The point $(6, -2)$ is on the graph of $g$. Which point must be on the graph of $f$?',
      choices: ['$(10, -1)$', '$(2, -1)$', '$(10, -3)$', '$(2, -3)$'],
      answer: 3,
      solution:
        'Write out what the point says: $g(6) = f(6 - 4) + 1 = f(2) + 1$, and that equals $-2$. So $f(2) = -3$, and $(2, -3)$ is on the graph of $f$. Check a second, independent way by going forward from $(2, -3)$: the graph of $g$ is $f$ slid right $4$ and up $1$, which carries $(2, -3)$ to $(6, -2)$ ✓. (The choice $(10, -1)$ is RUNNING THE TRANSFORMATION FORWARD instead of undoing it; $(2, -1)$ adds $1$ where it should subtract; $(10, -3)$ moves $x$ the wrong way.)',
    },
    {
      q: 'Let $g(x) = 2f(x) - 3$. The point $(5, 4)$ is on the graph of $f$. Where does it land on the graph of $g$?',
      choices: ['$(10, 5)$', '$(5, 5)$', '$(5, 2)$', '$(5, 8)$'],
      answer: 1,
      solution:
        'Both changes are outside the function, so the input never moves: the point stays in the column $x = 5$. The height is doubled FIRST and lowered by $3$ afterwards: $2(4) - 3 = 8 - 3 = 5$, giving $(5, 5)$. Check a second, independent way by evaluating: $g(5) = 2f(5) - 3 = 2(4) - 3 = 5$ ✓. (The choice $(5, 2)$ is SUBTRACTING BEFORE DOUBLING, computing $2(4 - 3)$; $(5, 8)$ doubles and forgets to subtract; $(10, 5)$ doubles the $x$-coordinate, but a vertical stretch never moves a point sideways.)',
    },
  ],
  // p8 — what a vertical stretch leaves alone.
  [
    {
      q: 'The graph of $y = f(x)$ has an $x$-intercept at $(6, 0)$. The graph is then replaced by the graph of $y = \\frac{1}{3}f(x)$. Which feature is guaranteed NOT to move?',
      choices: [
        'The $y$-intercept',
        'The highest point of the graph',
        'The $x$-intercept $(6, 0)$',
        'Every point stays where it is',
      ],
      answer: 2,
      solution:
        'Multiplying by $\\frac{1}{3}$ divides every height by $3$ — and a third of $0$ is still $0$. A point sitting ON the $x$-axis therefore stays exactly where it is. Check a second, independent way by evaluating: the new graph at $x = 6$ has height $\\frac{1}{3}f(6) = \\frac{1}{3}(0) = 0$, so $(6, 0)$ is on it too ✓. (The $y$-intercept $(0, f(0))$ becomes $\\left(0, \\frac{f(0)}{3}\\right)$, which moves unless $f(0)$ happens to be $0$; the highest point keeps its input but loses two thirds of its height; and "every point" is far too strong — a point at height $9$ drops to height $3$ ✗.)',
    },
    {
      q: 'The graph of $y = f(x)$ crosses the $x$-axis at $x = -2$ and at $x = 7$. Where does the graph of $y = 5f(x)$ cross the $x$-axis?',
      choices: [
        'At $x = -2$ and $x = 7$',
        'At $x = -10$ and $x = 35$',
        'At $x = -\\frac{2}{5}$ and $x = \\frac{7}{5}$',
        'It never crosses the $x$-axis',
      ],
      answer: 0,
      solution:
        'A crossing happens where the height is $0$, and $5f(x) = 0$ exactly when $f(x) = 0$ — multiplying by $5$ can neither create nor destroy a zero. The crossings stay at $x = -2$ and $x = 7$. Check a second, independent way with the point rule $(a, b) \\to (a, 5b)$: it sends $(-2, 0) \\to (-2, 0)$ and $(7, 0) \\to (7, 0)$ ✓. (The choice $x = -10$ and $x = 35$ is SCALING THE INPUT instead of the output; $x = -\\frac{2}{5}$ and $x = \\frac{7}{5}$ is what the inside change $y = f(5x)$ would give; "never crosses" would need those heights to become nonzero, but $5(0) = 0$ ✗.)',
    },
    {
      q: 'The point $(4, 0)$ is on the graph of $y = f(x)$. Which point is guaranteed to be on the graph of $y = 6f(x)$?',
      choices: ['$(24, 0)$', '$(4, 6)$', '$(0, 4)$', '$(4, 0)$'],
      answer: 3,
      solution:
        'A vertical stretch multiplies heights by $6$ and leaves inputs alone: $(a, b) \\to (a, 6b)$. Here $6 \\times 0 = 0$, so the point does not budge — it is still $(4, 0)$. Check a second, independent way by evaluating: the new graph at $x = 4$ has height $6f(4) = 6(0) = 0$ ✓. (The choice $(24, 0)$ is SCALING THE INPUT; $(4, 6)$ is ADDING INSTEAD OF MULTIPLYING, since $6 \\times 0$ is $0$, not $6$; $(0, 4)$ is SWAPPING THE COORDINATES.)',
    },
  ],
  // p9 — evaluate a transformed function using a graph (own figure per variation).
  [
    {
      q: 'The graph of $y = f(x)$ is shown. Let $g(x) = f(x + 2) - 1$. What is $g(-1)$?',
      fig: {
        view: [-4, -3, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, -2], [-1, 2], [1, 3], [3, -1]] },
          { t: 'label', p: [2.6, 3.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$1$', '$-3$', '$4$', '$2$'],
      answer: 3,
      solution:
        'Follow the formula: $g(-1) = f(-1 + 2) - 1 = f(1) - 1$. From the graph the peak sits at $(1, 3)$, so $f(1) = 3$ and $g(-1) = 3 - 1 = 2$. Check a second, independent way with the point rule: the graph of $g$ is the graph of $f$ slid left $2$ and down $1$, so the peak $(1, 3)$ lands at $(-1, 2)$ — height $2$ above $x = -1$ ✓. (The choice $1$ is READING THE GRAPH AT THE UNSHIFTED INPUT, using $f(-1) = 2$; the choice $-3$ shifts the input the wrong way and reads $f(-3) = -2$; the choice $4$ adds $1$ instead of subtracting.)',
    },
    {
      q: 'The graph of $y = f(x)$ is shown. Let $h(x) = f(x - 2) + 3$. What is $h(3)$?',
      fig: {
        view: [-4, -3, 4, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 1], [-1, -2], [1, 2], [3, 4]] },
          { t: 'label', p: [-2.8, 3.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$7$', '$5$', '$-1$', '$2$'],
      answer: 1,
      solution:
        'Substitute: $h(3) = f(3 - 2) + 3 = f(1) + 3$. The graph passes through $(1, 2)$, so $f(1) = 2$ and $h(3) = 2 + 3 = 5$. Check a second, independent way with the point rule: the graph of $h$ is the graph of $f$ slid right $2$ and up $3$, so $(1, 2)$ lands at $(3, 5)$ — height $5$ above $x = 3$ ✓. (The choice $7$ is READING THE GRAPH AT THE UNSHIFTED INPUT, using $f(3) = 4$; the choice $2$ stops at $f(1)$ and forgets the $+3$; the choice $-1$ subtracts $3$ instead of adding.)',
    },
    {
      q: 'The graph of $y = f(x)$ is shown. Let $g(x) = -f(x) + 1$. What is $g(2)$?',
      fig: {
        view: [-4, -4, 4, 6],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-2, 5], [0, 1], [2, -3], [3, -1]] },
          { t: 'label', p: [1.6, 3.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$4$', '$-2$', '$2$', '$-4$'],
      answer: 0,
      solution:
        'Work outward: $g(2) = -f(2) + 1$. The graph has its low turn at $(2, -3)$, so $f(2) = -3$ and $g(2) = -(-3) + 1 = 3 + 1 = 4$. Check a second, independent way with the point rule: $y = -f(x) + 1$ flips each point over the $x$-axis and then lifts it $1$, so $(2, -3) \\to (2, 3) \\to (2, 4)$ ✓. (The choice $-2$ computes $f(2) + 1$ and forgets the flip; the choice $2$ adds before flipping, computing $-(f(2) + 1)$; the choice $-4$ negates the INPUT instead of the output, reading $-f(-2) + 1 = -5 + 1$ from the point $(-2, 5)$.)',
    },
  ],
  // p10 — tracking the vertex of a shifted parabola.
  [
    {
      q: 'Start with $f(x) = x^2$, whose vertex is $(0, 0)$. What is the vertex of the graph of $y = f(x - 5) + 2$?',
      choices: ['$(5, 2)$', '$(-5, 2)$', '$(5, -2)$', '$(-5, -2)$'],
      answer: 0,
      solution:
        'Write the new rule out: $y = (x - 5)^2 + 2$. The vertex sits where the squared part is $0$, so $x - 5 = 0$ gives $x = 5$, and the height there is $0 + 2 = 2$: the vertex is $(5, 2)$. Check a second, independent way by testing neighbours: at $x = 6$ the height is $1 + 2 = 3$, and at $x = 4$ it is also $3$ — both higher, so $(5, 2)$ really is the lowest point ✓. (The choices with $x = -5$ are SLIDING THE WRONG WAY INSIDE; the choices with height $-2$ are REVERSING AN OUTSIDE SIGN, reading the $+2$ as a drop.)',
    },
    {
      q: 'The graph of $y = x^2$ is slid so that its vertex ends up at $(-2, 6)$. Which equation describes the new graph?',
      choices: ['$y = (x - 2)^2 + 6$', '$y = (x + 2)^2 + 6$', '$y = (x + 2)^2 - 6$', '$y = (x - 2)^2 - 6$'],
      answer: 1,
      solution:
        'Moving the vertex to $x = -2$ is a slide LEFT $2$, which puts $x + 2$ inside the square, and raising it to height $6$ adds $6$ outside: $y = (x + 2)^2 + 6$. Check a second, independent way by substituting: at $x = -2$ the formula gives $0 + 6 = 6$ ✓, and every other input makes $(x + 2)^2$ positive, so $6$ is the lowest height and $(-2, 6)$ is the vertex ✓. (The choices with $(x - 2)^2$ are SLIDING THE WRONG WAY INSIDE, putting the vertex at $x = 2$; the choices ending in $-6$ are REVERSING AN OUTSIDE SIGN, dropping the vertex to height $-6$.)',
    },
    {
      q: 'Let $f(x) = x^2$. The graph of $y = f(x + h) + k$ has its vertex at $(3, -5)$. What are $h$ and $k$?',
      choices: ['$h = 3$, $k = -5$', '$h = 3$, $k = 5$', '$h = -3$, $k = 5$', '$h = -3$, $k = -5$'],
      answer: 3,
      solution:
        'The graph is $y = (x + h)^2 + k$, and its vertex sits where the square is $0$: $x + h = 0$, that is $x = -h$. We need $-h = 3$, so $h = -3$; the height at the vertex is $k$, so $k = -5$. Check a second, independent way by writing the answer out: with $h = -3$ and $k = -5$ the rule is $y = (x - 3)^2 - 5$, whose vertex is at $x = 3$ with height $-5$ ✓. (The choices with $h = 3$ read the vertex’s $x$-coordinate straight off $h$, ignoring that the inside runs backwards; the choices with $k = 5$ are REVERSING AN OUTSIDE SIGN, which is not reversed at all.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 17,
  sections: {
    '17.2': s172,
  },
}
