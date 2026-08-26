// Introduction to Algebra chapter 22 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so the
//    whole teaching load sits in the solution. There are no `choices` keys in
//    this file, and no `answer` is a bare number.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way, and that second route is written into the solution. The standard
//    confirmations here: a radical equation is confirmed by substituting the
//    surviving value into the ORIGINAL equation (never the squared one) and by
//    a route that renames the radical so no squaring happens at all; a nested
//    radical is confirmed by the quadratic formula, by iterating from below, or
//    by testing the fixed point directly; a continued fraction is confirmed by
//    rationalising $\frac{1}{x}$ and rebuilding $a + \frac{1}{x}$, by the
//    product identity $x(x - a) = 1$, or by numerical convergents; an
//    $x + \frac{1}{x}$ answer is confirmed through the MINUS version of the
//    identity, through the exact surd roots, or through the ladder
//    $p_{n+1} = k\,p_n - p_{n-1}$; a symmetric sum is confirmed by recovering
//    the two numbers from $t^2 - St + P = 0$ or by the factorisation
//    $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$; a Vieta shift is confirmed by
//    evaluating the monic quadratic at the shift point.
//  - Every radicand stays under $200$ and every check is exact — no decimal
//    ever decides whether a root survives.
//  - Traps that run through the file. THE STOPPED SOLVE: reporting the value of
//    $5x$ instead of $x$. THE WRONG POWER: squaring an equation that holds a
//    cube root. THE FORGOTTEN COPY: solving $x^2 = n$ for a nested radical and
//    losing the $x$ hiding under it. THE KEPT NEGATIVE: handing back the
//    negative root of a quantity that is a square root. THE MISSING CROSS
//    TERM: answering $k^2$ for $x^2 + \frac{1}{x^2}$. THE UNSUBTRACTED
//    PRODUCT: answering $(x + y)^2$ for $x^2 + y^2$. THE CUBED SUM: answering
//    $(x + y)^3$ for $x^3 + y^3$. THE UNCHECKED CANDIDATE: keeping a root the
//    squaring invented. THE DISCARDED SURVIVOR: throwing away a perfectly good
//    second root because two squarings "must" breed an impostor. THE TRUNCATED
//    FRACTION: cutting an infinite continued fraction off after two levels. THE
//    WRONG DISCRIMINANT: using $a^2 - 4$ where the continued fraction needs
//    $a^2 + 4$. THE UNEXPANDED SHIFT: reading $(r - 1)(s - 1)$ as $rs - 1$. THE
//    ONE-SQUARING SHORTCUT: stopping at $(k^2 - 2)^2$ for $x^4 + \frac{1}{x^4}$.

const worksheet = [
  // w1 — a single radical alone on one side, undone by raising both sides to a
  //      power. Two square roots and one cube root, so one variation carries no
  //      extraneous risk at all.
  [
    {
      q: 'Solve $\\sqrt{6x + 13} = 11$.',
      answer: '$x = 18$',
      solution:
        'Square both sides: $6x + 13 = 121$, so $6x = 108$ and $x = 18$. Check in the original: $\\sqrt{6(18) + 13} = \\sqrt{108 + 13} = \\sqrt{121} = 11$ ✓. Second route by running the machine backwards instead of squaring an equation: the radical outputs $11$, so its input was $11^2 = 121$; that input was built by multiplying $x$ by $6$ and adding $13$, so undo those in reverse — $121 - 13 = 108$, then $108 \\div 6 = 18$ ✓. THE STOPPED SOLVE is the trap: reporting $108$ ✗, which is the value of $6x$, not of $x$.',
    },
    {
      q: 'Solve $\\sqrt{3x - 5} = 8$.',
      answer: '$x = 23$',
      solution:
        'Square both sides: $3x - 5 = 64$, so $3x = 69$ and $x = 23$. Check in the original: $\\sqrt{3(23) - 5} = \\sqrt{69 - 5} = \\sqrt{64} = 8$ ✓. Second route by bracketing, which never solves anything: $\\sqrt{3x - 5}$ climbs steadily as $x$ climbs, and at $x = 20$ it is $\\sqrt{55} < 8$ while at $x = 25$ it is $\\sqrt{70} > 8$, so the crossing is single and sits between them — and $x = 23$ lands exactly on $\\sqrt{64} = 8$ ✓. THE FLIPPED SIGN is the trap: turning $3x - 5 = 64$ into $3x = 59$ ✗ by subtracting the $5$ that is already being subtracted.',
    },
    {
      q: 'Solve $\\sqrt[3]{4x + 7} = 3$.',
      answer: '$x = 5$',
      solution:
        'A cube root is undone by cubing: $4x + 7 = 3^3 = 27$, so $4x = 20$ and $x = 5$. Check in the original: $\\sqrt[3]{4(5) + 7} = \\sqrt[3]{27} = 3$ ✓. Second route, and a guarantee along with it: every real number has exactly ONE real cube root, so $\\sqrt[3]{4x + 7} = 3$ can only mean $4x + 7 = 27$ — cubing invents no extraneous roots the way squaring does, and this equation has precisely one solution. THE WRONG POWER is the trap: squaring instead of cubing gives $4x + 7 = 9$ and $x = \\frac{1}{2}$ ✗, which fails the original, since $\\sqrt[3]{9} \\approx 2.08$, not $3$.',
    },
  ],

  // w2 — the infinite nested radical $\sqrt{n + \sqrt{n + \cdots}}$ with
  //      $n = m^2 - m$, so the value is the whole number $m$. Three different
  //      confirmations: fixed-point test, iteration from below, and the
  //      quadratic formula.
  [
    {
      q: 'Evaluate $\\sqrt{380 + \\sqrt{380 + \\sqrt{380 + \\cdots}}}$.',
      answer: '$20$',
      solution:
        'Name the whole expression $x$. Everything under the outer radical is $380$ plus another copy of $x$, so $x = \\sqrt{380 + x}$ and squaring gives $x^2 - x - 380 = 0$. Since $380 = 20 \\times 19$, this factors as $(x - 20)(x + 19) = 0$. A square root is never negative, so the value is $x = 20$. Second route that never touches the quadratic: test the candidate directly — $\\sqrt{380 + 20} = \\sqrt{400} = 20$ ✓ — and note that as $x$ grows by $1$ the right side $\\sqrt{380 + x}$ grows by far less than $1$, so the two sides can agree at only one place. THE FORGOTTEN COPY is the trap: solving $x^2 = 380$ and answering $\\sqrt{380} \\approx 19.49$ ✗, which drops the copy of $x$ hiding under the radical.',
    },
    {
      q: 'Evaluate $\\sqrt{420 + \\sqrt{420 + \\sqrt{420 + \\cdots}}}$.',
      answer: '$21$',
      solution:
        'Let $x$ be the whole tower. Then $x = \\sqrt{420 + x}$, so $x^2 - x - 420 = 0$, and since $420 = 21 \\times 20$ this is $(x - 21)(x + 20) = 0$. The tower is positive, so $x = 21$. Check: $\\sqrt{420 + 21} = \\sqrt{441} = 21$ ✓. Second route by building the tower from the inside out: $\\sqrt{420} \\approx 20.49$, then $\\sqrt{420 + 20.49} \\approx 20.988$, then $\\sqrt{420 + 20.988} \\approx 20.9997$ — the running values climb toward $21$ and stall there. THE KEPT NEGATIVE is the trap: reporting $-20$ ✗; the quadratic offers it, but a square root symbol never hands back a negative number.',
    },
    {
      q: 'The number $\\sqrt{462 + \\sqrt{462 + \\sqrt{462 + \\cdots}}}$ is a whole number. Find it.',
      answer: '$22$',
      solution:
        'Call the tower $x$. Self-similarity gives $x = \\sqrt{462 + x}$, so $x^2 - x - 462 = 0$. Second route on purpose here — use the quadratic formula rather than hunting for a factorisation: $x = \\frac{1 \\pm \\sqrt{1 + 4(462)}}{2} = \\frac{1 \\pm \\sqrt{1849}}{2} = \\frac{1 \\pm 43}{2}$, since $43^2 = 1849$. That gives $22$ and $-21$, and only the positive value can be a square root. Confirm in the original relation: $\\sqrt{462 + 22} = \\sqrt{484} = 22$ ✓. The pattern behind every problem like this: $462 = 22 \\times 21$, and a radicand of the form $m(m - 1)$ always produces the whole number $m$. THE FORGOTTEN COPY is the trap: $\\sqrt{462} \\approx 21.49$ ✗ is only the innermost layer.',
    },
  ],

  // w3 — square $x + \frac{1}{x} = k$ to reach $x^2 + \frac{1}{x^2} = k^2 - 2$.
  //      k = 11, 12, 13, and three genuinely different confirmations.
  [
    {
      q: 'If $x + \\frac{1}{x} = 11$, find $x^2 + \\frac{1}{x^2}$.',
      answer: '$119$',
      solution:
        'Square the given: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 + 2 + \\frac{1}{x^2} = 121$, so $x^2 + \\frac{1}{x^2} = 121 - 2 = 119$. Second route through the MINUS version of the identity: $\\left(x - \\frac{1}{x}\\right)^2 = \\left(x + \\frac{1}{x}\\right)^2 - 4 = 121 - 4 = 117$, and $x^2 + \\frac{1}{x^2} = \\left(x - \\frac{1}{x}\\right)^2 + 2 = 117 + 2 = 119$ ✓ — this time the cross term is added back, and the two routes meet. THE MISSING CROSS TERM is the trap: answering $121$ ✗, which forgets that $x \\cdot \\frac{1}{x} = 1$ contributes a $2$ in the middle.',
    },
    {
      q: 'A number $x$ satisfies $x + \\frac{1}{x} = 12$. What is $x^2 + \\frac{1}{x^2}$?',
      answer: '$142$',
      solution:
        'Square: $x^2 + 2 + \\frac{1}{x^2} = 144$, so $x^2 + \\frac{1}{x^2} = 144 - 2 = 142$. Second route with no squaring of the given at all: multiply $x + \\frac{1}{x} = 12$ by $x$ to get $x^2 + 1 = 12x$, so $x^2 - 12x = -1$; the same equation rearranged says $\\frac{1}{x} = 12 - x$, hence $\\frac{1}{x^2} = 144 - 24x + x^2$. Adding, $x^2 + \\frac{1}{x^2} = 2x^2 - 24x + 144 = 2(x^2 - 12x) + 144 = 2(-1) + 144 = 142$ ✓. THE MISSING CROSS TERM is the trap: $144$ ✗ is $\\left(x + \\frac{1}{x}\\right)^2$, which is $2$ too big.',
    },
    {
      q: 'Zora’s number satisfies $x + \\frac{1}{x} = 13$. Find $x^2 + \\frac{1}{x^2}$.',
      answer: '$167$',
      solution:
        'Square the given: $x^2 + 2 + \\frac{1}{x^2} = 169$, so $x^2 + \\frac{1}{x^2} = 169 - 2 = 167$. Second route the long way, by finding $x$ exactly: $x + \\frac{1}{x} = 13$ means $x^2 - 13x + 1 = 0$, so $x = \\frac{13 \\pm \\sqrt{165}}{2}$. Take $x = \\frac{13 + \\sqrt{165}}{2}$; because the two roots multiply to $1$, its reciprocal is the other root, $\\frac{1}{x} = \\frac{13 - \\sqrt{165}}{2}$. Then $x^2 = \\frac{169 + 26\\sqrt{165} + 165}{4} = \\frac{167 + 13\\sqrt{165}}{2}$ and $\\frac{1}{x^2} = \\frac{167 - 13\\sqrt{165}}{2}$; the surds cancel and the sum is $167$ ✓. THE MISSING CROSS TERM is the trap: $169$ ✗ — and notice how much work the identity saved.',
    },
  ],

  // w4 — $x^2 + y^2$ from the sum and the product, with the numbers themselves
  //      recoverable as a check. Sums 27, 28, 29.
  [
    {
      q: 'If $x + y = 27$ and $xy = 50$, find $x^2 + y^2$.',
      answer: '$629$',
      solution:
        'Use $x^2 + y^2 = (x + y)^2 - 2xy = 27^2 - 2(50) = 729 - 100 = 629$. Second route by recovering the numbers themselves: running Vieta backwards, $x$ and $y$ are the roots of $t^2 - 27t + 50 = 0$, which factors as $(t - 2)(t - 25) = 0$, so the numbers are $2$ and $25$ — and indeed $2 + 25 = 27$, $2 \\times 25 = 50$, and $4 + 625 = 629$ ✓. THE UNSUBTRACTED PRODUCT is the trap: answering $729$ ✗, which is $(x + y)^2$ and counts the cross term $2xy$ that $x^2 + y^2$ does not contain.',
    },
    {
      q: 'Two numbers have sum $28$ and product $96$. What is the sum of their squares?',
      answer: '$592$',
      solution:
        'Sum of squares from sum and product: $x^2 + y^2 = (x + y)^2 - 2xy = 784 - 192 = 592$. Second route by finding the two numbers: they are the roots of $t^2 - 28t + 96 = 0$, which factors as $(t - 4)(t - 24) = 0$, so they are $4$ and $24$; squaring and adding gives $16 + 576 = 592$ ✓. THE HALVED CORRECTION is the trap: subtracting one copy of the product, $784 - 96 = 688$ ✗ — expanding $(x + y)^2$ produces $xy$ TWICE, once as $xy$ and once as $yx$.',
    },
    {
      q: 'Wynn picks two numbers whose sum is $29$ and whose product is $54$. Find the sum of their squares.',
      answer: '$733$',
      solution:
        'The identity does it in one line: $x^2 + y^2 = (x + y)^2 - 2xy = 29^2 - 2(54) = 841 - 108 = 733$. Second route by identifying Wynn’s numbers: they satisfy $t^2 - 29t + 54 = 0$, which factors as $(t - 2)(t - 27) = 0$, so she picked $2$ and $27$; then $4 + 729 = 733$ ✓. THE UNSUBTRACTED PRODUCT is the trap: $841$ ✗. A quick sanity test that catches it every time — the sum of the squares of two positive numbers with a fixed sum is always LESS than the square of that sum.',
    },
  ],

  // w5 — a radical equal to an expression in x, so squaring manufactures a
  //      candidate that the original equation rejects. Each second route kills
  //      the impostor before it is ever born.
  [
    {
      q: 'Solve $\\sqrt{x + 42} = x$.',
      answer: '$x = 7$',
      solution:
        'Square: $x + 42 = x^2$, so $x^2 - x - 42 = 0$, or $(x - 7)(x + 6) = 0$, giving candidates $7$ and $-6$. Check both in the ORIGINAL. For $x = 7$: $\\sqrt{49} = 7$ ✓. For $x = -6$: $\\sqrt{36} = 6$, but the right side is $-6$ ✗ — a square root is never negative, so $-6$ is extraneous. Second route that never creates the impostor: let $u = \\sqrt{x + 42}$, so $u \\ge 0$ and $x = u^2 - 42$; the equation becomes $u = u^2 - 42$, that is $(u - 7)(u + 6) = 0$, and $u = -6$ is impossible for a square root, leaving $u = 7$ and $x = 49 - 42 = 7$ ✓. THE UNCHECKED CANDIDATE is the trap: handing in both roots ✗ because the quadratic offered two.',
    },
    {
      q: 'Solve $\\sqrt{4x + 45} = x$.',
      answer: '$x = 9$',
      solution:
        'Square: $4x + 45 = x^2$, so $x^2 - 4x - 45 = 0$, or $(x - 9)(x + 5) = 0$, with candidates $9$ and $-5$. Check in the ORIGINAL. For $x = 9$: $\\sqrt{36 + 45} = \\sqrt{81} = 9$ ✓. For $x = -5$: $\\sqrt{-20 + 45} = \\sqrt{25} = 5$, while the right side is $-5$ ✗ — the radicand is perfectly positive, yet the SIGNS refuse to match, so $-5$ is extraneous. Second route that rules the impostor out before any solving: the equation says $x$ EQUALS a square root, so $x \\ge 0$ from the very first line; then complete the square on $x^2 - 4x = 45$ to get $(x - 2)^2 = 49$, so $x = 2 \\pm 7$, and the sign rule discards $-5$ on sight, leaving $x = 9$ ✓. THE KEPT NEGATIVE is the trap: reporting $-5$ ✗ because it satisfies the squared equation — which is a different equation.',
    },
    {
      q: 'Solve $\\sqrt{x + 8} = x - 4$.',
      answer: '$x = 8$',
      solution:
        'Square: $x + 8 = x^2 - 8x + 16$, so $x^2 - 9x + 8 = 0$, or $(x - 1)(x - 8) = 0$. Check both in the ORIGINAL. For $x = 8$: $\\sqrt{16} = 4$ and $8 - 4 = 4$ ✓. For $x = 1$: $\\sqrt{9} = 3$, but $1 - 4 = -3$ ✗ — the squaring lost the minus sign, and $x = 1$ is extraneous. Second route by shifting the variable so the impostor never appears: set $y = x - 4$, which must be $\\ge 0$ since it equals a square root; then $x = y + 4$ and the equation reads $y = \\sqrt{y + 12}$, so $y^2 - y - 12 = 0$, or $(y - 4)(y + 3) = 0$; only $y = 4$ clears $y \\ge 0$, giving $x = 8$ ✓. THE UNCHECKED CANDIDATE is the trap: both roots look innocent until they meet the original equation.',
    },
  ],

  // w6 — the infinite continued fraction $a + \frac{1}{a + \cdots}$, whose value
  //      is $\frac{a + \sqrt{a^2 + 4}}{2}$. a = 13, 15, 17, and $a^2 + 4$ is
  //      prime in all three, so no surd reduces.
  [
    {
      q: 'Evaluate $13 + \\frac{1}{13 + \\frac{1}{13 + \\cdots}}$.',
      answer: '$\\frac{13 + \\sqrt{173}}{2}$',
      solution:
        'Name it $x$. The denominator under the first $1$ is the entire fraction again, so $x = 13 + \\frac{1}{x}$. Multiply by $x$: $x^2 - 13x - 1 = 0$, so $x = \\frac{13 \\pm \\sqrt{169 + 4}}{2} = \\frac{13 \\pm \\sqrt{173}}{2}$. The expression is bigger than $13$, so take the plus sign: $x = \\frac{13 + \\sqrt{173}}{2} \\approx 13.077$. Second route by feeding the answer back into the original relation. Rationalise the reciprocal: $\\frac{1}{x} = \\frac{2}{13 + \\sqrt{173}} = \\frac{2(\\sqrt{173} - 13)}{173 - 169} = \\frac{\\sqrt{173} - 13}{2}$. Then $13 + \\frac{1}{x} = \\frac{26 + \\sqrt{173} - 13}{2} = \\frac{13 + \\sqrt{173}}{2} = x$ ✓ — exactly the self-similar equation, satisfied on the nose. THE WRONG DISCRIMINANT is the trap: writing $\\sqrt{169 - 4}$ ✗; in $b^2 - 4ac$ the constant $-1$ gets multiplied by $-4$, so the $4$ is ADDED.',
    },
    {
      q: 'Evaluate $15 + \\frac{1}{15 + \\frac{1}{15 + \\cdots}}$.',
      answer: '$\\frac{15 + \\sqrt{229}}{2}$',
      solution:
        'Let $x$ be the whole fraction. Self-similarity gives $x = 15 + \\frac{1}{x}$, so $x^2 - 15x - 1 = 0$ and $x = \\frac{15 \\pm \\sqrt{225 + 4}}{2} = \\frac{15 \\pm \\sqrt{229}}{2}$. Since $229$ is prime the surd cannot be reduced, and since the fraction plainly exceeds $15$ the answer is $x = \\frac{15 + \\sqrt{229}}{2}$. Second route by cutting the fraction off at successive levels and watching the values settle: one level gives $15$, two give $15 + \\frac{1}{15} \\approx 15.0667$, three give $15 + \\frac{1}{15.0667} \\approx 15.06637$, and $\\frac{15 + \\sqrt{229}}{2} \\approx \\frac{15 + 15.13275}{2} \\approx 15.06638$ ✓. THE TRUNCATED FRACTION is the trap: reporting the two-level value $\\frac{226}{15}$ ✗ as if the tower stopped — it never stops, and the true value is irrational.',
    },
    {
      q: 'Xander writes the endless fraction $17 + \\frac{1}{17 + \\frac{1}{17 + \\cdots}}$. What is its value?',
      answer: '$\\frac{17 + \\sqrt{293}}{2}$',
      solution:
        'Call Xander’s number $x$. What sits below the first $1$ is the whole fraction over again, so $x = 17 + \\frac{1}{x}$, giving $x^2 - 17x - 1 = 0$ and $x = \\frac{17 \\pm \\sqrt{289 + 4}}{2} = \\frac{17 \\pm \\sqrt{293}}{2}$. The value is larger than $17$, so $x = \\frac{17 + \\sqrt{293}}{2} \\approx 17.059$. Second route through a product instead of a sum: rearranging $x = 17 + \\frac{1}{x}$ gives $x - 17 = \\frac{1}{x}$, so the answer must satisfy $x(x - 17) = 1$. Test it: $\\frac{17 + \\sqrt{293}}{2} \\cdot \\frac{\\sqrt{293} - 17}{2} = \\frac{293 - 289}{4} = \\frac{4}{4} = 1$ ✓. THE KEPT NEGATIVE is the trap: $\\frac{17 - \\sqrt{293}}{2} \\approx -0.059$ ✗ solves the quadratic but is negative, and a fraction that starts with $17 +$ cannot be.',
    },
  ],

  // w7 — $x^3 + y^3$ from the sum and the product. Sums 30, 31, 32 with small
  //      products, so the numbers are irrational but the answer is a whole
  //      number. Second route always the factorisation, never the cube.
  [
    {
      q: 'If $x + y = 30$ and $xy = 4$, find $x^3 + y^3$.',
      answer: '$26640$',
      solution:
        'Expanding $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$ and pulling the middle terms together gives $x^3 + y^3 = (x + y)^3 - 3xy(x + y)$. Substitute: $30^3 - 3(4)(30) = 27000 - 360 = 26640$. Second route through the factorisation $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$, which never expands a cube: $x^2 + y^2 = 900 - 8 = 892$, so $x^2 - xy + y^2 = 892 - 4 = 888$, and $30 \\times 888 = 26640$ ✓. THE CUBED SUM is the trap: $27000$ ✗, the hope that $(x + y)^3$ equals $x^3 + y^3$. (The numbers themselves are $15 \\pm \\sqrt{221}$ — irrational, and never needed.)',
    },
    {
      q: 'Two numbers add to $31$ and multiply to $2$. Find the sum of their cubes.',
      answer: '$29605$',
      solution:
        'Use $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 31^3 - 3(2)(31) = 29791 - 186 = 29605$. Second route by factorisation: $x^2 + y^2 = 31^2 - 2(2) = 957$, so $x^2 - xy + y^2 = 957 - 2 = 955$, and $x^3 + y^3 = 31 \\times 955 = 29605$ ✓. THE MISSING FACTOR is the trap: subtracting $3xy = 6$ instead of $3xy(x + y) = 186$ ✗ — the correction term carries a factor of $(x + y)$, which is exactly what the three middle terms of the expansion leave behind.',
    },
    {
      q: 'Yara’s two numbers have sum $32$ and product $5$. What is $x^3 + y^3$?',
      answer: '$32288$',
      solution:
        'The cube identity gives $x^3 + y^3 = (x + y)^3 - 3xy(x + y) = 32^3 - 3(5)(32) = 32768 - 480 = 32288$. Second route by factorisation: $x^2 + y^2 = 1024 - 10 = 1014$, so $x^2 - xy + y^2 = 1014 - 5 = 1009$, and $32 \\times 1009 = 32288$ ✓. THE CUBED SUM is the trap: $32768$ ✗. Yara’s numbers are $16 \\pm \\sqrt{251}$, a pair of ugly irrationals whose cubes still add to a clean whole number — the whole point of working symmetrically.',
    },
  ],

  // w8 — two radicals, two squarings. v1 keeps BOTH candidates, v2 produces a
  //      genuine extraneous root, and v3 keeps both again with one of them
  //      negative. The second route is always the A, B substitution, which
  //      shows exactly which candidates are real.
  [
    {
      q: 'Solve $\\sqrt{2x + 17} - \\sqrt{x} = 3$. (Find ALL solutions.)',
      answer: '$x = 4$ and $x = 16$',
      solution:
        'Isolate one radical: $\\sqrt{2x + 17} = 3 + \\sqrt{x}$. Square: $2x + 17 = 9 + 6\\sqrt{x} + x$, so $x + 8 = 6\\sqrt{x}$. Square again: $x^2 + 16x + 64 = 36x$, so $x^2 - 20x + 64 = 0$, or $(x - 4)(x - 16) = 0$. Check both in the ORIGINAL. For $x = 4$: $\\sqrt{25} - \\sqrt{4} = 5 - 2 = 3$ ✓. For $x = 16$: $\\sqrt{49} - \\sqrt{16} = 7 - 4 = 3$ ✓. BOTH survive — this variation has no extraneous root at all. Second route with no squaring of an equation: let $A = \\sqrt{2x + 17}$ and $B = \\sqrt{x}$, so $A - B = 3$ and $A^2 - 2B^2 = 17$. Substituting $A = B + 3$ gives $B^2 + 6B + 9 - 2B^2 = 17$, that is $B^2 - 6B + 8 = 0$, or $(B - 2)(B - 4) = 0$; both $B = 2$ and $B = 4$ are legal for a square root, so both $x = 4$ and $x = 16$ are genuine ✓. THE DISCARDED SURVIVOR is the trap: assuming two squarings must breed an impostor and throwing one root away ✗.',
    },
    {
      q: 'Solve $\\sqrt{3x + 1} - \\sqrt{x + 4} = 1$. (Find ALL solutions.)',
      answer: '$x = 5$',
      solution:
        'Isolate: $\\sqrt{3x + 1} = 1 + \\sqrt{x + 4}$. Square: $3x + 1 = 1 + 2\\sqrt{x + 4} + x + 4$, so $2x - 4 = 2\\sqrt{x + 4}$, that is $x - 2 = \\sqrt{x + 4}$. Square again: $x^2 - 4x + 4 = x + 4$, so $x^2 - 5x = 0$, or $x(x - 5) = 0$. Check both in the ORIGINAL. For $x = 5$: $\\sqrt{16} - \\sqrt{9} = 4 - 3 = 1$ ✓. For $x = 0$: $\\sqrt{1} - \\sqrt{4} = 1 - 2 = -1$, not $1$ ✗ — this one is a GENUINE extraneous root, invented by the second squaring, which cannot tell $x - 2$ from $2 - x$. Second route that exposes it: with $A = \\sqrt{3x + 1}$ and $B = \\sqrt{x + 4}$ we have $A - B = 1$ and $A^2 - 3B^2 = (3x + 1) - (3x + 12) = -11$. Substituting $A = B + 1$ gives $-2B^2 + 2B + 1 = -11$, so $B^2 - B - 6 = 0$, or $(B - 3)(B + 2) = 0$. Only $B = 3$ is possible for a square root, giving $x + 4 = 9$ and $x = 5$ ✓; the rejected $B = -2$ squares to $B^2 = 4$, which is precisely the impostor $x = 0$. THE UNCHECKED CANDIDATE is the trap: reporting both roots ✗.',
    },
    {
      q: 'Solve $\\sqrt{2x + 18} - \\sqrt{x + 2} = 3$. (Find ALL solutions.)',
      answer: '$x = -1$ and $x = 23$',
      solution:
        'Isolate: $\\sqrt{2x + 18} = 3 + \\sqrt{x + 2}$. Square: $2x + 18 = 9 + 6\\sqrt{x + 2} + x + 2$, so $x + 7 = 6\\sqrt{x + 2}$. Square again: $x^2 + 14x + 49 = 36x + 72$, so $x^2 - 22x - 23 = 0$, or $(x - 23)(x + 1) = 0$. Check both in the ORIGINAL. For $x = 23$: $\\sqrt{64} - \\sqrt{25} = 8 - 5 = 3$ ✓. For $x = -1$: $\\sqrt{16} - \\sqrt{1} = 4 - 1 = 3$ ✓. BOTH survive — a negative solution is not the same thing as an extraneous one, since both radicands, $16$ and $1$, are perfectly positive. Second route with $A = \\sqrt{2x + 18}$ and $B = \\sqrt{x + 2}$: then $A - B = 3$ and $A^2 - 2B^2 = (2x + 18) - (2x + 4) = 14$. Substituting $A = B + 3$ gives $B^2 + 6B + 9 - 2B^2 = 14$, so $B^2 - 6B + 5 = 0$, or $(B - 1)(B - 5) = 0$; both $B = 1$ and $B = 5$ are legal, giving $x = -1$ and $x = 23$ ✓. THE DISCARDED SURVIVOR is the trap: throwing out $x = -1$ on sight ✗ — what a radical equation forbids is a negative RADICAND or a negative square root, never a negative $x$.',
    },
  ],

  // w9 — Vieta plus a shift: expand the product, then read the sum and product
  //      off the coefficients. Each is confirmed by evaluating the monic
  //      quadratic at the shift point.
  [
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 15x + 4 = 0$. Find $(r - 1)(s - 1)$ without solving the quadratic.',
      answer: '$-10$',
      solution:
        'Expand first: $(r - 1)(s - 1) = rs - r - s + 1 = rs - (r + s) + 1$. Vieta reads the coefficients: $r + s = 15$ and $rs = 4$, so the value is $4 - 15 + 1 = -10$. Second route in a single step: since the quadratic is monic it factors as $(x - r)(x - s)$, so evaluating it at $x = 1$ gives $(1 - r)(1 - s) = (r - 1)(s - 1)$ — the two sign flips cancel. And $1^2 - 15(1) + 4 = -10$ ✓. THE UNEXPANDED SHIFT is the trap: reading $(r - 1)(s - 1)$ as $rs - 1 = 3$ ✗; the $-1$ multiplies BOTH roots, which is where the $-(r + s)$ comes from.',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 17x + 6 = 0$. Find $(r + 2)(s + 2)$ without solving the quadratic.',
      answer: '$44$',
      solution:
        'Expand: $(r + 2)(s + 2) = rs + 2r + 2s + 4 = rs + 2(r + s) + 4$. Vieta gives $r + s = 17$ and $rs = 6$, so the value is $6 + 34 + 4 = 44$. Second route by evaluating the quadratic at the shift point: the monic quadratic is $(x - r)(x - s)$, so at $x = -2$ it equals $(-2 - r)(-2 - s) = (r + 2)(s + 2)$; computing, $(-2)^2 - 17(-2) + 6 = 4 + 34 + 6 = 44$ ✓. Note the point is $x = -2$, not $x = 2$ — a shift of $+2$ in the roots is a shift of $-2$ in the variable. THE UNEXPANDED SHIFT is the trap: answering $rs + 4 = 10$ ✗, which drops the two middle terms.',
    },
    {
      q: 'Let $r$ and $s$ be the roots of $x^2 - 19x + 3 = 0$. Find $(r - 2)(s - 2)$ without solving the quadratic.',
      answer: '$-31$',
      solution:
        'Expand: $(r - 2)(s - 2) = rs - 2r - 2s + 4 = rs - 2(r + s) + 4$. Vieta: $r + s = 19$ and $rs = 3$, so the value is $3 - 38 + 4 = -31$. Second route by evaluating at the shift point: $(x - r)(x - s)$ at $x = 2$ gives $(2 - r)(2 - s) = (r - 2)(s - 2)$, and $2^2 - 19(2) + 3 = 4 - 38 + 3 = -31$ ✓. The roots are $\\frac{19 \\pm \\sqrt{349}}{2}$, thoroughly irrational — and never touched. THE FLIPPED SIGN is the trap: writing $r + s = -19$ ✗; for $x^2 + bx + c$ the sum is $-b$, and here $b$ is already $-19$.',
    },
  ],

  // w10 — square TWICE to reach $x^4 + \frac{1}{x^4} = (k^2 - 2)^2 - 2$.
  //        k = 8, 9, 10, and each second route climbs by a different ladder.
  [
    {
      q: 'If $x + \\frac{1}{x} = 8$, find $x^4 + \\frac{1}{x^4}$.',
      answer: '$3842$',
      solution:
        'Square twice, paying the cross term each time. First: $x^2 + \\frac{1}{x^2} = 8^2 - 2 = 62$. Now square THAT: $x^4 + 2 + \\frac{1}{x^4} = 62^2 = 3844$, so $x^4 + \\frac{1}{x^4} = 3844 - 2 = 3842$. Second route through the minus version: $\\left(x^2 - \\frac{1}{x^2}\\right)^2 = \\left(x^2 + \\frac{1}{x^2}\\right)^2 - 4 = 3844 - 4 = 3840$, and $x^4 + \\frac{1}{x^4} = \\left(x^2 - \\frac{1}{x^2}\\right)^2 + 2 = 3840 + 2 = 3842$ ✓ — the cross term switches sides, and the totals agree. THE ONE-SQUARING SHORTCUT is the trap: stopping at $3844$ ✗; each squaring costs a separate $2$.',
    },
    {
      q: 'If $x + \\frac{1}{x} = 9$, find $x^4 + \\frac{1}{x^4}$.',
      answer: '$6239$',
      solution:
        'Square twice. First: $x^2 + \\frac{1}{x^2} = 9^2 - 2 = 79$. Then $x^4 + 2 + \\frac{1}{x^4} = 79^2 = 6241$, so $x^4 + \\frac{1}{x^4} = 6241 - 2 = 6239$. Second route by climbing a ladder one rung at a time, which passes through the CUBE the first route skips. Write $p_n = x^n + \\frac{1}{x^n}$ and multiply out $\\left(x^n + \\frac{1}{x^n}\\right)\\left(x + \\frac{1}{x}\\right) = x^{n+1} + \\frac{1}{x^{n+1}} + x^{n-1} + \\frac{1}{x^{n-1}}$, which says $p_{n+1} = 9p_n - p_{n-1}$. Starting from $p_0 = 2$ and $p_1 = 9$: $p_2 = 81 - 2 = 79$, $p_3 = 9(79) - 9 = 702$, $p_4 = 9(702) - 79 = 6318 - 79 = 6239$ ✓. THE ONE-SQUARING SHORTCUT is the trap: reporting $6241$ ✗.',
    },
    {
      q: 'Willa’s number satisfies $x + \\frac{1}{x} = 10$. Find $x^4 + \\frac{1}{x^4}$.',
      answer: '$9602$',
      solution:
        'Square twice. First: $x^2 + \\frac{1}{x^2} = 10^2 - 2 = 98$. Squaring that: $x^4 + 2 + \\frac{1}{x^4} = 98^2 = 9604$, so $x^4 + \\frac{1}{x^4} = 9604 - 2 = 9602$. Second route through the cube. Cubing the given gives $x^3 + \\frac{1}{x^3} = 10^3 - 3(10) = 970$; then multiplying $\\left(x + \\frac{1}{x}\\right)\\left(x^3 + \\frac{1}{x^3}\\right) = x^4 + \\frac{1}{x^4} + x^2 + \\frac{1}{x^2}$ gives $10 \\times 970 = x^4 + \\frac{1}{x^4} + 98$, so $x^4 + \\frac{1}{x^4} = 9700 - 98 = 9602$ ✓. Two completely different ladders, one answer. THE FOURTH POWER is the trap: answering $10^4 = 10000$ ✗, as if the fourth power of the sum were the sum of the fourth powers.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 22,
  worksheet,
}
