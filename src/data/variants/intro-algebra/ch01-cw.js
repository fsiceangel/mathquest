// Introduction to Algebra chapter 1 — variations for the chapter challenge and
// the chapter worksheet. All problems and solutions are original MathQuest
// content.
//
// Every power below was checked by INTEGER exponentiation in the forward
// direction (to claim a cube root is 3, we verified 3^3), every fraction is
// stored as an exact reduced ratio, every radical is compared as the triple
// (coefficient, squarefree radicand, denominator) so that no two choices in a
// set are secretly the same number, and every equation answer was substituted
// back into the original equation. Each named wrong method was also computed,
// to be sure it never lands on the correct answer.

const challenge = [
  // 1. Different bases in a quotient — rewrite one as a power of the other.
  [
    {
      q: 'Evaluate $\\frac{3^9}{9^3}$.',
      choices: ['$27$', '$729$', '$81$', '$\\frac{1}{27}$'],
      answer: 0,
      solution: 'The bases do not match yet, so fix that first: $9 = 3^2$, and a power of a power multiplies the exponents, so $9^3 = (3^2)^3 = 3^6$. Now the quotient law applies: $\\frac{3^9}{3^6} = 3^{9-6} = 3^3 = 27$. Check the long way: $3^9 = 19683$ and $9^3 = 729$, and $19683 \\div 729 = 27$. ✓ ($729$ subtracts the exponents while the bases still disagree, giving $3^{9-3} = 3^6$; $81$ comes from writing $9^3 = 3^{2+3} = 3^5$, adding where the rule says multiply, and then $3^{9-5} = 3^4$; $\\frac{1}{27}$ subtracts in the wrong direction, $3^{6-9}$.)',
    },
    {
      q: 'Evaluate $\\frac{2^{12}}{8^3}$.',
      choices: ['$512$', '$8$', '$64$', '$3$'],
      answer: 1,
      solution: 'Rewrite the bottom in base $2$: since $8 = 2^3$, we get $8^3 = (2^3)^3 = 2^{3 \\cdot 3} = 2^9$. Then $\\frac{2^{12}}{2^9} = 2^{12-9} = 2^3 = 8$. Check: $2^{12} = 4096$ and $8^3 = 512$, and $4096 \\div 512 = 8$. ✓ ($512$ subtracts the exponents before matching the bases, giving $2^{12-3} = 2^9$; $64$ comes from $8^3 = 2^{3+3} = 2^6$, adding instead of multiplying, which leaves $2^6$; $3$ reports the leftover EXPONENT instead of the power it stands for.)',
    },
    {
      q: 'Evaluate $\\frac{25^3}{5^4}$.',
      choices: ['$5$', '$15625$', '$\\frac{1}{5}$', '$25$'],
      answer: 3,
      solution: 'This time the TOP is the odd one out: $25 = 5^2$, so $25^3 = (5^2)^3 = 5^6$. Then $\\frac{5^6}{5^4} = 5^2 = 25$. Check: $25^3 = 15625$ and $5^4 = 625$, and $15625 \\div 625 = 25$. ✓ ($5$ comes from $25^3 = 5^{2+3} = 5^5$, adding the exponents when converting instead of multiplying them, which leaves $5^{5-4}$; $15625$ converts the top but then forgets to divide at all; $\\frac{1}{5}$ subtracts the exponents exactly as written, $5^{3-4}$, without ever matching the bases.)',
    },
  ],
  // 2. A square root halves an exponent — not the number, and not the base.
  [
    {
      q: 'Evaluate $\\sqrt{2^{14}}$.',
      choices: ['$16384$', '$128$', '$8192$', '$7$'],
      answer: 1,
      solution: 'A square root is a $\\frac{1}{2}$ power, so it HALVES the exponent: $\\sqrt{2^{14}} = \\left(2^{14}\\right)^{1/2} = 2^{14/2} = 2^7 = 128$. Check in the forward direction: $128^2 = 16384$, and $2^{14} = 16384$ as well. ✓ ($16384$ is $2^{14}$ itself, with the root never taken; $8192$ halves the VALUE, $16384 \\div 2$, instead of the exponent; $7$ reports the halved exponent and forgets to turn it back into a power.)',
    },
    {
      q: 'Evaluate $\\sqrt{5^6}$.',
      choices: ['$15625$', '$25$', '$125$', '$3$'],
      answer: 2,
      solution: 'Halve the exponent: $\\sqrt{5^6} = 5^{6/2} = 5^3 = 125$. Check forwards: $125^2 = 15625$, and $5^6 = 15625$. ✓ ($15625$ is $5^6$ with the root skipped; $25$ divides the exponent by $3$ instead of by $2$ — that is the CUBE root, since $25^3 = 15625$; $3$ is the halved exponent reported as if it were the answer.)',
    },
    {
      q: 'Evaluate $\\sqrt{9^5}$.',
      choices: ['$59049$', '$81$', '$729$', '$243$'],
      answer: 3,
      solution: 'Halving $5$ does not give a whole number, so route through base $3$: $9 = 3^2$, so $9^5 = 3^{10}$, and $\\sqrt{3^{10}} = 3^5 = 243$. (Same thing in one line: $\\sqrt{9^5} = \\left(9^{1/2}\\right)^5 = 3^5$.) Check forwards: $243^2 = 59049$, and $9^5 = 59049$. ✓ ($59049$ is $9^5$ with no root taken; $81 = 9^2$ rounds the halved exponent $\\frac{5}{2}$ down to $2$; $729 = 9^3$ rounds it up to $3$ — the true answer sits between them, which is exactly why the base has to change.)',
    },
  ],
  // 3. Numbers balanced around a round centre: (n - d)(n + d) = n^2 - d^2.
  [
    {
      q: 'Compute $84 \\times 96$.',
      choices: ['$8064$', '$8100$', '$8136$', '$8094$'],
      answer: 0,
      solution: 'The two factors sit the same distance from $90$, so write them as $(90 - 6)(90 + 6)$ and distribute twice: $8100 + 540 - 540 - 36$. The middle terms cancel, leaving $8100 - 36 = 8064$. ($8100$ is just $90^2$, with the $-36$ dropped; $8136$ adds the $36$ instead of subtracting it; $8094$ subtracts the distance $6$ rather than its square.)',
    },
    {
      q: 'Compute $95 \\times 105$.',
      choices: ['$10000$', '$10025$', '$9975$', '$9995$'],
      answer: 2,
      solution: 'Both factors are $5$ away from $100$, so $(100 - 5)(100 + 5) = 10000 + 500 - 500 - 25 = 10000 - 25 = 9975$. Distributing twice makes the two middle terms cancel every time the factors are balanced around a centre. ($10000$ is $100^2$ with the correction forgotten; $10025$ adds $25$ instead of subtracting; $9995$ subtracts the distance $5$ instead of $5^2$.)',
    },
    {
      q: 'Compute $34 \\times 26$.',
      choices: ['$900$', '$916$', '$896$', '$884$'],
      answer: 3,
      solution: 'The centre is $30$ and both factors are $4$ away: $(30 + 4)(30 - 4) = 900 - 120 + 120 - 16 = 900 - 16 = 884$. ($900$ is $30^2$ alone; $916$ adds the $16$; $896$ subtracts the distance $4$ rather than $4^2 = 16$.)',
    },
  ],
  // 4. Squaring is a fair referee for positive numbers.
  [
    {
      q: 'Which statement about $\\sqrt{80}$ and $9$ is true?',
      choices: ['$\\sqrt{80} > 9$', '$\\sqrt{80} < 9$', '$\\sqrt{80} = 9$', '$\\sqrt{80}$ is irrational, so it cannot be compared with $9$'],
      answer: 1,
      solution: 'Both numbers are positive, so compare their squares: $\\left(\\sqrt{80}\\right)^2 = 80$ and $9^2 = 81$. Since $80 < 81$, we get $\\sqrt{80} < 9$. ($\\sqrt{80} > 9$ has the comparison backwards — $80$ falls just short of $81$; $\\sqrt{80} = 9$ would require $80 = 81$; and irrational numbers sit on the number line like everyone else, so of course they can be compared — $\\sqrt{80}$ is simply a little under $9$.)',
    },
    {
      q: 'Which statement about $\\sqrt{27}$ and $5.2$ is true?',
      choices: ['$\\sqrt{27} > 5.2$', '$\\sqrt{27} = 5.2$', '$\\sqrt{27} < 5.2$', '$\\sqrt{27} > 6$'],
      answer: 2,
      solution: 'Square both sides of each candidate. Exactly: $5.2^2 = 27.04$, and $\\left(\\sqrt{27}\\right)^2 = 27$. Since $27 < 27.04$ and both numbers are positive, $\\sqrt{27} < 5.2$. ($\\sqrt{27} > 5.2$ reverses it — the gap is only $0.04$, so estimating by eye is not safe here; $\\sqrt{27} = 5.2$ would need $27 = 27.04$; $\\sqrt{27} > 6$ is far off, since $6^2 = 36$ and $27 < 36$.)',
    },
    {
      q: 'Which comparison is correct?',
      choices: ['$3\\sqrt{5} = \\sqrt{44}$', '$3\\sqrt{5} < \\sqrt{44}$', '$\\sqrt{44} > 7$', '$3\\sqrt{5} > \\sqrt{44}$'],
      answer: 3,
      solution: 'Square both numbers, since both are positive: $\\left(3\\sqrt{5}\\right)^2 = 9 \\cdot 5 = 45$, while $\\left(\\sqrt{44}\\right)^2 = 44$. Because $45 > 44$, we get $3\\sqrt{5} > \\sqrt{44}$. ($3\\sqrt{5} < \\sqrt{44}$ reverses the comparison; $3\\sqrt{5} = \\sqrt{44}$ would need $45 = 44$; and $\\sqrt{44} > 7$ is false because $7^2 = 49$ and $44 < 49$ — moving the coefficient $3$ inside the radical as $\\sqrt{45}$ is the clean way to see all of this at once.)',
    },
  ],
  // 5. Distribute, gather the variable on one side, then undo in reverse order.
  [
    {
      q: 'Solve $5(x - 4) = 3x + 6$.',
      choices: ['$13$', '$5$', '$-7$', '$26$'],
      answer: 0,
      solution: 'Distribute the $5$ to BOTH terms: $5x - 20 = 3x + 6$. Subtract $3x$: $2x - 20 = 6$. Add $20$: $2x = 26$. Divide by $2$: $x = 13$. Substitute back into the original: the left side is $5(13 - 4) = 5 \\cdot 9 = 45$ and the right side is $3 \\cdot 13 + 6 = 45$. Both sides are exactly equal. ✓ ($5$ comes from writing $5x - 4$, distributing to the $x$ only; $-7$ comes from $5x + 20$, forgetting that the $5$ multiplies a NEGATIVE $4$; $26$ stops at the line $2x = 26$ without the final division.)',
    },
    {
      q: 'Solve $5(x + 2) = 3x + 24$.',
      choices: ['$11$', '$7$', '$17$', '$14$'],
      answer: 1,
      solution: 'Distribute: $5x + 10 = 3x + 24$. Subtract $3x$: $2x + 10 = 24$. Subtract $10$: $2x = 14$, so $x = 7$. Substitute back: the left side is $5(7 + 2) = 45$, the right side is $3 \\cdot 7 + 24 = 45$. Equal. ✓ ($11$ comes from $5x + 2$, distributing to the $x$ only; $17$ flips the sign to $5x - 10$; $14$ is the value of $2x$, one division short of the answer.)',
    },
    {
      q: 'Solve $3(x + 4) = 5(x - 2)$.',
      choices: ['$3$', '$1$', '$11$', '$22$'],
      answer: 2,
      solution: 'Distribute on both sides: $3x + 12 = 5x - 10$. Subtract $3x$: $12 = 2x - 10$. Add $10$: $22 = 2x$, so $x = 11$. Substitute back: the left side is $3(11 + 4) = 3 \\cdot 15 = 45$ and the right side is $5(11 - 2) = 5 \\cdot 9 = 45$. Equal. ✓ ($3$ comes from $3x + 4 = 5x - 2$, distributing only to the $x$ on each side; $1$ comes from $5x + 10$, missing that the $5$ multiplies a negative $2$; $22$ is $2x$, not $x$.)',
    },
  ],
  // 6. A negative fractional exponent: flip, then root, then power.
  [
    {
      q: 'Evaluate $\\left(\\frac{1}{9}\\right)^{-3/2}$.',
      choices: ['$27$', '$\\frac{1}{27}$', '$-27$', '$\\frac{27}{2}$'],
      answer: 0,
      solution: 'Take the pieces one at a time. The minus sign in the exponent means reciprocal, so the fraction flips: $\\left(\\frac{1}{9}\\right)^{-3/2} = 9^{3/2}$. Now root first, then power: $9^{1/2} = 3$ because $3^2 = 9$, and $3^3 = 27$. ($\\frac{1}{27}$ is $\\left(\\frac{1}{9}\\right)^{3/2}$ — the flip never happened; $-27$ reads the minus sign as making the ANSWER negative, but a negative exponent produces a reciprocal, not a negative number; $\\frac{27}{2}$ multiplies $9$ by the exponent $\\frac{3}{2}$, and an exponent is not a factor.)',
    },
    {
      q: 'Evaluate $\\left(\\frac{1}{32}\\right)^{-2/5}$.',
      choices: ['$\\frac{1}{4}$', '$-4$', '$4$', '$1024$'],
      answer: 2,
      solution: 'The negative exponent flips the fraction: $\\left(\\frac{1}{32}\\right)^{-2/5} = 32^{2/5}$. Root first: $32^{1/5} = 2$, because $2^5 = 32$. Then the power: $2^2 = 4$. ($\\frac{1}{4}$ forgets to flip; $-4$ turns the minus into a negative answer instead of a reciprocal; $1024 = 32^2$ applies the top of the exponent but never takes the fifth root — rooting first is what keeps the numbers small.)',
    },
    {
      q: 'Evaluate $\\left(\\frac{8}{27}\\right)^{-2/3}$.',
      choices: ['$\\frac{4}{9}$', '$-\\frac{9}{4}$', '$\\frac{3}{2}$', '$\\frac{9}{4}$'],
      answer: 3,
      solution: 'Flip first: $\\left(\\frac{8}{27}\\right)^{-2/3} = \\left(\\frac{27}{8}\\right)^{2/3}$. The cube root hits top and bottom: $27^{1/3} = 3$ since $3^3 = 27$, and $8^{1/3} = 2$ since $2^3 = 8$, so the cube root is $\\frac{3}{2}$. Now square: $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$. ($\\frac{4}{9}$ skips the flip; $-\\frac{9}{4}$ reads the minus as a negative sign; $\\frac{3}{2}$ stops after the root and never squares.)',
    },
  ],
  // 7. Counting integers inside a bound set by a square root.
  [
    {
      q: 'How many integers $n$ satisfy $|n| \\le \\sqrt{50}$?',
      choices: ['$15$', '$14$', '$8$', '$7$'],
      answer: 0,
      solution: 'Squeeze $50$ between perfect squares: $49 < 50 < 64$, so $7 < \\sqrt{50} < 8$. An integer $n$ satisfies $|n| \\le \\sqrt{50}$ exactly when $|n| \\le 7$, which means $n$ runs from $-7$ to $7$. That is $7$ negatives, $7$ positives, and $0$: $15$ integers. ($14$ forgets $0$; $8$ counts only $0$ through $7$; $7$ counts only $1$ through $7$, ignoring both $0$ and every negative.)',
    },
    {
      q: 'How many integers $n$ satisfy $|n| \\le \\sqrt{64}$?',
      choices: ['$15$', '$17$', '$16$', '$8$'],
      answer: 1,
      solution: 'Here the bound is exact: $\\sqrt{64} = 8$, since $8^2 = 64$. The condition $|n| \\le 8$ allows $n = -8, -7, \\ldots, 7, 8$ — and because the sign is $\\le$, both endpoints count. That is $8 + 8 + 1 = 17$ integers. ($15$ drops the two endpoints $\\pm 8$, as if the sign were $<$; $16$ forgets $0$; $8$ counts only $1$ through $8$.)',
    },
    {
      q: 'How many integers $n$ satisfy $\\sqrt{10} < n < \\sqrt{90}$?',
      choices: ['$7$', '$5$', '$8$', '$6$'],
      answer: 3,
      solution: 'Pin down each end with perfect squares. Since $9 < 10 < 16$, we have $3 < \\sqrt{10} < 4$. Since $81 < 90 < 100$, we have $9 < \\sqrt{90} < 10$. So $n$ must be strictly bigger than a number just above $3$ and strictly smaller than a number just below $10$: the integers $4, 5, 6, 7, 8, 9$, which is $6$ of them. ($7$ also counts $3$, but $3 < \\sqrt{10}$; $8$ counts both $3$ and $10$, and $10 > \\sqrt{90}$; $5$ drops the $9$, forgetting that $9 < \\sqrt{90}$.)',
    },
  ],
  // 8. Rationalize, simplify, then combine like radicals.
  [
    {
      q: 'Compute $\\frac{12}{\\sqrt{3}} + \\sqrt{27}$.',
      choices: ['$7\\sqrt{3}$', '$\\sqrt{39}$', '$7\\sqrt{6}$', '$12\\sqrt{3}$'],
      answer: 0,
      solution: 'Rationalize the first term by multiplying top and bottom by $\\sqrt{3}$: $\\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$. Simplify the second: $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$. Now they are like radicals, so the counts add: $4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}$. ($\\sqrt{39}$ adds $12$ and $27$ under one root, but roots never split over sums; $7\\sqrt{6}$ adds the two $3$s under the radical as well as the counts outside; $12\\sqrt{3}$ multiplies the counts $4$ and $3$ instead of adding them.)',
    },
    {
      q: 'Compute $\\frac{14}{\\sqrt{7}} + \\sqrt{63}$.',
      choices: ['$\\sqrt{77}$', '$5\\sqrt{7}$', '$5\\sqrt{14}$', '$6\\sqrt{7}$'],
      answer: 1,
      solution: 'Rationalize: $\\frac{14}{\\sqrt{7}} = \\frac{14\\sqrt{7}}{7} = 2\\sqrt{7}$. Simplify: $\\sqrt{63} = \\sqrt{9 \\cdot 7} = 3\\sqrt{7}$. Same radical, so add the counts: $2\\sqrt{7} + 3\\sqrt{7} = 5\\sqrt{7}$. ($\\sqrt{77}$ adds $14$ and $63$ under the root; $5\\sqrt{14}$ adds the $7$s inside as well; $6\\sqrt{7}$ multiplies $2$ by $3$ instead of adding.)',
    },
    {
      q: 'Compute $\\sqrt{50} - \\frac{6}{\\sqrt{2}}$.',
      choices: ['$\\sqrt{44}$', '$8\\sqrt{2}$', '$2\\sqrt{2}$', '$2$'],
      answer: 2,
      solution: 'Simplify the first term: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$. Rationalize the second: $\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$. Now subtract like radicals: $5\\sqrt{2} - 3\\sqrt{2} = 2\\sqrt{2}$. ($\\sqrt{44}$ subtracts $6$ from $50$ under the root; $8\\sqrt{2}$ adds where the problem subtracts; $2$ counts the pieces correctly but then drops the $\\sqrt{2}$ that every piece carries.)',
    },
  ],
  // 9. Nudge a known power without ever solving for the exponent.
  [
    {
      q: 'If $2^k = 32$, what is $2^{k+3}$?',
      choices: ['$96$', '$256$', '$35$', '$64$'],
      answer: 1,
      solution: 'The product law splits the exponent: $2^{k+3} = 2^k \\cdot 2^3 = 32 \\cdot 8 = 256$. (Slower route, same answer: $2^5 = 32$ so $k = 5$, and $2^8 = 256$.) ($96$ multiplies by the added exponent $3$ instead of by $2^3$; $35$ adds $3$ to the VALUE rather than to the exponent; $64$ climbs only one power, $32 \\cdot 2$.)',
    },
    {
      q: 'If $5^m = 125$, what is $5^{m-1}$?',
      choices: ['$124$', '$120$', '$25$', '$625$'],
      answer: 2,
      solution: 'Dropping the exponent by $1$ divides by one copy of the base: $5^{m-1} = \\frac{5^m}{5} = \\frac{125}{5} = 25$. (Check: $5^3 = 125$ so $m = 3$, and $5^2 = 25$.) ($124$ subtracts $1$ from the value instead of from the exponent; $120$ subtracts $5$ from the value; $625$ multiplies by $5$, going the wrong way — a smaller exponent means a smaller power.)',
    },
    {
      q: 'If $7^t = 49$, what is $7^{2t}$?',
      choices: ['$98$', '$343$', '$4$', '$2401$'],
      answer: 3,
      solution: 'Doubling an exponent squares the power: $7^{2t} = \\left(7^t\\right)^2 = 49^2 = 2401$. (Check: $7^2 = 49$ so $t = 2$, and $7^4 = 2401$.) ($98$ doubles the VALUE, $49 \\cdot 2$, instead of the exponent; $343 = 7^3$ raises the exponent by $1$ rather than doubling it; $4$ reports $2t$ itself and never turns it back into a power.)',
    },
  ],
  // 10. Two fractional-exponent terms ADDED — the exponents must not combine.
  [
    {
      q: 'Evaluate $16^{1/2} + 16^{-1/2}$.',
      choices: ['$\\frac{17}{4}$', '$\\frac{15}{4}$', '$1$', '$8$'],
      answer: 0,
      solution: 'Handle each term on its own. $16^{1/2} = \\sqrt{16} = 4$, since $4^2 = 16$. The minus sign means reciprocal: $16^{-1/2} = \\frac{1}{4}$. Their sum is $4 + \\frac{1}{4} = \\frac{16}{4} + \\frac{1}{4} = \\frac{17}{4}$. ($\\frac{15}{4}$ reads the negative exponent as an instruction to subtract; $1$ adds the exponents to get $16^0$, but the exponent laws combine powers that are MULTIPLIED, and these are added; $8$ ignores the minus sign entirely and doubles the $4$.)',
    },
    {
      q: 'Evaluate $8^{1/3} + 8^{-2/3}$.',
      choices: ['$\\frac{7}{4}$', '$\\frac{1}{2}$', '$\\frac{9}{4}$', '$6$'],
      answer: 2,
      solution: 'One term at a time. $8^{1/3} = 2$, because $2^3 = 8$. For the second, the minus means reciprocal and $\\frac{2}{3}$ means root then power: $8^{2/3} = 2^2 = 4$, so $8^{-2/3} = \\frac{1}{4}$. The sum is $2 + \\frac{1}{4} = \\frac{8}{4} + \\frac{1}{4} = \\frac{9}{4}$. ($\\frac{7}{4}$ subtracts instead of adding; $\\frac{1}{2}$ adds the exponents to get $8^{-1/3}$, which is only legal when the powers are multiplied; $6$ drops the minus sign and computes $2 + 4$.)',
    },
    {
      q: 'Evaluate $27^{2/3} - 27^{-1/3}$.',
      choices: ['$\\frac{28}{3}$', '$3$', '$6$', '$\\frac{26}{3}$'],
      answer: 3,
      solution: 'Separately: $27^{1/3} = 3$ since $3^3 = 27$, so $27^{2/3} = 3^2 = 9$, and $27^{-1/3} = \\frac{1}{3}$. Now subtract: $9 - \\frac{1}{3} = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}$. ($\\frac{28}{3}$ adds where the problem subtracts; $3$ subtracts the exponents to get $27^{1/3}$, but subtracting exponents is the rule for DIVIDING powers, not for subtracting them; $6$ treats $27^{-1/3}$ as $3$, missing that the minus makes a reciprocal.)',
    },
  ],
  // 11. A short sum of negative powers, over a common denominator.
  [
    {
      q: 'Compute $3^{-1} + 3^{-2} + 3^{-3}$.',
      choices: ['$\\frac{13}{27}$', '$\\frac{1}{729}$', '$-\\frac{13}{27}$', '$\\frac{1}{9}$'],
      answer: 0,
      solution: 'Each negative exponent is a reciprocal: $\\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27}$. Put everything over $27$: $\\frac{9}{27} + \\frac{3}{27} + \\frac{1}{27} = \\frac{13}{27}$. ($\\frac{1}{729}$ adds the exponents to get $3^{-6}$, which is the rule for multiplying the terms, not adding them; $-\\frac{13}{27}$ reads the negative exponents as negative numbers, but $3^{-1} = \\frac{1}{3}$ is positive; $\\frac{1}{9} = \\frac{3}{27}$ comes from writing $\\frac{1 + 1 + 1}{27}$, keeping the numerators without rescaling them.)',
    },
    {
      q: 'Compute $2^{-2} + 2^{-3} + 2^{-4} + 2^{-5}$.',
      choices: ['$\\frac{31}{32}$', '$\\frac{15}{32}$', '$\\frac{1}{16384}$', '$\\frac{1}{8}$'],
      answer: 1,
      solution: 'Write the reciprocals: $\\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\frac{1}{32}$. Over the common denominator $32$: $\\frac{8 + 4 + 2 + 1}{32} = \\frac{15}{32}$. ($\\frac{31}{32}$ throws in $2^{-1} = \\frac{1}{2}$ as well, one term more than the problem asks for; $\\frac{1}{16384} = 2^{-14}$ adds the exponents $-2, -3, -4, -5$, which is the multiplying rule; $\\frac{1}{8} = \\frac{4}{32}$ adds the four numerators over $32$ without rescaling each fraction first.)',
    },
    {
      q: 'Compute $10^{-1} + 10^{-2} + 10^{-3}$.',
      choices: ['$\\frac{3}{1000}$', '$\\frac{1}{1000000}$', '$\\frac{111}{1000}$', '$-\\frac{111}{1000}$'],
      answer: 2,
      solution: 'The terms are $\\frac{1}{10} + \\frac{1}{100} + \\frac{1}{1000}$. Over $1000$: $\\frac{100 + 10 + 1}{1000} = \\frac{111}{1000}$. (As a decimal that is $0.1 + 0.01 + 0.001 = 0.111$, which is a neat way to check.) ($\\frac{3}{1000}$ writes $\\frac{1 + 1 + 1}{1000}$, keeping the numerators instead of rescaling; $\\frac{1}{1000000} = 10^{-6}$ adds the exponents, which only applies when powers are multiplied; $-\\frac{111}{1000}$ mistakes a negative exponent for a negative number.)',
    },
  ],
  // 12. Choose the constant that turns an equation into an identity.
  [
    {
      q: 'For what value of $k$ does the equation $5x + k = 5(x + 3)$ hold for EVERY number $x$?',
      choices: ['$3$', '$15$', '$5$', 'No such value exists'],
      answer: 1,
      solution: 'Distribute the right side: $5(x + 3) = 5x + 15$. The equation becomes $5x + k = 5x + 15$, and subtracting $5x$ from both sides leaves $k = 15$. With $k = 15$ the two sides are literally the same expression, so every $x$ works; with any other $k$ the equation would demand two different constants be equal, so NO $x$ would work. ($3$ takes the number inside the parentheses without multiplying it by $5$; $5$ takes the multiplier itself; and a value does exist, so the last choice is wrong.)',
    },
    {
      q: 'For what value of $b$ does the equation $4(x - b) = 4x - 20$ hold for EVERY number $x$?',
      choices: ['$5$', '$20$', '$-5$', '$80$'],
      answer: 0,
      solution: 'Distribute the left side: $4(x - b) = 4x - 4b$. Matching against $4x - 20$ gives $-4b = -20$, so $b = 5$. Check by substituting: $4(x - 5) = 4x - 20$, which is true for every $x$. ✓ ($20$ reads the constant straight off without dividing by $4$; $-5$ flips the sign, but $4(x + 5) = 4x + 20$, not $4x - 20$; $80$ multiplies by $4$ instead of dividing.)',
    },
    {
      q: 'For what value of $c$ does the equation $7x + c = 7(x - 2)$ hold for EVERY number $x$?',
      choices: ['$14$', '$-2$', '$2$', '$-14$'],
      answer: 3,
      solution: 'Distribute the right side, remembering that the $7$ multiplies a NEGATIVE $2$: $7(x - 2) = 7x - 14$. So $7x + c = 7x - 14$, and subtracting $7x$ gives $c = -14$. Check: $7x + (-14) = 7x - 14$, true for every $x$. ✓ ($14$ loses the minus sign; $-2$ takes the number inside without multiplying by $7$; $2$ loses both the minus sign and the multiplication.)',
    },
  ],
]

const worksheet = [
  // 1. Order of operations: group, exponent, multiply, then add or subtract.
  [
    {
      q: 'Evaluate $7 + 2(9 - 5)^2$.',
      answer: '$39$',
      solution: 'Grouping symbols first: $9 - 5 = 4$. Then the exponent: $4^2 = 16$. Then the multiplication: $2 \\times 16 = 32$. Addition comes last: $7 + 32 = 39$. (Adding $7 + 2$ first would give $9 \\times 16 = 144$, and squaring the product would give $8^2 = 64$ — the exponent grabs only the $4$.)',
    },
    {
      q: 'Evaluate $30 - 4(8 - 6)^3$.',
      answer: '$-2$',
      solution: 'Inside the parentheses: $8 - 6 = 2$. The exponent next: $2^3 = 8$. Then multiply: $4 \\times 8 = 32$. Subtraction is last: $30 - 32 = -2$. The answer is negative, and that is fine — the product simply outgrew the $30$. (Subtracting first would give $26 \\times 8 = 208$, a completely different number.)',
    },
    {
      q: 'Evaluate $5(3 + 4)^2 - 100$.',
      answer: '$145$',
      solution: 'Innermost group first: $3 + 4 = 7$. Exponent: $7^2 = 49$. Multiply: $5 \\times 49 = 245$. Subtract: $245 - 100 = 145$. (The exponent applies only to the $7$, so this is not $(5 \\cdot 7)^2 = 1225$.)',
    },
  ],
  // 2. Distribution as a mental-arithmetic tool.
  [
    {
      q: 'Compute $63 \\times 98$ using the distributive property.',
      answer: '$6174$',
      solution: 'Write $98 = 100 - 2$ and distribute: $63 \\times 98 = 63 \\times 100 - 63 \\times 2 = 6300 - 126 = 6174$. Distributing over a difference works the same way — the second product gets subtracted.',
    },
    {
      q: 'Compute $47 \\times 101$ using the distributive property.',
      answer: '$4747$',
      solution: 'Write $101 = 100 + 1$: then $47 \\times 101 = 4700 + 47 = 4747$. Multiplying a two-digit number by $101$ always writes it twice like this.',
    },
    {
      q: 'Compute $86 \\times 999$ using the distributive property.',
      answer: '$85914$',
      solution: 'Write $999 = 1000 - 1$: then $86 \\times 999 = 86000 - 86 = 85914$. One subtraction beats a three-row long multiplication.',
    },
  ],
  // 3. One- and two-step equations, undone in reverse order.
  [
    {
      q: 'Solve $6x + 7 = 43$.',
      answer: '$x = 6$',
      solution: 'The $x$ was multiplied by $6$, then $7$ was added, so undo in reverse: subtract $7$ from both sides to get $6x = 36$, then divide both sides by $6$ to get $x = 6$. Check in the original: $6 \\cdot 6 + 7 = 36 + 7 = 43$. ✓',
    },
    {
      q: 'Solve $5x - 12 = -27$.',
      answer: '$x = -3$',
      solution: 'Add $12$ to both sides: $5x = -27 + 12 = -15$. Divide both sides by $5$: $x = -3$. Check in the original: $5(-3) - 12 = -15 - 12 = -27$. ✓ A negative solution is perfectly legal — the golden rule of equations never cared about signs.',
    },
    {
      q: 'Solve $9 - 2x = 1$.',
      answer: '$x = 4$',
      solution: 'Here $x$ is being subtracted, so keep the minus sign glued to it. Subtract $9$ from both sides: $-2x = 1 - 9 = -8$. Divide both sides by $-2$: $x = 4$. Check in the original: $9 - 2 \\cdot 4 = 9 - 8 = 1$. ✓',
    },
  ],
  // 4. The product, power, and quotient laws in one expression.
  [
    {
      q: 'Simplify $\\frac{2^6 \\cdot 2^5}{2^7}$.',
      answer: '$16$',
      solution: 'Same base on top, so add the exponents: $2^6 \\cdot 2^5 = 2^{11}$. Dividing subtracts: $2^{11-7} = 2^4 = 16$. Check the arithmetic: $\\frac{64 \\cdot 32}{128} = \\frac{2048}{128} = 16$. ✓',
    },
    {
      q: 'Simplify $\\frac{5^3 \\cdot 5^4}{5^5}$.',
      answer: '$25$',
      solution: 'Add the exponents on top: $5^3 \\cdot 5^4 = 5^7$. Subtract for the division: $5^{7-5} = 5^2 = 25$. Check: $\\frac{125 \\cdot 625}{3125} = \\frac{78125}{3125} = 25$. ✓',
    },
    {
      q: 'Simplify $\\frac{\\left(2^4\\right)^3}{2^7 \\cdot 2^2}$.',
      answer: '$8$',
      solution: 'A power of a power multiplies the exponents: $\\left(2^4\\right)^3 = 2^{12}$. The bottom is a product of like bases, so its exponents add: $2^7 \\cdot 2^2 = 2^9$. Now divide: $2^{12-9} = 2^3 = 8$. (Careful not to add the exponents on top — multiplying powers adds, but raising a power multiplies.)',
    },
  ],
  // 5. Fractional exponents: root first, then power.
  [
    {
      q: 'Evaluate $32^{3/5}$.',
      answer: '$8$',
      solution: 'Root first, then power. The fifth root: $32^{1/5} = 2$, because $2^5 = 32$. Then cube it: $2^3 = 8$. (Rooting first keeps the numbers small — cubing $32$ first would leave you hunting for the fifth root of $32768$.)',
    },
    {
      q: 'Evaluate $125^{2/3}$.',
      answer: '$25$',
      solution: 'Cube root first: $125^{1/3} = 5$, because $5^3 = 125$. Then square: $5^2 = 25$.',
    },
    {
      q: 'Evaluate $27^{4/3}$.',
      answer: '$81$',
      solution: 'Cube root first: $27^{1/3} = 3$, because $3^3 = 27$. Then raise to the fourth power: $3^4 = 81$. Notice the exponent is bigger than $1$, so the answer is bigger than $27$ — as it must be.',
    },
  ],
  // 6. Pull out the LARGEST perfect square.
  [
    {
      q: 'Simplify $\\sqrt{147}$.',
      answer: '$7\\sqrt{3}$',
      solution: 'The largest perfect square dividing $147$ is $49$, since $147 = 49 \\cdot 3$. Split the root: $\\sqrt{147} = \\sqrt{49} \\cdot \\sqrt{3} = 7\\sqrt{3}$. Check: $\\left(7\\sqrt{3}\\right)^2 = 49 \\cdot 3 = 147$. ✓',
    },
    {
      q: 'Simplify $\\sqrt{108}$.',
      answer: '$6\\sqrt{3}$',
      solution: 'The largest perfect square dividing $108$ is $36$: $\\sqrt{108} = \\sqrt{36} \\cdot \\sqrt{3} = 6\\sqrt{3}$. Check: $\\left(6\\sqrt{3}\\right)^2 = 36 \\cdot 3 = 108$. ✓ (Using $108 = 4 \\cdot 27$ gives $2\\sqrt{27}$, which is correct but unfinished — $\\sqrt{27}$ still hides a square factor.)',
    },
    {
      q: 'Simplify $\\sqrt{252}$.',
      answer: '$6\\sqrt{7}$',
      solution: 'Hunt for the biggest square factor: $252 = 36 \\cdot 7$, and $7$ has no square factors left. So $\\sqrt{252} = \\sqrt{36} \\cdot \\sqrt{7} = 6\\sqrt{7}$. Check: $\\left(6\\sqrt{7}\\right)^2 = 36 \\cdot 7 = 252$. ✓',
    },
  ],
  // 7. Clearing a radical out of the denominator.
  [
    {
      q: 'Rationalize $\\frac{15}{\\sqrt{5}}$.',
      answer: '$3\\sqrt{5}$',
      solution: 'Multiply top and bottom by $\\sqrt{5}$ — that is multiplying by $1$, so the value does not change: $\\frac{15}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{15\\sqrt{5}}{5} = 3\\sqrt{5}$. Check: $3\\sqrt{5} \\cdot \\sqrt{5} = 3 \\cdot 5 = 15$. ✓',
    },
    {
      q: 'Rationalize $\\frac{8}{3\\sqrt{2}}$.',
      answer: '$\\frac{4\\sqrt{2}}{3}$',
      solution: 'Only the $\\sqrt{2}$ needs help; the $3$ is already rational. Multiply top and bottom by $\\sqrt{2}$: $\\frac{8}{3\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{3 \\cdot 2} = \\frac{8\\sqrt{2}}{6} = \\frac{4\\sqrt{2}}{3}$. Do not forget the last step of reducing $\\frac{8}{6}$.',
    },
    {
      q: 'Rationalize $\\frac{5}{\\sqrt{20}}$.',
      answer: '$\\frac{\\sqrt{5}}{2}$',
      solution: 'Simplify the denominator first: $\\sqrt{20} = \\sqrt{4} \\cdot \\sqrt{5} = 2\\sqrt{5}$. Now multiply top and bottom by $\\sqrt{5}$: $\\frac{5}{2\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{5\\sqrt{5}}{2 \\cdot 5} = \\frac{5\\sqrt{5}}{10} = \\frac{\\sqrt{5}}{2}$. Simplifying the radical before rationalizing keeps the numbers small.',
    },
  ],
  // 8. Scale the whole equation instead of solving for x first.
  [
    {
      q: 'If $4x - 5 = 23$, find the value of $8x + 7$.',
      answer: '$63$',
      solution: 'Double both sides of $4x - 5 = 23$ to get $8x - 10 = 46$, so $8x = 56$ and $8x + 7 = 63$. (Or solve directly: $4x = 28$, so $x = 7$, and $8 \\cdot 7 + 7 = 63$ — same answer, one more step.)',
    },
    {
      q: 'If $3x + 8 = 26$, find the value of $9x - 5$.',
      answer: '$49$',
      solution: 'Notice $9x$ is TRIPLE $3x$. Tripling both sides of $3x + 8 = 26$ gives $9x + 24 = 78$, so $9x = 54$ and $9x - 5 = 49$. (Or directly: $3x = 18$, so $x = 6$, and $9 \\cdot 6 - 5 = 49$.)',
    },
    {
      q: 'If $2x + 9 = 1$, find the value of $6x - 4$.',
      answer: '$-28$',
      solution: 'Multiply both sides of $2x + 9 = 1$ by $3$: $6x + 27 = 3$, so $6x = -24$ and $6x - 4 = -28$. (Or directly: $2x = -8$, so $x = -4$, and $6(-4) - 4 = -24 - 4 = -28$.) Keep every minus sign glued to its number and the shortcut works just as well with negatives.',
    },
  ],
  // 9. A negative fractional exponent applied to a fraction.
  [
    {
      q: 'Evaluate $\\left(\\frac{25}{4}\\right)^{-1/2}$.',
      answer: '$\\frac{2}{5}$',
      solution: 'The negative exponent flips the fraction: $\\left(\\frac{4}{25}\\right)^{1/2}$. The square root hits top and bottom: $\\frac{\\sqrt{4}}{\\sqrt{25}} = \\frac{2}{5}$. Check: $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$, the flipped fraction. ✓',
    },
    {
      q: 'Evaluate $\\left(\\frac{8}{125}\\right)^{-1/3}$.',
      answer: '$\\frac{5}{2}$',
      solution: 'Flip first: $\\left(\\frac{125}{8}\\right)^{1/3}$. The cube root hits top and bottom: $125^{1/3} = 5$ because $5^3 = 125$, and $8^{1/3} = 2$ because $2^3 = 8$. So the answer is $\\frac{5}{2}$.',
    },
    {
      q: 'Evaluate $\\left(\\frac{4}{9}\\right)^{-3/2}$.',
      answer: '$\\frac{27}{8}$',
      solution: 'Flip, then root, then power. Flipping gives $\\left(\\frac{9}{4}\\right)^{3/2}$. The square root of top and bottom: $\\frac{3}{2}$. Then cube: $\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$.',
    },
  ],
  // 10. Simplify each radical, then combine the like ones.
  [
    {
      q: 'Compute $\\sqrt{50} + \\sqrt{18} - \\sqrt{2}$.',
      answer: '$7\\sqrt{2}$',
      solution: 'Simplify each piece: $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$ and $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$. All three terms are now $\\sqrt{2}$s, so combine the counts: $5 + 3 - 1 = 7$, giving $7\\sqrt{2}$.',
    },
    {
      q: 'Compute $\\sqrt{80} - \\sqrt{20} + \\sqrt{5}$.',
      answer: '$3\\sqrt{5}$',
      solution: 'Simplify each: $\\sqrt{80} = \\sqrt{16 \\cdot 5} = 4\\sqrt{5}$ and $\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. Combine the counts: $4 - 2 + 1 = 3$, so the answer is $3\\sqrt{5}$. (Work left to right — the $+\\sqrt{5}$ is added, not bundled with the $\\sqrt{20}$.)',
    },
    {
      q: 'Compute $\\sqrt{175} + \\sqrt{28} - \\sqrt{63}$.',
      answer: '$4\\sqrt{7}$',
      solution: 'Every radicand hides a multiple of $7$: $\\sqrt{175} = \\sqrt{25 \\cdot 7} = 5\\sqrt{7}$, $\\sqrt{28} = \\sqrt{4 \\cdot 7} = 2\\sqrt{7}$, and $\\sqrt{63} = \\sqrt{9 \\cdot 7} = 3\\sqrt{7}$. Now they are like radicals: $5 + 2 - 3 = 4$, so the answer is $4\\sqrt{7}$.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 1,
  challenge,
  worksheet,
}
