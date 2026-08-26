// Introduction to Algebra chapter 2 — variations for sections 2.1 and 2.2.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every "evaluate when x = ..." answer was checked by substituting with
//    PARENTHESES and doing exact integer or exact fraction arithmetic.
//  - An exponent binds only to the symbol it sits on. At x = -4, x^2 is 16 but
//    -x^2 is -16. Even powers of a negative turn positive; odd powers stay
//    negative.
//  - Every named wrong method was actually carried out, to be sure it lands
//    somewhere OTHER than the key. No distractor here rewards the mistake it
//    is meant to test.
//  - Every simplification in 2.2 was checked by evaluating the original and the
//    simplified form at three different values of the variable.
//  - Sections 2.3 and 2.4 own distribution, factoring, and fractions with a
//    variable in the denominator, so nothing here needs them: perimeters are
//    built by adding the sides one at a time, never by distributing.

const s21 = [
  // p1 — evaluate a linear expression; multiplication before addition
  [
    {
      q: 'If $x = 7$, what is the value of $4x + 3$?',
      choices: ['$31$', '$40$', '$14$', '$50$'],
      answer: 0,
      solution:
        'Substitute $7$ for $x$: $4x + 3 = 4 \\cdot 7 + 3$. Multiplication comes before addition, so $4 \\cdot 7 = 28$ and then $28 + 3 = 31$. The choice $40$ adds first, computing $4(7 + 3)$ — but there are no parentheses in $4x + 3$, so the $3$ is not part of what gets multiplied. The choice $14$ reads $4x$ as $4 + x$, giving $4 + 7 + 3$. The choice $50$ writes the digits side by side as $47$ and then adds $3$; $4x$ means $4$ TIMES $x$, never "$4$ then $x$".',
    },
    {
      q: 'If $x = 6$, what is the value of $5x - 2$?',
      choices: ['$20$', '$28$', '$18$', '$9$'],
      answer: 1,
      solution:
        'Replace $x$ with $6$: $5 \\cdot 6 - 2 = 30 - 2 = 28$. The choice $20$ subtracts first, computing $5(6 - 2)$, which is a different expression. The choice $18$ treats $5x$ and $-2$ as though they could be combined into $(5 - 2)x = 3x$, giving $3 \\cdot 6$ — but $5x$ and $2$ are unlike, so they never merge. The choice $9$ reads $5x$ as $5 + x$.',
    },
    {
      q: 'The expression $2t + 9$ gives the height in centimetres of a bean plant $t$ days after it sprouted. How tall is the plant after $8$ days?',
      choices: ['$34$', '$19$', '$16$', '$25$'],
      answer: 3,
      solution:
        'Put $t = 8$ into $2t + 9$: $2 \\cdot 8 + 9 = 16 + 9 = 25$ centimetres. The $9$ is the height it already had on day zero, and the plant adds $2$ centimetres a day. The choice $34$ adds before multiplying, $2(8 + 9)$. The choice $16$ stops after the multiplication and forgets the starting height. The choice $19$ reads $2t$ as $2 + t$.',
    },
  ],
  // p2 — translating a "less than" phrase into symbols
  [
    {
      q: 'Which expression means "$4$ less than three times a number $m$"?',
      choices: ['$4 - 3m$', '$3m - 4$', '$3(m - 4)$', '$\\frac{m}{3} - 4$'],
      answer: 1,
      solution:
        '"Three times a number $m$" is $3m$, and "$4$ less than" it means we take $4$ away FROM $3m$: $3m - 4$. Test at $m = 10$: three times $10$ is $30$, and $4$ less than $30$ is $26 = 3(10) - 4$. ✓ The choice $4 - 3m$ reverses the subtraction — it says "$3m$ less than $4$", and at $m = 10$ it gives $-26$. The choice $3(m - 4)$ subtracts first and then triples, giving $18$ at $m = 10$. The choice $\\frac{m}{3} - 4$ divides by $3$ instead of multiplying.',
    },
    {
      q: 'Which expression means "$9$ less than half of a number $p$"?',
      choices: ['$9 - \\frac{p}{2}$', '$\\frac{p - 9}{2}$', '$\\frac{p}{2} - 9$', '$2p - 9$'],
      answer: 2,
      solution:
        '"Half of a number $p$" is $\\frac{p}{2}$, and "$9$ less than" that means we subtract $9$ from it: $\\frac{p}{2} - 9$. Check at $p = 20$: half of $20$ is $10$, and $9$ less than $10$ is $1$. ✓ The choice $9 - \\frac{p}{2}$ flips the subtraction and gives $-1$ at $p = 20$. The choice $\\frac{p - 9}{2}$ halves AFTER subtracting, giving $\\frac{11}{2}$ at $p = 20$. The choice $2p - 9$ doubles instead of halving, giving $31$.',
    },
    {
      q: 'Which phrase describes the expression $6y - 3$?',
      choices: [
        '"three times the difference of $y$ and $6$"',
        '"$6$ less than three times $y$"',
        '"$6$ times the difference of $y$ and $3$"',
        '"the product of $6$ and $y$, decreased by $3$"',
      ],
      answer: 3,
      solution:
        'Read $6y - 3$ from the inside out: $6y$ is the product of $6$ and $y$, and the $-3$ takes $3$ away from that product. So the phrase is "the product of $6$ and $y$, decreased by $3$". Test each rival at $y = 5$, where $6y - 3 = 27$. "Three times the difference of $y$ and $6$" is $3(y - 6) = -3$. "$6$ less than three times $y$" is $3y - 6 = 9$ — right shape, wrong numbers. "$6$ times the difference of $y$ and $3$" is $6(y - 3) = 12$; that one needs parentheses, which $6y - 3$ does not have.',
    },
  ],
  // p3 — powers of a negative number
  [
    {
      q: 'Evaluate $x^2$ when $x = -5$.',
      choices: ['$25$', '$-25$', '$-10$', '$10$'],
      answer: 0,
      solution:
        'Substitute with parentheses: $(-5)^2 = (-5) \\times (-5) = 25$. Two negative factors make a positive product, so squaring a negative number always lands on a positive answer. The choice $-25$ is what you get by writing $-5^2$ without the parentheses — that means "the opposite of $5^2$", a different expression. The choices $-10$ and $10$ multiply by $2$ instead of using the number as a factor twice; an exponent of $2$ is not the same as doubling.',
    },
    {
      q: 'Evaluate $x^3$ when $x = -2$.',
      choices: ['$8$', '$-6$', '$-8$', '$6$'],
      answer: 2,
      solution:
        'Substitute with parentheses and use the factor three times: $(-2)^3 = (-2) \\times (-2) \\times (-2)$. The first two factors give $+4$, and the third flips the sign back: $4 \\times (-2) = -8$. An ODD number of negative factors leaves the answer negative, so unlike $(-2)^2 = 4$, the cube stays below zero. The choice $8$ assumes every power of a negative turns positive. The choices $-6$ and $6$ multiply by $3$ instead of using three factors.',
    },
    {
      q: 'Evaluate $-x^2$ when $x = -4$.',
      choices: ['$16$', '$-8$', '$8$', '$-16$'],
      answer: 3,
      solution:
        'The exponent sits on $x$ alone, so square first and take the opposite second: $-x^2 = -\\left((-4)^2\\right) = -(16) = -16$. The choice $16$ squares the whole thing, $(-x)^2 = (4)^2$, but the minus sign in $-x^2$ is outside the power. Compare the two carefully: at $x = -4$, $x^2 = 16$ while $-x^2 = -16$. The choice $-8$ is $2x$, and $8$ is $-2x$; both replace the exponent with a doubling.',
    },
  ],
  // p4 — subtracting a variable, with a negative result
  [
    {
      q: 'Evaluate $4 - x$ when $x = 9$.',
      choices: ['$-5$', '$5$', '$13$', '$-13$'],
      answer: 0,
      solution:
        'Substitute: $4 - 9$. Since $9$ is larger than $4$, the result drops below zero: $4 - 9 = -5$. The choice $5$ subtracts in the wrong order, $9 - 4$ — subtraction is not something you may reorder. The choice $13$ adds instead of subtracting, and $-13$ adds and then flips the sign.',
    },
    {
      q: 'Evaluate $6 - x$ when $x = -2$.',
      choices: ['$4$', '$8$', '$-4$', '$-8$'],
      answer: 1,
      solution:
        'Substitute with parentheses: $6 - (-2)$. Subtracting a negative adds, so $6 - (-2) = 6 + 2 = 8$. The choice $4$ drops the minus sign that belongs to $x$ and computes $6 - 2$. The choice $-4$ comes from $-6 + 2$, and $-8$ from $-(6 + 2)$; both attach a stray minus sign to the $6$, which the expression never asked for.',
    },
    {
      q: 'A hiker starts at an elevation of $8$ metres above sea level and then descends $x$ metres, so her new elevation is $8 - x$ metres. What is her elevation when $x = 15$?',
      choices: ['$7$', '$23$', '$-7$', '$-23$'],
      answer: 2,
      solution:
        'Substitute $15$ for $x$: $8 - 15 = -7$ metres. She descended further than she started up, so she ends $7$ metres BELOW sea level, and a negative elevation is exactly how we record that. The choice $7$ subtracts backwards, $15 - 8$, which would put her above sea level. The choice $23$ adds the descent instead of subtracting it, and $-23$ does the same and then flips the sign.',
    },
  ],
  // p5 — evaluating at a fraction
  [
    {
      q: 'Evaluate $6x - 5$ when $x = \\frac{1}{3}$.',
      choices: ['$\\frac{4}{3}$', '$-3$', '$2$', '$\\frac{1}{3}$'],
      answer: 1,
      solution:
        '$6x$ means $6$ TIMES $x$: $6 \\cdot \\frac{1}{3} = \\frac{6}{3} = 2$. Then subtract: $2 - 5 = -3$. The choice $\\frac{4}{3}$ adds $6$ and $\\frac{1}{3}$ instead of multiplying, giving $\\frac{19}{3} - 5$. The choice $2$ stops after the multiplication and never subtracts the $5$. The choice $\\frac{1}{3}$ merges $6x$ with $-5$ into $(6 - 5)x = x$, but $6x$ and $5$ are unlike terms and cannot be combined.',
    },
    {
      q: 'Evaluate $8x + 3$ when $x = \\frac{1}{2}$.',
      choices: ['$\\frac{23}{2}$', '$4$', '$7$', '$\\frac{11}{2}$'],
      answer: 2,
      solution:
        'Multiply first: $8 \\cdot \\frac{1}{2} = \\frac{8}{2} = 4$. Then $4 + 3 = 7$. Notice how a fraction less than $1$ shrinks the $8$ rather than growing it. The choice $\\frac{23}{2}$ adds $8 + \\frac{1}{2} + 3$ instead of multiplying. The choice $4$ stops one step early. The choice $\\frac{11}{2}$ combines $8$ and $3$ first, computing $(8 + 3) \\cdot \\frac{1}{2}$, which changes what is being multiplied.',
    },
    {
      q: 'Evaluate $10x - 1$ when $x = \\frac{3}{5}$.',
      choices: ['$\\frac{48}{5}$', '$6$', '$\\frac{27}{5}$', '$5$'],
      answer: 3,
      solution:
        'First the product: $10 \\cdot \\frac{3}{5} = \\frac{30}{5} = 6$. Then $6 - 1 = 5$. The choice $\\frac{48}{5}$ adds $10 + \\frac{3}{5}$ before subtracting $1$. The choice $6$ forgets the $-1$. The choice $\\frac{27}{5}$ merges the $10$ and the $-1$ into $(10 - 1)x = 9 \\cdot \\frac{3}{5}$ — a plain number and a term with $x$ are never like terms.',
    },
  ],
  // p6 — a coefficient in front of a power of a negative
  [
    {
      q: 'Evaluate $3x^2$ when $x = -4$.',
      choices: ['$48$', '$144$', '$-48$', '$-24$'],
      answer: 0,
      solution:
        'The exponent applies only to $x$, so square before multiplying: $(-4)^2 = 16$, and then $3 \\cdot 16 = 48$. The choice $144$ squares the whole product, $(3x)^2 = (-12)^2$ — but $3x^2$ is not $(3x)^2$. The choice $-48$ drops the parentheses and treats the square as $-4^2 = -16$. The choice $-24$ reads the exponent as a doubling, $3 \\cdot (-4) \\cdot 2$.',
    },
    {
      q: 'Evaluate $5x^2$ when $x = -3$.',
      choices: ['$225$', '$45$', '$-45$', '$-30$'],
      answer: 1,
      solution:
        'Square first: $(-3)^2 = 9$. Then multiply: $5 \\cdot 9 = 45$. The answer is positive because the square wiped out the minus sign before the $5$ ever got involved. The choice $225$ computes $(5x)^2 = (-15)^2$, squaring the coefficient too. The choice $-45$ writes $-3^2 = -9$, forgetting the parentheses. The choice $-30$ replaces the square with a doubling, $5 \\cdot (-3) \\cdot 2$.',
    },
    {
      q: 'Evaluate $2x^3$ when $x = -3$.',
      choices: ['$-216$', '$54$', '$-18$', '$-54$'],
      answer: 3,
      solution:
        'Cube first: $(-3)^3 = (-3)(-3)(-3) = 9 \\cdot (-3) = -27$. Then $2 \\cdot (-27) = -54$. Three negative factors is an odd number of them, so the cube stays negative — this is where cubes part company with squares. The choice $54$ assumes the minus sign disappears the way it does in a square. The choice $-216$ computes $(2x)^3 = (-6)^3$, cubing the $2$ as well. The choice $-18$ turns the exponent into a multiplication by $3$: $2 \\cdot (-3) \\cdot 3$.',
    },
  ],
  // p7 — a product with a sum, so parentheses are required
  [
    {
      q: 'Which expression means "the product of $5$ and the sum of $y$ and $2$"?',
      choices: ['$5(y + 2)$', '$5y + 2$', '$2(y + 5)$', '$5 + 2y$'],
      answer: 0,
      solution:
        'Build it from the inside out: "the sum of $y$ and $2$" is $y + 2$, and multiplying that WHOLE sum by $5$ needs parentheses: $5(y + 2)$. Test at $y = 4$, where the sum is $6$ and five times it is $30$. The choice $5y + 2$ multiplies only the $y$, giving $22$. The choice $2(y + 5)$ swaps which number multiplies and which number is added, giving $18$. The choice $5 + 2y$ gives $13$.',
    },
    {
      q: 'Which expression means "twice the sum of $n$ and $9$"?',
      choices: ['$2n + 9$', '$9(n + 2)$', '$2(n + 9)$', '$2 + 9n$'],
      answer: 2,
      solution:
        '"The sum of $n$ and $9$" is $n + 9$, and "twice" that means the whole sum is doubled: $2(n + 9)$. Test at $n = 1$: the sum is $10$ and twice it is $20$. The choice $2n + 9$ doubles only the $n$, giving $11$ — the missing parentheses change the meaning. The choice $9(n + 2)$ trades the roles of the $2$ and the $9$, giving $27$, and $2 + 9n$ gives $11$ as well at $n = 1$, but $18$ at $n = 2$ where the key gives $22$.',
    },
    {
      q: 'Write "the product of $6$ and the sum of $z$ and $4$" as an expression, then evaluate it when $z = 2$.',
      choices: ['$16$', '$32$', '$14$', '$36$'],
      answer: 3,
      solution:
        'The expression is $6(z + 4)$ — the parentheses keep the whole sum together. At $z = 2$ the sum is $2 + 4 = 6$, and $6 \\cdot 6 = 36$. The choice $16$ comes from writing $6z + 4$ and getting $12 + 4$; that version multiplies only the $z$. The choice $32$ comes from $4(z + 6) = 4 \\cdot 8$, which swaps the multiplier with the number inside. The choice $14$ comes from $6 + 4z = 6 + 8$.',
    },
  ],
  // p8 — a fraction bar groups the whole numerator
  [
    {
      q: 'Evaluate $\\frac{x + 14}{3}$ when $x = -2$.',
      choices: ['$4$', '$\\frac{8}{3}$', '$12$', '$\\frac{16}{3}$'],
      answer: 0,
      solution:
        'The fraction bar groups everything above it, so finish the top first: $-2 + 14 = 12$. Then divide: $\\frac{12}{3} = 4$. The choice $\\frac{8}{3}$ divides only the $14$, computing $-2 + \\frac{14}{3}$ — the bar covers the $x$ too. The choice $12$ is the numerator alone, one division short. The choice $\\frac{16}{3}$ loses the minus sign on $x$ and uses $2 + 14 = 16$.',
    },
    {
      q: 'Evaluate $\\frac{x + 20}{4}$ when $x = -8$.',
      choices: ['$-3$', '$3$', '$12$', '$7$'],
      answer: 1,
      solution:
        'Top first: $-8 + 20 = 12$. Then $\\frac{12}{4} = 3$. The choice $-3$ divides only the $20$, giving $-8 + 5$; the bar sits under the entire sum, not under the $20$ by itself. The choice $12$ stops at the numerator. The choice $7$ drops the minus sign and computes $\\frac{8 + 20}{4}$.',
    },
    {
      q: 'Evaluate $\\frac{2x + 18}{6}$ when $x = -3$.',
      choices: ['$12$', '$-3$', '$2$', '$4$'],
      answer: 2,
      solution:
        'Work the whole numerator first: $2(-3) + 18 = -6 + 18 = 12$. Then divide: $\\frac{12}{6} = 2$. The choice $-3$ divides only the $18$, giving $2(-3) + 3$. The choice $12$ is the numerator by itself. The choice $4$ forgets the minus sign on $x$ and uses $2(3) + 18 = 24$.',
    },
  ],
  // p9 — equivalence must hold for EVERY value
  [
    {
      q: 'Which pair of expressions is equivalent — equal for EVERY value of $y$?',
      choices: ['$y + y + y + y$ and $4y$', '$y \\cdot y$ and $2y$', '$4(y + 1)$ and $4y + 1$', '$y + 6$ and $6y$'],
      answer: 0,
      solution:
        'Four copies of $y$ added together is exactly what $4y$ means, so $y + y + y + y = 4y$ no matter what $y$ is. Each other pair falls to a single test value. At $y = 2$, $y \\cdot y = 4$ but $2y = 4$ — they agree there, so try $y = 3$: $9$ versus $6$. ✗ At $y = 1$, $4(y + 1) = 8$ but $4y + 1 = 5$. ✗ At $y = 0$, $y + 6 = 6$ but $6y = 0$. ✗ One mismatch is all it takes.',
    },
    {
      q: 'Bruno claims that $x^2$ and $3x$ are equal for every value of $x$. Which value of $x$ proves him wrong?',
      choices: ['$x = 0$', '$x = 1$', '$x = 3$', 'No value of $x$ — the two expressions really are equivalent'],
      answer: 1,
      solution:
        'At $x = 1$: $x^2 = 1$ but $3x = 3$. Different values, so the claim is dead — one counterexample is enough. Be careful with the other two test values, because they do NOT settle anything: at $x = 0$ both sides are $0$, and at $x = 3$ both sides are $9$. Agreeing at a couple of points is not equivalence; equivalence has to hold everywhere. And since $x = 1$ breaks it, the last choice is false.',
    },
    {
      q: 'Which pair of expressions is equivalent — equal for EVERY value of $n$?',
      choices: ['$n^2$ and $n + n$', '$5n + 3$ and $8n$', '$n + n + n + n + n$ and $5n$', '$3(n + 4)$ and $3n + 4$'],
      answer: 2,
      solution:
        'Adding five copies of $n$ is the definition of $5n$, so that pair matches for every $n$. The pair $5n + 3$ and $8n$ is the trap: at $n = 1$ both give $8$, which looks convincing, but at $n = 2$ they give $13$ and $16$. ✗ The pair $n^2$ and $n + n$ agrees at $n = 0$ and $n = 2$ and fails at $n = 1$ ($1$ versus $2$). ✗ And $3(n + 4)$ and $3n + 4$ differ at $n = 0$ ($12$ versus $4$). ✗',
    },
  ],
  // p10 — two terms, both sensitive to the sign of x
  [
    {
      q: 'Evaluate $x^2 - 5x$ when $x = -3$.',
      choices: ['$24$', '$6$', '$-6$', '$-24$'],
      answer: 0,
      solution:
        'Substitute with parentheses everywhere: $(-3)^2 - 5(-3)$. The square is positive, $(-3)^2 = 9$. The second piece is $5(-3) = -15$, and subtracting $-15$ ADDS $15$. So the value is $9 + 15 = 24$. The choice $6$ comes from writing the square as $-3^2 = -9$. The choice $-6$ keeps the square right but subtracts $15$ instead of adding it. The choice $-24$ makes both slips at once.',
    },
    {
      q: 'Evaluate $x^2 + 4x$ when $x = -5$.',
      choices: ['$45$', '$-45$', '$5$', '$-5$'],
      answer: 2,
      solution:
        'With parentheses: $(-5)^2 + 4(-5) = 25 + (-20) = 5$. Here the two terms pull in opposite directions — the square is positive and the $4x$ term is negative — so the answer is small even though the pieces are not. The choice $45$ adds $20$ instead of subtracting it. The choice $-5$ writes the square as $-5^2 = -25$. The choice $-45$ makes both mistakes together.',
    },
    {
      q: 'Evaluate $x^2 - 7x$ when $x = -1$.',
      choices: ['$6$', '$-6$', '$-8$', '$8$'],
      answer: 3,
      solution:
        'Substitute with parentheses: $(-1)^2 - 7(-1)$. The square gives $1$, and $7(-1) = -7$, so subtracting it adds: $1 + 7 = 8$. The choice $6$ uses $-1^2 = -1$ for the square. The choice $-6$ has the square right but subtracts $7$ rather than adding it. The choice $-8$ gets both signs wrong.',
    },
  ],
]

const s22 = [
  // p1 — combining two like terms
  [
    {
      q: 'Simplify $6y + 7y$.',
      choices: ['$13y$', '$42y$', '$13y^2$', '$13$'],
      answer: 0,
      solution:
        'Six copies of $y$ plus seven copies of $y$ is thirteen copies: $6y + 7y = (6 + 7)y = 13y$. Check at $y = 2$: the original gives $12 + 14 = 26$, and $13y$ gives $26$. ✓ At $y = -1$ both give $-13$. ✓ The choice $42y$ multiplies the coefficients instead of adding them. The choice $13y^2$ multiplies the variable parts as well, but we are counting copies of $y$, not multiplying them. The choice $13$ loses the variable altogether.',
    },
    {
      q: 'Simplify $4m + 11m$.',
      choices: ['$44m$', '$15m^2$', '$15m$', '$15$'],
      answer: 2,
      solution:
        'Add the coefficients and keep the variable part exactly as it is: $4m + 11m = (4 + 11)m = 15m$. Check at $m = 3$: the original gives $12 + 33 = 45$, and $15 \\cdot 3 = 45$. ✓ At $m = -1$ both give $-15$. ✓ The choice $44m$ multiplies $4$ and $11$. The choice $15m^2$ invents a second factor of $m$ that addition never creates, and $15$ drops the variable.',
    },
    {
      q: 'Simplify $12p + 5p$.',
      choices: ['$60p$', '$17$', '$17p^2$', '$17p$'],
      answer: 3,
      solution:
        'Both terms count copies of $p$, so add the counts: $12p + 5p = 17p$. Check at $p = 2$: $24 + 10 = 34$, and $17 \\cdot 2 = 34$. ✓ At $p = -2$: $-24 - 10 = -34$, and $17(-2) = -34$. ✓ The choice $60p$ multiplies $12$ by $5$. The choice $17p^2$ squares the variable, which addition never does, and $17$ forgets the $p$.',
    },
  ],
  // p2 — the invisible coefficient 1
  [
    {
      q: 'Simplify $9m - m$.',
      choices: ['$8m$', '$9$', '$10m$', '$8$'],
      answer: 0,
      solution:
        'The lone $m$ is secretly $1m$, so $9m - m = 9m - 1m = 8m$. Take away ONE copy, not all of them. Check at $m = 3$: $27 - 3 = 24$, and $8 \\cdot 3 = 24$. ✓ At $m = -2$: $-18 + 2 = -16$, and $8(-2) = -16$. ✓ The choice $9$ treats the subtraction as though it cancels the variable entirely. The choice $10m$ adds instead of subtracting, and $8$ has the right count but has thrown the variable away.',
    },
    {
      q: 'Simplify $k + 5k$.',
      choices: ['$5k$', '$6k$', '$6k^2$', '$5k^2$'],
      answer: 1,
      solution:
        'That first $k$ is $1k$, so $k + 5k = 1k + 5k = 6k$. Check at $k = 2$: $2 + 10 = 12$, and $6 \\cdot 2 = 12$. ✓ At $k = -4$: $-4 - 20 = -24$, and $6(-4) = -24$. ✓ The choice $5k$ ignores the lone $k$ as though it were worth nothing — a bare variable is one copy, not zero. The choice $5k^2$ multiplies the two terms instead of adding them, and $6k^2$ adds the coefficients but multiplies the variables.',
    },
    {
      q: 'Simplify $b - 4b$.',
      choices: ['$3b$', '$-4b$', '$-3b$', '$-3$'],
      answer: 2,
      solution:
        'Read it as $1b - 4b = (1 - 4)b = -3b$. One copy minus four copies leaves you three copies short, so the coefficient is negative. Check at $b = 2$: $2 - 8 = -6$, and $-3 \\cdot 2 = -6$. ✓ At $b = -3$: $-3 + 12 = 9$, and $-3(-3) = 9$. ✓ The choice $3b$ subtracts in the wrong order, $4 - 1$. The choice $-4b$ ignores the leading $b$, and $-3$ has the right coefficient but no variable.',
    },
  ],
  // p3 — two teams: variable terms and constants
  [
    {
      q: 'Simplify $5x + 2 + 3x + 6$.',
      choices: ['$16x$', '$8x + 8$', '$8x + 4$', '$10x + 6$'],
      answer: 1,
      solution:
        'Sort into teams. The $x$-team: $5x + 3x = 8x$. The constant team: $2 + 6 = 8$. The answer is $8x + 8$, and it cannot shrink further because $8x$ and $8$ are unlike. Check at $x = 2$: the original gives $10 + 2 + 6 + 6 = 24$, and $8(2) + 8 = 24$. ✓ At $x = -1$: $-5 + 2 - 3 + 6 = 0$, and $-8 + 8 = 0$. ✓ The choice $16x$ merges every number into the $x$-team. The choice $8x + 4$ subtracts the constants instead of adding them. The choice $10x + 6$ sweeps the $2$ into the $x$-team, turning $5x + 2 + 3x$ into $10x$.',
    },
    {
      q: 'Simplify $7n - 4 + 2n + 9$.',
      choices: ['$14n$', '$9n - 5$', '$9n + 5$', '$5n + 9$'],
      answer: 2,
      solution:
        'Keep each sign glued to its own term. The $n$-team: $7n + 2n = 9n$. The constants: $-4 + 9 = 5$. So the answer is $9n + 5$. Check at $n = 2$: the original gives $14 - 4 + 4 + 9 = 23$, and $9(2) + 5 = 23$. ✓ At $n = -1$: $-7 - 4 - 2 + 9 = -4$, and $-9 + 5 = -4$. ✓ The choice $14n$ pours all four numbers into one term. The choice $9n - 5$ computes the constants as $4 - 9$, reversing the subtraction. The choice $5n + 9$ folds the $-4$ into the $n$-team, turning $7n - 4$ into $3n$ first.',
    },
    {
      q: 'Simplify $10c - 6 - 3c + 2$.',
      choices: ['$3c$', '$7c + 4$', '$7c - 8$', '$7c - 4$'],
      answer: 3,
      solution:
        'The $c$-team: $10c - 3c = 7c$. The constants: $-6 + 2 = -4$. Answer: $7c - 4$. Check at $c = 2$: the original gives $20 - 6 - 6 + 2 = 10$, and $7(2) - 4 = 10$. ✓ At $c = -1$: $-10 - 6 + 3 + 2 = -11$, and $-7 - 4 = -11$. ✓ The choice $3c$ merges every number into one $c$-term. The choice $7c + 4$ gets the sign of the constant team backwards, and $7c - 8$ computes $-6 - 2$, giving the $+2$ the wrong sign.',
    },
  ],
  // p4 — a number times a term
  [
    {
      q: 'Simplify $4 \\cdot 6x$.',
      choices: ['$24x$', '$10x$', '$46x$', '$24x^2$'],
      answer: 0,
      solution:
        '$4 \\cdot 6x$ is three factors in a row: $4 \\cdot 6 \\cdot x$. Multiply the numbers first and the variable rides along: $24x$. Check at $x = 3$: the original gives $4 \\cdot 18 = 72$, and $24 \\cdot 3 = 72$. ✓ At $x = -2$: $4 \\cdot (-12) = -48$, and $24(-2) = -48$. ✓ The choice $10x$ adds $4$ and $6$; this is a product, not a sum. The choice $46x$ writes the digits side by side, and $24x^2$ invents a second factor of $x$ where only one exists.',
    },
    {
      q: 'Simplify $7 \\cdot 2w$.',
      choices: ['$9w$', '$14w$', '$14w^2$', '$72w$'],
      answer: 1,
      solution:
        'Regroup the three factors: $(7 \\cdot 2) \\cdot w = 14w$. Check at $w = 5$: the original gives $7 \\cdot 10 = 70$, and $14 \\cdot 5 = 70$. ✓ At $w = -1$: $7 \\cdot (-2) = -14$, and $14(-1) = -14$. ✓ The choice $9w$ adds the coefficients. The choice $72w$ jams the digits together, and $14w^2$ squares a variable that appears only once.',
    },
    {
      q: 'Simplify $8 \\cdot 9z$.',
      choices: ['$17z$', '$72z^2$', '$89z$', '$72z$'],
      answer: 3,
      solution:
        'Multiply the two numbers and keep the single $z$: $8 \\cdot 9z = 72z$. Check at $z = 2$: the original gives $8 \\cdot 18 = 144$, and $72 \\cdot 2 = 144$. ✓ At $z = -1$: $8 \\cdot (-9) = -72$, and $72(-1) = -72$. ✓ The choice $17z$ adds $8$ and $9$. The choice $89z$ writes the digits side by side, and $72z^2$ squares the variable — there is only one $z$ among the factors.',
    },
  ],
  // p5 — a stranded constant between like terms
  [
    {
      q: 'Simplify $6y + 5 + 2y$.',
      choices: ['$8y + 5$', '$13y$', '$8y$', '$6y + 7$'],
      answer: 0,
      solution:
        'The two $y$-terms combine even though a constant sits between them: $6y + 2y = 8y$. The $5$ has no partner, so it rides along: $8y + 5$. Check at $y = 2$: the original gives $12 + 5 + 4 = 21$, and $8(2) + 5 = 21$. ✓ At $y = -1$: $-6 + 5 - 2 = -3$, and $-8 + 5 = -3$. ✓ The choice $13y$ drags the $5$ into the $y$-team. The choice $8y$ simply loses the $5$, and $6y + 7$ adds $5 + 2$ as if the $2y$ were a plain $2$.',
    },
    {
      q: 'Simplify $9 + 4t + 6t$.',
      choices: ['$19t$', '$10t + 9$', '$10t$', '$24t$'],
      answer: 1,
      solution:
        'Only the last two terms are alike: $4t + 6t = 10t$. The $9$ stays as it is, giving $10t + 9$. Check at $t = 2$: the original gives $9 + 8 + 12 = 29$, and $10(2) + 9 = 29$. ✓ At $t = -2$: $9 - 8 - 12 = -11$, and $-20 + 9 = -11$. ✓ The choice $19t$ adds the $9$ into the $t$-team. The choice $10t$ drops the $9$, and $24t$ multiplies $4$ and $6$ instead of adding them.',
    },
    {
      q: 'One bag holds $5g$ grams of rice, a second holds $8$ grams, and a third holds $2g$ grams. Which expression gives the total mass?',
      choices: ['$15g$', '$7g$', '$7g + 8$', '$10g^2 + 8$'],
      answer: 2,
      solution:
        'Add the three masses: $5g + 8 + 2g$. The $g$-terms combine to $5g + 2g = 7g$, and the $8$ has no partner, so the total is $7g + 8$ grams. Check at $g = 3$: the bags hold $15$, $8$, and $6$ grams, totalling $29$, and $7(3) + 8 = 29$. ✓ At $g = 1$: $5 + 8 + 2 = 15$, and $7 + 8 = 15$. ✓ The choice $15g$ pulls the $8$ into the $g$-team. The choice $7g$ loses the second bag entirely, and $10g^2 + 8$ multiplies $5g$ by $2g$ instead of adding them.',
    },
  ],
  // p6 — two different variables, two separate teams
  [
    {
      q: 'Simplify $8p + 2q - 3p + 5q$.',
      choices: ['$12pq$', '$5p + 7q$', '$11p + 7q$', '$5p + 3q$'],
      answer: 1,
      solution:
        'Two variables means two teams that never mix. The $p$-team: $8p - 3p = 5p$. The $q$-team: $2q + 5q = 7q$. Answer: $5p + 7q$. Check at $p = 2$, $q = 3$: the original gives $16 + 6 - 6 + 15 = 31$, and $5(2) + 7(3) = 31$. ✓ At $p = -1$, $q = 2$: $-8 + 4 + 3 + 10 = 9$, and $-5 + 14 = 9$. ✓ The choice $12pq$ mashes all four terms into one, which no rule allows. The choice $11p + 7q$ adds the $3p$ instead of subtracting it, and $5p + 3q$ subtracts in the $q$-team, $5q - 2q$, when both $q$-terms are positive.',
    },
    {
      q: 'Simplify $6m - 4n - m + 9n$.',
      choices: ['$10mn$', '$7m + 5n$', '$5m + 5n$', '$5m - 5n$'],
      answer: 2,
      solution:
        'The $m$-team: $6m - m = 6m - 1m = 5m$, remembering the invisible $1$. The $n$-team: $-4n + 9n = 5n$. Answer: $5m + 5n$. Check at $m = 2$, $n = 3$: the original gives $12 - 12 - 2 + 27 = 25$, and $5(2) + 5(3) = 25$. ✓ At $m = 1$, $n = -2$: $6 + 8 - 1 - 18 = -5$, and $5 - 10 = -5$. ✓ The choice $10mn$ merges unlike terms into a single one. The choice $7m + 5n$ adds the lone $m$ rather than subtracting it, and $5m - 5n$ computes the $n$-team as $4n - 9n$, flipping which one is negative.',
    },
    {
      q: 'Simplify $4x + 7y - 4x + 2y$.',
      choices: ['$9xy$', '$8x + 9y$', '$5y$', '$9y$'],
      answer: 3,
      solution:
        'The $x$-team wipes itself out: $4x - 4x = 0$. The $y$-team: $7y + 2y = 9y$. So the whole expression is just $9y$ — a variable can vanish completely. Check at $x = 3$, $y = 2$: the original gives $12 + 14 - 12 + 4 = 18$, and $9(2) = 18$. ✓ At $x = -1$, $y = 5$: $-4 + 35 + 4 + 10 = 45$, and $9(5) = 45$. ✓ The choice $8x + 9y$ adds the second $4x$ instead of subtracting it. The choice $9xy$ merges the two teams, and $5y$ computes the $y$-team as $7y - 2y$.',
    },
  ],
  // p7 — recognising like terms
  [
    {
      q: 'Which of these pairs consists of like terms?',
      choices: ['$6n$ and $-n$', '$6n$ and $6n^2$', '$6n$ and $6m$', '$6$ and $6n$'],
      answer: 0,
      solution:
        'Like terms must share the SAME variable part. Both $6n$ and $-n$ are copies of $n$ (the second is $-1n$), so they combine: $6n + (-n) = 5n$. The pair $6n$ and $6n^2$ has matching coefficients but different powers, so they stay apart. The pair $6n$ and $6m$ uses two different letters. And $6$ is a plain number with no variable at all, so it can never join $6n$.',
    },
    {
      q: 'In which pair are the two terms like terms?',
      choices: ['$5y^2$ and $5y$', '$-3y^2$ and $8y^2$', '$5y^2$ and $5x^2$', '$y^2$ and $2$'],
      answer: 1,
      solution:
        'Both $-3y^2$ and $8y^2$ carry the variable part $y^2$, so they combine into $5y^2$. The pair $5y^2$ and $5y$ differs in the exponent — $y^2$ and $y$ are different kinds of term, however alike the coefficients look. The pair $5y^2$ and $5x^2$ uses different letters, and $y^2$ and $2$ pairs a variable term with a plain number.',
    },
    {
      q: 'Which expression can NOT be rewritten as a single term?',
      choices: ['$2a + 9a$', '$4b - b$', '$3 \\cdot 5c$', '$7d + 7$'],
      answer: 3,
      solution:
        '$7d + 7$ is stuck: $7d$ counts copies of $d$ while $7$ is a plain number, so there is nothing to combine and the expression is already as simple as it gets. Each of the others collapses. $2a + 9a = 11a$ adds like terms. $4b - b = 4b - 1b = 3b$ uses the invisible $1$. And $3 \\cdot 5c = 15c$ is a product of three factors, so the numbers multiply together.',
    },
  ],
  // p8 — every sign glued to its own term
  [
    {
      q: 'Simplify $12y - 5 - 3y - 4$.',
      choices: ['$9y - 9$', '$9y - 1$', '$15y - 9$', '$9y + 9$'],
      answer: 0,
      solution:
        'Each minus sign belongs to the term right after it. The $y$-team: $12y - 3y = 9y$. The constants: $-5 - 4 = -9$. Answer: $9y - 9$. Check at $y = 2$: the original gives $24 - 5 - 6 - 4 = 9$, and $9(2) - 9 = 9$. ✓ At $y = -1$: $-12 - 5 + 3 - 4 = -18$, and $-9 - 9 = -18$. ✓ The choice $9y - 1$ computes the constants as $-5 + 4$. The choice $15y - 9$ adds the $3y$ instead of subtracting it, and $9y + 9$ gets the sign of the whole constant team backwards.',
    },
    {
      q: 'Simplify $8k - 7 - 2k - 6$.',
      choices: ['$6k - 1$', '$10k - 13$', '$6k - 13$', '$6k + 13$'],
      answer: 2,
      solution:
        'The $k$-team: $8k - 2k = 6k$. The constants: $-7 - 6 = -13$. Answer: $6k - 13$. Check at $k = 4$: the original gives $32 - 7 - 8 - 6 = 11$, and $6(4) - 13 = 11$. ✓ At $k = -1$: $-8 - 7 + 2 - 6 = -19$, and $-6 - 13 = -19$. ✓ The choice $6k - 1$ computes $-7 + 6$, giving the last term the wrong sign. The choice $10k - 13$ adds the $2k$, and $6k + 13$ flips the sign of the constant team.',
    },
    {
      q: 'Simplify $15 - 4z - 9 - z$.',
      choices: ['$6 - 3z$', '$24 - 5z$', '$6 - 4z$', '$6 - 5z$'],
      answer: 3,
      solution:
        'The constants: $15 - 9 = 6$. The $z$-team: $-4z - z = -4z - 1z = -5z$. Answer: $6 - 5z$. Check at $z = 2$: the original gives $15 - 8 - 9 - 2 = -4$, and $6 - 10 = -4$. ✓ At $z = -1$: $15 + 4 - 9 + 1 = 11$, and $6 + 5 = 11$. ✓ The choice $6 - 4z$ ignores the lone $z$ at the end. The choice $6 - 3z$ treats that lone $z$ as positive, computing $-4z + z$, and $24 - 5z$ adds the $9$ instead of subtracting it.',
    },
  ],
  // p9 — perimeter as a sum of side lengths
  [
    {
      q: 'A rectangle has length $3x + 2$ and width $x$. Which expression gives its perimeter?',
      choices: ['$4x + 2$', '$8x + 4$', '$8x + 2$', '$6x + 4$'],
      answer: 1,
      solution:
        'Walk around the rectangle and add all four sides: $(3x + 2) + (3x + 2) + x + x$. The $x$-team: $3x + 3x + x + x = 8x$. The constants: $2 + 2 = 4$. Perimeter: $8x + 4$. Check at $x = 1$: the sides are $5, 5, 1, 1$, which total $12$, and $8(1) + 4 = 12$. ✓ At $x = 3$: sides $11, 11, 3, 3$ total $28$, and $24 + 4 = 28$. ✓ The choice $4x + 2$ is one length plus one width — only halfway around. The choice $8x + 2$ counts the second length but forgets its $+2$, and $6x + 4$ counts the two lengths and forgets the widths.',
    },
    {
      q: 'A triangle has sides of length $x$, $x + 4$, and $2x + 1$. Which expression gives its perimeter?',
      choices: ['$3x + 5$', '$4x + 4$', '$4x + 5$', '$8x + 10$'],
      answer: 2,
      solution:
        'A perimeter is the sum of the sides: $x + (x + 4) + (2x + 1)$. The $x$-team: $x + x + 2x = 4x$. The constants: $4 + 1 = 5$. Perimeter: $4x + 5$. Check at $x = 2$: the sides are $2, 6, 5$, totalling $13$, and $4(2) + 5 = 13$. ✓ At $x = 5$: sides $5, 9, 11$ total $25$, and $20 + 5 = 25$. ✓ The choice $3x + 5$ loses one of the $x$ terms. The choice $4x + 4$ drops the $+1$ from the third side, and $8x + 10$ doubles everything, as though a triangle needed each side counted twice — that is a rectangle habit.',
    },
    {
      q: 'A square has sides of length $2y + 3$. Which expression gives its perimeter?',
      choices: ['$2y + 12$', '$8y + 3$', '$4y + 6$', '$8y + 12$'],
      answer: 3,
      solution:
        'All four sides are the same, so add four copies: $(2y + 3) + (2y + 3) + (2y + 3) + (2y + 3)$. The $y$-team: $2y + 2y + 2y + 2y = 8y$. The constants: $3 + 3 + 3 + 3 = 12$. Perimeter: $8y + 12$. Check at $y = 2$: each side is $7$, so the perimeter is $28$, and $8(2) + 12 = 28$. ✓ At $y = 0$: each side is $3$, perimeter $12$, and $12$. ✓ The choice $8y + 3$ adds only the $y$-parts four times. The choice $2y + 12$ adds only the constants four times, and $4y + 6$ counts just two sides.',
    },
  ],
  // p10 — a long run of like terms
  [
    {
      q: 'Simplify $y + 2y + 3y + \\cdots + 12y$.',
      choices: ['$78y$', '$144y$', '$12y$', '$78y^2$'],
      answer: 0,
      solution:
        'Every term is a pile of copies of $y$, so add all the coefficients: $1 + 2 + 3 + \\cdots + 12$. Pair the ends: $1 + 12 = 13$, $2 + 11 = 13$, and so on for six pairs, giving $6 \\cdot 13 = 78$. So the sum is $78y$. The choice $144y$ is $12^2$, which counts every pairing rather than every term. The choice $12y$ reports only the last term, and $78y^2$ squares a variable that was only ever added.',
    },
    {
      q: 'Simplify $2n + 4n + 6n + \\cdots + 20n$.',
      choices: ['$55n$', '$110n$', '$20n$', '$110n^2$'],
      answer: 1,
      solution:
        'The coefficients are the even numbers from $2$ to $20$, which are ten terms. Pair the ends: $2 + 20 = 22$, $4 + 18 = 22$, and so on for five pairs, giving $5 \\cdot 22 = 110$. So the answer is $110n$. Another route: every coefficient is twice a whole number from $1$ to $10$, and $1 + 2 + \\cdots + 10 = 55$, so the total is $2 \\cdot 55 = 110$. The choice $55n$ stops at that halfway total and forgets to double. The choice $20n$ is the last term alone, and $110n^2$ turns addition into multiplication.',
    },
    {
      q: 'When $x + 2x + 3x + \\cdots + 20x$ is written as a single term, what is its coefficient?',
      choices: ['$400$', '$20$', '$190$', '$210$'],
      answer: 3,
      solution:
        'All twenty terms are copies of $x$, so the coefficient is $1 + 2 + 3 + \\cdots + 20$. Pair the ends: $1 + 20 = 21$, $2 + 19 = 21$, and so on for ten pairs, so the sum is $10 \\cdot 21 = 210$. The whole expression simplifies to $210x$. The choice $400$ is $20^2$. The choice $190$ stops the sum at $19$, forgetting the last term, and $20$ is just the number of terms.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 2,
  sections: {
    '2.1': s21,
    '2.2': s22,
  },
}
