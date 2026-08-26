// Introduction to Algebra chapter 15 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so all of
//    the teaching lives in the solution. There are no `choices` keys here, and
//    no `answer` is a bare number.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way. For a sign question the second check is a test point taken from every
//    interval the answer names AND from every interval it rejects, so a flipped
//    sign cannot hide. For a minimum or maximum it is either the vertex shortcut
//    $x = -\frac{b}{2a}$ run against completing the square, or a symmetric pair
//    of inputs the same distance either side of the vertex, which must return
//    equal values on the far side of the claimed extreme.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    ask which values make an expression positive instead of solving a printed
//    inequality, count the integers in a shifted window, hand over the best area
//    and ask how much fence produced it.
//  - Four traps run through the file. THE STOLEN SIGN: the bracket $(x+9)$ has
//    its root at $x = -9$, and $-12x$ inside a square puts the vertex at
//    $x = +6$; the number you read is never the number you want. THE FORBIDDEN
//    POINT: a zero of a denominator is out of every answer, even under a $\le$,
//    while a zero of a numerator is welcome there. THE MYSTERY SIGN: clearing a
//    fraction by multiplying by something whose sign is unknown. THE WRONG
//    QUESTION: reporting WHERE an extreme happens when the value was asked for,
//    or the other way round.
//  - Every minimum and maximum here is checked for ATTAINABILITY: the solution
//    names the input that makes each square vanish and confirms nothing in the
//    problem forbids it, so the bound really is reached and not merely approached.

const worksheet = [
  // w1 — read the sign of a product of two linear factors. The middle variation
  //      switches to a non-strict inequality, the last hides a negative factor.
  [
    {
      q: 'Find every value of $x$ for which the product $(x+9)(x-4)$ is positive.',
      answer: '$x < -9$ or $x > 4$',
      solution:
        'The two factors are zero at $x = -9$ and $x = 4$, and those are the only places the product can switch sign. A product of two numbers is positive when they agree in sign, which happens on the two OUTSIDE pieces. Check one test point in each of the three pieces: at $x = -10$, $(-1)(-14) = 14 > 0$ ✓; at $x = 0$, $(9)(-4) = -36$, negative, so the middle piece is correctly rejected ✓; at $x = 5$, $(14)(1) = 14 > 0$ ✓. The word "positive" is strict, so the roots themselves — where the product is exactly $0$ — stay out. THE STOLEN SIGN is the trap: reading the roots as $9$ and $-4$ straight out of the brackets. Test $x = 9$: $(18)(5) = 90$, nowhere near zero ✗. The bracket $(x+9)$ vanishes when $x$ is $-9$.',
    },
    {
      q: 'For which values of $x$ is the product $(x-6)(x+2)$ zero or negative?',
      answer: '$-2 \\le x \\le 6$',
      solution:
        'The roots are $6$ and $-2$. A product of two factors is negative when the factors disagree in sign, which is exactly the piece BETWEEN the roots: for $-2 < x < 6$ the first factor is negative and the second is positive. Test $x = 0$: $(-6)(2) = -12 < 0$ ✓. Test outside both ways to be sure the other pieces really fail: at $x = 7$, $(1)(9) = 9 > 0$ ✓ rejected, and at $x = -3$, $(-9)(-1) = 9 > 0$ ✓ rejected. Now the boundary: the question allows ZERO as well as negative, and the product is exactly $0$ at $x = 6$ and at $x = -2$, so both endpoints are included: $-2 \\le x \\le 6$. The trap is keeping the strict brackets out of habit and writing $-2 < x < 6$, which throws away two perfectly good answers — at $x = 6$ the product is $0$, and $0$ is certainly "zero or negative" ✗.',
    },
    {
      q: 'Solve $(5-x)(x+1) > 0$.',
      answer: '$-1 < x < 5$',
      solution:
        'The factors vanish at $x = 5$ and $x = -1$, so those two numbers still chop the line into three pieces — but the first factor is written backwards, which flips the usual verdict. Walk the pieces with test points instead of trusting a rule: at $x = 0$, $(5)(1) = 5 > 0$ ✓; at $x = 6$, $(-1)(7) = -7 < 0$ ✓ rejected; at $x = -2$, $(7)(-1) = -7 < 0$ ✓ rejected. So the product is positive BETWEEN the roots: $-1 < x < 5$, endpoints excluded by the strict $>$. Check the shape a second way by rewriting: $(5-x)(x+1) = -(x-5)(x+1)$, and $(x-5)(x+1)$ is negative between its roots, so the negative of it is positive there ✓ — the same interval, reached without any test points. The trap is answering "outside the roots" because the problem looks like a plain product of two brackets. A leading minus turns the answer inside out; the test point at $x = 6$ settles it ✗.',
    },
  ],
  // w2 — factor first, then read the sign. The last variation has to be moved to
  //      one side before anything can be factored.
  [
    {
      q: 'Which values of $x$ make $x^2 - 11x + 24$ zero or negative?',
      answer: '$3 \\le x \\le 8$',
      solution:
        'Factor first: two numbers with product $24$ and sum $-11$ are $-3$ and $-8$, so $x^2 - 11x + 24 = (x-3)(x-8)$. The product is negative between the roots, and the question also allows zero, so the roots come along: $3 \\le x \\le 8$. Check with the original expression rather than the factored one, so a slip in the factoring cannot hide: at $x = 5$, $25 - 55 + 24 = -6$ ✓ inside; at $x = 2$, $4 - 22 + 24 = 6$, positive ✓ rejected; at $x = 9$, $81 - 99 + 24 = 6$, positive ✓ rejected; at the endpoint $x = 3$, $9 - 33 + 24 = 0$ ✓ included. The trap is factoring into $(x+3)(x+8)$, since $3 \\times 8 = 24$ looks right. Expand it and the middle term comes out $+11x$, the wrong sign ✗ — the signs of the two numbers have to give the middle term as well as the constant.',
    },
    {
      q: 'Solve $x^2 + 4x - 21 > 0$.',
      answer: '$x < -7$ or $x > 3$',
      solution:
        'Factor: two numbers with product $-21$ and sum $4$ are $7$ and $-3$, giving $(x+7)(x-3) > 0$ with roots $-7$ and $3$. A product is positive outside its roots, so $x < -7$ or $x > 3$, and the strict $>$ keeps the roots out. Check in the original expression on all three pieces: at $x = -8$, $64 - 32 - 21 = 11 > 0$ ✓; at $x = 0$, $-21 < 0$ ✓ rejected; at $x = 4$, $16 + 16 - 21 = 11 > 0$ ✓. The trap is answering with only the right-hand branch, $x > 3$, because that is the piece everyone thinks of first. The left branch is just as real: $x = -8$ gives $11$, which is every bit as positive ✗. A $>$ inequality on a factored quadratic almost always has two pieces.',
    },
    {
      q: 'Find all $x$ with $x^2 - 5x \\ge 14$.',
      answer: '$x \\le -2$ or $x \\ge 7$',
      solution:
        'Nothing can be factored while there is a $14$ on the right, so move it across first: $x^2 - 5x - 14 \\ge 0$. Two numbers with product $-14$ and sum $-5$ are $-7$ and $2$, so $(x-7)(x+2) \\ge 0$ with roots $7$ and $-2$. Positive outside the roots, and zero AT them, which a $\\ge$ welcomes: $x \\le -2$ or $x \\ge 7$. Check in the ORIGINAL inequality, which is the honest test: at $x = 8$, $64 - 40 = 24 \\ge 14$ ✓; at $x = -3$, $9 + 15 = 24 \\ge 14$ ✓; at $x = 0$, $0 \\ge 14$ is false ✓ rejected; at the endpoint $x = 7$, $49 - 35 = 14 \\ge 14$ ✓ included. The trap is factoring the left side as it stands and writing $x(x-5) \\ge 14$, then setting each factor equal to $14$. A product being at least $14$ says nothing about the individual factors — at $x = 8$ they are $8$ and $3$, neither of them $14$ ✗. Get zero on one side before you factor.',
    },
  ],
  // w3 — the sign of a fraction. The middle variation asks for the negative side,
  //      the last has the variable subtracted in the numerator.
  [
    {
      q: 'For which values of $x$ is the fraction $\\frac{x-7}{x+1}$ positive?',
      answer: '$x < -1$ or $x > 7$',
      solution:
        'A fraction has the same sign as the product of its top and bottom, so it is positive when the two agree in sign. The key points are $x = 7$ (top zero) and $x = -1$ (bottom zero). Both parts are positive when $x > 7$; both are negative when $x < -1$. Test all three pieces: at $x = 8$, $\\frac{1}{9} > 0$ ✓; at $x = 0$, $\\frac{-7}{1} = -7$ ✓ rejected; at $x = -2$, $\\frac{-9}{-1} = 9 > 0$ ✓. Neither boundary joins in — at $x = 7$ the fraction is $0$, which is not positive, and at $x = -1$ it is undefined. The trap is dropping the both-negative branch and answering only $x > 7$. Test $x = -5$: $\\frac{-12}{-4} = 3$, comfortably positive ✗. Two negatives divide to a positive just as surely as they multiply to one.',
    },
    {
      q: 'Solve $\\frac{x+6}{x-3} < 0$.',
      answer: '$-6 < x < 3$',
      solution:
        'The fraction is negative when its top and bottom disagree in sign, and the key points are $x = -6$ (top zero) and $x = 3$ (bottom zero). Between them the top is positive and the bottom is negative, so the fraction is negative there. Test every piece: at $x = 0$, $\\frac{6}{-3} = -2 < 0$ ✓; at $x = 4$, $\\frac{10}{1} = 10 > 0$ ✓ rejected; at $x = -7$, $\\frac{-1}{-10} = 0.1 > 0$ ✓ rejected. Both endpoints stay out, and for two different reasons: $x = -6$ makes the fraction $0$, which fails a strict $<$, and $x = 3$ makes it undefined. THE MYSTERY SIGN is the trap: multiplying both sides by $x - 3$ to get $x + 6 < 0$, hence $x < -6$. That answer is exactly wrong — test $x = -7$ above and the fraction is positive ✗ — because $x - 3$ is negative on the whole interval that matters, and multiplying by a negative flips the inequality.',
    },
    {
      q: 'Find every $x$ that makes $\\frac{4-x}{x+2}$ greater than $0$.',
      answer: '$-2 < x < 4$',
      solution:
        'The key points are $x = 4$, where the top is zero, and $x = -2$, where the bottom is zero and the fraction is undefined. The top is written backwards, so read the signs from test points rather than from habit: at $x = 0$, $\\frac{4}{2} = 2 > 0$ ✓; at $x = 5$, $\\frac{-1}{7} < 0$ ✓ rejected; at $x = -3$, $\\frac{7}{-1} = -7 < 0$ ✓ rejected. The fraction is positive on the middle piece: $-2 < x < 4$, both ends excluded. Check a second way by pulling out a minus: $\\frac{4-x}{x+2} = -\\frac{x-4}{x+2}$, and $\\frac{x-4}{x+2}$ is negative between $-2$ and $4$, so its negative is positive there ✓ — same interval, no test points needed. The trap is expecting the two-branch answer that a fraction usually gives. The backwards top flips the middle and the outside pieces, so this one is a single interval ✗ for any answer of the form "$x < a$ or $x > b$".',
    },
  ],
  // w4 — complete the square for a minimum. The middle variation has a leading
  //      coefficient, the last an odd middle coefficient and a fractional answer.
  [
    {
      q: 'What is the smallest value $x^2 + 14x + 60$ can take, and at what $x$ does it happen?',
      answer: 'Minimum value $11$, at $x = -7$',
      solution:
        'Complete the square: half of $14$ is $7$ and $7^2 = 49$, so $x^2 + 14x + 60 = (x^2 + 14x + 49) + 11 = (x+7)^2 + 11$. A square is never negative, so the expression is always at least $11$. That bound is genuinely reached, not merely approached: $(x+7)^2$ equals $0$ when $x = -7$, and nothing in the problem forbids that value, so the minimum $11$ really occurs. Check by substituting into the original: $49 - 98 + 60 = 11$ ✓. Check a second, independent way with a symmetric pair two units either side of $-7$: at $x = -5$, $25 - 70 + 60 = 15$, and at $x = -9$, $81 - 126 + 60 = 15$ ✓ — equal to each other, as a mirror image demands, and both above $11$ ✓. THE STOLEN SIGN is the trap: reporting the minimum at $x = 7$. Test it: $49 + 98 + 60 = 207$, nearly two hundred above the true floor ✗.',
    },
    {
      q: 'Find the minimum value of $3x^2 - 18x + 4$ and the value of $x$ where it occurs.',
      answer: 'Minimum value $-23$, at $x = 3$',
      solution:
        'Factor the $3$ out of the $x$-terms before completing the square: $3x^2 - 18x + 4 = 3(x^2 - 6x) + 4$. Half of $-6$ is $-3$, and $(-3)^2 = 9$, so $x^2 - 6x = (x-3)^2 - 9$, giving $3\\left[(x-3)^2 - 9\\right] + 4 = 3(x-3)^2 - 27 + 4 = 3(x-3)^2 - 23$. Since $3(x-3)^2 \\ge 0$, the expression is at least $-23$, and it equals $-23$ exactly when $x = 3$ — an ordinary number with no restriction on it, so the minimum is attained. Check in the original: $27 - 54 + 4 = -23$ ✓. Check with the vertex shortcut, which never touches the completed square: $x = -\\frac{-18}{2(3)} = 3$ ✓, and a symmetric pair confirms the floor — at $x = 1$, $3 - 18 + 4 = -11$, and at $x = 5$, $75 - 90 + 4 = -11$ ✓, equal and both above $-23$ ✓. The trap is forgetting that the $-9$ inside the bracket gets multiplied by $3$ on its way out and writing $3(x-3)^2 - 5$. Test at $x = 1$: that form reads $12 - 5 = 7$, not $-11$ ✗.',
    },
    {
      q: 'The expression $x^2 - 5x + 9$ has a smallest value. Find it, and find the $x$ that produces it.',
      answer: 'Minimum value $\\frac{11}{4}$, at $x = \\frac{5}{2}$',
      solution:
        'An odd middle coefficient does not change the method — the numbers simply stop being whole. Half of $-5$ is $-\\frac{5}{2}$, whose square is $\\frac{25}{4}$, so $x^2 - 5x + 9 = \\left(x - \\frac{5}{2}\\right)^2 - \\frac{25}{4} + 9 = \\left(x - \\frac{5}{2}\\right)^2 + \\frac{11}{4}$, since $-\\frac{25}{4} + \\frac{36}{4} = \\frac{11}{4}$. The square is never negative, and it hits $0$ at $x = \\frac{5}{2}$, a perfectly legal input, so the minimum $\\frac{11}{4}$ is reached there. Check in the original: $\\frac{25}{4} - \\frac{25}{2} + 9 = \\frac{25 - 50 + 36}{4} = \\frac{11}{4}$ ✓. Check with the shortcut and a symmetric pair: $x = -\\frac{-5}{2} = \\frac{5}{2}$ ✓, and at $x = 2$, $4 - 10 + 9 = 3$, while at $x = 3$, $9 - 15 + 9 = 3$ ✓ — equal, and both above $\\frac{11}{4} = 2.75$ ✓. The trap is squaring the whole $5$ and subtracting $25$. That would need a middle term of $-10x$: at $x = 2$ the correct square reads $\\frac{1}{4}$ while $(x-5)^2$ reads $9$ ✗.',
    },
  ],
  // w5 — count the integers in a window. The middle variation restricts to
  //      positive integers, the last shifts the window off centre.
  [
    {
      q: 'How many integers $n$ satisfy $n^2 \\le 50$?',
      answer: '$15$',
      solution:
        'The condition asks for $-\\sqrt{50} \\le n \\le \\sqrt{50}$, and $\\sqrt{50}$ sits between $7$ and $8$ because $49 < 50 < 64$; to two places $\\sqrt{50} \\approx 7.07$. So the integers that work run from $-7$ up to $7$. Count them without guessing: $7$ negatives, then $0$, then $7$ positives, giving $7 + 1 + 7 = 15$. Check the two edges by squaring rather than by rooting, which tests the count independently: $7^2 = 49 \\le 50$ ✓ so $7$ is in, and $8^2 = 64 > 50$ ✓ so $8$ is out; the same holds for $-7$ and $-8$ since squaring ignores the sign ✓. Two traps. Counting only the positives gives $7$, forgetting that $(-7)^2 = 49$ is just as small ✗. And subtracting the endpoints, $7 - (-7) = 14$, misses one: counting a run of whole numbers needs the $+1$ for the far end ✗.',
    },
    {
      q: 'How many positive integers $n$ have $n^2 \\le 150$?',
      answer: '$12$',
      solution:
        'Only positive integers count here, so the window starts at $1$ and the negatives never enter. We need $n \\le \\sqrt{150}$, and $\\sqrt{150}$ lies between $12$ and $13$ because $144 < 150 < 169$; to two places $\\sqrt{150} \\approx 12.25$. So $n$ runs from $1$ to $12$, which is $12$ integers. Check the boundary by squaring: $12^2 = 144 \\le 150$ ✓ in, and $13^2 = 169 > 150$ ✓ out. Check the count itself the plain way: the whole numbers from $1$ to $12$ number exactly $12$, with no zero to remember since $0$ is not positive ✓. The trap is answering $25$ by sweeping in $-12$ through $12$ out of habit. The problem says POSITIVE, so half the usual window and the number $0$ are both excluded ✗. Read the restriction before you count.',
    },
    {
      q: 'Count the integers $x$ for which $(x-2)^2 < 40$.',
      answer: '$13$',
      solution:
        'The square sits on $x - 2$, not on $x$, so the window is centred at $2$ instead of at $0$. The condition says $-\\sqrt{40} < x - 2 < \\sqrt{40}$, and $\\sqrt{40}$ is between $6$ and $7$ because $36 < 40 < 49$; to two places $\\sqrt{40} \\approx 6.32$. So $x - 2$ ranges over the integers $-6$ through $6$, which means $x$ runs from $-4$ to $8$. Counting a run of whole numbers: $8 - (-4) + 1 = 13$. Check both edges in the ORIGINAL inequality: at $x = 8$, $(6)^2 = 36 < 40$ ✓ in; at $x = 9$, $(7)^2 = 49$, too big ✓ out; at $x = -4$, $(-6)^2 = 36 < 40$ ✓ in; at $x = -5$, $(-7)^2 = 49$ ✓ out. The trap is centring on $0$ and answering with $-6$ through $6$. Test $x = -6$ there: $(-8)^2 = 64 > 40$ ✗ — that value is not a solution at all. Shift the whole window by $2$ and the count keeps its width but moves.',
    },
  ],
  // w6 — a downward parabola and its peak. The middle variation has a leading
  //      coefficient, the last is written with its terms in reverse order.
  [
    {
      q: 'What is the largest value of $y = -x^2 - 8x + 5$, and where does it occur?',
      answer: 'Maximum value $21$, at $x = -4$',
      solution:
        'Factor $-1$ out of the $x$-terms: $y = -(x^2 + 8x) + 5$. Half of $8$ is $4$ and $4^2 = 16$, so $x^2 + 8x = (x+4)^2 - 16$, giving $y = -\\left[(x+4)^2 - 16\\right] + 5 = -(x+4)^2 + 21$. The term $-(x+4)^2$ is never positive, so $y \\le 21$ always, and it equals $21$ when $x + 4 = 0$, that is at $x = -4$ — an unrestricted input, so the peak is genuinely reached. Check in the original: $-16 + 32 + 5 = 21$ ✓. Check with a symmetric pair two units either side: at $x = -2$, $-4 + 16 + 5 = 17$, and at $x = -6$, $-36 + 48 + 5 = 17$ ✓ — equal, and both below $21$ ✓. The trap is mishandling the minus while completing the square and writing $-(x+4)^2 - 11$, which would claim the graph never rises above $-11$. Test $x = -4$ in the original: $y = 21$, far above that ✗ — the $-16$ becomes $+16$ when the minus sign is distributed.',
    },
    {
      q: 'Find the maximum value of $y = -2x^2 + 12x - 7$ and the $x$ where it is reached.',
      answer: 'Maximum value $11$, at $x = 3$',
      solution:
        'Pull out the $-2$ from the $x$-terms: $y = -2(x^2 - 6x) - 7$. Half of $-6$ is $-3$ and $(-3)^2 = 9$, so $x^2 - 6x = (x-3)^2 - 9$ and $y = -2\\left[(x-3)^2 - 9\\right] - 7 = -2(x-3)^2 + 18 - 7 = -2(x-3)^2 + 11$. Since $-2(x-3)^2 \\le 0$, the height never exceeds $11$, and $11$ is attained at $x = 3$. Check in the original: $-18 + 36 - 7 = 11$ ✓. Check with the vertex shortcut, which uses none of that work: $x = -\\frac{12}{2(-2)} = 3$ ✓, and a symmetric pair seals it — at $x = 1$, $-2 + 12 - 7 = 3$, and at $x = 5$, $-50 + 60 - 7 = 3$ ✓, equal and both under $11$ ✓. THE WRONG QUESTION is the trap: answering $3$, which is WHERE the peak sits, not how high it is. The two numbers are different objects, and here they even look alike, since $y = 3$ happens to be the height at $x = 1$ and $x = 5$ ✗.',
    },
    {
      q: 'The graph of $y = 24x - 3x^2$ has a highest point. How high is it, and at what $x$?',
      answer: 'Maximum value $48$, at $x = 4$',
      solution:
        'Put the terms in the usual order first: $y = -3x^2 + 24x$. The leading coefficient is negative, so the parabola opens downward and its vertex is the highest point. Factor and complete the square: $y = -3(x^2 - 8x) = -3\\left[(x-4)^2 - 16\\right] = -3(x-4)^2 + 48$. The squared term only ever subtracts, so $y \\le 48$, with equality exactly at $x = 4$ ✓ attainable. Check in the original: $24(4) - 3(16) = 96 - 48 = 48$ ✓. Check a second way through the roots, which never mentions squares: $y = 3x(8 - x)$ is zero at $x = 0$ and $x = 8$, and a parabola is symmetric, so its vertex sits halfway between at $x = 4$ ✓. A symmetric pair agrees too: at $x = 2$, $48 - 12 = 36$, and at $x = 6$, $144 - 108 = 36$ ✓, equal and both below $48$ ✓. The trap is reading the coefficients off the printed order and computing $x = -\\frac{-3}{2(24)}$. Sort the powers before you use the shortcut: here $a = -3$ and $b = 24$ ✗ for any other pairing.',
    },
  ],
  // w7 — three linear factors and a sign chart. The middle variation has a bare
  //      $x$ as one factor, the last a factor with a coefficient.
  [
    {
      q: 'Solve $(x+3)(x-2)(x-6) > 0$.',
      answer: '$-3 < x < 2$ or $x > 6$',
      solution:
        'The roots are $-3$, $2$ and $6$, so there are four pieces to judge. On the far right every factor is positive, so the product is positive; crossing a root flips exactly one factor, so the sign alternates as you walk left: positive for $x > 6$, negative for $2 < x < 6$, positive for $-3 < x < 2$, negative for $x < -3$. Confirm each piece with a test point rather than trusting the pattern: at $x = 7$, $(10)(5)(1) = 50 > 0$ ✓; at $x = 3$, $(6)(1)(-3) = -18 < 0$ ✓ rejected; at $x = 0$, $(3)(-2)(-6) = 36 > 0$ ✓; at $x = -4$, $(-1)(-6)(-10) = -60 < 0$ ✓ rejected. The inequality is strict, so all three roots are excluded. The trap is expecting a single interval, the way a two-factor problem usually gives. Three roots make four pieces, and the positive ones are not next to each other ✗ for any one-interval answer.',
    },
    {
      q: 'For which values of $x$ is $x(x-5)(x+4)$ zero or negative?',
      answer: '$x \\le -4$ or $0 \\le x \\le 5$',
      solution:
        'The bare $x$ is a factor like any other, with its root at $0$; the full list of roots is $-4$, $0$ and $5$. On the far right all three factors are positive, and the sign alternates leftwards: positive for $x > 5$, negative for $0 < x < 5$, positive for $-4 < x < 0$, negative for $x < -4$. Test every piece: at $x = 6$, $(6)(1)(10) = 60 > 0$ ✓ rejected; at $x = 1$, $(1)(-4)(5) = -20 < 0$ ✓; at $x = -2$, $(-2)(-7)(2) = 28 > 0$ ✓ rejected; at $x = -5$, $(-5)(-10)(-1) = -50 < 0$ ✓. The question allows zero as well, so all three roots join in: $x \\le -4$ or $0 \\le x \\le 5$. The trap is dividing by $x$ to "simplify" down to $(x-5)(x+4) \\le 0$. You do not know the sign of $x$, so you do not know whether to flip the inequality — and that shortcut would hand back $-4 \\le x \\le 5$, which wrongly claims $x = -2$ works. Test it: $28 > 0$ ✗.',
    },
    {
      q: 'Find every $x$ with $(2x-1)(x+3)(x-4) \\ge 0$.',
      answer: '$-3 \\le x \\le \\frac{1}{2}$ or $x \\ge 4$',
      solution:
        'A coefficient in front of the $x$ changes where a factor is zero, not how it behaves: $2x - 1 = 0$ at $x = \\frac{1}{2}$. The three roots are $-3$, $\\frac{1}{2}$ and $4$. From the right, all factors positive, then alternating: positive for $x > 4$, negative for $\\frac{1}{2} < x < 4$, positive for $-3 < x < \\frac{1}{2}$, negative for $x < -3$. Test each: at $x = 5$, $(9)(8)(1) = 72 > 0$ ✓; at $x = 2$, $(3)(5)(-2) = -30 < 0$ ✓ rejected; at $x = -1$, $(-3)(2)(-5) = 30 > 0$ ✓; at $x = -4$, $(-9)(-1)(-8) = -72 < 0$ ✓ rejected. The $\\ge$ lets the roots in, so the answer is $-3 \\le x \\le \\frac{1}{2}$ or $x \\ge 4$. The trap is reading the root of $2x - 1$ as $1$ or as $2$. Test $x = 1$: $(1)(4)(-3) = -12 < 0$ ✗, so $1$ is not even a solution, let alone a boundary. Set the factor equal to zero and solve it properly.',
    },
  ],
  // w8 — a fraction inequality whose two endpoints behave differently. The last
  //      variation has to be rearranged before any sign analysis is possible.
  [
    {
      q: 'Solve $\\frac{x-8}{x+3} \\le 0$.',
      answer: '$-3 < x \\le 8$',
      solution:
        'The key points are $x = 8$, where the top is zero, and $x = -3$, where the bottom is zero. The fraction is negative where the top and bottom disagree in sign, which is between them. Test all three pieces: at $x = 0$, $\\frac{-8}{3} < 0$ ✓; at $x = 9$, $\\frac{1}{12} > 0$ ✓ rejected; at $x = -4$, $\\frac{-12}{-1} = 12 > 0$ ✓ rejected. Now the endpoints, and they part company: at $x = 8$ the fraction is $\\frac{0}{11} = 0$, and $0 \\le 0$ is true, so $8$ is IN; at $x = -3$ the fraction is undefined, so $-3$ is OUT no matter how friendly the inequality sign looks. The answer wears mismatched brackets: $-3 < x \\le 8$. THE FORBIDDEN POINT is the trap — writing $-3 \\le x \\le 8$ because the symbol is $\\le$. Substitute $x = -3$: the bottom is $0$, and dividing by zero produces no number at all, so there is nothing to compare with $0$ ✗.',
    },
    {
      q: 'For which values of $x$ is $\\frac{3x+2}{x-4}$ zero or positive?',
      answer: '$x \\le -\\frac{2}{3}$ or $x > 4$',
      solution:
        'Find the key points by setting each part to zero: $3x + 2 = 0$ gives $x = -\\frac{2}{3}$, and $x - 4 = 0$ gives $x = 4$. The fraction is positive when top and bottom agree in sign. Test each piece: at $x = 5$, $\\frac{17}{1} = 17 > 0$ ✓; at $x = 0$, $\\frac{2}{-4} = -0.5 < 0$ ✓ rejected; at $x = -1$, $\\frac{-1}{-5} = 0.2 > 0$ ✓. Endpoints: $x = -\\frac{2}{3}$ makes the top zero, and zero is allowed here, so it is IN; $x = 4$ makes the bottom zero, so it is OUT. The answer is $x \\le -\\frac{2}{3}$ or $x > 4$. The trap is reading the top-zero as $x = -2$ or $x = \\frac{2}{3}$. Test $x = -2$: $\\frac{-4}{-6} = \\frac{2}{3}$, which is not zero ✗. Solve $3x + 2 = 0$ in full — subtract, then divide by the $3$.',
    },
    {
      q: 'Solve $\\frac{x+1}{x-2} \\ge 3$.',
      answer: '$2 < x \\le \\frac{7}{2}$',
      solution:
        'Do not multiply by $x - 2$: its sign is unknown, so you would not know whether to flip the inequality. Subtract instead and combine over one denominator: $\\frac{x+1}{x-2} - 3 = \\frac{(x+1) - 3(x-2)}{x-2} = \\frac{x + 1 - 3x + 6}{x-2} = \\frac{7 - 2x}{x-2} \\ge 0$. The key points are $x = \\frac{7}{2}$ (top zero) and $x = 2$ (bottom zero). Test each piece: at $x = 3$, $\\frac{1}{1} = 1 > 0$ ✓; at $x = 4$, $\\frac{-1}{2} < 0$ ✓ rejected; at $x = 0$, $\\frac{7}{-2} < 0$ ✓ rejected. So the middle piece wins, with $\\frac{7}{2}$ included (top zero, allowed by $\\ge$) and $2$ excluded (undefined): $2 < x \\le \\frac{7}{2}$. Check both ends in the ORIGINAL inequality: at $x = \\frac{7}{2}$, $\\frac{4.5}{1.5} = 3 \\ge 3$ ✓, and just inside at $x = 3$, $\\frac{4}{1} = 4 \\ge 3$ ✓. THE MYSTERY SIGN is the trap: cross-multiplying to $x + 1 \\ge 3x - 6$ and answering $x \\le \\frac{7}{2}$, which wrongly sweeps in every negative number. Test $x = 0$: $\\frac{1}{-2} = -0.5$, nowhere near $3$ ✗.',
    },
  ],
  // w9 — fencing against a wall. The middle variation fences all four sides, and
  //      the last runs backwards from the best area to the length of fence.
  [
    {
      q: 'A rectangular chicken run is built against a straight garage wall, with $84$ meters of fencing making up the other three sides. What dimensions give the greatest area, and what is that area?',
      answer: '$21$ meters by $42$ meters, area $882$ square meters',
      solution:
        'The wall is free, so the fence pays for two sides running away from it plus one side parallel to it. Let $w$ be each side that meets the wall; the two of them use $2w$ meters, leaving $84 - 2w$ for the parallel side. The area is $A = w(84 - 2w)$, a downward parabola in $w$. Its roots are $w = 0$ and $w = 42$, and a parabola is symmetric, so the vertex sits halfway at $w = 21$. Then the long side is $84 - 42 = 42$ meters and the area is $21 \\times 42 = 882$ square meters. That value is attainable: $w = 21$ is a legal width, since it leaves a positive $42$ meters for the third side. Check the neighbours: $w = 20$ gives $20 \\times 44 = 880$, and $w = 22$ gives $22 \\times 40 = 880$ ✓ — equal to each other and both below $882$, exactly as a peak should look. Check the fence adds up: $21 + 21 + 42 = 84$ ✓. The trap is forcing a square, $21 \\times 21$, which uses only $63$ meters and encloses $441$ square meters — half the area, with fence left over ✗. A free side moves the best shape away from a square.',
    },
    {
      q: 'A rectangular garden is fenced on all four sides using $52$ meters of fencing. What dimensions enclose the greatest area, and what is that area?',
      answer: '$13$ meters by $13$ meters, area $169$ square meters',
      solution:
        'All four sides are paid for now, so the two widths and the two lengths together make $52$, which means one width plus one length is $26$. If the width is $w$, the length is $26 - w$ and the area is $A = w(26 - w)$. The roots are $w = 0$ and $w = 26$, so the vertex sits halfway at $w = 13$, giving a length of $26 - 13 = 13$ and an area of $13 \\times 13 = 169$ square meters. The best pen is a square, and it is attainable: $w = 13$ leaves a positive length. Check the neighbours: $w = 12$ gives $12 \\times 14 = 168$, and $w = 14$ gives $14 \\times 12 = 168$ ✓ — matched and both under $169$. Check the fence: $2(13) + 2(13) = 52$ ✓. The trap is halving the perimeter twice and starting from a width plus length of $13$, which quietly builds a pen out of only $26$ meters of fence. Test that shape, $6.5 \\times 6.5$: its area is $42.25$ square meters, a quarter of what you can have ✗. Halve the perimeter once to get width plus length.',
    },
    {
      q: 'A rectangular paddock uses a long stone wall as one side, and new fencing along the other three. Laid out to its best advantage the paddock covers $1152$ square meters. How many meters of fencing were used?',
      answer: '$96$ meters',
      solution:
        'Run the usual set-up with the fence length as a letter. Call it $F$: if each side meeting the wall is $w$, the parallel side is $F - 2w$ and the area is $A = w(F - 2w)$. The roots are $w = 0$ and $w = \\frac{F}{2}$, so the vertex sits halfway at $w = \\frac{F}{4}$, where the parallel side is $F - \\frac{F}{2} = \\frac{F}{2}$ and the best area is $\\frac{F}{4} \\cdot \\frac{F}{2} = \\frac{F^2}{8}$. Set that equal to the area we were given: $\\frac{F^2}{8} = 1152$, so $F^2 = 9216$ and $F = 96$ meters, taking the positive root since a length of fence cannot be negative. Check forwards, which is the honest test: with $96$ meters, $w = 24$, the parallel side is $96 - 48 = 48$, and the area is $24 \\times 48 = 1152$ ✓, using $24 + 24 + 48 = 96$ meters of fence ✓. Check that this really is the best layout for $96$ meters: $w = 23$ gives $23 \\times 50 = 1150$ and $w = 25$ gives $25 \\times 46 = 1150$ ✓, both smaller. The trap is treating the paddock as a square and setting $s^2 = 1152$. That gives $s \\approx 33.94$, not a whole number, and it would need three sides of about $101.8$ meters ✗ — a wall-backed paddock is twice as wide as it is deep, never square.',
    },
  ],
  // w10 — two variables, two squares. The last variation carries a coefficient on
  //       one of the squares.
  [
    {
      q: 'What is the smallest value of $x^2 + y^2 + 10x - 2y + 40$, and which $x$ and $y$ give it?',
      answer: 'Minimum value $14$, at $x = -5$, $y = 1$',
      solution:
        'Complete the square in each variable separately — they do not interfere with each other. Half of $10$ is $5$, so $x^2 + 10x = (x+5)^2 - 25$; half of $-2$ is $-1$, so $y^2 - 2y = (y-1)^2 - 1$. The expression becomes $(x+5)^2 + (y-1)^2 + 40 - 25 - 1 = (x+5)^2 + (y-1)^2 + 14$. Each square is at least $0$, so the whole thing is at least $14$. Both squares can be $0$ at the SAME time — take $x = -5$ and $y = 1$, and nothing in the problem ties the two variables together — so the bound is reached, not merely approached. Check in the original: $25 + 1 - 50 - 2 + 40 = 14$ ✓. Check that moving either variable only pushes the value up: $x = -4$ with $y = 1$ gives $16 + 1 - 40 - 2 + 40 = 15$ ✓, and $x = -5$ with $y = 2$ gives $25 + 4 - 50 - 4 + 40 = 15$ ✓. THE STOLEN SIGN is the trap: reporting the minimum at $x = 5$, $y = -1$. Test that point: $25 + 1 + 50 + 2 + 40 = 118$, more than a hundred above the floor ✗.',
    },
    {
      q: 'Find the minimum value of $x^2 + y^2 - 6x - 14y + 70$ and the point $(x, y)$ where it is reached.',
      answer: 'Minimum value $12$, at $x = 3$, $y = 7$',
      solution:
        'Handle one variable at a time. Half of $-6$ is $-3$, so $x^2 - 6x = (x-3)^2 - 9$; half of $-14$ is $-7$, so $y^2 - 14y = (y-7)^2 - 49$. Putting it together: $(x-3)^2 + (y-7)^2 + 70 - 9 - 49 = (x-3)^2 + (y-7)^2 + 12$. Both squares are at least $0$, so the expression is at least $12$, and both vanish together at $x = 3$, $y = 7$, which is an allowed choice, so $12$ is genuinely achieved. Check in the original: $9 + 49 - 18 - 98 + 70 = 12$ ✓. Check with a symmetric pair in each variable, which tests the two completions independently: $x = 1$ and $x = 5$ (both two from $3$) with $y = 7$ give $1 + 49 - 6 - 98 + 70 = 16$ and $25 + 49 - 30 - 98 + 70 = 16$ ✓ — equal, and both above $12$. The trap is running the constants the wrong way and writing $\\ldots + 70 + 9 + 49 = 128$. Whatever you build inside a square has to be handed straight back, not added twice; the value at $(3, 7)$ is $12$ ✗ for any larger claim.',
    },
    {
      q: 'Find the minimum value of $2x^2 + y^2 - 12x + 8y + 40$, and the $x$ and $y$ that achieve it.',
      answer: 'Minimum value $6$, at $x = 3$, $y = -4$',
      solution:
        'The $x$-part has a coefficient, so factor it out before completing that square: $2x^2 - 12x = 2(x^2 - 6x) = 2\\left[(x-3)^2 - 9\\right] = 2(x-3)^2 - 18$. The $y$-part is ordinary: $y^2 + 8y = (y+4)^2 - 16$. Together the expression is $2(x-3)^2 + (y+4)^2 + 40 - 18 - 16 = 2(x-3)^2 + (y+4)^2 + 6$. Doubling a square keeps it nonnegative, so both terms are at least $0$ and the total is at least $6$. Both vanish at once when $x = 3$ and $y = -4$, a legal pair, so the minimum $6$ is attained there. Check in the original: $2(9) + 16 - 36 - 32 + 40 = 18 + 16 - 36 - 32 + 40 = 6$ ✓. Check that each variable is at its best: $x = 4$ with $y = -4$ gives $32 + 16 - 48 - 32 + 40 = 8$ ✓, and $x = 3$ with $y = -3$ gives $18 + 9 - 36 - 24 + 40 = 7$ ✓, both above $6$. The trap is forgetting that the $-9$ gets doubled on its way out of the bracket and writing $\\ldots + 40 - 9 - 16 = 15$. Substituting $(3, -4)$ into the original gives $6$, not $15$ ✗.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 15,
  worksheet,
}
