// Prealgebra chapter 2 — variations for section 2.4, the chapter challenge,
// and the chapter worksheet. All problems and solutions are original
// MathQuest content.

const s24 = [
  // 1. A small negative exponent on a whole-number base.
  [
    {
      q: 'What is $3^{-2}$?',
      choices: ['$\\frac{1}{9}$', '$-9$', '$-6$', '$\\frac{1}{6}$'],
      answer: 0,
      solution: 'A negative exponent asks for a reciprocal, not a negative number: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$. The two tempting wrong turns are stamping a minus sign onto $9$, and multiplying the base by the exponent to get $6$ — neither one is what the exponent says.',
    },
    {
      q: 'What is $5^{-3}$?',
      choices: ['$-125$', '$\\frac{1}{15}$', '$\\frac{1}{125}$', '$-15$'],
      answer: 2,
      solution: 'Flip first, then evaluate: $5^{-3} = \\frac{1}{5^3}$, and $5^3 = 5 \\cdot 5 \\cdot 5 = 125$, so the answer is $\\frac{1}{125}$. Watch the staircase: $5^0 = 1$, $5^{-1} = \\frac{1}{5}$, $5^{-2} = \\frac{1}{25}$, $5^{-3} = \\frac{1}{125}$ — each step divides by $5$ again.',
    },
    {
      q: 'What is $4^{-2}$?',
      choices: ['$-16$', '$\\frac{1}{8}$', '$-8$', '$\\frac{1}{16}$'],
      answer: 3,
      solution: 'The rule is $a^{-n} = \\frac{1}{a^n}$, so $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$. If you multiplied $4 \\cdot 2$ you would land on $8$, but the exponent counts factors, it does not multiply.',
    },
  ],
  // 2. Negative exponent on a round base.
  [
    {
      q: 'What is $10^{-4}$?',
      choices: ['$\\frac{1}{10{,}000}$', '$-10{,}000$', '$\\frac{1}{40}$', '$-40$'],
      answer: 0,
      solution: 'Each factor of $10$ in the denominator adds a zero: $10^{-4} = \\frac{1}{10^4} = \\frac{1}{10{,}000}$. The exponent $-4$ says "divide by $10$ four times," starting from $10^0 = 1$.',
    },
    {
      q: 'What is $20^{-2}$?',
      choices: ['$-400$', '$\\frac{1}{400}$', '$\\frac{1}{40}$', '$-40$'],
      answer: 1,
      solution: 'Take the reciprocal of the square, not of the base: $20^{-2} = \\frac{1}{20^2} = \\frac{1}{400}$. Squaring $20$ means $20 \\cdot 20 = 400$; doubling it to $40$ would answer a different question.',
    },
    {
      q: 'What is $50^{-2}$?',
      choices: ['$-2500$', '$\\frac{1}{100}$', '$\\frac{1}{2500}$', '$-100$'],
      answer: 2,
      solution: 'First square: $50^2 = 50 \\cdot 50 = 2500$. Then flip: $50^{-2} = \\frac{1}{2500}$. A big base with a negative exponent gives a very small positive number — never a negative one.',
    },
  ],
  // 3. Rewrite "one over a power" using a negative exponent.
  [
    {
      q: 'Write $\\frac{1}{64}$ as a power of $4$.',
      choices: ['$4^{-3}$', '$4^{3}$', '$4^{-4}$', '$-4^{3}$'],
      answer: 0,
      solution: 'First figure out how many $4$s make $64$: $4 \\cdot 4 = 16$ and $16 \\cdot 4 = 64$, so $64 = 4^3$. Then $\\frac{1}{64} = \\frac{1}{4^3} = 4^{-3}$. The minus sign belongs in the exponent — writing $-4^3$ would give $-64$ instead.',
    },
    {
      q: 'Write $\\frac{1}{125}$ as a power of $5$.',
      choices: ['$5^{3}$', '$5^{-3}$', '$5^{-5}$', '$-5^{3}$'],
      answer: 1,
      solution: 'Since $5 \\cdot 5 \\cdot 5 = 125$, we have $125 = 5^3$. Therefore $\\frac{1}{125} = \\frac{1}{5^3} = 5^{-3}$. The exponent tells you how many $5$s are in the denominator — three of them, so $-3$.',
    },
    {
      q: 'The number $\\frac{1}{81}$ can be written as $3^{n}$. What is $n$?',
      choices: ['$4$', '$-2$', '$2$', '$-4$'],
      answer: 3,
      solution: 'Count factors of $3$ inside $81$: $3, 9, 27, 81$ — that is four of them, so $81 = 3^4$. Then $\\frac{1}{81} = \\frac{1}{3^4} = 3^{-4}$, which makes $n = -4$. If you had thought of $81$ as $9^2$ you would get the exponent $2$, but that is a power of $9$, not of $3$.',
    },
  ],
  // 4. Exponent of -1: the plain reciprocal.
  [
    {
      q: 'What is $12^{-1}$?',
      choices: ['$-12$', '$\\frac{1}{12}$', '$-\\frac{1}{12}$', '$12$'],
      answer: 1,
      solution: 'An exponent of $-1$ hands you the reciprocal: $12^{-1} = \\frac{1}{12}$. Follow the staircase down from $12^1 = 12$ to $12^0 = 1$ to $12^{-1} = 1 \\div 12 = \\frac{1}{12}$. Every step divides by $12$, and dividing a positive number never produces a negative one.',
    },
    {
      q: 'A number $n$ satisfies $n^{-1} = \\frac{1}{15}$. What is $n$?',
      choices: ['$-15$', '$\\frac{1}{15}$', '$15$', '$\\frac{1}{225}$'],
      answer: 2,
      solution: 'The equation says the reciprocal of $n$ is $\\frac{1}{15}$. Flipping a reciprocal gets you back to where you started, so $n = 15$. Check: $15^{-1} = \\frac{1}{15}$. ✓',
    },
    {
      q: 'What is $25^{-1}$?',
      choices: ['$-25$', '$-\\frac{1}{25}$', '$\\frac{1}{5}$', '$\\frac{1}{25}$'],
      answer: 3,
      solution: 'The exponent $-1$ means reciprocal and nothing else: $25^{-1} = \\frac{1}{25}$. Do not let the fact that $25 = 5^2$ tempt you into $\\frac{1}{5}$ — that would be $25^{-1/2}$, a different animal entirely.',
    },
  ],
  // 5. Dividing powers when the bottom is bigger.
  [
    {
      q: 'Evaluate $\\frac{3^4}{3^6}$.',
      choices: ['$\\frac{1}{9}$', '$9$', '$-9$', '$\\frac{1}{81}$'],
      answer: 0,
      solution: 'Subtract top exponent minus bottom exponent: $\\frac{3^4}{3^6} = 3^{4-6} = 3^{-2} = \\frac{1}{9}$. Cancelling shows the same thing: all four top $3$s cancel, and two $3$s are left downstairs. Subtracting the other way around would give $9$, which is upside down.',
    },
    {
      q: 'Evaluate $\\frac{5^2}{5^4}$.',
      choices: ['$25$', '$-25$', '$\\frac{1}{25}$', '$\\frac{1}{625}$'],
      answer: 2,
      solution: 'Dividing powers subtracts exponents: $\\frac{5^2}{5^4} = 5^{2-4} = 5^{-2} = \\frac{1}{25}$. The bottom carries two more factors of $5$ than the top, and those two survive in the denominator.',
    },
    {
      q: 'For which value of $n$ is $\\frac{2^{4}}{2^{n}} = \\frac{1}{8}$?',
      choices: ['$3$', '$-3$', '$1$', '$7$'],
      answer: 3,
      solution: 'Rewrite both sides as powers of $2$. The left side is $2^{4-n}$, and $\\frac{1}{8} = \\frac{1}{2^3} = 2^{-3}$. Matching exponents gives $4 - n = -3$, so $n = 7$. Check: $\\frac{2^4}{2^7} = 2^{-3} = \\frac{1}{8}$. ✓',
    },
  ],
  // 6. Exponent of -1 applied to a fraction.
  [
    {
      q: 'What is $\\left(\\frac{7}{3}\\right)^{-1}$?',
      choices: ['$\\frac{3}{7}$', '$-\\frac{3}{7}$', '$\\frac{7}{3}$', '$-\\frac{7}{3}$'],
      answer: 0,
      solution: 'The reciprocal of a fraction is that fraction turned upside down: $\\left(\\frac{7}{3}\\right)^{-1} = \\frac{3}{7}$. Check: $\\frac{7}{3} \\cdot \\frac{3}{7} = 1$. ✓ Nothing here is negative — the minus sign flips the fraction, it does not paint it with a sign.',
    },
    {
      q: 'What is $\\left(\\frac{1}{6}\\right)^{-1}$?',
      choices: ['$\\frac{1}{6}$', '$6$', '$-6$', '$-\\frac{1}{6}$'],
      answer: 1,
      solution: 'Flip $\\frac{1}{6}$ over and you get $\\frac{6}{1}$, which is just $6$. So $\\left(\\frac{1}{6}\\right)^{-1} = 6$. A tiny fraction has a big reciprocal — that is why negative exponents on fractions make numbers grow.',
    },
    {
      q: 'For which fraction $f$ is $f^{-1} = \\frac{8}{5}$?',
      choices: ['$\\frac{8}{5}$', '$-\\frac{5}{8}$', '$\\frac{5}{8}$', '$\\frac{64}{25}$'],
      answer: 2,
      solution: 'Flipping is its own undo: if the reciprocal of $f$ is $\\frac{8}{5}$, then $f$ is the flip of $\\frac{8}{5}$, namely $\\frac{5}{8}$. Check: $\\left(\\frac{5}{8}\\right)^{-1} = \\frac{8}{5}$. ✓',
    },
  ],
  // 7. Negative powers of 10 as decimals.
  [
    {
      q: 'Write $10^{-5}$ as a decimal.',
      choices: ['$0.0001$', '$0.00001$', '$0.000001$', '$-100{,}000$'],
      answer: 1,
      solution: '$10^{-5} = \\frac{1}{100{,}000}$. The exponent counts the places the $1$ sits to the right of the decimal point — five of them — giving $0.00001$. Count carefully: four places would be $0.0001$, which is ten times too big.',
    },
    {
      q: 'Write $0.01$ as a power of $10$.',
      choices: ['$10^{2}$', '$10^{-1}$', '$10^{-2}$', '$10^{-3}$'],
      answer: 2,
      solution: 'The $1$ in $0.01$ sits two places right of the decimal point, so $0.01 = \\frac{1}{100} = \\frac{1}{10^2} = 10^{-2}$. Places to the right of the point make the exponent negative; $10^2$ would be $100$, which is $10{,}000$ times larger.',
    },
    {
      q: 'When $10^{-7}$ is written out as a decimal, how many zeros sit between the decimal point and the $1$?',
      choices: ['$7$', '$8$', '$5$', '$6$'],
      answer: 3,
      solution: 'The decimal is $0.0000001$, where the $1$ occupies the seventh place after the point. The first six of those places are filled with zeros, so there are $6$ zeros. The exponent counts places, and the $1$ itself uses up one of them.',
    },
  ],
  // 8. Adding or subtracting two negative powers.
  [
    {
      q: 'Compute $3^{-1} + 3^{-2}$.',
      choices: ['$\\frac{4}{9}$', '$\\frac{1}{6}$', '$-\\frac{4}{9}$', '$\\frac{1}{27}$'],
      answer: 0,
      solution: 'Turn each power into a fraction: $3^{-1} = \\frac{1}{3}$ and $3^{-2} = \\frac{1}{9}$. Use the common denominator $9$: $\\frac{3}{9} + \\frac{1}{9} = \\frac{4}{9}$. Adding the tops and the bottoms separately would give $\\frac{2}{12} = \\frac{1}{6}$, which is not how fractions add.',
    },
    {
      q: 'Compute $5^{-1} + 5^{-2}$.',
      choices: ['$\\frac{1}{15}$', '$\\frac{6}{25}$', '$\\frac{1}{125}$', '$-\\frac{6}{25}$'],
      answer: 1,
      solution: 'Write both terms with denominator $25$: $5^{-1} = \\frac{1}{5} = \\frac{5}{25}$ and $5^{-2} = \\frac{1}{25}$. Adding gives $\\frac{5 + 1}{25} = \\frac{6}{25}$. Both pieces are positive, so their sum is too.',
    },
    {
      q: 'Compute $4^{-1} - 4^{-2}$.',
      choices: ['$-\\frac{3}{16}$', '$\\frac{5}{16}$', '$\\frac{1}{64}$', '$\\frac{3}{16}$'],
      answer: 3,
      solution: 'The terms are $\\frac{1}{4}$ and $\\frac{1}{16}$. Over the denominator $16$ that is $\\frac{4}{16} - \\frac{1}{16} = \\frac{3}{16}$. The bigger piece comes first, so the result is positive — subtracting in the wrong order would flip the sign.',
    },
  ],
  // 9. A negative exponent bigger than 1 on a fraction.
  [
    {
      q: 'Evaluate $\\left(\\frac{2}{5}\\right)^{-3}$.',
      choices: ['$\\frac{8}{125}$', '$\\frac{125}{8}$', '$-\\frac{125}{8}$', '$\\frac{5}{2}$'],
      answer: 1,
      solution: 'Flip first, then apply the positive exponent: $\\left(\\frac{2}{5}\\right)^{-3} = \\left(\\frac{5}{2}\\right)^{3} = \\frac{5^3}{2^3} = \\frac{125}{8}$. Cubing without flipping gives $\\frac{8}{125}$ — the right digits, upside down.',
    },
    {
      q: 'Evaluate $\\left(\\frac{5}{2}\\right)^{-2}$.',
      choices: ['$\\frac{25}{4}$', '$-\\frac{4}{25}$', '$\\frac{4}{25}$', '$\\frac{2}{5}$'],
      answer: 2,
      solution: 'The negative exponent flips the fraction: $\\left(\\frac{5}{2}\\right)^{-2} = \\left(\\frac{2}{5}\\right)^{2}$. Now square the top and the bottom: $\\frac{2^2}{5^2} = \\frac{4}{25}$. Flipping alone is not enough — the $2$ in the exponent still has to do its job.',
    },
    {
      q: 'Evaluate $\\left(\\frac{1}{3}\\right)^{-4}$.',
      choices: ['$\\frac{1}{81}$', '$-81$', '$\\frac{1}{12}$', '$81$'],
      answer: 3,
      solution: 'Flip the fraction to clear the negative exponent: $\\left(\\frac{1}{3}\\right)^{-4} = \\left(\\frac{3}{1}\\right)^{4} = 3^4 = 81$. A negative exponent on a fraction smaller than $1$ produces a big answer, because flipping a small fraction makes it large.',
    },
  ],
  // 10. Summing a short run of negative powers.
  [
    {
      q: 'Compute $3^{-1} + 3^{-2} + 3^{-3}$.',
      choices: ['$\\frac{13}{27}$', '$\\frac{4}{9}$', '$\\frac{1}{27}$', '$-\\frac{13}{27}$'],
      answer: 0,
      solution: 'The three terms are $\\frac{1}{3}, \\frac{1}{9}, \\frac{1}{27}$. Put them all over $27$: $\\frac{9}{27} + \\frac{3}{27} + \\frac{1}{27} = \\frac{13}{27}$. Forgetting the last term would leave $\\frac{12}{27} = \\frac{4}{9}$, so keep track of all three.',
    },
    {
      q: 'Compute $5^{-1} + 5^{-2} + 5^{-3}$.',
      choices: ['$\\frac{6}{25}$', '$\\frac{1}{125}$', '$\\frac{31}{125}$', '$\\frac{31}{25}$'],
      answer: 2,
      solution: 'Use $125$ as the common denominator: $\\frac{1}{5} = \\frac{25}{125}$, $\\frac{1}{25} = \\frac{5}{125}$, and $\\frac{1}{125}$ stays put. The sum is $\\frac{25 + 5 + 1}{125} = \\frac{31}{125}$, a number just under $\\frac{1}{4}$.',
    },
    {
      q: 'How much less than $1$ is the sum $2^{-1} + 2^{-2} + 2^{-3} + 2^{-4} + 2^{-5} + 2^{-6}$?',
      choices: ['$\\frac{1}{32}$', '$\\frac{63}{64}$', '$\\frac{1}{6}$', '$\\frac{1}{64}$'],
      answer: 3,
      solution: 'Over the denominator $64$ the terms are $32, 16, 8, 4, 2, 1$ sixty-fourths, and $32 + 16 + 8 + 4 + 2 + 1 = 63$, so the sum is $\\frac{63}{64}$. The question asks for the gap up to $1$: $1 - \\frac{63}{64} = \\frac{1}{64}$. Each term closes half the remaining gap, so the leftover is always the size of the last term.',
    },
  ],
]

const challenge = [
  // 1. Even and odd exponents on a negative base.
  [
    {
      q: 'Compute $(-3)^5 + 3^5$.',
      choices: ['$0$', '$486$', '$-486$', '$243$'],
      answer: 0,
      solution: 'The exponent $5$ is odd, so $(-3)^5$ keeps its minus sign: $(-3)^5 = -243$, while $3^5 = 243$. They are opposites, so the sum is $-243 + 243 = 0$. Spotting the odd exponent saves you from ever adding $486$.',
    },
    {
      q: 'Compute $(-2)^7 - 2^7$.',
      choices: ['$0$', '$-256$', '$256$', '$-128$'],
      answer: 1,
      solution: 'An odd exponent keeps the negative, so $(-2)^7 = -128$ while $2^7 = 128$. Subtracting gives $-128 - 128 = -256$. Do not expect a cancellation here — that only happens when the exponent is even and the two powers are equal.',
    },
    {
      q: 'Compute $\\frac{(-3)^4}{3^4} + \\frac{(-3)^5}{3^5}$.',
      choices: ['$2$', '$-2$', '$1$', '$0$'],
      answer: 3,
      solution: 'Handle each fraction by its exponent. The exponent $4$ is even, so $(-3)^4 = 3^4$ and the first fraction is $1$. The exponent $5$ is odd, so $(-3)^5 = -3^5$ and the second fraction is $-1$. The total is $1 + (-1) = 0$ — and you never had to compute $243$ or $81$.',
    },
  ],
  // 2. Units digit from a repeating cycle.
  [
    {
      q: 'What is the units digit of $3^{40}$?',
      choices: ['$1$', '$3$', '$9$', '$7$'],
      answer: 0,
      solution: 'List the units digits of the powers of $3$: $3, 9, 7, 1$, and then the cycle repeats every $4$ steps. Since $40 = 4 \\cdot 10$ exactly, the exponent lands on the last entry of a full cycle, which is $1$.',
    },
    {
      q: 'What is the units digit of $8^{25}$?',
      choices: ['$2$', '$4$', '$8$', '$6$'],
      answer: 2,
      solution: 'The units digits of $8^1, 8^2, 8^3, 8^4$ are $8, 4, 2, 6$, and then the pattern repeats every $4$. Divide: $25 = 4 \\cdot 6 + 1$, so the exponent lands one step into a fresh cycle, giving the first entry, $8$.',
    },
    {
      q: 'What is the units digit of $9^{77}$?',
      choices: ['$1$', '$3$', '$7$', '$9$'],
      answer: 3,
      solution: 'Powers of $9$ end in $9, 1, 9, 1, \\ldots$ — a cycle of length $2$, with $9$ for odd exponents and $1$ for even ones. Since $77$ is odd, the units digit is $9$.',
    },
  ],
  // 3. Combine a product and a quotient of powers.
  [
    {
      q: 'Evaluate $\\frac{3^{8} \\cdot 3^{3}}{3^{9}}$.',
      choices: ['$3$', '$9$', '$27$', '$\\frac{1}{9}$'],
      answer: 1,
      solution: 'Multiply on top by adding: $3^8 \\cdot 3^3 = 3^{11}$. Then divide by subtracting: $\\frac{3^{11}}{3^{9}} = 3^{11-9} = 3^2 = 9$. Add for products, subtract for quotients — mixing the two up is the classic slip.',
    },
    {
      q: 'Evaluate $\\frac{5^{4} \\cdot 5^{6}}{5^{11}}$.',
      choices: ['$5$', '$25$', '$\\frac{1}{5}$', '$\\frac{1}{25}$'],
      answer: 2,
      solution: 'The top combines to $5^{4+6} = 5^{10}$, and dividing gives $5^{10-11} = 5^{-1} = \\frac{1}{5}$. The bottom has one more factor of $5$ than the top, so one survives downstairs and the answer is a fraction.',
    },
    {
      q: 'If $\\frac{2^{9} \\cdot 2^{n}}{2^{6}} = 64$, what is $n$?',
      choices: ['$6$', '$9$', '$-3$', '$3$'],
      answer: 3,
      solution: 'Collapse the left side into one power: $\\frac{2^{9+n}}{2^{6}} = 2^{9+n-6} = 2^{3+n}$. Since $64 = 2^6$, we need $3 + n = 6$, so $n = 3$. Check: $\\frac{2^9 \\cdot 2^3}{2^6} = \\frac{2^{12}}{2^6} = 2^6 = 64$. ✓',
    },
  ],
  // 4. Add a ladder of powers that crosses zero.
  [
    {
      q: 'Compute $2^{-2} + 2^{-1} + 2^{0} + 2^{1} + 2^{2}$.',
      choices: ['$\\frac{31}{4}$', '$\\frac{31}{2}$', '$\\frac{27}{4}$', '$1$'],
      answer: 0,
      solution: 'The five terms are $\\frac{1}{4}, \\frac{1}{2}, 1, 2, 4$. Put everything over $4$: $\\frac{1 + 2 + 4 + 8 + 16}{4} = \\frac{31}{4}$. Notice the numerators are themselves powers of $2$, so their sum is one less than $32$.',
    },
    {
      q: 'Compute $4^{-1} + 4^{0} + 4^{1}$.',
      choices: ['$5$', '$\\frac{21}{4}$', '$1$', '$\\frac{21}{16}$'],
      answer: 1,
      solution: 'Evaluate each term: $4^{-1} = \\frac{1}{4}$, $4^0 = 1$, and $4^1 = 4$. Over the denominator $4$ that is $\\frac{1 + 4 + 16}{4} = \\frac{21}{4}$. Dropping the small $\\frac{1}{4}$ would leave exactly $5$, so it pays to keep the fraction.',
    },
    {
      q: 'Compute $5^{-2} + 5^{-1} + 5^{0}$.',
      choices: ['$\\frac{7}{25}$', '$\\frac{31}{5}$', '$\\frac{31}{25}$', '$\\frac{6}{5}$'],
      answer: 2,
      solution: 'The terms are $\\frac{1}{25}, \\frac{1}{5}, 1$. Over the denominator $25$: $\\frac{1 + 5 + 25}{25} = \\frac{31}{25}$. Since $5^0 = 1$ is already bigger than the other two combined, the answer must sit a little above $1$ — a quick sanity check.',
    },
  ],
  // 5. Solve for the exponent, then answer the real question.
  [
    {
      q: 'If $3^x = 81$, what is $x^3$?',
      choices: ['$81$', '$64$', '$12$', '$4$'],
      answer: 1,
      solution: 'Climb the powers of $3$: $3, 9, 27, 81$ — four factors, so $x = 4$. But the question asks for $x^3$, not $x$: $4^3 = 64$. Solving for $x$ is only half the job.',
    },
    {
      q: 'If $5^x = 125$, what is $2^x$?',
      choices: ['$125$', '$6$', '$8$', '$3$'],
      answer: 2,
      solution: 'Since $5 \\cdot 5 \\cdot 5 = 125$, we get $x = 3$. Now swap that exponent onto the base $2$: $2^3 = 8$. The exponent travels; the base does not.',
    },
    {
      q: 'If $4^x = 64$, what is $x^2 + x$?',
      choices: ['$64$', '$9$', '$16$', '$12$'],
      answer: 3,
      solution: 'Count factors of $4$: $4, 16, 64$, so $x = 3$. Then $x^2 + x = 9 + 3 = 12$. Read the question all the way to the end — stopping at $x^2 = 9$ leaves the $+x$ behind.',
    },
  ],
  // 6. A power raised to another power, with negative exponents.
  [
    {
      q: 'Evaluate $\\left(2^{-3}\\right)^{-2}$.',
      choices: ['$64$', '$\\frac{1}{64}$', '$\\frac{1}{32}$', '$-64$'],
      answer: 0,
      solution: 'A power of a power multiplies the exponents: $\\left(2^{-3}\\right)^{-2} = 2^{(-3)(-2)} = 2^{6} = 64$. Two negatives multiply to a positive, so the tiny number $2^{-3} = \\frac{1}{8}$ turns into a big one. Adding the exponents instead would give $2^{-5} = \\frac{1}{32}$.',
    },
    {
      q: 'Evaluate $\\left(3^{2}\\right)^{-2}$.',
      choices: ['$81$', '$1$', '$\\frac{1}{81}$', '$\\frac{1}{9}$'],
      answer: 2,
      solution: 'Multiply the exponents: $\\left(3^{2}\\right)^{-2} = 3^{2 \\cdot (-2)} = 3^{-4} = \\frac{1}{3^4} = \\frac{1}{81}$. If you added the exponents you would get $3^0 = 1$, but a power of a power multiplies.',
    },
    {
      q: 'Evaluate $\\left(\\left(\\frac{1}{2}\\right)^{-2}\\right)^{-1}$.',
      choices: ['$4$', '$-4$', '$16$', '$\\frac{1}{4}$'],
      answer: 3,
      solution: 'Work from the inside out. First $\\left(\\frac{1}{2}\\right)^{-2} = 2^2 = 4$. Then the outer exponent $-1$ takes the reciprocal: $4^{-1} = \\frac{1}{4}$. Multiplying exponents agrees: $(-2)(-1) = 2$, and $\\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4}$. ✓',
    },
  ],
  // 7. Compare powers with different bases and exponents.
  [
    {
      q: 'Which of the four powers below has the greatest value?',
      choices: ['$3^{7}$', '$7^{3}$', '$2^{11}$', '$5^{4}$'],
      answer: 0,
      solution: 'Evaluate each one: $3^7 = 2187$, $7^3 = 343$, $2^{11} = 2048$, and $5^4 = 625$. The winner is $3^7 = 2187$, just ahead of $2^{11} = 2048$. Note how $3^7$ dwarfs $7^3$ — swapping base and exponent changes everything.',
    },
    {
      q: 'Which of these numbers is the smallest?',
      choices: ['$4^{5}$', '$2^{9}$', '$6^{4}$', '$10^{3}$'],
      answer: 1,
      solution: 'Work them out: $4^5 = 1024$, $2^9 = 512$, $6^4 = 1296$, and $10^3 = 1000$. The smallest is $2^9 = 512$. A shortcut: $4^5 = \\left(2^2\\right)^5 = 2^{10}$, which is exactly double $2^9$, so $2^9$ beats it without any arithmetic.',
    },
    {
      q: 'Exactly one of the numbers below is greater than $2000$. Which one is it?',
      choices: ['$3^{6}$', '$5^{4}$', '$12^{2}$', '$2^{11}$'],
      answer: 3,
      solution: 'Evaluate each: $3^6 = 729$, $5^4 = 625$, $12^2 = 144$, and $2^{11} = 2048$. Only $2^{11}$ clears $2000$. The small base $2$ wins here because its exponent is so much bigger — exponents beat bases in the long run.',
    },
  ],
  // 8. Negative exponents on unit fractions.
  [
    {
      q: 'Compute $\\left(\\frac{1}{3}\\right)^{-3} + \\left(\\frac{1}{5}\\right)^{-2}$.',
      choices: ['$52$', '$-52$', '$-2$', '$\\frac{1}{52}$'],
      answer: 0,
      solution: 'A negative exponent flips each fraction: $\\left(\\frac{1}{3}\\right)^{-3} = 3^3 = 27$ and $\\left(\\frac{1}{5}\\right)^{-2} = 5^2 = 25$. The sum is $27 + 25 = 52$. Two fractions produced a whole number — that is the flip at work, not a sign change.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{4}\\right)^{-2} - \\left(\\frac{1}{2}\\right)^{-3}$.',
      choices: ['$-8$', '$8$', '$24$', '$\\frac{1}{8}$'],
      answer: 1,
      solution: 'Flip both fractions: $\\left(\\frac{1}{4}\\right)^{-2} = 4^2 = 16$ and $\\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8$. Subtract in the order given: $16 - 8 = 8$. The first term is larger, so the answer stays positive.',
    },
    {
      q: 'Compute $\\left(\\frac{2}{3}\\right)^{-2} \\cdot \\left(\\frac{3}{2}\\right)^{2}$.',
      choices: ['$1$', '$\\frac{16}{81}$', '$\\frac{81}{16}$', '$\\frac{9}{4}$'],
      answer: 2,
      solution: 'It looks like the two pieces should cancel, but they do not. The first flips to $\\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$, and the second is also $\\frac{9}{4}$. Multiplying gives $\\frac{9}{4} \\cdot \\frac{9}{4} = \\frac{81}{16}$. Cancellation would need one exponent of $-2$ and one of $+2$ on the *same* fraction.',
    },
  ],
  // 9. Match two powers by rewriting the base.
  [
    {
      q: 'If $8^{7} = 2^{n}$, what is $n$?',
      choices: ['$21$', '$10$', '$14$', '$56$'],
      answer: 0,
      solution: 'Rewrite the base: $8 = 2^3$, so $8^7 = \\left(2^3\\right)^7 = 2^{3 \\cdot 7} = 2^{21}$. Therefore $n = 21$. A power of a power multiplies exponents — adding them would give $10$, and multiplying the base by the exponent would give $56$.',
    },
    {
      q: 'If $25^{6} = 5^{n}$, what is $n$?',
      choices: ['$6$', '$30$', '$12$', '$8$'],
      answer: 2,
      solution: 'Since $25 = 5^2$, we get $25^6 = \\left(5^2\\right)^6 = 5^{2 \\cdot 6} = 5^{12}$, so $n = 12$. The base shrank from $25$ to $5$, so the exponent had to grow to keep the value the same.',
    },
    {
      q: 'If $2^{18} = 8^{n}$, what is $n$?',
      choices: ['$18$', '$15$', '$54$', '$6$'],
      answer: 3,
      solution: 'This time the base grows, so the exponent shrinks. Write $8^n = \\left(2^3\\right)^n = 2^{3n}$. Matching with $2^{18}$ gives $3n = 18$, so $n = 6$. Check: $8^6 = 262{,}144 = 2^{18}$. ✓',
    },
  ],
  // 10. Consecutive squares from their difference.
  [
    {
      q: 'Two consecutive perfect squares differ by $37$. What is the smaller square?',
      choices: ['$361$', '$324$', '$18$', '$19$'],
      answer: 1,
      solution: 'Consecutive squares $n^2$ and $\\left(n+1\\right)^2$ differ by $n + (n+1) = 2n + 1$. Setting $2n + 1 = 37$ gives $n = 18$, so the two numbers are $18$ and $19$ and the smaller square is $18^2 = 324$. Check: $361 - 324 = 37$. ✓',
    },
    {
      q: 'Two consecutive perfect squares differ by $59$. What is the larger of the two numbers being squared?',
      choices: ['$29$', '$900$', '$30$', '$841$'],
      answer: 2,
      solution: 'The difference is $2n + 1$, so $2n + 1 = 59$ gives $n = 29$. The two numbers being squared are $29$ and $30$, and the larger is $30$. The question asks for the number, not its square — $900$ is a tempting but wrong answer.',
    },
    {
      q: 'Two consecutive perfect squares differ by $71$. What is their sum?',
      choices: ['$71$', '$2500$', '$1296$', '$2521$'],
      answer: 3,
      solution: 'From $2n + 1 = 71$ we get $n = 35$, so the squares are $35^2 = 1225$ and $36^2 = 1296$. Their sum is $1225 + 1296 = 2521$. Their difference was given as $71$; the sum is a different (and much bigger) quantity.',
    },
  ],
  // 11. A chain of positive and negative exponents.
  [
    {
      q: 'Evaluate $\\frac{10^{4} \\cdot 10^{-9}}{10^{-7}}$.',
      choices: ['$100$', '$0.01$', '$10^{-12}$', '$1000$'],
      answer: 0,
      solution: 'Add the exponents on top: $4 + (-9) = -5$. Dividing subtracts the bottom exponent, and subtracting $-7$ adds $7$: $-5 + 7 = 2$. So the answer is $10^2 = 100$. Subtracting a negative exponent lifts you up, not down.',
    },
    {
      q: 'Evaluate $\\frac{2^{-3} \\cdot 2^{7}}{2^{6}}$.',
      choices: ['$4$', '$\\frac{1}{4}$', '$16$', '$\\frac{1}{16}$'],
      answer: 1,
      solution: 'Collect the exponents in one shot: $-3 + 7 - 6 = -2$. So the expression is $2^{-2} = \\frac{1}{4}$. The bottom outweighs the top here, which is exactly why the exponent lands below zero.',
    },
    {
      q: 'Evaluate $\\frac{10^{-2} \\cdot 10^{6}}{10^{9}}$.',
      choices: ['$10^{5}$', '$10^{-1}$', '$10^{13}$', '$10^{-5}$'],
      answer: 3,
      solution: 'Add the two top exponents and subtract the bottom one: $-2 + 6 - 9 = -5$. The value is $10^{-5}$, the decimal $0.00001$. Dropping the minus sign on the $-2$ would give $10^{-1}$, and adding the $9$ instead of subtracting it would give $10^{13}$.',
    },
  ],
  // 12. Summing consecutive powers of one base.
  [
    {
      q: 'Compute $3^{0} + 3^{1} + 3^{2} + 3^{3}$.',
      choices: ['$40$', '$39$', '$81$', '$27$'],
      answer: 0,
      solution: 'The terms are $1, 3, 9, 27$, and $1 + 3 + 9 + 27 = 40$. Remember that $3^0 = 1$ — forgetting it leaves $39$. Bonus pattern: the sum is exactly half of $3^4 - 1 = 80$.',
    },
    {
      q: 'Compute $5^{0} + 5^{1} + 5^{2} + 5^{3}$.',
      choices: ['$155$', '$156$', '$625$', '$31$'],
      answer: 1,
      solution: 'The terms are $1, 5, 25, 125$, which add to $156$. Two easy traps: forgetting the $1$ from $5^0$ leaves $155$, and stopping one term early leaves $1 + 5 + 25 = 31$.',
    },
    {
      q: 'The sum $2^{0} + 2^{1} + 2^{2} + \\cdots + 2^{n}$ equals $255$. What is $n$?',
      choices: ['$8$', '$255$', '$7$', '$6$'],
      answer: 2,
      solution: 'A run of powers of $2$ starting at $2^0$ always adds to one less than the next power: the sum is $2^{n+1} - 1$. So $2^{n+1} - 1 = 255$ means $2^{n+1} = 256 = 2^8$, giving $n + 1 = 8$ and $n = 7$. Check: $1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255$. ✓',
    },
  ],
]

const worksheet = [
  // 1. Square a two-digit number.
  [
    {
      q: 'Evaluate $17^2$.',
      answer: '$289$',
      solution: 'Split the second factor: $17^2 = 17 \\cdot 17 = 17 \\cdot 10 + 17 \\cdot 7 = 170 + 119 = 289$.',
    },
    {
      q: 'Evaluate $24^2$.',
      answer: '$576$',
      solution: '$24^2 = 24 \\cdot 24 = 24 \\cdot 20 + 24 \\cdot 4 = 480 + 96 = 576$.',
    },
    {
      q: 'A square patio measures $23$ feet along each side. How many square feet does it cover?',
      answer: '$529$',
      solution: 'The area of a square is the side length squared: $23^2 = 23 \\cdot 20 + 23 \\cdot 3 = 460 + 69 = 529$ square feet.',
    },
  ],
  // 2. Evaluate a higher power.
  [
    {
      q: 'Evaluate $3^5$.',
      answer: '$243$',
      solution: 'Multiply five $3$s one step at a time: $3, 9, 27, 81, 243$. So $3^5 = 243$.',
    },
    {
      q: 'Evaluate $5^4$.',
      answer: '$625$',
      solution: 'Four factors of $5$: $5 \\cdot 5 = 25$, then $25 \\cdot 5 = 125$, then $125 \\cdot 5 = 625$.',
    },
    {
      q: 'Which power of $2$ equals $128$? Write your answer in the form $2^{n}$.',
      answer: '$2^{7}$',
      solution: 'Double from $1$ and count the steps: $2, 4, 8, 16, 32, 64, 128$ — seven doublings. So $128 = 2^7$.',
    },
  ],
  // 3. Powers of a negative number, and the parentheses trap.
  [
    {
      q: 'Evaluate $(-3)^4$.',
      answer: '$81$',
      solution: '$(-3)^4$ has four negative factors, which form two pairs, and each pair multiplies to a positive. So the result is positive: $3^4 = 81$.',
    },
    {
      q: 'Evaluate $(-2)^7$.',
      answer: '$-128$',
      solution: 'Seven negative factors is an odd count, so one minus sign survives. The sizes give $2^7 = 128$, so $(-2)^7 = -128$.',
    },
    {
      q: 'Evaluate $-6^2$. (Look carefully — there are no parentheses!)',
      answer: '$-36$',
      solution: 'Without parentheses the exponent acts before the minus sign: $-6^2 = -(6^2) = -(36) = -36$. Compare with $(-6)^2 = 36$ — the parentheses decide whether the minus sign gets squared.',
    },
  ],
  // 4. Combine powers into one.
  [
    {
      q: 'Write $2^6 \\cdot 2^7$ as a single power of $2$.',
      answer: '$2^{13}$',
      solution: 'Multiplying powers of the same base adds the exponents: $2^6 \\cdot 2^7 = 2^{6+7} = 2^{13}$. Six factors of $2$ followed by seven more makes thirteen in all.',
    },
    {
      q: 'Write $\\left(5^{3}\\right)^{4}$ as a single power of $5$.',
      answer: '$5^{12}$',
      solution: 'A power of a power multiplies the exponents: $\\left(5^3\\right)^4 = 5^{3 \\cdot 4} = 5^{12}$. Think of it as four groups of three factors — twelve factors in total.',
    },
    {
      q: 'Fill in the blank: $7^{5} \\cdot 7^{\\square} = 7^{12}$.',
      answer: '$7$',
      solution: 'Multiplying adds the exponents, so the blank must satisfy $5 + \\square = 12$. That makes the blank $7$. Check: $7^5 \\cdot 7^7 = 7^{12}$. ✓',
    },
  ],
  // 5. A zero exponent inside a small expression.
  [
    {
      q: 'Evaluate $8^0 + 8^2$.',
      answer: '$65$',
      solution: 'Any nonzero base to the zero power is $1$, so $8^0 = 1$. And $8^2 = 64$. The sum is $1 + 64 = 65$.',
    },
    {
      q: 'Evaluate $(-15)^0 + 4^2$.',
      answer: '$17$',
      solution: 'The parentheses mean the whole number $-15$ is raised to the zero power, and any nonzero base gives $1$. So the expression is $1 + 16 = 17$.',
    },
    {
      q: 'Evaluate $-9^0 + 3^3$. (No parentheses on the first term!)',
      answer: '$26$',
      solution: 'The exponent grabs only the $9$, so $-9^0 = -(9^0) = -1$. Then $3^3 = 27$, and $-1 + 27 = 26$. With parentheses, $(-9)^0 = 1$ would have given $28$ instead.',
    },
  ],
  // 6. Negative exponent written as a fraction.
  [
    {
      q: 'Evaluate $9^{-2}$. Write your answer as a fraction.',
      answer: '$\\frac{1}{81}$',
      solution: 'A negative exponent means reciprocal: $9^{-2} = \\frac{1}{9^2} = \\frac{1}{81}$ — a small positive fraction, never a negative number.',
    },
    {
      q: 'Evaluate $12^{-2}$. Write your answer as a fraction.',
      answer: '$\\frac{1}{144}$',
      solution: 'Square first, then flip: $12^2 = 144$, so $12^{-2} = \\frac{1}{144}$.',
    },
    {
      q: 'Write $\\frac{1}{343}$ as a power of $7$.',
      answer: '$7^{-3}$',
      solution: 'Count factors of $7$: $7 \\cdot 7 = 49$ and $49 \\cdot 7 = 343$, so $343 = 7^3$. Therefore $\\frac{1}{343} = \\frac{1}{7^3} = 7^{-3}$.',
    },
  ],
  // 7. Divide powers of the same base.
  [
    {
      q: 'Evaluate $\\frac{6^{11}}{6^{8}}$.',
      answer: '$216$',
      solution: 'Dividing powers subtracts exponents: $\\frac{6^{11}}{6^{8}} = 6^{11-8} = 6^3$. Then $6^3 = 6 \\cdot 6 \\cdot 6 = 216$.',
    },
    {
      q: 'Evaluate $\\frac{3^{20}}{3^{16}}$.',
      answer: '$81$',
      solution: 'Sixteen of the twenty top factors cancel, leaving $3^{20-16} = 3^4 = 81$. There is no need to touch the enormous numbers themselves.',
    },
    {
      q: 'Evaluate $\\frac{4^{9}}{4^{12}}$. Write your answer as a fraction.',
      answer: '$\\frac{1}{64}$',
      solution: 'Subtract in the order given: $4^{9-12} = 4^{-3}$. A negative exponent means reciprocal, so the value is $\\frac{1}{4^3} = \\frac{1}{64}$. The bottom had three extra factors of $4$, and they survive downstairs.',
    },
  ],
  // 8. Power of a power, then a division.
  [
    {
      q: 'Evaluate $\\left(3^{3}\\right)^{2} \\div 3^{4}$.',
      answer: '$9$',
      solution: 'First the power of a power: $\\left(3^3\\right)^2 = 3^{3 \\cdot 2} = 3^6$. Then divide: $3^6 \\div 3^4 = 3^{6-4} = 3^2 = 9$.',
    },
    {
      q: 'Evaluate $\\left(5^{2}\\right)^{4} \\div 5^{5}$.',
      answer: '$125$',
      solution: 'The power of a power gives $\\left(5^2\\right)^4 = 5^{8}$. Dividing subtracts: $5^{8-5} = 5^3 = 125$.',
    },
    {
      q: 'Evaluate $\\left(7^{4}\\right)^{2} \\div 7^{6}$.',
      answer: '$49$',
      solution: 'Multiply the exponents first: $\\left(7^4\\right)^2 = 7^{8}$. Then subtract for the division: $7^{8-6} = 7^2 = 49$.',
    },
  ],
  // 9. Solve for a negative exponent.
  [
    {
      q: 'Write $0.000001$ as a power of $10$.',
      answer: '$10^{-6}$',
      solution: 'The $1$ sits six places to the right of the decimal point, so $0.000001 = \\frac{1}{1{,}000{,}000} = \\frac{1}{10^6} = 10^{-6}$.',
    },
    {
      q: 'Find the number $x$ that makes $2^{x} = \\frac{1}{64}$ true.',
      answer: '$x = -6$',
      solution: 'Doubling from $1$ gives $2, 4, 8, 16, 32, 64$, so $64 = 2^6$. Then $\\frac{1}{64} = \\frac{1}{2^6} = 2^{-6}$, and matching exponents gives $x = -6$.',
    },
    {
      q: 'Find the number $x$ that makes $5^{x} = \\frac{1}{625}$ true.',
      answer: '$x = -4$',
      solution: 'Since $5 \\cdot 5 \\cdot 5 \\cdot 5 = 625$, we have $625 = 5^4$. So $\\frac{1}{625} = 5^{-4}$, which means $x = -4$.',
    },
  ],
  // 10. Difference of consecutive squares.
  [
    {
      q: 'Compute $41^2 - 40^2$ without squaring either number, and name the perfect square your answer turns out to be.',
      answer: '$81 = 9^2$',
      solution: 'Consecutive squares differ by the sum of the two numbers: $41^2 - 40^2 = 40 + 41 = 81$. And $81 = 9^2$, so the difference of two squares is itself a square.',
    },
    {
      q: 'Compute $13^2 - 12^2$ without squaring either number, and name the perfect square your answer turns out to be.',
      answer: '$25 = 5^2$',
      solution: 'The difference of consecutive squares is the sum of the two numbers: $13^2 - 12^2 = 12 + 13 = 25$, which is $5^2$. (This is also why $5, 12, 13$ makes a right triangle!)',
    },
    {
      q: 'The squares of two consecutive whole numbers differ by $169$. What are the two numbers?',
      answer: '$84$ and $85$',
      solution: 'For consecutive numbers $n$ and $n+1$, the squares differ by $n + (n+1) = 2n + 1$. Solve $2n + 1 = 169$: that gives $2n = 168$, so $n = 84$ and the numbers are $84$ and $85$. Check: $85^2 - 84^2 = 7225 - 7056 = 169$. ✓',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 2,
  sections: { '2.4': s24 },
  challenge,
  worksheet,
}
