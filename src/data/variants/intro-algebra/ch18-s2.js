// Introduction to Algebra chapter 18 — variations for section 18.2
// (Multiplication). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - EVERY product is expanded in full before anything is claimed, and then
//    checked a SECOND, INDEPENDENT way: the original product and the finished
//    expansion are both evaluated at one number (usually $1$ or $2$) and the two
//    values must agree. A coefficient plucked out by the degree-pair shortcut is
//    always confirmed against the full expansion, never the other way round.
//  - The two look-alikes are kept strictly apart: a sum times a difference has
//    NO middle term, a squared binomial has one, and each is used as the other’s
//    distractor on purpose.
//  - Exponents ADD when powers multiply. The trap of multiplying them appears as
//    a named distractor rather than as an accident.
//  - Every distractor is a specific mistake, worked out in the solution so the
//    wrong route is visible: THE UNVISITED TERM (a factor that never reached the
//    last term), THE MULTIPLIED EXPONENT ($x^a \cdot x^b$ read as $x^{ab}$), THE
//    LOST MINUS (two middle terms added by size instead of by sign), THE MISSING
//    PAIR (one degree pair skipped when hunting a single coefficient), THE
//    SWAPPED ROLES (the sum and the product of two constants traded places), and
//    THE WRONG QUESTION (reporting the constant term, the leading coefficient,
//    or the perimeter when something else was asked for).
//  - No two choices inside an item name the same polynomial or the same number,
//    even written two different ways.

const s182 = [
  // p1 — powers of the same variable multiply by ADDING exponents. v1 is a plain
  //      two-factor product, v2 runs the rule backwards to find a missing
  //      exponent, v3 uses three factors and hides an exponent of 1.
  [
    {
      q: 'Simplify: $y^4 \\cdot y^7$.',
      choices: ['$y^{28}$', '$y^{11}$', '$2y^{11}$', '$y^{3}$'],
      answer: 1,
      solution:
        'When powers of the same variable are multiplied, the exponents ADD: $y^4 \\cdot y^7 = y^{4+7} = y^{11}$. Check a second way by counting letters instead of using the rule: $y^4$ is four $y$s and $y^7$ is seven $y$s, so writing them side by side gives eleven $y$s in one long product ✓. (THE MULTIPLIED EXPONENT gives $y^{28}$ from $4 \\times 7$ — that pattern belongs to $(y^4)^7$, not to a product ✗. Subtracting gives $y^3$, which is the division rule wearing the wrong hat ✗. And $2y^{11}$ adds the two invisible coefficients of $1$, but coefficients MULTIPLY: $1 \\times 1 = 1$ ✗.)',
    },
    {
      q: 'Suppose $m^6 \\cdot m^{n} = m^{15}$ for a whole number $n$. What is $n$?',
      choices: ['$\\frac{5}{2}$', '$21$', '$9$', '$-9$'],
      answer: 2,
      solution:
        'Exponents add across a product, so the statement says $6 + n = 15$, giving $n = 9$. Check a second way by building the answer forwards rather than solving: $m^6 \\cdot m^9$ is six $m$s followed by nine $m$s, which is fifteen $m$s in all — exactly $m^{15}$ ✓. (THE MULTIPLIED EXPONENT sets up $6n = 15$ and lands on $\\frac{5}{2}$, which is not even a whole number — a good warning sign ✗. Adding the two exponents in the problem gives $6 + 15 = 21$ ✗, and subtracting in the wrong order gives $6 - 15 = -9$ ✗.)',
    },
    {
      q: 'Simplify: $t^2 \\cdot t \\cdot t^6$.',
      choices: ['$3t^{9}$', '$t^{12}$', '$t^{8}$', '$t^{9}$'],
      answer: 3,
      solution:
        'A lonely $t$ carries an invisible exponent of $1$, so the three exponents are $2$, $1$, and $6$: they add to $2 + 1 + 6 = 9$, giving $t^9$. Check a second way by multiplying two factors at a time: $t^2 \\cdot t = t^3$, and then $t^3 \\cdot t^6 = t^9$ ✓ — same answer by a different grouping. (THE MULTIPLIED EXPONENT gives $2 \\times 1 \\times 6 = 12$ ✗. Treating the bare $t$ as contributing nothing gives $t^8$ ✗, and counting the three factors as coefficients gives $3t^9$, but $1 \\times 1 \\times 1 = 1$ ✗.)',
    },
  ],

  // p2 — a monomial distributes to EVERY term. v1 is a binomial, v2 runs the
  //      distribution backwards to recover the missing factor, v3 stretches to
  //      four terms so a skipped term is easy to make and easy to catch.
  [
    {
      q: 'Multiply: $7y(y^3 + 8)$.',
      choices: ['$7y^4 + 56y$', '$7y^4 + 8$', '$7y^3 + 56y$', '$7y^4 + 56$'],
      answer: 0,
      solution:
        'Distribute $7y$ to BOTH terms. First $7y \\cdot y^3 = 7y^4$, since the coefficients multiply ($7 \\times 1$) and the exponents add ($1 + 3 = 4$). Then $7y \\cdot 8 = 56y$. The product is $7y^4 + 56y$. Check a second way at $y = 1$: the original is $7(1 + 8) = 63$, and the expansion is $7 + 56 = 63$ ✓. (THE UNVISITED TERM leaves the $8$ alone and gives $7y^4 + 8$ ✗. Reading $y \\cdot y^3$ as $y^3$ forgets to add the exponents and gives $7y^3 + 56y$ ✗. Dropping the variable from the second product gives $7y^4 + 56$ ✗.)',
    },
    {
      q: 'Which polynomial makes $5t^3 \\cdot (\\text{?}) = 20t^7 - 35t^4$ a true statement?',
      choices: ['$4t^{10} - 7t^{7}$', '$15t^4 - 30t$', '$4t^4 - 7t$', '$4t^4 + 7t$'],
      answer: 2,
      solution:
        'Undo the distribution one term at a time. To reach $20t^7$ the coefficient must satisfy $5 \\times \\square = 20$, so it is $4$, and the exponent must satisfy $3 + \\square = 7$, so it is $4$: the first term is $4t^4$. To reach $-35t^4$: $5 \\times \\square = -35$ gives $-7$, and $3 + \\square = 4$ gives $1$, so the second term is $-7t$. Check a second way by multiplying forwards: $5t^3(4t^4 - 7t) = 20t^7 - 35t^4$ ✓, and at $t = 1$ both sides read $5(4 - 7) = -15$ and $20 - 35 = -15$ ✓. (THE MULTIPLIED EXPONENT run in reverse ADDS the exponents instead of undoing the addition, giving $4t^{10} - 7t^7$ ✗. Subtracting coefficients rather than dividing gives $15t^4 - 30t$ ✗, and $4t^4 + 7t$ loses the minus sign ✗.)',
    },
    {
      q: 'Multiply: $2x^3(x^4 - 5x^2 + 7x - 1)$.',
      choices: [
        '$2x^7 - 10x^5 + 14x^4 - 1$',
        '$2x^7 - 10x^5 + 14x^4 - 2x^3$',
        '$2x^7 - 5x^5 + 7x^4 - x^3$',
        '$2x^7 - 10x^5 + 14x^4 + 2x^3$',
      ],
      answer: 1,
      solution:
        'Four terms means four products, and $2x^3$ must reach every one of them: $2x^3 \\cdot x^4 = 2x^7$, $2x^3 \\cdot (-5x^2) = -10x^5$, $2x^3 \\cdot 7x = 14x^4$, and $2x^3 \\cdot (-1) = -2x^3$. Coefficients multiply, exponents add. The product is $2x^7 - 10x^5 + 14x^4 - 2x^3$. Check a second way at $x = 1$: the original is $2(1 - 5 + 7 - 1) = 2 \\times 2 = 4$, and the expansion is $2 - 10 + 14 - 2 = 4$ ✓. (THE UNVISITED TERM copies the $-1$ straight down for $2x^7 - 10x^5 + 14x^4 - 1$, worth $5$ at $x = 1$ ✗. Multiplying only the exponents through and leaving the $2$ behind after the first term gives $2x^7 - 5x^5 + 7x^4 - x^3$, worth $3$ ✗. And $+2x^3$ at the end flips a sign that belongs to the $-1$ ✗.)',
    },
  ],

  // p3 — binomial times binomial with leading coefficient 1. v1 is two positive
  //      constants, v2 reverses the question and asks which product builds a
  //      given trinomial, v3 mixes the signs.
  [
    {
      q: 'Multiply: $(y + 9)(y + 4)$.',
      choices: ['$y^2 + 36y + 13$', '$y^2 + 36$', '$y^2 + 13y + 36$', '$y^2 + 13y + 13$'],
      answer: 2,
      solution:
        'Every term meets every term, so there are four products: $y \\cdot y = y^2$, $y \\cdot 4 = 4y$, $9 \\cdot y = 9y$, and $9 \\cdot 4 = 36$. The two middle terms combine: $4y + 9y = 13y$. The product is $y^2 + 13y + 36$ — the $13$ comes from ADDING $9$ and $4$, the $36$ from MULTIPLYING them. Check a second way at $y = 2$: the original is $(11)(6) = 66$, and the expansion is $4 + 26 + 36 = 66$ ✓. (THE SWAPPED ROLES trades the sum and the product for $y^2 + 36y + 13$ ✗. Skipping the middle entirely gives $y^2 + 36$ ✗, and using the sum in both slots gives $y^2 + 13y + 13$ ✗.)',
    },
    {
      q: 'Which product expands to $t^2 + 15t + 56$?',
      choices: ['$(t+7)(t+8)$', '$(t+4)(t+14)$', '$(t+5)(t+10)$', '$(t-7)(t-8)$'],
      answer: 0,
      solution:
        'In $(t + a)(t + b)$ the middle coefficient is $a + b$ and the constant is $ab$, so the two numbers must add to $15$ AND multiply to $56$. The pair $7$ and $8$ does both. Check a second way by expanding it in full: $(t+7)(t+8) = t^2 + 8t + 7t + 56 = t^2 + 15t + 56$ ✓. Each loser fails exactly one of the two tests: $(t+4)(t+14)$ has the right product but expands to $t^2 + 18t + 56$ ✗; $(t+5)(t+10)$ has the right sum but expands to $t^2 + 15t + 50$ ✗; and $(t-7)(t-8)$ keeps the constant but flips the middle to $t^2 - 15t + 56$ ✗.',
    },
    {
      q: 'Multiply: $(m - 6)(m + 11)$.',
      choices: ['$m^2 + 17m - 66$', '$m^2 - 5m - 66$', '$m^2 + 5m + 66$', '$m^2 + 5m - 66$'],
      answer: 3,
      solution:
        'The four products are $m \\cdot m = m^2$, $m \\cdot 11 = 11m$, $-6 \\cdot m = -6m$, and $-6 \\cdot 11 = -66$. The middle terms have opposite signs, so they partly cancel: $11m - 6m = 5m$. The product is $m^2 + 5m - 66$. Check a second way at $m = 2$: the original is $(-4)(13) = -52$, and the expansion is $4 + 10 - 66 = -52$ ✓. (THE LOST MINUS adds the middles by size for $m^2 + 17m - 66$ ✗. Taking the middle as $6m - 11m$ gives $m^2 - 5m - 66$ ✗, and $m^2 + 5m + 66$ forgets that a negative times a positive stays negative ✗.)',
    },
  ],

  // p4 — the degree of a PRODUCT is the SUM of the degrees. v1 is two factors,
  //      v2 hands back the product degree and asks for a missing factor degree,
  //      v3 uses three explicit factors.
  [
    {
      q: 'A polynomial of degree $5$ is multiplied by a polynomial of degree $6$. What is the degree of the product?',
      choices: ['$30$', '$6$', '$1$', '$11$'],
      answer: 3,
      solution:
        'The highest power of the product comes from the two leading terms multiplying each other, and exponents add when powers multiply: $5 + 6 = 11$. Nothing else in either polynomial can reach that high, so nothing can cancel it and the degree is exactly $11$. Check a second way with the simplest example of each size: $x^5 \\cdot x^6 = x^{11}$ ✓. (Multiplying the degrees gives $30$ — the trap the question is built on ✗. Taking the larger degree, $6$, is the rule for SUMS, not products ✗, and subtracting gives $1$ ✗.)',
    },
    {
      q: 'A polynomial of degree $4$ is multiplied by a second polynomial, and the product has degree $13$. What is the degree of the second polynomial?',
      choices: ['$9$', '$17$', '$52$', '$\\frac{13}{4}$'],
      answer: 0,
      solution:
        'Degrees add across a product, so the missing degree $d$ satisfies $4 + d = 13$, giving $d = 9$. Check a second way by running it forwards: a degree-$4$ leading term times a degree-$9$ leading term is $x^4 \\cdot x^9 = x^{13}$, which is degree $13$ ✓. (Adding the two numbers in the problem gives $17$ ✗, multiplying them gives $52$ ✗, and treating degrees as multiplying gives $4d = 13$ and the non-whole-number $\\frac{13}{4}$ ✗.)',
    },
    {
      q: 'What is the degree of $(2x^3 - x + 5)(x^2 + 7)(3x^5 - x^4)$?',
      choices: ['$30$', '$10$', '$5$', '$8$'],
      answer: 1,
      solution:
        'Read the degree of each factor from its highest power: $3$, then $2$, then $5$. Degrees add across a product, so the degree is $3 + 2 + 5 = 10$. Check a second way by building the leading term itself: $2x^3 \\cdot x^2 \\cdot 3x^5 = 6x^{10}$, and no other combination of terms reaches degree $10$, so it survives ✓. (Multiplying the degrees gives $3 \\times 2 \\times 5 = 30$ ✗. Taking the largest single degree gives $5$ ✗, and skipping the middle factor gives $3 + 5 = 8$ ✗.)',
    },
  ],

  // p5 — a sum times a difference wipes out the middle term. v1 keeps the
  //      coefficient at 1, v2 puts a coefficient on the variable so it must be
  //      squared too, v3 reverses the question: which product loses its middle?
  [
    {
      q: 'Multiply: $(y + 11)(y - 11)$.',
      choices: ['$y^2 + 121$', '$y^2 - 22y + 121$', '$y^2 - 121$', '$y^2 - 22y - 121$'],
      answer: 2,
      solution:
        'Write all four products before deciding anything: $y \\cdot y = y^2$, $y \\cdot (-11) = -11y$, $11 \\cdot y = 11y$, and $11 \\cdot (-11) = -121$. The two middle terms are exact opposites, so they cancel and the answer is $y^2 - 121$. Check a second way at $y = 2$: the original is $(13)(-9) = -117$, and the expansion is $4 - 121 = -117$ ✓. (The constant is negative, so $y^2 + 121$ mishandles $11 \\times (-11)$ ✗. The choice $y^2 - 22y + 121$ is the expansion of $(y - 11)^2$, a DIFFERENT product that does keep a middle term ✗, and $y^2 - 22y - 121$ borrows that middle term while keeping this constant ✗.)',
    },
    {
      q: 'Multiply: $(3t - 7)(3t + 7)$.',
      choices: ['$9t^2 - 49$', '$9t^2 + 49$', '$3t^2 - 49$', '$9t^2 - 21t - 49$'],
      answer: 0,
      solution:
        'The four products are $3t \\cdot 3t = 9t^2$, $3t \\cdot 7 = 21t$, $-7 \\cdot 3t = -21t$, and $-7 \\cdot 7 = -49$. The middles cancel exactly, leaving $9t^2 - 49$. Note that the $3$ gets squared along with the $t$: $3 \\times 3 = 9$. Check a second way at $t = 2$: the original is $(6 - 7)(6 + 7) = (-1)(13) = -13$, and the expansion is $36 - 49 = -13$ ✓. (Getting $9t^2 + 49$ misses that one constant is negative ✗. Leaving the coefficient unsquared gives $3t^2 - 49$, which reads $-37$ at $t = 2$ ✗, and writing down only one of the two middle terms gives $9t^2 - 21t - 49$, which reads $-55$ ✗.)',
    },
    {
      q: 'Exactly one of these products expands to a polynomial with NO $n$ term. Which one?',
      choices: ['$(n + 6)(n + 6)$', '$(n - 6)(n - 6)$', '$(n - 6)(n + 3)$', '$(n - 6)(n + 6)$'],
      answer: 3,
      solution:
        'A middle term disappears only when the two cross products are exact opposites, and that needs the same number with opposite signs in the two factors: $(n - 6)(n + 6) = n^2 + 6n - 6n - 36 = n^2 - 36$ ✓. Check a second way by expanding all four and looking at the $n$ terms: $(n+6)(n+6) = n^2 + 12n + 36$ ✗, $(n-6)(n-6) = n^2 - 12n + 36$ ✗, $(n-6)(n+3) = n^2 - 3n - 18$ ✗, and only the sum-times-difference has an $n$ coefficient of $0$. The two squared binomials are the tempting ones: their cross products have the SAME sign, so instead of cancelling they double.',
    },
  ],

  // p6 — binomial times binomial with coefficients on both variables, so the two
  //      middle terms are genuinely different sizes. v1 and v2 are plain
  //      expansions with opposite sign patterns, v3 wraps it in a rectangle.
  [
    {
      q: 'Multiply: $(4y - 3)(3y + 7)$.',
      choices: ['$12y^2 + 37y - 21$', '$12y^2 + 19y - 21$', '$12y^2 - 19y - 21$', '$12y^2 + 19y + 21$'],
      answer: 1,
      solution:
        'The four products are $4y \\cdot 3y = 12y^2$, $4y \\cdot 7 = 28y$, $-3 \\cdot 3y = -9y$, and $-3 \\cdot 7 = -21$. The middle terms have opposite signs, so combining them shrinks the total: $28y - 9y = 19y$. The product is $12y^2 + 19y - 21$. Check a second way at $y = 2$: the original is $(8 - 3)(6 + 7) = (5)(13) = 65$, and the expansion is $48 + 38 - 21 = 65$ ✓. (THE LOST MINUS adds the middles by size, $28 + 9 = 37$, for $12y^2 + 37y - 21$ ✗. Reversing which middle is negative gives $12y^2 - 19y - 21$ ✗, and $12y^2 + 19y + 21$ misses that $-3 \\times 7$ is negative ✗.)',
    },
    {
      q: 'Multiply: $(5t + 2)(2t - 9)$.',
      choices: ['$10t^2 - 49t - 18$', '$10t^2 - 18$', '$10t^2 - 41t + 18$', '$10t^2 - 41t - 18$'],
      answer: 3,
      solution:
        'All four products: $5t \\cdot 2t = 10t^2$, $5t \\cdot (-9) = -45t$, $2 \\cdot 2t = 4t$, and $2 \\cdot (-9) = -18$. The middles pull against each other: $-45t + 4t = -41t$. The product is $10t^2 - 41t - 18$. Check a second way at $t = 2$: the original is $(10 + 2)(4 - 9) = (12)(-5) = -60$, and the expansion is $40 - 82 - 18 = -60$ ✓. (THE LOST MINUS makes both middles negative for $-49t$, giving a value of $-76$ at $t = 2$ ✗. Multiplying only the first terms and only the last terms gives $10t^2 - 18$, which skips the cross products entirely and reads $22$ ✗, and $10t^2 - 41t + 18$ mishandles $2 \\times (-9)$ ✗.)',
    },
    {
      q: 'A rectangular banner is $(2w + 7)$ inches wide and $(5w - 4)$ inches tall. Which expression gives its area in square inches?',
      choices: ['$10w^2 + 27w - 28$', '$10w^2 + 43w - 28$', '$14w + 6$', '$10w^2 + 27w + 28$'],
      answer: 0,
      solution:
        'Area is width times height, so expand $(2w + 7)(5w - 4)$: $2w \\cdot 5w = 10w^2$, $2w \\cdot (-4) = -8w$, $7 \\cdot 5w = 35w$, and $7 \\cdot (-4) = -28$. Combining the middles gives $-8w + 35w = 27w$, so the area is $10w^2 + 27w - 28$. Check a second way with a real banner, $w = 2$: it measures $11$ by $6$, an area of $66$, and the expansion gives $40 + 54 - 28 = 66$ ✓. (THE LOST MINUS adds the middles by size, $35 + 8 = 43$ ✗. THE WRONG QUESTION computes the perimeter, $2(2w + 7) + 2(5w - 4) = 14w + 6$, which is only $34$ for that banner ✗, and $10w^2 + 27w + 28$ flips the sign of the constant ✗.)',
    },
  ],

  // p7 — the constant term of a product is the product of the constant terms.
  //      v1 reads it off two trinomials, v2 works backwards to a missing
  //      constant, v3 stretches to three factors so the sign has to be tracked.
  [
    {
      q: 'What is the constant term of the product $(5y^3 - 2y + 7)(3y^2 + y - 8)$?',
      choices: ['$56$', '$-1$', '$15$', '$-56$'],
      answer: 3,
      solution:
        'A constant can only be built from constant times constant — every other pairing drags at least one $y$ along with it. So the constant term is $7 \\times (-8) = -56$, and no expansion is needed. Check a second way by evaluating at $y = 0$, since every term with a variable dies there and only the constant term survives: the original becomes $(0 - 0 + 7)(0 + 0 - 8) = 7 \\times (-8) = -56$ ✓. (Dropping the minus gives $56$ ✗. Adding the constants instead of multiplying gives $7 - 8 = -1$ ✗, and THE WRONG QUESTION reports the LEADING coefficient, $5 \\times 3 = 15$, which lives at the other end of the polynomial ✗.)',
    },
    {
      q: 'The product $(4t^2 + t - 9)(2t^2 - 5t + c)$ has constant term $-63$. What is $c$?',
      choices: ['$7$', '$-7$', '$-54$', '$\\frac{1}{7}$'],
      answer: 0,
      solution:
        'The constant term of a product is the product of the constant terms, so $(-9) \\times c = -63$, giving $c = 7$. Check a second way by evaluating both sides at $t = 0$, where only constant terms survive: the left side becomes $(0 + 0 - 9)(0 - 0 + 7) = (-9)(7) = -63$, matching the given constant ✓. (Solving $9c = -63$ ignores the minus sign on the $-9$ and gives $-7$ ✗. Adding instead of multiplying, $-9 + c = -63$, gives $-54$ ✗, and dividing the wrong way round, $\\frac{-9}{-63}$, gives $\\frac{1}{7}$ ✗.)',
    },
    {
      q: 'What is the constant term of the expansion of $(3n - 4)(2n + 5)(n - 6)$?',
      choices: ['$-120$', '$-20$', '$120$', '$-5$'],
      answer: 2,
      solution:
        'Take the constant from each factor and multiply: $(-4) \\times 5 \\times (-6)$. Work left to right: $(-4) \\times 5 = -20$, then $-20 \\times (-6) = 120$. Two negative factors make the result positive. Check a second way by expanding in full: $(3n - 4)(2n + 5) = 6n^2 + 7n - 20$, and $(6n^2 + 7n - 20)(n - 6) = 6n^3 - 29n^2 - 62n + 120$, whose constant term is $120$ ✓ — and at $n = 1$ the original reads $(-1)(7)(-5) = 35$ while the expansion reads $6 - 29 - 62 + 120 = 35$ ✓. (Counting the negatives carelessly gives $-120$ ✗. Stopping after two factors gives $-20$ ✗, and adding the constants gives $-4 + 5 - 6 = -5$ ✗.)',
    },
  ],

  // p8 — binomial times trinomial: six little products, then collect. v1 has a
  //      negative constant in the binomial, v2 has a coefficient on the
  //      variable, v3 dresses the same work as the volume of a box.
  [
    {
      q: 'Multiply: $(y - 5)(y^2 + 3y - 2)$.',
      choices: [
        '$y^3 + 8y^2 - 17y + 10$',
        '$y^3 - 2y^2 - 17y - 10$',
        '$y^3 - 2y^2 + 13y + 10$',
        '$y^3 - 2y^2 - 17y + 10$',
      ],
      answer: 3,
      solution:
        'Two terms times three terms is six products, and all six get written down before anything combines. The $y$ gives $y^3 + 3y^2 - 2y$. The $-5$ gives $-5y^2 - 15y + 10$ — note $-5 \\times (-2) = +10$. Now collect: $3y^2 - 5y^2 = -2y^2$ and $-2y - 15y = -17y$. The product is $y^3 - 2y^2 - 17y + 10$. Check a second way at $y = 2$: the original is $(2 - 5)(4 + 6 - 2) = (-3)(8) = -24$, and the expansion is $8 - 8 - 34 + 10 = -24$ ✓. (Adding the squared coefficients as $3 + 5$ gives $y^3 + 8y^2 - 17y + 10$, worth $16$ at $y = 2$ ✗. Taking $-5 \\times (-2)$ as $-10$ gives $y^3 - 2y^2 - 17y - 10$, worth $-44$ ✗, and combining the $y$ terms as $-2 + 15$ gives $y^3 - 2y^2 + 13y + 10$, worth $36$ ✗.)',
    },
    {
      q: 'Multiply: $(2m + 3)(3m^2 - m + 5)$.',
      choices: [
        '$6m^3 + 7m^2 + 7m + 15$',
        '$6m^3 - 2m^2 + 10m + 15$',
        '$6m^3 + 11m^2 + 7m + 15$',
        '$6m^3 + 7m^2 + 7m + 8$',
      ],
      answer: 0,
      solution:
        'Six products again. The $2m$ gives $6m^3 - 2m^2 + 10m$. The $3$ gives $9m^2 - 3m + 15$. Collect the like terms: $-2m^2 + 9m^2 = 7m^2$ and $10m - 3m = 7m$. The product is $6m^3 + 7m^2 + 7m + 15$. Check a second way at $m = 2$: the original is $(4 + 3)(12 - 2 + 5) = (7)(15) = 105$, and the expansion is $48 + 28 + 14 + 15 = 105$ ✓. (Letting the $3$ reach only the last term gives $6m^3 - 2m^2 + 10m + 15$, worth $75$ at $m = 2$ ✗. Adding the squared coefficients as $2 + 9$ gives $6m^3 + 11m^2 + 7m + 15$, worth $121$ ✗, and adding the constants $3 + 5$ instead of multiplying gives a constant of $8$, worth $98$ ✗.)',
    },
    {
      q: 'A storage box is $(n + 4)$ feet tall, and its base has area $(2n^2 - 3n + 6)$ square feet. Which expression gives the volume of the box in cubic feet?',
      choices: [
        '$2n^3 - 3n^2 + 6n + 24$',
        '$2n^3 + 11n^2 - 6n + 24$',
        '$2n^3 + 5n^2 - 6n + 24$',
        '$2n^3 + 5n^2 + 18n + 24$',
      ],
      answer: 2,
      solution:
        'Volume is base area times height, so expand $(n + 4)(2n^2 - 3n + 6)$. The $n$ gives $2n^3 - 3n^2 + 6n$, and the $4$ gives $8n^2 - 12n + 24$. Collect: $-3n^2 + 8n^2 = 5n^2$ and $6n - 12n = -6n$. The volume is $2n^3 + 5n^2 - 6n + 24$. Check a second way with a real box, $n = 2$: it is $6$ feet tall on a base of $8 - 6 + 6 = 8$ square feet, a volume of $48$, and the expansion gives $16 + 20 - 12 + 24 = 48$ ✓. (Letting the $4$ reach only the constant gives $2n^3 - 3n^2 + 6n + 24$, worth $40$ ✗. Adding the squared coefficients as $3 + 8$ gives $2n^3 + 11n^2 - 6n + 24$, worth $72$ ✗, and adding $6 + 12$ instead of subtracting gives $2n^3 + 5n^2 + 18n + 24$, worth $96$ ✗.)',
    },
  ],

  // p9 — pull ONE coefficient out of a product by listing every degree pair that
  //      adds to the target. v1 hunts the squared term, v2 hunts a cubed term in
  //      a product with a missing constant, v3 reverses it into a hunt for the
  //      constant that makes a named coefficient come out right.
  [
    {
      q: 'What is the coefficient of $y^2$ in the product $(5y + 3)(4y^2 - 7y + 6)$?',
      choices: ['$-35$', '$12$', '$-47$', '$-23$'],
      answer: 3,
      solution:
        'List EVERY pair of terms whose degrees add to $2$, and no others. The $5y$ (degree $1$) pairs with $-7y$ (degree $1$): $5 \\times (-7) = -35$. The $3$ (degree $0$) pairs with $4y^2$ (degree $2$): $3 \\times 4 = 12$. Nothing else can reach degree $2$. Total: $-35 + 12 = -23$. Check a second way by expanding the whole thing: $5y(4y^2 - 7y + 6) = 20y^3 - 35y^2 + 30y$ and $3(4y^2 - 7y + 6) = 12y^2 - 21y + 18$, so the product is $20y^3 - 23y^2 + 9y + 18$ — the $y^2$ coefficient is indeed $-23$ ✓, and at $y = 1$ the original reads $(8)(3) = 24$ while the expansion reads $20 - 23 + 9 + 18 = 24$ ✓. (THE MISSING PAIR forgets the $3 \\cdot 4y^2$ contribution and stops at $-35$ ✗, or keeps only that one and answers $12$ ✗. Subtracting the second contribution instead of adding gives $-47$ ✗.)',
    },
    {
      q: 'What is the coefficient of $t^3$ in the product $(t^2 - 6)(5t^3 + 2t^2 - t)$?',
      choices: ['$-31$', '$-30$', '$-1$', '$29$'],
      answer: 0,
      solution:
        'Hunt for degree pairs adding to $3$. From $t^2$ (degree $2$) the partner must have degree $1$: $t^2 \\cdot (-t) = -t^3$, contributing $-1$. From $-6$ (degree $0$) the partner must have degree $3$: $-6 \\cdot 5t^3 = -30t^3$, contributing $-30$. The first factor has no degree-$1$ term and the second has no constant, so nothing else qualifies. Total: $-1 - 30 = -31$. Check a second way by expanding in full: $t^2(5t^3 + 2t^2 - t) = 5t^5 + 2t^4 - t^3$ and $-6(5t^3 + 2t^2 - t) = -30t^3 - 12t^2 + 6t$, so the product is $5t^5 + 2t^4 - 31t^3 - 12t^2 + 6t$ ✓ — and at $t = 1$ the original reads $(-5)(6) = -30$ while the expansion reads $5 + 2 - 31 - 12 + 6 = -30$ ✓. (THE MISSING PAIR gives $-30$ or $-1$ depending on which contribution is dropped ✗, and $29$ subtracts the smaller from the larger ✗.)',
    },
    {
      q: 'For which value of $k$ does the product $(3m + k)(2m^2 - 5m + 4)$ have an $m^2$ coefficient of $-3$?',
      choices: ['$12$', '$-9$', '$6$', '$-\\frac{3}{2}$'],
      answer: 2,
      solution:
        'Only two degree pairs reach $m^2$: $3m \\cdot (-5m) = -15m^2$, and $k \\cdot 2m^2 = 2km^2$. So the $m^2$ coefficient is $-15 + 2k$, and setting $-15 + 2k = -3$ gives $2k = 12$, so $k = 6$. Check a second way by expanding with $k = 6$ and reading the answer off: $(3m + 6)(2m^2 - 5m + 4) = 6m^3 - 15m^2 + 12m + 12m^2 - 30m + 24 = 6m^3 - 3m^2 - 18m + 24$, whose $m^2$ coefficient is $-3$ ✓ (and at $m = 1$ the original reads $(9)(1) = 9$ while the expansion reads $6 - 3 - 18 + 24 = 9$ ✓). (Forgetting that the $2m^2$ carries a coefficient of $2$ turns the equation into $-15 + k = -3$ and gives $12$ ✗. Losing the minus on the $-15$ gives $15 + 2k = -3$ and $k = -9$ ✗, and THE MISSING PAIR uses only $2k = -3$ for $-\\frac{3}{2}$ ✗.)',
    },
  ],

  // p10 — the sum of all the coefficients of $p$ is $p(1)$. v1 is a triple
  //       product of binomials, v2 runs the shortcut backwards to find a missing
  //       constant, v3 uses two longer factors where expanding is real work.
  [
    {
      q: 'What is the sum of all the coefficients of the expansion of $(4y - 5)(y + 3)(2y - 7)$?',
      choices: ['$-20$', '$20$', '$105$', '$8$'],
      answer: 1,
      solution:
        'Substituting $y = 1$ turns every power of $y$ into $1$, so the value at $1$ IS the sum of the coefficients — and the factored form can be evaluated without expanding: $(4 - 5)(1 + 3)(2 - 7) = (-1)(4)(-5) = 20$. Check a second way by actually expanding and adding: $(4y - 5)(y + 3) = 4y^2 + 7y - 15$, and $(4y^2 + 7y - 15)(2y - 7) = 8y^3 - 14y^2 - 79y + 105$. Adding those coefficients: $8 - 14 - 79 + 105 = 20$ ✓ — the shortcut and the long road agree. (Mishandling one of the two negative factors gives $-20$ ✗. THE WRONG QUESTION reports the constant term, $105$, which is the value at $y = 0$, not at $y = 1$ ✗, or the leading coefficient, $8$ ✗.)',
    },
    {
      q: 'The coefficients of the expansion of $(3t + 5)(t^2 - 4t + a)$ add up to $-16$. What is $a$?',
      choices: ['$-13$', '$1$', '$5$', '$-21$'],
      answer: 1,
      solution:
        'The sum of the coefficients is the value at $t = 1$, so evaluate the factored form there: $(3 + 5)(1 - 4 + a) = 8(a - 3)$. Setting $8(a - 3) = -16$ gives $a - 3 = -2$, so $a = 1$. Check a second way by expanding with $a = 1$ and adding the coefficients directly: $(3t + 5)(t^2 - 4t + 1) = 3t^3 - 12t^2 + 3t + 5t^2 - 20t + 5 = 3t^3 - 7t^2 - 17t + 5$, and $3 - 7 - 17 + 5 = -16$ ✓. (Evaluating only the second factor gives $1 - 4 + a = -16$ and $a = -13$ ✗. Losing the minus sign gives $8(a - 3) = 16$ and $a = 5$ ✗, and adding the factor values instead of multiplying gives $8 + (a - 3) = -16$ and $a = -21$ ✗.)',
    },
    {
      q: 'What is the sum of all the coefficients of the expansion of $(n^2 - 4n + 6)(2n^3 + n - 8)$?',
      choices: ['$-2$', '$15$', '$-48$', '$-15$'],
      answer: 3,
      solution:
        'No need to face a degree-$5$ expansion: the sum of the coefficients is the value at $n = 1$, and each factor can be evaluated on its own. The first gives $1 - 4 + 6 = 3$ and the second gives $2 + 1 - 8 = -5$, so the sum is $3 \\times (-5) = -15$. Check a second way by expanding in full and adding: $n^2(2n^3 + n - 8) = 2n^5 + n^3 - 8n^2$, $-4n(2n^3 + n - 8) = -8n^4 - 4n^2 + 32n$, and $6(2n^3 + n - 8) = 12n^3 + 6n - 48$, giving $2n^5 - 8n^4 + 13n^3 - 12n^2 + 38n - 48$. Adding: $2 - 8 + 13 - 12 + 38 - 48 = -15$ ✓. (Adding the two factor values instead of multiplying them gives $3 + (-5) = -2$ ✗. Dropping the minus gives $15$ ✗, and THE WRONG QUESTION reports the constant term $-48$, which is the value at $n = 0$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 18,
  sections: {
    '18.2': s182,
  },
}
