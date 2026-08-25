// Prealgebra chapter 5 — variations for sections 5.1-5.3.
// All problems and solutions are original MathQuest content.

const s51 = [
  // p1 — evaluate a one-step sum
  [
    {
      q: 'Evaluate $m + 9$ when $m = 6$.',
      choices: ['$15$', '$54$', '$3$', '$69$'],
      answer: 0,
      solution:
        'Replace $m$ with $6$: the expression becomes $6 + 9 = 15$. The other choices come from doing the wrong thing with the same two numbers — $54$ multiplies them, $3$ subtracts them, and $69$ just writes the digits side by side.',
    },
    {
      q: 'Evaluate $8 + t$ when $t = 3$.',
      choices: ['$24$', '$11$', '$5$', '$83$'],
      answer: 1,
      solution:
        'Substituting $t = 3$ gives $8 + 3 = 11$. The variable can sit on either side of the plus sign — it is still an addition. Multiplying gives $24$, subtracting gives $5$, and gluing the digits together gives $83$.',
    },
    {
      q: 'Rosa has $w$ stickers and buys $15$ more, so she then has $w + 15$ stickers. Evaluate $w + 15$ when $w = 8$.',
      choices: ['$120$', '$7$', '$15$', '$23$'],
      answer: 3,
      solution:
        'Put $8$ in place of $w$: $8 + 15 = 23$ stickers. Choosing $15$ reports only the stickers she bought and forgets the ones she already had. Multiplying gives $120$ and subtracting gives $7$, but the story says "more", which is addition.',
    },
  ],
  // p2 — evaluate a coefficient times a variable
  [
    {
      q: 'Evaluate $7k$ when $k = 5$.',
      choices: ['$12$', '$35$', '$75$', '$2$'],
      answer: 1,
      solution:
        'A number written next to a variable means multiply, so $7k = 7 \\times 5 = 35$. Reading the invisible operation as addition gives $12$, as subtraction gives $2$, and copying the digits gives $75$.',
    },
    {
      q: 'Evaluate $9m$ when $m = 4$.',
      choices: ['$13$', '$94$', '$36$', '$5$'],
      answer: 2,
      solution:
        'There is a hidden multiplication sign between the $9$ and the $m$: $9m = 9 \\times 4 = 36$. The choice $13$ adds instead of multiplying, $5$ subtracts, and $94$ mistakes the notation for the digits placed together.',
    },
    {
      q: 'Movie tickets cost $\\$6$ each, so $p$ tickets cost $6p$ dollars. Evaluate $6p$ when $p = 8$.',
      choices: ['$14$', '$68$', '$2$', '$48$'],
      answer: 3,
      solution:
        'Eight tickets at $\\$6$ each cost $6 \\times 8 = \\$48$, so $6p = 48$. Adding the two numbers gives $14$, subtracting gives $2$, and $68$ comes from writing the $6$ and the $8$ next to each other instead of multiplying them.',
    },
  ],
  // p3 — evaluate a two-step expression, order of operations
  [
    {
      q: 'Evaluate $3x + 4$ when $x = 6$.',
      choices: ['$22$', '$30$', '$18$', '$13$'],
      answer: 0,
      solution:
        'Multiply before adding: $3 \\times 6 + 4 = 18 + 4 = 22$. Adding first would give $3 \\times 10 = 30$, which breaks the order of operations. Stopping at $18$ forgets the $+4$, and $13$ comes from adding all three numbers.',
    },
    {
      q: 'Evaluate $5n - 2$ when $n = 4$.',
      choices: ['$10$', '$20$', '$18$', '$7$'],
      answer: 2,
      solution:
        'Multiplication comes first: $5 \\times 4 - 2 = 20 - 2 = 18$. Subtracting first gives $5 \\times 2 = 10$, which is the wrong order. The choice $20$ stops before the subtraction, and $7$ adds $5$ and $4$ instead of multiplying.',
    },
    {
      q: 'Evaluate $6 + 2y$ when $y = 7$.',
      choices: ['$56$', '$14$', '$15$', '$20$'],
      answer: 3,
      solution:
        'Handle the multiplication first even though it is written second: $6 + 2 \\times 7 = 6 + 14 = 20$. Adding the $6$ and $2$ first gives $8 \\times 7 = 56$. The choice $14$ is only the $2y$ part, and $15$ adds all three numbers.',
    },
  ],
  // p4 — combining two like terms
  [
    {
      q: 'Combine like terms: $9m + 4m$.',
      choices: ['$13m$', '$36m$', '$13m^2$', '$5m$'],
      answer: 0,
      solution:
        'Nine $m$s plus four $m$s makes thirteen $m$s: $9m + 4m = 13m$. Only the coefficients are added. Multiplying them gives $36m$, subtracting gives $5m$, and $13m^2$ changes the variable part, which adding never does.',
    },
    {
      q: 'Combine like terms: $7y - 2y$.',
      choices: ['$9y$', '$5y$', '$5y^2$', '$14y$'],
      answer: 1,
      solution:
        'Take two $y$s away from seven $y$s and five $y$s are left: $7y - 2y = 5y$. Adding instead of subtracting gives $9y$, multiplying the coefficients gives $14y$, and $5y^2$ invents an exponent that was never there.',
    },
    {
      q: 'Simplify $a + 6a$.',
      choices: ['$6a$', '$6a^2$', '$7a$', '$7a^2$'],
      answer: 2,
      solution:
        'A lone $a$ counts as $1a$, so $a + 6a = 1a + 6a = 7a$. Ignoring that hidden $1$ gives $6a$. Multiplying the terms gives $6a^2$, and $7a^2$ adds the coefficients correctly but wrongly multiplies the variables too.',
    },
  ],
  // p5 — like terms plus a stray constant
  [
    {
      q: 'Simplify $4b + 5 + 6b$.',
      choices: ['$15b$', '$10b + 5$', '$10b$', '$4b + 11$'],
      answer: 1,
      solution:
        'The $b$-terms combine: $4b + 6b = 10b$. The plain $5$ has no $b$, so it cannot join them: $10b + 5$. Sweeping everything into one pile gives $15b$, dropping the $5$ gives $10b$, and $4b + 11$ wrongly adds the $5$ to the $6$.',
    },
    {
      q: 'Simplify $9x - 3 + 2x$.',
      choices: ['$8x$', '$11x$', '$11x - 3$', '$9x - 1$'],
      answer: 2,
      solution:
        'Combine only the $x$-terms: $9x + 2x = 11x$, and the $-3$ stays put, giving $11x - 3$. Treating the $-3$ as an $x$-term gives $8x$, forgetting it altogether gives $11x$, and combining $-3$ with $2x$ gives $9x - 1$.',
    },
    {
      q: 'Simplify $5 + 8n + n$.',
      choices: ['$14n$', '$8n + 6$', '$9n$', '$9n + 5$'],
      answer: 3,
      solution:
        'The lone $n$ is $1n$, so $8n + n = 9n$, and the $5$ stands apart: $9n + 5$. Combining all three numbers gives $14n$, adding the lone $n$ to the $5$ as if it were a plain number gives $8n + 6$, and $9n$ simply loses the $5$.',
    },
  ],
  // p6 — distributing over a sum or difference
  [
    {
      q: 'Distribute: $5(y + 3)$.',
      choices: ['$5y + 15$', '$5y + 3$', '$8y$', '$5y + 8$'],
      answer: 0,
      solution:
        'The $5$ reaches both terms: $5 \\times y + 5 \\times 3 = 5y + 15$. Leaving the $3$ untouched gives $5y + 3$, the classic slip. Adding $5$ and $3$ gives $8y$ or $5y + 8$ depending on where the sum is parked — but neither is multiplication.',
    },
    {
      q: 'Distribute: $7(x - 2)$.',
      choices: ['$7x - 2$', '$7x - 14$', '$5x$', '$7x + 14$'],
      answer: 1,
      solution:
        'Multiply the $7$ into both terms, keeping the minus sign: $7x - 14$. Forgetting the second term gives $7x - 2$, losing the sign gives $7x + 14$, and $5x$ comes from subtracting $2$ from $7$ instead of distributing.',
    },
    {
      q: 'Distribute: $3(2n + 5)$.',
      choices: ['$2n + 15$', '$6n + 5$', '$11n$', '$6n + 15$'],
      answer: 3,
      solution:
        'Both terms get multiplied by $3$: $3 \\times 2n + 3 \\times 5 = 6n + 15$. Reaching only the second term gives $2n + 15$, reaching only the first gives $6n + 5$, and $11n$ multiplies correctly but then wrongly adds $6n$ and $15$ as if they were like terms.',
    },
  ],
  // p7 — a coefficient with an exponent
  [
    {
      q: 'Evaluate $5x^2$ when $x = 3$.',
      choices: ['$45$', '$225$', '$30$', '$14$'],
      answer: 0,
      solution:
        'The exponent belongs to the $x$ alone, so square first: $x^2 = 9$, then $5 \\times 9 = 45$. Squaring the whole product gives $(5 \\times 3)^2 = 225$. Doubling instead of squaring gives $5 \\times 6 = 30$, and $14$ adds $5$ and $9$.',
    },
    {
      q: 'Evaluate $4a^2$ when $a = 5$.',
      choices: ['$400$', '$40$', '$100$', '$29$'],
      answer: 2,
      solution:
        'Square the $a$ first: $a^2 = 25$, then $4 \\times 25 = 100$. Squaring $4a$ as a unit gives $20^2 = 400$, which squares the $4$ as well. Doubling rather than squaring gives $40$, and $29$ adds $4$ to $25$ instead of multiplying.',
    },
    {
      q: 'Evaluate $3x^2$ when $x = 4$.',
      choices: ['$144$', '$24$', '$19$', '$48$'],
      answer: 3,
      solution:
        'Exponents outrank multiplication: $x^2 = 16$ first, then $3 \\times 16 = 48$. The choice $144$ is $(3 \\times 4)^2$, which squares the coefficient too. Doubling gives $3 \\times 8 = 24$, and $19$ adds $3$ and $16$.',
    },
  ],
  // p8 — translating a phrase into an expression
  [
    {
      q: 'Which expression means "$7$ more than half a number $k$"?',
      choices: ['$\\frac{k}{2} + 7$', '$\\frac{k + 7}{2}$', '$7 - \\frac{k}{2}$', '$\\frac{7}{2}k$'],
      answer: 0,
      solution:
        '"Half a number $k$" is $\\frac{k}{2}$, and "$7$ more than" it adds $7$ afterwards: $\\frac{k}{2} + 7$. Halving after adding gives $\\frac{k + 7}{2}$, which halves the $7$ as well. The choice $7 - \\frac{k}{2}$ reverses the order, and $\\frac{7}{2}k$ misreads "half" as a multiplier on the $7$.',
    },
    {
      q: 'Which expression means "twice the sum of a number $p$ and $4$"?',
      choices: ['$2p + 4$', '$2(p + 4)$', '$2 + 4p$', '$\\frac{p + 4}{2}$'],
      answer: 1,
      solution:
        'The words "the sum of $p$ and $4$" name one quantity, $p + 4$, and "twice" doubles all of it: $2(p + 4)$. Writing $2p + 4$ doubles only the $p$. The choice $2 + 4p$ swaps the roles of the two numbers, and $\\frac{p + 4}{2}$ halves instead of doubling.',
    },
    {
      q: 'Sam has $t$ marbles. Priya has $4$ fewer than three times as many marbles as Sam. Which expression gives Priya\'s number of marbles?',
      choices: ['$4 - 3t$', '$3(t - 4)$', '$3t - 4$', '$4t - 3$'],
      answer: 2,
      solution:
        '"Three times as many as Sam" is $3t$, and "$4$ fewer than" that takes $4$ away from it: $3t - 4$. The choice $4 - 3t$ subtracts in the wrong direction, $3(t - 4)$ subtracts before tripling, and $4t - 3$ swaps which number multiplies and which is removed.',
    },
  ],
  // p9 — distribute, then combine like terms
  [
    {
      q: 'Simplify $2(3x + 5) - 4x$.',
      choices: ['$6x + 10$', '$2x + 10$', '$10x + 10$', '$2x + 5$'],
      answer: 1,
      solution:
        'Distribute first: $2(3x + 5) = 6x + 10$. Then $6x - 4x = 2x$, and the $10$ has nothing to pair with: $2x + 10$. Forgetting to subtract the $4x$ leaves $6x + 10$, adding it instead gives $10x + 10$, and $2x + 5$ forgets to distribute the $2$ to the $5$.',
    },
    {
      q: 'Simplify $4(x + 3) + 2x$.',
      choices: ['$4x + 12$', '$6x + 3$', '$6x + 12$', '$18x$'],
      answer: 2,
      solution:
        'Open the parentheses: $4x + 12$. Now add the $2x$: $4x + 2x = 6x$, so the result is $6x + 12$. The choice $4x + 12$ drops the $2x$, $6x + 3$ forgets to multiply the $3$ by $4$, and $18x$ piles the $12$ in with the $x$-terms as if it were $12x$.',
    },
    {
      q: 'Simplify $5(2n - 1) - 3n$.',
      choices: ['$10n - 5$', '$13n - 5$', '$7n - 1$', '$7n - 5$'],
      answer: 3,
      solution:
        'Distribute, minding the minus: $5(2n - 1) = 10n - 5$. Then $10n - 3n = 7n$, giving $7n - 5$. Stopping early leaves $10n - 5$, adding the $3n$ gives $13n - 5$, and $7n - 1$ forgets that the $5$ must multiply the $-1$ too.',
    },
  ],
  // p10 — substituting a negative value
  [
    {
      q: 'Evaluate $5p - 2q$ when $p = 3$ and $q = -4$.',
      choices: ['$23$', '$7$', '$-26$', '$19$'],
      answer: 0,
      solution:
        'Substitute with the signs attached: $5 \\times 3 - 2 \\times (-4) = 15 - (-8) = 15 + 8 = 23$. Treating $q$ as $+4$ gives $7$. Swapping the two values gives $5(-4) - 2(3) = -26$, and $19$ forgets to multiply $q$ by $2$.',
    },
    {
      q: 'Evaluate $3m + 4n$ when $m = -5$ and $n = 6$.',
      choices: ['$39$', '$-39$', '$9$', '$-9$'],
      answer: 2,
      solution:
        'Work term by term: $3 \\times (-5) = -15$ and $4 \\times 6 = 24$, so the value is $-15 + 24 = 9$. Dropping the minus on $m$ gives $39$, attaching it to both products gives $-39$, and computing $15 - 24$ puts the minus on the wrong term and gives $-9$.',
    },
    {
      q: 'Evaluate $4x - 5y$ when $x = -2$ and $y = -3$.',
      choices: ['$-23$', '$-7$', '$23$', '$7$'],
      answer: 3,
      solution:
        'Both substitutions carry a minus: $4 \\times (-2) - 5 \\times (-3) = -8 + 15 = 7$, because subtracting a negative adds. Subtracting the $15$ instead gives $-23$, ignoring both minus signs gives $23$, and dropping only the minus on $x$ gives $8 - 15 = -7$.',
    },
  ],
]

const s52 = [
  // p1 — undo an addition
  [
    {
      q: 'Solve $x + 6 = 20$.',
      choices: ['$14$', '$26$', '$-14$', '$120$'],
      answer: 0,
      solution:
        'Subtract $6$ from both sides: $x = 20 - 6 = 14$. Check: $14 + 6 = 20$. ✓ Adding the $6$ instead of undoing it gives $26$, subtracting in the wrong order gives $-14$, and $120$ multiplies the two numbers.',
    },
    {
      q: 'Solve $9 + x = 24$.',
      choices: ['$33$', '$-15$', '$15$', '$216$'],
      answer: 2,
      solution:
        'The $x$ has $9$ added to it, so subtract $9$ from both sides: $x = 24 - 9 = 15$. Check: $9 + 15 = 24$. ✓ Adding gives $33$, computing $9 - 24$ gives $-15$, and multiplying gives $216$.',
    },
    {
      q: 'Solve $x + 11 = 7$.',
      choices: ['$18$', '$4$', '$77$', '$-4$'],
      answer: 3,
      solution:
        'Subtract $11$ from both sides: $x = 7 - 11 = -4$. Check: $-4 + 11 = 7$. ✓ The answer is allowed to be negative — the right side is smaller than the $11$. Adding gives $18$, subtracting backwards gives $4$, and multiplying gives $77$.',
    },
  ],
  // p2 — undo a subtraction
  [
    {
      q: 'Solve $x - 9 = 12$.',
      choices: ['$21$', '$3$', '$-3$', '$108$'],
      answer: 0,
      solution:
        'The $x$ had $9$ taken away, so add $9$ to both sides: $x = 12 + 9 = 21$. Check: $21 - 9 = 12$. ✓ Subtracting again gives $3$, reversing that subtraction gives $-3$, and multiplying gives $108$.',
    },
    {
      q: 'Solve $x - 15 = 4$.',
      choices: ['$-11$', '$19$', '$11$', '$60$'],
      answer: 1,
      solution:
        'Undo the subtraction by adding: $x = 4 + 15 = 19$. Check: $19 - 15 = 4$. ✓ Repeating the subtraction gives $4 - 15 = -11$, flipping it gives $15 - 4 = 11$, and multiplying gives $60$.',
    },
    {
      q: 'Solve $x - 7 = -3$.',
      choices: ['$-10$', '$10$', '$4$', '$21$'],
      answer: 2,
      solution:
        'Add $7$ to both sides: $x = -3 + 7 = 4$. Check: $4 - 7 = -3$. ✓ Subtracting instead gives $-3 - 7 = -10$, ignoring the minus sign on the $3$ gives $3 + 7 = 10$, and multiplying gives $21$.',
    },
  ],
  // p3 — undo a multiplication
  [
    {
      q: 'Solve $8x = 56$.',
      choices: ['$48$', '$7$', '$64$', '$448$'],
      answer: 1,
      solution:
        '$8x$ means $8$ times $x$, so divide both sides by $8$: $x = 56 \\div 8 = 7$. Check: $8 \\times 7 = 56$. ✓ Subtracting $8$ gives $48$, adding it gives $64$, and multiplying gives $448$.',
    },
    {
      q: 'Solve $7x = 42$.',
      choices: ['$35$', '$49$', '$6$', '$294$'],
      answer: 2,
      solution:
        'Division undoes multiplication: $x = 42 \\div 7 = 6$. Check: $7 \\times 6 = 42$. ✓ The choice $35$ subtracts the $7$, $49$ adds it, and $294$ multiplies instead of dividing — which makes $x$ bigger when it should get smaller.',
    },
    {
      q: 'Nine identical crates weigh $72$ kilograms altogether, so the weight $x$ of one crate satisfies $9x = 72$. What is $x$?',
      choices: ['$63$', '$81$', '$648$', '$8$'],
      answer: 3,
      solution:
        'Divide both sides by $9$: $x = 72 \\div 9 = 8$ kilograms. Check: $9 \\times 8 = 72$. ✓ Subtracting $9$ gives $63$, adding it gives $81$, and multiplying gives $648$ — far heavier than all nine crates together.',
    },
  ],
  // p4 — undo a division
  [
    {
      q: 'Solve $\\frac{x}{6} = 4$.',
      choices: ['$24$', '$\\frac{2}{3}$', '$10$', '$-2$'],
      answer: 0,
      solution:
        'The $x$ was divided by $6$, so multiply both sides by $6$: $x = 4 \\times 6 = 24$. Check: $24 \\div 6 = 4$. ✓ Dividing again gives $\\frac{4}{6} = \\frac{2}{3}$, adding gives $10$, and subtracting gives $-2$.',
    },
    {
      q: 'Solve $\\frac{x}{7} = 5$.',
      choices: ['$\\frac{5}{7}$', '$35$', '$12$', '$-2$'],
      answer: 1,
      solution:
        'Multiplication undoes division: $x = 5 \\times 7 = 35$. Check: $35 \\div 7 = 5$. ✓ Dividing a second time gives $\\frac{5}{7}$, which shrinks $x$ instead of restoring it. Adding gives $12$ and subtracting gives $-2$.',
    },
    {
      q: 'Solve $\\frac{x}{2} = 15$.',
      choices: ['$\\frac{15}{2}$', '$17$', '$13$', '$30$'],
      answer: 3,
      solution:
        'Multiply both sides by $2$: $x = 15 \\times 2 = 30$. Check: $30 \\div 2 = 15$. ✓ Halving again gives $\\frac{15}{2}$, adding the $2$ gives $17$, and subtracting it gives $13$.',
    },
  ],
  // p5 — two-step: multiply then add
  [
    {
      q: 'Solve $3x + 4 = 25$.',
      choices: ['$7$', '$\\frac{29}{3}$', '$21$', '$\\frac{13}{3}$'],
      answer: 0,
      solution:
        'Peel off the $+4$ first: $3x = 21$. Then divide by $3$: $x = 7$. Check: $3 \\times 7 + 4 = 25$. ✓ Adding the $4$ instead gives $\\frac{29}{3}$, stopping at $3x = 21$ gives $21$, and dividing before subtracting gives $\\frac{25}{3} - 4 = \\frac{13}{3}$.',
    },
    {
      q: 'Solve $5x + 3 = 43$.',
      choices: ['$40$', '$8$', '$\\frac{46}{5}$', '$\\frac{28}{5}$'],
      answer: 1,
      solution:
        'Subtract $3$: $5x = 40$. Divide by $5$: $x = 8$. Check: $5 \\times 8 + 3 = 43$. ✓ The choice $40$ forgets the final division, $\\frac{46}{5}$ adds the $3$ instead of subtracting it, and $\\frac{28}{5}$ divides by $5$ first and then subtracts $3$.',
    },
    {
      q: 'A taxi charges an $\\$8$ flat fee plus $\\$4$ per kilometre, so a ride of $d$ kilometres costs $4d + 8$ dollars. Priya\'s ride cost $\\$40$. How many kilometres was it?',
      choices: ['$12$', '$32$', '$8$', '$2$'],
      answer: 2,
      solution:
        'Solve $4d + 8 = 40$. Take the one-time fee off first: $4d = 32$. Then divide by $4$: $d = 8$ kilometres. Check: $4 \\times 8 + 8 = 40$. ✓ Adding the fee gives $12$, stopping at $4d = 32$ gives $32$, and dividing before removing the fee gives $10 - 8 = 2$.',
    },
  ],
  // p6 — two-step: multiply then subtract
  [
    {
      q: 'Solve $4x - 6 = 26$.',
      choices: ['$8$', '$5$', '$32$', '$\\frac{13}{2}$'],
      answer: 0,
      solution:
        'The $6$ was subtracted, so ADD $6$ to both sides: $4x = 32$. Divide by $4$: $x = 8$. Check: $4 \\times 8 - 6 = 26$. ✓ Subtracting $6$ instead gives $4x = 20$ and $x = 5$, stopping early gives $32$, and ignoring the $-6$ altogether gives $\\frac{26}{4} = \\frac{13}{2}$.',
    },
    {
      q: 'Solve $3x - 9 = 18$.',
      choices: ['$3$', '$27$', '$9$', '$6$'],
      answer: 2,
      solution:
        'Add $9$ to both sides: $3x = 27$. Divide by $3$: $x = 9$. Check: $3 \\times 9 - 9 = 18$. ✓ Subtracting $9$ instead gives $3x = 9$ and $x = 3$, forgetting the division leaves $27$, and skipping the $-9$ entirely gives $18 \\div 3 = 6$.',
    },
    {
      q: 'Solve $5x - 10 = 40$.',
      choices: ['$6$', '$50$', '$8$', '$10$'],
      answer: 3,
      solution:
        'Add $10$ to both sides: $5x = 50$. Divide by $5$: $x = 10$. Check: $5 \\times 10 - 10 = 40$. ✓ Subtracting $10$ gives $5x = 30$ and $x = 6$, stopping at $5x = 50$ gives $50$, and dividing $40$ by $5$ while ignoring the $-10$ gives $8$.',
    },
  ],
  // p7 — a negative on the other side
  [
    {
      q: 'Solve $x - 11 = -4$.',
      choices: ['$-15$', '$7$', '$15$', '$-7$'],
      answer: 1,
      solution:
        'Add $11$ to both sides: $x = -4 + 11 = 7$. Check: $7 - 11 = -4$. ✓ Subtracting instead gives $-4 - 11 = -15$, ignoring the minus sign gives $4 + 11 = 15$, and computing $4 - 11$ gives $-7$.',
    },
    {
      q: 'Solve $x + 5 = -9$.',
      choices: ['$-4$', '$14$', '$-14$', '$4$'],
      answer: 2,
      solution:
        'Subtract $5$ from both sides: $x = -9 - 5 = -14$. Check: $-14 + 5 = -9$. ✓ Adding the $5$ gives $-4$, dropping the minus sign gives $14$, and computing $9 - 5$ gives $4$.',
    },
    {
      q: 'Solve $x - 3 = -12$.',
      choices: ['$-15$', '$9$', '$15$', '$-9$'],
      answer: 3,
      solution:
        'Add $3$ to both sides: $x = -12 + 3 = -9$. Check: $-9 - 3 = -12$. ✓ Subtracting instead gives $-15$, ignoring the minus sign and subtracting gives $9$, and ignoring it while adding gives $15$.',
    },
  ],
  // p8 — two-step with a division
  [
    {
      q: 'Solve $\\frac{x}{3} + 5 = 11$.',
      choices: ['$18$', '$28$', '$48$', '$2$'],
      answer: 0,
      solution:
        'Subtract $5$ first: $\\frac{x}{3} = 6$. Then multiply by $3$: $x = 18$. Check: $18 \\div 3 + 5 = 11$. ✓ Multiplying before subtracting gives $33 - 5 = 28$, adding the $5$ gives $16 \\times 3 = 48$, and dividing by $3$ instead of multiplying gives $2$.',
    },
    {
      q: 'Solve $\\frac{x}{6} - 2 = 3$.',
      choices: ['$6$', '$30$', '$20$', '$\\frac{5}{6}$'],
      answer: 1,
      solution:
        'Add $2$ to both sides: $\\frac{x}{6} = 5$. Multiply by $6$: $x = 30$. Check: $30 \\div 6 - 2 = 3$. ✓ Subtracting the $2$ gives $1 \\times 6 = 6$, multiplying before adding gives $18 + 2 = 20$, and dividing instead of multiplying gives $\\frac{5}{6}$.',
    },
    {
      q: 'Solve $\\frac{x}{8} + 4 = 7$.',
      choices: ['$88$', '$52$', '$\\frac{3}{8}$', '$24$'],
      answer: 3,
      solution:
        'Subtract $4$: $\\frac{x}{8} = 3$. Multiply by $8$: $x = 24$. Check: $24 \\div 8 + 4 = 7$. ✓ Adding the $4$ gives $11 \\times 8 = 88$, multiplying first and then subtracting gives $56 - 4 = 52$, and dividing by $8$ gives $\\frac{3}{8}$.',
    },
  ],
  // p9 — a negative coefficient
  [
    {
      q: 'Solve $-3x + 10 = 4$.',
      choices: ['$2$', '$-2$', '$-\\frac{14}{3}$', '$-6$'],
      answer: 0,
      solution:
        'Subtract $10$: $-3x = -6$. Divide by $-3$: $x = 2$, since a negative divided by a negative is positive. Check: $-3 \\times 2 + 10 = 4$. ✓ Dividing $-6$ by $+3$ gives $-2$, adding the $10$ gives $-3x = 14$ and $-\\frac{14}{3}$, and forgetting to divide leaves $-6$.',
    },
    {
      q: 'Solve $-5x + 3 = 18$.',
      choices: ['$3$', '$-3$', '$-\\frac{21}{5}$', '$15$'],
      answer: 1,
      solution:
        'Subtract $3$: $-5x = 15$. Divide by $-5$: $x = -3$. Check: $-5 \\times (-3) + 3 = 15 + 3 = 18$. ✓ Dropping the minus when dividing gives $3$, adding the $3$ gives $-5x = 21$ and $-\\frac{21}{5}$, and stopping at $-5x = 15$ gives $15$.',
    },
    {
      q: 'Solve $6 - 2x = 14$.',
      choices: ['$4$', '$-10$', '$10$', '$-4$'],
      answer: 3,
      solution:
        'Subtract $6$ from both sides: $-2x = 8$. Divide by $-2$: $x = -4$. Check: $6 - 2 \\times (-4) = 6 + 8 = 14$. ✓ Dividing $8$ by $+2$ gives $4$, adding the $6$ gives $-2x = 20$ and $x = -10$, and rewriting the left side as $2x - 6$ gives $10$.',
    },
  ],
  // p10 — checking a solution by substitution
  [
    {
      q: 'Which equation has $x = 6$ as a solution?',
      choices: ['$4x - 3 = 27$', '$2x + 5 = 17$', '$x - 6 = 6$', '$\\frac{x}{2} = 12$'],
      answer: 1,
      solution:
        'Substitute $x = 6$ into each. $2 \\times 6 + 5 = 17$. ✓ The others miss: $4 \\times 6 - 3 = 21$, not $27$; $6 - 6 = 0$, not $6$; and $6 \\div 2 = 3$, not $12$. Their own solutions are $x = \\frac{15}{2}$, $x = 12$, and $x = 24$.',
    },
    {
      q: 'Which of these equations does NOT have $x = 5$ as a solution?',
      choices: ['$3x - 4 = 11$', '$\\frac{x}{5} = 1$', '$2x + 3 = 16$', '$x + 7 = 12$'],
      answer: 2,
      solution:
        'Test $x = 5$ in each. $3 \\times 5 - 4 = 11$ ✓, $5 \\div 5 = 1$ ✓, and $5 + 7 = 12$ ✓ — but $2 \\times 5 + 3 = 13$, not $16$. That last equation is really solved by $x = \\frac{13}{2}$, so $5$ fails it.',
    },
    {
      q: 'Which equation has $x = -3$ as a solution?',
      choices: ['$x + 3 = 3$', '$2x + 1 = 5$', '$\\frac{x}{3} = 1$', '$4x + 15 = 3$'],
      answer: 3,
      solution:
        'Substitute $x = -3$, keeping the minus sign attached: $4 \\times (-3) + 15 = -12 + 15 = 3$. ✓ The others fail: $-3 + 3 = 0$, not $3$; $2 \\times (-3) + 1 = -5$, not $5$; and $-3 \\div 3 = -1$, not $1$. Forgetting the minus sign is what makes those three look tempting.',
    },
  ],
]

const s53 = [
  // p1 — variables on both sides, no constants
  [
    {
      q: 'Solve $9x = 4x + 30$.',
      choices: ['$6$', '$\\frac{30}{13}$', '$30$', '$\\frac{10}{3}$'],
      answer: 0,
      solution:
        'Subtract $4x$ from both sides so the variables gather on the left: $5x = 30$, so $x = 6$. Check: $9 \\times 6 = 54$ and $4 \\times 6 + 30 = 54$. ✓ Adding $4x$ instead gives $13x = 30$ and $\\frac{30}{13}$, stopping at $5x = 30$ gives $30$, and dividing $30$ by $9$ while ignoring the $4x$ gives $\\frac{10}{3}$.',
    },
    {
      q: 'Solve $8x = 2x + 42$.',
      choices: ['$\\frac{21}{5}$', '$7$', '$42$', '$\\frac{21}{4}$'],
      answer: 1,
      solution:
        'Subtract $2x$: $6x = 42$, so $x = 7$. Check: $8 \\times 7 = 56$ and $2 \\times 7 + 42 = 56$. ✓ Adding $2x$ gives $10x = 42$ and $\\frac{21}{5}$, forgetting the division leaves $42$, and dividing by $8$ while ignoring the $2x$ gives $\\frac{21}{4}$.',
    },
    {
      q: 'Solve $10y = 3y + 28$.',
      choices: ['$28$', '$\\frac{28}{13}$', '$4$', '$\\frac{14}{5}$'],
      answer: 2,
      solution:
        'Subtract $3y$ from both sides: $7y = 28$, so $y = 4$. Check: $10 \\times 4 = 40$ and $3 \\times 4 + 28 = 40$. ✓ Stopping at $7y = 28$ gives $28$, adding $3y$ gives $13y = 28$ and $\\frac{28}{13}$, and dividing $28$ by $10$ gives $\\frac{14}{5}$.',
    },
  ],
  // p2 — variables and constants on both sides
  [
    {
      q: 'Solve $7x - 3 = 3x + 21$.',
      choices: ['$\\frac{9}{2}$', '$6$', '$\\frac{12}{5}$', '$24$'],
      answer: 1,
      solution:
        'Subtract $3x$: $4x - 3 = 21$. Add $3$: $4x = 24$, so $x = 6$. Check: $7 \\times 6 - 3 = 39$ and $3 \\times 6 + 21 = 39$. ✓ Subtracting the $3$ instead of adding it gives $4x = 18$ and $\\frac{9}{2}$, adding $3x$ gives $10x = 24$ and $\\frac{12}{5}$, and forgetting the division leaves $24$.',
    },
    {
      q: 'Solve $8x + 7 = 3x + 42$.',
      choices: ['$\\frac{35}{11}$', '$35$', '$7$', '$\\frac{49}{5}$'],
      answer: 2,
      solution:
        'Subtract $3x$: $5x + 7 = 42$. Subtract $7$: $5x = 35$, so $x = 7$. Check: $8 \\times 7 + 7 = 63$ and $3 \\times 7 + 42 = 63$. ✓ Adding $3x$ gives $11x = 35$ and $\\frac{35}{11}$, adding the $7$ gives $5x = 49$ and $\\frac{49}{5}$, and stopping at $5x = 35$ gives $35$.',
    },
    {
      q: 'Solve $4x - 11 = x + 13$.',
      choices: ['$\\frac{24}{5}$', '$\\frac{2}{3}$', '$24$', '$8$'],
      answer: 3,
      solution:
        'Subtract $x$: $3x - 11 = 13$. Add $11$: $3x = 24$, so $x = 8$. Check: $4 \\times 8 - 11 = 21$ and $8 + 13 = 21$. ✓ Adding $x$ gives $5x = 24$ and $\\frac{24}{5}$, subtracting the $11$ gives $3x = 2$ and $\\frac{2}{3}$, and forgetting the last division leaves $24$.',
    },
  ],
  // p3 — a product equal to a number
  [
    {
      q: 'Solve $4(x - 3) = 20$.',
      choices: ['$8$', '$2$', '$\\frac{23}{4}$', '$5$'],
      answer: 0,
      solution:
        'Divide both sides by $4$: $x - 3 = 5$, so $x = 8$. Check: $4(8 - 3) = 20$. ✓ Subtracting the $3$ instead of adding it gives $2$, stopping at $x - 3 = 5$ and reporting $5$ skips the last step, and forgetting to multiply the $3$ by $4$ gives $4x - 3 = 20$ and $\\frac{23}{4}$.',
    },
    {
      q: 'Solve $5(x + 4) = 45$.',
      choices: ['$13$', '$5$', '$\\frac{41}{5}$', '$9$'],
      answer: 1,
      solution:
        'Divide by $5$: $x + 4 = 9$, so $x = 5$. Check: $5(5 + 4) = 45$. ✓ Adding the $4$ instead of subtracting gives $13$, reporting the intermediate $9$ stops one step early, and distributing only to the $x$ gives $5x + 4 = 45$ and $\\frac{41}{5}$.',
    },
    {
      q: 'Solve $2(x - 7) = 16$.',
      choices: ['$1$', '$\\frac{23}{2}$', '$8$', '$15$'],
      answer: 3,
      solution:
        'Divide by $2$: $x - 7 = 8$, so $x = 15$. Check: $2(15 - 7) = 16$. ✓ Subtracting the $7$ gives $1$, reporting the intermediate $8$ stops early, and forgetting that the $2$ multiplies the $-7$ gives $2x - 7 = 16$ and $\\frac{23}{2}$.',
    },
  ],
  // p4 — a fraction with a coefficient on top
  [
    {
      q: 'Solve $\\frac{3x}{4} = 6$.',
      choices: ['$8$', '$\\frac{9}{2}$', '$24$', '$18$'],
      answer: 0,
      solution:
        'Multiply both sides by $4$: $3x = 24$. Divide by $3$: $x = 8$. Check: $\\frac{3 \\times 8}{4} = \\frac{24}{4} = 6$. ✓ Reversing the two steps — multiplying by $3$ and dividing by $4$ — gives $\\frac{9}{2}$, stopping at $3x = 24$ gives $24$, and multiplying by $3$ alone gives $18$.',
    },
    {
      q: 'Solve $\\frac{5x}{2} = 15$.',
      choices: ['$\\frac{75}{2}$', '$30$', '$6$', '$\\frac{3}{2}$'],
      answer: 2,
      solution:
        'Multiply both sides by $2$: $5x = 30$. Divide by $5$: $x = 6$. Check: $\\frac{5 \\times 6}{2} = \\frac{30}{2} = 15$. ✓ Multiplying by $5$ rather than dividing gives $\\frac{75}{2}$, stopping at $5x = 30$ gives $30$, and dividing by both numbers gives $\\frac{15}{10} = \\frac{3}{2}$.',
    },
    {
      q: 'Solve $\\frac{4x}{5} = 12$.',
      choices: ['$\\frac{48}{5}$', '$60$', '$\\frac{3}{5}$', '$15$'],
      answer: 3,
      solution:
        'Multiply both sides by $5$: $4x = 60$. Divide by $4$: $x = 15$. Check: $\\frac{4 \\times 15}{5} = \\frac{60}{5} = 12$. ✓ Multiplying by $4$ and dividing by $5$ reverses both steps and gives $\\frac{48}{5}$, stopping at $4x = 60$ gives $60$, and dividing by both numbers gives $\\frac{12}{20} = \\frac{3}{5}$.',
    },
  ],
  // p5 — distribute, then variables on both sides
  [
    {
      q: 'Solve $5(x + 2) = 3x + 26$.',
      choices: ['$12$', '$8$', '$2$', '$16$'],
      answer: 1,
      solution:
        'Distribute: $5x + 10 = 3x + 26$. Subtract $3x$: $2x + 10 = 26$. Subtract $10$: $2x = 16$, so $x = 8$. Check: $5(8 + 2) = 50$ and $3 \\times 8 + 26 = 50$. ✓ Forgetting to multiply the $2$ by $5$ gives $2x = 24$ and $x = 12$, adding $3x$ gives $8x = 16$ and $x = 2$, and stopping at $2x = 16$ gives $16$.',
    },
    {
      q: 'Solve $3(x + 5) = x + 27$.',
      choices: ['$11$', '$12$', '$6$', '$3$'],
      answer: 2,
      solution:
        'Distribute: $3x + 15 = x + 27$. Subtract $x$: $2x + 15 = 27$. Subtract $15$: $2x = 12$, so $x = 6$. Check: $3(6 + 5) = 33$ and $6 + 27 = 33$. ✓ Leaving the $5$ undistributed gives $2x = 22$ and $x = 11$, adding $x$ gives $4x = 12$ and $x = 3$, and forgetting the final division leaves $12$.',
    },
    {
      q: 'Solve $2(x + 7) = 5x + 2$.',
      choices: ['$\\frac{5}{3}$', '$\\frac{12}{7}$', '$12$', '$4$'],
      answer: 3,
      solution:
        'Distribute: $2x + 14 = 5x + 2$. Subtract $2x$: $14 = 3x + 2$. Subtract $2$: $12 = 3x$, so $x = 4$. Check: $2(4 + 7) = 22$ and $5 \\times 4 + 2 = 22$. ✓ Forgetting to multiply the $7$ by $2$ gives $3x = 5$ and $\\frac{5}{3}$, adding $2x$ instead of subtracting gives $7x = 12$ and $\\frac{12}{7}$, and stopping at $12 = 3x$ gives $12$.',
    },
  ],
  // p6 — clearing two denominators
  [
    {
      q: 'Solve $\\frac{x}{2} + \\frac{x}{5} = 14$.',
      choices: ['$20$', '$140$', '$2$', '$98$'],
      answer: 0,
      solution:
        'Multiply BOTH sides by $10$: $5x + 2x = 140$, so $7x = 140$ and $x = 20$. Check: $\\frac{20}{2} + \\frac{20}{5} = 10 + 4 = 14$. ✓ Stopping at $7x = 140$ gives $140$, multiplying only the left side by $10$ gives $7x = 14$ and $x = 2$, and adding the denominators into $\\frac{x}{7} = 14$ gives $98$.',
    },
    {
      q: 'Solve $\\frac{x}{4} + \\frac{x}{6} = 15$.',
      choices: ['$150$', '$36$', '$180$', '$3$'],
      answer: 1,
      solution:
        'Multiply both sides by $12$: $3x + 2x = 180$, so $5x = 180$ and $x = 36$. Check: $\\frac{36}{4} + \\frac{36}{6} = 9 + 6 = 15$. ✓ Adding the denominators into $\\frac{x}{10} = 15$ gives $150$, forgetting the final division leaves $180$, and multiplying only the left side by $12$ gives $5x = 15$ and $x = 3$.',
    },
    {
      q: 'Solve $\\frac{2x}{3} + \\frac{x}{6} = 5$.',
      choices: ['$30$', '$1$', '$6$', '$15$'],
      answer: 2,
      solution:
        'Multiply both sides by $6$: $4x + x = 30$, so $5x = 30$ and $x = 6$. Check: $\\frac{2 \\times 6}{3} + \\frac{6}{6} = 4 + 1 = 5$. ✓ Stopping at $5x = 30$ gives $30$, multiplying only the left side by $6$ gives $5x = 5$ and $x = 1$, and adding tops and bottoms into $\\frac{3x}{9} = \\frac{x}{3}$ gives $15$.',
    },
  ],
  // p7 — the variables vanish and leave something false
  [
    {
      q: 'Solve $3x - 2 = 3x + 6$.',
      choices: ['No solution', '$x = 8$', 'Every number is a solution', '$x = -8$'],
      answer: 0,
      solution:
        'Subtract $3x$ from both sides and every variable disappears, leaving $-2 = 6$ — false for every $x$. So there is no solution. The choices $x = 8$ and $x = -8$ come from treating the leftover numbers as an answer ($6 + 2$ or $-6 - 2$), and "every number" is the other special case, which needs a TRUE leftover statement.',
    },
    {
      q: 'Solve $2(4x + 3) = 8x + 5$.',
      choices: ['$x = 1$', 'Every number is a solution', 'No solution', '$x = -1$'],
      answer: 2,
      solution:
        'Distribute first: $8x + 6 = 8x + 5$. Subtracting $8x$ leaves $6 = 5$, which is false, so the equation has no solution. Glancing at the two sides and calling them identical gives "every number", while $x = 1$ and $x = -1$ come from subtracting the leftover numbers $6 - 5$ or $5 - 6$.',
    },
    {
      q: 'Solve $7 - 2x = 4 - 2x$.',
      choices: ['$x = 3$', 'Every number is a solution', '$x = -3$', 'No solution'],
      answer: 3,
      solution:
        'Add $2x$ to both sides and the variables vanish together, leaving $7 = 4$. That is false whatever $x$ is, so the equation has no solution. The choices $x = 3$ and $x = -3$ come from subtracting the leftover numbers, and "every number" would need the leftover statement to be true.',
    },
  ],
  // p8 — the variables vanish and leave something true
  [
    {
      q: 'Solve $5(x - 2) = 5x - 10$.',
      choices: ['Every number is a solution', 'No solution', '$x = 2$', '$x = 0$'],
      answer: 0,
      solution:
        'Distribute the left side: $5x - 10 = 5x - 10$. The two sides are identical, so subtracting $5x$ leaves $-10 = -10$, true for every $x$. Try $x = 1$ and $x = 4$: both work. "No solution" is the opposite case, $x = 2$ solves $x - 2 = 0$ instead, and $x = 0$ mistakes a true leftover statement for a value of $x$.',
    },
    {
      q: 'Solve $4x + 3(x + 2) = 7x + 6$.',
      choices: ['No solution', 'Every number is a solution', '$x = 6$', '$x = 0$'],
      answer: 1,
      solution:
        'Simplify the left side: $4x + 3x + 6 = 7x + 6$. That is exactly the right side, so every number is a solution. Check with $x = 2$: left $8 + 12 = 20$, right $14 + 6 = 20$. ✓ "No solution" needs a FALSE leftover statement, while $x = 6$ and $x = 0$ read the leftover $6 = 6$ as an answer.',
    },
    {
      q: 'Solve $3(2x - 4) = 2(3x - 6)$.',
      choices: ['$x = 2$', 'No solution', '$x = -2$', 'Every number is a solution'],
      answer: 3,
      solution:
        'Distribute on both sides: the left is $6x - 12$ and the right is $6x - 12$. They match, so the equation is true for every number — try $x = 0$ and $x = 5$. The choice $x = 2$ comes from solving $2x - 4 = 0$, $x = -2$ flips that sign, and "no solution" is the case where the leftover statement is false instead of true.',
    },
  ],
  // p9 — a fraction equal to a fraction
  [
    {
      q: 'Solve $\\frac{x + 6}{4} = \\frac{x}{3}$.',
      choices: ['$\\frac{18}{7}$', '$18$', '$-24$', '$6$'],
      answer: 1,
      solution:
        'Multiply both sides by $12$: $3(x + 6) = 4x$, so $3x + 18 = 4x$. Subtract $3x$: $x = 18$. Check: $\\frac{18 + 6}{4} = 6$ and $\\frac{18}{3} = 6$. ✓ Adding $3x$ gives $18 = 7x$ and $\\frac{18}{7}$, forgetting to multiply the $6$ by $3$ gives $x = 6$, and multiplying each side by its own denominator gives $4x + 24 = 3x$ and $-24$.',
    },
    {
      q: 'Solve $\\frac{x - 3}{2} = \\frac{x}{4}$.',
      choices: ['$3$', '$4$', '$6$', '$2$'],
      answer: 2,
      solution:
        'Multiply both sides by $4$: $2(x - 3) = x$, so $2x - 6 = x$ and $x = 6$. Check: $\\frac{6 - 3}{2} = \\frac{3}{2}$ and $\\frac{6}{4} = \\frac{3}{2}$. ✓ Forgetting that the $2$ multiplies the $-3$ gives $2x - 3 = x$ and $x = 3$; ignoring the denominator $2$ altogether gives $4x - 12 = x$ and $x = 4$; and moving the $x$ across with the wrong sign gives $3x - 6 = 0$ and $x = 2$.',
    },
    {
      q: 'Solve $\\frac{x}{3} = \\frac{x - 4}{2}$.',
      choices: ['$\\frac{12}{5}$', '$4$', '$-12$', '$12$'],
      answer: 3,
      solution:
        'Multiply both sides by $6$: $2x = 3(x - 4)$, so $2x = 3x - 12$. Subtract $3x$: $-x = -12$, giving $x = 12$. Check: $\\frac{12}{3} = 4$ and $\\frac{12 - 4}{2} = 4$. ✓ Adding $3x$ gives $5x = 12$ and $\\frac{12}{5}$, forgetting to multiply the $-4$ by $3$ gives $x = 4$, and mishandling the final sign gives $-12$.',
    },
  ],
  // p10 — distribute over a difference, variables on both sides
  [
    {
      q: 'Solve $4(2x - 3) = 5x + 9$.',
      choices: ['$7$', '$4$', '$21$', '$\\frac{21}{13}$'],
      answer: 0,
      solution:
        'Distribute: $8x - 12 = 5x + 9$ — the $4$ multiplies the $-3$ as well. Subtract $5x$: $3x - 12 = 9$. Add $12$: $3x = 21$, so $x = 7$. Check: $4(14 - 3) = 44$ and $5 \\times 7 + 9 = 44$. ✓ Leaving the $-3$ undistributed gives $3x = 12$ and $x = 4$, stopping at $3x = 21$ gives $21$, and adding $5x$ gives $13x = 21$ and $\\frac{21}{13}$.',
    },
    {
      q: 'Solve $4(x - 5) = x + 7$.',
      choices: ['$\\frac{27}{5}$', '$4$', '$9$', '$27$'],
      answer: 2,
      solution:
        'Distribute: $4x - 20 = x + 7$. Subtract $x$: $3x - 20 = 7$. Add $20$: $3x = 27$, so $x = 9$. Check: $4(9 - 5) = 16$ and $9 + 7 = 16$. ✓ Forgetting that the $4$ hits the $-5$ gives $3x = 12$ and $x = 4$, adding $x$ instead of subtracting gives $5x = 27$ and $\\frac{27}{5}$, and stopping at $3x = 27$ gives $27$.',
    },
    {
      q: 'Solve $2(4x + 1) = 3x + 12$.',
      choices: ['$\\frac{10}{11}$', '$\\frac{11}{5}$', '$10$', '$2$'],
      answer: 3,
      solution:
        'Distribute: $8x + 2 = 3x + 12$. Subtract $3x$: $5x + 2 = 12$. Subtract $2$: $5x = 10$, so $x = 2$. Check: $2(8 + 1) = 18$ and $3 \\times 2 + 12 = 18$. ✓ Forgetting to multiply the $1$ by $2$ gives $5x = 11$ and $\\frac{11}{5}$, adding $3x$ gives $11x = 10$ and $\\frac{10}{11}$, and stopping at $5x = 10$ gives $10$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 5,
  sections: {
    '5.1': s51,
    '5.2': s52,
    '5.3': s53,
  },
}
