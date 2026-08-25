// Introduction to Algebra chapter 9 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD twice: once with a value INSIDE the claimed answer or solution set
//    and once with the endpoint or a value OUTSIDE it, since the endpoint is
//    where the strict-versus-inclusive question actually lives.
//  - These are the chapter's hard problems, so a variation stays hard: the
//    negative coefficient is kept, the excluded endpoint is kept, and the
//    "which is greater" pairs are kept close enough that a decimal guess is
//    not safe.
//  - Every distractor is one named mistake, and inside any single item no two
//    choices name the same number or the same solution set.

const challenge = [
  // c1 — two-step inequality with a negative coefficient: subtract, then divide
  // by a negative and FLIP. The endpoint decides strict versus inclusive.
  [
    {
      q: 'Solve $9 - 4x > -11$.',
      choices: ['$x > 5$', '$x < -5$', '$x < 5$', '$x \\le 5$'],
      answer: 2,
      solution:
        'Subtract $9$ from both sides: $-4x > -20$. Now divide by $-4$ and FLIP the symbol: $x < 5$. Check inside the set with $x = 0$: $9 - 0 = 9 > -11$ ✓. Check the endpoint, which should be outside: $9 - 4(5) = -11$, and $-11 > -11$ is false ✓. (The choice $x > 5$ forgets the flip — test $x = 6$: $9 - 24 = -15 > -11$ is false; the choice $x < -5$ flips correctly but reads $\\frac{-20}{-4}$ as $-5$, losing the fact that a negative divided by a negative is positive; the choice $x \\le 5$ lets $5$ in, and $5$ fails.)',
    },
    {
      q: 'Solve $-6 - 2x \\le 10$.',
      choices: ['$x \\le -8$', '$x \\ge 8$', '$x > -8$', '$x \\ge -8$'],
      answer: 3,
      solution:
        'Add $6$ to both sides: $-2x \\le 16$. Divide by $-2$ and FLIP: $x \\ge -8$. Check the endpoint, which SHOULD be included: $-6 - 2(-8) = -6 + 16 = 10 \\le 10$ ✓. Check outside with $x = -9$: $-6 + 18 = 12 \\le 10$ is false ✓. (The choice $x \\le -8$ forgets the flip; the choice $x \\ge 8$ flips but reads $\\frac{16}{-2}$ as $8$ instead of $-8$; the choice $x > -8$ flips correctly and then throws away the endpoint that $\\le$ keeps.)',
    },
    {
      q: 'For which values of $w$ is $12 - 5w$ at least $-13$?',
      choices: ['$w \\ge 5$', '$w \\le 5$', '$w \\le -5$', '$w < 5$'],
      answer: 1,
      solution:
        '"At least $-13$" means $12 - 5w \\ge -13$. Subtract $12$: $-5w \\ge -25$. Divide by $-5$ and FLIP: $w \\le 5$. Check the endpoint, which should be included: $12 - 5(5) = -13 \\ge -13$ ✓. Check outside with $w = 6$: $12 - 30 = -18 \\ge -13$ is false ✓. (The choice $w \\ge 5$ forgets the flip; the choice $w \\le -5$ flips but keeps a minus sign that cancels in $\\frac{-25}{-5}$; the choice $w < 5$ turns "at least" into a strict symbol and loses $w = 5$.)',
    },
  ],
  // c2 — solve a three-part chain, then count integers. One version flips both
  // symbols; one lands on a non-integer bound.
  [
    {
      q: 'How many integers satisfy $-7 \\le 3x - 1 \\le 11$?',
      choices: ['$6$', '$5$', '$19$', '$7$'],
      answer: 3,
      solution:
        'Add $1$ to all three parts: $-6 \\le 3x \\le 12$. Divide all three parts by $3$: $-2 \\le x \\le 4$. The integers are $-2, -1, 0, 1, 2, 3, 4$ — seven of them. Check both ends forward: $x = -2$ gives $3(-2) - 1 = -7$, and $-7 \\le -7$ ✓ (included); $x = 4$ gives $12 - 1 = 11 \\le 11$ ✓ (included); one step past, $x = 5$ gives $14$, which is not $\\le 11$ ✓. (The choice $6$ drops one included endpoint; the choice $5$ drops both; the choice $19$ counts the integers of $-6 \\le 3x \\le 12$ before dividing by $3$.)',
    },
    {
      q: 'How many integers satisfy $-4 < 5 - 3x \\le 14$?',
      choices: ['$6$', '$7$', '$5$', '$18$'],
      answer: 0,
      solution:
        'Subtract $5$ from all three parts: $-9 < -3x \\le 9$. Divide every part by $-3$ and FLIP both symbols: $3 > x \\ge -3$, which reads left-to-right as $-3 \\le x < 3$. The integers are $-3, -2, -1, 0, 1, 2$ — six of them. Check both ends: $x = -3$ gives $5 + 9 = 14 \\le 14$ ✓ (included); $x = 3$ gives $5 - 9 = -4$, and $-4 < -4$ is false ✓ (excluded). (The choice $7$ counts $3$ as well; the choice $5$ drops the included $-3$; the choice $18$ counts the integers of $-9 < y \\le 9$ before dividing by $-3$.)',
    },
    {
      q: 'How many integers satisfy $-2 \\le 4x + 6 < 17$?',
      choices: ['$4$', '$6$', '$5$', '$19$'],
      answer: 2,
      solution:
        'Subtract $6$ from all three parts: $-8 \\le 4x < 11$. Divide by $4$: $-2 \\le x < \\frac{11}{4}$, and $\\frac{11}{4} = 2.75$. The integers are $-2, -1, 0, 1, 2$ — five of them. Check the ends: $x = -2$ gives $-8 + 6 = -2 \\ge -2$ ✓ (included); $x = 2$ gives $8 + 6 = 14 < 17$ ✓ (included); $x = 3$ gives $18$, and $18 < 17$ is false ✓. (The choice $4$ drops the included $-2$; the choice $6$ rounds $2.75$ up to $3$ and counts it, but $3$ fails; the choice $19$ counts the integers of $-8 \\le 4x < 11$ before dividing by $4$.)',
    },
  ],
  // c3 — pick the extreme fraction from four close ones. Cross-multiplication
  // in pairs, or distance from 1; eyeballing the digits does not work.
  [
    {
      q: 'Which of these four fractions has the greatest value?',
      choices: ['$\\frac{5}{12}$', '$\\frac{3}{7}$', '$\\frac{2}{5}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution:
        'Cross-multiply in pairs, always comparing "numerator of one times denominator of the other". $\\frac{4}{9}$ vs $\\frac{3}{7}$: $4 \\times 7 = 28 > 9 \\times 3 = 27$, so $\\frac{4}{9}$ wins. $\\frac{4}{9}$ vs $\\frac{5}{12}$: $48 > 45$, so $\\frac{4}{9}$ wins. $\\frac{4}{9}$ vs $\\frac{2}{5}$: $20 > 18$, so $\\frac{4}{9}$ wins again. Check forward in decimals: $0.444$ beats $0.429$, $0.417$, and $0.400$ ✓. (The choice $\\frac{5}{12}$ has the biggest numerator, but a bigger top alone proves nothing; the choice $\\frac{3}{7}$ is the near miss — it comes from handing the product $28$ to the wrong fraction; the choice $\\frac{2}{5}$ has the smallest denominator, and a smaller bottom alone proves nothing either.)',
    },
    {
      q: 'Which of these fractions is the smallest?',
      choices: ['$\\frac{7}{9}$', '$\\frac{5}{7}$', '$\\frac{8}{11}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'Cross-multiply in pairs. $\\frac{5}{7}$ vs $\\frac{8}{11}$: $5 \\times 11 = 55 < 7 \\times 8 = 56$, so $\\frac{5}{7}$ is smaller. $\\frac{5}{7}$ vs $\\frac{3}{4}$: $20 < 21$, smaller again. $\\frac{5}{7}$ vs $\\frac{7}{9}$: $45 < 49$, smaller again. Check forward in decimals: $0.714$ is below $0.727$, $0.750$, and $0.778$ ✓. (The choice $\\frac{7}{9}$ is actually the LARGEST — that is the answer to the opposite question; the choice $\\frac{8}{11}$ has the biggest denominator, but a bigger bottom does not by itself make a fraction small; the choice $\\frac{3}{4}$ has the smallest numerator, which likewise decides nothing on its own.)',
    },
    {
      q: 'Ranked from smallest to largest, which of these fractions comes last?',
      choices: ['$\\frac{9}{16}$', '$\\frac{7}{13}$', '$\\frac{5}{9}$', '$\\frac{11}{20}$'],
      answer: 0,
      solution:
        'Coming last in a smallest-to-largest ranking means being the largest. Cross-multiply in pairs: $\\frac{9}{16}$ vs $\\frac{5}{9}$ gives $81 > 80$; $\\frac{9}{16}$ vs $\\frac{11}{20}$ gives $180 > 176$; $\\frac{9}{16}$ vs $\\frac{7}{13}$ gives $117 > 112$. So $\\frac{9}{16}$ beats all three. Check forward in decimals: $0.5625$ tops $0.5556$, $0.5500$, and $0.5385$ ✓. (The choice $\\frac{7}{13}$ is the smallest of the four — it is what you get by handing the product $117$ to the wrong fraction; the choice $\\frac{5}{9}$ has the smallest gap between top and bottom, a rule that only works when the numerators match; the choice $\\frac{11}{20}$ has the biggest numerator, which decides nothing.)',
    },
  ],
  // c4 — compare a sum (or difference) of square roots with a single number by
  // squaring twice. The pairs are close, so decimals alone are not convincing.
  [
    {
      q: 'Which is greater, $\\sqrt{2} + \\sqrt{5}$ or $\\sqrt{13}$?',
      choices: ['$\\sqrt{2} + \\sqrt{5}$', '$\\sqrt{13}$', 'They are equal', 'Squaring gives no help here'],
      answer: 0,
      solution:
        'Both sides are positive, so squaring preserves the comparison: $(\\sqrt{2} + \\sqrt{5})^2 = 2 + 2\\sqrt{10} + 5 = 7 + 2\\sqrt{10}$, against $(\\sqrt{13})^2 = 13$. That leaves $2\\sqrt{10}$ against $6$; square once more: $4 \\times 10 = 40$ against $36$, so $2\\sqrt{10} > 6$ and therefore $7 + 2\\sqrt{10} > 13$. The sum is greater. ✓ Check forward in decimals: $1.414 + 2.236 = 3.650$ against $\\sqrt{13} \\approx 3.606$. (The choice $\\sqrt{13}$ names the wrong side at the last step, since $40 > 36$ favours the LEFT; "they are equal" would need $40 = 36$; and squaring decided it in two lines, so the last choice is simply false.)',
    },
    {
      q: 'Which is greater, $\\sqrt{6} + \\sqrt{7}$ or $\\sqrt{26}$?',
      choices: ['$\\sqrt{6} + \\sqrt{7}$', 'They are equal', '$\\sqrt{26}$', 'A calculator is needed to decide'],
      answer: 2,
      solution:
        'Square both positive sides: $(\\sqrt{6} + \\sqrt{7})^2 = 6 + 2\\sqrt{42} + 7 = 13 + 2\\sqrt{42}$, against $26$. So compare $2\\sqrt{42}$ with $13$; square again: $4 \\times 42 = 168$ against $169$. Since $168 < 169$, we get $2\\sqrt{42} < 13$, hence $13 + 2\\sqrt{42} < 26$, and $\\sqrt{26}$ is greater. ✓ Check forward in decimals: $2.449 + 2.646 = 5.095$ against $\\sqrt{26} \\approx 5.099$ — a gap of about $0.004$. (The choice $\\sqrt{6} + \\sqrt{7}$ comes from assuming two roots always beat one, or from misreading $168 < 169$; "they are equal" would need $168 = 169$; and the last choice gives up on a comparison that came down to $168$ against $169$ — exactly the kind of gap a calculator display would hide.)',
    },
    {
      q: 'Which is greater, $\\sqrt{10} - \\sqrt{6}$ or $1$?',
      choices: ['$\\sqrt{10} - \\sqrt{6}$', '$1$', 'They are equal', 'Squaring cannot decide this'],
      answer: 1,
      solution:
        'First check both sides are positive, so squaring is legal: $\\sqrt{10} > \\sqrt{6}$, so the difference is positive. Square: $(\\sqrt{10} - \\sqrt{6})^2 = 10 - 2\\sqrt{60} + 6 = 16 - 2\\sqrt{60}$, against $1^2 = 1$. Compare $2\\sqrt{60}$ with $15$; square again: $4 \\times 60 = 240$ against $225$, so $2\\sqrt{60} > 15$. Subtracting a BIGGER amount from $16$ leaves less than $1$, so $\\sqrt{10} - \\sqrt{6} < 1$ and $1$ is greater. ✓ Check forward in decimals: $3.162 - 2.449 = 0.713$, which is below $1$. (The choice $\\sqrt{10} - \\sqrt{6}$ forgets that the $-2\\sqrt{60}$ term reverses which side the comparison $240 > 225$ favours; "they are equal" would need $240 = 225$; and squaring did decide it, in two steps.)',
    },
  ],
  // c5 — the flip rule stated abstractly: a negative multiplier or divisor
  // reverses the symbol, no matter what the signs of the other letters are.
  [
    {
      q: 'If $p > q$ and $k < 0$, which of these must be true?',
      choices: ['$kp > kq$', '$kp < kq$', '$kp = kq$', 'It depends on whether $p$ is positive'],
      answer: 1,
      solution:
        'Multiplying both sides of $p > q$ by the negative number $k$ flips the symbol: $kp < kq$. Check forward with $p = 5$, $q = 2$, $k = -3$: $kp = -15$ and $kq = -6$, and $-15 < -6$ ✓. Check again with both letters negative, $p = -2$, $q = -7$, $k = -1$: $kp = 2$ and $kq = 7$, and $2 < 7$ ✓. (The choice $kp > kq$ multiplies without flipping; the choice $kp = kq$ would need $p = q$ or $k = 0$, and neither is allowed; the last choice is the one the second check rules out — the sign of $p$ never enters, only the sign of $k$.)',
    },
    {
      q: 'If $m < n$ and $c < 0$, what is the relationship between $\\frac{m}{c}$ and $\\frac{n}{c}$?',
      choices: [
        '$\\frac{m}{c} < \\frac{n}{c}$',
        '$\\frac{m}{c} = \\frac{n}{c}$',
        'There is not enough information',
        '$\\frac{m}{c} > \\frac{n}{c}$',
      ],
      answer: 3,
      solution:
        'Dividing both sides of $m < n$ by the negative number $c$ flips the symbol, exactly as multiplying by a negative does: $\\frac{m}{c} > \\frac{n}{c}$. Check forward with $m = 2$, $n = 6$, $c = -2$: the quotients are $-1$ and $-3$, and $-1 > -3$ ✓. Check again with $m = -6$, $n = -2$, $c = -2$: the quotients are $3$ and $1$, and $3 > 1$ ✓. (The first choice divides without flipping; the second would need $m = n$; the third gives up, but the two checks show the answer never wavers — a negative divisor always reverses the symbol.)',
    },
    {
      q: 'Suppose $a < b$. Which of these statements is not guaranteed?',
      choices: ['$a - 4 < b - 4$', '$\\frac{a}{2} < \\frac{b}{2}$', '$-3a < -3b$', '$a + b < 2b$'],
      answer: 2,
      solution:
        'Multiplying by $-3$ is multiplying by a NEGATIVE, so the symbol must flip: the true statement is $-3a > -3b$, not $-3a < -3b$. Check forward with $a = 1$ and $b = 4$: $-3a = -3$ and $-3b = -12$, and $-3 < -12$ is false ✓. The other three are safe: subtracting $4$ from both sides is safe, so $a - 4 < b - 4$ ✓ ($-3 < 0$ for our numbers); dividing by the positive $2$ is safe, so $\\frac{1}{2} < 2$ ✓; and adding $b$ to both sides of $a < b$ gives $a + b < 2b$ ✓ ($5 < 8$).',
    },
  ],
  // c6 — optimisation on a closed interval with a NEGATIVE coefficient, so the
  // extreme value sits at the endpoint you would not guess.
  [
    {
      q: 'If $-3 \\le x \\le 2$, what is the largest possible value of $4 - 3x$?',
      choices: ['$13$', '$-2$', '$10$', '$9$'],
      answer: 0,
      solution:
        'The coefficient of $x$ is negative, so the SMALLEST $x$ makes the expression biggest: at $x = -3$, $4 - 3(-3) = 4 + 9 = 13$. Carrying the whole interval confirms it: multiply $-3 \\le x \\le 2$ by $-3$ and flip both symbols to get $-6 \\le -3x \\le 9$, then add $4$ to get $-2 \\le 4 - 3x \\le 13$. Check the other end forward: $x = 2$ gives $4 - 6 = -2$, the minimum ✓. (The choice $-2$ uses the right endpoint, which is what you would do if the coefficient were positive; the choice $10$ drops the minus sign and computes $4 + 3(2)$; the choice $9$ stops at $-3(-3) = 9$ and forgets to add the $4$.)',
    },
    {
      q: 'If $2 \\le y \\le 7$, what is the smallest possible value of $10 - 4y$?',
      choices: ['$2$', '$38$', '$-28$', '$-18$'],
      answer: 3,
      solution:
        'The coefficient of $y$ is negative, so the LARGEST $y$ makes the expression smallest: at $y = 7$, $10 - 4(7) = 10 - 28 = -18$. Carrying the interval confirms it: $8 \\le 4y \\le 28$ becomes $-28 \\le -4y \\le -8$, and adding $10$ gives $-18 \\le 10 - 4y \\le 2$. Check the other end forward: $y = 2$ gives $10 - 8 = 2$, the maximum ✓. (The choice $2$ uses the left endpoint, which gives the LARGEST value; the choice $38$ drops the minus sign and computes $10 + 4(7)$; the choice $-28$ stops at $-4(7)$ and forgets to add the $10$.)',
    },
    {
      q: 'If $-2 \\le x \\le 3$, which chain shows every possible value of $7 - 3x$?',
      choices: [
        '$1 \\le 7 - 3x \\le 16$',
        '$-9 \\le 7 - 3x \\le 6$',
        '$-2 \\le 7 - 3x \\le 13$',
        '$-2 \\le 7 - 3x \\le 16$',
      ],
      answer: 2,
      solution:
        'Multiply every part of $-2 \\le x \\le 3$ by $-3$ and FLIP both symbols: $6 \\ge -3x \\ge -9$, which reads left-to-right as $-9 \\le -3x \\le 6$. Now add $7$ to every part: $-2 \\le 7 - 3x \\le 13$. Check both endpoints forward: $x = 3$ gives $7 - 9 = -2$, the minimum ✓, and $x = -2$ gives $7 + 6 = 13$, the maximum ✓; a middle value such as $x = 0$ gives $7$, safely inside ✓. (The choice $1 \\le 7 - 3x \\le 16$ drops the minus sign and reports the range of $7 + 3x$; the choice $-9 \\le 7 - 3x \\le 6$ stops at the range of $-3x$ and never adds the $7$; the choice $-2 \\le 7 - 3x \\le 16$ finds the minimum correctly but computes the maximum as $7 + 3(3)$.)',
    },
  ],
  // c7 — two conditions at once: solve each, intersect, then read off the dot
  // styles (or count the integers) from the symbols that survive.
  [
    {
      q: 'A number $x$ satisfies BOTH $3x - 2 \\le 10$ and $x > -3$. Which describes the graph of all such $x$?',
      choices: [
        'Open dot at $-3$, closed dot at $4$, shading between',
        'Closed dot at $-3$, open dot at $4$, shading between',
        'Closed dots at both $-3$ and $4$, shading between',
        'Open dots at both $-3$ and $4$, shading between',
      ],
      answer: 0,
      solution:
        'Solve the first condition: add $2$ to get $3x \\le 12$, then divide by $3$ to get $x \\le 4$. Together with $x > -3$, the solution set is $-3 < x \\le 4$. Each endpoint keeps its own symbol: the strict $>$ at $-3$ gives an OPEN dot, and the $\\le$ at $4$ gives a CLOSED dot. Check both forward: $x = 4$ gives $3(4) - 2 = 10 \\le 10$ ✓ and $4 > -3$ ✓, so $4$ belongs; $x = -3$ fails $-3 > -3$ ✓, so $-3$ does not. (The second choice swaps the two dot styles; the third fills a dot that a strict symbol must leave hollow; the fourth empties the dot that $\\le$ fills.)',
    },
    {
      q: 'A number $x$ satisfies BOTH $2 - x \\le 5$ and $3x < 6$. Which describes the graph of all such $x$?',
      choices: [
        'Open dot at $-3$, closed dot at $2$, shading between',
        'Closed dot at $-3$, open dot at $2$, shading between',
        'Open dots at both $-3$ and $2$, shading between',
        'Closed dots at both $-3$ and $2$, shading between',
      ],
      answer: 1,
      solution:
        'Solve each condition. First: subtract $2$ to get $-x \\le 3$, then divide by $-1$ and FLIP to get $x \\ge -3$. Second: divide by the positive $3$ to get $x < 2$. Together: $-3 \\le x < 2$, so the dot at $-3$ is CLOSED and the dot at $2$ is OPEN. Check both forward: $x = -3$ gives $2 + 3 = 5 \\le 5$ ✓ and $3(-3) = -9 < 6$ ✓, so $-3$ belongs; $x = 2$ gives $3(2) = 6$, and $6 < 6$ is false ✓, so $2$ does not. (The first choice swaps the dot styles, which is what forgetting the flip in $-x \\le 3$ leads to; the third empties a dot that $\\ge$ fills; the fourth fills a dot that the strict $<$ must leave hollow.)',
    },
    {
      q: 'A number $x$ satisfies BOTH $3x + 4 > -8$ and $2 - x \\ge -3$. How many integers satisfy both conditions?',
      choices: ['$10$', '$8$', '$6$', '$9$'],
      answer: 3,
      solution:
        'Solve each condition. First: subtract $4$ to get $3x > -12$, then divide by $3$ to get $x > -4$. Second: subtract $2$ to get $-x \\ge -5$, then divide by $-1$ and FLIP to get $x \\le 5$. Together: $-4 < x \\le 5$, whose integers are $-3, -2, -1, 0, 1, 2, 3, 4, 5$ — nine of them. Check both ends forward: $x = -4$ gives $3(-4) + 4 = -8$, and $-8 > -8$ is false ✓ (excluded); $x = 5$ gives $2 - 5 = -3 \\ge -3$ ✓ (included). (The choice $10$ counts $-4$, which the strict $>$ shuts out; the choice $8$ drops $5$, which the $\\ge$ keeps; the choice $6$ counts only $0$ through $5$, forgetting that negative integers are integers too.)',
    },
  ],
  // c8 — fixed sum, extreme product. The balanced split maximises; the most
  // lopsided ALLOWED split minimises, and the allowed range is the whole trap.
  [
    {
      q: 'Two positive whole numbers have a sum of $16$. How much larger is their greatest possible product than their least possible product?',
      choices: ['$64$', '$48$', '$49$', '$15$'],
      answer: 2,
      solution:
        'Greatest product: with a fixed sum, balance the split, $8 + 8 = 16$ and $8 \\times 8 = 64$. Least product: make the split as lopsided as the word "positive" allows, $1 + 15 = 16$ and $1 \\times 15 = 15$. The difference is $64 - 15 = 49$. Check forward on both ends: the next-best split $7 \\times 9 = 63$ really is below $64$ ✓, and the next-worst split $2 \\times 14 = 28$ really is above $15$ ✓. (The choice $64$ reports the greatest product alone — it is also what you get by illegally allowing $0 \\times 16 = 0$ as the least; the choice $48$ uses the unbalanced $7 \\times 9 = 63$ as the greatest; the choice $15$ reports the least product alone.)',
    },
    {
      q: 'The sum of two positive whole numbers is $13$. Their greatest possible product minus their least possible product is what?',
      choices: ['$30$', '$42$', '$30.25$', '$41$'],
      answer: 0,
      solution:
        'Greatest product: the perfectly balanced split would be $6.5 + 6.5$, which whole numbers cannot do, so take the nearest split, $6 + 7 = 13$ and $6 \\times 7 = 42$. Least product: the most lopsided allowed, $1 + 12 = 13$ and $1 \\times 12 = 12$. The difference is $42 - 12 = 30$. Check forward: $5 \\times 8 = 40$ is below $42$ ✓, and $2 \\times 11 = 22$ is above $12$ ✓. (The choice $42$ reports the greatest product alone; the choice $30.25$ uses $6.5 \\times 6.5 = 42.25$, a split whole numbers are not allowed to make; the choice $41$ treats the least product as $1$ instead of $1 \\times 12$.)',
    },
    {
      q: 'Two whole numbers, each greater than $1$, add up to $19$. What is the smallest their product can be?',
      choices: ['$18$', '$34$', '$90$', '$0$'],
      answer: 1,
      solution:
        'A product with a fixed sum shrinks as the split gets more lopsided, so push the split as far as the rule "each greater than $1$" allows: $2 + 17 = 19$, giving $2 \\times 17 = 34$. Check forward that nothing legal does worse: the next split in, $3 \\times 16 = 48$, is bigger ✓, and $1 + 18$ is not allowed because $1$ is not greater than $1$ ✓. (The choice $18$ is $1 \\times 18$, the split the extra rule forbids; the choice $90$ is $9 \\times 10$, the LARGEST product rather than the smallest; the choice $0$ is $0 \\times 19$, which breaks the rule twice over.)',
    },
  ],
  // c9 — optimise over INTEGERS in an interval with one strict end: the best
  // allowed integer is one step in from the excluded endpoint.
  [
    {
      q: '$x$ is an integer with $-2 \\le x < 5$. What is the smallest possible value of $30 - 4x$?',
      choices: ['$10$', '$38$', '$46$', '$14$'],
      answer: 3,
      solution:
        'The coefficient of $x$ is negative, so the LARGEST allowed $x$ gives the smallest value. The strict $x < 5$ rules out $5$ itself, so the largest integer available is $x = 4$, giving $30 - 16 = 14$. Check forward: $x = 4$ is allowed and gives $14$ ✓, while $x = 3$ gives $30 - 12 = 18$, which is bigger ✓. (The choice $10$ uses $x = 5$, which the strict $<$ excludes; the choice $38$ uses $x = -2$, which gives the LARGEST value, not the smallest; the choice $46$ uses $x = 4$ but drops the minus sign, computing $30 + 16$.)',
    },
    {
      q: '$n$ is an integer with $-6 \\le n < 1$. What is the largest possible value of $5n + 12$?',
      choices: ['$17$', '$7$', '$12$', '$-18$'],
      answer: 2,
      solution:
        'The coefficient of $n$ is positive, so the LARGEST allowed $n$ gives the largest value. The strict $n < 1$ rules out $1$, and the next integer down is $0$, so $n = 0$ gives $5(0) + 12 = 12$. Check forward: $n = 0$ satisfies $-6 \\le 0 < 1$ ✓ and gives $12$, while $n = -1$ gives $7$, which is smaller ✓. (The choice $17$ uses $n = 1$, which the strict $<$ excludes; the choice $7$ uses $n = -1$, skipping over $0$ as though it were not an integer; the choice $-18$ uses $n = -6$, which gives the smallest value.)',
    },
    {
      q: '$x$ is an integer with $2 \\le x < 9$. What is the difference between the largest and the smallest possible values of $40 - 3x$?',
      choices: ['$21$', '$18$', '$16$', '$34$'],
      answer: 1,
      solution:
        'The coefficient is negative, so the smallest $x$ gives the largest value and the largest $x$ gives the smallest value. The smallest allowed integer is $x = 2$: $40 - 6 = 34$. The largest allowed integer is $x = 8$, since the strict $x < 9$ rules out $9$: $40 - 24 = 16$. The difference is $34 - 16 = 18$. Check forward: $x = 8$ is allowed ✓ and $x = 9$ is not ✓. (The choice $21$ uses the excluded $x = 9$ for the smallest value, $40 - 27 = 13$; the choice $16$ reports the smallest value alone; the choice $34$ reports the largest value alone.)',
    },
  ],
  // c10 — substitute points into a two-variable inequality. Every set includes
  // a point exactly ON the boundary, which only an "or equal" symbol admits.
  [
    {
      q: 'Which of these points does NOT satisfy $y \\le 3x + 1$?',
      choices: ['$(0, 0)$', '$(2, 7)$', '$(-1, -4)$', '$(1, 5)$'],
      answer: 3,
      solution:
        'Substitute each point. $(1, 5)$: $3(1) + 1 = 4$, and $5 \\le 4$ is false — this is the one that fails ✓. The other three all work: $(0, 0)$ gives $0 \\le 1$ ✓; $(2, 7)$ gives $3(2) + 1 = 7$ and $7 \\le 7$ ✓, which counts only because $\\le$ admits points ON the boundary line; $(-1, -4)$ gives $3(-1) + 1 = -2$ and $-4 \\le -2$ ✓, since $-4$ sits to the LEFT of $-2$ on the number line. (A student who reads $\\le$ as strict picks $(2, 7)$; a student who mishandles the negatives picks $(-1, -4)$; and a student who reads the symbol backwards, hunting for a point that fails $y \\ge 3x + 1$, stops at the very first choice, $(0, 0)$, since $0 \\ge 1$ is false.)',
    },
    {
      q: 'Which of these points DOES satisfy $y < -2x + 4$?',
      choices: ['$(3, -3)$', '$(1, 3)$', '$(0, 4)$', '$(2, 1)$'],
      answer: 0,
      solution:
        'Substitute each point. $(3, -3)$: $-2(3) + 4 = -2$, and $-3 < -2$ ✓ — a genuine solution, because $-3$ lies to the left of $-2$. The others all fail: $(1, 3)$ gives $-2 + 4 = 2$ and $3 < 2$ is false; $(0, 4)$ gives $4 < 4$, false because the point sits exactly ON the boundary and the symbol is strict; $(2, 1)$ gives $-4 + 4 = 0$ and $1 < 0$ is false. (The choice $(1, 3)$ tempts anyone who drops the minus on the $-2x$; the choice $(0, 4)$ tempts anyone who reads $<$ as $\\le$; the choice $(2, 1)$ is the near miss, just one unit above the boundary.)',
    },
    {
      q: 'Three of these points satisfy $y \\ge x - 5$. Which one does not?',
      choices: ['$(0, -2)$', '$(4, -1)$', '$(6, 0)$', '$(-3, -6)$'],
      answer: 2,
      solution:
        'Substitute each point. $(6, 0)$: $6 - 5 = 1$, and $0 \\ge 1$ is false — this is the odd one out ✓. The other three all work: $(0, -2)$ gives $-2 \\ge -5$ ✓; $(4, -1)$ gives $4 - 5 = -1$ and $-1 \\ge -1$ ✓, which counts only because $\\ge$ includes the boundary; $(-3, -6)$ gives $-3 - 5 = -8$ and $-6 \\ge -8$ ✓. (The choice $(4, -1)$ is what a student picks who reads $\\ge$ as strict; the choice $(-3, -6)$ tempts anyone who ranks $-6$ above $-8$ by digit size; the choice $(0, -2)$ tempts anyone who computes $x - 5$ as $5 - x$.)',
    },
  ],
  // c11 — "at least" or "at most" applied to an average: convert the target
  // average into a TOTAL first, then subtract what is already banked.
  [
    {
      q: 'Devi scored $88$, $76$, and $94$ on her first three quizzes. One quiz is left. What must she score so that her four-quiz average is at least $85$?',
      choices: ['At least $85$', 'At least $82$', 'At least $92$', 'At least $94$'],
      answer: 1,
      solution:
        'An average of at least $85$ over four quizzes means a TOTAL of at least $4 \\times 85 = 340$. She already has $88 + 76 + 94 = 258$, so she needs $x \\ge 340 - 258 = 82$. Check the endpoint forward: $\\frac{258 + 82}{4} = \\frac{340}{4} = 85 \\ge 85$ ✓. Check just below with $81$: $\\frac{339}{4} = 84.75$, not enough ✓. (Another way to see it: $88$ is $3$ above target, $76$ is $9$ below, and $94$ is $9$ above, a net surplus of $3$, so she may come in $3$ under. The choice $85$ assumes the last quiz simply has to hit the target; the choice $92$ comes from adding the first three as $248$; the choice $94$ makes up the $9$ points lost on the $76$ while ignoring the $9$ points banked on the $94$.)',
    },
    {
      q: 'A club plans its five-week supply spending to average at most $\\$40$ per week. In the first four weeks it spent $\\$52$, $\\$31$, $\\$44$, and $\\$38$. What is the most it can spend in week five?',
      choices: ['$\\$40$', '$\\$45$', '$\\$28$', '$\\$35$'],
      answer: 3,
      solution:
        '"Average at most $\\$40$" over five weeks means a total of at most $5 \\times 40 = \\$200$. The first four weeks used $52 + 31 + 44 + 38 = \\$165$, so week five satisfies $x \\le 200 - 165 = 35$. Check the endpoint forward: $\\frac{165 + 35}{5} = \\frac{200}{5} = 40 \\le 40$ ✓. Check just above with $\\$36$: $\\frac{201}{5} = 40.2$, over budget ✓. (The choice $\\$40$ copies the target average as if it were a weekly cap; the choice $\\$45$ adds the first four weeks as $\\$155$; the choice $\\$28$ subtracts only week one\'s $\\$12$ overspend from the target and ignores the savings in weeks two and four.)',
    },
    {
      q: 'Over four games Yuki averaged $78$ points. Two games remain. What must she average in those two games so that her six-game average is at least $80$?',
      choices: ['At least $84$', 'At least $80$', 'At least $88$', 'At least $168$'],
      answer: 0,
      solution:
        'Six games averaging at least $80$ need a total of at least $6 \\times 80 = 480$ points. Four games at $78$ have banked $4 \\times 78 = 312$, so the last two games must total at least $480 - 312 = 168$, which is an average of at least $\\frac{168}{2} = 84$. Check the endpoint forward: $\\frac{312 + 168}{6} = \\frac{480}{6} = 80 \\ge 80$ ✓. Check just below with an average of $83$: the two games total $166$, giving $\\frac{478}{6} \\approx 79.7$, not enough ✓. (The choice $80$ assumes the remaining games only have to hit the target; the choice $88$ dumps the whole $8$-point shortfall — $4$ games $\\times$ $2$ points — onto a single game instead of splitting it between two; the choice $168$ reports the TOTAL the two games need rather than their average.)',
    },
  ],
  // c12 — adding (or subtracting) the same amount from top and bottom drags a
  // positive fraction toward 1. Which way that moves it depends on which side
  // of 1 the fraction started on — that is the whole difficulty.
  [
    {
      q: 'Suppose $0 < b < a$. Which is greater, $\\frac{a}{b}$ or $\\frac{a+5}{b+5}$?',
      choices: [
        '$\\frac{a}{b}$ is greater',
        '$\\frac{a+5}{b+5}$ is greater',
        'They are equal',
        'It depends on the sizes of $a$ and $b$',
      ],
      answer: 0,
      solution:
        'Every quantity here is positive, so cross-multiplying is legal: compare $a(b+5) = ab + 5a$ with $b(a+5) = ab + 5b$. Since $b < a$, we have $5b < 5a$, so $a(b+5) > b(a+5)$ and therefore $\\frac{a}{b} > \\frac{a+5}{b+5}$. Check forward with $a = 9$, $b = 3$: $\\frac{9}{3} = 3$ against $\\frac{14}{8} = 1.75$ ✓. Check again with $a = 4$, $b = 1$: $4$ against $\\frac{9}{6} = 1.5$ ✓. (Here $\\frac{a}{b}$ starts ABOVE $1$, and adding the same amount to top and bottom always drags a fraction toward $1$ — coming down from above, that makes it smaller. The choice $\\frac{a+5}{b+5}$ applies the below-$1$ rule to a fraction that is above $1$; "they are equal" would need $5a = 5b$; and the last choice is what the two checks rule out, since only the ORDER of $a$ and $b$ matters, not their sizes.)',
    },
    {
      q: 'Let $m$ and $n$ be whole numbers with $1 < m < n$. Which is greater, $\\frac{m}{n}$ or $\\frac{m-1}{n-1}$?',
      choices: [
        '$\\frac{m-1}{n-1}$ is greater',
        'They are equal',
        '$\\frac{m}{n}$ is greater',
        'It depends on the sizes of $m$ and $n$',
      ],
      answer: 2,
      solution:
        'Because $n > m > 1$, both denominators are positive and cross-multiplying is legal: compare $m(n-1) = mn - m$ with $n(m-1) = mn - n$. Since $m < n$, subtracting $m$ takes away LESS than subtracting $n$, so $mn - m > mn - n$ and therefore $\\frac{m}{n} > \\frac{m-1}{n-1}$. Check forward with $m = 3$, $n = 5$: $\\frac{3}{5} = 0.6$ against $\\frac{2}{4} = 0.5$ ✓. Check again with $m = 2$, $n = 9$: $\\frac{2}{9} \\approx 0.222$ against $\\frac{1}{8} = 0.125$ ✓. (Subtracting $1$ from top and bottom pushes a below-$1$ fraction AWAY from $1$, so it shrinks. The choice $\\frac{m-1}{n-1}$ reuses the rule for ADDING to both parts; "they are equal" would need $m = n$; and the last choice is what the two checks rule out.)',
    },
    {
      q: 'Suppose $0 < a < b$ and $k > 0$. Which statement is always true?',
      choices: [
        '$\\frac{a+k}{b+k} < \\frac{a}{b}$',
        '$\\frac{a+k}{b+k} > \\frac{a}{b}$',
        '$\\frac{a+k}{b+k} = \\frac{a}{b}$',
        '$\\frac{a+k}{b+k} > 1$',
      ],
      answer: 1,
      solution:
        'All four quantities are positive, so cross-multiply: compare $a(b+k) = ab + ak$ with $b(a+k) = ab + bk$. Since $a < b$ and $k > 0$, we get $ak < bk$, so $a(b+k) < b(a+k)$ and therefore $\\frac{a}{b} < \\frac{a+k}{b+k}$. Check forward with $a = 2$, $b = 5$, $k = 4$: $\\frac{2}{5} = 0.4$ against $\\frac{6}{9} \\approx 0.667$ ✓. Check again with $a = 1$, $b = 8$, $k = 1$: $0.125$ against $\\frac{2}{9} \\approx 0.222$ ✓. (The first choice has the inequality backwards — that is the rule for fractions ABOVE $1$; the third would need $ak = bk$, impossible with $a < b$ and $k > 0$; the fourth fails because $a + k < b + k$, so the new fraction is still below $1$ — in the first check it is $\\frac{6}{9}$, and $\\frac{6}{9} > 1$ is false.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 9,
  challenge,
}
