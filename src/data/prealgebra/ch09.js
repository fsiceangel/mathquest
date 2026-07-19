// Prealgebra — Chapter 9: Square Roots
// All problems, explanations, and examples are original MathQuest content.

const s91 = {
  id: '9.1',
  title: 'From Squares to Square Roots',
  learn: {
    concepts: [
      {
        heading: 'What is a square root?',
        body: 'The square root of a number $n$, written $\\sqrt{n}$, is the nonnegative number whose square is $n$. Since $5 \\times 5 = 25$, we write $\\sqrt{25} = 5$. Asking for $\\sqrt{n}$ is asking: "What number, times itself, makes $n$?"',
      },
      {
        heading: 'Know your perfect squares',
        body: 'A perfect square is a number you get by squaring a whole number: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400$. Knowing this list up to $400$ (that is, up to $20^2$) makes square roots feel like old friends instead of strangers.',
      },
      {
        heading: 'Squaring and rooting undo each other',
        body: 'For any positive number $a$, we have $\\sqrt{a^2} = a$ and $(\\sqrt{a})^2 = a$. Square then root, or root then square — either way you land back where you started. That is why square roots are the perfect tool for undoing a squaring.',
      },
      {
        heading: 'Square roots of fractions',
        body: 'If the top and bottom of a fraction are both perfect squares, take each root separately: $\\sqrt{\\frac{9}{25}} = \\frac{3}{5}$, because $\\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$. Root the top, root the bottom — done!',
      },
    ],
    examples: [
      {
        problem: 'Find $\\sqrt{144}$.',
        steps: [
          'We need the nonnegative number that multiplies by itself to give $144$.',
          'Try numbers near $10$: $10^2 = 100$ is too small, $12^2 = 144$ is exactly right.',
          'Check: $12 \\times 12 = 144$.',
        ],
        answer: '$\\sqrt{144} = 12$',
      },
      {
        problem: 'Compute $(\\sqrt{7})^2$.',
        steps: [
          'By definition, $\\sqrt{7}$ is the number whose square is $7$.',
          'So when we square it, we get $7$ back — no calculation needed! Squaring undoes rooting.',
        ],
        answer: '$(\\sqrt{7})^2 = 7$',
      },
      {
        problem: 'Find $\\sqrt{\\frac{49}{81}}$.',
        steps: [
          'Both $49$ and $81$ are perfect squares: $49 = 7^2$ and $81 = 9^2$.',
          'Root the top and the bottom separately: $\\sqrt{\\frac{49}{81}} = \\frac{\\sqrt{49}}{\\sqrt{81}} = \\frac{7}{9}$.',
          'Check: $\\frac{7}{9} \\times \\frac{7}{9} = \\frac{49}{81}$.',
        ],
        answer: '$\\sqrt{\\frac{49}{81}} = \\frac{7}{9}$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\sqrt{64}$?',
      choices: ['$32$', '$8$', '$16$', '$4$'],
      answer: 1,
      solution: 'We need the number that multiplies by itself to give $64$: since $8 \\times 8 = 64$, we get $\\sqrt{64} = 8$. (Careful: $32$ is half of $64$ — the square root asks a different question than dividing by $2$!)',
    },
    {
      q: 'What is $\\sqrt{25}$?',
      choices: ['$5$', '$12.5$', '$625$', '$6$'],
      answer: 0,
      solution: 'Since $5 \\times 5 = 25$, the square root of $25$ is $5$. Note that $625$ is $25^2$ — that would be squaring, which goes the opposite direction from rooting.',
    },
    {
      q: 'Which of these numbers is a perfect square?',
      choices: ['$50$', '$75$', '$81$', '$90$'],
      answer: 2,
      solution: 'A perfect square is a whole number times itself. Since $9 \\times 9 = 81$, the number $81$ is a perfect square. The others sit between squares: $49 < 50 < 64$, $64 < 75 < 81$, and $81 < 90 < 100$.',
    },
    {
      q: 'What is $\\sqrt{196}$?',
      choices: ['$98$', '$16$', '$13$', '$14$'],
      answer: 3,
      solution: 'Test squares near the middle teens: $13^2 = 169$ is too small, and $14^2 = 196$ is a perfect match. So $\\sqrt{196} = 14$. ($98$ is just half of $196$ — halving is not rooting!)',
    },
    {
      q: 'What is $(\\sqrt{11})^2$?',
      choices: ['$11$', '$121$', '$22$', '$5.5$'],
      answer: 0,
      solution: 'By definition, $\\sqrt{11}$ is the number whose square is $11$. Squaring it hands us $11$ right back. Squaring undoes rooting — no decimals needed!',
    },
    {
      q: 'If $a$ is a positive number, what is $\\sqrt{a^2}$?',
      choices: ['$a^2$', '$a$', '$\\frac{a}{2}$', '$2a$'],
      answer: 1,
      solution: 'The square root of $a^2$ is the nonnegative number whose square is $a^2$ — and that is $a$ itself, since $a$ is positive. Rooting undoes squaring.',
    },
    {
      q: 'What is $\\sqrt{\\frac{49}{100}}$?',
      choices: ['$\\frac{49}{50}$', '$\\frac{7}{100}$', '$\\frac{7}{10}$', '$\\frac{10}{7}$'],
      answer: 2,
      solution: 'Root the top and bottom separately: $\\sqrt{49} = 7$ and $\\sqrt{100} = 10$, so the answer is $\\frac{7}{10}$. Check: $\\frac{7}{10} \\times \\frac{7}{10} = \\frac{49}{100}$.',
    },
    {
      q: 'Compute $\\sqrt{400} - \\sqrt{100}$.',
      choices: ['$\\sqrt{300}$', '$30$', '$300$', '$10$'],
      answer: 3,
      solution: 'Take each root first: $\\sqrt{400} = 20$ and $\\sqrt{100} = 10$, so the difference is $20 - 10 = 10$. (Careful: you may not merge the roots into $\\sqrt{400 - 100}$ — roots do not split across subtraction!)',
    },
    {
      q: 'What is $\\sqrt{\\sqrt{81}}$?',
      choices: ['$9$', '$3$', '$40.5$', '$6$'],
      answer: 1,
      solution: 'Work from the inside out: $\\sqrt{81} = 9$, and then $\\sqrt{9} = 3$. Two rootings in a row! Check: $3^2 = 9$ and $9^2 = 81$.',
    },
    {
      q: 'A square rug has an area of $225$ square feet. What is its perimeter?',
      choices: ['$60$ feet', '$15$ feet', '$56.25$ feet', '$30$ feet'],
      answer: 0,
      solution: 'The side length is $\\sqrt{225} = 15$ feet, since $15^2 = 225$. A square has four equal sides, so the perimeter is $4 \\times 15 = 60$ feet. ($15$ feet is only the side — the question asks for the full trip around!)',
    },
  ],
}

const s92 = {
  id: '9.2',
  title: 'Square Roots of Non-square Integers',
  learn: {
    concepts: [
      {
        heading: 'Trapped between two squares',
        body: 'Most numbers are not perfect squares, but we can still pin down their roots. Since $16 < 20 < 25$, taking roots gives $4 < \\sqrt{20} < 5$. Find the perfect squares on either side of your number, and the root lives between their roots.',
      },
      {
        heading: 'Pull out the square factor',
        body: 'If a number has a perfect square hiding inside as a factor, the root simplifies: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$. Always hunt for the largest perfect square factor so the job gets done in one step.',
      },
      {
        heading: 'When is a radical fully simplified?',
        body: 'A radical is fully simplified when the number under the root has no perfect square factor bigger than $1$. So $\\sqrt{30}$ is already simplified ($30 = 2 \\cdot 3 \\cdot 5$, no square factor), but $\\sqrt{12}$ is not, because $4$ hides inside: $\\sqrt{12} = 2\\sqrt{3}$.',
      },
      {
        heading: 'Roots that are not fractions',
        body: 'Here is something amazing: if $n$ is not a perfect square, then $\\sqrt{n}$ cannot be written as a fraction of whole numbers at all. Its decimal runs on forever without ever repeating. Numbers like this are called irrational — $\\sqrt{2} = 1.41421356\\ldots$ never settles into a pattern.',
      },
    ],
    examples: [
      {
        problem: 'Between which two consecutive integers is $\\sqrt{40}$?',
        steps: [
          'Find the perfect squares on either side of $40$: we have $36 < 40 < 49$.',
          'Taking square roots keeps the order: $\\sqrt{36} < \\sqrt{40} < \\sqrt{49}$.',
          'So $6 < \\sqrt{40} < 7$.',
        ],
        answer: '$\\sqrt{40}$ is between $6$ and $7$',
      },
      {
        problem: 'Simplify $\\sqrt{72}$.',
        steps: [
          'Hunt for the largest perfect square factor of $72$: check $36$, and indeed $72 = 36 \\cdot 2$.',
          'Split the root: $\\sqrt{72} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$.',
          'Check by squaring: $(6\\sqrt{2})^2 = 36 \\cdot 2 = 72$.',
        ],
        answer: '$\\sqrt{72} = 6\\sqrt{2}$',
      },
      {
        problem: 'Simplify $\\sqrt{45}$.',
        steps: [
          'Look for square factors of $45$: since $45 = 9 \\cdot 5$, the perfect square $9$ hides inside.',
          'Split the root: $\\sqrt{45} = \\sqrt{9} \\cdot \\sqrt{5} = 3\\sqrt{5}$.',
          'Is $\\sqrt{5}$ done? Yes — $5$ has no perfect square factor bigger than $1$, so we are fully simplified.',
        ],
        answer: '$\\sqrt{45} = 3\\sqrt{5}$',
      },
    ],
  },
  problems: [
    {
      q: '$\\sqrt{20}$ is between which two consecutive integers?',
      choices: ['$3$ and $4$', '$5$ and $6$', '$4$ and $5$', '$10$ and $11$'],
      answer: 2,
      solution: 'Find the perfect squares around $20$: we have $16 < 20 < 25$, so $4 < \\sqrt{20} < 5$. (The choice $10$ and $11$ comes from halving $20$ — but halving is not rooting!)',
    },
    {
      q: 'Simplify $\\sqrt{8}$.',
      choices: ['$2\\sqrt{2}$', '$4\\sqrt{2}$', '$\\sqrt{6}$', '$4$'],
      answer: 0,
      solution: 'The largest perfect square factor of $8$ is $4$: so $\\sqrt{8} = \\sqrt{4} \\cdot \\sqrt{2} = 2\\sqrt{2}$. Check by squaring: $(2\\sqrt{2})^2 = 4 \\cdot 2 = 8$. (Careful: the $4$ comes out of the root as $2$, not as $4$.)',
    },
    {
      q: 'Simplify $\\sqrt{50}$.',
      choices: ['$25\\sqrt{2}$', '$2\\sqrt{5}$', '$10\\sqrt{5}$', '$5\\sqrt{2}$'],
      answer: 3,
      solution: 'Since $50 = 25 \\cdot 2$, split the root: $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$. The $25$ leaves the root as its square root, $5$ — not as $25$ itself.',
    },
    {
      q: '$\\sqrt{90}$ is between which two consecutive integers?',
      choices: ['$8$ and $9$', '$9$ and $10$', '$10$ and $11$', '$44$ and $45$'],
      answer: 1,
      solution: 'The perfect squares around $90$ are $81$ and $100$: since $81 < 90 < 100$, we get $9 < \\sqrt{90} < 10$.',
    },
    {
      q: 'Simplify $\\sqrt{75}$.',
      choices: ['$5\\sqrt{3}$', '$3\\sqrt{5}$', '$25\\sqrt{3}$', '$5\\sqrt{15}$'],
      answer: 0,
      solution: 'Since $75 = 25 \\cdot 3$, we get $\\sqrt{75} = \\sqrt{25} \\cdot \\sqrt{3} = 5\\sqrt{3}$. Check: $(5\\sqrt{3})^2 = 25 \\cdot 3 = 75$. Watch the order — $3\\sqrt{5}$ squares to $45$, which is not $75$.',
    },
    {
      q: 'Which of these radicals is already fully simplified?',
      choices: ['$\\sqrt{12}$', '$\\sqrt{18}$', '$\\sqrt{27}$', '$\\sqrt{30}$'],
      answer: 3,
      solution: 'Fully simplified means no perfect square factor bigger than $1$ under the root. Since $30 = 2 \\cdot 3 \\cdot 5$, there is no square hiding inside — $\\sqrt{30}$ is done. The others all hide a $4$ or a $9$: $\\sqrt{12} = 2\\sqrt{3}$, $\\sqrt{18} = 3\\sqrt{2}$, and $\\sqrt{27} = 3\\sqrt{3}$.',
    },
    {
      q: 'Simplify $\\sqrt{48}$ completely.',
      choices: ['$16\\sqrt{3}$', '$4\\sqrt{3}$', '$6\\sqrt{2}$', '$24$'],
      answer: 1,
      solution: 'The largest perfect square factor of $48$ is $16$: so $\\sqrt{48} = \\sqrt{16} \\cdot \\sqrt{3} = 4\\sqrt{3}$. Check by squaring: $(4\\sqrt{3})^2 = 16 \\cdot 3 = 48$.',
    },
    {
      q: 'Which statement about $\\sqrt{2}$ is true?',
      choices: [
        'It equals $\\frac{3}{2}$ exactly',
        'It equals $1.414$ exactly',
        'Its decimal goes on forever without repeating',
        'It is bigger than $2$',
      ],
      answer: 2,
      solution: 'Since $2$ is not a perfect square, $\\sqrt{2}$ is irrational: no fraction of whole numbers equals it, and its decimal $1.41421356\\ldots$ never ends or repeats. Both $\\frac{3}{2} = 1.5$ and $1.414$ are only nearby approximations — squaring either one does not give exactly $2$.',
    },
    {
      q: 'Which of these is closest to $\\sqrt{60}$?',
      choices: ['$30$', '$8.5$', '$6.5$', '$7.7$'],
      answer: 3,
      solution: 'Since $49 < 60 < 64$, we know $\\sqrt{60}$ is between $7$ and $8$ — and $60$ sits close to $64$, so the root is close to $8$. Testing: $7.7^2 = 59.29$, wonderfully close to $60$. The choice $30$ is halving, which is a completely different operation.',
    },
    {
      q: 'Simplify $\\sqrt{180}$ completely.',
      choices: ['$36\\sqrt{5}$', '$6\\sqrt{5}$', '$5\\sqrt{6}$', '$90$'],
      answer: 1,
      solution: 'The largest perfect square factor of $180$ is $36$: so $\\sqrt{180} = \\sqrt{36} \\cdot \\sqrt{5} = 6\\sqrt{5}$. Check: $(6\\sqrt{5})^2 = 36 \\cdot 5 = 180$. If you had used a smaller square factor like $9$, you would need a second round of simplifying — hunting for the largest one finishes the job at once.',
    },
  ],
}

const s93 = {
  id: '9.3',
  title: 'Arithmetic with Square Roots',
  learn: {
    concepts: [
      {
        heading: 'Multiplying roots',
        body: 'Roots multiply by merging: $\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$. So $\\sqrt{2} \\cdot \\sqrt{18} = \\sqrt{36} = 6$. The rule works in both directions — merge two roots into one, or split one root apart to simplify it.',
      },
      {
        heading: 'Dividing roots and cleaning up denominators',
        body: 'Roots divide the same way: $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$. And when a root lands in a denominator, like $\\frac{6}{\\sqrt{3}}$, multiply top and bottom by that root: $\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$. This is called rationalizing the denominator.',
      },
      {
        heading: 'Combining like radicals',
        body: 'Treat $\\sqrt{2}$ like a unit, the way you treat apples: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$, just as $3$ apples plus $5$ apples is $8$ apples. Only like radicals combine — and sometimes you must simplify first to discover that two radicals match: $\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.',
      },
      {
        heading: 'The big warning',
        body: 'Square roots do NOT split across addition: $\\sqrt{a + b} \\ne \\sqrt{a} + \\sqrt{b}$. Test it: $\\sqrt{9 + 16} = \\sqrt{25} = 5$, but $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$. Merging roots is for multiplying and dividing only!',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\sqrt{2} \\cdot \\sqrt{18}$.',
        steps: [
          'Merge the roots into one: $\\sqrt{2} \\cdot \\sqrt{18} = \\sqrt{2 \\cdot 18} = \\sqrt{36}$.',
          'And $36$ is a perfect square: $\\sqrt{36} = 6$.',
        ],
        answer: '$\\sqrt{2} \\cdot \\sqrt{18} = 6$',
      },
      {
        problem: 'Simplify $\\sqrt{12} + \\sqrt{27}$.',
        steps: [
          'These do not look alike yet — simplify each one first.',
          '$\\sqrt{12} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$ and $\\sqrt{27} = \\sqrt{9} \\cdot \\sqrt{3} = 3\\sqrt{3}$.',
          'Now they are like radicals: $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.',
        ],
        answer: '$\\sqrt{12} + \\sqrt{27} = 5\\sqrt{3}$',
      },
      {
        problem: 'Rationalize $\\frac{6}{\\sqrt{3}}$.',
        steps: [
          'Multiply top and bottom by $\\sqrt{3}$ — that is multiplying by $1$, so the value does not change.',
          '$\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3}$, since $\\sqrt{3} \\cdot \\sqrt{3} = 3$.',
          'Divide: $\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.',
        ],
        answer: '$\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\sqrt{3} \\cdot \\sqrt{12}$.',
      choices: ['$\\sqrt{15}$', '$36$', '$\\sqrt{6}$', '$6$'],
      answer: 3,
      solution: 'Merge the roots: $\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$. When roots multiply, the numbers inside multiply — they do not add, so $\\sqrt{15}$ is a trap.',
    },
    {
      q: 'Compute $4\\sqrt{7} + 3\\sqrt{7}$.',
      choices: ['$7\\sqrt{7}$', '$7\\sqrt{14}$', '$12\\sqrt{7}$', '$49$'],
      answer: 0,
      solution: 'Like radicals combine the way apples do: $4$ of them plus $3$ of them is $7$ of them, so $4\\sqrt{7} + 3\\sqrt{7} = 7\\sqrt{7}$. The $\\sqrt{7}$ itself stays the same — only the counts add.',
    },
    {
      q: 'Compute $\\frac{\\sqrt{50}}{\\sqrt{2}}$.',
      choices: ['$25$', '$\\sqrt{48}$', '$5$', '$10$'],
      answer: 2,
      solution: 'Merge into one root: $\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$. Inside the root we divide, not subtract — so $\\sqrt{48}$ is a trap.',
    },
    {
      q: 'What is $\\sqrt{9 + 16}$?',
      choices: ['$7$', '$5$', '$25$', '$12.5$'],
      answer: 1,
      solution: 'Add inside FIRST: $9 + 16 = 25$, so $\\sqrt{9 + 16} = \\sqrt{25} = 5$. The tempting answer $7$ comes from $\\sqrt{9} + \\sqrt{16} = 3 + 4$ — but roots do not split across addition!',
    },
    {
      q: 'Compute $\\sqrt{8} \\cdot \\sqrt{2}$.',
      choices: ['$4$', '$16$', '$\\sqrt{10}$', '$8$'],
      answer: 0,
      solution: 'Merge the roots: $\\sqrt{8} \\cdot \\sqrt{2} = \\sqrt{16} = 4$. Even though neither $\\sqrt{8}$ nor $\\sqrt{2}$ is a whole number, their product is — the roots team up beautifully.',
    },
    {
      q: 'Simplify $\\sqrt{27} + \\sqrt{12}$.',
      choices: ['$\\sqrt{39}$', '$6\\sqrt{3}$', '$5\\sqrt{3}$', '$5\\sqrt{6}$'],
      answer: 2,
      solution: 'Simplify each radical first: $\\sqrt{27} = 3\\sqrt{3}$ and $\\sqrt{12} = 2\\sqrt{3}$. Now they match, so $3\\sqrt{3} + 2\\sqrt{3} = 5\\sqrt{3}$. (You may not add under the roots to get $\\sqrt{39}$ — that shortcut is not allowed for addition.)',
    },
    {
      q: 'Rationalize the denominator: $\\frac{6}{\\sqrt{3}} = ?$',
      choices: ['$6\\sqrt{3}$', '$\\frac{\\sqrt{3}}{2}$', '$2$', '$2\\sqrt{3}$'],
      answer: 3,
      solution: 'Multiply top and bottom by $\\sqrt{3}$: $\\frac{6}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$. Check: $2\\sqrt{3} \\cdot \\sqrt{3} = 2 \\cdot 3 = 6$, so it really does equal the original.',
    },
    {
      q: 'Compute $5\\sqrt{2} - \\sqrt{2}$.',
      choices: ['$4$', '$4\\sqrt{2}$', '$5\\sqrt{2}$', '$3\\sqrt{2}$'],
      answer: 1,
      solution: 'Think of $\\sqrt{2}$ as an object: $5$ of them minus $1$ of them leaves $4$ of them, so $5\\sqrt{2} - \\sqrt{2} = 4\\sqrt{2}$. Remember $\\sqrt{2}$ alone means $1\\sqrt{2}$, not zero of them.',
    },
    {
      q: 'Compute $\\sqrt{6} \\cdot \\sqrt{3}$, fully simplified.',
      choices: ['$3\\sqrt{2}$', '$2\\sqrt{3}$', '$3$', '$9$'],
      answer: 0,
      solution: 'Merge first: $\\sqrt{6} \\cdot \\sqrt{3} = \\sqrt{18}$. Then simplify, since $18 = 9 \\cdot 2$: $\\sqrt{18} = 3\\sqrt{2}$. Check: $(3\\sqrt{2})^2 = 9 \\cdot 2 = 18$.',
    },
    {
      q: 'Compute $(2\\sqrt{5})^2$.',
      choices: ['$10$', '$4\\sqrt{5}$', '$100$', '$20$'],
      answer: 3,
      solution: 'Square each part: $(2\\sqrt{5})^2 = 2^2 \\cdot (\\sqrt{5})^2 = 4 \\cdot 5 = 20$. Both factors get squared — the $2$ becomes $4$, and the $\\sqrt{5}$ becomes $5$.',
    },
  ],
}

const challenge = [
  {
    q: 'What is $\\sqrt{324}$?',
    choices: ['$17$', '$18$', '$19$', '$162$'],
    answer: 1,
    solution: 'Hunt near the high teens: $17^2 = 289$ is too small, and $18^2 = 324$ is exact. So $\\sqrt{324} = 18$. ($162$ is just half of $324$ — a totally different operation.)',
  },
  {
    q: 'Simplify $\\sqrt{128}$ completely.',
    choices: ['$8\\sqrt{2}$', '$4\\sqrt{2}$', '$64\\sqrt{2}$', '$64$'],
    answer: 0,
    solution: 'The largest perfect square factor of $128$ is $64$: so $\\sqrt{128} = \\sqrt{64} \\cdot \\sqrt{2} = 8\\sqrt{2}$. Check: $(8\\sqrt{2})^2 = 64 \\cdot 2 = 128$.',
  },
  {
    q: 'Simplify $\\sqrt{45} + \\sqrt{20}$.',
    choices: ['$\\sqrt{65}$', '$6\\sqrt{5}$', '$5\\sqrt{5}$', '$5\\sqrt{10}$'],
    answer: 2,
    solution: 'Simplify each first: $\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$. They match, so $3\\sqrt{5} + 2\\sqrt{5} = 5\\sqrt{5}$. Adding under the roots to get $\\sqrt{65}$ is the classic trap — roots never split across addition.',
  },
  {
    q: 'Which of these numbers is the largest?',
    choices: ['$7$', '$\\sqrt{48}$', '$6.9$', '$\\sqrt{50}$'],
    answer: 3,
    solution: 'Compare everything to $7 = \\sqrt{49}$. Since $50 > 49$, we get $\\sqrt{50} > 7$. Meanwhile $\\sqrt{48} < \\sqrt{49} = 7$, and $6.9 < 7$ too. So $\\sqrt{50}$ wins.',
  },
  {
    q: 'Rationalize the denominator: $\\frac{10}{\\sqrt{5}} = ?$',
    choices: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$\\frac{2}{\\sqrt{5}}$', '$2$'],
    answer: 1,
    solution: 'Multiply top and bottom by $\\sqrt{5}$: $\\frac{10}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$. Check: $2\\sqrt{5} \\cdot \\sqrt{5} = 2 \\cdot 5 = 10$.',
  },
  {
    q: 'A square poster has an area of $72$ square inches. What is its side length, fully simplified?',
    choices: ['$6\\sqrt{2}$ inches', '$2\\sqrt{6}$ inches', '$36$ inches', '$12$ inches'],
    answer: 0,
    solution: 'The side is $\\sqrt{72}$. Since $72 = 36 \\cdot 2$, the side is $\\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$ inches. Check: $(6\\sqrt{2})^2 = 36 \\cdot 2 = 72$.',
  },
  {
    q: 'Compute $\\sqrt{2} \\cdot \\sqrt{3} \\cdot \\sqrt{6}$.',
    choices: ['$\\sqrt{11}$', '$36$', '$6$', '$11$'],
    answer: 2,
    solution: 'Merge all three roots: $\\sqrt{2 \\cdot 3 \\cdot 6} = \\sqrt{36} = 6$. The numbers inside multiply ($2 \\cdot 3 \\cdot 6 = 36$); they never add.',
  },
  {
    q: '$\\sqrt{150}$ is between which two consecutive integers?',
    choices: ['$12$ and $13$', '$11$ and $12$', '$13$ and $14$', '$75$ and $76$'],
    answer: 0,
    solution: 'The perfect squares around $150$ are $144 = 12^2$ and $169 = 13^2$: since $144 < 150 < 169$, we get $12 < \\sqrt{150} < 13$.',
  },
  {
    q: 'Compute $3\\sqrt{2} \\cdot 4\\sqrt{2}$.',
    choices: ['$12\\sqrt{2}$', '$12$', '$24\\sqrt{2}$', '$24$'],
    answer: 3,
    solution: 'Multiply the whole numbers and the roots separately: $3 \\cdot 4 = 12$ and $\\sqrt{2} \\cdot \\sqrt{2} = 2$. Then $12 \\cdot 2 = 24$. Do not forget that second step — the pair of $\\sqrt{2}$s becomes a $2$, not nothing!',
  },
  {
    q: 'Which equation is TRUE?',
    choices: [
      '$\\sqrt{4} + \\sqrt{9} = \\sqrt{13}$',
      '$\\sqrt{4} \\cdot \\sqrt{9} = \\sqrt{36}$',
      '$\\sqrt{9 + 16} = 7$',
      '$\\sqrt{16} - \\sqrt{4} = \\sqrt{12}$',
    ],
    answer: 1,
    solution: 'Roots merge across multiplication only: $\\sqrt{4} \\cdot \\sqrt{9} = 2 \\cdot 3 = 6 = \\sqrt{36}$. True! The others try to merge across addition or subtraction: $\\sqrt{4} + \\sqrt{9} = 5$ but $\\sqrt{13} \\approx 3.6$; $\\sqrt{9 + 16} = \\sqrt{25} = 5$, not $7$; and $\\sqrt{16} - \\sqrt{4} = 2$ but $\\sqrt{12} \\approx 3.46$.',
  },
  {
    q: 'Compute $\\frac{\\sqrt{300}}{\\sqrt{3}}$.',
    choices: ['$100$', '$\\sqrt{297}$', '$\\sqrt{10}$', '$10$'],
    answer: 3,
    solution: 'Merge into one root: $\\frac{\\sqrt{300}}{\\sqrt{3}} = \\sqrt{\\frac{300}{3}} = \\sqrt{100} = 10$. Divide inside the root — never subtract, so $\\sqrt{297}$ is a trap.',
  },
  {
    q: 'A positive number $x$ satisfies $\\sqrt{x} = 6$. What is $x$?',
    choices: ['$3$', '$12$', '$36$', '$\\sqrt{6}$'],
    answer: 2,
    solution: 'Squaring undoes rooting: if $\\sqrt{x} = 6$, then $x = 6^2 = 36$. Check: $\\sqrt{36} = 6$. (Doubling to get $12$ mixes up squaring with multiplying by $2$.)',
  },
]

const worksheet = [
  {
    q: 'Compute $\\sqrt{169}$.',
    answer: '$13$',
    solution: 'We need the number whose square is $169$: since $13 \\times 13 = 169$, we get $\\sqrt{169} = 13$.',
  },
  {
    q: 'Between which two consecutive integers is $\\sqrt{70}$?',
    answer: '$8$ and $9$',
    solution: 'The perfect squares around $70$ are $64 = 8^2$ and $81 = 9^2$: since $64 < 70 < 81$, we get $8 < \\sqrt{70} < 9$.',
  },
  {
    q: 'Simplify $\\sqrt{32}$ completely.',
    answer: '$4\\sqrt{2}$',
    solution: 'The largest perfect square factor of $32$ is $16$: so $\\sqrt{32} = \\sqrt{16} \\cdot \\sqrt{2} = 4\\sqrt{2}$. Check: $(4\\sqrt{2})^2 = 16 \\cdot 2 = 32$.',
  },
  {
    q: 'Compute $\\sqrt{\\frac{25}{64}}$.',
    answer: '$\\frac{5}{8}$',
    solution: 'Root the top and bottom separately: $\\sqrt{25} = 5$ and $\\sqrt{64} = 8$, so the answer is $\\frac{5}{8}$. Check: $\\frac{5}{8} \\times \\frac{5}{8} = \\frac{25}{64}$.',
  },
  {
    q: 'Compute $\\sqrt{5} \\cdot \\sqrt{20}$.',
    answer: '$10$',
    solution: 'Merge the roots: $\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{100} = 10$. Two messy roots can multiply to something perfectly clean.',
  },
  {
    q: 'Compute $6\\sqrt{3} + 2\\sqrt{3} - \\sqrt{3}$.',
    answer: '$7\\sqrt{3}$',
    solution: 'Count the like radicals: $6 + 2 - 1 = 7$ of them, so the total is $7\\sqrt{3}$. Remember the lone $\\sqrt{3}$ counts as $1\\sqrt{3}$.',
  },
  {
    q: 'Simplify $\\sqrt{200} + \\sqrt{50}$.',
    answer: '$15\\sqrt{2}$',
    solution: 'Simplify each first: $\\sqrt{200} = \\sqrt{100} \\cdot \\sqrt{2} = 10\\sqrt{2}$ and $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$. Now they match: $10\\sqrt{2} + 5\\sqrt{2} = 15\\sqrt{2}$.',
  },
  {
    q: 'Rationalize the denominator: $\\frac{10}{\\sqrt{2}}$.',
    answer: '$5\\sqrt{2}$',
    solution: 'Multiply top and bottom by $\\sqrt{2}$: $\\frac{10}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$. Check: $5\\sqrt{2} \\cdot \\sqrt{2} = 5 \\cdot 2 = 10$.',
  },
  {
    q: 'A square garden has an area of $128$ square meters. Find its side length, fully simplified.',
    answer: '$8\\sqrt{2}$ meters',
    solution: 'The side is $\\sqrt{128}$. The largest perfect square factor of $128$ is $64$, so the side is $\\sqrt{64} \\cdot \\sqrt{2} = 8\\sqrt{2}$ meters. Check: $(8\\sqrt{2})^2 = 64 \\cdot 2 = 128$.',
  },
  {
    q: 'Compute $(2\\sqrt{3})^2 + (3\\sqrt{2})^2$.',
    answer: '$30$',
    solution: 'Square each part of each term: $(2\\sqrt{3})^2 = 4 \\cdot 3 = 12$ and $(3\\sqrt{2})^2 = 9 \\cdot 2 = 18$. Then add: $12 + 18 = 30$.',
  },
]

export default {
  id: 'prealgebra-ch09',
  book: 'prealgebra',
  number: 9,
  title: 'Square Roots',
  intro:
    'You already know how to square a number — now it is time to run that machine in reverse! Square roots let you start from a square and recover the number that built it. In this chapter you will master the roots of perfect squares, tame the in-between numbers like $\\sqrt{50}$, and learn the rules for multiplying, dividing, and combining roots.',
  sections: [s91, s92, s93],
  challenge,
  worksheet,
}
