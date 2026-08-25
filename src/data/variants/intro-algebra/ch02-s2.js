// Introduction to Algebra chapter 2 — variations for sections 2.3 and 2.4.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every simplification was verified numerically by evaluating the original
//    expression and the keyed answer at several values of the variable,
//    including a negative one and values other than 0, 1, and 2.
//  - Every distributed negative was checked twice: once by working inside the
//    parentheses first, once term by term after the flip. $-(a - b) = b - a$.
//  - Every factoring answer was checked by expanding it back out, term by term.
//  - Fraction arithmetic is exact integer work with gcd reduction; no decimals.
//  - No two choices in an item share a VALUE. An "incompletely factored" form
//    is algebraically equal to the key, so it is never used as a distractor.
//  - Numbers were chosen so the named wrong method never lands on the correct
//    answer; coefficients of 0, 1, and 2 are avoided where a sign or
//    distribution slip would otherwise agree with the key.

const s23 = [
  // p1 — distribute a positive constant over a sum
  [
    {
      q: 'Expand $5(x + 3)$.',
      choices: ['$5x + 3$', '$5x + 15$', '$x + 15$', '$5x + 8$'],
      answer: 1,
      solution:
        'The $5$ multiplies EVERY term inside: $5 \\cdot x = 5x$ and $5 \\cdot 3 = 15$, so $5(x + 3) = 5x + 15$. Check at $x = 4$: the original is $5 \\cdot 7 = 35$, and $5(4) + 15 = 35$. ✓ Check at $x = -2$: the original is $5 \\cdot 1 = 5$, and $-10 + 15 = 5$. ✓ The choice $5x + 3$ leaves the $3$ untouched — the classic slip. The choice $x + 15$ makes the opposite mistake and multiplies only the constant. The choice $5x + 8$ adds $5 + 3$ instead of multiplying.',
    },
    {
      q: 'Expand $6(y + 7)$.',
      choices: ['$6y + 7$', '$y + 42$', '$6y + 42$', '$6y + 13$'],
      answer: 2,
      solution:
        'Distribute the $6$ to both terms: $6 \\cdot y = 6y$ and $6 \\cdot 7 = 42$, giving $6y + 42$. Check at $y = 5$: the original is $6 \\cdot 12 = 72$, and $30 + 42 = 72$. ✓ At $y = -3$: the original is $6 \\cdot 4 = 24$, and $-18 + 42 = 24$. ✓ The choice $6y + 7$ never multiplies the $7$; the choice $y + 42$ never multiplies the $y$; and $6y + 13$ adds $6 + 7$ where it should multiply.',
    },
    {
      q: 'Each gift bag holds $x$ stickers and $9$ erasers. Which expression gives the total number of items in $4$ identical bags?',
      choices: ['$4x + 9$', '$x + 36$', '$4x + 13$', '$4x + 36$'],
      answer: 3,
      solution:
        'One bag holds $x + 9$ items, so four bags hold $4(x + 9)$. Distribute: $4 \\cdot x = 4x$ and $4 \\cdot 9 = 36$, giving $4x + 36$. Check at $x = 5$: each bag has $14$ items and four bags have $56$, and $4(5) + 36 = 56$. ✓ The choice $4x + 9$ counts four bags of stickers but only one bag of erasers. The choice $x + 36$ does the reverse. The choice $4x + 13$ adds $4 + 9$ instead of multiplying.',
    },
  ],
  // p2 — distribute over a difference
  [
    {
      q: 'Expand $3(4x - 5)$.',
      choices: ['$12x - 15$', '$12x - 5$', '$12x + 15$', '$7x - 15$'],
      answer: 0,
      solution:
        'Distribute the $3$ to each term, sign and all: $3 \\cdot 4x = 12x$ and $3 \\cdot (-5) = -15$. So $3(4x - 5) = 12x - 15$. Check at $x = 4$: the original is $3 \\cdot 11 = 33$, and $48 - 15 = 33$. ✓ At $x = -1$: the original is $3 \\cdot (-9) = -27$, and $-12 - 15 = -27$. ✓ The choice $12x - 5$ leaves the $-5$ unmultiplied. The choice $12x + 15$ flips a sign that should not flip — a positive times a negative stays negative. The choice $7x - 15$ adds $3 + 4$ instead of multiplying them.',
    },
    {
      q: 'Expand $4(2y - 7)$.',
      choices: ['$8y - 7$', '$8y - 28$', '$8y + 28$', '$6y - 28$'],
      answer: 1,
      solution:
        'Each term inside gets multiplied by $4$: $4 \\cdot 2y = 8y$ and $4 \\cdot (-7) = -28$, so the answer is $8y - 28$. Check at $y = 5$: the original is $4 \\cdot 3 = 12$, and $40 - 28 = 12$. ✓ At $y = -2$: the original is $4 \\cdot (-11) = -44$, and $-16 - 28 = -44$. ✓ The choice $8y - 7$ forgets to multiply the $-7$. The choice $8y + 28$ turns the subtraction into an addition for no reason. The choice $6y - 28$ adds $4 + 2$ rather than multiplying.',
    },
    {
      q: 'Expand $6(3x - 2)$.',
      choices: ['$18x - 2$', '$18x + 12$', '$9x - 12$', '$18x - 12$'],
      answer: 3,
      solution:
        'Multiply the $6$ into both terms: $6 \\cdot 3x = 18x$ and $6 \\cdot (-2) = -12$, giving $18x - 12$. Check at $x = 5$: the original is $6 \\cdot 13 = 78$, and $90 - 12 = 78$. ✓ At $x = -3$: the original is $6 \\cdot (-11) = -66$, and $-54 - 12 = -66$. ✓ The choice $18x - 2$ leaves the $-2$ alone. The choice $18x + 12$ invents a sign flip. The choice $9x - 12$ adds $6 + 3$ where multiplication belongs.',
    },
  ],
  // p3 — subtracting a whole parenthesized expression
  [
    {
      q: 'Simplify $8y - (3y - 5)$.',
      choices: ['$5y + 5$', '$5y - 5$', '$11y - 5$', '$11y + 5$'],
      answer: 0,
      solution:
        'The minus sign in front of the parentheses distributes as $-1$, so BOTH signs inside flip: $-(3y - 5) = -3y + 5$. Now combine: $8y - 3y + 5 = 5y + 5$. Check at $y = 3$: the original is $24 - (9 - 5) = 24 - 4 = 20$, and $15 + 5 = 20$. ✓ At $y = -1$: the original is $-8 - (-3 - 5) = -8 + 8 = 0$, and $-5 + 5 = 0$. ✓ The choice $5y - 5$ is the famous mistake: the $-5$ inside never got flipped. The choices $11y - 5$ and $11y + 5$ add the $3y$ instead of subtracting it.',
    },
    {
      q: 'Simplify $10x - (6x - 4)$.',
      choices: ['$4x - 4$', '$4x + 4$', '$16x - 4$', '$16x + 4$'],
      answer: 1,
      solution:
        'Flip every sign inside the parentheses: $-(6x - 4) = -6x + 4$. Then $10x - 6x + 4 = 4x + 4$. Check at $x = 3$: the original is $30 - (18 - 4) = 30 - 14 = 16$, and $12 + 4 = 16$. ✓ At $x = -2$: the original is $-20 - (-12 - 4) = -20 + 16 = -4$, and $-8 + 4 = -4$. ✓ The choice $4x - 4$ flips only the first term inside. The choices $16x - 4$ and $16x + 4$ add the $6x$ rather than subtracting it.',
    },
    {
      q: 'Simplify $7a - (a - 6)$.',
      choices: ['$6a - 6$', '$8a - 6$', '$6a + 6$', '$8a + 6$'],
      answer: 2,
      solution:
        'The lone $a$ inside is $1a$, and the minus sign flips both terms: $-(a - 6) = -a + 6$. So $7a - a + 6 = 6a + 6$. Check at $a = 4$: the original is $28 - (4 - 6) = 28 + 2 = 30$, and $24 + 6 = 30$. ✓ At $a = -3$: the original is $-21 - (-3 - 6) = -21 + 9 = -12$, and $-18 + 6 = -12$. ✓ The choice $6a - 6$ leaves the $-6$ unflipped. The choices $8a - 6$ and $8a + 6$ add $7a + a$ instead of subtracting.',
    },
  ],
  // p4 — factor a common constant out of a linear expression
  [
    {
      q: 'Factor $10x + 25$.',
      choices: ['$5(2x + 5)$', '$5(2x + 25)$', '$10(x + 5)$', '$5(x + 5)$'],
      answer: 0,
      solution:
        'The greatest common factor of $10x$ and $25$ is $5$: $10x \\div 5 = 2x$ and $25 \\div 5 = 5$, so $10x + 25 = 5(2x + 5)$. Always check by distributing: $5 \\cdot 2x + 5 \\cdot 5 = 10x + 25$. ✓ The choice $5(2x + 25)$ divides only the first term, and expands to $10x + 125$. The choice $10(x + 5)$ pulls out $10$ but still divides the $25$ by $5$; it expands to $10x + 50$. The choice $5(x + 5)$ loses the $2$ and expands to $5x + 25$.',
    },
    {
      q: 'Factor $14x + 21$.',
      choices: ['$7(2x + 21)$', '$14(x + 3)$', '$7(2x + 3)$', '$7(x + 3)$'],
      answer: 2,
      solution:
        'Both $14x$ and $21$ are divisible by $7$: $14x \\div 7 = 2x$ and $21 \\div 7 = 3$, so $14x + 21 = 7(2x + 3)$. Distribute to confirm: $7 \\cdot 2x + 7 \\cdot 3 = 14x + 21$. ✓ The choice $7(2x + 21)$ never divides the $21$ and expands to $14x + 147$. The choice $14(x + 3)$ takes out $14$ but divides the $21$ by $7$; it expands to $14x + 42$. The choice $7(x + 3)$ drops the $2$ and expands to $7x + 21$.',
    },
    {
      q: 'Factor $8y + 20$.',
      choices: ['$4(2y + 20)$', '$8(y + 5)$', '$2(4y + 5)$', '$4(2y + 5)$'],
      answer: 3,
      solution:
        'The greatest common factor of $8$ and $20$ is $4$: $8y \\div 4 = 2y$ and $20 \\div 4 = 5$, so $8y + 20 = 4(2y + 5)$. Expand to check: $4 \\cdot 2y + 4 \\cdot 5 = 8y + 20$. ✓ The choice $4(2y + 20)$ forgets to divide the $20$ and expands to $8y + 80$. The choice $8(y + 5)$ pulls out $8$ but divides the $20$ by $4$; it expands to $8y + 40$. The choice $2(4y + 5)$ divides the two terms by different numbers and expands to $8y + 10$.',
    },
  ],
  // p5 — distribute a NEGATIVE constant
  [
    {
      q: 'Expand $-3(x - 5)$.',
      choices: ['$-3x + 15$', '$-3x - 15$', '$-3x - 5$', '$3x - 15$'],
      answer: 0,
      solution:
        'Distribute $-3$ to each term: $-3 \\cdot x = -3x$, and $-3 \\cdot (-5) = +15$ because a negative times a negative is positive. So $-3(x - 5) = -3x + 15$. Check at $x = 4$: the original is $-3 \\cdot (-1) = 3$, and $-12 + 15 = 3$. ✓ At $x = 7$: the original is $-3 \\cdot 2 = -6$, and $-21 + 15 = -6$. ✓ At $x = -1$: the original is $-3 \\cdot (-6) = 18$, and $3 + 15 = 18$. ✓ The choice $-3x - 15$ keeps the second term negative — the single most common error here. The choice $-3x - 5$ never multiplies the $-5$, and $3x - 15$ loses the outer minus sign.',
    },
    {
      q: 'Expand $-6(2x - 3)$.',
      choices: ['$-12x - 18$', '$-12x + 18$', '$-12x - 3$', '$12x - 18$'],
      answer: 1,
      solution:
        'Multiply $-6$ into both terms: $-6 \\cdot 2x = -12x$ and $-6 \\cdot (-3) = +18$. So $-6(2x - 3) = -12x + 18$. Check at $x = 5$: the original is $-6 \\cdot 7 = -42$, and $-60 + 18 = -42$. ✓ At $x = 3$: the original is $-6 \\cdot 3 = -18$, and $-36 + 18 = -18$. ✓ At $x = -2$: the original is $-6 \\cdot (-7) = 42$, and $24 + 18 = 42$. ✓ The choice $-12x - 18$ forgets that two negatives make a positive. The choice $-12x - 3$ leaves the $-3$ unmultiplied, and $12x - 18$ drops the outer minus.',
    },
    {
      q: 'Expand $-5(y - 4)$.',
      choices: ['$-5y - 20$', '$-5y - 4$', '$5y - 20$', '$-5y + 20$'],
      answer: 3,
      solution:
        'Take $-5$ to each term: $-5 \\cdot y = -5y$ and $-5 \\cdot (-4) = +20$. So $-5(y - 4) = -5y + 20$. Check at $y = 6$: the original is $-5 \\cdot 2 = -10$, and $-30 + 20 = -10$. ✓ At $y = 3$: the original is $-5 \\cdot (-1) = 5$, and $-15 + 20 = 5$. ✓ At $y = -3$: the original is $-5 \\cdot (-7) = 35$, and $15 + 20 = 35$. ✓ The choice $-5y - 20$ keeps the wrong sign on the second term. The choice $-5y - 4$ never multiplies the $-4$, and $5y - 20$ throws away the outer minus sign.',
    },
  ],
  // p6 — order of operations: distribute before adding the outside constant
  [
    {
      q: 'Simplify $5 + 3(2x + 4)$.',
      choices: ['$16x + 32$', '$6x + 17$', '$6x + 9$', '$6x + 12$'],
      answer: 1,
      solution:
        'Multiplication comes before addition, so distribute first: $3(2x + 4) = 6x + 12$. Then add the $5$: $6x + 12 + 5 = 6x + 17$. Check at $x = 3$: the original is $5 + 3 \\cdot 10 = 35$, and $18 + 17 = 35$. ✓ At $x = -2$: the original is $5 + 3 \\cdot 0 = 5$, and $-12 + 17 = 5$. ✓ The choice $16x + 32$ adds $5 + 3$ first and then distributes $8$, which breaks the order of operations. The choice $6x + 9$ never multiplies the $4$ by $3$ ($5 + 6x + 4$). The choice $6x + 12$ forgets the $+5$ entirely.',
    },
    {
      q: 'Simplify $8 + 5(2x + 3)$.',
      choices: ['$26x + 39$', '$10x + 11$', '$10x + 23$', '$10x + 15$'],
      answer: 2,
      solution:
        'Distribute before adding: $5(2x + 3) = 10x + 15$, and then $10x + 15 + 8 = 10x + 23$. Check at $x = 4$: the original is $8 + 5 \\cdot 11 = 63$, and $40 + 23 = 63$. ✓ At $x = -3$: the original is $8 + 5 \\cdot (-3) = -7$, and $-30 + 23 = -7$. ✓ The choice $26x + 39$ adds $8 + 5$ first and distributes $13$. The choice $10x + 11$ multiplies only the $2x$, leaving $8 + 10x + 3$. The choice $10x + 15$ drops the $8$.',
    },
    {
      q: 'Simplify $6 + 2(4x + 5)$.',
      choices: ['$32x + 40$', '$8x + 11$', '$8x + 10$', '$8x + 16$'],
      answer: 3,
      solution:
        'Expand first: $2(4x + 5) = 8x + 10$. Then add the $6$: $8x + 10 + 6 = 8x + 16$. Check at $x = 5$: the original is $6 + 2 \\cdot 25 = 56$, and $40 + 16 = 56$. ✓ At $x = -2$: the original is $6 + 2 \\cdot (-3) = 0$, and $-16 + 16 = 0$. ✓ The choice $32x + 40$ adds $6 + 2$ first and then distributes $8$. The choice $8x + 11$ never multiplies the $5$ ($6 + 8x + 5$). The choice $8x + 10$ leaves the $+6$ out.',
    },
  ],
  // p7 — factor a common monomial out of a quadratic sum
  [
    {
      q: 'Factor $6x^2 + 9x$ completely.',
      choices: ['$3x(2x + 3)$', '$3x(2x + 9)$', '$6x(x + 3)$', '$9x(x + 1)$'],
      answer: 0,
      solution:
        'The coefficients $6$ and $9$ share a $3$, and both terms carry an $x$, so the greatest common factor is $3x$. Dividing: $6x^2 \\div 3x = 2x$ and $9x \\div 3x = 3$, giving $3x(2x + 3)$. Expand to check: $3x \\cdot 2x + 3x \\cdot 3 = 6x^2 + 9x$. ✓ The choice $3x(2x + 9)$ never divides the second term and expands to $6x^2 + 27x$. The choice $6x(x + 3)$ takes out $6x$ but still divides $9x$ by $3x$; it expands to $6x^2 + 18x$. The choice $9x(x + 1)$ expands to $9x^2 + 9x$.',
    },
    {
      q: 'Factor $9y^2 + 6y$ completely.',
      choices: ['$3y(3y + 6)$', '$9y(y + 6)$', '$3y(3y + 2)$', '$3y(y + 2)$'],
      answer: 2,
      solution:
        'The greatest common factor of $9y^2$ and $6y$ is $3y$. Dividing: $9y^2 \\div 3y = 3y$ and $6y \\div 3y = 2$, so $9y^2 + 6y = 3y(3y + 2)$. Expand to check: $3y \\cdot 3y + 3y \\cdot 2 = 9y^2 + 6y$. ✓ The choice $3y(3y + 6)$ leaves the $6$ undivided and expands to $9y^2 + 18y$. The choice $9y(y + 6)$ takes out $9y$, which does not divide $6y$ evenly, and expands to $9y^2 + 54y$. The choice $3y(y + 2)$ divides the first term by $3y$ twice over and expands to $3y^2 + 6y$.',
    },
    {
      q: 'Factor $12x^2 + 8x$ completely.',
      choices: ['$4x(3x + 8)$', '$12x(x + 2)$', '$4(3x^2 + 2)$', '$4x(3x + 2)$'],
      answer: 3,
      solution:
        'The coefficients share a $4$ and both terms carry an $x$, so the greatest common factor is $4x$. Dividing: $12x^2 \\div 4x = 3x$ and $8x \\div 4x = 2$, giving $4x(3x + 2)$. Expand to check: $4x \\cdot 3x + 4x \\cdot 2 = 12x^2 + 8x$. ✓ The choice $4x(3x + 8)$ never divides the $8x$ and expands to $12x^2 + 32x$. The choice $12x(x + 2)$ pulls out $12x$ but divides $8x$ by $4x$; it expands to $12x^2 + 24x$. The choice $4(3x^2 + 2)$ takes the $x$ out of the second term but forgets to write it outside, and expands to $12x^2 + 8$.',
    },
  ],
  // p8 — subtract a parenthesized sum, then a stray constant
  [
    {
      q: 'Simplify $9x - (4x + 3) - 5$.',
      choices: ['$5x - 8$', '$5x - 2$', '$13x - 8$', '$5x + 8$'],
      answer: 0,
      solution:
        'The minus sign flips both terms inside: $-(4x + 3) = -4x - 3$. So the expression becomes $9x - 4x - 3 - 5$. The $x$-team gives $5x$ and the constants give $-3 - 5 = -8$, so the answer is $5x - 8$. Check at $x = 4$: the original is $36 - 19 - 5 = 12$, and $20 - 8 = 12$. ✓ At $x = -1$: the original is $-9 - (-1) - 5 = -13$, and $-5 - 8 = -13$. ✓ The choice $5x - 2$ leaves the $+3$ unflipped. The choice $13x - 8$ adds the $4x$ instead of subtracting it, and $5x + 8$ gets the constants backwards.',
    },
    {
      q: 'Simplify $12y - (5y + 4) - 6$.',
      choices: ['$7y - 2$', '$7y - 10$', '$17y - 10$', '$7y + 10$'],
      answer: 1,
      solution:
        'Flip both signs inside: $-(5y + 4) = -5y - 4$, giving $12y - 5y - 4 - 6$. Combine: $7y$ from the $y$-team and $-4 - 6 = -10$ from the constants, so the answer is $7y - 10$. Check at $y = 5$: the original is $60 - 29 - 6 = 25$, and $35 - 10 = 25$. ✓ At $y = -2$: the original is $-24 - (-6) - 6 = -24$, and $-14 - 10 = -24$. ✓ The choice $7y - 2$ never flips the $+4$. The choice $17y - 10$ adds the $5y$, and $7y + 10$ has the wrong sign on the constant.',
    },
    {
      q: 'Simplify $10a - (2a + 7) - 3$.',
      choices: ['$8a + 4$', '$12a - 10$', '$8a - 10$', '$8a + 10$'],
      answer: 2,
      solution:
        'Distribute the minus sign: $-(2a + 7) = -2a - 7$, so we have $10a - 2a - 7 - 3$. That gives $8a$ and $-7 - 3 = -10$, so the answer is $8a - 10$. Check at $a = 6$: the original is $60 - 19 - 3 = 38$, and $48 - 10 = 38$. ✓ At $a = -1$: the original is $-10 - 5 - 3 = -18$, and $-8 - 10 = -18$. ✓ The choice $8a + 4$ leaves the $+7$ unflipped ($10a - 2a + 7 - 3$). The choice $12a - 10$ adds the $2a$, and $8a + 10$ flips the constant the wrong way.',
    },
  ],
  // p9 — expand two products, the second with a negative in front
  [
    {
      q: 'Simplify $4(3x + 2) - 3(x - 5)$.',
      choices: ['$9x + 23$', '$9x - 7$', '$12x + 23$', '$9x + 13$'],
      answer: 0,
      solution:
        'Expand each piece. First $4(3x + 2) = 12x + 8$. Then $-3(x - 5) = -3x + 15$, since $-3 \\cdot (-5) = +15$. Combine: $12x - 3x = 9x$ and $8 + 15 = 23$, so the answer is $9x + 23$. Check at $x = 3$: the original is $4 \\cdot 11 - 3 \\cdot (-2) = 44 + 6 = 50$, and $27 + 23 = 50$. ✓ At $x = -2$: the original is $4 \\cdot (-4) - 3 \\cdot (-7) = -16 + 21 = 5$, and $-18 + 23 = 5$. ✓ The choice $9x - 7$ comes from $12x + 8 - 3x - 15$, where the $-3$ never reached the $-5$. The choice $12x + 23$ drops the $-3x$. The choice $9x + 13$ multiplies only the $x$ by $-3$ and merely flips the $-5$ to $+5$.',
    },
    {
      q: 'Simplify $5(x + 3) - 2(x - 6)$.',
      choices: ['$3x + 3$', '$5x + 27$', '$3x + 27$', '$3x + 21$'],
      answer: 2,
      solution:
        'Expand both products: $5(x + 3) = 5x + 15$, and $-2(x - 6) = -2x + 12$ because $-2 \\cdot (-6) = +12$. Combine: $5x - 2x = 3x$ and $15 + 12 = 27$, so the answer is $3x + 27$. Check at $x = 4$: the original is $5 \\cdot 7 - 2 \\cdot (-2) = 35 + 4 = 39$, and $12 + 27 = 39$. ✓ At $x = -3$: the original is $5 \\cdot 0 - 2 \\cdot (-9) = 18$, and $-9 + 27 = 18$. ✓ The choice $3x + 3$ comes from $5x + 15 - 2x - 12$, where the $-6$ never got its sign flipped. The choice $5x + 27$ forgets to subtract the $2x$. The choice $3x + 21$ multiplies only the $x$ by $-2$, turning the $-6$ into a bare $+6$.',
    },
    {
      q: 'Simplify $2(4x + 5) - 3(x - 2)$.',
      choices: ['$5x + 4$', '$8x + 16$', '$5x + 12$', '$5x + 16$'],
      answer: 3,
      solution:
        'Expand each piece: $2(4x + 5) = 8x + 10$, and $-3(x - 2) = -3x + 6$ since $-3 \\cdot (-2) = +6$. Combine: $8x - 3x = 5x$ and $10 + 6 = 16$, so the answer is $5x + 16$. Check at $x = 3$: the original is $2 \\cdot 17 - 3 \\cdot 1 = 34 - 3 = 31$, and $15 + 16 = 31$. ✓ At $x = -1$: the original is $2 \\cdot 1 - 3 \\cdot (-3) = 2 + 9 = 11$, and $-5 + 16 = 11$. ✓ The choice $5x + 4$ comes from $8x + 10 - 3x - 6$, missing the sign flip on the $-2$. The choice $8x + 16$ drops the $-3x$, and $5x + 12$ flips the $-2$ to $+2$ without multiplying it by $3$.',
    },
  ],
  // p10 — factor a common monomial out of a quadratic DIFFERENCE
  [
    {
      q: 'Factor $15x^2 - 20x$ completely.',
      choices: ['$5x(3x + 4)$', '$5x(3x - 4)$', '$5(3x - 4)$', '$5x(x - 4)$'],
      answer: 1,
      solution:
        'The coefficients $15$ and $20$ share a $5$, and both terms carry an $x$, so the greatest common factor is $5x$. Dividing: $15x^2 \\div 5x = 3x$ and $-20x \\div 5x = -4$, so $15x^2 - 20x = 5x(3x - 4)$. Expand to check: $5x \\cdot 3x - 5x \\cdot 4 = 15x^2 - 20x$. ✓ The sign inside must stay negative, so the choice $5x(3x + 4)$ — which expands to $15x^2 + 20x$ — is out. The choice $5(3x - 4)$ leaves the $x$ behind and expands to $15x - 20$, which is not even a quadratic. The choice $5x(x - 4)$ expands to $5x^2 - 20x$.',
    },
    {
      q: 'Factor $20y^2 - 12y$ completely.',
      choices: ['$4y(5y + 3)$', '$4(5y - 3)$', '$4y(5y - 3)$', '$4y(y - 3)$'],
      answer: 2,
      solution:
        'The greatest common factor of $20y^2$ and $12y$ is $4y$: $20y^2 \\div 4y = 5y$ and $-12y \\div 4y = -3$. So $20y^2 - 12y = 4y(5y - 3)$. Expand to check: $4y \\cdot 5y - 4y \\cdot 3 = 20y^2 - 12y$. ✓ The choice $4y(5y + 3)$ loses the minus sign and expands to $20y^2 + 12y$. The choice $4(5y - 3)$ forgets to pull out the $y$ as well, and expands to $20y - 12$. The choice $4y(y - 3)$ expands to $4y^2 - 12y$.',
    },
    {
      q: 'Factor $24x^2 - 16x$ completely.',
      choices: ['$8x(3x + 2)$', '$8(3x - 2)$', '$8x(x - 2)$', '$8x(3x - 2)$'],
      answer: 3,
      solution:
        'The greatest common factor of $24$ and $16$ is $8$, and both terms carry an $x$, so pull out $8x$: $24x^2 \\div 8x = 3x$ and $-16x \\div 8x = -2$. That gives $8x(3x - 2)$. Expand to check: $8x \\cdot 3x - 8x \\cdot 2 = 24x^2 - 16x$. ✓ The choice $8x(3x + 2)$ drops the minus sign and expands to $24x^2 + 16x$. The choice $8(3x - 2)$ leaves the $x$ inside the first term unaccounted for and expands to $24x - 16$. The choice $8x(x - 2)$ expands to $8x^2 - 16x$.',
    },
  ],
]

const s24 = [
  // p1 — reduce a fraction whose numerator carries the variable
  [
    {
      q: 'Simplify $\\frac{15x}{20}$.',
      choices: ['$\\frac{3x}{4}$', '$\\frac{3}{4}$', '$\\frac{4x}{3}$', '$\\frac{x}{4}$'],
      answer: 0,
      solution:
        'The common factor of $15$ and $20$ is $5$. Divide top and bottom by it: $\\frac{15x}{20} = \\frac{3x}{4}$. The $x$ stays on top — nothing divided it. Check at $x = 8$: the original is $\\frac{120}{20} = 6$, and $\\frac{3 \\cdot 8}{4} = 6$. ✓ The choice $\\frac{3}{4}$ loses the $x$ altogether. The choice $\\frac{4x}{3}$ turns the fraction upside down. The choice $\\frac{x}{4}$ divides the top by $15$ but the bottom by only $5$ — top and bottom must be divided by the SAME number.',
    },
    {
      q: 'Simplify $\\frac{20y}{25}$.',
      choices: ['$\\frac{4}{5}$', '$\\frac{4y}{5}$', '$\\frac{5y}{4}$', '$\\frac{y}{5}$'],
      answer: 1,
      solution:
        'Divide top and bottom by their common factor $5$: $\\frac{20y}{25} = \\frac{4y}{5}$. Check at $y = 10$: the original is $\\frac{200}{25} = 8$, and $\\frac{4 \\cdot 10}{5} = 8$. ✓ The choice $\\frac{4}{5}$ drops the $y$. The choice $\\frac{5y}{4}$ flips the fraction over. The choice $\\frac{y}{5}$ divides the top by $20$ and the bottom by only $5$.',
    },
    {
      q: 'Simplify $\\frac{9m}{24}$.',
      choices: ['$\\frac{3}{8}$', '$\\frac{8m}{3}$', '$\\frac{3m}{8}$', '$\\frac{m}{8}$'],
      answer: 2,
      solution:
        'The greatest common factor of $9$ and $24$ is $3$: $9 \\div 3 = 3$ and $24 \\div 3 = 8$, so $\\frac{9m}{24} = \\frac{3m}{8}$. Check at $m = 8$: the original is $\\frac{72}{24} = 3$, and $\\frac{3 \\cdot 8}{8} = 3$. ✓ The choice $\\frac{3}{8}$ throws the $m$ away. The choice $\\frac{8m}{3}$ is upside down. The choice $\\frac{m}{8}$ divides the top by $9$ while dividing the bottom by only $3$.',
    },
  ],
  // p2 — cancel a variable factor from top and bottom
  [
    {
      q: 'Simplify $\\frac{9ab}{3a}$ (assume $a \\neq 0$).',
      choices: ['$3b$', '$3ab$', '$3a$', '$\\frac{b}{3}$'],
      answer: 0,
      solution:
        'Cancel the common factors: $\\frac{9}{3} = 3$, and the $a$ on top cancels the $a$ on the bottom, leaving $3b$. Check at $a = 2$, $b = 5$: the original is $\\frac{90}{6} = 15$, and $3 \\cdot 5 = 15$. ✓ The choice $3ab$ never cancels the $a$. The choice $3a$ cancels the wrong letter and keeps the one that should have gone. The choice $\\frac{b}{3}$ divides $3$ by $9$ instead of $9$ by $3$. (We need $a \\neq 0$ so the original fraction makes sense.)',
    },
    {
      q: 'Simplify $\\frac{10mn}{5n}$ (assume $n \\neq 0$).',
      choices: ['$2mn$', '$2n$', '$2m$', '$\\frac{m}{2}$'],
      answer: 2,
      solution:
        'Divide the numbers, $\\frac{10}{5} = 2$, and cancel the $n$ that appears on both top and bottom. What is left is $2m$. Check at $m = 3$, $n = 4$: the original is $\\frac{120}{20} = 6$, and $2 \\cdot 3 = 6$. ✓ The choice $2mn$ forgets to cancel the $n$. The choice $2n$ keeps the letter that cancelled and drops the one that survived. The choice $\\frac{m}{2}$ divides $5$ by $10$ the wrong way round. (The restriction $n \\neq 0$ keeps the bottom from being zero.)',
    },
    {
      q: 'Simplify $\\frac{12pq}{4q}$ (assume $q \\neq 0$).',
      choices: ['$3pq$', '$3q$', '$\\frac{p}{3}$', '$3p$'],
      answer: 3,
      solution:
        'The numbers give $\\frac{12}{4} = 3$, and the $q$ on top cancels the $q$ on the bottom, so the result is $3p$. Check at $p = 5$, $q = 2$: the original is $\\frac{120}{8} = 15$, and $3 \\cdot 5 = 15$. ✓ The choice $3pq$ leaves the $q$ uncancelled. The choice $3q$ keeps the cancelled letter instead of the surviving one. The choice $\\frac{p}{3}$ inverts the division of the numbers. (We need $q \\neq 0$ for the original fraction to exist.)',
    },
  ],
  // p3 — add two fractions with unlike denominators
  [
    {
      q: 'Compute $\\frac{x}{3} + \\frac{x}{4}$.',
      choices: ['$\\frac{2x}{7}$', '$\\frac{7x}{12}$', '$\\frac{x}{7}$', '$\\frac{x^2}{12}$'],
      answer: 1,
      solution:
        'The least common denominator of $3$ and $4$ is $12$: $\\frac{x}{3} = \\frac{4x}{12}$ and $\\frac{x}{4} = \\frac{3x}{12}$. Now the numerators are like terms: $\\frac{4x + 3x}{12} = \\frac{7x}{12}$. Check at $x = 12$: $4 + 3 = 7$, and $\\frac{7 \\cdot 12}{12} = 7$. ✓ The choice $\\frac{2x}{7}$ adds tops and bottoms separately — denominators must match first. The choice $\\frac{x}{7}$ adds only the denominators, and $\\frac{x^2}{12}$ multiplies the fractions instead of adding them.',
    },
    {
      q: 'Compute $\\frac{y}{4} + \\frac{y}{5}$.',
      choices: ['$\\frac{2y}{9}$', '$\\frac{y}{9}$', '$\\frac{9y}{20}$', '$\\frac{y^2}{20}$'],
      answer: 2,
      solution:
        'Use the common denominator $20$: $\\frac{y}{4} = \\frac{5y}{20}$ and $\\frac{y}{5} = \\frac{4y}{20}$, so the sum is $\\frac{5y + 4y}{20} = \\frac{9y}{20}$. Check at $y = 20$: $5 + 4 = 9$, and $\\frac{9 \\cdot 20}{20} = 9$. ✓ The choice $\\frac{2y}{9}$ adds straight across, top to top and bottom to bottom. The choice $\\frac{y}{9}$ adds only the denominators. The choice $\\frac{y^2}{20}$ is the PRODUCT of the two fractions, not their sum.',
    },
    {
      q: 'Compute $\\frac{n}{2} + \\frac{n}{5}$.',
      choices: ['$\\frac{2n}{7}$', '$\\frac{n}{7}$', '$\\frac{n^2}{10}$', '$\\frac{7n}{10}$'],
      answer: 3,
      solution:
        'The least common denominator is $10$: $\\frac{n}{2} = \\frac{5n}{10}$ and $\\frac{n}{5} = \\frac{2n}{10}$, so the sum is $\\frac{5n + 2n}{10} = \\frac{7n}{10}$. Check at $n = 10$: $5 + 2 = 7$, and $\\frac{7 \\cdot 10}{10} = 7$. ✓ The choice $\\frac{2n}{7}$ adds tops and bottoms separately. The choice $\\frac{n}{7}$ adds only the bottoms, and $\\frac{n^2}{10}$ multiplies rather than adds.',
    },
  ],
  // p4 — multiply two fractions
  [
    {
      q: 'Compute $\\frac{3x}{4} \\cdot \\frac{2}{9}$.',
      choices: ['$\\frac{x}{6}$', '$\\frac{27x}{8}$', '$\\frac{6x}{13}$', '$\\frac{x}{2}$'],
      answer: 0,
      solution:
        'Multiply straight across: $\\frac{3x \\cdot 2}{4 \\cdot 9} = \\frac{6x}{36} = \\frac{x}{6}$, dividing top and bottom by $6$. Slicker: the $3$ divides into the $9$ three times and the $2$ divides into the $4$ twice, leaving $\\frac{x}{2} \\cdot \\frac{1}{3} = \\frac{x}{6}$. Check at $x = 12$: the original is $9 \\cdot \\frac{2}{9} = 2$, and $\\frac{12}{6} = 2$. ✓ The choice $\\frac{27x}{8}$ flips the second fraction, which is what you do when DIVIDING. The choice $\\frac{6x}{13}$ multiplies the tops but adds the bottoms. The choice $\\frac{x}{2}$ cancels the $3$ into the $9$ but then crosses the $9$ out completely instead of leaving the $3$ behind.',
    },
    {
      q: 'Compute $\\frac{5x}{6} \\cdot \\frac{3}{10}$.',
      choices: ['$\\frac{25x}{9}$', '$\\frac{x}{4}$', '$\\frac{15x}{16}$', '$\\frac{x}{2}$'],
      answer: 1,
      solution:
        'Multiply across: $\\frac{5x \\cdot 3}{6 \\cdot 10} = \\frac{15x}{60} = \\frac{x}{4}$, since $15$ divides both $15$ and $60$. Check at $x = 12$: the original is $10 \\cdot \\frac{3}{10} = 3$, and $\\frac{12}{4} = 3$. ✓ The choice $\\frac{25x}{9}$ flips the second fraction, turning the product into a quotient. The choice $\\frac{15x}{16}$ multiplies the tops but adds the bottoms. The choice $\\frac{x}{2}$ cancels the $5$ into the $10$ and then forgets the $2$ that the cancellation leaves in the denominator.',
    },
    {
      q: 'Compute $\\frac{2x}{9} \\cdot \\frac{3}{8}$.',
      choices: ['$\\frac{16x}{27}$', '$\\frac{6x}{17}$', '$\\frac{x}{4}$', '$\\frac{x}{12}$'],
      answer: 3,
      solution:
        'Top times top over bottom times bottom: $\\frac{2x \\cdot 3}{9 \\cdot 8} = \\frac{6x}{72} = \\frac{x}{12}$, dividing both by $6$. Check at $x = 12$: the original is $\\frac{24}{9} \\cdot \\frac{3}{8} = \\frac{72}{72} = 1$, and $\\frac{12}{12} = 1$. ✓ The choice $\\frac{16x}{27}$ flips the second fraction as though we were dividing. The choice $\\frac{6x}{17}$ multiplies the tops but adds the bottoms. The choice $\\frac{x}{4}$ cancels the $3$ into the $9$ but erases the $9$ entirely instead of leaving a $3$ behind.',
    },
  ],
  // p5 — divide by a unit fraction
  [
    {
      q: 'Compute $\\frac{x}{2} \\div \\frac{1}{8}$.',
      choices: ['$4x$', '$\\frac{x}{16}$', '$\\frac{x}{4}$', '$\\frac{4}{x}$'],
      answer: 0,
      solution:
        'Dividing means multiplying by the reciprocal of the SECOND fraction: $\\frac{x}{2} \\cdot \\frac{8}{1} = \\frac{8x}{2} = 4x$. Check at $x = 6$: the original is $3 \\div \\frac{1}{8} = 3 \\cdot 8 = 24$, and $4 \\cdot 6 = 24$. ✓ At $x = -4$: the original is $-2 \\cdot 8 = -16$, and $4 \\cdot (-4) = -16$. ✓ The choice $\\frac{x}{16}$ multiplies by $\\frac{1}{8}$ instead of flipping it. The choice $\\frac{x}{4}$ divides the $8$ by the $2$ and then puts the $x$ over the result. The choice $\\frac{4}{x}$ turns the whole answer upside down.',
    },
    {
      q: 'Compute $\\frac{y}{5} \\div \\frac{1}{10}$.',
      choices: ['$\\frac{y}{50}$', '$\\frac{y}{2}$', '$2y$', '$\\frac{2}{y}$'],
      answer: 2,
      solution:
        'Flip the second fraction and multiply: $\\frac{y}{5} \\cdot \\frac{10}{1} = \\frac{10y}{5} = 2y$. Check at $y = 15$: the original is $3 \\div \\frac{1}{10} = 30$, and $2 \\cdot 15 = 30$. ✓ At $y = -5$: the original is $-1 \\cdot 10 = -10$, and $2 \\cdot (-5) = -10$. ✓ The choice $\\frac{y}{50}$ multiplies by $\\frac{1}{10}$ rather than flipping it. The choice $\\frac{y}{2}$ divides $10$ by $5$ and then buries the $y$ under it. The choice $\\frac{2}{y}$ inverts the answer.',
    },
    {
      q: 'Compute $\\frac{n}{3} \\div \\frac{1}{9}$.',
      choices: ['$\\frac{n}{27}$', '$\\frac{n}{3}$', '$\\frac{3}{n}$', '$3n$'],
      answer: 3,
      solution:
        'Division is multiplication by the reciprocal: $\\frac{n}{3} \\cdot \\frac{9}{1} = \\frac{9n}{3} = 3n$. Check at $n = 6$: the original is $2 \\div \\frac{1}{9} = 18$, and $3 \\cdot 6 = 18$. ✓ At $n = -3$: the original is $-1 \\cdot 9 = -9$, and $3 \\cdot (-3) = -9$. ✓ The choice $\\frac{n}{27}$ multiplies by $\\frac{1}{9}$ instead of flipping. The choice $\\frac{n}{3}$ divides $9$ by $3$ but then puts the $n$ underneath instead of on top. The choice $\\frac{3}{n}$ is the answer turned upside down.',
    },
  ],
  // p6 — subtract two fractions that already share a denominator
  [
    {
      q: 'Compute $\\frac{5x}{7} - \\frac{2x}{7}$.',
      choices: ['$\\frac{3x}{7}$', '$\\frac{3}{7}$', '$3x$', '$x$'],
      answer: 0,
      solution:
        'The denominators already match, so the numerators are like terms: $5x - 2x = 3x$, and the answer is $\\frac{3x}{7}$. We are counting sevenths the whole way, so the $7$ never moves. Check at $x = 7$: the original is $5 - 2 = 3$, and $\\frac{3 \\cdot 7}{7} = 3$. ✓ The choice $\\frac{3}{7}$ loses the $x$. The choice $3x$ throws the denominator away. The choice $x$ is what you get by ADDING instead of subtracting: $\\frac{5x + 2x}{7} = \\frac{7x}{7} = x$.',
    },
    {
      q: 'Compute $\\frac{8y}{11} - \\frac{3y}{11}$.',
      choices: ['$\\frac{5}{11}$', '$\\frac{5y}{11}$', '$5y$', '$y$'],
      answer: 1,
      solution:
        'Same denominator already, so subtract the numerators: $8y - 3y = 5y$, giving $\\frac{5y}{11}$. Check at $y = 11$: the original is $8 - 3 = 5$, and $\\frac{5 \\cdot 11}{11} = 5$. ✓ The choice $\\frac{5}{11}$ drops the variable. The choice $5y$ drops the denominator. The choice $y$ comes from adding instead of subtracting: $\\frac{8y + 3y}{11} = \\frac{11y}{11} = y$.',
    },
    {
      q: 'Compute $\\frac{9m}{4} - \\frac{3m}{4}$.',
      choices: ['$\\frac{3}{2}$', '$6m$', '$\\frac{3m}{2}$', '$3m$'],
      answer: 2,
      solution:
        'The denominators match, so subtract the tops: $9m - 3m = 6m$, giving $\\frac{6m}{4}$. That still reduces — divide top and bottom by $2$ to get $\\frac{3m}{2}$. Check at $m = 4$: the original is $9 - 3 = 6$, and $\\frac{3 \\cdot 4}{2} = 6$. ✓ At $m = -2$: the original is $-\\frac{18}{4} + \\frac{6}{4} = -3$, and $\\frac{3 \\cdot (-2)}{2} = -3$. ✓ The choice $\\frac{3}{2}$ loses the $m$. The choice $6m$ discards the denominator. The choice $3m$ comes from adding instead of subtracting: $\\frac{12m}{4} = 3m$.',
    },
  ],
  // p7 — a counterexample settles an illegal cancellation
  [
    {
      q: 'Maya claims $\\frac{x + 10}{5}$ simplifies to $x + 2$. Which single test settles the question?',
      choices: [
        'They are equivalent for every $x$',
        '$x = 5$ shows they differ',
        '$x = 0$ shows they differ',
        'They differ for every $x$',
      ],
      answer: 1,
      solution:
        'Test $x = 5$: the fraction gives $\\frac{15}{5} = 3$, while $x + 2$ gives $7$. Different values, so the two expressions are NOT equivalent — the $10$ and the $5$ are not factors of the whole top, so they cannot cancel. Dividing correctly gives $\\frac{x}{5} + 2$, not $x + 2$. The test $x = 0$ settles nothing: both sides give $2$ there. That same agreement also sinks "they differ for every $x$", and one counterexample sinks "equivalent for every $x$".',
    },
    {
      q: 'Priya says $\\frac{x + 8}{2}$ is the same as $x + 4$. Which single test settles the question?',
      choices: [
        '$x = 2$ shows they differ',
        '$x = 0$ shows they differ',
        'They are equivalent for every $x$',
        'They differ for every $x$',
      ],
      answer: 0,
      solution:
        'Test $x = 2$: the fraction gives $\\frac{10}{2} = 5$, while $x + 4$ gives $6$. They disagree, so the claim fails — the $8$ and the $2$ are not factors of the entire numerator. Divided properly, $\\frac{x + 8}{2} = \\frac{x}{2} + 4$. At $x = 0$ both expressions give $4$, so that test proves nothing, and it also shows the two are not different for EVERY $x$.',
    },
    {
      q: 'Owen says $\\frac{4x + 12}{4}$ is the same as $4x + 3$. Which single test settles the question?',
      choices: [
        '$x = 0$ shows they differ',
        'They are equivalent for every $x$',
        'They differ for every $x$',
        '$x = 1$ shows they differ',
      ],
      answer: 3,
      solution:
        'Test $x = 1$: the fraction gives $\\frac{16}{4} = 4$, while $4x + 3$ gives $7$. They disagree, so Owen is wrong — he divided the $12$ by $4$ but left the $4x$ untouched. The fraction bar divides EVERY term: $\\frac{4x}{4} + \\frac{12}{4} = x + 3$. The test $x = 0$ is no help, since both expressions give $3$ there — which also means they do not differ for every $x$.',
    },
  ],
  // p8 — divide every term of the numerator
  [
    {
      q: 'Simplify $\\frac{3x + 12}{3}$.',
      choices: ['$3x + 4$', '$x + 4$', '$x + 12$', '$9x + 36$'],
      answer: 1,
      solution:
        'The bar divides the WHOLE top by $3$, so every term gets divided: $\\frac{3x}{3} + \\frac{12}{3} = x + 4$. Check at $x = 5$: the original is $\\frac{27}{3} = 9$, and $5 + 4 = 9$. ✓ At $x = -2$: the original is $\\frac{6}{3} = 2$, and $-2 + 4 = 2$. ✓ The choice $3x + 4$ divides only the $12$. The choice $x + 12$ divides only the $3x$. The choice $9x + 36$ multiplies by $3$ instead of dividing.',
    },
    {
      q: 'Simplify $\\frac{5x - 20}{5}$.',
      choices: ['$5x - 4$', '$x - 20$', '$x - 4$', '$25x - 100$'],
      answer: 2,
      solution:
        'Divide each term of the top by $5$: $\\frac{5x}{5} - \\frac{20}{5} = x - 4$. Check at $x = 6$: the original is $\\frac{10}{5} = 2$, and $6 - 4 = 2$. ✓ At $x = -1$: the original is $\\frac{-25}{5} = -5$, and $-1 - 4 = -5$. ✓ The choice $5x - 4$ divides only the $-20$. The choice $x - 20$ divides only the $5x$. The choice $25x - 100$ multiplies by $5$ instead of dividing.',
    },
    {
      q: 'Simplify $\\frac{4x + 10}{2}$.',
      choices: ['$4x + 5$', '$2x + 10$', '$8x + 20$', '$2x + 5$'],
      answer: 3,
      solution:
        'Every term on top gets divided by $2$: $\\frac{4x}{2} + \\frac{10}{2} = 2x + 5$. Check at $x = 7$: the original is $\\frac{38}{2} = 19$, and $14 + 5 = 19$. ✓ At $x = -3$: the original is $\\frac{-2}{2} = -1$, and $-6 + 5 = -1$. ✓ The choice $4x + 5$ divides only the $10$. The choice $2x + 10$ divides only the $4x$. The choice $8x + 20$ multiplies by $2$ instead of dividing.',
    },
  ],
  // p9 — add three fractions with unlike denominators
  [
    {
      q: 'Compute $\\frac{x}{2} + \\frac{x}{4} + \\frac{x}{8}$.',
      choices: ['$\\frac{3x}{14}$', '$\\frac{7x}{8}$', '$\\frac{3x}{4}$', '$x$'],
      answer: 1,
      solution:
        'The least common denominator of $2$, $4$, and $8$ is $8$: $\\frac{4x}{8} + \\frac{2x}{8} + \\frac{x}{8} = \\frac{7x}{8}$. Check at $x = 8$: $4 + 2 + 1 = 7$, and $\\frac{7 \\cdot 8}{8} = 7$. ✓ At $x = -16$: $-8 - 4 - 2 = -14$, and $\\frac{7 \\cdot (-16)}{8} = -14$. ✓ The choice $\\frac{3x}{14}$ adds the tops and the bottoms separately. The choice $\\frac{3x}{4}$ forgets the last fraction, since $\\frac{4x + 2x}{8} = \\frac{3x}{4}$. The choice $x$ assumes a half plus a quarter plus an eighth fills the whole — it falls an eighth short.',
    },
    {
      q: 'Compute $\\frac{x}{3} + \\frac{x}{4} + \\frac{x}{6}$.',
      choices: ['$\\frac{3x}{13}$', '$\\frac{7x}{12}$', '$\\frac{3x}{4}$', '$\\frac{9x}{13}$'],
      answer: 2,
      solution:
        'The least common denominator of $3$, $4$, and $6$ is $12$: $\\frac{4x}{12} + \\frac{3x}{12} + \\frac{2x}{12} = \\frac{9x}{12}$, which reduces to $\\frac{3x}{4}$. Check at $x = 12$: $4 + 3 + 2 = 9$, and $\\frac{3 \\cdot 12}{4} = 9$. ✓ At $x = -24$: $-8 - 6 - 4 = -18$, and $\\frac{3 \\cdot (-24)}{4} = -18$. ✓ The choice $\\frac{3x}{13}$ adds tops and bottoms separately. The choice $\\frac{7x}{12}$ stops after the first two fractions. The choice $\\frac{9x}{13}$ gets the numerator right but adds the denominators too.',
    },
    {
      q: 'Compute $\\frac{y}{2} + \\frac{y}{5} + \\frac{y}{10}$.',
      choices: ['$\\frac{3y}{17}$', '$\\frac{7y}{10}$', '$y$', '$\\frac{4y}{5}$'],
      answer: 3,
      solution:
        'The least common denominator is $10$: $\\frac{5y}{10} + \\frac{2y}{10} + \\frac{y}{10} = \\frac{8y}{10}$, which reduces to $\\frac{4y}{5}$. Check at $y = 10$: $5 + 2 + 1 = 8$, and $\\frac{4 \\cdot 10}{5} = 8$. ✓ At $y = -20$: $-10 - 4 - 2 = -16$, and $\\frac{4 \\cdot (-20)}{5} = -16$. ✓ The choice $\\frac{3y}{17}$ adds tops and bottoms separately. The choice $\\frac{7y}{10}$ leaves out the last fraction. The choice $y$ assumes the three pieces fill the whole, but they only reach four fifths of it.',
    },
  ],
  // p10 — reduce a fraction with powers of the variable
  [
    {
      q: 'Simplify $\\frac{10x^2}{4x}$ (assume $x \\neq 0$).',
      choices: ['$\\frac{5x}{2}$', '$\\frac{2x}{5}$', '$\\frac{5x^2}{2}$', '$\\frac{2}{5x}$'],
      answer: 0,
      solution:
        'Cancel the common factor $2$ from the numbers ($\\frac{10}{4} = \\frac{5}{2}$) and one factor of $x$ from $\\frac{x^2}{x} = x$. The result is $\\frac{5x}{2}$. Check at $x = 2$: the original is $\\frac{40}{8} = 5$, and $\\frac{5 \\cdot 2}{2} = 5$. ✓ At $x = -4$: the original is $\\frac{160}{-16} = -10$, and $\\frac{5 \\cdot (-4)}{2} = -10$. ✓ The choice $\\frac{2x}{5}$ turns the number part upside down. The choice $\\frac{5x^2}{2}$ never cancels the $x$ on the bottom. The choice $\\frac{2}{5x}$ inverts the whole fraction.',
    },
    {
      q: 'Simplify $\\frac{14y^2}{4y}$ (assume $y \\neq 0$).',
      choices: ['$\\frac{2y}{7}$', '$\\frac{7y}{2}$', '$\\frac{7y^2}{2}$', '$\\frac{2}{7y}$'],
      answer: 1,
      solution:
        'The numbers share a factor of $2$: $\\frac{14}{4} = \\frac{7}{2}$. One factor of $y$ cancels, leaving $\\frac{y^2}{y} = y$. So the answer is $\\frac{7y}{2}$. Check at $y = 4$: the original is $\\frac{224}{16} = 14$, and $\\frac{7 \\cdot 4}{2} = 14$. ✓ At $y = -2$: the original is $\\frac{56}{-8} = -7$, and $\\frac{7 \\cdot (-2)}{2} = -7$. ✓ The choice $\\frac{2y}{7}$ flips the numbers. The choice $\\frac{7y^2}{2}$ forgets to cancel the $y$ underneath, and $\\frac{2}{7y}$ flips everything.',
    },
    {
      q: 'Simplify $\\frac{9m^2}{12m}$ (assume $m \\neq 0$).',
      choices: ['$\\frac{4m}{3}$', '$\\frac{3m^2}{4}$', '$\\frac{4}{3m}$', '$\\frac{3m}{4}$'],
      answer: 3,
      solution:
        'The numbers share a factor of $3$: $\\frac{9}{12} = \\frac{3}{4}$. One factor of $m$ cancels, since $\\frac{m^2}{m} = m$. The result is $\\frac{3m}{4}$. Check at $m = 4$: the original is $\\frac{144}{48} = 3$, and $\\frac{3 \\cdot 4}{4} = 3$. ✓ At $m = -8$: the original is $\\frac{576}{-96} = -6$, and $\\frac{3 \\cdot (-8)}{4} = -6$. ✓ The choice $\\frac{4m}{3}$ flips the number part. The choice $\\frac{3m^2}{4}$ never cancels the $m$ on the bottom, and $\\frac{4}{3m}$ inverts the entire fraction.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 2,
  sections: {
    '2.3': s23,
    '2.4': s24,
  },
}
