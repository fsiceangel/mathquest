// Introduction to Algebra chapter 14 — variations for section 14.1, Parabolas.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then confirmed a
//    SECOND, INDEPENDENT way. For a vertex the second check is the mirror test:
//    step the same distance to each side of the claimed axis and show the two
//    heights agree AND sit on the correct side of the claimed turning value. A
//    check is never run at the vertex itself, because the point being tested is
//    exactly the one in question. For factored roots the second check is the
//    sum-and-product rule (roots add to $-b/a$, multiply to $c/a$), which tests
//    both roots at once and catches a single dropped sign. For a matched
//    equation the second check is an easy plotted point away from the vertex.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that number. The traps running
//    through this section are: LOSING THE MINUS in $x = -\frac{b}{2a}$,
//    DIVIDING BY $2$ INSTEAD OF $2a$, READING THE INSIDE NUMBER of $(x-h)^2$
//    without flipping its sign, ANSWERING WHERE INSTEAD OF WHAT (handing back
//    the $x$-coordinate of the vertex when the question asked for the height),
//    TAKING $c$ AS THE VERTEX HEIGHT, LETTING $b$ OR $c$ DECIDE WHICH WAY THE
//    PARABOLA OPENS, PICKING A FACTOR PAIR THAT MULTIPLIES RIGHT BUT ADDS
//    WRONG, and MIRRORING THE WRONG WAY (across the $y$-axis, or through the
//    vertex, instead of across the axis of symmetry).
//  - Figures are coordinate-exact. Every view window was chosen so the vertex
//    and whatever the question asks about are both inside it, every view is at
//    most 12 units wide so the grid stays at one unit per line, and every
//    plotted parabola was checked by substituting the labelled points into its
//    own equation.
//  - No two choices inside an item name the same value, even written two ways.

const s141 = [
  // p1 — which way does it open? Only the sign of a matters.
  [
    {
      q: 'Which way does the graph of $y = \\frac{1}{2}x^2 - 7x + 1$ open?',
      choices: [
        'Downward, because $b = -7$ is negative',
        'Downward, because $a = \\frac{1}{2}$ is smaller than $1$',
        'Upward, because $a = \\frac{1}{2}$ is positive',
        'It depends on the sign of $c$',
      ],
      answer: 2,
      solution:
        'Only the coefficient of $x^2$ decides the direction. Here $a = \\frac{1}{2} > 0$, so the parabola opens upward — a smile. Check a second, independent way by going far out in both directions, where the $x^2$ term dominates: at $x = 20$, $y = \\frac{1}{2}(400) - 140 + 1 = 61$, and at $x = -20$, $y = \\frac{1}{2}(400) + 140 + 1 = 341$. Both arms climb high above the middle ✓, which is exactly what an upward parabola does. A fraction like $\\frac{1}{2}$ only makes the U wider — it never flips it. (The first choice LETS $b$ DECIDE the direction, but $b$ only slides the parabola sideways; the second choice reads “small” as “negative”, yet $\\frac{1}{2}$ is still greater than $0$; the last choice LETS $c$ DECIDE, but $c$ only slides the parabola up and down.)',
    },
    {
      q: 'The graph of $y = kx^2 - 4x + 9$ opens downward. Which of these could $k$ be?',
      choices: ['$k = 2$', '$k = 0$', '$k = 9$', '$k = -5$'],
      answer: 3,
      solution:
        'Opening downward means the coefficient of $x^2$ is negative, so we need $k < 0$. Of the four numbers offered, only $-5$ is negative. Check a second, independent way by testing that choice far out on both sides: $y = -5x^2 - 4x + 9$ gives $y = -500 - 40 + 9 = -531$ at $x = 10$, and $y = -500 + 40 + 9 = -451$ at $x = -10$. Both arms plunge far below the graph’s high point ✓ — a frown. (The choice $k = 2$ is positive, so that parabola opens upward; the choice $k = 0$ is worse than wrong — with no $x^2$ term at all the graph is the straight line $y = -4x + 9$, not a parabola; the choice $k = 9$ COPIES $c$ into the leading slot, and $9$ is positive too, so that graph also opens upward.)',
    },
    {
      q: 'Which one of these parabolas opens downward?',
      choices: ['$y = 6 - x^2$', '$y = x^2 - 6$', '$y = -6 + x^2$', '$y = x^2 + 6x - 9$'],
      answer: 0,
      solution:
        'Hunt for the coefficient sitting on $x^2$, wherever in the expression it happens to be written. In $y = 6 - x^2$ that coefficient is $-1$, which is negative, so this one opens downward. In the other three the $x^2$ term is $+x^2$, so all three open upward. Check a second, independent way with numbers: for $y = 6 - x^2$, at $x = 10$ we get $6 - 100 = -94$ and at $x = -10$ we get $6 - 100 = -94$ — both arms fall far below the high point at $(0, 6)$ ✓. (The choice $y = x^2 - 6$ has a minus sign, but it is attached to the CONSTANT, which only lowers the parabola; the choice $y = -6 + x^2$ merely writes that same constant first, and a leading minus sign in the writing is not a negative $a$; the choice $y = x^2 + 6x - 9$ has both a negative constant and a $6x$ term, and neither of those can flip a U.)',
    },
  ],
  // p2 — the y-intercept is (0, c), free of charge.
  [
    {
      q: 'What is the $y$-intercept of the graph of $y = 2x^2 + 7x - 9$?',
      choices: ['$(-9, 0)$', '$(0, -9)$', '$(0, 7)$', '$(0, 2)$'],
      answer: 1,
      solution:
        'Set $x = 0$. Both the $2x^2$ and the $7x$ collapse to zero, leaving $y = -9$, so the graph crosses the $y$-axis at $(0, -9)$. For any quadratic $y = ax^2 + bx + c$ the $y$-intercept is always $(0, c)$. Check a second, independent way by testing the rival point: is $(-9, 0)$ on the graph? Substituting $x = -9$ gives $2(81) + 7(-9) - 9 = 162 - 63 - 9 = 90$, not $0$ ✗ — so that point is nowhere near the curve. (The choice $(-9, 0)$ SWAPS THE COORDINATES, putting the number on the $x$-axis instead of the $y$-axis; the choice $(0, 7)$ reads $b$ instead of $c$, but the $7$ belongs to a term that vanishes at $x = 0$; the choice $(0, 2)$ reads $a$, which controls the shape, not the height.)',
    },
    {
      q: 'The graph of $y = x^2 + 5x + c$ crosses the $y$-axis at $(0, -12)$. What is $c$?',
      choices: ['$12$', '$5$', '$-12$', '$-17$'],
      answer: 2,
      solution:
        'Run the rule backwards. The $y$-intercept of $y = ax^2 + bx + c$ is $(0, c)$, so the height $-12$ IS the constant: $c = -12$. Check a second, independent way by substituting into the finished equation: $y = x^2 + 5x - 12$ at $x = 0$ gives $0 + 0 - 12 = -12$ ✓, exactly the crossing we were promised. (The choice $12$ FLIPS THE SIGN, as though the intercept were at $-c$, but $y = x^2 + 5x + 12$ crosses at $(0, 12)$, on the wrong side of the axis ✗; the choice $5$ reads $b$ instead of $c$; the choice $-17$ comes from treating the term $5x$ as a plain $5$ at $x = 0$ and solving $-12 = 5 + c$, and that parabola crosses at $(0, -17)$ ✗.)',
    },
    {
      q: 'A toy rocket is fired straight up from a tower. Its height in metres $t$ seconds after launch is $h = -5t^2 + 20t + 3$. How high above the ground is the rocket at the instant it is launched?',
      choices: ['$20$ metres', '$0$ metres', '$23$ metres', '$3$ metres'],
      answer: 3,
      solution:
        'Launch is the moment $t = 0$, so this is the $y$-intercept in disguise. Substituting $t = 0$: $h = -5(0) + 20(0) + 3 = 3$ metres — the rocket starts $3$ metres up, on top of the tower. Check a second, independent way by watching the very next second: at $t = 1$, $h = -5 + 20 + 3 = 18$ metres, so the rocket has climbed $15$ metres in that first second, which only makes sense if it began at $3$ ✓. (The choice $20$ reads the coefficient of $t$, which is about how fast it leaves, not where it starts; the choice $0$ assumes every launch starts at ground level, but then the constant term would have to be $0$; the choice $23$ ADDS THE $20$ TO THE $3$, forgetting that the $20t$ term also vanishes at $t = 0$ — and $23$ is not even the height at $t = 1$, which we just found is $18$ ✗.)',
    },
  ],
  // p3 — read the vertex straight off vertex form, watching the sign inside.
  [
    {
      q: 'What is the vertex of the parabola $y = (x + 6)^2 - 5$?',
      choices: ['$(6, -5)$', '$(-6, -5)$', '$(-6, 5)$', '$(6, 5)$'],
      answer: 1,
      solution:
        'The squared part is never negative, so $y$ is smallest exactly when $(x+6)^2 = 0$, which happens at $x = -6$. There $y = 0 - 5 = -5$, so the vertex is $(-6, -5)$. Match it against the template $y = a(x-h)^2 + k$: $(x+6)$ is $(x - (-6))$, so $h = -6$. Check a second, independent way by stepping off the vertex in both directions: at $x = -5$, $y = 1 - 5 = -4$, and at $x = -7$, $y = 1 - 5 = -4$. Equal heights either side ✓, and both are ABOVE $-5$ ✓, so $-5$ really is the bottom. (The choice $(6, -5)$ READS THE INSIDE NUMBER without flipping its sign — the classic slip here; the choice $(-6, 5)$ flips the sign of the constant outside instead, but the $-5$ is already outside the bracket and needs no flipping; the choice $(6, 5)$ makes both mistakes at once.)',
    },
    {
      q: 'A parabola has vertex $(-2, 7)$ and its equation has the form $y = (x - h)^2 + k$. What is its equation?',
      choices: ['$y = (x + 2)^2 + 7$', '$y = (x - 2)^2 + 7$', '$y = (x + 2)^2 - 7$', '$y = (x - 7)^2 + 2$'],
      answer: 0,
      solution:
        'Here $h = -2$ and $k = 7$. Substituting into $y = (x-h)^2 + k$ gives $y = (x - (-2))^2 + 7 = (x + 2)^2 + 7$. The minus in the template turns the $-2$ into a plus inside the bracket. Check a second, independent way by expanding and using the vertex formula: $(x+2)^2 + 7 = x^2 + 4x + 11$, so $x = -\\frac{b}{2a} = -\\frac{4}{2} = -2$ ✓, and there $y = 4 - 8 + 11 = 7$ ✓ — the vertex we were handed. (The choice $y = (x-2)^2 + 7$ COPIES THE SIGN of the $-2$ straight inside, but that parabola turns at $x = +2$; the choice $y = (x+2)^2 - 7$ flips the sign of $k$, which never needs flipping; the choice $y = (x-7)^2 + 2$ SWAPS THE COORDINATES, putting the turning point at $(7, 2)$.)',
    },
    {
      q: 'The parabola $y = -2(x - 5)^2 + 8$ has a highest point. What are its coordinates?',
      choices: ['$(-5, 8)$', '$(5, -8)$', '$(-5, -8)$', '$(5, 8)$'],
      answer: 3,
      solution:
        'Because $a = -2$ is negative the parabola opens downward, so its turning point is a maximum. The squared part is zero when $x - 5 = 0$, that is $x = 5$, and then $y = -2(0) + 8 = 8$. The highest point is $(5, 8)$. Check a second, independent way by stepping one unit each way: at $x = 6$, $y = -2(1) + 8 = 6$, and at $x = 4$, $y = -2(1) + 8 = 6$. Equal heights either side ✓, both BELOW $8$ ✓, so $8$ is indeed the peak. (The choice $(-5, 8)$ READS THE INSIDE NUMBER $-5$ as the $x$-coordinate instead of flipping it; the choice $(5, -8)$ lets the negative $a$ leak onto the height, but the $-2$ multiplies only the squared part, which is $0$ at the vertex; the choice $(-5, -8)$ makes both mistakes.)',
    },
  ],
  // p4 — axis of symmetry from x = -b/(2a).
  [
    {
      q: 'What is the axis of symmetry of $y = x^2 - 10x + 4$?',
      choices: ['$x = 5$', '$x = -5$', '$x = 10$', '$x = -10$'],
      answer: 0,
      solution:
        'The axis runs vertically through the vertex, at $x = -\\frac{b}{2a} = -\\frac{-10}{2} = 5$. Two minus signs make a plus, so the axis lands on the positive side. Check a second, independent way with the mirror test: at $x = 4$, $y = 16 - 40 + 4 = -20$, and at $x = 6$, $y = 36 - 60 + 4 = -20$. Two points one unit either side of $5$ sit at exactly the same height ✓ — that is what a mirror line does. (The choice $x = -5$ LOSES ONE MINUS SIGN, reading $\\frac{b}{2a}$; the choice $x = 10$ copies $b$ without halving or negating it, and $y(9) = 81 - 90 + 4 = -5$ while $y(11) = 121 - 110 + 4 = 15$, which are not equal ✗; the choice $x = -10$ copies $b$ complete with its sign.)',
    },
    {
      q: 'What is the axis of symmetry of $y = 3x^2 + 12x - 7$?',
      choices: ['$x = 2$', '$x = -4$', '$x = -2$', '$x = -12$'],
      answer: 2,
      solution:
        'Use $x = -\\frac{b}{2a}$ with $a = 3$ and $b = 12$: $x = -\\frac{12}{6} = -2$. Check a second, independent way with the mirror test: at $x = -1$, $y = 3 - 12 - 7 = -16$, and at $x = -3$, $y = 27 - 36 - 7 = -16$. Equal heights one unit either side of $-2$ ✓. (The choice $x = 2$ LOSES THE MINUS in the formula; the choice $x = -4$ DIVIDES BY $a$ INSTEAD OF $2a$, giving $-\\frac{12}{3}$, and the mirror test fails there: $y(-3) = -16$ but $y(-5) = 75 - 60 - 7 = 8$ ✗; the choice $x = -12$ copies $b$ without dividing at all.)',
    },
    {
      q: 'The parabola $y = 2x^2 + bx + 5$ has axis of symmetry $x = -3$. What is $b$?',
      choices: ['$-12$', '$12$', '$6$', '$-6$'],
      answer: 1,
      solution:
        'Run the formula backwards. The axis sits at $-\\frac{b}{2a} = -\\frac{b}{4}$, and we are told that equals $-3$, so $-\\frac{b}{4} = -3$, giving $b = 12$. Check a second, independent way with the mirror test on the finished parabola $y = 2x^2 + 12x + 5$: at $x = -2$, $y = 8 - 24 + 5 = -11$, and at $x = -4$, $y = 32 - 48 + 5 = -11$ ✓ — matching heights either side of $-3$, so $x = -3$ really is the mirror line. (The choice $-12$ LOSES THE MINUS and solves $\\frac{b}{4} = -3$; the choice $6$ DIVIDES BY $2$ INSTEAD OF $2a$, solving $-\\frac{b}{2} = -3$, and that parabola $y = 2x^2 + 6x + 5$ turns at $x = -\\frac{6}{4} = -1.5$, not $-3$ ✗; the choice $-6$ just doubles the axis value, $2 \\times (-3)$, dropping both the $a$ and the minus sign.)',
    },
  ],
  // p5 — read the turning point off a picture. Fresh parabolas, coordinate-exact.
  [
    {
      q: 'What are the coordinates of the turning point of the parabola shown?',
      fig: {
        view: [-8, -6, 3, 6],
        grid: true,
        elems: [{ t: 'parabola', a: 1, b: 6, c: 5 }],
      },
      choices: ['$(3, -4)$', '$(-3, -4)$', '$(-3, 4)$', '$(-1, 0)$'],
      answer: 1,
      solution:
        'The vertex is the turning point — here the bottom of the U, three units LEFT of the $y$-axis and four units below the $x$-axis: $(-3, -4)$. Check a second, independent way using the crossings: the curve meets the $x$-axis at $x = -5$ and $x = -1$, and the vertex must sit exactly midway between them, at $x = \\frac{-5 + (-1)}{2} = -3$ ✓. One more mirror check: the graph passes through $(0, 5)$, and its twin the same distance on the far side of the axis is $(-6, 5)$, which the picture confirms ✓. (The choice $(3, -4)$ FLIPS THE SIGN of the $x$-coordinate, putting the vertex on the empty right half of the grid; the choice $(-3, 4)$ flips the height, putting it above the axis where the curve never turns; the choice $(-1, 0)$ names an $x$-INTERCEPT instead of the turning point.)',
    },
    {
      q: 'The parabola shown opens downward. What are the coordinates of its highest point?',
      fig: {
        view: [-4, -4, 7, 6],
        grid: true,
        elems: [{ t: 'parabola', a: -1, b: 2, c: 3 }],
      },
      choices: ['$(-1, 4)$', '$(1, -4)$', '$(1, 4)$', '$(3, 0)$'],
      answer: 2,
      solution:
        'This parabola opens downward, so its vertex is the HIGHEST point: one unit right of the $y$-axis and four units up, at $(1, 4)$. Check a second, independent way using the crossings: the curve meets the $x$-axis at $x = -1$ and $x = 3$, and the turning point sits midway, at $x = \\frac{-1 + 3}{2} = 1$ ✓. A mirror check confirms the picture: the curve passes through $(0, 3)$ and through $(2, 3)$, equal distances either side of $x = 1$ ✓. (The choice $(-1, 4)$ FLIPS THE SIGN of the $x$-coordinate and lands on an $x$-intercept’s column instead; the choice $(1, -4)$ flips the height, reading the peak as if the U opened upward; the choice $(3, 0)$ names the right-hand $x$-INTERCEPT.)',
    },
    {
      q: 'The parabola shown has a lowest point. What is the smallest value of $y$ anywhere on the curve?',
      fig: {
        view: [-2, -3, 8, 6],
        grid: true,
        elems: [{ t: 'parabola', a: 1, b: -4, c: 3 }],
      },
      choices: ['$2$', '$3$', '$1$', '$-1$'],
      answer: 3,
      solution:
        'Find the turning point and then read off its HEIGHT, not its position. The bottom of the U sits two units right of the $y$-axis and one unit below the $x$-axis, so the vertex is $(2, -1)$ and the smallest $y$-value is $-1$. Check a second, independent way using the crossings: the curve cuts the $x$-axis at $x = 1$ and $x = 3$, so the vertex is at $x = \\frac{1+3}{2} = 2$ ✓; and the curve passes through $(0, 3)$ and its mirror $(4, 3)$ ✓, both far above $-1$. (The choice $2$ ANSWERS WHERE INSTEAD OF WHAT, handing back the $x$-coordinate of the vertex; the choice $3$ reads the $y$-INTERCEPT, which is where the curve meets the vertical axis, not its lowest point; the choice $1$ names the smaller $x$-INTERCEPT.)',
    },
  ],
  // p6 — x-intercepts by factoring, plus one run backwards from the roots.
  [
    {
      q: 'What are the $x$-intercepts of the graph of $y = x^2 - 2x - 15$?',
      choices: [
        '$x = -5$ and $x = 3$',
        '$x = 5$ and $x = -3$',
        '$x = 15$ and $x = -1$',
        '$x = -5$ and $x = -3$',
      ],
      answer: 1,
      solution:
        'Set $y = 0$ and factor. We need two numbers that multiply to $-15$ and add to $-2$: those are $-5$ and $+3$, so $x^2 - 2x - 15 = (x - 5)(x + 3)$. A product is zero exactly when one factor is, so $x = 5$ or $x = -3$. Check a second, independent way with sum and product: the roots should add to $-\\frac{b}{a} = 2$, and $5 + (-3) = 2$ ✓; they should multiply to $\\frac{c}{a} = -15$, and $5 \\times (-3) = -15$ ✓. (The choice $-5, 3$ reports THE NUMBERS INSIDE THE FACTORS instead of the roots — the sign flips when you solve $x - 5 = 0$; it fails the sum test, since $-5 + 3 = -2 \\ne 2$ ✗. The choice $15, -1$ PICKS A FACTOR PAIR THAT MULTIPLIES RIGHT BUT ADDS WRONG: $15 \\times (-1) = -15$ ✓ but $15 + (-1) = 14 \\ne 2$ ✗. The choice $-5, -3$ makes both negative, and then the product is $+15$, the wrong sign ✗.)',
    },
    {
      q: 'Where does the graph of $y = x^2 + 7x + 10$ cross the $x$-axis?',
      choices: [
        '$x = -5$ and $x = -2$',
        '$x = 5$ and $x = 2$',
        '$x = -10$ and $x = -1$',
        '$x = -7$ and $x = -10$',
      ],
      answer: 0,
      solution:
        'Set $y = 0$ and factor. We need two numbers that multiply to $10$ and add to $7$: those are $5$ and $2$, so $x^2 + 7x + 10 = (x + 5)(x + 2)$ and the crossings are $x = -5$ and $x = -2$. Both roots are negative, which fits: a positive $c$ with a positive $b$ pushes the whole curve to the left of the origin. Check a second, independent way with sum and product: $-5 + (-2) = -7 = -\\frac{b}{a}$ ✓ and $(-5)(-2) = 10 = \\frac{c}{a}$ ✓. (The choice $5, 2$ reports THE NUMBERS INSIDE THE FACTORS without flipping their signs, and $5 + 2 = 7 \\ne -7$ ✗. The choice $-10, -1$ PICKS A FACTOR PAIR THAT MULTIPLIES RIGHT BUT ADDS WRONG: $(-10)(-1) = 10$ ✓ but $-10 + (-1) = -11 \\ne -7$ ✗. The choice $-7, -10$ copies $b$ and $c$ straight off the equation, and $(-7)(-10) = 70 \\ne 10$ ✗.)',
    },
    {
      q: 'The graph of $y = x^2 + bx - 24$ crosses the $x$-axis at $x = -8$ and $x = 3$. What is $b$?',
      choices: ['$-5$', '$-11$', '$11$', '$5$'],
      answer: 3,
      solution:
        'If the roots are $-8$ and $3$, the quadratic factors as $(x + 8)(x - 3)$. Expanding: $x^2 - 3x + 8x - 24 = x^2 + 5x - 24$, so $b = 5$. Check a second, independent way with the sum rule: the roots add to $-\\frac{b}{a}$, and $-8 + 3 = -5$, so $-b = -5$ and $b = 5$ ✓. (The product rule agrees too: $(-8)(3) = -24 = \\frac{c}{a}$ ✓, which confirms the roots really do belong to this parabola.) (The choice $-5$ reports THE SUM OF THE ROOTS WITHOUT NEGATING it — the sum is $-\\frac{b}{a}$, not $b$; the choice $11$ flips the sign of the root $-8$ before adding, giving $8 + 3$; the choice $-11$ flips the sign of the root $3$ instead, giving $-8 - 3$.)',
    },
  ],
  // p7 — vertex of a quadratic with a leading coefficient, via x = -b/(2a).
  [
    {
      q: 'What is the vertex of $y = 3x^2 + 12x - 4$?',
      choices: ['$(-2, -16)$', '$(2, 32)$', '$(-2, -4)$', '$(-6, 32)$'],
      answer: 0,
      solution:
        'The vertex sits at $x = -\\frac{b}{2a} = -\\frac{12}{6} = -2$. Then $y = 3(-2)^2 + 12(-2) - 4 = 12 - 24 - 4 = -16$, so the vertex is $(-2, -16)$. Check a second, independent way with the mirror test: at $x = -1$, $y = 3 - 12 - 4 = -13$, and at $x = -3$, $y = 27 - 36 - 4 = -13$. Equal heights one unit either side ✓, and both are ABOVE $-16$ ✓, so $-16$ is the floor. (The choice $(2, 32)$ LOSES THE MINUS in the formula and computes the height honestly at $x = 2$; the choice $(-2, -4)$ gets $x$ right but TAKES $c$ AS THE VERTEX HEIGHT, and $-4$ is the height at $x = 0$, not at $x = -2$ ✗; the choice $(-6, 32)$ DIVIDES BY $2$ INSTEAD OF $2a$, using $-\\frac{12}{2}$. Notice those last two wrong points share a height — $2$ and $-6$ are each four units from the true axis $x = -2$, so they are mirror twins of one another, and neither is the turning point.)',
    },
    {
      q: 'What is the maximum value of $y = -x^2 + 6x + 1$?',
      choices: ['$3$', '$1$', '$10$', '$-26$'],
      answer: 2,
      solution:
        'Since $a = -1 < 0$ the parabola opens downward, so its vertex is a maximum. It sits at $x = -\\frac{b}{2a} = -\\frac{6}{-2} = 3$, and there $y = -9 + 18 + 1 = 10$. The question asks for the VALUE, so the answer is $10$, not $3$. Check a second, independent way with the mirror test: at $x = 2$, $y = -4 + 12 + 1 = 9$, and at $x = 4$, $y = -16 + 24 + 1 = 9$. Equal heights either side of $3$ ✓, and both are BELOW $10$ ✓, so $10$ really is the ceiling. (The choice $3$ ANSWERS WHERE INSTEAD OF WHAT, handing back the $x$-coordinate; the choice $1$ reads $c$, the height at $x = 0$, which is not the peak; the choice $-26$ LOSES THE MINUS and evaluates at $x = -3$: $-9 - 18 + 1 = -26$ ✗, which is far below the graph’s high point.)',
    },
    {
      q: 'The parabola $y = 2x^2 + 12x + 13$ has a lowest point. What do you get when you add the two coordinates of that point?',
      choices: ['$70$', '$10$', '$7$', '$-8$'],
      answer: 3,
      solution:
        'First find the turning point: $x = -\\frac{b}{2a} = -\\frac{12}{4} = -3$, and there $y = 2(9) + 12(-3) + 13 = 18 - 36 + 13 = -5$. The vertex is $(-3, -5)$, so the two coordinates add to $-3 + (-5) = -8$. Check a second, independent way with the mirror test: at $x = -2$, $y = 8 - 24 + 13 = -3$, and at $x = -4$, $y = 32 - 48 + 13 = -3$. Equal heights either side of $-3$ ✓, both ABOVE $-5$ ✓. (The choice $70$ LOSES THE MINUS, using $x = 3$ where $y = 18 + 36 + 13 = 67$, and $3 + 67 = 70$; the choice $10$ gets $x = -3$ right but TAKES $c$ AS THE VERTEX HEIGHT, giving $-3 + 13$; the choice $7$ DIVIDES BY $2$ INSTEAD OF $2a$, landing at $x = -6$ where $y = 72 - 72 + 13 = 13$, and $-6 + 13 = 7$.)',
    },
  ],
  // p8 — match a picture to a vertex-form equation. Fresh parabolas.
  [
    {
      q: 'Which of these equations produces the parabola shown?',
      fig: {
        view: [-6, -4, 5, 6],
        grid: true,
        elems: [{ t: 'parabola', a: 1, b: 2, c: -2 }],
      },
      choices: [
        '$y = (x + 1)^2 - 3$',
        '$y = (x - 1)^2 - 3$',
        '$y = (x + 1)^2 + 3$',
        '$y = -(x + 1)^2 - 3$',
      ],
      answer: 0,
      solution:
        'The graph opens upward, so $a$ is positive — that rules out the last choice at once. Its lowest point is at $(-1, -3)$, and vertex form with $h = -1$ and $k = -3$ is $y = (x - (-1))^2 - 3 = (x + 1)^2 - 3$. Check a second, independent way at an easy point away from the vertex: at $x = 0$ the formula gives $(1)^2 - 3 = -2$, and the picture does cross the $y$-axis two units below the origin ✓. One more: at $x = 1$ the formula gives $(2)^2 - 3 = 1$, and the curve is one unit up there ✓. (The choice $y = (x-1)^2 - 3$ puts the turning point at $x = +1$, on the wrong side of the $y$-axis; the choice $y = (x+1)^2 + 3$ lifts the whole curve so it never reaches the $x$-axis, yet the picture clearly crosses it twice; the choice $y = -(x+1)^2 - 3$ opens downward.)',
    },
    {
      q: 'The parabola shown is the graph of which equation?',
      fig: {
        view: [-5, -4, 4, 6],
        grid: true,
        elems: [{ t: 'parabola', a: 2, b: 4, c: 0 }],
      },
      choices: [
        '$y = 2(x - 1)^2 - 2$',
        '$y = 2(x + 1)^2 - 2$',
        '$y = (x + 1)^2 - 2$',
        '$y = -2(x + 1)^2 - 2$',
      ],
      answer: 1,
      solution:
        'The U opens upward, so $a > 0$ — the last choice is out. The turning point is at $(-1, -2)$, giving $y = a(x + 1)^2 - 2$. To pin down $a$, use a second point: the curve passes through the origin, and $a(0 + 1)^2 - 2 = 0$ forces $a = 2$. So the equation is $y = 2(x + 1)^2 - 2$. Check a second, independent way at the other crossing: at $x = -2$, $2(-2+1)^2 - 2 = 2 - 2 = 0$ ✓, and the picture does meet the axis at $x = -2$. (The choice $y = 2(x-1)^2 - 2$ has its vertex at $x = +1$, so it would cross the axis at $0$ and $2$, not $0$ and $-2$; the choice $y = (x+1)^2 - 2$ has the right vertex but $a = 1$, which is TOO WIDE — at $x = 0$ it gives $1 - 2 = -1$, still below the axis, while the drawn curve is already at $0$ ✗; the choice $y = -2(x+1)^2 - 2$ opens downward.)',
    },
    {
      q: 'Which equation has the graph shown?',
      fig: {
        view: [-7, -5, 2, 3],
        grid: true,
        elems: [{ t: 'parabola', a: -1, b: -6, c: -8 }],
      },
      choices: [
        '$y = -(x - 3)^2 + 1$',
        '$y = -(x + 3)^2 - 1$',
        '$y = -(x + 3)^2 + 1$',
        '$y = (x + 3)^2 + 1$',
      ],
      answer: 2,
      solution:
        'The curve opens downward, so $a$ is negative — the last choice is out. Its highest point is at $(-3, 1)$, so vertex form with $h = -3$ and $k = 1$ gives $y = -(x + 3)^2 + 1$. Check a second, independent way at the crossings: at $x = -2$ the formula gives $-(1)^2 + 1 = 0$ ✓ and at $x = -4$ it gives $-(-1)^2 + 1 = 0$ ✓ — both match the two places the picture meets the $x$-axis. (The choice $y = -(x-3)^2 + 1$ READS THE INSIDE NUMBER without flipping, putting the peak at $x = +3$ where the grid is empty; the choice $y = -(x+3)^2 - 1$ has the peak one unit BELOW the axis, so that curve would never cross the $x$-axis at all, yet the picture crosses twice ✗; the choice $y = (x+3)^2 + 1$ opens upward.)',
    },
  ],
  // p9 — how many x-intercepts? Discriminant, including one run backwards.
  [
    {
      q: 'How many times does the graph of $y = x^2 - 6x + 9$ cross the $x$-axis?',
      choices: ['$0$', '$1$', '$2$', 'It cannot be determined'],
      answer: 1,
      solution:
        'Check the discriminant: $b^2 - 4ac = 36 - 36 = 0$. A discriminant of zero means one repeated solution, so the parabola just kisses the axis at a single point. Check a second, independent way by factoring: $x^2 - 6x + 9 = (x - 3)^2$, which is zero only at $x = 3$ ✓. And the neighbours confirm the curve lifts straight back off: at $x = 2$, $y = 4 - 12 + 9 = 1 > 0$, and at $x = 4$, $y = 16 - 24 + 9 = 1 > 0$ ✓. (Answering $0$ confuses a repeated root with no root — the graph really does touch down; answering $2$ assumes every parabola cuts the axis twice, but the two solutions have merged into one here; “cannot be determined” overlooks that the discriminant settles the question completely.)',
    },
    {
      q: 'How many $x$-intercepts does the graph of $y = 2x^2 + 5x - 3$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 2,
      solution:
        'Check the discriminant with $a = 2$, $b = 5$, $c = -3$: $b^2 - 4ac = 25 - 4(2)(-3) = 25 + 24 = 49$. Watch that step — subtracting a negative ADDS. Since $49 > 0$ there are two real solutions, so the graph cuts the axis twice. Check a second, independent way by factoring: $2x^2 + 5x - 3 = (2x - 1)(x + 3)$, so $x = \\frac{1}{2}$ or $x = -3$ — two different crossings ✓. Substituting confirms both: $2 \\cdot \\frac{1}{4} + \\frac{5}{2} - 3 = 0.5 + 2.5 - 3 = 0$ ✓ and $18 - 15 - 3 = 0$ ✓. (Answering $0$ comes from SWAPPING $b$ AND $c$ in the formula: $(-3)^2 - 4(2)(5) = 9 - 40 = -31$, which is negative and would mean no crossings ✗; answering $1$ comes from MIS-SIGNING that same product to get $25 - 24 = 1$ and then reporting the discriminant’s VALUE as the number of crossings, but the discriminant is a test, not a count; “infinitely many” would need the graph to lie flat along the axis, which no parabola ever does.)',
    },
    {
      q: 'For which value of $k$ does the graph of $y = x^2 - 8x + k$ touch the $x$-axis at exactly one point?',
      choices: ['$4$', '$-16$', '$8$', '$16$'],
      answer: 3,
      solution:
        'Exactly one point means the discriminant is zero: $b^2 - 4ac = 64 - 4k = 0$, so $k = 16$. Check a second, independent way by factoring the result: $x^2 - 8x + 16 = (x - 4)^2$, which touches zero only at $x = 4$ ✓. And $16$ is the exact tipping point: with $k = 15$ the discriminant is $64 - 60 = 4 > 0$ (two crossings), while with $k = 17$ it is $64 - 68 = -4 < 0$ (none) ✓. (The choice $4$ HALVES $b$ BUT FORGETS TO SQUARE, and $64 - 16 = 48 \\ne 0$ ✗; the choice $-16$ has the right size but the wrong sign, and $64 + 64 = 128 \\ne 0$ ✗; the choice $8$ copies $b$, and $64 - 32 = 32 \\ne 0$ ✗.)',
    },
  ],
  // p10 — the axis of symmetry as a mirror.
  [
    {
      q: 'A parabola has axis of symmetry $x = -1$ and passes through the point $(4, 9)$. Which point must also be on the parabola?',
      choices: ['$(-6, 9)$', '$(6, 9)$', '$(4, -9)$', '$(-4, 9)$'],
      answer: 0,
      solution:
        'The parabola is a perfect mirror image across the line $x = -1$. The point $(4, 9)$ sits $4 - (-1) = 5$ units to the RIGHT of that line, so its twin sits $5$ units to the LEFT, at $x = -1 - 5 = -6$, at the same height: $(-6, 9)$. Check a second, independent way by building an actual parabola with that axis through that point: $y = (x + 1)^2 + k$ with $25 + k = 9$ gives $k = -16$, so $y = (x+1)^2 - 16$; at $x = -6$ this gives $25 - 16 = 9$ ✓. (The choice $(6, 9)$ MIRRORS ACROSS THE $y$-AXIS instead of across $x = -1$; the choice $(4, -9)$ mirrors vertically, flipping the height rather than the position, but a parabola is symmetric left-to-right, not top-to-bottom; the choice $(-4, 9)$ just negates the $x$-coordinate, which lands only $3$ units left of the axis instead of $5$.)',
    },
    {
      q: 'A parabola passes through the two points $(2, 5)$ and $(8, 5)$. What is its axis of symmetry?',
      choices: ['$x = 3$', '$x = 5$', '$x = 10$', '$y = 5$'],
      answer: 1,
      solution:
        'Two points at the SAME height must be mirror twins, so the axis runs exactly midway between them: $x = \\frac{2 + 8}{2} = 5$. Check a second, independent way by building such a parabola: $y = (x - 5)^2 + k$ through $(2, 5)$ needs $9 + k = 5$, so $k = -4$ and $y = (x-5)^2 - 4$; testing the other point, at $x = 8$ we get $9 - 4 = 5$ ✓ — the same height, as promised. (The choice $x = 3$ HALVES THE GAP $8 - 2 = 6$ instead of averaging the positions, giving the DISTANCE from the axis rather than where the axis is; the choice $x = 10$ adds the two $x$-values without halving; the choice $y = 5$ names the shared HEIGHT, but the axis of symmetry of a parabola is a vertical line, and a horizontal line could never be a mirror for a U.)',
    },
    {
      q: 'A parabola has vertex $(3, -1)$ and passes through the point $(7, 15)$. Which point must also lie on the parabola?',
      choices: ['$(-7, 15)$', '$(-1, -17)$', '$(3, 15)$', '$(-1, 15)$'],
      answer: 3,
      solution:
        'The axis of symmetry runs vertically through the vertex, so it is the line $x = 3$. The point $(7, 15)$ sits $7 - 3 = 4$ units to the right of it, so its mirror twin sits $4$ units to the left, at $x = 3 - 4 = -1$, at the same height: $(-1, 15)$. Check a second, independent way by finding the actual equation: vertex form gives $y = a(x-3)^2 - 1$, and $(7, 15)$ forces $16a - 1 = 15$, so $a = 1$ and $y = (x-3)^2 - 1$. At $x = -1$ that gives $(-4)^2 - 1 = 15$ ✓. (The choice $(-7, 15)$ MIRRORS ACROSS THE $y$-AXIS rather than across $x = 3$, and $(-7-3)^2 - 1 = 99 \\ne 15$ ✗; the choice $(-1, -17)$ ROTATES THROUGH THE VERTEX instead of mirroring, flipping the height as well as the position to $2(-1) - 15 = -17$, but a parabola has no such symmetry; the choice $(3, 15)$ parks the twin ON the axis, where the only point of the curve is the vertex itself, whose height is $-1$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 14,
  sections: {
    '14.1': s141,
  },
}
