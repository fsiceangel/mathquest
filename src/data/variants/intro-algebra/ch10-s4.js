// Introduction to Algebra chapter 10 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD: each claimed root is substituted back into the ORIGINAL equation,
//    every factorization is multiplied back out term by term, and every Vieta
//    shortcut is confirmed against the actual roots whenever they are nice.
//  - These are the chapter's hard problems, so a variation stays hard: the
//    leading coefficient stays bigger than $1$, the rearranging step stays in,
//    the negative root that the story rejects stays on the page, and the
//    question keeps asking for something one step past the roots themselves.
//  - Each distractor is one named mistake, and the name is stated in a
//    parenthetical at the end of the solution. The traps that run through the
//    whole file: COPYING THE SIGN out of a factor instead of flipping it,
//    STOPPING AT THE SUBSTITUTED VARIABLE instead of returning to $x$,
//    FORGETTING TO DIVIDE BY $a$ in the Vieta formulas, and ANSWERING THE ROOT
//    when the question asked for something built from the roots.
//  - No two choices inside an item name the same number, the same pair of
//    numbers, or the same equation, in any form.

const challenge = [
  // c1 — solve a monic quadratic whose constant term is negative, so the two
  // numbers have opposite signs and the roots flip sign coming out of the
  // factors. One version also has to be rearranged first.
  [
    {
      q: 'Solve $x^2 - 3x - 40 = 0$.',
      choices: [
        '$x = -8$ or $x = 5$',
        '$x = -8$ or $x = -5$',
        '$x = 8$ or $x = -5$',
        '$x = 8$ or $x = 5$',
      ],
      answer: 2,
      solution:
        'We need two numbers with sum $-3$ and product $-40$. The negative product says the signs are opposite, and the negative sum says the bigger one is negative: $-8$ and $5$. So $x^2 - 3x - 40 = (x - 8)(x + 5) = 0$, giving $x = 8$ or $x = -5$ — the OPPOSITES of the numbers inside the factors. Check both forward: $64 - 24 - 40 = 0$ ✓ and $25 + 15 - 40 = 0$ ✓. (The choice $x = -8$ or $x = 5$ copies the signs straight out of the pair instead of flipping them — check it: $64 + 24 - 40 = 48$, not $0$; the choice $x = -8$ or $x = -5$ makes both numbers negative, which would give a product of $+40$; the choice $x = 8$ or $x = 5$ makes both positive, which would give a sum of $13$.)',
    },
    {
      q: 'Solve $x^2 + 4x - 45 = 0$.',
      choices: [
        '$x = -9$ or $x = 5$',
        '$x = 9$ or $x = -5$',
        '$x = 9$ or $x = 5$',
        '$x = -9$ or $x = -5$',
      ],
      answer: 0,
      solution:
        'We need sum $4$ and product $-45$: opposite signs, with the bigger number positive, so $9$ and $-5$. That gives $(x + 9)(x - 5) = 0$, so $x = -9$ or $x = 5$. Check both forward: $81 - 36 - 45 = 0$ ✓ and $25 + 20 - 45 = 0$ ✓. (The choice $x = 9$ or $x = -5$ hands the positive sign to the wrong root — substituting $x = 9$ gives $81 + 36 - 45 = 72$; the choice $x = 9$ or $x = 5$ takes both numbers positive, which needs a product of $+45$; the choice $x = -9$ or $x = -5$ takes both negative, which also needs a product of $+45$.)',
    },
    {
      q: 'Solve $x^2 = 3x + 54$.',
      choices: [
        '$x = -9$ or $x = 6$',
        '$x = 9$ or $x = 6$',
        '$x = -9$ or $x = -6$',
        '$x = 9$ or $x = -6$',
      ],
      answer: 3,
      solution:
        'The zero-product property needs a zero, so move everything to one side first: $x^2 - 3x - 54 = 0$. Now find sum $-3$ and product $-54$: opposite signs with the bigger one negative, so $-9$ and $6$. Then $(x - 9)(x + 6) = 0$, giving $x = 9$ or $x = -6$. Check both in the ORIGINAL equation: $9^2 = 81$ and $3(9) + 54 = 81$ ✓; $(-6)^2 = 36$ and $3(-6) + 54 = 36$ ✓. (The choice $x = -9$ or $x = 6$ copies the signs out of the pair without flipping them; the choice $x = 9$ or $x = 6$ makes both roots positive, which would need a product of $+54$; the choice $x = -9$ or $x = -6$ makes both negative, which would need the sum to be $+3$ after flipping.)',
    },
  ],
  // c2 — factor a quadratic with a leading coefficient bigger than 1 and a
  // negative constant: split the middle term, then group. Expanding is the
  // referee, and the near-miss choices only betray themselves in the middle.
  [
    {
      q: 'Factor $6x^2 - 7x - 20$.',
      choices: [
        '$(2x + 5)(3x - 4)$',
        '$(2x - 5)(3x + 4)$',
        '$(6x - 5)(x + 4)$',
        '$(2x - 4)(3x + 5)$',
      ],
      answer: 1,
      solution:
        'Here $a = 6$ and $c = -20$, so we need two numbers with product $ac = -120$ and sum $-7$: the numbers $-15$ and $8$. Split the middle term and group: $6x^2 - 15x + 8x - 20 = 3x(2x - 5) + 4(2x - 5) = (2x - 5)(3x + 4)$. Check by expanding: $6x^2 + 8x - 15x - 20 = 6x^2 - 7x - 20$ ✓. (The choice $(2x + 5)(3x - 4)$ swaps the two signs and expands to $6x^2 + 7x - 20$ — right ends, wrong middle; the choice $(6x - 5)(x + 4)$ keeps the $6$ in one factor and expands to $6x^2 + 19x - 20$; the choice $(2x - 4)(3x + 5)$ pairs the numbers the other way and expands to $6x^2 - 2x - 20$, and it also hides a common factor of $2$ that the original does not have.)',
    },
    {
      q: 'Factor $10x^2 + 11x - 6$.',
      choices: [
        '$(2x - 3)(5x + 2)$',
        '$(10x - 3)(x + 2)$',
        '$(5x + 6)(2x - 1)$',
        '$(2x + 3)(5x - 2)$',
      ],
      answer: 3,
      solution:
        'We need product $ac = 10 \\cdot (-6) = -60$ and sum $11$: the numbers $15$ and $-4$. Split and group: $10x^2 + 15x - 4x - 6 = 5x(2x + 3) - 2(2x + 3) = (2x + 3)(5x - 2)$. Check by expanding: $10x^2 - 4x + 15x - 6 = 10x^2 + 11x - 6$ ✓. (The choice $(2x - 3)(5x + 2)$ swaps both signs and expands to $10x^2 - 11x - 6$; the choice $(10x - 3)(x + 2)$ keeps the $10$ in one factor and expands to $10x^2 + 17x - 6$; the choice $(5x + 6)(2x - 1)$ splits the $6$ as $6$ and $1$ instead of $3$ and $2$, and expands to $10x^2 + 7x - 6$.)',
    },
    {
      q: 'Which of these expressions is a factor of $12x^2 - x - 6$?',
      choices: ['$3x - 2$', '$4x + 3$', '$3x + 2$', '$2x + 3$'],
      answer: 2,
      solution:
        'Factor it first. We need product $ac = 12 \\cdot (-6) = -72$ and sum $-1$: the numbers $-9$ and $8$. Split and group: $12x^2 - 9x + 8x - 6 = 3x(4x - 3) + 2(4x - 3) = (4x - 3)(3x + 2)$. Check by expanding: $12x^2 + 8x - 9x - 6 = 12x^2 - x - 6$ ✓. So the two factors are $4x - 3$ and $3x + 2$, and $3x + 2$ is on the list. A second way to check a single candidate: $3x + 2 = 0$ at $x = -\\frac{2}{3}$, and $12 \\cdot \\frac{4}{9} + \\frac{2}{3} - 6 = \\frac{16}{3} + \\frac{2}{3} - 6 = 0$ ✓. (The choice $3x - 2$ flips the sign, and $x = \\frac{2}{3}$ gives $\\frac{16}{3} - \\frac{2}{3} - 6 = -\\frac{4}{3}$, not $0$; the choice $4x + 3$ flips the sign of the OTHER factor, and $x = -\\frac{3}{4}$ gives $\\frac{27}{4} + \\frac{3}{4} - 6 = \\frac{3}{2}$; the choice $2x + 3$ comes from splitting the $12$ as $2 \\cdot 6$, and $(2x + 3)(6x - 2)$ expands to $12x^2 + 14x - 6$.)',
    },
  ],
  // c3 — difference of squares used on plain numbers, where squaring by hand is
  // the thing you are trying to avoid. One version runs the pattern backwards
  // to factor a four-digit number.
  [
    {
      q: 'Compute $64^2 - 36^2$ without squaring either number.',
      choices: ['$28$', '$100$', '$784$', '$2800$'],
      answer: 3,
      solution:
        'Use $a^2 - b^2 = (a - b)(a + b)$ with $a = 64$ and $b = 36$: the difference is $64 - 36 = 28$ and the sum is $64 + 36 = 100$, so the answer is $28 \\cdot 100 = 2800$. Check forward the slow way: $64^2 = 4096$ and $36^2 = 1296$, and $4096 - 1296 = 2800$ ✓. (The choice $28$ reports only the difference factor; the choice $100$ reports only the sum factor; the choice $784$ is $28^2$, which is $(64 - 36)^2$ — subtracting first and then squaring is a completely different operation from squaring first and then subtracting.)',
    },
    {
      q: 'Compute $103^2 - 97^2$ in your head.',
      choices: ['$600$', '$1200$', '$200$', '$36$'],
      answer: 1,
      solution:
        'Difference of squares: $103^2 - 97^2 = (103 - 97)(103 + 97) = 6 \\cdot 200 = 1200$. Check forward: $103^2 = 10609$ and $97^2 = 9409$, and $10609 - 9409 = 1200$ ✓. (The choice $600$ uses the AVERAGE of the two numbers, $100$, in place of their sum $200$; the choice $200$ reports only the sum factor; the choice $36$ is $6^2$, from subtracting first and then squaring.)',
    },
    {
      q: 'The number $9991$ equals $100^2 - 3^2$. Write $9991$ as a product of two whole numbers, each bigger than $1$.',
      choices: ['$97 \\times 103$', '$99 \\times 101$', '$103 \\times 103$', '$97 \\times 97$'],
      answer: 0,
      solution:
        'Run the pattern backwards: $a^2 - b^2 = (a - b)(a + b)$ with $a = 100$ and $b = 3$ gives $9991 = (100 - 3)(100 + 3) = 97 \\cdot 103$. Check forward by multiplying: $97 \\cdot 103 = 97 \\cdot 100 + 97 \\cdot 3 = 9700 + 291 = 9991$ ✓. (The choice $99 \\times 101$ comes from reading the subtracted square as $1^2$ instead of $3^2$, and multiplies to $9999$; the choice $103 \\times 103$ uses the factor $a + b$ twice and gives $10609$; the choice $97 \\times 97$ uses $a - b$ twice and gives $9409$ — the whole point of the pattern is that the two factors are DIFFERENT, one below $100$ and one above.)',
    },
  ],
  // c4 — exactly one solution means the quadratic is a perfect square. Two
  // versions solve for the middle coefficient and so have TWO answers; one
  // solves for the constant and has only one.
  [
    {
      q: 'For which values of $k$ does $x^2 + kx + 49 = 0$ have exactly one solution?',
      choices: ['$k = 14$ only', '$k = 14$ or $k = -14$', '$k = 7$ or $k = -7$', '$k = 49$ only'],
      answer: 1,
      solution:
        'Exactly one solution means the left side is a perfect square. The two perfect squares ending in $49$ are $(x + 7)^2 = x^2 + 14x + 49$ and $(x - 7)^2 = x^2 - 14x + 49$, so $k = 14$ or $k = -14$. Check forward: $x^2 + 14x + 49 = (x + 7)^2 = 0$ has the single root $x = -7$ ✓, and $x^2 - 14x + 49 = (x - 7)^2 = 0$ has the single root $x = 7$ ✓. (The choice $k = 14$ only stops at the positive case — a square hides the sign of what is inside it, so both cases count; the choice $k = 7$ or $k = -7$ uses the number $7$ itself instead of the middle term $2 \\cdot 7 = 14$, and $x^2 + 7x + 49$ is not a square; the choice $k = 49$ only copies the constant term into the middle.)',
    },
    {
      q: 'For which value of $c$ does $x^2 - 12x + c = 0$ have exactly one solution?',
      choices: ['$c = 6$', '$c = 144$', '$c = 36$', '$c = -36$'],
      answer: 2,
      solution:
        'For one solution the left side must be a perfect square $(x - r)^2 = x^2 - 2rx + r^2$. Matching the middle term, $2r = 12$, so $r = 6$, and then $c = r^2 = 36$. Check forward: $x^2 - 12x + 36 = (x - 6)^2 = 0$, whose only root is $x = 6$ ✓. Unlike the $k$ questions, this one has a single answer — the constant is not hiding a sign. (The choice $c = 6$ halves the $12$ but forgets to square it, and $x^2 - 12x + 6$ has two roots; the choice $c = 144$ squares the $12$ instead of the half, and $x^2 - 12x + 144$ has NO real roots at all; the choice $c = -36$ flips the sign, and $x^2 - 12x - 36$ again has two roots.)',
    },
    {
      q: 'For which values of $k$ does $4x^2 + kx + 9 = 0$ have exactly one solution?',
      choices: ['$k = 6$ or $k = -6$', '$k = 12$ only', '$k = 36$ only', '$k = 12$ or $k = -12$'],
      answer: 3,
      solution:
        'A perfect square here must be built from $2x$ and $3$, since $(2x)^2 = 4x^2$ and $3^2 = 9$. The two possibilities are $(2x + 3)^2 = 4x^2 + 12x + 9$ and $(2x - 3)^2 = 4x^2 - 12x + 9$, so $k = 12$ or $k = -12$. Check forward: $(2x + 3)^2 = 0$ gives the single root $x = -\\frac{3}{2}$ ✓ and $(2x - 3)^2 = 0$ gives the single root $x = \\frac{3}{2}$ ✓. (The choice $k = 6$ or $k = -6$ ignores the leading $4$ and uses $2 \\cdot 3$ as though the square were $(x \\pm 3)^2$; the choice $k = 12$ only stops at the positive case; the choice $k = 36$ only multiplies $4 \\cdot 9$, which is $ac$, not the middle coefficient.)',
    },
  ],
  // c5 — a quartic (or a shifted quartic) solved by substitution. The whole
  // difficulty is finishing the trip back to x: a y-value can yield two roots,
  // or none at all, and the shift moves where the twins balance.
  [
    {
      q: 'What is the product of ALL the real solutions of $x^4 - 13x^2 + 36 = 0$?',
      choices: ['$36$', '$-36$', '$6$', '$13$'],
      answer: 0,
      solution:
        'Substitute $y = x^2$, so $x^4 = y^2$: the equation becomes $y^2 - 13y + 36 = 0$, which needs sum $13$ and product $36$ — the numbers $4$ and $9$. So $(y - 4)(y - 9) = 0$. Undo the substitution: $x^2 = 4$ gives $x = \\pm 2$ and $x^2 = 9$ gives $x = \\pm 3$, four real solutions in all. Their product is $2 \\cdot (-2) \\cdot 3 \\cdot (-3) = (-4)(-9) = 36$. Check forward with $x = 3$: $81 - 117 + 36 = 0$ ✓. (The choice $-36$ loses track of the signs — there are TWO negative roots, and a product of two negatives is positive; the choice $6$ multiplies only the positive roots $2$ and $3$; the choice $13$ is the sum of the $y$-values, which is not a fact about $x$ at all.)',
    },
    {
      q: 'What is the sum of ALL the real solutions of $(x + 2)^4 - 13(x + 2)^2 + 36 = 0$?',
      choices: ['$0$', '$13$', '$-8$', '$-2$'],
      answer: 2,
      solution:
        'The expression $(x + 2)^2$ repeats, so let $u = (x + 2)^2$: the equation becomes $u^2 - 13u + 36 = (u - 4)(u - 9) = 0$, so $u = 4$ or $u = 9$. Undo the substitution one layer at a time. From $(x + 2)^2 = 4$: $x + 2 = \\pm 2$, so $x = 0$ or $x = -4$. From $(x + 2)^2 = 9$: $x + 2 = \\pm 3$, so $x = 1$ or $x = -5$. The sum is $0 + (-4) + 1 + (-5) = -8$. Here is the tidy way to see it: the four values of $x + 2$ do cancel in pairs, but each root is then shifted down by $2$, and there are four of them, so the sum is $0 - 4 \\cdot 2 = -8$. Check forward with $x = -5$: $(-3)^4 - 13(-3)^2 + 36 = 81 - 117 + 36 = 0$ ✓. (The choice $0$ assumes the negative twins cancel exactly as they would in a plain $x^4$ equation, forgetting the shift; the choice $13$ is the sum of the $u$-values; the choice $-2$ subtracts the shift once instead of once per root.)',
    },
    {
      q: 'How many real solutions does $x^4 - 2x^2 - 15 = 0$ have?',
      choices: ['$4$', '$2$', '$1$', '$3$'],
      answer: 1,
      solution:
        'Let $y = x^2$: the equation becomes $y^2 - 2y - 15 = 0$, and we need sum $-2$ and product $-15$: the numbers $-5$ and $3$, since $-5 + 3 = -2$ and $(-5)(3) = -15$. That gives $(y - 5)(y + 3) = 0$, so $y = 5$ or $y = -3$. Now undo the substitution. $x^2 = 5$ gives $x = \\sqrt{5}$ and $x = -\\sqrt{5}$, two real solutions. But $x^2 = -3$ gives NOTHING real, because a real number squared is never negative. So there are exactly $2$ real solutions. Check forward with $x = \\sqrt{5}$: $x^2 = 5$, so $x^4 = 25$, and $25 - 10 - 15 = 0$ ✓. (The choice $4$ hands two roots to every $y$-value, including the impossible $x^2 = -3$; the choice $1$ keeps only $\\sqrt{5}$ and forgets the negative twin; the choice $3$ keeps both twins and then somehow squeezes one solution out of $x^2 = -3$.)',
    },
  ],
  // c6 — an area word problem where the length is described in terms of the
  // width, so the equation has a leading coefficient. The question always asks
  // for something past the width, and the negative root always has to go.
  [
    {
      q: 'A rectangle has area $65$, and its length is $2$ less than three times its width. What is its perimeter?',
      choices: ['$18$', '$40$', '$65$', '$36$'],
      answer: 3,
      solution:
        'Let the width be $w$; then the length is $3w - 2$, and the area gives $w(3w - 2) = 65$, so $3w^2 - 2w - 65 = 0$. We need product $ac = -195$ and sum $-2$: the numbers $-15$ and $13$. Split and group: $3w^2 - 15w + 13w - 65 = 3w(w - 5) + 13(w - 5) = (w - 5)(3w + 13) = 0$, so $w = 5$ or $w = -\\frac{13}{3}$. A width cannot be negative, so $w = 5$ and the length is $3(5) - 2 = 13$. The perimeter is $2(5 + 13) = 36$. Check the area forward: $5 \\cdot 13 = 65$ ✓. (The choice $18$ is $w + \\ell$, the half-perimeter, and forgets to double; the choice $40$ takes the length as $3w = 15$ and drops the "$2$ less"; the choice $65$ reports the area the problem already gave you.)',
    },
    {
      q: 'A rectangle has area $90$, and its length is $3$ more than twice its width. How long is its longer side?',
      choices: ['$15$', '$6$', '$42$', '$12$'],
      answer: 0,
      solution:
        'Let the width be $w$; the length is $2w + 3$, so $w(2w + 3) = 90$ and $2w^2 + 3w - 90 = 0$. We need product $ac = -180$ and sum $3$: the numbers $15$ and $-12$. Split and group: $2w^2 + 15w - 12w - 90 = w(2w + 15) - 6(2w + 15) = (2w + 15)(w - 6) = 0$, so $w = 6$ or $w = -\\frac{15}{2}$. Discard the negative width. Then $w = 6$ and the length is $2(6) + 3 = 15$, which is the longer side. Check forward: $6 \\cdot 15 = 90$ ✓. (The choice $6$ reports the width, which is the SHORTER side; the choice $42$ is the perimeter $2(6 + 15)$, not a side; the choice $12$ takes the length as $2w$ and drops the "$3$ more".)',
    },
    {
      q: 'A rectangular garden has an area of $84$ square feet, and its width is $5$ feet less than its length. A fence is built around the whole garden. How many feet of fencing are needed?',
      choices: ['$24$', '$19$', '$38$', '$84$'],
      answer: 2,
      solution:
        'Let the length be $\\ell$; then the width is $\\ell - 5$, and the area gives $\\ell(\\ell - 5) = 84$, so $\\ell^2 - 5\\ell - 84 = 0$. We need sum $-5$ and product $-84$: the numbers $-12$ and $7$, so $(\\ell - 12)(\\ell + 7) = 0$ and $\\ell = 12$ or $\\ell = -7$. A length cannot be $-7$ feet, so $\\ell = 12$ and the width is $7$. Fencing goes all the way around, so we want the perimeter: $2(12 + 7) = 38$ feet. Check the area forward: $12 \\cdot 7 = 84$ ✓. (The choice $24$ doubles only the length and forgets the two widths; the choice $19$ is $\\ell + w$, one lap halfway around; the choice $84$ reports the area, which is square feet of ground rather than feet of fence.)',
    },
  ],
  // c7 — the reciprocal-sum identity. Two versions run it forwards (one with a
  // leading coefficient, so BOTH the sum and the product need dividing by a);
  // one runs it backwards to recover a missing coefficient.
  [
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 10x + 4 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$\\frac{2}{5}$', '$\\frac{5}{2}$', '$-\\frac{5}{2}$', '$\\frac{1}{10}$'],
      answer: 1,
      solution:
        'Combine over a common denominator first: $\\frac{1}{r} + \\frac{1}{s} = \\frac{s + r}{rs}$. From the coefficients, $r + s = 10$ and $rs = 4$, so the answer is $\\frac{10}{4} = \\frac{5}{2}$. The roots themselves are irrational, and we never had to find them. Check forward anyway: the roots are $5 + \\sqrt{21}$ and $5 - \\sqrt{21}$, whose product is $25 - 21 = 4$ ✓ and whose sum is $10$ ✓, so the quotient really is $\\frac{10}{4}$. (The choice $\\frac{2}{5}$ is $\\frac{rs}{r + s}$, the identity upside down; the choice $-\\frac{5}{2}$ forgets that the sum is $-b = +10$, not $-10$; the choice $\\frac{1}{10}$ adds the two fractions by adding their denominators, which would make $\\frac{1}{r} + \\frac{1}{s}$ into $\\frac{1}{r + s}$.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $2x^2 - 9x + 6 = 0$, what is $\\frac{1}{r} + \\frac{1}{s}$?',
      choices: ['$3$', '$\\frac{2}{3}$', '$-\\frac{3}{2}$', '$\\frac{3}{2}$'],
      answer: 3,
      solution:
        'With $a = 2$, BOTH Vieta formulas carry a division by $a$: $r + s = -\\frac{b}{a} = \\frac{9}{2}$ and $rs = \\frac{c}{a} = \\frac{6}{2} = 3$. Then $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs} = \\frac{9/2}{3} = \\frac{9}{6} = \\frac{3}{2}$. Check forward: dividing the whole equation by $2$ gives $x^2 - \\frac{9}{2}x + 3 = 0$, whose coefficients announce the same sum $\\frac{9}{2}$ and product $3$ ✓. (The choice $3$ divides the product by $a$ but forgets to divide the SUM, computing $\\frac{9}{3}$; the choice $\\frac{2}{3}$ is the identity upside down; the choice $-\\frac{3}{2}$ drops the minus sign that is already built into $-\\frac{b}{a}$ and applies it a second time.)',
    },
    {
      q: 'The roots $r$ and $s$ of $x^2 + bx + 6 = 0$ satisfy $\\frac{1}{r} + \\frac{1}{s} = \\frac{5}{6}$. What is $b$?',
      choices: ['$b = -5$', '$b = 5$', '$b = -6$', '$b = \\frac{5}{6}$'],
      answer: 0,
      solution:
        'The identity says $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$. Here $rs = 6$ and $r + s = -b$, so $\\frac{-b}{6} = \\frac{5}{6}$, which gives $-b = 5$ and $b = -5$. Check forward: $x^2 - 5x + 6 = (x - 2)(x - 3)$ has roots $2$ and $3$, and $\\frac{1}{2} + \\frac{1}{3} = \\frac{3 + 2}{6} = \\frac{5}{6}$ ✓. (The choice $b = 5$ forgets that the sum of the roots is $-b$, not $b$ — and $x^2 + 5x + 6$ has roots $-2$ and $-3$, giving $-\\frac{5}{6}$; the choice $b = -6$ copies the constant term; the choice $b = \\frac{5}{6}$ copies the value that was handed to you instead of solving for $b$.)',
    },
  ],
  // c8 — the roots are pinned by their sum and their gap. Each root sits HALF
  // the gap from the midpoint, and stepping the full gap is the trap. One
  // version has a negative midpoint; one asks for a root instead of k.
  [
    {
      q: 'The roots of $x^2 - 10x + k = 0$ differ by $4$. What is $k$?',
      choices: ['$25$', '$9$', '$60$', '$21$'],
      answer: 3,
      solution:
        'The roots sum to $10$, so they sit one step on each side of the midpoint $5$. To differ by $4$, each step must be HALF of $4$, that is $2$: the roots are $7$ and $3$. Then $k$ is their product: $7 \\cdot 3 = 21$. Check forward: $x^2 - 10x + 21 = (x - 3)(x - 7)$, its roots are $3$ and $7$, they sum to $10$ ✓ and differ by $4$ ✓. (The choice $25$ uses $5$ and $5$, which is what you get if you ignore the gap entirely; the choice $9$ steps the FULL $4$ on each side, giving $9$ and $1$ — those differ by $8$, not $4$; the choice $60$ comes from writing the roots as $r$ and $r + 4$, then solving $2r + 4 = 10$ as $r = 6$ instead of $r = 3$, which gives $6$ and $10$.)',
    },
    {
      q: 'The roots of $x^2 + 6x + k = 0$ differ by $10$. What is $k$?',
      choices: ['$9$', '$-16$', '$16$', '$-91$'],
      answer: 1,
      solution:
        'The sum of the roots is $-b = -6$, so the midpoint is $-3$ and the roots sit one step on each side of it. To differ by $10$, each step is $5$: the roots are $-3 + 5 = 2$ and $-3 - 5 = -8$. Then $k$ is their product: $2 \\cdot (-8) = -16$. Check forward: $x^2 + 6x - 16 = (x + 8)(x - 2)$, whose roots are $-8$ and $2$ — they sum to $-6$ ✓ and differ by $10$ ✓. (The choice $9$ uses $-3$ and $-3$ and ignores the gap; the choice $16$ multiplies $2$ and $8$ but forgets that one of the two roots is negative — and $x^2 + 6x + 16 = 0$ has no real roots at all; the choice $-91$ steps the full $10$ on each side, giving $7$ and $-13$, which differ by $20$.)',
    },
    {
      q: 'The two roots of $x^2 - 12x + k = 0$ differ by $6$. What is the larger root?',
      choices: ['$6$', '$12$', '$9$', '$27$'],
      answer: 2,
      solution:
        'The roots sum to $12$, so their midpoint is $6$, and each root sits half the gap — that is $3$ — away from it. The roots are $6 + 3 = 9$ and $6 - 3 = 3$, so the larger root is $9$. Check forward: $9$ and $3$ do differ by $6$ ✓ and do sum to $12$ ✓, and $k = 9 \\cdot 3 = 27$ makes $x^2 - 12x + 27 = (x - 3)(x - 9)$ ✓. (The choice $6$ reports the midpoint, which is the average of the roots rather than either root; the choice $12$ reports the sum of the roots; the choice $27$ reports $k$, which the question deliberately did not ask for.)',
    },
  ],
  // c9 — solve a quadratic with a leading coefficient bigger than 1 after
  // rearranging, so at least one root is a fraction. Reading a root straight
  // off the factor without dividing is the trap.
  [
    {
      q: 'Solve $10x^2 = x + 3$.',
      choices: [
        '$x = \\frac{3}{5}$ or $x = -\\frac{1}{2}$',
        '$x = -\\frac{3}{5}$ or $x = \\frac{1}{2}$',
        '$x = \\frac{5}{3}$ or $x = -2$',
        '$x = \\frac{3}{10}$ or $x = -1$',
      ],
      answer: 0,
      solution:
        'Rearrange first: $10x^2 - x - 3 = 0$. We need product $ac = -30$ and sum $-1$: the numbers $-6$ and $5$. Split and group: $10x^2 - 6x + 5x - 3 = 2x(5x - 3) + 1(5x - 3) = (5x - 3)(2x + 1) = 0$. Solve each little equation all the way: $5x = 3$ gives $x = \\frac{3}{5}$, and $2x = -1$ gives $x = -\\frac{1}{2}$. Check both in the ORIGINAL equation. For $x = \\frac{3}{5}$: $10 \\cdot \\frac{9}{25} = \\frac{18}{5}$, and $\\frac{3}{5} + 3 = \\frac{18}{5}$ ✓. For $x = -\\frac{1}{2}$: $10 \\cdot \\frac{1}{4} = \\frac{5}{2}$, and $-\\frac{1}{2} + 3 = \\frac{5}{2}$ ✓. (The choice with $-\\frac{3}{5}$ and $\\frac{1}{2}$ copies the signs out of the factors instead of flipping them; the choice $\\frac{5}{3}$ or $-2$ turns each fraction upside down, dividing by the constant instead of by the coefficient; the choice $\\frac{3}{10}$ or $-1$ comes from the wrong grouping $(10x - 3)(x + 1)$, which expands to $10x^2 + 7x - 3$.)',
    },
    {
      q: 'Solve $4x^2 + 5 = 21x$.',
      choices: [
        '$x = -5$ or $x = -\\frac{1}{4}$',
        '$x = 20$ or $x = 1$',
        '$x = 5$ or $x = \\frac{1}{4}$',
        '$x = 5$ or $x = 4$',
      ],
      answer: 2,
      solution:
        'Move everything to one side: $4x^2 - 21x + 5 = 0$. We need product $ac = 20$ and sum $-21$: both numbers negative, so $-20$ and $-1$. Split and group: $4x^2 - 20x - x + 5 = 4x(x - 5) - 1(x - 5) = (x - 5)(4x - 1) = 0$. So $x = 5$, and from $4x = 1$, $x = \\frac{1}{4}$. Check both in the original: $x = 5$ gives $100 + 5 = 105$ and $21 \\cdot 5 = 105$ ✓; $x = \\frac{1}{4}$ gives $4 \\cdot \\frac{1}{16} + 5 = \\frac{1}{4} + 5 = \\frac{21}{4}$ and $21 \\cdot \\frac{1}{4} = \\frac{21}{4}$ ✓. (The choice $-5$ or $-\\frac{1}{4}$ copies the signs out of the factors; the choice $20$ or $1$ reports the two split numbers as if they were the roots; the choice $5$ or $4$ reads $4x - 1 = 0$ as $x = 4$, moving the coefficient instead of dividing by it.)',
    },
    {
      q: 'Exactly one solution of $8x^2 - 2x - 15 = 0$ is negative. What is it?',
      choices: ['$-\\frac{3}{2}$', '$-\\frac{5}{4}$', '$-\\frac{4}{5}$', '$-\\frac{15}{8}$'],
      answer: 1,
      solution:
        'We need product $ac = 8 \\cdot (-15) = -120$ and sum $-2$: the numbers $-12$ and $10$. Split and group: $8x^2 - 12x + 10x - 15 = 4x(2x - 3) + 5(2x - 3) = (2x - 3)(4x + 5) = 0$. So $2x = 3$ gives $x = \\frac{3}{2}$, and $4x = -5$ gives $x = -\\frac{5}{4}$. The negative one is $-\\frac{5}{4}$. Check it forward: $8 \\cdot \\frac{25}{16} = \\frac{25}{2}$, and $-2 \\cdot \\left(-\\frac{5}{4}\\right) = \\frac{5}{2}$, so the left side is $\\frac{25}{2} + \\frac{5}{2} - 15 = 15 - 15 = 0$ ✓. (The choice $-\\frac{3}{2}$ takes the OTHER root and flips its sign; the choice $-\\frac{4}{5}$ turns the fraction upside down; the choice $-\\frac{15}{8}$ is $\\frac{c}{a}$, the PRODUCT of the two roots, not a root.)',
    },
  ],
  // c10 — the squared-difference identity. The point is that (r-s)^2 needs
  // FOUR rs, not two, and that with a leading coefficient both the sum and the
  // product must be divided by a. One version runs the identity backwards.
  [
    {
      q: 'If $r$ and $s$ are the roots of $x^2 - 6x + 4 = 0$, what is $(r - s)^2$?',
      choices: ['$28$', '$36$', '$20$', '$32$'],
      answer: 2,
      solution:
        'Expand and rebuild: $(r - s)^2 = r^2 - 2rs + s^2 = (r + s)^2 - 4rs$. It is FOUR $rs$, because going from the $+2rs$ inside $(r + s)^2$ down to $-2rs$ costs $4rs$. From the coefficients, $r + s = 6$ and $rs = 4$, so $(r - s)^2 = 36 - 16 = 20$. Check forward: the roots are $3 + \\sqrt{5}$ and $3 - \\sqrt{5}$, their difference is $2\\sqrt{5}$, and $(2\\sqrt{5})^2 = 4 \\cdot 5 = 20$ ✓. (The choice $28$ subtracts only $2rs$ — that is $r^2 + s^2$, a different expression; the choice $36$ is $(r + s)^2$ with the $rs$ term forgotten altogether; the choice $32$ subtracts a single $rs$.)',
    },
    {
      q: 'The roots $r$ and $s$ of $x^2 - 9x + c = 0$ satisfy $(r - s)^2 = 25$. What is $c$?',
      choices: ['$14$', '$28$', '$56$', '$-14$'],
      answer: 0,
      solution:
        'Use $(r - s)^2 = (r + s)^2 - 4rs$. Here $r + s = 9$ and $rs = c$, so $81 - 4c = 25$. Then $4c = 81 - 25 = 56$ and $c = 14$. Check forward: $x^2 - 9x + 14 = (x - 2)(x - 7)$ has roots $2$ and $7$, and $(2 - 7)^2 = (-5)^2 = 25$ ✓. (The choice $28$ uses $(r + s)^2 - 2rs$, which computes $r^2 + s^2$ rather than $(r - s)^2$; the choice $56$ stops at $4c = 56$ and reports that instead of $c$; the choice $-14$ expands $(r - s)^2$ as $(r + s)^2 + 4rs$, getting $81 + 4c = 25$ — and $x^2 - 9x - 14$ does not even have nice roots to check.)',
    },
    {
      q: 'If $r$ and $s$ are the roots of $2x^2 - 10x + 3 = 0$, what is $(r - s)^2$?',
      choices: ['$22$', '$88$', '$25$', '$19$'],
      answer: 3,
      solution:
        'With $a = 2$, divide BOTH formulas by $a$: $r + s = -\\frac{-10}{2} = 5$ and $rs = \\frac{3}{2}$. Then $(r - s)^2 = (r + s)^2 - 4rs = 25 - 4 \\cdot \\frac{3}{2} = 25 - 6 = 19$. Check forward: dividing the equation by $2$ gives $x^2 - 5x + \\frac{3}{2} = 0$, which has the same roots and announces the same sum $5$ and product $\\frac{3}{2}$ ✓, and the two roots differ by $\\sqrt{19}$, whose square is $19$ ✓. (The choice $22$ subtracts only $2rs$, giving $r^2 + s^2$; the choice $88$ forgets to divide by $a$ at all, using sum $10$ and product $3$ to get $100 - 12$; the choice $25$ is $(r + s)^2$ with the $rs$ term dropped.)',
    },
  ],
  // c11 — an equation with the variable in a denominator. Clear the fraction,
  // solve the quadratic, and keep BOTH roots unless one is actually barred
  // (x = 0 is the only thing the denominator forbids, and no root is 0 here).
  [
    {
      q: 'Find all $x$ satisfying $x + \\frac{1}{x} = \\frac{10}{3}$.',
      choices: [
        '$x = 3$ or $x = \\frac{1}{3}$',
        '$x = 3$ only',
        '$x = -3$ or $x = -\\frac{1}{3}$',
        '$x = 3$ or $x = -\\frac{1}{3}$',
      ],
      answer: 0,
      solution:
        'The denominator forbids $x = 0$, so multiply both sides by $3x$: $3x^2 + 3 = 10x$, which rearranges to $3x^2 - 10x + 3 = 0$. We need product $ac = 9$ and sum $-10$: both negative, so $-9$ and $-1$. Split and group: $3x^2 - 9x - x + 3 = 3x(x - 3) - 1(x - 3) = (x - 3)(3x - 1) = 0$, giving $x = 3$ or $x = \\frac{1}{3}$. Neither is $0$, so both survive — and fittingly, they are reciprocals of each other. Check forward: $3 + \\frac{1}{3} = \\frac{10}{3}$ ✓ and $\\frac{1}{3} + 3 = \\frac{10}{3}$ ✓. (The choice $x = 3$ only throws away a perfectly legal second root; the choice $-3$ or $-\\frac{1}{3}$ copies the signs out of the factors and lands on $-\\frac{10}{3}$ instead; the choice $3$ or $-\\frac{1}{3}$ flips the sign of just one root, and $-\\frac{1}{3} - 3 = -\\frac{10}{3}$.)',
    },
    {
      q: 'Find all $x$ satisfying $2x + \\frac{3}{x} = 7$.',
      choices: [
        '$x = 3$ or $x = 2$',
        '$x = 3$ or $x = \\frac{1}{2}$',
        '$x = -3$ or $x = -\\frac{1}{2}$',
        '$x = 6$ or $x = 1$',
      ],
      answer: 1,
      solution:
        'Since $x \\ne 0$, multiply through by $x$: $2x^2 + 3 = 7x$, so $2x^2 - 7x + 3 = 0$. We need product $ac = 6$ and sum $-7$: the numbers $-6$ and $-1$. Split and group: $2x^2 - 6x - x + 3 = 2x(x - 3) - 1(x - 3) = (x - 3)(2x - 1) = 0$, so $x = 3$ or, from $2x = 1$, $x = \\frac{1}{2}$. Check both in the original: $2(3) + \\frac{3}{3} = 6 + 1 = 7$ ✓, and $2 \\cdot \\frac{1}{2} + \\frac{3}{1/2} = 1 + 6 = 7$ ✓. (The choice $3$ or $2$ reads $2x - 1 = 0$ as $x = 2$, moving the coefficient instead of dividing by it; the choice $-3$ or $-\\frac{1}{2}$ copies the signs out of the factors; the choice $6$ or $1$ reports the two split numbers as though they were the roots.)',
    },
    {
      q: 'Find all $x$ satisfying $x - \\frac{6}{x} = 1$.',
      choices: [
        '$x = -3$ or $x = 2$',
        '$x = 3$ only',
        '$x = 3$ or $x = -2$',
        '$x = 6$ or $x = -1$',
      ],
      answer: 2,
      solution:
        'The denominator bars $x = 0$; multiply both sides by $x$: $x^2 - 6 = x$, so $x^2 - x - 6 = 0$. We need sum $-1$ and product $-6$: the numbers $-3$ and $2$, so $(x - 3)(x + 2) = 0$ and $x = 3$ or $x = -2$. Neither is $0$, so both stay. Check forward: $3 - \\frac{6}{3} = 3 - 2 = 1$ ✓, and $-2 - \\frac{6}{-2} = -2 + 3 = 1$ ✓ — dividing by a negative flips the sign of the fraction, which is exactly what makes this root work. (The choice $-3$ or $2$ copies the signs out of the factors; the choice $x = 3$ only discards the negative root, but nothing in this equation forbids negatives; the choice $6$ or $-1$ comes from the wrong factorization $(x - 6)(x + 1)$, which expands to $x^2 - 5x - 6$.)',
    },
  ],
  // c12 — build (or repair) a quadratic from a conjugate pair of irrational
  // roots. The sum kills the square roots and the product is a difference of
  // squares; adding the squares instead of subtracting is the standing trap.
  [
    {
      q: 'Which quadratic equation has roots $3 + \\sqrt{5}$ and $3 - \\sqrt{5}$?',
      choices: [
        '$x^2 + 6x + 4 = 0$',
        '$x^2 - 6x - 4 = 0$',
        '$x^2 - 6x + 14 = 0$',
        '$x^2 - 6x + 4 = 0$',
      ],
      answer: 3,
      solution:
        'Find the sum and the product, then use $x^2 - (\\text{sum})x + (\\text{product}) = 0$. Sum: $(3 + \\sqrt{5}) + (3 - \\sqrt{5}) = 6$, since the square roots cancel. Product: $(3 + \\sqrt{5})(3 - \\sqrt{5}) = 9 - 5 = 4$ by difference of squares. So the equation is $x^2 - 6x + 4 = 0$. Check forward by substituting $x = 3 + \\sqrt{5}$: $x^2 = 9 + 6\\sqrt{5} + 5 = 14 + 6\\sqrt{5}$, and $14 + 6\\sqrt{5} - 6(3 + \\sqrt{5}) + 4 = 14 + 6\\sqrt{5} - 18 - 6\\sqrt{5} + 4 = 0$ ✓. (The choice $x^2 + 6x + 4 = 0$ forgets the minus sign in front of the sum, and its roots are $-3 \\pm \\sqrt{5}$; the choice $x^2 - 6x - 4 = 0$ flips the sign of the product; the choice $x^2 - 6x + 14 = 0$ computes the product as $9 + 5$ — but the middle terms cancel, they do not add, so it is $9 - 5$.)',
    },
    {
      q: 'One root of $x^2 - 10x + c = 0$ is $5 + \\sqrt{7}$. What is $c$?',
      choices: ['$18$', '$32$', '$25$', '$-18$'],
      answer: 0,
      solution:
        'The two roots must add up to $10$, so the other root is $10 - (5 + \\sqrt{7}) = 5 - \\sqrt{7}$ — the conjugate partner. Then $c$ is their product: $(5 + \\sqrt{7})(5 - \\sqrt{7}) = 25 - 7 = 18$ by difference of squares. Check forward by substituting $x = 5 + \\sqrt{7}$ into $x^2 - 10x + 18$: $x^2 = 25 + 10\\sqrt{7} + 7 = 32 + 10\\sqrt{7}$, so the expression is $32 + 10\\sqrt{7} - 50 - 10\\sqrt{7} + 18 = 0$ ✓. (The choice $32$ adds the squares, $25 + 7$, instead of subtracting — that is $x^2$, not the product of the roots; the choice $25$ squares only the $5$ and drops the $\\sqrt{7}$ entirely; the choice $-18$ computes $7 - 25$, subtracting in the wrong order.)',
    },
    {
      q: 'Which quadratic equation has roots $-1 + \\sqrt{6}$ and $-1 - \\sqrt{6}$?',
      choices: [
        '$x^2 - 2x - 5 = 0$',
        '$x^2 + 2x - 5 = 0$',
        '$x^2 + 2x + 5 = 0$',
        '$x^2 + 2x + 7 = 0$',
      ],
      answer: 1,
      solution:
        'Sum: $(-1 + \\sqrt{6}) + (-1 - \\sqrt{6}) = -2$, the square roots cancelling as always. Product: $(-1 + \\sqrt{6})(-1 - \\sqrt{6}) = 1 - 6 = -5$, a difference of squares with $a = -1$ and $b = \\sqrt{6}$. Then $x^2 - (\\text{sum})x + (\\text{product}) = x^2 - (-2)x + (-5) = x^2 + 2x - 5 = 0$. Check forward with $x = -1 + \\sqrt{6}$: $x^2 = 1 - 2\\sqrt{6} + 6 = 7 - 2\\sqrt{6}$, so $x^2 + 2x - 5 = 7 - 2\\sqrt{6} - 2 + 2\\sqrt{6} - 5 = 0$ ✓. (The choice $x^2 - 2x - 5 = 0$ forgets that a negative sum becomes a POSITIVE middle coefficient after the minus sign in the recipe, and its roots are $1 \\pm \\sqrt{6}$; the choice $x^2 + 2x + 5 = 0$ takes the product as $+5$ and has no real roots at all; the choice $x^2 + 2x + 7 = 0$ computes the product as $1 + 6$ instead of $1 - 6$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 10,
  challenge,
}
