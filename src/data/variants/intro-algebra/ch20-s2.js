// Introduction to Algebra chapter 20 — variations for section 20.2
// (Absolute Value). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked twice by two different routes, and the second route
//    is written out in the solution. Bare absolute values were read as a
//    distance from zero AND recomputed with $|x| = \sqrt{x^2}$ or by mirroring
//    across zero; every split equation was solved case by case AND re-solved by
//    pulling the coefficient out of the bars ($|4x - 4| = 4|x - 1|$) or by
//    walking the number line; every solution set was found by reasoning AND
//    tested at sample points and at the endpoints.
//  - Whenever an equation splits, BOTH cases are shown and BOTH candidates are
//    substituted back into the ORIGINAL statement. Some of them fail, and the
//    solution says so out loud — that check is the whole point of the section.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: KEEPING THE SIGN, READING THE BARS AS A
//    RECIPROCAL, ERASING THE NUMBER, FORGETTING THE NEGATIVE CASE, NEGATING
//    THE ANSWER INSTEAD OF THE RIGHT SIDE, DROPPING THE SHIFT, MEASURING FROM
//    THE WRONG CENTRE, IGNORING THE MINUS SIGN ON THE RIGHT, MOVING A TERM THE
//    WRONG WAY, KEEPING THE MINUS AFTER DIVIDING, SWAPPING THE TWO NUMBERS IN
//    THE DESCRIPTION, KEEPING ONLY THE UPPER BOUND, TURNING AN "INSIDE" SET
//    INTO AN "OUTSIDE" SET, INCLUDING A STRICT ENDPOINT, EXCLUDING AN INCLUDED
//    ENDPOINT, TRUSTING CASE 1 WITHOUT CHECKING IT, KEEPING AN EXTRANEOUS
//    CANDIDATE, SUBTRACTING INSTEAD OF AVERAGING, ADDING WITHOUT HALVING, and
//    COUNTING THE GAP INSTEAD OF THE INTEGERS.
//  - No two choices inside an item name the same value.

const s202 = [
  // p1 — a bare absolute value: the bars measure distance, so the output is never negative.
  [
    {
      q: 'What is $|-12|$?',
      choices: ['$-12$', '$12$', '$\\frac{1}{12}$', '$0$'],
      answer: 1,
      solution:
        'The number $-12$ sits $12$ steps to the left of zero, and a count of steps is never negative, so $|-12| = 12$. Check a second, independent way with the identity $|x| = \\sqrt{x^2}$: $\\sqrt{(-12)^2} = \\sqrt{144} = 12$ ✓ — squaring erases the sign and the square root hands back the positive twin. (The choice $-12$ is KEEPING THE SIGN, which would make a distance negative; the choice $\\frac{1}{12}$ is READING THE BARS AS A RECIPROCAL; the choice $0$ is ERASING THE NUMBER, as though the bars deleted whatever was inside.)',
    },
    {
      q: 'What is $|-20|$?',
      choices: ['$\\frac{1}{20}$', '$0$', '$-20$', '$20$'],
      answer: 3,
      solution:
        'Distance from zero: $-20$ is $20$ steps out, so $|-20| = 20$. Check a second, independent way by mirroring across zero: $-20$ and $20$ are reflections of each other, so they sit the same distance from zero and must have the same absolute value. Since $|20| = 20$ is plain, $|-20| = 20$ ✓. (The choice $-20$ is KEEPING THE SIGN; the choice $\\frac{1}{20}$ is READING THE BARS AS A RECIPROCAL; the choice $0$ is ERASING THE NUMBER.)',
    },
    {
      q: 'How far from $0$ is the number $-44$ on the number line?',
      choices: ['$-44$', '$\\frac{1}{44}$', '$44$', '$0$'],
      answer: 2,
      solution:
        'The question is asking for $|-44|$, and the answer is $44$: you walk $44$ steps to the right to get from $-44$ back to $0$. Check a second, independent way by hopping in fours: $-44 \\to -40 \\to \\cdots \\to -4 \\to 0$ takes $11$ hops of length $4$, and $11 \\cdot 4 = 44$ ✓. (The choice $-44$ is KEEPING THE SIGN, but no walk has negative length; the choice $\\frac{1}{44}$ is READING THE BARS AS A RECIPROCAL; the choice $0$ is ERASING THE NUMBER instead of measuring it.)',
    },
  ],
  // p2 — |x| = k with k positive has TWO solutions; k = 0 has exactly one.
  [
    {
      q: 'Solve $|x| = 12$.',
      choices: ['$x = 12$ or $x = -12$', '$x = 12$ only', '$x = -12$ only', 'No solution'],
      answer: 0,
      solution:
        'Two numbers sit exactly $12$ steps from zero, one on each side: $12$ on the right and $-12$ on the left. Check both in the original: $|12| = 12$ ✓ and $|-12| = 12$ ✓, so both belong. Check a second, independent way by squaring: $|x| = 12$ forces $x^2 = 144$, and the numbers whose square is $144$ are $12$ and $-12$ ✓ — the same pair, found without ever drawing a number line. (The choice $x = 12$ only is FORGETTING THE NEGATIVE CASE, the most common slip in the whole section; the choice $x = -12$ only keeps the negative and drops the positive; the choice No solution belongs to $|x| = -12$, where the right side is negative — here it is a healthy $12$.)',
    },
    {
      q: 'Solve $|x| = 20$.',
      choices: ['$x = 20$ only', '$x = 20$ or $x = -20$', 'No solution', '$x = -20$ only'],
      answer: 1,
      solution:
        'Distance $20$ from zero can be walked in either direction, so $x = 20$ or $x = -20$. Check both in the original: $|20| = 20$ ✓ and $|-20| = 20$ ✓. Check a second, independent way by squaring both sides: $x^2 = 400$, whose solutions are $x = 20$ and $x = -20$ ✓. (The choice $x = 20$ only is FORGETTING THE NEGATIVE CASE; the choice $x = -20$ only drops the positive one; the choice No solution would be right if the $20$ were negative, but a positive right side always gives two answers.)',
    },
    {
      q: 'Solve $|x| = 0$.',
      choices: ['Two solutions: $x = 0$ and $x = -0$', 'No solution', '$x = 0$ only', 'Every number is a solution'],
      answer: 2,
      solution:
        'This is the one right side that does not give a pair. Only one number sits $0$ steps from zero, and that is zero itself, so $x = 0$ only. Check it in the original: $|0| = 0$ ✓. Check a second, independent way by squaring: $x^2 = 0$ has the single solution $x = 0$, since a product of two equal numbers is zero only when the number itself is zero ✓. (The choice with two solutions splits the cases out of habit, but $-0$ and $0$ are THE SAME POINT, so the two cases collapse into one; the choice No solution confuses $k = 0$ with $k$ NEGATIVE — zero is a perfectly good distance; the choice Every number is a solution reads $|x| \\ge 0$, which is true for every $x$, as though it said $|x| = 0$.)',
    },
  ],
  // p3 — a negative right side: no distance is negative, so nothing works.
  [
    {
      q: 'Solve $|x| = -16$.',
      choices: ['No solution', '$x = 16$ or $x = -16$', '$x = -16$ only', '$x = 16$ only'],
      answer: 0,
      solution:
        'An absolute value is a distance, and no distance is negative, so $|x|$ can never equal $-16$. There is no solution. Check a second, independent way by splitting anyway and testing what falls out: the two candidates a hasty split produces are $x = 16$ and $x = -16$, and back in the ORIGINAL statement $|16| = 16 \\ne -16$ ✗ and $|-16| = 16 \\ne -16$ ✗. Both fail, so the empty answer stands. (The choice $x = 16$ or $x = -16$ is IGNORING THE MINUS SIGN ON THE RIGHT and solving $|x| = 16$ instead; the other two choices keep one member of that same wrong pair.)',
    },
    {
      q: 'Solve $|x + 4| = -12$.',
      choices: ['$x = 8$ or $x = -16$', 'No solution', '$x = -16$ only', '$x = 8$ only'],
      answer: 1,
      solution:
        'The bars around $x + 4$ report the distance from $x$ to $-4$, and a distance cannot be $-12$. No solution. Check a second, independent way by running both cases and testing each candidate in the ORIGINAL: case 1 gives $x + 4 = -12$, so $x = -16$, and $|-16 + 4| = |-12| = 12 \\ne -12$ ✗; case 2 gives $x + 4 = 12$, so $x = 8$, and $|8 + 4| = 12 \\ne -12$ ✗. Every candidate is extraneous. (The choice $x = 8$ or $x = -16$ is IGNORING THE MINUS SIGN ON THE RIGHT and solving $|x + 4| = 12$; the two "only" choices keep half of that wrong pair.)',
    },
    {
      q: 'Solve $|3x| = -24$.',
      choices: ['$x = 8$ or $x = -8$', '$x = -8$ only', '$x = 8$ only', 'No solution'],
      answer: 3,
      solution:
        'Whatever $3x$ turns out to be, its absolute value is a distance and cannot be negative, so no $x$ works. Check a second, independent way by pulling the $3$ out of the bars: $|3x| = 3|x|$, so the equation says $3|x| = -24$, that is $|x| = -8$ — still an impossible negative distance. Testing the candidates confirms it: $|3 \\cdot 8| = 24 \\ne -24$ ✗ and $|3 \\cdot (-8)| = 24 \\ne -24$ ✗. (The choice $x = 8$ or $x = -8$ is IGNORING THE MINUS SIGN ON THE RIGHT and solving $|3x| = 24$; the two "only" choices keep half of that wrong pair.)',
    },
  ],
  // p4 — |x - a| = k: read it as "x is k away from a", and go both directions.
  [
    {
      q: 'Solve $|x - 8| = 20$.',
      choices: ['$x = 28$ or $x = -12$', '$x = 28$ only', '$x = 28$ or $x = 12$', '$x = -28$ or $x = 12$'],
      answer: 0,
      solution:
        'Read it as distance: $x$ is $20$ away from $8$. Going right, $8 + 20 = 28$; going left, $8 - 20 = -12$. Check both in the original: $|28 - 8| = 20$ ✓ and $|-12 - 8| = |-20| = 20$ ✓. Check a second, independent way with the algebraic split: case 1 is $x - 8 = 20$, giving $x = 28$, and case 2 is $x - 8 = -20$, giving $x = -12$ ✓ — the same pair the number line gave. (The choice $x = 28$ only is FORGETTING THE NEGATIVE CASE; the choice $x = 28$ or $x = 12$ is NEGATING THE ANSWER INSTEAD OF THE RIGHT SIDE, then dropping the minus; the choice $x = -28$ or $x = 12$ negates both answers of the first case instead of negating the $20$.)',
    },
    {
      q: 'Solve $|x + 4| = 16$.',
      choices: ['$x = 12$ only', '$x = 20$ or $x = -12$', '$x = 12$ or $x = -20$', '$x = 12$ or $x = -12$'],
      answer: 2,
      solution:
        'Rewrite the inside as a subtraction to see the centre: $x + 4 = x - (-4)$, so the equation says $x$ is $16$ away from $-4$. Going right, $-4 + 16 = 12$; going left, $-4 - 16 = -20$. Check both in the original: $|12 + 4| = 16$ ✓ and $|-20 + 4| = |-16| = 16$ ✓. Check a second, independent way with the split: $x + 4 = 16$ gives $x = 12$, and $x + 4 = -16$ gives $x = -20$ ✓. (The choice $x = 12$ only is FORGETTING THE NEGATIVE CASE; the choice $x = 20$ or $x = -12$ is MEASURING FROM THE WRONG CENTRE, treating $|x + 4|$ as the distance from $+4$; the choice $x = 12$ or $x = -12$ is DROPPING THE SHIFT and solving $|x| = 16$.)',
    },
    {
      q: 'Which two numbers are exactly $24$ away from $-8$ on the number line?',
      choices: ['$32$ and $-16$', '$16$ only', '$16$ and $32$', '$16$ and $-32$'],
      answer: 3,
      solution:
        'Step $24$ to the right of $-8$: $-8 + 24 = 16$. Step $24$ to the left: $-8 - 24 = -32$. So the two numbers are $16$ and $-32$. Check a second, independent way by writing the sentence as an equation, $|x + 8| = 24$, and splitting: $x + 8 = 24$ gives $x = 16$, and $x + 8 = -24$ gives $x = -32$ ✓. Both check in the original: $|16 + 8| = 24$ ✓ and $|-32 + 8| = |-24| = 24$ ✓. (The choice $32$ and $-16$ is MEASURING FROM THE WRONG CENTRE, stepping $24$ either way from $+8$; the choice $16$ only is FORGETTING THE NEGATIVE CASE, that is, forgetting you may also walk left; the choice $16$ and $32$ walks right twice, once by $24$ and once by $40$, which no single distance can do.)',
    },
  ],
  // p5 — a coefficient inside the bars: split, or factor the coefficient out.
  [
    {
      q: 'Solve $|2x + 8| = 32$.',
      choices: ['$x = 12$ only', '$x = 12$ or $x = -20$', '$x = 12$ or $x = -12$', '$x = 12$ or $x = 20$'],
      answer: 1,
      solution:
        'Split into two cases. Case 1: $2x + 8 = 32$, so $2x = 24$ and $x = 12$. Check: $|2(12) + 8| = |32| = 32$ ✓. Case 2: $2x + 8 = -32$, so $2x = -40$ and $x = -20$. Check: $|2(-20) + 8| = |-32| = 32$ ✓. Both survive. Check a second, independent way by pulling the $2$ out of the bars: $|2x + 8| = 2|x + 4|$, so the equation becomes $2|x + 4| = 32$, that is $|x + 4| = 16$ — meaning $x$ is $16$ from $-4$, which gives $12$ and $-20$ ✓. (The choice $x = 12$ only is FORGETTING THE NEGATIVE CASE; the choice $x = 12$ or $x = 20$ is NEGATING THE ANSWER INSTEAD OF THE RIGHT SIDE and then losing the sign; the choice $x = 12$ or $x = -12$ comes from MOVING THE $8$ THE WRONG WAY in case 2, writing $2x = -32 + 8 = -24$.)',
    },
    {
      q: 'Solve $|4x - 4| = 40$.',
      choices: ['$x = 11$ or $x = 9$', '$x = 11$ or $x = -11$', '$x = 11$ or $x = -9$', '$x = 11$ only'],
      answer: 2,
      solution:
        'Split into two cases. Case 1: $4x - 4 = 40$, so $4x = 44$ and $x = 11$. Check: $|4(11) - 4| = |40| = 40$ ✓. Case 2: $4x - 4 = -40$, so $4x = -36$ and $x = -9$. Check: $|4(-9) - 4| = |-40| = 40$ ✓. Check a second, independent way by pulling the $4$ out: $|4x - 4| = 4|x - 1|$, so $4|x - 1| = 40$ and $|x - 1| = 10$ — $x$ is $10$ away from $1$, giving $11$ and $-9$ ✓. (The choice $x = 11$ or $x = 9$ is NEGATING THE ANSWER INSTEAD OF THE RIGHT SIDE and then dropping the minus; the choice $x = 11$ or $x = -11$ comes from MOVING THE $4$ THE WRONG WAY in case 2, writing $4x = -40 - 4 = -44$; the choice $x = 11$ only is FORGETTING THE NEGATIVE CASE.)',
    },
    {
      q: 'Solve $|20 - 4x| = 16$.',
      choices: ['$x = 1$ only', '$x = -1$ or $x = 9$', '$x = 1$ or $x = -9$', '$x = 1$ or $x = 9$'],
      answer: 3,
      solution:
        'The variable comes second here, so watch the signs. Case 1: $20 - 4x = 16$, so $-4x = -4$ and $x = 1$. Check: $|20 - 4| = 16$ ✓. Case 2: $20 - 4x = -16$, so $-4x = -36$ and $x = 9$. Check: $|20 - 36| = |-16| = 16$ ✓. Check a second, independent way by noticing that a distance does not care about direction: $|20 - 4x| = |4x - 20| = 4|x - 5|$, so $4|x - 5| = 16$ and $|x - 5| = 4$ — $x$ is $4$ away from $5$, giving $9$ and $1$ ✓. (The choice $x = 1$ only keeps case 1 alone; the choice $x = -1$ or $x = 9$ is KEEPING THE MINUS AFTER DIVIDING in case 1, reading $-4x = -4$ as $x = -1$; the choice $x = 1$ or $x = -9$ makes that same sign slip in case 2.)',
    },
  ],
  // p6 — translating between a distance sentence and an absolute value equation.
  [
    {
      q: 'Which equation says "the distance between $x$ and $9$ is $12$"?',
      choices: ['$|x - 9| = 12$', '$|x - 12| = 9$', '$|x + 9| = 12$', '$|x + 12| = 9$'],
      answer: 0,
      solution:
        'The distance between $x$ and $a$ is $|x - a|$: the centre goes inside the bars with a minus sign, and the distance sits alone on the right. Centre $9$, distance $12$, so the equation is $|x - 9| = 12$. Check a second, independent way by testing the numbers the sentence describes. The numbers $12$ from $9$ are $21$ and $-3$; feeding $x = 21$ into the four candidates gives $|21 - 9| = 12$ ✓, $|21 - 12| = 9$ — true too, but that equation is about the centre $12$, and $x = -3$ breaks it: $|-3 - 12| = 15 \\ne 9$ ✗, while $|-3 - 9| = 12$ ✓. Only the first equation catches BOTH numbers the sentence names. (The choice $|x - 12| = 9$ is SWAPPING THE TWO NUMBERS IN THE DESCRIPTION; the choice $|x + 9| = 12$ measures from $-9$, since $x + 9 = x - (-9)$; the choice $|x + 12| = 9$ makes both mistakes at once.)',
    },
    {
      q: 'Which equation says "$x$ is $16$ units away from $-4$"?',
      choices: ['$|x - 4| = 16$', '$|x + 4| = 16$', '$|x - 16| = 4$', '$|x + 16| = 4$'],
      answer: 1,
      solution:
        'Distance from a centre of $-4$ is $|x - (-4)|$, and subtracting a negative is adding: $|x + 4|$. Setting that to $16$ gives $|x + 4| = 16$. Check a second, independent way by testing the two numbers the sentence describes, $-4 + 16 = 12$ and $-4 - 16 = -20$: $|12 + 4| = 16$ ✓ and $|-20 + 4| = |-16| = 16$ ✓, so the equation catches both, while $|12 - 4| = 8 \\ne 16$ ✗ rules the first choice out on the spot. (The choice $|x - 4| = 16$ MEASURES FROM THE WRONG CENTRE, $+4$ instead of $-4$; the choice $|x - 16| = 4$ is SWAPPING THE TWO NUMBERS IN THE DESCRIPTION; the choice $|x + 16| = 4$ swaps them and keeps the negative sign on the wrong one.)',
    },
    {
      q: 'The equation $|x - 28| = 12$ says which of these?',
      choices: ['$x$ is $28$ away from $12$', '$x$ is $12$ away from $-28$', '$x$ is $40$ away from zero', '$x$ is $12$ away from $28$'],
      answer: 3,
      solution:
        'In $|x - a| = k$ the number subtracted inside the bars is the CENTRE and the number alone on the right is the DISTANCE. Here the centre is $28$ and the distance is $12$, so the sentence is "$x$ is $12$ away from $28$". Check a second, independent way by solving the equation and looking at what comes out: $x - 28 = 12$ gives $x = 40$ and $x - 28 = -12$ gives $x = 16$, and both $40$ and $16$ sit $12$ steps from $28$ ✓ — they are nowhere near $12$ steps from $-28$, and neither is $40$ steps from zero. (The choice "$28$ away from $12$" is SWAPPING THE TWO NUMBERS IN THE DESCRIPTION; the choice "$12$ away from $-28$" flips the sign of the centre, which would be the equation $|x + 28| = 12$; the choice "$40$ away from zero" is ADDING THE TWO NUMBERS, which is one of the answers, not the description.)',
    },
  ],
  // p7 — inequalities: "inside" for < and "outside" for >, in both directions.
  [
    {
      q: 'Which describes all solutions of $|x| < 12$?',
      choices: ['$-12 < x < 12$', '$x < 12$', '$x < -12$ or $x > 12$', '$0 < x < 12$'],
      answer: 0,
      solution:
        'The inequality says $x$ is less than $12$ steps from zero, and steps can be taken in either direction, so $x$ lies strictly between $-12$ and $12$: $-12 < x < 12$. Check a second, independent way by testing sample points against the original: $x = -11$ gives $|-11| = 11 < 12$ ✓, so negatives near zero must be in; $x = -40$ gives $40 < 12$ ✗, so far-left numbers must be out; $x = 0$ gives $0 < 12$ ✓, so zero is in. Only the first description keeps all three verdicts. (The choice $x < 12$ is KEEPING ONLY THE UPPER BOUND — it would let in $x = -40$, which is $40$ from zero; the choice $x < -12$ or $x > 12$ is TURNING AN "INSIDE" SET INTO AN "OUTSIDE" SET, which is what $|x| > 12$ would say; the choice $0 < x < 12$ throws away the negative half and zero.)',
    },
    {
      q: 'Which describes all solutions of $|x| \\ge 20$?',
      choices: ['$-20 \\le x \\le 20$', '$x \\ge 20$', '$x \\le -20$ or $x \\ge 20$', '$x \\ge -20$'],
      answer: 2,
      solution:
        'This time $x$ must be at least $20$ steps from zero, so it lies at or beyond $20$ on the right, or at or beyond $-20$ on the left: $x \\le -20$ or $x \\ge 20$. The two pieces do not join up, so the answer needs the word "or". Check a second, independent way by testing sample points in the original: $x = -24$ gives $|-24| = 24 \\ge 20$ ✓, so the far left is in; $x = 0$ gives $0 \\ge 20$ ✗, so the middle is out; $x = -20$ gives $20 \\ge 20$ ✓, so that endpoint is included. Only the third description matches all three. (The choice $-20 \\le x \\le 20$ is TURNING AN "OUTSIDE" SET INTO AN "INSIDE" SET, which is what $|x| \\le 20$ says; the choice $x \\ge 20$ keeps only the right-hand piece; the choice $x \\ge -20$ swallows the whole middle, including $x = 0$.)',
    },
    {
      q: 'A number $x$ satisfies $-24 < x < 24$. Which absolute value statement says exactly the same thing?',
      choices: ['$|x| > 24$', '$|x| \\le 24$', '$|x| \\ge 24$', '$|x| < 24$'],
      answer: 3,
      solution:
        'The range runs from $-24$ to $24$ with both endpoints left out, and it is centred on zero — that is the set of numbers strictly nearer than $24$ steps to zero, so the statement is $|x| < 24$. Check a second, independent way by testing the endpoints and one interior point: $x = 24$ is NOT in the given range, and $|24| < 24$ is false ✓, so the strict sign is right; $x = -24$ behaves the same; $x = 20$ is in the range, and $|20| = 20 < 24$ ✓. (The choice $|x| \\le 24$ is INCLUDING A STRICT ENDPOINT — it would let in $x = 24$, which the given range excludes; the choice $|x| > 24$ is TURNING AN "INSIDE" SET INTO AN "OUTSIDE" SET; the choice $|x| \\ge 24$ makes both mistakes at once.)',
    },
  ],
  // p8 — variable on both sides: solve both cases, then CHECK, because the right side may go negative.
  [
    {
      q: 'Solve $|x - 4| = 2x - 16$.',
      choices: ['$x = 12$ and $x = \\frac{20}{3}$', '$x = 12$ only', '$x = \\frac{20}{3}$ only', 'No solution'],
      answer: 1,
      solution:
        'Case 1: $x - 4 = 2x - 16$, so $12 = x$. Check in the ORIGINAL: the left side is $|12 - 4| = 8$ and the right side is $2(12) - 16 = 8$. ✓ Case 2: $x - 4 = -(2x - 16) = -2x + 16$, so $3x = 20$ and $x = \\frac{20}{3}$. Check: the right side is $2 \\cdot \\frac{20}{3} - 16 = \\frac{40}{3} - \\frac{48}{3} = -\\frac{8}{3}$, which is NEGATIVE, and an absolute value is never negative — extraneous ✗. Only $x = 12$ survives. Check a second, independent way by asking where a solution can even live: the right side $2x - 16$ must be at least $0$, so $x \\ge 8$, which rules $\\frac{20}{3}$ out before any substitution, and $x = 12$ clears the bar ✓. (The choice with both values is KEEPING AN EXTRANEOUS CANDIDATE — solving without checking; the choice $\\frac{20}{3}$ only keeps the wrong one of the two; the choice No solution throws away a candidate that passes its check.)',
    },
    {
      q: 'Solve $|x + 4| = 2x - 20$.',
      choices: ['No solution', '$x = 24$ and $x = \\frac{16}{3}$', '$x = 24$ only', '$x = \\frac{16}{3}$ only'],
      answer: 2,
      solution:
        'Case 1: $x + 4 = 2x - 20$, so $24 = x$. Check in the ORIGINAL: the left side is $|24 + 4| = 28$ and the right side is $2(24) - 20 = 28$. ✓ Case 2: $x + 4 = -(2x - 20) = -2x + 20$, so $3x = 16$ and $x = \\frac{16}{3}$. Check: the right side is $\\frac{32}{3} - 20 = -\\frac{28}{3}$, negative, so no absolute value can equal it — extraneous ✗. Check a second, independent way with the range test: the right side must be at least $0$, so $x \\ge 10$; the candidate $\\frac{16}{3}$ is barely over $5$ and fails on sight, while $24$ passes ✓. (The choice with both values is KEEPING AN EXTRANEOUS CANDIDATE; the choice $\\frac{16}{3}$ only keeps the failing candidate alone; the choice No solution discards a candidate that checks out.)',
    },
    {
      q: 'Solve $|x - 28| = 2x - 20$.',
      choices: ['$x = -8$ only', '$x = 16$ and $x = -8$', 'No solution', '$x = 16$ only'],
      answer: 3,
      solution:
        'Do not assume the first case is the good one — check them both. Case 1: $x - 28 = 2x - 20$, so $x = -8$. Check in the ORIGINAL: the left side is $|-8 - 28| = 36$, the right side is $2(-8) - 20 = -36$, and $36 \\ne -36$ — extraneous ✗. Case 2: $x - 28 = -(2x - 20) = -2x + 20$, so $3x = 48$ and $x = 16$. Check: $|16 - 28| = 12$ and $2(16) - 20 = 12$. ✓ Here it is the SECOND case that survives. Check a second, independent way with the range test: the right side $2x - 20$ must be at least $0$, so any solution needs $x \\ge 10$; that kills $-8$ immediately and lets $16$ through ✓. (The choice $x = -8$ only is TRUSTING CASE 1 WITHOUT CHECKING IT; the choice with both values is KEEPING AN EXTRANEOUS CANDIDATE; the choice No solution rejects both when one of them checks out perfectly.)',
    },
  ],
  // p9 — equal distances from two centres: the answer is the midpoint.
  [
    {
      q: 'Solve $|x - 20| = |x - 4|$.',
      choices: ['$x = 12$', '$x = 16$', 'No solution', '$x = 12$ or $x = -12$'],
      answer: 0,
      solution:
        'The equation asks for the number equally far from $20$ and from $4$ — the midpoint, $\\frac{20 + 4}{2} = 12$. Check: $|12 - 20| = 8$ and $|12 - 4| = 8$ ✓. Check a second, independent way with the algebraic split: case 1 is $x - 20 = x - 4$, which cancels the $x$ and leaves $-20 = -4$, impossible, so that case contributes nothing; case 2 is $x - 20 = -(x - 4) = -x + 4$, giving $2x = 24$ and $x = 12$ ✓ — one solution, matching the midpoint. (The choice $x = 16$ is SUBTRACTING INSTEAD OF AVERAGING, $20 - 4$; the choice No solution stops after case 1 collapses and forgets that case 2 is still waiting; the choice $x = 12$ or $x = -12$ tacks on a negative twin out of habit, but $|-12 - 20| = 32$ while $|-12 - 4| = 16$ ✗.)',
    },
    {
      q: 'Solve $|x + 4| = |x - 24|$.',
      choices: ['$x = 14$', '$x = 10$', '$x = 28$', 'No solution'],
      answer: 1,
      solution:
        'Rewrite the left side as $|x - (-4)|$ so both centres are visible: the equation asks for the number equally far from $-4$ and from $24$. That is the midpoint, $\\frac{-4 + 24}{2} = 10$. Check: $|10 + 4| = 14$ and $|10 - 24| = |-14| = 14$ ✓. Check a second, independent way with the split: case 1 is $x + 4 = x - 24$, which cancels to $4 = -24$, impossible; case 2 is $x + 4 = -(x - 24) = -x + 24$, giving $2x = 20$ and $x = 10$ ✓. (The choice $x = 14$ is MEASURING FROM THE WRONG CENTRE, averaging $4$ and $24$ instead of $-4$ and $24$; the choice $x = 28$ is ADDING THE TWO CENTRES WITHOUT HALVING, $4 + 24$; the choice No solution quits after case 1 collapses.)',
    },
    {
      q: 'Which number is the same distance from $16$ as it is from $44$?',
      choices: ['$28$', '$60$', '$30$', 'There is no such number'],
      answer: 2,
      solution:
        'The point equally far from two numbers is the midpoint: $\\frac{16 + 44}{2} = \\frac{60}{2} = 30$. Check: $|30 - 16| = 14$ and $|30 - 44| = |-14| = 14$ ✓ — the same $14$ steps on each side. Check a second, independent way by writing the sentence as $|x - 16| = |x - 44|$ and splitting: case 1 is $x - 16 = x - 44$, which cancels to $-16 = -44$, impossible; case 2 is $x - 16 = -(x - 44) = -x + 44$, giving $2x = 60$ and $x = 30$ ✓. (The choice $28$ is SUBTRACTING INSTEAD OF AVERAGING, $44 - 16$, which is the width of the gap, not its centre; the choice $60$ is ADDING WITHOUT HALVING; the choice "no such number" stops when case 1 collapses, though case 2 still delivers an answer.)',
    },
  ],
  // p10 — turn the inequality into an interval, then count the integers inside it.
  [
    {
      q: 'How many integers $x$ satisfy $|x - 12| < 5$?',
      choices: ['$9$', '$11$', '$10$', 'Infinitely many'],
      answer: 0,
      solution:
        'The inequality says $x$ is strictly within $5$ of $12$, so $7 < x < 17$. The endpoints $7$ and $17$ are exactly $5$ away, and "strictly" shuts them out, so the integers run from $8$ up to $16$: that is $16 - 8 + 1 = 9$ of them. Check a second, independent way by listing them out loud: $8, 9, 10, 11, 12, 13, 14, 15, 16$ — count the names and you get $9$ ✓, four on each side of the centre $12$ plus the centre itself. (The choice $11$ is INCLUDING BOTH STRICT ENDPOINTS, counting $7$ through $17$; the choice $10$ is COUNTING THE GAP INSTEAD OF THE INTEGERS, $17 - 7$, and forgetting that a run of whole numbers holds one more than the difference of its ends; the choice Infinitely many forgets the word "integers" — infinitely many NUMBERS fit, but only $9$ whole ones.)',
    },
    {
      q: 'How many integers $x$ satisfy $|x + 4| \\le 6$?',
      choices: ['$11$', '$12$', '$13$', 'Infinitely many'],
      answer: 2,
      solution:
        'Rewrite the inside as $x - (-4)$: the inequality says $x$ is at most $6$ from $-4$, so $-10 \\le x \\le 2$. The sign is $\\le$, so BOTH endpoints count, and the tally is $2 - (-10) + 1 = 13$. Check a second, independent way by counting outward from the centre: $-4$ itself is one integer, and then $6$ integers to its left ($-5$ through $-10$) and $6$ to its right ($-3$ through $2$), giving $1 + 6 + 6 = 13$ ✓. (The choice $11$ is EXCLUDING THE INCLUDED ENDPOINTS, counting only $-9$ through $1$; the choice $12$ is COUNTING THE GAP INSTEAD OF THE INTEGERS, $2 - (-10)$; the choice Infinitely many ignores the word "integers".)',
    },
    {
      q: 'How many integers $x$ satisfy $|2x - 8| < 12$?',
      choices: ['$9$', '$13$', '$12$', '$11$'],
      answer: 3,
      solution:
        'Unwrap the bars into a double inequality: $-12 < 2x - 8 < 12$. Add $8$ throughout to get $-4 < 2x < 20$, then halve: $-2 < x < 10$. The endpoints are strict, so the integers run from $-1$ to $9$, and there are $9 - (-1) + 1 = 11$ of them. Check a second, independent way by pulling the $2$ out of the bars first: $|2x - 8| = 2|x - 4|$, so the inequality is $2|x - 4| < 12$, that is $|x - 4| < 6$ — every integer strictly within $6$ of $4$, which is $4$ itself plus $5$ on each side, $1 + 5 + 5 = 11$ ✓. (The choice $13$ is INCLUDING BOTH STRICT ENDPOINTS, counting $-2$ through $10$; the choice $12$ is COUNTING THE GAP INSTEAD OF THE INTEGERS, $10 - (-2)$; the choice $9$ counts only the POSITIVE integers $1$ through $9$, forgetting that $0$ and $-1$ satisfy the inequality too.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  sections: {
    '20.2': s202,
  },
}
