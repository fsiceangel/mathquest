// Introduction to Algebra — Chapter 9: Introduction to Inequalities
// All problems, explanations, and examples are original MathQuest content.

const s91 = {
  id: '9.1',
  title: 'The Basics',
  learn: {
    concepts: [
      {
        heading: 'Four symbols, two with a bonus',
        body: 'The symbol $<$ means "less than" and $>$ means "greater than": $a < b$ says $a$ sits to the left of $b$ on the number line. The symbols $\\le$ and $\\ge$ come with a bonus: $a \\le b$ means $a$ is less than OR equal to $b$. That little line underneath makes equality allowed.',
      },
      {
        heading: 'Safe moves',
        body: 'You can add or subtract the same number on both sides of an inequality, and the direction stays put: if $a < b$, then $a + c < b + c$. Multiplying or dividing both sides by a POSITIVE number is also safe. These moves let you solve inequalities almost exactly like equations.',
      },
      {
        heading: 'The flip rule',
        body: 'Multiplying or dividing both sides by a NEGATIVE number reverses the direction of the inequality. Why? Negating reflects the number line: $2 < 5$, but $-2 > -5$. Whenever a negative multiplier touches both sides, the symbol must flip — this is the single most common trap in this chapter.',
      },
      {
        heading: 'Chains of inequalities',
        body: 'Inequalities link up: if $a < b$ and $b < c$, then $a < c$. We often write a chain like $3 < x < 7$ to say $x$ is trapped between $3$ and $7$. You may add to, subtract from, or multiply every part of a chain at once — just remember the flip rule applies to every part too.',
      },
    ],
    examples: [
      {
        problem: 'If $x > 4$, what can you say about $x - 6$?',
        steps: [
          'Subtracting the same number from both sides is a safe move — the direction of the inequality does not change.',
          'Subtract $6$ from both sides: $x - 6 > 4 - 6$.',
          'Since $4 - 6 = -2$, we get $x - 6 > -2$.',
        ],
        answer: '$x - 6 > -2$',
      },
      {
        problem: 'Solve $-3x < 12$.',
        steps: [
          'To free $x$, divide both sides by $-3$. Dividing by a negative number flips the inequality!',
          'So $-3x < 12$ becomes $x > -4$.',
          'Check with $x = 0$: it satisfies $x > -4$, and indeed $-3(0) = 0 < 12$. ✓',
        ],
        answer: '$x > -4$',
      },
      {
        problem: 'If $1 < x < 4$, what can you say about $2x + 1$?',
        steps: [
          'Work on the whole chain at once. Multiply every part by the positive number $2$: $2 < 2x < 8$.',
          'Now add $1$ to every part: $3 < 2x + 1 < 9$.',
        ],
        answer: '$3 < 2x + 1 < 9$',
      },
    ],
  },
  problems: [
    {
      q: 'Which symbol makes this statement true? $-3 \\;\\square\\; -7$',
      choices: ['$<$', '$>$', '$=$', '$\\le$'],
      answer: 1,
      solution: 'On the number line, $-3$ sits to the right of $-7$, so $-3$ is the greater number: $-3 > -7$. With negative numbers, the one closer to zero is larger.',
    },
    {
      q: 'What does $x \\ge 5$ mean?',
      choices: [
        '$x$ must be greater than $5$',
        '$x$ can be $5$ or any number greater than $5$',
        '$x$ can be $5$ or any number less than $5$',
        '$x$ must equal $5$',
      ],
      answer: 1,
      solution: 'The symbol $\\ge$ means "greater than or equal to." So $x = 5$ works, and so does anything bigger. The little line under the symbol is what allows equality.',
    },
    {
      q: 'If $a < b$, which of these must be true?',
      choices: ['$a + 10 < b + 10$', '$a + 10 > b + 10$', '$a + 10 = b + 10$', '$-a < -b$'],
      answer: 0,
      solution: 'Adding the same number to both sides keeps the direction: $a + 10 < b + 10$. Watch out for $-a < -b$: negating both sides FLIPS the inequality, so actually $-a > -b$.',
    },
    {
      q: 'Subtract $5$ from both sides of $x < 3$. What do you get?',
      choices: ['$x - 5 < 3$', '$x - 5 > -2$', '$x - 5 < 8$', '$x - 5 < -2$'],
      answer: 3,
      solution: 'Subtracting $5$ from BOTH sides gives $x - 5 < 3 - 5$, which is $x - 5 < -2$. The direction does not flip — subtraction is always a safe move.',
    },
    {
      q: 'If $x > 2$, which of these must be true?',
      choices: ['$-x > -2$', '$-x > 2$', '$-x < -2$', '$-x = -2$'],
      answer: 2,
      solution: 'Multiplying both sides by $-1$ flips the inequality: $x > 2$ becomes $-x < -2$. Try $x = 3$: then $-x = -3$, and indeed $-3 < -2$. ✓',
    },
    {
      q: 'Solve $-4x > 20$.',
      choices: ['$x > -5$', '$x < -5$', '$x > 5$', '$x < 5$'],
      answer: 1,
      solution: 'Divide both sides by $-4$ and flip: $x < -5$. Check with $x = -6$: $-4(-6) = 24 > 20$. ✓ If you forget to flip, you get $x > -5$, but $x = 0$ shows that fails: $-4(0) = 0$ is not greater than $20$.',
    },
    {
      q: 'Solve $2x \\le 14$.',
      choices: ['$x \\ge 7$', '$x \\le 7$', '$x < 7$', '$x \\le 28$'],
      answer: 1,
      solution: 'Divide both sides by the positive number $2$: $x \\le 7$. No flip is needed — we only flip for NEGATIVE multipliers. And the "or equal" stays: $x = 7$ works, since $2(7) = 14 \\le 14$.',
    },
    {
      q: 'If $a < b$ and $b < c$, which of these must be true?',
      choices: ['$a > c$', '$a = c$', '$a < c$', 'It cannot be determined'],
      answer: 2,
      solution: 'Inequalities chain together: $a$ is left of $b$, and $b$ is left of $c$, so $a$ is left of $c$. That is, $a < c$. Mathematicians call this the transitive property.',
    },
    {
      q: 'If $-1 < x < 3$, what can you say about $-2x$?',
      choices: ['$-6 < -2x < 2$', '$2 < -2x < 6$', '$-6 \\le -2x \\le 2$', '$-2 < -2x < 6$'],
      answer: 0,
      solution: 'Multiply every part of the chain by $-2$ and flip both symbols: $-1 < x < 3$ becomes $2 > -2x > -6$, which reads left-to-right as $-6 < -2x < 2$. The inequalities stay strict — no endpoint was ever included.',
    },
    {
      q: 'If $a < b$, which of the following is NOT always true?',
      choices: ['$a + 3 < b + 3$', '$a - 7 < b - 7$', '$5a < 5b$', '$a^2 < b^2$'],
      answer: 3,
      solution: 'Squaring can scramble an inequality when negatives are involved. Try $a = -3$ and $b = 1$: certainly $-3 < 1$, but $a^2 = 9$ and $b^2 = 1$, so $a^2 > b^2$. The other three are safe moves (adding, subtracting, multiplying by positive $5$).',
    },
  ],
}

const s92 = {
  id: '9.2',
  title: 'Which Is Greater?',
  learn: {
    concepts: [
      {
        heading: 'Subtract and check the sign',
        body: 'To compare $a$ and $b$, look at the difference: $a > b$ exactly when $a - b$ is positive, and $a < b$ exactly when $a - b$ is negative. Many tricky comparisons become easy once you compute (or just estimate the sign of) the difference.',
      },
      {
        heading: 'Cross-multiply — carefully',
        body: 'To compare $\\frac{a}{b}$ and $\\frac{c}{d}$ when $b$ and $d$ are POSITIVE, compare $ad$ and $bc$: whichever product is bigger, that fraction is bigger. This works because it is secretly "multiply both sides by $bd$," which is a safe move only when $bd$ is positive. A common denominator does the same job.',
      },
      {
        heading: 'Square both sides (nonnegatives only)',
        body: 'If $a$ and $b$ are both nonnegative, then $a < b$ exactly when $a^2 < b^2$. This is the go-to tool for comparing square roots: to compare $3\\sqrt{5}$ with $7$, compare $45$ with $49$ instead. Never use this shortcut if either side could be negative!',
      },
      {
        heading: 'Nudging a fraction toward $1$',
        body: 'Take a positive fraction less than $1$, like $\\frac{3}{5}$, and add $1$ to the top AND the bottom: $\\frac{4}{6}$. The new fraction is closer to $1$, so it is BIGGER. In general, for $0 < a < b$, we have $\\frac{a}{b} < \\frac{a+1}{b+1}$ — cross-multiplying shows why: $a(b+1) = ab + a$ is less than $b(a+1) = ab + b$.',
      },
    ],
    examples: [
      {
        problem: 'Which is greater, $\\frac{7}{9}$ or $\\frac{5}{7}$?',
        steps: [
          'Both denominators are positive, so we may cross-multiply: compare $7 \\times 7$ with $9 \\times 5$.',
          'That is $49$ versus $45$, and $49 > 45$.',
          'The bigger product belongs to $\\frac{7}{9}$ (its numerator made the $49$), so $\\frac{7}{9} > \\frac{5}{7}$.',
        ],
        answer: '$\\frac{7}{9}$ is greater',
      },
      {
        problem: 'Which is greater, $3\\sqrt{5}$ or $7$?',
        steps: [
          'Both numbers are positive, so squaring preserves the comparison.',
          'Squares: $(3\\sqrt{5})^2 = 9 \\times 5 = 45$ and $7^2 = 49$.',
          'Since $45 < 49$, we conclude $3\\sqrt{5} < 7$.',
        ],
        answer: '$7$ is greater',
      },
      {
        problem: 'Which is greater, $\\frac{15}{16}$ or $\\frac{16}{17}$?',
        steps: [
          'Compare each fraction to $1$: $\\frac{15}{16}$ misses $1$ by $\\frac{1}{16}$, while $\\frac{16}{17}$ misses $1$ by only $\\frac{1}{17}$.',
          'A smaller miss means closer to $1$: since $\\frac{1}{17} < \\frac{1}{16}$, the fraction $\\frac{16}{17}$ is closer to $1$.',
          'So $\\frac{16}{17} > \\frac{15}{16}$.',
        ],
        answer: '$\\frac{16}{17}$ is greater',
      },
    ],
  },
  problems: [
    {
      q: 'Which is greater, $\\frac{3}{4}$ or $\\frac{2}{3}$?',
      choices: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', 'They are equal', 'It cannot be determined'],
      answer: 0,
      solution: 'Cross-multiply (both denominators are positive): $3 \\times 3 = 9$ versus $4 \\times 2 = 8$. Since $9 > 8$, the fraction $\\frac{3}{4}$ is greater.',
    },
    {
      q: 'Two numbers satisfy $a - b = 0.4$. Which is greater?',
      choices: ['$b$', '$a$', 'They are equal', 'It depends on the numbers'],
      answer: 1,
      solution: 'The difference $a - b$ is positive, and a positive difference means the first number is bigger: $a > b$. This works no matter what the numbers are — the sign of the difference tells the whole story.',
    },
    {
      q: 'Which is greater, $\\frac{5}{8}$ or $\\frac{7}{12}$?',
      choices: ['$\\frac{7}{12}$', '$\\frac{5}{8}$', 'They are equal', 'Neither — they cannot be compared'],
      answer: 1,
      solution: 'Use the common denominator $24$: $\\frac{5}{8} = \\frac{15}{24}$ and $\\frac{7}{12} = \\frac{14}{24}$. Since $15 > 14$, we get $\\frac{5}{8} > \\frac{7}{12}$.',
    },
    {
      q: 'Which is greater, $\\sqrt{40}$ or $6$?',
      choices: ['$6$', 'They are equal', '$\\sqrt{40}$', 'It cannot be determined without a calculator'],
      answer: 2,
      solution: 'Both are positive, so compare squares: $(\\sqrt{40})^2 = 40$ and $6^2 = 36$. Since $40 > 36$, we get $\\sqrt{40} > 6$. No calculator needed!',
    },
    {
      q: 'To compare $\\frac{8}{13}$ and $\\frac{9}{14}$, you cross-multiply and get $8 \\times 14 = 112$ and $13 \\times 9 = 117$. What is the conclusion?',
      choices: [
        '$\\frac{8}{13} > \\frac{9}{14}$',
        '$\\frac{8}{13} < \\frac{9}{14}$',
        '$\\frac{8}{13} = \\frac{9}{14}$',
        'Cross-multiplying does not apply here',
      ],
      answer: 1,
      solution: 'The product $112$ came from the numerator of $\\frac{8}{13}$, and the product $117$ came from the numerator of $\\frac{9}{14}$. Since $112 < 117$, we conclude $\\frac{8}{13} < \\frac{9}{14}$. (Both denominators are positive, so the method is valid.) Notice this fits the pattern: adding $1$ to top and bottom of $\\frac{8}{13}$ moved it closer to $1$.',
    },
    {
      q: 'Which is greater, $2^{30}$ or $3^{20}$?',
      choices: ['$2^{30}$', 'They are equal', 'Impossible to compare without computing both', '$3^{20}$'],
      answer: 3,
      solution: 'Rewrite both with exponent $10$: $2^{30} = (2^3)^{10} = 8^{10}$ and $3^{20} = (3^2)^{10} = 9^{10}$. Ten factors of $9$ beat ten factors of $8$, so $3^{20} > 2^{30}$.',
    },
    {
      q: 'Which is greater, $5\\sqrt{2}$ or $7$?',
      choices: ['$5\\sqrt{2}$', '$7$', 'They are equal', 'It cannot be determined'],
      answer: 0,
      solution: 'Both are positive, so compare squares: $(5\\sqrt{2})^2 = 25 \\times 2 = 50$ and $7^2 = 49$. Since $50 > 49$, we get $5\\sqrt{2} > 7$ — just barely!',
    },
    {
      q: 'Which is greater, $\\frac{15}{16}$ or $\\frac{16}{17}$?',
      choices: ['$\\frac{15}{16}$', 'They are equal', '$\\frac{16}{17}$', 'Neither can be compared without decimals'],
      answer: 2,
      solution: 'Compare each to $1$: $\\frac{15}{16} = 1 - \\frac{1}{16}$ and $\\frac{16}{17} = 1 - \\frac{1}{17}$. The fraction $\\frac{16}{17}$ misses $1$ by less, so it is greater. (Cross-multiplying agrees: $15 \\times 17 = 255 < 16 \\times 16 = 256$.)',
    },
    {
      q: 'Which of these fractions is the largest: $\\frac{3}{5}$, $\\frac{5}{8}$, or $\\frac{8}{13}$?',
      choices: ['$\\frac{3}{5}$', '$\\frac{5}{8}$', '$\\frac{8}{13}$', 'They are all equal'],
      answer: 1,
      solution: 'Compare in pairs by cross-multiplying. $\\frac{5}{8}$ vs $\\frac{3}{5}$: $25 > 24$, so $\\frac{5}{8}$ wins. $\\frac{5}{8}$ vs $\\frac{8}{13}$: $5 \\times 13 = 65 > 8 \\times 8 = 64$, so $\\frac{5}{8}$ wins again. The largest is $\\frac{5}{8}$.',
    },
    {
      q: 'Which is greater, $\\sqrt{2} + \\sqrt{3}$ or $\\sqrt{10}$?',
      choices: ['$\\sqrt{2} + \\sqrt{3}$', 'They are equal', 'Squaring cannot decide this', '$\\sqrt{10}$'],
      answer: 3,
      solution: 'Both sides are positive, so square them: $(\\sqrt{2} + \\sqrt{3})^2 = 2 + 2\\sqrt{6} + 3 = 5 + 2\\sqrt{6}$, while $(\\sqrt{10})^2 = 10$. Now compare $2\\sqrt{6}$ with $5$: squaring again gives $24$ versus $25$, so $2\\sqrt{6} < 5$. That makes $5 + 2\\sqrt{6} < 10$, so $\\sqrt{10}$ is greater.',
    },
  ],
}

const s93 = {
  id: '9.3',
  title: 'Linear Inequalities',
  learn: {
    concepts: [
      {
        heading: 'Solve like an equation — almost',
        body: 'To solve a linear inequality like $3x - 5 > 7$, use the same moves as for equations: add, subtract, multiply, divide. The one difference: whenever you multiply or divide both sides by a negative number, flip the inequality symbol.',
      },
      {
        heading: 'Three-part inequalities',
        body: 'A compound inequality like $-2 \\le 3x + 4 < 13$ is really two inequalities at once. Solve it in one chain by doing each move to ALL THREE parts: subtract $4$ everywhere, then divide everywhere. The goal is to leave $x$ alone in the middle.',
      },
      {
        heading: 'Counting integer solutions',
        body: 'Once you have solved down to something like $-2 \\le x < 3$, counting integers takes care: list them or count endpoints thoughtfully. Here the integers are $-2, -1, 0, 1, 2$ — five of them. Whether each endpoint is included ($\\le$) or excluded ($<$) changes the count, so check both ends.',
      },
      {
        heading: 'Words into symbols',
        body: 'Word problems hide inequalities in phrases: "at least $90$" means $\\ge 90$, "at most $50$" and "no more than $50$" both mean $\\le 50$, and "more than" means the strict $>$. Translate the phrase first, then solve as usual.',
      },
    ],
    examples: [
      {
        problem: 'Solve $3x - 5 > 7$.',
        steps: [
          'Add $5$ to both sides: $3x > 12$.',
          'Divide both sides by the positive number $3$ (no flip): $x > 4$.',
          'Check $x = 5$: $3(5) - 5 = 10 > 7$. ✓',
        ],
        answer: '$x > 4$',
      },
      {
        problem: 'Solve $-2 \\le 3x + 4 < 13$, and count the integer solutions.',
        steps: [
          'Subtract $4$ from all three parts: $-6 \\le 3x < 9$.',
          'Divide all three parts by $3$: $-2 \\le x < 3$.',
          'The integers in this range are $-2, -1, 0, 1, 2$. Note that $3$ is NOT included because of the strict $<$.',
        ],
        answer: '$-2 \\le x < 3$, which contains $5$ integers',
      },
      {
        problem: 'Ride tickets cost $\\$8$ each, and Jun can spend at most $\\$50$. How many tickets can he buy?',
        steps: [
          '"At most $\\$50$" translates to $8n \\le 50$, where $n$ is the number of tickets.',
          'Divide by $8$: $n \\le 6.25$.',
          'Tickets come in whole numbers, so the most Jun can buy is $6$ tickets (costing $\\$48$).',
        ],
        answer: 'At most $6$ tickets',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x + 7 < 12$.',
      choices: ['$x < 5$', '$x > 5$', '$x < 19$', '$x \\le 5$'],
      answer: 0,
      solution: 'Subtract $7$ from both sides: $x < 5$. The inequality stays strict — nothing we did changes $<$ into $\\le$.',
    },
    {
      q: 'Solve $4x \\ge 20$.',
      choices: ['$x \\le 5$', '$x \\ge 5$', '$x > 5$', '$x \\ge 16$'],
      answer: 1,
      solution: 'Divide both sides by the positive number $4$: $x \\ge 5$. No flip — we only flip for negative multipliers. And $x = 5$ itself works: $4(5) = 20 \\ge 20$. ✓',
    },
    {
      q: 'Solve $-3x < 15$.',
      choices: ['$x < -5$', '$x < 5$', '$x > -5$', '$x > 5$'],
      answer: 2,
      solution: 'Divide both sides by $-3$ and FLIP: $x > -5$. Check $x = 0$: $-3(0) = 0 < 15$. ✓ Forgetting the flip gives $x < -5$, but $x = 0$ shows that cannot be the solution set.',
    },
    {
      q: 'Solve $2x - 3 \\le 9$.',
      choices: ['$x \\ge 6$', '$x \\le 3$', '$x < 6$', '$x \\le 6$'],
      answer: 3,
      solution: 'Add $3$ to both sides: $2x \\le 12$. Divide by $2$: $x \\le 6$. The endpoint is included: $2(6) - 3 = 9 \\le 9$. ✓',
    },
    {
      q: 'Solve $5 - 2x > 11$.',
      choices: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
      answer: 0,
      solution: 'Subtract $5$: $-2x > 6$. Divide by $-2$ and flip: $x < -3$. Check $x = -4$: $5 - 2(-4) = 13 > 11$. ✓',
    },
    {
      q: 'How many integers satisfy $1 < 2x + 1 \\le 9$?',
      choices: ['$3$', '$4$', '$5$', '$8$'],
      answer: 1,
      solution: 'Subtract $1$ from all parts: $0 < 2x \\le 8$. Divide by $2$: $0 < x \\le 4$. The integers are $1, 2, 3, 4$ — four of them. Note $0$ is excluded (strict $<$) but $4$ is included ($\\le$).',
    },
    {
      q: 'How many integers satisfy $-4 \\le x < 3$?',
      choices: ['$6$', '$8$', '$7$', '$5$'],
      answer: 2,
      solution: 'List them: $-4, -3, -2, -1, 0, 1, 2$. That is $7$ integers. The left endpoint $-4$ is included, but $3$ is not — miscounting an endpoint is the classic slip here.',
    },
    {
      q: 'Mia scored $84$ and $92$ on her first two tests. What must she score on the third test so that her average is at least $90$?',
      choices: ['At least $90$', 'At least $92$', 'At least $96$', 'At least $94$'],
      answer: 3,
      solution: '"At least $90$" means $\\frac{84 + 92 + x}{3} \\ge 90$. Multiply by $3$: $176 + x \\ge 270$. Subtract $176$: $x \\ge 94$. Check: $\\frac{84+92+94}{3} = \\frac{270}{3} = 90$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{2} + 3 < x - 1$.',
      choices: ['$x < 8$', '$x > 8$', '$x > 4$', '$x < 4$'],
      answer: 1,
      solution: 'Multiply both sides by the positive number $2$: $x + 6 < 2x - 2$. Subtract $x$ and add $2$: $8 < x$, which is $x > 8$. Check $x = 10$: left side $5 + 3 = 8$, right side $9$, and $8 < 9$. ✓',
    },
    {
      q: 'How many integers satisfy $-7 < 3 - 2x \\le 5$?',
      choices: ['$5$', '$7$', '$6$', '$4$'],
      answer: 2,
      solution: 'Subtract $3$ from all parts: $-10 < -2x \\le 2$. Divide every part by $-2$ and flip BOTH symbols: $5 > x \\ge -1$, that is, $-1 \\le x < 5$. The integers are $-1, 0, 1, 2, 3, 4$ — six of them.',
    },
  ],
}

const s94 = {
  id: '9.4',
  title: 'Graphing Inequalities',
  learn: {
    concepts: [
      {
        heading: 'Dots: open or closed',
        body: 'To graph $x > 2$ on a number line, put a circle at $2$ and shade everything to the right. The circle is OPEN (hollow) because $2$ itself is not a solution. For $x \\ge 2$, the circle is CLOSED (filled in) — the endpoint counts. Open means strict ($<$ or $>$); closed means "or equal" ($\\le$ or $\\ge$).',
      },
      {
        heading: 'Between two numbers',
        body: 'A compound inequality like $-1 \\le x < 3$ graphs as a segment: a closed dot at $-1$, an open dot at $3$, and shading in between. Each endpoint gets its own open-or-closed decision, matching its own symbol.',
      },
      {
        heading: 'Lines split the plane',
        body: 'A two-variable inequality like $y < x + 1$ has a whole REGION of solutions. The line $y = x + 1$ splits the plane into two half-planes, and the solutions fill one of them. Draw the boundary DASHED for a strict inequality ($<$ or $>$) and SOLID for $\\le$ or $\\ge$ — solid means points on the line count too.',
      },
      {
        heading: 'The test-point trick',
        body: 'To find which side to shade, pick an easy point not on the line — $(0, 0)$ is the favorite — and plug it in. If the inequality comes out true, shade the side containing your test point; if it comes out false, shade the other side. Every point on one side behaves the same way, so one test decides everything.',
      },
    ],
    examples: [
      {
        problem: 'Graph $x > 2$ on a number line.',
        steps: [
          'The boundary value is $2$. Since the inequality is strict, $2$ is not a solution — draw an OPEN circle at $2$.',
          'Solutions are numbers greater than $2$, so shade the ray heading right from the circle.',
        ],
        answer: 'An open circle at $2$ with a ray extending to the right',
        fig: {
          view: [-6, -1.5, 6, 1.5],
          elems: [
            { t: 'seg', a: [-6, 0], b: [6, 0] },
            { t: 'seg', a: [2, 0], b: [6, 0], hl: true },
            { t: 'point', p: [2, 0], label: '2', open: true },
            { t: 'label', p: [4, 0], text: 'x > 2', dx: 0, dy: -16 },
          ],
        },
      },
      {
        problem: 'Graph $-1 \\le x < 3$ on a number line.',
        steps: [
          'Two endpoints, two decisions. At $-1$ the symbol is $\\le$, so $-1$ IS a solution: closed (filled) dot.',
          'At $3$ the symbol is $<$, so $3$ is NOT a solution: open dot.',
          'Shade the segment between them.',
        ],
        answer: 'A closed dot at $-1$, an open dot at $3$, and the segment between them shaded',
        fig: {
          view: [-6, -1.5, 6, 1.5],
          elems: [
            { t: 'seg', a: [-6, 0], b: [6, 0] },
            { t: 'seg', a: [-1, 0], b: [3, 0], hl: true },
            { t: 'point', p: [-1, 0], label: '-1' },
            { t: 'point', p: [3, 0], label: '3', open: true },
            { t: 'label', p: [1, 0], text: '-1 ≤ x < 3', dx: 0, dy: -16 },
          ],
        },
      },
      {
        problem: 'Which side of the line $y = x + 1$ satisfies $y < x + 1$?',
        steps: [
          'The point $(0, 0)$ is not on the line, so use it as a test point.',
          'Plug it in: is $0 < 0 + 1$? Yes, $0 < 1$ is true.',
          'So the solutions fill the side containing $(0, 0)$ — the region BELOW the line. The boundary is dashed, because points on the line do not satisfy the strict $<$.',
        ],
        answer: 'The side below the line — the half-plane containing $(0, 0)$, with a dashed boundary',
        fig: {
          view: [-5, -5, 5, 5],
          grid: true,
          elems: [
            { t: 'line', a: [-4, -3], b: [4, 5] },
            { t: 'point', p: [0, 0], label: '(0,0)' },
            { t: 'label', p: [-3.4, 3.6], text: 'y = x + 1', dx: 0, dy: 0 },
          ],
        },
      },
    ],
  },
  problems: [
    {
      q: 'How should $x \\ge 4$ be graphed on a number line?',
      choices: [
        'An open circle at $4$ with shading to the right',
        'A closed (filled) circle at $4$ with shading to the right',
        'A closed circle at $4$ with shading to the left',
        'An open circle at $4$ with shading to the left',
      ],
      answer: 1,
      solution: 'The symbol $\\ge$ includes the endpoint, so the circle at $4$ is closed. "Greater than" means shading heads right. Closed dot, shade right.',
    },
    {
      q: 'Which inequality matches this graph?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-1, 0], b: [6, 0], hl: true },
          { t: 'point', p: [-1, 0], label: '-1', open: true },
        ],
      },
      choices: ['$x \\ge -1$', '$x < -1$', '$x > -1$', '$x \\le -1$'],
      answer: 2,
      solution: 'The circle at $-1$ is open, so $-1$ is not included — the inequality is strict. The shading goes right, meaning greater. Together: $x > -1$.',
    },
    {
      q: 'When graphing $y > 2x - 1$, how should the boundary line $y = 2x - 1$ be drawn?',
      choices: [
        'Solid, because the boundary is always included',
        'Dashed, because points on the line are not solutions',
        'Solid, because the inequality contains a $2$',
        'It does not matter either way',
      ],
      answer: 1,
      solution: 'The inequality is strict ($>$), so a point exactly on the line makes the two sides equal — not greater. Points on the line are not solutions, and we signal that with a dashed line.',
    },
    {
      q: 'To decide which side of $y = x + 3$ to shade for $y \\le x + 3$, you test the point $(0, 0)$. What happens?',
      choices: [
        '$0 \\le 3$ is true, so shade the side containing $(0, 0)$',
        '$0 \\le 3$ is false, so shade the other side',
        '$(0, 0)$ is on the line, so a different test point is needed',
        'A test point cannot decide the shading',
      ],
      answer: 0,
      solution: 'Substitute $(0,0)$: the inequality becomes $0 \\le 0 + 3$, that is, $0 \\le 3$ — true. A true result means the test point is a solution, so shade its side. (And $(0,0)$ is not on the line, since $0 \\ne 3$, so it is a legal test point.)',
    },
    {
      q: 'Which inequality matches this graph?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-6, 0], b: [2, 0], hl: true },
          { t: 'point', p: [2, 0], label: '2' },
        ],
      },
      choices: ['$x < 2$', '$x \\ge 2$', '$x > 2$', '$x \\le 2$'],
      answer: 3,
      solution: 'The dot at $2$ is closed (filled), so $2$ is included: the symbol has an "or equal." The shading heads left, meaning less. Together: $x \\le 2$.',
    },
    {
      q: 'Which of these points satisfies $y < 2x$?',
      choices: ['$(1, 3)$', '$(3, 1)$', '$(0, 0)$', '$(-1, -1)$'],
      answer: 1,
      solution: 'Test each: $(3, 1)$ gives $1 < 6$ — true. ✓ The others fail: $(1,3)$ gives $3 < 2$; $(0,0)$ gives $0 < 0$ (not strictly less); $(-1,-1)$ gives $-1 < -2$. Only $(3, 1)$ is a solution.',
    },
    {
      q: 'Which describes the graph of $-2 < x \\le 3$?',
      choices: [
        'Open dot at $-2$, closed dot at $3$, segment shaded between',
        'Closed dot at $-2$, open dot at $3$, segment shaded between',
        'Open dots at both $-2$ and $3$',
        'Closed dots at both $-2$ and $3$',
      ],
      answer: 0,
      solution: 'Read each endpoint from its own symbol: at $-2$ the inequality is strict ($<$), so the dot is open; at $3$ it is $\\le$, so the dot is closed. Shade the numbers in between.',
    },
    {
      q: 'For $y \\ge -x + 2$, testing $(0, 0)$ gives $0 \\ge 2$, which is false. Which region should be shaded?',
      choices: [
        'The side containing the origin',
        'The side NOT containing the origin',
        'Both sides of the line',
        'Only the line itself',
      ],
      answer: 1,
      solution: 'A false result means the test point is NOT a solution, so the solutions live on the other side: shade the half-plane not containing $(0, 0)$. The boundary is solid, since $\\ge$ includes the line.',
    },
    {
      q: 'The graph below shows a solution set. How many integers does it contain?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-3, 0], b: [1, 0], hl: true },
          { t: 'point', p: [-3, 0], label: '-3' },
          { t: 'point', p: [1, 0], label: '1' },
        ],
      },
      choices: ['$3$', '$4$', '$6$', '$5$'],
      answer: 3,
      solution: 'Both dots are closed, so the graph shows $-3 \\le x \\le 1$. The integers are $-3, -2, -1, 0, 1$ — five of them. Both endpoints count because both dots are filled.',
    },
    {
      q: 'Which inequality has the SAME graph as $-2x + 6 > 0$?',
      choices: ['$x > 3$', '$x \\le 3$', '$x < 3$', '$x \\ge 3$'],
      answer: 2,
      solution: 'Solve it: $-2x + 6 > 0$ gives $-2x > -6$, and dividing by $-2$ flips the symbol: $x < 3$. So the graph is an open circle at $3$ shaded to the left — the same graph as $x < 3$.',
    },
  ],
}

const s95 = {
  id: '9.5',
  title: 'Optimization',
  learn: {
    concepts: [
      {
        heading: 'Push to the edge',
        body: 'If $x$ is trapped in an interval like $2 \\le x \\le 5$, an expression like $3x - 1$ takes its largest and smallest values at the ENDPOINTS. When the coefficient of $x$ is positive, bigger $x$ means a bigger value, so the maximum happens at the right endpoint. A negative coefficient (like in $10 - 2x$) reverses this: the maximum happens at the LEFT endpoint.',
      },
      {
        heading: 'Build the range step by step',
        body: 'You can carry a whole interval through a calculation. From $2 \\le x \\le 5$, multiply by $3$: $6 \\le 3x \\le 15$. Subtract $1$: $5 \\le 3x - 1 \\le 14$. Now you can read off both the minimum ($5$) and the maximum ($14$) at a glance.',
      },
      {
        heading: 'Fixed sum, biggest product',
        body: 'If two numbers must add to a fixed total, their product is biggest when the numbers are EQUAL (or as close to equal as allowed). For a sum of $10$: $1 \\times 9 = 9$, $3 \\times 7 = 21$, $5 \\times 5 = 25$. The more balanced the split, the bigger the product.',
      },
      {
        heading: 'Integers: check the neighbors',
        body: 'When the variables must be whole numbers, the perfect balanced split may not be allowed. Aim for it anyway, then test the closest allowed values. For a sum of $15$, the split $7.5$ and $7.5$ is not whole, so try the neighbors $7$ and $8$: their product $56$ is the best you can do with integers.',
      },
    ],
    examples: [
      {
        problem: 'If $2 \\le x \\le 5$, what is the largest possible value of $3x - 1$?',
        steps: [
          'Carry the interval through: multiply $2 \\le x \\le 5$ by $3$ to get $6 \\le 3x \\le 15$.',
          'Subtract $1$ everywhere: $5 \\le 3x - 1 \\le 14$.',
          'The largest value is $14$, achieved at the right endpoint $x = 5$.',
        ],
        answer: 'The maximum is $14$, at $x = 5$',
      },
      {
        problem: 'Let $x$ be a whole number from $0$ to $10$. What is the largest possible value of $x(10 - x)$?',
        steps: [
          'The two factors $x$ and $10 - x$ always add up to $10$ — a fixed sum!',
          'A fixed sum means the product is biggest when the factors are equal: $x = 5$ makes both factors $5$.',
          'Check the neighbors to be sure: $4 \\times 6 = 24$ and $5 \\times 5 = 25$. Balanced wins.',
        ],
        answer: 'The maximum is $25$, at $x = 5$',
      },
      {
        problem: 'If $1 \\le x \\le 4$ and $2 \\le y \\le 6$, what is the largest possible value of $y - x$?',
        steps: [
          'To make $y - x$ big, make $y$ as big as possible AND $x$ as small as possible.',
          'Take $y = 6$ and $x = 1$: then $y - x = 6 - 1 = 5$.',
        ],
        answer: 'The maximum is $5$',
      },
    ],
  },
  problems: [
    {
      q: 'If $1 \\le x \\le 6$, what is the largest possible value of $x + 3$?',
      choices: ['$9$', '$4$', '$10$', '$6$'],
      answer: 0,
      solution: 'Adding $3$ to everything in $1 \\le x \\le 6$ gives $4 \\le x + 3 \\le 9$. The maximum is $9$, at the right endpoint $x = 6$.',
    },
    {
      q: 'If $2 \\le x \\le 5$, what is the smallest possible value of $4x$?',
      choices: ['$20$', '$2$', '$8$', '$4$'],
      answer: 2,
      solution: 'Multiplying $2 \\le x \\le 5$ by the positive number $4$ gives $8 \\le 4x \\le 20$. The smallest value is $8$, at the left endpoint $x = 2$.',
    },
    {
      q: 'If $0 \\le x \\le 3$, what is the largest possible value of $10 - 2x$?',
      choices: ['$4$', '$10$', '$16$', '$7$'],
      answer: 1,
      solution: 'The coefficient of $x$ is negative, so SMALLER $x$ makes $10 - 2x$ bigger. At $x = 0$: $10 - 0 = 10$. (At $x = 3$ you get only $4$ — that is the minimum.)',
    },
    {
      q: 'If $-2 \\le x \\le 3$, what is the largest possible value of $x^2$?',
      choices: ['$4$', '$0$', '$9$', '$6$'],
      answer: 2,
      solution: 'Squaring cares about distance from $0$, so check both endpoints: $(-2)^2 = 4$ and $3^2 = 9$. The larger is $9$, at $x = 3$. (The smallest value is $0$, at $x = 0$ in the middle — squares do not behave like straight lines!)',
    },
    {
      q: 'Two whole numbers add up to $12$. What is the largest their product can be?',
      choices: ['$35$', '$36$', '$32$', '$27$'],
      answer: 1,
      solution: 'With a fixed sum, equal parts give the biggest product: $6 + 6 = 12$ and $6 \\times 6 = 36$. Compare with $5 \\times 7 = 35$ or $4 \\times 8 = 32$ — every unbalanced split does worse.',
    },
    {
      q: 'If $1 \\le x \\le 4$ and $3 \\le y \\le 7$, what is the largest possible value of $xy$?',
      choices: ['$21$', '$12$', '$28$', '$11$'],
      answer: 2,
      solution: 'All values here are positive, so the biggest product comes from the biggest factors: $x = 4$ and $y = 7$ give $xy = 28$.',
    },
    {
      q: 'If $1 \\le x \\le 4$ and $3 \\le y \\le 7$, what is the smallest possible value of $y - x$?',
      choices: ['$-1$', '$2$', '$-3$', '$0$'],
      answer: 0,
      solution: 'To make $y - x$ small, take $y$ as small as possible and $x$ as large as possible: $y = 3$ and $x = 4$ give $y - x = 3 - 4 = -1$. Yes, the difference can be negative!',
    },
    {
      q: 'Let $x$ be a whole number. What is the largest possible value of $x(8 - x)$?',
      choices: ['$15$', '$12$', '$7$', '$16$'],
      answer: 3,
      solution: 'The factors $x$ and $8 - x$ add to the fixed sum $8$, so balance them: $x = 4$ gives $4 \\times 4 = 16$. The neighbors confirm it: $3 \\times 5 = 15$ is smaller.',
    },
    {
      q: 'Two whole numbers add up to $15$. What is the largest their product can be?',
      choices: ['$54$', '$50$', '$56.25$', '$56$'],
      answer: 3,
      solution: 'The perfectly balanced split would be $7.5 + 7.5$, but whole numbers cannot do that. Take the closest neighbors: $7 + 8 = 15$ and $7 \\times 8 = 56$. (The value $56.25 = 7.5 \\times 7.5$ is out of reach for whole numbers.)',
    },
    {
      q: 'Positive whole numbers $x$ and $y$ satisfy $2x + 3y = 24$. What is the largest possible value of $xy$?',
      choices: ['$18$', '$27$', '$24$', '$21$'],
      answer: 2,
      solution: 'From $2x + 3y = 24$, the value $x = \\frac{24 - 3y}{2}$ is a whole number only when $y$ is even. Test the possibilities: $y = 2$ gives $x = 9$ and $xy = 18$; $y = 4$ gives $x = 6$ and $xy = 24$; $y = 6$ gives $x = 3$ and $xy = 18$. The best is $24$ — again the balanced middle choice wins.',
    },
  ],
}

const challenge = [
  {
    q: 'Solve $5 - 3x \\ge -7$.',
    choices: ['$x \\ge 4$', '$x \\le 4$', '$x \\le -4$', '$x \\ge -4$'],
    answer: 1,
    solution: 'Subtract $5$: $-3x \\ge -12$. Divide by $-3$ and flip: $x \\le 4$. Check $x = 0$: $5 - 0 = 5 \\ge -7$. ✓',
  },
  {
    q: 'How many integers satisfy $-5 < 2x + 1 < 9$?',
    choices: ['$7$', '$5$', '$6$', '$8$'],
    answer: 2,
    solution: 'Subtract $1$ from all parts: $-6 < 2x < 8$. Divide by $2$: $-3 < x < 4$. Both inequalities are strict, so neither endpoint counts: the integers are $-2, -1, 0, 1, 2, 3$ — six of them.',
  },
  {
    q: 'Which of these fractions is the largest?',
    choices: ['$\\frac{6}{11}$', '$\\frac{5}{9}$', '$\\frac{1}{2}$', '$\\frac{4}{7}$'],
    answer: 3,
    solution: 'Cross-multiply in pairs. $\\frac{4}{7}$ vs $\\frac{5}{9}$: $4 \\times 9 = 36 > 7 \\times 5 = 35$, so $\\frac{4}{7}$ wins. $\\frac{4}{7}$ vs $\\frac{6}{11}$: $4 \\times 11 = 44 > 7 \\times 6 = 42$, so $\\frac{4}{7}$ wins again. And $\\frac{4}{7} > \\frac{1}{2}$ since $8 > 7$. The largest is $\\frac{4}{7}$.',
  },
  {
    q: 'Which is greater, $\\sqrt{3} + \\sqrt{7}$ or $\\sqrt{19}$?',
    choices: ['$\\sqrt{3} + \\sqrt{7}$', '$\\sqrt{19}$', 'They are equal', 'Squaring cannot decide this'],
    answer: 0,
    solution: 'Both are positive, so square: $(\\sqrt{3} + \\sqrt{7})^2 = 3 + 2\\sqrt{21} + 7 = 10 + 2\\sqrt{21}$, versus $19$. Compare $2\\sqrt{21}$ with $9$: squaring gives $84$ versus $81$, so $2\\sqrt{21} > 9$. Then $10 + 2\\sqrt{21} > 19$, so $\\sqrt{3} + \\sqrt{7}$ is greater.',
  },
  {
    q: 'If $a < b$ and $c < 0$, which of these must be true?',
    choices: ['$ac < bc$', '$ac = bc$', '$ac > bc$', '$ac$ and $bc$ cannot be compared'],
    answer: 2,
    solution: 'Multiplying both sides of $a < b$ by the negative number $c$ flips the inequality: $ac > bc$. Try it: $2 < 3$ and $c = -1$ gives $-2 > -3$. ✓',
  },
  {
    q: 'If $-1 \\le x \\le 4$, what is the smallest possible value of $5 - 2x$?',
    choices: ['$7$', '$-3$', '$5$', '$-8$'],
    answer: 1,
    solution: 'The coefficient of $x$ is negative, so the biggest $x$ gives the smallest value: at $x = 4$, we get $5 - 8 = -3$. Carrying the whole interval confirms it: $-3 \\le 5 - 2x \\le 7$.',
  },
  {
    q: 'A number $x$ satisfies BOTH $2x + 3 < 11$ and $x \\ge -1$. Which describes the graph of all such $x$?',
    choices: [
      'Open dot at $-1$, closed dot at $4$',
      'Closed dots at both $-1$ and $4$',
      'Open dots at both $-1$ and $4$',
      'Closed dot at $-1$, open dot at $4$',
    ],
    answer: 3,
    solution: 'Solve the first: $2x < 8$, so $x < 4$. Combined with $x \\ge -1$, the solution is $-1 \\le x < 4$. The $\\ge$ endpoint gets a closed dot at $-1$; the strict $<$ endpoint gets an open dot at $4$.',
  },
  {
    q: 'Two positive whole numbers add up to $20$. What is the difference between the largest and the smallest product they could have?',
    choices: ['$81$', '$99$', '$80$', '$75$'],
    answer: 0,
    solution: 'Largest product: balance the split, $10 \\times 10 = 100$. Smallest product: split as unevenly as allowed, $1 \\times 19 = 19$. The difference is $100 - 19 = 81$.',
  },
  {
    q: '$x$ is an integer with $3 < x \\le 8$. What is the largest possible value of $20 - 2x$?',
    choices: ['$14$', '$12$', '$4$', '$10$'],
    answer: 1,
    solution: 'The coefficient of $x$ is negative, so we want the SMALLEST allowed $x$. The strict $3 < x$ rules out $3$ itself, so the smallest integer is $x = 4$, giving $20 - 8 = 12$. (Using $x = 3$ would give $14$, but $3$ is not allowed.)',
  },
  {
    q: 'Which of these points does NOT satisfy $y > 2x - 3$?',
    choices: ['$(0, 0)$', '$(1, 0)$', '$(3, 2)$', '$(2, 5)$'],
    answer: 2,
    solution: 'Test each: $(0,0)$: $0 > -3$ ✓. $(1,0)$: $0 > -1$ ✓. $(2,5)$: $5 > 1$ ✓. But $(3,2)$: is $2 > 2(3) - 3 = 3$? No — $2 < 3$, so $(3, 2)$ is not a solution.',
  },
  {
    q: 'After three tests, Leo has scores of $80$, $88$, and $84$. There is one test left. What must he score so that his four-test average is at least $85$?',
    choices: ['At least $85$', 'At least $86$', 'At least $90$', 'At least $88$'],
    answer: 3,
    solution: '"Average at least $85$" over four tests means the total must be at least $4 \\times 85 = 340$. So far he has $80 + 88 + 84 = 252$, so he needs $x \\ge 340 - 252 = 88$. Check: $\\frac{252 + 88}{4} = \\frac{340}{4} = 85$. ✓',
  },
  {
    q: 'Suppose $0 < a < b$. Which is greater, $\\frac{a}{b}$ or $\\frac{a+3}{b+3}$?',
    choices: ['$\\frac{a}{b}$ is greater', '$\\frac{a+3}{b+3}$ is greater', 'They are equal', 'It depends on $a$ and $b$'],
    answer: 1,
    solution: 'Cross-multiply (all quantities positive): compare $a(b+3) = ab + 3a$ with $b(a+3) = ab + 3b$. Since $a < b$, we get $3a < 3b$, so $\\frac{a}{b} < \\frac{a+3}{b+3}$. Adding the same positive amount to top and bottom nudges a fraction toward $1$ — and from below, that means it grows.',
  },
]

const worksheet = [
  {
    q: 'Solve $4x - 9 > 3$.',
    answer: '$x > 3$',
    solution: 'Add $9$ to both sides: $4x > 12$. Divide by the positive number $4$: $x > 3$. No flip needed.',
  },
  {
    q: 'Solve $7 - 2x \\le 1$.',
    answer: '$x \\ge 3$',
    solution: 'Subtract $7$: $-2x \\le -6$. Divide by $-2$ and FLIP: $x \\ge 3$. Check $x = 5$: $7 - 10 = -3 \\le 1$. ✓',
  },
  {
    q: 'Which is greater, $\\frac{11}{15}$ or $\\frac{8}{11}$?',
    answer: '$\\frac{11}{15}$',
    solution: 'Cross-multiply (both denominators positive): $11 \\times 11 = 121$ versus $15 \\times 8 = 120$. Since $121 > 120$, the fraction $\\frac{11}{15}$ is greater — by a whisker.',
  },
  {
    q: 'How many integers satisfy $-3 \\le 2x + 1 < 7$?',
    answer: '$5$ integers',
    solution: 'Subtract $1$ from all parts: $-4 \\le 2x < 6$. Divide by $2$: $-2 \\le x < 3$. The integers are $-2, -1, 0, 1, 2$ — five of them ($3$ is excluded by the strict $<$).',
  },
  {
    q: 'Which is greater, $4\\sqrt{3}$ or $7$?',
    answer: '$7$',
    solution: 'Both are positive, so compare squares: $(4\\sqrt{3})^2 = 16 \\times 3 = 48$ and $7^2 = 49$. Since $48 < 49$, we get $4\\sqrt{3} < 7$.',
  },
  {
    q: 'Pencils cost $\\$3$ each. Ana has $\\$20$. How many pencils can she buy at most?',
    answer: '$6$ pencils',
    solution: 'The cost condition is $3n \\le 20$, so $n \\le \\frac{20}{3} = 6\\frac{2}{3}$. Pencils come in whole numbers, so the most she can buy is $6$ (spending $\\$18$).',
  },
  {
    q: 'Solve $-5 < 1 - 2x \\le 3$.',
    answer: '$-1 \\le x < 3$',
    solution: 'Subtract $1$ from all three parts: $-6 < -2x \\le 2$. Divide every part by $-2$, flipping BOTH symbols: $3 > x \\ge -1$. Written left-to-right: $-1 \\le x < 3$.',
  },
  {
    q: 'Two positive whole numbers add up to $25$. What is the largest their product can be?',
    answer: '$156$',
    solution: 'The balanced split $12.5 + 12.5$ is not whole, so take the nearest whole-number split: $12 + 13 = 25$, giving $12 \\times 13 = 156$. Any less balanced split does worse: $11 \\times 14 = 154$.',
  },
  {
    q: 'If $2 \\le x \\le 6$ and $1 \\le y \\le 4$, what is the largest possible value of $(x + y)(x - y)$?',
    answer: '$35$',
    solution: 'Notice $(x+y)(x-y) = x^2 - y^2$. To maximize, make $x^2$ as big as possible and $y^2$ as small as possible: $x = 6$ and $y = 1$ give $36 - 1 = 35$. Check directly: $(6+1)(6-1) = 7 \\times 5 = 35$. ✓',
  },
  {
    q: 'Which is greater, $\\sqrt{5} + \\sqrt{6}$ or $\\sqrt{22}$?',
    answer: '$\\sqrt{22}$',
    solution: 'Square both positive sides: $(\\sqrt{5} + \\sqrt{6})^2 = 5 + 2\\sqrt{30} + 6 = 11 + 2\\sqrt{30}$, versus $22$. Compare $2\\sqrt{30}$ with $11$: squaring gives $120$ versus $121$, so $2\\sqrt{30} < 11$. Then $11 + 2\\sqrt{30} < 22$, so $\\sqrt{22}$ is greater.',
  },
]

export default {
  id: 'intro-algebra-ch09',
  book: 'intro-algebra',
  number: 9,
  title: 'Introduction to Inequalities',
  intro:
    'Equations tell you when two things are exactly equal — but much of real life runs on "at least," "at most," and "more than." In this chapter you will learn to solve and graph inequalities, compare numbers cleverly without a calculator, and even squeeze the biggest possible value out of an expression.',
  sections: [s91, s92, s93, s94, s95],
  challenge,
  worksheet,
}
