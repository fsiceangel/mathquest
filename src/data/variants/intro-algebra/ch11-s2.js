// Introduction to Algebra chapter 11 — variations for sections 11.3 and 11.4.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every cube factorization was multiplied back out, and every key was also
//    checked FORWARD by plugging a small number (usually $x = 1$) into both the
//    original expression and the claimed factorization.
//  - Every rationalized answer was checked against a decimal estimate of the
//    original fraction, and every set of four choices was compared by VALUE,
//    not by how it is written, so that no two choices are secretly equal.
//  - Each distractor is one named mistake. The traps that run through this pair
//    of sections are: NOT FLIPPING THE MIDDLE SIGN of the trinomial, using
//    $2ab$ (the binomial-square middle) instead of $ab$, writing $(a\pm b)^3$,
//    DROPPING A COMMON FACTOR that was pulled out front, ADDING instead of
//    subtracting when squaring a conjugate denominator, multiplying by the same
//    binomial instead of its conjugate, and FORGETTING TO DIVIDE the whole
//    numerator by the new denominator.

const s113 = [
  // p1 — recognize a perfect cube
  [
    {
      q: 'One of these numbers can be written as a whole number times itself three times. Which one is it?',
      choices: ['$8$', '$18$', '$20$', '$36$'],
      answer: 0,
      solution:
        'A perfect cube is some whole number used three times as a factor. Here $8 = 2 \\times 2 \\times 2 = 2^3$, so $8$ is the cube. (The choice $18$ is $2 \\times 3^2$, which has a leftover $2$ and is not a cube; the choice $20$ is $2^2 \\times 5$, not a cube; the choice $36 = 6^2$ is a perfect SQUARE, and squares are the classic mix-up here — the cube nearest $36$ is $27$.)',
    },
    {
      q: 'Which of these numbers is NOT a perfect cube?',
      choices: ['$64$', '$100$', '$125$', '$216$'],
      answer: 1,
      solution:
        'Check each one: $64 = 4^3$, $125 = 5^3$, and $216 = 6^3$. That leaves $100$, which is $10^2$ — a perfect square, not a cube. (The cubes on either side of $100$ are $64$ and $125$, so nothing whole cubes to $100$. Choosing $64$ is the usual slip, because $64$ is BOTH a square, $8^2$, and a cube, $4^3$ — being a square does not stop it from being a cube.)',
    },
    {
      q: 'Which expression is a perfect cube?',
      choices: ['$x^2$', '$9x^3$', '$8x^6$', '$16x^3$'],
      answer: 2,
      solution:
        'For a whole expression to be a cube, the number AND the exponent both have to work. Here $8x^6 = (2x^2)^3$, since $2^3 = 8$ and $(x^2)^3 = x^6$. (The choice $x^2$ has an exponent of $2$, not a multiple of $3$; the choice $9x^3$ has the right exponent but $9$ is not a cube — $2^3 = 8$ and $3^3 = 27$ skip right over it; the choice $16x^3$ fails the same way, since $16$ is $2^4$, not a cube.)',
    },
  ],
  // p2 — difference of cubes, plain variable cubed
  [
    {
      q: 'Factor $y^3 - 1$.',
      choices: ['$(y-1)^3$', '$(y-1)(y^2-y+1)$', '$(y-1)(y^2+y+1)$', '$(y-1)(y^2+1)$'],
      answer: 2,
      solution:
        'Both terms are cubes: $y^3$ and $1 = 1^3$. Use $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ with $a = y$ and $b = 1$: the binomial keeps the minus, and the middle term of the trinomial takes the OPPOSITE sign, so it is $+y$. That gives $(y-1)(y^2 + y + 1)$. Check forward at $y = 2$: the original is $8 - 1 = 7$, and $(1)(4 + 2 + 1) = 7$ ✓. (The choice $(y-1)(y^2-y+1)$ forgets to flip the middle sign and gives $(1)(3) = 3$ at $y = 2$; the choice $(y-1)^3$ expands to $y^3 - 3y^2 + 3y - 1$; the choice $(y-1)(y^2+1)$ drops the middle term entirely and gives $(1)(5) = 5$.)',
    },
    {
      q: 'Factor $x^3 - 512$.',
      choices: ['$(x-8)(x^2-8x+64)$', '$(x-8)(x^2+8x+64)$', '$(x-8)(x^2+16x+64)$', '$(x-8)^3$'],
      answer: 1,
      solution:
        'First spot the cube: $512 = 8 \\times 8 \\times 8 = 8^3$. With $a = x$ and $b = 8$, the difference formula gives $(x-8)(x^2 + 8x + 64)$ — minus in the binomial, plus in the middle, and $+64$ at the end. Check forward at $x = 1$: the original is $1 - 512 = -511$, and $(-7)(1 + 8 + 64) = (-7)(73) = -511$ ✓. (The choice with $-8x$ never flips the middle sign and gives $(-7)(57) = -399$; the choice with $+16x$ uses $2ab$, the middle of a binomial SQUARE, instead of the single product $ab$; the choice $(x-8)^3$ would need three factors of $x-8$, not one.)',
    },
    {
      q: 'When $125x^3 - 1$ is factored as a binomial times a trinomial, what is the middle term of the trinomial?',
      choices: ['$-5x$', '$10x$', '$25x$', '$5x$'],
      answer: 3,
      solution:
        'Write the cubes: $125x^3 = (5x)^3$ and $1 = 1^3$, so $a = 5x$ and $b = 1$. In $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ the middle term is $+ab = (5x)(1) = 5x$. The full factorization is $(5x-1)(25x^2 + 5x + 1)$. Check forward at $x = 1$: the original is $124$, and $(4)(31) = 124$ ✓. (The choice $-5x$ copies the sign from the binomial instead of flipping it; the choice $10x$ uses $2ab$, which belongs to $(a+b)^2$, not to a cube formula; the choice $25x$ mixes up the middle term with the first term, which is $a^2 = 25x^2$.)',
    },
  ],
  // p3 — sum of cubes, plain variable cubed
  [
    {
      q: 'Factor $y^3 + 27$.',
      choices: ['$(y+3)(y^2-3y+9)$', '$(y+3)(y^2+3y+9)$', '$(y+3)^3$', '$(y+3)(y^2-9)$'],
      answer: 0,
      solution:
        'Since $27 = 3^3$, this is a sum of cubes with $a = y$ and $b = 3$. Use $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$: the binomial takes the plus, and the middle of the trinomial flips to minus, giving $(y+3)(y^2 - 3y + 9)$. Check forward at $y = 1$: the original is $1 + 27 = 28$, and $(4)(1 - 3 + 9) = (4)(7) = 28$ ✓. (The choice with $+3y$ never flips the middle sign and gives $(4)(13) = 52$; the choice $(y+3)^3$ expands to $y^3 + 9y^2 + 27y + 27$; the choice $(y+3)(y^2-9)$ borrows the difference-of-squares partner $y^2 - 9$ and gives $(4)(-8) = -32$.)',
    },
    {
      q: 'Factor $a^3 + 1$.',
      choices: ['$(a+1)(a^2+a+1)$', '$(a+1)(a^2-a+1)$', '$(a+1)^3$', '$(a^2+1)(a+1)$'],
      answer: 1,
      solution:
        'Here $1 = 1^3$, so this is a sum of cubes with both letters small: $a^3 + 1^3 = (a+1)(a^2 - a + 1)$. Remember the sign rule — the binomial copies the original plus, the middle term takes the opposite sign. Check forward at $a = 2$: the original is $8 + 1 = 9$, and $(3)(4 - 2 + 1) = (3)(3) = 9$ ✓. (The choice with $+a$ in the middle gives $(3)(7) = 21$; the choice $(a+1)^3$ expands to $a^3 + 3a^2 + 3a + 1$; the choice $(a^2+1)(a+1)$ just splits the pieces up and expands to $a^3 + a^2 + a + 1$, which has two extra terms.)',
    },
    {
      q: 'Factor $x^3 + 729$.',
      choices: ['$(x+9)(x^2+9x+81)$', '$(x+9)(x^2-18x+81)$', '$(x+9)(x^2-9x+81)$', '$(x+9)^3$'],
      answer: 2,
      solution:
        'The cube hiding here is $729 = 9 \\times 9 \\times 9 = 9^3$, so $a = x$ and $b = 9$. The sum formula gives $(x+9)(x^2 - 9x + 81)$. Check forward at $x = 1$: the original is $1 + 729 = 730$, and $(10)(1 - 9 + 81) = (10)(73) = 730$ ✓. (The choice with $+9x$ forgets to flip the middle sign and gives $(10)(91) = 910$; the choice with $-18x$ uses $2ab$ instead of $ab$ and gives $(10)(64) = 640$; the choice $(x+9)^3$ is not what a sum of cubes ever produces — it expands to $x^3 + 27x^2 + 243x + 729$.)',
    },
  ],
  // p4 — sum of cubes with a coefficient inside
  [
    {
      q: 'Factor $8x^3 + 125$.',
      choices: [
        '$(2x+5)(4x^2-10x+25)$',
        '$(2x+5)(4x^2+10x+25)$',
        '$(2x+5)(4x^2-20x+25)$',
        '$(2x+5)(4x^2-25)$',
      ],
      answer: 0,
      solution:
        'Both terms are cubes: $8x^3 = (2x)^3$ and $125 = 5^3$, so $a = 2x$ and $b = 5$. Build the trinomial piece by piece: $a^2 = 4x^2$, then $-ab = -(2x)(5) = -10x$, then $b^2 = 25$. So $8x^3 + 125 = (2x+5)(4x^2 - 10x + 25)$. Check forward at $x = 1$: the original is $8 + 125 = 133$, and $(7)(4 - 10 + 25) = (7)(19) = 133$ ✓. (The choice with $+10x$ skips the sign flip and gives $(7)(39) = 273$; the choice with $-20x$ uses $2ab$; the choice $(2x+5)(4x^2-25)$ leaves out the middle term and gives $(7)(-21) = -147$.)',
    },
    {
      q: 'Factor $1000x^3 + 27$.',
      choices: [
        '$(10x+3)(100x^2+30x+9)$',
        '$(10x+3)(100x^2-60x+9)$',
        '$(10x+3)(100x^2-30x+9)$',
        '$(10x+3)^3$',
      ],
      answer: 2,
      solution:
        'Recognize $1000x^3 = (10x)^3$ and $27 = 3^3$, so $a = 10x$ and $b = 3$. The trinomial is $a^2 - ab + b^2 = 100x^2 - 30x + 9$, giving $(10x+3)(100x^2 - 30x + 9)$. Check forward at $x = 1$: the original is $1000 + 27 = 1027$, and $(13)(100 - 30 + 9) = (13)(79) = 1027$ ✓. (The choice with $+30x$ does not flip the middle sign and gives $(13)(139) = 1807$; the choice with $-60x$ uses $2ab = 60x$ instead of $ab = 30x$; $(10x+3)^3$ has three binomial factors, not a binomial times a trinomial.)',
    },
    {
      q: 'The factorization $125x^3 + 64 = (5x+4)(Ax^2 + Bx + C)$ is correct. What is $B$?',
      choices: ['$20$', '$-40$', '$-16$', '$-20$'],
      answer: 3,
      solution:
        'Match the sum-of-cubes formula: $a = 5x$ because $(5x)^3 = 125x^3$, and $b = 4$ because $4^3 = 64$. The trinomial is $a^2 - ab + b^2$, so $A = 25$, $B = -(5)(4) = -20$, and $C = 16$. Check forward at $x = 1$: the original is $125 + 64 = 189$, and $(9)(25 - 20 + 16) = (9)(21) = 189$ ✓. (The choice $20$ keeps the plus sign of the binomial instead of flipping it; the choice $-40$ uses $2ab$; the choice $-16$ grabs the value of $C$ and puts a minus on it.)',
    },
  ],
  // p5 — the trinomial from a cube formula never factors again
  [
    {
      q: 'After factoring $y^3 - 64 = (y-4)(y^2 + 4y + 16)$, can the trinomial $y^2 + 4y + 16$ be factored further?',
      choices: [
        'No — it does not factor',
        'Yes, as $(y+4)^2$',
        'Yes, as $(y+2)(y+8)$',
        'Yes, as $(y+4)(y-4)$',
      ],
      answer: 0,
      solution:
        'Run the middle-term check. A perfect square $(y+4)^2$ would need a middle term of $2 \\cdot y \\cdot 4 = 8y$, but we only have $4y$ — cube formulas always give just ONE $ab$, never two. And $(y+2)(y+8)$ expands to $y^2 + 10y + 16$, while $(y+4)(y-4)$ is $y^2 - 16$, with no middle term at all and the wrong sign on the end. Nothing works, and nothing ever will: the trinomial from a sum or difference of cubes is already finished.',
    },
    {
      q: 'The trinomial $x^2 + 5x + 25$ comes from factoring $x^3 - 125$. Why can it NOT be rewritten as $(x+5)^2$?',
      choices: [
        'Because $(x+5)^2 = x^2 + 25$, which is missing a middle term',
        'Because $(x+5)^2 = x^2 + 10x + 25$, whose middle term is twice as big',
        'Because $(x+5)^2 = x^2 + 5x + 25$, so the two really are the same thing',
        'Because $(x+5)^2 = x^2 - 10x + 25$',
      ],
      answer: 1,
      solution:
        'Expand carefully: $(x+5)^2 = x^2 + 2 \\cdot x \\cdot 5 + 25 = x^2 + 10x + 25$. That middle term is $10x$, but the trinomial from the cube formula has only $5x$ — exactly half. That factor of $2$ is the whole difference between a binomial square and a cube-formula trinomial, and it is why the cube trinomial never factors. (The first choice forgets the middle term of a square entirely; the third claims they match, but $10x \\ne 5x$; the last one uses a minus sign that belongs to $(x-5)^2$.)',
    },
    {
      q: 'A student factors $8x^3 + 1$ as $(2x+1)(4x^2 - 2x + 1)$ and then tries to factor $4x^2 - 2x + 1$ further. What should the student conclude?',
      choices: [
        'It equals $(2x-1)^2$',
        'It equals $(2x+1)(2x-1)$',
        'It cannot be factored further',
        'It equals $(4x-1)(x-1)$',
      ],
      answer: 2,
      solution:
        'The factoring is already complete. Test the tempting answers by expanding: $(2x-1)^2 = 4x^2 - 4x + 1$, whose middle term is $-4x$, not $-2x$; $(2x+1)(2x-1) = 4x^2 - 1$, with no middle term; and $(4x-1)(x-1) = 4x^2 - 5x + 1$. None of them match, because the trinomial that comes out of a cube formula carries a single $ab$ in the middle and can never be split again.',
    },
  ],
  // p6 — difference of cubes with a coefficient inside
  [
    {
      q: 'Factor $8y^3 - 343$.',
      choices: [
        '$(2y-7)(4y^2+14y+49)$',
        '$(2y-7)(4y^2-14y+49)$',
        '$(2y+7)(4y^2+14y+49)$',
        '$(2y-7)^3$',
      ],
      answer: 0,
      solution:
        'Write both terms as cubes: $8y^3 = (2y)^3$ and $343 = 7^3$, so $a = 2y$ and $b = 7$. The difference formula gives $(a-b)(a^2 + ab + b^2) = (2y-7)(4y^2 + 14y + 49)$ — minus outside, plus in the middle. Check forward at $y = 1$: the original is $8 - 343 = -335$, and $(-5)(4 + 14 + 49) = (-5)(67) = -335$ ✓. (The choice with $-14y$ never flips the middle sign and gives $(-5)(39) = -195$; the choice starting $(2y+7)$ puts the wrong sign in the binomial, which would make it a SUM of cubes; $(2y-7)^3$ is three copies of the binomial.)',
    },
    {
      q: 'Factor $125x^3 - 8$.',
      choices: [
        '$(5x-2)(25x^2-10x+4)$',
        '$(5x-2)(25x^2+10x+4)$',
        '$(5x+2)(25x^2-10x+4)$',
        '$(5x-2)(25x^2+4)$',
      ],
      answer: 1,
      solution:
        'Here $125x^3 = (5x)^3$ and $8 = 2^3$, so $a = 5x$ and $b = 2$. Build the trinomial: $a^2 = 25x^2$, $+ab = +10x$, $b^2 = 4$. The answer is $(5x-2)(25x^2 + 10x + 4)$. Check forward at $x = 1$: the original is $125 - 8 = 117$, and $(3)(25 + 10 + 4) = (3)(39) = 117$ ✓. (The choice with $-10x$ copies the binomial sign instead of flipping it and gives $(3)(19) = 57$; the choice starting $(5x+2)$ has the wrong sign outside; the last choice drops the middle term and gives $(3)(29) = 87$.)',
    },
    {
      q: 'Factor $64x^3 - 125$.',
      choices: [
        '$(4x-5)(16x^2-20x+25)$',
        '$(4x+5)(16x^2-20x+25)$',
        '$(4x-5)(16x^2+40x+25)$',
        '$(4x-5)(16x^2+20x+25)$',
      ],
      answer: 3,
      solution:
        'Both terms are cubes: $64x^3 = (4x)^3$ and $125 = 5^3$. With $a = 4x$ and $b = 5$, the difference formula gives $(4x-5)(16x^2 + 20x + 25)$. Check forward at $x = 1$: the original is $64 - 125 = -61$, and $(-1)(16 + 20 + 25) = (-1)(61) = -61$ ✓. (The choice with $-20x$ misses the sign flip and gives $(-1)(21) = -21$; the choice starting $(4x+5)$ turns it into a sum of cubes; the choice with $+40x$ uses $2ab = 40x$ where the formula wants $ab = 20x$.)',
    },
  ],
  // p7 — a cube in disguise: exponents that are multiples of 3
  [
    {
      q: 'Factor $x^6 - 27$. (Hint: $x^6 = (x^2)^3$.)',
      choices: [
        '$(x^2-3)(x^4-3x^2+9)$',
        '$(x^2-3)(x^4+3x^2+9)$',
        '$(x^2-3)^3$',
        '$(x^3-3)(x^3+9)$',
      ],
      answer: 1,
      solution:
        'Take the hint: $x^6 = (x^2)^3$ and $27 = 3^3$, so this is a difference of cubes with $a = x^2$ and $b = 3$. The trinomial is $a^2 + ab + b^2 = x^4 + 3x^2 + 9$, giving $(x^2-3)(x^4 + 3x^2 + 9)$. Check forward at $x = 1$: the original is $1 - 27 = -26$, and $(-2)(1 + 3 + 9) = (-2)(13) = -26$ ✓. (The choice with $-3x^2$ forgets the sign flip and gives $(-2)(7) = -14$; $(x^2-3)^3$ is a cube of a binomial; $(x^3-3)(x^3+9)$ expands to $x^6 + 6x^3 - 27$, which has an extra $x^3$ term.)',
    },
    {
      q: 'Factor $y^9 + 64$. (Hint: $y^9 = (y^3)^3$.)',
      choices: [
        '$(y^3+4)(y^6+4y^3+16)$',
        '$(y^3+4)^3$',
        '$(y^3+4)(y^6-4y^3+16)$',
        '$(y^3+4)(y^6-16)$',
      ],
      answer: 2,
      solution:
        'An exponent that is a multiple of $3$ is a cube: $y^9 = (y^3)^3$, and $64 = 4^3$. So $a = y^3$, $b = 4$, and the sum formula gives $(y^3+4)(y^6 - 4y^3 + 16)$ — notice $a^2 = (y^3)^2 = y^6$. Check forward at $y = 1$: the original is $1 + 64 = 65$, and $(5)(1 - 4 + 16) = (5)(13) = 65$ ✓. (The choice with $+4y^3$ skips the sign flip and gives $(5)(21) = 105$; $(y^3+4)^3$ is a binomial cubed; $(y^3+4)(y^6-16)$ borrows a difference of squares and gives $(5)(-15) = -75$.)',
    },
    {
      q: 'Factor $27x^6 - 1$.',
      choices: [
        '$(3x^2-1)(9x^4-3x^2+1)$',
        '$(3x^2+1)(9x^4-3x^2+1)$',
        '$(3x^2-1)(9x^4+6x^2+1)$',
        '$(3x^2-1)(9x^4+3x^2+1)$',
      ],
      answer: 3,
      solution:
        'The whole first term is a cube: $27x^6 = (3x^2)^3$, since $3^3 = 27$ and $(x^2)^3 = x^6$. With $a = 3x^2$ and $b = 1$, the difference formula gives $(3x^2-1)(9x^4 + 3x^2 + 1)$. Check forward at $x = 1$: the original is $27 - 1 = 26$, and $(2)(9 + 3 + 1) = (2)(13) = 26$ ✓. (The choice with $-3x^2$ misses the sign flip and gives $(2)(7) = 14$; the choice starting $(3x^2+1)$ has the wrong sign outside; the choice with $+6x^2$ uses $2ab$ instead of $ab$.)',
    },
  ],
  // p8 — the cube formulas as an arithmetic shortcut
  [
    {
      q: 'Compute $\\frac{9^3 + 4^3}{9 + 4}$ without a calculator.',
      choices: ['$61$', '$97$', '$133$', '$65$'],
      answer: 0,
      solution:
        'Since $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$, dividing by $a + b$ leaves the trinomial. With $a = 9$ and $b = 4$: $81 - 36 + 16 = 61$. Check the long way: $\\frac{729 + 64}{13} = \\frac{793}{13} = 61$ ✓. (The choice $97$ is $81 + 16$, forgetting the $-ab$ term; the choice $133$ is $81 + 36 + 16$, which is the trinomial for a DIFFERENCE of cubes; the choice $65$ is $81 - 16$, subtracting $b^2$ instead of $ab$.)',
    },
    {
      q: 'Compute $\\frac{11^3 - 4^3}{11 - 4}$ without a calculator.',
      choices: ['$137$', '$93$', '$181$', '$105$'],
      answer: 2,
      solution:
        'For a difference of cubes, $\\frac{a^3 - b^3}{a - b} = a^2 + ab + b^2$. With $a = 11$ and $b = 4$: $121 + 44 + 16 = 181$. Check the long way: $\\frac{1331 - 64}{7} = \\frac{1267}{7} = 181$ ✓. (The choice $93$ is $121 - 44 + 16$, the sum-of-cubes trinomial with the wrong middle sign; the choice $137$ is $121 + 16$, dropping the $ab$ term; the choice $105$ is $121 - 16$.)',
    },
    {
      q: 'Compute $\\frac{20^3 + 10^3}{30}$ without a calculator.',
      choices: ['$500$', '$700$', '$900$', '$300$'],
      answer: 3,
      solution:
        'The bottom is exactly $20 + 10$, so the sum-of-cubes formula does the work: $\\frac{a^3+b^3}{a+b} = a^2 - ab + b^2 = 400 - 200 + 100 = 300$. Check the long way: $\\frac{8000 + 1000}{30} = \\frac{9000}{30} = 300$ ✓. (The choice $500$ is $400 + 100$, forgetting the middle term; the choice $700$ is $400 + 200 + 100$, using the difference-of-cubes trinomial; the choice $900$ comes from believing $a^3 + b^3 = (a+b)^3$, since $\\frac{27000}{30} = 900$ — but cubing does not distribute over addition.)',
    },
  ],
  // p9 — cubes from a sum and a product
  [
    {
      q: 'If $a + b = 4$ and $ab = 3$, what is $a^3 + b^3$?',
      choices: ['$28$', '$64$', '$40$', '$52$'],
      answer: 0,
      solution:
        'Two steps. First square the sum to reach $a^2 + b^2 = (a+b)^2 - 2ab = 16 - 6 = 10$. Then $a^3 + b^3 = (a+b)(a^2 - ab + b^2) = 4(10 - 3) = 4 \\cdot 7 = 28$. Check forward: the numbers with sum $4$ and product $3$ are $1$ and $3$, and $1 + 27 = 28$ ✓. (The choice $64 = 4^3$ assumes cubing distributes over addition; the choice $40$ is $4 \\cdot 10$, forgetting to subtract $ab$; the choice $52$ is $4(16-3)$, using $(a+b)^2$ where $a^2 + b^2$ belongs.)',
    },
    {
      q: 'If $x + y = 6$ and $xy = 8$, what is $x^3 + y^3$?',
      choices: ['$216$', '$120$', '$72$', '$168$'],
      answer: 2,
      solution:
        'First $x^2 + y^2 = (x+y)^2 - 2xy = 36 - 16 = 20$. Then $x^3 + y^3 = (x+y)(x^2 - xy + y^2) = 6(20 - 8) = 6 \\cdot 12 = 72$. Check forward: the numbers with sum $6$ and product $8$ are $2$ and $4$, and $8 + 64 = 72$ ✓. (The choice $216 = 6^3$ is the cube-of-the-sum trap; the choice $120$ is $6 \\cdot 20$, skipping the $-xy$; the choice $168$ is $6(36-8)$, forgetting to take $2xy$ off first.)',
    },
    {
      q: 'If $m - n = 4$ and $mn = 12$, what is $m^3 - n^3$?',
      choices: ['$64$', '$160$', '$112$', '$208$'],
      answer: 3,
      solution:
        'This time square the DIFFERENCE: $m^2 + n^2 = (m-n)^2 + 2mn = 16 + 24 = 40$. Then $m^3 - n^3 = (m-n)(m^2 + mn + n^2) = 4(40 + 12) = 4 \\cdot 52 = 208$. Check forward: the numbers with difference $4$ and product $12$ are $6$ and $2$, and $216 - 8 = 208$ ✓. (The choice $64 = 4^3$ cubes the difference; the choice $160$ is $4 \\cdot 40$, dropping the $+mn$; the choice $112$ is $4(40-12)$, using the sum-of-cubes trinomial by mistake.)',
    },
  ],
  // p10 — pull out the common factor first, then use a cube formula
  [
    {
      q: 'Factor $3x^3 - 81$ completely.',
      choices: [
        '$3(x-3)(x^2-3x+9)$',
        '$3(x-3)(x^2+3x+9)$',
        '$(x-3)(x^2+3x+9)$',
        '$3(x-3)^3$',
      ],
      answer: 1,
      solution:
        'Neither $3x^3$ nor $81$ is a cube, so pull out the common factor first: $3x^3 - 81 = 3(x^3 - 27)$. Now $x^3 - 27$ is a difference of cubes with $b = 3$: $3(x-3)(x^2 + 3x + 9)$. Check forward at $x = 1$: the original is $3 - 81 = -78$, and $3(-2)(1 + 3 + 9) = 3(-2)(13) = -78$ ✓. (The choice with $-3x$ forgets the sign flip and gives $-42$; the choice without the leading $3$ drops the common factor and gives only $-26$; $3(x-3)^3$ cubes the binomial.)',
    },
    {
      q: 'Factor $5x^3 + 40$ completely.',
      choices: [
        '$5(x+2)(x^2+2x+4)$',
        '$(x+2)(x^2-2x+4)$',
        '$5(x+2)(x^2-2x+4)$',
        '$5(x+2)^3$',
      ],
      answer: 2,
      solution:
        'Take the common factor out first: $5x^3 + 40 = 5(x^3 + 8)$. Then $x^3 + 8$ is a sum of cubes with $b = 2$, so the complete factorization is $5(x+2)(x^2 - 2x + 4)$. Check forward at $x = 1$: the original is $5 + 40 = 45$, and $5(3)(1 - 2 + 4) = 5(3)(3) = 45$ ✓. (The choice with $+2x$ misses the sign flip and gives $5 \\cdot 3 \\cdot 7 = 105$; the choice with no leading $5$ loses the common factor and gives only $9$; $5(x+2)^3$ cubes the binomial.)',
    },
    {
      q: 'Factor $4x^4 - 32x$ completely.',
      choices: [
        '$4x(x-2)(x^2-2x+4)$',
        '$4x(x+2)(x^2-2x+4)$',
        '$4x(x-2)^3$',
        '$4x(x-2)(x^2+2x+4)$',
      ],
      answer: 3,
      solution:
        'The common factor here includes a variable: both terms share $4x$, so $4x^4 - 32x = 4x(x^3 - 8)$. Then the difference of cubes gives $4x(x-2)(x^2 + 2x + 4)$. Check forward at $x = 3$: the original is $324 - 96 = 228$, and $4(3)(1)(9 + 6 + 4) = 12 \\cdot 19 = 228$ ✓. (The choice with $-2x$ forgets the sign flip and gives $12 \\cdot 7 = 84$; the choice starting $4x(x+2)$ has the sign pattern of a SUM of cubes and gives $12 \\cdot 5 \\cdot 7 = 420$; $4x(x-2)^3$ cubes the binomial and gives $12 \\cdot 1 = 12$.)',
    },
  ],
]

const s114 = [
  // p1 — one-step rationalizing, single root on the bottom
  [
    {
      q: 'Rationalize $\\frac{1}{\\sqrt{5}}$.',
      choices: ['$\\frac{1}{5}$', '$\\frac{\\sqrt{5}}{5}$', '$\\sqrt{5}$', '$5\\sqrt{5}$'],
      answer: 1,
      solution:
        'Multiply top and bottom by $\\sqrt{5}$ — that is multiplying by $1$ in disguise, so the value cannot change: $\\frac{1}{\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$. Sanity check: $\\frac{1}{2.236} \\approx 0.447$, and $\\frac{2.236}{5} \\approx 0.447$ ✓. (The choice $\\frac{1}{5}$ just erases the root sign; the choice $\\sqrt{5}$ multiplies only the top and forgets the bottom, and $2.24$ is nowhere near $0.45$; the choice $5\\sqrt{5}$ multiplies where it should divide.)',
    },
    {
      q: 'Rationalize $\\frac{3}{\\sqrt{7}}$.',
      choices: ['$\\frac{3}{7}$', '$\\frac{\\sqrt{7}}{3}$', '$\\frac{3\\sqrt{7}}{7}$', '$3\\sqrt{7}$'],
      answer: 2,
      solution:
        'Multiply top and bottom by $\\sqrt{7}$: the bottom becomes $\\sqrt{7} \\times \\sqrt{7} = 7$ and the top becomes $3\\sqrt{7}$, giving $\\frac{3\\sqrt{7}}{7}$. Sanity check: $\\frac{3}{2.646} \\approx 1.13$, and $\\frac{3(2.646)}{7} \\approx 1.13$ ✓. (The choice $\\frac{3}{7} \\approx 0.43$ drops the root; the choice $\\frac{\\sqrt{7}}{3} \\approx 0.88$ flips which number goes on top; the choice $3\\sqrt{7} \\approx 7.94$ forgets to divide by the new denominator.)',
    },
    {
      q: 'Rationalize $\\frac{2}{\\sqrt{11}}$.',
      choices: [
        '$\\frac{2}{11}$',
        '$\\frac{\\sqrt{11}}{11}$',
        '$2\\sqrt{11}$',
        '$\\frac{2\\sqrt{11}}{11}$',
      ],
      answer: 3,
      solution:
        'Multiply top and bottom by $\\sqrt{11}$: $\\frac{2}{\\sqrt{11}} \\times \\frac{\\sqrt{11}}{\\sqrt{11}} = \\frac{2\\sqrt{11}}{11}$. Nothing reduces, since $2$ and $11$ share no factor. Sanity check: $\\frac{2}{3.317} \\approx 0.603$, and $\\frac{2(3.317)}{11} \\approx 0.603$ ✓. (The choice $\\frac{2}{11} \\approx 0.18$ throws the root away; the choice $\\frac{\\sqrt{11}}{11} \\approx 0.30$ loses the $2$ from the numerator; the choice $2\\sqrt{11} \\approx 6.63$ keeps the new numerator but never divides by $11$.)',
    },
  ],
  // p2 — rationalize, then reduce
  [
    {
      q: 'Rationalize and simplify $\\frac{10}{\\sqrt{5}}$.',
      choices: [
        '$2\\sqrt{5}$',
        '$10\\sqrt{5}$',
        '$\\frac{\\sqrt{5}}{2}$',
        '$\\frac{2\\sqrt{5}}{5}$',
      ],
      answer: 0,
      solution:
        'Multiply top and bottom by $\\sqrt{5}$ to get $\\frac{10\\sqrt{5}}{5}$, then reduce: $10 \\div 5 = 2$, so the answer is $2\\sqrt{5}$. Sanity check: $\\frac{10}{2.236} \\approx 4.47$, and $2(2.236) \\approx 4.47$ ✓. (The choice $10\\sqrt{5}$ forgets the denominator; the choice $\\frac{\\sqrt{5}}{2}$ divides $5$ by $10$ instead of $10$ by $5$; the choice $\\frac{2\\sqrt{5}}{5}$ cancels the $10$ down to $2$ but then leaves the $5$ on the bottom as well, using it twice.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{8}{\\sqrt{2}}$.',
      choices: ['$8\\sqrt{2}$', '$4\\sqrt{2}$', '$\\frac{\\sqrt{2}}{4}$', '$2\\sqrt{2}$'],
      answer: 1,
      solution:
        'Multiply top and bottom by $\\sqrt{2}$: $\\frac{8\\sqrt{2}}{2}$, and $8 \\div 2 = 4$, so the answer is $4\\sqrt{2}$. Sanity check: $\\frac{8}{1.414} \\approx 5.66$, and $4(1.414) \\approx 5.66$ ✓. (The choice $8\\sqrt{2}$ never divides by the new denominator; the choice $\\frac{\\sqrt{2}}{4}$ flips the fraction over; the choice $2\\sqrt{2}$ divides the $8$ by $2$ twice, once too often.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{9}{\\sqrt{6}}$.',
      choices: [
        '$9\\sqrt{6}$',
        '$\\frac{2\\sqrt{6}}{3}$',
        '$\\frac{3\\sqrt{6}}{6}$',
        '$\\frac{3\\sqrt{6}}{2}$',
      ],
      answer: 3,
      solution:
        'Multiply top and bottom by $\\sqrt{6}$ to get $\\frac{9\\sqrt{6}}{6}$. This one does not reduce to a whole number — instead $9$ and $6$ share a factor of $3$, so divide both by $3$: $\\frac{3\\sqrt{6}}{2}$. Sanity check: $\\frac{9}{2.449} \\approx 3.67$, and $\\frac{3(2.449)}{2} \\approx 3.67$ ✓. (The choice $9\\sqrt{6}$ drops the denominator; the choice $\\frac{2\\sqrt{6}}{3}$ turns the reduced fraction upside down; the choice $\\frac{3\\sqrt{6}}{6}$ divides the $9$ by $3$ but forgets to divide the $6$ as well.)',
    },
  ],
  // p3 — what a conjugate is, and what it does to a denominator
  [
    {
      q: 'What is the conjugate of $\\sqrt{7} - 3$?',
      choices: [
        '$-\\sqrt{7} - 3$',
        '$\\sqrt{7} + 3$',
        '$3 - \\sqrt{7}$',
        '$\\frac{1}{\\sqrt{7} - 3}$',
      ],
      answer: 1,
      solution:
        'A conjugate flips ONLY the sign between the two terms, so $\\sqrt{7} - 3$ becomes $\\sqrt{7} + 3$. Check that it does its job: $(\\sqrt{7}-3)(\\sqrt{7}+3) = 7 - 9 = -2$, with no root left ✓. (The choice $-\\sqrt{7} - 3$ flips BOTH signs, which gives the opposite of the original; the choice $3 - \\sqrt{7}$ swaps the order and changes the sign of the whole thing; the last choice is the reciprocal, a different idea entirely.)',
    },
    {
      q: 'What is the conjugate of $2\\sqrt{5} + 6$?',
      choices: [
        '$6 - 2\\sqrt{5}$',
        '$-2\\sqrt{5} - 6$',
        '$2\\sqrt{5} - 6$',
        '$2\\sqrt{5} + 6$',
      ],
      answer: 2,
      solution:
        'A coefficient in front of the root changes nothing about the rule: keep both terms as they are and flip the sign between them, giving $2\\sqrt{5} - 6$. Check: $(2\\sqrt{5}+6)(2\\sqrt{5}-6) = (2\\sqrt{5})^2 - 6^2 = 20 - 36 = -16$, root-free ✓. (The choice $6 - 2\\sqrt{5}$ is the negative of the conjugate; the choice $-2\\sqrt{5} - 6$ flips both signs; the last choice changes nothing at all.)',
    },
    {
      q: 'A fraction has denominator $\\sqrt{10} + 4$. After multiplying the top and bottom by the conjugate, what is the new denominator?',
      choices: ['$26$', '$10 - 4\\sqrt{10}$', '$6$', '$-6$'],
      answer: 3,
      solution:
        'The conjugate is $\\sqrt{10} - 4$, and the product is a difference of squares: $(\\sqrt{10})^2 - 4^2 = 10 - 16 = -6$. A negative denominator is perfectly allowed — it just means the minus sign moves up to the numerator at the end. (The choice $26$ adds $10 + 16$ instead of subtracting; the choice $6$ computes $16 - 10$, subtracting in the wrong order; the choice $10 - 4\\sqrt{10}$ comes from multiplying by $\\sqrt{10}$ alone, which leaves a root behind and does not finish the job.)',
    },
  ],
  // p4 — multiply a conjugate pair
  [
    {
      q: 'Compute $(5 + \\sqrt{6})(5 - \\sqrt{6})$.',
      choices: ['$19$', '$31$', '$19 - 5\\sqrt{6}$', '$-11$'],
      answer: 0,
      solution:
        'This is a difference of squares: $5^2 - (\\sqrt{6})^2 = 25 - 6 = 19$. The cross terms $+5\\sqrt{6}$ and $-5\\sqrt{6}$ cancel, which is why nothing irrational survives. (The choice $31$ adds the $6$ instead of subtracting it; the choice $19 - 5\\sqrt{6}$ keeps one cross term instead of cancelling both; the choice $-11$ is $25 - 36$, squaring the $6$ when $6$ was already the square of $\\sqrt{6}$.)',
    },
    {
      q: 'Compute $(\\sqrt{15} + 2)(\\sqrt{15} - 2)$.',
      choices: ['$19$', '$13$', '$11$', '$15 - 2\\sqrt{15}$'],
      answer: 2,
      solution:
        'Square each term and subtract: $(\\sqrt{15})^2 - 2^2 = 15 - 4 = 11$. Sanity check with decimals: $(3.873+2)(3.873-2) \\approx 5.873 \\times 1.873 \\approx 11.0$ ✓. (The choice $19$ adds $15 + 4$; the choice $13$ is $15 - 2$, forgetting to square the $2$; the last choice keeps a leftover cross term instead of letting the two cancel.)',
    },
    {
      q: 'Compute $(\\sqrt{13} + \\sqrt{5})(\\sqrt{13} - \\sqrt{5})$.',
      choices: ['$18$', '$2\\sqrt{2}$', '$65$', '$8$'],
      answer: 3,
      solution:
        'When both terms are roots, squaring both is even friendlier: $(\\sqrt{13})^2 - (\\sqrt{5})^2 = 13 - 5 = 8$. Sanity check: $(3.606+2.236)(3.606-2.236) \\approx 5.842 \\times 1.370 \\approx 8.00$ ✓. (The choice $18$ adds instead of subtracting; the choice $2\\sqrt{2}$, which is $\\sqrt{8}$, assumes the answer must still carry a root; the choice $65$ multiplies $13 \\times 5$, which is what the CROSS terms would give if they did not cancel.)',
    },
  ],
  // p5 — conjugate rationalizing where the new denominator is small
  [
    {
      q: 'Rationalize $\\frac{1}{\\sqrt{10} - 3}$.',
      choices: [
        '$\\sqrt{10} + 3$',
        '$\\frac{\\sqrt{10}+3}{7}$',
        '$\\sqrt{10} - 3$',
        '$\\frac{\\sqrt{10}+3}{19}$',
      ],
      answer: 0,
      solution:
        'Multiply top and bottom by the conjugate $\\sqrt{10} + 3$. The bottom becomes $(\\sqrt{10})^2 - 3^2 = 10 - 9 = 1$, and dividing by $1$ changes nothing, so the answer is just $\\sqrt{10} + 3$. Sanity check: $\\frac{1}{3.162-3} = \\frac{1}{0.162} \\approx 6.16$, and $3.162 + 3 \\approx 6.16$ ✓. (The choice with $7$ underneath computes $10 - 3$ instead of $10 - 9$; the choice with $19$ adds $10 + 9$; the choice $\\sqrt{10} - 3 \\approx 0.16$ flips the sign in the numerator and is nowhere near $6.16$.)',
    },
    {
      q: 'Rationalize $\\frac{1}{4 - \\sqrt{15}}$.',
      choices: [
        '$4 - \\sqrt{15}$',
        '$4 + \\sqrt{15}$',
        '$\\frac{4+\\sqrt{15}}{31}$',
        '$\\frac{4+\\sqrt{15}}{19}$',
      ],
      answer: 1,
      solution:
        'The conjugate is $4 + \\sqrt{15}$, and the new denominator is $4^2 - (\\sqrt{15})^2 = 16 - 15 = 1$. So the fraction is simply $4 + \\sqrt{15}$. Sanity check: $\\frac{1}{4-3.873} = \\frac{1}{0.127} \\approx 7.87$, and $4 + 3.873 \\approx 7.87$ ✓. (The choice with $31$ adds $16 + 15$; the choice with $19$ forgets to square the $4$ and computes $4 + 15$; the choice $4 - \\sqrt{15} \\approx 0.13$ never flips the sign at all.)',
    },
    {
      q: 'Rationalize $\\frac{2}{\\sqrt{7} - \\sqrt{5}}$.',
      choices: [
        '$\\sqrt{7} - \\sqrt{5}$',
        '$\\frac{\\sqrt{7}+\\sqrt{5}}{6}$',
        '$\\sqrt{7} + \\sqrt{5}$',
        '$2\\sqrt{7} + 2\\sqrt{5}$',
      ],
      answer: 2,
      solution:
        'Multiply top and bottom by $\\sqrt{7} + \\sqrt{5}$. The bottom becomes $7 - 5 = 2$ and the top becomes $2(\\sqrt{7}+\\sqrt{5})$, so the $2$s cancel and the answer is $\\sqrt{7} + \\sqrt{5}$. Sanity check: $\\frac{2}{2.646-2.236} = \\frac{2}{0.410} \\approx 4.88$, and $2.646 + 2.236 \\approx 4.88$ ✓. (The choice with $6$ underneath adds $7 + 5 = 12$ and then halves it; the choice $2\\sqrt{7} + 2\\sqrt{5} \\approx 9.76$ forgets to divide by the new denominator; the choice $\\sqrt{7} - \\sqrt{5} \\approx 0.41$ multiplies by the same binomial instead of the conjugate.)',
    },
  ],
  // p6 — conjugate rationalizing where the numerator cancels away
  [
    {
      q: 'Rationalize and simplify $\\frac{3}{5 + \\sqrt{22}}$.',
      choices: [
        '$5 - \\sqrt{22}$',
        '$5 + \\sqrt{22}$',
        '$\\frac{5-\\sqrt{22}}{3}$',
        '$15 - 3\\sqrt{22}$',
      ],
      answer: 0,
      solution:
        'Multiply top and bottom by the conjugate $5 - \\sqrt{22}$. The bottom becomes $25 - 22 = 3$ and the top becomes $3(5 - \\sqrt{22})$, so the $3$s cancel and the answer is $5 - \\sqrt{22}$. Sanity check: $\\frac{3}{5+4.69} = \\frac{3}{9.69} \\approx 0.31$, and $5 - 4.69 \\approx 0.31$ ✓. (The choice $5 + \\sqrt{22} \\approx 9.69$ multiplies by the same binomial instead of the conjugate; the choice $\\frac{5-\\sqrt{22}}{3} \\approx 0.10$ cancels the $3$s and then divides by $3$ again; the choice $15 - 3\\sqrt{22}$ distributes over the numerator but never divides.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{7}{6 - \\sqrt{29}}$.',
      choices: [
        '$6 - \\sqrt{29}$',
        '$\\frac{6+\\sqrt{29}}{7}$',
        '$6 + \\sqrt{29}$',
        '$42 + 7\\sqrt{29}$',
      ],
      answer: 2,
      solution:
        'The conjugate is $6 + \\sqrt{29}$, and the new denominator is $36 - 29 = 7$ — exactly the numerator, so everything cancels and the answer is $6 + \\sqrt{29}$. Sanity check: $\\frac{7}{6-5.385} = \\frac{7}{0.615} \\approx 11.4$, and $6 + 5.385 \\approx 11.4$ ✓. (The choice $6 - \\sqrt{29} \\approx 0.61$ forgets to flip the sign; the choice $\\frac{6+\\sqrt{29}}{7} \\approx 1.63$ divides by $7$ after the $7$s already cancelled; the choice $42 + 7\\sqrt{29}$ multiplies the numerator out and then never divides at all.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{12}{5 + \\sqrt{13}}$.',
      choices: [
        '$\\frac{5-\\sqrt{13}}{12}$',
        '$5 + \\sqrt{13}$',
        '$60 - 12\\sqrt{13}$',
        '$5 - \\sqrt{13}$',
      ],
      answer: 3,
      solution:
        'Multiply by $\\frac{5-\\sqrt{13}}{5-\\sqrt{13}}$: the bottom becomes $25 - 13 = 12$, the top becomes $12(5 - \\sqrt{13})$, and the $12$s cancel to leave $5 - \\sqrt{13}$. Sanity check: $\\frac{12}{5+3.606} = \\frac{12}{8.606} \\approx 1.39$, and $5 - 3.606 \\approx 1.39$ ✓. (The choice $\\frac{5-\\sqrt{13}}{12} \\approx 0.12$ divides one time too many; the choice $60 - 12\\sqrt{13}$ never divides; the choice $5 + \\sqrt{13} \\approx 8.61$ uses the original binomial rather than its conjugate.)',
    },
  ],
  // p7 — conjugate with two roots, numerator does not cancel completely
  [
    {
      q: 'Rationalize and simplify $\\frac{12}{\\sqrt{11} - \\sqrt{5}}$.',
      choices: [
        '$2\\sqrt{11} + 2\\sqrt{5}$',
        '$\\sqrt{11} + \\sqrt{5}$',
        '$\\frac{12(\\sqrt{11}+\\sqrt{5})}{16}$',
        '$2\\sqrt{11} - 2\\sqrt{5}$',
      ],
      answer: 0,
      solution:
        'Multiply top and bottom by $\\sqrt{11} + \\sqrt{5}$. The bottom becomes $11 - 5 = 6$, so we have $\\frac{12(\\sqrt{11}+\\sqrt{5})}{6} = 2(\\sqrt{11}+\\sqrt{5}) = 2\\sqrt{11} + 2\\sqrt{5}$. Sanity check: $\\frac{12}{3.317-2.236} = \\frac{12}{1.081} \\approx 11.1$, and $2(3.317) + 2(2.236) \\approx 11.1$ ✓. (The choice $\\sqrt{11} + \\sqrt{5} \\approx 5.55$ divides by $12$ instead of $6$; the choice with $16$ underneath adds $11 + 5$ instead of subtracting; the choice $2\\sqrt{11} - 2\\sqrt{5} \\approx 2.16$ keeps the minus sign from the original denominator.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{9}{\\sqrt{6} + \\sqrt{3}}$.',
      choices: [
        '$3\\sqrt{6} + 3\\sqrt{3}$',
        '$3\\sqrt{6} - 3\\sqrt{3}$',
        '$\\sqrt{6} - \\sqrt{3}$',
        '$9\\sqrt{6} - 9\\sqrt{3}$',
      ],
      answer: 1,
      solution:
        'The conjugate of $\\sqrt{6} + \\sqrt{3}$ is $\\sqrt{6} - \\sqrt{3}$, and the new denominator is $6 - 3 = 3$. That gives $\\frac{9(\\sqrt{6}-\\sqrt{3})}{3} = 3\\sqrt{6} - 3\\sqrt{3}$. Sanity check: $\\frac{9}{2.449+1.732} = \\frac{9}{4.181} \\approx 2.15$, and $3(2.449) - 3(1.732) \\approx 2.15$ ✓. (The choice $3\\sqrt{6} + 3\\sqrt{3} \\approx 12.5$ keeps the plus sign instead of using the conjugate; the choice $\\sqrt{6} - \\sqrt{3} \\approx 0.72$ divides by $9$ rather than by $3$; the choice $9\\sqrt{6} - 9\\sqrt{3} \\approx 6.45$ never divides at all.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{8}{\\sqrt{10} - \\sqrt{6}}$.',
      choices: [
        '$\\frac{8(\\sqrt{10}+\\sqrt{6})}{16}$',
        '$2\\sqrt{10} - 2\\sqrt{6}$',
        '$2\\sqrt{10} + 2\\sqrt{6}$',
        '$8\\sqrt{10} + 8\\sqrt{6}$',
      ],
      answer: 2,
      solution:
        'Multiply by $\\sqrt{10} + \\sqrt{6}$ on top and bottom. The bottom becomes $10 - 6 = 4$, so $\\frac{8(\\sqrt{10}+\\sqrt{6})}{4} = 2\\sqrt{10} + 2\\sqrt{6}$. Sanity check: $\\frac{8}{3.162-2.449} = \\frac{8}{0.713} \\approx 11.2$, and $2(3.162) + 2(2.449) \\approx 11.2$ ✓. (The choice with $16$ underneath adds $10 + 6$; the choice $2\\sqrt{10} - 2\\sqrt{6} \\approx 1.43$ carries over the minus from the original denominator; the choice $8\\sqrt{10} + 8\\sqrt{6} \\approx 44.9$ forgets the division by $4$.)',
    },
  ],
  // p8 — why the conjugate trick works
  [
    {
      q: 'When you multiply $\\sqrt{a} + \\sqrt{b}$ by $\\sqrt{a} - \\sqrt{b}$, what do you get?',
      choices: [
        '$a - b$',
        '$a + b$',
        '$a - 2\\sqrt{ab} + b$',
        '$\\sqrt{a} - \\sqrt{b}$',
      ],
      answer: 0,
      solution:
        'It is the difference of squares again: $(\\sqrt{a})^2 - (\\sqrt{b})^2 = a - b$. The cross terms $+\\sqrt{ab}$ and $-\\sqrt{ab}$ cancel, and squaring a square root leaves the plain number behind — that is the whole reason a conjugate clears a denominator. (The choice $a + b$ has the wrong sign; the choice $a - 2\\sqrt{ab} + b$ is $(\\sqrt{a}-\\sqrt{b})^2$, what you get from multiplying by the SAME binomial instead of the conjugate, and it still contains a root; the last choice forgets to multiply at all.)',
    },
    {
      q: 'A student rationalizes $\\frac{1}{5 + \\sqrt{2}}$ by multiplying the top and bottom by $5 + \\sqrt{2}$ instead of by the conjugate. What goes wrong?',
      choices: [
        'Nothing — that removes the square root too',
        'The denominator becomes $27 + 10\\sqrt{2}$, which still contains a square root',
        'The denominator becomes $23$, but the numerator ends up wrong',
        'The value of the fraction changes',
      ],
      answer: 1,
      solution:
        'Squaring the denominator gives $(5+\\sqrt{2})^2 = 25 + 10\\sqrt{2} + 2 = 27 + 10\\sqrt{2}$ — the cross terms now ADD instead of cancelling, so the root is still there and the fraction is no better than before. The conjugate $5 - \\sqrt{2}$ is what makes them cancel, leaving $25 - 2 = 23$. (The choice saying $23$ names the right number but blames the numerator; the choice saying the value changes is false — multiplying by $\\frac{5+\\sqrt{2}}{5+\\sqrt{2}}$ is multiplying by $1$, so the value is safe. The move is not wrong, just useless.)',
    },
    {
      q: 'Why is it handy to rewrite $\\frac{1}{\\sqrt{2}}$ as $\\frac{\\sqrt{2}}{2}$ when you want a decimal estimate by hand?',
      choices: [
        'Because $\\frac{\\sqrt{2}}{2}$ is a slightly larger number',
        'Because $\\frac{1}{\\sqrt{2}}$ is not a real number',
        'Because the two are not actually equal, and only the second one is correct',
        'Because dividing a memorized decimal like $1.414$ by $2$ is far easier than dividing $1$ by $1.414$',
      ],
      answer: 3,
      solution:
        'Both forms are the same number, about $0.707$ — but by hand, halving $1.414$ takes a second, while long-dividing $1$ by $1.414$ is a chore. That practical difference is the original reason people rationalize denominators. (The first choice claims one is bigger, but they are equal; the second is false, since $\\frac{1}{\\sqrt{2}}$ is a perfectly good real number; the third denies the equality that multiplying by $\\frac{\\sqrt{2}}{\\sqrt{2}} = 1$ guarantees.)',
    },
  ],
  // p9 — both numerator and denominator have two terms
  [
    {
      q: 'Rationalize and simplify $\\frac{2 + \\sqrt{5}}{3 - \\sqrt{5}}$.',
      choices: [
        '$\\frac{11 + 5\\sqrt{5}}{4}$',
        '$\\frac{11 + 5\\sqrt{5}}{14}$',
        '$\\frac{1 + 5\\sqrt{5}}{4}$',
        '$11 + 5\\sqrt{5}$',
      ],
      answer: 0,
      solution:
        'Multiply top and bottom by $3 + \\sqrt{5}$. The bottom becomes $9 - 5 = 4$. The top needs all four products: $(2+\\sqrt{5})(3+\\sqrt{5}) = 6 + 2\\sqrt{5} + 3\\sqrt{5} + 5 = 11 + 5\\sqrt{5}$ — the two middle terms ADD here, because only the denominator uses a conjugate. So the answer is $\\frac{11+5\\sqrt{5}}{4}$. Sanity check: $\\frac{2+2.236}{3-2.236} = \\frac{4.236}{0.764} \\approx 5.54$, and $\\frac{11+11.18}{4} \\approx 5.55$ ✓. (The choice with $14$ underneath adds $9 + 5$; the choice $\\frac{1+5\\sqrt{5}}{4}$ subtracts the $5$ from $(\\sqrt{5})^2$ instead of adding it; the last choice forgets to divide by $4$.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{\\sqrt{7} + 1}{\\sqrt{7} - 1}$.',
      choices: [
        '$\\frac{8 + 2\\sqrt{7}}{8}$',
        '$\\frac{4 + \\sqrt{7}}{3}$',
        '$\\frac{4 + \\sqrt{7}}{6}$',
        '$8 + 2\\sqrt{7}$',
      ],
      answer: 1,
      solution:
        'Multiply top and bottom by $\\sqrt{7} + 1$. The bottom becomes $7 - 1 = 6$; the top becomes $(\\sqrt{7}+1)^2 = 7 + 2\\sqrt{7} + 1 = 8 + 2\\sqrt{7}$. Now reduce: every term shares a factor of $2$, so $\\frac{8+2\\sqrt{7}}{6} = \\frac{4+\\sqrt{7}}{3}$. Sanity check: $\\frac{2.646+1}{2.646-1} = \\frac{3.646}{1.646} \\approx 2.22$, and $\\frac{4+2.646}{3} \\approx 2.22$ ✓. (The choice with $8$ underneath adds $7 + 1$; the choice $\\frac{4+\\sqrt{7}}{6}$ halves the numerator but forgets to halve the denominator; the last choice never divides.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{3 - \\sqrt{2}}{1 + \\sqrt{2}}$.',
      choices: [
        '$5 - 4\\sqrt{2}$',
        '$\\frac{5 - 4\\sqrt{2}}{3}$',
        '$4\\sqrt{2} + 5$',
        '$4\\sqrt{2} - 5$',
      ],
      answer: 3,
      solution:
        'Multiply top and bottom by $1 - \\sqrt{2}$. The bottom becomes $1 - 2 = -1$, a NEGATIVE number — watch for that. The top is $(3-\\sqrt{2})(1-\\sqrt{2}) = 3 - 3\\sqrt{2} - \\sqrt{2} + 2 = 5 - 4\\sqrt{2}$. Dividing by $-1$ flips every sign: $4\\sqrt{2} - 5$. Sanity check: $\\frac{3-1.414}{1+1.414} = \\frac{1.586}{2.414} \\approx 0.657$, and $4(1.414) - 5 \\approx 0.657$ ✓ (note that $5 - 4\\sqrt{2} \\approx -0.657$ is the negative of the right answer, which is exactly the trap). (The choice $\\frac{5-4\\sqrt{2}}{3}$ computes the denominator as $1 + 2$; the choice $4\\sqrt{2} + 5$ flips only one sign when dividing by $-1$.)',
    },
  ],
  // p10 — add or subtract two rationalized fractions
  [
    {
      q: 'Compute $\\frac{1}{\\sqrt{5}+2} + \\frac{1}{\\sqrt{5}-2}$.',
      choices: ['$2\\sqrt{5} + 4$', '$2\\sqrt{5}$', '$4$', '$\\sqrt{5}$'],
      answer: 1,
      solution:
        'Rationalize each piece on its own. Both denominators become $5 - 4 = 1$, so $\\frac{1}{\\sqrt{5}+2} = \\sqrt{5} - 2$ and $\\frac{1}{\\sqrt{5}-2} = \\sqrt{5} + 2$. Adding them, the $-2$ and $+2$ cancel: $2\\sqrt{5}$. Sanity check: $\\frac{1}{4.236} + \\frac{1}{0.236} \\approx 0.236 + 4.236 = 4.47$, and $2(2.236) \\approx 4.47$ ✓. (The choice $2\\sqrt{5} + 4$ adds the constants instead of letting them cancel; the choice $4$ keeps only the constants; the choice $\\sqrt{5}$ adds the roots as if they were one.)',
    },
    {
      q: 'Compute $\\frac{1}{\\sqrt{3}+1} - \\frac{1}{\\sqrt{3}-1}$.',
      choices: ['$1$', '$-\\sqrt{3}$', '$-1$', '$\\sqrt{3} - 1$'],
      answer: 2,
      solution:
        'Each denominator becomes $3 - 1 = 2$: $\\frac{1}{\\sqrt{3}+1} = \\frac{\\sqrt{3}-1}{2}$ and $\\frac{1}{\\sqrt{3}-1} = \\frac{\\sqrt{3}+1}{2}$. Subtracting, the $\\sqrt{3}$ terms cancel this time: $\\frac{(\\sqrt{3}-1)-(\\sqrt{3}+1)}{2} = \\frac{-2}{2} = -1$. Sanity check: $\\frac{1}{2.732} - \\frac{1}{0.732} \\approx 0.366 - 1.366 = -1$ ✓. (The choice $1$ subtracts in the wrong order; the choice $-\\sqrt{3}$ keeps the roots and cancels the constants, the opposite of what happens; the choice $\\sqrt{3}-1$ rationalizes only the first fraction and stops.)',
    },
    {
      q: 'Compute $\\frac{4}{\\sqrt{13}+\\sqrt{11}} + \\frac{4}{\\sqrt{13}-\\sqrt{11}}$.',
      choices: [
        '$4\\sqrt{11}$',
        '$2\\sqrt{13} + 2\\sqrt{11}$',
        '$\\sqrt{13} + \\sqrt{11}$',
        '$4\\sqrt{13}$',
      ],
      answer: 3,
      solution:
        'Both denominators become $13 - 11 = 2$, so each fraction turns into $\\frac{4(\\ldots)}{2} = 2(\\ldots)$: $\\frac{4}{\\sqrt{13}+\\sqrt{11}} = 2\\sqrt{13} - 2\\sqrt{11}$ and $\\frac{4}{\\sqrt{13}-\\sqrt{11}} = 2\\sqrt{13} + 2\\sqrt{11}$. Adding, the $\\sqrt{11}$ terms cancel and the $\\sqrt{13}$ terms double: $4\\sqrt{13}$. Sanity check: $\\frac{4}{6.922} + \\frac{4}{0.289} \\approx 0.58 + 13.84 = 14.42$, and $4(3.606) \\approx 14.42$ ✓. (The choice $2\\sqrt{13} + 2\\sqrt{11} \\approx 13.84$ is only the second piece, as if the first added nothing; the choice $\\sqrt{13} + \\sqrt{11} \\approx 6.92$ divides by $4$ instead of by $2$; the choice $4\\sqrt{11} \\approx 13.27$ doubles the root that actually cancels.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 11,
  sections: {
    '11.3': s113,
    '11.4': s114,
  },
}
