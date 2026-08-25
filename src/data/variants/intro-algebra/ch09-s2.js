// Introduction to Algebra chapter 9 — variations for sections 9.3 and 9.4. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD twice: once with a value INSIDE the claimed solution set and once
//    with a value OUTSIDE it (usually the endpoint itself, which is where the
//    strict-versus-inclusive question actually lives).
//  - Two named traps run through the whole file and are kept apart on purpose.
//    The FLIP trap: dividing or multiplying by a negative reverses the symbol,
//    and in a three-part chain it reverses BOTH symbols at once. The ENDPOINT
//    trap: $<$ excludes its endpoint and $\le$ includes it, which changes an
//    open circle into a closed one and changes an integer count by one.
//  - Every distractor is one named mistake, and no two distractors inside an
//    item describe the same set of numbers.
//  - Number-line figures use the same 12-unit-wide view as the base chapter.
//    An open circle is `open: true` and means strict; a filled circle means
//    "or equal". Every figure was checked against its own algebra. Figure
//    labels are plain text.

const s93 = [
  // p1 — one-step inequalities: add or subtract the same number on both sides
  [
    {
      q: 'Solve $x - 4 > 9$.',
      choices: ['$x > 5$', '$x > 13$', '$x < 13$', '$x \\ge 13$'],
      answer: 1,
      solution:
        'Add $4$ to both sides — adding is always a safe move, so the symbol stays put: $x > 13$. Check inside the set with $x = 14$: $14 - 4 = 10 > 9$ ✓. Check the endpoint, which should be outside: $13 - 4 = 9$, and $9 > 9$ is false ✓. (The choice $x > 5$ SUBTRACTS $4$ instead of adding it; the choice $x < 13$ flips the symbol although nothing negative was ever used; the choice $x \\ge 13$ lets $13$ in, but $13$ fails.)',
    },
    {
      q: 'Solve $y + 9 \\le 4$.',
      choices: ['$y \\le 13$', '$y \\ge -5$', '$y \\le -5$', '$y < -5$'],
      answer: 2,
      solution:
        'Subtract $9$ from both sides: $y \\le 4 - 9$, that is $y \\le -5$. Check the endpoint, which SHOULD be included: $-5 + 9 = 4$, and $4 \\le 4$ ✓. Check outside with $y = -4$: $-4 + 9 = 5$, and $5 \\le 4$ is false ✓. (The choice $y \\le 13$ adds $9$ instead of subtracting; the choice $y \\ge -5$ flips the symbol for no reason; the choice $y < -5$ throws away the endpoint, but $\\le$ keeps it.)',
    },
    {
      q: 'What is the smallest integer $m$ that satisfies $m - 11 \\ge -3$?',
      choices: ['$-14$', '$9$', '$14$', '$8$'],
      answer: 3,
      solution:
        'Add $11$ to both sides: $m \\ge -3 + 11 = 8$. The smallest integer allowed is $8$ itself, because $\\ge$ includes its endpoint. Check it: $8 - 11 = -3$, and $-3 \\ge -3$ ✓. Check one step lower, $m = 7$: $7 - 11 = -4$, and $-4 \\ge -3$ is false ✓. (The choice $-14$ subtracts $11$ instead of adding it; the choice $9$ treats "or equal" as strict and skips past $8$; the choice $14$ reverses the subtraction into $11 - m \\ge -3$.)',
    },
  ],
  // p2 — one-step inequalities: divide by a POSITIVE coefficient
  [
    {
      q: 'Solve $6x \\le 42$.',
      choices: ['$x \\le 7$', '$x \\ge 7$', '$x \\le 36$', '$x < 7$'],
      answer: 0,
      solution:
        'Divide both sides by the positive number $6$: $x \\le 7$. No flip — we flip only for NEGATIVE multipliers. Check the endpoint, which should be included: $6(7) = 42 \\le 42$ ✓. Check outside with $x = 8$: $48 \\le 42$ is false ✓. (The choice $x \\ge 7$ flips although $6$ is positive; the choice $x \\le 36$ SUBTRACTS $6$ where it should divide; the choice $x < 7$ drops the endpoint that $\\le$ keeps.)',
    },
    {
      q: 'Solve $7x > 56$.',
      choices: ['$x > 49$', '$x < 8$', '$x > 8$', '$x \\ge 8$'],
      answer: 2,
      solution:
        'Divide both sides by the positive number $7$: $x > 8$. Check inside with $x = 9$: $63 > 56$ ✓. Check the endpoint, which should be outside: $7(8) = 56$, and $56 > 56$ is false ✓. (The choice $x > 49$ subtracts $7$ instead of dividing; the choice $x < 8$ flips although $7$ is positive; the choice $x \\ge 8$ lets in $8$, which does not work.)',
    },
    {
      q: 'What is the largest integer $x$ for which $3x \\le 20$?',
      choices: ['$17$', '$7$', '$60$', '$6$'],
      answer: 3,
      solution:
        'Divide by $3$: $x \\le \\frac{20}{3}$, which is $6\\frac{2}{3}$. The largest whole number that fits is $6$. Check it: $3(6) = 18 \\le 20$ ✓. Check the next one up, $x = 7$: $3(7) = 21 \\le 20$ is false ✓. (The choice $17$ subtracts $3$ instead of dividing; the choice $7$ rounds $6\\frac{2}{3}$ UP, but rounding up leaves the solution set; the choice $60$ multiplies by $3$ where it should divide.)',
    },
  ],
  // p3 — the flip rule: divide by a NEGATIVE coefficient
  [
    {
      q: 'Solve $-7x \\ge 42$.',
      choices: ['$x \\le -6$', '$x \\ge -6$', '$x \\le 6$', '$x \\ge 6$'],
      answer: 0,
      solution:
        'Divide both sides by $-7$ and FLIP the symbol: $x \\le -6$. Check the endpoint, which should be included: $-7(-6) = 42 \\ge 42$ ✓. Check outside with $x = -5$: $-7(-5) = 35 \\ge 42$ is false ✓. (The choice $x \\ge -6$ forgets the flip; the choice $x \\le 6$ flips the symbol but loses the minus sign in $\\frac{42}{-7}$; the choice $x \\ge 6$ makes both mistakes at once.)',
    },
    {
      q: 'Solve $-2x \\le 18$.',
      choices: ['$x \\le -9$', '$x \\ge -9$', '$x \\ge 9$', '$x > -9$'],
      answer: 1,
      solution:
        'Divide both sides by $-2$ and FLIP: $x \\ge -9$. Check the endpoint, which should be included: $-2(-9) = 18 \\le 18$ ✓. Check outside with $x = -10$: $-2(-10) = 20 \\le 18$ is false ✓. (The choice $x \\le -9$ forgets the flip; the choice $x \\ge 9$ flips but drops the minus from the quotient; the choice $x > -9$ flips correctly but turns "or equal" into strict, throwing away $-9$.)',
    },
    {
      q: 'Which of these numbers is NOT a solution of $-4x > -20$?',
      choices: ['$0$', '$-3$', '$4$', '$6$'],
      answer: 3,
      solution:
        'Divide both sides by $-4$ and FLIP: $x < 5$. So $6$ is the odd one out. Check it: $-4(6) = -24$, and $-24 > -20$ is false ✓. Check the others, which should all work: $-4(0) = 0 > -20$ ✓, $-4(-3) = 12 > -20$ ✓, $-4(4) = -16 > -20$ ✓. (If you forget to flip you get $x > 5$, and then $0$, $-3$, and $4$ all look like non-solutions — that one missing flip is exactly what makes those three choices tempting.)',
    },
  ],
  // p4 — two-step inequalities with a positive coefficient
  [
    {
      q: 'Solve $5x + 4 < 24$.',
      choices: ['$x > 4$', '$x < \\frac{28}{5}$', '$x < 4$', '$x \\le 4$'],
      answer: 2,
      solution:
        'Subtract $4$ from both sides: $5x < 20$. Divide by the positive number $5$: $x < 4$. Check inside with $x = 3$: $15 + 4 = 19 < 24$ ✓. Check the endpoint, which should be outside: $5(4) + 4 = 24$, and $24 < 24$ is false ✓. (The choice $x > 4$ flips although $5$ is positive; the choice $x < \\frac{28}{5}$ ADDS $4$ instead of subtracting it; the choice $x \\le 4$ lets in $4$, which fails.)',
    },
    {
      q: 'Solve $3x - 8 \\ge 7$.',
      choices: ['$x \\ge 5$', '$x \\le 5$', '$x \\ge -\\frac{1}{3}$', '$x > 5$'],
      answer: 0,
      solution:
        'Add $8$ to both sides: $3x \\ge 15$. Divide by $3$: $x \\ge 5$. Check the endpoint, which should be included: $3(5) - 8 = 7 \\ge 7$ ✓. Check outside with $x = 4$: $12 - 8 = 4 \\ge 7$ is false ✓. (The choice $x \\le 5$ flips for no reason; the choice $x \\ge -\\frac{1}{3}$ SUBTRACTS $8$ again, giving $3x \\ge -1$; the choice $x > 5$ drops the endpoint that $\\ge$ keeps.)',
    },
    {
      q: 'For which values of $t$ is $4t + 9$ at most $1$?',
      choices: ['$t \\le \\frac{5}{2}$', '$t \\le -2$', '$t \\ge -2$', '$t < -2$'],
      answer: 1,
      solution:
        '"At most $1$" means $4t + 9 \\le 1$. Subtract $9$: $4t \\le -8$. Divide by $4$: $t \\le -2$. Check the endpoint, which should be included: $4(-2) + 9 = 1 \\le 1$ ✓. Check outside with $t = -1$: $-4 + 9 = 5 \\le 1$ is false ✓. (The choice $t \\le \\frac{5}{2}$ adds $9$ instead of subtracting; the choice $t \\ge -2$ flips although $4$ is positive; the choice $t < -2$ turns "at most" into "less than" and loses $-2$.)',
    },
  ],
  // p5 — two-step inequalities with a negative coefficient
  [
    {
      q: 'Solve $7 - 3x \\le 19$.',
      choices: ['$x \\le -4$', '$x \\ge 4$', '$x > -4$', '$x \\ge -4$'],
      answer: 3,
      solution:
        'Subtract $7$ from both sides: $-3x \\le 12$. Now divide by $-3$ and FLIP: $x \\ge -4$. Check the endpoint, which should be included: $7 - 3(-4) = 7 + 12 = 19 \\le 19$ ✓. Check outside with $x = -5$: $7 + 15 = 22 \\le 19$ is false ✓. (The choice $x \\le -4$ forgets the flip; the choice $x \\ge 4$ flips but loses the minus in $\\frac{12}{-3}$; the choice $x > -4$ flips correctly but drops the endpoint.)',
    },
    {
      q: 'Solve $10 - 4x \\ge -2$.',
      choices: ['$x \\ge 3$', '$x \\le 3$', '$x \\le -3$', '$x < 3$'],
      answer: 1,
      solution:
        'Subtract $10$: $-4x \\ge -12$. Divide by $-4$ and FLIP: $x \\le 3$. Check the endpoint, which should be included: $10 - 4(3) = -2 \\ge -2$ ✓. Check outside with $x = 4$: $10 - 16 = -6 \\ge -2$ is false ✓. (The choice $x \\ge 3$ forgets the flip; the choice $x \\le -3$ divides $-12$ by $4$ instead of $-4$, keeping a minus that should have cancelled; the choice $x < 3$ turns $\\ge$ into a strict symbol and loses $3$.)',
    },
    {
      q: 'Which of these values of $x$ satisfies $9 - 2x \\le 1$?',
      choices: ['$0$', '$3$', '$4$', '$-4$'],
      answer: 2,
      solution:
        'Subtract $9$: $-2x \\le -8$. Divide by $-2$ and FLIP: $x \\ge 4$. Only $4$ qualifies, and it qualifies exactly because $\\ge$ includes its endpoint: $9 - 2(4) = 1 \\le 1$ ✓. The others fail: $9 - 0 = 9 \\le 1$ is false, $9 - 6 = 3 \\le 1$ is false, $9 + 8 = 17 \\le 1$ is false ✓. (Forget the flip and you get $x \\le 4$, which is exactly what makes $0$, $3$, and $-4$ look right — one missing flip, three wrong answers.)',
    },
  ],
  // p6 — three-part inequalities: solve the chain, then count integers
  [
    {
      q: 'How many integers satisfy $-3 \\le 3x + 6 < 12$?',
      choices: ['$5$', '$6$', '$4$', '$15$'],
      answer: 0,
      solution:
        'Subtract $6$ from all three parts: $-9 \\le 3x < 6$. Divide all three parts by $3$: $-3 \\le x < 2$. The integers are $-3, -2, -1, 0, 1$ — five of them. Check both ends: $x = -3$ gives $-9 + 6 = -3$, and $-3 \\le -3$ ✓ (included); $x = 2$ gives $6 + 6 = 12$, and $12 < 12$ is false ✓ (excluded). (The choice $6$ counts $2$ as well, forgetting the strict $<$; the choice $4$ leaves out $-3$, forgetting that $\\le$ includes it; the choice $15$ counts the integers of $-9 \\le 3x < 6$ before dividing by $3$.)',
    },
    {
      q: 'How many integers satisfy $-5 < 2x - 1 \\le 7$?',
      choices: ['$7$', '$5$', '$6$', '$12$'],
      answer: 2,
      solution:
        'Add $1$ to all three parts: $-4 < 2x \\le 8$. Divide all three parts by $2$: $-2 < x \\le 4$. The integers are $-1, 0, 1, 2, 3, 4$ — six of them. Check both ends: $x = -2$ gives $-4 - 1 = -5$, and $-5 < -5$ is false ✓ (excluded); $x = 4$ gives $8 - 1 = 7 \\le 7$ ✓ (included). (The choice $7$ counts $-2$, which the strict $<$ excludes; the choice $5$ drops $4$, which the $\\le$ includes; the choice $12$ counts the integers of $-4 < 2x \\le 8$ before dividing by $2$.)',
    },
    {
      q: 'What is the largest integer $x$ satisfying $-2 \\le 5x + 3 \\le 18$?',
      choices: ['$15$', '$4$', '$-1$', '$3$'],
      answer: 3,
      solution:
        'Subtract $3$ everywhere: $-5 \\le 5x \\le 15$. Divide everywhere by $5$: $-1 \\le x \\le 3$. The largest value allowed is $3$, and $\\le$ lets it in. Check it: $5(3) + 3 = 18 \\le 18$ ✓. Check one step higher, $x = 4$: $20 + 3 = 23 \\le 18$ is false ✓. (The choice $15$ stops at $5x \\le 15$ and forgets to divide; the choice $4$ ADDS $3$ to $18$ instead of subtracting, giving $x \\le \\frac{21}{5}$; the choice $-1$ reports the smallest solution instead of the largest.)',
    },
  ],
  // p7 — counting integers in a plain interval, endpoints included or not
  [
    {
      q: 'How many integers satisfy $-5 \\le x < 4$?',
      choices: ['$8$', '$9$', '$10$', '$4$'],
      answer: 1,
      solution:
        'List them: $-5, -4, -3, -2, -1, 0, 1, 2, 3$. That is $9$ integers. The left endpoint $-5$ is included because of $\\le$, and the right endpoint $4$ is shut out by the strict $<$. (The choice $8$ forgets that $-5$ counts; the choice $10$ counts $4$ as well; the choice $4$ counts only the solutions from $0$ upward and forgets that negative integers are integers too.)',
    },
    {
      q: 'How many integers satisfy $-2 < x < 6$?',
      choices: ['$7$', '$8$', '$9$', '$6$'],
      answer: 0,
      solution:
        'Both symbols are strict, so neither endpoint counts. List them: $-1, 0, 1, 2, 3, 4, 5$ — seven integers. (The choice $8$ is what subtracting the endpoints, $6 - (-2)$, gives, but that shortcut only works when exactly one endpoint is included; the choice $9$ counts BOTH $-2$ and $6$, which the strict symbols forbid; the choice $6$ skips over $0$, which is very much an integer and very much a solution.)',
    },
    {
      q: 'The integers that satisfy $-3 \\le x < b$ are exactly $-3, -2, -1, 0, 1$. If $b$ is an integer, what is $b$?',
      choices: ['$1$', '$5$', '$3$', '$2$'],
      answer: 3,
      solution:
        'The list stops at $1$, and the strict $<$ means $b$ itself is NOT on the list, so $b$ must be the next integer up: $b = 2$. Check it: $-3 \\le x < 2$ gives exactly $-3, -2, -1, 0, 1$ ✓. (The choice $1$ takes the largest listed solution, but $<$ keeps $b$ out of its own list; the choice $5$ reports how MANY integers there are instead of where the interval ends; the choice $3$ overshoots and would let $2$ join the list.)',
    },
  ],
  // p8 — words into symbols: an average with an "at least" or "at most" target
  [
    {
      q: 'Rafa bowled $126$ and $138$ in his first two games. What must he score in the third game so that his three-game average is at least $140$?',
      choices: ['At least $156$', 'At least $140$', 'At least $154$', 'At least $142$'],
      answer: 0,
      solution:
        '"Average at least $140$" over three games means $\\frac{126 + 138 + x}{3} \\ge 140$. Multiply by $3$: $264 + x \\ge 420$. Subtract $264$: $x \\ge 156$. Check the endpoint: $\\frac{126 + 138 + 156}{3} = \\frac{420}{3} = 140 \\ge 140$ ✓. Check just below with $x = 155$: $\\frac{419}{3} \\approx 139.7$, not enough ✓. (Another way to see it: $126$ is $14$ under target and $138$ is $2$ under, so he must make up $16$ above $140$. The choice $140$ ignores the shortfall entirely; the choice $154$ makes up only the $14$; the choice $142$ makes up only the $2$.)',
    },
    {
      q: 'Nina read $52$ pages on Monday and $61$ pages on Tuesday. To average at least $60$ pages a day over three days, at least how many pages must she read on Wednesday?',
      choices: ['$60$ pages', '$67$ pages', '$68$ pages', '$77$ pages'],
      answer: 1,
      solution:
        'Three days averaging at least $60$ means a total of at least $3 \\times 60 = 180$ pages. So far she has $52 + 61 = 113$, which leaves $x \\ge 180 - 113 = 67$. Check the endpoint: $\\frac{52 + 61 + 67}{3} = \\frac{180}{3} = 60 \\ge 60$ ✓. Check just below with $66$: $\\frac{179}{3} \\approx 59.7$, not enough ✓. (The choice $60$ assumes the last day just has to hit the target itself; the choice $68$ treats "at least $60$" as "more than $60$" and pushes one page past the endpoint; the choice $77$ adds $52 + 61$ as $103$, losing a ten.)',
    },
    {
      q: 'A four-day hike is planned to average at most $12$ km per day. The first three days covered $14$ km, $9$ km, and $11$ km. What is the longest the last day can be?',
      choices: ['$12$ km', '$2$ km', '$14$ km', '$15$ km'],
      answer: 2,
      solution:
        '"Average at most $12$" over four days means the total is at most $4 \\times 12 = 48$ km. The first three days used $14 + 9 + 11 = 34$ km, so $x \\le 48 - 34 = 14$. Check the endpoint: $\\frac{14 + 9 + 11 + 14}{4} = \\frac{48}{4} = 12 \\le 12$ ✓. Check just above with $15$: $\\frac{49}{4} = 12.25$, too much ✓. (The choice $12$ copies the target average as if it were a daily cap; the choice $2$ multiplies by $3$ days instead of $4$; the choice $15$ adds the first three days as $33$.)',
    },
  ],
  // p9 — a fraction and the variable on both sides
  [
    {
      q: 'Solve $\\frac{x}{3} + 4 > x - 2$.',
      choices: ['$x > 9$', '$x < 5$', '$x < 9$', '$x < 18$'],
      answer: 2,
      solution:
        'Multiply EVERY term by the positive number $3$: $x + 12 > 3x - 6$. Subtract $x$ and add $6$: $18 > 2x$, so $9 > x$, which reads $x < 9$. Check inside with $x = 0$: left side $4$, right side $-2$, and $4 > -2$ ✓. Check the endpoint, which should be outside: at $x = 9$ both sides equal $7$, and $7 > 7$ is false ✓. (The choice $x > 9$ reads $18 > 2x$ backwards; the choice $x < 5$ multiplies only the fraction by $3$, giving $x + 4 > 3x - 6$; the choice $x < 18$ forgets to divide by $2$ at the end.)',
    },
    {
      q: 'Solve $\\frac{x}{4} - 1 \\ge x + 2$.',
      choices: ['$x \\ge -4$', '$x \\le \\frac{4}{3}$', '$x < -4$', '$x \\le -4$'],
      answer: 3,
      solution:
        'Multiply every term by $4$: $x - 4 \\ge 4x + 8$. Subtract $4x$ and add $4$: $-12 \\ge 3x$, so $-4 \\ge x$, which reads $x \\le -4$. Check the endpoint, which should be included: at $x = -4$ the left side is $-1 - 1 = -2$ and the right side is $-2$, and $-2 \\ge -2$ ✓. Check outside with $x = 0$: $-1 \\ge 2$ is false ✓. (The choice $x \\ge -4$ reads $-12 \\ge 3x$ backwards; the choice $x \\le \\frac{4}{3}$ computes $-4 + 8$ instead of $-4 - 8$ when moving the constants; the choice $x < -4$ turns $\\ge$ into a strict symbol and loses $-4$.)',
    },
    {
      q: 'What is the smallest integer $n$ for which $\\frac{n}{2} + 5 \\le n - 1$?',
      choices: ['$6$', '$12$', '$13$', '$24$'],
      answer: 1,
      solution:
        'Multiply every term by $2$: $n + 10 \\le 2n - 2$. Subtract $n$ and add $2$: $12 \\le n$. Since $\\le$ includes its endpoint, the smallest integer is $12$. Check it: $\\frac{12}{2} + 5 = 11$ and $12 - 1 = 11$, and $11 \\le 11$ ✓. Check one step lower, $n = 11$: $5.5 + 5 = 10.5$ versus $10$, and $10.5 \\le 10$ is false ✓. (The choice $6$ doubles only $\\frac{n}{2}$ and $n$, leaving $5$ and $-1$ untouched; the choice $13$ treats "or equal" as strict and skips $12$; the choice $24$ doubles the finished answer, as if the $\\frac{n}{2}$ still needed undoing.)',
    },
  ],
  // p10 — three-part chain with a negative coefficient: flip BOTH symbols
  [
    {
      q: 'How many integers satisfy $-5 \\le 1 - 3x < 10$?',
      choices: ['$5$', '$6$', '$4$', '$15$'],
      answer: 0,
      solution:
        'Subtract $1$ from all three parts: $-6 \\le -3x < 9$. Divide every part by $-3$ and FLIP both symbols: $2 \\ge x > -3$, which reads left-to-right as $-3 < x \\le 2$. The integers are $-2, -1, 0, 1, 2$ — five of them. Check both ends: $x = 2$ gives $1 - 6 = -5$, and $-5 \\le -5$ ✓ (included); $x = -3$ gives $1 + 9 = 10$, and $10 < 10$ is false ✓ (excluded). (The choice $6$ counts $-3$, which the strict end shuts out; the choice $4$ drops $2$, which the inclusive end keeps; the choice $15$ counts the integers of $-6 \\le y < 9$ before dividing by $-3$.)',
    },
    {
      q: 'How many integers satisfy $-8 < 2 - 3x \\le 11$?',
      choices: ['$6$', '$8$', '$7$', '$19$'],
      answer: 2,
      solution:
        'Subtract $2$ everywhere: $-10 < -3x \\le 9$. Divide everywhere by $-3$ and FLIP both symbols: $\\frac{10}{3} > x \\ge -3$, which reads as $-3 \\le x < \\frac{10}{3}$. Since $\\frac{10}{3}$ is about $3.33$, the integers are $-3, -2, -1, 0, 1, 2, 3$ — seven of them. Check both ends: $x = -3$ gives $2 + 9 = 11 \\le 11$ ✓ (included); $x = 4$ gives $2 - 12 = -10$, and $-8 < -10$ is false ✓ (excluded). (The choice $6$ drops the included $-3$; the choice $8$ rounds $\\frac{10}{3}$ up to $4$ and counts it, but $4$ fails; the choice $19$ counts the integers of $-10 < y \\le 9$ before dividing by $-3$.)',
    },
    {
      q: 'Solve $-1 \\le 4 - 5x < 14$.',
      choices: ['$-1 \\le x < 2$', '$-2 \\le x < 1$', '$-2 < x < 1$', '$-2 < x \\le 1$'],
      answer: 3,
      solution:
        'Subtract $4$ from all three parts: $-5 \\le -5x < 10$. Divide every part by $-5$ and FLIP both symbols: $1 \\ge x > -2$, which reads left-to-right as $-2 < x \\le 1$. Notice how the strictness travels WITH its own number: the $\\le$ that sat beside $-1$ ends up beside $1$, and the $<$ that sat beside $14$ ends up beside $-2$. Check both ends: $x = 1$ gives $4 - 5 = -1$, and $-1 \\le -1$ ✓ (included); $x = -2$ gives $4 + 10 = 14$, and $14 < 14$ is false ✓ (excluded). (The choice $-1 \\le x < 2$ divides by $5$ and never flips; the choice $-2 \\le x < 1$ flips the symbols but leaves the strictness attached to the wrong ends; the choice $-2 < x < 1$ loses the "or equal" at $1$.)',
    },
  ],
]

const s94 = [
  // p1 — turn an inequality into a number-line picture: dot style and direction
  [
    {
      q: 'How should $x < -2$ be graphed on a number line?',
      choices: [
        'An open circle at $-2$ with shading to the left',
        'A closed (filled) circle at $-2$ with shading to the left',
        'An open circle at $-2$ with shading to the right',
        'A closed circle at $-2$ with shading to the right',
      ],
      answer: 0,
      solution:
        'Two decisions. The symbol $<$ is strict, so $-2$ is not a solution and the circle is OPEN. "Less than" means the solutions sit to the LEFT of $-2$ on the number line, so shade left. Check with $x = -5$, which is to the left: $-5 < -2$ ✓, and with $x = -2$ itself: $-2 < -2$ is false, so the hollow circle is right ✓. (The second choice fills the circle, which would let $-2$ in; the third shades toward the bigger numbers; the fourth makes both mistakes.)',
    },
    {
      q: 'Which of these inequalities is graphed with an OPEN circle at its endpoint?',
      choices: ['$x \\le 7$', '$x > 7$', '$x \\ge 7$', '$x = 7$'],
      answer: 1,
      solution:
        'An open circle means the endpoint is NOT a solution, and that happens exactly when the symbol is strict. Of the four, only $x > 7$ is strict: $7 > 7$ is false, so $7$ is left out ✓. (The choices $x \\le 7$ and $x \\ge 7$ both carry the little "or equal" line, so $7$ is a solution and the circle is filled; the choice $x = 7$ is graphed as a single filled dot at $7$ and nothing else.)',
    },
    {
      q: 'How should $y > -5$ be graphed on a number line?',
      choices: [
        'A closed circle at $-5$ with shading to the right',
        'An open circle at $-5$ with shading to the left',
        'A closed circle at $-5$ with shading to the left',
        'An open circle at $-5$ with shading to the right',
      ],
      answer: 3,
      solution:
        'The symbol $>$ is strict, so the circle at $-5$ is OPEN, and "greater than" shades to the RIGHT. Check with $y = 0$: $0 > -5$ ✓, and with $y = -5$: $-5 > -5$ is false, so the endpoint really is hollow ✓. (The first choice fills a circle that should be hollow; the second shades toward the smaller numbers; the third makes both mistakes.)',
    },
  ],
  // p2 — read a one-sided number-line graph back into an inequality
  [
    {
      q: 'Which inequality matches the graph below?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-6, 0], b: [3, 0], hl: true },
          { t: 'point', p: [3, 0], label: '3', open: true },
        ],
      },
      choices: ['$x \\le 3$', '$x < 3$', '$x > 3$', '$x \\ge 3$'],
      answer: 1,
      solution:
        'Two clues. The circle at $3$ is hollow, so $3$ is NOT a solution — the symbol must be strict. The shading runs to the left, toward the smaller numbers, so the symbol is "less than". Together: $x < 3$. Check with $x = 0$, which is inside the shading: $0 < 3$ ✓, and with $x = 3$: $3 < 3$ is false, matching the hollow circle ✓. (The choice $x \\le 3$ would need a filled circle; the choices $x > 3$ and $x \\ge 3$ shade the wrong way.)',
    },
    {
      q: 'Which inequality matches the number line shown?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-4, 0], b: [6, 0], hl: true },
          { t: 'point', p: [-4, 0], label: '-4' },
        ],
      },
      choices: ['$x > -4$', '$x \\le -4$', '$x \\ge -4$', '$x < -4$'],
      answer: 2,
      solution:
        'The dot at $-4$ is filled, so $-4$ IS a solution and the symbol carries "or equal". The shading heads right, toward the bigger numbers, so it is a "greater than" symbol. Together: $x \\ge -4$. Check with $x = 0$: $0 \\ge -4$ ✓, and with the endpoint itself: $-4 \\ge -4$ ✓, which is exactly why the dot is filled. (The choice $x > -4$ would need a hollow circle; the choices $x \\le -4$ and $x < -4$ shade the wrong way.)',
    },
    {
      q: 'The graph below shows every solution of an inequality. Which number is NOT a solution?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [2, 0], b: [6, 0], hl: true },
          { t: 'point', p: [2, 0], label: '2', open: true },
        ],
      },
      choices: ['$2$', '$2.5$', '$4$', '$6$'],
      answer: 0,
      solution:
        'The circle at $2$ is hollow and the shading runs right, so the picture shows $x > 2$ — everything strictly bigger than $2$, but not $2$ itself. So $2$ is the one that misses out ✓. (The other three all sit inside the shaded ray: $2.5 > 2$ ✓, $4 > 2$ ✓, $6 > 2$ ✓. A student who reads the hollow circle as filled would say every one of the four is a solution — the whole message of that little empty dot is that its own number is excluded.)',
    },
  ],
  // p3 — dashed or solid: the boundary line of a two-variable inequality
  [
    {
      q: 'When graphing $y \\le 3x + 5$, how should the boundary line $y = 3x + 5$ be drawn?',
      choices: [
        'Dashed, because $\\le$ is not an equals sign',
        'Dashed, because the inequality contains a $3$',
        'Solid, because points on the line are solutions too',
        'It does not matter either way',
      ],
      answer: 2,
      solution:
        'The "or equal" half of $\\le$ is exactly the case $y = 3x + 5$, so every point ON the line is a solution. We show that with a SOLID line. Check with a point on the line, $(0, 5)$: $5 \\le 3(0) + 5 = 5$ ✓ — a solution, so the line must be drawn as part of the answer. (The first choice is dashed for the wrong reason: dashed is for STRICT symbols only; the second choice reads a number that has nothing to do with the boundary style; the fourth choice forgets that dashed and solid mean different things.)',
    },
    {
      q: 'A student graphs $y < -x + 4$ using a SOLID boundary line. What is wrong?',
      choices: [
        'Nothing — a boundary line is always solid',
        'The inequality is strict, so the boundary should be dashed',
        'The boundary should be drawn as a vertical line instead',
        'The boundary should not be drawn at all',
      ],
      answer: 1,
      solution:
        'A solid line announces "points on me are solutions." But $<$ is strict: on the line, $y$ EQUALS $-x + 4$, and equal is not less. Check with the on-line point $(0, 4)$: $4 < -0 + 4 = 4$ is false ✓, so those points must be excluded, and a dashed line is how we say so. (The first choice makes solid the default, but the symbol decides; the third choice invents a vertical line, while $y = -x + 4$ slants downward; the fourth choice erases the boundary, and then nobody could tell which region is meant.)',
    },
    {
      q: 'Which of these inequalities is graphed with a DASHED boundary line?',
      choices: ['$y \\le 4x$', '$y \\ge 4x$', '$y \\ge 4x - 7$', '$y > 4x$'],
      answer: 3,
      solution:
        'Dashed goes with a STRICT symbol, and only $y > 4x$ is strict. Check on its boundary with $(1, 4)$: $4 > 4(1) = 4$ is false ✓, so the line is not part of the solution set and must be drawn dashed. (The other three all carry the "or equal" line: at $(1, 4)$, $4 \\le 4$ ✓ and $4 \\ge 4$ ✓, and $y \\ge 4x - 7$ is solid too — its boundary just sits $7$ units lower.)',
    },
  ],
  // p4 — the test-point trick
  [
    {
      q: 'To decide which side of $y = 2x - 5$ to shade for $y > 2x - 5$, you test the point $(0, 0)$. What happens?',
      choices: [
        '$0 > -5$ is true, so shade the side containing $(0, 0)$',
        '$0 > -5$ is false, so shade the other side',
        '$(0, 0)$ is on the line, so a different test point is needed',
        'The origin can never be used as a test point',
      ],
      answer: 0,
      solution:
        'Substitute $(0, 0)$: the inequality becomes $0 > 2(0) - 5$, that is $0 > -5$ — true. A true result means the test point IS a solution, so shade the half-plane containing it. Check that $(0,0)$ is a legal test point: on the line, $x = 0$ would give $y = -5$, not $0$, so the origin is safely off the boundary ✓. (The second choice misreads $0 > -5$; the third choice claims the origin sits on the line, which it does not; the fourth choice bans the friendliest test point there is.)',
    },
    {
      q: 'For $y < x - 2$, you test the point $(0, 0)$. Which region gets shaded?',
      choices: [
        'The side containing the origin, because $(0, 0)$ is easy to test',
        'Both sides, because the boundary splits the plane evenly',
        'The side NOT containing the origin, because $0 < -2$ is false',
        'Neither side — the inequality has no solutions',
      ],
      answer: 2,
      solution:
        'Substitute $(0, 0)$: $0 < 0 - 2$, that is $0 < -2$ — false. A false result means the origin is not a solution, so the solutions live on the OTHER side. Check a point over there, say $(0, -5)$: $-5 < 0 - 2 = -2$ ✓, so that really is the shaded half-plane. (The first choice shades wherever the test point happens to be, ignoring the true-or-false result; the second choice shades everything; the fourth choice gives up, but $(0, -5)$ shows solutions exist.)',
    },
    {
      q: 'When graphing $y \\ge x$, why can the point $(0, 0)$ NOT be used as a test point?',
      choices: [
        'Because $(0, 0)$ makes the inequality false',
        'Because $(0, 0)$ is never allowed as a test point',
        'Because the boundary line must be dashed',
        'Because $(0, 0)$ lies ON the boundary line $y = x$',
      ],
      answer: 3,
      solution:
        'A test point has to be strictly off the boundary, or it cannot tell the two sides apart. Here $y = x$ passes right through the origin, since $0 = 0$. Use a point that is clearly off the line instead, such as $(1, 0)$: $0 \\ge 1$ is false, so shade the side NOT containing $(1, 0)$ — the region above the line. Check up there with $(0, 3)$: $3 \\ge 0$ ✓. (The first choice is wrong twice over: $0 \\ge 0$ is actually TRUE, and being false would not disqualify a point anyway; the second choice overstates the rule; the third choice is about $\\ge$, which makes the line solid, and boundary style has nothing to do with choosing a test point.)',
    },
  ],
  // p5 — read a filled endpoint, and read a two-ended segment
  [
    {
      q: 'Which inequality matches the graph shown?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-6, 0], b: [5, 0], hl: true },
          { t: 'point', p: [5, 0], label: '5' },
        ],
      },
      choices: ['$x < 5$', '$x \\le 5$', '$x \\ge 5$', '$x > 5$'],
      answer: 1,
      solution:
        'The dot at $5$ is filled, so $5$ is included and the symbol carries "or equal". The shading runs left, toward the smaller numbers, so it is a "less than" symbol. Together: $x \\le 5$. Check the endpoint: $5 \\le 5$ ✓, which is exactly what a filled dot promises, and check inside with $x = 0$: $0 \\le 5$ ✓. (The choice $x < 5$ would need a hollow circle; the choices $x \\ge 5$ and $x > 5$ shade the wrong direction.)',
    },
    {
      q: 'Which inequality matches this segment graph?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-2, 0], b: [3, 0], hl: true },
          { t: 'point', p: [-2, 0], label: '-2' },
          { t: 'point', p: [3, 0], label: '3', open: true },
        ],
      },
      choices: ['$-2 \\le x < 3$', '$-2 < x \\le 3$', '$-2 < x < 3$', '$-2 \\le x \\le 3$'],
      answer: 0,
      solution:
        'Each endpoint gets its own decision. The dot at $-2$ is filled, so $-2$ is included: $-2 \\le x$. The circle at $3$ is hollow, so $3$ is excluded: $x < 3$. Together: $-2 \\le x < 3$. Check both ends: $x = -2$ is a solution ✓ (filled), and $x = 3$ is not ✓ (hollow). (The choice $-2 < x \\le 3$ swaps the two dot styles; the choice $-2 < x < 3$ empties both dots; the choice $-2 \\le x \\le 3$ fills both.)',
    },
    {
      q: 'The graph below shows all solutions of an inequality. Which statement about the solution set is true?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-6, 0], b: [4, 0], hl: true },
          { t: 'point', p: [4, 0], label: '4' },
        ],
      },
      choices: [
        'The number $4$ is not a solution',
        'The solution set has a smallest member, $4$',
        'The solution set has no largest member',
        'The solution set has a largest member, $4$',
      ],
      answer: 3,
      solution:
        'The filled dot at $4$ with shading to the left is the picture of $x \\le 4$. The number $4$ is a solution, and nothing bigger is, so $4$ is the LARGEST member. Check: $4 \\le 4$ ✓, while $4.1 \\le 4$ is false ✓. (The first choice reads the filled dot as hollow; the second choice swaps largest and smallest — the shading runs left forever, so there is no smallest; the third choice is what you would say if the dot were hollow or the shading ran right.)',
    },
  ],
  // p6 — test a point in a two-variable inequality
  [
    {
      q: 'Which of these points satisfies $y > 3x$?',
      choices: ['$(2, 1)$', '$(0, 0)$', '$(1, 5)$', '$(-1, -4)$'],
      answer: 2,
      solution:
        'Substitute each point and see which one makes a true statement. $(1, 5)$: is $5 > 3(1) = 3$? Yes ✓. (The others all fail: $(2, 1)$ gives $1 > 6$, false; $(0, 0)$ gives $0 > 0$, false — the strict symbol shuts out the points ON the line $y = 3x$, and the origin is one of them; $(-1, -4)$ gives $-4 > -3$, false, because $-4$ sits to the LEFT of $-3$ on the number line.)',
    },
    {
      q: 'Which of these points satisfies $y \\le x - 3$?',
      choices: ['$(5, 1)$', '$(0, 0)$', '$(1, -1)$', '$(4, 2)$'],
      answer: 0,
      solution:
        'Substitute each point. $(5, 1)$: is $1 \\le 5 - 3 = 2$? Yes ✓. (The others fail: $(0, 0)$ gives $0 \\le -3$, false; $(1, -1)$ gives $-1 \\le -2$, false — a common slip, since $-1$ looks "smaller" but is actually to the right of $-2$; $(4, 2)$ gives $2 \\le 1$, false, and it is the near miss, sitting just one unit above the boundary.)',
    },
    {
      q: 'Which of these points does NOT satisfy $y \\ge -x + 1$?',
      choices: ['$(0, 2)$', '$(0, 0)$', '$(1, 0)$', '$(3, 3)$'],
      answer: 1,
      solution:
        'Substitute each point. $(0, 0)$: is $0 \\ge -0 + 1 = 1$? No — so the origin is the one that fails ✓. (The other three all work: $(0, 2)$ gives $2 \\ge 1$ ✓; $(1, 0)$ gives $0 \\ge 0$ ✓, which counts only because $\\ge$ includes equality — that point sits exactly ON the boundary line; $(3, 3)$ gives $3 \\ge -2$ ✓.)',
    },
  ],
  // p7 — describe the graph of a compound inequality
  [
    {
      q: 'Which describes the graph of $-5 \\le x < 1$?',
      choices: [
        'Open dot at $-5$, closed dot at $1$, shading between',
        'Open dots at both $-5$ and $1$, shading between',
        'Closed dot at $-5$, open dot at $1$, shading between',
        'Closed dots at both $-5$ and $1$, shading between',
      ],
      answer: 2,
      solution:
        'Read each endpoint from its OWN symbol. At $-5$ the symbol is $\\le$, so $-5$ is a solution: closed dot. At $1$ the symbol is $<$, so $1$ is not: open dot. Then shade the numbers in between. Check both: $-5 \\le -5$ ✓ (in) and $1 < 1$ is false ✓ (out). (The first choice swaps the two dot styles; the second empties both dots; the fourth fills both.)',
    },
    {
      q: 'Which describes the graph of $0 < x < 7$?',
      choices: [
        'Open dot at $0$, closed dot at $7$, shading between',
        'Closed dots at both $0$ and $7$, shading between',
        'Closed dot at $0$, open dot at $7$, shading between',
        'Open dots at both $0$ and $7$, shading between',
      ],
      answer: 3,
      solution:
        'Both symbols are strict, so BOTH endpoints are shut out and both dots are open. Check: $0 < 0$ is false ✓ and $7 < 7$ is false ✓, while a number in between such as $3$ works both ways: $0 < 3$ ✓ and $3 < 7$ ✓. (The first and third choices fill one dot each, letting in an endpoint that the strict symbol forbids; the second choice fills both.)',
    },
    {
      q: 'A number $x$ satisfies $-4 \\le 2x < 6$. Which describes the graph of all such $x$?',
      choices: [
        'Closed dot at $-4$, open dot at $6$, shading between',
        'Closed dot at $-2$, open dot at $3$, shading between',
        'Open dot at $-2$, closed dot at $3$, shading between',
        'Closed dots at both $-2$ and $3$, shading between',
      ],
      answer: 1,
      solution:
        'Solve first: divide all three parts by the positive number $2$ to get $-2 \\le x < 3$. Dividing by a POSITIVE number keeps both symbols exactly as they were, so the $\\le$ stays with the left end and the $<$ stays with the right. That gives a closed dot at $-2$ and an open dot at $3$. Check both: $2(-2) = -4$ and $-4 \\le -4$ ✓ (in); $2(3) = 6$ and $6 < 6$ is false ✓ (out). (The first choice graphs $-4$ and $6$ without ever dividing by $2$; the third choice swaps the dot styles; the fourth fills both dots.)',
    },
  ],
  // p8 — a false or true test point tells you which half-plane to shade
  [
    {
      q: 'For $y \\le 3x - 6$, testing $(0, 0)$ gives $0 \\le -6$, which is false. Which region should be shaded, and how should the boundary be drawn?',
      choices: [
        'The side containing the origin, with a dashed boundary',
        'The side containing the origin, with a solid boundary',
        'The side NOT containing the origin, with a dashed boundary',
        'The side NOT containing the origin, with a solid boundary',
      ],
      answer: 3,
      solution:
        'Two separate decisions. A FALSE test result means the origin is not a solution, so shade the other side. And $\\le$ includes the boundary, so the line is SOLID. Check a point on the far side, $(4, 0)$: $0 \\le 3(4) - 6 = 6$ ✓, and check a point on the line, $(2, 0)$: $0 \\le 0$ ✓, confirming the solid boundary. (The first two choices shade the origin side even though the test failed; the first and third draw the line dashed, which would wrongly throw away the points on it.)',
    },
    {
      q: 'A student shades the half-plane containing $(0, 0)$ for the inequality $y < x - 4$. Is that right?',
      choices: [
        'Yes — the origin is always inside the shaded region',
        'Yes, because $0 < -4$ is true',
        'No — $0 < -4$ is false, so the other side should be shaded',
        'No — the origin lies on the boundary line',
      ],
      answer: 2,
      solution:
        'Test the origin honestly: $0 < 0 - 4$ means $0 < -4$, which is false. So the origin is NOT a solution and the shading belongs on the other side. Check over there with $(0, -6)$: $-6 < -4$ ✓. (The first choice treats the origin as automatically included; the second misreads $0 < -4$, forgetting that $-4$ sits to the left of $0$; the fourth claims the origin is on the line, but the line through $(4, 0)$ and $(0, -4)$ misses the origin.)',
    },
    {
      q: 'For $y \\ge -3x + 9$, a student tests $(0, 0)$ and gets $0 \\ge 9$, which is false. Which of these points must therefore lie in the shaded region?',
      choices: ['$(5, 5)$', '$(0, 0)$', '$(1, 1)$', '$(2, 0)$'],
      answer: 0,
      solution:
        'The false result tells us the shaded half-plane is the one WITHOUT the origin, so a shaded point must actually satisfy the inequality. Test $(5, 5)$: $-3(5) + 9 = -6$, and $5 \\ge -6$ ✓ — a genuine solution. (The others all fail and so all sit on the origin side: $(0, 0)$ gives $0 \\ge 9$, false; $(1, 1)$ gives $1 \\ge 6$, false; $(2, 0)$ gives $0 \\ge 3$, false.)',
    },
  ],
  // p9 — count the integers shown by a number-line graph
  [
    {
      q: 'The number line below shows a solution set. How many integers does it include?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-2, 0], b: [4, 0], hl: true },
          { t: 'point', p: [-2, 0], label: '-2', open: true },
          { t: 'point', p: [4, 0], label: '4' },
        ],
      },
      choices: ['$7$', '$6$', '$5$', 'Infinitely many'],
      answer: 1,
      solution:
        'The hollow circle at $-2$ and the filled dot at $4$ show $-2 < x \\le 4$. The integers are $-1, 0, 1, 2, 3, 4$ — six of them. Check both ends: $-2$ is excluded by the hollow circle ✓, and $4$ is included by the filled dot ✓. (The choice $7$ counts $-2$ as well; the choice $5$ leaves out $4$; the choice "Infinitely many" counts every number on the segment, but the question asks only for INTEGERS.)',
    },
    {
      q: 'How many integers lie in the solution set graphed below?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-1, 0], b: [5, 0], hl: true },
          { t: 'point', p: [-1, 0], label: '-1', open: true },
          { t: 'point', p: [5, 0], label: '5', open: true },
        ],
      },
      choices: ['$5$', '$6$', '$7$', '$4$'],
      answer: 0,
      solution:
        'Both circles are hollow, so the graph shows $-1 < x < 5$ and neither endpoint counts. The integers are $0, 1, 2, 3, 4$ — five of them. (The choice $6$ lets one hollow endpoint sneak in; the choice $7$ lets both in; the choice $4$ skips over $0$, which is an integer and a solution.)',
    },
    {
      q: 'The graph below shows a solution set. What is the smallest integer in it?',
      fig: {
        view: [-6, -1.5, 6, 1.5],
        elems: [
          { t: 'seg', a: [-6, 0], b: [6, 0] },
          { t: 'seg', a: [-3, 0], b: [2, 0], hl: true },
          { t: 'point', p: [-3, 0], label: '-3' },
          { t: 'point', p: [2, 0], label: '2', open: true },
        ],
      },
      choices: ['$-2$', '$1$', '$2$', '$-3$'],
      answer: 3,
      solution:
        'The filled dot at $-3$ and the hollow circle at $2$ show $-3 \\le x < 2$. The filled dot means $-3$ itself is a solution, and nothing smaller is, so the smallest integer is $-3$ ✓. (The choice $-2$ reads the filled dot as hollow; the choice $1$ gives the LARGEST integer instead of the smallest; the choice $2$ names the hollow endpoint, which is not even a solution.)',
    },
  ],
  // p10 — solve first, then match or describe the graph
  [
    {
      q: 'Which inequality has the SAME graph as $-3x - 12 \\le 0$?',
      choices: ['$x \\le -4$', '$x \\ge -4$', '$x \\ge 4$', '$x > -4$'],
      answer: 1,
      solution:
        'Add $12$ to both sides: $-3x \\le 12$. Divide by $-3$ and FLIP: $x \\ge -4$. So the graph is a filled dot at $-4$ shaded to the right. Check the endpoint, which should be included: $-3(-4) - 12 = 12 - 12 = 0 \\le 0$ ✓. Check outside with $x = -5$: $15 - 12 = 3 \\le 0$ is false ✓. (The choice $x \\le -4$ forgets the flip; the choice $x \\ge 4$ flips but drops the minus sign from $\\frac{12}{-3}$; the choice $x > -4$ empties a dot that should be filled.)',
    },
    {
      q: 'Which inequality has the same graph as $5 - x < 2$?',
      choices: ['$x < 3$', '$x < 7$', '$x > 3$', '$x \\ge 3$'],
      answer: 2,
      solution:
        'Subtract $5$: $-x < -3$. Divide by $-1$ and FLIP: $x > 3$. The graph is a hollow circle at $3$ shaded to the right. Check inside with $x = 4$: $5 - 4 = 1 < 2$ ✓. Check the endpoint, which should be outside: $5 - 3 = 2$, and $2 < 2$ is false ✓. (The choice $x < 3$ forgets the flip; the choice $x < 7$ adds $5$ to $2$ instead of subtracting and never flips; the choice $x \\ge 3$ fills in an endpoint that does not belong.)',
    },
    {
      q: 'Solving $4 - 2x \\ge 10$ gives a solution set. What does its graph look like?',
      choices: [
        'A closed dot at $-3$ with shading to the left',
        'An open dot at $-3$ with shading to the left',
        'A closed dot at $-3$ with shading to the right',
        'A closed dot at $3$ with shading to the left',
      ],
      answer: 0,
      solution:
        'Subtract $4$: $-2x \\ge 6$. Divide by $-2$ and FLIP: $x \\le -3$. The $\\le$ gives a CLOSED dot, and "less than" shades LEFT. Check the endpoint, which should be included: $4 - 2(-3) = 4 + 6 = 10 \\ge 10$ ✓. Check outside with $x = -2$: $4 + 4 = 8 \\ge 10$ is false ✓. (The second choice empties a dot that $\\le$ fills; the third choice forgets the flip and shades right; the fourth choice loses the minus sign in $\\frac{6}{-2}$ and puts the dot at $3$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 9,
  sections: { '9.3': s93, '9.4': s94 },
}
