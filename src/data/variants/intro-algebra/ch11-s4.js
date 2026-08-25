// Introduction to Algebra chapter 11 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked out by hand from the question text and then checked
//    FORWARD: every factorization is multiplied back out (or tested at a
//    convenient value), every rationalized fraction is confirmed against a
//    decimal estimate, and every integer-solution puzzle is substituted back
//    into the original equation.
//  - These are the chapter's hard problems, so a variation stays hard: the
//    coefficients stay bigger than $1$, the "finish the factoring" step stays
//    in, the fraction still has to be reduced after rationalizing, and the
//    integer puzzles still need the whole factor-pair hunt.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: FORGETTING THE
//    FACTOR OF 2 in the middle term, USING THE GAP INSTEAD OF HALF THE GAP,
//    STOPPING ONE ROUND EARLY in a factorization, FLIPPING THE MIDDLE SIGN in a
//    cube formula, SUBTRACTING THE WRONG THING in a conjugate denominator, and
//    ANSWERING WITH THE SHIFTED FACTOR instead of the variable itself.
//  - No two choices inside an item name the same number or the same value.

const challenge = [
  // c1 — difference of squares used on a product of two numbers that straddle a
  // round one. The half-gap (not the gap) is what gets squared, and the
  // correction is always SUBTRACTED. One version arrives as a word problem.
  [
    {
      q: 'Compute $66 \\times 74$.',
      choices: ['$4892$', '$4884$', '$4900$', '$4916$'],
      answer: 1,
      solution:
        'The two factors sit one step on each side of $70$: they are $70 - 4$ and $70 + 4$. So $66 \\times 74 = (70-4)(70+4) = 70^2 - 4^2 = 4900 - 16 = 4884$. Check forward the slow way: $66 \\times 74 = 66 \\times 70 + 66 \\times 4 = 4620 + 264 = 4884$ ✓. (The choice $4916$ ADDS the $16$ — but a number just below $70$ times a number just above it always lands a little UNDER $70^2$; the choice $4900$ is $70^2$ with the correction forgotten entirely; the choice $4892$ subtracts $2 \\cdot 4 = 8$ instead of $4^2 = 16$, doubling the half-gap where it should have squared it.)',
    },
    {
      q: 'A rectangular banner is $125$ centimeters long and $115$ centimeters wide. What is its area in square centimeters?',
      choices: ['$14{,}300$', '$14{,}400$', '$14{,}375$', '$14{,}425$'],
      answer: 2,
      solution:
        'Area is length times width, and $125$ and $115$ straddle $120$: each is $5$ away from it. So the area is $(120+5)(120-5) = 120^2 - 5^2 = 14400 - 25 = 14375$ square centimeters. Check forward: $125 \\times 115 = 125 \\times 100 + 125 \\times 15 = 12500 + 1875 = 14375$ ✓. (The choice $14{,}300$ uses the full gap $10$ between the two sides instead of the half-gap $5$, computing $120^2 - 10^2$; the choice $14{,}400$ is $120^2$ with no correction at all; the choice $14{,}425$ adds the $25$ instead of subtracting it.)',
    },
    {
      q: 'Compute $245 \\times 255$.',
      choices: ['$62{,}400$', '$62{,}500$', '$62{,}525$', '$62{,}475$'],
      answer: 3,
      solution:
        'Both factors are $5$ away from $250$, so $245 \\times 255 = (250-5)(250+5) = 250^2 - 5^2 = 62500 - 25 = 62475$. Check forward: $245 \\times 255 = 245 \\times 250 + 245 \\times 5 = 61250 + 1225 = 62475$ ✓. (The choice $62{,}525$ adds the $25$; the choice $62{,}500$ forgets the correction; the choice $62{,}400$ uses the gap $10$ between the two numbers rather than the half-gap $5$, computing $250^2 - 10^2$.)',
    },
  ],
  // c2 — squaring a binomial whose first term carries a coefficient. The whole
  // difficulty is the middle term: it is TWO copies of the product, and the
  // coefficient belongs inside it. One version hands back the expansion and
  // asks for the middle coefficient; one squares a two-variable binomial.
  [
    {
      q: 'Expand $(5x - 2)^2$.',
      choices: ['$25x^2 - 10x + 4$', '$25x^2 - 20x + 4$', '$25x^2 + 20x + 4$', '$25x^2 - 4$'],
      answer: 1,
      solution:
        'Use $(a-b)^2 = a^2 - 2ab + b^2$ with $a = 5x$ and $b = 2$. The pieces are $(5x)^2 = 25x^2$, then $-2 \\cdot 5x \\cdot 2 = -20x$, then $(-2)^2 = +4$. So $(5x-2)^2 = 25x^2 - 20x + 4$. Check at $x = 1$: $(5-2)^2 = 9$, and $25 - 20 + 4 = 9$ ✓. (The choice $25x^2 - 10x + 4$ writes only ONE copy of $5x \\cdot 2$ and forgets the factor of $2$; the choice $25x^2 + 20x + 4$ flips the middle sign, but $-2$ times a positive is negative; the choice $25x^2 - 4$ is the difference-of-squares answer for $(5x-2)(5x+2)$, a completely different product.)',
    },
    {
      q: 'When $(4x - 9)^2$ is expanded it can be written as $16x^2 + bx + 81$. What is $b$?',
      choices: ['$-36$', '$72$', '$-18$', '$-72$'],
      answer: 3,
      solution:
        'The middle term of $(a-b)^2$ is $-2ab$, and here $a = 4x$, $b = 9$: that is $-2 \\cdot 4x \\cdot 9 = -72x$, so $b = -72$. Check the whole expansion at $x = 1$: $(4-9)^2 = 25$, and $16 - 72 + 81 = 25$ ✓. (The choice $-36$ writes just one copy of $4 \\cdot 9$ and forgets to double; the choice $-18$ uses $a = x$ instead of $a = 4x$, giving $-2 \\cdot 9$; the choice $72$ has the right size but the wrong sign — a minus inside the parentheses lands on the middle term.)',
    },
    {
      q: 'Expand $(2x + 5y)^2$.',
      choices: [
        '$4x^2 + 25y^2$',
        '$4x^2 + 10xy + 25y^2$',
        '$4x^2 + 20xy + 25y^2$',
        '$4x^2 + 20xy + 10y^2$',
      ],
      answer: 2,
      solution:
        'Nothing changes when the second term carries a variable too. With $a = 2x$ and $b = 5y$: $a^2 = 4x^2$, then $2ab = 2 \\cdot 2x \\cdot 5y = 20xy$, then $b^2 = 25y^2$. So $(2x+5y)^2 = 4x^2 + 20xy + 25y^2$. Check at $x = y = 1$: $(2+5)^2 = 49$, and $4 + 20 + 25 = 49$ ✓. (The choice $4x^2 + 10xy + 25y^2$ forgets the factor of $2$ in the middle; the choice $4x^2 + 25y^2$ drops the middle term altogether — the classic trap of the whole chapter; the choice $4x^2 + 20xy + 10y^2$ DOUBLES the $5$ instead of squaring it.)',
    },
  ],
  // c3 — a difference of squares that splits twice. Stopping after one round is
  // the standing trap, and the sum-of-squares factor is the wall you stop at.
  // One version runs the same two rounds on a plain number.
  [
    {
      q: 'Which is the COMPLETE factorization of $81x^4 - 16$, with every factor broken down as far as possible?',
      choices: [
        '$(9x^2+4)(9x^2-4)$',
        '$(9x^2-4)^2$',
        '$(9x^2+4)(3x+2)(3x-2)$',
        '$(9x+4)(9x-4)(x^2+1)$',
      ],
      answer: 2,
      solution:
        'Spot the squares: $81x^4 = (9x^2)^2$ and $16 = 4^2$, so the first round gives $81x^4 - 16 = (9x^2+4)(9x^2-4)$. But $9x^2 - 4 = (3x)^2 - 2^2$ is itself a difference of squares, so keep going: $(9x^2+4)(3x+2)(3x-2)$. The factor $9x^2 + 4$ is a SUM of squares and stops there, so now we are done. Check at $x = 1$: the original is $81 - 16 = 65$, and $(13)(5)(1) = 65$ ✓. (The choice $(9x^2+4)(9x^2-4)$ has the right value but stops one round too early; the choice $(9x^2-4)^2$ uses a minus in both halves and expands to $81x^4 - 72x^2 + 16$; the choice $(9x+4)(9x-4)(x^2+1)$ reads $81x^4$ as $(9x)^2$ instead of $(9x^2)^2$, and multiplies out to $81x^4 + 65x^2 - 16$.)',
    },
    {
      q: 'Which is the COMPLETE factorization of $x^4 - 16y^4$?',
      choices: [
        '$(x^2+4y^2)(x^2-4y^2)$',
        '$(x^2+4y^2)(x+2y)(x-2y)$',
        '$(x^2-4y^2)^2$',
        '$(x+4y)(x-4y)(x^2+y^2)$',
      ],
      answer: 1,
      solution:
        'Both terms are squares: $x^4 = (x^2)^2$ and $16y^4 = (4y^2)^2$. First round: $x^4 - 16y^4 = (x^2+4y^2)(x^2-4y^2)$. Now $x^2 - 4y^2$ is a difference of squares as well, so split it too: $(x^2+4y^2)(x+2y)(x-2y)$. The sum of squares $x^2 + 4y^2$ does not factor. Check at $x = 1$, $y = 1$: the original is $1 - 16 = -15$, and $(1+4)(1+2)(1-2) = 5 \\cdot 3 \\cdot (-1) = -15$ ✓. (Testing at $x = 2$, $y = 1$ would prove nothing — it makes the original $0$, and almost any wrong answer matches $0$ there.) (The choice $(x^2+4y^2)(x^2-4y^2)$ stops one round early; the choice $(x^2-4y^2)^2$ puts a minus in both halves and expands to $x^4 - 8x^2y^2 + 16y^4$; the choice $(x+4y)(x-4y)(x^2+y^2)$ takes the square root of $16y^4$ to be $4y$ instead of $4y^2$, and multiplies out to $x^4 - 15x^2y^2 - 16y^4$.)',
    },
    {
      q: 'Apply the difference of squares twice to write $5^4 - 1$ as a product of three whole numbers, each greater than $1$.',
      choices: ['$26 \\times 6 \\times 4$', '$24 \\times 6 \\times 4$', '$26 \\times 6 \\times 6$', '$26 \\times 5 \\times 4$'],
      answer: 0,
      solution:
        'Read $5^4$ as $(5^2)^2$, so $5^4 - 1 = (5^2+1)(5^2-1) = 26 \\times 24$. The second factor is a difference of squares again: $5^2 - 1 = (5+1)(5-1) = 6 \\times 4$. So $5^4 - 1 = 26 \\times 6 \\times 4$. Check forward: $5^4 = 625$, so the target is $624$, and $26 \\times 6 = 156$, then $156 \\times 4 = 624$ ✓. (The choice $24 \\times 6 \\times 4$ uses $5^2 - 1$ for the first factor as well as the second, giving $576$; the choice $26 \\times 6 \\times 6$ uses $5+1$ twice instead of $5+1$ and $5-1$, giving $936$; the choice $26 \\times 5 \\times 4$ writes the factor $5+1$ as just $5$, giving $520$.)',
    },
  ],
  // c4 — factor BEFORE squaring. The point is that the two big squares never
  // have to be computed; one version runs the identity backwards to recover a
  // missing number.
  [
    {
      q: 'Compute $\\frac{91^2 - 9^2}{100}$.',
      choices: ['$100$', '$82$', '$820$', '$8200$'],
      answer: 1,
      solution:
        'Never square first when you can factor first: $91^2 - 9^2 = (91+9)(91-9) = 100 \\times 82$. Dividing by $100$ cancels the first factor and leaves $82$. Check forward the slow way: $91^2 = 8281$ and $9^2 = 81$, so the top is $8200$, and $8200 \\div 100 = 82$ ✓. (The choice $100$ reports the SUM factor and forgets that it is the piece that cancels; the choice $8200$ is the top of the fraction with the division forgotten; the choice $820$ divides by $10$ instead of by $100$.)',
    },
    {
      q: 'Compute $\\frac{68^2 - 32^2}{18}$.',
      choices: ['$72$', '$100$', '$200$', '$3600$'],
      answer: 2,
      solution:
        'Factor the top: $68^2 - 32^2 = (68+32)(68-32) = 100 \\times 36 = 3600$. Now divide: $3600 \\div 18 = 200$. Check forward: $68^2 = 4624$ and $32^2 = 1024$, and $4624 - 1024 = 3600$ ✓. (The choice $3600$ forgets to divide; the choice $100$ divides by the difference factor $36$ instead of by the $18$ the problem actually wrote; the choice $72$ comes from subtracting first and then squaring, $\\frac{(68-32)^2}{18} = \\frac{1296}{18}$ — squaring after subtracting is a completely different operation from subtracting after squaring.)',
    },
    {
      q: 'A positive integer $n$ satisfies $\\frac{n^2 - 15^2}{n - 15} = 47$. What is $n$?',
      choices: ['$47$', '$17$', '$62$', '$32$'],
      answer: 3,
      solution:
        'The top is a difference of squares: $n^2 - 15^2 = (n+15)(n-15)$. Since $n \\neq 15$, the factor $n - 15$ cancels with the bottom and the whole fraction is just $n + 15$. So $n + 15 = 47$ and $n = 32$. Check forward: $32^2 - 225 = 1024 - 225 = 799$, and $\\frac{799}{32 - 15} = \\frac{799}{17} = 47$ ✓. (The choice $62$ cancels the wrong factor and sets $n - 15 = 47$; the choice $17$ reports the value of the denominator $n - 15$ instead of $n$; the choice $47$ just copies the number the problem handed you.)',
    },
  ],
  // c5 — cube formulas, where the sign bookkeeping is everything: the binomial
  // copies the original sign, the middle of the trinomial takes the opposite
  // one, and there is exactly ONE copy of $ab$, not two. One version hides a
  // common factor in front.
  [
    {
      q: 'Factor $27x^3 + 64$.',
      choices: [
        '$(3x+4)(9x^2-12x+16)$',
        '$(3x+4)(9x^2+12x+16)$',
        '$(3x-4)(9x^2+12x+16)$',
        '$(3x+4)(9x^2-24x+16)$',
      ],
      answer: 0,
      solution:
        'Recognize the cubes: $27x^3 = (3x)^3$ and $64 = 4^3$. Apply $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ with $a = 3x$, $b = 4$: the trinomial is $(3x)^2 = 9x^2$, then $-(3x)(4) = -12x$, then $4^2 = 16$. So $27x^3 + 64 = (3x+4)(9x^2 - 12x + 16)$. Check at $x = 1$: the original is $91$, and $(7)(9 - 12 + 16) = 7 \\cdot 13 = 91$ ✓. (The choice with $+12x$ keeps the middle sign the same as the binomial instead of flipping it, and gives $7 \\cdot 37 = 259$; the choice $(3x-4)(9x^2+12x+16)$ is the DIFFERENCE-of-cubes answer, which factors $27x^3 - 64$; the choice with $-24x$ doubles the product $ab$ as though this were a squared binomial — the cube formula uses only one copy.)',
    },
    {
      q: 'Factor $x^3 - 343$.',
      choices: [
        '$(x-7)(x^2-7x+49)$',
        '$(x+7)(x^2-7x+49)$',
        '$(x-7)(x^2+7x+49)$',
        '$(x-7)(x^2+14x+49)$',
      ],
      answer: 2,
      solution:
        'Here $343 = 7^3$, so this is a difference of cubes with $a = x$, $b = 7$. The binomial keeps the minus and the middle term of the trinomial flips to plus: $x^3 - 343 = (x-7)(x^2 + 7x + 49)$. Check at $x = 1$: the original is $1 - 343 = -342$, and $(-6)(1 + 7 + 49) = (-6)(57) = -342$ ✓. (The choice $(x-7)(x^2-7x+49)$ copies the minus into the middle instead of flipping it, giving $(-6)(43) = -258$; the choice $(x+7)(x^2-7x+49)$ is the sum-of-cubes factorization, which belongs to $x^3 + 343$; the choice with $+14x$ uses $2ab$ in the middle, which is the perfect-square pattern, not the cube pattern.)',
    },
    {
      q: 'Factor $54x^3 + 250$ completely.',
      choices: [
        '$2(3x+5)(9x^2+15x+25)$',
        '$(3x+5)(9x^2-15x+25)$',
        '$2(3x-5)(9x^2+15x+25)$',
        '$2(3x+5)(9x^2-15x+25)$',
      ],
      answer: 3,
      solution:
        'Always pull out common factors first: $54x^3 + 250 = 2(27x^3 + 125)$. Now $27x^3 = (3x)^3$ and $125 = 5^3$, so the sum-of-cubes formula with $a = 3x$, $b = 5$ gives $27x^3 + 125 = (3x+5)(9x^2 - 15x + 25)$. Altogether: $2(3x+5)(9x^2 - 15x + 25)$. Check at $x = 1$: the original is $54 + 250 = 304$, and $2 \\cdot 8 \\cdot (9 - 15 + 25) = 2 \\cdot 8 \\cdot 19 = 304$ ✓. (The choice with $+15x$ fails to flip the middle sign and gives $2 \\cdot 8 \\cdot 49 = 784$; the choice $(3x+5)(9x^2-15x+25)$ drops the common factor $2$ and gives only $152$, half of what it should be; the choice $2(3x-5)(9x^2+15x+25)$ uses the difference formula on a sum and gives $-196$.)',
    },
  ],
  // c6 — rationalizing a two-term denominator. The denominator becomes a
  // difference of squares, and then the fraction must actually be REDUCED. One
  // version has the radical up top; one is a difference of two fractions.
  [
    {
      q: 'Rationalize and simplify $\\frac{12}{\\sqrt{11} - 3}$.',
      choices: [
        '$6\\sqrt{11} - 18$',
        '$\\frac{3\\sqrt{11} + 9}{2}$',
        '$6\\sqrt{11} + 18$',
        '$12\\sqrt{11} + 36$',
      ],
      answer: 2,
      solution:
        'Multiply top and bottom by the conjugate $\\sqrt{11} + 3$. The bottom becomes $(\\sqrt{11})^2 - 3^2 = 11 - 9 = 2$, and the top becomes $12(\\sqrt{11} + 3) = 12\\sqrt{11} + 36$. Now reduce: $\\frac{12\\sqrt{11} + 36}{2} = 6\\sqrt{11} + 18$. Numeric check: $\\sqrt{11} \\approx 3.32$, so the original is about $\\frac{12}{0.32} \\approx 37.9$, and $6(3.32) + 18 \\approx 37.9$ ✓. (The choice $6\\sqrt{11} - 18$ forgets that the conjugate flips the sign, so the numerator keeps the wrong one; the choice $\\frac{3\\sqrt{11}+9}{2}$ computes the denominator as $11 - 3 = 8$ instead of $11 - 3^2 = 2$ — the $3$ has to be squared; the choice $12\\sqrt{11} + 36$ never divides by the $2$ at all.)',
    },
    {
      q: 'Rationalize and simplify $\\frac{\\sqrt{5}}{3 - \\sqrt{5}}$.',
      choices: [
        '$\\frac{5 - 3\\sqrt{5}}{4}$',
        '$\\frac{5 + 3\\sqrt{5}}{4}$',
        '$5 + 3\\sqrt{5}$',
        '$\\frac{5 + 3\\sqrt{5}}{14}$',
      ],
      answer: 1,
      solution:
        'A radical on top changes nothing — the conjugate of the bottom is $3 + \\sqrt{5}$, so multiply top and bottom by it. The bottom becomes $3^2 - (\\sqrt{5})^2 = 9 - 5 = 4$. The top becomes $\\sqrt{5}(3 + \\sqrt{5}) = 3\\sqrt{5} + 5$. So the answer is $\\frac{5 + 3\\sqrt{5}}{4}$, and nothing reduces, since neither $5$ nor $3$ shares a factor with $4$. Numeric check: $\\sqrt{5} \\approx 2.236$, so the original is about $\\frac{2.236}{0.764} \\approx 2.93$, and $\\frac{5 + 6.71}{4} \\approx 2.93$ ✓. (The choice $\\frac{5 - 3\\sqrt{5}}{4}$ gets the bottom right but builds the top from $\\sqrt{5} \\cdot (\\sqrt{5} - 3) = 5 - 3\\sqrt{5}$, writing the conjugate backwards; it comes out negative, while the original is a positive number over a positive number. The choice $\\frac{5 + 3\\sqrt{5}}{14}$ computes the bottom as $9 + 5$ instead of $9 - 5$; the choice $5 + 3\\sqrt{5}$ stops before dividing by the $4$.)',
    },
    {
      q: 'Simplify $\\frac{4}{\\sqrt{7} + \\sqrt{5}} - \\frac{4}{\\sqrt{7} - \\sqrt{5}}$.',
      choices: ['$4\\sqrt{7}$', '$0$', '$4\\sqrt{5}$', '$-4\\sqrt{5}$'],
      answer: 3,
      solution:
        'Rationalize each piece on its own. Both denominators turn into $(\\sqrt{7})^2 - (\\sqrt{5})^2 = 7 - 5 = 2$, so $\\frac{4}{\\sqrt{7}+\\sqrt{5}} = \\frac{4(\\sqrt{7}-\\sqrt{5})}{2} = 2\\sqrt{7} - 2\\sqrt{5}$ and $\\frac{4}{\\sqrt{7}-\\sqrt{5}} = 2\\sqrt{7} + 2\\sqrt{5}$. Subtract: the $2\\sqrt{7}$ terms cancel and the $\\sqrt{5}$ terms pile up, giving $-2\\sqrt{5} - 2\\sqrt{5} = -4\\sqrt{5}$. Numeric check: $0.82 - 9.76 \\approx -8.94$, and $-4\\sqrt{5} \\approx -8.94$ ✓. (The choice $4\\sqrt{7}$ ADDS the two fractions instead of subtracting; the choice $4\\sqrt{5}$ subtracts in the wrong order — the second fraction is the bigger one, so the answer must be negative; the choice $0$ assumes two fractions with the same numerator must cancel, but their denominators are nowhere near equal.)',
    },
  ],
  // c7 — the factored difference of squares used as a bridge between the sum and
  // the difference of two numbers. Each version asks for a different one of the
  // three quantities, and one asks for something built from both numbers.
  [
    {
      q: 'If $x + y = 9$ and $x^2 - y^2 = 63$, what is $x - y$?',
      choices: ['$7$', '$\\frac{1}{7}$', '$54$', '$72$'],
      answer: 0,
      solution:
        'Factor: $x^2 - y^2 = (x+y)(x-y)$, so $9(x-y) = 63$ and $x - y = \\frac{63}{9} = 7$. No need to find $x$ and $y$ at all — but for the curious, $x = 8$ and $y = 1$, and $64 - 1 = 63$ ✓. (The choice $\\frac{1}{7}$ divides the wrong way round, $\\frac{9}{63}$; the choice $54$ subtracts $9$ from $63$; the choice $72$ adds them — the two facts are joined by MULTIPLICATION in the formula, so undoing it means dividing.)',
    },
    {
      q: 'If $a - b = 3$ and $a^2 - b^2 = 51$, what is $a$?',
      choices: ['$10$', '$17$', '$7$', '$20$'],
      answer: 0,
      solution:
        'Since $a^2 - b^2 = (a+b)(a-b)$, we get $3(a+b) = 51$, so $a + b = 17$. Now we know the sum and the difference: adding them gives $2a = 17 + 3 = 20$, so $a = 10$ (and $b = 7$). Check forward: $100 - 49 = 51$ ✓ and $10 - 7 = 3$ ✓. (The choice $17$ reports $a + b$, the number found on the way; the choice $7$ reports $b$ instead of $a$; the choice $20$ stops at $2a = 20$ and forgets to halve.)',
    },
    {
      q: 'Positive numbers $m$ and $n$ satisfy $m + n = 15$ and $m^2 - n^2 = 45$. What is $mn$?',
      choices: ['$36$', '$54$', '$45$', '$3$'],
      answer: 1,
      solution:
        'From $(m+n)(m-n) = 45$ and $m + n = 15$, the difference is $m - n = \\frac{45}{15} = 3$. Sum $15$ and difference $3$ means the two numbers sit one step on each side of $\\frac{15}{2}$, and that step is half of $3$: they are $9$ and $6$. So $mn = 9 \\cdot 6 = 54$. Check forward: $9 + 6 = 15$ ✓ and $81 - 36 = 45$ ✓. (The choice $36$ steps the FULL difference off the sum, taking $m = 15 - 3 = 12$ and $n = 3$; the choice $3$ reports $m - n$, the quantity found on the way; the choice $45$ copies the number the problem handed you.)',
    },
  ],
  // c8 — the add-a-constant trick on an equation with a unique positive-integer
  // solution. The magic constant is the PRODUCT of the two coefficients, the
  // factors come out criss-crossed, and each answer still has to be un-shifted.
  [
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 2x + 5y = 58$. What is $x$?',
      choices: ['$2$', '$17$', '$12$', '$14$'],
      answer: 2,
      solution:
        'The magic constant is the product of the coefficients, $2 \\cdot 5 = 10$. Add it to both sides: $xy + 2x + 5y + 10 = 68$, and the left side factors criss-crossed as $(x+5)(y+2) = 68$. Since $x \\geq 1$ and $y \\geq 1$, we need $x + 5 \\geq 6$ and $y + 2 \\geq 3$. The factor pairs of $68$ are $1 \\times 68$, $2 \\times 34$, $4 \\times 17$, $17 \\times 4$, $34 \\times 2$, $68 \\times 1$, and only $17 \\times 4$ fits both bounds. So $x + 5 = 17$ and $y + 2 = 4$, giving $x = 12$ and $y = 2$. Check: $24 + 24 + 10 = 58$ ✓. (The choice $17$ reports the factor $x + 5$ without un-shifting it; the choice $2$ reports $y$ instead of $x$; the choice $14$ reports $x + y$.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy - 4x + 3y = 25$. What is $xy$?',
      choices: ['$170$', '$13$', '$15$', '$50$'],
      answer: 3,
      solution:
        'Negative coefficients are welcome — the magic constant is still the product, $(-4)(3) = -12$. SUBTRACT $12$ from both sides: $xy - 4x + 3y - 12 = 13$, and the left side factors as $(x+3)(y-4) = 13$. Now $13$ is prime, and $x + 3 \\geq 4$, so the only possibility is $x + 3 = 13$ and $y - 4 = 1$: that is $x = 10$, $y = 5$. Check: $50 - 40 + 15 = 25$ ✓. So $xy = 50$. (The choice $170$ ADDS $12$ instead of subtracting, getting $(x+3)(y-4) = 37$ and $x = 34$; the choice $13$ multiplies the two shifted factors instead of $x$ and $y$; the choice $15$ reports $x + y$.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy + 6x + 2y = 43$. What is $x + y$?',
      choices: ['$8$', '$16$', '$12$', '$15$'],
      answer: 0,
      solution:
        'Add the magic constant $6 \\cdot 2 = 12$ to both sides: $xy + 6x + 2y + 12 = 55$, which factors criss-crossed as $(x+2)(y+6) = 55$. The divisors of $55$ are $1$, $5$, $11$, $55$, and we need $x + 2 \\geq 3$ and $y + 6 \\geq 7$. Only $x + 2 = 5$ with $y + 6 = 11$ works, so $x = 3$ and $y = 5$. Check: $15 + 18 + 10 = 43$ ✓. So $x + y = 8$. (The choice $16$ adds the two shifted factors $5 + 11$ without un-shifting them; the choice $12$ uses the SUM of the coefficients, $6 + 2 = 8$, as the magic constant, which leads to $(x+2)(y+6) = 51$ and the bogus pair $x = 1$, $y = 11$ — and that pair gives $11 + 6 + 22 = 39$, not $43$; the choice $15$ reports $xy$.)',
    },
  ],
  // c9 — the cube identity fed by a sum and a product. Two versions run it
  // forwards (one on a difference of cubes, where the middle sign flips); one
  // runs it backwards to recover the product.
  [
    {
      q: 'If $m + n = 8$ and $mn = 15$, what is $m^3 + n^3$?',
      choices: ['$152$', '$512$', '$272$', '$32$'],
      answer: 0,
      solution:
        'First get $m^2 + n^2$ by squaring the sum and removing the middle: $m^2 + n^2 = (m+n)^2 - 2mn = 64 - 30 = 34$. Then $m^3 + n^3 = (m+n)(m^2 - mn + n^2) = 8(34 - 15) = 8 \\cdot 19 = 152$. Check: $m$ and $n$ are $3$ and $5$, and $27 + 125 = 152$ ✓. (The choice $512$ is $8^3$, assuming cubing distributes over addition — it does not; the choice $272$ is $8 \\cdot 34$, forgetting to subtract the $mn$ inside the trinomial; the choice $32$ subtracts $2mn$ inside the trinomial, but the cube formula uses only ONE copy of $mn$.)',
    },
    {
      q: 'If $p - q = 3$ and $pq = 10$, what is $p^3 - q^3$?',
      choices: ['$27$', '$117$', '$87$', '$147$'],
      answer: 1,
      solution:
        'Square the difference this time: $(p-q)^2 = p^2 - 2pq + q^2 = 9$, so $p^2 + q^2 = 9 + 2(10) = 29$. The difference-of-cubes formula is $p^3 - q^3 = (p-q)(p^2 + pq + q^2)$, with a PLUS in the middle: $3(29 + 10) = 3 \\cdot 39 = 117$. Check: $p$ and $q$ are $5$ and $2$, and $125 - 8 = 117$ ✓. (The choice $27$ is $3^3$, cubing the difference itself; the choice $87$ is $3 \\cdot 29$, forgetting to ADD the $pq$; the choice $147$ adds $2pq$ instead of one $pq$.)',
    },
    {
      q: 'If $a + b = 6$ and $a^3 + b^3 = 72$, what is $ab$?',
      choices: ['$12$', '$4$', '$24$', '$8$'],
      answer: 3,
      solution:
        'Run the formula backwards. From $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ we get $72 = 6(a^2 - ab + b^2)$, so $a^2 - ab + b^2 = 12$. Now $a^2 + b^2 = (a+b)^2 - 2ab = 36 - 2ab$, so the trinomial is $36 - 2ab - ab = 36 - 3ab$. Setting $36 - 3ab = 12$ gives $3ab = 24$ and $ab = 8$. Check: with sum $6$ and product $8$ the numbers are $2$ and $4$, and $8 + 64 = 72$ ✓. (The choice $12$ stops at the value of the trinomial; the choice $24$ collects only ONE $ab$, solving $36 - ab = 12$; the choice $4$ divides the $24$ by $6$ instead of by $3$.)',
    },
  ],
  // c10 — a fraction with two-term radicals top AND bottom. Multiplying by the
  // conjugate squares the numerator, so a cross term survives up top and the
  // whole thing still has to be reduced.
  [
    {
      q: 'Simplify $\\frac{\\sqrt{7} + \\sqrt{3}}{\\sqrt{7} - \\sqrt{3}}$.',
      choices: [
        '$10 + 2\\sqrt{21}$',
        '$\\frac{5 - \\sqrt{21}}{2}$',
        '$\\frac{5 + \\sqrt{21}}{2}$',
        '$\\frac{5 + \\sqrt{21}}{5}$',
      ],
      answer: 2,
      solution:
        'Multiply top and bottom by the conjugate $\\sqrt{7} + \\sqrt{3}$. The bottom becomes $7 - 3 = 4$. The top becomes $(\\sqrt{7}+\\sqrt{3})^2 = 7 + 2\\sqrt{21} + 3 = 10 + 2\\sqrt{21}$ — the cross term survives here, because squaring a sum is not the same as multiplying conjugates. Reduce by $2$: $\\frac{10 + 2\\sqrt{21}}{4} = \\frac{5 + \\sqrt{21}}{2}$. Numeric check: $\\frac{4.38}{0.91} \\approx 4.79$, and $\\frac{5 + 4.58}{2} \\approx 4.79$ ✓. (The choice $10 + 2\\sqrt{21}$ never divides by the $4$; the choice $\\frac{5-\\sqrt{21}}{2}$ is the fraction turned upside down, $\\frac{\\sqrt{7}-\\sqrt{3}}{\\sqrt{7}+\\sqrt{3}}$ — it is about $0.21$, but the original has the BIGGER number on top, so its value must be more than $1$; the choice $\\frac{5+\\sqrt{21}}{5}$ computes the bottom as $7 + 3$ instead of $7 - 3$.)',
    },
    {
      q: 'Simplify $\\frac{\\sqrt{6} - \\sqrt{2}}{\\sqrt{6} + \\sqrt{2}}$.',
      choices: ['$2 + \\sqrt{3}$', '$8 - 4\\sqrt{3}$', '$\\frac{2 - \\sqrt{3}}{2}$', '$2 - \\sqrt{3}$'],
      answer: 3,
      solution:
        'The conjugate of the bottom is $\\sqrt{6} - \\sqrt{2}$, so multiply top and bottom by that. The bottom becomes $6 - 2 = 4$; the top becomes $(\\sqrt{6}-\\sqrt{2})^2 = 6 - 2\\sqrt{12} + 2 = 8 - 4\\sqrt{3}$, since $\\sqrt{12} = 2\\sqrt{3}$. Reduce by $4$: $\\frac{8 - 4\\sqrt{3}}{4} = 2 - \\sqrt{3}$. Numeric check: $\\frac{1.04}{3.86} \\approx 0.27$, and $2 - 1.73 \\approx 0.27$ ✓. (The choice $2 + \\sqrt{3}$ is the fraction turned upside down, $\\frac{\\sqrt{6}+\\sqrt{2}}{\\sqrt{6}-\\sqrt{2}}$ — it is about $3.73$, but the original has the SMALLER number on top, so its value has to be less than $1$; the choice $8 - 4\\sqrt{3}$ forgets to divide by the $4$; the choice $\\frac{2-\\sqrt{3}}{2}$ computes the bottom as $6 + 2 = 8$ instead of $6 - 2 = 4$.)',
    },
    {
      q: 'Simplify $\\frac{\\sqrt{11} + 3}{\\sqrt{11} - 3}$.',
      choices: [
        '$10 + 3\\sqrt{11}$',
        '$20 + 6\\sqrt{11}$',
        '$10 - 3\\sqrt{11}$',
        '$\\frac{10 + 3\\sqrt{11}}{10}$',
      ],
      answer: 0,
      solution:
        'Multiply top and bottom by $\\sqrt{11} + 3$. The bottom is a difference of squares: $11 - 9 = 2$. The top is a squared sum: $(\\sqrt{11}+3)^2 = 11 + 6\\sqrt{11} + 9 = 20 + 6\\sqrt{11}$. Divide by $2$: $10 + 3\\sqrt{11}$. Numeric check: $\\sqrt{11} \\approx 3.32$, so the original is about $\\frac{6.32}{0.32} \\approx 19.9$, and $10 + 3(3.32) \\approx 19.9$ ✓. (The choice $20 + 6\\sqrt{11}$ skips the division by $2$; the choice $10 - 3\\sqrt{11}$ is the fraction turned upside down, $\\frac{\\sqrt{11}-3}{\\sqrt{11}+3}$, a tiny number near $0.05$ and nowhere near $19.9$; the choice $\\frac{10+3\\sqrt{11}}{10}$ computes the bottom as $11 + 9 = 20$ — but the cross terms cancel, so it is $11 - 9$.)',
    },
  ],
  // c11 — a perfect-square trinomial hiding in a pile of big numbers. Spotting
  // the $2ab$ turns three ugly multiplications into one easy square. One version
  // runs the pattern backwards and keeps BOTH square roots in play.
  [
    {
      q: 'Compute $478^2 + 2 \\cdot 478 \\cdot 22 + 22^2$.',
      choices: ['$207{,}936$', '$228{,}968$', '$250{,}000$', '$500$'],
      answer: 2,
      solution:
        'This is the pattern $a^2 + 2ab + b^2 = (a+b)^2$ with $a = 478$ and $b = 22$. So the whole pile is $(478 + 22)^2 = 500^2 = 250{,}000$ — one easy square instead of three ugly products. (The choice $207{,}936$ is $(478 - 22)^2 = 456^2$, from reading the middle sign as a minus; the choice $228{,}968$ is $478^2 + 22^2$ with the middle term dropped; the choice $500$ reports $a + b$ and forgets to square it.)',
    },
    {
      q: 'A number $N$ satisfies $N^2 - 2 \\cdot N \\cdot 18 + 324 = 4900$. What is the largest possible value of $N$?',
      choices: ['$88$', '$70$', '$52$', '$-52$'],
      answer: 0,
      solution:
        'Since $324 = 18^2$, the left side is the perfect square $(N - 18)^2$. So $(N-18)^2 = 4900$, and a square equals $4900$ when the thing being squared is $70$ OR $-70$: $N - 18 = 70$ gives $N = 88$, and $N - 18 = -70$ gives $N = -52$. The larger is $88$. Check forward: $88^2 - 2(88)(18) + 324 = 7744 - 3168 + 324 = 4900$ ✓. (The choice $70$ stops at $N - 18$ and never adds the $18$ back; the choice $-52$ is the OTHER solution, the smaller one; the choice $52$ subtracts the $18$ instead of adding it.)',
    },
    {
      q: 'Compute $\\frac{550^2 - 2 \\cdot 550 \\cdot 50 + 50^2}{100}$.',
      choices: ['$3600$', '$3050$', '$250{,}000$', '$2500$'],
      answer: 3,
      solution:
        'The top matches $a^2 - 2ab + b^2 = (a-b)^2$ with $a = 550$ and $b = 50$, so it equals $(550 - 50)^2 = 500^2 = 250{,}000$. Dividing by $100$ gives $2500$. Check forward: $302500 - 55000 + 2500 = 250000$ ✓. (The choice $3600$ reads the middle sign as a plus and computes $\\frac{600^2}{100}$; the choice $3050$ drops the middle term, computing $\\frac{302500 + 2500}{100}$; the choice $250{,}000$ is the top of the fraction with the division forgotten.)',
    },
  ],
  // c12 — count the positive-integer solutions. After the shift, the count is
  // the number of factor pairs that survive BOTH lower bounds, and ordered pairs
  // means a pair and its reverse count twice. One version asks for an extreme
  // instead of a count.
  [
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy - 2x - 2y = 5$?',
      choices: ['$2$', '$3$', '$6$', '$9$'],
      answer: 1,
      solution:
        'The magic constant is $(-2)(-2) = 4$. Adding it to both sides gives $xy - 2x - 2y + 4 = 9$, that is $(x-2)(y-2) = 9$. Could a factor be negative? With $x \\geq 1$ each factor is at least $-1$, and two numbers between $-1$ and $-1$ cannot multiply to $9$, so both factors are positive. The factor pairs of $9$ are $1 \\times 9$, $3 \\times 3$, $9 \\times 1$, giving $(x,y) = (3,11)$, $(5,5)$, $(11,3)$ — three ordered pairs. Check $(5,5)$: $25 - 10 - 10 = 5$ ✓. (The choice $2$ counts unordered pairs and merges $(3,11)$ with $(11,3)$; the choice $6$ throws in the negative factor pairs $(-1)(-9)$, $(-3)(-3)$, $(-9)(-1)$, which force $x$ or $y$ below $1$; the choice $9$ reports the product itself instead of counting anything.)',
    },
    {
      q: 'How many ordered pairs of positive integers $(x, y)$ satisfy $xy + x + 2y = 34$?',
      choices: ['$6$', '$9$', '$3$', '$7$'],
      answer: 0,
      solution:
        'The magic constant is $1 \\cdot 2 = 2$: adding it gives $xy + x + 2y + 2 = 36$, that is $(x+2)(y+1) = 36$. Since $x \\geq 1$ and $y \\geq 1$, we need $x + 2 \\geq 3$ AND $y + 1 \\geq 2$. Walk the nine factor pairs of $36$ in order: $1 \\times 36$ and $2 \\times 18$ fail the first bound, $36 \\times 1$ fails the second, and the surviving six are $3 \\times 12$, $4 \\times 9$, $6 \\times 6$, $9 \\times 4$, $12 \\times 3$, $18 \\times 2$, giving $(1,11)$, $(2,8)$, $(4,5)$, $(7,3)$, $(10,2)$, $(16,1)$. Check $(4,5)$: $20 + 4 + 10 = 34$ ✓. (The choice $9$ counts every factor pair of $36$ and forgets that $x$ and $y$ must be at least $1$; the choice $7$ checks the bound on $x$ and drops $1 \\times 36$ and $2 \\times 18$, but never checks $y$, so it keeps $36 \\times 1$ — that pair gives $y = 0$, and zero is not a positive integer; the choice $3$ lists each factor pair only once and stops at $6 \\times 6$, but this equation is not symmetric — $x$ carries a $1$ and $y$ carries a $2$ — so $3 \\times 12$ and $12 \\times 3$ describe two genuinely different pairs and both count.)',
    },
    {
      q: 'Positive integers $x$ and $y$ satisfy $xy - 5x - 5y = 3$. What is the largest possible value of $x + y$?',
      choices: ['$29$', '$21$', '$33$', '$39$'],
      answer: 3,
      solution:
        'The magic constant is $(-5)(-5) = 25$: adding it gives $(x-5)(y-5) = 28$. Both factors must be positive here, since two numbers no smaller than $-4$ cannot multiply to $28$. The factor pairs of $28$ are $1 \\times 28$, $2 \\times 14$, $4 \\times 7$ and their reverses, giving $(x,y) = (6,33)$, $(7,19)$, $(9,12)$ and reverses. To make $x + y$ big, make the factor pair as LOPSIDED as possible: $1 \\times 28$ gives $6 + 33 = 39$, while $2 \\times 14$ gives $26$ and $4 \\times 7$ gives only $21$. So the largest is $39$. Check $(6,33)$: $198 - 30 - 165 = 3$ ✓. (The choice $29$ adds the two factors $1 + 28$ without adding $5$ back to each; the choice $33$ reports the larger of the two numbers instead of their sum; the choice $21$ picks the most balanced factor pair, which makes the sum as SMALL as possible.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 11,
  challenge,
}
