// Introduction to Algebra chapter 20 — variations for section 20.1
// (Radicals). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked twice by two genuinely different routes, and the
//    second route is written out in the solution. A bare square root was found
//    by naming the number that squares to the radicand AND by splitting the
//    radicand into perfect-square factors. A domain was found by solving the
//    inequality AND by testing the boundary against a point just outside it.
//    A one-radical equation was solved by squaring AND by walking the four
//    offered numbers through the ORIGINAL equation. A quadratic-after-squaring
//    equation was solved by factoring AND by a substitution that renames the
//    nonnegative side, which throws the imposter root out on sight. A
//    two-radical equation was solved by squaring AND by comparing the two
//    insides directly.
//  - Every answer is exact. No square root here is ever approximated: every
//    radicand that gets evaluated is a perfect square.
//  - Every candidate produced by squaring is substituted back into the
//    ORIGINAL equation before it is kept or thrown out, because squaring
//    erases signs and manufactures imposters.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS, and that mistake really does produce that choice. The traps running
//    through this section are: TAKING THE NEGATIVE ROOT, ANSWERING WITH $\pm$,
//    HALVING INSTEAD OF ROOTING, MAKING THE ENDPOINT STRICT, FLIPPING THE SIGN
//    OF THE SHIFT, FORGETTING THAT THE RADICAL RESTRICTS ANYTHING, FLIPPING
//    THE INEQUALITY, FORGETTING TO DIVIDE BY THE COEFFICIENT, DROPPING THE
//    MINUS SIGN, DOUBLING INSTEAD OF SQUARING, HALVING INSTEAD OF SQUARING,
//    ROOTING BOTH SIDES AGAIN, SKIPPING THE SQUARING, SUBTRACTING INSTEAD OF
//    ADDING, FORGETTING THE SHIFT, KEEPING THE CANDIDATE WITHOUT CHECKING,
//    KEEPING BOTH ROOTS, KEEPING THE IMPOSTER ROOT, THROWING OUT BOTH ROOTS,
//    SUBTRACTING THE CONSTANTS, TREATING A RADICAL AS A PLAIN TERM,
//    ANSWERING WITH THE SQUARE ROOT INSTEAD OF WITH $x$, and IGNORING A TERM.
//  - No two choices inside an item name the same number.

const s201 = [
  // p1 — the radical sign returns ONE nonnegative number, never a pair.
  [
    {
      q: 'What is $\\sqrt{324}$?',
      choices: ['$18$', '$-18$', 'Both $18$ and $-18$', '$162$'],
      answer: 0,
      solution:
        'The radical sign asks for the one nonnegative number that squares to $324$. Counting upward through the squares, $17^2 = 289$ and $18^2 = 324$, so $\\sqrt{324} = 18$ ✓. Check a second, independent way by splitting the radicand into perfect-square factors instead of hunting for the root: $324 = 4 \\cdot 81$, so $\\sqrt{324} = \\sqrt{4} \\cdot \\sqrt{81} = 2 \\cdot 9 = 18$ ✓ — a different multiplication, the same answer. (The choice $-18$ is TAKING THE NEGATIVE ROOT: $-18$ really does square to $324$, but the radical always hands back the nonnegative one; the choice naming both $18$ and $-18$ is ANSWERING WITH $\\pm$, which is what the equation $x^2 = 324$ wants, not what $\\sqrt{324}$ means; the choice $162$ is HALVING INSTEAD OF ROOTING, $324 \\div 2$.)',
    },
    {
      q: 'What is $\\sqrt{441}$?',
      choices: ['$-21$', 'Both $21$ and $-21$', '$21$', '$220.5$'],
      answer: 2,
      solution:
        'We want the nonnegative number whose square is $441$. Since $20^2 = 400$ and $21^2 = 441$, the answer is $\\sqrt{441} = 21$ ✓. Check a second, independent way through perfect-square factors: $441 = 9 \\cdot 49$, so $\\sqrt{441} = \\sqrt{9} \\cdot \\sqrt{49} = 3 \\cdot 7 = 21$ ✓. (The choice $-21$ is TAKING THE NEGATIVE ROOT — the output of a square root is never negative; the choice naming both $21$ and $-21$ is ANSWERING WITH $\\pm$; the choice $220.5$ is HALVING INSTEAD OF ROOTING, $441 \\div 2$, and halving is not undoing a square.)',
    },
    {
      q: 'What is $\\sqrt{1089}$?',
      choices: ['$544.5$', 'Both $33$ and $-33$', '$-33$', '$33$'],
      answer: 3,
      solution:
        'The radicand sits between $30^2 = 900$ and $40^2 = 1600$, and it ends in $9$, so the root ends in $3$ or $7$. Testing $33$: $33 \\cdot 33 = 33 \\cdot 30 + 33 \\cdot 3 = 990 + 99 = 1089$ ✓, so $\\sqrt{1089} = 33$. Check a second, independent way through perfect-square factors: $1089 = 9 \\cdot 121$, so $\\sqrt{1089} = \\sqrt{9} \\cdot \\sqrt{121} = 3 \\cdot 11 = 33$ ✓. (The choice $544.5$ is HALVING INSTEAD OF ROOTING, $1089 \\div 2$; the choice naming both $33$ and $-33$ is ANSWERING WITH $\\pm$; the choice $-33$ is TAKING THE NEGATIVE ROOT, and the radical never returns it.)',
    },
  ],
  // p2 — domain of a shifted radical: keep the inside nonnegative, endpoint included.
  [
    {
      q: 'What is the domain of $f(x) = \\sqrt{x - 12}$?',
      choices: ['$x > 12$', '$x \\ge 12$', '$x \\ge -12$', 'All real numbers'],
      answer: 1,
      solution:
        'The inside of a square root is not allowed to be negative, so require $x - 12 \\ge 0$, which gives $x \\ge 12$ ✓. Check a second, independent way by testing values instead of solving: at $x = 12$ the inside is $0$ and $\\sqrt{0} = 0$, a perfectly good output ✓; at $x = 11$ the inside is $-1$ and $\\sqrt{-1}$ does not exist ✗; at $x = 48$ the inside is $36$ and $\\sqrt{36} = 6$ ✓. So everything from $12$ upward works and everything below it fails. (The choice $x > 12$ is MAKING THE ENDPOINT STRICT, which throws away $x = 12$ even though $\\sqrt{0}$ is fine; the choice $x \\ge -12$ is FLIPPING THE SIGN OF THE SHIFT — test it at $x = 0$, where the inside is $-12$ ✗; the choice of all real numbers is FORGETTING THAT THE RADICAL RESTRICTS ANYTHING.)',
    },
    {
      q: 'What is the domain of $g(x) = \\sqrt{x - 27}$?',
      choices: ['All real numbers', '$x \\ge -27$', '$x > 27$', '$x \\ge 27$'],
      answer: 3,
      solution:
        'Set the inside to be nonnegative: $x - 27 \\ge 0$, so $x \\ge 27$ ✓. Check a second, independent way by testing the boundary and its neighbours: $x = 27$ gives $\\sqrt{0} = 0$ ✓, $x = 26$ gives $\\sqrt{-1}$ ✗, and $x = 63$ gives $\\sqrt{36} = 6$ ✓ — the cutoff really is at $27$, and $27$ itself belongs. (The choice of all real numbers is FORGETTING THAT THE RADICAL RESTRICTS ANYTHING; the choice $x \\ge -27$ is FLIPPING THE SIGN OF THE SHIFT, and it wrongly admits $x = 0$, where the inside is $-27$ ✗; the choice $x > 27$ is MAKING THE ENDPOINT STRICT, and $\\sqrt{0}$ is a legal output, so $27$ stays in.)',
    },
    {
      q: 'What is the domain of $h(x) = \\sqrt{x + 15}$?',
      choices: ['$x \\ge -15$', '$x \\ge 15$', '$x > -15$', '$x \\le -15$'],
      answer: 0,
      solution:
        'Require $x + 15 \\ge 0$, so $x \\ge -15$ ✓. A plus sign inside pushes the domain to the LEFT, because the shift is undone, not copied. Check a second, independent way by testing values: $x = -15$ gives $\\sqrt{0} = 0$ ✓, $x = -16$ gives $\\sqrt{-1}$ ✗, and $x = 0$ gives $\\sqrt{15}$, a real number ✓ — so $0$ belongs to the domain, which already rules out any answer starting at $15$ or running downward. (The choice $x \\ge 15$ is FLIPPING THE SIGN OF THE SHIFT; the choice $x > -15$ is MAKING THE ENDPOINT STRICT; the choice $x \\le -15$ is FLIPPING THE INEQUALITY, and it keeps exactly the numbers that make the inside negative.)',
    },
  ],
  // p3 — solve a bare radical equation: square, do not double.
  [
    {
      q: 'Solve $\\sqrt{x} = 7$.',
      choices: ['$x = 14$', '$x = 3.5$', '$x = 49$', '$x = \\sqrt{7}$'],
      answer: 2,
      solution:
        'Squaring undoes a square root, so square both sides: $x = 7^2 = 49$. Check in the original: $\\sqrt{49} = 7$ ✓. Check a second, independent way by running all four offered numbers through the original equation: $\\sqrt{14}$ is not a whole number at all, $\\sqrt{3.5}$ is smaller than $2$, $\\sqrt{49} = 7$ ✓, and $\\sqrt{\\sqrt{7}}$ is smaller than $2$ as well — exactly one of them lands on $7$. (The choice $14$ is DOUBLING INSTEAD OF SQUARING; the choice $3.5$ is HALVING INSTEAD OF SQUARING, which undoes nothing; the choice $\\sqrt{7}$ is ROOTING BOTH SIDES AGAIN, going the wrong direction.)',
    },
    {
      q: 'Solve $\\sqrt{x} = 24$.',
      choices: ['$x = 576$', '$x = 48$', '$x = 12$', '$x = \\sqrt{24}$'],
      answer: 0,
      solution:
        'Square both sides: $x = 24^2 = 576$. Check in the original: $\\sqrt{576} = 24$ ✓, since $24 \\cdot 24 = 576$. Check a second, independent way by computing the square a different way, as $(25 - 1)^2 = 625 - 50 + 1 = 576$ ✓ — same number from a completely different multiplication. (The choice $48$ is DOUBLING INSTEAD OF SQUARING; the choice $12$ is HALVING INSTEAD OF SQUARING; the choice $\\sqrt{24}$ is ROOTING BOTH SIDES AGAIN instead of squaring them.)',
    },
    {
      q: 'Solve $\\sqrt{x} = 11$.',
      choices: ['$x = 22$', '$x = 121$', '$x = \\sqrt{11}$', '$x = 5.5$'],
      answer: 1,
      solution:
        'Square both sides: $x = 11^2 = 121$. Check in the original: $\\sqrt{121} = 11$ ✓. Check a second, independent way by building the square by distribution: $11 \\cdot 11 = 11 \\cdot 10 + 11 \\cdot 1 = 110 + 11 = 121$ ✓. (The choice $22$ is DOUBLING INSTEAD OF SQUARING; the choice $\\sqrt{11}$ is ROOTING BOTH SIDES AGAIN; the choice $5.5$ is HALVING INSTEAD OF SQUARING.)',
    },
  ],
  // p4 — domain with a coefficient: divide the WHOLE constant by it.
  [
    {
      q: 'What is the domain of $g(x) = \\sqrt{3x + 7}$?',
      choices: ['$x \\ge -7$', '$x \\ge \\frac{7}{3}$', '$x \\le -\\frac{7}{3}$', '$x \\ge -\\frac{7}{3}$'],
      answer: 3,
      solution:
        'Require $3x + 7 \\ge 0$. Subtract $7$: $3x \\ge -7$. Divide by $3$, a positive number, so the inequality sign stays as it is: $x \\ge -\\frac{7}{3}$ ✓. Check a second, independent way by testing the boundary against a point outside it: at $x = -\\frac{7}{3}$ the inside is $3 \\cdot \\left(-\\frac{7}{3}\\right) + 7 = -7 + 7 = 0$, and $\\sqrt{0} = 0$ ✓, so the endpoint belongs; at $x = -5$ the inside is $-15 + 7 = -8$ ✗. (The choice $x \\ge -7$ is FORGETTING TO DIVIDE BY THE COEFFICIENT, moving the $7$ across but leaving the $3$ behind — and it wrongly admits $x = -5$; the choice $x \\ge \\frac{7}{3}$ is DROPPING THE MINUS SIGN; the choice $x \\le -\\frac{7}{3}$ is FLIPPING THE INEQUALITY, as though dividing by $3$ turned it around.)',
    },
    {
      q: 'What is the domain of $h(x) = \\sqrt{4x + 9}$?',
      choices: ['$x \\ge \\frac{9}{4}$', '$x \\ge -\\frac{9}{4}$', '$x \\ge -9$', '$x \\le -\\frac{9}{4}$'],
      answer: 1,
      solution:
        'Require $4x + 9 \\ge 0$, so $4x \\ge -9$ and then $x \\ge -\\frac{9}{4}$ ✓ — the whole $-9$ gets divided by $4$, not just carried across. Check a second, independent way by testing: $x = -\\frac{9}{4}$ gives an inside of $-9 + 9 = 0$ ✓, $x = -3$ gives $-12 + 9 = -3$ ✗, and $x = 0$ gives $9$, so $\\sqrt{9} = 3$ ✓. The cutoff sits between $-3$ and $0$, exactly where $-\\frac{9}{4}$ lives. (The choice $x \\ge \\frac{9}{4}$ is DROPPING THE MINUS SIGN, and it wrongly throws out $x = 0$; the choice $x \\ge -9$ is FORGETTING TO DIVIDE BY THE COEFFICIENT; the choice $x \\le -\\frac{9}{4}$ is FLIPPING THE INEQUALITY.)',
    },
    {
      q: 'What is the domain of $f(x) = \\sqrt{5x + 12}$?',
      choices: ['$x \\ge -12$', '$x \\ge \\frac{12}{5}$', '$x \\ge -\\frac{12}{5}$', '$x \\le -\\frac{12}{5}$'],
      answer: 2,
      solution:
        'Require $5x + 12 \\ge 0$, so $5x \\ge -12$ and $x \\ge -\\frac{12}{5}$ ✓. Check a second, independent way by testing values around the cutoff: at $x = -\\frac{12}{5}$ the inside is $-12 + 12 = 0$ ✓; at $x = -4$ it is $-20 + 12 = -8$ ✗; at $x = -2$ it is $-10 + 12 = 2$ ✓. So the boundary is between $-4$ and $-2$ and the endpoint itself is legal. (The choice $x \\ge -12$ is FORGETTING TO DIVIDE BY THE COEFFICIENT, and it wrongly admits $x = -4$; the choice $x \\ge \\frac{12}{5}$ is DROPPING THE MINUS SIGN; the choice $x \\le -\\frac{12}{5}$ is FLIPPING THE INEQUALITY and keeps precisely the illegal numbers.)',
    },
  ],
  // p5 — square first, then undo the shift.
  [
    {
      q: 'Solve $\\sqrt{x - 15} = 8$.',
      choices: ['$x = 79$', '$x = 23$', '$x = 49$', '$x = 64$'],
      answer: 0,
      solution:
        'The radical is already alone, so square both sides: $x - 15 = 64$, and adding $15$ gives $x = 79$. Check in the original: $\\sqrt{79 - 15} = \\sqrt{64} = 8$ ✓. Check a second, independent way by reading the equation as a sentence: the inside must be exactly the number whose square root is $8$, that is $64$, and $x$ sits $15$ above the inside, so $x = 64 + 15 = 79$ ✓ — and since the inside grows steadily as $x$ grows, it hits $64$ only once, so there is no second solution. (The choice $23$ is SKIPPING THE SQUARING, solving $x - 15 = 8$; the choice $49$ is SUBTRACTING INSTEAD OF ADDING, $64 - 15$; the choice $64$ is FORGETTING THE SHIFT and stopping at the value of the inside.)',
    },
    {
      q: 'Solve $\\sqrt{x + 24} = 9$.',
      choices: ['$x = -15$', '$x = 105$', '$x = 81$', '$x = 57$'],
      answer: 3,
      solution:
        'Square both sides: $x + 24 = 81$, so $x = 81 - 24 = 57$. Check in the original: $\\sqrt{57 + 24} = \\sqrt{81} = 9$ ✓. Check a second, independent way by testing the other offered numbers in the ORIGINAL equation: $x = -15$ gives $\\sqrt{9} = 3$ ✗, $x = 105$ gives $\\sqrt{129}$, which is not a whole number ✗, and $x = 81$ gives $\\sqrt{105}$ ✗ — only $57$ works. (The choice $-15$ is SKIPPING THE SQUARING, solving $x + 24 = 9$; the choice $105$ is ADDING INSTEAD OF SUBTRACTING, $81 + 24$, which moves the shift the wrong way; the choice $81$ is FORGETTING THE SHIFT and reporting the value of the inside.)',
    },
    {
      q: 'Solve $\\sqrt{2x - 5} = 11$.',
      choices: ['$x = 126$', '$x = 63$', '$x = 8$', '$x = 58$'],
      answer: 1,
      solution:
        'Square both sides: $2x - 5 = 121$. Add $5$: $2x = 126$. Divide by $2$: $x = 63$. Check in the original: $\\sqrt{2 \\cdot 63 - 5} = \\sqrt{126 - 5} = \\sqrt{121} = 11$ ✓. Check a second, independent way by working the operations backwards in reverse order: undo the radical to get $121$, undo the $-5$ to get $126$, undo the $\\times 2$ to get $63$ ✓ — three inverse steps, same landing spot. (The choice $126$ is FORGETTING TO DIVIDE BY THE COEFFICIENT and stopping at $2x$; the choice $8$ is SKIPPING THE SQUARING, solving $2x - 5 = 11$; the choice $58$ is SUBTRACTING INSTEAD OF ADDING, using $121 - 5 = 116$ before halving.)',
    },
  ],
  // p6 — a square root output is never negative, so the count is zero.
  [
    {
      q: 'How many solutions does $\\sqrt{x} = -21$ have?',
      choices: ['$1$', '$2$', '$0$', 'Infinitely many'],
      answer: 2,
      solution:
        'A square root never returns a negative number, so $\\sqrt{x}$ cannot equal $-21$ no matter what $x$ is: there are $0$ solutions ✓. Check a second, independent way by doing the algebra and testing the candidate it produces: squaring gives $x = 441$, but substituting back into the ORIGINAL equation gives $\\sqrt{441} = 21$, and $21 \\ne -21$ ✗ — a pure imposter, manufactured by the squaring step. (The choice $1$ is KEEPING THE CANDIDATE WITHOUT CHECKING, reporting $x = 441$; the choice $2$ is ANSWERING WITH $\\pm$, as though this were $x^2 = 441$ with its two roots; the choice of infinitely many treats the equation as though it placed no condition on $x$ at all.)',
    },
    {
      q: 'How many solutions does $\\sqrt{x + 30} + 12 = 3$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 0,
      solution:
        'Isolate the radical first: subtract $12$ from both sides to get $\\sqrt{x + 30} = -9$. A radical is never negative, so there are $0$ solutions ✓. Check a second, independent way by bounding the left side without ever isolating anything: wherever the function is defined, $\\sqrt{x + 30} \\ge 0$, so the whole left side is at least $0 + 12 = 12$, and $12 > 3$ — the left side can never come down to $3$ ✓. (The choice $1$ is KEEPING THE CANDIDATE WITHOUT CHECKING: squaring $-9$ gives $x + 30 = 81$ and $x = 51$, but that $x$ makes the left side $\\sqrt{81} + 12 = 21$, not $3$ ✗; the choice $2$ is ANSWERING WITH $\\pm$; the choice of infinitely many ignores the equation entirely.)',
    },
    {
      q: 'How many solutions does $\\sqrt{5x + 24} = -7$ have?',
      choices: ['$2$', '$1$', 'Infinitely many', '$0$'],
      answer: 3,
      solution:
        'The right side is negative and the left side is a square root, which is never negative, so the two sides can never meet: $0$ solutions ✓. Check a second, independent way by chasing the candidate: squaring gives $5x + 24 = 49$, so $5x = 25$ and $x = 5$; substituting into the ORIGINAL equation gives $\\sqrt{5 \\cdot 5 + 24} = \\sqrt{49} = 7$, and $7 \\ne -7$ ✗, so the only candidate is extraneous and nothing survives. (The choice $2$ is ANSWERING WITH $\\pm$; the choice $1$ is KEEPING THE CANDIDATE WITHOUT CHECKING, reporting $x = 5$; the choice of infinitely many would need the equation to be true for every $x$, and we just watched it fail at $x = 5$.)',
    },
  ],
  // p7 — squaring makes a quadratic; one root is an imposter because the
  //      right side comes out negative there.
  [
    {
      q: 'Solve $\\sqrt{x + 12} = x - 8$.',
      choices: ['$x = 4$ and $x = 13$', '$x = 13$ only', '$x = 4$ only', 'No solution'],
      answer: 1,
      solution:
        'Square both sides: $x + 12 = (x - 8)^2 = x^2 - 16x + 64$, so $x^2 - 17x + 52 = 0$, which factors as $(x - 13)(x - 4) = 0$. Candidates: $13$ and $4$. Check $x = 13$: $\\sqrt{25} = 5$ and $13 - 8 = 5$ ✓. Check $x = 4$: $\\sqrt{16} = 4$, but $4 - 8 = -4$, and a radical is never negative ✗. Only $x = 13$ survives. Check a second, independent way with a substitution that makes the imposter impossible: let $t = x - 8$, so $x = t + 8$ and the equation becomes $\\sqrt{t + 20} = t$ — and $t$ must be nonnegative, since it equals a square root. Squaring gives $t^2 - t - 20 = 0$, or $(t - 5)(t + 4) = 0$, and $t = -4$ is thrown out on sight, leaving $t = 5$ and $x = 13$ ✓. (The choice naming both $4$ and $13$ is KEEPING BOTH ROOTS without substituting; the choice $x = 4$ only is KEEPING THE IMPOSTER ROOT and discarding the real one; the choice of no solution is THROWING OUT BOTH ROOTS, as though squaring spoiled everything it touched.)',
    },
    {
      q: 'Solve $\\sqrt{x + 18} = x - 12$.',
      choices: ['$x = 7$ only', '$x = 7$ and $x = 18$', '$x = 18$ only', 'No solution'],
      answer: 2,
      solution:
        'Square both sides: $x + 18 = x^2 - 24x + 144$, so $x^2 - 25x + 126 = 0$, which factors as $(x - 18)(x - 7) = 0$. Check $x = 18$: $\\sqrt{36} = 6$ and $18 - 12 = 6$ ✓. Check $x = 7$: $\\sqrt{25} = 5$, but $7 - 12 = -5$ ✗ — the sizes match and the signs do not, which is exactly what squaring hides. The solution is $x = 18$. Check a second, independent way by renaming the right side: let $t = x - 12 \\ge 0$, so $x = t + 12$ and the equation reads $\\sqrt{t + 30} = t$. Squaring gives $t^2 - t - 30 = 0$, or $(t - 6)(t + 5) = 0$; $t = -5$ is impossible for a nonnegative $t$, so $t = 6$ and $x = 18$ ✓. (The choice $x = 7$ only is KEEPING THE IMPOSTER ROOT; the choice naming both is KEEPING BOTH ROOTS without checking; the choice of no solution is THROWING OUT BOTH ROOTS.)',
    },
    {
      q: 'Solve $\\sqrt{x + 62} = x - 10$.',
      choices: ['$x = 2$ and $x = 19$', '$x = 2$ only', 'No solution', '$x = 19$ only'],
      answer: 3,
      solution:
        'Square both sides: $x + 62 = x^2 - 20x + 100$, so $x^2 - 21x + 38 = 0$, which factors as $(x - 19)(x - 2) = 0$. Check $x = 19$: $\\sqrt{81} = 9$ and $19 - 10 = 9$ ✓. Check $x = 2$: $\\sqrt{64} = 8$, but $2 - 10 = -8$ ✗. Only $x = 19$ is a solution. Check a second, independent way with the substitution $t = x - 10$, which must be nonnegative because it equals a radical: the equation becomes $\\sqrt{t + 72} = t$, so $t^2 - t - 72 = 0$, or $(t - 9)(t + 8) = 0$, and only $t = 9$ is allowed, giving $x = 19$ ✓. (The choice naming both $2$ and $19$ is KEEPING BOTH ROOTS; the choice $x = 2$ only is KEEPING THE IMPOSTER ROOT — its square root came out $8$ while the right side came out $-8$; the choice of no solution is THROWING OUT BOTH ROOTS.)',
    },
  ],
  // p8 — the bare x on the right forces x >= 0, which kills the negative root.
  [
    {
      q: 'Solve $\\sqrt{3x + 40} = x$.',
      choices: ['$x = 8$ only', '$x = -5$ and $x = 8$', '$x = -5$ only', 'No solution'],
      answer: 0,
      solution:
        'Square both sides: $3x + 40 = x^2$, so $x^2 - 3x - 40 = 0$, which factors as $(x - 8)(x + 5) = 0$. Check $x = 8$: $\\sqrt{24 + 40} = \\sqrt{64} = 8$ ✓. Check $x = -5$: $\\sqrt{-15 + 40} = \\sqrt{25} = 5$, but the right side is $-5$ ✗. The only solution is $x = 8$. Check a second, independent way by reading the sign before doing any algebra: the left side is a square root, so $x$ itself must be nonnegative, which rules out any negative candidate before it is even found; then completing the square gives $x^2 - 3x = 40$, so $\\left(x - \\frac{3}{2}\\right)^2 = 40 + \\frac{9}{4} = \\frac{169}{4}$ and $x - \\frac{3}{2} = \\pm\\frac{13}{2}$, whose nonnegative option is $x = 8$ ✓. (The choice naming both is KEEPING BOTH ROOTS without checking; the choice $x = -5$ only is KEEPING THE IMPOSTER ROOT, which cannot be right since $x$ has to equal a square root; the choice of no solution is THROWING OUT BOTH ROOTS.)',
    },
    {
      q: 'Solve $\\sqrt{4x + 21} = x$.',
      choices: ['$x = -3$ and $x = 7$', '$x = 7$ only', 'No solution', '$x = -3$ only'],
      answer: 1,
      solution:
        'Square both sides: $4x + 21 = x^2$, so $x^2 - 4x - 21 = 0$, which factors as $(x - 7)(x + 3) = 0$. Check $x = 7$: $\\sqrt{28 + 21} = \\sqrt{49} = 7$ ✓. Check $x = -3$: $\\sqrt{-12 + 21} = \\sqrt{9} = 3$, and $3 \\ne -3$ ✗. The solution is $x = 7$. Check a second, independent way by squaring the right side instead of the left: any solution must satisfy $x \\ge 0$, because $x$ equals a radical, so search only among nonnegative numbers — $x = 6$ gives $\\sqrt{45}$, a bit under $7$ but bigger than $6$, while $x = 8$ gives $\\sqrt{53}$, under $8$; the two sides swap order between $6$ and $8$, so they meet exactly once in between, and $x = 7$ is that crossing ✓. (The choice naming both is KEEPING BOTH ROOTS; the choice of no solution is THROWING OUT BOTH ROOTS; the choice $x = -3$ only is KEEPING THE IMPOSTER ROOT, the one the squaring step invented.)',
    },
    {
      q: 'Solve $\\sqrt{5x + 66} = x$.',
      choices: ['$x = -6$ only', '$x = -6$ and $x = 11$', '$x = 11$ only', 'No solution'],
      answer: 2,
      solution:
        'Square both sides: $5x + 66 = x^2$, so $x^2 - 5x - 66 = 0$, which factors as $(x - 11)(x + 6) = 0$. Check $x = 11$: $\\sqrt{55 + 66} = \\sqrt{121} = 11$ ✓. Check $x = -6$: $\\sqrt{-30 + 66} = \\sqrt{36} = 6$, but the right side is $-6$ ✗. The solution is $x = 11$. Check a second, independent way by hunting for a number that is its own square root of $5x + 66$: such an $x$ must be nonnegative and must satisfy $x^2 - 5x = 66$, so $x(x - 5) = 66 = 11 \\cdot 6$ — and $11$ and $11 - 5 = 6$ are exactly that pair, giving $x = 11$ ✓. (The choice $x = -6$ only is KEEPING THE IMPOSTER ROOT, which fails because a radical cannot equal a negative number; the choice naming both is KEEPING BOTH ROOTS; the choice of no solution is THROWING OUT BOTH ROOTS.)',
    },
  ],
  // p9 — two radicals: one squaring clears both, then confirm the insides are legal.
  [
    {
      q: 'Solve $\\sqrt{x + 12} = \\sqrt{3x - 8}$.',
      choices: ['$x = 2$', '$x = 20$', '$x = 10$', 'No solution'],
      answer: 2,
      solution:
        'Squaring both sides clears both radicals at once: $x + 12 = 3x - 8$. Collect: $12 + 8 = 3x - x$, so $2x = 20$ and $x = 10$. Check the insides: $10 + 12 = 22$ and $3 \\cdot 10 - 8 = 22$, both nonnegative, and $\\sqrt{22} = \\sqrt{22}$ ✓. Check a second, independent way without solving anything: two square roots are equal exactly when their insides are equal, so ask where the inside $3x - 8$ catches up with the inside $x + 12$. Starting from $x = 0$ they read $-8$ and $12$; the first climbs by $3$ per step and the second by $1$, so the gap of $20$ closes at $2$ per step — that takes $10$ steps ✓. (The choice $x = 2$ is SUBTRACTING THE CONSTANTS instead of adding, using $2x = 12 - 8$; the choice $x = 20$ is FORGETTING TO DIVIDE BY THE COEFFICIENT and stopping at $2x = 20$; the choice of no solution assumes two differently written radicals can never match, but they match whenever their insides do.)',
    },
    {
      q: 'Solve $\\sqrt{3x - 6} = \\sqrt{x + 12}$.',
      choices: ['$x = 3$', '$x = 21$', 'No solution', '$x = 9$'],
      answer: 3,
      solution:
        'Two square roots are equal exactly when the numbers underneath them are equal and both are allowed, so square both sides: $3x - 6 = x + 12$. Collecting gives $2x = 18$, so $x = 9$. Now check it in the ORIGINAL equation, which is the whole point of a radical problem: the left inside is $3(9) - 6 = 21$ and the right inside is $9 + 12 = 21$, both nonnegative and equal, so both radicals exist and both equal $\\sqrt{21}$ ✓. Check a second, independent way without ever squaring: the two insides are the lines $3x - 6$ and $x + 12$, which start apart and close at a rate of $2$ per step, so they meet exactly once — at $x = 9$, where each reads $21$ ✓, and one crossing means one solution. (The choice $x = 3$ COLLECTS THE $x$ TERMS ON THE WRONG SIDE, turning $2x = 18$ into $4x = 6 + 6$; the choice $x = 21$ REPORTS THE NUMBER UNDER THE RADICAL instead of the $x$ that produced it; the choice "no solution" assumes the candidate must be extraneous, but here it survives the check ✓.)',
    },
    {
      q: 'Solve $\\sqrt{7x - 30} = \\sqrt{4x + 9}$.',
      choices: ['$x = -7$', '$x = 13$', '$x = 39$', 'No solution'],
      answer: 1,
      solution:
        'Square both sides to clear both radicals: $7x - 30 = 4x + 9$, so $3x = 39$ and $x = 13$. Check the insides: $7 \\cdot 13 - 30 = 91 - 30 = 61$ and $4 \\cdot 13 + 9 = 52 + 9 = 61$, both nonnegative, so $\\sqrt{61} = \\sqrt{61}$ ✓. Check a second, independent way by testing the other offered numbers in the original: $x = -7$ makes the left inside $-79$ ✗, and $x = 39$ makes the insides $243$ and $165$, which are different, so the radicals differ ✗ — only $13$ balances them. (The choice $x = -7$ is SUBTRACTING THE CONSTANTS instead of adding, using $3x = 9 - 30$; the choice $x = 39$ is FORGETTING TO DIVIDE BY THE COEFFICIENT and stopping at $3x = 39$; the choice of no solution would be right only if the insides never met, and they meet at $x = 13$.)',
    },
  ],
  // p10 — a radical AND a plain x: rename the radical and a quadratic appears.
  [
    {
      q: 'Solve $\\sqrt{x} + x = 56$.',
      choices: ['$x = 28$', '$x = 7$', '$x = 64$', '$x = 49$'],
      answer: 3,
      solution:
        'Let $u = \\sqrt{x}$, so $x = u^2$ and the equation becomes $u^2 + u = 56$, or $u^2 + u - 56 = 0$, which factors as $(u + 8)(u - 7) = 0$. Since $u$ is a square root it cannot be $-8$, so $u = 7$ and $x = u^2 = 49$. Check: $\\sqrt{49} + 49 = 7 + 49 = 56$ ✓. Check a second, independent way by isolating the radical and squaring instead: $\\sqrt{x} = 56 - x$ gives $x = 3136 - 112x + x^2$, so $x^2 - 113x + 3136 = 0$, which factors as $(x - 49)(x - 64) = 0$; testing both in the ORIGINAL equation, $49$ gives $56$ ✓ while $64$ gives $8 + 64 = 72$ ✗. Same survivor, found a different way. (The choice $28$ is TREATING $\\sqrt{x}$ AS A PLAIN $x$ and solving $2x = 56$; the choice $7$ is ANSWERING WITH THE SQUARE ROOT INSTEAD OF WITH $x$; the choice $64$ is KEEPING THE IMPOSTER ROOT that the squaring step produced.)',
    },
    {
      q: 'Solve $\\sqrt{x} + x = 30$.',
      choices: ['$x = 15$', '$x = 5$', '$x = 25$', '$x = 900$'],
      answer: 2,
      solution:
        'Let $u = \\sqrt{x} \\ge 0$, so $x = u^2$ and the equation becomes $u^2 + u - 30 = 0$, which factors as $(u + 6)(u - 5) = 0$. A square root is never negative, so $u = 5$ and $x = 25$. Check: $\\sqrt{25} + 25 = 5 + 25 = 30$ ✓. Check a second, independent way by walking the four offered numbers through the original equation: $\\sqrt{15} + 15$ is nowhere near a whole $30$ ✗, $\\sqrt{5} + 5$ is under $8$ ✗, $\\sqrt{25} + 25 = 30$ ✓, and $\\sqrt{900} + 900 = 930$ ✗ — exactly one lands. (The choice $15$ is TREATING $\\sqrt{x}$ AS A PLAIN $x$, solving $x + x = 30$; the choice $5$ is ANSWERING WITH THE SQUARE ROOT INSTEAD OF WITH $x$; the choice $900$ is IGNORING THE $x$ TERM and solving $\\sqrt{x} = 30$.)',
    },
    {
      q: 'Solve $x + 3\\sqrt{x} = 88$.',
      choices: ['$x = 64$', '$x = 22$', '$x = 8$', '$x = 121$'],
      answer: 0,
      solution:
        'Let $u = \\sqrt{x} \\ge 0$, so $x = u^2$ and the equation becomes $u^2 + 3u - 88 = 0$, which factors as $(u + 11)(u - 8) = 0$. The root $u = -11$ is impossible for a square root, so $u = 8$ and $x = 64$. Check: $64 + 3\\sqrt{64} = 64 + 3 \\cdot 8 = 64 + 24 = 88$ ✓. Check a second, independent way by isolating the radical and squaring: $3\\sqrt{x} = 88 - x$ gives $9x = 7744 - 176x + x^2$, so $x^2 - 185x + 7744 = 0$, which factors as $(x - 64)(x - 121) = 0$; back in the ORIGINAL equation, $64$ gives $88$ ✓ and $121$ gives $121 + 33 = 154$ ✗. (The choice $22$ is TREATING $3\\sqrt{x}$ AS $3x$ and solving $4x = 88$; the choice $8$ is ANSWERING WITH THE SQUARE ROOT INSTEAD OF WITH $x$; the choice $121$ is KEEPING THE IMPOSTER ROOT thrown up by squaring.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  sections: {
    '20.1': s201,
  },
}
