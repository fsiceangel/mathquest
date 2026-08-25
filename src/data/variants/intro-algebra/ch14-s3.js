// Introduction to Algebra chapter 14 — variations for the end-of-chapter
// challenge set. All problems, figures and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way: a vertex is re-found by completing the square or by testing the two
//    neighbours either side of it, a circle is re-tested by substituting a point
//    that must lie on it, an intercept goes back into the equation, and a
//    reverse-direction answer is pushed forward again through the original
//    wording.
//  - Every figure was plotted from its own numbers. The view always contains the
//    vertex (or the whole circle) with room to spare, and is at most 12 units
//    wide so the gridlines stay one unit apart.
//  - These are the chapter's hard problems, so a variation stays hard: leading
//    coefficients survive, several versions run backwards from the answer to a
//    missing coefficient, and no version collapses into one step.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: DIVIDING BY $2$
//    INSTEAD OF $2a$, READING THE CONSTANT TERM AS THE VERTEX HEIGHT, ANSWERING
//    WHERE A MINIMUM HAPPENS INSTEAD OF WHAT IT IS, FLIPPING THE SIGN INSIDE
//    $(x-h)$, FORGETTING THAT THE RIGHT-HAND SIDE OF A CIRCLE IS $r^2$ AND NOT
//    $r$, MEASURING TO THE WRONG AXIS, and DROPPING THE MINUS BRANCH OF A SQUARE
//    ROOT.
//  - No two choices inside an item name the same number, point, or equation.

const challenge = [
  // c1 — the vertex of a parabola given in standard form. One version runs
  // backwards from the axis of symmetry to the missing coefficient; one carries a
  // leading coefficient, so the division by $2a$ is never free.
  [
    {
      q: 'What is the vertex of the parabola $y = x^2 - 6x + 11$?',
      choices: ['$(-3, 2)$', '$(3, 11)$', '$(3, 2)$', '$(6, 11)$'],
      answer: 2,
      solution:
        'The vertex sits at $x = -\\frac{b}{2a} = -\\frac{-6}{2} = 3$, and then $y = 9 - 18 + 11 = 2$, so the vertex is $(3, 2)$. Check by completing the square: $x^2 - 6x + 11 = (x-3)^2 - 9 + 11 = (x-3)^2 + 2$, which reads off the same point ✓. Check a third way, with the neighbours: $y(2) = 4 - 12 + 11 = 3$ and $y(4) = 16 - 24 + 11 = 3$ — equal heights either side of $x = 3$, both above $2$ ✓. (The choice $(-3, 2)$ flips the sign of $-\\frac{b}{2a}$; it is not even on the curve, since $y(-3) = 9 + 18 + 11 = 38$ ✗. The choice $(3, 11)$ reads the constant term as the height, but $11$ is $y(0)$, the $y$-intercept. The choice $(6, 11)$ forgets to divide by $2a$ and uses $x = -b = 6$; that lands on the curve, since $y(6) = 36 - 36 + 11 = 11$, but it is the mirror image of the $y$-intercept, not the bottom.)',
    },
    {
      q: 'The parabola $y = x^2 + bx + 7$ has its vertex on the line $x = -4$. What is $b$, and where is the vertex?',
      choices: [
        '$b = 8$, vertex $(-4, -9)$',
        '$b = -8$, vertex $(-4, 55)$',
        '$b = 8$, vertex $(-4, 7)$',
        '$b = 4$, vertex $(-4, 7)$',
      ],
      answer: 0,
      solution:
        'The vertex of $y = x^2 + bx + 7$ is at $x = -\\frac{b}{2}$, so $-\\frac{b}{2} = -4$ gives $b = 8$. Now find the height: $y(-4) = 16 - 32 + 7 = -9$, so the vertex is $(-4, -9)$. Check by completing the square on the finished parabola: $x^2 + 8x + 7 = (x+4)^2 - 16 + 7 = (x+4)^2 - 9$ ✓ — vertex $(-4, -9)$ again. Check the symmetry too: $y(-3) = 9 - 24 + 7 = -8$ and $y(-5) = 25 - 40 + 7 = -8$, matching heights either side ✓. (The choice $b = -8$ comes from solving $\\frac{b}{2} = -4$, dropping the minus sign in $-\\frac{b}{2a}$; with $b = -8$ the height really would be $16 + 32 + 7 = 55$, so that choice is at least honest about its own mistake. The choice $b = 8$ with vertex $(-4, 7)$ has the right $b$ but reads the constant $7$ as the height. The choice $b = 4$ forgets the $2$ underneath, solving $-b = -4$, and then $y(-4) = 16 - 16 + 7 = 7$.)',
    },
    {
      q: 'What is the vertex of the parabola $y = 2x^2 - 12x + 13$?',
      choices: ['$(6, 13)$', '$(-3, 67)$', '$(3, 13)$', '$(3, -5)$'],
      answer: 3,
      solution:
        'Here $a = 2$, so the division is by $2a = 4$: $x = -\\frac{-12}{4} = 3$, and $y = 2(9) - 36 + 13 = 18 - 36 + 13 = -5$. The vertex is $(3, -5)$. Check by completing the square: $2(x^2 - 6x) + 13 = 2\\left[(x-3)^2 - 9\\right] + 13 = 2(x-3)^2 - 18 + 13 = 2(x-3)^2 - 5$ ✓. Check the neighbours as well: $y(2) = 8 - 24 + 13 = -3$ and $y(4) = 32 - 48 + 13 = -3$ — equal, and both above $-5$ ✓. (The choice $(6, 13)$ divides by $2$ instead of by $2a = 4$; it does land on the curve, since $y(6) = 72 - 72 + 13 = 13$, but that is the same height as the $y$-intercept, not the lowest point. The choice $(-3, 67)$ flips the sign of the vertex $x$, and $y(-3) = 18 + 36 + 13 = 67$. The choice $(3, 13)$ has the right $x$ but reads the constant term as the height.)',
    },
  ],
  // c2 — reading $x$-intercepts off a graph. One version hides a root at the
  // origin; one changes the direction of the question and asks for the sum, so the
  // reading has to be followed by arithmetic.
  [
    {
      q: 'Where does the parabola drawn below cross the $x$-axis?',
      fig: {
        view: [-5, -5, 5, 5],
        grid: true,
        elems: [{ t: 'parabola', a: 1, b: -2, c: -3 }],
      },
      choices: ['$x = 1$ and $x = -3$', '$x = -1$ and $x = 3$', '$x = 3$ and $x = -3$', '$x = 1$ and $x = -4$'],
      answer: 1,
      solution:
        'The $x$-intercepts are the two places the curve meets the $x$-axis: count along to $x = -1$ on the left and $x = 3$ on the right. Check with the symmetry: the axis of symmetry must sit exactly midway between them, at $x = \\frac{-1+3}{2} = 1$, and the lowest point of this upward parabola is indeed at $(1, -4)$ ✓. Check once more using the $y$-intercept: a parabola with those roots and width $1$ is $y = (x+1)(x-3)$, which at $x = 0$ gives $(1)(-3) = -3$ — and the graph does cross the $y$-axis at $-3$ ✓. (The choice $x = 1$ and $x = -3$ flips both signs, reading the crossings off the wrong side of the origin. The choice $x = 3$ and $x = -3$ assumes the curve is symmetric about the $y$-axis, mirroring the right-hand root; but the low point is at $x = 1$, not $x = 0$. The choice $x = 1$ and $x = -4$ reports the coordinates of the vertex, which is not on the $x$-axis at all.)',
    },
    {
      q: 'The parabola shown opens downward. What are its $x$-intercepts?',
      fig: {
        view: [-7, -3, 3, 7],
        grid: true,
        elems: [{ t: 'parabola', a: -0.5, b: -1, c: 4 }],
      },
      choices: ['$x = -4$ and $x = 4$', '$x = 0$ and $x = 4$', '$x = 4$ and $x = -2$', '$x = -4$ and $x = 2$'],
      answer: 3,
      solution:
        'Follow the curve down to the axis on each side: it crosses at $x = -4$ and at $x = 2$. Check with the symmetry: the midpoint of those two roots is $\\frac{-4+2}{2} = -1$, and the peak of the curve sits right above $x = -1$ ✓. Check the shape a second way — a downward parabola with those roots has the form $y = a(x+4)(x-2)$, and the graph crosses the $y$-axis at $4$, so $a(4)(-2) = 4$ gives $a = -\\frac{1}{2}$; that matches a curve this wide and flat, dropping only about half a unit for the first unit either side of the peak ✓. (The choice $x = -4$ and $x = 4$ mirrors the left root across the $y$-axis, which would only be right if the peak sat on the $y$-axis — it does not. The choice $x = 0$ and $x = 4$ reads the $y$-intercept $4$ as though it were an $x$-intercept and pairs it with the origin, mixing up the two axes. The choice $x = 4$ and $x = -2$ flips both signs.)',
    },
    {
      q: 'The parabola shown meets the $x$-axis at two points. What is the sum of the two $x$-coordinates where it crosses?',
      fig: {
        view: [-2, -5, 8, 5],
        grid: true,
        elems: [{ t: 'parabola', a: 1, b: -4, c: 0 }],
      },
      choices: ['$-4$', '$4$', '$0$', '$2$'],
      answer: 1,
      solution:
        'Read the crossings first: one is at the origin, $x = 0$, and the other is at $x = 4$. Their sum is $0 + 4 = 4$. Check by naming the curve: roots at $0$ and $4$ with width $1$ means $y = x(x-4) = x^2 - 4x$, and the lowest point of that is at $x = 2$ with $y = 4 - 8 = -4$ — exactly the vertex you can see on the graph ✓. Check the sum a second way, without the roots at all: for $y = x^2 - 4x$ the two roots always add to $-\\frac{b}{a} = 4$ ✓. (The choice $-4$ flips the signs of both crossings. The choice $0$ assumes the two crossings are opposites of each other, which happens only when the axis of symmetry is the $y$-axis — here it is $x = 2$. The choice $2$ gives the axis of symmetry, the AVERAGE of the two roots, when the question asked for their sum: double it and you get $4$.)',
    },
  ],
  // c3 — vertex form. One version reverses the question and asks for the stretch
  // factor from a second point on the curve; one adds the min-or-max judgement.
  [
    {
      q: 'What is the vertex of $y = -4(x - 5)^2 + 3$?',
      choices: ['$(-5, 3)$', '$(5, -3)$', '$(5, 3)$', '$(3, 5)$'],
      answer: 2,
      solution:
        'Vertex form is $y = a(x-h)^2 + k$ with vertex $(h, k)$. Here the bracket is already $x - 5$, so $h = 5$, and $k = 3$: the vertex is $(5, 3)$. The $-4$ makes the parabola narrow and turns it upside down, but it never moves the vertex. Check by expanding and using $-\\frac{b}{2a}$: $-4(x^2 - 10x + 25) + 3 = -4x^2 + 40x - 97$, so $x = -\\frac{40}{2(-4)} = 5$ ✓ and $y = -4(25) + 200 - 97 = 3$ ✓. (The choice $(-5, 3)$ copies the $5$ straight out of the bracket with the sign it wears there, but $x - 5 = x - (+5)$. The choice $(5, -3)$ flips $k$. The choice $(3, 5)$ swaps the two coordinates, putting the height where the position belongs.)',
    },
    {
      q: 'A parabola with vertex $(-3, 8)$ passes through the point $(-1, 20)$. Written as $y = a(x-h)^2 + k$, what is $a$?',
      choices: ['$a = 6$', '$a = 3$', '$a = \\frac{3}{4}$', '$a = 5$'],
      answer: 1,
      solution:
        'The vertex gives $h = -3$ and $k = 8$, so the parabola is $y = a(x+3)^2 + 8$. Now use the extra point: at $x = -1$, $a(-1+3)^2 + 8 = 20$, that is $4a + 8 = 20$, so $4a = 12$ and $a = 3$. Check forward in the finished equation $y = 3(x+3)^2 + 8$: at $x = -1$ it gives $3(4) + 8 = 20$ ✓. Check the mirror point too — $x = -5$ is the same distance from the axis $x = -3$, and $3(-5+3)^2 + 8 = 3(4) + 8 = 20$ ✓, matching height as it must. (The choice $a = 6$ forgets to square, solving $2a + 8 = 20$. The choice $a = \\frac{3}{4}$ writes the bracket as $x - 3$ instead of $x + 3$, giving $16a + 8 = 20$ and $a = \\frac{12}{16}$. The choice $a = 5$ forgets the $+8$ and solves $4a = 20$.)',
    },
    {
      q: 'Where is the vertex of $y = 2(x + 7)^2 - 1$, and is the parabola at a minimum or a maximum there?',
      choices: [
        'Vertex $(7, -1)$, minimum',
        'Vertex $(-7, 1)$, minimum',
        'Vertex $(-7, -1)$, maximum',
        'Vertex $(-7, -1)$, minimum',
      ],
      answer: 3,
      solution:
        'Rewrite the bracket as $x - (-7)$, so $h = -7$ and $k = -1$: the vertex is $(-7, -1)$. Because $a = 2$ is positive the parabola opens upward, so the vertex is the LOWEST point — a minimum. Check with the neighbours: $y(-6) = 2(1) - 1 = 1$ and $y(-8) = 2(1) - 1 = 1$, both above $-1$ ✓. Check the vertex a second way by expanding: $2(x^2 + 14x + 49) - 1 = 2x^2 + 28x + 97$, so $x = -\\frac{28}{4} = -7$ ✓ and $y = 2(49) - 196 + 97 = -1$ ✓. (The choice $(7, -1)$ takes the $+7$ at face value instead of reading it as a shift LEFT. The choice $(-7, 1)$ flips $k$. The choice with "maximum" lets the negative height $-1$ decide which way the curve opens — but that is the job of $a$, and $a = 2 > 0$ opens upward.)',
    },
  ],
  // c4 — completing both squares on a general-form circle. One version runs
  // backwards from the radius to the missing constant; one hides a common factor
  // of $2$ in front of $x^2$ and $y^2$ that has to come out first.
  [
    {
      q: 'The equation $x^2 + y^2 - 6x + 8y - 11 = 0$ describes a circle. What are its center and radius?',
      choices: [
        'Center $(3, -4)$, radius $36$',
        'Center $(-3, 4)$, radius $6$',
        'Center $(3, -4)$, radius $6$',
        'Center $(3, -4)$, radius $\\sqrt{11}$',
      ],
      answer: 2,
      solution:
        'Complete both squares: $x^2 - 6x = (x-3)^2 - 9$ and $y^2 + 8y = (y+4)^2 - 16$. Substituting gives $(x-3)^2 + (y+4)^2 - 9 - 16 - 11 = 0$, so $(x-3)^2 + (y+4)^2 = 36$. The center is $(3, -4)$ and the radius is $\\sqrt{36} = 6$. Check by substituting a point that must be on the circle — six units right of the center is $(9, -4)$: $81 + 16 - 54 - 32 - 11 = 97 - 97 = 0$ ✓. Check the top of the circle as well, $(3, 2)$: $9 + 4 - 18 + 16 - 11 = 29 - 29 = 0$ ✓. (The choice with radius $36$ stops at $r^2$ and never takes the square root. The choice $(-3, 4)$ flips both center coordinates: $(x-3)^2$ means the center is at $+3$. The choice with radius $\\sqrt{11}$ moves the $-11$ across but never adds back the $9$ and the $16$ that building the two squares used up.)',
    },
    {
      q: 'The circle $x^2 + y^2 + 2x - 10y + c = 0$ has radius $7$. What is $c$?',
      choices: ['$c = 23$', '$c = 19$', '$c = -23$', '$c = 55$'],
      answer: 2,
      solution:
        'Complete both squares while carrying the unknown along: $(x+1)^2 - 1 + (y-5)^2 - 25 + c = 0$, so $(x+1)^2 + (y-5)^2 = 26 - c$. The right-hand side is $r^2 = 49$, so $26 - c = 49$ and $c = 26 - 49 = -23$. Check forward: with $c = -23$ the equation is $x^2 + y^2 + 2x - 10y - 23 = 0$, whose center is $(-1, 5)$; the point seven units to the right, $(6, 5)$, gives $36 + 25 + 12 - 50 - 23 = 73 - 73 = 0$ ✓. Check a point above the center too, $(-1, 12)$: $1 + 144 - 2 - 120 - 23 = 145 - 145 = 0$ ✓. (The choice $c = 23$ loses a sign moving $c$ across, and it would give $r^2 = 26 - 23 = 3$, a radius of $\\sqrt{3}$. The choice $c = 19$ sets $26 - c$ equal to the radius $7$ instead of to $r^2 = 49$. The choice $c = 55$ uses the whole coefficients $2$ and $10$ rather than their halves, computing $4 + 100 - c = 49$; the halving is what completing the square is made of.)',
    },
    {
      q: 'The equation $2x^2 + 2y^2 - 24x + 4y + 24 = 0$ describes a circle. What are its center and radius?',
      choices: [
        'Center $(6, -1)$, radius $5$',
        'Center $(-6, 1)$, radius $5$',
        'Center $(12, -2)$, radius $5$',
        'Center $(6, -1)$, radius $25$',
      ],
      answer: 0,
      solution:
        'Completing the square only works when $x^2$ and $y^2$ each have a coefficient of $1$, so divide the whole equation by $2$ first: $x^2 + y^2 - 12x + 2y + 12 = 0$. Now $x^2 - 12x = (x-6)^2 - 36$ and $y^2 + 2y = (y+1)^2 - 1$, giving $(x-6)^2 + (y+1)^2 = 36 + 1 - 12 = 25$. The center is $(6, -1)$ and the radius is $5$. Check in the ORIGINAL equation with a point five units above the center, $(6, 4)$: $2(36) + 2(16) - 144 + 16 + 24 = 72 + 32 - 144 + 16 + 24 = 0$ ✓. Check a point five to the left, $(1, -1)$: $2 + 2 - 24 - 4 + 24 = 0$ ✓. (The choice $(-6, 1)$ flips both center coordinates. The choice $(12, -2)$ halves the coefficients $-24$ and $4$ without dividing by $2$ first, so every shift comes out twice as large as it should be. The choice with radius $25$ reports $r^2$ instead of $r$.)',
    },
  ],
  // c5 — the discriminant as a counter of $x$-intercepts. One version runs
  // backwards to the constant that makes the graph just touch; one asks how often
  // a parabola meets a LINE, so the rearrangement has to happen first.
  [
    {
      q: 'How many $x$-intercepts does the graph of $y = 3x^2 - 5x + 4$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 0,
      solution:
        'The discriminant is $b^2 - 4ac = (-5)^2 - 4(3)(4) = 25 - 48 = -23$, which is negative, so the equation $3x^2 - 5x + 4 = 0$ has no real solutions and the graph never reaches the $x$-axis: zero intercepts. Check by completing the square, with no discriminant at all: $3\\left(x^2 - \\frac{5}{3}x\\right) + 4 = 3\\left(x - \\frac{5}{6}\\right)^2 - \\frac{25}{12} + 4 = 3\\left(x - \\frac{5}{6}\\right)^2 + \\frac{23}{12}$, which is at least $\\frac{23}{12} \\approx 1.92$ for every real $x$ ✓ — the whole curve floats above the axis. Spot-check the lowest point: $y\\left(\\frac{5}{6}\\right) = 3 \\cdot \\frac{25}{36} - \\frac{25}{6} + 4 = \\frac{25}{12} - \\frac{50}{12} + \\frac{48}{12} = \\frac{23}{12}$ ✓. (The choice $1$ confuses a NEGATIVE discriminant with a ZERO one — zero is the case where the $\\pm$ adds nothing and the vertex just touches the axis. The choice $2$ computes $4ac$ as $4a = 12$, leaving out the $c$, which turns $-23$ into $25 - 12 = 13 > 0$. "Infinitely many" belongs to an identity like $0 = 0$; a real quadratic meets a line at most twice.)',
    },
    {
      q: 'For which value of $k$ does the graph of $y = x^2 - 12x + k$ touch the $x$-axis exactly once?',
      choices: ['$k = 6$', '$k = 144$', '$k = 36$', '$k = -36$'],
      answer: 2,
      solution:
        'Touching exactly once means the discriminant is zero: $(-12)^2 - 4(1)(k) = 144 - 4k = 0$, so $4k = 144$ and $k = 36$. Check by recognising the perfect square: $x^2 - 12x + 36 = (x-6)^2$, which is $0$ only at $x = 6$ ✓ — one touch, at $(6, 0)$. Check with the vertex instead: the vertex of $y = x^2 - 12x + 36$ is at $x = \\frac{12}{2} = 6$, where $y = 36 - 72 + 36 = 0$ ✓, so the lowest point sits exactly on the axis. (The choice $k = 6$ gives WHERE the touch happens, not the $k$ that puts it there; $y = x^2 - 12x + 6$ has discriminant $144 - 24 = 120 > 0$, so it crosses twice. The choice $k = 144$ leaves the $4$ out of $4ac$, solving $144 - k = 0$. The choice $k = -36$ flips the sign, and $x^2 - 12x - 36$ has discriminant $144 + 144 = 288 > 0$ — two crossings, not one.)',
    },
    {
      q: 'How many times does the parabola $y = x^2 + 5$ cross the line $y = 4x$?',
      choices: ['$2$', '$1$', 'Infinitely many', '$0$'],
      answer: 3,
      solution:
        'Set the two heights equal FIRST: $x^2 + 5 = 4x$, which rearranges to $x^2 - 4x + 5 = 0$. The discriminant is $(-4)^2 - 4(1)(5) = 16 - 20 = -4 < 0$, so there is no real $x$ where they meet: they never cross. Check by completing the square: $x^2 - 4x + 5 = (x-2)^2 + 1$, which is at least $1$ for every real $x$ ✓ — the parabola always sits at least one unit above the line. Check that gap numerically at its narrowest, $x = 2$: the parabola is at $4 + 5 = 9$ and the line is at $8$, a gap of exactly $1$ ✓; at $x = 0$ the gap is $5 - 0 = 5$, and at $x = 4$ it is $21 - 16 = 5$. (The choice $2$ writes $(x-2)^2 = -1$ and then unsquares as though the $-1$ were a $1$, producing $x = 1$ and $x = 3$; at $x = 1$ the two heights are $6$ and $4$ ✗, and at $x = 3$ they are $14$ and $12$ ✗. The choice $1$ uses $c = 4$ from the line instead of the $5$ that ends up in the rearranged equation, giving a discriminant of $16 - 16 = 0$. "Infinitely many" would need the line to lie along the curve, which a straight line cannot do.)',
    },
  ],
  // c6 — matching a drawn circle to an equation. One version asks for the
  // expanded form instead of the centre-radius form; one puts the centre on the
  // $y$-axis, so one bracket collapses to a bare $x^2$.
  [
    {
      q: 'The circle in the graph below has center $C$. Which equation describes it?',
      fig: {
        view: [-2, -8, 10, 4],
        grid: true,
        elems: [
          { t: 'circle', c: [4, -2], r: 4 },
          { t: 'point', p: [4, -2], label: 'C', dx: 8, dy: -8 },
        ],
      },
      choices: [
        '$(x + 4)^2 + (y - 2)^2 = 16$',
        '$(x - 4)^2 + (y + 2)^2 = 16$',
        '$(x - 4)^2 + (y + 2)^2 = 4$',
        '$(x - 2)^2 + (y + 4)^2 = 16$',
      ],
      answer: 1,
      solution:
        'The center $C$ is at $(4, -2)$, and the circle stretches from $x = 0$ to $x = 8$, so it is $8$ wide and the radius is $4$. Centre-radius form is $(x-h)^2 + (y-k)^2 = r^2$, and $y - (-2)$ becomes $y + 2$, so the equation is $(x-4)^2 + (y+2)^2 = 16$. Check a point forward — the top of the circle is $(4, 2)$, and $(4-4)^2 + (2+2)^2 = 0 + 16 = 16$ ✓. Check the bottom too, $(4, -6)$: $0 + (-6+2)^2 = 16$ ✓. (The first choice flips both signs inside the brackets, which describes the circle centred at $(-4, 2)$ instead. The third choice writes $r$ where $r^2$ belongs, describing a much smaller circle of radius $2$. The last choice swaps the two center coordinates, sliding the centre to $(2, -4)$.)',
    },
    {
      q: 'The circle shown has center $C$. Which equation describes it in expanded form?',
      fig: {
        view: [-8, -4, 4, 8],
        grid: true,
        elems: [
          { t: 'circle', c: [-2, 2], r: 3 },
          { t: 'point', p: [-2, 2], label: 'C', dx: 8, dy: -8 },
        ],
      },
      choices: [
        '$x^2 + y^2 - 4x + 4y - 1 = 0$',
        '$x^2 + y^2 + 4x - 4y + 17 = 0$',
        '$x^2 + y^2 + 4x - 4y + 5 = 0$',
        '$x^2 + y^2 + 4x - 4y - 1 = 0$',
      ],
      answer: 3,
      solution:
        'Read the picture first: the center is $(-2, 2)$ and the circle runs from $x = -5$ to $x = 1$, so the radius is $3$. That makes the centre-radius form $(x+2)^2 + (y-2)^2 = 9$. Now expand: $x^2 + 4x + 4 + y^2 - 4y + 4 = 9$, and moving the $9$ across gives $x^2 + y^2 + 4x - 4y - 1 = 0$. Check with a point on the circle — the right edge is $(1, 2)$: $1 + 4 + 4 - 8 - 1 = 9 - 9 = 0$ ✓. Check the top, $(-2, 5)$: $4 + 25 - 8 - 20 - 1 = 29 - 29 = 0$ ✓. (The first choice flips the signs of the linear terms, which is the circle centred at $(2, -2)$. The choice ending $+17$ adds the $9$ instead of subtracting it, giving $4 + 4 - 17 = -9$ on the right — a negative $r^2$, which is no circle at all. The choice ending $+5$ uses $r = 3$ where $r^2 = 9$ belongs, leaving $4 + 4 - 5 = 3$ and a radius of $\\sqrt{3}$.)',
    },
    {
      q: 'Which equation describes the circle drawn below?',
      fig: {
        view: [-6, -9, 6, 3],
        grid: true,
        elems: [
          { t: 'circle', c: [0, -4], r: 3 },
          { t: 'point', p: [0, -4], label: 'C', dx: 8, dy: -8 },
        ],
      },
      choices: [
        '$x^2 + (y - 4)^2 = 9$',
        '$(x + 4)^2 + y^2 = 9$',
        '$x^2 + (y + 4)^2 = 9$',
        '$x^2 + (y + 4)^2 = 3$',
      ],
      answer: 2,
      solution:
        'The center sits on the $y$-axis at $(0, -4)$, and the circle reaches from $y = -7$ up to $y = -1$, so the radius is $3$. Centre-radius form gives $(x-0)^2 + (y+4)^2 = 9$, and $(x-0)^2$ is just $x^2$: the equation is $x^2 + (y+4)^2 = 9$. Check the right edge, $(3, -4)$: $9 + 0 = 9$ ✓. Check the bottom, $(0, -7)$: $0 + (-7+4)^2 = 9$ ✓. (The choice $x^2 + (y-4)^2 = 9$ flips the sign of the centre height, drawing the circle four units ABOVE the axis instead of four below. The choice $(x+4)^2 + y^2 = 9$ swaps the roles of the coordinates and puts the centre at $(-4, 0)$. The last choice writes $r$ where $r^2$ belongs; that circle would have radius $\\sqrt{3} \\approx 1.73$ and would not reach the gridline at $y = -7$.)',
    },
  ],
  // c7 — the value at the vertex. One version maximises a downward parabola; one
  // runs backwards from a stated minimum to the missing constant. In all three the
  // trap is answering WHERE instead of WHAT.
  [
    {
      q: 'What is the minimum value of $y = x^2 + 10x + 21$?',
      choices: ['$21$', '$-5$', '$-4$', '$4$'],
      answer: 2,
      solution:
        'Since $a = 1 > 0$ the parabola opens upward, so the smallest $y$ happens at the vertex: $x = -\\frac{10}{2} = -5$, and $y = 25 - 50 + 21 = -4$. The minimum VALUE is $-4$. Check by completing the square: $x^2 + 10x + 21 = (x+5)^2 - 25 + 21 = (x+5)^2 - 4$, and $(x+5)^2 \\ge 0$, so the expression never drops below $-4$ ✓. Check the neighbours: $y(-4) = 16 - 40 + 21 = -3$ and $y(-6) = 36 - 60 + 21 = -3$, both larger ✓. (The choice $21$ reads off the constant term, which is only the value at $x = 0$. The choice $-5$ is WHERE the minimum happens, not what it is. The choice $4$ subtracts backwards, computing $25 - 21$ instead of $21 - 25$.)',
    },
    {
      q: 'What is the maximum value of $y = -3x^2 + 12x - 5$?',
      choices: ['$2$', '$-5$', '$-1$', '$7$'],
      answer: 3,
      solution:
        'The leading coefficient is negative, so the parabola opens downward and the vertex is its highest point: $x = -\\frac{12}{2(-3)} = 2$, and $y = -3(4) + 24 - 5 = -12 + 24 - 5 = 7$. The maximum value is $7$. Check by completing the square: $-3(x^2 - 4x) - 5 = -3\\left[(x-2)^2 - 4\\right] - 5 = -3(x-2)^2 + 12 - 5 = -3(x-2)^2 + 7$, and $-3(x-2)^2 \\le 0$, so the expression never passes $7$ ✓. Check the neighbours: $y(1) = -3 + 12 - 5 = 4$ and $y(3) = -27 + 36 - 5 = 4$, both smaller ✓. (The choice $2$ is WHERE the maximum happens. The choice $-5$ is the constant term, the height at $x = 0$, far below the top. The choice $-1$ forgets that the $-3$ out front multiplies the $4$ added inside, writing $-3(x-2)^2 + 4 - 5$.)',
    },
    {
      q: 'The parabola $y = x^2 - 4x + c$ has minimum value $9$. What is $c$?',
      choices: ['$c = 13$', '$c = 9$', '$c = 5$', '$c = 11$'],
      answer: 0,
      solution:
        'The vertex is at $x = \\frac{4}{2} = 2$ whatever $c$ is, because $c$ only slides the curve up and down. The height there is $y(2) = 4 - 8 + c = c - 4$, and that has to equal $9$, so $c = 13$. Check by completing the square on the finished parabola: $x^2 - 4x + 13 = (x-2)^2 - 4 + 13 = (x-2)^2 + 9$, whose smallest value is $9$, reached at $x = 2$ ✓. Check the neighbours: $y(1) = 1 - 4 + 13 = 10$ and $y(3) = 9 - 12 + 13 = 10$, both above $9$ ✓. (The choice $c = 9$ treats the constant term as the minimum, but $x^2 - 4x + 9 = (x-2)^2 + 5$ bottoms out at $5$ ✗. The choice $c = 5$ solves $c + 4 = 9$, losing the sign of the $-8$. The choice $c = 11$ completes the square as $(x-2)^2 + c - 2$, subtracting half of the $4$ instead of the whole $4$; $x^2 - 4x + 11$ really bottoms out at $7$ ✗.)',
    },
  ],
  // c8 — where a point sits relative to a circle. One version reverses the
  // question: the point is known to be ON the circle and a missing coordinate has
  // to be found, which brings back the $\pm$.
  [
    {
      q: 'Is the point $(-3, 1)$ inside, on, or outside the circle $(x + 1)^2 + (y - 4)^2 = 25$?',
      choices: ['Inside', 'On the circle', 'Outside', 'It cannot be determined'],
      answer: 0,
      solution:
        'Substitute the point into the left-hand side: $(-3+1)^2 + (1-4)^2 = (-2)^2 + (-3)^2 = 4 + 9 = 13$. That is less than $r^2 = 25$, so the point is INSIDE. Check with a distance instead: the center is $(-1, 4)$, and the point is $2$ to the left and $3$ down, so its distance is $\\sqrt{4+9} = \\sqrt{13} \\approx 3.606$, comfortably under the radius $5$ ✓. Check a point that really is on the circle for comparison — $(4, 4)$ gives $(4+1)^2 + 0 = 25$ ✓, so the test is working. (The choice "On the circle" comes from subtracting where the equation adds, using $(-3-1)^2 = 16$ instead of $4$; that lands on $16 + 9 = 25$ exactly, which is why this trap is so tempting. The choice "Outside" flips both signs, computing $16 + 25 = 41 > 25$. "It cannot be determined" is never right here: one substitution settles it.)',
    },
    {
      q: 'Is the point $(3, 7)$ inside, on, or outside the circle $(x - 1)^2 + (y - 3)^2 = 16$?',
      choices: ['On the circle', 'Outside', 'Inside', 'It cannot be determined'],
      answer: 1,
      solution:
        'Substitute: $(3-1)^2 + (7-3)^2 = 4 + 16 = 20$, which is bigger than $r^2 = 16$, so the point is OUTSIDE. Check with the distance: the center is $(1, 3)$ and the point is $2$ across and $4$ up, so the distance is $\\sqrt{20} \\approx 4.472$, more than the radius $4$ ✓. Check the nearest point of the circle for a feel — straight up from the center is $(1, 7)$, which is on the circle, and $(3, 7)$ sits two units further out ✓. (The choice "Inside" compares the DISTANCE $\\sqrt{20} \\approx 4.47$ with $r^2 = 16$; you must compare like with like — either $20$ against $16$, or $4.47$ against $4$. The choice "On the circle" adds only the vertical piece, $(7-3)^2 = 16$, and forgets that the point is also $2$ across. "It cannot be determined" gives up on a question one substitution answers.)',
    },
    {
      q: 'The point $(6, k)$ lies on the circle $(x - 2)^2 + (y + 1)^2 = 25$. What are the possible values of $k$?',
      choices: ['$k = 2$ only', '$k = 3$ or $k = -3$', '$k = 4$ or $k = -2$', '$k = 2$ or $k = -4$'],
      answer: 3,
      solution:
        'Put $x = 6$ into the equation: $(6-2)^2 + (k+1)^2 = 25$, so $16 + (k+1)^2 = 25$ and $(k+1)^2 = 9$. Unsquaring offers two numbers: $k + 1 = 3$ gives $k = 2$, and $k + 1 = -3$ gives $k = -4$. Check both: $(6, 2)$ gives $16 + 9 = 25$ ✓ and $(6, -4)$ gives $16 + 9 = 25$ ✓. Check with symmetry, a completely different route: the center is $(2, -1)$, and the two answers sit $3$ above and $3$ below that height — exactly the mirror pair a vertical line through a circle must cut ✓. (The choice $k = 2$ only drops the minus branch of the square root, losing half the answer. The choice $k = 3$ or $k = -3$ stops at $k + 1 = \\pm 3$ and never subtracts the $1$. The choice $k = 4$ or $k = -2$ undoes the shift the wrong way, computing $k = 1 \\pm 3$ instead of $k = -1 \\pm 3$.)',
    },
  ],
  // c9 — the axis of symmetry from two points at the same height. One version
  // pushes on to the vertex; one asks for the coefficient $b$ that puts the axis
  // there, so the halving has to be undone.
  [
    {
      q: 'A parabola passes through the points $(-3, 8)$ and $(7, 8)$. What is its axis of symmetry?',
      choices: ['$x = 2$', '$x = 5$', '$y = 8$', '$x = -5$'],
      answer: 0,
      solution:
        'The two points sit at the same height, so they are mirror twins across the axis of symmetry, and the axis runs exactly midway between them: $x = \\frac{-3+7}{2} = 2$. Check the distances: from $x = 2$ the point $x = -3$ is $5$ to the left and $x = 7$ is $5$ to the right ✓ — equal, as mirror twins must be. Check by building a parabola with that axis and testing both points: $y = \\frac{1}{5}(x-2)^2 + 3$ gives $\\frac{1}{5}(25) + 3 = 8$ at $x = -3$ ✓ and $\\frac{1}{5}(25) + 3 = 8$ at $x = 7$ ✓ — one axis, both points, same height. (The choice $x = 5$ reports half the horizontal gap, which is a distance, not a place — the gap is $10$, so $5$ tells you how far the twins sit from the axis, not where the axis is. The choice $y = 8$ is the horizontal line THROUGH the two points; the axis of symmetry of a parabola like this is vertical. The choice $x = -5$ subtracts instead of adds, computing $\\frac{-3-7}{2}$.)',
    },
    {
      q: 'A parabola passes through $(-5, 3)$ and $(1, 3)$, and its vertex is at height $-6$. Where is the vertex?',
      choices: ['$(-2, 3)$', '$(2, -6)$', '$(-3, -6)$', '$(-2, -6)$'],
      answer: 3,
      solution:
        'The two given points are at the same height, so the axis of symmetry is midway between them: $x = \\frac{-5+1}{2} = -2$. The vertex sits on that axis, and the problem hands you its height, $-6$, so the vertex is $(-2, -6)$. Check by building the parabola: $y = a(x+2)^2 - 6$ through $(1, 3)$ gives $9a - 6 = 3$, so $a = 1$; then at $x = -5$, $y = (-3)^2 - 6 = 3$ ✓ — the other point comes out right on its own, which is the real test. Check the distances: $-5$ and $1$ are both $3$ units from $-2$ ✓. (The choice $(-2, 3)$ has the right axis but uses the shared height $3$ instead of the vertex height $-6$; those two points are well above the bottom. The choice $(2, -6)$ flips the sign of the midpoint. The choice $(-3, -6)$ uses half the gap, $\\frac{6}{2} = 3$, with a minus sign in front, rather than the midpoint of the two positions.)',
    },
    {
      q: 'The parabola $y = x^2 + bx + c$ passes through $(2, 5)$ and $(8, 5)$. What is $b$?',
      choices: ['$b = 10$', '$b = -5$', '$b = -10$', '$b = 5$'],
      answer: 2,
      solution:
        'Equal heights mean the axis of symmetry is midway between the two $x$-values: $x = \\frac{2+8}{2} = 5$. For $y = x^2 + bx + c$ the axis is at $x = -\\frac{b}{2}$, so $-\\frac{b}{2} = 5$ and $b = -10$. Check without ever mentioning symmetry: with $b = -10$, $y(2) = 4 - 20 + c = c - 16$ and $y(8) = 64 - 80 + c = c - 16$ — the same height whatever $c$ is ✓, exactly as the problem requires. Check that a rival fails: with $b = 10$, $y(2) = 24 + c$ and $y(8) = 144 + c$, nowhere near equal ✗. (The choice $b = 10$ loses the minus sign in $-\\frac{b}{2a}$. The choice $b = -5$ forgets the $2$ underneath, reading $b$ as the negative of the axis. The choice $b = 5$ reports the axis of symmetry itself, which is not what the question asked for.)',
    },
  ],
  // c10 — tangency as a distance. One version measures to the $x$-axis, one to a
  // horizontal line that is not an axis, and one runs backwards from the radius to
  // the centre.
  [
    {
      q: 'A circle with center $(-6, 2)$ is tangent to the $x$-axis (it touches the axis at exactly one point). What is its equation?',
      choices: [
        '$(x + 6)^2 + (y - 2)^2 = 36$',
        '$(x + 6)^2 + (y - 2)^2 = 4$',
        '$(x - 6)^2 + (y + 2)^2 = 4$',
        '$(x + 6)^2 + (y - 2)^2 = 2$',
      ],
      answer: 1,
      solution:
        'The $x$-axis is horizontal, so the distance from the center down to it is the VERTICAL gap: from $y = 2$ to $y = 0$ is $2$. Tangent means the circle just barely reaches the axis, so $r = 2$ and $r^2 = 4$, giving $(x+6)^2 + (y-2)^2 = 4$. Check the touch point $(-6, 0)$: $0 + (0-2)^2 = 4$ ✓. Check that it really touches only once: setting $y = 0$ leaves $(x+6)^2 = 0$, whose only solution is $x = -6$ ✓ — one point, not two. (The choice with $36$ measures to the wrong axis, using the horizontal coordinate $-6$; that circle would be tangent to the $y$-axis instead. The choice $(x-6)^2 + (y+2)^2 = 4$ flips both center signs. The choice with $2$ on the right writes $r$ where $r^2$ belongs.)',
    },
    {
      q: 'A circle with center $(5, -4)$ is tangent to the line $y = -1$. What is its equation?',
      choices: [
        '$(x - 5)^2 + (y + 4)^2 = 16$',
        '$(x - 5)^2 + (y + 4)^2 = 9$',
        '$(x - 5)^2 + (y + 4)^2 = 25$',
        '$(x + 5)^2 + (y - 4)^2 = 9$',
      ],
      answer: 1,
      solution:
        'The line $y = -1$ is horizontal, so measure straight up from the center: from $y = -4$ to $y = -1$ is $|-1 - (-4)| = 3$ units. Tangent means the radius equals that distance, so $r = 3$ and $r^2 = 9$: $(x-5)^2 + (y+4)^2 = 9$. Check the touch point $(5, -1)$: $0 + (-1+4)^2 = 9$ ✓. Check that the touch is single: setting $y = -1$ gives $(x-5)^2 + 9 = 9$, so $(x-5)^2 = 0$ and $x = 5$ only ✓. (The choice with $16$ measures to the $x$-axis, using the $4$, and ignores that the tangent line is $y = -1$, three units higher. The choice with $25$ measures horizontally to the $y$-axis, using the $5$ — the wrong direction entirely for a horizontal line. The last choice flips both center signs.)',
    },
    {
      q: 'A circle of radius $5$ is tangent to the $y$-axis, and its center is the point $(h, 3)$ with $h < 0$. What is its equation?',
      choices: [
        '$(x + 5)^2 + (y - 3)^2 = 25$',
        '$(x - 5)^2 + (y - 3)^2 = 25$',
        '$(x + 5)^2 + (y - 3)^2 = 5$',
        '$(x + 3)^2 + (y - 5)^2 = 25$',
      ],
      answer: 0,
      solution:
        'The $y$-axis is vertical, so the distance from $(h, 3)$ to it is the HORIZONTAL gap, $|h|$. Tangency makes that equal the radius: $|h| = 5$, so $h = 5$ or $h = -5$ — and the problem says $h < 0$, so $h = -5$. The center is $(-5, 3)$ and $r^2 = 25$, giving $(x+5)^2 + (y-3)^2 = 25$. Check the touch point $(0, 3)$: $(0+5)^2 + 0 = 25$ ✓. Check it is a single touch: setting $x = 0$ leaves $(y-3)^2 = 0$, so $y = 3$ only ✓. (The choice $(x-5)^2 + (y-3)^2 = 25$ keeps the positive branch and ignores the condition $h < 0$; that circle is tangent to the $y$-axis too, but on the other side. The choice with $5$ on the right writes $r$ where $r^2$ belongs. The last choice swaps the two center coordinates.)',
    },
  ],
  // c11 — counting $x$-intercepts straight from vertex form, no expanding. One
  // version has the vertex ON the axis; one reverses the question and asks which
  // $k$ produces two crossings.
  [
    {
      q: 'How many $x$-intercepts does $y = -3(x + 4)^2 - 2$ have?',
      choices: ['$2$', '$0$', '$1$', 'It cannot be determined without expanding'],
      answer: 1,
      solution:
        'The vertex is $(-4, -2)$, which is BELOW the $x$-axis, and $a = -3 < 0$ means the parabola opens downward from there — so it only ever goes lower. It never reaches the axis: zero intercepts. Check with algebra: $-3(x+4)^2 \\le 0$ for every real $x$, so $y \\le -2 < 0$ always ✓. Check with the discriminant after expanding: $-3(x^2 + 8x + 16) - 2 = -3x^2 - 24x - 50$, and $(-24)^2 - 4(-3)(-50) = 576 - 600 = -24 < 0$ ✓, no real roots. (The choice $2$ assumes every parabola crosses twice. The choice $1$ imagines the vertex touching the axis, which only happens when the vertex height is exactly $0$ — here it is $-2$. The last choice is tempting but wrong: vertex form answers the question faster than expanding does, since it hands you the vertex and the direction at a glance.)',
    },
    {
      q: 'How many $x$-intercepts does $y = 5(x - 2)^2$ have?',
      choices: ['$0$', '$2$', '$1$', 'Infinitely many'],
      answer: 2,
      solution:
        'There is no constant on the end, so the vertex height is $0$: the vertex is $(2, 0)$, sitting exactly ON the $x$-axis. Since $a = 5 > 0$ the rest of the curve climbs away from it, so the axis is touched at exactly one point, $(2, 0)$. Check algebraically: $5(x-2)^2 = 0$ forces $(x-2)^2 = 0$, and only $0$ squares to $0$, so $x = 2$ is the lone solution ✓. Check with the discriminant: expanding gives $5x^2 - 20x + 20$, and $(-20)^2 - 4(5)(20) = 400 - 400 = 0$ ✓ — the one-solution case. (The choice $0$ reads the missing "$+k$" as meaning the curve floats clear of the axis, when in fact it means the vertex is planted on it. The choice $2$ comes from the habit that every quadratic has two roots — here the two roots coincide at $x = 2$, and the graph meets the axis at only ONE point. "Infinitely many" would need the curve to lie along the axis, which a parabola never does.)',
    },
    {
      q: 'For which values of $k$ does $y = (x - 3)^2 + k$ have exactly two $x$-intercepts?',
      choices: ['$k < 0$', '$k > 0$', '$k = 0$', '$k > 3$'],
      answer: 0,
      solution:
        'The vertex is $(3, k)$ and the parabola opens upward, so it crosses the axis twice exactly when the vertex is strictly below the axis: $k < 0$. Solving directly agrees: $(x-3)^2 = -k$ has two solutions precisely when $-k > 0$, that is $k < 0$, and then $x = 3 \\pm \\sqrt{-k}$. Check the three cases with numbers: $k = -4$ gives $x = 3 \\pm 2$, so $x = 1$ and $x = 5$ — two ✓; $k = 0$ gives only $x = 3$ — one ✓; $k = 4$ gives $(x-3)^2 = -4$, impossible for a real $x$ — none ✓. (The choice $k > 0$ lifts the vertex above the axis, where the curve never comes down to meet it. The choice $k = 0$ is the borderline case with exactly ONE crossing, not two. The choice $k > 3$ mixes up the two numbers in vertex form: the $3$ says where the vertex is left-to-right, while $k$ says how high it sits.)',
    },
  ],
  // c12 — recovering an equation from a drawn parabola. One version has a stretch
  // factor that only a second point reveals; one asks for $a$, $b$ and $c$ in
  // standard form, so the vertex form has to be expanded.
  [
    {
      q: 'Which equation describes the parabola graphed below?',
      fig: {
        view: [-2, -6, 8, 6],
        grid: true,
        elems: [{ t: 'parabola', a: 1, b: -6, c: 5 }],
      },
      choices: [
        '$y = (x + 3)^2 - 4$',
        '$y = -(x - 3)^2 - 4$',
        '$y = (x - 3)^2 - 4$',
        '$y = (x - 3)^2 + 4$',
      ],
      answer: 2,
      solution:
        'The lowest point of the curve is $(3, -4)$ and it opens upward, so vertex form is $y = a(x-3)^2 - 4$ with $a > 0$. Pin down $a$ with the $y$-intercept: the graph crosses the $y$-axis at $(0, 5)$, and $a(0-3)^2 - 4 = 9a - 4$, so $9a - 4 = 5$ gives $a = 1$. The equation is $y = (x-3)^2 - 4$. Check the $x$-intercepts, which the graph shows at $x = 1$ and $x = 5$: $(1-3)^2 - 4 = 0$ ✓ and $(5-3)^2 - 4 = 0$ ✓. (The choice $y = (x+3)^2 - 4$ puts the vertex at $x = -3$, on the left of the $y$-axis, while the drawn low point is clearly to the right. The choice $y = -(x-3)^2 - 4$ opens downward, so its curve would fall away instead of rising. The choice $y = (x-3)^2 + 4$ lifts the vertex four units ABOVE the axis, and that curve would never cross the $x$-axis at all.)',
    },
    {
      q: 'Which equation matches the parabola drawn below?',
      fig: {
        view: [-3, -4, 7, 7],
        grid: true,
        elems: [{ t: 'parabola', a: 2, b: -8, c: 6 }],
      },
      choices: [
        '$y = 2(x - 2)^2 - 2$',
        '$y = (x - 2)^2 - 2$',
        '$y = 2(x + 2)^2 - 2$',
        '$y = 2(x - 2)^2 + 2$',
      ],
      answer: 0,
      solution:
        'The lowest point is $(2, -2)$, so start from $y = a(x-2)^2 - 2$. The graph is narrow, so $a$ is not $1$ — find it from another point the curve clearly passes through, say $(4, 6)$: $a(4-2)^2 - 2 = 4a - 2$, and $4a - 2 = 6$ gives $a = 2$. The equation is $y = 2(x-2)^2 - 2$. Check the intercepts on the drawing: the curve crosses at $x = 1$, and $2(1-2)^2 - 2 = 0$ ✓; it crosses again at $x = 3$, and $2(3-2)^2 - 2 = 0$ ✓. (The choice $y = (x-2)^2 - 2$ assumes the standard width; at $x = 4$ it would give $4 - 2 = 2$, but the drawn curve is up at $6$ there ✗. The choice $y = 2(x+2)^2 - 2$ puts the vertex at $x = -2$, on the wrong side of the $y$-axis. The choice $y = 2(x-2)^2 + 2$ flips the vertex height to $+2$, and that curve never touches the $x$-axis, while this one plainly crosses it twice.)',
    },
    {
      q: 'The parabola shown has equation $y = ax^2 + bx + c$. What are $a$, $b$ and $c$?',
      fig: {
        view: [-3, -5, 7, 5],
        grid: true,
        elems: [{ t: 'parabola', a: -1, b: 4, c: 0 }],
      },
      choices: [
        '$a = 1$, $b = -4$, $c = 0$',
        '$a = -1$, $b = 4$, $c = 0$',
        '$a = -1$, $b = -4$, $c = 0$',
        '$a = -1$, $b = 4$, $c = 8$',
      ],
      answer: 1,
      solution:
        'The highest point is $(2, 4)$ and the curve opens downward, so $y = a(x-2)^2 + 4$ with $a < 0$. It passes through the origin, so $a(0-2)^2 + 4 = 4a + 4 = 0$, giving $a = -1$. Now expand carefully, distributing the minus over every term: $-(x^2 - 4x + 4) + 4 = -x^2 + 4x - 4 + 4 = -x^2 + 4x$. So $a = -1$, $b = 4$ and $c = 0$. Check with the axis of symmetry: $-\\frac{b}{2a} = -\\frac{4}{-2} = 2$ ✓, matching the peak on the drawing. Check a symmetric pair: $y(1) = -1 + 4 = 3$ and $y(3) = -9 + 12 = 3$ ✓, and the graph does sit at height $3$ above both. (The choice $a = 1$, $b = -4$ gets the crossings at $0$ and $4$ right but forgets the curve opens DOWNWARD; $y = x^2 - 4x$ has its vertex at $(2, -4)$, below the axis, the mirror of what is drawn. The choice $a = -1$, $b = -4$ fails to distribute the minus onto the $-4x$ inside the bracket. The choice with $c = 8$ fails to distribute it onto the $+4$ inside, getting $-x^2 + 4x + 4$ and then adding the outside $4$; but $c$ is the $y$-intercept, and the graph crosses the $y$-axis at $0$, not $8$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 14,
  challenge,
}
