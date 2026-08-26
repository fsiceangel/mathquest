// Introduction to Algebra chapter 15 — variations for sections 15.1 (Quadratic
// Inequalities) and 15.2 (Beyond Quadratics).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text alone and then confirmed a
//    SECOND, INDEPENDENT way. For a solved inequality the second check is a
//    numerical test point taken from a piece the answer REJECTS, so the check
//    can fail; for a counting question it is the explicit list of integers.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that answer. The traps running
//    through these two sections are: SWAPPING BETWEEN AND OUTSIDE (reading a
//    negative product as the outside pair, or a positive one as the middle),
//    FLIPPING A ROOT'S SIGN (reading $x + 6$ as having root $6$), LOSING A
//    BRANCH (keeping only the right-hand piece of a two-piece answer),
//    MISHANDLING THE BOUNDARY (including roots under a strict sign, or
//    dropping them under $\le$), DIVIDING BY $x$ (which silently deletes the
//    whole negative branch), FORGETTING TO COUNT ZERO, SUBTRACTING THE
//    ENDPOINTS WITHOUT ADDING ONE, INCLUDING A FORBIDDEN DENOMINATOR ZERO, and
//    MULTIPLYING BY A FACTOR OF UNKNOWN SIGN.
//  - No two choices inside an item name the same set or the same number, even
//    when written two different ways.

const s151 = [
  // p1 — a factored quadratic below zero: the answer is the middle piece.
  [
    {
      q: 'For which values of $x$ is the product $(x-3)(x-8)$ negative?',
      choices: ['$3 < x < 8$', '$x < 3$ or $x > 8$', '$3 \\le x \\le 8$', '$x > 8$'],
      answer: 0,
      solution:
        'The factors are zero at $3$ and $8$, and those two roots are the only places the product can change sign. Between them the first factor is positive and the second is negative, so the product is negative: at $x = 5$ we get $(2)(-3) = -6 < 0$ ✓. Check a second, independent way by testing a point from each piece the answer throws away: $x = 0$ gives $(-3)(-8) = 24$ and $x = 10$ gives $(7)(2) = 14$, both positive ✗ — so neither outside piece belongs. (The choice $x < 3$ or $x > 8$ SWAPS BETWEEN AND OUTSIDE, naming exactly where the product is positive; the choice $3 \\le x \\le 8$ sweeps in the roots, where the product is exactly $0$ and $0$ is not negative; the choice $x > 8$ keeps a single piece of the wrong answer.)',
    },
    {
      q: 'Solve $(x+6)(x-1) < 0$.',
      choices: ['$x < -6$ or $x > 1$', '$-6 \\le x \\le 1$', '$-6 < x < 1$', '$-1 < x < 6$'],
      answer: 2,
      solution:
        'Set each factor to zero: $x + 6 = 0$ gives $x = -6$, and $x - 1 = 0$ gives $x = 1$. A product of two linear factors is negative between its roots, so the solution is $-6 < x < 1$. Test $x = 0$: $(6)(-1) = -6 < 0$ ✓. Check a second, independent way from outside: $x = -7$ gives $(-1)(-8) = 8$ and $x = 2$ gives $(8)(1) = 8$, both positive ✗, so the outside pieces really are excluded. (The choice $x < -6$ or $x > 1$ SWAPS BETWEEN AND OUTSIDE; the choice $-6 \\le x \\le 1$ includes the roots, where the product is $0$, which fails a strict $<$; the choice $-1 < x < 6$ FLIPS BOTH ROOT SIGNS, and testing it at $x = 5$ gives $(11)(4) = 44 > 0$ ✗.)',
    },
    {
      q: 'A number $n$ satisfies $(n-9)(n+2) < 0$. Which statement about $n$ must be true?',
      choices: [
        '$n$ lies strictly between $-2$ and $9$',
        '$n$ is smaller than $-2$ or larger than $9$',
        '$n$ lies strictly between $-9$ and $2$',
        '$n$ equals $-2$ or $9$',
      ],
      answer: 0,
      solution:
        'The roots are $n = 9$ and $n = -2$, and a product of two factors is negative exactly when the factors disagree in sign — that is, between the roots. So $-2 < n < 9$. Test $n = 0$: $(-9)(2) = -18 < 0$ ✓. Check a second, independent way with a point the answer rejects: $n = 10$ gives $(1)(12) = 12 > 0$ ✗. (The choice naming the outside pieces SWAPS BETWEEN AND OUTSIDE; the choice with $-9$ and $2$ FLIPS BOTH ROOT SIGNS, and at $n = 1$ that region gives $(-8)(3) = -24$, which happens to be negative, but at $n = -8$ it gives $(-17)(-6) = 102 > 0$ ✗, so the region is wrong; the last choice names the roots themselves, where the product is $0$, not negative.)',
    },
  ],
  // p2 — a factored quadratic above zero: two pieces, and one root is negative.
  [
    {
      q: 'Solve $(x+4)(x-2) > 0$.',
      choices: ['$-4 < x < 2$', '$x < -4$ or $x > 2$', '$x > 2$', '$x < 4$ or $x > 2$'],
      answer: 1,
      solution:
        'The roots are $-4$ and $2$. A product is positive when both factors carry the same sign, which happens on the two outside pieces: $x < -4$ or $x > 2$. Test $x = -5$: $(-1)(-7) = 7 > 0$ ✓, and test $x = 3$: $(7)(1) = 7 > 0$ ✓. Check a second, independent way in the middle: $x = 0$ gives $(4)(-2) = -8 < 0$ ✗, so the middle piece is correctly left out. (The choice $-4 < x < 2$ SWAPS BETWEEN AND OUTSIDE; the choice $x > 2$ LOSES THE LEFT BRANCH; the choice $x < 4$ or $x > 2$ FLIPS THE SIGN OF THE ROOT of $x + 4$, and it is so wide that it accepts $x = 0$, which we just showed fails ✗.)',
    },
    {
      q: 'For which values of $t$ is the product $(t-5)(t+2)$ positive?',
      choices: ['$-2 < t < 5$', '$t > 5$', '$t < -2$ or $t > 5$', '$t < -5$ or $t > 2$'],
      answer: 2,
      solution:
        'The roots are $t = 5$ and $t = -2$. Outside both roots the two factors agree in sign, making the product positive: $t < -2$ or $t > 5$. Test $t = -3$: $(-8)(-1) = 8 > 0$ ✓, and test $t = 6$: $(1)(8) = 8 > 0$ ✓. Check a second, independent way inside: $t = 0$ gives $(-5)(2) = -10 < 0$ ✗. (The choice $-2 < t < 5$ SWAPS BETWEEN AND OUTSIDE; the choice $t > 5$ LOSES THE LEFT BRANCH; the choice $t < -5$ or $t > 2$ FLIPS BOTH ROOT SIGNS, and at $t = 3$ it claims success while $(3-5)(3+2) = -10 < 0$ ✗.)',
    },
    {
      q: 'For which values of $x$ does the product $(x+7)(x-1)$ FAIL to be positive?',
      choices: ['$-7 \\le x \\le 1$', '$-7 < x < 1$', '$x \\le -7$ or $x \\ge 1$', '$-1 \\le x \\le 7$'],
      answer: 0,
      solution:
        'Failing to be positive means being negative or zero. The roots are $-7$ and $1$; the product is negative between them and equal to $0$ at each root, so the failures are $-7 \\le x \\le 1$. Test $x = 0$: $(7)(-1) = -7$, not positive ✓, and test the endpoint $x = 1$: $(8)(0) = 0$, also not positive ✓. Check a second, independent way outside: $x = 2$ gives $(9)(1) = 9 > 0$, so $2$ does not fail ✗ and is rightly excluded. (The choice $-7 < x < 1$ DROPS THE ROOTS, but $0$ is not positive, so the roots belong to the failure list; the choice $x \\le -7$ or $x \\ge 1$ names the wrong pieces; the choice $-1 \\le x \\le 7$ FLIPS BOTH ROOT SIGNS, and it wrongly accepts $x = 5$, where $(12)(4) = 48 > 0$ ✗.)',
    },
  ],
  // p3 — testing candidate values against a solved interval.
  [
    {
      q: 'Which of these values of $x$ satisfies $x^2 - 7x + 12 < 0$?',
      choices: ['$3$', '$3.5$', '$5$', '$0$'],
      answer: 1,
      solution:
        'Factor first: $x^2 - 7x + 12 = (x-3)(x-4)$, so the expression is negative exactly on $3 < x < 4$. The only offered number inside that narrow window is $3.5$. Check a second, independent way by substituting straight into the original expression: $3.5^2 - 7(3.5) + 12 = 12.25 - 24.5 + 12 = -0.25 < 0$ ✓. (The choice $3$ is a root: $9 - 21 + 12 = 0$, and $0$ is not less than $0$ — a BOUNDARY MISTAKE; the choice $5$ sits outside both roots, giving $25 - 35 + 12 = 2 > 0$ ✗; the choice $0$ is the reflex test point, giving $12 > 0$ ✗.)',
    },
    {
      q: 'Which of these values of $x$ does NOT satisfy $x^2 - 6x + 8 > 0$?',
      choices: ['$1$', '$3$', '$5$', '$0$'],
      answer: 1,
      solution:
        'Factor: $x^2 - 6x + 8 = (x-2)(x-4)$, which is positive outside the roots and negative on $2 < x < 4$. Of the four numbers, only $3$ lands in that middle strip, so only $3$ fails. Check a second, independent way by substituting: $9 - 18 + 8 = -1$, which is not greater than $0$ ✓. (The other three all succeed, so choosing them means SWAPPING BETWEEN AND OUTSIDE: $1$ gives $1 - 6 + 8 = 3 > 0$; $5$ gives $25 - 30 + 8 = 3 > 0$; $0$ gives $8 > 0$.)',
    },
    {
      q: 'Which of these values of $n$ makes $n^2 + 3n - 10$ negative?',
      choices: ['$-6$', '$2$', '$-1$', '$3$'],
      answer: 2,
      solution:
        'Factor: $n^2 + 3n - 10 = (n+5)(n-2)$, negative between the roots $-5$ and $2$. The only listed number strictly inside that window is $-1$. Check a second, independent way by substituting: $(-1)^2 + 3(-1) - 10 = 1 - 3 - 10 = -12 < 0$ ✓. (The choice $-6$ sits past the left root, giving $36 - 18 - 10 = 8 > 0$ ✗ — a classic when the root of $n+5$ is read as $+5$; the choice $2$ is a root, giving exactly $0$, which is not negative; the choice $3$ sits past the right root, giving $9 + 9 - 10 = 8 > 0$ ✗.)',
    },
  ],
  // p4 — x squared compared with a constant: two-sided answer.
  [
    {
      q: 'Solve $x^2 \\le 49$.',
      choices: ['$-7 \\le x \\le 7$', '$x \\le 7$', '$x \\le -7$ or $x \\ge 7$', '$-7 < x < 7$'],
      answer: 0,
      solution:
        'Move everything to one side: $x^2 - 49 \\le 0$, which factors as $(x-7)(x+7) \\le 0$. A product is negative between its roots and zero at them, and the $\\le$ keeps the roots, so $-7 \\le x \\le 7$. Test $x = 0$: $0 \\le 49$ ✓, and test the endpoint $x = -7$: $49 \\le 49$ ✓. Check a second, independent way outside: $x = 8$ gives $64 \\le 49$, which is false ✗. (The choice $x \\le 7$ forgets that squaring kills a minus sign, so it wrongly accepts $x = -20$, where $400 \\le 49$ is false ✗; the choice $x \\le -7$ or $x \\ge 7$ SWAPS BETWEEN AND OUTSIDE; the choice $-7 < x < 7$ DROPS THE ENDPOINTS even though $(\\pm 7)^2 = 49$ satisfies $\\le 49$.)',
    },
    {
      q: 'Solve $x^2 - 36 \\ge 0$.',
      choices: ['$-6 \\le x \\le 6$', '$x \\ge 6$', '$x \\le -6$ or $x \\ge 6$', '$x \\ge -6$'],
      answer: 2,
      solution:
        'Factor: $x^2 - 36 = (x-6)(x+6)$, with roots $-6$ and $6$. A product is positive outside its roots and zero at them, and the $\\ge$ keeps the roots, so $x \\le -6$ or $x \\ge 6$. Test $x = -10$: $100 - 36 = 64 \\ge 0$ ✓. Check a second, independent way in the middle: $x = 0$ gives $-36$, which is not $\\ge 0$ ✗, so the middle is correctly excluded. (The choice $-6 \\le x \\le 6$ SWAPS BETWEEN AND OUTSIDE; the choice $x \\ge 6$ LOSES THE LEFT BRANCH, which is where all the negative solutions live; the choice $x \\ge -6$ wrongly accepts $x = 0$, which we just tested and rejected ✗.)',
    },
    {
      q: 'A square photo has side length $s$ centimetres, and its area is at most $121$ square centimetres. Which describes every possible value of $s$?',
      choices: ['$0 < s \\le 11$', '$-11 \\le s \\le 11$', '$s \\le 11$', '$0 < s < 11$'],
      answer: 0,
      solution:
        'The area of the square is $s^2$, so the condition is $s^2 \\le 121$, or $(s-11)(s+11) \\le 0$, giving $-11 \\le s \\le 11$. A side length has to be a positive number, so the negative half of that interval is impossible and the answer is $0 < s \\le 11$. Test $s = 11$: the area is $121 \\le 121$ ✓. Check a second, independent way just past the top: $s = 11.5$ gives an area of $132.25$, too big ✗. (The choice $-11 \\le s \\le 11$ solves the algebra but forgets a LENGTH CANNOT BE NEGATIVE OR ZERO; the choice $s \\le 11$ also lets in negative side lengths and has no lower limit at all; the choice $0 < s < 11$ DROPS THE ENDPOINT, but a side of exactly $11$ gives an area of exactly $121$, which is allowed by “at most”.)',
    },
  ],
  // p5 — factor a quadratic, then take the outside pieces with equality.
  [
    {
      q: 'Solve $x^2 - 2x - 24 \\ge 0$.',
      choices: ['$-4 \\le x \\le 6$', '$x \\ge 6$', '$x \\le -4$ or $x \\ge 6$', '$x \\le -6$ or $x \\ge 4$'],
      answer: 2,
      solution:
        'Look for two numbers multiplying to $-24$ and adding to $-2$: those are $-6$ and $4$, so $x^2 - 2x - 24 = (x-6)(x+4)$, with roots $-4$ and $6$. The product is positive outside the roots and zero at them, so $x \\le -4$ or $x \\ge 6$. Test $x = -5$: $25 + 10 - 24 = 11 \\ge 0$ ✓. Check a second, independent way in the middle: $x = 0$ gives $-24$, which is not $\\ge 0$ ✗. (The choice $-4 \\le x \\le 6$ SWAPS BETWEEN AND OUTSIDE; the choice $x \\ge 6$ LOSES THE LEFT BRANCH; the choice $x \\le -6$ or $x \\ge 4$ reads the factor pair $-6$ and $4$ as the roots instead of solving each factor, and it wrongly accepts $x = 5$, where $25 - 10 - 24 = -9 < 0$ ✗.)',
    },
    {
      q: 'Solve $x^2 + x - 12 \\ge 0$.',
      choices: ['$x \\le -4$ or $x \\ge 3$', '$-4 \\le x \\le 3$', '$x \\ge 3$', '$x \\le -3$ or $x \\ge 4$'],
      answer: 0,
      solution:
        'Two numbers multiplying to $-12$ and adding to $1$ are $4$ and $-3$, so $x^2 + x - 12 = (x+4)(x-3)$, with roots $-4$ and $3$. Outside the roots the factors agree in sign and the product is positive; the $\\ge$ also keeps the roots themselves. So $x \\le -4$ or $x \\ge 3$. Test $x = -5$: $25 - 5 - 12 = 8 \\ge 0$ ✓. Check a second, independent way in the middle: $x = 0$ gives $-12 < 0$ ✗. (The choice $-4 \\le x \\le 3$ SWAPS BETWEEN AND OUTSIDE; the choice $x \\ge 3$ LOSES THE LEFT BRANCH; the choice $x \\le -3$ or $x \\ge 4$ FLIPS BOTH ROOT SIGNS, and it wrongly accepts $x = -3.5$, where $12.25 - 3.5 - 12 = -3.25 < 0$ ✗.)',
    },
    {
      q: 'Which of these values of $x$ fails to satisfy $x^2 - 5x - 14 \\ge 0$?',
      choices: ['$-3$', '$8$', '$0$', '$-2$'],
      answer: 2,
      solution:
        'Factor: $x^2 - 5x - 14 = (x-7)(x+2)$, so the inequality holds for $x \\le -2$ or $x \\ge 7$ and fails strictly between $-2$ and $7$. The only listed number in that middle strip is $0$. Check a second, independent way by substituting: $0 - 0 - 14 = -14$, which is not $\\ge 0$ ✓ — it fails. (The choice $-3$ lies left of $-2$ and works: $9 + 15 - 14 = 10 \\ge 0$; the choice $8$ lies right of $7$ and works: $64 - 40 - 14 = 10 \\ge 0$; the choice $-2$ is a root, giving $4 + 10 - 14 = 0$, and $0 \\ge 0$ is true, so calling it a failure is a BOUNDARY MISTAKE.)',
    },
  ],
  // p6 — factor a quadratic, then take the middle piece.
  [
    {
      q: 'Solve $x^2 + 5x - 24 < 0$.',
      choices: ['$x < -8$ or $x > 3$', '$-3 < x < 8$', '$-8 \\le x \\le 3$', '$-8 < x < 3$'],
      answer: 3,
      solution:
        'Two numbers multiplying to $-24$ and adding to $5$ are $8$ and $-3$, so $x^2 + 5x - 24 = (x+8)(x-3)$, with roots $-8$ and $3$. The product is negative between the roots, so the solution is $-8 < x < 3$. Test $x = 0$: $-24 < 0$ ✓. Check a second, independent way outside: $x = 4$ gives $16 + 20 - 24 = 12$, not negative ✗. (The choice $x < -8$ or $x > 3$ SWAPS BETWEEN AND OUTSIDE; the choice $-3 < x < 8$ FLIPS BOTH ROOT SIGNS and wrongly accepts $x = 4$, just rejected ✗; the choice $-8 \\le x \\le 3$ INCLUDES THE ROOTS, where the value is exactly $0$, which is not less than $0$.)',
    },
    {
      q: 'For which values of $x$ is $x^2 - 8x + 15$ less than zero?',
      choices: ['$3 < x < 5$', '$x < 3$ or $x > 5$', '$-5 < x < -3$', '$3 \\le x \\le 5$'],
      answer: 0,
      solution:
        'Two numbers multiplying to $15$ and adding to $-8$ are $-3$ and $-5$, so $x^2 - 8x + 15 = (x-3)(x-5)$, with roots $3$ and $5$. Between them the first factor is positive and the second negative, so the expression is negative there: $3 < x < 5$. Test $x = 4$: $16 - 32 + 15 = -1 < 0$ ✓. Check a second, independent way outside: $x = 6$ gives $36 - 48 + 15 = 3$, positive ✗. (The choice $x < 3$ or $x > 5$ SWAPS BETWEEN AND OUTSIDE; the choice $-5 < x < -3$ FLIPS BOTH ROOT SIGNS, and at $x = -4$ the expression is $16 + 32 + 15 = 63 > 0$ ✗; the choice $3 \\le x \\le 5$ INCLUDES THE ROOTS, where the value is $0$.)',
    },
    {
      q: 'The expression $x^2 + 3x - 18$ is negative for exactly which values of $x$?',
      choices: ['$-6 \\le x \\le 3$', '$x < -6$ or $x > 3$', '$-6 < x < 3$', '$-3 < x < 6$'],
      answer: 2,
      solution:
        'Two numbers multiplying to $-18$ and adding to $3$ are $6$ and $-3$, so $x^2 + 3x - 18 = (x+6)(x-3)$, with roots $-6$ and $3$. A product of two linear factors is negative between its roots: $-6 < x < 3$. Test $x = 0$: $-18 < 0$ ✓. Check a second, independent way outside: $x = -7$ gives $49 - 21 - 18 = 10$, positive ✗. (The choice $-6 \\le x \\le 3$ INCLUDES THE ROOTS, where the value is $0$ and not negative; the choice $x < -6$ or $x > 3$ SWAPS BETWEEN AND OUTSIDE; the choice $-3 < x < 6$ FLIPS BOTH ROOT SIGNS and wrongly accepts $x = 5$, where $25 + 15 - 18 = 22 > 0$ ✗.)',
    },
  ],
  // p7 — counting the integers in a closed solution interval.
  [
    {
      q: 'How many integers satisfy $(x-2)(x-11) \\le 0$?',
      choices: ['$9$', '$8$', '$10$', '$11$'],
      answer: 2,
      solution:
        'The product is negative between the roots and zero at them, and the $\\le$ keeps the roots, so the solution is $2 \\le x \\le 11$. Counting the integers from $2$ to $11$ gives $11 - 2 + 1 = 10$. Check a second, independent way by listing them: $2, 3, 4, 5, 6, 7, 8, 9, 10, 11$ — ten numbers ✓, and the neighbour $12$ fails, since $(10)(1) = 10 > 0$ ✗. (The choice $9$ SUBTRACTS THE ENDPOINTS WITHOUT ADDING ONE; the choice $8$ counts as though the inequality were strict, losing both roots; the choice $11$ takes that subtraction $11 - 2 = 9$ and then adds both endpoints again, double-counting them.)',
    },
    {
      q: 'How many integers satisfy $(x+3)(x-4) < 0$?',
      choices: ['$6$', '$7$', '$8$', '$5$'],
      answer: 0,
      solution:
        'The roots are $-3$ and $4$, and the product is negative between them, with the strict $<$ leaving both roots out: $-3 < x < 4$. The integers inside are $-2, -1, 0, 1, 2, 3$ — six of them. Check a second, independent way by testing the two nearest rejects: $x = -3$ gives $(0)(-7) = 0$, not negative ✗, and $x = 4$ gives $(7)(0) = 0$, not negative ✗. (The choice $7$ SUBTRACTS THE ENDPOINTS, $4 - (-3) = 7$; the choice $8$ counts the closed interval $-3 \\le x \\le 4$, wrongly keeping the roots; the choice $5$ FORGETS TO COUNT ZERO, which is very much an integer.)',
    },
    {
      q: 'For how many integer values of $n$ is the product $(n-4)(n-10)$ zero or negative?',
      choices: ['$5$', '$6$', '$7$', '$8$'],
      answer: 2,
      solution:
        'Zero or negative means $(n-4)(n-10) \\le 0$, which holds from one root to the other: $4 \\le n \\le 10$. The integers are $4, 5, 6, 7, 8, 9, 10$ — seven of them. Check a second, independent way with the arithmetic count $10 - 4 + 1 = 7$ ✓, and note the neighbour $n = 11$ fails, since $(7)(1) = 7 > 0$ ✗. (The choice $6$ SUBTRACTS THE ENDPOINTS WITHOUT ADDING ONE; the choice $5$ leaves out both roots, but at $n = 4$ and $n = 10$ the product is exactly zero, which the question allows; the choice $8$ takes the subtraction $10 - 4 = 6$ and then adds both endpoints on top, counting them twice.)',
    },
  ],
  // p8 — a variable on both sides: never divide by x.
  [
    {
      q: 'Solve $x^2 < 7x$.',
      choices: ['$x < 7$', '$0 < x < 7$', '$x < 0$ or $x > 7$', '$0 \\le x \\le 7$'],
      answer: 1,
      solution:
        'Do not divide by $x$ — its sign is unknown. Move everything to one side instead: $x^2 - 7x < 0$, so $x(x-7) < 0$, with roots $0$ and $7$. A product is negative between its roots, so $0 < x < 7$. Test $x = 1$: $1 < 7$ ✓. Check a second, independent way on the left piece: $x = -1$ gives $1 < -7$, which is false ✗ — so the negative numbers are correctly excluded. (The choice $x < 7$ comes from DIVIDING BY $x$, and it wrongly accepts $x = -1$, just rejected ✗; the choice $x < 0$ or $x > 7$ SWAPS BETWEEN AND OUTSIDE; the choice $0 \\le x \\le 7$ INCLUDES THE ROOTS, where the two sides are equal rather than one being smaller.)',
    },
    {
      q: 'Solve $3x^2 > 12x$.',
      choices: ['$x < 0$ or $x > 4$', '$x > 4$', '$0 < x < 4$', '$x \\le 0$ or $x \\ge 4$'],
      answer: 0,
      solution:
        'Collect on one side: $3x^2 - 12x > 0$, so $3x(x-4) > 0$. The positive factor $3$ changes nothing about signs, and the roots are $0$ and $4$. A product is positive outside its roots, so $x < 0$ or $x > 4$. Test $x = -1$: $3 > -12$ ✓, and test $x = 5$: $75 > 60$ ✓. Check a second, independent way in the middle: $x = 2$ gives $12 > 24$, which is false ✗. (The choice $x > 4$ comes from DIVIDING BY $x$, which silently deletes the entire negative branch; the choice $0 < x < 4$ SWAPS BETWEEN AND OUTSIDE; the choice $x \\le 0$ or $x \\ge 4$ INCLUDES THE ROOTS, but at $x = 4$ both sides equal $48$, and $48 > 48$ is false ✗.)',
    },
    {
      q: 'Which of these values of $x$ satisfies $x^2 > 6x$?',
      choices: ['$3$', '$6$', '$-2$', '$5$'],
      answer: 2,
      solution:
        'Rearranged, the inequality is $x(x-6) > 0$, which holds outside the roots $0$ and $6$: for $x < 0$ or $x > 6$. Among the offered numbers only $-2$ is negative. Check a second, independent way by substituting: $(-2)^2 = 4$ and $6(-2) = -12$, and $4 > -12$ ✓. (The choices $3$ and $5$ sit between the roots and fail: $9 > 18$ is false and $25 > 30$ is false ✗; the choice $6$ is a root, where both sides equal $36$ — a BOUNDARY MISTAKE. A student who DIVIDES BY $x$ gets the rule “$x > 6$” and then finds nothing on the list, which is exactly how the negative branch goes missing.)',
    },
  ],
  // p9 — factor, then count the integers strictly inside.
  [
    {
      q: 'How many integers satisfy $x^2 - 3x - 18 < 0$?',
      choices: ['$9$', '$8$', '$10$', '$7$'],
      answer: 1,
      solution:
        'Two numbers multiplying to $-18$ and adding to $-3$ are $-6$ and $3$, so the inequality is $(x-6)(x+3) < 0$ and the solution is $-3 < x < 6$, endpoints excluded. The integers inside are $-2, -1, 0, 1, 2, 3, 4, 5$ — eight of them. Check a second, independent way at the nearest reject: $x = 6$ gives $36 - 18 - 18 = 0$, which is not less than $0$ ✗. (The choice $9$ SUBTRACTS THE ENDPOINTS, $6 - (-3) = 9$; the choice $10$ counts the closed interval $-3 \\le x \\le 6$, wrongly keeping both roots; the choice $7$ FORGETS TO COUNT ZERO.)',
    },
    {
      q: 'How many integers satisfy $x^2 + 6x < 16$?',
      choices: ['$9$', '$10$', '$8$', '$11$'],
      answer: 0,
      solution:
        'Move the $16$ across first: $x^2 + 6x - 16 < 0$. Two numbers multiplying to $-16$ and adding to $6$ are $8$ and $-2$, so $(x+8)(x-2) < 0$ and the solution is $-8 < x < 2$. The integers inside are $-7, -6, -5, -4, -3, -2, -1, 0, 1$ — nine of them. Check a second, independent way at the nearest reject: $x = 2$ gives $4 + 12 = 16$, and $16 < 16$ is false ✗. (The choice $10$ SUBTRACTS THE ENDPOINTS, $2 - (-8) = 10$; the choice $8$ FORGETS TO COUNT ZERO; the choice $11$ counts the closed interval $-8 \\le x \\le 2$, wrongly keeping both roots.)',
    },
    {
      q: 'How many integers fail to satisfy $x^2 - 7x + 10 > 0$?',
      choices: ['$3$', '$2$', '$4$', '$6$'],
      answer: 2,
      solution:
        'Factor: $(x-2)(x-5) > 0$ holds outside the roots, so the failures are the numbers with $2 \\le x \\le 5$, roots included — at a root the value is $0$, which is not greater than $0$. The failing integers are $2, 3, 4, 5$ — four of them. Check a second, independent way by substituting the two ends: $x = 2$ gives $4 - 14 + 10 = 0$ ✗ and $x = 5$ gives $25 - 35 + 10 = 0$ ✗, both failures, while the neighbour $x = 6$ gives $36 - 42 + 10 = 4 > 0$, a success. (The choice $2$ counts only where the expression is strictly negative, forgetting that the roots also fail; the choice $3$ SUBTRACTS THE ENDPOINTS, $5 - 2 = 3$; the choice $6$ takes that subtraction and adds both endpoints again.)',
    },
  ],
  // p10 — leading coefficient other than 1, so one root is a fraction.
  [
    {
      q: 'Solve $3x^2 - 5x - 2 \\le 0$.',
      choices: [
        '$-\\frac{1}{3} \\le x \\le 2$',
        '$x \\le -\\frac{1}{3}$ or $x \\ge 2$',
        '$-2 \\le x \\le \\frac{1}{3}$',
        '$\\frac{1}{3} \\le x \\le 2$',
      ],
      answer: 0,
      solution:
        'Factor: $3x^2 - 5x - 2 = (3x+1)(x-2)$, since $(3x)(x) = 3x^2$ and $(3x)(-2) + (1)(x) = -5x$. The roots are $x = -\\frac{1}{3}$ and $x = 2$. The leading coefficient $3$ is positive, so the parabola opens upward and dips below zero between its roots; the $\\le$ keeps the roots. So $-\\frac{1}{3} \\le x \\le 2$. Test $x = 0$: $-2 \\le 0$ ✓. Check a second, independent way outside: $x = 3$ gives $27 - 15 - 2 = 10$, not $\\le 0$ ✗. (The choice $x \\le -\\frac{1}{3}$ or $x \\ge 2$ SWAPS BETWEEN AND OUTSIDE; the choice $-2 \\le x \\le \\frac{1}{3}$ SWAPS THE TWO ROOTS AND THEIR SIGNS; the choice $\\frac{1}{3} \\le x \\le 2$ reads the root of $3x + 1$ as $+\\frac{1}{3}$, and at $x = 0$ that answer refuses a value we just verified works ✗.)',
    },
    {
      q: 'Solve $2x^2 + 5x - 12 > 0$.',
      choices: [
        '$-4 < x < \\frac{3}{2}$',
        '$x < -4$ or $x > \\frac{3}{2}$',
        '$x < -\\frac{3}{2}$ or $x > 4$',
        '$x > \\frac{3}{2}$',
      ],
      answer: 1,
      solution:
        'Factor: $2x^2 + 5x - 12 = (2x-3)(x+4)$, since $(2x)(4) + (-3)(x) = 5x$ and $(-3)(4) = -12$. The roots are $x = \\frac{3}{2}$ and $x = -4$. A product is positive outside its roots, so $x < -4$ or $x > \\frac{3}{2}$. Test $x = -5$: $50 - 25 - 12 = 13 > 0$ ✓, and test $x = 2$: $8 + 10 - 12 = 6 > 0$ ✓. Check a second, independent way in the middle: $x = 0$ gives $-12$, not positive ✗. (The choice $-4 < x < \\frac{3}{2}$ SWAPS BETWEEN AND OUTSIDE; the choice $x < -\\frac{3}{2}$ or $x > 4$ ATTACHES EACH ROOT TO THE WRONG FACTOR and wrongly rejects $x = 2$, just verified ✓; the choice $x > \\frac{3}{2}$ LOSES THE LEFT BRANCH.)',
    },
    {
      q: 'Solve $4x^2 - 4x - 3 < 0$.',
      choices: [
        '$-\\frac{3}{2} < x < \\frac{1}{2}$',
        '$x < -\\frac{1}{2}$ or $x > \\frac{3}{2}$',
        '$-\\frac{1}{2} \\le x \\le \\frac{3}{2}$',
        '$-\\frac{1}{2} < x < \\frac{3}{2}$',
      ],
      answer: 3,
      solution:
        'Factor: $4x^2 - 4x - 3 = (2x-3)(2x+1)$, since $(2x)(1) + (-3)(2x) = -4x$ and $(-3)(1) = -3$. The roots are $x = \\frac{3}{2}$ and $x = -\\frac{1}{2}$, and with a positive leading coefficient the expression is negative between them: $-\\frac{1}{2} < x < \\frac{3}{2}$. Test $x = 0$: $-3 < 0$ ✓. Check a second, independent way outside: $x = 2$ gives $16 - 8 - 3 = 5$, not negative ✗. (The choice $-\\frac{3}{2} < x < \\frac{1}{2}$ SWAPS THE TWO ROOTS AND THEIR SIGNS, and it wrongly rejects $x = 1$, where $4 - 4 - 3 = -3 < 0$ ✓; the choice $x < -\\frac{1}{2}$ or $x > \\frac{3}{2}$ SWAPS BETWEEN AND OUTSIDE; the choice $-\\frac{1}{2} \\le x \\le \\frac{3}{2}$ INCLUDES THE ROOTS, where the value is exactly $0$.)',
    },
  ],
]

const s152 = [
  // p1 — a fraction above zero: top and bottom must agree in sign.
  [
    {
      q: 'Solve $\\frac{x-5}{x+1} > 0$.',
      choices: ['$x < -1$ or $x > 5$', '$-1 < x < 5$', '$x > 5$', '$x \\le -1$ or $x \\ge 5$'],
      answer: 0,
      solution:
        'A fraction is positive when its top and bottom agree in sign. The key points are $x = 5$, where the top is zero, and $x = -1$, where the bottom is zero. Both parts are positive when $x > 5$, and both are negative when $x < -1$. Test $x = -2$: $\\frac{-7}{-1} = 7 > 0$ ✓. Check a second, independent way in between: $x = 0$ gives $\\frac{-5}{1} = -5$, not positive ✗. (The choice $-1 < x < 5$ SWAPS BETWEEN AND OUTSIDE; the choice $x > 5$ LOSES THE BOTH-NEGATIVE BRANCH; the choice $x \\le -1$ or $x \\ge 5$ INCLUDES THE KEY POINTS, but $x = 5$ makes the fraction $0$, which is not $> 0$, and $x = -1$ makes it undefined.)',
    },
    {
      q: 'For which values of $t$ is the fraction $\\frac{t+4}{t-6}$ positive?',
      choices: ['$-4 < t < 6$', '$t < -4$ or $t > 6$', '$t > 6$', '$t < -6$ or $t > 4$'],
      answer: 1,
      solution:
        'The key points are $t = -4$ (top zero) and $t = 6$ (bottom zero — forbidden). For $t > 6$ both parts are positive; for $t < -4$ both are negative, and a negative divided by a negative is positive. Test $t = -5$: $\\frac{-1}{-11} = \\frac{1}{11} > 0$ ✓. Check a second, independent way in between: $t = 0$ gives $\\frac{4}{-6} = -\\frac{2}{3}$, not positive ✗. (The choice $-4 < t < 6$ SWAPS BETWEEN AND OUTSIDE; the choice $t > 6$ LOSES THE BOTH-NEGATIVE BRANCH; the choice $t < -6$ or $t > 4$ FLIPS BOTH KEY POINTS and wrongly accepts $t = 5$, where $\\frac{9}{-1} = -9$ ✗.)',
    },
    {
      q: 'Which of these values of $x$ makes $\\frac{x-3}{x+2}$ positive?',
      choices: ['$0$', '$3$', '$-2$', '$-4$'],
      answer: 3,
      solution:
        'The fraction is positive when the top and bottom agree in sign, which happens for $x > 3$ or $x < -2$. The only listed number in either piece is $-4$. Check a second, independent way by substituting: $\\frac{-4-3}{-4+2} = \\frac{-7}{-2} = 3.5 > 0$ ✓. (The choice $0$ sits between the key points, where the signs disagree: $\\frac{-3}{2} = -1.5$ ✗; the choice $3$ makes the TOP ZERO, so the fraction is $0$, which is not positive; the choice $-2$ makes the BOTTOM ZERO, so the fraction has no value at all there and cannot be positive.)',
    },
  ],
  // p2 — the forbidden value: a zero denominator is never allowed.
  [
    {
      q: 'Which value of $x$ can never belong to the solution set of $\\frac{x-7}{x+4} \\le 0$?',
      choices: ['$x = 7$', '$x = -4$', '$x = 4$', '$x = -7$'],
      answer: 1,
      solution:
        'At $x = -4$ the denominator is $x + 4 = 0$, so the fraction has no value there. An expression that does not exist cannot be less than or equal to anything, so $-4$ is barred no matter which inequality sign appears. Check a second, independent way by testing the rival: at $x = 7$ the fraction is $\\frac{0}{11} = 0$, and $0 \\le 0$ is true ✓, so $7$ is a perfectly good solution. (The choice $x = 7$ makes the TOP ZERO, which a $\\le$ welcomes; the choices $x = 4$ and $x = -7$ FLIP A SIGN when reading the factors, and both give ordinary values: $\\frac{-3}{8} = -0.375$ and $\\frac{-14}{-3} \\approx 4.667$.)',
    },
    {
      q: 'Consider the inequality $\\frac{2x-8}{x+5} \\ge 0$. Which statement is correct?',
      choices: [
        '$x = 4$ is a solution, but $x = -5$ is not',
        '$x = -5$ is a solution, but $x = 4$ is not',
        'Both $x = 4$ and $x = -5$ are solutions',
        'Neither $x = 4$ nor $x = -5$ is a solution',
      ],
      answer: 0,
      solution:
        'Try each number in the fraction. At $x = 4$ the top is $2(4) - 8 = 0$ and the bottom is $9$, so the fraction equals $0$; since $0 \\ge 0$ is true, $x = 4$ is a solution ✓. At $x = -5$ the bottom is $0$, so the fraction has no value and cannot satisfy the inequality ✗. Check a second, independent way with the sign analysis: the key points are $4$ and $-5$, the fraction is positive for $x > 4$ and for $x < -5$, and a $\\ge$ adds only the numerator zero $4$ — never the denominator zero $-5$. (The other three choices all misjudge at least one of the two boundary types: a zero on TOP is allowed by $\\ge$, a zero on the BOTTOM never is.)',
    },
    {
      q: 'Exactly one number is barred from the solution set of $\\frac{x+2}{3-x} \\ge 0$ because the fraction has no value there. Which number is it?',
      choices: ['$x = -2$', '$x = 2$', '$x = -3$', '$x = 3$'],
      answer: 3,
      solution:
        'The fraction has no value where its denominator is zero: $3 - x = 0$ gives $x = 3$. Check a second, independent way by testing the rival boundary: at $x = -2$ the fraction is $\\frac{0}{5} = 0$, and $0 \\ge 0$ is true ✓, so $-2$ is allowed and is not the barred number. (The choice $x = -2$ is the TOP ZERO, which a $\\ge$ accepts; the choices $x = 2$ and $x = -3$ come from MISREADING $3 - x$, whose root is $3$; at $x = 2$ the fraction is $\\frac{4}{1} = 4$ and at $x = -3$ it is $\\frac{-1}{6}$, both perfectly ordinary numbers.)',
    },
  ],
  // p3 — a fraction below zero, with a bare x on the top or bottom.
  [
    {
      q: 'Solve $\\frac{x}{x+4} < 0$.',
      choices: ['$-4 < x < 0$', '$x < -4$ or $x > 0$', '$-4 \\le x \\le 0$', '$x < 0$'],
      answer: 0,
      solution:
        'The key points are $x = 0$ (top zero) and $x = -4$ (bottom zero). A fraction is negative when top and bottom disagree in sign, which happens between the key points: for $-4 < x < 0$ the top is negative and the bottom is positive. Test $x = -1$: $\\frac{-1}{3} < 0$ ✓. Check a second, independent way outside: $x = -5$ gives $\\frac{-5}{-1} = 5 > 0$ ✗, and $x = 1$ gives $\\frac{1}{5} > 0$ ✗. (The choice $x < -4$ or $x > 0$ SWAPS BETWEEN AND OUTSIDE; the choice $-4 \\le x \\le 0$ INCLUDES THE KEY POINTS, but there the fraction is $0$ or undefined; the choice $x < 0$ forgets the lower key point and wrongly accepts $x = -5$, just rejected ✗.)',
    },
    {
      q: 'Solve $\\frac{x-3}{x} < 0$.',
      choices: ['$x < 0$ or $x > 3$', '$0 \\le x \\le 3$', '$0 < x < 3$', '$x < 3$'],
      answer: 2,
      solution:
        'The key points are $x = 3$ (top zero) and $x = 0$ (bottom zero). The fraction is negative where the parts disagree in sign: for $0 < x < 3$ the top is negative while the bottom is positive. Test $x = 1$: $\\frac{-2}{1} = -2 < 0$ ✓. Check a second, independent way outside: $x = -1$ gives $\\frac{-4}{-1} = 4 > 0$ ✗, and $x = 4$ gives $\\frac{1}{4} > 0$ ✗. (The choice $x < 0$ or $x > 3$ SWAPS BETWEEN AND OUTSIDE; the choice $0 \\le x \\le 3$ INCLUDES THE KEY POINTS, and $x = 0$ is not even allowed to be tried; the choice $x < 3$ comes from MULTIPLYING BY $x$ WITHOUT KNOWING ITS SIGN, and it wrongly accepts $x = -1$, just rejected ✗.)',
    },
    {
      q: 'Which of these values of $x$ makes $\\frac{x}{x-8}$ negative?',
      choices: ['$-2$', '$0$', '$5$', '$9$'],
      answer: 2,
      solution:
        'The fraction is negative where the top and bottom disagree in sign, which is between the key points $0$ and $8$. The only listed number in that window is $5$. Check a second, independent way by substituting: $\\frac{5}{5-8} = \\frac{5}{-3} \\approx -1.667 < 0$ ✓. (The choice $-2$ makes both parts negative: $\\frac{-2}{-10} = 0.2 > 0$ ✗; the choice $0$ makes the TOP ZERO, so the fraction is $0$, which is not negative; the choice $9$ sits past the second key point, where both parts are positive: $\\frac{9}{1} = 9 > 0$ ✗.)',
    },
  ],
  // p4 — three linear factors: build a sign chart.
  [
    {
      q: 'Solve $(x+2)(x-1)(x-6) < 0$.',
      choices: ['$x < -2$ or $1 < x < 6$', '$-2 < x < 1$ or $x > 6$', '$x < -2$', '$1 < x < 6$'],
      answer: 0,
      solution:
        'The roots are $-2$, $1$, and $6$, giving four intervals. On the far right, $x > 6$, all three factors are positive, so the product is positive; walking left the sign flips at each root: negative on $1 < x < 6$, positive on $-2 < x < 1$, negative on $x < -2$. The negative pieces are $x < -2$ and $1 < x < 6$. Test $x = 2$: $(4)(1)(-4) = -16 < 0$ ✓. Check a second, independent way on a rejected piece: $x = 0$ gives $(2)(-1)(-6) = 12 > 0$ ✗. (The choice $-2 < x < 1$ or $x > 6$ names the POSITIVE pieces; the choices $x < -2$ and $1 < x < 6$ each keep only HALF of the correct answer.)',
    },
    {
      q: 'Solve $(x-2)(x-4)(x-9) > 0$.',
      choices: ['$x < 2$ or $4 < x < 9$', '$2 < x < 4$ or $x > 9$', '$x > 9$', '$2 < x < 4$'],
      answer: 1,
      solution:
        'The roots are $2$, $4$, and $9$. For $x > 9$ every factor is positive, so the product is positive; the sign then alternates leftward: negative on $4 < x < 9$, positive on $2 < x < 4$, negative on $x < 2$. The positive pieces are $2 < x < 4$ and $x > 9$. Test $x = 3$: $(1)(-1)(-6) = 6 > 0$ ✓. Check a second, independent way on a rejected piece: $x = 5$ gives $(3)(1)(-4) = -12 < 0$ ✗. (The choice $x < 2$ or $4 < x < 9$ names the NEGATIVE pieces — a whole-chart sign flip, which is what happens if you start from the left assuming a positive sign; the choices $x > 9$ and $2 < x < 4$ each keep only HALF of the correct answer.)',
    },
    {
      q: 'For how many of the four numbers $x = 0$, $x = 2$, $x = 5$, $x = 8$ is $(x-1)(x-4)(x-7)$ positive?',
      choices: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      solution:
        'Substitute each number in turn. At $x = 0$: $(-1)(-4)(-7) = -28$, negative. At $x = 2$: $(1)(-2)(-5) = 10$, positive ✓. At $x = 5$: $(4)(1)(-2) = -8$, negative. At $x = 8$: $(7)(4)(1) = 28$, positive ✓. That is two of the four. Check a second, independent way with the sign chart: the roots are $1$, $4$, $7$, the product is positive for $x > 7$ and for $1 < x < 4$, and exactly $2$ and $8$ fall in those pieces ✓. (The choice $3$ comes from reading THREE NEGATIVE FACTORS as giving a positive product at $x = 0$, but three negatives multiply to a negative; the choice $1$ keeps only the far-right piece; the choice $4$ assumes the product is positive everywhere.)',
    },
  ],
  // p5 — a fraction with a mismatched pair of brackets.
  [
    {
      q: 'Solve $\\frac{x-5}{x+2} \\le 0$.',
      choices: ['$-2 \\le x \\le 5$', '$-2 < x \\le 5$', '$-2 < x < 5$', '$x < -2$ or $x \\ge 5$'],
      answer: 1,
      solution:
        'The fraction is negative where top and bottom disagree in sign, which is between the key points $-2$ and $5$. Test $x = 0$: $\\frac{-5}{2} = -2.5 < 0$ ✓. Now the boundaries: at $x = 5$ the top is $0$, so the fraction is $0$, and $0 \\le 0$ is true, so $5$ is in; at $x = -2$ the bottom is $0$, so the fraction has no value and $-2$ is out. The answer is $-2 < x \\le 5$. Check a second, independent way outside: $x = 6$ gives $\\frac{1}{8} > 0$ ✗. (The choice $-2 \\le x \\le 5$ INCLUDES THE DENOMINATOR ZERO, which is never allowed; the choice $-2 < x < 5$ DROPS THE NUMERATOR ZERO, which a $\\le$ accepts; the choice $x < -2$ or $x \\ge 5$ SWAPS BETWEEN AND OUTSIDE.)',
    },
    {
      q: 'Solve $\\frac{x+6}{x-1} \\le 0$.',
      choices: ['$-6 < x < 1$', '$-6 \\le x \\le 1$', '$-6 \\le x < 1$', '$x \\le -6$ or $x > 1$'],
      answer: 2,
      solution:
        'The key points are $x = -6$ (top zero) and $x = 1$ (bottom zero). Between them the parts disagree in sign, so the fraction is negative: test $x = 0$, giving $\\frac{6}{-1} = -6 < 0$ ✓. The point $x = -6$ makes the fraction $0$, which $\\le 0$ accepts, so it is included; the point $x = 1$ makes it undefined, so it is excluded. The answer is $-6 \\le x < 1$. Check a second, independent way outside: $x = -7$ gives $\\frac{-1}{-8} = 0.125 > 0$ ✗. (The choice $-6 < x < 1$ DROPS THE NUMERATOR ZERO; the choice $-6 \\le x \\le 1$ INCLUDES THE DENOMINATOR ZERO; the choice $x \\le -6$ or $x > 1$ SWAPS BETWEEN AND OUTSIDE.)',
    },
    {
      q: 'Which value of $x$ solves $\\frac{x-4}{x+3} \\le 0$ but does NOT solve $\\frac{x-4}{x+3} < 0$?',
      choices: ['$x = -3$', '$x = 0$', '$x = 4$', '$x = 5$'],
      answer: 2,
      solution:
        'The two inequalities differ only where the fraction equals exactly $0$, and that happens when the top is zero: $x - 4 = 0$, so $x = 4$. Check a second, independent way by substituting: $\\frac{4-4}{4+3} = \\frac{0}{7} = 0$, and $0 \\le 0$ is true while $0 < 0$ is false ✓ — exactly the gap the question asks for. (The choice $x = -3$ makes the DENOMINATOR ZERO, so it solves neither inequality; the choice $x = 0$ gives $\\frac{-4}{3}$, a negative number that solves both; the choice $x = 5$ gives $\\frac{1}{8}$, a positive number that solves neither.)',
    },
  ],
  // p6 — why clearing a fraction by an unknown sign is unsafe.
  [
    {
      q: 'You are solving $\\frac{x+1}{x-5} \\ge 3$. Which first step is safe?',
      choices: [
        'Multiply both sides by $x-5$ and keep the $\\ge$',
        'Multiply both sides by $x-5$ and flip it to $\\le$',
        'Subtract $3$ from both sides and combine the left side into a single fraction',
        'Cancel the $x$ on the top with the $x$ on the bottom',
      ],
      answer: 2,
      solution:
        'Subtracting is always allowed, and it leads somewhere useful: $\\frac{x+1}{x-5} - 3 = \\frac{x + 1 - 3(x-5)}{x-5} = \\frac{16 - 2x}{x-5}$, and now a sign chart with key points $8$ and $5$ finishes the job. Check a second, independent way that the multiplying steps really are unsafe: at $x = 6$ the fraction is $\\frac{7}{1} = 7 \\ge 3$ ✓, while at $x = 0$ it is $\\frac{1}{-5} = -0.2$, which is not $\\ge 3$ ✗ — so solutions live on one side of $5$ but not the other, and a single fixed rule about flipping cannot be right for both. (The first two choices MULTIPLY BY A FACTOR OF UNKNOWN SIGN, each committing to one rule everywhere; the last choice CANCELS A TERM instead of a factor, and $\\frac{x+1}{x-5}$ has nothing common to cancel — at $x = 6$ that trick would report $\\frac{1}{-5}$ instead of the true value $7$.)',
    },
    {
      q: 'Priya multiplies both sides of $\\frac{x-1}{x+2} < 4$ by $x+2$ and keeps the $<$ pointing the same way. For which values of $x$ can that step lead her to a false statement?',
      choices: [
        'For $x > -2$, where $x+2$ is positive',
        'For $x < -2$, where $x+2$ is negative',
        'For $x = -2$ only',
        'For every $x$, because multiplying is never allowed',
      ],
      answer: 1,
      solution:
        'Multiplying an inequality by a positive number is safe, but multiplying by a negative number reverses the direction. Since $x + 2$ is negative exactly when $x < -2$, that is the region where keeping the $<$ is wrong. Her multiplied form is $x - 1 < 4x + 8$, which simplifies to $x > -3$. Check a second, independent way with a number from the suspect region: at $x = -4$ the original reads $\\frac{-5}{-2} = 2.5 < 4$, TRUE ✓, while her form claims $-5 < -8$, false ✗ — a genuine solution thrown away. Her form also misfires just to the right of $-3$: at $x = -2.5$ she gets $-3.5 < -2$, true, but the original is $\\frac{-3.5}{-0.5} = 7 < 4$, false ✗. (The first choice names the region where the multiplier is positive and the step is perfectly safe; the third names the single forbidden point, which is a different issue; the last choice overreaches — multiplying by a factor of known positive sign is fine.)',
    },
    {
      q: 'Ben solves $\\frac{x+7}{x-3} \\le 2$ by multiplying both sides by $x-3$, getting $x + 7 \\le 2x - 6$ and then $x \\ge 13$. His answer misses part of the solution set. What went wrong?',
      choices: [
        'He should have subtracted $7$ from both sides first',
        'He multiplied by $x-3$, which is negative when $x < 3$, so the inequality flips there',
        'He forgot that $x+7$ can be negative',
        'Nothing went wrong; $x \\ge 13$ is the whole solution set',
      ],
      answer: 1,
      solution:
        'The safe route is to subtract: $\\frac{x+7}{x-3} - 2 = \\frac{x + 7 - 2(x-3)}{x-3} = \\frac{13-x}{x-3} \\le 0$, with key points $3$ and $13$. That fraction is negative for $x > 13$ and also for $x < 3$, so the real solution is $x < 3$ or $x \\ge 13$ — Ben’s multiplication kept the $\\le$ pointing the same way and threw the entire left piece away. Check a second, independent way with a number from the lost piece: at $x = 0$ the original reads $\\frac{7}{-3} \\approx -2.333 \\le 2$ ✓, a genuine solution that Ben’s answer rejects. (The first choice describes a harmless rearrangement that would not fix anything; the third points at the numerator, whose sign never affects the direction of an inequality; the last choice accepts an answer we just disproved at $x = 0$.)',
    },
  ],
  // p7 — three factors including a bare x, with equality allowed.
  [
    {
      q: 'Solve $x(x-1)(x+4) \\ge 0$.',
      choices: [
        '$x \\le -4$ or $0 \\le x \\le 1$',
        '$-4 \\le x \\le 1$',
        '$-4 \\le x \\le 0$ or $x \\ge 1$',
        '$x \\ge 1$',
      ],
      answer: 2,
      solution:
        'The roots are $-4$, $0$, and $1$. For $x > 1$ all three factors are positive, so the product is positive; the sign flips at each root going left: negative on $0 < x < 1$, positive on $-4 < x < 0$, negative on $x < -4$. We want positive or zero, so we take $-4 \\le x \\le 0$ and $x \\ge 1$, roots included by the $\\ge$. Test $x = -1$: $(-1)(-2)(3) = 6 \\ge 0$ ✓. Check a second, independent way on a rejected piece: $x = 0.5$ gives $(0.5)(-0.5)(4.5) = -1.125 < 0$ ✗. (The choice $x \\le -4$ or $0 \\le x \\le 1$ is the whole chart FLIPPED; the choice $-4 \\le x \\le 1$ merges the two pieces into one and swallows the negative strip we just tested ✗; the choice $x \\ge 1$ KEEPS ONLY THE RIGHTMOST PIECE.)',
    },
    {
      q: 'Solve $x(x-5)(x+1) \\le 0$.',
      choices: [
        '$x \\le -1$ or $0 \\le x \\le 5$',
        '$-1 \\le x \\le 0$ or $x \\ge 5$',
        '$-1 \\le x \\le 5$',
        '$0 \\le x \\le 5$',
      ],
      answer: 0,
      solution:
        'The roots are $-1$, $0$, and $5$. For $x > 5$ every factor is positive, so the product is positive; alternating leftward gives negative on $0 < x < 5$, positive on $-1 < x < 0$, negative on $x < -1$. Taking the negative pieces and including all three roots (the $\\le$ allows a value of $0$) gives $x \\le -1$ or $0 \\le x \\le 5$. Test $x = 1$: $(1)(-4)(2) = -8 \\le 0$ ✓. Check a second, independent way on a rejected piece: $x = -0.5$ gives $(-0.5)(-5.5)(0.5) = 1.375 > 0$ ✗. (The choice $-1 \\le x \\le 0$ or $x \\ge 5$ is the whole chart FLIPPED; the choice $-1 \\le x \\le 5$ merges the two pieces and swallows the positive strip we just tested ✗; the choice $0 \\le x \\le 5$ LOSES THE LEFT PIECE.)',
    },
    {
      q: 'The solution set of $x(x+5)(x-2) \\ge 0$ comes in two pieces. What is the left-hand piece?',
      choices: ['$x \\le -5$', '$-5 \\le x \\le 0$', '$-5 < x < 0$', '$x \\le 0$'],
      answer: 1,
      solution:
        'The roots are $-5$, $0$, and $2$. For $x > 2$ all three factors are positive; the sign alternates leftward: negative on $0 < x < 2$, positive on $-5 < x < 0$, negative on $x < -5$. So the solution is $-5 \\le x \\le 0$ together with $x \\ge 2$, and the left-hand piece is $-5 \\le x \\le 0$. Test $x = -1$: $(-1)(4)(-3) = 12 \\ge 0$ ✓. Check a second, independent way further left: $x = -6$ gives $(-6)(-1)(-8) = -48 < 0$ ✗, so the piece really does stop at $-5$. (The choice $x \\le -5$ names the strip we just rejected — a FLIPPED CHART; the choice $-5 < x < 0$ DROPS THE ROOTS, which the $\\ge$ keeps since the product is $0$ there; the choice $x \\le 0$ runs the piece off to the left forever and includes $x = -6$ ✗.)',
    },
  ],
  // p8 — counting integers in a range against a three-factor sign chart.
  [
    {
      q: 'How many integers $x$ with $1 \\le x \\le 12$ satisfy $(x-2)(x-6)(x-10) > 0$?',
      choices: ['$3$', '$5$', '$4$', '$8$'],
      answer: 1,
      solution:
        'The roots are $2$, $6$, $10$. For $x > 10$ all three factors are positive; alternating leftward gives negative on $6 < x < 10$, positive on $2 < x < 6$, negative on $x < 2$. Inside the window $1 \\le x \\le 12$, the positive pieces contribute $3, 4, 5$ and $11, 12$ — five integers. Check a second, independent way by substituting the two extremes of that list: $x = 3$ gives $(1)(-3)(-7) = 21 > 0$ ✓ and $x = 12$ gives $(10)(6)(2) = 120 > 0$ ✓, while the excluded $x = 7$ gives $(5)(1)(-3) = -15 < 0$ ✗. (The choice $3$ keeps only the middle piece and FORGETS THE TAIL beyond $10$; the choice $4$ counts the NEGATIVE pieces instead, namely $1$ and $7, 8, 9$; the choice $8$ also counts the three roots $2, 6, 10$, where the product is $0$ and the strict $>$ says no.)',
    },
    {
      q: 'How many integers $x$ with $-4 \\le x \\le 7$ satisfy $(x+2)(x-1)(x-5) < 0$?',
      choices: ['$4$', '$3$', '$5$', '$8$'],
      answer: 2,
      solution:
        'The roots are $-2$, $1$, $5$. For $x > 5$ all three factors are positive; alternating leftward gives negative on $1 < x < 5$, positive on $-2 < x < 1$, negative on $x < -2$. Inside the window $-4 \\le x \\le 7$, the negative pieces contribute $-4, -3$ and $2, 3, 4$ — five integers. Check a second, independent way by substituting: $x = -4$ gives $(-2)(-5)(-9) = -90 < 0$ ✓ and $x = 3$ gives $(5)(2)(-2) = -20 < 0$ ✓, while the excluded $x = 0$ gives $(2)(-1)(-5) = 10 > 0$ ✗. (The choice $4$ counts the POSITIVE pieces instead, namely $-1, 0$ and $6, 7$; the choice $3$ keeps only the middle piece and FORGETS the two integers left of $-2$; the choice $8$ also counts the three roots $-2, 1, 5$, where the product is $0$.)',
    },
    {
      q: 'For how many integers $x$ from $1$ to $8$ does $(x-2)(x-5)(x-7)$ FAIL to be positive?',
      choices: ['$2$', '$6$', '$3$', '$5$'],
      answer: 3,
      solution:
        'Failing to be positive means the product is negative or zero. The roots are $2$, $5$, $7$: the product is positive for $x > 7$ and for $2 < x < 5$, so among $1$ through $8$ the successes are $3$, $4$ and $8$, and everything else fails. The failures are $1, 2, 5, 6, 7$ — five integers. Check a second, independent way by substituting each of them: $x = 1$ gives $(-1)(-4)(-6) = -24$; $x = 2$ gives $0$; $x = 5$ gives $0$; $x = 6$ gives $(4)(1)(-1) = -4$; $x = 7$ gives $0$ — none of these is positive ✓. (The choice $2$ counts only the strictly negative values $1$ and $6$, FORGETTING THAT A ROOT ALSO FAILS to be positive; the choice $3$ counts where the product IS positive; the choice $6$ comes from a FLIPPED CHART that calls $3, 4, 8$ the failures and then adds the three roots.)',
    },
  ],
  // p9 — a fraction compared with a nonzero number: subtract, then combine.
  [
    {
      q: 'Solve $\\frac{x+1}{x-4} \\ge 2$.',
      choices: ['$4 \\le x \\le 9$', '$4 < x \\le 9$', '$4 < x < 9$', '$x \\le 4$ or $x \\ge 9$'],
      answer: 1,
      solution:
        'Subtract $2$ and combine into one fraction: $\\frac{x+1}{x-4} - 2 = \\frac{x + 1 - 2(x-4)}{x-4} = \\frac{9-x}{x-4} \\ge 0$. The key points are $9$ (top zero) and $4$ (bottom zero), and the fraction is positive between them: test $x = 5$, giving $\\frac{4}{1} = 4 \\ge 0$ ✓. The point $9$ is included, since the original becomes $\\frac{10}{5} = 2 \\ge 2$ ✓, while $4$ is excluded as undefined, so the answer is $4 < x \\le 9$. Check a second, independent way outside: $x = 10$ gives $\\frac{11}{6} \\approx 1.833$, which is not $\\ge 2$ ✗. (The choice $4 \\le x \\le 9$ INCLUDES THE DENOMINATOR ZERO; the choice $4 < x < 9$ DROPS the numerator zero, where equality holds; the choice $x \\le 4$ or $x \\ge 9$ SWAPS BETWEEN AND OUTSIDE and accepts $x = 10$, just rejected ✗.)',
    },
    {
      q: 'Solve $\\frac{x+5}{x-1} \\le 3$.',
      choices: ['$1 < x \\le 4$', '$x < 1$ or $x \\ge 4$', '$x \\le 1$ or $x \\ge 4$', '$x \\ge 4$'],
      answer: 1,
      solution:
        'Subtract $3$ and combine: $\\frac{x+5}{x-1} - 3 = \\frac{x + 5 - 3(x-1)}{x-1} = \\frac{8-2x}{x-1} \\le 0$. The key points are $4$ (top zero) and $1$ (bottom zero); the fraction is negative outside them. Test $x = 5$: $\\frac{-2}{4} = -0.5 \\le 0$ ✓, and test $x = 0$: $\\frac{8}{-1} = -8 \\le 0$ ✓. The point $4$ is included, since the original gives $\\frac{9}{3} = 3 \\le 3$ ✓, while $1$ stays out as undefined: the answer is $x < 1$ or $x \\ge 4$. Check a second, independent way in between: $x = 2$ gives $\\frac{7}{1} = 7$, which is not $\\le 3$ ✗. (The choice $1 < x \\le 4$ SWAPS BETWEEN AND OUTSIDE and accepts $x = 2$, just rejected ✗; the choice $x \\le 1$ or $x \\ge 4$ INCLUDES THE DENOMINATOR ZERO; the choice $x \\ge 4$ LOSES THE LEFT BRANCH, where all the small solutions live.)',
    },
    {
      q: 'Solve $\\frac{6}{x+2} > 3$.',
      choices: ['$x < -2$ or $x > 0$', '$-2 \\le x \\le 0$', '$-2 < x < 0$', '$x < 0$'],
      answer: 2,
      solution:
        'Subtract $3$ and combine: $\\frac{6}{x+2} - 3 = \\frac{6 - 3(x+2)}{x+2} = \\frac{-3x}{x+2} > 0$. The key points are $0$ (top zero) and $-2$ (bottom zero), and the fraction is positive between them: for $-2 < x < 0$ the top $-3x$ is positive while the bottom is positive too. Test $x = -1$: $\\frac{6}{1} = 6 > 3$ ✓. Check a second, independent way outside: $x = 1$ gives $\\frac{6}{3} = 2$, which is not $> 3$ ✗, and $x = -3$ gives $\\frac{6}{-1} = -6$ ✗. (The choice $x < -2$ or $x > 0$ SWAPS BETWEEN AND OUTSIDE; the choice $-2 \\le x \\le 0$ INCLUDES both key points, where the fraction is undefined or equals exactly $3$; the choice $x < 0$ is what MULTIPLYING BY $x+2$ WITHOUT KNOWING ITS SIGN produces, since $6 > 3x + 6$ gives $x < 0$ — and it wrongly accepts $x = -3$, just rejected ✗.)',
    },
  ],
  // p10 — a quadratic numerator over a linear denominator.
  [
    {
      q: 'Solve $\\frac{x^2 - 16}{x - 2} \\ge 0$.',
      choices: [
        '$-4 \\le x \\le 2$ or $x \\ge 4$',
        '$-4 \\le x < 2$ or $x \\ge 4$',
        '$x \\le -4$ or $2 < x \\le 4$',
        '$-4 < x < 2$ or $x > 4$',
      ],
      answer: 1,
      solution:
        'Factor the top: $\\frac{(x-4)(x+4)}{x-2}$, with key points $-4$, $2$, and $4$. Testing one number in each interval: $x = -5$ gives $\\frac{9}{-7} < 0$ ✗; $x = 0$ gives $\\frac{-16}{-2} = 8 > 0$ ✓; $x = 3$ gives $\\frac{-7}{1} = -7 < 0$ ✗; $x = 5$ gives $\\frac{9}{3} = 3 > 0$ ✓. The numerator zeros $-4$ and $4$ give a value of $0$, which a $\\ge$ accepts, while $x = 2$ is undefined and must go. The answer is $-4 \\le x < 2$ or $x \\ge 4$. Check a second, independent way at the boundary: $x = -4$ gives $\\frac{0}{-6} = 0 \\ge 0$ ✓. (The choice $-4 \\le x \\le 2$ or $x \\ge 4$ INCLUDES THE DENOMINATOR ZERO; the choice $x \\le -4$ or $2 < x \\le 4$ is the whole chart FLIPPED; the choice $-4 < x < 2$ or $x > 4$ DROPS BOTH NUMERATOR ZEROS, which the $\\ge$ keeps.)',
    },
    {
      q: 'Solve $\\frac{x^2 - 25}{x + 2} \\le 0$.',
      choices: [
        '$x \\le -5$ or $-2 \\le x \\le 5$',
        '$x < -5$ or $-2 < x < 5$',
        '$x \\le -5$ or $-2 < x \\le 5$',
        '$-5 \\le x < -2$ or $x \\ge 5$',
      ],
      answer: 2,
      solution:
        'Factor the top: $\\frac{(x-5)(x+5)}{x+2}$, with key points $-5$, $-2$, and $5$. Testing one number in each interval: $x = -6$ gives $\\frac{11}{-4} = -2.75 < 0$ ✓; $x = -3$ gives $\\frac{-16}{-1} = 16 > 0$ ✗; $x = 0$ gives $\\frac{-25}{2} = -12.5 < 0$ ✓; $x = 6$ gives $\\frac{11}{8} > 0$ ✗. The numerator zeros $-5$ and $5$ are allowed by the $\\le$, and $x = -2$ is undefined, so the answer is $x \\le -5$ or $-2 < x \\le 5$. Check a second, independent way at the boundary: $x = 5$ gives $\\frac{0}{7} = 0 \\le 0$ ✓. (The choice $x \\le -5$ or $-2 \\le x \\le 5$ INCLUDES THE DENOMINATOR ZERO; the choice $x < -5$ or $-2 < x < 5$ DROPS BOTH NUMERATOR ZEROS; the choice $-5 \\le x < -2$ or $x \\ge 5$ is the whole chart FLIPPED and accepts $x = -3$, just rejected ✗.)',
    },
    {
      q: 'How many integers $x$ with $-8 \\le x \\le 8$ satisfy $\\frac{x^2 - 36}{x - 1} \\le 0$?',
      choices: ['$8$', '$6$', '$9$', '$5$'],
      answer: 0,
      solution:
        'Factor the top: $\\frac{(x-6)(x+6)}{x-1}$, with key points $-6$, $1$, and $6$. Testing one number in each interval: $x = -7$ gives $\\frac{13}{-8} < 0$ ✓; $x = 0$ gives $\\frac{-36}{-1} = 36 > 0$ ✗; $x = 2$ gives $\\frac{-32}{1} = -32 < 0$ ✓; $x = 7$ gives $\\frac{13}{6} > 0$ ✗. Adding the numerator zeros $\\pm 6$ and barring $x = 1$, the solution is $x \\le -6$ or $1 < x \\le 6$. Within $-8 \\le x \\le 8$ that gives $-8, -7, -6$ and $2, 3, 4, 5, 6$ — eight integers. Check a second, independent way at the two boundaries: $x = -6$ gives $\\frac{0}{-7} = 0 \\le 0$ ✓ and $x = 6$ gives $\\frac{0}{5} = 0 \\le 0$ ✓. (The choice $6$ treats the inequality as strict and DROPS BOTH NUMERATOR ZEROS; the choice $9$ also counts $x = 1$, where the fraction is undefined; the choice $5$ keeps only the right-hand piece.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 15,
  sections: {
    '15.1': s151,
    '15.2': s152,
  },
}
