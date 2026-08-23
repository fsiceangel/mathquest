// Introduction to Algebra — Chapter 2: x Marks the Spot
// All problems, explanations, and examples are original MathQuest content.

const s21 = {
  id: '2.1',
  title: 'Expressions',
  learn: {
    concepts: [
      {
        heading: 'A variable is a number in disguise',
        body: 'A variable like $x$ is just a number whose value we do not know yet — or a number we want to talk about in general. Everything you know about numbers works on variables too, because a variable IS a number. It just has not told us which one.',
      },
      {
        heading: 'Evaluating means substituting',
        body: 'An expression like $3x + 4$ becomes an ordinary number the moment we choose a value for $x$. To evaluate at $x = 5$, replace every $x$ with $5$: we get $3 \\cdot 5 + 4 = 19$. Pro tip: wrap the value in parentheses when you substitute, especially negatives — $x^2$ at $x = -3$ is $(-3)^2 = 9$, not $-3^2$.',
      },
      {
        heading: 'Words become symbols',
        body: 'Phrases translate directly into expressions: "twice a number" is $2n$, "$5$ more than $x$" is $x + 5$, and "$5$ less than $x$" is $x - 5$ (careful — not $5 - x$!). "The product of $3$ and the sum of $x$ and $7$" needs parentheses: $3(x + 7)$.',
      },
      {
        heading: 'Equivalent means equal for EVERY value',
        body: 'Two expressions are equivalent when they give the same value no matter what number the variable is. $x + x$ and $2x$ are equivalent. But $2(x + 3)$ and $2x + 3$ are not — try $x = 1$: the first gives $8$, the second gives $5$. One counterexample is enough to sink a claim of equivalence!',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $5x - 2$ when $x = 4$.',
        steps: [
          'Replace $x$ with $4$: the expression becomes $5 \\cdot 4 - 2$.',
          'Multiply first (order of operations!): $5 \\cdot 4 = 20$.',
          'Then subtract: $20 - 2 = 18$.',
        ],
        answer: '$5x - 2 = 18$ when $x = 4$',
      },
      {
        problem: 'Evaluate $x^2 + 2x$ when $x = -3$.',
        steps: [
          'Substitute with parentheses: $(-3)^2 + 2(-3)$.',
          'The square comes first: $(-3)^2 = 9$, since a negative times a negative is positive.',
          'The other term is $2 \\cdot (-3) = -6$.',
          'Add: $9 + (-6) = 3$.',
        ],
        answer: '$x^2 + 2x = 3$ when $x = -3$',
      },
      {
        problem: 'Write an expression for "$7$ less than three times a number $n$."',
        steps: [
          '"Three times a number $n$" is $3n$.',
          '"$7$ less than" something means we take $7$ away FROM it: $3n - 7$.',
          'Watch the order: $7 - 3n$ would be "$3n$ less than $7$" — a different expression. Check with $n = 10$: three times $10$ is $30$, and $7$ less than $30$ is $23 = 3(10) - 7$. ✓',
        ],
        answer: '$3n - 7$',
      },
    ],
  },
  problems: [
    {
      q: 'If $x = 5$, what is the value of $3x + 4$?',
      choices: ['$12$', '$27$', '$19$', '$39$'],
      answer: 2,
      solution: 'Substitute $5$ for $x$: $3 \\cdot 5 + 4 = 15 + 4 = 19$. Remember that $3x$ means $3$ TIMES $x$, so we multiply before adding.',
    },
    {
      q: 'Which expression means "$5$ less than twice a number $n$"?',
      choices: ['$2n - 5$', '$5 - 2n$', '$2(n - 5)$', '$\\frac{n}{2} - 5$'],
      answer: 0,
      solution: '"Twice a number" is $2n$, and "$5$ less than" it means we subtract $5$ from it: $2n - 5$. The order matters — $5 - 2n$ says something different, and $2(n - 5)$ doubles AFTER subtracting.',
    },
    {
      q: 'Evaluate $x^2$ when $x = -3$.',
      choices: ['$-9$', '$9$', '$-6$', '$6$'],
      answer: 1,
      solution: 'Substitute with parentheses: $(-3)^2 = (-3) \\times (-3) = 9$. Two negative factors give a positive product, so squaring a negative number always gives a positive answer.',
    },
    {
      q: 'Evaluate $7 - x$ when $x = 10$.',
      choices: ['$3$', '$17$', '$-17$', '$-3$'],
      answer: 3,
      solution: 'Substitute: $7 - 10$. Since $10$ is bigger than $7$, the answer is negative: $7 - 10 = -3$.',
    },
    {
      q: 'Evaluate $4x + 1$ when $x = \\frac{1}{2}$.',
      choices: ['$3$', '$\\frac{9}{2}$', '$2$', '$5$'],
      answer: 0,
      solution: '$4x$ means $4$ times $x$: $4 \\cdot \\frac{1}{2} = 2$. Then $2 + 1 = 3$. (If you got $\\frac{9}{2}$, you may have added $4 + \\frac{1}{2}$ instead of multiplying.)',
    },
    {
      q: 'Evaluate $2x^2$ when $x = -2$.',
      choices: ['$-8$', '$16$', '$8$', '$-16$'],
      answer: 2,
      solution: 'Order of operations: the exponent applies only to $x$, so first $(-2)^2 = 4$, then $2 \\cdot 4 = 8$. Note that $2x^2$ is NOT $(2x)^2$ — that would be $16$.',
    },
    {
      q: 'Which expression means "the product of $3$ and the sum of $x$ and $7$"?',
      choices: ['$3x + 7$', '$3(x + 7)$', '$7(x + 3)$', '$3 + 7x$'],
      answer: 1,
      solution: 'Build from the inside out: "the sum of $x$ and $7$" is $x + 7$, and the product of $3$ with that whole sum needs parentheses: $3(x + 7)$. Without them, $3x + 7$ multiplies only the $x$ by $3$.',
    },
    {
      q: 'Evaluate $\\frac{x + 9}{2}$ when $x = -3$.',
      choices: ['$\\frac{3}{2}$', '$6$', '$-3$', '$3$'],
      answer: 3,
      solution: 'The fraction bar groups the whole top: first $-3 + 9 = 6$, then $\\frac{6}{2} = 3$. (Getting $\\frac{3}{2}$ usually means only the $9$ got divided — the fraction bar covers everything above it.)',
    },
    {
      q: 'Which pair of expressions is equivalent — equal for EVERY value of $x$?',
      choices: ['$3x + 2$ and $5x$', '$x^2$ and $2x$', '$2(x + 1)$ and $2x + 1$', '$x + x + x$ and $3x$'],
      answer: 3,
      solution: 'Adding three copies of $x$ is exactly what $3x$ means, so $x + x + x = 3x$ for every $x$. Each other pair fails a test value: at $x = 1$, $3x + 2 = 5$ but $5x = 5$... they match there, but at $x = 2$ they give $8$ and $10$. One mismatch is enough — equivalence must hold for ALL values.',
    },
    {
      q: 'Evaluate $x^2 - 3x$ when $x = -2$.',
      choices: ['$-2$', '$10$', '$2$', '$-10$'],
      answer: 1,
      solution: 'Substitute carefully: $(-2)^2 - 3(-2) = 4 - (-6) = 4 + 6 = 10$. Both signs flip in our favor: the square is positive, and subtracting a negative adds.',
    },
  ],
}

const s22 = {
  id: '2.2',
  title: 'Arithmetic with Expressions',
  learn: {
    concepts: [
      {
        heading: 'Like terms have the same variable part',
        body: '$3x$ and $5x$ are like terms — both are "so many copies of $x$." But $3x$ and $5$ are not alike, and neither are $3x$ and $3x^2$. Only like terms can be combined into a single term.',
      },
      {
        heading: 'Combining like terms is the distributive property',
        body: 'Why does $3x + 5x = 8x$? Because $3x + 5x = (3 + 5)x = 8x$ — three copies of $x$ plus five copies of $x$ is eight copies of $x$. The distributive property, run backwards, is doing the work.',
      },
      {
        heading: 'Watch the invisible coefficients',
        body: 'A plain $y$ means $1y$, and $-y$ means $-1y$. So $7y - y = 7y - 1y = 6y$. Keeping track of coefficients — including the invisible $1$s — is the bookkeeping that makes simplifying reliable.',
      },
      {
        heading: 'Constants team up with constants',
        body: 'In $2x + 3 + 4x - 1$, sort the terms into teams: the $x$-terms give $2x + 4x = 6x$, and the plain numbers give $3 - 1 = 2$. Result: $6x + 2$. You cannot merge $6x$ with $2$ — they are different kinds of terms, so the expression is done.',
      },
    ],
    examples: [
      {
        problem: 'Simplify $4x + 9x$.',
        steps: [
          'Both terms are copies of $x$, so they are like terms.',
          'Add the coefficients: $4 + 9 = 13$.',
          'Check with $x = 2$: the original gives $8 + 18 = 26$, and $13x$ gives $26$. ✓',
        ],
        answer: '$4x + 9x = 13x$',
      },
      {
        problem: 'Simplify $5x + 7 + 2x - 3$.',
        steps: [
          'Group the like terms, keeping each sign glued to its term: $(5x + 2x) + (7 - 3)$.',
          'The $x$-team: $5x + 2x = 7x$. The constant team: $7 - 3 = 4$.',
          'The answer $7x + 4$ cannot shrink further — $7x$ and $4$ are unlike terms.',
        ],
        answer: '$5x + 7 + 2x - 3 = 7x + 4$',
      },
      {
        problem: 'Simplify $6 \\cdot 4x$.',
        steps: [
          '$6 \\cdot 4x$ means $6 \\cdot 4 \\cdot x$ — three factors in a row.',
          'The associative property lets us multiply the numbers first: $(6 \\cdot 4) \\cdot x = 24x$.',
        ],
        answer: '$6 \\cdot 4x = 24x$',
      },
    ],
  },
  problems: [
    {
      q: 'Simplify $3x + 5x$.',
      choices: ['$15x$', '$8x$', '$8x^2$', '$8$'],
      answer: 1,
      solution: 'Three copies of $x$ plus five copies of $x$ makes eight copies: $3x + 5x = (3 + 5)x = 8x$. We add the coefficients — the variable part stays exactly as it is.',
    },
    {
      q: 'Simplify $7y - y$.',
      choices: ['$7$', '$6$', '$8y$', '$6y$'],
      answer: 3,
      solution: 'The lone $y$ is secretly $1y$. So $7y - y = 7y - 1y = 6y$. (Subtracting $y$ takes away one copy, not zero copies!)',
    },
    {
      q: 'Simplify $2x + 3 + 4x - 1$.',
      choices: ['$6x + 2$', '$8x$', '$6x + 4$', '$9x - 1$'],
      answer: 0,
      solution: 'Sort into teams: the $x$-terms give $2x + 4x = 6x$, and the constants give $3 - 1 = 2$. So the answer is $6x + 2$. The terms $6x$ and $2$ are unlike, so they stay separate.',
    },
    {
      q: 'Simplify $3 \\cdot 5x$.',
      choices: ['$8x$', '$35x$', '$15x$', '$15x^2$'],
      answer: 2,
      solution: '$3 \\cdot 5x$ is three factors: $3 \\cdot 5 \\cdot x$. Multiply the numbers: $15x$. Only one factor of $x$ appears, so no $x^2$ shows up.',
    },
    {
      q: 'Simplify $3x + 2 + 4x$.',
      choices: ['$9x$', '$7x$', '$3x + 6$', '$7x + 2$'],
      answer: 3,
      solution: 'Combine the like terms $3x + 4x = 7x$; the constant $2$ has no partner, so it rides along: $7x + 2$. The $2$ cannot join the $x$-team — $7x + 2$ and $9x$ agree at $x = 1$ (both give $9$), but at $x = 2$ they give $16$ versus $18$, so they are not equivalent.',
    },
    {
      q: 'Simplify $5a + 3b - 2a + b$.',
      choices: ['$3a + 4b$', '$7ab$', '$3a + 2b$', '$7a + 4b$'],
      answer: 0,
      solution: 'Two different variables means two teams. The $a$-team: $5a - 2a = 3a$. The $b$-team: $3b + b = 4b$ (that last $b$ is $1b$). Answer: $3a + 4b$ — and $a$-terms never merge with $b$-terms.',
    },
    {
      q: 'Which pair are like terms?',
      choices: ['$3x$ and $3y$', '$2x$ and $2x^2$', '$4x$ and $-7x$', '$5$ and $5x$'],
      answer: 2,
      solution: 'Like terms need the SAME variable part. $4x$ and $-7x$ are both copies of $x$, so they combine: $4x + (-7x) = -3x$. Matching coefficients (like $3x$ and $3y$) is not what matters — matching variable parts is.',
    },
    {
      q: 'Simplify $10x - 3 - 4x - 2$.',
      choices: ['$6x - 1$', '$6x - 5$', '$14x - 5$', '$6x + 5$'],
      answer: 1,
      solution: 'Keep each minus sign glued to its term: $10x - 4x = 6x$ and $-3 - 2 = -5$. So the answer is $6x - 5$. Check at $x = 1$: original is $10 - 3 - 4 - 2 = 1$, and $6 - 5 = 1$. ✓',
    },
    {
      q: 'A rectangle has length $2x + 1$ and width $x$. Which expression gives its perimeter?',
      choices: ['$6x + 2$', '$3x + 1$', '$6x + 1$', '$4x + 1$'],
      answer: 0,
      solution: 'The perimeter is two lengths plus two widths: $(2x + 1) + (2x + 1) + x + x$. The $x$-team: $2x + 2x + x + x = 6x$. The constants: $1 + 1 = 2$. Perimeter: $6x + 2$. Check at $x = 1$: sides $3$ and $1$ give perimeter $8$, and $6 + 2 = 8$. ✓',
    },
    {
      q: 'Simplify $x + 2x + 3x + \\cdots + 10x$.',
      choices: ['$100x$', '$10x$', '$55x$', '$55x^2$'],
      answer: 2,
      solution: 'Every term is a copy of $x$, so add all the coefficients: $1 + 2 + 3 + \\cdots + 10$. Pair the ends: $1 + 10 = 11$, five pairs of $11$ make $55$. So the sum is $55x$ — an old friend from arithmetic, now wearing a variable.',
    },
  ],
}

const s23 = {
  id: '2.3',
  title: 'Distribution, Subtraction, and Factoring',
  learn: {
    concepts: [
      {
        heading: 'Distribution reaches every term',
        body: 'To expand $a(bx + c)$, the outside factor multiplies EACH term inside: $a(bx + c) = abx + ac$. So $3(2x + 5) = 6x + 15$. The most common slip is multiplying only the first term — the constant inside gets multiplied too!',
      },
      {
        heading: 'A minus sign distributes as $-1$',
        body: 'Subtracting a whole parenthesized expression means distributing $-1$: $5x - (2x - 3) = 5x + (-1)(2x) + (-1)(-3) = 5x - 2x + 3$. EVERY sign inside flips. Forgetting to flip the second term is the single most popular mistake in algebra — do not feed it.',
      },
      {
        heading: 'Factoring is distribution in reverse',
        body: 'When every term shares a common factor, you can pull it out front: $6x + 9 = 3(2x + 3)$, because $3$ divides both $6x$ and $9$. To check a factoring, just distribute — you should land exactly back on the original expression.',
      },
      {
        heading: 'Variables can be common factors too',
        body: 'In $4x^2 + 6x$, both terms share a $2$ AND an $x$, so pull out $2x$: $4x^2 + 6x = 2x(2x + 3)$. Factoring "completely" means the terms left inside share no factor bigger than $1$.',
      },
    ],
    examples: [
      {
        problem: 'Expand $4(3x + 2)$.',
        steps: [
          'The $4$ multiplies each term inside: $4 \\cdot 3x = 12x$ and $4 \\cdot 2 = 8$.',
          'So $4(3x + 2) = 12x + 8$.',
          'Check with $x = 1$: the original gives $4 \\cdot 5 = 20$, and $12 + 8 = 20$. ✓',
        ],
        answer: '$4(3x + 2) = 12x + 8$',
      },
      {
        problem: 'Simplify $9x - (4x - 7)$.',
        steps: [
          'Distribute the minus sign to BOTH terms inside: $-(4x - 7) = -4x + 7$.',
          'Now combine: $9x - 4x + 7 = 5x + 7$.',
          'Check with $x = 1$: the original gives $9 - (-3) = 12$, and $5 + 7 = 12$. ✓',
        ],
        answer: '$9x - (4x - 7) = 5x + 7$',
      },
      {
        problem: 'Factor $10x^2 + 15x$ completely.',
        steps: [
          'Both coefficients are divisible by $5$, and both terms contain an $x$ — so the greatest common factor is $5x$.',
          'Divide each term by $5x$: $10x^2 \\div 5x = 2x$ and $15x \\div 5x = 3$.',
          'So $10x^2 + 15x = 5x(2x + 3)$. Distribute to check: $5x \\cdot 2x = 10x^2$ and $5x \\cdot 3 = 15x$. ✓',
        ],
        answer: '$10x^2 + 15x = 5x(2x + 3)$',
      },
    ],
  },
  problems: [
    {
      q: 'Expand $3(x + 4)$.',
      choices: ['$3x + 12$', '$3x + 4$', '$x + 12$', '$3x + 7$'],
      answer: 0,
      solution: 'The $3$ multiplies BOTH terms: $3 \\cdot x = 3x$ and $3 \\cdot 4 = 12$, giving $3x + 12$. Leaving the $4$ untouched ($3x + 4$) is the classic slip — the constant gets multiplied too.',
    },
    {
      q: 'Expand $2(5x - 3)$.',
      choices: ['$10x - 3$', '$10x + 6$', '$10x - 6$', '$5x - 1$'],
      answer: 2,
      solution: 'Distribute the $2$ to each term, sign and all: $2 \\cdot 5x = 10x$ and $2 \\cdot (-3) = -6$. Result: $10x - 6$. Check at $x = 1$: $2(5 - 3) = 4$ and $10 - 6 = 4$. ✓',
    },
    {
      q: 'Simplify $5x - (2x - 3)$.',
      choices: ['$3x - 3$', '$7x - 3$', '$7x + 3$', '$3x + 3$'],
      answer: 3,
      solution: 'The minus sign flips BOTH terms inside: $5x - 2x + 3 = 3x + 3$. If you got $3x - 3$, the $-3$ inside never got flipped. Check at $x = 2$: $10 - (4 - 3) = 9$, and $3(2) + 3 = 9$. ✓',
    },
    {
      q: 'Factor $6x + 9$.',
      choices: ['$3(2x + 9)$', '$3(2x + 3)$', '$6(x + 3)$', '$2(3x + 4)$'],
      answer: 1,
      solution: 'Both $6x$ and $9$ are divisible by $3$: $6x \\div 3 = 2x$ and $9 \\div 3 = 3$, so $6x + 9 = 3(2x + 3)$. Always verify by distributing: $3 \\cdot 2x + 3 \\cdot 3 = 6x + 9$. ✓',
    },
    {
      q: 'Expand $-4(x - 2)$.',
      choices: ['$-4x - 8$', '$-4x + 2$', '$-4x + 8$', '$4x - 8$'],
      answer: 2,
      solution: 'Distribute $-4$ to each term: $-4 \\cdot x = -4x$ and $-4 \\cdot (-2) = +8$ — a negative times a negative is positive. So $-4(x - 2) = -4x + 8$. Check at $x = 1$: $-4(-1) = 4$ and $-4 + 8 = 4$. ✓',
    },
    {
      q: 'Simplify $7 + 2(3x + 1)$.',
      choices: ['$6x + 9$', '$27x + 9$', '$6x + 8$', '$6x + 2$'],
      answer: 0,
      solution: 'Multiplication before addition: distribute first, so $2(3x + 1) = 6x + 2$, then add the $7$: $6x + 9$. Adding $7 + 2$ first (getting $9(3x+1)$) breaks the order of operations.',
    },
    {
      q: 'Factor $4x^2 + 6x$ completely.',
      choices: ['$2x(2x + 6)$', '$2x(2x + 3)$', '$4x(x + 2)$', '$6x(x + 1)$'],
      answer: 1,
      solution: 'The greatest common factor of $4x^2$ and $6x$ is $2x$. Dividing: $4x^2 \\div 2x = 2x$ and $6x \\div 2x = 3$, so we get $2x(2x + 3)$. Distribute to confirm: $2x \\cdot 2x + 2x \\cdot 3 = 4x^2 + 6x$. ✓',
    },
    {
      q: 'Simplify $8x - (3x + 5) - 2$.',
      choices: ['$5x + 3$', '$11x - 7$', '$5x + 7$', '$5x - 7$'],
      answer: 3,
      solution: 'Flip both terms in the parentheses: $8x - 3x - 5 - 2$. The $x$-team gives $5x$; the constants give $-5 - 2 = -7$. Answer: $5x - 7$. Check at $x = 1$: $8 - 8 - 2 = -2$, and $5 - 7 = -2$. ✓',
    },
    {
      q: 'Simplify $3(2x + 1) - 2(x - 4)$.',
      choices: ['$4x - 5$', '$4x + 11$', '$4x + 7$', '$6x + 11$'],
      answer: 1,
      solution: 'Expand each piece: $3(2x + 1) = 6x + 3$, and $-2(x - 4) = -2x + 8$ (note $-2 \\cdot -4 = +8$). Combine: $6x - 2x = 4x$ and $3 + 8 = 11$, so $4x + 11$. Getting $4x - 5$ means the $-2$ never reached the $-4$.',
    },
    {
      q: 'Factor $12x^2 - 18x$ completely.',
      choices: ['$6x(2x - 3)$', '$6x(2x + 3)$', '$6(2x - 3)$', '$6x(x - 3)$'],
      answer: 0,
      solution: 'The greatest common factor is $6x$: $12x^2 \\div 6x = 2x$ and $-18x \\div 6x = -3$, so $12x^2 - 18x = 6x(2x - 3)$. Distribute to check: $6x \\cdot 2x - 6x \\cdot 3 = 12x^2 - 18x$. ✓ The sign inside must stay negative.',
    },
  ],
}

const s24 = {
  id: '2.4',
  title: 'Fractions',
  learn: {
    concepts: [
      {
        heading: 'Cancel common FACTORS, top and bottom',
        body: 'A fraction like $\\frac{6x}{9}$ simplifies just like $\\frac{6}{9}$ does: divide top and bottom by the common factor $3$ to get $\\frac{2x}{3}$. Variables cancel too: $\\frac{4xy}{2x} = 2y$ (as long as $x \\neq 0$, so we never divide by zero).',
      },
      {
        heading: 'Never cancel across a plus sign',
        body: 'Canceling only works on FACTORS of the whole top and whole bottom. In $\\frac{x + 6}{3}$, the $6$ and the $3$ are not factors of everything, so they cannot cancel. Test $x = 3$: $\\frac{3 + 6}{3} = 3$, but the illegal "simplification" $x + 2$ gives $5$. Different — so the move was never legal.',
      },
      {
        heading: 'Common denominators still rule',
        body: 'Adding fractions with variables uses the same recipe as ever: $\\frac{x}{2} + \\frac{x}{3} = \\frac{3x}{6} + \\frac{2x}{6} = \\frac{5x}{6}$. Once the denominators match, the numerators are like terms, and like terms combine.',
      },
      {
        heading: 'Multiply straight across, divide by flipping',
        body: 'Products go top-times-top over bottom-times-bottom: $\\frac{2x}{3} \\cdot \\frac{3}{4} = \\frac{6x}{12} = \\frac{x}{2}$. Division is multiplication by the reciprocal, exactly as with numbers: $\\frac{x}{3} \\div \\frac{1}{6} = \\frac{x}{3} \\cdot 6 = 2x$.',
      },
    ],
    examples: [
      {
        problem: 'Simplify $\\frac{8x}{12}$.',
        steps: [
          'The top is $8 \\cdot x$ and the bottom is $12$; the common factor of $8$ and $12$ is $4$.',
          'Divide top and bottom by $4$: $\\frac{8x}{12} = \\frac{2x}{3}$.',
          'Check with $x = 3$: original is $\\frac{24}{12} = 2$, simplified is $\\frac{6}{3} = 2$. ✓',
        ],
        answer: '$\\frac{8x}{12} = \\frac{2x}{3}$',
      },
      {
        problem: 'Compute $\\frac{x}{4} + \\frac{x}{6}$.',
        steps: [
          'The least common denominator of $4$ and $6$ is $12$.',
          'Rewrite each fraction: $\\frac{x}{4} = \\frac{3x}{12}$ and $\\frac{x}{6} = \\frac{2x}{12}$.',
          'Now the numerators are like terms: $\\frac{3x + 2x}{12} = \\frac{5x}{12}$.',
        ],
        answer: '$\\frac{x}{4} + \\frac{x}{6} = \\frac{5x}{12}$',
      },
      {
        problem: 'Simplify $\\frac{2x + 8}{2}$.',
        steps: [
          'The fraction bar divides the WHOLE top by $2$, so each term of the top gets divided.',
          'Distribution in reverse: $\\frac{2x + 8}{2} = \\frac{2x}{2} + \\frac{8}{2} = x + 4$.',
          'Check with $x = 1$: original is $\\frac{10}{2} = 5$, and $1 + 4 = 5$. ✓',
        ],
        answer: '$\\frac{2x + 8}{2} = x + 4$',
      },
    ],
  },
  problems: [
    {
      q: 'Simplify $\\frac{6x}{9}$.',
      choices: ['$\\frac{2}{3}$', '$\\frac{3x}{2}$', '$\\frac{x}{3}$', '$\\frac{2x}{3}$'],
      answer: 3,
      solution: 'Divide top and bottom by their common factor $3$: $\\frac{6x}{9} = \\frac{2x}{3}$. The $x$ stays on top — it never got divided by anything.',
    },
    {
      q: 'Simplify $\\frac{4xy}{2x}$ (assume $x \\neq 0$).',
      choices: ['$2xy$', '$2y$', '$2x$', '$\\frac{y}{2}$'],
      answer: 1,
      solution: 'Cancel the common factors: $\\frac{4}{2} = 2$, and the $x$ on top cancels the $x$ on the bottom. What remains is $2y$. (We need $x \\neq 0$ so the original fraction makes sense.)',
    },
    {
      q: 'Compute $\\frac{x}{2} + \\frac{x}{3}$.',
      choices: ['$\\frac{5x}{6}$', '$\\frac{2x}{5}$', '$\\frac{x}{5}$', '$\\frac{x^2}{6}$'],
      answer: 0,
      solution: 'Use the common denominator $6$: $\\frac{x}{2} = \\frac{3x}{6}$ and $\\frac{x}{3} = \\frac{2x}{6}$, so the sum is $\\frac{5x}{6}$. Adding tops and bottoms separately (getting $\\frac{2x}{5}$) is the trap — denominators must match FIRST.',
    },
    {
      q: 'Compute $\\frac{2x}{3} \\cdot \\frac{3}{4}$.',
      choices: ['$\\frac{x}{6}$', '$\\frac{6x}{7}$', '$\\frac{x}{2}$', '$2x$'],
      answer: 2,
      solution: 'Multiply straight across: $\\frac{2x \\cdot 3}{3 \\cdot 4} = \\frac{6x}{12} = \\frac{x}{2}$. Slicker: the $3$s cancel first, leaving $\\frac{2x}{4} = \\frac{x}{2}$.',
    },
    {
      q: 'Compute $\\frac{x}{3} \\div \\frac{1}{6}$.',
      choices: ['$\\frac{x}{18}$', '$2x$', '$\\frac{x}{2}$', '$\\frac{2}{x}$'],
      answer: 1,
      solution: 'Dividing means multiplying by the reciprocal: $\\frac{x}{3} \\cdot \\frac{6}{1} = \\frac{6x}{3} = 2x$. Multiplying by $\\frac{1}{6}$ instead (getting $\\frac{x}{18}$) is the move to avoid — flip the SECOND fraction.',
    },
    {
      q: 'Compute $\\frac{3x}{5} - \\frac{x}{5}$.',
      choices: ['$\\frac{2}{5}$', '$2x$', '$\\frac{4x}{5}$', '$\\frac{2x}{5}$'],
      answer: 3,
      solution: 'Same denominator already! The tops are like terms: $3x - x = 2x$, so the answer is $\\frac{2x}{5}$. The denominator stays put — we are counting fifths the whole time.',
    },
    {
      q: 'Rafael claims $\\frac{x + 6}{3}$ simplifies to $x + 2$. What settles the question?',
      choices: ['$x = 0$ shows they differ', 'They are equivalent for every $x$', '$x = 3$ shows they differ', 'They are unequal for every $x$'],
      answer: 2,
      solution: 'Test $x = 3$: the fraction gives $\\frac{9}{3} = 3$, but $x + 2$ gives $5$. Different values, so they are NOT equivalent — the $6$ and the $3$ are not factors of the whole top, so they cannot cancel. (At $x = 0$ both give $2$, so that test settles nothing — and it also shows "unequal for every $x$" is too strong.)',
    },
    {
      q: 'Simplify $\\frac{2x + 6}{2}$.',
      choices: ['$x + 3$', '$2x + 3$', '$x + 6$', '$4x + 12$'],
      answer: 0,
      solution: 'The bar divides EVERY term of the top by $2$: $\\frac{2x}{2} + \\frac{6}{2} = x + 3$. Dividing only the first term (getting $x + 6$) or only the second (getting $2x + 3$) shortchanges the fraction bar.',
    },
    {
      q: 'Compute $\\frac{x}{2} + \\frac{x}{3} + \\frac{x}{6}$.',
      choices: ['$x$', '$\\frac{3x}{11}$', '$\\frac{5x}{6}$', '$\\frac{x}{6}$'],
      answer: 0,
      solution: 'Common denominator $6$: $\\frac{3x}{6} + \\frac{2x}{6} + \\frac{x}{6} = \\frac{6x}{6} = x$. A tidy surprise — half of something plus a third plus a sixth is the whole thing! Check $x = 6$: $3 + 2 + 1 = 6$. ✓',
    },
    {
      q: 'Simplify $\\frac{6x^2}{4x}$ (assume $x \\neq 0$).',
      choices: ['$\\frac{2x}{3}$', '$\\frac{3x^2}{2}$', '$\\frac{3x}{2}$', '$\\frac{2}{3x}$'],
      answer: 2,
      solution: 'Cancel the common factor $2$ from the numbers ($\\frac{6}{4} = \\frac{3}{2}$) and one factor of $x$ from $\\frac{x^2}{x} = x$. Result: $\\frac{3x}{2}$. Check $x = 2$: original is $\\frac{24}{8} = 3$, and $\\frac{3 \\cdot 2}{2} = 3$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'Evaluate $2x^2 - 3x + 1$ when $x = -1$.',
    choices: ['$0$', '$6$', '$-4$', '$2$'],
    answer: 1,
    solution: 'Substitute with parentheses: $2(-1)^2 - 3(-1) + 1 = 2 \\cdot 1 + 3 + 1 = 6$. Both tricky signs turn positive: the square of $-1$ is $1$, and subtracting $-3$ adds $3$.',
  },
  {
    q: 'Simplify $4(2x - 1) - 3(x + 2)$.',
    choices: ['$5x + 2$', '$11x - 10$', '$5x - 6$', '$5x - 10$'],
    answer: 3,
    solution: 'Expand both: $4(2x - 1) = 8x - 4$ and $-3(x + 2) = -3x - 6$. Combine: $8x - 3x = 5x$ and $-4 - 6 = -10$, giving $5x - 10$. Check at $x = 1$: $4(1) - 3(3) = -5$, and $5 - 10 = -5$. ✓',
  },
  {
    q: 'Compute $\\frac{2x}{3} + \\frac{x}{6}$.',
    choices: ['$\\frac{5x}{6}$', '$\\frac{3x}{9}$', '$\\frac{x}{2}$', '$\\frac{5x}{12}$'],
    answer: 0,
    solution: 'Common denominator $6$: $\\frac{2x}{3} = \\frac{4x}{6}$, so the sum is $\\frac{4x + x}{6} = \\frac{5x}{6}$. Check $x = 6$: $4 + 1 = 5$, and $\\frac{5 \\cdot 6}{6} = 5$. ✓',
  },
  {
    q: 'Write "seven less than three times a number" as an expression, then evaluate it when the number is $-2$.',
    choices: ['$-1$', '$13$', '$-13$', '$1$'],
    answer: 2,
    solution: 'The expression is $3n - 7$. At $n = -2$: $3(-2) - 7 = -6 - 7 = -13$. (Writing $7 - 3n$ instead gives $13$ — the order in "less than" flips the subtraction.)',
  },
  {
    q: 'Factor $9x^2 + 12x$ completely.',
    choices: ['$3x(3x + 4)$', '$3(3x^2 + 4)$', '$3x(3x + 12)$', '$9x(x + 3)$'],
    answer: 0,
    solution: 'The greatest common factor of $9x^2$ and $12x$ is $3x$. Dividing each term: $9x^2 \\div 3x = 3x$ and $12x \\div 3x = 4$, so we get $3x(3x + 4)$. Distribute to confirm: $9x^2 + 12x$. ✓',
  },
  {
    q: 'A rectangle has width $w$ and length $2w - 3$. What is its perimeter?',
    choices: ['$3w - 3$', '$6w - 3$', '$6w + 6$', '$6w - 6$'],
    answer: 3,
    solution: 'Perimeter is twice the width plus twice the length: $2w + 2(2w - 3) = 2w + 4w - 6 = 6w - 6$. Check $w = 3$: sides $3$ and $3$, perimeter $12$, and $6(3) - 6 = 12$. ✓ ($3w - 3$ is only halfway around!)',
  },
  {
    q: 'Simplify $\\frac{10x - 5}{5}$.',
    choices: ['$2x - 5$', '$10x - 1$', '$2x - 1$', '$2x$'],
    answer: 2,
    solution: 'The bar divides BOTH terms by $5$: $\\frac{10x}{5} - \\frac{5}{5} = 2x - 1$. Check at $x = 1$: $\\frac{5}{5} = 1$, and $2 - 1 = 1$. ✓ Canceling the $-5$ against the denominator (to get $2x$) is illegal — the $5$s are not factors of the whole top.',
  },
  {
    q: 'Which expression is equivalent to $6x + 4$ for every value of $x$?',
    choices: ['$2(3x + 4)$', '$2(3x + 2)$', '$3(2x + 1)$', '$6(x + 4)$'],
    answer: 1,
    solution: 'Factor out the common $2$: $6x + 4 = 2(3x + 2)$. Distribute the others to see they miss: $2(3x + 4) = 6x + 8$, $3(2x + 1) = 6x + 3$, $6(x + 4) = 6x + 24$. Only the constant $2$ inside rebuilds the $+4$.',
  },
  {
    q: 'Simplify $5x - 2(x - 3) - 6$.',
    choices: ['$3x$', '$3x - 12$', '$3x + 12$', '$7x - 12$'],
    answer: 0,
    solution: 'Distribute the $-2$: $5x - 2x + 6 - 6$. The constants cancel completely: $+6 - 6 = 0$, leaving just $3x$. Check at $x = 2$: $10 - 2(-1) - 6 = 10 + 2 - 6 = 6 = 3 \\cdot 2$. ✓ Getting $3x - 12$ means the $-2$ never flipped the $-3$.',
  },
  {
    q: 'Evaluate $\\frac{x^2 - 1}{x + 1}$ when $x = 4$.',
    choices: ['$5$', '$15$', '$\\frac{17}{5}$', '$3$'],
    answer: 3,
    solution: 'Top: $4^2 - 1 = 15$. Bottom: $4 + 1 = 5$. So the value is $\\frac{15}{5} = 3$. (Curious pattern: $3 = 4 - 1$. Try other values — the answer always comes out to $x - 1$. You will see why when you learn to factor $x^2 - 1$!)',
  },
  {
    q: 'If $2x + 3x + 4x = 180$, what is $x$?',
    choices: ['$10$', '$45$', '$20$', '$60$'],
    answer: 2,
    solution: 'Combine the like terms first: $2x + 3x + 4x = 9x$. So $9x = 180$, and $x = 180 \\div 9 = 20$. Check: $40 + 60 + 80 = 180$. ✓ (This is exactly how you will split an angle into parts with ratio $2:3:4$.)',
  },
  {
    q: 'Compute $\\frac{3x}{4} \\div \\frac{x}{8}$ (assume $x \\neq 0$).',
    choices: ['$\\frac{3x^2}{32}$', '$6$', '$\\frac{1}{6}$', '$6x$'],
    answer: 1,
    solution: 'Flip the second fraction and multiply: $\\frac{3x}{4} \\cdot \\frac{8}{x} = \\frac{24x}{4x} = 6$. The $x$s cancel entirely — the answer is a plain number. Check $x = 2$: $\\frac{6}{4} \\div \\frac{2}{8} = \\frac{3}{2} \\cdot 4 = 6$. ✓',
  },
]

const worksheet = [
  {
    q: 'Evaluate $5x - 7$ when $x = 4$.',
    answer: '$13$',
    solution: 'Substitute: $5 \\cdot 4 - 7 = 20 - 7 = 13$.',
  },
  {
    q: 'Simplify $8y + 3 - 2y + 5$.',
    answer: '$6y + 8$',
    solution: 'The $y$-team: $8y - 2y = 6y$. The constants: $3 + 5 = 8$. Unlike terms stay separate: $6y + 8$.',
  },
  {
    q: 'Expand $4(3x - 2)$.',
    answer: '$12x - 8$',
    solution: 'Distribute the $4$ to both terms, sign included: $4 \\cdot 3x = 12x$ and $4 \\cdot (-2) = -8$.',
  },
  {
    q: 'Simplify $9x - (4x - 5)$.',
    answer: '$5x + 5$',
    solution: 'The minus sign flips both terms inside: $9x - 4x + 5 = 5x + 5$. Check at $x = 1$: $9 - (-1) = 10$, and $5 + 5 = 10$. ✓',
  },
  {
    q: 'Factor $10x + 15$.',
    answer: '$5(2x + 3)$',
    solution: 'The common factor of $10x$ and $15$ is $5$: dividing gives $2x$ and $3$, so $10x + 15 = 5(2x + 3)$. Distribute to check. ✓',
  },
  {
    q: 'Compute $\\frac{x}{4} + \\frac{x}{6}$.',
    answer: '$\\frac{5x}{12}$',
    solution: 'The least common denominator is $12$: $\\frac{3x}{12} + \\frac{2x}{12} = \\frac{5x}{12}$.',
  },
  {
    q: 'Simplify $2(3x + 1) - 3(x - 2)$.',
    answer: '$3x + 8$',
    solution: 'Expand each: $2(3x + 1) = 6x + 2$ and $-3(x - 2) = -3x + 6$ (the $-3$ times $-2$ gives $+6$). Combine: $3x + 8$. Check at $x = 1$: $2(4) - 3(-1) = 11$, and $3 + 8 = 11$. ✓',
  },
  {
    q: 'Evaluate $x^2 - 2x + 3$ when $x = -3$.',
    answer: '$18$',
    solution: 'With parentheses: $(-3)^2 - 2(-3) + 3 = 9 + 6 + 3 = 18$. The square is positive, and subtracting $-6$ adds $6$.',
  },
  {
    q: 'Factor $8x^2 - 12x$ completely.',
    answer: '$4x(2x - 3)$',
    solution: 'The greatest common factor is $4x$: $8x^2 \\div 4x = 2x$ and $-12x \\div 4x = -3$, so $8x^2 - 12x = 4x(2x - 3)$. Pulling out only $4$ or only $x$ would leave a common factor behind.',
  },
  {
    q: 'Compute $\\frac{x}{2} + \\frac{x}{3} - \\frac{x}{6}$.',
    answer: '$\\frac{2x}{3}$',
    solution: 'Common denominator $6$: $\\frac{3x + 2x - x}{6} = \\frac{4x}{6} = \\frac{2x}{3}$. Check $x = 6$: $3 + 2 - 1 = 4$, and $\\frac{2 \\cdot 6}{3} = 4$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch02',
  book: 'intro-algebra',
  number: 2,
  title: 'x Marks the Spot',
  intro:
    'Meet $x$ — the most famous letter in mathematics. A variable is simply a number that has not told you its value yet, and everything you learned about arithmetic still applies to it. In this chapter you will evaluate, combine, expand, factor, and simplify expressions until working with letters feels as natural as working with numbers.',
  sections: [s21, s22, s23, s24],
  challenge,
  worksheet,
}
