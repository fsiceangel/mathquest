// Introduction to Algebra chapter 9 — variations for sections 9.1 and 9.2. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD by testing values: one number INSIDE the claimed solution set and
//    one number OUTSIDE it. Comparisons are confirmed twice, once by the named
//    method (cross-multiply, common denominator, square both sides) and once by
//    a decimal estimate.
//  - Two named traps run through the whole file and are kept apart on purpose.
//    The FLIP trap: multiplying or dividing by a negative reverses the symbol,
//    and in a chain it reverses BOTH symbols. The ENDPOINT trap: a strict $<$
//    never turns into $\le$ on its own, and an "or equal" never quietly
//    disappears. No distractor mixes the two, so a student can tell which idea
//    went wrong.
//  - Every distractor is one named mistake, and inside any single item no two
//    choices describe the same number or the same solution set.
//  - Figures are coordinate-exact number lines that supply the HYPOTHESIS, not
//    the answer: the picture shows the interval the variable lives in, and the
//    student still has to transform it. Figure labels are plain text.

const s91 = [
  // p1 — order two integers and pick the symbol that makes the statement true
  [
    {
      q: 'Which symbol makes this statement true? $-9 \\;\\square\\; -4$',
      choices: ['$>$', '$<$', '$=$', '$\\ge$'],
      answer: 1,
      solution:
        'Walk the number line: $-9$ sits nine steps left of zero and $-4$ sits only four steps left, so $-9$ is farther left and therefore smaller. The true statement is $-9 < -4$. ✓ Check it forward with a thermometer: $-9$ degrees really is colder than $-4$ degrees. (The choice $>$ is the classic negative-number slip, ranking by how big the digits look instead of by position; $=$ would need the two numbers to be the same; $\\ge$ claims $-9$ is at least as large as $-4$, which fails for the same reason $>$ does.)',
    },
    {
      q: 'Which of these statements is TRUE?',
      choices: ['$-6 > -1$', '$-6 = -1$', '$-6 < -1$', '$-6 \\ge -1$'],
      answer: 2,
      solution:
        'Put both numbers on the line. Counting left from zero, $-6$ lands well before $-1$, so $-6$ is the smaller one: $-6 < -1$. ✓ Check it forward by adding $6$ to both sides — a safe move — which gives $0 < 5$, plainly true. (The choice $-6 > -1$ compares $6$ with $1$ and forgets the minus signs; $-6 = -1$ would need the two to be the same point; $-6 \\ge -1$ makes the same size mistake as $>$, just with equality allowed as well.)',
    },
    {
      q: 'Which symbol makes $-1 \\;\\square\\; -10$ a true statement?',
      choices: ['$<$', '$=$', '$\\le$', '$>$'],
      answer: 3,
      solution:
        'Among negative numbers, the one closer to zero is the larger one, and $-1$ is only one step from zero while $-10$ is ten steps away. So $-1 > -10$. ✓ Check it forward: adding $10$ to both sides gives $9 > 0$, which is true. (The choice $<$ ranks by digit size, which reverses the true order here; $=$ would need the numbers to coincide; $\\le$ makes the same reversal as $<$ while also allowing equality, so it is false twice over.)',
    },
  ],
  // p2 — read the meaning of a "or equal to" symbol, and write one from words
  [
    {
      q: 'What does $t \\le -2$ mean?',
      choices: [
        '$t$ can be $-2$ or any number less than $-2$',
        '$t$ must be less than $-2$, and $-2$ itself is not allowed',
        '$t$ can be $-2$ or any number greater than $-2$',
        '$t$ must be exactly $-2$',
      ],
      answer: 0,
      solution:
        'The symbol $\\le$ means "less than or equal to," so $t$ may sit right at $-2$ or anywhere to the left of it. ✓ Check it forward with three test values: $t = -2$ works (equality is allowed), $t = -7$ works (it is less), and $t = 0$ fails (it is greater). (The second choice throws away the little bar under the symbol, which is exactly what allows $t = -2$; the third choice reads the symbol backwards, shading the wrong side of $-2$; the fourth turns an inequality into an equation and keeps only one value.)',
    },
    {
      q: 'A ferry lets a passenger ride alone only if the passenger is at least $12$ years old. If $a$ is a passenger age in years, which inequality says this?',
      choices: ['$a < 12$', '$a > 12$', '$a \\ge 12$', '$a \\le 12$'],
      answer: 2,
      solution:
        'The phrase "at least $12$" means $12$ counts and anything older counts too, which is exactly $a \\ge 12$. ✓ Check it forward: a $12$-year-old satisfies $12 \\ge 12$ and may ride alone, while an $11$-year-old fails $11 \\ge 12$ and may not. (The choice $a > 12$ locks out the $12$-year-old, but "at least" always includes the number itself; $a < 12$ and $a \\le 12$ both point the wrong way and would let toddlers ride while turning teenagers away.)',
    },
    {
      q: 'Which number is NOT a solution of $n \\ge -3$?',
      choices: ['$-3$', '$0$', '$-2.5$', '$-4$'],
      answer: 3,
      solution:
        'Test each candidate against $n \\ge -3$. Is $-3 \\ge -3$? Yes, equality is allowed. Is $0 \\ge -3$? Yes. Is $-2.5 \\ge -3$? Yes, since $-2.5$ sits to the right of $-3$. Is $-4 \\ge -3$? No — $-4$ is farther left, so it is the odd one out. ✓ (The choice $-3$ tempts anyone who forgets that the bar under $\\ge$ lets the endpoint in; $0$ and $-2.5$ both lie to the right of $-3$ and are comfortably inside the solution set.)',
    },
  ],
  // p3 — a safe move on both sides keeps the direction, negating does not
  [
    {
      q: 'Given that $p > q$, which statement must be true?',
      choices: ['$p - 8 > q - 8$', '$p - 8 < q - 8$', '$p - 8 = q - 8$', '$-p > -q$'],
      answer: 0,
      solution:
        'Subtracting the same number from both sides slides both numbers the same distance left, so their order is untouched: $p - 8 > q - 8$. ✓ Check it forward with $p = 5$ and $q = 1$: the new pair is $-3$ and $-7$, and $-3 > -7$. (The second choice flips the symbol for a subtraction, but only NEGATIVE multipliers flip; the third would need $p = q$; the fourth is the FLIP trap — negating both sides reverses the direction, so the truth is $-p < -q$, as $-5 < -1$ shows.)',
    },
    {
      q: 'If $c < d$, which of these must also be true?',
      choices: ['$3c > 3d$', '$3c < 3d$', '$3c = 3d$', '$-3c < -3d$'],
      answer: 1,
      solution:
        'Multiplying both sides by the POSITIVE number $3$ stretches the line without turning it around, so the direction stays: $3c < 3d$. ✓ Check it forward with $c = -2$ and $d = 4$: the new pair is $-6$ and $12$, and $-6 < 12$. (The first choice flips the symbol even though $3$ is positive; the third would need $c = d$; the fourth is the FLIP trap with a negative multiplier — the correct version is $-3c > -3d$, and indeed $6 > -12$.)',
    },
    {
      q: 'Nina starts from $x < y$ and writes down the two new numbers $x - 5$ and $y - 5$. Which statement about her new pair is correct?',
      choices: [
        '$x - 5 > y - 5$',
        '$x - 5 = y - 5$',
        'It depends on the values of $x$ and $y$',
        '$x - 5 < y - 5$',
      ],
      answer: 3,
      solution:
        'Both numbers moved five steps left, so the gap between them never changed and neither did their order: $x - 5 < y - 5$. ✓ Check it forward with $x = 1$ and $y = 6$: the new pair is $-4$ and $1$, and $-4 < 1$. Try it again with $x = -10$ and $y = -2$: the new pair is $-15$ and $-7$, still in the same order. (The first choice flips the symbol for a subtraction, which only a negative multiplier can do; the second would need the two starting numbers to be equal; the third gives up too early — subtraction is a safe move for EVERY pair, which is why two different test pairs behaved the same way.)',
    },
  ],
  // p4 — perform one safe move on both sides and read off the result
  [
    {
      q: 'Add $9$ to both sides of $y > -4$. What do you get?',
      choices: ['$y + 9 > 5$', '$y + 9 > -4$', '$y + 9 < 5$', '$y + 9 > 13$'],
      answer: 0,
      solution:
        'Adding $9$ to both sides gives $y + 9 > -4 + 9$, and $-4 + 9 = 5$, so the result is $y + 9 > 5$. ✓ Check it forward with $y = 0$, which satisfies $y > -4$: then $y + 9 = 9$, and $9 > 5$. Check outside too, with $y = -6$: it fails $y > -4$, and $y + 9 = 3$ fails $3 > 5$ as well. (The choice $y + 9 > -4$ adds to the left side only, which unbalances the statement; $y + 9 < 5$ flips the symbol for an addition; $y + 9 > 13$ computes $4 + 9$ and loses the minus sign on the $-4$.)',
    },
    {
      q: 'Subtract $7$ from both sides of $w \\le -2$. What do you get?',
      choices: ['$w - 7 \\le 5$', '$w - 7 \\le -9$', '$w - 7 < -9$', '$w - 7 \\ge -9$'],
      answer: 1,
      solution:
        'Subtracting $7$ from both sides gives $w - 7 \\le -2 - 7$, and $-2 - 7 = -9$, so the result is $w - 7 \\le -9$. ✓ Check it forward with $w = -2$, the largest value allowed: then $w - 7 = -9$, and $-9 \\le -9$ holds, endpoint and all. Check outside with $w = 0$: it fails $w \\le -2$, and $-7 \\le -9$ is false too. (The choice $w - 7 \\le 5$ computes $-2 + 7$ and adds where it should subtract; $w - 7 < -9$ is the ENDPOINT trap, quietly dropping the "or equal" that was there from the start; $w - 7 \\ge -9$ flips the symbol for a subtraction.)',
    },
    {
      q: 'Which inequality is the result of adding $6$ to both sides of $-3 < k$?',
      choices: ['$9 < k + 6$', '$-3 < k + 6$', '$3 < k + 6$', '$3 > k + 6$'],
      answer: 2,
      solution:
        'Add $6$ to both sides: the left becomes $-3 + 6 = 3$ and the right becomes $k + 6$, so the result is $3 < k + 6$. ✓ Check it forward with $k = 0$, which satisfies $-3 < k$: then $k + 6 = 6$, and $3 < 6$. Check outside with $k = -5$: it fails $-3 < k$, and $3 < 1$ is false as well. (The choice $9 < k + 6$ computes $3 + 6$ and drops the minus sign; $-3 < k + 6$ adds to the right side only; $3 > k + 6$ flips the symbol even though addition never flips anything.)',
    },
  ],
  // p5 — multiply an inequality by -1 and flip
  [
    {
      q: 'Suppose $y < -6$. Which statement about $-y$ is correct?',
      choices: ['$-y < 6$', '$-y < -6$', '$-y > 6$', '$-y > -6$'],
      answer: 2,
      solution:
        'Multiplying both sides by $-1$ negates each side AND flips the symbol: $y < -6$ becomes $-y > 6$. ✓ Check it forward with $y = -10$, which satisfies $y < -6$: then $-y = 10$, and $10 > 6$. Check outside with $y = 0$: it fails $y < -6$, and $-y = 0$ fails $0 > 6$ too. (The choice $-y < 6$ negates both sides but forgets to flip; $-y < -6$ negates the left side only, leaving the right untouched; $-y > -6$ flips the symbol but forgets to negate the $-6$.)',
    },
    {
      q: 'If $-t > 5$, what must be true of $t$ itself?',
      choices: ['$t > -5$', '$t < -5$', '$t > 5$', '$t < 5$'],
      answer: 1,
      solution:
        'Multiply both sides by $-1$, negating each side and flipping the symbol: $-t > 5$ becomes $t < -5$. ✓ Check it forward with $t = -6$: then $-t = 6$, and $6 > 5$ holds, while $-6 < -5$ holds too. Check outside with $t = 0$: $-t = 0$ fails $0 > 5$, and $0 < -5$ is false as well — the two statements agree on both tests. (The choice $t > -5$ negates without flipping; $t > 5$ flips nothing and negates nothing, just erasing the minus sign; $t < 5$ flips the symbol but forgets that the $5$ becomes $-5$.)',
    },
    {
      q: 'The number line below shows every value $a$ is allowed to take. Which of these must be true?',
      fig: {
        view: [-2, -1.5, 10, 1.5],
        elems: [
          { t: 'seg', a: [-2, 0], b: [10, 0] },
          { t: 'seg', a: [4, 0], b: [10, 0], hl: true },
          { t: 'point', p: [4, 0], label: '4' },
        ],
      },
      choices: ['$-a \\ge -4$', '$-a \\le 4$', '$-a \\ge 4$', '$-a \\le -4$'],
      answer: 3,
      solution:
        'Read the picture first: the dot at $4$ is filled, so $4$ itself counts, and the shading runs right, so the graph says $a \\ge 4$. Now multiply by $-1$, negating both sides and flipping the symbol: $-a \\le -4$. ✓ Check it forward with $a = 7$, which the graph allows: then $-a = -7$, and $-7 \\le -4$. Check outside with $a = 1$, which the graph excludes: $-a = -1$, and $-1 \\le -4$ is false, exactly as it should be. (The choice $-a \\ge -4$ negates without flipping; $-a \\le 4$ flips but forgets to negate the $4$; $-a \\ge 4$ does neither and simply hangs a minus sign on $a$.)',
    },
  ],
  // p6 — divide by a negative coefficient, flip the symbol
  [
    {
      q: 'Solve $-6x < 42$.',
      choices: ['$x < -7$', '$x > 7$', '$x < 7$', '$x > -7$'],
      answer: 3,
      solution:
        'Divide both sides by $-6$. Dividing by a negative flips the symbol, and $\\frac{42}{-6} = -7$, so the solution is $x > -7$. ✓ Check it forward with $x = 0$: it satisfies $x > -7$, and $-6(0) = 0 < 42$. Check outside with $x = -8$: it fails $x > -7$, and $-6(-8) = 48$, which is not less than $42$. (The choice $x < -7$ is the FLIP trap, dividing by a negative and leaving the symbol alone; $x > 7$ and $x < 7$ both lose the minus sign in $\\frac{42}{-6}$, landing on the wrong endpoint entirely.)',
    },
    {
      q: 'Solve $-5x \\ge -35$.',
      choices: ['$x \\le 7$', '$x \\ge 7$', '$x \\le -7$', '$x \\ge -7$'],
      answer: 0,
      solution:
        'Divide both sides by $-5$ and flip: $\\frac{-35}{-5} = 7$, so the solution is $x \\le 7$. ✓ Check the endpoint, since $\\ge$ allows it: $x = 7$ gives $-35 \\ge -35$, true. Check inside with $x = 0$: $0 \\ge -35$, true. Check outside with $x = 8$: $-40 \\ge -35$ is false. (The choice $x \\ge 7$ is the FLIP trap; $x \\le -7$ divides two negatives and still writes a negative answer; $x \\ge -7$ makes both mistakes at once.)',
    },
    {
      q: 'Solve $-3x > -12$.',
      choices: ['$x > 4$', '$x > -4$', '$x < 4$', '$x < -4$'],
      answer: 2,
      solution:
        'Divide both sides by $-3$ and flip the symbol: $\\frac{-12}{-3} = 4$, so the solution is $x < 4$. ✓ Check it forward with $x = 0$: it satisfies $x < 4$, and $-3(0) = 0 > -12$. Check outside with $x = 5$: it fails $x < 4$, and $-3(5) = -15$, which is not greater than $-12$. (The choice $x > 4$ forgets the flip; $x < -4$ divides two negatives yet keeps a minus on the answer; $x > -4$ makes both mistakes together.)',
    },
  ],
  // p7 — divide by a positive coefficient; no flip, and the endpoint survives
  [
    {
      q: 'Solve $3x \\ge -21$.',
      choices: ['$x \\le -7$', '$x \\ge -7$', '$x > -7$', '$x \\ge -63$'],
      answer: 1,
      solution:
        'Divide both sides by the POSITIVE number $3$: $\\frac{-21}{3} = -7$, so $x \\ge -7$. No flip — only negative multipliers flip. ✓ Check the endpoint: $x = -7$ gives $3(-7) = -21 \\ge -21$, true, so the "or equal" belongs. Check outside with $x = -8$: $-24 \\ge -21$ is false. (The choice $x \\le -7$ flips for a positive divisor; $x > -7$ is the ENDPOINT trap, throwing away the equality that $\\ge$ guarantees; $x \\ge -63$ multiplies by $3$ where it should divide.)',
    },
    {
      q: 'Solve $\\frac{x}{4} < 6$.',
      choices: ['$x < \\frac{3}{2}$', '$x > 24$', '$x \\le 24$', '$x < 24$'],
      answer: 3,
      solution:
        'To undo a division by $4$, multiply both sides by $4$: $x < 24$. The multiplier is positive, so nothing flips. ✓ Check it forward with $x = 20$: $\\frac{20}{4} = 5$, and $5 < 6$. Check the endpoint, which should FAIL: $x = 24$ gives $\\frac{24}{4} = 6$, and $6 < 6$ is false, so $24$ is correctly left out. (The choice $x < \\frac{3}{2}$ divides $6$ by $4$ instead of multiplying; $x > 24$ flips for no reason; $x \\le 24$ is the ENDPOINT trap, letting $24$ sneak into a strict inequality.)',
    },
    {
      q: 'Solve $8x \\le -32$.',
      choices: ['$x \\le -4$', '$x \\ge -4$', '$x \\le 4$', '$x < -4$'],
      answer: 0,
      solution:
        'Divide both sides by the positive number $8$: $\\frac{-32}{8} = -4$, so $x \\le -4$. The coefficient is positive, so the symbol stays put even though the other side is negative. ✓ Check the endpoint: $x = -4$ gives $8(-4) = -32 \\le -32$, true. Check outside with $x = -3$: $-24 \\le -32$ is false. (The choice $x \\ge -4$ flips because it sees a minus sign somewhere, but only a negative DIVISOR flips; $x \\le 4$ loses the minus on $-32$; $x < -4$ is the ENDPOINT trap, dropping an equality the problem gave us.)',
    },
  ],
  // p8 — chaining two inequalities together (transitivity)
  [
    {
      q: 'Suppose $r > s$ and $s > t$. What must be true about $r$ and $t$?',
      choices: ['$r < t$', '$r = t$', '$r > t$', 'There is not enough information'],
      answer: 2,
      solution:
        'Read it as a chain: $r$ sits to the right of $s$, and $s$ sits to the right of $t$, so $r$ must sit to the right of $t$. That is $r > t$. ✓ Check it forward with $r = 9$, $s = 4$, $t = -1$: indeed $9 > -1$. (The choice $r < t$ reverses the chain; $r = t$ would need the chain to double back on itself, which it cannot; the last choice gives up, but transitivity settles this for every trio of numbers.)',
    },
    {
      q: 'A jar of honey is heavier than a jar of jam, and the jar of jam is heavier than a jar of mustard. Which statement must be true?',
      choices: [
        'The honey is heavier than the mustard',
        'The mustard is heavier than the honey',
        'The honey and the mustard weigh the same',
        'The order cannot be decided',
      ],
      answer: 0,
      solution:
        'Line the weights up: honey beats jam, and jam beats mustard, so honey beats mustard. In symbols, $h > j$ and $j > m$ give $h > m$. ✓ Check it forward with sample weights $h = 700$, $j = 500$, $m = 300$ grams: $700 > 300$. (The second choice reverses the chain; the third would need honey and mustard to tie, which cannot happen when a heavier jar of jam sits strictly between them; the fourth gives up, but chaining decides it every time.)',
    },
    {
      q: 'If $x \\le y$ and $y \\le z$, which of these must be true?',
      choices: ['$x > z$', '$x \\le z$', '$x < z$', '$x \\ge z$'],
      answer: 1,
      solution:
        'Chaining works for $\\le$ too, and the "or equal" travels with it: $x \\le y \\le z$ gives $x \\le z$. ✓ Check it forward two ways. With $x = 1$, $y = 4$, $z = 9$ we get $1 \\le 9$. With $x = y = z = 5$ we get $5 \\le 5$, still true. (The choice $x < z$ is the ENDPOINT trap — that second test, where all three are equal, satisfies the hypothesis but makes $x < z$ false, so strictness is not guaranteed; $x > z$ and $x \\ge z$ both point the wrong way, as the first test shows.)',
    },
  ],
  // p9 — carry a whole chain through a negative multiplier
  [
    {
      q: 'If $-4 < x < 1$, what can you say about $-3x$?',
      choices: [
        '$-12 < -3x < 3$',
        '$3 < -3x < 12$',
        '$-3 \\le -3x \\le 12$',
        '$-3 < -3x < 12$',
      ],
      answer: 3,
      solution:
        'Multiply every part of the chain by $-3$ and flip BOTH symbols: $-4 < x < 1$ becomes $12 > -3x > -3$, which reads left to right as $-3 < -3x < 12$. ✓ Check it forward with $x = 0$: then $-3x = 0$, and $-3 < 0 < 12$. Check near the ends with $x = -3.9$: then $-3x = 11.7$, still under $12$. And $x = -4$ itself is excluded, which is why $12$ stays out. (The first choice multiplies by $+3$ and never flips, so both bounds land on the wrong side; the second gets the sizes right but writes the lower bound as $3$ instead of $-3$; the third has the right numbers but is the ENDPOINT trap — no endpoint was ever included, so the symbols must stay strict.)',
    },
    {
      q: 'The number line below shows all the values $x$ can take. What can you say about $-\\frac{x}{2}$?',
      fig: {
        view: [-2, -1.5, 10, 1.5],
        elems: [
          { t: 'seg', a: [-2, 0], b: [10, 0] },
          { t: 'seg', a: [2, 0], b: [6, 0], hl: true },
          { t: 'point', p: [2, 0], label: '2', open: true },
          { t: 'point', p: [6, 0], label: '6', open: true },
        ],
      },
      choices: [
        '$1 < -\\frac{x}{2} < 3$',
        '$-3 \\le -\\frac{x}{2} \\le -1$',
        '$-3 < -\\frac{x}{2} < -1$',
        '$-12 < -\\frac{x}{2} < -4$',
      ],
      answer: 2,
      solution:
        'Both circles are hollow, so the graph says $2 < x < 6$ with neither endpoint included. Multiply every part by $-\\frac{1}{2}$ and flip both symbols: $-1 > -\\frac{x}{2} > -3$, which reads left to right as $-3 < -\\frac{x}{2} < -1$. ✓ Check it forward with $x = 4$: then $-\\frac{x}{2} = -2$, and $-3 < -2 < -1$. Check an endpoint: $x = 6$ would give $-3$, and $6$ is excluded, so $-3$ is correctly excluded too. (The first choice drops the minus signs on both bounds; the second has the right numbers but is the ENDPOINT trap, since open circles must stay strict; the fourth multiplies by $-2$ instead of dividing by $2$.)',
    },
    {
      q: 'If $-2 < x < 4$, what can you say about $3 - x$?',
      choices: [
        '$1 < 3 - x < 7$',
        '$-1 < 3 - x < 5$',
        '$-4 < 3 - x < 2$',
        '$-1 \\le 3 - x \\le 5$',
      ],
      answer: 1,
      solution:
        'Take it in two steps. First multiply the chain by $-1$ and flip both symbols: $-2 < x < 4$ becomes $-4 < -x < 2$. Now add $3$ to every part, which is a safe move: $-1 < 3 - x < 5$. ✓ Check it forward with $x = 0$: then $3 - x = 3$, and $-1 < 3 < 5$. Check near an end with $x = 3.9$: then $3 - x = -0.9$, which is still above $-1$. (The first choice adds $3$ to the original bounds without ever flipping the sign of $x$; the third flips correctly but forgets to add the $3$; the fourth has the right numbers but is the ENDPOINT trap, since the original chain was strict at both ends.)',
    },
  ],
  // p10 — spot the move that is NOT safe for every pair of numbers
  [
    {
      q: 'Suppose $p < q$. Which of these statements can fail?',
      choices: [
        '$p - 6 < q - 6$',
        '$\\frac{p}{4} < \\frac{q}{4}$',
        '$\\frac{1}{p} > \\frac{1}{q}$',
        '$p + 9 < q + 9$',
      ],
      answer: 2,
      solution:
        'Flipping two numbers upside down is safe only while both have the same sign. Try $p = -2$ and $q = 1$: certainly $-2 < 1$, but $\\frac{1}{p} = -\\frac{1}{2}$ and $\\frac{1}{q} = 1$, and $-\\frac{1}{2} > 1$ is false. ✓ So that statement can fail. (The other three are safe moves for every pair: subtracting $6$ and adding $9$ slide both numbers equally, and dividing by the positive number $4$ shrinks them without turning them around. The reciprocal rule looks reliable because it does hold for positives — $2 < 3$ gives $\\frac{1}{2} > \\frac{1}{3}$ — which is exactly why the negative case catches people out.)',
    },
    {
      q: 'Given $u < v$, which of these does NOT have to be true?',
      choices: [
        '$u + 11 < v + 11$',
        '$\\frac{u}{5} < \\frac{v}{5}$',
        '$u - 11 < v - 11$',
        '$uc < vc$ for every number $c$',
      ],
      answer: 3,
      solution:
        'The claim about $uc$ and $vc$ says nothing about the sign of $c$, and a negative $c$ flips the direction. Try $u = 1$, $v = 4$, and $c = -1$: then $uc = -1$ and $vc = -4$, and $-1 < -4$ is false. ✓ So that statement fails. (Adding $11$ and subtracting $11$ move both numbers the same distance, so they are always safe; dividing by the positive number $5$ is safe as well. Only the multiplier of unknown sign can turn the inequality around — that is the FLIP rule hiding inside an innocent-looking sentence.)',
    },
    {
      q: 'If $g < h$, which of these is ALWAYS true?',
      choices: [
        '$h - g > 0$',
        '$g^2 < h^2$',
        '$-4g < -4h$',
        '$\\frac{g}{2} > \\frac{h}{2}$',
      ],
      answer: 0,
      solution:
        'Subtract $g$ from both sides of $g < h$ — a safe move — to get $0 < h - g$, that is, $h - g > 0$. A difference is positive exactly when the second number is the bigger one, so this holds for every pair. ✓ Check it forward twice: $g = 2$, $h = 9$ gives $7 > 0$, and $g = -8$, $h = -3$ gives $5 > 0$. (The choice $g^2 < h^2$ fails for $g = -5$, $h = 1$, since $25 > 1$ — squaring scrambles order once negatives appear; $-4g < -4h$ forgets the FLIP rule, and the truth is $-4g > -4h$; $\\frac{g}{2} > \\frac{h}{2}$ flips for a positive divisor, which never happens.)',
    },
  ],
]

const s92 = [
  // p1 — compare two fractions by cross-multiplying
  [
    {
      q: 'Which is greater, $\\frac{5}{7}$ or $\\frac{7}{10}$?',
      choices: ['$\\frac{7}{10}$', 'They are equal', 'Neither — they cannot be compared', '$\\frac{5}{7}$'],
      answer: 3,
      solution:
        'Both denominators are positive, so cross-multiply: $5 \\times 10 = 50$ against $7 \\times 7 = 49$. The larger product, $50$, was built from the numerator of $\\frac{5}{7}$, so $\\frac{5}{7} > \\frac{7}{10}$. ✓ Check it forward in decimals: $\\frac{5}{7} \\approx 0.714$ and $\\frac{7}{10} = 0.7$. (The choice $\\frac{7}{10}$ is what you get by matching each product with the wrong fraction; "they are equal" would need $50 = 49$; the last choice forgets that cross-multiplying compares any two fractions with positive denominators.)',
    },
    {
      q: 'Which is greater, $\\frac{3}{8}$ or $\\frac{4}{11}$?',
      choices: ['$\\frac{4}{11}$', '$\\frac{3}{8}$', 'They are equal', 'It depends on how you round them'],
      answer: 1,
      solution:
        'Cross-multiply: $3 \\times 11 = 33$ against $8 \\times 4 = 32$. The bigger product came from the numerator of $\\frac{3}{8}$, so $\\frac{3}{8} > \\frac{4}{11}$. ✓ Check it forward in decimals: $\\frac{3}{8} = 0.375$ and $\\frac{4}{11} \\approx 0.364$. (The choice $\\frac{4}{11}$ pairs each product with the wrong fraction; "they are equal" would need $33 = 32$; the last choice blames rounding, but the exact products settle it with no rounding at all.)',
    },
    {
      q: 'Which is SMALLER, $\\frac{8}{15}$ or $\\frac{7}{13}$?',
      choices: ['$\\frac{8}{15}$', '$\\frac{7}{13}$', 'They are equal', 'Cross-multiplication does not settle it'],
      answer: 0,
      solution:
        'Cross-multiply: $8 \\times 13 = 104$ against $15 \\times 7 = 105$. The smaller product, $104$, belongs to $\\frac{8}{15}$, so $\\frac{8}{15} < \\frac{7}{13}$ and $\\frac{8}{15}$ is the smaller fraction. ✓ Check it forward in decimals: $\\frac{8}{15} \\approx 0.533$ and $\\frac{7}{13} \\approx 0.538$. (The choice $\\frac{7}{13}$ answers the "which is GREATER" question by mistake; "they are equal" would need $104 = 105$; the last choice doubts the method, but both denominators are positive, so it applies perfectly.)',
    },
  ],
  // p2 — the sign of a difference decides which number is bigger
  [
    {
      q: 'Two numbers satisfy $m - n = -1.7$. Which is greater?',
      choices: ['$m$', '$n$', 'They are equal', 'It depends on the signs of $m$ and $n$'],
      answer: 1,
      solution:
        'The difference $m - n$ came out NEGATIVE, and a negative difference means the first number fell short of the second: $m < n$, so $n$ is greater. ✓ Check it forward with a sample pair: $m = 3$ and $n = 4.7$ give $m - n = -1.7$, and $4.7$ really is the bigger one. (The choice $m$ reads a negative difference as if it were positive; "they are equal" would need the difference to be $0$; the last choice worries about the signs of $m$ and $n$, but only the sign of the DIFFERENCE matters — try $m = -10$, $n = -8.3$ and the answer is the same.)',
    },
    {
      q: 'For two numbers $p$ and $q$, the difference $q - p$ turns out to be a positive number. Which statement is correct?',
      choices: ['$p > q$', '$p = q$', '$q > p$', 'There is not enough information'],
      answer: 2,
      solution:
        'A positive difference means the number written FIRST in the subtraction is the bigger one, and here that number is $q$: $q > p$. ✓ Check it forward with $q = 5$ and $p = 2$: the difference $5 - 2 = 3$ is positive, and $5 > 2$. (The choice $p > q$ reads the subtraction backwards; $p = q$ would force the difference to be $0$, not positive; the last choice gives up, but the sign of the difference tells the whole story for every pair of numbers.)',
    },
    {
      q: 'Rosa knows that $h > k$. What can she say about the number $h - k$?',
      choices: ['It is positive', 'It is negative', 'It is zero', 'It could be any of the three'],
      answer: 0,
      solution:
        'Subtract $k$ from both sides of $h > k$ — a safe move — to get $h - k > 0$, so the difference is positive. ✓ Check it forward twice: $h = 6$, $k = 1$ gives $5$, and $h = -2$, $k = -9$ gives $7$. Both positive, even though the second pair is all negatives. (Negative would mean $h < k$; zero would mean $h = k$; the last choice hedges, but those two tests show the rule does not care whether the numbers themselves are positive or negative.)',
    },
  ],
  // p3 — compare two fractions with a common denominator
  [
    {
      q: 'Which is greater, $\\frac{7}{10}$ or $\\frac{11}{15}$?',
      choices: ['$\\frac{7}{10}$', '$\\frac{11}{15}$', 'They are equal', 'They cannot be compared'],
      answer: 1,
      solution:
        'Use the common denominator $30$: $\\frac{7}{10} = \\frac{21}{30}$ and $\\frac{11}{15} = \\frac{22}{30}$. Since $22 > 21$, we get $\\frac{11}{15} > \\frac{7}{10}$. ✓ Check it forward by cross-multiplying: $7 \\times 15 = 105$ and $10 \\times 11 = 110$, and $110$ is bigger. (The choice $\\frac{7}{10}$ picks the fraction with the smaller numerator once both are rewritten; "they are equal" would need $21 = 22$; the last choice forgets that any two fractions share a common denominator.)',
    },
    {
      q: 'Which is greater, $\\frac{5}{12}$ or $\\frac{3}{8}$?',
      choices: ['$\\frac{3}{8}$', 'They are equal', 'Neither, since the denominators are different', '$\\frac{5}{12}$'],
      answer: 3,
      solution:
        'The smallest common denominator is $24$: $\\frac{5}{12} = \\frac{10}{24}$ and $\\frac{3}{8} = \\frac{9}{24}$. Since $10 > 9$, we get $\\frac{5}{12} > \\frac{3}{8}$. ✓ Check it forward in decimals: $\\frac{5}{12} \\approx 0.417$ and $\\frac{3}{8} = 0.375$. (The choice $\\frac{3}{8}$ is tempting because $8$ is the smaller denominator, but a smaller denominator only wins when the numerators match; "they are equal" would need $10 = 9$; the third choice treats different denominators as a dead end, when rewriting fixes it in one step.)',
    },
    {
      q: 'Rewritten over the common denominator $36$, one of $\\frac{3}{4}$ and $\\frac{7}{9}$ becomes $\\frac{27}{36}$ and the other becomes $\\frac{28}{36}$. Which of the two original fractions is greater?',
      choices: ['$\\frac{3}{4}$', 'They are equal', '$\\frac{7}{9}$', 'It cannot be told from the rewritten fractions'],
      answer: 2,
      solution:
        'Match each fraction to its rewrite: $\\frac{3}{4} = \\frac{3 \\times 9}{4 \\times 9} = \\frac{27}{36}$, so $\\frac{7}{9} = \\frac{28}{36}$. Same denominator means the bigger numerator wins, and $28 > 27$, so $\\frac{7}{9} > \\frac{3}{4}$. ✓ Check it forward in decimals: $\\frac{7}{9} \\approx 0.778$ and $\\frac{3}{4} = 0.75$. (The choice $\\frac{3}{4}$ hands the larger numerator to the wrong fraction; "they are equal" would need $27 = 28$; the last choice doubts the rewrite, but once two fractions share a denominator the comparison is finished.)',
    },
  ],
  // p4 — compare a square root with a whole number by squaring
  [
    {
      q: 'Which is greater, $\\sqrt{30}$ or $6$?',
      choices: ['$6$', '$\\sqrt{30}$', 'They are equal', 'A calculator is needed'],
      answer: 0,
      solution:
        'Both numbers are positive, so squaring keeps the comparison honest: $(\\sqrt{30})^2 = 30$ and $6^2 = 36$. Since $30 < 36$, we get $\\sqrt{30} < 6$, so $6$ is greater. ✓ Check it forward: $5.5^2 = 30.25$, so $\\sqrt{30}$ is a shade under $5.5$ — comfortably below $6$. (The choice $\\sqrt{30}$ compares $30$ with $6$ instead of with $36$; "they are equal" would need $30 = 36$; no calculator is needed, since squaring turns the question into $30$ against $36$.)',
    },
    {
      q: 'Which is greater, $\\sqrt{55}$ or $7$?',
      choices: ['$7$', 'They are equal', 'Only a calculator can decide', '$\\sqrt{55}$'],
      answer: 3,
      solution:
        'Square both positive numbers: $(\\sqrt{55})^2 = 55$ and $7^2 = 49$. Since $55 > 49$, we get $\\sqrt{55} > 7$. ✓ Check it forward: $7.4^2 = 54.76$, just under $55$, so $\\sqrt{55}$ is a little more than $7.4$. (The choice $7$ computes the two squares correctly but hands the win to the wrong side — the bigger square, $55$, belongs to $\\sqrt{55}$; "they are equal" would need $55 = 49$; squaring settles it by hand, so no calculator is required.)',
    },
    {
      q: 'Between which two consecutive whole numbers does $\\sqrt{68}$ lie?',
      choices: ['$7$ and $8$', '$34$ and $35$', '$8$ and $9$', '$9$ and $10$'],
      answer: 2,
      solution:
        'Hunt for the two perfect squares that trap $68$: $8^2 = 64$ and $9^2 = 81$, and $64 < 68 < 81$. Taking square roots of positive numbers preserves the order, so $8 < \\sqrt{68} < 9$. ✓ Check it forward: $8.2^2 = 67.24$ and $8.3^2 = 68.89$, so $\\sqrt{68}$ sits between $8.2$ and $8.3$ — squarely inside the interval from $8$ to $9$. (The choice $7$ and $8$ uses $49$ and $64$, one square too low; $9$ and $10$ uses $81$ and $100$, one square too high; $34$ and $35$ HALVES $68$ instead of taking its square root.)',
    },
  ],
  // p5 — read a conclusion off a completed cross-multiplication
  [
    {
      q: 'To compare $\\frac{6}{11}$ and $\\frac{7}{12}$, you cross-multiply and get $6 \\times 12 = 72$ and $11 \\times 7 = 77$. What is the conclusion?',
      choices: [
        '$\\frac{6}{11} < \\frac{7}{12}$',
        '$\\frac{6}{11} > \\frac{7}{12}$',
        '$\\frac{6}{11} = \\frac{7}{12}$',
        'Cross-multiplying is not allowed when the denominators differ',
      ],
      answer: 0,
      solution:
        'The product $72$ was built from the numerator of $\\frac{6}{11}$, and $77$ from the numerator of $\\frac{7}{12}$. Since $72 < 77$, the fraction that produced the smaller product is smaller: $\\frac{6}{11} < \\frac{7}{12}$. ✓ Check it forward in decimals: $\\frac{6}{11} \\approx 0.545$ and $\\frac{7}{12} \\approx 0.583$. (The second choice attaches each product to the wrong fraction; the third would need $72 = 77$; the fourth misstates the rule — different denominators are exactly the situation cross-multiplying is built for, as long as both are positive.)',
    },
    {
      q: 'To compare $\\frac{9}{14}$ and $\\frac{7}{11}$, you cross-multiply and get $9 \\times 11 = 99$ and $14 \\times 7 = 98$. Which fraction is greater?',
      choices: ['$\\frac{7}{11}$', 'They are equal', 'The products are too close to tell', '$\\frac{9}{14}$'],
      answer: 3,
      solution:
        'The product $99$ carries the numerator of $\\frac{9}{14}$, and $98$ carries the numerator of $\\frac{7}{11}$. Since $99 > 98$, we get $\\frac{9}{14} > \\frac{7}{11}$. ✓ Check it forward in decimals: $\\frac{9}{14} \\approx 0.643$ and $\\frac{7}{11} \\approx 0.636$. (The choice $\\frac{7}{11}$ matches each product with the wrong fraction; "they are equal" would need $99 = 98$; and a gap of $1$ is still a gap — whole numbers leave no room for a tie, so "too close to tell" is never the answer here.)',
    },
    {
      q: 'Cross-multiplying $\\frac{a}{b}$ and $\\frac{c}{d}$, where $b$ and $d$ are both positive, gives $ad = 84$ and $bc = 84$. What follows?',
      choices: [
        '$\\frac{a}{b} > \\frac{c}{d}$',
        '$\\frac{a}{b} = \\frac{c}{d}$',
        '$\\frac{a}{b} < \\frac{c}{d}$',
        'Nothing — equal products give no information',
      ],
      answer: 1,
      solution:
        'Cross-multiplying is really "multiply both sides by $bd$," which is a safe move because $bd$ is positive. Equal products therefore mean equal fractions: $\\frac{a}{b} = \\frac{c}{d}$. ✓ Check it forward with a pair that fits: $\\frac{6}{7}$ and $\\frac{12}{14}$ give $6 \\times 14 = 84$ and $7 \\times 12 = 84$, and those two fractions really are the same number. (The first and third choices claim a strict winner, but a strict winner needs one product to be strictly bigger; the last choice throws away good information — matching products are the definition of equivalent fractions.)',
    },
  ],
  // p6 — compare two powers by rewriting them with a common exponent
  [
    {
      q: 'Which is greater, $2^{40}$ or $5^{20}$?',
      choices: ['$2^{40}$', 'They are equal', '$5^{20}$', 'Too large to compare without computing both'],
      answer: 2,
      solution:
        'Give both powers the SAME exponent. Since $40 = 2 \\times 20$, write $2^{40} = (2^2)^{20} = 4^{20}$, while $5^{20}$ already has exponent $20$. Twenty factors of $5$ beat twenty factors of $4$, so $5^{20} > 2^{40}$. ✓ Check it forward on a small version of the same idea: $2^4 = 16$ and $5^2 = 25$, and $25 > 16$. (The choice $2^{40}$ is tempting because $40$ is the bigger exponent, but the base matters just as much; "they are equal" would need $4 = 5$; and nothing here needs computing — matching the exponents does all the work.)',
    },
    {
      q: 'Which is greater, $9^{15}$ or $27^{10}$?',
      choices: ['$9^{15}$', 'They are equal', '$27^{10}$', 'It cannot be decided'],
      answer: 1,
      solution:
        'Both bases are powers of $3$, so rewrite them that way: $9^{15} = (3^2)^{15} = 3^{30}$ and $27^{10} = (3^3)^{10} = 3^{30}$. Same base, same exponent — the two numbers are identical. ✓ Check it forward on a small version: $9^3 = 729$ and $27^2 = 729$. (The choice $9^{15}$ trusts the bigger exponent and the choice $27^{10}$ trusts the bigger base, but neither one alone decides anything; "it cannot be decided" gives up just as the common base $3$ was about to settle it.)',
    },
    {
      q: 'Which is greater, $3^{24}$ or $9^{11}$?',
      choices: ['$3^{24}$', '$9^{11}$', 'They are equal', 'Only a calculator can decide'],
      answer: 0,
      solution:
        'Rewrite the second power with base $3$: $9^{11} = (3^2)^{11} = 3^{22}$. Now both have base $3$, and $24 > 22$, so $3^{24} > 9^{11}$. ✓ Check it forward: $3^{24}$ is exactly $3^2 = 9$ times $3^{22}$, so it is nine times as big. (The choice $9^{11}$ trusts the larger base; "they are equal" would need the exponents to match after the rewrite, and $24 \\ne 22$; a calculator is unnecessary once both powers wear the same base.)',
    },
  ],
  // p7 — compare a multiple of a square root with a whole number
  [
    {
      q: 'Which is greater, $4\\sqrt{5}$ or $9$?',
      choices: ['$4\\sqrt{5}$', 'They are equal', '$9$', 'A calculator is needed'],
      answer: 2,
      solution:
        'Both numbers are positive, so square them: $(4\\sqrt{5})^2 = 16 \\times 5 = 80$ and $9^2 = 81$. Since $80 < 81$, we get $4\\sqrt{5} < 9$, so $9$ is greater — but only just. ✓ Check it forward: $\\sqrt{5} \\approx 2.236$, so $4\\sqrt{5} \\approx 8.94$. (The choice $4\\sqrt{5}$ reads the squares off the right way but names the wrong winner; "they are equal" would need $80 = 81$; the last choice reaches for a calculator when squaring already reduced the question to $80$ against $81$. Watch the squaring: the $4$ gets squared too, which is why the left side is $16 \\times 5$ and not $4 \\times 5$.)',
    },
    {
      q: 'Which is greater, $6\\sqrt{3}$ or $10$?',
      choices: ['$10$', 'They are equal', 'Squaring cannot settle this', '$6\\sqrt{3}$'],
      answer: 3,
      solution:
        'Square both positive numbers: $(6\\sqrt{3})^2 = 36 \\times 3 = 108$ and $10^2 = 100$. Since $108 > 100$, we get $6\\sqrt{3} > 10$. ✓ Check it forward: $\\sqrt{3} \\approx 1.732$, so $6\\sqrt{3} \\approx 10.39$. (The choice $10$ swaps the winner; "they are equal" would need $108 = 100$; and squaring settles it perfectly here — the tool is off limits only when a side might be negative, and both of these are positive.)',
    },
    {
      q: 'Which of these is the largest: $3\\sqrt{2}$, $2\\sqrt{5}$, or $4$?',
      choices: ['$3\\sqrt{2}$', '$2\\sqrt{5}$', '$4$', 'They are all equal'],
      answer: 1,
      solution:
        'Every one of the three is positive, so compare their squares instead: $(3\\sqrt{2})^2 = 9 \\times 2 = 18$, $(2\\sqrt{5})^2 = 4 \\times 5 = 20$, and $4^2 = 16$. The biggest square is $20$, so the biggest number is $2\\sqrt{5}$. ✓ Check it forward in decimals: $3\\sqrt{2} \\approx 4.24$, $2\\sqrt{5} \\approx 4.47$, and $4$. (The choice $3\\sqrt{2}$ comes second, and picking it usually means trusting the bigger multiplier — $3$ beats $2$ — instead of squaring; the choice $4$ trusts the tidy whole number, but its square $16$ is the smallest of the three; and $18$, $20$, $16$ are all different, so the three numbers cannot be equal.)',
    },
  ],
  // p8 — fractions that sit a whisker away from 1
  [
    {
      q: 'Which is greater, $\\frac{9}{10}$ or $\\frac{10}{11}$?',
      choices: ['$\\frac{9}{10}$', 'They are equal', 'Neither can be compared without decimals', '$\\frac{10}{11}$'],
      answer: 3,
      solution:
        'Measure how far each one falls short of $1$: $\\frac{9}{10} = 1 - \\frac{1}{10}$ and $\\frac{10}{11} = 1 - \\frac{1}{11}$. Since $\\frac{1}{11} < \\frac{1}{10}$, the second fraction misses $1$ by less, so it is closer to $1$ and therefore bigger: $\\frac{10}{11} > \\frac{9}{10}$. ✓ Check it forward by cross-multiplying: $9 \\times 11 = 99$ and $10 \\times 10 = 100$, and $99 < 100$. (The choice $\\frac{9}{10}$ backs the smaller denominator, but with a smaller numerator too that rule does not apply; "they are equal" would need $99 = 100$; and decimals are optional — the miss-distance argument needs no division at all.)',
    },
    {
      q: 'Which is greater, $\\frac{20}{21}$ or $\\frac{23}{24}$?',
      choices: [
        '$\\frac{20}{21}$',
        'They are equal',
        '$\\frac{23}{24}$',
        'The fraction with the smaller denominator is always greater',
      ],
      answer: 2,
      solution:
        'Both fractions are one unit-fraction short of $1$: $\\frac{20}{21} = 1 - \\frac{1}{21}$ and $\\frac{23}{24} = 1 - \\frac{1}{24}$. A smaller miss means a bigger fraction, and $\\frac{1}{24} < \\frac{1}{21}$, so $\\frac{23}{24} > \\frac{20}{21}$. ✓ Check it forward by cross-multiplying: $20 \\times 24 = 480$ and $21 \\times 23 = 483$, and $480 < 483$. (The choice $\\frac{20}{21}$ takes the smaller denominator as a winner; "they are equal" would need $480 = 483$; and the last choice states that denominator rule as a law, but it only holds when the numerators are the SAME — here they are not, and it gives the wrong answer.)',
    },
    {
      q: 'Which is SMALLER, $\\frac{12}{11}$ or $\\frac{13}{12}$?',
      choices: ['$\\frac{13}{12}$', '$\\frac{12}{11}$', 'They are equal', 'Both of them are less than $1$'],
      answer: 0,
      solution:
        'These two sit just ABOVE $1$: $\\frac{12}{11} = 1 + \\frac{1}{11}$ and $\\frac{13}{12} = 1 + \\frac{1}{12}$. The one that overshoots $1$ by less is the smaller number, and $\\frac{1}{12} < \\frac{1}{11}$, so $\\frac{13}{12} < \\frac{12}{11}$. ✓ Check it forward by cross-multiplying: $12 \\times 12 = 144$ and $11 \\times 13 = 143$, and $143 < 144$ confirms $\\frac{13}{12}$ is the smaller one. (The choice $\\frac{12}{11}$ answers the "which is GREATER" question instead; "they are equal" would need $143 = 144$; and the last choice is simply false — a numerator larger than its denominator puts both fractions above $1$.)',
    },
  ],
  // p9 — pick the extreme fraction out of three
  [
    {
      q: 'Which of these fractions is the largest: $\\frac{4}{9}$, $\\frac{5}{11}$, or $\\frac{7}{16}$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{5}{11}$', '$\\frac{7}{16}$', 'They are all equal'],
      answer: 1,
      solution:
        'Compare them two at a time by cross-multiplying. $\\frac{5}{11}$ against $\\frac{4}{9}$: $5 \\times 9 = 45$ beats $11 \\times 4 = 44$, so $\\frac{5}{11}$ wins. $\\frac{5}{11}$ against $\\frac{7}{16}$: $5 \\times 16 = 80$ beats $11 \\times 7 = 77$, so $\\frac{5}{11}$ wins again. The largest is $\\frac{5}{11}$. ✓ Check it forward in decimals: $\\frac{4}{9} \\approx 0.444$, $\\frac{5}{11} \\approx 0.455$, $\\frac{7}{16} = 0.4375$. (The choice $\\frac{4}{9}$ finishes second and usually comes from stopping after one comparison; $\\frac{7}{16}$ has the biggest numerator but the biggest denominator too, so it is actually the smallest; and the three decimals are all different, so they cannot be equal.)',
    },
    {
      q: 'Which of these fractions is the smallest: $\\frac{5}{7}$, $\\frac{7}{10}$, or $\\frac{9}{13}$?',
      choices: ['$\\frac{9}{13}$', '$\\frac{7}{10}$', '$\\frac{5}{7}$', 'They are all equal'],
      answer: 0,
      solution:
        'Cross-multiply in pairs. $\\frac{9}{13}$ against $\\frac{7}{10}$: $9 \\times 10 = 90$ against $13 \\times 7 = 91$, so $\\frac{9}{13} < \\frac{7}{10}$. $\\frac{7}{10}$ against $\\frac{5}{7}$: $7 \\times 7 = 49$ against $10 \\times 5 = 50$, so $\\frac{7}{10} < \\frac{5}{7}$. Chaining the two, $\\frac{9}{13}$ is the smallest. ✓ Check it forward in decimals: $\\frac{9}{13} \\approx 0.692$, $\\frac{7}{10} = 0.7$, $\\frac{5}{7} \\approx 0.714$. (The choice $\\frac{7}{10}$ sits in the middle and usually comes from comparing only one pair; $\\frac{5}{7}$ is the largest of the three, which is the answer to the opposite question; and the three decimals differ, so they are not all equal.)',
    },
    {
      q: 'Which of these is the largest: $\\frac{2}{3}$, $\\frac{5}{8}$, or $\\frac{9}{14}$?',
      choices: ['$\\frac{5}{8}$', '$\\frac{9}{14}$', 'They are all equal', '$\\frac{2}{3}$'],
      answer: 3,
      solution:
        'Cross-multiply in pairs. $\\frac{2}{3}$ against $\\frac{9}{14}$: $2 \\times 14 = 28$ beats $3 \\times 9 = 27$, so $\\frac{2}{3}$ wins. $\\frac{9}{14}$ against $\\frac{5}{8}$: $9 \\times 8 = 72$ beats $14 \\times 5 = 70$, so $\\frac{9}{14}$ wins that one. The order is $\\frac{5}{8} < \\frac{9}{14} < \\frac{2}{3}$, so the largest is $\\frac{2}{3}$. ✓ Check it forward in decimals: $\\frac{2}{3} \\approx 0.667$, $\\frac{9}{14} \\approx 0.643$, $\\frac{5}{8} = 0.625$. (The choice $\\frac{9}{14}$ comes second and usually means the last comparison was skipped; $\\frac{5}{8}$ is the smallest; and the three decimals are all different, so they cannot be equal.)',
    },
  ],
  // p10 — a sum of two roots against a single root: square, then square again
  [
    {
      q: 'Which is greater, $\\sqrt{3} + \\sqrt{5}$ or $\\sqrt{15}$?',
      choices: ['$\\sqrt{3} + \\sqrt{5}$', '$\\sqrt{15}$', 'They are equal', 'Squaring cannot decide this'],
      answer: 0,
      solution:
        'Both sides are positive, so square them: $(\\sqrt{3} + \\sqrt{5})^2 = 3 + 2\\sqrt{15} + 5 = 8 + 2\\sqrt{15}$, while $(\\sqrt{15})^2 = 15$. So the question becomes: is $8 + 2\\sqrt{15}$ bigger than $15$? That means comparing $2\\sqrt{15}$ with $7$. Square once more: $(2\\sqrt{15})^2 = 4 \\times 15 = 60$ and $7^2 = 49$, and $60 > 49$, so $2\\sqrt{15} > 7$. Then $8 + 2\\sqrt{15} > 15$, and $\\sqrt{3} + \\sqrt{5}$ is greater. ✓ Check it forward in decimals: $1.732 + 2.236 = 3.968$ against $\\sqrt{15} \\approx 3.873$. (The choice $\\sqrt{15}$ comes from squaring term by term into $3 + 5 = 8$ and forgetting the middle term $2\\sqrt{15}$, which leaves $8$ against $15$; "they are equal" comes from confusing addition with multiplication, since $\\sqrt{3} \\times \\sqrt{5}$ really is $\\sqrt{15}$ — but a sum is not a product; and squaring works fine here, since every quantity in sight is positive.)',
    },
    {
      q: 'Which is greater, $\\sqrt{2} + \\sqrt{7}$ or $\\sqrt{17}$?',
      choices: ['$\\sqrt{2} + \\sqrt{7}$', 'They are equal', '$\\sqrt{17}$', 'Only a calculator can decide'],
      answer: 2,
      solution:
        'Square both positive sides: $(\\sqrt{2} + \\sqrt{7})^2 = 2 + 2\\sqrt{14} + 7 = 9 + 2\\sqrt{14}$, against $(\\sqrt{17})^2 = 17$. Now compare $2\\sqrt{14}$ with $8$: squaring gives $4 \\times 14 = 56$ against $64$, so $2\\sqrt{14} < 8$ and therefore $9 + 2\\sqrt{14} < 17$. That makes $\\sqrt{17}$ greater. ✓ Check it forward in decimals: $1.414 + 2.646 = 4.060$ against $\\sqrt{17} \\approx 4.123$. (The choice $\\sqrt{2} + \\sqrt{7}$ names the wrong side at the last step — the comparison $56 < 64$ says the LEFT side is the smaller one; "they are equal" would need $56 = 64$; and no calculator is needed, since the whole question reduced to $56$ against $64$.)',
    },
    {
      q: 'Which is greater, $\\sqrt{6} + \\sqrt{6}$ or $\\sqrt{24}$?',
      choices: ['$\\sqrt{6} + \\sqrt{6}$', 'They are equal', '$\\sqrt{24}$', 'Squaring gives no information here'],
      answer: 1,
      solution:
        'Square both positive sides. The left is $(\\sqrt{6} + \\sqrt{6})^2 = 6 + 2\\sqrt{36} + 6 = 6 + 12 + 6 = 24$, and the right is $(\\sqrt{24})^2 = 24$. Equal squares of positive numbers mean equal numbers. ✓ Check it forward another way: $\\sqrt{6} + \\sqrt{6} = 2\\sqrt{6}$, and $(2\\sqrt{6})^2 = 4 \\times 6 = 24$, so $2\\sqrt{6} = \\sqrt{24}$ exactly. In decimals, both are about $4.899$. (The choice $\\sqrt{6} + \\sqrt{6}$ often comes from assuming a sum of two roots always beats a single root; $\\sqrt{24}$ comes from the opposite hunch; and squaring did decide it — it just happened to land on a tie.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 9,
  sections: { '9.1': s91, '9.2': s92 },
}
