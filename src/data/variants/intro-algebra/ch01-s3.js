// Introduction to Algebra chapter 1 — variations for sections 1.7 and 1.8.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every root was verified in the FORWARD direction by integer exponentiation:
//    to claim 81^(1/4) = 3 we checked 3*3*3*3 = 81, never a decimal root.
//  - Every a^(m/n) was computed root-first AND power-first, and the two agree.
//  - No keyed answer here can be reached by the two mistakes the section warns
//    about — reading the exponent as a multiplier (4^(3/2) as 4 * 3/2 = 6) or
//    halving instead of rooting. Bases where those coincide with the true value
//    (such as 4^(1/2), where 4/2 = 2 = sqrt 4) are avoided entirely.
//  - Every radical answer and distractor is stored mentally as an exact triple
//    (coefficient, squarefree radicand, denominator) and the four triples in a
//    choice list are always different, so no two choices share a value.
//    That is what keeps 2*sqrt(50) and 10*sqrt(2) from ever meeting.
//  - Choices that look "unsimplified" are deliberate: an un-rooted 49*sqrt(2)
//    or a backwards 3*sqrt(49) IS the student mistake the solution names.

const s17 = [
  // p1 — a^{1/2} is a square root, not half
  [
    {
      q: 'Evaluate $64^{1/2}$.',
      choices: ['$32$', '$8$', '$4096$', '$16$'],
      answer: 1,
      solution:
        'An exponent of $\\frac{1}{2}$ asks for the square root: the number whose square is $64$. Since $8 \\times 8 = 64$, we get $64^{1/2} = 8$. The choice $32$ is half of $64$ — halving is not rooting, and the exponent is not a factor you multiply by. The choice $4096$ is $64^2$, which squares instead of rooting, and $16$ doubles the correct answer.',
    },
    {
      q: 'Evaluate $121^{1/2}$.',
      choices: ['$60.5$', '$14641$', '$22$', '$11$'],
      answer: 3,
      solution:
        'The exponent $\\frac{1}{2}$ means square root. Hunt in the low teens: $10^2 = 100$ is too small and $12^2 = 144$ is too big, while $11 \\times 11 = 121$ lands exactly, so $121^{1/2} = 11$. The choice $60.5$ multiplies $121$ by $\\frac{1}{2}$ as if the exponent were a factor — that is the single most common error here. The choice $14641$ is $121^2$, and $22$ is double the answer.',
    },
    {
      q: 'If $n^{1/2} = 9$, what is $n$?',
      choices: ['$81$', '$4.5$', '$18$', '$3$'],
      answer: 0,
      solution:
        'Run the rule backwards. Since $n^{1/2} = \\sqrt{n}$, we need the number whose square root is $9$, so square both sides: $n = 9^2 = 81$. Check: $81^{1/2} = 9$ because $9 \\times 9 = 81$. The choice $4.5$ halves the $9$ and $18$ doubles it, but neither halving nor doubling undoes a square root. The choice $3$ takes another square root instead of squaring — that is the wrong direction entirely.',
    },
  ],
  // p2 — a^{1/3} is a cube root
  [
    {
      q: 'Evaluate $125^{1/3}$.',
      choices: ['$375$', '$5$', '$\\frac{125}{3}$', '$15$'],
      answer: 1,
      solution:
        'An exponent of $\\frac{1}{3}$ means cube root: we want the number whose cube is $125$. Since $5 \\times 5 \\times 5 = 125$, the answer is $5$. The choice $\\frac{125}{3}$ divides by $3$ as if the exponent were a factor, and $375$ multiplies by $3$ — an exponent does neither. The choice $15$ triples the correct answer.',
    },
    {
      q: 'Evaluate $216^{1/3}$.',
      choices: ['$72$', '$108$', '$6$', '$36$'],
      answer: 2,
      solution:
        'We need the number whose cube is $216$. Try $6$: $6 \\times 6 = 36$ and $36 \\times 6 = 216$, exactly. So $216^{1/3} = 6$. The choice $72$ is $216 \\div 3$, treating the exponent as a divisor. The choice $108$ halves $216$, and $36$ is $6^2$ — that is one step past the cube root, not the cube root itself.',
    },
    {
      q: 'If $n^{1/3} = 4$, what is $n$?',
      choices: ['$12$', '$16$', '$\\frac{4}{3}$', '$64$'],
      answer: 3,
      solution:
        'Since $n^{1/3}$ is the cube root of $n$, we undo it by cubing: $n = 4^3 = 4 \\times 4 \\times 4 = 64$. Check: $64^{1/3} = 4$. The choice $16$ is $4^2$ — squaring undoes a square root, not a cube root. The choice $12$ multiplies by $3$ and $\\frac{4}{3}$ divides by $3$; the $3$ in the exponent counts factors, it is not something you multiply or divide by.',
    },
  ],
  // p3 — fourth roots, with the "that is the square root" trap
  [
    {
      q: 'Evaluate $81^{1/4}$.',
      choices: ['$3$', '$9$', '$20.25$', '$27$'],
      answer: 0,
      solution:
        'A $\\frac{1}{4}$ exponent asks for the fourth root: the number whose FOURTH power is $81$. Since $3 \\times 3 = 9$ and $9 \\times 3 \\times 3 = 81$, we have $3^4 = 81$, so $81^{1/4} = 3$. The choice $9$ is the square root of $81$, one root too few. The choice $20.25$ is $81 \\div 4$, treating the exponent as a divisor, and $27$ is $81 \\div 3$.',
    },
    {
      q: 'Evaluate $625^{1/4}$.',
      choices: ['$156.25$', '$5$', '$25$', '$125$'],
      answer: 1,
      solution:
        'We want the number whose fourth power is $625$. Build it up: $5^2 = 25$ and $25^2 = 625$, so $5^4 = 625$ and $625^{1/4} = 5$. The choice $25$ is the SQUARE root of $625$ — taking two roots gets you to $5$, so stopping at $25$ is only half the journey. The choice $156.25$ is $625 \\div 4$, and $125$ is $5^3$, one power too many.',
    },
    {
      q: 'Evaluate $256^{1/4}$.',
      choices: ['$16$', '$64$', '$4$', '$128$'],
      answer: 2,
      solution:
        'We need the number whose fourth power is $256$. Since $4^2 = 16$ and $16^2 = 256$, we get $4^4 = 256$, so $256^{1/4} = 4$. The choice $16$ is the square root of $256$, not its fourth root. The choice $64$ is $256 \\div 4$, treating the exponent as a divisor, and $128$ halves $256$.',
    },
  ],
  // p4 — a^{m/n}: root first, then power (the "multiplier" trap)
  [
    {
      q: 'Evaluate $9^{3/2}$.',
      choices: ['$27$', '$13.5$', '$729$', '$3$'],
      answer: 0,
      solution:
        'Split the exponent: $9^{3/2} = \\left(9^{1/2}\\right)^3$. Root first: $9^{1/2} = 3$, since $3 \\times 3 = 9$. Then the power: $3^3 = 27$. (Powering first agrees: $9^3 = 729$ and $\\sqrt{729} = 27$, since $27 \\times 27 = 729$ — but the numbers stay much smaller the other way.) The choice $13.5$ multiplies $9 \\times \\frac{3}{2}$, which is not how exponents work. The choice $729$ cubes but never roots, and $3$ stops after the root.',
    },
    {
      q: 'Evaluate $16^{3/2}$.',
      choices: ['$24$', '$4096$', '$64$', '$4$'],
      answer: 2,
      solution:
        'Root first, then power: $16^{1/2} = 4$ because $4 \\times 4 = 16$, and then $4^3 = 64$. (Check the other order: $16^3 = 4096$ and $64 \\times 64 = 4096$, so $\\sqrt{4096} = 64$ — the same answer.) The choice $24$ comes from $16 \\times \\frac{3}{2}$, reading the exponent as a multiplier. The choice $4096$ forgets the square root, and $4$ stops after the root without applying the $3$.',
    },
    {
      q: 'Evaluate $8^{4/3}$.',
      choices: ['$\\frac{32}{3}$', '$4096$', '$2$', '$16$'],
      answer: 3,
      solution:
        'The bottom of the exponent is the root and the top is the power, so take the cube root first: $8^{1/3} = 2$, since $2 \\times 2 \\times 2 = 8$. Then $2^4 = 16$. (Powering first agrees: $8^4 = 4096$, and $16 \\times 16 \\times 16 = 4096$, so the cube root of $4096$ is $16$.) The choice $\\frac{32}{3}$ is $8 \\times \\frac{4}{3}$ — the exponent is not a factor. The choice $4096$ skips the root, and $2$ stops at the root.',
    },
  ],
  // p5 — a^{2/3}: remember the power after the root
  [
    {
      q: 'Evaluate $343^{2/3}$.',
      choices: ['$49$', '$7$', '$14$', '$\\frac{686}{3}$'],
      answer: 0,
      solution:
        'Cube root first: $343^{1/3} = 7$, since $7 \\times 7 \\times 7 = 343$. Then square: $7^2 = 49$. The choice $7$ stops after the root and forgets that the $2$ on top still has work to do. The choice $14$ takes the root correctly but then doubles instead of squaring — the $2$ upstairs is a power, not a multiplier. The choice $\\frac{686}{3}$ multiplies $343$ by $\\frac{2}{3}$, treating the whole exponent as a factor.',
    },
    {
      q: 'Evaluate $216^{2/3}$.',
      choices: ['$6$', '$36$', '$144$', '$72$'],
      answer: 1,
      solution:
        'Take the cube root first: $216^{1/3} = 6$, because $6 \\times 6 \\times 6 = 216$. Then square it: $6^2 = 36$. The choice $6$ stops one step early. The choice $144$ is $216 \\times \\frac{2}{3}$, the multiplier misreading, and $72$ is $216 \\div 3$, which only divides by the bottom of the fraction.',
    },
    {
      q: 'Evaluate $1000^{2/3}$.',
      choices: ['$10$', '$\\frac{2000}{3}$', '$100$', '$1000000$'],
      answer: 2,
      solution:
        'Root first: $1000^{1/3} = 10$, since $10 \\times 10 \\times 10 = 1000$. Then square: $10^2 = 100$. (The other order agrees but is nasty: $1000^2 = 1000000$, whose cube root is $100$ because $100 \\times 100 \\times 100 = 1000000$.) The choice $10$ stops after the root, $1000000$ squares without ever rooting, and $\\frac{2000}{3}$ multiplies $1000$ by $\\frac{2}{3}$.',
    },
  ],
  // p6 — a^{m/n} with a fourth root underneath
  [
    {
      q: 'Evaluate $625^{3/4}$.',
      choices: ['$5$', '$125$', '$25$', '$468.75$'],
      answer: 1,
      solution:
        'Fourth root first: $625^{1/4} = 5$, since $5^2 = 25$ and $25^2 = 625$, so $5^4 = 625$. Then cube: $5^3 = 125$. The choice $5$ stops after the root. The choice $25$ takes only a square root instead of a fourth root, and $468.75$ is $625 \\times \\frac{3}{4}$ — the exponent read as a multiplier.',
    },
    {
      q: 'Evaluate $16^{5/4}$.',
      choices: ['$20$', '$2$', '$32$', '$80$'],
      answer: 2,
      solution:
        'The bottom $4$ is the root and the top $5$ is the power. Root first: $16^{1/4} = 2$, since $2 \\times 2 \\times 2 \\times 2 = 16$. Then $2^5 = 32$. Notice the answer is bigger than $16$, which makes sense: the exponent $\\frac{5}{4}$ is more than $1$. The choice $20$ is $16 \\times \\frac{5}{4}$, the multiplier misreading. The choice $2$ stops at the root, and $80$ is $16 \\times 5$.',
    },
    {
      q: 'Evaluate $10000^{3/4}$.',
      choices: ['$10$', '$100$', '$7500$', '$1000$'],
      answer: 3,
      solution:
        'Fourth root first. Since $10^2 = 100$ and $100^2 = 10000$, we have $10^4 = 10000$, so $10000^{1/4} = 10$. Then cube: $10^3 = 1000$. The choice $10$ stops after the root and $100$ takes only a square root. The choice $7500$ is $10000 \\times \\frac{3}{4}$, which multiplies instead of rooting and powering.',
    },
  ],
  // p7 — negative fractional exponents give reciprocals, not negatives
  [
    {
      q: 'Evaluate $25^{-1/2}$.',
      choices: ['$\\frac{1}{5}$', '$-5$', '$5$', '$-\\frac{1}{5}$'],
      answer: 0,
      solution:
        'Handle the pieces one at a time. The minus sign means reciprocal and the $\\frac{1}{2}$ means square root: $25^{-1/2} = \\frac{1}{25^{1/2}} = \\frac{1}{5}$, since $5 \\times 5 = 25$. The choices $-5$ and $-\\frac{1}{5}$ both turn the minus sign into a negative answer, but a negative exponent flips a number over instead of changing its sign. The choice $5$ ignores the minus sign completely.',
    },
    {
      q: 'Evaluate $64^{-1/3}$.',
      choices: ['$-4$', '$\\frac{1}{4}$', '$4$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        'Sign, then root: the minus means reciprocal, so $64^{-1/3} = \\frac{1}{64^{1/3}}$. The cube root of $64$ is $4$, because $4 \\times 4 \\times 4 = 64$, so the answer is $\\frac{1}{4}$. The choice $4$ drops the minus sign and $-4$ turns it into a negative. The choice $\\frac{1}{8}$ uses the square root of $64$ instead of the cube root.',
    },
    {
      q: 'Evaluate $16^{-1/4}$.',
      choices: ['$-2$', '$2$', '$\\frac{1}{4}$', '$\\frac{1}{2}$'],
      answer: 3,
      solution:
        'The minus sign flips, and the $\\frac{1}{4}$ takes a fourth root: $16^{-1/4} = \\frac{1}{16^{1/4}}$. Since $2 \\times 2 \\times 2 \\times 2 = 16$, the fourth root is $2$, so the answer is $\\frac{1}{2}$. The choice $2$ forgets the minus and $-2$ misreads it as a negative sign. The choice $\\frac{1}{4}$ uses the square root of $16$ rather than the fourth root.',
    },
  ],
  // p8 — a^{3/2}: root first keeps the numbers small
  [
    {
      q: 'Evaluate $36^{3/2}$.',
      choices: ['$216$', '$54$', '$46656$', '$108$'],
      answer: 0,
      solution:
        'Square root first: $36^{1/2} = 6$, since $6 \\times 6 = 36$. Then cube: $6^3 = 216$. Rooting first is the kind choice — cubing first would leave you hunting the square root of $36^3 = 46656$. The choice $54$ is $36 \\times \\frac{3}{2}$, the multiplier misreading. The choice $46656$ cubes but never roots, and $108$ is $36 \\times 3$.',
    },
    {
      q: 'Evaluate $100^{3/2}$.',
      choices: ['$150$', '$1000000$', '$1000$', '$10$'],
      answer: 2,
      solution:
        'Root first, then power: $100^{1/2} = 10$ because $10 \\times 10 = 100$, and then $10^3 = 1000$. The choice $150$ comes from $100 \\times \\frac{3}{2}$, reading the exponent as a factor. The choice $1000000$ is $100^3$ with the square root never taken, and $10$ stops after the root.',
    },
    {
      q: 'Evaluate $49^{3/2}$.',
      choices: ['$73.5$', '$7$', '$21$', '$343$'],
      answer: 3,
      solution:
        'Take the square root first: $49^{1/2} = 7$, since $7 \\times 7 = 49$. Then cube: $7^3 = 343$. The choice $73.5$ is $49 \\times \\frac{3}{2}$ — the exponent is not a multiplier. The choice $7$ stops after the root, and $21$ is $7 \\times 3$, multiplying the root by the exponent instead of raising it to that power.',
    },
  ],
  // p9 — a fraction base with a negative fractional exponent
  [
    {
      q: 'Evaluate $\\left(\\frac{1}{27}\\right)^{-2/3}$.',
      choices: ['$\\frac{1}{9}$', '$9$', '$3$', '$-9$'],
      answer: 1,
      solution:
        'The negative exponent flips the fraction: $\\left(\\frac{1}{27}\\right)^{-2/3} = 27^{2/3}$. Now root, then power: $27^{1/3} = 3$ since $3 \\times 3 \\times 3 = 27$, and $3^2 = 9$. The choice $\\frac{1}{9}$ does the root and power but never flips the fraction. The choice $3$ stops after the cube root, and $-9$ reads the minus sign as a negative answer instead of a reciprocal.',
    },
    {
      q: 'Evaluate $\\left(\\frac{1}{16}\\right)^{-3/4}$.',
      choices: ['$\\frac{1}{8}$', '$2$', '$8$', '$-8$'],
      answer: 2,
      solution:
        'Flip first: $\\left(\\frac{1}{16}\\right)^{-3/4} = 16^{3/4}$. Then fourth root and cube: $16^{1/4} = 2$ because $2 \\times 2 \\times 2 \\times 2 = 16$, and $2^3 = 8$. The choice $\\frac{1}{8}$ forgets to flip the fraction. The choice $2$ stops after the root, and $-8$ turns the minus sign into a negative answer.',
    },
    {
      q: 'Evaluate $\\left(\\frac{1}{125}\\right)^{-2/3}$.',
      choices: ['$\\frac{1}{25}$', '$5$', '$-25$', '$25$'],
      answer: 3,
      solution:
        'The minus sign in the exponent turns the fraction upside down: $\\left(\\frac{1}{125}\\right)^{-2/3} = 125^{2/3}$. Cube root first: $125^{1/3} = 5$, since $5 \\times 5 \\times 5 = 125$. Then square: $5^2 = 25$. The choice $\\frac{1}{25}$ skips the flip, $5$ stops after the root, and $-25$ mistakes a reciprocal for a sign change.',
    },
  ],
  // p10 — the exponent laws still work on fractions
  [
    {
      q: 'Evaluate $81^{3/4} \\cdot 81^{-1/2}$.',
      choices: ['$3$', '$243$', '$27$', '$9$'],
      answer: 0,
      solution:
        'Same base, so add the exponents: $\\frac{3}{4} + \\left(-\\frac{1}{2}\\right) = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$. So the product is $81^{1/4} = 3$, since $3 \\times 3 \\times 3 \\times 3 = 81$. Check the long way: $81^{3/4} = 27$ and $81^{-1/2} = \\frac{1}{9}$, and $27 \\div 9 = 3$. The choice $243$ adds $\\frac{3}{4} + \\frac{1}{2} = \\frac{5}{4}$ and loses the minus sign. The choice $27$ reports only the first factor, and $9$ uses $\\frac{1}{2}$ as the net exponent.',
    },
    {
      q: 'Evaluate $16^{3/4} \\cdot 16^{-1/2}$.',
      choices: ['$32$', '$2$', '$8$', '$4$'],
      answer: 1,
      solution:
        'Add the exponents: $\\frac{3}{4} - \\frac{1}{2} = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$, so the answer is $16^{1/4} = 2$, because $2 \\times 2 \\times 2 \\times 2 = 16$. Check: $16^{3/4} = 8$ and $16^{-1/2} = \\frac{1}{4}$, and $8 \\div 4 = 2$. The choice $32$ drops the minus sign and uses $\\frac{5}{4}$. The choice $8$ stops at the first factor, and $4$ takes $\\frac{1}{2}$ as the net exponent.',
    },
    {
      q: 'Evaluate $\\frac{27^{2/3}}{27^{1/3}}$.',
      choices: ['$27$', '$9$', '$6$', '$3$'],
      answer: 3,
      solution:
        'Dividing powers of the same base SUBTRACTS the exponents: $\\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$, so the quotient is $27^{1/3} = 3$, since $3 \\times 3 \\times 3 = 27$. Check the long way: $27^{2/3} = 9$ and $27^{1/3} = 3$, and $9 \\div 3 = 3$. The choice $27$ adds the exponents instead of subtracting, giving $27^1$. The choice $9$ reports only the top, and $6$ subtracts the two VALUES, $9 - 3$, instead of dividing them.',
    },
  ],
]

const s18 = [
  // p1 — roots split across a product, never across a sum
  [
    {
      q: 'Compute $\\sqrt{4} \\cdot \\sqrt{25}$.',
      choices: ['$100$', '$10$', '$7$', '$\\sqrt{29}$'],
      answer: 1,
      solution:
        'Take each root: $\\sqrt{4} = 2$ and $\\sqrt{25} = 5$, so the product is $2 \\times 5 = 10$. Equivalently, roots split across products: $\\sqrt{4 \\cdot 25} = \\sqrt{100} = 10$. The choice $100$ multiplies inside but forgets the final root. The choice $7$ ADDS the roots, $2 + 5$, instead of multiplying them, and $\\sqrt{29}$ adds inside the root — and roots never split across a sum, since $\\sqrt{29}$ is about $5.39$, nowhere near $10$.',
    },
    {
      q: 'Compute $\\sqrt{36} \\cdot \\sqrt{49}$.',
      choices: ['$1764$', '$85$', '$42$', '$13$'],
      answer: 2,
      solution:
        'Root each factor: $\\sqrt{36} = 6$ and $\\sqrt{49} = 7$, so the product is $42$. Check the other way: $36 \\cdot 49 = 1764$ and $42 \\times 42 = 1764$, so $\\sqrt{1764} = 42$ too. The choice $1764$ stops before that last root. The choice $13$ adds the roots, $6 + 7$, and $85$ adds the numbers inside, $36 + 49$, without rooting at all.',
    },
    {
      q: 'Compute $\\sqrt{100} \\cdot \\sqrt{9}$.',
      choices: ['$900$', '$13$', '$\\sqrt{109}$', '$30$'],
      answer: 3,
      solution:
        'Take the roots first: $\\sqrt{100} = 10$ and $\\sqrt{9} = 3$, so the product is $30$. The choice $900$ multiplies inside the root, $100 \\cdot 9$, and then never takes the root. The choice $13$ adds the two roots instead of multiplying, and $\\sqrt{109}$ adds inside the root — that equals about $10.44$, which is not $30$, because a root splits across a product but never across a sum.',
    },
  ],
  // p2 — simplify by pulling out the perfect square factor
  [
    {
      q: 'Simplify $\\sqrt{20}$.',
      choices: ['$2\\sqrt{5}$', '$4\\sqrt{5}$', '$5\\sqrt{4}$', '$2\\sqrt{10}$'],
      answer: 0,
      solution:
        'The largest perfect square dividing $20$ is $4$, since $20 = 4 \\cdot 5$. Split the root: $\\sqrt{20} = \\sqrt{4} \\cdot \\sqrt{5} = 2\\sqrt{5}$. Check by squaring: $(2\\sqrt{5})^2 = 4 \\cdot 5 = 20$. The choice $4\\sqrt{5}$ lets the $4$ walk out of the root unchanged instead of leaving as its root $2$. The choice $5\\sqrt{4}$ pulls out the $5$, which is not a perfect square, and leaves the square behind — it equals $10$. The choice $2\\sqrt{10}$ moves a $2$ outside but only divides $20$ by $2$; when a $2$ steps out, the whole factor of $4$ must leave.',
    },
    {
      q: 'Simplify $\\sqrt{45}$.',
      choices: ['$9\\sqrt{5}$', '$5\\sqrt{9}$', '$3\\sqrt{5}$', '$3\\sqrt{15}$'],
      answer: 2,
      solution:
        'Since $45 = 9 \\cdot 5$, we get $\\sqrt{45} = \\sqrt{9} \\cdot \\sqrt{5} = 3\\sqrt{5}$, and $5$ is prime so nothing more can come out. Check: $(3\\sqrt{5})^2 = 9 \\cdot 5 = 45$. The choice $9\\sqrt{5}$ forgets to root the $9$ on its way out. The choice $5\\sqrt{9}$ takes out the non-square $5$ and leaves the square inside; it equals $15$. The choice $3\\sqrt{15}$ divides $45$ by only $3$ instead of by the full square factor $9$.',
    },
    {
      q: 'Simplify $\\sqrt{50}$.',
      choices: ['$25\\sqrt{2}$', '$2\\sqrt{25}$', '$5\\sqrt{10}$', '$5\\sqrt{2}$'],
      answer: 3,
      solution:
        'The largest perfect square dividing $50$ is $25$, since $50 = 25 \\cdot 2$. So $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$. Check: $(5\\sqrt{2})^2 = 25 \\cdot 2 = 50$. The choice $25\\sqrt{2}$ brings the $25$ out un-rooted. The choice $2\\sqrt{25}$ pulls out the $2$ and leaves the square inside — backwards, and it equals $10$. The choice $5\\sqrt{10}$ takes a $5$ outside but divides $50$ by only $5$.',
    },
  ],
  // p3 — cube roots
  [
    {
      q: 'Evaluate $\\sqrt[3]{27}$.',
      choices: ['$3$', '$9$', '$13.5$', '$81$'],
      answer: 0,
      solution:
        'A cube root asks for the number whose CUBE is $27$. Since $3 \\times 3 \\times 3 = 27$, the answer is $3$. The choice $9$ divides $27$ by $3$ instead of rooting it (and it is also $3^2$, one power too far). The choice $13.5$ halves $27$, and $81$ multiplies $27$ by $3$ — going up when a root goes down.',
    },
    {
      q: 'Evaluate $\\sqrt[3]{125}$.',
      choices: ['$\\frac{125}{3}$', '$5$', '$25$', '$15$'],
      answer: 1,
      solution:
        'We need the number whose cube is $125$. Since $5 \\times 5 = 25$ and $25 \\times 5 = 125$, the cube root is $5$. The choice $25$ is $5^2$ — that is the answer squared, not the answer. The choice $\\frac{125}{3}$ divides by $3$ rather than taking a cube root, and $15$ is $5 \\times 3$.',
    },
    {
      q: 'Evaluate $\\sqrt[3]{729}$.',
      choices: ['$27$', '$243$', '$364.5$', '$9$'],
      answer: 3,
      solution:
        'We want the number whose cube is $729$. Try $9$: $9 \\times 9 = 81$ and $81 \\times 9 = 729$, exactly. So $\\sqrt[3]{729} = 9$. The choice $27$ is the SQUARE root of $729$, since $27 \\times 27 = 729$ — a real root of $729$, just not the one asked for. The choice $243$ is $729 \\div 3$ and $364.5$ is half of $729$; neither dividing nor halving is rooting.',
    },
  ],
  // p4 — like radicals combine by counting
  [
    {
      q: 'Compute $4\\sqrt{7} + 3\\sqrt{7}$.',
      choices: ['$7\\sqrt{7}$', '$7\\sqrt{14}$', '$12\\sqrt{7}$', '$\\sqrt{28}$'],
      answer: 0,
      solution:
        'Like radicals add the way matching objects do: four $\\sqrt{7}$s plus three $\\sqrt{7}$s make seven of them, so the sum is $7\\sqrt{7}$. The part under the root never changes when we add. The choice $7\\sqrt{14}$ counts correctly but also adds the insides, $7 + 7$. The choice $12\\sqrt{7}$ multiplies the counts $4 \\times 3$ instead of adding them, and $\\sqrt{28}$ merges everything into one root as if this were a multiplication — it equals $2\\sqrt{7}$, far too small.',
    },
    {
      q: 'Compute $6\\sqrt{5} - 2\\sqrt{5}$.',
      choices: ['$8\\sqrt{5}$', '$4\\sqrt{5}$', '$4$', '$12\\sqrt{5}$'],
      answer: 1,
      solution:
        'The radicals match, so just subtract the counts: $6 - 2 = 4$, giving $4\\sqrt{5}$. The choice $8\\sqrt{5}$ adds instead of subtracting. The choice $4$ counts correctly but then throws the $\\sqrt{5}$ away — the radical is part of the answer. The choice $12\\sqrt{5}$ multiplies the counts $6 \\times 2$.',
    },
    {
      q: 'Compute $3\\sqrt{2} + \\sqrt{2} + 2\\sqrt{2}$.',
      choices: ['$5\\sqrt{2}$', '$6\\sqrt{6}$', '$6\\sqrt{2}$', '$6$'],
      answer: 2,
      solution:
        'A lone $\\sqrt{2}$ means $1\\sqrt{2}$, so the counts are $3 + 1 + 2 = 6$ and the total is $6\\sqrt{2}$. The choice $5\\sqrt{2}$ forgets that the lone radical counts as one of them. The choice $6\\sqrt{6}$ counts right but also adds the insides, $2 + 2 + 2$, and $6$ drops the radical after counting.',
    },
  ],
  // p5 — hunt for the LARGEST perfect square factor
  [
    {
      q: 'Simplify $\\sqrt{200}$.',
      choices: ['$10\\sqrt{2}$', '$100\\sqrt{2}$', '$10\\sqrt{20}$', '$2\\sqrt{100}$'],
      answer: 0,
      solution:
        'The largest perfect square dividing $200$ is $100$, since $200 = 100 \\cdot 2$. So $\\sqrt{200} = \\sqrt{100} \\cdot \\sqrt{2} = 10\\sqrt{2}$. Check: $(10\\sqrt{2})^2 = 100 \\cdot 2 = 200$. The choice $100\\sqrt{2}$ lets the $100$ out without rooting it. The choice $2\\sqrt{100}$ pulls out the non-square $2$ and leaves the square inside; it equals $20$, whose square is $400$. The choice $10\\sqrt{20}$ moves a $10$ outside but divides $200$ by only $10$ instead of by $100$.',
    },
    {
      q: 'Simplify $\\sqrt{162}$.',
      choices: ['$81\\sqrt{2}$', '$2\\sqrt{81}$', '$9\\sqrt{2}$', '$9\\sqrt{18}$'],
      answer: 2,
      solution:
        'Since $162 = 81 \\cdot 2$ and $81$ is the largest square factor, $\\sqrt{162} = \\sqrt{81} \\cdot \\sqrt{2} = 9\\sqrt{2}$. Check: $(9\\sqrt{2})^2 = 81 \\cdot 2 = 162$. The choice $81\\sqrt{2}$ brings the $81$ out whole instead of as $9$. The choice $2\\sqrt{81}$ takes out the $2$ and leaves the square behind; it equals $18$. The choice $9\\sqrt{18}$ divides $162$ by only $9$ — and $\\sqrt{18}$ still hides a square, so the job is not finished either way.',
    },
    {
      q: 'Simplify $\\sqrt{175}$.',
      choices: ['$25\\sqrt{7}$', '$7\\sqrt{25}$', '$5\\sqrt{35}$', '$5\\sqrt{7}$'],
      answer: 3,
      solution:
        'The largest perfect square dividing $175$ is $25$, since $175 = 25 \\cdot 7$. So $\\sqrt{175} = \\sqrt{25} \\cdot \\sqrt{7} = 5\\sqrt{7}$, and $7$ is prime, so we are done. Check: $(5\\sqrt{7})^2 = 25 \\cdot 7 = 175$. The choice $25\\sqrt{7}$ forgets to root the $25$. The choice $7\\sqrt{25}$ pulls out the $7$ and leaves the square inside; it equals $35$. The choice $5\\sqrt{35}$ takes a $5$ outside but divides $175$ by only $5$.',
    },
  ],
  // p6 — two messy roots multiply to a clean whole number
  [
    {
      q: 'Compute $\\sqrt{3} \\cdot \\sqrt{12}$.',
      choices: ['$36$', '$6$', '$\\sqrt{15}$', '$\\sqrt{9}$'],
      answer: 1,
      solution:
        'Merge the roots: $\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{3 \\cdot 12} = \\sqrt{36} = 6$. Neither factor was a whole number on its own, yet the product is — the roots teamed up. The choice $36$ multiplies inside but stops one step before the root. The choice $\\sqrt{15}$ adds inside instead of multiplying, and $\\sqrt{9}$ subtracts inside; it equals $3$, only half the answer.',
    },
    {
      q: 'Compute $\\sqrt{2} \\cdot \\sqrt{50}$.',
      choices: ['$100$', '$\\sqrt{52}$', '$10$', '$\\sqrt{48}$'],
      answer: 2,
      solution:
        'When roots multiply, the numbers inside multiply: $\\sqrt{2} \\cdot \\sqrt{50} = \\sqrt{100} = 10$. The choice $100$ forgets that last root. The choice $\\sqrt{52}$ adds the insides, $2 + 50$, and $\\sqrt{48}$ subtracts them — both are around $7$, not $10$, which is exactly why multiplication is the only operation that passes through a root this way.',
    },
    {
      q: 'Compute $\\sqrt{8} \\cdot \\sqrt{18}$.',
      choices: ['$144$', '$\\sqrt{26}$', '$\\sqrt{10}$', '$12$'],
      answer: 3,
      solution:
        'Merge into a single root: $\\sqrt{8} \\cdot \\sqrt{18} = \\sqrt{8 \\cdot 18} = \\sqrt{144} = 12$. You can also simplify first: $\\sqrt{8} = 2\\sqrt{2}$ and $\\sqrt{18} = 3\\sqrt{2}$, so the product is $6 \\cdot (\\sqrt{2})^2 = 6 \\cdot 2 = 12$ — same answer, two routes. The choice $144$ never takes the root. The choice $\\sqrt{26}$ adds inside and $\\sqrt{10}$ subtracts inside.',
    },
  ],
  // p7 — rationalizing a denominator
  [
    {
      q: 'Rationalize $\\frac{9}{\\sqrt{3}}$.',
      choices: ['$3\\sqrt{3}$', '$9\\sqrt{3}$', '$3$', '$\\frac{\\sqrt{3}}{3}$'],
      answer: 0,
      solution:
        'Multiply top and bottom by $\\sqrt{3}$ — that is multiplying by $1$, so the value cannot change: $\\frac{9}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}$. Check: $3\\sqrt{3} \\cdot \\sqrt{3} = 3 \\cdot 3 = 9$. The choice $9\\sqrt{3}$ multiplies the top but forgets the bottom became $3$. The choice $3$ throws the radical away, and $\\frac{\\sqrt{3}}{3}$ is the answer turned upside down.',
    },
    {
      q: 'Rationalize $\\frac{12}{\\sqrt{2}}$.',
      choices: ['$12\\sqrt{2}$', '$6\\sqrt{2}$', '$6$', '$\\frac{\\sqrt{2}}{6}$'],
      answer: 1,
      solution:
        'Multiply top and bottom by $\\sqrt{2}$: $\\frac{12}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2} = 6\\sqrt{2}$. Check: $6\\sqrt{2} \\cdot \\sqrt{2} = 6 \\cdot 2 = 12$. The choice $12\\sqrt{2}$ never divides by the new denominator $2$. The choice $6$ drops the radical, and $\\frac{\\sqrt{2}}{6}$ flips the fraction over.',
    },
    {
      q: 'Rationalize $\\frac{20}{\\sqrt{5}}$.',
      choices: ['$20\\sqrt{5}$', '$4$', '$\\frac{\\sqrt{5}}{4}$', '$4\\sqrt{5}$'],
      answer: 3,
      solution:
        'Multiply top and bottom by $\\sqrt{5}$: $\\frac{20}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{20\\sqrt{5}}{5} = 4\\sqrt{5}$. Check: $4\\sqrt{5} \\cdot \\sqrt{5} = 4 \\cdot 5 = 20$. The choice $20\\sqrt{5}$ forgets the bottom turned into $5$. The choice $4$ cancels the radical away entirely, and $\\frac{\\sqrt{5}}{4}$ is the answer upside down.',
    },
  ],
  // p8 — simplify each radical first, THEN combine
  [
    {
      q: 'Compute $\\sqrt{27} + \\sqrt{75}$.',
      choices: ['$8\\sqrt{3}$', '$\\sqrt{102}$', '$15\\sqrt{3}$', '$8\\sqrt{6}$'],
      answer: 0,
      solution:
        'They do not match yet, so simplify each first: $\\sqrt{27} = 3\\sqrt{3}$ and $\\sqrt{75} = 5\\sqrt{3}$. Now they are like radicals: $3\\sqrt{3} + 5\\sqrt{3} = 8\\sqrt{3}$. The choice $\\sqrt{102}$ adds under the roots, $27 + 75$ — the classic trap, and it is about $10.1$ while the true answer is about $13.9$. The choice $15\\sqrt{3}$ multiplies the counts $3 \\times 5$, and $8\\sqrt{6}$ counts correctly but also adds the insides.',
    },
    {
      q: 'Compute $\\sqrt{32} + \\sqrt{8}$.',
      choices: ['$\\sqrt{40}$', '$6\\sqrt{2}$', '$8\\sqrt{2}$', '$6\\sqrt{4}$'],
      answer: 1,
      solution:
        'Simplify each radical first: $\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}$ and $\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$. They match now, so $4\\sqrt{2} + 2\\sqrt{2} = 6\\sqrt{2}$. The choice $\\sqrt{40}$ adds under the roots; it equals $2\\sqrt{10}$, about $6.3$, while the real answer is about $8.5$. The choice $8\\sqrt{2}$ multiplies the counts $4 \\times 2$, and $6\\sqrt{4}$ adds the insides as well — and it is just $12$.',
    },
    {
      q: 'Compute $\\sqrt{80} - \\sqrt{20}$.',
      choices: ['$\\sqrt{60}$', '$6\\sqrt{5}$', '$2\\sqrt{5}$', '$2$'],
      answer: 2,
      solution:
        'Simplify each first: $\\sqrt{80} = \\sqrt{16 \\cdot 5} = 4\\sqrt{5}$ and $\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. Then subtract the counts: $4\\sqrt{5} - 2\\sqrt{5} = 2\\sqrt{5}$. The choice $\\sqrt{60}$ subtracts under the roots, $80 - 20$; it equals $2\\sqrt{15}$, about $7.7$, not $4.5$. The choice $6\\sqrt{5}$ adds instead of subtracting, and $2$ counts correctly but discards the radical.',
    },
  ],
  // p9 — rationalizing when the denominator also has a coefficient
  [
    {
      q: 'Rationalize $\\frac{1}{3\\sqrt{2}}$.',
      choices: ['$\\frac{\\sqrt{2}}{6}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{6}$', '$\\frac{3\\sqrt{2}}{2}$'],
      answer: 0,
      solution:
        'Only the $\\sqrt{2}$ needs help; the $3$ is already rational. Multiply top and bottom by $\\sqrt{2}$: $\\frac{1}{3\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{3 \\cdot 2} = \\frac{\\sqrt{2}}{6}$. The choice $\\frac{\\sqrt{2}}{2}$ leaves the $3$ behind in the denominator. The choice $\\frac{1}{6}$ multiplies the bottom out but never carries the $\\sqrt{2}$ up to the top, and $\\frac{3\\sqrt{2}}{2}$ puts the $3$ on the wrong floor.',
    },
    {
      q: 'Rationalize $\\frac{1}{4\\sqrt{3}}$.',
      choices: ['$\\frac{\\sqrt{3}}{3}$', '$\\frac{1}{12}$', '$\\frac{\\sqrt{3}}{12}$', '$\\frac{4\\sqrt{3}}{3}$'],
      answer: 2,
      solution:
        'Multiply top and bottom by $\\sqrt{3}$: $\\frac{1}{4\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{4 \\cdot 3} = \\frac{\\sqrt{3}}{12}$. The new denominator is $12$, not $3$ — the $4$ is still there. The choice $\\frac{\\sqrt{3}}{3}$ forgets the $4$, the choice $\\frac{1}{12}$ loses the $\\sqrt{3}$ that should have moved to the top, and $\\frac{4\\sqrt{3}}{3}$ moves the $4$ upstairs by mistake.',
    },
    {
      q: 'Rationalize $\\frac{3}{2\\sqrt{7}}$.',
      choices: ['$\\frac{3\\sqrt{7}}{7}$', '$\\frac{3}{14}$', '$\\frac{2\\sqrt{7}}{3}$', '$\\frac{3\\sqrt{7}}{14}$'],
      answer: 3,
      solution:
        'Multiply top and bottom by $\\sqrt{7}$: $\\frac{3}{2\\sqrt{7}} \\cdot \\frac{\\sqrt{7}}{\\sqrt{7}} = \\frac{3\\sqrt{7}}{2 \\cdot 7} = \\frac{3\\sqrt{7}}{14}$. Nothing cancels, since $3$ and $14$ share no factor. The choice $\\frac{3\\sqrt{7}}{7}$ drops the $2$ from the denominator. The choice $\\frac{3}{14}$ fixes the bottom but forgets the $\\sqrt{7}$ on top, and $\\frac{2\\sqrt{7}}{3}$ turns the fraction inside out.',
    },
  ],
  // p10 — three radicals: simplify, then count carefully
  [
    {
      q: 'Compute $\\sqrt{75} - \\sqrt{27} + \\sqrt{3}$.',
      choices: ['$2\\sqrt{3}$', '$3\\sqrt{3}$', '$9\\sqrt{3}$', '$\\sqrt{51}$'],
      answer: 1,
      solution:
        'Simplify each piece: $\\sqrt{75} = 5\\sqrt{3}$, $\\sqrt{27} = 3\\sqrt{3}$, and the lone $\\sqrt{3}$ is $1\\sqrt{3}$. Now count in order: $5 - 3 + 1 = 3$, so the answer is $3\\sqrt{3}$. The choice $2\\sqrt{3}$ forgets that the lone $\\sqrt{3}$ counts as one of them and stops at $5 - 3$. The choice $9\\sqrt{3}$ adds all three counts instead of subtracting the middle one, and $\\sqrt{51}$ combines under the roots, $75 - 27 + 3$, which roots never allow.',
    },
    {
      q: 'Compute $\\sqrt{45} + \\sqrt{20} - \\sqrt{5}$.',
      choices: ['$5\\sqrt{5}$', '$6\\sqrt{5}$', '$4\\sqrt{5}$', '$\\sqrt{60}$'],
      answer: 2,
      solution:
        'Simplify first: $\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$, and the lone $\\sqrt{5}$ counts as $1\\sqrt{5}$. Then $3 + 2 - 1 = 4$, giving $4\\sqrt{5}$. The choice $5\\sqrt{5}$ treats the lone radical as zero of them. The choice $6\\sqrt{5}$ adds all three instead of subtracting the last, and $\\sqrt{60}$ combines $45 + 20 - 5$ under one root — it equals $2\\sqrt{15}$, about $7.7$, while the answer is about $8.9$.',
    },
    {
      q: 'Compute $\\sqrt{98} - \\sqrt{18} - \\sqrt{2}$.',
      choices: ['$4\\sqrt{2}$', '$\\sqrt{78}$', '$11\\sqrt{2}$', '$3\\sqrt{2}$'],
      answer: 3,
      solution:
        'Simplify each: $\\sqrt{98} = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$ and $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$, with the lone $\\sqrt{2}$ counting as $1\\sqrt{2}$. Then $7 - 3 - 1 = 3$, so the answer is $3\\sqrt{2}$. The choice $4\\sqrt{2}$ forgets to subtract the lone one. The choice $11\\sqrt{2}$ adds every count instead of subtracting, and $\\sqrt{78}$ combines $98 - 18 - 2$ under a single root, which is about $8.8$ rather than $4.2$.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 1,
  sections: {
    '1.7': s17,
    '1.8': s18,
  },
}
