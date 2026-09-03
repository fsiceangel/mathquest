// Counting & Probability chapter 14 — variations for the challenge problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: coefficients are read after the
//    expression is multiplied out completely and like terms are combined, and
//    a constant term is the term whose exponent is 0.
//  - Every keyed answer is reached twice along routes that share no steps:
//    the general-term formula against a full expansion, a substitution or
//    factoring identity against direct casework, or a numeric evaluation.
//  - Each distractor is one named slip — a lost sign, a dropped cross term,
//    an off-by-one index, a forgotten power — named in CAPS.

const challenge = [
  // slot 1 — coefficients in sums of two expansions
  [
    {
      q: 'What is the coefficient of $x^3y^2$ when $(x+y)^5 + (x+y)^6$ is expanded and simplified?',
      choices: ['$30$', '$25$', '$20$', '$10$'],
      answer: 3,
      solution:
        'Route one, the theorem on each summand. In $(x+y)^5$ the coefficient of $x^3y^2$ is $\\binom{5}{2} = 10$; in $(x+y)^6$ every term has exponents adding to $6$, and $3 + 2 = 5$, so it contributes nothing. The coefficient is $10 + 0 = 10$ ✓. Route two, write out row $5$. The expansion of $(x+y)^5$ is $x^5 + 5x^4y + 10x^3y^2 + 10x^2y^3 + 5xy^4 + y^5$, whose $x^3y^2$ term visibly has coefficient $10$, and $(x+y)^6$ is homogeneous of degree $6$, so adding it cannot change a degree-$5$ term ✓. (The choice $30$ ADDS $\\binom{6}{3} = 20$ AS IF $(x+y)^6$ CONTAINED AN $x^3y^2$ TERM ✗; $25$ ADDS $\\binom{6}{2} = 15$ from the same nonexistent term ✗; $20$ TAKES $\\binom{6}{3}$ ALONE, reading the coefficient out of the wrong power ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2y^2$ when $(x+y)^6 - (x+y)^4$ is expanded and simplified?',
      choices: ['$9$', '$-6$', '$6$', '$15$'],
      answer: 1,
      solution:
        'Route one, the theorem on each summand. The term $x^2y^2$ has degree $4$, so $(x+y)^6$, homogeneous of degree $6$, contributes nothing; $-(x+y)^4$ contributes $-\\binom{4}{2} = -6$ ✓. Route two, write out row $4$. $(x+y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$, so subtracting it removes $6x^2y^2$; every term of $(x+y)^6$ has total degree $6$ and none can combine with a degree-$4$ term, leaving $-6$ ✓. (The choice $9$ ADDS $\\binom{6}{2} = 15$ AS IF $(x+y)^6$ HAD AN $x^2y^2$ TERM, getting $15 - 6$ ✗; $6$ DROPS THE MINUS SIGN on the subtracted expansion ✗; $15$ TAKES $\\binom{6}{2}$ ALONE and ignores the subtraction entirely ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2y^2$ when $(x+y)^4 + (x+2y)^4$ is expanded and simplified?',
      choices: ['$30$', '$18$', '$12$', '$24$'],
      answer: 0,
      solution:
        'Route one, the theorem on each summand. From $(x+y)^4$ the coefficient of $x^2y^2$ is $\\binom{4}{2} = 6$; from $(x+2y)^4$ it is $\\binom{4}{2}(2)^2 = 6\\cdot 4 = 24$, since the two chosen letters are $2y$ each. The total is $6 + 24 = 30$ ✓. Route two, square the squares. $(x+2y)^4 = \\left((x+2y)^2\\right)^2 = (x^2 + 4xy + 4y^2)^2$, whose $x^2y^2$ terms are $2\\cdot x^2\\cdot 4y^2 = 8x^2y^2$ and $(4xy)^2 = 16x^2y^2$, totaling $24$; likewise $(x+y)^4 = (x^2+2xy+y^2)^2$ gives $2\\cdot 1 + 2^2 = 6$. The sum is $24 + 6 = 30$ ✓. (The choice $18$ USES $2$ INSTEAD OF $2^2$ in the second expansion ✗; $12$ FORGETS THE $2$ ON $y$ ENTIRELY, doubling $6$ ✗; $24$ DROPS THE FIRST SUMMAND, taking $(x+2y)^4$ alone ✗.)',
    },
  ],
  // slot 2 — single coefficients of small expansions
  [
    {
      q: 'What is the coefficient of $x$ when $(x-4)^3$ is expanded?',
      choices: ['$48$', '$-48$', '$16$', '$12$'],
      answer: 0,
      solution:
        'Route one, the theorem. The term with a single $x$ takes $-4$ from two of the three factors: $\\binom{3}{2}x(-4)^2 = 3\\cdot 16\\,x = 48x$, so the coefficient is $48$ ✓. Route two, expand step by step. $(x-4)^2 = x^2 - 8x + 16$, and $(x^2 - 8x + 16)(x - 4) = x^3 - 12x^2 + 48x - 64$; the $x$ term comes from $-8x\\cdot(-4) + 16\\cdot x = 32x + 16x = 48x$ ✓. (The choice $-48$ MISJUDGES THE SIGN, though $(-4)^2$ is positive ✗; $16$ DROPS THE BINOMIAL COEFFICIENT $3$ ✗; $12$ USES $-4$ ONCE INSTEAD OF SQUARED, computing $3\\cdot 4$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2$ when $(x-5)^4$ is expanded?',
      choices: ['$-150$', '$100$', '$150$', '$30$'],
      answer: 2,
      solution:
        'Route one, the theorem. The $x^2$ term takes $-5$ from two of the four factors: $\\binom{4}{2}x^2(-5)^2 = 6\\cdot 25\\,x^2 = 150x^2$ ✓. Route two, square the square. $(x-5)^4 = \\left((x-5)^2\\right)^2 = (x^2 - 10x + 25)^2$, whose $x^2$ terms are $2\\cdot x^2\\cdot 25 = 50x^2$ and $(-10x)^2 = 100x^2$, totaling $150x^2$ ✓. (The choice $-150$ MISJUDGES THE SIGN, though $(-5)^2$ is positive ✗; $100$ USES $4$ INSTEAD OF $\\binom{4}{2} = 6$ ✗; $30$ USES $-5$ ONCE INSTEAD OF SQUARED, computing $6\\cdot 5$ ✗.)',
    },
    {
      q: 'When $(x-3)^3$ is expanded and like terms are combined, what is the sum of all its coefficients?',
      choices: ['$8$', '$-8$', '$-27$', '$64$'],
      answer: 1,
      solution:
        'Route one, substitute $x = 1$. The sum of the coefficients of any polynomial is its value at $x = 1$, and $(1-3)^3 = (-2)^3 = -8$ ✓. Route two, expand and add. $(x-3)^3 = x^3 - 9x^2 + 27x - 27$, and $1 - 9 + 27 - 27 = -8$ ✓. (The choice $8$ MISJUDGES THE SIGN OF $(-2)^3$, though the cube of a negative is negative ✗; $-27$ TAKES ONLY THE CONSTANT TERM, not the sum of all four coefficients ✗; $64$ IGNORES THE MINUS SIGN, computing $(1+3)^3$ ✗.)',
    },
  ],
  // slot 3 — sums that hide a binomial expansion
  [
    {
      q: 'What is $\\binom{4}{0}5^4 - \\binom{4}{1}5^3\\cdot 2 + \\binom{4}{2}5^2\\cdot 2^2 - \\binom{4}{3}5\\cdot 2^3 + \\binom{4}{4}2^4$?',
      choices: ['$2401$', '$81$', '$625$', '$-81$'],
      answer: 1,
      solution:
        'Route one, match the theorem. Each term is $\\binom{4}{k}5^{4-k}(-2)^k$, so the sum is $(5-2)^4 = 3^4 = 81$ ✓. Route two, direct arithmetic. The five terms are $625 - 1000 + 600 - 160 + 16$; adding left to right gives $-375$, then $225$, then $65$, then $81$ ✓. (The choice $2401$ IGNORES THE ALTERNATING SIGNS, computing $(5+2)^4$ ✗; $625$ TAKES THE FIRST TERM ALONE ✗; $-81$ MISJUDGES THE SIGN, though a fourth power is never negative ✗.)',
    },
    {
      q: 'What is $\\binom{6}{0} - \\binom{6}{1}\\cdot 3 + \\binom{6}{2}\\cdot 3^2 - \\binom{6}{3}\\cdot 3^3 + \\binom{6}{4}\\cdot 3^4 - \\binom{6}{5}\\cdot 3^5 + \\binom{6}{6}\\cdot 3^6$?',
      choices: ['$4096$', '$-64$', '$729$', '$64$'],
      answer: 3,
      solution:
        'Route one, match the theorem. Each term is $\\binom{6}{k}1^{6-k}(-3)^k$, so the sum is $(1-3)^6 = (-2)^6 = 64$ ✓. Route two, direct arithmetic. The terms are $1 - 18 + 135 - 540 + 1215 - 1458 + 729$; adding left to right gives $-17$, $118$, $-422$, $793$, $-665$, and finally $64$ ✓. (The choice $4096$ IGNORES THE ALTERNATING SIGNS, computing $(1+3)^6 = 4^6$ ✗; $-64$ MISJUDGES THE SIGN, though $(-2)^6$ has an even exponent ✗; $729$ TAKES THE LAST TERM $3^6$ ALONE ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\sum_{k=0}^{n}\\binom{n}{k}4^{n-k}(-2)^k = 2097152$. What is $n$?',
      choices: ['$7$', '$20$', '$21$', '$10$'],
      answer: 2,
      solution:
        'Route one, the theorem plus halving. The sum is $(4-2)^n = 2^n$, and halving $2097152$ repeatedly reaches $1$ after exactly $21$ steps, so $n = 21$ ✓. Route two, factor the target. $2097152 = 2\\cdot 1048576 = 2\\cdot 1024^2 = 2\\cdot\\left(2^{10}\\right)^2 = 2^{21}$, and since $2^n$ is strictly increasing no other $n$ works: $n = 21$ ✓. (The choice $7$ READS THE BASE AS $4\\cdot 2 = 8$, and $8^7 = 2097152$ makes the slip look right ✗; $20$ STOPS ONE DOUBLING SHORT, since $2^{20} = 1048576$ ✗; $10$ TREATS THE SUM AS $4^n\\cdot 2 = 2^{2n+1}$, solving $2n + 1 = 21$ ✗.)',
    },
  ],
  // slot 4 — exact decimal powers
  [
    {
      q: 'What is the exact value of $0.98^4$?',
      choices: ['$0.92$', '$0.9224$', '$0.92236816$', '$0.92236784$'],
      answer: 2,
      solution:
        'Route one, the theorem on $(1 - 0.02)^4$. The five terms are $1 - 4(0.02) + 6(0.02)^2 - 4(0.02)^3 + (0.02)^4 = 1 - 0.08 + 0.0024 - 0.000032 + 0.00000016 = 0.92236816$ ✓. Route two, integer squaring. $98^2 = 9604$ and $9604^2 = (9600+4)^2 = 92160000 + 76800 + 16 = 92236816$, so $0.98^4 = 92236816$ shifted eight decimal places: $0.92236816$ ✓. (The choice $0.9224$ STOPS AFTER THREE TERMS of the expansion ✗; $0.92$ STOPS AFTER TWO TERMS ✗; $0.92236784$ SUBTRACTS THE LAST TERM INSTEAD OF ADDING IT, though $(+0.02)^4$ carries a plus sign ✗.)',
    },
    {
      q: 'What is the exact value of $0.95^3$?',
      choices: ['$0.857375$', '$0.8575$', '$0.85$', '$0.857625$'],
      answer: 0,
      solution:
        'Route one, the theorem on $(1 - 0.05)^3$. The four terms are $1 - 3(0.05) + 3(0.05)^2 - (0.05)^3 = 1 - 0.15 + 0.0075 - 0.000125 = 0.857375$ ✓. Route two, integer multiplication. $95^2 = 9025$ and $9025\\cdot 95 = 902500 - 45125 = 857375$, so $0.95^3 = 857375$ shifted six decimal places: $0.857375$ ✓. (The choice $0.85$ STOPS AFTER TWO TERMS of the expansion ✗; $0.8575$ STOPS AFTER THREE TERMS ✗; $0.857625$ ADDS THE LAST TERM INSTEAD OF SUBTRACTING IT, though $(-0.05)^3$ is negative ✗.)',
    },
    {
      q: 'A number $x = 1 - d$ for a small positive decimal $d$ satisfies $x^3 = 0.804357$ exactly. What is $x$?',
      choices: ['$0.94$', '$0.92$', '$0.9348$', '$0.93$'],
      answer: 3,
      solution:
        'Route one, count decimal places and verify. The cube has exactly six decimal places, so $x$ has two: $x = 0.93$ is the natural candidate, and $93^2 = 8649$, $8649\\cdot 93 = 804357$, so $0.93^3 = 0.804357$ ✓. Route two, the theorem on $(1-d)^3$ with $d = 0.07$. $1 - 3(0.07) + 3(0.07)^2 - (0.07)^3 = 1 - 0.21 + 0.0147 - 0.000343 = 0.804357$, and since $x^3$ is strictly increasing no other $x$ works ✓. (The choice $0.94$ IS THE NEIGHBOR WHOSE CUBE IS $0.830584$, too big ✗; $0.92$ IS THE NEIGHBOR WHOSE CUBE IS $0.778688$, too small ✗; $0.9348$ SOLVES ONLY THE LINEAR PART $1 - 3d = 0.804357$, dropping the higher-order terms ✗.)',
    },
  ],
  // slot 5 — coefficients with numeric bases on both letters
  [
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $(3x+2)^4$?',
      choices: ['$216$', '$108$', '$54$', '$24$'],
      answer: 0,
      solution:
        'Route one, the theorem. Three of the four factors give $3x$ and one gives $2$: $\\binom{4}{3}(3x)^3\\cdot 2 = 4\\cdot 27\\cdot 2\\,x^3 = 216x^3$ ✓. Route two, square the square. $(3x+2)^4 = \\left((3x+2)^2\\right)^2 = (9x^2 + 12x + 4)^2$, whose $x^3$ terms are $2\\cdot 9x^2\\cdot 12x = 216x^3$, and no other pair of terms reaches degree $3$ ✓. (The choice $108$ FORGETS THE FACTOR $2$ from the fourth factor ✗; $54$ DROPS THE BINOMIAL COEFFICIENT $4$, computing $27\\cdot 2$ ✗; $24$ USES $3$ ONCE INSTEAD OF CUBED, computing $4\\cdot 3\\cdot 2$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2y^2$ in the expansion of $(2x+5y)^4$?',
      choices: ['$100$', '$120$', '$600$', '$300$'],
      answer: 2,
      solution:
        'Route one, the theorem. Two factors give $2x$ and two give $5y$: $\\binom{4}{2}(2x)^2(5y)^2 = 6\\cdot 4\\cdot 25\\,x^2y^2 = 600x^2y^2$ ✓. Route two, square the square. $(2x+5y)^4 = \\left((2x+5y)^2\\right)^2 = (4x^2 + 20xy + 25y^2)^2$, whose $x^2y^2$ terms are $2\\cdot 4x^2\\cdot 25y^2 = 200x^2y^2$ and $(20xy)^2 = 400x^2y^2$, totaling $600x^2y^2$ ✓. (The choice $100$ DROPS THE BINOMIAL COEFFICIENT $6$, computing $4\\cdot 25$ ✗; $120$ USES $5$ ONCE INSTEAD OF SQUARED, computing $6\\cdot 4\\cdot 5$ ✗; $300$ USES $2$ ONCE INSTEAD OF SQUARED, computing $6\\cdot 2\\cdot 25$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^3$ in the expansion of $(2x+3)^5$?',
      choices: ['$240$', '$720$', '$80$', '$2160$'],
      answer: 1,
      solution:
        'Route one, the theorem. Three of the five factors give $2x$ and two give $3$: $\\binom{5}{3}(2x)^3\\cdot 3^2 = 10\\cdot 8\\cdot 9\\,x^3 = 720x^3$ ✓. Route two, split the power. $(2x+3)^5 = (2x+3)^2(2x+3)^3 = (4x^2 + 12x + 9)(8x^3 + 36x^2 + 54x + 27)$, and the $x^3$ products are $4x^2\\cdot 54x + 12x\\cdot 36x^2 + 9\\cdot 8x^3 = (216 + 432 + 72)x^3 = 720x^3$ ✓. (The choice $240$ USES $3$ ONCE INSTEAD OF SQUARED ✗; $80$ FORGETS THE $3^2$ ENTIRELY, computing $10\\cdot 8$ ✗; $2160$ USES $3^3$ AS IF THREE FACTORS GAVE A $3$ ✗.)',
    },
  ],
  // slot 6 — constant terms and near-constant terms of Laurent binomials
  [
    {
      q: 'What is the constant term in the expansion of $\\left(x - \\frac{1}{x}\\right)^{10}$?',
      choices: ['$252$', '$0$', '$-252$', '$-210$'],
      answer: 2,
      solution:
        'Route one, the general term. $\\binom{10}{k}x^{10-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{10}{k}(-1)^kx^{10-2k}$ is constant when $10 - 2k = 0$, so $k = 5$, giving $\\binom{10}{5}(-1)^5 = -252$ ✓. Route two, clear denominators. Multiplying by $x^{10}$ turns the constant term into the coefficient of $x^{10}$ in $(x^2 - 1)^{10}$, which needs five factors of $x^2$ and five of $-1$: $\\binom{10}{5}(-1)^5 = -252$ ✓. (The choice $252$ MISJUDGES THE SIGN, though $(-1)^5$ is negative ✗; $0$ ASSUMES NO CONSTANT TERM EXISTS, but $10 - 2k = 0$ has the integer solution $k = 5$ ✗; $-210$ USES $\\binom{10}{4}$, the wrong binomial index ✗.)',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(3x - \\frac{1}{x}\\right)^4$?',
      choices: ['$54$', '$-54$', '$108$', '$36$'],
      answer: 0,
      solution:
        'Route one, the general term. $\\binom{4}{k}(3x)^{4-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{4}{k}3^{4-k}(-1)^kx^{4-2k}$ is constant when $k = 2$: $\\binom{4}{2}\\cdot 3^2\\cdot(-1)^2 = 6\\cdot 9 = 54$ ✓. Route two, square the square. $\\left(3x - \\frac{1}{x}\\right)^2 = 9x^2 - 6 + \\frac{1}{x^2}$, and squaring it, the constant products are $(-6)^2 = 36$ and twice $9x^2\\cdot\\frac{1}{x^2} = 9$, so $36 + 18 = 54$ ✓. (The choice $-54$ MISJUDGES THE SIGN, though $(-1)^2$ is positive ✗; $108$ USES $k = 1$, computing $\\binom{4}{1}\\cdot 3^3$ ✗; $36$ DROPS THE BINOMIAL COEFFICIENT, using $4\\cdot 9$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^2$ in the expansion of $\\left(x - \\frac{1}{x}\\right)^8$?',
      choices: ['$56$', '$28$', '$70$', '$-56$'],
      answer: 3,
      solution:
        'Route one, the general term. $\\binom{8}{k}x^{8-k}\\left(-\\frac{1}{x}\\right)^k = \\binom{8}{k}(-1)^kx^{8-2k}$ has exponent $2$ when $8 - 2k = 2$, so $k = 3$, giving $\\binom{8}{3}(-1)^3 = -56$ ✓. Route two, clear denominators. Multiplying by $x^8$ turns the $x^2$ coefficient into the coefficient of $x^{10}$ in $(x^2-1)^8$, which needs five factors of $x^2$ and three of $-1$: $\\binom{8}{3}(-1)^3 = -56$ ✓. (The choice $56$ MISJUDGES THE SIGN, though $(-1)^3$ is negative ✗; $28$ MIS-SOLVES THE EXPONENT EQUATION AS $k = 2$, giving $\\binom{8}{2}$ ✗; $70$ GRABS THE CONSTANT TERM’S $\\binom{8}{4}$ instead ✗.)',
    },
  ],
  // slot 7 — products of two polynomial expansions
  [
    {
      q: 'What is the coefficient of $x^6$ when $(1+x^2)^5(1-x^4)^2$ is expanded?',
      choices: ['$10$', '$0$', '$-10$', '$20$'],
      answer: 1,
      solution:
        'Route one, casework on the second factor. $(1-x^4)^2 = 1 - 2x^4 + x^8$, and $(1+x^2)^5$ has terms $\\binom{5}{j}x^{2j}$. For $x^6$: pair $x^6$ with the $1$, giving $\\binom{5}{3} = 10$, or pair $x^2$ with $-2x^4$, giving $\\binom{5}{1}(-2) = -10$; the $x^8$ term overshoots. The coefficient is $10 - 10 = 0$ ✓. Route two, substitute $t = x^2$ and factor. The coefficient sought is that of $t^3$ in $(1+t)^5(1-t^2)^2 = (1+t)^5(1+t)^2(1-t)^2 = (1+t)^7(1-t)^2$, which is $\\binom{7}{3} - 2\\binom{7}{2} + \\binom{7}{1} = 35 - 42 + 7 = 0$ ✓. (The choice $10$ FORGETS THE CROSS TERM $-2x^4$ ✗; $-10$ TAKES THE CROSS TERM ALONE and drops the $\\binom{5}{3}$ pairing ✗; $20$ MISJUDGES THE CROSS TERM’S SIGN, adding $10 + 10$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(1+2x)^4(1+x^2)^2$ is expanded?',
      choices: ['$41$', '$17$', '$49$', '$65$'],
      answer: 3,
      solution:
        'Route one, casework on the second factor. $(1+x^2)^2 = 1 + 2x^2 + x^4$, and $(1+2x)^4$ has $x^4$, $x^2$, and constant coefficients $2^4 = 16$, $\\binom{4}{2}2^2 = 24$, and $1$. For $x^4$: $16\\cdot 1 + 24\\cdot 2 + 1\\cdot 1 = 16 + 48 + 1 = 65$ ✓. Route two, pair the factors. The product is $\\left((1+2x)^2(1+x^2)\\right)^2$, and the inner product is $(1 + 4x + 4x^2)(1 + x^2) = 1 + 4x + 5x^2 + 4x^3 + 4x^4$; squaring, the $x^4$ products are $2\\cdot 1\\cdot 4 + 2\\cdot 4\\cdot 4 + 5^2 = 8 + 32 + 25 = 65$ ✓. (The choice $41$ FORGETS THE COEFFICIENT $2$ ON THE MIDDLE TERM of $(1+x^2)^2$, computing $16 + 24 + 1$ ✗; $17$ DROPS THE CROSS CASE ENTIRELY, computing $16 + 1$ ✗; $49$ DROPS THE $x^4$ TERM OF $(1+2x)^4$, computing $48 + 1$ ✗.)',
    },
    {
      q: 'What is the coefficient of $x^9$ when $(1+x^2)^5(1-x^3)^2$ is expanded?',
      choices: ['$20$', '$-10$', '$-20$', '$0$'],
      answer: 2,
      solution:
        'Route one, a parity argument. $(1+x^2)^5$ contains only even powers of $x$, and $(1-x^3)^2 = 1 - 2x^3 + x^6$ has one odd-power term. An odd total like $x^9$ must use the $-2x^3$ term, paired with $x^6$ from $(1+x^2)^5$: the coefficient is $-2\\binom{5}{3} = -20$ ✓. Route two, convolve coefficient lists. The coefficients of $(1+x^2)^5$ at $x^0, x^3, x^6, x^9$ are $1, 0, 10, 0$, and those of $1 - 2x^3 + x^6$ at $x^9, x^6, x^3, x^0$ are $0, 0, -2, 1$; the degree-$9$ products are $1\\cdot 0 + 0\\cdot 0 + 10\\cdot(-2) + 0\\cdot 1 = -20$ ✓. (The choice $20$ MISJUDGES THE SIGN of the $-2x^3$ term ✗; $-10$ FORGETS THE COEFFICIENT $2$ in $-2x^3$ ✗; $0$ ASSUMES NO ODD POWER IS REACHABLE, missing the $x^3$ term ✗.)',
    },
  ],
  // slot 8 — solving for an unknown from a binomial sum
  [
    {
      q: 'For a positive integer $n$, $\\sum_{k=0}^{n}\\binom{n}{k}(-4)^k = -27$. What is $n$?',
      choices: ['$5$', '$3$', '$4$', '$2$'],
      answer: 1,
      solution:
        'Route one, the theorem. The sum is $(1-4)^n = (-3)^n$, and $(-3)^3 = -27$, an odd power matching the negative sign, so $n = 3$ ✓. Route two, check the sum directly. For $n = 3$: $\\binom{3}{0} - \\binom{3}{1}\\cdot 4 + \\binom{3}{2}\\cdot 16 - \\binom{3}{3}\\cdot 64 = 1 - 12 + 48 - 64 = -27$, and since the magnitude $3^n$ strictly increases, no other $n$ can give $27$ ✓. (The choice $5$ GIVES $(-3)^5 = -243$, nine times too far ✗; $4$ GIVES $(-3)^4 = +81$, THE WRONG SIGN because the exponent is even ✗; $2$ GIVES $(-3)^2 = +9$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\sum_{k=0}^{n}\\binom{n}{k}5^k = 7776$. What is $n$?',
      choices: ['$6$', '$4$', '$7$', '$5$'],
      answer: 3,
      solution:
        'Route one, the theorem. The sum is $(1+5)^n = 6^n$, and $6^2 = 36$, $6^4 = 1296$, $6^5 = 7776$, so $n = 5$ ✓. Route two, factor the target. $7776 = 2^5\\cdot 3^5 = (2\\cdot 3)^5 = 6^5$, and since $6^n$ is strictly increasing no other $n$ works: $n = 5$ ✓. (The choice $6$ CONFUSES THE BASE $6$ WITH THE EXPONENT, and $6^6 = 46656$ ✗; $4$ STOPS A FACTOR OF $6$ SHORT at $1296$ ✗; $7$ OVERSHOOTS TO $279936$ ✗.)',
    },
    {
      q: 'For a positive integer $c$, $\\sum_{k=0}^{3}\\binom{3}{k}c^k = 12167$. What is $c$?',
      choices: ['$23$', '$21$', '$22$', '$24$'],
      answer: 2,
      solution:
        'Route one, the theorem. The sum is $(1+c)^3 = 12167$, and $23^2 = 529$, $529\\cdot 23 = 12167$, so $1 + c = 23$ and $c = 22$ ✓. Route two, bracket by size and last digit. $20^3 = 8000$ and $30^3 = 27000$ put $1+c$ in the twenties, and a cube ends in $7$ only when its root ends in $3$, so $1 + c = 23$ and $c = 22$ ✓. (The choice $23$ FORGETS TO SUBTRACT $1$, reporting the cube root itself ✗; $21$ SUBTRACTS $1$ TWICE ✗; $24$ ADDS $1$ INSTEAD OF SUBTRACTING ✗.)',
    },
  ],
  // slot 9 — equal or proportional binomial coefficients
  [
    {
      q: 'In the expansion of $(1+x)^n$, the coefficient of $x^4$ is exactly five times the coefficient of $x^3$. What is $n$?',
      choices: ['$23$', '$20$', '$24$', '$28$'],
      answer: 0,
      solution:
        'Route one, the stepping ratio. $\\binom{n}{4} = \\binom{n}{3}\\cdot\\frac{n-3}{4}$, so the condition says $\\frac{n-3}{4} = 5$, giving $n - 3 = 20$ and $n = 23$ ✓. Route two, check the row. $\\binom{23}{3} = \\frac{23\\cdot 22\\cdot 21}{6} = 1771$ and $\\binom{23}{4} = 1771\\cdot\\frac{20}{4} = 8855 = 5\\cdot 1771$; since the ratio $\\frac{n-3}{4}$ strictly increases with $n$, no other row works ✓. (The choice $20$ REPORTS $n - 3$, forgetting to add the $3$ back ✗; $24$ USES $n - 4$ IN THE RATIO, an off-by-one in the stepping rule ✗; $28$ DIVIDES BY $5$ INSTEAD OF $4$, as if the ratio were $\\frac{n-3}{5}$ ✗.)',
    },
    {
      q: 'For an integer $n > 8$, the coefficients of $x^5$ and $x^8$ in the expansion of $(1+x)^n$ are equal and nonzero. What is $n$?',
      choices: ['$40$', '$12$', '$13$', '$14$'],
      answer: 2,
      solution:
        'Route one, symmetry. $\\binom{n}{k} = \\binom{n}{n-k}$, and two distinct lower indices give equal nonzero entries exactly when $n - 5 = 8$, so $n = 13$; indeed $\\binom{13}{5} = 1287 = \\binom{13}{8}$ ✓. Route two, the shape of a row. Row $n$ rises to its middle and then falls, so equal entries at the distinct indices $5$ and $8$ must sit symmetrically about the center: $\\frac{n}{2} = \\frac{5+8}{2}$, giving $n = 13$ ✓. (The choice $40$ MULTIPLIES $5\\cdot 8$ instead of adding ✗; $12$ USES $n - 5 = 8 - 1$, an off-by-one in the symmetry rule ✗; $14$ ADDS AN EXTRA $1$ to $5 + 8$ ✗.)',
    },
    {
      q: 'In the expansion of $(1+x)^n$, the coefficient of $x^2$ is exactly $13$ times the coefficient of $x$. What is $n$?',
      choices: ['$26$', '$27$', '$25$', '$14$'],
      answer: 1,
      solution:
        'Route one, the stepping ratio. $\\binom{n}{2} = \\binom{n}{1}\\cdot\\frac{n-1}{2}$, so $\\frac{n-1}{2} = 13$, giving $n - 1 = 26$ and $n = 27$ ✓. Route two, the formulas. $\\binom{n}{2} = \\frac{n(n-1)}{2}$ and $\\binom{n}{1} = n$, so $\\frac{n(n-1)}{2} = 13n$; dividing by $n > 0$ gives $n - 1 = 26$, and a check confirms $\\binom{27}{2} = 351 = 13\\cdot 27$ ✓. (The choice $26$ SOLVES $\\frac{n}{2} = 13$, using $n$ instead of $n - 1$ ✗; $25$ USES $\\frac{n+1}{2}$, the wrong sign inside the ratio ✗; $14$ FORGETS THE DIVISION BY $2$, solving $n - 1 = 13$ ✗.)',
    },
  ],
  // slot 10 — constant terms of mixed Laurent products
  [
    {
      q: 'What is the constant term in the expansion of $\\left(x + \\frac{1}{x}\\right)^2\\left(x - \\frac{1}{x}\\right)^6$? (Pair factors into $\\left(x^2 - \\frac{1}{x^2}\\right)^2\\left(x - \\frac{1}{x}\\right)^4$.)',
      choices: ['$-12$', '$10$', '$-10$', '$-40$'],
      answer: 2,
      solution:
        'Route one, pair the factors. Each $x + \\frac{1}{x}$ times an $x - \\frac{1}{x}$ gives $x^2 - \\frac{1}{x^2}$, so the product is $\\left(x^2 - \\frac{1}{x^2}\\right)^2\\left(x - \\frac{1}{x}\\right)^4$. The first factor is $x^4 - 2 + \\frac{1}{x^4}$ and the second is $x^4 - 4x^2 + 6 - \\frac{4}{x^2} + \\frac{1}{x^4}$; the exponent-zero products are $x^4\\cdot\\frac{1}{x^4}$, $(-2)\\cdot 6$, and $\\frac{1}{x^4}\\cdot x^4$, totaling $1 - 12 + 1 = -10$ ✓. Route two, clear denominators. Multiplying by $x^8$ turns the constant term into the coefficient of $t^4$ in $(t+1)^2(t-1)^6$ where $t = x^2$. With $(t+1)^2 = t^2 + 2t + 1$ and the $(t-1)^6$ coefficients $\\binom{6}{2} = 15$, $-\\binom{6}{3} = -20$, $\\binom{6}{4} = 15$ at $t^2, t^3, t^4$, the degree-$4$ products are $15 - 40 + 15 = -10$ ✓. (The choice $-12$ TAKES THE MIDDLE PRODUCT $(-2)\\cdot 6$ ALONE, dropping the two end products ✗; $10$ MISJUDGES THE OVERALL SIGN ✗; $-40$ MULTIPLIES THE TWO FACTORS’ OWN CONSTANT TERMS, $2$ and $-20$, as if no cross terms combined ✗.)',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(x + \\frac{3}{x}\\right)^2\\left(x - \\frac{3}{x}\\right)^2$?',
      choices: ['$-18$', '$18$', '$81$', '$-36$'],
      answer: 0,
      solution:
        'Route one, difference of squares first. $\\left(x + \\frac{3}{x}\\right)\\left(x - \\frac{3}{x}\\right) = x^2 - \\frac{9}{x^2}$, so the product is $\\left(x^2 - \\frac{9}{x^2}\\right)^2 = x^4 - 18 + \\frac{81}{x^4}$, whose constant term is $-18$ ✓. Route two, expand each square. $\\left(x + \\frac{3}{x}\\right)^2 = x^2 + 6 + \\frac{9}{x^2}$ and $\\left(x - \\frac{3}{x}\\right)^2 = x^2 - 6 + \\frac{9}{x^2}$; the exponent-zero products are $x^2\\cdot\\frac{9}{x^2} = 9$, then $6\\cdot(-6) = -36$, then $\\frac{9}{x^2}\\cdot x^2 = 9$, totaling $-18$ ✓. (The choice $18$ MISJUDGES THE SIGN of the middle term of $\\left(x^2 - \\frac{9}{x^2}\\right)^2$ ✗; $81$ REPORTS THE $\\frac{81}{x^4}$ COEFFICIENT, which is not the constant term ✗; $-36$ MULTIPLIES THE TWO SQUARES’ OWN CONSTANT TERMS $6$ AND $-6$ as if no cross terms combined ✗.)',
    },
    {
      q: 'What is the coefficient of $x^6$ in the expansion of $\\left(x + \\frac{1}{x}\\right)^6\\left(x - \\frac{1}{x}\\right)^4$?',
      choices: ['$3$', '$-4$', '$1$', '$-3$'],
      answer: 3,
      solution:
        'Route one, pair the factors. Four of the six copies of $x + \\frac{1}{x}$ pair with the four copies of $x - \\frac{1}{x}$ to give $\\left(x^2 - \\frac{1}{x^2}\\right)^4\\left(x + \\frac{1}{x}\\right)^2$. The first factor is $x^8 - 4x^4 + 6 - \\frac{4}{x^4} + \\frac{1}{x^8}$ and the second is $x^2 + 2 + \\frac{1}{x^2}$; the exponent-$6$ products are $x^8\\cdot\\frac{1}{x^2}$ and $-4x^4\\cdot x^2$, totaling $1 - 4 = -3$ ✓. Route two, clear denominators. Multiplying by $x^{10}$ turns the $x^6$ coefficient into the coefficient of $t^8$ in $(t+1)^6(t-1)^4$ where $t = x^2$. With $(t-1)^4 = t^4 - 4t^3 + 6t^2 - 4t + 1$, the degree-$8$ products are $\\binom{6}{4}\\cdot 1 + \\binom{6}{5}(-4) + \\binom{6}{6}\\cdot 6 = 15 - 24 + 6 = -3$ ✓. (The choice $3$ MISJUDGES THE OVERALL SIGN ✗; $-4$ DROPS THE $x^8\\cdot\\frac{1}{x^2}$ PRODUCT ✗; $1$ DROPS THE $-4x^4\\cdot x^2$ PRODUCT ✗.)',
    },
  ],
  // slot 11 — one coefficient across a run of expansions
  [
    {
      q: 'What is the coefficient of $x^2$ when $(1+x)^3 + (1+x)^4 + \\cdots + (1+x)^{12}$ is expanded and simplified?',
      choices: ['$286$', '$220$', '$364$', '$285$'],
      answer: 3,
      solution:
        'Route one, the hockey stick. The coefficient of $x^2$ in $(1+x)^m$ is $\\binom{m}{2}$, so the answer is $\\binom{3}{2} + \\binom{4}{2} + \\cdots + \\binom{12}{2}$. Extending down to $\\binom{2}{2}$ gives $\\binom{13}{3} = 286$ by the hockey stick identity, so the sum asked for is $286 - \\binom{2}{2} = 285$ ✓. Route two, add directly. The terms are $3 + 6 + 10 + 15 + 21 + 28 + 36 + 45 + 55 + 66$; running totals are $9, 19, 34, 55, 83, 119, 164, 219, 285$ ✓. (The choice $286$ INCLUDES THE MISSING $\\binom{2}{2}$, forgetting the sum starts at $(1+x)^3$ ✗; $220$ IS $\\binom{12}{3}$, stopping the hockey stick one row early ✗; $364$ IS $\\binom{14}{3}$, going one row too far ✗.)',
    },
    {
      q: 'What is the coefficient of $x^4$ when $(1+x)^4 + (1+x)^5 + (1+x)^6 + (1+x)^7$ is expanded and simplified?',
      choices: ['$70$', '$56$', '$35$', '$55$'],
      answer: 1,
      solution:
        'Route one, add directly. The coefficient of $x^4$ in $(1+x)^m$ is $\\binom{m}{4}$, so the answer is $\\binom{4}{4} + \\binom{5}{4} + \\binom{6}{4} + \\binom{7}{4} = 1 + 5 + 15 + 35 = 56$ ✓. Route two, the hockey stick. A sum of $\\binom{m}{4}$ from the top of the column down to $m = 7$ collapses to $\\binom{8}{5} = 56$ ✓. (The choice $70$ IS $\\binom{8}{4}$, THE WRONG LOWER INDEX in the hockey stick ✗; $35$ TAKES ONLY THE TOP ROW $\\binom{7}{4}$ ✗; $55$ DROPS $\\binom{4}{4} = 1$ from the sum ✗.)',
    },
    {
      q: 'For an integer $m \\ge 2$, the coefficient of $x^2$ when $(1+x)^2 + (1+x)^3 + \\cdots + (1+x)^m$ is expanded and simplified is $2024$. What is $m$?',
      choices: ['$23$', '$24$', '$22$', '$25$'],
      answer: 0,
      solution:
        'Route one, the hockey stick. The coefficient is $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{m}{2} = \\binom{m+1}{3}$, so $\\binom{m+1}{3} = 2024$. Since $\\binom{24}{3} = \\frac{24\\cdot 23\\cdot 22}{6} = 2024$, we get $m + 1 = 24$ and $m = 23$ ✓. Route two, three consecutive integers. $\\binom{m+1}{3} = \\frac{(m-1)m(m+1)}{6} = 2024$ means $(m-1)m(m+1) = 12144$, a product of three consecutive integers near $\\sqrt[3]{12144} \\approx 23$; indeed $22\\cdot 23\\cdot 24 = 12144$, so $m = 23$ ✓. (The choice $24$ REPORTS $m + 1$, the upper index of the hockey stick ✗; $22$ IS AN OFF-BY-ONE THE OTHER WAY, solving $\\binom{m+2}{3} = 2024$ ✗; $25$ ADDS $1$ INSTEAD OF SUBTRACTING it from $24$ ✗.)',
    },
  ],
  // slot 12 — trinomials that hide a perfect square
  [
    {
      q: 'What is the constant term in the expansion of $\\left(x - 2 + \\frac{1}{x}\\right)^4$? (Write it as $\\frac{(x-1)^8}{x^4}$.)',
      choices: ['$-70$', '$16$', '$56$', '$70$'],
      answer: 3,
      solution:
        'Route one, factor the trinomial. $x - 2 + \\frac{1}{x} = \\frac{x^2 - 2x + 1}{x} = \\frac{(x-1)^2}{x}$, so the fourth power is $\\frac{(x-1)^8}{x^4}$ and the constant term is the coefficient of $x^4$ in $(x-1)^8$: $\\binom{8}{4}(-1)^4 = 70$ ✓. Route two, trinomial casework. A constant product takes $x$ from $i$ factors, $\\frac{1}{x}$ from $i$ factors, and $-2$ from the rest: $i = 0$ gives $(-2)^4 = 16$; $i = 1$ gives $\\frac{4!}{1!\\,1!\\,2!}(-2)^2 = 12\\cdot 4 = 48$; $i = 2$ gives $\\frac{4!}{2!\\,2!\\,0!} = 6$. The total is $16 + 48 + 6 = 70$ ✓. (The choice $-70$ MISJUDGES THE SIGN, though $(-1)^4$ is positive ✗; $16$ TAKES THE ALL-MIDDLE PRODUCT $(-2)^4$ ALONE ✗; $56$ USES $\\binom{8}{3}$, the wrong binomial index ✗.)',
    },
    {
      q: 'What is the constant term in the expansion of $\\left(4x + 4 + \\frac{1}{x}\\right)^3$? (Write it as $\\frac{(2x+1)^6}{x^3}$.)',
      choices: ['$20$', '$160$', '$64$', '$240$'],
      answer: 1,
      solution:
        'Route one, factor the trinomial. $4x + 4 + \\frac{1}{x} = \\frac{4x^2 + 4x + 1}{x} = \\frac{(2x+1)^2}{x}$, so the cube is $\\frac{(2x+1)^6}{x^3}$ and the constant term is the coefficient of $x^3$ in $(2x+1)^6$: $\\binom{6}{3}2^3 = 20\\cdot 8 = 160$ ✓. Route two, trinomial casework. A constant product takes $4x$ from $i$ factors, $\\frac{1}{x}$ from $i$ factors, and $4$ from the rest: $i = 0$ gives $4^3 = 64$; $i = 1$ gives $\\frac{3!}{1!\\,1!\\,1!}\\cdot 4\\cdot 4 = 6\\cdot 16 = 96$. The total is $64 + 96 = 160$ ✓. (The choice $20$ FORGETS THE $2^3$, taking $\\binom{6}{3}$ bare ✗; $64$ TAKES THE ALL-MIDDLE PRODUCT $4^3$ ALONE ✗; $240$ USES $\\binom{6}{4}2^4 = 15\\cdot 16$, an off-by-one in the index ✗.)',
    },
    {
      q: 'What is the coefficient of $x$ in the expansion of $\\left(x + 2 + \\frac{1}{x}\\right)^5$?',
      choices: ['$210$', '$252$', '$120$', '$80$'],
      answer: 0,
      solution:
        'Route one, factor the trinomial. $x + 2 + \\frac{1}{x} = \\frac{(x+1)^2}{x}$, so the fifth power is $\\frac{(x+1)^{10}}{x^5}$ and the coefficient of $x$ is the coefficient of $x^6$ in $(x+1)^{10}$: $\\binom{10}{6} = 210$ ✓. Route two, trinomial casework. An $x^1$ product takes $x$ from $i$ factors, $\\frac{1}{x}$ from $i - 1$ factors, and $2$ from the rest: $i = 1$ gives $\\frac{5!}{1!\\,0!\\,4!}2^4 = 5\\cdot 16 = 80$; $i = 2$ gives $\\frac{5!}{2!\\,1!\\,2!}2^2 = 30\\cdot 4 = 120$; $i = 3$ gives $\\frac{5!}{3!\\,2!\\,0!} = 10$. The total is $80 + 120 + 10 = 210$ ✓. (The choice $252$ IS $\\binom{10}{5}$, the constant term’s coefficient — an off-by-one in the exponent ✗; $120$ TAKES THE $i = 2$ CASE ALONE ✗; $80$ STOPS AFTER THE FIRST CASE ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 14,
  challenge,
}
