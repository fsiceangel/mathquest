// Prealgebra chapter 3 — variations for sections 3.4-3.6.
// All problems and solutions are original MathQuest content.

const s34 = [
  // p1 — prime factorization of a small number
  [
    {
      q: 'What is the prime factorization of $18$?',
      choices: ['$2^2 \\cdot 3$', '$2 \\cdot 3^2$', '$2 \\cdot 3$', '$2 \\cdot 3^3$'],
      answer: 1,
      solution:
        'A factor tree gives $18 = 2 \\times 9 = 2 \\times 3 \\times 3$, so the leaves are $2, 3, 3$ and $18 = 2 \\cdot 3^2$. The exponent belongs to the prime that actually repeats: putting it on the $2$ gives $2^2 \\cdot 3 = 12$, writing each prime just once gives $2 \\cdot 3 = 6$, and an extra $3$ gives $2 \\cdot 3^3 = 54$.',
    },
    {
      q: 'What is the prime factorization of $20$?',
      choices: ['$2 \\cdot 5$', '$2 \\cdot 5^2$', '$2^2 \\cdot 5$', '$2^3 \\cdot 5$'],
      answer: 2,
      solution:
        'Split $20 = 4 \\times 5$, then split $4 = 2 \\times 2$. The leaves are $2, 2, 5$, so $20 = 2^2 \\cdot 5$. Listing each prime only once gives $2 \\cdot 5 = 10$, moving the exponent to the $5$ gives $50$, and one $2$ too many gives $40$.',
    },
    {
      q: 'A factor tree for $63$ ends with the leaves $3$, $3$, and $7$. How is the prime factorization written?',
      choices: ['$3 \\cdot 7$', '$3 \\cdot 7^2$', '$3^3 \\cdot 7$', '$3^2 \\cdot 7$'],
      answer: 3,
      solution:
        'There are two $3$s and one $7$ among the leaves, so gather the $3$s with an exponent: $63 = 3^2 \\cdot 7$. The exponent counts copies, so $3 \\cdot 7^2 = 147$ and $3^3 \\cdot 7 = 189$ count the wrong leaves, and $3 \\cdot 7 = 21$ throws one leaf away.',
    },
  ],
  // p2 — exponent placement changes the number
  [
    {
      q: 'What is the prime factorization of $50$?',
      choices: ['$2 \\cdot 5^2$', '$2^2 \\cdot 5$', '$2 \\cdot 5^3$', '$2 \\cdot 5$'],
      answer: 0,
      solution:
        'Split $50 = 2 \\times 25$ and then $25 = 5 \\times 5$, giving leaves $2, 5, 5$, so $50 = 2 \\cdot 5^2$. Placement matters: $2^2 \\cdot 5 = 20$, $2 \\cdot 5^3 = 250$, and $2 \\cdot 5 = 10$ are three different numbers, and none of them is $50$.',
    },
    {
      q: 'What is the prime factorization of $98$?',
      choices: ['$2^2 \\cdot 7$', '$2 \\cdot 7^2$', '$2 \\cdot 7$', '$2^2 \\cdot 7^2$'],
      answer: 1,
      solution:
        'Peel off the even factor first: $98 = 2 \\times 49$, and $49 = 7 \\times 7$. So $98 = 2 \\cdot 7^2$. Watch the exponent: $2^2 \\cdot 7 = 28$ squares the wrong prime, $2 \\cdot 7 = 14$ loses a $7$, and $2^2 \\cdot 7^2 = 196$ squares both.',
    },
    {
      q: 'What is the prime factorization of $75$?',
      choices: ['$3^2 \\cdot 5$', '$3 \\cdot 5$', '$3^2 \\cdot 5^2$', '$3 \\cdot 5^2$'],
      answer: 3,
      solution:
        'Split $75 = 3 \\times 25 = 3 \\times 5 \\times 5$, so $75 = 3 \\cdot 5^2$. Only the $5$ repeats. Squaring the $3$ instead gives $3^2 \\cdot 5 = 45$, squaring both gives $225$, and squaring neither gives $15$.',
    },
  ],
  // p3 — recognizing when every factor is prime
  [
    {
      q: 'In which of these products is EVERY factor prime?',
      choices: ['$3 \\cdot 5 \\cdot 5$', '$2 \\cdot 9$', '$4 \\cdot 6$', '$7 \\cdot 10$'],
      answer: 0,
      solution:
        'Check the factors one at a time. In $3 \\cdot 5 \\cdot 5$ all three are prime, so that product ($75$) is finished. The others still hide a composite: $9 = 3^2$, $4 = 2^2$ and $6 = 2 \\cdot 3$, and $10 = 2 \\cdot 5$. Each of those trees has another branch to grow.',
    },
    {
      q: 'Kira writes four factorizations. Which one cannot be broken down any further?',
      choices: ['$2 \\cdot 22$', '$5 \\cdot 9$', '$2 \\cdot 2 \\cdot 13$', '$3 \\cdot 14$'],
      answer: 2,
      solution:
        'A factorization is finished when every factor is prime. In $2 \\cdot 2 \\cdot 13$ each factor is prime, so the tree stops there. The others can keep splitting: $22 = 2 \\cdot 11$, $9 = 3 \\cdot 3$, and $14 = 2 \\cdot 7$.',
    },
    {
      q: 'Three of these products are prime factorizations. Which one is NOT?',
      choices: ['$2 \\cdot 3 \\cdot 3$', '$5 \\cdot 7$', '$2 \\cdot 11$', '$3 \\cdot 8$'],
      answer: 3,
      solution:
        'Scan for a composite factor. The numbers $2$, $3$, $5$, $7$, and $11$ are all prime, but $8 = 2^3$ is not — so $3 \\cdot 8$ is the odd one out. Finishing its tree gives $3 \\cdot 2^3 = 24$.',
    },
  ],
  // p4 — factoring a larger number with two repeated primes
  [
    {
      q: 'What is the prime factorization of $144$?',
      choices: ['$2^4 \\cdot 3^2$', '$2^2 \\cdot 3^4$', '$2^3 \\cdot 3^2$', '$2^4 \\cdot 3$'],
      answer: 0,
      solution:
        'Start with $144 = 12 \\times 12$, and each $12 = 2^2 \\cdot 3$. Adding up matching primes gives $2^4 \\cdot 3^2$. Check: $16 \\times 9 = 144$. ✓ Swapping the exponents gives $2^2 \\cdot 3^4 = 324$, and losing a single factor gives $72$ or $48$.',
    },
    {
      q: 'What is the prime factorization of $400$?',
      choices: ['$2^2 \\cdot 5^4$', '$2^4 \\cdot 5^2$', '$2^3 \\cdot 5^2$', '$2^4 \\cdot 5$'],
      answer: 1,
      solution:
        'Split $400 = 16 \\times 25$, where $16 = 2^4$ and $25 = 5^2$, so $400 = 2^4 \\cdot 5^2$. Swapping the exponents gives $2^2 \\cdot 5^4 = 2500$, dropping a $2$ gives $200$, and dropping a $5$ gives $80$ — every slip lands on a different number.',
    },
    {
      q: 'What is the prime factorization of $500$?',
      choices: ['$2^3 \\cdot 5^2$', '$2^2 \\cdot 5^2$', '$2^2 \\cdot 5^3$', '$2 \\cdot 5^3$'],
      answer: 2,
      solution:
        'Split $500 = 4 \\times 125$, where $4 = 2^2$ and $125 = 5^3$. So $500 = 2^2 \\cdot 5^3$. Swapping the exponents gives $200$, dropping a $5$ gives $100$, and dropping a $2$ gives $250$.',
    },
  ],
  // p5 — read a factorization and multiply it out
  [
    {
      q: 'Which number has the prime factorization $2^2 \\cdot 3^2 \\cdot 5$?',
      choices: ['$120$', '$180$', '$60$', '$90$'],
      answer: 1,
      solution:
        'Multiply the pieces: $2^2 = 4$ and $3^2 = 9$, so the number is $4 \\times 9 \\times 5 = 180$. Reading $3^2$ as $3 \\times 2 = 6$ would give $120$, forgetting one of the $3$s gives $60$, and forgetting one of the $2$s gives $90$.',
    },
    {
      q: 'Which number has the prime factorization $2 \\cdot 5^2 \\cdot 7$?',
      choices: ['$70$', '$140$', '$350$', '$1750$'],
      answer: 2,
      solution:
        'Work left to right: $2 \\times 25 = 50$, then $50 \\times 7 = 350$. Reading $5^2$ as $5 \\times 2 = 10$ gives $140$, using only one $5$ gives $70$, and slipping in a third $5$ gives $1750$.',
    },
    {
      q: 'The prime factorization of a number is $3^2 \\cdot 11$. What is the number?',
      choices: ['$33$', '$66$', '$297$', '$99$'],
      answer: 3,
      solution:
        'Here $3^2 = 9$, so the number is $9 \\times 11 = 99$. Using a single $3$ gives $33$, reading $3^2$ as $3 \\times 2 = 6$ gives $66$, and a third $3$ gives $297$.',
    },
  ],
  // p6 — three-prime factorizations
  [
    {
      q: 'What is the prime factorization of $150$?',
      choices: ['$2 \\cdot 3 \\cdot 5^2$', '$2 \\cdot 3^2 \\cdot 5$', '$2^2 \\cdot 3 \\cdot 5$', '$2 \\cdot 3 \\cdot 5^3$'],
      answer: 0,
      solution:
        'Build the tree: $150 = 2 \\times 75 = 2 \\times 3 \\times 25 = 2 \\times 3 \\times 5 \\times 5$. So $150 = 2 \\cdot 3 \\cdot 5^2$. The $5$ is the prime that repeats — squaring the $3$ gives $90$, squaring the $2$ gives $60$, and a third $5$ gives $750$.',
    },
    {
      q: 'What is the prime factorization of $308$?',
      choices: ['$2 \\cdot 7 \\cdot 11$', '$2 \\cdot 7^2 \\cdot 11$', '$2^2 \\cdot 7 \\cdot 11$', '$2^3 \\cdot 7 \\cdot 11$'],
      answer: 2,
      solution:
        'Halve twice: $308 = 2 \\times 154 = 2 \\times 2 \\times 77$, and $77 = 7 \\times 11$. So $308 = 2^2 \\cdot 7 \\cdot 11$. Stopping after one halving gives $154$, halving once too often gives $616$, and squaring the $7$ by mistake gives $1078$.',
    },
    {
      q: 'What is the prime factorization of $126$?',
      choices: ['$2 \\cdot 3 \\cdot 7$', '$2^2 \\cdot 3 \\cdot 7$', '$2 \\cdot 3 \\cdot 7^2$', '$2 \\cdot 3^2 \\cdot 7$'],
      answer: 3,
      solution:
        'Split $126 = 2 \\times 63 = 2 \\times 9 \\times 7 = 2 \\times 3 \\times 3 \\times 7$, so $126 = 2 \\cdot 3^2 \\cdot 7$. Only the $3$ appears twice: $2 \\cdot 3 \\cdot 7 = 42$ drops one, while $2^2 \\cdot 3 \\cdot 7 = 84$ and $2 \\cdot 3 \\cdot 7^2 = 294$ double the wrong prime.',
    },
  ],
  // p7 — even exponents and square roots
  [
    {
      q: 'Let $m = 2^2 \\cdot 5^4$. What is $\\sqrt{m}$?',
      choices: ['$50$', '$100$', '$1250$', '$25$'],
      answer: 0,
      solution:
        'Every exponent is even, so $m$ is a perfect square and you can halve each exponent: $\\sqrt{m} = 2^1 \\cdot 5^2 = 50$. Check: $m = 4 \\times 625 = 2500$ and $50^2 = 2500$. ✓ Halving only the $5$s gives $100$, dropping the $2$ gives $25$, and halving the number itself instead of the exponents gives $1250$.',
    },
    {
      q: 'Which of these numbers is a perfect square?',
      choices: ['$2^3 \\cdot 3^2$', '$2^4 \\cdot 3^2$', '$2^4 \\cdot 3^3$', '$2^3 \\cdot 3^3$'],
      answer: 1,
      solution:
        'A perfect square has EVERY exponent even. Only $2^4 \\cdot 3^2$ qualifies, and halving its exponents gives $2^2 \\cdot 3 = 12$, so it is $144 = 12^2$. The others each carry an odd exponent: $2^3 \\cdot 3^2 = 72$, $2^4 \\cdot 3^3 = 432$, and $2^3 \\cdot 3^3 = 216$ are not squares.',
    },
    {
      q: 'Let $k = 3^2 \\cdot 7^2$. What is $\\sqrt{k}$?',
      choices: ['$63$', '$147$', '$49$', '$21$'],
      answer: 3,
      solution:
        'Halve both exponents: $\\sqrt{k} = 3 \\cdot 7 = 21$. Check: $k = 9 \\times 49 = 441$ and $21^2 = 441$. ✓ Halving only one exponent leaves $3^2 \\cdot 7 = 63$ or $3 \\cdot 7^2 = 147$, and forgetting the $3$s altogether leaves $49$.',
    },
  ],
  // p8 — big numbers where exponent placement decides everything
  [
    {
      q: 'What is the prime factorization of $392$?',
      choices: ['$2^2 \\cdot 7^3$', '$2^3 \\cdot 7^2$', '$2^3 \\cdot 7^3$', '$2^2 \\cdot 7^2$'],
      answer: 1,
      solution:
        'Notice $392 = 8 \\times 49$, and both pieces are easy: $8 = 2^3$ and $49 = 7^2$. So $392 = 2^3 \\cdot 7^2$. Swapping the exponents gives $2^2 \\cdot 7^3 = 1372$, a much bigger number, and the other two choices are $2744$ and $196$.',
    },
    {
      q: 'What is the prime factorization of $2{,}025$?',
      choices: ['$3^2 \\cdot 5^4$', '$3^4 \\cdot 5^3$', '$3^4 \\cdot 5^2$', '$3^3 \\cdot 5^2$'],
      answer: 2,
      solution:
        'Split $2025 = 81 \\times 25$, where $81 = 3^4$ and $25 = 5^2$, so $2025 = 3^4 \\cdot 5^2$. Swapping the exponents gives $3^2 \\cdot 5^4 = 5625$, one $3$ short gives $3^3 \\cdot 5^2 = 675$, and one $5$ too many gives $10{,}125$.',
    },
    {
      q: 'What is the prime factorization of $2{,}500$?',
      choices: ['$2^4 \\cdot 5^2$', '$2^2 \\cdot 5^3$', '$2^3 \\cdot 5^4$', '$2^2 \\cdot 5^4$'],
      answer: 3,
      solution:
        'Split $2500 = 4 \\times 625$, where $4 = 2^2$ and $625 = 5^4$. So $2500 = 2^2 \\cdot 5^4$. Swapping the exponents gives $2^4 \\cdot 5^2 = 400$, losing a $5$ gives $500$, and an extra $2$ gives $5000$ — exponent placement is the whole problem here.',
    },
  ],
  // p9 — how many DIFFERENT primes a number uses
  [
    {
      q: 'What is the smallest whole number whose prime factorization uses four DIFFERENT primes?',
      choices: ['$210$', '$105$', '$1155$', '$2310$'],
      answer: 0,
      solution:
        'To stay small, take the four smallest primes, each exactly once: $2 \\cdot 3 \\cdot 5 \\cdot 7 = 210$. The number $105 = 3 \\cdot 5 \\cdot 7$ uses only three primes, $1155 = 3 \\cdot 5 \\cdot 7 \\cdot 11$ skips the $2$ and pays for it, and $2310$ uses five primes.',
    },
    {
      q: 'Which of these numbers uses exactly TWO different primes in its prime factorization?',
      choices: ['$30$', '$45$', '$16$', '$70$'],
      answer: 1,
      solution:
        'Factor each: $30 = 2 \\cdot 3 \\cdot 5$ and $70 = 2 \\cdot 5 \\cdot 7$ use three primes, and $16 = 2^4$ uses only one. But $45 = 3^2 \\cdot 5$ uses exactly two, $3$ and $5$ — repeats do not count as new primes.',
    },
    {
      q: 'What is the smallest whole number whose prime factorization uses three different primes, none of them $2$?',
      choices: ['$30$', '$45$', '$105$', '$165$'],
      answer: 2,
      solution:
        'With $2$ ruled out, the three smallest primes available are $3$, $5$, and $7$: $3 \\cdot 5 \\cdot 7 = 105$. The number $30 = 2 \\cdot 3 \\cdot 5$ breaks the rule, $45 = 3^2 \\cdot 5$ uses only two primes, and $165 = 3 \\cdot 5 \\cdot 11$ reaches past $7$ for no reason.',
    },
  ],
  // p10 — multiply up to a perfect square
  [
    {
      q: 'What is the smallest whole number $k$ so that $50k$ is a perfect square?',
      choices: ['$2$', '$5$', '$10$', '$50$'],
      answer: 0,
      solution:
        'Factor first: $50 = 2 \\cdot 5^2$. The $5$s are already paired up, but the single $2$ is lonely, so supply one more: $k = 2$. Check: $50 \\times 2 = 100 = 10^2$. ✓ Taking $k = 50$ also works ($2500 = 50^2$) but is far from smallest, and $k = 5$ or $k = 10$ leaves an odd exponent behind.',
    },
    {
      q: 'What is the smallest whole number $k$ so that $75k$ is a perfect square?',
      choices: ['$5$', '$3$', '$15$', '$75$'],
      answer: 1,
      solution:
        'Factor: $75 = 3 \\cdot 5^2$. The exponent on $5$ is already even; only the $3$ appears an odd number of times, so $k = 3$. Check: $75 \\times 3 = 225 = 15^2$. ✓ Multiplying by $5$ breaks the pair that already worked, and $75$ works but is much too big.',
    },
    {
      q: 'What is the smallest whole number $k$ so that $126k$ is a perfect square?',
      choices: ['$2$', '$7$', '$21$', '$14$'],
      answer: 3,
      solution:
        'Factor: $126 = 2 \\cdot 3^2 \\cdot 7$. The $3$s are paired, but the $2$ and the $7$ each appear once, so both need a partner: $k = 2 \\times 7 = 14$. Check: $126 \\times 14 = 1764 = 42^2$. ✓ Fixing only one lonely prime ($k = 2$ or $k = 7$) leaves the other odd, and $k = 21$ un-pairs the $3$s.',
    },
  ],
]

const s35 = [
  // p1 — LCM of two small numbers, with product and GCD as traps
  [
    {
      q: 'What is $\\text{lcm}(6, 9)$?',
      choices: ['$18$', '$54$', '$3$', '$15$'],
      answer: 0,
      solution:
        'Walk up the multiples of $9$ and stop at the first one that $6$ divides: $9$ (no), $18$ (yes, $18 = 6 \\times 3$). So $\\text{lcm}(6, 9) = 18$. The product $54$ is a common multiple but not the least, $3$ is the greatest common divisor, and $15$ is just the sum.',
    },
    {
      q: 'What is $\\text{lcm}(6, 15)$?',
      choices: ['$90$', '$3$', '$30$', '$21$'],
      answer: 2,
      solution:
        'Factor: $6 = 2 \\cdot 3$ and $15 = 3 \\cdot 5$. Taking the highest power of each prime gives $2 \\cdot 3 \\cdot 5 = 30$. Check: $30 = 6 \\times 5 = 15 \\times 2$. ✓ The product $90$ counts the shared $3$ twice, and $3$ is the GCD.',
    },
    {
      q: 'What is $\\text{lcm}(10, 4)$?',
      choices: ['$40$', '$2$', '$14$', '$20$'],
      answer: 3,
      solution:
        'List multiples of $10$ until $4$ divides one: $10$ (no), $20$ (yes, $20 = 4 \\times 5$). So $\\text{lcm}(10, 4) = 20$. The product $40$ is a common multiple but twice too big, since the two numbers share a factor of $2$ — and that shared $2$ is the GCD.',
    },
  ],
  // p2 — when the numbers share no factor, the LCM is the product
  [
    {
      q: 'What is $\\text{lcm}(4, 9)$?',
      choices: ['$36$', '$13$', '$1$', '$72$'],
      answer: 0,
      solution:
        'Factor: $4 = 2^2$ and $9 = 3^2$. They share no prime at all, so nothing gets counted twice and the LCM is the full product: $4 \\times 9 = 36$. Note that neither number is prime — it is the FACTORS they share, not the numbers themselves, that matters. ($1$ is their GCD and $13$ is their sum.)',
    },
    {
      q: 'What is $\\text{lcm}(5, 8)$?',
      choices: ['$13$', '$40$', '$1$', '$80$'],
      answer: 1,
      solution:
        'Since $5 = 5$ and $8 = 2^3$ have no prime in common, the LCM is their product: $5 \\times 8 = 40$. Check: $40 = 5 \\times 8 = 8 \\times 5$. ✓ Doubling to $80$ overshoots, $13$ is the sum, and $1$ is the GCD.',
    },
    {
      q: 'For which pair of numbers is the LCM equal to the product of the two numbers?',
      choices: ['$6$ and $8$', '$4$ and $10$', '$9$ and $12$', '$6$ and $35$'],
      answer: 3,
      solution:
        'The LCM equals the product exactly when the two numbers share no factor bigger than $1$. Here $6 = 2 \\cdot 3$ and $35 = 5 \\cdot 7$ have no prime in common, so $\\text{lcm}(6, 35) = 210$. The other pairs each share something: $6$ and $8$ share $2$, $4$ and $10$ share $2$, and $9$ and $12$ share $3$.',
    },
  ],
  // p3 — one number divides the other
  [
    {
      q: 'What is $\\text{lcm}(7, 21)$?',
      choices: ['$147$', '$21$', '$7$', '$28$'],
      answer: 1,
      solution:
        'Since $7$ divides $21$, the number $21$ is already a multiple of both — so $\\text{lcm}(7, 21) = 21$. There is no need to climb all the way to the product $147$. ($7$ is the GCD and $28$ is the sum.)',
    },
    {
      q: 'What is $\\text{lcm}(6, 24)$?',
      choices: ['$144$', '$6$', '$24$', '$48$'],
      answer: 2,
      solution:
        'Check the easy case first: does the smaller number divide the bigger one? Yes, $24 = 6 \\times 4$, so $24$ is itself a common multiple and $\\text{lcm}(6, 24) = 24$. The LCM does not have to be bigger than both numbers — $48$ and the product $144$ are common multiples, just not the least.',
    },
    {
      q: 'For which pair of numbers does the LCM equal the LARGER of the two numbers?',
      choices: ['$8$ and $12$', '$9$ and $15$', '$10$ and $4$', '$9$ and $27$'],
      answer: 3,
      solution:
        'The LCM equals the larger number exactly when the smaller one divides it. Only $9$ and $27$ fit: $27 = 9 \\times 3$, so $\\text{lcm}(9, 27) = 27$. For the others the LCM climbs past both numbers: $\\text{lcm}(8, 12) = 24$, $\\text{lcm}(9, 15) = 45$, and $\\text{lcm}(10, 4) = 20$.',
    },
  ],
  // p4 — LCM from prime factorizations
  [
    {
      q: 'What is $\\text{lcm}(12, 16)$?',
      choices: ['$48$', '$192$', '$4$', '$24$'],
      answer: 0,
      solution:
        'Factor: $12 = 2^2 \\cdot 3$ and $16 = 2^4$. Take the highest power of each prime: $2^4 \\cdot 3 = 48$. Check: $48 = 12 \\times 4 = 16 \\times 3$. ✓ The product $192$ counts the shared $2^2$ twice, $4$ is the GCD, and $24$ is short a factor of $2$ — it is not a multiple of $16$.',
    },
    {
      q: 'What is $\\text{lcm}(18, 24)$?',
      choices: ['$432$', '$72$', '$6$', '$42$'],
      answer: 1,
      solution:
        'Factor: $18 = 2 \\cdot 3^2$ and $24 = 2^3 \\cdot 3$. Highest powers: $2^3 \\cdot 3^2 = 72$. Check: $72 = 18 \\times 4 = 24 \\times 3$. ✓ Multiplying the numbers gives $432$, which is $6$ times too big because they share a factor of $6$ — and that $6$ is the GCD.',
    },
    {
      q: 'What is $\\text{lcm}(20, 50)$?',
      choices: ['$1000$', '$10$', '$100$', '$70$'],
      answer: 2,
      solution:
        'Factor: $20 = 2^2 \\cdot 5$ and $50 = 2 \\cdot 5^2$. Take the highest power of each: $2^2 \\cdot 5^2 = 100$. Check: $100 = 20 \\times 5 = 50 \\times 2$. ✓ The product $1000$ is ten times too big, $10$ is the GCD, and $70$ is only the sum.',
    },
  ],
  // p5 — numbers that share a factor
  [
    {
      q: 'What is $\\text{lcm}(8, 20)$?',
      choices: ['$160$', '$40$', '$4$', '$80$'],
      answer: 1,
      solution:
        'Factor: $8 = 2^3$ and $20 = 2^2 \\cdot 5$. Highest powers: $2^3 \\cdot 5 = 40$. Check: $40 = 8 \\times 5 = 20 \\times 2$. ✓ The product $160$ is four times too big, because the shared $2^2$ gets counted twice.',
    },
    {
      q: 'What is $\\text{lcm}(14, 21)$?',
      choices: ['$294$', '$7$', '$42$', '$84$'],
      answer: 2,
      solution:
        'Factor: $14 = 2 \\cdot 7$ and $21 = 3 \\cdot 7$. The $7$ is shared, so it is used once: $2 \\cdot 3 \\cdot 7 = 42$. Check: $42 = 14 \\times 3 = 21 \\times 2$. ✓ The product $294$ is $7$ times the LCM, and $84$ is a common multiple but not the least.',
    },
    {
      q: 'What is $\\text{lcm}(27, 18)$?',
      choices: ['$486$', '$9$', '$108$', '$54$'],
      answer: 3,
      solution:
        'Factor: $27 = 3^3$ and $18 = 2 \\cdot 3^2$. Take the highest power of each prime: $2 \\cdot 3^3 = 54$. Check: $54 = 27 \\times 2 = 18 \\times 3$. ✓ The product $486$ counts the shared $3^2$ twice, $9$ is the GCD, and $108$ is the next common multiple after $54$.',
    },
  ],
  // p6 — repeating events line up again
  [
    {
      q: 'A drum beats every $8$ counts and a bell rings every $12$ counts. They just sounded together. After how many counts do they sound together again?',
      choices: ['$24$ counts', '$96$ counts', '$20$ counts', '$4$ counts'],
      answer: 0,
      solution:
        'They sound together at common multiples of $8$ and $12$. Factor: $8 = 2^3$ and $12 = 2^2 \\cdot 3$, so the LCM is $2^3 \\cdot 3 = 24$. In $24$ counts the drum beats $3$ times and the bell rings $2$ times, landing together on the last one. The product $96$ is a later meeting, not the next one.',
    },
    {
      q: 'Two ferries leave the dock together at dawn. One makes a round trip every $45$ minutes and the other every $60$ minutes. How long until they are both back at the dock at the same moment?',
      choices: ['$105$ minutes', '$180$ minutes', '$2700$ minutes', '$90$ minutes'],
      answer: 1,
      solution:
        'Factor: $45 = 3^2 \\cdot 5$ and $60 = 2^2 \\cdot 3 \\cdot 5$. Highest powers give $2^2 \\cdot 3^2 \\cdot 5 = 180$ minutes. Check: $180 = 45 \\times 4 = 60 \\times 3$. ✓ At $90$ minutes the first ferry is docked but the second is mid-trip, $105$ is only the sum, and $2700$ is the product.',
    },
    {
      q: 'A lighthouse flashes every $12$ seconds and a buoy flashes every $18$ seconds. They flash together at the start of a $2$-minute stretch. Not counting that first flash, how many more times do they flash together during those $2$ minutes?',
      choices: ['$10$', '$6$', '$4$', '$3$'],
      answer: 3,
      solution:
        'They flash together every $\\text{lcm}(12, 18) = 36$ seconds. Two minutes is $120$ seconds, and the shared flashes fall at $36$, $72$, and $108$ seconds — the next one, at $144$ seconds, comes too late. That is $3$ more flashes. Counting the opening flash would give $4$; the numbers $10$ and $6$ count the lighthouse and buoy flashing on their own.',
    },
  ],
  // p7 — LCM from factorizations, larger numbers
  [
    {
      q: 'Use prime factorizations to find $\\text{lcm}(18, 30)$.',
      choices: ['$90$', '$540$', '$6$', '$30$'],
      answer: 0,
      solution:
        'Factor: $18 = 2 \\cdot 3^2$ and $30 = 2 \\cdot 3 \\cdot 5$. For each prime take the HIGHEST power: $2 \\cdot 3^2 \\cdot 5 = 90$. Check: $90 = 18 \\times 5 = 30 \\times 3$. ✓ Using each prime just once gives $30$, which is not a multiple of $18$; the product is $540$ and the GCD is $6$.',
    },
    {
      q: 'Use prime factorizations to find $\\text{lcm}(24, 36)$.',
      choices: ['$864$', '$12$', '$72$', '$144$'],
      answer: 2,
      solution:
        'Factor: $24 = 2^3 \\cdot 3$ and $36 = 2^2 \\cdot 3^2$. Highest powers: $2^3 \\cdot 3^2 = 72$. Check: $72 = 24 \\times 3 = 36 \\times 2$. ✓ Adding the exponents instead of taking the larger one gives $2^5 \\cdot 3^3 = 864$, the plain product. The GCD is $12$.',
    },
    {
      q: 'Two numbers have prime factorizations $2^3 \\cdot 5$ and $2^2 \\cdot 5^2$. What is their LCM?',
      choices: ['$40$', '$100$', '$4000$', '$200$'],
      answer: 3,
      solution:
        'You never need the numbers themselves — just take the highest power of each prime: $2^3$ and $5^2$, giving $2^3 \\cdot 5^2 = 200$. (The numbers happen to be $40$ and $100$, and neither of them alone is a multiple of the other.) Their product, $4000$, counts the shared $2^2 \\cdot 5$ twice.',
    },
  ],
  // p8 — LCM of three numbers
  [
    {
      q: 'What is $\\text{lcm}(2, 9, 12)$?',
      choices: ['$36$', '$216$', '$18$', '$72$'],
      answer: 0,
      solution:
        'Factor all three: $2 = 2$, $9 = 3^2$, $12 = 2^2 \\cdot 3$. Take the highest power of each prime across the whole list: $2^2 \\cdot 3^2 = 36$. Check: $36 \\div 2 = 18$, $36 \\div 9 = 4$, $36 \\div 12 = 3$ — all whole. ✓ Stopping after the first two numbers gives $18$, which $12$ does not divide.',
    },
    {
      q: 'What is $\\text{lcm}(6, 8, 10)$?',
      choices: ['$480$', '$120$', '$240$', '$60$'],
      answer: 1,
      solution:
        'Factor: $6 = 2 \\cdot 3$, $8 = 2^3$, $10 = 2 \\cdot 5$. The highest power of $2$ anywhere is $2^3$, so the LCM is $2^3 \\cdot 3 \\cdot 5 = 120$. Check: $120 \\div 6 = 20$, $120 \\div 8 = 15$, $120 \\div 10 = 12$. ✓ Using only $2^2$ gives $60$, which $8$ does not divide.',
    },
    {
      q: 'What is $\\text{lcm}(5, 6, 9)$?',
      choices: ['$270$', '$45$', '$90$', '$30$'],
      answer: 2,
      solution:
        'Factor: $5 = 5$, $6 = 2 \\cdot 3$, $9 = 3^2$. Highest powers: $2 \\cdot 3^2 \\cdot 5 = 90$. Check: $90 \\div 5 = 18$, $90 \\div 6 = 15$, $90 \\div 9 = 10$. ✓ Leaving out a number gives too little: $\\text{lcm}(5, 9) = 45$ and $\\text{lcm}(5, 6) = 30$.',
    },
  ],
  // p9 — LCM hiding in a shopping problem
  [
    {
      q: 'Paper plates come in packs of $12$ and cups come in packs of $18$. What is the smallest number of plates Marisol can buy so that she ends up with exactly one cup for every plate and nothing left over?',
      choices: ['$216$', '$36$', '$6$', '$30$'],
      answer: 1,
      solution:
        'She needs a number that is a multiple of $12$ (whole packs of plates) and of $18$ (whole packs of cups). Factor: $12 = 2^2 \\cdot 3$ and $18 = 2 \\cdot 3^2$, so the LCM is $2^2 \\cdot 3^2 = 36$. That is $3$ packs of plates and $2$ packs of cups. The product $216$ works too, but she would be buying six times what she needs.',
    },
    {
      q: 'Beads come on strings of $15$ and clasps come in bags of $9$. What is the smallest number of beads Theo can buy so that every bead gets a clasp with none left over?',
      choices: ['$135$', '$3$', '$45$', '$24$'],
      answer: 2,
      solution:
        'The total must be a multiple of both $15$ and $9$. Factor: $15 = 3 \\cdot 5$ and $9 = 3^2$, so $\\text{lcm}(15, 9) = 3^2 \\cdot 5 = 45$. That is $3$ strings of beads and $5$ bags of clasps. The product $135$ is a later match, and $3$ is the GCD.',
    },
    {
      q: 'Tiles come in boxes of $14$ and grout packets come in boxes of $21$. Devin buys whole boxes of each so that the number of tiles exactly matches the number of grout packets, using as few as possible. How many BOXES of tiles does he buy?',
      choices: ['$42$', '$2$', '$21$', '$3$'],
      answer: 3,
      solution:
        'First find the matching total: $14 = 2 \\cdot 7$ and $21 = 3 \\cdot 7$, so $\\text{lcm}(14, 21) = 42$ items each. Now answer the question actually asked — boxes of TILES: $42 \\div 14 = 3$ boxes. (He buys $2$ boxes of grout.) Answering $42$ gives the item count, and using the product $294$ instead of the LCM would give $21$ boxes.',
    },
  ],
  // p10 — reason backwards from a known LCM
  [
    {
      q: 'Suppose $\\text{lcm}(b, 10) = 60$. What is the smallest possible value of $b$?',
      choices: ['$12$', '$6$', '$3$', '$60$'],
      answer: 0,
      solution:
        'Factor the target: $60 = 2^2 \\cdot 3 \\cdot 5$, while $10 = 2 \\cdot 5$ supplies only one $2$ and no $3$ at all. So $b$ must bring both the second $2$ and the $3$, making $b$ a multiple of $4 \\times 3 = 12$. Try it: $\\text{lcm}(12, 10) = 60$. ✓ Smaller candidates fall short — $\\text{lcm}(6, 10) = 30$ and $\\text{lcm}(3, 10) = 30$.',
    },
    {
      q: 'Suppose $\\text{lcm}(n, 8) = 40$. What is the smallest possible value of $n$?',
      choices: ['$10$', '$5$', '$40$', '$20$'],
      answer: 1,
      solution:
        'Factor: $40 = 2^3 \\cdot 5$ and $8 = 2^3$. The $8$ already supplies every factor of $2$ that is needed, so all $n$ has to contribute is the $5$ — and $n = 5$ does it: $\\text{lcm}(5, 8) = 40$. ✓ The values $10$, $20$, and $40$ all give an LCM of $40$ as well, but each is bigger than $5$.',
    },
    {
      q: 'Which of these numbers could NOT be the LCM of $6$ and some whole number?',
      choices: ['$12$', '$18$', '$20$', '$30$'],
      answer: 2,
      solution:
        'Any common multiple of $6$ and another number is, first of all, a multiple of $6$. But $20$ is not a multiple of $6$ ($6 \\times 3 = 18$ and $6 \\times 4 = 24$), so it can never be such an LCM. The others are all reachable: $\\text{lcm}(6, 4) = 12$, $\\text{lcm}(6, 9) = 18$, and $\\text{lcm}(6, 10) = 30$.',
    },
  ],
]

const s36 = [
  // p1 — count the divisors of a small number
  [
    {
      q: 'How many divisors does $15$ have?',
      choices: ['$4$', '$2$', '$3$', '$6$'],
      answer: 0,
      solution:
        'March upward looking for buddy pairs: $1 \\times 15$ and $3 \\times 5$. Nothing else fits, so the divisors are $1, 3, 5, 15$ — four of them. Counting only the prime factors $3$ and $5$ gives $2$, and leaving out $1$ gives $3$.',
    },
    {
      q: 'How many divisors does $12$ have?',
      choices: ['$4$', '$6$', '$5$', '$12$'],
      answer: 1,
      solution:
        'Collect the buddy pairs: $1 \\times 12$, $2 \\times 6$, $3 \\times 4$. That is three pairs, so six divisors: $1, 2, 3, 4, 6, 12$. Missing the $3 \\times 4$ pair leaves only $4$, and $12$ would mean every number up to $12$ divides it — but $5$ certainly does not.',
    },
    {
      q: 'How many divisors does $28$ have?',
      choices: ['$3$', '$4$', '$5$', '$6$'],
      answer: 3,
      solution:
        'The buddy pairs are $1 \\times 28$, $2 \\times 14$, and $4 \\times 7$. Each pair contributes TWO divisors, so the count is $3 \\times 2 = 6$: the divisors are $1, 2, 4, 7, 14, 28$. Answering $3$ counts the pairs instead of the divisors, and forgetting a partner gives $4$ or $5$.',
    },
  ],
  // p2 — is this number a divisor?
  [
    {
      q: 'Which of these numbers is a divisor of $60$?',
      choices: ['$15$', '$8$', '$9$', '$14$'],
      answer: 0,
      solution:
        'Divide and look for a remainder: $60 \\div 15 = 4$ exactly, so $15$ is a divisor and its buddy is $4$. The others leave something over: $60 \\div 8 = 7$ remainder $4$, $60 \\div 9 = 6$ remainder $6$, and $60 \\div 14 = 4$ remainder $4$.',
    },
    {
      q: 'Which of these numbers is a divisor of $52$?',
      choices: ['$6$', '$8$', '$13$', '$14$'],
      answer: 2,
      solution:
        'Since $52 = 4 \\times 13$, the number $13$ divides it exactly, with buddy $4$. The rest fail: $52 \\div 6 = 8$ remainder $4$, $52 \\div 8 = 6$ remainder $4$, and $52 \\div 14 = 3$ remainder $10$. Being even is not enough — $6$, $8$, and $14$ are all even and none of them works.',
    },
    {
      q: 'Which of these numbers is NOT a divisor of $84$?',
      choices: ['$12$', '$21$', '$28$', '$16$'],
      answer: 3,
      solution:
        'Three of these fit exactly: $84 = 12 \\times 7 = 21 \\times 4 = 28 \\times 3$. But $84 \\div 16 = 5$ remainder $4$, so $16$ is the one that does not divide $84$. (Since $84 = 2^2 \\cdot 3 \\cdot 7$ has only two factors of $2$, no divisor of $84$ can need four of them.)',
    },
  ],
  // p3 — buddy pairs multiply to the number
  [
    {
      q: 'The divisors of $45$ come in buddy pairs. Which divisor is paired with $9$?',
      choices: ['$36$', '$5$', '$54$', '$405$'],
      answer: 1,
      solution:
        'Buddies multiply to the number, so you need $9 \\times \\square = 45$, giving $45 \\div 9 = 5$. Subtracting would give $36$, adding would give $54$, and multiplying would give $405$ — but the pair rule is $9 \\times 5 = 45$.',
    },
    {
      q: 'In the buddy pairs of $56$, which divisor is paired with $8$?',
      choices: ['$48$', '$64$', '$7$', '$14$'],
      answer: 2,
      solution:
        'Divide: $56 \\div 8 = 7$, so the pair is $8 \\times 7 = 56$. The number $14$ is a real divisor of $56$, but it is the buddy of $4$, not of $8$. And $48$ and $64$ come from subtracting and adding instead of dividing.',
    },
    {
      q: 'One buddy pair of divisors of $72$ is $\\square \\times 12$. What number goes in the box?',
      choices: ['$60$', '$84$', '$864$', '$6$'],
      answer: 3,
      solution:
        'The box holds $72 \\div 12 = 6$, since $6 \\times 12 = 72$. ✓ The other choices come from using the wrong operation: $72 - 12 = 60$, $72 + 12 = 84$, and $72 \\times 12 = 864$.',
    },
  ],
  // p4 — powers of one prime, and the odd count of a square
  [
    {
      q: 'How many divisors does $81$ have?',
      choices: ['$5$', '$4$', '$6$', '$3$'],
      answer: 0,
      solution:
        'List them: $1, 3, 9, 27, 81$ — five divisors. The count is odd because $81 = 9 \\times 9$ is a perfect square, so $9$ is its own buddy. Formula check: $81 = 3^4$, so it has $4 + 1 = 5$ divisors. ✓ Using the exponent alone gives $4$.',
    },
    {
      q: 'How many divisors does $32$ have?',
      choices: ['$5$', '$6$', '$3$', '$12$'],
      answer: 1,
      solution:
        'Since $32 = 2^5$, a divisor uses anywhere from $0$ to $5$ factors of $2$ — that is $5 + 1 = 6$ choices, so $6$ divisors: $1, 2, 4, 8, 16, 32$. Forgetting to add $1$ to the exponent gives $5$, and counting the buddy pairs ($1 \\times 32$, $2 \\times 16$, $4 \\times 8$) instead of the divisors gives $3$.',
    },
    {
      q: 'How many divisors does $64$ have?',
      choices: ['$6$', '$8$', '$4$', '$7$'],
      answer: 3,
      solution:
        'Since $64 = 2^6$, the count is $6 + 1 = 7$: the divisors are $1, 2, 4, 8, 16, 32, 64$. The count is odd, exactly as it should be for the perfect square $8 \\times 8$. Counting buddy pairs gives $4$ (with $8$ paired to itself), and using the exponent alone gives $6$.',
    },
  ],
  // p5 — the add-one-to-each-exponent formula
  [
    {
      q: 'How many divisors does $48$ have?',
      choices: ['$10$', '$4$', '$7$', '$5$'],
      answer: 0,
      solution:
        'Factor: $48 = 2^4 \\cdot 3$. Add $1$ to each exponent and MULTIPLY: $(4+1)(1+1) = 5 \\times 2 = 10$. Multiplying the bare exponents gives $4$, adding the two counts gives $5 + 2 = 7$, and using only the $2$s gives $5$.',
    },
    {
      q: 'How many divisors does $60$ have?',
      choices: ['$2$', '$12$', '$7$', '$6$'],
      answer: 1,
      solution:
        'Factor: $60 = 2^2 \\cdot 3 \\cdot 5$. Add one to each exponent and multiply: $(2+1)(1+1)(1+1) = 3 \\times 2 \\times 2 = 12$. Multiplying the bare exponents gives $2$, adding the counts gives $3 + 2 + 2 = 7$, and forgetting the $5$ entirely gives $6$.',
    },
    {
      q: 'A number has prime factorization $2^3 \\cdot 11$. How many divisors does it have?',
      choices: ['$3$', '$6$', '$8$', '$4$'],
      answer: 2,
      solution:
        'You never need the number itself (it is $88$). A divisor uses $0, 1, 2,$ or $3$ factors of $2$ ($4$ choices) and $0$ or $1$ factor of $11$ ($2$ choices), so there are $4 \\times 2 = 8$ divisors. Adding the counts instead of multiplying gives $6$, and looking only at the $2$s gives $4$.',
    },
  ],
  // p6 — apply the formula to a given factorization
  [
    {
      q: 'Using the prime factorization $45 = 3^2 \\cdot 5$, how many divisors does $45$ have?',
      choices: ['$2$', '$6$', '$5$', '$4$'],
      answer: 1,
      solution:
        'A divisor uses $0$, $1$, or $2$ factors of $3$ ($3$ choices) and $0$ or $1$ factor of $5$ ($2$ choices). That gives $3 \\times 2 = 6$ divisors: $1, 3, 5, 9, 15, 45$. Multiplying the exponents themselves gives $2$, adding the counts gives $5$, and forgetting to add $1$ to the exponent of $3$ gives $4$.',
    },
    {
      q: 'Using the prime factorization $108 = 2^2 \\cdot 3^3$, how many divisors does $108$ have?',
      choices: ['$6$', '$7$', '$12$', '$9$'],
      answer: 2,
      solution:
        'A divisor uses $0$ to $2$ factors of $2$ ($3$ choices) and $0$ to $3$ factors of $3$ ($4$ choices), so there are $3 \\times 4 = 12$ divisors. Multiplying the bare exponents gives $6$, adding the counts gives $3 + 4 = 7$, and forgetting to add $1$ to the exponent of $3$ gives $9$.',
    },
    {
      q: 'A number has prime factorization $3 \\cdot 7 \\cdot 11$. How many divisors does it have?',
      choices: ['$3$', '$6$', '$4$', '$8$'],
      answer: 3,
      solution:
        'Every exponent here is $1$, so each prime is either in a divisor or out of it: $2 \\times 2 \\times 2 = 8$ divisors. They are $1, 3, 7, 11, 21, 33, 77, 231$. Counting the primes gives $3$, adding $2 + 2 + 2$ gives $6$, and using only two of the primes gives $4$.',
    },
  ],
  // p7 — divisor counts for round numbers
  [
    {
      q: 'How many divisors does $200$ have?',
      choices: ['$12$', '$6$', '$7$', '$8$'],
      answer: 0,
      solution:
        'Factor: $200 = 2^3 \\cdot 5^2$. Add one to each exponent and multiply: $(3+1)(2+1) = 4 \\times 3 = 12$. Multiplying the bare exponents gives $6$, adding the counts gives $4 + 3 = 7$, and forgetting to add $1$ to the exponent of $5$ gives $4 \\times 2 = 8$.',
    },
    {
      q: 'How many divisors does $400$ have?',
      choices: ['$8$', '$12$', '$15$', '$10$'],
      answer: 2,
      solution:
        'Factor: $400 = 2^4 \\cdot 5^2$. The count is $(4+1)(2+1) = 5 \\times 3 = 15$. An odd answer is the right kind of answer here, since $400 = 20^2$ is a perfect square. Multiplying the bare exponents gives $8$; forgetting to add $1$ to one exponent gives $12$ or $10$.',
    },
    {
      q: 'Which of these numbers has exactly $8$ divisors?',
      choices: ['$16$', '$36$', '$49$', '$24$'],
      answer: 3,
      solution:
        'Factor and count each one: $16 = 2^4$ gives $5$, $36 = 2^2 \\cdot 3^2$ gives $(2+1)(2+1) = 9$, and $49 = 7^2$ gives $3$. But $24 = 2^3 \\cdot 3$ gives $(3+1)(1+1) = 8$. ✓ Its divisors are $1, 2, 3, 4, 6, 8, 12, 24$.',
    },
  ],
  // p8 — odd divisor counts belong to perfect squares
  [
    {
      q: 'Exactly one of these numbers has an odd number of divisors. Which one is it?',
      choices: ['$121$', '$44$', '$30$', '$52$'],
      answer: 0,
      solution:
        'Only perfect squares have an odd number of divisors, and $121 = 11^2$ is the only square here. Its divisors are $1, 11, 121$ — three of them. The others pair up evenly: $44 = 2^2 \\cdot 11$ and $52 = 2^2 \\cdot 13$ each have $6$ divisors, and $30 = 2 \\cdot 3 \\cdot 5$ has $8$.',
    },
    {
      q: 'Which of these numbers has an EVEN number of divisors?',
      choices: ['$25$', '$40$', '$81$', '$9$'],
      answer: 1,
      solution:
        'Divisors pair up unless the number is a perfect square, so this time you want the number that is NOT a square. Three of these are: $25 = 5^2$, $81 = 9^2$, and $9 = 3^2$, with $3$, $5$, and $3$ divisors. That leaves $40 = 2^3 \\cdot 5$, which has $(3+1)(1+1) = 8$ divisors — an even count.',
    },
    {
      q: 'One of these four numbers has a divisor count that is odd. Which number is it?',
      choices: ['$96$', '$150$', '$200$', '$169$'],
      answer: 3,
      solution:
        'Hunt for the hidden perfect square: $169 = 13^2$, so it alone has an odd divisor count ($1$, $13$, $169$ — three). The others are not squares and come out even: $96 = 2^5 \\cdot 3$, $150 = 2 \\cdot 3 \\cdot 5^2$, and $200 = 2^3 \\cdot 5^2$ each have $12$ divisors.',
    },
  ],
  // p9 — divisor counts for numbers with three prime factors
  [
    {
      q: 'How many divisors does $1000$ have?',
      choices: ['$16$', '$9$', '$8$', '$12$'],
      answer: 0,
      solution:
        'Factor: $1000 = 10^3 = 2^3 \\cdot 5^3$. Add one to each exponent and multiply: $(3+1)(3+1) = 16$. Multiplying the bare exponents gives $9$, adding the counts gives $4 + 4 = 8$, and forgetting to add $1$ to one exponent gives $12$.',
    },
    {
      q: 'How many divisors does $432$ have?',
      choices: ['$12$', '$9$', '$20$', '$16$'],
      answer: 2,
      solution:
        'Factor: $432 = 16 \\times 27 = 2^4 \\cdot 3^3$. The count is $(4+1)(3+1) = 5 \\times 4 = 20$. Multiplying the bare exponents gives $12$, adding the counts gives $9$, and forgetting to add $1$ to the exponent of $2$ gives $16$.',
    },
    {
      q: 'A number has prime factorization $2^2 \\cdot 3 \\cdot 5^3$. How many divisors does it have?',
      choices: ['$6$', '$9$', '$18$', '$24$'],
      answer: 3,
      solution:
        'Add one to every exponent and multiply all three results: $(2+1)(1+1)(3+1) = 3 \\times 2 \\times 4 = 24$. (The number itself is $1500$, but you never had to build it.) Multiplying the bare exponents gives $6$, adding the counts gives $9$, and skipping the $+1$ on the $5$ gives $18$.',
    },
  ],
  // p10 — search for the smallest number with a given divisor count
  [
    {
      q: 'What is the smallest whole number with exactly $8$ divisors?',
      choices: ['$24$', '$16$', '$30$', '$36$'],
      answer: 0,
      solution:
        'To get $8 = 4 \\times 2$ divisors cheaply, use $2^3 \\cdot 3 = 24$: its count is $(3+1)(1+1) = 8$, and its divisors are $1, 2, 3, 4, 6, 8, 12, 24$. Nothing smaller reaches eight — every number below $24$ tops out at six. The number $30 = 2 \\cdot 3 \\cdot 5$ also has $8$ divisors but is bigger, $16$ has $5$, and $36$ has $9$.',
    },
    {
      q: 'What is the smallest whole number with exactly $5$ divisors?',
      choices: ['$8$', '$16$', '$32$', '$81$'],
      answer: 1,
      solution:
        'Since $5$ is prime, the only way to write it as a product of $(\\text{exponent} + 1)$ terms is $5$ itself — so the number must be a single prime to the fourth power. The smallest is $2^4 = 16$, with divisors $1, 2, 4, 8, 16$. Also a fourth power is $81 = 3^4$, but it is much bigger; meanwhile $8$ has $4$ divisors and $32$ has $6$.',
    },
    {
      q: 'What is the smallest whole number with exactly $9$ divisors?',
      choices: ['$100$', '$64$', '$36$', '$24$'],
      answer: 2,
      solution:
        'To reach $9 = 3 \\times 3$, use two different primes each squared, and pick the smallest primes: $2^2 \\cdot 3^2 = 36$. Its divisors are $1, 2, 3, 4, 6, 9, 12, 18, 36$. Using bigger primes gives $100 = 2^2 \\cdot 5^2$, which also has $9$ but is larger; $64 = 2^6$ has $7$ divisors and $24$ has $8$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 3,
  sections: {
    '3.4': s34,
    '3.5': s35,
    '3.6': s36,
  },
}
