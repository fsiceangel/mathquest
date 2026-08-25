// Prealgebra chapter 4 — variations for sections 4.4-4.6.
// All problems and solutions are original MathQuest content.

const s44 = [
  // p1 — square a unit fraction
  [
    {
      q: 'Compute $\\left(\\frac{1}{5}\\right)^2$.',
      choices: ['$\\frac{1}{10}$', '$\\frac{1}{25}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$'],
      answer: 1,
      solution:
        'Squaring hits the top and the bottom: $\\frac{1^2}{5^2} = \\frac{1}{25}$. Doubling the bottom would give $\\frac{1}{10}$ and doubling the top would give $\\frac{2}{5}$ — but a square is a number times itself, not a number doubled.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{4}\\right)^2$.',
      choices: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{16}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'A quarter of a quarter is a sixteenth: $\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$. Doubling the bottom gives $\\frac{1}{8}$ and doubling the whole fraction gives $\\frac{1}{2}$ — neither is squaring.',
    },
    {
      q: 'Which fraction, when squared, gives $\\frac{1}{64}$?',
      choices: ['$\\frac{1}{32}$', '$\\frac{1}{64}$', '$\\frac{1}{16}$', '$\\frac{1}{8}$'],
      answer: 3,
      solution:
        'You need a number times itself to give $\\frac{1}{64}$, so you need a bottom whose square is $64$. Since $8 \\times 8 = 64$, the fraction is $\\frac{1}{8}$. Check: $\\frac{1}{8} \\times \\frac{1}{8} = \\frac{1}{64}$. ✓ (Halving $64$ to get $\\frac{1}{32}$ undoes doubling, not squaring.)',
    },
  ],
  // p2 — square a fraction with a top bigger than 1
  [
    {
      q: 'Compute $\\left(\\frac{3}{4}\\right)^2$.',
      choices: ['$\\frac{9}{16}$', '$\\frac{9}{4}$', '$\\frac{3}{8}$', '$\\frac{3}{2}$'],
      answer: 0,
      solution:
        'Square both layers: $\\frac{3^2}{4^2} = \\frac{9}{16}$. Squaring only the top leaves $\\frac{9}{4}$, and doubling instead of squaring gives $\\frac{3}{2}$ or $\\frac{3}{8}$ depending on which layer you touch.',
    },
    {
      q: 'Compute $\\left(\\frac{4}{7}\\right)^2$.',
      choices: ['$\\frac{16}{7}$', '$\\frac{4}{49}$', '$\\frac{16}{49}$', '$\\frac{8}{7}$'],
      answer: 2,
      solution:
        'The exponent belongs to the whole fraction, so it lands on both numbers: $\\frac{4^2}{7^2} = \\frac{16}{49}$. Squaring one layer only gives $\\frac{16}{7}$ or $\\frac{4}{49}$, and multiplying the fraction by $2$ gives $\\frac{8}{7}$.',
    },
    {
      q: 'The square of a positive fraction is $\\frac{9}{25}$. What is the fraction?',
      choices: ['$\\frac{9}{5}$', '$\\frac{3}{25}$', '$\\frac{81}{625}$', '$\\frac{3}{5}$'],
      answer: 3,
      solution:
        'Undo the squaring on each layer: $3 \\times 3 = 9$ and $5 \\times 5 = 25$, so the fraction is $\\frac{3}{5}$. Check: $\\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$. ✓ Un-squaring only one layer gives $\\frac{9}{5}$ or $\\frac{3}{25}$, and squaring again by mistake gives $\\frac{81}{625}$.',
    },
  ],
  // p3 — cube (and higher powers of) a unit fraction
  [
    {
      q: 'Compute $\\left(\\frac{1}{4}\\right)^3$.',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{64}$', '$\\frac{1}{16}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'Cube the top and the bottom: $\\frac{1^3}{4^3} = \\frac{1}{64}$, since $4 \\times 4 \\times 4 = 64$. Multiplying the bottom by $3$ gives $\\frac{1}{12}$, and stopping after two factors gives $\\frac{1}{16}$.',
    },
    {
      q: 'How many copies of $\\frac{1}{2}$ must be multiplied together to give $\\frac{1}{32}$?',
      choices: ['$3$', '$4$', '$5$', '$16$'],
      answer: 2,
      solution:
        'Each copy doubles the bottom: $\\frac{1}{2}$, $\\frac{1}{4}$, $\\frac{1}{8}$, $\\frac{1}{16}$, $\\frac{1}{32}$. That is $5$ copies, because $2^5 = 32$. Three copies would only reach $\\frac{1}{8}$ and four would reach $\\frac{1}{16}$.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{2}\\right)^5$.',
      choices: ['$\\frac{1}{10}$', '$\\frac{5}{2}$', '$\\frac{1}{16}$', '$\\frac{1}{32}$'],
      answer: 3,
      solution:
        'Five factors of $\\frac{1}{2}$ give $\\frac{1^5}{2^5} = \\frac{1}{32}$. Multiplying the bottom by $5$ gives $\\frac{1}{10}$, and using the exponent $4$ by accident gives $\\frac{1}{16}$.',
    },
  ],
  // p4 — even power of a negative fraction
  [
    {
      q: 'Compute $\\left(-\\frac{3}{4}\\right)^2$.',
      choices: ['$\\frac{9}{16}$', '$-\\frac{9}{16}$', '$\\frac{9}{8}$', '$-\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Two negative factors means two sign flips, which cancel, so the answer is positive. The sizes give $\\frac{3^2}{4^2} = \\frac{9}{16}$. Keeping the minus sign gives $-\\frac{9}{16}$, and squaring only the top while doubling the bottom gives $\\frac{9}{8}$.',
    },
    {
      q: 'Compute $\\left(-\\frac{4}{5}\\right)^2$.',
      choices: ['$-\\frac{16}{25}$', '$\\frac{16}{5}$', '$\\frac{16}{25}$', '$-\\frac{8}{5}$'],
      answer: 2,
      solution:
        'An even power of a negative number is positive, so drop the sign and square both layers: $\\frac{4^2}{5^2} = \\frac{16}{25}$. Hanging on to the minus sign gives $-\\frac{16}{25}$, squaring only the top gives $\\frac{16}{5}$, and doubling instead of squaring gives $-\\frac{8}{5}$.',
    },
    {
      q: 'Which of these expressions has a POSITIVE value?',
      choices: [
        '$\\left(-\\frac{2}{5}\\right)^3$',
        '$\\left(-\\frac{1}{3}\\right)^5$',
        '$-\\left(\\frac{3}{4}\\right)^2$',
        '$\\left(-\\frac{5}{2}\\right)^4$',
      ],
      answer: 3,
      solution:
        'Count the sign flips. The first two are odd powers of negative fractions, so one flip is left over and both are negative. The third squares a positive fraction and then takes its opposite, so it is negative too. Only $\\left(-\\frac{5}{2}\\right)^4$ has an even number of negative factors, and its four flips cancel in pairs.',
    },
  ],
  // p5 — odd power of a negative fraction
  [
    {
      q: 'Compute $\\left(-\\frac{1}{3}\\right)^3$.',
      choices: ['$-\\frac{1}{27}$', '$\\frac{1}{27}$', '$-\\frac{1}{9}$', '$-\\frac{1}{6}$'],
      answer: 0,
      solution:
        'Three negative factors is an odd number of flips, so the answer is negative. The sizes give $\\frac{1^3}{3^3} = \\frac{1}{27}$, making the answer $-\\frac{1}{27}$. Stopping at two factors gives $-\\frac{1}{9}$, and tripling the bottom gives $-\\frac{1}{6}$.',
    },
    {
      q: 'Compute $\\left(-\\frac{2}{5}\\right)^3$.',
      choices: ['$\\frac{8}{125}$', '$-\\frac{8}{125}$', '$-\\frac{8}{15}$', '$-\\frac{6}{125}$'],
      answer: 1,
      solution:
        'Odd power, negative base, so the result is negative. The sizes give $\\frac{2^3}{5^3} = \\frac{8}{125}$, so the answer is $-\\frac{8}{125}$. Tripling the bottom instead of cubing it gives $-\\frac{8}{15}$, and tripling the top gives $-\\frac{6}{125}$.',
    },
    {
      q: 'For which exponent $n$ is $\\left(-\\frac{1}{4}\\right)^n = -\\frac{1}{64}$?',
      choices: ['$2$', '$4$', '$3$', '$6$'],
      answer: 2,
      solution:
        'The answer is negative, so $n$ must be odd — that rules out $2$, $4$, and $6$ immediately. Then the size must match: $4^3 = 64$, so $n = 3$. Check: $\\left(-\\frac{1}{4}\\right)^3 = -\\frac{1}{64}$. ✓',
    },
  ],
  // p6 — the exponent -1 is just the reciprocal
  [
    {
      q: 'Compute $\\left(\\frac{5}{7}\\right)^{-1}$.',
      choices: ['$\\frac{7}{5}$', '$-\\frac{5}{7}$', '$\\frac{5}{7}$', '$-\\frac{7}{5}$'],
      answer: 0,
      solution:
        'An exponent of $-1$ means "turn the fraction upside down": $\\left(\\frac{5}{7}\\right)^{-1} = \\frac{7}{5}$. The minus sign lives in the exponent, so it flips the fraction rather than making the answer negative.',
    },
    {
      q: 'A positive fraction $f$ satisfies $f^{-1} = \\frac{11}{6}$. What is $f$?',
      choices: ['$\\frac{11}{6}$', '$\\frac{6}{11}$', '$-\\frac{11}{6}$', '$-\\frac{6}{11}$'],
      answer: 1,
      solution:
        'Flipping is its own undoing: if turning $f$ upside down gives $\\frac{11}{6}$, then $f$ is $\\frac{11}{6}$ turned upside down, which is $\\frac{6}{11}$. Check: $\\frac{6}{11} \\times \\frac{11}{6} = 1$, and a number times its reciprocal is always $1$. ✓',
    },
    {
      q: 'Compute $4^{-1}$.',
      choices: ['$-4$', '$4$', '$-\\frac{1}{4}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'Write $4$ as $\\frac{4}{1}$, then the exponent $-1$ flips it to $\\frac{1}{4}$. A negative exponent never puts a minus sign on the answer — it takes the reciprocal instead.',
    },
  ],
  // p7 — negative exponent bigger than 1
  [
    {
      q: 'Compute $\\left(\\frac{1}{3}\\right)^{-2}$.',
      choices: ['$9$', '$\\frac{1}{9}$', '$-9$', '$6$'],
      answer: 0,
      solution:
        'Flip first, then apply the positive power: $\\left(\\frac{1}{3}\\right)^{-2} = 3^2 = 9$. Forgetting to flip gives $\\frac{1}{9}$, and multiplying $3$ by $2$ instead of squaring gives $6$.',
    },
    {
      q: 'Compute $\\left(\\frac{2}{5}\\right)^{-2}$.',
      choices: ['$\\frac{4}{25}$', '$\\frac{25}{4}$', '$-\\frac{25}{4}$', '$\\frac{5}{2}$'],
      answer: 1,
      solution:
        'Flip the fraction, then square: $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$. Squaring without flipping gives $\\frac{4}{25}$, and flipping without squaring stops at $\\frac{5}{2}$.',
    },
    {
      q: 'Compute $\\left(\\frac{3}{2}\\right)^{-3}$.',
      choices: ['$\\frac{27}{8}$', '$-\\frac{8}{27}$', '$\\frac{8}{27}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        'Flip to $\\frac{2}{3}$, then cube: $\\frac{2^3}{3^3} = \\frac{8}{27}$. Cubing without flipping gives $\\frac{27}{8}$, and the minus in the exponent does not travel to the answer, so $-\\frac{8}{27}$ is wrong.',
    },
  ],
  // p8 — powers of a fraction bigger than 1
  [
    {
      q: 'Compute $\\left(\\frac{7}{3}\\right)^2$.',
      choices: ['$\\frac{49}{3}$', '$\\frac{49}{9}$', '$\\frac{14}{3}$', '$\\frac{7}{9}$'],
      answer: 1,
      solution:
        'Square both layers: $\\frac{7^2}{3^2} = \\frac{49}{9}$. Since $\\frac{7}{3}$ is bigger than $1$, squaring made it bigger. Squaring one layer only gives $\\frac{49}{3}$ or $\\frac{7}{9}$, and doubling gives $\\frac{14}{3}$.',
    },
    {
      q: 'Squaring which of these fractions makes it BIGGER than it was?',
      choices: ['$\\frac{2}{7}$', '$\\frac{5}{9}$', '$\\frac{9}{5}$', '$\\frac{3}{8}$'],
      answer: 2,
      solution:
        'Multiplying by a number below $1$ shrinks things, so squaring a fraction below $1$ makes it smaller. Only $\\frac{9}{5}$ is bigger than $1$, and squaring it gives $\\frac{81}{25}$, which is larger than $\\frac{9}{5} = \\frac{45}{25}$.',
    },
    {
      q: 'Compute $\\left(\\frac{9}{4}\\right)^2$.',
      choices: ['$\\frac{81}{4}$', '$\\frac{9}{16}$', '$\\frac{9}{2}$', '$\\frac{81}{16}$'],
      answer: 3,
      solution:
        'The power hits both numbers: $\\frac{9^2}{4^2} = \\frac{81}{16}$. Squaring the top alone gives $\\frac{81}{4}$, squaring the bottom alone gives $\\frac{9}{16}$, and doubling the fraction gives $\\frac{9}{2}$.',
    },
  ],
  // p9 — negative base AND negative exponent
  [
    {
      q: 'Compute $\\left(-\\frac{3}{4}\\right)^{-2}$.',
      choices: ['$\\frac{16}{9}$', '$-\\frac{16}{9}$', '$\\frac{9}{16}$', '$-\\frac{4}{3}$'],
      answer: 0,
      solution:
        'Two rules, one at a time. The negative exponent flips the fraction: $\\left(-\\frac{4}{3}\\right)^2$. Then the even power cancels the sign, and the sizes give $\\frac{16}{9}$. The minus in the exponent never reaches the answer, so $-\\frac{16}{9}$ is the trap.',
    },
    {
      q: 'Compute $\\left(-\\frac{1}{3}\\right)^{-3}$.',
      choices: ['$27$', '$-27$', '$-\\frac{1}{27}$', '$\\frac{1}{27}$'],
      answer: 1,
      solution:
        'Flip the fraction first: $\\left(-\\frac{1}{3}\\right)^{-3} = (-3)^3$. Three negative factors is an odd count, so the answer is negative, and the size is $3^3 = 27$. That gives $-27$. Skipping the flip would leave you at $\\pm\\frac{1}{27}$.',
    },
    {
      q: 'Compute $\\left(-\\frac{2}{3}\\right)^{-3}$.',
      choices: ['$\\frac{27}{8}$', '$-\\frac{8}{27}$', '$\\frac{8}{27}$', '$-\\frac{27}{8}$'],
      answer: 3,
      solution:
        'Flip first: $\\left(-\\frac{3}{2}\\right)^3$. An odd power keeps the negative sign, and the sizes give $\\frac{3^3}{2^3} = \\frac{27}{8}$. So the answer is $-\\frac{27}{8}$. Forgetting the flip lands on $-\\frac{8}{27}$, and forgetting the sign lands on $\\frac{27}{8}$.',
    },
  ],
  // p10 — a power of a fraction times a power of a whole number
  [
    {
      q: 'Compute $\\left(\\frac{1}{3}\\right)^2 \\times 3^4$.',
      choices: ['$9$', '$\\frac{1}{9}$', '$27$', '$3$'],
      answer: 0,
      solution:
        'Work the powers separately: $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$ and $3^4 = 81$. Then $\\frac{81}{9} = 9$. Another view: two of the four $3$s on top are cancelled by the two $3$s on the bottom, leaving $3 \\times 3 = 9$.',
    },
    {
      q: 'Compute $\\left(\\frac{2}{3}\\right)^2 \\times \\left(\\frac{3}{2}\\right)^3$.',
      choices: ['$1$', '$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{9}{4}$'],
      answer: 1,
      solution:
        'The two fractions are reciprocals, so pairs of them cancel: $\\frac{4}{9} \\times \\frac{27}{8} = \\frac{108}{72} = \\frac{3}{2}$. Counting instead of computing works too — two of the three $\\frac{3}{2}$ factors are wiped out by the two $\\frac{2}{3}$ factors, and one $\\frac{3}{2}$ survives.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{5}\\right)^3 \\times 5^2$.',
      choices: ['$5$', '$\\frac{1}{25}$', '$25$', '$\\frac{1}{5}$'],
      answer: 3,
      solution:
        'Compute each piece: $\\left(\\frac{1}{5}\\right)^3 = \\frac{1}{125}$ and $5^2 = 25$. Then $\\frac{25}{125} = \\frac{1}{5}$. There are three $5$s downstairs and only two upstairs, so one $5$ is left on the bottom.',
    },
  ],
]

const s45 = [
  // p1 — one shared factor, gentle
  [
    {
      q: 'Simplify $\\frac{10}{12}$.',
      choices: ['$\\frac{5}{6}$', '$\\frac{5}{12}$', '$\\frac{4}{5}$', '$\\frac{6}{5}$'],
      answer: 0,
      solution:
        'Both numbers are even, so divide top and bottom by $2$: $\\frac{10}{12} = \\frac{5}{6}$. Since $5$ and $6$ share no factor bigger than $1$, that is simplest form. Halving only the top gives $\\frac{5}{12}$, subtracting $2$ from each gives $\\frac{4}{5}$ (which changes the value!), and $\\frac{6}{5}$ is the fraction upside down.',
    },
    {
      q: 'Simplify $\\frac{14}{21}$.',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{21}$', '$\\frac{2}{3}$', '$\\frac{14}{3}$'],
      answer: 2,
      solution:
        'The numbers are not both even, but both are multiples of $7$: $14 \\div 7 = 2$ and $21 \\div 7 = 3$, so $\\frac{14}{21} = \\frac{2}{3}$. Dividing only the top gives $\\frac{2}{21}$, dividing only the bottom gives $\\frac{14}{3}$, and taking $7$ away from each gives $\\frac{7}{14} = \\frac{1}{2}$, a different number entirely.',
    },
    {
      q: 'Which of these fractions simplifies to $\\frac{3}{5}$?',
      choices: ['$\\frac{6}{15}$', '$\\frac{8}{10}$', '$\\frac{5}{3}$', '$\\frac{12}{20}$'],
      answer: 3,
      solution:
        'To build a fraction equal to $\\frac{3}{5}$, multiply top and bottom by the SAME number. Here $3 \\times 4 = 12$ and $5 \\times 4 = 20$, so $\\frac{12}{20} = \\frac{3}{5}$. The others fail: $\\frac{6}{15} = \\frac{2}{5}$ (the top was doubled but the bottom tripled), $\\frac{8}{10} = \\frac{4}{5}$, and $\\frac{5}{3}$ is upside down.',
    },
  ],
  // p2 — why simplifying does not change the value
  [
    {
      q: 'Which move changes the VALUE of $\\frac{8}{12}$?',
      choices: [
        'Dividing the top and the bottom by $4$',
        'Subtracting $2$ from the top and the bottom',
        'Multiplying the top and the bottom by $3$',
        'Dividing the top and the bottom by $2$',
      ],
      answer: 1,
      solution:
        'Multiplying or dividing top and bottom by the same number is really multiplying or dividing the whole fraction by $1$, so the value survives. Subtracting is different: $\\frac{8}{12} = \\frac{2}{3}$, but $\\frac{6}{10} = \\frac{3}{5}$, and those are not the same number.',
    },
    {
      q: 'Rosa multiplies the top and the bottom of $\\frac{3}{7}$ by $4$ and gets $\\frac{12}{28}$. Is $\\frac{12}{28}$ the same number as $\\frac{3}{7}$?',
      choices: [
        'No — the fraction got bigger',
        'No — the fraction got smaller',
        'Yes — she multiplied by $\\frac{4}{4} = 1$, which changes nothing',
        'Yes, but only because $4$ is an even number',
      ],
      answer: 2,
      solution:
        'Multiplying the top by $4$ and the bottom by $4$ is multiplying the whole fraction by $\\frac{4}{4}$, and $\\frac{4}{4} = 1$. Multiplying by $1$ leaves a number alone, so $\\frac{12}{28}$ is $\\frac{3}{7}$ in a different outfit. Nothing about this depends on $4$ being even.',
    },
    {
      q: 'Why is $\\frac{9}{15}$ equal to $\\frac{3}{5}$?',
      choices: [
        'Because $9 - 6 = 3$ and $15 - 10 = 5$',
        'Because $9$ and $15$ are both odd numbers',
        'Because both fractions have a $5$ hiding somewhere in them',
        'Because dividing the top and the bottom by $3$ is dividing the whole fraction by $\\frac{3}{3} = 1$',
      ],
      answer: 3,
      solution:
        'The legal move is dividing top and bottom by the same number, which is division by $\\frac{3}{3} = 1$ and therefore harmless. Subtracting different amounts from top and bottom happens to land on the right answer here by luck, but it is not a rule — try it on $\\frac{4}{6}$ and see.',
    },
  ],
  // p3 — divide out a factor of 5 or 7
  [
    {
      q: 'Simplify $\\frac{15}{35}$.',
      choices: ['$\\frac{3}{7}$', '$\\frac{3}{35}$', '$\\frac{1}{3}$', '$\\frac{7}{3}$'],
      answer: 0,
      solution:
        'Both numbers end in $5$, so both are multiples of $5$: $15 \\div 5 = 3$ and $35 \\div 5 = 7$, giving $\\frac{3}{7}$. Dividing only the top gives $\\frac{3}{35}$, subtracting $5$ from each gives $\\frac{10}{30} = \\frac{1}{3}$, and $\\frac{7}{3}$ is the answer flipped.',
    },
    {
      q: 'Simplify $\\frac{21}{28}$.',
      choices: ['$\\frac{7}{4}$', '$\\frac{3}{4}$', '$\\frac{3}{28}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Both $21$ and $28$ are in the $7$ times table: $21 \\div 7 = 3$ and $28 \\div 7 = 4$, so the answer is $\\frac{3}{4}$. Dividing only the bottom gives $\\frac{7}{4}$, dividing only the top gives $\\frac{3}{28}$, and subtracting $7$ from each gives $\\frac{14}{21} = \\frac{2}{3}$.',
    },
    {
      q: 'The fraction $\\frac{18}{n}$ simplifies to $\\frac{3}{7}$. What is $n$?',
      choices: ['$7$', '$21$', '$36$', '$42$'],
      answer: 3,
      solution:
        'Going from $3$ up to $18$ multiplies the top by $6$, so the bottom must be multiplied by the same $6$: $n = 7 \\times 6 = 42$. Check: $\\frac{18}{42}$ divided top and bottom by $6$ is $\\frac{3}{7}$. ✓ Multiplying by $3$ instead gives $21$, and doubling $18$ gives $36$.',
    },
  ],
  // p4 — spot the fraction that is already reduced
  [
    {
      q: 'Exactly one of these four fractions cannot be reduced any further. Which one?',
      choices: ['$\\frac{7}{16}$', '$\\frac{14}{21}$', '$\\frac{15}{25}$', '$\\frac{9}{6}$'],
      answer: 0,
      solution:
        'Hunt for a shared factor in each. $14$ and $21$ share $7$; $15$ and $25$ share $5$; $9$ and $6$ share $3$. But $7$ is prime and $16 = 2^4$, so those two share nothing bigger than $1$ — $\\frac{7}{16}$ is fully reduced.',
    },
    {
      q: 'Which fraction in this list is fully reduced?',
      choices: ['$\\frac{12}{18}$', '$\\frac{9}{20}$', '$\\frac{14}{16}$', '$\\frac{25}{35}$'],
      answer: 1,
      solution:
        'Check each pair: $12$ and $18$ share $6$, $14$ and $16$ share $2$, and $25$ and $35$ share $5$. For $\\frac{9}{20}$, we have $9 = 3^2$ and $20 = 2^2 \\times 5$ — no prime appears in both lists, so it cannot be reduced.',
    },
    {
      q: 'Which of these fractions is NOT in simplest form?',
      choices: ['$\\frac{5}{12}$', '$\\frac{11}{14}$', '$\\frac{21}{28}$', '$\\frac{9}{16}$'],
      answer: 2,
      solution:
        'This time you are hunting for the one that CAN be reduced. Both $21$ and $28$ are multiples of $7$, so $\\frac{21}{28} = \\frac{3}{4}$. The others share nothing: $5$ is prime and does not divide $12$, $11$ is prime and does not divide $14$, and $9 = 3^2$ shares no prime with $16 = 2^4$.',
    },
  ],
  // p5 — a bigger common factor, found in one step or several
  [
    {
      q: 'Simplify $\\frac{30}{48}$.',
      choices: ['$\\frac{4}{7}$', '$\\frac{5}{8}$', '$\\frac{5}{6}$', '$\\frac{8}{5}$'],
      answer: 1,
      solution:
        'The biggest shared factor is $6$: $30 \\div 6 = 5$ and $48 \\div 6 = 8$, so the answer is $\\frac{5}{8}$. Steps work too — divide by $2$ for $\\frac{15}{24}$, then by $3$ for $\\frac{5}{8}$. Subtracting $6$ from each would give $\\frac{24}{42} = \\frac{4}{7}$, a different number, and dividing the bottom by $8$ instead of $6$ gives $\\frac{5}{6}$.',
    },
    {
      q: 'Simplify $\\frac{48}{60}$.',
      choices: ['$\\frac{3}{4}$', '$\\frac{8}{5}$', '$\\frac{4}{5}$', '$\\frac{5}{4}$'],
      answer: 2,
      solution:
        'The greatest common factor of $48$ and $60$ is $12$: $48 \\div 12 = 4$ and $60 \\div 12 = 5$, giving $\\frac{4}{5}$. Subtracting $12$ from each would give $\\frac{36}{48} = \\frac{3}{4}$, dividing the top by only $6$ gives $\\frac{8}{5}$, and $\\frac{5}{4}$ is the answer upside down.',
    },
    {
      q: 'What is the greatest common factor you should divide out to simplify $\\frac{54}{72}$ in a single step?',
      choices: ['$6$', '$9$', '$2$', '$18$'],
      answer: 3,
      solution:
        'Factor both: $54 = 2 \\times 3^3$ and $72 = 2^3 \\times 3^2$. They share one $2$ and two $3$s, so the greatest common factor is $2 \\times 3 \\times 3 = 18$. Dividing out $18$ gives $\\frac{3}{4}$ right away. Using $2$, $6$, or $9$ works but leaves more simplifying to do.',
    },
  ],
  // p6 — two-digit numbers, factor of 7 or 15
  [
    {
      q: 'Simplify $\\frac{35}{56}$.',
      choices: ['$\\frac{5}{8}$', '$\\frac{5}{56}$', '$\\frac{7}{8}$', '$\\frac{8}{5}$'],
      answer: 0,
      solution:
        'Both numbers are multiples of $7$: $35 \\div 7 = 5$ and $56 \\div 7 = 8$, giving $\\frac{5}{8}$. Dividing only the top gives $\\frac{5}{56}$, dividing the top by $5$ while dividing the bottom by $7$ gives $\\frac{7}{8}$, and $\\frac{8}{5}$ is the flip.',
    },
    {
      q: 'Simplify $\\frac{56}{70}$.',
      choices: ['$\\frac{8}{7}$', '$\\frac{5}{4}$', '$\\frac{4}{5}$', '$\\frac{4}{7}$'],
      answer: 2,
      solution:
        'Both are even and both are multiples of $7$, so the greatest common factor is $14$: $56 \\div 14 = 4$ and $70 \\div 14 = 5$, giving $\\frac{4}{5}$. Dividing the top by $7$ but the bottom by $10$ gives $\\frac{8}{7}$, dividing the bottom by $10$ instead of $14$ gives $\\frac{4}{7}$, and $\\frac{5}{4}$ is upside down.',
    },
    {
      q: 'Simplify $\\frac{75}{90}$.',
      choices: ['$\\frac{5}{9}$', '$\\frac{4}{5}$', '$\\frac{6}{5}$', '$\\frac{5}{6}$'],
      answer: 3,
      solution:
        'Both numbers are multiples of $15$: $75 \\div 15 = 5$ and $90 \\div 15 = 6$, so the answer is $\\frac{5}{6}$. Dividing the bottom by $10$ instead of $15$ gives $\\frac{5}{9}$, subtracting $15$ from each gives $\\frac{60}{75} = \\frac{4}{5}$, and $\\frac{6}{5}$ is the flip.',
    },
  ],
  // p7 — prime factorization does the work
  [
    {
      q: 'Use prime factorization to simplify $\\frac{66}{154}$.',
      choices: ['$\\frac{3}{7}$', '$\\frac{7}{3}$', '$\\frac{3}{11}$', '$\\frac{1}{7}$'],
      answer: 0,
      solution:
        'Factor each: $66 = 2 \\times 3 \\times 11$ and $154 = 2 \\times 7 \\times 11$. The shared primes are $2$ and $11$; cancel one of each. A $3$ survives on top and a $7$ below, giving $\\frac{3}{7}$. Cancelling the $7$ instead of the $11$ gives $\\frac{3}{11}$, and cancelling the $3$ as though it were shared gives $\\frac{1}{7}$.',
    },
    {
      q: 'Use prime factorization to simplify $\\frac{90}{126}$.',
      choices: ['$\\frac{5}{9}$', '$\\frac{5}{7}$', '$1$', '$\\frac{7}{5}$'],
      answer: 1,
      solution:
        'Factor each: $90 = 2 \\times 3^2 \\times 5$ and $126 = 2 \\times 3^2 \\times 7$. The $2$ and both $3$s cancel, leaving $5$ on top and $7$ below: $\\frac{5}{7}$. Cancelling the $5$ against the $7$ as well would wrongly give $1$, dividing the bottom by $14$ instead of $18$ gives $\\frac{5}{9}$, and $\\frac{7}{5}$ is the answer flipped.',
    },
    {
      q: 'Use prime factorization to simplify $\\frac{132}{198}$.',
      choices: ['$\\frac{3}{2}$', '$\\frac{1}{3}$', '$2$', '$\\frac{2}{3}$'],
      answer: 3,
      solution:
        'Factor each: $132 = 2^2 \\times 3 \\times 11$ and $198 = 2 \\times 3^2 \\times 11$. Cancel one $2$, one $3$, and one $11$ from each side. That leaves a single $2$ on top and a single $3$ below: $\\frac{2}{3}$. Over-cancelling both $2$s on top gives $\\frac{1}{3}$, over-cancelling both $3$s on the bottom gives $2$, and $\\frac{3}{2}$ is the flip.',
    },
  ],
  // p8 — knowing when you are finished
  [
    {
      q: 'Priya simplified $\\frac{36}{54}$ by dividing top and bottom by $6$, getting $\\frac{6}{9}$. What should she do next?',
      choices: [
        'Nothing — $\\frac{6}{9}$ is in simplest form',
        'Divide top and bottom by $3$ to get $\\frac{2}{3}$',
        'Divide top and bottom by $6$ again',
        'Multiply top and bottom by $2$',
      ],
      answer: 1,
      solution:
        'Simplifying is not finished until the top and bottom share nothing — and $6$ and $9$ are both multiples of $3$. One more division by $3$ gives $\\frac{2}{3}$. Dividing by $6$ again is impossible ($9$ is not a multiple of $6$), and multiplying by $2$ marches back in the wrong direction.',
    },
    {
      q: 'Which of these is a sure sign that a fraction is NOT yet in simplest form?',
      choices: [
        'The top is smaller than the bottom',
        'The bottom is a prime number',
        'The top and the bottom are both even',
        'The top is $1$',
      ],
      answer: 2,
      solution:
        'If both numbers are even they share a factor of $2$, so the fraction can always be reduced further. The other three tell you nothing: $\\frac{3}{7}$ has a smaller top, a prime bottom, and is already reduced, while $\\frac{1}{6}$ has a $1$ on top and is also already reduced.',
    },
    {
      q: 'Leo simplifies $\\frac{20}{30}$ to $\\frac{2}{3}$ by crossing off one zero from the top and one from the bottom. Is his shortcut a real rule?',
      choices: [
        'Yes — crossing off matching digits always works',
        'Yes, as long as both numbers are even',
        'No — it never gives the right answer',
        'It worked here because crossing off a zero is really dividing by $10$, but crossing off digits is not a general rule',
      ],
      answer: 3,
      solution:
        'Removing a final zero divides a number by $10$, so Leo really divided top and bottom by $10$ — a legal move that happens to be hidden by the notation. Crossing off digits in general is not legal: try it on $\\frac{16}{61}$ and you would get $\\frac{1}{1}$, which is nonsense.',
    },
  ],
  // p9 — cancel inside prime factorizations
  [
    {
      q: 'Simplify $\\frac{2 \\times 3^3 \\times 5^2}{2^2 \\times 3^2 \\times 5}$.',
      choices: ['$\\frac{15}{2}$', '$\\frac{2}{15}$', '$\\frac{3}{2}$', '$\\frac{5}{2}$'],
      answer: 0,
      solution:
        'Take one prime at a time. The single $2$ on top cancels one of the two below, leaving a $2$ underneath. Of the three $3$s on top, two cancel, leaving one $3$ up top. Of the two $5$s on top, one cancels, leaving one $5$ up top. So the answer is $\\frac{3 \\times 5}{2} = \\frac{15}{2}$. Wiping out both $5$s gives $\\frac{3}{2}$ and wiping out all the $3$s gives $\\frac{5}{2}$.',
    },
    {
      q: 'Simplify $\\frac{2^4 \\times 7}{2^2 \\times 7^2}$.',
      choices: ['$\\frac{2}{7}$', '$\\frac{4}{7}$', '$\\frac{7}{4}$', '$\\frac{4}{49}$'],
      answer: 1,
      solution:
        'Four $2$s on top, two below: two cancel and $2^2 = 4$ survives on top. One $7$ on top and two below: one cancels and a single $7$ survives below. The answer is $\\frac{4}{7}$. Writing the leftover as $2$ instead of $2^2$ gives $\\frac{2}{7}$, and forgetting to cancel a $7$ gives $\\frac{4}{49}$.',
    },
    {
      q: 'Simplify $\\frac{3^2 \\times 5 \\times 11}{3 \\times 5^2 \\times 11}$.',
      choices: ['$\\frac{5}{3}$', '$\\frac{9}{25}$', '$\\frac{3}{5}$', '$1$'],
      answer: 2,
      solution:
        'The $11$s cancel completely. One of the two $3$s on top cancels the $3$ below, leaving a $3$ on top. One of the two $5$s below cancels the $5$ on top, leaving a $5$ below. What survives is $\\frac{3}{5}$. Cancelling the leftovers too would wrongly give $1$, and cancelling nothing but the $11$ leaves $\\frac{9}{25}$.',
    },
  ],
  // p10 — build the fraction from a word problem, then reduce
  [
    {
      q: 'A shelf holds $20$ novels and $28$ comics. What fraction of the books on the shelf are novels, in simplest form?',
      choices: ['$\\frac{5}{12}$', '$\\frac{5}{7}$', '$\\frac{7}{12}$', '$\\frac{7}{5}$'],
      answer: 0,
      solution:
        'The shelf holds $20 + 28 = 48$ books, so novels are $\\frac{20}{48}$. Divide top and bottom by $4$: $\\frac{5}{12}$. Watch the traps: $\\frac{20}{28} = \\frac{5}{7}$ compares novels to COMICS, and $\\frac{28}{48} = \\frac{7}{12}$ is the comics’ share.',
    },
    {
      q: 'A jar holds $15$ red marbles and $25$ blue marbles. What fraction of the marbles are red, in simplest form?',
      choices: ['$\\frac{3}{5}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{5}{3}$'],
      answer: 2,
      solution:
        'The jar holds $15 + 25 = 40$ marbles, so the red share is $\\frac{15}{40}$. Divide top and bottom by $5$: $\\frac{3}{8}$. Comparing red to blue instead gives $\\frac{15}{25} = \\frac{3}{5}$, and $\\frac{25}{40} = \\frac{5}{8}$ is the blue share.',
    },
    {
      q: 'Of the $36$ students in a club, $27$ ride the bus. What fraction of the club does NOT ride the bus, in simplest form?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{3}$', '$3$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'First find the group you actually want: $36 - 27 = 9$ students do not ride. Their share is $\\frac{9}{36}$, and dividing top and bottom by $9$ gives $\\frac{1}{4}$. The riders’ share is $\\frac{27}{36} = \\frac{3}{4}$, and comparing the two groups to each other gives $\\frac{9}{27} = \\frac{1}{3}$ or $\\frac{27}{9} = 3$.',
    },
  ],
]

const s46 = [
  // p1 — same denominator
  [
    {
      q: 'Which is bigger: $\\frac{7}{11}$ or $\\frac{4}{11}$?',
      choices: ['$\\frac{7}{11}$', '$\\frac{4}{11}$', 'They are equal', 'It depends on the size of the whole'],
      answer: 0,
      solution:
        'Both fractions count elevenths, so the pieces are exactly the same size. Seven pieces beat four pieces: $\\frac{7}{11} > \\frac{4}{11}$. With a shared denominator you never need common denominators — just read the tops.',
    },
    {
      q: 'Three friends each have an identical granola bar scored into $9$ equal pieces. Ana eats $\\frac{2}{9}$ of hers, Ben eats $\\frac{5}{9}$ of his, and Cleo eats $\\frac{4}{9}$ of hers. Who eats the most?',
      choices: ['Ana', 'Ben', 'Cleo', 'They all eat the same amount'],
      answer: 1,
      solution:
        'The bars are identical and each is cut into $9$ equal pieces, so every piece is the same size. Whoever eats the most pieces eats the most granola bar. The counts are $2$, $5$, and $4$, and $5$ is the largest, so Ben eats the most.',
    },
    {
      q: 'What number can go in the box to make $\\frac{\\square}{13} > \\frac{9}{13}$ true?',
      choices: ['$5$', '$9$', '$2$', '$11$'],
      answer: 3,
      solution:
        'Both sides count thirteenths, so the box just has to hold more than $9$. Of the choices, only $11$ does. Putting $9$ in the box gives equality, not a bigger fraction, and $5$ and $2$ make the left side smaller.',
    },
  ],
  // p2 — same numerator
  [
    {
      q: 'Which is bigger: $\\frac{1}{4}$ or $\\frac{1}{9}$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{4}$', 'They are equal', 'Impossible to tell'],
      answer: 1,
      solution:
        'Both are one single piece, so the question is which piece is bigger. Cutting a whole into $4$ parts makes chunkier pieces than cutting it into $9$ parts, so $\\frac{1}{4} > \\frac{1}{9}$. With matching tops, the smaller bottom wins.',
    },
    {
      q: 'Which is bigger: $\\frac{3}{7}$ or $\\frac{3}{10}$?',
      choices: ['$\\frac{3}{10}$', 'They are equal', '$\\frac{3}{7}$', 'Impossible to tell'],
      answer: 2,
      solution:
        'You are taking three pieces either way, so the bigger pieces win. Sevenths are bigger than tenths, so $\\frac{3}{7} > \\frac{3}{10}$. (Check with a common denominator if you like: $\\frac{30}{70}$ versus $\\frac{21}{70}$.)',
    },
    {
      q: 'Two identical cakes are on the table. One is cut into $6$ equal slices and the other into $8$ equal slices. If you want as much cake as possible, which single slice should you take?',
      choices: [
        'A slice from the $8$-piece cake, because $8$ is more than $6$',
        'Either one — the slices are the same size',
        'It depends on who does the cutting',
        'A slice from the $6$-piece cake, because fewer pieces means bigger pieces',
      ],
      answer: 3,
      solution:
        'The two cakes are the same size, so the one split into fewer pieces has larger pieces. You are choosing between $\\frac{1}{6}$ and $\\frac{1}{8}$ of the same cake, and $\\frac{1}{6}$ is bigger. More slices does not mean more cake per slice — it means less.',
    },
  ],
  // p3 — rewrite over a common denominator
  [
    {
      q: 'Which is bigger: $\\frac{3}{5}$ or $\\frac{5}{8}$?',
      choices: ['$\\frac{5}{8}$', '$\\frac{3}{5}$', 'They are equal', 'Impossible to tell'],
      answer: 0,
      solution:
        'Both $5$ and $8$ divide into $40$, so rewrite: $\\frac{3}{5} = \\frac{24}{40}$ and $\\frac{5}{8} = \\frac{25}{40}$. Now the tops decide, and $25 > 24$, so $\\frac{5}{8}$ is bigger — but only just.',
    },
    {
      q: 'Which is bigger: $\\frac{4}{9}$ or $\\frac{3}{7}$?',
      choices: ['$\\frac{3}{7}$', '$\\frac{4}{9}$', 'They are equal', 'Impossible to tell'],
      answer: 1,
      solution:
        'Use the common denominator $63$: $\\frac{4}{9} = \\frac{28}{63}$ and $\\frac{3}{7} = \\frac{27}{63}$. Since $28 > 27$, the winner is $\\frac{4}{9}$. (Both are just under $\\frac{1}{2}$, which is why they are so close.)',
    },
    {
      q: 'Which pair correctly rewrites $\\frac{5}{6}$ and $\\frac{7}{8}$ over a common denominator?',
      choices: [
        '$\\frac{5}{48}$ and $\\frac{7}{48}$',
        '$\\frac{10}{24}$ and $\\frac{14}{24}$',
        '$\\frac{20}{24}$ and $\\frac{21}{24}$',
        '$\\frac{6}{24}$ and $\\frac{8}{24}$',
      ],
      answer: 2,
      solution:
        'Both $6$ and $8$ divide into $24$. Going from $6$ to $24$ multiplies by $4$, so the top must be multiplied by $4$ too: $\\frac{5}{6} = \\frac{20}{24}$. Going from $8$ to $24$ multiplies by $3$, so $\\frac{7}{8} = \\frac{21}{24}$. Changing only the bottom, as in the other choices, changes the value.',
    },
  ],
  // p4 — the benchmark 1
  [
    {
      q: 'Exactly one of these fractions is worth more than a whole. Which one?',
      choices: ['$\\frac{13}{12}$', '$\\frac{11}{12}$', '$\\frac{12}{13}$', '$\\frac{12}{12}$'],
      answer: 0,
      solution:
        'A fraction is bigger than $1$ exactly when its top is bigger than its bottom — that means you have more than a whole set of pieces. Only $\\frac{13}{12}$ qualifies. Note $\\frac{12}{12} = 1$ exactly, so it does not count as greater.',
    },
    {
      q: 'Which of these fractions is less than $1$?',
      choices: ['$\\frac{9}{4}$', '$\\frac{7}{7}$', '$\\frac{6}{7}$', '$\\frac{7}{6}$'],
      answer: 2,
      solution:
        'A fraction is below $1$ when its top is smaller than its bottom, meaning you do not have enough pieces to finish a whole. That happens only for $\\frac{6}{7}$. Meanwhile $\\frac{7}{7} = 1$, and $\\frac{7}{6}$ and $\\frac{9}{4}$ are both above $1$.',
    },
    {
      q: 'Which of these fractions is NOT greater than $1$?',
      choices: ['$\\frac{17}{16}$', '$\\frac{9}{8}$', '$\\frac{5}{4}$', '$\\frac{15}{16}$'],
      answer: 3,
      solution:
        'Compare each top with its bottom: $17 > 16$, $9 > 8$, and $5 > 4$, so those three are all above $1$. But $15 < 16$, so $\\frac{15}{16}$ is just short of a whole. Being close to $1$ is not the same as reaching it.',
    },
  ],
  // p5 — the cross-multiplying shortcut
  [
    {
      q: 'Use cross-multiplication to decide which is bigger: $\\frac{7}{10}$ or $\\frac{5}{7}$.',
      choices: ['$\\frac{5}{7}$', '$\\frac{7}{10}$', 'They are equal', 'Cross-multiplication cannot decide this'],
      answer: 0,
      solution:
        'Multiply upward and diagonally: $7 \\times 7 = 49$ belongs to $\\frac{7}{10}$, and $10 \\times 5 = 50$ belongs to $\\frac{5}{7}$. Since $50 > 49$, the bigger fraction is $\\frac{5}{7}$. Those products are the tops over the common denominator $70$.',
    },
    {
      q: 'Use cross-multiplication to decide which is bigger: $\\frac{6}{11}$ or $\\frac{5}{9}$.',
      choices: ['$\\frac{6}{11}$', '$\\frac{5}{9}$', 'They are equal', 'Cross-multiplication cannot decide this'],
      answer: 1,
      solution:
        'Cross-multiply: $6 \\times 9 = 54$ goes with $\\frac{6}{11}$, and $11 \\times 5 = 55$ goes with $\\frac{5}{9}$. Since $55 > 54$, the winner is $\\frac{5}{9}$. Over the common denominator $99$ these are $\\frac{54}{99}$ and $\\frac{55}{99}$ — a one-piece difference.',
    },
    {
      q: 'To compare $\\frac{3}{8}$ and $\\frac{4}{11}$ by cross-multiplication, which two products should you compare?',
      choices: [
        '$3 \\times 4$ and $8 \\times 11$',
        '$3 \\times 8$ and $4 \\times 11$',
        '$3 + 11$ and $8 + 4$',
        '$3 \\times 11$ and $8 \\times 4$',
      ],
      answer: 3,
      solution:
        'Each product pairs a top with the OTHER fraction’s bottom: $3 \\times 11 = 33$ belongs to $\\frac{3}{8}$, and $8 \\times 4 = 32$ belongs to $\\frac{4}{11}$. Since $33 > 32$, we get $\\frac{3}{8} > \\frac{4}{11}$. Multiplying the two tops together, or a top by its own bottom, tells you nothing.',
    },
  ],
  // p6 — the benchmark one half
  [
    {
      q: 'Exactly one of these fractions sits below the benchmark $\\frac{1}{2}$. Which one?',
      choices: ['$\\frac{7}{13}$', '$\\frac{5}{11}$', '$\\frac{9}{16}$', '$\\frac{6}{11}$'],
      answer: 1,
      solution:
        'A fraction is below $\\frac{1}{2}$ when doubling its top still does not reach its bottom. Check: $2 \\times 5 = 10 < 11$. ✓ The others all overshoot — $14 > 13$, $18 > 16$, and $12 > 11$ — so they sit above $\\frac{1}{2}$.',
    },
    {
      q: 'Which of these fractions is greater than $\\frac{1}{2}$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{7}{15}$', '$\\frac{8}{15}$', '$\\frac{5}{11}$'],
      answer: 2,
      solution:
        'Double each top and compare with its bottom. For $\\frac{8}{15}$: $2 \\times 8 = 16 > 15$, so it clears the halfway mark. The others fall short: $8 < 9$, $14 < 15$, and $10 < 11$.',
    },
    {
      q: 'Is $\\frac{13}{25}$ more or less than $\\frac{1}{2}$, and why?',
      choices: [
        'Less, because $13$ is a small number',
        'Less, because $25$ is an odd number',
        'Equal, because $13$ is about half of $25$',
        'More, because $2 \\times 13 = 26$ is bigger than $25$',
      ],
      answer: 3,
      solution:
        'Half of $25$ would be $12\\frac{1}{2}$, and $13$ is past that. The clean test: double the top and compare with the bottom. Since $26 > 25$, the fraction is more than $\\frac{1}{2}$ — but only by $\\frac{1}{50}$, so "about half" is a fair description even though it is not exactly half.',
    },
  ],
  // p7 — how far each fraction is from a whole
  [
    {
      q: 'Which is bigger: $\\frac{5}{6}$ or $\\frac{6}{7}$?',
      choices: ['$\\frac{6}{7}$', '$\\frac{5}{6}$', 'They are equal', 'Neither — both are greater than $1$'],
      answer: 0,
      solution:
        'Each fraction is exactly one piece short of a whole: $\\frac{5}{6}$ is missing $\\frac{1}{6}$, and $\\frac{6}{7}$ is missing $\\frac{1}{7}$. The smaller gap belongs to $\\frac{6}{7}$, so it sits closer to $1$ and is the bigger number. (Over $42$: $\\frac{35}{42}$ versus $\\frac{36}{42}$.)',
    },
    {
      q: 'Which is bigger: $\\frac{9}{10}$ or $\\frac{11}{12}$?',
      choices: ['$\\frac{9}{10}$', 'They are equal', '$\\frac{11}{12}$', 'Neither — both equal $1$'],
      answer: 2,
      solution:
        'Both are one piece short of a whole. The gaps are $\\frac{1}{10}$ and $\\frac{1}{12}$, and twelfths are smaller than tenths, so $\\frac{11}{12}$ has the smaller gap and is therefore bigger. Neither one reaches $1$, since both tops are smaller than their bottoms.',
    },
    {
      q: 'Each of these fractions is exactly one piece short of a whole. Which one is the SMALLEST?',
      choices: ['$\\frac{6}{7}$', '$\\frac{9}{10}$', '$\\frac{11}{12}$', '$\\frac{4}{5}$'],
      answer: 3,
      solution:
        'The smallest fraction is the one with the BIGGEST gap below $1$. The gaps are $\\frac{1}{7}$, $\\frac{1}{10}$, $\\frac{1}{12}$, and $\\frac{1}{5}$. Fifths are the chunkiest of those, so $\\frac{4}{5}$ falls furthest short of a whole and is the smallest.',
    },
  ],
  // p8 — order three fractions
  [
    {
      q: 'Which list orders $\\frac{3}{4}$, $\\frac{2}{3}$, and $\\frac{5}{8}$ from least to greatest?',
      choices: [
        '$\\frac{5}{8} < \\frac{2}{3} < \\frac{3}{4}$',
        '$\\frac{2}{3} < \\frac{5}{8} < \\frac{3}{4}$',
        '$\\frac{3}{4} < \\frac{2}{3} < \\frac{5}{8}$',
        '$\\frac{5}{8} < \\frac{3}{4} < \\frac{2}{3}$',
      ],
      answer: 0,
      solution:
        'All three bottoms divide into $24$: $\\frac{3}{4} = \\frac{18}{24}$, $\\frac{2}{3} = \\frac{16}{24}$, and $\\frac{5}{8} = \\frac{15}{24}$. The tops line up as $15 < 16 < 18$, so the order is $\\frac{5}{8} < \\frac{2}{3} < \\frac{3}{4}$.',
    },
    {
      q: 'Which list orders $\\frac{4}{5}$, $\\frac{7}{10}$, and $\\frac{3}{4}$ from greatest to least?',
      choices: [
        '$\\frac{4}{5} > \\frac{7}{10} > \\frac{3}{4}$',
        '$\\frac{4}{5} > \\frac{3}{4} > \\frac{7}{10}$',
        '$\\frac{7}{10} > \\frac{3}{4} > \\frac{4}{5}$',
        '$\\frac{3}{4} > \\frac{4}{5} > \\frac{7}{10}$',
      ],
      answer: 1,
      solution:
        'Use the common denominator $20$: $\\frac{4}{5} = \\frac{16}{20}$, $\\frac{7}{10} = \\frac{14}{20}$, and $\\frac{3}{4} = \\frac{15}{20}$. Reading the tops from big to small gives $16 > 15 > 14$, so the order is $\\frac{4}{5} > \\frac{3}{4} > \\frac{7}{10}$. Careful — this question asks for greatest FIRST.',
    },
    {
      q: 'Which list orders $\\frac{5}{9}$, $\\frac{1}{2}$, and $\\frac{7}{12}$ from least to greatest?',
      choices: [
        '$\\frac{5}{9} < \\frac{1}{2} < \\frac{7}{12}$',
        '$\\frac{1}{2} < \\frac{7}{12} < \\frac{5}{9}$',
        '$\\frac{1}{2} < \\frac{5}{9} < \\frac{7}{12}$',
        '$\\frac{7}{12} < \\frac{5}{9} < \\frac{1}{2}$',
      ],
      answer: 2,
      solution:
        'The bottoms $9$, $2$, and $12$ all divide into $36$: $\\frac{5}{9} = \\frac{20}{36}$, $\\frac{1}{2} = \\frac{18}{36}$, and $\\frac{7}{12} = \\frac{21}{36}$. Since $18 < 20 < 21$, the order is $\\frac{1}{2} < \\frac{5}{9} < \\frac{7}{12}$. The benchmark test agrees that both of the others beat $\\frac{1}{2}$.',
    },
  ],
  // p9 — pick the extreme out of four
  [
    {
      q: 'Which of these four fractions is the largest: $\\frac{3}{4}$, $\\frac{5}{8}$, $\\frac{13}{16}$, or $\\frac{11}{16}$?',
      choices: ['$\\frac{3}{4}$', '$\\frac{13}{16}$', '$\\frac{5}{8}$', '$\\frac{11}{16}$'],
      answer: 1,
      solution:
        'Every bottom divides into $16$: the four fractions become $\\frac{12}{16}$, $\\frac{10}{16}$, $\\frac{13}{16}$, and $\\frac{11}{16}$. The biggest top is $13$, so $\\frac{13}{16}$ wins.',
    },
    {
      q: 'Which of these four fractions is the SMALLEST: $\\frac{7}{10}$, $\\frac{3}{5}$, $\\frac{13}{20}$, or $\\frac{3}{4}$?',
      choices: ['$\\frac{7}{10}$', '$\\frac{13}{20}$', '$\\frac{3}{5}$', '$\\frac{3}{4}$'],
      answer: 2,
      solution:
        'Put them all over $20$: $\\frac{7}{10} = \\frac{14}{20}$, $\\frac{3}{5} = \\frac{12}{20}$, $\\frac{13}{20}$ stays, and $\\frac{3}{4} = \\frac{15}{20}$. The smallest top is $12$, so $\\frac{3}{5}$ is the smallest. Do not be fooled by $\\frac{3}{4}$ having the same small top — the bottoms matter too.',
    },
    {
      q: 'Which of these four fractions is the largest: $\\frac{5}{12}$, $\\frac{1}{2}$, $\\frac{4}{9}$, or $\\frac{11}{18}$?',
      choices: ['$\\frac{5}{12}$', '$\\frac{4}{9}$', '$\\frac{1}{2}$', '$\\frac{11}{18}$'],
      answer: 3,
      solution:
        'The bottoms $12$, $2$, $9$, and $18$ all divide into $36$: the fractions become $\\frac{15}{36}$, $\\frac{18}{36}$, $\\frac{16}{36}$, and $\\frac{22}{36}$. The biggest top is $22$, so $\\frac{11}{18}$ wins. The benchmark test spots it fast too — it is the only one above $\\frac{1}{2}$.',
    },
  ],
  // p10 — find a fraction squeezed between two others
  [
    {
      q: 'Which fraction lies between $\\frac{1}{4}$ and $\\frac{1}{3}$?',
      choices: ['$\\frac{7}{24}$', '$\\frac{1}{5}$', '$\\frac{5}{12}$', '$\\frac{3}{8}$'],
      answer: 0,
      solution:
        'Put the fences over $24$: $\\frac{1}{4} = \\frac{6}{24}$ and $\\frac{1}{3} = \\frac{8}{24}$. That leaves exactly one twenty-fourth in between, $\\frac{7}{24}$. The others miss: $\\frac{1}{5}$ is below the low fence (matching tops, and $5 > 4$ means smaller pieces), while $\\frac{3}{8} = \\frac{9}{24}$ and $\\frac{5}{12} = \\frac{10}{24}$ are both above the high one.',
    },
    {
      q: 'Which fraction lies between $\\frac{2}{5}$ and $\\frac{1}{2}$?',
      choices: ['$\\frac{3}{10}$', '$\\frac{9}{20}$', '$\\frac{3}{5}$', '$\\frac{7}{20}$'],
      answer: 1,
      solution:
        'Rewrite the fences over $20$: $\\frac{2}{5} = \\frac{8}{20}$ and $\\frac{1}{2} = \\frac{10}{20}$. The fraction $\\frac{9}{20}$ slides neatly between them. Both $\\frac{7}{20}$ and $\\frac{3}{10} = \\frac{6}{20}$ fall below the low fence, and $\\frac{3}{5} = \\frac{12}{20}$ sails over the high one.',
    },
    {
      q: 'Which fraction lies between $\\frac{3}{4}$ and $\\frac{7}{8}$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{15}{16}$', '$\\frac{5}{8}$', '$\\frac{5}{6}$'],
      answer: 3,
      solution:
        'Use the common denominator $24$: the fences are $\\frac{3}{4} = \\frac{18}{24}$ and $\\frac{7}{8} = \\frac{21}{24}$. Now check the choices: $\\frac{5}{6} = \\frac{20}{24}$ lands inside. The others do not — $\\frac{2}{3} = \\frac{16}{24}$ and $\\frac{5}{8} = \\frac{15}{24}$ are too small, and $\\frac{15}{16}$ is bigger than $\\frac{7}{8}$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 4,
  sections: {
    '4.4': s44,
    '4.5': s45,
    '4.6': s46,
  },
}
