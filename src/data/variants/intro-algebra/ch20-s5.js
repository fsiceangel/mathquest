// Introduction to Algebra chapter 20 — variations for section 20.5
// (Piecewise Defined Functions). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - The boundary is the whole game. Every solution says out loud which piece
//    owns the boundary and why, by reading the inequality sign: $x \le 5$ owns
//    $5$, $x < 5$ does not. The named trap USED THE WRONG PIECE AT THE
//    BOUNDARY appears wherever a boundary is in play.
//  - Every piecewise rule written here covers every real number exactly once:
//    one branch carries a strict inequality and the other carries the matching
//    non-strict one, so no input is orphaned and none is claimed twice.
//  - Every key was worked twice by two different routes, and the second route
//    is written out in the solution. Evaluations were checked by substituting
//    into the surviving branch AND by testing a nearby input on each side of
//    the boundary; equations were solved branch by branch AND by evaluating
//    $f$ at every candidate and reading off which outputs really hit the
//    target; counting problems were done branch by branch AND by sweeping the
//    number line piece by piece.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution, and that mistake really does produce that choice. The traps
//    running through this section are: USED THE WRONG PIECE AT THE BOUNDARY,
//    USED THE WRONG PIECE, DROPPED THE CONSTANT, FLIPPED THE SIGN OF THE
//    CONSTANT, SQUARED A NEGATIVE AND KEPT THE MINUS, ADDED INSTEAD OF
//    MULTIPLYING, SUBTRACTED IN THE WRONG ORDER, ANSWERED AT THE BOUNDARY
//    INSTEAD OF THE INPUT, PUT THE BRANCHES BACKWARDS, BROKE AT THE WRONG
//    PLACE, NEGATED ONLY PART OF THE EXPRESSION, ADDED THE TWO PRICES,
//    AVERAGED THE TWO PRICES, TOOK THE DIFFERENCE OF THE TWO PRICES,
//    DOUBLE-COUNTED THE INCLUDED UNITS, CHARGED THE FLAT RATE EVERY TIME,
//    FORGOT THE FLAT FEE, and KEPT A ROOT ITS OWN BRANCH REJECTS.
//  - No two choices inside an item name the same number.

const s205 = [
  // p1 — evaluate away from the boundary, inside the lower branch.
  [
    {
      q: 'Let $f(x) = x + 6$ if $x < 5$, and $f(x) = 4x - 3$ if $x \\ge 5$. What is $f(2)$?',
      choices: ['$8$', '$5$', '$11$', '$6$'],
      answer: 0,
      solution:
        'Pick the piece first, then compute. Is $2 < 5$? Yes, so the first branch owns $x = 2$ and $f(2) = 2 + 6 = 8$. Check a second, independent way by sliding along the first branch from a value that is easy to see: $f(0) = 0 + 6 = 6$, and since the first branch adds $6$ to whatever comes in, every step right raises the output by $1$, so $f(1) = 7$ and $f(2) = 8$ ✓ — and every input along that walk stayed below $5$, so the walk never left the branch. (The choice $5$ is USING THE WRONG PIECE, $4(2) - 3$, which belongs to inputs of $5$ or more; the choice $11$ feeds the boundary number into the first branch, $5 + 6$, instead of the input we were handed; the choice $6$ DROPS THE INPUT and reports the constant $6$ alone.)',
    },
    {
      q: 'Let $g(x) = 3x + 4$ if $x < -2$, and $g(x) = x^2 + 1$ if $x \\ge -2$. What is $g(-5)$?',
      choices: ['$26$', '$-15$', '$-11$', '$-19$'],
      answer: 2,
      solution:
        'Which piece owns $-5$? Read the conditions: $-5 < -2$ is true, so the first branch takes it, and $g(-5) = 3(-5) + 4 = -15 + 4 = -11$. Check a second, independent way by rewriting the first branch as $3(x + 2) - 2$, which is the same rule regrouped: $3(-5 + 2) - 2 = 3(-3) - 2 = -9 - 2 = -11$ ✓ — different arithmetic, same output. (The choice $26$ is USING THE WRONG PIECE, $(-5)^2 + 1$, whose condition $-5 \\ge -2$ is false; the choice $-15$ DROPS THE CONSTANT and stops at $3(-5)$; the choice $-19$ FLIPS THE SIGN OF THE CONSTANT, computing $3(-5) - 4$.)',
    },
    {
      q: 'Let $h(x) = 10 - x$ if $x < 8$, and $h(x) = 2x$ if $x \\ge 8$. What is $h(5)$?',
      choices: ['$10$', '$-5$', '$15$', '$5$'],
      answer: 3,
      solution:
        'Test the input against the conditions before touching any arithmetic: $5 < 8$ is true, so the first branch owns $x = 5$ and $h(5) = 10 - 5 = 5$. Check a second, independent way by reading the first branch as "the distance from $10$", counting down: $h(7) = 3$, $h(6) = 4$, $h(5) = 5$ ✓ — the outputs climb by $1$ as the input drops by $1$, exactly as $10 - x$ should, and all three inputs sit below $8$. (The choice $10$ is USING THE WRONG PIECE, $2(5)$, whose condition $5 \\ge 8$ is false; the choice $-5$ SUBTRACTS IN THE WRONG ORDER, computing $5 - 10$; the choice $15$ adds where the rule subtracts, $10 + 5$.)',
    },
  ],
  // p2 — evaluate AT the boundary, where the second branch's ≥ claims it.
  [
    {
      q: 'For the same function ($f(x) = x + 6$ if $x < 5$, and $f(x) = 4x - 3$ if $x \\ge 5$), what is $f(5)$?',
      choices: ['$11$', '$17$', '$20$', '$23$'],
      answer: 1,
      solution:
        'The boundary! Read both conditions out loud at $x = 5$: "$5 < 5$" is false, and "$5 \\ge 5$" is true. The $\\ge$ sign hands the boundary to the second branch, so $f(5) = 4(5) - 3 = 20 - 3 = 17$. Check a second, independent way by creeping up on $5$ from the right, where there is no doubt about which piece is in charge: $f(7) = 25$ and $f(6) = 21$, and each step left drops the output by $4$, so the next value is $21 - 4 = 17$ ✓. (The choice $11$ is USING THE WRONG PIECE AT THE BOUNDARY, $5 + 6$ — that branch stops just short of $5$ and never reaches it; the choice $20$ DROPS THE CONSTANT, stopping at $4(5)$; the choice $23$ FLIPS THE SIGN OF THE CONSTANT, computing $4(5) + 3$.)',
    },
    {
      q: 'For the same function ($g(x) = 3x + 4$ if $x < -2$, and $g(x) = x^2 + 1$ if $x \\ge -2$), what is $g(-2)$?',
      choices: ['$-2$', '$4$', '$-3$', '$5$'],
      answer: 3,
      solution:
        'A boundary at a negative number is still just a boundary. Is $-2 < -2$? No — a number is never less than itself. Is $-2 \\ge -2$? Yes. So the second branch owns $x = -2$, and $g(-2) = (-2)^2 + 1 = 4 + 1 = 5$. Check a second, independent way by approaching from the right, where only the second branch lives: $g(0) = 1$, $g(-1) = 2$, $g(-2) = 5$ — squaring is what makes the outputs turn upward, and substituting $-2$ into $x^2 + 1$ directly gives $5$ ✓. (The choice $-2$ is USING THE WRONG PIECE AT THE BOUNDARY, $3(-2) + 4$, whose condition is strict and shuts the door on $-2$; the choice $4$ DROPS THE CONSTANT, reporting $(-2)^2$ alone; the choice $-3$ SQUARES A NEGATIVE AND KEEPS THE MINUS, reading $(-2)^2$ as $-4$ and then adding $1$.)',
    },
    {
      q: 'For the same function ($h(x) = 10 - x$ if $x < 8$, and $h(x) = 2x$ if $x \\ge 8$), what is $h(8)$?',
      choices: ['$2$', '$18$', '$16$', '$10$'],
      answer: 2,
      solution:
        'At the boundary, let the inequality signs decide. "$8 < 8$" is false, so the first branch does not own $8$; "$8 \\ge 8$" is true, so the second branch does: $h(8) = 2(8) = 16$. Check a second, independent way from the right-hand side, where the second branch is unquestionably in charge: $h(10) = 20$, $h(9) = 18$, and each step left drops the output by $2$, so $h(8) = 18 - 2 = 16$ ✓. (The choice $2$ is USING THE WRONG PIECE AT THE BOUNDARY, $10 - 8$; the choice $18$ adds where the rule doubles, $10 + 8$; the choice $10$ DROPS THE INPUT and reports the constant from the other branch.)',
    },
  ],
  // p3 — evaluate away from the boundary, inside the upper branch.
  [
    {
      q: 'Still with $f(x) = x + 6$ if $x < 5$, and $f(x) = 4x - 3$ if $x \\ge 5$: what is $f(8)$?',
      choices: ['$14$', '$32$', '$35$', '$29$'],
      answer: 3,
      solution:
        'Since $8 \\ge 5$, the second branch owns $x = 8$: $f(8) = 4(8) - 3 = 32 - 3 = 29$. Check a second, independent way by starting from the boundary value and stepping right, since the second branch climbs by $4$ per step: $f(5) = 17$, then $21$, then $25$, then $29$ at $x = 8$ ✓ — three steps for three units of input. (The choice $14$ is USING THE WRONG PIECE, $8 + 6$, whose condition $8 < 5$ is false; the choice $32$ DROPS THE CONSTANT, stopping at $4(8)$; the choice $35$ FLIPS THE SIGN OF THE CONSTANT, computing $4(8) + 3$.)',
    },
    {
      q: 'Still with $g(x) = 3x + 4$ if $x < -2$, and $g(x) = x^2 + 1$ if $x \\ge -2$: what is $g(3)$?',
      choices: ['$13$', '$10$', '$9$', '$7$'],
      answer: 1,
      solution:
        'Is $3 < -2$? No. Is $3 \\ge -2$? Yes, so the second branch owns $x = 3$ and $g(3) = 3^2 + 1 = 9 + 1 = 10$. Check a second, independent way with a difference of squares shortcut: $g(3) - g(2) = (9 + 1) - (4 + 1) = 5$, and $3^2 - 2^2 = 5$ ✓, so the two outputs really do sit five apart on the parabola branch — and $g(2) = 5$ makes $g(3) = 10$ ✓. (The choice $13$ is USING THE WRONG PIECE, $3(3) + 4$, whose condition $3 < -2$ is false; the choice $9$ DROPS THE CONSTANT, reporting $3^2$ alone; the choice $7$ doubles instead of squaring, $2(3) + 1$.)',
    },
    {
      q: 'Still with $h(x) = 10 - x$ if $x < 8$, and $h(x) = 2x$ if $x \\ge 8$: what is $h(11)$?',
      choices: ['$22$', '$-1$', '$21$', '$16$'],
      answer: 0,
      solution:
        'Since $11 \\ge 8$, the second branch owns $x = 11$: $h(11) = 2(11) = 22$. Check a second, independent way by halving back: if $h(11) = 22$, then dividing $22$ by $2$ must return the input $11$ ✓, and $11$ does satisfy $11 \\ge 8$, so the value was produced by the branch that really owns it. (The choice $-1$ is USING THE WRONG PIECE, $10 - 11$, whose condition $11 < 8$ is false; the choice $21$ ADDS INSTEAD OF MULTIPLYING, $10 + 11$; the choice $16$ is ANSWERING AT THE BOUNDARY INSTEAD OF THE INPUT, computing $h(8)$.)',
    },
  ],
  // p4 — read an absolute value as a piecewise rule: right break, right order.
  [
    {
      q: 'Which piecewise rule defines $|x - 5|$?',
      choices: [
        '$f(x) = x - 5$ if $x \\ge 0$, and $f(x) = 5 - x$ if $x < 0$',
        '$f(x) = 5 - x$ if $x \\ge 5$, and $f(x) = x - 5$ if $x < 5$',
        '$f(x) = x - 5$ if $x \\ge 5$, and $f(x) = 5 - x$ if $x < 5$',
        '$f(x) = x - 5$ if $x \\ge 5$, and $f(x) = x + 5$ if $x < 5$',
      ],
      answer: 2,
      solution:
        'Absolute value leaves a nonnegative quantity alone and flips a negative one. The quantity inside is $x - 5$, and it is nonnegative exactly when $x \\ge 5$ — so the break belongs at $5$, not at $0$. For $x \\ge 5$ the rule is $x - 5$; for $x < 5$ it is $-(x - 5) = 5 - x$ ✓. Check a second, independent way by testing one input on each side: at $x = 8$, $|8 - 5| = 3$ and the chosen rule gives $8 - 5 = 3$ ✓; at $x = 2$, $|2 - 5| = 3$ and the chosen rule gives $5 - 2 = 3$ ✓; and at the boundary $x = 5$ the $\\ge$ branch owns it, giving $0$, which matches $|0| = 0$ ✓. (The first choice BREAKS AT THE WRONG PLACE — at $x = 2$ it reports $2 - 5 = -3$, and an absolute value is never negative; the second choice PUTS THE BRANCHES BACKWARDS, reporting $5 - 8 = -3$ at $x = 8$; the last choice NEGATES ONLY PART OF THE EXPRESSION, flipping the sign of the $5$ but not of the $x$, so at $x = 2$ it reports $7$.)',
    },
    {
      q: 'Which piecewise rule defines $|x + 2|$?',
      choices: [
        '$f(x) = x + 2$ if $x \\ge -2$, and $f(x) = -x - 2$ if $x < -2$',
        '$f(x) = -x - 2$ if $x \\ge -2$, and $f(x) = x + 2$ if $x < -2$',
        '$f(x) = x + 2$ if $x \\ge 0$, and $f(x) = -x - 2$ if $x < 0$',
        '$f(x) = x + 2$ if $x \\ge -2$, and $f(x) = -x + 2$ if $x < -2$',
      ],
      answer: 0,
      solution:
        'The quantity inside is $x + 2$, and it is nonnegative exactly when $x \\ge -2$, so that is where the rule changes personality. For $x \\ge -2$ the answer is $x + 2$ itself; for $x < -2$ it is $-(x + 2) = -x - 2$ ✓. Check a second, independent way by testing both sides and the boundary: at $x = 3$, $|5| = 5$ and $3 + 2 = 5$ ✓; at $x = -8$, $|-6| = 6$ and $-(-8) - 2 = 8 - 2 = 6$ ✓; at $x = -2$ the $\\ge$ branch owns the boundary and gives $0$, matching $|0| = 0$ ✓. (The second choice PUTS THE BRANCHES BACKWARDS and reports $-5$ at $x = 3$; the third choice BREAKS AT THE WRONG PLACE, and at $x = -1$ it reports $-(-1) - 2 = -1$, a negative output from an absolute value; the last choice NEGATES ONLY PART OF THE EXPRESSION, giving $10$ at $x = -8$ instead of $6$.)',
    },
    {
      q: 'Which piecewise rule defines $|3x|$?',
      choices: [
        '$f(x) = 3x$ for every $x$',
        '$f(x) = 3x$ if $x \\ge 0$, and $f(x) = -3x$ if $x < 0$',
        '$f(x) = -3x$ if $x \\ge 0$, and $f(x) = 3x$ if $x < 0$',
        '$f(x) = 3x$ if $x \\ge 3$, and $f(x) = -3x$ if $x < 3$',
      ],
      answer: 1,
      solution:
        'The quantity inside is $3x$, and $3x \\ge 0$ exactly when $x \\ge 0$ — multiplying by a positive number does not move the break. So $|3x| = 3x$ for $x \\ge 0$ and $-3x$ for $x < 0$ ✓, with the boundary $x = 0$ going to the $\\ge$ branch, where both formulas happen to agree at $0$. Check a second, independent way by using $|3x| = 3|x|$: absolute value of a product is the product of absolute values, and $|x|$ is $x$ for $x \\ge 0$ and $-x$ for $x < 0$, so tripling gives $3x$ and $-3x$ on those same two pieces ✓. (The first choice forgets negatives entirely, reporting $-6$ at $x = -2$; the third choice PUTS THE BRANCHES BACKWARDS, reporting $-15$ at $x = 5$; the last choice BREAKS AT THE WRONG PLACE, borrowing the coefficient as the boundary — at $x = 2$ it reports $-6$, but $|6| = 6$.)',
    },
  ],
  // p5 — evaluate AT the boundary, where the first branch's ≤ claims it.
  [
    {
      q: 'Let $T(x) = x^2 - 1$ if $x \\le 5$, and $T(x) = 2x$ if $x > 5$. What is $T(5)$?',
      choices: ['$10$', '$24$', '$25$', '$26$'],
      answer: 1,
      solution:
        'This time the boundary belongs to the FIRST branch, because that is the one carrying the $\\le$: "$5 \\le 5$" is true, while "$5 > 5$" is false. So $T(5) = 5^2 - 1 = 25 - 1 = 24$. Check a second, independent way by factoring the first branch as $x^2 - 1 = (x - 1)(x + 1)$: at $x = 5$ that is $4 \\cdot 6 = 24$ ✓ — a different multiplication reaching the same value. (The choice $10$ is USING THE WRONG PIECE AT THE BOUNDARY, $2(5)$, whose condition $5 > 5$ is false; the choice $25$ DROPS THE CONSTANT, reporting $5^2$ alone; the choice $26$ FLIPS THE SIGN OF THE CONSTANT, computing $5^2 + 1$.)',
    },
    {
      q: 'Let $V(x) = x^2 + 2$ if $x \\le -2$, and $V(x) = x + 10$ if $x > -2$. What is $V(-2)$?',
      choices: ['$8$', '$-2$', '$4$', '$6$'],
      answer: 3,
      solution:
        'Read the two conditions at $x = -2$: "$-2 \\le -2$" is true, and "$-2 > -2$" is false. The first branch owns the boundary, so $V(-2) = (-2)^2 + 2 = 4 + 2 = 6$. Check a second, independent way by approaching from the left, where the first branch is the only one in play: $V(-4) = 18$, $V(-3) = 11$, and the squares $16, 9, 4$ each sit two below those outputs, so at $x = -2$ the output is $4 + 2 = 6$ ✓. (The choice $8$ is USING THE WRONG PIECE AT THE BOUNDARY, $-2 + 10$, whose condition is strict; the choice $-2$ SQUARES A NEGATIVE AND KEEPS THE MINUS, reading $(-2)^2$ as $-4$ before adding $2$; the choice $4$ DROPS THE CONSTANT, reporting $(-2)^2$ alone.)',
    },
    {
      q: 'Let $W(x) = 3x + 1$ if $x \\le -5$, and $W(x) = x^2$ if $x > -5$. What is $W(-5)$?',
      choices: ['$25$', '$-15$', '$-14$', '$-16$'],
      answer: 2,
      solution:
        'The $\\le$ sign is on the first branch, so the first branch owns $x = -5$: "$-5 \\le -5$" is true, and "$-5 > -5$" is false. That gives $W(-5) = 3(-5) + 1 = -15 + 1 = -14$. Check a second, independent way by rewriting the first branch as $3(x + 5) - 14$, which is the same line regrouped around the boundary: at $x = -5$ the bracket vanishes and the output is $-14$ ✓ — and this form shows the line arrives at the boundary from the left at exactly that height. (The choice $25$ is USING THE WRONG PIECE AT THE BOUNDARY, $(-5)^2$, whose condition $-5 > -5$ is false; the choice $-15$ DROPS THE CONSTANT, stopping at $3(-5)$; the choice $-16$ FLIPS THE SIGN OF THE CONSTANT, computing $3(-5) - 1$.)',
    },
  ],
  // p6 — a tiered price is a piecewise function, and the boundary age decides.
  [
    {
      q: 'Tessa’s swim club charges $\\$5$ a session for swimmers aged $12$ and under, and $\\$9$ a session for anyone over $12$. What does a swimmer who just turned $12$ pay?',
      choices: ['$\\$5$', '$\\$9$', '$\\$14$', '$\\$7$'],
      answer: 0,
      solution:
        'Turn the words into conditions and read them at $a = 12$. "Aged $12$ and under" is $a \\le 12$, which is TRUE at $12$; "over $12$" is $a > 12$, which is FALSE at $12$. The lower tier owns the boundary, so the price is $\\$5$ ✓. Check a second, independent way by asking who would be left out if we handed $12$ to the upper tier: nobody would be paying the $\\$5$ rate at exactly $12$, yet the club advertises "$12$ and under", which names $12$ out loud ✓ — and every age still lands in exactly one tier, since $a \\le 12$ and $a > 12$ cover the number line without overlapping. (The choice $\\$9$ is USING THE WRONG PIECE AT THE BOUNDARY, giving $12$ to a tier that starts strictly above it; the choice $\\$14$ ADDS THE TWO PRICES, as if the swimmer paid both tiers; the choice $\\$7$ AVERAGES THE TWO PRICES, as if a boundary age split the difference — piecewise functions never compromise, they pick a branch.)',
    },
    {
      q: 'Wyatt’s climbing gym charges $\\$6$ a visit for climbers under $8$ years old, and $\\$11$ a visit for climbers $8$ or older. What does an $8$-year-old pay?',
      choices: ['$\\$6$', '$\\$17$', '$\\$11$', '$\\$5$'],
      answer: 2,
      solution:
        'Write the tiers as conditions: "under $8$" is $a < 8$, and "$8$ or older" is $a \\ge 8$. At $a = 8$ the first is false and the second is true, so the upper tier owns the boundary and the price is $\\$11$ ✓. Check a second, independent way by walking a birthday: a climber aged $7$ pays $\\$6$, and the moment the age reaches $8$ the words "$8$ or older" start applying, so the price steps up to $\\$11$ right at the birthday ✓ — a jump exactly at the boundary is what a piecewise price looks like. (The choice $\\$6$ is USING THE WRONG PIECE AT THE BOUNDARY, keeping the $8$-year-old in a tier that stops strictly below $8$; the choice $\\$17$ ADDS THE TWO PRICES; the choice $\\$5$ TAKES THE DIFFERENCE OF THE TWO PRICES, $11 - 6$, which is the size of the jump, not a price anyone pays.)',
    },
    {
      q: 'Yara’s mail service charges $\\$6$ to ship a parcel weighing $2$ kg or less, and $\\$14$ to ship a parcel weighing more than $2$ kg. What does it cost to ship a parcel weighing exactly $2$ kg?',
      choices: ['$\\$14$', '$\\$20$', '$\\$10$', '$\\$6$'],
      answer: 3,
      solution:
        'The conditions are $w \\le 2$ for the cheap tier and $w > 2$ for the dear one. At $w = 2$: "$2 \\le 2$" is TRUE, "$2 > 2$" is FALSE. The $\\le$ owns the boundary, so an exactly-$2$-kg parcel ships for $\\$6$ ✓. Check a second, independent way by testing weights on either side and watching where the price changes: $1.9$ kg costs $\\$6$, $2.1$ kg costs $\\$14$, and the phrase "$2$ kg or less" pulls the boundary itself down into the $\\$6$ tier ✓ — every weight is priced exactly once, with no gap and no overlap. (The choice $\\$14$ is USING THE WRONG PIECE AT THE BOUNDARY, applying a rate reserved for weights strictly above $2$ kg; the choice $\\$20$ ADDS THE TWO PRICES; the choice $\\$10$ AVERAGES THE TWO PRICES.)',
    },
  ],
  // p7 — solve branch by branch, then check each candidate against its own condition.
  [
    {
      q: 'Let $f(x) = 3x$ if $x < 5$, and $f(x) = x + 8$ if $x \\ge 5$. Solve $f(x) = 15$.',
      choices: ['$x = 5$ and $x = 7$', '$x = 7$ only', '$x = 5$ only', 'No solution'],
      answer: 1,
      solution:
        'Work one branch at a time and audit the condition afterwards. First branch: $3x = 15$ gives $x = 5$ — but its condition is $x < 5$, and $5 < 5$ is false, so this candidate is standing outside its own territory. Discard ✗. Second branch: $x + 8 = 15$ gives $x = 7$, and $7 \\ge 5$ holds ✓. So $x = 7$ is the only solution. Check a second, independent way by evaluating $f$ at both candidates: $f(5)$ uses the branch that owns $5$, namely the second, giving $5 + 8 = 13 \\ne 15$ ✗, while $f(7) = 7 + 8 = 15$ ✓ — the function itself confirms the verdict. (The first choice keeps a candidate its own branch rejects; the third choice USES THE WRONG PIECE AT THE BOUNDARY, letting $x = 5$ be evaluated by the $x < 5$ rule; "No solution" throws away the legitimate $x = 7$.)',
    },
    {
      q: 'Let $g(x) = x - 4$ if $x < -2$, and $g(x) = 2x$ if $x \\ge -2$. Solve $g(x) = -10$.',
      choices: ['$x = -5$ only', '$x = -6$ and $x = -5$', 'No solution', '$x = -6$ only'],
      answer: 3,
      solution:
        'Solve inside each branch, then make each candidate prove it lives where that branch rules. First branch: $x - 4 = -10$ gives $x = -6$, and its condition is $x < -2$; since $-6 < -2$ is true, this one is legal ✓. Second branch: $2x = -10$ gives $x = -5$, but its condition is $x \\ge -2$, and $-5 \\ge -2$ is false, so it is thrown out ✗ — the second branch simply never reaches $-10$ on its own territory. Only $x = -6$ survives. Check a second, independent way by evaluating $g$ directly at both candidates, using whichever branch really owns them: $g(-6) = -6 - 4 = -10$ ✓, and $g(-5) = -5 - 4 = -9 \\ne -10$ ✗, because $-5$ is owned by the FIRST branch, not the second one that produced it. (The first choice KEEPS A ROOT ITS OWN BRANCH REJECTS; the second choice keeps both candidates without testing either condition; the third choice throws away a candidate that passes its test ✓.)',
    },
    {
      q: 'Let $h(x) = x + 9$ if $x < 2$, and $h(x) = 4x$ if $x \\ge 2$. Solve $h(x) = 8$.',
      choices: ['$x = -1$ and $x = 2$', '$x = -1$ only', '$x = 2$ only', 'No solution'],
      answer: 0,
      solution:
        'First branch: $x + 9 = 8$ gives $x = -1$, and its condition $x < 2$ holds ✓. Second branch: $4x = 8$ gives $x = 2$, and its condition $x \\ge 2$ holds too, since the $\\ge$ hands the boundary to this branch ✓. Both candidates survive, so there are two solutions. Check a second, independent way by evaluating $h$ directly: $h(-1) = -1 + 9 = 8$ ✓ and $h(2) = 4(2) = 8$ ✓ — the function agrees twice. (The second choice discards $x = 2$ by USING THE WRONG PIECE AT THE BOUNDARY, testing $2$ against $x < 2$ instead of against the branch that owns it; the third choice discards the perfectly legal $x = -1$; "No solution" discards both. Checking a candidate is not the same as assuming it fails — here both pass.)',
    },
  ],
  // p8 — a flat rate plus a per-unit rate: the included units are already paid for.
  [
    {
      q: 'Tobias rents a kayak for $\\$7$ for the first hour and $\\$4$ for each additional hour. What does a $5$-hour rental cost?',
      choices: ['$\\$20$', '$\\$27$', '$\\$23$', '$\\$35$'],
      answer: 2,
      solution:
        'The first hour is already bought and paid for at $\\$7$, so only $5 - 1 = 4$ hours are charged at the extra rate: $4 \\times \\$4 = \\$16$, and the total is $\\$7 + \\$16 = \\$23$ ✓. Check a second, independent way by building the bill hour by hour: $\\$7$, then $\\$11$, $\\$15$, $\\$19$, $\\$23$ — four jumps of $\\$4$ after the opening hour, landing on $\\$23$ at hour $5$ ✓. (The choice $\\$20$ CHARGES THE EXTRA RATE EVERY HOUR, $5 \\times \\$4$, forgetting that the first hour costs more; the choice $\\$27$ DOUBLE-COUNTS THE INCLUDED HOUR, $\\$7 + 5 \\times \\$4$; the choice $\\$35$ CHARGES THE FLAT RATE EVERY TIME, $5 \\times \\$7$.)',
    },
    {
      q: 'A parking garage charges $\\$6$ for the first $2$ hours and $\\$3$ for each hour after that. What does Vera pay for a $6$-hour stay?',
      choices: ['$\\$24$', '$\\$18$', '$\\$21$', '$\\$36$'],
      answer: 1,
      solution:
        'Two hours are covered by the opening $\\$6$, so the metered hours number $6 - 2 = 4$, costing $4 \\times \\$3 = \\$12$. The total is $\\$6 + \\$12 = \\$18$ ✓. Check a second, independent way by writing the rule as a formula and substituting: for $t \\ge 2$ the cost is $C(t) = 6 + 3(t - 2)$, and $C(6) = 6 + 3(4) = 18$ ✓ — the $t - 2$ is exactly the "already paid for" bookkeeping. (The choice $\\$24$ DOUBLE-COUNTS THE INCLUDED HOURS, $\\$6 + 6 \\times \\$3$; the choice $\\$21$ subtracts only one of the two included hours, $\\$6 + 5 \\times \\$3$; the choice $\\$36$ CHARGES THE FLAT RATE EVERY TIME, $6 \\times \\$6$.)',
    },
    {
      q: 'Zane’s phone plan costs $\\$12$ a month, which includes the first $100$ text messages, and every text after that costs $\\$0.20$. What does a month with $180$ texts cost?',
      choices: ['$\\$16$', '$\\$48$', '$\\$32$', '$\\$28$'],
      answer: 3,
      solution:
        'Only the texts beyond the included $100$ are billed: $180 - 100 = 80$ of them, at $\\$0.20$ each, is $80 \\times \\$0.20 = \\$16$. Adding the monthly fee gives $\\$12 + \\$16 = \\$28$ ✓. Check a second, independent way by counting in blocks of ten: every $10$ extra texts cost $\\$2$, and $80$ extra texts is eight such blocks, so $8 \\times \\$2 = \\$16$ on top of the $\\$12$ fee ✓ — same total, no decimals multiplied. (The choice $\\$16$ FORGOT THE FLAT FEE and reports the overage alone; the choice $\\$48$ DOUBLE-COUNTS THE INCLUDED TEXTS, charging $\\$0.20$ for all $180$; the choice $\\$32$ uses the included count $100$ as if it were the overage, $\\$12 + 100 \\times \\$0.20$.)',
    },
  ],
  // p9 — a squaring branch offers two roots; the condition keeps only what it owns.
  [
    {
      q: 'Let $f(x) = x + 10$ if $x < 0$, and $f(x) = x^2$ if $x \\ge 0$. Solve $f(x) = 64$.',
      choices: ['$x = 8$ or $x = -8$', '$x = 8$ only', '$x = -8$ only', '$x = 8$ or $x = 54$'],
      answer: 1,
      solution:
        'First branch: $x + 10 = 64$ gives $x = 54$, but the condition is $x < 0$, and $54$ is nowhere near negative. Discard ✗. Second branch: $x^2 = 64$ gives $x = 8$ or $x = -8$, and the condition $x \\ge 0$ keeps $8$ ✓ and rejects $-8$ ✗. So $x = 8$ is the only solution. Check a second, independent way by evaluating $f$ at all three candidates, each judged by the branch that owns it: $f(8) = 64$ ✓, $f(-8) = -8 + 10 = 2 \\ne 64$ ✗ (the negative side is a line, not a parabola), and $f(54) = 54^2 = 2916 \\ne 64$ ✗. (The first choice KEEPS A ROOT ITS OWN BRANCH REJECTS; the third choice keeps only that rejected root; the last choice keeps $54$, which failed its condition, alongside the good root.)',
    },
    {
      q: 'Let $g(x) = x^2$ if $x \\le -2$, and $g(x) = x + 5$ if $x > -2$. Solve $g(x) = 25$.',
      choices: ['$x = -5$ or $x = 20$', '$x = -5$ only', '$x = 5$ or $x = 20$', '$x = 20$ only'],
      answer: 0,
      solution:
        'First branch: $x^2 = 25$ gives $x = 5$ or $x = -5$, and the condition $x \\le -2$ keeps $-5$ ✓ while rejecting $5$ ✗ — the squaring rule only lives to the left of $-2$. Second branch: $x + 5 = 25$ gives $x = 20$, and $20 > -2$ holds ✓. Two solutions: $x = -5$ and $x = 20$. Check a second, independent way by evaluating $g$ at all three candidates: $g(-5) = 25$ ✓, $g(20) = 25$ ✓, and $g(5) = 5 + 5 = 10 \\ne 25$ ✗, since $5$ is owned by the line, not the parabola. (The second choice drops the legitimate $x = 20$; the third choice KEEPS A ROOT ITS OWN BRANCH REJECTS, trusting $x = 5$ because $5^2 = 25$ without checking whose territory $5$ is in; the last choice drops the legitimate $x = -5$.)',
    },
    {
      q: 'Let $h(x) = x^2$ if $x \\le -8$, and $h(x) = 10 - x$ if $x > -8$. Solve $h(x) = 16$.',
      choices: ['$x = 4$ or $x = -4$', '$x = -4$ only', '$x = -6$ only', 'No solution'],
      answer: 2,
      solution:
        'First branch: $x^2 = 16$ gives $x = 4$ or $x = -4$, and the condition $x \\le -8$ rejects BOTH — neither $4$ nor $-4$ is at or below $-8$ ✗✗. The squaring branch contributes nothing. Second branch: $10 - x = 16$ gives $x = -6$, and $-6 > -8$ holds ✓. So $x = -6$ is the only solution. Check a second, independent way by evaluating $h$ at all three candidates with the branch that owns each: $h(-6) = 10 - (-6) = 16$ ✓, $h(4) = 10 - 4 = 6 \\ne 16$ ✗, and $h(-4) = 10 - (-4) = 14 \\ne 16$ ✗ — the two square roots are both governed by the subtracting rule, and neither hits the target. (The first choice KEEPS ROOTS THEIR OWN BRANCH REJECTS; the second choice keeps one of them; "No solution" stops after the failed first branch and forgets to work the second.)',
    },
  ],
  // p10 — count the solutions: every branch, every root, every condition.
  [
    {
      q: 'Let $f(x) = x^2$ if $x < 2$, and $f(x) = 6 - x$ if $x \\ge 2$. How many solutions does $f(x) = 3$ have?',
      choices: ['$3$', '$2$', '$1$', '$0$'],
      answer: 0,
      solution:
        'First branch: $x^2 = 3$ gives $x = \\sqrt{3}$ and $x = -\\sqrt{3}$. Since $\\sqrt{3} \\approx 1.73$, BOTH satisfy $x < 2$ ✓✓ — this is the case where the condition throws nothing away. Second branch: $6 - x = 3$ gives $x = 3$, and $3 \\ge 2$ holds ✓. Total: three solutions. Check a second, independent way by sweeping the number line piece by piece: on $x < 2$ the parabola falls from high values to $0$ at the origin and climbs back to just under $4$, crossing the height $3$ once on each side of the origin (two crossings), and on $x \\ge 2$ the line drops steadily from $4$ downward, passing $3$ exactly once ✓ — two plus one is three. (The choice $2$ misses one of the two square roots, usually the negative one; the choice $1$ counts only the linear branch; the choice $0$ would need every candidate to fail, and three of them pass.)',
    },
    {
      q: 'Let $g(x) = x^2$ if $x \\le -2$, and $g(x) = x + 1$ if $x > -2$. How many solutions does $g(x) = 2$ have?',
      choices: ['$0$', '$2$', '$1$', '$3$'],
      answer: 2,
      solution:
        'First branch: $x^2 = 2$ gives $x = \\sqrt{2}$ and $x = -\\sqrt{2}$, both about $1.41$ in size. The condition is $x \\le -2$, and $-\\sqrt{2} \\approx -1.41$ is GREATER than $-2$, so it fails ✗; $\\sqrt{2}$ is positive and fails too ✗. The squaring branch contributes nothing. Second branch: $x + 1 = 2$ gives $x = 1$, and $1 > -2$ holds ✓. Total: one solution. Check a second, independent way by sweeping: on $x \\le -2$ the parabola takes only values of $4$ and above (its smallest input in size is $-2$, giving $4$), so it can never output $2$ ✓, while on $x > -2$ the line sweeps upward through every value above $-1$, hitting $2$ exactly once ✓. (The choice $0$ forgets the linear branch; the choice $2$ KEEPS A ROOT ITS OWN BRANCH REJECTS, usually $-\\sqrt{2}$, on the strength of its minus sign alone; the choice $3$ keeps both rejected roots.)',
    },
    {
      q: 'Let $f(x) = x^2 + 1$ if $x < -2$, and $f(x) = x + 8$ if $x \\ge -2$. How many solutions does $f(x) = 5$ have?',
      choices: ['$1$', '$2$', '$3$', '$0$'],
      answer: 3,
      solution:
        'First branch: $x^2 + 1 = 5$ gives $x^2 = 4$, so $x = 2$ or $x = -2$. The condition is the STRICT $x < -2$: the candidate $2$ fails ✗, and $-2$ fails too, because $-2 < -2$ is false — the boundary belongs to the other branch ✗. Second branch: $x + 8 = 5$ gives $x = -3$, and the condition $x \\ge -2$ is false for $-3$ ✗. Every candidate is rejected, so there are no solutions. Check a second, independent way by asking what values each piece can even produce: on $x < -2$ we have $x^2 > 4$, so $x^2 + 1 > 5$ — strictly above the target, never equal ✓; on $x \\ge -2$ we have $x + 8 \\ge 6$, also strictly above $5$ ✓. The output $5$ is in neither range. (The choice $1$ USES THE WRONG PIECE AT THE BOUNDARY, letting $x = -2$ into the strict branch — but $f(-2) = -2 + 8 = 6$, not $5$; the choice $2$ keeps $x = -2$ and $x = -3$ as well; the choice $3$ keeps all three rejected candidates.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  sections: {
    '20.5': s205,
  },
}
