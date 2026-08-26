// Introduction to Algebra chapter 2 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation is exactly a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so the
//    answer string is written in the one canonical form a student would hand in
//    — terms in descending degree, fractions reduced by their gcd, factored
//    answers factored completely. There are no `choices` keys in this file and
//    no `answer` is a bare number.
//  - Every simplification was checked numerically at several values of the
//    variable, including a negative one, and staying away from 0, 1, and 2,
//    where a sign slip or a lost coefficient hides.
//  - Every factoring was checked by expanding it back, term by term, and then
//    again at a numeric value.
//  - Fraction work is exact integer work with gcd reduction; no decimals appear
//    anywhere, and no answer is left unreduced.
//  - Every solution carries a primary route and then a genuinely INDEPENDENT
//    second route: a linear evaluation is confirmed by stepping the value of the
//    variable, an expansion or a distributed minus by evaluating the bracket
//    first at a test value, a factoring by expanding back, a quadratic
//    evaluation by regrouping as $x(x - b) + c$ so no square is ever taken, and
//    a fraction sum by substituting the common denominator itself.
//  - Traps that run through the file. SUBTRACTING BEFORE MULTIPLYING. ADDING
//    INSTEAD OF MULTIPLYING. THE INVISIBLE ONE: reading $-w$ as $0w$. MERGING
//    UNLIKE TERMS. LOSING THE MINUS SIGN. MULTIPLYING ONLY THE FIRST TERM.
//    FORGETTING TO DISTRIBUTE THE MINUS. PULLING OUT TOO LITTLE, which leaves a
//    factoring unfinished. LEAVING THE VARIABLE BEHIND. SQUARING WITHOUT
//    PARENTHESES. ADDING THE DENOMINATORS. STOPPING BEFORE REDUCING.

const worksheet = [
  // p1 — evaluate a linear expression at a whole number; the order of
  //      operations does all the work. Answers sit in the 61-69 lane.
  [
    {
      q: 'Evaluate $8x - 7$ when $x = 9$.',
      answer: '$65$',
      solution:
        'Substitute, then follow the order of operations: $8 \\cdot 9 - 7 = 72 - 7 = 65$. Second route that never multiplies $8$ by $9$ at all: at $x = 10$ the expression is $80 - 7 = 73$, and every time $x$ drops by $1$ the whole value drops by $8$, so at $x = 9$ it is $73 - 8 = 65$ ✓. SUBTRACTING BEFORE MULTIPLYING is the trap: $8(9 - 7) = 16$ ✗. ADDING INSTEAD OF MULTIPLYING gives $8 + 9 - 7 = 10$ ✗ — $8x$ always means $8$ TIMES $x$.',
    },
    {
      q: 'Evaluate $9x + 4$ when $x = 7$.',
      answer: '$67$',
      solution:
        'Substitute: $9 \\cdot 7 + 4 = 63 + 4 = 67$. Second route by climbing instead of multiplying: at $x = 5$ the expression is $45 + 4 = 49$, and each extra step of $x$ adds another $9$, so two steps later we are at $49 + 9 + 9 = 67$ ✓. ADDING INSTEAD OF MULTIPLYING gives $9 + 7 + 4 = 20$ ✗. Reading $9x$ as the two digits stuck together gives $97 + 4 = 101$ ✗.',
    },
    {
      q: 'Tessa is building a mosaic. After $t$ rows it holds $11t + 6$ tiles. How many tiles are in the mosaic when $t = 5$?',
      answer: '$61$',
      solution:
        'Substitute $t = 5$: $11 \\cdot 5 + 6 = 55 + 6 = 61$ tiles. Second route by counting rows one at a time: five rows of $11$ tiles run $11, 22, 33, 44, 55$, and the $6$ tiles she started with bring the total to $61$ ✓. MULTIPLYING THE WHOLE EXPRESSION is the trap: $11(5 + 6) = 121$ ✗, since the $6$ is added on at the end and never gets multiplied by $11$.',
    },
  ],

  // p2 — combine like terms with constants on both sides of the expression.
  [
    {
      q: 'Simplify $11m + 6 - 4m + 3$.',
      answer: '$7m + 9$',
      solution:
        'Sort the terms into teams, keeping every sign glued to its own term. The $m$-team: $11m - 4m = 7m$. The constants: $6 + 3 = 9$. So the answer is $7m + 9$, and it cannot shrink further, because $7m$ and $9$ are unlike terms. Second route by substituting: at $m = 4$ the original is $44 + 6 - 16 + 3 = 37$, and $28 + 9 = 37$ ✓. At $m = -3$ the original is $-33 + 6 + 12 + 3 = -12$, and $-21 + 9 = -12$ ✓. MERGING UNLIKE TERMS is the trap: sweeping the $9$ into the $m$-team gives $16m$ ✗, which already misses at $m = 0$.',
    },
    {
      q: 'Simplify $7k - 5 + 2k + 12$.',
      answer: '$9k + 7$',
      solution:
        'The $k$-team: $7k + 2k = 9k$. The constants: $-5 + 12 = 7$. That gives $9k + 7$. Second route by substituting: at $k = 3$ the original is $21 - 5 + 6 + 12 = 34$, and $27 + 7 = 34$ ✓. At $k = -4$ the original is $-28 - 5 - 8 + 12 = -29$, and $-36 + 7 = -29$ ✓. LOSING THE MINUS SIGN is the trap: reading the constants as $5 + 12 = 17$ gives $9k + 17$ ✗. A minus sign belongs to the term standing right behind it.',
    },
    {
      q: 'Simplify $10w + 9 - w - 4$.',
      answer: '$9w + 5$',
      solution:
        'That lone $-w$ is $-1w$, not nothing at all. The $w$-team: $10w - 1w = 9w$. The constants: $9 - 4 = 5$. Answer: $9w + 5$. Second route by substituting: at $w = 6$ the original is $60 + 9 - 6 - 4 = 59$, and $54 + 5 = 59$ ✓. At $w = -3$ the original is $-30 + 9 + 3 - 4 = -22$, and $-27 + 5 = -22$ ✓. THE INVISIBLE ONE is the trap: treating $-w$ as $0w$ leaves $10w + 5$ ✗, which is off by exactly one copy of $w$.',
    },
  ],

  // p3 — distribute a positive constant over a difference.
  [
    {
      q: 'Expand $7(2x - 3)$.',
      answer: '$14x - 21$',
      solution:
        'The $7$ reaches EVERY term inside, sign and all: $7 \\cdot 2x = 14x$ and $7 \\cdot (-3) = -21$, so $7(2x - 3) = 14x - 21$. Second route that works the bracket first: at $x = 5$ the bracket is $10 - 3 = 7$ and the product is $7 \\cdot 7 = 49$, while $70 - 21 = 49$ ✓. At $x = -2$ the bracket is $-7$ and the product is $-49$, while $-28 - 21 = -49$ ✓. MULTIPLYING ONLY THE FIRST TERM leaves $14x - 3$ ✗. INVENTING A SIGN FLIP gives $14x + 21$ ✗ — a positive times a negative stays negative.',
    },
    {
      q: 'Expand $5(4a - 9)$.',
      answer: '$20a - 45$',
      solution:
        'Distribute to both terms: $5 \\cdot 4a = 20a$ and $5 \\cdot (-9) = -45$, giving $20a - 45$. Second route with the bracket evaluated first: at $a = 3$ the bracket is $12 - 9 = 3$ and the product is $15$, while $60 - 45 = 15$ ✓. At $a = -1$ the bracket is $-13$ and the product is $-65$, while $-20 - 45 = -65$ ✓. ADDING INSTEAD OF MULTIPLYING is the trap: $5 + 4$ gives the bogus $9a - 9$ ✗. LEAVING THE CONSTANT UNTOUCHED gives $20a - 9$ ✗.',
    },
    {
      q: 'Expand $8(3n - 5)$.',
      answer: '$24n - 40$',
      solution:
        'Each term inside gets multiplied by $8$: $8 \\cdot 3n = 24n$ and $8 \\cdot (-5) = -40$, so $8(3n - 5) = 24n - 40$. Second route with the bracket first: at $n = 4$ the bracket is $12 - 5 = 7$ and the product is $56$, while $96 - 40 = 56$ ✓. At $n = -2$ the bracket is $-11$ and the product is $-88$, while $-48 - 40 = -88$ ✓. LEAVING THE CONSTANT UNTOUCHED gives $24n - 5$ ✗, which misses by $35$ at every single value of $n$.',
    },
  ],

  // p4 — subtract a whole parenthesized expression; the minus is a hidden -1.
  [
    {
      q: 'Simplify $12x - (5x - 8)$.',
      answer: '$7x + 8$',
      solution:
        'The minus sign in front of the parentheses is a hidden $-1$, so BOTH signs inside flip: $-(5x - 8) = -5x + 8$. Now combine: $12x - 5x + 8 = 7x + 8$. Second route that distributes nothing at all: at $x = 3$ work the bracket first, $15 - 8 = 7$, so the expression is $36 - 7 = 29$, and $21 + 8 = 29$ ✓. At $x = -2$ the bracket is $-18$, so the expression is $-24 + 18 = -6$, and $-14 + 8 = -6$ ✓. FORGETTING TO DISTRIBUTE THE MINUS is the trap: $7x - 8$ ✗.',
    },
    {
      q: 'Simplify $10n - (2n - 9)$.',
      answer: '$8n + 9$',
      solution:
        'Flip every sign inside: $-(2n - 9) = -2n + 9$, so the expression becomes $10n - 2n + 9 = 8n + 9$. Second route with the bracket evaluated first: at $n = 4$ the bracket is $8 - 9 = -1$, so we have $40 - (-1) = 41$, and $32 + 9 = 41$ ✓. At $n = -3$ the bracket is $-15$, so we have $-30 + 15 = -15$, and $-24 + 9 = -15$ ✓. FORGETTING TO DISTRIBUTE THE MINUS gives $8n - 9$ ✗. ADDING THE BRACKET INSTEAD OF SUBTRACTING IT gives $12n - 9$ ✗.',
    },
    {
      q: 'Simplify $6b - (b - 11)$.',
      answer: '$5b + 11$',
      solution:
        'The lone $b$ inside is $1b$, and the outside minus flips both terms: $-(b - 11) = -b + 11$. So $6b - b + 11 = 5b + 11$. Second route with values: at $b = 5$ the bracket is $5 - 11 = -6$, so the expression is $30 + 6 = 36$, and $25 + 11 = 36$ ✓. At $b = -4$ the bracket is $-15$, so the expression is $-24 + 15 = -9$, and $-20 + 11 = -9$ ✓. FORGETTING TO DISTRIBUTE THE MINUS gives $5b - 11$ ✗, and THE INVISIBLE ONE — never subtracting that single $b$ — gives $6b + 11$ ✗.',
    },
  ],

  // p5 — factor a common constant out of a linear expression.
  [
    {
      q: 'Factor $18x + 24$.',
      answer: '$6(3x + 4)$',
      solution:
        'Hunt for the greatest common factor of $18$ and $24$. It is $6$, since $18 = 6 \\cdot 3$ and $24 = 6 \\cdot 4$. Pull it out front: $18x + 24 = 6(3x + 4)$. Expand to check: $6 \\cdot 3x + 6 \\cdot 4 = 18x + 24$ ✓. Second route through a value: at $x = 5$ the original is $90 + 24 = 114$, and $6(15 + 4) = 6 \\cdot 19 = 114$ ✓. PULLING OUT TOO LITTLE is the trap: $2(9x + 12)$ ✗ is a true statement but an unfinished answer, since $9x$ and $12$ still share a $3$. DIVIDING ONLY ONE TERM gives $6(3x + 24)$ ✗, which expands to $18x + 144$.',
    },
    {
      q: 'Factor $15m - 35$.',
      answer: '$5(3m - 7)$',
      solution:
        'The greatest common factor of $15$ and $35$ is $5$: $15 = 5 \\cdot 3$ and $35 = 5 \\cdot 7$. The minus sign stays inside the parentheses: $15m - 35 = 5(3m - 7)$. Expand to check: $5 \\cdot 3m - 5 \\cdot 7 = 15m - 35$ ✓. Second route through a value: at $m = 4$ the original is $60 - 35 = 25$, and $5(12 - 7) = 5 \\cdot 5 = 25$ ✓. LOSING THE MINUS SIGN gives $5(3m + 7)$ ✗, which expands to $15m + 35$. PULLING OUT THE WRONG NUMBER is the other trap: $3$ divides $15$ but not $35$, so a $3$ can never come out front here.',
    },
    {
      q: 'Factor $12y + 30$.',
      answer: '$6(2y + 5)$',
      solution:
        'Both $12$ and $30$ are divisible by $6$, and $6$ is the largest number that divides them both: $12 \\div 6 = 2$ and $30 \\div 6 = 5$. So $12y + 30 = 6(2y + 5)$. Expand to check: $6 \\cdot 2y + 6 \\cdot 5 = 12y + 30$ ✓. Second route through a value: at $y = 5$ the original is $60 + 30 = 90$, and $6(10 + 5) = 90$ ✓. PULLING OUT TOO LITTLE gives $2(6y + 15)$ ✗ — a real factoring, but $6y$ and $15$ still share a $3$, so it is not complete. PULLING OUT TOO MUCH gives $12(y + 3)$ ✗, since $12$ does not divide $30$; that expands to $12y + 36$.',
    },
  ],

  // p6 — add two fractions with unlike denominators.
  [
    {
      q: 'Compute $\\frac{y}{6} + \\frac{y}{9}$.',
      answer: '$\\frac{5y}{18}$',
      solution:
        'The least common denominator of $6$ and $9$ is $18$: $\\frac{y}{6} = \\frac{3y}{18}$ and $\\frac{y}{9} = \\frac{2y}{18}$. Now the numerators are like terms: $\\frac{3y + 2y}{18} = \\frac{5y}{18}$, and $5$ shares no factor with $18$, so it is already in lowest terms. Second route with a number in place of $y$: at $y = 18$ the two pieces are $3$ and $2$ for a total of $5$, and $\\frac{5 \\cdot 18}{18} = 5$ ✓. At $y = -36$ they are $-6$ and $-4$ for $-10$, and $\\frac{5 \\cdot (-36)}{18} = -10$ ✓. ADDING THE DENOMINATORS is the trap: adding straight across gives $\\frac{2y}{15}$ ✗.',
    },
    {
      q: 'Compute $\\frac{m}{4} + \\frac{m}{10}$.',
      answer: '$\\frac{7m}{20}$',
      solution:
        'The least common denominator of $4$ and $10$ is $20$: $\\frac{m}{4} = \\frac{5m}{20}$ and $\\frac{m}{10} = \\frac{2m}{20}$, so the sum is $\\frac{5m + 2m}{20} = \\frac{7m}{20}$. Since $7$ is prime and does not divide $20$, no reducing is left to do. Second route with numbers: at $m = 20$ the pieces are $5$ and $2$ for a total of $7$, and $\\frac{7 \\cdot 20}{20} = 7$ ✓. At $m = -40$ they are $-10$ and $-4$ for $-14$, and $\\frac{7 \\cdot (-40)}{20} = -14$ ✓. ADDING THE DENOMINATORS gives $\\frac{2m}{14}$ ✗. Using $40$ as the denominator is not wrong, but STOPPING BEFORE REDUCING leaves $\\frac{14m}{40}$ ✗ instead of $\\frac{7m}{20}$.',
    },
    {
      q: 'Uma reads for $\\frac{n}{6}$ of an hour in the morning and $\\frac{n}{10}$ of an hour at night. Written as a single fraction, how much of an hour does she read in a day?',
      answer: '$\\frac{4n}{15}$',
      solution:
        'Add the two pieces over the least common denominator of $6$ and $10$, which is $30$: $\\frac{n}{6} = \\frac{5n}{30}$ and $\\frac{n}{10} = \\frac{3n}{30}$, so the total is $\\frac{5n + 3n}{30} = \\frac{8n}{30}$. That still reduces, since $8$ and $30$ share a factor of $2$: the answer is $\\frac{4n}{15}$. Second route with numbers: at $n = 30$ the pieces are $5$ and $3$ for a total of $8$, and $\\frac{4 \\cdot 30}{15} = 8$ ✓. At $n = -60$ they are $-10$ and $-6$ for $-16$, and $\\frac{4 \\cdot (-60)}{15} = -16$ ✓. STOPPING BEFORE REDUCING leaves $\\frac{8n}{30}$ ✗, and ADDING THE DENOMINATORS gives $\\frac{2n}{16}$ ✗.',
    },
  ],

  // p7 — expand two products and combine, the second product subtracted.
  [
    {
      q: 'Simplify $3(2x + 5) - 4(x - 3)$.',
      answer: '$2x + 27$',
      solution:
        'Expand each product on its own. First $3(2x + 5) = 6x + 15$. Then $-4(x - 3) = -4x + 12$, because $-4 \\cdot (-3) = +12$. Combine: $6x - 4x = 2x$ and $15 + 12 = 27$, so the answer is $2x + 27$. Second route with values: at $x = 4$ the original is $3 \\cdot 13 - 4 \\cdot 1 = 39 - 4 = 35$, and $8 + 27 = 35$ ✓. At $x = -2$ the original is $3 \\cdot 1 - 4 \\cdot (-5) = 3 + 20 = 23$, and $-4 + 27 = 23$ ✓. FORGETTING TO DISTRIBUTE THE MINUS gives $6x + 15 - 4x - 12 = 2x + 3$ ✗.',
    },
    {
      q: 'Simplify $5(2y + 3) - 4(y - 1)$.',
      answer: '$6y + 19$',
      solution:
        'Expand both pieces: $5(2y + 3) = 10y + 15$, and $-4(y - 1) = -4y + 4$ since $-4 \\cdot (-1) = +4$. Combine: $10y - 4y = 6y$ and $15 + 4 = 19$, giving $6y + 19$. Second route with values: at $y = 3$ the original is $5 \\cdot 9 - 4 \\cdot 2 = 45 - 8 = 37$, and $18 + 19 = 37$ ✓. At $y = -2$ the original is $5 \\cdot (-1) - 4 \\cdot (-3) = -5 + 12 = 7$, and $-12 + 19 = 7$ ✓. FORGETTING TO DISTRIBUTE THE MINUS gives $6y + 11$ ✗. MULTIPLYING ONLY THE FIRST TERM inside the second bracket gives $6y + 14$ ✗.',
    },
    {
      q: 'Simplify $6(n + 4) - 5(n - 2)$.',
      answer: '$n + 34$',
      solution:
        'Expand both: $6(n + 4) = 6n + 24$, and $-5(n - 2) = -5n + 10$ because $-5 \\cdot (-2) = +10$. Combine: $6n - 5n = 1n$, written simply as $n$, and $24 + 10 = 34$. The answer is $n + 34$ — exactly one copy of $n$ survives, which is easy to lose sight of. Second route with values: at $n = 5$ the original is $6 \\cdot 9 - 5 \\cdot 3 = 54 - 15 = 39$, and $5 + 34 = 39$ ✓. At $n = -3$ the original is $6 \\cdot 1 - 5 \\cdot (-5) = 6 + 25 = 31$, and $-3 + 34 = 31$ ✓. FORGETTING TO DISTRIBUTE THE MINUS gives $n + 14$ ✗, and CANCELING THE VARIABLE ENTIRELY gives a bare $34$ ✗.',
    },
  ],

  // p8 — evaluate a quadratic at a negative x; parentheses do the heavy
  //      lifting. Answers sit in the 71-79 lane.
  [
    {
      q: 'Evaluate $x^2 - 3x + 4$ when $x = -7$.',
      answer: '$74$',
      solution:
        'Wrap the negative in parentheses before substituting: $(-7)^2 - 3(-7) + 4$. The square is positive, $(-7)^2 = 49$. Subtracting a negative adds, $-3 \\cdot (-7) = +21$. Then $49 + 21 + 4 = 74$. Second route that never takes a square at all: regroup first as $x^2 - 3x + 4 = x(x - 3) + 4$, and at $x = -7$ that is $(-7)(-10) + 4 = 70 + 4 = 74$ ✓. SQUARING WITHOUT PARENTHESES is the trap: reading $-7^2$ as $-49$ gives $-49 + 21 + 4 = -24$ ✗. KEEPING THE MINUS ON THE MIDDLE TERM gives $49 - 21 + 4 = 32$ ✗.',
    },
    {
      q: 'Evaluate $x^2 - 5x + 7$ when $x = -6$.',
      answer: '$73$',
      solution:
        'Substitute with parentheses: $(-6)^2 - 5(-6) + 7 = 36 + 30 + 7 = 73$. Both awkward signs land in our favor — a negative squared is positive, and subtracting $-30$ adds $30$. Second route by regrouping: $x^2 - 5x + 7 = x(x - 5) + 7$, so at $x = -6$ we get $(-6)(-11) + 7 = 66 + 7 = 73$ ✓. SQUARING WITHOUT PARENTHESES gives $-36 + 30 + 7 = 1$ ✗. KEEPING THE MINUS ON THE MIDDLE TERM gives $36 - 30 + 7 = 13$ ✗.',
    },
    {
      q: 'Evaluate $x^2 - x + 3$ when $x = -8$.',
      answer: '$75$',
      solution:
        'The middle term is $-1x$, so at $x = -8$ it contributes $-(-8) = +8$. Substituting with parentheses: $(-8)^2 - (-8) + 3 = 64 + 8 + 3 = 75$. Second route by regrouping: $x^2 - x + 3 = x(x - 1) + 3$, which at $x = -8$ is $(-8)(-9) + 3 = 72 + 3 = 75$ ✓. SQUARING WITHOUT PARENTHESES gives $-64 + 8 + 3 = -53$ ✗. KEEPING THE MINUS ON THE MIDDLE TERM gives $64 - 8 + 3 = 59$ ✗.',
    },
  ],

  // p9 — factor a common monomial out of a quadratic difference; the answer
  //      must be factored completely, variable and all.
  [
    {
      q: 'Factor $18x^2 - 12x$ completely.',
      answer: '$6x(3x - 2)$',
      solution:
        'The coefficients $18$ and $12$ share a greatest common factor of $6$, and both terms carry an $x$, so the greatest common factor of the whole expression is $6x$. Dividing: $18x^2 \\div 6x = 3x$ and $-12x \\div 6x = -2$, giving $6x(3x - 2)$. Expand to check: $6x \\cdot 3x - 6x \\cdot 2 = 18x^2 - 12x$ ✓. Second route through a value: at $x = 4$ the original is $288 - 48 = 240$, and $6 \\cdot 4 \\cdot (12 - 2) = 24 \\cdot 10 = 240$ ✓. LEAVING THE VARIABLE BEHIND gives $6(3x^2 - 2x)$ ✗ — true, but the inside still has an $x$ to give up. LOSING THE MINUS SIGN gives $6x(3x + 2)$ ✗.',
    },
    {
      q: 'Factor $14y^2 - 21y$ completely.',
      answer: '$7y(2y - 3)$',
      solution:
        'The numbers $14$ and $21$ share a $7$, and both terms carry a $y$, so pull out $7y$: $14y^2 \\div 7y = 2y$ and $-21y \\div 7y = -3$. That gives $7y(2y - 3)$. Expand to check: $7y \\cdot 2y - 7y \\cdot 3 = 14y^2 - 21y$ ✓. Second route through a value: at $y = 3$ the original is $126 - 63 = 63$, and $7 \\cdot 3 \\cdot (6 - 3) = 21 \\cdot 3 = 63$ ✓. LEAVING THE VARIABLE BEHIND gives $7(2y^2 - 3y)$ ✗, which is not completely factored. LOSING THE MINUS SIGN gives $7y(2y + 3)$ ✗, which expands to $14y^2 + 21y$.',
    },
    {
      q: 'Factor $30n^2 - 18n$ completely.',
      answer: '$6n(5n - 3)$',
      solution:
        'The greatest common factor of $30$ and $18$ is $6$, and every term carries an $n$, so the greatest common factor is $6n$: $30n^2 \\div 6n = 5n$ and $-18n \\div 6n = -3$. So $30n^2 - 18n = 6n(5n - 3)$. Expand to check: $6n \\cdot 5n - 6n \\cdot 3 = 30n^2 - 18n$ ✓. Second route through a value, and a negative one at that: at $n = -2$ the original is $120 + 36 = 156$, and $6(-2) \\cdot (-10 - 3) = -12 \\cdot (-13) = 156$ ✓. PULLING OUT TOO LITTLE gives $3n(10n - 6)$ ✗, since $10n$ and $6$ still share a $2$. LOSING THE MINUS SIGN gives $6n(5n + 3)$ ✗.',
    },
  ],

  // p10 — three fractions with unlike denominators, one of them subtracted;
  //       two of the three answers still need reducing at the end.
  [
    {
      q: 'Compute $\\frac{y}{4} + \\frac{y}{3} - \\frac{y}{6}$.',
      answer: '$\\frac{5y}{12}$',
      solution:
        'The least common denominator of $4$, $3$, and $6$ is $12$: $\\frac{y}{4} = \\frac{3y}{12}$, $\\frac{y}{3} = \\frac{4y}{12}$, and $\\frac{y}{6} = \\frac{2y}{12}$. Now the numerators are like terms: $\\frac{3y + 4y - 2y}{12} = \\frac{5y}{12}$, already in lowest terms since $5$ does not divide $12$. Second route with numbers: at $y = 12$ the three pieces are $3$, $4$, and $2$, giving $3 + 4 - 2 = 5$, and $\\frac{5 \\cdot 12}{12} = 5$ ✓. At $y = -24$ they are $-6$, $-8$, and $-4$, giving $-6 - 8 + 4 = -10$, and $\\frac{5 \\cdot (-24)}{12} = -10$ ✓. FLIPPING THE LAST SIGN is the trap: adding all three gives $\\frac{9y}{12} = \\frac{3y}{4}$ ✗.',
    },
    {
      q: 'Compute $\\frac{m}{2} + \\frac{m}{5} - \\frac{m}{10}$.',
      answer: '$\\frac{3m}{5}$',
      solution:
        'Use the least common denominator $10$: $\\frac{m}{2} = \\frac{5m}{10}$, $\\frac{m}{5} = \\frac{2m}{10}$, and the last fraction is already tenths. Combine the numerators: $\\frac{5m + 2m - m}{10} = \\frac{6m}{10}$, which reduces by $2$ to $\\frac{3m}{5}$. Second route with numbers: at $m = 10$ the pieces are $5$, $2$, and $1$, giving $5 + 2 - 1 = 6$, and $\\frac{3 \\cdot 10}{5} = 6$ ✓. At $m = -20$ they are $-10$, $-4$, and $-2$, giving $-10 - 4 + 2 = -12$, and $\\frac{3 \\cdot (-20)}{5} = -12$ ✓. STOPPING BEFORE REDUCING leaves $\\frac{6m}{10}$ ✗, and FLIPPING THE LAST SIGN gives $\\frac{8m}{10} = \\frac{4m}{5}$ ✗.',
    },
    {
      q: 'Compute $\\frac{n}{2} + \\frac{n}{6} - \\frac{n}{3}$.',
      answer: '$\\frac{n}{3}$',
      solution:
        'The least common denominator of $2$, $6$, and $3$ is $6$: $\\frac{n}{2} = \\frac{3n}{6}$, the middle fraction stays put as $\\frac{n}{6}$, and $\\frac{n}{3} = \\frac{2n}{6}$. Combine: $\\frac{3n + n - 2n}{6} = \\frac{2n}{6} = \\frac{n}{3}$. Second route with numbers: at $n = 6$ the pieces are $3$, $1$, and $2$, giving $3 + 1 - 2 = 2$, and $\\frac{6}{3} = 2$ ✓. At $n = -12$ they are $-6$, $-2$, and $-4$, giving $-6 - 2 + 4 = -4$, and $\\frac{-12}{3} = -4$ ✓. THE INVISIBLE ONE is the trap: dropping the middle numerator leaves $\\frac{3n - 2n}{6} = \\frac{n}{6}$ ✗. STOPPING BEFORE REDUCING leaves $\\frac{2n}{6}$ ✗.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 2,
  worksheet,
}
