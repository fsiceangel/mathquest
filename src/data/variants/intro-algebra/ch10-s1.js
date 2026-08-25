// Introduction to Algebra chapter 10 — variations for sections 10.1 and 10.2.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: each claimed root is substituted back into the ORIGINAL equation
//    and shown to give $0$ (or to satisfy the original statement), and every
//    factorization is multiplied back out term by term.
//  - Each distractor is one named mistake, and the name is stated in a
//    parenthetical at the end of the solution. The three most common traps in
//    this chapter run through the whole file: FORGETTING THE NEGATIVE TWIN when
//    undoing a square, COPYING THE SIGN out of a factor instead of flipping it,
//    and RIGHT PRODUCT / WRONG SUM when hunting for the two numbers.
//  - No two choices inside an item name the same number or the same PAIR of
//    numbers, in any order.

const s101 = [
  // p1 — recognize a quadratic equation / standard form
  [
    {
      q: 'Which of these equations is quadratic?',
      choices: ['$x^2 - 4x = 9$', '$9x - 4 = 0$', '$x^4 - 4x = 9$', '$\\frac{4}{x} = 9$'],
      answer: 0,
      solution:
        'A quadratic equation is one that can be rearranged into $ax^2 + bx + c = 0$ with $a \\ne 0$, so the highest power of $x$ must be exactly $2$. Move everything to one side of the first equation: $x^2 - 4x - 9 = 0$, which is standard form with $a = 1$, $b = -4$, $c = -9$ ✓. (The choice $9x - 4 = 0$ has no $x^2$ term at all, so it is linear; the choice $x^4 - 4x = 9$ has a fourth power, which is higher than $2$; the choice $\\frac{4}{x} = 9$ hides $x$ in a denominator, and no rearranging turns that into $ax^2 + bx + c = 0$.)',
    },
    {
      q: 'Three of the equations below are quadratic. Which one is NOT?',
      choices: ['$x^2 = 16$', '$3x^2 + 5x = 0$', '$(x - 1)(x + 4) = 0$', '$2x + 7 = 11$'],
      answer: 3,
      solution:
        'Check each one for an $x^2$ term after rearranging. $x^2 = 16$ becomes $x^2 - 16 = 0$ ✓ quadratic. $3x^2 + 5x = 0$ is already in standard form with $c = 0$ ✓ quadratic. $(x - 1)(x + 4) = 0$ expands to $x^2 + 3x - 4 = 0$ ✓ quadratic. But $2x + 7 = 11$ becomes $2x - 4 = 0$, with no $x^2$ anywhere — it is linear, and it is the odd one out. (The choice $x^2 = 16$ looks unusual only because $b = 0$; the choice $3x^2 + 5x = 0$ looks unfinished only because $c = 0$; the choice $(x - 1)(x + 4) = 0$ hides its $x^2$ inside the parentheses until you expand.)',
    },
    {
      q: 'Which of these is a quadratic equation in $y$?',
      choices: ['$y^3 - y^2 = 5$', '$\\sqrt{y} + 2 = 7$', '$6y^2 = 7 - y$', '$\\frac{y}{3} - 1 = 0$'],
      answer: 2,
      solution:
        'Rearrange the third equation: $6y^2 + y - 7 = 0$, which is $ay^2 + by + c = 0$ with $a = 6 \\ne 0$ ✓. (The choice $y^3 - y^2 = 5$ has a $y^3$ term, so its highest power is $3$ — having a $y^2$ term is not enough, the $y^2$ must be the HIGHEST power; the choice $\\sqrt{y} + 2 = 7$ has $y$ under a square root rather than raised to a whole-number power; the choice $\\frac{y}{3} - 1 = 0$ is linear, since dividing by $3$ does not change the power of $y$.)',
    },
  ],
  // p2 — solve x^2 = k by taking both square roots
  [
    {
      q: 'Solve $x^2 = 100$.',
      choices: ['$x = 10$ only', '$x = 10$ or $x = -10$', '$x = 50$ or $x = -50$', '$x = 5$ or $x = -5$'],
      answer: 1,
      solution:
        'We need every number whose square is $100$. Check forward: $10^2 = 100$ ✓ and $(-10)^2 = 100$ ✓, so both work and $x = \\pm 10$. (The choice $x = 10$ only forgets the negative twin, the most common quadratic slip there is; the choice $x = \\pm 50$ HALVES $100$ instead of taking its square root, and $50^2 = 2500$, not $100$; the choice $x = \\pm 5$ takes the square root and then halves it, and $5^2 = 25$, not $100$.)',
    },
    {
      q: 'Solve $y^2 = 144$.',
      choices: ['$y = 12$ or $y = -12$', '$y = 72$ or $y = -72$', '$y = 12$ only', '$y = 6$ or $y = -6$'],
      answer: 0,
      solution:
        'Check forward: $12^2 = 144$ ✓ and $(-12)^2 = 144$ ✓, so $y = \\pm 12$. (The choice $y = \\pm 72$ halves $144$ instead of taking a square root, and $72^2 = 5184$; the choice $y = 12$ only drops the negative twin; the choice $y = \\pm 6$ halves the square root, and $6^2 = 36$, not $144$.)',
    },
    {
      q: 'Which equation has exactly the two solutions $x = 9$ and $x = -9$?',
      choices: ['$x^2 = 18$', '$x = 81$', '$x^2 = -81$', '$x^2 = 81$'],
      answer: 3,
      solution:
        'Substitute both claimed solutions into the fourth equation: $9^2 = 81$ ✓ and $(-9)^2 = 81$ ✓, so $x^2 = 81$ is the one with exactly those two solutions. (The choice $x^2 = 18$ DOUBLES $9$ where it should square it, and $9^2 = 81 \\ne 18$; the choice $x = 81$ is not even quadratic and has the single solution $81$; the choice $x^2 = -81$ has no real solutions at all, since a real square is never negative.)',
    },
  ],
  // p3 — a real square is never negative
  [
    {
      q: 'How many real solutions does $x^2 = -25$ have?',
      choices: ['Two', 'One', 'Infinitely many', 'None'],
      answer: 3,
      solution:
        'Test every kind of real number: a positive number squares to a positive, a negative number also squares to a positive (for instance $(-5)^2 = 25$, not $-25$), and $0^2 = 0$. Nothing real squares to $-25$, so there are no real solutions. (The choice Two comes from answering $x = \\pm 5$ out of habit, but $5^2 = 25$ and $(-5)^2 = 25$ — neither gives $-25$; the choice One comes from accepting $x = -5$ because the equation shows a minus sign, but the minus belongs to the RESULT, not to $x$; the choice Infinitely many would need $x^2$ to take every value at once.)',
    },
    {
      q: 'Which of these equations has NO real solutions?',
      choices: ['$x^2 = 0$', '$x^2 + 4 = 0$', '$x^2 - 4 = 0$', '$x^2 = 4$'],
      answer: 1,
      solution:
        'Isolate $x^2$ in each. The second gives $x^2 = -4$, and no real number squares to a negative, so it has no real solutions ✓. (The choice $x^2 = 0$ has exactly one solution, $x = 0$, since $0^2 = 0$; the choice $x^2 - 4 = 0$ rearranges to $x^2 = 4$, giving two solutions $x = \\pm 2$; the choice $x^2 = 4$ is the same equation already isolated, also two solutions. Only moving the $+4$ across produces a negative right-hand side.)',
    },
    {
      q: 'For which values of $k$ does the equation $x^2 = k$ have no real solutions?',
      choices: ['$k > 0$', '$k = 0$', '$k < 0$', 'every value of $k$'],
      answer: 2,
      solution:
        'A real number squared is never negative, so $x^2 = k$ is impossible exactly when $k$ is negative ✓. Check the other cases forward: $k = 9$ gives $x = \\pm 3$ (two solutions) and $k = 0$ gives $x = 0$ (one solution), so those values of $k$ do have solutions. (The choice $k > 0$ names the case with the MOST solutions, two, rather than none; the choice $k = 0$ names the borderline case, which still has the one solution $x = 0$; the choice "every value of $k$" would mean $x^2$ never equals anything, but $x^2 = 25$ is easy to satisfy.)',
    },
  ],
  // p4 — zero-product property with two linear factors
  [
    {
      q: 'Solve $(x - 4)(x + 9) = 0$.',
      choices: ['$x = 4$ or $x = -9$', '$x = -4$ or $x = 9$', '$x = 4$ only', '$x = -4$ or $x = -9$'],
      answer: 0,
      solution:
        'A product is $0$ only when a factor is $0$, so $x - 4 = 0$ or $x + 9 = 0$, giving $x = 4$ or $x = -9$. Check forward: $x = 4$ gives $(0)(13) = 0$ ✓, and $x = -9$ gives $(-13)(0) = 0$ ✓. (The choice $x = -4$ or $x = 9$ COPIES the signs out of the factors instead of flipping them, and $x = -4$ gives $(-8)(5) = -40 \\ne 0$; the choice $x = 4$ only stops after the first factor and throws away a genuine solution; the choice $x = -4$ or $x = -9$ flips the sign of the second factor but not the first, and $(-8)(5) \\ne 0$.)',
    },
    {
      q: 'Solve $(x + 3)(x - 8) = 0$.',
      choices: ['$x = 3$ or $x = -8$', '$x = 8$ only', '$x = -3$ or $x = 8$', '$x = 3$ or $x = 8$'],
      answer: 2,
      solution:
        'Set each factor to zero: $x + 3 = 0$ gives $x = -3$, and $x - 8 = 0$ gives $x = 8$. Check forward: $x = -3$ gives $(0)(-11) = 0$ ✓, and $x = 8$ gives $(11)(0) = 0$ ✓. (The choice $x = 3$ or $x = -8$ copies both signs straight out of the factors, and $x = 3$ gives $(6)(-5) = -30 \\ne 0$; the choice $x = 8$ only drops the second root; the choice $x = 3$ or $x = 8$ keeps the correct $8$ but copies the sign in the first factor, and $x = 3$ still fails.)',
    },
    {
      q: 'Which product equals $0$ exactly when $x = 5$ or $x = -2$?',
      choices: ['$(x + 5)(x - 2)$', '$(x - 5)(x + 2)$', '$(x - 5)(x - 2)$', '$(x + 5)(x + 2)$'],
      answer: 1,
      solution:
        'To make $x = 5$ a solution we need the factor $x - 5$, and to make $x = -2$ a solution we need the factor $x + 2$ — the sign in the factor is always the OPPOSITE of the solution. Check forward: $x = 5$ gives $(0)(7) = 0$ ✓ and $x = -2$ gives $(-7)(0) = 0$ ✓. (The choice $(x + 5)(x - 2)$ has both signs backwards and is $0$ at $x = -5$ or $x = 2$; the choice $(x - 5)(x - 2)$ is $0$ at $x = 5$ or $x = 2$, so it gets the second root wrong; the choice $(x + 5)(x + 2)$ is $0$ at $x = -5$ or $x = -2$, so it gets the first root wrong.)',
    },
  ],
  // p5 — unwrap a shifted square: (x - h)^2 = k
  [
    {
      q: 'Solve $(x - 2)^2 = 49$.',
      choices: ['$x = 7$ or $x = -7$', '$x = 9$ only', '$x = -9$ or $x = 5$', '$x = 9$ or $x = -5$'],
      answer: 3,
      solution:
        'Whatever sits inside the parentheses squares to $49$, so $x - 2 = 7$ or $x - 2 = -7$. Adding $2$ to each: $x = 9$ or $x = -5$. Check forward in the ORIGINAL equation: $(9 - 2)^2 = 7^2 = 49$ ✓ and $(-5 - 2)^2 = (-7)^2 = 49$ ✓. (The choice $x = \\pm 7$ stops at the value of $x - 2$ and never undoes the shift, and $(7 - 2)^2 = 25 \\ne 49$; the choice $x = 9$ only forgets the negative twin; the choice $x = -9$ or $x = 5$ SUBTRACTS $2$ instead of adding it, and $(5 - 2)^2 = 9 \\ne 49$.)',
    },
    {
      q: 'Solve $(x + 1)^2 = 36$.',
      choices: ['$x = 5$ or $x = -7$', '$x = 6$ or $x = -6$', '$x = 5$ only', '$x = 7$ or $x = -5$'],
      answer: 0,
      solution:
        'The parenthesis squares to $36$, so $x + 1 = 6$ or $x + 1 = -6$. Subtracting $1$ from each: $x = 5$ or $x = -7$. Check forward: $(5 + 1)^2 = 6^2 = 36$ ✓ and $(-7 + 1)^2 = (-6)^2 = 36$ ✓. (The choice $x = \\pm 6$ reports the value of $x + 1$ and forgets to undo the shift, and $(6 + 1)^2 = 49 \\ne 36$; the choice $x = 5$ only drops the negative twin; the choice $x = 7$ or $x = -5$ ADDS $1$ where it should subtract, and $(7 + 1)^2 = 64 \\ne 36$.)',
    },
    {
      q: 'Solve $(x - 5)^2 = 4$.',
      choices: ['$x = 2$ or $x = -2$', '$x = 3$ or $x = 7$', '$x = 1$ or $x = 9$', '$x = 7$ only'],
      answer: 1,
      solution:
        'The parenthesis squares to $4$, so $x - 5 = 2$ or $x - 5 = -2$, giving $x = 7$ or $x = 3$. Check forward: $(7 - 5)^2 = 2^2 = 4$ ✓ and $(3 - 5)^2 = (-2)^2 = 4$ ✓. (The choice $x = \\pm 2$ stops at the value of $x - 5$; the choice $x = 1$ or $x = 9$ uses $\\pm 4$ instead of $\\pm 2$ — it never takes the square root of $4$ — and $(9 - 5)^2 = 16 \\ne 4$; the choice $x = 7$ only forgets the second case.)',
    },
  ],
  // p6 — divide out the leading coefficient first
  [
    {
      q: 'Solve $4x^2 = 100$.',
      choices: ['$x = 10$ or $x = -10$', '$x = 25$ or $x = -25$', '$x = 5$ or $x = -5$', '$x = 5$ only'],
      answer: 2,
      solution:
        'Divide both sides by $4$ first: $x^2 = 25$. Then take both square roots: $x = 5$ or $x = -5$. Check forward in the original: $4(5)^2 = 4 \\cdot 25 = 100$ ✓ and $4(-5)^2 = 100$ ✓. (The choice $x = \\pm 10$ takes the square root of $100$ without ever dividing by $4$, and $4(10)^2 = 400 \\ne 100$; the choice $x = \\pm 25$ divides correctly but then reports $x^2$ as if it were $x$, and $4(25)^2 = 2500$; the choice $x = 5$ only forgets the negative twin.)',
    },
    {
      q: 'Solve $2x^2 - 72 = 0$.',
      choices: ['$x = 36$ or $x = -36$', '$x = 6$ only', 'No real solutions', '$x = 6$ or $x = -6$'],
      answer: 3,
      solution:
        'Add $72$ to both sides: $2x^2 = 72$. Divide by $2$: $x^2 = 36$. Take both square roots: $x = \\pm 6$. Check forward in the original: $2(6)^2 - 72 = 72 - 72 = 0$ ✓ and $2(-6)^2 - 72 = 0$ ✓. (The choice $x = \\pm 36$ stops at $x^2 = 36$ and reports that value as $x$, and $2(36)^2 - 72 = 2520 \\ne 0$; the choice $x = 6$ only drops the negative twin; the choice "No real solutions" comes from moving the $-72$ to the wrong side and getting $2x^2 = -72$, but the term being subtracted moves across as $+72$.)',
    },
    {
      q: 'The equation $3x^2 = k$ has exactly the two solutions $x = 6$ and $x = -6$. What is $k$?',
      choices: ['$108$', '$36$', '$18$', '$12$'],
      answer: 0,
      solution:
        'Substitute a solution into the equation and read off $k$: $3(6)^2 = 3 \\cdot 36 = 108$. Check the other one too: $3(-6)^2 = 3 \\cdot 36 = 108$ ✓, the same value, as it must be. (The choice $36$ squares the root but forgets to multiply by the leading $3$; the choice $18$ computes $3 \\cdot 6$, multiplying before squaring instead of squaring first; the choice $12$ computes $2 \\cdot 6$, doubling the root instead of squaring it.)',
    },
  ],
  // p7 — a square equal to zero has ONE solution
  [
    {
      q: 'Solve $(x - 7)^2 = 0$.',
      choices: ['$x = 7$ or $x = -7$', '$x = 7$ only', '$x = -7$ only', 'No real solutions'],
      answer: 1,
      solution:
        'The only number whose square is $0$ is $0$ itself, so $x - 7 = 0$ and $x = 7$. Both "cases" collapse into one. Check forward: $(7 - 7)^2 = 0^2 = 0$ ✓. (The choice $x = \\pm 7$ adds a negative twin out of habit, but $(-7 - 7)^2 = (-14)^2 = 196 \\ne 0$ — the $\\pm$ appears only when the square equals a POSITIVE number; the choice $x = -7$ only copies the sign out of the factor instead of flipping it, and it fails the same check; the choice "No real solutions" confuses $= 0$ with $=$ a negative number.)',
    },
    {
      q: 'How many solutions does $(x + 5)^2 = 0$ have, and what are they?',
      choices: ['One, $x = -5$', 'Two, $x = 5$ and $x = -5$', 'One, $x = 5$', 'No solutions'],
      answer: 0,
      solution:
        'Only $0$ squares to $0$, so $x + 5 = 0$ and $x = -5$ — a single solution. Check forward: $(-5 + 5)^2 = 0^2 = 0$ ✓. (The choice Two attaches a $\\pm$ that only belongs when the right side is positive, and $x = 5$ gives $(10)^2 = 100 \\ne 0$; the choice One, $x = 5$ has the right count but copies the sign out of the factor rather than flipping it, and it fails the same check; the choice "No solutions" would be right for $(x + 5)^2 = -1$, not for $= 0$.)',
    },
    {
      q: 'For which value of $c$ does $(x + 6)^2 = c$ have exactly ONE solution?',
      choices: ['$c = 6$', '$c = 36$', '$c = -36$', '$c = 0$'],
      answer: 3,
      solution:
        'A square equals a positive number in two ways ($+\\sqrt{c}$ and $-\\sqrt{c}$), equals a negative number in no way, and equals $0$ in exactly one way. So $c = 0$, which forces $x + 6 = 0$ and the single solution $x = -6$. Check forward: $(-6 + 6)^2 = 0$ ✓, and no other $x$ works. (The choice $c = 36$ gives TWO solutions, since $x + 6 = \\pm 6$ produces $x = 0$ and $x = -12$; the choice $c = 6$ also gives two solutions, just irrational ones; the choice $c = -36$ gives NO solutions, since a real square is never negative.)',
    },
  ],
  // p8 — do not lose the bare factor of x
  [
    {
      q: 'Solve $x(x + 6) = 0$.',
      choices: ['$x = 0$ or $x = 6$', '$x = -6$ only', '$x = 0$ or $x = -6$', '$x = 6$ only'],
      answer: 2,
      solution:
        'The two factors are $x$ itself and $x + 6$. Setting each to zero gives $x = 0$ or $x = -6$. Check forward: $x = 0$ gives $0 \\cdot 6 = 0$ ✓, and $x = -6$ gives $(-6)(0) = 0$ ✓. (The choice $x = 0$ or $x = 6$ copies the sign out of the second factor, and $6(12) = 72 \\ne 0$; the choices $x = -6$ only and $x = 6$ only both overlook the plain factor of $x$, and $x = 0$ really is a solution — it is the easiest one to lose and the easiest one to check.)',
    },
    {
      q: 'Solve $3y(y - 4) = 0$.',
      choices: ['$y = 4$ only', '$y = 0$ or $y = 4$', '$y = 0$, $y = 3$, or $y = 4$', '$y = 0$ or $y = -4$'],
      answer: 1,
      solution:
        'The factors are the constant $3$, the variable $y$, and $y - 4$. A constant $3$ can never be $0$, so the solutions come from $y = 0$ and $y - 4 = 0$. Check forward: $y = 0$ gives $0 \\cdot (-4) = 0$ ✓, and $y = 4$ gives $12 \\cdot 0 = 0$ ✓. (The choice $y = 4$ only drops the bare factor of $y$; the choice listing $y = 3$ as well tries to set the CONSTANT factor to zero, but $3$ is $3$ no matter what $y$ is; the choice $y = 0$ or $y = -4$ copies the sign out of $y - 4$, and $3(-4)(-8) = 96 \\ne 0$.)',
    },
    {
      q: 'Which of these equations has $x = 0$ as one of its solutions?',
      choices: ['$(x - 1)(x + 4) = 0$', '$(x + 2)^2 = 0$', '$x^2 = 16$', '$x(x - 5) = 0$'],
      answer: 3,
      solution:
        'Substitute $x = 0$ into each. In $x(x - 5) = 0$ the first factor IS $x$, so it becomes $0 \\cdot (-5) = 0$ ✓ — a solution. (The choice $(x - 1)(x + 4) = 0$ gives $(-1)(4) = -4 \\ne 0$, since its solutions are $1$ and $-4$; the choice $(x + 2)^2 = 0$ gives $2^2 = 4 \\ne 0$, since its only solution is $-2$; the choice $x^2 = 16$ gives $0 = 16$, which is false, since its solutions are $\\pm 4$. A bare factor of $x$ is exactly what puts $0$ into the solution set.)',
    },
  ],
  // p9 — a factor with a coefficient gives a fractional root
  [
    {
      q: 'Solve $(3x - 2)(x + 5) = 0$.',
      choices: [
        '$x = \\frac{2}{3}$ or $x = -5$',
        '$x = 2$ or $x = -5$',
        '$x = \\frac{3}{2}$ or $x = -5$',
        '$x = -\\frac{2}{3}$ or $x = 5$',
      ],
      answer: 0,
      solution:
        'Solve each little equation all the way. From $3x - 2 = 0$ we get $3x = 2$, so $x = \\frac{2}{3}$. From $x + 5 = 0$ we get $x = -5$. Check forward: $x = \\frac{2}{3}$ gives $(2 - 2)(\\frac{2}{3} + 5) = 0 \\cdot \\frac{17}{3} = 0$ ✓, and $x = -5$ gives $(-17)(0) = 0$ ✓. (The choice $x = 2$ ignores the coefficient $3$ entirely, and $(3 \\cdot 2 - 2)(7) = 4 \\cdot 7 = 28 \\ne 0$; the choice $x = \\frac{3}{2}$ builds the fraction upside down, and $(\\frac{9}{2} - 2)(\\frac{13}{2}) \\ne 0$; the choice $x = -\\frac{2}{3}$ or $x = 5$ flips the sign of both roots.)',
    },
    {
      q: 'Solve $(2x + 5)(x - 4) = 0$.',
      choices: [
        '$x = -5$ or $x = 4$',
        '$x = -\\frac{2}{5}$ or $x = 4$',
        '$x = -\\frac{5}{2}$ or $x = 4$',
        '$x = \\frac{5}{2}$ or $x = -4$',
      ],
      answer: 2,
      solution:
        'From $2x + 5 = 0$ we get $2x = -5$, so $x = -\\frac{5}{2}$. From $x - 4 = 0$ we get $x = 4$. Check forward: $x = -\\frac{5}{2}$ gives $(-5 + 5)(-\\frac{5}{2} - 4) = 0 \\cdot (-\\frac{13}{2}) = 0$ ✓, and $x = 4$ gives $(13)(0) = 0$ ✓. (The choice $x = -5$ divides by nothing at all, and $(2(-5) + 5)(-9) = (-5)(-9) = 45 \\ne 0$; the choice $x = -\\frac{2}{5}$ writes the fraction upside down; the choice $x = \\frac{5}{2}$ or $x = -4$ copies both signs straight out of the factors instead of flipping them.)',
    },
    {
      q: 'Solve $(4x - 3)(2x + 1) = 0$.',
      choices: [
        '$x = \\frac{4}{3}$ or $x = -2$',
        '$x = \\frac{3}{4}$ or $x = -\\frac{1}{2}$',
        '$x = -\\frac{3}{4}$ or $x = \\frac{1}{2}$',
        '$x = 3$ or $x = -1$',
      ],
      answer: 1,
      solution:
        'From $4x - 3 = 0$ we get $x = \\frac{3}{4}$; from $2x + 1 = 0$ we get $2x = -1$, so $x = -\\frac{1}{2}$. Check forward: $x = \\frac{3}{4}$ gives $(3 - 3)(\\frac{3}{2} + 1) = 0 \\cdot \\frac{5}{2} = 0$ ✓, and $x = -\\frac{1}{2}$ gives $(-2 - 3)(-1 + 1) = (-5)(0) = 0$ ✓. (The choice $x = \\frac{4}{3}$ or $x = -2$ turns both fractions upside down; the choice $x = -\\frac{3}{4}$ or $x = \\frac{1}{2}$ has the right sizes but both signs flipped; the choice $x = 3$ or $x = -1$ ignores both coefficients, and $x = 3$ gives $(9)(7) = 63 \\ne 0$.)',
    },
  ],
  // p10 — the product is NOT zero, so expand first
  [
    {
      q: 'Solve $(x - 2)(x + 2) = 12$.',
      choices: ['$x = 14$ or $x = 10$', '$x = 12$ or $x = -12$', '$x = 4$ only', '$x = 4$ or $x = -4$'],
      answer: 3,
      solution:
        'The product is $12$, not $0$, so the zero-product property does not apply. Expand instead: $(x - 2)(x + 2) = x^2 - 4$, so $x^2 - 4 = 12$, giving $x^2 = 16$ and $x = \\pm 4$. Check forward in the original: $x = 4$ gives $(2)(6) = 12$ ✓, and $x = -4$ gives $(-6)(-2) = 12$ ✓. (The choice $x = 14$ or $x = 10$ sets each factor equal to $12$, which is only legal when the product is $0$ — and $x = 14$ gives $(12)(16) = 192$; the choice $x = \\pm 12$ reads the $12$ as if it were $x^2$; the choice $x = 4$ only drops the negative twin.)',
    },
    {
      q: 'Solve $(x - 3)(x + 3) = 16$.',
      choices: ['$x = 5$ or $x = -5$', '$x = 19$ or $x = 13$', '$x = 4$ or $x = -4$', '$x = 5$ only'],
      answer: 0,
      solution:
        'Expand first, because a product of $16$ tells us nothing about the individual factors: $(x - 3)(x + 3) = x^2 - 9$, so $x^2 - 9 = 16$, giving $x^2 = 25$ and $x = \\pm 5$. Check forward in the original: $x = 5$ gives $(2)(8) = 16$ ✓, and $x = -5$ gives $(-8)(-2) = 16$ ✓. (The choice $x = 19$ or $x = 13$ sets each factor equal to $16$, and $x = 19$ gives $(16)(22) = 352$; the choice $x = \\pm 4$ takes the square root of $16$ and calls it $x$, forgetting the $-9$, and $4$ gives $(1)(7) = 7 \\ne 16$; the choice $x = 5$ only forgets the negative twin.)',
    },
    {
      q: 'For which value of $k$ does the equation $(x - 1)(x + 1) = k$ have exactly the solutions $x = 5$ and $x = -5$?',
      choices: ['$k = 0$', '$k = 25$', '$k = 24$', '$k = 26$'],
      answer: 2,
      solution:
        'Substitute a claimed solution into the left side and read off $k$: $x = 5$ gives $(4)(6) = 24$. Check the other one: $x = -5$ gives $(-6)(-4) = 24$ ✓, the same value. (Expanding says the same thing: $x^2 - 1 = k$, so $k = 25 - 1 = 24$.) (The choice $k = 25$ forgets the $-1$ in $x^2 - 1$; the choice $k = 26$ ADDS $1$ instead of subtracting it; the choice $k = 0$ assumes the zero-product property applies, but then the solutions would be $x = 1$ and $x = -1$, not $\\pm 5$.)',
    },
  ],
]

const s102 = [
  // p1 — factor x^2 + bx + c with b and c both positive
  [
    {
      q: 'Factor $x^2 + 7x + 12$.',
      choices: ['$(x + 2)(x + 6)$', '$(x + 3)(x + 4)$', '$(x + 1)(x + 12)$', '$(x - 3)(x - 4)$'],
      answer: 1,
      solution:
        'We need two numbers with sum $7$ and product $12$. Both the sum and the product are positive, so both numbers are positive: $3$ and $4$ work, since $3 + 4 = 7$ and $3 \\cdot 4 = 12$. Multiply back out to check: $(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓. (The choice $(x + 2)(x + 6)$ is right product, wrong sum — it expands to $x^2 + 8x + 12$; the choice $(x + 1)(x + 12)$ is also right product, wrong sum, expanding to $x^2 + 13x + 12$; the choice $(x - 3)(x - 4)$ has the right two numbers but both signs flipped, giving $x^2 - 7x + 12$.)',
    },
    {
      q: 'Factor $x^2 + 9x + 20$.',
      choices: ['$(x + 2)(x + 10)$', '$(x + 1)(x + 20)$', '$(x + 4)(x + 5)$', '$(x - 4)(x - 5)$'],
      answer: 2,
      solution:
        'We need sum $9$ and product $20$, and since both are positive the two numbers are positive: $4$ and $5$, because $4 + 5 = 9$ and $4 \\cdot 5 = 20$. Multiply back out: $(x + 4)(x + 5) = x^2 + 5x + 4x + 20 = x^2 + 9x + 20$ ✓. (The choice $(x + 2)(x + 10)$ has product $20$ but sum $12$, expanding to $x^2 + 12x + 20$; the choice $(x + 1)(x + 20)$ has product $20$ but sum $21$; the choice $(x - 4)(x - 5)$ flips both signs and expands to $x^2 - 9x + 20$, with the wrong middle term.)',
    },
    {
      q: 'Which expression expands to $x^2 + 6x + 8$?',
      choices: ['$(x + 2)(x + 4)$', '$(x + 1)(x + 8)$', '$(x + 3)(x + 5)$', '$(x - 2)(x - 4)$'],
      answer: 0,
      solution:
        'The two numbers inside must add to $6$ and multiply to $8$: that is $2$ and $4$. Multiply back out to confirm: $(x + 2)(x + 4) = x^2 + 4x + 2x + 8 = x^2 + 6x + 8$ ✓. (The choice $(x + 1)(x + 8)$ has the right product $8$ but sum $9$; the choice $(x + 3)(x + 5)$ swaps the roles of sum and product — its numbers ADD to $8$ instead of multiplying to it, and it expands to $x^2 + 8x + 15$; the choice $(x - 2)(x - 4)$ uses the right pair with both signs flipped, giving $x^2 - 6x + 8$.)',
    },
  ],
  // p2 — find the pair with a given sum and product
  [
    {
      q: 'Which two numbers have sum $-9$ and product $20$?',
      choices: ['$4$ and $5$', '$-1$ and $-20$', '$-2$ and $-7$', '$-4$ and $-5$'],
      answer: 3,
      solution:
        'The product $20$ is positive, so the two numbers share a sign, and the sum $-9$ is negative, so that shared sign is negative. Check $-4$ and $-5$ against BOTH conditions: $-4 + (-5) = -9$ ✓ and $(-4)(-5) = 20$ ✓. (The choice $4$ and $5$ has the right product but sum $+9$; the choice $-1$ and $-20$ has the right product but sum $-21$; the choice $-2$ and $-7$ has the right sum but product $14$ — a pair has to pass both tests, not just one.)',
    },
    {
      q: 'Which two numbers have sum $-3$ and product $-28$?',
      choices: ['$7$ and $-4$', '$-7$ and $4$', '$-14$ and $2$', '$-7$ and $-4$'],
      answer: 1,
      solution:
        'The product $-28$ is negative, so the numbers have opposite signs, and the sum $-3$ is negative, so the larger one is the negative one. Check $-7$ and $4$: $-7 + 4 = -3$ ✓ and $(-7)(4) = -28$ ✓. (The choice $7$ and $-4$ is the same pair with the signs swapped, giving sum $+3$; the choice $-14$ and $2$ has the right product but sum $-12$; the choice $-7$ and $-4$ makes both numbers negative, so the product comes out $+28$ instead of $-28$.)',
    },
    {
      q: 'Two numbers multiply to $18$ and add to $11$. What is the LARGER of the two numbers?',
      choices: ['$2$', '$6$', '$9$', '$18$'],
      answer: 2,
      solution:
        'List the positive pairs multiplying to $18$: $1 \\cdot 18$ (sum $19$), $2 \\cdot 9$ (sum $11$), $3 \\cdot 6$ (sum $9$). The pair $2$ and $9$ is the one with sum $11$ ✓, and the larger of those two is $9$. (The choice $2$ names the SMALLER member of the correct pair; the choice $6$ comes from the pair $3$ and $6$, whose sum is $9$, not $11$; the choice $18$ comes from the pair $1$ and $18$, whose sum is $19$.)',
    },
  ],
  // p3 — factor x^2 - bx + c: both numbers negative
  [
    {
      q: 'Factor $x^2 - 8x + 15$.',
      choices: ['$(x - 3)(x - 5)$', '$(x + 3)(x + 5)$', '$(x - 1)(x - 15)$', '$(x - 5)(x + 3)$'],
      answer: 0,
      solution:
        'Positive product with a negative sum means both numbers are negative. We need sum $-8$ and product $15$: that is $-3$ and $-5$. Multiply back out: $(x - 3)(x - 5) = x^2 - 5x - 3x + 15 = x^2 - 8x + 15$ ✓. (The choice $(x + 3)(x + 5)$ uses the right sizes with the wrong signs and expands to $x^2 + 8x + 15$; the choice $(x - 1)(x - 15)$ has the right product but sum $-16$; the choice $(x - 5)(x + 3)$ mixes the signs, giving a product of $-15$ and expanding to $x^2 - 2x - 15$.)',
    },
    {
      q: 'Factor $x^2 - 11x + 24$.',
      choices: ['$(x - 4)(x - 6)$', '$(x + 3)(x + 8)$', '$(x - 2)(x - 12)$', '$(x - 3)(x - 8)$'],
      answer: 3,
      solution:
        'We need sum $-11$ and product $24$, so both numbers are negative: $-3$ and $-8$, since $-3 + (-8) = -11$ and $(-3)(-8) = 24$. Multiply back out: $(x - 3)(x - 8) = x^2 - 8x - 3x + 24 = x^2 - 11x + 24$ ✓. (The choice $(x - 4)(x - 6)$ is right product, wrong sum — it expands to $x^2 - 10x + 24$; the choice $(x - 2)(x - 12)$ is also right product, wrong sum, giving $x^2 - 14x + 24$; the choice $(x + 3)(x + 8)$ has the right pair with both signs flipped, giving $x^2 + 11x + 24$.)',
    },
    {
      q: 'Which product expands to $x^2 - 12x + 35$?',
      choices: ['$(x - 1)(x - 35)$', '$(x - 5)(x - 7)$', '$(x + 5)(x + 7)$', '$(x - 5)(x + 7)$'],
      answer: 1,
      solution:
        'We need two numbers with sum $-12$ and product $35$: both negative, namely $-5$ and $-7$. Multiply back out: $(x - 5)(x - 7) = x^2 - 7x - 5x + 35 = x^2 - 12x + 35$ ✓. (The choice $(x - 1)(x - 35)$ has product $35$ but sum $-36$; the choice $(x + 5)(x + 7)$ flips both signs and expands to $x^2 + 12x + 35$; the choice $(x - 5)(x + 7)$ mixes the signs, so the constant comes out $-35$ and the middle term $+2x$.)',
    },
  ],
  // p4 — factor with a negative constant: opposite signs
  [
    {
      q: 'Factor $x^2 + 3x - 10$.',
      choices: ['$(x - 5)(x + 2)$', '$(x + 10)(x - 1)$', '$(x + 5)(x - 2)$', '$(x + 5)(x + 2)$'],
      answer: 2,
      solution:
        'The product $-10$ is negative, so the two numbers have opposite signs, and the sum $+3$ is positive, so the bigger one is positive: $5$ and $-2$. Multiply back out: $(x + 5)(x - 2) = x^2 - 2x + 5x - 10 = x^2 + 3x - 10$ ✓. (The choice $(x - 5)(x + 2)$ puts the minus on the bigger number and expands to $x^2 - 3x - 10$; the choice $(x + 10)(x - 1)$ has the right product but sum $+9$; the choice $(x + 5)(x + 2)$ makes both positive, so the constant comes out $+10$ instead of $-10$.)',
    },
    {
      q: 'Factor $x^2 - 5x - 24$.',
      choices: ['$(x - 8)(x + 3)$', '$(x + 8)(x - 3)$', '$(x - 12)(x + 2)$', '$(x - 8)(x - 3)$'],
      answer: 0,
      solution:
        'The product $-24$ is negative, so the signs are opposite, and the sum $-5$ is negative, so the bigger number is the negative one: $-8$ and $3$. Multiply back out: $(x - 8)(x + 3) = x^2 + 3x - 8x - 24 = x^2 - 5x - 24$ ✓. (The choice $(x + 8)(x - 3)$ swaps which number carries the minus and expands to $x^2 + 5x - 24$; the choice $(x - 12)(x + 2)$ has the right product but sum $-10$; the choice $(x - 8)(x - 3)$ makes both negative, so the constant comes out $+24$.)',
    },
    {
      q: 'Factor $x^2 + x - 20$.',
      choices: ['$(x - 5)(x + 4)$', '$(x + 20)(x - 1)$', '$(x + 10)(x - 2)$', '$(x + 5)(x - 4)$'],
      answer: 3,
      solution:
        'The middle term is $x$, so the sum is $1$; the product is $-20$. Opposite signs with the bigger one positive: $5$ and $-4$. Multiply back out: $(x + 5)(x - 4) = x^2 - 4x + 5x - 20 = x^2 + x - 20$ ✓. (The choice $(x - 5)(x + 4)$ puts the minus on the bigger number and gives $x^2 - x - 20$; the choice $(x + 20)(x - 1)$ has the right product but sum $19$; the choice $(x + 10)(x - 2)$ also has product $-20$ but sum $8$.)',
    },
  ],
  // p5 — solve a quadratic whose roots are both negative
  [
    {
      q: 'Solve $x^2 + 11x + 28 = 0$.',
      choices: ['$x = 4$ or $x = 7$', '$x = -4$ or $x = -7$', '$x = -4$ or $x = 7$', '$x = -2$ or $x = -14$'],
      answer: 1,
      solution:
        'We need sum $11$ and product $28$: the numbers $4$ and $7$, so $(x + 4)(x + 7) = 0$ and the roots are the OPPOSITES, $x = -4$ or $x = -7$. Check forward in the original: $x = -4$ gives $16 - 44 + 28 = 0$ ✓, and $x = -7$ gives $49 - 77 + 28 = 0$ ✓. (The choice $x = 4$ or $x = 7$ reads the numbers straight out of the factors without flipping their signs, and $16 + 44 + 28 = 88 \\ne 0$; the choice $x = -4$ or $x = 7$ flips only one; the choice $x = -2$ or $x = -14$ uses a pair with the right product $28$ but sum $16$, and $4 - 22 + 28 = 10 \\ne 0$.)',
    },
    {
      q: 'Solve $x^2 + 8x + 15 = 0$.',
      choices: ['$x = 3$ or $x = 5$', '$x = -1$ or $x = -15$', '$x = -3$ or $x = -5$', '$x = 3$ or $x = -5$'],
      answer: 2,
      solution:
        'We need sum $8$ and product $15$: the numbers $3$ and $5$, so $(x + 3)(x + 5) = 0$ and $x = -3$ or $x = -5$. Check forward: $x = -3$ gives $9 - 24 + 15 = 0$ ✓, and $x = -5$ gives $25 - 40 + 15 = 0$ ✓. (The choice $x = 3$ or $x = 5$ forgets to flip the signs coming out of the factors, and $9 + 24 + 15 = 48 \\ne 0$; the choice $x = -1$ or $x = -15$ takes the pair with product $15$ but sum $16$, and $1 - 8 + 15 = 8 \\ne 0$; the choice $x = 3$ or $x = -5$ flips only one of the two.)',
    },
    {
      q: 'One solution of $x^2 + 10x + 21 = 0$ is $x = -3$. What is the other solution?',
      choices: ['$x = -7$', '$x = 7$', '$x = 13$', '$x = -21$'],
      answer: 0,
      solution:
        'The two numbers in the factorization must have sum $10$ and product $21$: that is $3$ and $7$, so $(x + 3)(x + 7) = 0$ and the roots are $-3$ and $-7$. Check the other root forward: $(-7)^2 + 10(-7) + 21 = 49 - 70 + 21 = 0$ ✓. (The choice $x = 7$ has the right size but the wrong sign, and $49 + 70 + 21 = 140 \\ne 0$; the choice $x = 13$ comes from treating the two roots as adding to $+10$ instead of $-10$; the choice $x = -21$ reads the constant term as if it were the missing root, and $441 - 210 + 21 = 252 \\ne 0$.)',
    },
  ],
  // p6 — solve a quadratic with a negative constant term
  [
    {
      q: 'Solve $x^2 - 3x - 40 = 0$.',
      choices: ['$x = -8$ or $x = 5$', '$x = 8$ or $x = 5$', '$x = -8$ or $x = -5$', '$x = 8$ or $x = -5$'],
      answer: 3,
      solution:
        'We need sum $-3$ and product $-40$: opposite signs with the bigger one negative, so $-8$ and $5$. That gives $(x - 8)(x + 5) = 0$, so $x = 8$ or $x = -5$. Check forward in the original: $x = 8$ gives $64 - 24 - 40 = 0$ ✓, and $x = -5$ gives $25 + 15 - 40 = 0$ ✓. (The choice $x = -8$ or $x = 5$ has both signs flipped, and $64 + 24 - 40 = 48 \\ne 0$; the choice $x = 8$ or $x = 5$ makes both roots positive, and $25 - 15 - 40 = -30 \\ne 0$; the choice $x = -8$ or $x = -5$ makes both negative, and again $-8$ fails.)',
    },
    {
      q: 'Solve $x^2 - 7x - 18 = 0$.',
      choices: ['$x = -9$ or $x = 2$', '$x = 9$ or $x = -2$', '$x = 9$ or $x = 2$', '$x = -9$ or $x = -2$'],
      answer: 1,
      solution:
        'We need sum $-7$ and product $-18$: the numbers $-9$ and $2$. So $(x - 9)(x + 2) = 0$ and $x = 9$ or $x = -2$. Check forward: $x = 9$ gives $81 - 63 - 18 = 0$ ✓, and $x = -2$ gives $4 + 14 - 18 = 0$ ✓. (The choice $x = -9$ or $x = 2$ reports the two numbers themselves instead of flipping their signs, and $81 + 63 - 18 = 126 \\ne 0$; the choice $x = 9$ or $x = 2$ keeps $9$ but flips only the second, and $4 - 14 - 18 = -28 \\ne 0$; the choice $x = -9$ or $x = -2$ makes both negative.)',
    },
    {
      q: 'Which of these is a solution of $x^2 - x - 30 = 0$?',
      choices: ['$x = 5$', '$x = -6$', '$x = 6$', '$x = 30$'],
      answer: 2,
      solution:
        'Sum $-1$ and product $-30$ give the numbers $-6$ and $5$, so $(x - 6)(x + 5) = 0$ and the solutions are $x = 6$ and $x = -5$. Only $x = 6$ is on the list. Check it forward: $36 - 6 - 30 = 0$ ✓. (The choice $x = 5$ has the right size for the OTHER root but the wrong sign: $25 - 5 - 30 = -10 \\ne 0$; the choice $x = -6$ flips the sign of the correct root: $36 + 6 - 30 = 12 \\ne 0$; the choice $x = 30$ reads the constant term as a root: $900 - 30 - 30 = 840 \\ne 0$.)',
    },
  ],
  // p7 — get everything on one side FIRST, then factor
  [
    {
      q: 'Solve $x^2 = 7x - 10$.',
      choices: ['$x = 2$ or $x = 5$', '$x = 7$ or $x = -10$', '$x = -2$ or $x = -5$', '$x = -2$ or $x = 5$'],
      answer: 0,
      solution:
        'The zero-product property needs a zero, so move everything to one side first: $x^2 - 7x + 10 = 0$. Sum $-7$ and product $10$ give $-2$ and $-5$, so $(x - 2)(x - 5) = 0$ and $x = 2$ or $x = 5$. Check forward in the ORIGINAL: $x = 2$ gives $4 = 14 - 10$ ✓, and $x = 5$ gives $25 = 35 - 10$ ✓. (The choice $x = 7$ or $x = -10$ reads the coefficients on the right as if they were roots, and $49 \\ne 49 - 10$; the choice $x = -2$ or $x = -5$ forgets to flip the signs when leaving the factors, and $4 = -14 - 10$ is false; the choice $x = -2$ or $x = 5$ flips only one of them.)',
    },
    {
      q: 'Solve $x^2 + 15 = 8x$.',
      choices: ['$x = -3$ or $x = -5$', '$x = 8$ or $x = 15$', '$x = 3$ or $x = -5$', '$x = 3$ or $x = 5$'],
      answer: 3,
      solution:
        'Move the $8x$ across: $x^2 - 8x + 15 = 0$. Sum $-8$ and product $15$ give $-3$ and $-5$, so $(x - 3)(x - 5) = 0$ and $x = 3$ or $x = 5$. Check forward in the original: $x = 3$ gives $9 + 15 = 24$ and $8(3) = 24$ ✓; $x = 5$ gives $25 + 15 = 40$ and $8(5) = 40$ ✓. (The choice $x = -3$ or $x = -5$ has both signs wrong, and $9 + 15 = 24 \\ne -24$; the choice $x = 8$ or $x = 15$ copies the numbers out of the equation without factoring; the choice $x = 3$ or $x = -5$ flips one sign, and $25 + 15 = 40 \\ne -40$.)',
    },
    {
      q: 'Solve $x^2 + 4x = 12$.',
      choices: ['$x = 6$ or $x = -2$', '$x = -6$ or $x = 2$', '$x = 12$ or $x = 8$', '$x = -6$ or $x = -2$'],
      answer: 1,
      solution:
        'Subtract $12$ from both sides so the right side is zero: $x^2 + 4x - 12 = 0$. Sum $4$ and product $-12$ give $6$ and $-2$, so $(x + 6)(x - 2) = 0$ and $x = -6$ or $x = 2$. Check forward in the original: $x = -6$ gives $36 - 24 = 12$ ✓, and $x = 2$ gives $4 + 8 = 12$ ✓. (The choice $x = 6$ or $x = -2$ has both signs flipped, and $36 + 24 = 60 \\ne 12$; the choice $x = 12$ or $x = 8$ factors the left side as $x(x + 4)$ and then sets each factor equal to $12$, which is only legal when the product is $0$; the choice $x = -6$ or $x = -2$ flips one sign, and $4 - 8 = -4 \\ne 12$.)',
    },
  ],
  // p8 — perfect-square trinomials
  [
    {
      q: 'Factor $x^2 + 14x + 49$.',
      choices: ['$(x - 7)^2$', '$(x + 7)(x - 7)$', '$(x + 1)(x + 49)$', '$(x + 7)^2$'],
      answer: 3,
      solution:
        'We need sum $14$ and product $49$: that is $7$ and $7$ — the same number twice, which is what makes this a perfect square. Multiply back out: $(x + 7)^2 = (x + 7)(x + 7) = x^2 + 7x + 7x + 49 = x^2 + 14x + 49$ ✓. (The choice $(x - 7)^2$ expands to $x^2 - 14x + 49$, with the middle term negative; the choice $(x + 7)(x - 7)$ is the difference of squares $x^2 - 49$, which has no middle term at all; the choice $(x + 1)(x + 49)$ has product $49$ but sum $50$.)',
    },
    {
      q: 'Factor $x^2 - 16x + 64$.',
      choices: ['$(x - 8)(x + 8)$', '$(x + 8)^2$', '$(x - 8)^2$', '$(x - 4)(x - 16)$'],
      answer: 2,
      solution:
        'We need sum $-16$ and product $64$: that is $-8$ and $-8$, the same number twice. Multiply back out: $(x - 8)^2 = x^2 - 8x - 8x + 64 = x^2 - 16x + 64$ ✓. (The choice $(x - 8)(x + 8)$ is the difference of squares $x^2 - 64$ — wrong sign on the constant and no middle term; the choice $(x + 8)^2$ expands to $x^2 + 16x + 64$, with the middle term positive; the choice $(x - 4)(x - 16)$ has product $64$ but sum $-20$.)',
    },
    {
      q: 'For which value of $c$ is $x^2 + 12x + c$ a perfect square?',
      choices: ['$c = 6$', '$c = 36$', '$c = 12$', '$c = 24$'],
      answer: 1,
      solution:
        'A perfect square is $(x + p)^2 = x^2 + 2px + p^2$, so the middle coefficient $12$ must be $2p$, giving $p = 6$, and then $c = p^2 = 36$. Multiply back out to check: $(x + 6)^2 = x^2 + 6x + 6x + 36 = x^2 + 12x + 36$ ✓. (The choice $c = 6$ halves the middle coefficient but forgets to square the result, and $x^2 + 12x + 6$ does not factor over the integers; the choice $c = 12$ just copies the middle coefficient; the choice $c = 24$ doubles $12$ instead of halving and then squaring.)',
    },
  ],
  // p9 — a known root pins down a missing coefficient
  [
    {
      q: 'One solution of $x^2 + kx + 18 = 0$ is $x = -3$. What is $k$?',
      choices: ['$k = 9$', '$k = -9$', '$k = 6$', '$k = 3$'],
      answer: 0,
      solution:
        'Substitute $x = -3$: $9 - 3k + 18 = 0$, so $27 = 3k$ and $k = 9$. Check forward: $x^2 + 9x + 18 = (x + 3)(x + 6)$, and putting $x = -3$ into it gives $9 - 27 + 18 = 0$ ✓ (the other root is $-6$). (The choice $k = -9$ mishandles the sign of the $-3k$ term, treating it as $+3k$; the choice $k = 6$ reports the size of the OTHER root rather than the coefficient; the choice $k = 3$ reports the size of the given root.)',
    },
    {
      q: 'One solution of $x^2 + kx - 20 = 0$ is $x = 5$. What is $k$?',
      choices: ['$k = 1$', '$k = -4$', '$k = -1$', '$k = 4$'],
      answer: 2,
      solution:
        'Substitute $x = 5$: $25 + 5k - 20 = 0$, so $5k = -5$ and $k = -1$. Check forward: $x^2 - x - 20 = (x - 5)(x + 4)$, and $25 - 5 - 20 = 0$ ✓ (the other root is $-4$). (The choice $k = 1$ drops the minus sign when dividing $-5$ by $5$; the choice $k = -4$ reports the other root instead of the coefficient; the choice $k = 4$ reports the size of that other root.)',
    },
    {
      q: 'One solution of $x^2 - 7x + c = 0$ is $x = 2$. What is $c$?',
      choices: ['$c = -10$', '$c = 10$', '$c = 5$', '$c = 14$'],
      answer: 1,
      solution:
        'Substitute $x = 2$: $4 - 14 + c = 0$, so $c = 10$. Check forward: $x^2 - 7x + 10 = (x - 2)(x - 5)$, and $4 - 14 + 10 = 0$ ✓ (the other root is $5$). (The choice $c = -10$ solves $4 - 14 + c = 0$ as if $c$ were already on the other side; the choice $c = 5$ names the other ROOT rather than the constant term; the choice $c = 14$ computes $7 \\cdot 2$, forgetting the $4$ from $x^2$.)',
    },
  ],
  // p10 — count the coefficients that make the quadratic factor
  [
    {
      q: 'For how many integers $b$ (positive or negative) can $x^2 + bx - 10$ be factored as $(x + p)(x + q)$ with integers $p$ and $q$?',
      choices: ['$2$', '$8$', '$3$', '$4$'],
      answer: 3,
      solution:
        'Expanding gives $pq = -10$ and $p + q = b$, so we need every integer pair whose product is $-10$. Since the product is negative, the two must have opposite signs: $1$ and $-10$ (sum $-9$), $-1$ and $10$ (sum $9$), $2$ and $-5$ (sum $-3$), $-2$ and $5$ (sum $3$). That is four values of $b$: $-9$, $9$, $-3$, $3$. Check one forward: $b = 3$ gives $x^2 + 3x - 10 = (x + 5)(x - 2)$ ✓. (The choice $2$ counts only the positive values of $b$ and forgets that $b$ may be negative; the choice $8$ counts the four ordered PAIRS twice, but $1$ and $-10$ is the same pair as $-10$ and $1$ and gives the same $b$; the choice $3$ comes from listing only the pairs $1 \\cdot 10$ and $2 \\cdot 5$ as if the product were $+10$.)',
    },
    {
      q: 'How many integers $b$ make $x^2 + bx + 20$ factorable as $(x + p)(x + q)$ with $p$ and $q$ integers?',
      choices: ['$3$', '$4$', '$6$', '$12$'],
      answer: 2,
      solution:
        'We need $pq = 20$ and $p + q = b$. A positive product means $p$ and $q$ share a sign. Positive pairs: $1 \\cdot 20$, $2 \\cdot 10$, $4 \\cdot 5$, giving $b = 21, 12, 9$. Each pair can also be taken all-negative, giving $b = -21, -12, -9$. That is $6$ values. Check one forward: $b = 9$ gives $x^2 + 9x + 20 = (x + 4)(x + 5)$ ✓. (The choice $3$ counts only the positive values of $b$; the choice $4$ counts the divisors $1, 2, 4, 5$ and stops; the choice $12$ counts all $12$ ordered pairs, but swapping $p$ and $q$ gives the same sum and so the same $b$. Opposite-sign pairs are not allowed here — they would make the product $-20$.)',
    },
    {
      q: 'What is the LARGEST integer $b$ for which $x^2 + bx + 24$ factors as $(x + p)(x + q)$ with integers $p$ and $q$?',
      choices: ['$25$', '$24$', '$14$', '$10$'],
      answer: 0,
      solution:
        'We need $pq = 24$ and $b = p + q$. The positive pairs are $1 \\cdot 24$ (sum $25$), $2 \\cdot 12$ (sum $14$), $3 \\cdot 8$ (sum $11$), $4 \\cdot 6$ (sum $10$); the all-negative pairs give the negatives of those sums. The biggest sum comes from the most lopsided pair, $1$ and $24$, so $b = 25$. Check forward: $(x + 1)(x + 24) = x^2 + 25x + 24$ ✓. (The choice $24$ copies the constant term instead of adding the pair; the choice $14$ comes from the pair $2$ and $12$; the choice $10$ comes from the most BALANCED pair $4$ and $6$, which gives the smallest positive $b$, not the largest.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 10,
  sections: { '10.1': s101, '10.2': s102 },
}
