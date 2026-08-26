// Introduction to Algebra chapter 20 — variations for section 20.4
// (Rational Functions). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked twice by two different routes, and the second route
//    is written out in the solution. Evaluations were done by direct
//    substitution AND by rewriting the rule so the variable appears once
//    (long-division form) or by multiplying the quotient back; domains were
//    found by setting the denominator to zero AND by testing the candidate
//    inputs one at a time; simplifications were confirmed by factoring AND by
//    evaluating at an allowed number; equations were solved by clearing the
//    denominator AND by substituting the answer back or by expanding to a
//    quadratic and reading off both roots.
//  - The domain is settled BEFORE anything cancels, every time. A factor that
//    cancels leaves a hole, and the excluded value stays excluded; every
//    candidate solution is compared against the excluded values before it is
//    keyed.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: MULTIPLYING INSTEAD OF DIVIDING, DIVIDING IN
//    THE WRONG ORDER, SUBTRACTING INSTEAD OF DIVIDING, DROPPING THE MINUS
//    SIGN, BANNING THE NUMERATOR’S ZERO, FLIPPING THE SIGN OF THE EXCLUDED
//    VALUE, FORGETTING THAT DIVISION BY ZERO IS UNDEFINED, FLIPPING THE
//    FRACTION, READING THE MINUS AS A PLUS, SUBSTITUTING ONLY IN THE
//    NUMERATOR, DROPPING THE COEFFICIENT, FORGETTING TO DIVIDE BY THE
//    COEFFICIENT, SQUARING THE WRONG SIGN, CANCELLING ONLY THE CONSTANTS,
//    CANCELLING ONLY THE x’s, WRITING THE LEFTOVER FACTOR BACKWARDS,
//    FORGETTING THE HOLE, READING A VALUE OFF THE SIMPLIFIED FORM, FORGETTING
//    TO DISTRIBUTE, ZEROING THE NUMERATOR, ANSWERING WITH THE EXCLUDED VALUE,
//    TREATING AN ALMOST-ZERO DENOMINATOR AS A 1, CONFUSING A TINY DENOMINATOR
//    WITH A TINY OUTPUT, LETTING A NEGATIVE INPUT FORCE A NEGATIVE OUTPUT,
//    MULTIPLYING STRAIGHT ACROSS INSTEAD OF CROSSWISE, SKIPPING THE DOMAIN
//    CHECK, KEEPING THE EXTRANEOUS ROOT, and ASSUMING EVERY CANCELLATION
//    KILLS THE ANSWER.
//  - No two choices inside an item name the same value.

const s204 = [
  // p1 — a bare quotient: substitute and divide.
  [
    {
      q: 'If $f(x) = \\frac{54}{x}$, what is $f(6)$?',
      choices: ['$324$', '$9$', '$\\frac{1}{9}$', '$48$'],
      answer: 1,
      solution:
        'Substitute the input for $x$ and divide: $f(6) = \\frac{54}{6} = 9$. Check a second, independent way by multiplying the quotient back: if the answer is right, then $9 \\times 6$ has to rebuild the numerator, and $9 \\times 6 = 54$ ✓. (The choice $324$ is MULTIPLYING INSTEAD OF DIVIDING, $54 \\times 6$; the choice $\\frac{1}{9}$ is DIVIDING IN THE WRONG ORDER, $\\frac{6}{54}$; the choice $48$ is SUBTRACTING INSTEAD OF DIVIDING, $54 - 6$.)',
    },
    {
      q: 'If $g(x) = \\frac{66}{x}$, what is $g(11)$?',
      choices: ['$726$', '$\\frac{1}{6}$', '$55$', '$6$'],
      answer: 3,
      solution:
        'Substitute and divide: $g(11) = \\frac{66}{11} = 6$. Check a second, independent way by counting elevens up to $66$: $11, 22, 33, 44, 55, 66$ — that is six of them ✓, so $66$ holds exactly $6$ elevens. (The choice $726$ is MULTIPLYING INSTEAD OF DIVIDING, $66 \\times 11$; the choice $\\frac{1}{6}$ is DIVIDING IN THE WRONG ORDER, $\\frac{11}{66}$; the choice $55$ is SUBTRACTING INSTEAD OF DIVIDING, $66 - 11$.)',
    },
    {
      q: 'If $h(x) = \\frac{84}{x}$, what is $h(-7)$?',
      choices: ['$-12$', '$12$', '$-588$', '$-\\frac{1}{12}$'],
      answer: 0,
      solution:
        'Handle the size and the sign separately: $\\frac{84}{7} = 12$, and a positive divided by a negative is negative, so $h(-7) = -12$. Check a second, independent way by multiplying back: $(-12) \\times (-7) = 84$ ✓, which is exactly the numerator we started with. (The choice $12$ is DROPPING THE MINUS SIGN; the choice $-588$ is MULTIPLYING INSTEAD OF DIVIDING, $84 \\times (-7)$; the choice $-\\frac{1}{12}$ is DIVIDING IN THE WRONG ORDER, $\\frac{-7}{84}$.)',
    },
  ],
  // p2 — the domain: only the denominator can break the function.
  [
    {
      q: 'What is the domain of $f(x) = \\frac{x-4}{x+6}$?',
      choices: ['All $x$ except $4$', 'All $x$ except $6$', 'All $x$ except $-6$', 'All real numbers'],
      answer: 2,
      solution:
        'Only the denominator can cause trouble: $x + 6 = 0$ when $x = -6$, so $-6$ is the single value thrown out, and every other real number is allowed ✓. Check a second, independent way by testing the candidates the choices offer: $f(-6) = \\frac{-10}{0}$, undefined ✗; $f(4) = \\frac{0}{10} = 0$, an ordinary output ✓; $f(6) = \\frac{2}{12} = \\frac{1}{6}$, also ordinary ✓. Exactly one input fails. (The choice all $x$ except $4$ is BANNING THE NUMERATOR’S ZERO, which only makes the output $0$; the choice all $x$ except $6$ is FLIPPING THE SIGN OF THE EXCLUDED VALUE — at $x = 6$ the denominator is $12$, nowhere near zero; the choice all real numbers is FORGETTING THAT DIVISION BY ZERO IS UNDEFINED.)',
    },
    {
      q: 'What is the domain of $g(x) = \\frac{x+9}{x-11}$?',
      choices: ['All $x$ except $11$', 'All $x$ except $-9$', 'All $x$ except $-11$', 'All real numbers'],
      answer: 0,
      solution:
        'Set the denominator to zero: $x - 11 = 0$ gives $x = 11$, so $11$ is excluded and nothing else is ✓. Check a second, independent way by testing inputs: $g(11) = \\frac{20}{0}$, undefined ✗; $g(-9) = \\frac{0}{-20} = 0$, a fine output ✓; $g(-11) = \\frac{-2}{-22} = \\frac{1}{11}$, also fine ✓. (The choice all $x$ except $-9$ is BANNING THE NUMERATOR’S ZERO; the choice all $x$ except $-11$ is FLIPPING THE SIGN OF THE EXCLUDED VALUE, reading $x - 11 = 0$ as $x = -11$; the choice all real numbers is FORGETTING THAT DIVISION BY ZERO IS UNDEFINED.)',
    },
    {
      q: 'What is the domain of $h(x) = \\frac{x-6}{x+7}$?',
      choices: ['All $x$ except $7$', 'All $x$ except $6$', 'All real numbers', 'All $x$ except $-7$'],
      answer: 3,
      solution:
        'The denominator $x + 7$ is zero at $x = -7$, so $-7$ is the only banned input ✓. Check a second, independent way by asking what each candidate does to the fraction: at $x = -7$ the fraction reads $\\frac{-13}{0}$ ✗; at $x = 6$ it reads $\\frac{0}{13} = 0$ ✓; at $x = 7$ it reads $\\frac{1}{14}$ ✓. Only one of the three breaks. (The choice all $x$ except $7$ is FLIPPING THE SIGN OF THE EXCLUDED VALUE; the choice all $x$ except $6$ is BANNING THE NUMERATOR’S ZERO — a zero on top is a legal output, not a forbidden input; the choice all real numbers is FORGETTING THAT DIVISION BY ZERO IS UNDEFINED.)',
    },
  ],
  // p3 — evaluate a quotient of two linear pieces; the output is a fraction.
  [
    {
      q: 'If $f(x) = \\frac{x+4}{x-6}$, what is $f(9)$?',
      choices: ['$\\frac{3}{13}$', '$\\frac{13}{3}$', '$\\frac{13}{6}$', '$\\frac{13}{15}$'],
      answer: 1,
      solution:
        'Substitute for every $x$, top and bottom: $f(9) = \\frac{9+4}{9-6} = \\frac{13}{3}$. Check a second, independent way by rewriting the rule so $x$ appears only once: $\\frac{x+4}{x-6} = \\frac{(x-6)+10}{x-6} = 1 + \\frac{10}{x-6}$, and at $x = 9$ that is $1 + \\frac{10}{3} = \\frac{3}{3} + \\frac{10}{3} = \\frac{13}{3}$ ✓. (The choice $\\frac{3}{13}$ is FLIPPING THE FRACTION; the choice $\\frac{13}{6}$ is SUBSTITUTING ONLY IN THE NUMERATOR and then dividing by the $6$ printed in the rule; the choice $\\frac{13}{15}$ is READING THE MINUS AS A PLUS downstairs, $9 + 6$.)',
    },
    {
      q: 'If $g(x) = \\frac{x+2}{x-9}$, what is $g(6)$?',
      choices: ['$\\frac{8}{3}$', '$-\\frac{3}{8}$', '$\\frac{8}{15}$', '$-\\frac{8}{3}$'],
      answer: 3,
      solution:
        'Substitute top and bottom: $g(6) = \\frac{6+2}{6-9} = \\frac{8}{-3} = -\\frac{8}{3}$. The denominator is negative because $6$ sits below $9$. Check a second, independent way by rewriting the rule so $x$ appears once: $\\frac{x+2}{x-9} = \\frac{(x-9)+11}{x-9} = 1 + \\frac{11}{x-9}$, and at $x = 6$ that is $1 + \\frac{11}{-3} = \\frac{3}{3} - \\frac{11}{3} = -\\frac{8}{3}$ ✓. (The choice $\\frac{8}{3}$ is DROPPING THE MINUS SIGN by computing $9 - 6$ instead of $6 - 9$; the choice $-\\frac{3}{8}$ is FLIPPING THE FRACTION; the choice $\\frac{8}{15}$ is READING THE MINUS AS A PLUS downstairs, $6 + 9$.)',
    },
    {
      q: 'If $h(x) = \\frac{2x+5}{x+6}$, what is $h(-3)$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$-\\frac{1}{3}$', '$-3$'],
      answer: 2,
      solution:
        'Do the numerator carefully — the $2$ multiplies the input before the $5$ is added: $2(-3) + 5 = -6 + 5 = -1$, while the denominator is $-3 + 6 = 3$. So $h(-3) = \\frac{-1}{3} = -\\frac{1}{3}$. Check a second, independent way by rewriting the rule so $x$ appears once: $2x + 5 = 2(x+6) - 7$, so $h(x) = 2 - \\frac{7}{x+6}$, and at $x = -3$ that is $2 - \\frac{7}{3} = \\frac{6}{3} - \\frac{7}{3} = -\\frac{1}{3}$ ✓. (The choice $\\frac{1}{3}$ is DROPPING THE MINUS SIGN in the numerator; the choice $\\frac{2}{3}$ is DROPPING THE COEFFICIENT and computing $-3 + 5 = 2$ on top; the choice $-3$ is FLIPPING THE FRACTION, reading $\\frac{3}{-1}$.)',
    },
  ],
  // p4 — the excluded value when the denominator carries a coefficient.
  [
    {
      q: 'Which value of $x$ must be excluded from the domain of $\\frac{5x-2}{4x+28}$?',
      choices: ['$x = -7$', '$x = -28$', '$x = 7$', '$x = \\frac{2}{5}$'],
      answer: 0,
      solution:
        'Set the denominator to zero: $4x + 28 = 0$, so $4x = -28$ and $x = -7$ ✓. Check a second, independent way by factoring the denominator first: $4x + 28 = 4(x+7)$, and a product is zero only when one of its factors is; the constant $4$ is never zero, so the break comes from $x + 7 = 0$, giving $x = -7$ ✓. (The choice $x = -28$ is FORGETTING TO DIVIDE BY THE COEFFICIENT — at $x = -28$ the denominator is $-84$, not $0$; the choice $x = 7$ is FLIPPING THE SIGN OF THE EXCLUDED VALUE; the choice $x = \\frac{2}{5}$ is ZEROING THE NUMERATOR, which just makes the output $0$.)',
    },
    {
      q: 'Which value of $x$ must be excluded from the domain of $\\frac{x+8}{2x-22}$?',
      choices: ['$x = 22$', '$x = 11$', '$x = -8$', '$x = -11$'],
      answer: 1,
      solution:
        'Set the denominator to zero: $2x - 22 = 0$, so $2x = 22$ and $x = 11$ ✓. Check a second, independent way by factoring: $2x - 22 = 2(x - 11)$, which is zero exactly when $x - 11 = 0$, so $x = 11$ ✓ — and substituting confirms it, since the fraction becomes $\\frac{19}{0}$ there. (The choice $x = 22$ is FORGETTING TO DIVIDE BY THE COEFFICIENT — the denominator is $22$ at $x = 22$; the choice $x = -8$ is ZEROING THE NUMERATOR, giving the output $\\frac{0}{-38} = 0$; the choice $x = -11$ is FLIPPING THE SIGN OF THE EXCLUDED VALUE.)',
    },
    {
      q: 'Which value of $x$ must be excluded from the domain of $\\frac{3x+9}{5x+30}$?',
      choices: ['$x = -30$', '$x = -3$', '$x = -6$', '$x = 6$'],
      answer: 2,
      solution:
        'Set the denominator to zero: $5x + 30 = 0$, so $5x = -30$ and $x = -6$ ✓. Check a second, independent way by factoring both parts: the fraction is $\\frac{3(x+3)}{5(x+6)}$, and the only thing that can zero the bottom is $x + 6 = 0$, so $x = -6$ ✓. Note that $x + 3$ and $x + 6$ are different factors, so nothing cancels here. (The choice $x = -30$ is FORGETTING TO DIVIDE BY THE COEFFICIENT; the choice $x = -3$ is ZEROING THE NUMERATOR, which gives the perfectly good output $0$; the choice $x = 6$ is FLIPPING THE SIGN OF THE EXCLUDED VALUE — at $x = 6$ the denominator is $60$.)',
    },
  ],
  // p5 — factor and cancel, with the domain pinned down first.
  [
    {
      q: 'For $x \\ne 6$, the expression $\\frac{x^2 - 36}{x - 6}$ simplifies to which of these?',
      choices: ['$x - 6$', '$x^2 - 6$', '$x + 6$', '$x$'],
      answer: 2,
      solution:
        'Pin the domain down before touching the algebra: the denominator is zero at $x = 6$, which is why the problem says $x \\ne 6$, and that ban stays in force no matter what cancels later. Now factor the difference of squares: $x^2 - 36 = (x-6)(x+6)$, so $\\frac{(x-6)(x+6)}{x-6} = x + 6$, the cancelling being legal exactly because $x \\ne 6$. Check a second, independent way by evaluating at an allowed input, $x = 10$: the original is $\\frac{100-36}{10-6} = \\frac{64}{4} = 16$, and $10 + 6 = 16$ ✓, while $10 - 6 = 4$ ✗. (The choice $x - 6$ is SQUARING THE WRONG SIGN, reading $x^2 - 36$ as $(x-6)^2$, which is really $x^2 - 12x + 36$; the choice $x^2 - 6$ is CANCELLING ONLY THE CONSTANTS, $36 \\div 6$; the choice $x$ is CANCELLING ONLY THE x’s.)',
    },
    {
      q: 'For $x \\ne -3$, the expression $\\frac{x^2 - 9}{x + 3}$ simplifies to which of these?',
      choices: ['$x - 3$', '$x + 3$', '$x^2 - 3$', '$x$'],
      answer: 0,
      solution:
        'Settle the domain first: the denominator $x + 3$ is zero at $x = -3$, so that input is out from the start and stays out. Factor: $x^2 - 9 = (x-3)(x+3)$, so $\\frac{(x-3)(x+3)}{x+3} = x - 3$, legal wherever $x \\ne -3$. Check a second, independent way by evaluating at an allowed input, $x = 1$: the original is $\\frac{1-9}{1+3} = \\frac{-8}{4} = -2$, and $1 - 3 = -2$ ✓, while $1 + 3 = 4$ ✗. (The choice $x + 3$ is SQUARING THE WRONG SIGN, reading $x^2 - 9$ as $(x+3)^2$; the choice $x^2 - 3$ is CANCELLING ONLY THE CONSTANTS, $9 \\div 3$; the choice $x$ is CANCELLING ONLY THE x’s.)',
    },
    {
      q: 'For $x \\ne -7$, the expression $\\frac{x^2 - 49}{x + 7}$ simplifies to which of these?',
      choices: ['$x + 7$', '$x^2 - 7$', '$7 - x$', '$x - 7$'],
      answer: 3,
      solution:
        'The domain comes first: $x + 7 = 0$ at $x = -7$, so $-7$ is banned before any cancelling happens. Factor: $x^2 - 49 = (x-7)(x+7)$, so $\\frac{(x-7)(x+7)}{x+7} = x - 7$ for every allowed $x$ ✓. Check a second, independent way by evaluating at $x = 0$: the original is $\\frac{0-49}{0+7} = \\frac{-49}{7} = -7$, and $0 - 7 = -7$ ✓, while $7 - 0 = 7$ ✗ and $0 + 7 = 7$ ✗. (The choice $x + 7$ is SQUARING THE WRONG SIGN, reading $x^2 - 49$ as $(x+7)^2$; the choice $x^2 - 7$ is CANCELLING ONLY THE CONSTANTS, $49 \\div 7$; the choice $7 - x$ is WRITING THE LEFTOVER FACTOR BACKWARDS, which flips the sign of every output.)',
    },
  ],
  // p6 — the cancelled factor leaves a hole, and the hole is not an output.
  [
    {
      q: 'Let $h(x) = \\frac{x^2 - 121}{x - 11}$. Which statement is true?',
      choices: [
        'The domain of $h$ is all real numbers',
        '$h(x) = x + 11$ for every real number $x$',
        '$h(x) = x + 11$ for every $x$ except $11$',
        '$h(11) = 22$',
      ],
      answer: 2,
      solution:
        'Fix the domain before the algebra: the denominator $x - 11$ is zero at $x = 11$, so $11$ is out of the domain, and nothing that happens later can put it back. Factoring gives $\\frac{(x-11)(x+11)}{x-11} = x + 11$, and that cancelling is legal exactly where $x \\ne 11$ — so the honest statement is that $h(x) = x + 11$ for every $x$ except $11$ ✓. Check a second, independent way by evaluating: at the allowed input $x = 12$ the original is $\\frac{144-121}{12-11} = \\frac{23}{1} = 23$, which matches $12 + 11 = 23$ ✓; at $x = 11$ the original reads $\\frac{0}{0}$, undefined ✗. (The choice $h(11) = 22$ is READING A VALUE OFF THE SIMPLIFIED FORM at the one input where the simplification does not apply — $22$ is the height of the HOLE, not an output of $h$; the choice for every real number $x$ is FORGETTING THE HOLE; the choice about the domain makes that same mistake one step earlier, keeping an input that makes the denominator zero.)',
    },
    {
      q: 'Let $p(x) = \\frac{x^2 + 6x}{x + 6}$. Which statement is true?',
      choices: [
        'The domain of $p$ is all real numbers',
        '$p(x) = x$ for every $x$ except $-6$',
        '$p(-6) = -6$',
        '$p(x) = x$ for every real number $x$',
      ],
      answer: 1,
      solution:
        'Domain first: $x + 6 = 0$ at $x = -6$, so $-6$ is excluded and stays excluded. Now factor the numerator: $x^2 + 6x = x(x+6)$, so $\\frac{x(x+6)}{x+6} = x$, valid exactly where $x \\ne -6$ ✓. Check a second, independent way by evaluating: at $x = -7$ the original is $\\frac{49-42}{-7+6} = \\frac{7}{-1} = -7$, matching the simplified rule ✓; at $x = -6$ the numerator is $36 - 36 = 0$ and the denominator is $0$, so the original is $\\frac{0}{0}$, undefined ✗. (The choice $p(-6) = -6$ is READING A VALUE OFF THE SIMPLIFIED FORM at the forbidden input — that is the hole; the choice for every real number $x$ is FORGETTING THE HOLE; the choice about the domain forgets it one step earlier.)',
    },
    {
      q: 'Let $q(x) = \\frac{2x + 18}{x + 9}$. Which statement is true?',
      choices: [
        'The domain of $q$ is all real numbers',
        '$q(x) = 2$ for every real number $x$',
        '$q(-9) = 2$',
        '$q(x) = 2$ for every $x$ except $-9$',
      ],
      answer: 3,
      solution:
        'Domain first: the denominator $x + 9$ is zero at $x = -9$, so that input is banned. Factor the numerator: $2x + 18 = 2(x+9)$, so $\\frac{2(x+9)}{x+9} = 2$ wherever $x \\ne -9$ — the graph is a flat line at height $2$ with one point missing ✓. Check a second, independent way by evaluating: $q(-8) = \\frac{-16+18}{-8+9} = \\frac{2}{1} = 2$ ✓ and $q(0) = \\frac{18}{9} = 2$ ✓, but $q(-9) = \\frac{-18+18}{-9+9} = \\frac{0}{0}$, undefined ✗. (The choice $q(-9) = 2$ is READING A VALUE OFF THE SIMPLIFIED FORM at the hole; the choice for every real number $x$ is FORGETTING THE HOLE; the choice about the domain keeps an input that makes the denominator zero.)',
    },
  ],
  // p7 — clear the denominator, then check the answer against the ban list.
  [
    {
      q: 'Solve $\\frac{x+9}{x-3} = 3$.',
      choices: ['$x = 6$', '$x = 9$', '$x = -9$', '$x = 3$'],
      answer: 1,
      solution:
        'Note the ban first: the denominator is zero at $x = 3$, so $3$ can never be an answer. Multiply both sides by $x - 3$: $x + 9 = 3(x-3) = 3x - 9$, so $18 = 2x$ and $x = 9$. Since $9 \\ne 3$, the candidate is legal ✓. Check a second, independent way by substituting into the original: $\\frac{9+9}{9-3} = \\frac{18}{6} = 3$ ✓. (The choice $x = 6$ is FORGETTING TO DISTRIBUTE the $3$ across the whole denominator, solving $x + 9 = 3x - 3$; the choice $x = -9$ is ZEROING THE NUMERATOR, which makes the fraction $0$, not $3$; the choice $x = 3$ is ANSWERING WITH THE EXCLUDED VALUE, where the left side is undefined.)',
    },
    {
      q: 'Solve $\\frac{x-3}{x+6} = 2$.',
      choices: ['$x = -9$', '$x = 3$', '$x = -6$', '$x = -15$'],
      answer: 3,
      solution:
        'The denominator is zero at $x = -6$, so put $-6$ on the ban list before starting. Multiply both sides by $x + 6$: $x - 3 = 2(x+6) = 2x + 12$, so $-15 = x$. Since $-15 \\ne -6$, it is allowed ✓. Check a second, independent way by substituting: $\\frac{-15-3}{-15+6} = \\frac{-18}{-9} = 2$ ✓ — two negatives make the quotient positive, as required. (The choice $x = -9$ is FORGETTING TO DISTRIBUTE the $2$, solving $x - 3 = 2x + 6$; the choice $x = 3$ is ZEROING THE NUMERATOR, giving $\\frac{0}{9} = 0$; the choice $x = -6$ is ANSWERING WITH THE EXCLUDED VALUE.)',
    },
    {
      q: 'Solve $\\frac{x+7}{x-6} = 2$.',
      choices: ['$x = 19$', '$x = 13$', '$x = -7$', '$x = 6$'],
      answer: 0,
      solution:
        'Ban list first: $x - 6 = 0$ at $x = 6$, so $6$ is out. Multiply both sides by $x - 6$: $x + 7 = 2(x-6) = 2x - 12$, so $19 = x$, and $19$ is not the banned value ✓. Check a second, independent way by substituting: $\\frac{19+7}{19-6} = \\frac{26}{13} = 2$ ✓. (The choice $x = 13$ is FORGETTING TO DISTRIBUTE the $2$, solving $x + 7 = 2x - 6$; the choice $x = -7$ is ZEROING THE NUMERATOR, which makes the fraction $0$; the choice $x = 6$ is ANSWERING WITH THE EXCLUDED VALUE, where the fraction is undefined.)',
    },
  ],
  // p8 — dividing by a nearly-zero number, and which way the sign goes.
  [
    {
      q: 'Let $f(x) = \\frac{10}{x-6}$. Rosa types in $x = 5.999$, a hair below $6$. What does the output look like?',
      choices: [
        'It gets very close to $0$',
        'It is a very large negative number',
        'It is a very large positive number',
        'It gets very close to $10$',
      ],
      answer: 1,
      solution:
        'At $x = 5.999$ the denominator is $5.999 - 6 = -0.001$, so $f(x) = \\frac{10}{-0.001} = -10000$ — a very large negative number ✓. Check a second, independent way by reading the sign and the size separately: the numerator is positive and the denominator is a tiny negative, so the quotient must be negative, and dividing by something tiny makes the size enormous; pushing closer with $x = 5.9999$ gives $-100000$, bigger still ✓. (The choice very large positive is DROPPING THE MINUS SIGN, forgetting that inputs below $6$ make $x - 6$ negative; the choice close to $0$ is CONFUSING A TINY DENOMINATOR WITH A TINY OUTPUT — small denominators do the opposite; the choice close to $10$ is TREATING AN ALMOST-ZERO DENOMINATOR AS A $1$.)',
    },
    {
      q: 'Let $g(x) = \\frac{9}{x+3}$. What does $g(x)$ look like when $x$ is just a bit bigger than $-3$, such as $x = -2.999$?',
      choices: [
        'It gets very close to $0$',
        'It gets very close to $9$',
        'It is a very large positive number',
        'It is a very large negative number',
      ],
      answer: 2,
      solution:
        'At $x = -2.999$ the denominator is $-2.999 + 3 = 0.001$, so $g(x) = \\frac{9}{0.001} = 9000$ — very large and positive ✓. Check a second, independent way by reading the sign and the size separately: $-2.999$ sits to the RIGHT of $-3$, so $x + 3$ is a tiny positive number, and a positive divided by a tiny positive is a huge positive; stepping closer with $x = -2.9999$ gives $90000$ ✓. (The choice very large negative is LETTING A NEGATIVE INPUT FORCE A NEGATIVE OUTPUT — the input is negative, but $x + 3$ is not; the choice close to $0$ is CONFUSING A TINY DENOMINATOR WITH A TINY OUTPUT; the choice close to $9$ is TREATING AN ALMOST-ZERO DENOMINATOR AS A $1$.)',
    },
    {
      q: 'Let $g(x) = \\frac{30}{x+6}$. What happens to $g(x)$ as $x$ creeps closer and closer to $-6$?',
      choices: [
        'It settles down near $30$',
        'It gets closer and closer to $0$',
        'It approaches $-6$',
        'The size of $g(x)$ grows without bound',
      ],
      answer: 3,
      solution:
        'The denominator $x + 6$ shrinks toward $0$ as $x$ closes in on $-6$, and dividing $30$ by a shrinking number gives an exploding result: at $x = -5.99$ the output is $\\frac{30}{0.01} = 3000$, and at $x = -5.999$ it is $30000$ ✓. So the size grows without bound. Check a second, independent way by approaching from the other side: at $x = -6.01$ the denominator is $-0.01$ and the output is $-3000$, at $x = -6.001$ it is $-30000$ — the sign depends on the side, but the SIZE runs away either way ✓. (The choice near $30$ is TREATING AN ALMOST-ZERO DENOMINATOR AS A $1$; the choice closer to $0$ is CONFUSING A TINY DENOMINATOR WITH A TINY OUTPUT; the choice approaches $-6$ is ANSWERING WITH THE EXCLUDED VALUE, which is an input, not an output.)',
    },
  ],
  // p9 — cross-multiply; the x-squared terms match and vanish.
  [
    {
      q: 'Solve $\\frac{x+6}{x-3} = \\frac{x+1}{x+2}$.',
      choices: ['$x = -\\frac{3}{2}$', '$x = \\frac{3}{2}$', '$x = -\\frac{2}{3}$', 'No solution'],
      answer: 0,
      solution:
        'The banned inputs are $3$ and $-2$. Cross-multiply: $(x+6)(x+2) = (x+1)(x-3)$. Expanding gives $x^2 + 8x + 12 = x^2 - 2x - 3$; the $x^2$ terms are identical and cancel, leaving $8x + 12 = -2x - 3$, so $10x = -15$ and $x = -\\frac{3}{2}$, which is neither banned value ✓. Check a second, independent way by substituting into the original: the left side is $\\frac{-\\frac{3}{2}+6}{-\\frac{3}{2}-3} = \\frac{9/2}{-9/2} = -1$ and the right side is $\\frac{-\\frac{3}{2}+1}{-\\frac{3}{2}+2} = \\frac{-1/2}{1/2} = -1$ ✓ — both sides land on $-1$. (The choice $x = \\frac{3}{2}$ is DROPPING THE MINUS SIGN when dividing $-15$ by $10$; the choice $x = -\\frac{2}{3}$ is FLIPPING THE FRACTION at the last step; the choice no solution is ASSUMING THE VANISHING $x^2$ LEAVES NOTHING TO SOLVE, when a perfectly good linear equation is left behind.)',
    },
    {
      q: 'Solve $\\frac{x+9}{x-6} = \\frac{x+3}{x+2}$.',
      choices: ['$x = \\frac{18}{7}$', '$x = 0$', '$x = -\\frac{18}{7}$', 'No solution'],
      answer: 2,
      solution:
        'Note the ban list before anything else: the denominators vanish at $x = 6$ and $x = -2$, so those two can never be the answer. Cross-multiply: $(x+9)(x+2) = (x+3)(x-6)$. Expanding gives $x^2 + 11x + 18 = x^2 - 3x - 18$, and the $x^2$ terms cancel, leaving $11x + 18 = -3x - 18$, so $14x = -36$ and $x = -\\frac{18}{7}$. That is not $6$ and not $-2$, so it is legal ✓. Check a second, independent way by peeling a $1$ off each side instead of cross-multiplying: $\\frac{x+9}{x-6} = \\frac{(x-6)+15}{x-6} = 1 + \\frac{15}{x-6}$ and $\\frac{x+3}{x+2} = \\frac{(x+2)+1}{x+2} = 1 + \\frac{1}{x+2}$, so the equation reduces to $\\frac{15}{x-6} = \\frac{1}{x+2}$, giving $15x + 30 = x - 6$ and $x = -\\frac{18}{7}$ ✓ — the same value by a route that never multiplied out a square. (The choice $x = \\frac{18}{7}$ is a DROPPED MINUS SIGN in the last division; the choice $x = 0$ comes from EXPANDING $(x+3)(x-6)$ AS $x^2 - 3x + 18$, which turns the equation into $14x = 0$; the choice "no solution" assumes that cancelling the $x^2$ terms always kills the equation, but here a genuine linear equation is left behind ✓.)',
    },
    {
      q: 'Solve $\\frac{x-6}{x+1} = \\frac{x+2}{x+3}$.',
      choices: ['No solution', '$x = -\\frac{10}{3}$', '$x = \\frac{10}{3}$', '$x = -\\frac{3}{10}$'],
      answer: 1,
      solution:
        'The banned inputs are $-1$ and $-3$. Cross-multiply: $(x-6)(x+3) = (x+2)(x+1)$, which expands to $x^2 - 3x - 18 = x^2 + 3x + 2$. The $x^2$ terms cancel, leaving $-3x - 18 = 3x + 2$, so $-20 = 6x$ and $x = -\\frac{10}{3}$; that is neither $-1$ nor $-3$, so it survives the domain check ✓. Check a second, independent way by rewriting both sides in one-minus-a-fraction form: $\\frac{x-6}{x+1} = 1 - \\frac{7}{x+1}$ and $\\frac{x+2}{x+3} = 1 - \\frac{1}{x+3}$, so the equation says $\\frac{7}{x+1} = \\frac{1}{x+3}$, giving $7(x+3) = x+1$, then $6x = -20$ and $x = -\\frac{10}{3}$ ✓ — and substituting shows both sides equal $4$. (The choice $x = \\frac{10}{3}$ is DROPPING THE MINUS SIGN; the choice $x = -\\frac{3}{10}$ is FLIPPING THE FRACTION; the choice no solution is ASSUMING THE VANISHING $x^2$ LEAVES NOTHING TO SOLVE.)',
    },
  ],
  // p10 — the candidate has to survive the ban list, or there is no solution.
  [
    {
      q: 'Solve $\\frac{x^2 - 9x}{x - 9} = 9$.',
      choices: ['No solution', '$x = 9$', '$x = 0$', '$x = 18$'],
      answer: 0,
      solution:
        'Write down the ban before anything else: the denominator is zero at $x = 9$, so $9$ is excluded from the start. Factor the numerator: $\\frac{x(x-9)}{x-9} = x$, and that cancelling is only legal for $x \\ne 9$. The equation therefore reads $x = 9$ — the one value the domain forbids ✗ — so nothing satisfies the original and there is no solution ✓. Check a second, independent way by clearing the denominator instead of cancelling: $x^2 - 9x = 9(x-9) = 9x - 81$, so $x^2 - 18x + 81 = 0$, which factors as $(x-9)^2 = 0$ and gives only $x = 9$ ✗, banned again ✓. (The choice $x = 9$ is SKIPPING THE DOMAIN CHECK; the choice $x = 0$ is ZEROING THE NUMERATOR, which solves $\\frac{x^2-9x}{x-9} = 0$ rather than $= 9$; the choice $x = 18$ comes from losing the $+81$ in $x^2 - 18x + 81 = 0$ and solving $x(x-18) = 0$.)',
    },
    {
      q: 'Solve $\\frac{x^2 - 7x}{x - 7} = 7$.',
      choices: ['$x = 7$', '$x = 0$', 'No solution', '$x = 14$'],
      answer: 2,
      solution:
        'Ban list first: the denominator is zero at $x = 7$, so $7$ can never be an answer no matter what the algebra says. Factor the numerator: $\\frac{x(x-7)}{x-7} = x$ for every $x \\ne 7$, so the equation reduces to $x = 7$ — and that is precisely the banned value. The one candidate the equation offers is the one value it forbids, so nothing is left and there is no solution ✓. Check a second, independent way by clearing the denominator instead of cancelling: $x^2 - 7x = 7x - 49$, so $x^2 - 14x + 49 = 0$, which factors as $(x-7)^2 = 0$ and gives the double root $x = 7$ ✗ — both copies are excluded, so again nothing survives ✓. (The choice $x = 7$ is KEEPING THE EXCLUDED VALUE because the algebra produced it; the choice $x = 0$ is ZEROING THE NUMERATOR, but $\\frac{0}{-7} = 0$, not $7$ ✗; the choice $x = 14$ comes from CANCELLING THE $x$ INSTEAD OF THE $(x-7)$, leaving $x - 7 = 7$.)',
    },
    {
      q: 'Solve $\\frac{x^2 + 3x}{x + 3} = -3$.',
      choices: ['$x = 0$', '$x = 3$', '$x = -3$', 'No solution'],
      answer: 3,
      solution:
        'The domain is settled first: the denominator $x + 3$ is zero at $x = -3$, so $-3$ is excluded no matter what the algebra says later. Factor the numerator: $\\frac{x(x+3)}{x+3} = x$ for $x \\ne -3$, so the equation collapses to $x = -3$, which is precisely the forbidden value ✗. Every candidate is banned, so there is no solution ✓. Check a second, independent way by clearing the denominator: $x^2 + 3x = -3(x+3) = -3x - 9$, giving $x^2 + 6x + 9 = 0$, which factors as $(x+3)^2 = 0$ and yields only $x = -3$ ✗ ✓. (The choice $x = -3$ is SKIPPING THE DOMAIN CHECK; the choice $x = 0$ is ZEROING THE NUMERATOR, which would solve the equation set equal to $0$; the choice $x = 3$ is DROPPING THE MINUS SIGN on the right-hand side.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  sections: {
    '20.4': s204,
  },
}
