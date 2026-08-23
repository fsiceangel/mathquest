// Introduction to Algebra — Chapter 18: Polynomials
// All problems, explanations, and examples are original MathQuest content.

const s181 = {
  id: '18.1',
  title: 'Addition and Subtraction',
  learn: {
    concepts: [
      {
        heading: 'Meet the polynomial',
        body: 'A polynomial is a sum of terms, where each term is a number times a variable raised to a whole-number power — like $3x^2$, $-5x$, or plain $7$. The number in front is the coefficient, and the term with no variable is the constant term. Watch out: expressions with a variable in a denominator like $\\frac{2}{x}$, or under a square root like $\\sqrt{x}$, are NOT polynomials, because those are not whole-number powers.',
      },
      {
        heading: 'Degree, leading term, and standard form',
        body: 'The degree of a term is its exponent, and the degree of a polynomial is the largest degree among its terms. Standard form lists terms from highest degree down to lowest, so the leading term (and its leading coefficient) sits out front. For example, $5x - 2x^3 + 7$ in standard form is $-2x^3 + 5x + 7$: degree $3$, leading coefficient $-2$, constant term $7$.',
      },
      {
        heading: 'Add and subtract by combining like terms',
        body: 'Like terms have the same variable and the same exponent — only those can be combined. To add polynomials, just gather like terms. To subtract, first distribute the minus sign to EVERY term of the polynomial being subtracted, then combine. Missing even one sign flip is the most common polynomial mistake in the world, so slow down at that step!',
      },
      {
        heading: 'The degree of a sum can surprise you',
        body: 'Usually the degree of a sum is the larger of the two degrees: a $4x^3$ term has nothing to cancel it in a degree-$2$ polynomial. But when two polynomials have the SAME degree, their leading terms might cancel — $(x^3 + x) + (-x^3 + 2)$ collapses to $x + 2$, degree $1$. So the degree of a sum is AT MOST the larger degree, not always exactly it.',
      },
    ],
    examples: [
      {
        problem: 'Write $5x - 2x^3 + 7 + x^2$ in standard form, then state its degree, leading coefficient, and constant term.',
        steps: [
          'Standard form means highest exponent first: the degrees here are $3$, $2$, $1$, $0$.',
          'Reorder: $-2x^3 + x^2 + 5x + 7$. The minus sign travels with its term!',
          'Now read everything off the front and back: the leading term is $-2x^3$, so the degree is $3$ and the leading coefficient is $-2$. The constant term is $7$.',
        ],
        answer: '$-2x^3 + x^2 + 5x + 7$; degree $3$, leading coefficient $-2$, constant term $7$',
      },
      {
        problem: 'Subtract: $(3x^2 - 4x + 6) - (x^2 - 5x + 2)$.',
        steps: [
          'Distribute the minus sign to every term of the second polynomial: $3x^2 - 4x + 6 - x^2 + 5x - 2$. Notice $-5x$ became $+5x$!',
          'Combine like terms by degree: $3x^2 - x^2 = 2x^2$, then $-4x + 5x = x$, then $6 - 2 = 4$.',
        ],
        answer: '$(3x^2 - 4x + 6) - (x^2 - 5x + 2) = 2x^2 + x + 4$',
      },
      {
        problem: 'Evaluate $p(x) = 2x^3 - 3x + 1$ at $x = -2$.',
        steps: [
          'Substitute with parentheses around $-2$ so no sign gets lost: $p(-2) = 2(-2)^3 - 3(-2) + 1$.',
          'Compute each piece: $(-2)^3 = -8$, so the first term is $2 \\times (-8) = -16$. The middle term is $-3 \\times (-2) = +6$.',
          'Add them up: $-16 + 6 + 1 = -9$.',
        ],
        answer: '$p(-2) = -9$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the coefficient of $x^2$ in the polynomial $4x^3 - 7x^2 + x - 9$?',
      choices: ['$7$', '$4$', '$-7$', '$-9$'],
      answer: 2,
      solution: 'The coefficient of $x^2$ is the number multiplying $x^2$, including its sign. The $x^2$ term is $-7x^2$, so the coefficient is $-7$. (The number $4$ is the coefficient of $x^3$, and $-9$ is the constant term.)',
    },
    {
      q: 'Which of the following is NOT a polynomial?',
      choices: ['$5x + \\frac{2}{x}$', '$3x^2 - x + 1$', '$\\frac{1}{2}x^4$', '$x^3 - 7$'],
      answer: 0,
      solution: 'Every term of a polynomial needs a whole-number power of the variable. But $\\frac{2}{x}$ is $2x^{-1}$ — a negative exponent — so $5x + \\frac{2}{x}$ is not a polynomial. Fraction COEFFICIENTS like $\\frac{1}{2}$ are perfectly fine; it is the variable that must stay out of the denominator.',
    },
    {
      q: 'What is the degree of $6x^2 - x^5 + 3x - 8$?',
      choices: ['$2$', '$5$', '$6$', '$4$'],
      answer: 1,
      solution: 'The degree is the largest exponent on the variable, no matter where that term is written. The term $-x^5$ has the highest exponent, so the degree is $5$. (Careful: $6$ is just a coefficient, and the first term listed is not automatically the leading term.)',
    },
    {
      q: 'What is the leading coefficient of $4 + 9x - 5x^2$?',
      choices: ['$9$', '$4$', '$5$', '$-5$'],
      answer: 3,
      solution: 'In standard form this is $-5x^2 + 9x + 4$, so the leading term is $-5x^2$ and the leading coefficient is $-5$. The sign comes along — the leading coefficient is $-5$, not $5$.',
    },
    {
      q: 'Add: $(2x^2 + 3x - 5) + (x^2 - 7x + 9)$.',
      choices: ['$3x^2 - 4x + 4$', '$3x^2 + 4x + 4$', '$3x^2 - 4x - 4$', '$2x^2 - 4x + 4$'],
      answer: 0,
      solution: 'Combine like terms degree by degree: $2x^2 + x^2 = 3x^2$, then $3x - 7x = -4x$, then $-5 + 9 = 4$. The sum is $3x^2 - 4x + 4$.',
    },
    {
      q: 'Subtract: $(5x^2 - 2x + 3) - (2x^2 + 4x - 1)$.',
      choices: ['$3x^2 + 2x + 2$', '$3x^2 - 6x + 4$', '$3x^2 - 6x + 2$', '$7x^2 + 2x + 2$'],
      answer: 1,
      solution: 'Distribute the minus to all three terms: $5x^2 - 2x + 3 - 2x^2 - 4x + 1$. Now combine: $5x^2 - 2x^2 = 3x^2$, $-2x - 4x = -6x$, and $3 + 1 = 4$. Notice the $-1$ became $+1$ — if you get $+2$ at the end, the minus sign never reached the last term.',
    },
    {
      q: 'Evaluate $p(x) = x^3 - 4x^2 + 2x + 7$ at $x = 3$.',
      choices: ['$28$', '$76$', '$4$', '$-8$'],
      answer: 2,
      solution: 'Substitute carefully: $p(3) = 27 - 4(9) + 2(3) + 7 = 27 - 36 + 6 + 7 = 4$. The most tempting slip is reading $4x^2$ as $4x$, which would give $27 - 12 + 6 + 7 = 28$ — square first, then multiply by $4$.',
    },
    {
      q: 'If $p(x) = 2x^2 - 5x + 3$, what is $p(-1)$?',
      choices: ['$0$', '$6$', '$-4$', '$10$'],
      answer: 3,
      solution: 'Use parentheses: $p(-1) = 2(-1)^2 - 5(-1) + 3$. Since $(-1)^2 = 1$, the first term is $2$. And $-5 \\times (-1) = +5$ — two negatives make a positive. So $p(-1) = 2 + 5 + 3 = 10$.',
    },
    {
      q: 'Let $f(x) = 4x^3 + x^2 - 6$ and $g(x) = -4x^3 + 5x + 1$. What is the degree of $f(x) + g(x)$?',
      choices: ['$3$', '$2$', '$6$', '$0$'],
      answer: 1,
      solution: 'Watch the leading terms: $4x^3 + (-4x^3) = 0$, so the cubes vanish completely! The sum is $x^2 + 5x - 5$, which has degree $2$. Two degree-$3$ polynomials can add to something of smaller degree when their leading terms cancel.',
    },
    {
      q: 'Two polynomials satisfy $p(x) + q(x) = 3x^2 + 2x - 1$. If $p(x) = x^2 - 4x + 5$, what is $q(x)$?',
      choices: ['$2x^2 + 6x - 6$', '$2x^2 - 6x + 6$', '$4x^2 - 2x + 4$', '$2x^2 + 6x + 4$'],
      answer: 0,
      solution: 'Subtract to isolate: $q(x) = (3x^2 + 2x - 1) - (x^2 - 4x + 5)$. Distribute the minus to every term: $3x^2 + 2x - 1 - x^2 + 4x - 5 = 2x^2 + 6x - 6$. Check by adding: $(x^2 - 4x + 5) + (2x^2 + 6x - 6) = 3x^2 + 2x - 1$. ✓',
    },
  ],
}

const s182 = {
  id: '18.2',
  title: 'Multiplication',
  learn: {
    concepts: [
      {
        heading: 'Monomial times polynomial: distribute',
        body: 'To multiply a single term into a polynomial, distribute it to every term: multiply the coefficients, and ADD the exponents, since $x^a \\cdot x^b = x^{a+b}$. So $3x^2 \\cdot 5x^4 = 15x^6$ — the exponents add to $6$, they do not multiply to $8$.',
      },
      {
        heading: 'Every term meets every term',
        body: 'To multiply two polynomials, each term of the first must multiply each term of the second — no exceptions. A binomial times a binomial makes $2 \\times 2 = 4$ little products; a binomial times a trinomial makes $2 \\times 3 = 6$. After collecting like terms the answer often shrinks, but you must write down every product first, or middle terms go missing.',
      },
      {
        heading: 'Degrees add, and the edges are easy',
        body: 'When you multiply polynomials, the degree of the product is the SUM of the degrees, because the two leading terms multiply and nothing can cancel them. Even better, the edges of a product come free: the leading coefficient of the product is the product of the leading coefficients, and the constant term of the product is the product of the constant terms.',
      },
      {
        heading: 'Grab one coefficient without expanding everything',
        body: 'Need just the $x^2$ coefficient of a big product? Only pairs of terms whose degrees ADD to $2$ can contribute — multiply those pairs, add the results, and ignore the rest. And here is a lovely shortcut: plugging in $x = 1$ turns every power of $x$ into $1$, so $p(1)$ is exactly the sum of all the coefficients of $p$.',
      },
    ],
    examples: [
      {
        problem: 'Multiply: $3x^2(2x^2 - 5x + 4)$.',
        steps: [
          'Distribute $3x^2$ to all three terms.',
          'Term by term: $3x^2 \\cdot 2x^2 = 6x^4$, then $3x^2 \\cdot (-5x) = -15x^3$, then $3x^2 \\cdot 4 = 12x^2$. Coefficients multiply, exponents add.',
        ],
        answer: '$3x^2(2x^2 - 5x + 4) = 6x^4 - 15x^3 + 12x^2$',
      },
      {
        problem: 'Multiply: $(2x + 3)(x - 5)$.',
        steps: [
          'Each of the two terms in $2x + 3$ multiplies each of the two terms in $x - 5$: four products in all.',
          '$2x \\cdot x = 2x^2$, $2x \\cdot (-5) = -10x$, $3 \\cdot x = 3x$, $3 \\cdot (-5) = -15$.',
          'Combine the like terms in the middle: $-10x + 3x = -7x$.',
        ],
        answer: '$(2x + 3)(x - 5) = 2x^2 - 7x - 15$',
      },
      {
        problem: 'Without expanding fully, find the coefficient of $x^2$ in $(2x + 3)(x^2 - 4x + 5)$.',
        steps: [
          'Only pairs whose degrees add to $2$ matter. From the first factor, $2x$ (degree $1$) needs a degree-$1$ partner: $2x \\cdot (-4x) = -8x^2$.',
          'And $3$ (degree $0$) needs a degree-$2$ partner: $3 \\cdot x^2 = 3x^2$.',
          'Add the contributions: $-8 + 3 = -5$. No other pair can produce $x^2$, so we are done — no full expansion needed.',
        ],
        answer: 'The coefficient of $x^2$ is $-5$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $x^3 \\cdot x^5$?',
      choices: ['$x^{15}$', '$x^2$', '$2x^8$', '$x^8$'],
      answer: 3,
      solution: 'When multiplying powers of the same variable, the exponents ADD: $x^3 \\cdot x^5 = x^{3+5} = x^8$. Think of it as three $x$s times five $x$s — eight $x$s in all. (Multiplying the exponents to get $x^{15}$ is the classic trap.)',
    },
    {
      q: 'Multiply: $4x(x^2 - 3)$.',
      choices: ['$4x^3 - 3$', '$4x^3 - 12x$', '$4x^2 - 12x$', '$4x^3 + 12x$'],
      answer: 1,
      solution: 'Distribute $4x$ to BOTH terms: $4x \\cdot x^2 = 4x^3$ and $4x \\cdot (-3) = -12x$. The answer is $4x^3 - 12x$. If you got $4x^3 - 3$, the $4x$ never reached the second term.',
    },
    {
      q: 'Multiply: $(x + 2)(x + 5)$.',
      choices: ['$x^2 + 7x + 10$', '$x^2 + 10x + 7$', '$x^2 + 10$', '$x^2 + 7x + 7$'],
      answer: 0,
      solution: 'Four products: $x \\cdot x = x^2$, $x \\cdot 5 = 5x$, $2 \\cdot x = 2x$, $2 \\cdot 5 = 10$. The middle terms combine: $5x + 2x = 7x$. So the product is $x^2 + 7x + 10$ — the $7$ comes from ADDING $2$ and $5$, the $10$ from multiplying them.',
    },
    {
      q: 'A polynomial of degree $3$ is multiplied by a polynomial of degree $4$. What is the degree of the product?',
      choices: ['$12$', '$4$', '$7$', '$1$'],
      answer: 2,
      solution: 'Degrees ADD under multiplication: the leading terms multiply, so their exponents add to give $3 + 4 = 7$. Nothing can cancel that leading product, so the degree is exactly $7$. (Multiplying $3 \\times 4 = 12$ is the trap — exponents add when terms multiply.)',
    },
    {
      q: 'Multiply: $(x - 4)(x + 4)$.',
      choices: ['$x^2 + 16$', '$x^2 - 8x + 16$', '$x^2 - 8x - 16$', '$x^2 - 16$'],
      answer: 3,
      solution: 'Four products: $x^2 + 4x - 4x - 16$. The middle terms are perfect opposites, so they cancel, leaving $x^2 - 16$. A sum times a difference always wipes out the middle — but the constant is $-16$, not $+16$, since $(-4) \\times 4 = -16$.',
    },
    {
      q: 'Multiply: $(3x - 2)(2x + 5)$.',
      choices: ['$6x^2 + 11x - 10$', '$6x^2 - 11x - 10$', '$6x^2 + 19x - 10$', '$6x^2 + 11x + 10$'],
      answer: 0,
      solution: 'The four products are $6x^2$, $15x$, $-4x$, and $-10$. Combining the middle: $15x - 4x = 11x$, so the answer is $6x^2 + 11x - 10$. The middle terms have opposite signs here, so they partly cancel — adding them as $15x + 4x = 19x$ misses the minus on the $2$.',
    },
    {
      q: 'What is the constant term of the product $(2x^2 - 3x + 4)(x^2 + 5x - 6)$?',
      choices: ['$24$', '$-24$', '$-2$', '$-6$'],
      answer: 1,
      solution: 'The only way to build a constant is constant times constant — every other pair carries at least one $x$. So the constant term is $4 \\times (-6) = -24$. No expansion needed!',
    },
    {
      q: 'Multiply: $(x + 3)(x^2 - 2x + 4)$.',
      choices: ['$x^3 + 12$', '$x^3 - x^2 + 2x + 12$', '$x^3 + x^2 - 2x + 12$', '$x^3 + x^2 + 2x - 12$'],
      answer: 2,
      solution: 'Six products: $x$ gives $x^3 - 2x^2 + 4x$, and $3$ gives $3x^2 - 6x + 12$. Combine like terms: $-2x^2 + 3x^2 = x^2$ and $4x - 6x = -2x$. The product is $x^3 + x^2 - 2x + 12$. All six little products must be written down before anything combines.',
    },
    {
      q: 'What is the coefficient of $x^2$ in the product $(3x - 1)(2x^2 + 5x - 4)$?',
      choices: ['$15$', '$6$', '$13$', '$17$'],
      answer: 2,
      solution: 'Hunt for degree pairs that add to $2$: the $3x$ needs a degree-$1$ partner, giving $3x \\cdot 5x = 15x^2$; the $-1$ needs a degree-$2$ partner, giving $-1 \\cdot 2x^2 = -2x^2$. Total: $15 - 2 = 13$. Forgetting the $-1$ contribution gives $15$, and dropping its sign gives $17$.',
    },
    {
      q: 'What is the sum of all the coefficients of the expansion of $(2x - 1)(3x + 4)(x - 2)$?',
      choices: ['$-7$', '$7$', '$8$', '$6$'],
      answer: 0,
      solution: 'Plug in $x = 1$: every power of $x$ becomes $1$, so the value at $1$ IS the sum of the coefficients. Here $(2 - 1)(3 + 4)(1 - 2) = (1)(7)(-1) = -7$. Three factors evaluated in seconds — no expansion required.',
    },
  ],
}

const challenge = [
  {
    q: 'What is the degree of $(5x^4 - 2x + 1) + (3x^2 - 5x^4 + x)$?',
    choices: ['$4$', '$8$', '$2$', '$3$'],
    answer: 2,
    solution: 'Check the leading terms first: $5x^4 + (-5x^4) = 0$, so the degree-$4$ terms vanish. What remains is $3x^2 - x + 1$, which has degree $2$. Degrees never add for sums — and cancellation can even shrink them.',
  },
  {
    q: 'What is the coefficient of $x^3$ in $(x^2 + 2x + 3)(x^2 - x + 4)$?',
    choices: ['$1$', '$-1$', '$2$', '$3$'],
    answer: 0,
    solution: 'Only degree pairs adding to $3$ contribute: $x^2 \\cdot (-x) = -x^3$ and $2x \\cdot x^2 = 2x^3$. Total: $-1 + 2 = 1$. Both partial products matter — using only one of them gives $-1$ or $2$.',
  },
  {
    q: 'Polynomials $p(x)$ and $q(x)$ each have degree $3$. Which of these could NOT be the degree of $p(x) + q(x)$?',
    choices: ['$0$', '$2$', '$3$', '$6$'],
    answer: 3,
    solution: 'Adding cannot create a higher power than either polynomial already has, so degree $6$ is impossible — degrees add for PRODUCTS, not sums. But cancellation can shrink the sum: $(x^3 + x^2) + (-x^3 + 1)$ has degree $2$, and $(x^3 + 5) + (-x^3 + 1)$ has degree $0$. So $0$, $2$, and $3$ are all possible.',
  },
  {
    q: 'Expand $(x - 3)^2$.',
    choices: ['$x^2 + 9$', '$x^2 - 6x + 9$', '$x^2 - 9$', '$x^2 - 3x + 9$'],
    answer: 1,
    solution: 'Squaring means multiplying by itself: $(x - 3)(x - 3) = x^2 - 3x - 3x + 9 = x^2 - 6x + 9$. The middle term appears TWICE, once from each factor — the answer $x^2 + 9$ forgets both copies, and $x^2 - 3x + 9$ forgets one.',
  },
  {
    q: 'What is the sum of the coefficients of the expansion of $(x^2 - 3x + 1)^2$?',
    choices: ['$1$', '$-1$', '$11$', '$25$'],
    answer: 0,
    solution: 'The sum of the coefficients of any polynomial is its value at $x = 1$. Here that is $(1 - 3 + 1)^2 = (-1)^2 = 1$. Do not forget the final squaring — stopping at $-1$ misses the last step.',
  },
  {
    q: 'If $p(x) = x^{10} - x^5 + 1$, what is $p(-1)$?',
    choices: ['$1$', '$-1$', '$3$', '$0$'],
    answer: 2,
    solution: 'Even powers of $-1$ are $1$ and odd powers are $-1$: so $(-1)^{10} = 1$ and $(-1)^5 = -1$. Then $p(-1) = 1 - (-1) + 1 = 1 + 1 + 1 = 3$. Subtracting a negative adds!',
  },
  {
    q: 'What is the leading term of the product $(2x^3 - x + 4)(-3x^2 + x - 1)$?',
    choices: ['$-6x^6$', '$6x^5$', '$-x^5$', '$-6x^5$'],
    answer: 3,
    solution: 'The leading term of a product is the product of the leading terms: $2x^3 \\cdot (-3x^2) = -6x^5$. Coefficients multiply to $-6$, and exponents ADD to $5$ — they do not multiply to $6$.',
  },
  {
    q: 'Simplify: $(4x^3 - 2x^2 + x - 7) - (4x^3 + 3x^2 - x + 2)$.',
    choices: ['$x^2 - 5$', '$-5x^2 + 2x - 9$', '$8x^3 + x^2 - 5$', '$-5x^2 - 2x - 9$'],
    answer: 1,
    solution: 'Distribute the minus to all four terms of the second polynomial: $4x^3 - 2x^2 + x - 7 - 4x^3 - 3x^2 + x - 2$. The cubes cancel! Then $-2x^2 - 3x^2 = -5x^2$, $x + x = 2x$, and $-7 - 2 = -9$: the answer is $-5x^2 + 2x - 9$, a degree-$2$ result from two degree-$3$ polynomials.',
  },
  {
    q: 'What is the constant term of the expansion of $(x - 2)^3$?',
    choices: ['$-8$', '$8$', '$-6$', '$-2$'],
    answer: 0,
    solution: 'The constant term of a product comes from multiplying the constant terms of the factors: $(-2) \\times (-2) \\times (-2) = -8$. An odd number of negative factors keeps the result negative.',
  },
  {
    q: 'What is the coefficient of $x$ in the expansion of $(2x + 5)(3x - 1)(x + 2)$?',
    choices: ['$26$', '$-5$', '$21$', '$30$'],
    answer: 2,
    solution: 'To make a plain $x$ term, pick the $x$ from exactly one factor and the constants from the other two: $2x \\cdot (-1) \\cdot 2 = -4x$, then $5 \\cdot 3x \\cdot 2 = 30x$, then $5 \\cdot (-1) \\cdot x = -5x$. Total: $-4 + 30 - 5 = 21$. Each of the three factors takes one turn supplying the $x$.',
  },
  {
    q: 'What is the degree of $(x^2 + 1)^3$?',
    choices: ['$8$', '$6$', '$5$', '$3$'],
    answer: 1,
    solution: 'Cubing means multiplying three copies, and degrees add across a product: $2 + 2 + 2 = 6$. The leading term is $x^2 \\cdot x^2 \\cdot x^2 = x^6$, and nothing can cancel it. (Computing $2^3 = 8$ confuses exponent rules — the degrees add.)',
  },
  {
    q: 'Numbers $a$ and $b$ satisfy $(x + a)(x + b) = x^2 + 9x + 20$ for all $x$. What is $a + b$?',
    choices: ['$20$', '$11$', '$5$', '$9$'],
    answer: 3,
    solution: 'Expand the left side: $(x + a)(x + b) = x^2 + (a + b)x + ab$. Matching coefficients with $x^2 + 9x + 20$ gives $a + b = 9$ and $ab = 20$. The question only asks for the sum, and it is sitting right there in the $x$ coefficient: $9$. (Indeed $a$ and $b$ are $4$ and $5$.)',
  },
]

const worksheet = [
  {
    q: 'Write $3x - 7x^4 + 2 + x^2$ in standard form, and state its degree.',
    answer: '$-7x^4 + x^2 + 3x + 2$; degree $4$',
    solution: 'Order the terms from highest exponent to lowest, keeping each sign with its term: $-7x^4 + x^2 + 3x + 2$. The leading term is $-7x^4$, so the degree is $4$.',
  },
  {
    q: 'Add: $(6x^2 - x + 3) + (2x^2 + 5x - 8)$.',
    answer: '$8x^2 + 4x - 5$',
    solution: 'Combine like terms: $6x^2 + 2x^2 = 8x^2$, then $-x + 5x = 4x$, then $3 - 8 = -5$.',
  },
  {
    q: 'Subtract: $(x^3 + 4x - 2) - (3x^3 - x^2 + 4x + 5)$.',
    answer: '$-2x^3 + x^2 - 7$',
    solution: 'Distribute the minus to every term: $x^3 + 4x - 2 - 3x^3 + x^2 - 4x - 5$. Then $x^3 - 3x^3 = -2x^3$, the lonely $+x^2$ stays, $4x - 4x = 0$, and $-2 - 5 = -7$.',
  },
  {
    q: 'Evaluate $p(x) = 3x^2 - 2x + 5$ at $x = -3$.',
    answer: '$38$',
    solution: 'Substitute with parentheses: $p(-3) = 3(-3)^2 - 2(-3) + 5 = 3(9) + 6 + 5 = 27 + 6 + 5 = 38$. Both negative signs turn friendly: $(-3)^2$ is positive, and $-2 \\times (-3) = +6$.',
  },
  {
    q: 'Multiply: $-2x^3(4x^2 - x + 6)$.',
    answer: '$-8x^5 + 2x^4 - 12x^3$',
    solution: 'Distribute to all three terms, multiplying coefficients and adding exponents: $-2x^3 \\cdot 4x^2 = -8x^5$, then $-2x^3 \\cdot (-x) = +2x^4$, then $-2x^3 \\cdot 6 = -12x^3$.',
  },
  {
    q: 'Multiply: $(x + 6)(x - 9)$.',
    answer: '$x^2 - 3x - 54$',
    solution: 'Four products: $x^2 - 9x + 6x - 54$. The middle combines to $-3x$, and the constant is $6 \\times (-9) = -54$.',
  },
  {
    q: 'Multiply: $(2x - 3)(x^2 + 4x - 1)$.',
    answer: '$2x^3 + 5x^2 - 14x + 3$',
    solution: 'Six products: $2x$ gives $2x^3 + 8x^2 - 2x$, and $-3$ gives $-3x^2 - 12x + 3$. Combine like terms: $8x^2 - 3x^2 = 5x^2$ and $-2x - 12x = -14x$.',
  },
  {
    q: 'Without expanding fully, find the coefficient of $x^3$ in $(x^2 - 2x + 3)(2x^2 + x - 5)$.',
    answer: '$-3$',
    solution: 'Only degree pairs adding to $3$ contribute: $x^2 \\cdot x = x^3$ gives $+1$, and $-2x \\cdot 2x^2 = -4x^3$ gives $-4$. Total: $1 - 4 = -3$.',
  },
  {
    q: 'Let $p(x) = 5x^3 - 2x^2 + x - 4$ and $q(x) = -5x^3 + 2x^2 + 3x + 1$. What is the degree of $p(x) + q(x)$?',
    answer: '$1$',
    solution: 'Add term by term: the $5x^3$ and $-5x^3$ cancel, AND the $-2x^2$ and $2x^2$ cancel! What survives is $x + 3x = 4x$ and $-4 + 1 = -3$, so the sum is $4x - 3$: degree $1$. Two degree-$3$ polynomials collapsed all the way to a line.',
  },
  {
    q: 'What is the sum of all the coefficients of the expansion of $(2x - 1)^4$?',
    answer: '$1$',
    solution: 'Plug in $x = 1$: the value there is the sum of the coefficients. $(2 \\cdot 1 - 1)^4 = 1^4 = 1$. A fourth-power expansion answered in one line — that is the power of the $x = 1$ trick.',
  },
]

export default {
  id: 'intro-algebra-ch18',
  book: 'intro-algebra',
  number: 18,
  title: 'Polynomials',
  intro:
    'You have been working with expressions like $3x + 5$ for a while — polynomials are the natural next step: sums of powers of $x$, each with its own coefficient. In this chapter you will learn their vocabulary, then add, subtract, and multiply them like a pro. Best of all, you will pick up sneaky shortcuts for grabbing a single coefficient of a huge product without doing all the work.',
  sections: [s181, s182],
  challenge,
  worksheet,
}
