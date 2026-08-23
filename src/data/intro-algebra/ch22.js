// Introduction to Algebra — Chapter 22: Special Manipulations
// All problems, explanations, and examples are original MathQuest content.

const s221 = {
  id: '22.1',
  title: 'Raising Equations to Powers',
  learn: {
    concepts: [
      {
        heading: 'Squaring unlocks the radical',
        body: 'If two quantities are equal, their squares are equal: whenever $a = b$, we also have $a^2 = b^2$. This is our key for radical equations — squaring both sides of $\\sqrt{2x+3} = 5$ turns it into the friendly equation $2x + 3 = 25$. Cube roots surrender to cubing in exactly the same way.',
      },
      {
        heading: 'Squaring can invent solutions',
        body: 'Here is the catch: the reverse is not true! From $a^2 = b^2$ we cannot conclude $a = b$, because $a$ might equal $-b$ instead. (Both $3^2$ and $(-3)^2$ are $9$.) So squaring an equation can create extra "solutions" that do not satisfy the original — we call these extraneous roots. The safety rule: after squaring, always check every candidate in the ORIGINAL equation.',
      },
      {
        heading: 'Two radicals? Square twice',
        body: 'When an equation has two square roots, one squaring usually leaves a radical behind. The plan: isolate one radical, square, tidy up, isolate the remaining radical, and square again. Two rounds of squaring means two chances to create extraneous roots — so checking at the end matters even more.',
      },
      {
        heading: 'The $x + \\frac{1}{x}$ family',
        body: 'Powers can build information, not just remove radicals. If $x + \\frac{1}{x} = k$, squaring gives $x^2 + 2 + \\frac{1}{x^2} = k^2$, so $x^2 + \\frac{1}{x^2} = k^2 - 2$ — we found $x^2 + \\frac{1}{x^2}$ without ever finding $x$! Cubing gives $x^3 + \\frac{1}{x^3} = k^3 - 3k$ by the same spirit. Watch for that middle term: it is where the magic $-2$ and $-3k$ come from.',
      },
    ],
    examples: [
      {
        problem: 'Solve $\\sqrt{2x + 3} = 5$.',
        steps: [
          'Square both sides to remove the radical: $2x + 3 = 25$.',
          'Solve the linear equation: $2x = 22$, so $x = 11$.',
          'Check in the original: $\\sqrt{2(11) + 3} = \\sqrt{25} = 5$. ✓',
        ],
        answer: '$x = 11$',
      },
      {
        problem: 'Solve $\\sqrt{x + 6} = x$.',
        steps: [
          'Square both sides: $x + 6 = x^2$, which rearranges to $x^2 - x - 6 = 0$.',
          'Factor: $(x - 3)(x + 2) = 0$, giving candidates $x = 3$ and $x = -2$.',
          'Check $x = 3$: $\\sqrt{9} = 3$. ✓ Check $x = -2$: $\\sqrt{4} = 2$, but the right side is $-2$. A square root is never negative, so $x = -2$ is extraneous.',
        ],
        answer: '$x = 3$ (the candidate $x = -2$ is extraneous)',
      },
      {
        problem: 'If $x + \\frac{1}{x} = 4$, find $x^2 + \\frac{1}{x^2}$.',
        steps: [
          'Square both sides: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = 16$.',
          'The middle term is just $2$, since $x \\cdot \\frac{1}{x} = 1$.',
          'So $x^2 + \\frac{1}{x^2} = 16 - 2 = 14$ — no need to find $x$ itself!',
        ],
        answer: '$x^2 + \\frac{1}{x^2} = 14$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $\\sqrt{x} = 7$.',
      choices: ['$7$', '$14$', '$49$', '$\\sqrt{7}$'],
      answer: 2,
      solution: 'Square both sides: $x = 7^2 = 49$. Check: $\\sqrt{49} = 7$. ✓ Squaring is the move that undoes a square root.',
    },
    {
      q: 'Solve $\\sqrt{3x + 1} = 4$.',
      choices: ['$5$', '$1$', '$\\frac{17}{3}$', '$15$'],
      answer: 0,
      solution: 'Square both sides: $3x + 1 = 16$. Then $3x = 15$, so $x = 5$. Check: $\\sqrt{3(5) + 1} = \\sqrt{16} = 4$. ✓ (Careful: $15$ is the value of $3x$, not of $x$.)',
    },
    {
      q: 'Squaring the equation $\\sqrt{x + 2} = x$ produces the candidates $x = 2$ and $x = -1$. Which is extraneous?',
      choices: ['$x = 2$', '$x = -1$', 'Both are extraneous', 'Neither is extraneous'],
      answer: 1,
      solution: 'Check each in the original. For $x = 2$: $\\sqrt{4} = 2$. ✓ For $x = -1$: $\\sqrt{1} = 1$, but the right side is $-1$. A square root is never negative, so $x = -1$ is the extraneous one — it was invented by the squaring step.',
    },
    {
      q: 'If $x + \\frac{1}{x} = 3$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$9$', '$11$', '$3$', '$7$'],
      answer: 3,
      solution: 'Square: $x^2 + 2 + \\frac{1}{x^2} = 9$, so $x^2 + \\frac{1}{x^2} = 9 - 2 = 7$. The answer $9$ forgets the cross term $2 \\cdot x \\cdot \\frac{1}{x} = 2$ that appears when squaring.',
    },
    {
      q: 'Solve $\\sqrt{x + 7} = x - 5$.',
      choices: ['$x = 9$ only', '$x = 2$ only', 'Both $x = 2$ and $x = 9$', 'No solution'],
      answer: 0,
      solution: 'Square: $x + 7 = x^2 - 10x + 25$, so $x^2 - 11x + 18 = 0$, which factors as $(x - 2)(x - 9) = 0$. Check $x = 9$: $\\sqrt{16} = 4$ and $9 - 5 = 4$. ✓ Check $x = 2$: $\\sqrt{9} = 3$, but $2 - 5 = -3$. That candidate is extraneous, so only $x = 9$ works.',
    },
    {
      q: 'Solve $\\sqrt[3]{2x - 5} = 3$.',
      choices: ['$7$', '$11$', '$16$', '$4$'],
      answer: 2,
      solution: 'Cube both sides: $2x - 5 = 27$, so $2x = 32$ and $x = 16$. Check: $\\sqrt[3]{27} = 3$. ✓ Bonus fact: cubing never creates extraneous roots, because every number has exactly one real cube root. ($7$ comes from squaring instead of cubing.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 5$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$125$', '$110$', '$115$', '$140$'],
      answer: 1,
      solution: 'Cube the given: $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$. So $125 = x^3 + \\frac{1}{x^3} + 3(5)$, giving $x^3 + \\frac{1}{x^3} = 125 - 15 = 110$. The answer $125$ ignores the three cross terms from expanding the cube.',
    },
    {
      q: 'How many solutions does $\\sqrt{2x + 7} - \\sqrt{x + 3} = 1$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 2,
      solution: 'Isolate a radical: $\\sqrt{2x + 7} = 1 + \\sqrt{x + 3}$. Square: $2x + 7 = 1 + 2\\sqrt{x + 3} + x + 3$, so $x + 3 = 2\\sqrt{x + 3}$. Square again: $(x + 3)^2 = 4(x + 3)$, so $x + 3 = 0$ or $x + 3 = 4$, giving $x = -3$ or $x = 1$. Check both: $\\sqrt{1} - \\sqrt{0} = 1$ ✓ and $\\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$ ✓. This time neither candidate is extraneous — there are $2$ solutions.',
    },
    {
      q: 'If $x - \\frac{1}{x} = 3$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$7$', '$9$', '$13$', '$11$'],
      answer: 3,
      solution: 'Square the given: $x^2 - 2 + \\frac{1}{x^2} = 9$. This time the cross term is $-2$ (from $2 \\cdot x \\cdot \\left(-\\frac{1}{x}\\right)$), so it moves to the other side with a plus: $x^2 + \\frac{1}{x^2} = 9 + 2 = 11$. The minus in the given flips the usual $-2$ into a $+2$!',
    },
    {
      q: 'If $x + \\frac{1}{x} = 4$, what is $x^4 + \\frac{1}{x^4}$?',
      choices: ['$196$', '$194$', '$254$', '$192$'],
      answer: 1,
      solution: 'Square twice! First: $x^2 + \\frac{1}{x^2} = 4^2 - 2 = 14$. Now square THAT: $x^4 + 2 + \\frac{1}{x^4} = 14^2 = 196$, so $x^4 + \\frac{1}{x^4} = 196 - 2 = 194$. Each squaring costs a $2$ — forgetting the second one gives $196$.',
    },
  ],
}

const s222 = {
  id: '22.2',
  title: 'Self-similarity',
  learn: {
    concepts: [
      {
        heading: 'The expression contains itself',
        body: 'Look closely at $\\sqrt{6 + \\sqrt{6 + \\sqrt{6 + \\cdots}}}$. Under the first radical sits $6$ plus... the exact same infinite expression! An object that contains a copy of itself is called self-similar, and that copy is a gift: name the whole thing $x$, and the equation practically writes itself.',
      },
      {
        heading: 'Name it, then substitute',
        body: 'Let $x = \\sqrt{6 + \\sqrt{6 + \\cdots}}$. Since everything under the outer radical is $6$ plus another copy of $x$, we get $x = \\sqrt{6 + x}$. Squaring gives $x^2 = 6 + x$ — an ordinary quadratic. The same trick tames infinite continued fractions like $1 + \\frac{1}{1 + \\frac{1}{1 + \\cdots}}$: calling it $x$ gives $x = 1 + \\frac{1}{x}$.',
      },
      {
        heading: 'Pick the root that makes sense',
        body: 'The quadratic usually offers two roots, but the infinite expression has only one value. A tower of square roots of positive numbers is positive, so throw away any negative root. For $x^2 = 6 + x$ the roots are $3$ and $-2$, and only $x = 3$ can be the value of a square root. The rejected root is the algebra offering you an option the original expression never had.',
      },
      {
        heading: 'Power towers, gently',
        body: 'The same naming trick handles an infinite tower of exponents. If $x^{x^{x^{\\cdot^{\\cdot^{\\cdot}}}}} = 2$, notice the tower sitting on top of the bottom $x$ is the whole tower again — so it equals $2$, and the equation collapses to $x^2 = 2$, giving $x = \\sqrt{2}$. One honest name for the infinite part, and the mystery dissolves.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $\\sqrt{6 + \\sqrt{6 + \\sqrt{6 + \\cdots}}}$.',
        steps: [
          'Let $x$ be the whole expression. The part under the first radical is $6 + x$, so $x = \\sqrt{6 + x}$.',
          'Square: $x^2 = 6 + x$, so $x^2 - x - 6 = 0$, which factors as $(x - 3)(x + 2) = 0$.',
          'The roots are $3$ and $-2$, but a square root cannot be negative — so the value is $3$.',
        ],
        answer: '$\\sqrt{6 + \\sqrt{6 + \\cdots}} = 3$',
      },
      {
        problem: 'Evaluate the infinite continued fraction $2 + \\frac{1}{2 + \\frac{1}{2 + \\cdots}}$.',
        steps: [
          'Name it $x$. The denominator after the first "$2 +$" is the whole fraction again, so $x = 2 + \\frac{1}{x}$.',
          'Multiply by $x$: $x^2 = 2x + 1$, so $x^2 - 2x - 1 = 0$.',
          'The quadratic formula gives $x = 1 \\pm \\sqrt{2}$. The expression is clearly bigger than $2$, so $x = 1 + \\sqrt{2}$.',
        ],
        answer: '$2 + \\frac{1}{2 + \\frac{1}{2 + \\cdots}} = 1 + \\sqrt{2}$',
      },
      {
        problem: 'If $x^{x^{x^{\\cdot^{\\cdot^{\\cdot}}}}} = 2$, find $x$.',
        steps: [
          'The tower of exponents above the bottom $x$ is the entire tower again, and the entire tower equals $2$.',
          'So the equation collapses to $x^2 = 2$, giving $x = \\sqrt{2}$ (a base of a tower like this should be positive).',
        ],
        answer: '$x = \\sqrt{2}$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $\\sqrt{12 + \\sqrt{12 + \\sqrt{12 + \\cdots}}}$.',
      choices: ['$-3$', '$4$', '$3$', '$6$'],
      answer: 1,
      solution: 'Let $x$ be the expression: $x = \\sqrt{12 + x}$, so $x^2 = 12 + x$, giving $x^2 - x - 12 = 0$, or $(x - 4)(x + 3) = 0$. A square root cannot be negative, so we keep $x = 4$ and reject $-3$. Check: $\\sqrt{12 + 4} = \\sqrt{16} = 4$. ✓',
    },
    {
      q: 'Evaluate $\\sqrt{20 + \\sqrt{20 + \\sqrt{20 + \\cdots}}}$.',
      choices: ['$4$', '$-4$', '$2\\sqrt{5}$', '$5$'],
      answer: 3,
      solution: 'Setting $x = \\sqrt{20 + x}$ and squaring gives $x^2 - x - 20 = 0$, or $(x - 5)(x + 4) = 0$. The positive root is $x = 5$. ($2\\sqrt{5}$ is the value of a single $\\sqrt{20}$ — the infinite nesting pushes the value up to $5$.)',
    },
    {
      q: 'To evaluate $x = \\sqrt{30 + \\sqrt{30 + \\cdots}}$, which equation should you solve?',
      choices: ['$x^2 = 30 + x$', '$x^2 = 30x$', '$x = 30 + x^2$', '$x^2 = 30 - x$'],
      answer: 0,
      solution: 'The expression under the outer radical is $30$ plus a copy of the whole expression, so $x = \\sqrt{30 + x}$. Squaring gives $x^2 = 30 + x$. The self-similarity is what lets us replace the infinite tail with a single $x$.',
    },
    {
      q: 'Evaluate $1 + \\frac{1}{1 + \\frac{1}{1 + \\cdots}}$.',
      choices: ['$\\frac{3}{2}$', '$\\frac{1 - \\sqrt{5}}{2}$', '$\\frac{1 + \\sqrt{5}}{2}$', '$\\sqrt{5}$'],
      answer: 2,
      solution: 'Name it $x$: the denominator is the whole fraction again, so $x = 1 + \\frac{1}{x}$, giving $x^2 - x - 1 = 0$ and $x = \\frac{1 \\pm \\sqrt{5}}{2}$. The expression is clearly bigger than $1$, so $x = \\frac{1 + \\sqrt{5}}{2}$ — the famous golden ratio, about $1.618$.',
    },
    {
      q: 'Evaluate $\\sqrt{2 + \\sqrt{2 + \\sqrt{2 + \\cdots}}}$.',
      choices: ['$2$', '$-1$', '$\\sqrt{2}$', '$4$'],
      answer: 0,
      solution: 'From $x = \\sqrt{2 + x}$ we get $x^2 - x - 2 = 0$, or $(x - 2)(x + 1) = 0$. Keeping the positive root gives $x = 2$. Surprising but true: nesting $2$s forever produces exactly $2$. Check: $\\sqrt{2 + 2} = 2$. ✓',
    },
    {
      q: 'Evaluate $\\sqrt{6 - \\sqrt{6 - \\sqrt{6 - \\cdots}}}$ (note the minus signs).',
      choices: ['$-3$', '$3$', '$\\sqrt{6}$', '$2$'],
      answer: 3,
      solution: 'Let $x$ be the expression: $x = \\sqrt{6 - x}$, so $x^2 = 6 - x$, giving $x^2 + x - 6 = 0$, or $(x + 3)(x - 2) = 0$. The value of a square root must be positive, so $x = 2$. Check: $\\sqrt{6 - 2} = \\sqrt{4} = 2$. ✓ The minus sign flips the quadratic, so $3$ (the answer for the all-plus version) is a trap here.',
    },
    {
      q: 'Evaluate $3 + \\frac{1}{3 + \\frac{1}{3 + \\cdots}}$.',
      choices: ['$\\frac{3 + \\sqrt{5}}{2}$', '$\\frac{3 + \\sqrt{13}}{2}$', '$\\frac{3 - \\sqrt{13}}{2}$', '$\\frac{10}{3}$'],
      answer: 1,
      solution: 'From $x = 3 + \\frac{1}{x}$ we get $x^2 - 3x - 1 = 0$, so $x = \\frac{3 \\pm \\sqrt{9 + 4}}{2} = \\frac{3 \\pm \\sqrt{13}}{2}$. The expression exceeds $3$, so take the plus sign: $x = \\frac{3 + \\sqrt{13}}{2} \\approx 3.30$. ($\\frac{10}{3}$ is only the value after cutting the fraction off early — the true infinite value is irrational.)',
    },
    {
      q: 'For what value of $k$ does $\\sqrt{k + \\sqrt{k + \\sqrt{k + \\cdots}}} = 6$?',
      choices: ['$36$', '$6$', '$30$', '$42$'],
      answer: 2,
      solution: 'The self-similar equation is $x = \\sqrt{k + x}$ with $x = 6$: squaring gives $36 = k + 6$, so $k = 30$. Check: $x^2 - x - 30 = (x - 6)(x + 5)$, positive root $6$. ✓ The answer $36$ forgets that one copy of $x$ hides under the radical.',
    },
    {
      q: 'Evaluate $\\sqrt{12\\sqrt{12\\sqrt{12\\cdots}}}$ (each radical MULTIPLIES the next).',
      choices: ['$12$', '$2\\sqrt{3}$', '$6$', '$144$'],
      answer: 0,
      solution: 'Name the whole expression $x$. Inside the first radical sits $12$ times a copy of $x$, so $x = \\sqrt{12x}$. Squaring: $x^2 = 12x$, so $x(x - 12) = 0$. The expression is certainly positive, so $x = 12$. Check: $\\sqrt{12 \\cdot 12} = 12$. ✓ Multiplication inside pushes the value all the way up to $12$ itself.',
    },
    {
      q: 'Evaluate $\\frac{1}{2 + \\frac{1}{2 + \\frac{1}{2 + \\cdots}}}$ (the whole expression is a fraction with numerator $1$).',
      choices: ['$\\frac{1}{2}$', '$\\sqrt{2} + 1$', '$\\frac{\\sqrt{2}}{2}$', '$\\sqrt{2} - 1$'],
      answer: 3,
      solution: 'Call it $x$. The denominator is $2$ plus a copy of $x$, so $x = \\frac{1}{2 + x}$. Multiply out: $x^2 + 2x - 1 = 0$, so $x = -1 \\pm \\sqrt{2}$. The expression is positive, so $x = \\sqrt{2} - 1 \\approx 0.414$. (Its reciprocal, $\\sqrt{2} + 1$, is the value of the denominator $2 + x$ — a neat pair!)',
    },
  ],
}

const s223 = {
  id: '22.3',
  title: 'Symmetry',
  learn: {
    concepts: [
      {
        heading: 'Expressions that survive a swap',
        body: 'An expression in $x$ and $y$ is symmetric if swapping $x$ and $y$ leaves it unchanged. So $x + y$, $xy$, $x^2 + y^2$, and $\\frac{1}{x} + \\frac{1}{y}$ are all symmetric, but $x - y$ is not (the swap flips its sign). Here is the big theorem-flavored fact: every symmetric expression can be built out of just the sum $x + y$ and the product $xy$.',
      },
      {
        heading: 'The workhorse identities',
        body: 'Three conversions do most of the work: $x^2 + y^2 = (x + y)^2 - 2xy$, next $(x - y)^2 = (x + y)^2 - 4xy$, and $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy}$. Each one turns a question about a complicated expression into simple arithmetic with the sum and the product.',
      },
      {
        heading: 'Cubes from sums and products',
        body: 'For cubes, expand $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$ and pull the middle terms together: $x^3 + y^3 = (x + y)^3 - 3xy(x + y)$. One line, and you can compute a sum of cubes knowing only $x + y$ and $xy$.',
      },
      {
        heading: 'Vieta hands you the sum and product',
        body: 'If $r$ and $s$ are the roots of $x^2 + bx + c = 0$, then $r + s = -b$ and $rs = c$ (this is Vieta’s relation). Combined with our identities, you can evaluate $r^2 + s^2$ or $r^3 + s^3$ for a quadratic WITHOUT ever solving it — even when the roots are ugly irrational numbers. And running Vieta backwards, two numbers with sum $s$ and product $p$ are the roots of $t^2 - st + p = 0$.',
      },
    ],
    examples: [
      {
        problem: 'If $x + y = 7$ and $xy = 10$, find $x^2 + y^2$, and then find $x$ and $y$ themselves.',
        steps: [
          'Use the identity: $x^2 + y^2 = (x + y)^2 - 2xy = 49 - 20 = 29$.',
          'To find the numbers, run Vieta backwards: they are the roots of $t^2 - 7t + 10 = 0$.',
          'Factor: $(t - 2)(t - 5) = 0$, so the numbers are $2$ and $5$. Check: $4 + 25 = 29$. ✓',
        ],
        answer: '$x^2 + y^2 = 29$; the numbers are $2$ and $5$',
      },
      {
        problem: 'If $x + y = 6$ and $xy = 4$, find $x^3 + y^3$.',
        steps: [
          'Use the cube identity: $x^3 + y^3 = (x + y)^3 - 3xy(x + y)$.',
          'Substitute: $6^3 - 3(4)(6) = 216 - 72 = 144$.',
          'Notice we never found $x$ or $y$ — they are irrational here, but the symmetric answer is a clean $144$.',
        ],
        answer: '$x^3 + y^3 = 144$',
      },
      {
        problem: 'Let $r$ and $s$ be the roots of $x^2 - 5x + 3 = 0$. Find $\\frac{1}{r} + \\frac{1}{s}$ without solving the quadratic.',
        steps: [
          'Vieta reads the coefficients: $r + s = 5$ and $rs = 3$.',
          'Combine the fractions: $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs} = \\frac{5}{3}$.',
        ],
        answer: '$\\frac{1}{r} + \\frac{1}{s} = \\frac{5}{3}$',
      },
    ],
  },
  problems: [
    {
      q: 'If $x + y = 10$ and $xy = 21$, what is $x^2 + y^2$?',
      choices: ['$100$', '$58$', '$79$', '$142$'],
      answer: 1,
      solution: 'Use $x^2 + y^2 = (x + y)^2 - 2xy = 100 - 42 = 58$. The answer $100$ forgets to subtract $2xy$, and $79$ subtracts only one copy of $xy$. Check with the actual numbers $3$ and $7$: $9 + 49 = 58$. ✓',
    },
    {
      q: 'Two numbers have sum $8$ and product $12$. What are they?',
      choices: ['$2$ and $6$', '$3$ and $4$', '$3$ and $5$', '$4$ and $4$'],
      answer: 0,
      solution: 'They are the roots of $t^2 - 8t + 12 = 0$, which factors as $(t - 2)(t - 6) = 0$: the numbers are $2$ and $6$. ($3$ and $4$ have the right product but sum $7$; $3$ and $5$ have the right sum but product $15$ — a correct pair must pass BOTH tests.)',
    },
    {
      q: 'If $x + y = 9$ and $xy = 4$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{1}{36}$', '$\\frac{9}{4}$', '$13$'],
      answer: 2,
      solution: 'Combine over a common denominator: $\\frac{1}{x} + \\frac{1}{y} = \\frac{y + x}{xy} = \\frac{9}{4}$. The sum goes on TOP and the product on the bottom — $\\frac{4}{9}$ is the upside-down trap.',
    },
    {
      q: 'Which expression is NOT symmetric in $x$ and $y$ (that is, it changes when $x$ and $y$ swap)?',
      choices: ['$x^2 + y^2$', '$xy$', '$x + y$', '$x - y$'],
      answer: 3,
      solution: 'Swapping turns $x - y$ into $y - x$, which is its negation — so it changes (unless it happens to be $0$). The other three are unchanged by the swap. This is why $x - y$ cannot be written using only $x + y$ and $xy$, though its SQUARE can: $(x - y)^2 = (x + y)^2 - 4xy$.',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 6x + 2 = 0$. What is $r^2 + s^2$?',
      choices: ['$32$', '$36$', '$34$', '$40$'],
      answer: 0,
      solution: 'Vieta: $r + s = 6$ and $rs = 2$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 36 - 4 = 32$. No need to touch the quadratic formula — the roots are irrational, but their symmetric combination is a whole number.',
    },
    {
      q: 'If $x + y = 5$ and $xy = 3$, what is $(x - y)^2$?',
      choices: ['$19$', '$37$', '$13$', '$22$'],
      answer: 2,
      solution: 'Expand: $(x - y)^2 = x^2 - 2xy + y^2 = (x + y)^2 - 4xy = 25 - 12 = 13$. The difference identity needs $4xy$, not $2xy$ — subtracting only $2xy$ gives $19$, which is $x^2 + y^2$ instead.',
    },
    {
      q: 'If $x + y = 4$ and $xy = 1$, what is $x^3 + y^3$?',
      choices: ['$64$', '$52$', '$76$', '$60$'],
      answer: 1,
      solution: 'Use $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 64 - 3(1)(4) = 64 - 12 = 52$. The answer $64$ is the classic slip of hoping $(x + y)^3$ equals $x^3 + y^3$ — the three middle terms of the expansion must be subtracted off.',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 7x + 4 = 0$. What is $(r + 2)(s + 2)$?',
      choices: ['$15$', '$18$', '$25$', '$22$'],
      answer: 3,
      solution: 'Expand first: $(r + 2)(s + 2) = rs + 2r + 2s + 4 = rs + 2(r + s) + 4$. Vieta gives $r + s = 7$ and $rs = 4$, so the value is $4 + 14 + 4 = 22$. Expanding turned an unfamiliar expression into pure sum-and-product material.',
    },
    {
      q: 'If $x + y = 6$ and $x^2 + y^2 = 20$, what is $x^3 + y^3$?',
      choices: ['$72$', '$120$', '$216$', '$144$'],
      answer: 0,
      solution: 'First recover the product: $(x + y)^2 = x^2 + 2xy + y^2$, so $36 = 20 + 2xy$, giving $xy = 8$. Then $x^3 + y^3 = 6^3 - 3(8)(6) = 216 - 144 = 72$. (Watch out: $(x + y)(x^2 + y^2) = 120$ is NOT $x^3 + y^3$ — that product has extra cross terms.) Check with the actual numbers $2$ and $4$: $8 + 64 = 72$. ✓',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 3x + 1 = 0$. What is $\\frac{r}{s} + \\frac{s}{r}$?',
      choices: ['$9$', '$7$', '$3$', '$11$'],
      answer: 1,
      solution: 'Combine: $\\frac{r}{s} + \\frac{s}{r} = \\frac{r^2 + s^2}{rs}$. Vieta gives $r + s = 3$ and $rs = 1$, so $r^2 + s^2 = 9 - 2 = 7$, and dividing by $rs = 1$ leaves $7$. Two layers of symmetry — the quotient sum reduced to sums and products all the way down.',
    },
  ],
}

const challenge = [
  {
    q: 'Solve $\\sqrt{3x + 10} = x + 2$.',
    choices: ['$x = 2$ only', '$x = -3$ only', 'Both $x = 2$ and $x = -3$', 'No solution'],
    answer: 0,
    solution: 'Square: $3x + 10 = x^2 + 4x + 4$, so $x^2 + x - 6 = 0$, or $(x + 3)(x - 2) = 0$. Check $x = 2$: $\\sqrt{16} = 4$ and $2 + 2 = 4$. ✓ Check $x = -3$: $\\sqrt{1} = 1$, but $-3 + 2 = -1$. Extraneous! Only $x = 2$ survives the check.',
  },
  {
    q: 'If $x + \\frac{1}{x} = 6$, what is $x^3 + \\frac{1}{x^3}$?',
    choices: ['$216$', '$234$', '$198$', '$180$'],
    answer: 2,
    solution: 'Cubing gives $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$, so $216 = x^3 + \\frac{1}{x^3} + 18$, giving $198$. In general the answer is $k^3 - 3k$ — the $216$ trap skips the correction term.',
  },
  {
    q: 'Evaluate $\\sqrt{42 + \\sqrt{42 + \\sqrt{42 + \\cdots}}}$.',
    choices: ['$6$', '$7$', '$-6$', '$\\sqrt{42}$'],
    answer: 1,
    solution: 'From $x = \\sqrt{42 + x}$: $x^2 - x - 42 = 0$, which factors as $(x - 7)(x + 6) = 0$. The positive root is $7$. Check: $\\sqrt{42 + 7} = \\sqrt{49} = 7$. ✓ Numbers of the form $n^2 - n$ under the radical always give the whole number $n$.',
  },
  {
    q: 'Evaluate $4 + \\frac{1}{4 + \\frac{1}{4 + \\cdots}}$.',
    choices: ['$2 - \\sqrt{5}$', '$\\frac{4 + \\sqrt{17}}{2}$', '$\\sqrt{5}$', '$2 + \\sqrt{5}$'],
    answer: 3,
    solution: 'From $x = 4 + \\frac{1}{x}$: $x^2 - 4x - 1 = 0$, so $x = \\frac{4 \\pm \\sqrt{16 + 4}}{2} = \\frac{4 \\pm \\sqrt{20}}{2} = 2 \\pm \\sqrt{5}$. The expression is bigger than $4$, so $x = 2 + \\sqrt{5} \\approx 4.24$. (The discriminant is $16 + 4$, not $16 + 1$ — the "$-1$" gets multiplied by $-4$ in $b^2 - 4ac$.)',
  },
  {
    q: 'If $x + y = 12$ and $xy = 27$, what is $|x - y|$?',
    choices: ['$36$', '$6$', '$9$', '$12$'],
    answer: 1,
    solution: 'Use $(x - y)^2 = (x + y)^2 - 4xy = 144 - 108 = 36$, so $|x - y| = \\sqrt{36} = 6$. Remember the final square root — $36$ is only the squared difference. (The numbers are $3$ and $9$, confirming $|3 - 9| = 6$.)',
  },
  {
    q: 'Let $r$ and $s$ be the roots of $2x^2 - 8x + 3 = 0$. What is $r^2 + s^2$?',
    choices: ['$13$', '$58$', '$16$', '$10$'],
    answer: 0,
    solution: 'With a leading coefficient of $2$, divide first: $r + s = \\frac{8}{2} = 4$ and $rs = \\frac{3}{2}$. Then $r^2 + s^2 = 16 - 2 \\cdot \\frac{3}{2} = 16 - 3 = 13$. Reading the sum as $8$ and the product as $3$ (forgetting to divide by the leading coefficient) leads to the trap $64 - 6 = 58$.',
  },
  {
    q: 'How many solutions does $\\sqrt{5 - x} = x - 3$ have?',
    choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
    answer: 1,
    solution: 'Square: $5 - x = x^2 - 6x + 9$, so $x^2 - 5x + 4 = 0$, or $(x - 1)(x - 4) = 0$. Check $x = 4$: $\\sqrt{1} = 1$ and $4 - 3 = 1$. ✓ Check $x = 1$: $\\sqrt{4} = 2$, but $1 - 3 = -2$. Extraneous. Exactly $1$ solution survives.',
  },
  {
    q: 'If $x - \\frac{1}{x} = 4$, what is $x^3 - \\frac{1}{x^3}$?',
    choices: ['$64$', '$52$', '$68$', '$76$'],
    answer: 3,
    solution: 'Cube the given: $\\left(x - \\frac{1}{x}\\right)^3 = x^3 - \\frac{1}{x^3} - 3\\left(x - \\frac{1}{x}\\right)$. So $64 = x^3 - \\frac{1}{x^3} - 12$, giving $x^3 - \\frac{1}{x^3} = 64 + 12 = 76$. With the minus version, the correction term gets ADDED — the mirror image of the plus family, where it is subtracted.',
  },
  {
    q: 'If $x^{x^{x^{\\cdot^{\\cdot^{\\cdot}}}}} = 2$, what is $x$?',
    choices: ['$2$', '$\\sqrt[4]{2}$', '$\\sqrt{2}$', '$\\frac{1}{2}$'],
    answer: 2,
    solution: 'The tower above the bottom $x$ is the whole tower, which equals $2$. So $x^2 = 2$, giving $x = \\sqrt{2}$. It really works: feeding $\\sqrt{2}$ into the tower over and over ($\\sqrt{2}$, then $\\sqrt{2}^{\\sqrt{2}} \\approx 1.63$, then $\\approx 1.76$, ...) climbs steadily toward exactly $2$.',
  },
  {
    q: 'If $x + y = 5$ and $x^2 + y^2 = 17$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
    choices: ['$\\frac{5}{4}$', '$\\frac{4}{5}$', '$\\frac{17}{4}$', '$\\frac{5}{17}$'],
    answer: 0,
    solution: 'First recover the product: $(x + y)^2 = x^2 + 2xy + y^2$ gives $25 = 17 + 2xy$, so $xy = 4$. Then $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy} = \\frac{5}{4}$. Two steps of symmetric bookkeeping, and the individual values of $x$ and $y$ never mattered.',
  },
  {
    q: 'Solve $\\sqrt{x + 5} + \\sqrt{x} = 5$.',
    choices: ['$16$', '$2$', '$4$', '$5$'],
    answer: 2,
    solution: 'Isolate: $\\sqrt{x + 5} = 5 - \\sqrt{x}$. Square: $x + 5 = 25 - 10\\sqrt{x} + x$, so $10\\sqrt{x} = 20$, giving $\\sqrt{x} = 2$ and $x = 4$. Check: $\\sqrt{9} + \\sqrt{4} = 3 + 2 = 5$. ✓ (Stopping at $\\sqrt{x} = 2$ and squaring wrong gives the trap $16$ — it is $x$ that equals $2^2$.)',
  },
  {
    q: 'Let $r$ and $s$ be the roots of $x^2 - 4x + 2 = 0$. What is $r^3 + s^3$?',
    choices: ['$64$', '$56$', '$88$', '$40$'],
    answer: 3,
    solution: 'Vieta: $r + s = 4$ and $rs = 2$. Then $r^3 + s^3 = (r + s)^3 - 3rs(r + s) = 64 - 3(2)(4) = 64 - 24 = 40$. The roots themselves are $2 \\pm \\sqrt{2}$ — messy — but their cubes sum to a clean $40$. That is the whole point of symmetric manipulation!',
  },
]

const worksheet = [
  {
    q: 'Solve $\\sqrt{4x + 9} = 5$.',
    answer: '$x = 4$',
    solution: 'Square both sides: $4x + 9 = 25$, so $4x = 16$ and $x = 4$. Check: $\\sqrt{16 + 9} = \\sqrt{25} = 5$. ✓',
  },
  {
    q: 'Evaluate $\\sqrt{30 + \\sqrt{30 + \\sqrt{30 + \\cdots}}}$.',
    answer: '$6$',
    solution: 'Let $x$ be the expression: $x = \\sqrt{30 + x}$, so $x^2 - x - 30 = 0$, or $(x - 6)(x + 5) = 0$. A square root must be positive, so $x = 6$. Check: $\\sqrt{30 + 6} = 6$. ✓',
  },
  {
    q: 'If $x + \\frac{1}{x} = 7$, find $x^2 + \\frac{1}{x^2}$.',
    answer: '$47$',
    solution: 'Square the given: $x^2 + 2 + \\frac{1}{x^2} = 49$, so $x^2 + \\frac{1}{x^2} = 49 - 2 = 47$. The $2$ comes from the cross term $2 \\cdot x \\cdot \\frac{1}{x}$.',
  },
  {
    q: 'If $x + y = 9$ and $xy = 14$, find $x^2 + y^2$.',
    answer: '$53$',
    solution: 'Use the identity $x^2 + y^2 = (x + y)^2 - 2xy = 81 - 28 = 53$. (The numbers are $2$ and $7$, and indeed $4 + 49 = 53$.)',
  },
  {
    q: 'Solve $\\sqrt{x + 12} = x$.',
    answer: '$x = 4$',
    solution: 'Square: $x + 12 = x^2$, so $x^2 - x - 12 = 0$, or $(x - 4)(x + 3) = 0$. Check $x = 4$: $\\sqrt{16} = 4$. ✓ Check $x = -3$: $\\sqrt{9} = 3 \\ne -3$, so $-3$ is extraneous. The only solution is $x = 4$.',
  },
  {
    q: 'Evaluate $5 + \\frac{1}{5 + \\frac{1}{5 + \\cdots}}$.',
    answer: '$\\frac{5 + \\sqrt{29}}{2}$',
    solution: 'Name it $x$: then $x = 5 + \\frac{1}{x}$, so $x^2 - 5x - 1 = 0$ and $x = \\frac{5 \\pm \\sqrt{25 + 4}}{2}$. The expression is bigger than $5$, so $x = \\frac{5 + \\sqrt{29}}{2} \\approx 5.19$.',
  },
  {
    q: 'If $x + y = 10$ and $xy = 5$, find $x^3 + y^3$.',
    answer: '$850$',
    solution: 'Use $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 1000 - 3(5)(10) = 1000 - 150 = 850$. The individual numbers are irrational, but the symmetric combination is a whole number.',
  },
  {
    q: 'Solve $\\sqrt{2x + 3} - \\sqrt{x - 2} = 2$. (Find ALL solutions.)',
    answer: '$x = 3$ and $x = 11$',
    solution: 'Isolate: $\\sqrt{2x + 3} = 2 + \\sqrt{x - 2}$. Square: $2x + 3 = 4 + 4\\sqrt{x - 2} + x - 2$, so $x + 1 = 4\\sqrt{x - 2}$. Square again: $x^2 + 2x + 1 = 16x - 32$, so $x^2 - 14x + 33 = 0$, or $(x - 3)(x - 11) = 0$. Check $x = 3$: $\\sqrt{9} - \\sqrt{1} = 2$. ✓ Check $x = 11$: $\\sqrt{25} - \\sqrt{9} = 2$. ✓ Both survive — two squarings do not ALWAYS create extraneous roots; that is exactly why we check instead of guessing.',
  },
  {
    q: 'Let $r$ and $s$ be the roots of $x^2 - 9x + 5 = 0$. Find $(r - 1)(s - 1)$ without solving the quadratic.',
    answer: '$-3$',
    solution: 'Expand: $(r - 1)(s - 1) = rs - r - s + 1 = rs - (r + s) + 1$. Vieta gives $r + s = 9$ and $rs = 5$, so the value is $5 - 9 + 1 = -3$. (A slick alternative: $(r - 1)(s - 1)$ is the quadratic evaluated at $x = 1$, and $1 - 9 + 5 = -3$.)',
  },
  {
    q: 'If $x + \\frac{1}{x} = 3$, find $x^4 + \\frac{1}{x^4}$.',
    answer: '$47$',
    solution: 'Square twice. First: $x^2 + \\frac{1}{x^2} = 3^2 - 2 = 7$. Then square that result: $x^4 + 2 + \\frac{1}{x^4} = 49$, so $x^4 + \\frac{1}{x^4} = 47$. Each squaring produces a cross term of $2$ that must be subtracted.',
  },
]

export default {
  id: 'intro-algebra-ch22',
  book: 'intro-algebra',
  number: 22,
  title: 'Special Manipulations',
  intro:
    'Here we are — the final chapter of Introduction to Algebra! You have earned a victory lap, and this one is pure problem-solving: three power moves (raising to powers, exploiting self-similarity, and riding symmetry) that crack problems which look impossible at first glance. Bring everything you have learned, and enjoy how often a monster expression collapses into a one-line answer.',
  sections: [s221, s222, s223],
  challenge,
  worksheet,
}
