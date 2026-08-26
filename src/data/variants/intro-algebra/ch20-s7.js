// Introduction to Algebra chapter 20 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so the
//    whole teaching load sits in the solution. There are no `choices` keys in
//    this file, and no `answer` is a bare number.
//  - EVERY key was worked out by hand and then confirmed a SECOND, independent
//    way, and the second route is written into the solution. The standard
//    confirmations here: a domain is confirmed by testing one input inside the
//    claimed set and one just outside it; an absolute-value equation is
//    confirmed by squaring both sides and factoring the difference of squares,
//    which never splits into cases at all; a radical equation is confirmed by
//    substituting into the ORIGINAL, since squaring is what invents imposters;
//    a rational value is confirmed by rewriting the fraction as a whole number
//    plus a remainder over the denominator; a floor-plus-ceiling sum is
//    confirmed by the fact that a non-integer has consecutive integers on
//    either side, so the sum is $2\lfloor y \rfloor + 1$; an integer count is
//    confirmed by testing both endpoints and both outsiders.
//  - A variation changes the numbers AND, where it makes sense, the framing:
//    one bare computation, one short word problem, one that flips the sign or
//    the direction so the same skill has to be steered somewhere new.
//  - Nine traps run through the file. THE STRICT ENDPOINT: writing $x > c$ for
//    a domain when $\sqrt{0}$ is perfectly legal and the endpoint belongs in.
//    THE UNDIVIDED CONSTANT: reading $2x \ge 21$ as $x \ge 21$, moving the
//    coefficient without dividing the other side too. THE FORGOTTEN NEGATIVE
//    CASE: reporting only the right-hand solution of an absolute-value
//    equation. THE CHOPPED DECIMAL: calling $\lfloor -7.3 \rfloor$ equal to
//    $-7$, which is ABOVE $-7.3$ and so cannot be a floor. THE WRONG BRANCH:
//    handing a boundary input to the piece whose inequality it fails. THE
//    UNSQUARED SIDE: undoing a radical by subtracting instead of squaring.
//    THE UNCHECKED CANDIDATE: keeping a root of the squared equation that the
//    original rejects. THE OFF-BY-ONE COUNT: including the endpoint that a
//    strict inequality throws out. THE CANCELLED FACTOR THAT STILL BANS ITS
//    VALUE: treating a hole as though simplifying had healed it.
//  - Nothing here is settled by how an answer looks. Every claim is settled by
//    a second computation that has to agree.

const worksheet = [
  // w1 — the domain of a square root. One bare radicand, one that runs
  //      downhill so the answer is an upper bound, and one whose constant is
  //      negative so the boundary lands left of zero.
  [
    {
      q: 'Find the domain of $f(x) = \\sqrt{2x - 21}$.',
      answer: '$x \\ge \\frac{21}{2}$',
      solution:
        'A square root accepts everything from $0$ upward and nothing below, so the whole job is to keep the radicand nonnegative: $2x - 21 \\ge 0$. Add $21$ to both sides for $2x \\ge 21$, then divide BOTH sides by $2$: $x \\ge \\frac{21}{2}$. Second check by testing the claim instead of re-deriving it — pick one input inside and one outside. At $x = 11$ the radicand is $22 - 21 = 1$ and $f(11) = 1$ ✓; at $x = \\frac{21}{2}$ it is exactly $0$ and $f\\left(\\frac{21}{2}\\right) = 0$ ✓; at $x = 10$ it is $20 - 21 = -1$, and no real number squares to $-1$ ✗. The boundary works and the point below it fails, exactly as the answer claims. Two traps. THE STRICT ENDPOINT writes $x > \\frac{21}{2}$ ✗ — but $\\sqrt{0} = 0$ is a perfectly good output, so the endpoint belongs INSIDE the domain. THE UNDIVIDED CONSTANT writes $x \\ge 21$ ✗, moving the $21$ across and forgetting that the $2$ still has to be divided out of it.',
    },
    {
      q: 'Priya’s calculator refuses to evaluate $\\sqrt{98 - 7t}$ for some inputs. For which values of $t$ does it return an answer?',
      answer: '$t \\le 14$',
      solution:
        'The calculator balks exactly when the radicand goes negative, so it answers when $98 - 7t \\ge 0$. Add $7t$ to both sides: $98 \\ge 7t$, so $14 \\ge t$, that is, $t \\le 14$. Second check by testing inputs rather than trusting the algebra. At $t = 0$ the radicand is $98$, comfortably positive ✓; at $t = 14$ it is $98 - 98 = 0$, and the calculator happily returns $0$ ✓; at $t = 15$ it is $98 - 105 = -7$, and the calculator refuses ✗. Everything at or below $14$ works and everything above fails. Two traps. THE FLIPPED INEQUALITY answers $t \\ge 14$ ✗ — here the variable is SUBTRACTED, so larger $t$ shrinks the radicand, and the accepted inputs run downward, not upward. Test $t = 20$ against that claim and the radicand is $-42$, which settles it. THE STRICT ENDPOINT drops $t = 14$ ✗, though it is the one input that makes the radical exactly $0$.',
    },
    {
      q: 'For which values of $x$ is $\\sqrt{4x + 26}$ a real number?',
      answer: '$x \\ge -\\frac{13}{2}$',
      solution:
        'Keep the radicand nonnegative: $4x + 26 \\ge 0$, so $4x \\ge -26$ and $x \\ge -\\frac{26}{4} = -\\frac{13}{2}$. Second check by testing the boundary and its neighbours. At $x = -\\frac{13}{2}$ the radicand is $4 \\cdot \\left(-\\frac{13}{2}\\right) + 26 = -26 + 26 = 0$ ✓; at $x = 0$ it is $26$, positive ✓; at $x = -7$ it is $-28 + 26 = -2$, negative ✗. The boundary sits exactly where the radicand changes sign, which is what a domain endpoint is. Two traps. THE UNDIVIDED CONSTANT answers $x \\ge -26$ ✗ — test it at $x = -20$: the radicand is $-80 + 26 = -54$, so that set is far too generous. THE VANISHING MINUS answers $x \\ge \\frac{13}{2}$ ✗, dropping the sign while dividing; a POSITIVE constant inside the radical means the radical survives well to the left of zero, so the boundary has to be negative.',
    },
  ],

  // w2 — solve a one-step absolute-value equation. Two solutions every time:
  //      the number on the right is positive in all three, so neither branch
  //      can be quietly dropped.
  [
    {
      q: 'Solve $|x - 7| = 26$.',
      answer: '$x = 33$ or $x = -19$',
      solution:
        'Read the equation as distance: $|x - 7|$ measures how far $x$ sits from $7$, so we want every number exactly $26$ steps from $7$. Walking right gives $7 + 26 = 33$; walking left gives $7 - 26 = -19$. Second check by the case split, which never mentions distance at all: either $x - 7 = 26$, giving $x = 33$, or $x - 7 = -26$, giving $x = -19$ — the same pair from a different idea. Substituting closes it: $|33 - 7| = |26| = 26$ ✓ and $|-19 - 7| = |-26| = 26$ ✓. THE FORGOTTEN NEGATIVE CASE is the trap: stopping at $x = 33$ ✗. Every positive distance is reached from two sides, and the left-hand traveller is just as real as the right-hand one. A second trap is answering $x = 26 - 7 = 19$ ✗, which subtracts the numbers instead of stepping $26$ away from $7$ — test it and $|19 - 7| = 12$, not $26$.',
    },
    {
      q: 'A number $x$ sits exactly $35$ units from $-13$ on the number line. Write an absolute-value equation for $x$ and find both possible values.',
      answer: '$x = 22$ or $x = -48$',
      solution:
        'Distance between $x$ and $a$ is $|x - a|$, and here $a = -13$, so the equation is $|x - (-13)| = 35$, that is, $|x + 13| = 35$. Step $35$ each way from $-13$: right gives $-13 + 35 = 22$, left gives $-13 - 35 = -48$. Second check by the case split: $x + 13 = 35$ gives $x = 22$, and $x + 13 = -35$ gives $x = -48$ — same pair, no number line required. Substituting confirms both: $|22 + 13| = 35$ ✓ and $|-48 + 13| = |-35| = 35$ ✓. Two traps. THE SIGN INSIDE writes $|x - 13| = 35$ ✗ — that measures distance from $+13$ and lands on $48$ and $-22$, a completely different pair; distance from a NEGATIVE point turns into a plus sign inside the bars. THE FORGOTTEN NEGATIVE CASE reports only $22$ ✗, though the point $48$ units to the left is just as far from $-13$.',
    },
    {
      q: 'Solve $|2x - 7| = 39$.',
      answer: '$x = 23$ or $x = -16$',
      solution:
        'Split into the two cases before touching the coefficient. Case 1: $2x - 7 = 39$, so $2x = 46$ and $x = 23$. Case 2: $2x - 7 = -39$, so $2x = -32$ and $x = -16$. Second check by reading it as distance on the inside quantity: $2x - 7$ must be a number $39$ from zero, so $2x - 7 = \\pm 39$, meaning $2x$ is either $46$ or $-32$ — the same two values arriving without any case bookkeeping. Substituting settles it: $|46 - 7| = 39$ ✓ and $|-32 - 7| = |-39| = 39$ ✓. Two traps. THE HALVED DISTANCE answers that $x$ is $39$ from $\\frac{7}{2}$ ✗, forgetting that the $2$ multiplying $x$ squeezes the distance in half; the two answers here sit $\\frac{39}{2}$ from $\\frac{7}{2}$, not $39$. THE FORGOTTEN NEGATIVE CASE stops at $x = 23$ ✗ and misses the whole left-hand branch.',
    },
  ],

  // w3 — floor plus ceiling, always with at least one negative argument, since
  //      that is where the rounding habit does its damage.
  [
    {
      q: 'Compute $\\lfloor -7.3 \\rfloor + \\lceil -7.3 \\rceil$.',
      answer: '$-15$',
      solution:
        'Take the two functions one at a time, and picture the number line rather than the decimal point. Floor goes DOWN, which for a negative number means further left: the greatest integer at or below $-7.3$ is $-8$, so $\\lfloor -7.3 \\rfloor = -8$. Ceiling goes UP, toward zero: the smallest integer at or above $-7.3$ is $-7$, so $\\lceil -7.3 \\rceil = -7$. Sum: $-8 + (-7) = -15$. Second check by a structural fact that avoids the number line entirely: for any NON-integer $y$, the ceiling is exactly one more than the floor, so the sum is $2\\lfloor y \\rfloor + 1 = 2(-8) + 1 = -15$ ✓ — an odd number, as every such sum must be. THE CHOPPED DECIMAL is the trap: answering $-7 + (-7) = -14$ ✗ by lopping off the decimal and calling that the floor. Test it: $-7$ is GREATER than $-7.3$, so it cannot be an integer at or below it. Chopping is not flooring once the number goes negative.',
    },
    {
      q: 'A weather station logged an overnight low of $-12.6$ degrees. Compute $\\lfloor -12.6 \\rfloor + \\lceil -12.6 \\rceil$ for that reading.',
      answer: '$-25$',
      solution:
        'Handle each function separately. The floor is the coldest whole degree at or below the reading: $-13$, since $-13 \\le -12.6$ and $-12$ is warmer than the reading. The ceiling is the smallest whole degree at or above it: $-12$. Sum: $-13 + (-12) = -25$. Second check with the consecutive-integer fact, which needs no thermometer: $-12.6$ is not an integer, so its floor and ceiling are neighbours and the sum is $2\\lfloor -12.6 \\rfloor + 1 = 2(-13) + 1 = -25$ ✓. Two traps. THE CHOPPED DECIMAL calls the floor $-12$ ✗ and gets $-24$; but $-12 > -12.6$, so $-12$ sits above the reading and is the ceiling, not the floor. THE ROUNDING HABIT rounds $-12.6$ to $-13$ for BOTH functions ✗, giving $-26$ — ordinary rounding asks which integer is nearer, while floor and ceiling ask which side, and the two questions have different answers.',
    },
    {
      q: 'Compute $\\lfloor -13.4 \\rfloor + \\lceil -13.4 \\rceil$.',
      answer: '$-27$',
      solution:
        'Both brackets hold the same number, so the work is deciding which side of $-13.4$ each function lands on. Floor moves LEFT: the greatest integer at or below $-13.4$ is $-14$, since $-13$ sits above the number. Ceiling moves RIGHT: the smallest integer at or above $-13.4$ is $-13$. Sum: $-14 + (-13) = -27$. Second check with the consecutive-integer fact, which skips the number line: $-13.4$ is not an integer, so its ceiling is exactly one more than its floor and the total is $2\\lfloor -13.4 \\rfloor + 1 = 2(-14) + 1 = -27$ ✓ — odd, as every matched-pair sum on a non-integer must be. Two traps. THE CHOPPED DECIMAL treats $-13$ as the floor ✗ and lands on $-26$; but $-13 > -13.4$, so $-13$ is the ceiling and cannot be the floor as well. THE ROUNDING HABIT rounds $-13.4$ to $-13$ for BOTH functions ✗, also giving $-26$ — rounding asks which integer is NEARER, while floor and ceiling ask which SIDE, and on a non-integer those two questions never both point the same way.',
    },
  ],

  // w4 — evaluate a rational function. Every key is confirmed by rewriting the
  //      fraction as a whole number plus a remainder over the denominator, or
  //      by factoring, so no answer rests on one substitution.
  [
    {
      q: 'If $f(x) = \\frac{x + 70}{x - 7}$, find $f(14)$.',
      answer: '$12$',
      solution:
        'Substitute $14$ into the top and the bottom separately, then divide once at the end: $f(14) = \\frac{14 + 70}{14 - 7} = \\frac{84}{7} = 12$. Second check by rewriting the rule so the substitution is a different computation: $\\frac{x + 70}{x - 7} = \\frac{(x - 7) + 77}{x - 7} = 1 + \\frac{77}{x - 7}$, and at $x = 14$ that is $1 + \\frac{77}{7} = 1 + 11 = 12$ ✓. Same value, and the arithmetic never formed $84$ at all. Two traps. THE SPLIT FRACTION cancels the $x$ terms to claim $\\frac{70}{-7} = -10$ ✗ — a sum in the numerator cannot be cancelled term by term against the denominator, only a FACTOR can. THE SUBTRACTED DENOMINATOR computes $84 - 7 = 77$ ✗; the bar in a fraction means divide, and $x = 7$ is barred from the domain precisely because dividing by $0$ is the operation being performed.',
    },
    {
      q: 'A function machine holds the rule $g(t) = \\frac{t + 26}{t - 7}$. Marisol feeds it $t = 13$. What comes out?',
      answer: '$\\frac{13}{2}$',
      solution:
        'Feed $13$ into both levels of the fraction: $g(13) = \\frac{13 + 26}{13 - 7} = \\frac{39}{6}$. Reduce by the common factor $3$: $\\frac{39}{6} = \\frac{13}{2}$. Second check by rewriting the rule before substituting: $\\frac{t + 26}{t - 7} = \\frac{(t - 7) + 33}{t - 7} = 1 + \\frac{33}{t - 7}$, and at $t = 13$ that is $1 + \\frac{33}{6} = 1 + \\frac{11}{2} = \\frac{13}{2}$ ✓ — the same output built from completely different pieces. Two traps. THE UNREDUCED ANSWER stops at $\\frac{39}{6}$; the value is right, but a fraction is not finished while its parts share a factor. THE FLIPPED FRACTION reports $\\frac{6}{39} = \\frac{2}{13}$ ✗, dividing the bottom by the top — a quick size check kills it, since $39$ is more than $6$ and the output has to be bigger than $1$, not smaller.',
    },
    {
      q: 'Let $k(x) = \\frac{3x + 21}{x + 13}$. Find $k(-6)$.',
      answer: '$\\frac{3}{7}$',
      solution:
        'A negative input means every sign has to be carried carefully. Numerator: $3(-6) + 21 = -18 + 21 = 3$. Denominator: $-6 + 13 = 7$. So $k(-6) = \\frac{3}{7}$. Second check by factoring the numerator first, which reorganises the whole computation: $\\frac{3x + 21}{x + 13} = \\frac{3(x + 7)}{x + 13}$, and at $x = -6$ that is $\\frac{3(1)}{7} = \\frac{3}{7}$ ✓. Two traps. THE LOST MINUS computes $3 \\cdot 6 + 21 = 39$ for the numerator ✗, multiplying the coefficient by $6$ instead of by $-6$; the input is negative and the $3$ has to travel through the sign. THE CANCELLED CONSTANT crosses out the $3$ against the $21$ to write $\\frac{x + 7}{x + 13}$ ✗ — dividing only part of the numerator by $3$ changes the value, since the $3$ multiplies the entire bracket.',
    },
  ],

  // w5 — a piecewise function at two inputs, one of them the boundary. The
  //      three variations put the boundary on different sides: $\ge$ in the
  //      first two, $\le$ in the third, so the boundary changes owners.
  [
    {
      q: 'Let $f(x) = 5x - 1$ if $x < 7$, and $f(x) = x^2$ if $x \\ge 7$. Find $f(7)$ and $f(3)$.',
      answer: '$f(7) = 49$ and $f(3) = 14$',
      solution:
        'Choose the branch before doing any arithmetic. For $f(7)$: is $7 < 7$? No. Is $7 \\ge 7$? Yes — so the second branch owns the boundary and $f(7) = 7^2 = 49$. For $f(3)$: since $3 < 7$, the first branch applies and $f(3) = 5(3) - 1 = 14$. Second check by testing the conditions instead of reading them, walking an input up to the boundary: at $x = 6.9$ the first branch gives $33.5$, and at $x = 7$ the rule switches and jumps to $49$ ✓ — a jump at the boundary is exactly what a piecewise rule with different formulas produces, and the value $49$ is the one the $\\ge$ branch hands over. Recomputing $f(3)$ as "five threes, then remove one" gives $15 - 1 = 14$ ✓. THE WRONG BRANCH is the trap: using $5x - 1$ at $x = 7$ to get $34$ ✗, when the condition $7 < 7$ is false. A second trap reads $5x - 1$ as $5(x - 1)$ at $x = 3$ and answers $10$ ✗ — the $1$ is subtracted AFTER the multiplication.',
    },
    {
      q: 'A climbing gym charges $\\$14$ per person for groups of fewer than $5$ climbers. For groups of $5$ or more it charges $\\$11$ per person plus a $\\$21$ booking fee. Find the cost for a group of $5$ and the cost for a group of $3$.',
      answer: '$\\$76$ and $\\$42$',
      solution:
        'Write the rule as two branches with their conditions attached: cost is $14n$ if $n < 5$, and $11n + 21$ if $n \\ge 5$. A group of $5$ satisfies $n \\ge 5$ and fails $n < 5$, so the second branch applies: $11(5) + 21 = 55 + 21 = \\$76$. A group of $3$ satisfies $n < 5$, so the first branch applies: $14(3) = \\$42$. Second check by pricing each group a different way. For the group of $5$: the booking fee is a flat $\\$21$ and the climbers cost $\\$11$ each, so $\\$21 + \\$11 + \\$11 + \\$11 + \\$11 + \\$11 = \\$76$ ✓, counted one climber at a time. For the group of $3$: $\\$14 + \\$14 + \\$14 = \\$42$ ✓. THE WRONG BRANCH is the trap: charging the group of $5$ at $\\$14$ each for $\\$70$ ✗, when "fewer than $5$" excludes $5$ itself. A second trap adds the booking fee to the small group for $\\$63$ ✗ — the fee lives inside the second branch only, and a group of $3$ never enters that branch.',
    },
    {
      q: 'Let $g(x) = x^2 + 7$ if $x \\le -3$, and $g(x) = 2x + 13$ if $x > -3$. Find $g(-3)$ and $g(7)$.',
      answer: '$g(-3) = 16$ and $g(7) = 27$',
      solution:
        'The inequality signs decide who owns the boundary, and here they point the other way from the usual setup. For $g(-3)$: is $-3 \\le -3$? Yes — so the FIRST branch takes the boundary, and $g(-3) = (-3)^2 + 7 = 9 + 7 = 16$. For $g(7)$: since $7 > -3$, the second branch applies and $g(7) = 2(7) + 13 = 27$. Second check by approaching the boundary from the right, which shows the switch happening: at $x = -2.9$ the second branch gives $2(-2.9) + 13 = 7.2$, while at $x = -3$ the rule changes formula and jumps to $16$ ✓ — the boundary value comes from the squaring branch, not from the line. Recomputing $g(7)$ as "double $7$, then add $13$" gives $14 + 13 = 27$ ✓. Two traps. THE WRONG BRANCH answers $g(-3) = 2(-3) + 13 = 7$ ✗, though $-3 > -3$ is false. THE SQUARED MINUS writes $(-3)^2 = -9$ ✗ — a negative times a negative is positive, so the square is $9$ and the output is $16$.',
    },
  ],

  // w6 — a one-radical equation solved by squaring. The third variation hands
  //      over the output and asks for the input buried inside the radicand.
  [
    {
      q: 'Solve $\\sqrt{x - 13} = 7$.',
      answer: '$x = 62$',
      solution:
        'The radical already stands alone, so square both sides: $x - 13 = 49$, and adding $13$ gives $x = 62$. Second check without squaring the equation at all — read the radical as a question. If $\\sqrt{x - 13}$ is $7$, then $x - 13$ has to be the number whose square root is $7$, namely $49$, so $x$ is $13$ more than $49$: $x = 62$ ✓. Substituting into the ORIGINAL closes it: $\\sqrt{62 - 13} = \\sqrt{49} = 7$ ✓. Two traps. THE UNSQUARED SIDE writes $x - 13 = 7$ and answers $x = 20$ ✗ — test it and $\\sqrt{20 - 13} = \\sqrt{7}$, which is about $2.6$, nowhere near $7$. THE SQUARED CONSTANT squares only the number and forgets the $13$ is outside the radical, answering $x = 49$ ✗; the $13$ is subtracted INSIDE, so it must be added back after the squaring, not before.',
    },
    {
      q: 'A sprinkler’s reach in metres is $r = \\sqrt{2p - 7}$, where $p$ is the water pressure. What pressure gives a reach of $13$ metres?',
      answer: '$p = 88$',
      solution:
        'Set the formula equal to the reach we want: $\\sqrt{2p - 7} = 13$. Square both sides to free the radicand: $2p - 7 = 169$, so $2p = 176$ and $p = 88$. Second check by running the formula FORWARD from the answer, which is the reverse of the work just done: at $p = 88$ the radicand is $2(88) - 7 = 176 - 7 = 169$, and $\\sqrt{169} = 13$ ✓, the reach the question asked for. Two traps. THE UNSQUARED SIDE solves $2p - 7 = 13$ for $p = 10$ ✗ — that pressure gives a reach of $\\sqrt{13}$, roughly $3.6$ metres, less than a third of the target. THE HALF-SQUARED radicand handles the $7$ before the $2$, writing $p - 7 = \\frac{169}{2}$ ✗; the whole radicand $2p - 7$ equals $169$, so the $7$ comes off first and the $2$ is divided out last.',
    },
    {
      q: 'Solve $\\sqrt{4x - 7} = 11$.',
      answer: '$x = 32$',
      solution:
        'Square both sides at once: $4x - 7 = 121$. Add $7$: $4x = 128$. Divide by $4$: $x = 32$. Second check by rebuilding the radicand from the answer instead of re-solving: $4(32) = 128$, and $128 - 7 = 121$, whose square root is $11$ ✓ — the original equation holds exactly. A size check agrees before any of that: the radicand must reach $121$, so $4x$ must exceed $121$, putting $x$ above $30$. Two traps. THE UNSQUARED SIDE solves $4x - 7 = 11$ for $x = \\frac{9}{2}$ ✗, which makes the radicand $11$ and the radical about $3.3$. THE UNDIVIDED COEFFICIENT stops at $4x = 128$ and reports $128$ ✗ — the question asks for $x$, and $x$ is still wearing a coefficient at that point.',
    },
  ],

  // w7 — a radical equal to a linear expression, so squaring manufactures a
  //      second root that the original throws out. Every solution names the
  //      floor that the right-hand side must clear before any candidate is
  //      allowed to compete.
  [
    {
      q: 'Solve $\\sqrt{x + 52} = x - 4$.',
      answer: '$x = 12$',
      solution:
        'Before squaring, note what the equation demands: a square root is never negative, so $x - 4 \\ge 0$ and any candidate below $4$ is disqualified on sight. Now square: $x + 52 = x^2 - 8x + 16$, which rearranges to $x^2 - 9x - 36 = 0$ and factors as $(x - 12)(x + 3) = 0$. Candidates: $12$ and $-3$. Check $x = 12$ in the ORIGINAL: $\\sqrt{64} = 8$ and $12 - 4 = 8$ ✓. Check $x = -3$: $\\sqrt{49} = 7$, but $-3 - 4 = -7$ ✗ — the two sides are opposites, which is exactly the fingerprint of a root manufactured by squaring. Second check by a different route: the sign test flagged $-3$ before any substitution, since $-3 < 4$, and $12$ passes both the sign test and the substitution. Only $x = 12$ survives. THE UNCHECKED CANDIDATE is the trap: reporting both roots ✗. Squaring erases signs — $7$ and $-7$ have the same square — so the squared equation is a LOOSER question than the original, and every root it produces must face the original before it counts.',
    },
    {
      q: 'Solve $\\sqrt{5x + 91} = x - 7$.',
      answer: '$x = 21$',
      solution:
        'The right side has to be nonnegative for a square root to match it, so demand $x \\ge 7$ from the start. Square both sides: $5x + 91 = x^2 - 14x + 49$, so $x^2 - 19x - 42 = 0$, which factors as $(x - 21)(x + 2) = 0$. Candidates: $21$ and $-2$. Check $x = 21$ in the ORIGINAL: $\\sqrt{105 + 91} = \\sqrt{196} = 14$ and $21 - 7 = 14$ ✓. Check $x = -2$: $\\sqrt{-10 + 91} = \\sqrt{81} = 9$, but $-2 - 7 = -9$ ✗. Second check by the sign test alone, which is independent of the factoring: $-2$ fails $x \\ge 7$ before any arithmetic happens, while $21$ clears it comfortably ✓. Two traps. THE UNCHECKED CANDIDATE keeps $-2$ ✗ because the numbers came out even; the radicand at $-2$ is a perfect square, which makes the imposter look especially convincing. THE HALF-SQUARED RIGHT SIDE writes $x^2 + 49$ for $(x - 7)^2$ ✗, dropping the middle term $-14x$; the square of a difference has three terms, and losing one changes every root.',
    },
    {
      q: 'Kira is thinking of a number. Adding $84$ to it and taking the square root gives the same result as subtracting $6$ from it. What is her number?',
      answer: '$x = 16$',
      solution:
        'Call the number $x$ and translate: $\\sqrt{x + 84} = x - 6$. The left side cannot be negative, so $x \\ge 6$ before anything else. Square: $x + 84 = x^2 - 12x + 36$, so $x^2 - 13x - 48 = 0$, which factors as $(x - 16)(x + 3) = 0$. Candidates: $16$ and $-3$. Check $x = 16$ in the ORIGINAL: $\\sqrt{100} = 10$ and $16 - 6 = 10$ ✓. Check $x = -3$: $\\sqrt{81} = 9$, but $-3 - 6 = -9$ ✗ — same size, wrong sign. Second check straight from the story, with no equation: Kira’s number must be at least $6$, so $-3$ was never a legal answer to the question asked, and adding $84$ to $16$ gives $100$, whose square root is $10$, which is what $16$ becomes when $6$ is taken away ✓. THE UNCHECKED CANDIDATE is the trap: reporting $-3$ as a second answer ✗. A useful habit is to test the SIGN of the right side first — it kills most imposters before the substitution work begins.',
    },
  ],

  // w8 — an absolute value equal to a linear expression, where both cases
  //      survive. The second route squares both sides and factors the
  //      difference of squares, which reaches the same pair without ever
  //      splitting into cases.
  [
    {
      q: 'Solve $|2x + 5| = x + 22$.',
      answer: '$x = 17$ or $x = -9$',
      solution:
        'Split into the two cases. Case 1: $2x + 5 = x + 22$, so $x = 17$. Check: $|39| = 39$ and $17 + 22 = 39$ ✓. Case 2: $2x + 5 = -(x + 22) = -x - 22$, so $3x = -27$ and $x = -9$. Check: $|-13| = 13$ and $-9 + 22 = 13$ ✓. Both candidates pass, so there are two solutions. Second check by squaring both sides, which never splits into cases at all: $(2x + 5)^2 = (x + 22)^2$ gives $(2x + 5)^2 - (x + 22)^2 = 0$, and the difference of squares factors as $\\left[(2x + 5) - (x + 22)\\right]\\left[(2x + 5) + (x + 22)\\right] = (x - 17)(3x + 27) = 0$, so $x = 17$ or $x = -9$ ✓ — the identical pair from a completely different manoeuvre. THE UNCHECKED CANDIDATE is the trap that squaring invites: it can hand back a root where $x + 22$ comes out negative, which no absolute value can equal, so each root still has to face the original. Here both right-hand values, $39$ and $13$, are positive ✓✓. A second trap drops the bracket in case 2 and writes $2x + 5 = -x + 22$ ✗ — the minus sign belongs to the WHOLE right side.',
    },
    {
      q: 'A number $n$ has the property that the distance from $3n + 1$ to $0$ on the number line is exactly $n + 23$. Find every possible $n$.',
      answer: '$n = 11$ or $n = -6$',
      solution:
        'Distance to $0$ is absolute value, so the sentence says $|3n + 1| = n + 23$. Case 1: $3n + 1 = n + 23$, so $2n = 22$ and $n = 11$. Check: $|34| = 34$ and $11 + 23 = 34$ ✓. Case 2: $3n + 1 = -(n + 23) = -n - 23$, so $4n = -24$ and $n = -6$. Check: $|-17| = 17$ and $-6 + 23 = 17$ ✓. Second check by squaring both sides and factoring the difference of squares: $(3n + 1)^2 - (n + 23)^2 = \\left[(3n + 1) - (n + 23)\\right]\\left[(3n + 1) + (n + 23)\\right] = (2n - 22)(4n + 24) = 0$, giving $n = 11$ and $n = -6$ ✓ with no case analysis anywhere. Two traps. THE ONE-SIDED READING solves only case 1 ✗; the quantity inside the bars is allowed to be negative, and at $n = -6$ it is $-17$, whose distance to zero is still a healthy $17$. THE UNCHECKED CANDIDATE forgets that $n + 23$ must be nonnegative — here both values clear it, but the test is what makes "both work" a conclusion rather than a hope.',
    },
    {
      q: 'Solve $|4x - 1| = x + 41$.',
      answer: '$x = 14$ or $x = -8$',
      solution:
        'Two cases, then two checks. Case 1: $4x - 1 = x + 41$, so $3x = 42$ and $x = 14$. Check: $|55| = 55$ and $14 + 41 = 55$ ✓. Case 2: $4x - 1 = -(x + 41) = -x - 41$, so $5x = -40$ and $x = -8$. Check: $|-33| = 33$ and $-8 + 41 = 33$ ✓. Both survive. Second check by squaring, which sidesteps the cases entirely: $(4x - 1)^2 - (x + 41)^2 = \\left[(4x - 1) - (x + 41)\\right]\\left[(4x - 1) + (x + 41)\\right] = (3x - 42)(5x + 40) = 0$, so $x = 14$ or $x = -8$ ✓. Two traps. THE DROPPED BRACKET writes case 2 as $4x - 1 = -x + 41$ ✗, negating only the $x$ and not the $41$; that yields $x = \\frac{42}{5}$, and testing it gives $|32.6| = 32.6$ against a right side of $49.4$ ✗. THE UNCHECKED CANDIDATE skips verifying that $x + 41$ is nonnegative; the check is cheap and it is the only thing standing between a real solution and an imposter.',
    },
  ],

  // w9 — count the integers a floor or ceiling equation admits. The interval
  //      always has whole-number endpoints, so the count equals the divisor,
  //      and every solution says which endpoint is in and which is out.
  [
    {
      q: 'How many integers $x$ satisfy $\\left\\lfloor \\frac{x}{12} \\right\\rfloor = 7$?',
      answer: '$12$ integers ($x = 84, 85, \\ldots, 95$)',
      solution:
        'A floor of $7$ means the quantity sits from $7$ up to but not including $8$: $7 \\le \\frac{x}{12} < 8$. Multiply through by $12$: $84 \\le x < 96$. The integers there run from $84$ to $95$, and there are $95 - 84 + 1 = 12$ of them. Second check by testing the four numbers that decide the endpoints, which never counts anything: $\\left\\lfloor \\frac{84}{12} \\right\\rfloor = \\lfloor 7 \\rfloor = 7$ ✓, $\\left\\lfloor \\frac{95}{12} \\right\\rfloor = \\lfloor 7.91\\ldots \\rfloor = 7$ ✓, $\\left\\lfloor \\frac{83}{12} \\right\\rfloor = \\lfloor 6.91\\ldots \\rfloor = 6$ ✗, and $\\left\\lfloor \\frac{96}{12} \\right\\rfloor = 8$ ✗. The block is exactly $84$ through $95$ ✓. THE OFF-BY-ONE COUNT is the trap: including $96$ for a count of $13$ ✗, when $\\frac{96}{12}$ hits $8$ exactly and belongs to the NEXT floor. A second trap answers $1$ ✗ by treating $\\lfloor x/12 \\rfloor = 7$ as the single equation $x = 84$; a floor equation describes a whole block of inputs, not one.',
    },
    {
      q: 'How many integers $x$ satisfy $\\left\\lfloor \\frac{x}{14} \\right\\rfloor = -2$?',
      answer: '$14$ integers ($x = -28, -27, \\ldots, -15$)',
      solution:
        'The floor being $-2$ means the quantity runs from $-2$ up to but not including $-1$: $-2 \\le \\frac{x}{14} < -1$. Multiply by $14$, a positive number, so the inequality signs stay put: $-28 \\le x < -14$. The integers run from $-28$ to $-15$, and there are $-15 - (-28) + 1 = 14$ of them. Second check by testing the endpoints and their outside neighbours: $\\left\\lfloor \\frac{-28}{14} \\right\\rfloor = \\lfloor -2 \\rfloor = -2$ ✓, $\\left\\lfloor \\frac{-15}{14} \\right\\rfloor = \\lfloor -1.07\\ldots \\rfloor = -2$ ✓, $\\left\\lfloor \\frac{-14}{14} \\right\\rfloor = -1$ ✗, and $\\left\\lfloor \\frac{-29}{14} \\right\\rfloor = \\lfloor -2.07\\ldots \\rfloor = -3$ ✗. Two traps. THE CHOPPED DECIMAL claims $\\lfloor -1.07\\ldots \\rfloor = -1$ ✗ and would throw out most of the block; going DOWN from $-1.07$ means going to $-2$. THE OFF-BY-ONE COUNT includes $-14$ ✗ — that input makes the quotient exactly $-1$, which is the top of the next block, not this one.',
    },
    {
      q: 'A ferry carries at most $18$ passengers per crossing, so moving $x$ passengers takes $\\left\\lceil \\frac{x}{18} \\right\\rceil$ crossings. For how many whole numbers $x$ does the ferry make exactly $5$ crossings?',
      answer: '$18$ values ($x = 73, 74, \\ldots, 90$)',
      solution:
        'A CEILING of $5$ means the quantity comes in above $4$ and at most $5$: $4 < \\frac{x}{18} \\le 5$. Multiply by $18$: $72 < x \\le 90$. The whole numbers run from $73$ to $90$, and there are $90 - 73 + 1 = 18$ of them. Second check by riding the ferry at the edges, which uses no interval algebra: $90$ passengers fill five crossings of $18$ exactly ✓; $73$ passengers fill four crossings of $18$ and leave one person for a fifth ✓; $72$ passengers fit in four full crossings, so the fifth never sails ✗; and $91$ passengers spill into a sixth ✗. Two traps. THE FLIPPED INTERVAL copies the floor pattern and writes $90 \\le x < 108$ ✗ — a ceiling includes its UPPER endpoint and excludes its lower one, which is the mirror image of a floor. THE OFF-BY-ONE COUNT keeps $72$ ✗, though $\\frac{72}{18} = 4$ exactly, and four crossings is not five.',
    },
  ],

  // w10 — a rational equation whose only candidate is the value the domain
  //       forbids. Cancelling a factor leaves a HOLE, and the hole is punched
  //       exactly where the answer wants to be.
  [
    {
      q: 'Solve $\\frac{x^2 - 21x}{x - 21} = 21$.',
      answer: 'No solution',
      solution:
        'Note the excluded value before solving: the denominator vanishes at $x = 21$, so $21$ is barred from the domain no matter what happens next. Factor the numerator: $\\frac{x(x - 21)}{x - 21} = x$, valid for every $x$ EXCEPT $21$. The equation therefore reads $x = 21$ — the one value the expression is not allowed to take. The only candidate is the forbidden one, so there is no solution. Second check by multiplying through instead of cancelling: $x^2 - 21x = 21(x - 21)$ gives $x^2 - 42x + 441 = 0$, which is $(x - 21)^2 = 0$, whose only root is $x = 21$ ✓ — the same dead end reached without ever cancelling a factor. Substituting confirms the refusal: at $x = 21$ the expression is $\\frac{0}{0}$, which is undefined, not $21$. THE CANCELLED FACTOR THAT STILL BANS ITS VALUE is the trap: answering $x = 21$ ✗ because the simplified form $x$ looks harmless. Cancelling leaves a HOLE at $21$; the simplified expression and the original agree everywhere else, and the one place they differ is the place the answer wanted to live.',
    },
    {
      q: 'Solve $\\frac{x^2 - 49}{x - 7} = 14$.',
      answer: 'No solution',
      solution:
        'The denominator is zero at $x = 7$, so $7$ is excluded from the start. Factor the numerator as a difference of squares: $\\frac{(x - 7)(x + 7)}{x - 7} = x + 7$ for every $x$ except $7$. The equation becomes $x + 7 = 14$, so $x = 7$ — and that is precisely the excluded value. No solution. Second check by clearing the denominator rather than cancelling: $x^2 - 49 = 14(x - 7)$ gives $x^2 - 14x + 49 = 0$, which is $(x - 7)^2 = 0$ and forces $x = 7$ ✓, the same forbidden number by a different road. Substituting settles it: at $x = 7$ the original is $\\frac{49 - 49}{7 - 7} = \\frac{0}{0}$, undefined ✗. THE CANCELLED FACTOR THAT STILL BANS ITS VALUE is the trap: reporting $x = 7$ ✗ on the strength of the simplified line $x + 7 = 14$. A hole is invisible in the simplified form and permanent in the original. Worth noticing how close the function gets without arriving: at $x = 6.99$ the expression is $13.99$, and at $x = 7.01$ it is $14.01$ — it skips over $14$ without ever taking that value.',
    },
    {
      q: 'Solve $\\frac{x^2 + 39x}{x + 39} = -39$.',
      answer: 'No solution',
      solution:
        'Find the excluded value first: $x + 39 = 0$ at $x = -39$, so $-39$ can never be an answer. Factor the numerator: $\\frac{x(x + 39)}{x + 39} = x$ for every $x$ except $-39$. The equation reduces to $x = -39$, the banned value, so there is no solution. Second check by multiplying both sides by the denominator: $x^2 + 39x = -39(x + 39)$ gives $x^2 + 78x + 1521 = 0$, and since $1521 = 39^2$ this is $(x + 39)^2 = 0$, whose only root is $x = -39$ ✓. Substituting confirms the refusal: at $x = -39$ the original is $\\frac{1521 - 1521}{-39 + 39} = \\frac{0}{0}$, undefined ✗. Two traps. THE CANCELLED FACTOR THAT STILL BANS ITS VALUE answers $x = -39$ ✗, treating the simplified rule $x$ as though it had repaired the hole. THE SIGN SLIP cancels to $x$ and then reads the right side as $39$ ✗, answering $x = 39$; testing that value gives $\\frac{1521 + 1521}{78} = 39$, which is $39$ and not $-39$, so it fails the equation as written.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  worksheet,
}
