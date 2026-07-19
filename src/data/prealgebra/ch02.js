// Prealgebra — Chapter 2: Exponents
// All problems, explanations, and examples are original MathQuest content.

const s21 = {
  id: '2.1',
  title: 'Squares',
  learn: {
    concepts: [
      {
        heading: 'Squaring means multiplying a number by itself',
        body: 'The little raised $2$ in $5^2$ tells you to use $5$ as a factor twice: $5^2 = 5 \\cdot 5 = 25$. We say "five squared" because $5^2$ counts the unit squares inside a square that is $5$ units on each side — the picture and the name match perfectly!',
      },
      {
        heading: 'Meet the perfect squares',
        body: 'A perfect square is what you get by squaring a whole number: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$ all the way up to $20^2 = 400$ and beyond. Knowing the squares up to $20^2$ by heart is like knowing your times tables — it makes tons of later math faster.',
      },
      {
        heading: 'Negative numbers have positive squares',
        body: 'Since a negative times a negative is positive, $(-4)^2 = (-4) \\cdot (-4) = 16$. But watch the parentheses! Without them, $-4^2$ means "square first, then negate," so $-4^2 = -(4 \\cdot 4) = -16$. The parentheses decide whether the minus sign gets squared too.',
      },
      {
        heading: 'Squares hide beautiful patterns',
        body: 'The units digit of a square depends only on the units digit of the original number — that is why squares can only end in $0, 1, 4, 5, 6,$ or $9$. Another gem: consecutive squares differ by the sum of the two numbers, $\\left(n+1\\right)^2 - n^2 = n + (n+1)$. So $6^2 - 5^2 = 5 + 6 = 11$. Check: $36 - 25 = 11$!',
      },
    ],
    examples: [
      {
        problem: 'Compute $14^2$ without a calculator.',
        steps: [
          '$14^2$ means $14 \\cdot 14$.',
          'Break $14$ into $10 + 4$: we need $14 \\cdot 10 + 14 \\cdot 4$.',
          'That is $140 + 56 = 196$.',
        ],
        answer: '$14^2 = 196$',
      },
      {
        problem: 'Evaluate $(-9)^2$ and $-9^2$. Are they the same?',
        steps: [
          'In $(-9)^2$, the parentheses say the whole number $-9$ gets squared: $(-9) \\cdot (-9) = 81$, since negative times negative is positive.',
          'In $-9^2$, the exponent acts before the minus sign: first $9^2 = 81$, then negate to get $-81$.',
          'So they are opposites: $(-9)^2 = 81$ but $-9^2 = -81$.',
        ],
        answer: '$(-9)^2 = 81$ and $-9^2 = -81$ — not the same!',
      },
      {
        problem: 'Compute $21^2 - 20^2$ without squaring either number.',
        steps: [
          'Consecutive squares differ by the sum of the two numbers: $\\left(n+1\\right)^2 - n^2 = n + (n+1)$.',
          'Here the numbers are $20$ and $21$, so the difference is $20 + 21 = 41$.',
          'Check the long way: $441 - 400 = 41$. It works!',
        ],
        answer: '$21^2 - 20^2 = 41$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $7^2$?',
      choices: ['$14$', '$49$', '$28$', '$77$'],
      answer: 1,
      solution: 'Squaring means multiplying the number by itself: $7^2 = 7 \\cdot 7 = 49$. Careful — $7 \\cdot 2 = 14$ is doubling, which is a different operation from squaring.',
    },
    {
      q: 'Which of these numbers is a perfect square?',
      choices: ['$50$', '$72$', '$81$', '$90$'],
      answer: 2,
      solution: 'A perfect square is a whole number times itself. Since $9 \\cdot 9 = 81$, the number $81$ is a perfect square. The others sit between squares: $49 < 50 < 64$, $64 < 72 < 81$, and $81 < 90 < 100$.',
    },
    {
      q: 'Compute $12^2$.',
      choices: ['$144$', '$24$', '$124$', '$122$'],
      answer: 0,
      solution: '$12^2 = 12 \\cdot 12$. Split it up: $12 \\cdot 10 + 12 \\cdot 2 = 120 + 24 = 144$.',
    },
    {
      q: 'What is $(-6)^2$?',
      choices: ['$-36$', '$-12$', '$12$', '$36$'],
      answer: 3,
      solution: 'The parentheses mean the whole number $-6$ is squared: $(-6) \\cdot (-6)$. A negative times a negative is positive, so the answer is $36$.',
    },
    {
      q: 'What is $-5^2$? (Look carefully — there are no parentheses!)',
      choices: ['$-25$', '$25$', '$-10$', '$10$'],
      answer: 0,
      solution: 'With no parentheses, the exponent acts first: $-5^2$ means $-(5^2) = -(25) = -25$. Compare with $(-5)^2 = 25$ — the parentheses make all the difference.',
    },
    {
      q: 'What is the units digit of $73^2$?',
      choices: ['$3$', '$6$', '$1$', '$9$'],
      answer: 3,
      solution: 'The units digit of a square depends only on the units digit of the number. Since $73$ ends in $3$, and $3^2 = 9$, the square $73^2 = 5329$ ends in $9$.',
    },
    {
      q: 'Compute $16^2$.',
      choices: ['$246$', '$256$', '$266$', '$226$'],
      answer: 1,
      solution: '$16^2 = 16 \\cdot 16 = 16 \\cdot 10 + 16 \\cdot 6 = 160 + 96 = 256$. This number shows up all over computers — it is $2^8$, eight factors of $2$ multiplied together!',
    },
    {
      q: 'Without squaring either number, find $25^2 - 24^2$.',
      choices: ['$1$', '$48$', '$49$', '$50$'],
      answer: 2,
      solution: 'Consecutive squares differ by the sum of the two numbers: $25^2 - 24^2 = 24 + 25 = 49$. Check: $625 - 576 = 49$. ✓',
    },
    {
      q: 'Compute the sum of the first $20$ odd numbers: $1 + 3 + 5 + \\cdots + 39$.',
      choices: ['$400$', '$380$', '$441$', '$1521$'],
      answer: 0,
      solution: 'The sum of the first $n$ odd numbers is always $n^2$ — each new odd number wraps another L-shaped layer around a growing square. With $20$ odd numbers, the sum is $20^2 = 400$. You can also pair the ends: $1 + 39 = 40$, ten pairs, $10 \\cdot 40 = 400$.',
    },
    {
      q: 'Compute $50^2 - 49^2 + 48^2 - 47^2$.',
      choices: ['$4$', '$190$', '$194$', '$198$'],
      answer: 2,
      solution: 'Handle each pair of consecutive squares with the difference pattern: $50^2 - 49^2 = 49 + 50 = 99$ and $48^2 - 47^2 = 47 + 48 = 95$. Then $99 + 95 = 194$ — no big squaring needed!',
    },
  ],
}

const s22 = {
  id: '2.2',
  title: 'Higher Exponents',
  learn: {
    concepts: [
      {
        heading: 'Exponents count repeated multiplication',
        body: 'In $2^4$, the base $2$ is the number being multiplied and the exponent $4$ counts how many factors there are: $2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$. Watch out for the classic mix-up: $2^4$ is not $2 \\cdot 4 = 8$. Exponents grow much faster than multiplication!',
      },
      {
        heading: 'Multiplying powers of the same base? Add the exponents',
        body: 'Look at $a^3 \\cdot a^2$: that is $(a \\cdot a \\cdot a) \\cdot (a \\cdot a)$, which is $5$ copies of $a$ multiplied together. So $a^3 \\cdot a^2 = a^5$. In general, $a^m \\cdot a^n = a^{m+n}$ — we add exponents because we are counting up all the factors.',
      },
      {
        heading: 'A power of a power? Multiply the exponents',
        body: 'What is $\\left(a^3\\right)^2$? It is $a^3 \\cdot a^3$ — two groups of three factors, which is $6$ factors total. So $\\left(a^3\\right)^2 = a^6$, and in general $\\left(a^m\\right)^n = a^{mn}$. Groups times group-size gives the total count.',
      },
      {
        heading: 'Negative bases: even exponents erase the minus, odd ones keep it',
        body: 'Each pair of negative factors multiplies to a positive. So $(-2)^4 = 16$ (two pairs, all positives) but $(-2)^5 = -32$ (two pairs and one leftover negative). Even exponent means positive result; odd exponent keeps the negative sign. And remember the order of operations: exponents act before multiplication, so $2 \\cdot 3^2 = 2 \\cdot 9 = 18$, not $6^2$.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $3^4$.',
        steps: [
          '$3^4$ means four factors of $3$: $3 \\cdot 3 \\cdot 3 \\cdot 3$.',
          'Multiply step by step: $3 \\cdot 3 = 9$, then $9 \\cdot 3 = 27$, then $27 \\cdot 3 = 81$.',
        ],
        answer: '$3^4 = 81$',
      },
      {
        problem: 'Write $2^5 \\cdot 2^3$ as a single power of $2$, then evaluate it.',
        steps: [
          '$2^5$ is five factors of $2$ and $2^3$ is three more, so multiplying them lines up $5 + 3 = 8$ factors of $2$.',
          'That gives $2^5 \\cdot 2^3 = 2^{5+3} = 2^8$.',
          'Now evaluate by doubling: $2, 4, 8, 16, 32, 64, 128, 256$.',
        ],
        answer: '$2^5 \\cdot 2^3 = 2^8 = 256$',
      },
      {
        problem: 'Evaluate $(-2)^5$.',
        steps: [
          'The exponent $5$ is odd, so after the negative pairs cancel, one minus sign survives — the answer will be negative.',
          'Ignore the sign for a moment: $2^5 = 32$.',
          'Attach the surviving minus sign: $(-2)^5 = -32$.',
        ],
        answer: '$(-2)^5 = -32$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $2^5$?',
      choices: ['$10$', '$25$', '$64$', '$32$'],
      answer: 3,
      solution: '$2^5$ means five factors of $2$: $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$. Doubling each time gives $2, 4, 8, 16, 32$. Note that $2 \\cdot 5 = 10$ is a different (and much smaller) thing.',
    },
    {
      q: 'What is $10^4$?',
      choices: ['$40$', '$10000$', '$1000$', '$100000$'],
      answer: 1,
      solution: 'Each factor of $10$ tacks on one zero, so $10^4 = 10000$ — a $1$ followed by exactly four zeros. The exponent counts the zeros!',
    },
    {
      q: 'Which expression means $3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3$?',
      choices: ['$3^7$', '$7^3$', '$3 \\cdot 7$', '$3^6$'],
      answer: 0,
      solution: 'Count the factors: there are seven $3$s multiplied together, so this is $3^7$. In $7^3$ the roles are flipped — that would be three $7$s, which is a different number ($343$ instead of $2187$).',
    },
    {
      q: 'What is $(-3)^3$?',
      choices: ['$27$', '$-9$', '$-27$', '$9$'],
      answer: 2,
      solution: '$(-3)^3 = (-3)(-3)(-3)$. The first two factors give $+9$, and one more negative factor gives $-27$. An odd exponent keeps the negative sign.',
    },
    {
      q: 'Write $5^2 \\cdot 5^3$ as a single power.',
      choices: ['$5^6$', '$5^5$', '$25^5$', '$25^6$'],
      answer: 1,
      solution: 'Multiplying powers of the same base lines up all the factors: two $5$s followed by three more $5$s makes $2 + 3 = 5$ factors. So $5^2 \\cdot 5^3 = 5^5$. We add the exponents — multiplying them would count factors that are not there.',
    },
    {
      q: 'Evaluate $\\left(2^3\\right)^2$.',
      choices: ['$64$', '$32$', '$16$', '$512$'],
      answer: 0,
      solution: 'A power of a power multiplies the exponents: $\\left(2^3\\right)^2 = 2^{3 \\cdot 2} = 2^6 = 64$. You can also see it directly: $\\left(2^3\\right)^2 = 8^2 = 64$.',
    },
    {
      q: 'Evaluate $2 \\cdot 3^2$.',
      choices: ['$36$', '$12$', '$18$', '$64$'],
      answer: 2,
      solution: 'Order of operations: the exponent acts first. So $3^2 = 9$, and then $2 \\cdot 9 = 18$. If we multiplied first we would get $6^2 = 36$, but the exponent only belongs to the $3$.',
    },
    {
      q: 'What is $(-1)^{50}$?',
      choices: ['$-1$', '$-50$', '$50$', '$1$'],
      answer: 3,
      solution: 'Every pair of $(-1)$ factors multiplies to $+1$. Since $50$ is even, the factors form $25$ perfect pairs with no leftover minus sign, so $(-1)^{50} = 1$.',
    },
    {
      q: 'Which power of $2$ equals $4^3 \\cdot 2^2$?',
      choices: ['$2^5$', '$2^6$', '$2^8$', '$2^{12}$'],
      answer: 2,
      solution: 'First turn everything into base $2$: since $4 = 2^2$, we have $4^3 = \\left(2^2\\right)^3 = 2^6$. Then $2^6 \\cdot 2^2 = 2^{6+2} = 2^8$. Check: $64 \\cdot 4 = 256 = 2^8$. ✓',
    },
    {
      q: 'What is the units digit of $7^{2026}$?',
      choices: ['$9$', '$7$', '$3$', '$1$'],
      answer: 0,
      solution: 'Track just the units digits of the powers of $7$: they go $7, 9, 3, 1$ and then repeat every $4$ steps. Since $2026 = 4 \\cdot 506 + 2$, the exponent $2026$ lands on the second entry of the cycle, which is $9$.',
    },
  ],
}

const s23 = {
  id: '2.3',
  title: 'Zero as an Exponent',
  learn: {
    concepts: [
      {
        heading: 'Follow the pattern downward',
        body: 'Watch what happens as the exponent drops by one: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$. Each step divides by the base $2$. To keep the pattern going, the next step must be $2 \\div 2 = 1$. So the pattern itself forces $2^0 = 1$!',
      },
      {
        heading: 'Every nonzero base agrees',
        body: 'The same staircase works for any nonzero base: $5^2 = 25$, $5^1 = 5$, so $5^0 = 5 \\div 5 = 1$. It even works for negatives: $(-8)^0 = 1$. Big or small, $1000000^0 = 1$. The only troublemaker is $0$ itself — $0^0$ is left undefined, since dividing by $0$ breaks the pattern.',
      },
      {
        heading: 'The product rule demands it too',
        body: 'Here is a second reason. The rule $a^m \\cdot a^n = a^{m+n}$ says $a^3 \\cdot a^0 = a^{3+0} = a^3$. So multiplying by $a^0$ changes nothing — and the only number that multiplies without changing anything is $1$. The rules of exponents all point to the same answer: $a^0 = 1$.',
      },
      {
        heading: 'Mind the minus sign',
        body: 'Parentheses matter here just like with squares. $(-7)^0 = 1$ because the whole number $-7$ is raised to the zero power. But $-7^0$ means $-(7^0) = -1$ — the exponent grabs only the $7$, and the minus sign waits outside.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $17^0 + 4^0$.',
        steps: [
          'Any nonzero number to the zero power is $1$, no matter how big or small the base is.',
          'So $17^0 = 1$ and $4^0 = 1$.',
          'Add them: $1 + 1 = 2$.',
        ],
        answer: '$17^0 + 4^0 = 2$',
      },
      {
        problem: 'Evaluate $6^0 \\cdot 6^2$ two different ways.',
        steps: [
          'Way 1: evaluate each power. $6^0 = 1$ and $6^2 = 36$, so the product is $1 \\cdot 36 = 36$.',
          'Way 2: use the product rule. $6^0 \\cdot 6^2 = 6^{0+2} = 6^2 = 36$.',
          'Both roads give $36$ — a great sign that $6^0 = 1$ is the right definition.',
        ],
        answer: '$6^0 \\cdot 6^2 = 36$',
      },
      {
        problem: 'Evaluate $5 \\cdot 9^0$.',
        steps: [
          'Order of operations: the exponent acts before the multiplication, and it belongs only to the $9$.',
          '$9^0 = 1$, so the expression becomes $5 \\cdot 1$.',
        ],
        answer: '$5 \\cdot 9^0 = 5$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $9^0$?',
      choices: ['$0$', '$9$', '$1$', '$90$'],
      answer: 2,
      solution: 'Follow the staircase: $9^2 = 81$, $9^1 = 9$, and each step down divides by $9$. So $9^0 = 9 \\div 9 = 1$. Any nonzero number to the zero power is $1$.',
    },
    {
      q: 'What is $(-12)^0$?',
      choices: ['$1$', '$-1$', '$0$', '$-12$'],
      answer: 0,
      solution: 'The parentheses mean the whole number $-12$ is raised to the zero power, and any nonzero base to the zero power is $1$. So $(-12)^0 = 1$.',
    },
    {
      q: 'Compute $4^0 + 5^0$.',
      choices: ['$0$', '$9$', '$1$', '$2$'],
      answer: 3,
      solution: 'Each zero power equals $1$: $4^0 = 1$ and $5^0 = 1$. Their sum is $1 + 1 = 2$. (Adding the bases would give $9$, but the exponents got there first!)',
    },
    {
      q: 'Compute $7 \\cdot 2^0$.',
      choices: ['$14$', '$7$', '$0$', '$1$'],
      answer: 1,
      solution: 'The exponent belongs only to the $2$, and it acts before the multiplication: $2^0 = 1$. So $7 \\cdot 2^0 = 7 \\cdot 1 = 7$.',
    },
    {
      q: 'What is $-8^0$? (No parentheses this time!)',
      choices: ['$1$', '$0$', '$-8$', '$-1$'],
      answer: 3,
      solution: 'Without parentheses, the exponent grabs only the $8$: $-8^0 = -(8^0) = -(1) = -1$. Compare with $(-8)^0 = 1$ — parentheses change the story.',
    },
    {
      q: 'Compute $3^0 + 3^1 + 3^2$.',
      choices: ['$13$', '$12$', '$9$', '$27$'],
      answer: 0,
      solution: 'Evaluate each term: $3^0 = 1$, $3^1 = 3$, and $3^2 = 9$. Adding gives $1 + 3 + 9 = 13$. Do not forget the $1$ hiding in $3^0$!',
    },
    {
      q: 'What is $\\left(4^5\\right)^0$?',
      choices: ['$1024$', '$1$', '$0$', '$4$'],
      answer: 1,
      solution: 'You never need to work out $4^5$! It is some big nonzero number, and any nonzero number to the zero power is $1$. So $\\left(4^5\\right)^0 = 1$. (The power-of-a-power rule agrees: $4^{5 \\cdot 0} = 4^0 = 1$.)',
    },
    {
      q: 'Compute $2^3 \\cdot 2^0 \\cdot 2^1$.',
      choices: ['$8$', '$0$', '$16$', '$64$'],
      answer: 2,
      solution: 'Add the exponents: $2^{3+0+1} = 2^4 = 16$. The $2^0$ contributes a factor of $1$, not $0$ — multiplying by it changes nothing.',
    },
    {
      q: 'Compute $10^0 + 10^1 + 10^2 + 10^3$.',
      choices: ['$1111$', '$1110$', '$1000$', '$1234$'],
      answer: 0,
      solution: 'The terms are $1, 10, 100,$ and $1000$. Each power fills its own place value, so the sum is $1111$ — one in each of the first four places. Remember, $10^0 = 1$ supplies the ones digit.',
    },
    {
      q: 'Compute $(1 + 2 + 3)^0 + 1^0 + 2^0 + 3^0$.',
      choices: ['$12$', '$4$', '$0$', '$3$'],
      answer: 1,
      solution: 'Work inside the parentheses first: $1 + 2 + 3 = 6$, and $6^0 = 1$. Each of $1^0$, $2^0$, and $3^0$ is also $1$. The total is $1 + 1 + 1 + 1 = 4$.',
    },
  ],
}

const s24 = {
  id: '2.4',
  title: 'Negative Exponents',
  learn: {
    concepts: [
      {
        heading: 'The staircase keeps going below zero',
        body: 'We found $2^0 = 1$ by dividing by the base at each step: $2^2 = 4$, $2^1 = 2$, $2^0 = 1$. Nothing stops us from taking another step! Dividing by $2$ again gives $2^{-1} = \\frac{1}{2}$, then $2^{-2} = \\frac{1}{4}$, then $2^{-3} = \\frac{1}{8}$. Negative exponents are just the pattern continuing past zero.',
      },
      {
        heading: 'A negative exponent means "reciprocal," not "negative number"',
        body: 'The rule is $a^{-n} = \\frac{1}{a^n}$. So $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$, which is a small positive number — not $-25$! The minus sign in the exponent flips the number over; it does not make anything negative.',
      },
      {
        heading: 'Dividing powers subtracts exponents',
        body: 'Since dividing cancels matching factors, $\\frac{a^m}{a^n} = a^{m-n}$. When the bottom has more factors, the subtraction goes negative: $\\frac{2^3}{2^5} = 2^{3-5} = 2^{-2}$. That makes sense — three of the five bottom factors cancel, leaving $\\frac{1}{2 \\cdot 2} = \\frac{1}{4} = 2^{-2}$.',
      },
      {
        heading: 'Fractions flip, and powers of 10 shrink',
        body: 'A negative exponent on a fraction flips it: $\\left(\\frac{2}{3}\\right)^{-1} = \\frac{3}{2}$, and $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$. Negative powers of $10$ write tiny decimals: $10^{-1} = 0.1$, $10^{-2} = 0.01$, $10^{-3} = 0.001$. The exponent counts how many places the $1$ sits to the right of the decimal point.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $5^{-2}$.',
        steps: [
          'The negative exponent flips the power into a reciprocal: $5^{-2} = \\frac{1}{5^2}$.',
          'Now evaluate the square: $5^2 = 25$.',
        ],
        answer: '$5^{-2} = \\frac{1}{25}$',
      },
      {
        problem: 'Simplify $\\frac{3^2}{3^5}$ and write the result as a fraction.',
        steps: [
          'Dividing powers of the same base subtracts exponents: $\\frac{3^2}{3^5} = 3^{2-5} = 3^{-3}$.',
          'A negative exponent means reciprocal: $3^{-3} = \\frac{1}{3^3}$.',
          'Since $3^3 = 27$, the result is $\\frac{1}{27}$. Check by canceling: two of the bottom\'s five $3$s cancel with the top, leaving three $3$s on the bottom. ✓',
        ],
        answer: '$\\frac{3^2}{3^5} = 3^{-3} = \\frac{1}{27}$',
      },
      {
        problem: 'Write $0.0001$ as a power of $10$.',
        steps: [
          'Count the places: the $1$ in $0.0001$ sits four places to the right of the decimal point.',
          'Each place to the right is another division by $10$, so $0.0001 = \\frac{1}{10^4}$.',
          'As a single power, that is $10^{-4}$.',
        ],
        answer: '$0.0001 = 10^{-4}$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $2^{-3}$?',
      choices: ['$-8$', '$\\frac{1}{8}$', '$-6$', '$\\frac{1}{6}$'],
      answer: 1,
      solution: 'The negative exponent means reciprocal: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. The answer is a small positive fraction — the minus sign flips, it never makes the result negative.',
    },
    {
      q: 'What is $10^{-2}$?',
      choices: ['$-100$', '$-20$', '$\\frac{1}{20}$', '$\\frac{1}{100}$'],
      answer: 3,
      solution: '$10^{-2} = \\frac{1}{10^2} = \\frac{1}{100}$, which is the decimal $0.01$. Two steps below $10^0 = 1$ on the divide-by-$10$ staircase.',
    },
    {
      q: 'Write $\\frac{1}{49}$ as a power of $7$.',
      choices: ['$7^{2}$', '$7^{-1}$', '$7^{-2}$', '$-7^{2}$'],
      answer: 2,
      solution: 'Since $49 = 7^2$, we have $\\frac{1}{49} = \\frac{1}{7^2} = 7^{-2}$. The negative exponent is exactly the tool for writing "one over a power."',
    },
    {
      q: 'What is $4^{-1}$?',
      choices: ['$\\frac{1}{4}$', '$-4$', '$-\\frac{1}{4}$', '$4$'],
      answer: 0,
      solution: 'An exponent of $-1$ takes the reciprocal: $4^{-1} = \\frac{1}{4}$. On the staircase: $4^1 = 4$, $4^0 = 1$, and one more division by $4$ gives $\\frac{1}{4}$.',
    },
    {
      q: 'Evaluate $\\frac{2^3}{2^7}$.',
      choices: ['$16$', '$\\frac{1}{16}$', '$-16$', '$\\frac{1}{4}$'],
      answer: 1,
      solution: 'Subtract exponents: $\\frac{2^3}{2^7} = 2^{3-7} = 2^{-4} = \\frac{1}{2^4} = \\frac{1}{16}$. The bottom had four more factors of $2$ than the top, and those four survive in the denominator.',
    },
    {
      q: 'What is $\\left(\\frac{2}{5}\\right)^{-1}$?',
      choices: ['$-\\frac{5}{2}$', '$\\frac{2}{5}$', '$-\\frac{2}{5}$', '$\\frac{5}{2}$'],
      answer: 3,
      solution: 'An exponent of $-1$ means reciprocal, and the reciprocal of a fraction is its flip: $\\left(\\frac{2}{5}\\right)^{-1} = \\frac{5}{2}$. Check: $\\frac{2}{5} \\cdot \\frac{5}{2} = 1$. ✓',
    },
    {
      q: 'Write $10^{-3}$ as a decimal.',
      choices: ['$0.001$', '$0.01$', '$0.0001$', '$-1000$'],
      answer: 0,
      solution: '$10^{-3} = \\frac{1}{1000}$. As a decimal, the $1$ sits three places right of the decimal point: $0.001$. The exponent $-3$ counts those three places.',
    },
    {
      q: 'Compute $2^{-2} + 2^{-1}$.',
      choices: ['$\\frac{1}{8}$', '$-\\frac{3}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{3}$'],
      answer: 2,
      solution: 'Convert each power: $2^{-2} = \\frac{1}{4}$ and $2^{-1} = \\frac{1}{2}$. With a common denominator, $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$. Both terms are positive, so the sum is too.',
    },
    {
      q: 'Evaluate $\\left(\\frac{3}{4}\\right)^{-2}$.',
      choices: ['$\\frac{16}{9}$', '$\\frac{9}{16}$', '$-\\frac{16}{9}$', '$\\frac{3}{8}$'],
      answer: 0,
      solution: 'The negative exponent flips the fraction first: $\\left(\\frac{3}{4}\\right)^{-2} = \\left(\\frac{4}{3}\\right)^{2}$. Then square top and bottom: $\\frac{4^2}{3^2} = \\frac{16}{9}$. Flipping before squaring keeps everything tidy.',
    },
    {
      q: 'Compute $2^{-1} + 2^{-2} + 2^{-3} + 2^{-4}$.',
      choices: ['$\\frac{31}{32}$', '$\\frac{15}{16}$', '$1$', '$\\frac{4}{30}$'],
      answer: 1,
      solution: 'The terms are $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{16}$. Over the common denominator $16$: $\\frac{8}{16} + \\frac{4}{16} + \\frac{2}{16} + \\frac{1}{16} = \\frac{15}{16}$. Each new term fills half of what is left below $1$ — the sum sneaks up on $1$ but never reaches it!',
    },
  ],
}

export default {
  id: 'prealgebra-ch02',
  book: 'prealgebra',
  number: 2,
  title: 'Exponents',
  intro:
    'What happens when a number multiplies itself again and again? Exponents give us a compact way to write it down — and they come with rules that turn monster calculations into a few quick steps. In this chapter you will master squares, tall towers of powers, and the surprising story of what an exponent of zero (or less!) must mean.',
  sections: [s21, s22, s23, s24],
  challenge: [
    {
      q: 'Compute $(-2)^6 - 2^6$.',
      choices: ['$128$', '$-128$', '$0$', '$64$'],
      answer: 2,
      solution: 'The even exponent erases the minus sign: $(-2)^6 = 64$, and of course $2^6 = 64$ too. Their difference is $64 - 64 = 0$. No heavy lifting once you spot the even exponent!',
    },
    {
      q: 'What is the units digit of $4^{50}$?',
      choices: ['$4$', '$6$', '$2$', '$8$'],
      answer: 1,
      solution: 'The units digits of powers of $4$ alternate: $4, 16, 64, 256, \\ldots$ gives the pattern $4, 6, 4, 6, \\ldots$ — a $4$ for odd exponents and a $6$ for even ones. Since $50$ is even, the units digit is $6$.',
    },
    {
      q: 'Evaluate $\\frac{2^{10} \\cdot 2^{5}}{2^{12}}$.',
      choices: ['$8$', '$\\frac{1}{8}$', '$4$', '$2$'],
      answer: 0,
      solution: 'Combine the top first: $2^{10} \\cdot 2^{5} = 2^{15}$. Then divide: $\\frac{2^{15}}{2^{12}} = 2^{15-12} = 2^3 = 8$. Add for the product, subtract for the quotient.',
    },
    {
      q: 'Compute $3^{-2} + 3^{-1} + 3^0 + 3^1 + 3^2$.',
      choices: ['$13$', '$\\frac{120}{9}$', '$15$', '$\\frac{121}{9}$'],
      answer: 3,
      solution: 'The five terms are $\\frac{1}{9}, \\frac{1}{3}, 1, 3, 9$. Put everything over $9$: $\\frac{1 + 3 + 9 + 27 + 81}{9} = \\frac{121}{9}$. Bonus beauty: $121 = 11^2$, so the sum is $\\left(\\frac{11}{3}\\right)^2$!',
    },
    {
      q: 'If $2^x = 32$, what is $x^2$?',
      choices: ['$25$', '$10$', '$32$', '$5$'],
      answer: 0,
      solution: 'Climb the powers of $2$: $2, 4, 8, 16, 32$ — that is five doublings, so $2^5 = 32$ and $x = 5$. The question asks for $x^2$, which is $5^2 = 25$. Always read to the end of the problem!',
    },
    {
      q: 'Evaluate $\\left(5^{-1}\\right)^{-2}$.',
      choices: ['$\\frac{1}{25}$', '$25$', '$-25$', '$\\frac{1}{5}$'],
      answer: 1,
      solution: 'A power of a power multiplies exponents: $\\left(5^{-1}\\right)^{-2} = 5^{(-1)(-2)} = 5^2 = 25$. Two flips bring you right side up: the reciprocal of the reciprocal, squared.',
    },
    {
      q: 'Which of these numbers is the largest?',
      choices: ['$3^6$', '$10^3$', '$2^{10}$', '$5^4$'],
      answer: 2,
      solution: 'Evaluate each: $3^6 = 729$, $10^3 = 1000$, $2^{10} = 1024$, and $5^4 = 625$. The small base $2$ wins because its exponent is biggest — $2^{10} = 1024$ edges out $10^3 = 1000$. Exponents beat big bases in the long run!',
    },
    {
      q: 'Compute $\\left(\\frac{1}{2}\\right)^{-3} + \\left(\\frac{1}{3}\\right)^{-2}$.',
      choices: ['$\\frac{17}{72}$', '$-17$', '$6$', '$17$'],
      answer: 3,
      solution: 'Negative exponents flip the fractions: $\\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8$ and $\\left(\\frac{1}{3}\\right)^{-2} = 3^2 = 9$. So the sum is $8 + 9 = 17$ — a whole number, even though we started with fractions!',
    },
    {
      q: 'If $9^{10} = 3^n$, what is $n$?',
      choices: ['$12$', '$20$', '$90$', '$5$'],
      answer: 1,
      solution: 'Rewrite the base: $9 = 3^2$, so $9^{10} = \\left(3^2\\right)^{10} = 3^{2 \\cdot 10} = 3^{20}$. Matching exponents gives $n = 20$.',
    },
    {
      q: 'Two consecutive perfect squares differ by $45$. What is the larger square?',
      choices: ['$529$', '$484$', '$2025$', '$121$'],
      answer: 0,
      solution: 'Consecutive squares $n^2$ and $\\left(n+1\\right)^2$ differ by $n + (n+1)$. Solve $n + (n+1) = 45$: that means $2n + 1 = 45$, so $n = 22$. The larger square is $23^2 = 529$. Check: $529 - 484 = 45$. ✓',
    },
    {
      q: 'Evaluate $\\frac{10^5 \\cdot 10^{-8}}{10^{-6}}$.',
      choices: ['$100$', '$0.001$', '$1000$', '$10^{-9}$'],
      answer: 2,
      solution: 'Combine all the exponents: the top gives $5 + (-8) = -3$, and dividing by $10^{-6}$ subtracts $-6$, which adds $6$. So the result is $10^{-3+6} = 10^3 = 1000$. Subtracting a negative exponent boosts you up!',
    },
    {
      q: 'Compute $2^0 + 2^1 + 2^2 + 2^3 + 2^4 + 2^5$.',
      choices: ['$64$', '$31$', '$62$', '$63$'],
      answer: 3,
      solution: 'Add them up: $1 + 2 + 4 + 8 + 16 + 32 = 63$. Notice the magic: each power of $2$ is one more than the sum of all the smaller ones, so the total is always one less than the next power — here $2^6 - 1 = 63$.',
    },
  ],
  worksheet: [
    {
      q: 'Evaluate $13^2$.',
      answer: '$169$',
      solution: '$13^2 = 13 \\cdot 13 = 13 \\cdot 10 + 13 \\cdot 3 = 130 + 39 = 169$.',
    },
    {
      q: 'Evaluate $2^6$.',
      answer: '$64$',
      solution: 'Double six times starting from $1$: $2, 4, 8, 16, 32, 64$. So $2^6 = 64$.',
    },
    {
      q: 'Evaluate $(-4)^3$.',
      answer: '$-64$',
      solution: '$(-4)^3 = (-4)(-4)(-4)$. The first pair gives $+16$, and one more negative factor gives $-64$. The odd exponent keeps the minus sign.',
    },
    {
      q: 'Write $3^4 \\cdot 3^5$ as a single power of $3$.',
      answer: '$3^9$',
      solution: 'Multiplying powers of the same base adds the exponents: $3^4 \\cdot 3^5 = 3^{4+5} = 3^9$. Four factors of $3$ followed by five more makes nine in all.',
    },
    {
      q: 'Evaluate $12^0 + 12^1$.',
      answer: '$13$',
      solution: 'Any nonzero number to the zero power is $1$, so $12^0 = 1$, and $12^1 = 12$. The sum is $1 + 12 = 13$.',
    },
    {
      q: 'Evaluate $6^{-2}$. Write your answer as a fraction.',
      answer: '$\\frac{1}{36}$',
      solution: 'The negative exponent means reciprocal: $6^{-2} = \\frac{1}{6^2} = \\frac{1}{36}$ — a small positive fraction, not a negative number.',
    },
    {
      q: 'Evaluate $\\frac{7^{15}}{7^{13}}$.',
      answer: '$49$',
      solution: 'Dividing powers subtracts exponents: $\\frac{7^{15}}{7^{13}} = 7^{15-13} = 7^2 = 49$. Thirteen of the fifteen top factors cancel, leaving just two $7$s.',
    },
    {
      q: 'Evaluate $\\left(2^4\\right)^3 \\div 2^{10}$.',
      answer: '$4$',
      solution: 'First the power of a power: $\\left(2^4\\right)^3 = 2^{4 \\cdot 3} = 2^{12}$. Then divide: $2^{12} \\div 2^{10} = 2^{12-10} = 2^2 = 4$.',
    },
    {
      q: 'Find the number $x$ that makes $10^x = 0.00001$ true.',
      answer: '$x = -5$',
      solution: 'The $1$ in $0.00001$ sits five places right of the decimal point, so $0.00001 = \\frac{1}{10^5} = 10^{-5}$. Matching exponents gives $x = -5$.',
    },
    {
      q: 'Compute $61^2 - 60^2$ without squaring either number, and explain what perfect square your answer happens to be.',
      answer: '$121 = 11^2$',
      solution: 'Consecutive squares differ by the sum of the two numbers: $61^2 - 60^2 = 60 + 61 = 121$. Delightfully, $121 = 11^2$ — the difference of two squares turned out to be a square itself!',
    },
  ],
}
