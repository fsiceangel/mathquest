// Introduction to Algebra — Chapter 13: Quadratic Equations — Part 2
// All problems, explanations, and examples are original MathQuest content.

const s131 = {
  id: '13.1',
  title: 'Squares of Binomials Revisited',
  learn: {
    concepts: [
      {
        heading: 'Spotting a perfect square',
        body: 'A trinomial like $x^2 + 6x + 9$ is secretly a square: it equals $(x+3)^2$. The pattern is $x^2 + 2ax + a^2 = (x+a)^2$. To check a candidate, take half the middle coefficient and square it — if that matches the constant term, you have a perfect square trinomial.',
      },
      {
        heading: 'Unsquaring an equation',
        body: 'If $(x+a)^2 = k$ with $k > 0$, then $x + a$ is a number whose square is $k$. There are TWO such numbers: $\\sqrt{k}$ and $-\\sqrt{k}$. So $x + a = \\pm\\sqrt{k}$, giving two solutions. Forgetting the minus sign is the single most common quadratic mistake — always write the $\\pm$!',
      },
      {
        heading: 'When the square equals zero',
        body: 'If $(x+a)^2 = 0$, then $x + a$ must be $0$ itself, since only $0$ squares to $0$. The equation has exactly one solution, $x = -a$. We sometimes call it a double root, because the factor $x + a$ appears twice.',
      },
      {
        heading: 'When $k$ is negative',
        body: 'The square of a real number is never negative, so $(x+a)^2 = k$ has NO real solutions when $k < 0$. If we allow complex numbers, then $x + a = \\pm i\\sqrt{-k}$ — the solutions exist, they just live off the real number line.',
      },
    ],
    examples: [
      {
        problem: 'Solve $(x-3)^2 = 25$.',
        steps: [
          'The quantity $x - 3$ squares to $25$, so $x - 3$ must be $5$ or $-5$: we write $x - 3 = \\pm 5$.',
          'Taking $x - 3 = 5$ gives $x = 8$. Taking $x - 3 = -5$ gives $x = -2$.',
          'Check both: $(8-3)^2 = 25$ and $(-2-3)^2 = (-5)^2 = 25$. Both work!',
        ],
        answer: '$x = 8$ or $x = -2$',
      },
      {
        problem: 'Solve $x^2 + 10x + 25 = 49$.',
        steps: [
          'Half of $10$ is $5$, and $5^2 = 25$ — the left side is the perfect square $(x+5)^2$.',
          'So $(x+5)^2 = 49$, which means $x + 5 = \\pm 7$.',
          'From $x + 5 = 7$ we get $x = 2$; from $x + 5 = -7$ we get $x = -12$.',
        ],
        answer: '$x = 2$ or $x = -12$',
      },
      {
        problem: 'Solve $(x+2)^2 = -9$.',
        steps: [
          'A real number squared is never negative, so there are no real solutions.',
          'Allowing complex numbers, $x + 2 = \\pm\\sqrt{-9} = \\pm 3i$.',
          'So $x = -2 + 3i$ or $x = -2 - 3i$.',
        ],
        answer: 'No real solutions; the complex solutions are $x = -2 \\pm 3i$',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these is a perfect square trinomial?',
      choices: ['$x^2 + 6x + 6$', '$x^2 + 6x + 9$', '$x^2 + 9x + 6$', '$x^2 + 3x + 9$'],
      answer: 1,
      solution: 'Take half the middle coefficient and square it. For $x^2 + 6x + 9$: half of $6$ is $3$, and $3^2 = 9$ matches the constant. So $x^2 + 6x + 9 = (x+3)^2$. The others fail the half-and-square test.',
    },
    {
      q: 'Solve $x^2 = 49$.',
      choices: ['$x = 7$', '$x = -7$', '$x = 7$ or $x = -7$', '$x = 7$ or $x = 49$'],
      answer: 2,
      solution: 'Two different numbers square to $49$: both $7^2 = 49$ and $(-7)^2 = 49$. So $x = \\pm 7$. Choosing only $x = 7$ loses half the solutions — always remember both signs!',
    },
    {
      q: 'What number fills the blank? $x^2 + 12x + \\square = (x+6)^2$',
      choices: ['$12$', '$24$', '$6$', '$36$'],
      answer: 3,
      solution: 'Expand $(x+6)^2 = x^2 + 12x + 36$. The blank is $36$, which is $6^2$ — the square of half the middle coefficient.',
    },
    {
      q: 'Solve $(x-4)^2 = 9$.',
      choices: ['$x = 7$ or $x = 1$', '$x = 7$ only', '$x = -7$ or $x = -1$', '$x = 13$ or $x = -5$'],
      answer: 0,
      solution: 'Unsquare with both signs: $x - 4 = \\pm 3$. Then $x = 4 + 3 = 7$ or $x = 4 - 3 = 1$. Check: $(7-4)^2 = 9$ and $(1-4)^2 = (-3)^2 = 9$. ✓',
    },
    {
      q: 'Solve $x^2 + 8x + 16 = 0$.',
      choices: ['$x = 4$', '$x = -4$', '$x = 4$ or $x = -4$', '$x = -4$ or $x = -16$'],
      answer: 1,
      solution: 'The left side is a perfect square: half of $8$ is $4$, and $4^2 = 16$, so the equation is $(x+4)^2 = 0$. Only $0$ squares to $0$, so $x + 4 = 0$, giving the single (double) root $x = -4$.',
    },
    {
      q: 'Solve $(x+1)^2 = 5$.',
      choices: ['$x = 1 \\pm \\sqrt{5}$', '$x = -1 \\pm \\sqrt{5}$', '$x = -1 + \\sqrt{5}$ only', '$x = -1 \\pm 5$'],
      answer: 1,
      solution: 'Unsquare: $x + 1 = \\pm\\sqrt{5}$, so $x = -1 \\pm \\sqrt{5}$. Watch the two traps: the answer starts with $-1$ (not $+1$), and the square root of $5$ stays as $\\sqrt{5}$ (not $5$).',
    },
    {
      q: 'Solve $(2x-3)^2 = 49$.',
      choices: ['$x = 2$ or $x = -5$', '$x = 5$ or $x = 2$', '$x = 5$ or $x = -2$', '$x = 10$ or $x = -4$'],
      answer: 2,
      solution: 'Unsquare: $2x - 3 = \\pm 7$. From $2x - 3 = 7$ we get $2x = 10$, so $x = 5$. From $2x - 3 = -7$ we get $2x = -4$, so $x = -2$. Do not forget the final division by $2$! Check: $(2 \\cdot 5 - 3)^2 = 7^2 = 49$ and $(2 \\cdot (-2) - 3)^2 = (-7)^2 = 49$. ✓',
    },
    {
      q: 'Solve $x^2 - 10x + 25 = 3$.',
      choices: ['$x = -5 \\pm \\sqrt{3}$', '$x = 5 \\pm 3$', '$x = 5 \\pm \\sqrt{3}$', '$x = 5 + \\sqrt{3}$ only'],
      answer: 2,
      solution: 'The left side is $(x-5)^2$, since half of $-10$ is $-5$ and $(-5)^2 = 25$. So $(x-5)^2 = 3$, giving $x - 5 = \\pm\\sqrt{3}$ and $x = 5 \\pm \\sqrt{3}$. The $3$ keeps its square root, and both signs count.',
    },
    {
      q: 'How many real solutions does $(x+6)^2 = -4$ have?',
      choices: ['None', 'One', 'Two', 'Infinitely many'],
      answer: 0,
      solution: 'A real number squared is always $0$ or positive, so $(x+6)^2$ can never equal $-4$. There are no real solutions. (With complex numbers allowed, $x = -6 \\pm 2i$ — but those are not real.)',
    },
    {
      q: 'Solve $(x-2)^2 = (x+4)^2$.',
      choices: ['$x = 1$', '$x = -3$', 'There are no solutions', '$x = -1$'],
      answer: 3,
      solution: 'Two numbers have equal squares when they are equal or opposite. Equal is impossible: $x - 2 = x + 4$ says $-2 = 4$. Opposite gives $x - 2 = -(x + 4)$, so $2x = -2$ and $x = -1$. Check: $(-1-2)^2 = 9$ and $(-1+4)^2 = 9$. ✓ Surprise — a quadratic-looking equation with just one solution, because the $x^2$ terms cancel.',
    },
  ],
}

const s132 = {
  id: '13.2',
  title: 'Completing the Square',
  learn: {
    concepts: [
      {
        heading: 'The missing corner',
        body: 'Start with $x^2 + bx$ and ask: what constant turns it into a perfect square? Half of $b$ is $\\frac{b}{2}$, and $\\left(\\frac{b}{2}\\right)^2$ is exactly the missing piece: $x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2$. Picture an $x \\times x$ square with two $\\frac{b}{2} \\times x$ strips attached — the corner piece that completes the big square measures $\\frac{b}{2} \\times \\frac{b}{2}$.',
      },
      {
        heading: 'Add to both sides',
        body: 'To solve $x^2 + bx + c = 0$, move the constant over, then add $\\left(\\frac{b}{2}\\right)^2$ to BOTH sides. An equation is a balance scale: whatever you add on the left must land on the right too. Then unsquare with $\\pm$ as in the last section.',
      },
      {
        heading: 'Odd $b$? Fractions are fine',
        body: 'If $b$ is odd, half of it is a fraction — and that is perfectly okay. For $x^2 + 3x$, we add $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$ and get $\\left(x + \\frac{3}{2}\\right)^2$. The method does not care whether the numbers are pretty.',
      },
      {
        heading: 'When $a \\ne 1$, factor it out first',
        body: 'For $2x^2 - 8x + 5$, first pull the $2$ out of the $x$ terms: $2(x^2 - 4x) + 5$. Complete the square inside the parentheses — but remember that anything you add inside is really multiplied by $2$ outside! This process rewrites any quadratic as $a(x-h)^2 + k$, a form that instantly reveals the smallest (or largest) value the quadratic can take.',
      },
    ],
    examples: [
      {
        problem: 'Solve $x^2 + 6x - 7 = 0$ by completing the square.',
        steps: [
          'Move the constant: $x^2 + 6x = 7$.',
          'Half of $6$ is $3$, and $3^2 = 9$. Add $9$ to both sides: $x^2 + 6x + 9 = 16$, which is $(x+3)^2 = 16$.',
          'Unsquare: $x + 3 = \\pm 4$, so $x = 1$ or $x = -7$.',
          'Check: $1 + 6 - 7 = 0$ and $49 - 42 - 7 = 0$. Both work!',
        ],
        answer: '$x = 1$ or $x = -7$',
      },
      {
        problem: 'Solve $x^2 + 3x - 1 = 0$.',
        steps: [
          'Move the constant: $x^2 + 3x = 1$. Half of $3$ is $\\frac{3}{2}$, whose square is $\\frac{9}{4}$.',
          'Add $\\frac{9}{4}$ to both sides: $\\left(x + \\frac{3}{2}\\right)^2 = 1 + \\frac{9}{4} = \\frac{13}{4}$.',
          'Unsquare: $x + \\frac{3}{2} = \\pm\\frac{\\sqrt{13}}{2}$, so $x = \\frac{-3 \\pm \\sqrt{13}}{2}$.',
        ],
        answer: '$x = \\frac{-3 \\pm \\sqrt{13}}{2}$',
      },
      {
        problem: 'Write $2x^2 - 8x + 5$ in the form $a(x-h)^2 + k$.',
        steps: [
          'Factor $2$ out of the $x$ terms: $2(x^2 - 4x) + 5$.',
          'Inside the parentheses we need $\\left(\\frac{-4}{2}\\right)^2 = 4$. Adding $4$ inside really adds $2 \\times 4 = 8$, so subtract $8$ outside to stay balanced: $2(x^2 - 4x + 4) + 5 - 8$.',
          'That is $2(x-2)^2 - 3$. Check by expanding: $2x^2 - 8x + 8 - 3 = 2x^2 - 8x + 5$. ✓',
        ],
        answer: '$2x^2 - 8x + 5 = 2(x-2)^2 - 3$',
      },
    ],
  },
  problems: [
    {
      q: 'What must be added to $x^2 + 10x$ to make a perfect square?',
      choices: ['$5$', '$10$', '$25$', '$100$'],
      answer: 2,
      solution: 'Half of $10$ is $5$, and $5^2 = 25$. Then $x^2 + 10x + 25 = (x+5)^2$. (Careful: we square the HALF, so the answer is $25$, not $100 = 10^2$.)',
    },
    {
      q: 'Fill in the blank: $x^2 + 14x + \\square = (x+7)^2$',
      choices: ['$49$', '$14$', '$7$', '$196$'],
      answer: 0,
      solution: 'Expanding $(x+7)^2$ gives $x^2 + 14x + 49$, so the blank is $49$ — half of $14$ is $7$, and $7^2 = 49$.',
    },
    {
      q: 'Which of these equals $x^2 - 6x + 9$?',
      choices: ['$(x+3)^2$', '$(x-3)^2$', '$(x-6)^2$', '$(x-9)^2$'],
      answer: 1,
      solution: 'Half of $-6$ is $-3$, and $(-3)^2 = 9$ matches the constant, so $x^2 - 6x + 9 = (x-3)^2$. The minus sign in the middle term means the binomial is $x - 3$, not $x + 3$.',
    },
    {
      q: 'Solve $x^2 + 4x - 5 = 0$ by completing the square.',
      choices: ['$x = 1$ or $x = -5$', '$x = -1$ or $x = 5$', '$x = 1$ or $x = 5$', '$x = -1$ or $x = -5$'],
      answer: 0,
      solution: 'Move the constant and add $\\left(\\frac{4}{2}\\right)^2 = 4$ to both sides: $x^2 + 4x + 4 = 5 + 4$, so $(x+2)^2 = 9$. Then $x + 2 = \\pm 3$, giving $x = 1$ or $x = -5$. Check: $1 + 4 - 5 = 0$ and $25 - 20 - 5 = 0$. ✓',
    },
    {
      q: 'Solve $x^2 - 8x + 3 = 0$.',
      choices: ['$x = 4 \\pm \\sqrt{13}$', '$x = -4 \\pm \\sqrt{13}$', '$x = 4 \\pm 13$', '$x = 8 \\pm \\sqrt{13}$'],
      answer: 0,
      solution: 'Move the $3$: $x^2 - 8x = -3$. Add $\\left(\\frac{-8}{2}\\right)^2 = 16$ to both sides: $(x-4)^2 = 13$. Unsquare: $x = 4 \\pm \\sqrt{13}$. Since half of $-8$ is $-4$, the solutions center at $+4$ (subtracting $-4$ flips the sign).',
    },
    {
      q: 'Solve $x^2 + 5x + 2 = 0$.',
      choices: ['$x = \\frac{5 \\pm \\sqrt{17}}{2}$', '$x = \\frac{-5 \\pm \\sqrt{17}}{2}$', '$x = \\frac{-5 \\pm \\sqrt{33}}{2}$', '$x = -5 \\pm \\sqrt{17}$'],
      answer: 1,
      solution: 'Move the $2$: $x^2 + 5x = -2$. Add $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$ to both sides: $\\left(x + \\frac{5}{2}\\right)^2 = -2 + \\frac{25}{4} = \\frac{17}{4}$. Unsquare: $x = \\frac{-5 \\pm \\sqrt{17}}{2}$. (Getting $\\sqrt{33}$ means you ADDED the $2$ instead of subtracting it — the constant moved to the other side with a sign change.)',
    },
    {
      q: 'Rewrite $x^2 + 6x + 11$ in the form $(x+h)^2 + k$.',
      choices: ['$(x+3)^2 - 2$', '$(x+3)^2 + 11$', '$(x+3)^2 + 2$', '$(x+6)^2 + 11$'],
      answer: 2,
      solution: 'Half of $6$ is $3$, so build $(x+3)^2 = x^2 + 6x + 9$. We used up $9$ of the $11$, leaving $2$: $x^2 + 6x + 11 = (x+3)^2 + 2$. Check by expanding: $x^2 + 6x + 9 + 2 = x^2 + 6x + 11$. ✓',
    },
    {
      q: 'Rewrite $3x^2 + 12x + 7$ in the form $a(x-h)^2 + k$.',
      choices: ['$3(x+2)^2 + 3$', '$3(x+2)^2 + 7$', '$3(x+6)^2 - 29$', '$3(x+2)^2 - 5$'],
      answer: 3,
      solution: 'Factor out the $3$ first: $3(x^2 + 4x) + 7$. Completing inside needs $\\left(\\frac{4}{2}\\right)^2 = 4$, but adding $4$ inside really adds $3 \\times 4 = 12$, so subtract $12$ outside: $3(x+2)^2 + 7 - 12 = 3(x+2)^2 - 5$. Check: $3x^2 + 12x + 12 - 5 = 3x^2 + 12x + 7$. ✓ (Getting $+3$ means you only subtracted $4$ — the $3$ outside multiplies whatever you add inside.)',
    },
    {
      q: 'Solve $2x^2 - 4x - 3 = 0$ by completing the square.',
      choices: ['$x = \\frac{2 \\pm \\sqrt{10}}{2}$', '$x = \\frac{-2 \\pm \\sqrt{10}}{2}$', '$x = 1 \\pm \\sqrt{10}$', 'There are no real solutions'],
      answer: 0,
      solution: 'Divide everything by $2$: $x^2 - 2x - \\frac{3}{2} = 0$, so $x^2 - 2x = \\frac{3}{2}$. Add $1$ to both sides: $(x-1)^2 = \\frac{5}{2}$. Unsquare: $x = 1 \\pm \\sqrt{\\frac{5}{2}} = 1 \\pm \\frac{\\sqrt{10}}{2} = \\frac{2 \\pm \\sqrt{10}}{2}$. (We simplified $\\sqrt{\\frac{5}{2}} = \\frac{\\sqrt{5}}{\\sqrt{2}} = \\frac{\\sqrt{10}}{2}$ by rationalizing.)',
    },
    {
      q: 'What is the smallest value $x^2 - 6x + 14$ can take?',
      choices: ['$14$', '$3$', '$-5$', '$5$'],
      answer: 3,
      solution: 'Complete the square: $x^2 - 6x + 14 = (x-3)^2 + 5$. The square $(x-3)^2$ is at least $0$, hitting $0$ exactly when $x = 3$. So the whole expression is at least $0 + 5 = 5$, and it reaches $5$. The minimum value is $5$ (taken at $x = 3$ — do not confuse the location with the value!).',
    },
  ],
}

const s133 = {
  id: '13.3',
  title: 'The Quadratic Formula',
  learn: {
    concepts: [
      {
        heading: 'Complete the square once, use it forever',
        body: 'Take the general quadratic $ax^2 + bx + c = 0$ and complete the square with letters instead of numbers. Divide by $a$: $x^2 + \\frac{b}{a}x = -\\frac{c}{a}$. Add $\\left(\\frac{b}{2a}\\right)^2$ to both sides: $\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$. Unsquare and solve: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. That is the quadratic formula — completing the square, done once and for all.',
      },
      {
        heading: 'Using the formula',
        body: 'Write the equation as $ax^2 + bx + c = 0$ FIRST (move everything to one side), then read off $a$, $b$, $c$ with their signs. In $3x^2 - 5x + 2 = 0$ we have $a = 3$, $b = -5$, $c = 2$. The $-b$ up front and the $2a$ underneath apply to the ENTIRE expression — sign slips here are the classic error.',
      },
      {
        heading: 'The discriminant tells the story',
        body: 'The part under the root, $b^2 - 4ac$, is called the discriminant. If it is positive, there are two real solutions; if it is zero, the $\\pm$ adds and subtracts nothing, so there is exactly one; if it is negative, there are no real solutions (but two complex ones). You can know how many solutions exist before solving anything!',
      },
      {
        heading: 'Simplify what the formula gives you',
        body: 'The formula often outputs unsimplified answers. Pull squares out of the root ($\\sqrt{20} = 2\\sqrt{5}$), then cancel any factor shared by ALL THREE parts: $\\frac{4 \\pm 2\\sqrt{5}}{2} = 2 \\pm \\sqrt{5}$. Cancel from both terms of the top or from neither — never from just one.',
      },
    ],
    examples: [
      {
        problem: 'Solve $x^2 + 3x - 10 = 0$ with the quadratic formula.',
        steps: [
          'Here $a = 1$, $b = 3$, $c = -10$. The discriminant is $b^2 - 4ac = 9 - 4(1)(-10) = 9 + 40 = 49$.',
          'So $x = \\frac{-3 \\pm \\sqrt{49}}{2} = \\frac{-3 \\pm 7}{2}$.',
          'The two solutions are $x = \\frac{4}{2} = 2$ and $x = \\frac{-10}{2} = -5$.',
          'This one also factors as $(x-2)(x+5)$ — the formula and factoring always agree.',
        ],
        answer: '$x = 2$ or $x = -5$',
      },
      {
        problem: 'Solve $2x^2 + x - 4 = 0$.',
        steps: [
          'Here $a = 2$, $b = 1$, $c = -4$, so the discriminant is $1 - 4(2)(-4) = 1 + 32 = 33$.',
          'Since $33$ is positive but not a perfect square, there are two irrational solutions.',
          '$x = \\frac{-1 \\pm \\sqrt{33}}{2(2)} = \\frac{-1 \\pm \\sqrt{33}}{4}$. Nothing simplifies, so we are done.',
        ],
        answer: '$x = \\frac{-1 \\pm \\sqrt{33}}{4}$',
      },
      {
        problem: 'Solve $x^2 - 4x + 13 = 0$.',
        steps: [
          'The discriminant is $(-4)^2 - 4(1)(13) = 16 - 52 = -36$, which is negative: no real solutions.',
          'Pressing on with complex numbers: $x = \\frac{4 \\pm \\sqrt{-36}}{2} = \\frac{4 \\pm 6i}{2}$.',
          'Divide both parts of the top by $2$: $x = 2 \\pm 3i$.',
        ],
        answer: '$x = 2 \\pm 3i$ (no real solutions)',
      },
    ],
  },
  problems: [
    {
      q: 'In the equation $3x^2 - 5x + 2 = 0$, what is $b$?',
      choices: ['$5$', '$-5$', '$3$', '$2$'],
      answer: 1,
      solution: 'Match against $ax^2 + bx + c = 0$: the coefficient of $x$ is $b = -5$. The sign travels with the number! Using $b = 5$ in the formula would flip both solutions.',
    },
    {
      q: 'What is the discriminant of $x^2 + 6x + 5 = 0$?',
      choices: ['$16$', '$56$', '$4$', '$-16$'],
      answer: 0,
      solution: 'The discriminant is $b^2 - 4ac = 6^2 - 4(1)(5) = 36 - 20 = 16$. (Getting $56$ means you ADDED $4ac$ — the formula subtracts it.) Since $16 > 0$, this equation has two real solutions.',
    },
    {
      q: 'Use the quadratic formula to solve $x^2 - 2x - 15 = 0$.',
      choices: ['$x = 5$ or $x = -3$', '$x = -5$ or $x = 3$', '$x = 5$ or $x = 3$', '$x = -5$ or $x = -3$'],
      answer: 0,
      solution: 'With $a = 1$, $b = -2$, $c = -15$: discriminant $= 4 + 60 = 64$, and $-b = 2$. So $x = \\frac{2 \\pm 8}{2}$, giving $x = 5$ or $x = -3$. Check: $25 - 10 - 15 = 0$ and $9 + 6 - 15 = 0$. ✓',
    },
    {
      q: 'How many real solutions does $x^2 + 4x + 7 = 0$ have?',
      choices: ['Two', 'One', 'None', 'Three'],
      answer: 2,
      solution: 'Discriminant: $16 - 4(1)(7) = 16 - 28 = -12 < 0$. A negative discriminant means the formula asks for the square root of a negative number, so there are no real solutions. (A quadratic can never have three — at most two.)',
    },
    {
      q: 'Solve $x^2 + 6x + 9 = 0$.',
      choices: ['$x = 3$ only', '$x = -3$ only', '$x = 3$ or $x = -3$', '$x = -3$ or $x = -6$'],
      answer: 1,
      solution: 'The discriminant is $36 - 36 = 0$, so the $\\pm$ contributes nothing and there is exactly one solution: $x = \\frac{-6}{2} = -3$. Indeed the equation is $(x+3)^2 = 0$, a double root at $-3$.',
    },
    {
      q: 'Solve $x^2 - 4x - 1 = 0$ and simplify.',
      choices: ['$x = 2 \\pm 2\\sqrt{5}$', '$x = -2 \\pm \\sqrt{5}$', '$x = 2 \\pm \\sqrt{5}$', '$x = 4 \\pm 2\\sqrt{5}$'],
      answer: 2,
      solution: 'Discriminant: $16 + 4 = 20$, so $x = \\frac{4 \\pm \\sqrt{20}}{2}$. Simplify the root: $\\sqrt{20} = 2\\sqrt{5}$. Then $x = \\frac{4 \\pm 2\\sqrt{5}}{2} = 2 \\pm \\sqrt{5}$ — the $2$ cancels from BOTH terms of the numerator.',
    },
    {
      q: 'Solve $2x^2 - 3x - 2 = 0$.',
      choices: ['$x = 2$ or $x = -\\frac{1}{2}$', '$x = -2$ or $x = \\frac{1}{2}$', '$x = 4$ or $x = -1$', '$x = 2$ or $x = \\frac{1}{2}$'],
      answer: 0,
      solution: 'With $a = 2$, $b = -3$, $c = -2$: discriminant $= 9 + 16 = 25$, so $x = \\frac{3 \\pm 5}{4}$. That gives $x = 2$ or $x = -\\frac{1}{2}$. The denominator is $2a = 4$, not $2$ — forgetting that doubles both answers. Check: $2(4) - 6 - 2 = 0$ and $2 \\cdot \\frac{1}{4} + \\frac{3}{2} - 2 = 0$. ✓',
    },
    {
      q: 'Solve $x^2 + 2x + 5 = 0$ over the complex numbers.',
      choices: ['$x = 1 \\pm 2i$', '$x = -2 \\pm 4i$', '$x = -1 \\pm 4i$', '$x = -1 \\pm 2i$'],
      answer: 3,
      solution: 'Discriminant: $4 - 20 = -16$, so $\\sqrt{-16} = 4i$ and $x = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$. Divide BOTH parts of the numerator by $2$. Check $x = -1 + 2i$: $x^2 = -3 - 4i$, then $-3 - 4i + (-2 + 4i) + 5 = 0$. ✓',
    },
    {
      q: 'Solve $x^2 - 6x - 3 = 0$ and simplify fully.',
      choices: ['$x = 3 \\pm \\sqrt{3}$', '$x = 3 \\pm 2\\sqrt{3}$', '$x = -3 \\pm 2\\sqrt{3}$', '$x = 3 \\pm 4\\sqrt{3}$'],
      answer: 1,
      solution: 'Discriminant: $36 + 12 = 48$, and $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. So $x = \\frac{6 \\pm 4\\sqrt{3}}{2} = 3 \\pm 2\\sqrt{3}$. Both terms of the numerator get divided by $2$.',
    },
    {
      q: 'Solve $3x^2 = 2x + 7$.',
      choices: ['$x = \\frac{-1 \\pm \\sqrt{22}}{3}$', '$x = \\frac{1 \\pm \\sqrt{22}}{6}$', 'There are no real solutions', '$x = \\frac{1 \\pm \\sqrt{22}}{3}$'],
      answer: 3,
      solution: 'First move everything to one side: $3x^2 - 2x - 7 = 0$, so $a = 3$, $b = -2$, $c = -7$. Discriminant: $4 + 84 = 88$, and $\\sqrt{88} = 2\\sqrt{22}$. Then $x = \\frac{2 \\pm 2\\sqrt{22}}{6} = \\frac{1 \\pm \\sqrt{22}}{3}$ after cancelling the common $2$. Applying the formula before moving the $2x + 7$ over is the trap here — always get $= 0$ first.',
    },
  ],
}

const s134 = {
  id: '13.4',
  title: 'Applications and Extensions',
  learn: {
    concepts: [
      {
        heading: 'From story to equation',
        body: 'Word problems become quadratics whenever two related quantities multiply: length times width, number times next number, and so on. Name one quantity $x$, write the other in terms of $x$, and set up the product. One warning: the algebra may offer a solution the story cannot use, like a negative length. Solve first, then keep only the answers that make sense.',
      },
      {
        heading: 'Exactly one solution: set the discriminant to zero',
        body: 'When does $ax^2 + bx + c = 0$ have exactly one solution? Precisely when the discriminant is zero: $b^2 - 4ac = 0$. If a problem asks for the value of a parameter that makes a quadratic have one root (a "double root"), write down the discriminant, set it equal to $0$, and solve for the parameter.',
      },
      {
        heading: 'Sum and product shortcuts',
        body: 'The two solutions of $ax^2 + bx + c = 0$ always satisfy: sum $= -\\frac{b}{a}$ and product $= \\frac{c}{a}$. You can see it in the formula — the $\\pm\\sqrt{\\phantom{x}}$ parts cancel in the sum. These shortcuts answer questions about the roots without ever finding the roots themselves.',
      },
      {
        heading: 'Choosing your weapon',
        body: 'You now own three methods. Factoring is fastest when it works — try it first for small whole coefficients. Completing the square shines when you want the form $a(x-h)^2 + k$ or a maximum/minimum. The quadratic formula always works, on every quadratic, every time. Skilled solvers pick the tool to fit the problem.',
      },
    ],
    examples: [
      {
        problem: 'A rectangle is $3$ units longer than it is wide, and its area is $40$. Find its dimensions.',
        steps: [
          'Let the width be $w$; then the length is $w + 3$, and the area gives $w(w+3) = 40$.',
          'Expand and rearrange: $w^2 + 3w - 40 = 0$. This factors: $(w+8)(w-5) = 0$.',
          'So $w = -8$ or $w = 5$. A width cannot be negative, so $w = 5$ and the length is $8$.',
          'Check: $5 \\times 8 = 40$. ✓',
        ],
        answer: 'The rectangle is $5$ by $8$',
      },
      {
        problem: 'For what value of $k$ does $x^2 - 6x + k = 0$ have exactly one solution?',
        steps: [
          'Exactly one solution means the discriminant is zero: $(-6)^2 - 4(1)(k) = 0$.',
          'That is $36 - 4k = 0$, so $k = 9$.',
          'Sanity check: with $k = 9$ the equation is $x^2 - 6x + 9 = (x-3)^2 = 0$ — a perfect square with the single root $x = 3$. ✓',
        ],
        answer: '$k = 9$',
      },
      {
        problem: 'A ball is thrown so that its height after $t$ seconds is $h = -5t^2 + 20t + 25$. When does it hit the ground?',
        steps: [
          'The ground is height $0$, so solve $-5t^2 + 20t + 25 = 0$. Divide by $-5$: $t^2 - 4t - 5 = 0$.',
          'Factor: $(t-5)(t+1) = 0$, so $t = 5$ or $t = -1$.',
          'Time $t = -1$ is before the throw, so the ball lands at $t = 5$ seconds.',
        ],
        answer: 'The ball hits the ground after $5$ seconds',
      },
    ],
  },
  problems: [
    {
      q: 'Two consecutive positive integers have a product of $56$. What are they?',
      choices: ['$6$ and $7$', '$7$ and $8$', '$8$ and $9$', '$5$ and $6$'],
      answer: 1,
      solution: 'Let the smaller be $n$: then $n(n+1) = 56$, so $n^2 + n - 56 = 0$, which factors as $(n+8)(n-7) = 0$. Since $n$ is positive, $n = 7$, and the integers are $7$ and $8$. Check: $7 \\times 8 = 56$. ✓',
    },
    {
      q: 'A rectangle has length $5$ more than its width and area $36$. What is the width?',
      choices: ['$3$', '$9$', '$4$', '$6$'],
      answer: 2,
      solution: 'With width $w$: $w(w+5) = 36$, so $w^2 + 5w - 36 = 0$, which factors as $(w+9)(w-4) = 0$. The width must be positive, so $w = 4$ (and the length is $9$). Check: $4 \\times 9 = 36$. ✓',
    },
    {
      q: 'For what value of $k$ does $x^2 + 8x + k = 0$ have exactly one solution?',
      choices: ['$4$', '$8$', '$16$', '$64$'],
      answer: 2,
      solution: 'Set the discriminant to zero: $64 - 4k = 0$, so $k = 16$. Sanity check: $x^2 + 8x + 16 = (x+4)^2$, a perfect square with the single root $x = -4$. ✓',
    },
    {
      q: 'Without solving, find the sum of the solutions of $2x^2 - 10x + 3 = 0$.',
      choices: ['$-5$', '$10$', '$\\frac{3}{2}$', '$5$'],
      answer: 3,
      solution: 'The sum of the roots is $-\\frac{b}{a} = -\\frac{-10}{2} = 5$. No solving needed! (The value $\\frac{3}{2}$ is the PRODUCT of the roots, $\\frac{c}{a}$.)',
    },
    {
      q: 'Without solving, find the product of the solutions of $3x^2 - 5x - 2 = 0$.',
      choices: ['$\\frac{2}{3}$', '$-\\frac{2}{3}$', '$-2$', '$\\frac{5}{3}$'],
      answer: 1,
      solution: 'The product of the roots is $\\frac{c}{a} = \\frac{-2}{3} = -\\frac{2}{3}$. Keep the sign of $c$! (Here the roots are actually $2$ and $-\\frac{1}{3}$, whose product is indeed $-\\frac{2}{3}$.)',
    },
    {
      q: 'The equation $x^2 - 9x + 20 = 0$ can be solved by the formula, but factoring is faster. What are the solutions?',
      choices: ['$x = 4$ and $x = 5$', '$x = -4$ and $x = -5$', '$x = 2$ and $x = 10$', '$x = -2$ and $x = -10$'],
      answer: 0,
      solution: 'Look for two numbers with product $20$ and sum $9$: that is $4$ and $5$. So $x^2 - 9x + 20 = (x-4)(x-5) = 0$, giving $x = 4$ and $x = 5$ (positive, since the middle sign is minus and the constant is plus). Try factoring first when the numbers are small — save the formula for when they are not.',
    },
    {
      q: 'A ball is kicked from the ground with height $h = -5t^2 + 30t$ after $t$ seconds. When does it return to the ground?',
      choices: ['$t = 3$', '$t = 5$', '$t = 6$', '$t = 30$'],
      answer: 2,
      solution: 'Set $h = 0$: $-5t^2 + 30t = -5t(t - 6) = 0$, so $t = 0$ or $t = 6$. The moment $t = 0$ is the kick itself, so the ball returns at $t = 6$ seconds. ($t = 3$ is when it is HIGHEST, halfway through the flight.)',
    },
    {
      q: 'For what value of $k$ (with $k \\ne 0$) does $kx^2 + 12x + 9 = 0$ have exactly one solution?',
      choices: ['$4$', '$-4$', '$36$', '$2$'],
      answer: 0,
      solution: 'Set the discriminant to zero: $12^2 - 4(k)(9) = 144 - 36k = 0$, so $k = 4$. Check: $4x^2 + 12x + 9 = (2x+3)^2$, a perfect square with the single root $x = -\\frac{3}{2}$. ✓',
    },
    {
      q: 'Two numbers add to $10$ and multiply to $18$. What are they?',
      choices: ['$5 \\pm 3\\sqrt{2}$', '$5 \\pm \\sqrt{7}$', '$4$ and $6$', '$-5 \\pm \\sqrt{7}$'],
      answer: 1,
      solution: 'Numbers with sum $10$ and product $18$ are the roots of $x^2 - 10x + 18 = 0$ (sum and product in reverse!). The formula gives $x = \\frac{10 \\pm \\sqrt{100 - 72}}{2} = \\frac{10 \\pm \\sqrt{28}}{2} = 5 \\pm \\sqrt{7}$. Check: their sum is $10$ and their product is $(5+\\sqrt{7})(5-\\sqrt{7}) = 25 - 7 = 18$. ✓ ($4$ and $6$ add to $10$ but multiply to $24$.)',
    },
    {
      q: 'For which values of $m$ does $x^2 + mx + 25 = 0$ have exactly one solution?',
      choices: ['$m = 10$ only', '$m = 5$ only', '$m = \\pm 5$', '$m = \\pm 10$'],
      answer: 3,
      solution: 'Set the discriminant to zero: $m^2 - 100 = 0$, so $m^2 = 100$ and $m = \\pm 10$ — BOTH signs, just like unsquaring any equation. With $m = 10$ we get $(x+5)^2 = 0$; with $m = -10$ we get $(x-5)^2 = 0$. Two different values of $m$ work.',
    },
  ],
}

const challenge = [
  {
    q: 'Solve $(x-7)^2 = 81$.',
    choices: ['$x = 16$ or $x = -2$', '$x = -16$ or $x = 2$', '$x = 16$ only', '$x = 2$ or $x = 16$'],
    answer: 0,
    solution: 'Unsquare with both signs: $x - 7 = \\pm 9$, so $x = 16$ or $x = -2$. Check: $(16-7)^2 = 81$ and $(-2-7)^2 = (-9)^2 = 81$. ✓',
  },
  {
    q: 'Rewrite $x^2 - 12x + 5$ in the form $(x-h)^2 + k$.',
    choices: ['$(x-6)^2 + 5$', '$(x-6)^2 - 31$', '$(x-12)^2 + 5$', '$(x-6)^2 - 7$'],
    answer: 1,
    solution: 'Half of $-12$ is $-6$, so build $(x-6)^2 = x^2 - 12x + 36$. We introduced $36$ but only have $5$, so subtract the difference: $(x-6)^2 - 31$. Check: $x^2 - 12x + 36 - 31 = x^2 - 12x + 5$. ✓',
  },
  {
    q: 'How many real solutions does $2x^2 - 3x + 4 = 0$ have?',
    choices: ['Two', 'One', 'None', 'It cannot be determined'],
    answer: 2,
    solution: 'The discriminant is $(-3)^2 - 4(2)(4) = 9 - 32 = -23$, which is negative. A negative discriminant means no real solutions — and we found that out without solving anything.',
  },
  {
    q: 'Solve $x^2 + x - 1 = 0$.',
    choices: ['$x = \\frac{1 \\pm \\sqrt{5}}{2}$', '$x = \\frac{-1 \\pm \\sqrt{5}}{2}$', '$x = -1 \\pm \\sqrt{5}$', '$x = \\frac{-1 \\pm \\sqrt{3}}{2}$'],
    answer: 1,
    solution: 'With $a = 1$, $b = 1$, $c = -1$: discriminant $= 1 + 4 = 5$, so $x = \\frac{-1 \\pm \\sqrt{5}}{2}$. The formula starts with $-b = -1$, and the whole numerator sits over $2$. (The positive root, about $0.618$, is a famous number — the golden ratio minus one!)',
  },
  {
    q: 'Solve $4x^2 - 12x + 9 = 0$.',
    choices: ['$x = \\frac{3}{2}$ only', '$x = -\\frac{3}{2}$ only', '$x = \\pm\\frac{3}{2}$', '$x = 3$ only'],
    answer: 0,
    solution: 'The discriminant is $144 - 4(4)(9) = 144 - 144 = 0$: exactly one solution, $x = \\frac{12}{8} = \\frac{3}{2}$. Indeed $4x^2 - 12x + 9 = (2x-3)^2$, a perfect square with double root $\\frac{3}{2}$.',
  },
  {
    q: 'For which values of $k$ does $2x^2 + kx + 8 = 0$ have exactly one solution?',
    choices: ['$k = 8$ only', '$k = \\pm 4$', '$k = \\pm 8$', '$k = 16$'],
    answer: 2,
    solution: 'Set the discriminant to zero: $k^2 - 4(2)(8) = k^2 - 64 = 0$, so $k = \\pm 8$. Remember both signs when unsquaring! Check $k = 8$: $2x^2 + 8x + 8 = 2(x+2)^2$. Check $k = -8$: $2x^2 - 8x + 8 = 2(x-2)^2$. Both are perfect squares. ✓',
  },
  {
    q: 'The two roots of $x^2 - 6x + 4 = 0$ are $r$ and $s$. What is $r^2 + s^2$?',
    choices: ['$32$', '$44$', '$20$', '$28$'],
    answer: 3,
    solution: 'Use the shortcuts: $r + s = 6$ and $rs = 4$. Squaring the sum: $(r+s)^2 = r^2 + 2rs + s^2$, so $r^2 + s^2 = (r+s)^2 - 2rs = 36 - 8 = 28$. No need to find $r$ and $s$ themselves! (They are $3 \\pm \\sqrt{5}$ if you are curious — squaring and adding those confirms $28$.)',
  },
  {
    q: 'Solve $x^2 - 2x + 10 = 0$ over the complex numbers.',
    choices: ['$x = 1 \\pm 3i$', '$x = -1 \\pm 3i$', '$x = 2 \\pm 6i$', '$x = 1 \\pm 3$'],
    answer: 0,
    solution: 'Discriminant: $4 - 40 = -36$, so $\\sqrt{-36} = 6i$ and $x = \\frac{2 \\pm 6i}{2} = 1 \\pm 3i$. Divide both parts of the numerator by $2$, and keep the $i$ — the solutions are complex. Check $x = 1 + 3i$: $x^2 = -8 + 6i$, then $-8 + 6i - 2 - 6i + 10 = 0$. ✓',
  },
  {
    q: 'Two consecutive positive odd integers have a product of $143$. What are they?',
    choices: ['$9$ and $11$', '$13$ and $15$', '$11$ and $13$', '$11$ and $12$'],
    answer: 2,
    solution: 'Let the smaller be $n$: consecutive odd integers differ by $2$, so $n(n+2) = 143$. Then $n^2 + 2n - 143 = 0$, which factors as $(n+13)(n-11) = 0$. Taking the positive root, $n = 11$, so the integers are $11$ and $13$. Check: $11 \\times 13 = 143$. ✓ ($11$ and $12$ are consecutive, but not consecutive ODD integers.)',
  },
  {
    q: 'A ball is thrown from a cliff with height $h = -5t^2 + 40t + 45$ after $t$ seconds. When does it hit the ground?',
    choices: ['$t = 1$', '$t = 9$', '$t = 4$', '$t = 8$'],
    answer: 1,
    solution: 'Set $h = 0$ and divide by $-5$: $t^2 - 8t - 9 = 0$, which factors as $(t-9)(t+1) = 0$. So $t = 9$ or $t = -1$; negative time is before the throw, so the ball lands at $t = 9$ seconds. Check: $-5(81) + 360 + 45 = -405 + 405 = 0$. ✓',
  },
  {
    q: 'What is the minimum value of $2x^2 + 12x + 11$?',
    choices: ['$11$', '$-3$', '$-7$', '$7$'],
    answer: 2,
    solution: 'Complete the square: $2(x^2 + 6x) + 11 = 2(x+3)^2 - 18 + 11 = 2(x+3)^2 - 7$. Since $2(x+3)^2 \\ge 0$ with equality at $x = -3$, the minimum value is $-7$. (Remember: $-3$ is WHERE the minimum happens; $-7$ is the minimum itself.)',
  },
  {
    q: 'A positive number $x$ satisfies $x + \\frac{1}{x} = 5$. What is $x$?',
    choices: ['$x = \\frac{5 \\pm \\sqrt{29}}{2}$', '$x = \\frac{-5 \\pm \\sqrt{21}}{2}$', '$x = 5 \\pm \\sqrt{21}$', '$x = \\frac{5 \\pm \\sqrt{21}}{2}$'],
    answer: 3,
    solution: 'Multiply both sides by $x$ to clear the fraction: $x^2 + 1 = 5x$, so $x^2 - 5x + 1 = 0$. The formula gives $x = \\frac{5 \\pm \\sqrt{25 - 4}}{2} = \\frac{5 \\pm \\sqrt{21}}{2}$. Both roots are positive (their product is $1$!), so both work — in fact they are reciprocals of each other, which is exactly why each one plus its reciprocal is $5$.',
  },
]

const worksheet = [
  {
    q: 'Solve $(x+5)^2 = 36$.',
    answer: '$x = 1$ or $x = -11$',
    solution: 'Unsquare with both signs: $x + 5 = \\pm 6$. Then $x = 1$ or $x = -11$. Check: $(1+5)^2 = 36$ and $(-11+5)^2 = (-6)^2 = 36$. ✓',
  },
  {
    q: 'What must be added to $x^2 + 18x$ to make a perfect square? Write the resulting square.',
    answer: '$81$; the result is $(x+9)^2$',
    solution: 'Half of $18$ is $9$, and $9^2 = 81$. Then $x^2 + 18x + 81 = (x+9)^2$.',
  },
  {
    q: 'Solve $x^2 - 4x - 12 = 0$ using any method.',
    answer: '$x = 6$ or $x = -2$',
    solution: 'Factoring is quickest: two numbers with product $-12$ and sum $-4$ are $-6$ and $2$, so $(x-6)(x+2) = 0$, giving $x = 6$ or $x = -2$. Check: $36 - 24 - 12 = 0$ and $4 + 8 - 12 = 0$. ✓',
  },
  {
    q: 'Solve $x^2 + 6x + 4 = 0$ by completing the square.',
    answer: '$x = -3 \\pm \\sqrt{5}$',
    solution: 'Move the constant: $x^2 + 6x = -4$. Add $\\left(\\frac{6}{2}\\right)^2 = 9$ to both sides: $(x+3)^2 = 5$. Unsquare: $x + 3 = \\pm\\sqrt{5}$, so $x = -3 \\pm \\sqrt{5}$.',
  },
  {
    q: 'Compute the discriminant of $3x^2 + 7x + 2 = 0$. How many real solutions does the equation have?',
    answer: 'The discriminant is $25$; there are two real solutions',
    solution: 'Discriminant: $b^2 - 4ac = 49 - 4(3)(2) = 49 - 24 = 25$. Since $25 > 0$, there are two real solutions — and since $25$ is a perfect square, they are rational (they turn out to be $-\\frac{1}{3}$ and $-2$).',
  },
  {
    q: 'Solve $2x^2 + 5x - 3 = 0$ with the quadratic formula.',
    answer: '$x = \\frac{1}{2}$ or $x = -3$',
    solution: 'With $a = 2$, $b = 5$, $c = -3$: discriminant $= 25 + 24 = 49$, so $x = \\frac{-5 \\pm 7}{4}$. That gives $x = \\frac{2}{4} = \\frac{1}{2}$ or $x = \\frac{-12}{4} = -3$. Check: $2 \\cdot \\frac{1}{4} + \\frac{5}{2} - 3 = 0$ and $18 - 15 - 3 = 0$. ✓',
  },
  {
    q: 'Rewrite $2x^2 - 16x + 35$ in the form $a(x-h)^2 + k$, and state its minimum value.',
    answer: '$2(x-4)^2 + 3$; the minimum value is $3$',
    solution: 'Factor out the $2$: $2(x^2 - 8x) + 35$. Completing inside needs $16$, which counts as $2 \\times 16 = 32$ outside: $2(x-4)^2 + 35 - 32 = 2(x-4)^2 + 3$. Check: $2x^2 - 16x + 32 + 3 = 2x^2 - 16x + 35$. ✓ Since $2(x-4)^2 \\ge 0$, the minimum value is $3$, reached at $x = 4$.',
  },
  {
    q: 'Find the value of $k$ for which $3x^2 - 12x + k = 0$ has exactly one solution, and find that solution.',
    answer: '$k = 12$; the solution is $x = 2$',
    solution: 'Set the discriminant to zero: $144 - 12k = 0$, so $k = 12$. The single root is $x = \\frac{-b}{2a} = \\frac{12}{6} = 2$. Check: $3(4) - 24 + 12 = 0$. ✓',
  },
  {
    q: 'Two positive numbers differ by $4$ and have a product of $30$. Find both numbers exactly.',
    answer: 'The numbers are $\\sqrt{34} - 2$ and $\\sqrt{34} + 2$',
    solution: 'Let the smaller be $x$: then $x(x+4) = 30$, so $x^2 + 4x - 30 = 0$. The formula gives $x = \\frac{-4 \\pm \\sqrt{16 + 120}}{2} = \\frac{-4 \\pm \\sqrt{136}}{2} = -2 \\pm \\sqrt{34}$. Only $x = \\sqrt{34} - 2$ is positive, so the numbers are $\\sqrt{34} - 2$ and $\\sqrt{34} + 2$. Check the product: $(\\sqrt{34} - 2)(\\sqrt{34} + 2) = 34 - 4 = 30$. ✓',
  },
  {
    q: 'A ball is thrown from a ledge with height $h = -5t^2 + 18t + 8$ after $t$ seconds. When does it hit the ground?',
    answer: '$t = 4$ seconds',
    solution: 'Set $h = 0$: $-5t^2 + 18t + 8 = 0$, or $5t^2 - 18t - 8 = 0$ after multiplying by $-1$. Discriminant: $324 + 160 = 484 = 22^2$. So $t = \\frac{18 \\pm 22}{10}$, giving $t = 4$ or $t = -\\frac{2}{5}$. Negative time is before the throw, so the ball lands at $t = 4$ seconds. Check: $-5(16) + 72 + 8 = -80 + 80 = 0$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch13',
  book: 'intro-algebra',
  number: 13,
  title: 'Quadratic Equations — Part 2',
  intro:
    'You already know how to solve quadratics that factor nicely — but what about the ones that refuse to factor? In this chapter you will learn to complete the square, and then use that idea to build the quadratic formula: a tool that solves EVERY quadratic equation, no exceptions. By the end, no quadratic will be able to hide from you.',
  sections: [s131, s132, s133, s134],
  challenge,
  worksheet,
}
