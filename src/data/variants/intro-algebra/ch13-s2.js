// Introduction to Algebra chapter 13 — variations for sections 13.3 ("The
// Quadratic Formula") and 13.4 ("Applications and Extensions").
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text alone and then checked a
//    SECOND, independent way: roots go back into the ORIGINAL equation, and the
//    pair is also tested against sum $= -\frac{b}{a}$ and product $= \frac{c}{a}$.
//  - Six traps run through these sections: dropping the minus sign on $-b$,
//    letting $2a$ divide only part of the numerator, mis-signing $b^2 - 4ac$
//    when $c$ is negative, dividing by $2$ instead of by $2a$, never taking the
//    square root of the discriminant, and applying the formula before the
//    equation has been rearranged to $= 0$.
//  - Each distractor is ONE named mistake, and the number listed is the number
//    that mistake really produces — every one was recomputed, not assumed.
//  - No two choices inside an item name the same value.
//  - Word problems reject the impossible root out loud (a negative length, a
//    time before the throw) instead of quietly dropping it.

const s133 = [
  // p1 — read a coefficient off a quadratic
  [
    {
      q: 'In the equation $7x^2 + 4x - 9 = 0$, what is $c$?',
      choices: ['$4$', '$7$', '$9$', '$-9$'],
      answer: 3,
      solution:
        'Line the equation up with the pattern $ax^2 + bx + c = 0$. The constant term — the one with no $x$ attached — is $-9$, so $c = -9$ ✓. Check by rebuilding the equation from the three coefficients you claim it has: $a = 7$, $b = 4$, $c = -9$ gives $7x^2 + 4x - 9 = 0$ ✓, exactly what we started with. The sign always travels with the number; $c$ is $-9$, not $9$ with a minus floating nearby. (The choice $9$ drops that minus sign — put $c = 9$ into the discriminant and you get $16 - 252 = -236$, which claims there are no real solutions, when really $16 + 252 = 268$ gives two ✗. The choice $4$ reports $b$, the coefficient of $x$. The choice $7$ reports $a$, the coefficient of $x^2$.)',
    },
    {
      q: 'Written in the form $ax^2 + bx + c = 0$, what is $a$ for the equation $8 - 3x - x^2 = 0$?',
      choices: ['$-1$', '$1$', '$8$', '$-3$'],
      answer: 0,
      solution:
        'Two things are disguised here: the terms are written backwards, and the $x^2$ term has no visible coefficient. Reorder first: $-x^2 - 3x + 8 = 0$. A lone $-x^2$ means $-1$ copy of $x^2$, so $a = -1$ ✓. Check by multiplying back out: $a = -1$, $b = -3$, $c = 8$ rebuilds $-x^2 - 3x + 8 = 0$, and rearranging gives $8 - 3x - x^2 = 0$ ✓. (The choice $1$ sees the invisible coefficient but loses its minus sign; that would put the $2a$ underneath as $+2$ instead of $-2$ and flip both solutions. The choice $8$ grabs whichever number is written first, but that one is $c$. The choice $-3$ takes the coefficient of $x$, which is $b$.)',
    },
    {
      q: 'For which of these equations is $b = -8$?',
      choices: ['$x^2 + 8x - 3 = 0$', '$8x^2 - x + 5 = 0$', '$2x^2 - 8x + 1 = 0$', '$x^2 + 3x - 8 = 0$'],
      answer: 2,
      solution:
        'This runs the usual question backwards: instead of reading $b$ off an equation, hunt for the equation with the $b$ we want. $b$ is the coefficient of $x$, sign included. In $2x^2 - 8x + 1 = 0$ the $x$ term is $-8x$, so $b = -8$ ✓. Check the other three, which is the independent test: $x^2 + 8x - 3 = 0$ has $b = 8$ ✗, $8x^2 - x + 5 = 0$ has $b = -1$ ✗, and $x^2 + 3x - 8 = 0$ has $b = 3$ ✗. (The first choice tempts you if you match the digit $8$ and ignore the sign. The second choice reads the $8$ off the $x^2$ term, which is $a$. The last choice reads the $-8$ off the constant term, which is $c$.)',
    },
  ],
  // p2 — compute a discriminant
  [
    {
      q: 'What is the discriminant of $2x^2 - 7x + 3 = 0$?',
      choices: ['$73$', '$37$', '$25$', '$-25$'],
      answer: 2,
      solution:
        'Read off $a = 2$, $b = -7$, $c = 3$, then compute $b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25$ ✓. Check a second, independent way: $25$ is a perfect square, so the roots should be rational — and indeed $x = \\frac{7 \\pm 5}{4}$ gives $3$ and $\\frac{1}{2}$. Substituting $x = 3$ into the original equation: $18 - 21 + 3 = 0$ ✓, so the discriminant really did come out right. (The choice $73$ adds $4ac$ instead of subtracting it, $49 + 24$. The choice $37$ forgets the $a$ inside $4ac$ and computes $49 - 4(3) = 37$. The choice $-25$ subtracts in the wrong order, $4ac - b^2 = 24 - 49$; the $b^2$ comes first.)',
    },
    {
      q: 'The discriminant of $x^2 - 12x + c = 0$ is $64$. What is $c$?',
      choices: ['$80$', '$-20$', '$-52$', '$20$'],
      answer: 3,
      solution:
        'Write the discriminant with $c$ still unknown: $(-12)^2 - 4(1)(c) = 144 - 4c$. Set that equal to $64$: $144 - 4c = 64$, so $4c = 80$ and $c = 20$ ✓. Check forward with the actual number: the equation is $x^2 - 12x + 20 = 0$, whose discriminant is $144 - 80 = 64$ ✓. A second, independent confirmation: $\\sqrt{64} = 8$, so the roots are $\\frac{12 \\pm 8}{2} = 10$ and $2$, and $10 \\times 2 = 20 = c$ ✓ — the product of the roots matches. (The choice $-20$ adds $4ac$ instead of subtracting, solving $144 + 4c = 64$. The choice $80$ drops the $4$ and solves $144 - c = 64$. The choice $-52$ mis-squares $-12$ as $-144$, then solves $-144 - 4c = 64$.)',
    },
    {
      q: 'What is the discriminant of $5x^2 - 6x - 2 = 0$?',
      choices: ['$-4$', '$76$', '$44$', '$-76$'],
      answer: 1,
      solution:
        'Here $a = 5$, $b = -6$, $c = -2$. Then $b^2 - 4ac = 36 - 4(5)(-2) = 36 + 40 = 76$ ✓. The key move is that $c$ is negative, so $-4ac$ is a PLUS. Check independently: $76 > 0$ promises two real solutions, and $\\sqrt{76} \\approx 8.72$ gives $x \\approx \\frac{6 + 8.72}{10} \\approx 1.472$; putting that back into the original, $5(1.472)^2 - 6(1.472) - 2 \\approx 10.83 - 8.83 - 2 \\approx 0$ ✓. (The choice $-4$ treats $c$ as $+2$ and computes $36 - 40$ — that answer would wrongly announce no real solutions. The choice $44$ forgets the $a$ and computes $36 - 4(-2) = 44$. The choice $-76$ subtracts in the wrong order, $4ac - b^2 = -40 - 36$.)',
    },
  ],
  // p3 — formula with two rational roots
  [
    {
      q: 'Use the quadratic formula to solve $x^2 - 4x - 21 = 0$.',
      choices: ['$x = 3$ or $x = -7$', '$x = 9$ or $x = -1$', '$x = 52$ or $x = -48$', '$x = 7$ or $x = -3$'],
      answer: 3,
      solution:
        'With $a = 1$, $b = -4$, $c = -21$: the discriminant is $16 - 4(1)(-21) = 16 + 84 = 100$, and $-b = +4$. So $x = \\frac{4 \\pm 10}{2}$, giving $x = 7$ or $x = -3$ ✓. Check by substituting into the ORIGINAL equation: $49 - 28 - 21 = 0$ ✓ and $9 + 12 - 21 = 0$ ✓. Check a second, independent way with the shortcuts: the roots should sum to $-\\frac{b}{a} = 4$, and $7 + (-3) = 4$ ✓; they should multiply to $\\frac{c}{a} = -21$, and $7 \\times (-3) = -21$ ✓. (The choice $3$ or $-7$ uses $-b = -4$, dropping the minus that the formula puts in front of $b$; those two sum to $-4$, not $4$ ✗. The choice $9$ or $-1$ lets the $2$ underneath divide only the $\\pm 10$, computing $4 \\pm 5$ — the $2a$ divides the WHOLE numerator. The choice $52$ or $-48$ never takes the square root, using $\\frac{4 \\pm 100}{2}$.)',
    },
    {
      q: 'One solution of $x^2 + x - 30 = 0$ is $x = 5$. What is the other solution?',
      choices: ['$6$', '$-6$', '$-1$', '$30$'],
      answer: 1,
      solution:
        'You can get this without the formula. The two roots multiply to $\\frac{c}{a} = -30$, so the other root is $\\frac{-30}{5} = -6$ ✓. Check by substituting into the original equation: $(-6)^2 + (-6) - 30 = 36 - 6 - 30 = 0$ ✓. Check a second, independent way with the formula itself: the discriminant is $1 + 120 = 121$, so $x = \\frac{-1 \\pm 11}{2}$, giving $5$ and $-6$ ✓ — the same pair. (The choice $6$ takes the product of the roots as $+30$ and forgets that $c$ is negative; but $36 + 6 - 30 = 12 \\ne 0$ ✗. The choice $-1$ reports the SUM of the roots, $-\\frac{b}{a} = -1$, instead of the missing root. The choice $30$ reports $c$ itself.)',
    },
    {
      q: 'Solve $x^2 - 7x + 12 = 0$ with the quadratic formula.',
      choices: ['$x = -4$ or $x = -3$', '$x = 8$ or $x = 6$', '$x = 4$ or $x = 3$', 'There are no real solutions'],
      answer: 2,
      solution:
        'Here $a = 1$, $b = -7$, $c = 12$, so the discriminant is $49 - 48 = 1$ and $-b = 7$. Then $x = \\frac{7 \\pm 1}{2}$, giving $x = 4$ or $x = 3$ ✓. Check in the original equation: $16 - 28 + 12 = 0$ ✓ and $9 - 21 + 12 = 0$ ✓. Check a second, independent way: the roots must sum to $7$ and multiply to $12$, and $4 + 3 = 7$ ✓ with $4 \\times 3 = 12$ ✓. (The choice $-4$ or $-3$ uses $-b = -7$; that pair sums to $-7$ ✗. The choice $8$ or $6$ never divides by $2a$ at all, stopping at the numerator $7 \\pm 1$. The last choice comes from mis-squaring $b = -7$ as $-49$, which makes the discriminant $-49 - 48 = -97$ and falsely reports no solutions — squaring a negative gives a positive.)',
    },
  ],
  // p4 — count the real solutions
  [
    {
      q: 'How many real solutions does $x^2 - 10x + 25 = 0$ have?',
      choices: ['Two', 'One', 'None', 'Four'],
      answer: 1,
      solution:
        'Compute the discriminant: $(-10)^2 - 4(1)(25) = 100 - 100 = 0$. A zero discriminant means the $\\pm$ adds and subtracts nothing, so the two solutions collide into one: $x = \\frac{10}{2} = 5$ ✓. Check a second, independent way by factoring: half of $-10$ is $-5$ and $(-5)^2 = 25$, so the equation is $(x-5)^2 = 0$, and only $x = 5$ makes that true ✓. (The choice Two assumes every quadratic has two solutions — the discriminant is exactly the thing that decides. The choice None confuses "the $\\pm$ contributes nothing" with "nothing works"; $x = 5$ genuinely solves the equation. The choice Four confuses the number of solutions with something bigger than the degree: a quadratic can never have more than two.)',
    },
    {
      q: 'How many real solutions does $2x^2 - 5x - 4 = 0$ have?',
      choices: ['One', 'None', 'It cannot be determined without solving', 'Two'],
      answer: 3,
      solution:
        'The discriminant is $(-5)^2 - 4(2)(-4) = 25 + 32 = 57$. Since $c = -4$ is negative, $-4ac$ ADDS, and $57 > 0$ means two real solutions ✓. Check a second, independent way without the discriminant: at $x = 0$ the left side is $-4$, and at $x = 3$ it is $18 - 15 - 4 = -1$, but at $x = 4$ it is $32 - 20 - 4 = 8$. The expression goes from negative to positive between $3$ and $4$, so a root lives there; and at $x = -1$ it is $2 + 5 - 4 = 3$, positive, so a second root lives between $-1$ and $0$ ✓ — two roots found by hand. (The choice None comes from treating $c$ as $+4$ and computing $25 - 32 = -7$. The choice One assumes that a discriminant which is positive but not a perfect square yields a single irrational answer; it yields two, one for each sign of $\\pm\\sqrt{57}$. The choice "cannot be determined" gives up on the whole point of the discriminant, which is to count the solutions before you find them.)',
    },
    {
      q: 'For which of these equations is the discriminant negative?',
      choices: ['$x^2 + 3x + 7 = 0$', '$x^2 - 6x + 9 = 0$', '$x^2 + 5x - 1 = 0$', '$3x^2 + 5x + 2 = 0$'],
      answer: 0,
      solution:
        'Compute all four. For $x^2 + 3x + 7 = 0$: $9 - 28 = -19 < 0$ ✓ — negative, so no real solutions. For $x^2 - 6x + 9 = 0$: $36 - 36 = 0$. For $x^2 + 5x - 1 = 0$: $25 + 4 = 29$. For $3x^2 + 5x + 2 = 0$: $25 - 24 = 1$. Check the winner a second, independent way: $x^2 + 3x + 7 = \\left(x + \\frac{3}{2}\\right)^2 + \\frac{19}{4}$ by completing the square, and a square plus a positive number can never be $0$ ✓. (The choice $x^2 - 6x + 9$ tempts you because of the minus sign on $-6x$, but squaring erases it and the true value is $0$, not negative. The choice $x^2 + 5x - 1$ tempts you because $c$ is negative, but a negative $c$ makes $-4ac$ POSITIVE and pushes the discriminant up. The choice $3x^2 + 5x + 2$ is what you get if you forget to square $b$ and compute $5 - 24 = -19$; squaring first gives $25 - 24 = 1$, which is positive.)',
    },
  ],
  // p5 — the double root
  [
    {
      q: 'Solve $x^2 - 14x + 49 = 0$.',
      choices: ['$x = 7$ only', '$x = -7$ only', '$x = 7$ or $x = -7$', '$x = 14$ only'],
      answer: 0,
      solution:
        'The discriminant is $196 - 4(1)(49) = 196 - 196 = 0$, so there is exactly one solution: $x = \\frac{-b}{2a} = \\frac{14}{2} = 7$ ✓. Check in the original equation: $49 - 98 + 49 = 0$ ✓. Check a second, independent way: half of $-14$ is $-7$ and $(-7)^2 = 49$, so the left side is the perfect square $(x-7)^2$, a double root at $7$ ✓. (The choice $-7$ only uses $-b = -14$, dropping the minus the formula supplies; and $49 + 98 + 49 = 196 \\ne 0$ ✗. The choice $x = \\pm 7$ insists on two solutions, but $-7$ fails the same way. The choice $14$ only forgets to divide by $2a = 2$.)',
    },
    {
      q: 'Solve $4x^2 - 4x + 1 = 0$.',
      choices: ['$x = 2$ only', '$x = -\\frac{1}{2}$ only', '$x = \\pm\\frac{1}{2}$', '$x = \\frac{1}{2}$ only'],
      answer: 3,
      solution:
        'Read off $a = 4$, $b = -4$, $c = 1$. The discriminant is $16 - 4(4)(1) = 16 - 16 = 0$, so there is one solution: $x = \\frac{4}{2(4)} = \\frac{4}{8} = \\frac{1}{2}$ ✓. Check in the original equation: $4\\left(\\frac{1}{4}\\right) - 4\\left(\\frac{1}{2}\\right) + 1 = 1 - 2 + 1 = 0$ ✓. Check a second, independent way: $4x^2 - 4x + 1 = (2x-1)^2$, which is $0$ exactly when $2x = 1$ ✓. (The choice $2$ divides by $2$ instead of by $2a = 8$, computing $\\frac{4}{2}$; and $16 - 8 + 1 = 9 \\ne 0$ ✗. The choice $-\\frac{1}{2}$ uses $-b = -4$ on top. The choice $\\pm\\frac{1}{2}$ insists on two roots, but the $\\pm$ is multiplying $\\sqrt{0}$, which adds nothing.)',
    },
    {
      q: 'The equation $x^2 + bx + 36 = 0$ has exactly one solution, and $b$ is negative. What is that solution?',
      choices: ['$-6$', '$36$', '$6$', '$12$'],
      answer: 2,
      solution:
        'Exactly one solution means the discriminant vanishes: $b^2 - 4(1)(36) = 0$, so $b^2 = 144$ and $b = \\pm 12$. We are told $b$ is negative, so $b = -12$ and the equation is $x^2 - 12x + 36 = 0$. Its single root is $x = \\frac{12}{2} = 6$ ✓. Check in that equation: $36 - 72 + 36 = 0$ ✓. Check a second, independent way: $x^2 - 12x + 36 = (x-6)^2$, a perfect square with the double root $6$ ✓. (The choice $-6$ takes $b = +12$ and ignores the word "negative"; that is the root of $x^2 + 12x + 36 = 0$ instead. The choice $12$ forgets to divide by $2a = 2$. The choice $36$ reads the constant term as if it were the root, but $36^2 - 12(36) + 36 = 1296 - 432 + 36 = 900 \\ne 0$ ✗.)',
    },
  ],
  // p6 — solve and simplify a surd answer
  [
    {
      q: 'Solve $x^2 - 8x + 11 = 0$ and simplify.',
      choices: ['$x = 4 \\pm 2\\sqrt{5}$', '$x = -4 \\pm \\sqrt{5}$', '$x = 8 \\pm 2\\sqrt{5}$', '$x = 4 \\pm \\sqrt{5}$'],
      answer: 3,
      solution:
        'The discriminant is $64 - 44 = 20$, and $\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. So $x = \\frac{8 \\pm 2\\sqrt{5}}{2}$, and the $2$ divides BOTH terms of the numerator: $x = 4 \\pm \\sqrt{5}$ ✓. Check a second, independent way with the shortcuts: the roots should sum to $-\\frac{b}{a} = 8$, and $(4 + \\sqrt{5}) + (4 - \\sqrt{5}) = 8$ ✓; they should multiply to $\\frac{c}{a} = 11$, and $(4+\\sqrt{5})(4-\\sqrt{5}) = 16 - 5 = 11$ ✓. (The choice $4 \\pm 2\\sqrt{5}$ divides the $8$ by $2$ but leaves the root term alone; its roots multiply to $16 - 20 = -4$, not $11$ ✗. The choice $-4 \\pm \\sqrt{5}$ uses $-b = -8$. The choice $8 \\pm 2\\sqrt{5}$ never divides by $2a$ at all.)',
    },
    {
      q: 'Solve $x^2 + 10x + 13 = 0$ and simplify fully.',
      choices: ['$x = -5 \\pm 2\\sqrt{3}$', '$x = 5 \\pm 2\\sqrt{3}$', '$x = -5 \\pm 4\\sqrt{3}$', '$x = -10 \\pm 4\\sqrt{3}$'],
      answer: 0,
      solution:
        'The discriminant is $100 - 52 = 48$, and $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. So $x = \\frac{-10 \\pm 4\\sqrt{3}}{2} = -5 \\pm 2\\sqrt{3}$ ✓, dividing both terms of the numerator by $2$. Check a second, independent way: the sum should be $-\\frac{b}{a} = -10$, and $(-5 + 2\\sqrt{3}) + (-5 - 2\\sqrt{3}) = -10$ ✓; the product should be $13$, and $(-5)^2 - (2\\sqrt{3})^2 = 25 - 12 = 13$ ✓. (The choice $5 \\pm 2\\sqrt{3}$ uses $-b = +10$ when $b$ is already positive; its roots sum to $10$ ✗. The choice $-5 \\pm 4\\sqrt{3}$ divides only the $-10$ by $2$ and leaves $4\\sqrt{3}$ untouched. The choice $-10 \\pm 4\\sqrt{3}$ skips the division entirely.)',
    },
    {
      q: 'One solution of $x^2 + bx + 2 = 0$ is $x = 3 + \\sqrt{7}$, and $b$ is a real number. What is $b$?',
      choices: ['$6$', '$-6$', '$-3$', '$3$'],
      answer: 1,
      solution:
        'When the coefficients are rational, irrational roots come in conjugate pairs, so the other root is $3 - \\sqrt{7}$. Their sum is $6$, and the sum of the roots equals $-\\frac{b}{a} = -b$. So $-b = 6$ and $b = -6$ ✓. Check the product as an independent consistency test: $(3+\\sqrt{7})(3-\\sqrt{7}) = 9 - 7 = 2$, which matches $\\frac{c}{a} = 2$ ✓ — the given root really does belong to this family. Now substitute into $x^2 - 6x + 2$: $(3+\\sqrt{7})^2 = 9 + 6\\sqrt{7} + 7 = 16 + 6\\sqrt{7}$, and $16 + 6\\sqrt{7} - 6(3+\\sqrt{7}) + 2 = 16 + 6\\sqrt{7} - 18 - 6\\sqrt{7} + 2 = 0$ ✓. (The choice $6$ reports the sum of the roots and forgets that the sum equals $-b$, not $b$. The choice $-3$ uses only the given root and throws its $\\sqrt{7}$ away, treating the sum as $3$. The choice $3$ makes that same mistake and then also loses the sign flip.)',
    },
  ],
  // p7 — a leading coefficient other than 1
  [
    {
      q: 'Solve $3x^2 + 7x - 6 = 0$.',
      choices: [
        '$x = 2$ or $x = -9$',
        '$x = \\frac{2}{3}$ or $x = -3$',
        '$x = 3$ or $x = -\\frac{2}{3}$',
        '$x = -\\frac{1}{3}$ or $x = \\frac{3}{2}$',
      ],
      answer: 1,
      solution:
        'Here $a = 3$, $b = 7$, $c = -6$. The discriminant is $49 - 4(3)(-6) = 49 + 72 = 121$, and $\\sqrt{121} = 11$. The denominator is $2a = 6$, so $x = \\frac{-7 \\pm 11}{6}$, giving $x = \\frac{4}{6} = \\frac{2}{3}$ or $x = \\frac{-18}{6} = -3$ ✓. Check in the original equation: $3 \\cdot \\frac{4}{9} + 7 \\cdot \\frac{2}{3} - 6 = \\frac{4}{3} + \\frac{14}{3} - 6 = 6 - 6 = 0$ ✓, and $27 - 21 - 6 = 0$ ✓. Check a second way: the roots should sum to $-\\frac{7}{3}$, and $\\frac{2}{3} - 3 = -\\frac{7}{3}$ ✓; they should multiply to $\\frac{-6}{3} = -2$, and $\\frac{2}{3} \\times (-3) = -2$ ✓. (The choice $2$ or $-9$ divides by $2$ instead of by $2a = 6$. The choice $3$ or $-\\frac{2}{3}$ uses $+b = 7$ on top instead of $-b = -7$. The choice $-\\frac{1}{3}$ or $\\frac{3}{2}$ swaps $a$ and $c$ and divides by $2c = -12$ instead of $2a = 6$.)',
    },
    {
      q: 'Solve $4x^2 - 4x - 3 = 0$.',
      choices: [
        '$x = \\frac{1}{2}$ or $x = -\\frac{3}{2}$',
        '$x = 6$ or $x = -2$',
        '$x = \\frac{3}{2}$ or $x = -\\frac{1}{2}$',
        'There are no real solutions',
      ],
      answer: 2,
      solution:
        'With $a = 4$, $b = -4$, $c = -3$: the discriminant is $16 - 4(4)(-3) = 16 + 48 = 64$, and $-b = 4$. The denominator is $2a = 8$, so $x = \\frac{4 \\pm 8}{8}$, giving $x = \\frac{12}{8} = \\frac{3}{2}$ or $x = \\frac{-4}{8} = -\\frac{1}{2}$ ✓. Check in the original equation: $4 \\cdot \\frac{9}{4} - 4 \\cdot \\frac{3}{2} - 3 = 9 - 6 - 3 = 0$ ✓, and $4 \\cdot \\frac{1}{4} + 2 - 3 = 0$ ✓. Check a second way: the sum should be $-\\frac{-4}{4} = 1$, and $\\frac{3}{2} - \\frac{1}{2} = 1$ ✓; the product should be $\\frac{-3}{4}$, and $\\frac{3}{2} \\times \\left(-\\frac{1}{2}\\right) = -\\frac{3}{4}$ ✓. (The choice $\\frac{1}{2}$ or $-\\frac{3}{2}$ uses $-b = -4$; that pair sums to $-1$ ✗. The choice $6$ or $-2$ divides by $2$ instead of by $2a = 8$. The last choice treats $c$ as $+3$ and computes $16 - 48 = -32$, but $c$ is negative so the discriminant grows instead of shrinking.)',
    },
    {
      q: 'One solution of $2x^2 + bx - 6 = 0$ is $x = -3$. What is $b$?',
      choices: ['$-4$', '$1$', '$-2$', '$4$'],
      answer: 3,
      solution:
        'Substitute the known root and solve for $b$: $2(-3)^2 + b(-3) - 6 = 0$ becomes $18 - 3b - 6 = 0$, so $12 = 3b$ and $b = 4$ ✓. Check a second, independent way with the shortcuts: the roots multiply to $\\frac{c}{a} = -3$, so the other root is $\\frac{-3}{-3} = 1$; the roots then sum to $-3 + 1 = -2$, which must equal $-\\frac{b}{2}$, giving $b = 4$ ✓ — the same answer from a different direction. And indeed $2x^2 + 4x - 6 = 2(x+3)(x-1)$ ✓. (The choice $-4$ slips a sign while rearranging, reading $18 - 3b - 6 = 0$ as $3b = -12$. The choice $1$ forgets the leading $2$ and solves $9 - 3b - 6 = 0$. The choice $-2$ reports the sum of the roots instead of $b$.)',
    },
  ],
  // p8 — complex roots
  [
    {
      q: 'Solve $x^2 - 6x + 13 = 0$ over the complex numbers.',
      choices: ['$x = -3 \\pm 2i$', '$x = 6 \\pm 4i$', '$x = 3 \\pm 2i$', '$x = 3 \\pm 4i$'],
      answer: 2,
      solution:
        'The discriminant is $36 - 52 = -16$, so $\\sqrt{-16} = 4i$ and $x = \\frac{6 \\pm 4i}{2} = 3 \\pm 2i$ ✓ — both parts of the numerator get divided by $2$. Check by substituting $x = 3 + 2i$ into the original equation: $(3+2i)^2 = 9 + 12i + 4i^2 = 5 + 12i$, so $5 + 12i - 6(3+2i) + 13 = 5 + 12i - 18 - 12i + 13 = 0$ ✓. Check a second, independent way: the roots should sum to $6$, and $(3+2i)+(3-2i) = 6$ ✓; they should multiply to $13$, and $3^2 + 2^2 = 13$ ✓. (The choice $-3 \\pm 2i$ uses $-b = -6$; that pair sums to $-6$ ✗. The choice $6 \\pm 4i$ never divides by $2a$. The choice $3 \\pm 4i$ divides only the real part by $2$; its roots would multiply to $9 + 16 = 25$, not $13$ ✗.)',
    },
    {
      q: 'Solve $x^2 + 4x + 20 = 0$ over the complex numbers.',
      choices: ['$x = -2 \\pm 4i$', '$x = 2 \\pm 4i$', '$x = -4 \\pm 8i$', '$x = -2 \\pm 8i$'],
      answer: 0,
      solution:
        'The discriminant is $16 - 80 = -64$, so $\\sqrt{-64} = 8i$ and $x = \\frac{-4 \\pm 8i}{2} = -2 \\pm 4i$ ✓. Check by substituting $x = -2 + 4i$: $(-2+4i)^2 = 4 - 16i + 16i^2 = -12 - 16i$, so $-12 - 16i + 4(-2+4i) + 20 = -12 - 16i - 8 + 16i + 20 = 0$ ✓. Check a second way: the roots sum to $-4$ ✓, matching $-\\frac{b}{a}$, and multiply to $(-2)^2 + 4^2 = 20$ ✓, matching $c$. (The choice $2 \\pm 4i$ uses $-b = +4$ when $b$ is already positive. The choice $-4 \\pm 8i$ forgets to divide by $2a$. The choice $-2 \\pm 8i$ divides only the real part; its roots would multiply to $4 + 64 = 68$, not $20$ ✗.)',
    },
    {
      q: 'The equation $x^2 + bx + c = 0$ has real coefficients, and $x = 4 - 3i$ is one of its solutions. What is $b$?',
      choices: ['$8$', '$-8$', '$-4$', '$25$'],
      answer: 1,
      solution:
        'Complex roots of a real quadratic come in conjugate pairs, so the other solution is $4 + 3i$. Their sum is $(4-3i)+(4+3i) = 8$, and the sum equals $-\\frac{b}{a} = -b$, so $b = -8$ ✓. Check by building the quadratic from its roots: $\\big((x-4)+3i\\big)\\big((x-4)-3i\\big) = (x-4)^2 + 9 = x^2 - 8x + 25$, whose $b$ is indeed $-8$ ✓. One more independent check by substitution: $(4-3i)^2 = 16 - 24i + 9i^2 = 7 - 24i$, and $7 - 24i - 8(4-3i) + 25 = 7 - 24i - 32 + 24i + 25 = 0$ ✓. (The choice $8$ reports the sum of the roots and forgets that the sum is $-b$. The choice $-4$ uses only the given root and drops its imaginary part, treating the sum as $4$. The choice $25$ reports $c$ instead of $b$.)',
    },
  ],
  // p9 — simplify a surd answer fully
  [
    {
      q: 'Solve $x^2 - 10x + 5 = 0$ and simplify fully.',
      choices: ['$x = 5 \\pm 4\\sqrt{5}$', '$x = -5 \\pm 2\\sqrt{5}$', '$x = 5 \\pm 2\\sqrt{5}$', '$x = 10 \\pm 4\\sqrt{5}$'],
      answer: 2,
      solution:
        'The discriminant is $100 - 20 = 80$, and $\\sqrt{80} = \\sqrt{16 \\cdot 5} = 4\\sqrt{5}$. So $x = \\frac{10 \\pm 4\\sqrt{5}}{2} = 5 \\pm 2\\sqrt{5}$ ✓ — divide both terms of the numerator by $2$. Check a second, independent way: the roots should sum to $10$, and $(5 + 2\\sqrt{5}) + (5 - 2\\sqrt{5}) = 10$ ✓; they should multiply to $5$, and $25 - (2\\sqrt{5})^2 = 25 - 20 = 5$ ✓. (The choice $5 \\pm 4\\sqrt{5}$ divides the $10$ by $2$ but leaves the root term whole; those roots would multiply to $25 - 80 = -55$ ✗. The choice $-5 \\pm 2\\sqrt{5}$ uses $-b = -10$. The choice $10 \\pm 4\\sqrt{5}$ skips the division by $2a$ completely.)',
    },
    {
      q: 'Solve $2x^2 - 8x + 3 = 0$ and simplify fully.',
      choices: [
        '$x = 4 \\pm \\sqrt{10}$',
        '$x = \\frac{-4 \\pm \\sqrt{10}}{2}$',
        '$x = \\frac{8 \\pm \\sqrt{10}}{4}$',
        '$x = \\frac{4 \\pm \\sqrt{10}}{2}$',
      ],
      answer: 3,
      solution:
        'With $a = 2$, $b = -8$, $c = 3$: the discriminant is $64 - 24 = 40$, and $\\sqrt{40} = \\sqrt{4 \\cdot 10} = 2\\sqrt{10}$. The denominator is $2a = 4$, so $x = \\frac{8 \\pm 2\\sqrt{10}}{4}$. Every one of the three parts is even, so cancel a $2$ from all of them: $x = \\frac{4 \\pm \\sqrt{10}}{2}$ ✓. Check a second, independent way: the roots should sum to $-\\frac{b}{a} = 4$, and $\\frac{4+\\sqrt{10}}{2} + \\frac{4-\\sqrt{10}}{2} = \\frac{8}{2} = 4$ ✓; they should multiply to $\\frac{c}{a} = \\frac{3}{2}$, and $\\frac{16 - 10}{4} = \\frac{6}{4} = \\frac{3}{2}$ ✓. (The choice $4 \\pm \\sqrt{10}$ divides by $2$ instead of by $2a = 4$; those roots sum to $8$ ✗. The choice $\\frac{-4 \\pm \\sqrt{10}}{2}$ uses $-b = -8$. The choice $\\frac{8 \\pm \\sqrt{10}}{4}$ cancels the $2$ out of the radical term only and leaves the $8$ and the $4$ alone — cancel from all three parts or from none.)',
    },
    {
      q: 'Solve $x^2 + 4x - 8 = 0$ and simplify fully.',
      choices: ['$x = -2 \\pm 2\\sqrt{3}$', '$x = 2 \\pm 2\\sqrt{3}$', '$x = -2 \\pm 4\\sqrt{3}$', '$x = -4 \\pm 4\\sqrt{3}$'],
      answer: 0,
      solution:
        'The discriminant is $16 - 4(1)(-8) = 16 + 32 = 48$, and $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. So $x = \\frac{-4 \\pm 4\\sqrt{3}}{2} = -2 \\pm 2\\sqrt{3}$ ✓. Check a second, independent way: the roots should sum to $-4$, and $(-2 + 2\\sqrt{3}) + (-2 - 2\\sqrt{3}) = -4$ ✓; they should multiply to $-8$, and $(-2)^2 - (2\\sqrt{3})^2 = 4 - 12 = -8$ ✓. (The choice $2 \\pm 2\\sqrt{3}$ uses $-b = +4$ when $b$ is already $+4$. The choice $-2 \\pm 4\\sqrt{3}$ divides only the $-4$ by $2$; its roots multiply to $4 - 48 = -44$ ✗. The choice $-4 \\pm 4\\sqrt{3}$ never divides by $2a$ at all.)',
    },
  ],
  // p10 — rearrange before applying the formula
  [
    {
      q: 'Solve $2x^2 = 6x - 1$.',
      choices: [
        '$x = \\frac{3 \\pm \\sqrt{7}}{2}$',
        '$x = \\frac{-3 \\pm \\sqrt{7}}{2}$',
        '$x = 3 \\pm \\sqrt{7}$',
        '$x = \\frac{3 \\pm \\sqrt{11}}{2}$',
      ],
      answer: 0,
      solution:
        'Move everything to one side FIRST: $2x^2 - 6x + 1 = 0$, so $a = 2$, $b = -6$, $c = 1$. The discriminant is $36 - 8 = 28$, and $\\sqrt{28} = 2\\sqrt{7}$. Then $x = \\frac{6 \\pm 2\\sqrt{7}}{4} = \\frac{3 \\pm \\sqrt{7}}{2}$ ✓, cancelling a $2$ from all three parts. Check the root $x = \\frac{3+\\sqrt{7}}{2}$ in the ORIGINAL equation: $2x^2 = 2 \\cdot \\frac{9 + 6\\sqrt{7} + 7}{4} = \\frac{16 + 6\\sqrt{7}}{2} = 8 + 3\\sqrt{7}$, while $6x - 1 = 3(3+\\sqrt{7}) - 1 = 8 + 3\\sqrt{7}$ ✓ — the two sides agree. Check a second way: the roots sum to $\\frac{6}{2} = 3$ ✓ and multiply to $\\frac{1}{2}$, and $\\frac{9-7}{4} = \\frac{1}{2}$ ✓. (The choice $\\frac{-3 \\pm \\sqrt{7}}{2}$ uses $-b = -6$. The choice $3 \\pm \\sqrt{7}$ divides by $2$ instead of by $2a = 4$. The choice $\\frac{3 \\pm \\sqrt{11}}{2}$ carries the $-1$ across the equals sign without flipping its sign, using $c = -1$ and getting a discriminant of $44$.)',
    },
    {
      q: 'Solve $x(x + 5) = 3$.',
      choices: [
        '$x = 0$ or $x = -5$',
        '$x = \\frac{5 \\pm \\sqrt{37}}{2}$',
        '$x = \\frac{-5 \\pm \\sqrt{37}}{2}$',
        '$x = \\frac{-5 \\pm \\sqrt{13}}{2}$',
      ],
      answer: 2,
      solution:
        'Expand and set the equation to zero before touching the formula: $x^2 + 5x = 3$ becomes $x^2 + 5x - 3 = 0$. The discriminant is $25 - 4(1)(-3) = 25 + 12 = 37$, which is not a perfect square, so $x = \\frac{-5 \\pm \\sqrt{37}}{2}$ ✓ and nothing simplifies. Check a second, independent way: the roots should sum to $-5$ ✓ by inspection, and multiply to $\\frac{25 - 37}{4} = \\frac{-12}{4} = -3$ ✓, matching $c$. Numerically, $\\sqrt{37} \\approx 6.083$, so one root is about $0.541$, and $0.541 \\times 5.541 \\approx 3.00$ ✓ — the original product really is $3$. (The choice $0$ or $-5$ sets each factor equal to zero, but the zero-product rule only works when the product IS zero; here it is $3$. The choice $\\frac{5 \\pm \\sqrt{37}}{2}$ uses $-b = +5$. The choice $\\frac{-5 \\pm \\sqrt{13}}{2}$ moves the $3$ across without changing its sign, using $c = +3$ and getting $25 - 12 = 13$.)',
    },
    {
      q: 'Solve $5x^2 - 1 = 3x^2 + 4x + 5$.',
      choices: ['$x = -3$ or $x = 1$', '$x = 3$ or $x = -1$', 'There are no real solutions', '$x = 6$ or $x = -2$'],
      answer: 1,
      solution:
        'Collect everything on the left, changing the sign of each term that crosses: $5x^2 - 3x^2 - 4x - 1 - 5 = 0$, which is $2x^2 - 4x - 6 = 0$. The discriminant is $16 - 4(2)(-6) = 16 + 48 = 64$, so $x = \\frac{4 \\pm 8}{4}$, giving $x = 3$ or $x = -1$ ✓. Check both in the ORIGINAL equation. At $x = 3$: left $= 45 - 1 = 44$, right $= 27 + 12 + 5 = 44$ ✓. At $x = -1$: left $= 5 - 1 = 4$, right $= 3 - 4 + 5 = 4$ ✓. (The choice $-3$ or $1$ carries the $4x$ across without flipping its sign, solving $2x^2 + 4x - 6 = 0$. The choice "no real solutions" treats $c$ as $+6$ and computes $16 - 48 = -32$, but $c = -6$ makes the discriminant grow. The choice $6$ or $-2$ divides by $2$ instead of by $2a = 4$.)',
    },
  ],
]

const s134 = [
  // p1 — consecutive integers with a given product
  [
    {
      q: 'Two consecutive positive integers have a product of $72$. What is the larger one?',
      choices: ['$8$', '$-8$', '$9$', '$36$'],
      answer: 2,
      solution:
        'Let the smaller integer be $n$, so the larger is $n + 1$ and $n(n+1) = 72$. Rearranged, $n^2 + n - 72 = 0$, which factors as $(n+9)(n-8) = 0$, so $n = 8$ or $n = -9$. The problem says POSITIVE integers, so $n = -9$ is thrown out and $n = 8$ — making the larger integer $9$ ✓. Check: $8 \\times 9 = 72$ ✓, and the two really are consecutive. (The choice $8$ solves the equation correctly but answers the wrong question — that is the smaller integer. The choice $-8$ keeps the rejected root $n = -9$, whose partner is $-8$; their product is $72$ too, but they are not positive. The choice $36$ halves the product, as if two consecutive numbers each equalled half of $72$; but $36 \\times 37 = 1332$ ✗.)',
    },
    {
      q: 'Two consecutive positive even integers have a product of $120$. What are they?',
      choices: ['$10$ and $12$', '$8$ and $10$', '$12$ and $14$', '$-12$ and $-10$'],
      answer: 0,
      solution:
        'Consecutive EVEN integers differ by $2$, so let them be $n$ and $n+2$: then $n(n+2) = 120$, or $n^2 + 2n - 120 = 0$. Two numbers with product $-120$ and sum $2$ are $12$ and $-10$, so $(n+12)(n-10) = 0$ and $n = 10$ or $n = -12$. Both are even, but only $n = 10$ is positive, so the integers are $10$ and $12$ ✓. Check: $10 \\times 12 = 120$ ✓. (The choice $-12$ and $-10$ is the rejected root $n = -12$; it genuinely multiplies to $120$, which is why the problem has to say "positive" — read the condition, do not just solve. The choice $8$ and $10$ comes from mis-factoring as $(n+10)(n-8)$, which expands to $n^2 + 2n - 80$, not $-120$ ✗. The choice $12$ and $14$ comes from mis-factoring as $(n+14)(n-12)$, which expands to $n^2 + 2n - 168$ ✗.)',
    },
    {
      q: 'Two consecutive positive integers have a product of $110$. What is their sum?',
      choices: ['$110$', '$20$', '$22$', '$21$'],
      answer: 3,
      solution:
        'Let the smaller be $n$: then $n(n+1) = 110$, so $n^2 + n - 110 = 0$, which factors as $(n+11)(n-10) = 0$. The root $n = -11$ is rejected because the integers must be positive, leaving $n = 10$. The integers are $10$ and $11$, and their sum is $21$ ✓. Check both conditions: $10 \\times 11 = 110$ ✓ and they are consecutive ✓. (The choice $20$ doubles the smaller integer, computing $n + n$ instead of $n + (n+1)$. The choice $22$ doubles the larger one the same way. The choice $110$ repeats the product instead of answering the question asked.)',
    },
  ],
  // p2 — rectangle dimensions from an area
  [
    {
      q: 'A rectangle has length $4$ more than its width and area $45$. What is the width?',
      choices: ['$5$', '$9$', '$-9$', '$41$'],
      answer: 0,
      solution:
        'Let the width be $w$; then the length is $w + 4$ and $w(w+4) = 45$. Rearranged, $w^2 + 4w - 45 = 0$, which factors as $(w+9)(w-5) = 0$, so $w = 5$ or $w = -9$. A width cannot be negative, so $w = -9$ is rejected and the width is $5$ ✓. Check: the length is $5 + 4 = 9$, and $5 \\times 9 = 45$ ✓. (The choice $9$ is the LENGTH, not the width. The choice $-9$ keeps the rejected root; no rectangle has a side of $-9$. The choice $41$ subtracts $4$ from $45$, treating "length is $4$ more" as something you undo by subtracting from the area — but the $4$ was added to a side, not to the area.)',
    },
    {
      q: 'A rectangle is $3$ units longer than it is wide and has an area of $70$ square units. What is its perimeter?',
      choices: ['$17$', '$70$', '$140$', '$34$'],
      answer: 3,
      solution:
        'Let the width be $w$; the length is $w + 3$ and $w(w+3) = 70$, so $w^2 + 3w - 70 = 0$. That factors as $(w+10)(w-7) = 0$, giving $w = 7$ or $w = -10$. A width cannot be negative, so $w = 7$ and the length is $10$. The perimeter is $2(7 + 10) = 34$ ✓. Check the area with those sides: $7 \\times 10 = 70$ ✓, and the length really is $3$ more than the width ✓. (The choice $17$ adds the two sides but forgets that a rectangle has two of each. The choice $70$ reports the area instead of the perimeter. The choice $140$ doubles the AREA rather than the sum of the sides.)',
    },
    {
      q: 'The length of a rectangle is twice its width, and its area is $50$ square units. What is the length?',
      choices: ['$5$', '$10$', '$25$', '$-10$'],
      answer: 1,
      solution:
        'Let the width be $w$; then the length is $2w$ and the area gives $w(2w) = 50$, so $2w^2 = 50$ and $w^2 = 25$. Unsquaring gives $w = 5$ or $w = -5$, and a width cannot be negative, so $w = 5$ and the length is $2 \\times 5 = 10$ ✓. Check: $5 \\times 10 = 50$ ✓, and $10$ really is twice $5$ ✓. (The choice $5$ is the width, not the length the question asked for. The choice $-10$ keeps the rejected root $w = -5$; its "area" would still compute to $50$, which is exactly why you must check the story and not only the algebra. The choice $25$ stops at $w^2 = 25$ and reports that number without unsquaring.)',
    },
  ],
  // p3 — choose a parameter so there is exactly one solution
  [
    {
      q: 'For what value of $k$ does $x^2 - 20x + k = 0$ have exactly one solution?',
      choices: ['$10$', '$400$', '$-100$', '$100$'],
      answer: 3,
      solution:
        'Exactly one solution means a zero discriminant: $(-20)^2 - 4(1)(k) = 0$, so $400 - 4k = 0$ and $k = 100$ ✓. Check a second, independent way: with $k = 100$ the equation is $x^2 - 20x + 100$, and half of $-20$ is $-10$ with $(-10)^2 = 100$ — a perfect square, $(x-10)^2 = 0$, whose only root is $x = 10$ ✓. (The choice $10$ reports that root instead of $k$. The choice $400$ sets $k = b^2$ and forgets to divide by $4$; then the discriminant would be $400 - 1600 = -1200$, giving no solutions at all ✗. The choice $-100$ slips a sign, solving $400 + 4k = 0$.)',
    },
    {
      q: 'For what positive value of $k$ does $x^2 + kx + 49 = 0$ have exactly one solution?',
      choices: ['$14$', '$7$', '$-14$', '$196$'],
      answer: 0,
      solution:
        'Set the discriminant to zero: $k^2 - 4(1)(49) = 0$, so $k^2 = 196$ and $k = \\pm 14$. The question asks for the positive value, so $k = 14$ ✓. Check a second, independent way: $x^2 + 14x + 49 = (x+7)^2$, a perfect square with the single root $x = -7$ ✓. (The choice $7$ takes $\\sqrt{49}$ instead of $\\sqrt{196}$ — that is half of $k$, the number inside the squared bracket. The choice $-14$ is the other genuine root of $k^2 = 196$, ruled out only by the word "positive". The choice $196$ never takes the square root, reporting $k^2$ as $k$.)',
    },
    {
      q: 'For what negative value of $k$ does $2x^2 + kx + 18 = 0$ have a double root?',
      choices: ['$12$', '$-12$', '$-144$', '$-6\\sqrt{2}$'],
      answer: 1,
      solution:
        'A double root means the discriminant is zero: $k^2 - 4(2)(18) = 0$, so $k^2 = 144$ and $k = \\pm 12$. We want the negative value, so $k = -12$ ✓. Check a second, independent way: $2x^2 - 12x + 18 = 2(x^2 - 6x + 9) = 2(x-3)^2$, which is zero only at $x = 3$ ✓. (The choice $12$ is the other root of $k^2 = 144$, ruled out by the word "negative". The choice $-144$ forgets the square root. The choice $-6\\sqrt{2}$ drops the $a$ from $4ac$ and solves $k^2 = 72$; but with $k^2 = 72$ the real discriminant is $72 - 144 = -72$, so that equation has no roots at all ✗.)',
    },
  ],
  // p4 — sum of the roots
  [
    {
      q: 'Without solving, find the sum of the solutions of $3x^2 + 12x - 7 = 0$.',
      choices: ['$4$', '$-4$', '$-\\frac{7}{3}$', '$12$'],
      answer: 1,
      solution:
        'The sum of the roots is $-\\frac{b}{a} = -\\frac{12}{3} = -4$ ✓ — no solving required. Check a second, independent way by actually running the formula: the discriminant is $144 + 84 = 228$, so the roots are $\\frac{-12 \\pm \\sqrt{228}}{6}$, and adding them cancels the $\\pm$ parts to leave $\\frac{-24}{6} = -4$ ✓. (The choice $4$ forgets the minus sign that the shortcut puts in front of $\\frac{b}{a}$. The choice $-\\frac{7}{3}$ is the PRODUCT of the roots, $\\frac{c}{a}$. The choice $12$ reports $b$ itself, without dividing by $a$ or flipping the sign.)',
    },
    {
      q: 'The sum of the solutions of $x^2 + bx + 9 = 0$ is $6$. What is $b$?',
      choices: ['$6$', '$9$', '$-6$', '$3$'],
      answer: 2,
      solution:
        'This runs the shortcut backwards. The sum of the roots is $-\\frac{b}{a} = -b$, and we are told that sum is $6$, so $-b = 6$ and $b = -6$ ✓. Check a second, independent way: with $b = -6$ the equation is $x^2 - 6x + 9 = (x-3)^2 = 0$, whose roots are $3$ and $3$ — and $3 + 3 = 6$ ✓, exactly the sum we were given. (The choice $6$ forgets the sign flip; with $b = 6$ the roots would be $-3$ and $-3$, summing to $-6$ ✗. The choice $3$ reports the root instead of $b$. The choice $9$ reports $c$.)',
    },
    {
      q: 'Without solving, find the sum of the solutions of $4x^2 - 9x = 0$.',
      choices: ['$\\frac{9}{4}$', '$-\\frac{9}{4}$', '$0$', '$\\frac{4}{9}$'],
      answer: 0,
      solution:
        'A missing constant term just means $c = 0$; the shortcut does not care. With $a = 4$ and $b = -9$, the sum is $-\\frac{b}{a} = -\\frac{-9}{4} = \\frac{9}{4}$ ✓. Check a second, independent way by solving, which is easy here: $x(4x - 9) = 0$ gives $x = 0$ or $x = \\frac{9}{4}$, and $0 + \\frac{9}{4} = \\frac{9}{4}$ ✓. (The choice $-\\frac{9}{4}$ forgets that $b$ is ALREADY negative, so $-\\frac{b}{a}$ comes out positive. The choice $0$ reports the product of the roots, $\\frac{c}{a} = 0$ — true, but not what was asked. The choice $\\frac{4}{9}$ turns the fraction upside down, dividing $a$ by $b$.)',
    },
  ],
  // p5 — product of the roots
  [
    {
      q: 'Without solving, find the product of the solutions of $5x^2 + 7x - 3 = 0$.',
      choices: ['$\\frac{3}{5}$', '$-\\frac{7}{5}$', '$-3$', '$-\\frac{3}{5}$'],
      answer: 3,
      solution:
        'The product of the roots is $\\frac{c}{a} = \\frac{-3}{5} = -\\frac{3}{5}$ ✓ — the sign of $c$ comes along for the ride. Check a second, independent way with the formula: the discriminant is $49 + 60 = 109$, so the roots are $\\frac{-7 \\pm \\sqrt{109}}{10}$, and their product is $\\frac{49 - 109}{100} = \\frac{-60}{100} = -\\frac{3}{5}$ ✓. (The choice $\\frac{3}{5}$ drops the minus sign on $c$; but one root is positive and one is negative, so the product must be negative. The choice $-\\frac{7}{5}$ is the SUM of the roots, $-\\frac{b}{a}$. The choice $-3$ reports $c$ without dividing by $a$.)',
    },
    {
      q: 'The product of the solutions of $2x^2 + 5x + c = 0$ is $-4$. What is $c$?',
      choices: ['$-2$', '$4$', '$-8$', '$-4$'],
      answer: 2,
      solution:
        'The product of the roots is $\\frac{c}{a} = \\frac{c}{2}$, and we are told it is $-4$. So $\\frac{c}{2} = -4$ and $c = -8$ ✓. Check a second, independent way: with $c = -8$ the equation is $2x^2 + 5x - 8 = 0$, whose discriminant is $25 + 64 = 89$; the roots are $\\frac{-5 \\pm \\sqrt{89}}{4}$ and their product is $\\frac{25 - 89}{16} = \\frac{-64}{16} = -4$ ✓. (The choice $-2$ divides where it should multiply, computing $\\frac{-4}{2}$. The choice $-4$ reads $c$ straight off the product and forgets that $a = 2$ divides it. The choice $4$ loses the minus sign entirely, and $\\frac{4}{2} = 2$, not $-4$ ✗.)',
    },
    {
      q: 'The two solutions of $x^2 - 7x + 10 = 0$ are $r$ and $s$. What is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{7}{10}$', '$\\frac{10}{7}$', '$7$', '$\\frac{1}{7}$'],
      answer: 0,
      solution:
        'Put the two fractions over a common denominator: $\\frac{1}{r} + \\frac{1}{s} = \\frac{s + r}{rs}$. That is the sum of the roots over the product! The sum is $-\\frac{b}{a} = 7$ and the product is $\\frac{c}{a} = 10$, so the answer is $\\frac{7}{10}$ ✓ — found without ever naming $r$ and $s$. Check a second, independent way by finding them: $x^2 - 7x + 10 = (x-2)(x-5)$, so the roots are $2$ and $5$, and $\\frac{1}{2} + \\frac{1}{5} = \\frac{5}{10} + \\frac{2}{10} = \\frac{7}{10}$ ✓. (The choice $\\frac{10}{7}$ turns the fraction upside down, putting the product over the sum. The choice $7$ gives the sum of the roots and forgets the reciprocals. The choice $\\frac{1}{7}$ computes $\\frac{1}{r+s}$, as if reciprocals could be added by flipping the total — they cannot, since $\\frac{1}{2} + \\frac{1}{5}$ is not $\\frac{1}{7}$ ✗.)',
    },
  ],
  // p6 — factoring beats the formula
  [
    {
      q: 'The equation $x^2 - 11x + 24 = 0$ can be solved by the formula, but factoring is faster. What are the solutions?',
      choices: ['$x = -3$ and $x = -8$', '$x = 4$ and $x = 6$', '$x = 3$ and $x = 8$', '$x = 2$ and $x = 12$'],
      answer: 2,
      solution:
        'Hunt for two numbers with product $24$ and sum $11$: that pair is $3$ and $8$. Since the middle sign is minus and the constant is plus, both roots are positive: $x^2 - 11x + 24 = (x-3)(x-8) = 0$, so $x = 3$ or $x = 8$ ✓. Check by substituting into the original equation: $9 - 33 + 24 = 0$ ✓ and $64 - 88 + 24 = 0$ ✓. (The choice $-3$ and $-8$ flips both signs; that pair belongs to $x^2 + 11x + 24$. The choice $4$ and $6$ multiplies to $24$ but sums to $10$, not $11$. The choice $2$ and $12$ multiplies to $24$ but sums to $14$ — the product alone never pins a pair down, so always check the sum too.)',
    },
    {
      q: 'Factoring beats the formula here. Solve $x^2 + 2x - 35 = 0$.',
      choices: ['$x = 7$ and $x = -5$', '$x = -7$ and $x = 5$', '$x = 7$ and $x = 5$', '$x = -7$ and $x = -5$'],
      answer: 1,
      solution:
        'We need two numbers with product $-35$ and sum $2$. A negative product means the two numbers have opposite signs, and $7$ and $-5$ do the job: $x^2 + 2x - 35 = (x+7)(x-5) = 0$, so $x = -7$ or $x = 5$ ✓. Watch the flip — the factor $(x+7)$ gives the root $-7$. Check by substituting: $49 - 14 - 35 = 0$ ✓ and $25 + 10 - 35 = 0$ ✓. Check once more with the shortcuts: the roots sum to $-7 + 5 = -2$... and that should be $-\\frac{b}{a} = -2$ ✓, with product $-35 = c$ ✓. (The choice $7$ and $-5$ reads the roots straight out of the factors without flipping their signs; that pair sums to $2$, but $49 + 14 - 35 = 28 \\ne 0$ ✗. The choice $7$ and $5$ ignores the minus on $-35$ and takes both roots positive. The choice $-7$ and $-5$ takes both negative, giving product $+35$.)',
    },
    {
      q: 'Which quadratic equation has solutions $x = -4$ and $x = 6$?',
      choices: ['$x^2 + 2x - 24 = 0$', '$x^2 - 2x + 24 = 0$', '$x^2 - 10x + 24 = 0$', '$x^2 - 2x - 24 = 0$'],
      answer: 3,
      solution:
        'Build the equation from its roots: $(x+4)(x-6) = x^2 - 6x + 4x - 24 = x^2 - 2x - 24$, so the equation is $x^2 - 2x - 24 = 0$ ✓. Check a second, independent way with the shortcuts: the roots sum to $-4 + 6 = 2$, which must equal $-b$, so $b = -2$ ✓; they multiply to $-24$, which must equal $c$ ✓. One more check by substitution: $16 + 8 - 24 = 0$ ✓ and $36 - 12 - 24 = 0$ ✓. (The choice $x^2 + 2x - 24$ forgets that the sum of the roots is $-b$, not $b$; its roots are $4$ and $-6$. The choice $x^2 - 2x + 24$ takes the product as $+24$, as if two roots of opposite sign could multiply to a positive. The choice $x^2 - 10x + 24$ ignores the minus on $-4$ altogether, using sum $10$ and product $24$.)',
    },
  ],
  // p7 — projectile height
  [
    {
      q: 'A ball is kicked from the ground and its height after $t$ seconds is $h = -5t^2 + 40t$. When does it land?',
      choices: ['$8$ seconds', '$4$ seconds', '$0$ seconds', '$40$ seconds'],
      answer: 0,
      solution:
        'Landing means height zero, so solve $-5t^2 + 40t = 0$. Factor: $-5t(t - 8) = 0$, giving $t = 0$ or $t = 8$. The root $t = 0$ is the instant of the kick — the ball is on the ground then, but that is the start of the story, not the landing — so we take $t = 8$ seconds ✓. Check: $h(8) = -5(64) + 320 = -320 + 320 = 0$ ✓. (The choice $4$ seconds is when the ball is HIGHEST, exactly halfway through the flight; $h(4) = -80 + 160 = 80 \\ne 0$ ✗. The choice $0$ seconds keeps the root we rejected. The choice $40$ seconds reads a coefficient off the formula instead of solving; $h(40) = -8000 + 1600$, which is far below ground ✗.)',
    },
    {
      q: 'A ball is thrown from a ledge and its height after $t$ seconds is $h = -5t^2 + 15t + 50$. When does it hit the ground?',
      choices: ['$2$ seconds', '$5$ seconds', '$-2$ seconds', '$10$ seconds'],
      answer: 1,
      solution:
        'Set $h = 0$: $-5t^2 + 15t + 50 = 0$. Divide every term by $-5$ to make life easy: $t^2 - 3t - 10 = 0$, which factors as $(t-5)(t+2) = 0$, so $t = 5$ or $t = -2$. A time of $-2$ seconds is two seconds BEFORE the throw, which the story does not allow, so the ball lands at $t = 5$ seconds ✓. Check in the original height formula: $h(5) = -125 + 75 + 50 = 0$ ✓. Notice $h(0) = 50$, so the ledge really is $50$ units up ✓. (The choice $-2$ keeps the impossible root. The choice $2$ takes that root and quietly strips its minus sign; $h(2) = -20 + 30 + 50 = 60 \\ne 0$ ✗. The choice $10$ reads the $10$ out of $t^2 - 3t - 10$ as if the constant were the answer.)',
    },
    {
      q: 'A ball is kicked from the ground and its height after $t$ seconds is $h = -5t^2 + 25t$. At what time is it $30$ units high on the way UP?',
      choices: ['$3$ seconds', '$5$ seconds', '$6$ seconds', '$2$ seconds'],
      answer: 3,
      solution:
        'Set the height equal to $30$, not to $0$: $-5t^2 + 25t = 30$. Move everything over: $-5t^2 + 25t - 30 = 0$, and dividing by $-5$ gives $t^2 - 5t + 6 = 0$, which factors as $(t-2)(t-3) = 0$. So the ball is $30$ units high at $t = 2$ AND at $t = 3$ — once climbing, once falling. The flight lasts until $-5t(t-5) = 0$ gives $t = 5$, so the peak is at $t = 2.5$; the earlier time $t = 2$ is on the way up ✓. Check: $h(2) = -20 + 50 = 30$ ✓. (The choice $3$ seconds is the same height on the way DOWN, since $h(3) = -45 + 75 = 30$ ✓ as well — the question asks which of the two, so you must think about the peak. The choice $5$ seconds solves $h = 0$ instead of $h = 30$; that is when the ball lands. The choice $6$ seconds reads the constant of $t^2 - 5t + 6$ as the answer.)',
    },
  ],
  // p8 — the parameter sits on the leading coefficient
  [
    {
      q: 'For what value of $k$ (with $k \\ne 0$) does $kx^2 + 6x + 3 = 0$ have exactly one solution?',
      choices: ['$12$', '$\\frac{1}{3}$', '$-3$', '$3$'],
      answer: 3,
      solution:
        'Here the unknown sits on the $x^2$ term, so it lands inside $4ac$. Set the discriminant to zero: $6^2 - 4(k)(3) = 36 - 12k = 0$, so $12k = 36$ and $k = 3$ ✓. Check a second, independent way: with $k = 3$ the equation is $3x^2 + 6x + 3 = 3(x^2 + 2x + 1) = 3(x+1)^2$, a perfect square whose only root is $x = -1$ ✓. (The choice $12$ drops the $4$ from $4ac$ and solves $36 - 3k = 0$. The choice $\\frac{1}{3}$ divides upside down at the last step, computing $\\frac{12}{36}$ instead of $\\frac{36}{12}$. The choice $-3$ slips a sign, solving $36 + 12k = 0$; with $k = -3$ the discriminant is really $36 + 36 = 72$, which gives two solutions ✗.)',
    },
    {
      q: 'The equation $9x^2 + kx + 4 = 0$ has exactly one solution, and $k$ is positive. What is $k$?',
      choices: ['$6$', '$144$', '$12$', '$-12$'],
      answer: 2,
      solution:
        'Set the discriminant to zero: $k^2 - 4(9)(4) = k^2 - 144 = 0$, so $k^2 = 144$ and $k = \\pm 12$. The question asks for the positive value, so $k = 12$ ✓. Check a second, independent way: $9x^2 + 12x + 4 = (3x+2)^2$, a perfect square with the single root $x = -\\frac{2}{3}$ ✓. (The choice $-12$ is the other genuine root, ruled out only by the word "positive". The choice $144$ reports $k^2$ without taking the square root. The choice $6$ drops the $4$ from $4ac$ and solves $k^2 = 36$; but then the true discriminant is $36 - 144 = -108$, so there would be no solutions at all ✗.)',
    },
    {
      q: 'For which values of $k$ does $kx^2 + 8x + k = 0$ have exactly one solution?',
      choices: ['$k = 4$ only', '$k = \\pm 4$', '$k = \\pm 16$', '$k = 2$ only'],
      answer: 1,
      solution:
        'The same letter is both $a$ and $c$ here, so $4ac = 4k^2$. Set the discriminant to zero: $8^2 - 4k^2 = 0$, so $64 = 4k^2$, $k^2 = 16$, and $k = \\pm 4$ — both allowed, since neither is $0$ ✓. Check both a second, independent way: $4x^2 + 8x + 4 = 4(x+1)^2$, whose only root is $x = -1$ ✓, and $-4x^2 + 8x - 4 = -4(x-1)^2$, whose only root is $x = 1$ ✓. Two different values of $k$ really do work. (The choice $k = 4$ only forgets that unsquaring always offers both signs. The choice $k = \\pm 16$ stops at $k^2 = 16$ and reports that as $k$. The choice $k = 2$ only halves $4$ instead of square-rooting $16$, and also loses the negative; with $k = 2$ the discriminant is $64 - 16 = 48$, giving two solutions ✗.)',
    },
  ],
  // p9 — reconstruct two numbers from their sum and product
  [
    {
      q: 'Two numbers add to $12$ and multiply to $34$. What are they?',
      choices: ['$6 \\pm \\sqrt{2}$', '$6 \\pm 2\\sqrt{2}$', '$-6 \\pm \\sqrt{2}$', '$2$ and $17$'],
      answer: 0,
      solution:
        'Numbers with sum $12$ and product $34$ are the roots of $x^2 - 12x + 34 = 0$ — the sum enters with a MINUS and the product with a plus. The discriminant is $144 - 136 = 8$, and $\\sqrt{8} = 2\\sqrt{2}$, so $x = \\frac{12 \\pm 2\\sqrt{2}}{2} = 6 \\pm \\sqrt{2}$ ✓. Check both conditions directly: the sum is $(6+\\sqrt{2}) + (6-\\sqrt{2}) = 12$ ✓, and the product is $36 - 2 = 34$ ✓. (The choice $6 \\pm 2\\sqrt{2}$ divides only the $12$ by $2$ and leaves the root term alone; that pair multiplies to $36 - 8 = 28$ ✗. The choice $-6 \\pm \\sqrt{2}$ builds $x^2 + 12x + 34$ instead, forgetting the sign flip on the sum; those two add to $-12$ ✗. The choice $2$ and $17$ chases whole-number factors of $34$, but they add to $19$, not $12$ ✗.)',
    },
    {
      q: 'Two numbers add to $6$ and multiply to $4$. What are they?',
      choices: ['$3 \\pm 2\\sqrt{5}$', '$-3 \\pm \\sqrt{5}$', '$2$ and $4$', '$3 \\pm \\sqrt{5}$'],
      answer: 3,
      solution:
        'The two numbers are the roots of $x^2 - 6x + 4 = 0$. The discriminant is $36 - 16 = 20$, and $\\sqrt{20} = 2\\sqrt{5}$, so $x = \\frac{6 \\pm 2\\sqrt{5}}{2} = 3 \\pm \\sqrt{5}$ ✓. Check both conditions: the sum is $6$ ✓, and the product is $(3+\\sqrt{5})(3-\\sqrt{5}) = 9 - 5 = 4$ ✓. (The choice $3 \\pm 2\\sqrt{5}$ divides only the $6$ by $2$; its product is $9 - 20 = -11$ ✗. The choice $-3 \\pm \\sqrt{5}$ puts the sum into the quadratic with the wrong sign; those add to $-6$ ✗. The choice $2$ and $4$ adds to $6$ correctly but multiplies to $8$, not $4$ — matching one condition is never enough.)',
    },
    {
      q: 'Two numbers add to $9$ and multiply to $20$. What is the sum of their squares?',
      choices: ['$61$', '$81$', '$41$', '$121$'],
      answer: 2,
      solution:
        'Call them $r$ and $s$, with $r + s = 9$ and $rs = 20$. Squaring the sum gives $(r+s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r+s)^2 - 2rs = 81 - 40 = 41$ ✓ — no need to find the numbers. Check a second, independent way by finding them anyway: they are the roots of $x^2 - 9x + 20 = (x-4)(x-5)$, so they are $4$ and $5$, and $16 + 25 = 41$ ✓. (The choice $61$ subtracts $rs$ once instead of twice, computing $81 - 20$; the expansion has $2rs$ in it. The choice $81$ squares the sum and stops, which counts the cross terms as if they were free. The choice $121$ ADDS $2rs$ instead of subtracting it, $81 + 40$.)',
    },
  ],
  // p10 — a parameter with two working values
  [
    {
      q: 'For which values of $m$ does $x^2 + mx + 9 = 0$ have exactly one solution?',
      choices: ['$m = 6$ only', '$m = \\pm 6$', '$m = \\pm 3$', '$m = \\pm 36$'],
      answer: 1,
      solution:
        'Set the discriminant to zero: $m^2 - 4(1)(9) = m^2 - 36 = 0$, so $m^2 = 36$ and $m = \\pm 6$ — BOTH signs, exactly as when you unsquare any equation ✓. Check both a second, independent way: $m = 6$ gives $x^2 + 6x + 9 = (x+3)^2$, single root $-3$ ✓, and $m = -6$ gives $x^2 - 6x + 9 = (x-3)^2$, single root $3$ ✓. (The choice $m = 6$ only forgets the negative square root. The choice $m = \\pm 3$ takes $\\sqrt{9}$ instead of $\\sqrt{36}$ — that $3$ is the number inside the squared bracket, not $m$; with $m = 3$ the discriminant is $9 - 36 = -27$, so there are no solutions ✗. The choice $m = \\pm 36$ reports $m^2$ without taking the square root.)',
    },
    {
      q: 'For which values of $m$ does $4x^2 + mx + 9 = 0$ have exactly one solution?',
      choices: ['$m = \\pm 12$', '$m = 12$ only', '$m = \\pm 6$', '$m = \\pm 144$'],
      answer: 0,
      solution:
        'Now $a = 4$, so $4ac = 4(4)(9) = 144$. Set the discriminant to zero: $m^2 - 144 = 0$, giving $m^2 = 144$ and $m = \\pm 12$ ✓. Check both a second, independent way: $4x^2 + 12x + 9 = (2x+3)^2$, single root $-\\frac{3}{2}$ ✓, and $4x^2 - 12x + 9 = (2x-3)^2$, single root $\\frac{3}{2}$ ✓. (The choice $m = 12$ only drops the negative value. The choice $m = \\pm 6$ forgets the $a$ inside $4ac$ and solves $m^2 = 36$; with $m = 6$ the true discriminant is $36 - 144 = -108$, so there would be no solutions ✗. The choice $m = \\pm 144$ never takes the square root.)',
    },
    {
      q: 'For which values of $m$ does $x^2 + 6x + m = 0$ have NO real solutions?',
      choices: ['$m < 9$', '$m = 9$', '$m > 9$', '$m > 36$'],
      answer: 2,
      solution:
        'No real solutions means a NEGATIVE discriminant: $36 - 4m < 0$. Add $4m$ to both sides to get $36 < 4m$, so $9 < m$, that is $m > 9$ ✓. Check a second, independent way by completing the square: $x^2 + 6x + m = (x+3)^2 + (m - 9)$, and a square plus a positive amount can never be $0$ — which needs exactly $m - 9 > 0$ ✓. Test a value on each side: at $m = 10$ the discriminant is $36 - 40 = -4 < 0$, no solutions ✓; at $m = 8$ it is $36 - 32 = 4 > 0$, two solutions ✗. (The choice $m < 9$ flips the inequality while dividing by the positive number $4$ — the direction only flips for a negative divisor. The choice $m = 9$ answers the "exactly one solution" question instead; there the discriminant is $0$, and $x = -3$ really does solve it. The choice $m > 36$ drops the $4$ and solves $36 - m < 0$; but $m = 20$ is not above $36$ and still gives $36 - 80 = -44 < 0$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 13,
  sections: { '13.3': s133, '13.4': s134 },
}
