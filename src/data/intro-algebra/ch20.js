// Introduction to Algebra — Chapter 20: Special Functions
// All problems, explanations, and examples are original MathQuest content.

const s201 = {
  id: '20.1',
  title: 'Radicals',
  learn: {
    concepts: [
      {
        heading: 'The square root function',
        body: 'The function $f(x) = \\sqrt{x}$ takes a number and returns the nonnegative number that squares to it. So $\\sqrt{25} = 5$ — not $\\pm 5$! Both $5$ and $-5$ square to $25$, but the radical symbol always picks the nonnegative one. That means the output of $\\sqrt{x}$ is never negative.',
      },
      {
        heading: 'Domains: keep the inside nonnegative',
        body: 'Since we cannot take the square root of a negative number (yet!), the expression under the radical must be at least $0$. To find the domain of $\\sqrt{x - 3}$, solve $x - 3 \\ge 0$: the domain is $x \\ge 3$.',
      },
      {
        heading: 'Squaring both sides',
        body: 'To solve an equation like $\\sqrt{x - 1} = 5$, square both sides to undo the radical: $x - 1 = 25$, so $x = 26$. If the equation has other terms, isolate the radical on one side first, then square.',
      },
      {
        heading: 'Always check for extraneous solutions',
        body: 'Squaring erases signs — both $3$ and $-3$ square to $9$. So squaring an equation can create imposter solutions that solve the squared equation but not the original. These are called extraneous solutions. The fix is simple: substitute every candidate back into the ORIGINAL equation, and keep only the ones that work.',
      },
    ],
    examples: [
      {
        problem: 'Find the domain of $f(x) = \\sqrt{2x + 5}$.',
        steps: [
          'The inside of the radical must be nonnegative: $2x + 5 \\ge 0$.',
          'Subtract $5$: $2x \\ge -5$.',
          'Divide by $2$: $x \\ge -\\frac{5}{2}$.',
        ],
        answer: 'The domain is $x \\ge -\\frac{5}{2}$',
      },
      {
        problem: 'Solve $\\sqrt{3x + 1} = 4$.',
        steps: [
          'The radical is already alone on one side, so square both sides: $3x + 1 = 16$.',
          'Solve: $3x = 15$, so $x = 5$.',
          'Check in the original: $\\sqrt{3(5) + 1} = \\sqrt{16} = 4$. ✓',
        ],
        answer: '$x = 5$',
      },
      {
        problem: 'Solve $\\sqrt{x + 7} = x + 1$.',
        steps: [
          'Square both sides: $x + 7 = (x + 1)^2 = x^2 + 2x + 1$.',
          'Rearrange: $x^2 + x - 6 = 0$, which factors as $(x + 3)(x - 2) = 0$. Candidates: $x = -3$ and $x = 2$.',
          'Check $x = 2$: $\\sqrt{9} = 3$ and $2 + 1 = 3$. ✓',
          'Check $x = -3$: $\\sqrt{4} = 2$, but $-3 + 1 = -2$. A square root is never negative, so $x = -3$ is extraneous — throw it out.',
        ],
        answer: '$x = 2$ (the candidate $x = -3$ is extraneous)',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\sqrt{81}$?',
      choices: ['$-9$', '$9$', 'Both $9$ and $-9$', '$40.5$'],
      answer: 1,
      solution: 'The radical symbol always means the nonnegative square root. Both $9$ and $-9$ square to $81$, but $\\sqrt{81}$ picks the nonnegative one: $\\sqrt{81} = 9$.',
    },
    {
      q: 'What is the domain of $f(x) = \\sqrt{x - 3}$?',
      choices: ['$x > 3$', '$x \\ge -3$', '$x \\ge 3$', 'All real numbers'],
      answer: 2,
      solution: 'The inside of the radical must be nonnegative: $x - 3 \\ge 0$, so $x \\ge 3$. Note that $x = 3$ itself is fine, since $\\sqrt{0} = 0$ — that is why we need $\\ge$, not $>$.',
    },
    {
      q: 'Solve $\\sqrt{x} = 6$.',
      choices: ['$x = 3$', '$x = 12$', '$x = \\sqrt{6}$', '$x = 36$'],
      answer: 3,
      solution: 'Square both sides: $x = 36$. Check: $\\sqrt{36} = 6$. ✓',
    },
    {
      q: 'What is the domain of $g(x) = \\sqrt{2x + 5}$?',
      choices: ['$x \\ge -\\frac{5}{2}$', '$x \\ge \\frac{5}{2}$', '$x \\le -\\frac{5}{2}$', '$x \\ge -5$'],
      answer: 0,
      solution: 'Solve $2x + 5 \\ge 0$: subtract $5$ to get $2x \\ge -5$, then divide by $2$ to get $x \\ge -\\frac{5}{2}$. (Careful to divide the whole $-5$ by $2$, not just move it over!)',
    },
    {
      q: 'Solve $\\sqrt{x - 1} = 5$.',
      choices: ['$x = 6$', '$x = 24$', '$x = 26$', '$x = 4$'],
      answer: 2,
      solution: 'Square both sides: $x - 1 = 25$, so $x = 26$. Check: $\\sqrt{26 - 1} = \\sqrt{25} = 5$. ✓ (If you got $6$, you may have skipped the squaring step.)',
    },
    {
      q: 'How many solutions does $\\sqrt{x} = -4$ have?',
      choices: ['$1$', '$0$', '$2$', 'Infinitely many'],
      answer: 1,
      solution: 'The output of a square root is never negative, so $\\sqrt{x}$ can never equal $-4$. There are no solutions. (If you square both sides you get the candidate $x = 16$, but $\\sqrt{16} = 4$, not $-4$ — a perfect example of an extraneous solution!)',
    },
    {
      q: 'Solve $\\sqrt{x + 3} = x - 3$.',
      choices: ['$x = 6$ only', '$x = 1$ and $x = 6$', '$x = 1$ only', 'No solution'],
      answer: 0,
      solution: 'Square both sides: $x + 3 = x^2 - 6x + 9$, so $x^2 - 7x + 6 = 0$, which factors as $(x - 1)(x - 6) = 0$. Check $x = 6$: $\\sqrt{9} = 3$ and $6 - 3 = 3$. ✓ Check $x = 1$: $\\sqrt{4} = 2$, but $1 - 3 = -2$. That candidate is extraneous, so the only solution is $x = 6$.',
    },
    {
      q: 'Solve $\\sqrt{2x + 3} = x$.',
      choices: ['$x = -1$ and $x = 3$', '$x = -1$ only', 'No solution', '$x = 3$ only'],
      answer: 3,
      solution: 'Square both sides: $2x + 3 = x^2$, so $x^2 - 2x - 3 = 0$, which factors as $(x - 3)(x + 1) = 0$. Check $x = 3$: $\\sqrt{9} = 3$. ✓ Check $x = -1$: $\\sqrt{1} = 1$, but the right side is $-1$. Extraneous! The only solution is $x = 3$.',
    },
    {
      q: 'Solve $\\sqrt{x + 5} = \\sqrt{2x - 1}$.',
      choices: ['$x = 6$', '$x = -6$', '$x = 4$', 'No solution'],
      answer: 0,
      solution: 'Square both sides to clear both radicals at once: $x + 5 = 2x - 1$, so $x = 6$. Check: $\\sqrt{11} = \\sqrt{11}$, and both insides are positive. ✓',
    },
    {
      q: 'Solve $\\sqrt{x} + x = 6$.',
      choices: ['$x = 9$', '$x = 4$', '$x = 2$', '$x = 36$'],
      answer: 1,
      solution: 'Here is a slick substitution: let $u = \\sqrt{x}$, so $x = u^2$ and the equation becomes $u^2 + u - 6 = 0$, or $(u + 3)(u - 2) = 0$. Since $u = \\sqrt{x}$ cannot be negative, $u = 2$, so $x = 4$. Check: $\\sqrt{4} + 4 = 2 + 4 = 6$. ✓',
    },
  ],
}

const s202 = {
  id: '20.2',
  title: 'Absolute Value',
  learn: {
    concepts: [
      {
        heading: 'Distance from zero',
        body: 'The absolute value $|x|$ is the distance from $x$ to $0$ on the number line. Distance is never negative, so $|x| \\ge 0$ always: $|7| = 7$ and $|-7| = 7$, since both numbers sit $7$ steps from zero.',
      },
      {
        heading: 'How many solutions does $|x| = k$ have?',
        body: 'It depends on $k$! If $k$ is positive, there are two solutions: $x = k$ and $x = -k$, one on each side of zero. If $k = 0$, there is exactly one solution, $x = 0$. And if $k$ is negative, there are no solutions at all — no distance is negative.',
      },
      {
        heading: 'Distance between two numbers',
        body: 'The expression $|x - a|$ measures the distance between $x$ and $a$. So $|x - 4| = 3$ says "$x$ is $3$ away from $4$", giving $x = 7$ or $x = 1$. To solve any equation $|\\text{stuff}| = b$ with $b \\ge 0$, split into two cases: $\\text{stuff} = b$ or $\\text{stuff} = -b$.',
      },
      {
        heading: 'Variables on both sides, and inequalities',
        body: 'When the variable appears outside the absolute value too, like $|x - 2| = 2x - 7$, solve both cases AND check each answer: the right side must come out nonnegative, or the candidate is extraneous. For inequalities, $|x| < 3$ means $x$ is within $3$ of zero: $-3 < x < 3$. And $|x| > 3$ means $x$ is beyond $3$: $x < -3$ or $x > 3$.',
      },
    ],
    examples: [
      {
        problem: 'Solve $|3x - 1| = 8$.',
        steps: [
          'Split into two cases: $3x - 1 = 8$ or $3x - 1 = -8$.',
          'First case: $3x = 9$, so $x = 3$. Check: $|9 - 1| = 8$. ✓',
          'Second case: $3x = -7$, so $x = -\\frac{7}{3}$. Check: $|{-7} - 1| = |-8| = 8$. ✓',
        ],
        answer: '$x = 3$ or $x = -\\frac{7}{3}$',
      },
      {
        problem: 'Solve $|x - 2| = 2x - 7$.',
        steps: [
          'Case 1: $x - 2 = 2x - 7$, so $x = 5$. Check: $|5 - 2| = 3$ and $2(5) - 7 = 3$. ✓',
          'Case 2: $x - 2 = -(2x - 7) = -2x + 7$, so $3x = 9$ and $x = 3$. Check: $|3 - 2| = 1$, but $2(3) - 7 = -1$. An absolute value cannot equal $-1$, so $x = 3$ is extraneous.',
          'Only the first candidate survives the check.',
        ],
        answer: '$x = 5$ (the candidate $x = 3$ is extraneous)',
      },
      {
        problem: 'Describe all $x$ with $|x - 4| \\le 2$.',
        steps: [
          'Read it as distance: $x$ is at most $2$ away from $4$.',
          'So $x$ lies between $4 - 2 = 2$ and $4 + 2 = 6$, endpoints included.',
        ],
        answer: '$2 \\le x \\le 6$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $|-8|$?',
      choices: ['$8$', '$-8$', '$0$', '$\\frac{1}{8}$'],
      answer: 0,
      solution: 'The number $-8$ sits $8$ steps from zero, so $|-8| = 8$. Absolute value measures distance, and distance is never negative.',
    },
    {
      q: 'Solve $|x| = 5$.',
      choices: ['$x = 5$ only', '$x = -5$ only', 'No solution', '$x = 5$ or $x = -5$'],
      answer: 3,
      solution: 'Two numbers sit exactly $5$ steps from zero: $5$ on the right and $-5$ on the left. Both are solutions — do not forget the negative one!',
    },
    {
      q: 'Solve $|x| = -2$.',
      choices: ['$x = 2$ or $x = -2$', '$x = -2$ only', 'No solution', '$x = 2$ only'],
      answer: 2,
      solution: 'Absolute value is a distance, and no distance is negative. Nothing can have absolute value $-2$, so there is no solution.',
    },
    {
      q: 'Solve $|x - 3| = 4$.',
      choices: ['$x = 7$ only', '$x = 7$ or $x = -1$', '$x = 7$ or $x = 1$', '$x = -7$ or $x = 1$'],
      answer: 1,
      solution: 'Read it as distance: $x$ is $4$ away from $3$. Going right: $3 + 4 = 7$. Going left: $3 - 4 = -1$. Check: $|7 - 3| = 4$ ✓ and $|-1 - 3| = |-4| = 4$ ✓.',
    },
    {
      q: 'Solve $|2x + 3| = 7$.',
      choices: ['$x = 2$ or $x = -5$', '$x = 2$ only', '$x = 2$ or $x = 5$', '$x = -2$ or $x = 5$'],
      answer: 0,
      solution: 'Two cases. Case 1: $2x + 3 = 7$, so $x = 2$. Case 2: $2x + 3 = -7$, so $2x = -10$ and $x = -5$. Check both: $|7| = 7$ ✓ and $|-7| = 7$ ✓.',
    },
    {
      q: 'Which equation says "the distance between $x$ and $2$ is $6$"?',
      choices: ['$|x + 2| = 6$', '$|x - 6| = 2$', '$|x - 2| = 6$', '$|6 - x| = 2$'],
      answer: 2,
      solution: 'The distance between $x$ and $a$ is $|x - a|$, so distance $6$ from the number $2$ is $|x - 2| = 6$. Watch out: $|x + 2| = |x - (-2)|$ measures distance from $-2$, a different point!',
    },
    {
      q: 'Which describes all solutions of $|x| \\le 4$?',
      choices: ['$x \\le 4$', '$-4 \\le x \\le 4$', '$x \\le -4$ or $x \\ge 4$', '$0 \\le x \\le 4$'],
      answer: 1,
      solution: '$|x| \\le 4$ says $x$ is within $4$ of zero, on either side: $-4 \\le x \\le 4$. The answer $x \\le 4$ alone is too generous — it would include $x = -100$, which is $100$ away from zero.',
    },
    {
      q: 'Solve $|x + 1| = 2x - 5$.',
      choices: ['$x = 6$ only', '$x = 6$ and $x = \\frac{4}{3}$', '$x = \\frac{4}{3}$ only', 'No solution'],
      answer: 0,
      solution: 'Case 1: $x + 1 = 2x - 5$, so $x = 6$. Check: $|7| = 7$ and $2(6) - 5 = 7$. ✓ Case 2: $x + 1 = -(2x - 5)$, so $3x = 4$ and $x = \\frac{4}{3}$. Check: the right side is $2 \\cdot \\frac{4}{3} - 5 = -\\frac{7}{3}$, which is negative — an absolute value can never equal it. Extraneous! Only $x = 6$ survives.',
    },
    {
      q: 'Solve $|x - 5| = |x - 1|$.',
      choices: ['No solution', '$x = 2$', '$x = 3$ or $x = -3$', '$x = 3$'],
      answer: 3,
      solution: 'This asks for the number equally distant from $5$ and from $1$ — that is the midpoint, $x = 3$. Algebraically: $x - 5 = x - 1$ is impossible, and $x - 5 = -(x - 1)$ gives $2x = 6$, so $x = 3$. Check: $|3 - 5| = 2$ and $|3 - 1| = 2$. ✓',
    },
    {
      q: 'How many integers $x$ satisfy $|x - 3| < 2$?',
      choices: ['$5$', '$3$', '$4$', 'Infinitely many'],
      answer: 1,
      solution: '$|x - 3| < 2$ means $x$ is strictly within $2$ of $3$: $1 < x < 5$. The integers in that range are $2$, $3$, and $4$ — three of them. The endpoints $1$ and $5$ are exactly $2$ away, so the strict inequality rules them out.',
    },
  ],
}

const s203 = {
  id: '20.3',
  title: 'Floor and Ceiling',
  learn: {
    concepts: [
      {
        heading: 'The floor function rounds down',
        body: 'The floor of $x$, written $\\lfloor x \\rfloor$, is the greatest integer that is less than or equal to $x$. Picture $x$ dropping down to the nearest floor below it: $\\lfloor 3.7 \\rfloor = 3$ and $\\lfloor 0.9 \\rfloor = 0$. If $x$ is already an integer, it stays put: $\\lfloor 5 \\rfloor = 5$.',
      },
      {
        heading: 'The ceiling function rounds up',
        body: 'The ceiling of $x$, written $\\lceil x \\rceil$, is the smallest integer that is greater than or equal to $x$ — the nearest ceiling above. So $\\lceil 3.2 \\rceil = 4$, and again integers stay put: $\\lceil 5 \\rceil = 5$.',
      },
      {
        heading: 'The negative-number trap',
        body: 'Floor means "go down", not "chop off the decimal"! On the number line, down from $-2.5$ means moving further left: $\\lfloor -2.5 \\rfloor = -3$, not $-2$. Similarly $\\lceil -2.5 \\rceil = -2$, since up from $-2.5$ means moving right toward zero.',
      },
      {
        heading: 'Floors describe intervals',
        body: 'The equation $\\lfloor x \\rfloor = 5$ does not pin down one value — it describes every $x$ from $5$ up to (but not including) $6$: the interval $5 \\le x < 6$. Floors and ceilings show up in real life as step functions: shipping charges, parking fees, and ages all jump in whole steps.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $\\lfloor 2.7 \\rfloor$, $\\lfloor 6 \\rfloor$, and $\\lfloor -1.2 \\rfloor$.',
        steps: [
          '$\\lfloor 2.7 \\rfloor = 2$, the greatest integer at or below $2.7$.',
          '$\\lfloor 6 \\rfloor = 6$: an integer is its own floor.',
          '$\\lfloor -1.2 \\rfloor = -2$: going down from $-1.2$ means going LEFT on the number line, and the first integer at or below $-1.2$ is $-2$ (not $-1$, which is above).',
        ],
        answer: '$2$, $6$, and $-2$',
      },
      {
        problem: 'Compute $\\lfloor -3.4 \\rfloor + \\lceil 2.5 \\rceil$.',
        steps: [
          'Floor of $-3.4$: the greatest integer at or below $-3.4$ is $-4$ (not $-3$, which is above!).',
          'Ceiling of $2.5$: the smallest integer at or above $2.5$ is $3$.',
          'Add: $-4 + 3 = -1$.',
        ],
        answer: '$\\lfloor -3.4 \\rfloor + \\lceil 2.5 \\rceil = -1$',
      },
      {
        problem: 'A shipping company charges $\\$3$ for each pound or part of a pound. How much does a $4.2$-pound package cost?',
        steps: [
          '"Each pound or part of a pound" means we round UP: even a little over $4$ pounds counts as $5$ pounds.',
          'So the price uses the ceiling: $\\lceil 4.2 \\rceil = 5$.',
          'Cost: $5 \\times \\$3 = \\$15$.',
        ],
        answer: 'The package costs $\\$15$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\lfloor 6.8 \\rfloor$?',
      choices: ['$7$', '$6$', '$5$', '$6.5$'],
      answer: 1,
      solution: 'Floor rounds down to the nearest integer at or below: $\\lfloor 6.8 \\rfloor = 6$. (Ordinary rounding would give $7$, but floor always goes down.)',
    },
    {
      q: 'What is $\\lceil 3.1 \\rceil$?',
      choices: ['$3$', '$3.1$', '$4$', '$5$'],
      answer: 2,
      solution: 'Ceiling rounds up to the nearest integer at or above. Even though $3.1$ is barely past $3$, the ceiling is $4$.',
    },
    {
      q: 'What is $\\lfloor -2.5 \\rfloor$?',
      choices: ['$-3$', '$-2$', '$2$', '$3$'],
      answer: 0,
      solution: 'Down from $-2.5$ means further left on the number line: the greatest integer at or below $-2.5$ is $-3$. Chopping off the decimal to get $-2$ is the classic trap — $-2$ is bigger than $-2.5$, so it cannot be the floor.',
    },
    {
      q: 'What is $\\lfloor 5 \\rfloor + \\lceil 5 \\rceil$?',
      choices: ['$11$', '$9$', '$12$', '$10$'],
      answer: 3,
      solution: 'An integer is its own floor and its own ceiling: $\\lfloor 5 \\rfloor = 5$ and $\\lceil 5 \\rceil = 5$. The sum is $10$. (The ceiling of $5$ is not $6$ — ceiling only moves numbers that are not already integers.)',
    },
    {
      q: 'What is $\\lceil -4.2 \\rceil$?',
      choices: ['$-5$', '$4$', '$-4$', '$5$'],
      answer: 2,
      solution: 'Up from $-4.2$ means moving right, toward zero: the smallest integer at or above $-4.2$ is $-4$. (Going to $-5$ would be the floor.)',
    },
    {
      q: 'Compute $\\lfloor 3.6 \\rfloor + \\lceil 3.6 \\rceil$.',
      choices: ['$7$', '$6$', '$8$', '$7.2$'],
      answer: 0,
      solution: '$\\lfloor 3.6 \\rfloor = 3$ and $\\lceil 3.6 \\rceil = 4$, so the sum is $7$. Fun fact: for any non-integer $x$, floor and ceiling are consecutive integers, so their sum is always odd!',
    },
    {
      q: 'If $\\lfloor x \\rfloor = 5$, which describes ALL possible values of $x$?',
      choices: ['$4 < x \\le 5$', '$x = 5$ only', '$5 \\le x < 6$', '$5 < x \\le 6$'],
      answer: 2,
      solution: 'Every number from $5$ up to (but not including) $6$ has floor $5$: for instance $\\lfloor 5 \\rfloor = 5$ and $\\lfloor 5.99 \\rfloor = 5$, but $\\lfloor 6 \\rfloor = 6$. So the answer is the interval $5 \\le x < 6$ — watch which endpoint is included!',
    },
    {
      q: 'Compute $\\lfloor -1.5 \\rfloor + \\lceil 4.5 \\rceil$.',
      choices: ['$4$', '$3$', '$2$', '$-3$'],
      answer: 1,
      solution: 'Floor of $-1.5$ goes down (left) to $-2$. Ceiling of $4.5$ goes up to $5$. Sum: $-2 + 5 = 3$. (If you got $4$, you probably chopped $-1.5$ to $-1$ — remember, floor of a negative goes further negative.)',
    },
    {
      q: 'A courier charges $\\$4$ for each kilogram or part of a kilogram. What does a $6.3$ kg package cost?',
      choices: ['$\\$24$', '$\\$25.20$', '$\\$32$', '$\\$28$'],
      answer: 3,
      solution: '"Each kilogram or part of one" means round up: $\\lceil 6.3 \\rceil = 7$ kilograms of charge. Cost: $7 \\times \\$4 = \\$28$. Using the floor ($6 \\times \\$4 = \\$24$) would let that extra $0.3$ kg ride for free — couriers never do!',
    },
    {
      q: 'How many integers $n$ satisfy $\\left\\lfloor \\frac{n}{2} \\right\\rfloor = 3$?',
      choices: ['$2$', '$1$', '$3$', 'Infinitely many'],
      answer: 0,
      solution: '$\\lfloor n/2 \\rfloor = 3$ means $3 \\le \\frac{n}{2} < 4$, so $6 \\le n < 8$. The integers in that range are $6$ and $7$ — check: $\\lfloor 6/2 \\rfloor = 3$ ✓ and $\\lfloor 7/2 \\rfloor = \\lfloor 3.5 \\rfloor = 3$ ✓. That makes $2$ integers.',
    },
  ],
}

const s204 = {
  id: '20.4',
  title: 'Rational Functions',
  learn: {
    concepts: [
      {
        heading: 'A fraction of polynomials',
        body: 'A rational function is a ratio of polynomials, like $f(x) = \\frac{x+1}{x-2}$. "Rational" comes from "ratio" — the same root as rational numbers, which are ratios of integers. To evaluate, just substitute: $f(5) = \\frac{5+1}{5-2} = \\frac{6}{3} = 2$.',
      },
      {
        heading: 'The domain excludes denominator zeros',
        body: 'Division by zero is undefined, so any $x$ that makes the denominator $0$ is banned from the domain. For $f(x) = \\frac{x+1}{x-2}$, the denominator is $0$ when $x = 2$, so the domain is all real numbers except $2$.',
      },
      {
        heading: 'Simplify, but remember the hole',
        body: 'The function $\\frac{x^2-4}{x-2}$ simplifies: the numerator factors as $(x-2)(x+2)$, and the $(x-2)$s cancel, leaving $x + 2$. But careful — the cancellation is only legal when $x \\ne 2$, because the original function divides by zero there. So $\\frac{x^2-4}{x-2} = x + 2$ for every $x$ EXCEPT $2$, where the original is still undefined.',
      },
      {
        heading: 'Near the forbidden value, and solving equations',
        body: 'What happens close to an excluded value? For $f(x) = \\frac{6}{x-2}$ at $x = 2.001$, the denominator is a tiny $0.001$, so $f(x) = 6000$ — dividing by a tiny number produces a huge one. To solve $\\frac{x+1}{x-2} = 3$, multiply both sides by the denominator and solve; then make sure your answer is not an excluded value.',
      },
    ],
    examples: [
      {
        problem: 'For $f(x) = \\frac{x+1}{x-2}$, find $f(5)$ and the domain of $f$.',
        steps: [
          'Evaluate: $f(5) = \\frac{5+1}{5-2} = \\frac{6}{3} = 2$.',
          'The denominator $x - 2$ is zero when $x = 2$, and division by zero is undefined.',
          'So the domain is all real numbers except $x = 2$.',
        ],
        answer: '$f(5) = 2$; the domain is all $x \\ne 2$',
      },
      {
        problem: 'Simplify $\\frac{x^2 - 9}{x - 3}$.',
        steps: [
          'Factor the numerator: $x^2 - 9 = (x-3)(x+3)$.',
          'Cancel the common factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$, valid whenever $x \\ne 3$.',
          'The simplified form equals the original everywhere except $x = 3$, where the original is undefined.',
        ],
        answer: '$x + 3$, for $x \\ne 3$',
      },
      {
        problem: 'Solve $\\frac{x+1}{x-2} = 3$.',
        steps: [
          'Multiply both sides by $x - 2$: $x + 1 = 3(x - 2) = 3x - 6$.',
          'Solve: $7 = 2x$, so $x = \\frac{7}{2}$.',
          'Check that $x = \\frac{7}{2}$ is allowed (it is not the excluded value $2$), and verify: $\\frac{7/2 + 1}{7/2 - 2} = \\frac{9/2}{3/2} = 3$. ✓',
        ],
        answer: '$x = \\frac{7}{2}$',
      },
    ],
  },
  problems: [
    {
      q: 'If $f(x) = \\frac{12}{x}$, what is $f(4)$?',
      choices: ['$48$', '$\\frac{1}{3}$', '$3$', '$8$'],
      answer: 2,
      solution: 'Substitute: $f(4) = \\frac{12}{4} = 3$.',
    },
    {
      q: 'What is the domain of $f(x) = \\frac{x+5}{x-7}$?',
      choices: ['All $x$ except $-5$', 'All $x$ except $7$', 'All $x$ except $-7$', 'All real numbers'],
      answer: 1,
      solution: 'Only the denominator can cause trouble: $x - 7 = 0$ when $x = 7$, so $7$ is excluded. A zero in the NUMERATOR is fine — $f(-5) = 0$ is a perfectly good output.',
    },
    {
      q: 'If $f(x) = \\frac{x+1}{x-2}$, what is $f(4)$?',
      choices: ['$\\frac{5}{2}$', '$5$', '$\\frac{2}{5}$', '$3$'],
      answer: 0,
      solution: 'Substitute: $f(4) = \\frac{4+1}{4-2} = \\frac{5}{2}$.',
    },
    {
      q: 'Which value of $x$ must be excluded from the domain of $\\frac{2x+1}{3x-12}$?',
      choices: ['$x = -\\frac{1}{2}$', '$x = 12$', '$x = 3$', '$x = 4$'],
      answer: 3,
      solution: 'Set the denominator to zero: $3x - 12 = 0$ gives $x = 4$. (The value $-\\frac{1}{2}$ zeroes the numerator, which just makes the output $0$ — no problem there.)',
    },
    {
      q: 'For $x \\ne 2$, the expression $\\frac{x^2 - 4}{x - 2}$ simplifies to which of these?',
      choices: ['$x - 2$', '$x + 2$', '$x$', '$x^2 - 2$'],
      answer: 1,
      solution: 'Factor the numerator: $x^2 - 4 = (x-2)(x+2)$. Cancel the common factor $x - 2$ (legal since $x \\ne 2$), leaving $x + 2$.',
    },
    {
      q: 'Let $g(x) = \\frac{x^2 - 9}{x - 3}$. Which statement is true?',
      choices: ['$g(x) = x + 3$ for every $x$ except $3$', '$g(x) = x + 3$ for all $x$', '$g(3) = 6$', 'The domain of $g$ is all real numbers'],
      answer: 0,
      solution: 'Factoring and cancelling gives $g(x) = x + 3$ — but only where the original makes sense. At $x = 3$ the original is $\\frac{0}{0}$, undefined, so $g(3)$ does not exist even though the simplified form would give $6$. The simplification is true everywhere EXCEPT $x = 3$.',
    },
    {
      q: 'Solve $\\frac{x+3}{x-1} = 2$.',
      choices: ['$x = 1$', '$x = -5$', '$x = 5$', '$x = 3$'],
      answer: 2,
      solution: 'Multiply both sides by $x - 1$: $x + 3 = 2x - 2$, so $x = 5$. Check that $5$ is not the excluded value $1$, and verify: $\\frac{5+3}{5-1} = \\frac{8}{4} = 2$. ✓',
    },
    {
      q: 'Let $f(x) = \\frac{6}{x-2}$. What happens to $f(x)$ when $x$ is just a bit bigger than $2$, like $x = 2.001$?',
      choices: ['$f(x)$ becomes very large', '$f(x)$ gets close to $0$', '$f(x)$ gets close to $6$', '$f(x)$ equals $3$'],
      answer: 0,
      solution: 'At $x = 2.001$ the denominator is $0.001$, so $f(x) = \\frac{6}{0.001} = 6000$. The closer $x$ sneaks toward $2$, the tinier the denominator and the more enormous the output. That is the signature behavior of a rational function near an excluded value.',
    },
    {
      q: 'Solve $\\frac{x+2}{x-3} = \\frac{x-1}{x+1}$.',
      choices: ['$x = 7$', '$x = -\\frac{1}{7}$', 'No solution', '$x = \\frac{1}{7}$'],
      answer: 3,
      solution: 'Cross-multiply: $(x+2)(x+1) = (x-1)(x-3)$. Expand both sides: $x^2 + 3x + 2 = x^2 - 4x + 3$. The $x^2$ terms cancel, leaving $3x + 2 = -4x + 3$, so $7x = 1$ and $x = \\frac{1}{7}$. Neither denominator is zero there, so the solution is valid.',
    },
    {
      q: 'Solve $\\frac{x^2 - 3x}{x - 3} = 3$.',
      choices: ['$x = 3$', 'No solution', '$x = 0$', '$x = 1$'],
      answer: 1,
      solution: 'Factor: $\\frac{x(x-3)}{x-3} = x$ for $x \\ne 3$. So the equation says $x = 3$ — but $x = 3$ is exactly the excluded value, where the original expression is $\\frac{0}{0}$, undefined! The only candidate is forbidden, so there is no solution. Always compare your answer against the excluded values.',
    },
  ],
}

const s205 = {
  id: '20.5',
  title: 'Piecewise Defined Functions',
  learn: {
    concepts: [
      {
        heading: 'Different rules on different pieces',
        body: 'A piecewise defined function uses different formulas on different parts of its domain. For example: $f(x) = x + 3$ if $x < 1$, and $f(x) = 2x$ if $x \\ge 1$. To evaluate, first check WHICH condition your input satisfies, then use that branch — and only that branch.',
      },
      {
        heading: 'Watch the boundaries',
        body: 'The boundary between pieces is where mistakes happen. In the function above, which branch owns $x = 1$? Check the conditions: $1 < 1$ is false, but $1 \\ge 1$ is true — so $f(1) = 2(1) = 2$. In a well-defined piecewise function, each input belongs to exactly one branch; the $<$ versus $\\le$ symbols decide who gets the boundary.',
      },
      {
        heading: 'Absolute value is secretly piecewise',
        body: 'Our friend $|x|$ is really a piecewise function in disguise: $|x| = x$ if $x \\ge 0$, and $|x| = -x$ if $x < 0$. For a negative input, negating it makes it positive — that is why $|-7| = -(-7) = 7$. Many "special" functions are just piecewise rules with good publicity.',
      },
      {
        heading: 'Solving equations branch by branch',
        body: 'To solve $f(x) = k$ for a piecewise $f$, work through each branch separately: set that branch\'s formula equal to $k$, solve, and then CHECK that the solution actually satisfies the branch\'s condition. A solution that lands outside its own branch\'s territory does not count.',
      },
    ],
    examples: [
      {
        problem: 'Let $f(x) = x + 3$ if $x < 1$, and $f(x) = 2x$ if $x \\ge 1$. Find $f(0)$, $f(1)$, and $f(4)$.',
        steps: [
          '$f(0)$: since $0 < 1$, use the first branch: $f(0) = 0 + 3 = 3$.',
          '$f(1)$: is $1 < 1$? No. Is $1 \\ge 1$? Yes — use the second branch: $f(1) = 2(1) = 2$.',
          '$f(4)$: since $4 \\ge 1$, use the second branch: $f(4) = 2(4) = 8$.',
        ],
        answer: '$f(0) = 3$, $f(1) = 2$, $f(4) = 8$',
      },
      {
        problem: 'A museum charges nothing for children under $5$, $\\$6$ for visitors aged $5$ through $12$, and $\\$10$ for anyone older. Write the price $P(a)$ as a piecewise function of age $a$.',
        steps: [
          'Translate each tier into a condition: "under 5" is $a < 5$; "aged 5 through 12" is $5 \\le a \\le 12$; "older" is $a > 12$.',
          'Attach the price to each condition, making sure every age lands in exactly one tier.',
        ],
        answer: '$P(a) = 0$ if $a < 5$; $P(a) = 6$ if $5 \\le a \\le 12$; $P(a) = 10$ if $a > 12$',
      },
      {
        problem: 'Let $f(x) = x + 8$ if $x < 0$, and $f(x) = 3x$ if $x \\ge 0$. Solve $f(x) = 6$.',
        steps: [
          'First branch: $x + 8 = 6$ gives $x = -2$. Does it satisfy $x < 0$? Yes — keep it.',
          'Second branch: $3x = 6$ gives $x = 2$. Does it satisfy $x \\ge 0$? Yes — keep it too.',
          'Both branches contribute a solution, so there are two.',
        ],
        answer: '$x = -2$ or $x = 2$',
      },
    ],
  },
  problems: [
    {
      q: 'Let $f(x) = x + 2$ if $x < 3$, and $f(x) = 3x - 2$ if $x \\ge 3$. What is $f(1)$?',
      choices: ['$1$', '$3$', '$5$', '$0$'],
      answer: 1,
      solution: 'Since $1 < 3$, use the first branch: $f(1) = 1 + 2 = 3$. (The answer $1$ comes from using the wrong branch, $3(1) - 2$.)',
    },
    {
      q: 'For the same function ($f(x) = x + 2$ if $x < 3$, and $f(x) = 3x - 2$ if $x \\ge 3$), what is $f(3)$?',
      choices: ['$7$', '$5$', '$3$', '$12$'],
      answer: 0,
      solution: 'The boundary! Check the conditions: $3 < 3$ is false, but $3 \\ge 3$ is true, so the second branch owns $x = 3$: $f(3) = 3(3) - 2 = 7$. Using the first branch would give $5$ — but $x = 3$ is not in that branch\'s territory.',
    },
    {
      q: 'Still with $f(x) = x + 2$ if $x < 3$, and $f(x) = 3x - 2$ if $x \\ge 3$: what is $f(5)$?',
      choices: ['$7$', '$15$', '$13$', '$10$'],
      answer: 2,
      solution: 'Since $5 \\ge 3$, use the second branch: $f(5) = 3(5) - 2 = 13$.',
    },
    {
      q: 'Which piecewise rule defines $|x|$?',
      choices: ['$f(x) = x$ for every $x$', '$f(x) = -x$ for every $x$', '$f(x) = -x$ if $x \\ge 0$, and $f(x) = x$ if $x < 0$', '$f(x) = x$ if $x \\ge 0$, and $f(x) = -x$ if $x < 0$'],
      answer: 3,
      solution: 'For nonnegative inputs, $|x|$ leaves them alone: $|x| = x$. For negative inputs, it flips the sign to make them positive: $|x| = -x$ (for example, $|-7| = -(-7) = 7$). The third choice has the branches backwards — it would output $-x$ for positive $x$, giving negative results.',
    },
    {
      q: 'Let $g(x) = x^2$ if $x \\le 2$, and $g(x) = x + 4$ if $x > 2$. What is $g(2)$?',
      choices: ['$4$', '$6$', '$8$', '$2$'],
      answer: 0,
      solution: 'Check the boundary: $2 \\le 2$ is true, so the first branch owns $x = 2$: $g(2) = 2^2 = 4$. (The second branch would give $6$, but its condition $2 > 2$ is false.)',
    },
    {
      q: 'Amusement park rides cost $\\$4$ for children under $10$ and $\\$7$ for anyone $10$ or older. How much does a ride cost for a child who just turned $10$?',
      choices: ['$\\$4$', '$\\$7$', '$\\$11$', '$\\$5.50$'],
      answer: 1,
      solution: 'Age $10$ is the boundary. "Under $10$" means $a < 10$, which is false for $a = 10$; "$10$ or older" means $a \\ge 10$, which is true. So the price is $\\$7$. Boundary values always go to the branch whose condition they actually satisfy.',
    },
    {
      q: 'Let $f(x) = 2x$ if $x < 4$, and $f(x) = x + 6$ if $x \\ge 4$. Solve $f(x) = 10$.',
      choices: ['$x = 5$ and $x = 4$', '$x = 5$ only', '$x = 4$ only', 'No solution'],
      answer: 2,
      solution: 'First branch: $2x = 10$ gives $x = 5$ — but the condition is $x < 4$, and $5$ fails it. Discard! Second branch: $x + 6 = 10$ gives $x = 4$, and $4 \\ge 4$ holds. ✓ So $x = 4$ is the only solution. Always check the candidate against its own branch\'s condition.',
    },
    {
      q: 'A taxi charges $\\$2.50$ for the first mile and $\\$1.50$ for each additional mile. What is the fare for a $5$-mile ride?',
      choices: ['$\\$8.50$', '$\\$10.00$', '$\\$7.50$', '$\\$12.50$'],
      answer: 0,
      solution: 'The first mile costs $\\$2.50$, and the remaining $5 - 1 = 4$ miles cost $4 \\times \\$1.50 = \\$6.00$. Total: $\\$2.50 + \\$6.00 = \\$8.50$. (Charging $\\$1.50$ for all five miles plus the flat fee would double-count the first mile.)',
    },
    {
      q: 'Let $f(x) = x + 5$ if $x < 0$, and $f(x) = x^2$ if $x \\ge 0$. Solve $f(x) = 9$.',
      choices: ['$x = 3$ or $x = -3$', '$x = 3$ or $x = 4$', '$x = -3$ only', '$x = 3$ only'],
      answer: 3,
      solution: 'First branch: $x + 5 = 9$ gives $x = 4$, but $4 < 0$ is false. Discard. Second branch: $x^2 = 9$ gives $x = 3$ or $x = -3$; the condition $x \\ge 0$ keeps $3$ and rejects $-3$. So the only solution is $x = 3$. (Note that $f(-3) = -3 + 5 = 2$, not $9$ — the first branch owns $-3$.)',
    },
    {
      q: 'Let $f(x) = x^2$ if $x < 1$, and $f(x) = 4 - x$ if $x \\ge 1$. How many solutions does $f(x) = 2$ have?',
      choices: ['$1$', '$2$', '$3$', '$0$'],
      answer: 1,
      solution: 'First branch: $x^2 = 2$ gives $x = \\sqrt{2}$ or $x = -\\sqrt{2}$. Since $\\sqrt{2} \\approx 1.41$ fails $x < 1$, only $x = -\\sqrt{2}$ survives. Second branch: $4 - x = 2$ gives $x = 2$, and $2 \\ge 1$ holds. ✓ Total: two solutions, $x = -\\sqrt{2}$ and $x = 2$.',
    },
  ],
}

const challenge = [
  {
    q: 'Solve $\\sqrt{2x + 7} = x + 2$.',
    choices: ['$x = 1$ and $x = -3$', '$x = -3$ only', '$x = 1$ only', 'No solution'],
    answer: 2,
    solution: 'Square both sides: $2x + 7 = x^2 + 4x + 4$, so $x^2 + 2x - 3 = 0$, which factors as $(x + 3)(x - 1) = 0$. Check $x = 1$: $\\sqrt{9} = 3$ and $1 + 2 = 3$. ✓ Check $x = -3$: $\\sqrt{1} = 1$, but $-3 + 2 = -1$. Extraneous! Only $x = 1$ works.',
  },
  {
    q: 'For which values of $x$ is $|x - 3| = 3 - x$ true?',
    choices: ['$x = 3$ only', 'All $x \\le 3$', 'All $x \\ge 3$', 'All real numbers $x$'],
    answer: 1,
    solution: 'The right side is the NEGATION of $x - 3$, and $|a| = -a$ exactly when $a \\le 0$. So we need $x - 3 \\le 0$, that is, $x \\le 3$. Spot-check: at $x = 1$, $|{-2}| = 2$ and $3 - 1 = 2$ ✓; at $x = 5$, $|2| = 2$ but $3 - 5 = -2$. ✗',
  },
  {
    q: 'Which describes ALL solutions of $\\lfloor x \\rfloor = -4$?',
    choices: ['$-4 \\le x < -3$', '$-5 < x \\le -4$', '$-4 < x \\le -3$', '$x = -4$ only'],
    answer: 0,
    solution: 'The floor is $-4$ for every $x$ from $-4$ up to (but not including) $-3$: for example $\\lfloor -4 \\rfloor = -4$ and $\\lfloor -3.01 \\rfloor = -4$, but $\\lfloor -3 \\rfloor = -3$. So the interval is $-4 \\le x < -3$.',
  },
  {
    q: 'Compute $\\left\\lfloor -\\frac{7}{2} \\right\\rfloor + \\left\\lceil -\\frac{7}{2} \\right\\rceil$.',
    choices: ['$-6$', '$-8$', '$7$', '$-7$'],
    answer: 3,
    solution: '$-\\frac{7}{2} = -3.5$. The floor goes down (left) to $-4$; the ceiling goes up (right) to $-3$. Sum: $-4 + (-3) = -7$. Neat pattern: for a number exactly halfway between two integers, floor plus ceiling is just twice the number itself, and $2 \\times (-3.5) = -7$. ✓',
  },
  {
    q: 'What is the domain of $f(x) = \\frac{\\sqrt{x - 2}}{x - 5}$?',
    choices: ['$x \\ge 2$ and $x \\ne 5$', '$x \\ge 2$', 'All $x \\ne 5$', '$x > 2$'],
    answer: 0,
    solution: 'Two rules apply at once. The radical needs $x - 2 \\ge 0$, so $x \\ge 2$. The denominator needs $x - 5 \\ne 0$, so $x \\ne 5$. The domain is everything satisfying BOTH: $x \\ge 2$ with $x = 5$ punched out.',
  },
  {
    q: 'Solve $|2x - 5| = x + 1$.',
    choices: ['$x = 6$ only', '$x = 6$ and $x = \\frac{4}{3}$', '$x = \\frac{4}{3}$ only', 'No solution'],
    answer: 1,
    solution: 'Case 1: $2x - 5 = x + 1$ gives $x = 6$. Check: $|7| = 7$ and $6 + 1 = 7$. ✓ Case 2: $2x - 5 = -(x + 1)$ gives $3x = 4$, so $x = \\frac{4}{3}$. Check: $|2 \\cdot \\frac{4}{3} - 5| = |-\\frac{7}{3}| = \\frac{7}{3}$ and $\\frac{4}{3} + 1 = \\frac{7}{3}$. ✓ This time BOTH candidates survive — that is why we check instead of assuming.',
  },
  {
    q: 'Let $f(x) = \\frac{x^2 - 1}{x - 1}$. Which statement is true?',
    choices: ['$f(3) = 4$ and $f(1) = 2$', '$f(3) = 2$ and $f(1)$ is undefined', '$f(3) = 4$ and $f(1)$ is undefined', '$f$ is defined for all real numbers'],
    answer: 2,
    solution: 'Evaluate $f(3) = \\frac{9 - 1}{3 - 1} = \\frac{8}{2} = 4$. At $x = 1$ the function is $\\frac{0}{0}$ — undefined, even though the simplified form $x + 1$ would give $2$. Simplifying never rescues an excluded value.',
  },
  {
    q: 'A parking garage charges $\\$5$ for each hour or part of an hour. What does parking for $2$ hours and $20$ minutes cost?',
    choices: ['$\\$10$', '$\\$11.67$', '$\\$20$', '$\\$15$'],
    answer: 3,
    solution: '$2$ hours $20$ minutes is $2\\frac{1}{3}$ hours, and "each hour or part of an hour" rounds up: $\\lceil 2\\frac{1}{3} \\rceil = 3$ hours of charge. Cost: $3 \\times \\$5 = \\$15$. The garage happily charges those $20$ extra minutes as a full hour.',
  },
  {
    q: 'Which describes ALL solutions of $\\lfloor 2x \\rfloor = 7$?',
    choices: ['$3 \\le x < 4$', '$3.5 \\le x < 4$', '$3.5 < x \\le 4$', '$x = 3.5$ only'],
    answer: 1,
    solution: '$\\lfloor 2x \\rfloor = 7$ means $7 \\le 2x < 8$. Divide everything by $2$: $3.5 \\le x < 4$. Spot-check: $x = 3.5$ gives $\\lfloor 7 \\rfloor = 7$ ✓, and $x = 4$ gives $\\lfloor 8 \\rfloor = 8$. ✗',
  },
  {
    q: 'Solve $\\frac{x + 4}{x - 2} = 5$.',
    choices: ['$x = \\frac{7}{2}$', '$x = 2$', '$x = \\frac{14}{3}$', '$x = -\\frac{7}{2}$'],
    answer: 0,
    solution: 'Multiply both sides by $x - 2$: $x + 4 = 5x - 10$, so $14 = 4x$ and $x = \\frac{7}{2}$. It is not the excluded value $2$, and checking: $\\frac{7/2 + 4}{7/2 - 2} = \\frac{15/2}{3/2} = 5$. ✓',
  },
  {
    q: 'How many integers $x$ satisfy $|2x - 1| < 9$?',
    choices: ['$9$', '$7$', '$8$', '$10$'],
    answer: 2,
    solution: '$|2x - 1| < 9$ means $-9 < 2x - 1 < 9$. Add $1$ throughout: $-8 < 2x < 10$, then divide by $2$: $-4 < x < 5$. The integers strictly between $-4$ and $5$ are $-3, -2, \\ldots, 4$ — that is $8$ integers. (Careful not to include the endpoints $-4$ and $5$.)',
  },
  {
    q: 'Let $f(x) = 2x + 1$ if $x < 0$, and $f(x) = \\sqrt{x}$ if $x \\ge 0$. What is $f(-3) + f(9)$?',
    choices: ['$4$', '$-8$', '$22$', '$-2$'],
    answer: 3,
    solution: 'Pick the right branch for each input. $f(-3)$: since $-3 < 0$, use $2x + 1$: $f(-3) = -6 + 1 = -5$. $f(9)$: since $9 \\ge 0$, use the radical: $f(9) = \\sqrt{9} = 3$. Sum: $-5 + 3 = -2$.',
  },
]

const worksheet = [
  {
    q: 'Find the domain of $f(x) = \\sqrt{3x - 9}$.',
    answer: '$x \\ge 3$',
    solution: 'The inside must be nonnegative: $3x - 9 \\ge 0$, so $3x \\ge 9$ and $x \\ge 3$.',
  },
  {
    q: 'Solve $|x - 4| = 9$.',
    answer: '$x = 13$ or $x = -5$',
    solution: 'The distance from $x$ to $4$ is $9$, so $x = 4 + 9 = 13$ or $x = 4 - 9 = -5$. Check: $|13 - 4| = 9$ ✓ and $|-5 - 4| = |-9| = 9$ ✓.',
  },
  {
    q: 'Compute $\\lfloor -6.1 \\rfloor + \\lceil -6.1 \\rceil$.',
    answer: '$-13$',
    solution: 'Floor goes down: $\\lfloor -6.1 \\rfloor = -7$ (not $-6$!). Ceiling goes up, toward zero: $\\lceil -6.1 \\rceil = -6$. Sum: $-7 + (-6) = -13$.',
  },
  {
    q: 'If $f(x) = \\frac{x + 3}{x - 1}$, find $f(5)$.',
    answer: '$2$',
    solution: 'Substitute: $f(5) = \\frac{5 + 3}{5 - 1} = \\frac{8}{4} = 2$.',
  },
  {
    q: 'Let $f(x) = 4x$ if $x < 2$, and $f(x) = x + 7$ if $x \\ge 2$. Find $f(2)$ and $f(-1)$.',
    answer: '$f(2) = 9$ and $f(-1) = -4$',
    solution: 'For $f(2)$: the condition $2 \\ge 2$ is true, so use the second branch: $2 + 7 = 9$. For $f(-1)$: since $-1 < 2$, use the first branch: $4(-1) = -4$.',
  },
  {
    q: 'Solve $\\sqrt{x - 4} = 3$.',
    answer: '$x = 13$',
    solution: 'Square both sides: $x - 4 = 9$, so $x = 13$. Check: $\\sqrt{13 - 4} = \\sqrt{9} = 3$. ✓',
  },
  {
    q: 'Solve $\\sqrt{x + 11} = x - 1$.',
    answer: '$x = 5$',
    solution: 'Square both sides: $x + 11 = x^2 - 2x + 1$, so $x^2 - 3x - 10 = 0$, which factors as $(x - 5)(x + 2) = 0$. Check $x = 5$: $\\sqrt{16} = 4$ and $5 - 1 = 4$. ✓ Check $x = -2$: $\\sqrt{9} = 3$, but $-2 - 1 = -3$. Extraneous! The only solution is $x = 5$.',
  },
  {
    q: 'Solve $|3x - 2| = x + 6$.',
    answer: '$x = 4$ or $x = -1$',
    solution: 'Case 1: $3x - 2 = x + 6$ gives $2x = 8$, so $x = 4$. Check: $|10| = 10$ and $4 + 6 = 10$. ✓ Case 2: $3x - 2 = -(x + 6)$ gives $4x = -4$, so $x = -1$. Check: $|-5| = 5$ and $-1 + 6 = 5$. ✓ Both candidates pass, so there are two solutions.',
  },
  {
    q: 'How many integers $x$ satisfy $\\left\\lfloor \\frac{x}{3} \\right\\rfloor = 2$?',
    answer: '$3$ integers ($x = 6, 7, 8$)',
    solution: '$\\lfloor x/3 \\rfloor = 2$ means $2 \\le \\frac{x}{3} < 3$, so $6 \\le x < 9$. The integers in that range are $6$, $7$, and $8$ — three of them. (Check the edge: $\\lfloor 9/3 \\rfloor = 3$, so $9$ is out.)',
  },
  {
    q: 'Solve $\\frac{x^2 - 2x}{x - 2} = 2$.',
    answer: 'No solution',
    solution: 'Factor the numerator: $\\frac{x(x - 2)}{x - 2} = x$ for $x \\ne 2$. So the equation demands $x = 2$ — but $x = 2$ makes the original expression $\\frac{0}{0}$, undefined. The only candidate is exactly the forbidden value, so the equation has no solution.',
  },
]

export default {
  id: 'intro-algebra-ch20',
  book: 'intro-algebra',
  number: 20,
  title: 'Special Functions',
  intro:
    'You have mastered functions that behave politely everywhere — lines, quadratics, and their friends. This chapter introduces functions with personality: radicals that refuse negative inputs, absolute values that split into cases, floors and ceilings that jump in steps, and functions built from different rules glued together. Learning where each one gets picky is the whole game!',
  sections: [s201, s202, s203, s204, s205],
  challenge,
  worksheet,
}
