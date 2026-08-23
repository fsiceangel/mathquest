// Introduction to Algebra — Chapter 15: More Inequalities
// All problems, explanations, and examples are original MathQuest content.

const s151 = {
  id: '15.1',
  title: 'Quadratic Inequalities',
  learn: {
    concepts: [
      {
        heading: 'Get zero on one side, then factor',
        body: 'To solve a quadratic inequality like $x^2 - 5x + 6 < 0$, first move everything to one side so you are comparing to $0$, then factor: $(x-2)(x-3) < 0$. Now the question becomes a sign question: when is this product negative? Signs of products are something we understand very well.',
      },
      {
        heading: 'Roots split the number line',
        body: 'The roots of the factors are the only places the expression can switch sign. For $(x-2)(x-3)$, the roots $2$ and $3$ chop the number line into three pieces: $x < 2$, then $2 < x < 3$, then $x > 3$. Inside each piece the sign never changes — so testing one point tells you the sign of the whole piece.',
      },
      {
        heading: 'Between or outside?',
        body: 'For $(x-a)(x-b)$ with $a < b$: when $x$ is outside both roots, the two factors have the same sign, so the product is positive. When $x$ is between the roots, one factor is positive and one is negative, so the product is negative. Short version: $> 0$ means outside ("$x < a$ or $x > b$"), and $< 0$ means between ("$a < x < b$").',
      },
      {
        heading: 'Watch the boundary points',
        body: 'At a root, the product equals exactly $0$. A strict inequality like $< 0$ or $> 0$ excludes the roots, while $\\le 0$ or $\\ge 0$ includes them. This tiny detail decides whether you write $2 < x < 3$ or $2 \\le x \\le 3$ — and it changes answers to counting questions, so always double-check it.',
      },
    ],
    examples: [
      {
        problem: 'Solve $(x-1)(x-4) > 0$.',
        steps: [
          'The roots are $1$ and $4$, splitting the number line into three pieces. Test one point in each: at $x = 0$, $(-1)(-4) = 4 > 0$. At $x = 2$, $(1)(-2) = -2 < 0$. At $x = 5$, $(4)(1) = 4 > 0$.',
          'The product is positive on the two outside pieces and negative between the roots.',
          'We want $> 0$, so we take the outside pieces. The roots themselves give $0$, which is not $> 0$, so they are excluded.',
        ],
        answer: '$x < 1$ or $x > 4$',
      },
      {
        problem: 'Solve $x^2 - 2x - 15 \\le 0$.',
        steps: [
          'Factor: $x^2 - 2x - 15 = (x-5)(x+3)$, with roots $-3$ and $5$.',
          'A product of two factors is negative between its roots: $-3 < x < 5$. Test $x = 0$ to confirm: $(0-5)(0+3) = -15 \\le 0$. ✓',
          'Because the inequality is $\\le$, the roots themselves (where the product is exactly $0$) are also solutions.',
        ],
        answer: '$-3 \\le x \\le 5$',
      },
      {
        problem: 'How many integers satisfy $x^2 < 9$?',
        steps: [
          'Rewrite as $x^2 - 9 < 0$, which factors as $(x-3)(x+3) < 0$.',
          'Negative between the roots: $-3 < x < 3$. The endpoints are excluded because the inequality is strict.',
          'The integers strictly between $-3$ and $3$ are $-2, -1, 0, 1, 2$.',
        ],
        answer: '$5$ integers',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $(x-2)(x-7) < 0$.',
      choices: ['$x < 2$ or $x > 7$', '$2 < x < 7$', '$2 \\le x \\le 7$', '$x < 7$'],
      answer: 1,
      solution: 'A product of two factors is negative exactly when the factors disagree in sign, which happens between the roots: $2 < x < 7$. Test $x = 3$: $(1)(-4) = -4 < 0$. ✓ The endpoints are excluded because at $x = 2$ or $x = 7$ the product is $0$, and $0$ is not less than $0$.',
    },
    {
      q: 'Solve $(x+1)(x-3) > 0$.',
      choices: ['$x < -1$ or $x > 3$', '$-1 < x < 3$', '$x > 3$', '$x < 1$ or $x > 3$'],
      answer: 0,
      solution: 'The roots are $-1$ and $3$. The product is positive when both factors have the same sign — outside the roots. Test $x = -2$: $(-1)(-5) = 5 > 0$. ✓ Test $x = 4$: $(5)(1) = 5 > 0$. ✓ Between them, at $x = 0$: $(1)(-3) = -3$, negative. So the answer is $x < -1$ or $x > 3$. (Careful: the root of $x + 1$ is $-1$, not $1$!)',
    },
    {
      q: 'Which of these values of $x$ satisfies $x^2 - 5x + 6 < 0$?',
      choices: ['$0$', '$2$', '$2.5$', '$4$'],
      answer: 2,
      solution: 'Factor: $(x-2)(x-3) < 0$, so we need $2 < x < 3$. Only $2.5$ is in that window: $(0.5)(-0.5) = -0.25 < 0$. ✓ Note that $x = 2$ gives exactly $0$, which does not satisfy a strict $<$.',
    },
    {
      q: 'Solve $x^2 \\le 16$.',
      choices: ['$x \\le 4$', '$x \\le -4$ or $x \\ge 4$', '$-4 < x < 4$', '$-4 \\le x \\le 4$'],
      answer: 3,
      solution: 'Rewrite as $x^2 - 16 \\le 0$, or $(x-4)(x+4) \\le 0$: negative or zero between the roots, endpoints included because of the $\\le$. So $-4 \\le x \\le 4$. Watch out for $x \\le 4$ alone — it wrongly includes numbers like $-10$, and $(-10)^2 = 100$ is certainly not $\\le 16$.',
    },
    {
      q: 'Solve $x^2 - 3x - 10 \\ge 0$.',
      choices: ['$x \\le -2$ or $x \\ge 5$', '$-2 \\le x \\le 5$', '$x \\ge 5$', '$x \\le 2$ or $x \\ge 5$'],
      answer: 0,
      solution: 'Factor: $(x-5)(x+2) \\ge 0$, with roots $-2$ and $5$. The product is positive outside the roots and zero at them, so $x \\le -2$ or $x \\ge 5$. Test $x = -3$: $(-8)(-1) = 8 \\ge 0$. ✓ Do not forget the left branch — a $\\ge$ inequality on a factored quadratic almost always has two pieces.',
    },
    {
      q: 'Solve $x^2 + 2x - 8 < 0$.',
      choices: ['$x < -4$ or $x > 2$', '$-4 < x < 2$', '$-2 < x < 4$', '$-4 \\le x \\le 2$'],
      answer: 1,
      solution: 'Factor: $(x+4)(x-2) < 0$, with roots $-4$ and $2$. Negative means between the roots: $-4 < x < 2$. Test $x = 0$: $(4)(-2) = -8 < 0$. ✓ Strict inequality, so the endpoints stay out.',
    },
    {
      q: 'How many integers satisfy $(x-1)(x-8) \\le 0$?',
      choices: ['$6$', '$7$', '$9$', '$8$'],
      answer: 3,
      solution: 'The product is $\\le 0$ between the roots, endpoints included: $1 \\le x \\le 8$. The integers are $1, 2, 3, 4, 5, 6, 7, 8$ — that is $8$ of them. The $\\le$ matters: with a strict $<$ we would lose $1$ and $8$ and count only $6$.',
    },
    {
      q: 'Solve $x^2 > 5x$.',
      choices: ['$x > 5$', '$0 < x < 5$', '$x < 0$ or $x > 5$', '$x \\ge 5$'],
      answer: 2,
      solution: 'Resist dividing both sides by $x$ — you do not know its sign! Instead move everything to one side: $x^2 - 5x > 0$, so $x(x-5) > 0$. Positive outside the roots $0$ and $5$: $x < 0$ or $x > 5$. Check $x = -1$: $1 > -5$. ✓ Dividing by $x$ silently throws away the whole $x < 0$ branch.',
    },
    {
      q: 'How many integers satisfy $x^2 - 4x - 12 < 0$?',
      choices: ['$9$', '$7$', '$8$', '$6$'],
      answer: 1,
      solution: 'Factor: $(x-6)(x+2) < 0$, so $-2 < x < 6$. The endpoints are excluded (strict inequality), leaving the integers $-1, 0, 1, 2, 3, 4, 5$ — that is $7$ integers.',
    },
    {
      q: 'Solve $2x^2 - 5x - 3 \\le 0$.',
      choices: ['$x \\le -\\frac{1}{2}$ or $x \\ge 3$', '$-3 \\le x \\le \\frac{1}{2}$', '$-\\frac{1}{2} \\le x \\le 3$', '$\\frac{1}{2} \\le x \\le 3$'],
      answer: 2,
      solution: 'Factor: $2x^2 - 5x - 3 = (2x+1)(x-3)$. The roots are $x = -\\frac{1}{2}$ and $x = 3$. Since the leading coefficient is positive, the parabola opens upward and dips below zero between its roots: $-\\frac{1}{2} \\le x \\le 3$, endpoints included by the $\\le$. Test $x = 0$: $-3 \\le 0$. ✓',
    },
  ],
}

const s152 = {
  id: '15.2',
  title: 'Beyond Quadratics',
  learn: {
    concepts: [
      {
        heading: 'More factors, same idea',
        body: 'A product like $(x+2)(x-1)(x-4)$ can only change sign where one of its factors is zero. Mark all the roots on a number line, then figure out the sign of the product on each piece. A handy shortcut: for a product of linear factors, the sign flips every time you cross a root — start from the rightmost piece (where every factor is positive) and alternate as you walk left.',
      },
      {
        heading: 'A sign chart keeps you organized',
        body: 'A sign chart is a small table: one row per factor, one column per interval. Fill in $+$ or $-$ for each factor on each interval, then multiply down each column to get the sign of the whole product. It turns a tricky problem into cheerful bookkeeping — and it scales to any number of factors.',
      },
      {
        heading: 'Fractions come with forbidden values',
        body: 'A fraction $\\frac{x-2}{x+3}$ works just like a product for sign purposes: it is positive when the top and bottom agree in sign. But there is one new rule — the denominator can never be $0$. So $x = -3$ is excluded from every answer, even when the inequality is $\\le$ or $\\ge$. Zeros of the numerator may be included with $\\le$ or $\\ge$; zeros of the denominator never are.',
      },
      {
        heading: 'Never multiply by a mystery sign',
        body: 'It is tempting to clear the fraction in $\\frac{x-2}{x+3} > 1$ by multiplying both sides by $x + 3$. Do not do it! If $x + 3$ is negative, the inequality flips — and you have no idea which case you are in. The safe road: subtract to get everything on one side, combine into a single fraction, and read the signs.',
      },
    ],
    examples: [
      {
        problem: 'Solve $(x+2)(x-1)(x-4) > 0$.',
        steps: [
          'The roots are $-2$, $1$, and $4$, giving four intervals. On the far right ($x > 4$) all three factors are positive, so the product is positive.',
          'Walking left, the sign flips at each root: negative on $1 < x < 4$, positive on $-2 < x < 1$, negative on $x < -2$. Spot-check $x = 0$: $(2)(-1)(-4) = 8 > 0$. ✓',
          'We want the positive pieces, with strict inequality, so the roots are excluded.',
        ],
        answer: '$-2 < x < 1$ or $x > 4$',
      },
      {
        problem: 'Solve $\\frac{x-2}{x+3} > 0$.',
        steps: [
          'A fraction is positive when the numerator and denominator have the same sign. The key points are $x = 2$ (top is zero) and $x = -3$ (bottom is zero — forbidden!).',
          'Both parts are positive when $x > 2$; both are negative when $x < -3$. In between, at $x = 0$: $\\frac{-2}{3} < 0$.',
          'The inequality is strict, so neither boundary is included anyway.',
        ],
        answer: '$x < -3$ or $x > 2$',
      },
      {
        problem: 'Solve $\\frac{x+1}{x-4} \\le 0$.',
        steps: [
          'The fraction is negative when top and bottom disagree in sign, which happens between $-1$ and $4$. Test $x = 0$: $\\frac{1}{-4} < 0$. ✓',
          'Boundary check: at $x = -1$ the fraction is $0$, allowed by $\\le$, so $-1$ is included.',
          'At $x = 4$ the denominator is $0$ — the fraction is undefined, so $4$ is excluded no matter what the inequality sign says.',
        ],
        answer: '$-1 \\le x < 4$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $\\frac{x-2}{x+3} > 0$.',
      choices: ['$-3 < x < 2$', '$x > 2$', '$x < -3$ or $x > 2$', '$x \\le -3$ or $x \\ge 2$'],
      answer: 2,
      solution: 'A fraction is positive when top and bottom agree in sign. Both positive: $x > 2$. Both negative: $x < -3$. Test $x = -4$: $\\frac{-6}{-1} = 6 > 0$. ✓ Do not forget the both-negative branch — and the boundaries stay out, since $x = 2$ gives $0$ and $x = -3$ is undefined.',
    },
    {
      q: 'Which value of $x$ must be excluded from any solution of $\\frac{x+5}{x-1} \\ge 0$?',
      choices: ['$x = 1$', '$x = -5$', '$x = 5$', '$x = -1$'],
      answer: 0,
      solution: 'At $x = 1$ the denominator is $0$, so the fraction is undefined there — it cannot satisfy any inequality, even a $\\ge$. By contrast $x = -5$ makes the numerator $0$, and $0 \\ge 0$ is true, so $-5$ is actually a perfectly good solution.',
    },
    {
      q: 'Solve $\\frac{x}{x-6} < 0$.',
      choices: ['$x < 0$ or $x > 6$', '$0 < x < 6$', '$0 \\le x \\le 6$', '$x < 6$'],
      answer: 1,
      solution: 'Negative means the top and bottom disagree in sign, which happens between the two key points $0$ and $6$: for $0 < x < 6$, the top is positive and the bottom is negative. Test $x = 1$: $\\frac{1}{-5} < 0$. ✓ Outside, at $x = 7$: $\\frac{7}{1} > 0$, and at $x = -1$: $\\frac{-1}{-7} > 0$.',
    },
    {
      q: 'Solve $(x-1)(x-3)(x-5) < 0$.',
      choices: ['$1 < x < 3$ or $x > 5$', '$x < 1$', '$1 < x < 3$', '$x < 1$ or $3 < x < 5$'],
      answer: 3,
      solution: 'Roots at $1, 3, 5$. On the far right all factors are positive; the sign then alternates as you cross each root going left: positive for $x > 5$, negative for $3 < x < 5$, positive for $1 < x < 3$, negative for $x < 1$. The negative pieces are $x < 1$ and $3 < x < 5$. Spot-check $x = 4$: $(3)(1)(-1) = -3 < 0$. ✓',
    },
    {
      q: 'Solve $\\frac{x+4}{x-2} \\le 0$.',
      choices: ['$-4 \\le x < 2$', '$-4 \\le x \\le 2$', '$-4 < x < 2$', '$x \\le -4$ or $x > 2$'],
      answer: 0,
      solution: 'The fraction is negative between the key points $-4$ and $2$. Now the boundaries: $x = -4$ makes the numerator $0$, and $0 \\le 0$ is true, so $-4$ is in. But $x = 2$ makes the denominator $0$ — undefined, so $2$ is out even though the inequality is $\\le$. Answer: $-4 \\le x < 2$. The mismatched brackets are the whole point of this problem!',
    },
    {
      q: 'To solve $\\frac{x-2}{x+3} > 1$, why should you NOT multiply both sides by $x+3$?',
      choices: [
        'Because the fraction would disappear',
        'Because $x+3$ could equal $x-2$',
        'Because multiplying is only allowed in equations',
        'Because $x+3$ could be negative, and you would not know whether to flip the inequality',
      ],
      answer: 3,
      solution: 'Multiplying an inequality by a negative number flips its direction. Since $x + 3$ is positive for some $x$ and negative for others, you cannot know whether to flip — one rule for some solutions, the other rule for the rest. The safe method: subtract $1$, combine into one fraction, and do sign analysis.',
    },
    {
      q: 'Solve $x(x+2)(x-3) \\ge 0$.',
      choices: ['$x \\ge 3$', '$-2 \\le x \\le 0$ or $x \\ge 3$', '$x \\le -2$ or $0 \\le x \\le 3$', '$-2 \\le x \\le 3$'],
      answer: 1,
      solution: 'Roots at $-2, 0, 3$. Signs from the right, alternating: positive for $x > 3$, negative for $0 < x < 3$, positive for $-2 < x < 0$, negative for $x < -2$. Spot-check $x = -1$: $(-1)(1)(-4) = 4 \\ge 0$. ✓ We want positive or zero, so take $-2 \\le x \\le 0$ and $x \\ge 3$, roots included by the $\\ge$.',
    },
    {
      q: 'How many integers $x$ with $0 \\le x \\le 10$ satisfy $(x-1)(x-4)(x-9) < 0$?',
      choices: ['$4$', '$6$', '$5$', '$7$'],
      answer: 2,
      solution: 'Sign analysis with roots $1, 4, 9$: the product is negative for $x < 1$ and for $4 < x < 9$. (Check $x = 5$: $(4)(1)(-4) = -16 < 0$. ✓) Within $0 \\le x \\le 10$, the qualifying integers are $0$ from the first piece and $5, 6, 7, 8$ from the second — $5$ integers in all. The roots themselves give $0$, which does not count for a strict $<$.',
    },
    {
      q: 'Solve $\\frac{x-2}{x+3} \\ge 2$.',
      choices: ['$-8 \\le x < -3$', '$x \\ge -8$', '$-8 \\le x \\le -3$', '$x \\le -8$ or $x > -3$'],
      answer: 0,
      solution: 'Subtract $2$ and combine: $\\frac{x-2}{x+3} - 2 = \\frac{x - 2 - 2(x+3)}{x+3} = \\frac{-x-8}{x+3} \\ge 0$. The key points are $-8$ (top zero) and $-3$ (bottom zero). Test $x = -5$: $\\frac{-3}{-2} = 1.5 \\ge 0$. ✓ So the solution is $-8 \\le x < -3$: the point $-8$ is included (the original becomes $\\frac{-10}{-5} = 2 \\ge 2$ ✓), but $-3$ is excluded since the fraction is undefined there.',
    },
    {
      q: 'Solve $\\frac{x^2 - 9}{x-1} \\le 0$.',
      choices: [
        '$x \\le -3$ or $1 \\le x \\le 3$',
        '$x \\le -3$ or $1 < x \\le 3$',
        '$-3 \\le x < 1$ or $x \\ge 3$',
        '$x < -3$ or $1 < x < 3$',
      ],
      answer: 1,
      solution: 'Factor the top: $\\frac{(x-3)(x+3)}{x-1}$, with key points $-3, 1, 3$. Testing each interval: $x = -4$ gives $\\frac{(-7)(-1)}{-5} < 0$ ✓; $x = 0$ gives $\\frac{(-3)(3)}{-1} = 9 > 0$; $x = 2$ gives $\\frac{(-1)(5)}{1} = -5 < 0$ ✓; $x = 4$ gives a positive value. Include the numerator zeros $-3$ and $3$ (they give $0$, fine for $\\le$), but exclude $1$ where the fraction is undefined. Answer: $x \\le -3$ or $1 < x \\le 3$.',
    },
  ],
}

const s153 = {
  id: '15.3',
  title: 'The Trivial Inequality',
  learn: {
    concepts: [
      {
        heading: 'The most useful obvious fact in algebra',
        body: 'For every real number $x$, we have $x^2 \\ge 0$, with equality exactly when $x = 0$. A positive number squared is positive, a negative number squared is positive, and only $0^2$ gives $0$. Mathematicians call this the Trivial Inequality — "trivial" because it is easy to see, yet it quietly powers a huge number of clever arguments.',
      },
      {
        heading: 'Completing the square reveals minimums',
        body: 'Take $x^2 - 6x + 11$. Completing the square gives $(x-3)^2 + 2$. Since $(x-3)^2 \\ge 0$ always, the whole expression is always at least $2$ — and it equals $2$ exactly when $x - 3 = 0$, that is, at $x = 3$. The square soaks up all the variation; the leftover constant is the minimum.',
      },
      {
        heading: 'A famous consequence: $a^2 + b^2 \\ge 2ab$',
        body: 'Apply the Trivial Inequality to the number $a - b$: since $(a-b)^2 \\ge 0$, expanding gives $a^2 - 2ab + b^2 \\ge 0$, so $a^2 + b^2 \\ge 2ab$ for ALL real numbers $a$ and $b$. Equality holds exactly when $a = b$. One little square, one permanent truth.',
      },
      {
        heading: 'Proving an equation has no solutions',
        body: 'If you can rewrite an expression as a square plus a positive number, it can never equal zero. For instance, $x^2 - 4x + 10 = (x-2)^2 + 6 \\ge 6$, so the equation $x^2 - 4x + 10 = 0$ has no real solutions — the left side never even gets close to $0$. No case-checking, no guessing: the square settles it.',
      },
    ],
    examples: [
      {
        problem: 'Find the minimum value of $x^2 - 6x + 11$, and where it occurs.',
        steps: [
          'Complete the square: $x^2 - 6x + 11 = (x^2 - 6x + 9) + 2 = (x-3)^2 + 2$.',
          'By the Trivial Inequality, $(x-3)^2 \\ge 0$, so the expression is at least $0 + 2 = 2$.',
          'Equality needs $(x-3)^2 = 0$, which happens only at $x = 3$. Check: $9 - 18 + 11 = 2$. ✓',
        ],
        answer: 'Minimum value $2$, at $x = 3$',
      },
      {
        problem: 'Show that $x^2 + 10 = 4x$ has no real solutions.',
        steps: [
          'Move everything to one side: $x^2 - 4x + 10 = 0$.',
          'Complete the square: $x^2 - 4x + 10 = (x-2)^2 + 6$.',
          'Since $(x-2)^2 \\ge 0$, the left side is always at least $6$ — it can never be $0$. So no real $x$ works.',
        ],
        answer: 'No real solutions: the left side is always $\\ge 6 > 0$',
      },
      {
        problem: 'What is the smallest possible value of $(x-3)^2 + (y+1)^2 + 7$?',
        steps: [
          'Each square is separately $\\ge 0$, so the sum is at least $0 + 0 + 7 = 7$.',
          'Can both squares be $0$ at once? Yes: choose $x = 3$ and $y = -1$ — the two variables do not interfere with each other.',
        ],
        answer: 'Minimum value $7$, at $x = 3$, $y = -1$',
      },
    ],
  },
  problems: [
    {
      q: 'For how many real numbers $x$ is $x^2 < 0$?',
      choices: ['Infinitely many', 'One', 'Two', 'None'],
      answer: 3,
      solution: 'The Trivial Inequality says $x^2 \\ge 0$ for every real $x$ — squares are never negative. So no real number at all satisfies $x^2 < 0$.',
    },
    {
      q: 'What is the smallest possible value of $(x-5)^2$?',
      choices: ['$-5$', '$0$', '$5$', '$25$'],
      answer: 1,
      solution: 'A square is always $\\ge 0$, and $(x-5)^2$ actually reaches $0$ when $x = 5$. So the smallest value is $0$. (Note that $25$ is just the value at $x = 0$ — a common spot to look, but not the minimum here.)',
    },
    {
      q: 'What is the minimum value of $x^2 + 8$?',
      choices: ['$8$', '$0$', '$-8$', '$64$'],
      answer: 0,
      solution: 'Since $x^2 \\ge 0$, we get $x^2 + 8 \\ge 8$, and the value $8$ is achieved at $x = 0$. The square contributes nothing at its best, so the constant is the minimum.',
    },
    {
      q: 'What is the minimum value of $(x+2)^2 - 3$?',
      choices: ['$-2$', '$3$', '$-3$', '$1$'],
      answer: 2,
      solution: 'The square $(x+2)^2$ is at least $0$, with equality at $x = -2$. So the minimum value of the expression is $0 - 3 = -3$. (Careful: $-2$ is WHERE the minimum happens, not the minimum value.)',
    },
    {
      q: 'What is the minimum value of $x^2 - 10x + 30$?',
      choices: ['$30$', '$5$', '$-5$', '$25$'],
      answer: 1,
      solution: 'Complete the square: $x^2 - 10x + 30 = (x-5)^2 + 5$. The square is at least $0$, so the expression is at least $5$, achieved at $x = 5$. Check: $25 - 50 + 30 = 5$. ✓',
    },
    {
      q: 'At what value of $x$ does $x^2 + 6x + 14$ reach its minimum?',
      choices: ['$x = 3$', '$x = 6$', '$x = -6$', '$x = -3$'],
      answer: 3,
      solution: 'Complete the square: $x^2 + 6x + 14 = (x+3)^2 + 5$. The square vanishes when $x + 3 = 0$, so the minimum occurs at $x = -3$. Watch the sign: $(x+3)^2$ is zero at $-3$, not at $+3$.',
    },
    {
      q: 'Which equation has no real solutions?',
      choices: ['$x^2 + 4x + 5 = 0$', '$x^2 - 4x + 3 = 0$', '$x^2 = 0$', '$x^2 - 5 = 0$'],
      answer: 0,
      solution: 'Complete the square: $x^2 + 4x + 5 = (x+2)^2 + 1 \\ge 1$, which can never equal $0$. The others all have real solutions: $x^2 - 4x + 3 = (x-1)(x-3)$ has roots $1$ and $3$; $x^2 = 0$ has the root $0$; and $x^2 - 5 = 0$ is solved by $x = \\pm\\sqrt{5}$.',
    },
    {
      q: 'For real numbers $a$ and $b$, what is the smallest possible value of $a^2 - 2ab + b^2$?',
      choices: ['It can be any negative number', '$-2$', '$0$', '$1$'],
      answer: 2,
      solution: 'Recognize the perfect square: $a^2 - 2ab + b^2 = (a-b)^2$. By the Trivial Inequality this is always $\\ge 0$, and it equals $0$ whenever $a = b$. So the smallest possible value is $0$ — this is exactly why $a^2 + b^2 \\ge 2ab$ holds for all real numbers.',
    },
    {
      q: 'What is the minimum value of $(x-4)^2 + (y+2)^2 + 9$?',
      choices: ['$0$', '$9$', '$-9$', '$13$'],
      answer: 1,
      solution: 'Each square is at least $0$, so the sum is at least $9$. Both squares can be $0$ at the same time — set $x = 4$ and $y = -2$ — so the minimum $9$ is actually achieved. Two variables, but each square gets to relax independently.',
    },
    {
      q: 'What is the minimum value of $x^2 + y^2 - 6x + 4y + 20$?',
      choices: ['$7$', '$20$', '$13$', '$0$'],
      answer: 0,
      solution: 'Complete the square in each variable separately: $x^2 - 6x = (x-3)^2 - 9$ and $y^2 + 4y = (y+2)^2 - 4$. So the expression equals $(x-3)^2 + (y+2)^2 + 20 - 9 - 4 = (x-3)^2 + (y+2)^2 + 7 \\ge 7$, with equality at $x = 3$, $y = -2$. Check: $9 + 4 - 18 - 8 + 20 = 7$. ✓',
    },
  ],
}

const s154 = {
  id: '15.4',
  title: 'Quadratic Optimization',
  learn: {
    concepts: [
      {
        heading: 'The vertex is the extreme point',
        body: 'Write a quadratic in vertex form: $y = a(x-h)^2 + k$. If $a > 0$ the parabola opens upward and $k$ is the MINIMUM value, reached at $x = h$. If $a < 0$ it opens downward and $k$ is the MAXIMUM value, again at $x = h$. Everything in this section is about finding $h$ and $k$.',
      },
      {
        heading: 'A shortcut to the vertex',
        body: 'For $y = ax^2 + bx + c$, the vertex sits at $x = -\\frac{b}{2a}$. You can get this by completing the square, or by symmetry: a parabola is symmetric, so its vertex lies exactly halfway between any pair of points at equal heights — for example, halfway between its roots. Find the $x$-value first, then plug it back in to get the extreme $y$-value.',
      },
      {
        heading: 'Word problems: build the quadratic first',
        body: 'Suppose you have $40$ meters of fence for a rectangular pen. If one side is $w$, the opposite side is also $w$, and the other two sides share what remains, so each is $20 - w$. The area is $A = w(20 - w)$ — a downward-opening quadratic in $w$. Once the story becomes a quadratic, the vertex does the rest. If a wall covers one side for free, the fence only pays for three sides: watch how that changes the setup!',
      },
      {
        heading: 'Answer the question that was asked',
        body: 'Optimization problems hide two different answers: the best VALUE (the maximum area, the peak height) and WHERE it happens (the width you should choose, the time of the peak). Read the question twice and report the right one — or both, to be extra clear. It is a shame to do all the math right and then circle the wrong number.',
      },
    ],
    examples: [
      {
        problem: 'Find the maximum value of $y = -x^2 + 8x - 5$.',
        steps: [
          'Factor $-1$ out of the $x$-terms and complete the square: $y = -(x^2 - 8x) - 5 = -\\left((x-4)^2 - 16\\right) - 5$.',
          'Simplify: $y = -(x-4)^2 + 11$.',
          'Since $-(x-4)^2 \\le 0$, we get $y \\le 11$, with equality at $x = 4$. Check: $-16 + 32 - 5 = 11$. ✓',
        ],
        answer: 'Maximum value $11$, at $x = 4$',
      },
      {
        problem: 'You have $40$ meters of fence for a rectangular garden. What is the largest area you can enclose?',
        steps: [
          'Let the width be $w$; then the length is $20 - w$ (half the perimeter, minus the width). The area is $A = w(20 - w) = -w^2 + 20w$.',
          'The roots of $A$ are $w = 0$ and $w = 20$, so by symmetry the vertex is at $w = 10$.',
          'The maximum area is $A = 10 \\times 10 = 100$ square meters — the pen is a square. With a fixed perimeter, the square always wins.',
        ],
        answer: 'Maximum area $100$ square meters, when the garden is $10 \\times 10$',
      },
      {
        problem: 'A barn wall forms one side of a rectangular pen, and you have $60$ meters of fence for the other three sides. What dimensions give the biggest pen?',
        steps: [
          'Let $w$ be each side sticking out from the wall. The fence covers two widths and one length, so the length is $60 - 2w$, and $A = w(60 - 2w)$.',
          'The roots are $w = 0$ and $w = 30$, so the vertex is halfway: $w = 15$.',
          'Then the length is $60 - 30 = 30$, and the area is $15 \\times 30 = 450$ square meters. Notice the best pen is NOT a square here — the free wall changes the balance.',
        ],
        answer: '$15$ meters by $30$ meters, for $450$ square meters',
      },
    ],
  },
  problems: [
    {
      q: 'What is the minimum value of $y = (x-2)^2 + 5$?',
      choices: ['$5$', '$2$', '$-2$', '$7$'],
      answer: 0,
      solution: 'The expression is already in vertex form: the square is at least $0$, so $y \\ge 5$, with equality at $x = 2$. The minimum VALUE is $5$; the number $2$ is where it happens.',
    },
    {
      q: 'At what value of $x$ does $y = x^2 - 8x + 3$ reach its minimum?',
      choices: ['$x = 8$', '$x = -4$', '$x = 4$', '$x = 3$'],
      answer: 2,
      solution: 'Use the vertex shortcut: $x = -\\frac{b}{2a} = -\\frac{-8}{2 \\cdot 1} = 4$. The parabola opens upward ($a = 1 > 0$), so this is a minimum. The question asks WHERE, so the answer is $x = 4$, not the minimum value itself.',
    },
    {
      q: 'What is the maximum value of $y = -(x-3)^2 + 7$?',
      choices: ['$3$', '$7$', '$-7$', '$10$'],
      answer: 1,
      solution: 'Since $-(x-3)^2 \\le 0$, we have $y \\le 7$, and $y = 7$ exactly when $x = 3$. The negative sign in front of the square makes this a maximum instead of a minimum.',
    },
    {
      q: 'What is the minimum value of $y = 2x^2 - 4x + 9$?',
      choices: ['$9$', '$5$', '$1$', '$7$'],
      answer: 3,
      solution: 'Complete the square, remembering to factor out the $2$ first: $2x^2 - 4x + 9 = 2(x^2 - 2x) + 9 = 2(x-1)^2 - 2 + 9 = 2(x-1)^2 + 7$. So the minimum is $7$, at $x = 1$. Check: $2 - 4 + 9 = 7$. ✓',
    },
    {
      q: 'Two numbers add up to $20$. What is the largest possible value of their product?',
      choices: ['$96$', '$99$', '$100$', '$400$'],
      answer: 2,
      solution: 'Call the numbers $x$ and $20 - x$; their product is $P = x(20-x)$, a downward parabola with roots $0$ and $20$. The vertex sits halfway, at $x = 10$, giving $P = 10 \\times 10 = 100$. Splitting a fixed sum evenly always maximizes the product.',
    },
    {
      q: 'What is the maximum value of $y = -x^2 + 6x - 1$?',
      choices: ['$8$', '$9$', '$-1$', '$5$'],
      answer: 0,
      solution: 'Complete the square: $y = -(x^2 - 6x) - 1 = -(x-3)^2 + 9 - 1 = -(x-3)^2 + 8$. Maximum $8$ at $x = 3$. Check: $-9 + 18 - 1 = 8$. ✓ (Choosing $9$ means forgetting to bring the $-1$ along.)',
    },
    {
      q: 'You have $36$ meters of fence for a full rectangular enclosure. What is the largest area you can enclose, in square meters?',
      choices: ['$72$', '$80$', '$324$', '$81$'],
      answer: 3,
      solution: 'With perimeter $36$, width $w$ gives length $18 - w$, and $A = w(18-w)$. The vertex is halfway between the roots $0$ and $18$, at $w = 9$: a $9 \\times 9$ square with area $81$. (Not $324$ — that would be $18 \\times 18$, which uses twice the fence you have.)',
    },
    {
      q: 'A ball is thrown so its height in meters after $t$ seconds is $h = -5t^2 + 20t + 2$. What is its greatest height?',
      choices: ['$20$ meters', '$22$ meters', '$18$ meters', '$2$ meters'],
      answer: 1,
      solution: 'The peak is at $t = -\\frac{b}{2a} = -\\frac{20}{2(-5)} = 2$ seconds. Plug back in: $h = -5(4) + 40 + 2 = 22$ meters. (The value $2$ is just the starting height at $t = 0$.)',
    },
    {
      q: 'A farmer uses a straight river bank as one side of a rectangular field and has $80$ meters of fence for the other three sides. What is the largest possible area, in square meters?',
      choices: ['$400$', '$1600$', '$800$', '$600$'],
      answer: 2,
      solution: 'If each side meeting the river is $w$, the remaining fence gives a length of $80 - 2w$, so $A = w(80 - 2w)$. The roots are $0$ and $40$, so the best $w$ is $20$, making the field $20 \\times 40 = 800$ square meters. ($400$ is the answer you get if you wrongly fence all four sides.)',
    },
    {
      q: 'Two numbers differ by $6$. What is the smallest possible value of their product?',
      choices: ['$0$', '$-6$', '$9$', '$-9$'],
      answer: 3,
      solution: 'Call the numbers $x$ and $x + 6$; the product is $P = x(x+6) = x^2 + 6x = (x+3)^2 - 9$. The square is at least $0$, so $P \\ge -9$, with equality at $x = -3$: the numbers are $-3$ and $3$, and indeed $(-3)(3) = -9$. Negative numbers are allowed, so the minimum dips below zero!',
    },
  ],
}

const challenge = [
  {
    q: 'How many integers from $1$ to $10$ do NOT satisfy $x^2 - 7x + 10 \\ge 0$?',
    choices: ['$3$', '$2$', '$4$', '$0$'],
    answer: 1,
    solution: 'Factor: $(x-2)(x-5) \\ge 0$ holds for $x \\le 2$ or $x \\ge 5$. The failures are the integers strictly between the roots: $3$ and $4$. (Check $x = 3$: $9 - 21 + 10 = -2 < 0$. ✓) That is $2$ integers.',
  },
  {
    q: 'Solve $\\frac{x^2 - 4}{x + 1} \\ge 0$.',
    choices: [
      '$x \\ge 2$',
      '$-2 \\le x \\le -1$ or $x \\ge 2$',
      '$x \\le -2$ or $x \\ge 2$',
      '$-2 \\le x < -1$ or $x \\ge 2$',
    ],
    answer: 3,
    solution: 'Factor: $\\frac{(x-2)(x+2)}{x+1}$ with key points $-2, -1, 2$. Testing: $x = -3$ gives $\\frac{5}{-2} < 0$; $x = -1.5$ gives $\\frac{(-3.5)(0.5)}{-0.5} = 3.5 > 0$ ✓; $x = 0$ gives $\\frac{-4}{1} < 0$; $x = 3$ gives a positive value ✓. Include the numerator zeros $\\pm 2$, but exclude $x = -1$ where the fraction is undefined: $-2 \\le x < -1$ or $x \\ge 2$.',
  },
  {
    q: 'How many integers satisfy $x^2 \\le 30$?',
    choices: ['$11$', '$10$', '$5$', '$12$'],
    answer: 0,
    solution: 'We need $-\\sqrt{30} \\le x \\le \\sqrt{30}$, and $\\sqrt{30}$ is between $5$ and $6$ (since $25 < 30 < 36$). So the integers are $-5, -4, \\ldots, 4, 5$: that is $5 + 1 + 5 = 11$ integers. Remember to count the negatives and zero!',
  },
  {
    q: 'What is the minimum value of $2x^2 - 12x + 23$?',
    choices: ['$23$', '$-5$', '$5$', '$3$'],
    answer: 2,
    solution: 'Factor out the $2$ before completing the square: $2(x^2 - 6x) + 23 = 2(x-3)^2 - 18 + 23 = 2(x-3)^2 + 5$. Minimum $5$ at $x = 3$. Check: $18 - 36 + 23 = 5$. ✓',
  },
  {
    q: 'What is the smallest value of $c$ for which $x^2 + 6x + c \\ge 0$ for ALL real $x$?',
    choices: ['$6$', '$3$', '$9$', '$36$'],
    answer: 2,
    solution: 'Complete the square: $x^2 + 6x + c = (x+3)^2 + c - 9$. The worst case is $x = -3$, where the square vanishes and the expression equals $c - 9$. We need $c - 9 \\ge 0$, so the smallest safe value is $c = 9$ — then the expression is $(x+3)^2$, exactly zero at $x = -3$ and positive everywhere else.',
  },
  {
    q: 'If $a + b = 16$, what is the largest possible value of $ab$?',
    choices: ['$64$', '$60$', '$256$', '$63$'],
    answer: 0,
    solution: 'Write $b = 16 - a$, so $ab = a(16-a)$, a downward parabola with roots $0$ and $16$ and vertex at $a = 8$. The maximum is $8 \\times 8 = 64$. Equivalently, $a^2 + b^2 \\ge 2ab$ forces the even split to win.',
  },
  {
    q: 'Solve $x^3 > 4x$.',
    choices: [
      '$x > 2$',
      '$x < -2$ or $0 < x < 2$',
      '$x > -2$',
      '$-2 < x < 0$ or $x > 2$',
    ],
    answer: 3,
    solution: 'Never divide by $x$ — its sign is unknown! Move and factor: $x^3 - 4x = x(x-2)(x+2) > 0$, with roots $-2, 0, 2$. Signs from the right, alternating: positive for $x > 2$, negative for $0 < x < 2$, positive for $-2 < x < 0$, negative for $x < -2$. Spot-check $x = -1$: $-1 > -4$. ✓ Answer: $-2 < x < 0$ or $x > 2$.',
  },
  {
    q: 'Solve $\\frac{3}{x-1} \\ge 1$.',
    choices: ['$x \\le 4$', '$1 < x \\le 4$', '$1 \\le x \\le 4$', '$x \\ge 4$'],
    answer: 1,
    solution: 'Subtract $1$ and combine: $\\frac{3}{x-1} - 1 = \\frac{3 - (x-1)}{x-1} = \\frac{4-x}{x-1} \\ge 0$. Top zero at $4$, bottom zero at $1$; the fraction is nonnegative between them. Test $x = 2$: $\\frac{3}{1} = 3 \\ge 1$. ✓ Include $4$ (equality: $\\frac{3}{3} = 1$), exclude $1$ (undefined): $1 < x \\le 4$.',
  },
  {
    q: 'A rectangular vegetable patch uses a garden wall as one side, with $100$ meters of fence for the other three sides. What is the largest possible area, in square meters?',
    choices: ['$1250$', '$625$', '$2500$', '$1000$'],
    answer: 0,
    solution: 'With side $w$ meeting the wall twice, the length is $100 - 2w$ and $A = w(100 - 2w)$. The roots are $0$ and $50$, so the vertex is at $w = 25$, giving a $25 \\times 50$ patch of area $1250$. ($625$ comes from forcing a square, which is not optimal when one side is free.)',
  },
  {
    q: 'A rocket toy launches with height $h = -5t^2 + 30t$ meters after $t$ seconds. What is its maximum height?',
    choices: ['$30$ meters', '$40$ meters', '$45$ meters', '$90$ meters'],
    answer: 2,
    solution: 'The peak is at $t = -\\frac{30}{2(-5)} = 3$ seconds. Plug in: $h = -5(9) + 90 = 45$ meters. (The height is $0$ at $t = 0$ and $t = 6$; the peak sits at the halfway time by symmetry.)',
  },
  {
    q: 'Solve $(x-1)^2 < 9$.',
    choices: ['$x < 4$', '$-3 < x < 3$', '$-4 < x < 2$', '$-2 < x < 4$'],
    answer: 3,
    solution: 'Expand or, more slickly, subtract: $(x-1)^2 - 9 < 0$ factors as $\\left((x-1)-3\\right)\\left((x-1)+3\\right) = (x-4)(x+2) < 0$, giving $-2 < x < 4$. Test $x = 0$: $1 < 9$. ✓ The interval is centered at $1$ (the inside of the square), not at $0$.',
  },
  {
    q: 'What is the minimum value of $x^2 - 4x + y^2 + 10y + 40$?',
    choices: ['$40$', '$11$', '$15$', '$0$'],
    answer: 1,
    solution: 'Complete the square in each variable: $(x-2)^2 - 4 + (y+5)^2 - 25 + 40 = (x-2)^2 + (y+5)^2 + 11$. Both squares can be zero at once ($x = 2$, $y = -5$), so the minimum is $11$. Check: $4 - 8 + 25 - 50 + 40 = 11$. ✓',
  },
]

const worksheet = [
  {
    q: 'Solve $(x-3)(x+5) < 0$.',
    answer: '$-5 < x < 3$',
    solution: 'The roots are $-5$ and $3$, and a product of two factors is negative between its roots. Test $x = 0$: $(-3)(5) = -15 < 0$. ✓ The inequality is strict, so the endpoints are excluded.',
  },
  {
    q: 'Solve $x^2 - 9x + 18 \\ge 0$.',
    answer: '$x \\le 3$ or $x \\ge 6$',
    solution: 'Factor: $(x-3)(x-6) \\ge 0$. The product is positive outside the roots and zero at them, so $x \\le 3$ or $x \\ge 6$. Test $x = 4$: $(1)(-2) = -2$, negative — correctly excluded.',
  },
  {
    q: 'Solve $\\frac{x+2}{x-5} > 0$.',
    answer: '$x < -2$ or $x > 5$',
    solution: 'A fraction is positive when top and bottom agree in sign: both positive for $x > 5$, both negative for $x < -2$. The point $x = 5$ makes the denominator zero and is excluded; $x = -2$ gives $0$, which fails a strict $>$.',
  },
  {
    q: 'Find the minimum value of $x^2 - 12x + 40$, and the value of $x$ where it occurs.',
    answer: 'Minimum value $4$, at $x = 6$',
    solution: 'Complete the square: $x^2 - 12x + 40 = (x-6)^2 + 4$. Since $(x-6)^2 \\ge 0$, the expression is at least $4$, with equality exactly at $x = 6$. Check: $36 - 72 + 40 = 4$. ✓',
  },
  {
    q: 'How many integers satisfy $x^2 < 20$?',
    answer: '$9$',
    solution: 'We need $-\\sqrt{20} < x < \\sqrt{20}$, and $\\sqrt{20}$ is between $4$ and $5$ (since $16 < 20 < 25$). The integers are $-4, -3, \\ldots, 3, 4$: nine in all. Do not forget zero and the negatives.',
  },
  {
    q: 'Find the maximum value of $y = -x^2 + 10x - 16$.',
    answer: 'Maximum value $9$, at $x = 5$',
    solution: 'Complete the square: $y = -(x^2 - 10x) - 16 = -(x-5)^2 + 25 - 16 = -(x-5)^2 + 9$. The squared term only ever subtracts, so the maximum is $9$, at $x = 5$. Check: $-25 + 50 - 16 = 9$. ✓',
  },
  {
    q: 'Solve $(x-1)(x-4)(x-7) \\le 0$.',
    answer: '$x \\le 1$ or $4 \\le x \\le 7$',
    solution: 'Roots at $1, 4, 7$. From the right, the product alternates: positive for $x > 7$, negative for $4 < x < 7$, positive for $1 < x < 4$, negative for $x < 1$. Take the negative pieces and include all three roots (the product is $0$ there, allowed by $\\le$): $x \\le 1$ or $4 \\le x \\le 7$. Spot-check $x = 5$: $(4)(1)(-2) = -8 \\le 0$. ✓',
  },
  {
    q: 'Solve $\\frac{2x-1}{x+4} \\le 0$.',
    answer: '$-4 < x \\le \\frac{1}{2}$',
    solution: 'The key points are $x = \\frac{1}{2}$ (numerator zero) and $x = -4$ (denominator zero). Between them the signs disagree: test $x = 0$, giving $\\frac{-1}{4} < 0$. ✓ Include $\\frac{1}{2}$, where the fraction is $0$ (fine for $\\le$), but exclude $-4$, where it is undefined: $-4 < x \\le \\frac{1}{2}$.',
  },
  {
    q: 'A rectangular paddock uses a long barn wall as one side, and $120$ meters of fence make up the other three sides. What dimensions give the greatest area, and what is that area?',
    answer: '$30$ meters by $60$ meters, area $1800$ square meters',
    solution: 'Let $w$ be each side touching the wall; the remaining fence gives a length of $120 - 2w$, so $A = w(120 - 2w)$. The roots are $w = 0$ and $w = 60$, so the vertex is at $w = 30$, where the length is $60$ and the area is $30 \\times 60 = 1800$. Note the wall-side pen is twice as long as it is deep — the free wall shifts the optimum away from a square.',
  },
  {
    q: 'Find the minimum value of $x^2 + y^2 - 8x + 6y + 30$, and the values of $x$ and $y$ where it occurs.',
    answer: 'Minimum value $5$, at $x = 4$, $y = -3$',
    solution: 'Complete the square twice: $x^2 - 8x = (x-4)^2 - 16$ and $y^2 + 6y = (y+3)^2 - 9$, so the expression is $(x-4)^2 + (y+3)^2 + 30 - 16 - 9 = (x-4)^2 + (y+3)^2 + 5$. Each square is at least $0$ and both vanish at $x = 4$, $y = -3$, so the minimum is $5$. Check: $16 + 9 - 32 - 18 + 30 = 5$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch15',
  book: 'intro-algebra',
  number: 15,
  title: 'More Inequalities',
  intro:
    'You already know how to solve linear inequalities — now the curve balls arrive! In this chapter you will tame quadratic and even fancier inequalities with sign analysis, meet the humble but mighty fact that squares are never negative, and use it to find the biggest and smallest values a quadratic can reach.',
  sections: [s151, s152, s153, s154],
  challenge,
  worksheet,
}
