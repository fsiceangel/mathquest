// Introduction to Algebra chapter 20 — variations for the CHALLENGE set
// (Special Functions).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - EVERY CHALLENGE ITEM KEEPS ITS TWO STEPS. A single-section drill asks one
//    thing; these ask two. A radical equation is squared AND every candidate is
//    substituted back. A domain question answers to a radical AND a denominator
//    at the same time. A floor equation is unwrapped AND then divided down. A
//    piecewise value is routed to a branch AND then evaluated with a second
//    special function inside it. Nothing here is finished in one move.
//  - SQUARING INVENTS ROOTS, SO EVERY CANDIDATE GOES BACK INTO THE ORIGINAL.
//    A candidate that satisfies the squared equation is only a candidate; the
//    original equation is the judge. The same rule governs every absolute-value
//    equation with a variable on the right: the right side must come out
//    nonnegative or the candidate is an imposter.
//  - NEGATIVE FLOORS GO FURTHER LEFT. Floor means "go down", never "drop the
//    decimal": the floor of a negative non-integer is one step more negative
//    than its chopped form, and the ceiling is the chopped form.
//  - A CANCELLED FACTOR LEAVES A HOLE. Simplifying never rescues an excluded
//    value; the original denominator decides the domain, and it decides it
//    before any cancelling happens.
//  - A BOUNDARY BELONGS TO EXACTLY ONE PIECE, and the inequality signs say
//    which. Every piecewise item states out loud which condition the boundary
//    input satisfies and which one it fails.
//  - Every answer is verified TWO independent ways and the second route is
//    written into the solution: a sign condition beside an algebraic solve, a
//    numeric table beside an interval rule, a common-denominator bound beside a
//    decimal walk, a factored form beside a substitution.
//  - Six traps run through this chapter, and every distractor is one of them,
//    named in the solution with its wrong arithmetic worked out. THE UNCHECKED
//    CANDIDATE: keeping a root that fails the original equation. THE LOST CASE:
//    solving one branch of an absolute value, or one piece of a piecewise rule,
//    and stopping. THE CHOPPED DECIMAL: reading a negative floor as the decimal
//    thrown away. THE FLIPPED ENDPOINT: closing the wrong end of an interval,
//    or reversing which side of a boundary is included. THE PATCHED HOLE:
//    letting a cancelled factor erase an excluded value. THE HALF DOMAIN:
//    answering to the radical or the denominator but not to both.
//  - No two choices inside an item name the same value, even written two ways.
//  - No shop, company, or brand is ever named.

const challenge = [
  // c1 — a radical equation whose squaring produces two candidates, exactly one
  //      of which survives the check. v1 puts the linear side below the radical,
  //      v2 makes the linear side a bare $x$, v3 stretches the coefficient
  //      inside the radical so the numbers stay out of reach of a guess.
  [
    {
      q: 'Solve $\\sqrt{x + 24} = x - 6$.',
      choices: ['$x = 12$ only', '$x = 1$ and $x = 12$', '$x = 1$ only', 'No solution'],
      answer: 0,
      solution:
        'Square both sides to free the variable: $x + 24 = (x - 6)^2 = x^2 - 12x + 36$. Collect everything on one side: $x^2 - 13x + 12 = 0$, which factors as $(x - 1)(x - 12) = 0$, so the CANDIDATES are $x = 1$ and $x = 12$. Squaring erases signs, so neither is a solution until the ORIGINAL equation says so. Check $x = 12$: the left side is $\\sqrt{36} = 6$ and the right side is $12 - 6 = 6$ ✓. Check $x = 1$: the left side is $\\sqrt{25} = 5$, but the right side is $1 - 6 = -5$ ✗ — a square root never returns a negative number. Only $x = 12$ survives. Second route, using a sign condition instead of substitution: the left side is a square root, so it is never negative, which forces $x - 6 \\ge 0$, that is $x \\ge 6$. That single inequality throws out $x = 1$ before any checking, and $12 \\ge 6$ keeps the other ✓ — the same verdict reached without touching the original equation. (THE UNCHECKED CANDIDATE keeps both roots of the quadratic and answers $x = 1$ and $x = 12$ ✗. Choice $x = 1$ only checks the wrong candidate, or picks the smaller root out of habit ✗. Choice "No solution" throws out both, forgetting that $x = 12$ passed ✗.)',
    },
    {
      q: 'Solve $\\sqrt{10x + 200} = x$.',
      choices: ['$x = -10$ only', '$x = 20$ and $x = -10$', 'No solution', '$x = 20$ only'],
      answer: 3,
      solution:
        'Square both sides: $10x + 200 = x^2$, so $x^2 - 10x - 200 = 0$, which factors as $(x - 20)(x + 10) = 0$. The candidates are $x = 20$ and $x = -10$. Now the check, which is the real work. Check $x = 20$: $\\sqrt{10(20) + 200} = \\sqrt{400} = 20$, matching the right side ✓. Check $x = -10$: $\\sqrt{10(-10) + 200} = \\sqrt{100} = 10$, but the right side is $-10$ ✗ — the inside came out fine, yet the two sides have opposite signs, which is exactly the damage squaring does. Only $x = 20$ solves the original. Second route, completing the square instead of factoring: $x^2 - 10x = 200$ becomes $(x - 5)^2 = 200 + 25 = 225$, so $x - 5 = \\pm 15$ and $x = 20$ or $x = -10$ ✓ — the same two candidates from a path that never guesses a factorisation, and the same check then keeps $20$. (THE UNCHECKED CANDIDATE reports both ✗. Choice $x = -10$ only keeps the candidate that fails, perhaps because $\\sqrt{100}$ looked close enough ✗. Choice "No solution" discards a candidate that passes cleanly ✗.)',
    },
    {
      q: 'Solve $\\sqrt{16x + 65} = x + 3$.',
      choices: ['$x = -4$ only', '$x = 14$ only', '$x = 14$ and $x = -4$', 'No solution'],
      answer: 1,
      solution:
        'Square both sides, expanding the right side in full: $16x + 65 = (x + 3)^2 = x^2 + 6x + 9$. Rearranged, $x^2 - 10x - 56 = 0$, which factors as $(x - 14)(x + 4) = 0$, giving the candidates $x = 14$ and $x = -4$. Check $x = 14$: the inside is $16(14) + 65 = 224 + 65 = 289$, and $\\sqrt{289} = 17$, while the right side is $14 + 3 = 17$ ✓. Check $x = -4$: the inside is $-64 + 65 = 1$, so the left side is $\\sqrt{1} = 1$, but the right side is $-4 + 3 = -1$ ✗. Extraneous. Second route, solving the quadratic by formula rather than by factoring: $x = \\frac{10 \\pm \\sqrt{100 + 224}}{2} = \\frac{10 \\pm \\sqrt{324}}{2} = \\frac{10 \\pm 18}{2}$, which is $14$ or $-4$ ✓ — the same pair, so the factorisation was not a lucky guess, and the check still keeps only $14$. (THE UNCHECKED CANDIDATE answers with both ✗. Choice $x = -4$ only keeps the imposter and discards the survivor ✗. Choice "No solution" ignores that $\\sqrt{289} = 17$ matched exactly ✗.)',
    },
  ],

  // c2 — an absolute-value IDENTITY: the equation is true on a whole half-line,
  //      not at a point. v1 uses $|a| = a$, v2 uses $|a| = -a$ around a negative
  //      centre, v3 hides a coefficient inside so the half-line has to be
  //      divided down before it is reported.
  [
    {
      q: 'For which values of $x$ is $|x - 10| = x - 10$ true?',
      choices: ['All $x \\le 10$', '$x = 10$ only', 'All $x \\ge 10$', 'All real numbers $x$'],
      answer: 2,
      solution:
        'The right side is the inside of the absolute value, unchanged. Now $|a| = a$ exactly when $a$ is already nonnegative — absolute value leaves nonnegative numbers alone and flips negative ones. So we need $x - 10 \\ge 0$, that is $x \\ge 10$. Spot-check both sides of the line: at $x = 30$, $|20| = 20$ and $30 - 10 = 20$ ✓; at $x = 4$, $|{-6}| = 6$ but $4 - 10 = -6$ ✗. Second route, by splitting into the two cases the definition gives. Case $x - 10 \\ge 0$: the absolute value does nothing, so the equation reads $x - 10 = x - 10$, true for EVERY $x$ in this case. Case $x - 10 < 0$: the absolute value flips the sign, so the equation reads $-(x - 10) = x - 10$, giving $2(x - 10) = 0$ and $x = 10$ — which is not in this case at all, so it contributes nothing new. The union of the two cases is $x \\ge 10$ ✓. (THE FLIPPED ENDPOINT reads $|a| = a$ as the rule for NEGATIVE insides and answers $x \\le 10$ ✗. Choice $x = 10$ only keeps just the point where both sides are zero, forgetting the whole half-line beyond it ✗. Choice "all real numbers" assumes $|a|$ is always $a$, which fails the moment $x$ drops below $10$ ✗.)',
    },
    {
      q: 'For which values of $x$ is $|x + 40| = -x - 40$ true?',
      choices: ['All $x \\le -40$', 'All $x \\ge -40$', '$x = -40$ only', 'All real numbers $x$'],
      answer: 0,
      solution:
        'First recognise the right side: $-x - 40 = -(x + 40)$, the NEGATION of the inside. And $|a| = -a$ exactly when $a \\le 0$, since flipping a negative number is what makes it positive. So we need $x + 40 \\le 0$, that is $x \\le -40$. Spot-check: at $x = -100$, the left side is $|{-60}| = 60$ and the right side is $100 - 40 = 60$ ✓; at $x = -10$, the left side is $|30| = 30$ but the right side is $10 - 40 = -30$ ✗. Second route, by cases. Case $x + 40 \\ge 0$: the equation reads $x + 40 = -(x + 40)$, so $2(x + 40) = 0$ and $x = -40$, which does sit in this case ✓. Case $x + 40 < 0$: the absolute value already equals $-(x + 40)$, so the equation is an identity and every such $x$ works. Together that is $x < -40$ plus the single point $x = -40$, which is exactly $x \\le -40$ ✓. (THE FLIPPED ENDPOINT answers $x \\ge -40$, the half-line where the two sides have opposite signs ✗. Choice $x = -40$ only keeps the case-boundary and drops the identity half ✗. Choice "all real numbers" would need $|a| = -a$ everywhere, which fails at $x = 0$: $|40| = 40$ and $-40$ do not match ✗.)',
    },
    {
      q: 'For which values of $x$ is $|2x - 50| = 50 - 2x$ true?',
      choices: ['All $x \\ge 25$', '$x = 25$ only', 'All $x \\le 50$', 'All $x \\le 25$'],
      answer: 3,
      solution:
        'The right side is $50 - 2x = -(2x - 50)$, the negation of the inside, and $|a| = -a$ holds exactly when $a \\le 0$. So the condition is $2x - 50 \\le 0$, and now comes the second step that the coefficient forces: divide by $2$ to get $x \\le 25$. Spot-check: at $x = 10$, the left side is $|{-30}| = 30$ and the right side is $50 - 20 = 30$ ✓; at $x = 40$, the left side is $|30| = 30$ but the right side is $50 - 80 = -30$ ✗. Second route, pulling the coefficient out first: $|2x - 50| = 2|x - 25|$ and $50 - 2x = 2(25 - x)$, so after dividing both sides by $2$ the equation is simply $|x - 25| = 25 - x$, which holds exactly when $x - 25 \\le 0$, that is $x \\le 25$ ✓ — the same half-line from an equation with no coefficient in it at all. (THE FLIPPED ENDPOINT answers $x \\ge 25$ ✗. Choice $x = 25$ only reports the single point where both sides vanish ✗. THE UNDIVIDED COEFFICIENT reads $2x \\le 50$ and forgets to divide, reporting $x \\le 50$ — but $x = 40$ already fails, as the spot-check showed ✗.)',
    },
  ],

  // c3 — a floor or ceiling equation whose answer is an INTERVAL, kept in
  //      negative territory where the endpoints are easiest to reverse. v1 is a
  //      floor, v2 a ceiling, v3 a ceiling that lands on zero, where the
  //      interval straddles the sign change.
  [
    {
      q: 'Which describes ALL solutions of $\\lfloor x \\rfloor = -7$?',
      choices: ['$-8 < x \\le -7$', '$-7 < x \\le -6$', '$x = -7$ only', '$-7 \\le x < -6$'],
      answer: 3,
      solution:
        'The floor of $x$ is the greatest integer at or below $x$, so asking for $\\lfloor x \\rfloor = -7$ asks which numbers have $-7$ sitting at or just below them. Start at $-7$ itself: $\\lfloor -7 \\rfloor = -7$ ✓, so the left endpoint is INCLUDED. Move right: $\\lfloor -6.5 \\rfloor = -7$ ✓ and $\\lfloor -6.01 \\rfloor = -7$ ✓, but $\\lfloor -6 \\rfloor = -6$ ✗, so the right endpoint is excluded. Move left instead: $\\lfloor -7.5 \\rfloor = -8$ ✗, so nothing below $-7$ qualifies. The set is $-7 \\le x < -6$. Second route, from the general rule rather than from samples: $\\lfloor x \\rfloor = n$ says $n$ is an integer at or below $x$ and $n + 1$ is not, which is the double inequality $n \\le x < n + 1$. With $n = -7$ that reads $-7 \\le x < -6$ ✓ — and notice the interval runs to the RIGHT of $-7$, because floors round down, so a number whose floor is $-7$ must be at least $-7$. (THE FLIPPED ENDPOINT puts the interval on the wrong side of $-7$, answering $-8 < x \\le -7$, which is the set of numbers whose CEILING is $-7$ ✗. Choice $-7 < x \\le -6$ closes the wrong end and loses $x = -7$ itself, whose floor is $-7$ ✗. Choice "$x = -7$ only" treats a floor equation as though it pinned down one number, when it describes a whole step ✗.)',
    },
    {
      q: 'Which describes ALL solutions of $\\lceil x \\rceil = -5$?',
      choices: ['$-5 \\le x < -4$', '$-6 < x \\le -5$', '$-5 < x \\le -4$', '$x = -5$ only'],
      answer: 1,
      solution:
        'The ceiling of $x$ is the smallest integer at or above $x$, so a number with ceiling $-5$ must be at or below $-5$, and it must not reach down to $-6$. Test the ends: $\\lceil -5 \\rceil = -5$ ✓, so $-5$ is INCLUDED; $\\lceil -5.9 \\rceil = -5$ ✓; but $\\lceil -6 \\rceil = -6$ ✗, so $-6$ is excluded; and $\\lceil -4.9 \\rceil = -4$ ✗, so nothing above $-5$ qualifies. The set is $-6 < x \\le -5$. Second route, converting the ceiling into a floor: for every real number, $\\lceil x \\rceil = -\\lfloor -x \\rfloor$, because reflecting the number line swaps up and down. So the equation becomes $\\lfloor -x \\rfloor = 5$, which by the floor rule means $5 \\le -x < 6$. Multiplying through by $-1$ reverses both inequality signs and gives $-5 \\ge x > -6$, that is $-6 < x \\le -5$ ✓ — the same interval, obtained without testing a single sample. (THE FLIPPED ENDPOINT answers $-5 \\le x < -4$, the FLOOR interval for $-5$ ✗. Choice $-5 < x \\le -4$ slides the whole step one unit right and also loses $x = -5$ ✗. Choice "$x = -5$ only" collapses a whole step to a point ✗.)',
    },
    {
      q: 'Which describes ALL solutions of $\\lceil x \\rceil = 0$?',
      choices: ['$0 \\le x < 1$', '$x = 0$ only', '$-1 < x \\le 0$', '$-1 \\le x < 0$'],
      answer: 2,
      solution:
        'A ceiling of $0$ means the smallest integer at or above $x$ is $0$. That forces two things at once: $x \\le 0$, or the ceiling would already be $1$ or more; and $x > -1$, or the ceiling would be $-1$ or less. Together, $-1 < x \\le 0$. Test the corners: $\\lceil 0 \\rceil = 0$ ✓, $\\lceil -0.5 \\rceil = 0$ ✓, $\\lceil -0.999 \\rceil = 0$ ✓, but $\\lceil -1 \\rceil = -1$ ✗ and $\\lceil 0.001 \\rceil = 1$ ✗. Second route, by squeezing between the neighbouring steps: the numbers whose ceiling is $-1$ fill $-2 < x \\le -1$, and the numbers whose ceiling is $1$ fill $0 < x \\le 1$. Every real number has exactly one ceiling, so the numbers with ceiling $0$ are precisely what is left between those two blocks — the gap from $-1$ (not included, it belongs to the block below) to $0$ (included, since the block above starts strictly after $0$) ✓. (THE FLIPPED ENDPOINT answers $0 \\le x < 1$, which is the FLOOR interval for $0$ ✗. Choice $-1 \\le x < 0$ has the right step but both endpoints exchanged, gaining $x = -1$ whose ceiling is $-1$ and losing $x = 0$ whose ceiling is $0$ ✗. Choice "$x = 0$ only" forgets that every negative number down to $-1$ also rounds up to $0$ ✗.)',
    },
  ],

  // c4 — floor and ceiling of NEGATIVE fractions, added. v1 keeps the exact
  //      halfway point so the doubling shortcut can confirm it, v2 moves off the
  //      halfway point, v3 changes direction by feeding the floor and the
  //      ceiling two DIFFERENT numbers.
  [
    {
      q: 'Compute $\\left\\lfloor -\\frac{45}{2} \\right\\rfloor + \\left\\lceil -\\frac{45}{2} \\right\\rceil$.',
      choices: ['$-44$', '$-45$', '$-46$', '$45$'],
      answer: 1,
      solution:
        'First name the number: $-\\frac{45}{2} = -22.5$, which sits between the integers $-23$ and $-22$. The floor goes DOWN, and down on the number line means left: $\\left\\lfloor -22.5 \\right\\rfloor = -23$. The ceiling goes up, toward zero: $\\left\\lceil -22.5 \\right\\rceil = -22$. Adding, $-23 + (-22) = -45$. Second route, using the halfway shortcut: when a number sits exactly midway between two integers, its floor and its ceiling are those two integers, one the same distance below as the other is above, so their sum is exactly twice the number itself. Here $2 \\times (-22.5) = -45$ ✓ — the same value, computed without ever naming $-23$ or $-22$. (THE CHOPPED DECIMAL throws the $.5$ away and calls both the floor and the ceiling $-22$, giving $-44$ ✗. Choice $-46$ drives the ceiling down to $-23$ as well, as though both functions rounded the same way ✗. Choice $45$ works with $22.5$ and forgets the minus sign the problem is built around ✗.)',
    },
    {
      q: 'Compute $\\left\\lfloor -\\frac{35}{4} \\right\\rfloor + \\left\\lceil -\\frac{35}{4} \\right\\rceil$.',
      choices: ['$-17$', '$-16$', '$-18$', '$17$'],
      answer: 0,
      solution:
        'Name the number: $-\\frac{35}{4} = -8.75$, which lies between $-9$ and $-8$. The floor is the greatest integer at or below it, and $-9$ is below while $-8$ is above, so $\\left\\lfloor -8.75 \\right\\rfloor = -9$. The ceiling is the smallest integer at or above it, which is $-8$. Sum: $-9 + (-8) = -17$. Second route, writing the fraction as a whole part plus a leftover: $-\\frac{35}{4} = -\\frac{36}{4} + \\frac{1}{4} = -9 + \\frac{1}{4}$, so the number is a quarter of a step ABOVE $-9$ — which puts $-9$ immediately below it and $-8$ immediately above it, with no integer in between. Two consecutive integers, $-9$ and $-8$, summing to $-17$ ✓. A non-integer always has consecutive floor and ceiling, so the sum has to be odd, and $-17$ is odd ✓. (THE CHOPPED DECIMAL keeps $-8$ for both and answers $-16$ ✗. Choice $-18$ rounds both down to $-9$ ✗. Choice $17$ computes $\\lfloor 8.75 \\rfloor + \\lceil 8.75 \\rceil = 8 + 9$, dropping the minus sign ✗.)',
    },
    {
      q: 'Compute $\\left\\lfloor -\\frac{40}{3} \\right\\rfloor + \\left\\lceil -\\frac{29}{4} \\right\\rceil$.',
      choices: ['$-20$', '$21$', '$-21$', '$-22$'],
      answer: 2,
      solution:
        'Two different numbers this time, so handle them one at a time. $-\\frac{40}{3} = -13.33\\ldots$, and the floor drops to the integer at or below it: $-14$. Then $-\\frac{29}{4} = -7.25$, and the ceiling climbs to the integer at or above it: $-7$. Sum: $-14 + (-7) = -21$. Second route, with no decimals at all — trap each fraction between integers using common denominators. Since $-\\frac{42}{3} = -14$ and $-\\frac{39}{3} = -13$, the number $-\\frac{40}{3}$ sits strictly between $-14$ and $-13$, so its floor is $-14$ ✓. Since $-\\frac{32}{4} = -8$ and $-\\frac{28}{4} = -7$, the number $-\\frac{29}{4}$ sits strictly between $-8$ and $-7$, so its ceiling is $-7$ ✓. Adding gives $-21$ ✓. (THE CHOPPED DECIMAL reads the first floor as $-13$ and answers $-20$ ✗. Choice $-22$ takes the FLOOR of the second number, $-8$, where the ceiling was asked for ✗. Choice $21$ ignores both minus signs and computes $\\lfloor 13.33 \\rfloor + \\lceil 7.25 \\rceil = 13 + 8$ ✗.)',
    },
  ],

  // c5 — a domain that answers to TWO rules at once. v1 keeps the radical
  //      upstairs, v2 moves it into the denominator so the endpoint turns
  //      strict, v3 puts a coefficient inside the radical so the boundary has
  //      to be divided down before the puncture is placed.
  [
    {
      q: 'What is the domain of $f(x) = \\dfrac{\\sqrt{x + 30}}{x - 20}$?',
      choices: ['$x \\ge -30$', 'All $x \\ne 20$', '$x \\ge -30$ and $x \\ne 20$', '$x > -30$ and $x \\ne 20$'],
      answer: 2,
      solution:
        'Two different parts of this function can break, so ask each of them separately and then keep only what satisfies BOTH. The radical demands a nonnegative inside: $x + 30 \\ge 0$, so $x \\ge -30$. The denominator demands a nonzero value: $x - 20 \\ne 0$, so $x \\ne 20$. Since $20$ is comfortably inside the half-line $x \\ge -30$, the answer really is a half-line with a single point punched out: $x \\ge -30$ and $x \\ne 20$. Second route, by testing the four suspicious inputs directly. At $x = -40$: the inside is $-10$, and $\\sqrt{-10}$ does not exist ✗. At $x = -30$: $f(-30) = \\frac{\\sqrt{0}}{-50} = 0$, a perfectly good output, so the endpoint is INCLUDED ✓. At $x = 20$: $f(20) = \\frac{\\sqrt{50}}{0}$, division by zero ✗. At $x = 25$: $\\frac{\\sqrt{55}}{5}$, fine ✓. The four tests draw exactly the same set. (THE HALF DOMAIN answers to the radical only and reports $x \\ge -30$, which lets $x = 20$ through ✗, or to the denominator only and reports all $x \\ne 20$, which lets $x = -40$ through ✗. THE FLIPPED ENDPOINT makes the boundary strict with $x > -30$, but $\\sqrt{0} = 0$ is legal, so $-30$ belongs ✗.)',
    },
    {
      q: 'What is the domain of $g(x) = \\dfrac{x + 5}{\\sqrt{x - 40}}$?',
      choices: ['$x \\ge 40$', 'All $x \\ne 40$', '$x \\ge 40$ and $x \\ne -5$', '$x > 40$'],
      answer: 3,
      solution:
        'The radical has moved DOWNSTAIRS, and that changes the endpoint. The radical still needs $x - 40 \\ge 0$. But now it is also a denominator, so it must not be zero: $\\sqrt{x - 40} \\ne 0$ means $x - 40 \\ne 0$. Put the two together — at or above $40$, but not $40$ — and the domain is simply $x > 40$. The two rules collapse into one strict inequality. Second route, testing the boundary and its neighbours. At $x = 39$: $\\sqrt{-1}$ does not exist ✗. At $x = 40$: $g(40) = \\frac{45}{\\sqrt{0}} = \\frac{45}{0}$, division by zero ✗. At $x = 41$: $g(41) = \\frac{46}{\\sqrt{1}} = 46$ ✓. At $x = 140$: $\\frac{145}{10} = 14.5$ ✓. So $40$ itself fails while everything above it works ✓. (THE FLIPPED ENDPOINT answers $x \\ge 40$, the domain the radical would have on its own — but $\\sqrt{0}$ in a denominator is fatal ✗. THE HALF DOMAIN answers "all $x \\ne 40$", which lets $x = 39$ through even though its radical does not exist ✗. Choice $x \\ge 40$ and $x \\ne -5$ excludes the value that zeroes the NUMERATOR; a zero on top is a fine output, and $-5$ is not even in the radical’s range ✗.)',
    },
    {
      q: 'What is the domain of $h(x) = \\dfrac{\\sqrt{2x + 30}}{x + 10}$?',
      choices: ['$x \\ge -10$ and $x \\ne -15$', '$x \\ge -15$ and $x \\ne -10$', '$x \\ge -15$', '$x \\ge -30$ and $x \\ne -10$'],
      answer: 1,
      solution:
        'Handle the radical first, and do not stop at the subtraction: $2x + 30 \\ge 0$ gives $2x \\ge -30$, and dividing by $2$ gives $x \\ge -15$. Then the denominator: $x + 10 \\ne 0$, so $x \\ne -10$. Because $-10$ sits inside the half-line $x \\ge -15$, it really does have to be punched out, and the domain is $x \\ge -15$ with $x \\ne -10$. Second route, by testing the landmarks. At $x = -20$: the inside is $2(-20) + 30 = -10$, so the radical fails ✗. At $x = -15$: $h(-15) = \\frac{\\sqrt{0}}{-5} = 0$, a real output, so the endpoint is included ✓. At $x = -12$: $\\frac{\\sqrt{6}}{-2}$, a legal negative value ✓ — a negative OUTPUT is no problem, only a negative INSIDE is. At $x = -10$: $\\frac{\\sqrt{10}}{0}$ ✗. The tests confirm the same set ✓. (Choice "$x \\ge -10$ and $x \\ne -15$" swaps the two rules, giving the radical’s job to the denominator ✗. THE HALF DOMAIN answers $x \\ge -15$ and forgets the denominator entirely ✗. THE UNDIVIDED COEFFICIENT reads $2x + 30 \\ge 0$ as $x \\ge -30$, forgetting to divide by $2$, and then $x = -20$ would sneak in ✗.)',
    },
  ],

  // c6 — an absolute value equal to an expression containing the variable, so
  //      both cases must be solved AND both candidates checked. v1 keeps both
  //      survivors, v2 loses exactly one, v3 loses both — three different
  //      verdicts from the same two-case machinery.
  [
    {
      q: 'Solve $|3x - 20| = x + 20$.',
      choices: ['$x = 20$ only', '$x = 0$ only', 'No solution', '$x = 20$ and $x = 0$'],
      answer: 3,
      solution:
        'The variable appears on BOTH sides, so split into cases and then check. Case 1, the inside is taken as it stands: $3x - 20 = x + 20$, so $2x = 40$ and $x = 20$. Check in the original: $|60 - 20| = 40$ and $20 + 20 = 40$ ✓. Case 2, the inside is negated: $3x - 20 = -(x + 20) = -x - 20$, so $4x = 0$ and $x = 0$. Check: $|0 - 20| = 20$ and $0 + 20 = 20$ ✓. Both candidates make the right side nonnegative, so BOTH survive — that is why we check instead of assuming one has to fall. Second route, squaring both sides instead of splitting: $(3x - 20)^2 = (x + 20)^2$ gives $9x^2 - 120x + 400 = x^2 + 40x + 400$, so $8x^2 - 160x = 0$, that is $8x(x - 20) = 0$, and the candidates are $x = 0$ and $x = 20$ ✓ — the same pair from a route with no cases in it, and the right side is $20$ and $40$ at those inputs, both nonnegative ✓. (THE LOST CASE solves only the first case and answers $x = 20$ only ✗, or only the second and answers $x = 0$ only ✗. Choice "No solution" discards two candidates that both pass the check ✗.)',
    },
    {
      q: 'Solve $|x - 10| = 2x - 50$.',
      choices: ['$x = 40$ only', '$x = 40$ and $x = 20$', '$x = 20$ only', 'No solution'],
      answer: 0,
      solution:
        'Split into the two cases first. Case 1: $x - 10 = 2x - 50$, so $x = 40$. Check in the original: $|40 - 10| = 30$ and $2(40) - 50 = 30$ ✓. Case 2: $x - 10 = -(2x - 50) = -2x + 50$, so $3x = 60$ and $x = 20$. Check: $|20 - 10| = 10$, but $2(20) - 50 = -10$ ✗ — an absolute value can never equal a negative number, so this candidate is an imposter. Only $x = 40$ solves the original. Second route, squaring and then applying a sign gate: $(x - 10)^2 = (2x - 50)^2$ gives $x^2 - 20x + 100 = 4x^2 - 200x + 2500$, so $3x^2 - 180x + 2400 = 0$, that is $x^2 - 60x + 800 = 0$, which factors as $(x - 40)(x - 20) = 0$ ✓ — the same two candidates. Now the gate: the right side $2x - 50$ must be nonnegative, so $x \\ge 25$, which keeps $40$ and rejects $20$ ✓ without substituting anything. (THE UNCHECKED CANDIDATE keeps both case answers ✗. Choice $x = 20$ only keeps the imposter and drops the survivor ✗. Choice "No solution" ignores that $x = 40$ balanced both sides at $30$ ✗.)',
    },
    {
      q: 'Solve $|3x - 40| = x + 20$.',
      choices: ['$x = 30$ only', '$x = 30$ and $x = 15$', '$x = 30$ and $x = 5$', '$x = 5$ only'],
      answer: 2,
      solution:
        'Run the two cases and then check every candidate in the ORIGINAL equation, because the right side is only sometimes big enough. Case 1: $3x - 40 = x + 20$, so $2x = 60$ and $x = 30$. Check: $|90 - 40| = 50$ and $30 + 20 = 50$ ✓. Case 2: $3x - 40 = -(x + 20) = -x - 20$, so $4x = 20$ and $x = 5$. Check: $|15 - 40| = 25$ and $5 + 20 = 25$ ✓. This time BOTH candidates survive, so the equation has two solutions. Second route, reading the bars as a distance: $|3x - 40| = x + 20$ says the number $3x - 40$ sits exactly $x + 20$ away from zero, which is possible only when $x + 20 \\ge 0$, that is $x \\ge -20$; both answers clear that bar comfortably ✓. Splitting on where $3x - 40$ changes sign, at $x = \\frac{40}{3}$, confirms one solution on each side — $30$ above it and $5$ below ✓, which is exactly why two answers appear rather than one. (The choices $x = 30$ only and $x = 5$ only each SOLVE ONE CASE AND STOP, and an absolute value almost always opens into two ✗. The choice $x = 15$ comes from MIS-DISTRIBUTING THE MINUS SIGN in case 2, writing $-(x + 20)$ as $-x + 20$ and then solving $4x = 60$ ✗ — substituting gives $|45 - 40| = 5$ against $15 + 20 = 35$, which is nowhere close.)',
    },
  ],

  // c7 — a rational function with a HOLE: one honest evaluation and one
  //      excluded value, reported together. v1 and v2 move the difference of
  //      squares and the sign of the excluded value, v3 puts a coefficient on
  //      the $x$ so the hole lands on a fraction.
  [
    {
      q: 'Let $g(x) = \\dfrac{x^2 - 25}{x - 5}$. Which statement is true?',
      choices: [
        '$g(20) = 25$ and $g(5)$ is undefined',
        '$g(20) = 25$ and $g(5) = 10$',
        '$g(20) = 15$ and $g(5)$ is undefined',
        '$g$ is defined for all real numbers',
      ],
      answer: 0,
      solution:
        'Evaluate straight from the definition: $g(20) = \\frac{400 - 25}{20 - 5} = \\frac{375}{15} = 25$. Now the excluded value. At $x = 5$ the denominator is $0$ and the numerator is $25 - 25 = 0$ as well, so $g(5)$ is $\\frac{0}{0}$ — undefined. The simplified form is tempting here: $x^2 - 25 = (x - 5)(x + 5)$, and cancelling gives $x + 5$, which would happily report $g(5) = 10$. But the cancelling is only legal where $x - 5 \\ne 0$, so the simplified form is a faithful copy of $g$ EVERYWHERE EXCEPT at $x = 5$, the one place the question asks about. Second route, checking the evaluation with the factored form instead of the raw fraction: $g(20) = 20 + 5 = 25$ ✓, matching the division exactly — and that agreement is legitimate precisely because $20 \\ne 5$. (THE PATCHED HOLE reads $g(5) = 10$ off the simplified form, as though cancelling could repair a division by zero ✗. Choice $g(20) = 15$ evaluates the DENOMINATOR, $20 - 5$, instead of the function ✗. Choice "defined for all real numbers" ignores that $x = 5$ zeroes the denominator ✗.)',
    },
    {
      q: 'Let $h(x) = \\dfrac{x^2 - 100}{x + 10}$. Which statement is true?',
      choices: [
        '$h(30) = 20$ and $h(-10) = -20$',
        '$h(30) = 40$ and $h(-10)$ is undefined',
        '$h$ is defined for all real numbers',
        '$h(30) = 20$ and $h(-10)$ is undefined',
      ],
      answer: 3,
      solution:
        'Evaluate first: $h(30) = \\frac{900 - 100}{30 + 10} = \\frac{800}{40} = 20$. Then find the excluded value from the ORIGINAL denominator, before any tidying: $x + 10 = 0$ at $x = -10$, so $h(-10)$ is undefined — and the numerator there is $100 - 100 = 0$, so it is the $\\frac{0}{0}$ kind of undefined, a hole rather than a blow-up. Second route, through the factorisation: $x^2 - 100 = (x - 10)(x + 10)$, so cancelling the $(x + 10)$ leaves $x - 10$ for every $x \\ne -10$. That gives $h(30) = 30 - 10 = 20$ ✓, agreeing with the division, and it shows exactly what the hole is worth: the simplified form would say $-20$ at $x = -10$, but the function itself has no value there at all. (THE PATCHED HOLE answers $h(-10) = -20$, taking the simplified form’s word for a point where the original never existed ✗. Choice $h(30) = 40$ cancels toward the wrong factor and evaluates $x + 10$ ✗. Choice "defined for all real numbers" misses the excluded value entirely ✗.)',
    },
    {
      q: 'Let $m(x) = \\dfrac{4x^2 - 9}{2x - 3}$. Which statement is true?',
      choices: [
        '$m$ is defined for all real numbers',
        '$m(10) = 23$ and $m\\left(\\frac{3}{2}\\right)$ is undefined',
        '$m(10) = 23$ and $m\\left(\\frac{3}{2}\\right) = 6$',
        '$m(10) = 17$ and $m\\left(\\frac{3}{2}\\right)$ is undefined',
      ],
      answer: 1,
      solution:
        'Evaluate by substitution: $m(10) = \\frac{4(100) - 9}{20 - 3} = \\frac{391}{17} = 23$, since $17 \\times 23 = 391$. Now the excluded value, read off the original denominator: $2x - 3 = 0$ at $x = \\frac{3}{2}$, so $m\\left(\\frac{3}{2}\\right)$ is undefined. The numerator vanishes there too — $4 \\cdot \\frac{9}{4} - 9 = 0$ — so once again it is a hole. Second route, factoring the numerator as a difference of squares: $4x^2 - 9 = (2x)^2 - 3^2 = (2x - 3)(2x + 3)$, so cancelling gives $2x + 3$ for every $x \\ne \\frac{3}{2}$. That confirms the evaluation, $2(10) + 3 = 23$ ✓, and it exposes the trap: the simplified form would report $2 \\cdot \\frac{3}{2} + 3 = 6$ at the forbidden input, a value the original function never had. (THE PATCHED HOLE answers $m\\left(\\frac{3}{2}\\right) = 6$ ✗. Choice $m(10) = 17$ reports the denominator $2(10) - 3$ instead of the quotient ✗. Choice "defined for all real numbers" forgets that a denominator with an $x$ in it always forbids something ✗.)',
    },
  ],

  // c8 — a ceiling priced in whole units, where the quantity has to be converted
  //      into those units FIRST. v1 counts hours from hours and minutes, v2
  //      counts days from hours, v3 shrinks the billing unit below an hour so
  //      the conversion runs the other way.
  [
    {
      q: 'A workshop rents a printer for $\\$20$ for each hour or part of an hour. What does a rental of $4$ hours and $10$ minutes cost?',
      choices: ['$\\$80$', '$\\$100$', '$\\$83.33$', '$\\$120$'],
      answer: 1,
      solution:
        'Two steps, and the conversion comes first. Ten minutes is $\\frac{10}{60} = \\frac{1}{6}$ of an hour, so the rental lasts $4\\frac{1}{6}$ hours. Now "each hour or part of an hour" says round UP, which is the ceiling: $\\left\\lceil 4\\frac{1}{6} \\right\\rceil = 5$ billable hours. Cost: $5 \\times \\$20 = \\$100$. Second route, counting the billable blocks one at a time instead of using a ceiling: the first hour is billed, the second, the third and the fourth — that is $4$ blocks covering $4$ full hours, and the leftover $10$ minutes starts a FIFTH block, which the workshop bills in full. Five blocks at $\\$20$ is $\\$100$ ✓, the same number without a single fraction. (THE CHOPPED DECIMAL uses the floor, billing $4$ hours for $\\$80$, which would let those $10$ minutes ride free ✗. Choice $\\$83.33$ prorates the time, $4\\frac{1}{6} \\times \\$20$, which is what a per-minute rate would charge, not a per-hour-or-part one ✗. Choice $\\$120$ bills the four whole hours and then charges TWO more blocks for the single leftover part ✗.)',
    },
    {
      q: 'A storage locker costs $\\$6$ for each day or part of a day. What does it cost to leave a bag in one for $50$ hours?',
      choices: ['$\\$12$', '$\\$12.50$', '$\\$18$', '$\\$24$'],
      answer: 2,
      solution:
        'Convert to days before pricing anything: $50$ hours is $\\frac{50}{24} = 2\\frac{1}{12}$ days, since $48$ hours is exactly $2$ days and $2$ hours are left over. "Each day or part of a day" rounds up: $\\left\\lceil 2\\frac{1}{12} \\right\\rceil = 3$ billable days, so the cost is $3 \\times \\$6 = \\$18$. Second route, walking the clock forward: the first day covers hours $1$ through $24$, the second covers hours $25$ through $48$, and hour $49$ opens a third day that gets billed in full even though only $2$ of its hours are used. Three days at $\\$6$ is $\\$18$ ✓. (THE CHOPPED DECIMAL floors to $2$ days and answers $\\$12$, leaving those last $2$ hours unpaid ✗. Choice $\\$12.50$ prorates, $\\frac{50}{24} \\times \\$6$, charging by the hour when the locker charges by the day ✗. Choice $\\$24$ bills a fourth day, rounding the leftover $2$ hours up to a whole day ON TOP of the third day it already started ✗.)',
    },
    {
      q: 'A boathouse charges $\\$5$ for each $20$ minutes or part of $20$ minutes. What does a trip of $1$ hour and $50$ minutes cost?',
      choices: ['$\\$30$', '$\\$25$', '$\\$27.50$', '$\\$10$'],
      answer: 0,
      solution:
        'The billing unit is smaller than an hour, so convert everything into minutes first: $1$ hour and $50$ minutes is $60 + 50 = 110$ minutes. Then count units: $\\frac{110}{20} = 5.5$ units, and "each $20$ minutes or part of $20$ minutes" rounds up, so $\\lceil 5.5 \\rceil = 6$ billable units. Cost: $6 \\times \\$5 = \\$30$. Second route, marking off the blocks on a clock: the blocks end at $20$, $40$, $60$, $80$ and $100$ minutes — five complete blocks — and the remaining $10$ minutes opens a sixth. Six blocks at $\\$5$ is $\\$30$ ✓, and the two routes agree. (THE CHOPPED DECIMAL keeps only the $5$ complete blocks and answers $\\$25$ ✗. Choice $\\$27.50$ prorates the half block, $5.5 \\times \\$5$, which no "or part of" price ever does ✗. Choice $\\$10$ bills by the hour instead of by the block, rounding $1$ hour $50$ minutes up to $2$ hours ✗.)',
    },
  ],

  // c9 — a floor or ceiling wrapped around a MULTIPLE of $x$, so the interval
  //      has to be unwrapped and then scaled. v1 multiplies inside, v2 divides
  //      inside so the interval stretches instead of shrinking, v3 swaps the
  //      floor for a ceiling and both endpoints change hands.
  [
    {
      q: 'Which describes ALL solutions of $\\lfloor 4x \\rfloor = 30$?',
      choices: ['$7.5 \\le x < 7.75$', '$7.5 < x \\le 7.75$', '$30 \\le x < 31$', '$7.5 \\le x < 8$'],
      answer: 0,
      solution:
        'Unwrap the floor first, treating $4x$ as a single quantity: $\\lfloor 4x \\rfloor = 30$ means $30 \\le 4x < 31$. Now the second step, which is the one the coefficient forces — divide EVERY part by $4$: $\\frac{30}{4} \\le x < \\frac{31}{4}$, that is $7.5 \\le x < 7.75$. Dividing shrinks the step from length $1$ down to length $\\frac{1}{4}$, which is the tell that the answer cannot be a whole unit wide. Second route, by testing candidates in the original equation. At $x = 7.5$: $4x = 30$ and $\\lfloor 30 \\rfloor = 30$ ✓, so the left end is included. At $x = 7.7$: $4x = 30.8$ and $\\lfloor 30.8 \\rfloor = 30$ ✓. At $x = 7.75$: $4x = 31$ and $\\lfloor 31 \\rfloor = 31$ ✗, so the right end is out. At $x = 7.4$: $4x = 29.6$ and $\\lfloor 29.6 \\rfloor = 29$ ✗. The tests bracket exactly the same interval ✓. (THE FLIPPED ENDPOINT closes the wrong end with $7.5 < x \\le 7.75$, but $x = 7.75$ pushes the floor up to $31$ ✗. Choice $30 \\le x < 31$ reports the interval for $4x$ and never divides ✗. Choice $7.5 \\le x < 8$ divides the left end by $4$ and the right end by something else, stretching the step four times too far ✗.)',
    },
    {
      q: 'Which describes ALL solutions of $\\left\\lfloor \\dfrac{x}{5} \\right\\rfloor = 6$?',
      choices: ['$6 \\le x < 7$', '$30 < x \\le 35$', '$30 \\le x < 31$', '$30 \\le x < 35$'],
      answer: 3,
      solution:
        'Unwrap the floor around the whole quantity $\\frac{x}{5}$: the equation says $6 \\le \\frac{x}{5} < 7$. Then undo the division by MULTIPLYING every part by $5$: $30 \\le x < 35$. Dividing inside the floor stretches the step, so this answer is $5$ units wide rather than $1$. Second route, by thinking in blocks instead of inequalities: $\\frac{x}{5}$ lands in the step $[6, 7)$ exactly when $x$ lands in the block of five consecutive units that starts at $5 \\times 6 = 30$ and stops just before $5 \\times 7 = 35$. Test the corners: $\\left\\lfloor \\frac{30}{5} \\right\\rfloor = \\lfloor 6 \\rfloor = 6$ ✓, $\\left\\lfloor \\frac{34}{5} \\right\\rfloor = \\lfloor 6.8 \\rfloor = 6$ ✓, but $\\left\\lfloor \\frac{35}{5} \\right\\rfloor = \\lfloor 7 \\rfloor = 7$ ✗ and $\\left\\lfloor \\frac{29}{5} \\right\\rfloor = \\lfloor 5.8 \\rfloor = 5$ ✗ ✓. (Choice $6 \\le x < 7$ reports the interval for $\\frac{x}{5}$ and forgets to scale back to $x$ ✗. THE FLIPPED ENDPOINT answers $30 < x \\le 35$, losing $x = 30$ and gaining $x = 35$, both of which the corner tests just settled ✗. Choice $30 \\le x < 31$ multiplies the left end by $5$ and leaves the step one unit wide ✗.)',
    },
    {
      q: 'Which describes ALL solutions of $\\lceil 2x \\rceil = 15$?',
      choices: ['$7 \\le x < 7.5$', '$14 < x \\le 15$', '$7 < x \\le 7.5$', '$7.5 \\le x < 8$'],
      answer: 2,
      solution:
        'A ceiling unwraps the other way round from a floor: $\\lceil y \\rceil = 15$ means $14 < y \\le 15$, open on the left and closed on the right, because the number may sit anywhere above $14$ and still round up to $15$, but the moment it reaches $15$ it stops. With $y = 2x$ that reads $14 < 2x \\le 15$, and dividing every part by $2$ gives $7 < x \\le 7.5$. Second route, by testing the original at the interesting inputs. At $x = 7.5$: $2x = 15$ and $\\lceil 15 \\rceil = 15$ ✓, so the right end is included. At $x = 7.2$: $2x = 14.4$ and $\\lceil 14.4 \\rceil = 15$ ✓. At $x = 7$: $2x = 14$ and $\\lceil 14 \\rceil = 14$ ✗, so the left end is out. At $x = 7.6$: $2x = 15.2$ and $\\lceil 15.2 \\rceil = 16$ ✗. Same interval ✓. (THE FLIPPED ENDPOINT answers $7 \\le x < 7.5$, which is the FLOOR-shaped interval and includes an $x$ whose ceiling is $14$ ✗. Choice $14 < x \\le 15$ reports the interval for $2x$ without dividing ✗. Choice $7.5 \\le x < 8$ slides the step one place right, but $x = 7.6$ already fails ✗.)',
    },
  ],

  // c10 — a rational equation solved by clearing the denominator, with the
  //       excluded value waiting to catch a careless answer. v1 and v2 move the
  //       constant and the numerator’s coefficient, v3 sets the fraction equal
  //       to a NEGATIVE number so the signs have to be handled twice.
  [
    {
      q: 'Solve $\\dfrac{x + 30}{x - 10} = 4$.',
      choices: ['$x = \\frac{40}{3}$', '$x = 10$', '$x = \\frac{70}{3}$', '$x = -\\frac{10}{3}$'],
      answer: 2,
      solution:
        'Multiply both sides by $x - 10$ to clear the fraction, distributing the $4$ across BOTH terms: $x + 30 = 4(x - 10) = 4x - 40$. Collect: $70 = 3x$, so $x = \\frac{70}{3}$. Then the step a rational equation always needs — compare the answer with the excluded value. The denominator is zero at $x = 10$, and $\\frac{70}{3} = 23\\frac{1}{3}$ is nowhere near it, so the solution is legal. Verify: $\\frac{70/3 + 90/3}{70/3 - 30/3} = \\frac{160/3}{40/3} = 4$ ✓. Second route, by rewriting the fraction so the variable appears only once: $x + 30 = (x - 10) + 40$, so $\\frac{x + 30}{x - 10} = 1 + \\frac{40}{x - 10}$. Setting that equal to $4$ gives $\\frac{40}{x - 10} = 3$, so $x - 10 = \\frac{40}{3}$ and $x = 10 + \\frac{40}{3} = \\frac{70}{3}$ ✓ — the same value from a route with no distributing in it at all. (THE UNDISTRIBUTED MULTIPLIER writes $x + 30 = 4x - 10$, multiplying only the $x$ by $4$, and answers $\\frac{40}{3}$ ✗. Choice $x = 10$ is exactly the excluded value, where the original fraction has a zero denominator ✗. Choice $-\\frac{10}{3}$ comes from $x + 30 = 4x + 40$, losing the minus sign while distributing ✗.)',
    },
    {
      q: 'Solve $\\dfrac{2x + 5}{x - 20} = 3$.',
      choices: ['$x = 25$', '$x = 65$', '$x = 20$', '$x = -55$'],
      answer: 1,
      solution:
        'Clear the denominator: $2x + 5 = 3(x - 20) = 3x - 60$. Collect the $x$ terms on one side: $65 = x$. Check against the excluded value $x = 20$, where the denominator dies — $65$ is not it, so the solution stands. Verify in the original: $\\frac{2(65) + 5}{65 - 20} = \\frac{135}{45} = 3$ ✓. Second route, by splitting the numerator so the variable appears once: $2x + 5 = 2(x - 20) + 45$, so $\\frac{2x + 5}{x - 20} = 2 + \\frac{45}{x - 20}$. Setting that equal to $3$ leaves $\\frac{45}{x - 20} = 1$, so $x - 20 = 45$ and $x = 65$ ✓ — a completely different arrangement of the same equation, landing on the same number. (THE UNDISTRIBUTED MULTIPLIER writes $2x + 5 = 3x - 20$ and answers $x = 25$ ✗. Choice $x = 20$ is the excluded value itself ✗. Choice $x = -55$ comes from $2x + 5 = 3x + 60$, dropping the minus sign inside the parentheses ✗.)',
    },
    {
      q: 'Solve $\\dfrac{x - 60}{x + 20} = -2$.',
      choices: ['$x = \\frac{80}{3}$', '$x = -20$', '$x = -100$', '$x = \\frac{20}{3}$'],
      answer: 3,
      solution:
        'The right side is negative, so the minus sign has to survive the multiplication: $x - 60 = -2(x + 20) = -2x - 40$. Collect: $3x = 20$, so $x = \\frac{20}{3}$. The excluded value is $x = -20$, and $\\frac{20}{3}$ is positive, so no clash. Verify: $\\frac{20/3 - 180/3}{20/3 + 60/3} = \\frac{-160/3}{80/3} = -2$ ✓ — and the sign is right because the numerator is negative while the denominator is positive. Second route, rewriting so the variable appears once: $x - 60 = (x + 20) - 80$, so $\\frac{x - 60}{x + 20} = 1 - \\frac{80}{x + 20}$. Setting that equal to $-2$ gives $\\frac{80}{x + 20} = 3$, so $x + 20 = \\frac{80}{3}$ and $x = \\frac{80}{3} - \\frac{60}{3} = \\frac{20}{3}$ ✓. (THE UNDISTRIBUTED MULTIPLIER writes $x - 60 = -2x + 20$ and answers $\\frac{80}{3}$ ✗. Choice $x = -20$ is the excluded value ✗. Choice $x = -100$ comes from $x - 60 = 2x + 40$, losing the minus on the $-2$ altogether ✗.)',
    },
  ],

  // c11 — counting the integers inside an absolute-value inequality. v1 keeps a
  //       strict inequality with an ugly fractional endpoint, v2 turns it
  //       non-strict so both endpoints count, v3 puts the variable term second
  //       so dividing by a negative flips the whole chain.
  [
    {
      q: 'How many integers $x$ satisfy $|3x + 5| < 25$?',
      choices: ['$16$', '$17$', '$15$', '$18$'],
      answer: 0,
      solution:
        'Unfold the absolute value into a double inequality: $-25 < 3x + 5 < 25$. Subtract $5$ throughout: $-30 < 3x < 20$. Divide by $3$: $-10 < x < \\frac{20}{3}$, and $\\frac{20}{3} = 6\\frac{2}{3}$. The integers strictly inside run from $-9$ up to $6$, which is $6 - (-9) + 1 = 16$ integers — the $+1$ counts the fencepost at the start of the run. Check the edges in the original: $x = -9$ gives $|-27 + 5| = 22 < 25$ ✓, $x = -10$ gives $|-30 + 5| = 25$, which is not LESS than $25$ ✗, $x = 6$ gives $|23| < 25$ ✓, and $x = 7$ gives $|26|$ ✗. Second route, counting the multiples of $3$ instead of the values of $x$: the chain $-30 < 3x < 20$ asks which multiples of $3$ sit strictly between $-30$ and $20$, and those run $-27, -24, \\ldots, 15, 18$ — from $3(-9)$ to $3(6)$, one for each integer in that run, so the count is the same $16$ ✓. (Choice $17$ counts $x = -10$ as well, reading the strict $<$ as $\\le$ at the end where the two sides come out exactly equal ✗. THE FENCEPOST computes $6 - (-9) = 15$ and forgets that both ends of the run are themselves solutions ✗. Choice $18$ rounds outward at both ends, taking $-10$ through $7$, and neither of those satisfies the original ✗.)',
    },
    {
      q: 'How many integers $x$ satisfy $|2x - 30| \\le 10$?',
      choices: ['$10$', '$9$', '$21$', '$11$'],
      answer: 3,
      solution:
        'Unfold the inequality, keeping the $\\le$ signs since the endpoints are allowed: $-10 \\le 2x - 30 \\le 10$. Add $30$ throughout: $20 \\le 2x \\le 40$. Divide by $2$: $10 \\le x \\le 20$. Both endpoints belong, so the integers run $10, 11, \\ldots, 20$, and there are $20 - 10 + 1 = 11$ of them. Check the ends in the original: $x = 10$ gives $|20 - 30| = 10 \\le 10$ ✓ and $x = 20$ gives $|40 - 30| = 10 \\le 10$ ✓, while $x = 21$ gives $|12| = 12$ ✗. Second route, pulling the coefficient out and reading the result as a distance: $|2x - 30| = 2|x - 15|$, so the inequality says $2|x - 15| \\le 10$, that is $|x - 15| \\le 5$ — every $x$ within $5$ of $15$. That is the centre $15$, plus five integers below it and five above: $1 + 5 + 5 = 11$ ✓, the same count with no chain of inequalities at all. (THE FENCEPOST subtracts $20 - 10$ and answers $10$ ✗. Choice $9$ treats $\\le$ as $<$ and throws away both endpoints, counting only $11$ through $19$ ✗. Choice $21$ counts the integers from $20$ to $40$, forgetting to divide the chain by $2$ ✗.)',
    },
    {
      q: 'How many integers $x$ satisfy $|30 - 4x| < 50$?',
      choices: ['$23$', '$24$', '$25$', '$26$'],
      answer: 1,
      solution:
        'The variable sits behind a minus sign, so the safest first move is to pull the coefficient out: $|30 - 4x| = |{-4}(x - 7.5)| = 4|x - 7.5|$, since a factor comes out of an absolute value as its size. The inequality becomes $4|x - 7.5| < 50$, that is $|x - 7.5| < 12.5$ — every $x$ strictly within $12.5$ of $7.5$. That is $-5 < x < 20$, so the integers run from $-4$ to $19$: $19 - (-4) + 1 = 24$ of them. Second route, grinding through the chain and watching the flip: $-50 < 30 - 4x < 50$ becomes $-80 < -4x < 20$ after subtracting $30$, and dividing by $-4$ REVERSES both inequality signs, giving $20 > x > -5$ ✓ — the same interval, so the flip was handled correctly. Check the edges in the original: $x = 19$ gives $|30 - 76| = 46 < 50$ ✓, $x = 20$ gives $|30 - 80| = 50$, not less than $50$ ✗, $x = -4$ gives $|30 + 16| = 46 < 50$ ✓, and $x = -5$ gives $|30 + 20| = 50$ ✗. (THE FENCEPOST computes $19 - (-4) = 23$ and forgets the $+1$ ✗. Choice $25$ lets one endpoint in, reading the strict $<$ as $\\le$ at a place where both sides come out to exactly $50$ ✗. Choice $26$ lets BOTH endpoints in, counting $-5$ through $20$ ✗.)',
    },
  ],

  // c12 — a piecewise function evaluated at two inputs from two different
  //       branches, with a second special function living inside a branch. v1
  //       hides an absolute value and a floor, v2 puts one input exactly ON the
  //       boundary, v3 changes direction and asks for a DIFFERENCE.
  [
    {
      q: 'Let $f(x) = |x| + 10$ if $x < 5$, and $f(x) = \\left\\lfloor \\frac{x}{2} \\right\\rfloor$ if $x \\ge 5$. What is $f(-20) + f(15)$?',
      choices: ['$37$', '$38$', '$-3$', '$55$'],
      answer: 0,
      solution:
        'Route each input to its own branch before evaluating anything. For $f(-20)$: is $-20 < 5$? Yes, so use the first branch, $f(-20) = |-20| + 10 = 20 + 10 = 30$ — the absolute value turns the negative input positive, which is the whole reason the branch is written with bars. For $f(15)$: is $15 \\ge 5$? Yes, so use the second branch, $f(15) = \\left\\lfloor \\frac{15}{2} \\right\\rfloor = \\lfloor 7.5 \\rfloor = 7$, since floor rounds DOWN and $7 \\le 7.5 < 8$. Sum: $30 + 7 = 37$. Second route, checking each piece a different way. The absolute value is itself piecewise — for a negative input it returns $-x$ — so $|-20| = -(-20) = 20$, confirming $30$ ✓. And the floor can be checked by the interval rule: $\\left\\lfloor \\frac{15}{2} \\right\\rfloor = 7$ exactly when $7 \\le \\frac{15}{2} < 8$, that is $14 \\le 15 < 16$ ✓, which is plainly true. Both pieces confirmed, so the sum is $37$ ✓. (Choice $38$ takes the CEILING of $7.5$, but the branch asks for a floor ✗. THE WRONG BRANCH sends $-20$ to the floor rule, computing $\\lfloor -10 \\rfloor = -10$ for a sum of $-3$ ✗, or sends $15$ to the first rule, computing $|15| + 10 = 25$ for a sum of $55$ ✗.)',
    },
    {
      q: 'Let $g(x) = \\sqrt{x + 60}$ if $x \\le 4$, and $g(x) = 2x + 5$ if $x > 4$. What is $g(4) + g(40)$?',
      choices: ['$98$', '$18$', '$93$', '$147$'],
      answer: 2,
      solution:
        'One of these inputs sits exactly ON the boundary, so read the inequality signs before touching the formulas. For $g(4)$: is $4 \\le 4$? Yes — the first branch owns the boundary. Is $4 > 4$? No. So $g(4) = \\sqrt{4 + 60} = \\sqrt{64} = 8$. For $g(40)$: since $40 > 4$, the second branch applies, and $g(40) = 2(40) + 5 = 85$. Sum: $8 + 85 = 93$. Second route, confirming each piece independently. The radical is confirmed by squaring back: $8^2 = 64$, and $64$ is exactly $4 + 60$ ✓, so $\\sqrt{64} = 8$ and not something near it. The linear piece is confirmed by walking up from a nearby input: $g(20) = 45$ and each extra unit of $x$ adds $2$, so twenty more units add $40$, giving $g(40) = 85$ ✓. Both pieces agree, so the sum is $93$ ✓. (THE WRONG BRANCH hands the boundary to the second rule, computing $2(4) + 5 = 13$ for a sum of $98$ — but $4 > 4$ is false, so that rule has no claim on $x = 4$ ✗, or hands $40$ to the radical, computing $\\sqrt{100} = 10$ for a sum of $18$ ✗. Choice $147$ takes the root before the addition, reading $\\sqrt{4} + 60 = 62$ instead of $\\sqrt{64}$ ✗.)',
    },
    {
      q: 'Let $h(x) = 5 - 4x$ if $x < -2$, and $h(x) = \\lceil x \\rceil$ if $x \\ge -2$. What is $h(-5) - h(-1.5)$?',
      choices: ['$27$', '$26$', '$14$', '$24$'],
      answer: 1,
      solution:
        'Route both inputs first, then subtract — and the subtraction is where the second minus sign appears. For $h(-5)$: is $-5 < -2$? Yes, so $h(-5) = 5 - 4(-5) = 5 + 20 = 25$. For $h(-1.5)$: is $-1.5 < -2$? No, since $-1.5$ lies to the RIGHT of $-2$ on the number line; and $-1.5 \\ge -2$ is true, so the ceiling branch applies: $\\lceil -1.5 \\rceil = -1$, because up from $-1.5$ means moving toward zero and the smallest integer at or above $-1.5$ is $-1$. Now the difference: $25 - (-1) = 25 + 1 = 26$. Second route, confirming the two pieces separately. The linear piece: $5 - 4x$ at $x = -5$ can be read as $5$ plus four copies of $5$, which is $5 + 20 = 25$ ✓. The ceiling: $-1.5$ sits between $-2$ and $-1$, so its floor is $-2$ and its ceiling is $-1$; those two are consecutive, and the ceiling is the one nearer zero ✓. Subtracting a negative adds, so $26$ ✓. (Choice $27$ takes the FLOOR of $-1.5$, getting $-2$, and computes $25 - (-2)$ ✗. Choice $24$ has the two values right but adds instead of subtracting, or drops the sign when subtracting a negative ✗. THE WRONG BRANCH sends $-1.5$ to the linear rule, computing $5 - 4(-1.5) = 11$ and then $25 - 11 = 14$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 20,
  challenge,
}
