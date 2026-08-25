// Introduction to Algebra chapter 13 — variations for sections 13.1 and 13.2.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked a
//    SECOND, INDEPENDENT way: every solution of an equation is substituted back
//    into the ORIGINAL equation, every completed square is expanded and matched
//    coefficient by coefficient, and every "one solution" claim is tested by
//    stepping one unit to each side to show the value really does lift off. A
//    check is never run at a point where the expression collapses to zero — a
//    zero check passes for almost any wrong answer, so it proves nothing.
//  - Each distractor is one named mistake, named in a parenthetical at the end
//    of the solution, and the named mistake really does produce that number.
//    The traps running through this pair of sections are: SQUARING THE WHOLE
//    MIDDLE COEFFICIENT instead of half of it, REPORTING THE HALF without
//    squaring it, FORGETTING THE NEGATIVE BRANCH of a square root, KEEPING THE
//    SIGN of the shift instead of flipping it, FORGETTING TO TAKE THE SQUARE
//    ROOT of the right-hand side, SKIPPING THE FINAL DIVISION by the leading
//    coefficient, MOVING A CONSTANT ACROSS WITHOUT CHANGING ITS SIGN,
//    FORGETTING THAT THE OUTSIDE FACTOR MULTIPLIES whatever you add inside,
//    and CONFUSING WHERE a minimum happens with WHAT the minimum is.
//  - No two choices inside an item name the same value, even written two ways.

const s131 = [
  // p1 — spot the perfect square trinomial
  [
    {
      q: 'Which of these trinomials is a perfect square?',
      choices: ['$x^2 + 14x + 49$', '$x^2 + 14x + 7$', '$x^2 + 7x + 49$', '$x^2 + 49x + 14$'],
      answer: 0,
      solution:
        'Run the half-and-square test on the middle coefficient. For $x^2 + 14x + 49$: half of $14$ is $7$, and $7^2 = 49$, which is exactly the constant term. Check a second, independent way by expanding: $(x+7)^2 = x^2 + 7x + 7x + 49 = x^2 + 14x + 49$ ✓ — the coefficients match one for one. (The choice $x^2 + 14x + 7$ REPORTS THE HALF as the constant instead of squaring it, and half of $14$ squared is $49$, not $7$ ✗; the choice $x^2 + 7x + 49$ puts the half in the MIDDLE slot, and half of $7$ squared is $12.25$, not $49$ ✗; the choice $x^2 + 49x + 14$ SWAPS the two numbers, and half of $49$ squared is $600.25$, nowhere near $14$ ✗.)',
    },
    {
      q: 'Three of these four trinomials are perfect squares. Which one is NOT?',
      choices: ['$x^2 + 4x + 4$', '$x^2 - 10x + 25$', '$x^2 + 12x + 24$', '$x^2 - 2x + 1$'],
      answer: 2,
      solution:
        'Halve each middle coefficient and square it. For $x^2 + 4x + 4$: half of $4$ is $2$ and $2^2 = 4$ ✓. For $x^2 - 10x + 25$: half of $-10$ is $-5$ and $(-5)^2 = 25$ ✓. For $x^2 - 2x + 1$: half of $-2$ is $-1$ and $(-1)^2 = 1$ ✓. For $x^2 + 12x + 24$: half of $12$ is $6$ and $6^2 = 36$, but the constant is $24$ ✗ — that is the odd one out. Check a second, independent way by expanding the three winners: $(x+2)^2 = x^2 + 4x + 4$, $(x-5)^2 = x^2 - 10x + 25$, $(x-1)^2 = x^2 - 2x + 1$ ✓, while $x^2 + 12x + 24$ would need the constant $36$ to become $(x+6)^2$. (Choosing $x^2 + 4x + 4$ comes from thinking the middle and last numbers must differ; choosing $x^2 - 10x + 25$ comes from thinking a MINUS in the middle rules a square out, but $(-5)^2$ is positive; choosing $x^2 - 2x + 1$ comes from thinking a constant of $1$ is too small to be a square, but $1 = 1^2$.)',
    },
    {
      q: 'For which value of $c$ is $x^2 - 16x + c$ a perfect square trinomial?',
      choices: ['$-8$', '$8$', '$16$', '$64$'],
      answer: 3,
      solution:
        'Half of $-16$ is $-8$, and the constant we need is the SQUARE of that half: $(-8)^2 = 64$. So $c = 64$. Check a second, independent way by expanding: $(x-8)^2 = x^2 - 8x - 8x + 64 = x^2 - 16x + 64$ ✓. (The choice $-8$ REPORTS THE HALF itself instead of squaring it, and $x^2 - 16x - 8$ is not a square since a square cannot have a negative constant; the choice $8$ takes the size of the half but still skips the squaring; the choice $16$ copies the middle coefficient straight down, and $x^2 - 16x + 16$ would need half of $-16$ to square to $16$, but it squares to $64$ ✗.)',
    },
  ],
  // p2 — unsquare a bare x^2 and keep both roots
  [
    {
      q: 'A number squared is $81$. What are all the possibilities for that number?',
      choices: ['$9$ and $-9$', '$9$ only', '$-9$ only', '$9$ and $81$'],
      answer: 0,
      solution:
        'We want every $x$ with $x^2 = 81$. Certainly $9^2 = 81$. But a negative times a negative is positive, so $(-9)^2 = 81$ as well — two different numbers land on $81$. Check a second, independent way by factoring instead: $x^2 - 81 = (x-9)(x+9)$, and a product is zero exactly when one factor is, giving $x = 9$ or $x = -9$ ✓. (“$9$ only” FORGETS THE NEGATIVE BRANCH, the single most common quadratic slip; “$-9$ only” drops the positive branch instead; “$9$ and $81$” lists the number alongside its square, but $81^2 = 6561$, not $81$ ✗.)',
    },
    {
      q: 'Solve $3x^2 = 75$.',
      choices: ['$x = 25$ or $x = -25$', '$x = 5$ or $x = -5$', '$x = 5$', '$x = 15$ or $x = -15$'],
      answer: 1,
      solution:
        'First undo the multiplication: divide both sides by $3$ to get $x^2 = 25$. Now unsquare with both signs: $x = 5$ or $x = -5$. Check a second, independent way by substituting into the ORIGINAL equation: $3 \\cdot 5^2 = 3 \\cdot 25 = 75$ ✓, and $3 \\cdot (-5)^2 = 3 \\cdot 25 = 75$ ✓. (The choice $\\pm 25$ stops at $x^2 = 25$ and FORGETS TO TAKE THE SQUARE ROOT, and $3 \\cdot 625 = 1875$ ✗; the choice $x = 5$ alone forgets the negative branch; the choice $\\pm 15$ MULTIPLIES both sides by $3$ instead of dividing, landing on $x^2 = 225$, and $3 \\cdot 225 = 675$ ✗.)',
    },
    {
      q: 'Rosa solves $x^2 = 64$ and writes $x = 8$. What is wrong with her answer?',
      choices: [
        'Nothing — $x = 8$ is the complete answer',
        'The answer should be $x = 32$ instead',
        'The answer should be $x = -8$ instead of $x = 8$',
        'She left out a second solution, $x = -8$',
      ],
      answer: 3,
      solution:
        'Rosa’s $8$ really is a solution, since $8^2 = 64$. But it is not the only one: $(-8)^2 = (-8)(-8) = 64$ too, because a negative times a negative is positive. Both signs count, so the full answer is $x = \\pm 8$. Check a second, independent way by factoring: $x^2 - 64 = (x-8)(x+8)$, which is zero when $x = 8$ and when $x = -8$ ✓ — exactly two solutions. (“Nothing” FORGETS THE NEGATIVE BRANCH; “$x = 32$” HALVES $64$ instead of taking its square root, and $32^2 = 1024$ ✗; “$-8$ instead of $8$” swaps the two roots rather than keeping both, but $8$ was never wrong.)',
    },
  ],
  // p3 — fill the missing slot in x^2 + bx + c = (x+a)^2
  [
    {
      q: 'Fill in the blank: $x^2 + \\square x + 121 = (x+11)^2$',
      choices: ['$22$', '$11$', '$121$', '$242$'],
      answer: 0,
      solution:
        'Expand the right side: $(x+11)^2 = x^2 + 11x + 11x + 121 = x^2 + 22x + 121$. The blank is $22$ — the middle coefficient is DOUBLE the number inside the parentheses, while the constant is its square. Check a second, independent way with the half-and-square test: half of $22$ is $11$, and $11^2 = 121$, which is the constant we were handed ✓. (The choice $11$ writes the number inside the parentheses without doubling it; the choice $121$ copies the constant into the middle slot, but half of $121$ squared is $3660.25$, not $121$ ✗; the choice $242$ doubles the CONSTANT $121$ instead of doubling $11$.)',
    },
    {
      q: 'Fill in the blank: $x^2 - 18x + \\square = (x-9)^2$',
      choices: ['$18$', '$81$', '$-81$', '$9$'],
      answer: 1,
      solution:
        'Expand the right side: $(x-9)^2 = x^2 - 9x - 9x + 81 = x^2 - 18x + 81$, so the blank is $81$. Check a second, independent way with the half-and-square test: half of $-18$ is $-9$, and $(-9)^2 = 81$ ✓. Notice the constant comes out POSITIVE even though the middle term is negative — squaring erases the minus sign. (The choice $18$ copies the middle coefficient’s size; the choice $-81$ drags the minus sign through the squaring, but $(-9)(-9) = +81$; the choice $9$ REPORTS THE HALF without squaring it.)',
    },
    {
      q: 'The trinomial $x^2 + 20x + 100$ can be written as $(x+h)^2$. What is $h$?',
      choices: ['$20$', '$100$', '$10$', '$50$'],
      answer: 2,
      solution:
        'The number inside the parentheses is half the middle coefficient: half of $20$ is $10$, so $h = 10$. Check a second, independent way by expanding: $(x+10)^2 = x^2 + 10x + 10x + 100 = x^2 + 20x + 100$ ✓ — both the middle term and the constant match. (The choice $20$ copies the middle coefficient without halving, and $(x+20)^2 = x^2 + 40x + 400$ ✗; the choice $100$ copies the constant, and $(x+100)^2 = x^2 + 200x + 10000$ ✗; the choice $50$ HALVES THE CONSTANT instead of the middle coefficient, and $(x+50)^2 = x^2 + 100x + 2500$ ✗.)',
    },
  ],
  // p4 — unsquare a shifted binomial
  [
    {
      q: 'Solve $(x+5)^2 = 16$.',
      choices: ['$x = 11$ or $x = -21$', '$x = -1$ or $x = -9$', '$x = 1$ or $x = 9$', '$x = -1$ only'],
      answer: 1,
      solution:
        'The quantity $x + 5$ squares to $16$, so $x + 5 = \\pm 4$. From $x + 5 = 4$ we get $x = -1$; from $x + 5 = -4$ we get $x = -9$. Check a second, independent way by substituting into the original equation: $(-1+5)^2 = 4^2 = 16$ ✓ and $(-9+5)^2 = (-4)^2 = 16$ ✓. (The choice $x = 11$ or $x = -21$ FORGETS TO TAKE THE SQUARE ROOT and uses $x + 5 = \\pm 16$; the choice $x = 1$ or $x = 9$ solves $(x-5)^2 = 16$ instead, KEEPING THE SIGN of the $5$ rather than moving it across; the choice $x = -1$ only drops the negative branch.)',
    },
    {
      q: 'The two solutions of $(x - h)^2 = 36$ are $x = 10$ and $x = -2$. What is $h$?',
      choices: ['$6$', '$36$', '$4$', '$-4$'],
      answer: 2,
      solution:
        'Unsquaring gives $x - h = \\pm 6$, so the two solutions are $h + 6$ and $h - 6$ — they sit six units on either side of $h$. That makes $h$ the midpoint: $h = \\frac{10 + (-2)}{2} = \\frac{8}{2} = 4$. Check a second, independent way by substituting $h = 4$ into the original equation: $(10-4)^2 = 6^2 = 36$ ✓ and $(-2-4)^2 = (-6)^2 = 36$ ✓. (The choice $6$ reads $\\sqrt{36}$ off the right side and calls it $h$, but $(10-6)^2 = 16 \\ne 36$ ✗; the choice $36$ copies the right-hand side, and $(10-36)^2 = 676$ ✗; the choice $-4$ gets the size right but FLIPS THE SIGN, and $(10+4)^2 = 196$ ✗.)',
    },
    {
      q: 'A number $x$ satisfies $(x-7)^2 = 4$. What is the sum of the two possible values of $x$?',
      choices: ['$9$', '$7$', '$5$', '$14$'],
      answer: 3,
      solution:
        'Unsquare: $x - 7 = \\pm 2$, so $x = 9$ or $x = 5$. Their sum is $9 + 5 = 14$. Check a second, independent way without ever solving: the two roots sit the same distance on either side of $7$, so their average is $7$ and their sum is $2 \\times 7 = 14$ ✓. (And the roots themselves check out: $(9-7)^2 = 4$ ✓, $(5-7)^2 = (-2)^2 = 4$ ✓.) (The choice $9$ takes only the plus branch and reports that single root as the “sum”; the choice $7$ reports the CENTER instead of the sum; the choice $5$ takes only the minus branch.)',
    },
  ],
  // p5 — a perfect square set equal to zero: one double root
  [
    {
      q: 'Solve $x^2 - 26x + 169 = 0$.',
      choices: ['$x = 13$', '$x = -13$', '$x = 13$ or $x = -13$', '$x = 13$ or $x = 169$'],
      answer: 0,
      solution:
        'Half of $-26$ is $-13$, and $(-13)^2 = 169$ matches the constant, so the left side is the perfect square $(x-13)^2$. Only $0$ squares to $0$, so $x - 13 = 0$ and $x = 13$ — a single double root. Check a second, independent way by matching coefficients rather than substituting: $(x-13)^2 = x^2 - 13x - 13x + 169 = x^2 - 26x + 169$ ✓, exactly the trinomial we started with. And the tempting twin fails: at $x = -13$ the left side is $169 + 338 + 169 = 676 \\ne 0$ ✗. (The choice $x = -13$ KEEPS THE SIGN of the $-13$ instead of flipping it when solving $x - 13 = 0$; the choice $x = \\pm 13$ attaches a negative branch that only exists when the right side is positive; the choice $x = 13$ or $x = 169$ reads the constant $169$ off as a second root, but $169^2 - 26 \\cdot 169 + 169 = 28561 - 4394 + 169 = 24336 \\ne 0$ ✗.)',
    },
    {
      q: 'The equation $x^2 + 24x + 144 = 0$ has exactly one solution. What is it?',
      choices: ['$x = 12$', '$x = 144$', '$x = -12$', '$x = -24$'],
      answer: 2,
      solution:
        'Half of $24$ is $12$, and $12^2 = 144$, so the equation is $(x+12)^2 = 0$. The only number whose square is $0$ is $0$ itself, so $x + 12 = 0$ and $x = -12$. Check a second, independent way by matching coefficients: $(x+12)^2 = x^2 + 12x + 12x + 144 = x^2 + 24x + 144$ ✓. And the sign-flipped candidate fails: at $x = 12$ the left side is $144 + 288 + 144 = 576 \\ne 0$ ✗. (The choice $x = 12$ reports the number inside the parentheses without flipping its sign; the choice $x = 144$ copies the constant term; the choice $x = -24$ negates the MIDDLE coefficient instead of halving it, and $576 - 576 + 144 = 144 \\ne 0$ ✗.)',
    },
    {
      q: 'How many real solutions does $x^2 + 18x + 81 = 0$ have?',
      choices: ['None', 'Two', 'Infinitely many', 'Exactly one'],
      answer: 3,
      solution:
        'Half of $18$ is $9$ and $9^2 = 81$, so the equation is $(x+9)^2 = 0$. A square is $0$ only when the thing being squared is $0$, so $x + 9 = 0$ forces $x = -9$ and nothing else — exactly one solution. Check a second, independent way by testing the neighbours, so nothing collapses to zero: at $x = -8$ the left side is $64 - 144 + 81 = 1$, and at $x = -10$ it is $100 - 180 + 81 = 1$. Both sides of $-9$ give $1$, not $0$ ✓, so the value touches zero at a single point. (“None” confuses a double root with no root at all; “Two” assumes every quadratic has two solutions, but the $\\pm$ adds and subtracts nothing when the right side is $0$; “Infinitely many” treats the equation as an identity, yet we just found two numbers that fail it.)',
    },
  ],
  // p6 — unsquare when the right side is not a perfect square
  [
    {
      q: 'Solve $(x+4)^2 = 7$.',
      choices: ['$x = -4 \\pm \\sqrt{7}$', '$x = 4 \\pm \\sqrt{7}$', '$x = -4 + \\sqrt{7}$ only', '$x = -4 \\pm 7$'],
      answer: 0,
      solution:
        'Unsquare both sides, keeping both signs: $x + 4 = \\pm\\sqrt{7}$. Subtract $4$: $x = -4 \\pm\\sqrt{7}$. The $7$ is not a perfect square, so its root stays under the radical. Check a second, independent way by substituting: with $x = -4 + \\sqrt{7}$, the quantity $x + 4$ is exactly $\\sqrt{7}$, and $(\\sqrt{7})^2 = 7$ ✓; with $x = -4 - \\sqrt{7}$ it is $-\\sqrt{7}$, and $(-\\sqrt{7})^2 = 7$ ✓. (The choice $4 \\pm \\sqrt{7}$ KEEPS THE SIGN of the $4$ instead of subtracting it, and then $x + 4 = 8 + \\sqrt{7} \\approx 10.65$, whose square is about $113$ ✗; the choice $-4 + \\sqrt{7}$ only drops the negative branch; the choice $-4 \\pm 7$ FORGETS TO TAKE THE SQUARE ROOT of $7$, and $x + 4 = 7$ gives $49$, not $7$ ✗.)',
    },
    {
      q: 'The solutions of $(x-3)^2 = k$ are $x = 3 \\pm \\sqrt{11}$. What is $k$?',
      choices: ['$3$', '$\\sqrt{11}$', '$11$', '$121$'],
      answer: 2,
      solution:
        'Run the solving backwards. Unsquaring $(x-3)^2 = k$ gives $x - 3 = \\pm\\sqrt{k}$, and the stated solutions say $x - 3 = \\pm\\sqrt{11}$. Matching the two, $\\sqrt{k} = \\sqrt{11}$, so $k = 11$. Check a second, independent way by substituting a stated solution into the left side: with $x = 3 + \\sqrt{11}$, we get $(x-3)^2 = (\\sqrt{11})^2 = 11$ ✓, and with $x = 3 - \\sqrt{11}$, $(-\\sqrt{11})^2 = 11$ ✓ — both give the same $k$, as they must. (The choice $3$ copies the shift out of the parentheses; the choice $\\sqrt{11}$ FORGETS TO SQUARE, reading the root off as the right-hand side itself; the choice $121$ squares $11$ a second time, and $(x-3)^2 = 121$ would give $x = 3 \\pm 11$ ✗.)',
    },
    {
      q: 'Solve $2(x+6)^2 = 24$.',
      choices: ['$x = -6 \\pm 12$', '$x = -6 \\pm \\sqrt{24}$', '$x = 6 \\pm 2\\sqrt{3}$', '$x = -6 \\pm 2\\sqrt{3}$'],
      answer: 3,
      solution:
        'Get the square by itself first: divide both sides by $2$ to obtain $(x+6)^2 = 12$. Now unsquare: $x + 6 = \\pm\\sqrt{12}$, and $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$. So $x = -6 \\pm 2\\sqrt{3}$. Check a second, independent way by substituting into the ORIGINAL equation: with $x = -6 + 2\\sqrt{3}$, the quantity $x + 6$ is $2\\sqrt{3}$, so $2(2\\sqrt{3})^2 = 2 \\cdot 4 \\cdot 3 = 24$ ✓, and the minus branch squares to the same thing ✓. (The choice $-6 \\pm 12$ divides correctly but then FORGETS TO TAKE THE SQUARE ROOT of $12$; the choice $-6 \\pm \\sqrt{24}$ SKIPS THE DIVISION by $2$ and unsquares the $24$ directly, giving about $\\pm 4.90$ instead of $\\pm 3.46$; the choice $6 \\pm 2\\sqrt{3}$ keeps the sign of the $6$ instead of moving it across.)',
    },
  ],
  // p7 — unsquare when x carries a coefficient
  [
    {
      q: 'Solve $(3x+1)^2 = 64$.',
      choices: [
        '$x = \\frac{7}{3}$ or $x = -3$',
        '$x = 7$ or $x = -9$',
        '$x = \\frac{7}{3}$ only',
        '$x = 3$ or $x = -\\frac{7}{3}$',
      ],
      answer: 0,
      solution:
        'Unsquare with both signs: $3x + 1 = \\pm 8$. From $3x + 1 = 8$ we get $3x = 7$, so $x = \\frac{7}{3}$. From $3x + 1 = -8$ we get $3x = -9$, so $x = -3$. Do not stop at the value of $3x$ — divide! Check a second, independent way by substituting into the original equation: $\\left(3 \\cdot \\frac{7}{3} + 1\\right)^2 = (7+1)^2 = 64$ ✓ and $(3(-3)+1)^2 = (-8)^2 = 64$ ✓. (The choice $x = 7$ or $x = -9$ SKIPS THE FINAL DIVISION by $3$ and reports the values of $3x$; the choice $\\frac{7}{3}$ only drops the negative branch; the choice $x = 3$ or $x = -\\frac{7}{3}$ solves $(3x-1)^2 = 64$ instead, misreading the $+1$ as $-1$.)',
    },
    {
      q: 'Solve $(5x-2)^2 = 9$.',
      choices: [
        '$x = 1$ or $x = \\frac{1}{5}$',
        '$x = 1$ or $x = -\\frac{1}{5}$',
        '$x = 5$ or $x = -1$',
        '$x = 1$ only',
      ],
      answer: 1,
      solution:
        'Unsquare with both signs: $5x - 2 = \\pm 3$. From $5x - 2 = 3$ we get $5x = 5$, so $x = 1$. From $5x - 2 = -3$ we get $5x = -1$, so $x = -\\frac{1}{5}$. Check a second, independent way by substituting into the original equation: $(5 \\cdot 1 - 2)^2 = 3^2 = 9$ ✓ and $\\left(5 \\cdot \\left(-\\frac{1}{5}\\right) - 2\\right)^2 = (-1-2)^2 = (-3)^2 = 9$ ✓. (The choice $x = 1$ or $x = \\frac{1}{5}$ loses the minus sign on the second branch, solving $5x = 1$; at $x = \\frac{1}{5}$ the left side is $(1-2)^2 = 1 \\ne 9$ ✗; the choice $x = 5$ or $x = -1$ SKIPS THE FINAL DIVISION by $5$ and reports the values of $5x$; the choice $x = 1$ only drops the negative branch.)',
    },
    {
      q: 'The two solutions of $(4x - b)^2 = 25$ are $x = 3$ and $x = \\frac{1}{2}$. What is $b$?',
      choices: ['$5$', '$25$', '$12$', '$7$'],
      answer: 3,
      solution:
        'Unsquaring gives $4x - b = \\pm 5$. Feed in the solution $x = 3$: $12 - b = 5$, so $b = 7$. Check a second, independent way with the OTHER solution: at $x = \\frac{1}{2}$ we get $4 \\cdot \\frac{1}{2} - 7 = 2 - 7 = -5$, and $(-5)^2 = 25$ ✓ — the same $b$ works on both branches, exactly as it should. (The choice $5$ reads $\\sqrt{25}$ off the right side and calls it $b$, but then $4 \\cdot 3 - 5 = 7$ and $7^2 = 49 \\ne 25$ ✗; the choice $25$ copies the right-hand side, giving $(12-25)^2 = 169$ ✗; the choice $12$ computes $4 \\cdot 3$ and stops, forgetting to subtract the $5$, and $(12-12)^2 = 0 \\ne 25$ ✗.)',
    },
  ],
  // p8 — recognise a perfect square, then unsquare an irrational right side
  [
    {
      q: 'Solve $x^2 + 12x + 36 = 7$.',
      choices: [
        '$x = -6 \\pm \\sqrt{7}$',
        '$x = 6 \\pm \\sqrt{7}$',
        '$x = -6 \\pm 7$',
        '$x = -6 + \\sqrt{7}$ only',
      ],
      answer: 0,
      solution:
        'Half of $12$ is $6$ and $6^2 = 36$, so the left side is the perfect square $(x+6)^2$ and the equation reads $(x+6)^2 = 7$. Unsquare: $x + 6 = \\pm\\sqrt{7}$, so $x = -6 \\pm\\sqrt{7}$. Check a second, independent way by substituting into the ORIGINAL trinomial with $x = -6 + \\sqrt{7}$: $x^2 = 36 - 12\\sqrt{7} + 7 = 43 - 12\\sqrt{7}$, and $12x = -72 + 12\\sqrt{7}$, so the total is $43 - 12\\sqrt{7} - 72 + 12\\sqrt{7} + 36 = 7$ ✓. (The choice $6 \\pm \\sqrt{7}$ KEEPS THE SIGN of the $6$ instead of moving it across; the choice $-6 \\pm 7$ FORGETS TO TAKE THE SQUARE ROOT of the $7$, giving $x = 1$, where the left side is $1 + 12 + 36 = 49 \\ne 7$ ✗; the choice $-6 + \\sqrt{7}$ only drops the negative branch.)',
    },
    {
      q: 'Solve $x^2 - 22x + 121 = 5$.',
      choices: [
        '$x = -11 \\pm \\sqrt{5}$',
        '$x = 11 \\pm \\sqrt{5}$',
        '$x = 11 \\pm 5$',
        '$x = 11 \\pm \\sqrt{126}$',
      ],
      answer: 1,
      solution:
        'Half of $-22$ is $-11$ and $(-11)^2 = 121$, so the left side is $(x-11)^2$ and the equation reads $(x-11)^2 = 5$. Unsquare: $x - 11 = \\pm\\sqrt{5}$, so $x = 11 \\pm\\sqrt{5}$ — subtracting $-11$ pushes the centre to $+11$. Check a second, independent way by substituting into the ORIGINAL trinomial with $x = 11 + \\sqrt{5}$: $x^2 = 121 + 22\\sqrt{5} + 5 = 126 + 22\\sqrt{5}$, and $-22x = -242 - 22\\sqrt{5}$, so the total is $126 + 22\\sqrt{5} - 242 - 22\\sqrt{5} + 121 = 5$ ✓. (The choice $-11 \\pm \\sqrt{5}$ centres on the half $-11$ without flipping its sign, and at $x = -11 + \\sqrt{5}$ the left side is $(-22+\\sqrt{5})^2 = 489 - 44\\sqrt{5} \\approx 391 \\ne 5$ ✗; the choice $11 \\pm 5$ FORGETS TO TAKE THE SQUARE ROOT, and $x = 16$ gives $256 - 352 + 121 = 25 \\ne 5$ ✗; the choice $11 \\pm \\sqrt{126}$ MOVES THE $121$ ACROSS WITHOUT CHANGING ITS SIGN, adding it to the $5$ instead of leaving it inside the square.)',
    },
    {
      q: 'For which value of $d$ do the solutions of $x^2 - 8x + 16 = d$ come out as $x = 4 \\pm \\sqrt{10}$?',
      choices: ['$4$', '$16$', '$100$', '$10$'],
      answer: 3,
      solution:
        'Half of $-8$ is $-4$ and $(-4)^2 = 16$, so the equation is really $(x-4)^2 = d$, whose solutions are $x = 4 \\pm\\sqrt{d}$. Matching against $x = 4 \\pm\\sqrt{10}$ gives $d = 10$. Check a second, independent way by substituting $x = 4 + \\sqrt{10}$ into the left side: $x^2 = 16 + 8\\sqrt{10} + 10 = 26 + 8\\sqrt{10}$, and $-8x = -32 - 8\\sqrt{10}$, so the total is $26 + 8\\sqrt{10} - 32 - 8\\sqrt{10} + 16 = 10$ ✓. (The choice $4$ copies the centre of the solutions; the choice $16$ copies the constant term of the trinomial, which would give $x = 4 \\pm 4$ ✗; the choice $100$ SQUARES THE $10$ a second time, giving $x = 4 \\pm 10$ ✗.)',
    },
  ],
  // p9 — a square can never equal a negative
  [
    {
      q: 'How many real solutions does $(x-5)^2 + 9 = 0$ have?',
      choices: ['Two', 'None', 'One', 'Three'],
      answer: 1,
      solution:
        'Move the $9$ across: $(x-5)^2 = -9$. A real number squared is never negative, so no real $x$ works. Check a second, independent way by testing values, well away from any collapse: at $x = 5$ the left side is $0 + 9 = 9$, at $x = 2$ it is $9 + 9 = 18$, and at $x = 8$ it is $9 + 9 = 18$. The smallest the left side can ever be is $9$, since $(x-5)^2 \\ge 0$ ✓ — it never reaches $0$. (“Two” unsquares $-9$ as if it were $+9$, giving $x = 8$ or $x = 2$, and we just saw both give $18$ ✗; “One” imagines a double root, which happens only when the square equals exactly $0$; “Three” is impossible for a quadratic, which has at most two solutions.)',
    },
    {
      q: 'Which of these equations has NO real solution?',
      choices: ['$(x-2)^2 = 0$', '$(x-2)^2 = 7$', '$(x-2)^2 + 7 = 0$', '$(x+2)^2 = 7$'],
      answer: 2,
      solution:
        'Rearrange the third one: $(x-2)^2 = -7$. Since a real square is never negative, nothing works. Check a second, independent way by testing values instead of trusting the rule: at $x = 2$ the left side of $(x-2)^2 + 7$ is $0 + 7 = 7$, at $x = 0$ it is $4 + 7 = 11$, and at $x = 5$ it is $9 + 7 = 16$ — always at least $7$, never $0$ ✓. Meanwhile the others all deliver: $(x-2)^2 = 0$ gives $x = 2$; $(x-2)^2 = 7$ gives $x = 2 \\pm\\sqrt{7}$; $(x+2)^2 = 7$ gives $x = -2 \\pm\\sqrt{7}$. (Choosing $(x-2)^2 = 0$ comes from thinking a right side of $0$ means no solution, but it means exactly one; choosing $(x-2)^2 = 7$ comes from confusing “the root is irrational” with “there is no root”; choosing $(x+2)^2 = 7$ comes from thinking the plus sign inside blocks a solution, but it only shifts the centre to $-2$.)',
    },
    {
      q: 'The equation $(x+7)^2 = m$ has exactly one real solution. What is $m$?',
      choices: ['$-7$', '$7$', '$49$', '$0$'],
      answer: 3,
      solution:
        'Unsquaring gives $x + 7 = \\pm\\sqrt{m}$. When $m$ is positive the $\\pm$ produces two different answers, and when $m$ is negative there are none. Only $m = 0$ leaves exactly one, since $+\\sqrt{0}$ and $-\\sqrt{0}$ are the same number, giving the double root $x = -7$. Check a second, independent way with a live example: $m = 9$ gives $x + 7 = \\pm 3$, so $x = -4$ or $x = -10$ — two solutions, so a positive $m$ is definitely out ✓. (The choice $-7$ copies the shift inside the parentheses, but a negative right side gives NO solutions; the choice $7$ is positive, so it gives two, namely $x = -7 \\pm\\sqrt{7}$; the choice $49$ SQUARES THE SHIFT, and $x + 7 = \\pm 7$ gives the two solutions $x = 0$ and $x = -14$ ✗.)',
    },
  ],
  // p10 — two squares set equal: the x^2 terms cancel
  [
    {
      q: 'Solve $(x+5)^2 = (x-9)^2$.',
      choices: ['$x = 2$', '$x = -7$', 'There are no solutions', '$x = -2$'],
      answer: 0,
      solution:
        'Two numbers have equal squares exactly when they are equal or opposite. Equal is impossible here: $x + 5 = x - 9$ says $5 = -9$. So try opposite: $x + 5 = -(x-9) = -x + 9$. Then $2x = 4$ and $x = 2$. Check a second, independent way by expanding both sides instead: $x^2 + 10x + 25 = x^2 - 18x + 81$; the $x^2$ terms cancel, leaving $28x = 56$, so $x = 2$ ✓. And substituting: $(2+5)^2 = 49$ and $(2-9)^2 = (-7)^2 = 49$ ✓. (The choice $-7$ distributes the minus sign over only the first term, writing $x + 5 = -x - 9$; the choice “no solutions” stops after the equal case fails and never tries the opposite case; the choice $-2$ averages the CONSTANTS $5$ and $-9$ instead of the values $-5$ and $9$ that make the binomials vanish, and $(-2+5)^2 = 9$ while $(-2-9)^2 = 121$ ✗.)',
    },
    {
      q: 'Solve $(2x-1)^2 = (x+5)^2$.',
      choices: [
        '$x = 6$ only',
        '$x = 6$ or $x = -\\frac{4}{3}$',
        '$x = -6$ or $x = \\frac{4}{3}$',
        'There are no solutions',
      ],
      answer: 1,
      solution:
        'Equal squares mean the insides are equal or opposite, and this time BOTH cases pay off, because the two binomials have different $x$ coefficients. Equal: $2x - 1 = x + 5$ gives $x = 6$. Opposite: $2x - 1 = -(x+5) = -x - 5$ gives $3x = -4$, so $x = -\\frac{4}{3}$. Check a second, independent way by substituting into the original equation. At $x = 6$: $(12-1)^2 = 121$ and $(6+5)^2 = 121$ ✓. At $x = -\\frac{4}{3}$: $2x - 1 = -\\frac{8}{3} - \\frac{3}{3} = -\\frac{11}{3}$ and $x + 5 = -\\frac{4}{3} + \\frac{15}{3} = \\frac{11}{3}$; both square to $\\frac{121}{9}$ ✓. (The choice $x = 6$ only solves the equal case and forgets the opposite one; the choice $x = -6$ or $x = \\frac{4}{3}$ flips both signs at the end, and at $x = -6$ the two sides are $169$ and $1$ ✗; “no solutions” assumes two different-looking binomials can never have equal squares.)',
    },
    {
      q: 'Solve $(x-3)^2 - (x+7)^2 = 0$.',
      choices: ['$x = 3$ or $x = -7$', '$x = 5$', '$x = -2$', 'There are no solutions'],
      answer: 2,
      solution:
        'A difference of squares factors: $(x-3)^2 - (x+7)^2 = \\big[(x-3)-(x+7)\\big]\\big[(x-3)+(x+7)\\big] = (-10)(2x+4)$. Since $-10$ is never $0$, we need $2x + 4 = 0$, so $x = -2$. Check a second, independent way by evaluating each square separately at $x = -2$, where nothing has been cancelled: $(-2-3)^2 = (-5)^2 = 25$ and $(-2+7)^2 = 5^2 = 25$ ✓ — two equal, nonzero values, so their difference really is $0$. (The choice $x = 3$ or $x = -7$ sets each square to zero on its own, as if a DIFFERENCE being zero meant each piece is zero; at $x = 3$ the two squares are $0$ and $100$ ✗. The choice $x = 5$ comes from writing $x - 3 = -x + 7$, distributing the minus over only the first term; at $x = 5$ the squares are $4$ and $144$ ✗. “No solutions” comes from noting that $x - 3$ never equals $x + 7$ and forgetting that OPPOSITE insides also give equal squares.)',
    },
  ],
]

const s132 = [
  // p1 — what constant completes x^2 + bx?
  [
    {
      q: 'What must be added to $x^2 + 16x$ to make a perfect square?',
      choices: ['$64$', '$8$', '$16$', '$256$'],
      answer: 0,
      solution:
        'Take half the middle coefficient and square it. Half of $16$ is $8$, and $8^2 = 64$, so we add $64$. Check a second, independent way by expanding the square we claim to have built: $(x+8)^2 = x^2 + 8x + 8x + 64 = x^2 + 16x + 64$ ✓ — the middle term comes back as $16x$, exactly what we started with. (The choice $8$ REPORTS THE HALF without squaring it; the choice $16$ copies the middle coefficient, but $x^2 + 16x + 16$ needs a constant of $64$ to close up ✗; the choice $256$ SQUARES THE WHOLE COEFFICIENT instead of half of it, and $(x+16)^2$ has middle term $32x$ ✗.)',
    },
    {
      q: 'Ellie adds $49$ to $x^2 + bx$ and gets a perfect square. If $b$ is positive, what is $b$?',
      choices: ['$7$', '$14$', '$49$', '$98$'],
      answer: 1,
      solution:
        'Run the rule backwards. The constant of a perfect square is the square of half the middle coefficient, so $\\left(\\frac{b}{2}\\right)^2 = 49$. That gives $\\frac{b}{2} = 7$ (taking the positive option), so $b = 14$ — DOUBLE the number that gets squared. Check a second, independent way by expanding: $(x+7)^2 = x^2 + 14x + 49$ ✓. (The choice $7$ reports the number inside the parentheses instead of doubling it, and $x^2 + 7x + 49$ is not a square since half of $7$ squared is $12.25$ ✗; the choice $49$ copies the constant into the middle slot; the choice $98$ DOUBLES THE CONSTANT $49$ instead of doubling the $7$.)',
    },
    {
      q: 'What must be added to $x^2 - 9x$ to make a perfect square?',
      choices: ['$\\frac{9}{2}$', '$81$', '$-\\frac{81}{4}$', '$\\frac{81}{4}$'],
      answer: 3,
      solution:
        'An odd middle coefficient is no problem — the half is just a fraction. Half of $-9$ is $-\\frac{9}{2}$, and $\\left(-\\frac{9}{2}\\right)^2 = \\frac{81}{4}$. Check a second, independent way by expanding: $\\left(x - \\frac{9}{2}\\right)^2 = x^2 - \\frac{9}{2}x - \\frac{9}{2}x + \\frac{81}{4} = x^2 - 9x + \\frac{81}{4}$ ✓. (The choice $\\frac{9}{2}$ REPORTS THE HALF without squaring it; the choice $81$ SQUARES THE WHOLE COEFFICIENT, and $(x-9)^2$ has middle term $-18x$ ✗; the choice $-\\frac{81}{4}$ drags the minus sign through the squaring, but $\\left(-\\frac{9}{2}\\right)\\left(-\\frac{9}{2}\\right)$ is positive.)',
    },
  ],
  // p2 — fill the blank in a completed square
  [
    {
      q: 'Fill in the blank: $x^2 + 26x + \\square = (x+13)^2$',
      choices: ['$13$', '$169$', '$26$', '$338$'],
      answer: 1,
      solution:
        'Expand the right side: $(x+13)^2 = x^2 + 13x + 13x + 169 = x^2 + 26x + 169$, so the blank is $169$. Check a second, independent way with the half-and-square test: half of $26$ is $13$, and $13^2 = 169$ ✓. (The choice $13$ REPORTS THE HALF without squaring it; the choice $26$ copies the middle coefficient, but half of $26$ squared is $169$, not $26$ ✗; the choice $338$ DOUBLES the correct constant instead of leaving it alone — doubling belongs to the middle term, squaring to the constant.)',
    },
    {
      q: 'Fill in the blank: $x^2 - \\square x + 64 = (x-8)^2$',
      choices: ['$8$', '$64$', '$16$', '$32$'],
      answer: 2,
      solution:
        'Expand the right side: $(x-8)^2 = x^2 - 8x - 8x + 64 = x^2 - 16x + 64$. The minus sign is already printed in front of the blank, so the blank itself is $16$. Check a second, independent way with the half-and-square test: half of $-16$ is $-8$, and $(-8)^2 = 64$, the constant we were handed ✓. (The choice $8$ writes the number inside the parentheses without DOUBLING it; the choice $64$ copies the constant into the middle slot; the choice $32$ HALVES THE CONSTANT $64$ instead of doubling the $8$.)',
    },
    {
      q: 'Fill in the blank: $x^2 + 5x + \\square = \\left(x + \\frac{5}{2}\\right)^2$',
      choices: ['$\\frac{5}{2}$', '$25$', '$10$', '$\\frac{25}{4}$'],
      answer: 3,
      solution:
        'Expand the right side: $\\left(x + \\frac{5}{2}\\right)^2 = x^2 + \\frac{5}{2}x + \\frac{5}{2}x + \\frac{25}{4} = x^2 + 5x + \\frac{25}{4}$, so the blank is $\\frac{25}{4}$. Check a second, independent way with the half-and-square test: half of $5$ is $\\frac{5}{2}$, and $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$ ✓. (The choice $\\frac{5}{2}$ REPORTS THE HALF without squaring it; the choice $25$ SQUARES THE WHOLE COEFFICIENT $5$ instead of half of it; the choice $10$ doubles the $5$, which is the move that builds a MIDDLE term, not a constant.)',
    },
  ],
  // p3 — match a trinomial to its squared binomial
  [
    {
      q: 'Which of these equals $x^2 - 30x + 225$?',
      choices: ['$(x-15)^2$', '$(x+15)^2$', '$(x-30)^2$', '$(x-225)^2$'],
      answer: 0,
      solution:
        'Half of $-30$ is $-15$, and $(-15)^2 = 225$ matches the constant, so the trinomial is $(x-15)^2$. Check a second, independent way by expanding: $(x-15)^2 = x^2 - 15x - 15x + 225 = x^2 - 30x + 225$ ✓. (The choice $(x+15)^2$ ignores the MINUS in the middle term and expands to $x^2 + 30x + 225$ ✗; the choice $(x-30)^2$ copies the middle coefficient instead of halving it and expands to $x^2 - 60x + 900$ ✗; the choice $(x-225)^2$ copies the constant and expands to $x^2 - 450x + 50625$ ✗.)',
    },
    {
      q: 'The expression $x^2 + bx + \\frac{9}{4}$ is a perfect square trinomial, and $b$ is negative. What is $b$?',
      choices: ['$-\\frac{9}{4}$', '$-\\frac{9}{2}$', '$-3$', '$-\\frac{3}{2}$'],
      answer: 2,
      solution:
        'The constant is the square of half the middle coefficient, so $\\left(\\frac{b}{2}\\right)^2 = \\frac{9}{4}$. Unsquaring gives $\\frac{b}{2} = \\pm\\frac{3}{2}$, so $b = 3$ or $b = -3$; the problem asks for the negative one, $b = -3$. Check a second, independent way by expanding: $\\left(x - \\frac{3}{2}\\right)^2 = x^2 - \\frac{3}{2}x - \\frac{3}{2}x + \\frac{9}{4} = x^2 - 3x + \\frac{9}{4}$ ✓. (The choice $-\\frac{9}{4}$ copies the constant into the middle slot; the choice $-\\frac{9}{2}$ DOUBLES THE CONSTANT instead of doubling the $\\frac{3}{2}$; the choice $-\\frac{3}{2}$ REPORTS THE HALF without doubling it back into a middle coefficient.)',
    },
    {
      q: 'Which of these is equal to $(x-7)^2$?',
      choices: ['$x^2 - 49$', '$x^2 + 49$', '$x^2 - 7x + 49$', '$x^2 - 14x + 49$'],
      answer: 3,
      solution:
        'Multiply it out in full: $(x-7)(x-7) = x^2 - 7x - 7x + 49 = x^2 - 14x + 49$. There are TWO cross terms, so the middle coefficient is $-14$, not $-7$. Check a second, independent way by testing a number — take $x = 3$, where nothing collapses: $(3-7)^2 = (-4)^2 = 16$, and $9 - 42 + 49 = 16$ ✓. (The choice $x^2 - 49$ is the difference-of-squares pattern from $(x-7)(x+7)$, and at $x = 3$ it gives $-40$ ✗; the choice $x^2 + 49$ squares each term separately, giving $58$ at $x = 3$ ✗; the choice $x^2 - 7x + 49$ keeps only ONE of the two cross terms, giving $9 - 21 + 49 = 37$ at $x = 3$ ✗.)',
    },
  ],
  // p4 — complete the square on a friendly quadratic
  [
    {
      q: 'Solve $x^2 + 6x - 16 = 0$ by completing the square.',
      choices: ['$x = -2$ or $x = 8$', '$x = 2$ or $x = -8$', '$x = 1$ or $x = -7$', 'There are no real solutions'],
      answer: 1,
      solution:
        'Move the constant across, changing its sign: $x^2 + 6x = 16$. Half of $6$ is $3$ and $3^2 = 9$, so add $9$ to BOTH sides: $x^2 + 6x + 9 = 25$, that is $(x+3)^2 = 25$. Unsquare: $x + 3 = \\pm 5$, giving $x = 2$ or $x = -8$. Check a second, independent way with the sum-and-product test, which never repeats the algebra: the roots of $x^2 + 6x - 16$ must add to $-6$ and multiply to $-16$, and indeed $2 + (-8) = -6$ ✓ and $2 \\times (-8) = -16$ ✓. (The choice $-2$ or $8$ builds $(x-3)^2$ instead of $(x+3)^2$, attaching the wrong sign to the half — those roots add to $+6$ ✗; the choice $1$ or $-7$ adds the $9$ to the LEFT SIDE ONLY, landing on $(x+3)^2 = 16$; “no real solutions” moves the $-16$ across WITHOUT CHANGING ITS SIGN, reaching the impossible $(x+3)^2 = -7$.)',
    },
    {
      q: 'Solve $x^2 - 10x + 21 = 0$ by completing the square.',
      choices: ['$x = -3$ or $x = -7$', '$x = 5 \\pm \\sqrt{46}$', '$x = 3$ or $x = 7$', '$x = 7$ only'],
      answer: 2,
      solution:
        'Move the constant: $x^2 - 10x = -21$. Half of $-10$ is $-5$ and $(-5)^2 = 25$, so add $25$ to both sides: $(x-5)^2 = -21 + 25 = 4$. Unsquare: $x - 5 = \\pm 2$, giving $x = 7$ or $x = 3$. Check a second, independent way with sum and product: the roots must add to $10$ and multiply to $21$, and $3 + 7 = 10$ ✓ with $3 \\times 7 = 21$ ✓. (The choice $-3$ or $-7$ flips both signs, building $(x+5)^2$ from a middle term of $-10x$; those roots multiply to $21$ but add to $-10$ ✗; the choice $5 \\pm \\sqrt{46}$ MOVES THE $21$ ACROSS WITHOUT CHANGING ITS SIGN, reaching $(x-5)^2 = 21 + 25 = 46$; the choice $x = 7$ only drops the negative branch of the $\\pm$.)',
    },
    {
      q: 'Completing the square turns $x^2 - 2x - 24 = 0$ into $(x-1)^2 = k$. What is $k$?',
      choices: ['$24$', '$-24$', '$1$', '$25$'],
      answer: 3,
      solution:
        'First move the constant across, changing its sign: $x^2 - 2x = 24$. Half of $-2$ is $-1$ and $(-1)^2 = 1$, so add $1$ to BOTH sides. The left becomes $(x-1)^2$ and the right becomes $24 + 1 = 25$, so $k = 25$. Check a second, independent way by finishing the solve and testing the roots against sum and product: $x - 1 = \\pm 5$ gives $x = 6$ or $x = -4$, and those add to $2$ ✓ (matching $-b$) and multiply to $-24$ ✓ (matching $c$). (The choice $24$ adds the $1$ to the LEFT SIDE ONLY, forgetting to balance; the choice $-24$ never moves the constant across at all, keeping its original sign; the choice $1$ reports the AMOUNT ADDED rather than the new right-hand side.)',
    },
  ],
  // p5 — complete the square when the root stays irrational
  [
    {
      q: 'Solve $x^2 - 6x + 2 = 0$ by completing the square.',
      choices: ['$x = -3 \\pm \\sqrt{7}$', '$x = 3 \\pm \\sqrt{7}$', '$x = 3 \\pm \\sqrt{11}$', '$x = 6 \\pm \\sqrt{7}$'],
      answer: 1,
      solution:
        'Move the constant: $x^2 - 6x = -2$. Half of $-6$ is $-3$ and $(-3)^2 = 9$, so add $9$ to both sides: $(x-3)^2 = -2 + 9 = 7$. Unsquare: $x - 3 = \\pm\\sqrt{7}$, so $x = 3 \\pm\\sqrt{7}$. Check a second, independent way with sum and product: the two roots add to $(3+\\sqrt{7}) + (3-\\sqrt{7}) = 6$ ✓, matching $-b$, and multiply to $(3+\\sqrt{7})(3-\\sqrt{7}) = 9 - 7 = 2$ ✓, matching $c$. (The choice $-3 \\pm \\sqrt{7}$ centres on the half $-3$ without flipping its sign, and those roots add to $-6$ ✗; the choice $3 \\pm \\sqrt{11}$ MOVES THE $2$ ACROSS WITHOUT CHANGING ITS SIGN, reaching $2 + 9 = 11$; the choice $6 \\pm \\sqrt{7}$ forgets to HALVE the $6$ before building the square.)',
    },
    {
      q: 'Solve $x^2 + 10x + 4 = 0$ by completing the square.',
      choices: ['$x = 5 \\pm \\sqrt{21}$', '$x = -5 \\pm \\sqrt{29}$', '$x = -5 \\pm \\sqrt{21}$', '$x = -10 \\pm \\sqrt{21}$'],
      answer: 2,
      solution:
        'Move the constant: $x^2 + 10x = -4$. Half of $10$ is $5$ and $5^2 = 25$, so add $25$ to both sides: $(x+5)^2 = -4 + 25 = 21$. Unsquare: $x + 5 = \\pm\\sqrt{21}$, so $x = -5 \\pm\\sqrt{21}$. Check a second, independent way with sum and product: the roots add to $-10$ ✓, matching $-b$, and multiply to $(-5)^2 - (\\sqrt{21})^2 = 25 - 21 = 4$ ✓, matching $c$. (The choice $5 \\pm \\sqrt{21}$ KEEPS THE SIGN of the $5$ instead of moving it across, and those roots add to $10$ ✗; the choice $-5 \\pm \\sqrt{29}$ moves the $4$ across without changing its sign, reaching $4 + 25 = 29$; the choice $-10 \\pm \\sqrt{21}$ forgets to HALVE the $10$.)',
    },
    {
      q: 'Completing the square rewrites $x^2 + 12x - 4 = 0$ as $(x+6)^2 = k$. What is $k$?',
      choices: ['$4$', '$36$', '$32$', '$40$'],
      answer: 3,
      solution:
        'Move the constant across, changing its sign: $x^2 + 12x = 4$. Half of $12$ is $6$ and $6^2 = 36$, so add $36$ to BOTH sides: the left becomes $(x+6)^2$ and the right becomes $4 + 36 = 40$. So $k = 40$. Check a second, independent way by finishing the solve and testing the roots: $x = -6 \\pm\\sqrt{40}$, and those two add to $-12$ ✓ (matching $-b$) and multiply to $36 - 40 = -4$ ✓ (matching $c$). (The choice $4$ adds the $36$ to the LEFT SIDE ONLY and leaves the right at $4$; the choice $36$ reports the AMOUNT ADDED instead of the new right-hand side; the choice $32$ MOVES THE $-4$ ACROSS WITHOUT CHANGING ITS SIGN, computing $-4 + 36$.)',
    },
  ],
  // p6 — odd middle coefficient, so the half is a fraction
  [
    {
      q: 'Solve $x^2 + 3x - 5 = 0$ by completing the square.',
      choices: [
        '$x = \\frac{-3 \\pm \\sqrt{29}}{2}$',
        '$x = \\frac{3 \\pm \\sqrt{29}}{2}$',
        '$x = -3 \\pm \\sqrt{14}$',
        '$x = -3 \\pm \\sqrt{29}$',
      ],
      answer: 0,
      solution:
        'Move the constant: $x^2 + 3x = 5$. Half of $3$ is $\\frac{3}{2}$, whose square is $\\frac{9}{4}$, so add $\\frac{9}{4}$ to both sides: $\\left(x + \\frac{3}{2}\\right)^2 = 5 + \\frac{9}{4} = \\frac{20}{4} + \\frac{9}{4} = \\frac{29}{4}$. Unsquare: $x + \\frac{3}{2} = \\pm\\frac{\\sqrt{29}}{2}$, so $x = \\frac{-3 \\pm \\sqrt{29}}{2}$. Check a second, independent way with sum and product: the two roots add to $\\frac{-3+\\sqrt{29}}{2} + \\frac{-3-\\sqrt{29}}{2} = -3$ ✓, matching $-b$, and multiply to $\\frac{9 - 29}{4} = \\frac{-20}{4} = -5$ ✓, matching $c$. (The choice $\\frac{3 \\pm \\sqrt{29}}{2}$ KEEPS THE SIGN of the $3$, and its roots add to $+3$ ✗; the choice $-3 \\pm \\sqrt{14}$ SQUARES THE WHOLE COEFFICIENT, adding $9$ rather than $\\frac{9}{4}$ and landing on $(x+3)^2 = 14$; the choice $-3 \\pm \\sqrt{29}$ gets $\\frac{29}{4}$ right but FORGETS TO DIVIDE the whole answer by $2$, and its roots add to $-6$ ✗.)',
    },
    {
      q: 'Solve $x^2 - 7x + 3 = 0$ by completing the square.',
      choices: [
        '$x = \\frac{7 \\pm \\sqrt{61}}{2}$',
        '$x = \\frac{-7 \\pm \\sqrt{37}}{2}$',
        '$x = \\frac{7 \\pm \\sqrt{37}}{2}$',
        '$x = \\frac{7 \\pm \\sqrt{37}}{4}$',
      ],
      answer: 2,
      solution:
        'Move the constant: $x^2 - 7x = -3$. Half of $-7$ is $-\\frac{7}{2}$, whose square is $\\frac{49}{4}$, so add $\\frac{49}{4}$ to both sides: $\\left(x - \\frac{7}{2}\\right)^2 = -3 + \\frac{49}{4} = \\frac{-12 + 49}{4} = \\frac{37}{4}$. Unsquare: $x - \\frac{7}{2} = \\pm\\frac{\\sqrt{37}}{2}$, so $x = \\frac{7 \\pm \\sqrt{37}}{2}$. Check a second, independent way with sum and product: the roots add to $\\frac{7+\\sqrt{37}}{2} + \\frac{7-\\sqrt{37}}{2} = 7$ ✓, matching $-b$, and multiply to $\\frac{49 - 37}{4} = \\frac{12}{4} = 3$ ✓, matching $c$. (The choice $\\frac{7 \\pm \\sqrt{61}}{2}$ MOVES THE $3$ ACROSS WITHOUT CHANGING ITS SIGN, computing $3 + \\frac{49}{4} = \\frac{61}{4}$; the choice $\\frac{-7 \\pm \\sqrt{37}}{2}$ centres on the half $-\\frac{7}{2}$ without flipping its sign, and its roots add to $-7$ ✗; the choice $\\frac{7 \\pm \\sqrt{37}}{4}$ HALVES A SECOND TIME, dividing by $4$ where the unsquared denominator is only $2$.)',
    },
    {
      q: 'Completing the square turns $x^2 + 9x + 1 = 0$ into $\\left(x + \\frac{9}{2}\\right)^2 = k$. What is $k$?',
      choices: ['$\\frac{81}{4}$', '$\\frac{85}{4}$', '$\\frac{7}{2}$', '$\\frac{77}{4}$'],
      answer: 3,
      solution:
        'Move the constant across, changing its sign: $x^2 + 9x = -1$. Half of $9$ is $\\frac{9}{2}$, whose square is $\\frac{81}{4}$, so add $\\frac{81}{4}$ to BOTH sides. The right side becomes $-1 + \\frac{81}{4}$, and writing $1$ as $\\frac{4}{4}$ gives $\\frac{-4 + 81}{4} = \\frac{77}{4}$. Check a second, independent way by finishing the solve and testing the roots: $x = \\frac{-9 \\pm \\sqrt{77}}{2}$, and those multiply to $\\frac{81 - 77}{4} = \\frac{4}{4} = 1$ ✓, matching $c$, while adding to $-9$ ✓, matching $-b$. (The choice $\\frac{81}{4}$ reports the AMOUNT ADDED instead of the new right-hand side; the choice $\\frac{85}{4}$ moves the $1$ across without changing its sign, computing $1 + \\frac{81}{4}$; the choice $\\frac{7}{2}$ REPORTS THE HALF without squaring it, adding $\\frac{9}{2}$ to both sides instead of $\\frac{81}{4}$ and reaching $-1 + \\frac{9}{2} = \\frac{7}{2}$ — but $\\frac{9}{2}$ is not enough to close up the square.)',
    },
  ],
  // p7 — vertex form when the leading coefficient is 1
  [
    {
      q: 'Rewrite $x^2 + 8x + 19$ in the form $(x+h)^2 + k$.',
      choices: ['$(x+4)^2 + 3$', '$(x+4)^2 + 19$', '$(x+4)^2 - 3$', '$(x+8)^2 + 19$'],
      answer: 0,
      solution:
        'Half of $8$ is $4$, so build $(x+4)^2 = x^2 + 8x + 16$. That uses up $16$ of the $19$, leaving $19 - 16 = 3$ behind: $x^2 + 8x + 19 = (x+4)^2 + 3$. Check a second, independent way by testing a number rather than re-expanding — take $x = 2$: the original gives $4 + 16 + 19 = 39$, and $(2+4)^2 + 3 = 36 + 3 = 39$ ✓. (The choice $(x+4)^2 + 19$ keeps the original constant and never REMOVES THE $16$ the square brought with it, giving $55$ at $x = 2$ ✗; the choice $(x+4)^2 - 3$ subtracts in the WRONG ORDER, computing $16 - 19$, and gives $33$ at $x = 2$ ✗; the choice $(x+8)^2 + 19$ copies the middle coefficient into the parentheses without halving, giving $119$ at $x = 2$ ✗.)',
    },
    {
      q: 'Rewrite $x^2 - 10x + 7$ in the form $(x-h)^2 + k$.',
      choices: ['$(x-5)^2 + 7$', '$(x-5)^2 - 18$', '$(x-5)^2 + 18$', '$(x-10)^2 - 18$'],
      answer: 1,
      solution:
        'Half of $-10$ is $-5$, so build $(x-5)^2 = x^2 - 10x + 25$. The square introduced $25$ but we only have $7$, so we must subtract the difference: $7 - 25 = -18$, giving $(x-5)^2 - 18$. Check a second, independent way by testing a number — take $x = 2$: the original gives $4 - 20 + 7 = -9$, and $(2-5)^2 - 18 = 9 - 18 = -9$ ✓. (The choice $(x-5)^2 + 7$ keeps the original constant and never removes the $25$, giving $16$ at $x = 2$ ✗; the choice $(x-5)^2 + 18$ subtracts in the WRONG ORDER, computing $25 - 7$, and gives $27$ at $x = 2$ ✗; the choice $(x-10)^2 - 18$ forgets to HALVE the $10$, giving $46$ at $x = 2$ ✗.)',
    },
    {
      q: 'When $x^2 - 4x + 13$ is written as $(x-2)^2 + k$, what is $k$?',
      choices: ['$13$', '$-9$', '$4$', '$9$'],
      answer: 3,
      solution:
        'Half of $-4$ is $-2$, and $(x-2)^2 = x^2 - 4x + 4$. The square already supplies $4$ of the $13$, so what is left over is $13 - 4 = 9$, giving $k = 9$. Check a second, independent way by testing a number — take $x = 5$: the original gives $25 - 20 + 13 = 18$, and $(5-2)^2 + 9 = 9 + 9 = 18$ ✓. (The choice $13$ copies the constant and forgets that the square already brought $4$ with it, giving $22$ at $x = 5$ ✗; the choice $-9$ subtracts in the WRONG ORDER, computing $4 - 13$, and gives $0$ at $x = 5$ ✗; the choice $4$ reports the amount the square USED UP rather than what remains, giving $13$ at $x = 5$ ✗.)',
    },
  ],
  // p8 — vertex form when a factor must come out first
  [
    {
      q: 'Rewrite $2x^2 - 12x + 5$ in the form $a(x-h)^2 + k$.',
      choices: ['$2(x-3)^2 - 13$', '$2(x-3)^2 - 4$', '$2(x-3)^2 + 5$', '$2(x-6)^2 - 13$'],
      answer: 0,
      solution:
        'Pull the $2$ out of the $x$ terms first: $2(x^2 - 6x) + 5$. Inside the parentheses we need $\\left(\\frac{-6}{2}\\right)^2 = 9$ — but adding $9$ INSIDE really adds $2 \\times 9 = 18$ to the whole expression, so subtract $18$ outside: $2(x^2 - 6x + 9) + 5 - 18 = 2(x-3)^2 - 13$. Check a second, independent way by testing a number — take $x = 4$: the original gives $32 - 48 + 5 = -11$, and $2(4-3)^2 - 13 = 2 - 13 = -11$ ✓. (The choice $2(x-3)^2 - 4$ subtracts only the $9$, FORGETTING THAT THE OUTSIDE $2$ MULTIPLIES it, and gives $-2$ at $x = 4$ ✗; the choice $2(x-3)^2 + 5$ never compensates at all, giving $7$ at $x = 4$ ✗; the choice $2(x-6)^2 - 13$ forgets to HALVE the $6$ inside, giving $-5$ at $x = 4$ ✗.)',
    },
    {
      q: 'Rewrite $5x^2 + 20x + 3$ in the form $a(x-h)^2 + k$.',
      choices: ['$5(x+2)^2 - 1$', '$5(x+2)^2 - 17$', '$5(x+2)^2 + 3$', '$5(x+4)^2 - 17$'],
      answer: 1,
      solution:
        'Factor the $5$ out of the $x$ terms: $5(x^2 + 4x) + 3$. Inside we need $\\left(\\frac{4}{2}\\right)^2 = 4$, and adding $4$ inside really adds $5 \\times 4 = 20$, so subtract $20$ outside: $5(x^2 + 4x + 4) + 3 - 20 = 5(x+2)^2 - 17$. Check a second, independent way by testing a number — take $x = 3$: the original gives $45 + 60 + 3 = 108$, and $5(3+2)^2 - 17 = 125 - 17 = 108$ ✓. (The choice $5(x+2)^2 - 1$ subtracts only the $4$, FORGETTING THAT THE OUTSIDE $5$ MULTIPLIES it, and gives $124$ at $x = 3$ ✗; the choice $5(x+2)^2 + 3$ never compensates, giving $128$ at $x = 3$ ✗; the choice $5(x+4)^2 - 17$ forgets to halve the $4$ inside, giving $228$ at $x = 3$ ✗.)',
    },
    {
      q: 'Writing $4x^2 - 24x + 11$ as $4(x-3)^2 + k$, what is $k$?',
      choices: ['$11$', '$2$', '$-25$', '$47$'],
      answer: 2,
      solution:
        'Factor the $4$ out of the $x$ terms: $4(x^2 - 6x) + 11$. Inside we need $\\left(\\frac{-6}{2}\\right)^2 = 9$, and adding $9$ inside really adds $4 \\times 9 = 36$, so subtract $36$ outside: $k = 11 - 36 = -25$. Check a second, independent way by testing a number — take $x = 5$: the original gives $100 - 120 + 11 = -9$, and $4(5-3)^2 - 25 = 16 - 25 = -9$ ✓. (The choice $11$ never compensates for the $36$ the square brought in, giving $27$ at $x = 5$ ✗; the choice $2$ subtracts only the $9$, forgetting the outside factor, and gives $18$ at $x = 5$ ✗; the choice $47$ ADDS the $36$ instead of subtracting it, giving $63$ at $x = 5$ ✗.)',
    },
  ],
  // p9 — divide by the leading coefficient, then rationalise
  [
    {
      q: 'Solve $2x^2 - 8x + 1 = 0$ by completing the square.',
      choices: [
        '$x = \\frac{-4 \\pm \\sqrt{14}}{2}$',
        '$x = \\frac{4 \\pm \\sqrt{14}}{2}$',
        '$x = 2 \\pm \\sqrt{14}$',
        '$x = \\frac{4 \\pm \\sqrt{7}}{2}$',
      ],
      answer: 1,
      solution:
        'Divide everything by $2$ so the square term stands alone: $x^2 - 4x + \\frac{1}{2} = 0$, so $x^2 - 4x = -\\frac{1}{2}$. Half of $-4$ is $-2$ and $(-2)^2 = 4$, so add $4$ to both sides: $(x-2)^2 = 4 - \\frac{1}{2} = \\frac{7}{2}$. Unsquare and rationalise: $x - 2 = \\pm\\sqrt{\\frac{7}{2}} = \\pm\\frac{\\sqrt{7}}{\\sqrt{2}} = \\pm\\frac{\\sqrt{14}}{2}$, so $x = 2 \\pm \\frac{\\sqrt{14}}{2} = \\frac{4 \\pm \\sqrt{14}}{2}$. Check a second, independent way with sum and product: the roots add to $4$ ✓, matching $-\\frac{b}{a} = \\frac{8}{2}$, and multiply to $\\frac{16 - 14}{4} = \\frac{1}{2}$ ✓, matching $\\frac{c}{a}$. (The choice $\\frac{-4 \\pm \\sqrt{14}}{2}$ centres on $-2$ instead of $2$, and its roots add to $-4$ ✗; the choice $2 \\pm \\sqrt{14}$ turns $\\sqrt{\\frac{7}{2}} \\approx 1.87$ into $\\sqrt{14} \\approx 3.74$, MULTIPLYING INSIDE THE ROOT without halving outside; the choice $\\frac{4 \\pm \\sqrt{7}}{2}$ reads $\\sqrt{\\frac{7}{2}}$ as $\\frac{\\sqrt{7}}{2}$, dividing by $2$ where the rationalised form divides by $\\sqrt{2}$.)',
    },
    {
      q: 'Solve $3x^2 + 6x - 2 = 0$ by completing the square.',
      choices: [
        '$x = \\frac{3 \\pm \\sqrt{15}}{3}$',
        '$x = -1 \\pm \\sqrt{15}$',
        '$x = \\frac{-3 \\pm \\sqrt{15}}{3}$',
        '$x = \\frac{-3 \\pm \\sqrt{5}}{3}$',
      ],
      answer: 2,
      solution:
        'Divide everything by $3$: $x^2 + 2x - \\frac{2}{3} = 0$, so $x^2 + 2x = \\frac{2}{3}$. Half of $2$ is $1$ and $1^2 = 1$, so add $1$ to both sides: $(x+1)^2 = \\frac{2}{3} + 1 = \\frac{5}{3}$. Unsquare and rationalise: $x + 1 = \\pm\\sqrt{\\frac{5}{3}} = \\pm\\frac{\\sqrt{5}}{\\sqrt{3}} = \\pm\\frac{\\sqrt{15}}{3}$, so $x = -1 \\pm \\frac{\\sqrt{15}}{3} = \\frac{-3 \\pm \\sqrt{15}}{3}$. Check a second, independent way with sum and product: the roots add to $-2$ ✓, matching $-\\frac{b}{a} = -\\frac{6}{3}$, and multiply to $\\frac{9 - 15}{9} = -\\frac{6}{9} = -\\frac{2}{3}$ ✓, matching $\\frac{c}{a}$. (The choice $\\frac{3 \\pm \\sqrt{15}}{3}$ centres on $+1$ instead of $-1$, and its roots add to $+2$ ✗; the choice $-1 \\pm \\sqrt{15}$ turns $\\sqrt{\\frac{5}{3}} \\approx 1.29$ into $\\sqrt{15} \\approx 3.87$, MULTIPLYING INSIDE THE ROOT without dividing by $3$ outside; the choice $\\frac{-3 \\pm \\sqrt{5}}{3}$ reads $\\sqrt{\\frac{5}{3}}$ as $\\frac{\\sqrt{5}}{3}$, dividing by $3$ where the rationalised form divides by $\\sqrt{3}$.)',
    },
    {
      q: 'Dividing $4x^2 - 20x + 9 = 0$ by $4$ and completing the square gives $\\left(x - \\frac{5}{2}\\right)^2 = k$. What is $k$?',
      choices: ['$\\frac{25}{4}$', '$\\frac{17}{2}$', '$-\\frac{9}{4}$', '$4$'],
      answer: 3,
      solution:
        'Divide by $4$: $x^2 - 5x + \\frac{9}{4} = 0$, so $x^2 - 5x = -\\frac{9}{4}$. Half of $-5$ is $-\\frac{5}{2}$, whose square is $\\frac{25}{4}$, so add $\\frac{25}{4}$ to both sides: the right becomes $-\\frac{9}{4} + \\frac{25}{4} = \\frac{16}{4} = 4$. So $k = 4$. Check a second, independent way by finishing the solve and testing the roots: $x - \\frac{5}{2} = \\pm 2$ gives $x = \\frac{9}{2}$ or $x = \\frac{1}{2}$, and those add to $5$ ✓ (matching $-\\frac{b}{a} = \\frac{20}{4}$) and multiply to $\\frac{9}{4}$ ✓ (matching $\\frac{c}{a}$). (The choice $\\frac{25}{4}$ reports the AMOUNT ADDED instead of the new right-hand side; the choice $\\frac{17}{2}$ moves the $\\frac{9}{4}$ across WITHOUT CHANGING ITS SIGN, computing $\\frac{9}{4} + \\frac{25}{4} = \\frac{34}{4}$; the choice $-\\frac{9}{4}$ never adds anything to the right side at all.)',
    },
  ],
  // p10 — the smallest (or largest) value a quadratic can reach
  [
    {
      q: 'What is the smallest value $x^2 + 10x + 32$ can take?',
      choices: ['$7$', '$32$', '$-5$', '$-7$'],
      answer: 0,
      solution:
        'Complete the square: half of $10$ is $5$, so $x^2 + 10x + 32 = (x+5)^2 + 32 - 25 = (x+5)^2 + 7$. A square is never negative and hits $0$ exactly at $x = -5$, so the smallest the whole expression can be is $0 + 7 = 7$. Check a second, independent way by walking to the neighbours: at $x = -5$ the expression is $25 - 50 + 32 = 7$, at $x = -4$ it is $16 - 40 + 32 = 8$, and at $x = -6$ it is $36 - 60 + 32 = 8$ ✓ — the value climbs on both sides, so $7$ really is the floor. (The choice $32$ mistakes the CONSTANT for the minimum, but $32$ is just the value at $x = 0$; the choice $-5$ gives WHERE the minimum happens instead of WHAT it is; the choice $-7$ computes $25 - 32$, subtracting in the wrong order.)',
    },
    {
      q: 'What is the largest value $-x^2 + 8x - 3$ can take?',
      choices: ['$4$', '$13$', '$-3$', '$19$'],
      answer: 1,
      solution:
        'Factor $-1$ out of the $x$ terms: $-(x^2 - 8x) - 3$. Inside we need $\\left(\\frac{-8}{2}\\right)^2 = 16$, and adding $16$ inside really adds $-16$ overall, so add $16$ back outside: $-(x-4)^2 + 16 - 3 = -(x-4)^2 + 13$. Since $-(x-4)^2$ is never positive and equals $0$ at $x = 4$, the biggest the expression gets is $13$. Check a second, independent way by walking to the neighbours: at $x = 4$ it is $-16 + 32 - 3 = 13$, at $x = 3$ it is $-9 + 24 - 3 = 12$, and at $x = 5$ it is $-25 + 40 - 3 = 12$ ✓ — the value falls on both sides. (The choice $4$ gives WHERE the maximum happens instead of WHAT it is; the choice $-3$ mistakes the constant for the answer, but that is just the value at $x = 0$; the choice $19$ computes $16 + 3$, flipping the sign of the $-3$ when combining.)',
    },
    {
      q: 'The expression $3x^2 + 12x + 17$ has a smallest value. What is it?',
      choices: ['$17$', '$-2$', '$5$', '$13$'],
      answer: 2,
      solution:
        'Factor the $3$ out of the $x$ terms: $3(x^2 + 4x) + 17$. Inside we need $\\left(\\frac{4}{2}\\right)^2 = 4$, and adding $4$ inside really adds $3 \\times 4 = 12$, so subtract $12$ outside: $3(x+2)^2 + 17 - 12 = 3(x+2)^2 + 5$. Since $3(x+2)^2 \\ge 0$ with equality at $x = -2$, the smallest value is $5$. Check a second, independent way by walking to the neighbours: at $x = -2$ the expression is $12 - 24 + 17 = 5$, at $x = -1$ it is $3 - 12 + 17 = 8$, and at $x = -3$ it is $27 - 36 + 17 = 8$ ✓ — it rises on both sides of $-2$. (The choice $17$ mistakes the CONSTANT for the minimum, but that is only the value at $x = 0$; the choice $-2$ gives WHERE the minimum happens rather than the value there; the choice $13$ subtracts only the $4$, FORGETTING THAT THE OUTSIDE $3$ MULTIPLIES whatever you add inside.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 13,
  sections: {
    '13.1': s131,
    '13.2': s132,
  },
}
