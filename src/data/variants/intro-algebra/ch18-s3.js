// Introduction to Algebra chapter 18 — variations for the CHALLENGE set
// (Polynomials).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every product is expanded IN FULL before any coefficient is quoted, and
//    every expansion is confirmed a SECOND, INDEPENDENT way by evaluating the
//    original expression and the expanded form at the same number (usually
//    $x = 2$) and checking the two values agree.
//  - Every "sum of the coefficients" key is confirmed BOTH by adding the
//    coefficients of the full expansion AND by substituting $x = 1$.
//  - Degrees of sums are computed by writing the combined polynomial out, never
//    by a rule of thumb; degrees of products come from adding the degrees of the
//    leading terms, with the coefficient product checked separately.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand back the answer and ask for the missing coefficient, ask for the
//    product of the roots' shifts instead of their sum, ask which degrees are
//    possible instead of which one occurs.
//  - Six traps run through this chapter, and every distractor is one of them,
//    named in the solution with its wrong route worked out. THE LOST MINUS: a
//    subtraction sign that never reached every term. THE MISSING PAIR: one
//    contributing product left off the list. THE WRONG RULE: adding exponents
//    where they multiply, or multiplying degrees where they add. THE HALF
//    SQUARE: only one copy of a doubled middle term. THE STUBBORN LEADER:
//    assuming a leading term cannot cancel. THE WRONG INPUT: evaluating at $0$
//    or at $1$ when the other one was wanted.
//  - No two choices inside an item name the same value, even written two ways.

const challenge = [
  // c1 — the degree of a SUM, computed, when leading terms cancel. v1 cancels
  //      one pair, v2 cancels two pairs and falls four places, v3 asks about a
  //      DIFFERENCE, where the minus sign decides what survives.
  [
    {
      q: 'What is the degree of $(7x^5 - 4x^3 + 2x) + (-7x^5 + x^4 - 6)$?',
      choices: ['$5$', '$3$', '$4$', '$10$'],
      answer: 2,
      solution:
        'Combine degree by degree and write the whole sum down before reading anything off. The fifth powers go first: $7x^5 + (-7x^5) = 0$ ✓. Nothing meets $x^4$, so $x^4$ survives alone. Nothing meets $-4x^3$ or $2x$ either, and the constants give $0 + (-6) = -6$. The sum is $x^4 - 4x^3 + 2x - 6$, whose highest exponent is $4$. Second check, a different route — evaluate everything at $x = 2$: the first polynomial gives $224 - 32 + 4 = 196$, the second gives $-224 + 16 - 6 = -214$, and $196 + (-214) = -18$; the combined polynomial gives $16 - 32 + 4 - 6 = -18$ ✓, so the collecting was done right. (THE STUBBORN LEADER answers $5$, treating the larger input degree as automatic ✗. THE WRONG RULE adds $5 + 5$ for $10$, which is the rule for products ✗. Choice $3$ crosses off the fifth powers and then crosses off the lonely $x^4$ as well, as though every leading term must pair with something ✗.)',
    },
    {
      q: 'Let $a(x) = 2x^6 - 5x^4 + x^2 - 3$ and $b(x) = -2x^6 + 5x^4 + 4x - 1$. What is the degree of $a(x) + b(x)$?',
      choices: ['$6$', '$4$', '$12$', '$2$'],
      answer: 3,
      solution:
        'Two pairs cancel here, not one. Sixth powers: $2x^6 + (-2x^6) = 0$ ✓. Fourth powers: $-5x^4 + 5x^4 = 0$ ✓. What is left is $x^2$, then $4x$, then $-3 + (-1) = -4$, so $a(x) + b(x) = x^2 + 4x - 4$ — degree $2$, a fall of four places. Second check at $x = 2$: $a(2) = 128 - 80 + 4 - 3 = 49$ and $b(2) = -128 + 80 + 8 - 1 = -41$, and $49 + (-41) = 8$; the collected polynomial gives $4 + 8 - 4 = 8$ ✓. (THE STUBBORN LEADER answers $6$ ✗. Choice $4$ spots the sixth-power cancellation, stops celebrating too soon, and never checks the fourth powers ✗. THE WRONG RULE adds $6 + 6$ for $12$ ✗.)',
    },
    {
      q: 'Let $u(x) = 3x^7 + x^5 - 2$ and $v(x) = 3x^7 - x^5 + x^3$. What is the degree of $u(x) - v(x)$?',
      choices: ['$3$', '$5$', '$7$', '$14$'],
      answer: 1,
      solution:
        'Subtracting means flipping the sign of every term of $v$: $3x^7 + x^5 - 2 - 3x^7 + x^5 - x^3$. Now the seventh powers cancel, but the fifth powers do the opposite — $x^5 - (-x^5) = 2x^5$, twice as big, not zero. The difference is $2x^5 - x^3 - 2$, degree $5$. Second check at $x = 2$: $u(2) = 384 + 32 - 2 = 414$ and $v(2) = 384 - 32 + 8 = 360$, so $u(2) - v(2) = 54$; the collected polynomial gives $2(32) - 8 - 2 = 54$ ✓. (THE LOST MINUS lets the subtraction sign reach the leading term only: then $x^5 + (-x^5) = 0$ and $+x^3$ survives, giving degree $3$ ✗. THE STUBBORN LEADER answers $7$, assuming a difference keeps the bigger degree ✗. THE WRONG RULE adds $7 + 7$ for $14$ ✗.)',
    },
  ],

  // c2 — one coefficient out of a product of TWO polynomials. v1 and v2 change
  //      which coefficient and which degrees are in play; v3 reverses the
  //      direction and hands back the coefficient to hunt for a missing number.
  [
    {
      q: 'What is the coefficient of $x^3$ in $(2x^2 - 5x + 3)(x^2 + 4x - 7)$?',
      choices: ['$8$', '$-5$', '$3$', '$13$'],
      answer: 2,
      solution:
        'Only pairs of terms whose degrees add to $3$ can land on $x^3$. List every one: $2x^2 \\cdot 4x = 8x^3$, and $-5x \\cdot x^2 = -5x^3$. The constant $3$ would need a degree-$3$ partner and there is none. Total: $8 + (-5) = 3$. Second check by expanding the whole product: $2x^2$ gives $2x^4 + 8x^3 - 14x^2$, $-5x$ gives $-5x^3 - 20x^2 + 35x$, and $3$ gives $3x^2 + 12x - 21$, so the product is $2x^4 + 3x^3 - 31x^2 + 47x - 21$ — the $x^3$ coefficient reads $3$ ✓. Confirm the expansion at $x = 2$: the original is $(8 - 10 + 3)(4 + 8 - 7) = (1)(5) = 5$, and the expansion is $32 + 24 - 124 + 94 - 21 = 5$ ✓. (THE MISSING PAIR keeps only $8$, or only $-5$ ✗. Choice $13$ adds the two sizes $8 + 5$ and throws away the minus sign ✗.)',
    },
    {
      q: 'What is the coefficient of $x^3$ in $(x^3 - 4x^2 + 2)(3x^2 + x - 5)$?',
      choices: ['$-9$', '$-5$', '$-1$', '$-4$'],
      answer: 0,
      solution:
        'Hunt for degree pairs adding to $3$. The $x^3$ needs a degree-$0$ partner: $x^3 \\cdot (-5) = -5x^3$. The $-4x^2$ needs a degree-$1$ partner: $-4x^2 \\cdot x = -4x^3$. The constant $2$ would need a degree-$3$ partner, and the second factor has none. Notice the first factor has no $x$ term at all, so there is no third contribution. Total: $-5 + (-4) = -9$. Second check by full expansion: $x^3$ gives $3x^5 + x^4 - 5x^3$, $-4x^2$ gives $-12x^4 - 4x^3 + 20x^2$, and $2$ gives $6x^2 + 2x - 10$, so the product is $3x^5 - 11x^4 - 9x^3 + 26x^2 + 2x - 10$ ✓. Confirm at $x = 2$: the original is $(8 - 16 + 2)(12 + 2 - 5) = (-6)(9) = -54$, and the expansion is $96 - 176 - 72 + 104 + 4 - 10 = -54$ ✓. (THE MISSING PAIR keeps only $-5$, or only $-4$ ✗. Choice $-1$ combines them as $-5 + 4$, dropping the minus that belongs to the $-4x^2$ ✗.)',
    },
    {
      q: 'In the expansion of $(x^2 + kx - 2)(x^2 + 3x + 5)$, the coefficient of $x^3$ is $7$. What is $k$?',
      choices: ['$7$', '$10$', '$2$', '$4$'],
      answer: 3,
      solution:
        'Work out the $x^3$ coefficient in terms of $k$ first. Pairs of degrees adding to $3$: $x^2 \\cdot 3x = 3x^3$, and $kx \\cdot x^2 = kx^3$. The $-2$ has no degree-$3$ partner. So the coefficient is $3 + k$, and $3 + k = 7$ gives $k = 4$. Second check by expanding with $k = 4$ and looking: $x^2$ gives $x^4 + 3x^3 + 5x^2$, $4x$ gives $4x^3 + 12x^2 + 20x$, and $-2$ gives $-2x^2 - 6x - 10$, so the product is $x^4 + 7x^3 + 15x^2 + 14x - 10$ — the $x^3$ coefficient is indeed $7$ ✓. Confirm that expansion at $x = 2$: the original is $(4 + 8 - 2)(4 + 6 + 5) = (10)(15) = 150$, and the expansion is $16 + 56 + 60 + 28 - 10 = 150$ ✓. (THE MISSING PAIR forgets the $x^2 \\cdot 3x$ contribution and reads $k = 7$ straight off ✗. Choice $10$ solves $3 + k = 7$ by adding $3$ to both sides instead of subtracting ✗. Choice $2$ grabs the wrong partner for the leading $x^2$, pairing it with the constant $5$ instead of with $3x$, and then solves $5 + k = 7$ ✗.)',
    },
  ],

  // c3 — WHICH degrees a sum can have, kept classification-flavoured so it never
  //      collides with c1's "compute this one degree". v1 hunts the impossible
  //      value, v2 hunts the single possible one, v3 switches to a difference.
  [
    {
      q: 'Polynomials $r(x)$ and $s(x)$ each have degree $7$. Which of these could NOT be the degree of $r(x) + s(x)$?',
      choices: ['$0$', '$8$', '$4$', '$7$'],
      answer: 1,
      solution:
        'Adding polynomials can only combine powers that are already there — it can never invent a higher one. Both inputs stop at $x^7$, so the sum stops at $x^7$ too, and degree $8$ is impossible. Every other listed degree can be built, which is the second, independent check: degree $7$ from $x^7 + x^7 = 2x^7$; degree $4$ from $(x^7 + x^4) + (-x^7) = x^4$; degree $0$ from $(x^7 + 3) + (-x^7 + 1) = 4$. Each construction uses two genuine degree-$7$ polynomials ✓. (THE WRONG RULE is the pull toward a number above $7$: degrees add for PRODUCTS, where $r(x)s(x)$ would reach degree $14$, but a sum has no such move ✗ for choices above $7$. The three low values are all reachable, so none of them is the answer.)',
    },
    {
      q: 'Polynomials $m(x)$ and $n(x)$ each have degree $4$. Three of the values below are impossible for the degree of $m(x) + n(x)$. Which one is possible?',
      choices: ['$3$', '$5$', '$8$', '$16$'],
      answer: 0,
      solution:
        'The sum can never climb above degree $4$, so $5$, $8$, and $16$ are all out on the same grounds. Degree $3$ is reachable, and here is the witness: $m(x) = x^4 + x^3$ and $n(x) = -x^4$ are both genuine degree-$4$ polynomials, and $m(x) + n(x) = x^3$ ✓. Second check the other way round — build the sum first and split it: $x^3 = (x^4 + x^3) + (-x^4)$, and both pieces have leading term $\\pm x^4$, so both really do have degree $4$ ✓. (Choice $5$ imagines that adding a term can push the degree up one ✗. THE WRONG RULE gives $8$ by adding $4 + 4$, the product rule in the wrong place ✗, and $16$ by multiplying $4 \\times 4$ ✗.)',
    },
    {
      q: 'Polynomials $a(x)$ and $b(x)$ each have degree $5$. Which of these is a possible degree for $a(x) - b(x)$?',
      choices: ['$10$', '$6$', '$2$', '$25$'],
      answer: 2,
      solution:
        'Subtracting is adding the opposite, so the same ceiling applies: the difference cannot exceed degree $5$. That rules out $6$, $10$, and $25$ at once. Degree $2$ is reachable: take $a(x) = x^5 + x^2$ and $b(x) = x^5$, both degree $5$, and $a(x) - b(x) = x^2$ ✓. Second check by evaluating that witness at $x = 2$: $a(2) = 32 + 4 = 36$ and $b(2) = 32$, and $36 - 32 = 4 = 2^2$ ✓, which matches $x^2$. (Worth knowing: the difference does not have to drop at all — $a(x) = x^5$, $b(x) = -x^5$ gives $2x^5$, still degree $5$ — and it can drop all the way to the zero polynomial when $a = b$.) (THE WRONG RULE gives $10$ from $5 + 5$ ✗ and $25$ from $5 \\times 5$ ✗. Choice $6$ imagines a subtraction can raise a degree ✗.)',
    },
  ],

  // c4 — squaring a binomial, where the middle term must appear TWICE. v1 adds a
  //      leading coefficient, v2 writes the binomial backwards, v3 hangs a
  //      subtraction off the square so the minus has to be distributed too.
  [
    {
      q: 'Expand $(2x - 5)^2$.',
      choices: ['$4x^2 - 20x + 25$', '$4x^2 - 10x + 25$', '$4x^2 + 25$', '$4x^2 - 20x - 25$'],
      answer: 0,
      solution:
        'Squaring means writing the factor out twice and multiplying every term by every term: $(2x - 5)(2x - 5)$ gives $2x \\cdot 2x = 4x^2$, then $2x \\cdot (-5) = -10x$, then $-5 \\cdot 2x = -10x$, then $(-5)(-5) = +25$. The two middle products are identical, so they add to $-20x$, and the answer is $4x^2 - 20x + 25$. Second check at $x = 2$: the original is $(4 - 5)^2 = (-1)^2 = 1$, and the expansion is $16 - 40 + 25 = 1$ ✓. (THE HALF SQUARE keeps one copy of the middle product and gives $4x^2 - 10x + 25$ ✗. Choice $4x^2 + 25$ drops both copies, squaring the two terms and stopping ✗. Choice $4x^2 - 20x - 25$ gets the middle right but reads $(-5)(-5)$ as $-25$, forgetting that two negatives multiply to a positive ✗.)',
    },
    {
      q: 'Expand $(4 - 3x)^2$ and write the result in standard form.',
      choices: ['$9x^2 + 16$', '$-9x^2 - 24x + 16$', '$9x^2 - 24x + 16$', '$9x^2 - 12x + 16$'],
      answer: 2,
      solution:
        'Write it out twice: $(4 - 3x)(4 - 3x)$ gives $4 \\cdot 4 = 16$, then $4 \\cdot (-3x) = -12x$, then $-3x \\cdot 4 = -12x$, then $(-3x)(-3x) = +9x^2$. Collect: $9x^2 - 24x + 16$ in standard form. The squared term is POSITIVE, because a negative times a negative is positive, even when the negative carries an $x$. Second check at $x = 2$: the original is $(4 - 6)^2 = (-2)^2 = 4$, and the expansion is $36 - 48 + 16 = 4$ ✓. (Choice $9x^2 + 16$ squares both terms and forgets both middle products ✗. THE HALF SQUARE keeps one copy and gives $9x^2 - 12x + 16$ ✗. Choice $-9x^2 - 24x + 16$ squares $-3x$ as $-9x^2$, letting the minus sign survive a squaring ✗.)',
    },
    {
      q: 'Expand and simplify $(x - 6)^2 - (x - 6)$.',
      choices: ['$x^2 - 13x + 30$', '$x^2 - 7x + 42$', '$x^2 - x + 42$', '$x^2 - 13x + 42$'],
      answer: 3,
      solution:
        'Do the square first, in full: $(x - 6)(x - 6) = x^2 - 6x - 6x + 36 = x^2 - 12x + 36$. Now subtract $(x - 6)$, flipping the sign of BOTH its terms: $x^2 - 12x + 36 - x + 6$. Collect: $-12x - x = -13x$ and $36 + 6 = 42$, so the answer is $x^2 - 13x + 42$. Second check at $x = 2$: the original is $(2 - 6)^2 - (2 - 6) = 16 - (-4) = 20$, and the expansion is $4 - 26 + 42 = 20$ ✓. (THE LOST MINUS stops after the $x$ and writes $-x - 6$, giving $x^2 - 13x + 30$ ✗. THE HALF SQUARE keeps one middle copy in the square, giving $x^2 - 6x + 36 - x + 6 = x^2 - 7x + 42$ ✗. Choice $x^2 - x + 42$ drops the middle of the square entirely, using $x^2 + 36$ and then $-x + 6$ ✗.)',
    },
  ],

  // c5 — sum of all coefficients, which is the value at $x = 1$. v1 is a cube of
  //      a trinomial, v2 a product of two different polynomials, v3 flips the
  //      direction and asks which expression has coefficient sum zero.
  [
    {
      q: 'What is the sum of all the coefficients of the expansion of $(x^2 + 4x - 2)^3$?',
      choices: ['$3$', '$27$', '$9$', '$-8$'],
      answer: 1,
      solution:
        'Substituting $x = 1$ turns every power of $x$ into $1$, so the value at $1$ IS the sum of the coefficients. Inside: $1 + 4 - 2 = 3$, and the whole thing is cubed, so the sum is $3^3 = 27$. Second check the long way, by expanding and adding. First the square: $(x^2 + 4x - 2)^2 = x^4 + 8x^3 + 12x^2 - 16x + 4$. Multiply that by $x^2 + 4x - 2$ once more: $x^2$ gives $x^6 + 8x^5 + 12x^4 - 16x^3 + 4x^2$, $4x$ gives $4x^5 + 32x^4 + 48x^3 - 64x^2 + 16x$, and $-2$ gives $-2x^4 - 16x^3 - 24x^2 + 32x - 8$. Collected, the cube is $x^6 + 12x^5 + 42x^4 + 16x^3 - 84x^2 + 48x - 8$, and adding those coefficients gives $1 + 12 + 42 + 16 - 84 + 48 - 8 = 27$ ✓ — the two routes agree. (Choice $3$ evaluates the inside and forgets to cube it ✗. Choice $9$ squares instead of cubing ✗. THE WRONG INPUT substitutes $x = 0$ instead of $x = 1$, which returns the constant term $-8$, not the coefficient sum ✗.)',
    },
    {
      q: 'What is the sum of all the coefficients of the expansion of $(3x^2 - x + 2)(x^3 + 5x - 7)$?',
      choices: ['$-14$', '$-4$', '$3$', '$4$'],
      answer: 1,
      solution:
        'Put $x = 1$ into each factor and multiply: $(3 - 1 + 2)(1 + 5 - 7) = (4)(-1) = -4$. Second check by expanding and adding the coefficients: $3x^2$ gives $3x^5 + 15x^3 - 21x^2$, $-x$ gives $-x^4 - 5x^2 + 7x$, and $2$ gives $2x^3 + 10x - 14$, so the product is $3x^5 - x^4 + 17x^3 - 26x^2 + 17x - 14$. Adding: $3 - 1 + 17 - 26 + 17 - 14 = -4$ ✓, matching the shortcut exactly. (THE WRONG INPUT uses $x = 0$ and reports the constant term $-14$ ✗. Choice $4$ evaluates the first factor and forgets that the second factor contributes a $-1$ ✗. Choice $3$ ADDS the two factor values, $4 + (-1)$, where multiplying is what the product demands ✗.)',
    },
    {
      q: 'For which of these expressions is the sum of all the coefficients of its expansion equal to $0$?',
      choices: [
        '$(2x - 3)(x^2 + x + 1)$',
        '$(x^3 - 2x + 5)^2$',
        '$(x^2 - 7)(x + 2)$',
        '$(x^2 + 3x - 4)(x + 6)$',
      ],
      answer: 3,
      solution:
        'The sum of the coefficients of any expansion is its value at $x = 1$, so test each expression there. $(2 - 3)(1 + 1 + 1) = (-1)(3) = -3$. $(1 - 2 + 5)^2 = 4^2 = 16$. $(1 - 7)(1 + 2) = (-6)(3) = -18$. $(1 + 3 - 4)(1 + 6) = (0)(7) = 0$ — that last one is the answer, and it is zero because its first factor already vanishes at $x = 1$. Second check by expanding the winner and adding: $(x^2 + 3x - 4)(x + 6) = x^3 + 6x^2 + 3x^2 + 18x - 4x - 24 = x^3 + 9x^2 + 14x - 24$, and $1 + 9 + 14 - 24 = 0$ ✓. Expanding one loser too, to be sure the test is honest: $(x^2 - 7)(x + 2) = x^3 + 2x^2 - 7x - 14$, whose coefficients add to $1 + 2 - 7 - 14 = -18$ ✓, the same value the shortcut gave. (The three wrong expressions each have a nonzero coefficient sum, and no two of those sums are equal ✗.)',
    },
  ],

  // c6 — evaluating at $x = -1$ with high exponents, where even powers give $1$
  //      and odd powers give $-1$. v1 mixes both parities with a leading minus,
  //      v2 is an alternating pile that collapses to zero, v3 reverses the
  //      direction and asks for the constant that produces a given value.
  [
    {
      q: 'If $p(x) = x^{15} - 3x^{11} + x^8 - 6$, what is $p(-1)$?',
      choices: ['$-3$', '$-7$', '$-9$', '$-5$'],
      answer: 0,
      solution:
        'Substitute with explicit parentheses: $p(-1) = (-1)^{15} - 3(-1)^{11} + (-1)^8 - 6$. Odd exponents give $-1$, so $(-1)^{15} = -1$ and $(-1)^{11} = -1$; the even exponent gives $(-1)^8 = 1$. The middle term is therefore $-3 \\times (-1) = +3$ — the sign flips twice, once from the odd power and once from the minus already in front. So $p(-1) = -1 + 3 + 1 - 6 = -3$. Second check by a different route — factor $x^8$ out of the first three terms: $p(x) = x^8(x^7 - 3x^3 + 1) - 6$. At $x = -1$ that is $1 \\times (-1 + 3 + 1) - 6 = 3 - 6 = -3$ ✓. (THE WRONG INPUT evaluates at $x = 1$ and gets $1 - 3 + 1 - 6 = -7$ ✗. Choice $-5$ treats EVERY power of a negative as negative, so $(-1)^8$ becomes $-1$: $-1 + 3 - 1 - 6 = -5$ ✗. Choice $-9$ gets both parities right but then subtracts the negative instead of adding it, writing $-3 \\times (-1)$ as $-3$: $-1 - 3 + 1 - 6 = -9$ ✗.)',
    },
    {
      q: 'If $q(x) = x^{20} + x^{17} + x^{14} + x^{11}$, what is $q(-1)$?',
      choices: ['$4$', '$0$', '$-4$', '$2$'],
      answer: 1,
      solution:
        'Check the parity of each exponent one at a time: $20$ and $14$ are even, so those terms give $+1$ each; $17$ and $11$ are odd, so those give $-1$ each. Then $q(-1) = 1 + (-1) + 1 + (-1) = 0$. Second check by pairing instead of counting: $q(x) = x^{17}(x^3 + 1) + x^{11}(x^3 + 1)$. At $x = -1$ the bracket is $(-1)^3 + 1 = -1 + 1 = 0$, so both pieces are zero and the total is $0$ ✓ — no parity bookkeeping needed at all. (THE WRONG INPUT evaluates at $x = 1$ and gets $4$ ✗. Choice $-4$ treats every power of $-1$ as $-1$ ✗. Choice $2$ miscounts a parity, calling $17$ even, which turns three terms positive: $1 + 1 + 1 - 1 = 2$ ✗.)',
    },
    {
      q: 'The polynomial $p(x) = x^{18} - 4x^9 + c$ satisfies $p(-1) = 10$. What is $c$?',
      choices: ['$13$', '$7$', '$5$', '$15$'],
      answer: 2,
      solution:
        'Substitute first, then solve. $(-1)^{18} = 1$ because $18$ is even, and $(-1)^9 = -1$ because $9$ is odd, so the middle term is $-4 \\times (-1) = +4$. That gives $p(-1) = 1 + 4 + c = 5 + c$, and $5 + c = 10$ forces $c = 5$. Second check by running the finished polynomial forward: with $c = 5$, $p(x) = x^{18} - 4x^9 + 5$, so $p(-1) = 1 - 4(-1) + 5 = 1 + 4 + 5 = 10$ ✓, which is the required value. (Choice $13$ treats $(-1)^9$ as $+1$, solving $1 - 4 + c = 10$ ✗. Choice $7$ treats $(-1)^{18}$ as $-1$, solving $-1 + 4 + c = 10$ ✗. Choice $15$ sets up $5 + c = 10$ correctly and then moves the $5$ the wrong way, adding it instead of subtracting ✗.)',
    },
  ],

  // c7 — the leading term of a product. v1 reads it off two standard-form
  //      factors, v2 reverses the direction (given the product's leading term
  //      and one factor's, find the other's), v3 scrambles both factors out of
  //      standard form so the first-written term is a decoy.
  [
    {
      q: 'What is the leading term of the product $(-4x^5 + x^2 - 7)(2x^3 - 5x + 1)$?',
      choices: ['$-8x^{15}$', '$8x^8$', '$-8x^8$', '$-2x^8$'],
      answer: 2,
      solution:
        'The leading term of a product is the product of the leading terms, because nothing else in either factor reaches that high and so nothing can cancel it. Here that is $(-4x^5)(2x^3)$. Coefficients MULTIPLY: $(-4)(2) = -8$. Exponents ADD: $5 + 3 = 8$. So the leading term is $-8x^8$. Second check by degree bookkeeping: the first factor has degree $5$ and the second has degree $3$, and degrees add under multiplication, so the product has degree $5 + 3 = 8$ ✓; its leading coefficient is the product of the leading coefficients, $-4 \\times 2 = -8$ ✓. Both readings agree. (THE WRONG RULE multiplies the exponents for $-8x^{15}$ ✗. Choice $8x^8$ loses the minus sign that the $-4$ carries ✗. Choice $-2x^8$ ADDS the coefficients, $-4 + 2$, where they should be multiplied ✗.)',
    },
    {
      q: 'The product of two polynomials has leading term $12x^7$. One of the factors has leading term $-3x^4$. What is the leading term of the other factor?',
      choices: ['$-4x^{11}$', '$-9x^3$', '$4x^3$', '$-4x^3$'],
      answer: 3,
      solution:
        'Call the missing leading term $cx^n$. Multiplying leading terms must reproduce $12x^7$, so $(-3)(c) = 12$ and $4 + n = 7$. That gives $c = -4$ and $n = 3$: the leading term is $-4x^3$. Second check by running it forward: $(-3x^4)(-4x^3) = 12x^7$ ✓ — the two negatives make the coefficient positive, and $4 + 3 = 7$ lands on the right power. (Choice $4x^3$ gets the power right but ignores the sign, as though $3 \\times 4 = 12$ settled it ✗. Choice $-4x^{11}$ ADDS $4$ and $7$ instead of subtracting, so it undoes multiplication with more multiplication ✗. Choice $-9x^3$ SUBTRACTS the coefficients, $12 - 3 = 9$, treating them the way the exponents are treated ✗.)',
    },
    {
      q: 'What is the leading term of the product $(6x - 5x^4 + 2)(x^2 - 3x^5 - 1)$?',
      choices: ['$15x^9$', '$6x^3$', '$-15x^9$', '$15x^{20}$'],
      answer: 0,
      solution:
        'Neither factor is in standard form, so find the true leading term of each before multiplying. In $6x - 5x^4 + 2$ the highest exponent is $4$, so the leading term is $-5x^4$, not the $6x$ written first. In $x^2 - 3x^5 - 1$ the highest exponent is $5$, so the leading term is $-3x^5$. Multiply: $(-5)(-3) = 15$ and $4 + 5 = 9$, giving $15x^9$. Second check by rewriting both factors in standard form first: $(-5x^4 + 6x + 2)(-3x^5 + x^2 - 1)$, whose leading terms now sit out front where they belong, and $(-5x^4)(-3x^5) = 15x^9$ ✓. The degrees confirm it: $4 + 5 = 9$ ✓. (Choice $6x^3$ multiplies the FIRST-WRITTEN terms, $6x \\cdot x^2$, instead of the leading ones ✗. Choice $-15x^9$ finds the right term but keeps a minus sign, as though only one factor were negative ✗. THE WRONG RULE multiplies the exponents, $4 \\times 5$, for $15x^{20}$ ✗.)',
    },
  ],

  // c8 — subtracting one polynomial from another, where at least the leading
  //      pair cancels. v1 loses the fourth powers, v2 reverses the direction and
  //      solves for the polynomial being subtracted, v3 cancels two pairs.
  [
    {
      q: 'Simplify: $(6x^4 + x^3 - 5x + 2) - (6x^4 - 4x^3 + x - 8)$.',
      choices: [
        '$5x^3 - 6x - 6$',
        '$5x^3 - 6x + 10$',
        '$-3x^3 - 6x + 10$',
        '$12x^4 - 3x^3 - 4x - 6$',
      ],
      answer: 1,
      solution:
        'Flip the sign of every one of the four terms being subtracted: $6x^4 + x^3 - 5x + 2 - 6x^4 + 4x^3 - x + 8$. Note that $-4x^3$ became $+4x^3$ and $-8$ became $+8$. Now collect: the fourth powers cancel, $x^3 + 4x^3 = 5x^3$, $-5x - x = -6x$, and $2 + 8 = 10$. The answer is $5x^3 - 6x + 10$. Second check at $x = 2$: the first polynomial is $96 + 8 - 10 + 2 = 96$, the second is $96 - 32 + 2 - 8 = 58$, and $96 - 58 = 38$; the simplified polynomial gives $40 - 12 + 10 = 38$ ✓. (THE LOST MINUS lets the sign die before the last term, giving $2 - 8 = -6$ and the answer $5x^3 - 6x - 6$ ✗. Choice $-3x^3 - 6x + 10$ forgets to flip the $-4x^3$, computing $x^3 - 4x^3$ ✗. Choice $12x^4 - 3x^3 - 4x - 6$ adds the two polynomials instead of subtracting ✗.)',
    },
    {
      q: 'Polynomials satisfy $(3x^3 - x^2 + 7) - r(x) = -2x^2 + 5x - 1$. What is $r(x)$?',
      choices: [
        '$3x^3 + x^2 - 5x + 8$',
        '$3x^3 - 3x^2 + 5x + 6$',
        '$-3x^3 - x^2 + 5x - 8$',
        '$3x^3 + x^2 - 5x + 6$',
      ],
      answer: 0,
      solution:
        'Rearranging, $r(x) = (3x^3 - x^2 + 7) - (-2x^2 + 5x - 1)$. Flip every sign in the second bracket: $3x^3 - x^2 + 7 + 2x^2 - 5x + 1$. Collect: $-x^2 + 2x^2 = x^2$, the $-5x$ stands alone, and $7 + 1 = 8$. So $r(x) = 3x^3 + x^2 - 5x + 8$. Second check by putting it back into the original equation: $(3x^3 - x^2 + 7) - (3x^3 + x^2 - 5x + 8) = 3x^3 - x^2 + 7 - 3x^3 - x^2 + 5x - 8 = -2x^2 + 5x - 1$ ✓, exactly the right-hand side. A numeric spot check at $x = 2$: $3(8) - 4 + 7 = 27$ and $r(2) = 24 + 4 - 10 + 8 = 26$, and $27 - 26 = 1$, while the right-hand side gives $-8 + 10 - 1 = 1$ ✓. (Choice $3x^3 - 3x^2 + 5x + 6$ adds the two given polynomials instead of subtracting ✗. THE LOST MINUS stops before the $-1$, giving a constant of $7 - 1 = 6$ ✗. Choice $-3x^3 - x^2 + 5x - 8$ subtracts in the wrong order, computing the right-hand side minus the left-hand one ✗.)',
    },
    {
      q: 'Simplify: $(2x^5 - 3x^4 + x^2 - 6x) - (2x^5 - 3x^4 - 4x^2 + x)$.',
      choices: [
        '$-3x^2 - 5x$',
        '$5x^2 - 5x$',
        '$4x^5 - 6x^4 + 5x^2 - 7x$',
        '$5x^2 - 7x$',
      ],
      answer: 3,
      solution:
        'Distribute the minus across all four terms: $2x^5 - 3x^4 + x^2 - 6x - 2x^5 + 3x^4 + 4x^2 - x$. TWO pairs vanish — the fifth powers and the fourth powers — because $-3x^4$ became $+3x^4$. What is left is $x^2 + 4x^2 = 5x^2$ and $-6x - x = -7x$, so the answer is $5x^2 - 7x$: two degree-$5$ polynomials collapsing to a degree-$2$ one. Second check at $x = 2$: the first polynomial is $64 - 48 + 4 - 12 = 8$, the second is $64 - 48 - 16 + 2 = 2$, and $8 - 2 = 6$; the simplified polynomial gives $20 - 14 = 6$ ✓. (THE LOST MINUS spares the final $+x$, giving $-6x + x = -5x$ and the answer $5x^2 - 5x$ ✗. Choice $-3x^2 - 5x$ never distributes the minus past the leading pair at all, so $x^2 - 4x^2 = -3x^2$ ✗. Choice $4x^5 - 6x^4 + 5x^2 - 7x$ adds the leading terms instead of cancelling them ✗.)',
    },
  ],

  // c9 — the cube of a binomial, read one term at a time. v1 asks for the
  //      constant when the binomial also carries a coefficient, v2 changes
  //      direction and asks for the $x$ coefficient, v3 hangs a square off the
  //      cube so two constants must be combined.
  [
    {
      q: 'What is the constant term of the expansion of $(2x - 3)^3$?',
      choices: ['$27$', '$-9$', '$-24$', '$-27$'],
      answer: 3,
      solution:
        'The constant term of a product is the product of the constant terms of the factors, and cubing means three factors: $(-3)(-3)(-3) = -27$. An odd number of negative factors leaves the result negative. Second check by expanding the whole cube: $(2x - 3)^2 = 4x^2 - 12x + 9$, and multiplying that by $2x - 3$ gives $8x^3 - 24x^2 + 18x - 12x^2 + 36x - 27 = 8x^3 - 36x^2 + 54x - 27$, whose constant term is $-27$ ✓. Confirm the expansion at $x = 2$: the original is $(4 - 3)^3 = 1$, and the expansion is $64 - 144 + 108 - 27 = 1$ ✓. (Choice $27$ lets three negatives make a positive, which is what an EVEN count would do ✗. Choice $-9$ squares the $-3$ instead of cubing it ✗. Choice $-24$ cubes the coefficient of $x$ and multiplies by the constant only once, $2^3 \\times (-3)$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x$ in the expansion of $(x + 4)^3$?',
      choices: ['$16$', '$48$', '$64$', '$12$'],
      answer: 1,
      solution:
        'A plain $x$ term needs the $x$ from exactly one of the three factors and the $4$ from the other two. There are three ways to choose which factor supplies the $x$, and each way contributes $4 \\times 4 = 16$, so the coefficient is $3 \\times 16 = 48$. Second check by expanding: $(x + 4)^2 = x^2 + 8x + 16$, and multiplying by $x + 4$ gives $x^3 + 8x^2 + 16x + 4x^2 + 32x + 64 = x^3 + 12x^2 + 48x + 64$ ✓, so the $x$ coefficient is $48$. Confirm at $x = 2$: the original is $6^3 = 216$, and the expansion is $8 + 48 + 96 + 64 = 216$ ✓. (THE MISSING PAIR counts only one of the three ways and answers $16$ ✗. Choice $12$ reports the $x^2$ coefficient instead ✗. Choice $64$ reports the constant term instead ✗.)',
    },
    {
      q: 'What is the constant term of the expansion of $(x - 4)^3 + (x + 2)^2$?',
      choices: ['$-68$', '$20$', '$-60$', '$68$'],
      answer: 2,
      solution:
        'Take the two pieces separately. The cube contributes $(-4)(-4)(-4) = -64$, negative because three negative factors stay negative. The square contributes $2 \\times 2 = 4$. Adding: $-64 + 4 = -60$. Second check by a completely different route — the constant term of any polynomial is its value at $x = 0$, so evaluate the whole expression there: $(0 - 4)^3 + (0 + 2)^2 = (-4)^3 + 2^2 = -64 + 4 = -60$ ✓. (For reference the full expansion is $x^3 - 12x^2 + 48x - 64 + x^2 + 4x + 4 = x^3 - 11x^2 + 52x - 60$, which shows the same $-60$.) (Choice $-68$ subtracts the square’s constant instead of adding it ✗. Choice $68$ reads $(-4)^3$ as $+64$, letting an odd power of a negative come out positive ✗. Choice $20$ squares the $-4$ instead of cubing it, giving $16 + 4$ ✗.)',
    },
  ],

  // c10 — one coefficient out of a product of THREE factors, which is what makes
  //       this the harder of the two coefficient slots: every contributing
  //       triple must be listed. v1 hunts $x$, v2 hunts $x^2$, v3 replaces the
  //       third factor with a quadratic.
  [
    {
      q: 'What is the coefficient of $x$ in the expansion of $(x + 4)(2x - 3)(5x + 1)$?',
      choices: ['$-63$', '$-55$', '$5$', '$-71$'],
      answer: 1,
      solution:
        'To build a plain $x$, take the $x$ term from exactly one factor and the constant from the other two. Each factor gets a turn, so there are three contributions and all three must be written down: $x \\cdot (-3) \\cdot 1 = -3x$, then $4 \\cdot 2x \\cdot 1 = 8x$, then $4 \\cdot (-3) \\cdot 5x = -60x$. Total: $-3 + 8 - 60 = -55$. Second check by expanding everything. First $(x + 4)(2x - 3) = 2x^2 - 3x + 8x - 12 = 2x^2 + 5x - 12$; then multiply by $5x + 1$: $10x^3 + 2x^2 + 25x^2 + 5x - 60x - 12 = 10x^3 + 27x^2 - 55x - 12$ ✓. Confirm that expansion at $x = 2$: the original is $(6)(1)(11) = 66$, and the expansion is $80 + 108 - 110 - 12 = 66$ ✓. (THE MISSING PAIR drops the $4 \\cdot 2x \\cdot 1$ term and gets $-63$ ✗, or drops the big $-60x$ term and gets $5$ ✗. Choice $-71$ mishandles the sign on the middle contribution, using $-8$ in place of $+8$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2$ in the expansion of $(x - 1)(x + 3)(2x + 5)$?',
      choices: ['$9$', '$13$', '$4$', '$5$'],
      answer: 0,
      solution:
        'An $x^2$ term needs the $x$ term from exactly TWO of the three factors and the constant from the remaining one. There are three ways to choose which factor sits out: taking the constant from the third factor gives $x \\cdot x \\cdot 5 = 5x^2$; from the second gives $x \\cdot 2x \\cdot 3 = 6x^2$; from the first gives $x \\cdot 2x \\cdot (-1) = -2x^2$. Total: $5 + 6 - 2 = 9$. Second check by expanding. First $(x - 1)(x + 3) = x^2 + 3x - x - 3 = x^2 + 2x - 3$; then multiply by $2x + 5$: $2x^3 + 5x^2 + 4x^2 + 10x - 6x - 15 = 2x^3 + 9x^2 + 4x - 15$ ✓. Confirm at $x = 2$: the original is $(1)(5)(9) = 45$, and the expansion is $16 + 36 + 8 - 15 = 45$ ✓. (Choice $13$ drops the minus on the $-1$ and adds $5 + 6 + 2$ ✗. THE MISSING PAIR keeps only the first contribution and answers $5$ ✗. Choice $4$ reports the coefficient of $x$ instead of $x^2$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x$ in the expansion of $(x + 3)(x - 5)(x^2 + 2x - 4)$?',
      choices: ['$-42$', '$20$', '$-10$', '$-22$'],
      answer: 3,
      solution:
        'A plain $x$ needs one degree-$1$ term and two degree-$0$ terms, one from each factor. List all three ways: $x \\cdot (-5) \\cdot (-4) = 20x$, then $3 \\cdot x \\cdot (-4) = -12x$, then $3 \\cdot (-5) \\cdot 2x = -30x$. The quadratic factor has no other degree-$1$ term to offer. Total: $20 - 12 - 30 = -22$. Second check by multiplying two factors first and reading the pairs against the third: $(x + 3)(x - 5) = x^2 - 2x - 15$, and against $x^2 + 2x - 4$ the degree-$1$ pairs are $-2x \\cdot (-4) = 8x$ and $-15 \\cdot 2x = -30x$, giving $8 - 30 = -22$ ✓. The full expansion agrees: $(x^2 - 2x - 15)(x^2 + 2x - 4) = x^4 - 23x^2 - 22x + 60$, checked at $x = 2$ where the original is $(5)(-3)(4) = -60$ and the expansion is $16 - 92 - 44 + 60 = -60$ ✓. (THE MISSING PAIR loses the $20x$ and answers $-42$ ✗, or loses the $-12x$ and answers $-10$ ✗. Choice $20$ keeps only the first contribution ✗.)',
    },
  ],

  // c11 — the degree of a POWER, where the two exponent rules must not be
  //       swapped. v1 raises a trinomial to a power, v2 multiplies two powers so
  //       both rules run at once, v3 reverses the direction and solves for the
  //       exponent.
  [
    {
      q: 'What is the degree of $(3x^4 - x + 2)^5$?',
      choices: ['$9$', '$20$', '$4$', '$15$'],
      answer: 1,
      solution:
        'Raising to the fifth power means five identical factors multiplied together, and degrees ADD across a product: $4 + 4 + 4 + 4 + 4 = 20$. Second check by chasing the leading term instead of the degree: the leading term of each factor is $3x^4$, so the leading term of the product is $(3x^4)^5 = 3^5 x^{20} = 243x^{20}$, and nothing in the expansion can cancel it ✓. Both routes give degree $20$, which is the rule $(x^a)^b = x^{ab}$ at work — a different rule from $x^a \\cdot x^b = x^{a+b}$. (Choice $9$ ADDS the base degree and the exponent, $4 + 5$, mixing the two rules ✗. Choice $4$ reports the degree of the base and ignores the power ✗. Choice $15$ uses the leading COEFFICIENT $3$ in place of the degree $4$, computing $3 \\times 5$ ✗.)',
    },
    {
      q: 'What is the degree of $(2x^3 - 5)^4 (x^2 + x + 1)^3$?',
      choices: ['$12$', '$72$', '$18$', '$17$'],
      answer: 2,
      solution:
        'Handle each block, then join them. The first block is a degree-$3$ polynomial raised to the fourth power, so its degree is $3 \\times 4 = 12$. The second is a degree-$2$ polynomial cubed, so its degree is $2 \\times 3 = 6$. The two blocks are then MULTIPLIED, and degrees add across a product: $12 + 6 = 18$. Second check by chasing leading terms all the way through: $(2x^3)^4 = 16x^{12}$ and $(x^2)^3 = x^6$, and $16x^{12} \\cdot x^6 = 16x^{18}$ ✓, so the degree is $18$ and the leading coefficient is $16$. (Choice $12$ stops after the first block ✗. Choice $72$ multiplies the two block degrees, $12 \\times 6$, where they should be added ✗. Choice $17$ gets the first block right but adds inside the second, using $2 + 3 = 5$ instead of $2 \\times 3 = 6$ ✗.)',
    },
    {
      q: 'A polynomial $p(x)$ has degree $3$, and $(p(x))^k$ has degree $21$. What is $k$?',
      choices: ['$7$', '$18$', '$63$', '$24$'],
      answer: 0,
      solution:
        'Raising to the $k$th power multiplies the degree by $k$, so $3k = 21$ and $k = 7$. Second check by running it forward with a concrete polynomial of degree $3$: take $p(x) = x^3 + 1$; then $(p(x))^7$ has leading term $(x^3)^7 = x^{21}$, which is degree $21$ ✓, and nothing in that expansion can cancel a leading term. (Choice $18$ subtracts, computing $21 - 3$ ✗. Choice $24$ adds, computing $21 + 3$ ✗. Choice $63$ multiplies $21 \\times 3$, running the rule in the wrong direction ✗.)',
    },
  ],

  // c12 — matching coefficients in $(x + a)(x + b)$. The base asks for the sum,
  //       so v1 asks for the PRODUCT, v2 puts a leading coefficient in front so
  //       the middle coefficient is no longer the sum, and v3 writes the factors
  //       with minus signs so the sign of the middle coefficient flips.
  [
    {
      q: 'Numbers $a$ and $b$ satisfy $(x + a)(x + b) = x^2 - 11x + 24$ for all $x$. What is $ab$?',
      choices: ['$24$', '$-11$', '$11$', '$-24$'],
      answer: 0,
      solution:
        'Expand the left side in full: $(x + a)(x + b) = x^2 + bx + ax + ab = x^2 + (a + b)x + ab$. Matching against $x^2 - 11x + 24$ gives $a + b = -11$ and $ab = 24$. The question asks for the PRODUCT, and it is sitting in the constant term: $24$. Second check by finding the two numbers themselves: $a = -3$ and $b = -8$ satisfy both conditions, and $(x - 3)(x - 8) = x^2 - 8x - 3x + 24 = x^2 - 11x + 24$ ✓, with $ab = (-3)(-8) = 24$ ✓. (Choice $-11$ hands back the SUM, which the middle coefficient supplies, instead of the product ✗. Choice $-24$ assumes the product must inherit the minus sign from the middle term ✗. Choice $11$ strips the sign off the sum ✗.)',
    },
    {
      q: 'Numbers $a$ and $b$ satisfy $(3x + a)(x + b) = 3x^2 - 5x - 12$ for all $x$. What is $a + b$?',
      choices: ['$-5$', '$1$', '$-12$', '$7$'],
      answer: 1,
      solution:
        'The leading $3$ changes the bookkeeping, so expand carefully: $(3x + a)(x + b) = 3x^2 + 3bx + ax + ab = 3x^2 + (3b + a)x + ab$. Matching gives $3b + a = -5$ and $ab = -12$. Search the factor pairs of $-12$: $a = 4$, $b = -3$ works, since $3(-3) + 4 = -5$ ✓ and $4 \\times (-3) = -12$ ✓, and no other integer pair satisfies both. So $a + b = 4 + (-3) = 1$. Second check by expanding the finished factors: $(3x + 4)(x - 3) = 3x^2 - 9x + 4x - 12 = 3x^2 - 5x - 12$ ✓, and at $x = 2$ the factored form gives $(6 + 4)(2 - 3) = -10$ while the expanded form gives $12 - 10 - 12 = -10$ ✓. (Choice $-5$ reads the middle coefficient as the sum, which only works when the leading coefficient is $1$ ✗. Choice $-12$ hands back $ab$ instead of $a + b$ ✗. Choice $7$ finds $a = 4$ and $b = -3$ and then adds their sizes, dropping the minus on $b$ ✗.)',
    },
    {
      q: 'Numbers $a$ and $b$ satisfy $(x - a)(x - b) = x^2 - 15x + 56$ for all $x$. What is $a + b$?',
      choices: ['$56$', '$-15$', '$15$', '$1$'],
      answer: 2,
      solution:
        'The factors carry MINUS signs here, so expand before matching anything: $(x - a)(x - b) = x^2 - bx - ax + ab = x^2 - (a + b)x + ab$. The middle coefficient is $-(a + b)$, and matching it to $-15$ gives $a + b = 15$ — positive, even though the middle term is negative. Second check by naming the numbers: $ab = 56$ and $a + b = 15$ point to $a = 7$ and $b = 8$, and $(x - 7)(x - 8) = x^2 - 8x - 7x + 56 = x^2 - 15x + 56$ ✓, with $7 + 8 = 15$ ✓. (Choice $-15$ copies the middle coefficient without accounting for the minus signs already inside the factors ✗. Choice $56$ hands back $ab$ ✗. Choice $1$ reports the difference $8 - 7$ rather than the sum ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 18,
  challenge,
}
