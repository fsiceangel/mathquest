// Introduction to Algebra chapter 17 — variations for section 17.3
// (Inverse Functions Revisited).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text and then confirmed a SECOND,
//    INDEPENDENT way. Whenever a variation names a formula for an inverse, BOTH
//    round trips are checked in the solution: $f(f^{-1}(x)) = x$ AND
//    $f^{-1}(f(x)) = x$. Whenever a variation reads a value off a graph, the
//    answer is confirmed a second time by swapping the point and reading the
//    mirrored graph.
//  - Where a function needs a restricted domain before it can be reversed, the
//    restriction is named, the repeated output it removes is named, and the
//    boundary input is checked.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand back a point on the inverse and ask for one on $f$, hand back the
//    formula for $f^{-1}$ and ask for $f$, ask which restriction repairs the
//    LEFT arm instead of the right one.
//  - Seven traps run through this section, and every distractor is one of them,
//    named in the solution with its wrong route worked out. THE UNSWAPPED
//    POINT: reporting $(a, b)$ when $(b, a)$ was wanted. THE NEGATED POINT:
//    negating the coordinates instead of trading them. THE WRONG MIRROR:
//    reflecting over an axis or the origin instead of over the line $y = x$.
//    THE FORWARD RUN: computing $f(k)$ when $f^{-1}(k)$ was asked for. THE
//    RECIPROCAL: reading $f^{-1}$ as $\frac{1}{f}$, which the $-1$ does not
//    mean. THE WRONG TEST: letting the vertical line test decide a question the
//    horizontal one settles, or the reverse. THE DISCARDED ROOT: answering with
//    the input that the domain restriction threw away.
//  - No two choices inside an item name the same value, even written two ways.
//  - Every figure is a polyline through its listed points, and every value the
//    question or a solution reads off a graph sits on a LISTED point, never in
//    the interpolation between two of them.

const s173 = [
  // p1 — swap a point onto the inverse. v1 keeps the notation, v2 reverses the
  //      direction (a point on the inverse, find one on the function), v3 tells
  //      a machine story.
  [
    {
      q: 'The point $(6, -4)$ is on the graph of $y = h(x)$, and $h$ has an inverse. Which point must be on the graph of $y = h^{-1}(x)$?',
      choices: ['$(-4, 6)$', '$(6, -4)$', '$(-6, 4)$', '$(4, -6)$'],
      answer: 0,
      solution:
        'A point on a graph is an input-output fact: $(6, -4)$ says $h(6) = -4$. The inverse takes that output back to that input, so $h^{-1}(-4) = 6$, which is the point $(-4, 6)$. Check a second way with a concrete machine through the given point, $h(x) = -2x + 8$: it gives $h(6) = -12 + 8 = -4$ ✓, its inverse is $h^{-1}(x) = \\frac{8 - x}{2}$, and $h^{-1}(-4) = \\frac{12}{2} = 6$ ✓. Both round trips hold too: $h(h^{-1}(x)) = -2 \\cdot \\frac{8 - x}{2} + 8 = x$ ✓ and $h^{-1}(h(x)) = \\frac{8 - (-2x + 8)}{2} = x$ ✓. (THE UNSWAPPED POINT copies $(6, -4)$ straight across ✗. THE NEGATED POINT negates instead of trading, giving $(-6, 4)$ ✗. The choice $(4, -6)$ swaps and then negates both coordinates, a half turn about the origin on top of the correct move ✗.)',
    },
    {
      q: 'The point $(-2, 9)$ is on the graph of $y = g^{-1}(x)$. Which point must be on the graph of $y = g(x)$?',
      choices: ['$(2, -9)$', '$(9, -2)$', '$(-2, 9)$', '$(-9, 2)$'],
      answer: 1,
      solution:
        'The swap works in both directions. Here $(-2, 9)$ on the inverse says $g^{-1}(-2) = 9$, so $g$ sends $9$ back to $-2$: $g(9) = -2$, the point $(9, -2)$. Check a second way with a concrete machine, $g(x) = x - 11$: it gives $g(9) = -2$ ✓, its inverse is $g^{-1}(x) = x + 11$, and $g^{-1}(-2) = 9$ ✓, matching the point we were handed. Both round trips hold: $g(g^{-1}(x)) = (x + 11) - 11 = x$ ✓ and $g^{-1}(g(x)) = (x - 11) + 11 = x$ ✓. (THE UNSWAPPED POINT reports $(-2, 9)$ again, as though the two graphs shared their points ✗. THE NEGATED POINT gives $(2, -9)$ ✗. The choice $(-9, 2)$ swaps correctly and then negates both coordinates ✗.)',
    },
    {
      q: 'A number machine $f$ is handed $5$ and returns $-1$, and $f$ has an inverse. Which point must lie on the graph of $y = f^{-1}(x)$?',
      choices: ['$(5, -1)$', '$(1, -5)$', '$(-5, 1)$', '$(-1, 5)$'],
      answer: 3,
      solution:
        'The machine records $f(5) = -1$, so its graph contains $(5, -1)$. The undo machine sends that output back to that input, $f^{-1}(-1) = 5$, giving the point $(-1, 5)$ — the mirror image of $(5, -1)$ across the line $y = x$. Check a second way with a concrete machine, $f(x) = -2x + 9$: it gives $f(5) = -10 + 9 = -1$ ✓, its inverse is $f^{-1}(x) = \\frac{9 - x}{2}$, and $f^{-1}(-1) = \\frac{10}{2} = 5$ ✓. Both round trips hold: $f(f^{-1}(x)) = -2 \\cdot \\frac{9 - x}{2} + 9 = x$ ✓ and $f^{-1}(f(x)) = \\frac{9 - (-2x + 9)}{2} = x$ ✓. (THE UNSWAPPED POINT reports the machine’s own point $(5, -1)$ ✗. THE NEGATED POINT negates the correct answer and gives $(1, -5)$ ✗. The choice $(-5, 1)$ negates the machine’s own point instead of swapping it ✗.)',
    },
  ],
  // p2 — which mirror produces the inverse. v1 runs the reflection forwards,
  //      v2 pairs each mirror with what it does to a point, v3 corrects a
  //      wrong mirror.
  [
    {
      q: 'Every point of the graph of $y = f(x)$ is reflected over the line $y = x$, and $f$ has an inverse. The reflected picture is the graph of what?',
      choices: ['$y = f^{-1}(x)$', '$y = -f(x)$', '$y = f(-x)$', '$y = f(x) + x$'],
      answer: 0,
      solution:
        'Reflecting a point over the diagonal $y = x$ trades its coordinates: $(a, b)$ lands on $(b, a)$. Trading coordinates is exactly what the inverse does, so the reflected picture is the graph of $y = f^{-1}(x)$. Check a second way with $f(x) = 2x$, whose graph contains $(3, 6)$: reflecting gives $(6, 3)$, and $f^{-1}(x) = \\frac{x}{2}$ does give $f^{-1}(6) = 3$ ✓. Both round trips hold: $f(f^{-1}(x)) = 2 \\cdot \\frac{x}{2} = x$ ✓ and $f^{-1}(f(x)) = \\frac{2x}{2} = x$ ✓. (THE WRONG MIRROR names $-f(x)$, which flips over the $x$-axis and sends $(3, 6)$ to $(3, -6)$ ✗, or $f(-x)$, which flips over the $y$-axis and sends $(3, 6)$ to $(-3, 6)$ ✗. The choice $f(x) + x$ adds a slanted amount to every height and is not a reflection at all ✗.)',
    },
    {
      q: 'Which sentence correctly describes how the graph of $y = f^{-1}(x)$ is built from the graph of $y = f(x)$?',
      choices: [
        'Flip it over the $x$-axis, so that $(a, b)$ becomes $(a, -b)$',
        'Flip it over the diagonal $y = x$, so that $(a, b)$ becomes $(b, a)$',
        'Turn it a half turn about the origin, so that $(a, b)$ becomes $(-a, -b)$',
        'Flip it over the $y$-axis, so that $(a, b)$ becomes $(-a, b)$',
      ],
      answer: 1,
      solution:
        'The inverse turns the fact $f(a) = b$ into the fact $f^{-1}(b) = a$, so every point $(a, b)$ becomes $(b, a)$ — and trading coordinates is a flip over the diagonal $y = x$. Check a second way with $f(x) = x + 4$, whose graph contains $(1, 5)$: the inverse is $f^{-1}(x) = x - 4$, and $f^{-1}(5) = 1$, so the inverse graph contains $(5, 1)$, the traded pair ✓. Both round trips hold: $f(f^{-1}(x)) = (x - 4) + 4 = x$ ✓ and $f^{-1}(f(x)) = (x + 4) - 4 = x$ ✓. (THE WRONG MIRROR offers the two axis flips: $(1, 5) \\to (1, -5)$ over the $x$-axis and $(1, 5) \\to (-1, 5)$ over the $y$-axis, neither of which is $(5, 1)$ ✗. THE NEGATED POINT is the half turn, sending $(1, 5)$ to $(-1, -5)$ ✗.)',
    },
    {
      q: 'Marisol reflects the graph of $y = f(x)$ over the $y$-axis and announces that the result is the graph of $y = f^{-1}(x)$. Which move should she have made instead?',
      choices: [
        'A reflection over the $x$-axis',
        'A half turn about the origin',
        'A reflection over the line $y = x$',
        'No move at all — the graph of $f^{-1}$ is the same picture as the graph of $f$',
      ],
      answer: 2,
      solution:
        'A flip over the $y$-axis negates inputs, sending $(a, b)$ to $(-a, b)$; that is the graph of $y = f(-x)$, not of the inverse. The inverse trades coordinates, $(a, b) \\to (b, a)$, which is a reflection over the line $y = x$. Check a second way with $f(x) = x + 3$, whose graph contains $(1, 4)$: Marisol’s move produces $(-1, 4)$, but $f^{-1}(x) = x - 3$ gives $f^{-1}(4) = 1$, so the inverse graph contains $(4, 1)$ — the $y = x$ mirror image ✓. Both round trips hold: $f(f^{-1}(x)) = (x - 3) + 3 = x$ ✓ and $f^{-1}(f(x)) = (x + 3) - 3 = x$ ✓. (THE WRONG MIRROR also offers the $x$-axis flip, which sends $(1, 4)$ to $(1, -4)$ ✗. THE NEGATED POINT is the half turn, giving $(-1, -4)$ ✗. Leaving the picture alone would claim $f^{-1}(1) = 4$, but $f^{-1}(1) = -2$ ✗.)',
    },
  ],
  // p3 — one input-output fact, read backwards. v1 keeps notation, v2 hands
  //      back an inverse value and asks for the forward one, v3 is a story.
  [
    {
      q: 'If $g(-3) = 8$ and $g$ has an inverse, what is $g^{-1}(8)$?',
      choices: ['$8$', '$-3$', '$3$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        '$g$ carries $-3$ to $8$, so the undo machine carries $8$ back to $-3$: $g^{-1}(8) = -3$. Check a second way with a concrete machine that fits the clue, $g(x) = -2x + 2$: it gives $g(-3) = 6 + 2 = 8$ ✓, its inverse is $g^{-1}(x) = \\frac{2 - x}{2}$, and $g^{-1}(8) = \\frac{-6}{2} = -3$ ✓. Both round trips hold: $g(g^{-1}(x)) = -2 \\cdot \\frac{2 - x}{2} + 2 = x$ ✓ and $g^{-1}(g(x)) = \\frac{2 - (-2x + 2)}{2} = x$ ✓. (The choice $8$ echoes the number that was fed in, as though the inverse returned its own input ✗. The choice $3$ drops the minus sign from the original input ✗. THE RECIPROCAL reads the $-1$ as an exponent and answers $\\frac{1}{8}$, but $g^{-1}$ is the undo machine, not a fraction ✗.)',
    },
    {
      q: 'A function $h$ has an inverse, and $h^{-1}(5) = 12$. What is $h(12)$?',
      choices: ['$12$', '$\\frac{1}{5}$', '$5$', '$60$'],
      answer: 2,
      solution:
        'The clue $h^{-1}(5) = 12$ says the undo machine turns $5$ into $12$, so the original machine turns $12$ back into $5$: $h(12) = 5$. Check a second way with a concrete machine that fits, $h(x) = x - 7$: it gives $h(12) = 5$ ✓, its inverse is $h^{-1}(x) = x + 7$, and $h^{-1}(5) = 12$ ✓, matching the clue. Both round trips hold: $h(h^{-1}(x)) = (x + 7) - 7 = x$ ✓ and $h^{-1}(h(x)) = (x - 7) + 7 = x$ ✓. (The choice $12$ echoes the input rather than the output ✗. THE RECIPROCAL answers $\\frac{1}{5}$ ✗. The choice $60$ multiplies the two given numbers, which no inverse rule asks for ✗.)',
    },
    {
      q: 'A scoring rule $f$ turns a raw score of $18$ into a final score of $45$, and $f$ has an inverse. What is $f^{-1}(45)$?',
      choices: ['$45$', '$\\frac{1}{45}$', '$63$', '$18$'],
      answer: 3,
      solution:
        'The rule records $f(18) = 45$, so running it backwards recovers the raw score: $f^{-1}(45) = 18$. Check a second way with a concrete rule that fits, $f(x) = 2x + 9$: it gives $f(18) = 36 + 9 = 45$ ✓, its inverse is $f^{-1}(x) = \\frac{x - 9}{2}$, and $f^{-1}(45) = \\frac{36}{2} = 18$ ✓. Both round trips hold: $f(f^{-1}(x)) = 2 \\cdot \\frac{x - 9}{2} + 9 = x$ ✓ and $f^{-1}(f(x)) = \\frac{2x + 9 - 9}{2} = x$ ✓. (The choice $45$ echoes the final score instead of returning the raw one ✗. THE RECIPROCAL answers $\\frac{1}{45}$ ✗. The choice $63$ adds the two scores, $18 + 45$, which reverses nothing ✗.)',
    },
  ],
  // p4 — which function survives the horizontal line test. v2 flips the
  //      question to which one FAILS; v3 works from described graphs.
  [
    {
      q: 'Which of these functions passes the horizontal line test on its whole domain, and so has an inverse?',
      choices: ['$f(x) = x^3$', '$f(x) = x^2 + 1$', '$f(x) = |x - 4|$', '$f(x) = -7$ (a constant function)'],
      answer: 0,
      solution:
        'The cubing machine climbs steadily — bigger input, bigger output, always — so each height is reached exactly once and every horizontal line crosses the graph once. Check a second way by naming the inverse: $f^{-1}(x) = \\sqrt[3]{x}$, and both round trips hold, $f(f^{-1}(x)) = (\\sqrt[3]{x})^3 = x$ ✓ and $f^{-1}(f(x)) = \\sqrt[3]{x^3} = x$ ✓. (Each rival repeats an output, which is the one thing that blocks an inverse. For $x^2 + 1$, both $2$ and $-2$ give $5$ ✗. For $|x - 4|$, both $3$ and $5$ give $1$ ✗. THE WRONG TEST might pass the constant function because it is a perfectly good function, but the line $y = -7$ lies right on top of its entire graph, so it repeats one output forever ✗.)',
    },
    {
      q: 'Three of these functions climb steadily, so each height is used once. Which one FAILS the horizontal line test?',
      choices: ['$f(x) = 4x - 9$', '$f(x) = \\frac{x}{5}$', '$f(x) = x^4$', '$f(x) = x + 100$'],
      answer: 2,
      solution:
        'For $f(x) = x^4$ the inputs $2$ and $-2$ both produce $16$, so the horizontal line $y = 16$ crosses the graph twice and the reverse trip has no single answer. Check a second way by naming inverses for the other three, which settles them: $4x - 9$ is undone by $\\frac{x + 9}{4}$, $\\frac{x}{5}$ by $5x$, and $x + 100$ by $x - 100$; taking the first pair, $f(f^{-1}(x)) = 4 \\cdot \\frac{x + 9}{4} - 9 = x$ ✓ and $f^{-1}(f(x)) = \\frac{4x - 9 + 9}{4} = x$ ✓, and the same cancelling happens for the other two ✓. (Each of those three is a line with a nonzero slope, so no height can repeat ✗. Fast growth by itself is not the problem — $x^3$ grows fast and passes; sharing an output is ✗.)',
    },
    {
      q: 'Four curves are described below. Which one is the graph of a function that has an inverse function?',
      choices: [
        'A horizontal line',
        'A parabola opening downward',
        'A circle centred at the origin',
        'A line with slope $-2$',
      ],
      answer: 3,
      solution:
        'A line with slope $-2$ falls steadily, so each height is reached exactly once and every horizontal line meets it once. Check a second way with a sample rule of that slope, $f(x) = -2x + 1$: its inverse is $f^{-1}(x) = \\frac{1 - x}{2}$, and both round trips hold, $f(f^{-1}(x)) = -2 \\cdot \\frac{1 - x}{2} + 1 = x$ ✓ and $f^{-1}(f(x)) = \\frac{1 - (-2x + 1)}{2} = x$ ✓. (A horizontal line hands one output to every input at once ✗. A downward parabola hits each height below its peak twice, once on each side ✗. THE WRONG TEST is the trap in the circle: a circle fails the VERTICAL line test, so it is not the graph of a function to begin with, and there is nothing to invert ✗.)',
    },
  ],
  // p5 — read an inverse value straight off a graph. Each variation carries its
  //      own figure, and every value quoted sits on a listed point of the curve.
  [
    {
      q: 'The graph of $y = f(x)$ is shown with the dashed line $y = 3$, and $f$ has an inverse. What is $f^{-1}(3)$?',
      fig: {
        view: [-5, -4, 6, 7],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, -3], [-2, 0], [0, 3], [3, 5], [5, 6]] },
          { t: 'seg', a: [-4.8, 3], b: [5.8, 3], dash: true },
          { t: 'label', p: [-4.0, 3.6], text: 'y = 3' },
          { t: 'label', p: [3.4, 6.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$-2$', '$0$', '$5$', '$3$'],
      answer: 1,
      solution:
        '$f^{-1}(3)$ asks which INPUT $f$ sends to the output $3$, so travel along the dashed line $y = 3$ until it meets the curve. They meet at $(0, 3)$, so $f(0) = 3$ and therefore $f^{-1}(3) = 0$. Check a second way by mirroring: reflecting $(0, 3)$ over the line $y = x$ gives $(3, 0)$, a point on the graph of $f^{-1}$, and a point $(3, 0)$ there says $f^{-1}(3) = 0$ ✓. The curve climbs the whole way, so the height $3$ is reached only at that one place. (The choice $-2$ follows the $x$-axis instead of the dashed line, landing where $f(x) = 0$ ✗. THE FORWARD RUN reads the height above $x = 3$ and reports $f(3) = 5$ ✗. The choice $3$ repeats the given height instead of naming the input that produced it ✗.)',
    },
    {
      q: 'The graph of $y = f(x)$ is shown with the dashed line $y = -2$. The graph falls the whole way, so $f$ has an inverse. What is $f^{-1}(-2)$?',
      fig: {
        view: [-4, -5, 5, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-3, 4], [-2, 3], [0, 0], [1, -2], [4, -4]] },
          { t: 'seg', a: [-3.8, -2], b: [4.8, -2], dash: true },
          { t: 'label', p: [-2.9, -1.4], text: 'y = -2' },
          { t: 'label', p: [2.0, 3.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$-2$', '$3$', '$1$', '$0$'],
      answer: 2,
      solution:
        'Enter on the $y$-axis at the height $-2$, follow the dashed line across, and leave on the $x$-axis. The dashed line meets the curve at $(1, -2)$, so $f(1) = -2$ and therefore $f^{-1}(-2) = 1$. Check a second way by mirroring: reflecting $(1, -2)$ over the line $y = x$ gives $(-2, 1)$, a point on the graph of $f^{-1}$, and that point says $f^{-1}(-2) = 1$ ✓. Because the curve falls steadily, the height $-2$ occurs at exactly that one input. (The choice $-2$ repeats the given height ✗. THE FORWARD RUN reads the height above $x = -2$ and reports $f(-2) = 3$ ✗. The choice $0$ follows the $x$-axis rather than the dashed line, landing where $f(x) = 0$ ✗.)',
    },
    {
      q: 'The rising graph of $y = f(x)$ is shown together with the dashed line $y = 4$, which it meets once. Use the picture to find $f^{-1}(4)$.',
      fig: {
        view: [-3, -5, 6, 6],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-2, -4], [0, -1], [2, 2], [3, 4], [4, 5]] },
          { t: 'seg', a: [-2.8, 4], b: [5.8, 4], dash: true },
          { t: 'label', p: [-2.0, 4.5], text: 'y = 4' },
          { t: 'label', p: [1.2, 5.4], text: 'y = f(x)' },
        ],
      },
      choices: ['$4$', '$5$', '$-3$', '$3$'],
      answer: 3,
      solution:
        'The dashed line $y = 4$ meets the curve at $(3, 4)$, so the input that produces the output $4$ is $3$: $f(3) = 4$, hence $f^{-1}(4) = 3$. Check a second way by mirroring: reflecting $(3, 4)$ over the line $y = x$ gives $(4, 3)$, a point on the graph of $f^{-1}$, and that point says $f^{-1}(4) = 3$ ✓. Since the graph rises the whole way, no other input reaches the height $4$. (The choice $4$ repeats the given height rather than naming its input ✗. THE FORWARD RUN reads the height above $x = 4$ and reports $f(4) = 5$ ✗. THE NEGATED POINT belongs to a student who thinks the inverse negates coordinates, turning $(3, 4)$ into $(-3, -4)$ and answering $-3$ ✗.)',
    },
  ],
  // p6 — functions that are their own inverse. v3 asks what self-inverse says
  //      about the picture instead of naming the function.
  [
    {
      q: 'Exactly one of the functions below is its own inverse. Which one?',
      choices: ['$f(x) = \\frac{6}{x}$ (for $x \\ne 0$)', '$f(x) = x + 6$', '$f(x) = 6x$', '$f(x) = x^2 + 6$'],
      answer: 0,
      solution:
        'Apply $f(x) = \\frac{6}{x}$ twice and simplify in general, not at one lucky number: $f(f(x)) = \\frac{6}{\\frac{6}{x}} = x$ for every $x \\ne 0$, so the machine undoes itself. Check a second way with a pair of numbers that are not left alone by $f$: $f(2) = 3$ and $f(3) = 2$, so the graph carries both $(2, 3)$ and $(3, 2)$ and is its own mirror image across $y = x$ ✓. (Running $x + 6$ twice adds $12$, sending $2$ to $14$ ✗. Running $6x$ twice multiplies by $36$, sending $2$ to $72$ ✗. Running $x^2 + 6$ twice sends $2$ to $10$ and then to $106$, and that machine has no inverse at all, since $2$ and $-2$ share the output $10$ ✗.)',
    },
    {
      q: 'Which machine undoes itself, so that $f(f(x)) = x$ for every input $x$?',
      choices: ['$f(x) = 2 - 3x$', '$f(x) = 3x - 2$', '$f(x) = -x + 4$', '$f(x) = \\frac{x}{4}$'],
      answer: 2,
      solution:
        'Apply $f(x) = -x + 4$ twice and simplify: $f(f(x)) = -(-x + 4) + 4 = x - 4 + 4 = x$ for every $x$, so this machine is its own inverse. Check a second way with a number the machine moves — its only fixed point is $x = 2$, so test $x = 5$: $f(5) = -1$ and $f(-1) = 5$, back where we started ✓. (Running $2 - 3x$ twice gives $2 - 3(2 - 3x) = 9x - 4$, which sends $1$ to $5$ ✗. Running $3x - 2$ twice gives $9x - 8$; note that testing $x = 1$ alone would fool you, because $1$ is a fixed point of that machine, so test $x = 2$ instead: $f(2) = 4$ and $f(4) = 10$ ✗. Running $\\frac{x}{4}$ twice divides by $16$, sending $8$ to $\\frac{1}{2}$ ✗.)',
    },
    {
      q: 'A function $f$ satisfies $f(f(x)) = x$ for every input. What does that tell you about the picture of its graph?',
      choices: [
        'It is a straight line through the origin',
        'It never crosses the line $y = x$',
        'It is symmetric about the $y$-axis',
        'It is its own reflection over the line $y = x$',
      ],
      answer: 3,
      solution:
        'The equation $f(f(x)) = x$ says $f$ undoes itself, so $f^{-1}$ is $f$ again. The graph of $f^{-1}$ is the reflection of the graph of $f$ over $y = x$, and here that reflection is the very same picture. Check a second way point by point: if $(a, b)$ is on the graph, then $f(a) = b$ and $f(b) = f(f(a)) = a$, so $(b, a)$ is on the graph too — every point brings its mirror image along ✓. (Take $f(x) = 8 - x$, which satisfies $f(f(x)) = 8 - (8 - x) = x$, as a test picture. It misses the origin, since $f(0) = 8$ ✗. It crosses $y = x$ at $(4, 4)$ ✗. And it is not symmetric about the $y$-axis, since $f(1) = 7$ while $f(-1) = 9$ ✗.)',
    },
  ],
  // p7 — what each line test really reports. v2 gives two crossings by name,
  //      v3 hands over the OTHER test so the two cannot be blurred.
  [
    {
      q: 'Every horizontal line meets the graph of a function $g$ at most once. What can you conclude?',
      choices: [
        '$g$ has an inverse function',
        '$g$ is not a function',
        '$g$ is its own inverse',
        'The graph of $g$ is a straight line',
      ],
      answer: 0,
      solution:
        'A horizontal line at height $k$ collects every input whose output is $k$. Meeting the graph at most once means no output is ever shared by two inputs, so sending each output back to its single input is a legitimate function: $g$ has an inverse. Check a second way by mirroring: reflecting the graph over $y = x$ turns those horizontal lines into vertical ones, and passing the vertical line test is exactly what makes the mirrored picture a function ✓. (THE WRONG TEST is behind "not a function" — that verdict comes from a VERTICAL line crossing twice, which this clue says nothing about ✗. Being its own inverse is a much stronger property; $g(x) = 3x$ passes the horizontal test but $g(g(x)) = 9x$ ✗. Plenty of non-lines pass too, such as $g(x) = x^3$ ✗.)',
    },
    {
      q: 'The horizontal line $y = 6$ crosses the graph of a function $f$ at $(1, 6)$ and again at $(9, 6)$. Which statement is correct?',
      choices: [
        '$f(6)$ has two different values, so $f$ is not a function',
        '$f$ is a function, but it has no inverse function',
        'The graph fails the vertical line test',
        '$f^{-1}(6) = 10$',
      ],
      answer: 1,
      solution:
        'The two crossings say $f(1) = 6$ and $f(9) = 6$: two different INPUTS share one OUTPUT. Each input still owns a single output, so $f$ is a perfectly good function; it is the reverse trip that breaks, because $f^{-1}(6)$ would have to be $1$ and $9$ at once. Check a second way with a concrete function of exactly this shape, $f(x) = -|x - 5| + 10$: it gives $f(1) = -4 + 10 = 6$ ✓ and $f(9) = -4 + 10 = 6$ ✓, and its graph is an upside-down V — one output per input, so it is a function, yet no undo machine can decide which arm to send $6$ back to ✓. (THE WRONG TEST powers the first and third choices: repeated inputs, not repeated outputs, are what the vertical line test forbids, and nothing here puts two points on one vertical line ✗. The choice $f^{-1}(6) = 10$ adds the two inputs, $1 + 9$, which no rule allows ✗.)',
    },
    {
      q: 'Someone looks at a curve and reports that a vertical line crosses it twice. What does that report tell you?',
      choices: [
        'The curve has an inverse function',
        'The curve fails the horizontal line test',
        'The curve is not the graph of a function at all',
        'Two different inputs give the same output',
      ],
      answer: 2,
      solution:
        'All the points on one vertical line share an $x$-value, so two crossings mean one input with two different outputs — and a function is allowed only one output per input. The curve is not the graph of a function, so asking about its inverse does not even arise. Check a second way with a concrete curve: the circle through $(0, 3)$ and $(0, -3)$ centred at the origin is cut twice by the line $x = 0$, and no function can send $0$ to both $3$ and $-3$ ✓. (THE WRONG TEST supplies the other three. "Two different inputs give the same output" is what a HORIZONTAL line crossing twice reports ✗, and failing the horizontal test is a separate verdict this report does not deliver ✗. Having an inverse requires being a function first ✗.)',
    },
  ],
  // p8 — a restricted domain makes a squaring machine reversible. v1 keeps the
  //      LEFT half, v2 adds a constant, v3 shifts the vertex sideways.
  [
    {
      q: 'Let $f(x) = x^2$ with the domain restricted to $x \\le 0$. What is $f^{-1}(25)$?',
      choices: ['$-5$', '$5$', '$5$ or $-5$', '$625$'],
      answer: 0,
      solution:
        'We need the allowed input whose square is $25$. Both $5$ and $-5$ square to $25$, but this restriction keeps only the inputs that are $0$ or negative, so $-5$ is the survivor: $f^{-1}(25) = -5$. Check a second way with the formula: on this domain $f^{-1}(x) = -\\sqrt{x}$, and both round trips hold, $f(f^{-1}(x)) = (-\\sqrt{x})^2 = x$ for $x \\ge 0$ ✓ and $f^{-1}(f(x)) = -\\sqrt{x^2} = -|x| = x$ because $x$ is not positive ✓; the boundary input behaves too, since $f(0) = 0$ and $f^{-1}(0) = 0$ ✓. (THE DISCARDED ROOT answers $5$, the input this restriction threw away ✗. Listing both roots ignores the restriction, which exists precisely to break the tie ✗. THE FORWARD RUN computes $f(25) = 625$ ✗.)',
    },
    {
      q: 'Let $g(x) = x^2 - 4$ with the domain restricted to $x \\ge 0$. What is $g^{-1}(12)$?',
      choices: ['$140$', '$4$', '$-4$', '$2\\sqrt{2}$'],
      answer: 1,
      solution:
        'Solve $x^2 - 4 = 12$: add $4$ to get $x^2 = 16$, so $x = 4$ or $x = -4$, and the restriction keeps only $x = 4$. Check a second way with the formula: on this domain $g^{-1}(x) = \\sqrt{x + 4}$, and both round trips hold, $g(g^{-1}(x)) = (\\sqrt{x + 4})^2 - 4 = x$ for $x \\ge -4$ ✓ and $g^{-1}(g(x)) = \\sqrt{x^2 - 4 + 4} = \\sqrt{x^2} = x$ because $x$ is not negative ✓; at the boundary, $g(0) = -4$ and $g^{-1}(-4) = 0$ ✓. (THE FORWARD RUN computes $g(12) = 144 - 4 = 140$ ✗. THE DISCARDED ROOT answers $-4$, the input the restriction removed ✗. The choice $2\\sqrt{2}$ subtracts the $4$ instead of adding it, solving $x^2 = 8$ ✗.)',
    },
    {
      q: 'Let $f(x) = (x + 2)^2$ with the domain restricted to $x \\ge -2$, which makes $f$ invertible. What is $f^{-1}(36)$?',
      choices: ['$-8$', '$1444$', '$6$', '$4$'],
      answer: 3,
      solution:
        'Solve $(x + 2)^2 = 36$: the quantity $x + 2$ is $6$ or $-6$, giving $x = 4$ or $x = -8$, and only $x = 4$ obeys $x \\ge -2$. So $f^{-1}(36) = 4$, and indeed $f(4) = 6^2 = 36$. Check a second way with the formula: on this domain $f^{-1}(x) = \\sqrt{x} - 2$, and both round trips hold, $f(f^{-1}(x)) = (\\sqrt{x} - 2 + 2)^2 = x$ for $x \\ge 0$ ✓ and $f^{-1}(f(x)) = \\sqrt{(x + 2)^2} - 2 = |x + 2| - 2 = (x + 2) - 2 = x$ because $x + 2$ is not negative ✓; the boundary works as well, since $f(-2) = 0$ and $f^{-1}(0) = -2$ ✓. (THE DISCARDED ROOT answers $-8$ ✗. The choice $6$ stops at the square root and forgets to take the $2$ back off ✗. THE FORWARD RUN computes $f(36) = 38^2 = 1444$ ✗.)',
    },
  ],
  // p9 — where an increasing line meets its own mirror image. v2 asks for one
  //      coordinate, v3 hands back the inverse and asks about the pair.
  [
    {
      q: 'Let $f(x) = 5x - 12$. The graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross at exactly one point. What is it?',
      choices: ['$(12, 12)$', '$(3, 3)$', '$(-3, -3)$', '$(2, 2)$'],
      answer: 1,
      solution:
        'The graph of $f^{-1}$ is the mirror image of the graph of $f$ across the line $y = x$, and an increasing line can only meet its own mirror image on the mirror itself. Solve $f(x) = x$: $5x - 12 = x$ gives $4x = 12$, so $x = 3$ and the point is $(3, 3)$. Check a second way by landing on both graphs separately: $f(3) = 15 - 12 = 3$ ✓, and the inverse is $f^{-1}(x) = \\frac{x + 12}{5}$, which gives $f^{-1}(3) = \\frac{15}{5} = 3$ ✓, so $(3, 3)$ really is on both. Both round trips hold: $f(f^{-1}(x)) = 5 \\cdot \\frac{x + 12}{5} - 12 = x$ ✓ and $f^{-1}(f(x)) = \\frac{5x - 12 + 12}{5} = x$ ✓. (The choice $(12, 12)$ lifts the constant out of the rule, but $f(12) = 48$ ✗. The choice $(-3, -3)$ comes from a sign slip, $4x = -12$; $f(-3) = -27$ ✗. The choice $(2, 2)$ divides the $12$ by $5 + 1$ instead of $5 - 1$; $f(2) = -2$ ✗.)',
    },
    {
      q: 'Let $f(x) = \\frac{1}{2}x + 4$. Its graph and the graph of $y = f^{-1}(x)$ meet at exactly one point. What is the $y$-coordinate of that point?',
      choices: ['$4$', '$2$', '$8$', '$-8$'],
      answer: 2,
      solution:
        'This line rises, so it can only meet its mirror image on the mirror line $y = x$. Solve $f(x) = x$: $\\frac{1}{2}x + 4 = x$ gives $4 = \\frac{1}{2}x$, so $x = 8$, and the meeting point is $(8, 8)$ with $y$-coordinate $8$. Check a second way by using the inverse directly: $f^{-1}(x) = 2x - 8$, and setting $\\frac{1}{2}x + 4 = 2x - 8$ gives $12 = \\frac{3}{2}x$, so $x = 8$ once more, with $f(8) = 8$ ✓ and $f^{-1}(8) = 8$ ✓. Both round trips hold: $f(f^{-1}(x)) = \\frac{1}{2}(2x - 8) + 4 = x$ ✓ and $f^{-1}(f(x)) = 2\\left(\\frac{1}{2}x + 4\\right) - 8 = x$ ✓. (The choice $4$ reads off the $y$-intercept height, but $f(0) = 4$ while $f^{-1}(0) = -8$, so $(0, 4)$ is not on both graphs ✗. The choice $2$ divides by $2$ where the equation calls for multiplying by $2$ ✗. The choice $-8$ lifts the constant out of the inverse ✗.)',
    },
    {
      q: 'A linear function $f$ has inverse $f^{-1}(x) = \\frac{x + 10}{6}$. The graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross at exactly one point. What is it?',
      choices: ['$(10, 10)$', '$(-2, -2)$', '$\\left(\\frac{10}{7}, \\frac{10}{7}\\right)$', '$(2, 2)$'],
      answer: 3,
      solution:
        'First recover $f$ by reversing the inverse’s steps: $f^{-1}$ adds $10$ and then divides by $6$, so $f$ multiplies by $6$ and then subtracts $10$, giving $f(x) = 6x - 10$. Both round trips confirm the pair: $f(f^{-1}(x)) = 6 \\cdot \\frac{x + 10}{6} - 10 = x$ ✓ and $f^{-1}(f(x)) = \\frac{6x - 10 + 10}{6} = x$ ✓. Since $f$ rises, the crossing sits on the mirror line: $6x - 10 = x$ gives $5x = 10$, so $x = 2$ and the point is $(2, 2)$. Check a second way by testing that point on each graph separately: $f(2) = 12 - 10 = 2$ ✓ and $f^{-1}(2) = \\frac{12}{6} = 2$ ✓. (The choice $(10, 10)$ lifts the constant out of the formula, but $f(10) = 50$ ✗. The choice $(-2, -2)$ is a sign slip, $5x = -10$; $f(-2) = -22$ ✗. The choice $\\left(\\frac{10}{7}, \\frac{10}{7}\\right)$ solves $6x - 10 = -x$, using the wrong mirror line ✗.)',
    },
  ],
  // p10 — repair a two-armed graph by restricting the domain. v2 keeps the LEFT
  //      arm; v3 judges a restriction someone else proposed.
  [
    {
      q: 'The graph of $f(x) = (x - 4)^2$ is a parabola with vertex $(4, 0)$, and it fails the horizontal line test. Which domain restriction makes $f$ invertible?',
      choices: ['Keep only $x \\ge 4$', 'Keep only $x \\ge 0$', 'Keep only $y \\ge 0$', 'Keep only $0 \\le x \\le 8$'],
      answer: 0,
      solution:
        'The two arms of the parabola meet at $x = 4$, and any pair of inputs the same distance from $4$ shares an output: $f(1) = 9$ and $f(7) = 9$. Keeping only $x \\ge 4$ leaves a single climbing arm, so every horizontal line now crosses at most once. Check a second way with the formula: on that arm $f^{-1}(x) = 4 + \\sqrt{x}$, and both round trips hold, $f(f^{-1}(x)) = (4 + \\sqrt{x} - 4)^2 = x$ for $x \\ge 0$ ✓ and $f^{-1}(f(x)) = 4 + \\sqrt{(x - 4)^2} = 4 + |x - 4| = x$ because $x - 4$ is not negative ✓; the boundary is fine, since $f(4) = 0$ and $f^{-1}(0) = 4$ ✓. (Keeping $x \\ge 0$ still allows both $1$ and $7$, which share the output $9$ ✗, and so does the window $0 \\le x \\le 8$ ✗. "Keep only $y \\ge 0$" trims OUTPUTS, and every output of this machine is already at least $0$, so it removes nothing at all ✗.)',
    },
    {
      q: 'The graph of $g(x) = |x + 3|$ is a V with its corner at $(-3, 0)$, so $g$ has no inverse. Which restriction repairs it?',
      choices: [
        'Keep only $-6 \\le x \\le 0$',
        'Keep only the inputs whose output satisfies $g(x) \\ge 0$',
        'Keep only $x \\le -3$',
        'No restriction is needed',
      ],
      answer: 2,
      solution:
        'Inputs balanced on either side of the corner share an output: $g(-5) = 2$ and $g(-1) = 2$. Keeping only $x \\le -3$ leaves the left arm alone, where $g(x) = -(x + 3)$ falls steadily, so each height is reached exactly once. Check a second way with the formula: on that arm $g^{-1}(x) = -3 - x$, and both round trips hold, $g(g^{-1}(x)) = |-3 - x + 3| = |-x| = x$ for $x \\ge 0$ ✓ and $g^{-1}(g(x)) = -3 - |x + 3| = -3 + (x + 3) = x$ because $x + 3$ is not positive ✓; at the corner, $g(-3) = 0$ and $g^{-1}(0) = -3$ ✓. (The window $-6 \\le x \\le 0$ is centred on the corner and still holds both $-5$ and $-1$ ✗. Every output of an absolute value is already at least $0$, so that condition removes nothing and both arms survive ✗. And a restriction certainly is needed, since $g(-4) = g(-2) = 1$ ✗.)',
    },
    {
      q: 'Ravi restricts $f(x) = x^2 + 5$ to the inputs with $-3 \\le x \\le 3$ and says the restricted function now has an inverse. Is he right?',
      choices: [
        'Yes — the allowed inputs now form a finite interval, and a finite interval always works',
        'Yes — every output is now at least $5$',
        'No — the restricted function is not a function at all',
        'No — the inputs $-2$ and $2$ are both still allowed, and both give $9$',
      ],
      answer: 3,
      solution:
        'A restriction repairs a function only when it removes every repeated output. Ravi’s window is centred on the vertex, so it keeps balanced pairs: $-2$ and $2$ are both allowed and $f(-2) = f(2) = 9$, so $f^{-1}(9)$ would have to be two numbers at once. Check a second way by naming a restriction that does work: keeping $0 \\le x \\le 3$ leaves one climbing arm with $f^{-1}(x) = \\sqrt{x - 5}$, and both round trips hold there, $f(f^{-1}(x)) = (\\sqrt{x - 5})^2 + 5 = x$ for $x \\ge 5$ ✓ and $f^{-1}(f(x)) = \\sqrt{x^2 + 5 - 5} = \\sqrt{x^2} = x$ for $x \\ge 0$ ✓. (A finite interval is no guarantee — this one is finite and fails ✗. Outputs of at least $5$ is a true remark that does nothing to stop two inputs sharing one of them ✗. THE WRONG TEST is behind "not a function at all": each input still owns exactly one output, so the vertical line test is passed and only the reverse trip breaks ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 17,
  sections: {
    '17.3': s173,
  },
}
