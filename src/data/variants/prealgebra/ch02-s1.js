// Prealgebra chapter 2 — variations for sections 2.1-2.3.
// All problems and solutions are original MathQuest content.

const s21 = [
  // p1 — squaring a small whole number
  [
    {
      q: 'What is $8^2$?',
      choices: ['$64$', '$16$', '$32$', '$88$'],
      answer: 0,
      solution:
        'Squaring means using the number as a factor twice: $8^2 = 8 \\cdot 8 = 64$. Doubling would give $8 \\cdot 2 = 16$, which is a much smaller (and different) job.',
    },
    {
      q: 'What is $6^2$?',
      choices: ['$12$', '$24$', '$36$', '$66$'],
      answer: 2,
      solution:
        'The exponent $2$ says to use $6$ twice as a factor: $6 \\cdot 6 = 36$. Watch out for $6 \\cdot 2 = 12$ — multiplying by the exponent is not the same as squaring.',
    },
    {
      q: 'A square rug measures $9$ feet on each side. How many square feet of floor does it cover?',
      choices: ['$18$', '$36$', '$99$', '$81$'],
      answer: 3,
      solution:
        'A square with side $9$ holds $9$ rows of $9$ unit squares, which is exactly what $9^2$ counts: $9 \\cdot 9 = 81$ square feet. The value $36$ is the distance around the rug, not the area it covers.',
    },
  ],
  // p2 — recognize a perfect square
  [
    {
      q: 'Exactly one of these numbers is a perfect square. Which one is it?',
      choices: ['$64$', '$40$', '$75$', '$98$'],
      answer: 0,
      solution:
        'A perfect square is a whole number times itself, and $8 \\cdot 8 = 64$. The others fall between neighboring squares: $36 < 40 < 49$, $64 < 75 < 81$, and $81 < 98 < 100$.',
    },
    {
      q: 'Which number below can be written as a whole number times itself?',
      choices: ['$30$', '$121$', '$60$', '$140$'],
      answer: 1,
      solution:
        'Run up the squares: $10^2 = 100$ and $11^2 = 121$, so $121$ makes the list. The others are stranded between squares — $25 < 30 < 36$, $49 < 60 < 64$, and $121 < 140 < 144$.',
    },
    {
      q: 'Which of these numbers is NOT a perfect square?',
      choices: ['$16$', '$25$', '$36$', '$45$'],
      answer: 3,
      solution:
        'Three of these come from squaring a whole number: $4^2 = 16$, $5^2 = 25$, and $6^2 = 36$. But $45$ sits between $36$ and $49$, so no whole number squares to it.',
    },
  ],
  // p3 — square a two-digit number by splitting it
  [
    {
      q: 'Compute $13^2$.',
      choices: ['$26$', '$169$', '$133$', '$139$'],
      answer: 1,
      solution:
        '$13^2 = 13 \\cdot 13$. Split the second factor into $10 + 3$: $13 \\cdot 10 + 13 \\cdot 3 = 130 + 39 = 169$. The second piece is $13$ threes, not just $3$ or $9$.',
    },
    {
      q: 'Compute $15^2$.',
      choices: ['$30$', '$155$', '$225$', '$175$'],
      answer: 2,
      solution:
        'Split $15$ into $10 + 5$: $15 \\cdot 10 + 15 \\cdot 5 = 150 + 75 = 225$. The common slip is adding $5 \\cdot 5 = 25$ instead of $15 \\cdot 5 = 75$, which lands you on $175$.',
    },
    {
      q: 'Compute $17^2$.',
      choices: ['$34$', '$177$', '$219$', '$289$'],
      answer: 3,
      solution:
        '$17^2 = 17 \\cdot 17 = 17 \\cdot 10 + 17 \\cdot 7 = 170 + 119 = 289$. Adding only $7 \\cdot 7 = 49$ to the $170$ would give $219$, but the whole $17$ has to be multiplied by the $7$.',
    },
  ],
  // p4 — squaring a negative number inside parentheses
  [
    {
      q: 'What is $(-8)^2$?',
      choices: ['$64$', '$-64$', '$-16$', '$16$'],
      answer: 0,
      solution:
        'The parentheses put the whole number $-8$ under the exponent: $(-8) \\cdot (-8)$. A negative times a negative is positive, so the answer is $64$.',
    },
    {
      q: 'What is $(-11)^2$?',
      choices: ['$-121$', '$121$', '$-22$', '$22$'],
      answer: 1,
      solution:
        'Two negative factors make a positive product, so only the size is left to compute: $11 \\cdot 11 = 121$. The minus signs cancel each other rather than surviving into the answer.',
    },
    {
      q: 'Which of these expressions has the value $49$?',
      choices: ['$-7^2$', '$7 \\cdot 2$', '$(-7)^2$', '$(-7) + (-7)$'],
      answer: 2,
      solution:
        'Only $(-7)^2$ squares the whole number $-7$, and two negatives give $+49$. Without parentheses, $-7^2$ squares just the $7$ and keeps the minus, giving $-49$. The last two choices double instead of squaring.',
    },
  ],
  // p5 — no parentheses: square first, then negate
  [
    {
      q: 'What is $-4^2$? (Look carefully — there are no parentheses!)',
      choices: ['$16$', '$-16$', '$-8$', '$8$'],
      answer: 1,
      solution:
        'With no parentheses the exponent acts first and grabs only the $4$: $-4^2 = -(4^2) = -(16) = -16$. Compare with $(-4)^2 = 16$, where the minus sign gets squared too.',
    },
    {
      q: 'What is $-10^2$?',
      choices: ['$100$', '$-20$', '$-100$', '$20$'],
      answer: 2,
      solution:
        'The exponent belongs to the $10$ alone, so square first and negate afterward: $-(10 \\cdot 10) = -100$. The choice $-20$ comes from doubling rather than squaring.',
    },
    {
      q: 'Which of these expressions is negative?',
      choices: ['$(-9)^2$', '$(-1)^2$', '$0^2$', '$-6^2$'],
      answer: 3,
      solution:
        'Anything squared inside parentheses comes out positive or zero: $(-9)^2 = 81$, $(-1)^2 = 1$, and $0^2 = 0$. Only $-6^2$ has its minus sign sitting outside the exponent, so it means $-(36) = -36$.',
    },
  ],
  // p6 — units digit of a square
  [
    {
      q: 'What is the units digit of $52^2$?',
      choices: ['$4$', '$2$', '$5$', '$0$'],
      answer: 0,
      solution:
        'Only the units digit of the number matters. Since $52$ ends in $2$ and $2^2 = 4$, the square ends in $4$. (Indeed $52^2 = 2704$.) The tens digit $5$ never touches the units place on its own.',
    },
    {
      q: 'What is the units digit of $29^2$?',
      choices: ['$9$', '$1$', '$4$', '$8$'],
      answer: 1,
      solution:
        'The number ends in $9$, and $9^2 = 81$, so the square ends in $1$ — the units digit of $81$, not its tens digit. Check: $29^2 = 841$. Squaring the tens digit ($2^2 = 4$) answers the wrong question.',
    },
    {
      q: 'The square of a whole number ends in $5$. What must the units digit of that whole number be?',
      choices: ['$0$', '$1$', '$5$', '$6$'],
      answer: 2,
      solution:
        'Square each possible units digit and look at where it lands: $0 \\to 0$, $1 \\to 1$, $2 \\to 4$, $3 \\to 9$, $4 \\to 6$, $5 \\to 5$, $6 \\to 6$, $7 \\to 9$, $8 \\to 4$, $9 \\to 1$. The only digit whose square ends in $5$ is $5$ itself.',
    },
  ],
  // p7 — square a larger two-digit number
  [
    {
      q: 'Compute $19^2$.',
      choices: ['$361$', '$271$', '$38$', '$199$'],
      answer: 0,
      solution:
        '$19^2 = 19 \\cdot 19 = 19 \\cdot 10 + 19 \\cdot 9 = 190 + 171 = 361$. A slicker route: $19 \\cdot 20 = 380$ counts one extra $19$, so subtract it — $380 - 19 = 361$.',
    },
    {
      q: 'Compute $24^2$.',
      choices: ['$48$', '$416$', '$576$', '$484$'],
      answer: 2,
      solution:
        'Split the second factor: $24 \\cdot 20 + 24 \\cdot 4 = 480 + 96 = 576$. Beware the tempting shortcut $20^2 + 4^2 = 416$ — squaring the pieces separately loses the two cross terms.',
    },
    {
      q: 'Compute $22^2$.',
      choices: ['$44$', '$404$', '$444$', '$484$'],
      answer: 3,
      solution:
        '$22^2 = 22 \\cdot 20 + 22 \\cdot 2 = 440 + 44 = 484$. The second piece is $22$ twos, so it is $44$, not $4$ — that slip is what produces $444$.',
    },
  ],
  // p8 — difference of consecutive squares
  [
    {
      q: 'Without squaring either number, find $31^2 - 30^2$.',
      choices: ['$61$', '$1$', '$60$', '$62$'],
      answer: 0,
      solution:
        'Consecutive squares differ by the sum of the two numbers: $31^2 - 30^2 = 30 + 31 = 61$. Check: $961 - 900 = 61$. ✓ The gap is the sum, not the difference of the numbers.',
    },
    {
      q: 'Without squaring either number, find $18^2 - 17^2$.',
      choices: ['$1$', '$35$', '$34$', '$36$'],
      answer: 1,
      solution:
        'The difference of consecutive squares is the sum of the two numbers: $17 + 18 = 35$. Check: $324 - 289 = 35$. ✓ Using $2 \\cdot 17$ or $2 \\cdot 18$ misses by one number.',
    },
    {
      q: 'A square photo is $12$ inches on each side. A second square photo is $1$ inch longer on each side. How many more square inches does the bigger photo cover?',
      choices: ['$1$', '$24$', '$26$', '$25$'],
      answer: 3,
      solution:
        'You want $13^2 - 12^2$, and consecutive squares differ by the sum of the two numbers: $12 + 13 = 25$ square inches. Check: $169 - 144 = 25$. ✓ Growing by one inch on a side adds far more than one square inch.',
    },
  ],
  // p9 — sum of consecutive odd numbers is a square
  [
    {
      q: 'Compute the sum of the first $15$ odd numbers: $1 + 3 + 5 + \\cdots + 29$.',
      choices: ['$210$', '$225$', '$196$', '$435$'],
      answer: 1,
      solution:
        'The first $n$ odd numbers always add to $n^2$, since each new odd number wraps another L-shaped layer around a square. With $15$ of them the sum is $15^2 = 225$. Adding every number from $1$ to $29$ instead would give $435$.',
    },
    {
      q: 'The sum of the first $n$ odd numbers is $169$. What is $n$?',
      choices: ['$169$', '$26$', '$13$', '$14$'],
      answer: 2,
      solution:
        'The first $n$ odd numbers add to $n^2$, so you need $n^2 = 169$. Since $13 \\cdot 13 = 169$, the answer is $n = 13$. Check: the run $1 + 3 + \\cdots + 25$ has $13$ terms. ✓',
    },
    {
      q: 'Compute the sum of the first $25$ odd numbers: $1 + 3 + 5 + \\cdots + 49$.',
      choices: ['$1225$', '$600$', '$650$', '$625$'],
      answer: 3,
      solution:
        'The first $25$ odd numbers add to $25^2 = 625$. You can also pair the ends: $1 + 49 = 50$, and $25$ numbers make $12$ full pairs plus the middle number $25$, giving $12 \\cdot 50 + 25 = 625$. The sum of ALL numbers from $1$ to $49$ would be $1225$ — a different question.',
    },
  ],
  // p10 — chain of consecutive-square differences
  [
    {
      q: 'Compute $60^2 - 59^2 + 58^2 - 57^2$.',
      choices: ['$234$', '$236$', '$232$', '$2$'],
      answer: 0,
      solution:
        'Take the pairs one at a time with the difference pattern: $60^2 - 59^2 = 59 + 60 = 119$ and $58^2 - 57^2 = 57 + 58 = 115$. Then $119 + 115 = 234$. Using $2 \\cdot 60$ and $2 \\cdot 58$ overshoots to $236$; subtracting the bases themselves gives only $2$.',
    },
    {
      q: 'Compute $30^2 - 29^2 + 28^2 - 27^2$.',
      choices: ['$116$', '$114$', '$112$', '$2$'],
      answer: 1,
      solution:
        'Each pair collapses to a sum: $30^2 - 29^2 = 29 + 30 = 59$ and $28^2 - 27^2 = 27 + 28 = 55$. Adding gives $59 + 55 = 114$ — no four-digit squares required.',
    },
    {
      q: 'Compute $20^2 - 19^2 + 18^2 - 17^2 + 16^2 - 15^2$.',
      choices: ['$3$', '$114$', '$96$', '$105$'],
      answer: 3,
      solution:
        'Three pairs, three sums: $19 + 20 = 39$, $17 + 18 = 35$, and $15 + 16 = 31$. The total is $39 + 35 + 31 = 105$. Notice the sums themselves drop by $4$ each time, which is a nice check.',
    },
  ],
]

const s22 = [
  // p1 — evaluate a small power
  [
    {
      q: 'What is $3^3$?',
      choices: ['$27$', '$9$', '$6$', '$33$'],
      answer: 0,
      solution:
        '$3^3$ means three factors of $3$: $3 \\cdot 3 \\cdot 3 = 27$. Stopping after two factors gives $9$, and adding instead of multiplying gives $6$ — exponents grow much faster than either.',
    },
    {
      q: 'What is $5^3$?',
      choices: ['$15$', '$125$', '$25$', '$8$'],
      answer: 1,
      solution:
        'Three factors of $5$: $5 \\cdot 5 = 25$, then $25 \\cdot 5 = 125$. The trap $5 \\cdot 3 = 15$ multiplies the base by the exponent, which is not what an exponent asks for.',
    },
    {
      q: 'What is $2^7$?',
      choices: ['$14$', '$64$', '$128$', '$49$'],
      answer: 2,
      solution:
        'Double seven times starting from $1$: $2, 4, 8, 16, 32, 64, 128$. So $2^7 = 128$. Stopping at the sixth doubling gives $64$, and flipping the base and exponent gives $7^2 = 49$.',
    },
  ],
  // p2 — powers of ten
  [
    {
      q: 'What is $10^6$?',
      choices: ['$1000000$', '$60$', '$100000$', '$10000000$'],
      answer: 0,
      solution:
        'Each factor of $10$ adds one zero, so $10^6$ is a $1$ followed by exactly six zeros: $1000000$. Count carefully — five zeros is $10^5$ and seven is $10^7$.',
    },
    {
      q: 'When $10^9$ is written out in full, how many zeros follow the $1$?',
      choices: ['$10$', '$8$', '$9$', '$90$'],
      answer: 2,
      solution:
        'The exponent counts the factors of $10$, and every factor of $10$ contributes one zero. So $10^9$ has exactly $9$ zeros. Do not count the leading $1$ as a zero, and do not multiply $10 \\cdot 9$.',
    },
    {
      q: 'Which power of $10$ equals $100000$?',
      choices: ['$10^4$', '$10^3$', '$10^6$', '$10^5$'],
      answer: 3,
      solution:
        'Count the zeros: $100000$ has five of them, so it is $10^5$. The digit $1$ out front is not a zero, and each missing or extra zero moves you a whole power away.',
    },
  ],
  // p3 — translate repeated multiplication into a power
  [
    {
      q: 'Which expression means $6 \\cdot 6 \\cdot 6 \\cdot 6$?',
      choices: ['$4^6$', '$6^4$', '$6 \\cdot 4$', '$6^3$'],
      answer: 1,
      solution:
        'The number being repeated is the base and the count of factors is the exponent. Four sixes means $6^4$. Swapping the roles gives $4^6 = 4096$, a completely different number from $6^4 = 1296$.',
    },
    {
      q: 'Which expression means $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$?',
      choices: ['$2^5$', '$6^2$', '$2^6$', '$2 \\cdot 6$'],
      answer: 2,
      solution:
        'Count the twos: there are six of them, so this is $2^6 = 64$. Miscounting by one gives $2^5 = 32$, and reversing base and exponent gives $6^2 = 36$.',
    },
    {
      q: 'The power $5^4$ is the short way of writing which product?',
      choices: ['$5 \\cdot 4$', '$4^5$', '$5 \\cdot 5 \\cdot 5$', '$5 \\cdot 5 \\cdot 5 \\cdot 5$'],
      answer: 3,
      solution:
        'The base $5$ is the repeated factor and the exponent $4$ says how many copies to use, so $5^4 = 5 \\cdot 5 \\cdot 5 \\cdot 5 = 625$. Three copies would be $5^3 = 125$, and $4^5$ swaps the two roles entirely.',
    },
  ],
  // p4 — powers of a negative base
  [
    {
      q: 'What is $(-2)^4$?',
      choices: ['$16$', '$-16$', '$-8$', '$8$'],
      answer: 0,
      solution:
        'Four negative factors form two pairs, and each pair multiplies to a positive, so the result is positive. The size is $2^4 = 16$, giving $16$. An even exponent always erases the minus sign.',
    },
    {
      q: 'What is $(-5)^3$?',
      choices: ['$125$', '$-125$', '$-15$', '$15$'],
      answer: 1,
      solution:
        'Three negative factors: the first pair gives $+25$, and the last negative factor flips the sign, so the answer is negative. The size is $5^3 = 125$, so $(-5)^3 = -125$.',
    },
    {
      q: 'Which of these expressions is positive?',
      choices: ['$(-4)^3$', '$(-2)^5$', '$(-6)^1$', '$(-3)^4$'],
      answer: 3,
      solution:
        'Look only at whether the exponent is even or odd. The exponents $3$, $5$, and $1$ are all odd, so those three results keep a minus sign. Only $(-3)^4$ has an even exponent, and it equals $81$.',
    },
  ],
  // p5 — multiplying powers of the same base
  [
    {
      q: 'Write $7^4 \\cdot 7^2$ as a single power.',
      choices: ['$7^6$', '$7^8$', '$49^6$', '$14^6$'],
      answer: 0,
      solution:
        'Four factors of $7$ followed by two more makes $4 + 2 = 6$ factors in all, so the product is $7^6$. Multiplying the exponents would count factors that are not there, and the base stays $7$ — the sevens are being multiplied, not the bases combined.',
    },
    {
      q: 'Write $3^5 \\cdot 3^2$ as a single power.',
      choices: ['$3^{10}$', '$9^7$', '$3^7$', '$3^3$'],
      answer: 2,
      solution:
        'Line up the factors: five threes and then two more threes make seven threes, so $3^5 \\cdot 3^2 = 3^{5+2} = 3^7$. The base never doubles up into a $9$, and subtracting the exponents is the rule for division, not multiplication.',
    },
    {
      q: 'For which exponent $n$ is $6^3 \\cdot 6^n = 6^{10}$?',
      choices: ['$30$', '$13$', '$\\frac{10}{3}$', '$7$'],
      answer: 3,
      solution:
        'Multiplying powers of the same base adds exponents, so you need $3 + n = 10$, giving $n = 7$. Check: $6^3 \\cdot 6^7 = 6^{10}$. ✓ Multiplying $3 \\cdot 10$ or adding $3 + 10$ solves a different equation.',
    },
  ],
  // p6 — power of a power
  [
    {
      q: 'Evaluate $\\left(3^2\\right)^3$.',
      choices: ['$243$', '$729$', '$81$', '$18$'],
      answer: 1,
      solution:
        'A power of a power multiplies the exponents: $\\left(3^2\\right)^3 = 3^{2 \\cdot 3} = 3^6 = 729$. Directly: $\\left(3^2\\right)^3 = 9^3 = 729$. Adding the exponents instead would give $3^5 = 243$.',
    },
    {
      q: 'Evaluate $\\left(4^2\\right)^3$.',
      choices: ['$1024$', '$256$', '$4096$', '$24$'],
      answer: 2,
      solution:
        'Three groups of two factors is six factors: $\\left(4^2\\right)^3 = 4^6 = 4096$. Check the other way: $16^3 = 16 \\cdot 16 \\cdot 16 = 4096$. ✓ Adding the exponents gives $4^5 = 1024$, which is too small by a factor of $4$.',
    },
    {
      q: 'Which of these expressions equals $3^{12}$?',
      choices: ['$\\left(3^4\\right)^8$', '$\\left(3^6\\right)^6$', '$3^4 \\cdot 3^3$', '$\\left(3^3\\right)^4$'],
      answer: 3,
      solution:
        'For a power of a power, multiply: you need two exponents whose product is $12$. Since $3 \\cdot 4 = 12$, the answer is $\\left(3^3\\right)^4$. The first two give $3^{32}$ and $3^{36}$, and the third is a product, so its exponents add to $3^7$.',
    },
  ],
  // p7 — order of operations with an exponent
  [
    {
      q: 'Evaluate $5 \\cdot 2^3$.',
      choices: ['$40$', '$1000$', '$30$', '$15$'],
      answer: 0,
      solution:
        'The exponent acts before the multiplication and belongs only to the $2$: $2^3 = 8$, then $5 \\cdot 8 = 40$. Multiplying first would give $10^3 = 1000$, but the $5$ is not under the exponent.',
    },
    {
      q: 'Evaluate $4 \\cdot 3^3$.',
      choices: ['$1728$', '$108$', '$36$', '$81$'],
      answer: 1,
      solution:
        'Exponent first: $3^3 = 27$, and then $4 \\cdot 27 = 108$. If you multiplied $4 \\cdot 3$ first you would be computing $12^3 = 1728$, and pulling the $4$ into the exponent would give $3^4 = 81$.',
    },
    {
      q: 'Evaluate $7 + 2 \\cdot 5^2$.',
      choices: ['$225$', '$107$', '$27$', '$57$'],
      answer: 3,
      solution:
        'Work in order: exponent, then multiplication, then addition. $5^2 = 25$, then $2 \\cdot 25 = 50$, then $7 + 50 = 57$. Adding first gives $9 \\cdot 25 = 225$, multiplying inside the square gives $10^2 + 7 = 107$, and doubling instead of squaring gives $27$.',
    },
  ],
  // p8 — powers of -1
  [
    {
      q: 'What is $(-1)^{77}$?',
      choices: ['$-1$', '$1$', '$77$', '$-77$'],
      answer: 0,
      solution:
        'Every pair of $(-1)$ factors multiplies to $+1$. Since $77$ is odd, the factors form $38$ pairs with one lonely $-1$ left over, so $(-1)^{77} = -1$. The size never grows — all the factors are $1$ in size.',
    },
    {
      q: 'What is $(-1)^{100} + (-1)^{101}$?',
      choices: ['$2$', '$0$', '$-2$', '$1$'],
      answer: 1,
      solution:
        'An even exponent gives $1$ and an odd exponent gives $-1$, so this is $1 + (-1) = 0$. Consecutive powers of $-1$ always cancel, because each extra factor flips the sign.',
    },
    {
      q: 'For which of these exponents $n$ is $(-1)^n = -1$?',
      choices: ['$0$', '$12$', '$35$', '$100$'],
      answer: 2,
      solution:
        'The result is $-1$ exactly when one minus sign is left unpaired, which happens for odd exponents. Of the choices only $35$ is odd. (And $(-1)^0 = 1$, like every nonzero base to the zero power.)',
    },
  ],
  // p9 — rewrite mixed bases as one power
  [
    {
      q: 'Which power of $3$ equals $9^4 \\cdot 3^2$?',
      choices: ['$3^{10}$', '$3^6$', '$3^8$', '$3^{16}$'],
      answer: 0,
      solution:
        'Convert to a single base first: $9 = 3^2$, so $9^4 = \\left(3^2\\right)^4 = 3^8$. Then $3^8 \\cdot 3^2 = 3^{8+2} = 3^{10}$. Treating $9^4$ as $3^4$ would land you on $3^6$.',
    },
    {
      q: 'Which power of $2$ equals $8^2 \\cdot 4^3$?',
      choices: ['$2^5$', '$2^{12}$', '$2^{36}$', '$2^{10}$'],
      answer: 1,
      solution:
        'Rewrite both pieces in base $2$: $8^2 = \\left(2^3\\right)^2 = 2^6$ and $4^3 = \\left(2^2\\right)^3 = 2^6$. Then $2^6 \\cdot 2^6 = 2^{12}$. Check: $64 \\cdot 64 = 4096 = 2^{12}$. ✓ Adding inside the conversions instead of multiplying gives $2^{10}$.',
    },
    {
      q: 'If $8^4 = 2^n$, what is $n$?',
      choices: ['$7$', '$32$', '$4$', '$12$'],
      answer: 3,
      solution:
        'Write the base as a power of $2$: $8 = 2^3$, so $8^4 = \\left(2^3\\right)^4 = 2^{3 \\cdot 4} = 2^{12}$. Matching exponents gives $n = 12$. Check: $8^4 = 4096 = 2^{12}$. ✓',
    },
  ],
  // p10 — units digit of a tall power
  [
    {
      q: 'What is the units digit of $3^{2027}$?',
      choices: ['$3$', '$7$', '$9$', '$1$'],
      answer: 1,
      solution:
        'The units digits of $3^1, 3^2, 3^3, 3^4$ are $3, 9, 7, 1$, and then the cycle repeats every $4$ steps. Since $2027 = 4 \\cdot 506 + 3$, the exponent lands on the third entry of the cycle, which is $7$.',
    },
    {
      q: 'What is the units digit of $2^{100}$?',
      choices: ['$2$', '$4$', '$6$', '$8$'],
      answer: 2,
      solution:
        'The units digits of the powers of $2$ cycle $2, 4, 8, 6$ every $4$ steps. Since $100$ is a multiple of $4$, the exponent lands on the last entry of the cycle, which is $6$.',
    },
    {
      q: 'For which of these exponents does $2^n$ end in the digit $8$?',
      choices: ['$13$', '$30$', '$40$', '$23$'],
      answer: 3,
      solution:
        'The cycle of units digits is $2, 4, 8, 6$, so $2^n$ ends in $8$ when $n$ leaves a remainder of $3$ upon division by $4$. Among the choices, $23 = 4 \\cdot 5 + 3$ is the only one; the others leave remainders $1$, $2$, and $0$, ending in $2$, $4$, and $6$.',
    },
  ],
]

const s23 = [
  // p1 — a nonzero base to the zero power
  [
    {
      q: 'What is $23^0$?',
      choices: ['$1$', '$0$', '$23$', '$230$'],
      answer: 0,
      solution:
        'Walk down the staircase: $23^2 = 529$, $23^1 = 23$, and each step divides by $23$. One more step gives $23^0 = 23 \\div 23 = 1$. Every nonzero base behaves the same way.',
    },
    {
      q: 'What is $100^0$?',
      choices: ['$0$', '$1$', '$100$', '$1000$'],
      answer: 1,
      solution:
        'The size of the base does not matter at all: any nonzero number to the zero power is $1$, so $100^0 = 1$. The zero in the exponent does not tack another zero onto the base.',
    },
    {
      q: 'Which of these expressions equals $1$?',
      choices: ['$6 \\cdot 6^0$', '$6^0 + 6^0$', '$0 \\cdot 6^0$', '$6^0$'],
      answer: 3,
      solution:
        'Since $6^0 = 1$, the four choices are $6 \\cdot 1 = 6$, $1 + 1 = 2$, $0 \\cdot 1 = 0$, and $1$ itself. Only the bare $6^0$ is equal to $1$.',
    },
  ],
  // p2 — negative base to the zero power
  [
    {
      q: 'What is $(-45)^0$?',
      choices: ['$-1$', '$1$', '$0$', '$-45$'],
      answer: 1,
      solution:
        'The parentheses raise the whole number $-45$ to the zero power, and any nonzero base to the zero power is $1$. The minus sign is inside the parentheses, so it goes along for the ride and disappears.',
    },
    {
      q: 'Which of these expressions has the value $1$?',
      choices: ['$(-3)^1$', '$-3^0$', '$(-3)^0$', '$0^3$'],
      answer: 2,
      solution:
        'Only $(-3)^0$ raises a nonzero base to the zero power, giving $1$. Without parentheses, $-3^0 = -(3^0) = -1$; also $(-3)^1 = -3$ and $0^3 = 0$.',
    },
    {
      q: 'For which of these values of $n$ is $n^0$ NOT equal to $1$?',
      choices: ['$-6$', '$1$', '$-1$', '$0$'],
      answer: 3,
      solution:
        'The zero-power rule works for every base except one troublemaker. Negative bases are fine: $(-6)^0 = 1$ and $(-1)^0 = 1$. But $0^0$ is left undefined, because the staircase that proves the rule would require dividing by $0$.',
    },
  ],
  // p3 — adding zero powers
  [
    {
      q: 'Compute $7^0 + 2^0 + 9^0$.',
      choices: ['$3$', '$18$', '$1$', '$0$'],
      answer: 0,
      solution:
        'Each term is a nonzero base to the zero power, so each one equals $1$: the sum is $1 + 1 + 1 = 3$. Adding the bases would give $18$, but the exponents act before the addition.',
    },
    {
      q: 'Compute $6^0 - 2^0$.',
      choices: ['$4$', '$0$', '$1$', '$-1$'],
      answer: 1,
      solution:
        'Both terms turn into $1$ first: $6^0 = 1$ and $2^0 = 1$. So the expression is $1 - 1 = 0$. Subtracting the bases instead would give $4$.',
    },
    {
      q: 'Compute $\\left(2^0 + 3^0 + 4^0\\right) \\cdot 5$.',
      choices: ['$45$', '$5$', '$15$', '$3$'],
      answer: 2,
      solution:
        'Inside the parentheses, each zero power is $1$, so the sum is $1 + 1 + 1 = 3$. Then $3 \\cdot 5 = 15$. Adding the bases inside would give $9 \\cdot 5 = 45$.',
    },
  ],
  // p4 — a zero power inside a product
  [
    {
      q: 'Compute $15 \\cdot 6^0$.',
      choices: ['$15$', '$90$', '$0$', '$1$'],
      answer: 0,
      solution:
        'The exponent belongs only to the $6$ and acts before the multiplication: $6^0 = 1$, so the product is $15 \\cdot 1 = 15$. It is a factor of $1$, not a factor of $0$ — nothing gets wiped out.',
    },
    {
      q: 'Compute $4^0 \\cdot 9$.',
      choices: ['$36$', '$0$', '$9$', '$1$'],
      answer: 2,
      solution:
        'First $4^0 = 1$, then $1 \\cdot 9 = 9$. Multiplying by a zero power leaves its partner untouched, which is exactly why $a^0$ has to be $1$ and not $0$.',
    },
    {
      q: 'What number goes in the blank? $\\square \\cdot 8^0 = 23$',
      choices: ['$184$', '$0$', '$1$', '$23$'],
      answer: 3,
      solution:
        'Since $8^0 = 1$, the equation says $\\square \\cdot 1 = 23$, so the blank is $23$. Treating $8^0$ as $8$ would lead you to divide and land on a fraction, and multiplying $23 \\cdot 8 = 184$ goes the wrong direction entirely.',
    },
  ],
  // p5 — minus sign outside a zero power
  [
    {
      q: 'What is $-20^0$? (No parentheses this time!)',
      choices: ['$-1$', '$1$', '$-20$', '$0$'],
      answer: 0,
      solution:
        'Without parentheses the exponent grabs only the $20$: $-20^0 = -(20^0) = -(1) = -1$. With parentheses, $(-20)^0 = 1$ instead — the punctuation decides the sign.',
    },
    {
      q: 'Compute $-6^0 + (-6)^0$.',
      choices: ['$-2$', '$0$', '$2$', '$-1$'],
      answer: 1,
      solution:
        'These two look almost identical but differ by their parentheses. The first is $-(6^0) = -1$ and the second is $(-6)^0 = 1$. Their sum is $-1 + 1 = 0$.',
    },
    {
      q: 'Which of these expressions equals $-1$?',
      choices: ['$(-9)^0$', '$9^0 + 9^0$', '$-9^0$', '$0 \\cdot 9^0$'],
      answer: 2,
      solution:
        'Evaluate each: $(-9)^0 = 1$, $9^0 + 9^0 = 2$, $-9^0 = -(9^0) = -1$, and $0 \\cdot 9^0 = 0$. Only the third one keeps the minus sign outside the exponent, so only it equals $-1$.',
    },
  ],
  // p6 — sum of consecutive powers including the zero power
  [
    {
      q: 'Compute $4^0 + 4^1 + 4^2$.',
      choices: ['$20$', '$21$', '$12$', '$64$'],
      answer: 1,
      solution:
        'Term by term: $4^0 = 1$, $4^1 = 4$, and $4^2 = 16$. The sum is $1 + 4 + 16 = 21$. Forgetting that $4^0 = 1$ leaves you one short at $20$.',
    },
    {
      q: 'Compute $5^2 + 5^1 + 5^0$.',
      choices: ['$30$', '$35$', '$31$', '$125$'],
      answer: 2,
      solution:
        'Running down instead of up changes nothing: $25 + 5 + 1 = 31$. Treating $5^0$ as $5$ would give $35$, and treating it as $0$ would give $30$ — the hidden $1$ is what makes the total $31$.',
    },
    {
      q: 'Compute $4^2 - 4^1 - 4^0$.',
      choices: ['$12$', '$15$', '$8$', '$11$'],
      answer: 3,
      solution:
        'Evaluate each power first: $16 - 4 - 1 = 11$. Both minus signs matter — dropping the $4^0$ term gives $12$, and reading $4^0$ as $4$ gives $8$.',
    },
  ],
  // p7 — zero exponent on a big expression
  [
    {
      q: 'What is $\\left(2^{100}\\right)^0$?',
      choices: ['$1$', '$0$', '$2^{100}$', '$100$'],
      answer: 0,
      solution:
        'You never need to work out $2^{100}$. Whatever huge number it is, it is not zero, and any nonzero number to the zero power is $1$. The power-of-a-power rule agrees: $2^{100 \\cdot 0} = 2^0 = 1$.',
    },
    {
      q: 'What is $\\left(13^0\\right)^7$?',
      choices: ['$0$', '$13$', '$1$', '$7$'],
      answer: 2,
      solution:
        'Work from the inside out: $13^0 = 1$, and then $1^7 = 1$, since multiplying $1$ by itself any number of times still gives $1$. The exponent rule matches: $13^{0 \\cdot 7} = 13^0 = 1$.',
    },
    {
      q: 'What is $\\left(6^3 \\cdot 6^4\\right)^0$?',
      choices: ['$6^7$', '$0$', '$6^{12}$', '$1$'],
      answer: 3,
      solution:
        'Simplify inside first: $6^3 \\cdot 6^4 = 6^7$, which is some big nonzero number. Raising it to the zero power gives $1$. The outer exponent wipes out all that work — that is the point.',
    },
  ],
  // p8 — a zero power inside a chain of products
  [
    {
      q: 'Compute $3^2 \\cdot 3^0 \\cdot 3^1$.',
      choices: ['$27$', '$0$', '$9$', '$81$'],
      answer: 0,
      solution:
        'Add the exponents: $3^{2+0+1} = 3^3 = 27$. Directly, $9 \\cdot 1 \\cdot 3 = 27$. The $3^0$ contributes a factor of $1$, so it changes nothing — it certainly does not zero out the product.',
    },
    {
      q: 'Compute $10^1 \\cdot 10^0 \\cdot 10^2$.',
      choices: ['$0$', '$1000$', '$100$', '$10000$'],
      answer: 1,
      solution:
        'Adding exponents gives $10^{1+0+2} = 10^3 = 1000$. Term by term, $10 \\cdot 1 \\cdot 100 = 1000$. Adding a zero exponent never adds a zero to the answer.',
    },
    {
      q: 'If $4^n \\cdot 4^0 = 4^6$, what is $n$?',
      choices: ['$0$', '$1$', '$5$', '$6$'],
      answer: 3,
      solution:
        'Add the exponents on the left: $4^{n+0} = 4^n$. So you need $4^n = 4^6$, giving $n = 6$. Since $4^0 = 1$, that factor uses up none of the exponent budget — subtracting one for it would wrongly give $5$.',
    },
  ],
  // p9 — powers of ten and place value
  [
    {
      q: 'Compute $10^0 + 10^2 + 10^4$.',
      choices: ['$10100$', '$10101$', '$1111$', '$11111$'],
      answer: 1,
      solution:
        'The terms are $1$, $100$, and $10000$. Each one fills a different place value, giving $10101$ — a $1$ in the ones, hundreds, and ten-thousands places. Dropping the $1$ from $10^0$ leaves $10100$.',
    },
    {
      q: 'Compute $10^3 - 10^0$.',
      choices: ['$1001$', '$1000$', '$999$', '$990$'],
      answer: 2,
      solution:
        'The terms are $1000$ and $1$, so the difference is $1000 - 1 = 999$. Treating $10^0$ as $0$ leaves $1000$ untouched, and treating it as $10$ gives $990$.',
    },
    {
      q: 'Which of these sums equals $1011$?',
      choices: ['$10^3 + 10^2 + 10^1$', '$10^3 + 10^1$', '$10^3 + 10^0$', '$10^3 + 10^1 + 10^0$'],
      answer: 3,
      solution:
        'Read the digits of $1011$ from the left: a $1$ in the thousands place, nothing in the hundreds, a $1$ in the tens, and a $1$ in the ones. That is $10^3 + 10^1 + 10^0 = 1000 + 10 + 1$. The ones digit needs $10^0$, which is easy to forget.',
    },
  ],
  // p10 — zero powers with grouped expressions
  [
    {
      q: 'Compute $(4 + 5)^0 + 4^0 + 5^0$.',
      choices: ['$3$', '$11$', '$1$', '$0$'],
      answer: 0,
      solution:
        'Inside the parentheses, $4 + 5 = 9$, and $9^0 = 1$. The other two terms are also $1$ each, so the total is $1 + 1 + 1 = 3$. Leaving the first term as $9$ would give $11$.',
    },
    {
      q: 'Compute $\\left(2 \\cdot 7\\right)^0 + 2^0 \\cdot 7^0$.',
      choices: ['$14$', '$15$', '$2$', '$1$'],
      answer: 2,
      solution:
        'Work the grouping first: $2 \\cdot 7 = 14$, and $14^0 = 1$. The second piece is $1 \\cdot 1 = 1$. So the total is $1 + 1 = 2$. Notice that grouping the factors before or after the zero power makes no difference at all.',
    },
    {
      q: 'How many of these four expressions are equal to $1$? $\\;(5 + 5)^0, \\quad 5^0 + 5^0, \\quad 5^0 \\cdot 5^0, \\quad \\left(5^0\\right)^5$',
      choices: ['$1$', '$2$', '$4$', '$3$'],
      answer: 3,
      solution:
        'Evaluate them one at a time: $(5 + 5)^0 = 10^0 = 1$, $5^0 + 5^0 = 1 + 1 = 2$, $5^0 \\cdot 5^0 = 1 \\cdot 1 = 1$, and $\\left(5^0\\right)^5 = 1^5 = 1$. Three of the four equal $1$; only the sum is different, because adding two $1$s makes $2$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 2,
  sections: {
    '2.1': s21,
    '2.2': s22,
    '2.3': s23,
  },
}
