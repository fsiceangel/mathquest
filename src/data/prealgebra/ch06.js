// Prealgebra — Chapter 6: Decimals
// All problems, explanations, and examples are original MathQuest content.

const s61 = {
  id: '6.1',
  title: 'Arithmetic with Decimals',
  learn: {
    concepts: [
      {
        heading: 'Place value keeps going',
        body: 'The decimal point does not stop place value — it just continues the pattern to the right, with each place worth ten times less: tenths, hundredths, thousandths. In $2.583$, the $5$ means $\\frac{5}{10}$, the $8$ means $\\frac{8}{100}$, and the $3$ means $\\frac{3}{1000}$.',
      },
      {
        heading: 'To add or subtract, line up the point',
        body: 'Adding tenths to tenths and hundredths to hundredths only works if the places match — so stack the numbers with their decimal points in a straight column. Writing $3.7$ as $3.70$ is fine: extra zeros at the end change nothing.',
      },
      {
        heading: 'To multiply, count decimal places',
        body: 'Multiply as if there were no decimal points, then count the total number of decimal places in the two factors — that is how many the answer gets. For $0.3 \\times 0.07$: since $3 \\times 7 = 21$ and there are $1 + 2 = 3$ decimal places, the answer is $0.021$.',
      },
      {
        heading: 'To divide, make the divisor whole',
        body: 'Dividing by a whole number is easy: bring the decimal point straight up into the answer. Dividing by a decimal? Shift the point in BOTH numbers the same number of places until the divisor is whole — that multiplies both by the same power of $10$, so the answer does not change. Multiplying by $10$, $100$, or $1000$ slides the point right; dividing slides it left.',
      },
    ],
    examples: [
      {
        problem: 'Compute $3.7 + 12.45$.',
        steps: [
          'Line up the decimal points, and write $3.7$ as $3.70$ so both numbers have hundredths.',
          'Add place by place: $3.70 + 12.45$.',
          'Hundredths: $0 + 5 = 5$. Tenths: $7 + 4 = 11$, so write $1$ and carry. Wholes: $3 + 12 + 1 = 16$.',
        ],
        answer: '$3.7 + 12.45 = 16.15$',
      },
      {
        problem: 'Compute $0.6 \\times 0.15$.',
        steps: [
          'Ignore the points for a moment: $6 \\times 15 = 90$.',
          'Count decimal places: $0.6$ has one and $0.15$ has two, so the answer needs $1 + 2 = 3$.',
          'Place the point: $0.090$, which is the same as $0.09$.',
        ],
        answer: '$0.6 \\times 0.15 = 0.09$',
      },
      {
        problem: 'Compute $8.4 \\div 0.07$.',
        steps: [
          'The divisor $0.07$ is not whole, so shift both decimal points two places right: $8.4 \\div 0.07 = 840 \\div 7$.',
          'Both numbers got $100$ times bigger, so the quotient is unchanged.',
          'Now divide: $840 \\div 7 = 120$.',
        ],
        answer: '$8.4 \\div 0.07 = 120$',
      },
    ],
  },
  problems: [
    {
      q: 'In the number $3.517$, which digit is in the hundredths place?',
      choices: ['$3$', '$5$', '$1$', '$7$'],
      answer: 2,
      solution: 'Moving right from the decimal point: $5$ is in the tenths place, $1$ is in the hundredths place, and $7$ is in the thousandths place. So the hundredths digit is $1$.',
    },
    {
      q: 'Compute $2.5 + 0.35$.',
      choices: ['$2.75$', '$2.85$', '$6.0$', '$2.95$'],
      answer: 1,
      solution: 'Line up the decimal points and write $2.5$ as $2.50$. Then $2.50 + 0.35 = 2.85$. (Lining up the right-hand ends instead — as if adding $25 + 35$ — is the classic trap!)',
    },
    {
      q: 'Compute $4.6 \\times 10$.',
      choices: ['$4.60$', '$0.46$', '$460$', '$46$'],
      answer: 3,
      solution: 'Multiplying by $10$ slides the decimal point one place to the right: $4.6$ becomes $46$. Each digit moves up to a place worth ten times more.',
    },
    {
      q: 'Compute $7 - 2.6$.',
      choices: ['$4.4$', '$5.6$', '$4.6$', '$5.4$'],
      answer: 0,
      solution: 'Write $7$ as $7.0$ and line up the points: $7.0 - 2.6$. Since $70$ tenths minus $26$ tenths is $44$ tenths, the answer is $4.4$. Check by adding back: $4.4 + 2.6 = 7$. ✓',
    },
    {
      q: 'Compute $0.4 \\times 0.2$.',
      choices: ['$0.8$', '$0.6$', '$8$', '$0.08$'],
      answer: 3,
      solution: 'First $4 \\times 2 = 8$. The factors have $1 + 1 = 2$ decimal places in total, so the answer needs two: $0.08$. It makes sense that the answer is small — we are taking a fraction of a fraction!',
    },
    {
      q: 'Compute $3.12 \\div 4$.',
      choices: ['$0.87$', '$7.8$', '$0.78$', '$0.078$'],
      answer: 2,
      solution: 'The divisor $4$ is already whole, so divide and bring the decimal point straight up. Since $312 \\div 4 = 78$, we get $3.12 \\div 4 = 0.78$. Check: $0.78 \\times 4 = 3.12$. ✓',
    },
    {
      q: 'Compute $6.3 \\div 0.9$.',
      choices: ['$7$', '$0.7$', '$70$', '$5.4$'],
      answer: 0,
      solution: 'Shift both decimal points one place right: $6.3 \\div 0.9 = 63 \\div 9 = 7$. The answer is a plain whole number — there are exactly $7$ pieces of size $0.9$ inside $6.3$.',
    },
    {
      q: 'Compute $2.75 \\div 100$.',
      choices: ['$0.275$', '$27.5$', '$0.0275$', '$275$'],
      answer: 2,
      solution: 'Dividing by $100$ slides the decimal point two places to the left. Starting from $2.75$, one slide gives $0.275$ and a second slide gives $0.0275$.',
    },
    {
      q: 'Compute $1.25 \\times 0.8$.',
      choices: ['$0.1$', '$1$', '$10$', '$0.01$'],
      answer: 1,
      solution: 'Ignore the points: $125 \\times 8 = 1000$. The factors have $2 + 1 = 3$ decimal places, so place the point three spots in: $1.000$, which is exactly $1$. A neat pair — $1.25$ and $0.8$ multiply to $1$!',
    },
    {
      q: 'A ribbon $7.2$ meters long is cut into pieces that are each $0.45$ meters long. How many pieces are there?',
      choices: ['$16$', '$1.6$', '$160$', '$18$'],
      answer: 0,
      solution: 'We need $7.2 \\div 0.45$. Shift both points two places right: $720 \\div 45$. Since $45 \\times 16 = 720$, there are $16$ pieces. A quick estimate confirms it: $0.45$ is a bit less than half a meter, so we expect a bit more than $14$ pieces.',
    },
  ],
}

const s62 = {
  id: '6.2',
  title: 'Rounding',
  learn: {
    concepts: [
      {
        heading: 'Rounding finds the nearest neighbor',
        body: 'To round a number is to replace it with the closest "nice" number of the kind you want — the nearest whole number, the nearest tenth, and so on. On a number line, $4.8$ sits closer to $5$ than to $4$, so $4.8$ rounded to the nearest whole number is $5$.',
      },
      {
        heading: 'One digit makes the decision',
        body: 'Look at the single digit just to the RIGHT of the place you are rounding to. If it is $5, 6, 7, 8,$ or $9$, round up; if it is $0, 1, 2, 3,$ or $4$, round down. Everything past that deciding digit gets dropped.',
      },
      {
        heading: 'Ties round up',
        body: 'A number like $3.5$ is exactly halfway between $3$ and $4$ — there is no nearest neighbor! The usual agreement, called round-half-up, breaks the tie by rounding up: $3.5$ rounds to $4$.',
      },
      {
        heading: 'Estimate to catch mistakes',
        body: 'Rounding is also a lie detector for arithmetic. Before trusting an answer like $4.97 \\times 8.1 = 402.57$, round: $5 \\times 8 = 40$. The claimed answer is ten times too big — the decimal point must have slipped!',
      },
    ],
    examples: [
      {
        problem: 'Round $7.468$ to the nearest tenth.',
        steps: [
          'The tenths digit is $4$. The deciding digit is the one just to its right: the hundredths digit, $6$.',
          'Since $6 \\ge 5$, round the tenths digit up from $4$ to $5$ and drop the rest.',
        ],
        answer: '$7.468$ rounds to $7.5$',
      },
      {
        problem: 'Round $3.049$ to the nearest hundredth.',
        steps: [
          'The hundredths digit is $4$. The deciding digit is the thousandths digit, $9$.',
          'Since $9 \\ge 5$, round up: the hundredths digit becomes $5$.',
          'Careful: only the ONE digit to the right decides. We do not round $3.049$ to $3.05$ and then again to $3.1$ — one round per customer!',
        ],
        answer: '$3.049$ rounds to $3.05$',
      },
      {
        problem: 'Ben computed $6.13 \\times 4.9$ and got $300.37$. Use estimation to check whether that is reasonable.',
        steps: [
          'Round each factor to a friendly number: $6.13 \\approx 6$ and $4.9 \\approx 5$.',
          'Estimate: $6 \\times 5 = 30$.',
          'Ben\'s answer of $300.37$ is about ten times the estimate, so his decimal point slipped one place. The true product is $30.037$.',
        ],
        answer: 'The answer should be near $30$, so $300.37$ is not reasonable — the correct product is $30.037$',
      },
    ],
  },
  problems: [
    {
      q: 'Round $6.7$ to the nearest whole number.',
      choices: ['$6$', '$7$', '$6.5$', '$8$'],
      answer: 1,
      solution: 'The deciding digit is the tenths digit, $7$. Since $7 \\ge 5$, round up: $6.7$ rounds to $7$. On the number line, $6.7$ is only $0.3$ away from $7$ but a full $0.7$ away from $6$.',
    },
    {
      q: 'Round $3.14$ to the nearest tenth.',
      choices: ['$3.1$', '$3.2$', '$3$', '$3.14$'],
      answer: 0,
      solution: 'The deciding digit is the hundredths digit, $4$. Since $4 < 5$, keep the tenths digit as it is and drop the rest: $3.14$ rounds to $3.1$.',
    },
    {
      q: 'Round $0.85$ to the nearest tenth.',
      choices: ['$0.8$', '$0.9$', '$1$', '$0.85$'],
      answer: 1,
      solution: '$0.85$ is exactly halfway between $0.8$ and $0.9$. The round-half-up convention breaks the tie by rounding up, so $0.85$ rounds to $0.9$.',
    },
    {
      q: 'Round $12.348$ to the nearest hundredth.',
      choices: ['$12.34$', '$12.3$', '$12.35$', '$12.4$'],
      answer: 2,
      solution: 'The deciding digit is the thousandths digit, $8$. Since $8 \\ge 5$, the hundredths digit rounds up from $4$ to $5$: the answer is $12.35$.',
    },
    {
      q: 'Round $9.96$ to the nearest tenth.',
      choices: ['$9.9$', '$9.10$', '$10.0$', '$9.0$'],
      answer: 2,
      solution: 'The deciding digit is $6$, so the tenths digit $9$ must round up. Rounding $9$ tenths up makes $10$ tenths, which carries into the ones place: $9.96$ rounds to $10.0$. (Writing $9.10$ would actually be a SMALLER number than $9.9$!)',
    },
    {
      q: 'Which of these numbers rounds to $5$ when rounded to the nearest whole number?',
      choices: ['$4.4$', '$5.5$', '$5.61$', '$4.5$'],
      answer: 3,
      solution: 'Check each: $4.4$ rounds down to $4$; $5.5$ is a tie, which rounds UP to $6$; $5.61$ rounds to $6$; and $4.5$ is a tie that rounds up to $5$. ✓ Only $4.5$ lands on $5$.',
    },
    {
      q: 'To estimate $19.87 + 30.2$, round each number to the nearest whole number and add. What estimate do you get?',
      choices: ['$50$', '$49$', '$60$', '$40$'],
      answer: 0,
      solution: '$19.87$ rounds to $20$ and $30.2$ rounds to $30$, so the estimate is $20 + 30 = 50$. The exact sum, $50.07$, is impressively close.',
    },
    {
      q: 'Round $2.997$ to the nearest hundredth.',
      choices: ['$2.99$', '$3.00$', '$2.90$', '$3.10$'],
      answer: 1,
      solution: 'The deciding digit is the thousandths digit, $7$, so round up. The hundredths digit $9$ becomes $10$, which carries: $2.99 + 0.01 = 3.00$. The zeros matter — they show we rounded to the hundredths place.',
    },
    {
      q: 'Round $4.548$ to the nearest tenth.',
      choices: ['$4.6$', '$4.55$', '$4.5$', '$4$'],
      answer: 2,
      solution: 'Only the digit right next to the tenths place decides: the hundredths digit is $4$, and $4 < 5$, so we round down to $4.5$. Rounding in two steps — first to $4.55$, then up to $4.6$ — is tempting but not allowed: $4.548$ is genuinely closer to $4.5$ than to $4.6$.',
    },
    {
      q: 'A decimal rounds to $3.7$ when rounded to the nearest tenth. Which of these could it be?',
      choices: ['$3.649$', '$3.75$', '$3.64$', '$3.749$'],
      answer: 3,
      solution: 'To round to $3.7$, a number must be at least $3.65$ and less than $3.75$. Check each: $3.649$ and $3.64$ round to $3.6$; the tie $3.75$ rounds UP to $3.8$; but $3.749$ rounds to $3.7$. ✓',
    },
  ],
}

const s63 = {
  id: '6.3',
  title: 'Decimals and Fractions',
  learn: {
    concepts: [
      {
        heading: 'Read the decimal aloud, and the fraction appears',
        body: 'A terminating decimal IS a fraction with a power of $10$ on the bottom. Say "$0.37$" out loud — "thirty-seven hundredths" — and you have written it: $\\frac{37}{100}$. After that, reduce if you can: $0.4 = \\frac{4}{10} = \\frac{2}{5}$.',
      },
      {
        heading: 'Fractions become decimals two ways',
        body: 'You can build up the denominator to a power of $10$ — for example, $\\frac{3}{4} = \\frac{75}{100} = 0.75$ — or simply divide the top by the bottom. Both roads lead to the same decimal.',
      },
      {
        heading: 'Which fractions terminate?',
        body: 'A fraction in simplest form terminates exactly when its denominator is built only from $2$s and $5$s — because only then can you multiply up to $10$, $100$, or $1000$. So $\\frac{7}{20}$ terminates ($20 = 2 \\times 2 \\times 5$), but $\\frac{1}{6}$ does not ($6 = 2 \\times 3$, and that $3$ ruins everything). Reduce FIRST: $\\frac{3}{6}$ looks doomed, but it reduces to $\\frac{1}{2} = 0.5$.',
      },
      {
        heading: 'To compare, speak one language',
        body: 'Comparing a decimal to a fraction is hard only while they are in different costumes. Convert one of them so both are decimals (or both fractions), then compare place by place.',
      },
    ],
    examples: [
      {
        problem: 'Write $0.35$ as a fraction in simplest form.',
        steps: [
          'Read it: $0.35$ is thirty-five hundredths, so $0.35 = \\frac{35}{100}$.',
          'Reduce: the top and bottom share a factor of $5$, giving $\\frac{35}{100} = \\frac{7}{20}$.',
        ],
        answer: '$0.35 = \\frac{7}{20}$',
      },
      {
        problem: 'Write $\\frac{7}{8}$ as a decimal.',
        steps: [
          'Build the denominator up to $1000$: since $8 \\times 125 = 1000$, multiply top and bottom by $125$.',
          '$\\frac{7}{8} = \\frac{7 \\times 125}{1000} = \\frac{875}{1000}$.',
          'Read it off: $\\frac{875}{1000} = 0.875$.',
        ],
        answer: '$\\frac{7}{8} = 0.875$',
      },
      {
        problem: 'Without dividing, decide whether $\\frac{9}{12}$ terminates as a decimal.',
        steps: [
          'Reduce first! $\\frac{9}{12} = \\frac{3}{4}$.',
          'Now check the denominator: $4 = 2 \\times 2$, built only from $2$s.',
          'So it terminates — in fact $\\frac{3}{4} = 0.75$. (Judging the unreduced denominator $12$ would have fooled us.)',
        ],
        answer: '$\\frac{9}{12}$ terminates: it equals $0.75$',
      },
    ],
  },
  problems: [
    {
      q: 'Write $0.7$ as a fraction.',
      choices: ['$\\frac{7}{100}$', '$\\frac{7}{10}$', '$\\frac{1}{7}$', '$\\frac{10}{7}$'],
      answer: 1,
      solution: 'Read it aloud: $0.7$ is seven tenths, which is exactly $\\frac{7}{10}$. The first digit after the point is the tenths place, not the hundredths.',
    },
    {
      q: 'Write $\\frac{3}{10}$ as a decimal.',
      choices: ['$0.3$', '$0.03$', '$3.10$', '$0.13$'],
      answer: 0,
      solution: 'Three tenths goes straight into the tenths place: $\\frac{3}{10} = 0.3$. One digit after the point for tenths — two digits would mean hundredths.',
    },
    {
      q: 'Write $0.25$ as a fraction in simplest form.',
      choices: ['$\\frac{1}{25}$', '$\\frac{2}{5}$', '$\\frac{1}{4}$', '$\\frac{1}{5}$'],
      answer: 2,
      solution: '$0.25$ is twenty-five hundredths: $\\frac{25}{100}$. Divide top and bottom by $25$ to reduce: $\\frac{25}{100} = \\frac{1}{4}$.',
    },
    {
      q: 'Write $\\frac{9}{20}$ as a decimal.',
      choices: ['$0.29$', '$0.9$', '$0.45$', '$4.5$'],
      answer: 2,
      solution: 'Build up to hundredths: multiply top and bottom by $5$ to get $\\frac{9}{20} = \\frac{45}{100} = 0.45$. A quick sense check: $\\frac{9}{20}$ is a little less than $\\frac{10}{20} = 0.5$. ✓',
    },
    {
      q: 'Which of these fractions terminates when written as a decimal?',
      choices: ['$\\frac{1}{6}$', '$\\frac{7}{40}$', '$\\frac{5}{12}$', '$\\frac{2}{9}$'],
      answer: 1,
      solution: 'Check each denominator (all four fractions are already reduced): $6 = 2 \\times 3$, $12 = 2 \\times 2 \\times 3$, and $9 = 3 \\times 3$ all contain a $3$, so those repeat. But $40 = 2 \\times 2 \\times 2 \\times 5$ is built only from $2$s and $5$s, so $\\frac{7}{40}$ terminates: it equals $0.175$.',
    },
    {
      q: 'Write $0.48$ as a fraction in simplest form.',
      choices: ['$\\frac{12}{25}$', '$\\frac{4}{8}$', '$\\frac{48}{10}$', '$\\frac{24}{25}$'],
      answer: 0,
      solution: '$0.48$ is forty-eight hundredths: $\\frac{48}{100}$. Divide top and bottom by $4$: $\\frac{48}{100} = \\frac{12}{25}$. Check: $25$ needs a $\\times 4$ to reach $100$, and $12 \\times 4 = 48$. ✓',
    },
    {
      q: 'Which is larger: $0.6$ or $\\frac{5}{8}$?',
      choices: ['$0.6$', '$\\frac{5}{8}$', 'They are equal', 'They cannot be compared'],
      answer: 1,
      solution: 'Put both in decimal form: $\\frac{5}{8} = \\frac{625}{1000} = 0.625$, while $0.6 = 0.600$. Comparing hundredths, $0.625 > 0.600$, so $\\frac{5}{8}$ is larger.',
    },
    {
      q: 'Write $\\frac{7}{8}$ as a decimal.',
      choices: ['$0.78$', '$0.785$', '$0.87$', '$0.875$'],
      answer: 3,
      solution: 'Multiply top and bottom by $125$: $\\frac{7}{8} = \\frac{875}{1000} = 0.875$. (Simply gluing the digits $7$ and $8$ together to get $0.78$ is a trap — a fraction bar means division, not decoration!)',
    },
    {
      q: 'Written as a decimal, $\\frac{21}{28}$ is:',
      choices: ['$0.75$', '$0.7$', 'a repeating decimal that never ends', '$0.28$'],
      answer: 0,
      solution: 'Reduce first: $\\frac{21}{28} = \\frac{3}{4}$, since top and bottom share a factor of $7$. The reduced denominator $4 = 2 \\times 2$ has only $2$s, so the decimal terminates: $\\frac{3}{4} = 0.75$. The unreduced $28$ contains a $7$, but that $7$ cancels away — always reduce before judging!',
    },
    {
      q: 'Which list shows $0.7$, $0.72$, and $\\frac{3}{4}$ in order from least to greatest?',
      choices: [
        '$0.7,\\ \\frac{3}{4},\\ 0.72$',
        '$0.72,\\ 0.7,\\ \\frac{3}{4}$',
        '$\\frac{3}{4},\\ 0.72,\\ 0.7$',
        '$0.7,\\ 0.72,\\ \\frac{3}{4}$',
      ],
      answer: 3,
      solution: 'Convert to matching decimals: $\\frac{3}{4} = 0.75$, and write $0.7$ as $0.70$. Now compare hundredths: $0.70 < 0.72 < 0.75$, so the order is $0.7$, then $0.72$, then $\\frac{3}{4}$.',
    },
  ],
}

const s64 = {
  id: '6.4',
  title: 'Repeating Decimals',
  learn: {
    concepts: [
      {
        heading: 'Some divisions never finish',
        body: 'Divide $1$ by $3$ and the long division gets stuck in a loop: $0.3333\\ldots$ forever. We write a bar over the repeating block: $0.\\overline{3}$ means the $3$s never stop, and $0.\\overline{45}$ means $0.454545\\ldots$ with the pair $45$ cycling forever.',
      },
      {
        heading: 'Why the loop must happen',
        body: 'When you divide by $6$, each step leaves a remainder from $0$ to $5$. With only finitely many possible remainders, sooner or later one repeats — and from that moment the digits cycle. Every fraction becomes either a terminating or a repeating decimal.',
      },
      {
        heading: 'The bar matters',
        body: '$0.\\overline{3}$ and $0.3$ are different numbers: the first has infinitely many $3$s and is bigger. Also watch where the bar sits: $0.8\\overline{3} = 0.8333\\ldots$ repeats only the $3$, while $0.\\overline{83} = 0.838383\\ldots$ repeats the pair.',
      },
      {
        heading: 'The multiply-by-10 trick',
        body: 'To turn a repeating decimal back into a fraction, let $x$ equal it, multiply by $10$ (or $100$ for a two-digit block) to slide one full block past the point, then subtract. The infinite tails line up and cancel! If $x = 0.\\overline{4}$, then $10x = 4.\\overline{4}$, so $10x - x = 4$, giving $9x = 4$ and $x = \\frac{4}{9}$.',
      },
    ],
    examples: [
      {
        problem: 'Write $\\frac{5}{6}$ as a decimal.',
        steps: [
          'Divide: $5 \\div 6$. Since $50 \\div 6$ is $8$ remainder $2$, the decimal starts $0.8$.',
          'Bring down a zero: $20 \\div 6$ is $3$ remainder $2$. The remainder $2$ came back — we are in a loop!',
          'From here every digit is a $3$: the decimal is $0.8333\\ldots$',
        ],
        answer: '$\\frac{5}{6} = 0.8\\overline{3}$',
      },
      {
        problem: 'Write $0.\\overline{7}$ as a fraction.',
        steps: [
          'Let $x = 0.777\\ldots$ and multiply by $10$: then $10x = 7.777\\ldots$',
          'Subtract: $10x - x = 7.777\\ldots - 0.777\\ldots = 7$. The endless tails cancel perfectly.',
          'So $9x = 7$, which gives $x = \\frac{7}{9}$.',
        ],
        answer: '$0.\\overline{7} = \\frac{7}{9}$',
      },
      {
        problem: 'Which is bigger: $0.\\overline{6}$ or $0.66$?',
        steps: [
          'Write out digits: $0.\\overline{6} = 0.6666\\ldots$ while $0.66 = 0.6600\\ldots$',
          'The first two digits match, but in the thousandths place the repeating decimal has a $6$ while $0.66$ has a $0$.',
        ],
        answer: '$0.\\overline{6}$ is bigger, since $0.6666\\ldots > 0.6600$',
      },
    ],
  },
  problems: [
    {
      q: 'What does the notation $0.\\overline{5}$ mean?',
      choices: ['$0.5$ exactly', '$0.555\\ldots$ with $5$s repeating forever', '$0.55$ exactly', '$0.505005\\ldots$'],
      answer: 1,
      solution: 'The bar over the $5$ means that digit repeats without end: $0.\\overline{5} = 0.5555\\ldots$ forever. It is a genuinely bigger number than $0.5$, because it keeps adding little extra pieces.',
    },
    {
      q: 'Write $\\frac{1}{3}$ as a decimal.',
      choices: ['$0.3$', '$0.33$', '$0.\\overline{3}$', '$3.1$'],
      answer: 2,
      solution: 'Divide: $1 \\div 3$ gives $0.333\\ldots$ with remainder $1$ returning at every step, so the $3$s never stop. That is $0.\\overline{3}$. Neither $0.3$ nor $0.33$ is exactly $\\frac{1}{3}$ — they stop too soon.',
    },
    {
      q: 'Write $\\frac{2}{3}$ as a decimal.',
      choices: ['$0.\\overline{6}$', '$0.6$', '$0.\\overline{3}$', '$0.23$'],
      answer: 0,
      solution: '$\\frac{2}{3}$ is twice $\\frac{1}{3} = 0.333\\ldots$, so it equals $0.666\\ldots = 0.\\overline{6}$. Long division agrees: every step gives digit $6$ and remainder $2$ again.',
    },
    {
      q: 'Which of these fractions becomes a repeating decimal?',
      choices: ['$\\frac{1}{4}$', '$\\frac{3}{5}$', '$\\frac{7}{8}$', '$\\frac{1}{6}$'],
      answer: 3,
      solution: 'Check denominators: $4$, $5$, and $8$ are built only from $2$s and $5$s, so those decimals terminate ($0.25$, $0.6$, $0.875$). But $6 = 2 \\times 3$ has a $3$, so $\\frac{1}{6} = 0.1666\\ldots = 0.1\\overline{6}$ repeats.',
    },
    {
      q: 'Write $\\frac{5}{6}$ as a decimal.',
      choices: ['$0.8\\overline{3}$', '$0.\\overline{83}$', '$0.56$', '$0.\\overline{6}$'],
      answer: 0,
      solution: 'Divide: $5 \\div 6 = 0.8333\\ldots$ — the $8$ appears once, and then only the $3$ repeats. So the bar goes over just the $3$: $0.8\\overline{3}$. Writing $0.\\overline{83}$ would mean $0.838383\\ldots$, a different number!',
    },
    {
      q: 'Write $0.\\overline{4}$ as a fraction.',
      choices: ['$\\frac{4}{10}$', '$\\frac{4}{9}$', '$\\frac{1}{4}$', '$\\frac{4}{11}$'],
      answer: 1,
      solution: 'Let $x = 0.444\\ldots$ Then $10x = 4.444\\ldots$, and subtracting gives $9x = 4$, so $x = \\frac{4}{9}$. A single repeating digit always sits over $9$, not $10$ — $\\frac{4}{10}$ is just $0.4$, which stops.',
    },
    {
      q: 'Which is greater: $0.\\overline{7}$ or $0.75$?',
      choices: ['$0.75$', 'They are equal', '$0.\\overline{7}$', 'You cannot tell'],
      answer: 2,
      solution: 'Write out digits: $0.\\overline{7} = 0.7777\\ldots$ and $0.75 = 0.7500\\ldots$ The tenths tie at $7$, but in the hundredths place $7 > 5$, so $0.\\overline{7}$ is greater.',
    },
    {
      q: 'Write $\\frac{4}{11}$ as a decimal.',
      choices: ['$0.36$', '$0.\\overline{4}$', '$0.4\\overline{1}$', '$0.\\overline{36}$'],
      answer: 3,
      solution: 'Divide: $40 \\div 11$ is $3$ remainder $7$, then $70 \\div 11$ is $6$ remainder $4$ — and remainder $4$ is where we started, so the pair of digits $36$ cycles forever: $\\frac{4}{11} = 0.363636\\ldots = 0.\\overline{36}$.',
    },
    {
      q: 'Write $0.\\overline{45}$ as a fraction in simplest form.',
      choices: ['$\\frac{45}{100}$', '$\\frac{4}{9}$', '$\\frac{5}{11}$', '$\\frac{45}{999}$'],
      answer: 2,
      solution: 'The repeating block has TWO digits, so multiply by $100$: if $x = 0.454545\\ldots$, then $100x = 45.4545\\ldots$ Subtracting gives $99x = 45$, so $x = \\frac{45}{99} = \\frac{5}{11}$ after dividing top and bottom by $9$. ($\\frac{45}{100}$ is $0.45$, which stops — not the same number.)',
    },
    {
      q: 'What can you say about the number $0.\\overline{9}$?',
      choices: ['It is slightly less than $1$', 'It equals exactly $1$', 'It equals $\\frac{9}{10}$', 'It is slightly more than $1$'],
      answer: 1,
      solution: 'Run the trick: let $x = 0.999\\ldots$ Then $10x = 9.999\\ldots$, and subtracting gives $9x = 9$, so $x = 1$. Surprising but true: $0.\\overline{9}$ and $1$ are two names for the same number. There is no room between them — any gap would have to be smaller than every $0.001, 0.0001, \\ldots$',
    },
  ],
}

const challenge = [
  {
    q: 'Compute $3.6 + 0.85 + 1.4 + 0.15$.',
    choices: ['$6$', '$5.9$', '$6.1$', '$5$'],
    answer: 0,
    solution: 'Reorder into friendly pairs: $3.6 + 1.4 = 5$ and $0.85 + 0.15 = 1$. Total: $5 + 1 = 6$. Decimals enjoy the commutative property too!',
  },
  {
    q: 'Compute $0.125 \\times 80$.',
    choices: ['$1$', '$10$', '$100$', '$12.5$'],
    answer: 1,
    solution: 'Ignore the point: $125 \\times 80 = 10000$. The factors have $3$ decimal places in total, so place the point three spots in: $10.000 = 10$. Estimate check: $0.125$ is one eighth, and one eighth of $80$ is $10$. ✓',
  },
  {
    q: 'Compute $4.05 \\div 0.5$.',
    choices: ['$0.81$', '$2.025$', '$8.1$', '$81$'],
    answer: 2,
    solution: 'Shift both decimal points one place right: $4.05 \\div 0.5 = 40.5 \\div 5 = 8.1$. Sense check: dividing by a half should DOUBLE the number, and $8.1$ is twice $4.05$. ✓',
  },
  {
    q: 'Round $5.996$ to the nearest hundredth.',
    choices: ['$5.99$', '$5.90$', '$6.10$', '$6.00$'],
    answer: 3,
    solution: 'The deciding thousandths digit is $6$, so the hundredths digit $9$ rounds up to $10$ — which carries all the way through: $5.99 + 0.01 = 6.00$.',
  },
  {
    q: 'Using the round-half-up convention, what is the smallest number that rounds to $8$ when rounded to the nearest whole number?',
    choices: ['$7.4$', '$7.5$', '$7.9$', '$8.4$'],
    answer: 1,
    solution: 'Half-up sends every tie upward, so $7.5$ rounds to $8$ — and anything below $7.5$, like $7.4999$, rounds down to $7$. ($8.4$ also rounds to $8$, but it is far from the smallest such number.)',
  },
  {
    q: 'Write $\\frac{13}{40}$ as a decimal.',
    choices: ['$0.325$', '$0.375$', '$0.32$', '$3.25$'],
    answer: 0,
    solution: 'Build the denominator to $1000$: since $40 \\times 25 = 1000$, multiply top and bottom by $25$ to get $\\frac{325}{1000} = 0.325$. It terminates because $40 = 2 \\times 2 \\times 2 \\times 5$ has only $2$s and $5$s.',
  },
  {
    q: 'Reduce first, then decide: which of these fractions gives a decimal that stops?',
    choices: ['$\\frac{12}{45}$', '$\\frac{9}{24}$', '$\\frac{10}{22}$', '$\\frac{7}{30}$'],
    answer: 1,
    solution: 'Reduce before judging! $\\frac{9}{24} = \\frac{3}{8}$, and $8 = 2 \\times 2 \\times 2$ has nothing but $2$s — so it terminates as $0.375$. (Judged unreduced, the $3$ inside $24$ would have fooled you.) The others reduce to $\\frac{4}{15}$, $\\frac{5}{11}$, and $\\frac{7}{30}$, whose denominators still contain $3$, $11$, and $3$ — so they all repeat.',
  },
  {
    q: 'Write $0.\\overline{54}$ as a fraction in simplest form.',
    choices: ['$\\frac{27}{50}$', '$\\frac{5}{9}$', '$\\frac{6}{11}$', '$\\frac{54}{999}$'],
    answer: 2,
    solution: 'Two repeating digits, so multiply by $100$: if $x = 0.5454\\ldots$, then $100x = 54.5454\\ldots$, and subtracting gives $99x = 54$. So $x = \\frac{54}{99} = \\frac{6}{11}$ after dividing top and bottom by $9$. ($\\frac{27}{50} = 0.54$ exactly — that decimal stops, so it is a different number.)',
  },
  {
    q: 'Which of these numbers is the largest?',
    choices: ['$0.808$', '$0.88$', '$0.8$', '$0.\\overline{8}$'],
    answer: 3,
    solution: 'Line up the digits: $0.\\overline{8} = 0.8888\\ldots$, $0.88 = 0.8800$, $0.808$, and $0.8 = 0.8000$. All start with $8$ tenths, so compare hundredths: $0.\\overline{8}$ and $0.88$ both have $8$, but in the thousandths $0.\\overline{8}$ keeps going with $8$s while $0.88$ drops to $0$. The repeating decimal wins.',
  },
  {
    q: 'Compute $7.2 \\times 0.25$.',
    choices: ['$18$', '$1.8$', '$0.18$', '$2.8$'],
    answer: 1,
    solution: 'Multiplying by $0.25$ is taking one quarter, so divide $7.2$ by $4$: $7.2 \\div 4 = 1.8$. Digit method agrees: $72 \\times 25 = 1800$, with $1 + 2 = 3$ decimal places, giving $1.800 = 1.8$.',
  },
  {
    q: 'Compute $0.\\overline{3} + 0.\\overline{6}$.',
    choices: ['$1$', '$0.99$', '$0.9$', '$1.1$'],
    answer: 0,
    solution: 'Convert to fractions first: $0.\\overline{3} = \\frac{1}{3}$ and $0.\\overline{6} = \\frac{2}{3}$. Their sum is $\\frac{1}{3} + \\frac{2}{3} = 1$ exactly. Adding digit columns of endless $3$s and $6$s gives endless $9$s — and $0.\\overline{9}$ is indeed exactly $1$.',
  },
  {
    q: 'If $x = 0.\\overline{2}$, what is $9x$?',
    choices: ['$1.8$', '$2.2$', '$18$', '$2$'],
    answer: 3,
    solution: 'Multiply by $10$: $10x = 2.\\overline{2}$. Subtract $x = 0.\\overline{2}$: the infinite tails cancel, leaving $10x - x = 9x = 2$. This is exactly the trick that shows $0.\\overline{2} = \\frac{2}{9}$.',
  },
]

const worksheet = [
  {
    q: 'Compute $5.8 + 3.45$.',
    answer: '$9.25$',
    solution: 'Line up the decimal points, writing $5.8$ as $5.80$: then $5.80 + 3.45 = 9.25$.',
  },
  {
    q: 'Compute $12 - 4.36$.',
    answer: '$7.64$',
    solution: 'Write $12$ as $12.00$ and subtract with points aligned: $12.00 - 4.36 = 7.64$. Check: $7.64 + 4.36 = 12$. ✓',
  },
  {
    q: 'Compute $0.7 \\times 0.9$.',
    answer: '$0.63$',
    solution: 'First $7 \\times 9 = 63$; the factors have $1 + 1 = 2$ decimal places, so the answer is $0.63$.',
  },
  {
    q: 'Compute $86.1 \\div 100$.',
    answer: '$0.861$',
    solution: 'Dividing by $100$ slides the decimal point two places left: $86.1 \\to 8.61 \\to 0.861$.',
  },
  {
    q: 'Round $14.472$ to the nearest tenth.',
    answer: '$14.5$',
    solution: 'The deciding digit is the hundredths digit, $7$. Since $7 \\ge 5$, the tenths digit rounds up from $4$ to $5$: the answer is $14.5$.',
  },
  {
    q: 'Write $\\frac{4}{25}$ as a decimal.',
    answer: '$0.16$',
    solution: 'Multiply top and bottom by $4$ to reach hundredths: $\\frac{4}{25} = \\frac{16}{100} = 0.16$.',
  },
  {
    q: 'Compute $9.1 \\div 0.07$.',
    answer: '$130$',
    solution: 'Shift both decimal points two places right: $9.1 \\div 0.07 = 910 \\div 7 = 130$. Dividing by a tiny number gives a big answer — there are $130$ pieces of size $0.07$ inside $9.1$.',
  },
  {
    q: 'Which is greater: $0.\\overline{6}$ or $0.67$?',
    answer: '$0.67$',
    solution: 'Write out digits: $0.\\overline{6} = 0.6666\\ldots$ and $0.67 = 0.6700\\ldots$ The tenths tie at $6$, but in the hundredths place $7 > 6$ — so $0.67$ is greater, even though the other number goes on forever. Endless digits do not automatically make a number bigger!',
  },
  {
    q: 'Write $\\frac{7}{12}$ as a decimal, using a bar for any repeating part.',
    answer: '$0.58\\overline{3}$',
    solution: 'Divide: $70 \\div 12$ is $5$ remainder $10$; then $100 \\div 12$ is $8$ remainder $4$; then $40 \\div 12$ is $3$ remainder $4$. The remainder $4$ repeats, so from here every digit is $3$: $\\frac{7}{12} = 0.58333\\ldots = 0.58\\overline{3}$. (The denominator $12 = 2 \\times 2 \\times 3$ contains a $3$, so we knew it would repeat.)',
  },
  {
    q: 'Write $0.2\\overline{7}$ as a fraction in simplest form.',
    answer: '$\\frac{5}{18}$',
    solution: 'Let $x = 0.2777\\ldots$ Then $10x = 2.777\\ldots$ and $100x = 27.777\\ldots$ Subtract the two: $100x - 10x = 90x = 25$, since the repeating tails cancel. So $x = \\frac{25}{90} = \\frac{5}{18}$. Check: $5 \\div 18 = 0.2777\\ldots$ ✓',
  },
]

export default {
  id: 'prealgebra-ch06',
  book: 'prealgebra',
  number: 6,
  title: 'Decimals',
  intro:
    'Decimals are just fractions wearing place-value clothing — and once you see that, everything about them makes sense. In this chapter you will add, subtract, multiply, and divide decimals, round them sensibly, and translate back and forth between decimals and fractions. You will even tame the decimals that never end!',
  sections: [s61, s62, s63, s64],
  challenge,
  worksheet,
}
