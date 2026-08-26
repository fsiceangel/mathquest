// Introduction to Algebra chapter 22 — variations for section 22.1
// (Raising Equations to Powers). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every key was checked against the ORIGINAL equation, never against the
//    squared one, and every solution carries a genuinely independent second
//    route: a radical equation is solved by squaring AND re-derived by a
//    substitution, a sign/domain argument, a conjugate pairing, or a direct
//    test of the four choices; an $x + \frac{1}{x}$ question is answered by the
//    plus identity AND re-derived through the minus identity or through the
//    factorisation $x^3 + \frac{1}{x^3} = \left(x + \frac{1}{x}\right)\left(x^2
//    - 1 + \frac{1}{x^2}\right)$.
//  - Every slot keeps the shape of its base answer: a solved value stays a
//    value, an extraneous-root question stays a candidate label, a count stays
//    a count, a symmetric expression stays a whole number.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS, and that mistake really does produce that choice. The traps running
//    through this section are: COPYING THE RIGHT SIDE, DOUBLING INSTEAD OF
//    SQUARING, HALVING INSTEAD OF SQUARING, SQUARE-ROOTING AGAIN, STOPPING AT
//    THE RADICAND, SIGN-FLIPPING THE CONSTANT, DROPPING THE CONSTANT, SQUARING
//    INSTEAD OF CUBING, KEEPING THE EXTRANEOUS ROOT, REJECTING THE WRONG
//    CANDIDATE, THROWING AWAY A GOOD ROOT, TRUSTING THE SQUARED EQUATION,
//    ASSUMING A SQUARING ALWAYS COSTS A ROOT, FORGETTING THE CROSS TERM,
//    FLIPPING THE SIGN OF THE CROSS TERM, OVERCOUNTING THE CROSS TERM,
//    SUBTRACTING $2k$ INSTEAD OF $2$, ANSWERING THE SQUARE QUESTION,
//    FORGETTING THE FIRST SUBTRACTION, and FORGETTING THE SECOND SUBTRACTION.
//  - No two choices inside an item name the same number.

const s221 = [
  // s1 — the gentlest squaring: undo a bare square root.
  [
    {
      q: 'Solve $\\sqrt{x} = 9$.',
      choices: ['$81$', '$9$', '$18$', '$3$'],
      answer: 0,
      solution:
        'Squaring is the move that undoes a square root, so square both sides: $x = 9^2 = 81$ ✓. Check in the original: $\\sqrt{81} = 9$ ✓. Check a second, independent way by testing the four choices against the original instead of solving it: $\\sqrt{81} = 9$ ✓, while $\\sqrt{9} = 3$ ✗, $\\sqrt{18} \\approx 4.24$ ✗ and $\\sqrt{3} \\approx 1.73$ ✗ — and since $\\sqrt{x}$ climbs whenever $x$ climbs, one survivor is all there can ever be. (The choice $9$ is COPYING THE RIGHT SIDE, handing back the number that $\\sqrt{x}$ equals; the choice $18$ is DOUBLING INSTEAD OF SQUARING; the choice $3$ is SQUARE-ROOTING AGAIN, reporting $\\sqrt{9}$ where $9^2$ was wanted.)',
    },
    {
      q: 'Solve $\\sqrt{x} = 12$.',
      choices: ['$24$', '$144$', '$12$', '$6$'],
      answer: 1,
      solution:
        'Square both sides: $x = 12^2 = 144$ ✓, and the original agrees: $\\sqrt{144} = 12$ ✓. Check a second, independent way without squaring anything: $\\sqrt{x} \\cdot \\sqrt{x} = x$, so $x$ is the product of two copies of the value $12$, that is $12$ twelves, $144$ ✓. Testing the other choices confirms it: $\\sqrt{24} \\approx 4.90$ ✗, $\\sqrt{12} \\approx 3.46$ ✗, $\\sqrt{6} \\approx 2.45$ ✗. (The choice $24$ is DOUBLING INSTEAD OF SQUARING; the choice $12$ is COPYING THE RIGHT SIDE; the choice $6$ is HALVING INSTEAD OF SQUARING, treating a square root as "divide by two".)',
    },
    {
      q: 'Solve $\\sqrt{x} = 15$.',
      choices: ['$15$', '$30$', '$\\sqrt{15}$', '$225$'],
      answer: 3,
      solution:
        'Square both sides: $x = 15^2 = 225$ ✓. Check in the original: $\\sqrt{225} = 15$ ✓. Check a second, independent way by trapping $x$ between two easy squares: $\\sqrt{x} = 15$ sits strictly between $\\sqrt{196} = 14$ and $\\sqrt{256} = 16$, so $x$ must lie between $196$ and $256$ — and of the four choices only $225$ is anywhere near that window ($15$, $30$ and $\\sqrt{15} \\approx 3.87$ are all far below it) ✗✗✗. (The choice $15$ is COPYING THE RIGHT SIDE; the choice $30$ is DOUBLING INSTEAD OF SQUARING; the choice $\\sqrt{15}$ is SQUARE-ROOTING AGAIN, applying the radical to $15$ instead of removing it.)',
    },
  ],
  // s2 — square, then unwrap a linear radicand; the radicand is not the answer.
  [
    {
      q: 'Solve $\\sqrt{5x + 4} = 7$.',
      choices: ['$45$', '$9$', '$\\frac{53}{5}$', '$2$'],
      answer: 1,
      solution:
        'Square both sides: $5x + 4 = 49$. Subtract: $5x = 45$, so $x = 9$ ✓. Check in the original: $\\sqrt{5(9) + 4} = \\sqrt{49} = 7$ ✓. Check a second, independent way by walking forward instead of solving backward: feed $x = 9$ into the radicand, $5(9) + 4 = 49$, whose square root is $7$ ✓ — and because $5x + 4$ strictly increases with $x$, no second value of $x$ can ever produce $49$, so this is the whole solution set. (The choice $45$ is STOPPING AT $5x$, reporting the value of $5x$ rather than of $x$; the choice $\\frac{53}{5}$ is SIGN-FLIPPING THE CONSTANT, adding the $4$ to get $5x = 53$ instead of subtracting it; the choice $2$ is DOUBLING INSTEAD OF SQUARING, from $5x + 4 = 14$.)',
    },
    {
      q: 'Solve $\\sqrt{4x - 3} = 5$.',
      choices: ['$28$', '$\\frac{11}{2}$', '$7$', '$\\frac{25}{4}$'],
      answer: 2,
      solution:
        'Square both sides: $4x - 3 = 25$, so $4x = 28$ and $x = 7$ ✓. Check in the original: $\\sqrt{4(7) - 3} = \\sqrt{25} = 5$ ✓. Check a second, independent way by substituting $y = 4x - 3$ first: the equation says $\\sqrt{y} = 5$, so $y = 25$, and undoing the substitution means solving the plain linear equation $4x - 3 = 25$ from scratch — $x = \\frac{25 + 3}{4} = 7$ ✓. No radical was squared in the second route until after the unknown had been renamed. (The choice $28$ is STOPPING AT $4x$; the choice $\\frac{11}{2}$ is SIGN-FLIPPING THE CONSTANT, from $4x = 25 - 3 = 22$; the choice $\\frac{25}{4}$ is DROPPING THE CONSTANT altogether and solving $4x = 25$.)',
    },
    {
      q: 'Solve $\\sqrt{2x + 5} = 9$.',
      choices: ['$76$', '$43$', '$\\frac{81}{2}$', '$38$'],
      answer: 3,
      solution:
        'Square both sides: $2x + 5 = 81$, so $2x = 76$ and $x = 38$ ✓. Check in the original: $\\sqrt{2(38) + 5} = \\sqrt{81} = 9$ ✓. Check a second, independent way by bracketing before computing: $\\sqrt{2x + 5} = 9$ needs a radicand of exactly $81$, and $2x + 5$ passes $81$ somewhere between $x = 37$ (giving $79$, too small) and $x = 39$ (giving $83$, too big), so the only candidate is $x = 38$ ✓ — and it lands exactly on $81$. (The choice $76$ is STOPPING AT $2x$; the choice $43$ is SIGN-FLIPPING THE CONSTANT, from $2x = 81 + 5 = 86$; the choice $\\frac{81}{2}$ is DROPPING THE CONSTANT and solving $2x = 81$.)',
    },
  ],
  // s3 — name the extraneous candidate (or notice there isn't one).
  [
    {
      q: 'Squaring the equation $\\sqrt{x + 56} = x$ produces the candidates $x = 8$ and $x = -7$. Which is extraneous?',
      choices: ['$x = -7$', '$x = 8$', 'Both are extraneous', 'Neither is extraneous'],
      answer: 0,
      solution:
        'Test each candidate in the ORIGINAL equation, never in the squared one. For $x = 8$: $\\sqrt{64} = 8$ ✓. For $x = -7$: $\\sqrt{49} = 7$, but the right-hand side is $-7$ ✗. So $x = -7$ is the one the squaring step invented. Check a second, independent way with no arithmetic at all: the left side is a square root, so it can never be negative; any solution must therefore have $x \\ge 0$, and that single observation kills $x = -7$ before a number is squared. (The choice $x = 8$ is REJECTING THE WRONG CANDIDATE — both candidates satisfy the squared equation $x + 56 = x^2$, so a student who checks there cannot tell them apart and may discard the good one; "Both are extraneous" is THROWING AWAY A GOOD ROOT; "Neither is extraneous" is KEEPING THE EXTRANEOUS ROOT, forgetting that squaring can manufacture solutions.)',
    },
    {
      q: 'Squaring the equation $\\sqrt{2x + 3} = x$ produces the candidates $x = 3$ and $x = -1$. Which one really solves the original equation?',
      choices: ['$x = -1$', 'Both of them', '$x = 3$', 'Neither of them'],
      answer: 2,
      solution:
        'Substitute into the original. For $x = 3$: $\\sqrt{2(3) + 3} = \\sqrt{9} = 3$ ✓. For $x = -1$: $\\sqrt{2(-1) + 3} = \\sqrt{1} = 1$, while the right-hand side is $-1$ ✗. Only $x = 3$ survives. Check a second, independent way by reading signs: the right-hand side $x$ equals a square root, so $x$ must be at least $0$; that instantly disqualifies $-1$ and leaves $3$ as the sole possibility, which the substitution above confirms. (The choice $x = -1$ is KEEPING THE EXTRANEOUS ROOT — it passes the squared equation $2x + 3 = x^2$ and flunks the original; "Both of them" is TRUSTING THE SQUARED EQUATION, where both candidates do pass; "Neither of them" is THROWING AWAY A GOOD ROOT.)',
    },
    {
      q: 'Squaring the equation $\\sqrt{5x - 6} = x$ produces the candidates $x = 2$ and $x = 3$. Which is extraneous?',
      choices: ['$x = 2$', '$x = 3$', 'Both are extraneous', 'Neither is extraneous'],
      answer: 3,
      solution:
        'Check both in the original. For $x = 2$: $\\sqrt{5(2) - 6} = \\sqrt{4} = 2$ ✓. For $x = 3$: $\\sqrt{5(3) - 6} = \\sqrt{9} = 3$ ✓. Both work, so neither is extraneous — squaring does not ALWAYS cost you a root. Check a second, independent way with a structural argument instead of substitution: squaring only invents solutions when the two sides could have opposite signs, since $a^2 = b^2$ allows $a = -b$. Here the left side is a square root, so it is never negative, and both candidates make the right side positive as well; with both sides non-negative, $a^2 = b^2$ forces $a = b$, so every candidate the squaring produced must be genuine ✓. (The choices $x = 2$ and $x = 3$ are ASSUMING A SQUARING ALWAYS COSTS A ROOT, discarding one candidate out of habit; "Both are extraneous" is THROWING AWAY A GOOD ROOT twice over.)',
    },
  ],
  // s4 — square the plus family: k^2 - 2.
  [
    {
      q: 'If $x + \\frac{1}{x} = 15$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$223$', '$225$', '$227$', '$195$'],
      answer: 0,
      solution:
        'Square the given equation: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 + 2 + \\frac{1}{x^2}$, and the left side is $15^2 = 225$. So $x^2 + \\frac{1}{x^2} = 225 - 2 = 223$ ✓. Check a second, independent way through the MINUS member of the family: $\\left(x - \\frac{1}{x}\\right)^2 = \\left(x + \\frac{1}{x}\\right)^2 - 4 \\cdot x \\cdot \\frac{1}{x} = 225 - 4 = 221$, and since $\\left(x - \\frac{1}{x}\\right)^2 = x^2 - 2 + \\frac{1}{x^2}$, adding the $2$ back gives $x^2 + \\frac{1}{x^2} = 221 + 2 = 223$ ✓ — a different identity, the same total. (The choice $225$ is FORGETTING THE CROSS TERM, reporting $k^2$ itself; the choice $227$ is FLIPPING THE SIGN OF THE CROSS TERM, applying the minus family’s $+2$ rule to a plus-family question; the choice $195$ is SUBTRACTING $2k$ INSTEAD OF $2$, writing the middle term as $2x$ and borrowing the $-3k$ shape from the cubing rule.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 16$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$256$', '$254$', '$258$', '$224$'],
      answer: 1,
      solution:
        'Squaring gives $x^2 + 2 + \\frac{1}{x^2} = 16^2 = 256$, because the cross term is $2 \\cdot x \\cdot \\frac{1}{x} = 2$ exactly. So $x^2 + \\frac{1}{x^2} = 256 - 2 = 254$ ✓. Check a second, independent way through the minus version: $\\left(x - \\frac{1}{x}\\right)^2 = 256 - 4 = 252$, and that expression equals $x^2 - 2 + \\frac{1}{x^2}$, so $x^2 + \\frac{1}{x^2} = 252 + 2 = 254$ ✓. The two routes disagree about which $2$ to move and still land together. (The choice $256$ is FORGETTING THE CROSS TERM; the choice $258$ is FLIPPING THE SIGN OF THE CROSS TERM, adding $2$ where the plus family subtracts it; the choice $224$ is SUBTRACTING $2k$ INSTEAD OF $2$, computing $256 - 32$.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 17$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$289$', '$291$', '$287$', '$255$'],
      answer: 2,
      solution:
        'Square the given: $x^2 + 2 + \\frac{1}{x^2} = 17^2 = 289$, so $x^2 + \\frac{1}{x^2} = 289 - 2 = 287$ ✓. Check a second, independent way by going through the difference: $\\left(x - \\frac{1}{x}\\right)^2 = \\left(x + \\frac{1}{x}\\right)^2 - 4 = 285$, and adding $2$ to that gives $287$ ✓. A numerical sanity check agrees too — the equation $x + \\frac{1}{x} = 17$ gives $x \\approx 16.94$, and $16.94^2 \\approx 286.9$ plus a whisker of $\\frac{1}{x^2}$ lands on $287$ ✓. (The choice $289$ is FORGETTING THE CROSS TERM; the choice $291$ is FLIPPING THE SIGN OF THE CROSS TERM; the choice $255$ is SUBTRACTING $2k$ INSTEAD OF $2$, computing $289 - 34$.)',
    },
  ],
  // s5 — square a radical against a linear right side; one candidate dies.
  [
    {
      q: 'Solve $\\sqrt{x + 5} = x - 1$.',
      choices: ['$x = -1$ only', '$x = 4$ only', 'Both $x = -1$ and $x = 4$', 'No solution'],
      answer: 1,
      solution:
        'Square both sides: $x + 5 = x^2 - 2x + 1$, so $x^2 - 3x - 4 = 0$, which factors as $(x - 4)(x + 1) = 0$ and offers the candidates $x = 4$ and $x = -1$. Check $x = 4$ in the original: $\\sqrt{9} = 3$ and $4 - 1 = 3$ ✓. Check $x = -1$: $\\sqrt{4} = 2$, but $-1 - 1 = -2$ ✗ — extraneous. Only $x = 4$ survives. Check a second, independent way with a substitution that makes the sign condition automatic: let $y = x - 1$, so the equation reads $\\sqrt{y + 6} = y$ with $y \\ge 0$ forced by the radical. Squaring gives $y^2 - y - 6 = 0$, or $(y - 3)(y + 2) = 0$, and the constraint $y \\ge 0$ leaves only $y = 3$, so $x = 4$ ✓. (The choice $x = -1$ only is REJECTING THE WRONG CANDIDATE; "Both" is KEEPING THE EXTRANEOUS ROOT, trusting the squared quadratic; "No solution" is THROWING AWAY A GOOD ROOT.)',
    },
    {
      q: 'Solve $\\sqrt{2x + 1} = x - 7$.',
      choices: ['$x = 4$ only', 'No solution', '$x = 12$ only', 'Both $x = 4$ and $x = 12$'],
      answer: 2,
      solution:
        'Square both sides: $2x + 1 = x^2 - 14x + 49$, so $x^2 - 16x + 48 = 0$, which factors as $(x - 4)(x - 12) = 0$. Check $x = 12$: $\\sqrt{25} = 5$ and $12 - 7 = 5$ ✓. Check $x = 4$: $\\sqrt{9} = 3$, but $4 - 7 = -3$ ✗ — the squaring step could not tell $3$ from $-3$, and that is exactly where $x = 4$ came from. Only $x = 12$ works. Check a second, independent way by reading the signs before doing any algebra: the left side is a square root, so the right side $x - 7$ must be at least $0$, forcing $x \\ge 7$. That single inequality disqualifies $4$ on sight and leaves $12$ as the only candidate that could possibly survive ✓. (The choice $x = 4$ only is REJECTING THE WRONG CANDIDATE; "Both" is KEEPING THE EXTRANEOUS ROOT; "No solution" is THROWING AWAY A GOOD ROOT.)',
    },
    {
      q: 'Solve $\\sqrt{3x + 4} = x - 2$.',
      choices: ['Both $x = 0$ and $x = 7$', 'No solution', '$x = 0$ only', '$x = 7$ only'],
      answer: 3,
      solution:
        'Square both sides: $3x + 4 = x^2 - 4x + 4$, so $x^2 - 7x = 0$, which factors as $x(x - 7) = 0$ and gives the candidates $x = 0$ and $x = 7$. Check $x = 7$: $\\sqrt{25} = 5$ and $7 - 2 = 5$ ✓. Check $x = 0$: $\\sqrt{4} = 2$, but $0 - 2 = -2$ ✗ — extraneous. Only $x = 7$ works. Check a second, independent way by watching the two sides race each other: at $x = 0$ the left side is $2$ and the right side is $-2$, so the left leads; the right side climbs with slope $1$ while $\\sqrt{3x + 4}$ flattens out as $x$ grows, so the right side overtakes exactly once and the two sides can be equal at only one place — and $x = 7$ is that place ✓. (The choice $x = 0$ only is REJECTING THE WRONG CANDIDATE; "Both" is KEEPING THE EXTRANEOUS ROOT; "No solution" is THROWING AWAY A GOOD ROOT.)',
    },
  ],
  // s6 — a cube root needs cubing, and cubing invents nothing.
  [
    {
      q: 'Solve $\\sqrt[3]{3x + 1} = 4$.',
      choices: ['$21$', '$5$', '$63$', '$\\frac{64}{3}$'],
      answer: 0,
      solution:
        'Cube both sides: $3x + 1 = 4^3 = 64$, so $3x = 63$ and $x = 21$ ✓. Check in the original: $\\sqrt[3]{3(21) + 1} = \\sqrt[3]{64} = 4$ ✓. Check a second, independent way by testing the choices in the original rather than solving: $x = 5$ gives $\\sqrt[3]{16} \\approx 2.52$ ✗, $x = 63$ gives $\\sqrt[3]{190} \\approx 5.75$ ✗, and $x = \\frac{64}{3}$ gives $\\sqrt[3]{65} \\approx 4.02$ ✗ — close, but a cube root of $4$ demands a radicand of exactly $64$. Only $21$ delivers it ✓, and no checking for extraneous roots is needed here: every real number has exactly one real cube root, so cubing never manufactures a solution the way squaring does. (The choice $5$ is SQUARING INSTEAD OF CUBING, from $3x + 1 = 16$; the choice $63$ is STOPPING AT $3x$; the choice $\\frac{64}{3}$ is DROPPING THE CONSTANT and solving $3x = 64$.)',
    },
    {
      q: 'Solve $\\sqrt[3]{2x + 3} = 5$.',
      choices: ['$122$', '$61$', '$11$', '$64$'],
      answer: 1,
      solution:
        'Cube both sides: $2x + 3 = 5^3 = 125$, so $2x = 122$ and $x = 61$ ✓. Check in the original: $\\sqrt[3]{2(61) + 3} = \\sqrt[3]{125} = 5$ ✓. Check a second, independent way by renaming the radicand first: put $y = 2x + 3$, so the equation says $\\sqrt[3]{y} = 5$ and therefore $y = 125$; now solve the ordinary linear equation $2x + 3 = 125$ on its own terms, $x = \\frac{122}{2} = 61$ ✓. Because $2x + 3$ strictly increases with $x$, exactly one $x$ can reach $125$, so the solution set is complete. (The choice $122$ is STOPPING AT $2x$; the choice $11$ is SQUARING INSTEAD OF CUBING, from $2x + 3 = 25$; the choice $64$ is SIGN-FLIPPING THE CONSTANT, from $2x = 125 + 3 = 128$.)',
    },
    {
      q: 'Solve $\\sqrt[3]{3x - 2} = 4$.',
      choices: ['$66$', '$6$', '$\\frac{62}{3}$', '$22$'],
      answer: 3,
      solution:
        'Cube both sides: $3x - 2 = 64$, so $3x = 66$ and $x = 22$ ✓. Check in the original: $\\sqrt[3]{3(22) - 2} = \\sqrt[3]{64} = 4$ ✓. Check a second, independent way by bracketing the radicand: a cube root of $4$ needs the inside to be exactly $64$, and $3x - 2$ reads $61$ at $x = 21$ (too small) and $67$ at $x = 23$ (too big), so $x = 22$ is the only integer that can hit $64$ — and it hits it dead on ✓. (The choice $66$ is STOPPING AT $3x$; the choice $6$ is SQUARING INSTEAD OF CUBING, from $3x - 2 = 16$; the choice $\\frac{62}{3}$ is SIGN-FLIPPING THE CONSTANT, from $3x = 64 - 2 = 62$.)',
    },
  ],
  // s7 — cube the plus family: k^3 - 3k.
  [
    {
      q: 'If $x + \\frac{1}{x} = 8$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$488$', '$512$', '$536$', '$62$'],
      answer: 0,
      solution:
        'Cube the given: $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + 3x + \\frac{3}{x} + \\frac{1}{x^3} = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$. So $512 = x^3 + \\frac{1}{x^3} + 3(8)$, giving $x^3 + \\frac{1}{x^3} = 512 - 24 = 488$ ✓. Check a second, independent way with the sum-of-cubes factorisation instead of an expansion: $x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)\\left(x^2 - 1 + \\frac{1}{x^2}\\right)$. Squaring the given gives $x^2 + \\frac{1}{x^2} = 64 - 2 = 62$, so the second factor is $62 - 1 = 61$, and $8 \\times 61 = 488$ ✓ — a multiplication rather than a subtraction, and the same answer. (The choice $512$ is FORGETTING THE CROSS TERMS, reporting $k^3$; the choice $536$ is FLIPPING THE SIGN OF THE CROSS TERM, adding $3k$ as the minus family does; the choice $62$ is ANSWERING THE SQUARE QUESTION, reporting $x^2 + \\frac{1}{x^2}$ instead of the cubes.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 9$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$729$', '$756$', '$702$', '$79$'],
      answer: 2,
      solution:
        'Cubing gives $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$, so $729 = x^3 + \\frac{1}{x^3} + 27$ and $x^3 + \\frac{1}{x^3} = 729 - 27 = 702$ ✓. Check a second, independent way by factoring: $x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)\\left(x^2 - 1 + \\frac{1}{x^2}\\right)$, and squaring the given gives $x^2 + \\frac{1}{x^2} = 81 - 2 = 79$, so the value is $9 \\times (79 - 1) = 9 \\times 78 = 702$ ✓. (The choice $729$ is FORGETTING THE CROSS TERMS; the choice $756$ is FLIPPING THE SIGN OF THE CROSS TERM, computing $729 + 27$; the choice $79$ is ANSWERING THE SQUARE QUESTION, stopping at $x^2 + \\frac{1}{x^2}$.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 10$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$1000$', '$1030$', '$98$', '$970$'],
      answer: 3,
      solution:
        'Cube the given: $1000 = x^3 + \\frac{1}{x^3} + 3(10)$, so $x^3 + \\frac{1}{x^3} = 1000 - 30 = 970$ ✓ — the general rule for this family is $k^3 - 3k$. Check a second, independent way through the factorisation $x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)\\left(x^2 - 1 + \\frac{1}{x^2}\\right)$: squaring gives $x^2 + \\frac{1}{x^2} = 100 - 2 = 98$, so the answer is $10 \\times 97 = 970$ ✓. (The choice $1000$ is FORGETTING THE CROSS TERMS; the choice $1030$ is FLIPPING THE SIGN OF THE CROSS TERM; the choice $98$ is ANSWERING THE SQUARE QUESTION.)',
    },
  ],
  // s8 — two radicals, two squarings: count the survivors.
  [
    {
      q: 'How many solutions does $\\sqrt{x + 5} + \\sqrt{x} = 1$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 0,
      solution:
        'Isolate a radical: $\\sqrt{x + 5} = 1 - \\sqrt{x}$. Square: $x + 5 = 1 - 2\\sqrt{x} + x$, so $2\\sqrt{x} = -4$ and $\\sqrt{x} = -2$ — impossible, since a square root is never negative. There are $0$ solutions ✓. Check a second, independent way by sizing the left side up rather than solving: the equation needs $x \\ge 0$ for $\\sqrt{x}$ to exist, and on that domain $\\sqrt{x + 5} \\ge \\sqrt{5} \\approx 2.24$ all by itself, so the sum $\\sqrt{x + 5} + \\sqrt{x}$ is at least $\\sqrt{5}$ and grows from there ✗ — it can never come down to $1$. (The choice $1$ is KEEPING THE EXTRANEOUS ROOT: squaring $\\sqrt{x} = -2$ anyway hands you $x = 4$, and $\\sqrt{9} + \\sqrt{4} = 5 \\ne 1$ ✗; the choice $2$ is ASSUMING TWO SQUARINGS ALWAYS GIVE TWO ROOTS; "Infinitely many" would need the two sides to be the same expression, and they plainly are not.)',
    },
    {
      q: 'How many solutions does $\\sqrt{x + 9} - \\sqrt{x} = 1$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 1,
      solution:
        'Isolate: $\\sqrt{x + 9} = 1 + \\sqrt{x}$. Square: $x + 9 = 1 + 2\\sqrt{x} + x$, so $2\\sqrt{x} = 8$, giving $\\sqrt{x} = 4$ and $x = 16$. Check in the original: $\\sqrt{25} - \\sqrt{16} = 5 - 4 = 1$ ✓. Exactly $1$ solution. Check a second, independent way with the conjugate: $\\left(\\sqrt{x + 9} - \\sqrt{x}\\right)\\left(\\sqrt{x + 9} + \\sqrt{x}\\right) = (x + 9) - x = 9$. Since the difference is $1$, the SUM must be $9$; adding the two facts gives $2\\sqrt{x + 9} = 10$, so $\\sqrt{x + 9} = 5$ and $x = 16$ ✓ — no quadratic anywhere in that route. (The choice $0$ is DECLARING NO SOLUTION because the sum version of this equation fails; the choice $2$ is ASSUMING TWO SQUARINGS ALWAYS GIVE TWO ROOTS — this one collapses to a linear equation in $\\sqrt{x}$ after a single squaring; "Infinitely many" would require an identity.)',
    },
    {
      q: 'How many solutions does $\\sqrt{3x + 1} - \\sqrt{x - 1} = 2$ have?',
      choices: ['Infinitely many', '$0$', '$1$', '$2$'],
      answer: 3,
      solution:
        'Isolate: $\\sqrt{3x + 1} = 2 + \\sqrt{x - 1}$. Square: $3x + 1 = 4 + 4\\sqrt{x - 1} + x - 1$, so $2x - 2 = 4\\sqrt{x - 1}$, that is $x - 1 = 2\\sqrt{x - 1}$. Square again: $(x - 1)^2 = 4(x - 1)$, so $(x - 1)(x - 5) = 0$ and the candidates are $x = 1$ and $x = 5$. Check both in the original: $\\sqrt{4} - \\sqrt{0} = 2 - 0 = 2$ ✓ and $\\sqrt{16} - \\sqrt{4} = 4 - 2 = 2$ ✓. Both survive, so there are $2$ solutions. Check a second, independent way with the conjugate: $\\left(\\sqrt{3x + 1} - \\sqrt{x - 1}\\right)\\left(\\sqrt{3x + 1} + \\sqrt{x - 1}\\right) = (3x + 1) - (x - 1) = 2x + 2$, and dividing by the given difference of $2$ makes the SUM equal to $x + 1$. Adding the difference and the sum gives $2\\sqrt{3x + 1} = x + 3$, so $4(3x + 1) = x^2 + 6x + 9$ and $x^2 - 6x + 5 = 0$, or $(x - 1)(x - 5) = 0$ ✓ — a different quadratic reached by different means, with the same pair of roots. (The choice $1$ is DISCARDING $x = 1$ because it makes a radicand zero, though $\\sqrt{0} = 0$ is perfectly legal; the choice $0$ is THROWING AWAY BOTH GOOD ROOTS on the theory that two squarings must ruin everything; "Infinitely many" would require an identity.)',
    },
  ],
  // s9 — the minus family: the cross term flips to +2.
  [
    {
      q: 'If $x - \\frac{1}{x} = 8$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$66$', '$64$', '$62$', '$68$'],
      answer: 0,
      solution:
        'Square the given: $\\left(x - \\frac{1}{x}\\right)^2 = x^2 - 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 - 2 + \\frac{1}{x^2} = 64$. The cross term is $-2$ this time, so it crosses over as a PLUS: $x^2 + \\frac{1}{x^2} = 64 + 2 = 66$ ✓. Check a second, independent way by first converting to the plus member of the family: $\\left(x + \\frac{1}{x}\\right)^2 = \\left(x - \\frac{1}{x}\\right)^2 + 4 \\cdot x \\cdot \\frac{1}{x} = 64 + 4 = 68$, and the plus rule then subtracts $2$: $x^2 + \\frac{1}{x^2} = 68 - 2 = 66$ ✓. Two rules that pull in opposite directions, one answer. (The choice $64$ is FORGETTING THE CROSS TERM; the choice $62$ is FLIPPING THE SIGN OF THE CROSS TERM, using the plus family’s $-2$ on a minus-family question; the choice $68$ is OVERCOUNTING THE CROSS TERM, writing the middle term as $-4$ instead of $-2$ — it is also where the second route stops if you forget its final step.)',
    },
    {
      q: 'If $x - \\frac{1}{x} = 9$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$81$', '$83$', '$79$', '$85$'],
      answer: 1,
      solution:
        'Square: $x^2 - 2 + \\frac{1}{x^2} = 9^2 = 81$, and moving the $-2$ across gives $x^2 + \\frac{1}{x^2} = 81 + 2 = 83$ ✓. Check a second, independent way by routing through the sum: $\\left(x + \\frac{1}{x}\\right)^2 = \\left(x - \\frac{1}{x}\\right)^2 + 4 = 85$, and the plus rule subtracts $2$ from that, giving $85 - 2 = 83$ ✓. (The choice $81$ is FORGETTING THE CROSS TERM; the choice $79$ is FLIPPING THE SIGN OF THE CROSS TERM, subtracting $2$ where the minus family adds it; the choice $85$ is OVERCOUNTING THE CROSS TERM, treating the middle term as $-4$.)',
    },
    {
      q: 'If $x - \\frac{1}{x} = 10$, what is $x^2 + \\frac{1}{x^2}$?',
      choices: ['$100$', '$98$', '$102$', '$104$'],
      answer: 2,
      solution:
        'Square the given: $x^2 - 2 + \\frac{1}{x^2} = 100$, so $x^2 + \\frac{1}{x^2} = 100 + 2 = 102$ ✓ — the minus in the given turns the usual $-2$ into a $+2$. Check a second, independent way through the plus family: $\\left(x + \\frac{1}{x}\\right)^2 = 100 + 4 = 104$, and subtracting $2$ from that gives $102$ ✓. A numerical check agrees: $x - \\frac{1}{x} = 10$ gives $x \\approx 10.099$, and $x^2 \\approx 101.99$ plus a sliver of $\\frac{1}{x^2}$ lands on $102$ ✓. (The choice $100$ is FORGETTING THE CROSS TERM; the choice $98$ is FLIPPING THE SIGN OF THE CROSS TERM; the choice $104$ is OVERCOUNTING THE CROSS TERM.)',
    },
  ],
  // s10 — square twice, and pay the toll of 2 both times.
  [
    {
      q: 'If $x + \\frac{1}{x} = 5$, what is $x^4 + \\frac{1}{x^4}$?',
      choices: ['$527$', '$529$', '$625$', '$623$'],
      answer: 0,
      solution:
        'Square twice, paying a $2$ each time. First squaring: $x^2 + \\frac{1}{x^2} = 5^2 - 2 = 23$. Now square THAT: $x^4 + 2 + \\frac{1}{x^4} = 23^2 = 529$, so $x^4 + \\frac{1}{x^4} = 529 - 2 = 527$ ✓. Check a second, independent way through a difference of squares: $x^2 - \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)\\left(x - \\frac{1}{x}\\right)$, and since $\\left(x - \\frac{1}{x}\\right)^2 = 5^2 - 4 = 21$, we get $\\left(x^2 - \\frac{1}{x^2}\\right)^2 = 25 \\times 21 = 525$. That expression equals $x^4 - 2 + \\frac{1}{x^4}$, so $x^4 + \\frac{1}{x^4} = 525 + 2 = 527$ ✓ — a route through the DIFFERENCE of the fourth powers rather than the sum. (The choice $529$ is FORGETTING THE SECOND SUBTRACTION, stopping at $23^2$; the choice $625$ is $5^4$, FORGETTING BOTH SUBTRACTIONS; the choice $623$ is FORGETTING THE FIRST SUBTRACTION, squaring $25$ straight to $625$ and taking off only one $2$.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 6$, what is $x^4 + \\frac{1}{x^4}$?',
      choices: ['$1156$', '$1296$', '$1154$', '$1294$'],
      answer: 2,
      solution:
        'Two squarings, two tolls. First: $x^2 + \\frac{1}{x^2} = 6^2 - 2 = 34$. Then: $x^4 + 2 + \\frac{1}{x^4} = 34^2 = 1156$, so $x^4 + \\frac{1}{x^4} = 1156 - 2 = 1154$ ✓. Check a second, independent way through the difference: $\\left(x - \\frac{1}{x}\\right)^2 = 36 - 4 = 32$, so $\\left(x^2 - \\frac{1}{x^2}\\right)^2 = \\left(x + \\frac{1}{x}\\right)^2\\left(x - \\frac{1}{x}\\right)^2 = 36 \\times 32 = 1152$, and since that equals $x^4 - 2 + \\frac{1}{x^4}$, the answer is $1152 + 2 = 1154$ ✓. (The choice $1156$ is FORGETTING THE SECOND SUBTRACTION; the choice $1296$ is $6^4$, FORGETTING BOTH SUBTRACTIONS; the choice $1294$ is FORGETTING THE FIRST SUBTRACTION, computing $1296 - 2$.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 7$, what is $x^4 + \\frac{1}{x^4}$?',
      choices: ['$2209$', '$2401$', '$2399$', '$2207$'],
      answer: 3,
      solution:
        'Square once: $x^2 + \\frac{1}{x^2} = 7^2 - 2 = 47$. Square again: $x^4 + 2 + \\frac{1}{x^4} = 47^2 = 2209$, so $x^4 + \\frac{1}{x^4} = 2209 - 2 = 2207$ ✓. Check a second, independent way through the difference of the squares: $\\left(x - \\frac{1}{x}\\right)^2 = 49 - 4 = 45$, so $\\left(x^2 - \\frac{1}{x^2}\\right)^2 = 49 \\times 45 = 2205$, which equals $x^4 - 2 + \\frac{1}{x^4}$; adding the $2$ back gives $2207$ ✓. Notice how the two routes bracket the answer from below and above — $2205 + 2$ and $2209 - 2$ meet in the middle. (The choice $2209$ is FORGETTING THE SECOND SUBTRACTION; the choice $2401$ is $7^4$, FORGETTING BOTH SUBTRACTIONS; the choice $2399$ is FORGETTING THE FIRST SUBTRACTION, computing $2401 - 2$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 22,
  sections: {
    '22.1': s221,
  },
}
