// Introduction to Algebra — Chapter 1: Follow the Rules
// All problems, explanations, and examples are original MathQuest content.

const s11 = {
  id: '1.1',
  title: 'Numbers',
  learn: {
    concepts: [
      {
        heading: 'A family tree of numbers',
        body: 'The whole numbers are $0, 1, 2, 3, \\ldots$ Add their opposites and you get the integers: $\\ldots, -2, -1, 0, 1, 2, \\ldots$ Any number that can be written as a fraction of integers, like $\\frac{3}{4}$ or $-\\frac{7}{2}$, is called rational. Numbers that cannot be written that way, like $\\sqrt{2}$ and $\\pi$, are irrational. Together, the rationals and irrationals make up the real numbers — every point on the number line.',
      },
      {
        heading: 'The number line settles every comparison',
        body: 'On the number line, left means smaller and right means bigger. This flips your intuition for negatives: $-7$ sits far to the left of $-3$, so $-7 < -3$ even though $7 > 3$. For negative numbers, the one closer to $0$ is the greater one.',
      },
      {
        heading: 'Absolute value is distance',
        body: 'The absolute value $|x|$ measures how far $x$ is from $0$, so it is never negative: $|5| = 5$ and $|-5| = 5$. Even better, $|a - b|$ measures the distance between $a$ and $b$ on the number line — a tool we will use constantly.',
      },
      {
        heading: 'Why $\\sqrt{2}$ is not a fraction',
        body: 'Suppose $\\sqrt{2} = \\frac{p}{q}$ in lowest terms. Squaring gives $p^2 = 2q^2$, so $p^2$ is even, which forces $p$ to be even. Writing $p = 2k$ gives $4k^2 = 2q^2$, so $q^2 = 2k^2$ — and now $q$ is even too. But a fraction in lowest terms cannot have both parts even! So no fraction squares to exactly $2$: some numbers simply live between the fractions.',
      },
    ],
    examples: [
      {
        problem: 'Order $-2$, $\\frac{3}{4}$, $-\\frac{5}{2}$, and $1$ from least to greatest.',
        steps: [
          'Place each on the number line. The negatives go left of $0$: $-\\frac{5}{2} = -2.5$ sits left of $-2$.',
          'The positives go right of $0$: $\\frac{3}{4}$ is less than $1$.',
          'Reading left to right: $-\\frac{5}{2}, -2, \\frac{3}{4}, 1$.',
        ],
        answer: '$-\\frac{5}{2} < -2 < \\frac{3}{4} < 1$',
      },
      {
        problem: 'Which is greater: $-\\frac{3}{5}$ or $-\\frac{2}{3}$?',
        steps: [
          'Compare the positive versions first with a common denominator of $15$: $\\frac{3}{5} = \\frac{9}{15}$ and $\\frac{2}{3} = \\frac{10}{15}$, so $\\frac{3}{5} < \\frac{2}{3}$.',
          'Negating flips the comparison: the smaller positive becomes the greater negative.',
          'So $-\\frac{3}{5} > -\\frac{2}{3}$ — it is closer to $0$.',
        ],
        answer: '$-\\frac{3}{5}$ is greater',
      },
      {
        problem: 'How far apart are $-4$ and $9$ on the number line?',
        steps: [
          'Distance between two numbers is the absolute value of their difference: $|9 - (-4)|$.',
          'Compute inside first: $9 - (-4) = 9 + 4 = 13$.',
          'So the distance is $|13| = 13$.',
        ],
        answer: 'The distance is $13$',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these is an integer but NOT a whole number?',
      choices: ['$\\frac{1}{2}$', '$5$', '$-8$', '$0$'],
      answer: 2,
      solution: 'The whole numbers are $0, 1, 2, 3, \\ldots$ — no negatives allowed. The integers include the negatives too. So $-8$ is an integer but not a whole number. Note that $\\frac{1}{2}$ is neither, while $5$ and $0$ are both.',
    },
    {
      q: 'What is $|-14|$?',
      choices: ['$14$', '$-14$', '$\\frac{1}{14}$', '$0$'],
      answer: 0,
      solution: 'Absolute value measures distance from $0$, and $-14$ sits $14$ units away. So $|-14| = 14$. Absolute value is never negative.',
    },
    {
      q: 'Which of these numbers is the smallest: $-3$, $-7$, $0$, or $2$?',
      choices: ['$-3$', '$-7$', '$0$', '$2$'],
      answer: 1,
      solution: 'Smallest means farthest left on the number line. Among negatives, the one with the bigger size is the smaller number: $-7$ is left of $-3$, so $-7$ is the smallest.',
    },
    {
      q: 'Which is greater: $-\\frac{1}{2}$ or $-\\frac{2}{3}$?',
      choices: ['$-\\frac{1}{2}$', '$-\\frac{2}{3}$', 'They are equal', 'Negative fractions cannot be compared'],
      answer: 0,
      solution: 'Use a common denominator of $6$: $-\\frac{1}{2} = -\\frac{3}{6}$ and $-\\frac{2}{3} = -\\frac{4}{6}$. Since $-\\frac{3}{6}$ is closer to $0$, it is the greater number: $-\\frac{1}{2} > -\\frac{2}{3}$.',
    },
    {
      q: 'Which of these numbers is irrational?',
      choices: ['$\\sqrt{16}$', '$\\frac{22}{7}$', '$0.4$', '$\\sqrt{7}$'],
      answer: 3,
      solution: 'Since $7$ is not a perfect square, $\\sqrt{7}$ cannot be written as a fraction of integers — it is irrational. Meanwhile $\\sqrt{16} = 4$, and both $\\frac{22}{7}$ and $0.4 = \\frac{2}{5}$ are fractions of integers, so all three are rational.',
    },
    {
      q: 'Between which two consecutive integers does $\\sqrt{40}$ lie?',
      choices: ['$5$ and $6$', '$6$ and $7$', '$7$ and $8$', '$19$ and $21$'],
      answer: 1,
      solution: 'Squeeze $40$ between perfect squares: $36 < 40 < 49$. Taking square roots keeps the order: $6 < \\sqrt{40} < 7$.',
    },
    {
      q: 'Which list shows $\\frac{3}{4}$, $\\frac{2}{3}$, and $\\frac{7}{10}$ in order from least to greatest?',
      choices: ['$\\frac{3}{4}, \\frac{7}{10}, \\frac{2}{3}$', '$\\frac{7}{10}, \\frac{2}{3}, \\frac{3}{4}$', '$\\frac{2}{3}, \\frac{7}{10}, \\frac{3}{4}$', '$\\frac{2}{3}, \\frac{3}{4}, \\frac{7}{10}$'],
      answer: 2,
      solution: 'Convert to decimals: $\\frac{2}{3} = 0.666\\ldots$, $\\frac{7}{10} = 0.7$, and $\\frac{3}{4} = 0.75$. From least to greatest: $\\frac{2}{3}, \\frac{7}{10}, \\frac{3}{4}$.',
    },
    {
      q: 'What is the distance between $-7$ and $5$ on the number line?',
      choices: ['$2$', '$-12$', '$35$', '$12$'],
      answer: 3,
      solution: 'Distance is the absolute value of the difference: $|5 - (-7)| = |5 + 7| = 12$. You can also count: from $-7$ up to $0$ is $7$ steps, then $5$ more steps to reach $5$, for $7 + 5 = 12$. Distance is never negative!',
    },
    {
      q: 'How many integers $n$ satisfy $|n| < 3.5$?',
      choices: ['$7$', '$6$', '$8$', '$3$'],
      answer: 0,
      solution: 'We need integers within $3.5$ units of $0$: that is $-3, -2, -1, 0, 1, 2, 3$. Counting them gives $7$. (Do not forget $0$ and the negatives!)',
    },
    {
      q: 'Which of these four numbers is the largest: $\\frac{5}{8}$, $\\frac{2}{3}$, $0.66$, or $\\frac{13}{20}$?',
      choices: ['$\\frac{5}{8}$', '$\\frac{2}{3}$', '$0.66$', '$\\frac{13}{20}$'],
      answer: 1,
      solution: 'Convert everything to decimals: $\\frac{5}{8} = 0.625$, $\\frac{2}{3} = 0.6666\\ldots$, and $\\frac{13}{20} = 0.65$. The repeating $0.6666\\ldots$ edges out $0.66$, so $\\frac{2}{3}$ is the largest — barely!',
    },
  ],
}

const s12 = {
  id: '1.2',
  title: 'Order of Operations',
  learn: {
    concepts: [
      {
        heading: 'The agreed-upon order',
        body: 'To make sure every expression means one thing, we all follow the same order: grouping symbols first, then exponents, then multiplication and division (left to right), then addition and subtraction (left to right). So in $3 + 2 \\times 5^2$, the exponent fires first, then the product, then the sum.',
      },
      {
        heading: 'Nested groups: work inside out',
        body: 'When grouping symbols sit inside other grouping symbols, like $2[10 - (3 + 4)]$, start with the innermost group and work your way out. Brackets $[\\,]$ mean exactly the same thing as parentheses — they just make the layers easier to see.',
      },
      {
        heading: 'A fraction bar is a grouping symbol',
        body: 'The expression $\\frac{8 + 4 \\cdot 3}{2^2 + 1}$ has invisible parentheses around the entire top and the entire bottom. Finish computing both completely before you divide. Forgetting this is one of the most common mistakes in all of algebra!',
      },
      {
        heading: 'Same rank? Go left to right',
        body: 'Multiplication and division have equal rank, so $24 \\div 4 \\times 2$ means $(24 \\div 4) \\times 2 = 12$, not $24 \\div 8 = 3$. The same left-to-right rule applies to addition and subtraction.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $3 + 2 \\times 5^2$.',
        steps: [
          'Exponents come before multiplication: $5^2 = 25$.',
          'Multiplication comes before addition: $2 \\times 25 = 50$.',
          'Finally add: $3 + 50 = 53$.',
        ],
        answer: '$3 + 2 \\times 5^2 = 53$',
      },
      {
        problem: 'Evaluate $2[10 - (3 + 4)]^2$.',
        steps: [
          'Innermost group first: $3 + 4 = 7$.',
          'Next layer: $10 - 7 = 3$.',
          'Now the exponent, then the product: $3^2 = 9$, and $2 \\times 9 = 18$.',
        ],
        answer: '$2[10 - (3 + 4)]^2 = 18$',
      },
      {
        problem: 'Evaluate $\\frac{8 + 4 \\cdot 3}{2^2 + 1}$.',
        steps: [
          'Treat the top as one group: $8 + 4 \\cdot 3 = 8 + 12 = 20$.',
          'Treat the bottom as one group: $2^2 + 1 = 4 + 1 = 5$.',
          'Divide last: $20 \\div 5 = 4$.',
        ],
        answer: '$\\frac{8 + 4 \\cdot 3}{2^2 + 1} = 4$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $5 + 3 \\times 4$.',
      choices: ['$32$', '$17$', '$27$', '$23$'],
      answer: 1,
      solution: 'Multiplication comes before addition: $3 \\times 4 = 12$, then $5 + 12 = 17$. Computing $5 + 3$ first would give $32$, which breaks the order of operations.',
    },
    {
      q: 'Evaluate $18 - 6 \\div 2$.',
      choices: ['$6$', '$12$', '$9$', '$15$'],
      answer: 3,
      solution: 'Division comes before subtraction: $6 \\div 2 = 3$, then $18 - 3 = 15$. Subtracting first would give $12 \\div 2 = 6$, which is not what the expression says.',
    },
    {
      q: 'Evaluate $2 \\times 3^2$.',
      choices: ['$18$', '$36$', '$12$', '$64$'],
      answer: 0,
      solution: 'The exponent applies only to the $3$: $3^2 = 9$, then $2 \\times 9 = 18$. Squaring the product first would give $6^2 = 36$ — but exponents come before multiplication.',
    },
    {
      q: 'Evaluate $(7 - 3)^2$.',
      choices: ['$-2$', '$40$', '$16$', '$8$'],
      answer: 2,
      solution: 'Parentheses first: $7 - 3 = 4$. Then square: $4^2 = 16$. Without the parentheses, $7 - 3^2$ would equal $7 - 9 = -2$ — the parentheses change everything.',
    },
    {
      q: 'Evaluate $24 \\div 4 \\times 2$.',
      choices: ['$12$', '$3$', '$48$', '$16$'],
      answer: 0,
      solution: 'Division and multiplication have equal rank, so go left to right: $24 \\div 4 = 6$, then $6 \\times 2 = 12$. Multiplying $4 \\times 2$ first would give $24 \\div 8 = 3$, which jumps the queue.',
    },
    {
      q: 'Evaluate $3[2 + 2(5 - 1)]$.',
      choices: ['$48$', '$36$', '$24$', '$30$'],
      answer: 3,
      solution: 'Work inside out. Innermost: $5 - 1 = 4$. Next: $2 + 2 \\times 4 = 2 + 8 = 10$ (multiply before adding!). Finally $3 \\times 10 = 30$.',
    },
    {
      q: 'Evaluate $\\frac{20 - 2 \\cdot 4}{6 - 2}$.',
      choices: ['$18$', '$3$', '$12$', '$6$'],
      answer: 1,
      solution: 'The fraction bar groups the whole top and the whole bottom. Top: $20 - 2 \\cdot 4 = 20 - 8 = 12$. Bottom: $6 - 2 = 4$. Then $12 \\div 4 = 3$.',
    },
    {
      q: 'Evaluate $5^2 - 4 \\times 3 + 1$.',
      choices: ['$64$', '$12$', '$14$', '$38$'],
      answer: 2,
      solution: 'Exponent first: $5^2 = 25$. Multiplication next: $4 \\times 3 = 12$. Now left to right: $25 - 12 + 1 = 13 + 1 = 14$. (Careful not to compute $25 - 13 = 12$ — the $+1$ is added, not grouped with the $12$.)',
    },
    {
      q: 'Evaluate $2^3 + 2(3^2 - 5)^2$.',
      choices: ['$40$', '$16$', '$160$', '$72$'],
      answer: 0,
      solution: 'Inside the parentheses: $3^2 - 5 = 9 - 5 = 4$. Then the outer exponent: $4^2 = 16$. Multiply: $2 \\times 16 = 32$. Finally $2^3 + 32 = 8 + 32 = 40$. (Note $2 \\times 4^2 = 32$, not $(2 \\times 4)^2 = 64$ — the exponent grabs only the $4$.)',
    },
    {
      q: 'Evaluate $\\frac{4^2 + 2}{5 \\cdot 2 - 10}$.',
      choices: ['$18$', '$0$', '$9$', 'Undefined'],
      answer: 3,
      solution: 'Top: $4^2 + 2 = 18$. Bottom: $5 \\cdot 2 - 10 = 10 - 10 = 0$. This asks for $18 \\div 0$, and division by zero is undefined — no number times $0$ can give $18$. Always check the bottom of a fraction before dividing!',
    },
  ],
}

const s13 = {
  id: '1.3',
  title: 'When Does Order Matter?',
  learn: {
    concepts: [
      {
        heading: 'Addition and multiplication are flexible',
        body: 'Addition and multiplication are commutative ($a + b = b + a$ and $ab = ba$) and associative ($(a + b) + c = a + (b + c)$ and $(ab)c = a(bc)$). You may reorder and regroup a pure sum or a pure product any way you like — the answer never changes.',
      },
      {
        heading: 'Subtraction and division are picky',
        body: 'Order matters for subtraction and division: $10 - 4 = 6$ but $4 - 10 = -6$, and $12 \\div 3 = 4$ but $3 \\div 12 = \\frac{1}{4}$. In fact, swapping a subtraction negates the answer, and swapping a division gives the reciprocal. Grouping matters too: $(12 - 5) - 3 = 4$, but $12 - (5 - 3) = 10$.',
      },
      {
        heading: 'The rescue trick: rewrite, then rearrange',
        body: 'Every subtraction is an addition in disguise, $a - b = a + (-b)$, and every division is a multiplication in disguise, $a \\div b = a \\cdot \\frac{1}{b}$. After rewriting, you have a pure sum or pure product — so all the reordering freedom comes back. Just keep each minus sign glued to its number and each reciprocal glued to its factor.',
      },
      {
        heading: 'Rearranging is a superpower',
        body: 'These rules are not trivia — they are how you compute quickly. In $17 - 29 + 83 - 71$, pairing $17 + 83$ and $-29 - 71$ turns a slog into $100 - 100 = 0$. Always scan for friendly pairs before grinding left to right.',
      },
    ],
    examples: [
      {
        problem: 'Compute $17 - 29 + 83 - 71$.',
        steps: [
          'Rewrite as a sum of signed numbers: $17 + (-29) + 83 + (-71)$.',
          'Now reorder freely: $(17 + 83) + ((-29) + (-71))$.',
          'That is $100 + (-100) = 0$.',
        ],
        answer: '$17 - 29 + 83 - 71 = 0$',
      },
      {
        problem: 'Compute $250 \\div 8 \\times 4$.',
        steps: [
          'Rewrite the division as multiplication by a reciprocal: $250 \\times \\frac{1}{8} \\times 4$.',
          'Reorder to pair the easy factors: $250 \\times \\frac{4}{8} = 250 \\times \\frac{1}{2}$.',
          'Half of $250$ is $125$.',
        ],
        answer: '$250 \\div 8 \\times 4 = 125$',
      },
      {
        problem: 'Show that subtraction is not associative using $12$, $5$, and $3$.',
        steps: [
          'Group one way: $(12 - 5) - 3 = 7 - 3 = 4$.',
          'Group the other way: $12 - (5 - 3) = 12 - 2 = 10$.',
          'Different answers, so the grouping matters — subtraction is not associative.',
        ],
        answer: '$(12 - 5) - 3 = 4$ but $12 - (5 - 3) = 10$',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these operations is commutative?',
      choices: ['Subtraction', 'Division', 'Multiplication', 'None of these'],
      answer: 2,
      solution: 'Multiplication lets its two inputs swap: $ab = ba$ always. Subtraction fails ($10 - 4 \\ne 4 - 10$) and so does division ($12 \\div 3 \\ne 3 \\div 12$).',
    },
    {
      q: 'You know that $10 - 4 = 6$. What is $4 - 10$?',
      choices: ['$6$', '$-6$', '$\\frac{1}{6}$', '$0$'],
      answer: 1,
      solution: 'Swapping the order of a subtraction negates the answer: $4 - 10 = -(10 - 4) = -6$. (The reciprocal $\\frac{1}{6}$ is what you would get from swapping a division, not a subtraction.)',
    },
    {
      q: 'Which addition means the same thing as $14 - 9$?',
      choices: ['$14 + (-9)$', '$14 + 9$', '$9 + (-14)$', '$-(14 + 9)$'],
      answer: 0,
      solution: 'Subtracting is adding the opposite: $14 - 9 = 14 + (-9)$. Watch out: $9 + (-14)$ equals $9 - 14 = -5$, the opposite of what we want.',
    },
    {
      q: 'Which multiplication means the same thing as $20 \\div 5$?',
      choices: ['$20 \\times 5$', '$\\frac{1}{20} \\times \\frac{1}{5}$', '$5 \\times \\frac{1}{20}$', '$20 \\times \\frac{1}{5}$'],
      answer: 3,
      solution: 'Dividing by $5$ is multiplying by its reciprocal: $20 \\div 5 = 20 \\times \\frac{1}{5} = 4$. The reciprocal belongs to the divisor (the $5$), not to the $20$.',
    },
    {
      q: 'Compute $28 - 76 + 72 - 24$.',
      choices: ['$-4$', '$0$', '$4$', '$100$'],
      answer: 1,
      solution: 'Rewrite as signed addition and pair the friendly numbers: $(28 + 72) + ((-76) + (-24)) = 100 - 100 = 0$.',
    },
    {
      q: 'Compute $5 \\times 27 \\times 2$.',
      choices: ['$270$', '$260$', '$135$', '$280$'],
      answer: 0,
      solution: 'Multiplication is commutative, so pair the easy factors first: $5 \\times 2 = 10$, then $10 \\times 27 = 270$.',
    },
    {
      q: 'Compute $12 - (5 - 3)$.',
      choices: ['$4$', '$14$', '$20$', '$10$'],
      answer: 3,
      solution: 'Parentheses first: $5 - 3 = 2$, so the answer is $12 - 2 = 10$. Note this differs from $(12 - 5) - 3 = 4$ — subtraction is not associative, so the grouping matters.',
    },
    {
      q: 'Compute $75 \\times 8 \\div 4$.',
      choices: ['$600$', '$120$', '$150$', '$140$'],
      answer: 2,
      solution: 'Rewrite the division as multiplication by $\\frac{1}{4}$, then regroup: $75 \\times \\left(8 \\times \\frac{1}{4}\\right) = 75 \\times 2 = 150$. Much nicer than computing $600 \\div 4$!',
    },
    {
      q: 'Compute $100 - 99 + 98 - 97 + \\cdots + 2 - 1$.',
      choices: ['$100$', '$50$', '$0$', '$49$'],
      answer: 1,
      solution: 'Group in pairs: $(100 - 99) + (98 - 97) + \\cdots + (2 - 1)$. Each pair equals $1$, and the $100$ numbers form $50$ pairs, so the sum is $50$.',
    },
    {
      q: 'If $a \\div b = 3$, what is $b \\div a$?',
      choices: ['$\\frac{1}{3}$', '$-3$', '$3$', '$-\\frac{1}{3}$'],
      answer: 0,
      solution: 'Swapping a division gives the reciprocal: $b \\div a = \\frac{1}{a \\div b} = \\frac{1}{3}$. (Compare: swapping a subtraction gives the negation. Each operation has its own flavor of turning around.)',
    },
  ],
}

const s14 = {
  id: '1.4',
  title: 'Distribution and Factoring',
  learn: {
    concepts: [
      {
        heading: 'Distribution reaches every term',
        body: 'Multiplication distributes over a sum of any length: $a(b + c + d) = ab + ac + ad$. Every single term inside the parentheses gets multiplied — no term escapes.',
      },
      {
        heading: 'Distributing a negative flips every sign',
        body: 'A minus sign in front of parentheses means multiplying by $-1$, so every term inside flips: $-(a - b + c) = -a + b - c$. Forgetting to flip the later terms is one of the most common errors in algebra, so slow down here.',
      },
      {
        heading: 'Factoring is distribution in reverse',
        body: 'Reading $ab + ac = a(b + c)$ from right to left is distributing; reading it left to right is factoring — pulling a common factor out of every term. Both directions are the same equation, and you should be ready to travel it either way.',
      },
      {
        heading: 'A calculator in your head',
        body: 'Distribution powers fast arithmetic. To multiply by a number near a round one, break it apart: $47 \\cdot 102 = 47 \\cdot 100 + 47 \\cdot 2$. To tame a sum of products, factor: $63 \\cdot 41 - 63 \\cdot 31 = 63(41 - 31)$. Look for the common factor before you grind.',
      },
    ],
    examples: [
      {
        problem: 'Compute $47 \\cdot 102$ without long multiplication.',
        steps: [
          'Write $102$ as $100 + 2$.',
          'Distribute: $47 \\cdot (100 + 2) = 47 \\cdot 100 + 47 \\cdot 2$.',
          'That is $4700 + 94 = 4794$.',
        ],
        answer: '$47 \\cdot 102 = 4794$',
      },
      {
        problem: 'Compute $63 \\cdot 41 - 63 \\cdot 31$.',
        steps: [
          'Both products share the factor $63$, so factor it out.',
          '$63 \\cdot 41 - 63 \\cdot 31 = 63 \\cdot (41 - 31) = 63 \\cdot 10$.',
        ],
        answer: '$63 \\cdot 41 - 63 \\cdot 31 = 630$',
      },
      {
        problem: 'Simplify $-(8 - 3 + 2)$.',
        steps: [
          'The minus sign means multiplying every term by $-1$: $-(8 - 3 + 2) = -8 + 3 - 2$.',
          'Combine: $-8 + 3 - 2 = -7$.',
          'Check by computing inside first: $8 - 3 + 2 = 7$, and the opposite of $7$ is $-7$. It matches!',
        ],
        answer: '$-(8 - 3 + 2) = -7$',
      },
    ],
  },
  problems: [
    {
      q: 'Use distribution to compute $6(10 + 2)$.',
      choices: ['$62$', '$36$', '$60$', '$72$'],
      answer: 3,
      solution: 'Distribute to BOTH terms: $6 \\cdot 10 + 6 \\cdot 2 = 60 + 12 = 72$. Multiplying only the $10$ would give $62$ — but distribution reaches every term.',
    },
    {
      q: 'Compute $9 \\times 102$.',
      choices: ['$918$', '$920$', '$908$', '$1020$'],
      answer: 0,
      solution: 'Write $102 = 100 + 2$ and distribute: $9 \\times 102 = 900 + 18 = 918$.',
    },
    {
      q: 'Simplify $-(9 - 4)$.',
      choices: ['$5$', '$-13$', '$-5$', '$13$'],
      answer: 2,
      solution: 'Flip every sign inside: $-(9 - 4) = -9 + 4 = -5$. Check: $9 - 4 = 5$, and the opposite of $5$ is $-5$. (Writing $-9 - 4 = -13$ forgets to flip the second term.)',
    },
    {
      q: 'Fill in the blank: $24 + 36 = 12 \\times \\square$.',
      choices: ['$3$', '$5$', '$6$', '$4$'],
      answer: 1,
      solution: 'Factor $12$ out of each term: $24 = 12 \\cdot 2$ and $36 = 12 \\cdot 3$, so $24 + 36 = 12(2 + 3) = 12 \\times 5$. The blank is $5$.',
    },
    {
      q: 'Compute $53 \\cdot 101$.',
      choices: ['$5335$', '$5300$', '$5353$', '$5453$'],
      answer: 2,
      solution: 'Write $101 = 100 + 1$: then $53 \\cdot 101 = 5300 + 53 = 5353$.',
    },
    {
      q: 'Compute $84 \\cdot 27 - 84 \\cdot 17$.',
      choices: ['$840$', '$8400$', '$84$', '$740$'],
      answer: 0,
      solution: 'Factor out the common $84$: $84(27 - 17) = 84 \\cdot 10 = 840$. No need to compute either big product!',
    },
    {
      q: 'Compute $998 \\times 7$.',
      choices: ['$6996$', '$7006$', '$6896$', '$6986$'],
      answer: 3,
      solution: 'Write $998 = 1000 - 2$ and distribute: $998 \\times 7 = 7000 - 14 = 6986$. (Distributing over a difference works the same way — the second product gets subtracted.)',
    },
    {
      q: 'Compute $25 \\times 19$.',
      choices: ['$465$', '$475$', '$500$', '$485$'],
      answer: 1,
      solution: 'Write $19 = 20 - 1$: then $25 \\times 19 = 25 \\times 20 - 25 = 500 - 25 = 475$.',
    },
    {
      q: 'Compute $45 \\cdot 98 + 90$.',
      choices: ['$4410$', '$4590$', '$4500$', '$4498$'],
      answer: 2,
      solution: 'The sneaky step: $90 = 45 \\cdot 2$. Now both terms share a factor of $45$: $45 \\cdot 98 + 45 \\cdot 2 = 45(98 + 2) = 45 \\cdot 100 = 4500$.',
    },
    {
      q: 'Compute $19 \\times 21$.',
      choices: ['$399$', '$401$', '$389$', '$419$'],
      answer: 0,
      solution: 'Write it as $(20 - 1)(20 + 1)$ and distribute twice: $20 \\cdot 20 + 20 \\cdot 1 - 1 \\cdot 20 - 1 \\cdot 1 = 400 + 20 - 20 - 1 = 399$. The middle terms cancel — a pattern worth remembering!',
    },
  ],
}

const s15 = {
  id: '1.5',
  title: 'Equations',
  learn: {
    concepts: [
      {
        heading: 'An equation is a claim',
        body: 'An equation states that two expressions have the same value. With a variable, the claim might be true for some values and false for others: $x + 3 = 10$ is true exactly when $x = 7$. A value that makes the equation true is called a solution.',
      },
      {
        heading: 'The golden rule of equations',
        body: 'If two quantities are equal and you do the same thing to both, they stay equal. Add the same number to both sides, multiply both sides by the same nonzero number — the balance holds. This is the engine behind every equation you will ever solve.',
      },
      {
        heading: 'Undo operations in reverse order',
        body: 'To solve $3x - 4 = 17$, notice what happened to $x$: it was multiplied by $3$, then $4$ was subtracted. Undo in reverse: first add $4$ to both sides, then divide both sides by $3$. Always finish by checking your answer in the original equation.',
      },
      {
        heading: 'No solution, or every number',
        body: 'Some equations are never true: $x + 1 = x + 5$ would force $1 = 5$, so it has no solution. Others are always true: $2(x + 3) = 2x + 6$ holds for every number, because both sides are the same expression in disguise. Not every equation pins down a single value!',
      },
    ],
    examples: [
      {
        problem: 'Solve $x + 7 = 15$.',
        steps: [
          'The $x$ has had $7$ added to it, so undo that: subtract $7$ from both sides.',
          '$x + 7 - 7 = 15 - 7$, which simplifies to $x = 8$.',
          'Check: $8 + 7 = 15$. It works!',
        ],
        answer: '$x = 8$',
      },
      {
        problem: 'Solve $3x - 4 = 17$.',
        steps: [
          'Undo the subtraction first: add $4$ to both sides to get $3x = 21$.',
          'Undo the multiplication: divide both sides by $3$ to get $x = 7$.',
          'Check: $3 \\cdot 7 - 4 = 21 - 4 = 17$. It works!',
        ],
        answer: '$x = 7$',
      },
      {
        problem: 'Solve $2x + 1 = 2x + 5$.',
        steps: [
          'Subtract $2x$ from both sides: the equation becomes $1 = 5$.',
          'But $1 = 5$ is false no matter what $x$ is.',
          'So no value of $x$ can make the original equation true.',
        ],
        answer: 'No solution',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x + 9 = 16$.',
      choices: ['$7$', '$25$', '$-7$', '$8$'],
      answer: 0,
      solution: 'Subtract $9$ from both sides: $x = 16 - 9 = 7$. Check: $7 + 9 = 16$. ✓',
    },
    {
      q: 'Solve $x - 5 = 12$.',
      choices: ['$7$', '$-17$', '$17$', '$60$'],
      answer: 2,
      solution: 'Add $5$ to both sides: $x = 12 + 5 = 17$. Check: $17 - 5 = 12$. ✓ (Subtracting instead would give $7$, but we must undo the subtraction, not repeat it.)',
    },
    {
      q: 'Solve $4x = 36$.',
      choices: ['$32$', '$40$', '$144$', '$9$'],
      answer: 3,
      solution: 'Divide both sides by $4$: $x = 36 \\div 4 = 9$. Check: $4 \\cdot 9 = 36$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{3} = 8$.',
      choices: ['$\\frac{8}{3}$', '$24$', '$5$', '$11$'],
      answer: 1,
      solution: 'The $x$ was divided by $3$, so undo it: multiply both sides by $3$ to get $x = 24$. Check: $24 \\div 3 = 8$. ✓',
    },
    {
      q: 'Solve $2x + 5 = 17$.',
      choices: ['$6$', '$11$', '$12$', '$5$'],
      answer: 0,
      solution: 'Subtract $5$ from both sides: $2x = 12$. Divide by $2$: $x = 6$. Check: $2 \\cdot 6 + 5 = 17$. ✓',
    },
    {
      q: 'Solve $3x - 7 = 14$.',
      choices: ['$21$', '$\\frac{7}{3}$', '$7$', '$63$'],
      answer: 2,
      solution: 'Add $7$ to both sides: $3x = 21$. Divide by $3$: $x = 7$. Check: $3 \\cdot 7 - 7 = 14$. ✓',
    },
    {
      q: 'Solve $5x - 2 = 3x + 8$.',
      choices: ['$3$', '$5$', '$10$', '$-5$'],
      answer: 1,
      solution: 'Subtract $3x$ from both sides: $2x - 2 = 8$. Add $2$: $2x = 10$. Divide by $2$: $x = 5$. Check: $5 \\cdot 5 - 2 = 23$ and $3 \\cdot 5 + 8 = 23$. Both sides agree. ✓',
    },
    {
      q: 'How many solutions does $x + 4 = x + 7$ have?',
      choices: ['Exactly one: $x = 3$', 'Exactly one: $x = -3$', 'Every number is a solution', 'No number is a solution'],
      answer: 3,
      solution: 'Subtract $x$ from both sides and you are left with $4 = 7$ — false, always. A number plus $4$ can never equal that same number plus $7$, so there is no solution.',
    },
    {
      q: 'How many solutions does $2(x + 3) = 2x + 6$ have?',
      choices: ['Exactly one: $x = 0$', 'Every number is a solution', 'No number is a solution', 'Exactly one: $x = 3$'],
      answer: 1,
      solution: 'Distribute the left side: $2(x + 3) = 2x + 6$. Both sides are literally the same expression, so the equation is true for every value of $x$. Try any number and watch both sides match!',
    },
    {
      q: 'If $3x + 5 = 20$, what is the value of $6x + 10$?',
      choices: ['$30$', '$35$', '$40$', '$45$'],
      answer: 2,
      solution: 'No need to find $x$ first! Notice $6x + 10$ is exactly double $3x + 5$. Doubling both sides of $3x + 5 = 20$ gives $6x + 10 = 40$. (Solving the slow way: $x = 5$, and $6 \\cdot 5 + 10 = 40$ — same answer.)',
    },
  ],
}

const s16 = {
  id: '1.6',
  title: 'Exponents',
  learn: {
    concepts: [
      {
        heading: 'Multiplying powers of the same base',
        body: 'The power $a^n$ means $n$ copies of $a$ multiplied together. Multiplying two powers of the SAME base just pools the copies: $a^m \\cdot a^n = a^{m+n}$. For example, $2^3 \\cdot 2^4$ is three $2$s times four $2$s — seven $2$s in all, or $2^7$. The bases must match for this to work!',
      },
      {
        heading: 'Powers of powers and powers of products',
        body: 'Raising a power to a power multiplies the exponents: $(a^m)^n = a^{mn}$, since $(a^m)^n$ means $n$ groups of $m$ copies. And an exponent on a product hits every factor: $(ab)^n = a^n b^n$.',
      },
      {
        heading: 'Dividing powers, and the zero exponent',
        body: 'Dividing cancels copies: $\\frac{a^m}{a^n} = a^{m-n}$ (for $a \\ne 0$). This also explains the strange-looking rule $a^0 = 1$: since $\\frac{a^3}{a^3} = 1$ and the law says it is $a^{3-3} = a^0$, we need $a^0 = 1$ for everything to stay consistent.',
      },
      {
        heading: 'Negative exponents and negative bases',
        body: 'A negative exponent means reciprocal: $a^{-n} = \\frac{1}{a^n}$, so $2^{-3} = \\frac{1}{8}$. Separately, watch powers of negative numbers: $(-2)^4 = 16$ since four minus signs cancel in pairs, but $(-2)^3 = -8$. And $-2^4$ means $-(2^4) = -16$ — without parentheses, the exponent grabs only the $2$.',
      },
    ],
    examples: [
      {
        problem: 'Simplify $2^3 \\cdot 2^4$ and evaluate it.',
        steps: [
          'Same base, so add the exponents: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7$.',
          'Evaluate: $2^7 = 128$.',
          'Sanity check: $8 \\times 16 = 128$. It matches!',
        ],
        answer: '$2^3 \\cdot 2^4 = 2^7 = 128$',
      },
      {
        problem: 'Evaluate $(2^2)^3$.',
        steps: [
          'A power of a power multiplies the exponents: $(2^2)^3 = 2^{2 \\cdot 3} = 2^6$.',
          'Evaluate: $2^6 = 64$. Indeed, $(4)^3 = 64$ agrees.',
        ],
        answer: '$(2^2)^3 = 64$',
      },
      {
        problem: 'Evaluate $2^{-3}$, and compare $(-2)^4$ with $-2^4$.',
        steps: [
          'The negative exponent flips: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.',
          '$(-2)^4$ has four negative factors — an even number — so it is $+16$.',
          '$-2^4$ means $-(2^4) = -16$: the exponent applies before the negation.',
        ],
        answer: '$2^{-3} = \\frac{1}{8}$, while $(-2)^4 = 16$ and $-2^4 = -16$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $2^5$.',
      choices: ['$10$', '$32$', '$25$', '$16$'],
      answer: 1,
      solution: '$2^5$ means five factors of $2$: $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. (It is not $2 \\times 5 = 10$ — exponents count copies, they do not multiply the base.)',
    },
    {
      q: 'Simplify $3^2 \\cdot 3^3$ and evaluate.',
      choices: ['$729$', '$59049$', '$15$', '$243$'],
      answer: 3,
      solution: 'Same base, so ADD the exponents: $3^2 \\cdot 3^3 = 3^5 = 243$. Multiplying the exponents would give $3^6 = 729$, but two $3$s times three $3$s is five $3$s.',
    },
    {
      q: 'What is $5^0$?',
      choices: ['$1$', '$0$', '$5$', 'Undefined'],
      answer: 0,
      solution: 'Any nonzero number to the zero power is $1$. Consistency demands it: $\\frac{5^3}{5^3} = 1$, and the quotient law says this equals $5^{3-3} = 5^0$.',
    },
    {
      q: 'Evaluate $(-3)^2$.',
      choices: ['$-9$', '$-6$', '$9$', '$6$'],
      answer: 2,
      solution: '$(-3)^2 = (-3)(-3) = 9$: two negative factors make a positive. Contrast this with $-3^2 = -(3^2) = -9$, where the exponent grabs only the $3$.',
    },
    {
      q: 'Evaluate $2^{-3}$.',
      choices: ['$\\frac{1}{8}$', '$-8$', '$-\\frac{1}{8}$', '$-6$'],
      answer: 0,
      solution: 'A negative exponent means reciprocal, not negative: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. The answer is positive!',
    },
    {
      q: 'Evaluate $(2^3)^2$.',
      choices: ['$32$', '$64$', '$512$', '$25$'],
      answer: 1,
      solution: 'A power of a power multiplies the exponents: $(2^3)^2 = 2^6 = 64$. Check directly: $8^2 = 64$. (Adding the exponents to get $2^5 = 32$ is the rule for multiplying powers, not raising them.)',
    },
    {
      q: 'Evaluate $\\frac{5^7}{5^4}$.',
      choices: ['$5$', '$25$', '$625$', '$125$'],
      answer: 3,
      solution: 'Subtract the exponents: $\\frac{5^7}{5^4} = 5^{7-4} = 5^3 = 125$. Three of the seven $5$s survive the cancelling.',
    },
    {
      q: 'Evaluate $(2 \\cdot 5)^3$.',
      choices: ['$250$', '$30$', '$1000$', '$40$'],
      answer: 2,
      solution: 'The exponent hits every factor: $(2 \\cdot 5)^3 = 2^3 \\cdot 5^3 = 8 \\cdot 125 = 1000$. Or simply: $(10)^3 = 1000$. Writing $2 \\cdot 5^3 = 250$ misses the cube on the $2$.',
    },
    {
      q: 'Evaluate $(-2)^3 \\cdot (-2)^2$.',
      choices: ['$-32$', '$32$', '$-64$', '$64$'],
      answer: 0,
      solution: 'Same base, add exponents: $(-2)^3 \\cdot (-2)^2 = (-2)^5$. Five negative factors — an odd count — give a negative result: $(-2)^5 = -32$. Check: $(-8) \\cdot 4 = -32$. ✓',
    },
    {
      q: 'Evaluate $\\frac{4^{10}}{2^{18}}$.',
      choices: ['$2$', '$4$', '$\\frac{1}{4}$', '$16$'],
      answer: 1,
      solution: 'Different bases — so make them match first! Since $4 = 2^2$, we get $4^{10} = (2^2)^{10} = 2^{20}$. Then $\\frac{2^{20}}{2^{18}} = 2^2 = 4$.',
    },
  ],
}

const s17 = {
  id: '1.7',
  title: 'Fractional Exponents',
  learn: {
    concepts: [
      {
        heading: 'Why $a^{1/2}$ must be $\\sqrt{a}$',
        body: 'What could $9^{1/2}$ mean? If the exponent laws are to keep working, then $(9^{1/2})^2 = 9^{(1/2) \\cdot 2} = 9^1 = 9$. So $9^{1/2}$ is a nonnegative number whose square is $9$ — that is exactly $\\sqrt{9} = 3$. In general, $a^{1/2} = \\sqrt{a}$ for $a \\ge 0$.',
      },
      {
        heading: 'Other roots follow the same story',
        body: 'The same logic gives $a^{1/n} = \\sqrt[n]{a}$, the $n$th root of $a$: the number whose $n$th power is $a$. So $8^{1/3} = \\sqrt[3]{8} = 2$ and $16^{1/4} = \\sqrt[4]{16} = 2$.',
      },
      {
        heading: 'General fractions: root, then power',
        body: 'Split $a^{m/n}$ as $\\left(a^{1/n}\\right)^m$: take the $n$th root first, then raise to the $m$th power. Rooting first keeps the numbers small — for $8^{2/3}$, computing $\\sqrt[3]{8} = 2$ and then $2^2 = 4$ is far easier than cubing after squaring $8$.',
      },
      {
        heading: 'Negative fractional exponents',
        body: 'All the old rules still apply: the minus sign in the exponent means reciprocal, and the fraction means a root. So $27^{-1/3} = \\frac{1}{27^{1/3}} = \\frac{1}{3}$. Handle the pieces one at a time: sign, root, power.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $8^{2/3}$.',
        steps: [
          'Split the exponent: $8^{2/3} = \\left(8^{1/3}\\right)^2$ — root first, then power.',
          'The cube root: $8^{1/3} = 2$, since $2^3 = 8$.',
          'Now square: $2^2 = 4$.',
        ],
        answer: '$8^{2/3} = 4$',
      },
      {
        problem: 'Evaluate $16^{3/4}$.',
        steps: [
          'Root first: $16^{1/4} = 2$, since $2^4 = 16$.',
          'Then the power: $2^3 = 8$.',
        ],
        answer: '$16^{3/4} = 8$',
      },
      {
        problem: 'Evaluate $27^{-1/3}$.',
        steps: [
          'The negative sign means reciprocal: $27^{-1/3} = \\frac{1}{27^{1/3}}$.',
          'The cube root of $27$ is $3$, since $3^3 = 27$.',
          'So the answer is $\\frac{1}{3}$.',
        ],
        answer: '$27^{-1/3} = \\frac{1}{3}$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $49^{1/2}$.',
      choices: ['$24.5$', '$2401$', '$7$', '$14$'],
      answer: 2,
      solution: 'An exponent of $\\frac{1}{2}$ means square root: $49^{1/2} = \\sqrt{49} = 7$. (It does not mean half of $49$ — that would be $24.5$, a different operation entirely.)',
    },
    {
      q: 'Evaluate $27^{1/3}$.',
      choices: ['$3$', '$9$', '$81$', '$13.5$'],
      answer: 0,
      solution: 'An exponent of $\\frac{1}{3}$ means cube root: we need the number whose cube is $27$. Since $3^3 = 27$, the answer is $3$.',
    },
    {
      q: 'Evaluate $16^{1/4}$.',
      choices: ['$4$', '$64$', '$8$', '$2$'],
      answer: 3,
      solution: 'We need the fourth root of $16$: the number whose fourth power is $16$. Since $2^4 = 16$, the answer is $2$. (Careful: $4$ is the SQUARE root of $16$, not the fourth root.)',
    },
    {
      q: 'Evaluate $4^{3/2}$.',
      choices: ['$6$', '$8$', '$12$', '$64$'],
      answer: 1,
      solution: 'Root first, then power: $4^{1/2} = 2$, then $2^3 = 8$. (Multiplying $4 \\cdot \\frac{3}{2} = 6$ is not how exponents work — the exponent is not a factor.)',
    },
    {
      q: 'Evaluate $27^{2/3}$.',
      choices: ['$18$', '$3$', '$729$', '$9$'],
      answer: 3,
      solution: 'Cube root first: $27^{1/3} = 3$. Then square: $3^2 = 9$. Stopping after the root gives only $3$ — remember the power on top still has work to do.',
    },
    {
      q: 'Evaluate $81^{3/4}$.',
      choices: ['$27$', '$3$', '$243$', '$60.75$'],
      answer: 0,
      solution: 'Fourth root first: $81^{1/4} = 3$, since $3^4 = 81$. Then cube: $3^3 = 27$.',
    },
    {
      q: 'Evaluate $9^{-1/2}$.',
      choices: ['$-3$', '$-\\frac{1}{3}$', '$\\frac{1}{3}$', '$3$'],
      answer: 2,
      solution: 'The minus sign means reciprocal, and the $\\frac{1}{2}$ means square root: $9^{-1/2} = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}$. Negative exponents produce reciprocals, not negative numbers.',
    },
    {
      q: 'Evaluate $25^{3/2}$.',
      choices: ['$37.5$', '$125$', '$15625$', '$75$'],
      answer: 1,
      solution: 'Square root first: $25^{1/2} = 5$. Then cube: $5^3 = 125$. Rooting first keeps the numbers small — cubing $25$ first would mean finding $\\sqrt{15625}$!',
    },
    {
      q: 'Evaluate $\\left(\\frac{1}{8}\\right)^{-2/3}$.',
      choices: ['$4$', '$\\frac{1}{4}$', '$-4$', '$\\frac{1}{2}$'],
      answer: 0,
      solution: 'The negative exponent flips the fraction: $\\left(\\frac{1}{8}\\right)^{-2/3} = 8^{2/3}$. Now root, then power: $8^{1/3} = 2$, and $2^2 = 4$.',
    },
    {
      q: 'Evaluate $64^{2/3} \\cdot 64^{-1/2}$.',
      choices: ['$16$', '$4$', '$2$', '$8$'],
      answer: 2,
      solution: 'Same base, so add the exponents: $\\frac{2}{3} + \\left(-\\frac{1}{2}\\right) = \\frac{4}{6} - \\frac{3}{6} = \\frac{1}{6}$. So the product is $64^{1/6} = 2$, since $2^6 = 64$. The exponent laws work for fractions too!',
    },
  ],
}

const s18 = {
  id: '1.8',
  title: 'Radicals',
  learn: {
    concepts: [
      {
        heading: 'Roots split across products',
        body: 'For nonnegative numbers, $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$. This works in both directions: $\\sqrt{8} \\cdot \\sqrt{2} = \\sqrt{16} = 4$, and $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2}$. But beware — there is NO such rule for sums: $\\sqrt{9 + 16} = 5$, while $\\sqrt{9} + \\sqrt{16} = 7$.',
      },
      {
        heading: 'Simplifying a square root',
        body: 'To simplify $\\sqrt{n}$, pull out the largest perfect square factor: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$. Hunt through $4, 9, 16, 25, 36, \\ldots$ for the biggest one dividing $n$ — using a smaller square works but leaves the job unfinished.',
      },
      {
        heading: 'Cube roots welcome negatives',
        body: 'The cube root $\\sqrt[3]{n}$ is the number whose cube is $n$: $\\sqrt[3]{64} = 4$. Unlike square roots, cube roots of negative numbers are fine: $\\sqrt[3]{-8} = -2$, since $(-2)^3 = -8$.',
      },
      {
        heading: 'Like radicals, and clearing the denominator',
        body: 'Radicals with the same inside combine just like matching objects: $3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$, but $\\sqrt{2} + \\sqrt{3}$ cannot be combined. To rationalize a fraction like $\\frac{6}{\\sqrt{3}}$, multiply top and bottom by $\\sqrt{3}$ — that is multiplying by $1$, so the value is unchanged, but the denominator becomes a whole number.',
      },
    ],
    examples: [
      {
        problem: 'Simplify $\\sqrt{50}$.',
        steps: [
          'Find the largest perfect square dividing $50$: it is $25$, since $50 = 25 \\cdot 2$.',
          'Split the root: $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$.',
        ],
        answer: '$\\sqrt{50} = 5\\sqrt{2}$',
      },
      {
        problem: 'Rationalize $\\frac{6}{\\sqrt{3}}$.',
        steps: [
          'Multiply top and bottom by $\\sqrt{3}$: $\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3}$.',
          'Simplify the fraction: $\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.',
        ],
        answer: '$\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$',
      },
      {
        problem: 'Compute $\\sqrt{8} \\cdot \\sqrt{2}$.',
        steps: [
          'Merge the roots: $\\sqrt{8} \\cdot \\sqrt{2} = \\sqrt{8 \\cdot 2} = \\sqrt{16}$.',
          'And $\\sqrt{16} = 4$. Two messy radicals multiplied to a clean whole number!',
        ],
        answer: '$\\sqrt{8} \\cdot \\sqrt{2} = 4$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\sqrt{9} \\cdot \\sqrt{16}$.',
      choices: ['$12$', '$25$', '$144$', '$5$'],
      answer: 0,
      solution: 'Take each root: $\\sqrt{9} = 3$ and $\\sqrt{16} = 4$, so the product is $12$. Equivalently, $\\sqrt{9 \\cdot 16} = \\sqrt{144} = 12$. (Note $\\sqrt{9 + 16} = 5$ would be a different problem — roots split over products, never over sums.)',
    },
    {
      q: 'Simplify $\\sqrt{18}$.',
      choices: ['$9\\sqrt{2}$', '$3\\sqrt{2}$', '$2\\sqrt{3}$', '$6$'],
      answer: 1,
      solution: 'The largest perfect square dividing $18$ is $9$: $\\sqrt{18} = \\sqrt{9} \\cdot \\sqrt{2} = 3\\sqrt{2}$. (Writing $9\\sqrt{2}$ forgets to take the square root of the $9$.)',
    },
    {
      q: 'Evaluate $\\sqrt[3]{64}$.',
      choices: ['$8$', '$16$', '$4$', '$2$'],
      answer: 2,
      solution: 'We need the number whose CUBE is $64$: since $4^3 = 64$, the answer is $4$. (The square root of $64$ is $8$ — a different root!)',
    },
    {
      q: 'Compute $5\\sqrt{3} + 2\\sqrt{3}$.',
      choices: ['$7\\sqrt{6}$', '$10\\sqrt{3}$', '$\\sqrt{21}$', '$7\\sqrt{3}$'],
      answer: 3,
      solution: 'Like radicals combine like matching objects: five $\\sqrt{3}$s plus two $\\sqrt{3}$s make seven $\\sqrt{3}$s, so the sum is $7\\sqrt{3}$. The part under the root does not change when we add.',
    },
    {
      q: 'Simplify $\\sqrt{72}$.',
      choices: ['$36\\sqrt{2}$', '$6\\sqrt{2}$', '$6\\sqrt{3}$', '$12$'],
      answer: 1,
      solution: 'The largest perfect square dividing $72$ is $36$: $\\sqrt{72} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$. (Using $72 = 9 \\cdot 8$ gives $3\\sqrt{8}$, which is correct but unfinished — $\\sqrt{8}$ still hides a square factor.)',
    },
    {
      q: 'Compute $\\sqrt{5} \\cdot \\sqrt{20}$.',
      choices: ['$10$', '$5$', '$100$', '$4\\sqrt{5}$'],
      answer: 0,
      solution: 'Merge the roots: $\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{100} = 10$. Multiplying two irrational numbers gave a clean whole number!',
    },
    {
      q: 'Rationalize $\\frac{10}{\\sqrt{2}}$.',
      choices: ['$10\\sqrt{2}$', '$5$', '$5\\sqrt{2}$', '$\\frac{\\sqrt{2}}{5}$'],
      answer: 2,
      solution: 'Multiply top and bottom by $\\sqrt{2}$: $\\frac{10}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$.',
    },
    {
      q: 'Compute $\\sqrt{48} + \\sqrt{12}$.',
      choices: ['$\\sqrt{60}$', '$8\\sqrt{3}$', '$6\\sqrt{6}$', '$6\\sqrt{3}$'],
      answer: 3,
      solution: 'Simplify each radical first: $\\sqrt{48} = 4\\sqrt{3}$ and $\\sqrt{12} = 2\\sqrt{3}$. Now they are like radicals: $4\\sqrt{3} + 2\\sqrt{3} = 6\\sqrt{3}$. (Adding under the root to get $\\sqrt{60}$ is the classic trap — roots never split over sums.)',
    },
    {
      q: 'Rationalize $\\frac{1}{2\\sqrt{5}}$.',
      choices: ['$\\frac{\\sqrt{5}}{2}$', '$\\frac{\\sqrt{5}}{10}$', '$\\frac{1}{10}$', '$\\frac{2\\sqrt{5}}{5}$'],
      answer: 1,
      solution: 'Multiply top and bottom by $\\sqrt{5}$: $\\frac{1}{2\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{2 \\cdot 5} = \\frac{\\sqrt{5}}{10}$. Only the $\\sqrt{5}$ needs help — the $2$ was already rational.',
    },
    {
      q: 'Compute $\\sqrt{50} - \\sqrt{32} + \\sqrt{2}$.',
      choices: ['$2\\sqrt{2}$', '$\\sqrt{20}$', '$10\\sqrt{2}$', '$\\sqrt{2}$'],
      answer: 0,
      solution: 'Simplify each piece: $\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}$. Now combine like radicals: $5\\sqrt{2} - 4\\sqrt{2} + \\sqrt{2} = 2\\sqrt{2}$.',
    },
  ],
}

const challenge = [
  {
    q: 'Evaluate $\\frac{2^{10}}{4^3}$.',
    choices: ['$4$', '$64$', '$16$', '$2$'],
    answer: 2,
    solution: 'Match the bases: $4^3 = (2^2)^3 = 2^6$. Then $\\frac{2^{10}}{2^6} = 2^4 = 16$.',
  },
  {
    q: 'Evaluate $\\sqrt{2^{10}}$.',
    choices: ['$32$', '$64$', '$5$', '$512$'],
    answer: 0,
    solution: 'A square root is a $\\frac{1}{2}$ power: $\\sqrt{2^{10}} = (2^{10})^{1/2} = 2^5 = 32$. Taking a square root halves the exponent.',
  },
  {
    q: 'Compute $57 \\times 63$.',
    choices: ['$3600$', '$3591$', '$3609$', '$3581$'],
    answer: 1,
    solution: 'Write it as $(60 - 3)(60 + 3)$ and distribute twice: $3600 + 180 - 180 - 9 = 3600 - 9 = 3591$. The middle terms cancel — numbers balanced around a round center multiply beautifully.',
  },
  {
    q: 'Which statement is true?',
    choices: ['$\\sqrt{50} > 7$', '$\\sqrt{50} < 7$', '$\\sqrt{50} = 7$', '$\\sqrt{50}$ and $7$ cannot be compared'],
    answer: 0,
    solution: 'Compare the squares: $\\left(\\sqrt{50}\\right)^2 = 50$ and $7^2 = 49$. Since $50 > 49$ and both numbers are positive, $\\sqrt{50} > 7$. Squaring is a fair referee for positive numbers.',
  },
  {
    q: 'Solve $7(x - 3) = 4x + 9$.',
    choices: ['$4$', '$-4$', '$30$', '$10$'],
    answer: 3,
    solution: 'Distribute first: $7x - 21 = 4x + 9$. Subtract $4x$ from both sides: $3x - 21 = 9$. Add $21$: $3x = 30$, so $x = 10$. Check: $7(10 - 3) = 7 \\cdot 7 = 49$ and $4 \\cdot 10 + 9 = 49$. ✓ (Choosing $4$ hands the $7$ only to the $x$ and leaves the $-3$ alone; $-4$ subtracts the $21$ instead of adding it; $30$ stops before the last division by $3$.)',
  },
  {
    q: 'Evaluate $\\left(\\frac{1}{4}\\right)^{-3/2}$.',
    choices: ['$\\frac{1}{8}$', '$8$', '$-8$', '$6$'],
    answer: 1,
    solution: 'The negative exponent flips the fraction: $\\left(\\frac{1}{4}\\right)^{-3/2} = 4^{3/2}$. Root first, then power: $4^{1/2} = 2$, and $2^3 = 8$.',
  },
  {
    q: 'How many integers $n$ satisfy $|n| \\le \\sqrt{30}$?',
    choices: ['$5$', '$10$', '$11$', '$12$'],
    answer: 2,
    solution: 'Since $25 < 30 < 36$, we know $5 < \\sqrt{30} < 6$. So we need $|n| \\le 5$: the integers $-5, -4, \\ldots, 4, 5$. That is $11$ integers — five negative, five positive, and zero.',
  },
  {
    q: 'Compute $\\frac{10}{\\sqrt{5}} + \\sqrt{45}$.',
    choices: ['$\\sqrt{55}$', '$5\\sqrt{10}$', '$6\\sqrt{5}$', '$5\\sqrt{5}$'],
    answer: 3,
    solution: 'Rationalize: $\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$. Simplify: $\\sqrt{45} = \\sqrt{9 \\cdot 5} = 3\\sqrt{5}$. Now they are like radicals: $2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}$.',
  },
  {
    q: 'If $3^n = 81$, what is $3^{n+2}$?',
    choices: ['$729$', '$243$', '$83$', '$6561$'],
    answer: 0,
    solution: 'By the product law, $3^{n+2} = 3^n \\cdot 3^2 = 81 \\cdot 9 = 729$. (You can also find $n = 4$ first and compute $3^6 = 729$ — same answer, one more step.)',
  },
  {
    q: 'Evaluate $9^{1/2} + 9^{-1/2}$.',
    choices: ['$3$', '$\\frac{10}{3}$', '$0$', '$\\frac{8}{3}$'],
    answer: 1,
    solution: 'Handle each term: $9^{1/2} = 3$ and $9^{-1/2} = \\frac{1}{3}$. Their sum is $3 + \\frac{1}{3} = \\frac{10}{3}$. (Note the exponents do NOT combine here — the terms are added, not multiplied.)',
  },
  {
    q: 'Compute $2^{-1} + 2^{-2} + 2^{-3} + 2^{-4}$.',
    choices: ['$\\frac{7}{8}$', '$1$', '$\\frac{31}{32}$', '$\\frac{15}{16}$'],
    answer: 3,
    solution: 'Each term is a reciprocal power: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16}$. With denominator $16$: $\\frac{8 + 4 + 2 + 1}{16} = \\frac{15}{16}$. Each step gets you halfway to $1$ — and you never quite arrive!',
  },
  {
    q: 'For what value of $c$ does the equation $3x + c = 3(x + 2)$ hold for EVERY number $x$?',
    choices: ['$2$', '$3$', '$6$', 'No such value exists'],
    answer: 2,
    solution: 'Distribute the right side: $3(x + 2) = 3x + 6$. The equation becomes $3x + c = 3x + 6$, which is true for every $x$ exactly when $c = 6$. Any other $c$ would make it true for NO value of $x$!',
  },
]

const worksheet = [
  {
    q: 'Evaluate $4 + 3(6 - 2)^2$.',
    answer: '$52$',
    solution: 'Parentheses first: $6 - 2 = 4$. Exponent: $4^2 = 16$. Multiply: $3 \\times 16 = 48$. Add: $4 + 48 = 52$.',
  },
  {
    q: 'Compute $54 \\times 99$ using the distributive property.',
    answer: '$5346$',
    solution: 'Write $99 = 100 - 1$: then $54 \\times 99 = 5400 - 54 = 5346$.',
  },
  {
    q: 'Solve $4x - 9 = 23$.',
    answer: '$x = 8$',
    solution: 'Add $9$ to both sides: $4x = 32$. Divide by $4$: $x = 8$. Check: $4 \\cdot 8 - 9 = 23$. ✓',
  },
  {
    q: 'Simplify $\\frac{3^5 \\cdot 3^2}{3^4}$.',
    answer: '$27$',
    solution: 'Add exponents on top: $3^5 \\cdot 3^2 = 3^7$. Subtract for the division: $3^{7-4} = 3^3 = 27$.',
  },
  {
    q: 'Evaluate $64^{2/3}$.',
    answer: '$16$',
    solution: 'Cube root first: $64^{1/3} = 4$. Then square: $4^2 = 16$.',
  },
  {
    q: 'Simplify $\\sqrt{75}$.',
    answer: '$5\\sqrt{3}$',
    solution: 'The largest perfect square dividing $75$ is $25$: $\\sqrt{75} = \\sqrt{25} \\cdot \\sqrt{3} = 5\\sqrt{3}$.',
  },
  {
    q: 'Rationalize $\\frac{12}{\\sqrt{6}}$.',
    answer: '$2\\sqrt{6}$',
    solution: 'Multiply top and bottom by $\\sqrt{6}$: $\\frac{12\\sqrt{6}}{6} = 2\\sqrt{6}$.',
  },
  {
    q: 'If $5x + 3 = 28$, find the value of $10x - 4$.',
    answer: '$46$',
    solution: 'Doubling both sides of $5x + 3 = 28$ gives $10x + 6 = 56$, so $10x = 50$ and $10x - 4 = 46$. (Or solve directly: $x = 5$, so $10 \\cdot 5 - 4 = 46$.)',
  },
  {
    q: 'Evaluate $\\left(\\frac{9}{16}\\right)^{-1/2}$.',
    answer: '$\\frac{4}{3}$',
    solution: 'The negative exponent flips the fraction: $\\left(\\frac{16}{9}\\right)^{1/2}$. The square root hits top and bottom: $\\frac{\\sqrt{16}}{\\sqrt{9}} = \\frac{4}{3}$.',
  },
  {
    q: 'Compute $\\sqrt{27} + \\sqrt{48} - \\sqrt{3}$.',
    answer: '$6\\sqrt{3}$',
    solution: 'Simplify each radical: $\\sqrt{27} = 3\\sqrt{3}$ and $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$. Combine the like radicals: $3\\sqrt{3} + 4\\sqrt{3} - \\sqrt{3} = 6\\sqrt{3}$.',
  },
]

export default {
  id: 'intro-algebra-ch01',
  book: 'intro-algebra',
  number: 1,
  title: 'Follow the Rules',
  intro:
    'Welcome to Introduction to Algebra! You already know how numbers behave — now we sharpen those rules into precision tools. In this chapter we revisit the laws of arithmetic with fresh eyes, then push further into exponents, roots, and the logic of equations.',
  sections: [s11, s12, s13, s14, s15, s16, s17, s18],
  challenge,
  worksheet,
}


