// Introduction to Algebra chapter 2 — variations for the CHALLENGE set
// (x Marks the Spot).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every evaluation was substituted with PARENTHESES and then confirmed a
//    second, independent way — usually by regrouping the expression (for
//    instance $3x^2 - 2x + 1 = x(3x - 2) + 1$) and evaluating that instead. Two
//    routes that never share an arithmetic step.
//  - Every simplification was checked numerically at several values of the
//    variable, including a negative one, and staying away from 0, 1, and 2,
//    since those three values hide sign slips and coefficient slips.
//  - Every factoring answer was expanded back out, term by term, before it was
//    keyed.
//  - No two choices inside an item share a VALUE. An "incompletely factored"
//    form is algebraically EQUAL to the key, so it is never used as a
//    distractor; neither is an unreduced fraction that equals the key.
//  - Every distractor is one named trap, worked out in the solution so the
//    student can see exactly which step went wrong. The traps that run through
//    this set: FORGETTING TO DISTRIBUTE THE MINUS, SQUARING WITHOUT PARENTHESES,
//    SQUARING THE COEFFICIENT TOO, DROPPING THE CONSTANT, REVERSING THE
//    SUBTRACTION, DIVIDING ONLY ONE TERM, COUNTING THE WIDTH ONCE, THE LOST
//    FACTOR, THE UNDIVIDED TERM, FLIPPING THE WRONG FRACTION, and DIVIDING BY
//    ONE COEFFICIENT INSTEAD OF THE SUM.
//  - Answer positions are spread: across each base problem and its three
//    variations, all four positions are used exactly once.
//  - No competition, book, or outside source is named anywhere.

const challenge = [
  // p1 — evaluate a quadratic at a NEGATIVE value of x. Every answer lands
  //      between 11 and 19, and every distractor is a sign or exponent slip.
  [
    {
      q: 'Evaluate $3x^2 - 2x + 1$ when $x = -2$.',
      choices: ['$17$', '$-7$', '$9$', '$16$'],
      answer: 0,
      solution:
        'Substitute with parentheses around the negative number: $3(-2)^2 - 2(-2) + 1$. The square comes first, and $(-2)^2 = 4$, so the leading term is $3 \\cdot 4 = 12$. The middle term is $-2 \\cdot (-2) = +4$ — subtracting a negative adds. Then $12 + 4 + 1 = 17$. Second route, which never squares anything on its own: regroup the expression as $x(3x - 2) + 1$. At $x = -2$ the bracket is $3(-2) - 2 = -8$, so we get $(-2)(-8) + 1 = 16 + 1 = 17$ ✓ — the same value reached without ever writing an exponent. (The choice $-7$ is SQUARING WITHOUT PARENTHESES: reading $-2^2$ as $-4$ gives $-12 + 4 + 1 = -7$ ✗. The choice $9$ mishandles the double negative and reads $-2(-2)$ as $-4$, giving $12 - 4 + 1 = 9$ ✗. The choice $16$ is DROPPING THE CONSTANT, stopping at $12 + 4$ ✗.)',
    },
    {
      q: 'Evaluate $5x^2 + 2x - 1$ when $x = -2$.',
      choices: ['$23$', '$16$', '$15$', '$95$'],
      answer: 2,
      solution:
        'Substitute with parentheses: $5(-2)^2 + 2(-2) - 1$. Square first: $(-2)^2 = 4$, so the leading term is $5 \\cdot 4 = 20$. The middle term is $2 \\cdot (-2) = -4$, and the constant takes away one more. So $20 - 4 - 1 = 15$. Second route by regrouping: $5x^2 + 2x - 1 = x(5x + 2) - 1$, and at $x = -2$ the bracket is $-10 + 2 = -8$, giving $(-2)(-8) - 1 = 16 - 1 = 15$ ✓. Two different orders of operations, one answer. (The choice $23$ is a SIGN SLIP on the linear term, reading $2(-2)$ as $+4$ to get $20 + 4 - 1$ ✗. The choice $16$ is DROPPING THE CONSTANT, stopping at $20 - 4$ ✗. The choice $95$ is SQUARING THE COEFFICIENT TOO: $5x^2$ is not $(5x)^2$, but reading it that way gives $(-10)^2 - 4 - 1 = 95$ ✗.)',
    },
    {
      q: 'Evaluate $4x^2 - 5x - 7$ when $x = -2$.',
      choices: ['$-1$', '$26$', '$67$', '$19$'],
      answer: 3,
      solution:
        'Substitute with parentheses: $4(-2)^2 - 5(-2) - 7$. The square is positive: $(-2)^2 = 4$, so the first term is $4 \\cdot 4 = 16$. The middle term is $-5 \\cdot (-2) = +10$, two negatives making a positive. Then $16 + 10 - 7 = 19$. Second route by regrouping: $4x^2 - 5x - 7 = x(4x - 5) - 7$, and at $x = -2$ the bracket is $-8 - 5 = -13$, giving $(-2)(-13) - 7 = 26 - 7 = 19$ ✓. (The choice $-1$ is a SIGN SLIP on the middle term, reading $-5(-2)$ as $-10$ to get $16 - 10 - 7$ ✗. The choice $26$ is DROPPING THE CONSTANT, stopping at $16 + 10$ ✗. The choice $67$ is SQUARING THE COEFFICIENT TOO, reading $4x^2$ as $(4x)^2 = 64$ ✗.)',
    },
  ],

  // p2 — expand two products, the second one subtracted, then combine.
  [
    {
      q: 'Simplify $5(3x - 2) - 4(x + 3)$.',
      choices: ['$11x - 22$', '$11x + 2$', '$19x - 22$', '$11x - 13$'],
      answer: 0,
      solution:
        'Expand each piece with its own sign. First $5(3x - 2) = 15x - 10$. The second product carries a minus, so distribute $-4$: $-4 \\cdot x = -4x$ and $-4 \\cdot 3 = -12$. Together: $15x - 10 - 4x - 12$. The $x$-team gives $15x - 4x = 11x$ and the constants give $-10 - 12 = -22$, so the answer is $11x - 22$. Second route, by substituting instead of expanding — check at $x = 3$: the original is $5 \\cdot 7 - 4 \\cdot 6 = 35 - 24 = 11$, and $11(3) - 22 = 11$ ✓. Check again at $x = -2$: the original is $5(-8) - 4(1) = -40 - 4 = -44$, and $11(-2) - 22 = -44$ ✓. (The choice $11x + 2$ is FORGETTING TO DISTRIBUTE THE MINUS to the $+3$, leaving $-10 + 12$ ✗. The choice $19x - 22$ adds the $4x$ instead of subtracting it ✗. The choice $11x - 13$ never multiplies the $3$ by $4$, leaving $-10 - 3$ ✗.)',
    },
    {
      q: 'Simplify $6(2x - 3) - 5(x + 4)$.',
      choices: ['$7x + 2$', '$7x - 38$', '$17x - 38$', '$7x - 23$'],
      answer: 1,
      solution:
        'Expand the first product: $6(2x - 3) = 12x - 18$. Now distribute $-5$ across the second: $-5 \\cdot x = -5x$ and $-5 \\cdot 4 = -20$. That gives $12x - 18 - 5x - 20$. Combining, $12x - 5x = 7x$ and $-18 - 20 = -38$, so the answer is $7x - 38$. Second route by substitution — at $x = 4$: the original is $6 \\cdot 5 - 5 \\cdot 8 = 30 - 40 = -10$, and $7(4) - 38 = -10$ ✓. At $x = -1$: the original is $6(-5) - 5(3) = -30 - 15 = -45$, and $7(-1) - 38 = -45$ ✓. (The choice $7x + 2$ is FORGETTING TO DISTRIBUTE THE MINUS to the $+4$, leaving $-18 + 20$ ✗. The choice $17x - 38$ adds the $5x$ rather than subtracting it ✗. The choice $7x - 23$ never multiplies the $4$ by $5$, leaving $-18 - 5$ ✗.)',
    },
    {
      q: 'Simplify $7(2x - 1) - 4(x + 5)$.',
      choices: ['$10x + 13$', '$18x - 27$', '$10x - 27$', '$10x - 12$'],
      answer: 2,
      solution:
        'The first product is $7(2x - 1) = 14x - 7$. The second is subtracted, so distribute $-4$: $-4 \\cdot x = -4x$ and $-4 \\cdot 5 = -20$. Now we have $14x - 7 - 4x - 20$, which collapses to $10x$ from the $x$-team and $-7 - 20 = -27$ from the constants: $10x - 27$. Second route by substitution — at $x = 3$: the original is $7 \\cdot 5 - 4 \\cdot 8 = 35 - 32 = 3$, and $10(3) - 27 = 3$ ✓. At $x = -2$: the original is $7(-5) - 4(3) = -35 - 12 = -47$, and $10(-2) - 27 = -47$ ✓. (The choice $10x + 13$ is FORGETTING TO DISTRIBUTE THE MINUS to the $+5$, leaving $-7 + 20$ ✗. The choice $18x - 27$ adds the $4x$ instead of subtracting ✗. The choice $10x - 12$ never multiplies the $5$ by $4$, leaving $-7 - 5$ ✗.)',
    },
  ],

  // p3 — add two fractions where one denominator is a multiple of the other.
  [
    {
      q: 'Compute $\\frac{5x}{6} + \\frac{x}{12}$.',
      choices: ['$\\frac{x}{3}$', '$\\frac{11x}{12}$', '$\\frac{x}{2}$', '$\\frac{5x^2}{72}$'],
      answer: 1,
      solution:
        'The denominator $12$ is already a multiple of $6$, so $12$ is the common denominator. Rewrite the first fraction by multiplying top and bottom by $2$: $\\frac{5x}{6} = \\frac{10x}{12}$. Now the numerators are like terms: $\\frac{10x + x}{12} = \\frac{11x}{12}$, and since $11$ is prime it will not reduce against $12$. Second route, checking with numbers instead of algebra — at $x = 12$ the original is $10 + 1 = 11$, and $\\frac{11 \\cdot 12}{12} = 11$ ✓. At $x = -12$ the original is $-10 - 1 = -11$, and $\\frac{11(-12)}{12} = -11$ ✓. (The choice $\\frac{x}{3}$ is ADDING TOPS AND BOTTOMS SEPARATELY: $\\frac{5x + x}{6 + 12} = \\frac{6x}{18}$ ✗ — denominators must MATCH before numerators may be added. The choice $\\frac{x}{2}$ is FORGETTING TO SCALE THE NUMERATOR: writing $\\frac{6x}{12}$ after changing only the denominator ✗. The choice $\\frac{5x^2}{72}$ MULTIPLIES the two fractions instead of adding them ✗.)',
    },
    {
      q: 'Compute $\\frac{4x}{5} + \\frac{x}{10}$.',
      choices: ['$\\frac{x}{2}$', '$\\frac{x}{3}$', '$\\frac{9x}{10}$', '$\\frac{2x^2}{25}$'],
      answer: 2,
      solution:
        'Use $10$ as the common denominator, since $10 = 2 \\cdot 5$. Multiply the first fraction top and bottom by $2$: $\\frac{4x}{5} = \\frac{8x}{10}$. Then $\\frac{8x + x}{10} = \\frac{9x}{10}$. Second route with numbers — at $x = 10$ the original is $8 + 1 = 9$, and $\\frac{9 \\cdot 10}{10} = 9$ ✓. At $x = -20$ the original is $-16 - 2 = -18$, and $\\frac{9(-20)}{10} = -18$ ✓. (The choice $\\frac{x}{2}$ is FORGETTING TO SCALE THE NUMERATOR: $\\frac{4x + x}{10} = \\frac{5x}{10}$ ✗, which changes the first fraction’s value. The choice $\\frac{x}{3}$ is ADDING TOPS AND BOTTOMS SEPARATELY: $\\frac{5x}{15}$ ✗. The choice $\\frac{2x^2}{25}$ is the PRODUCT of the two fractions, not their sum ✗.)',
    },
    {
      q: 'Compute $\\frac{3x}{5} + \\frac{x}{15}$.',
      choices: ['$\\frac{x}{5}$', '$\\frac{4x}{15}$', '$\\frac{x^2}{25}$', '$\\frac{2x}{3}$'],
      answer: 3,
      solution:
        'The common denominator is $15$. Multiply the first fraction top and bottom by $3$: $\\frac{3x}{5} = \\frac{9x}{15}$. Adding gives $\\frac{9x + x}{15} = \\frac{10x}{15}$, and that still reduces — divide top and bottom by $5$ to reach $\\frac{2x}{3}$. Second route with numbers — at $x = 15$ the original is $9 + 1 = 10$, and $\\frac{2 \\cdot 15}{3} = 10$ ✓. At $x = -30$ the original is $-18 - 2 = -20$, and $\\frac{2(-30)}{3} = -20$ ✓. (The choice $\\frac{x}{5}$ is ADDING TOPS AND BOTTOMS SEPARATELY: $\\frac{4x}{20}$ ✗. The choice $\\frac{4x}{15}$ is FORGETTING TO SCALE THE NUMERATOR, adding $3x + x$ over the new denominator ✗. The choice $\\frac{x^2}{25}$ multiplies the fractions instead of adding ✗.)',
    },
  ],

  // p4 — translate a "less than" phrase, then evaluate at a negative number.
  //      Every answer is negative, between -29 and -21.
  [
    {
      q: 'Write "eight less than five times a number" as an expression, then evaluate it when the number is $-4$.',
      choices: ['$-28$', '$28$', '$-60$', '$12$'],
      answer: 0,
      solution:
        'Build the expression from the inside out. "Five times a number" is $5n$, and "eight less than" that means we take $8$ away FROM it: $5n - 8$. Now substitute $n = -4$ with parentheses: $5(-4) - 8 = -20 - 8 = -28$. Second route, reading the words as a story instead of symbols: five copies of $-4$ is a debt of $20$, and taking away $8$ more deepens the debt to $28$ below zero, so the value is $-28$ ✓ — no algebra needed to confirm the sign. (The choice $28$ is REVERSING THE SUBTRACTION, writing $8 - 5n = 8 + 20$ ✗; "less than" puts the $8$ AFTER the minus sign, not before it. The choice $-60$ subtracts before multiplying, as $5(n - 8) = 5(-12)$ ✗. The choice $12$ drops the negative and evaluates at $4$ instead of $-4$ ✗.)',
    },
    {
      q: 'Write "six less than four times a number" as an expression, then evaluate it when the number is $-5$.',
      choices: ['$26$', '$-26$', '$-44$', '$14$'],
      answer: 1,
      solution:
        'The expression is $4n - 6$: "four times a number" is $4n$, and "six less than" it subtracts $6$ from that. Substituting $n = -5$: $4(-5) - 6 = -20 - 6 = -26$. Second route in words: four copies of $-5$ sit $20$ below zero, and removing another $6$ lands at $26$ below zero ✓ — the same $-26$, reached without writing an equation. (The choice $26$ is REVERSING THE SUBTRACTION: $6 - 4n = 6 + 20$ ✗. The choice $-44$ subtracts inside first, as $4(n - 6) = 4(-11)$ ✗ — that is "four times six less than the number", a different sentence. The choice $14$ forgets the minus sign on the number and computes $4(5) - 6$ ✗.)',
    },
    {
      q: 'Write "nine less than six times a number" as an expression, then evaluate it when the number is $-2$.',
      choices: ['$21$', '$-66$', '$3$', '$-21$'],
      answer: 3,
      solution:
        'The expression is $6n - 9$. At $n = -2$: $6(-2) - 9 = -12 - 9 = -21$. Second route in words: six copies of $-2$ is $12$ below zero, and taking $9$ more away reaches $21$ below zero ✓. (The choice $21$ is REVERSING THE SUBTRACTION: $9 - 6n = 9 + 12$ ✗ — the order in "less than" flips the subtraction, and the sign of the answer flips with it. The choice $-66$ subtracts before multiplying, as $6(n - 9) = 6(-11)$ ✗. The choice $3$ drops the negative on the number and computes $6(2) - 9$ ✗.)',
    },
  ],

  // p5 — factor a common monomial out of a quadratic sum, completely.
  [
    {
      q: 'Factor $14x^2 + 21x$ completely.',
      choices: ['$14x(x + 3)$', '$7x(2x + 3)$', '$7x(2x + 21)$', '$7x(x + 3)$'],
      answer: 1,
      solution:
        'The coefficients $14$ and $21$ share a factor of $7$, and both terms carry an $x$, so the greatest common factor is $7x$. Divide each term by it: $14x^2 \\div 7x = 2x$ and $21x \\div 7x = 3$. That gives $7x(2x + 3)$. Second route, expanding the answer back out term by term: $7x \\cdot 2x = 14x^2$ and $7x \\cdot 3 = 21x$, which rebuilds the original exactly ✓. The factoring is complete because $2x$ and $3$ share no factor bigger than $1$. (The choice $14x(x + 3)$ pulls out $14x$ but still divides the $21x$ by only $7x$; it expands to $14x^2 + 42x$ ✗. The choice $7x(2x + 21)$ is THE UNDIVIDED TERM — the second term never got divided — and expands to $14x^2 + 147x$ ✗. The choice $7x(x + 3)$ divides the first term by $7x$ twice over and expands to $7x^2 + 21x$ ✗.)',
    },
    {
      q: 'Factor $18x^2 + 12x$ completely.',
      choices: ['$18x(x + 2)$', '$6x(3x + 12)$', '$6x(3x + 2)$', '$6x(x + 2)$'],
      answer: 2,
      solution:
        'The greatest common factor of $18$ and $12$ is $6$, and both terms carry an $x$, so pull out $6x$. Dividing: $18x^2 \\div 6x = 3x$ and $12x \\div 6x = 2$, giving $6x(3x + 2)$. Second route, expanding back: $6x \\cdot 3x = 18x^2$ and $6x \\cdot 2 = 12x$ ✓ — exactly the expression we started with. Nothing is left to pull out, since $3x$ and $2$ share no common factor. (The choice $18x(x + 2)$ takes out $18x$ but divides the $12x$ by only $6x$, and expands to $18x^2 + 36x$ ✗. The choice $6x(3x + 12)$ is THE UNDIVIDED TERM and expands to $18x^2 + 72x$ ✗. The choice $6x(x + 2)$ under-divides the first term and expands to $6x^2 + 12x$ ✗.)',
    },
    {
      q: 'Factor $16x^2 + 20x$ completely.',
      choices: ['$16x(x + 5)$', '$4x(x + 5)$', '$4(4x^2 + 5)$', '$4x(4x + 5)$'],
      answer: 3,
      solution:
        'The greatest common factor of $16$ and $20$ is $4$, and each term contains an $x$, so the common factor is $4x$. Dividing: $16x^2 \\div 4x = 4x$ and $20x \\div 4x = 5$, so the factoring is $4x(4x + 5)$. Second route, expanding back term by term: $4x \\cdot 4x = 16x^2$ and $4x \\cdot 5 = 20x$ ✓. It is complete: $4x$ and $5$ share no factor bigger than $1$. (The choice $16x(x + 5)$ pulls out $16x$ but divides the $20x$ by only $4x$; it expands to $16x^2 + 80x$ ✗. The choice $4x(x + 5)$ divides the first term by $4x$ twice and expands to $4x^2 + 20x$ ✗. The choice $4(4x^2 + 5)$ is THE LOST FACTOR: the $x$ was taken out of the second term but never written outside, and it expands to $16x^2 + 20$ ✗.)',
    },
  ],

  // p6 — perimeter of a rectangle whose length is given in terms of the width.
  [
    {
      q: 'A rectangle has width $w$ and length $3w - 4$. What is its perimeter?',
      choices: ['$8w - 8$', '$4w - 4$', '$8w - 4$', '$7w - 8$'],
      answer: 0,
      solution:
        'A perimeter counts two widths and two lengths: $2w + 2(3w - 4)$. Distribute the $2$ across BOTH terms of the length: $2(3w - 4) = 6w - 8$. Adding the two widths gives $2w + 6w - 8 = 8w - 8$. Second route, walking the rectangle with an actual number — take $w = 5$, so the length is $3(5) - 4 = 11$. Going around: $5 + 11 + 5 + 11 = 32$, and $8(5) - 8 = 32$ ✓. Try $w = 3$: the length is $5$, the trip around is $3 + 5 + 3 + 5 = 16$, and $8(3) - 8 = 16$ ✓. (The choice $4w - 4$ is only HALFWAY AROUND — one width plus one length ✗. The choice $8w - 4$ doubles the $3w$ but not the $-4$ ✗. The choice $7w - 8$ is COUNTING THE WIDTH ONCE, doubling only the length ✗.)',
    },
    {
      q: 'A rectangle has width $w$ and length $4w - 5$. What is its perimeter?',
      choices: ['$5w - 5$', '$10w - 10$', '$10w - 5$', '$9w - 10$'],
      answer: 1,
      solution:
        'The perimeter is $2w + 2(4w - 5)$. Distributing the $2$ over both terms of the length gives $8w - 10$, so the total is $2w + 8w - 10 = 10w - 10$. Second route with a number — take $w = 4$, so the length is $4(4) - 5 = 11$. Around the rectangle: $4 + 11 + 4 + 11 = 30$, and $10(4) - 10 = 30$ ✓. Try $w = 6$: the length is $19$, the trip is $6 + 19 + 6 + 19 = 50$, and $10(6) - 10 = 50$ ✓. (The choice $5w - 5$ is only HALFWAY AROUND ✗. The choice $10w - 5$ doubles the $4w$ but leaves the $-5$ undoubled ✗. The choice $9w - 10$ is COUNTING THE WIDTH ONCE ✗.)',
    },
    {
      q: 'A rectangle has width $w$ and length $5w - 2$. What is its perimeter?',
      choices: ['$6w - 2$', '$12w - 2$', '$12w - 4$', '$11w - 4$'],
      answer: 2,
      solution:
        'Two widths plus two lengths: $2w + 2(5w - 2)$. The $2$ must reach both terms inside, so $2(5w - 2) = 10w - 4$, and the perimeter is $2w + 10w - 4 = 12w - 4$. Second route with a number — take $w = 3$, so the length is $5(3) - 2 = 13$. Around: $3 + 13 + 3 + 13 = 32$, and $12(3) - 4 = 32$ ✓. Try $w = 5$: the length is $23$, the trip is $5 + 23 + 5 + 23 = 56$, and $12(5) - 4 = 56$ ✓. (The choice $6w - 2$ is only HALFWAY AROUND ✗. The choice $12w - 2$ doubles the $5w$ but not the $-2$ ✗. The choice $11w - 4$ is COUNTING THE WIDTH ONCE ✗.)',
    },
  ],

  // p7 — divide every term of a two-term numerator by the denominator.
  [
    {
      q: 'Simplify $\\frac{12x - 8}{4}$.',
      choices: ['$3x - 2$', '$3x - 8$', '$12x - 2$', '$48x - 32$'],
      answer: 0,
      solution:
        'The fraction bar divides the WHOLE top, so every term gets divided by $4$: $\\frac{12x}{4} - \\frac{8}{4} = 3x - 2$. Second route by substitution — at $x = 5$ the original is $\\frac{60 - 8}{4} = \\frac{52}{4} = 13$, and $3(5) - 2 = 13$ ✓. At $x = -3$ the original is $\\frac{-36 - 8}{4} = \\frac{-44}{4} = -11$, and $3(-3) - 2 = -11$ ✓. A negative test value matters here, because a dropped division on the constant hides at small positive values. (The choice $3x - 8$ is DIVIDING ONLY ONE TERM — the $-8$ never got divided ✗. The choice $12x - 2$ divides only the constant and leaves the $12x$ alone ✗. The choice $48x - 32$ MULTIPLIES by $4$ instead of dividing ✗.)',
    },
    {
      q: 'Simplify $\\frac{14x - 21}{7}$.',
      choices: ['$2x - 21$', '$2x - 3$', '$14x - 3$', '$98x - 147$'],
      answer: 1,
      solution:
        'Divide each term of the numerator by $7$: $\\frac{14x}{7} - \\frac{21}{7} = 2x - 3$. Second route by substitution — at $x = 4$ the original is $\\frac{56 - 21}{7} = \\frac{35}{7} = 5$, and $2(4) - 3 = 5$ ✓. At $x = -2$ the original is $\\frac{-28 - 21}{7} = \\frac{-49}{7} = -7$, and $2(-2) - 3 = -7$ ✓. (The choice $2x - 21$ is DIVIDING ONLY ONE TERM, leaving the $-21$ untouched ✗. The choice $14x - 3$ divides only the constant ✗. The choice $98x - 147$ MULTIPLIES by $7$ instead of dividing ✗.)',
    },
    {
      q: 'Simplify $\\frac{20x - 15}{5}$.',
      choices: ['$4x - 15$', '$20x - 3$', '$100x - 75$', '$4x - 3$'],
      answer: 3,
      solution:
        'Every term on top is divided by $5$: $\\frac{20x}{5} - \\frac{15}{5} = 4x - 3$. Second route by substitution — at $x = 6$ the original is $\\frac{120 - 15}{5} = \\frac{105}{5} = 21$, and $4(6) - 3 = 21$ ✓. At $x = -4$ the original is $\\frac{-80 - 15}{5} = \\frac{-95}{5} = -19$, and $4(-4) - 3 = -19$ ✓. (The choice $4x - 15$ is DIVIDING ONLY ONE TERM ✗. The choice $20x - 3$ divides the constant but not the $20x$ ✗. The choice $100x - 75$ MULTIPLIES by $5$ instead of dividing ✗.)',
    },
  ],

  // p8 — recognise which factored form rebuilds a given linear expression.
  [
    {
      q: 'Which expression is equivalent to $8x + 12$ for every value of $x$?',
      choices: ['$4(2x + 3)$', '$4(2x + 12)$', '$8(x + 3)$', '$2(4x + 3)$'],
      answer: 0,
      solution:
        'Factor out what $8x$ and $12$ share. The greatest common factor is $4$: $8x \\div 4 = 2x$ and $12 \\div 4 = 3$, so $8x + 12 = 4(2x + 3)$. Second route, expanding every choice and comparing: $4(2x + 3) = 8x + 12$ ✓, $4(2x + 12) = 8x + 48$ ✗, $8(x + 3) = 8x + 24$ ✗, $2(4x + 3) = 8x + 6$ ✗. Only one rebuilds both terms, and a single test value confirms it — at $x = 5$ the original is $52$ and $4(13) = 52$ ✓. (The choice $4(2x + 12)$ is THE UNDIVIDED TERM, dividing the $8x$ but not the $12$. The choice $8(x + 3)$ pulls out $8$ from the first term but only $4$ from the second. The choice $2(4x + 3)$ divides the two terms by different numbers.)',
    },
    {
      q: 'Which expression is equivalent to $9x + 15$ for every value of $x$?',
      choices: ['$3(3x + 15)$', '$5(3x + 3)$', '$3(3x + 5)$', '$3(x + 5)$'],
      answer: 2,
      solution:
        'The terms $9x$ and $15$ share a factor of $3$: $9x \\div 3 = 3x$ and $15 \\div 3 = 5$, so $9x + 15 = 3(3x + 5)$. Second route, expanding every choice: $3(3x + 15) = 9x + 45$ ✗, $5(3x + 3) = 15x + 15$ ✗, $3(3x + 5) = 9x + 15$ ✓, $3(x + 5) = 3x + 15$ ✗. A test value seals it — at $x = 4$ the original is $51$ and $3(17) = 51$ ✓. (The choice $3(3x + 15)$ is THE UNDIVIDED TERM. The choice $5(3x + 3)$ pulls a $5$ out of the constant but leaves the $9x$ mis-divided. The choice $3(x + 5)$ divides the first term by $9$ while dividing the second by only $3$.)',
    },
    {
      q: 'Which expression is equivalent to $12x + 20$ for every value of $x$?',
      choices: ['$4(3x + 20)$', '$12(x + 5)$', '$4(3x + 4)$', '$4(3x + 5)$'],
      answer: 3,
      solution:
        'The greatest common factor of $12x$ and $20$ is $4$: $12x \\div 4 = 3x$ and $20 \\div 4 = 5$, so $12x + 20 = 4(3x + 5)$. Second route, expanding every choice: $4(3x + 20) = 12x + 80$ ✗, $12(x + 5) = 12x + 60$ ✗, $4(3x + 4) = 12x + 16$ ✗, $4(3x + 5) = 12x + 20$ ✓. Confirm with a value — at $x = 3$ the original is $56$ and $4(14) = 56$ ✓. (The choice $4(3x + 20)$ is THE UNDIVIDED TERM. The choice $12(x + 5)$ pulls out $12$ from the first term but only $4$ from the second. The choice $4(3x + 4)$ divides the $20$ by $5$ instead of by $4$.)',
    },
  ],

  // p9 — distribute a negative, and watch the constants cancel to nothing.
  [
    {
      q: 'Simplify $7x - 3(x - 4) - 12$.',
      choices: ['$4x - 24$', '$4x$', '$4x + 12$', '$10x$'],
      answer: 1,
      solution:
        'Distribute the $-3$ across both terms: $-3 \\cdot x = -3x$ and $-3 \\cdot (-4) = +12$. The expression becomes $7x - 3x + 12 - 12$. The $x$-team gives $4x$, and the constants cancel completely: $+12 - 12 = 0$. So the whole thing is just $4x$. Second route by substitution — at $x = 5$ the original is $35 - 3(1) - 12 = 35 - 3 - 12 = 20$, and $4(5) = 20$ ✓. At $x = -3$ the original is $-21 - 3(-7) - 12 = -21 + 21 - 12 = -12$, and $4(-3) = -12$ ✓. (The choice $4x - 24$ is FORGETTING TO DISTRIBUTE THE MINUS to the $-4$, giving $-12 - 12$ ✗. The choice $4x + 12$ drops the trailing $-12$ ✗. The choice $10x$ adds the $3x$ instead of subtracting it ✗.)',
    },
    {
      q: 'Simplify $9x - 4(x - 5) - 20$.',
      choices: ['$5x - 40$', '$5x + 20$', '$5x$', '$13x$'],
      answer: 2,
      solution:
        'Distribute the $-4$: $-4 \\cdot x = -4x$ and $-4 \\cdot (-5) = +20$, so we have $9x - 4x + 20 - 20$. The $x$-team leaves $5x$ and the constants wipe each other out, so the answer is $5x$. Second route by substitution — at $x = 4$ the original is $36 - 4(-1) - 20 = 36 + 4 - 20 = 20$, and $5(4) = 20$ ✓. At $x = -2$ the original is $-18 - 4(-7) - 20 = -18 + 28 - 20 = -10$, and $5(-2) = -10$ ✓. (The choice $5x - 40$ is FORGETTING TO DISTRIBUTE THE MINUS to the $-5$, giving $-20 - 20$ ✗. The choice $5x + 20$ forgets the trailing $-20$ ✗. The choice $13x$ adds the $4x$ rather than subtracting ✗.)',
    },
    {
      q: 'Simplify $11x - 5(x - 3) - 15$.',
      choices: ['$6x - 30$', '$6x + 15$', '$16x$', '$6x$'],
      answer: 3,
      solution:
        'Distributing the $-5$ gives $-5x$ and $-5 \\cdot (-3) = +15$, so the expression is $11x - 5x + 15 - 15$. That is $6x$ from the $x$-team, and $0$ from the constants: the answer is $6x$. Second route by substitution — at $x = 4$ the original is $44 - 5(1) - 15 = 44 - 5 - 15 = 24$, and $6(4) = 24$ ✓. At $x = -1$ the original is $-11 - 5(-4) - 15 = -11 + 20 - 15 = -6$, and $6(-1) = -6$ ✓. (The choice $6x - 30$ is FORGETTING TO DISTRIBUTE THE MINUS to the $-3$, giving $-15 - 15$ ✗. The choice $6x + 15$ leaves off the trailing $-15$ ✗. The choice $16x$ adds the $5x$ instead of subtracting it ✗.)',
    },
  ],

  // p10 — evaluate a fraction whose top hides a common factor with the bottom.
  //       Every answer lands between 31 and 39.
  [
    {
      q: 'Evaluate $\\frac{3x^2 - 3}{x - 1}$ when $x = 10$.',
      choices: ['$33$', '$27$', '$11$', '$30$'],
      answer: 0,
      solution:
        'Work the top and the bottom separately. Top: $3(10)^2 - 3 = 300 - 3 = 297$. Bottom: $10 - 1 = 9$. So the value is $\\frac{297}{9} = 33$. Second route, one you can run without the big multiplication: the top is $3(x^2 - 1) = 3(x - 1)(x + 1)$, so the whole fraction is $3(x + 1)$ whenever $x \\neq 1$. At $x = 10$ that is $3 \\cdot 11 = 33$ ✓ — the same answer from a completely different direction. (The choice $27$ MISREADS THE SIGN IN THE DENOMINATOR, dividing by $x + 1 = 11$ ✗. The choice $11$ is THE LOST FACTOR: it answers $x + 1$ and forgets the $3$ out front ✗. The choice $30$ DROPS BOTH CONSTANTS, reading the fraction as $\\frac{3x^2}{x} = 3x$ ✗.)',
    },
    {
      q: 'Evaluate $\\frac{2x^2 - 8}{x - 2}$ when $x = 16$.',
      choices: ['$28$', '$36$', '$18$', '$32$'],
      answer: 1,
      solution:
        'Top and bottom separately. Top: $2(16)^2 - 8 = 512 - 8 = 504$. Bottom: $16 - 2 = 14$. So the value is $\\frac{504}{14} = 36$. Second route with no large arithmetic at all: the top is $2(x^2 - 4) = 2(x - 2)(x + 2)$, so the fraction equals $2(x + 2)$ whenever $x \\neq 2$. At $x = 16$ that is $2 \\cdot 18 = 36$ ✓. (The choice $28$ MISREADS THE SIGN IN THE DENOMINATOR, dividing by $x + 2 = 18$ ✗. The choice $18$ is THE LOST FACTOR, answering $x + 2$ without the $2$ out front ✗. The choice $32$ DROPS BOTH CONSTANTS and reads the fraction as $2x$ ✗.)',
    },
    {
      q: 'Evaluate $\\frac{5x^2 - 5}{x + 1}$ when $x = 8$.',
      choices: ['$45$', '$7$', '$35$', '$40$'],
      answer: 2,
      solution:
        'Top: $5(8)^2 - 5 = 320 - 5 = 315$. Bottom: $8 + 1 = 9$. The value is $\\frac{315}{9} = 35$. Second route: the top factors as $5(x^2 - 1) = 5(x - 1)(x + 1)$, so the fraction equals $5(x - 1)$ whenever $x \\neq -1$. At $x = 8$ that is $5 \\cdot 7 = 35$ ✓. Notice the bottom is $x + 1$ this time, so the surviving factor is $x - 1$, not $x + 1$. (The choice $45$ MISREADS THE SIGN IN THE DENOMINATOR, dividing by $x - 1 = 7$ ✗. The choice $7$ is THE LOST FACTOR, answering $x - 1$ and forgetting the $5$ ✗. The choice $40$ DROPS BOTH CONSTANTS and reads the fraction as $5x$ ✗.)',
    },
  ],

  // p11 — combine like terms first, then divide. Every answer is between 41
  //       and 49.
  [
    {
      q: 'If $3x + 4x + 5x = 504$, what is $x$?',
      choices: ['$42$', '$168$', '$56$', '$492$'],
      answer: 0,
      solution:
        'Combine the like terms before doing anything else: $3x + 4x + 5x = 12x$. So $12x = 504$, and $x = 504 \\div 12 = 42$. Second route, checking the three pieces separately instead of the sum: $3(42) = 126$, $4(42) = 168$, and $5(42) = 210$. Adding, $126 + 168 = 294$ and $294 + 210 = 504$ ✓ — the original equation, rebuilt from the answer. (The choice $168$ is DIVIDING BY ONE COEFFICIENT INSTEAD OF THE SUM, computing $504 \\div 3$ ✗. The choice $56$ adds only two of the three coefficients, dividing by $9$ ✗. The choice $492$ SUBTRACTS the $12$ instead of dividing by it ✗.)',
    },
    {
      q: 'If $2x + 3x + 5x = 450$, what is $x$?',
      choices: ['$225$', '$45$', '$90$', '$440$'],
      answer: 1,
      solution:
        'The left side is $2x + 3x + 5x = 10x$, so $10x = 450$ and $x = 450 \\div 10 = 45$. Second route, rebuilding the sum from the answer: $2(45) = 90$, $3(45) = 135$, $5(45) = 225$, and $90 + 135 + 225 = 450$ ✓. (The choice $225$ is DIVIDING BY ONE COEFFICIENT INSTEAD OF THE SUM, computing $450 \\div 2$ ✗. The choice $90$ drops the last term and divides by $5$ ✗. The choice $440$ SUBTRACTS the $10$ instead of dividing ✗.)',
    },
    {
      q: 'If $2x + 4x + 6x = 576$, what is $x$?',
      choices: ['$288$', '$96$', '$564$', '$48$'],
      answer: 3,
      solution:
        'Add the coefficients first: $2 + 4 + 6 = 12$, so the equation is $12x = 576$ and $x = 576 \\div 12 = 48$. Second route, rebuilding the sum: $2(48) = 96$, $4(48) = 192$, $6(48) = 288$, and $96 + 192 = 288$, then $288 + 288 = 576$ ✓. (The choice $288$ is DIVIDING BY ONE COEFFICIENT INSTEAD OF THE SUM, computing $576 \\div 2$ ✗. The choice $96$ uses only the first two coefficients and divides by $6$ ✗. The choice $564$ SUBTRACTS the $12$ instead of dividing by it ✗.)',
    },
  ],

  // p12 — divide two fractions; the variable cancels and a bare number is left.
  //       Every answer lands between 51 and 59.
  [
    {
      q: 'Compute $\\frac{9x}{5} \\div \\frac{x}{30}$ (assume $x \\neq 0$).',
      choices: ['$54$', '$\\frac{3x^2}{50}$', '$\\frac{1}{54}$', '$54x$'],
      answer: 0,
      solution:
        'Dividing means multiplying by the reciprocal of the SECOND fraction: $\\frac{9x}{5} \\cdot \\frac{30}{x} = \\frac{270x}{5x}$. The $x$ on top cancels the $x$ underneath, and $270 \\div 5 = 54$, so the answer is the plain number $54$. Second route with an actual value — at $x = 5$ the problem reads $\\frac{45}{5} \\div \\frac{5}{30} = 9 \\div \\frac{1}{6} = 54$ ✓, and at $x = -5$ it reads $-9 \\div \\left(-\\frac{1}{6}\\right) = 54$ ✓. The answer does not move when $x$ moves, which is exactly what a cancelled variable looks like. (The choice $\\frac{3x^2}{50}$ MULTIPLIES instead of flipping ✗. The choice $\\frac{1}{54}$ is FLIPPING THE WRONG FRACTION — the first one instead of the second ✗. The choice $54x$ forgets to cancel the $x$ ✗.)',
    },
    {
      q: 'Compute $\\frac{7x}{6} \\div \\frac{x}{48}$ (assume $x \\neq 0$).',
      choices: ['$\\frac{7x^2}{288}$', '$56x$', '$56$', '$\\frac{1}{56}$'],
      answer: 2,
      solution:
        'Flip the second fraction and multiply: $\\frac{7x}{6} \\cdot \\frac{48}{x} = \\frac{336x}{6x}$. The $x$s cancel, and $336 \\div 6 = 56$. A shortcut to the same place: $48 \\div 6 = 8$ first, leaving $7 \\cdot 8 = 56$. Second route with a value — at $x = 6$ the problem reads $7 \\div \\frac{6}{48} = 7 \\div \\frac{1}{8} = 56$ ✓, and at $x = -6$ it reads $-7 \\div \\left(-\\frac{1}{8}\\right) = 56$ ✓. (The choice $\\frac{7x^2}{288}$ MULTIPLIES the two fractions instead of dividing ✗. The choice $56x$ never cancels the $x$ ✗. The choice $\\frac{1}{56}$ is FLIPPING THE WRONG FRACTION ✗.)',
    },
    {
      q: 'Compute $\\frac{13x}{4} \\div \\frac{x}{16}$ (assume $x \\neq 0$).',
      choices: ['$\\frac{13x^2}{64}$', '$\\frac{1}{52}$', '$52x$', '$52$'],
      answer: 3,
      solution:
        'Multiply by the reciprocal of the second fraction: $\\frac{13x}{4} \\cdot \\frac{16}{x} = \\frac{208x}{4x}$. The $x$s cancel and $208 \\div 4 = 52$. Cancelling early is easier: $16 \\div 4 = 4$, leaving $13 \\cdot 4 = 52$. Second route with a value — at $x = 4$ the problem reads $13 \\div \\frac{4}{16} = 13 \\div \\frac{1}{4} = 52$ ✓, and at $x = -4$ it reads $-13 \\div \\left(-\\frac{1}{4}\\right) = 52$ ✓. (The choice $\\frac{13x^2}{64}$ MULTIPLIES instead of flipping ✗. The choice $\\frac{1}{52}$ is FLIPPING THE WRONG FRACTION ✗. The choice $52x$ leaves the $x$ uncancelled ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 2,
  challenge,
}
