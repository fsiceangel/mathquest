// Introduction to Algebra chapter 3 — variations for the chapter challenge and
// the chapter worksheet. All problems and solutions are original MathQuest
// content.
//
// Every solution below was substituted back into its own ORIGINAL equation with
// exact fraction arithmetic, every choice was compared with the other three by
// VALUE (not by the string that prints it), and every named wrong method was
// carried out to the end to be sure it never lands on the correct answer.

const challenge = [
  // 1. Distribute two groups, combine like terms, then solve.
  [
    {
      q: 'Solve $4(x - 3) + 2(x + 7) = 38$.',
      choices: ['$x = \\frac{20}{3}$', '$x = \\frac{9}{2}$', '$x = 6$', '$x = 36$'],
      answer: 2,
      solution: 'Distribute each group before combining anything: $4(x-3) = 4x - 12$ and $2(x+7) = 2x + 14$. So the left side is $4x - 12 + 2x + 14 = 6x + 2$. Now solve $6x + 2 = 38$: subtract $2$ to get $6x = 36$, then divide by $6$ to get $x = 6$. Check in the original: $4(6-3) + 2(6+7) = 4 \\cdot 3 + 2 \\cdot 13 = 12 + 26 = 38$. ✓ ($\\frac{20}{3}$ comes from combining $-12 + 14$ as $-2$, which gives $6x = 40$; $\\frac{9}{2}$ comes from writing $4(x-3) = 4x - 3$, distributing to the $x$ only, which gives $6x + 11 = 38$; $36$ is the value of $6x$, one division short of the answer.)',
    },
    {
      q: 'Solve $5(x + 2) + 3(x - 6) = 32$.',
      choices: ['$x = 5$', '$x = 3$', '$x = \\frac{7}{2}$', '$x = 6$'],
      answer: 0,
      solution: 'Distribute: $5(x+2) = 5x + 10$ and $3(x-6) = 3x - 18$. The left side is $5x + 10 + 3x - 18 = 8x - 8$. Solve $8x - 8 = 32$: add $8$ to get $8x = 40$, so $x = 5$. Check: $5(5+2) + 3(5-6) = 35 + 3(-1) = 35 - 3 = 32$. ✓ ($3$ comes from combining $10 - 18$ as $+8$; $\\frac{7}{2}$ comes from writing $3(x-6) = 3x - 6$, multiplying only the $x$ and copying the $6$; $6$ comes from writing $5(x+2) = 5x + 2$, which leaves $8x - 16 = 32$.)',
    },
    {
      q: 'Solve $6(x - 1) + 4(x + 3) = 76$.',
      choices: ['$x = \\frac{13}{2}$', '$x = \\frac{41}{5}$', '$x = 70$', '$x = 7$'],
      answer: 3,
      solution: 'Distribute both groups: $6x - 6 + 4x + 12 = 10x + 6$. Solve $10x + 6 = 76$: subtract $6$ to get $10x = 70$, so $x = 7$. Check: $6(7-1) + 4(7+3) = 36 + 40 = 76$. ✓ ($\\frac{13}{2}$ comes from writing $6(x-1) = 6x - 1$, so the constants read $-1 + 12 = 11$ and $10x = 65$; $\\frac{41}{5}$ comes from dropping the $+12$ altogether, writing $4(x+3) = 4x$, which leaves $10x = 82$; $70$ is the value of $10x$, not of $x$.)',
    },
  ],
  // 2. A proportion whose numerators are binomials — cross-multiply with parentheses.
  [
    {
      q: 'Solve $\\frac{3x + 2}{4} = \\frac{x + 7}{3}$.',
      choices: ['$x = 1$', '$x = \\frac{13}{9}$', '$x = \\frac{22}{5}$', '$x = \\frac{34}{5}$'],
      answer: 2,
      solution: 'Cross-multiply, wrapping each whole numerator in parentheses: $3(3x + 2) = 4(x + 7)$. Distribute: $9x + 6 = 4x + 28$. Subtract $4x$ and $6$: $5x = 22$, so $x = \\frac{22}{5}$. Check: the left side is $\\frac{3 \\cdot \\frac{22}{5} + 2}{4} = \\frac{\\frac{76}{5}}{4} = \\frac{19}{5}$, and the right side is $\\frac{\\frac{22}{5} + 7}{3} = \\frac{\\frac{57}{5}}{3} = \\frac{19}{5}$. ✓ ($1$ comes from cross-multiplying only the first term of each numerator, $9x + 2 = 4x + 7$; $\\frac{13}{9}$ comes from multiplying each numerator by its OWN denominator, $4(3x+2) = 3(x+7)$; $\\frac{34}{5}$ moves the $+6$ across as an addition, giving $5x = 28 + 6$.)',
    },
    {
      q: 'Solve $\\frac{2x + 7}{5} = \\frac{3x - 1}{4}$.',
      choices: ['$x = \\frac{8}{7}$', '$x = \\frac{33}{7}$', '$x = \\frac{39}{2}$', '$x = \\frac{23}{7}$'],
      answer: 1,
      solution: 'Cross-multiply with parentheses: $4(2x + 7) = 5(3x - 1)$, so $8x + 28 = 15x - 5$. Subtract $8x$ and add $5$: $33 = 7x$, giving $x = \\frac{33}{7}$. Check: $\\frac{2 \\cdot \\frac{33}{7} + 7}{5} = \\frac{\\frac{115}{7}}{5} = \\frac{23}{7}$, and $\\frac{3 \\cdot \\frac{33}{7} - 1}{4} = \\frac{\\frac{92}{7}}{4} = \\frac{23}{7}$. ✓ ($\\frac{8}{7}$ cross-multiplies only the leading terms, $8x + 7 = 15x - 1$; $\\frac{39}{2}$ multiplies each numerator by its own denominator, $5(2x+7) = 4(3x-1)$; $\\frac{23}{7}$ drops the minus sign, using $5(3x-1) = 15x + 5$ — notice it is exactly the value BOTH sides take at the real answer, which is why it looks so tempting.)',
    },
    {
      q: 'Solve $\\frac{x - 4}{2} = \\frac{2x + 3}{5}$.',
      choices: ['$x = 7$', '$x = -\\frac{23}{8}$', '$x = -14$', '$x = 26$'],
      answer: 3,
      solution: 'Cross-multiply: $5(x - 4) = 2(2x + 3)$, so $5x - 20 = 4x + 6$. Subtract $4x$ and add $20$: $x = 26$. Check: $\\frac{26 - 4}{2} = 11$ and $\\frac{52 + 3}{5} = \\frac{55}{5} = 11$. ✓ ($7$ comes from cross-multiplying only the first terms, $5x - 4 = 4x + 3$; $-\\frac{23}{8}$ multiplies each numerator by its own denominator, $2(x-4) = 5(2x+3)$; $-14$ comes from $5(x-4) = 5x + 20$, losing the minus sign on the $4$.)',
    },
  ],
  // 3. Consecutive integers — centre the variable, then answer the term asked for.
  [
    {
      q: 'The sum of five consecutive even integers is $130$. What is the middle one?',
      choices: ['$22$', '$24$', '$30$', '$26$'],
      answer: 3,
      solution: 'Call the middle integer $m$. Consecutive even integers step by $2$, so the five are $m-4$, $m-2$, $m$, $m+2$, $m+4$. The four offsets cancel in pairs and the sum telescopes to $5m = 130$, so $m = 26$. Check: $22 + 24 + 26 + 28 + 30 = 130$. ✓ ($22$ is the SMALLEST of the five, which is what you get from naming them $n, n+2, \\ldots, n+8$ and then reporting $n$; $24$ is that same $n + 2$, one term short of the middle of a five-term list; $30$ is the largest.)',
    },
    {
      q: 'Five consecutive odd integers add up to $205$. What is the largest of them?',
      choices: ['$45$', '$41$', '$37$', '$43$'],
      answer: 0,
      solution: 'Centre on the middle integer $m$: odd integers also step by $2$, so the five are $m-4, m-2, m, m+2, m+4$ and the sum is $5m = 205$, giving $m = 41$. The largest is $m + 4 = 45$. Check: $37 + 39 + 41 + 43 + 45 = 205$. ✓ ($41$ stops at the middle instead of the largest; $37$ is the smallest; $43$ is the fourth one, an off-by-one slip when counting up from the middle.)',
    },
    {
      q: 'The sum of four consecutive odd integers is $80$. What is the smallest of them?',
      choices: ['$19$', '$20$', '$17$', '$23$'],
      answer: 2,
      solution: 'With an even number of terms there is no middle one, so name them from the bottom: $n$, $n+2$, $n+4$, $n+6$. Their sum is $4n + 12 = 80$, so $4n = 68$ and $n = 17$. Check: $17 + 19 + 21 + 23 = 80$. ✓ ($20$ is $80 \\div 4$, the AVERAGE of the four — it sits in the middle of the list and is not even odd; $19$ is the second integer; $23$ is the largest.)',
    },
  ],
  // 4. A negative multiplier in front of a parenthesis.
  [
    {
      q: 'Solve $9 - 3(2x - 5) = 4x - 6$.',
      choices: ['$x = 0$', '$x = 3$', '$x = 1$', '$x = -15$'],
      answer: 1,
      solution: 'Distribute the $-3$ to BOTH terms inside, and remember that $-3 \\cdot (-5) = +15$: $9 - 6x + 15 = 24 - 6x$. The equation is $24 - 6x = 4x - 6$. Add $6x$ and $6$: $30 = 10x$, so $x = 3$. Check: $9 - 3(6-5) = 9 - 3 = 6$ and $4(3) - 6 = 6$. ✓ ($0$ comes from $-3 \\cdot (-5) = -15$, which turns the left side into $-6 - 6x$; $1$ comes from distributing to the $x$ only, $9 - 6x - 5$; $-15$ comes from subtracting $6x$ from the right side instead of adding it, $30 = -2x$.)',
    },
    {
      q: 'Solve $12 - 4(x - 3) = 2x + 12$.',
      choices: ['$x = -2$', '$x = 6$', '$x = 2$', '$x = -\\frac{1}{2}$'],
      answer: 2,
      solution: 'Distribute: $12 - 4x + 12 = 24 - 4x$, since $-4 \\cdot (-3) = +12$. Now $24 - 4x = 2x + 12$. Add $4x$ and subtract $12$: $12 = 6x$, so $x = 2$. Check: $12 - 4(2-3) = 12 + 4 = 16$ and $2(2) + 12 = 16$. ✓ ($-2$ comes from $-4 \\cdot (-3) = -12$, leaving $-4x = 2x + 12$; $-\\frac{1}{2}$ comes from distributing to the $x$ only, $12 - 4x - 3$; $6$ comes from forgetting to negate the $x$ term as well, writing $12 + 4x - 12 = 4x$.)',
    },
    {
      q: 'Solve $5 - 2(4x - 3) = 6x - 3$.',
      choices: ['$x = 1$', '$x = \\frac{1}{7}$', '$x = \\frac{5}{14}$', '$x = -1$'],
      answer: 0,
      solution: 'Distribute the $-2$: $5 - 8x + 6 = 11 - 8x$, because $-2 \\cdot (-3) = +6$. Solve $11 - 8x = 6x - 3$: add $8x$ and $3$ to get $14 = 14x$, so $x = 1$. Check: $5 - 2(4-3) = 5 - 2 = 3$ and $6(1) - 3 = 3$. ✓ ($\\frac{1}{7}$ comes from $-2 \\cdot (-3) = -6$, giving $-1 - 8x = 6x - 3$; $\\frac{5}{14}$ comes from distributing to the $x$ only, $5 - 8x - 3$; $-1$ comes from gathering the $x$ terms on the wrong side, $14 = -14x$.)',
    },
  ],
  // 5. Variables in the denominators — cross-multiply, then check the exclusions.
  [
    {
      q: 'Solve $\\frac{3}{x + 4} = \\frac{7}{2x}$.',
      choices: ['$x = -4$', '$x = \\frac{12}{11}$', '$x = 28$', '$x = -28$'],
      answer: 3,
      solution: 'First the excluded values: $x \\neq -4$ and $x \\neq 0$, since either would put a $0$ downstairs. Cross-multiply: $3 \\cdot 2x = 7(x + 4)$, so $6x = 7x + 28$ and $-x = 28$, giving $x = -28$. That is not excluded, so it is genuine. Check: $\\frac{3}{-28 + 4} = \\frac{3}{-24} = -\\frac{1}{8}$ and $\\frac{7}{2(-28)} = \\frac{7}{-56} = -\\frac{1}{8}$. ✓ ($-4$ comes from writing $6x = 7x + 4$, forgetting that the $7$ multiplies the $4$ too — and it is an EXCLUDED value, so it could not have been a solution even if the algebra had been right; $\\frac{12}{11}$ multiplies each numerator by its own denominator, $3(x+4) = 14x$; $28$ loses the minus sign in the last step.)',
    },
    {
      q: 'Solve $\\frac{5}{x - 2} = \\frac{3}{x + 6}$.',
      choices: ['$x = -18$', '$x = -4$', '$x = -12$', '$x = 3$'],
      answer: 0,
      solution: 'Excluded values: $x \\neq 2$ and $x \\neq -6$. Cross-multiply: $5(x + 6) = 3(x - 2)$, so $5x + 30 = 3x - 6$. Subtract $3x$ and $30$: $2x = -36$, giving $x = -18$. Check: $\\frac{5}{-18-2} = \\frac{5}{-20} = -\\frac{1}{4}$ and $\\frac{3}{-18+6} = \\frac{3}{-12} = -\\frac{1}{4}$. ✓ ($-4$ comes from skipping the distribution, $5x + 6 = 3x - 2$; $-12$ comes from $3(x-2) = 3x + 6$, losing the minus sign; $3$ comes from ADDING $3x$ to both sides instead of subtracting it, $8x = 24$.)',
    },
    {
      q: 'Solve $\\frac{4}{3x} = \\frac{6}{x + 10}$.',
      choices: ['$x = \\frac{5}{7}$', '$x = 20$', '$x = \\frac{20}{7}$', '$x = 10$'],
      answer: 2,
      solution: 'Excluded values: $x \\neq 0$ and $x \\neq -10$. Cross-multiply: $4(x + 10) = 6 \\cdot 3x = 18x$, so $4x + 40 = 18x$ and $40 = 14x$, giving $x = \\frac{20}{7}$. Check: $3x = \\frac{60}{7}$, so the left side is $4 \\div \\frac{60}{7} = \\frac{28}{60} = \\frac{7}{15}$; and $x + 10 = \\frac{90}{7}$, so the right side is $6 \\div \\frac{90}{7} = \\frac{42}{90} = \\frac{7}{15}$. ✓ ($\\frac{5}{7}$ skips the distribution, $4x + 10 = 18x$; $20$ ignores the $3$ in the denominator $3x$ and solves $4(x+10) = 6x$; $10$ multiplies each numerator by its own denominator, $12x = 6(x+10)$.)',
    },
  ],
  // 6. Classify the ending: identity, contradiction, or a single solution.
  [
    {
      q: 'How many solutions does $5(x - 3) + 8 = 5x - 7$ have?',
      choices: ['Exactly one, $x = 0$', 'No solution — the two sides can never be equal', 'Every value of $x$ is a solution', 'Exactly two solutions'],
      answer: 2,
      solution: 'Simplify the left side: $5(x-3) + 8 = 5x - 15 + 8 = 5x - 7$. That is character-for-character the right side, so the equation is an identity and EVERY number works. Try $x = 4$: left $5(1) + 8 = 13$, right $20 - 7 = 13$. Try $x = -2$: left $5(-5) + 8 = -17$, right $-10 - 7 = -17$. ✓ (The "no solution" choice comes from combining $-15 + 8$ as $-23$, which would leave the false statement $-23 = -7$; "exactly one, $x = 0$" comes from subtracting $5x$ from the left side only, leaving $-7 = 5x - 7$; and a linear equation can never have exactly two solutions — its two sides are straight lines, which meet once, never, or everywhere.)',
    },
    {
      q: 'How many solutions does $3(2x + 5) = 6x - 4$ have?',
      choices: ['Infinitely many solutions', 'Exactly one solution, $x = \\frac{19}{3}$', 'Exactly one solution, $x = 0$', 'No solution'],
      answer: 3,
      solution: 'Distribute: $6x + 15 = 6x - 4$. Subtract $6x$ from both sides and the variable vanishes, leaving $15 = -4$ — a statement that is false no matter what $x$ is. So no number can balance this equation: it has no solution. ($\\frac{19}{3}$ comes from $3(2x+5) = 3x + 15$, multiplying only the constant, which leaves the solvable $3x + 15 = 6x - 4$; "$x = 0$" comes from reading a vanished variable as "$x$ must be zero" — but $x = 0$ gives $15$ on the left and $-4$ on the right, so it fails too; "infinitely many" comes from noticing that the $x$ terms match and stopping there, without checking that the constants match as well.)',
    },
    {
      q: 'How many solutions does $4(x + 3) - 2 = 2(x + 5)$ have?',
      choices: ['No solution', 'Exactly one solution, $x = 0$', 'Infinitely many solutions', 'Exactly one solution, $x = -1$'],
      answer: 1,
      solution: 'Simplify each side. Left: $4x + 12 - 2 = 4x + 10$. Right: $2x + 10$. So $4x + 10 = 2x + 10$; subtract $2x$ and $10$ to get $2x = 0$, so $x = 0$. Check: left $4(0+3) - 2 = 10$, right $2(0+5) = 10$. ✓ Zero is a perfectly good solution, and there is exactly ONE of it. ("No solution" mistakes an answer of $0$ for no answer at all; "infinitely many" comes from seeing the matching constants $+10$ and declaring an identity, even though the $x$ coefficients differ; $x = -1$ comes from dropping the $-2$ and solving $4x + 12 = 2x + 10$.)',
    },
  ],
  // 7. Ages: everybody moves through time together.
  [
    {
      q: 'A mother is $24$ years older than her son. In $3$ years she will be exactly four times as old as he is. How old is the son now?',
      choices: ['$8$', '$9$', '$5$', '$29$'],
      answer: 2,
      solution: 'Let $s$ be the son’s age now, so the mother is $s + 24$. In $3$ years BOTH are older: the son is $s + 3$ and the mother is $s + 27$. The condition gives $s + 27 = 4(s + 3) = 4s + 12$, so $15 = 3s$ and $s = 5$. Check: today they are $5$ and $29$; in three years they are $8$ and $32$, and $32 = 4 \\times 8$. ✓ ($8$ is the son’s age in three years, not now; $29$ is the mother’s age; $9$ comes from ageing only the mother, $s + 27 = 4s$, which forgets that the son has a birthday too.)',
    },
    {
      q: 'Ravi is $30$ years older than his niece. In $6$ years he will be exactly three times as old as she is. How old is Ravi now?',
      choices: ['$39$', '$9$', '$45$', '$48$'],
      answer: 0,
      solution: 'Let $n$ be the niece’s age now, so Ravi is $n + 30$. In $6$ years they are $n + 6$ and $n + 36$, and the condition is $n + 36 = 3(n + 6) = 3n + 18$. Then $18 = 2n$, so $n = 9$ and Ravi is $9 + 30 = 39$. Check: in six years they are $15$ and $45$, and $45 = 3 \\times 15$. ✓ ($9$ is the niece’s age — read the question to the end; $45$ is Ravi’s age in six years; $48$ comes from ageing only Ravi, $n + 36 = 3n$, which gives $n = 18$ and Ravi $= 48$.)',
    },
    {
      q: 'Kofi is $9$ and his aunt is $45$. In how many years will his aunt be exactly three times as old as Kofi?',
      choices: ['$6$', '$18$', '$5$', '$9$'],
      answer: 3,
      solution: 'In $n$ years Kofi is $9 + n$ and his aunt is $45 + n$. Set up $45 + n = 3(9 + n) = 27 + 3n$, so $18 = 2n$ and $n = 9$. Check: in nine years they are $18$ and $54$, and $54 = 3 \\times 18$. ✓ ($6$ comes from ageing Kofi but not his aunt, $45 = 3(9+n)$; $18$ is Kofi’s age at that moment, not the number of years to wait; $5$ is how many times as old she is TODAY, since $45 = 5 \\times 9$ — a different question entirely.)',
    },
  ],
  // 8. Clearing denominators when one fraction is SUBTRACTED.
  [
    {
      q: 'Solve $\\frac{x}{3} - \\frac{x - 6}{4} = 1$.',
      choices: ['$x = -6$', '$x = 18$', '$x = 30$', '$x = -17$'],
      answer: 0,
      solution: 'Multiply EVERY term by the common denominator $12$: $4x - 3(x - 6) = 12$. Distribute carefully — a minus times a minus gives plus: $4x - 3x + 18 = 12$, so $x + 18 = 12$ and $x = -6$. Check: $\\frac{-6}{3} - \\frac{-6-6}{4} = -2 - (-3) = 1$. ✓ ($30$ comes from writing $-3(x-6) = -3x - 18$; $18$ comes from multiplying only the $x$ inside, $4x - 3x - 6 = 12$; $-17$ forgets to multiply the RIGHT side by $12$, solving $x + 18 = 1$.)',
    },
    {
      q: 'Solve $\\frac{2x}{5} - \\frac{x - 3}{2} = 1$.',
      choices: ['$x = 14$', '$x = 5$', '$x = -25$', '$x = -7$'],
      answer: 1,
      solution: 'The common denominator is $10$, so multiply every term by $10$: $4x - 5(x - 3) = 10$. Distribute: $4x - 5x + 15 = 10$, so $-x + 15 = 10$ and $-x = -5$, giving $x = 5$. Check: $\\frac{2 \\cdot 5}{5} - \\frac{5-3}{2} = 2 - 1 = 1$. ✓ ($-25$ comes from $-5(x-3) = -5x - 15$; $-7$ comes from multiplying only the $x$, $4x - 5x + 3 = 10$; $14$ forgets the right side, solving $-x + 15 = 1$.)',
    },
    {
      q: 'Solve $\\frac{x + 5}{4} - \\frac{x}{6} = 2$.',
      choices: ['$x = 19$', '$x = -13$', '$x = 9$', '$x = \\frac{9}{5}$'],
      answer: 2,
      solution: 'Multiply every term by $12$: $3(x + 5) - 2x = 24$. Distribute: $3x + 15 - 2x = 24$, so $x + 15 = 24$ and $x = 9$. Check: $\\frac{9+5}{4} - \\frac{9}{6} = \\frac{7}{2} - \\frac{3}{2} = 2$. ✓ ($19$ comes from $3(x+5) = 3x + 5$, forgetting to multiply the $5$; $-13$ forgets to multiply the right side by $12$, solving $x + 15 = 2$; $\\frac{9}{5}$ ADDS the second fraction instead of subtracting it, giving $5x = 9$.)',
    },
  ],
  // 9. Counting two kinds of thing with one variable.
  [
    {
      q: 'A jar holds only nickels ($5$ cents) and quarters ($25$ cents). There are $3$ more quarters than nickels, and the coins are worth $\\$3.15$ altogether. How many nickels are in the jar?',
      choices: ['$11$', '$10$', '$19$', '$8$'],
      answer: 3,
      solution: 'Let $n$ be the number of nickels, so there are $n + 3$ quarters. Work in CENTS so the numbers are whole: $5n + 25(n + 3) = 315$. Distribute: $30n + 75 = 315$, so $30n = 240$ and $n = 8$. Check: $8$ nickels are $40$ cents and $11$ quarters are $275$ cents, and $40 + 275 = 315$ cents $= \\$3.15$. ✓ ($11$ is the number of QUARTERS; $10$ comes from swapping the two coin values, solving $25n + 5(n+3) = 315$; $19$ is the total number of coins, $8 + 11$.)',
    },
    {
      q: 'A cash box holds only $\\$5$ bills and $\\$20$ bills. There are twice as many $\\$5$ bills as $\\$20$ bills, and the box holds $\\$210$ in all. How many $\\$5$ bills are there?',
      choices: ['$14$', '$7$', '$21$', '$42$'],
      answer: 0,
      solution: 'Let $t$ be the number of twenties; then there are $2t$ fives. The value equation is $20t + 5(2t) = 210$, which simplifies to $30t = 210$, so $t = 7$ and the number of fives is $2t = 14$. Check: $7$ twenties are $\\$140$ and $14$ fives are $\\$70$, and $140 + 70 = 210$. ✓ ($7$ is the number of TWENTIES; $21$ is the total number of bills, $7 + 14$; $42$ comes from $210 \\div 5$, which assumes every bill is a five.)',
    },
    {
      q: 'At a school fair, tickets cost $\\$4$ for students and $\\$7$ for adults. $25$ tickets were sold for a total of $\\$136$. How many adult tickets were sold?',
      choices: ['$13$', '$6$', '$12$', '$84$'],
      answer: 2,
      solution: 'Let $a$ be the number of adult tickets; the remaining $25 - a$ are student tickets. The money equation is $7a + 4(25 - a) = 136$. Distribute: $7a + 100 - 4a = 136$, so $3a = 36$ and $a = 12$. Check: $12$ adult tickets bring $\\$84$ and $13$ student tickets bring $\\$52$, and $84 + 52 = 136$. ✓ ($13$ is the number of STUDENT tickets — and it is also exactly what you get by swapping the two prices, since the swapped equation always returns the other count; $6$ comes from writing $4(25 - a) = 100 - a$, forgetting to multiply the $a$ by $4$; $84$ is the dollars the adults paid, not how many of them there were.)',
    },
  ],
  // 10. Nested parentheses — peel one layer at a time, watching every sign.
  [
    {
      q: 'Solve $4 - (3 - 2(x - 5)) = 3x - 12$.',
      choices: ['$x = \\frac{23}{5}$', '$x = 3$', '$x = 8$', '$x = 23$'],
      answer: 1,
      solution: 'Innermost layer first: $2(x - 5) = 2x - 10$. Then $3 - (2x - 10) = 13 - 2x$, because the subtraction flips BOTH signs inside. Then $4 - (13 - 2x) = -9 + 2x$. So the equation is $2x - 9 = 3x - 12$, giving $3 = x$. Check: $4 - (3 - 2(3-5)) = 4 - (3 + 4) = -3$, and $3(3) - 12 = -3$. ✓ ($\\frac{23}{5}$ comes from not flipping the sign of the inner group, writing $4 - 3 - 2(x-5) = 11 - 2x$; $8$ comes from $2(x-5) = 2x - 5$; $23$ comes from $2 \\cdot (-5) = +10$, which turns the left side into $11 + 2x$.)',
    },
    {
      q: 'Solve $10 - 2(4 - (x + 3)) = 5x - 4$.',
      choices: ['$x = 0$', '$x = \\frac{12}{7}$', '$x = \\frac{1}{2}$', '$x = 4$'],
      answer: 3,
      solution: 'Start inside: $4 - (x + 3) = 4 - x - 3 = 1 - x$. Then $-2(1 - x) = -2 + 2x$, so the left side is $10 - 2 + 2x = 2x + 8$. Solve $2x + 8 = 5x - 4$: $12 = 3x$, so $x = 4$. Check: $10 - 2(4 - 7) = 10 + 6 = 16$ and $5(4) - 4 = 16$. ✓ ($0$ comes from not flipping the signs inside, writing $4 - x + 3 = 7 - x$; $\\frac{12}{7}$ comes from $-2(1 - x) = -2 - 2x$, a sign slip on the second term; $\\frac{1}{2}$ comes from multiplying the $-2$ into the $4$ and leaving the inner group alone, $10 - 8 - (x+3)$.)',
    },
    {
      q: 'Solve $3(5 - 2(x - 4)) = 4 - x$.',
      choices: ['$x = -\\frac{13}{5}$', '$x = 19$', '$x = 7$', '$x = \\frac{23}{5}$'],
      answer: 2,
      solution: 'Peel the inner layer: $2(x - 4) = 2x - 8$, so $5 - (2x - 8) = 13 - 2x$. Multiply that whole result by $3$: $39 - 6x$. Solve $39 - 6x = 4 - x$: add $6x$ and subtract $4$ to get $35 = 5x$, so $x = 7$. Check: $3(5 - 2(7-4)) = 3(5 - 6) = -3$ and $4 - 7 = -3$. ✓ ($-\\frac{13}{5}$ comes from $-2 \\cdot (-4) = -8$, making the inside $-3 - 2x$; $19$ comes from letting the outer $3$ reach only the $5$, $15 - 2(x-4)$; $\\frac{23}{5}$ comes from $2(x-4) = 2x - 4$.)',
    },
  ],
  // 11. Two single-term fractions with variables downstairs.
  [
    {
      q: 'Solve $\\frac{10}{x} = \\frac{6}{x - 3}$.',
      choices: ['$x = \\frac{15}{2}$', '$x = \\frac{3}{4}$', '$x = -\\frac{9}{2}$', '$x = -\\frac{15}{2}$'],
      answer: 0,
      solution: 'Excluded values: $x \\neq 0$ and $x \\neq 3$. Cross-multiply: $10(x - 3) = 6x$, so $10x - 30 = 6x$ and $4x = 30$, giving $x = \\frac{15}{2}$. It is not excluded, so it stands. Check: $\\frac{10}{15/2} = \\frac{20}{15} = \\frac{4}{3}$, and $x - 3 = \\frac{9}{2}$, so $\\frac{6}{9/2} = \\frac{12}{9} = \\frac{4}{3}$. ✓ ($\\frac{3}{4}$ skips the distribution, $10x - 3 = 6x$; $-\\frac{9}{2}$ pairs each numerator with its own denominator, $10x = 6(x-3)$; $-\\frac{15}{2}$ comes from $10(x-3) = 10x + 30$.)',
    },
    {
      q: 'Solve $\\frac{8}{x + 2} = \\frac{12}{x + 7}$.',
      choices: ['$x = \\frac{5}{4}$', '$x = \\frac{27}{2}$', '$x = \\frac{8}{5}$', '$x = 8$'],
      answer: 3,
      solution: 'Excluded values: $x \\neq -2$ and $x \\neq -7$. Cross-multiply: $8(x + 7) = 12(x + 2)$, so $8x + 56 = 12x + 24$. Then $32 = 4x$ and $x = 8$. Check: $\\frac{8}{10} = \\frac{4}{5}$ and $\\frac{12}{15} = \\frac{4}{5}$. ✓ ($\\frac{5}{4}$ skips both distributions, $8x + 7 = 12x + 2$; $\\frac{27}{2}$ distributes on the left only, $8x + 56 = 12x + 2$; $\\frac{8}{5}$ comes from moving $12x$ to the left as $+12x$, giving $32 = 20x$.)',
    },
    {
      q: 'Solve $\\frac{5}{2x} = \\frac{3}{x + 4}$.',
      choices: ['$x = -10$', '$x = 20$', '$x = \\frac{12}{7}$', '$x = 4$'],
      answer: 1,
      solution: 'Excluded values: $x \\neq 0$ and $x \\neq -4$. Cross-multiply: $5(x + 4) = 3 \\cdot 2x = 6x$, so $5x + 20 = 6x$ and $x = 20$. Check: $\\frac{5}{40} = \\frac{1}{8}$ and $\\frac{3}{24} = \\frac{1}{8}$. ✓ ($-10$ drops the $2$ in the denominator $2x$, solving $5(x+4) = 3x$; $4$ skips the distribution, $5x + 4 = 6x$; $\\frac{12}{7}$ pairs each numerator with its own denominator, $10x = 3(x+4)$.)',
    },
  ],
  // 12. Perimeter with expressions for the sides — then answer the side asked for.
  [
    {
      q: 'A triangle has sides of length $x$, $x + 7$, and $3x - 2$, and its perimeter is $35$. What is the length of its longest side?',
      choices: ['$16$', '$6$', '$13$', '$22$'],
      answer: 0,
      solution: 'Add the three sides: $x + (x + 7) + (3x - 2) = 5x + 5$. Set that equal to $35$: $5x = 30$, so $x = 6$. The sides are $6$, $13$, and $3(6) - 2 = 16$, so the longest is $16$. Check: $6 + 13 + 16 = 35$. ✓ (And the three lengths really can close up into a triangle, since the two shorter ones together, $6 + 13 = 19$, reach past the longest.) ($6$ is just $x$; $13$ is the middle side; $22$ comes from moving the $+5$ across as an addition, $5x = 40$, which gives $x = 8$ and a longest side of $3(8) - 2 = 22$.)',
    },
    {
      q: 'The sides of a triangle are $2x$, $x + 5$, and $x - 3$, and the perimeter is $46$. What is the length of the shortest side?',
      choices: ['$11$', '$16$', '$8$', '$22$'],
      answer: 2,
      solution: 'The perimeter is $2x + (x + 5) + (x - 3) = 4x + 2 = 46$, so $4x = 44$ and $x = 11$. The sides are $22$, $16$, and $8$; the shortest is $8$. Check: $22 + 16 + 8 = 46$. ✓ ($11$ is the value of $x$ itself, which is not one of the sides; $16$ is the middle side; $22$ is the longest — the question asks for the shortest.)',
    },
    {
      q: 'A rectangle’s length is $3$ cm less than twice its width, and its perimeter is $54$ cm. How long is the length?',
      choices: ['$10$ cm', '$17$ cm', '$35$ cm', '$27$ cm'],
      answer: 1,
      solution: 'Let $w$ be the width, so the length is $2w - 3$. The perimeter counts each side twice: $2(w + 2w - 3) = 54$, so $2(3w - 3) = 54$, giving $3w - 3 = 27$, then $3w = 30$ and $w = 10$. The length is $2(10) - 3 = 17$ cm. Check: $2(10 + 17) = 2(27) = 54$ cm. ✓ ($10$ cm is the WIDTH; $27$ cm is half the perimeter, which is length plus width, not the length; $35$ cm comes from writing $w + (2w - 3) = 54$, which uses each side only once and gives $w = 19$.)',
    },
  ],
]

const worksheet = [
  // 1. Two-step equation: undo the addition, then the multiplication.
  [
    {
      q: 'Solve $7x + 9 = 65$.',
      answer: '$x = 8$',
      solution: 'The $x$ was multiplied by $7$ and then $9$ was added, so undo in the reverse order. Subtract $9$ from both sides: $7x = 56$. Divide both sides by $7$: $x = 8$. Check in the original: $7(8) + 9 = 56 + 9 = 65$. ✓',
    },
    {
      q: 'Solve $3x - 14 = -5$.',
      answer: '$x = 3$',
      solution: 'Add $14$ to both sides: $3x = -5 + 14 = 9$. Divide by $3$: $x = 3$. Check: $3(3) - 14 = 9 - 14 = -5$. ✓ Adding a positive to a negative moves you toward zero — keep the arithmetic on the right side honest.',
    },
    {
      q: 'Solve $9x + 4 = -50$.',
      answer: '$x = -6$',
      solution: 'Subtract $4$ from both sides: $9x = -54$. Divide by $9$: $x = -6$. Check: $9(-6) + 4 = -54 + 4 = -50$. ✓ A negative solution is perfectly legal; the balance-scale rules never cared about signs.',
    },
  ],
  // 2. A negative coefficient — divide by the negative, sign and all.
  [
    {
      q: 'Solve $-4x + 7 = 31$.',
      answer: '$x = -6$',
      solution: 'Subtract $7$ from both sides: $-4x = 24$. Now divide by $-4$, not by $4$ — the coefficient carries its minus sign: $x = \\frac{24}{-4} = -6$. Check: $-4(-6) + 7 = 24 + 7 = 31$. ✓',
    },
    {
      q: 'Solve $-2x - 9 = 5$.',
      answer: '$x = -7$',
      solution: 'Add $9$ to both sides: $-2x = 14$. Divide by $-2$: $x = -7$. Check: $-2(-7) - 9 = 14 - 9 = 5$. ✓ (Dropping the minus at the division step would give $7$, and $-2(7) - 9 = -23$, not $5$.)',
    },
    {
      q: 'Solve $15 - 6x = 39$.',
      answer: '$x = -4$',
      solution: 'Here $x$ is being subtracted, so keep the minus glued to the $6$. Subtract $15$ from both sides: $-6x = 24$. Divide by $-6$: $x = -4$. Check: $15 - 6(-4) = 15 + 24 = 39$. ✓',
    },
  ],
  // 3. Variables on both sides — gather them first.
  [
    {
      q: 'Solve $8x - 3 = 3x + 32$.',
      answer: '$x = 7$',
      solution: 'Gather the variables: subtract $3x$ from both sides to get $5x - 3 = 32$. Add $3$: $5x = 35$, so $x = 7$. Check in the original: $8(7) - 3 = 53$ and $3(7) + 32 = 53$. ✓',
    },
    {
      q: 'Solve $5x + 11 = 9x - 5$.',
      answer: '$x = 4$',
      solution: 'The bigger $x$ coefficient is on the right, so subtract $5x$ from both sides and keep the variable there: $11 = 4x - 5$. Add $5$: $16 = 4x$, so $x = 4$. Check: $5(4) + 11 = 31$ and $9(4) - 5 = 31$. ✓ It is fine to leave $x$ on the right — it saves a sign change.',
    },
    {
      q: 'Solve $7x - 8 = 2x - 33$.',
      answer: '$x = -5$',
      solution: 'Subtract $2x$: $5x - 8 = -33$. Add $8$: $5x = -25$, so $x = -5$. Check: $7(-5) - 8 = -35 - 8 = -43$ and $2(-5) - 33 = -10 - 33 = -43$. ✓',
    },
  ],
  // 4. Distribute, then gather.
  [
    {
      q: 'Solve $3(x + 4) = 5x - 6$.',
      answer: '$x = 9$',
      solution: 'Distribute the $3$ to both terms: $3x + 12 = 5x - 6$. Subtract $3x$: $12 = 2x - 6$. Add $6$: $18 = 2x$, so $x = 9$. Check: $3(9 + 4) = 3(13) = 39$ and $5(9) - 6 = 39$. ✓',
    },
    {
      q: 'Solve $4(x - 3) = 2x + 10$.',
      answer: '$x = 11$',
      solution: 'Distribute, remembering that $4 \\cdot (-3) = -12$: $4x - 12 = 2x + 10$. Subtract $2x$: $2x - 12 = 10$. Add $12$: $2x = 22$, so $x = 11$. Check: $4(11 - 3) = 4(8) = 32$ and $2(11) + 10 = 32$. ✓',
    },
    {
      q: 'Solve $5(2x + 1) = 6x + 29$.',
      answer: '$x = 6$',
      solution: 'The $5$ multiplies both terms inside: $10x + 5 = 6x + 29$. Subtract $6x$: $4x + 5 = 29$. Subtract $5$: $4x = 24$, so $x = 6$. Check: $5(2 \\cdot 6 + 1) = 5(13) = 65$ and $6(6) + 29 = 65$. ✓',
    },
  ],
  // 5. Translate a sentence into an equation.
  [
    {
      q: 'Five less than six times a number is $37$. What is the number?',
      answer: '$7$',
      solution: 'Let $n$ be the number. "Six times a number" is $6n$, and "five less than" that is $6n - 5$ — the phrase "less than" puts the subtraction AFTER the quantity, not before it. So $6n - 5 = 37$, giving $6n = 42$ and $n = 7$. Check against the sentence: six times $7$ is $42$, and five less is $37$. ✓',
    },
    {
      q: 'Twice a number, increased by $17$, equals $3$. What is the number?',
      answer: '$-7$',
      solution: 'Let $n$ be the number: $2n + 17 = 3$. Subtract $17$: $2n = 3 - 17 = -14$, so $n = -7$. Check: twice $-7$ is $-14$, and increasing that by $17$ gives $3$. ✓ The answer had to be negative, since doubling it and adding $17$ lands below $17$.',
    },
    {
      q: 'Three more than half a number is $10$. What is the number?',
      answer: '$14$',
      solution: 'Let $n$ be the number. "Half a number" is $\\frac{n}{2}$, so the sentence says $\\frac{n}{2} + 3 = 10$. Subtract $3$: $\\frac{n}{2} = 7$. Multiply both sides by $2$: $n = 14$. Check: half of $14$ is $7$, and three more is $10$. ✓',
    },
  ],
  // 6. A fraction and a constant: undo the constant first.
  [
    {
      q: 'Solve $\\frac{x}{6} - 4 = 2$.',
      answer: '$x = 36$',
      solution: 'Undo the subtraction first: add $4$ to both sides to get $\\frac{x}{6} = 6$. Now undo the division: multiply both sides by $6$, giving $x = 36$. Check: $\\frac{36}{6} - 4 = 6 - 4 = 2$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{3} + 7 = 5$.',
      answer: '$x = -6$',
      solution: 'Subtract $7$: $\\frac{x}{3} = 5 - 7 = -2$. Multiply both sides by $3$: $x = -6$. Check: $\\frac{-6}{3} + 7 = -2 + 7 = 5$. ✓',
    },
    {
      q: 'Solve $\\frac{2x}{5} - 1 = 7$.',
      answer: '$x = 20$',
      solution: 'Add $1$ to both sides: $\\frac{2x}{5} = 8$. The coefficient of $x$ is $\\frac{2}{5}$, so multiply by its reciprocal $\\frac{5}{2}$: $x = 8 \\cdot \\frac{5}{2} = 20$. (Same thing in two steps: multiply by $5$ to get $2x = 40$, then divide by $2$.) Check: $\\frac{2 \\cdot 20}{5} - 1 = 8 - 1 = 7$. ✓',
    },
  ],
  // 7. Proportion with binomial numerators.
  [
    {
      q: 'Solve $\\frac{2x + 1}{3} = \\frac{x + 8}{2}$.',
      answer: '$x = 22$',
      solution: 'Cross-multiply, keeping each whole numerator in parentheses: $2(2x + 1) = 3(x + 8)$. Distribute: $4x + 2 = 3x + 24$. Subtract $3x$ and $2$: $x = 22$. Check: $\\frac{2(22) + 1}{3} = \\frac{45}{3} = 15$ and $\\frac{22 + 8}{2} = 15$. ✓',
    },
    {
      q: 'Solve $\\frac{5x - 3}{4} = \\frac{2x + 9}{3}$.',
      answer: '$x = \\frac{45}{7}$',
      solution: 'Cross-multiply: $3(5x - 3) = 4(2x + 9)$, so $15x - 9 = 8x + 36$. Subtract $8x$ and add $9$: $7x = 45$, giving $x = \\frac{45}{7}$. Check: $5x - 3 = \\frac{225}{7} - \\frac{21}{7} = \\frac{204}{7}$, and dividing by $4$ gives $\\frac{51}{7}$; on the other side $2x + 9 = \\frac{90}{7} + \\frac{63}{7} = \\frac{153}{7}$, and dividing by $3$ also gives $\\frac{51}{7}$. ✓ A fractional answer is a fine answer.',
    },
    {
      q: 'Solve $\\frac{x - 5}{2} = \\frac{3x + 4}{8}$.',
      answer: '$x = 24$',
      solution: 'Cross-multiply: $8(x - 5) = 2(3x + 4)$, so $8x - 40 = 6x + 8$. Subtract $6x$ and add $40$: $2x = 48$, so $x = 24$. Check: $\\frac{24 - 5}{2} = \\frac{19}{2}$ and $\\frac{3(24) + 4}{8} = \\frac{76}{8} = \\frac{19}{2}$. ✓',
    },
  ],
  // 8. Ages: both people move through time.
  [
    {
      q: 'Rosa is $44$ and her nephew is $8$. In how many years will Rosa be exactly four times as old as her nephew?',
      answer: '$4$ years',
      solution: 'In $n$ years Rosa will be $44 + n$ and her nephew will be $8 + n$ — everyone ages together. The condition is $44 + n = 4(8 + n)$. Distribute: $44 + n = 32 + 4n$, so $12 = 3n$ and $n = 4$. Check: in $4$ years they are $48$ and $12$, and $48 = 4 \\times 12$. ✓',
    },
    {
      q: 'A coach is $39$ and a player is $15$. How many years ago was the coach exactly three times as old as the player?',
      answer: '$3$ years ago',
      solution: 'Going backwards, both people get younger: $n$ years ago they were $39 - n$ and $15 - n$. The condition is $39 - n = 3(15 - n)$. Distribute: $39 - n = 45 - 3n$. Add $3n$ and subtract $39$: $2n = 6$, so $n = 3$. Check: three years ago they were $36$ and $12$, and $36 = 3 \\times 12$. ✓',
    },
    {
      q: 'Mr. Diaz is $54$ and his daughter is $18$. In how many years will he be exactly twice as old as she is?',
      answer: '$18$ years',
      solution: 'In $n$ years they will be $54 + n$ and $18 + n$. Set up $54 + n = 2(18 + n) = 36 + 2n$. Subtract $n$ and $36$: $18 = n$. Check: in $18$ years they are $72$ and $36$, and $72 = 2 \\times 36$. ✓ (He is three times her age today, so the wait is long — age RATIOS drift toward $1$ even though the $36$-year gap never changes.)',
    },
  ],
  // 9. Variables downstairs — name the exclusions, then cross-multiply.
  [
    {
      q: 'Solve $\\frac{8}{x} = \\frac{14}{x + 3}$. (State the excluded values first.)',
      answer: '$x = 4$ (with $x \\neq 0$ and $x \\neq -3$ excluded)',
      solution: 'The excluded values are $x = 0$ and $x = -3$, since each makes a denominator zero. Cross-multiply: $8(x + 3) = 14x$, so $8x + 24 = 14x$, giving $24 = 6x$ and $x = 4$. Since $4$ is not excluded, it is a genuine solution. Check: $\\frac{8}{4} = 2$ and $\\frac{14}{4 + 3} = \\frac{14}{7} = 2$. ✓',
    },
    {
      q: 'Solve $\\frac{10}{x - 1} = \\frac{4}{x + 2}$. (State the excluded values first.)',
      answer: '$x = -4$ (with $x \\neq 1$ and $x \\neq -2$ excluded)',
      solution: 'Excluded values: $x = 1$ and $x = -2$. Cross-multiply, keeping the parentheses: $10(x + 2) = 4(x - 1)$, so $10x + 20 = 4x - 4$. Subtract $4x$ and $20$: $6x = -24$, giving $x = -4$, which is not excluded. Check: $\\frac{10}{-4 - 1} = \\frac{10}{-5} = -2$ and $\\frac{4}{-4 + 2} = \\frac{4}{-2} = -2$. ✓',
    },
    {
      q: 'Solve $\\frac{6}{x + 5} = \\frac{9}{2x}$. (State the excluded values first.)',
      answer: '$x = 15$ (with $x \\neq -5$ and $x \\neq 0$ excluded)',
      solution: 'Excluded values: $x = -5$ and $x = 0$. Cross-multiply: $6 \\cdot 2x = 9(x + 5)$, so $12x = 9x + 45$, giving $3x = 45$ and $x = 15$. It is not excluded, so it stands. Check: $\\frac{6}{15 + 5} = \\frac{6}{20} = \\frac{3}{10}$ and $\\frac{9}{2(15)} = \\frac{9}{30} = \\frac{3}{10}$. ✓',
    },
  ],
  // 10. Nested parentheses — inside out.
  [
    {
      q: 'Solve $4(3(x - 2) + 5) = 10x + 6$.',
      answer: '$x = 5$',
      solution: 'Work from the inside out. First $3(x - 2) = 3x - 6$, so the inner expression is $3x - 6 + 5 = 3x - 1$. Then the left side is $4(3x - 1) = 12x - 4$. Solve $12x - 4 = 10x + 6$: subtract $10x$ and add $4$ to get $2x = 10$, so $x = 5$. Check: $4(3(5 - 2) + 5) = 4(9 + 5) = 4(14) = 56$ and $10(5) + 6 = 56$. ✓',
    },
    {
      q: 'Solve $2(5 - 3(x + 1)) = x - 12$.',
      answer: '$x = \\frac{16}{7}$',
      solution: 'Inside first: $3(x + 1) = 3x + 3$, so the inner expression is $5 - (3x + 3) = 2 - 3x$. Multiply by $2$: the left side is $4 - 6x$. Solve $4 - 6x = x - 12$: add $6x$ and $12$ to get $16 = 7x$, so $x = \\frac{16}{7}$. Check: $x + 1 = \\frac{23}{7}$, so the inner expression is $5 - \\frac{69}{7} = -\\frac{34}{7}$ and the left side is $-\\frac{68}{7}$; the right side is $\\frac{16}{7} - \\frac{84}{7} = -\\frac{68}{7}$. ✓',
    },
    {
      q: 'Solve $5(2(x - 3) + 7) = 8x + 9$.',
      answer: '$x = 2$',
      solution: 'Inside out: $2(x - 3) = 2x - 6$, so the inner expression is $2x - 6 + 7 = 2x + 1$. The left side is $5(2x + 1) = 10x + 5$. Solve $10x + 5 = 8x + 9$: subtract $8x$ and $5$ to get $2x = 4$, so $x = 2$. Check: $5(2(2 - 3) + 7) = 5(-2 + 7) = 5(5) = 25$ and $8(2) + 9 = 25$. ✓',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 3,
  challenge,
  worksheet,
}
