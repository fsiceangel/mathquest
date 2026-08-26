// Introduction to Algebra chapter 15 — variations for sections 15.3 (The
// Trivial Inequality) and 15.4 (Quadratic Optimization).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text and then confirmed a SECOND,
//    INDEPENDENT way: the completed square is re-expanded, the claimed best
//    input is substituted into the ORIGINAL expression, or a neighbouring input
//    is tested to show it does worse. A check is never run at a point where both
//    routes collapse to the same trivial arithmetic.
//  - Every minimum or maximum names its equality point, and the equality point
//    is checked to be legal for the story: a fence width has to be positive, a
//    pair of numbers has to keep its stated sum or difference, and so on. A best
//    value that cannot be reached is not an answer.
//  - A variation changes the numbers AND, where it makes sense, the direction of
//    the question: ask WHERE the extreme happens instead of WHAT it is, hand
//    back the vertex and ask for a missing coefficient, ask for the dimensions
//    instead of the area.
//  - Six traps run through these two sections, and every distractor is one of
//    them, named in the solution with its wrong route worked out. THE WRONG
//    QUESTION: reporting where the extreme happens when the value was asked for,
//    or the value when the location was asked for. THE UNFLIPPED SHIFT:
//    $(x+h)^2$ vanishes at $-h$, not $+h$. THE FORGOTTEN CONSTANT: dropping the
//    trailing $+c$ after completing the square. THE UNSCALED CORRECTION: when a
//    leading coefficient is factored out first, the correction term must be
//    multiplied by it too. THE LAZY PLUG: testing $x = 0$ and calling the result
//    the minimum. THE PHANTOM FOURTH SIDE: fencing all four sides of a pen that
//    only needs three, or three when it needs four.
//  - No two choices inside an item name the same value, even written two ways.

const s153 = [
  // p1 — squares are never negative, so the impossible inequality has no
  //      solutions. v1 asks it as an equation, v2 flips to "which statement is
  //      always true", v3 puts the minus sign in front of the square.
  [
    {
      q: 'Maya is hunting for a real number $n$ with $n^2 = -4$. How many such real numbers are there?',
      choices: ['None', 'One', 'Two', 'Infinitely many'],
      answer: 0,
      solution:
        'The Trivial Inequality says $n^2 \\ge 0$ for every real number $n$: a positive times a positive is positive, a negative times a negative is also positive, and $0^2 = 0$. A number that is never below $0$ can certainly never equal $-4$, so Maya will search forever and find nothing. Check a second way by scanning both directions from zero: $n = 2$ gives $4$, $n = -2$ gives $4$, $n = 0.1$ gives $0.01$ — every attempt lands at or above $0$, never below ✗. (The choice "Two" comes from remembering that $n^2 = 4$ has the two solutions $\\pm 2$ and copying the count across without noticing the minus sign ✗. "One" would need a lone special number that squares to a negative, and no real number does ✗.)',
    },
    {
      q: 'Which statement is true for EVERY real number $t$?',
      choices: ['$t^2 > 0$', '$t^2 \\ge 0$', '$t^2 > t$', '$t^2 \\ge 1$'],
      answer: 1,
      solution:
        'The Trivial Inequality is $t^2 \\ge 0$, and the $\\ge$ is doing real work: equality happens at $t = 0$, which is a legal value of $t$, so the statement with the strict $>$ is false. Check the three losers with a single counterexample each. At $t = 0$: $t^2 = 0$, and $0 > 0$ is false ✗, while $0 \\ge 1$ is false ✗. At $t = 1$: $t^2 = 1$ and $t = 1$, so $t^2 > t$ says $1 > 1$, false ✗. Only $t^2 \\ge 0$ survives every test, and it survives all of them.',
    },
    {
      q: 'For how many real numbers $w$ is $-w^2$ a positive number?',
      choices: ['Infinitely many', 'Exactly one', 'None', 'Only the negative values of $w$'],
      answer: 2,
      solution:
        'Since $w^2 \\ge 0$ always, putting a minus sign in front reverses it: $-w^2 \\le 0$ for every real $w$. So $-w^2$ is never positive; the best it ever does is hit $0$, which happens at $w = 0$. Check a second way by trying both signs of $w$: $w = 3$ gives $-9$, and $w = -3$ gives $-(-3)^2 = -9$ as well ✗. (The choice "Only the negative values of $w$" is the trap: squaring destroys the sign of $w$ BEFORE the minus sign is applied, so a negative $w$ behaves exactly like its positive twin ✗. "Exactly one" would be right if the question asked when $-w^2$ equals $0$, which it does not ✗.)',
    },
  ],
  // p2 — the least value of a bare square is 0, reached at the shift. v2 asks
  //      for the location instead, v3 puts a positive coefficient in front.
  [
    {
      q: 'What is the least value that $(t + 9)^2$ can take?',
      choices: ['$0$', '$9$', '$-9$', '$81$'],
      answer: 0,
      solution:
        'A square is never negative, so $(t+9)^2 \\ge 0$. That floor is reachable: set $t + 9 = 0$, that is $t = -9$, and the expression becomes $0^2 = 0$. Since the floor is attained, $0$ really is the minimum. Check a second way by testing neighbours of $t = -9$: $t = -10$ gives $(-1)^2 = 1$ and $t = -8$ gives $1^2 = 1$, both above $0$ ✓. (THE LAZY PLUG gives $81$: that is the value at $t = 0$, a habit spot rather than the best spot ✗. THE UNFLIPPED SHIFT and THE WRONG QUESTION combine to give $-9$, which is WHERE the minimum happens, not the minimum ✗. The choice $9$ just reads the number inside the parentheses ✗.)',
    },
    {
      q: 'For which value of $n$ is $(n - 12)^2$ as small as it can be?',
      choices: ['$n = 0$', '$n = -12$', '$n = 12$', '$n = 144$'],
      answer: 2,
      solution:
        'This question asks WHERE, not what. The square bottoms out at $0$, and it gets there exactly when the inside is $0$: $n - 12 = 0$, so $n = 12$. Check a second way by comparing values on both sides: at $n = 12$ the expression is $0$, at $n = 11$ it is $1$, and at $n = 13$ it is $1$ — the dip is at $12$ ✓. (THE UNFLIPPED SHIFT gives $n = -12$, but $(-12-12)^2 = 576$, which is enormous ✗. THE LAZY PLUG gives $n = 0$, worth $144$ ✗. The choice $n = 144$ squares the shift instead of using it ✗.)',
    },
    {
      q: 'What is the smallest possible value of $3(x - 4)^2$?',
      choices: ['$3$', '$4$', '$12$', '$0$'],
      answer: 3,
      solution:
        'The square $(x-4)^2$ is at least $0$, and multiplying a number that is at least $0$ by the positive constant $3$ keeps it at least $0$. Equality needs $x - 4 = 0$, that is $x = 4$, which is a perfectly ordinary real number, so the value $3 \\cdot 0 = 0$ is genuinely reached. Check a second way at a neighbour: $x = 5$ gives $3(1)^2 = 3$, comfortably above $0$ ✓. (The choice $3$ reads off the coefficient, which is what the expression is worth one unit away from the vertex, not at it ✗. The choice $4$ is WHERE the minimum sits ✗. The choice $12$ comes from multiplying the coefficient by the shift, $3 \\times 4$, which is not part of any correct route ✗.)',
    },
  ],
  // p3 — square plus a constant: the constant is the minimum. v3 adds a leading
  //      coefficient on the square so the "add them up" slip has a target.
  [
    {
      q: 'What is the minimum value of $y^2 + 15$?',
      choices: ['$0$', '$15$', '$-15$', '$225$'],
      answer: 1,
      solution:
        'Since $y^2 \\ge 0$, adding $15$ to both sides gives $y^2 + 15 \\ge 15$. Equality needs $y^2 = 0$, so $y = 0$ — an allowed value, so the floor is reached and $15$ is the true minimum. Check a second way at neighbours: $y = 1$ gives $16$ and $y = -1$ gives $16$, both above $15$ ✓. (The choice $0$ is the minimum of the square alone, forgetting that the $+15$ comes along for the ride ✗. The choice $-15$ flips a sign that was never negative ✗. The choice $225$ is $15^2$, squaring the constant instead of adding it ✗.)',
    },
    {
      q: 'The expression $x^2 - 6$ is always at least what number?',
      choices: ['$0$', '$6$', '$-6$', '$36$'],
      answer: 2,
      solution:
        'Start from $x^2 \\ge 0$ and subtract $6$ from both sides: $x^2 - 6 \\ge -6$. The floor is reached at $x = 0$, where the expression is exactly $0 - 6 = -6$. Check a second way by stepping away: $x = 2$ gives $4 - 6 = -2$, and $x = -2$ gives $-2$ as well — both above $-6$ ✓. (The choice $0$ forgets that subtracting $6$ pushes the floor below zero ✗. The choice $6$ drops the minus sign ✗. The choice $36$ squares the $6$ instead of subtracting it ✗.)',
    },
    {
      q: 'What is the smallest value of $4x^2 + 11$?',
      choices: ['$0$', '$4$', '$15$', '$11$'],
      answer: 3,
      solution:
        'Because $x^2 \\ge 0$ and $4$ is positive, $4x^2 \\ge 0$ too, so $4x^2 + 11 \\ge 11$. Equality needs $x = 0$, which is allowed, so $11$ is reached. Check a second way at a neighbour: $x = 1$ gives $4 + 11 = 15$, above $11$ ✓, and $x = -1$ gives $15$ as well. (The choice $15$ is exactly that neighbour value, and it also matches the slip of ADDING the coefficient to the constant, $4 + 11$ ✗. The choice $4$ mistakes the coefficient for the floor ✗. The choice $0$ is the minimum of $4x^2$ by itself, with the $+11$ left behind ✗.)',
    },
  ],
  // p4 — vertex form with a subtracted constant: the classic "value vs.
  //      location" split. v2 asks for both at once, v3 hides the shift inside a
  //      doubled linear expression.
  [
    {
      q: 'What is the minimum value of $(x - 7)^2 - 10$?',
      choices: ['$-10$', '$7$', '$-7$', '$39$'],
      answer: 0,
      solution:
        'The square is at least $0$, so the whole expression is at least $0 - 10 = -10$. Equality needs $x - 7 = 0$, so $x = 7$; substituting into the original gives $0 - 10 = -10$ ✓, so the floor is reached. Check a second way at a neighbour: $x = 8$ gives $1 - 10 = -9$, above $-10$ ✓. (THE WRONG QUESTION gives $7$, the location rather than the value ✗. THE LAZY PLUG gives $39$: at $x = 0$ the expression is $49 - 10 = 39$ ✗. The choice $-7$ mixes the location with the minus sign from the constant ✗.)',
    },
    {
      q: 'Where does $(x + 11)^2 - 4$ reach its minimum, and what is that minimum?',
      choices: [
        '$x = 11$, value $-4$',
        '$x = -11$, value $-4$',
        '$x = -11$, value $121$',
        '$x = -4$, value $-11$',
      ],
      answer: 1,
      solution:
        'Two answers are needed here. The square vanishes when $x + 11 = 0$, so the location is $x = -11$; there the expression equals $0 - 4 = -4$, and the square can never contribute less than $0$, so $-4$ is the minimum value. Check a second way in the original expression at $x = -11$: $(-11 + 11)^2 - 4 = 0 - 4 = -4$ ✓, and at $x = -12$ it is $1 - 4 = -3$, higher ✓. (THE UNFLIPPED SHIFT gives $x = 11$, where the expression is $22^2 - 4 = 480$ ✗. The pairing with value $121$ comes from treating the shift squared, $11^2$, as the minimum of the square ✗. The last pairing simply swaps the two answers with each other ✗.)',
    },
    {
      q: 'What is the minimum value of $(2x - 6)^2 - 5$?',
      choices: ['$-11$', '$3$', '$31$', '$-5$'],
      answer: 3,
      solution:
        'It is still a square plus a constant, so the square is at least $0$ and the expression is at least $-5$. The floor is reachable: $2x - 6 = 0$ gives $x = 3$, and then the expression is $0 - 5 = -5$ ✓. Check a second way at a neighbour: $x = 4$ gives $(2)^2 - 5 = -1$, above $-5$ ✓. (The choice $3$ is THE WRONG QUESTION — that is where the minimum sits ✗. THE LAZY PLUG gives $31$: at $x = 0$ the expression is $36 - 5 = 31$ ✗. The choice $-11$ comes from reading the $-6$ inside the square as the square’s smallest contribution and computing $-6 - 5$ ✗.)',
    },
  ],
  // p5 — complete the square on a monic quadratic and report the minimum value.
  [
    {
      q: 'What is the minimum value of $x^2 - 8x + 21$?',
      choices: ['$21$', '$4$', '$5$', '$-4$'],
      answer: 2,
      solution:
        'Half of $-8$ is $-4$, and $(-4)^2 = 16$, so $x^2 - 8x + 21 = (x^2 - 8x + 16) + 5 = (x-4)^2 + 5$. The square is at least $0$ and equals $0$ at $x = 4$, so the minimum value is $5$ and it is reached. Check a second way in the original expression: $16 - 32 + 21 = 5$ ✓, while the neighbour $x = 5$ gives $25 - 40 + 21 = 6$, higher ✓. (The choice $4$ is THE WRONG QUESTION, the location ✗. THE LAZY PLUG gives $21$, the value at $x = 0$ ✗. The choice $-4$ is the halved coefficient itself ✗.)',
    },
    {
      q: 'What is the smallest value of $x^2 + 14x + 50$?',
      choices: ['$50$', '$-7$', '$7$', '$1$'],
      answer: 3,
      solution:
        'Half of $14$ is $7$ and $7^2 = 49$, so $x^2 + 14x + 50 = (x^2 + 14x + 49) + 1 = (x+7)^2 + 1$. The square is at least $0$, with equality at $x = -7$, so the minimum value is $1$. Check a second way in the original expression: $49 - 98 + 50 = 1$ ✓, and the neighbour $x = -6$ gives $36 - 84 + 50 = 2$, higher ✓. (THE WRONG QUESTION plus THE UNFLIPPED SHIFT produce $-7$ and $7$: the first is where the minimum happens, the second is that location with its sign dropped ✗. THE LAZY PLUG gives $50$ ✗.)',
    },
    {
      q: 'A number $x$ is picked and the quantity $x^2 - 2x + 10$ is computed. What is the smallest result possible?',
      choices: ['$9$', '$10$', '$1$', '$-1$'],
      answer: 0,
      solution:
        'Complete the square: half of $-2$ is $-1$ and $(-1)^2 = 1$, so $x^2 - 2x + 10 = (x^2 - 2x + 1) + 9 = (x-1)^2 + 9$. The square is at least $0$ and hits $0$ at $x = 1$, so the smallest result is $9$. Check a second way in the original expression: $1 - 2 + 10 = 9$ ✓, and $x = 2$ gives $4 - 4 + 10 = 10$, higher ✓. (THE LAZY PLUG gives $10$, the value at $x = 0$ — which happens to be the constant term, making it a very tempting wrong answer ✗. The choices $1$ and $-1$ are the location and its sign flip, not values ✗.)',
    },
  ],
  // p6 — this one asks WHERE. v3 reverses the machine: the vertex is given and
  //      the missing coefficient is wanted.
  [
    {
      q: 'At what value of $x$ does $x^2 - 12x + 40$ reach its minimum?',
      choices: ['$x = -6$', '$x = 6$', '$x = 12$', '$x = 4$'],
      answer: 1,
      solution:
        'Half of $-12$ is $-6$, and $(-6)^2 = 36$, so $x^2 - 12x + 40 = (x-6)^2 + 4$. The square vanishes when $x - 6 = 0$, so the minimum sits at $x = 6$. Check a second way by comparing values in the original expression: at $x = 6$ it is $36 - 72 + 40 = 4$; at $x = 5$ it is $25 - 60 + 40 = 5$; at $x = 7$ it is $49 - 84 + 40 = 5$. The dip is at $6$ ✓. (THE UNFLIPPED SHIFT gives $x = -6$, where the expression is $36 + 72 + 40 = 148$ ✗. The choice $x = 12$ forgets to halve ✗. The choice $x = 4$ is THE WRONG QUESTION — that is the minimum VALUE ✗.)',
    },
    {
      q: 'The expression $x^2 + 20x + 107$ is smallest at which value of $x$?',
      choices: ['$x = -10$', '$x = 10$', '$x = -20$', '$x = 7$'],
      answer: 0,
      solution:
        'Half of $20$ is $10$ and $10^2 = 100$, so $x^2 + 20x + 107 = (x+10)^2 + 7$. The square is $0$ exactly when $x + 10 = 0$, that is $x = -10$. Check a second way in the original expression: at $x = -10$ it is $100 - 200 + 107 = 7$; at $x = -9$ it is $81 - 180 + 107 = 8$; at $x = -11$ it is $121 - 220 + 107 = 8$ ✓. (THE UNFLIPPED SHIFT gives $x = 10$, worth $100 + 200 + 107 = 407$ ✗. The choice $x = -20$ skips the halving ✗. The choice $x = 7$ is the minimum VALUE, not the place ✗.)',
    },
    {
      q: 'The expression $x^2 + bx + 25$ reaches its minimum at $x = -4$. What is $b$?',
      choices: ['$-8$', '$-4$', '$8$', '$4$'],
      answer: 2,
      solution:
        'Run the vertex rule backwards. For $x^2 + bx + 25$ the minimum sits at $x = -\\frac{b}{2}$, and we are told that place is $-4$, so $-\\frac{b}{2} = -4$ and $b = 8$. Check a second way by building the expression and re-expanding: with $b = 8$ we get $x^2 + 8x + 25 = (x+4)^2 + 9$, whose square vanishes at $x = -4$ ✓, and the values $x = -5$ and $x = -3$ both give $10$, straddling the minimum $9$ ✓. (The choice $-8$ keeps the minus sign that the halving rule already used up: $b = -8$ would put the minimum at $x = 4$ ✗. The choice $4$ forgets the doubling ✗, and $-4$ just copies the location into the answer ✗.)',
    },
  ],
  // p7 — a square plus a positive constant never reaches 0. v2 hands over the
  //      constant as the unknown, v3 asks for the always-positive expression.
  [
    {
      q: 'Which of these equations cannot be satisfied by any real number $x$?',
      choices: ['$x^2 - 6x + 8 = 0$', '$x^2 - 7 = 0$', '$x^2 + 2x + 6 = 0$', '$x^2 + 9x = 0$'],
      answer: 2,
      solution:
        'Complete the square on the third one: $x^2 + 2x + 6 = (x+1)^2 + 5$. A square is at least $0$, so this is at least $5$ — it never comes near $0$, and the equation has no real solutions. Check a second way by solving the other three, which shows they all do have solutions: $x^2 - 6x + 8 = (x-2)(x-4)$, so $x = 2$ or $x = 4$ ✗; $x^2 - 7 = 0$ gives $x = \\pm\\sqrt{7}$, and $\\sqrt{7} \\approx 2.646$ ✗; $x^2 + 9x = x(x+9)$, so $x = 0$ or $x = -9$ ✗. Only the completed square with a positive leftover is impossible.',
    },
    {
      q: 'For which value of $k$ does the equation $x^2 - 8x + k = 0$ have NO real solutions?',
      choices: ['$k = 0$', '$k = 12$', '$k = 16$', '$k = 20$'],
      answer: 3,
      solution:
        'Complete the square once, with $k$ along for the ride: $x^2 - 8x + k = (x-4)^2 + k - 16$. The smallest this can ever be is $k - 16$, reached at $x = 4$. For the equation to be unsolvable we need that floor to sit strictly above $0$, so $k > 16$; among the choices only $k = 20$ qualifies, leaving $(x-4)^2 + 4 \\ge 4$. Check a second way by solving each of the others: $k = 0$ gives $x(x-8) = 0$, so $x = 0$ or $x = 8$ ✗; $k = 12$ gives $(x-4)^2 = 4$, so $x = 2$ or $x = 6$ ✗; $k = 16$ gives $(x-4)^2 = 0$, the single solution $x = 4$ ✗ — that is the borderline case, where the floor touches $0$ exactly instead of clearing it.',
    },
    {
      q: 'Which expression is positive for EVERY real number $x$?',
      choices: ['$x^2 - 9$', '$x^2 + 6x + 13$', '$x^2 + 6x$', '$x^2 - 2x + 1$'],
      answer: 1,
      solution:
        'Complete the square on the second one: $x^2 + 6x + 13 = (x+3)^2 + 4 \\ge 4$, which is always strictly positive. Check a second way by knocking out the others with one input each. At $x = 0$, $x^2 - 9 = -9$, negative ✗. At $x = -1$, $x^2 + 6x = 1 - 6 = -5$, negative ✗. And $x^2 - 2x + 1 = (x-1)^2$, which is $0$ at $x = 1$ — never negative, but not POSITIVE either, so it fails the "every $x$" test by exactly one point ✗. That last one is the trap worth remembering: $\\ge 0$ and $> 0$ are different promises.',
    },
  ],
  // p8 — recognizing a perfect-square trinomial in two variables.
  [
    {
      q: 'For real numbers $p$ and $q$, what is the smallest possible value of $p^2 + 2pq + q^2$?',
      choices: ['It can be any negative number', '$-1$', '$2$', '$0$'],
      answer: 3,
      solution:
        'The expression is a perfect square: $p^2 + 2pq + q^2 = (p+q)^2$. By the Trivial Inequality it is at least $0$, and the floor is reachable — take any pair with $q = -p$, for instance $p = 1$ and $q = -1$: then $1 - 2 + 1 = 0$ ✓. Check a second way with a different equality pair, $p = 5$ and $q = -5$: $25 - 50 + 25 = 0$ ✓, while $p = 5$, $q = -4$ gives $25 - 40 + 16 = 1$, above the floor ✓. (The choice "It can be any negative number" ignores that the whole thing is a single square ✗. The choices $-1$ and $2$ are values the expression can never fall to, since it never dips below $0$ ✗ — and $2$ is not even a floor, since $0$ is available.)',
    },
    {
      q: 'The inequality $a^2 + b^2 \\ge 2ab$ holds for all real $a$ and $b$. For which pairs does equality hold?',
      choices: ['When $a = b$', 'When $a = -b$', 'When $a$ and $b$ are both $0$, and only then', 'Never'],
      answer: 0,
      solution:
        'Move everything to one side: $a^2 + b^2 - 2ab = (a-b)^2$. The inequality is just the statement that this square is at least $0$, so equality means $(a-b)^2 = 0$, that is $a = b$. Check a second way with numbers. Equal pair $a = b = 3$: the left side is $9 + 9 = 18$ and the right side is $2 \\cdot 9 = 18$ ✓ equal. Opposite pair $a = 3$, $b = -3$: left is $18$, right is $-18$, nowhere near equal ✗. So "when $a = -b$" is wrong ✗, "never" is refuted by the pair $(3,3)$ ✗, and "both $0$" is far too narrow — it is one equality pair among infinitely many ✗.',
    },
    {
      q: 'For real numbers $x$ and $y$, what is the smallest possible value of $x^2 + y^2 - 2xy + 3$?',
      choices: ['$-3$', '$3$', '$0$', '$1$'],
      answer: 1,
      solution:
        'Group the first three terms: $x^2 - 2xy + y^2 = (x-y)^2$, so the expression is $(x-y)^2 + 3$. A square is at least $0$, so the expression is at least $3$, and equality needs $x = y$ — an easy condition to meet, so the floor is genuinely reached. Check a second way with $x = y = 4$ in the original expression: $16 + 16 - 32 + 3 = 3$ ✓, and with $x = 4$, $y = 5$: $16 + 25 - 40 + 3 = 4$, above the floor ✓. (The choice $0$ is the minimum of the square alone, with the $+3$ forgotten ✗. The choice $-3$ flips a sign that is not negative ✗. The choice $1$ is not attainable, since the expression never drops below $3$ ✗.)',
    },
  ],
  // p9 — two independent squares plus a constant. v2 asks for the point, v3 puts
  //      a coefficient on one square.
  [
    {
      q: 'What is the smallest value of $(a + 6)^2 + (b - 1)^2 + 12$?',
      choices: ['$0$', '$-12$', '$19$', '$12$'],
      answer: 3,
      solution:
        'Each square is separately at least $0$, so the sum is at least $0 + 0 + 12 = 12$. The two variables do not interfere with each other, so both squares can vanish at once: take $a = -6$ and $b = 1$. Then the expression is $0 + 0 + 12 = 12$ ✓, so the floor is attained. Check a second way one step away: $a = -5$, $b = 1$ gives $1 + 0 + 12 = 13$, and $a = -6$, $b = 2$ gives $0 + 1 + 12 = 13$ ✓ — both directions climb. (The choice $0$ forgets the $+12$ ✗. The choice $-12$ flips its sign ✗. The choice $19$ comes from adding the two shifts to the constant, $12 + 6 + 1$, instead of letting the squares vanish ✗.)',
    },
    {
      q: 'The expression $(x - 3)^2 + (y + 8)^2 + 5$ has minimum value $5$. At which point $(x, y)$ does that happen?',
      choices: ['$(-3, 8)$', '$(3, 8)$', '$(3, -8)$', '$(0, 0)$'],
      answer: 2,
      solution:
        'The minimum arrives when both squares are $0$ at the same time. That needs $x - 3 = 0$ and $y + 8 = 0$, so the point is $(3, -8)$. Check a second way by substituting it into the expression: $(3-3)^2 + (-8+8)^2 + 5 = 0 + 0 + 5 = 5$ ✓, which matches the stated minimum. Test a rival too: $(3, 8)$ gives $0 + 256 + 5 = 261$ ✗, far from $5$. (THE UNFLIPPED SHIFT is the whole game here: $(-3, 8)$ copies both signs straight off the page ✗, and $(3,8)$ fixes only the first ✗. THE LAZY PLUG gives $(0,0)$, worth $9 + 64 + 5 = 78$ ✗.)',
    },
    {
      q: 'What is the smallest possible value of $2(x - 1)^2 + (y + 4)^2 - 6$?',
      choices: ['$-6$', '$-4$', '$6$', '$12$'],
      answer: 0,
      solution:
        'Both squares are at least $0$, and doubling the first one keeps it at least $0$, so the expression is at least $0 + 0 - 6 = -6$. Both squares vanish together at $x = 1$, $y = -4$, giving exactly $-6$ ✓, so the floor is reached. Check a second way at a neighbour: $x = 2$, $y = -4$ gives $2(1) + 0 - 6 = -4$, above the floor ✓. (That neighbour value $-4$ is one of the choices, and it is also the $y$-coordinate of the best point — a doubly tempting wrong answer ✗. The choice $6$ drops the minus sign ✗. THE LAZY PLUG gives $12$: at $x = 0$, $y = 0$ the expression is $2 + 16 - 6 = 12$ ✗.)',
    },
  ],
  // p10 — complete the square in two variables at once. v2 asks for the point.
  [
    {
      q: 'What is the minimum value of $x^2 + y^2 + 8x - 2y + 25$?',
      choices: ['$25$', '$9$', '$8$', '$24$'],
      answer: 2,
      solution:
        'Complete the square in each variable separately: $x^2 + 8x = (x+4)^2 - 16$ and $y^2 - 2y = (y-1)^2 - 1$. So the expression equals $(x+4)^2 + (y-1)^2 + 25 - 16 - 1 = (x+4)^2 + (y-1)^2 + 8$. Both squares vanish at once at $x = -4$, $y = 1$, so the minimum $8$ is attained. Check a second way in the ORIGINAL expression at that point: $16 + 1 - 32 - 2 + 25 = 8$ ✓, and at $x = -3$, $y = 1$: $9 + 1 - 24 - 2 + 25 = 9$, higher ✓. (The choice $9$ applies only the $x$-correction, $25 - 16$ ✗. The choice $24$ applies only the $y$-correction, $25 - 1$ ✗. The choice $25$ drops both corrections ✗.)',
    },
    {
      q: 'At which point $(x, y)$ is $x^2 + y^2 - 10x + 6y + 40$ smallest?',
      choices: ['$(-5, 3)$', '$(5, -3)$', '$(5, 3)$', '$(-5, -3)$'],
      answer: 1,
      solution:
        'Complete the square in each variable: $x^2 - 10x = (x-5)^2 - 25$ and $y^2 + 6y = (y+3)^2 - 9$, so the expression is $(x-5)^2 + (y+3)^2 + 40 - 25 - 9 = (x-5)^2 + (y+3)^2 + 6$. Both squares vanish at $x = 5$, $y = -3$. Check a second way in the original expression: at $(5,-3)$ it is $25 + 9 - 50 - 18 + 40 = 6$ ✓, the promised leftover, while at the rival $(5,3)$ it is $25 + 9 - 50 + 18 + 40 = 42$ ✗. (THE UNFLIPPED SHIFT supplies all three wrong points: $(-5,3)$ reverses both coordinates ✗, and $(5,3)$ and $(-5,-3)$ each reverse exactly one ✗.)',
    },
    {
      q: 'What is the least value of $x^2 + y^2 - 2x - 8y + 21$?',
      choices: ['$21$', '$20$', '$5$', '$4$'],
      answer: 3,
      solution:
        'Complete the square twice: $x^2 - 2x = (x-1)^2 - 1$ and $y^2 - 8y = (y-4)^2 - 16$, so the expression equals $(x-1)^2 + (y-4)^2 + 21 - 1 - 16 = (x-1)^2 + (y-4)^2 + 4$. Both squares can be $0$ together at $x = 1$, $y = 4$, so the least value $4$ is reached. Check a second way in the original expression: $1 + 16 - 2 - 32 + 21 = 4$ ✓, and at $x = 1$, $y = 5$: $1 + 25 - 2 - 40 + 21 = 5$, higher ✓. (The choice $20$ applies only the $x$-correction, $21 - 1$ ✗. The choice $5$ applies only the $y$-correction, $21 - 16$ ✗. The choice $21$ drops both ✗.)',
    },
  ],
]

const s154 = [
  // p1 — read the minimum straight off vertex form. v2 asks for the vertex
  //      point, v3 puts a coefficient in front of the square.
  [
    {
      q: 'What is the minimum value of $y = (x + 7)^2 + 3$?',
      choices: ['$7$', '$3$', '$-7$', '$10$'],
      answer: 1,
      solution:
        'This is already in vertex form $y = a(x-h)^2 + k$ with $a = 1 > 0$, so the parabola opens upward and $k = 3$ is the minimum. It is attained at $x = -7$, where the square is $0$: $y = 0 + 3 = 3$ ✓. Check a second way at a neighbour: $x = -6$ gives $1 + 3 = 4$, above $3$ ✓. (THE WRONG QUESTION plus THE UNFLIPPED SHIFT give $-7$ and $7$: the first is where the minimum happens, the second is that place with the wrong sign ✗. The choice $10$ adds the shift to the constant, $7 + 3$ ✗.)',
    },
    {
      q: 'The graph of $y = (x - 6)^2 + 2$ is a parabola. What are the coordinates of its lowest point?',
      choices: ['$(-6, 2)$', '$(6, -2)$', '$(6, 2)$', '$(2, 6)$'],
      answer: 2,
      solution:
        'In vertex form $y = a(x-h)^2 + k$, the vertex is $(h, k)$, and here $h = 6$ and $k = 2$. Since $a = 1$ is positive the parabola opens upward, so that vertex really is the lowest point: $(6, 2)$. Check a second way by evaluating: $x = 6$ gives $y = 0 + 2 = 2$ ✓, while $x = 5$ and $x = 7$ both give $y = 1 + 2 = 3$, sitting symmetrically above it ✓. (THE UNFLIPPED SHIFT gives $(-6, 2)$, but $x = -6$ produces $y = 144 + 2 = 146$ ✗. The choice $(6,-2)$ flips the height ✗, and $(2,6)$ swaps the two coordinates ✗.)',
    },
    {
      q: 'What is the smallest value of $y = 5(x - 1)^2 - 4$?',
      choices: ['$1$', '$5$', '$-20$', '$-4$'],
      answer: 3,
      solution:
        'The square is at least $0$, and multiplying by the positive number $5$ keeps it at least $0$, so $y \\ge -4$. Equality needs $x - 1 = 0$, so $x = 1$, and then $y = 5 \\cdot 0 - 4 = -4$ ✓ — attained. Check a second way at a neighbour: $x = 2$ gives $5(1) - 4 = 1$, above $-4$ ✓. (That neighbour value $1$ is also the value at $x = 0$, which makes THE LAZY PLUG land on it ✗. The choice $5$ mistakes the stretch factor for the minimum ✗. The choice $-20$ multiplies the constant by the leading coefficient, $5 \\times (-4)$, as though the $5$ scaled everything outside the square too ✗.)',
    },
  ],
  // p2 — the vertex shortcut x = -b/(2a). v3 flips to a downward parabola so the
  //      "value instead of location" trap has a target.
  [
    {
      q: 'At what value of $x$ does $y = x^2 - 14x + 5$ reach its minimum?',
      choices: ['$x = 14$', '$x = -7$', '$x = 5$', '$x = 7$'],
      answer: 3,
      solution:
        'Use the vertex shortcut: $x = -\\frac{b}{2a} = -\\frac{-14}{2 \\cdot 1} = 7$. Since $a = 1 > 0$ the parabola opens upward, so this is the minimum. Check a second way by completing the square, which never used the shortcut: $x^2 - 14x + 5 = (x-7)^2 - 49 + 5 = (x-7)^2 - 44$, whose square vanishes at $x = 7$ ✓. Values agree too: $x = 7$ gives $49 - 98 + 5 = -44$, while $x = 6$ gives $36 - 84 + 5 = -43$, higher ✓. (The choice $x = 14$ forgets to divide by $2a$ ✗. The choice $x = -7$ keeps a minus sign the formula already cancelled ✗. The choice $x = 5$ is just the constant term ✗.)',
    },
    {
      q: 'The parabola $y = 3x^2 - 12x + 1$ has a lowest point. What is its $x$-coordinate?',
      choices: ['$2$', '$6$', '$-2$', '$4$'],
      answer: 0,
      solution:
        'Here $a = 3$ and $b = -12$, so $x = -\\frac{b}{2a} = -\\frac{-12}{2 \\cdot 3} = \\frac{12}{6} = 2$. Since $a = 3 > 0$ the parabola opens upward and this is the minimum. Check a second way by completing the square: $3x^2 - 12x + 1 = 3(x^2 - 4x) + 1 = 3(x-2)^2 - 12 + 1 = 3(x-2)^2 - 11$, minimised at $x = 2$ ✓. Values confirm it: $x = 2$ gives $12 - 24 + 1 = -11$, and $x = 3$ gives $27 - 36 + 1 = -8$, higher ✓. (The choice $6$ uses $-\\frac{b}{2}$ and forgets $a$ ✗. The choice $4$ uses $-\\frac{b}{a}$ and forgets the $2$ ✗. The choice $-2$ is a sign slip ✗.)',
    },
    {
      q: 'For which value of $x$ is $y = -x^2 + 10x + 4$ largest?',
      choices: ['$-5$', '$5$', '$10$', '$29$'],
      answer: 1,
      solution:
        'With $a = -1$ the parabola opens downward, so its vertex is a maximum, and it sits at $x = -\\frac{b}{2a} = -\\frac{10}{2(-1)} = 5$. Check a second way by completing the square: $-x^2 + 10x + 4 = -(x^2 - 10x) + 4 = -(x-5)^2 + 25 + 4 = -(x-5)^2 + 29$, which peaks at $x = 5$ ✓. Values agree: $x = 5$ gives $-25 + 50 + 4 = 29$, and $x = 6$ gives $-36 + 60 + 4 = 28$, lower ✓. (THE WRONG QUESTION gives $29$, which is the maximum VALUE, not the place it happens ✗. The choice $10$ reads $b$ off the page ✗, and $-5$ is a sign slip ✗.)',
    },
  ],
  // p3 — a downward parabola in vertex form. v2 asks for the highest point,
  //      v3 writes the constant first so the form has to be recognised.
  [
    {
      q: 'What is the maximum value of $y = -(x + 5)^2 + 12$?',
      choices: ['$-5$', '$5$', '$12$', '$7$'],
      answer: 2,
      solution:
        'A square is at least $0$, so $-(x+5)^2$ is at most $0$, giving $y \\le 12$. Equality needs $x + 5 = 0$, so at $x = -5$ we get $y = 0 + 12 = 12$ ✓ — the ceiling is reached. Check a second way at a neighbour: $x = -4$ gives $-1 + 12 = 11$, below the peak ✓. (THE WRONG QUESTION plus THE UNFLIPPED SHIFT give $-5$ and $5$: the first is where the maximum happens, the second is that place mis-signed ✗. The choice $7$ subtracts the shift from the constant, $12 - 5$ ✗.)',
    },
    {
      q: 'The parabola $y = -(x - 8)^2 - 3$ opens downward. What is its highest point?',
      choices: ['$(-8, -3)$', '$(8, 3)$', '$(-8, 3)$', '$(8, -3)$'],
      answer: 3,
      solution:
        'The vertex of $y = a(x-h)^2 + k$ is $(h, k)$, so here it is $(8, -3)$, and because $a = -1$ is negative the parabola opens downward and that vertex is the highest point. Check a second way by evaluating: $x = 8$ gives $y = -0 - 3 = -3$ ✓, while $x = 9$ and $x = 7$ both give $y = -1 - 3 = -4$, sitting below it ✓ — so the peak height really is $-3$, a maximum that happens to be negative. (THE UNFLIPPED SHIFT gives $(-8, -3)$, where $y = -256 - 3 = -259$ ✗. The choices $(8,3)$ and $(-8,3)$ both flip the sign of the height, which the trailing $-3$ does not allow ✗.)',
    },
    {
      q: 'What is the largest value of $y = 9 - (x - 2)^2$?',
      choices: ['$9$', '$2$', '$7$', '$11$'],
      answer: 0,
      solution:
        'Rewrite it as $y = -(x-2)^2 + 9$ to see the vertex form. The square is at least $0$, so subtracting it can only take $y$ below $9$, giving $y \\le 9$. Equality needs $x = 2$, and then $y = 9 - 0 = 9$ ✓. Check a second way at neighbours: $x = 3$ gives $9 - 1 = 8$, and $x = 1$ gives $8$ as well — the peak is between them ✓. (THE WRONG QUESTION gives $2$, the location ✗. The choices $7$ and $11$ come from combining the constant with the shift, $9 - 2$ and $9 + 2$, instead of letting the square vanish ✗.)',
    },
  ],
  // p4 — a leading coefficient must be factored out BEFORE completing the
  //      square, and the correction scales with it.
  [
    {
      q: 'What is the minimum value of $y = 3x^2 - 12x + 20$?',
      choices: ['$8$', '$20$', '$2$', '$16$'],
      answer: 0,
      solution:
        'Factor the $3$ out of the $x$-terms first: $3x^2 - 12x + 20 = 3(x^2 - 4x) + 20$. Inside, $x^2 - 4x = (x-2)^2 - 4$, so $y = 3\\left((x-2)^2 - 4\\right) + 20 = 3(x-2)^2 - 12 + 20 = 3(x-2)^2 + 8$. The minimum is $8$, reached at $x = 2$. Check a second way in the original expression: $3(4) - 24 + 20 = 8$ ✓, and $x = 3$ gives $27 - 36 + 20 = 11$, higher ✓. (THE UNSCALED CORRECTION gives $16$: subtracting the inside correction $4$ instead of $3 \\times 4 = 12$ leaves $20 - 4$ ✗. The choice $2$ is THE WRONG QUESTION, the location ✗. THE LAZY PLUG gives $20$ ✗.)',
    },
    {
      q: 'What is the smallest value of $y = 4x^2 + 8x + 1$?',
      choices: ['$1$', '$-3$', '$-1$', '$0$'],
      answer: 1,
      solution:
        'Factor out the $4$ first: $4x^2 + 8x + 1 = 4(x^2 + 2x) + 1$. Inside, $x^2 + 2x = (x+1)^2 - 1$, so $y = 4(x+1)^2 - 4 + 1 = 4(x+1)^2 - 3$. The minimum is $-3$, reached at $x = -1$. Check a second way in the original expression: $4(1) - 8 + 1 = -3$ ✓, and $x = 0$ gives $1$, higher ✓. (THE UNSCALED CORRECTION gives $0$: subtracting the inside correction $1$ rather than $4 \\times 1 = 4$ leaves $1 - 1$ ✗. The choice $-1$ is the location, not the value ✗. THE LAZY PLUG gives $1$, the value at $x = 0$ ✗.)',
    },
    {
      q: 'What is the minimum value of $y = 5x^2 - 20x + 33$?',
      choices: ['$33$', '$2$', '$13$', '$29$'],
      answer: 2,
      solution:
        'Factor out the $5$ from the $x$-terms: $5x^2 - 20x + 33 = 5(x^2 - 4x) + 33$. Inside, $x^2 - 4x = (x-2)^2 - 4$, so $y = 5(x-2)^2 - 20 + 33 = 5(x-2)^2 + 13$. The minimum is $13$, reached at $x = 2$. Check a second way in the original expression: $5(4) - 40 + 33 = 13$ ✓, and $x = 1$ gives $5 - 20 + 33 = 18$, higher ✓. (THE UNSCALED CORRECTION gives $29$: using $33 - 4$ instead of $33 - 20$ ✗. The choice $2$ is where, not what ✗, and THE LAZY PLUG gives $33$ ✗.)',
    },
  ],
  // p5 — a fixed sum splits evenly to maximise a product. v2 asks for the pair.
  [
    {
      q: 'Two numbers have a sum of $30$. What is the largest their product can be?',
      choices: ['$225$', '$221$', '$900$', '$15$'],
      answer: 0,
      solution:
        'Call the numbers $x$ and $30 - x$. Their product is $P = x(30-x) = -x^2 + 30x$, a downward parabola with roots $0$ and $30$, so by symmetry the peak is halfway, at $x = 15$. Both numbers are then $15$, they do add to $30$ ✓, so the split is legal and $P = 15 \\times 15 = 225$. Check a second way with the Trivial Inequality: $x^2 + y^2 \\ge 2xy$ means $(x+y)^2 \\ge 4xy$, so $900 \\ge 4P$ and $P \\le 225$, with equality exactly when $x = y$ ✓. (The choice $221$ is $13 \\times 17$, a nearby uneven split that falls short ✗. The choice $900$ is $30^2$, using the whole sum twice ✗. The choice $15$ is THE WRONG QUESTION, the number rather than the product ✗.)',
    },
    {
      q: 'Two whole numbers add to $50$. When their product is as large as possible, what are the two numbers?',
      choices: ['$1$ and $49$', '$20$ and $30$', '$10$ and $40$', '$25$ and $25$'],
      answer: 3,
      solution:
        'With $x$ and $50 - x$, the product $P = x(50-x)$ is a downward parabola with roots $0$ and $50$, so it peaks halfway, at $x = 25$: the numbers are $25$ and $25$, which are whole numbers adding to $50$ ✓. Check a second way by simply computing all four products, since every choice does sum to $50$: $1 \\times 49 = 49$ ✗, $20 \\times 30 = 600$ ✗, $10 \\times 40 = 400$ ✗, and $25 \\times 25 = 625$ ✓ — the even split wins, and the further from even the split gets, the smaller the product.',
    },
    {
      q: 'Nina cuts a $14$-inch straw into two pieces and multiplies the two lengths together. What is the greatest product she can get?',
      choices: ['$196$', '$49$', '$48$', '$7$'],
      answer: 1,
      solution:
        'If one piece is $x$ inches long, the other is $14 - x$, and the product is $P = x(14-x)$. That is a downward parabola with roots $0$ and $14$, so the peak is at $x = 7$, giving $P = 7 \\times 7 = 49$. The equality point is legal: two $7$-inch pieces are a real way to cut a $14$-inch straw ✓. Check a second way against nearby cuts: $6$ and $8$ give $48$, and $5$ and $9$ give $45$ — both below $49$ ✓. (The choice $48$ is exactly that nearby cut ✗. The choice $196$ is $14^2$, as if both pieces were the full straw ✗. The choice $7$ is a piece length, not the product ✗.)',
    },
  ],
  // p6 — completing the square on a downward parabola. v3 flips the question to
  //      the input that maximises, in a money story.
  [
    {
      q: 'What is the maximum value of $y = -x^2 + 12x - 20$?',
      choices: ['$36$', '$6$', '$-20$', '$16$'],
      answer: 3,
      solution:
        'Factor $-1$ out of the $x$-terms: $y = -(x^2 - 12x) - 20 = -\\left((x-6)^2 - 36\\right) - 20 = -(x-6)^2 + 36 - 20 = -(x-6)^2 + 16$. Since $-(x-6)^2 \\le 0$, we get $y \\le 16$, with equality at $x = 6$. Check a second way in the original expression: $-36 + 72 - 20 = 16$ ✓, and $x = 7$ gives $-49 + 84 - 20 = 15$, lower ✓. (THE FORGOTTEN CONSTANT gives $36$, stopping before the $-20$ is folded in ✗. The choice $6$ is the location ✗, and $-20$ is THE LAZY PLUG, the value at $x = 0$ ✗.)',
    },
    {
      q: 'What is the greatest value of $y = -x^2 - 8x + 5$?',
      choices: ['$16$', '$21$', '$5$', '$-4$'],
      answer: 1,
      solution:
        'Factor $-1$ out of the $x$-terms: $y = -(x^2 + 8x) + 5 = -\\left((x+4)^2 - 16\\right) + 5 = -(x+4)^2 + 16 + 5 = -(x+4)^2 + 21$. The square term is at most $0$, so $y \\le 21$, with equality at $x = -4$. Check a second way in the original expression: $-16 + 32 + 5 = 21$ ✓, and $x = -3$ gives $-9 + 24 + 5 = 20$, lower ✓. (THE FORGOTTEN CONSTANT gives $16$, dropping the $+5$ ✗. The choice $5$ is THE LAZY PLUG, the value at $x = 0$ ✗, and $-4$ is the location ✗.)',
    },
    {
      q: 'A craft stall’s profit in dollars from selling $n$ bracelets is $P = -2n^2 + 24n - 50$. How many bracelets should the stall sell to make the profit as large as possible?',
      choices: ['$12$', '$22$', '$6$', '$-6$'],
      answer: 2,
      solution:
        'The profit is a downward parabola ($a = -2$), so it peaks at $n = -\\frac{b}{2a} = -\\frac{24}{2(-2)} = 6$. Selling $6$ bracelets is a sensible whole number of bracelets, so the peak is reachable ✓. Check a second way by completing the square: $-2n^2 + 24n - 50 = -2(n^2 - 12n) - 50 = -2(n-6)^2 + 72 - 50 = -2(n-6)^2 + 22$, which peaks at $n = 6$ ✓. Values confirm it: $n = 6$ gives $\\$22$ of profit, while $n = 5$ gives $-50 + 120 - 50 = \\$20$ and $n = 7$ gives $-98 + 168 - 50 = \\$20$ ✓. (THE WRONG QUESTION gives $22$, the peak profit in dollars rather than the bracelet count ✗. The choice $12$ divides by $a$ but forgets the $2$ ✗, and $-6$ is a sign slip ✗.)',
    },
  ],
  // p7 — a fixed perimeter on all four sides: the square wins. v2 asks for the
  //      dimensions instead of the area.
  [
    {
      q: 'A four-sided pen for guinea pigs is built from $48$ meters of fencing. What is the greatest area it can have, in square meters?',
      choices: ['$12$', '$144$', '$576$', '$288$'],
      answer: 1,
      solution:
        'All four sides are fenced, so the width $w$ and length together use half the fence: the length is $24 - w$, and $A = w(24 - w)$. That is a downward parabola with roots $0$ and $24$, so the peak is at $w = 12$, giving a $12 \\times 12$ square of area $144$ square meters. The equality point is legal — a $12$ by $12$ pen uses exactly $4 \\times 12 = 48$ meters ✓. Check a second way against a rival shape: $11 \\times 13 = 143$, which also uses $48$ meters but encloses less ✓. (The choice $288$ multiplies the best width $12$ by the half-perimeter $24$, forgetting that the length left over is $24 - 12 = 12$; a $12$ by $24$ pen would need $72$ meters ✗. The choice $576$ is $24 \\times 24$, which would need $96$ meters, twice what you have ✗. The choice $12$ is the side length, not the area ✗.)',
    },
    {
      q: 'You have $60$ meters of fence and want a four-sided rectangular enclosure with the biggest possible area. What should its dimensions be?',
      choices: ['$10$ m by $20$ m', '$5$ m by $25$ m', '$15$ m by $15$ m', '$30$ m by $30$ m'],
      answer: 2,
      solution:
        'With all four sides fenced, width plus length is $30$, so the area is $A = w(30-w)$: a downward parabola with roots $0$ and $30$, peaking halfway at $w = 15$. The best enclosure is $15$ by $15$, and it is legal, using $4 \\times 15 = 60$ meters exactly ✓. Check a second way by pricing every choice, which is quick because three of them do use $60$ meters: $10 \\times 20 = 200$ ✗, $5 \\times 25 = 125$ ✗, $15 \\times 15 = 225$ ✓. The last choice, $30$ by $30$, would enclose $900$ square meters but needs $120$ meters of fence — twice the budget, so it is not even allowed ✗.',
    },
    {
      q: 'A rectangular sticker has a perimeter of $28$ centimeters. What is the largest area it can have, in square centimeters?',
      choices: ['$49$', '$48$', '$196$', '$14$'],
      answer: 0,
      solution:
        'Perimeter $28$ means width plus length is $14$, so with width $w$ the area is $A = w(14 - w)$. The roots are $0$ and $14$, so the peak is at $w = 7$: a $7$ by $7$ square of area $49$ square centimeters, and its perimeter really is $4 \\times 7 = 28$ ✓. Check a second way against nearby shapes with the same perimeter: $6 \\times 8 = 48$ and $5 \\times 9 = 45$, both smaller ✓. (The choice $48$ is that $6$ by $8$ rival ✗. The choice $196$ is $14^2$, treating the half-perimeter as a side ✗. The choice $14$ is the half-perimeter itself, not an area ✗.)',
    },
  ],
  // p8 — projectile height. v2 asks for the time of the peak instead.
  [
    {
      q: 'A firework rises so that its height after $t$ seconds is $h = -5t^2 + 30t + 1$ meters. What is its greatest height?',
      choices: ['$46$ meters', '$45$ meters', '$30$ meters', '$3$ meters'],
      answer: 0,
      solution:
        'The peak of a downward parabola sits at $t = -\\frac{b}{2a} = -\\frac{30}{2(-5)} = 3$ seconds, a time that occurs during the flight ✓. Substituting back: $h = -5(9) + 90 + 1 = -45 + 91 = 46$ meters. Check a second way by completing the square: $-5t^2 + 30t + 1 = -5(t^2 - 6t) + 1 = -5(t-3)^2 + 45 + 1 = -5(t-3)^2 + 46$ ✓. And at $t = 2$ the height is $-20 + 60 + 1 = 41$ meters, below the peak ✓. (THE FORGOTTEN CONSTANT gives $45$, leaving the $+1$ launch height behind ✗. THE WRONG QUESTION gives $3$, the time ✗, and $30$ just reads $b$ ✗.)',
    },
    {
      q: 'A drone’s height in meters after $t$ seconds is $h = -4t^2 + 24t + 5$. At what time does it reach its highest point?',
      choices: ['$6$ seconds', '$12$ seconds', '$3$ seconds', '$41$ seconds'],
      answer: 2,
      solution:
        'The parabola opens downward ($a = -4$), so it peaks at $t = -\\frac{b}{2a} = -\\frac{24}{2(-4)} = 3$ seconds. Check a second way by comparing heights around that time: $t = 3$ gives $-36 + 72 + 5 = 41$ meters, while $t = 2$ gives $-16 + 48 + 5 = 37$ and $t = 4$ gives $-64 + 96 + 5 = 37$ — a symmetric pair below the peak, exactly as a parabola should look ✓. (THE WRONG QUESTION gives $41$, which is the peak HEIGHT in meters, not a time ✗. The choice $6$ uses $-\\frac{b}{a}$ and forgets the $2$ ✗; at $t = 6$ the drone is back down at $-144 + 144 + 5 = 5$ meters. The choice $12$ halves $b$ and forgets $a$ ✗.)',
    },
    {
      q: 'A stone tossed from a bridge has height $h = -5t^2 + 10t + 15$ meters above the water after $t$ seconds. How high does it get at its peak?',
      choices: ['$15$ meters', '$10$ meters', '$25$ meters', '$20$ meters'],
      answer: 3,
      solution:
        'The peak is at $t = -\\frac{b}{2a} = -\\frac{10}{2(-5)} = 1$ second. Substituting: $h = -5 + 10 + 15 = 20$ meters. Check a second way by completing the square: $-5t^2 + 10t + 15 = -5(t^2 - 2t) + 15 = -5(t-1)^2 + 5 + 15 = -5(t-1)^2 + 20$ ✓, and $t = 2$ gives $-20 + 20 + 15 = 15$ meters, below the peak ✓. (The choice $15$ is the height at $t = 0$, where the stone starts — it climbs $5$ meters higher before falling ✗. The choice $25$ adds $10 + 15$ and forgets the $-5t^2$ term ✗, and $10$ just reads $b$ ✗.)',
    },
  ],
  // p9 — three sides only, because a wall covers the fourth. v2 asks for the
  //      dimensions.
  [
    {
      q: 'A dog run is built against the side of a house, so fencing is needed on only three sides. With $120$ meters of fencing, what is the largest possible area, in square meters?',
      choices: ['$900$', '$1800$', '$3600$', '$1600$'],
      answer: 1,
      solution:
        'Let $w$ be each of the two sides sticking out from the house. Those use $2w$ meters, leaving a length of $120 - 2w$, so $A = w(120 - 2w)$. The roots are $w = 0$ and $w = 60$, so the peak is halfway at $w = 30$, and the length is $120 - 60 = 60$. The area is $30 \\times 60 = 1800$ square meters, and the shape is legal: $30 + 30 + 60 = 120$ meters of fence ✓. Check a second way against a rival that also uses $120$ meters: $w = 25$ gives $25 \\times 70 = 1750$, and $w = 35$ gives $35 \\times 50 = 1750$ — both below ✓. (THE PHANTOM FOURTH SIDE gives $900$: fencing all four sides of a $30 \\times 30$ square ✗. The choice $3600$ is $60 \\times 60$, which would need $180$ meters ✗. The choice $1600$ splits the fence into three equal $40$-meter sides, giving $40 \\times 40$ ✗.)',
    },
    {
      q: 'A rectangular sandbox is built against a long wall, with $24$ meters of edging for the other three sides. Which dimensions give the greatest area?',
      choices: ['$6$ m by $12$ m', '$8$ m by $8$ m', '$3$ m by $18$ m', '$6$ m by $6$ m'],
      answer: 0,
      solution:
        'With $w$ the depth away from the wall, the edging covers two depths and one length, so the length is $24 - 2w$ and $A = w(24 - 2w)$. The roots are $0$ and $12$, so the peak is at $w = 6$, with length $24 - 12 = 12$: a $6$ by $12$ sandbox using $6 + 6 + 12 = 24$ meters ✓. Check a second way by pricing every choice, since three of them do use exactly $24$ meters of edging on three sides: $6 \\times 12 = 72$ ✓, $8 \\times 8 = 64$ ✗, $3 \\times 18 = 54$ ✗. The last choice, $6$ by $6$, uses only $6 + 6 + 6 = 18$ meters and encloses $36$ square meters — it is THE PHANTOM FOURTH SIDE, the square you would build if all four sides needed edging ✗.',
    },
    {
      q: 'A garden bed backs onto a wall, so netting is needed on three sides only. With $44$ meters of netting, what is the greatest area, in square meters?',
      choices: ['$121$', '$484$', '$240$', '$242$'],
      answer: 3,
      solution:
        'Let $w$ be each side running away from the wall. The netting covers $2w$ plus the length, so the length is $44 - 2w$ and $A = w(44 - 2w)$. The roots are $0$ and $22$, so the peak is at $w = 11$, giving a length of $44 - 22 = 22$ and an area of $11 \\times 22 = 242$ square meters. The shape is legal: $11 + 11 + 22 = 44$ meters ✓. Check a second way against neighbours using the same netting: $w = 10$ gives $10 \\times 24 = 240$ and $w = 12$ gives $12 \\times 20 = 240$ — a symmetric pair just below the peak ✓. (That is the choice $240$: a good guess that misses the vertex ✗. THE PHANTOM FOURTH SIDE gives $121$, the $11 \\times 11$ square ✗. The choice $484$ is $22 \\times 22$, which would need $66$ meters ✗.)',
    },
  ],
  // p10 — a fixed difference makes the product dip below zero. v2 asks for the
  //      pair of numbers.
  [
    {
      q: 'Two numbers differ by $10$. What is the least their product can be?',
      choices: ['$0$', '$-10$', '$-25$', '$25$'],
      answer: 2,
      solution:
        'Call the numbers $x$ and $x + 10$; they differ by $10$ for every real $x$. The product is $P = x(x+10) = x^2 + 10x = (x+5)^2 - 25$, so $P \\ge -25$, with equality at $x = -5$. That gives the pair $-5$ and $5$, which do differ by $10$ ✓, so the floor is attainable and the least product is $-25$. Check a second way with the pair itself: $(-5)(5) = -25$ ✓, while $x = -4$ gives $(-4)(6) = -24$ and $x = -6$ gives $(-6)(4) = -24$ — both above ✓. (The choice $0$ comes from assuming a product cannot be negative, but $0$ is only what the pair $0$ and $10$ gives ✗. The choice $-10$ reads the difference ✗, and $25$ drops the minus sign ✗.)',
    },
    {
      q: 'Two numbers differ by $8$, and their product is as small as it can possibly be. What are the two numbers?',
      choices: ['$-4$ and $4$', '$-8$ and $0$', '$-3$ and $5$', '$4$ and $12$'],
      answer: 0,
      solution:
        'Write the numbers as $x$ and $x + 8$. Their product is $P = x(x+8) = (x+4)^2 - 16$, which is smallest when $x + 4 = 0$, that is $x = -4$: the numbers are $-4$ and $4$, and they do differ by $8$ ✓. Check a second way by multiplying out every choice, since all four pairs differ by $8$: $(-4)(4) = -16$ ✓, $(-8)(0) = 0$ ✗, $(-3)(5) = -15$ ✗, $(4)(12) = 48$ ✗. The symmetric pair straddling zero wins, because that is where the negative product is stretched furthest.',
    },
    {
      q: 'A number is multiplied by the number that is $4$ greater than it. What is the smallest product that can result?',
      choices: ['$0$', '$-4$', '$4$', '$-2$'],
      answer: 1,
      solution:
        'Let the number be $x$, so the product is $P = x(x+4) = x^2 + 4x = (x+2)^2 - 4$. The square is at least $0$, so $P \\ge -4$, with equality at $x = -2$ — a real number, so the floor is reached, and the pair is $-2$ and $2$. Check a second way with that pair: $(-2)(2) = -4$ ✓, while $x = -1$ gives $(-1)(3) = -3$ and $x = -3$ gives $(-3)(1) = -3$ — both above ✓. (The choice $-2$ is THE WRONG QUESTION, the number rather than the product ✗. The choice $0$ comes from the pair $0$ and $4$, a real product but not the smallest ✗, and $4$ drops the minus sign ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 15,
  sections: {
    '15.3': s153,
    '15.4': s154,
  },
}
