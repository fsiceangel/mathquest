// Introduction to Algebra — Chapter 10: Quadratic Equations — Part 1
// All problems, explanations, and examples are original MathQuest content.

const s101 = {
  id: '10.1',
  title: 'Getting Started With Quadratics',
  learn: {
    concepts: [
      {
        heading: 'Meet the quadratic',
        body: 'A quadratic equation is one that can be written as $ax^2 + bx + c = 0$, where $a \\ne 0$. The $x^2$ term is what makes it quadratic — if $a$ were $0$, we would be back to a plain linear equation. The form $ax^2 + bx + c = 0$ is called standard form.',
      },
      {
        heading: 'Why two solutions?',
        body: 'The equation $x^2 = 9$ has TWO solutions: $x = 3$ and $x = -3$, because both $3^2$ and $(-3)^2$ equal $9$. Squaring destroys the sign, so when we undo a square we must remember both the positive and negative possibilities. We write this as $x = \\pm 3$.',
      },
      {
        heading: 'Unwrapping a squared expression',
        body: 'The same idea solves $(x - a)^2 = k$ when $k$ is positive: whatever is inside the parentheses must be $\\sqrt{k}$ or $-\\sqrt{k}$. So $(x - 1)^2 = 16$ means $x - 1 = 4$ or $x - 1 = -4$, giving $x = 5$ or $x = -3$. And if $k$ is negative, there are no real solutions at all — a real number squared is never negative.',
      },
      {
        heading: 'The zero-product property',
        body: 'If a product of two numbers is $0$, then at least one of the factors must be $0$. This is the superpower behind solving quadratics: if $(x - 2)(x + 5) = 0$, then $x - 2 = 0$ or $x + 5 = 0$, so $x = 2$ or $x = -5$. Warning: this only works when the product is $0$! A product of $8$ tells you almost nothing about the individual factors.',
      },
    ],
    examples: [
      {
        problem: 'Solve $x^2 = 49$.',
        steps: [
          'We need every number whose square is $49$. One is obvious: $7$, since $7^2 = 49$.',
          'But do not forget the negative twin: $(-7)^2 = 49$ too.',
          'So there are two solutions, and we can write them together as $x = \\pm 7$.',
        ],
        answer: '$x = 7$ or $x = -7$',
      },
      {
        problem: 'Solve $(x - 3)^2 = 25$.',
        steps: [
          'Treat the whole parenthesis as a single mystery number. Its square is $25$, so it must be $5$ or $-5$.',
          'Case 1: $x - 3 = 5$, which gives $x = 8$.',
          'Case 2: $x - 3 = -5$, which gives $x = -2$.',
          'Check both: $(8-3)^2 = 5^2 = 25$ and $(-2-3)^2 = (-5)^2 = 25$. Both work!',
        ],
        answer: '$x = 8$ or $x = -2$',
      },
      {
        problem: 'Solve $(x - 2)(x + 5) = 0$.',
        steps: [
          'A product is $0$ only when at least one factor is $0$ — that is the zero-product property.',
          'First factor: $x - 2 = 0$ gives $x = 2$.',
          'Second factor: $x + 5 = 0$ gives $x = -5$.',
        ],
        answer: '$x = 2$ or $x = -5$',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these is a quadratic equation?',
      choices: ['$5x - 7 = 0$', '$3x^2 - x + 2 = 0$', '$x^3 + x^2 = 4$', '$\\frac{2}{x} = 6$'],
      answer: 1,
      solution: 'A quadratic equation has $x^2$ as its highest power of $x$. Only $3x^2 - x + 2 = 0$ fits: the first is linear, the second has an $x^3$ term (cubic), and the last has $x$ in a denominator.',
    },
    {
      q: 'Solve $x^2 = 64$.',
      choices: ['$x = 8$ only', '$x = 32$ or $x = -32$', '$x = 8$ or $x = -8$', '$x = 4$ or $x = -4$'],
      answer: 2,
      solution: 'Both $8^2$ and $(-8)^2$ equal $64$, so there are two solutions: $x = 8$ or $x = -8$. Forgetting the negative twin is the most common quadratic slip of all!',
    },
    {
      q: 'How many real solutions does $x^2 = -9$ have?',
      choices: ['None', 'One', 'Two', 'Infinitely many'],
      answer: 0,
      solution: 'A real number squared is never negative: positive numbers square to positives, negatives square to positives, and $0$ squares to $0$. Nothing squares to $-9$, so there are no real solutions.',
    },
    {
      q: 'Solve $(x - 6)(x + 2) = 0$.',
      choices: ['$x = 6$ or $x = -2$', '$x = -6$ or $x = 2$', '$x = 6$ only', '$x = -6$ or $x = -2$'],
      answer: 0,
      solution: 'By the zero-product property, one factor must be $0$. Either $x - 6 = 0$, giving $x = 6$, or $x + 2 = 0$, giving $x = -2$. Notice the solutions have the OPPOSITE signs from the numbers in the factors.',
    },
    {
      q: 'Solve $(x - 3)^2 = 25$.',
      choices: ['$x = 5$ or $x = -5$', '$x = 8$ only', '$x = -8$ or $x = 2$', '$x = 8$ or $x = -2$'],
      answer: 3,
      solution: 'The parenthesis squares to $25$, so $x - 3 = 5$ or $x - 3 = -5$. Adding $3$ to each: $x = 8$ or $x = -2$. Check: $(8-3)^2 = 25$ and $(-2-3)^2 = (-5)^2 = 25$. Choosing $x = \\pm 5$ forgets to undo the $-3$ shift.',
    },
    {
      q: 'Solve $2x^2 = 50$.',
      choices: ['$x = 5$ only', '$x = 5$ or $x = -5$', '$x = 10$ or $x = -10$', '$x = 25$ or $x = -25$'],
      answer: 1,
      solution: 'First divide both sides by $2$: $x^2 = 25$. Then take both square roots: $x = 5$ or $x = -5$. Check: $2 \\cdot 25 = 50$ either way.',
    },
    {
      q: 'Solve $(x + 4)^2 = 0$.',
      choices: ['$x = 4$ or $x = -4$', '$x = 4$ only', '$x = -4$ only', 'No real solutions'],
      answer: 2,
      solution: 'The only number that squares to $0$ is $0$ itself, so $x + 4 = 0$ and $x = -4$. This time both "cases" give the same answer — a quadratic can have just one solution when the square equals exactly $0$.',
    },
    {
      q: 'Solve $x(x - 7) = 0$.',
      choices: ['$x = 7$ only', '$x = 0$ only', '$x = 0$ or $x = -7$', '$x = 0$ or $x = 7$'],
      answer: 3,
      solution: 'The two factors are $x$ itself and $x - 7$. Setting each to zero: $x = 0$ or $x = 7$. Do not overlook the plain factor of $x$ — the solution $x = 0$ counts too!',
    },
    {
      q: 'Solve $(2x - 1)(x + 3) = 0$.',
      choices: ['$x = \\frac{1}{2}$ or $x = -3$', '$x = -\\frac{1}{2}$ or $x = 3$', '$x = 1$ or $x = -3$', '$x = 2$ or $x = -3$'],
      answer: 0,
      solution: 'Set each factor to zero. From $2x - 1 = 0$ we get $2x = 1$, so $x = \\frac{1}{2}$ — solve the little equation all the way, do not just flip the sign of the $1$! From $x + 3 = 0$ we get $x = -3$.',
    },
    {
      q: 'Solve $(x - 1)(x + 1) = 8$.',
      choices: ['$x = 9$ or $x = -7$', '$x = 3$ or $x = -3$', '$x = 3$ only', '$x = 8$ or $x = -8$'],
      answer: 1,
      solution: 'Careful — the product is $8$, not $0$, so we may NOT set each factor equal to $8$. Instead expand: $(x-1)(x+1) = x^2 - 1$, so $x^2 - 1 = 8$, which gives $x^2 = 9$ and $x = 3$ or $x = -3$. Check $x = 3$: $(2)(4) = 8$. Check $x = -3$: $(-4)(-2) = 8$. Both work!',
    },
  ],
}

const s102 = {
  id: '10.2',
  title: 'Factoring Quadratics I',
  learn: {
    concepts: [
      {
        heading: 'Running expansion backwards',
        body: 'Expanding gives $(x + p)(x + q) = x^2 + (p + q)x + pq$. So to factor $x^2 + bx + c$, we hunt for two numbers whose SUM is $b$ and whose PRODUCT is $c$. For $x^2 + 7x + 10$, the numbers $2$ and $5$ work ($2 + 5 = 7$ and $2 \\cdot 5 = 10$), so it factors as $(x + 2)(x + 5)$.',
      },
      {
        heading: 'Let the signs guide you',
        body: 'If $c$ is positive, the two numbers have the SAME sign — both matching the sign of $b$. If $c$ is negative, the two numbers have OPPOSITE signs, and the one with the larger size takes the sign of $b$. So for $x^2 - 3x - 10$ we need opposite signs with the bigger number negative: $-5$ and $2$.',
      },
      {
        heading: 'Factoring solves equations',
        body: 'To solve $x^2 + bx + c = 0$, factor the left side and use the zero-product property. If $x^2 - 9x + 20 = (x - 4)(x - 5) = 0$, then $x = 4$ or $x = 5$. Get everything on one side FIRST — the zero-product property needs a zero!',
      },
      {
        heading: 'Always check by expanding',
        body: 'Factoring is easy to check: just multiply your factors back out. If $(x + 2)(x + 5)$ expands to $x^2 + 7x + 10$, your factorization is right. This ten-second check catches nearly every sign slip.',
      },
    ],
    examples: [
      {
        problem: 'Factor $x^2 + 7x + 10$.',
        steps: [
          'We need two numbers with sum $7$ and product $10$. Since the product is positive and the sum is positive, both numbers are positive.',
          'Pairs multiplying to $10$: $1 \\cdot 10$ (sum $11$) and $2 \\cdot 5$ (sum $7$). The pair $2$ and $5$ wins.',
          'Check by expanding: $(x + 2)(x + 5) = x^2 + 5x + 2x + 10 = x^2 + 7x + 10$. It matches!',
        ],
        answer: '$x^2 + 7x + 10 = (x + 2)(x + 5)$',
      },
      {
        problem: 'Factor $x^2 - 3x - 10$.',
        steps: [
          'We need sum $-3$ and product $-10$. A negative product means the two numbers have opposite signs.',
          'Try pairs multiplying to $-10$: $-5$ and $2$ have sum $-3$. Found them!',
          'Check: $(x - 5)(x + 2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$.',
        ],
        answer: '$x^2 - 3x - 10 = (x - 5)(x + 2)$',
      },
      {
        problem: 'Solve $x^2 - 9x + 20 = 0$.',
        steps: [
          'We need sum $-9$ and product $20$: both numbers are negative, and $-4$ with $-5$ works.',
          'So the equation becomes $(x - 4)(x - 5) = 0$.',
          'Zero-product property: $x = 4$ or $x = 5$. Check $x = 4$: $16 - 36 + 20 = 0$. Check $x = 5$: $25 - 45 + 20 = 0$.',
        ],
        answer: '$x = 4$ or $x = 5$',
      },
    ],
  },
  problems: [
    {
      q: 'Factor $x^2 + 5x + 6$.',
      choices: ['$(x + 1)(x + 6)$', '$(x - 2)(x - 3)$', '$(x + 2)(x + 3)$', '$(x + 6)(x - 1)$'],
      answer: 2,
      solution: 'We need sum $5$ and product $6$: the numbers $2$ and $3$ work. Check: $(x + 2)(x + 3) = x^2 + 5x + 6$. The pair $1$ and $6$ has the right product but sums to $7$, and $-2$, $-3$ would give $-5x$.',
    },
    {
      q: 'Which two numbers have sum $8$ and product $15$?',
      choices: ['$3$ and $5$', '$2$ and $6$', '$-3$ and $-5$', '$1$ and $15$'],
      answer: 0,
      solution: '$3 + 5 = 8$ and $3 \\cdot 5 = 15$ — both conditions check out. The pair $2$ and $6$ sums to $8$ but multiplies to $12$, and $-3$, $-5$ multiply to $15$ but sum to $-8$.',
    },
    {
      q: 'Factor $x^2 - 7x + 12$.',
      choices: ['$(x + 3)(x + 4)$', '$(x - 3)(x - 4)$', '$(x - 2)(x - 6)$', '$(x - 1)(x - 12)$'],
      answer: 1,
      solution: 'Positive product, negative sum: both numbers are negative. We need sum $-7$ and product $12$: that is $-3$ and $-4$. Check: $(x - 3)(x - 4) = x^2 - 7x + 12$. The pair $-2$, $-6$ gives $-8x$, not $-7x$.',
    },
    {
      q: 'Factor $x^2 + 2x - 15$.',
      choices: ['$(x - 5)(x + 3)$', '$(x + 15)(x - 1)$', '$(x - 5)(x - 3)$', '$(x + 5)(x - 3)$'],
      answer: 3,
      solution: 'The product $-15$ is negative, so the numbers have opposite signs, and the sum $+2$ means the bigger one is positive: $5$ and $-3$. Check: $(x + 5)(x - 3) = x^2 - 3x + 5x - 15 = x^2 + 2x - 15$. Flipping the signs would give $-2x$ instead.',
    },
    {
      q: 'Solve $x^2 + 9x + 18 = 0$.',
      choices: ['$x = -3$ or $x = -6$', '$x = 3$ or $x = 6$', '$x = -3$ or $x = 6$', '$x = -2$ or $x = -9$'],
      answer: 0,
      solution: 'Sum $9$, product $18$: the numbers $3$ and $6$ give the factorization $(x + 3)(x + 6) = 0$. The zero-product property then gives $x = -3$ or $x = -6$ — the opposites of the numbers in the factors. Check $x = -3$: $9 - 27 + 18 = 0$.',
    },
    {
      q: 'Solve $x^2 - 4x - 21 = 0$.',
      choices: ['$x = -7$ or $x = 3$', '$x = 7$ or $x = 3$', '$x = 7$ or $x = -3$', '$x = -7$ or $x = -3$'],
      answer: 2,
      solution: 'We need sum $-4$ and product $-21$: opposite signs with the bigger one negative, so $-7$ and $3$. Then $(x - 7)(x + 3) = 0$ gives $x = 7$ or $x = -3$. Check $x = -3$: $9 + 12 - 21 = 0$.',
    },
    {
      q: 'Solve $x^2 = 6x - 8$.',
      choices: ['$x = 6$ or $x = -8$', '$x = 2$ or $x = 4$', '$x = -2$ or $x = -4$', '$x = 2$ or $x = -4$'],
      answer: 1,
      solution: 'First move everything to one side: $x^2 - 6x + 8 = 0$. The zero-product property needs a zero! Now factor: $(x - 2)(x - 4) = 0$, so $x = 2$ or $x = 4$. Check $x = 2$: $4 = 12 - 8$. Check $x = 4$: $16 = 24 - 8$.',
    },
    {
      q: 'Factor $x^2 - 10x + 25$.',
      choices: ['$(x + 5)^2$', '$(x - 5)(x + 5)$', 'It cannot be factored', '$(x - 5)^2$'],
      answer: 3,
      solution: 'We need sum $-10$ and product $25$: that is $-5$ and $-5$ — the same number twice! So $x^2 - 10x + 25 = (x - 5)(x - 5) = (x - 5)^2$, a perfect square. Check: $(x-5)^2 = x^2 - 10x + 25$.',
    },
    {
      q: 'One solution of $x^2 + kx + 24 = 0$ is $x = -4$. What is $k$?',
      choices: ['$k = 10$', '$k = -10$', '$k = 6$', '$k = -6$'],
      answer: 0,
      solution: 'Substitute $x = -4$: $16 - 4k + 24 = 0$, so $40 = 4k$ and $k = 10$. As a bonus check, $x^2 + 10x + 24 = (x + 4)(x + 6)$, which really does have $x = -4$ as a solution (the other is $x = -6$).',
    },
    {
      q: 'For how many integers $b$ (positive or negative) can $x^2 + bx + 12$ be factored as $(x + p)(x + q)$ with integers $p$ and $q$?',
      choices: ['$3$', '$6$', '$4$', '$12$'],
      answer: 1,
      solution: 'We need integer pairs with product $12$; then $b$ is their sum. Positive pairs: $1 \\cdot 12$, $2 \\cdot 6$, $3 \\cdot 4$, giving $b = 13, 8, 7$. Each pair can also be made all-negative, giving $b = -13, -8, -7$. That is $6$ values in total. (Opposite-sign pairs would make the product $-12$, so they do not count here.)',
    },
  ],
}

const s103 = {
  id: '10.3',
  title: 'Factoring Quadratics II',
  learn: {
    concepts: [
      {
        heading: 'Pull out common factors first',
        body: 'Before anything else, check whether every term shares a factor. In $3x^2 - 12x$, both terms share $3x$, so $3x^2 - 12x = 3x(x - 4)$. Pulling out the common factor first makes whatever remains much friendlier — make it a habit!',
      },
      {
        heading: 'Difference of squares',
        body: 'The pattern $(a - b)(a + b) = a^2 - b^2$ runs backwards too: any difference of two squares factors instantly. So $x^2 - 49 = (x - 7)(x + 7)$ and $4x^2 - 9 = (2x - 3)(2x + 3)$. Notice there is no middle term — the $+ab$ and $-ab$ cancel when you expand.',
      },
      {
        heading: 'When the leading coefficient is not 1',
        body: 'To factor $ax^2 + bx + c$, find two numbers with product $ac$ and sum $b$, then use them to split the middle term and factor by grouping. For $2x^2 + 7x + 3$: we need product $2 \\cdot 3 = 6$ and sum $7$, so $6$ and $1$. Then $2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$.',
      },
      {
        heading: 'Expanding is still the referee',
        body: 'With a leading coefficient, sign slips multiply — so always expand your answer to check. If $(2x + 1)(x + 3)$ gives back $2x^2 + 7x + 3$, you are safe. If not, adjust and try again; even experts factor by educated trial and error.',
      },
    ],
    examples: [
      {
        problem: 'Solve $3x^2 - 12x = 0$.',
        steps: [
          'Every term shares a factor of $3x$, so factor it out: $3x(x - 4) = 0$.',
          'Zero-product property: $3x = 0$ or $x - 4 = 0$.',
          'So $x = 0$ or $x = 4$. Never divide both sides by $x$ — that throws away the solution $x = 0$!',
        ],
        answer: '$x = 0$ or $x = 4$',
      },
      {
        problem: 'Factor $2x^2 + 7x + 3$.',
        steps: [
          'Here $a = 2$, so find two numbers with product $ac = 2 \\cdot 3 = 6$ and sum $7$: the numbers $6$ and $1$.',
          'Split the middle term: $2x^2 + 6x + x + 3$.',
          'Group and factor each pair: $2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$.',
          'Check: $(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$.',
        ],
        answer: '$2x^2 + 7x + 3 = (2x + 1)(x + 3)$',
      },
      {
        problem: 'Factor $9x^2 - 25$.',
        steps: [
          'Both terms are perfect squares: $9x^2 = (3x)^2$ and $25 = 5^2$, and they are subtracted.',
          'Apply the difference-of-squares pattern with $a = 3x$ and $b = 5$.',
          'Check: $(3x - 5)(3x + 5) = 9x^2 + 15x - 15x - 25 = 9x^2 - 25$.',
        ],
        answer: '$9x^2 - 25 = (3x - 5)(3x + 5)$',
      },
    ],
  },
  problems: [
    {
      q: 'Factor $5x^2 - 20x$.',
      choices: ['$5x(x - 20)$', '$x(5x - 4)$', '$5x(x + 4)$', '$5x(x - 4)$'],
      answer: 3,
      solution: 'Both terms share $5x$. Dividing each term by $5x$ leaves $x - 4$, so $5x^2 - 20x = 5x(x - 4)$. Check: $5x \\cdot x = 5x^2$ and $5x \\cdot (-4) = -20x$.',
    },
    {
      q: 'Solve $2x^2 = 18x$.',
      choices: ['$x = 9$ only', '$x = 0$ or $x = 9$', '$x = 3$ or $x = -3$', '$x = 0$ only'],
      answer: 1,
      solution: 'Move everything to one side: $2x^2 - 18x = 0$, then factor: $2x(x - 9) = 0$, so $x = 0$ or $x = 9$. Dividing both sides by $x$ at the start would silently lose the solution $x = 0$ — factor instead of dividing by the variable.',
    },
    {
      q: 'Factor $x^2 - 49$.',
      choices: ['$(x - 7)(x + 7)$', '$(x - 7)^2$', '$(x + 7)^2$', '$(x - 49)(x + 1)$'],
      answer: 0,
      solution: 'This is a difference of squares: $x^2 - 7^2 = (x - 7)(x + 7)$. Note that $(x - 7)^2 = x^2 - 14x + 49$ — the perfect square has a middle term, but our expression has none.',
    },
    {
      q: 'Factor $4x^2 - 9$.',
      choices: ['$(4x - 3)(x + 3)$', '$(2x - 3)^2$', '$(2x - 3)(2x + 3)$', '$(2x - 9)(2x + 1)$'],
      answer: 2,
      solution: 'Both terms are squares: $4x^2 = (2x)^2$ and $9 = 3^2$. The difference-of-squares pattern gives $(2x - 3)(2x + 3)$. Check: $4x^2 + 6x - 6x - 9 = 4x^2 - 9$.',
    },
    {
      q: 'Factor $2x^2 + 5x + 2$.',
      choices: ['$(2x + 1)(x + 2)$', '$(2x + 2)(x + 1)$', '$(x + 1)(2x + 3)$', '$(2x - 1)(x - 2)$'],
      answer: 0,
      solution: 'Find two numbers with product $ac = 4$ and sum $5$: that is $4$ and $1$. Split: $2x^2 + 4x + x + 2 = 2x(x + 2) + 1(x + 2) = (2x + 1)(x + 2)$. Check: $2x^2 + 4x + x + 2 = 2x^2 + 5x + 2$.',
    },
    {
      q: 'Factor $3x^2 - 10x + 8$.',
      choices: ['$(3x + 4)(x + 2)$', '$(3x - 2)(x - 4)$', '$(3x - 8)(x - 1)$', '$(3x - 4)(x - 2)$'],
      answer: 3,
      solution: 'We need product $ac = 24$ and sum $-10$: the numbers $-6$ and $-4$. Split: $3x^2 - 6x - 4x + 8 = 3x(x - 2) - 4(x - 2) = (3x - 4)(x - 2)$. Check by expanding: $3x^2 - 6x - 4x + 8 = 3x^2 - 10x + 8$. The choice $(3x - 2)(x - 4)$ expands to $3x^2 - 14x + 8$ — close, but the middle term betrays it.',
    },
    {
      q: 'Solve $2x^2 - 8 = 0$.',
      choices: ['$x = 2$ only', '$x = 2$ or $x = -2$', '$x = 4$ or $x = -4$', '$x = 8$ or $x = -8$'],
      answer: 1,
      solution: 'Divide by $2$: $x^2 - 4 = 0$, so $x^2 = 4$ and $x = 2$ or $x = -2$. (Factoring works too: $2(x - 2)(x + 2) = 0$.) Both roots check: $2 \\cdot 4 - 8 = 0$.',
    },
    {
      q: 'Solve $3x^2 + 7x + 2 = 0$.',
      choices: ['$x = \\frac{1}{3}$ or $x = 2$', '$x = -3$ or $x = -2$', '$x = -\\frac{1}{3}$ or $x = -2$', '$x = \\frac{1}{3}$ or $x = -2$'],
      answer: 2,
      solution: 'Product $ac = 6$, sum $7$: use $6$ and $1$. Split: $3x^2 + 6x + x + 2 = 3x(x + 2) + 1(x + 2) = (3x + 1)(x + 2) = 0$. So $x = -\\frac{1}{3}$ or $x = -2$. Check $x = -2$: $12 - 14 + 2 = 0$.',
    },
    {
      q: 'Factor $2x^2 - 18$ completely.',
      choices: ['$2(x - 3)(x + 3)$', '$2(x - 9)(x + 9)$', '$(x - 6)(x + 3)$', '$2(x - 3)^2$'],
      answer: 0,
      solution: 'Pull out the common factor first: $2x^2 - 18 = 2(x^2 - 9)$. Then $x^2 - 9$ is a difference of squares: $2(x - 3)(x + 3)$. Check: $2(x^2 - 9) = 2x^2 - 18$. The trap $2(x - 9)(x + 9)$ would expand to $2x^2 - 162$.',
    },
    {
      q: 'Solve $4x^2 - 12x + 9 = 0$.',
      choices: ['$x = \\frac{3}{2}$ or $x = -\\frac{3}{2}$', '$x = -\\frac{3}{2}$ only', '$x = \\frac{3}{2}$ only', '$x = \\frac{2}{3}$ only'],
      answer: 2,
      solution: 'This is a perfect square: $4x^2 - 12x + 9 = (2x - 3)^2$, since $(2x)^2 = 4x^2$, $3^2 = 9$, and $2 \\cdot 2x \\cdot 3 = 12x$. So $(2x - 3)^2 = 0$ forces $2x - 3 = 0$, giving the single (double) root $x = \\frac{3}{2}$. The $\\pm$ twin appears only when the square equals a POSITIVE number.',
    },
  ],
}

const s104 = {
  id: '10.4',
  title: 'Sums and Products of Roots',
  learn: {
    concepts: [
      {
        heading: 'The roots leave fingerprints',
        body: 'If $r$ and $s$ are the roots of $x^2 + bx + c = 0$, then the quadratic factors as $(x - r)(x - s) = x^2 - (r + s)x + rs$. Matching coefficients: $r + s = -b$ and $rs = c$. The coefficients secretly announce the sum and product of the roots — no solving required!',
      },
      {
        heading: 'The general version',
        body: 'For $ax^2 + bx + c = 0$ with $a \\ne 0$, divide through by $a$ first. The rules become $r + s = -\\frac{b}{a}$ and $rs = \\frac{c}{a}$. Watch that minus sign on the sum — it is the single most common slip with these formulas.',
      },
      {
        heading: 'Building a quadratic from its roots',
        body: 'The recipe runs backwards too: a quadratic with roots $r$ and $s$ is $x^2 - (r + s)x + rs = 0$. Want roots $3$ and $7$? Sum is $10$, product is $21$, so $x^2 - 10x + 21 = 0$ does the job.',
      },
      {
        heading: 'Symmetric expressions without solving',
        body: 'Many expressions in $r$ and $s$ can be computed from just the sum and product. Two stars: $r^2 + s^2 = (r + s)^2 - 2rs$ (expand $(r+s)^2$ and subtract the extra $2rs$), and $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$ (combine over a common denominator). You never need to find $r$ and $s$ themselves!',
      },
    ],
    examples: [
      {
        problem: 'Without solving, find the sum and product of the roots of $x^2 - 7x + 12 = 0$.',
        steps: [
          'Here $b = -7$ and $c = 12$, so the sum is $-b = 7$ and the product is $c = 12$.',
          'Sanity check: the roots are actually $3$ and $4$ (since $(x-3)(x-4) = x^2 - 7x + 12$), and indeed $3 + 4 = 7$ and $3 \\cdot 4 = 12$.',
        ],
        answer: 'Sum $= 7$, product $= 12$',
      },
      {
        problem: 'Find the sum and product of the roots of $2x^2 + 8x - 10 = 0$.',
        steps: [
          'With $a = 2$, $b = 8$, $c = -10$: sum $= -\\frac{b}{a} = -\\frac{8}{2} = -4$ and product $= \\frac{c}{a} = \\frac{-10}{2} = -5$.',
          'Check: dividing the equation by $2$ gives $x^2 + 4x - 5 = 0$, which factors as $(x + 5)(x - 1)$, so the roots are $-5$ and $1$.',
          'Indeed $-5 + 1 = -4$ and $(-5)(1) = -5$. The formulas agree.',
        ],
        answer: 'Sum $= -4$, product $= -5$',
      },
      {
        problem: 'If $r$ and $s$ are the roots of $x^2 - 6x + 4 = 0$, find $r^2 + s^2$.',
        steps: [
          'From the coefficients: $r + s = 6$ and $rs = 4$. (The roots themselves are messy — but we will not need them!)',
          'Use the identity $r^2 + s^2 = (r + s)^2 - 2rs$.',
          'Substitute: $r^2 + s^2 = 6^2 - 2 \\cdot 4 = 36 - 8 = 28$.',
        ],
        answer: '$r^2 + s^2 = 28$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the sum of the roots of $x^2 - 10x + 21 = 0$?',
      choices: ['$-10$', '$10$', '$21$', '$-21$'],
      answer: 1,
      solution: 'For $x^2 + bx + c = 0$, the sum of the roots is $-b$. Here $b = -10$, so the sum is $-(-10) = 10$. Check: the roots are $3$ and $7$, and $3 + 7 = 10$.',
    },
    {
      q: 'What is the product of the roots of $x^2 + 3x - 18 = 0$?',
      choices: ['$18$', '$3$', '$-3$', '$-18$'],
      answer: 3,
      solution: 'The product of the roots of $x^2 + bx + c = 0$ is simply $c$, so it is $-18$. Check: the equation factors as $(x + 6)(x - 3)$, roots $-6$ and $3$, and $(-6)(3) = -18$.',
    },
    {
      q: 'What is the sum of the roots of $2x^2 - 12x + 5 = 0$?',
      choices: ['$6$', '$-6$', '$12$', '$\\frac{5}{2}$'],
      answer: 0,
      solution: 'Sum $= -\\frac{b}{a} = -\\frac{-12}{2} = 6$. Answering $12$ forgets to divide by $a = 2$; answering $-6$ misses the built-in minus sign; $\\frac{5}{2}$ is the product, not the sum.',
    },
    {
      q: 'Which quadratic equation has roots $3$ and $7$?',
      choices: ['$x^2 + 10x + 21 = 0$', '$x^2 - 21x + 10 = 0$', '$x^2 - 10x + 21 = 0$', '$x^2 + 10x - 21 = 0$'],
      answer: 2,
      solution: 'Use $x^2 - (\\text{sum})x + (\\text{product}) = 0$. Sum $= 3 + 7 = 10$ and product $= 3 \\cdot 7 = 21$, so the equation is $x^2 - 10x + 21 = 0$. Quick check: substituting $x = 3$ gives $9 - 30 + 21 = 0$.',
    },
    {
      q: 'What is the product of the roots of $3x^2 + 7x - 6 = 0$?',
      choices: ['$2$', '$-2$', '$-6$', '$-\\frac{7}{3}$'],
      answer: 1,
      solution: 'Product $= \\frac{c}{a} = \\frac{-6}{3} = -2$. Choosing $-6$ forgets to divide by $a$, and $-\\frac{7}{3}$ is the SUM of the roots. Check: the equation factors as $(3x - 2)(x + 3)$, roots $\\frac{2}{3}$ and $-3$, and $\\frac{2}{3} \\cdot (-3) = -2$.',
    },
    {
      q: 'If $r + s = 5$ and $rs = 6$, what is $r^2 + s^2$?',
      choices: ['$13$', '$19$', '$25$', '$31$'],
      answer: 0,
      solution: 'Use $r^2 + s^2 = (r + s)^2 - 2rs = 25 - 12 = 13$. Check with the actual numbers: $r = 2$, $s = 3$ satisfy both conditions, and $4 + 9 = 13$. Subtracting only one $rs$ would give the incorrect $19$.',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 9x + 14 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{14}{9}$', '$-\\frac{9}{14}$', '$\\frac{23}{126}$', '$\\frac{9}{14}$'],
      answer: 3,
      solution: 'Combine over a common denominator: $\\frac{1}{r} + \\frac{1}{s} = \\frac{s + r}{rs} = \\frac{9}{14}$, using sum $= 9$ and product $= 14$. Check: the roots are $2$ and $7$, and $\\frac{1}{2} + \\frac{1}{7} = \\frac{7 + 2}{14} = \\frac{9}{14}$.',
    },
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 4x - 12 = 0$, what is $(r + 1)(s + 1)$?',
      choices: ['$-12$', '$-8$', '$-7$', '$17$'],
      answer: 2,
      solution: 'Expand first: $(r + 1)(s + 1) = rs + r + s + 1$. With $r + s = 4$ and $rs = -12$: $-12 + 4 + 1 = -7$. Check: the roots are $6$ and $-2$, and $(6 + 1)(-2 + 1) = 7 \\cdot (-1) = -7$. Forgetting the final $+1$ gives $-8$.',
    },
    {
      q: 'One root of $x^2 - 9x + k = 0$ is twice the other. What is $k$?',
      choices: ['$9$', '$18$', '$27$', '$12$'],
      answer: 1,
      solution: 'Call the roots $r$ and $2r$. Their sum is $3r = 9$, so $r = 3$ and the roots are $3$ and $6$. Then $k$ is the product: $k = 3 \\cdot 6 = 18$. Check: $x^2 - 9x + 18 = (x - 3)(x - 6)$, and $6$ is indeed twice $3$.',
    },
    {
      q: 'If $r$ and $s$ are the roots of $2x^2 - 6x + 3 = 0$, what is $r^2 + s^2$?',
      choices: ['$6$', '$\\frac{15}{2}$', '$33$', '$3$'],
      answer: 0,
      solution: 'First get the sum and product with the $a$ included: $r + s = -\\frac{-6}{2} = 3$ and $rs = \\frac{3}{2}$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 9 - 3 = 6$. Using $-b = 6$ without dividing by $a$ would balloon the answer to $33$.',
    },
  ],
}

const s105 = {
  id: '10.5',
  title: 'Extensions and Applications',
  learn: {
    concepts: [
      {
        heading: 'Quadratics wearing disguises',
        body: 'Some scary-looking equations are quadratics in costume. In $x^4 - 5x^2 + 4 = 0$, substitute $y = x^2$: since $x^4 = (x^2)^2 = y^2$, the equation becomes $y^2 - 5y + 4 = 0$ — an old friend! Solve for $y$, then undo the substitution to find $x$. The same trick works when a whole expression repeats, as in $(x+1)^2 - 3(x+1) - 10 = 0$ with $y = x + 1$.',
      },
      {
        heading: 'From story to equation',
        body: 'Word problems become quadratics whenever two related quantities MULTIPLY — like length times width, or a number times its neighbor. Name one quantity $x$, write the other in terms of $x$, translate the story into an equation, and move everything to one side so factoring can take over.',
      },
      {
        heading: 'Not every root survives',
        body: 'A quadratic hands you two roots, but the story might only accept one. A rectangle cannot have width $-8$; a count of people cannot be $-3$. Always carry both roots back to the original story and discard any that make no sense. The algebra is right — it just does not know what the numbers mean!',
      },
      {
        heading: 'Undo the substitution completely',
        body: 'After substituting, finding $y$ is only halftime. Each value of $y$ can produce zero, one, or two values of $x$: $x^2 = 4$ gives $x = \\pm 2$, while $x^2 = -1$ gives nothing real. Count your final solutions in terms of the ORIGINAL variable.',
      },
    ],
    examples: [
      {
        problem: 'Solve $x^4 - 5x^2 + 4 = 0$.',
        steps: [
          'Let $y = x^2$, so $x^4 = y^2$. The equation becomes $y^2 - 5y + 4 = 0$.',
          'Factor: $(y - 1)(y - 4) = 0$, so $y = 1$ or $y = 4$.',
          'Undo the substitution: $x^2 = 1$ gives $x = \\pm 1$, and $x^2 = 4$ gives $x = \\pm 2$.',
          'A degree-four equation can have four solutions — and this one does: $x = 1, -1, 2, -2$.',
        ],
        answer: '$x = 1$, $x = -1$, $x = 2$, or $x = -2$',
      },
      {
        problem: 'A rectangle is $3$ units longer than it is wide, and its area is $40$. Find its dimensions.',
        steps: [
          'Let the width be $w$; then the length is $w + 3$, and the area gives $w(w + 3) = 40$.',
          'Expand and move everything to one side: $w^2 + 3w - 40 = 0$.',
          'Factor (sum $3$, product $-40$): $(w + 8)(w - 5) = 0$, so $w = -8$ or $w = 5$.',
          'A width of $-8$ makes no sense, so discard it. The width is $5$ and the length is $8$. Check: $5 \\cdot 8 = 40$.',
        ],
        answer: 'Width $5$ and length $8$',
      },
      {
        problem: 'Solve $(x + 1)^2 - 3(x + 1) - 10 = 0$.',
        steps: [
          'The expression $x + 1$ appears twice, so substitute $y = x + 1$: the equation becomes $y^2 - 3y - 10 = 0$.',
          'Factor: $(y - 5)(y + 2) = 0$, so $y = 5$ or $y = -2$.',
          'Undo the substitution: $x + 1 = 5$ gives $x = 4$, and $x + 1 = -2$ gives $x = -3$.',
          'Check $x = 4$: $25 - 15 - 10 = 0$. Check $x = -3$: $4 + 6 - 10 = 0$. Both work.',
        ],
        answer: '$x = 4$ or $x = -3$',
      },
    ],
  },
  problems: [
    {
      q: 'To solve $x^4 - 13x^2 + 36 = 0$, Priya substitutes $y = x^2$. What equation does she get?',
      choices: ['$y^2 - 13y + 36 = 0$', '$y^2 - 13x^2 + 36 = 0$', '$y^4 - 13y^2 + 36 = 0$', '$y^2 + 13y - 36 = 0$'],
      answer: 0,
      solution: 'Since $x^4 = (x^2)^2 = y^2$ and $x^2 = y$, every $x$ disappears: $y^2 - 13y + 36 = 0$. A substitution must replace the variable everywhere — leaving a stray $x^2$ behind means the job is only half done.',
    },
    {
      q: 'What are ALL the solutions of $x^4 - 5x^2 + 4 = 0$?',
      choices: ['$x = 1$ or $x = 4$', '$x = 1$ or $x = 2$ only', '$x = 1, -1, 2, -2$', '$x = 2$ or $x = -2$ only'],
      answer: 2,
      solution: 'With $y = x^2$: $(y - 1)(y - 4) = 0$, so $y = 1$ or $y = 4$. But $y$ is not the answer — undo the substitution! $x^2 = 1$ gives $x = \\pm 1$ and $x^2 = 4$ gives $x = \\pm 2$, four solutions in all. The choice "$1$ or $4$" stops at $y$.',
    },
    {
      q: 'A rectangle has width $w$ and length $w + 5$, and its area is $36$. Which equation should you solve?',
      choices: ['$w^2 + 5w + 36 = 0$', '$w^2 + 5w - 36 = 0$', '$2w + 2(w + 5) = 36$', '$w^2 - 5w - 36 = 0$'],
      answer: 1,
      solution: 'Area is width times length: $w(w + 5) = 36$. Expanding and moving the $36$ over: $w^2 + 5w - 36 = 0$. The choice $2w + 2(w + 5) = 36$ would be the equation if $36$ were the PERIMETER — always double-check which measurement the story gives you.',
    },
    {
      q: 'A number squared is $6$ more than the number itself. Find ALL such numbers.',
      choices: ['$3$ only', '$-3$ and $2$', '$6$ and $-1$', '$3$ and $-2$'],
      answer: 3,
      solution: 'The story says $x^2 = x + 6$, so $x^2 - x - 6 = 0$, which factors as $(x - 3)(x + 2) = 0$: $x = 3$ or $x = -2$. Both survive the check: $9 = 3 + 6$ and $4 = -2 + 6$. Nothing in this story forbids negatives, so keep both!',
    },
    {
      q: 'The product of two consecutive positive integers is $72$. What are they?',
      choices: ['$8$ and $9$', '$-9$ and $-8$', '$6$ and $12$', '$7$ and $8$'],
      answer: 0,
      solution: 'Let the smaller be $n$: then $n(n + 1) = 72$, so $n^2 + n - 72 = 0$, which factors as $(n + 9)(n - 8) = 0$: $n = 8$ or $n = -9$. The problem asks for POSITIVE integers, so discard $n = -9$ and take $8$ and $9$. Check: $8 \\cdot 9 = 72$.',
    },
    {
      q: 'Solve $(x + 2)^2 - 5(x + 2) + 6 = 0$.',
      choices: ['$x = 2$ or $x = 3$', '$x = 0$ or $x = 1$', '$x = 4$ or $x = 5$', '$x = -2$ or $x = -3$'],
      answer: 1,
      solution: 'Substitute $y = x + 2$: then $y^2 - 5y + 6 = (y - 2)(y - 3) = 0$, so $y = 2$ or $y = 3$. Now undo it: $x + 2 = 2$ gives $x = 0$, and $x + 2 = 3$ gives $x = 1$. The choice "$2$ or $3$" reports $y$ instead of $x$ — always finish the trip back!',
    },
    {
      q: 'A ball is thrown so that its height after $t$ seconds is $48t - 16t^2$ feet. At what time(s) is the ball at height $32$ feet?',
      choices: ['$t = 1$ only', '$t = 2$ only', '$t = 1$ and $t = 2$', '$t = 1.5$ only'],
      answer: 2,
      solution: 'Set $48t - 16t^2 = 32$, rearrange to $16t^2 - 48t + 32 = 0$, and divide by $16$: $t^2 - 3t + 2 = 0$, so $(t - 1)(t - 2) = 0$. Both times are real moments: the ball passes $32$ feet on the way up at $t = 1$ and again on the way down at $t = 2$.',
    },
    {
      q: 'An $8$ by $5$ photo is enlarged by adding the same amount $x$ to both its length and width, making the new area $70$. What is $x$?',
      choices: ['$x = 15$', '$x = 5$', '$x = 3$', '$x = 2$'],
      answer: 3,
      solution: 'The new dimensions are $8 + x$ and $5 + x$, so $(8 + x)(5 + x) = 70$. Expanding: $x^2 + 13x + 40 = 70$, so $x^2 + 13x - 30 = 0$, which factors as $(x + 15)(x - 2) = 0$. Discard $x = -15$ (we cannot shrink by more than the photo!), leaving $x = 2$. Check: $10 \\cdot 7 = 70$.',
    },
    {
      q: 'What are ALL the real solutions of $x^4 = 3x^2 + 4$?',
      choices: ['$x = 2, -2, 1, -1$', '$x = 2$ only', '$x = 2$ or $x = -2$', '$x = 1$ or $x = -1$'],
      answer: 2,
      solution: 'Rearrange: $x^4 - 3x^2 - 4 = 0$. With $y = x^2$: $(y - 4)(y + 1) = 0$, so $y = 4$ or $y = -1$. Now $x^2 = 4$ gives $x = \\pm 2$, but $x^2 = -1$ has NO real solutions — a square is never negative. So only two solutions survive. Check $x = 2$: $16 = 12 + 4$.',
    },
    {
      q: 'A right triangle has legs of lengths $x$ and $x + 7$, and its hypotenuse is $13$. What is the length of the shorter leg?',
      choices: ['$5$', '$12$', '$-12$', '$8$'],
      answer: 0,
      solution: 'The Pythagorean theorem gives $x^2 + (x + 7)^2 = 169$. Expanding: $2x^2 + 14x + 49 = 169$, so $2x^2 + 14x - 120 = 0$, and dividing by $2$: $x^2 + 7x - 60 = 0$, which factors as $(x + 12)(x - 5) = 0$. A leg cannot have length $-12$, so $x = 5$: the legs are $5$ and $12$. Check: $25 + 144 = 169$.',
    },
  ],
}

const challenge = [
  {
    q: 'Solve $x^2 - 5x - 14 = 0$.',
    choices: ['$x = -7$ or $x = 2$', '$x = 7$ or $x = 2$', '$x = 7$ or $x = -2$', '$x = -7$ or $x = -2$'],
    answer: 2,
    solution: 'We need sum $-5$ and product $-14$: the numbers $-7$ and $2$. So $(x - 7)(x + 2) = 0$, giving $x = 7$ or $x = -2$. Check $x = -2$: $4 + 10 - 14 = 0$.',
  },
  {
    q: 'Factor $6x^2 + x - 15$.',
    choices: ['$(3x + 5)(2x - 3)$', '$(3x - 5)(2x + 3)$', '$(6x + 5)(x - 3)$', '$(3x + 1)(2x - 15)$'],
    answer: 0,
    solution: 'We need product $ac = -90$ and sum $1$: the numbers $10$ and $-9$. Split: $6x^2 + 10x - 9x - 15 = 2x(3x + 5) - 3(3x + 5) = (3x + 5)(2x - 3)$. Check: $6x^2 - 9x + 10x - 15 = 6x^2 + x - 15$.',
  },
  {
    q: 'Compute $51^2 - 49^2$ without squaring either number.',
    choices: ['$4$', '$200$', '$100$', '$400$'],
    answer: 1,
    solution: 'Difference of squares: $51^2 - 49^2 = (51 - 49)(51 + 49) = 2 \\cdot 100 = 200$. Factoring patterns are not just for variables — they crunch numbers too!',
  },
  {
    q: 'For which values of $k$ does $x^2 + kx + 16 = 0$ have exactly one solution?',
    choices: ['$k = 8$ only', '$k = 4$ or $k = -4$', '$k = 16$ only', '$k = 8$ or $k = -8$'],
    answer: 3,
    solution: 'Exactly one solution means the quadratic is a perfect square: $(x + 4)^2 = x^2 + 8x + 16$ or $(x - 4)^2 = x^2 - 8x + 16$. So $k = 8$ or $k = -8$. Do not stop at the positive case — squares hide sign information!',
  },
  {
    q: 'What is the sum of ALL real solutions of $x^4 - 10x^2 + 9 = 0$?',
    choices: ['$0$', '$10$', '$8$', '$4$'],
    answer: 0,
    solution: 'Substitute $y = x^2$: $(y - 1)(y - 9) = 0$, so $x^2 = 1$ or $x^2 = 9$, giving $x = 1, -1, 3, -3$. Each solution cancels with its negative twin, so the sum is $0$. (Not $10$ — that is the sum of the $y$ values!)',
  },
  {
    q: 'A rectangle has area $96$, and its length is $4$ more than twice its width. What is its perimeter?',
    choices: ['$40$', '$96$', '$44$', '$22$'],
    answer: 2,
    solution: 'Let the width be $w$; the length is $2w + 4$, so $w(2w + 4) = 96$, which gives $2w^2 + 4w - 96 = 0$, or $w^2 + 2w - 48 = 0$. Factor: $(w + 8)(w - 6) = 0$, so $w = 6$ (discard $-8$). The length is $16$, and the perimeter is $2(6 + 16) = 44$. Check the area: $6 \\cdot 16 = 96$.',
  },
  {
    q: 'If $r$ and $s$ are the roots of $x^2 - 6x + 2 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
    choices: ['$6$', '$3$', '$\\frac{1}{3}$', '$-3$'],
    answer: 1,
    solution: 'Use $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$. From the coefficients, $r + s = 6$ and $rs = 2$, so the answer is $\\frac{6}{2} = 3$. The roots themselves are irrational, but we never needed them.',
  },
  {
    q: 'The roots of $x^2 - 8x + k = 0$ differ by $2$. What is $k$?',
    choices: ['$16$', '$12$', '$8$', '$15$'],
    answer: 3,
    solution: 'The roots sum to $8$, so they sit one step on each side of $4$. To differ by $2$, each step must be $1$: the roots are $5$ and $3$. Then $k$ is the product: $5 \\cdot 3 = 15$. Check: $x^2 - 8x + 15 = (x - 3)(x - 5)$ has roots $3$ and $5$, which differ by $2$.',
  },
  {
    q: 'Solve $6x^2 = 7x + 3$.',
    choices: ['$x = \\frac{3}{2}$ or $x = -\\frac{1}{3}$', '$x = -\\frac{3}{2}$ or $x = \\frac{1}{3}$', '$x = 7$ or $x = 3$', '$x = \\frac{2}{3}$ or $x = -3$'],
    answer: 0,
    solution: 'Rearrange: $6x^2 - 7x - 3 = 0$. We need product $ac = -18$ and sum $-7$: the numbers $-9$ and $2$. Split: $6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3) = 0$, so $x = -\\frac{1}{3}$ or $x = \\frac{3}{2}$. Check $x = \\frac{3}{2}$: $6 \\cdot \\frac{9}{4} = \\frac{27}{2}$ and $7 \\cdot \\frac{3}{2} + 3 = \\frac{27}{2}$.',
  },
  {
    q: 'If $r$ and $s$ are the roots of $x^2 - 4x + 1 = 0$, what is $(r - s)^2$?',
    choices: ['$16$', '$14$', '$20$', '$12$'],
    answer: 3,
    solution: 'Expand: $(r - s)^2 = r^2 - 2rs + s^2 = (r + s)^2 - 4rs$ (it is $(r+s)^2$ minus FOUR $rs$, since we go from $+2rs$ to $-2rs$). With $r + s = 4$ and $rs = 1$: $16 - 4 = 12$. Subtracting only $2rs$ gives $14$, which is $r^2 + s^2$ — a different expression.',
  },
  {
    q: 'Find all $x$ satisfying $x + \\frac{1}{x} = \\frac{5}{2}$.',
    choices: ['$x = 2$ only', '$x = 2$ or $x = \\frac{1}{2}$', '$x = 2$ or $x = -\\frac{1}{2}$', '$x = \\frac{5}{2}$ or $x = 1$'],
    answer: 1,
    solution: 'Multiply both sides by $2x$: $2x^2 + 2 = 5x$, so $2x^2 - 5x + 2 = 0$. We need product $ac = 4$ and sum $-5$: the numbers $-4$ and $-1$. Split: $2x^2 - 4x - x + 2 = 2x(x - 2) - 1(x - 2) = (2x - 1)(x - 2) = 0$, giving $x = \\frac{1}{2}$ or $x = 2$. Fittingly, the two solutions are reciprocals of each other! Check $x = 2$: $2 + \\frac{1}{2} = \\frac{5}{2}$.',
  },
  {
    q: 'Which quadratic equation has roots $2 + \\sqrt{3}$ and $2 - \\sqrt{3}$?',
    choices: ['$x^2 + 4x + 1 = 0$', '$x^2 - 4x - 1 = 0$', '$x^2 - 4x + 1 = 0$', '$x^2 - x + 4 = 0$'],
    answer: 2,
    solution: 'Sum: $(2 + \\sqrt{3}) + (2 - \\sqrt{3}) = 4$ — the square roots cancel. Product: $(2 + \\sqrt{3})(2 - \\sqrt{3}) = 4 - 3 = 1$ — difference of squares! So the equation is $x^2 - (\\text{sum})x + (\\text{product}) = x^2 - 4x + 1 = 0$. Vieta builds equations even from irrational roots.',
  },
]

const worksheet = [
  {
    q: 'Solve $x^2 = 121$.',
    answer: '$x = 11$ or $x = -11$',
    solution: 'Both square roots count: $11^2 = 121$ and $(-11)^2 = 121$, so $x = 11$ or $x = -11$.',
  },
  {
    q: 'Factor $x^2 + 8x + 12$.',
    answer: '$(x + 2)(x + 6)$',
    solution: 'We need sum $8$ and product $12$: the numbers $2$ and $6$. Check: $(x + 2)(x + 6) = x^2 + 8x + 12$.',
  },
  {
    q: 'Solve $x^2 - 2x - 35 = 0$.',
    answer: '$x = 7$ or $x = -5$',
    solution: 'We need sum $-2$ and product $-35$: the numbers $-7$ and $5$. Factor: $(x - 7)(x + 5) = 0$, so $x = 7$ or $x = -5$. Check $x = -5$: $25 + 10 - 35 = 0$.',
  },
  {
    q: 'Factor $4x^2 - 100$ completely.',
    answer: '$4(x - 5)(x + 5)$',
    solution: 'Pull out the common factor first: $4x^2 - 100 = 4(x^2 - 25)$. Then use difference of squares: $4(x - 5)(x + 5)$.',
  },
  {
    q: 'Without solving, find the sum and the product of the roots of $2x^2 - 10x + 7 = 0$.',
    answer: 'Sum $= 5$, product $= \\frac{7}{2}$',
    solution: 'Sum $= -\\frac{b}{a} = -\\frac{-10}{2} = 5$ and product $= \\frac{c}{a} = \\frac{7}{2}$. Remember the minus sign in the sum formula, and divide both by $a$.',
  },
  {
    q: 'Solve $3x^2 + 10x - 8 = 0$.',
    answer: '$x = \\frac{2}{3}$ or $x = -4$',
    solution: 'We need product $ac = -24$ and sum $10$: the numbers $12$ and $-2$. Split: $3x^2 + 12x - 2x - 8 = 3x(x + 4) - 2(x + 4) = (3x - 2)(x + 4) = 0$, so $x = \\frac{2}{3}$ or $x = -4$. Check $x = -4$: $48 - 40 - 8 = 0$.',
  },
  {
    q: 'If $r$ and $s$ are the roots of $x^2 - 7x + 9 = 0$, find $r^2 + s^2$.',
    answer: '$31$',
    solution: 'From the coefficients, $r + s = 7$ and $rs = 9$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 49 - 18 = 31$. No need to find the (irrational) roots themselves.',
  },
  {
    q: 'Find all real solutions of $x^4 - 29x^2 + 100 = 0$.',
    answer: '$x = 2$, $x = -2$, $x = 5$, or $x = -5$',
    solution: 'Substitute $y = x^2$: $y^2 - 29y + 100 = 0$ needs sum $29$ and product $100$: the numbers $4$ and $25$, so $(y - 4)(y - 25) = 0$. Then $x^2 = 4$ gives $x = \\pm 2$ and $x^2 = 25$ gives $x = \\pm 5$ — four solutions in all.',
  },
  {
    q: 'A rectangle is $6$ units longer than it is wide, and its area is $91$. Find its dimensions.',
    answer: 'Width $7$ and length $13$',
    solution: 'Let the width be $w$: then $w(w + 6) = 91$, so $w^2 + 6w - 91 = 0$, which factors as $(w + 13)(w - 7) = 0$. Discard the impossible width $-13$, leaving $w = 7$ and length $13$. Check: $7 \\cdot 13 = 91$.',
  },
  {
    q: 'One root of $x^2 - 12x + k = 0$ is twice the other. Find $k$.',
    answer: '$k = 32$',
    solution: 'Call the roots $r$ and $2r$. Their sum is $3r = 12$, so $r = 4$ and the roots are $4$ and $8$. Then $k$ is their product: $4 \\cdot 8 = 32$. Check: $x^2 - 12x + 32 = (x - 4)(x - 8)$, and $8$ is twice $4$.',
  },
]

export default {
  id: 'intro-algebra-ch10',
  book: 'intro-algebra',
  number: 10,
  title: 'Quadratic Equations — Part 1',
  intro:
    'So far, every equation you have solved had the variable appearing on its own. Now the variable gets squared — and suddenly equations can have two solutions instead of one! In this chapter you will learn to crack quadratics by taking square roots and by factoring, and you will discover the elegant hidden link between a quadratic’s coefficients and its roots.',
  sections: [s101, s102, s103, s104, s105],
  challenge,
  worksheet,
}
