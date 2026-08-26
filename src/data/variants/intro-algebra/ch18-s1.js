// Introduction to Algebra chapter 18 — variations for section 18.1
// (Addition and Subtraction). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every key was worked twice by two different routes. Sums and differences
//    were combined term by term AND checked by evaluating the original
//    expression and the answer at the same number (usually $x = 2$) and
//    confirming the two values agree. Evaluations were done by straight
//    substitution AND by a nested (factored) rewrite. A "find the missing
//    polynomial" answer was checked by adding it back.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: DROPPING THE SIGN of a coefficient, GRABBING
//    THE NEIGHBOURING TERM, MISTAKING A COEFFICIENT FOR AN EXPONENT, READING
//    A SQUARED TERM AS LINEAR, TREATING A NEGATIVE INPUT AS THOUGH IT WERE
//    POSITIVE, LETTING THE MINUS SIGN REACH ONLY THE FIRST TERM (or stopping
//    one term short), ADDING WHERE THE PROBLEM SAYS SUBTRACT, SUBTRACTING IN
//    THE WRONG ORDER, ASSUMING THE DEGREE OF A SUM IS THE LARGER INPUT DEGREE,
//    STOPPING AFTER ONE CANCELLATION, and ADDING THE DEGREES as though the
//    polynomials were being multiplied.
//  - No two choices inside an item name the same number or the same
//    polynomial, even when written two different ways.

const s181 = [
  // p1 — a coefficient is the SIGNED number multiplying a power.
  [
    {
      q: 'What is the coefficient of $x^3$ in $9x^4 - x^3 + 6x^2 - 11$?',
      choices: ['$9$', '$-1$', '$1$', '$6$'],
      answer: 1,
      solution:
        'The $x^3$ term is $-x^3$, and a bare minus in front of a power hides an invisible $1$: $-x^3$ means $-1$ times $x^3$, so the coefficient is $-1$. Check a second, independent way by rewriting every subtraction as an addition, which lays the coefficients out in the open: $9x^4 + (-1)x^3 + 6x^2 + (-11)$. The number sitting against $x^3$ in that list is $-1$ ✓. (The choice $9$ is GRABBING THE NEIGHBOURING TERM — that is the coefficient of $x^4$; the choice $1$ is DROPPING THE SIGN; the choice $6$ grabs the neighbour on the other side.)',
    },
    {
      q: 'What is the coefficient of $x$ in $2x^3 - 9x^2 - \\frac{3}{4}x + 5$?',
      choices: ['$-\\frac{3}{4}$', '$\\frac{3}{4}$', '$-9$', '$5$'],
      answer: 0,
      solution:
        'The term containing $x$ by itself is $-\\frac{3}{4}x$, so the coefficient is $-\\frac{3}{4}$. A fraction is a perfectly legal coefficient — it is a variable in a denominator that would spoil a polynomial, and there is none here. Check a second, independent way by peeling the power off the term: dividing $-\\frac{3}{4}x$ by $x$ leaves exactly $-\\frac{3}{4}$, and that is what "the number multiplying $x$" means ✓. (The choice $\\frac{3}{4}$ is DROPPING THE SIGN; the choice $-9$ is GRABBING THE NEIGHBOURING TERM, the coefficient of $x^2$; the choice $5$ is the constant term.)',
    },
    {
      q: 'What is the coefficient of $x^2$ in $6x^3 - x + 15$?',
      choices: ['$-1$', '$6$', '$0$', '$15$'],
      answer: 2,
      solution:
        'There is no $x^2$ written anywhere, and a power that is missing is a power with coefficient $0$. So the coefficient of $x^2$ is $0$. Check a second, independent way by writing the polynomial with every power from $3$ down to $0$ shown: $6x^3 + 0x^2 - x + 15$. That is the same polynomial, since adding $0x^2$ adds nothing, and now the $x^2$ coefficient is written out: $0$ ✓. (The choice $-1$ is GRABBING THE NEIGHBOURING TERM $-x$; the choice $6$ is the leading coefficient; the choice $15$ is the constant term.)',
    },
  ],
  // p2 — the whole-number-exponent test, with fraction coefficients kept legal.
  [
    {
      q: 'Three of these four expressions are polynomials. Which one is NOT?',
      choices: ['$x^5 - 8x^2 + 3$', '$\\sqrt{x} + 4$', '$\\frac{2}{5}x^3 - x$', '$9$'],
      answer: 1,
      solution:
        'Every term of a polynomial must be a number times a whole-number power of the variable. A square root is a power of $\\frac{1}{2}$, and $\\frac{1}{2}$ is not a whole number, so $\\sqrt{x} + 4$ is not a polynomial ✗. Check a second, independent way by testing the other three against the same rule instead: $x^5 - 8x^2 + 3$ uses the powers $5$, $2$, $0$ ✓; $\\frac{2}{5}x^3 - x$ uses $3$ and $1$ ✓ — a fraction in front is a COEFFICIENT and is allowed; and $9$ is $9x^0$, a polynomial of degree $0$ ✓. Exactly one expression fails, and it is the one with the root.',
    },
    {
      q: 'Which expression below is NOT a polynomial?',
      choices: ['$7x^{-2} + x$', '$x^4 - \\frac{x}{3}$', '$-11x^2$', '$x^2 + x + \\frac{5}{8}$'],
      answer: 0,
      solution:
        'The exponent $-2$ is not a whole number, so $7x^{-2} + x$ fails the test ✗ — written another way that term is $\\frac{7}{x^2}$, with the variable stuck in a denominator. Check a second, independent way by hunting for a variable in a denominator or under a root in each of the others: $x^4 - \\frac{x}{3}$ divides by the NUMBER $3$, not by $x$, so it is $x^4 - \\frac{1}{3}x$ ✓; $-11x^2$ is a single legal term ✓; and $x^2 + x + \\frac{5}{8}$ has a fraction as its constant term, which is fine ✓. Only the first choice hides a variable downstairs.',
    },
    {
      q: 'Exactly one of these four expressions IS a polynomial. Which one?',
      choices: ['$4x + \\frac{1}{x^3}$', '$x^{1/2} + 6$', '$\\frac{9}{x} - x^2$', '$\\frac{x^2 - 5}{4}$'],
      answer: 3,
      solution:
        'Dividing by the number $4$ is the same as multiplying by $\\frac{1}{4}$, so $\\frac{x^2 - 5}{4} = \\frac{1}{4}x^2 - \\frac{5}{4}$: whole-number powers $2$ and $0$, with fraction coefficients ✓. Check a second, independent way by disqualifying the other three one at a time: $\\frac{1}{x^3}$ is $x^{-3}$ ✗, $x^{1/2}$ has a fractional exponent ✗, and $\\frac{9}{x}$ is $9x^{-1}$ ✗. Three failures and one survivor — the survivor is the one whose only fractions are coefficients.',
    },
  ],
  // p3 — degree is the largest exponent, wherever it happens to be written.
  [
    {
      q: 'What is the degree of $8x^3 + 15 - x^9 + 2x^4$?',
      choices: ['$3$', '$15$', '$9$', '$4$'],
      answer: 2,
      solution:
        'The exponents present are $3$, $0$, $9$, and $4$, and the largest of them is $9$, so the degree is $9$. Check a second, independent way by rearranging into standard form and reading the front: $-x^9 + 2x^4 + 8x^3 + 15$, whose leading term is $-x^9$ ✓. A small-looking coefficient like $-1$ does not shrink a term’s degree. (The choice $3$ assumes the polynomial was already in standard form and takes the FIRST exponent written; the choice $15$ is MISTAKING A CONSTANT FOR AN EXPONENT; the choice $4$ takes the LAST exponent written.)',
    },
    {
      q: 'Which of these polynomials has degree $4$?',
      choices: ['$x^3 + x^2 + x + 1$', '$4x^2 + 4x + 4$', '$2x^5 - 7x$', '$5x^4 - 2$'],
      answer: 3,
      solution:
        'Degree means the largest exponent, and $5x^4 - 2$ has largest exponent $4$ ✓. Check a second, independent way by computing all four degrees and confirming only one lands on $4$: $x^3 + x^2 + x + 1$ has degree $3$, $4x^2 + 4x + 4$ has degree $2$, $2x^5 - 7x$ has degree $5$, and $5x^4 - 2$ has degree $4$ ✓ — one match, no ties. (The choice $x^3 + x^2 + x + 1$ is COUNTING THE TERMS, since it has four of them; the choice $4x^2 + 4x + 4$ is reading the repeated coefficient $4$ as the degree; the choice $2x^5 - 7x$ grabs the biggest exponent on the page rather than the biggest inside one polynomial.)',
    },
    {
      q: 'A polynomial in $x$ has exactly four terms, and the largest exponent appearing in it is $3$. What is its degree?',
      choices: ['$4$', '$3$', '$7$', '$12$'],
      answer: 1,
      solution:
        'Degree is decided by exponents alone — how many terms a polynomial happens to have never enters into it. The largest exponent is $3$, so the degree is $3$. Check a second, independent way by building an example that fits the description and reading its degree off directly: $x^3 + 5x^2 - 2x + 6$ has exactly four terms and largest exponent $3$, and its leading term $x^3$ makes the degree $3$ ✓. (The choice $4$ is COUNTING THE TERMS; the choice $7$ adds the term count to the exponent; the choice $12$ multiplies them.)',
    },
  ],
  // p4 — the leading coefficient belongs to the highest-degree term, sign and all.
  [
    {
      q: 'What is the leading coefficient of $11 - x^3 + 6x^2$?',
      choices: ['$11$', '$6$', '$-1$', '$1$'],
      answer: 2,
      solution:
        'Put it in standard form first: $-x^3 + 6x^2 + 11$. The leading term is $-x^3$, and the minus travels with it, so the leading coefficient is $-1$. Check a second, independent way by asking which single term decides the degree: the degrees here are $0$, $3$, and $2$, so the degree-$3$ term $-x^3$ is the leading one, and the number multiplying $x^3$ is $-1$ ✓. (The choice $11$ takes the number written FIRST; the choice $6$ takes the coefficient of the term written LAST; the choice $1$ is DROPPING THE SIGN.)',
    },
    {
      q: 'Which of these polynomials has leading coefficient $-3$?',
      choices: ['$-3 + 8x^2$', '$5x^2 - 3x^4$', '$3x^4 - x$', '$x^3 - 3x^2$'],
      answer: 1,
      solution:
        'In standard form $5x^2 - 3x^4$ is $-3x^4 + 5x^2$, so its leading term is $-3x^4$ and its leading coefficient is $-3$ ✓. Check a second, independent way by computing the leading coefficient of each choice and confirming only one is $-3$: $-3 + 8x^2$ leads with $8x^2$, giving $8$; $5x^2 - 3x^4$ gives $-3$ ✓; $3x^4 - x$ gives $3$; and $x^3 - 3x^2$ leads with $x^3$, giving $1$. Four different values, one match. (The choice $-3 + 8x^2$ reads the CONSTANT as the leading coefficient because it is written first; the choice $3x^4 - x$ is DROPPING THE SIGN; the choice $x^3 - 3x^2$ spots a $-3$ in the polynomial but on a term that does not lead.)',
    },
    {
      q: 'What is the leading coefficient of $6x - \\frac{5}{2}x^4 + 9x^2 - 1$?',
      choices: ['$6$', '$\\frac{5}{2}$', '$9$', '$-\\frac{5}{2}$'],
      answer: 3,
      solution:
        'Sort by degree: $-\\frac{5}{2}x^4 + 9x^2 + 6x - 1$. The leading term is $-\\frac{5}{2}x^4$, so the leading coefficient is $-\\frac{5}{2}$ — fractions are allowed, and the minus sign is part of the coefficient. Check a second, independent way by listing the degrees in the order written, $1$, $4$, $2$, $0$: the biggest is $4$, and the number multiplying $x^4$ is $-\\frac{5}{2}$ ✓. (The choice $6$ takes the coefficient written first; the choice $\\frac{5}{2}$ is DROPPING THE SIGN; the choice $9$ takes the largest-looking number in sight.)',
    },
  ],
  // p5 — add by collecting like terms, degree by degree.
  [
    {
      q: 'Add: $(4x^3 - 6x + 11) + (7x^2 + 6x - 3)$.',
      choices: [
        '$4x^3 + 7x^2 + 12x + 8$',
        '$4x^3 + 7x^2 + 14$',
        '$4x^3 + 7x^2 + 8$',
        '$4x^3 - 7x^2 - 12x + 14$',
      ],
      answer: 2,
      solution:
        'Collect by degree. The $4x^3$ has no partner, so it stays. The $7x^2$ has no partner either, so it stays. The $x$ terms are $-6x + 6x = 0$, so they vanish. The constants give $11 - 3 = 8$. The sum is $4x^3 + 7x^2 + 8$. Check a second, independent way by evaluating at $x = 2$: the first polynomial is $32 - 12 + 11 = 31$, the second is $28 + 12 - 3 = 37$, and $31 + 37 = 68$; the answer gives $32 + 28 + 8 = 68$ ✓ — the two agree. (The choice with $12x$ adds $6$ and $6$ while IGNORING THE MINUS on $-6x$; the choice ending in $14$ adds the constants as $11 + 3$; the last choice SUBTRACTS WHERE THE PROBLEM SAYS ADD.)',
    },
    {
      q: 'After $x$ weeks, Nadia has $(5x^2 - 13x + 40)$ dollars saved and Owen has $(-2x^2 + 13x + 17)$ dollars saved. Which polynomial gives the amount they have saved together?',
      choices: ['$3x^2 + 57$', '$3x^2 - 26x + 57$', '$3x^2 + 23$', '$7x^2 + 57$'],
      answer: 0,
      solution:
        'Together means add, so collect like terms: $5x^2 + (-2x^2) = 3x^2$, then $-13x + 13x = 0$, then $40 + 17 = 57$. The total is $3x^2 + 57$. Check a second, independent way with a real week — take $x = 3$: Nadia has $45 - 39 + 40 = 46$ dollars and Owen has $-18 + 39 + 17 = 38$ dollars, a total of $\\$84$; the answer gives $3(9) + 57 = 27 + 57 = 84$ ✓. (The choice with $-26x$ adds $13$ and $13$ while ignoring that the two $x$ terms have OPPOSITE SIGNS; the choice $3x^2 + 23$ subtracts the constants as $40 - 17$; the choice $7x^2 + 57$ adds the leading coefficients as $5 + 2$, DROPPING THE SIGN on $-2x^2$.)',
    },
    {
      q: 'Add: $(x^3 + 7x^2 - 4) + (6x^3 - x^2 + 9x)$.',
      choices: [
        '$7x^3 + 8x^2 + 9x - 4$',
        '$7x^3 + 7x^2 + 9x - 4$',
        '$7x^3 + 6x^2 + 5x$',
        '$7x^3 + 6x^2 + 9x - 4$',
      ],
      answer: 3,
      solution:
        'Degree by degree: $x^3 + 6x^3 = 7x^3$, then $7x^2 + (-x^2) = 6x^2$ because $-x^2$ carries a hidden coefficient of $-1$, then the lone $9x$ stays, then the lone $-4$ stays. The sum is $7x^3 + 6x^2 + 9x - 4$. Check a second, independent way by evaluating at $x = 2$: the first polynomial is $8 + 28 - 4 = 32$, the second is $48 - 4 + 18 = 62$, and $32 + 62 = 94$; the answer gives $56 + 24 + 18 - 4 = 94$ ✓. (The choice with $8x^2$ treats $-x^2$ as $+x^2$; the choice with $7x^2$ drops the $-x^2$ term altogether; the choice $7x^3 + 6x^2 + 5x$ COMBINES THE UNLIKE TERMS $9x$ and $-4$.)',
    },
  ],
  // p6 — subtraction: the minus must reach EVERY term.
  [
    {
      q: 'Subtract: $(8x^2 - 5x - 6) - (3x^2 - 9x - 6)$.',
      choices: ['$5x^2 + 4x$', '$5x^2 + 4x - 12$', '$5x^2 - 14x$', '$5x^2 - 14x - 12$'],
      answer: 0,
      solution:
        'Write the negated polynomial out in full before combining anything: $-(3x^2 - 9x - 6) = -3x^2 + 9x + 6$ — all three signs flip. The problem becomes $8x^2 - 5x - 6 - 3x^2 + 9x + 6$. Now combine: $8x^2 - 3x^2 = 5x^2$, $-5x + 9x = 4x$, and $-6 + 6 = 0$, so the answer is $5x^2 + 4x$. Check a second, independent way by evaluating at $x = 2$: the first polynomial is $32 - 10 - 6 = 16$, the second is $12 - 18 - 6 = -12$, and $16 - (-12) = 28$; the answer gives $20 + 8 = 28$ ✓. (The choice ending in $-12$ lets the minus STOP ONE TERM SHORT, giving $-6 - 6$; the choice $5x^2 - 14x$ misses the flip on the middle term instead; the choice $5x^2 - 14x - 12$ lets the minus reach ONLY THE FIRST TERM.)',
    },
    {
      q: 'Simplify: $(2x^3 + x^2 - 7x + 4) - (5x^3 - 6x^2 + x - 9)$.',
      choices: [
        '$-3x^3 + 7x^2 - 8x - 5$',
        '$-3x^3 - 5x^2 - 6x - 5$',
        '$7x^3 + 7x^2 - 8x + 13$',
        '$-3x^3 + 7x^2 - 8x + 13$',
      ],
      answer: 3,
      solution:
        'Negate all four terms of the second polynomial first: $-(5x^3 - 6x^2 + x - 9) = -5x^3 + 6x^2 - x + 9$. The expression is now $2x^3 + x^2 - 7x + 4 - 5x^3 + 6x^2 - x + 9$. Combining: $2x^3 - 5x^3 = -3x^3$, $x^2 + 6x^2 = 7x^2$, $-7x - x = -8x$, and $4 + 9 = 13$, giving $-3x^3 + 7x^2 - 8x + 13$. Check a second, independent way by evaluating at $x = 2$: the first polynomial is $16 + 4 - 14 + 4 = 10$, the second is $40 - 24 + 2 - 9 = 9$, and $10 - 9 = 1$; the answer gives $-24 + 28 - 16 + 13 = 1$ ✓. (The choice ending in $-5$ lets the minus STOP ONE TERM SHORT, computing $4 - 9$; the choice $-3x^3 - 5x^2 - 6x - 5$ lets it reach ONLY THE FIRST TERM; the choice starting $7x^3$ ADDS the cubes while subtracting everything else.)',
    },
    {
      q: 'Subtract $6x^2 - x + 12$ from $10x^2 + 5x - 3$.',
      choices: ['$4x^2 + 6x + 9$', '$4x^2 + 4x - 15$', '$4x^2 + 6x - 15$', '$-4x^2 - 6x + 15$'],
      answer: 2,
      solution:
        '"Subtract $A$ from $B$" means $B - A$, so the expression is $(10x^2 + 5x - 3) - (6x^2 - x + 12)$ — the polynomial named second is the one out front. Negate every term of $A$: $-6x^2 + x - 12$. Then $10x^2 - 6x^2 = 4x^2$, $5x + x = 6x$, and $-3 - 12 = -15$, giving $4x^2 + 6x - 15$. Check a second, independent way by evaluating at $x = 2$: $B$ is $40 + 10 - 3 = 47$ and $A$ is $24 - 2 + 12 = 34$, so $B - A = 13$; the answer gives $16 + 12 - 15 = 13$ ✓. (The choice ending in $+9$ lets the minus STOP ONE TERM SHORT; the choice with $4x$ misses the flip on $-x$; the choice $-4x^2 - 6x + 15$ SUBTRACTS IN THE WRONG ORDER and is the exact opposite of the right answer.)',
    },
  ],
  // p7 — evaluate at a positive input: square first, then multiply.
  [
    {
      q: 'Evaluate $p(x) = 2x^3 - 5x^2 - 4x + 9$ at $x = 4$.',
      choices: ['$101$', '$41$', '$201$', '$73$'],
      answer: 1,
      solution:
        'Substitute one term at a time: $p(4) = 2(64) - 5(16) - 4(4) + 9 = 128 - 80 - 16 + 9 = 41$. Check a second, independent way by nesting the polynomial so no power is ever computed on its own: $p(x) = ((2x - 5)x - 4)x + 9$, so $p(4) = ((8 - 5)(4) - 4)(4) + 9 = (12 - 4)(4) + 9 = 32 + 9 = 41$ ✓ — same answer by a different road. (The choice $101$ is READING $5x^2$ AS $5x$, giving $128 - 20 - 16 + 9$; the choice $201$ drops the minus on the $x^2$ term; the choice $73$ flips the sign of $-4x$.)',
    },
    {
      q: 'For $q(x) = -x^3 + 6x^2 + 10$, what is $q(5)$?',
      choices: ['$285$', '$-85$', '$25$', '$35$'],
      answer: 3,
      solution:
        'Substitute with the minus kept in place: $q(5) = -(125) + 6(25) + 10 = -125 + 150 + 10 = 35$. Check a second, independent way by factoring $x^2$ out of the first two terms: $q(x) = x^2(6 - x) + 10$, so $q(5) = 25(6 - 5) + 10 = 25 + 10 = 35$ ✓. (The choice $285$ treats $-x^3$ as $x^3$; the choice $-85$ is READING $6x^2$ AS $6x$, giving $-125 + 30 + 10$; the choice $25$ forgets the constant term entirely.)',
    },
    {
      q: 'A stone path costs $C(x) = 3x^3 - 7x^2 + 2x + 20$ dollars when it is $x$ metres long. What does a $3$-metre path cost?',
      choices: ['$\\$44$', '$\\$86$', '$\\$170$', '$\\$24$'],
      answer: 0,
      solution:
        'Substitute $x = 3$: $C(3) = 3(27) - 7(9) + 2(3) + 20 = 81 - 63 + 6 + 20 = 44$, so the path costs $\\$44$. Check a second, independent way with the nested form $C(x) = ((3x - 7)x + 2)x + 20$: $C(3) = ((9 - 7)(3) + 2)(3) + 20 = (6 + 2)(3) + 20 = 24 + 20 = 44$ ✓. (The choice $\\$86$ is READING $7x^2$ AS $7x$, giving $81 - 21 + 6 + 20$; the choice $\\$170$ flips the sign of $-7x^2$; the choice $\\$24$ forgets the $\\$20$ at the end.)',
    },
  ],
  // p8 — evaluate at a negative input: parentheses every time.
  [
    {
      q: 'If $f(x) = -2x^2 + 9x + 4$, what is $f(-1)$?',
      choices: ['$-3$', '$11$', '$-7$', '$15$'],
      answer: 2,
      solution:
        'Wrap the input in parentheses: $f(-1) = -2(-1)^2 + 9(-1) + 4$. Since $(-1)^2 = 1$ — an even power of a negative is positive — the first term is $-2(1) = -2$. The middle term is $9(-1) = -9$. So $f(-1) = -2 - 9 + 4 = -7$. Check a second, independent way by nesting: $f(x) = x(-2x + 9) + 4$, so $f(-1) = (-1)(2 + 9) + 4 = -11 + 4 = -7$ ✓. (The choice $-3$ TREATS $(-1)^2$ AS $-1$, turning the first term into $+2$; the choice $11$ flips the sign of the $9x$ term; the choice $15$ makes both mistakes at once.)',
    },
    {
      q: 'If $g(x) = x^3 + 5x^2 - 8$, what is $g(-2)$?',
      choices: ['$4$', '$20$', '$-36$', '$-20$'],
      answer: 0,
      solution:
        'Substitute with parentheses: $g(-2) = (-2)^3 + 5(-2)^2 - 8$. An odd power of a negative stays negative, so $(-2)^3 = -8$; an even power turns positive, so $(-2)^2 = 4$ and the middle term is $5(4) = 20$. Then $g(-2) = -8 + 20 - 8 = 4$. Check a second, independent way by factoring $x^2$ out of the first two terms: $g(x) = x^2(x + 5) - 8$, so $g(-2) = 4(3) - 8 = 12 - 8 = 4$ ✓. (The choice $20$ TREATS $(-2)^3$ AS $+8$; the choice $-36$ treats $(-2)^2$ as $-4$; the choice $-20$ makes both mistakes at once.)',
    },
    {
      q: 'If $h(x) = 4x^3 - x^2 + 10$, what is $h(-3)$?',
      choices: ['$-89$', '$109$', '$-11$', '$-107$'],
      answer: 3,
      solution:
        'Substitute with parentheses: $h(-3) = 4(-3)^3 - (-3)^2 + 10 = 4(-27) - 9 + 10 = -108 - 9 + 10 = -107$. The middle term is worth a slow look: the square is taken first, giving $9$, and the minus in front then makes it $-9$. Check a second, independent way by factoring $x^2$ out of the first two terms: $h(x) = x^2(4x - 1) + 10$, so $h(-3) = 9(-12 - 1) + 10 = 9(-13) + 10 = -117 + 10 = -107$ ✓. (The choice $-89$ turns the middle term into $+9$; the choice $109$ TREATS $(-3)^3$ AS $+27$; the choice $-11$ uses $4x$ in place of $4x^3$.)',
    },
  ],
  // p9 — the degree of a sum can collapse, sometimes by several places.
  [
    {
      q: 'Let $f(x) = 7x^5 - 2x^4 + 6x^3 - 9$ and $g(x) = -7x^5 + 2x^4 + x + 4$. What is the degree of $f(x) + g(x)$?',
      choices: ['$5$', '$3$', '$4$', '$10$'],
      answer: 1,
      solution:
        'Add degree by degree and watch what survives: $7x^5 + (-7x^5) = 0$, and then $-2x^4 + 2x^4 = 0$ as well — two whole degrees disappear. What is left is $6x^3$, plus $x$ from $g$, plus $-9 + 4 = -5$. The sum is $6x^3 + x - 5$, so the degree is $3$. Check a second, independent way by evaluating at $x = 1$: $f(1) = 7 - 2 + 6 - 9 = 2$ and $g(1) = -7 + 2 + 1 + 4 = 0$, so the sum is worth $2$ there; and $6 + 1 - 5 = 2$ ✓ — the collapsed polynomial agrees. (The choice $5$ ASSUMES THE DEGREE OF A SUM IS THE LARGER INPUT DEGREE; the choice $4$ STOPS AFTER ONE CANCELLATION and misses that the $x^4$ terms go too; the choice $10$ ADDS THE DEGREES, which is what multiplying would do.)',
    },
    {
      q: 'Let $u(x) = x^6 - 5x^2 + 11$ and $v(x) = -x^6 + 5x^2 - 4$. What is the degree of $u(x) + v(x)$?',
      choices: ['$6$', '$2$', '$0$', '$12$'],
      answer: 2,
      solution:
        'Every power cancels: $x^6 + (-x^6) = 0$ and $-5x^2 + 5x^2 = 0$. All that survives is $11 - 4 = 7$, a lone constant. A nonzero constant is a polynomial of degree $0$, since $7 = 7x^0$. Check a second, independent way by evaluating at $x = 2$: $u(2) = 64 - 20 + 11 = 55$ and $v(2) = -64 + 20 - 4 = -48$, so the sum is $55 - 48 = 7$ there; at $x = 0$ the sum is $11 - 4 = 7$ as well — the same value at two different inputs is exactly what a constant does ✓. (The choice $6$ assumes the sum keeps the larger input degree; the choice $2$ STOPS AFTER ONE CANCELLATION; the choice $12$ ADDS THE DEGREES.)',
    },
    {
      q: 'Let $u(x) = 3x^4 + kx^3 - x + 8$ and $v(x) = -3x^4 + 5x^3 + 2$, where $k$ is a number. For which value of $k$ does $u(x) + v(x)$ have degree $1$?',
      choices: ['$-5$', '$5$', '$-3$', '$0$'],
      answer: 0,
      solution:
        'The $x^4$ terms cancel on their own: $3x^4 + (-3x^4) = 0$, no matter what $k$ is. That leaves $(k + 5)x^3 - x + 10$, whose degree is $3$ unless the cubes also vanish. Degree $1$ therefore demands $k + 5 = 0$, so $k = -5$. Check a second, independent way by trying the candidates: $k = -5$ gives $0x^3 - x + 10 = -x + 10$, degree $1$ ✓; $k = 5$ gives $10x^3 - x + 10$ ✗; $k = -3$ gives $2x^3 - x + 10$ ✗; and $k = 0$ gives $5x^3 - x + 10$ ✗. Only one candidate survives. (The choice $5$ sets $k$ equal to the other coefficient instead of its opposite; the choice $-3$ copies the $x^4$ coefficient from $v$; the choice $0$ assumes a vanishing term means a zero value of $k$.)',
    },
  ],
  // p10 — recover a missing polynomial by subtracting, then add back to check.
  [
    {
      q: 'Polynomials $p$ and $q$ satisfy $p(x) + q(x) = 5x^2 - 7x + 2$. If $p(x) = 8x^2 + 3x - 9$, what is $q(x)$?',
      choices: [
        '$-3x^2 - 10x - 7$',
        '$-3x^2 - 4x + 11$',
        '$13x^2 - 4x - 7$',
        '$-3x^2 - 10x + 11$',
      ],
      answer: 3,
      solution:
        'To isolate $q$, subtract $p$ from the total: $q(x) = (5x^2 - 7x + 2) - (8x^2 + 3x - 9)$. Negate every term of $p$ first: $-8x^2 - 3x + 9$. Then $5x^2 - 8x^2 = -3x^2$, $-7x - 3x = -10x$, and $2 + 9 = 11$, so $q(x) = -3x^2 - 10x + 11$. Check a second, independent way by adding the answer back to $p$: $(8x^2 + 3x - 9) + (-3x^2 - 10x + 11) = 5x^2 - 7x + 2$ ✓, which is the total we were given. (The choice ending in $-7$ lets the minus STOP ONE TERM SHORT, computing $2 - 9$; the choice with $-4x$ misses the flip on $3x$; the choice $13x^2 - 4x - 7$ ADDS $p$ to the total instead of subtracting it.)',
    },
    {
      q: 'Polynomials $p$ and $q$ satisfy $p(x) - q(x) = 4x^2 + x - 10$. If $q(x) = 6x^2 - 5x + 3$, what is $p(x)$?',
      choices: [
        '$-2x^2 + 6x - 13$',
        '$10x^2 - 4x - 7$',
        '$10x^2 + 6x - 7$',
        '$10x^2 - 4x - 13$',
      ],
      answer: 1,
      solution:
        'Here the difference is known, so the missing polynomial is recovered by ADDING: if $p - q$ is the difference, then $p = (p - q) + q$. That gives $p(x) = (4x^2 + x - 10) + (6x^2 - 5x + 3)$, and collecting like terms: $4x^2 + 6x^2 = 10x^2$, $x - 5x = -4x$, and $-10 + 3 = -7$, so $p(x) = 10x^2 - 4x - 7$. Check a second, independent way by computing the difference from scratch: $(10x^2 - 4x - 7) - (6x^2 - 5x + 3) = 10x^2 - 4x - 7 - 6x^2 + 5x - 3 = 4x^2 + x - 10$ ✓, exactly the difference we were given. (The choice $-2x^2 + 6x - 13$ SUBTRACTS WHERE THE PROBLEM NEEDS ADDITION; the choice with $6x$ adds $1$ and $5$ while ignoring the minus on $-5x$; the choice ending in $-13$ computes $-10 - 3$.)',
    },
    {
      q: 'Polynomials $p$ and $q$ satisfy $p(x) + q(x) = 2x^3 + x^2 - 8$, and $q(x) = -x^3 + 4x^2 + 5x - 2$. What is $p(x)$?',
      choices: [
        '$3x^3 - 3x^2 + 5x - 6$',
        '$3x^3 - 3x^2 - 5x - 10$',
        '$3x^3 - 3x^2 - 5x - 6$',
        '$x^3 + 5x^2 + 5x - 10$',
      ],
      answer: 2,
      solution:
        'Write the total with its missing power showing, $2x^3 + x^2 + 0x - 8$, so nothing gets lost in the subtraction $p(x) = (2x^3 + x^2 + 0x - 8) - (-x^3 + 4x^2 + 5x - 2)$. Negate all four terms of $q$: $+x^3 - 4x^2 - 5x + 2$. Then $2x^3 + x^3 = 3x^3$, $x^2 - 4x^2 = -3x^2$, $0x - 5x = -5x$, and $-8 + 2 = -6$, giving $p(x) = 3x^3 - 3x^2 - 5x - 6$. Check a second, independent way by adding the answer back to $q$: $(3x^3 - 3x^2 - 5x - 6) + (-x^3 + 4x^2 + 5x - 2) = 2x^3 + x^2 + 0x - 8$ ✓, the total we started from. (The choice with $+5x$ copies $5x$ across unchanged because the total shows no $x$ term; the choice ending in $-10$ computes $-8 - 2$; the choice $x^3 + 5x^2 + 5x - 10$ ADDS $q$ to the total instead of subtracting it.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 18,
  sections: {
    '18.1': s181,
  },
}
