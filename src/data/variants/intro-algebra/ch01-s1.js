// Introduction to Algebra chapter 1 — variations for sections 1.1-1.3.
// All problems and solutions are original MathQuest content.
//
// House rules for this chapter:
//  - Section 1.1 stays a CLASSIFICATION and COMPARISON section. Every claim
//    about whole / integer / rational / irrational was checked against the
//    definitions in the chapter's own learn block: a root of a perfect square
//    is rational, every terminating decimal is rational, and 0 is a whole
//    number, an integer, and rational all at once.
//  - Every fraction comparison was decided by cross-multiplying integers, not
//    by looking at decimals, so no rounding ever decides an ordering.
//  - Every expression in section 1.2 was evaluated as exact integers, and the
//    named wrong order was evaluated separately and confirmed to give a
//    DIFFERENT value. A variation whose wrong method lands on the right answer
//    would reward the very mistake it tests, so none are allowed here.
//  - No two choices in one item share a value (not just a spelling).
//  - Section 1.3 items are about truth, not arithmetic. Every "not
//    commutative" / "not associative" claim is backed by a concrete
//    counterexample that appears in the solution.

const s11 = [
  // p1 — integer vs. whole number
  [
    {
      q: 'Which of these numbers is an integer but NOT a whole number?',
      choices: ['$-15$', '$\\frac{2}{3}$', '$7$', '$0$'],
      answer: 0,
      solution:
        'The whole numbers start at $0$ and climb: $0, 1, 2, 3, \\ldots$ — never negative. The integers add all the opposites, so they run $\\ldots, -2, -1, 0, 1, 2, \\ldots$ That makes $-15$ an integer that is not a whole number. The choice $\\frac{2}{3}$ is neither (it is rational but not an integer), while $7$ and $0$ are both integers AND whole numbers — remember $0$ counts as a whole number.',
    },
    {
      q: 'Which of these numbers is a whole number?',
      choices: ['$-4$', '$0$', '$-\\frac{1}{2}$', '$2.5$'],
      answer: 1,
      solution:
        'The whole numbers are $0, 1, 2, 3, \\ldots$, so $0$ qualifies — it is the very first one. The choice $-4$ is an integer, but the whole numbers stop at $0$ and never go left. The choices $-\\frac{1}{2}$ and $2.5$ are rational numbers that are not integers at all, so they cannot be whole numbers either.',
    },
    {
      q: 'Which of these numbers is NOT an integer?',
      choices: ['$-6$', '$0$', '$12$', '$\\frac{5}{4}$'],
      answer: 3,
      solution:
        'The integers are $\\ldots, -2, -1, 0, 1, 2, \\ldots$ — whole amounts with no fractional part, positive or negative. So $-6$, $0$, and $12$ are all integers. But $\\frac{5}{4}$ sits between $1$ and $2$, so it is rational without being an integer. Being written as a fraction is not what disqualifies it: $\\frac{8}{4}$ would be the integer $2$ in disguise.',
    },
  ],
  // p2 — absolute value
  [
    {
      q: 'What is $|-23|$?',
      choices: ['$-23$', '$23$', '$\\frac{1}{23}$', '$0$'],
      answer: 1,
      solution:
        'Absolute value measures distance from $0$, and $-23$ sits $23$ units to the left of $0$, so $|-23| = 23$. Distance is never negative, which rules out $-23$. The choice $\\frac{1}{23}$ is the reciprocal, a completely different operation, and $0$ would say $-23$ is no distance from $0$ at all.',
    },
    {
      q: 'What is $\\left|-\\frac{3}{5}\\right|$?',
      choices: ['$-\\frac{3}{5}$', '$\\frac{5}{3}$', '$\\frac{3}{5}$', '$0$'],
      answer: 2,
      solution:
        'Absolute value strips the sign and keeps the size: $\\left|-\\frac{3}{5}\\right| = \\frac{3}{5}$. It works on fractions exactly as it works on whole numbers — $-\\frac{3}{5}$ is $\\frac{3}{5}$ of a unit to the left of $0$. The choice $\\frac{5}{3}$ flips the fraction, which is the reciprocal, not the absolute value.',
    },
    {
      q: 'Which of these has the same value as $|-7|$?',
      choices: ['$-7$', '$\\frac{1}{7}$', '$0$', '$|7|$'],
      answer: 3,
      solution:
        'Both $7$ and $-7$ are exactly $7$ units from $0$, so $|-7| = 7$ and $|7| = 7$ — the two match. That is the whole point of absolute value: it reports distance, and it cannot tell which side of $0$ you started on. The choice $-7$ is the original number, still carrying the sign that absolute value removes.',
    },
  ],
  // p3 — smallest / greatest on the number line
  [
    {
      q: 'Which of these numbers is the smallest: $-9$, $4$, $-2$, or $0$?',
      choices: ['$-9$', '$4$', '$-2$', '$0$'],
      answer: 0,
      solution:
        'Smallest means farthest to the LEFT on the number line. Both $-9$ and $-2$ are left of $0$, and $-9$ is further left still, so $-9$ is the smallest. Careful: $9$ is bigger than $2$, but for negatives that flips — the bigger the size, the smaller the number.',
    },
    {
      q: 'Which of these numbers is the greatest: $-5$, $-8$, $-1$, or $-12$?',
      choices: ['$-5$', '$-8$', '$-1$', '$-12$'],
      answer: 2,
      solution:
        'Every number here is negative, so the greatest is the one closest to $0$ — the rightmost on the number line. That is $-1$. Reading them as sizes and picking the largest size gives $-12$, which is exactly backwards: $-12$ is the SMALLEST of the four.',
    },
    {
      q: 'Which of these numbers is the smallest: $-\\frac{1}{4}$, $3$, $-\\frac{9}{2}$, or $-6$?',
      choices: ['$-\\frac{1}{4}$', '$3$', '$-\\frac{9}{2}$', '$-6$'],
      answer: 3,
      solution:
        'Ignore the positive $3$ right away — a positive number can never be the smallest here. Among the negatives, $-\\frac{1}{4}$ is barely left of $0$, and $-\\frac{9}{2} = -4.5$ sits between $-6$ and $-4$. So the leftmost number is $-6$. Notice that $-\\frac{9}{2}$ looks complicated but is still to the RIGHT of the plain-looking $-6$.',
    },
  ],
  // p4 — comparing two negative fractions
  [
    {
      q: 'Which is greater: $-\\frac{3}{4}$ or $-\\frac{4}{5}$?',
      choices: ['$-\\frac{4}{5}$', '$-\\frac{3}{4}$', 'They are equal', 'Neither — both are less than $-1$'],
      answer: 1,
      solution:
        'Use a common denominator of $20$: $-\\frac{3}{4} = -\\frac{15}{20}$ and $-\\frac{4}{5} = -\\frac{16}{20}$. Since $-\\frac{15}{20}$ is closer to $0$, it is the greater number, so $-\\frac{3}{4} > -\\frac{4}{5}$. They are not equal ($15 \\ne 16$), and both are between $-1$ and $0$, so the last option is false too.',
    },
    {
      q: 'Which is smaller: $-\\frac{5}{6}$ or $-\\frac{7}{9}$?',
      choices: ['$-\\frac{7}{9}$', 'They are equal', '$-\\frac{5}{6}$', 'Neither — both are positive'],
      answer: 2,
      solution:
        'A common denominator of $18$ makes the comparison easy: $-\\frac{5}{6} = -\\frac{15}{18}$ and $-\\frac{7}{9} = -\\frac{14}{18}$. The number farther from $0$ on the left is the smaller one, so $-\\frac{5}{6} < -\\frac{7}{9}$. Both numbers carry a minus sign, so the last option is plainly false, and $15 \\ne 14$ rules out equality.',
    },
    {
      q: 'Which is greater: $-\\frac{7}{10}$ or $-\\frac{2}{3}$?',
      choices: ['They are equal', '$-\\frac{7}{10}$', 'The comparison depends on which one is written first', '$-\\frac{2}{3}$'],
      answer: 3,
      solution:
        'A common denominator of $30$ gives $-\\frac{7}{10} = -\\frac{21}{30}$ and $-\\frac{2}{3} = -\\frac{20}{30}$. The one closer to $0$ wins, so $-\\frac{2}{3} > -\\frac{7}{10}$. Order of writing never changes which of two numbers is bigger — each has a fixed place on the number line — so the third option is wrong, and $21 \\ne 20$ rules out equality.',
    },
  ],
  // p5 — rational vs. irrational
  [
    {
      q: 'Which of these numbers is NOT rational?',
      choices: ['$\\sqrt{10}$', '$\\sqrt{25}$', '$0.75$', '$-\\frac{9}{4}$'],
      answer: 0,
      solution:
        'A rational number is one that can be written as a fraction of integers. Since $10$ is not a perfect square, $\\sqrt{10}$ cannot be written that way — it is irrational. The others all can: $\\sqrt{25} = 5 = \\frac{5}{1}$, $0.75 = \\frac{3}{4}$, and $-\\frac{9}{4}$ is already a fraction. A square-root sign does NOT automatically mean irrational — look at what is underneath it.',
    },
    {
      q: 'Which of these four numbers is irrational: $\\sqrt{36}$, $\\pi$, $0.2$, or $\\frac{11}{3}$?',
      choices: ['$\\sqrt{36}$', '$\\pi$', '$0.2$', '$\\frac{11}{3}$'],
      answer: 1,
      solution:
        'No fraction of integers equals $\\pi$ exactly, so $\\pi$ is irrational. (Approximations like $\\frac{22}{7}$ are close but not equal.) The others are all rational: $\\sqrt{36} = 6$ because $36$ is a perfect square, $0.2 = \\frac{1}{5}$, and $\\frac{11}{3}$ is a fraction of integers already — a decimal that never ends is only irrational if it also never repeats.',
    },
    {
      q: 'Which of these numbers is rational?',
      choices: ['$\\sqrt{2}$', '$\\sqrt{15}$', '$\\sqrt{49}$', '$\\pi$'],
      answer: 2,
      solution:
        'Here $49$ IS a perfect square, so $\\sqrt{49} = 7$, an integer — and every integer is rational, since $7 = \\frac{7}{1}$. The other three cannot be written as fractions of integers: $2$ and $15$ are not perfect squares, and $\\pi$ is famously irrational. The lesson: judge a radical by the number inside it, not by the radical sign.',
    },
  ],
  // p6 — trapping a square root between integers
  [
    {
      q: 'Between which two consecutive integers does $\\sqrt{75}$ lie?',
      choices: ['$8$ and $9$', '$7$ and $8$', '$9$ and $10$', '$37$ and $38$'],
      answer: 0,
      solution:
        'Squeeze $75$ between the nearest perfect squares: $64 < 75 < 81$, that is, $8^2 < 75 < 9^2$. Taking square roots preserves the order, so $8 < \\sqrt{75} < 9$. The choice $37$ and $38$ comes from halving $75$ instead of rooting it — halving and square-rooting are different jobs.',
    },
    {
      q: 'Between which two consecutive integers does $\\sqrt{30}$ lie?',
      choices: ['$4$ and $5$', '$6$ and $7$', '$5$ and $6$', '$14$ and $16$'],
      answer: 2,
      solution:
        'The perfect squares around $30$ are $25$ and $36$: $5^2 = 25 < 30 < 36 = 6^2$. So $5 < \\sqrt{30} < 6$. Since $30$ is much closer to $36$ than to $25$, $\\sqrt{30}$ sits nearer to $6$ — but it is still between $5$ and $6$. The choice $14$ and $16$ halves $30$ rather than taking a root.',
    },
    {
      q: 'Between which two consecutive integers does $\\sqrt{130}$ lie?',
      choices: ['$64$ and $66$', '$10$ and $11$', '$12$ and $13$', '$11$ and $12$'],
      answer: 3,
      solution:
        'Hunt for the perfect squares on either side of $130$: $11^2 = 121$ and $12^2 = 144$, and $121 < 130 < 144$. So $11 < \\sqrt{130} < 12$. The choice $12$ and $13$ overshoots by starting from $144$, and $10$ and $11$ undershoots since $11^2 = 121$ is already below $130$. The choice $64$ and $66$ halves instead of rooting.',
    },
  ],
  // p7 — ordering three fractions
  [
    {
      q: 'Which list shows $\\frac{5}{6}$, $\\frac{4}{5}$, and $\\frac{7}{9}$ in order from least to greatest?',
      choices: [
        '$\\frac{7}{9}, \\frac{4}{5}, \\frac{5}{6}$',
        '$\\frac{4}{5}, \\frac{7}{9}, \\frac{5}{6}$',
        '$\\frac{5}{6}, \\frac{4}{5}, \\frac{7}{9}$',
        '$\\frac{7}{9}, \\frac{5}{6}, \\frac{4}{5}$',
      ],
      answer: 0,
      solution:
        'A common denominator of $90$ settles it exactly: $\\frac{5}{6} = \\frac{75}{90}$, $\\frac{4}{5} = \\frac{72}{90}$, and $\\frac{7}{9} = \\frac{70}{90}$. Comparing the numerators $70 < 72 < 75$ gives $\\frac{7}{9} < \\frac{4}{5} < \\frac{5}{6}$. The choice that starts with $\\frac{5}{6}$ has the list running from greatest to least — read the direction the question asks for.',
    },
    {
      q: 'Which list shows $\\frac{3}{8}$, $\\frac{2}{5}$, and $\\frac{1}{3}$ in order from least to greatest?',
      choices: [
        '$\\frac{3}{8}, \\frac{1}{3}, \\frac{2}{5}$',
        '$\\frac{1}{3}, \\frac{3}{8}, \\frac{2}{5}$',
        '$\\frac{2}{5}, \\frac{3}{8}, \\frac{1}{3}$',
        '$\\frac{1}{3}, \\frac{2}{5}, \\frac{3}{8}$',
      ],
      answer: 1,
      solution:
        'Use the common denominator $120$: $\\frac{3}{8} = \\frac{45}{120}$, $\\frac{2}{5} = \\frac{48}{120}$, and $\\frac{1}{3} = \\frac{40}{120}$. Since $40 < 45 < 48$, the order is $\\frac{1}{3} < \\frac{3}{8} < \\frac{2}{5}$. Watch the trap of ranking by numerator or by denominator alone — $\\frac{1}{3}$ has the smallest numerator AND the smallest denominator, yet it is the smallest number here only because you checked.',
    },
    {
      q: 'Which list shows $\\frac{5}{9}$, $\\frac{1}{2}$, and $\\frac{4}{7}$ in order from greatest to least?',
      choices: [
        '$\\frac{1}{2}, \\frac{5}{9}, \\frac{4}{7}$',
        '$\\frac{5}{9}, \\frac{4}{7}, \\frac{1}{2}$',
        '$\\frac{4}{7}, \\frac{1}{2}, \\frac{5}{9}$',
        '$\\frac{4}{7}, \\frac{5}{9}, \\frac{1}{2}$',
      ],
      answer: 3,
      solution:
        'A common denominator of $126$ gives $\\frac{5}{9} = \\frac{70}{126}$, $\\frac{1}{2} = \\frac{63}{126}$, and $\\frac{4}{7} = \\frac{72}{126}$. From greatest to least the numerators run $72 > 70 > 63$, so the order is $\\frac{4}{7}, \\frac{5}{9}, \\frac{1}{2}$. This question asks for greatest FIRST, so the answer that begins with $\\frac{1}{2}$ is the correct list read backwards.',
    },
  ],
  // p8 — distance on the number line
  [
    {
      q: 'What is the distance between $-9$ and $4$ on the number line?',
      choices: ['$13$', '$-13$', '$-5$', '$36$'],
      answer: 0,
      solution:
        'Distance is the absolute value of the difference: $|4 - (-9)| = |4 + 9| = 13$. Counting works too — from $-9$ up to $0$ is $9$ steps, then $4$ more to reach $4$, so $9 + 4 = 13$. The choice $-13$ forgets that distance is never negative, $-5$ adds the two numbers instead of subtracting, and $36$ multiplies them.',
    },
    {
      q: 'What is the distance between $-6$ and $-15$ on the number line?',
      choices: ['$21$', '$9$', '$-9$', '$90$'],
      answer: 1,
      solution:
        'Both numbers are negative, so subtract carefully: $|-6 - (-15)| = |-6 + 15| = 9$. Picture it — from $-15$ you walk right $9$ steps to reach $-6$. The choice $21$ adds the two sizes, $6 + 15$, which would be right only if the numbers sat on OPPOSITE sides of $0$. The choice $-9$ subtracts the other way and keeps the minus sign, and $90$ multiplies.',
    },
    {
      q: 'How far apart are $3$ and $-11$ on the number line?',
      choices: ['$-14$', '$8$', '$14$', '$33$'],
      answer: 2,
      solution:
        'Take the absolute value of the difference: $|3 - (-11)| = |3 + 11| = 14$. Check by walking: from $-11$ to $0$ is $11$ steps, then $3$ more, giving $14$. The choice $8$ comes from ignoring the minus sign and computing $|3 - 11|$ — but subtracting a negative ADDS. The choice $-14$ keeps a sign that distance never has, and $33$ multiplies the two numbers.',
    },
  ],
  // p9 — counting integers inside an absolute-value condition
  [
    {
      q: 'How many integers $n$ satisfy $|n| < 5.5$?',
      choices: ['$10$', '$11$', '$5$', '$6$'],
      answer: 1,
      solution:
        'We need every integer within $5.5$ units of $0$: $-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5$. That is $5$ negatives, $5$ positives, and $0$ in the middle, for $11$ in all. The choice $10$ forgets $0$, the choice $5$ counts only the positives, and $6$ counts the positives plus $0$ but drops the whole left half of the number line.',
    },
    {
      q: 'How many integers $n$ satisfy $|n| \\le 4$?',
      choices: ['$8$', '$4$', '$9$', '$5$'],
      answer: 2,
      solution:
        'The symbol $\\le$ lets the endpoints in, so the list is $-4, -3, -2, -1, 0, 1, 2, 3, 4$ — that is $9$ integers. Counting: $4$ negatives $+ \\; 4$ positives $+ \\; 1$ zero. The choice $8$ leaves out $0$, the choice $4$ takes only the positives, and $5$ takes the positives and $0$.',
    },
    {
      q: 'How many integers $n$ satisfy $1 < |n| < 4.5$?',
      choices: ['$3$', '$9$', '$8$', '$6$'],
      answer: 3,
      solution:
        'Two conditions must hold at once. The distance $|n|$ has to be MORE than $1$ and LESS than $4.5$, so $|n|$ can be $2$, $3$, or $4$. Each of those sizes gives two integers, one on each side of $0$: $-4, -3, -2, 2, 3, 4$ — six in all. The choice $9$ ignores the $1 <$ half and counts $-4$ through $4$. The choice $8$ reads the left condition as $1 \\le |n|$ and lets $\\pm 1$ back in. The choice $3$ counts only the positives.',
    },
  ],
  // p10 — largest / smallest of four close numbers
  [
    {
      q: 'Which of these four numbers is the largest: $\\frac{4}{5}$, $0.79$, $\\frac{7}{9}$, or $\\frac{31}{40}$?',
      choices: ['$\\frac{4}{5}$', '$0.79$', '$\\frac{7}{9}$', '$\\frac{31}{40}$'],
      answer: 0,
      solution:
        'Put everything over a common denominator of $1800$: $\\frac{4}{5} = \\frac{1440}{1800}$, $0.79 = \\frac{79}{100} = \\frac{1422}{1800}$, $\\frac{7}{9} = \\frac{1400}{1800}$, and $\\frac{31}{40} = \\frac{1395}{1800}$. The largest numerator belongs to $\\frac{4}{5}$, so $\\frac{4}{5} = 0.8$ wins. All four are packed between $0.775$ and $0.8$, so eyeballing is not enough — you have to compare.',
    },
    {
      q: 'Which of these four numbers is the smallest: $\\frac{3}{7}$, $0.43$, $\\frac{5}{12}$, or $\\frac{17}{40}$?',
      choices: ['$\\frac{3}{7}$', '$0.43$', '$\\frac{5}{12}$', '$\\frac{17}{40}$'],
      answer: 2,
      solution:
        'Compare against $0.43$ one at a time. $\\frac{3}{7}$: cross-multiplying, $3 \\times 100 = 300$ against $43 \\times 7 = 301$, so $\\frac{3}{7} < 0.43$ — just barely. $\\frac{17}{40} = 0.425$, smaller still. $\\frac{5}{12}$: $5 \\times 40 = 200$ against $17 \\times 12 = 204$, so $\\frac{5}{12} < \\frac{17}{40}$. Nothing is smaller than $\\frac{5}{12}$, so it is the answer. (As decimals: $0.4166\\ldots < 0.425 < 0.42857\\ldots < 0.43$.)',
    },
    {
      q: 'Which of these four numbers is the largest: $\\frac{7}{8}$, $0.88$, $\\frac{13}{15}$, or $\\frac{8}{9}$?',
      choices: ['$\\frac{7}{8}$', '$0.88$', '$\\frac{13}{15}$', '$\\frac{8}{9}$'],
      answer: 3,
      solution:
        'Compare each with $0.88$ by cross-multiplying. $\\frac{7}{8}$: $7 \\times 100 = 700$ versus $88 \\times 8 = 704$, so $\\frac{7}{8} < 0.88$. $\\frac{13}{15}$: $13 \\times 100 = 1300$ versus $88 \\times 15 = 1320$, so $\\frac{13}{15} < 0.88$ too. $\\frac{8}{9}$: $8 \\times 100 = 800$ versus $88 \\times 9 = 792$, and $800 > 792$, so $\\frac{8}{9} > 0.88$. That makes $\\frac{8}{9}$ the largest. A handy shortcut: a fraction just under $1$ is bigger when the gap $1 - \\frac{a}{b}$ is smaller, and $\\frac{1}{9} < \\frac{1}{8}$.',
    },
  ],
]

const s12 = [
  // p1 — multiply before you add
  [
    {
      q: 'Evaluate $7 + 6 \\times 3$.',
      choices: ['$25$', '$39$', '$18$', '$16$'],
      answer: 0,
      solution:
        'Multiplication outranks addition, so the product goes first: $6 \\times 3 = 18$, then $7 + 18 = 25$. Adding first gives $(7 + 6) \\times 3 = 13 \\times 3 = 39$, a different number entirely — which is exactly why we agree on an order. The choice $18$ stops at the product and forgets the $7$, and $16$ comes from adding all three numbers.',
    },
    {
      q: 'Evaluate $9 + 4 \\times 5$.',
      choices: ['$65$', '$20$', '$29$', '$18$'],
      answer: 2,
      solution:
        'Do the multiplication first: $4 \\times 5 = 20$, then $9 + 20 = 29$. Working strictly left to right would give $(9 + 4) \\times 5 = 65$, and the two answers differ, so the order genuinely matters. The choice $20$ is only the product, and $18$ adds all three numbers, $9 + 4 + 5$.',
    },
    {
      q: 'Evaluate $10 + 2 \\times 7$.',
      choices: ['$84$', '$14$', '$19$', '$24$'],
      answer: 3,
      solution:
        'The product comes first: $2 \\times 7 = 14$, and then $10 + 14 = 24$. Adding first would give $(10 + 2) \\times 7 = 12 \\times 7 = 84$ — far off. The choice $14$ reports the product alone, and $19$ adds all three numbers, $10 + 2 + 7$.',
    },
  ],
  // p2 — divide before you subtract
  [
    {
      q: 'Evaluate $20 - 12 \\div 4$.',
      choices: ['$17$', '$2$', '$8$', '$3$'],
      answer: 0,
      solution:
        'Division outranks subtraction: $12 \\div 4 = 3$, then $20 - 3 = 17$. Subtracting first would give $(20 - 12) \\div 4 = 8 \\div 4 = 2$, which is not what the expression says. The choice $8$ is $20 - 12$ with the division never done, and $3$ is the quotient by itself.',
    },
    {
      q: 'Evaluate $30 - 18 \\div 3$.',
      choices: ['$4$', '$24$', '$12$', '$6$'],
      answer: 1,
      solution:
        'Handle the division first: $18 \\div 3 = 6$, then $30 - 6 = 24$. Going left to right instead gives $(30 - 18) \\div 3 = 12 \\div 3 = 4$ — a completely different answer. The choice $12$ is $30 - 18$ with the division skipped, and $6$ is just the quotient.',
    },
    {
      q: 'Evaluate $24 \\div 3 - 2$.',
      choices: ['$24$', '$19$', '$6$', '$8$'],
      answer: 2,
      solution:
        'Division comes before subtraction, and here it also comes first on the page: $24 \\div 3 = 8$, then $8 - 2 = 6$. Grouping the subtraction first would give $24 \\div (3 - 2) = 24 \\div 1 = 24$ — but there are no parentheses, so that grouping is invented. The choice $8$ stops after dividing, and $19$ reads the $\\div$ as another minus sign, $24 - 3 - 2$.',
    },
  ],
  // p3 — what the exponent is attached to
  [
    {
      q: 'Evaluate $5 \\times 2^3$.',
      choices: ['$1000$', '$40$', '$30$', '$8$'],
      answer: 1,
      solution:
        'The exponent is glued to the $2$ alone, not to the whole product: $2^3 = 8$, then $5 \\times 8 = 40$. Cubing the product first gives $(5 \\times 2)^3 = 10^3 = 1000$, which is $25$ times too big. The choice $30$ treats $2^3$ as $2 \\times 3 = 6$ — but an exponent counts copies, it is not a factor. The choice $8$ stops at $2^3$.',
    },
    {
      q: 'Evaluate $3 \\times 4^2$.',
      choices: ['$144$', '$24$', '$48$', '$16$'],
      answer: 2,
      solution:
        'Exponents fire before multiplication, and the $2$ sits on the $4$ only: $4^2 = 16$, then $3 \\times 16 = 48$. Squaring the product gives $(3 \\times 4)^2 = 12^2 = 144$, which is three times too big. The choice $24$ reads $4^2$ as $4 \\times 2 = 8$, and $16$ reports $4^2$ with the $3$ forgotten.',
    },
    {
      q: 'Evaluate $(4 \\times 2)^2$.',
      choices: ['$16$', '$32$', '$8$', '$64$'],
      answer: 3,
      solution:
        'This time the parentheses hand the exponent the whole product: $4 \\times 2 = 8$, then $8^2 = 64$. Compare with $4 \\times 2^2 = 4 \\times 4 = 16$, which is the choice $16$ — the parentheses are the only difference between the two expressions, and they change the answer fourfold. The choice $32$ squares only the $4$, giving $4^2 \\times 2$, and $8$ never squares anything.',
    },
  ],
  // p4 — parentheses versus a bare exponent
  [
    {
      q: 'Evaluate $(10 - 4)^2$.',
      choices: ['$36$', '$-6$', '$12$', '$84$'],
      answer: 0,
      solution:
        'Parentheses first: $10 - 4 = 6$. Then square: $6^2 = 36$. Without the parentheses, $10 - 4^2$ would be $10 - 16 = -6$, the choice $-6$ — one pair of parentheses swings the answer from $-6$ to $36$. The choice $12$ multiplies by the exponent, $6 \\times 2$, and $84$ squares each number on its own, $10^2 - 4^2 = 100 - 16$.',
    },
    {
      q: 'Evaluate $(3 + 5)^2$.',
      choices: ['$28$', '$64$', '$34$', '$16$'],
      answer: 1,
      solution:
        'Do the grouped addition first: $3 + 5 = 8$, then $8^2 = 64$. Dropping the parentheses would give $3 + 5^2 = 3 + 25 = 28$, the choice $28$. The choice $34$ squares each term separately, $3^2 + 5^2 = 9 + 25$ — squaring does not spread across a sum. The choice $16$ multiplies by the exponent, $8 \\times 2$, instead of squaring.',
    },
    {
      q: 'Evaluate $12 - 2^3$.',
      choices: ['$1000$', '$6$', '$10$', '$4$'],
      answer: 3,
      solution:
        'With no parentheses, the exponent grabs only the $2$: $2^3 = 8$, and then $12 - 8 = 4$. If the expression had been $(12 - 2)^3$ the answer would be $10^3 = 1000$ instead — the choice $1000$. The choice $6$ treats $2^3$ as $2 \\times 3 = 6$ and computes $12 - 6$, and $10$ ignores the exponent altogether.',
    },
  ],
  // p5 — equal rank means left to right
  [
    {
      q: 'Evaluate $36 \\div 6 \\times 3$.',
      choices: ['$2$', '$18$', '$648$', '$6$'],
      answer: 1,
      solution:
        'Multiplication and division have the SAME rank, so neither one jumps ahead — work left to right: $36 \\div 6 = 6$, then $6 \\times 3 = 18$. Doing the multiplication first would give $36 \\div (6 \\times 3) = 36 \\div 18 = 2$, the choice $2$, which is nine times too small. The choice $648$ turns the $\\div$ into a $\\times$, and $6$ stops after the first step.',
    },
    {
      q: 'Evaluate $60 \\div 5 \\times 2$.',
      choices: ['$600$', '$6$', '$24$', '$12$'],
      answer: 2,
      solution:
        'Same rank, so go left to right: $60 \\div 5 = 12$, then $12 \\times 2 = 24$. Multiplying first gives $60 \\div (5 \\times 2) = 60 \\div 10 = 6$ — the choice $6$, and a classic trap. The letters in "PEMDAS" do not mean multiplication beats division; they share a level. The choice $600$ multiplies everything, and $12$ stops halfway.',
    },
    {
      q: 'Evaluate $20 - 8 + 5$.',
      choices: ['$7$', '$23$', '$33$', '$17$'],
      answer: 3,
      solution:
        'Addition and subtraction also share a rank, so left to right it is: $20 - 8 = 12$, then $12 + 5 = 17$. Adding the $8$ and $5$ together first gives $20 - (8 + 5) = 20 - 13 = 7$, the choice $7$ — the $+5$ is added to the running total, not attached to the $8$. The choice $23$ is $20 + 8 - 5$ with the signs swapped, and $33$ adds all three.',
    },
  ],
  // p6 — nested grouping symbols
  [
    {
      q: 'Evaluate $4[3 + 3(6 - 2)]$.',
      choices: ['$60$', '$96$', '$15$', '$48$'],
      answer: 0,
      solution:
        'Work from the inside out. Innermost: $6 - 2 = 4$. Inside the brackets, multiply before adding: $3 + 3 \\times 4 = 3 + 12 = 15$. Finally $4 \\times 15 = 60$. The choice $96$ adds $3 + 3$ before multiplying, giving $4[6 \\times 4]$. The choice $15$ is the bracket alone with the outer $4$ forgotten, and $48$ drops the "$3 +$" and computes $4[3 \\times 4]$.',
    },
    {
      q: 'Evaluate $5[10 - 2(3 + 1)]$.',
      choices: ['$160$', '$10$', '$2$', '$40$'],
      answer: 1,
      solution:
        'Innermost group first: $3 + 1 = 4$. Then multiply before subtracting: $10 - 2 \\times 4 = 10 - 8 = 2$. Finally $5 \\times 2 = 10$. The choice $160$ subtracts first, giving $5[8 \\times 4]$. The choice $2$ is the bracket by itself, and $40$ computes $5(10 - 2)$ with the $(3 + 1)$ factor lost.',
    },
    {
      q: 'Evaluate $6[4 + 2(7 - 5)]$.',
      choices: ['$72$', '$8$', '$48$', '$78$'],
      answer: 2,
      solution:
        'Start inside: $7 - 5 = 2$. Inside the brackets the product goes first: $4 + 2 \\times 2 = 4 + 4 = 8$. Then $6 \\times 8 = 48$. The choice $72$ adds $4 + 2$ before multiplying, giving $6[6 \\times 2]$. The choice $8$ is the bracket alone, and $78$ erases the inner parentheses and computes $6[4 + 2 \\times 7 - 5] = 6 \\times 13$.',
    },
  ],
  // p7 — the fraction bar groups top and bottom
  [
    {
      q: 'Evaluate $\\frac{40 - 4 \\cdot 5}{8 - 3}$.',
      choices: ['$4$', '$36$', '$20$', '$8$'],
      answer: 0,
      solution:
        'The fraction bar puts invisible parentheses around the whole top and the whole bottom. Top: $40 - 4 \\cdot 5 = 40 - 20 = 20$. Bottom: $8 - 3 = 5$. Then $20 \\div 5 = 4$. The choice $36$ divides only the last term of the top, computing $40 - \\frac{4 \\cdot 5}{5}$. The choice $20$ stops at the numerator, and $8$ is $40 \\div 5$ with the $-4 \\cdot 5$ ignored.',
    },
    {
      q: 'Evaluate $\\frac{5 \\cdot 6 - 6}{3 + 5}$.',
      choices: ['$24$', '$13$', '$3$', '$33$'],
      answer: 2,
      solution:
        'Finish both halves before dividing. Top: $5 \\cdot 6 - 6 = 30 - 6 = 24$. Bottom: $3 + 5 = 8$. Then $24 \\div 8 = 3$. The choice $24$ is the numerator with the division still to do. The choice $13$ divides by only the $3$ and then adds the $5$: $24 \\div 3 + 5$. The choice $33$ throws away the bar entirely and reads the whole thing as $5 \\cdot 6 - 6 \\div 3 + 5 = 30 - 2 + 5$.',
    },
    {
      q: 'Evaluate $\\frac{9 + 3 \\cdot 5}{10 - 2 \\cdot 2}$.',
      choices: ['$10$', '$24$', '$6$', '$4$'],
      answer: 3,
      solution:
        'Each half is its own little order-of-operations problem. Top: $9 + 3 \\cdot 5 = 9 + 15 = 24$. Bottom: $10 - 2 \\cdot 2 = 10 - 4 = 6$. Then $24 \\div 6 = 4$. The choice $10$ adds $9 + 3$ before multiplying, giving a top of $60$ and $60 \\div 6 = 10$. The choices $24$ and $6$ report the top and the bottom on their own, one division short of an answer.',
    },
  ],
  // p8 — exponent, then product, then left-to-right
  [
    {
      q: 'Evaluate $4^2 - 2 \\times 5 + 3$.',
      choices: ['$9$', '$3$', '$73$', '$1$'],
      answer: 0,
      solution:
        'Exponent first: $4^2 = 16$. Then the product: $2 \\times 5 = 10$. That leaves $16 - 10 + 3$, and since $-$ and $+$ share a rank, go left to right: $16 - 10 = 6$, then $6 + 3 = 9$. The choice $3$ groups the $+3$ with the $10$ and computes $16 - 13$ — the $3$ is added to the running total, not to the $10$. The choice $73$ ignores every rank and grinds left to right, $((16 - 2) \\times 5) + 3$. The choice $1$ reads $4^2$ as $4 \\times 2 = 8$.',
    },
    {
      q: 'Evaluate $6^2 - 5 \\times 4 + 2$.',
      choices: ['$14$', '$18$', '$126$', '$-6$'],
      answer: 1,
      solution:
        'Take it in rank order: $6^2 = 36$, then $5 \\times 4 = 20$, leaving $36 - 20 + 2$. Left to right: $36 - 20 = 16$, then $16 + 2 = 18$. The choice $14$ groups the tail as $36 - (20 + 2)$, which invents parentheses that are not there. The choice $126$ works straight left to right with no ranks at all, $((36 - 5) \\times 4) + 2$, and $-6$ reads $6^2$ as $6 \\times 2 = 12$.',
    },
    {
      q: 'Evaluate $2^4 - 3 \\times 4 + 6$.',
      choices: ['$-2$', '$58$', '$2$', '$10$'],
      answer: 3,
      solution:
        'First the power: $2^4 = 16$. Then the product: $3 \\times 4 = 12$. Now $16 - 12 + 6$, left to right: $16 - 12 = 4$, then $4 + 6 = 10$. The choice $-2$ groups the last two terms as $16 - (12 + 6)$ and even lands on the wrong side of zero. The choice $58$ ignores ranks entirely, $((16 - 3) \\times 4) + 6$, and $2$ reads $2^4$ as $2 \\times 4 = 8$.',
    },
  ],
  // p9 — a power outside a grouped expression
  [
    {
      q: 'Evaluate $3^2 + 3(2^3 - 4)^2$.',
      choices: ['$153$', '$57$', '$21$', '$54$'],
      answer: 1,
      solution:
        'Inside the parentheses first, and the exponent there comes before the subtraction: $2^3 - 4 = 8 - 4 = 4$. Now the outer square: $4^2 = 16$. Multiply: $3 \\times 16 = 48$. Finally $3^2 + 48 = 9 + 48 = 57$. The choice $153$ squares the product, $(3 \\times 4)^2 = 144$ — the exponent grabs only the parentheses, not the $3$ in front. The choice $21$ forgets the outer square and computes $9 + 3 \\times 4$, and $54$ reads $3^2$ as $3 \\times 2 = 6$.',
    },
    {
      q: 'Evaluate $4^2 + 2(5^2 - 20)^2$.',
      choices: ['$116$', '$26$', '$66$', '$216$'],
      answer: 2,
      solution:
        'Work the parentheses first: $5^2 - 20 = 25 - 20 = 5$. Then the outer square: $5^2 = 25$. Multiply: $2 \\times 25 = 50$. And $4^2 + 50 = 16 + 50 = 66$. The choice $116$ squares the whole product, $(2 \\times 5)^2 = 100$, instead of squaring only what is in the parentheses. The choice $26$ drops the outer square, giving $16 + 2 \\times 5$, and $216$ reads $5^2$ as $5 \\times 2 = 10$, making the parentheses $-10$.',
    },
    {
      q: 'Evaluate $2^4 + 3(2^3 - 6)^2$.',
      choices: ['$52$', '$22$', '$20$', '$28$'],
      answer: 3,
      solution:
        'Inside the parentheses: $2^3 - 6 = 8 - 6 = 2$. Square it: $2^2 = 4$. Multiply: $3 \\times 4 = 12$. Add the leading power: $2^4 + 12 = 16 + 12 = 28$. The choice $52$ squares the product, $(3 \\times 2)^2 = 36$. The choice $22$ skips the outer square and computes $16 + 3 \\times 2$. The choice $20$ reads $2^4$ as $2 \\times 4 = 8$ — exponents count copies of the base, they do not multiply it.',
    },
  ],
  // p10 — check the bottom before you divide
  [
    {
      q: 'Evaluate $\\frac{3^2 + 6}{4 \\cdot 3 - 12}$.',
      choices: ['Undefined', '$15$', '$0$', '$5$'],
      answer: 0,
      solution:
        'Top: $3^2 + 6 = 9 + 6 = 15$. Bottom: $4 \\cdot 3 - 12 = 12 - 12 = 0$. So the expression asks for $15 \\div 0$, and dividing by zero is undefined — no number times $0$ can ever give $15$. The choice $0$ mixes this up: a zero on the BOTTOM breaks the fraction, while a zero on the top would make it $0$. The choice $15$ stops at the numerator, and $5$ divides by the $3$ alone instead of by the whole bottom.',
    },
    {
      q: 'Evaluate $\\frac{4^2 + 5}{3 - 3 \\cdot 2}$.',
      choices: ['Undefined', '$-7$', '$21$', '$7$'],
      answer: 1,
      solution:
        'Top: $4^2 + 5 = 16 + 5 = 21$. Bottom: multiplication before subtraction, so $3 - 3 \\cdot 2 = 3 - 6 = -3$ — not zero, so the division is fine. Then $21 \\div (-3) = -7$. Working the bottom left to right instead gives $(3 - 3) \\cdot 2 = 0$ and would make you call the whole thing undefined, which is the choice "Undefined" — a good reminder that you must compute the bottom CORRECTLY before deciding it is zero. The choice $21$ is the top alone, and $7$ loses the minus sign.',
    },
    {
      q: 'Evaluate $\\frac{6^2 - 4}{8 - 4 \\cdot 2}$.',
      choices: ['$32$', '$4$', 'Undefined', '$0$'],
      answer: 2,
      solution:
        'Top: $6^2 - 4 = 36 - 4 = 32$. Bottom: the product goes first, so $8 - 4 \\cdot 2 = 8 - 8 = 0$. Since the denominator is zero, the expression is undefined. The choice $4$ divides by the leading $8$ and never finishes the bottom. The choice $32$ stops at the numerator, and $0$ confuses a zero denominator (undefined) with a zero numerator (which really would give $0$).',
    },
  ],
]

const s13 = [
  // p1 — naming the property
  [
    {
      q: 'Which of these operations is associative?',
      choices: ['Addition', 'Subtraction', 'Division', 'None of these'],
      answer: 0,
      solution:
        'Associative means the grouping does not change the answer, and addition passes: $(2 + 5) + 8 = 7 + 8 = 15$ and $2 + (5 + 8) = 2 + 13 = 15$. Subtraction fails — $(12 - 5) - 3 = 4$ but $12 - (5 - 3) = 10$. Division fails too: $(16 \\div 4) \\div 2 = 2$ but $16 \\div (4 \\div 2) = 8$.',
    },
    {
      q: 'Which of these operations is NOT commutative?',
      choices: ['Addition', 'Division', 'Multiplication', 'All three are commutative'],
      answer: 1,
      solution:
        'Commutative means swapping the two inputs leaves the answer alone. Addition and multiplication both do: $6 + 9 = 9 + 6 = 15$ and $6 \\times 9 = 9 \\times 6 = 54$. Division does not: $20 \\div 4 = 5$ while $4 \\div 20 = \\frac{1}{5}$. One counterexample is enough to sink the claim, so division is the odd one out.',
    },
    {
      q: 'For which of these operations does swapping the two numbers always leave the answer unchanged?',
      choices: ['Subtraction', 'Division', 'None of these', 'Addition'],
      answer: 3,
      solution:
        'Addition is commutative: $a + b = b + a$ for every pair, so $13 + 40$ and $40 + 13$ both give $53$. Subtraction only survives a swap in the special case where the two numbers are equal — $7 - 7 = 7 - 7$ — and the word "always" asks for every pair, which $9 - 2 = 7$ against $2 - 9 = -7$ already breaks. Division breaks the same way: $8 \\div 2 = 4$ but $2 \\div 8 = \\frac{1}{4}$.',
    },
  ],
  // p2 — swapping a subtraction negates
  [
    {
      q: 'You know that $23 - 9 = 14$. What is $9 - 23$?',
      choices: ['$-14$', '$14$', '$\\frac{1}{14}$', '$32$'],
      answer: 0,
      solution:
        'Swapping the two numbers in a subtraction flips the sign of the answer: $9 - 23 = -(23 - 9) = -14$. You can also see it on the number line — starting at $9$ and walking $23$ to the left lands you $14$ units below zero. The choice $14$ assumes subtraction is commutative, which it is not. The choice $\\frac{1}{14}$ is what a swapped DIVISION would give, and $32$ adds instead of subtracting.',
    },
    {
      q: 'You know that $8 - 15 = -7$. What is $15 - 8$?',
      choices: ['$-7$', '$23$', '$7$', '$-\\frac{1}{7}$'],
      answer: 2,
      solution:
        'Swapping a subtraction negates the answer, and the negative of $-7$ is $+7$: $15 - 8 = -(8 - 15) = -(-7) = 7$. Check directly: $15 - 8 = 7$. ✓ The rule works in both directions — swapping can turn a negative answer positive just as easily as the other way round. The choice $-7$ leaves the answer untouched, and $23$ adds the two numbers.',
    },
    {
      q: 'If $a - b = 12$, what is $b - a$?',
      choices: ['$12$', '$\\frac{1}{12}$', '$0$', '$-12$'],
      answer: 3,
      solution:
        'The same rule holds for letters as for numbers: $b - a = -(a - b) = -12$. Try it with real values — $a = 20$ and $b = 8$ give $a - b = 12$ and $b - a = -12$. ✓ The choice $12$ would need subtraction to be commutative. The choice $\\frac{1}{12}$ is the reciprocal, which is what swapping a DIVISION produces, and $0$ would require $a$ and $b$ to be equal.',
    },
  ],
  // p3 — rewriting a subtraction as an addition
  [
    {
      q: 'Which addition means the same thing as $21 - 6$?',
      choices: ['$6 + (-21)$', '$21 + (-6)$', '$21 + 6$', '$-(21 + 6)$'],
      answer: 1,
      solution:
        'Subtracting is adding the opposite: $21 - 6 = 21 + (-6) = 15$. Keep the minus sign glued to the $6$ and leave the $21$ alone. The choice $6 + (-21)$ equals $-15$ — the right size but the wrong sign, because the two numbers got swapped. The choice $21 + 6 = 27$ drops the minus sign entirely, and $-(21 + 6) = -27$ hands the minus sign to both numbers.',
    },
    {
      q: 'Which addition means the same thing as $7 - 18$?',
      choices: ['$18 + (-7)$', '$7 + 18$', '$7 + (-18)$', '$-(7 + 18)$'],
      answer: 2,
      solution:
        'Rewrite the subtraction as adding the opposite of the number being subtracted: $7 - 18 = 7 + (-18) = -11$. The choice $18 + (-7)$ gives $11$ — same size, wrong sign, because it subtracts the wrong number. This is worth noticing: $7 - 18$ and $18 - 7$ are opposites, not equals. The choice $7 + 18 = 25$ ignores the minus sign, and $-(7 + 18) = -25$ applies it to both.',
    },
    {
      q: 'Which subtraction means the same thing as $-13 + 5$?',
      choices: ['$13 - 5$', '$5 + 13$', '$-13 - 5$', '$5 - 13$'],
      answer: 3,
      solution:
        'Reorder the sum (addition is commutative) to get $5 + (-13)$, and adding a negative is the same as subtracting: $5 - 13 = -8$. Check the original: $-13 + 5 = -8$. ✓ The choice $13 - 5 = 8$ is the opposite. The choice $-13 - 5 = -18$ subtracts the $5$ instead of adding it, and $5 + 13 = 18$ loses the minus sign on the $13$.',
    },
  ],
  // p4 — division as multiplication by a reciprocal
  [
    {
      q: 'Which multiplication means the same thing as $30 \\div 6$?',
      choices: ['$30 \\times \\frac{1}{6}$', '$30 \\times 6$', '$6 \\times \\frac{1}{30}$', '$\\frac{1}{30} \\times \\frac{1}{6}$'],
      answer: 0,
      solution:
        'Dividing by $6$ is multiplying by its reciprocal: $30 \\div 6 = 30 \\times \\frac{1}{6} = 5$. The reciprocal belongs to the DIVISOR — the number you are dividing by — and the $30$ stays as it is. The choice $6 \\times \\frac{1}{30} = \\frac{1}{5}$ flips the wrong number, which is exactly the swapped division. The choice $30 \\times 6 = 180$ forgets the reciprocal, and the last choice flips both.',
    },
    {
      q: 'Which division means the same thing as $16 \\times \\frac{1}{8}$?',
      choices: ['$8 \\div 16$', '$16 \\div 8$', '$16 \\div \\frac{1}{8}$', '$\\frac{1}{16} \\div 8$'],
      answer: 1,
      solution:
        'Travel the rule backwards: multiplying by $\\frac{1}{8}$ is dividing by $8$, so $16 \\times \\frac{1}{8} = 16 \\div 8 = 2$. The choice $8 \\div 16 = \\frac{1}{2}$ has the two numbers the wrong way round. The choice $16 \\div \\frac{1}{8} = 128$ divides by the reciprocal instead of by $8$ — that would UNDO the operation rather than match it.',
    },
    {
      q: 'Which multiplication means the same thing as $42 \\div 7$?',
      choices: ['$42 \\times 7$', '$7 \\times \\frac{1}{42}$', '$42 \\times \\frac{1}{7}$', '$\\frac{1}{42} \\times \\frac{1}{7}$'],
      answer: 2,
      solution:
        'Replace "$\\div 7$" with "$\\times \\frac{1}{7}$": $42 \\div 7 = 42 \\times \\frac{1}{7} = 6$. Only the divisor gets flipped. The choice $7 \\times \\frac{1}{42} = \\frac{1}{6}$ flips the $42$ instead — and notice it gives the reciprocal of the right answer, which is the signature of a swapped division. The choice $42 \\times 7 = 294$ never takes a reciprocal at all.',
    },
  ],
  // p5 — reorder a signed sum to find friendly pairs
  [
    {
      q: 'Compute $57 - 41 + 43 - 19$.',
      choices: ['$40$', '$0$', '$-40$', '$160$'],
      answer: 0,
      solution:
        'Rewrite as a sum of signed numbers, $57 + (-41) + 43 + (-19)$, and then reorder freely: $(57 + 43) + ((-41) + (-19)) = 100 + (-60) = 40$. Each minus sign travels with its own number — that is what makes the reordering safe. The choice $0$ assumes everything cancels, but the positives total $100$ and the negatives only $60$. The choice $160$ adds all four sizes with no signs at all.',
    },
    {
      q: 'Compute $84 - 39 + 16 - 61$.',
      choices: ['$100$', '$-100$', '$0$', '$200$'],
      answer: 2,
      solution:
        'Pair the friendly numbers after rewriting as signed addition: $(84 + 16) + ((-39) + (-61)) = 100 + (-100) = 0$. Scanning for pairs that make round numbers turns a four-step slog into one line. The choice $100$ stops after adding the positives, $-100$ reports only the negatives, and $200$ adds all four sizes as if every sign were a plus.',
    },
    {
      q: 'Compute $126 - 48 + 74 - 52$.',
      choices: ['$0$', '$200$', '$-100$', '$100$'],
      answer: 3,
      solution:
        'Reorder the signed sum to pair the round-friendly numbers: $(126 + 74) + ((-48) + (-52)) = 200 + (-100) = 100$. The choice $0$ assumes the two groups cancel, which they would only if the positives and negatives had matching totals — here they do not. The choice $200$ is the positive group alone, and $-100$ is the negative group alone.',
    },
  ],
  // p6 — reorder a product to find easy factors
  [
    {
      q: 'Compute $4 \\times 17 \\times 25$.',
      choices: ['$1600$', '$1700$', '$170$', '$425$'],
      answer: 1,
      solution:
        'Multiplication is commutative and associative, so pair the friendly factors first: $4 \\times 25 = 100$, then $100 \\times 17 = 1700$. Grinding $4 \\times 17 = 68$ first and then $68 \\times 25$ gets the same answer but the long way. The choice $425$ is $17 \\times 25$ with the $4$ left out, and $170$ is $17 \\times 10$.',
    },
    {
      q: 'Compute $2 \\times 39 \\times 50$.',
      choices: ['$390$', '$780$', '$3900$', '$1950$'],
      answer: 2,
      solution:
        'Look for the pair that makes a round number: $2 \\times 50 = 100$, and then $100 \\times 39 = 3900$. Reordering is allowed because a pure product may be rearranged any way you like. The choice $1950$ is $39 \\times 50$ with the $2$ dropped, $780$ is $2 \\times 39 \\times 10$, and $390$ is $39 \\times 10$.',
    },
    {
      q: 'Compute $8 \\times 13 \\times 125$.',
      choices: ['$1300$', '$1625$', '$1040$', '$13000$'],
      answer: 3,
      solution:
        'The two friendly factors are the outer ones: $8 \\times 125 = 1000$, so the product is $1000 \\times 13 = 13000$. Spotting $8 \\times 125$ saves you from multiplying $104 \\times 125$ by hand. The choice $1625$ is $13 \\times 125$ with the $8$ forgotten, $1040$ is $8 \\times 13 \\times 10$, and $1300$ is $13 \\times 100$.',
    },
  ],
  // p7 — grouping changes a subtraction
  [
    {
      q: 'Compute $20 - (8 - 5)$.',
      choices: ['$17$', '$7$', '$23$', '$33$'],
      answer: 0,
      solution:
        'Parentheses first: $8 - 5 = 3$, so the answer is $20 - 3 = 17$. Compare with the other grouping, $(20 - 8) - 5 = 12 - 5 = 7$ — the choice $7$. Two different answers from the same three numbers is exactly what "subtraction is not associative" means. The choice $23$ is $20 + 8 - 5$, and $33$ adds all three.',
    },
    {
      q: 'Compute $30 - (14 - 6)$.',
      choices: ['$10$', '$22$', '$38$', '$50$'],
      answer: 1,
      solution:
        'Work the parentheses first: $14 - 6 = 8$, then $30 - 8 = 22$. Regrouping as $(30 - 14) - 6 = 16 - 6 = 10$ gives the choice $10$ instead, so the brackets are doing real work here. A useful way to see it: subtracting $(14 - 6)$ means taking away $14$ but then giving $6$ back. The choice $38$ is $30 + 14 - 6$, and $50$ adds everything.',
    },
    {
      q: 'Compute $18 - (7 - 11)$.',
      choices: ['$0$', '$14$', '$22$', '$-22$'],
      answer: 2,
      solution:
        'Inside first: $7 - 11 = -4$. Then $18 - (-4) = 18 + 4 = 22$ — subtracting a negative adds. Regrouping as $(18 - 7) - 11 = 11 - 11 = 0$ gives the choice $0$, which is a very different answer. The choice $14$ subtracts inside the parentheses in the wrong order, computing $18 - (11 - 7)$, and $-22$ has the sign backwards.',
    },
  ],
  // p8 — regroup a product and a division
  [
    {
      q: 'Compute $64 \\times 9 \\div 8$.',
      choices: ['$72$', '$8$', '$576$', '$\\frac{8}{9}$'],
      answer: 0,
      solution:
        'Rewrite the division as multiplying by $\\frac{1}{8}$, then regroup: $\\left(64 \\times \\frac{1}{8}\\right) \\times 9 = 8 \\times 9 = 72$. Much nicer than working out $576 \\div 8$. The choice $576$ is $64 \\times 9$ with the division skipped, $8$ is $64 \\div 8$ with the $9$ forgotten, and $\\frac{8}{9}$ comes from dividing by the whole product, $64 \\div (9 \\times 8)$ — but $\\times$ and $\\div$ share a rank and run left to right.',
    },
    {
      q: 'Compute $45 \\times 6 \\div 3$.',
      choices: ['$270$', '$90$', '$15$', '$\\frac{5}{2}$'],
      answer: 1,
      solution:
        'Regroup so the easy pair meets first: $45 \\times \\left(6 \\times \\frac{1}{3}\\right) = 45 \\times 2 = 90$. The choice $270$ is $45 \\times 6$ with the $\\div 3$ never done, and $15$ is $45 \\div 3$ with the $6$ dropped. The choice $\\frac{5}{2}$ divides by the whole product, $45 \\div (6 \\times 3)$, which is a different expression from the one written.',
    },
    {
      q: 'Compute $96 \\div 8 \\times 5$.',
      choices: ['$2.4$', '$480$', '$12$', '$60$'],
      answer: 3,
      solution:
        'Multiplication and division share a rank, so go left to right: $96 \\div 8 = 12$, then $12 \\times 5 = 60$. Rewriting shows the same thing: $96 \\times \\frac{1}{8} \\times 5$, and any regrouping of that pure product gives $60$. The choice $2.4$ multiplies $8 \\times 5$ first and divides by $40$. The choice $480$ ignores the division, and $12$ stops after the first step.',
    },
  ],
  // p9 — telescoping by pairing
  [
    {
      q: 'Compute $60 - 59 + 58 - 57 + \\cdots + 2 - 1$.',
      choices: ['$30$', '$60$', '$0$', '$29$'],
      answer: 0,
      solution:
        'Group the terms in pairs: $(60 - 59) + (58 - 57) + \\cdots + (2 - 1)$. Each pair is worth exactly $1$. The $60$ numbers make $30$ pairs, so the total is $30$. The choice $0$ assumes the whole thing cancels, but every pair leaves $1$ behind. The choice $60$ counts the numbers instead of the pairs, and $29$ loses a pair somewhere in the counting.',
    },
    {
      q: 'Compute $1 - 2 + 3 - 4 + \\cdots + 99 - 100$.',
      choices: ['$50$', '$0$', '$-50$', '$-100$'],
      answer: 2,
      solution:
        'Pair them as $(1 - 2) + (3 - 4) + \\cdots + (99 - 100)$. This time each pair is worth $-1$, because the bigger number is the one being subtracted. There are $100$ numbers, so $50$ pairs, giving $50 \\times (-1) = -50$. The choice $50$ has the sign backwards — that would be the answer if the list ran downward instead. The choice $0$ assumes cancellation.',
    },
    {
      q: 'Compute $200 - 199 + 198 - 197 + \\cdots + 2 - 1$.',
      choices: ['$0$', '$200$', '$99$', '$100$'],
      answer: 3,
      solution:
        'Pair each number with the one after it: $(200 - 199) + (198 - 197) + \\cdots + (2 - 1)$. Every pair equals $1$, and $200$ numbers form $100$ pairs, so the answer is $100$. Notice the shortcut: the answer is always HALF the count of numbers when the list steps down by one like this. The choice $200$ counts the numbers rather than the pairs, and $0$ assumes it all cancels.',
    },
  ],
  // p10 — swapping a division gives the reciprocal
  [
    {
      q: 'If $m \\div n = 8$, what is $n \\div m$?',
      choices: ['$-8$', '$\\frac{1}{8}$', '$8$', '$-\\frac{1}{8}$'],
      answer: 1,
      solution:
        'Swapping a division turns the answer upside down: $n \\div m = \\frac{1}{m \\div n} = \\frac{1}{8}$. Test it with numbers — $m = 24$ and $n = 3$ give $m \\div n = 8$ and $n \\div m = \\frac{3}{24} = \\frac{1}{8}$. ✓ The choices $-8$ and $-\\frac{1}{8}$ borrow the negation rule, but negation is what a swapped SUBTRACTION does; division reciprocates instead.',
    },
    {
      q: 'If $x \\div y = \\frac{2}{5}$, what is $y \\div x$?',
      choices: ['$\\frac{2}{5}$', '$-\\frac{2}{5}$', '$\\frac{5}{2}$', '$-\\frac{5}{2}$'],
      answer: 2,
      solution:
        'The reciprocal of $\\frac{2}{5}$ is $\\frac{5}{2}$, so $y \\div x = \\frac{5}{2}$. Check with numbers: $x = 2$ and $y = 5$ give $x \\div y = \\frac{2}{5}$ and $y \\div x = \\frac{5}{2}$. ✓ The choice $\\frac{2}{5}$ would need division to be commutative, and the two negative choices apply the subtraction rule to a division.',
    },
    {
      q: 'If $u \\div v = \\frac{1}{6}$, what is $v \\div u$?',
      choices: ['$\\frac{1}{6}$', '$-6$', '$-\\frac{1}{6}$', '$6$'],
      answer: 3,
      solution:
        'Flipping $\\frac{1}{6}$ gives $6$, so $v \\div u = 6$. A sense check: $u \\div v$ is small, which means $u$ is much smaller than $v$ — so dividing the other way must give something big. Try $u = 3$ and $v = 18$: $3 \\div 18 = \\frac{1}{6}$ and $18 \\div 3 = 6$. ✓ The choice $\\frac{1}{6}$ leaves the answer unchanged, and the negative choices use the rule for swapped subtractions.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 1,
  sections: {
    '1.1': s11,
    '1.2': s12,
    '1.3': s13,
  },
}
