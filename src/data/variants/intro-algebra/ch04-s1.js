// Introduction to Algebra chapter 4 — variations for sections 4.1, 4.2 and 4.3.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric answer was re-derived twice and then checked by machine at
//    the stated values.
//  - Every algebraic answer was verified numerically against the original
//    expression at several (x, y, ...) pairs, including mixed-sign pairs and
//    values other than 0, 1, and 2.
//  - Every factoring answer was expanded back out, term by term, and compared
//    with the expression it came from.
//  - Every distractor is the output of one named, specific mistake, and every
//    named mistake was run on the actual numbers to confirm it does NOT
//    coincide with the key.
//  - No two choices in an item share a value. An incompletely factored form is
//    algebraically EQUAL to the key, so it never appears as a distractor;
//    where a "wrong GCF" choice is used it expands to something different.
//  - Correct answers are spread: for each base problem the three variations
//    take the three slots the base problem does not use.

const s41 = [
  // p1 — a bare product of two variables
  [
    {
      q: 'Evaluate $mn$ when $m = 4$ and $n = 7$.',
      choices: ['$28$', '$11$', '$47$', '$-3$'],
      answer: 0,
      solution:
        'Two letters written side by side means multiply: $mn = (4)(7) = 28$. The choice $11$ adds the values instead of multiplying them. The choice $47$ just writes the two digits next to each other, which is not what $mn$ means. The choice $-3$ subtracts, $4 - 7$. Check: four groups of seven really is $28$. ✓',
    },
    {
      q: 'Evaluate $pq$ when $p = 6$ and $q = 9$.',
      choices: ['$15$', '$54$', '$69$', '$-3$'],
      answer: 1,
      solution:
        'Side-by-side letters multiply: $pq = (6)(9) = 54$. The choice $15$ comes from adding $6 + 9$. The choice $69$ glues the digits together instead of multiplying. The choice $-3$ subtracts, $6 - 9$. Check by skip-counting: six nines are $9, 18, 27, 36, 45, 54$. ✓',
    },
    {
      q: 'Evaluate $ab$ when $a = 8$ and $b = 5$.',
      choices: ['$13$', '$85$', '$3$', '$40$'],
      answer: 3,
      solution:
        'The product is $ab = (8)(5) = 40$. The choice $13$ adds instead of multiplying. The choice $85$ writes the digits side by side. The choice $3$ subtracts, $8 - 5$. Check: eight fives are $40$. ✓',
    },
  ],
  // p2 — a coefficient attached to only one of the two variables
  [
    {
      q: 'Evaluate $a + 3b$ when $a = 5$ and $b = 4$.',
      choices: ['$27$', '$17$', '$12$', '$60$'],
      answer: 1,
      solution:
        'The $3$ multiplies only $b$, so do that first: $3b = 3(4) = 12$. Then add $a$: $5 + 12 = 17$. The choice $27$ comes from reading the expression as $3(a + b) = 3(9)$ — but there are no parentheses, so the $3$ never reaches the $5$. The choice $12$ adds the $3$ instead of multiplying by it: $5 + 3 + 4$. The choice $60$ multiplies everything, $5 \\cdot 3 \\cdot 4$.',
    },
    {
      q: 'Evaluate $4m + n$ when $m = 3$ and $n = 7$.',
      choices: ['$40$', '$14$', '$19$', '$84$'],
      answer: 2,
      solution:
        'Multiplication comes before addition: $4m = 4(3) = 12$, then $12 + 7 = 19$. The choice $40$ reads the expression as $4(m + n) = 4(10)$, which would need parentheses. The choice $14$ adds the $4$ rather than multiplying: $3 + 4 + 7$. The choice $84$ multiplies all three numbers, $4 \\cdot 3 \\cdot 7$.',
    },
    {
      q: 'Evaluate $2p + q$ when $p = 9$ and $q = 4$.',
      choices: ['$26$', '$15$', '$72$', '$22$'],
      answer: 3,
      solution:
        'First the product: $2p = 2(9) = 18$. Then add $q$: $18 + 4 = 22$. The choice $26$ doubles the whole sum, $2(9 + 4)$, which is the expression $2(p + q)$ — a different one. The choice $15$ adds the $2$ instead of multiplying: $9 + 2 + 4$. The choice $72$ multiplies everything, $2 \\cdot 9 \\cdot 4$.',
    },
  ],
  // p3 — a subtraction that lands below zero
  [
    {
      q: 'Evaluate $m - n$ when $m = 5$ and $n = 14$.',
      choices: ['$-9$', '$9$', '$19$', '$-19$'],
      answer: 0,
      solution:
        'Substitute in order: $5 - 14$. Since $14$ is bigger, the result is negative: $5 - 14 = -9$. The choice $9$ subtracts backwards, computing $n - m$; subtraction is not commutative, so the order matters. The choice $19$ adds instead of subtracting. The choice $-19$ adds and then attaches a minus sign for good measure.',
    },
    {
      q: 'Evaluate $p - q$ when $p = 8$ and $q = 20$.',
      choices: ['$12$', '$28$', '$-12$', '$-28$'],
      answer: 2,
      solution:
        'Keep $p$ first: $8 - 20 = -12$. Think of it as owing $20$ when you have only $8$. The choice $12$ works out $q - p$, reversing the order. The choice $28$ adds the two numbers. The choice $-28$ adds them and then flips the sign.',
    },
    {
      q: 'Evaluate $c - d$ when $c = 6$ and $d = 17$.',
      choices: ['$11$', '$23$', '$-23$', '$-11$'],
      answer: 3,
      solution:
        'Substitute in the given order: $6 - 17 = -11$. The choice $11$ computes $d - c$ instead. The choice $23$ adds rather than subtracts, and $-23$ adds and then negates. On a number line, starting at $6$ and walking $17$ steps left puts you at $-11$. ✓',
    },
  ],
  // p4 — coefficient on one variable, a NEGATIVE value on the other
  [
    {
      q: 'Evaluate $4a + b$ when $a = 3$ and $b = -5$.',
      choices: ['$7$', '$17$', '$-8$', '$2$'],
      answer: 0,
      solution:
        'Multiply first: $4a = 4(3) = 12$. Then add $b$ with its sign: $12 + (-5) = 7$. The choice $17$ drops the minus sign and adds $5$. The choice $-8$ reads the expression as $4(a + b) = 4(-2)$, which is not what is written. The choice $2$ adds the $4$ instead of multiplying: $3 + 4 - 5$.',
    },
    {
      q: 'Evaluate $6x + y$ when $x = 4$ and $y = -7$.',
      choices: ['$31$', '$17$', '$-18$', '$3$'],
      answer: 1,
      solution:
        'Do the multiplication first: $6x = 6(4) = 24$. Then $24 + (-7) = 17$. The choice $31$ ignores the minus sign on $y$. The choice $-18$ multiplies the whole sum, $6(4 - 7)$, as if parentheses were there. The choice $3$ adds the $6$ instead of multiplying: $4 + 6 - 7$.',
    },
    {
      q: 'Evaluate $3s + t$ when $s = 5$ and $t = -9$.',
      choices: ['$24$', '$-12$', '$6$', '$-1$'],
      answer: 2,
      solution:
        'First $3s = 3(5) = 15$, then $15 + (-9) = 6$. Wrapping the value in parentheses, $3(5) + (-9)$, is what keeps the minus sign attached. The choice $24$ loses that minus sign. The choice $-12$ computes $3(5 - 9)$, doubling down on parentheses that are not in the expression. The choice $-1$ adds the $3$ rather than multiplying: $5 + 3 - 9$.',
    },
  ],
  // p5 — sum of two squares, one variable negative
  [
    {
      q: 'Evaluate $a^2 + b^2$ when $a = 5$ and $b = -2$.',
      choices: ['$21$', '$29$', '$9$', '$49$'],
      answer: 1,
      solution:
        'Square each letter on its own: $5^2 = 25$ and $(-2)^2 = (-2)(-2) = 4$. Then $25 + 4 = 29$. The choice $21$ treats $(-2)^2$ as $-4$ — but a negative times a negative is positive. The choice $9$ squares the SUM, $(5 + (-2))^2 = 3^2$, which is a different expression. The choice $49$ drops the minus sign first and then squares the sum, $(5 + 2)^2$.',
    },
    {
      q: 'Evaluate $m^2 + n^2$ when $m = 6$ and $n = -3$.',
      choices: ['$27$', '$9$', '$45$', '$81$'],
      answer: 2,
      solution:
        'Square separately: $6^2 = 36$ and $(-3)^2 = 9$. Adding gives $36 + 9 = 45$. The choice $27$ comes from writing $(-3)^2 = -9$, which loses the rule that squaring a negative gives a positive. The choice $9$ squares the sum instead, $(6 - 3)^2$. The choice $81$ ignores the minus sign and then squares the sum, $(6 + 3)^2$.',
    },
    {
      q: 'Evaluate $p^2 + q^2$ when $p = 2$ and $q = -7$.',
      choices: ['$-45$', '$25$', '$81$', '$53$'],
      answer: 3,
      solution:
        'Each square stands alone: $2^2 = 4$ and $(-7)^2 = 49$. So the value is $4 + 49 = 53$. The choice $-45$ uses $(-7)^2 = -49$, which is wrong — the exponent applies to the whole $-7$, parentheses and all. The choice $25$ squares the sum, $(2 - 7)^2$. The choice $81$ throws away the minus sign and then squares the sum, $(2 + 7)^2$.',
    },
  ],
  // p6 — coefficient times two variables, minus a negative
  [
    {
      q: 'Evaluate $3ab - c$ when $a = 4$, $b = -1$, and $c = -6$.',
      choices: ['$-6$', '$-18$', '$18$', '$60$'],
      answer: 0,
      solution:
        'The product first: $3ab = 3(4)(-1) = -12$. Then subtract $c$, which is itself negative: $-12 - (-6) = -12 + 6 = -6$. The choice $-18$ forgets that subtracting a negative is adding, and computes $-12 - 6$. The choice $18$ drops the minus sign on $b$, getting $12$, and then adds $6$. The choice $60$ subtracts inside, reading the expression as $3a(b - c) = 12(5)$.',
    },
    {
      q: 'Evaluate $4mn - p$ when $m = 2$, $n = -3$, and $p = -7$.',
      choices: ['$-31$', '$31$', '$-17$', '$32$'],
      answer: 2,
      solution:
        'Work out $4mn = 4(2)(-3) = -24$ first. Then $-24 - (-7) = -24 + 7 = -17$. The choice $-31$ subtracts $7$ instead of adding it — the classic double-negative slip. The choice $31$ ignores the sign on $n$ as well, giving $24 + 7$. The choice $32$ groups the expression as $4m(n - p) = 8(4)$, which the writing does not allow.',
    },
    {
      q: 'Evaluate $2rs - t$ when $r = 5$, $s = -3$, and $t = -4$.',
      choices: ['$-34$', '$34$', '$10$', '$-26$'],
      answer: 3,
      solution:
        'First the product: $2rs = 2(5)(-3) = -30$. Then $-30 - (-4) = -30 + 4 = -26$. The choice $-34$ treats $-(-4)$ as $-4$. The choice $34$ makes both sign mistakes at once, $30 + 4$. The choice $10$ regroups as $2r(s - t) = 10(-3 + 4)$, but the expression subtracts $t$ from the whole product, not from $s$.',
    },
  ],
  // p7 — a sum times a difference
  [
    {
      q: 'Evaluate $(a + b)(a - b)$ when $a = 7$ and $b = 3$.',
      choices: ['$40$', '$58$', '$100$', '$14$'],
      answer: 0,
      solution:
        'Finish each set of parentheses before multiplying: $a + b = 10$ and $a - b = 4$, so the value is $10 \\times 4 = 40$. The choice $58$ adds the squares, $49 + 9$, which is the different expression $a^2 + b^2$. The choice $100$ squares the first factor, $(a + b)^2$, forgetting that the second factor is a difference. The choice $14$ adds the two parentheses, $10 + 4$, instead of multiplying them.',
    },
    {
      q: 'Evaluate $(m + n)(m - n)$ when $m = 9$ and $n = 4$.',
      choices: ['$97$', '$65$', '$169$', '$18$'],
      answer: 1,
      solution:
        'Inside first: $m + n = 13$ and $m - n = 5$. Multiply: $13 \\times 5 = 65$. The choice $97$ is $81 + 16$, the sum of the squares — a different expression. The choice $169$ is $13^2$, which uses the first factor twice. The choice $18$ adds $13 + 5$ instead of multiplying.',
    },
    {
      q: 'Evaluate $(p + q)(p - q)$ when $p = 8$ and $q = 5$.',
      choices: ['$89$', '$169$', '$16$', '$39$'],
      answer: 3,
      solution:
        'Each pair of parentheses is finished first: $p + q = 13$ and $p - q = 3$, so the product is $13 \\times 3 = 39$. The choice $89$ adds the squares, $64 + 25$. The choice $169$ is $13^2$, using the sum twice. The choice $16$ adds $13 + 3$ rather than multiplying.',
    },
  ],
  // p8 — a product of two fractions
  [
    {
      q: 'Evaluate $uv$ when $u = \\frac{3}{4}$ and $v = \\frac{2}{9}$.',
      choices: ['$\\frac{1}{6}$', '$\\frac{35}{36}$', '$\\frac{5}{13}$', '$\\frac{27}{8}$'],
      answer: 0,
      solution:
        'Side-by-side letters multiply, and fractions multiply straight across: $uv = \\frac{3}{4} \\cdot \\frac{2}{9} = \\frac{6}{36} = \\frac{1}{6}$. (The $3$ cancels into the $9$ and the $2$ into the $4$, leaving $\\frac{1}{2} \\cdot \\frac{1}{3}$.) The choice $\\frac{35}{36}$ adds the two fractions. The choice $\\frac{5}{13}$ adds tops and bottoms separately, which is never a legal move. The choice $\\frac{27}{8}$ flips the second fraction, which is what you do when DIVIDING.',
    },
    {
      q: 'Evaluate $gh$ when $g = \\frac{2}{5}$ and $h = \\frac{5}{6}$.',
      choices: ['$\\frac{37}{30}$', '$\\frac{1}{3}$', '$\\frac{7}{11}$', '$\\frac{12}{25}$'],
      answer: 1,
      solution:
        'Multiply across: $gh = \\frac{2}{5} \\cdot \\frac{5}{6} = \\frac{10}{30} = \\frac{1}{3}$. The two $5$s cancel and $\\frac{2}{6}$ reduces to $\\frac{1}{3}$. The choice $\\frac{37}{30}$ is the SUM, $\\frac{12}{30} + \\frac{25}{30}$. The choice $\\frac{7}{11}$ adds tops and bottoms separately. The choice $\\frac{12}{25}$ flips the second fraction and multiplies, which computes a quotient instead of a product.',
    },
    {
      q: 'Evaluate $st$ when $s = \\frac{3}{8}$ and $t = \\frac{4}{5}$.',
      choices: ['$\\frac{47}{40}$', '$\\frac{7}{13}$', '$\\frac{3}{10}$', '$\\frac{15}{32}$'],
      answer: 2,
      solution:
        'Tops together and bottoms together: $st = \\frac{3}{8} \\cdot \\frac{4}{5} = \\frac{12}{40} = \\frac{3}{10}$, since $4$ divides both $12$ and $40$. The choice $\\frac{47}{40}$ adds the fractions, $\\frac{15}{40} + \\frac{32}{40}$. The choice $\\frac{7}{13}$ adds tops and bottoms separately. The choice $\\frac{15}{32}$ flips the second fraction first, turning the product into a quotient.',
    },
  ],
  // p9 — words into an expression, where parentheses decide the meaning
  [
    {
      q: 'Which expression means "three times the sum of $a$ and $b$, increased by $c$"?',
      choices: ['$3a + b + c$', '$3(a + b) + c$', '$3(a + b + c)$', '$3 + a + b + c$'],
      answer: 1,
      solution:
        '"The sum of $a$ and $b$" is $a + b$. "Three times the sum" triples that whole quantity, and only parentheses can say so: $3(a + b)$. Then "increased by $c$" adds $c$ at the very end: $3(a + b) + c$. The choice $3a + b + c$ triples only $a$. The choice $3(a + b + c)$ triples the $c$ as well, but the $c$ joins after the tripling. The choice $3 + a + b + c$ adds the $3$ instead of multiplying by it. Test at $a = 2$, $b = 1$, $c = 5$: the key gives $9 + 5 = 14$, while the other three give $12$, $24$, and $11$.',
    },
    {
      q: 'Which expression means "four times the difference of $m$ and $n$, increased by $p$"?',
      choices: ['$4m - n + p$', '$4(m - n + p)$', '$4(m - n) + p$', '$4(m - n) - p$'],
      answer: 2,
      solution:
        '"The difference of $m$ and $n$" is $m - n$, and "four times" it needs parentheses to keep the pair together: $4(m - n)$. Then $p$ is added on: $4(m - n) + p$. The choice $4m - n + p$ multiplies only $m$ by $4$. The choice $4(m - n + p)$ pulls $p$ inside, so it gets multiplied too. The choice $4(m - n) - p$ subtracts $p$ when the words say increase. Test at $m = 5$, $n = 2$, $p = 4$: the key gives $12 + 4 = 16$, while the others give $22$, $28$, and $8$.',
    },
    {
      q: 'Which expression means "$7$ less than four times the sum of $r$ and $s$"?',
      choices: ['$4r + s - 7$', '$4(r + s - 7)$', '$7 - 4(r + s)$', '$4(r + s) - 7$'],
      answer: 3,
      solution:
        'Build the big quantity first: four times the sum is $4(r + s)$. "$7$ less than" that quantity means start from it and take $7$ away: $4(r + s) - 7$. The choice $4r + s - 7$ quadruples only $r$. The choice $4(r + s - 7)$ subtracts the $7$ before multiplying, so it removes $28$ in total. The choice $7 - 4(r + s)$ reverses the subtraction — "$7$ less than $X$" is $X - 7$, never $7 - X$. Test at $r = 3$, $s = 2$: the key gives $20 - 7 = 13$, while the others give $7$, $-8$, and $-13$.',
    },
  ],
  // p10 — twin terms whose exponents sit on different letters
  [
    {
      q: 'Evaluate $x^2y - xy^2$ when $x = -3$ and $y = 4$.',
      choices: ['$84$', '$12$', '$-84$', '$-108$'],
      answer: 0,
      solution:
        'Handle each term on its own. $x^2y = (-3)^2(4) = 9 \\cdot 4 = 36$. Then $xy^2 = (-3)(4)^2 = (-3)(16) = -48$. Subtracting: $36 - (-48) = 36 + 48 = 84$. The choice $12$ comes from writing $(-3)^2 = -9$, so the first term becomes $-36$. The choice $-84$ subtracts in the wrong order, computing $xy^2 - x^2y$. The choice $-108$ reads $xy^2$ as $(xy)^2 = 144$ — but the exponent sits on the $y$ alone.',
    },
    {
      q: 'Evaluate $m^2n - mn^2$ when $m = 2$ and $n = -5$.',
      choices: ['$70$', '$-120$', '$-70$', '$30$'],
      answer: 2,
      solution:
        'Term by term: $m^2n = (2)^2(-5) = 4(-5) = -20$, and $mn^2 = (2)(-5)^2 = 2(25) = 50$. Then $-20 - 50 = -70$. The choice $70$ reverses the subtraction. The choice $-120$ reads $mn^2$ as $(mn)^2 = 100$; the exponent belongs to $n$ only. The choice $30$ writes $(-5)^2 = -25$, which would make the second term $-50$. Notice the twins came out with different signs — the exponents sit on different letters, so they lead separate lives.',
    },
    {
      q: 'Evaluate $p^2q - pq^2$ when $p = -4$ and $q = -1$.',
      choices: ['$12$', '$-32$', '$20$', '$-12$'],
      answer: 3,
      solution:
        'Take the terms apart. $p^2q = (-4)^2(-1) = 16(-1) = -16$. And $pq^2 = (-4)(-1)^2 = (-4)(1) = -4$. So the value is $-16 - (-4) = -16 + 4 = -12$. The choice $12$ subtracts backwards. The choice $-32$ reads $pq^2$ as $(pq)^2 = 16$. The choice $20$ uses $(-4)^2 = -16$, which flips the first term to $+16$. With both letters negative, every parenthesis earns its keep!',
    },
  ],
]

const s42 = [
  // p1 — add two like terms that share a two-letter variable part
  [
    {
      q: 'Simplify $4ab + 7ab$.',
      choices: ['$11ab$', '$11a^2b^2$', '$28ab$', '$11$'],
      answer: 0,
      solution:
        'Both terms are $ab$ terms, so only the coefficients move: $4 + 7 = 11$, giving $11ab$. Four $ab$s plus seven $ab$s is eleven $ab$s. The choice $11a^2b^2$ multiplies the variable parts, but adding never changes the letters. The choice $28ab$ multiplies the coefficients, $4 \\times 7$, instead of adding them. The choice $11$ throws the variables away. Check at $a = 2$, $b = 3$: the original is $24 + 42 = 66$, and $11(6) = 66$. ✓',
    },
    {
      q: 'Simplify $6mn + 2mn$.',
      choices: ['$8m^2n^2$', '$12mn$', '$8mn$', '$8$'],
      answer: 2,
      solution:
        'Same variable part, so add the coefficients: $6 + 2 = 8$, giving $8mn$. The choice $8m^2n^2$ multiplies the $mn$s together, which addition never does. The choice $12mn$ multiplies $6 \\times 2$. The choice $8$ loses the variables entirely. Check at $m = 3$, $n = -2$: the original is $-36 + (-12) = -48$, and $8(-6) = -48$. ✓',
    },
    {
      q: 'Simplify $9pq + 4pq$.',
      choices: ['$13p^2q^2$', '$36pq$', '$13$', '$13pq$'],
      answer: 3,
      solution:
        'The terms match letter for letter, so $9 + 4 = 13$ and the answer is $13pq$. The choice $13p^2q^2$ multiplies the variable parts. The choice $36pq$ multiplies the coefficients, $9 \\times 4$, instead of adding. The choice $13$ drops the variables. Check at $p = -1$, $q = 5$: the original is $-45 + (-20) = -65$, and $13(-5) = -65$. ✓',
    },
  ],
  // p2 — identify the like term
  [
    {
      q: 'Which term is a like term of $5x^3y$?',
      choices: ['$5xy^3$', '$-2x^3y$', '$5x^3$', '$-2x^3y^3$'],
      answer: 1,
      solution:
        'Like terms need the same letters with the same exponents; the coefficient is free to be anything. Only $-2x^3y$ has $x$ cubed and $y$ to the first power. The choice $5xy^3$ moves the cube onto $y$ — test at $x = 2$, $y = 1$: $5x^3y = 40$ but $5xy^3 = 10$, so they are different families. The choice $5x^3$ has no $y$ at all. The choice $-2x^3y^3$ has an extra pair of $y$s.',
    },
    {
      q: 'Which term is a like term of $7mn^2$?',
      choices: ['$7m^2n$', '$7mn$', '$-3mn^2$', '$-3m^2n^2$'],
      answer: 2,
      solution:
        'Match the letters and the exponents: $mn^2$ means one $m$ and two $n$s, which is exactly what $-3mn^2$ has. A different coefficient is fine. The choice $7m^2n$ puts the square on the wrong letter — at $m = 3$, $n = 2$ it gives $126$ while $7mn^2 = 84$. The choice $7mn$ is short one $n$. The choice $-3m^2n^2$ has one $m$ too many.',
    },
    {
      q: 'Which term is a like term of $-6p^2q^3$?',
      choices: ['$-6p^3q^2$', '$-6p^2q$', '$6p^2q^2$', '$10p^2q^3$'],
      answer: 3,
      solution:
        'The variable part must be exactly $p^2q^3$, and $10p^2q^3$ has it. Only the coefficient differs, and coefficients are allowed to differ. The choice $-6p^3q^2$ swaps the two exponents — at $p = 2$, $q = 1$ the first is $-24$ and the second is $-48$. The choice $-6p^2q$ is two $q$s short, and $6p^2q^2$ is one $q$ short.',
    },
  ],
  // p3 — subtract like terms into a negative coefficient
  [
    {
      q: 'Simplify $5xy - 12xy$.',
      choices: ['$-7xy$', '$7xy$', '$-7$', '$-60xy$'],
      answer: 0,
      solution:
        'The variable parts match, so subtract the coefficients: $5 - 12 = -7$, and the answer is $-7xy$. The choice $7xy$ subtracts backwards, $12 - 5$. The choice $-7$ drops the variables, but $xy$ never disappears when like terms combine. The choice $-60xy$ multiplies the coefficients instead of subtracting. Check at $x = 2$, $y = 3$: the original is $30 - 72 = -42$, and $-7(6) = -42$. ✓',
    },
    {
      q: 'Simplify $3ab - 11ab$.',
      choices: ['$8ab$', '$-8ab$', '$-8$', '$-33ab$'],
      answer: 1,
      solution:
        'Subtract in the order written: $3 - 11 = -8$, giving $-8ab$. The choice $8ab$ reverses the subtraction. The choice $-8$ leaves the $ab$ behind. The choice $-33ab$ multiplies $3 \\times 11$ rather than subtracting. Check at $a = -1$, $b = 4$: the original is $-12 - (-44) = 32$, and $-8(-4) = 32$. ✓',
    },
    {
      q: 'Simplify $7st - 16st$.',
      choices: ['$9st$', '$-9$', '$-9st$', '$-112st$'],
      answer: 2,
      solution:
        'Same variable part, so the coefficients do the work: $7 - 16 = -9$, and the answer is $-9st$. The choice $9st$ subtracts the wrong way round. The choice $-9$ discards the variables. The choice $-112st$ multiplies $7 \\times 16$. Check at $s = 3$, $t = -1$: the original is $-21 + 48 = 27$, and $-9(-3) = 27$. ✓',
    },
  ],
  // p4 — two families in one expression, with a bare -y
  [
    {
      q: 'Simplify $4a + 5b + 3a - b$.',
      choices: ['$7a + 4b$', '$7a + 6b$', '$11ab$', '$7a + 5b$'],
      answer: 0,
      solution:
        'Sort into families. The $a$ terms: $4a + 3a = 7a$. The $b$ terms: $5b - b = 4b$, because $-b$ means $-1b$ and $5 - 1 = 4$. The families stay apart: $7a + 4b$. The choice $7a + 6b$ adds the $b$ instead of subtracting it. The choice $11ab$ mashes all four coefficients together, $4 + 5 + 3 - 1$, as though every term were alike. The choice $7a + 5b$ treats $-b$ as nothing at all. Check at $a = 2$, $b = -3$: the original is $8 - 15 + 6 + 3 = 2$, and $14 - 12 = 2$. ✓',
    },
    {
      q: 'Simplify $6m + 2n + 3m - n$.',
      choices: ['$9m + 3n$', '$9m + n$', '$10mn$', '$9m + 2n$'],
      answer: 1,
      solution:
        'The $m$ terms give $6m + 3m = 9m$, and the $n$ terms give $2n - n = n$, since $2 - 1 = 1$. The answer is $9m + n$. The choice $9m + 3n$ adds the $-n$ instead of subtracting it. The choice $10mn$ adds every coefficient, $6 + 2 + 3 - 1$, ignoring that $m$ and $n$ are different letters. The choice $9m + 2n$ forgets the $-n$ entirely. Check at $m = -1$, $n = 4$: the original is $-6 + 8 - 3 - 4 = -5$, and $-9 + 4 = -5$. ✓',
    },
    {
      q: 'Simplify $8p + 7q + 2p - q$.',
      choices: ['$10p + 8q$', '$16pq$', '$10p + 7q$', '$10p + 6q$'],
      answer: 3,
      solution:
        'Group by letter: $8p + 2p = 10p$ and $7q - q = 6q$. The answer is $10p + 6q$. The choice $10p + 8q$ adds the $-q$. The choice $16pq$ adds all four coefficients, $8 + 7 + 2 - 1$, pretending everything is one family. The choice $10p + 7q$ ignores the $-q$. Check at $p = 3$, $q = -2$: the original is $24 - 14 + 6 + 2 = 18$, and $30 - 12 = 18$. ✓',
    },
  ],
  // p5 — add two parenthesized binomials
  [
    {
      q: 'Simplify $(7x + 4y) + (2x - 9y)$.',
      choices: ['$5x + 13y$', '$9x - 5y$', '$9x + 13y$', '$9x + 5y$'],
      answer: 1,
      solution:
        'A plus sign in front of parentheses changes nothing, so drop them: $7x + 4y + 2x - 9y$. Then $7x + 2x = 9x$ and $4y - 9y = -5y$, giving $9x - 5y$. The choice $5x + 13y$ treats the join as a SUBTRACTION and flips both signs of the second pair. The choice $9x + 13y$ adds the sizes of the $y$ coefficients, $4 + 9$, ignoring the minus. The choice $9x + 5y$ gets the size right but loses the sign. Check at $x = 2$, $y = -1$: the original is $(14 - 4) + (4 + 9) = 23$, and $18 + 5 = 23$. ✓',
    },
    {
      q: 'Simplify $(4m + 6n) + (5m - 9n)$.',
      choices: ['$-m + 15n$', '$9m + 15n$', '$9m - 3n$', '$9m + 3n$'],
      answer: 2,
      solution:
        'Drop the parentheses and collect: $4m + 5m = 9m$ and $6n - 9n = -3n$, so the answer is $9m - 3n$. The choice $-m + 15n$ subtracts the second pair instead of adding it. The choice $9m + 15n$ adds $6 + 9$, ignoring the minus sign. The choice $9m + 3n$ has the right size but the wrong sign — $6$ is smaller than $9$, so the $n$ total must be negative. Check at $m = 1$, $n = 2$: the original is $16 + (5 - 18) = 3$, and $9 - 6 = 3$. ✓',
    },
    {
      q: 'Simplify $(3p + 8q) + (6p - 5q)$.',
      choices: ['$-3p + 13q$', '$9p + 13q$', '$9p - 3q$', '$9p + 3q$'],
      answer: 3,
      solution:
        'Since the two groups are added, the parentheses simply vanish: $3p + 8q + 6p - 5q$. Then $3p + 6p = 9p$ and $8q - 5q = 3q$, giving $9p + 3q$. The choice $-3p + 13q$ treats the join as subtraction. The choice $9p + 13q$ adds $8 + 5$ as if both were positive. The choice $9p - 3q$ flips the sign of a total that should stay positive, since $8$ is bigger than $5$. Check at $p = -2$, $q = 3$: the original is $(-6 + 24) + (-12 - 15) = -9$, and $-18 + 9 = -9$. ✓',
    },
  ],
  // p6 — subtract a parenthesized binomial
  [
    {
      q: 'Simplify $(9a + 4b) - (3a + 7b)$.',
      choices: ['$6a - 3b$', '$6a + 11b$', '$12a + 11b$', '$6a + 3b$'],
      answer: 0,
      solution:
        'The minus sign belongs to BOTH terms inside: $-(3a + 7b) = -3a - 7b$. So the expression is $9a + 4b - 3a - 7b$, which gives $6a$ and $4b - 7b = -3b$: the answer is $6a - 3b$. The choice $6a + 11b$ flips only the first term — the classic trap. The choice $12a + 11b$ adds both groups instead of subtracting. The choice $6a + 3b$ subtracts the $b$ coefficients backwards, $7 - 4$. Check at $a = 1$, $b = -2$: the original is $(9 - 8) - (3 - 14) = 1 + 11 = 12$, and $6 + 6 = 12$. ✓',
    },
    {
      q: 'Simplify $(8m + 2n) - (5m + 6n)$.',
      choices: ['$3m + 8n$', '$13m + 8n$', '$3m - 4n$', '$3m + 4n$'],
      answer: 2,
      solution:
        'Distribute the minus like a $-1$: $-(5m + 6n) = -5m - 6n$. Now $8m - 5m = 3m$ and $2n - 6n = -4n$, so the answer is $3m - 4n$. The choice $3m + 8n$ leaves the $6n$ unflipped. The choice $13m + 8n$ adds the two groups. The choice $3m + 4n$ computes $6 - 2$ instead of $2 - 6$. Check at $m = 2$, $n = 3$: the original is $22 - 28 = -6$, and $6 - 12 = -6$. ✓',
    },
    {
      q: 'Simplify $(10p + 5q) - (4p + 9q)$.',
      choices: ['$6p + 14q$', '$14p + 14q$', '$6p + 4q$', '$6p - 4q$'],
      answer: 3,
      solution:
        'Flip every sign inside the second parentheses: $-(4p + 9q) = -4p - 9q$. Then $10p - 4p = 6p$ and $5q - 9q = -4q$, giving $6p - 4q$. The choice $6p + 14q$ flips only the $4p$. The choice $14p + 14q$ adds instead of subtracting. The choice $6p + 4q$ subtracts the $q$ coefficients in the wrong order. Check at $p = -1$, $q = 2$: the original is $(-10 + 10) - (-4 + 18) = -14$, and $-6 - 8 = -14$. ✓',
    },
  ],
  // p7 — three terms, only two of which are alike
  [
    {
      q: 'Simplify $7a^2b + 2ab^2 - 3a^2b$.',
      choices: ['$6a^2b^2$', '$4a^2b + 2ab^2$', '$7a^2b - ab^2$', '$4a^3b^3$'],
      answer: 1,
      solution:
        'Only $7a^2b$ and $-3a^2b$ are alike: $7 - 3 = 4$, giving $4a^2b$. The term $2ab^2$ carries its square on $b$, so it belongs to another family and rides along unchanged. The answer is $4a^2b + 2ab^2$. The choice $6a^2b^2$ treats all three as one family, $7 + 2 - 3$. The choice $7a^2b - ab^2$ subtracts the $3$ from the wrong family, $2 - 3$. The choice $4a^3b^3$ adds exponents, which combining like terms never does. Check at $a = 2$, $b = -1$: the original is $-28 + 4 + 12 = -12$, and $-16 + 4 = -12$. ✓',
    },
    {
      q: 'Simplify $5m^2n + 8mn^2 - 2m^2n$.',
      choices: ['$11m^2n^2$', '$5m^2n + 6mn^2$', '$3m^2n + 8mn^2$', '$3m^3n^3$'],
      answer: 2,
      solution:
        'The $m^2n$ terms combine: $5 - 2 = 3$, so $3m^2n$. The $8mn^2$ has no partner, so it stays: $3m^2n + 8mn^2$. The choice $11m^2n^2$ pretends every term is alike, $5 + 8 - 2$. The choice $5m^2n + 6mn^2$ takes the $-2$ out of the wrong family. The choice $3m^3n^3$ piles the exponents together. Check at $m = -1$, $n = 3$: the original is $15 - 72 - 6 = -63$, and $9 - 72 = -63$. ✓',
    },
    {
      q: 'Simplify $9p^2q + 4pq^2 - 6p^2q$.',
      choices: ['$7p^2q^2$', '$9p^2q - 2pq^2$', '$3p^3q^3$', '$3p^2q + 4pq^2$'],
      answer: 3,
      solution:
        'Sort by family: $9p^2q - 6p^2q = 3p^2q$, and $4pq^2$ has nobody to combine with. The answer is $3p^2q + 4pq^2$. The choice $7p^2q^2$ adds all three coefficients, $9 + 4 - 6$. The choice $9p^2q - 2pq^2$ subtracts the $6$ from the $4pq^2$ instead. The choice $3p^3q^3$ adds exponents. Check at $p = 2$, $q = -2$: the original is $-72 + 32 + 48 = 8$, and $-24 + 32 = 8$. ✓',
    },
  ],
  // p8 — the same product written in two letter orders
  [
    {
      q: 'Simplify $9mn - 4nm$.',
      choices: [
        '$5mn$',
        'It cannot be simplified — the variable orders differ',
        '$13mn$',
        '$5$',
      ],
      answer: 0,
      solution:
        'Multiplication does not care about order, so $nm$ is the very same thing as $mn$. That makes the two terms like terms: $9mn - 4mn = 5mn$. The "cannot be simplified" choice is fooled by the letter order alone. The choice $13mn$ adds instead of subtracting. The choice $5$ drops the variables, which combining like terms never does. Check at $m = 3$, $n = -2$: the original is $-54 + 24 = -30$, and $5(-6) = -30$. ✓',
    },
    {
      q: 'Simplify $7xy + 2yx$.',
      choices: [
        'It cannot be simplified — $xy$ and $yx$ are different families',
        '$9xy$',
        '$5xy$',
        '$9$',
      ],
      answer: 1,
      solution:
        'Rewrite $2yx$ as $2xy$ — multiplying in the other order gives the same product. Now the terms match: $7 + 2 = 9$, so the answer is $9xy$. The first choice is tricked by the letter order. The choice $5xy$ subtracts when the expression adds. The choice $9$ loses the variables. Check at $x = -1$, $y = 4$: the original is $-28 - 8 = -36$, and $9(-4) = -36$. ✓',
    },
    {
      q: 'Simplify $12pq - 5qp$.',
      choices: [
        'It cannot be simplified — the letters appear in different orders',
        '$17pq$',
        '$7$',
        '$7pq$',
      ],
      answer: 3,
      solution:
        'Since $qp = pq$, the second term is really $5pq$ and the two are like terms: $12 - 5 = 7$, giving $7pq$. The first choice trusts the written order instead of the rule that multiplication can be done either way. The choice $17pq$ adds rather than subtracts. The choice $7$ discards the variables. Check at $p = 2$, $q = -3$: the original is $-72 + 30 = -42$, and $7(-6) = -42$. ✓',
    },
  ],
  // p9 — subtract a whole trinomial
  [
    {
      q: 'Simplify $(5a^2 + 3ab - 2b^2) - (2a^2 - ab + b^2)$.',
      choices: [
        '$3a^2 + 4ab - 3b^2$',
        '$3a^2 + 2ab - b^2$',
        '$7a^2 + 2ab - b^2$',
        '$3a^2 + 2ab - 3b^2$',
      ],
      answer: 0,
      solution:
        'Flip all THREE signs in the second parentheses: $-(2a^2 - ab + b^2) = -2a^2 + ab - b^2$. Now collect: $5a^2 - 2a^2 = 3a^2$, then $3ab + ab = 4ab$, then $-2b^2 - b^2 = -3b^2$. The answer is $3a^2 + 4ab - 3b^2$. The choice $3a^2 + 2ab - b^2$ flips only the first term inside. The choice $7a^2 + 2ab - b^2$ adds the two trinomials instead of subtracting. The choice $3a^2 + 2ab - 3b^2$ flips the last term but not the middle one. Check at $a = 2$, $b = -1$: the original is $(20 - 6 - 2) - (8 + 2 + 1) = 12 - 11 = 1$, and $12 - 8 - 3 = 1$. ✓',
    },
    {
      q: 'Simplify $(4m^2 + 5mn - 3n^2) - (m^2 - 2mn + 2n^2)$.',
      choices: [
        '$3m^2 + 3mn - n^2$',
        '$3m^2 + 7mn - 5n^2$',
        '$5m^2 + 3mn - n^2$',
        '$3m^2 + 3mn - 5n^2$',
      ],
      answer: 1,
      solution:
        'Every sign inside the second parentheses flips: $-m^2 + 2mn - 2n^2$. Combining, $4m^2 - m^2 = 3m^2$, then $5mn + 2mn = 7mn$, then $-3n^2 - 2n^2 = -5n^2$. So the answer is $3m^2 + 7mn - 5n^2$. The choice $3m^2 + 3mn - n^2$ flips nothing past the first term. The choice $5m^2 + 3mn - n^2$ adds the two trinomials. The choice $3m^2 + 3mn - 5n^2$ flips the last term but leaves the middle one alone. Check at $m = 1$, $n = -2$: the original is $(4 - 10 - 12) - (1 + 4 + 8) = -18 - 13 = -31$, and $3 - 14 - 20 = -31$. ✓',
    },
    {
      q: 'Simplify $(6p^2 + 2pq - 5q^2) - (2p^2 - 3pq + q^2)$.',
      choices: [
        '$4p^2 - pq - 4q^2$',
        '$8p^2 - pq - 4q^2$',
        '$4p^2 + 5pq - 6q^2$',
        '$4p^2 - pq - 6q^2$',
      ],
      answer: 2,
      solution:
        'The minus sign is really a $-1$ multiplying all three terms: $-2p^2 + 3pq - q^2$. Then $6p^2 - 2p^2 = 4p^2$, $2pq + 3pq = 5pq$, and $-5q^2 - q^2 = -6q^2$, giving $4p^2 + 5pq - 6q^2$. The choice $4p^2 - pq - 4q^2$ forgets to flip the last two terms. The choice $8p^2 - pq - 4q^2$ adds the trinomials outright. The choice $4p^2 - pq - 6q^2$ flips the $q^2$ term but not the $pq$ term. Check at $p = -1$, $q = 2$: the original is $(6 - 4 - 20) - (2 + 6 + 4) = -18 - 12 = -30$, and $4 - 10 - 24 = -30$. ✓',
    },
  ],
  // p10 — perimeter, where the second variable cancels
  [
    {
      q: 'A rectangle has length $3x + y$ and width $x - y$. What is its perimeter?',
      choices: ['$8x$', '$8x + 4y$', '$4x$', '$3x^2 - 2xy - y^2$'],
      answer: 0,
      solution:
        'Perimeter is two lengths plus two widths: $2(3x + y) + 2(x - y) = 6x + 2y + 2x - 2y$. The $y$ terms wipe each other out, $+2y - 2y = 0$, leaving $8x$. The choice $8x + 4y$ doubles the width but reads its $-y$ as $+y$. The choice $4x$ adds one length and one width and forgets to double. The choice $3x^2 - 2xy - y^2$ is the AREA, $(3x + y)(x - y)$ — a different question. Check at $x = 4$, $y = 1$: length $13$, width $3$, perimeter $2(13) + 2(3) = 32$, and $8(4) = 32$. ✓',
    },
    {
      q: 'A rectangle has length $4m + n$ and width $m - n$. What is its perimeter?',
      choices: ['$10m + 4n$', '$5m$', '$10m$', '$4m^2 - 3mn - n^2$'],
      answer: 2,
      solution:
        'Double each side and add: $2(4m + n) + 2(m - n) = 8m + 2n + 2m - 2n$. The $n$ terms cancel, so the perimeter is $10m$ — it does not depend on $n$ at all. The choice $10m + 4n$ mishandles the width\'s minus sign, adding $2n$ twice. The choice $5m$ is only half the perimeter, one length plus one width. The choice $4m^2 - 3mn - n^2$ is the area. Check at $m = 3$, $n = -1$: length $11$, width $4$, perimeter $30$, and $10(3) = 30$. ✓',
    },
    {
      q: 'A rectangle has length $5p + 2q$ and width $p - 2q$. What is its perimeter?',
      choices: ['$12p + 8q$', '$6p$', '$5p^2 - 8pq - 4q^2$', '$12p$'],
      answer: 3,
      solution:
        'Perimeter is $2(5p + 2q) + 2(p - 2q) = 10p + 4q + 2p - 4q$. The $q$ terms cancel exactly, leaving $12p$. The choice $12p + 8q$ treats the width\'s $-2q$ as $+2q$, so nothing cancels. The choice $6p$ adds one length to one width without doubling. The choice $5p^2 - 8pq - 4q^2$ is the area, $(5p + 2q)(p - 2q)$. Check at $p = 3$, $q = 1$: length $17$, width $1$, perimeter $36$, and $12(3) = 36$. ✓',
    },
  ],
]

const s43 = [
  // p1 — distribute a bare constant over a sum of two variables
  [
    {
      q: 'Expand $7(a + b)$.',
      choices: ['$7a + b$', '$7a + 7b$', '$a + 7b$', '$7ab$'],
      answer: 1,
      solution:
        'The $7$ makes a delivery to every term inside: $7 \\cdot a = 7a$ and $7 \\cdot b = 7b$, so $7(a + b) = 7a + 7b$. The choice $7a + b$ skips the second delivery. The choice $a + 7b$ skips the first. The choice $7ab$ multiplies $a$ and $b$ together, but inside the parentheses they are added, not multiplied. Check at $a = 3$, $b = -5$: the original is $7(-2) = -14$, and $21 - 35 = -14$. ✓',
    },
    {
      q: 'Expand $4(m + n)$.',
      choices: ['$4m + n$', '$4mn$', '$4m + 4n$', '$m + 4n$'],
      answer: 2,
      solution:
        'Each term inside gets multiplied by $4$: $4m + 4n$. The choice $4m + n$ leaves $n$ untouched, and $m + 4n$ leaves $m$ untouched. The choice $4mn$ multiplies the two letters together instead of keeping them as separate terms. Check at $m = -2$, $n = 6$: the original is $4(4) = 16$, and $-8 + 24 = 16$. ✓',
    },
    {
      q: 'Expand $9(p + q)$.',
      choices: ['$9pq$', '$9p + q$', '$p + 9q$', '$9p + 9q$'],
      answer: 3,
      solution:
        'Distribute to both: $9 \\cdot p = 9p$ and $9 \\cdot q = 9q$, giving $9p + 9q$. The choice $9pq$ turns the sum inside into a product. The choices $9p + q$ and $p + 9q$ each forget one of the two deliveries. Check at $p = 5$, $q = -3$: the original is $9(2) = 18$, and $45 - 27 = 18$. ✓',
    },
  ],
  // p2 — distribute a monomial over a two-term sum
  [
    {
      q: 'Expand $4a(3b + 2c)$.',
      choices: ['$12ab + 8ac$', '$12ab + 2c$', '$12b + 8c$', '$7ab + 6ac$'],
      answer: 0,
      solution:
        'The whole factor $4a$ multiplies each term: $4a \\cdot 3b = 12ab$ and $4a \\cdot 2c = 8ac$. The answer is $12ab + 8ac$. The choice $12ab + 2c$ never delivers to the second term. The choice $12b + 8c$ leaves the $a$ behind — the outside factor travels in full, letter included. The choice $7ab + 6ac$ ADDS the coefficients, $4 + 3$ and $4 + 2$, instead of multiplying them. Check at $a = 2$, $b = -1$, $c = 3$: the original is $8(-3 + 6) = 24$, and $-24 + 48 = 24$. ✓',
    },
    {
      q: 'Expand $5m(4n + 3p)$.',
      choices: ['$20mn + 3p$', '$20mn + 15mp$', '$20n + 15p$', '$9mn + 8mp$'],
      answer: 1,
      solution:
        'Multiply $5m$ into both terms: $5m \\cdot 4n = 20mn$ and $5m \\cdot 3p = 15mp$, giving $20mn + 15mp$. The choice $20mn + 3p$ forgets the second product. The choice $20n + 15p$ drops the $m$ from both products. The choice $9mn + 8mp$ adds coefficients, $5 + 4$ and $5 + 3$, where multiplication belongs. Check at $m = -1$, $n = 2$, $p = 4$: the original is $-5(8 + 12) = -100$, and $-40 - 60 = -100$. ✓',
    },
    {
      q: 'Expand $2x(7y + 6z)$.',
      choices: ['$14xy + 6z$', '$14y + 12z$', '$9xy + 8xz$', '$14xy + 12xz$'],
      answer: 3,
      solution:
        'Send $2x$ to each term: $2x \\cdot 7y = 14xy$ and $2x \\cdot 6z = 12xz$. The answer is $14xy + 12xz$. The choice $14xy + 6z$ stops after the first product. The choice $14y + 12z$ loses the $x$ that should ride along with both. The choice $9xy + 8xz$ adds $2 + 7$ and $2 + 6$ rather than multiplying. Check at $x = 3$, $y = -2$, $z = 1$: the original is $6(-14 + 6) = -48$, and $-84 + 36 = -48$. ✓',
    },
  ],
  // p3 — factor out a monomial where one term shrinks to a constant
  [
    {
      q: 'Factor $10ab + 15a$.',
      choices: ['$5a(2b + 3)$', '$5a(2b + 3a)$', '$10a(b + 3)$', '$5a(2b + 15)$'],
      answer: 0,
      solution:
        'The coefficients $10$ and $15$ share a $5$, and both terms carry exactly one $a$, so the greatest common factor is $5a$. Dividing: $\\frac{10ab}{5a} = 2b$ and $\\frac{15a}{5a} = 3$. The answer is $5a(2b + 3)$, and expanding gives $10ab + 15a$ back. ✓ The choice $5a(2b + 3a)$ leaves an extra $a$ inside; it expands to $10ab + 15a^2$. The choice $10a(b + 3)$ pulls out $10a$ but still divides the second term by $5a$; it expands to $10ab + 30a$. The choice $5a(2b + 15)$ never divides the second term and expands to $10ab + 75a$.',
    },
    {
      q: 'Factor $8mn + 12m$.',
      choices: ['$4m(2n + 3m)$', '$8m(n + 3)$', '$4m(2n + 3)$', '$4m(2n + 12)$'],
      answer: 2,
      solution:
        'The greatest common factor of $8mn$ and $12m$ is $4m$: $\\frac{8mn}{4m} = 2n$ and $\\frac{12m}{4m} = 3$. So the factored form is $4m(2n + 3)$; expanding returns $8mn + 12m$. ✓ The choice $4m(2n + 3m)$ keeps an $m$ inside and expands to $8mn + 12m^2$. The choice $8m(n + 3)$ takes out $8m$ but divides the second term by only $4m$, expanding to $8mn + 24m$. The choice $4m(2n + 12)$ forgets to divide the $12m$ at all and expands to $8mn + 48m$.',
    },
    {
      q: 'Factor $14pq + 21p$.',
      choices: ['$7p(2q + 3p)$', '$14p(q + 3)$', '$7p(2q + 21)$', '$7p(2q + 3)$'],
      answer: 3,
      solution:
        'Both coefficients are divisible by $7$, and both terms have one $p$, so pull out $7p$: $\\frac{14pq}{7p} = 2q$ and $\\frac{21p}{7p} = 3$, giving $7p(2q + 3)$. Expand to check: $14pq + 21p$. ✓ The choice $7p(2q + 3p)$ expands to $14pq + 21p^2$. The choice $14p(q + 3)$ expands to $14pq + 42p$. The choice $7p(2q + 21)$ leaves the second term undivided and expands to $14pq + 147p$.',
    },
  ],
  // p4 — distribute a NEGATIVE constant over a difference
  [
    {
      q: 'Expand $-4(x - 2y)$.',
      choices: ['$-4x + 8y$', '$-4x - 8y$', '$-4x - 2y$', '$4x - 8y$'],
      answer: 0,
      solution:
        'The whole $-4$ travels, sign and all: $-4 \\cdot x = -4x$, and $-4 \\cdot (-2y) = +8y$ because a negative times a negative is positive. So $-4(x - 2y) = -4x + 8y$. The choice $-4x - 8y$ keeps the second term negative, which is the single most common slip here. The choice $-4x - 2y$ never multiplies the $-2y$. The choice $4x - 8y$ drops the outer minus sign. Check at $x = 3$, $y = 1$: the original is $-4(1) = -4$, and $-12 + 8 = -4$. ✓',
    },
    {
      q: 'Expand $-5(m - 3n)$.',
      choices: ['$-5m - 15n$', '$-5m + 15n$', '$-5m - 3n$', '$5m - 15n$'],
      answer: 1,
      solution:
        'Deliver the $-5$ to both terms: $-5 \\cdot m = -5m$ and $-5 \\cdot (-3n) = +15n$. The answer is $-5m + 15n$. The choice $-5m - 15n$ forgets that two negatives make a positive. The choice $-5m - 3n$ leaves the $-3n$ unmultiplied. The choice $5m - 15n$ loses the outer minus. Check at $m = 2$, $n = -1$: the original is $-5(2 + 3) = -25$, and $-10 - 15 = -25$. ✓',
    },
    {
      q: 'Expand $-3(p - 7q)$.',
      choices: ['$-3p - 21q$', '$-3p - 7q$', '$-3p + 21q$', '$3p - 21q$'],
      answer: 2,
      solution:
        'Multiply $-3$ into each term: $-3 \\cdot p = -3p$ and $-3 \\cdot (-7q) = +21q$, so the answer is $-3p + 21q$. The choice $-3p - 21q$ keeps the wrong sign on the second term. The choice $-3p - 7q$ never multiplies the $-7q$. The choice $3p - 21q$ throws away the outer minus sign. Check at $p = -2$, $q = 1$: the original is $-3(-9) = 27$, and $6 + 21 = 27$. ✓',
    },
  ],
  // p5 — double distribution with two different letters
  [
    {
      q: 'Expand $(x + 3)(y + 4)$.',
      choices: ['$xy + 12$', '$xy + 4x + 3y + 12$', '$xy + 3x + 4y + 12$', '$xy + 7$'],
      answer: 1,
      solution:
        'Every term of the first pair meets every term of the second — four products: $x \\cdot y = xy$, $x \\cdot 4 = 4x$, $3 \\cdot y = 3y$, $3 \\cdot 4 = 12$. None of them are like terms, so all four stay: $xy + 4x + 3y + 12$. The choice $xy + 12$ multiplies only the firsts and only the lasts, losing half the products. The choice $xy + 3x + 4y + 12$ hands each coefficient to the wrong letter — the $4$ belongs with $x$ because it multiplies $x$. The choice $xy + 7$ adds $3 + 4$. Check at $x = 2$, $y = -1$: the original is $5 \\cdot 3 = 15$, and $-2 + 8 - 3 + 12 = 15$. ✓',
    },
    {
      q: 'Expand $(m + 5)(n + 2)$.',
      choices: ['$mn + 10$', '$mn + 5m + 2n + 10$', '$mn + 2m + 5n + 10$', '$mn + 7$'],
      answer: 2,
      solution:
        'Four products in all: $m \\cdot n = mn$, $m \\cdot 2 = 2m$, $5 \\cdot n = 5n$, $5 \\cdot 2 = 10$. Nothing combines, so the answer is $mn + 2m + 5n + 10$. The choice $mn + 10$ keeps only the first and last products. The choice $mn + 5m + 2n + 10$ swaps the coefficients: the $2$ came from the second pair, so it must attach to $m$. The choice $mn + 7$ adds $5 + 2$. Check at $m = 3$, $n = -4$: the original is $8 \\cdot (-2) = -16$, and $-12 + 6 - 20 + 10 = -16$. ✓',
    },
    {
      q: 'Expand $(p + 6)(q + 3)$.',
      choices: ['$pq + 18$', '$pq + 6p + 3q + 18$', '$pq + 9$', '$pq + 3p + 6q + 18$'],
      answer: 3,
      solution:
        'Count the four products: $p \\cdot q = pq$, $p \\cdot 3 = 3p$, $6 \\cdot q = 6q$, $6 \\cdot 3 = 18$. All four survive: $pq + 3p + 6q + 18$. The choice $pq + 18$ multiplies firsts and lasts only. The choice $pq + 6p + 3q + 18$ gives each coefficient the wrong partner. The choice $pq + 9$ adds $6 + 3$ instead of multiplying. Check at $p = -2$, $q = 5$: the original is $4 \\cdot 8 = 32$, and $-10 - 6 + 30 + 18 = 32$. ✓',
    },
  ],
  // p6 — factor a two-letter GCF out of two terms
  [
    {
      q: 'Factor $6x^2y + 15xy^2$.',
      choices: ['$3xy(2x + 5y)$', '$3xy(2y + 5x)$', '$3xy(2x + 5)$', '$3x(2x + 5y)$'],
      answer: 0,
      solution:
        'The coefficients share a $3$, and both terms contain at least one $x$ and one $y$, so the greatest common factor is $3xy$. Dividing: $\\frac{6x^2y}{3xy} = 2x$ and $\\frac{15xy^2}{3xy} = 5y$, giving $3xy(2x + 5y)$. Expand to check: $6x^2y + 15xy^2$. ✓ The choice $3xy(2y + 5x)$ swaps which letter stays with which coefficient and expands to $6xy^2 + 15x^2y$ — the squares land on the wrong letters. The choice $3xy(2x + 5)$ drops the $y$ from the second quotient and expands to $6x^2y + 15xy$. The choice $3x(2x + 5y)$ leaves the $y$ out of the common factor and expands to $6x^2 + 15xy$.',
    },
    {
      q: 'Factor $10m^2n + 4mn^2$.',
      choices: ['$2mn(5n + 2m)$', '$2mn(5m + 2)$', '$2mn(5m + 2n)$', '$2m(5m + 2n)$'],
      answer: 2,
      solution:
        'The greatest common factor of $10m^2n$ and $4mn^2$ is $2mn$: $\\frac{10m^2n}{2mn} = 5m$ and $\\frac{4mn^2}{2mn} = 2n$. So the answer is $2mn(5m + 2n)$, which expands back to $10m^2n + 4mn^2$. ✓ The choice $2mn(5n + 2m)$ trades the letters and expands to $10mn^2 + 4m^2n$. The choice $2mn(5m + 2)$ forgets the leftover $n$ and expands to $10m^2n + 4mn$. The choice $2m(5m + 2n)$ leaves $n$ out of the common factor and expands to $10m^2 + 4mn$.',
    },
    {
      q: 'Factor $9p^2q + 12pq^2$.',
      choices: ['$3pq(3q + 4p)$', '$3pq(3p + 4)$', '$3p(3p + 4q)$', '$3pq(3p + 4q)$'],
      answer: 3,
      solution:
        'Both coefficients are divisible by $3$, and both terms hold at least one $p$ and one $q$, so pull out $3pq$: $\\frac{9p^2q}{3pq} = 3p$ and $\\frac{12pq^2}{3pq} = 4q$. That gives $3pq(3p + 4q)$; expanding returns $9p^2q + 12pq^2$. ✓ The choice $3pq(3q + 4p)$ puts each leftover letter with the wrong coefficient and expands to $9pq^2 + 12p^2q$. The choice $3pq(3p + 4)$ loses the second $q$ and expands to $9p^2q + 12pq$. The choice $3p(3p + 4q)$ uses too small a common factor and expands to $9p^2 + 12pq$.',
    },
  ],
  // p7 — double distribution where one letter repeats
  [
    {
      q: 'Expand $(a + 5)(a + b)$.',
      choices: ['$a^2 + ab + 5a + 5b$', '$a^2 + 5b$', '$a^2 + ab + 5b$', '$a^2 + 6ab + 5b$'],
      answer: 0,
      solution:
        'Four products: $a \\cdot a = a^2$, $a \\cdot b = ab$, $5 \\cdot a = 5a$, $5 \\cdot b = 5b$. No two of these are like terms — $ab$ and $5a$ live in different families — so all four stay: $a^2 + ab + 5a + 5b$. The choice $a^2 + 5b$ takes only the firsts and the lasts. The choice $a^2 + ab + 5b$ loses the $5a$. The choice $a^2 + 6ab + 5b$ merges $ab$ and $5a$ into $6ab$, but they cannot combine. Check at $a = 2$, $b = -3$: the original is $7 \\cdot (-1) = -7$, and $4 - 6 + 10 - 15 = -7$. ✓',
    },
    {
      q: 'Expand $(m + 4)(m + n)$.',
      choices: ['$m^2 + 4n$', '$m^2 + mn + 4m + 4n$', '$m^2 + mn + 4n$', '$m^2 + 5mn + 4n$'],
      answer: 1,
      solution:
        'Multiply each term of the first pair by each term of the second: $m^2$, $mn$, $4m$, $4n$. They belong to four different families, so nothing combines: $m^2 + mn + 4m + 4n$. The choice $m^2 + 4n$ multiplies only firsts and lasts. The choice $m^2 + mn + 4n$ drops the $4m$. The choice $m^2 + 5mn + 4n$ wrongly adds $mn$ and $4m$ together. Check at $m = 3$, $n = -1$: the original is $7 \\cdot 2 = 14$, and $9 - 3 + 12 - 4 = 14$. ✓',
    },
    {
      q: 'Expand $(y + 6)(y + z)$.',
      choices: ['$y^2 + 6z$', '$y^2 + yz + 6z$', '$y^2 + 7yz + 6z$', '$y^2 + yz + 6y + 6z$'],
      answer: 3,
      solution:
        'The four products are $y \\cdot y = y^2$, $y \\cdot z = yz$, $6 \\cdot y = 6y$, and $6 \\cdot z = 6z$. All four are different families, so the answer keeps them all: $y^2 + yz + 6y + 6z$. The choice $y^2 + 6z$ keeps only the outer two products. The choice $y^2 + yz + 6z$ forgets the $6y$. The choice $y^2 + 7yz + 6z$ combines $yz$ with $6y$, which are not like terms. Check at $y = -2$, $z = 5$: the original is $4 \\cdot 3 = 12$, and $4 - 10 - 12 + 30 = 12$. ✓',
    },
  ],
  // p8 — use a known sum without solving for the individual letters
  [
    {
      q: 'If $a + b = 7$, what is $5a + 5b$?',
      choices: ['$35$', '$12$', '$49$', '$70$'],
      answer: 0,
      solution:
        'Factor first: $5a + 5b = 5(a + b)$. The parentheses now hold something we already know, so the value is $5 \\times 7 = 35$ — no need to find $a$ and $b$ separately. (Try $a = 3$, $b = 4$: $15 + 20 = 35$. Try $a = 10$, $b = -3$: $50 - 15 = 35$. Same answer either way. ✓) The choice $12$ adds $5 + 7$ instead of multiplying. The choice $49$ computes $7 \\times 7$. The choice $70$ multiplies by $5$ once for $a$ and once for $b$ and then adds both results, counting the $5$ twice.',
    },
    {
      q: 'If $m + n = 12$, what is $3m + 3n$?',
      choices: ['$15$', '$36$', '$144$', '$72$'],
      answer: 1,
      solution:
        'Pull the common factor out: $3m + 3n = 3(m + n) = 3 \\times 12 = 36$. (Check with $m = 5$, $n = 7$: $15 + 21 = 36$; and with $m = 20$, $n = -8$: $60 - 24 = 36$. ✓) The choice $15$ adds $3 + 12$. The choice $144$ squares the $12$. The choice $72$ triples the sum twice over, once for each letter, and adds the two results.',
    },
    {
      q: 'If $6p + 6q = 48$, what is $p + q$?',
      choices: ['$42$', '$288$', '$8$', '$4$'],
      answer: 2,
      solution:
        'Run the factoring backwards: $6p + 6q = 6(p + q)$, so $6(p + q) = 48$ and therefore $p + q = \\frac{48}{6} = 8$. (Check with $p = 5$, $q = 3$: $30 + 18 = 48$. ✓) The choice $42$ subtracts the $6$ instead of dividing by it. The choice $288$ multiplies by $6$ when the $6$ should be undone. The choice $4$ divides by $12$, as though the two $6$s had to be removed one after the other — but there is only one factor of $6$ to undo.',
    },
  ],
  // p9 — factor three terms, one of which shrinks to 1
  [
    {
      q: 'Factor $10a^2b - 15ab^2 + 5ab$.',
      choices: [
        '$5ab(2a - 3b)$',
        '$5ab(2a - 3b + 1)$',
        '$5ab(2a - 3b - 1)$',
        '$5ab(2a + 3b + 1)$',
      ],
      answer: 1,
      solution:
        'All three coefficients are divisible by $5$, and every term has at least one $a$ and one $b$, so the greatest common factor is $5ab$. Dividing: $\\frac{10a^2b}{5ab} = 2a$, $\\frac{-15ab^2}{5ab} = -3b$, and $\\frac{5ab}{5ab} = 1$. That last $1$ must be written down — the third term does not vanish, it shrinks. The answer is $5ab(2a - 3b + 1)$, which expands back to $10a^2b - 15ab^2 + 5ab$. ✓ The choice $5ab(2a - 3b)$ lets the third term disappear and expands to $10a^2b - 15ab^2$. The choice $5ab(2a - 3b - 1)$ gets that term\'s sign wrong and expands with $-5ab$. The choice $5ab(2a + 3b + 1)$ loses the minus on the middle term.',
    },
    {
      q: 'Factor $8m^2n - 12mn^2 + 4mn$.',
      choices: [
        '$4mn(2m - 3n)$',
        '$4mn(2m - 3n - 1)$',
        '$4mn(2m - 3n + 1)$',
        '$4mn(2m + 3n + 1)$',
      ],
      answer: 2,
      solution:
        'Every term shares $4mn$. Dividing: $\\frac{8m^2n}{4mn} = 2m$, $\\frac{-12mn^2}{4mn} = -3n$, and $\\frac{4mn}{4mn} = 1$. So the factored form is $4mn(2m - 3n + 1)$; expanding gives $8m^2n - 12mn^2 + 4mn$. ✓ The choice $4mn(2m - 3n)$ drops the $+1$, so its expansion is missing the whole third term. The choice $4mn(2m - 3n - 1)$ flips that term\'s sign and expands with $-4mn$. The choice $4mn(2m + 3n + 1)$ has the wrong sign on the middle term.',
    },
    {
      q: 'Factor $14p^2q - 7pq^2 + 7pq$.',
      choices: [
        '$7pq(2p - q)$',
        '$7pq(2p - q - 1)$',
        '$7pq(2p + q + 1)$',
        '$7pq(2p - q + 1)$',
      ],
      answer: 3,
      solution:
        'The greatest common factor is $7pq$: $\\frac{14p^2q}{7pq} = 2p$, $\\frac{-7pq^2}{7pq} = -q$, and $\\frac{7pq}{7pq} = 1$. Note that the middle quotient is a bare $-q$ (its coefficient is $1$) and the last is a bare $1$ — neither may be left out. The answer is $7pq(2p - q + 1)$, and expanding returns $14p^2q - 7pq^2 + 7pq$. ✓ The choice $7pq(2p - q)$ expands to $14p^2q - 7pq^2$, losing the third term. The choice $7pq(2p - q - 1)$ gets that term\'s sign wrong. The choice $7pq(2p + q + 1)$ loses the minus on the middle term.',
    },
  ],
  // p10 — double distribution with coefficients on both pairs
  [
    {
      q: 'Expand $(3x + y)(2z + w)$.',
      choices: [
        '$6xz + 3xw + 2yz + yw$',
        '$6xz + 2xw + 3yz + yw$',
        '$6xz + yw$',
        '$5xz + 3xw + 2yz + yw$',
      ],
      answer: 0,
      solution:
        'Four products, each carrying its own coefficients: $3x \\cdot 2z = 6xz$, $3x \\cdot w = 3xw$, $y \\cdot 2z = 2yz$, $y \\cdot w = yw$. Together: $6xz + 3xw + 2yz + yw$. Watch which coefficient travels with which letter — the $3$ belongs to $x$, so it appears in both products that contain $x$. The choice $6xz + 2xw + 3yz + yw$ hands the $3$ and the $2$ to the wrong partners. The choice $6xz + yw$ multiplies only the firsts and the lasts. The choice $5xz + 3xw + 2yz + yw$ adds $3 + 2$ in the first product instead of multiplying. Check at $x = 1$, $y = 2$, $z = -1$, $w = 3$: the original is $(3 + 2)(-2 + 3) = 5$, and $-6 + 9 - 4 + 6 = 5$. ✓',
    },
    {
      q: 'Expand $(4m + n)(5p + q)$.',
      choices: [
        '$20mp + 5mq + 4np + nq$',
        '$20mp + 4mq + 5np + nq$',
        '$20mp + nq$',
        '$9mp + 4mq + 5np + nq$',
      ],
      answer: 1,
      solution:
        'Each term of the first pair multiplies each term of the second: $4m \\cdot 5p = 20mp$, $4m \\cdot q = 4mq$, $n \\cdot 5p = 5np$, $n \\cdot q = nq$. The answer is $20mp + 4mq + 5np + nq$. The choice $20mp + 5mq + 4np + nq$ swaps the $4$ and the $5$; the $4$ came from $m$, so it must stay with $m$. The choice $20mp + nq$ keeps only two of the four products. The choice $9mp + 4mq + 5np + nq$ adds $4 + 5$ in the first product. Check at $m = 1$, $n = -2$, $p = 2$, $q = 3$: the original is $(4 - 2)(10 + 3) = 26$, and $40 + 12 - 20 - 6 = 26$. ✓',
    },
    {
      q: 'Expand $(5a + 2b)(3c + d)$.',
      choices: [
        '$15ac + 2bd$',
        '$8ac + 5ad + 6bc + 2bd$',
        '$15ac + 5ad + 6bc + bd$',
        '$15ac + 5ad + 6bc + 2bd$',
      ],
      answer: 3,
      solution:
        'Four products, coefficients multiplied along the way: $5a \\cdot 3c = 15ac$, $5a \\cdot d = 5ad$, $2b \\cdot 3c = 6bc$, $2b \\cdot d = 2bd$. Together: $15ac + 5ad + 6bc + 2bd$. The choice $15ac + 2bd$ multiplies only the firsts and only the lasts, missing half the work. The choice $8ac + 5ad + 6bc + 2bd$ adds $5 + 3$ in the first product instead of multiplying. The choice $15ac + 5ad + 6bc + bd$ carries the $b$ into the last product but leaves its $2$ behind. Check at $a = 1$, $b = -1$, $c = 2$, $d = 4$: the original is $(5 - 2)(6 + 4) = 30$, and $30 + 20 - 12 - 8 = 30$. ✓',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 4,
  sections: {
    '4.1': s41,
    '4.2': s42,
    '4.3': s43,
  },
}
