// Introduction to Algebra chapter 22 — variations for section 22.2
// (Self-similarity). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was closed twice by two genuinely different routes. The primary
//    route always names the infinite object $x$, uses self-similarity to write
//    a finite equation, and solves it. The second route never re-runs that
//    algebra: it either FEEDS THE VALUE BACK (substitute the answer into the
//    outer layer and watch the layer reproduce it), CLIMBS THE TOWER
//    NUMERICALLY from a seed, uses the RECIPROCAL RELATION $x(x - a) = 1$ that
//    a continued fraction forces, or adds up the EXPONENTS $\frac12 + \frac14
//    + \cdots$ hiding in a multiplying tower.
//  - Slot shapes are preserved exactly: slot 3 always answers with an EQUATION
//    rather than a number, slot 5 always carries a SURPRISE (a huge number
//    inside the tower collapsing to a tiny whole one), slot 6 always uses the
//    MINUS form, slot 8 always solves for the number INSIDE the tower, slot 9
//    always MULTIPLIES instead of adding, and slot 10 is always the whole
//    expression sitting under a numerator of $1$.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution, and that mistake really does produce that choice. The traps
//    running through this section are: KEEPING THE NEGATIVE ROOT, STOPPING AT
//    A SINGLE RADICAL, SWAPPING THE SIGNS IN THE FACTORING, ANSWERING WITH THE
//    OTHER FORM OF THE TOWER, TRUNCATING THE FRACTION EARLY, LOSING THE $4$ IN
//    THE DISCRIMINANT, REPORTING THE RECIPROCAL, FORGETTING THE HIDDEN COPY OF
//    $x$, COUNTING THE HIDDEN COPY TWICE, REPORTING THE VALUE INSTEAD OF THE
//    NUMBER INSIDE, TREATING THE PLUS AS A TIMES, ANSWERING WITH THE NUMBER
//    INSIDE, KEEPING THE ROOT $x = 0$, and REPORTING $x^2$ INSTEAD OF $x$.
//  - No two choices inside an item name the same number.

const s222 = [
  // s2 — the plain plus tower: name it, square, keep the positive root.
  [
    {
      q: 'Evaluate $\\sqrt{56 + \\sqrt{56 + \\sqrt{56 + \\cdots}}}$.',
      choices: ['$8$', '$-7$', '$2\\sqrt{14}$', '$7$'],
      answer: 0,
      solution:
        'Let $x$ be the whole tower. Everything under the outer radical is $56$ plus another copy of the tower, so $x = \\sqrt{56 + x}$. Squaring gives $x^2 = 56 + x$, so $x^2 - x - 56 = 0$, which factors as $(x - 8)(x + 7) = 0$. A square root is never negative, so $x = 8$ ✓, and feeding it back closes the loop: $\\sqrt{56 + 8} = \\sqrt{64} = 8$ ✓. Check a second, independent way by climbing the tower from the inside with a seed of $0$: $\\sqrt{56} \\approx 7.483$, then $\\sqrt{56 + 7.483} \\approx 7.967$, then $\\approx 7.998$, then $\\approx 8.0000$ — the partial towers march straight up to $8$ ✓. (The choice $-7$ is KEEPING THE NEGATIVE ROOT, the one the quadratic offers but the radical forbids ✗; the choice $2\\sqrt{14}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{56} \\approx 7.48$, which ignores every layer after the first; the choice $7$ is SWAPPING THE SIGNS IN THE FACTORING, reading $(x + 8)(x - 7)$, and $\\sqrt{56 + 7} = \\sqrt{63} \\ne 7$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{72 + \\sqrt{72 + \\sqrt{72 + \\cdots}}}$.',
      choices: ['$-8$', '$6\\sqrt{2}$', '$9$', '$8$'],
      answer: 2,
      solution:
        'Name the tower $x$. Self-similarity gives $x = \\sqrt{72 + x}$, so $x^2 - x - 72 = 0$, or $(x - 9)(x + 8) = 0$. The tower is positive, so $x = 9$ ✓. Substituting back closes it: $\\sqrt{72 + 9} = \\sqrt{81} = 9$ ✓. Check a second, independent way by running the logic BACKWARD: if the value really is $9$, then the copy buried under the outer radical is also $9$, so the number printed inside must be $9^2 - 9 = 72$ ✓ — exactly the number in the problem, so $9$ is the value that tower was built to have. (The choice $-8$ is KEEPING THE NEGATIVE ROOT ✗; the choice $6\\sqrt{2}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{72} \\approx 8.49$; the choice $8$ is SWAPPING THE SIGNS IN THE FACTORING, and $\\sqrt{72 + 8} = \\sqrt{80} \\approx 8.94 \\ne 8$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{90 + \\sqrt{90 + \\sqrt{90 + \\cdots}}}$.',
      choices: ['$-9$', '$3\\sqrt{10}$', '$9$', '$10$'],
      answer: 3,
      solution:
        'Call the tower $x$. The self-similar equation is $x = \\sqrt{90 + x}$, so $x^2 - x - 90 = 0$, or $(x - 10)(x + 9) = 0$, and the positive root is $x = 10$ ✓. Feed it back: $\\sqrt{90 + 10} = \\sqrt{100} = 10$ ✓. Check a second, independent way by climbing from a seed of $0$: $\\sqrt{90} \\approx 9.487$, then $\\sqrt{90 + 9.487} \\approx 9.974$, then $\\approx 9.999$ — the partial towers close in on $10$ and never pass it ✓. (The choice $-9$ is KEEPING THE NEGATIVE ROOT ✗; the choice $3\\sqrt{10}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{90} \\approx 9.49$; the choice $9$ is SWAPPING THE SIGNS IN THE FACTORING, and $\\sqrt{90 + 9} = \\sqrt{99} \\approx 9.95 \\ne 9$ ✗.)',
    },
  ],
  // s2 — the same plus tower with a bigger number inside.
  [
    {
      q: 'Evaluate $\\sqrt{110 + \\sqrt{110 + \\sqrt{110 + \\cdots}}}$.',
      choices: ['$-10$', '$11$', '$\\sqrt{110}$', '$10$'],
      answer: 1,
      solution:
        'Let $x$ be the tower, so $x = \\sqrt{110 + x}$ and $x^2 - x - 110 = 0$, which factors as $(x - 11)(x + 10) = 0$. Keeping the positive root gives $x = 11$ ✓, and the substitution closes: $\\sqrt{110 + 11} = \\sqrt{121} = 11$ ✓. Check a second, independent way by working backward from the candidate: a value of $11$ forces the number inside to be $11^2 - 11 = 110$ ✓, which is precisely what is printed. Big numbers inside do not make the answer big — the tower grows only to the whole number just above $\\sqrt{110}$. (The choice $-10$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\sqrt{110} \\approx 10.49$ is STOPPING AT A SINGLE RADICAL; the choice $10$ is SWAPPING THE SIGNS IN THE FACTORING, and $\\sqrt{110 + 10} = \\sqrt{120} \\approx 10.95 \\ne 10$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{132 + \\sqrt{132 + \\sqrt{132 + \\cdots}}}$.',
      choices: ['$-11$', '$2\\sqrt{33}$', '$12$', '$11$'],
      answer: 2,
      solution:
        'Naming the tower $x$ gives $x = \\sqrt{132 + x}$, hence $x^2 - x - 132 = 0$, or $(x - 12)(x + 11) = 0$. The tower is positive, so $x = 12$ ✓; substituting back, $\\sqrt{132 + 12} = \\sqrt{144} = 12$ ✓. Check a second, independent way by climbing numerically from a seed of $0$: $\\sqrt{132} \\approx 11.489$, then $\\approx 11.979$, then $\\approx 11.999$ ✓ — closing on $12$. (The choice $-11$ is KEEPING THE NEGATIVE ROOT ✗; the choice $2\\sqrt{33}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{132} \\approx 11.49$; the choice $11$ is SWAPPING THE SIGNS IN THE FACTORING, and $\\sqrt{132 + 11} = \\sqrt{143} \\approx 11.96 \\ne 11$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{156 + \\sqrt{156 + \\sqrt{156 + \\cdots}}}$.',
      choices: ['$13$', '$-12$', '$2\\sqrt{39}$', '$12$'],
      answer: 0,
      solution:
        'Let $x$ be the tower. Self-similarity gives $x = \\sqrt{156 + x}$, so $x^2 - x - 156 = 0$, or $(x - 13)(x + 12) = 0$, and the positive root is $x = 13$ ✓. Feed it back: $\\sqrt{156 + 13} = \\sqrt{169} = 13$ ✓. Check a second, independent way by reverse-engineering the tower: for the value to be a whole number $m$, the number inside must be $m^2 - m$, and $13^2 - 13 = 169 - 13 = 156$ ✓ — the printed number matches $m = 13$ exactly. (The choice $-12$ is KEEPING THE NEGATIVE ROOT ✗; the choice $2\\sqrt{39}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{156} \\approx 12.49$; the choice $12$ is SWAPPING THE SIGNS IN THE FACTORING, and $\\sqrt{156 + 12} = \\sqrt{168} \\approx 12.96 \\ne 12$ ✗.)',
    },
  ],
  // s2 — set up the equation, do not solve it: the answer is an EQUATION.
  [
    {
      q: 'To evaluate $x = \\sqrt{14 + \\sqrt{14 + \\cdots}}$, which equation should you solve?',
      choices: ['$x^2 = 14x$', '$x^2 = 14 + x$', '$x = 14 + x^2$', '$x^2 = 14 - x$'],
      answer: 1,
      solution:
        'Everything under the outer radical is $14$ plus a copy of the WHOLE expression, and the whole expression is $x$ — so $x = \\sqrt{14 + x}$, and squaring both sides gives $x^2 = 14 + x$ ✓. Check a second, independent way by testing the equations against the actual size of the tower: $\\sqrt{14} \\approx 3.742$, then $\\sqrt{14 + 3.742} \\approx 4.212$, then $\\approx 4.269$, settling near $4.275$. Substituting $x \\approx 4.275$ into $x^2 = 14 + x$ gives $18.27$ on both sides ✓, while the other three equations fail badly at that value ✗. (The choice $x^2 = 14x$ is TREATING THE PLUS AS A TIMES, the equation for $\\sqrt{14\\sqrt{14\\cdots}}$ instead; the choice $x = 14 + x^2$ squares the wrong side, which is the true equation read backward ✗; the choice $x^2 = 14 - x$ is ANSWERING WITH THE OTHER FORM OF THE TOWER, the minus version ✗.)',
    },
    {
      q: 'To evaluate $x = \\sqrt{24 + \\sqrt{24 + \\cdots}}$, which equation should you solve?',
      choices: ['$x^2 = 24 - x$', '$x = 24 + x^2$', '$x^2 = 24 + x$', '$x^2 = 24x$'],
      answer: 2,
      solution:
        'Name the tower $x$. The tail under the first radical is the tower all over again, so the contents are $24 + x$ and $x = \\sqrt{24 + x}$; squaring gives $x^2 = 24 + x$ ✓. Check a second, independent way by solving the candidate and testing the answer in the ORIGINAL expression: $x^2 - x - 24 = 0$ has positive root $x = \\frac{1 + \\sqrt{97}}{2} \\approx 5.424$, and indeed $\\sqrt{24 + 5.424} = \\sqrt{29.424} \\approx 5.424$ ✓ — the equation reproduces the expression. (The choice $x^2 = 24 - x$ is ANSWERING WITH THE OTHER FORM OF THE TOWER, the minus version ✗; the choice $x = 24 + x^2$ has the squaring on the wrong side ✗; the choice $x^2 = 24x$ is TREATING THE PLUS AS A TIMES, and its root $24$ is nowhere near the true value ✗.)',
    },
    {
      q: 'To evaluate $x = \\sqrt{40 + \\sqrt{40 + \\cdots}}$, which equation should you solve?',
      choices: ['$x^2 = 40x$', '$x = 40 + x^2$', '$x^2 = 40 - x$', '$x^2 = 40 + x$'],
      answer: 3,
      solution:
        'The self-similar step is the whole trick: under the outer radical sits $40$ plus another copy of the entire tower, which is $x$. So $x = \\sqrt{40 + x}$, and squaring gives $x^2 = 40 + x$ ✓. Check a second, independent way by climbing the tower numerically and testing: $\\sqrt{40} \\approx 6.325$, then $\\approx 6.808$, then $\\approx 6.842$, settling near $6.844$; substituting gives $6.844^2 \\approx 46.84$ and $40 + 6.844 \\approx 46.84$ ✓, a match the other three equations cannot produce ✗. (The choice $x^2 = 40x$ is TREATING THE PLUS AS A TIMES; the choice $x = 40 + x^2$ squares the wrong side of the equation ✗; the choice $x^2 = 40 - x$ is ANSWERING WITH THE OTHER FORM OF THE TOWER, the minus version ✗.)',
    },
  ],
  // s2 — infinite continued fraction $a + 1/(a + \cdots)$.
  [
    {
      q: 'Evaluate $6 + \\frac{1}{6 + \\frac{1}{6 + \\cdots}}$.',
      choices: ['$3 + \\sqrt{10}$', '$3 - \\sqrt{10}$', '$\\frac{37}{6}$', '$\\frac{6 + \\sqrt{37}}{2}$'],
      answer: 0,
      solution:
        'Name the fraction $x$. The denominator after the first "$6 +$" is the whole fraction again, so $x = 6 + \\frac{1}{x}$. Multiplying by $x$ gives $x^2 - 6x - 1 = 0$, so $x = \\frac{6 \\pm \\sqrt{36 + 4}}{2} = \\frac{6 \\pm 2\\sqrt{10}}{2} = 3 \\pm \\sqrt{10}$. The expression is bigger than $6$, so $x = 3 + \\sqrt{10} \\approx 6.1623$ ✓. Check a second, independent way with the RECIPROCAL RELATION the equation forces: $x\\left(x - 6\\right) = 1$, so $x$ and $x - 6$ must be reciprocals. Here $x - 6 = \\sqrt{10} - 3 \\approx 0.1623$, and $\\left(3 + \\sqrt{10}\\right)\\left(\\sqrt{10} - 3\\right) = 10 - 9 = 1$ ✓ exactly. (The choice $3 - \\sqrt{10} \\approx -0.16$ is KEEPING THE NEGATIVE ROOT, which a fraction starting with $6$ can never equal ✗; the choice $\\frac{37}{6} \\approx 6.1667$ is TRUNCATING THE FRACTION EARLY at $6 + \\frac{1}{6}$; the choice $\\frac{6 + \\sqrt{37}}{2} \\approx 6.04$ is LOSING THE $4$ IN THE DISCRIMINANT, using $36 + 1$ where $b^2 - 4ac = 36 + 4$ belongs ✗.)',
    },
    {
      q: 'Evaluate $7 + \\frac{1}{7 + \\frac{1}{7 + \\cdots}}$.',
      choices: ['$\\frac{7 - \\sqrt{53}}{2}$', '$\\frac{50}{7}$', '$\\frac{7 + 3\\sqrt{5}}{2}$', '$\\frac{7 + \\sqrt{53}}{2}$'],
      answer: 3,
      solution:
        'Call it $x$. The tail under the numerator $1$ is the whole fraction, so $x = 7 + \\frac{1}{x}$, giving $x^2 - 7x - 1 = 0$ and $x = \\frac{7 \\pm \\sqrt{49 + 4}}{2} = \\frac{7 \\pm \\sqrt{53}}{2}$. The value exceeds $7$, so $x = \\frac{7 + \\sqrt{53}}{2} \\approx 7.1401$ ✓. Check a second, independent way through the reciprocal relation $x(x - 7) = 1$: here $x - 7 = \\frac{\\sqrt{53} - 7}{2} \\approx 0.1401$, and $\\frac{7 + \\sqrt{53}}{2} \\cdot \\frac{\\sqrt{53} - 7}{2} = \\frac{53 - 49}{4} = 1$ ✓ exactly, so the value and its excess over $7$ really are reciprocals. (The choice $\\frac{7 - \\sqrt{53}}{2} \\approx -0.14$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\frac{50}{7} \\approx 7.1429$ is TRUNCATING THE FRACTION EARLY at $7 + \\frac{1}{7}$ — close, but the infinite value is irrational; the choice $\\frac{7 + 3\\sqrt{5}}{2} \\approx 6.85$ is LOSING THE $4$ IN THE DISCRIMINANT, $49 + 1$ instead of $49 + 4$, and it is smaller than $7$, which is impossible ✗.)',
    },
    {
      q: 'Evaluate $8 + \\frac{1}{8 + \\frac{1}{8 + \\cdots}}$.',
      choices: ['$4 - \\sqrt{17}$', '$4 + \\sqrt{17}$', '$\\frac{65}{8}$', '$\\frac{8 + \\sqrt{65}}{2}$'],
      answer: 1,
      solution:
        'Let $x$ be the fraction, so $x = 8 + \\frac{1}{x}$ and $x^2 - 8x - 1 = 0$. The quadratic formula gives $x = \\frac{8 \\pm \\sqrt{64 + 4}}{2} = \\frac{8 \\pm 2\\sqrt{17}}{2} = 4 \\pm \\sqrt{17}$, and the fraction is bigger than $8$, so $x = 4 + \\sqrt{17} \\approx 8.1231$ ✓. Check a second, independent way with the reciprocal relation $x(x - 8) = 1$: $x - 8 = \\sqrt{17} - 4 \\approx 0.1231$, and $\\left(4 + \\sqrt{17}\\right)\\left(\\sqrt{17} - 4\\right) = 17 - 16 = 1$ ✓. (The choice $4 - \\sqrt{17} \\approx -0.12$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\frac{65}{8} = 8.125$ is TRUNCATING THE FRACTION EARLY at $8 + \\frac{1}{8}$; the choice $\\frac{8 + \\sqrt{65}}{2} \\approx 8.03$ is LOSING THE $4$ IN THE DISCRIMINANT, $64 + 1$ where $64 + 4$ belongs ✗.)',
    },
  ],
  // s2 — the SURPRISE slot: a cube-root tower with a huge number inside collapses to a tiny one.
  [
    {
      q: 'Evaluate the infinite tower of CUBE roots $\\sqrt[3]{24 + \\sqrt[3]{24 + \\sqrt[3]{24 + \\cdots}}}$.',
      choices: ['$2\\sqrt[3]{3}$', '$3$', '$2\\sqrt{6}$', '$24$'],
      answer: 1,
      solution:
        'Let $x$ be the tower. Under the outer cube root sits $24$ plus a copy of the whole tower, so $x = \\sqrt[3]{24 + x}$, and CUBING (not squaring) gives $x^3 = 24 + x$, or $x^3 - x - 24 = 0$. Try $x = 3$: $27 - 3 - 24 = 0$ ✓, and factoring out that root leaves $x^3 - x - 24 = (x - 3)(x^2 + 3x + 8)$, whose quadratic factor has discriminant $9 - 32 < 0$ — no other real root, so the value is exactly $3$. Feed it back: $\\sqrt[3]{24 + 3} = \\sqrt[3]{27} = 3$ ✓. Surprising but true: a $24$ repeated forever collapses to a $3$. Check a second, independent way by climbing from a seed of $0$: $\\sqrt[3]{24} \\approx 2.884$, then $\\sqrt[3]{26.884} \\approx 2.997$, then $\\approx 3.0000$ ✓. (The choice $2\\sqrt[3]{3}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt[3]{24} \\approx 2.88$; the choice $2\\sqrt{6} \\approx 4.90$ is TREATING THE PLUS AS A TIMES, solving $x^3 = 24x$ instead ✗; the choice $24$ is ANSWERING WITH THE NUMBER INSIDE, which is what a MULTIPLYING tower of square roots returns, not this one ✗.)',
    },
    {
      q: 'Evaluate the infinite tower of CUBE roots $\\sqrt[3]{60 + \\sqrt[3]{60 + \\sqrt[3]{60 + \\cdots}}}$.',
      choices: ['$\\sqrt[3]{60}$', '$2\\sqrt{15}$', '$4$', '$60$'],
      answer: 2,
      solution:
        'Name the tower $x$. Self-similarity gives $x = \\sqrt[3]{60 + x}$, so cubing yields $x^3 = 60 + x$, or $x^3 - x - 60 = 0$. Testing $x = 4$: $64 - 4 - 60 = 0$ ✓, and $x^3 - x - 60 = (x - 4)(x^2 + 4x + 15)$ with discriminant $16 - 60 < 0$, so $4$ is the only real value. Substituting back: $\\sqrt[3]{60 + 4} = \\sqrt[3]{64} = 4$ ✓ — a $60$ nested forever gives a plain $4$. Check a second, independent way by reverse-engineering: for a cube-root tower to land on a whole number $m$, the number inside must be $m^3 - m$, and $4^3 - 4 = 64 - 4 = 60$ ✓, exactly the printed number. (The choice $\\sqrt[3]{60} \\approx 3.91$ is STOPPING AT A SINGLE RADICAL; the choice $2\\sqrt{15} \\approx 7.75$ is TREATING THE PLUS AS A TIMES, solving $x^3 = 60x$ ✗; the choice $60$ is ANSWERING WITH THE NUMBER INSIDE ✗.)',
    },
    {
      q: 'Evaluate the infinite tower of CUBE roots $\\sqrt[3]{120 + \\sqrt[3]{120 + \\sqrt[3]{120 + \\cdots}}}$.',
      choices: ['$2\\sqrt[3]{15}$', '$2\\sqrt{30}$', '$120$', '$5$'],
      answer: 3,
      solution:
        'Let $x$ be the tower, so $x = \\sqrt[3]{120 + x}$ and cubing gives $x^3 = 120 + x$, or $x^3 - x - 120 = 0$. Testing $x = 5$: $125 - 5 - 120 = 0$ ✓, and $x^3 - x - 120 = (x - 5)(x^2 + 5x + 24)$, whose discriminant $25 - 96$ is negative, so $5$ is the only real value ✓. Feed it back: $\\sqrt[3]{120 + 5} = \\sqrt[3]{125} = 5$ ✓. A $120$ under every layer, and the whole infinite object is worth $5$. Check a second, independent way by climbing from a seed of $0$: $\\sqrt[3]{120} \\approx 4.932$, then $\\sqrt[3]{124.932} \\approx 4.999$, then $\\approx 5.0000$ ✓. (The choice $2\\sqrt[3]{15}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt[3]{120} \\approx 4.93$; the choice $2\\sqrt{30} \\approx 10.95$ is TREATING THE PLUS AS A TIMES, solving $x^3 = 120x$ ✗; the choice $120$ is ANSWERING WITH THE NUMBER INSIDE ✗.)',
    },
  ],
  // s2 — the MINUS form: the quadratic flips, and the all-plus answer becomes a trap.
  [
    {
      q: 'Evaluate $\\sqrt{42 - \\sqrt{42 - \\sqrt{42 - \\cdots}}}$ (note the minus signs).',
      choices: ['$6$', '$-7$', '$7$', '$\\sqrt{42}$'],
      answer: 0,
      solution:
        'Let $x$ be the tower. Under the outer radical sits $42$ MINUS a copy of the whole tower, so $x = \\sqrt{42 - x}$. Squaring gives $x^2 = 42 - x$, so $x^2 + x - 42 = 0$, or $(x + 7)(x - 6) = 0$. A square root is never negative, so $x = 6$ ✓, and the substitution closes: $\\sqrt{42 - 6} = \\sqrt{36} = 6$ ✓. Check a second, independent way by climbing from a seed of $0$: $\\sqrt{42} \\approx 6.481$, then $\\sqrt{42 - 6.481} \\approx 5.960$, then $\\approx 6.003$, then $\\approx 6.0000$ — the partial towers oscillate in on $6$ ✓. (The choice $-7$ is KEEPING THE NEGATIVE ROOT ✗; the choice $7$ is ANSWERING WITH THE OTHER FORM OF THE TOWER — the all-PLUS version $\\sqrt{42 + \\sqrt{42 + \\cdots}}$ really is $7$, since $\\sqrt{42 + 7} = 7$, but $\\sqrt{42 - 7} = \\sqrt{35} \\ne 7$ ✗; the choice $\\sqrt{42} \\approx 6.48$ is STOPPING AT A SINGLE RADICAL ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{56 - \\sqrt{56 - \\sqrt{56 - \\cdots}}}$ (note the minus signs).',
      choices: ['$-8$', '$7$', '$8$', '$2\\sqrt{14}$'],
      answer: 1,
      solution:
        'Name the tower $x$. The minus form gives $x = \\sqrt{56 - x}$, so $x^2 = 56 - x$ and $x^2 + x - 56 = 0$, which factors as $(x + 8)(x - 7) = 0$. The tower is positive, so $x = 7$ ✓; feeding it back, $\\sqrt{56 - 7} = \\sqrt{49} = 7$ ✓. Check a second, independent way by reverse-engineering the tower: for a MINUS tower to land on a whole number $m$, the number inside must be $m^2 + m$, and $7^2 + 7 = 49 + 7 = 56$ ✓ — exactly the printed number. Notice the plus form needs $m^2 - m$ and the minus form needs $m^2 + m$; the sign inside flips which pattern applies. (The choice $-8$ is KEEPING THE NEGATIVE ROOT ✗; the choice $8$ is ANSWERING WITH THE OTHER FORM OF THE TOWER, the value of the all-plus $\\sqrt{56 + \\sqrt{56 + \\cdots}}$ ✗; the choice $2\\sqrt{14} \\approx 7.48$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{56}$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{72 - \\sqrt{72 - \\sqrt{72 - \\cdots}}}$ (note the minus signs).',
      choices: ['$-9$', '$9$', '$8$', '$6\\sqrt{2}$'],
      answer: 2,
      solution:
        'Let $x$ be the tower, so $x = \\sqrt{72 - x}$ and squaring gives $x^2 + x - 72 = 0$, or $(x + 9)(x - 8) = 0$. Keeping the positive root gives $x = 8$ ✓, and the loop closes: $\\sqrt{72 - 8} = \\sqrt{64} = 8$ ✓. Check a second, independent way by climbing from a seed of $0$: $\\sqrt{72} \\approx 8.485$, then $\\sqrt{72 - 8.485} \\approx 7.970$, then $\\approx 8.002$, then $\\approx 8.0000$ ✓ — squeezing onto $8$ from alternating sides. (The choice $-9$ is KEEPING THE NEGATIVE ROOT ✗; the choice $9$ is ANSWERING WITH THE OTHER FORM OF THE TOWER, since $\\sqrt{72 + \\sqrt{72 + \\cdots}} = 9$ but $\\sqrt{72 - 9} = \\sqrt{63} \\ne 9$ ✗; the choice $6\\sqrt{2} \\approx 8.49$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{72}$ ✗.)',
    },
  ],
  // s2 — continued fractions again, with bigger whole-number starts.
  [
    {
      q: 'Evaluate $9 + \\frac{1}{9 + \\frac{1}{9 + \\cdots}}$.',
      choices: ['$\\frac{9 - \\sqrt{85}}{2}$', '$\\frac{82}{9}$', '$\\frac{9 + \\sqrt{85}}{2}$', '$\\frac{9 + \\sqrt{77}}{2}$'],
      answer: 2,
      solution:
        'Name the fraction $x$. The denominator after the first "$9 +$" is the whole fraction over again, so $x = 9 + \\frac{1}{x}$, giving $x^2 - 9x - 1 = 0$ and $x = \\frac{9 \\pm \\sqrt{81 + 4}}{2} = \\frac{9 \\pm \\sqrt{85}}{2}$. The expression is bigger than $9$, so $x = \\frac{9 + \\sqrt{85}}{2} \\approx 9.1098$ ✓. Check a second, independent way with the reciprocal relation $x(x - 9) = 1$ that the equation forces: $x - 9 = \\frac{\\sqrt{85} - 9}{2} \\approx 0.1098$, and $\\frac{9 + \\sqrt{85}}{2} \\cdot \\frac{\\sqrt{85} - 9}{2} = \\frac{85 - 81}{4} = 1$ ✓ exactly. (The choice $\\frac{9 - \\sqrt{85}}{2} \\approx -0.11$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\frac{82}{9} \\approx 9.1111$ is TRUNCATING THE FRACTION EARLY at $9 + \\frac{1}{9}$, which is rational while the true value is not; the choice $\\frac{9 + \\sqrt{77}}{2} \\approx 8.89$ is LOSING THE $4$ IN THE DISCRIMINANT, $81 + 1$ instead of $81 + 4$ — and it is less than $9$, which the fraction can never be ✗.)',
    },
    {
      q: 'Evaluate $10 + \\frac{1}{10 + \\frac{1}{10 + \\cdots}}$.',
      choices: ['$5 - \\sqrt{26}$', '$\\frac{101}{10}$', '$5 + 2\\sqrt{6}$', '$5 + \\sqrt{26}$'],
      answer: 3,
      solution:
        'Let $x$ be the fraction, so $x = 10 + \\frac{1}{x}$ and $x^2 - 10x - 1 = 0$. The quadratic formula gives $x = \\frac{10 \\pm \\sqrt{100 + 4}}{2} = \\frac{10 \\pm 2\\sqrt{26}}{2} = 5 \\pm \\sqrt{26}$, and the value exceeds $10$, so $x = 5 + \\sqrt{26} \\approx 10.0990$ ✓. Check a second, independent way through the reciprocal relation $x(x - 10) = 1$: $x - 10 = \\sqrt{26} - 5 \\approx 0.0990$, and $\\left(5 + \\sqrt{26}\\right)\\left(\\sqrt{26} - 5\\right) = 26 - 25 = 1$ ✓. (The choice $5 - \\sqrt{26} \\approx -0.10$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\frac{101}{10} = 10.1$ is TRUNCATING THE FRACTION EARLY at $10 + \\frac{1}{10}$; the choice $5 + 2\\sqrt{6} \\approx 9.90$ is LOSING THE $4$ IN THE DISCRIMINANT, using $100 + 1$ where $100 + 4$ belongs ✗.)',
    },
    {
      q: 'Evaluate $11 + \\frac{1}{11 + \\frac{1}{11 + \\cdots}}$.',
      choices: ['$\\frac{11 + 5\\sqrt{5}}{2}$', '$\\frac{11 - 5\\sqrt{5}}{2}$', '$\\frac{122}{11}$', '$\\frac{11 + 3\\sqrt{13}}{2}$'],
      answer: 0,
      solution:
        'Call the fraction $x$. Self-similarity gives $x = 11 + \\frac{1}{x}$, so $x^2 - 11x - 1 = 0$ and $x = \\frac{11 \\pm \\sqrt{121 + 4}}{2} = \\frac{11 \\pm \\sqrt{125}}{2} = \\frac{11 \\pm 5\\sqrt{5}}{2}$. The expression is bigger than $11$, so $x = \\frac{11 + 5\\sqrt{5}}{2} \\approx 11.0902$ ✓. Check a second, independent way with the reciprocal relation $x(x - 11) = 1$: $x - 11 = \\frac{5\\sqrt{5} - 11}{2} \\approx 0.0902$, and $\\frac{11 + 5\\sqrt{5}}{2} \\cdot \\frac{5\\sqrt{5} - 11}{2} = \\frac{125 - 121}{4} = 1$ ✓ exactly. (The choice $\\frac{11 - 5\\sqrt{5}}{2} \\approx -0.09$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\frac{122}{11} \\approx 11.0909$ is TRUNCATING THE FRACTION EARLY at $11 + \\frac{1}{11}$; the choice $\\frac{11 + 3\\sqrt{13}}{2} \\approx 10.91$ is LOSING THE $4$ IN THE DISCRIMINANT, $121 + 1$ instead of $121 + 4$ ✗.)',
    },
  ],
  // s2 — run it backwards: the VALUE is given, solve for the number inside.
  [
    {
      q: 'For what value of $k$ does $\\sqrt{k + \\sqrt{k + \\sqrt{k + \\cdots}}} = 14$?',
      choices: ['$196$', '$14$', '$168$', '$182$'],
      answer: 3,
      solution:
        'The self-similar equation is $x = \\sqrt{k + x}$, and here the whole tower is $x = 14$ — including the copy hiding under the outer radical. Squaring gives $196 = k + 14$, so $k = 182$ ✓. Check a second, independent way by solving the tower forward with $k = 182$: $x^2 - x - 182 = 0$ factors as $(x - 14)(x + 13) = 0$, and the positive root is $14$ ✓, confirmed by $\\sqrt{182 + 14} = \\sqrt{196} = 14$ ✓. (The choice $196$ is FORGETTING THE HIDDEN COPY OF $x$, reading the equation as $196 = k$ — but then $\\sqrt{196 + 14} = \\sqrt{210} \\approx 14.49 \\ne 14$ ✗; the choice $14$ is REPORTING THE VALUE INSTEAD OF THE NUMBER INSIDE; the choice $168$ is COUNTING THE HIDDEN COPY TWICE, subtracting $14$ once for each visible radical ✗.)',
    },
    {
      q: 'For what value of $k$ does $\\sqrt{k + \\sqrt{k + \\sqrt{k + \\cdots}}} = 15$?',
      choices: ['$210$', '$225$', '$15$', '$195$'],
      answer: 0,
      solution:
        'Write the self-similar equation $x = \\sqrt{k + x}$ and substitute the known value $x = 15$: squaring gives $225 = k + 15$, so $k = 210$ ✓. Check a second, independent way by running the tower forward from $k = 210$: $x^2 - x - 210 = 0$, or $(x - 15)(x + 14) = 0$, whose positive root is $15$ ✓ — and directly, $\\sqrt{210 + 15} = \\sqrt{225} = 15$ ✓. In general the number inside must be $m^2 - m$ for the tower to equal $m$. (The choice $225$ is FORGETTING THE HIDDEN COPY OF $x$, since $\\sqrt{225 + 15} = \\sqrt{240} \\approx 15.49 \\ne 15$ ✗; the choice $15$ is REPORTING THE VALUE INSTEAD OF THE NUMBER INSIDE; the choice $195$ is COUNTING THE HIDDEN COPY TWICE, $225 - 15 - 15$ ✗.)',
    },
    {
      q: 'For what value of $k$ does $\\sqrt{k + \\sqrt{k + \\sqrt{k + \\cdots}}} = 16$?',
      choices: ['$256$', '$240$', '$16$', '$224$'],
      answer: 1,
      solution:
        'From $x = \\sqrt{k + x}$ with $x = 16$, squaring gives $256 = k + 16$, so $k = 240$ ✓. Check a second, independent way by climbing the tower numerically with $k = 240$: $\\sqrt{240} \\approx 15.492$, then $\\sqrt{240 + 15.492} \\approx 15.984$, then $\\approx 15.9995$, then $\\approx 16.0000$ ✓ — the partial towers land on $16$, as required. (The choice $256$ is FORGETTING THE HIDDEN COPY OF $x$; it makes the tower $\\sqrt{256 + 16} = \\sqrt{272} \\approx 16.49$, which overshoots ✗; the choice $16$ is REPORTING THE VALUE INSTEAD OF THE NUMBER INSIDE; the choice $224$ is COUNTING THE HIDDEN COPY TWICE, $256 - 32$ ✗.)',
    },
  ],
  // s2 — the MULTIPLYING tower, where the value climbs all the way to the number inside.
  [
    {
      q: 'Evaluate $\\sqrt{18\\sqrt{18\\sqrt{18\\cdots}}}$ (each radical MULTIPLIES the next).',
      choices: ['$3\\sqrt{2}$', '$18$', '$0$', '$324$'],
      answer: 1,
      solution:
        'Name the whole expression $x$. Inside the first radical sits $18$ TIMES a copy of $x$, so $x = \\sqrt{18x}$, and squaring gives $x^2 = 18x$, so $x(x - 18) = 0$. The expression is a positive number, so $x = 18$ ✓, and the loop closes: $\\sqrt{18 \\cdot 18} = 18$ ✓. Check a second, independent way by counting EXPONENTS instead of solving anything: the first $18$ is under one radical, the second under two, the third under three, so the expression is $18^{\\frac{1}{2}} \\cdot 18^{\\frac{1}{4}} \\cdot 18^{\\frac{1}{8}} \\cdots = 18^{\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots} = 18^1 = 18$ ✓, since those halves add to exactly $1$. (The choice $3\\sqrt{2}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{18} \\approx 4.24$; the choice $0$ is KEEPING THE ROOT $x = 0$, which the factored equation offers but an expression built from $18$s can never equal ✗; the choice $324$ is REPORTING $x^2$ INSTEAD OF $x$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{25\\sqrt{25\\sqrt{25\\cdots}}}$ (each radical MULTIPLIES the next).',
      choices: ['$5$', '$0$', '$625$', '$25$'],
      answer: 3,
      solution:
        'Let $x$ be the expression. The contents of the outer radical are $25$ times another copy of the whole expression, so $x = \\sqrt{25x}$ and $x^2 = 25x$, giving $x(x - 25) = 0$. The expression is positive, so $x = 25$ ✓; substituting back, $\\sqrt{25 \\cdot 25} = \\sqrt{625} = 25$ ✓. Check a second, independent way by adding exponents: $25^{\\frac{1}{2}} \\cdot 25^{\\frac{1}{4}} \\cdot 25^{\\frac{1}{8}} \\cdots = 25^{\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots} = 25^1 = 25$ ✓ — multiplying inside pushes the value all the way up to the number itself. (The choice $5$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{25}$ — tempting, because $5$ looks like the natural answer for a $25$ ✗; the choice $0$ is KEEPING THE ROOT $x = 0$ ✗; the choice $625$ is REPORTING $x^2$ INSTEAD OF $x$ ✗.)',
    },
    {
      q: 'Evaluate $\\sqrt{40\\sqrt{40\\sqrt{40\\cdots}}}$ (each radical MULTIPLIES the next).',
      choices: ['$2\\sqrt{10}$', '$0$', '$40$', '$1600$'],
      answer: 2,
      solution:
        'Call the expression $x$. Self-similarity gives $x = \\sqrt{40x}$, so $x^2 = 40x$ and $x(x - 40) = 0$; the expression is positive, so $x = 40$ ✓, confirmed by $\\sqrt{40 \\cdot 40} = 40$ ✓. Check a second, independent way with exponents: the $n$th copy of $40$ sits under $n$ radicals, contributing $40^{1/2^n}$, and $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 1$, so the product is $40^1 = 40$ ✓. This is the sharp contrast with the ADDING tower: $\\sqrt{40 + \\sqrt{40 + \\cdots}} \\approx 6.84$, while the multiplying version reaches $40$. (The choice $2\\sqrt{10}$ is STOPPING AT A SINGLE RADICAL, $\\sqrt{40} \\approx 6.32$; the choice $0$ is KEEPING THE ROOT $x = 0$ ✗; the choice $1600$ is REPORTING $x^2$ INSTEAD OF $x$ ✗.)',
    },
  ],
  // s2 — numerator $1$ over the whole continued fraction: the answer is small and positive.
  [
    {
      q: 'Evaluate $\\frac{1}{4 + \\frac{1}{4 + \\frac{1}{4 + \\cdots}}}$ (the whole expression is a fraction with numerator $1$).',
      choices: ['$\\sqrt{5} + 2$', '$\\sqrt{5} - 2$', '$\\frac{4}{17}$', '$-2 - \\sqrt{5}$'],
      answer: 1,
      solution:
        'Call the whole expression $x$. The denominator is $4$ plus a copy of $x$ itself, so $x = \\frac{1}{4 + x}$. Multiplying out gives $x^2 + 4x - 1 = 0$, so $x = \\frac{-4 \\pm \\sqrt{16 + 4}}{2} = \\frac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}$. The expression is a positive number less than $1$, so $x = \\sqrt{5} - 2 \\approx 0.2361$ ✓. Check a second, independent way by flipping the equation: $x = \\frac{1}{4 + x}$ says $\\frac{1}{x} = 4 + x$, so the reciprocal of the answer must be exactly $4$ more than the answer. Rationalizing, $\\frac{1}{\\sqrt{5} - 2} = \\frac{\\sqrt{5} + 2}{5 - 4} = \\sqrt{5} + 2$, and $\\left(\\sqrt{5} + 2\\right) - \\left(\\sqrt{5} - 2\\right) = 4$ ✓ exactly. (The choice $\\sqrt{5} + 2 \\approx 4.236$ is REPORTING THE RECIPROCAL — it is the value of the DENOMINATOR $4 + x$, not of the fraction ✗; the choice $\\frac{4}{17} \\approx 0.2353$ is TRUNCATING THE FRACTION EARLY at $\\frac{1}{4 + \\frac{1}{4}}$; the choice $-2 - \\sqrt{5}$ is KEEPING THE NEGATIVE ROOT ✗.)',
    },
    {
      q: 'Evaluate $\\frac{1}{5 + \\frac{1}{5 + \\frac{1}{5 + \\cdots}}}$ (the whole expression is a fraction with numerator $1$).',
      choices: ['$\\frac{5 + \\sqrt{29}}{2}$', '$\\frac{5}{26}$', '$\\frac{-5 + \\sqrt{29}}{2}$', '$\\frac{-5 - \\sqrt{29}}{2}$'],
      answer: 2,
      solution:
        'Let $x$ be the whole expression. Its denominator is $5$ plus another copy of $x$, so $x = \\frac{1}{5 + x}$, which becomes $x^2 + 5x - 1 = 0$ and gives $x = \\frac{-5 \\pm \\sqrt{25 + 4}}{2} = \\frac{-5 \\pm \\sqrt{29}}{2}$. The expression is positive, so $x = \\frac{-5 + \\sqrt{29}}{2} \\approx 0.1926$ ✓. Check a second, independent way by climbing the fraction from a seed of $0$: $\\frac{1}{5} = 0.2$, then $\\frac{1}{5.2} \\approx 0.19231$, then $\\frac{1}{5.19231} \\approx 0.19259$, then $\\approx 0.19258$ ✓ — settling exactly where the algebra put it. (The choice $\\frac{5 + \\sqrt{29}}{2} \\approx 5.19$ is REPORTING THE RECIPROCAL, the value of the denominator $5 + x$ rather than the fraction ✗; the choice $\\frac{5}{26} \\approx 0.19231$ is TRUNCATING THE FRACTION EARLY at $\\frac{1}{5 + \\frac{1}{5}}$; the choice $\\frac{-5 - \\sqrt{29}}{2} \\approx -5.19$ is KEEPING THE NEGATIVE ROOT ✗.)',
    },
    {
      q: 'Evaluate $\\frac{1}{6 + \\frac{1}{6 + \\frac{1}{6 + \\cdots}}}$ (the whole expression is a fraction with numerator $1$).',
      choices: ['$\\sqrt{10} - 3$', '$\\sqrt{10} + 3$', '$-3 - \\sqrt{10}$', '$\\frac{6}{37}$'],
      answer: 0,
      solution:
        'Name the whole expression $x$. The denominator is $6$ plus a copy of $x$, so $x = \\frac{1}{6 + x}$, hence $x^2 + 6x - 1 = 0$ and $x = \\frac{-6 \\pm \\sqrt{36 + 4}}{2} = \\frac{-6 \\pm 2\\sqrt{10}}{2} = -3 \\pm \\sqrt{10}$. A fraction with a positive numerator and a positive denominator is positive, so $x = \\sqrt{10} - 3 \\approx 0.1623$ ✓. Check a second, independent way by flipping: $x = \\frac{1}{6 + x}$ means $\\frac{1}{x} = 6 + x$, so the reciprocal should exceed the value by exactly $6$. Rationalizing, $\\frac{1}{\\sqrt{10} - 3} = \\frac{\\sqrt{10} + 3}{10 - 9} = \\sqrt{10} + 3 \\approx 6.1623$, and $6.1623 - 0.1623 = 6$ ✓ exactly. (The choice $\\sqrt{10} + 3$ is REPORTING THE RECIPROCAL, the value of the denominator ✗; the choice $-3 - \\sqrt{10}$ is KEEPING THE NEGATIVE ROOT ✗; the choice $\\frac{6}{37} \\approx 0.16216$ is TRUNCATING THE FRACTION EARLY at $\\frac{1}{6 + \\frac{1}{6}}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 22,
  sections: {
    '22.2': s222,
  },
}
