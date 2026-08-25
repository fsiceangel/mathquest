// Introduction to Algebra chapter 14 — variations for the chapter worksheet.
// All problems, figures and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here, and
//    no `answer` is a bare number.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way. For a parabola the second check is either symmetry (two x-values the
//    same distance either side of the axis must give the same y) or a numeric
//    test AWAY from the vertex, so a wrong constant cannot hide. For a circle it
//    is a distance: every point the answer claims is on the circle gets measured
//    against the centre, and every keyed point gets substituted back into the
//    ORIGINAL equation.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand back the vertex and ask for the equation, hand back an intercept and
//    ask for the missing coefficient, ask for the radius that forces a given
//    constant, ask where a circle meets the y-axis instead of the x-axis.
//  - Four traps run through the file. THE STOLEN SIGN: the bracket $(x+4)$ puts
//    the vertex at $x = -4$, and $-6x$ in a circle equation puts the centre at
//    $x = +3$; the number you read is never the number you want. THE UNSQUARED
//    RADIUS: the right-hand side of a circle equation is $r^2$, not $r$. THE
//    UNBALANCED BOOKS: whatever you add to complete a square has to be taken
//    straight back off again. THE MISSING TWIN: unsquaring hands back two
//    numbers, and a circle usually meets an axis twice.
//  - Two items carry figures. Both were placed so the picture supports the
//    algebra without answering the question for you: the vertex or the centre is
//    labelled, and the work is still yours to do. Every plotted point was
//    checked by substituting it into the equation for that same item.

const worksheet = [
  // w1 — read the vertex and the axis straight out of vertex form. The middle
  //      variation opens downward, and the last runs backwards from the vertex.
  [
    {
      q: 'Find the vertex and the axis of symmetry of the parabola $y = (x + 4)^2 - 7$.',
      answer: 'Vertex $(-4, -7)$; axis of symmetry $x = -4$',
      solution:
        'The equation is already in vertex form $y = a(x-h)^2 + k$, but the plus sign inside is doing something sneaky: $x + 4$ is really $x - (-4)$, so $h = -4$. The squared part is $0$ exactly when $x = -4$, and there $y = -7$ — the vertex is $(-4, -7)$, and the axis of symmetry is the vertical line through it, $x = -4$. Check the mirror claim directly by testing two $x$-values the same distance either side: at $x = -2$, $y = 2^2 - 7 = -3$, and at $x = -6$, $y = (-2)^2 - 7 = -3$ ✓ — equal heights, so the mirror line really does sit halfway between them, at $x = -4$. Check the vertex a second, independent way by expanding: $y = x^2 + 8x + 9$, whose vertex sits at $x = -\\frac{b}{2a} = -\\frac{8}{2} = -4$ ✓, with $y = 16 - 32 + 9 = -7$ ✓. THE STOLEN SIGN is the trap: copying the $4$ out of the bracket and answering $(4, -7)$. Test it: at $x = 4$, $y = 8^2 - 7 = 57$, which is $64$ units ABOVE the bottom of the curve ✗.',
    },
    {
      q: 'Find the vertex and the axis of symmetry of $y = -3(x - 2)^2 + 8$, and say whether the vertex is the highest or the lowest point of the graph.',
      answer: 'Vertex $(2, 8)$; axis of symmetry $x = 2$; it is the highest point',
      solution:
        'The $-3$ out front does not move the vertex at all — it only stretches the curve and flips it over. The squared part is $0$ when $x = 2$, leaving $y = 8$, so the vertex is $(2, 8)$ and the axis of symmetry is $x = 2$. Because $a = -3$ is negative, $-3(x-2)^2$ is never positive, so every other point is BELOW $8$: the vertex is the highest point, and the graph is a frown. Check with symmetry, two units either side: at $x = 0$, $y = -3(4) + 8 = -4$, and at $x = 4$, $y = -3(4) + 8 = -4$ ✓ — equal, and both well under $8$ ✓. Check the vertex again from the expanded form: $y = -3(x^2 - 4x + 4) + 8 = -3x^2 + 12x - 4$, so $x = -\\frac{12}{2(-3)} = 2$ ✓ and $y = -12 + 24 - 4 = 8$ ✓. The trap is announcing a minimum out of habit, because most parabolas you meet first are smiles. There is no minimum here at all: at $x = 100$ the graph is already down at $-3(98)^2 + 8$, and it keeps falling forever ✗.',
    },
    {
      q: 'Write the equation of the parabola that has vertex $(-5, 2)$ and exactly the same shape as $y = x^2$, and state its axis of symmetry.',
      answer: '$y = (x + 5)^2 + 2$; axis of symmetry $x = -5$',
      solution:
        'This runs vertex form backwards. Same shape as $y = x^2$ means $a = 1$, so we want $y = (x - h)^2 + k$ with $(h, k) = (-5, 2)$. Subtracting $-5$ is adding $5$, so the equation is $y = (x + 5)^2 + 2$, and the axis of symmetry is the vertical line through the vertex, $x = -5$. Check that the vertex is where we claim: at $x = -5$, $y = 0 + 2 = 2$ ✓, and since a square is never negative, no $x$ can push $y$ below $2$ ✓. Check a second way through the expanded form: $y = x^2 + 10x + 27$, whose vertex is at $x = -\\frac{10}{2} = -5$ ✓ with $y = 25 - 50 + 27 = 2$ ✓. THE STOLEN SIGN is the trap, in reverse this time: writing $y = (x - 5)^2 + 2$ because the vertex has a $-5$ in it. Test that at $x = -5$: $(-10)^2 + 2 = 102$, not $2$ ✗ — that parabola turns around at $(5, 2)$, ten units away on the wrong side.',
    },
  ],
  // w2 — complete the square by hand. The middle variation has an odd middle
  //      coefficient, and the last asks what the finished form tells you.
  [
    {
      q: 'Complete the square to write $y = x^2 - 8x + 3$ in vertex form, and give the vertex.',
      answer: '$y = (x - 4)^2 - 13$; vertex $(4, -13)$',
      solution:
        'Half of $-8$ is $-4$, and $(-4)^2 = 16$, so build that $16$ and then hand it straight back: $y = (x^2 - 8x + 16) - 16 + 3 = (x-4)^2 - 13$. The squared part vanishes at $x = 4$, so the vertex is $(4, -13)$. Check numerically at $x = 1$, well away from the vertex so a wrong constant cannot hide: the original gives $1 - 8 + 3 = -4$, and the new form gives $(1-4)^2 - 13 = 9 - 13 = -4$ ✓. Check the vertex a second way with the shortcut: $x = -\\frac{-8}{2} = 4$ ✓, and $y = 16 - 32 + 3 = -13$ ✓. THE UNBALANCED BOOKS is the trap: adding the $16$ and forgetting to subtract it, which gives $y = (x-4)^2 + 3$. Test that at $x = 1$: $9 + 3 = 12$, not $-4$ ✗ — the whole graph has been lifted $16$ units by a number that was never in the original equation.',
    },
    {
      q: 'Complete the square to write $y = x^2 + 5x + 1$ in vertex form, and give the vertex.',
      answer: '$y = \\left(x + \\frac{5}{2}\\right)^2 - \\frac{21}{4}$; vertex $\\left(-\\frac{5}{2}, -\\frac{21}{4}\\right)$',
      solution:
        'An odd middle coefficient does not change the rule — the numbers simply stop being whole, and that is fine. Half of $5$ is $\\frac{5}{2}$, whose square is $\\frac{25}{4}$, so add it and take it back: $y = \\left(x^2 + 5x + \\frac{25}{4}\\right) - \\frac{25}{4} + 1 = \\left(x + \\frac{5}{2}\\right)^2 - \\frac{21}{4}$, since $-\\frac{25}{4} + \\frac{4}{4} = -\\frac{21}{4}$. The square is $0$ at $x = -\\frac{5}{2}$, so the vertex is $\\left(-\\frac{5}{2}, -\\frac{21}{4}\\right)$. Check numerically at $x = 1$: the original gives $1 + 5 + 1 = 7$, and the new form gives $\\left(\\frac{7}{2}\\right)^2 - \\frac{21}{4} = \\frac{49}{4} - \\frac{21}{4} = \\frac{28}{4} = 7$ ✓. Check the vertex with the shortcut too: $x = -\\frac{5}{2}$ ✓, and $y = \\frac{25}{4} - \\frac{25}{2} + 1 = \\frac{25 - 50 + 4}{4} = -\\frac{21}{4}$ ✓. The trap is squaring the whole $5$ and adding $25$. That would need a middle term of $10x$ to be a square: at $x = 1$, $\\left(x + \\frac{5}{2}\\right)^2$ reads $\\frac{49}{4} = 12.25$ while $(x+5)^2$ reads $36$ ✗.',
    },
    {
      q: 'Complete the square to write $y = x^2 + 2x + 9$ in vertex form, then use that form to explain why the graph never touches the $x$-axis.',
      answer: '$y = (x + 1)^2 + 8$; the vertex is $(-1, 8)$, and since $(x+1)^2 \\ge 0$ the smallest $y$ can ever be is $8$, which is above the $x$-axis',
      solution:
        'Half of $2$ is $1$, and $1^2 = 1$, so add it and hand it back: $y = (x^2 + 2x + 1) - 1 + 9 = (x+1)^2 + 8$. The vertex is $(-1, 8)$. Now the explanation falls out of the form: a square is never negative, so $(x+1)^2 \\ge 0$ for every $x$, which means $y \\ge 8$ always. The graph never gets down to $y = 0$, so it never meets the $x$-axis. Check numerically at $x = 2$: the original gives $4 + 4 + 9 = 17$, and the new form gives $3^2 + 8 = 17$ ✓. Check the no-crossing claim a completely different way, with the discriminant: $b^2 - 4ac = 4 - 36 = -32$, which is negative, so $x^2 + 2x + 9 = 0$ has no real solutions ✓ — same verdict, reached without completing anything. The trap is believing every parabola must cross the $x$-axis somewhere, because most of the ones you factor do. Hunt for a crossing here and you would need $(x+1)^2 = -8$, and no real number squares to something negative ✗.',
    },
  ],
  // w3 — all three intercepts. The last variation runs backwards: an intercept
  //      is handed over and the missing coefficient is not.
  [
    {
      q: 'Find all intercepts of the graph of $y = x^2 - 6x + 8$.',
      answer: '$x$-intercepts $(2, 0)$ and $(4, 0)$; $y$-intercept $(0, 8)$',
      solution:
        'The $x$-intercepts are where $y = 0$, so factor: two numbers with product $8$ and sum $-6$ are $-2$ and $-4$, giving $x^2 - 6x + 8 = (x-2)(x-4)$. A product is zero only when a factor is, so the graph crosses at $(2, 0)$ and $(4, 0)$. The $y$-intercept is free: set $x = 0$ and every $x$ term dies, leaving $y = 8$, so $(0, 8)$. Check the roots a second way with sum and product: the roots of $x^2 - 6x + 8$ must add to $-\\frac{b}{a} = 6$ and multiply to $\\frac{c}{a} = 8$, and $2 + 4 = 6$ ✓ with $2 \\times 4 = 8$ ✓. One more check that the picture makes sense: the vertex sits halfway between the roots at $x = 3$, where $y = 9 - 18 + 8 = -1$, below the axis — exactly what a smile with two crossings should do ✓. The trap is copying the numbers out of the factors with their signs flipped and answering $x = -2$ and $x = -4$. Test $x = -2$: $4 + 12 + 8 = 24 \\ne 0$ ✗.',
    },
    {
      q: 'Find all intercepts of the graph of $y = x^2 + 3x - 10$.',
      answer: '$x$-intercepts $(-5, 0)$ and $(2, 0)$; $y$-intercept $(0, -10)$',
      solution:
        'Factor to find where $y = 0$: two numbers with product $-10$ and sum $3$ are $5$ and $-2$, so $x^2 + 3x - 10 = (x+5)(x-2)$ and the crossings are $(-5, 0)$ and $(2, 0)$. Setting $x = 0$ gives $y = -10$, so the $y$-intercept is $(0, -10)$. Check the roots with sum and product, which tests both at once: they should add to $-3$ and multiply to $-10$, and $-5 + 2 = -3$ ✓ with $(-5)(2) = -10$ ✓. Check the $y$-intercept independently from the factored form: at $x = 0$ it reads $(0+5)(0-2) = -10$ ✓. The trap is answering the $x$-intercepts as $(0, -5)$ and $(0, 2)$ — right numbers, wrong slots. An $x$-intercept sits ON the $x$-axis, so its SECOND coordinate is the zero. Test $(0, -5)$ in the equation: $x = 0$ gives $y = -10$, not $-5$, so that point is not even on the graph ✗.',
    },
    {
      q: 'The graph of $y = x^2 + bx - 12$ has an $x$-intercept at $(6, 0)$. Find $b$, the other $x$-intercept, and the $y$-intercept.',
      answer: '$b = -4$; the other $x$-intercept is $(-2, 0)$ and the $y$-intercept is $(0, -12)$',
      solution:
        'An intercept is a point on the graph, so feed it in: $0 = 6^2 + 6b - 12 = 36 + 6b - 12$, that is $6b = -24$, so $b = -4$. The equation is really $y = x^2 - 4x - 12 = (x-6)(x+2)$ — two numbers with product $-12$ and sum $-4$ are $-6$ and $2$ — so the other $x$-intercept is $(-2, 0)$. The $y$-intercept is $(0, -12)$, since $c = -12$ was never in doubt. Check the pair of roots with sum and product: they should add to $4$ and multiply to $-12$, and $6 + (-2) = 4$ ✓ with $6 \\times (-2) = -12$ ✓. Check $b$ once more through the vertex: the axis of symmetry sits halfway between the roots, at $x = 2$, and $-\\frac{b}{2} = 2$ does give $b = -4$ ✓. The trap is guessing the other root is $-6$, the mirror image of the one you were given. Test $x = -6$: $36 + 24 - 12 = 48 \\ne 0$ ✗. The roots mirror each other across the AXIS, not across the $y$-axis, and the axis here is $x = 2$.',
    },
  ],
  // w4 — build a circle equation from a centre and a radius. The middle
  //      variation hands over a diameter, the last an irrational radius.
  [
    {
      q: 'Write the equation of the circle with center $(-4, 9)$ and radius $7$.',
      answer: '$(x + 4)^2 + (y - 9)^2 = 49$',
      solution:
        'Use $(x-h)^2 + (y-k)^2 = r^2$ with $h = -4$, $k = 9$ and $r = 7$. Subtracting $-4$ becomes adding $4$, subtracting $9$ stays a subtraction, and $r^2 = 49$: the equation is $(x+4)^2 + (y-9)^2 = 49$. Check with a point you can find by eye — go $7$ units right of the centre to $(3, 9)$: the equation gives $7^2 + 0^2 = 49$ ✓, and the distance from $(-4, 9)$ to $(3, 9)$ really is $7$ ✓. Check the centre itself a second way: putting $(-4, 9)$ in makes the left side $0$, the smallest it can ever be, which is exactly how the centre behaves ✓. Two traps live here. THE STOLEN SIGN: writing $(x-4)^2 + (y+9)^2 = 49$ by copying the centre straight in. Test $(3, 9)$ there: $(-1)^2 + 18^2 = 325 \\ne 49$ ✗ — that circle is centred at $(4, -9)$, miles away. THE UNSQUARED RADIUS: ending at $= 7$ instead of $= 49$, which describes a much smaller circle of radius $\\sqrt{7} \\approx 2.65$ ✗.',
    },
    {
      q: 'Write the equation of the circle with center $(5, -1)$ and diameter $12$.',
      answer: '$(x - 5)^2 + (y + 1)^2 = 36$',
      solution:
        'The formula wants a RADIUS, and you were handed a diameter, so halve it first: $r = \\frac{12}{2} = 6$, and $r^2 = 36$. With $h = 5$ and $k = -1$, subtracting $-1$ becomes adding $1$, so the equation is $(x-5)^2 + (y+1)^2 = 36$. Check with the point $6$ units straight up from the centre, $(5, 5)$: the equation gives $0^2 + 6^2 = 36$ ✓, and the distance from $(5, -1)$ to $(5, 5)$ is $6$ ✓. Check the other end of that diameter too, $(5, -7)$: $0 + (-6)^2 = 36$ ✓ — and those two points are $12$ apart, which is the diameter we were promised ✓. The trap is dropping $12$ straight into the formula and writing $= 144$. That circle has radius $12$, so its topmost point would be $(5, 11)$; test $(5, 5)$ in it: $0 + 36 = 36 \\ne 144$ ✗, so the point that should be on the circle is not even close.',
    },
    {
      q: 'Write the equation of the circle with center $(0, -6)$ and radius $\\sqrt{10}$.',
      answer: '$x^2 + (y + 6)^2 = 10$',
      solution:
        'Nothing changes when the radius is irrational — the formula only ever wants $r^2$, and squaring undoes the root neatly: $r^2 = \\left(\\sqrt{10}\\right)^2 = 10$. With $h = 0$ the first bracket is $(x-0)^2$, which everyone writes as $x^2$, and $k = -6$ makes the second bracket $(y+6)^2$. So the circle is $x^2 + (y+6)^2 = 10$. Check with a point: $(1, -3)$ gives $1 + 3^2 = 1 + 9 = 10$ ✓, and its distance from $(0, -6)$ is $\\sqrt{1^2 + 3^2} = \\sqrt{10}$ ✓ — the radius exactly. Check a second point on the other side, $(-3, -5)$: $9 + 1 = 10$ ✓. THE UNSQUARED RADIUS is the trap, and an irrational radius makes it tempting: leaving the equation as $x^2 + (y+6)^2 = \\sqrt{10}$. Test $(1, -3)$ there — the left side is $10$ but the right side is only about $3.16$ ✗. A related slip is squaring the $10$ instead of the root and writing $100$, which would describe a circle more than three times as wide ✗.',
    },
  ],
  // w5 — dig the centre and radius out of general form. The last variation runs
  //      backwards: the radius is given and the constant term is not.
  [
    {
      q: 'Find the center and radius of the circle $x^2 + y^2 + 6x - 4y - 12 = 0$.',
      answer: 'Center $(-3, 2)$, radius $5$',
      solution:
        'Complete both squares, one variable at a time. Half of $6$ is $3$, so $x^2 + 6x = (x+3)^2 - 9$; half of $-4$ is $-2$, so $y^2 - 4y = (y-2)^2 - 4$. Substituting: $(x+3)^2 - 9 + (y-2)^2 - 4 - 12 = 0$, that is $(x+3)^2 + (y-2)^2 = 9 + 4 + 12 = 25$. So the centre is $(-3, 2)$ and the radius is $\\sqrt{25} = 5$. Check by finding a point $5$ to the right of that centre, $(2, 2)$, and putting it in the ORIGINAL equation: $4 + 4 + 12 - 8 - 12 = 0$ ✓ — it really is on the circle, and it really is $5$ from the centre ✓. Check the centre a second way: $(-3, 2)$ makes both brackets zero, so no point can give a smaller left side ✓. THE UNBALANCED BOOKS is the trap: writing $(x+3)^2 + (y-2)^2 = 12$, forgetting that the $-9$ and the $-4$ must also cross the equals sign. That would claim a radius of $\\sqrt{12} \\approx 3.46$, yet the point $(2, 2)$ sits $5$ away and satisfies the original equation ✗.',
    },
    {
      q: 'Find the center and radius of the circle $x^2 + y^2 - 10x + 2y + 17 = 0$.',
      answer: 'Center $(5, -1)$, radius $3$',
      solution:
        'Half of $-10$ is $-5$, so $x^2 - 10x = (x-5)^2 - 25$; half of $2$ is $1$, so $y^2 + 2y = (y+1)^2 - 1$. Then $(x-5)^2 - 25 + (y+1)^2 - 1 + 17 = 0$, that is $(x-5)^2 + (y+1)^2 = 25 + 1 - 17 = 9$. The centre is $(5, -1)$ and the radius is $3$. Notice the $+17$ crosses over as $-17$ while the $-25$ and $-1$ cross over as $+25$ and $+1$ — every term flips, none are exempt. Check with the point $3$ straight above the centre, $(5, 2)$, in the ORIGINAL equation: $25 + 4 - 50 + 4 + 17 = 0$ ✓, and its distance from $(5, -1)$ is $3$ ✓. Check the point $3$ to the left, $(2, -1)$, as well: $4 + 1 - 20 - 2 + 17 = 0$ ✓. THE STOLEN SIGN is the trap: reading the centre off as $(-10, 2)$ or $(-5, 1)$. The centre is HALF each coefficient with the sign flipped. Test $(-5, 1)$ against the original: $25 + 1 + 50 + 2 + 17 = 95 \\ne 0$, and it is nowhere near $3$ from anything on this circle ✗.',
    },
    {
      q: 'The circle $x^2 + y^2 + 4x + 10y + c = 0$ has radius $6$. Find $c$ and the center of the circle.',
      answer: '$c = -7$; the center is $(-2, -5)$',
      solution:
        'Complete the squares while $c$ is still a letter. Half of $4$ is $2$ and half of $10$ is $5$, so $(x+2)^2 - 4 + (y+5)^2 - 25 + c = 0$, that is $(x+2)^2 + (y+5)^2 = 29 - c$. The centre is $(-2, -5)$ no matter what $c$ does — the constant term only ever controls the SIZE. The right-hand side has to be $r^2 = 36$, so $29 - c = 36$ and $c = -7$. Check by writing the circle out with that value: $x^2 + y^2 + 4x + 10y - 7 = 0$ becomes $(x+2)^2 + (y+5)^2 = 4 + 25 + 7 = 36$ ✓, a radius of $6$. Check with a point too — go $6$ right of the centre to $(4, -5)$ and substitute into the original: $16 + 25 + 16 - 50 - 7 = 0$ ✓, and the distance from $(-2, -5)$ to $(4, -5)$ is $6$ ✓. THE UNSQUARED RADIUS is the trap: setting $29 - c = 6$ and answering $c = 23$. That circle has $r^2 = 6$, so $r = \\sqrt{6} \\approx 2.45$ ✗, and the point $(4, -5)$ would give $36 \\ne 6$ ✗.',
    },
  ],
  // w6 — inside, on, or outside. One lands exactly ON, one is comfortably in,
  //      and the last finds a missing coordinate first.
  [
    {
      q: 'Is the point $(-6, 8)$ inside, on, or outside the circle $x^2 + y^2 = 100$?',
      answer: 'On the circle',
      solution:
        'Plug the point in and compare with $r^2 = 100$: $(-6)^2 + 8^2 = 36 + 64 = 100$. That is neither more nor less than $100$ — the point sits exactly ON the circle. Check a second way with distance rather than squares: the distance from the origin to $(-6, 8)$ is $\\sqrt{36 + 64} = \\sqrt{100} = 10$, and the radius is $\\sqrt{100} = 10$ ✓, so the point is precisely a radius away. The trap is mishandling the negative and computing $-6^2 + 8^2 = -36 + 64 = 28$, then declaring the point safely inside. Squaring a negative always lands you somewhere positive: $(-6)(-6) = +36$ ✗. A second trap is comparing $100$ with the number $10$ instead of with $r^2$; here the equation already says $r^2 = 100$, so $100$ is the number to beat, and a tie means ON.',
    },
    {
      q: 'Is the point $(3, -1)$ inside, on, or outside the circle $(x - 1)^2 + (y + 2)^2 = 16$?',
      answer: 'Inside',
      solution:
        'Substitute and compare with the right-hand side: $(3-1)^2 + (-1+2)^2 = 2^2 + 1^2 = 4 + 1 = 5$. Since $5 < 16$, the point is closer to the centre than the radius is, so it is INSIDE. Check a second way in plain distances: the centre is $(1, -2)$, the radius is $\\sqrt{16} = 4$, and the distance from $(1, -2)$ to $(3, -1)$ is $\\sqrt{2^2 + 1^2} = \\sqrt{5} \\approx 2.24$, comfortably under $4$ ✓. The trap is comparing the $5$ with the RADIUS $4$ instead of with $r^2 = 16$, which would announce "outside" — and it is wrong twice over, because $5$ is a squared distance while $4$ is a plain one. Mixing them is like comparing an area with a length. Keep both sides squared ($5$ vs $16$) or both sides plain ($2.24$ vs $4$); either way the verdict is inside ✗ for the mixed comparison.',
    },
    {
      q: 'The point $(k, 4)$ lies on the circle $x^2 + y^2 = 65$, and $k$ is negative. Find $k$, and then decide whether $(k, 5)$ is inside, on, or outside the same circle.',
      answer: '$k = -7$; the point $(-7, 5)$ is outside the circle',
      solution:
        'Lying on the circle means the equation is satisfied: $k^2 + 4^2 = 65$, so $k^2 = 49$ and $k = \\pm 7$ — unsquaring always hands back two numbers. The problem asks for the negative one, so $k = -7$. Check: $(-7)^2 + 4^2 = 49 + 16 = 65$ ✓. Now test $(-7, 5)$: $49 + 25 = 74$, and $74 > 65$, so that point is OUTSIDE. Check that verdict in distances: the radius is $\\sqrt{65} \\approx 8.06$, while the distance from the origin to $(-7, 5)$ is $\\sqrt{74} \\approx 8.60$ ✓ — about half a unit too far out. The trap is reasoning that $(-7, 5)$ is only one unit from a point on the circle, so it must still be inside. Direction is everything: $(-7, 4)$ is on the circle, and stepping UP to $(-7, 5)$ moves AWAY from the centre, which pushes you out. Stepping down to $(-7, 3)$ instead gives $49 + 9 = 58 < 65$, safely inside ✗ for the one-unit argument.',
    },
  ],
  // w7 — the vertex as a highest or lowest value. The middle variation opens
  //      downward, and the last dresses the same idea as a fencing problem.
  [
    {
      q: 'Find the minimum value of $y = 3x^2 - 12x + 5$, and the value of $x$ where it occurs.',
      answer: 'Minimum value $-7$, at $x = 2$',
      solution:
        'Since $a = 3 > 0$ the parabola opens upward, so the vertex is the lowest point. The vertex sits at $x = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$, and $y = 3(4) - 24 + 5 = 12 - 24 + 5 = -7$. So the minimum value is $-7$, reached at $x = 2$. Check by completing the square, a route that never uses the shortcut: $3(x^2 - 4x) + 5 = 3(x-2)^2 - 12 + 5 = 3(x-2)^2 - 7$, and since $3(x-2)^2$ is never negative, $y$ is never below $-7$ ✓. Check the neighbours too: at $x = 1$, $y = 3 - 12 + 5 = -4$, and at $x = 3$, $y = 27 - 36 + 5 = -4$ ✓ — equal, as a mirror image should be, and both above $-7$ ✓. The trap is forgetting the $a$ underneath and computing $x = \\frac{12}{2} = 6$. Test it: $y = 108 - 72 + 5 = 41$, which is $48$ units ABOVE the true minimum ✗ — the denominator is $2a$, and $a$ is $3$ here.',
    },
    {
      q: 'Find the maximum value of $y = -x^2 + 10x - 21$, and the value of $x$ where it occurs.',
      answer: 'Maximum value $4$, at $x = 5$',
      solution:
        'Here $a = -1 < 0$, so the parabola opens downward and the vertex is the HIGHEST point. It sits at $x = -\\frac{b}{2a} = -\\frac{10}{2(-1)} = 5$, where $y = -25 + 50 - 21 = 4$. So the maximum value is $4$, at $x = 5$. Check by completing the square: $-(x^2 - 10x) - 21 = -(x-5)^2 + 25 - 21 = -(x-5)^2 + 4$, and $-(x-5)^2$ is never positive, so $y$ never climbs above $4$ ✓. Check the position of the axis a third way, through the roots: $-x^2 + 10x - 21 = -(x^2 - 10x + 21) = -(x-3)(x-7)$, so the graph crosses at $x = 3$ and $x = 7$, whose midpoint is $5$ ✓. The trap is dropping the minus sign of $a$ and computing $x = -\\frac{10}{2} = -5$. Test that: $y = -25 - 50 - 21 = -96$, nearly a hundred units below the peak ✗. A second trap is reporting the maximum as $5$; that is WHERE the peak happens, not how high it is.',
    },
    {
      q: 'A rectangular pen is fenced on all four sides using $24$ metres of fencing. If the pen is $x$ metres wide, its area in square metres is $A = x(12 - x)$. What width gives the largest area, and what is that largest area?',
      answer: 'A width of $6$ metres, giving an area of $36$ square metres',
      solution:
        'First see where the formula comes from: four sides using $24$ metres means the width and the length together make $12$, so a width of $x$ forces a length of $12 - x$, and the area is $x(12-x)$. Expand to $A = -x^2 + 12x$, a downward parabola whose vertex is the largest area. It sits at $x = -\\frac{12}{2(-1)} = 6$, where $A = 6 \\times 6 = 36$. So the pen should be $6$ metres wide — a square — and its area is $36$ square metres. Check the neighbours: a width of $5$ gives $5 \\times 7 = 35$, and a width of $7$ gives $7 \\times 5 = 35$ ✓, both smaller and equal to each other, exactly as a mirror image should be. Check by completing the square as well: $-x^2 + 12x = -(x-6)^2 + 36$, never above $36$ ✓. The trap is thinking a long thin pen encloses more, so a width of $11$ must be better. Test it: $11 \\times 1 = 11$ square metres ✗ — less than a third of $36$. Same fence, wildly different area.',
    },
  ],
  // w8 — a centre plus one more fact. The middle variation reads its data off a
  //      figure, and the last is handed a diameter instead of a radius.
  [
    {
      q: 'Find the equation of the circle with center $(2, -5)$ that passes through the point $(-3, 7)$.',
      answer: '$(x - 2)^2 + (y + 5)^2 = 169$',
      solution:
        'You are not told the radius, but a point on the circle hands it to you: $r^2$ is the squared distance from the centre to that point. So $r^2 = (-3 - 2)^2 + (7 - (-5))^2 = (-5)^2 + 12^2 = 25 + 144 = 169$, which makes $r = 13$. The equation is $(x-2)^2 + (y+5)^2 = 169$. Check by substituting the given point back in: $(-3-2)^2 + (7+5)^2 = 25 + 144 = 169$ ✓. Check with a second point you can find by eye — go $13$ to the right of the centre, to $(15, -5)$: $13^2 + 0 = 169$ ✓, and it is $13$ from $(2, -5)$ ✓. The trap is a sign slip in the subtraction: reading $7 - (-5)$ as $7 - 5 = 2$ and getting $r^2 = 25 + 4 = 29$. Test the given point against $(x-2)^2 + (y+5)^2 = 29$: the left side comes out $169 \\ne 29$ ✗, so the point the circle was built to pass through would not be on it at all. Subtracting a negative adds.',
    },
    {
      q: 'The circle shown has center $C = (-1, 3)$ and passes through the point $P = (3, 6)$. Write its equation.',
      fig: {
        view: [-7, -3, 5, 9],
        grid: true,
        elems: [
          { t: 'circle', c: [-1, 3], r: 5 },
          { t: 'point', p: [-1, 3], label: 'C', dx: -14, dy: -6 },
          { t: 'point', p: [3, 6], label: 'P', dx: 8, dy: -6 },
        ],
      },
      answer: '$(x + 1)^2 + (y - 3)^2 = 25$',
      solution:
        'The radius is the distance from $C$ to $P$, and the picture shows you the two legs: from $(-1, 3)$ to $(3, 6)$ is $4$ across and $3$ up. So $r^2 = 4^2 + 3^2 = 16 + 9 = 25$ and $r = 5$ — the familiar $3$–$4$–$5$ right triangle. With $h = -1$ and $k = 3$, the equation is $(x+1)^2 + (y-3)^2 = 25$. Check by substituting $P$: $(3+1)^2 + (6-3)^2 = 16 + 9 = 25$ ✓. Check against the picture a second way: a radius of $5$ means the circle should reach $y = 8$ straight above the centre, and $(-1, 8)$ gives $0 + 5^2 = 25$ ✓ — look at the graph and the top of the circle does sit at $8$ ✓. The trap is reading a radius straight off one of the legs and writing $= 16$ (the $4$ across) or $= 9$ (the $3$ up). Test $P$ against $(x+1)^2 + (y-3)^2 = 16$: the left side is $25 \\ne 16$ ✗. The radius is the slanted distance, always longer than either leg.',
    },
    {
      q: 'A circle has a diameter whose endpoints are $(-2, 1)$ and $(6, 7)$. Write its equation.',
      answer: '$(x - 2)^2 + (y - 4)^2 = 25$',
      solution:
        'The centre of a circle is the midpoint of any diameter, so average the endpoints: $\\left(\\frac{-2+6}{2}, \\frac{1+7}{2}\\right) = (2, 4)$. The diameter itself has length $\\sqrt{(6-(-2))^2 + (7-1)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$, so the radius is $5$ and $r^2 = 25$. The equation is $(x-2)^2 + (y-4)^2 = 25$. Check by substituting BOTH endpoints, since both must be on the circle: $(-2-2)^2 + (1-4)^2 = 16 + 9 = 25$ ✓ and $(6-2)^2 + (7-4)^2 = 16 + 9 = 25$ ✓. That second check is the strong one — a wrong centre would fail at least one of them. The trap is using the whole diameter as the radius and writing $= 100$. Test an endpoint there: $16 + 9 = 25 \\ne 100$ ✗. A second trap is subtracting the endpoints instead of averaging them, which gives $(8, 6)$ — a point that is not even between them.',
    },
  ],
  // w9 — run the vertex backwards to recover the coefficients. The middle
  //      variation reads its vertex off a figure, the last starts from the axis.
  [
    {
      q: 'The parabola $y = x^2 + bx + c$ has vertex $(-3, -4)$. Find $b$ and $c$.',
      answer: '$b = 6$ and $c = 5$',
      solution:
        'With $a = 1$ the vertex sits at $x = -\\frac{b}{2}$, so $-\\frac{b}{2} = -3$ gives $b = 6$. Now the vertex is a point on the parabola, so substitute it: $-4 = (-3)^2 + 6(-3) + c = 9 - 18 + c$, which makes $c = 5$. Check by completing the square on $y = x^2 + 6x + 5$: half of $6$ is $3$, so $y = (x+3)^2 - 9 + 5 = (x+3)^2 - 4$, whose vertex is $(-3, -4)$ ✓ — exactly what we were asked for. Check a second, independent way through the roots: $x^2 + 6x + 5 = (x+1)(x+5)$, so the graph crosses at $x = -1$ and $x = -5$, and the axis of symmetry is halfway between them at $x = -3$ ✓. THE STOLEN SIGN is the trap: reading $b = -6$ straight off the vertex. Test it: $y = x^2 - 6x + 5$ has its vertex at $x = \\frac{6}{2} = 3$, on the wrong side of the $y$-axis entirely ✗. A second trap is answering $c = -4$, copying the vertex height; but $c$ is the height at $x = 0$, and there $y = 5$.',
    },
    {
      q: 'The parabola shown has equation $y = x^2 + bx + c$, and its vertex $V$ is marked on the graph. Find $b$ and $c$.',
      fig: {
        view: [-1, -7, 11, 5],
        grid: true,
        elems: [
          { t: 'parabola', a: 1, b: -8, c: 11 },
          { t: 'seg', a: [4, -7], b: [4, 5], dash: true },
          { t: 'point', p: [4, -5], label: 'V', dx: 8, dy: 14 },
        ],
      },
      answer: '$b = -8$ and $c = 11$',
      solution:
        'Read the vertex off the picture first: $V$ is at $(4, -5)$, four right and five down, with the dashed axis of symmetry running through it. Since $a = 1$, the vertex is at $x = -\\frac{b}{2}$, so $-\\frac{b}{2} = 4$ and $b = -8$. Then substitute the vertex into the equation: $-5 = 4^2 - 8(4) + c = 16 - 32 + c$, so $c = 11$. Check by completing the square on $y = x^2 - 8x + 11$: $y = (x-4)^2 - 16 + 11 = (x-4)^2 - 5$, vertex $(4, -5)$ ✓. Check once more against the picture: the graph should cross the $x$-axis where $(x-4)^2 = 5$, that is $x = 4 \\pm \\sqrt{5} \\approx 1.76$ and $6.24$ — and the drawn curve does cut the axis a little before $2$ and a little after $6$ ✓. The trap is stopping after the vertex and answering $c = -5$, since $-5$ is sitting right there in the vertex. But $c$ is the height at $x = 0$: test $y = x^2 - 8x - 5$ at $x = 4$ and you get $16 - 32 - 5 = -21$, not $-5$ ✗.',
    },
    {
      q: 'The parabola $y = 2x^2 + bx + 3$ has axis of symmetry $x = -1$. Find $b$ and the vertex of the parabola.',
      answer: '$b = 4$; the vertex is $(-1, 1)$',
      solution:
        'The axis of symmetry runs through the vertex at $x = -\\frac{b}{2a}$, and here $a = 2$, so $-\\frac{b}{4} = -1$ and $b = 4$. The parabola is $y = 2x^2 + 4x + 3$, and the vertex height comes from substituting $x = -1$: $y = 2 - 4 + 3 = 1$. So the vertex is $(-1, 1)$. Check by completing the square: $2(x^2 + 2x) + 3 = 2(x+1)^2 - 2 + 3 = 2(x+1)^2 + 1$, vertex $(-1, 1)$ ✓. Check the symmetry claim with a numeric pair, one unit either side: at $x = 0$, $y = 3$, and at $x = -2$, $y = 8 - 8 + 3 = 3$ ✓ — equal heights, so the mirror line really is $x = -1$, and both sit above the vertex height of $1$ ✓. The trap is forgetting that $a = 2$ and solving $-\\frac{b}{2} = -1$ to get $b = 2$. Test it: $y = 2x^2 + 2x + 3$ has its axis at $x = -\\frac{2}{4} = -\\frac{1}{2}$, half a unit off ✗. The denominator is $2a$, and $a$ is not always $1$.',
    },
  ],
  // w10 — where a circle in general form meets an axis. One misses the axis it
  //       is asked about only just, one is tangent, and one meets both axes.
  [
    {
      q: 'Find the points where the circle $x^2 + y^2 - 8x - 9 = 0$ crosses the $y$-axis.',
      answer: '$(0, 3)$ and $(0, -3)$',
      solution:
        'Complete the square in $x$ first: $x^2 - 8x = (x-4)^2 - 16$, so the circle is $(x-4)^2 - 16 + y^2 - 9 = 0$, that is $(x-4)^2 + y^2 = 25$ — centre $(4, 0)$, radius $5$. On the $y$-axis every point has $x = 0$, so $(0-4)^2 + y^2 = 25$ gives $16 + y^2 = 25$, then $y^2 = 9$ and $y = \\pm 3$. The crossings are $(0, 3)$ and $(0, -3)$. Check both in the ORIGINAL equation: $0 + 9 - 0 - 9 = 0$ ✓ and $0 + 9 - 0 - 9 = 0$ ✓. Check with distances too: from the centre $(4, 0)$ to $(0, 3)$ is $\\sqrt{16 + 9} = 5$ ✓, the radius exactly, and the same for $(0, -3)$ ✓. Two traps. Setting $y = 0$ out of habit answers a question nobody asked — that finds the $x$-axis crossings, $x = 9$ and $x = -1$. And THE MISSING TWIN: reporting only $(0, 3)$ because $\\sqrt{9} = 3$. The circle reaches the $y$-axis above and below the centre, so $-3$ is every bit as real ✗.',
    },
    {
      q: 'Find the points where the circle $x^2 + y^2 - 8x - 6y + 16 = 0$ crosses the $x$-axis.',
      answer: 'Just one point, $(4, 0)$ — the circle touches the $x$-axis there',
      solution:
        'Complete both squares: $x^2 - 8x = (x-4)^2 - 16$ and $y^2 - 6y = (y-3)^2 - 9$, so the equation becomes $(x-4)^2 - 16 + (y-3)^2 - 9 + 16 = 0$, that is $(x-4)^2 + (y-3)^2 = 9$ — centre $(4, 3)$, radius $3$. Set $y = 0$ for the $x$-axis: $(x-4)^2 + 9 = 9$, so $(x-4)^2 = 0$ and $x = 4$, once only. The single meeting point is $(4, 0)$. Check it in the ORIGINAL equation: $16 + 0 - 32 - 0 + 16 = 0$ ✓. Check the "only one" claim a completely different way: the centre $(4, 3)$ sits exactly $3$ units above the $x$-axis, and the radius is also $3$, so the circle reaches down to the axis and stops — it is tangent, touching without crossing ✓. The trap is expecting two answers and writing $x = \\pm 4$ out of momentum. Unsquaring gives twins only when the right side is positive; here it is $0$, and $0$ has just one square root. Test $x = -4$ in the original: $16 + 0 + 32 - 0 + 16 = 64 \\ne 0$ ✗.',
    },
    {
      q: 'Find every point where the circle $x^2 + y^2 + 6x - 8y = 0$ meets an axis.',
      answer: '$(0, 0)$, $(-6, 0)$ and $(0, 8)$',
      solution:
        'There is no constant term, which is a hint rather than a problem: complete the squares as usual. $x^2 + 6x = (x+3)^2 - 9$ and $y^2 - 8y = (y-4)^2 - 16$, so $(x+3)^2 + (y-4)^2 = 9 + 16 = 25$ — centre $(-3, 4)$, radius $5$. For the $x$-axis put $y = 0$: $(x+3)^2 + 16 = 25$, so $(x+3)^2 = 9$ and $x + 3 = \\pm 3$, giving $x = 0$ and $x = -6$. For the $y$-axis put $x = 0$: $9 + (y-4)^2 = 25$, so $(y-4)^2 = 16$ and $y = 8$ or $y = 0$. Collecting them: $(0, 0)$, $(-6, 0)$ and $(0, 8)$ — the origin turned up on both lists, because a circle through the origin meets both axes there at once, so there are three points, not four. Check all three in the ORIGINAL equation: $0 = 0$ ✓; $36 + 0 - 36 - 0 = 0$ ✓; $0 + 64 - 0 - 64 = 0$ ✓. Check with distances from $(-3, 4)$: to $(0,0)$ is $\\sqrt{9+16} = 5$ ✓, to $(-6,0)$ is $\\sqrt{9+16} = 5$ ✓, to $(0,8)$ is $\\sqrt{9+16} = 5$ ✓ — all exactly one radius. THE UNBALANCED BOOKS is the trap: seeing no constant and writing $(x+3)^2 + (y-4)^2 = 0$, which would be a single lonely point instead of a circle. The $-9$ and the $-16$ still have to cross the equals sign ✗.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 14,
  worksheet,
}
