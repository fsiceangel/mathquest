// Introduction to Algebra — Chapter 11: Special Factorizations
// All problems, explanations, and examples are original MathQuest content.

const s111 = {
  id: '11.1',
  title: 'Squares of Binomials',
  learn: {
    concepts: [
      {
        heading: 'Squaring a sum',
        body: 'When you expand $(a+b)^2$, you multiply $(a+b)(a+b)$ and the middle term appears TWICE: $(a+b)^2 = a^2 + 2ab + b^2$. The most common trap in all of algebra is writing $a^2 + b^2$ and forgetting the $2ab$. Try $a = b = 1$: $(1+1)^2 = 4$, but $1^2 + 1^2 = 2$. The missing $2$ is exactly the $2ab$!',
      },
      {
        heading: 'Squaring a difference',
        body: 'The same expansion works with a minus sign, and only the middle term flips: $(a-b)^2 = a^2 - 2ab + b^2$. The last term is $+b^2$, never $-b^2$, because $(-b) \\times (-b)$ is positive.',
      },
      {
        heading: 'The middle-term check',
        body: 'A trinomial is a perfect square exactly when it passes the middle-term check: the first and last terms are squares, and the middle term is $2$ times the product of their square roots. For $x^2 + 12x + 36$: the roots of the ends are $x$ and $6$, and $2 \\cdot x \\cdot 6 = 12x$ — it matches, so $x^2 + 12x + 36 = (x+6)^2$.',
      },
      {
        heading: 'Squares in your head',
        body: 'These formulas are calculating shortcuts, too. To square a number near a round one, write it as a sum or difference: $51^2 = (50+1)^2 = 2500 + 100 + 1 = 2601$, and $198^2 = (200-2)^2 = 40000 - 800 + 4 = 39204$. No calculator required!',
      },
    ],
    examples: [
      {
        problem: 'Expand $(x+7)^2$.',
        steps: [
          'Use $(a+b)^2 = a^2 + 2ab + b^2$ with $a = x$ and $b = 7$.',
          'The pieces are $x^2$, then $2 \\cdot x \\cdot 7 = 14x$, then $7^2 = 49$.',
          'Quick sanity check at $x = 1$: $(1+7)^2 = 64$, and $1 + 14 + 49 = 64$. It matches!',
        ],
        answer: '$(x+7)^2 = x^2 + 14x + 49$',
      },
      {
        problem: 'Compute $62^2$ without a calculator.',
        steps: [
          'Write $62 = 60 + 2$, so $62^2 = (60+2)^2$.',
          'Expand: $60^2 + 2 \\cdot 60 \\cdot 2 + 2^2 = 3600 + 240 + 4$.',
        ],
        answer: '$62^2 = 3844$',
      },
      {
        problem: 'Is $x^2 - 20x + 100$ a perfect square? If so, factor it.',
        steps: [
          'The ends are squares: $x^2 = (x)^2$ and $100 = 10^2$.',
          'Middle-term check: $2 \\cdot x \\cdot 10 = 20x$, which matches the middle term (with a minus sign).',
          'A negative middle term means a difference: $x^2 - 20x + 100 = (x-10)^2$.',
        ],
        answer: '$x^2 - 20x + 100 = (x-10)^2$',
      },
    ],
  },
  problems: [
    {
      q: 'Expand $(x+3)^2$.',
      choices: ['$x^2 + 9$', '$x^2 + 6x + 9$', '$x^2 + 3x + 9$', '$x^2 + 9x + 9$'],
      answer: 1,
      solution: 'Use $(a+b)^2 = a^2 + 2ab + b^2$: the middle term is $2 \\cdot x \\cdot 3 = 6x$, so $(x+3)^2 = x^2 + 6x + 9$. The choice $x^2 + 9$ forgets the middle term entirely — check at $x = 1$: $(1+3)^2 = 16$, and $1 + 6 + 9 = 16$, but $1 + 9 = 10$.',
    },
    {
      q: 'Expand $(x-5)^2$.',
      choices: ['$x^2 - 10x + 25$', '$x^2 - 25$', '$x^2 + 10x + 25$', '$x^2 - 5x + 25$'],
      answer: 0,
      solution: 'Only the middle term picks up the minus sign: $(x-5)^2 = x^2 - 2 \\cdot x \\cdot 5 + 5^2 = x^2 - 10x + 25$. The last term is $+25$ because $(-5)(-5) = +25$.',
    },
    {
      q: 'Compute $31^2$ by writing $31 = 30 + 1$.',
      choices: ['$901$', '$960$', '$961$', '$991$'],
      answer: 2,
      solution: '$(30+1)^2 = 900 + 2 \\cdot 30 \\cdot 1 + 1 = 900 + 60 + 1 = 961$. The choice $901$ is what you get if you forget the middle term $2ab$.',
    },
    {
      q: 'What is the middle term when $(2x+3)^2$ is expanded?',
      choices: ['$6x$', '$5x$', '$24x$', '$12x$'],
      answer: 3,
      solution: 'The middle term is $2ab$ with $a = 2x$ and $b = 3$: that is $2 \\cdot 2x \\cdot 3 = 12x$. So $(2x+3)^2 = 4x^2 + 12x + 9$. Writing $6x$ comes from forgetting that $a$ is $2x$, not $x$.',
    },
    {
      q: 'Compute $49^2$ in your head.',
      choices: ['$2401$', '$2399$', '$2499$', '$2501$'],
      answer: 0,
      solution: 'Write $49 = 50 - 1$: then $49^2 = 2500 - 2 \\cdot 50 \\cdot 1 + 1 = 2500 - 100 + 1 = 2401$. A useful last-digit check: $9 \\times 9 = 81$, so the answer must end in $1$.',
    },
    {
      q: 'Which trinomial is a perfect square?',
      choices: ['$x^2 + 4x + 16$', '$x^2 + 10x + 16$', '$x^2 + 8x + 16$', '$x^2 + 8x + 64$'],
      answer: 2,
      solution: 'Run the middle-term check on each. For $x^2 + 8x + 16$, the ends give $x$ and $4$, and $2 \\cdot x \\cdot 4 = 8x$ — a match, so it equals $(x+4)^2$. For $x^2 + 4x + 16$ and $x^2 + 10x + 16$ the middle should be $8x$, and for $x^2 + 8x + 64$ it should be $16x$, so none of those pass.',
    },
    {
      q: 'For what value of $c$ is $x^2 - 18x + c$ a perfect square?',
      choices: ['$36$', '$81$', '$324$', '$9$'],
      answer: 1,
      solution: 'We need $2 \\cdot x \\cdot b = 18x$, so $b = 9$, and then $c = b^2 = 81$. Indeed $x^2 - 18x + 81 = (x-9)^2$. The tempting answer $324 = 18^2$ squares the whole middle coefficient instead of half of it.',
    },
    {
      q: 'Compute $203^2$.',
      choices: ['$40009$', '$41029$', '$40129$', '$41209$'],
      answer: 3,
      solution: 'Write $203 = 200 + 3$: then $203^2 = 200^2 + 2 \\cdot 200 \\cdot 3 + 3^2 = 40000 + 1200 + 9 = 41209$. Skipping the middle term gives $40009$, which is the trap.',
    },
    {
      q: 'If $x + y = 10$ and $xy = 21$, what is $x^2 + y^2$?',
      choices: ['$79$', '$100$', '$58$', '$142$'],
      answer: 2,
      solution: 'Square the sum: $(x+y)^2 = x^2 + 2xy + y^2 = 100$. Now remove the middle: $x^2 + y^2 = 100 - 2xy = 100 - 42 = 58$. (Check: $x$ and $y$ are $3$ and $7$, and $9 + 49 = 58$.) Subtracting $xy$ only once gives the distractor $79$.',
    },
    {
      q: 'Simplify $(a+b)^2 - (a-b)^2$.',
      choices: ['$4ab$', '$2ab$', '$0$', '$a^2 + b^2$'],
      answer: 0,
      solution: 'Expand both: $(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)$. The $a^2$ and $b^2$ terms cancel, leaving $2ab - (-2ab) = 4ab$. Test with $a = 2$, $b = 3$: $25 - 1 = 24 = 4 \\cdot 2 \\cdot 3$. It checks out!',
    },
  ],
}

const s112 = {
  id: '11.2',
  title: 'Difference of Squares',
  learn: {
    concepts: [
      {
        heading: 'The formula that factors itself',
        body: 'Multiply $(a+b)(a-b)$ and watch the middle vanish: $a^2 - ab + ab - b^2 = a^2 - b^2$. Read right to left, this is a factoring machine: $a^2 - b^2 = (a+b)(a-b)$. Any difference of two squares splits into a sum times a difference.',
      },
      {
        heading: 'Multiply numbers that straddle a round one',
        body: 'Products like $53 \\times 47$ look ugly until you notice they straddle $50$: $53 \\times 47 = (50+3)(50-3) = 2500 - 9 = 2491$. Whenever two numbers have a nice average, this trick turns the product into one easy square minus a tiny one.',
      },
      {
        heading: 'Squares can wear disguises',
        body: 'The formula works whenever BOTH terms are squares, even with coefficients: $4x^2 - 9 = (2x)^2 - 3^2 = (2x+3)(2x-3)$. But a SUM of squares like $x^2 + 36$ does not factor this way — the formula needs a minus sign.',
      },
      {
        heading: 'Factor until nothing is left',
        body: 'Sometimes one of your factors is itself a difference of squares — keep going! $x^4 - 16 = (x^2+4)(x^2-4)$, and $x^2 - 4$ splits again into $(x+2)(x-2)$. A factoring job is finished only when no factor can be broken down further.',
      },
    ],
    examples: [
      {
        problem: 'Compute $62 \\times 58$ without a calculator.',
        steps: [
          'The two numbers straddle $60$: they are $60 + 2$ and $60 - 2$.',
          'Apply the formula: $(60+2)(60-2) = 60^2 - 2^2 = 3600 - 4$.',
        ],
        answer: '$62 \\times 58 = 3596$',
      },
      {
        problem: 'Factor $9x^2 - 25$.',
        steps: [
          'Spot the squares: $9x^2 = (3x)^2$ and $25 = 5^2$.',
          'Apply $a^2 - b^2 = (a+b)(a-b)$ with $a = 3x$, $b = 5$.',
          'Check by expanding: $(3x+5)(3x-5) = 9x^2 - 15x + 15x - 25 = 9x^2 - 25$. ✓',
        ],
        answer: '$9x^2 - 25 = (3x+5)(3x-5)$',
      },
      {
        problem: 'Compute $\\frac{85^2 - 15^2}{100}$.',
        steps: [
          'Never square first when you can factor first! $85^2 - 15^2 = (85+15)(85-15)$.',
          'That is $100 \\times 70 = 7000$.',
          'Divide: $7000 \\div 100 = 70$.',
        ],
        answer: '$\\frac{85^2 - 15^2}{100} = 70$',
      },
    ],
  },
  problems: [
    {
      q: 'Factor $x^2 - 49$.',
      choices: ['$(x-7)(x-7)$', '$(x+7)(x+7)$', '$(x+49)(x-1)$', '$(x+7)(x-7)$'],
      answer: 3,
      solution: 'A difference of squares splits into a sum times a difference: $x^2 - 49 = (x+7)(x-7)$. The choice $(x-7)(x-7)$ expands to $x^2 - 14x + 49$, which has an unwanted middle term.',
    },
    {
      q: 'Compute $41 \\times 39$.',
      choices: ['$1601$', '$1599$', '$1600$', '$1589$'],
      answer: 1,
      solution: 'The factors straddle $40$: $(40+1)(40-1) = 1600 - 1 = 1599$. We subtract the $1$, never add it — the product of a number just above and just below $40$ is slightly LESS than $40^2$.',
    },
    {
      q: 'Which expression can be factored using the difference of squares formula?',
      choices: ['$x^2 - 36$', '$x^2 + 36$', '$x^2 - 35$', '$x^3 - 36$'],
      answer: 0,
      solution: 'We need a square minus a square. $x^2 - 36 = x^2 - 6^2$ qualifies. $x^2 + 36$ is a SUM of squares, $35$ is not a perfect square, and $x^3$ is a cube, not a square.',
    },
    {
      q: 'Factor $4x^2 - 9$.',
      choices: ['$(2x+3)(2x-3)$', '$(2x-3)^2$', '$(4x+3)(x-3)$', '$(2x+9)(2x-1)$'],
      answer: 0,
      solution: 'Both terms are squares: $4x^2 = (2x)^2$ and $9 = 3^2$, so $4x^2 - 9 = (2x+3)(2x-3)$. Check the trap: $(2x-3)^2 = 4x^2 - 12x + 9$, which has a middle term we do not want.',
    },
    {
      q: 'Compute $\\frac{75^2 - 25^2}{50}$.',
      choices: ['$50$', '$2500$', '$100$', '$200$'],
      answer: 2,
      solution: 'Factor instead of squaring: $75^2 - 25^2 = (75+25)(75-25) = 100 \\times 50 = 5000$. Then $5000 \\div 50 = 100$. No big squares needed!',
    },
    {
      q: 'Compute $998 \\times 1002$.',
      choices: ['$999{,}998$', '$999{,}996$', '$1{,}000{,}004$', '$999{,}994$'],
      answer: 1,
      solution: 'The factors straddle $1000$: $(1000-2)(1000+2) = 1000000 - 4 = 999{,}996$.',
    },
    {
      q: 'Which is the COMPLETE factorization of $x^4 - 16$, with every factor broken down as far as possible?',
      choices: ['$(x^2+4)(x^2-4)$', '$(x^2-4)^2$', '$(x+4)(x-4)(x^2+1)$', '$(x^2+4)(x+2)(x-2)$'],
      answer: 3,
      solution: 'First split: $x^4 - 16 = (x^2+4)(x^2-4)$. But $x^2 - 4$ is itself a difference of squares, so keep going: $x^4 - 16 = (x^2+4)(x+2)(x-2)$. The factor $x^2 + 4$ is a sum of squares and does not factor further, so now we are done.',
    },
    {
      q: 'If $a + b = 20$ and $a - b = 6$, what is $a^2 - b^2$?',
      choices: ['$26$', '$60$', '$120$', '$240$'],
      answer: 2,
      solution: 'No need to find $a$ and $b$! Since $a^2 - b^2 = (a+b)(a-b)$, the answer is $20 \\times 6 = 120$. (If you are curious: $a = 13$, $b = 7$, and $169 - 49 = 120$.)',
    },
    {
      q: 'Simplify $\\frac{x^2 - 9}{x + 3}$ (assume $x \\neq -3$).',
      choices: ['$x - 3$', '$x + 3$', '$x - 9$', '$x^2 - 3$'],
      answer: 0,
      solution: 'Factor the top: $x^2 - 9 = (x+3)(x-3)$. The factor $x + 3$ cancels with the bottom, leaving $x - 3$. Try $x = 4$: $\\frac{16-9}{7} = 1$, and $4 - 3 = 1$. ✓',
    },
    {
      q: 'Compute $2026^2 - 2024^2$.',
      choices: ['$4050$', '$8100$', '$4100$', '$2$'],
      answer: 1,
      solution: 'Factor: $2026^2 - 2024^2 = (2026 + 2024)(2026 - 2024) = 4050 \\times 2 = 8100$. Squaring the two big numbers by hand would work, but factoring turns it into a one-line calculation.',
    },
  ],
}

const s113 = {
  id: '11.3',
  title: 'Sum and Difference of Cubes',
  learn: {
    concepts: [
      {
        heading: 'A sum of cubes DOES factor',
        body: 'A sum of squares refuses to factor, but a sum of cubes cooperates: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$. Multiply it out to see the cancellation: $a^3 - a^2 b + ab^2 + a^2 b - ab^2 + b^3 = a^3 + b^3$. Everything in the middle wipes out.',
      },
      {
        heading: 'The difference of cubes',
        body: 'The twin formula is $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$. Track the signs: the binomial copies the sign of the original ($+$ for a sum, $-$ for a difference), the middle term of the trinomial takes the OPPOSITE sign, and the last term is always $+b^2$.',
      },
      {
        heading: 'Learn to spot cubes',
        body: 'These formulas only fire when you recognize cubes: $8 = 2^3$, $27 = 3^3$, $64 = 4^3$, $125 = 5^3$, $1000 = 10^3$. Variables can be cubes too: $8x^3 = (2x)^3$ and $x^6 = (x^2)^3$.',
      },
      {
        heading: 'The trinomial is done',
        body: 'After factoring, students often try to factor $a^2 - ab + b^2$ or $a^2 + ab + b^2$ again. Do not bother — with the middle-term check, a perfect square would need a middle of $2ab$, and these have only $1ab$. These trinomials do not factor any further.',
      },
    ],
    examples: [
      {
        problem: 'Factor $x^3 + 64$.',
        steps: [
          'Recognize the cubes: $x^3 = (x)^3$ and $64 = 4^3$.',
          'Apply $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ with $a = x$, $b = 4$.',
          'Check by expanding: $(x+4)(x^2 - 4x + 16) = x^3 - 4x^2 + 16x + 4x^2 - 16x + 64 = x^3 + 64$. ✓',
        ],
        answer: '$x^3 + 64 = (x+4)(x^2 - 4x + 16)$',
      },
      {
        problem: 'Factor $8x^3 + 27$.',
        steps: [
          'Both terms are cubes: $8x^3 = (2x)^3$ and $27 = 3^3$.',
          'Apply the sum formula with $a = 2x$, $b = 3$: the pieces of the trinomial are $(2x)^2 = 4x^2$, then $-(2x)(3) = -6x$, then $3^2 = 9$.',
          'So $8x^3 + 27 = (2x+3)(4x^2 - 6x + 9)$.',
        ],
        answer: '$8x^3 + 27 = (2x+3)(4x^2 - 6x + 9)$',
      },
      {
        problem: 'Factor $27 - y^3$.',
        steps: [
          'This is a difference of cubes: $3^3 - y^3$.',
          'Apply the difference formula with $a = 3$, $b = y$: $(3 - y)(9 + 3y + y^2)$.',
          'Check at $y = 1$: original is $27 - 1 = 26$, and $(2)(13) = 26$. ✓',
        ],
        answer: '$27 - y^3 = (3-y)(9 + 3y + y^2)$',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these numbers is a perfect cube?',
      choices: ['$9$', '$16$', '$27$', '$50$'],
      answer: 2,
      solution: 'A perfect cube is a whole number times itself three times: $27 = 3 \\times 3 \\times 3 = 3^3$. The numbers $9$ and $16$ are perfect squares but not cubes, and $50$ is neither.',
    },
    {
      q: 'Factor $x^3 - 8$.',
      choices: ['$(x-2)(x^2+2x+4)$', '$(x-2)(x^2-2x+4)$', '$(x-2)^3$', '$(x-2)(x^2+4)$'],
      answer: 0,
      solution: 'Difference of cubes with $a = x$, $b = 2$: the binomial keeps the minus, the middle of the trinomial flips to plus: $(x-2)(x^2 + 2x + 4)$. Check at $x = 1$: original is $-7$, and $(-1)(7) = -7$. ✓ The wrong-middle-sign version $(x-2)(x^2-2x+4)$ gives $(-1)(3) = -3$.',
    },
    {
      q: 'Factor $x^3 + 125$.',
      choices: ['$(x+5)(x^2+5x+25)$', '$(x+5)^3$', '$(x+5)(x^2-25)$', '$(x+5)(x^2-5x+25)$'],
      answer: 3,
      solution: 'Sum of cubes with $a = x$, $b = 5$: the binomial takes the plus, the middle term flips to minus: $(x+5)(x^2 - 5x + 25)$. Check at $x = 1$: original is $126$, and $(6)(21) = 126$. ✓',
    },
    {
      q: 'Factor $64x^3 + 1$.',
      choices: ['$(4x+1)(16x^2+4x+1)$', '$(4x+1)(16x^2-4x+1)$', '$(4x-1)(16x^2+4x+1)$', '$(4x+1)(16x^2-8x+1)$'],
      answer: 1,
      solution: 'Recognize $(4x)^3 + 1^3$ and apply the sum formula: $(4x+1)(16x^2 - 4x + 1)$. The middle term is $-(4x)(1) = -4x$ — opposite sign from the binomial, and just ONE product $ab$, not two.',
    },
    {
      q: 'After factoring $x^3 + 27 = (x+3)(x^2 - 3x + 9)$, what can be done with the factor $x^2 - 3x + 9$?',
      choices: ['It factors as $(x-3)^2$', 'It factors as $(x+3)(x-3)$', 'It factors as $(x+3)^2$', 'It does not factor further'],
      answer: 3,
      solution: 'Run the middle-term check: $(x-3)^2$ would need a middle term of $-6x$, but we only have $-3x$. And $(x+3)(x-3) = x^2 - 9$ has no middle term at all. The trinomial from a cube formula never factors further — you are done.',
    },
    {
      q: 'Factor $8x^3 - 27$.',
      choices: ['$(2x-3)(4x^2-6x+9)$', '$(2x+3)(4x^2-6x+9)$', '$(2x-3)(4x^2+6x+9)$', '$(2x+3)(4x^2+6x+9)$'],
      answer: 2,
      solution: 'Difference of cubes with $a = 2x$, $b = 3$: $(2x-3)(4x^2 + 6x + 9)$ — minus in the binomial, plus in the middle. Check at $x = 1$: original is $8 - 27 = -19$, and $(-1)(19) = -19$. ✓ Watch out: $(2x-3)(4x^2-6x+9)$ gives $(-1)(7) = -7$, so its signs are off.',
    },
    {
      q: 'Factor $x^6 + 8$. (Hint: $x^6$ is a perfect cube.)',
      choices: ['$(x^2+2)(x^4-2x^2+4)$', '$(x^2+2)(x^4+2x^2+4)$', '$(x^2+2)^3$', '$(x^3+2)(x^3+4)$'],
      answer: 0,
      solution: 'Write $x^6 = (x^2)^3$, so this is a sum of cubes with $a = x^2$, $b = 2$: $(x^2+2)(x^4 - 2x^2 + 4)$. Check at $x = 1$: original is $9$, and $(3)(3) = 9$. ✓',
    },
    {
      q: 'Compute $\\frac{7^3 + 3^3}{7 + 3}$ without a calculator.',
      choices: ['$34$', '$37$', '$40$', '$100$'],
      answer: 1,
      solution: 'Since $7^3 + 3^3 = (7+3)(7^2 - 7 \\cdot 3 + 3^2)$, dividing by $7 + 3$ leaves the trinomial: $49 - 21 + 9 = 37$. Check the long way: $\\frac{343 + 27}{10} = \\frac{370}{10} = 37$. ✓',
    },
    {
      q: 'If $a + b = 5$ and $ab = 6$, what is $a^3 + b^3$?',
      choices: ['$125$', '$35$', '$91$', '$65$'],
      answer: 1,
      solution: 'First find $a^2 + b^2 = (a+b)^2 - 2ab = 25 - 12 = 13$. Then $a^3 + b^3 = (a+b)(a^2 - ab + b^2) = 5(13 - 6) = 35$. (Check: $a$ and $b$ are $2$ and $3$, and $8 + 27 = 35$.) The distractor $125 = 5^3$ forgets that $(a+b)^3 \\neq a^3 + b^3$.',
    },
    {
      q: 'Factor $2x^3 + 16$ completely.',
      choices: ['$2(x+2)(x^2-2x+4)$', '$2(x+2)(x^2+2x+4)$', '$(x+2)(x^2-2x+4)$', '$2(x+2)^3$'],
      answer: 0,
      solution: 'Always pull out common factors first: $2x^3 + 16 = 2(x^3 + 8)$. Then factor the sum of cubes: $2(x+2)(x^2 - 2x + 4)$. Check at $x = 1$: original is $18$, and $2(3)(3) = 18$. ✓ Dropping the leading $2$ gives only $9$.',
    },
  ],
}

const s114 = {
  id: '11.4',
  title: 'Rationalizing Denominators',
  learn: {
    concepts: [
      {
        heading: 'Multiply by a clever form of one',
        body: 'A fraction like $\\frac{5}{\\sqrt{3}}$ is usually rewritten so no square root sits in the denominator — that is called rationalizing. The tool is multiplying by $1$ in disguise: $\\frac{5}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$. The value never changes, only the outfit.',
      },
      {
        heading: 'Conjugates: the sign-flip partner',
        body: 'When the denominator has two terms, like $3 + \\sqrt{7}$, multiplying by the root alone will not help. Instead use the conjugate — the same expression with the middle sign flipped, $3 - \\sqrt{7}$. Multiply a two-term denominator by its conjugate, and the roots vanish.',
      },
      {
        heading: 'Why conjugates work: difference of squares!',
        body: 'The conjugate trick IS the difference of squares formula: $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - (\\sqrt{b})^2 = a^2 - b$. Squaring is exactly what kills a square root, and this product squares both terms while the cross terms cancel.',
      },
      {
        heading: 'Simplify after you rationalize',
        body: 'Rationalizing often leaves a common factor between the numerator and denominator — always look for one. For example, $\\frac{6\\sqrt{2}}{4}$ should be reduced to $\\frac{3\\sqrt{2}}{2}$. The job is not done until the fraction is in lowest terms.',
      },
    ],
    examples: [
      {
        problem: 'Rationalize $\\frac{5}{\\sqrt{3}}$.',
        steps: [
          'Multiply top and bottom by $\\sqrt{3}$: $\\frac{5}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}$.',
          'The bottom becomes $\\sqrt{3} \\times \\sqrt{3} = 3$, and the top becomes $5\\sqrt{3}$.',
        ],
        answer: '$\\frac{5}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$',
      },
      {
        problem: 'Rationalize $\\frac{1}{\\sqrt{5} - 2}$.',
        steps: [
          'Multiply by the conjugate over itself: $\\frac{1}{\\sqrt{5}-2} \\times \\frac{\\sqrt{5}+2}{\\sqrt{5}+2}$.',
          'The bottom is a difference of squares: $(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$.',
          'Dividing by $1$ changes nothing, so the answer is just the numerator.',
        ],
        answer: '$\\frac{1}{\\sqrt{5} - 2} = \\sqrt{5} + 2$',
      },
      {
        problem: 'Rationalize and simplify $\\frac{4}{3 + \\sqrt{7}}$.',
        steps: [
          'Multiply by the conjugate: $\\frac{4}{3+\\sqrt{7}} \\times \\frac{3-\\sqrt{7}}{3-\\sqrt{7}}$.',
          'The bottom becomes $3^2 - 7 = 2$, and the top becomes $4(3 - \\sqrt{7}) = 12 - 4\\sqrt{7}$.',
          'Reduce the fraction: $\\frac{12 - 4\\sqrt{7}}{2} = 6 - 2\\sqrt{7}$.',
        ],
        answer: '$\\frac{4}{3 + \\sqrt{7}} = 6 - 2\\sqrt{7}$',
      },
    ],
  },
  problems: [
    {
      q: 'Rationalize $\\frac{1}{\\sqrt{2}}$.',
      choices: ['$\\frac{\\sqrt{2}}{2}$', '$\\sqrt{2}$', '$\\frac{1}{2}$', '$2\\sqrt{2}$'],
      answer: 0,
      solution: 'Multiply top and bottom by $\\sqrt{2}$: $\\frac{1}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. Sanity check: $\\frac{1}{\\sqrt{2}} \\approx 0.707$, and $\\frac{1.414}{2} \\approx 0.707$. ✓',
    },
    {
      q: 'Rationalize and simplify $\\frac{6}{\\sqrt{3}}$.',
      choices: ['$6\\sqrt{3}$', '$3\\sqrt{2}$', '$2\\sqrt{3}$', '$\\frac{\\sqrt{3}}{2}$'],
      answer: 2,
      solution: 'Multiply by $\\frac{\\sqrt{3}}{\\sqrt{3}}$ to get $\\frac{6\\sqrt{3}}{3}$, then reduce: $\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$. Forgetting to reduce leaves $\\frac{6\\sqrt{3}}{3}$, and forgetting the denominator entirely gives $6\\sqrt{3}$.',
    },
    {
      q: 'What is the conjugate of $4 + \\sqrt{5}$?',
      choices: ['$4 - \\sqrt{5}$', '$-4 - \\sqrt{5}$', '$\\sqrt{5} - 4$', '$\\frac{1}{4 + \\sqrt{5}}$'],
      answer: 0,
      solution: 'The conjugate flips only the sign BETWEEN the terms: $4 - \\sqrt{5}$. Flipping both signs gives $-4 - \\sqrt{5}$, which is the opposite, and $\\frac{1}{4+\\sqrt{5}}$ is the reciprocal — both different ideas.',
    },
    {
      q: 'Compute $(3 + \\sqrt{2})(3 - \\sqrt{2})$.',
      choices: ['$11$', '$7$', '$9 - 2\\sqrt{2}$', '$5$'],
      answer: 1,
      solution: 'This is a difference of squares: $3^2 - (\\sqrt{2})^2 = 9 - 2 = 7$. The cross terms $+3\\sqrt{2}$ and $-3\\sqrt{2}$ cancel, so no root survives — that is exactly why the conjugate trick works.',
    },
    {
      q: 'Rationalize $\\frac{1}{\\sqrt{5} - 2}$.',
      choices: ['$\\sqrt{5} - 2$', '$\\frac{\\sqrt{5}+2}{3}$', '$\\frac{\\sqrt{5}+2}{9}$', '$\\sqrt{5} + 2$'],
      answer: 3,
      solution: 'Multiply by the conjugate: the denominator becomes $(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$, so the whole fraction is just $\\sqrt{5} + 2$. Getting $\\frac{\\sqrt{5}+2}{3}$ comes from computing $5 - 2$ instead of $5 - 4$ in the denominator.',
    },
    {
      q: 'Rationalize and simplify $\\frac{6}{4 + \\sqrt{10}}$.',
      choices: ['$4 + \\sqrt{10}$', '$4 - \\sqrt{10}$', '$\\frac{4 - \\sqrt{10}}{6}$', '$24 - 6\\sqrt{10}$'],
      answer: 1,
      solution: 'Multiply by $\\frac{4 - \\sqrt{10}}{4 - \\sqrt{10}}$: the denominator becomes $16 - 10 = 6$, and the numerator becomes $6(4 - \\sqrt{10})$. The $6$s cancel, leaving $4 - \\sqrt{10}$. Sanity check: $4 - \\sqrt{10} \\approx 0.84$, and $\\frac{6}{4 + 3.16} \\approx 0.84$. ✓',
    },
    {
      q: 'Rationalize and simplify $\\frac{10}{\\sqrt{7} - \\sqrt{2}}$.',
      choices: ['$\\sqrt{7} + \\sqrt{2}$', '$2\\sqrt{7} - 2\\sqrt{2}$', '$\\frac{10(\\sqrt{7}+\\sqrt{2})}{9}$', '$2\\sqrt{7} + 2\\sqrt{2}$'],
      answer: 3,
      solution: 'Multiply by the conjugate $\\sqrt{7} + \\sqrt{2}$: the denominator becomes $7 - 2 = 5$, so we get $\\frac{10(\\sqrt{7}+\\sqrt{2})}{5} = 2\\sqrt{7} + 2\\sqrt{2}$. The distractor with $9$ in the denominator comes from adding $7 + 2$ instead of subtracting.',
    },
    {
      q: 'Why does multiplying $a + \\sqrt{b}$ by its conjugate remove the square root?',
      choices: [
        'Because the two expressions add up to zero',
        'Because square roots always cancel in products',
        'Because $(a+\\sqrt{b})(a-\\sqrt{b}) = a^2 - b$, a difference of squares with no root left',
        'Because the conjugate equals $\\frac{1}{a + \\sqrt{b}}$',
      ],
      answer: 2,
      solution: 'The product is a difference of squares: $(a+\\sqrt{b})(a-\\sqrt{b}) = a^2 - (\\sqrt{b})^2 = a^2 - b$. Squaring $\\sqrt{b}$ turns it into plain $b$, and the cross terms cancel each other. It is the same formula from Section 11.2, wearing a radical costume.',
    },
    {
      q: 'Rationalize and simplify $\\frac{1 + \\sqrt{3}}{2 - \\sqrt{3}}$.',
      choices: ['$5 - 3\\sqrt{3}$', '$\\frac{5 + 3\\sqrt{3}}{7}$', '$5 + 3\\sqrt{3}$', '$2 + \\sqrt{3}$'],
      answer: 2,
      solution: 'Multiply by $\\frac{2+\\sqrt{3}}{2+\\sqrt{3}}$: the denominator becomes $4 - 3 = 1$. The numerator is $(1+\\sqrt{3})(2+\\sqrt{3}) = 2 + \\sqrt{3} + 2\\sqrt{3} + 3 = 5 + 3\\sqrt{3}$. Numeric check: the original is about $\\frac{2.73}{0.27} \\approx 10.2$, and $5 + 3(1.73) \\approx 10.2$. ✓',
    },
    {
      q: 'Compute $\\frac{1}{\\sqrt{2}+1} + \\frac{1}{\\sqrt{2}-1}$.',
      choices: ['$2\\sqrt{2}$', '$2$', '$\\sqrt{2}$', '$2\\sqrt{2} + 2$'],
      answer: 0,
      solution: 'Rationalize each piece: $\\frac{1}{\\sqrt{2}+1} = \\sqrt{2} - 1$ and $\\frac{1}{\\sqrt{2}-1} = \\sqrt{2} + 1$ (both denominators become $2 - 1 = 1$). Adding them, the $-1$ and $+1$ cancel: $2\\sqrt{2}$.',
    },
  ],
}

const s115 = {
  id: '11.5',
  title: "Simon's Favorite Factoring Trick",
  learn: {
    concepts: [
      {
        heading: 'An expression that almost factors',
        body: 'Look at $xy + 4x + 3y$. Grouping gets close — $x(y + 4) + 3y$ — but stalls, because nothing matches. The expression is missing one piece: a constant. It is like a puzzle with one piece left in the box.',
      },
      {
        heading: 'Add the magic constant',
        body: 'The fix: for $xy + ax + by$, add the product $ab$. Then everything snaps together: $xy + ax + by + ab = x(y + a) + b(y + a) = (x + b)(y + a)$. For $xy + 4x + 3y$, add $4 \\cdot 3 = 12$ to get $(x+3)(y+4)$. Notice the criss-cross: the coefficient of $x$ ends up in the factor with $y$, and vice versa!',
      },
      {
        heading: 'Solving equations over the integers',
        body: 'The trick shines on equations like $xy + 3x + 2y = 12$ where we want INTEGER solutions. Add the magic constant to BOTH sides, factor the left into two binomials, and then the right side is a plain number — so the two factors must be a factor pair of that number. List the pairs and check each one.',
      },
      {
        heading: 'When does the trick apply?',
        body: 'Reach for it when you see all three ingredients: an $xy$ term, an $x$ term, and a $y$ term. Negative coefficients are welcome — for $xy - 4x + 6y$, the magic constant is $(-4)(6) = -24$, giving $(x+6)(y-4)$. The formula does not care about signs, only about the criss-cross.',
      },
    ],
    examples: [
      {
        problem: 'Factor $xy + 5x + 3y + 15$.',
        steps: [
          'Group: $x(y + 5) + 3(y + 5)$. Both groups share the factor $y + 5$.',
          'Pull it out: $(x + 3)(y + 5)$.',
          'Check by expanding: $xy + 5x + 3y + 15$. ✓ (This one arrived with its constant already attached — no trick needed.)',
        ],
        answer: '$xy + 5x + 3y + 15 = (x+3)(y+5)$',
      },
      {
        problem: 'Find all positive integers $x$ and $y$ with $xy + 3x + 2y = 12$.',
        steps: [
          'The magic constant is $3 \\cdot 2 = 6$. Add it to both sides: $xy + 3x + 2y + 6 = 18$.',
          'Factor the left side: $(x + 2)(y + 3) = 18$.',
          'Since $x \\geq 1$ and $y \\geq 1$, we need $x + 2 \\geq 3$ and $y + 3 \\geq 4$. Check the factor pairs of $18$: only $3 \\times 6$ fits, giving $x = 1$, $y = 3$.',
          'Check: $1 \\cdot 3 + 3 \\cdot 1 + 2 \\cdot 3 = 3 + 3 + 6 = 12$. ✓',
        ],
        answer: 'The only solution is $x = 1$, $y = 3$',
      },
      {
        problem: 'Factor $xy - 4x + 6y - 24$.',
        steps: [
          'Group with the signs attached: $x(y - 4) + 6(y - 4)$.',
          'Pull out the common factor: $(x + 6)(y - 4)$.',
          'Check at $x = 1$, $y = 1$: original is $1 - 4 + 6 - 24 = -21$, and $(7)(-3) = -21$. ✓',
        ],
        answer: '$xy - 4x + 6y - 24 = (x+6)(y-4)$',
      },
    ],
  },
  problems: [
    {
      q: 'Factor $xy + 2x + 7y + 14$.',
      choices: ['$(x+2)(y+7)$', '$(x+14)(y+1)$', '$(x+7)(y+2)$', '$(x+1)(y+14)$'],
      answer: 2,
      solution: 'Group: $x(y+2) + 7(y+2) = (x+7)(y+2)$. Remember the criss-cross: the $2$ from $2x$ pairs with $y$, and the $7$ from $7y$ pairs with $x$. Expand to check: $xy + 2x + 7y + 14$. ✓',
    },
    {
      q: 'What constant should be added to $xy + 4x + 3y$ so that it factors as a product of two binomials?',
      choices: ['$12$', '$7$', '$24$', '$1$'],
      answer: 0,
      solution: 'The magic constant is the product of the two coefficients: $4 \\cdot 3 = 12$. Then $xy + 4x + 3y + 12 = (x+3)(y+4)$. Adding $7$ (the SUM of the coefficients) is the classic mix-up.',
    },
    {
      q: 'Factor $xy + 6x + 2y + 12$.',
      choices: ['$(x+6)(y+2)$', '$(x+2)(y+6)$', '$(x+12)(y+1)$', '$(x+3)(y+4)$'],
      answer: 1,
      solution: 'Group: $x(y+6) + 2(y+6) = (x+2)(y+6)$. Check with $x = 2$, $y = 1$: original is $2 + 12 + 2 + 12 = 28$, and $(4)(7) = 28$. ✓ The un-criss-crossed $(x+6)(y+2)$ gives $(8)(3) = 24$, which does not match.',
    },
    {
      q: 'To solve $xy + 5x + 2y = 20$ with the trick, what number do you add to both sides?',
      choices: ['$7$', '$20$', '$25$', '$10$'],
      answer: 3,
      solution: 'Add the product of the coefficients: $5 \\cdot 2 = 10$. That gives $xy + 5x + 2y + 10 = 30$, which factors as $(x+2)(y+5) = 30$.',
    },
    {
      q: 'Which positive integers $x$ and $y$ satisfy $xy + 2x + y = 7$?',
      choices: ['$x = 2, y = 1$', '$x = 1, y = 2$', '$x = 3, y = 1$', '$x = 1, y = 4$'],
      answer: 0,
      solution: 'Add $2 \\cdot 1 = 2$ to both sides: $(x+1)(y+2) = 9$. With $x, y \\geq 1$ we need $x + 1 \\geq 2$ and $y + 2 \\geq 3$, and the only factor pair of $9$ that fits is $3 \\times 3$: $x = 2$, $y = 1$. Check: $2 \\cdot 1 + 2 \\cdot 2 + 1 = 7$. ✓ (Trying $x = 1$, $y = 2$ gives $2 + 2 + 2 = 6$, just short.)',
    },
    {
      q: 'Factor $xy - 3x + 5y - 15$.',
      choices: ['$(x-3)(y+5)$', '$(x+5)(y+3)$', '$(x+5)(y-3)$', '$(x-5)(y-3)$'],
      answer: 2,
      solution: 'Group with signs attached: $x(y-3) + 5(y-3) = (x+5)(y-3)$. Check at $x = 2$, $y = 1$: original is $2 - 6 + 5 - 15 = -14$, and $(7)(-2) = -14$. ✓',
    },
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + x + y = 11$?',
      choices: ['$2$', '$4$', '$3$', '$6$'],
      answer: 1,
      solution: 'Add $1 \\cdot 1 = 1$: $(x+1)(y+1) = 12$. Both factors must be at least $2$, so the usable factor pairs of $12$ are $2 \\times 6$, $3 \\times 4$, $4 \\times 3$, and $6 \\times 2$ — four pairs, giving $(1,5)$, $(2,3)$, $(3,2)$, $(5,1)$. (The pairs $1 \\times 12$ and $12 \\times 1$ would force $x$ or $y$ to be $0$.) Check $(2,3)$: $6 + 2 + 3 = 11$. ✓',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy - 2x + 3y = 12$. What is $x + y$?',
      choices: ['$4$', '$5$', '$8$', '$6$'],
      answer: 3,
      solution: 'The magic constant is $(-2)(3) = -6$: subtracting $6$ from both sides gives $(x+3)(y-2) = 6$. Since $x \\geq 1$, we need $x + 3 \\geq 4$, and the only factor pair of $6$ that fits is $6 \\times 1$: $x = 3$, $y = 3$. Check: $9 - 6 + 9 = 12$. ✓ So $x + y = 6$.',
    },
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + 2x + 2y = 32$?',
      choices: ['$5$', '$3$', '$4$', '$6$'],
      answer: 0,
      solution: 'Add $2 \\cdot 2 = 4$: $(x+2)(y+2) = 36$. Both factors must be at least $3$, so the usable pairs are $3 \\times 12$, $4 \\times 9$, $6 \\times 6$, $9 \\times 4$, $12 \\times 3$ — five of them, giving $(1,10)$, $(2,7)$, $(4,4)$, $(7,2)$, $(10,1)$. Check $(1,10)$: $10 + 2 + 20 = 32$. ✓',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 5x + y = 2027$. What is the largest possible value of $x$?',
      choices: ['$126$', '$253$', '$507$', '$1015$'],
      answer: 1,
      solution: 'Add $5 \\cdot 1 = 5$: $(x+1)(y+5) = 2032 = 2^4 \\cdot 127$. To make $x$ big, make $y + 5$ small. Since $y \\geq 1$, we need $y + 5 \\geq 6$, and the smallest divisor of $2032$ that is at least $6$ is $8$. So $y = 3$ and $x + 1 = 2032 \\div 8 = 254$, giving $x = 253$. Check: $253 \\cdot 3 + 5 \\cdot 253 + 3 = 759 + 1265 + 3 = 2027$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'Compute $96 \\times 104$.',
    choices: ['$9974$', '$9984$', '$9996$', '$10016$'],
    answer: 1,
    solution: 'The factors straddle $100$: $(100-4)(100+4) = 10000 - 16 = 9984$.',
  },
  {
    q: 'Expand $(3x - 4)^2$.',
    choices: ['$9x^2 - 24x + 16$', '$9x^2 + 24x + 16$', '$9x^2 - 12x + 16$', '$9x^2 - 16$'],
    answer: 0,
    solution: 'Use $(a-b)^2 = a^2 - 2ab + b^2$ with $a = 3x$, $b = 4$: the middle term is $-2(3x)(4) = -24x$, so the result is $9x^2 - 24x + 16$. Check at $x = 1$: $(3-4)^2 = 1$, and $9 - 24 + 16 = 1$. ✓',
  },
  {
    q: 'Which is the COMPLETE factorization of $x^4 - 81$, with every factor broken down as far as possible?',
    choices: ['$(x^2+9)(x^2-9)$', '$(x^2-9)^2$', '$(x^2+9)(x+3)(x-3)$', '$(x+9)(x-9)(x^2+1)$'],
    answer: 2,
    solution: 'Two rounds of difference of squares: $x^4 - 81 = (x^2+9)(x^2-9)$, and then $x^2 - 9 = (x+3)(x-3)$. The sum of squares $x^2 + 9$ does not factor, so $(x^2+9)(x+3)(x-3)$ is fully finished; the first choice stops one round too early.',
  },
  {
    q: 'Compute $\\frac{123^2 - 23^2}{100}$.',
    choices: ['$100$', '$246$', '$14600$', '$146$'],
    answer: 3,
    solution: 'Factor the top: $123^2 - 23^2 = (123+23)(123-23) = 146 \\times 100$. Dividing by $100$ leaves $146$.',
  },
  {
    q: 'Factor $27x^3 - 8$.',
    choices: ['$(3x-2)(9x^2+6x+4)$', '$(3x-2)(9x^2-6x+4)$', '$(3x+2)(9x^2-6x+4)$', '$(3x-2)^3$'],
    answer: 0,
    solution: 'Difference of cubes with $a = 3x$, $b = 2$: minus in the binomial, plus in the middle of the trinomial: $(3x-2)(9x^2 + 6x + 4)$. Check at $x = 1$: original is $27 - 8 = 19$, and $(1)(19) = 19$. ✓',
  },
  {
    q: 'Rationalize and simplify $\\frac{6}{\\sqrt{7} + 1}$.',
    choices: ['$\\sqrt{7} + 1$', '$\\frac{\\sqrt{7} - 1}{6}$', '$6\\sqrt{7} - 6$', '$\\sqrt{7} - 1$'],
    answer: 3,
    solution: 'Multiply by the conjugate $\\sqrt{7} - 1$: the denominator becomes $7 - 1 = 6$, and the numerator becomes $6(\\sqrt{7} - 1)$. The $6$s cancel, leaving $\\sqrt{7} - 1$. Numeric check: $\\frac{6}{3.65} \\approx 1.65$, and $\\sqrt{7} - 1 \\approx 1.65$. ✓',
  },
  {
    q: 'If $x - y = 4$ and $x^2 - y^2 = 48$, what is $x + y$?',
    choices: ['$8$', '$12$', '$44$', '$16$'],
    answer: 1,
    solution: 'Factor: $x^2 - y^2 = (x+y)(x-y) = (x+y) \\cdot 4 = 48$, so $x + y = 12$. (For the curious: $x = 8$ and $y = 4$.)',
  },
  {
    q: 'Positive integers $x$ and $y$ satisfy $xy + 7x + 2y = 30$. What is $xy$?',
    choices: ['$6$', '$12$', '$8$', '$15$'],
    answer: 2,
    solution: "Simon's trick: add $7 \\cdot 2 = 14$ to both sides to get $(x+2)(y+7) = 44$. We need $x + 2 \\geq 3$ and $y + 7 \\geq 8$, and the only factor pair of $44$ that fits is $4 \\times 11$: $x = 2$, $y = 4$. Check: $8 + 14 + 8 = 30$. ✓ So $xy = 8$.",
  },
  {
    q: 'If $a + b = 7$ and $ab = 10$, what is $a^3 + b^3$?',
    choices: ['$133$', '$343$', '$203$', '$91$'],
    answer: 0,
    solution: 'First $a^2 + b^2 = (a+b)^2 - 2ab = 49 - 20 = 29$. Then $a^3 + b^3 = (a+b)(a^2 - ab + b^2) = 7(29 - 10) = 7 \\cdot 19 = 133$. (Check: $a$ and $b$ are $2$ and $5$, and $8 + 125 = 133$.) The trap $343 = 7^3$ assumes cubing distributes over addition — it does not!',
  },
  {
    q: 'Simplify $\\frac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}}$.',
    choices: ['$4 - \\sqrt{15}$', '$8 + 2\\sqrt{15}$', '$\\sqrt{15}$', '$4 + \\sqrt{15}$'],
    answer: 3,
    solution: 'Multiply top and bottom by $\\sqrt{5} + \\sqrt{3}$. The bottom becomes $5 - 3 = 2$; the top becomes $(\\sqrt{5}+\\sqrt{3})^2 = 5 + 2\\sqrt{15} + 3 = 8 + 2\\sqrt{15}$. Divide by $2$: $4 + \\sqrt{15}$. Numeric check: $\\frac{3.97}{0.50} \\approx 7.87$, and $4 + 3.87 = 7.87$. ✓',
  },
  {
    q: 'Compute $2025^2 - 2 \\cdot 2025 \\cdot 25 + 25^2$.',
    choices: ['$4{,}202{,}500$', '$4{,}100{,}625$', '$4{,}000{,}000$', '$2{,}000{,}000$'],
    answer: 2,
    solution: 'Recognize the perfect-square pattern $a^2 - 2ab + b^2 = (a-b)^2$ with $a = 2025$, $b = 25$: the whole thing is $(2025 - 25)^2 = 2000^2 = 4{,}000{,}000$. The choice $4{,}202{,}500$ is $(2025+25)^2$ — the wrong middle sign.',
  },
  {
    q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy - 3x - 3y = 1$?',
    choices: ['$2$', '$4$', '$3$', '$6$'],
    answer: 1,
    solution: 'The magic constant is $(-3)(-3) = 9$: adding it to both sides gives $(x-3)(y-3) = 10$. The factors could in principle be negative, but with $x, y \\geq 1$ each factor is at least $-2$, and two factors between $-2$ and $-1$ cannot multiply to $10$. So both are positive: $1 \\times 10$, $2 \\times 5$, $5 \\times 2$, $10 \\times 1$, giving $(4,13)$, $(5,8)$, $(8,5)$, $(13,4)$ — four pairs. Check $(5,8)$: $40 - 15 - 24 = 1$. ✓',
  },
]

const worksheet = [
  {
    q: 'Compute $59^2$ in your head by writing $59 = 60 - 1$.',
    answer: '$3481$',
    solution: '$(60-1)^2 = 3600 - 2 \\cdot 60 + 1 = 3600 - 120 + 1 = 3481$.',
  },
  {
    q: 'Compute $72 \\times 68$ using the difference of squares.',
    answer: '$4896$',
    solution: 'The factors straddle $70$: $(70+2)(70-2) = 4900 - 4 = 4896$.',
  },
  {
    q: 'Factor $25x^2 - 16$.',
    answer: '$(5x+4)(5x-4)$',
    solution: 'Both terms are squares: $25x^2 = (5x)^2$ and $16 = 4^2$, so the difference factors as $(5x+4)(5x-4)$.',
  },
  {
    q: 'Factor $x^3 + 1000$.',
    answer: '$(x+10)(x^2 - 10x + 100)$',
    solution: 'Sum of cubes with $a = x$, $b = 10$: $(x+10)(x^2 - 10x + 100)$. Check at $x = 1$: original is $1001$, and $(11)(91) = 1001$. ✓',
  },
  {
    q: 'Rationalize and simplify $\\frac{8}{\\sqrt{6}}$.',
    answer: '$\\frac{4\\sqrt{6}}{3}$',
    solution: 'Multiply by $\\frac{\\sqrt{6}}{\\sqrt{6}}$: $\\frac{8\\sqrt{6}}{6}$, then reduce by the common factor $2$ to get $\\frac{4\\sqrt{6}}{3}$.',
  },
  {
    q: 'Factor $xy + 8x + 3y + 24$.',
    answer: '$(x+3)(y+8)$',
    solution: 'Group: $x(y+8) + 3(y+8) = (x+3)(y+8)$. Expanding gives back $xy + 8x + 3y + 24$. ✓',
  },
  {
    q: 'Rationalize $\\frac{5}{2\\sqrt{3} - 3}$.',
    answer: '$\\frac{10\\sqrt{3} + 15}{3}$',
    solution: 'Multiply by the conjugate $2\\sqrt{3} + 3$: the denominator becomes $(2\\sqrt{3})^2 - 3^2 = 12 - 9 = 3$, and the numerator becomes $5(2\\sqrt{3} + 3) = 10\\sqrt{3} + 15$. So the answer is $\\frac{10\\sqrt{3} + 15}{3}$. Numeric check: the original is about $\\frac{5}{0.46} \\approx 10.8$, and $\\frac{17.3 + 15}{3} \\approx 10.8$. ✓',
  },
  {
    q: 'If $x + \\frac{1}{x} = 6$, what is $x^2 + \\frac{1}{x^2}$?',
    answer: '$34$',
    solution: 'Square both sides: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 + 2 + \\frac{1}{x^2} = 36$. The middle term is just $2$ because $x$ and $\\frac{1}{x}$ cancel. So $x^2 + \\frac{1}{x^2} = 36 - 2 = 34$.',
  },
  {
    q: 'Find all pairs of positive integers $(x, y)$ with $xy + 4x + 3y = 37$.',
    answer: '$(x, y) = (4, 3)$',
    solution: "Add the magic constant $4 \\cdot 3 = 12$ to both sides: $(x+3)(y+4) = 49$. We need $x + 3 \\geq 4$ and $y + 4 \\geq 5$, and the factor pairs of $49$ are $1 \\times 49$, $7 \\times 7$, $49 \\times 1$ — only $7 \\times 7$ fits. So $x = 4$, $y = 3$. Check: $12 + 16 + 9 = 37$. ✓",
  },
  {
    q: 'Compute $\\frac{50^3 + 30^3}{50 + 30}$ without a calculator.',
    answer: '$1900$',
    solution: 'By the sum of cubes, $\\frac{a^3 + b^3}{a + b} = a^2 - ab + b^2$. With $a = 50$, $b = 30$: $2500 - 1500 + 900 = 1900$. (Long way: $\\frac{125000 + 27000}{80} = \\frac{152000}{80} = 1900$. ✓)',
  },
]

export default {
  id: 'intro-algebra-ch11',
  book: 'intro-algebra',
  number: 11,
  title: 'Special Factorizations',
  intro:
    'Some products show up so often in algebra that they deserve to be recognized on sight — squares of binomials, differences of squares, and sums and differences of cubes. In this chapter you will learn these patterns forwards and backwards: to expand in a flash, to factor what looks unfactorable, and even to tame square roots and crack integer puzzles. These are the tools that make hard problems suddenly look easy!',
  sections: [s111, s112, s113, s114, s115],
  challenge,
  worksheet,
}
