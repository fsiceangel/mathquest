// Introduction to Algebra chapter 11 — variations for section 11.5,
// "Simon's Favorite Factoring Trick". All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text alone and then checked
//    FORWARD: each factorization is multiplied back out, and every integer
//    solution is substituted into the ORIGINAL equation.
//  - Counting items list EVERY factor pair of the shifted right-hand side and
//    say out loud which pairs are thrown away and why (a pair that would force
//    a variable to be $0$ or negative is not a solution).
//  - Four traps run through the section: adding the SUM of the coefficients
//    instead of the PRODUCT, forgetting the CRISS-CROSS (the coefficient of $x$
//    belongs in the factor with $y$), forgetting to add the magic constant to
//    the RIGHT side too, and counting factor pairs without checking that both
//    variables stay positive. Each distractor is one named mistake.
//  - No two choices inside an item name the same value, and no two are the same
//    string.

const s115 = [
  // p1 — factor a four-term expression that already has its constant attached
  [
    {
      q: 'Factor $xy + 9x + 4y + 36$.',
      choices: ['$(x+9)(y+4)$', '$(x+4)(y+9)$', '$(x+6)(y+6)$', '$(x+36)(y+1)$'],
      answer: 1,
      solution:
        'Group the first two terms and the last two terms: $x(y + 9) + 4(y + 9)$. Both groups now carry the same bracket $y + 9$, so pull it out: $(x + 4)(y + 9)$ ✓. Multiply back to be sure: $xy + 9x + 4y + 36$ ✓. Watch the CRISS-CROSS — the $9$ from $9x$ ends up in the factor with $y$, and the $4$ from $4y$ ends up in the factor with $x$. (The choice $(x+9)(y+4)$ skips the criss-cross and expands to $xy + 4x + 9y + 36$, with the two middle terms swapped; the choice $(x+6)(y+6)$ uses $6 \\cdot 6 = 36$ but expands to $xy + 6x + 6y + 36$; the choice $(x+36)(y+1)$ uses the factor pair $36 \\times 1$ and expands to $xy + x + 36y + 36$.)',
    },
    {
      q: 'Factor $ab + 5a + 6b + 30$.',
      choices: ['$(a+5)(b+6)$', '$(a+30)(b+1)$', '$(a+2)(b+15)$', '$(a+6)(b+5)$'],
      answer: 3,
      solution:
        'The letters changed but the move did not. Group: $a(b + 5) + 6(b + 5)$, and both groups share $b + 5$, so the factorization is $(a + 6)(b + 5)$ ✓. Expand to check: $ab + 5a + 6b + 30$ ✓. (The choice $(a+5)(b+6)$ forgets the criss-cross and expands to $ab + 6a + 5b + 30$; the choice $(a+30)(b+1)$ picks the factor pair $30 \\times 1$ and gives $ab + a + 30b + 30$; the choice $(a+2)(b+15)$ picks the factor pair $2 \\times 15$ and gives $ab + 15a + 2b + 30$. All three end in $+30$, which is why you must check the MIDDLE terms, not just the constant.)',
    },
    {
      q: 'Factor $xy + 10y + 3x + 30$.',
      choices: ['$(x+10)(y+3)$', '$(x+3)(y+10)$', '$(x+5)(y+6)$', '$(x+30)(y+1)$'],
      answer: 0,
      solution:
        'The terms arrive in a jumbled order, so group by what shares a letter: $xy + 3x$ and $10y + 30$. That gives $x(y + 3) + 10(y + 3)$, and pulling out the shared bracket leaves $(x + 10)(y + 3)$ ✓. Expand: $xy + 3x + 10y + 30$ — the same four terms as the question, just reordered ✓. (The choice $(x+3)(y+10)$ un-does the criss-cross and expands to $xy + 10x + 3y + 30$; the choice $(x+5)(y+6)$ uses the factor pair $5 \\times 6$ of $30$ and gives $xy + 6x + 5y + 30$; the choice $(x+30)(y+1)$ gives $xy + x + 30y + 30$.)',
    },
  ],
  // p2 — name the magic constant
  [
    {
      q: 'What constant should be added to $xy + 6x + 5y$ so that it factors as a product of two binomials?',
      choices: ['$11$', '$36$', '$30$', '$25$'],
      answer: 2,
      solution:
        'The magic constant is the PRODUCT of the two coefficients, not their sum: $6 \\cdot 5 = 30$. Then $xy + 6x + 5y + 30 = x(y + 6) + 5(y + 6) = (x + 5)(y + 6)$ ✓. (The choice $11$ adds the coefficients, $6 + 5$, which is the classic mix-up — and $xy + 6x + 5y + 11$ does not factor; the choice $36$ squares the coefficient of $x$; the choice $25$ squares the coefficient of $y$. Squaring one coefficient would only be right if the two coefficients happened to be equal.)',
    },
    {
      q: 'After the right constant is added, $xy + 4x + 7y$ becomes a product of two binomials. What is that product?',
      choices: ['$(x+4)(y+7)$', '$(x+7)(y+4)$', '$(x+28)(y+1)$', '$(x+1)(y+28)$'],
      answer: 1,
      solution:
        'The magic constant is $4 \\cdot 7 = 28$, so the completed expression is $xy + 4x + 7y + 28$. Group it: $x(y + 4) + 7(y + 4) = (x + 7)(y + 4)$ ✓. Expand to check: $xy + 4x + 7y + 28$ ✓. (The choice $(x+4)(y+7)$ forgets the criss-cross and expands to $xy + 7x + 4y + 28$ — right constant, swapped middle terms; the choices $(x+28)(y+1)$ and $(x+1)(y+28)$ use the factor pair $28 \\times 1$ and expand to $xy + x + 28y + 28$ and $xy + 28x + y + 28$, neither of which matches.)',
    },
    {
      q: 'One constant must be added to $xy - 8x + 3y$ before it will factor into two binomials. What is that constant?',
      choices: ['$-24$', '$24$', '$-5$', '$-11$'],
      answer: 0,
      solution:
        'Take the product of the coefficients WITH their signs: $(-8) \\cdot 3 = -24$. So we add $-24$ (that is, subtract $24$), and $xy - 8x + 3y - 24 = x(y - 8) + 3(y - 8) = (x + 3)(y - 8)$ ✓. Expand to check: $xy - 8x + 3y - 24$ ✓. (The choice $24$ multiplies the coefficients but throws the minus sign away, and $xy - 8x + 3y + 24$ does not factor; the choice $-5$ adds the coefficients, $-8 + 3$; the choice $-11$ subtracts them, $-8 - 3$. The trick never uses a sum.)',
    },
  ],
  // p3 — factor, and read a coefficient back out of the factorization
  [
    {
      q: 'Factor $mn + 3m + 10n + 30$.',
      choices: ['$(m+3)(n+10)$', '$(m+30)(n+1)$', '$(m+10)(n+3)$', '$(m+6)(n+5)$'],
      answer: 2,
      solution:
        'Group: $m(n + 3) + 10(n + 3)$. The shared bracket is $n + 3$, so the answer is $(m + 10)(n + 3)$ ✓. Check with $m = 1$, $n = 1$: the original is $1 + 3 + 10 + 30 = 44$, and $(11)(4) = 44$ ✓. (The choice $(m+3)(n+10)$ is the un-criss-crossed version; at $m = n = 1$ it gives $(4)(11) = 44$ too — a coincidence, because $1 \\cdot 1$ is symmetric! Test it at $m = 2$, $n = 1$ instead: the original is $2 + 6 + 10 + 30 = 48$, the correct factorization gives $(12)(4) = 48$ ✓, and $(m+3)(n+10)$ gives $(5)(11) = 55$ ✗. The choice $(m+30)(n+1)$ uses the pair $30 \\times 1$, and $(m+6)(n+5)$ uses the pair $6 \\times 5$; both land on the wrong middle terms.)',
    },
    {
      q: 'The expression $xy + 5x + 8y + 40$ factors as $(x+A)(y+B)$ for positive integers $A$ and $B$. What is $A$?',
      choices: ['$5$', '$8$', '$10$', '$40$'],
      answer: 1,
      solution:
        'Factor first, then read the answer off. Grouping gives $x(y + 5) + 8(y + 5) = (x + 8)(y + 5)$, so $A = 8$ and $B = 5$ ✓. Expand to confirm: $xy + 5x + 8y + 40$ ✓. Notice that $A$ is the coefficient of $y$, not of $x$ — that is the criss-cross. (The choice $5$ is $B$, the number that belongs in the OTHER bracket; the choice $10$ comes from grabbing a different factor pair of $40$, namely $10 \\times 4$, which would give $xy + 10x + 4y + 40$; the choice $40$ uses the pair $40 \\times 1$ and gives $xy + x + 40y + 40$.)',
    },
    {
      q: 'Factor $xy + 11x + 2y + 22$.',
      choices: ['$(x+2)(y+11)$', '$(x+11)(y+2)$', '$(x+22)(y+1)$', '$(x+1)(y+22)$'],
      answer: 0,
      solution:
        'Group: $x(y + 11) + 2(y + 11) = (x + 2)(y + 11)$ ✓. Check at $x = 3$, $y = 1$: the original is $3 + 33 + 2 + 22 = 60$, and $(5)(12) = 60$ ✓. (The choice $(x+11)(y+2)$ skips the criss-cross; at $x = 3$, $y = 1$ it gives $(14)(3) = 42 \\ne 60$. The choices $(x+22)(y+1)$ and $(x+1)(y+22)$ both use the factor pair $22 \\times 1$ and produce the wrong middle terms.)',
    },
  ],
  // p4 — what number gets added to BOTH sides of an equation
  [
    {
      q: 'To solve $xy + 7x + 3y = 40$ with the trick, what number do you add to both sides?',
      choices: ['$10$', '$40$', '$21$', '$49$'],
      answer: 2,
      solution:
        'Add the product of the coefficients: $7 \\cdot 3 = 21$. The equation becomes $xy + 7x + 3y + 21 = 61$, and the left side factors as $(x + 3)(y + 7) = 61$ ✓. (The choice $10$ adds the coefficients instead of multiplying them; the choice $40$ copies the right-hand side, which is not a magic constant at all; the choice $49$ squares the coefficient of $x$, which would only be right if both coefficients were $7$.)',
    },
    {
      q: 'Anaya adds the magic constant to both sides of $xy + 4x + 6y = 50$, and the left side becomes $(x+6)(y+4)$. What number is now on the right side?',
      choices: ['$50$', '$26$', '$60$', '$74$'],
      answer: 3,
      solution:
        'The magic constant is $4 \\cdot 6 = 24$. Whatever you add to the left, you must add to the right as well, so the right side becomes $50 + 24 = 74$ ✓. Check the left side by expanding: $(x + 6)(y + 4) = xy + 4x + 6y + 24$ ✓ — exactly the original left side plus $24$. (The choice $50$ adds the constant to the left side only, which breaks the equation; the choice $26$ subtracts $24$ instead of adding it; the choice $60$ adds the SUM $4 + 6 = 10$ rather than the product.)',
    },
    {
      q: 'To solve $xy - 4x + 5y = 6$ with the trick, what number do you add to both sides?',
      choices: ['$-20$', '$20$', '$-9$', '$1$'],
      answer: 0,
      solution:
        'Multiply the coefficients, signs and all: $(-4) \\cdot 5 = -20$. Adding $-20$ to both sides means subtracting $20$: $xy - 4x + 5y - 20 = -14$, and the left side factors as $x(y - 4) + 5(y - 4) = (x + 5)(y - 4)$ ✓. (The choice $20$ has the right size but the wrong sign, and $xy - 4x + 5y + 20$ does not factor; the choice $-9$ comes from $-4 - 5$ and the choice $1$ from $-4 + 5$ — both are sums, and the trick never uses a sum.)',
    },
  ],
  // p5 — find the one pair of positive integers that works
  [
    {
      q: 'Which positive integers $x$ and $y$ satisfy $xy + 4x + y = 22$?',
      choices: ['$x = 1, y = 7$', '$x = 1, y = 9$', '$x = 9, y = 1$', '$x = 1, y = 13$'],
      answer: 1,
      solution:
        'The magic constant is $4 \\cdot 1 = 4$. Add it to BOTH sides: $xy + 4x + y + 4 = 26$, and the left factors as $x(y + 4) + (y + 4) = (x + 1)(y + 4) = 26$. Now $26 = 2 \\cdot 13$, so its factor pairs are $1 \\times 26$, $2 \\times 13$, $13 \\times 2$, $26 \\times 1$ — four of them. Since $x \\geq 1$ we need $x + 1 \\geq 2$, and since $y \\geq 1$ we need $y + 4 \\geq 5$. Only $2 \\times 13$ passes both tests, giving $x = 1$ and $y = 9$ ✓. Check forward: $1 \\cdot 9 + 4 \\cdot 1 + 9 = 9 + 4 + 9 = 22$ ✓. (The choice $x = 1, y = 7$ forgets to add the $4$ to the RIGHT side and solves $(x+1)(y+4) = 22$ instead; it gives $7 + 4 + 7 = 18$. The choice $x = 9, y = 1$ swaps the two values, which matters here because the equation is not symmetric: $9 + 36 + 1 = 46$. The choice $x = 1, y = 13$ reads the factor $13$ as $y$ itself instead of as $y + 4$; it gives $13 + 4 + 13 = 30$.)',
    },
    {
      q: 'Which positive integers $x$ and $y$ satisfy $xy + x + 4y = 30$?',
      choices: ['$x = 1, y = 13$', '$x = 17, y = 2$', '$x = 1, y = 5$', '$x = 13, y = 1$'],
      answer: 3,
      solution:
        'The magic constant is $1 \\cdot 4 = 4$. Add it to both sides: $xy + x + 4y + 4 = 34$, and the left groups as $x(y + 1) + 4(y + 1) = (x + 4)(y + 1) = 34$. Since $34 = 2 \\cdot 17$, the factor pairs are $1 \\times 34$, $2 \\times 17$, $17 \\times 2$, $34 \\times 1$ — four of them. We need $x + 4 \\geq 5$ and $y + 1 \\geq 2$, so the first factor must be at least $5$ and the second at least $2$: only $17 \\times 2$ survives, giving $x = 13$ and $y = 1$ ✓. Check forward: $13 \\cdot 1 + 13 + 4 \\cdot 1 = 13 + 13 + 4 = 30$ ✓. (The choice $x = 1, y = 13$ forgets the criss-cross and factors as $(x+1)(y+4)$ instead; it gives $13 + 1 + 52 = 66$. The choice $x = 17, y = 2$ reports the two FACTORS as if they were $x$ and $y$, without undoing the shifts; it gives $34 + 17 + 8 = 59$. The choice $x = 1, y = 5$ forgets to add $4$ to the right side and uses the pair $5 \\times 6$ of $30$; it gives $5 + 1 + 20 = 26$.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 3x + y = 23$. What is $xy$?',
      choices: ['$10$', '$11$', '$26$', '$13$'],
      answer: 0,
      solution:
        'Add the magic constant $3 \\cdot 1 = 3$ to both sides: $xy + 3x + y + 3 = 26$, and the left factors as $x(y + 3) + (y + 3) = (x + 1)(y + 3) = 26$. The factor pairs of $26$ are $1 \\times 26$, $2 \\times 13$, $13 \\times 2$, $26 \\times 1$ — four of them. We need $x + 1 \\geq 2$ and $y + 3 \\geq 4$, and only $2 \\times 13$ clears both bars, so $x = 1$ and $y = 10$. The question asks for the PRODUCT: $xy = 1 \\cdot 10 = 10$ ✓. Check forward: $1 \\cdot 10 + 3 \\cdot 1 + 10 = 23$ ✓. (The choice $11$ is $x + y$, the wrong quantity; the choice $26$ is the value of $(x+1)(y+3)$, which is the product of the SHIFTED numbers, not of $x$ and $y$; the choice $13$ comes from reading the factor $13$ as $y$ instead of as $y + 3$, which would make $xy = 1 \\cdot 13$.)',
    },
  ],
  // p6 — factor when some signs are negative
  [
    {
      q: 'Factor $xy - 6x + 4y - 24$.',
      choices: ['$(x-6)(y+4)$', '$(x+4)(y-6)$', '$(x-4)(y-6)$', '$(x+6)(y-4)$'],
      answer: 1,
      solution:
        'Group with the signs attached: $x(y - 6) + 4(y - 6)$. Both groups share $y - 6$, so the factorization is $(x + 4)(y - 6)$ ✓. Check at $x = 1$, $y = 1$: the original is $1 - 6 + 4 - 24 = -25$, and $(5)(-5) = -25$ ✓. (The choice $(x-6)(y+4)$ moves the minus sign into the wrong bracket and expands to $xy + 4x - 6y - 24$; the choice $(x-4)(y-6)$ makes both brackets negative and expands to $xy - 6x - 4y + 24$, so even the constant comes out wrong; the choice $(x+6)(y-4)$ swaps the two numbers and expands to $xy - 4x + 6y - 24$.)',
    },
    {
      q: 'Factor $xy + 7x - 2y - 14$.',
      choices: ['$(x+7)(y-2)$', '$(x-7)(y+2)$', '$(x-2)(y+7)$', '$(x+2)(y-7)$'],
      answer: 2,
      solution:
        'Group carefully, and notice the second group needs a MINUS pulled out: $x(y + 7) - 2(y + 7)$. Both groups share $y + 7$, so the answer is $(x - 2)(y + 7)$ ✓. Check at $x = 1$, $y = 1$: the original is $1 + 7 - 2 - 14 = -8$, and $(-1)(8) = -8$ ✓. (The choice $(x+7)(y-2)$ puts each number in the bracket it came from instead of criss-crossing, and expands to $xy - 2x + 7y - 14$; the choice $(x-7)(y+2)$ expands to $xy + 2x - 7y - 14$; the choice $(x+2)(y-7)$ expands to $xy - 7x + 2y - 14$. All three keep the $-14$, so compare the middle terms to tell them apart.)',
    },
    {
      q: 'Which expression factors as $(x-5)(y+6)$?',
      choices: [
        '$xy + 6x - 5y - 30$',
        '$xy - 5x + 6y - 30$',
        '$xy + 6x - 5y + 30$',
        '$xy - 6x + 5y - 30$',
      ],
      answer: 0,
      solution:
        'Just multiply it out. $(x - 5)(y + 6) = xy + 6x - 5y - 30$ ✓ — the $x$ picks up the $+6$, the $-5$ picks up the $y$, and the constant is $(-5)(6) = -30$. Check at $x = 1$, $y = 1$: $(-4)(7) = -28$, and $1 + 6 - 5 - 30 = -28$ ✓. (The choice $xy - 5x + 6y - 30$ is what you get without the criss-cross; it actually factors as $(x+6)(y-5)$. The choice $xy + 6x - 5y + 30$ has the right middle terms but a positive constant, and $(-5)(6)$ is negative. The choice $xy - 6x + 5y - 30$ flips both middle signs and factors as $(x+5)(y-6)$.)',
    },
  ],
  // p7 — count the ordered pairs
  [
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + x + y = 23$?',
      choices: ['$8$', '$4$', '$3$', '$6$'],
      answer: 3,
      solution:
        'Add the magic constant $1 \\cdot 1 = 1$ to both sides: $(x + 1)(y + 1) = 24$. The ordered factor pairs of $24$ are $1 \\times 24$, $2 \\times 12$, $3 \\times 8$, $4 \\times 6$, $6 \\times 4$, $8 \\times 3$, $12 \\times 2$, $24 \\times 1$ — eight of them. Both factors must be at least $2$, because $x \\geq 1$ and $y \\geq 1$, so throw out $1 \\times 24$ and $24 \\times 1$. That leaves SIX ✓: $(1, 11)$, $(2, 7)$, $(3, 5)$, $(5, 3)$, $(7, 2)$, $(11, 1)$. Check $(3, 5)$: $15 + 3 + 5 = 23$ ✓. (The choice $8$ counts all eight factor pairs and forgets that a factor of $1$ would force $x$ or $y$ to be $0$, which is not positive; the choice $4$ counts UNORDERED pairs of $24$, treating $2 \\times 12$ and $12 \\times 2$ as the same thing, but $(x,y)$ is an ORDERED pair; the choice $3$ counts unordered pairs after also dropping $1 \\times 24$.)',
    },
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + 3x + 3y = 27$?',
      choices: ['$9$', '$5$', '$3$', '$2$'],
      answer: 2,
      solution:
        'The magic constant is $3 \\cdot 3 = 9$, so $(x + 3)(y + 3) = 36$. The ordered factor pairs of $36$ are $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$, $9 \\times 4$, $12 \\times 3$, $18 \\times 2$, $36 \\times 1$ — nine of them. This time each factor must be at least $4$, since $x \\geq 1$ makes $x + 3 \\geq 4$. Only $4 \\times 9$, $6 \\times 6$, and $9 \\times 4$ qualify, so there are THREE pairs ✓: $(1, 6)$, $(3, 3)$, $(6, 1)$. Check $(1, 6)$: $6 + 3 + 18 = 27$ ✓. (The choice $9$ counts every factor pair without checking positivity; the choice $5$ uses a minimum of $3$ instead of $4$ for each factor, which would allow $3 \\times 12$ and $12 \\times 3$ and hand back $x = 0$; the choice $2$ collapses $(1,6)$ and $(6,1)$ into one unordered pair.)',
    },
    {
      q: 'Every ordered pair of positive integers $(x, y)$ with $xy + x + y = 29$ gives some value of $x$. What is the SUM of all the possible values of $x$?',
      choices: ['$6$', '$35$', '$41$', '$64$'],
      answer: 1,
      solution:
        'Add $1 \\cdot 1 = 1$ to both sides: $(x + 1)(y + 1) = 30$. The divisors of $30$ are $1, 2, 3, 5, 6, 10, 15, 30$, so there are eight ordered factor pairs. Both factors must be at least $2$, which rules out $x + 1 = 1$ and $x + 1 = 30$ (the latter forces $y + 1 = 1$, so $y = 0$). The usable values of $x + 1$ are $2, 3, 5, 6, 10, 15$, giving $x = 1, 2, 4, 5, 9, 14$. Their sum is $1 + 2 + 4 + 5 + 9 + 14 = 35$ ✓. Check one pair, $x = 4$: then $y + 1 = 6$, so $y = 5$, and $20 + 4 + 5 = 29$ ✓. (The choice $6$ is the NUMBER of pairs rather than the sum of the $x$ values; the choice $41$ adds the divisors $2 + 3 + 5 + 6 + 10 + 15$ and forgets to subtract $1$ from each one; the choice $64$ subtracts the $1$s but keeps the two banned divisors $1$ and $30$, adding in $x = 0$ and $x = 29$.)',
    },
  ],
  // p8 — a negative coefficient, then report a combination of x and y
  [
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy - 3x + 4y = 20$. What is $x + y$?',
      choices: ['$4$', '$16$', '$11$', '$8$'],
      answer: 3,
      solution:
        'The magic constant is $(-3) \\cdot 4 = -12$, so SUBTRACT $12$ from both sides: $xy - 3x + 4y - 12 = 8$, and the left factors as $x(y - 3) + 4(y - 3) = (x + 4)(y - 3) = 8$. Since $x \\geq 1$, the first factor is at least $5$; and because the product $8$ is positive while the first factor is positive, the second factor must be positive too. The ordered factor pairs of $8$ are $1 \\times 8$, $2 \\times 4$, $4 \\times 2$, $8 \\times 1$ — four of them, and only $8 \\times 1$ has a first factor of at least $5$. So $x + 4 = 8$ and $y - 3 = 1$, giving $x = 4$ and $y = 4$ ✓. Check forward: $16 - 12 + 16 = 20$ ✓. So $x + y = 8$ ✓. (The choice $4$ stops at $x$ and never adds $y$; the choice $16$ reports $xy$, the wrong quantity; the choice $11$ comes from ADDING $12$ instead of subtracting it, landing on $(x+4)(y-3) = 32$ and the pair $8 \\times 4$, which gives $x = 4$, $y = 7$ — and $28 - 12 + 28 = 44 \\ne 20$.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy - 4x + 5y = 29$. What is $x + y$?',
      choices: ['$20$', '$9$', '$13$', '$4$'],
      answer: 1,
      solution:
        'The magic constant is $(-4) \\cdot 5 = -20$, so subtract $20$ from both sides: $xy - 4x + 5y - 20 = 9$, and the left groups as $x(y - 4) + 5(y - 4) = (x + 5)(y - 4) = 9$. Since $x \\geq 1$ we need $x + 5 \\geq 6$, and the product being positive forces $y - 4$ to be positive as well. The ordered factor pairs of $9$ are $1 \\times 9$, $3 \\times 3$, $9 \\times 1$ — three of them, and only $9 \\times 1$ has a first factor of at least $6$. So $x + 5 = 9$ and $y - 4 = 1$, giving $x = 4$ and $y = 5$ ✓. Check forward: $20 - 16 + 25 = 29$ ✓. So $x + y = 9$ ✓. (The choice $20$ reports $xy$ instead of $x + y$; the choice $4$ stops at $x$; the choice $13$ comes from adding $20$ instead of subtracting, landing on $(x+5)(y-4) = 49$ and the pair $7 \\times 7$, which gives $x = 2$, $y = 11$ — and $22 - 8 + 55 = 69 \\ne 29$.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 6x - y = 15$. What is $xy$?',
      choices: ['$5$', '$3$', '$6$', '$9$'],
      answer: 2,
      solution:
        'The coefficient of $y$ is $-1$, so the magic constant is $6 \\cdot (-1) = -6$. Subtract $6$ from both sides: $xy + 6x - y - 6 = 9$, and the left groups as $x(y + 6) - (y + 6) = (x - 1)(y + 6) = 9$. Since $y \\geq 1$ we need $y + 6 \\geq 7$, and the ordered factor pairs of $9$ are $1 \\times 9$, $3 \\times 3$, $9 \\times 1$ — three of them, with only $1 \\times 9$ putting a number of at least $7$ in the second slot. So $x - 1 = 1$ and $y + 6 = 9$, giving $x = 2$ and $y = 3$ ✓. Check forward: $6 + 12 - 3 = 15$ ✓. The question asks for the product: $xy = 6$ ✓. (The choice $5$ is $x + y$, the wrong quantity; the choice $3$ stops at $y$; the choice $9$ is the value of $(x-1)(y+6)$, which is the product of the SHIFTED numbers, not of $x$ and $y$.)',
    },
  ],
  // p9 — count the ordered pairs when the two coefficients differ
  [
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + 4x + 2y = 64$?',
      choices: ['$12$', '$8$', '$6$', '$7$'],
      answer: 2,
      solution:
        'The magic constant is $4 \\cdot 2 = 8$, so $(x + 2)(y + 4) = 72$. Because $x \\geq 1$ and $y \\geq 1$, the first factor must be at least $3$ and the second at least $5$ — the two bars are DIFFERENT heights here, which is what makes this one tricky. Run through the ordered factor pairs of $72$: $1 \\times 72$ ✗ (first too small), $2 \\times 36$ ✗, $3 \\times 24$ ✓, $4 \\times 18$ ✓, $6 \\times 12$ ✓, $8 \\times 9$ ✓, $9 \\times 8$ ✓, $12 \\times 6$ ✓, $18 \\times 4$ ✗ (second too small), $24 \\times 3$ ✗, $36 \\times 2$ ✗, $72 \\times 1$ ✗. That is twelve pairs checked and SIX that survive ✓: $(1, 20)$, $(2, 14)$, $(4, 8)$, $(6, 5)$, $(7, 4)$, $(10, 2)$. Check $(4, 8)$: $32 + 16 + 16 = 64$ ✓, and check $(10, 2)$: $20 + 40 + 4 = 64$ ✓. (The choice $12$ counts every factor pair of $72$ with no positivity check; the choice $8$ uses a minimum of $3$ for BOTH factors, which lets in $18 \\times 4$ and $24 \\times 3$ and makes $y$ zero or negative; the choice $7$ counts the factor pairs of the un-shifted $64 = 2^6$, forgetting to add the magic constant to the right side.)',
    },
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + x + 3y = 47$?',
      choices: ['$6$', '$4$', '$2$', '$3$'],
      answer: 3,
      solution:
        'The magic constant is $1 \\cdot 3 = 3$, so $(x + 3)(y + 1) = 50$. The first factor must be at least $4$ and the second at least $2$. The ordered factor pairs of $50$ are $1 \\times 50$ ✗, $2 \\times 25$ ✗, $5 \\times 10$ ✓, $10 \\times 5$ ✓, $25 \\times 2$ ✓, $50 \\times 1$ ✗ (second too small) — six checked, THREE surviving ✓: $(2, 9)$, $(7, 4)$, $(22, 1)$. Check $(2, 9)$: $18 + 2 + 27 = 47$ ✓, and check $(22, 1)$: $22 + 22 + 3 = 47$ ✓. (The choice $6$ counts all six factor pairs with no positivity check; the choice $4$ tests only the first factor and forgets that $y + 1 \\geq 2$, so it lets in $50 \\times 1$ with $y = 0$; the choice $2$ applies the minimum of $4$ to BOTH factors, which wrongly throws out $25 \\times 2$ even though $y = 1$ there is perfectly positive.)',
    },
    {
      q: 'Over all ordered pairs of positive integers $(x, y)$ with $xy + 2x + 3y = 42$, what is the largest possible value of $x + y$?',
      choices: ['$14$', '$11$', '$5$', '$9$'],
      answer: 0,
      solution:
        'The magic constant is $2 \\cdot 3 = 6$, so $(x + 3)(y + 2) = 48$. The first factor must be at least $4$ and the second at least $3$. Sorting through the ordered factor pairs of $48$: $4 \\times 12$ ✓ gives $(1, 10)$ with $x + y = 11$; $6 \\times 8$ ✓ gives $(3, 6)$ with sum $9$; $8 \\times 6$ ✓ gives $(5, 4)$ with sum $9$; $12 \\times 4$ ✓ gives $(9, 2)$ with sum $11$; $16 \\times 3$ ✓ gives $(13, 1)$ with sum $14$; while $1 \\times 48$, $2 \\times 24$, and $3 \\times 16$ have a first factor below $4$, and $24 \\times 2$ and $48 \\times 1$ have a second factor below $3$. Five pairs survive, and the biggest sum is $14$ ✓. Check $(13, 1)$: $13 + 26 + 3 = 42$ ✓. Notice the pattern — the sum is largest at the most LOPSIDED pair, so hunt for the pair that pushes one variable as high as it will go. (The choice $11$ is the runner-up sum, from stopping before the lopsided pair $16 \\times 3$; the choice $5$ is the NUMBER of pairs, not a sum; the choice $9$ is the SMALLEST sum, which happens at the most balanced pairs.)',
    },
  ],
  // p10 — hard: push one variable as large as it will go
  [
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 3x + y = 1001$. What is the largest possible value of $x$?',
      choices: ['$250$', '$251$', '$501$', '$1003$'],
      answer: 0,
      solution:
        'Add the magic constant $3 \\cdot 1 = 3$ to both sides: $(x + 1)(y + 3) = 1004$. The two factors multiply to a fixed number, so to make $x + 1$ as BIG as possible we make $y + 3$ as SMALL as possible. Factor the right side: $1004 = 2^2 \\cdot 251$, and $251$ is prime, so the divisors are $1, 2, 4, 251, 502, 1004$. Since $y \\geq 1$, we need $y + 3 \\geq 4$, and the smallest divisor that clears that bar is $4$. So $y = 1$ and $x + 1 = 1004 \\div 4 = 251$, giving $x = 250$ ✓. Check forward: $250 \\cdot 1 + 3 \\cdot 250 + 1 = 250 + 750 + 1 = 1001$ ✓. (The choice $251$ is the value of $x + 1$ — it forgets the last step of undoing the shift; the choice $501$ takes $y + 3 = 2$, which means $y = -1$, not a positive integer; the choice $1003$ takes $y + 3 = 1$, which makes $y$ negative too.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 2x + 4y = 302$. What is the largest possible value of $y$?',
      choices: ['$62$', '$153$', '$308$', '$60$'],
      answer: 3,
      solution:
        'Add the magic constant $2 \\cdot 4 = 8$ to both sides: $(x + 4)(y + 2) = 310$. This time we want $y$ big, so we want $y + 2$ big, which means making $x + 4$ as SMALL as we can. Factor: $310 = 2 \\cdot 5 \\cdot 31$, so the divisors are $1, 2, 5, 10, 31, 62, 155, 310$. Since $x \\geq 1$ we need $x + 4 \\geq 5$, and the smallest divisor that clears the bar is $5$. So $x = 1$ and $y + 2 = 310 \\div 5 = 62$, giving $y = 60$ ✓. Check forward: $1 \\cdot 60 + 2 \\cdot 1 + 4 \\cdot 60 = 60 + 2 + 240 = 302$ ✓. (The choice $62$ is the value of $y + 2$ and forgets to undo the shift; the choice $153$ takes $x + 4 = 2$, which makes $x = -2$; the choice $308$ takes $x + 4 = 1$, which makes $x = -3$. Both of those break the rule that $x$ must be a positive integer.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 3x + 2y = 122$. What is the largest possible value of $x + y$?',
      choices: ['$61$', '$19$', '$31$', '$124$'],
      answer: 2,
      solution:
        'Add the magic constant $3 \\cdot 2 = 6$ to both sides: $(x + 2)(y + 3) = 128$. Since $128 = 2^7$, its divisors are $1, 2, 4, 8, 16, 32, 64, 128$ — a tidy list to sweep. We need $x + 2 \\geq 3$ and $y + 3 \\geq 4$. Check each ordered pair: $4 \\times 32$ ✓ gives $(2, 29)$ with $x + y = 31$; $8 \\times 16$ ✓ gives $(6, 13)$ with sum $19$; $16 \\times 8$ ✓ gives $(14, 5)$ with sum $19$; $32 \\times 4$ ✓ gives $(30, 1)$ with sum $31$; and $1 \\times 128$, $2 \\times 64$ fail the first bar while $64 \\times 2$, $128 \\times 1$ fail the second. Four pairs survive, and the largest sum is $31$ ✓. Check $(30, 1)$: $30 + 90 + 2 = 122$ ✓, and check $(2, 29)$: $58 + 6 + 58 = 122$ ✓. (The choice $19$ is the sum from the balanced pairs, which is the SMALLEST one, not the largest; the choice $61$ comes from allowing $2 \\times 64$, which gives $x = 0$, or $64 \\times 2$, which gives $y = -1$ — neither is a positive integer; the choice $124$ comes from allowing $128 \\times 1$, which makes $y = -2$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 11,
  sections: { '11.5': s115 },
}
