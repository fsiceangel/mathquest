// Introduction to Algebra chapter 17 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here, and
//    no `answer` is a bare number.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way. A transformed point is confirmed by SUBSTITUTING the new input into
//    the new rule and watching the old fact come back out. An inverse is
//    confirmed in both directions, $f(f^{-1}(x))$ and $f^{-1}(f(x))$, and each
//    landing on $x$. A crossing point is confirmed by evaluating BOTH functions
//    there. An intercept is confirmed by putting the root back into the rule.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand over the transformed point and ask for the original, ask for the size
//    of the shift instead of the landing spot, ask for a formula and its
//    intercepts together, ask for a verdict in words.
//  - Four traps run through the file. THE REVERSED SLIDE: reading $f(x - 5)$ as
//    a move LEFT. The inside change moves the graph OPPOSITE to its sign, and
//    every horizontal item here is settled by substitution, never by memory.
//    THE SWAPPED SLOT: reading the point $(a, b)$ as output-then-input, or
//    negating coordinates where an inverse asks for a swap. THE LOST ROOT:
//    keeping one $x$-intercept when the equation has two — or inventing two
//    when it has none. THE RECIPROCAL MIX-UP: reading $f^{-1}$ as
//    $\frac{1}{f}$, when the $-1$ is only notation for the undo machine.
//  - Nothing is decided by which way a shift "feels" — each direction claim is
//    checked by mapping an actual point through the new rule.

const worksheet = [
  // w1 — a point on a graph is an input-output fact. The middle variation runs
  //      the translation the other way, the last names the kind of intercept.
  [
    {
      q: 'The graph of $y = h(x)$ passes through the point $(6, -5)$. What is $h(6)$?',
      answer: '$h(6) = -5$',
      solution:
        'A point on a graph is a pair (input, output): the first coordinate is what went in, the second is what came out. The point $(6, -5)$ therefore records the single fact $h(6) = -5$. Check it a second way by reading the picture: at $x = 6$ the graph sits $5$ units BELOW the horizontal axis, and a height of $5$ below the axis is the number $-5$ ✓. THE SWAPPED SLOT is the trap: answering $6$, which reads the pair backwards and reports $h(-5) = 6$ instead. The input always comes first ✗.',
    },
    {
      q: 'A function $f$ satisfies $f(-7) = 12$. Write this fact as a point on the graph of $y = f(x)$.',
      answer: '$(-7, 12)$',
      solution:
        'Turn the statement into a pair by keeping the order it was written in: the input is $-7$ and the output is $12$, so the point is $(-7, 12)$. Check by reading the point back as a sentence, which is the reverse trip: "$(-7, 12)$ is on the graph" says $f(-7) = 12$, exactly what we started with ✓. The trap is writing $(12, -7)$, putting the output in front. That point would mean $f(12) = -7$ — a claim about the input $12$, which the question never made ✗.',
    },
    {
      q: 'The graph of $y = q(x)$ passes through $(-8, 0)$. Is that point an $x$-intercept or a $y$-intercept, and what is $q(-8)$?',
      answer: 'An $x$-intercept; $q(-8) = 0$',
      solution:
        'A $y$-intercept is a point whose INPUT is $0$, so it looks like $(0, \\text{something})$. An $x$-intercept is a point whose OUTPUT is $0$, so it looks like $(\\text{something}, 0)$. Here the second coordinate is the zero, so the point sits on the horizontal axis: it is an $x$-intercept. Reading the pair as a fact gives $q(-8) = 0$. Check a second way by asking what each intercept would need: a $y$-intercept would have to sit on the vertical axis, at $x = 0$, and this point sits eight units to the left of it ✓. The trap is calling it a $y$-intercept because a $0$ is visible somewhere in the pair. Which SLOT the zero occupies is the whole question ✗.',
    },
  ],
  // w2 — a vertical slide. The middle variation is handed the shifted point and
  //      asked for the original, the last solves for the size of the slide.
  [
    {
      q: 'The point $(-6, 11)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x) - 9$?',
      answer: '$(-6, 2)$',
      solution:
        'The $-9$ sits OUTSIDE the function, so it changes outputs only: every point drops $9$ and no point moves sideways. The height goes $11 \\to 11 - 9 = 2$, giving $(-6, 2)$. Confirm by substituting the new input into the new rule: at $x = -6$ the new rule gives $f(-6) - 9 = 11 - 9 = 2$ ✓, the height we claimed. The trap is letting the $9$ reach the $x$-coordinate and answering $(-15, 11)$. That would need the $9$ to be inside the function, next to the input; out here it can only touch the output ✗.',
    },
    {
      q: 'The point $(4, -3)$ is on the graph of $y = f(x) + 8$. Find a point that must be on the graph of $y = f(x)$.',
      answer: '$(4, -11)$',
      solution:
        'This time the transformed graph is the one we know about, so run the slide backwards. The point says $f(4) + 8 = -3$, so $f(4) = -3 - 8 = -11$, which is the point $(4, -11)$ on the graph of $f$. Confirm by running the slide FORWARDS from the answer: starting at $(4, -11)$ and rising $8$ lands on $(4, -3)$, the point we were given ✓. The trap is adding $8$ instead of removing it and answering $(4, 5)$. The graph of $f$ sits $8$ units BELOW the shifted graph, so undoing the rise means going down ✗.',
    },
    {
      q: 'The point $(-1, 6)$ is on the graph of $y = f(x) + k$, and $f(-1) = -7$. Find $k$.',
      answer: '$k = 13$',
      solution:
        'Write the point out as an equation using the new rule: at $x = -1$ the new rule gives $f(-1) + k$, and that must equal $6$. Since $f(-1) = -7$, we need $-7 + k = 6$, so $k = 13$. Confirm by measuring the gap directly, which never uses the equation: the old point sits at height $-7$ and the new one at height $6$, and the climb from $-7$ up to $6$ is $7 + 6 = 13$ units ✓. The trap is subtracting in the order the numbers appear and answering $k = -13$. Test it: $-7 + (-13) = -20$, nowhere near $6$ ✗.',
    },
  ],
  // w3 — a horizontal slide, the direction trap of the chapter. The last one
  //      asks for the SIZE of the shift and the direction in words.
  [
    {
      q: 'The point $(-4, 7)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x - 5)$?',
      answer: '$(1, 7)$',
      solution:
        'Do not trust the feel of the minus sign — find the input that makes the inside equal $-4$, the old input we have a fact about. Solving $x - 5 = -4$ gives $x = 1$, so the new point is $(1, 7)$: the graph slid RIGHT $5$. Confirm by substituting: at $x = 1$ the new rule gives $f(1 - 5) = f(-4) = 7$ ✓, the height we claimed. THE REVERSED SLIDE is the trap: reading the minus as "left" and answering $(-9, 7)$. Substitute and watch it fail — at $x = -9$ the new rule gives $f(-9 - 5) = f(-14)$, an input the question told us nothing about ✗.',
    },
    {
      q: 'The point $(10, -6)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x + 7)$?',
      answer: '$(3, -6)$',
      solution:
        'Again, hunt for the input that feeds the function its old value. Solving $x + 7 = 10$ gives $x = 3$, so the point lands at $(3, -6)$ — a slide LEFT $7$, opposite to the plus sign. Confirm by substituting: at $x = 3$ the new rule gives $f(3 + 7) = f(10) = -6$ ✓. The height never changed, because nothing was done outside the function. THE REVERSED SLIDE is the trap here too: answering $(17, -6)$ because the sign is a plus. At $x = 17$ the new rule reads $f(17 + 7) = f(24)$, an input we know nothing about ✗.',
    },
    {
      q: 'The only input that $f$ sends to the output $4$ is $x = 2$. The graph of $y = f(x - h)$ passes through $(9, 4)$. Find $h$, and say which way the graph slid.',
      answer: '$h = 7$; the graph slid right $7$',
      solution:
        'The point $(9, 4)$ says the new rule returns $4$ at $x = 9$: that is $f(9 - h) = 4$. The only input with output $4$ is $2$, so $9 - h = 2$ and $h = 7$. A shift of $h = 7$ written as $f(x - 7)$ moves the graph RIGHT $7$. Confirm by substituting into the finished rule: at $x = 9$, $f(9 - 7) = f(2) = 4$ ✓, and the height-$4$ point has travelled from $x = 2$ to $x = 9$, seven units to the right ✓. THE REVERSED SLIDE is the trap: answering $h = -7$ and "left". Substitute it — the rule becomes $f(x + 7)$, and at $x = 9$ that is $f(16)$, an input with no promised output ✗.',
    },
  ],
  // w4 — intercepts. The middle variation asks for both kinds at once, the last
  //      has NO x-intercepts and asks for a verdict.
  [
    {
      q: 'Find the $x$-intercepts of the graph of $f(x) = x^2 - 7x$.',
      answer: '$(0, 0)$ and $(7, 0)$',
      solution:
        '$x$-intercepts are the points where the output is $0$, so solve $x^2 - 7x = 0$. Factor out the common $x$: $x(x - 7) = 0$, and a product is zero exactly when one of its factors is, so $x = 0$ or $x = 7$. The intercepts are the POINTS $(0, 0)$ and $(7, 0)$. Check each root by substituting it back: $f(0) = 0 - 0 = 0$ ✓ and $f(7) = 49 - 49 = 0$ ✓. THE LOST ROOT is the trap: dividing both sides by $x$ to get $x - 7 = 0$ and reporting only $(7, 0)$. Dividing by $x$ quietly assumes $x \\ne 0$, and $x = 0$ is a genuine intercept — the graph passes through the origin ✗.',
    },
    {
      q: 'Find the $y$-intercept and all $x$-intercepts of the graph of $g(x) = x^2 - 3x - 10$.',
      answer: '$y$-intercept $(0, -10)$; $x$-intercepts $(5, 0)$ and $(-2, 0)$',
      solution:
        'The $y$-intercept is the point at input $0$: $g(0) = 0 - 0 - 10 = -10$, giving $(0, -10)$. For the $x$-intercepts solve $g(x) = 0$. Two numbers multiplying to $-10$ and adding to $-3$ are $-5$ and $2$, so $x^2 - 3x - 10 = (x - 5)(x + 2)$ and the roots are $x = 5$ and $x = -2$. Check both by substituting: $g(5) = 25 - 15 - 10 = 0$ ✓ and $g(-2) = 4 + 6 - 10 = 0$ ✓. A second, independent check on the factoring: the two roots should add to $3$ and multiply to $-10$, and $5 + (-2) = 3$ ✓ with $(5)(-2) = -10$ ✓. THE SWAPPED SLOT is the trap: writing the $y$-intercept as $(-10, 0)$. That point has input $-10$, which puts it on the horizontal axis instead ✗.',
    },
    {
      q: 'Does the graph of $h(x) = x^2 + 9$ have any $x$-intercepts? Give its $y$-intercept as well.',
      answer: 'No $x$-intercepts; the $y$-intercept is $(0, 9)$',
      solution:
        'An $x$-intercept would solve $x^2 + 9 = 0$, that is $x^2 = -9$. A square is never negative, so no real input works and the graph never reaches the horizontal axis. The $y$-intercept is the point at input $0$: $h(0) = 0 + 9 = 9$, the point $(0, 9)$. Confirm the first verdict a second way, without solving anything: $x^2$ is at least $0$ for every input, so $h(x)$ is at least $9$ — the entire graph floats nine or more units above the axis ✓. THE LOST ROOT runs backwards here: the trap is reading the rule as $x^2 - 9$ and inventing the intercepts $x = 3$ and $x = -3$. Substitute them and see: $h(3) = 9 + 9 = 18$, not $0$ ✗.',
    },
  ],
  // w5 — the inverse swaps a point. The middle variation is given a value of the
  //      function, the last starts on the inverse graph and works back.
  [
    {
      q: 'The point $(-6, 13)$ is on the graph of $y = f(x)$, and $f$ has an inverse. What point must be on the graph of $y = f^{-1}(x)$?',
      answer: '$(13, -6)$',
      solution:
        'The point says $f(-6) = 13$. The inverse undoes that trip, sending the output back to the input: $f^{-1}(13) = -6$, which is the point $(13, -6)$. Confirm a second way with the mirror: the graph of $f^{-1}$ is the reflection of the graph of $f$ over the line $y = x$, and reflecting swaps the coordinates of every point, sending $(-6, 13)$ to $(13, -6)$ ✓. The trap is negating instead of swapping and answering $(6, -13)$. Negating both coordinates spins the point halfway around the origin, which is a different move entirely — the inverse trades the two slots and leaves the numbers alone ✗.',
    },
    {
      q: 'A function $m$ has an inverse, and $m(11) = -4$. Find $m^{-1}(-4)$, and give the point this puts on the graph of $y = m^{-1}(x)$.',
      answer: '$m^{-1}(-4) = 11$, giving the point $(-4, 11)$',
      solution:
        'The machine $m$ carries $11$ to $-4$, so the undo machine carries $-4$ back to $11$: $m^{-1}(-4) = 11$. Written as a point on the graph of the inverse, that is $(-4, 11)$ — input first, output second. Confirm by running the round trip in both directions: $m^{-1}(m(11)) = m^{-1}(-4) = 11$ ✓, back where we started, and $m(m^{-1}(-4)) = m(11) = -4$ ✓, likewise. THE RECIPROCAL MIX-UP is the trap: reading $m^{-1}(-4)$ as $\\frac{1}{-4}$ and answering $-\\frac{1}{4}$. The little $-1$ is notation for the undo machine, not an exponent ✗.',
    },
    {
      q: 'The point $(8, -1)$ is on the graph of $y = f^{-1}(x)$. What point must be on the graph of $y = f(x)$?',
      answer: '$(-1, 8)$',
      solution:
        'Read the given point as a fact about the inverse: $f^{-1}(8) = -1$. An inverse only reports what $f$ already did, so $f$ must send $-1$ to $8$: $f(-1) = 8$, the point $(-1, 8)$. Confirm by swapping back the other way, which must return the point we were handed: $(-1, 8)$ on $f$ swaps to $(8, -1)$ on $f^{-1}$ ✓. The trap is leaving the point alone and answering $(8, -1)$ for both graphs. Swapping is what turns a fact about the inverse into a fact about $f$: on its own, $(8, -1)$ says $f^{-1}(8) = -1$, which describes the undo machine and makes no promise about $f$ at the input $8$ ✗.',
    },
  ],
  // w6 — flips. The middle variation asks for both single flips at once, the
  //      last hands over the doubly flipped point and asks for the original.
  [
    {
      q: 'The point $(-3, 8)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = -f(-x)$?',
      answer: '$(3, -8)$',
      solution:
        'Take the two minus signs one at a time. The inside minus negates inputs, a flip over the $y$-axis: $(-3, 8) \\to (3, 8)$. The outside minus negates outputs, a flip over the $x$-axis: $(3, 8) \\to (3, -8)$. Confirm by substituting the new input into the new rule: at $x = 3$, $-f(-3) = -(8) = -8$ ✓, the height we claimed. A second way to see it: two flips across perpendicular axes add up to a half turn about the origin, which sends $(a, b)$ to $(-a, -b)$, and $(-3, 8)$ does go to $(3, -8)$ ✓. The trap is stopping after one flip and answering $(3, 8)$ or $(-3, -8)$. There are two minus signs in the rule, so two things must change ✗.',
    },
    {
      q: 'The point $(5, -2)$ is on the graph of $y = f(x)$. Give the point that must be on the graph of $y = -f(x)$, and the point that must be on the graph of $y = f(-x)$.',
      answer: '$(5, 2)$ on $y = -f(x)$, and $(-5, -2)$ on $y = f(-x)$',
      solution:
        'A minus OUTSIDE touches outputs: $-f(5) = -(-2) = 2$, so the point stays at $x = 5$ and rises to $(5, 2)$ — a flip over the $x$-axis. A minus INSIDE touches inputs: we need the new input whose negative is $5$, namely $x = -5$, and there $f(-(-5)) = f(5) = -2$, so the point is $(-5, -2)$ — a flip over the $y$-axis. Both were confirmed by substituting the new input into the new rule ✓✓. The trap is swapping the two answers, handing $(-5, -2)$ to $-f(x)$ and $(5, 2)$ to $f(-x)$. Outside the function means vertical, inside means horizontal, and substitution settles it in one line ✗.',
    },
    {
      q: 'The point $(-4, -11)$ is on the graph of $y = -f(-x)$. Find a point that must be on the graph of $y = f(x)$.',
      answer: '$(4, 11)$',
      solution:
        'Write the given point out as an equation in the new rule. At $x = -4$ the rule gives $-f(-(-4)) = -f(4)$, and that equals $-11$, so $f(4) = 11$: the point $(4, 11)$ is on the graph of $f$. Confirm by running the two flips FORWARDS from the answer: $(4, 11)$ flips over the $y$-axis to $(-4, 11)$, then over the $x$-axis to $(-4, -11)$ ✓, exactly the point we were given. The trap is undoing only the height and answering $(-4, 11)$. Substitute it: that would say $f(-4) = 11$, a claim about the input $-4$, while the inside minus makes the rule at $x = -4$ report on the input $4$ ✗.',
    },
  ],
  // w7 — write a transformed absolute-value rule and read off its intercepts.
  //      The middle variation flips first, the last has no x-intercepts at all.
  [
    {
      q: 'The graph of $g$ is the graph of $f(x) = |x|$ shifted left $4$ and down $6$. Write a formula for $g(x)$, and find the $x$-intercepts of its graph.',
      answer: '$g(x) = |x + 4| - 6$; $x$-intercepts at $x = 2$ and $x = -10$',
      solution:
        'A move LEFT $4$ is written with a PLUS inside — check the corner to be sure: the corner of $y = |x|$ sits at $(0, 0)$, and $|x + 4|$ has its corner where $x + 4 = 0$, that is at $x = -4$, four units to the left ✓. Down $6$ is a plain $-6$ outside, so $g(x) = |x + 4| - 6$ with its corner at $(-4, -6)$. For the intercepts solve $|x + 4| - 6 = 0$, so $|x + 4| = 6$: the distance from $x$ to $-4$ is $6$, giving $x = 2$ and $x = -10$. Check both by substituting: $g(2) = |6| - 6 = 0$ ✓ and $g(-10) = |-6| - 6 = 0$ ✓. Two traps. THE REVERSED SLIDE gives $|x - 4| - 6$, whose corner sits at $(4, -6)$ — a move right ✗. THE LOST ROOT keeps only $x = 2$: the corner lies BELOW the axis, so both arms climb through it and there are two crossings ✗.',
    },
    {
      q: 'The graph of $h$ is the graph of $f(x) = |x|$ flipped over the $x$-axis and then shifted up $7$. Write a formula for $h(x)$, find the $x$-intercepts of its graph, and give the coordinates of its peak.',
      answer: '$h(x) = -|x| + 7$; $x$-intercepts at $x = 7$ and $x = -7$; peak at $(0, 7)$',
      solution:
        'A flip over the $x$-axis negates outputs, so it needs a minus OUTSIDE: $-|x|$, an upside-down V with its point at $(0, 0)$. Up $7$ adds $7$ outside, lifting that point to $(0, 7)$: $h(x) = -|x| + 7$. Since the V now opens downward, $(0, 7)$ is the highest point. For the intercepts solve $-|x| + 7 = 0$, so $|x| = 7$ and $x = 7$ or $x = -7$. Check both: $h(7) = -7 + 7 = 0$ ✓ and $h(-7) = -7 + 7 = 0$ ✓. Confirm the peak a second way: $-|x|$ is at most $0$ and equals $0$ only at $x = 0$, so $h(x)$ is at most $7$, reached only at $x = 0$ ✓. The trap is putting the minus inside and writing $|-x| + 7$. That changes nothing at all, because $|-x| = |x|$ — the graph stays a right-side-up V whose lowest point is $(0, 7)$, and it never meets the axis ✗.',
    },
    {
      q: 'The graph of $k$ is the graph of $f(x) = |x|$ shifted right $5$ and up $1$. Write a formula for $k(x)$, and find the $x$-intercepts of its graph.',
      answer: '$k(x) = |x - 5| + 1$; the graph has no $x$-intercepts',
      solution:
        'A move RIGHT $5$ is written with a MINUS inside — confirm with the corner: $|x - 5|$ has its corner where $x - 5 = 0$, at $x = 5$, five units right of the original corner ✓. Up $1$ adds $1$ outside, so $k(x) = |x - 5| + 1$ and the corner sits at $(5, 1)$. Now look for intercepts: $|x - 5| + 1 = 0$ needs $|x - 5| = -1$, and an absolute value is never negative, so there is no solution — the graph has no $x$-intercepts. Confirm without solving: $|x - 5|$ is at least $0$, so $k(x)$ is at least $1$, and the whole V floats above the axis with its lowest point one unit up ✓. THE LOST ROOT runs backwards here: the trap is treating $|x - 5| = -1$ like the usual two-branch case and answering $x = 4$ and $x = 6$. Substitute them — $k(4) = 1 + 1 = 2$ and $k(6) = 1 + 1 = 2$, neither of them $0$ ✗.',
    },
  ],
  // w8 — where a line meets its own inverse. The middle variation also asks for
  //      the inverse rule, the last asks why the crossing must sit on y = x.
  [
    {
      q: 'Let $f(x) = 3x - 22$. The graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross at exactly one point. Find it.',
      answer: '$(11, 11)$',
      solution:
        'The graph of $f^{-1}$ is the mirror image of the graph of $f$ in the line $y = x$, and since $f$ is an increasing line, the two can only meet ON the mirror. So solve $f(x) = x$: $3x - 22 = x$ gives $2x = 22$ and $x = 11$, and the point is $(11, 11)$. Check by evaluating BOTH functions there. First $f(11) = 33 - 22 = 11$ ✓. Then build the inverse independently: from $x = 3y - 22$ we get $y = \\frac{x + 22}{3}$, so $f^{-1}(11) = \\frac{33}{3} = 11$ ✓ — both graphs really do pass through $(11, 11)$. The trap is solving $f(x) = 0$ instead and answering the $x$-intercept $\\left(\\frac{22}{3}, 0\\right)$. That is where the graph meets the horizontal axis, not where it meets its mirror image ✗.',
    },
    {
      q: 'Let $f(x) = \\frac{x}{4} + 9$. Find $f^{-1}(x)$, and find the one point where the graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross.',
      answer: '$f^{-1}(x) = 4x - 36$; the graphs cross at $(12, 12)$',
      solution:
        'For the inverse, undo the steps in reverse order: $f$ divides by $4$ and then adds $9$, so $f^{-1}$ subtracts $9$ and then multiplies by $4$, giving $f^{-1}(x) = 4(x - 9) = 4x - 36$. Verify in BOTH directions: $f(f^{-1}(x)) = \\frac{4x - 36}{4} + 9 = x - 9 + 9 = x$ ✓ and $f^{-1}(f(x)) = 4\\left(\\frac{x}{4} + 9\\right) - 36 = x + 36 - 36 = x$ ✓. Neither rule divides by a variable or takes a root, so every real number is a legal input and no domain needs restricting. For the crossing: $f$ is an increasing line, so its graph meets its mirror image only on the mirror $y = x$. Solve $\\frac{x}{4} + 9 = x$: subtracting $\\frac{x}{4}$ gives $9 = \\frac{3x}{4}$, so $x = 12$. Check both functions there: $f(12) = 3 + 9 = 12$ ✓ and $f^{-1}(12) = 48 - 36 = 12$ ✓. The trap is answering $(0, 9)$, the $y$-intercept, because both rules were read at the friendliest input. Test it: $f^{-1}(0) = -36$, not $9$, so the inverse does not pass through that point ✗.',
    },
    {
      q: 'Let $f(x) = \\frac{x}{3} - 8$. Find the point where the graphs of $y = f(x)$ and $y = f^{-1}(x)$ cross, and say in one sentence why it had to lie on the line $y = x$.',
      answer: '$(-12, -12)$ — $f$ is increasing, so its graph can meet its mirror image only on the mirror line $y = x$',
      solution:
        'Because $f$ is an increasing line, the graph and its reflection in $y = x$ can only touch on that mirror, so the crossing satisfies $f(x) = x$. Solve $\\frac{x}{3} - 8 = x$: subtract $\\frac{x}{3}$ from both sides for $-8 = \\frac{2x}{3}$, then multiply by $3$ and divide by $2$ to get $x = -12$. The point is $(-12, -12)$. Check both functions there. First $f(-12) = \\frac{-12}{3} - 8 = -4 - 8 = -12$ ✓. Then build the inverse independently by undoing in reverse order — add $8$, then triple: $f^{-1}(x) = 3(x + 8) = 3x + 24$, and $f^{-1}(-12) = -36 + 24 = -12$ ✓. The trap is dropping a sign while collecting the $x$-terms, getting $8 = \\frac{2x}{3}$ and answering $(12, 12)$. Substitute it back: $f(12) = 4 - 8 = -4$, not $12$, so that point is not even on the graph of $f$ ✗.',
    },
  ],
  // w9 — the horizontal line test in words. The middle variation PASSES the
  //      test, the last corrects a student who confuses the two line tests.
  [
    {
      q: 'A function $p$ satisfies $p(-2) = 9$ and $p(6) = 9$. Does $p$ have an inverse? Explain using the horizontal line test.',
      answer: 'No — the horizontal line $y = 9$ meets the graph at both $(-2, 9)$ and $(6, 9)$, so two different inputs share one output and $p$ has no inverse',
      solution:
        'The two facts put the points $(-2, 9)$ and $(6, 9)$ on the graph. Both sit at height $9$, so the horizontal line $y = 9$ crosses the graph at least twice and the horizontal line test fails. Said the important way round: two different INPUTS, $-2$ and $6$, share the single output $9$. Confirm a second way by trying to build the undo machine: $p^{-1}(9)$ would have to return the input that produced $9$, and there are two candidates, $-2$ and $6$ ✓ — no function may answer twice for one input, so no inverse exists. The trap is answering that $p$ is not a function. Repeated outputs are perfectly legal; it is repeated inputs that would break $p$ itself, and nothing here gives one input two outputs ✗.',
    },
    {
      q: 'A function $q$ is defined only at the inputs $1$, $2$, $3$ and $4$, with $q(1) = 8$, $q(2) = 5$, $q(3) = 0$ and $q(4) = -6$. Does $q$ have an inverse? Explain using the horizontal line test.',
      answer: 'Yes — the outputs $8$, $5$, $0$ and $-6$ are all different, so no horizontal line meets the graph twice and $q$ has an inverse',
      solution:
        'The graph is the four points $(1, 8)$, $(2, 5)$, $(3, 0)$ and $(4, -6)$. A horizontal line catches every point whose OUTPUT equals its height, and here no two points share a height — the four outputs $8$, $5$, $0$ and $-6$ are all different. So every horizontal line meets the graph at most once, the test passes, and $q$ has an inverse. Confirm by writing the undo machine out in full: $q^{-1}(8) = 1$, $q^{-1}(5) = 2$, $q^{-1}(0) = 3$, $q^{-1}(-6) = 4$ ✓ — every input of $q^{-1}$ gets exactly one answer, which is all a function needs. THE RECIPROCAL MIX-UP is the trap: reading $q^{-1}$ as $\\frac{1}{q}$, noticing that $q(3) = 0$ cannot be divided into, and answering no. The $-1$ names the undo machine, and undoing an output of $0$ is no trouble at all — it came from the input $3$ ✗.',
    },
    {
      q: 'A function $r$ satisfies $r(5) = 5$ and $r(-5) = 5$. A student says, "$r$ is not a function, because two different points on its graph have the same height." Is the student right? What IS true about $r$?',
      answer: 'The student is wrong — $r$ is a function, since repeated outputs are allowed. What fails is the horizontal line test: $y = 5$ meets the graph at $(5, 5)$ and $(-5, 5)$, so $r$ has no inverse',
      solution:
        'Being a function is decided by the VERTICAL line test: each input gets one output. The two facts here concern the different inputs $5$ and $-5$, so no vertical line catches two points and $r$ is a perfectly good function — sharing a height is allowed. What does break is the reverse trip. The points $(5, 5)$ and $(-5, 5)$ both sit at height $5$, so the horizontal line $y = 5$ crosses the graph twice: two different inputs share one output, and $r$ has no inverse. Confirm from the undo side: $r^{-1}(5)$ would have to return both $5$ and $-5$ at once, which no function may do, so the two tests really do give opposite verdicts here ✓. The trap is agreeing with the student. The vertical test forbids one input having two OUTPUTS; nothing forbids one output having two inputs, and the coincidence that $r(5) = 5$ makes the shared height easy to misread ✗.',
    },
  ],
  // w10 — undo a stretch and a slide together. The middle variation carries a
  //      flip as well, the last solves for the missing outside constant.
  [
    {
      q: 'The point $(-3, 7)$ is on the graph of $y = 4f(x + 5) + 3$. Find a point that must be on the graph of $y = f(x)$.',
      answer: '$(2, 1)$',
      solution:
        'Write the given point out as an equation. At $x = -3$ the rule reads $4f(-3 + 5) + 3 = 4f(2) + 3$, and that equals $7$. Now peel the outside operations off in reverse order: subtract $3$ for $4f(2) = 4$, then divide by $4$ for $f(2) = 1$. So $(2, 1)$ is on the graph of $f$. Confirm by running the whole transformation FORWARDS from the answer: with $f(2) = 1$, the new rule at $x = -3$ gives $4(1) + 3 = 7$ ✓, the point we were handed. Two traps. Peeling in the wrong order — dividing before subtracting — gives $\\frac{7}{4} - 3$, which is not $1$; the $+3$ was added last, so it must come off first ✗. And THE REVERSED SLIDE looks inside $f(x + 5)$ at $x = -3$ and reports on the input $-8$; substituting shows the inside is $-3 + 5 = 2$ ✗.',
    },
    {
      q: 'The point $(1, 10)$ is on the graph of $y = -2f(x + 3) + 4$. Find a point that must be on the graph of $y = f(x)$.',
      answer: '$(4, -3)$',
      solution:
        'At $x = 1$ the rule reads $-2f(1 + 3) + 4 = -2f(4) + 4$, and that equals $10$. Peel the outside off in reverse order: subtract $4$ for $-2f(4) = 6$, then divide by $-2$ for $f(4) = -3$. So $(4, -3)$ is on the graph of $f$. Confirm by running the transformation forwards from the answer: with $f(4) = -3$, the new rule at $x = 1$ gives $-2(-3) + 4 = 6 + 4 = 10$ ✓. The trap is dropping the minus sign while dividing and answering $(4, 3)$. Test it forwards: $-2(3) + 4 = -6 + 4 = -2$, so the graph would pass through $(1, -2)$ instead of $(1, 10)$ ✗.',
    },
    {
      q: 'The graph of $y = 5f(x - 2) + c$ passes through $(8, 1)$, and $f(6) = -4$. Find $c$.',
      answer: '$c = 21$',
      solution:
        'Substitute the given input into the rule: at $x = 8$ the inside is $8 - 2 = 6$, so the rule returns $5f(6) + c$. We are told $f(6) = -4$, so $5(-4) + c = 1$, that is $-20 + c = 1$ and $c = 21$. Confirm by putting the finished constant back in: at $x = 8$ the rule gives $5(-4) + 21 = -20 + 21 = 1$ ✓, matching the point. Two traps. THE REVERSED SLIDE reads $x - 2$ as a move left and hunts for $f(10)$, a value the question never supplies; substituting shows the inside really is $6$ ✗. And a sign slip gives $c = -21$, which would put the graph at height $-20 - 21 = -41$ when $x = 8$ ✗.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 17,
  worksheet,
}
