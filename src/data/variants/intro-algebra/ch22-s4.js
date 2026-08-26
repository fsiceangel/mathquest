// Introduction to Algebra chapter 22 — variations for the CHALLENGE set
// (Special Manipulations).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - EVERY CHALLENGE ITEM KEEPS ITS TWO STEPS. A radical equation is squared AND
//    then every candidate is checked in the ORIGINAL. A symmetric problem
//    recovers the missing product AND then feeds it into an identity. A Vieta
//    problem divides out a leading coefficient AND then applies an identity.
//    Nothing here finishes in one move.
//  - THE CHECK IS PART OF THE ANSWER, NOT A FORMALITY. Squaring can invent
//    roots, so a candidate is not a solution until it survives the equation we
//    started with. Every radical item names which candidate died and why.
//  - CROSS TERMS ARE WHERE THE ARITHMETIC LIVES. Squaring $x + \frac{1}{x}$
//    costs a $2$; cubing it costs $3\left(x + \frac{1}{x}\right)$; and the minus
//    version flips both corrections to the other side. Every distractor in those
//    families is one of those corrections dropped or mis-signed.
//  - Every answer is verified TWO independent ways and the second route is
//    written into the solution: a sign argument beside a factorisation, a
//    step-by-step numerical climb beside a quadratic, a product identity beside
//    a binomial expansion, an explicit pair of numbers beside a symmetric
//    identity.
//  - Eight traps run through this chapter, and every distractor is one of them,
//    named in the solution with its wrong arithmetic worked out. THE UNCHECKED
//    ROOT: keeping a candidate the original equation rejects. THE LOST CORRECTION:
//    reading $k^3$ where $k^3 - 3k$ was asked for. THE FLIPPED CORRECTION: adding
//    the correction term where it should be subtracted, or the reverse. THE
//    SHRUNKEN CORRECTION: subtracting $3$ instead of $3k$, or $2xy$ instead of
//    $4xy$. THE UNDIVIDED COEFFICIENT: reading Vieta straight off a quadratic
//    whose leading coefficient is not $1$. THE MISSING ROOT: stopping at
//    $(x-y)^2$ or at $\sqrt{x}$ instead of at $x$. THE WRONG SURVIVOR: keeping
//    the negative root of a self-similar expression that can only be positive.
//    THE EARLY STOP: evaluating an infinite expression one level deep.
//  - No two choices inside an item name the same value, even written two ways.
//  - No person, shop, company, or brand is ever named.

const challenge = [
  // c1 — a single radical equal to a linear expression: square, factor, then
  //      check both candidates. v1 loses one candidate to the sign rule, v2
  //      keeps BOTH (the surprise), v3 loses one again but from a right side
  //      that is negative for a completely different reason.
  [
    {
      q: 'Solve $\\sqrt{x + 8} = x + 2$.',
      choices: ['$x = -4$ only', '$x = 1$ only', 'Both $x = 1$ and $x = -4$', 'No solution'],
      answer: 1,
      solution:
        'Square both sides: $x + 8 = x^2 + 4x + 4$, so $x^2 + 3x - 4 = 0$, which factors as $(x + 4)(x - 1) = 0$ and offers the candidates $x = 1$ and $x = -4$. Candidates are not solutions yet — squaring is exactly where fake roots get born, so test both in the ORIGINAL equation. For $x = 1$: the left side is $\\sqrt{1 + 8} = \\sqrt{9} = 3$ and the right side is $1 + 2 = 3$ ✓. For $x = -4$: the left side is $\\sqrt{-4 + 8} = \\sqrt{4} = 2$ and the right side is $-4 + 2 = -2$ ✗. A square root is never negative, so that candidate is extraneous and only $x = 1$ survives. Second route, ruling the bad root out before any factoring happens: $\\sqrt{x + 8}$ is never negative, so the right side $x + 2$ must satisfy $x + 2 \\ge 0$, that is $x \\ge -2$. The candidate $x = -4$ sits below that line and is disqualified on sight, with no arithmetic at all ✓ — and a picture agrees, since the rising curve $y = \\sqrt{x + 8}$ crosses the line $y = x + 2$ exactly once, at the point $(1, 3)$. (THE UNCHECKED ROOT keeps $x = -4$ ✗, the very candidate the sign rule kills. Choice “both” ✗ trusts the squared equation and never returns to the original. Choice “no solution” ✗ throws the good root away with the bad one.)',
    },
    {
      q: 'Solve $\\sqrt{7x - 12} = x$.',
      choices: ['$x = 3$ only', '$x = 4$ only', 'No solution', 'Both $x = 3$ and $x = 4$'],
      answer: 3,
      solution:
        'Square both sides: $7x - 12 = x^2$, so $x^2 - 7x + 12 = 0$, or $(x - 3)(x - 4) = 0$, giving the candidates $x = 3$ and $x = 4$. Now check each one in the original. For $x = 3$: $\\sqrt{21 - 12} = \\sqrt{9} = 3$ ✓. For $x = 4$: $\\sqrt{28 - 12} = \\sqrt{16} = 4$ ✓. This time BOTH candidates survive — squaring does not always lie, which is precisely why we check instead of assuming. Second route, predicting the double survival in advance: the left side is never negative, so any solution needs $x \\ge 0$, and both candidates clear that bar comfortably. Squaring only manufactures a fake root when it hides a sign clash, and there is no sign clash here. A separate confirmation comes from the coefficients: two roots that sum to $7$ and multiply to $12$ must be $3$ and $4$ ✓, which matches the factoring exactly. (Choice $x = 3$ only ✗ checks one candidate and stops. Choice $x = 4$ only ✗ does the same from the other end. Choice “no solution” ✗ assumes squaring must have spoiled something.)',
    },
    {
      q: 'Solve $\\sqrt{4x + 1} = x - 5$.',
      choices: ['$x = 2$ only', 'Both $x = 2$ and $x = 12$', '$x = 12$ only', 'No solution'],
      answer: 2,
      solution:
        'Square both sides: $4x + 1 = x^2 - 10x + 25$, so $x^2 - 14x + 24 = 0$, which factors as $(x - 2)(x - 12) = 0$ and gives the candidates $x = 2$ and $x = 12$. Check them in the original. For $x = 12$: $\\sqrt{48 + 1} = \\sqrt{49} = 7$ and $12 - 5 = 7$ ✓. For $x = 2$: $\\sqrt{8 + 1} = \\sqrt{9} = 3$ but $2 - 5 = -3$ ✗ — the two sides are negatives of each other, which is the classic fingerprint of a root created by squaring. Only $x = 12$ is a solution. Second route, by a range argument done first: the left side is a square root, so it cannot be negative, which forces $x - 5 \\ge 0$ and therefore $x \\ge 5$. Every solution must live at $5$ or above, so $x = 2$ was never eligible ✓, and $x = 12$ is the only candidate left standing. Notice the two routes disagree about nothing but arrive from opposite directions — one substitutes, the other never touches a number. (THE UNCHECKED ROOT keeps $x = 2$ ✗. Choice “both” ✗ reports the squared equation’s answer without returning to the original. Choice “no solution” ✗ discards a candidate that checks perfectly.)',
    },
  ],

  // c2 — cube the relation $x + \frac{1}{x} = k$ to reach $x^3 + \frac{1}{x^3}$.
  //      The lane is fixed: $k = 11, 12, 13$, so the answers are $k^3 - 3k$,
  //      namely $1298$, $1692$ and $2158$.
  [
    {
      q: 'If $x + \\frac{1}{x} = 11$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$1298$', '$1331$', '$1328$', '$1364$'],
      answer: 0,
      solution:
        'Cube the given relation and watch the middle terms: $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + 3x + \\frac{3}{x} + \\frac{1}{x^3} = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$. The two middle terms collapsed into $3$ copies of the original expression, which we already know equals $11$. So $11^3 = 1331$ gives $1331 = x^3 + \\frac{1}{x^3} + 33$, and therefore $x^3 + \\frac{1}{x^3} = 1331 - 33 = 1298$. Second route, climbing one power at a time instead of cubing. Squaring gives $x^2 + \\frac{1}{x^2} = 11^2 - 2 = 119$. Now multiply the first power by the second: $\\left(x + \\frac{1}{x}\\right)\\left(x^2 + \\frac{1}{x^2}\\right) = x^3 + \\frac{1}{x} + x + \\frac{1}{x^3} = \\left(x^3 + \\frac{1}{x^3}\\right) + \\left(x + \\frac{1}{x}\\right)$. So $11 \\times 119 = 1309$ equals $x^3 + \\frac{1}{x^3} + 11$, giving $1309 - 11 = 1298$ ✓ — the same value from a product that never expands a cube. (THE LOST CORRECTION answers $1331 = 11^3$, skipping the correction entirely ✗. THE SHRUNKEN CORRECTION subtracts $3$ instead of $3k$ and answers $1328$ ✗. THE FLIPPED CORRECTION adds where it should subtract, answering $1331 + 33 = 1364$ ✗ — that is the formula for the MINUS family, not this one.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 12$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$1728$', '$1725$', '$1764$', '$1692$'],
      answer: 3,
      solution:
        'Cubing gives $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$, because the two middle terms $3x$ and $\\frac{3}{x}$ regroup into $3\\left(x + \\frac{1}{x}\\right)$. With $k = 12$ that reads $1728 = x^3 + \\frac{1}{x^3} + 36$, so $x^3 + \\frac{1}{x^3} = 1728 - 36 = 1692$. Second route, by building up through the square. First $x^2 + \\frac{1}{x^2} = 144 - 2 = 142$, then use the identity $\\left(x + \\frac{1}{x}\\right)\\left(x^2 + \\frac{1}{x^2}\\right) = \\left(x^3 + \\frac{1}{x^3}\\right) + \\left(x + \\frac{1}{x}\\right)$: the left side is $12 \\times 142 = 1704$, so $x^3 + \\frac{1}{x^3} = 1704 - 12 = 1692$ ✓. The two routes multiply completely different numbers — $12^3$ against $12 \\times 142$ — so their agreement is real evidence, not a repeat of the same arithmetic. (THE LOST CORRECTION answers $1728$ ✗. THE SHRUNKEN CORRECTION subtracts a bare $3$ and answers $1725$ ✗. THE FLIPPED CORRECTION answers $1728 + 36 = 1764$ ✗.)',
    },
    {
      q: 'If $x + \\frac{1}{x} = 13$, what is $x^3 + \\frac{1}{x^3}$?',
      choices: ['$2197$', '$2158$', '$2194$', '$2236$'],
      answer: 1,
      solution:
        'The cube of the given expression carries three copies of the expression itself inside it: $\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right)$. So $13^3 = 2197$ gives $2197 = x^3 + \\frac{1}{x^3} + 39$, and $x^3 + \\frac{1}{x^3} = 2197 - 39 = 2158$. Second route, through the second power. Squaring the given yields $x^2 + \\frac{1}{x^2} = 169 - 2 = 167$, and multiplying the first and second powers gives $13 \\times 167 = 2171 = \\left(x^3 + \\frac{1}{x^3}\\right) + 13$, so the answer is $2171 - 13 = 2158$ ✓. Worth noticing: $x$ itself is an ugly irrational number here (it solves $x^2 - 13x + 1 = 0$), and neither route ever needed to know it. (THE LOST CORRECTION answers $2197$ ✗. THE SHRUNKEN CORRECTION subtracts $3$ rather than $3k$ and answers $2194$ ✗. THE FLIPPED CORRECTION answers $2197 + 39 = 2236$ ✗, using the rule that belongs to $x - \\frac{1}{x}$.)',
    },
  ],

  // c3 — an infinitely nested radical $\sqrt{n + \sqrt{n + \cdots}}$ whose value
  //      is a whole number, because $n = m^2 - m$. The lane fixes $m = 17, 18,
  //      19$, so $n = 272, 306, 342$ and the answers are $17$, $18$, $19$.
  [
    {
      q: 'Evaluate $\\sqrt{272 + \\sqrt{272 + \\sqrt{272 + \\cdots}}}$.',
      choices: ['$16$', '$-16$', '$17$', '$\\sqrt{272}$'],
      answer: 2,
      solution:
        'Name the whole expression $x$. Under the outer radical sits $272$ plus another copy of the same infinite expression, so $x = \\sqrt{272 + x}$. Squaring gives $x^2 = 272 + x$, that is $x^2 - x - 272 = 0$, which factors as $(x - 17)(x + 16) = 0$. The roots are $17$ and $-16$, but the value of a square root cannot be negative, so $x = 17$. Check it in the self-similar equation: $\\sqrt{272 + 17} = \\sqrt{289} = 17$ ✓. Second route, by climbing the tower numerically and watching where it settles: $\\sqrt{272} \\approx 16.492$, then $\\sqrt{272 + 16.492} = \\sqrt{288.492} \\approx 16.985$, then $\\sqrt{288.985} \\approx 16.9996$, then $\\approx 17.00000$ — each new radical drags the value closer to $17$ and it never passes it ✓. That climb also explains why the negative root is impossible: every step of the tower is a positive number. (THE WRONG SURVIVOR answers $-16$, the root the positivity of a square root forbids ✗. Choice $16$ ✗ comes from spotting that $272 = 16 \\times 17$ and reading off the smaller factor; the equation asks for $x$ with $x^2 - x = 272$, and $x - 1 = 16$ means $x = 17$. THE EARLY STOP answers $\\sqrt{272} \\approx 16.49$, the value one single radical deep ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{306 + \\sqrt{306 + \\sqrt{306 + \\cdots}}}$.',
      choices: ['$18$', '$17$', '$-17$', '$\\sqrt{306}$'],
      answer: 0,
      solution:
        'Let $x$ stand for the whole expression. Everything under the first radical is $306$ plus a copy of $x$ itself, so $x = \\sqrt{306 + x}$ and therefore $x^2 - x - 306 = 0$. Since $306 = 17 \\times 18$, this factors as $(x - 18)(x + 17) = 0$, and the negative root is impossible for a square root, leaving $x = 18$. Check: $\\sqrt{306 + 18} = \\sqrt{324} = 18$ ✓. Second route, without solving any quadratic. Ask what whole number $m$ could work: if the value is $m$, then $m^2 = 306 + m$, so $m^2 - m = 306$, meaning $m(m - 1) = 306$. Splitting $306$ into consecutive factors gives $18 \\times 17$, so $m = 18$ ✓. A numerical climb confirms it too: $\\sqrt{306} \\approx 17.493$, then $\\sqrt{323.493} \\approx 17.986$, then $\\approx 17.9996$, closing in on $18$ ✓. (Choice $17$ ✗ takes the smaller of the two consecutive factors — that is $m - 1$, the number one below the answer. THE WRONG SURVIVOR answers $-17$ ✗. THE EARLY STOP answers $\\sqrt{306} \\approx 17.49$, one radical deep ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{342 + \\sqrt{342 + \\sqrt{342 + \\cdots}}}$.',
      choices: ['$18$', '$-18$', '$\\sqrt{342}$', '$19$'],
      answer: 3,
      solution:
        'Call the expression $x$. Self-similarity gives $x = \\sqrt{342 + x}$, so $x^2 - x - 342 = 0$. Because $342 = 18 \\times 19$, the factorisation is $(x - 19)(x + 18) = 0$, and only the positive root can be the value of a square root, so $x = 19$. Check: $\\sqrt{342 + 19} = \\sqrt{361} = 19$ ✓. Second route, reading the structure of the number instead of factoring the quadratic: a nested radical of this kind equals a whole number $m$ exactly when the number inside is $m^2 - m$, and $19^2 - 19 = 361 - 19 = 342$ ✓, which pins $m = 19$ immediately. A numerical climb agrees: $\\sqrt{342} \\approx 18.493$, then $\\sqrt{360.493} \\approx 18.987$, then $\\approx 18.9997$ ✓. Compare with the answer $18$: to get $18$ the number inside would have to be $18^2 - 18 = 306$, a different problem entirely. (Choice $18$ ✗ is the smaller consecutive factor of $342$, one below the answer. THE WRONG SURVIVOR answers $-18$ ✗. THE EARLY STOP answers $\\sqrt{342} \\approx 18.49$ ✗.)',
    },
  ],

  // c4 — an infinite continued fraction $a + \frac{1}{a + \cdots}$, whose value
  //      is $\frac{a + \sqrt{a^2 + 4}}{2}$. The lane fixes $a = 12, 16, 20$, so
  //      the answers simplify to $6 + \sqrt{37}$, $8 + \sqrt{65}$ and
  //      $10 + \sqrt{101}$.
  [
    {
      q: 'Evaluate $12 + \\frac{1}{12 + \\frac{1}{12 + \\cdots}}$.',
      choices: ['$6 - \\sqrt{37}$', '$6 + \\sqrt{37}$', '$\\frac{12 + \\sqrt{145}}{2}$', '$\\frac{145}{12}$'],
      answer: 1,
      solution:
        'Name the whole fraction $x$. The denominator underneath the first "$12 +$" is the entire fraction over again, so $x = 12 + \\frac{1}{x}$. Multiply through by $x$: $x^2 = 12x + 1$, or $x^2 - 12x - 1 = 0$. The quadratic formula gives $x = \\frac{12 \\pm \\sqrt{144 + 4}}{2} = \\frac{12 \\pm \\sqrt{148}}{2}$, and since $148 = 4 \\times 37$ this simplifies: $\\sqrt{148} = 2\\sqrt{37}$, so $x = 6 \\pm \\sqrt{37}$. The expression is plainly bigger than $12$, so $x = 6 + \\sqrt{37} \\approx 12.083$. Second route, by building the fraction from the inside out and watching the values settle: $12$, then $12 + \\frac{1}{12} = \\frac{145}{12} \\approx 12.0833$, then $12 + \\frac{12}{145} \\approx 12.08276$, then $\\approx 12.082763$ — the approximations bounce above and below and close in on $12.0827625$, which is exactly $6 + \\sqrt{37}$ ✓. (THE WRONG SURVIVOR answers $6 - \\sqrt{37} \\approx -0.083$ ✗, a negative number where every piece of the fraction is positive. Choice $\\frac{12 + \\sqrt{145}}{2} \\approx 12.021$ ✗ computes the discriminant as $a^2 + 1$; in $b^2 - 4ac$ the constant $-1$ is multiplied by $-4$, so it contributes $+4$, not $+1$. THE EARLY STOP answers $\\frac{145}{12}$ ✗, the value after only two levels of the fraction — close, but the true value is irrational and never a fraction at all.)',
    },
    {
      q: 'Evaluate $16 + \\frac{1}{16 + \\frac{1}{16 + \\cdots}}$.',
      choices: ['$\\frac{16 + \\sqrt{257}}{2}$', '$8 - \\sqrt{65}$', '$8 + \\sqrt{65}$', '$\\frac{257}{16}$'],
      answer: 2,
      solution:
        'Let $x$ be the value of the whole fraction. Self-similarity gives $x = 16 + \\frac{1}{x}$, so $x^2 - 16x - 1 = 0$ and $x = \\frac{16 \\pm \\sqrt{256 + 4}}{2} = \\frac{16 \\pm \\sqrt{260}}{2}$. Since $260 = 4 \\times 65$, this is $\\frac{16 \\pm 2\\sqrt{65}}{2} = 8 \\pm \\sqrt{65}$, and the fraction is clearly larger than $16$, so $x = 8 + \\sqrt{65} \\approx 16.0623$. Second route, checking the answer by feeding it back into the original relation rather than re-solving: if $x = 8 + \\sqrt{65}$, then $\\frac{1}{x} = \\frac{1}{8 + \\sqrt{65}} = \\frac{\\sqrt{65} - 8}{(\\sqrt{65} + 8)(\\sqrt{65} - 8)} = \\frac{\\sqrt{65} - 8}{65 - 64} = \\sqrt{65} - 8$. Then $16 + \\frac{1}{x} = 16 + \\sqrt{65} - 8 = 8 + \\sqrt{65} = x$ ✓ — the relation holds exactly, with no decimals anywhere. (Choice $\\frac{16 + \\sqrt{257}}{2} \\approx 16.031$ ✗ uses a discriminant of $a^2 + 1$ where $b^2 - 4ac$ gives $a^2 + 4$. THE WRONG SURVIVOR answers $8 - \\sqrt{65} \\approx -0.062$ ✗. THE EARLY STOP answers $\\frac{257}{16} = 16 + \\frac{1}{16}$ ✗, the fraction cut off after two levels.)',
    },
    {
      q: 'Evaluate $20 + \\frac{1}{20 + \\frac{1}{20 + \\cdots}}$.',
      choices: ['$10 + \\sqrt{101}$', '$\\frac{401}{20}$', '$10 - \\sqrt{101}$', '$\\frac{20 + \\sqrt{401}}{2}$'],
      answer: 0,
      solution:
        'Call the fraction $x$; the denominator after the leading $20$ is a copy of $x$, so $x = 20 + \\frac{1}{x}$ and $x^2 - 20x - 1 = 0$. Then $x = \\frac{20 \\pm \\sqrt{400 + 4}}{2} = \\frac{20 \\pm \\sqrt{404}}{2}$, and $404 = 4 \\times 101$ gives $\\sqrt{404} = 2\\sqrt{101}$, so $x = 10 \\pm \\sqrt{101}$. Only the larger root can be right, since the expression exceeds $20$: $x = 10 + \\sqrt{101} \\approx 20.04988$. Second route, by substitution back into the defining relation: with $x = 10 + \\sqrt{101}$, rationalising gives $\\frac{1}{x} = \\frac{\\sqrt{101} - 10}{101 - 100} = \\sqrt{101} - 10$, so $20 + \\frac{1}{x} = 10 + \\sqrt{101} = x$ ✓ exactly. A numerical climb agrees: $20$, then $20.05$, then $20.049875$, settling at $20.0498756$ ✓. (THE EARLY STOP answers $\\frac{401}{20} = 20.05$ ✗, two levels deep. THE WRONG SURVIVOR answers $10 - \\sqrt{101} \\approx -0.05$ ✗. Choice $\\frac{20 + \\sqrt{401}}{2} \\approx 20.012$ ✗ builds the discriminant as $a^2 + 1$ instead of $a^2 + 4$.)',
    },
  ],

  // c5 — the sum and product of two numbers are given and the size of their
  //      DIFFERENCE is wanted, so the identity $(x-y)^2 = (x+y)^2 - 4xy$ must be
  //      used and then a square root taken. Lane: $S = 21, 22, 23$.
  [
    {
      q: 'If $x + y = 21$ and $xy = 90$, what is $|x - y|$?',
      choices: ['$81$', '$15$', '$21$', '$9$'],
      answer: 3,
      solution:
        'The difference is not symmetric, but its SQUARE is, and that is the way in: $(x - y)^2 = x^2 - 2xy + y^2 = (x + y)^2 - 4xy = 441 - 360 = 81$. That is the squared difference, so one step remains — take the square root: $|x - y| = \\sqrt{81} = 9$. Second route, by finding the two numbers outright. Running Vieta backwards, they are the roots of $t^2 - 21t + 90 = 0$, which factors as $(t - 6)(t - 15) = 0$, so the numbers are $6$ and $15$. Check both conditions: $6 + 15 = 21$ ✓ and $6 \\times 15 = 90$ ✓, and the difference is $|6 - 15| = 9$ ✓. The identity route never needed the numbers; the factoring route never needed the identity. (THE MISSING ROOT answers $81$, stopping at the squared difference ✗. Choice $15$ ✗ reports the larger of the two numbers rather than the gap between them. Choice $21$ ✗ hands back the given sum, confusing $x + y$ with $|x - y|$.)',
    },
    {
      q: 'If $x + y = 22$ and $xy = 85$, what is $|x - y|$?',
      choices: ['$12$', '$144$', '$17$', '$22$'],
      answer: 0,
      solution:
        'Square the difference so it becomes symmetric: $(x - y)^2 = (x + y)^2 - 4xy = 484 - 340 = 144$. Then finish the job with a square root: $|x - y| = \\sqrt{144} = 12$. Watch the coefficient — it is $4xy$, not $2xy$; subtracting only $2xy$ would give $x^2 + y^2$, a different quantity altogether. Second route, by recovering the numbers themselves: they are the roots of $t^2 - 22t + 85 = 0$, and since $5 \\times 17 = 85$ with $5 + 17 = 22$, the factorisation is $(t - 5)(t - 17) = 0$. The numbers are $5$ and $17$, so the difference is $|5 - 17| = 12$ ✓, matching the identity exactly. (THE MISSING ROOT answers $144$ ✗ — that is $(x - y)^2$, and the question asked for $|x - y|$. Choice $17$ ✗ is the larger number, not the difference. Choice $22$ ✗ repeats the given sum.)',
    },
    {
      q: 'If $x + y = 23$ and $xy = 76$, what is $|x - y|$?',
      choices: ['$225$', '$23$', '$15$', '$19$'],
      answer: 2,
      solution:
        'Use the difference identity: $(x - y)^2 = (x + y)^2 - 4xy = 529 - 304 = 225$, so $|x - y| = \\sqrt{225} = 15$. Two steps, and the square root at the end is the one that gets skipped. Second route, by finding $x$ and $y$: they are the roots of $t^2 - 23t + 76 = 0$, which factors as $(t - 4)(t - 19) = 0$ since $4 + 19 = 23$ ✓ and $4 \\times 19 = 76$ ✓. The difference is $|4 - 19| = 15$ ✓. As a bonus check, the two identities fit together: $x^2 + y^2 = 529 - 152 = 377$, and indeed $16 + 361 = 377$ ✓. (THE MISSING ROOT answers $225$, the squared difference left un-rooted ✗. Choice $23$ ✗ is the given sum. Choice $19$ ✗ is the larger of the two numbers.)',
    },
  ],

  // c6 — Vieta where the leading coefficient is NOT $1$, so the sum and product
  //      must be divided out before the identity $r^2 + s^2 = (r+s)^2 - 2rs$ can
  //      be used. Lane: leading coefficients $3$, $5$, $4$.
  [
    {
      q: 'Let $r$ and $s$ be the roots of $3x^2 - 15x + 6 = 0$. What is $r^2 + s^2$?',
      choices: ['$213$', '$25$', '$21$', '$221$'],
      answer: 2,
      solution:
        'Vieta’s relations are written for a leading coefficient of $1$, so divide the whole equation by $3$ first: $x^2 - 5x + 2 = 0$. Now read them off: $r + s = 5$ and $rs = 2$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 25 - 4 = 21$. Second route, by actually solving the quadratic and squaring the roots. The quadratic formula gives $x = \\frac{5 \\pm \\sqrt{25 - 8}}{2} = \\frac{5 \\pm \\sqrt{17}}{2}$, so $r^2 + s^2 = \\frac{(5 + \\sqrt{17})^2 + (5 - \\sqrt{17})^2}{4} = \\frac{(25 + 10\\sqrt{17} + 17) + (25 - 10\\sqrt{17} + 17)}{4} = \\frac{84}{4} = 21$ ✓. The $\\sqrt{17}$ terms cancel in pairs, which is the whole reason a symmetric combination of ugly roots comes out clean. (THE UNDIVIDED COEFFICIENT reads $r + s = 15$ and $rs = 6$ straight off the original and answers $225 - 12 = 213$ ✗. Choice $25$ ✗ divides correctly but forgets to subtract $2rs$, reporting $(r+s)^2$ alone. Choice $221$ ✗ divides the constant but not the linear coefficient, computing $225 - 2 \\times 2$.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $5x^2 - 20x + 15 = 0$. What is $r^2 + s^2$?',
      choices: ['$370$', '$10$', '$394$', '$16$'],
      answer: 1,
      solution:
        'Divide the equation by its leading coefficient before touching Vieta: $x^2 - 4x + 3 = 0$. Then $r + s = 4$ and $rs = 3$, so $r^2 + s^2 = 16 - 6 = 10$. Second route, and here it is unusually easy because the roots are whole numbers: $x^2 - 4x + 3 = (x - 1)(x - 3)$, so the roots are $1$ and $3$, and $1^2 + 3^2 = 1 + 9 = 10$ ✓. Substituting back into the ORIGINAL equation confirms nothing was lost in the division: $5(1)^2 - 20(1) + 15 = 0$ ✓ and $5(9) - 60 + 15 = 0$ ✓. Dividing by $5$ changes the equation’s appearance but not one of its roots. (THE UNDIVIDED COEFFICIENT uses $r + s = 20$ and $rs = 15$, answering $400 - 30 = 370$ ✗ — a number the two roots $1$ and $3$ flatly contradict. Choice $394$ ✗ divides the constant only, computing $400 - 6$. Choice $16$ ✗ is $(r + s)^2$ with the $-2rs$ correction dropped.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $4x^2 - 24x + 8 = 0$. What is $r^2 + s^2$?',
      choices: ['$560$', '$36$', '$572$', '$32$'],
      answer: 3,
      solution:
        'Divide through by $4$ so that Vieta applies: $x^2 - 6x + 2 = 0$, giving $r + s = 6$ and $rs = 2$. Then $r^2 + s^2 = (r + s)^2 - 2rs = 36 - 4 = 32$. Second route, by squaring the roots directly. The formula gives $x = \\frac{6 \\pm \\sqrt{36 - 8}}{2} = 3 \\pm \\sqrt{7}$, so $r^2 + s^2 = (3 + \\sqrt{7})^2 + (3 - \\sqrt{7})^2 = (9 + 6\\sqrt{7} + 7) + (9 - 6\\sqrt{7} + 7) = 32$ ✓. The irrational halves annihilate each other, leaving a whole number — exactly what symmetry promises. (THE UNDIVIDED COEFFICIENT takes $r + s = 24$ and $rs = 8$ and answers $576 - 16 = 560$ ✗; the real roots are about $5.65$ and $0.35$, whose squares sum to about $32$, nowhere near $560$. Choice $36$ ✗ forgets the $-2rs$ correction. Choice $572$ ✗ divides the constant but leaves the linear coefficient alone, computing $576 - 4$.)',
    },
  ],

  // c7 — the same radical machinery, asked in the COUNTING direction: how many
  //      candidates survive the check? v1 keeps both, v2 keeps none (and the
  //      squaring exposes an impossibility), v3 keeps exactly one.
  [
    {
      q: 'How many solutions does $\\sqrt{9x + 4} = x + 2$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 2,
      solution:
        'Square both sides: $9x + 4 = x^2 + 4x + 4$, so $x^2 - 5x = 0$, or $x(x - 5) = 0$, giving the candidates $x = 0$ and $x = 5$. Check each in the original. For $x = 0$: $\\sqrt{4} = 2$ and $0 + 2 = 2$ ✓. For $x = 5$: $\\sqrt{45 + 4} = \\sqrt{49} = 7$ and $5 + 2 = 7$ ✓. Both survive, so there are $2$ solutions. Second route, by a substitution that makes the survival obvious in advance. Let $u = x + 2$, so $x = u - 2$ and $9x + 4 = 9u - 14$. The equation becomes $\\sqrt{9u - 14} = u$, which squares to $u^2 - 9u + 14 = 0$, or $(u - 2)(u - 7) = 0$, giving $u = 2$ and $u = 7$. Both are POSITIVE, and a positive right side is exactly the condition a square root demands — so neither candidate can be extraneous ✓. Translating back, $x = u - 2$ gives $0$ and $5$ ✓, the same pair. (Choice $1$ ✗ checks one candidate and forgets the other. Choice $0$ ✗ assumes squaring must have spoiled both. Choice “infinitely many” ✗ would need the two sides to be the same function, and a curve and a line can meet only finitely often.)',
    },
    {
      q: 'How many solutions does $\\sqrt{x + 8} - \\sqrt{x} = 4$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 0,
      solution:
        'Isolate one radical: $\\sqrt{x + 8} = 4 + \\sqrt{x}$. Square both sides: $x + 8 = 16 + 8\\sqrt{x} + x$. The $x$ terms cancel, leaving $8 = 16 + 8\\sqrt{x}$, so $8\\sqrt{x} = -8$ and $\\sqrt{x} = -1$. A square root is never negative, so no number of any kind satisfies this — the equation has $0$ solutions. Second route, by measuring the gap between the two radicals instead of solving. Multiply and divide by the conjugate: $\\sqrt{x + 8} - \\sqrt{x} = \\frac{(x + 8) - x}{\\sqrt{x + 8} + \\sqrt{x}} = \\frac{8}{\\sqrt{x + 8} + \\sqrt{x}}$. The denominator is smallest when $x = 0$, where it equals $\\sqrt{8} \\approx 2.83$, so the gap is at most $\\frac{8}{2.83} \\approx 2.83$ — and it only SHRINKS as $x$ grows ✓. A gap that never exceeds about $2.83$ can never equal $4$. (Choice $1$ ✗ comes from a sign slip that turns $8\\sqrt{x} = -8$ into $\\sqrt{x} = 1$ and reports $x = 1$; checking it gives $\\sqrt{9} - \\sqrt{1} = 2$, not $4$. Choice $2$ ✗ assumes an equation with two radicals must hand back two roots. Choice “infinitely many” ✗ misreads the cancellation of the $x$ terms as an identity, when what is left, $8 = 16 + 8\\sqrt{x}$, still constrains $x$ — impossibly.)',
    },
    {
      q: 'How many solutions does $\\sqrt{3x + 22} = x - 2$ have?',
      choices: ['$2$', '$0$', 'Infinitely many', '$1$'],
      answer: 3,
      solution:
        'Square both sides: $3x + 22 = x^2 - 4x + 4$, so $x^2 - 7x - 18 = 0$, which factors as $(x - 9)(x + 2) = 0$ and gives the candidates $x = 9$ and $x = -2$. Check them in the original. For $x = 9$: $\\sqrt{27 + 22} = \\sqrt{49} = 7$ and $9 - 2 = 7$ ✓. For $x = -2$: $\\sqrt{-6 + 22} = \\sqrt{16} = 4$ but $-2 - 2 = -4$ ✗ — the two sides came out as opposites, the signature of a root invented by squaring. Exactly $1$ solution survives. Second route, screening the candidates before substituting anything: the left side is a square root and cannot be negative, so any solution needs $x - 2 \\ge 0$, that is $x \\ge 2$. Of the two candidates only $x = 9$ clears that bar ✓, so the count is $1$ without a single arithmetic check. (Choice $2$ ✗ counts both candidates and skips the check — the step this whole chapter is about. Choice $0$ ✗ assumes squaring always lies. Choice “infinitely many” ✗ is impossible for a curve meeting a line.)',
    },
  ],

  // c8 — the MINUS family: cube $x - \frac{1}{x} = d$ to reach
  //      $x^3 - \frac{1}{x^3} = d^3 + 3d$, where the correction is ADDED. Lane:
  //      $d = 5, 6, 7$, so the answers are $140$, $234$ and $364$.
  [
    {
      q: 'If $x - \\frac{1}{x} = 5$, what is $x^3 - \\frac{1}{x^3}$?',
      choices: ['$125$', '$140$', '$110$', '$128$'],
      answer: 1,
      solution:
        'Cube the given relation, keeping track of the signs: $\\left(x - \\frac{1}{x}\\right)^3 = x^3 - 3x + \\frac{3}{x} - \\frac{1}{x^3} = x^3 - \\frac{1}{x^3} - 3\\left(x - \\frac{1}{x}\\right)$. The middle terms regroup into $-3$ copies of the given expression, so $125 = x^3 - \\frac{1}{x^3} - 15$, and the correction crosses over as an ADDITION: $x^3 - \\frac{1}{x^3} = 125 + 15 = 140$. Second route, through the square. Squaring the given gives $x^2 - 2 + \\frac{1}{x^2} = 25$, so $x^2 + \\frac{1}{x^2} = 27$ (the minus flips the usual $-2$ into a $+2$). Now multiply the two: $\\left(x - \\frac{1}{x}\\right)\\left(x^2 + \\frac{1}{x^2}\\right) = x^3 + \\frac{1}{x} - x - \\frac{1}{x^3} = \\left(x^3 - \\frac{1}{x^3}\\right) - \\left(x - \\frac{1}{x}\\right)$, so $5 \\times 27 = 135 = x^3 - \\frac{1}{x^3} - 5$, giving $140$ ✓. (THE LOST CORRECTION answers $125 = d^3$ ✗. THE FLIPPED CORRECTION answers $125 - 15 = 110$ ✗, borrowing the rule $k^3 - 3k$ that belongs to the PLUS family. THE SHRUNKEN CORRECTION adds a bare $3$ and answers $128$ ✗.)',
    },
    {
      q: 'If $x - \\frac{1}{x} = 6$, what is $x^3 - \\frac{1}{x^3}$?',
      choices: ['$216$', '$198$', '$234$', '$219$'],
      answer: 2,
      solution:
        'Cubing gives $\\left(x - \\frac{1}{x}\\right)^3 = x^3 - \\frac{1}{x^3} - 3\\left(x - \\frac{1}{x}\\right)$, so $216 = x^3 - \\frac{1}{x^3} - 18$ and therefore $x^3 - \\frac{1}{x^3} = 216 + 18 = 234$. In this family the answer is $d^3 + 3d$: the minus inside the bracket sends the correction to the other side of the equation. Second route, in two smaller steps. From the square, $x^2 + \\frac{1}{x^2} = 36 + 2 = 38$. Multiplying the first power by the second, $\\left(x - \\frac{1}{x}\\right)\\left(x^2 + \\frac{1}{x^2}\\right) = \\left(x^3 - \\frac{1}{x^3}\\right) - \\left(x - \\frac{1}{x}\\right)$, gives $6 \\times 38 = 228 = x^3 - \\frac{1}{x^3} - 6$, so the answer is $234$ ✓ — computed from $6 \\times 38$ rather than from $6^3$, so the agreement is a genuine check. (THE LOST CORRECTION answers $216$ ✗. THE FLIPPED CORRECTION answers $216 - 18 = 198$ ✗. THE SHRUNKEN CORRECTION answers $216 + 3 = 219$ ✗.)',
    },
    {
      q: 'If $x - \\frac{1}{x} = 7$, what is $x^3 - \\frac{1}{x^3}$?',
      choices: ['$364$', '$343$', '$322$', '$346$'],
      answer: 0,
      solution:
        'Cube the given: $\\left(x - \\frac{1}{x}\\right)^3 = x^3 - \\frac{1}{x^3} - 3\\left(x - \\frac{1}{x}\\right)$, so $343 = x^3 - \\frac{1}{x^3} - 21$ and $x^3 - \\frac{1}{x^3} = 343 + 21 = 364$. Second route, climbing one power at a time: squaring the given gives $x^2 + \\frac{1}{x^2} = 49 + 2 = 51$, and then $\\left(x - \\frac{1}{x}\\right)\\left(x^2 + \\frac{1}{x^2}\\right) = \\left(x^3 - \\frac{1}{x^3}\\right) - \\left(x - \\frac{1}{x}\\right)$ reads $7 \\times 51 = 357 = x^3 - \\frac{1}{x^3} - 7$, giving $364$ ✓. Compare the two families side by side: with a plus sign the correction is subtracted ($k^3 - 3k$), with a minus sign it is added ($d^3 + 3d$). Same machinery, mirrored signs. (THE LOST CORRECTION answers $343$ ✗. THE FLIPPED CORRECTION answers $343 - 21 = 322$ ✗. THE SHRUNKEN CORRECTION adds $3$ instead of $3d$ and answers $346$ ✗.)',
    },
  ],

  // c9 — the infinite power tower. It cannot simply be re-keyed to a bigger
  //      target: a tower converges only for bases from about $0.066$ up to
  //      $e^{1/e} \approx 1.4447$, and its value can never exceed $e \approx
  //      2.718$. So v1 aims BELOW the base problem, and v2 and v3 run the
  //      question backwards — v2 from a base to the settled value (with the
  //      classic $4$ trap), v3 straight at the convergence ceiling.
  [
    {
      q: 'If $x^{x^{x^{\\cdot^{\\cdot^{\\cdot}}}}} = \\frac{1}{2}$, what is $x$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$\\frac{1}{16}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'The tower sitting on top of the bottom $x$ is the whole tower again, and the whole tower equals $\\frac{1}{2}$. So the equation collapses to $x^{1/2} = \\frac{1}{2}$, that is $\\sqrt{x} = \\frac{1}{2}$, and squaring gives $x = \\frac{1}{4}$. Second route, by building the tower from a base of $\\frac{1}{4}$ and watching it settle. The partial towers are $0.25$, then $0.25^{0.25} \\approx 0.707$, then $0.25^{0.707} \\approx 0.375$, then $0.25^{0.375} \\approx 0.594$, then $\\approx 0.439$, $\\approx 0.544$, $\\approx 0.470$, $\\approx 0.521$ — the values wobble above and below and squeeze in on $0.5$ ✓. That wobble is what a base smaller than $1$ does: each new layer flips the tower to the other side of its final value, and the flips shrink. It settles at all because $\\frac{1}{4}$ is comfortably above the lower limit for these towers, which sits near $0.066$. (Choice $\\frac{1}{2}$ ✗ reads $x$ straight off the tower’s value, which would need $x$ to equal $x^{1/2}$. Choice $\\frac{1}{\\sqrt{2}}$ ✗ takes a square root where the equation calls for squaring — that is the shape of the answer when the tower equals $2$, not $\\frac{1}{2}$. Choice $\\frac{1}{16}$ ✗ squares twice, undoing the exponent $\\frac{1}{2}$ as though it were $\\frac{1}{4}$.)',
    },
    {
      q: 'The infinite tower $x^{x^{x^{\\cdot^{\\cdot^{\\cdot}}}}}$ is built with $x = \\sqrt{2}$. What value does it settle at?',
      choices: ['$2$', '$4$', '$\\sqrt{2}$', 'It grows without bound'],
      answer: 0,
      solution:
        'Name the settled value $T$. The tower above the bottom $\\sqrt{2}$ is the whole tower, so $T = \\left(\\sqrt{2}\\right)^T$. Here is the twist: this equation has TWO solutions, since $\\left(\\sqrt{2}\\right)^2 = 2$ ✓ and $\\left(\\sqrt{2}\\right)^4 = 4$ ✓. The equation alone cannot choose between them — the tower does, by climbing from the bottom and stopping at the first value it reaches: $1.414$, then $1.632$, then $1.761$, then $1.840$, then $1.892$, then $1.926$, creeping up on $2$ ✓. So the value is $2$. Second route, proving the ceiling instead of computing: if some layer of the tower is less than $2$, the next layer is $\\left(\\sqrt{2}\\right)^{\\text{that}} < \\left(\\sqrt{2}\\right)^2 = 2$. The first layer, $\\sqrt{2} \\approx 1.414$, is less than $2$, so EVERY layer is less than $2$ ✓ — the tower is trapped below $2$ forever and can never reach $4$. Worth knowing: no tower of this kind ever exceeds about $2.718$, and towers with a base above roughly $1.4447$ do not settle at all. (Choice $4$ ✗ is the extra root of $T = \\left(\\sqrt{2}\\right)^T$ that the climb never reaches — the same kind of impostor a squaring step produces. Choice $\\sqrt{2}$ ✗ reports the base, as though stacking more layers changed nothing. Choice “it grows without bound” ✗ ignores the trap argument that pins every layer below $2$.)',
    },
    {
      q: 'For one of these bases the infinite tower $x^{x^{x^{\\cdot^{\\cdot^{\\cdot}}}}}$ never settles down — its layers race away to infinity. Which base is it?',
      choices: ['$\\sqrt[3]{3}$', '$\\sqrt{3}$', '$\\frac{1}{4}$', '$\\sqrt{2}$'],
      answer: 1,
      solution:
        'A tower settles only for bases up to about $1.4447$; above that, each layer multiplies the exponent enough to outrun the last. Compare the four: $\\sqrt{2} \\approx 1.4142$ ✓, $\\sqrt[3]{3} \\approx 1.4422$ ✓ (just under the line), $\\frac{1}{4} = 0.25$ ✓, and $\\sqrt{3} \\approx 1.7321$ ✗ — over the limit. So $\\sqrt{3}$ is the runaway. Second route, by simply climbing the $\\sqrt{3}$ tower and watching: $1.732$, then $1.732^{1.732} \\approx 2.589$, then $1.732^{2.589} \\approx 4.15$, then $1.732^{4.15} \\approx 9.7$, then $1.732^{9.7} \\approx 205$, then astronomically more ✓. Each layer is bigger than the last by a wider margin, so nothing can pin it down. The other three do settle: the $\\sqrt{2}$ tower climbs to $2$, the $\\frac{1}{4}$ tower wobbles in on $\\frac{1}{2}$, and the $\\sqrt[3]{3}$ tower creeps up to about $2.48$. That last one is a warning worth carrying: a tower is capped near $2.718$, so no base whatsoever makes one equal $3$ — a target above the cap has no answer at all, however tidy the algebra looks. (Choice $\\sqrt[3]{3}$ ✗ is under the limit and settles, even though $\\sqrt[3]{3}$ is the answer to the FAKE equation “tower $= 3$”. Choice $\\frac{1}{4}$ ✗ is small, and small bases only wobble; they run away only below about $0.066$. Choice $\\sqrt{2}$ ✗ is the tamest base of the four.)',
    },
  ],

  // c10 — the product is NOT given: it has to be recovered from $x + y$ and
  //       $x^2 + y^2$ first, and only then fed into
  //       $\frac{1}{x} + \frac{1}{y} = \frac{x+y}{xy}$. Lane: $S = 24, 25, 26$.
  [
    {
      q: 'If $x + y = 24$ and $x^2 + y^2 = 416$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
      choices: ['$\\frac{3}{20}$', '$\\frac{10}{3}$', '$\\frac{3}{10}$', '$\\frac{3}{52}$'],
      answer: 2,
      solution:
        'The reciprocal sum needs a product, and no product was handed over — so recover it first. Squaring the sum gives $(x + y)^2 = x^2 + 2xy + y^2$, that is $576 = 416 + 2xy$, so $2xy = 160$ and $xy = 80$. Note the halving: $160$ is $2xy$, not $xy$. Now the identity finishes it: $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy} = \\frac{24}{80} = \\frac{3}{10}$. Second route, by digging out the two numbers and adding the reciprocals by hand. With sum $24$ and product $80$ they are the roots of $t^2 - 24t + 80 = 0$, which factors as $(t - 4)(t - 20) = 0$, so the numbers are $4$ and $20$ — and they check out, since $4 + 20 = 24$ ✓ and $16 + 400 = 416$ ✓. Then $\\frac{1}{4} + \\frac{1}{20} = \\frac{5}{20} + \\frac{1}{20} = \\frac{6}{20} = \\frac{3}{10}$ ✓. (Choice $\\frac{3}{20}$ ✗ skips the halving and uses $xy = 160$. Choice $\\frac{10}{3}$ ✗ turns the final fraction upside down, reporting $\\frac{xy}{x+y}$; the SUM belongs on top. Choice $\\frac{3}{52} = \\frac{24}{416}$ ✗ divides by $x^2 + y^2$ as though that were the product.)',
    },
    {
      q: 'If $x + y = 25$ and $x^2 + y^2 = 425$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
      choices: ['$\\frac{1}{8}$', '$4$', '$\\frac{1}{17}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'Step one, recover the product: $(x + y)^2 = x^2 + 2xy + y^2$ gives $625 = 425 + 2xy$, so $2xy = 200$ and $xy = 100$. Step two, use the reciprocal identity: $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy} = \\frac{25}{100} = \\frac{1}{4}$. Second route, through the numbers themselves: they are the roots of $t^2 - 25t + 100 = 0$, which factors as $(t - 5)(t - 20) = 0$, so they are $5$ and $20$. Both given facts hold ✓ ($5 + 20 = 25$ and $25 + 400 = 425$), and adding reciprocals directly gives $\\frac{1}{5} + \\frac{1}{20} = \\frac{4}{20} + \\frac{1}{20} = \\frac{5}{20} = \\frac{1}{4}$ ✓. (Choice $\\frac{1}{8}$ ✗ forgets to halve and uses $xy = 200$. Choice $4$ ✗ inverts the answer, computing $\\frac{xy}{x + y} = \\frac{100}{25}$. Choice $\\frac{1}{17} = \\frac{25}{425}$ ✗ mistakes $x^2 + y^2$ for the product and never recovers $xy$ at all.)',
    },
    {
      q: 'If $x + y = 26$ and $x^2 + y^2 = 580$, what is $\\frac{1}{x} + \\frac{1}{y}$?',
      choices: ['$\\frac{24}{13}$', '$\\frac{13}{24}$', '$\\frac{13}{48}$', '$\\frac{13}{290}$'],
      answer: 1,
      solution:
        'First recover the missing product: $676 = 580 + 2xy$, so $2xy = 96$ and $xy = 48$. Then $\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy} = \\frac{26}{48} = \\frac{13}{24}$ after dividing top and bottom by $2$. Second route, by identifying the numbers: they satisfy $t^2 - 26t + 48 = 0$, which factors as $(t - 2)(t - 24) = 0$, so they are $2$ and $24$ — and both given facts hold ✓ ($2 + 24 = 26$, $4 + 576 = 580$). Adding reciprocals by hand: $\\frac{1}{2} + \\frac{1}{24} = \\frac{12}{24} + \\frac{1}{24} = \\frac{13}{24}$ ✓. A useful sanity check on the size: one of the numbers is small, so its reciprocal is large, and an answer near $\\frac{1}{2}$ is exactly what we should expect. (Choice $\\frac{13}{48}$ ✗ uses $xy = 96$, the un-halved value. Choice $\\frac{24}{13}$ ✗ flips the final fraction. Choice $\\frac{13}{290} = \\frac{26}{580}$ ✗ divides by $x^2 + y^2$ instead of by the product.)',
    },
  ],

  // c11 — two radicals whose sum (or difference) is a whole number: isolate,
  //       square once, and a single radical is left to finish. v1 and v2 are
  //       sums, v3 flips to a difference so the cross term changes sign.
  [
    {
      q: 'Solve $\\sqrt{x + 13} + \\sqrt{x} = 13$.',
      choices: ['$36$', '$6$', '$78$', '$49$'],
      answer: 0,
      solution:
        'Isolate one radical: $\\sqrt{x + 13} = 13 - \\sqrt{x}$. Square both sides, carefully keeping the cross term: $x + 13 = 169 - 26\\sqrt{x} + x$. The $x$ terms cancel, leaving $26\\sqrt{x} = 156$, so $\\sqrt{x} = 6$ — and one step remains, because the question asks for $x$, not for $\\sqrt{x}$: $x = 36$. Check in the original: $\\sqrt{36 + 13} + \\sqrt{36} = \\sqrt{49} + 6 = 7 + 6 = 13$ ✓. Second route, with no squaring at all. Write $a = \\sqrt{x + 13}$ and $b = \\sqrt{x}$. We know $a + b = 13$, and also $a^2 - b^2 = (x + 13) - x = 13$. Since $a^2 - b^2 = (a - b)(a + b)$, that reads $(a - b) \\times 13 = 13$, so $a - b = 1$. Two simple equations, $a + b = 13$ and $a - b = 1$, give $a = 7$ and $b = 6$, hence $x = b^2 = 36$ ✓. (THE MISSING ROOT answers $6$, stopping at $\\sqrt{x}$ ✗. Choice $78$ ✗ squares the left side term by term as $(x + 13) + x = 169$, forgetting the cross term $-26\\sqrt{x}$, and gets $2x = 156$. Choice $49$ ✗ reports the value of $x + 13$, the number under the first radical, instead of $x$.)',
    },
    {
      q: 'Solve $\\sqrt{x + 9} + \\sqrt{x} = 9$.',
      choices: ['$4$', '$36$', '$25$', '$16$'],
      answer: 3,
      solution:
        'Isolate: $\\sqrt{x + 9} = 9 - \\sqrt{x}$. Square: $x + 9 = 81 - 18\\sqrt{x} + x$, and the $x$ terms cancel, leaving $18\\sqrt{x} = 72$, so $\\sqrt{x} = 4$ and therefore $x = 16$. Check: $\\sqrt{16 + 9} + \\sqrt{16} = 5 + 4 = 9$ ✓. Second route, by the conjugate trick. Put $a = \\sqrt{x + 9}$ and $b = \\sqrt{x}$, so $a + b = 9$ and $a^2 - b^2 = 9$. Factoring the difference of squares gives $(a - b)(a + b) = 9$, so $(a - b) \\times 9 = 9$ and $a - b = 1$. Solving the pair gives $a = 5$, $b = 4$, so $x = 16$ ✓ — and the numbers $5$, $4$, $3$ never appeared out of thin air; they came from two linear equations. (THE MISSING ROOT answers $4$, which is $\\sqrt{x}$ ✗. Choice $36$ ✗ squares term by term, $(x + 9) + x = 81$, dropping the cross term and getting $2x = 72$. Choice $25$ ✗ reports $x + 9$ rather than $x$.)',
    },
    {
      q: 'Solve $\\sqrt{x + 24} - \\sqrt{x} = 2$.',
      choices: ['$5$', '$25$', '$49$', '$7$'],
      answer: 1,
      solution:
        'Isolate the bigger radical: $\\sqrt{x + 24} = 2 + \\sqrt{x}$. Square, and note that the cross term is now POSITIVE because the right side is a sum: $x + 24 = 4 + 4\\sqrt{x} + x$. The $x$ terms cancel, leaving $4\\sqrt{x} = 20$, so $\\sqrt{x} = 5$ and $x = 25$. Check in the original: $\\sqrt{25 + 24} - \\sqrt{25} = \\sqrt{49} - 5 = 7 - 5 = 2$ ✓. Second route, using the difference of squares instead of squaring. With $a = \\sqrt{x + 24}$ and $b = \\sqrt{x}$ we have $a - b = 2$ and $a^2 - b^2 = 24$, so $(a - b)(a + b) = 24$ becomes $2(a + b) = 24$ and $a + b = 12$. From $a + b = 12$ and $a - b = 2$: $a = 7$ and $b = 5$, so $x = 25$ ✓. (THE MISSING ROOT answers $5$, the value of $\\sqrt{x}$ ✗. Choice $49$ ✗ reports $x + 24$, the number under the first radical. Choice $7$ ✗ reports $\\sqrt{x + 24}$, the value of the larger radical — a genuine quantity in this problem, but not the one asked for.)',
    },
  ],

  // c12 — Vieta into the sum-of-cubes identity $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$.
  //       Lane: $b = 9, 11, 13$ in $x^2 - bx + c$.
  [
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 9x + 5 = 0$. What is $r^3 + s^3$?',
      choices: ['$729$', '$594$', '$714$', '$864$'],
      answer: 1,
      solution:
        'Vieta reads the coefficients directly: $r + s = 9$ and $rs = 5$. Then the cube identity, which comes from expanding $(r + s)^3$ and pulling the two middle terms together: $r^3 + s^3 = (r + s)^3 - 3rs(r + s) = 729 - 3(5)(9) = 729 - 135 = 594$. Second route, through a different factorisation entirely — the sum of cubes: $r^3 + s^3 = (r + s)(r^2 - rs + s^2)$. Here $r^2 + s^2 = (r + s)^2 - 2rs = 81 - 10 = 71$, so $r^2 - rs + s^2 = 71 - 5 = 66$, and the product is $9 \\times 66 = 594$ ✓. The two routes multiply different numbers ($3 \\times 5 \\times 9$ against $9 \\times 66$), so their agreement is a real check. The roots themselves are $\\frac{9 \\pm \\sqrt{61}}{2}$ — thoroughly irrational — yet their cubes add to a whole number. (THE LOST CORRECTION answers $729 = (r+s)^3$, the classic hope that $(r + s)^3$ equals $r^3 + s^3$ ✗. THE SHRUNKEN CORRECTION subtracts $3rs$ instead of $3rs(r+s)$, answering $729 - 15 = 714$ ✗. THE FLIPPED CORRECTION adds the correction, answering $729 + 135 = 864$ ✗.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 11x + 3 = 0$. What is $r^3 + s^3$?',
      choices: ['$1232$', '$1331$', '$1322$', '$1430$'],
      answer: 0,
      solution:
        'Vieta gives $r + s = 11$ and $rs = 3$. The cube identity then does everything: $r^3 + s^3 = (r + s)^3 - 3rs(r + s) = 1331 - 3(3)(11) = 1331 - 99 = 1232$. Second route, by the sum-of-cubes factorisation: $r^3 + s^3 = (r + s)(r^2 - rs + s^2)$, where $r^2 + s^2 = 121 - 6 = 115$, so $r^2 - rs + s^2 = 115 - 3 = 112$ and the answer is $11 \\times 112 = 1232$ ✓. Two independent identities, one product each, same result. (THE LOST CORRECTION answers $1331$ ✗. THE SHRUNKEN CORRECTION subtracts a bare $3rs = 9$ and answers $1322$ ✗. THE FLIPPED CORRECTION answers $1331 + 99 = 1430$ ✗, which is what the identity would give if the middle terms of $(r+s)^3$ were negative — they are not.)',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 13x + 4 = 0$. What is $r^3 + s^3$?',
      choices: ['$2197$', '$2353$', '$2041$', '$2185$'],
      answer: 2,
      solution:
        'Read the sum and product off the coefficients: $r + s = 13$ and $rs = 4$. Then $r^3 + s^3 = (r + s)^3 - 3rs(r + s) = 2197 - 3(4)(13) = 2197 - 156 = 2041$. Second route, via the sum-of-cubes factorisation: $r^2 + s^2 = 169 - 8 = 161$, so $r^2 - rs + s^2 = 161 - 4 = 157$, and $r^3 + s^3 = 13 \\times 157 = 2041$ ✓. Notice what neither route needed: the roots, which are $\\frac{13 \\pm \\sqrt{153}}{2}$, are irrational and would be miserable to cube by hand. That is the whole promise of symmetric manipulation — a symmetric question about ugly roots has a tidy answer. (THE LOST CORRECTION answers $2197$ ✗. THE FLIPPED CORRECTION answers $2197 + 156 = 2353$ ✗. THE SHRUNKEN CORRECTION subtracts $3rs = 12$ instead of $3rs(r + s) = 156$, answering $2185$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 22,
  challenge,
}
