// Introduction to Algebra chapter 12 — variations for section 12.3,
// "Complex Numbers". All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text alone and then checked a
//    SECOND, independent way: products are divided back by one factor, sums are
//    re-added in a different grouping, quotients are multiplied back by the
//    denominator, and quadratic roots are confirmed with the sum-and-product
//    facts as well as by substitution.
//  - No check is ever made at a value where everything collapses to $0$. Where a
//    root has to be substituted (and so must give $0$), the solution also shows a
//    wrong choice failing, so the check actually distinguishes them.
//  - Five traps run through the section: replacing $i^2$ with $+1$ instead of
//    $-1$, multiplying "straight across" instead of distributing, treating
//    $i \cdot i$ as $i$, subtracting in the denominator ($a^2 - b^2$) when the
//    conjugate trick gives $a^2 + b^2$, and letting a real part and an imaginary
//    part merge into one number. Each distractor is one named mistake, and the
//    named mistake really does produce the number listed.
//  - No two choices inside an item name the same value.

const s123 = [
  // p1 — read a part off a complex number
  [
    {
      q: 'What is the imaginary part of $-4 + 9i$?',
      choices: ['$-4$', '$9i$', '$9$', '$5$'],
      answer: 2,
      solution:
        'Line the number up with the pattern $a + bi$: here $a = -4$ and $b = 9$, so the imaginary part is $9$ ✓. Check it a second way by rebuilding the number from the two parts you claim it has: real part $-4$, plus $9$ copies of $i$, gives $-4 + 9i$ ✓ — exactly the number we started with. Notice that the imaginary part is a plain real number; the $i$ is a label, not part of the value. (The choice $9i$ keeps the $i$ attached, which is the most common slip of all; the choice $-4$ reports the real part instead of the imaginary part; the choice $5$ comes from adding the two parts, $-4 + 9 = 5$, as if a real part and an imaginary part could merge into one number — they never can.)',
    },
    {
      q: 'What is the real part of $6i - 11$?',
      choices: ['$6$', '$-11$', '$6i$', '$11$'],
      answer: 1,
      solution:
        'This one is written back to front, so put it in the form $a + bi$ first: $6i - 11 = -11 + 6i$. Now the real part is easy to read off — it is $-11$ ✓. Check a second way: rebuild the number from the parts, $-11$ together with $6i$, and you get $6i - 11$ again, since two numbers can be added in either order ✓. (The choice $6$ grabs whichever number is written first, but that one is the imaginary part; the choice $6i$ makes the same grab and keeps the $i$ as well; the choice $11$ has the right size but drops the minus sign — the real part is everything not attached to an $i$, minus sign included.)',
    },
    {
      q: 'A complex number has real part $-3$ and imaginary part $8$. What is the number?',
      choices: ['$8 - 3i$', '$-3 - 8i$', '$5$', '$-3 + 8i$'],
      answer: 3,
      solution:
        'This runs the usual question backwards: instead of reading the parts off a number, we build the number from its parts. The pattern is $a + bi$ with $a = -3$ and $b = 8$, so the number is $-3 + 8i$ ✓. Check by taking it apart again: the piece with no $i$ is $-3$, so the real part is $-3$ ✓, and the number multiplying $i$ is $8$, so the imaginary part is $8$ ✓. (The choice $8 - 3i$ swaps the two jobs, giving real part $8$ and imaginary part $-3$; the choice $-3 - 8i$ flips the sign of the imaginary part, so its imaginary part is $-8$; the choice $5$ adds the parts, $-3 + 8 = 5$, which throws the $i$ away entirely.)',
    },
  ],
  // p2 — addition
  [
    {
      q: 'Compute $(5 + 6i) + (2 + 3i)$.',
      choices: ['$7 + 9i$', '$10 + 18i$', '$16$', '$3 + 3i$'],
      answer: 0,
      solution:
        'Real parts go with real parts and imaginary parts go with imaginary parts, like sorting socks into two drawers. Real: $5 + 2 = 7$. Imaginary: $6 + 3 = 9$. The sum is $7 + 9i$ ✓. Check a second way by subtracting one of the original numbers back off: $(7 + 9i) - (5 + 6i) = 2 + 3i$ ✓, which is the other number we started with. (The choice $10 + 18i$ multiplies each pair instead of adding it, $5 \\cdot 2 = 10$ and $6 \\cdot 3 = 18$; the choice $16$ pours all four numbers into one pile, $5 + 6 + 2 + 3$, letting the lanes merge; the choice $3 + 3i$ subtracts instead of adding, $5 - 2 = 3$ and $6 - 3 = 3$.)',
    },
    {
      q: 'A complex number $z$ satisfies $(4 - 7i) + z = 9 + 2i$. What is $z$?',
      choices: ['$5 - 9i$', '$13 + 9i$', '$5 + 9i$', '$5 - 5i$'],
      answer: 2,
      solution:
        'Here the sum is given and one of the two numbers is missing, so we undo the addition: $z = (9 + 2i) - (4 - 7i)$. Real: $9 - 4 = 5$. Imaginary: $2 - (-7) = 2 + 7 = 9$, because subtracting a negative adds. So $z = 5 + 9i$ ✓. Check forward, which is the real test: $(4 - 7i) + (5 + 9i)$ has real part $4 + 5 = 9$ ✓ and imaginary part $-7 + 9 = 2$ ✓, giving $9 + 2i$ exactly. (The choice $5 - 9i$ subtracts the imaginary parts in the wrong order, $-7 - 2 = -9$; the choice $13 + 9i$ adds the real parts, $9 + 4 = 13$, instead of subtracting them; the choice $5 - 5i$ adds the imaginary parts, $2 + (-7) = -5$, instead of subtracting them.)',
    },
    {
      q: 'Compute $(1 + 4i) + (3 - 9i) + (2 + i)$.',
      choices: ['$6 + 14i$', '$6 - 4i$', '$6 - 5i$', '$-4 + 6i$'],
      answer: 1,
      solution:
        'Three numbers at once, but the rule does not change — keep each lane separate. Real: $1 + 3 + 2 = 6$. Imaginary: $4 + (-9) + 1 = -4$, remembering that the lonely $i$ at the end counts as $1i$. The sum is $6 - 4i$ ✓. Check by adding in a different grouping: $(3 - 9i) + (2 + i) = 5 - 8i$ first, and then $(1 + 4i) + (5 - 8i) = 6 - 4i$ ✓ — same answer by a different route. (The choice $6 + 14i$ treats $-9i$ as $+9i$ and gets $4 + 9 + 1 = 14$; the choice $6 - 5i$ forgets that a lone $i$ has a hidden coefficient of $1$ and computes $4 - 9 = -5$; the choice $-4 + 6i$ has both numbers right but puts each in the wrong lane.)',
    },
  ],
  // p3 — subtraction
  [
    {
      q: 'Compute $(3 - 5i) - (8 - 9i)$.',
      choices: ['$11 + 4i$', '$-5 - 14i$', '$-5 - 4i$', '$-5 + 4i$'],
      answer: 3,
      solution:
        'The minus sign in front of the bracket belongs to BOTH parts inside it, so $-(8 - 9i)$ becomes $-8 + 9i$. Real: $3 - 8 = -5$. Imaginary: $-5 + 9 = 4$. The answer is $-5 + 4i$ ✓. Check by adding it back: $(-5 + 4i) + (8 - 9i)$ has real part $3$ ✓ and imaginary part $4 - 9 = -5$ ✓, which is the $3 - 5i$ we started from. (The choice $-5 - 14i$ hands the minus sign only to the $8$ and computes $-5 + (-9) = -14$; the choice $11 + 4i$ adds the real parts, $3 + 8$, instead of subtracting; the choice $-5 - 4i$ does the imaginary subtraction upside down, $-9 - (-5) = -4$.)',
    },
    {
      q: 'Compute $(4 + 9i) - (10 + 9i)$.',
      choices: ['$-6$', '$-6 + 18i$', '$6$', '$-6i$'],
      answer: 0,
      solution:
        'Real: $4 - 10 = -6$. Imaginary: $9 - 9 = 0$. With no imaginary part left, the answer is the plain real number $-6$ ✓. That is worth noticing: two numbers that both had an $i$ in them can differ by something completely real. Check by adding back: $(-6) + (10 + 9i) = 4 + 9i$ ✓. (The choice $-6 + 18i$ adds the imaginary parts, $9 + 9 = 18$, instead of subtracting them; the choice $6$ subtracts the real parts in the wrong order, $10 - 4$; the choice $-6i$ has the right number but files it in the imaginary lane, when nothing here ever multiplied by $i$.)',
    },
    {
      q: 'A complex number $z$ satisfies $z - (2 - 3i) = 5 + i$. What is $z$?',
      choices: ['$3 + 4i$', '$7 + 4i$', '$7 - 2i$', '$3 - 2i$'],
      answer: 2,
      solution:
        'To undo a subtraction, add: $z = (5 + i) + (2 - 3i)$. Real: $5 + 2 = 7$. Imaginary: $1 + (-3) = -2$. So $z = 7 - 2i$ ✓. Check forward: $(7 - 2i) - (2 - 3i)$ has real part $7 - 2 = 5$ ✓ and imaginary part $-2 - (-3) = 1$ ✓, giving $5 + i$ exactly. (The choice $3 + 4i$ subtracts $2 - 3i$ instead of adding it — moving a term across the equals sign without changing its operation; the choice $7 + 4i$ adds the real parts but subtracts the imaginary parts; the choice $3 - 2i$ does the opposite, subtracting the real parts but adding the imaginary parts.)',
    },
  ],
  // p4 — the conjugate
  [
    {
      q: 'What is the conjugate of $-6 + 4i$?',
      choices: ['$6 - 4i$', '$-6 - 4i$', '$6 + 4i$', '$4 - 6i$'],
      answer: 1,
      solution:
        'The conjugate leaves the real part completely alone and flips the sign of the imaginary part only. The real part $-6$ stays $-6$, and $+4i$ becomes $-4i$, so the conjugate is $-6 - 4i$ ✓. Check with the property that makes conjugates useful — their product should be the real number $a^2 + b^2$: $(-6 + 4i)(-6 - 4i) = 36 + 24i - 24i - 16i^2 = 36 + 16 = 52$, which is real ✓, and $(-6)^2 + 4^2 = 52$ ✓. (The choice $6 - 4i$ flips BOTH signs, which is negation, not conjugation; the choice $6 + 4i$ flips only the real part, exactly the wrong half; the choice $4 - 6i$ swaps the two parts instead of changing a sign.)',
    },
    {
      q: 'The conjugate of a complex number $z$ is $8 + 5i$. What is $z$?',
      choices: ['$-8 - 5i$', '$8 + 5i$', '$-8 + 5i$', '$8 - 5i$'],
      answer: 3,
      solution:
        'Running the conjugate backwards is the same move as running it forwards, because taking the conjugate twice brings you home. Flip the sign of the imaginary part of $8 + 5i$ to get $z = 8 - 5i$ ✓. Check forward: the conjugate of $8 - 5i$ keeps the $8$ and flips $-5i$ to $+5i$, giving $8 + 5i$ ✓ — the number we were told. (The choice $8 + 5i$ assumes a number is its own conjugate, which is only true for real numbers; the choice $-8 - 5i$ negates the whole number; the choice $-8 + 5i$ flips the real part instead of the imaginary part.)',
    },
    {
      q: 'Which of these numbers is equal to its own conjugate?',
      choices: ['$4i$', '$2 + 2i$', '$-7$', '$1 - i$'],
      answer: 2,
      solution:
        'A number equals its own conjugate exactly when flipping the sign of its imaginary part changes nothing — and the only number whose sign flip does nothing is $0$. So the imaginary part must be $0$, which means the number is real. Of the four choices only $-7$ is real: writing it as $-7 + 0i$, its conjugate is $-7 - 0i = -7$ ✓. Check the others one at a time, which is the independent test: the conjugate of $4i = 0 + 4i$ is $-4i$ ✗, the conjugate of $2 + 2i$ is $2 - 2i$ ✗, and the conjugate of $1 - i$ is $1 + i$ ✗. (The choice $4i$ assumes a pure imaginary number is unchanged, but flipping its sign is the one thing conjugation does to it; the choice $2 + 2i$ assumes matching parts protect a number, which conjugation ignores; the choice $1 - i$ assumes a number that already shows a minus sign has been conjugated once and for all.)',
    },
  ],
  // p5 — a pure imaginary number times a complex number
  [
    {
      q: 'Compute $3i(5 - 2i)$.',
      choices: ['$-6 + 15i$', '$9i$', '$15 + 6i$', '$6 + 15i$'],
      answer: 3,
      solution:
        'Distribute the $3i$ across both terms: $3i \\cdot 5 = 15i$, and $3i \\cdot (-2i) = -6i^2$. Now use the golden rule $i^2 = -1$: the term $-6i^2$ becomes $-6 \\cdot (-1) = +6$. Collecting gives $6 + 15i$ ✓. Check the other way round by dividing the answer by $3i$: since $\\dfrac{1}{3i} = \\dfrac{-i}{3}$, we get $(6 + 15i) \\cdot \\dfrac{-i}{3} = \\dfrac{-6i - 15i^2}{3} = \\dfrac{15 - 6i}{3} = 5 - 2i$ ✓ — the factor we started with. (The choice $-6 + 15i$ replaces $i^2$ with $+1$, turning $-6i^2$ into $-6$; the choice $9i$ treats $i \\cdot i$ as $i$, so $-6i^2$ becomes $-6i$ and $15i - 6i = 9i$; the choice $15 + 6i$ has both numbers right but puts each in the other lane.)',
    },
    {
      q: 'Compute $(-4i)(2 + 5i)$.',
      choices: ['$20 - 8i$', '$-20 - 8i$', '$-28i$', '$20 + 8i$'],
      answer: 0,
      solution:
        'Distribute, dragging the minus sign along: $(-4i)(2) = -8i$, and $(-4i)(5i) = -20i^2$. Since $i^2 = -1$, the term $-20i^2$ is $+20$. So the product is $20 - 8i$ ✓. Check by dividing back: $\\dfrac{1}{-4i} = \\dfrac{i}{4}$, so $(20 - 8i) \\cdot \\dfrac{i}{4} = \\dfrac{20i - 8i^2}{4} = \\dfrac{8 + 20i}{4} = 2 + 5i$ ✓. (The choice $-20 - 8i$ uses $i^2 = +1$ and gets $-20$; the choice $-28i$ treats $i \\cdot i$ as $i$, turning $-20i^2$ into $-20i$ so that $-8i - 20i = -28i$; the choice $20 + 8i$ loses the minus sign on the first product, writing $(-4i)(2)$ as $+8i$.)',
    },
    {
      q: 'For which real number $k$ is $2i(k + 3i)$ equal to $-6 + 10i$?',
      choices: ['$-3$', '$5$', '$10$', '$20$'],
      answer: 1,
      solution:
        'Multiply out with $k$ still unknown: $2i(k + 3i) = 2ki + 6i^2 = -6 + 2ki$. Two complex numbers are equal only when the real parts match AND the imaginary parts match. The real parts already agree, since both are $-6$, so we need $2k = 10$, giving $k = 5$ ✓. Check forward with the actual number: $2i(5 + 3i) = 10i + 6i^2 = -6 + 10i$ ✓. (The choice $10$ reads the imaginary part off as $k$ itself and forgets that $k$ was multiplied by $2$; the choice $20$ multiplies by $2$ where it should have divided; the choice $-3$ matches $k$ against the REAL part instead, computing $-6 \\div 2$ — but the real part came from $6i^2$ and has nothing to do with $k$.)',
    },
  ],
  // p6 — full binomial multiplication
  [
    {
      q: 'Compute $(3 + 4i)(2 + 5i)$.',
      choices: ['$26 + 23i$', '$6 + 23i$', '$-14 + 23i$', '$6 + 20i$'],
      answer: 2,
      solution:
        'Distribute all four products, exactly as with $(x + 3)(x + 2)$: $6 + 15i + 8i + 20i^2$. Replace $i^2$ with $-1$, so $20i^2 = -20$. Collect: real $6 - 20 = -14$, imaginary $15i + 8i = 23i$. The product is $-14 + 23i$ ✓. Check by dividing the answer by $3 + 4i$: multiply top and bottom by the conjugate $3 - 4i$, whose bottom is $9 + 16 = 25$, and whose top is $(-14 + 23i)(3 - 4i) = -42 + 56i + 69i - 92i^2 = 50 + 125i$; dividing gives $2 + 5i$ ✓, the other factor. (The choice $26 + 23i$ replaces $i^2$ with $+1$, so $20i^2$ adds $20$ instead of subtracting it; the choice $6 + 23i$ drops the $20i^2$ term altogether; the choice $6 + 20i$ multiplies straight across, pairing $3 \\cdot 2$ and $4 \\cdot 5$ and never touching the cross terms.)',
    },
    {
      q: 'Compute $(5 - 2i)(3 + 4i)$.',
      choices: ['$7 + 14i$', '$23 + 14i$', '$15 - 8i$', '$23 + 26i$'],
      answer: 1,
      solution:
        'Distribute, keeping the minus sign glued to the $2i$: $15 + 20i - 6i - 8i^2$. Since $i^2 = -1$, the term $-8i^2$ becomes $+8$. Collect: real $15 + 8 = 23$, imaginary $20i - 6i = 14i$. The product is $23 + 14i$ ✓. Check by dividing back by $3 + 4i$: the conjugate $3 - 4i$ makes the bottom $9 + 16 = 25$, and the top becomes $(23 + 14i)(3 - 4i) = 69 - 92i + 42i - 56i^2 = 125 - 50i$; dividing by $25$ gives $5 - 2i$ ✓. (The choice $7 + 14i$ uses $i^2 = +1$, so $-8i^2$ subtracts $8$ and the real part reads $15 - 8$; the choice $15 - 8i$ multiplies straight across, $5 \\cdot 3$ and $(-2)(4)$, skipping the cross terms; the choice $23 + 26i$ gets the real part right but loses the minus sign on the middle term, adding $6i$ instead of subtracting it, for $20i + 6i = 26i$.)',
    },
    {
      q: 'Compute $(2 - 3i)^2$.',
      choices: ['$13 - 12i$', '$-5$', '$-5 + 12i$', '$-5 - 12i$'],
      answer: 3,
      solution:
        'A square is just a product with itself, so write it out: $(2 - 3i)(2 - 3i) = 4 - 6i - 6i + 9i^2$. Since $i^2 = -1$, the term $9i^2$ is $-9$. Collect: real $4 - 9 = -5$, imaginary $-6i - 6i = -12i$. The square is $-5 - 12i$ ✓. Check by dividing the answer by $2 - 3i$ — it should give back $2 - 3i$: the conjugate $2 + 3i$ makes the bottom $4 + 9 = 13$, and the top becomes $(-5 - 12i)(2 + 3i) = -10 - 15i - 24i - 36i^2 = 26 - 39i$; dividing by $13$ gives $2 - 3i$ ✓. (The choice $13 - 12i$ uses $i^2 = +1$, making the real part $4 + 9$; the choice $-5$ squares each piece on its own, $2^2 = 4$ and $(-3i)^2 = -9$, and forgets the two middle terms entirely; the choice $-5 + 12i$ gets the size of the middle term right but its sign wrong, as though a minus times a minus turned up here — it does not, because both middle terms are $2 \\cdot (-3i)$.)',
    },
  ],
  // p7 — a number times its conjugate
  [
    {
      q: 'Compute $(6 + 5i)(6 - 5i)$.',
      choices: ['$11$', '$61$', '$36 - 25i$', '$61i$'],
      answer: 1,
      solution:
        'These two are conjugates, so the shortcut says the answer is $a^2 + b^2 = 6^2 + 5^2 = 36 + 25 = 61$ ✓. Check the long way, which is genuinely independent of the shortcut: $(6 + 5i)(6 - 5i) = 36 - 30i + 30i - 25i^2$. The middle terms cancel, and $-25i^2$ becomes $+25$, leaving $36 + 25 = 61$ ✓. The reason the answer is bigger, not smaller, is that $-25i^2$ ADDS. (The choice $11$ subtracts, $36 - 25$, treating this like an ordinary difference of squares and forgetting that $i^2 = -1$ flips the sign a second time; the choice $36 - 25i$ multiplies straight across and writes $(5i)(-5i)$ as $-25i$, treating $i \\cdot i$ as $i$; the choice $61i$ has the right size but tacks on an $i$, when the whole point is that this product is real.)',
    },
    {
      q: 'For a positive real number $a$, the product $(a + 4i)(a - 4i)$ equals $65$. What is $a$?',
      choices: ['$7$', '$9$', '$49$', '$81$'],
      answer: 0,
      solution:
        'A number times its conjugate is $a^2 + b^2$, so here the product is $a^2 + 16$. Set it equal to $65$: $a^2 + 16 = 65$, so $a^2 = 49$ and, since $a$ is positive, $a = 7$ ✓. Check forward by multiplying the actual numbers out: $(7 + 4i)(7 - 4i) = 49 - 28i + 28i - 16i^2 = 49 + 16 = 65$ ✓. (The choice $9$ subtracts instead of adding, solving $a^2 - 16 = 65$ to get $a^2 = 81$; the choice $49$ stops at $a^2$ and forgets the last step; the choice $81$ makes the subtraction slip AND forgets to take the square root. You can rule $9$ out by testing it: $(9 + 4i)(9 - 4i) = 81 + 16 = 97$, not $65$ ✗.)',
    },
    {
      q: 'Multiply $-2 + 9i$ by its conjugate.',
      choices: ['$-85$', '$-77$', '$4 - 81i$', '$85$'],
      answer: 3,
      solution:
        'First write the conjugate down: it is $-2 - 9i$, with the real part left alone. Then the product is $a^2 + b^2 = (-2)^2 + 9^2 = 4 + 81 = 85$ ✓. Check by expanding instead of using the shortcut: $(-2 + 9i)(-2 - 9i) = 4 + 18i - 18i - 81i^2 = 4 + 81 = 85$ ✓. Both squares come out positive, so a negative real part cannot drag the answer below zero. (The choice $-85$ carries the minus sign of the $-2$ into the final answer, but $(-2)^2$ is $+4$; the choice $-77$ subtracts, $4 - 81$, instead of adding; the choice $4 - 81i$ writes $(9i)(-9i)$ as $-81i$, treating $i \\cdot i$ as $i$ instead of as $-1$.)',
    },
  ],
  // p8 — solve a pure square equation
  [
    {
      q: 'Solve $x^2 + 25 = 0$.',
      choices: [
        '$x = 5$ or $x = -5$',
        '$x = 25i$ or $x = -25i$',
        '$x = 5i$ or $x = -5i$',
        '$x = 5i$ only',
      ],
      answer: 2,
      solution:
        'Move the $25$ across: $x^2 = -25$. No real number squares to a negative, so we need $i$: $x = 5i$ works, because $(5i)^2 = 25i^2 = -25$ ✓, and so does its negative twin, since $(-5i)^2 = 25i^2 = -25$ ✓. Squaring erases the sign out front, so both must be listed. Check a second, independent way by building the quadratic from the roots: $(x - 5i)(x + 5i) = x^2 - 25i^2 = x^2 + 25$ ✓, which is exactly the left side we were given. (The choice $x = \\pm 5$ solves $x^2 = +25$ and misses the minus sign; the choice $x = \\pm 25i$ forgets to take the square root, and indeed $(25i)^2 = -625$, nowhere near $-25$ ✗; the choice $5i$ only forgets the negative twin.)',
    },
    {
      q: 'Solve $4x^2 + 100 = 0$.',
      choices: [
        '$x = 10i$ or $x = -10i$',
        '$x = 5i$ or $x = -5i$',
        '$x = 5$ or $x = -5$',
        '$x = 25i$ or $x = -25i$',
      ],
      answer: 1,
      solution:
        'Get $x^2$ by itself in two steps: subtract $100$ to get $4x^2 = -100$, then divide by $4$ to get $x^2 = -25$. Now $x = 5i$ or $x = -5i$, since $(\\pm 5i)^2 = 25i^2 = -25$ ✓. Check forward in the ORIGINAL equation: $4(5i)^2 + 100 = 4(-25) + 100 = 0$ ✓. That check would be worthless on its own — every root gives $0$ — so test a rival too: $4(10i)^2 + 100 = 4(-100) + 100 = -300 \\ne 0$ ✗, which really does tell the two apart. (The choice $\\pm 10i$ skips the division by $4$ and solves $x^2 = -100$; the choice $\\pm 5$ drops the $i$ and solves $x^2 = +25$; the choice $\\pm 25i$ divides correctly but never takes the square root.)',
    },
    {
      q: 'The two solutions of $x^2 + k = 0$ are $x = 6i$ and $x = -6i$. What is the real number $k$?',
      choices: ['$36$', '$6$', '$-6$', '$-36$'],
      answer: 0,
      solution:
        'Work backwards from a root. Putting $x = 6i$ into the equation gives $(6i)^2 + k = 0$, and $(6i)^2 = 36i^2 = -36$, so $-36 + k = 0$ and $k = 36$ ✓. Check a second, independent way by multiplying the roots back into a quadratic: $(x - 6i)(x + 6i) = x^2 - 36i^2 = x^2 + 36$, so $k = 36$ ✓ — the same answer from a different direction. (The choice $-36$ reads $k$ as equal to $x^2$ instead of its opposite, and substituting it gives $-36 - 36 = -72 \\ne 0$ ✗; the choice $6$ takes the coefficient of $i$ without squaring it; the choice $-6$ makes both mistakes at once.)',
    },
  ],
  // p9 — divide by a complex number using the conjugate
  [
    {
      q: 'Write $\\dfrac{40}{3 + i}$ in the form $a + bi$.',
      choices: ['$12 - 4i$', '$15 - 5i$', '$12 + 4i$', '$12 - 40i$'],
      answer: 0,
      solution:
        'Multiply top and bottom by the conjugate of the bottom, $3 - i$. The bottom becomes $(3 + i)(3 - i) = 3^2 + 1^2 = 10$ — a positive real number, which is the whole point of the trick. The top becomes $40(3 - i) = 120 - 40i$. Divide EVERY part by $10$: $\\dfrac{120 - 40i}{10} = 12 - 4i$ ✓. Check by multiplying back: $(12 - 4i)(3 + i) = 36 + 12i - 12i - 4i^2 = 36 + 4 = 40$ ✓. (The choice $15 - 5i$ makes the sign slip in the denominator, using $9 - 1 = 8$ instead of $9 + 1 = 10$, and $\\frac{120 - 40i}{8} = 15 - 5i$; the choice $12 + 4i$ multiplies the BOTTOM by the conjugate but the top by the original $3 + i$, giving $\\frac{120 + 40i}{10}$; the choice $12 - 40i$ divides only the real part by $10$ and leaves the $-40i$ untouched.)',
    },
    {
      q: 'Find real numbers $a$ and $b$ so that $(a + bi)(2 + 3i) = 13$.',
      choices: ['$a = 2$, $b = 3$', '$a = 26$, $b = -39$', '$a = 2$, $b = -3$', '$a = -3$, $b = 2$'],
      answer: 2,
      solution:
        'The unknown number is $a + bi = \\dfrac{13}{2 + 3i}$, so divide using the conjugate $2 - 3i$. The bottom becomes $(2 + 3i)(2 - 3i) = 4 + 9 = 13$, and the top becomes $13(2 - 3i) = 26 - 39i$. Dividing gives $\\dfrac{26 - 39i}{13} = 2 - 3i$, so $a = 2$ and $b = -3$ ✓. Check forward: $(2 - 3i)(2 + 3i) = 4 + 6i - 6i - 9i^2 = 4 + 9 = 13$ ✓ — and notice why it had to be the conjugate, since only conjugates multiply to a plain real number. (The choice $a = 2$, $b = 3$ forgets to flip the sign, and $(2 + 3i)(2 + 3i) = -5 + 12i$, which is not even real ✗; the choice $a = 26$, $b = -39$ stops before dividing by $13$; the choice $a = -3$, $b = 2$ reports the two numbers in the wrong order.)',
    },
    {
      q: 'Write $\\dfrac{20 + 20i}{3 - i}$ in the form $a + bi$.',
      choices: ['$8 + 8i$', '$5 + 10i$', '$8 + 4i$', '$4 + 8i$'],
      answer: 3,
      solution:
        'The conjugate of the bottom is $3 + i$, so multiply top and bottom by it. Bottom: $(3 - i)(3 + i) = 9 + 1 = 10$. Top: $(20 + 20i)(3 + i) = 60 + 20i + 60i + 20i^2 = 40 + 80i$, using $20i^2 = -20$. Divide both parts by $10$: $\\dfrac{40 + 80i}{10} = 4 + 8i$ ✓. Check by multiplying back: $(4 + 8i)(3 - i) = 12 - 4i + 24i - 8i^2 = 12 + 8 + 20i = 20 + 20i$ ✓. (The choice $5 + 10i$ makes the denominator sign slip, $9 - 1 = 8$, and $\\frac{40 + 80i}{8} = 5 + 10i$; the choice $8 + 4i$ multiplies the bottom by the conjugate but the top by the original $3 - i$, giving $\\frac{80 + 40i}{10}$; the choice $8 + 8i$ replaces $i^2$ with $+1$ in the top, turning $40 + 80i$ into $80 + 80i$.)',
    },
  ],
  // p10 — quadratics with complex roots
  [
    {
      q: 'Solve $x^2 + 6x + 25 = 0$.',
      choices: [
        '$x = -3 + 4i$ or $x = -3 - 4i$',
        '$x = 3 + 4i$ or $x = 3 - 4i$',
        '$x = -3 + 16i$ or $x = -3 - 16i$',
        '$x = -6 + 4i$ or $x = -6 - 4i$',
      ],
      answer: 0,
      solution:
        'Complete the square. Half of $6$ is $3$, and $3^2 = 9$, so add $9$ to both sides: $x^2 + 6x + 9 = -25 + 9$, which is $(x + 3)^2 = -16$. A square equal to a negative number needs $i$: $x + 3 = 4i$ or $x + 3 = -4i$, so $x = -3 + 4i$ or $x = -3 - 4i$ ✓. Check a second, independent way with the sum and product of the roots, which for $x^2 + bx + c$ must be $-b$ and $c$: the sum is $(-3 + 4i) + (-3 - 4i) = -6$ ✓, and the product is $(-3)^2 + 4^2 = 25$ ✓. (The choice $3 \\pm 4i$ forgets to flip the sign when undoing $x + 3$; its roots sum to $6$, not $-6$ ✗. The choice $-3 \\pm 16i$ never takes the square root of $16$. The choice $-6 \\pm 4i$ forgets to halve the $6$ before squaring.)',
    },
    {
      q: 'Solve $x^2 - 8x + 20 = 0$.',
      choices: [
        '$x = -4 + 2i$ or $x = -4 - 2i$',
        '$x = 4 + 2i$ or $x = 4 - 2i$',
        '$x = 8 + 2i$ or $x = 8 - 2i$',
        '$x = 4 + 4i$ or $x = 4 - 4i$',
      ],
      answer: 1,
      solution:
        'Half of $-8$ is $-4$, and $(-4)^2 = 16$, so add $16$ to both sides: $x^2 - 8x + 16 = -20 + 16$, which is $(x - 4)^2 = -4$. Then $x - 4 = \\pm 2i$, giving $x = 4 + 2i$ or $x = 4 - 2i$ ✓. Check with the sum and product of the roots: the sum is $(4 + 2i) + (4 - 2i) = 8$, which matches $-b = 8$ ✓, and the product is $4^2 + 2^2 = 20$, which matches $c = 20$ ✓. As a bonus check, substitute: $(4 + 2i)^2 = 16 + 16i + 4i^2 = 12 + 16i$, and $12 + 16i - 8(4 + 2i) + 20 = 12 + 16i - 32 - 16i + 20 = 0$ ✓. (The choice $-4 \\pm 2i$ flips the sign when undoing $x - 4$; its roots sum to $-8$ ✗. The choice $8 \\pm 2i$ forgets to halve the $-8$. The choice $4 \\pm 4i$ never takes the square root of $4$, and its product would be $16 + 16 = 32$, not $20$ ✗.)',
    },
    {
      q: 'The solutions of $x^2 + bx + c = 0$ are $x = 5 + i$ and $x = 5 - i$, where $b$ and $c$ are real numbers. What is $c$?',
      choices: ['$24$', '$25$', '$26$', '$10$'],
      answer: 2,
      solution:
        'Build the quadratic from its roots by multiplying the factors: $(x - (5 + i))(x - (5 - i))$. Group each factor as $(x - 5) - i$ and $(x - 5) + i$ — conjugates again! — so the product is $(x - 5)^2 - i^2 = (x - 5)^2 + 1 = x^2 - 10x + 25 + 1 = x^2 - 10x + 26$. Reading off, $c = 26$ ✓. Check a second way by substituting a root into $x^2 - 10x + 26$: $(5 + i)^2 = 25 + 10i + i^2 = 24 + 10i$, so $24 + 10i - 10(5 + i) + 26 = 24 + 10i - 50 - 10i + 26 = 0$ ✓, and to be sure the check discriminates, try $c = 24$ in the same place: $24 + 10i - 50 + 24 = -2$, which is not $0$ ✗. (The choice $24$ writes $-i^2$ as $-1$ instead of $+1$, giving $25 - 1$; the choice $25$ uses only the real part of the root, $5^2$, and ignores the imaginary part; the choice $10$ is the SUM of the roots, which is $-b$, not $c$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 12,
  sections: { '12.3': s123 },
}
