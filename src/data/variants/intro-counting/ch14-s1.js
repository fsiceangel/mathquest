// Counting & Probability chapter 14 — variations for section 14.2
// (A Little Algebra). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: a coefficient is read after the
//    expression is multiplied out completely and like terms are combined, and
//    a count of "products" is taken before any combining.
//  - Every keyed answer is reached twice along routes that share no steps:
//    the substitution pattern against stepwise multiplication, a factor-choice
//    count, a numeric evaluation, or an algebraic factoring.
//  - Each distractor is one named slip — a lost sign, a wrong binomial index,
//    a forgotten numeric power, a dropped cross term — named in CAPS.

const s142 = [
  // slot 1 — sums and differences of two expansions
  [
    {
      q: 'Which of the following equals $(x+2y)^2 - (x-2y)^2$, after both squares are expanded and like terms are combined?',
      choices: ['$4xy$', '$8xy$', '$0$', '$2x^2 + 8y^2$'],
      answer: 1,
      solution:
        'Route one, expand both squares. $(x+2y)^2 = x^2 + 4xy + 4y^2$ and $(x-2y)^2 = x^2 - 4xy + 4y^2$. Subtracting, the $x^2$ and $4y^2$ pieces cancel, and $4xy - (-4xy) = 8xy$ ✓. Route two, difference of squares. $A^2 - B^2 = (A+B)(A-B)$ with $A = x+2y$ and $B = x-2y$: here $A + B = 2x$ and $A - B = 4y$, so the difference is $(2x)(4y) = 8xy$ ✓. (The choice $4xy$ FORGETS THAT $b = 2y$ DOUBLES THE CROSS TERM, using $2xy$ per square ✗; $0$ DROPS BOTH CROSS TERMS, as if each square were $x^2 + 4y^2$ ✗; $2x^2 + 8y^2$ ADDS THE TWO SQUARES INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'Which of the following equals $(x+y)^2 + (x-y)^2$, after both squares are expanded and like terms are combined?',
      choices: ['$2x^2 - 2y^2$', '$4xy$', '$x^2 + y^2$', '$2x^2 + 2y^2$'],
      answer: 3,
      solution:
        'Route one, expand both squares. $(x+y)^2 = x^2 + 2xy + y^2$ and $(x-y)^2 = x^2 - 2xy + y^2$; adding, the cross terms cancel and the rest doubles: $2x^2 + 2y^2$ ✓. Route two, symmetry. Replacing $y$ with $-y$ swaps the two summands, so the sum is unchanged and can contain no odd power of $y$ — no $xy$ term is possible. The $x^2$ pieces contribute $1 + 1 = 2$, and setting $x = 0$ leaves $y^2 + (-y)^2 = 2y^2$, so the sum is $2x^2 + 2y^2$ ✓. (The choice $2x^2 - 2y^2$ PUTS A MINUS SIGN ON $y^2$ THAT NEITHER SQUARE PRODUCES ✗; $4xy$ IS THE DIFFERENCE OF THE SQUARES, not the sum ✗; $x^2 + y^2$ HALVES EVERYTHING, averaging the two squares instead of adding them ✗.)',
    },
    {
      q: 'Which of the following equals $(a+b)^3 + (a-b)^3$, after both cubes are expanded and like terms are combined?',
      choices: ['$2a^3 + 6a^2b$', '$2a^3$', '$2a^3 + 6ab^2$', '$2a^3 + 6ab^2 + 2b^3$'],
      answer: 2,
      solution:
        'Route one, expand both cubes. $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ and $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Adding, every term with an odd power of $b$ cancels, and the rest doubles: $2a^3 + 6ab^2$ ✓. Route two, sum of cubes. $A^3 + B^3 = (A+B)(A^2 - AB + B^2)$ with $A = a+b$, $B = a-b$: $A + B = 2a$, and $A^2 - AB + B^2 = (a^2+2ab+b^2) - (a^2-b^2) + (a^2-2ab+b^2) = a^2 + 3b^2$, so the sum is $2a(a^2 + 3b^2) = 2a^3 + 6ab^2$ ✓. (The choice $2a^3 + 6a^2b$ KEEPS THE ODD POWERS OF $b$, which are exactly the terms that cancel ✗; $2a^3$ CANCELS EVERY $b$ TERM, though even powers of $b$ survive ✗; the choice ending $+\\, 2b^3$ FORGETS THAT $(-b)^3 = -b^3$ WIPES OUT THE CUBES ✗.)',
    },
  ],
  // slot 2 — counting products before combining
  [
    {
      q: 'When $(x+y)^5 = (x+y)(x+y)(x+y)(x+y)(x+y)$ is multiplied out completely, before any like terms are combined, how many products are there in all?',
      choices: ['$10$', '$25$', '$16$', '$32$'],
      answer: 3,
      solution:
        'Route one, multiply the choices. Each product takes one letter from each of the five factors, and each factor offers $2$ letters, so there are $2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$ products ✓. Route two, add the combined coefficients. After combining, the terms run from $x^5$ to $y^5$ with coefficients $1, 5, 10, 10, 5, 1$ — row $5$ of Pascal’s triangle — and every original product lands in exactly one of them, so the product count is $1+5+10+10+5+1 = 32$ ✓. (The choice $10$ MULTIPLIES $2\\cdot 5$ instead of raising $2$ to the $5$th ✗; $25$ SQUARES THE $5$ ✗; $16$ STOPS ONE FACTOR SHORT at $2^4$ ✗.)',
    },
    {
      q: 'When $(a+b+c)^2 = (a+b+c)(a+b+c)$ is multiplied out completely, before any like terms are combined, how many products are there in all?',
      choices: ['$6$', '$9$', '$8$', '$27$'],
      answer: 1,
      solution:
        'Route one, multiply the choices. Each product takes one letter from each of the two factors, and each factor offers $3$ letters, so there are $3\\cdot 3 = 9$ products ✓. Route two, add the combined coefficients. Combining like terms gives $a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$, and every original product lands in exactly one of those six terms, so the product count is $1+1+1+2+2+2 = 9$ ✓. (The choice $6$ COUNTS THE DISTINCT TERMS AFTER COMBINING, not the products before ✗; $8$ USES $2^3$, as if the base had two terms and three factors ✗; $27$ CUBES THE $3$ though there are only two factors ✗.)',
    },
    {
      q: 'Multiplying out $(a+b)^n$ completely gives $128$ products before any like terms are combined. What is $n$?',
      choices: ['$7$', '$127$', '$6$', '$64$'],
      answer: 0,
      solution:
        'Route one, count the choices. With $n$ factors and $2$ choices per factor there are $2^n$ products, so $2^n = 128$; since $2^7 = 128$, $n = 7$ ✓. Route two, sum a row of Pascal’s triangle. The products before combining are counted by the row-$n$ coefficients; row $7$ is $1, 7, 21, 35, 35, 21, 7, 1$, which sums to $128$, and no other row can work because row sums strictly increase ✓. (The choice $127$ SOLVES $n + 1 = 128$, CONFUSING PRODUCTS WITH COMBINED TERMS ✗; $6$ STOPS A DOUBLING SHORT, since $2^6 = 64$ ✗; $64$ TREATS THE PRODUCT COUNT AS $2n$ and halves $128$ ✗.)',
    },
  ],
  // slot 3 — squaring a binomial with coefficients
  [
    {
      q: 'Which of the following equals $(3x+2)^2$?',
      choices: ['$9x^2 + 6x + 4$', '$3x^2 + 12x + 4$', '$9x^2 + 12x + 4$', '$9x^2 + 4$'],
      answer: 2,
      solution:
        'Route one, the pattern. With $a = 3x$ and $b = 2$ in $a^2 + 2ab + b^2$: $a^2 = 9x^2$, $2ab = 2(3x)(2) = 12x$, $b^2 = 4$, so $(3x+2)^2 = 9x^2 + 12x + 4$ ✓. Route two, evaluate at $x = 1$. The square is $(3+2)^2 = 25$, while the four choices give $19$, $19$, $25$, and $13$; only $9x^2 + 12x + 4$ matches, and exactly one choice can be the expansion ✓. (The choice $9x^2 + 6x + 4$ FORGETS THE $2$ IN $2ab$ ✗; $3x^2 + 12x + 4$ FORGETS TO SQUARE THE $3$ ✗; $9x^2 + 4$ DROPS THE CROSS TERM ENTIRELY ✗.)',
    },
    {
      q: 'Which of the following equals $(5-2x)^2$?',
      choices: ['$4x^2 - 20x + 25$', '$4x^2 + 20x + 25$', '$25 - 4x^2$', '$4x^2 - 10x + 25$'], answer: 0,
      solution:
        'Route one, the pattern. With $a = 5$ and $b = -2x$: $a^2 = 25$, $2ab = 2(5)(-2x) = -20x$, $b^2 = 4x^2$, so $(5-2x)^2 = 4x^2 - 20x + 25$ ✓. Route two, evaluate at $x = 1$. The square is $(5-2)^2 = 9$, while the choices give $9$, $49$, $21$, and $19$; only $4x^2 - 20x + 25$ matches ✓. (The choice with $+20x$ LOSES THE SIGN OF THE CROSS TERM ✗; $25 - 4x^2$ TREATS THE SQUARE AS A DIFFERENCE OF SQUARES ✗; $4x^2 - 10x + 25$ FORGETS THE $2$ IN $2ab$ ✗.)',
    },
    {
      q: 'For a positive number $c$, the expansion of $(3x+c)^2$ has middle term $30x$. What is the constant term of the expansion?',
      choices: ['$10$', '$5$', '$100$', '$25$'], answer: 3,
      solution:
        'Route one, match the middle term. $(3x+c)^2 = 9x^2 + 6cx + c^2$, so $6c = 30$ gives $c = 5$ and the constant term is $c^2 = 25$ ✓. Route two, complete the square. A quadratic $9x^2 + 30x + K$ is the square of a binomial exactly when $K = \\frac{30^2}{4\\cdot 9} = \\frac{900}{36} = 25$, so the constant term is $25$ ✓. (The choice $10$ FORGETS THE $2$ IN $2ab$ AND NEVER SQUARES, solving $3c = 30$ and stopping there ✗; $5$ STOPS AT $c$ INSTEAD OF SQUARING IT ✗; $100$ FORGETS THE $2$ IN $2ab$, solving $3c = 30$ and squaring $10$ ✗.)',
    },
  ],
  // slot 4 — cubing a binomial
  [
    {
      q: 'Which of the following equals $(x-3)^3$?',
      choices: ['$x^3 - 9x^2 + 27x - 27$', '$x^3 - 27$', '$x^3 + 9x^2 + 27x + 27$', '$x^3 - 9x^2 - 27x - 27$'],
      answer: 0,
      solution:
        'Route one, the pattern. With $a = x$ and $b = -3$ in $a^3 + 3a^2b + 3ab^2 + b^3$: $x^3 + 3x^2(-3) + 3x(9) + (-27) = x^3 - 9x^2 + 27x - 27$; only the odd powers of $-3$ are negative, so the signs alternate ✓. Route two, multiply stepwise. $(x-3)^2 = x^2 - 6x + 9$, and $(x^2 - 6x + 9)(x - 3) = x^3 - 3x^2 - 6x^2 + 18x + 9x - 27 = x^3 - 9x^2 + 27x - 27$ ✓. (The choice $x^3 - 27$ IGNORES THE TWO MIDDLE TERMS ✗; the all-plus choice LOSES EVERY SIGN ✗; the choice $x^3 - 9x^2 - 27x - 27$ MAKES EVERY SIGN AFTER $x^3$ NEGATIVE instead of alternating ✗.)',
    },
    {
      q: 'Which of the following equals $(2x-y)^3$?',
      choices: ['$8x^3 - 12x^2y + 6xy^2 + y^3$', '$2x^3 - 12x^2y + 6xy^2 - y^3$', '$8x^3 - 12x^2y + 6xy^2 - y^3$', '$8x^3 - 4x^2y + 2xy^2 - y^3$'],
      answer: 2,
      solution:
        'Route one, the pattern. With $a = 2x$ and $b = -y$: $a^3 = 8x^3$, $3a^2b = 3(4x^2)(-y) = -12x^2y$, $3ab^2 = 3(2x)(y^2) = 6xy^2$, $b^3 = -y^3$ ✓. Route two, evaluate at $x = 1$, $y = 1$. The cube is $(2-1)^3 = 1$, while the choices give $3$, $-5$, $1$, and $5$; only $8x^3 - 12x^2y + 6xy^2 - y^3$ matches ✓. (The choice ending $+\\, y^3$ LOSES THE SIGN ON $b^3$, though $(-y)^3 = -y^3$ ✗; the choice starting $2x^3$ FORGETS TO CUBE THE $2$ ✗; the choice with $-4x^2y$ and $2xy^2$ DROPS THE BINOMIAL COEFFICIENTS $3$ ✗.)',
    },
    {
      q: 'When $(x-2)^4$ is expanded and like terms are combined, what is the coefficient of $x$?',
      choices: ['$32$', '$-32$', '$-8$', '$24$'],
      answer: 1,
      solution:
        'Route one, one factor-choice count. An $x^1$ product takes $-2$ from three of the four factors and $x$ from the last, so the term is $\\binom{4}{3}x(-2)^3 = 4\\cdot(-8)\\cdot x = -32x$ ✓. Route two, square twice. $(x-2)^2 = x^2 - 4x + 4$, and squaring that, the $x^1$ products are $(-4x)(4)$ taken in both orders: $2\\cdot(-16x) = -32x$ ✓. (The choice $32$ LOSES THE SIGN — $(-2)^3$ is negative ✗; $-8$ FORGETS THE BINOMIAL COEFFICIENT $4$ ✗; $24$ USES THE WRONG BINOMIAL INDEX, computing $\\binom{4}{2}(-2)^2 = 24$, which belongs to the $x^2$ term ✗.)',
    },
  ],
  // slot 5 — which products equal a given monomial
  [
    {
      q: 'Imagine multiplying out $(a+b)^6$ completely, before combining like terms, so that there are $64$ products in all. How many of those $64$ products equal $a^4b^2$?',
      choices: ['$30$', '$20$', '$15$', '$6$'],
      answer: 2,
      solution:
        'Route one, choose the $b$-factors. A product equals $a^4b^2$ exactly when two of the six factors supply a $b$ and the other four supply an $a$: $\\binom{6}{2} = 15$ ways ✓. Route two, Pascal’s recurrence. The count is the $k = 2$ entry of row $6$, and each entry of row $6$ is the sum of the two entries above it in row $5$ ($1, 5, 10, 10, 5, 1$): the entry is $5 + 10 = 15$ ✓. (The choice $30$ ORDERS THE TWO CHOSEN FACTORS, doubling $15$ ✗; $20$ IS $\\binom{6}{3}$, THE WRONG BINOMIAL INDEX ✗; $6$ CHOOSES FROM ONLY FOUR FACTORS, computing $\\binom{4}{2}$ ✗.)',
    },
    {
      q: 'Among the $32$ products obtained by multiplying out $(x+y)^5$ completely before combining like terms, how many contain at least four $y$’s?',
      choices: ['$6$', '$5$', '$10$', '$16$'],
      answer: 0,
      solution:
        'Route one, direct casework. Exactly four $y$’s: choose which four factors supply them, $\\binom{5}{4} = 5$ ways. All five $y$’s: $\\binom{5}{5} = 1$ way. Together $5 + 1 = 6$ ✓. Route two, count the complement. Products with at most three $y$’s number $\\binom{5}{0} + \\binom{5}{1} + \\binom{5}{2} + \\binom{5}{3} = 1 + 5 + 10 + 10 = 26$, and $32 - 26 = 6$ ✓. (The choice $5$ FORGETS THE ALL-$y$ PRODUCT ✗; $10$ COUNTS THE PRODUCTS WITH EXACTLY THREE $y$’s, $\\binom{5}{3}$ ✗; $16$ HALVES THE $32$, as if “at least four of five” covered half the products ✗.)',
    },
    {
      q: 'When $(a+b)^n$ is multiplied out completely before combining like terms, exactly $56$ of the products equal $a^5b^3$. What is $n$?',
      choices: ['$5$', '$3$', '$15$', '$8$'],
      answer: 3,
      solution:
        'Route one, exponents add to $n$. Each product takes one letter from every factor, so a product equal to $a^5b^3$ uses $5 + 3 = 8$ factors: $n = 8$, and indeed $\\binom{8}{3} = 56$ ✓. Route two, solve the count. The number of such products is $\\binom{n}{3}$, and $\\binom{n}{3} = 56$ means $n(n-1)(n-2) = 336 = 8\\cdot 7\\cdot 6$, so $n = 8$ ✓. (The choice $5$ READS OFF ONLY THE EXPONENT OF $a$ ✗; $3$ READS OFF ONLY THE EXPONENT OF $b$ ✗; $15$ MULTIPLIES THE EXPONENTS instead of adding them ✗.)',
    },
  ],
  // slot 6 — one coefficient of a cube
  [
    {
      q: 'When $(x+6)^3$ is expanded and like terms are combined, what is the coefficient of $x^2$?',
      choices: ['$6$', '$18$', '$108$', '$3$'],
      answer: 1,
      solution:
        'Route one, the pattern. The $x^2$ term of $a^3 + 3a^2b + 3ab^2 + b^3$ with $a = x$, $b = 6$ is $3a^2b = 3\\cdot x^2\\cdot 6 = 18x^2$ ✓. Route two, multiply stepwise. $(x+6)^2 = x^2 + 12x + 36$, and in $(x^2 + 12x + 36)(x + 6)$ the $x^2$ products are $x^2\\cdot 6$ and $12x\\cdot x$, so the coefficient is $6 + 12 = 18$ ✓. (The choice $6$ FORGETS THE BINOMIAL COEFFICIENT $3$ ✗; $108$ SQUARES THE $6$, using the numeric factor’s wrong power ($3\\cdot 36$) ✗; $3$ NEVER MULTIPLIES BY THE $6$ AT ALL ✗.)',
    },
    {
      q: 'When $(a+4b)^3$ is expanded and like terms are combined, what is the coefficient of $a^2b$?',
      choices: ['$4$', '$48$', '$3$', '$12$'],
      answer: 3,
      solution:
        'Route one, the pattern. The $a^2b$ term of the cube with $b$ replaced by $4b$ is $3a^2(4b) = 12a^2b$, so the coefficient is $12$ ✓. Route two, multiply stepwise. $(a+4b)^2 = a^2 + 8ab + 16b^2$, and in $(a^2 + 8ab + 16b^2)(a + 4b)$ the $a^2b$ products are $a^2\\cdot 4b$ and $8ab\\cdot a$, so the coefficient is $4 + 8 = 12$ ✓. (The choice $4$ FORGETS THE BINOMIAL COEFFICIENT $3$ ✗; $48$ SQUARES THE $4$, using the numeric factor’s wrong power ($3\\cdot 16$) ✗; $3$ DROPS THE $4$ ENTIRELY, keeping only the count ✗.)',
    },
    {
      q: 'For a positive number $c$, the coefficient of $x$ in the expansion of $(x+c)^3$ is $48$. What is $c$?',
      choices: ['$16$', '$64$', '$4$', '$8$'],
      answer: 2,
      solution:
        'Route one, the pattern. The $x$ term of $a^3 + 3a^2b + 3ab^2 + b^3$ with $a = x$, $b = c$ is $3ab^2 = 3c^2x$, so $3c^2 = 48$, $c^2 = 16$, and since $c$ is positive, $c = 4$ ✓. Route two, multiply stepwise with $c$ in place. $(x+c)^2 = x^2 + 2cx + c^2$, and in $(x^2 + 2cx + c^2)(x + c)$ the $x^1$ products are $2cx\\cdot c$ and $c^2\\cdot x$, giving coefficient $2c^2 + c^2 = 3c^2$; then $3c^2 = 48$ forces $c = 4$ ✓. (The choice $16$ STOPS AT $c^2$ WITHOUT TAKING THE SQUARE ROOT ✗; $64$ REPORTS THE CONSTANT TERM $c^3$ of the expansion instead of $c$ ✗; $8$ SOLVES $6c = 48$, DOUBLING INSTEAD OF SQUARING $c$ ✗.)',
    },
  ],
  // slot 7 — two-variable squares
  [
    {
      q: 'Which of the following equals $(4x-3y)^2$?',
      choices: ['$16x^2 + 24xy + 9y^2$', '$16x^2 - 12xy + 9y^2$', '$4x^2 - 24xy + 3y^2$', '$16x^2 - 24xy + 9y^2$'],
      answer: 3,
      solution:
        'Route one, the pattern. With $a = 4x$ and $b = -3y$: $a^2 = 16x^2$, $2ab = 2(4x)(-3y) = -24xy$, $b^2 = 9y^2$ ✓. Route two, evaluate at $x = 1$, $y = 1$. The square is $(4-3)^2 = 1$, while the choices give $49$, $13$, $-17$, and $1$; only $16x^2 - 24xy + 9y^2$ matches ✓. (The choice with $+24xy$ LOSES THE SIGN OF THE CROSS TERM ✗; $-12xy$ FORGETS THE $2$ IN $2ab$ ✗; the choice $4x^2 - 24xy + 3y^2$ FORGETS TO SQUARE THE COEFFICIENTS $4$ AND $3$ ✗.)',
    },
    {
      q: 'Which of the following equals $(2a+5b)^2$?',
      choices: ['$4a^2 + 10ab + 25b^2$', '$4a^2 + 20ab + 25b^2$', '$2a^2 + 20ab + 5b^2$', '$4a^2 + 25b^2$'],
      answer: 1,
      solution:
        'Route one, the pattern. $a^2$-piece $(2a)^2 = 4a^2$, cross term $2(2a)(5b) = 20ab$, last piece $(5b)^2 = 25b^2$ ✓. Route two, evaluate at $a = 1$, $b = 1$. The square is $(2+5)^2 = 49$, while the choices give $39$, $49$, $27$, and $29$; only $4a^2 + 20ab + 25b^2$ matches ✓. (The choice with $10ab$ FORGETS THE $2$ IN $2ab$ ✗; $2a^2 + 20ab + 5b^2$ FORGETS TO SQUARE THE COEFFICIENTS $2$ AND $5$ ✗; $4a^2 + 25b^2$ DROPS THE CROSS TERM ✗.)',
    },
    {
      q: 'For positive numbers $p$ and $q$, $(px-qy)^2 = 49x^2 - 42xy + 9y^2$. What is $p + q$?',
      choices: ['$10$', '$21$', '$4$', '$58$'],
      answer: 0,
      solution:
        'Route one, match the end terms. $p^2 = 49$ gives $p = 7$ and $q^2 = 9$ gives $q = 3$ (both positive); the middle checks out, since $-2pq = -42$. So $p + q = 10$ ✓. Route two, build $(p+q)^2$ without finding $p$ and $q$. The end terms give $p^2 + q^2 = 49 + 9 = 58$ and the middle gives $2pq = 42$, so $(p+q)^2 = p^2 + 2pq + q^2 = 58 + 42 = 100$ and $p + q = 10$ ✓. (The choice $21$ IS $pq$, read from the middle term, NOT $p + q$ ✗; $4$ IS $p - q$ ✗; $58$ ADDS THE SQUARED COEFFICIENTS $p^2 + q^2$ ✗.)',
    },
  ],
  // slot 8 — factor first, then read a coefficient
  [
    {
      q: 'When $(x^2+x)^5$ is expanded and like terms are combined, what is the coefficient of $x^6$?',
      choices: ['$5$', '$10$', '$1$', '$20$'],
      answer: 0,
      solution:
        'Route one, factor first. $(x^2+x)^5 = \\left(x(x+1)\\right)^5 = x^5(x+1)^5$, so the coefficient of $x^6$ is the coefficient of $x^1$ in $(x+1)^5$, which is $\\binom{5}{1} = 5$ ✓. Route two, choose factors. An $x^6$ product takes $x^2$ from $k$ factors and $x$ from the other $5-k$, with exponent $2k + (5-k) = 5 + k = 6$, so $k = 1$: there are $\\binom{5}{1} = 5$ ways to pick the $x^2$-factor ✓. (The choice $10$ USES $\\binom{5}{2}$, THE WRONG BINOMIAL INDEX ✗; $1$ FORGETS THE BINOMIAL COEFFICIENT, as if only one product worked ✗; $20$ ORDERS THE CHOSEN $x^2$-FACTOR AGAINST AN $x$-FACTOR, computing $5\\cdot 4$ ✗.)',
    },
    {
      q: 'When $(x^2+3x)^3$ is expanded and like terms are combined, what is the coefficient of $x^4$?',
      choices: ['$9$', '$3$', '$27$', '$81$'],
      answer: 2,
      solution:
        'Route one, factor first. $(x^2+3x)^3 = x^3(x+3)^3$, so the coefficient of $x^4$ is the coefficient of $x^1$ in $(x+3)^3$, which is $3\\cdot 3^2 = 27$ ✓. Route two, choose factors. An $x^4$ product takes $x^2$ from $k$ factors and $3x$ from the other $3-k$, with exponent $2k + (3-k) = 3 + k = 4$, so $k = 1$: there are $\\binom{3}{1} = 3$ choices, and the two $3x$-factors each contribute a $3$, so the coefficient is $3\\cdot 3^2 = 27$ ✓. (The choice $9$ FORGETS THE BINOMIAL COEFFICIENT $3$, keeping only $3^2$ ✗; $3$ DROPS THE NUMERIC FACTORS ALTOGETHER, keeping only the count ✗; $81$ TAKES ONE POWER OF $3$ TOO MANY, as if all three factors handed over a numeric $3$ ✗.)',
    },
    {
      q: 'When $(x^2+x)^5$ is expanded and like terms are combined, what is the sum of all of its coefficients?',
      choices: ['$16$', '$32$', '$10$', '$64$'],
      answer: 1,
      solution:
        'Route one, substitute $x = 1$. The sum of the coefficients of any polynomial is its value at $x = 1$, and $(1^2 + 1)^5 = 2^5 = 32$ ✓. Route two, list the expansion. $(x^2+x)^5 = x^5(x+1)^5 = x^{10} + 5x^9 + 10x^8 + 10x^7 + 5x^6 + x^5$, whose coefficients $1, 5, 10, 10, 5, 1$ sum to $32$ ✓. (The choice $16$ STOPS A DOUBLING SHORT at $2^4$ ✗; $10$ IS THE LARGEST SINGLE COEFFICIENT, not the sum ✗; $64$ TAKES ONE DOUBLING TOO MANY, $2^6$ ✗.)',
    },
  ],
  // slot 9 — a trinomial that is secretly a power of a binomial
  [
    {
      q: 'When $(x^2+2x+1)^4$ is expanded and like terms are combined, what is the coefficient of $x^7$?',
      choices: ['$28$', '$4$', '$16$', '$8$'],
      answer: 3,
      solution:
        'Route one, recognize the square. $x^2 + 2x + 1 = (x+1)^2$, so the expression is $(x+1)^8$ and the coefficient of $x^7$ is $\\binom{8}{7} = 8$ ✓. Route two, choose from the trinomial. An $x^7$ product takes $x^2$ from three of the four factors and $2x$ from the remaining one: $\\binom{4}{1} = 4$ choices, each contributing a factor of $2$, so the coefficient is $4\\cdot 2 = 8$ ✓. (The choice $28$ IS $\\binom{8}{6}$, THE WRONG BINOMIAL INDEX — that is the $x^6$ coefficient ✗; $4$ FORGETS THE $2$ IN $2x$ ✗; $16$ SQUARES THE $2$, as if two factors handed over the $2x$ ✗.)',
    },
    {
      q: 'When $(x^2-2x+1)^3$ is expanded and like terms are combined, what is the coefficient of $x^3$?',
      choices: ['$20$', '$-20$', '$-8$', '$15$'],
      answer: 1,
      solution:
        'Route one, recognize the square. $x^2 - 2x + 1 = (x-1)^2$, so the expression is $(x-1)^6$ and the coefficient of $x^3$ is $\\binom{6}{3}(-1)^3 = -20$ ✓. Route two, trinomial casework. An $x^3$ product either takes $-2x$ from all three factors, worth $(-2)^3 = -8$, or takes $x^2$, $-2x$, and $1$ from the three factors in some order: $3! = 6$ assignments, each worth $-2$, for $-12$. Total $-8 - 12 = -20$ ✓. (The choice $20$ LOSES THE SIGN — $(-1)^3$ is negative ✗; $-8$ KEEPS ONLY THE ALL-$(-2x)$ PRODUCTS and misses the mixed ones ✗; $15$ IS $\\binom{6}{2}$, THE WRONG BINOMIAL INDEX ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x$ in the expansion of $(x^2+2x+1)^n$ is $22$. What is $n$?',
      choices: ['$11$', '$22$', '$12$', '$44$'],
      answer: 0,
      solution:
        'Route one, rewrite as a power. $(x^2+2x+1)^n = (x+1)^{2n}$, whose coefficient of $x$ is $\\binom{2n}{1} = 2n$; so $2n = 22$ and $n = 11$ ✓. Route two, choose from the trinomial. An $x^1$ product must take $2x$ from exactly one of the $n$ factors and $1$ from all the rest, so the coefficient is $\\binom{n}{1}\\cdot 2 = 2n$, and $2n = 22$ again forces $n = 11$ ✓. (The choice $22$ FORGETS THE $2$ IN $2x$, solving $n = 22$ ✗; $12$ RUNS ONE FACTOR OVER, solving $2(n-1) = 22$ ✗; $44$ DOUBLES INSTEAD OF HALVING ✗.)',
    },
  ],
  // slot 10 — pairing conjugate factors
  [
    {
      q: 'When $(x+1)^4(x-1)^4$ is expanded and like terms are combined, what is the coefficient of $x^6$?',
      choices: ['$4$', '$6$', '$-4$', '$-6$'], answer: 2,
      solution:
        'Route one, pair the factors. $(x+1)^4(x-1)^4 = \\left((x+1)(x-1)\\right)^4 = (x^2-1)^4$, whose $x^6$ term is $\\binom{4}{1}(x^2)^3(-1) = -4x^6$ ✓. Route two, convolve the two expansions. $(x+1)^4$ has coefficients $1, 4, 6, 4, 1$ and $(x-1)^4$ has $1, -4, 6, -4, 1$; an $x^6$ product pairs $x^4$ with $x^2$, $x^3$ with $x^3$, or $x^2$ with $x^4$: $1\\cdot 6 + 4\\cdot(-4) + 6\\cdot 1 = -4$ ✓. (The choice $4$ LOSES THE SIGN ✗; $6$ IS THE $x^4$ COEFFICIENT of $(x^2-1)^4$, THE WRONG BINOMIAL INDEX $\\binom{4}{2}$ ✗; $-6$ MAKES BOTH SLIPS, the wrong index with a stray sign ✗.)',
    },
    {
      q: 'When $(x+2)^2(x-2)^2$ is expanded and like terms are combined, what is the coefficient of $x^2$?',
      choices: ['$-8$', '$8$', '$-4$', '$16$'], answer: 0,
      solution:
        'Route one, pair the factors. $(x+2)^2(x-2)^2 = \\left((x+2)(x-2)\\right)^2 = (x^2-4)^2 = x^4 - 8x^2 + 16$, so the coefficient of $x^2$ is $-8$ ✓. Route two, convolve the two expansions. $(x+2)^2 = x^2 + 4x + 4$ and $(x-2)^2 = x^2 - 4x + 4$; the $x^2$ products pair $x^2$ with $4$, $4x$ with $-4x$, and $4$ with $x^2$: $1\\cdot 4 + 4\\cdot(-4) + 4\\cdot 1 = -8$ ✓. (The choice $8$ LOSES THE SIGN ✗; $-4$ FORGETS THE $2$ IN $2ab$ when squaring $x^2 - 4$ ✗; $16$ IS THE CONSTANT TERM, not the $x^2$ coefficient ✗.)',
    },
    {
      q: 'For a positive integer $n$, the coefficient of $x^{2n-2}$ when $(x+1)^n(x-1)^n$ is expanded and like terms are combined is $-9$. What is $n$?',
      choices: ['$10$', '$3$', '$18$', '$9$'], answer: 3,
      solution:
        'Route one, pair the factors. The product is $(x^2-1)^n$, and the term just below the leading $x^{2n}$ is $\\binom{n}{1}(x^2)^{n-1}(-1) = -nx^{2n-2}$; so $-n = -9$ and $n = 9$ ✓. Route two, convolve the top coefficients. In $(x+1)^n$ the top three coefficients are $1$, $n$, $\\binom{n}{2}$, and in $(x-1)^n$ they are $1$, $-n$, $\\binom{n}{2}$; an $x^{2n-2}$ product pairs $x^n$ with $x^{n-2}$, $x^{n-1}$ with $x^{n-1}$, or $x^{n-2}$ with $x^n$: $\\binom{n}{2} - n^2 + \\binom{n}{2} = n(n-1) - n^2 = -n$, so again $n = 9$ ✓. (The choice $10$ SOLVES $n - 1 = 9$, MISREADING WHICH BINOMIAL INDEX the $x^{2n-2}$ term carries ✗; $3$ PAIRS ONLY THE TWO $x^{n-1}$ TERMS, getting $-n^2 = -9$ ✗; $18$ CONFUSES $n$ WITH THE DEGREE $2n$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 14, sections: { '14.2': s142 } }
