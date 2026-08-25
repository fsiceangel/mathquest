// Prealgebra chapter 5 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.

const challenge = [
  // 1. Distributing two brackets and subtracting, minding every sign.
  [
    {
      q: 'Simplify $6(3x - 2) - 4(2x - 5)$.',
      choices: ['$10x - 32$', '$10x + 8$', '$26x + 8$', '$10x + 18$'],
      answer: 1,
      solution: 'Distribute each bracket: $6(3x - 2) = 18x - 12$, and $-4(2x - 5) = -8x + 20$ — a negative times a negative makes the $+20$. Combine: $18x - 8x = 10x$ and $-12 + 20 = 8$, giving $10x + 8$. (Making the last product $-20$ gives $10x - 32$; adding $18x$ and $8x$ instead of subtracting gives $26x + 8$; letting the $6$ skip the $-2$ gives $10x + 18$.)',
    },
    {
      q: 'Simplify $8(x - 5) - 3(2x - 6)$.',
      choices: ['$2x - 58$', '$14x - 22$', '$2x - 22$', '$2x + 22$'],
      answer: 2,
      solution: 'Distribute: $8(x - 5) = 8x - 40$, and $-3(2x - 6) = -6x + 18$. Combine: $8x - 6x = 2x$ and $-40 + 18 = -22$, so the answer is $2x - 22$. (Reading the second product as $-18$ gives $2x - 58$; adding the $x$-terms gives $14x - 22$; computing $40 - 18$ and keeping it positive gives $2x + 22$.)',
    },
    {
      q: 'Simplify $4(3x + 5) - 6(x - 2)$.',
      choices: ['$6x + 8$', '$18x + 32$', '$6x + 20$', '$6x + 32$'],
      answer: 3,
      solution: 'Distribute: $4(3x + 5) = 12x + 20$, and $-6(x - 2) = -6x + 12$. Combine: $12x - 6x = 6x$ and $20 + 12 = 32$, giving $6x + 32$. (Taking $-6 \\times -2$ as $-12$ gives $6x + 8$; adding $12x$ and $6x$ gives $18x + 32$; dropping that last product entirely gives $6x + 20$.)',
    },
  ],
  // 2. A whole expression sitting over a denominator.
  [
    {
      q: 'Solve $\\frac{2x + 5}{3} = 9$.',
      choices: ['$11$', '$6$', '$22$', '$-1$'],
      answer: 0,
      solution: 'The entire numerator is divided by $3$, so multiply both sides by $3$ first: $2x + 5 = 27$. Subtract $5$: $2x = 22$, so $x = 11$. Check: $\\frac{2 \\times 11 + 5}{3} = \\frac{27}{3} = 9$. ✓ (Peeling off the $5$ before clearing the fraction gives $6$; stopping at $2x = 22$ reports $22$; dividing by $3$ instead of multiplying gives $2x + 5 = 3$ and $x = -1$.)',
    },
    {
      q: 'Solve $\\frac{5x + 2}{4} = 8$.',
      choices: ['$\\frac{6}{5}$', '$6$', '$30$', '$\\frac{34}{5}$'],
      answer: 1,
      solution: 'Multiply both sides by $4$: $5x + 2 = 32$. Subtract $2$: $5x = 30$, so $x = 6$. Check: $\\frac{5 \\times 6 + 2}{4} = \\frac{32}{4} = 8$. ✓ (Forgetting to clear the fraction leaves $5x + 2 = 8$ and $x = \\frac{6}{5}$; stopping at $5x = 30$ reports $30$; adding the $2$ instead of subtracting gives $5x = 34$.)',
    },
    {
      q: 'Solve $\\frac{4x - 6}{5} = 6$.',
      choices: ['$6$', '$3$', '$36$', '$9$'],
      answer: 3,
      solution: 'Multiply both sides by $5$: $4x - 6 = 30$. The $6$ was subtracted, so ADD it back: $4x = 36$, giving $x = 9$. Check: $\\frac{4 \\times 9 - 6}{5} = \\frac{30}{5} = 6$. ✓ (Subtracting $6$ instead of adding gives $4x = 24$ and $x = 6$; skipping the multiply-by-$5$ step gives $4x - 6 = 6$ and $x = 3$; stopping at $4x = 36$ reports $36$.)',
    },
  ],
  // 3. Variables on both sides after distributing twice.
  [
    {
      q: 'Solve $5(x - 3) = 4(x + 2)$.',
      choices: ['$23$', '$7$', '$5$', '$-7$'],
      answer: 0,
      solution: 'Distribute both sides: $5x - 15 = 4x + 8$. Subtract $4x$: $x - 15 = 8$. Add $15$: $x = 23$. Check: $5(23 - 3) = 100$ and $4(23 + 2) = 100$. ✓ (Writing the right side as $4x - 8$ gives $7$; leaving the inside numbers undistributed, as $5x - 3 = 4x + 2$, gives $5$; subtracting $15$ at the last step instead of adding gives $-7$.)',
    },
    {
      q: 'Solve $6(x + 1) = 4(x + 5)$.',
      choices: ['$2$', '$13$', '$7$', '$14$'],
      answer: 2,
      solution: 'Distribute: $6x + 6 = 4x + 20$. Subtract $4x$: $2x + 6 = 20$. Subtract $6$: $2x = 14$, so $x = 7$. Check: $6(7 + 1) = 48$ and $4(7 + 5) = 48$. ✓ (Leaving the numbers inside alone, as $6x + 1 = 4x + 5$, gives $2$; adding the $6$ instead of subtracting gives $2x = 26$ and $13$; stopping at $2x = 14$ reports $14$.)',
    },
    {
      q: 'Solve $2(3x - 4) = 4(x + 3)$.',
      choices: ['$8$', '$-2$', '$20$', '$10$'],
      answer: 3,
      solution: 'Distribute: $6x - 8 = 4x + 12$. Subtract $4x$: $2x - 8 = 12$. Add $8$: $2x = 20$, so $x = 10$. Check: $2(3 \\times 10 - 4) = 52$ and $4(10 + 3) = 52$. ✓ (Letting the $2$ skip the $-4$ gives $6x - 4 = 4x + 12$ and $8$; writing the right side as $4x - 12$ gives $-2$; stopping at $2x = 20$ reports $20$.)',
    },
  ],
  // 4. Evaluating an expression where an exponent sits on only one factor.
  [
    {
      q: 'Evaluate $2m^2 + n$ when $m = 5$ and $n = -8$.',
      choices: ['$42$', '$92$', '$58$', '$12$'],
      answer: 0,
      solution: 'The exponent belongs to $m$ alone, so square first: $m^2 = 25$, then $2 \\times 25 = 50$. Now add $n$: $50 + (-8) = 42$. (Squaring $2m$ first gives $10^2 = 100$ and then $92$; reading $n$ as $+8$ gives $58$; mistaking $m^2$ for $2m = 10$ gives $20 - 8 = 12$.)',
    },
    {
      q: 'Evaluate $5p^2 - 4q$ when $p = 3$ and $q = 2$.',
      choices: ['$217$', '$37$', '$22$', '$43$'],
      answer: 1,
      solution: 'Exponent first: $p^2 = 9$, so $5p^2 = 45$. Then $4q = 8$, and $45 - 8 = 37$. (Squaring $5p$ first gives $15^2 = 225$ and then $217$; mistaking $p^2$ for $2p = 6$ gives $30 - 8 = 22$; dropping the coefficient $4$ and subtracting just $q$ gives $43$.)',
    },
    {
      q: 'Evaluate $c^2 - 3d$ when $c = -4$ and $d = 5$.',
      choices: ['$-31$', '$-23$', '$1$', '$65$'],
      answer: 2,
      solution: 'A negative squared is positive: $c^2 = (-4)^2 = 16$. Then $3d = 15$, so $16 - 15 = 1$. (Reporting $(-4)^2$ as $-16$ gives $-31$; mistaking $c^2$ for $2c = -8$ gives $-23$; subtracting before multiplying, as $(16 - 3) \\times 5$, gives $65$.)',
    },
  ],
  // 5. Translating a two-sided sentence into an equation.
  [
    {
      q: 'Four times a number, decreased by $5$, equals twice the number increased by $13$. What is the number?',
      choices: ['$9$', '$4$', '$18$', '$-4$'],
      answer: 0,
      solution: 'Let $n$ be the number: $4n - 5 = 2n + 13$. Subtract $2n$: $2n - 5 = 13$. Add $5$: $2n = 18$, so $n = 9$. Check: $4 \\times 9 - 5 = 31$ and $2 \\times 9 + 13 = 31$. ✓ (Subtracting the $5$ from the $13$ gives $2n = 8$ and $4$; stopping at $2n = 18$ reports $18$; reading the last phrase as "decreased by $13$" gives $-4$.)',
    },
    {
      q: 'Three times a number, increased by $4$, gives the same result as the number decreased by $10$. What is the number?',
      choices: ['$-3$', '$-7$', '$-14$', '$7$'],
      answer: 1,
      solution: 'Let $n$ be the number: $3n + 4 = n - 10$. Subtract $n$: $2n + 4 = -10$. Subtract $4$: $2n = -14$, so $n = -7$. Check: $3 \\times (-7) + 4 = -17$ and $-7 - 10 = -17$. ✓ (Adding the $4$ to the right side instead of subtracting gives $2n = -6$ and $-3$; stopping at $2n = -14$ reports $-14$; dropping the minus sign at the end gives $7$.)',
    },
    {
      q: 'Five times a number, decreased by $12$, equals three times the number increased by $8$. What is the number?',
      choices: ['$-2$', '$20$', '$\\frac{5}{2}$', '$10$'],
      answer: 3,
      solution: 'Let $n$ be the number: $5n - 12 = 3n + 8$. Subtract $3n$: $2n - 12 = 8$. Add $12$: $2n = 20$, so $n = 10$. Check: $5 \\times 10 - 12 = 38$ and $3 \\times 10 + 8 = 38$. ✓ (Subtracting $12$ from $8$ gives $2n = -4$ and $-2$; stopping at $2n = 20$ reports $20$; ADDING $3n$ to both sides gives $8n = 20$ and $\\frac{5}{2}$.)',
    },
  ],
  // 6. Runs of consecutive integers, with the question aimed off-center.
  [
    {
      q: 'Three consecutive ODD integers add up to $69$. What is the SMALLEST of them?',
      choices: ['$23$', '$21$', '$25$', '$22$'],
      answer: 1,
      solution: 'Odd neighbors hop by two, so let them be $n$, $n + 2$, $n + 4$. Then $3n + 6 = 69$, so $3n = 63$ and $n = 21$. The integers are $21$, $23$, $25$, and the smallest is $21$. Check: $21 + 23 + 25 = 69$. ✓ ($23$ is the middle one, which is also $69 \\div 3$; $25$ is the largest; $22$ comes from spacing them by one instead of two — and an even number can never be one of three odd integers.)',
    },
    {
      q: 'Four consecutive integers add up to $90$. What is the LARGEST of them?',
      choices: ['$21$', '$\\frac{45}{2}$', '$24$', '$25$'],
      answer: 2,
      solution: 'Let the smallest be $n$; the four are $n$, $n + 1$, $n + 2$, $n + 3$. Their sum is $4n + 6 = 90$, so $4n = 84$ and $n = 21$. The integers are $21, 22, 23, 24$, and the largest is $24$. Check: $21 + 22 + 23 + 24 = 90$. ✓ ($21$ is the smallest; $\\frac{45}{2}$ is $90 \\div 4$, which is not even an integer; $25$ comes from calling the fourth term $n + 4$ instead of $n + 3$.)',
    },
    {
      q: 'Three consecutive EVEN integers add up to $-18$. What is the LARGEST of them?',
      choices: ['$-6$', '$-8$', '$-5$', '$-4$'],
      answer: 3,
      solution: 'Let the integers be $n$, $n + 2$, $n + 4$. Then $3n + 6 = -18$, so $3n = -24$ and $n = -8$. The integers are $-8$, $-6$, $-4$, and the largest — the one furthest RIGHT on the number line — is $-4$. Check: $-8 + (-6) + (-4) = -18$. ✓ ($-6$ is the middle one; $-8$ is the smallest; spacing by one instead of two gives $-7, -6, -5$ and the answer $-5$, but those are not even.)',
    },
  ],
  // 7. Clearing two unlike denominators.
  [
    {
      q: 'Solve $\\frac{x}{3} - \\frac{x}{6} = 4$.',
      choices: ['$24$', '$8$', '$4$', '$72$'],
      answer: 0,
      solution: 'Multiply BOTH sides by $6$, the least common denominator: $2x - x = 24$, so $x = 24$. Check: $\\frac{24}{3} - \\frac{24}{6} = 8 - 4 = 4$. ✓ (Adding the fractions instead of subtracting gives $3x = 24$ and $8$; multiplying only the left side gives $x = 4$; using $18$ as the multiplier gives $3x = 72$, and stopping there reports $72$.)',
    },
    {
      q: 'Solve $\\frac{x}{4} + \\frac{x}{6} = 5$.',
      choices: ['$60$', '$12$', '$50$', '$1$'],
      answer: 1,
      solution: 'The least common denominator of $4$ and $6$ is $12$. Multiply both sides by $12$: $3x + 2x = 60$, so $5x = 60$ and $x = 12$. Check: $\\frac{12}{4} + \\frac{12}{6} = 3 + 2 = 5$. ✓ (Stopping at $5x = 60$ reports $60$; adding the denominators, as if the left side were $\\frac{x}{10}$, gives $50$; multiplying only the left side gives $5x = 5$ and $1$.)',
    },
    {
      q: 'Solve $\\frac{x}{2} - \\frac{x}{7} = 15$.',
      choices: ['$210$', '$75$', '$42$', '$3$'],
      answer: 2,
      solution: 'Since $2$ and $7$ share nothing, the least common denominator is $14$. Multiply both sides by $14$: $7x - 2x = 210$, so $5x = 210$ and $x = 42$. Check: $\\frac{42}{2} - \\frac{42}{7} = 21 - 6 = 15$. ✓ (Stopping at $5x = 210$ reports $210$; subtracting the denominators, as if the left side were $\\frac{x}{5}$, gives $75$; multiplying only the left side gives $5x = 15$ and $3$.)',
    },
  ],
  // 8. Inequalities where dividing by a negative flips the sign.
  [
    {
      q: 'Solve $-3x + 5 > 20$.',
      choices: ['$x < -5$', '$x > -5$', '$x < 5$', '$x > 5$'],
      answer: 0,
      solution: 'Subtract $5$ from both sides: $-3x > 15$. Now divide by $-3$ and FLIP the sign: $x < -5$. Check with $x = -6$: $-3 \\times (-6) + 5 = 23 > 20$. ✓ And the boundary fails: $x = -5$ gives exactly $20$. Skipping the flip gives $x > -5$, but $x = 0$ makes the left side just $5$. Losing the minus sign in the division gives $x < 5$ or $x > 5$, and $x = 0$ defeats both.',
    },
    {
      q: 'Solve $8 - 5x \\le -12$.',
      choices: ['$x \\le 4$', '$x \\ge -4$', '$x \\ge 4$', '$x \\le -4$'],
      answer: 2,
      solution: 'Subtract $8$ from both sides: $-5x \\le -20$. Divide by $-5$ and FLIP: $x \\ge 4$. Check the boundary $x = 4$: $8 - 20 = -12 \\le -12$ ✓, and $x = 5$ gives $-17 \\le -12$ ✓, while $x = 3$ gives $-7$, which is NOT $\\le -12$. Skipping the flip gives $x \\le 4$; mishandling the minus sign on the $-20$ gives $x \\ge -4$ or $x \\le -4$.',
    },
    {
      q: 'Solve $10 - 7x < -11$.',
      choices: ['$x < 3$', '$x < -3$', '$x > -3$', '$x > 3$'],
      answer: 3,
      solution: 'Subtract $10$: $-7x < -21$. Divide by $-7$ and FLIP the sign: $x > 3$. Check with $x = 4$: $10 - 28 = -18 < -11$ ✓; the boundary $x = 3$ gives exactly $-11$, which is not less than $-11$; and $x = 2$ gives $-4$, far too big. Forgetting the flip gives $x < 3$, and dropping the minus sign on the $-21$ gives $x < -3$ or $x > -3$.',
    },
  ],
  // 9. Age problems where both people age at once.
  [
    {
      q: 'Mr. Ito is $4$ times as old as his son Kenji. In $6$ years he will be only $3$ times as old as Kenji is then. How old is Kenji now?',
      choices: ['$18$', '$12$', '$48$', '$0$'],
      answer: 1,
      solution: 'Let Kenji be $k$ now, so Mr. Ito is $4k$. In $6$ years BOTH are older: $4k + 6 = 3(k + 6)$. Distribute: $4k + 6 = 3k + 18$, so $k = 12$. Check: Kenji is $12$ and his father is $48$; in $6$ years they are $18$ and $54$, and $54 = 3 \\times 18$. ✓ (Ageing only Kenji gives $4k = 3k + 18$ and $18$; $48$ is the father\'s age now; writing $3(k + 6)$ as $3k + 6$ gives the impossible age $0$.)',
    },
    {
      q: 'Rosa is $5$ times as old as her cousin Milo. In $4$ years Rosa will be $3$ times as old as Milo is then. How old is ROSA now?',
      choices: ['$4$', '$30$', '$20$', '$24$'],
      answer: 2,
      solution: 'Let Milo be $m$ now, so Rosa is $5m$. In $4$ years: $5m + 4 = 3(m + 4) = 3m + 12$. Subtract $3m$: $2m + 4 = 12$, so $2m = 8$ and $m = 4$. The question asks about ROSA: $5 \\times 4 = 20$. Check: $20$ and $4$ become $24$ and $8$, and $24 = 3 \\times 8$. ✓ ($4$ is Milo\'s age; ageing only Milo gives $5m = 3m + 12$, $m = 6$, and Rosa $30$; $24$ is Rosa\'s age in $4$ years.)',
    },
    {
      q: 'A mother is $6$ times as old as her daughter. In $9$ years she will be $3$ times as old as her daughter is then. How old is the DAUGHTER now?',
      choices: ['$36$', '$9$', '$15$', '$6$'],
      answer: 3,
      solution: 'Let the daughter be $d$ now, so her mother is $6d$. In $9$ years: $6d + 9 = 3(d + 9) = 3d + 27$. Subtract $3d$: $3d + 9 = 27$, so $3d = 18$ and $d = 6$. Check: $6$ and $36$ become $15$ and $45$, and $45 = 3 \\times 15$. ✓ ($36$ is the mother\'s age now; ageing only the daughter gives $6d = 3d + 27$ and $9$; $15$ is the daughter\'s age in $9$ years.)',
    },
  ],
  // 10. Counting the integers in a range, watching both endpoints.
  [
    {
      q: 'How many integers $x$ satisfy $-5 < x \\le 3$?',
      choices: ['$8$', '$9$', '$7$', '$4$'],
      answer: 0,
      solution: 'The left end is strict, so $-5$ is OUT; the right end allows equality, so $3$ is IN. List them: $-4, -3, -2, -1, 0, 1, 2, 3$ — that is $8$ integers. (Counting $-5$ as well gives $9$; dropping the $3$ gives $7$; listing only $0, 1, 2, 3$ and forgetting the negatives gives $4$.)',
    },
    {
      q: 'How many integers $x$ satisfy $-6 < x \\le -1$?',
      choices: ['$6$', '$5$', '$4$', '$7$'],
      answer: 1,
      solution: 'Here $-6$ is excluded (strict $<$) and $-1$ is included ($\\le$). The list is $-5, -4, -3, -2, -1$ — that is $5$ integers. Note that $0$ does NOT belong: $0$ is bigger than $-1$. (Counting $-6$ gives $6$; dropping $-1$ gives $4$; counting everything from $-6$ up to $0$ gives $7$.)',
    },
    {
      q: 'How many integers $x$ satisfy $-4 \\le x < 5$?',
      choices: ['$10$', '$8$', '$9$', '$5$'],
      answer: 2,
      solution: 'The $-4$ is included ($\\le$) but the $5$ is not (strict $<$). List them: $-4, -3, -2, -1, 0, 1, 2, 3, 4$ — that is $9$ integers, and do not skip $0$. (Counting $5$ as well gives $10$; dropping the $-4$ gives $8$; listing only $0$ through $4$ gives $5$.)',
    },
  ],
  // 11. A subtracted bracket, then variables on both sides.
  [
    {
      q: 'Solve $11 - 3(x - 2) = 4x + 3$.',
      choices: ['$2$', '$\\frac{2}{7}$', '$14$', '$\\frac{20}{7}$'],
      answer: 0,
      solution: 'Distribute the $-3$ across BOTH terms: $-3 \\times x = -3x$ and $-3 \\times (-2) = +6$, so the left side is $11 - 3x + 6 = 17 - 3x$. Now $17 - 3x = 4x + 3$. Add $3x$: $17 = 7x + 3$. Subtract $3$: $14 = 7x$, so $x = 2$. Check: $11 - 3(2 - 2) = 11$ and $4 \\times 2 + 3 = 11$. ✓ (Making that second product $-6$ gives $\\frac{2}{7}$; stopping at $14 = 7x$ reports $14$; adding the $3$ instead of subtracting gives $\\frac{20}{7}$.)',
    },
    {
      q: 'Solve $7 - 4(x - 3) = 2x - 5$.',
      choices: ['$0$', '$24$', '$4$', '$\\frac{7}{3}$'],
      answer: 2,
      solution: 'The $-4$ reaches both terms: $-4 \\times (-3) = +12$, so the left side is $7 - 4x + 12 = 19 - 4x$. Then $19 - 4x = 2x - 5$. Add $4x$: $19 = 6x - 5$. Add $5$: $24 = 6x$, so $x = 4$. Check: $7 - 4(4 - 3) = 3$ and $2 \\times 4 - 5 = 3$. ✓ (Making that product $-12$ gives $0$; stopping at $24 = 6x$ reports $24$; subtracting the $5$ instead of adding gives $14 = 6x$ and $\\frac{7}{3}$.)',
    },
    {
      q: 'Solve $6 - 2(x - 5) = 3x - 9$.',
      choices: ['$1$', '$25$', '$3$', '$5$'],
      answer: 3,
      solution: 'Distribute: $-2 \\times (-5) = +10$, so the left side is $6 - 2x + 10 = 16 - 2x$. Then $16 - 2x = 3x - 9$. Add $2x$ and add $9$: $25 = 5x$, so $x = 5$. Check: $6 - 2(5 - 5) = 6$ and $3 \\times 5 - 9 = 6$. ✓ (Making that product $-10$ gives $1$; stopping at $25 = 5x$ reports $25$; forgetting the $-5$ inside the bracket entirely gives $15 = 5x$ and $3$.)',
    },
  ],
  // 12. Per-item cost with a single fee or discount on the whole order.
  [
    {
      q: 'A scout troop buys T-shirts at $\\$12$ each. A sponsor takes $\\$24$ off the whole order, and the troop pays $\\$180$. How many T-shirts did the troop buy?',
      choices: ['$17$', '$13$', '$15$', '$5$'],
      answer: 0,
      solution: 'Let $s$ be the number of shirts: $12s - 24 = 180$. Add the $\\$24$ back: $12s = 204$, so $s = 17$. Check: $17 \\times \\$12 = \\$204$, and $\\$204 - \\$24 = \\$180$. ✓ (Subtracting the $\\$24$ instead of adding gives $12s = 156$ and $13$; ignoring the discount gives $180 \\div 12 = 15$; adding the discount onto the per-shirt price gives $180 \\div 36 = 5$.)',
    },
    {
      q: 'A craft site charges $\\$6$ per bead kit plus a single $\\$12$ shipping fee for the whole order. Priya\'s total was $\\$78$. How many bead kits did she buy?',
      choices: ['$15$', '$11$', '$13$', '$66$'],
      answer: 1,
      solution: 'Let $b$ be the number of kits: $6b + 12 = 78$. The fee is charged once, so take it off first: $6b = 66$, giving $b = 11$. Check: $11 \\times \\$6 = \\$66$, plus the $\\$12$ fee is $\\$78$. ✓ (Adding the fee instead of subtracting gives $6b = 90$ and $15$; ignoring the fee gives $78 \\div 6 = 13$; stopping at $6b = 66$ reports $66$.)',
    },
    {
      q: 'An entry pass to a fair costs $\\$12$, and every ride ticket costs the same amount. Nadia pays $\\$54$ for the pass plus $6$ ride tickets. How much does ONE ride ticket cost?',
      choices: ['$\\$9$', '$\\$11$', '$\\$42$', '$\\$7$'],
      answer: 3,
      solution: 'This time the unknown is the price, not the count. Let $t$ be the cost of one ticket: $12 + 6t = 54$. Subtract the pass: $6t = 42$, so $t = \\$7$. Check: $6 \\times \\$7 = \\$42$, plus the $\\$12$ pass is $\\$54$. ✓ (Ignoring the pass gives $54 \\div 6 = \\$9$; adding the pass instead of subtracting gives $66 \\div 6 = \\$11$; stopping at $6t = 42$ reports $\\$42$.)',
    },
  ],
]

const worksheet = [
  // 1. Evaluating a two-operation expression.
  [
    {
      q: 'Evaluate $9y + 4$ when $y = 7$.',
      answer: '$67$',
      solution: 'Substitute and multiply before adding: $9 \\times 7 + 4 = 63 + 4 = 67$.',
    },
    {
      q: 'Evaluate $8 - 3k$ when $k = 5$.',
      answer: '$-7$',
      solution: 'Multiply first: $3k = 3 \\times 5 = 15$. Then $8 - 15 = -7$. Taking a bigger number away from a smaller one lands below zero.',
    },
    {
      q: 'Evaluate $6n - 11$ when $n = 4$.',
      answer: '$13$',
      solution: 'Substitute $n = 4$: $6 \\times 4 - 11 = 24 - 11 = 13$.',
    },
  ],
  // 2. Combining like terms scattered through an expression.
  [
    {
      q: 'Simplify $9b - 4 + 3b + 10$.',
      answer: '$12b + 6$',
      solution: 'Gather the $b$-terms: $9b + 3b = 12b$. Gather the plain numbers: $-4 + 10 = 6$. Result: $12b + 6$.',
    },
    {
      q: 'Simplify $5y + 14 - 9y + 2$.',
      answer: '$-4y + 16$',
      solution: 'The $y$-terms give $5y - 9y = -4y$ — subtracting a bigger coefficient leaves a negative one. The numbers give $14 + 2 = 16$. Result: $-4y + 16$.',
    },
    {
      q: 'Simplify $2c + 7 + 6c - 15$.',
      answer: '$8c - 8$',
      solution: 'Combine the $c$-terms: $2c + 6c = 8c$. Combine the numbers: $7 - 15 = -8$. Result: $8c - 8$.',
    },
  ],
  // 3. One-step equations with addition or subtraction.
  [
    {
      q: 'Solve $x + 26 = 63$.',
      answer: '$x = 37$',
      solution: 'Subtract $26$ from both sides: $x = 63 - 26 = 37$. Check: $37 + 26 = 63$. ✓',
    },
    {
      q: 'Solve $y - 19 = 34$.',
      answer: '$y = 53$',
      solution: 'The $y$ had $19$ subtracted from it, so ADD $19$ to both sides: $y = 34 + 19 = 53$. Check: $53 - 19 = 34$. ✓',
    },
    {
      q: 'Solve $x + 48 = 35$.',
      answer: '$x = -13$',
      solution: 'Subtract $48$ from both sides: $x = 35 - 48 = -13$. The right side is smaller than the number being added, so the answer sits below zero. Check: $-13 + 48 = 35$. ✓',
    },
  ],
  // 4. Two-step equations.
  [
    {
      q: 'Solve $7x - 9 = 40$.',
      answer: '$x = 7$',
      solution: 'Add $9$ to both sides: $7x = 49$. Divide by $7$: $x = 7$. Check: $7 \\times 7 - 9 = 49 - 9 = 40$. ✓',
    },
    {
      q: 'Solve $4x + 13 = 45$.',
      answer: '$x = 8$',
      solution: 'Subtract $13$ from both sides: $4x = 32$. Divide by $4$: $x = 8$. Check: $4 \\times 8 + 13 = 32 + 13 = 45$. ✓',
    },
    {
      q: 'Solve $9x - 23 = 22$.',
      answer: '$x = 5$',
      solution: 'Add $23$ to both sides: $9x = 45$. Divide by $9$: $x = 5$. Check: $9 \\times 5 - 23 = 45 - 23 = 22$. ✓',
    },
  ],
  // 5. Variables on both sides, one step of gathering.
  [
    {
      q: 'Solve $11x = 6x + 45$.',
      answer: '$x = 9$',
      solution: 'Subtract $6x$ from both sides: $5x = 45$, so $x = 9$. Check: $11 \\times 9 = 99$ and $6 \\times 9 + 45 = 54 + 45 = 99$. ✓',
    },
    {
      q: 'Solve $8x - 30 = 3x$.',
      answer: '$x = 6$',
      solution: 'Subtract $3x$ from both sides: $5x - 30 = 0$. Add $30$: $5x = 30$, so $x = 6$. Check: $8 \\times 6 - 30 = 18$ and $3 \\times 6 = 18$. ✓',
    },
    {
      q: 'Solve $13x = 6x + 56$.',
      answer: '$x = 8$',
      solution: 'Subtract $6x$ from both sides: $7x = 56$, so $x = 8$. Check: $13 \\times 8 = 104$ and $6 \\times 8 + 56 = 48 + 56 = 104$. ✓',
    },
  ],
  // 6. One-step inequality, described in words.
  [
    {
      q: 'Solve $x + 6 \\le 10$, and describe the solutions in words.',
      answer: '$x \\le 4$ — all numbers less than or equal to $4$',
      solution: 'Subtract $6$ from both sides: $x \\le 4$. Subtracting never flips the sign, and the "or equal" travels along too — $x = 4$ works, since $4 + 6 = 10 \\le 10$. ✓ Anything above $4$ fails: $x = 5$ gives $11$.',
    },
    {
      q: 'Solve $x - 12 \\ge -3$, and describe the solutions in words.',
      answer: '$x \\ge 9$ — all numbers greater than or equal to $9$',
      solution: 'Add $12$ to both sides: $x \\ge -3 + 12 = 9$. Adding never flips the sign. Check the boundary: $9 - 12 = -3 \\ge -3$ ✓, while $x = 8$ gives $-4$, which is too small.',
    },
    {
      q: 'Solve $x + 9 < 5$, and describe the solutions in words.',
      answer: '$x < -4$ — all numbers less than $-4$',
      solution: 'Subtract $9$ from both sides: $x < 5 - 9 = -4$. Every number below $-4$ works — try $x = -5$, giving $4 < 5$ ✓ — but $-4$ itself does not, since $-4 + 9 = 5$ is not LESS than $5$.',
    },
  ],
  // 7. Clearing two denominators.
  [
    {
      q: 'Solve $\\frac{x}{2} + \\frac{x}{5} = 14$.',
      answer: '$x = 20$',
      solution: 'Multiply both sides by $10$, the least common denominator: $5x + 2x = 140$, so $7x = 140$ and $x = 20$. Check: $\\frac{20}{2} + \\frac{20}{5} = 10 + 4 = 14$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{4} + \\frac{x}{6} = 15$.',
      answer: '$x = 36$',
      solution: 'The least common denominator of $4$ and $6$ is $12$. Multiply both sides by $12$: $3x + 2x = 180$, so $5x = 180$ and $x = 36$. Check: $\\frac{36}{4} + \\frac{36}{6} = 9 + 6 = 15$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{2} - \\frac{x}{6} = 9$.',
      answer: '$x = 27$',
      solution: 'Multiply both sides by $6$: $3x - x = 54$, so $2x = 54$ and $x = 27$. Check: $\\frac{27}{2} - \\frac{27}{6} = 13.5 - 4.5 = 9$. ✓',
    },
  ],
  // 8. Consecutive integers with a given sum.
  [
    {
      q: 'Two consecutive EVEN integers add up to $86$. Find both integers.',
      answer: '$42$ and $44$',
      solution: 'Even neighbors hop by two: let them be $n$ and $n + 2$. Then $2n + 2 = 86$, so $2n = 84$ and $n = 42$. The integers are $42$ and $44$. Check: $42 + 44 = 86$, and both are even. ✓',
    },
    {
      q: 'Three consecutive integers add up to $72$. Find all three.',
      answer: '$23$, $24$, and $25$',
      solution: 'Let the smallest be $n$; the three are $n$, $n + 1$, $n + 2$. Their sum is $3n + 3 = 72$, so $3n = 69$ and $n = 23$. The integers are $23$, $24$, $25$. Check: $23 + 24 + 25 = 72$. ✓',
    },
    {
      q: 'Two consecutive ODD integers add up to $-24$. Find both integers.',
      answer: '$-13$ and $-11$',
      solution: 'Odd neighbors hop by two: let them be $n$ and $n + 2$. Then $2n + 2 = -24$, so $2n = -26$ and $n = -13$. The integers are $-13$ and $-11$. Check: $-13 + (-11) = -24$, and both are odd. ✓ Remember that the NEXT odd integer after $-13$ is $-11$, moving right along the number line.',
    },
  ],
  // 9. Distribute, then gather variables on both sides.
  [
    {
      q: 'Solve $3(2x + 5) = 5x + 22$.',
      answer: '$x = 7$',
      solution: 'Distribute: $6x + 15 = 5x + 22$. Subtract $5x$: $x + 15 = 22$, so $x = 7$. Check: $3(2 \\times 7 + 5) = 3 \\times 19 = 57$ and $5 \\times 7 + 22 = 57$. ✓',
    },
    {
      q: 'Solve $4(x - 3) = 2x + 8$.',
      answer: '$x = 10$',
      solution: 'Distribute: $4x - 12 = 2x + 8$. Subtract $2x$: $2x - 12 = 8$. Add $12$: $2x = 20$, so $x = 10$. Check: $4(10 - 3) = 28$ and $2 \\times 10 + 8 = 28$. ✓',
    },
    {
      q: 'Solve $5(2x - 3) = 8x + 11$.',
      answer: '$x = 13$',
      solution: 'Distribute, letting the $5$ reach the $-3$: $10x - 15 = 8x + 11$. Subtract $8x$: $2x - 15 = 11$. Add $15$: $2x = 26$, so $x = 13$. Check: $5(2 \\times 13 - 3) = 5 \\times 23 = 115$ and $8 \\times 13 + 11 = 115$. ✓',
    },
  ],
  // 10. Flip the sign, then count the positive integer solutions.
  [
    {
      q: 'Solve $9 - 2x \\ge -5$, then count how many POSITIVE integers are solutions.',
      answer: '$x \\le 7$; there are $7$ positive integer solutions',
      solution: 'Subtract $9$: $-2x \\ge -14$. Divide by $-2$ and FLIP the sign: $x \\le 7$. The positive integers that qualify are $1, 2, 3, 4, 5, 6, 7$ — seven of them. Check the boundary: $9 - 2 \\times 7 = -5 \\ge -5$ ✓, while $x = 8$ gives $-7$, which is too small.',
    },
    {
      q: 'Solve $4 - 6x > -32$, then count how many POSITIVE integers are solutions.',
      answer: '$x < 6$; there are $5$ positive integer solutions',
      solution: 'Subtract $4$: $-6x > -36$. Divide by $-6$ and FLIP the sign: $x < 6$. The sign is STRICT, so $6$ itself is out: the positive integers are $1, 2, 3, 4, 5$ — five of them. Check: $x = 5$ gives $4 - 30 = -26 > -32$ ✓, but $x = 6$ gives exactly $-32$, which is not greater than $-32$.',
    },
    {
      q: 'Solve $15 - 4x \\ge 3$, then count how many POSITIVE integers are solutions.',
      answer: '$x \\le 3$; there are $3$ positive integer solutions',
      solution: 'Subtract $15$: $-4x \\ge -12$. Divide by $-4$ and FLIP the sign: $x \\le 3$. The positive integers are $1, 2, 3$ — three of them. Check the boundary: $15 - 4 \\times 3 = 3 \\ge 3$ ✓, while $x = 4$ gives $-1$, which is not $\\ge 3$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 5,
  challenge,
  worksheet,
}
