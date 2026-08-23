// Introduction to Algebra — Chapter 4: More Variables
// All problems, explanations, and examples are original MathQuest content.

const s41 = {
  id: '4.1',
  title: 'Evaluating Multi-Variable Expressions',
  learn: {
    concepts: [
      {
        heading: 'More letters, same game',
        body: 'An expression can hold two, three, or a whole crowd of variables: $3x + 2y$, $ab - c$, $\\frac{p + q}{r}$. Each letter is just a box holding its own number. To evaluate, open every box — substitute each value — and then it is ordinary arithmetic.',
      },
      {
        heading: 'Substitute with parentheses',
        body: 'When you replace a variable with its value, wrap the value in parentheses — especially when it is negative! Evaluating $2xy$ at $x = 3$, $y = -5$ as $2(3)(-5)$ keeps every sign safe. Writing $2 \\times 3 \\times -5$ without parentheses is how minus signs get lost.',
      },
      {
        heading: 'Order of operations still rules',
        body: 'Nothing about the order of operations changes with more variables: parentheses, then exponents, then multiplication and division, then addition and subtraction. In $a^2 - bc$, you square $a$ and multiply $b$ by $c$ before any subtracting happens.',
      },
      {
        heading: 'Words become expressions',
        body: 'Phrases translate piece by piece. "The sum of $x$ and $y$" is $x + y$; "twice the sum" wraps it in parentheses first: $2(x + y)$. Parentheses record which operation happened first in the words — "twice the sum" doubles everything, while $2x + y$ doubles only $x$.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $3x + 2y$ when $x = 4$ and $y = -5$.',
        steps: [
          'Substitute each value in parentheses: $3(4) + 2(-5)$.',
          'Multiply first: $3(4) = 12$ and $2(-5) = -10$.',
          'Now add: $12 + (-10) = 2$.',
        ],
        answer: '$3x + 2y = 2$ when $x = 4$ and $y = -5$',
      },
      {
        problem: 'Evaluate $a^2 - bc$ when $a = -3$, $b = 2$, and $c = -4$.',
        steps: [
          'Substitute with parentheses: $(-3)^2 - (2)(-4)$.',
          'Exponent first: $(-3)^2 = 9$. Then the product: $(2)(-4) = -8$.',
          'Subtracting a negative is adding: $9 - (-8) = 9 + 8 = 17$.',
        ],
        answer: '$a^2 - bc = 17$',
      },
      {
        problem: 'Evaluate $\\frac{x + y}{z}$ when $x = 7$, $y = 5$, and $z = 3$.',
        steps: [
          'A fraction bar acts like parentheses around the whole top, so add first: $x + y = 7 + 5 = 12$.',
          'Then divide by $z$: $\\frac{12}{3} = 4$.',
        ],
        answer: '$\\frac{x + y}{z} = 4$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $xy$ when $x = 3$ and $y = 5$.',
      choices: ['$8$', '$35$', '$15$', '$2$'],
      answer: 2,
      solution: 'Writing two variables side by side means multiplication: $xy = (3)(5) = 15$. (Adding would give $8$, but $xy$ is a product, not a sum.)',
    },
    {
      q: 'Evaluate $x + 2y$ when $x = 4$ and $y = 3$.',
      choices: ['$10$', '$18$', '$14$', '$9$'],
      answer: 0,
      solution: 'Multiplication before addition: $2y = 2(3) = 6$ first, then $4 + 6 = 10$. The $2$ multiplies only $y$ — there are no parentheses pulling $x$ in.',
    },
    {
      q: 'Evaluate $a - b$ when $a = 2$ and $b = 9$.',
      choices: ['$7$', '$-7$', '$-11$', '$11$'],
      answer: 1,
      solution: 'Substitute: $2 - 9$. Since $9$ is larger than $2$, the answer is negative: $2 - 9 = -7$. Order matters in subtraction, so keep $a$ first.',
    },
    {
      q: 'Evaluate $5m + n$ when $m = 2$ and $n = -3$.',
      choices: ['$13$', '$-5$', '$-30$', '$7$'],
      answer: 3,
      solution: 'Multiply first: $5m = 5(2) = 10$. Then add $n$: $10 + (-3) = 7$. Parentheses around the $-3$ keep its sign from getting lost.',
    },
    {
      q: 'Evaluate $x^2 + y^2$ when $x = 3$ and $y = -4$.',
      choices: ['$25$', '$-7$', '$1$', '$49$'],
      answer: 0,
      solution: 'Square each variable separately: $3^2 = 9$ and $(-4)^2 = (-4)(-4) = 16$. Then $9 + 16 = 25$. Note that $(-4)^2$ is positive $16$ — squaring a negative always gives a positive.',
    },
    {
      q: 'Evaluate $2ab - c$ when $a = 3$, $b = -2$, and $c = -5$.',
      choices: ['$-17$', '$-7$', '$7$', '$17$'],
      answer: 1,
      solution: 'First the product: $2ab = 2(3)(-2) = -12$. Then subtract $c$: $-12 - (-5) = -12 + 5 = -7$. Subtracting a negative turns into adding.',
    },
    {
      q: 'Evaluate $(x + y)(x - y)$ when $x = 6$ and $y = 2$.',
      choices: ['$40$', '$16$', '$32$', '$24$'],
      answer: 2,
      solution: 'Work inside each set of parentheses first: $x + y = 8$ and $x - y = 4$. Then multiply: $8 \\times 4 = 32$. (Adding the squares would give $36 + 4 = 40$, but that is a different expression.)',
    },
    {
      q: 'Evaluate $rs$ when $r = \\frac{1}{2}$ and $s = \\frac{2}{3}$.',
      choices: ['$\\frac{7}{6}$', '$\\frac{3}{4}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution: 'Side-by-side variables multiply: $rs = \\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{2}{6} = \\frac{1}{3}$. The $2$s cancel nicely. (The sum $\\frac{7}{6}$ answers a different question.)',
    },
    {
      q: 'Which expression means "twice the sum of $x$ and $y$, decreased by $z$"?',
      choices: ['$2(x + y) - z$', '$2x + y - z$', '$2(x + y - z)$', '$2 + x + y - z$'],
      answer: 0,
      solution: '"The sum of $x$ and $y$" is $x + y$. "Twice the sum" doubles that whole sum, so parentheses are needed: $2(x + y)$. Then "decreased by $z$" subtracts $z$ at the end: $2(x + y) - z$. Without parentheses, $2x + y$ would double only $x$.',
    },
    {
      q: 'Evaluate $a^2b - ab^2$ when $a = -2$ and $b = 3$.',
      choices: ['$-6$', '$30$', '$-30$', '$6$'],
      answer: 1,
      solution: 'Take each term separately. $a^2b = (-2)^2(3) = 4 \\cdot 3 = 12$. $ab^2 = (-2)(3)^2 = (-2)(9) = -18$. Then $12 - (-18) = 12 + 18 = 30$. The two terms look like twins, but the exponents sit on different letters, so they can have different signs!',
    },
  ],
}

const s42 = {
  id: '4.2',
  title: 'Still More Arithmetic',
  learn: {
    concepts: [
      {
        heading: 'Like terms must match letter-for-letter',
        body: 'Two terms are like terms only when they have exactly the same variables raised to exactly the same powers. $3xy$ and $-5xy$ are like terms, so $3xy + (-5xy) = -2xy$ — just add the coefficients, the same way $3$ apples plus $-5$ apples is $-2$ apples.',
      },
      {
        heading: '$x^2y$ and $xy^2$ are NOT alike',
        body: 'The exponents sit on different letters, so $x^2y$ and $xy^2$ are as different as apples and oranges. Not sure? Test values: at $x = 1$, $y = 2$ we get $x^2y = 2$ but $xy^2 = 4$. They cannot be combined into one term.',
      },
      {
        heading: 'Adding expressions: drop and regroup',
        body: 'To add $(4a + 3b) + (2a - b)$, the parentheses can simply be dropped, and then like terms find each other: $4a + 2a = 6a$ and $3b - b = 2b$, giving $6a + 2b$.',
      },
      {
        heading: 'Subtracting: flip every sign inside',
        body: 'A minus sign in front of parentheses belongs to EVERY term inside: $-(a - 5b) = -a + 5b$. Forgetting to flip the second term is the most common slip in all of algebra — distribute that minus sign like it is $-1$, because it is!',
      },
    ],
    examples: [
      {
        problem: 'Simplify $3xy + 7x - 5xy + 2x$.',
        steps: [
          'Sort the terms into families: the $xy$ terms are $3xy$ and $-5xy$; the $x$ terms are $7x$ and $2x$.',
          'Combine each family: $3xy - 5xy = -2xy$ and $7x + 2x = 9x$.',
          'The two families are different, so they stay separate in the answer.',
        ],
        answer: '$3xy + 7x - 5xy + 2x = -2xy + 9x$',
      },
      {
        problem: 'Simplify $(4a + 3b) - (a - 5b)$.',
        steps: [
          'The minus sign flips every term in the second parentheses: $-(a - 5b) = -a + 5b$.',
          'Now it is addition: $4a + 3b - a + 5b$.',
          'Combine like terms: $4a - a = 3a$ and $3b + 5b = 8b$.',
        ],
        answer: '$(4a + 3b) - (a - 5b) = 3a + 8b$',
      },
      {
        problem: 'Is $x^2y + xy^2$ the same as $2x^2y^2$? Test it.',
        steps: [
          'Try $x = 1$ and $y = 2$. The left side gives $x^2y + xy^2 = 2 + 4 = 6$.',
          'The right side gives $2x^2y^2 = 2(1)(4) = 8$.',
          'Since $6 \\neq 8$, the expressions are different. $x^2y$ and $xy^2$ are not like terms, so they refuse to merge.',
        ],
        answer: 'No — $x^2y + xy^2$ cannot be combined into one term',
      },
    ],
  },
  problems: [
    {
      q: 'Simplify $3xy + 5xy$.',
      choices: ['$8x^2y^2$', '$8xy$', '$15xy$', '$8$'],
      answer: 1,
      solution: 'Both terms are $xy$ terms, so add the coefficients and keep the variables as they are: $3 + 5 = 8$, giving $8xy$. The variables do not multiply together when we add — three $xy$s plus five $xy$s is eight $xy$s.',
    },
    {
      q: 'Which term is a like term of $4a^2b$?',
      choices: ['$7a^2b$', '$4ab^2$', '$4ab$', '$7a^2b^2$'],
      answer: 0,
      solution: 'Like terms need the same variables with the same exponents. $7a^2b$ has $a$ squared and $b$ to the first power — a perfect match. $4ab^2$ puts the square on $b$ instead, so it belongs to a different family even though the coefficient matches.',
    },
    {
      q: 'Simplify $6mn - 10mn$.',
      choices: ['$4mn$', '$-4$', '$-16mn$', '$-4mn$'],
      answer: 3,
      solution: 'Same variable part, so subtract the coefficients: $6 - 10 = -4$, giving $-4mn$. The $mn$ stays — the variables never disappear when we combine like terms.',
    },
    {
      q: 'Simplify $2x + 3y + 5x - y$.',
      choices: ['$7x + 4y$', '$9xy$', '$7x + 2y$', '$3x + 2y$'],
      answer: 2,
      solution: 'Group the families: $2x + 5x = 7x$ and $3y - y = 2y$. Remember that $-y$ means $-1y$, so $3 - 1 = 2$. The $x$ terms and $y$ terms stay separate.',
    },
    {
      q: 'Simplify $(5a + 2b) + (3a - 7b)$.',
      choices: ['$8a - 5b$', '$8a + 5b$', '$2a - 5b$', '$8a - 9b$'],
      answer: 0,
      solution: 'For addition, just drop the parentheses: $5a + 2b + 3a - 7b$. Then $5a + 3a = 8a$ and $2b - 7b = -5b$, so the sum is $8a - 5b$.',
    },
    {
      q: 'Simplify $(7x + 3y) - (2x + 5y)$.',
      choices: ['$5x + 8y$', '$5x - 2y$', '$9x - 2y$', '$5x + 2y$'],
      answer: 1,
      solution: 'The minus sign flips both terms in the second parentheses: $7x + 3y - 2x - 5y$. Then $7x - 2x = 5x$ and $3y - 5y = -2y$. (If only the first term gets flipped, you would land on $5x + 8y$ — that missing flip is the classic trap.)',
    },
    {
      q: 'Simplify $4x^2y + 3xy^2 - x^2y$.',
      choices: ['$3x^2y + 3xy^2$', '$6x^2y^2$', '$4x^2y + 2xy^2$', '$3x^3y^3$'],
      answer: 0,
      solution: 'Only $4x^2y$ and $-x^2y$ are like terms: $4 - 1 = 3$, giving $3x^2y$. The term $3xy^2$ has its square on $y$, so it is a different family and rides along unchanged: $3x^2y + 3xy^2$.',
    },
    {
      q: 'Simplify $5ab - 3ba$.',
      choices: ['It cannot be simplified — the terms do not match', '$8ab$', '$2ab$', '$2$'],
      answer: 2,
      solution: 'Multiplication is commutative, so $ba$ is exactly the same as $ab$! The terms are secretly like terms: $5ab - 3ab = 2ab$. The variables stay in the answer — only the coefficients get subtracted.',
    },
    {
      q: 'Simplify $(3x^2 + 2xy - y^2) - (x^2 - 2xy + y^2)$.',
      choices: ['$2x^2$', '$2x^2 + 4xy$', '$4x^2 + 4xy - 2y^2$', '$2x^2 + 4xy - 2y^2$'],
      answer: 3,
      solution: 'Flip every sign in the second parentheses: $3x^2 + 2xy - y^2 - x^2 + 2xy - y^2$. Now combine each family: $3x^2 - x^2 = 2x^2$, then $2xy + 2xy = 4xy$, then $-y^2 - y^2 = -2y^2$. Check with $x = 1$, $y = 1$: the original is $(3 + 2 - 1) - (1 - 2 + 1) = 4 - 0 = 4$, and $2 + 4 - 2 = 4$. ✓',
    },
    {
      q: 'A rectangle has length $2a + b$ and width $a - b$. What is its perimeter?',
      choices: ['$2a^2 - ab - b^2$', '$6a$', '$3a$', '$6a + 4b$'],
      answer: 1,
      solution: 'Perimeter is twice the length plus twice the width: $2(2a + b) + 2(a - b) = 4a + 2b + 2a - 2b$. The $b$ terms cancel completely: $+2b - 2b = 0$, leaving $6a$. (The expression $2a^2 - ab - b^2$ is the area — a different question!)',
    },
  ],
}

const s43 = {
  id: '4.3',
  title: 'Distribution and Factoring',
  learn: {
    concepts: [
      {
        heading: 'Distribute to every term',
        body: 'A factor outside parentheses multiplies EACH term inside: $2x(3y + 4z) = 6xy + 8xz$. Every term gets its delivery — skipping one is the most common distribution slip. Coefficients multiply coefficients, and variables tag along.',
      },
      {
        heading: 'Double distribution',
        body: 'To expand $(a + b)(c + d)$, each term of the first parentheses multiplies each term of the second: $ac + ad + bc + bd$. Two terms times two terms gives four products — count them to make sure none escaped!',
      },
      {
        heading: 'Factoring runs the film backwards',
        body: 'Factoring undoes distribution: find the biggest factor that every term shares and pull it out front. In $6xy + 9x$, both terms share $3x$, so $6xy + 9x = 3x(2y + 3)$. What stays inside is whatever is left of each term after the common factor leaves.',
      },
      {
        heading: 'Always check by expanding',
        body: 'Factoring comes with a free answer key: distribute your result and see if the original comes back. If $3x(2y + 3)$ expands to $6xy + 9x$, the factoring is right. A term that shrinks to $1$ inside the parentheses must still be written — never let it vanish!',
      },
    ],
    examples: [
      {
        problem: 'Expand $3a(2b - 5c)$.',
        steps: [
          'The $3a$ multiplies each term inside.',
          'First term: $3a \\cdot 2b = 6ab$. Second term: $3a \\cdot (-5c) = -15ac$.',
        ],
        answer: '$3a(2b - 5c) = 6ab - 15ac$',
      },
      {
        problem: 'Expand $(x + 2)(y + 3)$.',
        steps: [
          'Each term of $(x + 2)$ multiplies each term of $(y + 3)$ — four products in all.',
          '$x \\cdot y = xy$, $\\ x \\cdot 3 = 3x$, $\\ 2 \\cdot y = 2y$, $\\ 2 \\cdot 3 = 6$.',
          'No like terms here, so all four pieces stay: $xy + 3x + 2y + 6$.',
        ],
        answer: '$(x + 2)(y + 3) = xy + 3x + 2y + 6$',
      },
      {
        problem: 'Factor $4a^2b + 6ab^2$.',
        steps: [
          'Coefficients $4$ and $6$ share a factor of $2$; both terms contain at least one $a$ and one $b$. The greatest common factor is $2ab$.',
          'Divide each term by $2ab$: $\\frac{4a^2b}{2ab} = 2a$ and $\\frac{6ab^2}{2ab} = 3b$.',
          'Check by expanding: $2ab(2a + 3b) = 4a^2b + 6ab^2$. It matches!',
        ],
        answer: '$4a^2b + 6ab^2 = 2ab(2a + 3b)$',
      },
    ],
  },
  problems: [
    {
      q: 'Expand $5(x + y)$.',
      choices: ['$5x + 5y$', '$5x + y$', '$5xy$', '$x + 5y$'],
      answer: 0,
      solution: 'The $5$ multiplies both terms inside: $5 \\cdot x + 5 \\cdot y = 5x + 5y$. Every term gets its share.',
    },
    {
      q: 'Expand $3x(2y + 5z)$.',
      choices: ['$6xy + 5z$', '$6y + 15z$', '$6xy + 15xz$', '$5xy + 8xz$'],
      answer: 2,
      solution: 'Multiply $3x$ into each term: $3x \\cdot 2y = 6xy$ and $3x \\cdot 5z = 15xz$. Both products keep the $x$ — the outside factor visits every term in full.',
    },
    {
      q: 'Factor $6xy + 9x$.',
      choices: ['$3x(2y + 3x)$', '$3x(2y + 3)$', '$6x(y + 3)$', '$9x(2y + 1)$'],
      answer: 1,
      solution: 'Both terms share $3x$. Dividing it out leaves $\\frac{6xy}{3x} = 2y$ and $\\frac{9x}{3x} = 3$, so we get $3x(2y + 3)$. Check by expanding: $3x \\cdot 2y = 6xy$ and $3x \\cdot 3 = 9x$. ✓',
    },
    {
      q: 'Expand $-2(a - 3b)$.',
      choices: ['$-2a - 6b$', '$2a - 6b$', '$-2a + 3b$', '$-2a + 6b$'],
      answer: 3,
      solution: 'Distribute the whole $-2$, sign included: $-2 \\cdot a = -2a$ and $-2 \\cdot (-3b) = +6b$. A negative times a negative is positive, so the answer is $-2a + 6b$.',
    },
    {
      q: 'Expand $(a + 2)(b + 5)$.',
      choices: ['$ab + 5a + 2b + 10$', '$ab + 10$', '$ab + 2a + 5b + 10$', '$ab + 7$'],
      answer: 0,
      solution: 'Four products: $a \\cdot b = ab$, $a \\cdot 5 = 5a$, $2 \\cdot b = 2b$, $2 \\cdot 5 = 10$. All four pieces appear: $ab + 5a + 2b + 10$. Multiplying only the firsts and only the lasts would give $ab + 10$, but that misses half the products.',
    },
    {
      q: 'Factor $4a^2b + 6ab^2$.',
      choices: ['$2ab(2b + 3a)$', '$2ab(2a + 3b)$', '$4ab(a + 2b)$', '$2ab(2a + 3)$'],
      answer: 1,
      solution: 'The greatest common factor is $2ab$. What remains: $\\frac{4a^2b}{2ab} = 2a$ and $\\frac{6ab^2}{2ab} = 3b$, so the answer is $2ab(2a + 3b)$. Expanding $2ab(2b + 3a)$ instead gives $4ab^2 + 6a^2b$ — the squares land on the opposite letters, so that choice does not match.',
    },
    {
      q: 'Expand $(x + 3)(x + y)$.',
      choices: ['$x^2 + 3y$', '$x^2 + xy + 3y$', '$x^2 + xy + 3x + 3y$', '$x^2 + 4xy + 3y$'],
      answer: 2,
      solution: 'Four products: $x \\cdot x = x^2$, $x \\cdot y = xy$, $3 \\cdot x = 3x$, $3 \\cdot y = 3y$. None of them are like terms ($xy$ and $3x$ are different families), so all four stay: $x^2 + xy + 3x + 3y$.',
    },
    {
      q: 'If $x + y = 9$, what is $4x + 4y$?',
      choices: ['$13$', '$81$', '$24$', '$36$'],
      answer: 3,
      solution: 'Factor first: $4x + 4y = 4(x + y)$. We already know $x + y = 9$, so the value is $4 \\times 9 = 36$ — no need to find $x$ and $y$ separately!',
    },
    {
      q: 'Factor $6x^2y - 9xy^2 + 3xy$.',
      choices: ['$3xy(2x - 3y + 1)$', '$3xy(2x - 3y)$', '$3xy(2x - 3y - 1)$', '$3xy(2x + 3y + 1)$'],
      answer: 0,
      solution: 'Every term shares $3xy$. Dividing: $\\frac{6x^2y}{3xy} = 2x$, $\\frac{-9xy^2}{3xy} = -3y$, and $\\frac{3xy}{3xy} = 1$. That last $1$ must be written — the third term does not vanish, it shrinks to $1$! So the answer is $3xy(2x - 3y + 1)$.',
    },
    {
      q: 'Expand $(2a + b)(3c + d)$.',
      choices: ['$6ac + bd$', '$6ac + 3ad + 2bc + bd$', '$6ac + 2ad + 3bc + bd$', '$6ac + 2ad + 3bc + 3bd$'],
      answer: 2,
      solution: 'Four products, coefficients and all: $2a \\cdot 3c = 6ac$, $2a \\cdot d = 2ad$, $b \\cdot 3c = 3bc$, $b \\cdot d = bd$. Together: $6ac + 2ad + 3bc + bd$. Watch which coefficient travels with which product — $2$ belongs to $a$ and $3$ belongs to $c$.',
    },
  ],
}

const s44 = {
  id: '4.4',
  title: 'Fractions',
  learn: {
    concepts: [
      {
        heading: 'Cancel matching factors',
        body: 'A fraction like $\\frac{4xy}{6y}$ simplifies by cancelling factors shared by the whole top and the whole bottom: $\\frac{4xy}{6y} = \\frac{2 \\cdot 2 \\cdot x \\cdot y}{2 \\cdot 3 \\cdot y} = \\frac{2x}{3}$. Numbers and variables cancel by exactly the same rule.',
      },
      {
        heading: 'Never cancel across a plus sign',
        body: 'Cancelling works on FACTORS — things being multiplied — never on terms being added. In $\\frac{x + 4}{4}$, the $4$s do not cancel: test $x = 4$ and you get $\\frac{8}{4} = 2$, not $4 + 1 = 5$. The honest simplification is $\\frac{x}{4} + \\frac{4}{4} = \\frac{x}{4} + 1$.',
      },
      {
        heading: 'Multiply straight across, divide by flipping',
        body: 'Variable fractions multiply just like number fractions: tops together, bottoms together, then cancel. To divide, multiply by the reciprocal: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$.',
      },
      {
        heading: 'Adding needs a common denominator',
        body: 'Same denominator? Add the tops: $\\frac{x}{y} + \\frac{2x}{y} = \\frac{3x}{y}$. Different denominators? Build a common one first: $\\frac{a}{2} + \\frac{b}{3} = \\frac{3a}{6} + \\frac{2b}{6} = \\frac{3a + 2b}{6}$. Adding tops and bottoms separately is never allowed — with variables or without!',
      },
    ],
    examples: [
      {
        problem: 'Simplify $\\frac{4xy}{6y}$.',
        steps: [
          'Write top and bottom as products of factors: $\\frac{2 \\cdot 2 \\cdot x \\cdot y}{2 \\cdot 3 \\cdot y}$.',
          'Cancel one $2$ and the $y$ from both top and bottom.',
          'What remains is $\\frac{2x}{3}$.',
        ],
        answer: '$\\frac{4xy}{6y} = \\frac{2x}{3}$',
      },
      {
        problem: 'Compute $\\frac{2a}{3} \\cdot \\frac{9}{4a}$.',
        steps: [
          'Multiply straight across: $\\frac{2a \\cdot 9}{3 \\cdot 4a} = \\frac{18a}{12a}$.',
          'Cancel the common factor $6a$ from top and bottom: $\\frac{18a}{12a} = \\frac{3}{2}$.',
          'The $a$ cancels completely — the answer is just a number.',
        ],
        answer: '$\\frac{2a}{3} \\cdot \\frac{9}{4a} = \\frac{3}{2}$',
      },
      {
        problem: 'Add $\\frac{a}{2} + \\frac{b}{3}$.',
        steps: [
          'The denominators differ, so build the common denominator $6$.',
          'Convert each fraction: $\\frac{a}{2} = \\frac{3a}{6}$ and $\\frac{b}{3} = \\frac{2b}{6}$.',
          'Now add the tops: $\\frac{3a}{6} + \\frac{2b}{6} = \\frac{3a + 2b}{6}$. Since $3a$ and $2b$ are not like terms, the top stays as a sum.',
        ],
        answer: '$\\frac{a}{2} + \\frac{b}{3} = \\frac{3a + 2b}{6}$',
      },
    ],
  },
  problems: [
    {
      q: 'Simplify $\\frac{3x}{6}$.',
      choices: ['$2x$', '$\\frac{x}{3}$', '$\\frac{2}{x}$', '$\\frac{x}{2}$'],
      answer: 3,
      solution: 'Top and bottom share a factor of $3$: $\\frac{3x}{6} = \\frac{3 \\cdot x}{3 \\cdot 2} = \\frac{x}{2}$.',
    },
    {
      q: 'Simplify $\\frac{4xy}{6y}$.',
      choices: ['$\\frac{2xy}{3}$', '$\\frac{2x}{3}$', '$\\frac{2}{3}$', '$\\frac{2x}{3y}$'],
      answer: 1,
      solution: 'Cancel the shared $2$ from the numbers and the shared $y$: $\\frac{4xy}{6y} = \\frac{2x}{3}$. The $x$ survives because only the top has one.',
    },
    {
      q: 'Simplify $\\frac{10a^2b}{15ab}$.',
      choices: ['$\\frac{2a}{3}$', '$\\frac{2ab}{3}$', '$\\frac{2a}{3b}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution: 'Cancel a $5$ from the numbers, one $a$ from the two in $a^2$, and the whole $b$: $\\frac{10a^2b}{15ab} = \\frac{2a}{3}$. One $a$ remains on top because the top started with two of them.',
    },
    {
      q: 'Simplify $\\frac{x}{y} + \\frac{2x}{y}$.',
      choices: ['$\\frac{3x}{y}$', '$\\frac{3x}{2y}$', '$\\frac{2x^2}{y^2}$', '$\\frac{3x}{y^2}$'],
      answer: 0,
      solution: 'The denominators already match, so just add the tops: $x + 2x = 3x$, giving $\\frac{3x}{y}$. The denominator stays $y$ — denominators never add.',
    },
    {
      q: 'Which expression is equal to $\\frac{x + 4}{4}$?',
      choices: ['$x + 1$', '$x$', '$\\frac{x}{4} + 1$', '$\\frac{x}{4} + 4$'],
      answer: 2,
      solution: 'The bar divides the ENTIRE top, so split it term by term: $\\frac{x + 4}{4} = \\frac{x}{4} + \\frac{4}{4} = \\frac{x}{4} + 1$. Cancelling the $4$s to get $x + 1$ is not allowed, because the $4$ on top is added, not multiplied. Test $x = 8$: the original gives $\\frac{12}{4} = 3$, and $\\frac{8}{4} + 1 = 3$. ✓',
    },
    {
      q: 'Simplify $\\frac{2x}{3} \\cdot \\frac{6}{x}$.',
      choices: ['$4x$', '$4$', '$\\frac{4}{x}$', '$12x$'],
      answer: 1,
      solution: 'Multiply straight across: $\\frac{2x \\cdot 6}{3 \\cdot x} = \\frac{12x}{3x}$. Cancel $3x$ from top and bottom: $\\frac{12x}{3x} = 4$. The $x$ disappears entirely — top and bottom each had exactly one.',
    },
    {
      q: 'Compute $\\frac{3m}{4} \\div \\frac{m}{8}$.',
      choices: ['$6m$', '$\\frac{3m^2}{32}$', '$\\frac{3}{32}$', '$6$'],
      answer: 3,
      solution: 'Dividing means multiplying by the reciprocal: $\\frac{3m}{4} \\cdot \\frac{8}{m} = \\frac{24m}{4m} = 6$. The $m$s cancel and $24 \\div 4 = 6$. (Multiplying without flipping would give $\\frac{3m^2}{32}$ — always flip the second fraction first.)',
    },
    {
      q: 'Add $\\frac{a}{2} + \\frac{b}{3}$.',
      choices: ['$\\frac{a + b}{5}$', '$\\frac{a + b}{6}$', '$\\frac{3a + 2b}{6}$', '$\\frac{2a + 3b}{6}$'],
      answer: 2,
      solution: 'Common denominator $6$: $\\frac{a}{2} = \\frac{3a}{6}$ and $\\frac{b}{3} = \\frac{2b}{6}$, so the sum is $\\frac{3a + 2b}{6}$. Each numerator gets multiplied by the same number as its own denominator — the $a$ picks up a $3$, not a $2$. Test $a = 2$, $b = 3$: original is $1 + 1 = 2$, and $\\frac{6 + 6}{6} = 2$. ✓',
    },
    {
      q: 'Simplify $\\frac{6x^2y}{8xy^2}$.',
      choices: ['$\\frac{3x}{4y}$', '$\\frac{3y}{4x}$', '$\\frac{3xy}{4}$', '$\\frac{3x^2}{4y^2}$'],
      answer: 0,
      solution: 'Cancel a $2$ from the numbers, one $x$, and one $y$: $\\frac{6x^2y}{8xy^2} = \\frac{3x}{4y}$. The extra $x$ was on top, so an $x$ stays on top; the extra $y$ was on the bottom, so a $y$ stays on the bottom.',
    },
    {
      q: 'Simplify $\\frac{x}{y} - \\frac{x}{2y}$.',
      choices: ['$0$', '$\\frac{x}{2y}$', '$\\frac{3x}{2y}$', '$-\\frac{x}{y}$'],
      answer: 1,
      solution: 'The fractions look similar but are not equal, so the difference is not $0$. Use the common denominator $2y$: $\\frac{x}{y} = \\frac{2x}{2y}$, so $\\frac{2x}{2y} - \\frac{x}{2y} = \\frac{x}{2y}$. A whole thing minus half of it leaves half of it!',
    },
  ],
}

const s45 = {
  id: '4.5',
  title: 'Equations',
  learn: {
    concepts: [
      {
        heading: 'Same moves, more letters',
        body: 'You already know the moves: add or subtract the same thing on both sides, multiply or divide both sides by the same nonzero thing. With several variables, nothing changes — just treat the other letters as if they were numbers you happen to not know yet.',
      },
      {
        heading: 'What "solve for $y$" means',
        body: 'Solving $3x + 2y = 12$ for $y$ means getting $y$ alone on one side, with everything else on the other: $y = \\frac{12 - 3x}{2}$. The answer is an expression, not a single number — it tells you $y$ for ANY choice of $x$.',
      },
      {
        heading: 'Formulas are the payoff',
        body: 'This skill is why formulas are so flexible. The triangle area formula $A = \\frac{1}{2}bh$ finds area from base and height — but solve it for $h$ and you get $h = \\frac{2A}{b}$, a machine that finds height from area and base. One equation, many machines.',
      },
      {
        heading: 'Check with numbers',
        body: 'To test a rearranged formula, pick easy numbers that fit the original. If $3x + 2y = 12$ works with $x = 2$, $y = 3$, then $y = \\frac{12 - 3x}{2}$ should give $3$ when $x = 2$: indeed $\\frac{12 - 6}{2} = 3$. A quick number check catches sign slips instantly.',
      },
    ],
    examples: [
      {
        problem: 'Solve $3x + 2y = 12$ for $y$.',
        steps: [
          'Get the $y$ term alone by subtracting $3x$ from both sides: $2y = 12 - 3x$.',
          'Divide both sides by $2$: $y = \\frac{12 - 3x}{2}$.',
          'Check with $x = 2$: the formula gives $y = \\frac{12 - 6}{2} = 3$, and indeed $3(2) + 2(3) = 12$. ✓',
        ],
        answer: '$y = \\frac{12 - 3x}{2}$',
      },
      {
        problem: 'Solve $A = \\frac{1}{2}bh$ for $h$.',
        steps: [
          'Multiply both sides by $2$ to clear the fraction: $2A = bh$.',
          'Divide both sides by $b$: $h = \\frac{2A}{b}$.',
          'Sanity check: a triangle with $b = 4$ and $h = 3$ has $A = 6$, and the new formula gives $h = \\frac{12}{4} = 3$. ✓',
        ],
        answer: '$h = \\frac{2A}{b}$',
      },
      {
        problem: 'Solve $c = 5d - 3e$ for $d$.',
        steps: [
          'Add $3e$ to both sides so the $d$ term stands alone: $c + 3e = 5d$.',
          'Divide both sides by $5$: $d = \\frac{c + 3e}{5}$.',
        ],
        answer: '$d = \\frac{c + 3e}{5}$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x + y = 10$ for $y$.',
      choices: ['$y = 10 + x$', '$y = x - 10$', '$y = 10 - x$', '$y = 10x$'],
      answer: 2,
      solution: 'Subtract $x$ from both sides: $y = 10 - x$. Check with $x = 4$: the formula gives $y = 6$, and $4 + 6 = 10$. ✓',
    },
    {
      q: 'Solve $2x = 6y$ for $x$.',
      choices: ['$x = 3y$', '$x = \\frac{y}{3}$', '$x = 12y$', '$x = 6y - 2$'],
      answer: 0,
      solution: 'Divide both sides by $2$: $x = \\frac{6y}{2} = 3y$. The $2$ is multiplying $x$, so we undo it by dividing — not by subtracting.',
    },
    {
      q: 'Solve $a - b = 7$ for $a$.',
      choices: ['$a = 7 - b$', '$a = b - 7$', '$a = 7b$', '$a = b + 7$'],
      answer: 3,
      solution: 'Add $b$ to both sides: $a = 7 + b$, usually written $a = b + 7$. Check with $b = 2$: then $a = 9$, and $9 - 2 = 7$. ✓',
    },
    {
      q: 'Solve $p = 4q$ for $q$.',
      choices: ['$q = 4p$', '$q = \\frac{p}{4}$', '$q = p - 4$', '$q = \\frac{4}{p}$'],
      answer: 1,
      solution: 'Divide both sides by $4$: $q = \\frac{p}{4}$. Watch the direction — $q$ is the smaller quantity here, since four of them make one $p$.',
    },
    {
      q: 'Solve $3x + y = 15$ for $y$.',
      choices: ['$y = 15 - 3x$', '$y = 15 + 3x$', '$y = 5 - x$', '$y = 3x - 15$'],
      answer: 0,
      solution: 'Subtract $3x$ from both sides: $y = 15 - 3x$. No dividing is needed because $y$ has coefficient $1$. Check with $x = 4$: $y = 3$, and $12 + 3 = 15$. ✓',
    },
    {
      q: 'Solve $2m + 3n = 18$ for $n$.',
      choices: ['$n = \\frac{18 + 2m}{3}$', '$n = 18 - 2m$', '$n = 6 - 2m$', '$n = \\frac{18 - 2m}{3}$'],
      answer: 3,
      solution: 'Two steps: subtract $2m$ from both sides to get $3n = 18 - 2m$, then divide the ENTIRE right side by $3$: $n = \\frac{18 - 2m}{3}$. The $3$ must divide both the $18$ and the $2m$, not just one of them.',
    },
    {
      q: 'The area of a triangle is $A = \\frac{1}{2}bh$. Solve for $h$.',
      choices: ['$h = \\frac{A}{2b}$', '$h = \\frac{2A}{b}$', '$h = \\frac{2b}{A}$', '$h = 2A - b$'],
      answer: 1,
      solution: 'Multiply both sides by $2$: $2A = bh$. Then divide by $b$: $h = \\frac{2A}{b}$. The $\\frac{1}{2}$ was multiplying, so it leaves by multiplication — the $2$ ends up on top, not on the bottom.',
    },
    {
      q: 'The distance formula is $d = rt$. Solve for $t$.',
      choices: ['$t = dr$', '$t = \\frac{r}{d}$', '$t = \\frac{d}{r}$', '$t = d - r$'],
      answer: 2,
      solution: 'Divide both sides by $r$: $t = \\frac{d}{r}$. It makes sense: time is distance divided by speed. Going $120$ miles at $60$ mph takes $\\frac{120}{60} = 2$ hours. ✓',
    },
    {
      q: 'Solve $c = 5d - 3e$ for $d$.',
      choices: ['$d = \\frac{c + 3e}{5}$', '$d = \\frac{c - 3e}{5}$', '$d = 5(c + 3e)$', '$d = \\frac{c}{5} + 3e$'],
      answer: 0,
      solution: 'Add $3e$ to both sides: $c + 3e = 5d$. Then divide everything by $5$: $d = \\frac{c + 3e}{5}$. The $3e$ was subtracted, so it crosses over as $+3e$ — and it must join the $c$ BEFORE the division, so it lands inside the fraction.',
    },
    {
      q: 'Solve $\\frac{x + y}{3} = z$ for $y$.',
      choices: ['$y = 3z + x$', '$y = 3z - x$', '$y = \\frac{z}{3} - x$', '$y = 3(z - x)$'],
      answer: 1,
      solution: 'Undo the division first: multiply both sides by $3$ to get $x + y = 3z$. Then subtract $x$: $y = 3z - x$. Check with $x = 1$, $y = 5$: then $z = 2$, and $3(2) - 1 = 5$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'Evaluate $(2x - y)^2$ when $x = -1$ and $y = 3$.',
    choices: ['$-25$', '$25$', '$1$', '$5$'],
    answer: 1,
    solution: 'Inside the parentheses first: $2(-1) - 3 = -2 - 3 = -5$. Then square: $(-5)^2 = 25$. Squaring a negative gives a positive.',
  },
  {
    q: 'Simplify $4x^2y - 2xy^2 + 3xy^2 - x^2y$.',
    choices: ['$3x^2y + xy^2$', '$4x^2y^2$', '$3x^2y - 5xy^2$', '$5x^2y + xy^2$'],
    answer: 0,
    solution: 'Sort into families: the $x^2y$ terms give $4 - 1 = 3$, and the $xy^2$ terms give $-2 + 3 = 1$. So the answer is $3x^2y + xy^2$. Test $x = 2$, $y = 1$: the original is $16 - 4 + 6 - 4 = 14$, and $3(4)(1) + (2)(1) = 14$. ✓',
  },
  {
    q: 'Expand $(x + y)(x + 2)$.',
    choices: ['$x^2 + 2y$', '$x^2 + xy + 2y$', '$x^2 + 2xy + 2y$', '$x^2 + 2x + xy + 2y$'],
    answer: 3,
    solution: 'Four products: $x \\cdot x = x^2$, $x \\cdot 2 = 2x$, $y \\cdot x = xy$, $y \\cdot 2 = 2y$. No two of these are like terms, so all four stay: $x^2 + 2x + xy + 2y$.',
  },
  {
    q: 'Factor $12a^2b - 18ab$.',
    choices: ['$6ab(2a - 3)$', '$6ab(2a - 3b)$', '$6b(2a - 3)$', '$6ab(2ab - 3)$'],
    answer: 0,
    solution: 'Both terms share $6ab$. Dividing: $\\frac{12a^2b}{6ab} = 2a$ and $\\frac{18ab}{6ab} = 3$, so the factored form is $6ab(2a - 3)$. Check by expanding: $12a^2b - 18ab$. ✓',
  },
  {
    q: 'Simplify $\\frac{9x^2y}{12xy}$.',
    choices: ['$\\frac{3xy}{4}$', '$\\frac{3x}{4y}$', '$\\frac{3x}{4}$', '$\\frac{4}{3x}$'],
    answer: 2,
    solution: 'Cancel a $3$ from the numbers, one $x$ from the $x^2$, and the whole $y$: $\\frac{9x^2y}{12xy} = \\frac{3x}{4}$. The $y$ appears once on top and once on the bottom, so it cancels completely.',
  },
  {
    q: 'Simplify $\\frac{2a}{5} \\cdot \\frac{15}{4a}$.',
    choices: ['$\\frac{3a}{2}$', '$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{3}{2a}$'],
    answer: 1,
    solution: 'Multiply straight across: $\\frac{2a \\cdot 15}{5 \\cdot 4a} = \\frac{30a}{20a}$. Cancel $10a$: $\\frac{30a}{20a} = \\frac{3}{2}$. The variable cancels out entirely, leaving a pure number.',
  },
  {
    q: 'If $a = 2$, $b = -1$, and $c = 3$, evaluate $ab + bc + ca$.',
    choices: ['$1$', '$-1$', '$11$', '$-11$'],
    answer: 0,
    solution: 'Compute each product with its signs: $ab = (2)(-1) = -2$, then $bc = (-1)(3) = -3$, then $ca = (3)(2) = 6$. Adding: $-2 + (-3) + 6 = 1$.',
  },
  {
    q: 'Solve $4x - 2y = 10$ for $y$.',
    choices: ['$y = 2x + 5$', '$y = 5 - 2x$', '$y = 4x - 5$', '$y = 2x - 5$'],
    answer: 3,
    solution: 'Subtract $4x$: $-2y = 10 - 4x$. Divide by $-2$, flipping every sign: $y = \\frac{10 - 4x}{-2} = 2x - 5$. Check with $x = 3$: the formula gives $y = 1$, and $4(3) - 2(1) = 10$. ✓',
  },
  {
    q: 'The perimeter of a rectangle is $P = 2l + 2w$. Solve for $w$.',
    choices: ['$w = P - 2l$', '$w = \\frac{P - 2l}{2}$', '$w = \\frac{P + 2l}{2}$', '$w = 2P - l$'],
    answer: 1,
    solution: 'Subtract $2l$ from both sides: $P - 2l = 2w$. Then divide by $2$: $w = \\frac{P - 2l}{2}$. Check with $l = 3$, $w = 2$: then $P = 10$, and $\\frac{10 - 6}{2} = 2$. ✓',
  },
  {
    q: 'Which expression is equal to $\\frac{x + y}{x}$?',
    choices: ['$y$', '$1 + y$', '$1 + \\frac{y}{x}$', '$\\frac{y}{x}$'],
    answer: 2,
    solution: 'Split the fraction term by term: $\\frac{x + y}{x} = \\frac{x}{x} + \\frac{y}{x} = 1 + \\frac{y}{x}$. The $x$s cancel only in the first piece, where $x$ is a factor of the whole term — never across the plus sign. Test $x = 2$, $y = 4$: original is $\\frac{6}{2} = 3$, and $1 + \\frac{4}{2} = 3$. ✓',
  },
  {
    q: 'Simplify $2(3x + y) - 3(x - y)$.',
    choices: ['$3x - y$', '$9x + 5y$', '$3x - 5y$', '$3x + 5y$'],
    answer: 3,
    solution: 'Distribute both, watching signs: $2(3x + y) = 6x + 2y$ and $-3(x - y) = -3x + 3y$. Combine: $6x - 3x = 3x$ and $2y + 3y = 5y$, giving $3x + 5y$. The $-3$ times $-y$ turns positive — that flip is where $3x - y$ goes astray.',
  },
  {
    q: 'The Fahrenheit formula is $F = \\frac{9}{5}C + 32$. Solve for $C$.',
    choices: ['$C = \\frac{5}{9}(F - 32)$', '$C = \\frac{9}{5}(F - 32)$', '$C = \\frac{5}{9}F - 32$', '$C = \\frac{5}{9}F + 32$'],
    answer: 0,
    solution: 'Undo the operations in reverse order. The $+32$ came last, so subtract it first: $F - 32 = \\frac{9}{5}C$. Then multiply by the reciprocal $\\frac{5}{9}$: $C = \\frac{5}{9}(F - 32)$. The parentheses matter — the whole quantity $F - 32$ gets scaled. Check: $F = 212$ gives $C = \\frac{5}{9}(180) = 100$, boiling. ✓',
  },
]

const worksheet = [
  {
    q: 'Evaluate $2x + 3y$ when $x = 5$ and $y = -2$.',
    answer: '$4$',
    solution: 'Substitute with parentheses: $2(5) + 3(-2) = 10 + (-6) = 4$.',
  },
  {
    q: 'Simplify $7ab - 2ab + 4a$.',
    answer: '$5ab + 4a$',
    solution: 'Combine the like terms $7ab - 2ab = 5ab$. The $4a$ has no partner — $ab$ and $a$ are different families — so it stays: $5ab + 4a$.',
  },
  {
    q: 'Expand $4x(2y - 3z)$.',
    answer: '$8xy - 12xz$',
    solution: 'The $4x$ multiplies each term: $4x \\cdot 2y = 8xy$ and $4x \\cdot (-3z) = -12xz$.',
  },
  {
    q: 'Factor $10mn + 15m$.',
    answer: '$5m(2n + 3)$',
    solution: 'Both terms share $5m$. Dividing it out leaves $2n$ and $3$: $10mn + 15m = 5m(2n + 3)$. Expand to check: $10mn + 15m$. ✓',
  },
  {
    q: 'Simplify $\\frac{8x^2y}{12xy}$.',
    answer: '$\\frac{2x}{3}$',
    solution: 'Cancel a $4$ from the numbers, one $x$ from the $x^2$, and the whole $y$: $\\frac{8x^2y}{12xy} = \\frac{2x}{3}$.',
  },
  {
    q: 'Solve $x + 5y = 20$ for $x$.',
    answer: '$x = 20 - 5y$',
    solution: 'Subtract $5y$ from both sides: $x = 20 - 5y$. Check with $y = 2$: then $x = 10$, and $10 + 5(2) = 20$. ✓',
  },
  {
    q: 'Simplify $(3a + 2b) - (a - 4b) + (2a - b)$.',
    answer: '$4a + 5b$',
    solution: 'Flip the signs in the subtracted parentheses: $3a + 2b - a + 4b + 2a - b$. The $a$ terms: $3 - 1 + 2 = 4$. The $b$ terms: $2 + 4 - 1 = 5$. So the answer is $4a + 5b$. Check with $a = 1$, $b = 1$: the original is $5 - (-3) + 1 = 9$, and $4 + 5 = 9$. ✓',
  },
  {
    q: 'Add $\\frac{a}{4} + \\frac{b}{6}$.',
    answer: '$\\frac{3a + 2b}{12}$',
    solution: 'The least common denominator of $4$ and $6$ is $12$. Convert: $\\frac{a}{4} = \\frac{3a}{12}$ and $\\frac{b}{6} = \\frac{2b}{12}$. Add the tops: $\\frac{3a + 2b}{12}$.',
  },
  {
    q: 'The volume of a box is $V = lwh$. Solve for $w$.',
    answer: '$w = \\frac{V}{lh}$',
    solution: 'The $w$ is multiplied by both $l$ and $h$, so divide both sides by $lh$: $w = \\frac{V}{lh}$. Check with $l = 2$, $w = 3$, $h = 4$: then $V = 24$, and $\\frac{24}{2 \\cdot 4} = 3$. ✓',
  },
  {
    q: 'Evaluate $x^2y - xy^2 + xy$ when $x = 3$ and $y = -2$.',
    answer: '$-36$',
    solution: 'Term by term: $x^2y = (9)(-2) = -18$; then $xy^2 = (3)(4) = 12$, so $-xy^2 = -12$; then $xy = (3)(-2) = -6$. Adding: $-18 - 12 - 6 = -36$. Notice how $y^2 = (-2)^2 = 4$ is positive even though $y$ is negative.',
  },
]

export default {
  id: 'intro-algebra-ch04',
  book: 'intro-algebra',
  number: 4,
  title: 'More Variables',
  intro:
    'One variable is company — two or three are a party! In this chapter your algebra toolkit grows to handle expressions with several variables at once: evaluating them, combining them, factoring them, and rearranging whole formulas. These are the exact skills that make real formulas, from triangle areas to temperature conversions, bend to your will.',
  sections: [s41, s42, s43, s44, s45],
  challenge,
  worksheet,
}
