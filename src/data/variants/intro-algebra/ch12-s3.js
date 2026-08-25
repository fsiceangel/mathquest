// Introduction to Algebra chapter 12 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way: a quotient is multiplied back against its divisor, a root is
//    substituted into the original equation, a squared complex number is checked
//    against its magnitude, and a reduced power of $i$ is rebuilt from $i^4 = 1$
//    instead of from the remainder.
//  - No check is ever run at a value where the expression collapses to zero — a
//    wrong answer passes that test just as easily as a right one.
//  - These are the chapter's hard problems, so a variation stays hard: the big
//    exponents stay big, the divisions still need a conjugate AND a reduction,
//    and the multi-step arithmetic keeps its double negatives.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: READING THE CYCLE
//    ONE STEP OFF, USING $\sqrt{a}\sqrt{b} = \sqrt{ab}$ ON TWO NEGATIVES,
//    REPLACING $i^2$ WITH $+1$, LOSING THE MINUS ON THE SECOND PART OF A
//    BRACKET, and STOPPING BEFORE THE FINAL DIVISION.
//  - No two choices inside an item name the same number or the same value.

const challenge = [
  // c1 — a huge power of $i$. The cycle has period 4, so only the remainder
  // matters. One version reverses the question and hands back the value, and one
  // adds two neighbouring powers so the reduction has to happen twice.
  [
    {
      q: 'What is $i^{2027}$?',
      choices: ['$1$', '$i$', '$-1$', '$-i$'],
      answer: 3,
      solution:
        'Powers of $i$ march around a circle of four: $i, -1, -i, 1$, then start over. So divide the exponent by $4$ and keep the remainder. Since $2027 = 4 \\times 506 + 3$, the remainder is $3$, and $i^{2027} = i^3 = -i$. Check a different way, without any division: $i^{2028} = (i^4)^{507} = 1$, so $i^{2027}$ is whatever you multiply by $i$ to get $1$ — and $(-i)(i) = -i^2 = 1$ ✓. (The choice $i$ treats the cycle as though it had period $2$, so that every odd exponent gives $i$; the choice $-1$ reduces correctly to $i^3$ but then evaluates it as $i^2$, stopping one factor early; the choice $1$ rounds the exponent UP to the nearest multiple of $4$, which is $2028$, a different power altogether.)',
    },
    {
      q: 'Which one of these powers of $i$ is equal to $-i$?',
      choices: ['$i^{38}$', '$i^{51}$', '$i^{64}$', '$i^{45}$'],
      answer: 1,
      solution:
        'The value of $i^n$ depends only on the remainder when $n$ is divided by $4$: remainder $1$ gives $i$, remainder $2$ gives $-1$, remainder $3$ gives $-i$, and remainder $0$ gives $1$. We want remainder $3$. Since $51 = 4 \\times 12 + 3$, the winner is $i^{51}$. Check it from the other side: $i^{52} = (i^4)^{13} = 1$, so $i^{51} = i^{52} \\div i = 1 \\div i = -i$ ✓ (because $(-i)(i) = 1$). (The choice $i^{38}$ has remainder $2$, which lands on $-1$ — one step earlier in the cycle; the choice $i^{64}$ has remainder $0$, since $64 = 4 \\times 16$, so it is $1$; the choice $i^{45}$ has remainder $1$, so it is $i$, the value directly opposite $-i$.)',
    },
    {
      q: 'Compute $i^{2025} + i^{2026}$.',
      choices: ['$1 + i$', '$-1 - i$', '$-1 + i$', '$-i$'],
      answer: 2,
      solution:
        'Reduce each power on its own. Since $2024 = 4 \\times 506$, we get $2025 = 4 \\times 506 + 1$ and $2026 = 4 \\times 506 + 2$, so $i^{2025} = i^1 = i$ and $i^{2026} = i^2 = -1$. The sum is $-1 + i$. Check by building up instead of reducing: $i^{2024} = (i^4)^{506} = 1$, so $i^{2025} = 1 \\cdot i = i$ and $i^{2026} = i \\cdot i = -1$ ✓ — same two values, reached without dividing anything. (The choice $1 + i$ reads $i^{2026}$ as $1$, using remainder $0$ instead of $2$; the choice $-1 - i$ reads $i^{2025}$ as $-i$, using remainder $3$ instead of $1$; the choice $-i$ comes from ADDING the exponents instead of the powers, giving $i^{4051}$, and $4051 = 4 \\times 1012 + 3$ really does give $-i$ — but adding two numbers is not the same as multiplying them.)',
    },
  ],
  // c2 — the $\sqrt{-a}\sqrt{-b}$ trap. Convert to $i$ FIRST; the shortcut
  // $\sqrt{a}\sqrt{b} = \sqrt{ab}$ is only legal for nonnegative numbers. One
  // version runs the trap backwards to recover a missing number.
  [
    {
      q: 'Compute $\\sqrt{-16} \\cdot \\sqrt{-25} + \\sqrt{-36}$.',
      choices: ['$20 + 6i$', '$-20 + 6i$', '$-26$', '$-14$'],
      answer: 1,
      solution:
        'Convert every root to an $i$ form BEFORE doing anything else: $\\sqrt{-16} = 4i$, $\\sqrt{-25} = 5i$, and $\\sqrt{-36} = 6i$. The product is $(4i)(5i) = 20i^2 = -20$, so the whole expression is $-20 + 6i$. Check the product a second way, by regrouping: $(4i)(5i) = 4 \\cdot (i \\cdot 5) \\cdot i = 20i \\cdot i = 20i^2 = -20$ ✓, and the real $-20$ and the imaginary $6i$ can never be combined. (The choice $20 + 6i$ uses the shortcut $\\sqrt{-16}\\sqrt{-25} = \\sqrt{400} = 20$, which is exactly the move that is illegal when BOTH numbers are negative; the choice $-26$ reads $\\sqrt{-36}$ as the real number $-6$ instead of $6i$; the choice $-14$ merges $-20$ and $6i$ into one number, but a real part and an imaginary part stay in their own lanes.)',
    },
    {
      q: 'A positive number $k$ satisfies $\\sqrt{-k} \\cdot \\sqrt{-4} = -14$. What is $k$?',
      choices: ['$196$', '$-49$', '$7$', '$49$'],
      answer: 3,
      solution:
        'Write both roots the safe way: $\\sqrt{-k} = i\\sqrt{k}$ and $\\sqrt{-4} = 2i$. Their product is $2i^2\\sqrt{k} = -2\\sqrt{k}$, so $-2\\sqrt{k} = -14$, giving $\\sqrt{k} = 7$ and $k = 49$. Check forward with the actual numbers: $\\sqrt{-49} \\cdot \\sqrt{-4} = (7i)(2i) = 14i^2 = -14$ ✓. (The choice $7$ stops at $\\sqrt{k}$ and forgets the last squaring step; the choice $196$ drops the $2$ that comes from $\\sqrt{-4} = 2i$ and solves $\\sqrt{k} = 14$; the choice $-49$ assumes the minus sign in $-14$ means $k$ itself must be negative — but the minus comes from $i^2$, and the problem already said $k$ is positive.)',
    },
    {
      q: 'Compute $\\sqrt{-3} \\cdot \\sqrt{-27}$.',
      choices: ['$-9$', '$9$', '$9i$', '$4i\\sqrt{3}$'],
      answer: 0,
      solution:
        'Convert first: $\\sqrt{-3} = i\\sqrt{3}$ and $\\sqrt{-27} = 3i\\sqrt{3}$, since $\\sqrt{27} = 3\\sqrt{3}$. Multiply: $(i\\sqrt{3})(3i\\sqrt{3}) = 3i^2(\\sqrt{3} \\cdot \\sqrt{3}) = 3(-1)(3) = -9$. Check with decimals: $\\sqrt{3} \\approx 1.732$, so the two roots are about $1.732i$ and $5.196i$, and $1.732 \\times 5.196 \\approx 9$, times $i^2$, gives about $-9$ ✓. (The choice $9$ uses $\\sqrt{-3}\\sqrt{-27} = \\sqrt{81} = 9$, the shortcut that breaks when both numbers under the roots are negative — it misses the sign by a full flip; the choice $9i$ gives an $i$ to only one of the two roots, computing $\\sqrt{3} \\cdot 3i\\sqrt{3}$; the choice $4i\\sqrt{3}$ ADDS the two roots, $i\\sqrt{3} + 3i\\sqrt{3}$, instead of multiplying them.)',
    },
  ],
  // c3 — squaring a complex number. The middle term is TWO copies of the
  // product, and $i^2$ must become $-1$. One version reverses the question and
  // asks which number makes the square pure imaginary; one uses the difference
  // of two squares so it can be checked by factoring.
  [
    {
      q: 'Compute $(3 - i)^2$.',
      choices: ['$8$', '$10 - 6i$', '$8 - 6i$', '$8 + 6i$'],
      answer: 2,
      solution:
        'Expand like any binomial square: $(3-i)^2 = 9 - 6i + i^2$, and $i^2 = -1$, so this is $9 - 1 - 6i = 8 - 6i$. Check with magnitudes, which is a completely different tool: $|3 - i| = \\sqrt{9 + 1} = \\sqrt{10}$, so the square must have magnitude $10$ — and $|8 - 6i| = \\sqrt{64 + 36} = \\sqrt{100} = 10$ ✓. (The choice $10 - 6i$ replaces $i^2$ with $+1$ instead of $-1$; the choice $8 + 6i$ flips the middle sign, but $-2 \\cdot 3 \\cdot 1$ is negative; the choice $8$ squares the two pieces separately, $3^2 + (-i)^2 = 9 - 1$, and drops the middle term entirely.)',
    },
    {
      q: 'For which positive real number $b$ is $(2 + bi)^2$ a pure imaginary number, with no real part at all?',
      choices: ['$4$', '$0$', '$2$', '$\\sqrt{2}$'],
      answer: 2,
      solution:
        'Expand in general: $(2 + bi)^2 = 4 + 4bi + b^2i^2 = (4 - b^2) + 4bi$. The real part is $4 - b^2$, and we want it to vanish, so $b^2 = 4$ and the positive answer is $b = 2$. Check forward: $(2 + 2i)^2 = 4 + 8i + 4i^2 = 8i$, which is pure imaginary ✓. Check that a rival really fails: $b = \\sqrt{2}$ gives $(2 + \\sqrt{2}i)^2 = 4 + 4\\sqrt{2}i - 2 = 2 + 4\\sqrt{2}i$, whose real part is $2$, not $0$ ✗. (The choice $4$ treats the real part as $4 - b$ and forgets that $b$ gets squared; the choice $\\sqrt{2}$ forgets that the $2$ gets squared too, solving $2 - b^2 = 0$; the choice $0$ kills the imaginary part instead of the real part — $(2 + 0i)^2 = 4$ is as real as a number can be.)',
    },
    {
      q: 'Compute $(2 + 3i)^2 - (2 - 3i)^2$.',
      choices: ['$0$', '$24i$', '$-24i$', '$-10$'],
      answer: 1,
      solution:
        'Square each piece: $(2+3i)^2 = 4 + 12i + 9i^2 = -5 + 12i$, and $(2-3i)^2 = 4 - 12i + 9i^2 = -5 - 12i$. Subtracting, the $-5$ parts cancel and the imaginary parts pile up: $12i - (-12i) = 24i$. Check by factoring instead of squaring, which never touches $i^2$ at all: $A^2 - B^2 = (A+B)(A-B)$, and here $A + B = 4$ while $A - B = 6i$, so the answer is $4 \\cdot 6i = 24i$ ✓. (The choice $0$ assumes that conjugates always have equal squares — only their MAGNITUDES match, not the numbers themselves; the choice $-24i$ subtracts in the wrong order, computing $B^2 - A^2$; the choice $-10$ adds the two squares instead of subtracting them, which gives $-5 + (-5)$.)',
    },
  ],
  // c4 — subtraction, where the minus sign has to reach BOTH parts of the
  // bracket. One version reverses the question and asks what was subtracted; one
  // stacks a second subtraction with a double negative in it.
  [
    {
      q: 'Compute $(4 - 7i) - (9 - 3i)$.',
      choices: ['$-5 - 10i$', '$5 - 4i$', '$-5 + 4i$', '$-5 - 4i$'],
      answer: 3,
      solution:
        'Take the parts one at a time. Real: $4 - 9 = -5$. Imaginary: $-7 - (-3) = -7 + 3 = -4$. So the answer is $-5 - 4i$. Check by undoing the subtraction — if the answer is right, adding $9 - 3i$ back must return the number we started with: $(-5 - 4i) + (9 - 3i) = 4 - 7i$ ✓. (The choice $-5 - 10i$ adds the imaginary parts, $-7 + (-3)$, because the minus never reached the $-3i$; the choice $-5 + 4i$ subtracts the imaginary parts in the wrong order, computing $-3 - (-7)$; the choice $5 - 4i$ does the same reversal on the real part, computing $9 - 4$.)',
    },
    {
      q: 'What complex number must be subtracted from $3 + 2i$ to give $8 - 5i$?',
      choices: ['$5 - 7i$', '$-5 + 7i$', '$11 - 3i$', '$-5 - 3i$'],
      answer: 1,
      solution:
        'Call the mystery number $a + bi$. Then $(3 + 2i) - (a + bi) = 8 - 5i$, and the two parts give two little equations: $3 - a = 8$, so $a = -5$; and $2 - b = -5$, so $b = 7$. The number is $-5 + 7i$. Check forward, the way the problem describes: $(3 + 2i) - (-5 + 7i) = (3 + 5) + (2 - 7)i = 8 - 5i$ ✓. (The choice $5 - 7i$ subtracts in the wrong order, computing $(8 - 5i) - (3 + 2i)$; the choice $11 - 3i$ ADDS the two given numbers instead of subtracting; the choice $-5 - 3i$ gets the real part right but then loses the minus in front of $-5i$, computing $2 + (-5) = -3$ for the imaginary part.)',
    },
    {
      q: 'Compute $(6 - i) - (2 + 4i) - (-3 - 5i)$.',
      choices: ['$1 - 10i$', '$7 + 8i$', '$7 - 10i$', '$7$'],
      answer: 3,
      solution:
        'Every minus in front of a bracket flips BOTH parts inside it. Real parts: $6 - 2 - (-3) = 6 - 2 + 3 = 7$. Imaginary parts: $-1 - 4 - (-5) = -1 - 4 + 5 = 0$. The imaginary part vanishes, so the answer is the real number $7$. Check by regrouping, which is a different route: $A - B - C = A - (B + C)$, and $B + C = (2 + 4i) + (-3 - 5i) = -1 - i$, so the whole thing is $(6 - i) - (-1 - i) = 7 + 0i = 7$ ✓. (The choice $1 - 10i$ treats the last bracket as though it were being ADDED, so nothing in it flips; the choice $7 - 10i$ flips the $-3$ but not the $-5i$, losing the minus on the second part only; the choice $7 + 8i$ lets the minus in front of $(2 + 4i)$ reach only the $2$, so the $4i$ comes in as $+4i$.)',
    },
  ],
  // c5 — a number times its conjugate. The cross terms cancel and $-b^2i^2$
  // turns into $+b^2$, so the answer is the real number $a^2 + b^2$. One version
  // runs the identity backwards; one chains two conjugate pairs together.
  [
    {
      q: 'Compute $(5 + 2i)(5 - 2i)$.',
      choices: ['$29$', '$21$', '$25 - 4i$', '$\\sqrt{29}$'],
      answer: 0,
      solution:
        'Conjugates multiply to $a^2 + b^2$, so this is $5^2 + 2^2 = 25 + 4 = 29$. Check by expanding every term instead of using the shortcut: $25 - 10i + 10i - 4i^2 = 25 + 4 = 29$ ✓ — the middle terms cancel, and $-4i^2$ ADDS four. (The choice $21$ computes $25 - 4$, which is what you get by replacing $i^2$ with $+1$; the choice $25 - 4i$ writes $-4i^2$ as $-4i$, forgetting that the $i$ is squared; the choice $\\sqrt{29}$ is the distance $|5 + 2i|$ from zero — the product is that distance SQUARED, not the distance itself.)',
    },
    {
      q: 'A positive real number $a$ satisfies $(a + 5i)(a - 5i) = 89$. What is $a$?',
      choices: ['$64$', '$\\sqrt{114}$', '$8$', '$\\sqrt{89}$'],
      answer: 2,
      solution:
        'The product of a conjugate pair is $a^2 + b^2$, so $a^2 + 25 = 89$, giving $a^2 = 64$ and $a = 8$ (the problem asks for the positive one). Check forward by expanding: $(8 + 5i)(8 - 5i) = 64 - 40i + 40i - 25i^2 = 64 + 25 = 89$ ✓. (The choice $64$ stops at $a^2$ and never takes the square root; the choice $\\sqrt{114}$ comes from writing the product as $a^2 - 25$, which is what happens if $i^2$ is replaced with $+1$; the choice $\\sqrt{89}$ is the distance $|a + 5i|$, which is the square root of the whole product — but the question asks only for the real part.)',
    },
    {
      q: 'Compute $(4 + i)(4 - i)(2 + 3i)(2 - 3i)$.',
      choices: ['$195$', '$221$', '$119$', '$30$'],
      answer: 1,
      solution:
        'Pair off the conjugates before multiplying anything else. The first pair gives $4^2 + 1^2 = 17$ and the second gives $2^2 + 3^2 = 13$, so the answer is $17 \\times 13 = 221$. Check each pair the long way: $(4+i)(4-i) = 16 - 4i + 4i - i^2 = 17$ ✓ and $(2+3i)(2-3i) = 4 - 6i + 6i - 9i^2 = 4 + 9 = 13$ ✓, and $17 \\times 13 = 221$ ✓. (The choice $195$ computes the first pair as $16 - 1 = 15$, replacing $i^2$ with $+1$; the choice $119$ uses $4 + 3 = 7$ for the second pair, forgetting to square the $3$; the choice $30$ ADDS the two pair values, $17 + 13$, instead of multiplying them.)',
    },
  ],
  // c6 — dividing by a pure imaginary number. Multiplying by $i$ clears the
  // bottom, and the sign flips on the way. One version reverses the question and
  // asks for a reciprocal directly.
  [
    {
      q: 'Write $\\dfrac{1}{2i}$ in the form $bi$.',
      choices: ['$-\\frac{1}{2}i$', '$\\frac{1}{2}i$', '$-2i$', '$-\\frac{1}{2}$'],
      answer: 0,
      solution:
        'Multiply top and bottom by $i$ to clear the imaginary part downstairs: $\\dfrac{1}{2i} \\cdot \\dfrac{i}{i} = \\dfrac{i}{2i^2} = \\dfrac{i}{-2} = -\\frac{1}{2}i$. Check by multiplying back, which is what a reciprocal has to do: $2i \\cdot \\left(-\\frac{1}{2}i\\right) = -i^2 = 1$ ✓. (The choice $\\frac{1}{2}i$ uses $\\frac{1}{i} = i$, losing the minus sign that $i^2 = -1$ puts there; the choice $-2i$ flips the sign correctly but multiplies by $2$ where it should divide; the choice $-\\frac{1}{2}$ drops the $i$ that landed on top, reading $\\frac{i}{-2}$ as $\\frac{1}{-2}$.)',
    },
    {
      q: 'Write $\\dfrac{3}{i^3}$ in the form $bi$.',
      choices: ['$-3i$', '$-3$', '$3i$', '$-\\frac{1}{3}i$'],
      answer: 2,
      solution:
        'First simplify the bottom: $i^3 = i^2 \\cdot i = -i$. So the fraction is $\\dfrac{3}{-i}$, and multiplying top and bottom by $i$ gives $\\dfrac{3i}{-i^2} = \\dfrac{3i}{1} = 3i$. Check by multiplying back: $3i \\cdot i^3 = 3i^4 = 3$ ✓, which is exactly the numerator we started with. (The choice $-3i$ reads $i^3$ as $i$, and $\\frac{3}{i}$ really is $-3i$ — the error is one step of the cycle, not the arithmetic; the choice $-3$ evaluates $i^3$ as $-1$, stopping at $i^2$ and dropping the last factor of $i$; the choice $-\\frac{1}{3}i$ is the reciprocal of the right answer, from flipping the fraction upside down.)',
    },
    {
      q: 'Which complex number is the reciprocal of $-4i$? (That is, which number multiplied by $-4i$ gives $1$?)',
      choices: ['$-\\frac{1}{4}i$', '$\\frac{1}{4}i$', '$4i$', '$-\\frac{1}{4}$'],
      answer: 1,
      solution:
        'The reciprocal is $\\dfrac{1}{-4i}$. Multiply top and bottom by $i$: $\\dfrac{i}{-4i^2} = \\dfrac{i}{4} = \\frac{1}{4}i$. Check by multiplying back: $(-4i)\\left(\\frac{1}{4}i\\right) = -i^2 = 1$ ✓. Notice the sign flipped — dividing by an imaginary number always flips it, because $i^2 = -1$. (The choice $-\\frac{1}{4}i$ keeps the minus sign from $-4i$ and misses that flip; multiplying it back gives $-1$, not $1$. The choice $4i$ flips the sign but forgets to take the reciprocal of the $4$; the choice $-\\frac{1}{4}$ drops the $i$ from the top, reading $\\frac{i}{-4}$ as $\\frac{1}{-4}$.)',
    },
  ],
  // c7 — sums around the cycle. Any four powers in a row add to zero, so a long
  // sum collapses to whatever is left over. One version states the fact in
  // general; one runs a long sum where the leftovers do not cancel.
  [
    {
      q: 'Compute $i^5 + i^6 + i^7 + i^8 + i^9$.',
      choices: ['$i$', '$0$', '$-1$', '$-i$'],
      answer: 0,
      solution:
        'List the five values: $i^5 = i$, $i^6 = -1$, $i^7 = -i$, $i^8 = 1$, $i^9 = i$. The first four cancel in pairs, leaving $i^9 = i$. Check by factoring instead of listing: the first four terms are $i^5 + i^6 + i^7 + i^8 = i^4(i + i^2 + i^3 + i^4) = 1 \\cdot 0 = 0$, and $i^9 = (i^4)^2 \\cdot i = i$ ✓. (The choice $0$ assumes all five terms cancel, but only a group of FOUR does — the fifth term is left standing; the choice $-1$ reads the cycle one step off, making the five values $-1, -i, 1, i, -1$, which really does total $-1$; the choice $-i$ comes from adding the exponents, $5 + 6 + 7 + 8 + 9 = 35$, and $i^{35} = i^3 = -i$ — but adding powers is not the same as multiplying them.)',
    },
    {
      q: 'For every positive integer $n$, what is the value of $i^n + i^{n+1} + i^{n+2} + i^{n+3}$?',
      choices: ['$4i^n$', '$-1$', '$0$', '$4$'],
      answer: 2,
      solution:
        'Factor out the common $i^n$: the sum is $i^n(1 + i + i^2 + i^3) = i^n(1 + i - 1 - i) = i^n \\cdot 0 = 0$. Four powers in a row are always one full trip around the cycle, and one full trip cancels itself out. Check at a specific exponent that separates the choices, say $n = 3$: the terms are $-i, 1, i, -1$, which total $0$ ✓ — while the rival answers would be $-4i$, $-1$, and $4$ there, all clearly different from what the terms add up to. (The choice $4i^n$ treats the four powers as four copies of the same term; the choice $-1$ MULTIPLIES the four values instead of adding, since $i \\cdot (-1) \\cdot (-i) \\cdot 1 = i^2 = -1$; the choice $4$ assumes each term contributes $1$ because $i^4 = 1$.)',
    },
    {
      q: 'Compute $i^1 + i^2 + i^3 + \\cdots + i^{30}$, the sum of the first thirty powers of $i$.',
      choices: ['$0$', '$1 + i$', '$-1 + i$', '$-1 - i$'],
      answer: 2,
      solution:
        'Chop the sum into groups of four, since each group adds to zero. The terms from $i^1$ to $i^{28}$ make seven complete groups, so they contribute nothing, and what is left is $i^{29} + i^{30}$. Now $29 = 4 \\times 7 + 1$ gives $i^{29} = i$, and $30 = 4 \\times 7 + 2$ gives $i^{30} = -1$. The sum is $-1 + i$. Check a completely different way, by counting how many terms take each value: the exponents leaving remainder $1$ are $1, 5, \\ldots, 29$ — eight of them, each worth $i$; remainder $2$ gives $2, 6, \\ldots, 30$ — eight terms worth $-1$; remainder $3$ gives seven terms worth $-i$; remainder $0$ gives seven terms worth $1$. Total: $8i - 8 - 7i + 7 = -1 + i$ ✓. (The choice $0$ assumes everything cancels and forgets that $30$ is not a multiple of $4$; the choice $1 + i$ reads $i^{30}$ as $1$, using remainder $0$ instead of $2$; the choice $-1 - i$ reads $i^{29}$ as $-i$, using remainder $3$ instead of $1$.)',
    },
  ],
  // c8 — division by a two-part complex number: conjugate on top and bottom,
  // then a real denominator, then the reduction that everybody forgets. One
  // version hides the divisor and asks for it back.
  [
    {
      q: 'Write $\\dfrac{10 + 5i}{2 - i}$ in the form $a + bi$.',
      choices: ['$3 + 4i$', '$5 + 4i$', '$15 + 20i$', '$3 + 20i$'],
      answer: 0,
      solution:
        'Multiply top and bottom by the conjugate of the bottom, $2 + i$. The bottom becomes $2^2 + 1^2 = 5$, a plain real number. The top becomes $(10 + 5i)(2 + i) = 20 + 10i + 10i + 5i^2 = 15 + 20i$. Now divide BOTH parts by $5$: the answer is $3 + 4i$. Check by multiplying back against the divisor: $(3 + 4i)(2 - i) = 6 - 3i + 8i - 4i^2 = 10 + 5i$ ✓, exactly the numerator we started with. (The choice $5 + 4i$ replaces $i^2$ with $+1$ in the top, turning $5i^2$ into $+5$ and making the numerator $25 + 20i$; the choice $15 + 20i$ stops before dividing by $5$; the choice $3 + 20i$ divides only the real part by $5$ and leaves the imaginary part alone.)',
    },
    {
      q: 'A complex number $z$ satisfies $\\dfrac{7 - i}{z} = 2 - i$. What is $z$?',
      choices: ['$13 - 9i$', '$15 + 5i$', '$3 + i$', '$3 + 5i$'],
      answer: 2,
      solution:
        'If a fraction equals $2 - i$, then $z = \\dfrac{7 - i}{2 - i}$ — the divisor and the answer trade places, just as they do with ordinary numbers. Multiply top and bottom by the conjugate $2 + i$: the bottom becomes $4 + 1 = 5$, and the top becomes $(7 - i)(2 + i) = 14 + 7i - 2i - i^2 = 15 + 5i$. Dividing by $5$ gives $z = 3 + i$. Check forward in the original equation: $(3 + i)(2 - i) = 6 - 3i + 2i - i^2 = 7 - i$ ✓, so dividing $7 - i$ by $3 + i$ does return $2 - i$. (The choice $13 - 9i$ multiplies the two given numbers instead of dividing, giving $(7-i)(2-i)$; the choice $15 + 5i$ stops before dividing by $5$; the choice $3 + 5i$ divides only the real part of $15 + 5i$ by $5$.)',
    },
    {
      q: 'Write $\\dfrac{7 + 9i}{2 - i}$ in the form $a + bi$.',
      choices: ['$5 + 25i$', '$23 + 11i$', '$1 + 25i$', '$1 + 5i$'],
      answer: 3,
      solution:
        'Multiply top and bottom by the conjugate $2 + i$. The bottom is $2^2 + 1^2 = 5$. The top is $(7 + 9i)(2 + i) = 14 + 7i + 18i + 9i^2 = 14 - 9 + 25i = 5 + 25i$. Divide both parts by $5$: the answer is $1 + 5i$. Check by multiplying back: $(1 + 5i)(2 - i) = 2 - i + 10i - 5i^2 = 2 + 5 + 9i = 7 + 9i$ ✓. (The choice $5 + 25i$ is the numerator with the final division forgotten; the choice $23 + 11i$ multiplies by $2 - i$ instead of dividing, computing $(7+9i)(2-i)$; the choice $1 + 25i$ divides the real part by $5$ but leaves the imaginary part untouched.)',
    },
  ],
  // c9 — a quadratic whose roots are complex. Complete the square, take the
  // imaginary square root, and remember to undo the shift. One version hands
  // back a root and asks for a coefficient; one hides a leading coefficient.
  [
    {
      q: 'Solve $x^2 - 10x + 29 = 0$.',
      choices: [
        '$x = 2i$ or $x = -2i$',
        '$x = -5 + 2i$ or $x = -5 - 2i$',
        '$x = 5 + 4i$ or $x = 5 - 4i$',
        '$x = 5 + 2i$ or $x = 5 - 2i$',
      ],
      answer: 3,
      solution:
        'Complete the square. Half of $-10$ is $-5$, and $(-5)^2 = 25$, so $x^2 - 10x + 25 = -29 + 25$, that is $(x - 5)^2 = -4$. A square equal to a negative is fine in the complex world: $x - 5 = 2i$ or $x - 5 = -2i$, so $x = 5 + 2i$ or $x = 5 - 2i$. Check the pair against the coefficients, which is a completely separate test: the two roots add to $10$ (matching $-(-10)$) and multiply to $(5+2i)(5-2i) = 25 + 4 = 29$ (matching the constant term) ✓. (The choice $x = 5 \\pm 4i$ never takes the square root of $4$; the choice $x = -5 \\pm 2i$ flips the sign while undoing the shift, but $x - 5 = 2i$ means ADDING $5$; the choice $x = \\pm 2i$ drops the shift altogether and answers the equation $x^2 = -4$ instead.)',
    },
    {
      q: 'One root of $x^2 + bx + c = 0$ is $4 + i$, and $b$ and $c$ are real numbers. What is $c$?',
      choices: ['$17$', '$15$', '$8$', '$\\sqrt{17}$'],
      answer: 0,
      solution:
        'When a quadratic has real coefficients, complex roots always arrive in conjugate pairs, so the other root is $4 - i$. The constant term is the product of the roots: $c = (4 + i)(4 - i) = 16 + 1 = 17$. Check by rebuilding the quadratic and testing the given root: the equation is $x^2 - 8x + 17 = 0$, and substituting $x = 4 + i$ gives $x^2 = 16 + 8i + i^2 = 15 + 8i$, so $15 + 8i - 8(4 + i) + 17 = 15 + 8i - 32 - 8i + 17 = 0$ ✓. (The choice $15$ multiplies the conjugates as $16 - 1$, replacing $i^2$ with $+1$; the choice $8$ reports the SUM of the roots, which is $-b$, not $c$; the choice $\\sqrt{17}$ is the distance $|4 + i|$, and the product of a conjugate pair is that distance squared.)',
    },
    {
      q: 'Solve $2x^2 + 4x + 10 = 0$.',
      choices: [
        '$x = -2 + i\\sqrt{6}$ or $x = -2 - i\\sqrt{6}$',
        '$x = -1 + 2i$ or $x = -1 - 2i$',
        '$x = 1 + 2i$ or $x = 1 - 2i$',
        '$x = -1 + 4i$ or $x = -1 - 4i$',
      ],
      answer: 1,
      solution:
        'Divide the whole equation by $2$ first, so the square can be completed: $x^2 + 2x + 5 = 0$. Half of $2$ is $1$, so $x^2 + 2x + 1 = -5 + 1$, that is $(x + 1)^2 = -4$. Then $x + 1 = \\pm 2i$ and $x = -1 \\pm 2i$. Check by substituting into the ORIGINAL equation: for $x = -1 + 2i$, $x^2 = 1 - 4i + 4i^2 = -3 - 4i$, so $2(-3 - 4i) + 4(-1 + 2i) + 10 = -6 - 8i - 4 + 8i + 10 = 0$ ✓. (The choice $x = -2 \\pm i\\sqrt{6}$ ignores the leading $2$ and completes the square on $x^2 + 4x + 10$ instead; the choice $x = 1 \\pm 2i$ flips the sign when undoing the shift; the choice $x = -1 \\pm 4i$ forgets to take the square root of $4$.)',
    },
  ],
  // c10 — the two quantities built from a conjugate pair that are always real:
  // the product $a^2 + b^2$ and the sum $2a$. One version runs both backwards
  // from the two real values; one squares the pair instead of multiplying it.
  [
    {
      q: 'Let $z = 5 - 2i$ and let $\\overline{z} = 5 + 2i$ be its conjugate. Compute $z \\cdot \\overline{z} - (z + \\overline{z})$.',
      choices: ['$39$', '$19$', '$11$', '$29$'],
      answer: 1,
      solution:
        'Both pieces come out real. The product is $z \\cdot \\overline{z} = 5^2 + 2^2 = 29$, and the sum is $z + \\overline{z} = 10$, since the $-2i$ and the $+2i$ cancel. So the answer is $29 - 10 = 19$. Check the product by expanding every term rather than using the formula: $(5 - 2i)(5 + 2i) = 25 + 10i - 10i - 4i^2 = 25 + 4 = 29$ ✓, and the sum by adding parts: $(5 + 5) + (-2 + 2)i = 10$ ✓. (The choice $39$ adds the two pieces instead of subtracting; the choice $11$ computes the product as $25 - 4 = 21$, replacing $i^2$ with $+1$, and then subtracts $10$; the choice $29$ reports the product alone and never subtracts the sum.)',
    },
    {
      q: 'A complex number $z = a + bi$ satisfies $z + \\overline{z} = 6$ and $z \\cdot \\overline{z} = 13$, where $b$ is positive. What is $z$?',
      choices: ['$6 + 2i$', '$2 + 3i$', '$3 + 4i$', '$3 + 2i$'],
      answer: 3,
      solution:
        'Adding a number to its conjugate doubles the real part: $z + \\overline{z} = 2a$, so $2a = 6$ and $a = 3$. Multiplying gives $z \\cdot \\overline{z} = a^2 + b^2$, so $9 + b^2 = 13$, giving $b^2 = 4$ and $b = 2$ (positive, as promised). So $z = 3 + 2i$. Check both facts forward: $(3 + 2i) + (3 - 2i) = 6$ ✓ and $(3 + 2i)(3 - 2i) = 9 + 4 = 13$ ✓. (The choice $6 + 2i$ takes the real part straight from the $6$, forgetting that the sum is $2a$; the choice $3 + 4i$ stops at $b^2 = 4$ and reports $4$ as $b$; the choice $2 + 3i$ has $a$ and $b$ swapped, and its sum with its conjugate would be $4$, not $6$.)',
    },
    {
      q: 'Let $z = 3 + i$ and let $\\overline{z} = 3 - i$. Compute $z^2 + \\overline{z}^2$.',
      choices: ['$16$', '$0$', '$20$', '$8$'],
      answer: 0,
      solution:
        'Square each one: $z^2 = 9 + 6i + i^2 = 8 + 6i$, and $\\overline{z}^2 = 9 - 6i + i^2 = 8 - 6i$. The imaginary parts are opposites, so they cancel and the sum is $16$ — real again, as anything built symmetrically from a conjugate pair must be. Check with an identity that avoids squaring complex numbers altogether: $z^2 + \\overline{z}^2 = (z + \\overline{z})^2 - 2z\\overline{z} = 6^2 - 2(9 + 1) = 36 - 20 = 16$ ✓. (The choice $0$ assumes the two squares cancel completely, but only their imaginary parts do; the choice $20$ computes $2z\\overline{z} = 2(a^2 + b^2)$, which is the correction term in that identity, not the answer; the choice $8$ reports the real part of $z^2$ alone and forgets that the second square contributes another $8$.)',
    },
  ],
  // c11 — a long product of powers, where multiplying means ADDING the
  // exponents and the total is then reduced mod 4. One version proves the rule
  // in general; one runs it backwards and hunts for the smallest exponent.
  [
    {
      q: 'Compute the product $i^1 \\cdot i^2 \\cdot i^3 \\cdot i^4 \\cdot i^5 \\cdot i^6 \\cdot i^7 \\cdot i^8 \\cdot i^9 \\cdot i^{10}$.',
      choices: ['$1$', '$-1$', '$-i$', '$i$'],
      answer: 2,
      solution:
        'Multiplying powers of the same thing means adding the exponents, so the product is $i^{1+2+\\cdots+10}$. Add by pairing the ends: $1 + 10 = 11$, $2 + 9 = 11$, and so on for five pairs, giving $5 \\times 11 = 55$. Since $55 = 4 \\times 13 + 3$, the product is $i^3 = -i$. Check the last step without dividing: $i^{56} = (i^4)^{14} = 1$, so $i^{55}$ must be the number that gives $1$ when multiplied by $i$ — and $(-i)(i) = 1$ ✓. (The choice $-1$ adds $1$ through $10$ as $10 \\times 5 = 50$ instead of $\\frac{10 \\times 11}{2} = 55$, and $50$ leaves remainder $2$; the choice $i$ reduces only the last DIGIT of $55$, treating $5$ as the exponent instead of $55$; the choice $1$ MULTIPLIES the exponents instead of adding them, and $1 \\times 2 \\times \\cdots \\times 10 = 3{,}628{,}800$ is a multiple of $4$.)',
    },
    {
      q: 'For every positive integer $n$, the product $i^n \\cdot i^{n+1} \\cdot i^{n+2} \\cdot i^{n+3}$ has the same value. What is that value?',
      choices: ['$-1$', '$1$', '$0$', '$-i$'],
      answer: 0,
      solution:
        'Add the four exponents: $n + (n+1) + (n+2) + (n+3) = 4n + 6$. So the product is $i^{4n+6} = (i^4)^n \\cdot i^6 = 1 \\cdot i^6$, and $i^6 = i^4 \\cdot i^2 = -1$. The $n$ disappears completely, which is why the value never changes. Check at a specific exponent that tells the choices apart, say $n = 5$: the four factors are $i, -1, -i, 1$, and multiplying them gives $i \\cdot (-1) \\cdot (-i) \\cdot 1 = i \\cdot i = -1$ ✓ — not $1$, not $0$, and not $-i$. (The choice $1$ counts the four factors and calls the product $i^4$, but it is the EXPONENTS that add, not the factors; the choice $0$ is the value of the SUM of one full cycle, a different question entirely; the choice $-i$ reads the leftover $i^6$ as $i^3$, one step too far around the cycle.)',
    },
    {
      q: 'What is the smallest integer $n > 1$ for which the product $i^1 \\cdot i^2 \\cdot i^3 \\cdots i^n$ equals $1$?',
      choices: ['$7$', '$3$', '$4$', '$8$'],
      answer: 0,
      solution:
        'The product is $i^{1+2+\\cdots+n}$, so we want the running total of exponents to be a multiple of $4$. The totals are $1, 3, 6, 10, 15, 21, 28, \\ldots$, and the first multiple of $4$ among them is $28$, at $n = 7$: $i^{28} = (i^4)^7 = 1$. Check by building the product one factor at a time, which never uses the sum formula: after $i^1$ the product is $i$; times $i^2$ gives $-i$; times $i^3$ gives $(-i)(-i) = -1$; times $i^4$ leaves $-1$; times $i^5$ gives $-i$; times $i^6$ gives $i$; times $i^7$ gives $(i)(-i) = 1$ ✓ — and that running list shows nothing before $n = 7$ reached $1$. (The choice $3$ stops where the running product is $-1$, reading the cycle one step off; the choice $4$ counts four factors and expects $i^4$, but the exponents add to $10$, not $4$; the choice $8$ also gives $1$, since the total climbs to $36$ — it works, but the question asks for the SMALLEST such $n$.)',
    },
  ],
  // c12 — when does an equation dodge the real numbers entirely? The test is
  // whether the square is forced to equal a negative. One version completes the
  // square first; one asks what the solutions of $z^2 = -25$ actually look like.
  [
    {
      q: 'For which real numbers $c$ does the equation $x^2 + 9 = c$ have NO real solutions?',
      choices: ['$c > 9$', '$c < -9$', '$c = 9$ only', '$c < 9$'],
      answer: 3,
      solution:
        'Get the square by itself: $x^2 = c - 9$. A real number squared is never negative, so the equation dodges the reals exactly when $c - 9 < 0$, that is $c < 9$. Check both sides of the border with real numbers, not just at the border: at $c = 5$ the equation says $x^2 = -4$, whose only solutions are $2i$ and $-2i$ ✓, while at $c = 20$ it says $x^2 = 11$, and $x = \\pm\\sqrt{11}$ are perfectly real ✗. (The choice $c > 9$ is exactly the set where real solutions DO exist; the choice $c < -9$ comes from moving the $9$ the wrong way, solving $c + 9 < 0$; the choice $c = 9$ only names the single value where the solution is the real number $x = 0$.)',
    },
    {
      q: 'The equation $x^2 + 6x + m = 0$ has no real solutions. Which of these values of $m$ makes that happen?',
      choices: ['$m = 12$', '$m = 9$', '$m = 6$', '$m = -12$'],
      answer: 0,
      solution:
        'Complete the square: $x^2 + 6x + 9 = 9 - m$, so $(x + 3)^2 = 9 - m$. There are no real solutions exactly when the right side is negative, which needs $m > 9$. Of the choices, only $m = 12$ clears that bar. Check by actually solving it: $(x+3)^2 = -3$ gives $x = -3 \\pm i\\sqrt{3}$, and substituting $x = -3 + i\\sqrt{3}$ gives $x^2 = 9 - 6i\\sqrt{3} - 3 = 6 - 6i\\sqrt{3}$, so $6 - 6i\\sqrt{3} - 18 + 6i\\sqrt{3} + 12 = 0$ ✓ with no real root in sight. (The choice $m = 9$ sits exactly on the border, where $(x+3)^2 = 0$ hands back the real solution $x = -3$; the choice $m = 6$ copies the coefficient of $x$ and leaves $(x+3)^2 = 3$, whose solutions $-3 \\pm \\sqrt{3}$ are real; the choice $m = -12$ assumes a negative constant is what blocks real solutions, but it gives $(x+3)^2 = 21$, which is as real as can be.)',
    },
    {
      q: 'A number $z$ satisfies $z^2 = -25$. Which statement is true?',
      choices: [
        'There is exactly one such $z$, namely $5i$',
        'There are exactly two such $z$, and both are pure imaginary',
        'There are exactly two such $z$, and both are real',
        'There is no such $z$ in any number system',
      ],
      answer: 1,
      solution:
        'Try $z = 5i$: $(5i)^2 = 25i^2 = -25$ ✓. Now try its negative twin $z = -5i$: $(-5i)^2 = 25i^2 = -25$ ✓ as well, because squaring erases the sign out front. So there are two solutions and both are pure imaginary. Check that the real candidates really fail: $5^2 = 25$ and $(-5)^2 = 25$, neither of which is $-25$ ✗ — squaring a real number can never produce a negative. (The choice naming only $5i$ forgets the negative twin, exactly as someone would forget that $x^2 = 25$ has the solution $-5$; the choice saying both are real is the belief that $\\sqrt{-25} = \\pm 5$; the choice saying no such $z$ exists stops at the real number line, which is the whole reason $i$ was invented.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 12,
  challenge,
}
