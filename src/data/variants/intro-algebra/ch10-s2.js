// Introduction to Algebra chapter 10 — variations for sections 10.3 and 10.4.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: each claimed root is substituted back into the ORIGINAL equation
//    and shown to give $0$, and every factorization is multiplied back out term
//    by term.
//  - Each distractor is one named mistake, and the name is stated in a
//    parenthetical at the end of the solution. The traps that run through this
//    pair of sections are: DIVIDING BY THE VARIABLE and losing $x = 0$, using
//    the PERFECT-SQUARE pattern where a difference of squares belongs, RIGHT
//    CONSTANT / WRONG MIDDLE TERM when the leading coefficient is not $1$,
//    READING A COEFFICIENT AS A ROOT instead of solving the little equation,
//    and FORGETTING TO DIVIDE BY $a$ (or forgetting the minus sign) in the
//    sum-and-product formulas.
//  - No two choices inside an item name the same number, the same pair of
//    numbers, or two factorizations that expand to the same thing.

const s103 = [
  // p1 — pull out the common monomial factor
  [
    {
      q: 'Factor $6x^2 - 24x$.',
      choices: ['$6x(x - 24)$', '$x(6x - 4)$', '$6x(x - 4)$', '$6x(x + 4)$'],
      answer: 2,
      solution:
        'Look for what both terms share. The numbers $6$ and $24$ share a factor of $6$, and both terms carry an $x$, so the common factor is $6x$. Dividing each term by $6x$ leaves $x$ and $-4$, so $6x^2 - 24x = 6x(x - 4)$. Multiply back out to check: $6x \\cdot x = 6x^2$ and $6x \\cdot (-4) = -24x$ ✓. (The choice $6x(x - 24)$ pulls the $6$ out of the first term but forgets to divide the $24$ by it, and it expands to $6x^2 - 144x$; the choice $x(6x - 4)$ divides the $24$ by $6$ without actually taking the $6$ outside, and it expands to $6x^2 - 4x$; the choice $6x(x + 4)$ loses the minus sign and expands to $6x^2 + 24x$.)',
    },
    {
      q: 'Factor $4y^2 + 14y$.',
      choices: ['$2y(2y + 14)$', '$2y(4y + 7)$', '$2y(2y - 7)$', '$2y(2y + 7)$'],
      answer: 3,
      solution:
        'The numbers $4$ and $14$ share a factor of $2$ (not $4$, since $4$ does not divide $14$), and both terms carry a $y$, so the common factor is $2y$. Dividing: $4y^2 \\div 2y = 2y$ and $14y \\div 2y = 7$, giving $2y(2y + 7)$. Multiply back out: $2y \\cdot 2y = 4y^2$ and $2y \\cdot 7 = 14y$ ✓. (The choice $2y(2y + 14)$ forgets to divide the second term by $2$ and expands to $4y^2 + 28y$; the choice $2y(4y + 7)$ forgets to divide the FIRST term and expands to $8y^2 + 14y$; the choice $2y(2y - 7)$ flips the sign and expands to $4y^2 - 14y$.)',
    },
    {
      q: 'Which expression is $9x^2 - 15x$ written in fully factored form?',
      choices: ['$3x(3x - 5)$', '$3x(x - 5)$', '$3x(3x + 5)$', '$3x(3x - 15)$'],
      answer: 0,
      solution:
        'The greatest common factor of $9x^2$ and $15x$ is $3x$: the numbers share a $3$, and both terms share one $x$. Dividing each term by $3x$ leaves $3x$ and $-5$, so $9x^2 - 15x = 3x(3x - 5)$. Multiply back out: $3x \\cdot 3x = 9x^2$ and $3x \\cdot (-5) = -15x$ ✓. (The choice $3x(x - 5)$ divides the $9$ by $3$ twice over and expands to $3x^2 - 15x$; the choice $3x(3x + 5)$ has the wrong sign and expands to $9x^2 + 15x$; the choice $3x(3x - 15)$ never divides the $15$ by $3$ and expands to $9x^2 - 45x$.)',
    },
  ],
  // p2 — factor instead of dividing by x, so x = 0 survives
  [
    {
      q: 'Solve $3x^2 = 21x$.',
      choices: ['$x = 0$ or $x = -7$', '$x = 7$ only', '$x = 0$ or $x = 7$', '$x = 0$ only'],
      answer: 2,
      solution:
        'Move everything to one side first: $3x^2 - 21x = 0$. Now factor out $3x$: $3x(x - 7) = 0$. The zero-product property gives $3x = 0$ or $x - 7 = 0$, so $x = 0$ or $x = 7$. Check forward in the original: $x = 0$ gives $0 = 0$ ✓, and $x = 7$ gives $3 \\cdot 49 = 147$ and $21 \\cdot 7 = 147$ ✓. (The choice $x = 7$ only comes from dividing both sides by $x$ at the start, which quietly throws away the solution $x = 0$ — never divide by the variable; the choice $x = 0$ only stops after the easy factor; the choice $x = 0$ or $x = -7$ copies the sign out of the factor $x - 7$ instead of flipping it, and $3 \\cdot 49 = 147 \\ne 21 \\cdot (-7) = -147$.)',
    },
    {
      q: 'Solve $5x^2 + 15x = 0$.',
      choices: ['$x = -3$ only', '$x = 0$ or $x = 3$', '$x = 0$ or $x = -15$', '$x = 0$ or $x = -3$'],
      answer: 3,
      solution:
        'Both terms share $5x$, so factor: $5x(x + 3) = 0$. Setting each factor to zero gives $x = 0$ or $x = -3$. Check forward: $x = 0$ gives $0 + 0 = 0$ ✓, and $x = -3$ gives $5 \\cdot 9 + 15 \\cdot (-3) = 45 - 45 = 0$ ✓. (The choice $x = -3$ only drops the bare factor of $x$, and $x = 0$ really is a solution; the choice $x = 0$ or $x = 3$ copies the sign out of $x + 3$, and $45 + 45 = 90 \\ne 0$; the choice $x = 0$ or $x = -15$ forgets to divide the $15$ by the $5$ that was pulled out, and $5 \\cdot 225 + 15 \\cdot (-15) = 1125 - 225 = 900 \\ne 0$.)',
    },
    {
      q: 'The equation $3x^2 = kx$ has exactly the two solutions $x = 0$ and $x = 5$. What is $k$?',
      choices: ['$k = 5$', '$k = 15$', '$k = 75$', '$k = 8$'],
      answer: 1,
      solution:
        'Substitute the non-zero solution and read off $k$: $x = 5$ gives $3 \\cdot 25 = 5k$, so $75 = 5k$ and $k = 15$. Check forward: $3x^2 = 15x$ becomes $3x(x - 5) = 0$, whose solutions are exactly $x = 0$ and $x = 5$ ✓. (The choice $k = 5$ copies the root straight into the coefficient slot, but $3x^2 = 5x$ has the solutions $0$ and $\\frac{5}{3}$; the choice $k = 75$ stops at $3 \\cdot 25$ and never divides by the $5$ on the right, and $3x^2 = 75x$ has the root $25$; the choice $k = 8$ ADDS $3$ and $5$ instead of multiplying.)',
    },
  ],
  // p3 — difference of squares, leading coefficient 1
  [
    {
      q: 'Factor $x^2 - 64$.',
      choices: ['$(x - 8)(x + 8)$', '$(x - 8)^2$', '$(x - 64)(x + 1)$', '$(x + 8)^2$'],
      answer: 0,
      solution:
        'Both terms are perfect squares and they are subtracted: $x^2 - 64 = x^2 - 8^2$. The difference-of-squares pattern $a^2 - b^2 = (a - b)(a + b)$ gives $(x - 8)(x + 8)$. Multiply back out: $x^2 + 8x - 8x - 64 = x^2 - 64$ ✓ — the two middle terms cancel, which is exactly why there is no middle term. (The choice $(x - 8)^2$ expands to $x^2 - 16x + 64$, which has a middle term AND the wrong sign on the constant; the choice $(x + 8)^2$ expands to $x^2 + 16x + 64$; the choice $(x - 64)(x + 1)$ uses the number $64$ itself instead of its square root and expands to $x^2 - 63x - 64$.)',
    },
    {
      q: 'Factor $y^2 - 121$.',
      choices: ['$(y - 11)^2$', '$(y - 11)(y + 11)$', '$(y + 11)^2$', '$(y - 1)(y + 121)$'],
      answer: 1,
      solution:
        'Since $121 = 11^2$, this is $y^2 - 11^2$, a difference of two squares, so it factors as $(y - 11)(y + 11)$. Multiply back out: $y^2 + 11y - 11y - 121 = y^2 - 121$ ✓. (The choice $(y - 11)^2$ expands to $y^2 - 22y + 121$; the choice $(y + 11)^2$ expands to $y^2 + 22y + 121$ — a perfect square always has a middle term, and our expression has none; the choice $(y - 1)(y + 121)$ has the right constant $-121$ but expands to $y^2 + 120y - 121$.)',
    },
    {
      q: 'Three of these expressions cannot be factored with the difference-of-squares pattern. Which one CAN?',
      choices: ['$x^2 + 25$', '$x^2 - 30$', '$x^2 - 25$', '$x^2 - 10x + 25$'],
      answer: 2,
      solution:
        'The pattern needs one square MINUS another square, and nothing else. Only $x^2 - 25$ fits: it is $x^2 - 5^2$, so it factors as $(x - 5)(x + 5)$. Check by expanding: $x^2 + 5x - 5x - 25 = x^2 - 25$ ✓. (The choice $x^2 + 25$ is a SUM of squares, and there is no such factoring pattern; the choice $x^2 - 30$ really is a difference, but $30$ is not a perfect square, so no whole number $b$ has $b^2 = 30$; the choice $x^2 - 10x + 25$ has a middle term, which rules the pattern out — it is the perfect square $(x - 5)^2$ instead.)',
    },
  ],
  // p4 — difference of squares when the leading coefficient is a square
  [
    {
      q: 'Factor $9x^2 - 16$.',
      choices: ['$(3x - 4)(3x + 4)$', '$(9x - 4)(x + 4)$', '$(3x - 4)^2$', '$(3x - 16)(3x + 1)$'],
      answer: 0,
      solution:
        'Write both terms as squares: $9x^2 = (3x)^2$ and $16 = 4^2$. The difference-of-squares pattern with $a = 3x$ and $b = 4$ gives $(3x - 4)(3x + 4)$. Multiply back out: $9x^2 + 12x - 12x - 16 = 9x^2 - 16$ ✓. (The choice $(9x - 4)(x + 4)$ splits the $9$ off by itself instead of taking the square root of $9x^2$, and it expands to $9x^2 + 32x - 16$; the choice $(3x - 4)^2$ expands to $9x^2 - 24x + 16$; the choice $(3x - 16)(3x + 1)$ uses $16$ itself rather than its square root and expands to $9x^2 - 45x - 16$.)',
    },
    {
      q: 'Factor $25x^2 - 4$.',
      choices: ['$(5x - 2)^2$', '$(25x - 2)(x + 2)$', '$(5x - 4)(5x + 1)$', '$(5x - 2)(5x + 2)$'],
      answer: 3,
      solution:
        'Both terms are squares: $25x^2 = (5x)^2$ and $4 = 2^2$. So $25x^2 - 4 = (5x - 2)(5x + 2)$. Multiply back out: $25x^2 + 10x - 10x - 4 = 25x^2 - 4$ ✓. (The choice $(5x - 2)^2$ expands to $25x^2 - 20x + 4$ — a perfect square, not a difference of squares; the choice $(25x - 2)(x + 2)$ never takes the square root of $25x^2$ and expands to $25x^2 + 48x - 4$; the choice $(5x - 4)(5x + 1)$ uses $4$ itself instead of $\\sqrt{4} = 2$ and expands to $25x^2 - 15x - 4$.)',
    },
    {
      q: 'Expand $(6x - 5)(6x + 5)$.',
      choices: ['$36x^2 - 25$', '$36x^2 + 25$', '$36x^2 - 60x + 25$', '$12x^2 - 25$'],
      answer: 0,
      solution:
        'Multiply term by term: $6x \\cdot 6x = 36x^2$, then $6x \\cdot 5 = 30x$ and $-5 \\cdot 6x = -30x$, which cancel, and finally $-5 \\cdot 5 = -25$. So the answer is $36x^2 - 25$ ✓ — the difference-of-squares pattern running forwards. (The choice $36x^2 + 25$ multiplies $-5$ by $+5$ and gets a positive, but a negative times a positive is negative; the choice $36x^2 - 60x + 25$ treats the product as the square $(6x - 5)^2$, which would need the SAME sign in both parentheses; the choice $12x^2 - 25$ doubles $6x$ instead of squaring it.)',
    },
  ],
  // p5 — factor ax^2 + bx + c with everything positive
  [
    {
      q: 'Factor $3x^2 + 8x + 4$.',
      choices: ['$(3x + 4)(x + 1)$', '$(3x + 2)(x + 2)$', '$(3x + 1)(x + 4)$', '$(3x - 2)(x - 2)$'],
      answer: 1,
      solution:
        'With a leading coefficient, hunt for two numbers with product $ac = 3 \\cdot 4 = 12$ and sum $8$: that is $6$ and $2$. Split the middle term and group: $3x^2 + 6x + 2x + 4 = 3x(x + 2) + 2(x + 2) = (3x + 2)(x + 2)$. Multiply back out: $3x^2 + 6x + 2x + 4 = 3x^2 + 8x + 4$ ✓. (The choice $(3x + 4)(x + 1)$ has the right constant but expands to $3x^2 + 7x + 4$ — the middle term betrays it; the choice $(3x + 1)(x + 4)$ swaps those two numbers and expands to $3x^2 + 13x + 4$; the choice $(3x - 2)(x - 2)$ flips both signs and expands to $3x^2 - 8x + 4$.)',
    },
    {
      q: 'Factor $2x^2 + 7x + 6$.',
      choices: ['$(2x + 6)(x + 1)$', '$(2x - 3)(x - 2)$', '$(2x + 3)(x + 2)$', '$(2x + 1)(x + 6)$'],
      answer: 2,
      solution:
        'We need product $ac = 2 \\cdot 6 = 12$ and sum $7$: the numbers $3$ and $4$. Split and group: $2x^2 + 3x + 4x + 6 = x(2x + 3) + 2(2x + 3) = (2x + 3)(x + 2)$. Multiply back out: $2x^2 + 4x + 3x + 6 = 2x^2 + 7x + 6$ ✓. (The choice $(2x + 6)(x + 1)$ expands to $2x^2 + 8x + 6$ — right constant, wrong middle term; the choice $(2x + 1)(x + 6)$ expands to $2x^2 + 13x + 6$; the choice $(2x - 3)(x - 2)$ uses the right numbers with both signs flipped and expands to $2x^2 - 7x + 6$.)',
    },
    {
      q: 'Which product expands to $5x^2 + 11x + 2$?',
      choices: ['$(5x + 2)(x + 1)$', '$(5x - 1)(x - 2)$', '$5(x + 1)(x + 2)$', '$(5x + 1)(x + 2)$'],
      answer: 3,
      solution:
        'We need two numbers with product $ac = 5 \\cdot 2 = 10$ and sum $11$: that is $10$ and $1$. Split and group: $5x^2 + 10x + x + 2 = 5x(x + 2) + 1(x + 2) = (5x + 1)(x + 2)$. Multiply back out: $5x^2 + 10x + x + 2 = 5x^2 + 11x + 2$ ✓. (The choice $(5x + 2)(x + 1)$ puts the two numbers in the wrong parentheses and expands to $5x^2 + 7x + 2$; the choice $(5x - 1)(x - 2)$ flips both signs and expands to $5x^2 - 11x + 2$; the choice $5(x + 1)(x + 2)$ pulls the $5$ out front as though it were a common factor, but $11$ and $2$ are not multiples of $5$, and it expands to $5x^2 + 15x + 10$.)',
    },
  ],
  // p6 — factor ax^2 + bx + c with a negative middle term
  [
    {
      q: 'Factor $2x^2 - 11x + 12$.',
      choices: ['$(2x - 4)(x - 3)$', '$(2x - 3)(x - 4)$', '$(2x - 12)(x - 1)$', '$(2x + 3)(x + 4)$'],
      answer: 1,
      solution:
        'We need product $ac = 2 \\cdot 12 = 24$ and sum $-11$. A positive product with a negative sum means both numbers are negative: $-8$ and $-3$. Split and group: $2x^2 - 8x - 3x + 12 = 2x(x - 4) - 3(x - 4) = (2x - 3)(x - 4)$. Multiply back out: $2x^2 - 8x - 3x + 12 = 2x^2 - 11x + 12$ ✓. (The choice $(2x - 4)(x - 3)$ expands to $2x^2 - 10x + 12$; the choice $(2x - 12)(x - 1)$ expands to $2x^2 - 14x + 12$ — both have the right constant and the wrong middle term; the choice $(2x + 3)(x + 4)$ flips both signs and expands to $2x^2 + 11x + 12$.)',
    },
    {
      q: 'Factor $3x^2 - 14x + 8$.',
      choices: ['$(3x - 8)(x - 1)$', '$(3x - 4)(x - 2)$', '$(3x - 1)(x - 8)$', '$(3x - 2)(x - 4)$'],
      answer: 3,
      solution:
        'We need product $ac = 3 \\cdot 8 = 24$ and sum $-14$: both numbers negative, namely $-12$ and $-2$. Split and group: $3x^2 - 12x - 2x + 8 = 3x(x - 4) - 2(x - 4) = (3x - 2)(x - 4)$. Multiply back out: $3x^2 - 12x - 2x + 8 = 3x^2 - 14x + 8$ ✓. (The choice $(3x - 4)(x - 2)$ expands to $3x^2 - 10x + 8$; the choice $(3x - 8)(x - 1)$ expands to $3x^2 - 11x + 8$; the choice $(3x - 1)(x - 8)$ expands to $3x^2 - 25x + 8$. All three have the right constant $8$ — only expanding tells them apart.)',
    },
    {
      q: 'When $5x^2 - 17x + 6$ is factored as $(5x + p)(x + q)$ with integers $p$ and $q$, what is $p + q$?',
      choices: ['$-5$', '$-17$', '$5$', '$6$'],
      answer: 0,
      solution:
        'We need product $ac = 5 \\cdot 6 = 30$ and sum $-17$: the numbers $-15$ and $-2$. Split and group: $5x^2 - 15x - 2x + 6 = 5x(x - 3) - 2(x - 3) = (5x - 2)(x - 3)$. Multiply back out to be sure: $5x^2 - 15x - 2x + 6 = 5x^2 - 17x + 6$ ✓. So $p = -2$ and $q = -3$, and $p + q = -5$. (The choice $-17$ copies the middle coefficient, but that coefficient is $5q + p$, not $p + q$; the choice $6$ names the PRODUCT $pq = (-2)(-3) = 6$ rather than the sum; the choice $5$ has the right size with both signs flipped, which would mean the factors were $(5x + 2)(x + 3)$ — and that expands to $5x^2 + 17x + 6$.)',
    },
  ],
  // p7 — solve ax^2 = c by dividing first, then both square roots
  [
    {
      q: 'Solve $3x^2 - 27 = 0$.',
      choices: ['$x = 27$ or $x = -27$', '$x = 3$ only', '$x = 3$ or $x = -3$', '$x = 9$ or $x = -9$'],
      answer: 2,
      solution:
        'Add $27$ to both sides: $3x^2 = 27$. Divide by $3$: $x^2 = 9$. Take BOTH square roots: $x = 3$ or $x = -3$. Check forward in the original: $3 \\cdot 3^2 - 27 = 27 - 27 = 0$ ✓ and $3 \\cdot (-3)^2 - 27 = 0$ ✓. (The choice $x = 9$ or $x = -9$ stops at $x^2 = 9$ and reports that value as $x$, and $3 \\cdot 81 - 27 = 216 \\ne 0$; the choice $x = 27$ or $x = -27$ never divides by $3$ at all; the choice $x = 3$ only forgets the negative twin.)',
    },
    {
      q: 'Solve $2x^2 - 50 = 0$.',
      choices: ['$x = 25$ or $x = -25$', '$x = 5$ or $x = -5$', '$x = 5$ only', '$x = 10$ or $x = -10$'],
      answer: 1,
      solution:
        'Move the constant across: $2x^2 = 50$, then divide by $2$: $x^2 = 25$, so $x = 5$ or $x = -5$. Check forward: $2 \\cdot 25 - 50 = 0$ ✓ for both, since $5^2$ and $(-5)^2$ are both $25$. (The choice $x = \\pm 25$ reports the value of $x^2$ instead of $x$, and $2 \\cdot 625 - 50 = 1200 \\ne 0$; the choice $x = \\pm 10$ MULTIPLIES by $2$ instead of dividing, landing on $x^2 = 100$, and $2 \\cdot 100 - 50 = 150 \\ne 0$; the choice $x = 5$ only drops the negative twin.)',
    },
    {
      q: 'Which equation has exactly the two solutions $x = 7$ and $x = -7$?',
      choices: ['$2x^2 - 49 = 0$', '$x^2 + 49 = 0$', '$2x^2 - 14 = 0$', '$2x^2 - 98 = 0$'],
      answer: 3,
      solution:
        'Substitute $x = 7$ into each and see which one gives $0$. In $2x^2 - 98 = 0$: $2 \\cdot 49 - 98 = 98 - 98 = 0$ ✓, and $x = -7$ gives the same thing since $(-7)^2 = 49$ ✓. (The choice $2x^2 - 49 = 0$ forgets to multiply the $49$ by the leading $2$, and its solutions are the messy $x = \\pm \\sqrt{24.5}$; the choice $x^2 + 49 = 0$ has NO real solutions, since $x^2 = -49$ is impossible; the choice $2x^2 - 14 = 0$ doubles the root instead of squaring it, and $2 \\cdot 49 - 14 = 84 \\ne 0$.)',
    },
  ],
  // p8 — solve ax^2 + bx + c = 0 with a fractional root
  [
    {
      q: 'Solve $2x^2 + 9x + 4 = 0$.',
      choices: [
        '$x = \\frac{1}{2}$ or $x = 4$',
        '$x = -2$ or $x = -4$',
        '$x = -\\frac{1}{2}$ or $x = -4$',
        '$x = -\\frac{1}{2}$ or $x = 4$',
      ],
      answer: 2,
      solution:
        'We need product $ac = 8$ and sum $9$: the numbers $8$ and $1$. Split and group: $2x^2 + 8x + x + 4 = 2x(x + 4) + 1(x + 4) = (2x + 1)(x + 4) = 0$. From $2x + 1 = 0$ we get $2x = -1$, so $x = -\\frac{1}{2}$; from $x + 4 = 0$ we get $x = -4$. Check forward: $2 \\cdot \\frac{1}{4} + 9 \\cdot (-\\frac{1}{2}) + 4 = \\frac{1}{2} - \\frac{9}{2} + 4 = 0$ ✓, and $2 \\cdot 16 - 36 + 4 = 0$ ✓. (The choice $x = \\frac{1}{2}$ or $x = 4$ copies both signs out of the factors instead of flipping them; the choice $x = -2$ or $x = -4$ reads the coefficient $2$ as a root instead of solving $2x + 1 = 0$, and $8 - 18 + 4 = -6 \\ne 0$; the choice $x = -\\frac{1}{2}$ or $x = 4$ flips only the second sign, and $32 + 36 + 4 = 72 \\ne 0$.)',
    },
    {
      q: 'Solve $3x^2 - 5x - 2 = 0$.',
      choices: [
        '$x = \\frac{1}{3}$ or $x = -2$',
        '$x = -\\frac{1}{3}$ or $x = 2$',
        '$x = -3$ or $x = 2$',
        '$x = -\\frac{1}{3}$ or $x = -2$',
      ],
      answer: 1,
      solution:
        'We need product $ac = 3 \\cdot (-2) = -6$ and sum $-5$: the numbers $-6$ and $1$. Split and group: $3x^2 - 6x + x - 2 = 3x(x - 2) + 1(x - 2) = (3x + 1)(x - 2) = 0$. So $3x = -1$, giving $x = -\\frac{1}{3}$, or $x = 2$. Check forward: $3 \\cdot \\frac{1}{9} - 5 \\cdot (-\\frac{1}{3}) - 2 = \\frac{1}{3} + \\frac{5}{3} - 2 = 0$ ✓, and $12 - 10 - 2 = 0$ ✓. (The choice $x = \\frac{1}{3}$ or $x = -2$ flips both signs; the choice $x = -3$ or $x = 2$ turns the fraction upside down, and $27 + 15 - 2 = 40 \\ne 0$; the choice $x = -\\frac{1}{3}$ or $x = -2$ flips the sign of the second root, and $12 + 10 - 2 = 20 \\ne 0$.)',
    },
    {
      q: 'One solution of $2x^2 - 7x + 3 = 0$ is $x = 3$. What is the other solution?',
      choices: ['$x = \\frac{1}{2}$', '$x = 2$', '$x = -\\frac{1}{2}$', '$x = \\frac{3}{2}$'],
      answer: 0,
      solution:
        'Factor to find both roots at once. Product $ac = 6$ and sum $-7$ give $-6$ and $-1$: $2x^2 - 6x - x + 3 = 2x(x - 3) - 1(x - 3) = (2x - 1)(x - 3) = 0$. The factor $x - 3$ gives the root we were handed, and $2x - 1 = 0$ gives the other one, $x = \\frac{1}{2}$. Check forward: $2 \\cdot \\frac{1}{4} - 7 \\cdot \\frac{1}{2} + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = 0$ ✓. (The choice $x = 2$ reads the leading coefficient as a root, and $8 - 14 + 3 = -3 \\ne 0$; the choice $x = -\\frac{1}{2}$ has the right size with the wrong sign, and $\\frac{1}{2} + \\frac{7}{2} + 3 = 7 \\ne 0$; the choice $x = \\frac{3}{2}$ builds the fraction upside down, and $\\frac{9}{2} - \\frac{21}{2} + 3 = -3 \\ne 0$.)',
    },
  ],
  // p9 — factor completely: common factor first, then difference of squares
  [
    {
      q: 'Factor $3x^2 - 75$ completely.',
      choices: ['$3(x - 5)(x + 5)$', '$3(x - 25)(x + 25)$', '$3(x - 5)^2$', '$(x - 5)(x + 5)$'],
      answer: 0,
      solution:
        'Pull out the common factor first: $3x^2 - 75 = 3(x^2 - 25)$. Now $x^2 - 25$ is a difference of squares, so the complete factorization is $3(x - 5)(x + 5)$. Multiply back out: $(x - 5)(x + 5) = x^2 - 25$, and $3(x^2 - 25) = 3x^2 - 75$ ✓. (The choice $3(x - 25)(x + 25)$ forgets to take the square root of $25$ and expands to $3x^2 - 1875$; the choice $3(x - 5)^2$ uses the perfect-square pattern and expands to $3x^2 - 30x + 75$, which has a middle term; the choice $(x - 5)(x + 5)$ drops the common factor $3$ entirely and expands to only $x^2 - 25$.)',
    },
    {
      q: 'Factor $5x^2 - 20$ completely.',
      choices: ['$5(x - 4)(x + 4)$', '$5(x - 2)^2$', '$(x - 2)(x + 2)$', '$5(x - 2)(x + 2)$'],
      answer: 3,
      solution:
        'Both terms share a factor of $5$: $5x^2 - 20 = 5(x^2 - 4)$. Then $x^2 - 4 = x^2 - 2^2$ is a difference of squares, giving $5(x - 2)(x + 2)$. Multiply back out: $5(x^2 - 4) = 5x^2 - 20$ ✓. (The choice $5(x - 4)(x + 4)$ uses $4$ instead of $\\sqrt{4} = 2$ and expands to $5x^2 - 80$; the choice $5(x - 2)^2$ expands to $5x^2 - 20x + 20$; the choice $(x - 2)(x + 2)$ forgets to put the $5$ back and expands to $x^2 - 4$.)',
    },
    {
      q: 'Which expression is $12x^2 - 27$ in fully factored form?',
      choices: ['$3(4x - 9)(4x + 9)$', '$(2x - 3)(2x + 3)$', '$3(2x - 3)(2x + 3)$', '$3(2x - 3)^2$'],
      answer: 2,
      solution:
        'Neither $12$ nor $27$ is a perfect square, so pull out the common factor first: $12x^2 - 27 = 3(4x^2 - 9)$. Now the inside IS a difference of squares, since $4x^2 = (2x)^2$ and $9 = 3^2$, giving $3(2x - 3)(2x + 3)$. Multiply back out: $(2x - 3)(2x + 3) = 4x^2 - 9$, and $3(4x^2 - 9) = 12x^2 - 27$ ✓. (The choice $3(4x - 9)(4x + 9)$ copies $4x^2$ and $9$ instead of their square roots and expands to $48x^2 - 243$; the choice $(2x - 3)(2x + 3)$ drops the $3$ out front and expands to only $4x^2 - 9$; the choice $3(2x - 3)^2$ uses the perfect-square pattern and expands to $12x^2 - 36x + 27$.)',
    },
  ],
  // p10 — perfect-square trinomial with a leading coefficient: one double root
  [
    {
      q: 'Solve $9x^2 - 30x + 25 = 0$.',
      choices: [
        '$x = \\frac{5}{3}$ or $x = -\\frac{5}{3}$',
        '$x = \\frac{5}{3}$ only',
        '$x = \\frac{3}{5}$ only',
        '$x = -\\frac{5}{3}$ only',
      ],
      answer: 1,
      solution:
        'Check the perfect-square pattern: $9x^2 = (3x)^2$, $25 = 5^2$, and the middle term should be $2 \\cdot 3x \\cdot 5 = 30x$ — it matches, so $9x^2 - 30x + 25 = (3x - 5)^2$. A square equals $0$ only when the thing being squared is $0$, so $3x - 5 = 0$ and $x = \\frac{5}{3}$, a single (double) root. Check forward: $9 \\cdot \\frac{25}{9} - 30 \\cdot \\frac{5}{3} + 25 = 25 - 50 + 25 = 0$ ✓. (The choice $x = \\pm \\frac{5}{3}$ attaches a negative twin that belongs only when a square equals a POSITIVE number, and $x = -\\frac{5}{3}$ gives $25 + 50 + 25 = 100 \\ne 0$; the choice $x = -\\frac{5}{3}$ only copies the sign out of the factor instead of flipping it; the choice $x = \\frac{3}{5}$ turns the fraction upside down, and $9 \\cdot \\frac{9}{25} - 18 + 25 \\ne 0$.)',
    },
    {
      q: 'Solve $25x^2 + 20x + 4 = 0$.',
      choices: [
        '$x = \\frac{2}{5}$ only',
        '$x = -\\frac{2}{5}$ or $x = \\frac{2}{5}$',
        '$x = -\\frac{5}{2}$ only',
        '$x = -\\frac{2}{5}$ only',
      ],
      answer: 3,
      solution:
        'This is a perfect square: $25x^2 = (5x)^2$, $4 = 2^2$, and $2 \\cdot 5x \\cdot 2 = 20x$ matches the middle term, so $25x^2 + 20x + 4 = (5x + 2)^2$. Then $(5x + 2)^2 = 0$ forces $5x + 2 = 0$, so $x = -\\frac{2}{5}$ — one solution only. Check forward: $25 \\cdot \\frac{4}{25} + 20 \\cdot (-\\frac{2}{5}) + 4 = 4 - 8 + 4 = 0$ ✓. (The choice $x = \\frac{2}{5}$ only copies the sign out of the factor rather than flipping it, and $4 + 8 + 4 = 16 \\ne 0$; the choice listing both $\\pm \\frac{2}{5}$ adds a twin that only a positive right-hand side would justify; the choice $x = -\\frac{5}{2}$ writes the fraction upside down, and $25 \\cdot \\frac{25}{4} - 50 + 4 \\ne 0$.)',
    },
    {
      q: 'For which value of $c$ does $16x^2 - 24x + c = 0$ have exactly ONE solution?',
      choices: ['$c = 3$', '$c = 144$', '$c = 9$', '$c = 24$'],
      answer: 2,
      solution:
        'Exactly one solution means the left side is a perfect square $(4x - b)^2$, since $16x^2 = (4x)^2$. Expanding, $(4x - b)^2 = 16x^2 - 8bx + b^2$, so the middle term gives $8b = 24$ and $b = 3$; then $c = b^2 = 9$. Check forward: $16x^2 - 24x + 9 = (4x - 3)^2$, whose only root is $x = \\frac{3}{4}$, and $16 \\cdot \\frac{9}{16} - 24 \\cdot \\frac{3}{4} + 9 = 9 - 18 + 9 = 0$ ✓. (The choice $c = 3$ finds $b = 3$ but forgets to square it; the choice $c = 144$ uses the shortcut for a LEADING COEFFICIENT OF ONE — half of $24$, then squared — ignoring the $16$; the choice $c = 24$ just copies the middle coefficient.)',
    },
  ],
]

const s104 = [
  // p1 — sum of the roots of a monic quadratic is -b
  [
    {
      q: 'What is the sum of the roots of $x^2 - 8x + 15 = 0$?',
      choices: ['$15$', '$-8$', '$8$', '$-15$'],
      answer: 2,
      solution:
        'For $x^2 + bx + c = 0$ the two roots add up to $-b$. Here $b = -8$, so the sum is $-(-8) = 8$. Check forward by actually finding the roots: $x^2 - 8x + 15 = (x - 3)(x - 5)$, so the roots are $3$ and $5$, and $3 + 5 = 8$ ✓. (The choice $-8$ copies the coefficient $b$ without applying the built-in minus sign; the choice $15$ names the PRODUCT of the roots, which is $c$; the choice $-15$ flips the sign of that product.)',
    },
    {
      q: 'What is the sum of the roots of $x^2 + 6x + 8 = 0$?',
      choices: ['$-6$', '$6$', '$8$', '$-8$'],
      answer: 0,
      solution:
        'The sum of the roots is $-b$, and here $b = 6$, so the sum is $-6$. Check forward: $x^2 + 6x + 8 = (x + 2)(x + 4)$, so the roots are $-2$ and $-4$, and $-2 + (-4) = -6$ ✓. (The choice $6$ forgets the minus sign in the formula — with both roots negative, their sum could not possibly be positive; the choice $8$ names the product $c$ instead of the sum; the choice $-8$ is that product with a sign flip, but the product of two negatives is positive.)',
    },
    {
      q: 'The roots of $x^2 + bx + 12 = 0$ are $2$ and $6$. What is $b$?',
      choices: ['$b = 8$', '$b = -8$', '$b = 12$', '$b = -12$'],
      answer: 1,
      solution:
        'The roots add to $2 + 6 = 8$, and that sum equals $-b$, so $-b = 8$ and $b = -8$. Check forward: $x^2 - 8x + 12 = (x - 2)(x - 6)$, and substituting $x = 2$ gives $4 - 16 + 12 = 0$ ✓. (The choice $b = 8$ reports the sum itself and forgets to negate it, and $x^2 + 8x + 12$ has roots $-2$ and $-6$; the choice $b = 12$ copies the constant term; the choice $b = -12$ negates that constant term instead of the sum.)',
    },
  ],
  // p2 — product of the roots of a monic quadratic is c
  [
    {
      q: 'What is the product of the roots of $x^2 - 5x - 24 = 0$?',
      choices: ['$-24$', '$5$', '$24$', '$-5$'],
      answer: 0,
      solution:
        'For $x^2 + bx + c = 0$, the roots multiply to $c$ — no minus sign this time. Here $c = -24$, so the product is $-24$. Check forward: $x^2 - 5x - 24 = (x - 8)(x + 3)$, so the roots are $8$ and $-3$, and $8 \\cdot (-3) = -24$ ✓. (The choice $24$ drops the minus sign that is already part of $c$; the choice $5$ names the SUM of the roots, $-b = 5$; the choice $-5$ is that sum with the minus sign left in by mistake.)',
    },
    {
      q: 'What is the product of the roots of $x^2 + 7x + 10 = 0$?',
      choices: ['$-10$', '$-7$', '$7$', '$10$'],
      answer: 3,
      solution:
        'The product of the roots is $c$, which is $10$. Check forward: $x^2 + 7x + 10 = (x + 2)(x + 5)$, so the roots are $-2$ and $-5$, and $(-2)(-5) = 10$ ✓ — two negatives multiply to a positive. (The choice $-10$ attaches a minus sign that belongs to the SUM formula, not the product one; the choice $-7$ names the sum of the roots; the choice $7$ copies the coefficient $b$ without its minus sign.)',
    },
    {
      q: 'The two roots of $x^2 - 3x + c = 0$ are $-2$ and $5$. What is $c$?',
      choices: ['$c = 3$', '$c = 10$', '$c = -10$', '$c = -3$'],
      answer: 2,
      solution:
        'The constant term IS the product of the roots: $c = (-2)(5) = -10$. Check forward: $x^2 - 3x - 10 = (x + 2)(x - 5)$, and substituting $x = -2$ gives $4 + 6 - 10 = 0$ ✓. As a bonus check, the roots also sum correctly: $-2 + 5 = 3 = -b$ ✓. (The choice $c = 10$ multiplies the two roots as if both were positive; the choice $c = 3$ reports the SUM of the roots instead of the product; the choice $c = -3$ is that sum negated.)',
    },
  ],
  // p3 — sum of the roots when the leading coefficient is not 1
  [
    {
      q: 'What is the sum of the roots of $3x^2 - 15x + 7 = 0$?',
      choices: ['$5$', '$-5$', '$15$', '$\\frac{7}{3}$'],
      answer: 0,
      solution:
        'With a leading coefficient the rule is sum $= -\\frac{b}{a}$. Here $a = 3$ and $b = -15$, so the sum is $-\\frac{-15}{3} = 5$. Check forward with a friendlier relative: dividing the whole equation by $3$ gives $x^2 - 5x + \\frac{7}{3} = 0$, whose roots must add to $5$ ✓. (The choice $-5$ misses the minus sign built into the formula, which would flip the answer; the choice $15$ forgets to divide by $a = 3$; the choice $\\frac{7}{3}$ is the PRODUCT $\\frac{c}{a}$, not the sum.)',
    },
    {
      q: 'What is the sum of the roots of $4x^2 + 10x - 3 = 0$?',
      choices: ['$\\frac{5}{2}$', '$-10$', '$-\\frac{5}{2}$', '$-\\frac{3}{4}$'],
      answer: 2,
      solution:
        'Sum $= -\\frac{b}{a} = -\\frac{10}{4} = -\\frac{5}{2}$. Check forward: dividing through by $4$ gives $x^2 + \\frac{5}{2}x - \\frac{3}{4} = 0$, and for a monic quadratic the roots add to the opposite of the middle coefficient, namely $-\\frac{5}{2}$ ✓. (The choice $\\frac{5}{2}$ forgets the minus sign; the choice $-10$ keeps the minus but never divides by $a = 4$; the choice $-\\frac{3}{4}$ is the product $\\frac{c}{a}$ of the roots, not their sum.)',
    },
    {
      q: 'The sum of the roots of $2x^2 + bx - 9 = 0$ is $7$. What is $b$?',
      choices: ['$b = 14$', '$b = -7$', '$b = -14$', '$b = \\frac{7}{2}$'],
      answer: 2,
      solution:
        'The sum of the roots is $-\\frac{b}{a} = -\\frac{b}{2}$, and we are told that equals $7$. So $-\\frac{b}{2} = 7$, giving $-b = 14$ and $b = -14$. Check forward: $2x^2 - 14x - 9 = 0$ has root sum $-\\frac{-14}{2} = 7$ ✓. (The choice $b = 14$ solves $\\frac{b}{2} = 7$ and forgets the minus sign; the choice $b = -7$ negates the sum but never multiplies by $a = 2$; the choice $b = \\frac{7}{2}$ divides by $a$ where it should multiply, and it drops the minus sign too.)',
    },
  ],
  // p4 — build a quadratic from its roots
  [
    {
      q: 'Which quadratic equation has roots $2$ and $9$?',
      choices: ['$x^2 + 11x + 18 = 0$', '$x^2 - 11x + 18 = 0$', '$x^2 - 18x + 11 = 0$', '$x^2 + 11x - 18 = 0$'],
      answer: 1,
      solution:
        'Use the recipe $x^2 - (\\text{sum})x + (\\text{product}) = 0$. The sum is $2 + 9 = 11$ and the product is $2 \\cdot 9 = 18$, so the equation is $x^2 - 11x + 18 = 0$. Check forward: $x = 2$ gives $4 - 22 + 18 = 0$ ✓ and $x = 9$ gives $81 - 99 + 18 = 0$ ✓. (The choice $x^2 + 11x + 18 = 0$ forgets the minus sign in front of the sum, so its roots are $-2$ and $-9$; the choice $x^2 - 18x + 11 = 0$ swaps the sum and the product; the choice $x^2 + 11x - 18 = 0$ gets both signs wrong, and $4 + 22 - 18 = 8 \\ne 0$.)',
    },
    {
      q: 'Which quadratic equation has roots $-3$ and $5$?',
      choices: ['$x^2 + 2x - 15 = 0$', '$x^2 - 2x + 15 = 0$', '$x^2 - 2x - 15 = 0$', '$x^2 + 2x + 15 = 0$'],
      answer: 2,
      solution:
        'The sum is $-3 + 5 = 2$ and the product is $(-3)(5) = -15$, so the equation is $x^2 - 2x - 15 = 0$. Check forward: $x = -3$ gives $9 + 6 - 15 = 0$ ✓ and $x = 5$ gives $25 - 10 - 15 = 0$ ✓. (The choice $x^2 + 2x - 15 = 0$ forgets to negate the sum, so its roots are $3$ and $-5$; the choice $x^2 - 2x + 15 = 0$ makes the product positive, as if both roots had the same sign; the choice $x^2 + 2x + 15 = 0$ gets both wrong, and $9 - 6 + 15 = 18 \\ne 0$.)',
    },
    {
      q: 'A quadratic equation $x^2 + bx + c = 0$ has roots $-4$ and $-6$. What are $b$ and $c$?',
      choices: [
        '$b = 10$, $c = 24$',
        '$b = -10$, $c = 24$',
        '$b = 10$, $c = -24$',
        '$b = -10$, $c = -24$',
      ],
      answer: 0,
      solution:
        'The roots sum to $-4 + (-6) = -10$, and the sum equals $-b$, so $b = 10$. The roots multiply to $(-4)(-6) = 24$, and the product equals $c$, so $c = 24$. Check forward: $x^2 + 10x + 24 = (x + 4)(x + 6)$, and $x = -4$ gives $16 - 40 + 24 = 0$ ✓. (The choice $b = -10$, $c = 24$ copies the sum straight into $b$ without negating it; the choice $b = 10$, $c = -24$ mishandles the product of two negatives; the choice $b = -10$, $c = -24$ makes both of those mistakes at once.)',
    },
  ],
  // p5 — product of the roots when the leading coefficient is not 1
  [
    {
      q: 'What is the product of the roots of $2x^2 - 5x - 12 = 0$?',
      choices: ['$-6$', '$-12$', '$6$', '$\\frac{5}{2}$'],
      answer: 0,
      solution:
        'The rule is product $= \\frac{c}{a} = \\frac{-12}{2} = -6$. Check forward by factoring: product $ac = -24$ and sum $-5$ give $-8$ and $3$, so $2x^2 - 8x + 3x - 12 = 2x(x - 4) + 3(x - 4) = (2x + 3)(x - 4)$. The roots are $-\\frac{3}{2}$ and $4$, and $-\\frac{3}{2} \\cdot 4 = -6$ ✓. (The choice $-12$ forgets to divide $c$ by $a$; the choice $6$ has the right size but the wrong sign, and one root here is negative while the other is positive; the choice $\\frac{5}{2}$ is the SUM $-\\frac{b}{a}$, not the product.)',
    },
    {
      q: 'What is the product of the roots of $5x^2 + 3x - 4 = 0$?',
      choices: ['$-4$', '$\\frac{4}{5}$', '$-\\frac{3}{5}$', '$-\\frac{4}{5}$'],
      answer: 3,
      solution:
        'Product $= \\frac{c}{a} = \\frac{-4}{5} = -\\frac{4}{5}$. Check the idea on a friendlier relative: dividing the equation by $5$ gives $x^2 + \\frac{3}{5}x - \\frac{4}{5} = 0$, and for a monic quadratic the product of the roots is the constant term, $-\\frac{4}{5}$ ✓. (The choice $-4$ never divides by $a = 5$; the choice $\\frac{4}{5}$ loses the minus sign, but $c$ is negative so the product must be too; the choice $-\\frac{3}{5}$ is the SUM $-\\frac{b}{a}$, which uses $b$ rather than $c$.)',
    },
    {
      q: 'The product of the roots of $3x^2 + 4x + c = 0$ is $-5$. What is $c$?',
      choices: ['$c = -5$', '$c = 15$', '$c = -\\frac{5}{3}$', '$c = -15$'],
      answer: 3,
      solution:
        'The product of the roots is $\\frac{c}{a} = \\frac{c}{3}$, and we are told it equals $-5$. So $\\frac{c}{3} = -5$ and $c = -15$. Check forward: $3x^2 + 4x - 15 = 0$ has root product $\\frac{-15}{3} = -5$ ✓. (The choice $c = -5$ copies the product straight into $c$, forgetting that $c$ still has to be divided by $a$; the choice $c = -\\frac{5}{3}$ DIVIDES by $3$ where it should multiply; the choice $c = 15$ multiplies correctly but loses the minus sign.)',
    },
  ],
  // p6 — r^2 + s^2 from a given sum and product
  [
    {
      q: 'If $r + s = 7$ and $rs = 10$, what is $r^2 + s^2$?',
      choices: ['$39$', '$29$', '$49$', '$-6$'],
      answer: 1,
      solution:
        'Use the identity $r^2 + s^2 = (r + s)^2 - 2rs$, which comes from expanding $(r + s)^2 = r^2 + 2rs + s^2$ and taking the extra $2rs$ back off. Substituting: $7^2 - 2 \\cdot 10 = 49 - 20 = 29$. Check with real numbers that fit: $r = 2$ and $s = 5$ have sum $7$ and product $10$, and $4 + 25 = 29$ ✓. (The choice $39$ subtracts only ONE $rs$ instead of two; the choice $49$ forgets to subtract at all, which would claim $r^2 + s^2 = (r + s)^2$; the choice $-6$ doubles the $7$ instead of squaring it, giving $14 - 20$.)',
    },
    {
      q: 'If $r + s = -4$ and $rs = 3$, what is $r^2 + s^2$?',
      choices: ['$10$', '$13$', '$16$', '$22$'],
      answer: 0,
      solution:
        'Apply $r^2 + s^2 = (r + s)^2 - 2rs = (-4)^2 - 2 \\cdot 3 = 16 - 6 = 10$. Note that $(-4)^2$ is $+16$ — squaring erases the minus sign. Check with real numbers: $r = -1$ and $s = -3$ have sum $-4$ and product $3$, and $1 + 9 = 10$ ✓. (The choice $13$ subtracts only one $rs$; the choice $16$ stops at $(r + s)^2$ and never subtracts; the choice $22$ ADDS $2rs$ instead of subtracting it, which is just $(r+s)^2$ expanded, not $r^2 + s^2$.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 6x + 5 = 0$, what is $r^2 + s^2$?',
      choices: ['$31$', '$36$', '$26$', '$46$'],
      answer: 2,
      solution:
        'Read the sum and product off the coefficients first: $r + s = -(-6) = 6$ and $rs = 5$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 36 - 10 = 26$. Check forward: $x^2 - 6x + 5 = (x - 1)(x - 5)$, so the roots really are $1$ and $5$, and $1 + 25 = 26$ ✓. (The choice $31$ subtracts only one $rs$; the choice $36$ forgets the $-2rs$ correction entirely; the choice $46$ adds $2rs$ instead of subtracting it.)',
    },
  ],
  // p7 — the reciprocal sum 1/r + 1/s
  [
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 8x + 12 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$-\\frac{2}{3}$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        'Put the two fractions over a common denominator: $\\frac{1}{r} + \\frac{1}{s} = \\frac{s + r}{rs}$. From the coefficients, $r + s = 8$ and $rs = 12$, so the answer is $\\frac{8}{12} = \\frac{2}{3}$. Check forward: $x^2 - 8x + 12 = (x - 2)(x - 6)$, so the roots are $2$ and $6$, and $\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$ ✓. (The choice $\\frac{3}{2}$ builds the fraction upside down as $\\frac{rs}{r + s}$; the choice $-\\frac{2}{3}$ borrows the minus sign from the SUM formula, but that minus was already used up when we turned $b = -8$ into $8$; the choice $\\frac{1}{8}$ treats $\\frac{1}{r} + \\frac{1}{s}$ as $\\frac{1}{r + s}$, which is not how fractions add.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 7x + 10 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{10}{7}$', '$-\\frac{7}{10}$', '$\\frac{7}{10}$', '$\\frac{1}{7}$'],
      answer: 2,
      solution:
        'Combine over a common denominator: $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$. The coefficients give $r + s = 7$ and $rs = 10$, so the value is $\\frac{7}{10}$. Check forward: $x^2 - 7x + 10 = (x - 2)(x - 5)$, so the roots are $2$ and $5$, and $\\frac{1}{2} + \\frac{1}{5} = \\frac{5}{10} + \\frac{2}{10} = \\frac{7}{10}$ ✓. (The choice $\\frac{10}{7}$ is the fraction upside down, $\\frac{rs}{r+s}$; the choice $-\\frac{7}{10}$ adds a stray minus sign, but both roots are positive so their reciprocals must add to something positive; the choice $\\frac{1}{7}$ adds the fractions as $\\frac{1}{r + s}$.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $3x^2 - 14x + 8 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{8}{7}$', '$-\\frac{7}{4}$', '$\\frac{14}{3}$', '$\\frac{7}{4}$'],
      answer: 3,
      solution:
        'Again $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$. With $a = 3$: $r + s = -\\frac{-14}{3} = \\frac{14}{3}$ and $rs = \\frac{8}{3}$. Dividing: $\\frac{14/3}{8/3} = \\frac{14}{3} \\cdot \\frac{3}{8} = \\frac{14}{8} = \\frac{7}{4}$ ✓. Notice something neat — the two $3$’s cancel, so this expression is always just $\\frac{-b}{c} = \\frac{14}{8} = \\frac{7}{4}$. Check forward: $3x^2 - 14x + 8 = (3x - 2)(x - 4)$, so the roots are $\\frac{2}{3}$ and $4$, and $\\frac{3}{2} + \\frac{1}{4} = \\frac{6}{4} + \\frac{1}{4} = \\frac{7}{4}$ ✓. (The choice $\\frac{8}{7}$ is the reciprocal of the answer, from writing $\\frac{rs}{r + s}$; the choice $-\\frac{7}{4}$ keeps a minus sign that was already spent turning $b = -14$ into $+14$; the choice $\\frac{14}{3}$ reports the SUM of the roots and forgets to divide by the product.)',
    },
  ],
  // p8 — a shifted product like (r + k)(s + k)
  [
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 5x - 14 = 0$, what is $(r + 2)(s + 2)$?',
      choices: ['$0$', '$-4$', '$-5$', '$-14$'],
      answer: 0,
      solution:
        'Expand first so that only the sum and the product appear: $(r + 2)(s + 2) = rs + 2r + 2s + 4 = rs + 2(r + s) + 4$. The coefficients give $r + s = 5$ and $rs = -14$, so the value is $-14 + 2 \\cdot 5 + 4 = -14 + 10 + 4 = 0$. Check forward: $x^2 - 5x - 14 = (x - 7)(x + 2)$, so the roots are $7$ and $-2$, and $(7 + 2)(-2 + 2) = 9 \\cdot 0 = 0$ ✓ — one root is exactly $-2$, which is why the answer lands on zero. (The choice $-4$ forgets the final $+4$; the choice $-5$ forgets to DOUBLE the sum, using $rs + (r + s) + 4$; the choice $-14$ reports $rs$ alone.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 6x + 8 = 0$, what is $(r - 1)(s - 1)$?',
      choices: ['$2$', '$3$', '$8$', '$15$'],
      answer: 1,
      solution:
        'Expand: $(r - 1)(s - 1) = rs - r - s + 1 = rs - (r + s) + 1$. From the coefficients, $r + s = 6$ and $rs = 8$, so the value is $8 - 6 + 1 = 3$. Check forward: $x^2 - 6x + 8 = (x - 2)(x - 4)$, so the roots are $2$ and $4$, and $(2 - 1)(4 - 1) = 1 \\cdot 3 = 3$ ✓. (The choice $2$ forgets the final $+1$; the choice $15$ ADDS the sum instead of subtracting it, giving $8 + 6 + 1$; the choice $8$ reports $rs$ by itself, as if the $-1$s did nothing.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 + 3x - 10 = 0$, what is $(r + 1)(s + 1)$?',
      choices: ['$-6$', '$-13$', '$-10$', '$-12$'],
      answer: 3,
      solution:
        'Expand: $(r + 1)(s + 1) = rs + r + s + 1 = rs + (r + s) + 1$. Here $r + s = -3$ (remember the minus sign) and $rs = -10$, so the value is $-10 + (-3) + 1 = -12$. Check forward: $x^2 + 3x - 10 = (x - 2)(x + 5)$, so the roots are $2$ and $-5$, and $(2 + 1)(-5 + 1) = 3 \\cdot (-4) = -12$ ✓. (The choice $-6$ uses $+3$ for the sum and forgets that the sum is $-b$; the choice $-13$ forgets the final $+1$; the choice $-10$ reports $rs$ alone.)',
    },
  ],
  // p9 — a relationship between the two roots pins down a missing coefficient
  [
    {
      q: 'One root of $x^2 - 24x + k = 0$ is three times the other. What is $k$?',
      choices: ['$192$', '$108$', '$144$', '$128$'],
      answer: 1,
      solution:
        'Call the smaller root $r$; then the other is $3r$. Their sum must be $-b = 24$, so $r + 3r = 4r = 24$ and $r = 6$, making the roots $6$ and $18$. Then $k$ is their product: $k = 6 \\cdot 18 = 108$. Check forward: $x^2 - 24x + 108 = (x - 6)(x - 18)$, and $18$ really is three times $6$ ✓. (The choice $192$ sets $3r = 24$ instead of $4r = 24$, landing on the pair $8$ and $24$, which sums to $32$, not $24$; the choice $144$ ignores the "three times" clue and splits the sum evenly into $12$ and $12$; the choice $128$ reads "three times" as "twice", giving the pair $8$ and $16$.)',
    },
    {
      q: 'The two roots of $x^2 - 14x + k = 0$ differ by $6$. What is $k$?',
      choices: ['$48$', '$49$', '$24$', '$40$'],
      answer: 3,
      solution:
        'The roots add to $-b = 14$, so they sit the same distance on each side of $7$. To differ by $6$, each must be $3$ away: the roots are $4$ and $10$. Then $k$ is their product: $k = 4 \\cdot 10 = 40$. Check forward: $x^2 - 14x + 40 = (x - 4)(x - 10)$, the roots sum to $14$ ✓ and differ by $10 - 4 = 6$ ✓. (The choice $48$ steps only $1$ away from $7$ in each direction, giving $6$ and $8$, which differ by $2$, not $6$; the choice $49$ ignores the gap entirely and uses $7$ and $7$; the choice $24$ reads "differ by $6$" as "$6$ times as big", giving the pair $2$ and $12$.)',
    },
    {
      q: 'One root of $x^2 + bx + 20 = 0$ is $5$ times the other, and both roots are positive. What is $b$?',
      choices: ['$-12$', '$12$', '$-24$', '$-6$'],
      answer: 0,
      solution:
        'Call the smaller root $r$; the other is $5r$. This time the PRODUCT is the fact we are given: $r \\cdot 5r = 5r^2 = 20$, so $r^2 = 4$ and $r = 2$ (we keep the positive root, as the problem says). The roots are $2$ and $10$, so their sum is $12$, and since the sum equals $-b$ we get $b = -12$. Check forward: $x^2 - 12x + 20 = (x - 2)(x - 10)$, and $10$ is five times $2$ ✓. (The choice $12$ finds the sum correctly but forgets to negate it; the choice $-24$ sets $5r = 20$ instead of $5r^2 = 20$, giving the pair $4$ and $20$, whose product is $80$, not $20$; the choice $-6$ takes the pair $1$ and $5$ — the ratio is right, but the product is $5$, not $20$.)',
    },
  ],
  // p10 — a symmetric expression when the leading coefficient is not 1
  [
    {
      q: 'If $r$ and $s$ are the roots of $2x^2 - 8x + 3 = 0$, what is $r^2 + s^2$?',
      choices: ['$16$', '$13$', '$10$', '$58$'],
      answer: 1,
      solution:
        'Get the sum and product with $a$ included: $r + s = -\\frac{-8}{2} = 4$ and $rs = \\frac{3}{2}$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 4^2 - 2 \\cdot \\frac{3}{2} = 16 - 3 = 13$. Check the size another way: dividing the equation by $2$ gives $x^2 - 4x + 1.5 = 0$, whose roots add to $4$ and multiply to $1.5$ ✓, and $16 - 3 = 13$ ✓. (The choice $16$ forgets the $-2rs$ correction; the choice $10$ uses $rs = 3$ without dividing $c$ by $a$; the choice $58$ forgets to divide $b$ by $a$ as well, using sum $8$ and product $3$ to get $64 - 6$.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $2x^2 + 10x + 7 = 0$, what is $r^2 + s^2$?',
      choices: ['$25$', '$11$', '$18$', '$86$'],
      answer: 2,
      solution:
        'With $a = 2$: $r + s = -\\frac{10}{2} = -5$ and $rs = \\frac{7}{2}$. Then $r^2 + s^2 = (r + s)^2 - 2rs = (-5)^2 - 2 \\cdot \\frac{7}{2} = 25 - 7 = 18$. Notice the $2$ in $2rs$ cancels the $2$ in the denominator — tidy! (The choice $25$ stops at $(r + s)^2$ and never subtracts; the choice $11$ uses $rs = 7$ without dividing by $a$, giving $25 - 14$; the choice $86$ skips dividing $b$ by $a$ too, using sum $-10$ and product $7$ to get $100 - 14$.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $2x^2 - 7x + 3 = 0$, what is $(r - s)^2$?',
      choices: ['$\\frac{49}{4}$', '$\\frac{37}{4}$', '$-\\frac{47}{4}$', '$\\frac{25}{4}$'],
      answer: 3,
      solution:
        'Expand and rewrite in terms of the sum and product: $(r - s)^2 = r^2 - 2rs + s^2 = (r + s)^2 - 4rs$ (we subtract FOUR $rs$, because going from $+2rs$ to $-2rs$ costs $4rs$). With $a = 2$: $r + s = \\frac{7}{2}$ and $rs = \\frac{3}{2}$, so $(r - s)^2 = \\frac{49}{4} - 4 \\cdot \\frac{3}{2} = \\frac{49}{4} - 6 = \\frac{25}{4}$. Check forward: $2x^2 - 7x + 3 = (2x - 1)(x - 3)$, so the roots are $\\frac{1}{2}$ and $3$, and $(3 - \\frac{1}{2})^2 = (\\frac{5}{2})^2 = \\frac{25}{4}$ ✓. (The choice $\\frac{49}{4}$ forgets the $-4rs$ entirely; the choice $\\frac{37}{4}$ subtracts only $2rs$, which computes $r^2 + s^2$ instead; the choice $-\\frac{47}{4}$ uses $rs = 3$ without dividing by $a$, and a squared quantity can never come out negative.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 10,
  sections: { '10.3': s103, '10.4': s104 },
}
