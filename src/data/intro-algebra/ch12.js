// Introduction to Algebra — Chapter 12: Complex Numbers
// All problems, explanations, and examples are original MathQuest content.

const s121 = {
  id: '12.1',
  title: 'Numbers, Numbers, and More Numbers!',
  learn: {
    concepts: [
      {
        heading: 'Every number system was invented to solve an equation',
        body: 'The counting numbers $1, 2, 3, \\ldots$ seem like all you could ever need — until you try to solve $x + 5 = 2$. No counting number works! To solve it, mathematicians invented negative numbers, and the integers were born. Each time an equation stumps a number system, a bigger system appears.',
      },
      {
        heading: 'Fractions and the rationals',
        body: 'The equation $2x = 3$ has no integer solution — no whole number doubles to $3$. So we invented fractions: $x = \\frac{3}{2}$ solves it. The rational numbers are all the fractions $\\frac{p}{q}$ of integers (with $q \\neq 0$), and every integer is included, since $7 = \\frac{7}{1}$.',
      },
      {
        heading: 'Filling the gaps: the real numbers',
        body: 'Even the rationals have holes! The equation $x^2 = 2$ has a solution — the side length of a square with area $2$ — but $\\sqrt{2}$ cannot be written as a fraction of integers. Numbers like $\\sqrt{2}$ and $\\pi$ are called irrational. Rationals and irrationals together fill the entire number line: the real numbers.',
      },
      {
        heading: 'One equation is still unsolved',
        body: 'What about $x^2 = -1$? A positive number squared is positive, a negative number squared is also positive, and $0^2 = 0$. No real number squares to $-1$ — the whole number line comes up empty. History says: time to invent a new number! That is exactly what we do in the next section.',
      },
    ],
    examples: [
      {
        problem: 'What is the smallest number system on our tower (naturals, integers, rationals, reals) that contains the solution of $x + 9 = 4$?',
        steps: [
          'Solve the equation: subtract $9$ from both sides to get $x = -5$.',
          'Is $-5$ a natural (counting) number? No — the naturals start at $1$ and never go negative.',
          'Is $-5$ an integer? Yes! The integers are $\\ldots, -2, -1, 0, 1, 2, \\ldots$',
        ],
        answer: 'The integers — $x = -5$ is an integer but not a natural number',
      },
      {
        problem: 'Classify each number as rational or irrational: $-\\frac{7}{3}$, $\\sqrt{25}$, $\\sqrt{7}$.',
        steps: [
          '$-\\frac{7}{3}$ is a fraction of integers, so it is rational.',
          '$\\sqrt{25} = 5$, which is $\\frac{5}{1}$ — rational! Always simplify before you classify.',
          '$\\sqrt{7}$: since $7$ is not a perfect square, $\\sqrt{7}$ cannot be written as a fraction of integers. It is irrational.',
        ],
        answer: '$-\\frac{7}{3}$ and $\\sqrt{25}$ are rational; $\\sqrt{7}$ is irrational',
      },
      {
        problem: 'Explain why $x^2 = -1$ has no real number solution.',
        steps: [
          'Test the three kinds of real numbers. If $x$ is positive, then $x^2$ is positive — not $-1$.',
          'If $x$ is negative, then $x^2$ is a negative times a negative, which is positive — still not $-1$.',
          'If $x = 0$, then $x^2 = 0$. Every real number is covered, and none of them work.',
        ],
        answer: 'No real number squares to a negative, so $x^2 = -1$ has no real solution',
      },
    ],
  },
  problems: [
    {
      q: 'To solve $x + 7 = 3$, which new kind of number did people have to invent beyond the counting numbers?',
      choices: ['Fractions', 'Negative numbers', 'Irrational numbers', 'Imaginary numbers'],
      answer: 1,
      solution: 'Subtracting gives $x = 3 - 7 = -4$, which is less than zero. Counting numbers cannot go below $1$, so this equation demanded negative numbers — that is how the integers were born.',
    },
    {
      q: 'What is the solution of $4x = 6$?',
      choices: ['$x = 2$', '$x = \\frac{2}{3}$', '$x = \\frac{3}{2}$', '$x = 24$'],
      answer: 2,
      solution: 'Divide both sides by $4$: $x = \\frac{6}{4} = \\frac{3}{2}$. Check: $4 \\times \\frac{3}{2} = 6$. ✓ No integer works here — this is exactly the kind of equation that needed fractions.',
    },
    {
      q: 'Which of these numbers is an integer but NOT a natural (counting) number?',
      choices: ['$-5$', '$\\frac{1}{2}$', '$7$', '$\\sqrt{2}$'],
      answer: 0,
      solution: 'The integers include negatives, zero, and positives, but the naturals are just $1, 2, 3, \\ldots$ So $-5$ is an integer that is not natural. ($\\frac{1}{2}$ is not an integer at all, $7$ is both, and $\\sqrt{2}$ is neither.)',
    },
    {
      q: 'Which of these numbers is rational?',
      choices: ['$\\sqrt{2}$', '$\\sqrt{7}$', '$\\pi$', '$\\sqrt{9}$'],
      answer: 3,
      solution: 'Simplify first: $\\sqrt{9} = 3 = \\frac{3}{1}$, a perfectly good fraction of integers. The others — $\\sqrt{2}$, $\\sqrt{7}$, and $\\pi$ — cannot be written as fractions of integers, so they are irrational.',
    },
    {
      q: 'The equation $x^2 = 5$ has a positive solution. What kind of number is it?',
      choices: ['A rational number', 'An irrational number', 'An integer', 'An imaginary number'],
      answer: 1,
      solution: 'The solution is $\\sqrt{5}$. Since $5$ is not a perfect square, $\\sqrt{5}$ cannot be written as a fraction of integers — it is irrational. It is still a real number, though: it sits on the number line a bit past $2.2$.',
    },
    {
      q: 'Which equation has NO solution among the real numbers?',
      choices: ['$x^2 = -4$', '$x^2 = 4$', '$x + 4 = 0$', '$4x = 1$'],
      answer: 0,
      solution: 'Squaring a real number never gives a negative result, so $x^2 = -4$ has no real solution. The others are fine: $x^2 = 4$ gives $x = 2$ or $-2$, $x + 4 = 0$ gives $x = -4$, and $4x = 1$ gives $x = \\frac{1}{4}$.',
    },
    {
      q: 'The number $0.75$ is best described as which of the following?',
      choices: ['Irrational', 'An integer', 'Rational', 'A natural number'],
      answer: 2,
      solution: '$0.75 = \\frac{3}{4}$, a fraction of integers — so it is rational. It is not an integer, since it sits between $0$ and $1$ on the number line.',
    },
    {
      q: 'Which statement is true?',
      choices: [
        'Every rational number is an integer',
        'Every real number is rational',
        'Every irrational number is an integer',
        'Every integer is a rational number',
      ],
      answer: 3,
      solution: 'Any integer $n$ can be written as $\\frac{n}{1}$, so every integer is rational. The other statements fail: $\\frac{1}{2}$ is rational but not an integer, $\\sqrt{2}$ is real but not rational, and irrational numbers are never integers.',
    },
    {
      q: 'What is $\\sqrt{2} + (5 - \\sqrt{2})$, and what kind of number is it?',
      choices: [
        '$5$, a rational number',
        '$5$, an irrational number',
        '$2\\sqrt{2} + 5$, an irrational number',
        '$5\\sqrt{2}$, an irrational number',
      ],
      answer: 0,
      solution: 'The $\\sqrt{2}$ and $-\\sqrt{2}$ cancel, leaving exactly $5$ — a rational number! Two irrational numbers can add up to something rational. Irrationality is not always contagious.',
    },
    {
      q: 'What is the smallest number system on our tower that contains the solution of $2x + 5 = 0$?',
      choices: ['The integers', 'The rationals', 'The irrationals', 'The naturals'],
      answer: 1,
      solution: 'Solving gives $x = -\\frac{5}{2}$. That is not an integer (it sits between $-3$ and $-2$), but it is a fraction of integers, so the rationals are the first system big enough to hold it.',
    },
  ],
}

const s122 = {
  id: '12.2',
  title: 'Imaginary Numbers',
  learn: {
    concepts: [
      {
        heading: 'Meet $i$, the boldest invention in math',
        body: 'Since no real number solves $x^2 = -1$, we simply declare a new number that does! We call it $i$, and its defining property is $i^2 = -1$. That is the only rule you need — everything else about imaginary numbers follows from it, using ordinary algebra.',
      },
      {
        heading: 'Square roots of negative numbers',
        body: 'For any positive number $k$, we define $\\sqrt{-k} = i\\sqrt{k}$. For example, $\\sqrt{-9} = 3i$. Check it: $(3i)^2 = 9i^2 = 9 \\times (-1) = -9$. ✓ Numbers like $3i$ and $-7i$ are called pure imaginary numbers.',
      },
      {
        heading: 'The powers of $i$ go around in a circle',
        body: 'Watch: $i^1 = i$, $i^2 = -1$, $i^3 = i^2 \\cdot i = -i$, $i^4 = i^2 \\cdot i^2 = (-1)(-1) = 1$. Then $i^5 = i^4 \\cdot i = i$ and the pattern repeats forever: $i, -1, -i, 1, i, -1, -i, 1, \\ldots$ To find a huge power of $i$, just find the remainder when the exponent is divided by $4$.',
      },
      {
        heading: 'Doing arithmetic with $i$',
        body: 'Treat $i$ like a variable that follows all the usual rules of algebra — with one bonus move: whenever $i^2$ appears, replace it with $-1$. So $3i + 5i = 8i$, and $(2i)(5i) = 10i^2 = -10$. Notice how multiplying two imaginary numbers can land you back on the real number line!',
      },
    ],
    examples: [
      {
        problem: 'Compute $i^{47}$.',
        steps: [
          'The powers of $i$ cycle with period $4$: $i, -1, -i, 1$, then repeat. So only the remainder of the exponent mod $4$ matters.',
          'Divide: $47 = 4 \\times 11 + 3$, so the remainder is $3$.',
          'That means $i^{47} = (i^4)^{11} \\cdot i^3 = 1^{11} \\cdot i^3 = i^3 = -i$.',
        ],
        answer: '$i^{47} = -i$',
      },
      {
        problem: 'Simplify $\\sqrt{-36} + \\sqrt{-49}$.',
        steps: [
          'Convert each square root: $\\sqrt{-36} = 6i$ and $\\sqrt{-49} = 7i$.',
          'Add them like like terms: $6i + 7i = 13i$.',
        ],
        answer: '$\\sqrt{-36} + \\sqrt{-49} = 13i$',
      },
      {
        problem: 'Solve $x^2 = -100$.',
        steps: [
          'We need a number whose square is $-100$. Try $x = 10i$: then $x^2 = 100i^2 = -100$. ✓',
          'Do not forget the negative twin: $(-10i)^2 = 100i^2 = -100$ as well.',
          'Just like $x^2 = 100$ has two solutions, so does $x^2 = -100$.',
        ],
        answer: '$x = 10i$ or $x = -10i$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $i^2$?',
      choices: ['$1$', '$i$', '$-1$', '$-i$'],
      answer: 2,
      solution: 'This is the defining property of $i$: it is the number invented so that $i^2 = -1$. Everything else about imaginary numbers grows from this one fact.',
    },
    {
      q: 'Simplify $\\sqrt{-25}$.',
      choices: ['$5i$', '$-5$', '$25i$', '$-5i$'],
      answer: 0,
      solution: '$\\sqrt{-25} = i\\sqrt{25} = 5i$. Check by squaring: $(5i)^2 = 25i^2 = -25$. ✓ (Careful: $-5$ squares to $+25$, not $-25$.)',
    },
    {
      q: 'What is $i^3$?',
      choices: ['$i$', '$-i$', '$-1$', '$1$'],
      answer: 1,
      solution: 'Split off a square: $i^3 = i^2 \\cdot i = (-1) \\cdot i = -i$.',
    },
    {
      q: 'What is $i^4$?',
      choices: ['$i$', '$-1$', '$-i$', '$1$'],
      answer: 3,
      solution: 'Group into two squares: $i^4 = i^2 \\cdot i^2 = (-1)(-1) = 1$. This is why the powers of $i$ repeat every four steps — multiplying by $i^4$ changes nothing.',
    },
    {
      q: 'Compute $3i + 5i$.',
      choices: ['$8i$', '$15i$', '$8$', '$8i^2$'],
      answer: 0,
      solution: 'Add them like like terms, just as $3x + 5x = 8x$: so $3i + 5i = 8i$. Adding imaginary numbers never touches the $i$ itself.',
    },
    {
      q: 'Compute $(2i)(5i)$.',
      choices: ['$10i$', '$10$', '$-10$', '$-10i$'],
      answer: 2,
      solution: 'Multiply the parts: $(2i)(5i) = 10i^2$. Now use the golden rule $i^2 = -1$: the product is $10 \\times (-1) = -10$. Two imaginary numbers multiplied together give a real number!',
    },
    {
      q: 'What is $i^{47}$?',
      choices: ['$i$', '$-1$', '$1$', '$-i$'],
      answer: 3,
      solution: 'Powers of $i$ cycle every $4$. Since $47 = 4 \\times 11 + 3$, the remainder is $3$, so $i^{47} = i^3 = -i$.',
    },
    {
      q: 'Solve $x^2 = -49$.',
      choices: [
        '$x = 7i$ only',
        '$x = 7i$ or $x = -7i$',
        '$x = 7$ or $x = -7$',
        'There is no solution in any number system',
      ],
      answer: 1,
      solution: 'Both $(7i)^2 = 49i^2 = -49$ and $(-7i)^2 = 49i^2 = -49$ work — squaring wipes out the sign in front. Every nonzero square-root equation has two solutions, imaginary ones included.',
    },
    {
      q: 'What is $i^{2026}$?',
      choices: ['$-1$', '$1$', '$i$', '$-i$'],
      answer: 0,
      solution: 'Find the remainder of $2026$ divided by $4$: since $2026 = 4 \\times 506 + 2$, the remainder is $2$. So $i^{2026} = i^2 = -1$. Even a giant exponent collapses to one of just four values.',
    },
    {
      q: 'Compute $(3i)^2 + (2i)^2$.',
      choices: ['$13$', '$-13$', '$-5$', '$13i$'],
      answer: 1,
      solution: 'Square each piece: $(3i)^2 = 9i^2 = -9$ and $(2i)^2 = 4i^2 = -4$. Then $-9 + (-4) = -13$. Squaring an imaginary number always lands on a negative real number.',
    },
  ],
}

const s123 = {
  id: '12.3',
  title: 'Complex Numbers',
  learn: {
    concepts: [
      {
        heading: 'The form $a + bi$',
        body: 'A complex number is any number of the form $a + bi$, where $a$ and $b$ are real. We call $a$ the real part and $b$ the imaginary part. So $3 + 4i$ has real part $3$ and imaginary part $4$. Every number you have ever met fits this form: $7$ is $7 + 0i$, and $5i$ is $0 + 5i$.',
      },
      {
        heading: 'Adding and subtracting: match the parts',
        body: 'Real parts combine with real parts, imaginary parts with imaginary parts — just like combining like terms: $(3 + 2i) + (4 + 5i) = 7 + 7i$. A real part and an imaginary part can never merge into one number; they stay in their own lanes.',
      },
      {
        heading: 'Multiplying: distribute, then use $i^2 = -1$',
        body: 'Multiply complex numbers exactly the way you multiply binomials like $(x + 2)(x + 3)$: distribute every term. Then replace any $i^2$ with $-1$ and collect the pieces. For example, $(1 + i)(1 + i) = 1 + 2i + i^2 = 2i$.',
      },
      {
        heading: 'The conjugate: a mirror with a superpower',
        body: 'The conjugate of $a + bi$ is $a - bi$ — same real part, flipped sign on the imaginary part. The magic: $(a + bi)(a - bi) = a^2 + b^2$, always a real number! To divide by a complex number, multiply top and bottom by the conjugate of the bottom, and the $i$ vanishes from the denominator.',
      },
    ],
    examples: [
      {
        problem: 'Compute $(5 + 2i)(3 - i)$.',
        steps: [
          'Distribute every term: $5 \\cdot 3 + 5 \\cdot (-i) + 2i \\cdot 3 + 2i \\cdot (-i) = 15 - 5i + 6i - 2i^2$.',
          'Replace $i^2$ with $-1$: the last term $-2i^2$ becomes $+2$.',
          'Collect: real parts $15 + 2 = 17$, imaginary parts $-5i + 6i = i$.',
        ],
        answer: '$(5 + 2i)(3 - i) = 17 + i$',
      },
      {
        problem: 'Write $\\dfrac{3 + i}{1 - i}$ in the form $a + bi$.',
        steps: [
          'Multiply top and bottom by the conjugate of the denominator, $1 + i$.',
          'Bottom: $(1 - i)(1 + i) = 1^2 + 1^2 = 2$ — a real number, as promised.',
          'Top: $(3 + i)(1 + i) = 3 + 3i + i + i^2 = 2 + 4i$.',
          'Divide: $\\dfrac{2 + 4i}{2} = 1 + 2i$.',
        ],
        answer: '$\\dfrac{3 + i}{1 - i} = 1 + 2i$',
      },
      {
        problem: 'Solve $x^2 + 6x + 13 = 0$.',
        steps: [
          'Complete the square: $x^2 + 6x + 9 = -13 + 9$, so $(x + 3)^2 = -4$.',
          'A square equal to a negative number? Complex numbers to the rescue: $x + 3 = 2i$ or $x + 3 = -2i$.',
          'Solve each: $x = -3 + 2i$ or $x = -3 - 2i$. The two roots are conjugates of each other — that always happens for quadratics with real coefficients.',
        ],
        answer: '$x = -3 + 2i$ or $x = -3 - 2i$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the real part of $7 - 2i$?',
      choices: ['$-2$', '$2$', '$-2i$', '$7$'],
      answer: 3,
      solution: 'In the form $a + bi$, the real part is $a$. Here $7 - 2i = 7 + (-2)i$, so the real part is $7$ and the imaginary part is $-2$.',
    },
    {
      q: 'Compute $(3 + 2i) + (4 + 5i)$.',
      choices: ['$7 + 10i$', '$7 + 7i$', '$12 + 2i$', '$14i$'],
      answer: 1,
      solution: 'Add real parts: $3 + 4 = 7$. Add imaginary parts: $2 + 5 = 7$. The sum is $7 + 7i$. Real and imaginary parts stay in their own lanes — they never merge.',
    },
    {
      q: 'Compute $(8 + 3i) - (2 + 7i)$.',
      choices: ['$6 - 4i$', '$6 + 4i$', '$10 - 4i$', '$6 + 10i$'],
      answer: 0,
      solution: 'Subtract part by part: real $8 - 2 = 6$, imaginary $3 - 7 = -4$. The answer is $6 - 4i$. (Watch out: the minus sign applies to BOTH parts of $2 + 7i$.)',
    },
    {
      q: 'What is the conjugate of $5 - 3i$?',
      choices: ['$-5 + 3i$', '$-5 - 3i$', '$5 + 3i$', '$3 - 5i$'],
      answer: 2,
      solution: 'The conjugate keeps the real part and flips only the sign of the imaginary part: $5 - 3i$ becomes $5 + 3i$. Flipping the real part too would be negation, a different move.',
    },
    {
      q: 'Compute $2i(3 + 4i)$.',
      choices: ['$8 + 6i$', '$-8 + 6i$', '$-8 - 6i$', '$14i$'],
      answer: 1,
      solution: 'Distribute: $2i \\cdot 3 + 2i \\cdot 4i = 6i + 8i^2$. Since $i^2 = -1$, the term $8i^2$ is $-8$. The answer is $-8 + 6i$.',
    },
    {
      q: 'Compute $(2 + 3i)(1 + 2i)$.',
      choices: ['$2 + 7i$', '$8 + 7i$', '$-4 - 7i$', '$-4 + 7i$'],
      answer: 3,
      solution: 'Distribute: $2 + 4i + 3i + 6i^2$. Replace $i^2$ with $-1$: $6i^2 = -6$. Collect: real $2 - 6 = -4$, imaginary $4i + 3i = 7i$. The answer is $-4 + 7i$.',
    },
    {
      q: 'Compute $(4 + 3i)(4 - 3i)$.',
      choices: ['$25$', '$16 - 9i$', '$7$', '$25i$'],
      answer: 0,
      solution: 'A number times its conjugate is $a^2 + b^2$: here $4^2 + 3^2 = 16 + 9 = 25$. The middle terms $-12i$ and $+12i$ cancel, and $-9i^2 = +9$. A completely real answer!',
    },
    {
      q: 'Solve $x^2 + 4 = 0$.',
      choices: [
        '$x = 2$ or $x = -2$',
        '$x = 4i$ or $x = -4i$',
        '$x = 2i$ or $x = -2i$',
        'There are no solutions at all',
      ],
      answer: 2,
      solution: 'Rewrite as $x^2 = -4$. Then $x = 2i$ or $x = -2i$, since $(\\pm 2i)^2 = 4i^2 = -4$. ✓ The equation has no real solutions, but it has two complex ones.',
    },
    {
      q: 'Write $\\dfrac{10}{1 + 3i}$ in the form $a + bi$.',
      choices: ['$1 + 3i$', '$10 - 30i$', '$1 - 3i$', '$-1 + 3i$'],
      answer: 2,
      solution: 'Multiply top and bottom by the conjugate $1 - 3i$. Bottom: $(1 + 3i)(1 - 3i) = 1 + 9 = 10$. Top: $10(1 - 3i) = 10 - 30i$. So the quotient is $\\frac{10 - 30i}{10} = 1 - 3i$. Check: $(1 - 3i)(1 + 3i) = 10$. ✓',
    },
    {
      q: 'Solve $x^2 - 2x + 5 = 0$.',
      choices: [
        '$x = 1 + 2i$ or $x = 1 - 2i$',
        '$x = -1 + 2i$ or $x = -1 - 2i$',
        '$x = 2i$ or $x = -2i$',
        '$x = 1 + 4i$ or $x = 1 - 4i$',
      ],
      answer: 0,
      solution: 'Complete the square: $x^2 - 2x + 1 = -5 + 1$, so $(x - 1)^2 = -4$. Then $x - 1 = \\pm 2i$, giving $x = 1 + 2i$ or $x = 1 - 2i$. Check $x = 1 + 2i$: $x^2 = 1 + 4i + 4i^2 = -3 + 4i$, and $-3 + 4i - 2(1 + 2i) + 5 = -3 + 4i - 2 - 4i + 5 = 0$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'What is $i^{100}$?',
    choices: ['$i$', '$1$', '$-1$', '$-i$'],
    answer: 1,
    solution: '$100$ is a multiple of $4$ ($100 = 4 \\times 25$), and $i^4 = 1$, so $i^{100} = (i^4)^{25} = 1^{25} = 1$.',
  },
  {
    q: 'Compute $\\sqrt{-9} \\cdot \\sqrt{-4}$.',
    choices: ['$6$', '$6i$', '$-6i$', '$-6$'],
    answer: 3,
    solution: 'Convert FIRST, then multiply: $\\sqrt{-9} = 3i$ and $\\sqrt{-4} = 2i$, so the product is $6i^2 = -6$. The shortcut $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ only holds for nonnegative numbers — using it here would give $\\sqrt{36} = 6$, which is off by a sign!',
  },
  {
    q: 'Compute $(1 + i)^2$.',
    choices: ['$2i$', '$2$', '$1 + 2i$', '$0$'],
    answer: 0,
    solution: 'Expand: $(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$. The real parts cancel perfectly, leaving a pure imaginary number.',
  },
  {
    q: 'Compute $(2 - 5i) - (7 - 2i)$.',
    choices: ['$-5 + 3i$', '$5 - 7i$', '$-5 - 3i$', '$-5 - 7i$'],
    answer: 2,
    solution: 'Real parts: $2 - 7 = -5$. Imaginary parts: $-5 - (-2) = -3$. The answer is $-5 - 3i$. Subtracting $-2i$ means adding $2i$ — the double negative is where slips happen.',
  },
  {
    q: 'Compute $(3 + 4i)(3 - 4i)$.',
    choices: ['$9 - 16i$', '$-7$', '$25$', '$25i$'],
    answer: 2,
    solution: 'Conjugates multiply to $a^2 + b^2 = 9 + 16 = 25$. The cross terms cancel, and $-16i^2 = +16$ adds instead of subtracting. This is the engine behind complex division.',
  },
  {
    q: 'Write $\\dfrac{1}{i}$ in the form $bi$.',
    choices: ['$-i$', '$i$', '$1$', '$-1$'],
    answer: 0,
    solution: 'Multiply top and bottom by $-i$: $\\dfrac{1}{i} \\cdot \\dfrac{-i}{-i} = \\dfrac{-i}{-i^2} = \\dfrac{-i}{1} = -i$. Check: $i \\times (-i) = -i^2 = 1$. ✓ So $-i$ is the reciprocal of $i$.',
  },
  {
    q: 'Compute $i + i^2 + i^3 + i^4$.',
    choices: ['$1$', '$i$', '$-1$', '$0$'],
    answer: 3,
    solution: 'List the four values: $i + (-1) + (-i) + 1$. The $i$ and $-i$ cancel, and the $-1$ and $1$ cancel: total $0$. One full trip around the cycle always sums to zero.',
  },
  {
    q: 'Write $\\dfrac{5 + 5i}{1 + 2i}$ in the form $a + bi$.',
    choices: ['$3 + i$', '$3 - i$', '$1 - 3i$', '$5 - i$'],
    answer: 1,
    solution: 'Multiply top and bottom by the conjugate $1 - 2i$. Bottom: $1 + 4 = 5$. Top: $(5 + 5i)(1 - 2i) = 5 - 10i + 5i - 10i^2 = 15 - 5i$. So the quotient is $\\frac{15 - 5i}{5} = 3 - i$. Check: $(3 - i)(1 + 2i) = 3 + 6i - i - 2i^2 = 5 + 5i$. ✓',
  },
  {
    q: 'Solve $x^2 + 2x + 2 = 0$.',
    choices: [
      '$x = -1 + i$ or $x = -1 - i$',
      '$x = 1 + i$ or $x = 1 - i$',
      '$x = -1$ or $x = 1$',
      '$x = i$ or $x = -i$',
    ],
    answer: 0,
    solution: 'Complete the square: $x^2 + 2x + 1 = -2 + 1$, so $(x + 1)^2 = -1$. Then $x + 1 = \\pm i$, giving $x = -1 + i$ or $x = -1 - i$. Check $x = -1 + i$: $x^2 = 1 - 2i + i^2 = -2i$, and $-2i + 2(-1 + i) + 2 = -2i - 2 + 2i + 2 = 0$. ✓',
  },
  {
    q: 'Let $z = 2 + 3i$ and let $\\overline{z} = 2 - 3i$ be its conjugate. Compute $z \\cdot \\overline{z} + z + \\overline{z}$.',
    choices: ['$13 + 4i$', '$13$', '$4$', '$17$'],
    answer: 3,
    solution: 'The product of conjugates is real: $z \\cdot \\overline{z} = 2^2 + 3^2 = 13$. The sum of conjugates is also real: $z + \\overline{z} = 4$, since the $3i$ and $-3i$ cancel. Total: $13 + 4 = 17$ — no $i$ anywhere in sight.',
  },
  {
    q: 'Compute the product $i^1 \\cdot i^2 \\cdot i^3 \\cdot i^4 \\cdot i^5 \\cdot i^6 \\cdot i^7 \\cdot i^8$.',
    choices: ['$-1$', '$i$', '$1$', '$-i$'],
    answer: 2,
    solution: 'Multiplying powers adds the exponents: $1 + 2 + \\cdots + 8 = 36$. So the product is $i^{36}$, and since $36$ is a multiple of $4$, $i^{36} = 1$.',
  },
  {
    q: 'For which real numbers $k$ does the equation $x^2 + k = 0$ have NO real solutions?',
    choices: ['$k < 0$', '$k > 0$', '$k = 0$ only', 'No such $k$ exists'],
    answer: 1,
    solution: 'Rewrite as $x^2 = -k$. If $k > 0$, then $-k$ is negative, and no real number squares to a negative — the solutions are the imaginary pair $\\pm i\\sqrt{k}$. If $k < 0$, the solutions $\\pm\\sqrt{-k}$ are real, and if $k = 0$, then $x = 0$ works.',
  },
]

const worksheet = [
  {
    q: 'Simplify $\\sqrt{-64}$.',
    answer: '$8i$',
    solution: '$\\sqrt{-64} = i\\sqrt{64} = 8i$. Check: $(8i)^2 = 64i^2 = -64$. ✓',
  },
  {
    q: 'Compute $i^{50}$.',
    answer: '$-1$',
    solution: 'Powers of $i$ repeat every $4$. Since $50 = 4 \\times 12 + 2$, the remainder is $2$, so $i^{50} = i^2 = -1$.',
  },
  {
    q: 'Compute $(6 + 2i) + (3 - 5i)$.',
    answer: '$9 - 3i$',
    solution: 'Add the real parts: $6 + 3 = 9$. Add the imaginary parts: $2 + (-5) = -3$. The sum is $9 - 3i$.',
  },
  {
    q: 'Compute $(4i)(-3i)$.',
    answer: '$12$',
    solution: 'Multiply the coefficients and the $i$s: $(4i)(-3i) = -12i^2$. Since $i^2 = -1$, this is $-12 \\times (-1) = 12$ — a positive real number.',
  },
  {
    q: 'What is the conjugate of $-2 + 7i$?',
    answer: '$-2 - 7i$',
    solution: 'The conjugate flips only the sign of the imaginary part: $-2 + 7i$ becomes $-2 - 7i$. The real part $-2$ stays exactly as it is.',
  },
  {
    q: 'Compute $(1 + 2i)(3 + i)$.',
    answer: '$1 + 7i$',
    solution: 'Distribute: $3 + i + 6i + 2i^2$. Replace $i^2$ with $-1$: $2i^2 = -2$. Collect: real $3 - 2 = 1$, imaginary $i + 6i = 7i$. The product is $1 + 7i$.',
  },
  {
    q: 'Write $\\dfrac{4 + 2i}{1 + i}$ in the form $a + bi$.',
    answer: '$3 - i$',
    solution: 'Multiply top and bottom by the conjugate $1 - i$. Bottom: $(1 + i)(1 - i) = 1 + 1 = 2$. Top: $(4 + 2i)(1 - i) = 4 - 4i + 2i - 2i^2 = 6 - 2i$. Divide: $\\frac{6 - 2i}{2} = 3 - i$. Check: $(3 - i)(1 + i) = 3 + 3i - i - i^2 = 4 + 2i$. ✓',
  },
  {
    q: 'Solve $x^2 - 4x + 13 = 0$.',
    answer: '$x = 2 + 3i$ or $x = 2 - 3i$',
    solution: 'Complete the square: $x^2 - 4x + 4 = -13 + 4$, so $(x - 2)^2 = -9$. Then $x - 2 = \\pm 3i$, giving $x = 2 \\pm 3i$. Check $x = 2 + 3i$: $x^2 = 4 + 12i + 9i^2 = -5 + 12i$, and $-5 + 12i - 4(2 + 3i) + 13 = -5 + 12i - 8 - 12i + 13 = 0$. ✓',
  },
  {
    q: 'Compute $i + 2i^2 + 3i^3 + 4i^4$.',
    answer: '$2 - 2i$',
    solution: 'Evaluate each power: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. So the sum is $i - 2 - 3i + 4$. Real parts: $-2 + 4 = 2$. Imaginary parts: $i - 3i = -2i$. Total: $2 - 2i$.',
  },
  {
    q: 'Find real numbers $a$ and $b$ so that $(a + bi)(2 + i) = 5$.',
    answer: '$a = 2$ and $b = -1$',
    solution: 'We need $a + bi = \\dfrac{5}{2 + i}$. Multiply top and bottom by the conjugate $2 - i$: bottom is $4 + 1 = 5$, top is $5(2 - i) = 10 - 5i$. So $a + bi = \\frac{10 - 5i}{5} = 2 - i$, meaning $a = 2$ and $b = -1$. Check: $(2 - i)(2 + i) = 4 + 1 = 5$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch12',
  book: 'intro-algebra',
  number: 12,
  title: 'Complex Numbers',
  intro:
    'Every time an equation stumped the numbers people knew, they invented new ones — negatives, fractions, irrationals. In this chapter you get to witness the boldest invention of all: a number whose square is negative. It sounds impossible, but by the end you will be adding, multiplying, and even dividing complex numbers like a pro.',
  sections: [s121, s122, s123],
  challenge,
  worksheet,
}
