// Prealgebra chapter 3 — variations for section 3.7, the chapter challenge,
// and the chapter worksheet. All problems and solutions are original
// MathQuest content.

const s37 = [
  // 1. GCD by listing divisors.
  [
    {
      q: 'What is $\\gcd(8, 12)$?',
      choices: ['$4$', '$24$', '$2$', '$8$'],
      answer: 0,
      solution: 'Divisors of $8$: $1, 2, 4, 8$. Divisors of $12$: $1, 2, 3, 4, 6, 12$. The shared divisors are $1, 2, 4$, and the greatest is $4$. ($24$ is the LCM, which goes the other direction, and $2$ is a common divisor but not the greatest one.)',
    },
    {
      q: 'What is $\\gcd(10, 15)$?',
      choices: ['$30$', '$1$', '$5$', '$10$'],
      answer: 2,
      solution: 'Divisors of $10$: $1, 2, 5, 10$. Divisors of $15$: $1, 3, 5, 15$. They share $1$ and $5$, so the greatest common divisor is $5$. The number $30$ is the LCM, and $10$ cannot work because it does not divide $15$.',
    },
    {
      q: 'What is $\\gcd(14, 21)$?',
      choices: ['$42$', '$14$', '$1$', '$7$'],
      answer: 3,
      solution: 'Divisors of $14$: $1, 2, 7, 14$. Divisors of $21$: $1, 3, 7, 21$. The only shared divisors are $1$ and $7$, so $\\gcd(14, 21) = 7$. The GCD is never bigger than either number, which rules out $42$, and $14$ fails because $21 \\div 14$ is not whole.',
    },
  ],
  // 2. GCD from prime factorizations, one shared prime.
  [
    {
      q: 'What is $\\gcd(9, 21)$?',
      choices: ['$63$', '$3$', '$9$', '$1$'],
      answer: 1,
      solution: 'Factor: $9 = 3^2$ and $21 = 3 \\cdot 7$. The only shared prime is $3$, and its lowest power is $3^1$, so $\\gcd(9, 21) = 3$. Taking the HIGHEST power of $3$ would give $9$ — but $9$ does not divide $21$, so lowest is the rule for GCD.',
    },
    {
      q: 'What is $\\gcd(4, 14)$?',
      choices: ['$28$', '$4$', '$2$', '$7$'],
      answer: 2,
      solution: 'Factor: $4 = 2^2$ and $14 = 2 \\cdot 7$. The only shared prime is $2$, at lowest power $2^1$, so $\\gcd(4, 14) = 2$. The prime $7$ belongs to $14$ alone, so it can never be shared.',
    },
    {
      q: 'What is $\\gcd(27, 18)$?',
      choices: ['$54$', '$3$', '$27$', '$9$'],
      answer: 3,
      solution: 'Factor: $27 = 3^3$ and $18 = 2 \\cdot 3^2$. The only shared prime is $3$, and its lowest power is $3^2 = 9$, so $\\gcd(27, 18) = 9$. Check: $27 \\div 9 = 3$ and $18 \\div 9 = 2$. ✓ Stopping at a single factor of $3$ gives $3$, a common divisor but not the greatest.',
    },
  ],
  // 3. Recognizing relatively prime pairs.
  [
    {
      q: 'Which of these pairs is a relatively prime pair?',
      choices: ['$9$ and $16$', '$14$ and $21$', '$6$ and $15$', '$12$ and $20$'],
      answer: 0,
      solution: 'Relatively prime means the GCD is $1$. Factor $9 = 3^2$ and $16 = 2^4$: no prime is shared, so $\\gcd(9, 16) = 1$. ✓ The others do share: $\\gcd(14, 21) = 7$, $\\gcd(6, 15) = 3$, and $\\gcd(12, 20) = 4$. Both $9$ and $16$ are composite — relatively prime is about what a pair SHARES, not about being prime.',
    },
    {
      q: 'Which pair of numbers is NOT relatively prime?',
      choices: ['$8$ and $9$', '$15$ and $18$', '$7$ and $12$', '$25$ and $16$'],
      answer: 1,
      solution: 'Read the question carefully — we want the pair that DOES share a factor bigger than $1$. Factor $15 = 3 \\cdot 5$ and $18 = 2 \\cdot 3^2$: both contain a $3$, so $\\gcd(15, 18) = 3$. The other three pairs share nothing: $8 = 2^3$ with $9 = 3^2$, $7$ with $12 = 2^2 \\cdot 3$, and $25 = 5^2$ with $16 = 2^4$ all have GCD $1$.',
    },
    {
      q: 'Which pair of numbers has a greatest common divisor of $1$?',
      choices: ['$10$ and $22$', '$21$ and $35$', '$18$ and $27$', '$16$ and $21$'],
      answer: 3,
      solution: 'A GCD of $1$ means no shared prime. Factor $16 = 2^4$ and $21 = 3 \\cdot 7$ — nothing in common, so $\\gcd(16, 21) = 1$. ✓ The rest share a prime: $\\gcd(10, 22) = 2$, $\\gcd(21, 35) = 7$, and $\\gcd(18, 27) = 9$.',
    },
  ],
  // 4. GCD of two different primes.
  [
    {
      q: 'What is $\\gcd(11, 17)$?',
      choices: ['$1$', '$11$', '$17$', '$187$'],
      answer: 0,
      solution: 'Both $11$ and $17$ are prime, so the only divisors of $11$ are $1$ and $11$, and the only divisors of $17$ are $1$ and $17$. The single number on both lists is $1$, so $\\gcd(11, 17) = 1$. The product $11 \\times 17 = 187$ is their LCM, not their GCD.',
    },
    {
      q: 'If $p$ and $q$ are two DIFFERENT prime numbers, what is $\\gcd(p, q)$?',
      choices: ['$p$', '$1$', '$pq$', '$p + q$'],
      answer: 1,
      solution: 'A prime has only two divisors: $1$ and itself. Since $p$ and $q$ are different primes, $p$ does not divide $q$ and $q$ does not divide $p$, so the only divisor they share is $1$. Two different primes are always relatively prime: $\\gcd(p, q) = 1$. (The product $pq$ is their LCM.)',
    },
    {
      q: 'What is $\\gcd(23, 29)$?',
      choices: ['$667$', '$23$', '$1$', '$6$'],
      answer: 2,
      solution: 'Both numbers are prime — neither is divisible by $2$, $3$, or $5$, and both are less than $49 = 7^2$. Two different primes share no factor except $1$, so $\\gcd(23, 29) = 1$. The value $667 = 23 \\times 29$ is the LCM, and $6$ is just the difference $29 - 23$, which has nothing to do with the GCD.',
    },
  ],
  // 5. GCD from prime factorizations, two shared primes.
  [
    {
      q: 'What is $\\gcd(40, 60)$?',
      choices: ['$20$', '$10$', '$120$', '$4$'],
      answer: 0,
      solution: 'Factor: $40 = 2^3 \\cdot 5$ and $60 = 2^2 \\cdot 3 \\cdot 5$. Take the LOWEST power of each shared prime: $2^2$ and $5^1$, so $\\gcd(40, 60) = 4 \\times 5 = 20$. Check: $40 \\div 20 = 2$ and $60 \\div 20 = 3$. ✓ Dropping the $5$ leaves $4$, and $10$ is a common divisor but not the greatest; $120$ is the LCM.',
    },
    {
      q: 'What is $\\gcd(18, 30)$?',
      choices: ['$90$', '$3$', '$6$', '$2$'],
      answer: 2,
      solution: 'Factor: $18 = 2 \\cdot 3^2$ and $30 = 2 \\cdot 3 \\cdot 5$. Lowest shared powers: $2^1$ and $3^1$, so $\\gcd(18, 30) = 2 \\times 3 = 6$. Check: $18 \\div 6 = 3$ and $30 \\div 6 = 5$. ✓ Using only one of the two shared primes gives $2$ or $3$ — both common divisors, but neither is greatest. ($90$ is the LCM.)',
    },
    {
      q: 'What is $\\gcd(45, 60)$?',
      choices: ['$180$', '$5$', '$9$', '$15$'],
      answer: 3,
      solution: 'Factor: $45 = 3^2 \\cdot 5$ and $60 = 2^2 \\cdot 3 \\cdot 5$. The shared primes are $3$ and $5$; take the lowest power of each, $3^1$ and $5^1$, giving $\\gcd(45, 60) = 3 \\times 5 = 15$. Taking the higher power $3^2 = 9$ fails, since $9$ does not divide $60$. ($180$ is the LCM.)',
    },
  ],
  // 6. GCD of larger numbers via prime factorization.
  [
    {
      q: 'Use prime factorizations to find $\\gcd(50, 75)$.',
      choices: ['$25$', '$5$', '$150$', '$10$'],
      answer: 0,
      solution: 'Factor: $50 = 2 \\cdot 5^2$ and $75 = 3 \\cdot 5^2$. The only shared prime is $5$, and it appears twice in BOTH numbers, so take $5^2 = 25$. Check: $50 \\div 25 = 2$ and $75 \\div 25 = 3$. ✓ Using just $5^1$ gives $5$, and pulling in the unshared $2$ gives $10$, which does not divide $75$.',
    },
    {
      q: 'Use prime factorizations to find $\\gcd(42, 70)$.',
      choices: ['$210$', '$14$', '$7$', '$2$'],
      answer: 1,
      solution: 'Factor: $42 = 2 \\cdot 3 \\cdot 7$ and $70 = 2 \\cdot 5 \\cdot 7$. The shared primes are $2$ and $7$, each at power $1$, so $\\gcd(42, 70) = 2 \\times 7 = 14$. Check: $42 \\div 14 = 3$ and $70 \\div 14 = 5$. ✓ Using only one shared prime gives $2$ or $7$; $210$ is the LCM.',
    },
    {
      q: 'Use prime factorizations to find $\\gcd(84, 126)$.',
      choices: ['$252$', '$14$', '$21$', '$42$'],
      answer: 3,
      solution: 'Factor: $84 = 2^2 \\cdot 3 \\cdot 7$ and $126 = 2 \\cdot 3^2 \\cdot 7$. Lowest shared powers: $2^1$, $3^1$, and $7^1$, so $\\gcd(84, 126) = 2 \\times 3 \\times 7 = 42$. Check: $84 \\div 42 = 2$ and $126 \\div 42 = 3$. ✓ Forgetting the $3$ leaves $14$ and forgetting the $2$ leaves $21$; $252$ is the LCM.',
    },
  ],
  // 7. GCD in a splitting-into-equal-groups story.
  [
    {
      q: 'A camp counselor has $40$ granola bars and $32$ juice boxes to sort into identical snack packs with nothing left over. What is the greatest number of snack packs she can make?',
      choices: ['$4$', '$8$', '$160$', '$16$'],
      answer: 1,
      solution: 'The number of packs must divide $40$ (for the granola bars) and also divide $32$ (for the juice boxes), so we want $\\gcd(40, 32)$. Factor: $40 = 2^3 \\cdot 5$ and $32 = 2^5$, giving $\\gcd = 2^3 = 8$. Each of the $8$ packs holds $5$ granola bars and $4$ juice boxes. ($16$ divides $32$ but not $40$, and $160$ is the LCM.)',
    },
    {
      q: 'A florist has $56$ roses and $84$ tulips. She makes identical bouquets using every flower, and she makes as many bouquets as possible. How many roses are in each bouquet?',
      choices: ['$28$', '$3$', '$2$', '$4$'],
      answer: 2,
      solution: 'The number of bouquets must divide both counts, so the greatest number of bouquets is $\\gcd(56, 84)$. Factor: $56 = 2^3 \\cdot 7$ and $84 = 2^2 \\cdot 3 \\cdot 7$, so the GCD is $2^2 \\cdot 7 = 28$ bouquets. The question asks for ROSES per bouquet: $56 \\div 28 = 2$. (The $28$ is the bouquet count and $3$ is the tulips per bouquet; settling for $14$ bouquets instead would give $4$ roses each, but that is not the most bouquets possible.)',
    },
    {
      q: 'Rohan has a $36$ cm ribbon and a $48$ cm ribbon. He cuts both into equal-length pieces, as long as possible, with no ribbon wasted. How long is each piece?',
      choices: ['$144$ cm', '$6$ cm', '$4$ cm', '$12$ cm'],
      answer: 3,
      solution: 'A piece length must divide $36$ and also divide $48$, and we want the longest such length: $\\gcd(36, 48)$. Factor: $36 = 2^2 \\cdot 3^2$ and $48 = 2^4 \\cdot 3$, so the GCD is $2^2 \\cdot 3 = 12$ cm. That gives $3$ pieces from the short ribbon and $4$ from the long one. ($6$ cm works but is not the longest, $4$ is the number of pieces rather than a length, and $144$ is the LCM.)',
    },
  ],
  // 8. The gcd * lcm = product identity, solving for the LCM.
  [
    {
      q: 'You know that $\\gcd(9, 12) = 3$. Use the identity $\\gcd(a,b) \\cdot \\text{lcm}(a,b) = a \\cdot b$ to find $\\text{lcm}(9, 12)$.',
      choices: ['$36$', '$108$', '$21$', '$4$'],
      answer: 0,
      solution: 'The identity gives $3 \\cdot \\text{lcm}(9, 12) = 9 \\times 12 = 108$. Divide both sides by $3$: $\\text{lcm}(9, 12) = 108 \\div 3 = 36$. Check: $36 = 9 \\times 4 = 12 \\times 3$. ✓ Stopping at $108$ skips the division, and $21$ is just the sum $9 + 12$.',
    },
    {
      q: 'Two whole numbers have $\\gcd(a, b) = 5$ and $\\text{lcm}(a, b) = 60$. What is $a \\cdot b$?',
      choices: ['$65$', '$300$', '$12$', '$55$'],
      answer: 1,
      solution: 'The identity $\\gcd(a,b) \\cdot \\text{lcm}(a,b) = a \\cdot b$ can be read left to right too: $a \\cdot b = 5 \\times 60 = 300$. (One such pair is $a = 15$ and $b = 20$: their GCD is $5$, their LCM is $60$, and $15 \\times 20 = 300$. ✓) The distractors add, subtract, and divide the two given numbers instead of multiplying them.',
    },
    {
      q: 'The numbers $14$ and $35$ have $\\gcd(14, 35) = 7$. What is $\\text{lcm}(14, 35)$?',
      choices: ['$490$', '$49$', '$70$', '$245$'],
      answer: 2,
      solution: 'By the identity, $7 \\cdot \\text{lcm}(14, 35) = 14 \\times 35 = 490$, so $\\text{lcm}(14, 35) = 490 \\div 7 = 70$. Check with factorizations: $14 = 2 \\cdot 7$ and $35 = 5 \\cdot 7$, and the highest powers give $2 \\cdot 5 \\cdot 7 = 70$. ✓ Reporting $490$ forgets the division, and $49$ is the sum $14 + 35$.',
    },
  ],
  // 9. GCD of two larger numbers.
  [
    {
      q: 'What is $\\gcd(80, 120)$?',
      choices: ['$40$', '$20$', '$240$', '$8$'],
      answer: 0,
      solution: 'Factor: $80 = 2^4 \\cdot 5$ and $120 = 2^3 \\cdot 3 \\cdot 5$. Lowest shared powers: $2^3$ and $5^1$, so $\\gcd(80, 120) = 8 \\times 5 = 40$. Check: $80 \\div 40 = 2$ and $120 \\div 40 = 3$, and $2$ and $3$ are relatively prime, so we cannot do better. ✓ Dropping the $5$ leaves $8$; $240$ is the LCM.',
    },
    {
      q: 'What is $\\gcd(63, 105)$?',
      choices: ['$315$', '$7$', '$21$', '$63$'],
      answer: 2,
      solution: 'Factor: $63 = 3^2 \\cdot 7$ and $105 = 3 \\cdot 5 \\cdot 7$. The shared primes are $3$ (lowest power $3^1$) and $7$, so $\\gcd(63, 105) = 3 \\times 7 = 21$. Check: $63 \\div 21 = 3$ and $105 \\div 21 = 5$. ✓ Keeping only the shared $7$ and dropping the $3$ gives $7$, a common divisor that is not the greatest; $63$ fails because it does not divide $105$; and $315$ is the LCM.',
    },
    {
      q: 'What is $\\gcd(96, 144)$?',
      choices: ['$288$', '$16$', '$24$', '$48$'],
      answer: 3,
      solution: 'Factor: $96 = 2^5 \\cdot 3$ and $144 = 2^4 \\cdot 3^2$. Lowest shared powers: $2^4$ and $3^1$, so $\\gcd(96, 144) = 16 \\times 3 = 48$. Check: $96 \\div 48 = 2$ and $144 \\div 48 = 3$. ✓ Forgetting the $3$ gives $16$, using only $2^3 \\cdot 3$ gives $24$, and $288$ is the LCM.',
    },
  ],
  // 10. The identity used without knowing the numbers.
  [
    {
      q: 'Two whole numbers have product $360$ and greatest common divisor $6$. What is their least common multiple?',
      choices: ['$2160$', '$60$', '$354$', '$30$'],
      answer: 1,
      solution: 'Use $\\gcd \\cdot \\text{lcm} = \\text{product}$, which holds even when the two numbers stay secret: $6 \\times \\text{lcm} = 360$, so $\\text{lcm} = 360 \\div 6 = 60$. (One such pair is $12$ and $30$: their GCD is $6$, their LCM is $60$, and $12 \\times 30 = 360$. ✓) Multiplying instead of dividing gives $2160$, and subtracting gives $354$.',
    },
    {
      q: 'Two whole numbers have product $588$ and least common multiple $84$. What is their greatest common divisor?',
      choices: ['$672$', '$504$', '$7$', '$14$'],
      answer: 2,
      solution: 'The identity rearranges to $\\gcd = \\text{product} \\div \\text{lcm} = 588 \\div 84 = 7$. (One such pair is $21$ and $28$: $\\gcd(21, 28) = 7$, $\\text{lcm}(21, 28) = 84$, and $21 \\times 28 = 588$. ✓) The distractors come from adding ($672$), subtracting ($504$), and doubling the answer ($14$) instead of dividing.',
    },
    {
      q: 'Two whole numbers have greatest common divisor $9$ and least common multiple $108$. What is their product?',
      choices: ['$117$', '$12$', '$99$', '$972$'],
      answer: 3,
      solution: 'The identity says the product equals $\\gcd \\times \\text{lcm} = 9 \\times 108 = 972$. (One such pair is $27$ and $36$: their GCD is $9$, their LCM is $108$, and $27 \\times 36 = 972$. ✓) Adding gives $117$, subtracting gives $99$, and dividing gives $12$ — only multiplying answers the question asked.',
    },
  ],
]

const challenge = [
  // 1. Counting common multiples in a range.
  [
    {
      q: 'How many numbers from $1$ to $300$ are multiples of both $9$ and $6$?',
      choices: ['$16$', '$5$', '$33$', '$50$'],
      answer: 0,
      solution: 'A number is a multiple of both $9$ and $6$ exactly when it is a multiple of $\\text{lcm}(9, 6) = 18$ — not of $9 \\times 6 = 54$, since the two share a factor of $3$. The multiples of $18$ up to $300$ run from $18 \\times 1$ to $18 \\times 16 = 288$, so there are $16$. (Using $54$ by mistake gives $5$; counting multiples of just one number gives $33$ or $50$.)',
    },
    {
      q: 'How many numbers from $1$ to $250$ are multiples of both $10$ and $4$?',
      choices: ['$6$', '$25$', '$12$', '$62$'],
      answer: 2,
      solution: 'Multiples of both are multiples of $\\text{lcm}(10, 4) = 20$, since $10 = 2 \\cdot 5$ and $4 = 2^2$ give highest powers $2^2 \\cdot 5$. The largest multiple of $20$ under $250$ is $20 \\times 12 = 240$, so the count is $12$. (Using the product $40$ gives $6$; counting multiples of $10$ alone gives $25$ and of $4$ alone gives $62$.)',
    },
    {
      q: 'How many numbers from $1$ to $100$ are multiples of $6$ but NOT multiples of $4$?',
      choices: ['$16$', '$25$', '$12$', '$8$'],
      answer: 3,
      solution: 'There are $16$ multiples of $6$ up to $100$, since $6 \\times 16 = 96$. Among those, the ones that are also multiples of $4$ are the multiples of $\\text{lcm}(6, 4) = 12$: there are $8$ of them, since $12 \\times 8 = 96$. Take them away: $16 - 8 = 8$. (Using $24$ instead of $12$ removes only $4$ numbers and gives $12$.)',
    },
  ],
  // 2. Smallest or largest number in a digit range with a divisibility rule.
  [
    {
      q: 'What is the smallest four-digit number divisible by $6$?',
      choices: ['$1002$', '$1000$', '$1006$', '$1008$'],
      answer: 0,
      solution: 'Divisible by $6$ means even AND digit sum a multiple of $3$. Start at $1000$: it is even but its digit sum is $1$. Next even candidate $1002$ has digit sum $1 + 0 + 0 + 2 = 3$ ✓, so $1002 = 6 \\times 167$ works. Nothing between $1000$ and $1002$ can, since $1001$ is odd. ($1006$ is even but has digit sum $7$, and $1008$ is a multiple of $6$ that comes later.)',
    },
    {
      q: 'What is the largest three-digit number divisible by $4$?',
      choices: ['$998$', '$996$', '$992$', '$1000$'],
      answer: 1,
      solution: 'For $4$, only the last two digits matter. Work down from $999$: $99$ is odd, $98$ gives $98 \\div 4 = 24$ remainder $2$, and $96 = 4 \\times 24$ ✓. So $996$ is the answer. ($1000$ is divisible by $4$ but has four digits, and $992$ is a multiple of $4$ that is not the largest.)',
    },
    {
      q: 'What is the smallest five-digit number divisible by $9$?',
      choices: ['$10{,}000$', '$10{,}080$', '$10{,}009$', '$10{,}008$'],
      answer: 3,
      solution: 'The smallest five-digit number is $10{,}000$, whose digit sum is $1$. We need the digit sum to reach the next multiple of $9$, so we need $8$ more — and adding $8$ to the ones digit costs the least: $10{,}008$ has digit sum $9$ ✓. Every number from $10{,}000$ to $10{,}007$ has digit sum between $1$ and $8$. ($10{,}009$ has digit sum $10$; $10{,}080$ is a multiple of $9$ but larger.)',
    },
  ],
  // 3. Counting divisors from a prime factorization.
  [
    {
      q: 'A number $M$ has prime factorization $2^2 \\cdot 3^3 \\cdot 7^2$. How many divisors does $M$ have?',
      choices: ['$12$', '$36$', '$7$', '$24$'],
      answer: 1,
      solution: 'Add one to each exponent and multiply: $(2+1)(3+1)(2+1) = 3 \\times 4 \\times 3 = 36$. Each divisor is built by choosing how many $2$s ($0$–$2$), how many $3$s ($0$–$3$), and how many $7$s ($0$–$2$), and the choices multiply. (Multiplying the exponents themselves gives $12$, adding them gives $7$, and reading $7^2$ as $7^1$ gives $24$.)',
    },
    {
      q: 'A number $K$ has prime factorization $5^4 \\cdot 11$. How many divisors does $K$ have?',
      choices: ['$4$', '$5$', '$10$', '$6$'],
      answer: 2,
      solution: 'The exponents are $4$ and $1$. Add one to each and multiply: $(4+1)(1+1) = 5 \\times 2 = 10$. (Multiplying the exponents gives $4$, ignoring the $11$ entirely gives $5$, and adding $5 + 1$ instead of multiplying gives $6$.)',
    },
    {
      q: 'A number has prime factorization $2^a \\cdot 7$ and exactly $12$ divisors. What is $a$?',
      choices: ['$6$', '$11$', '$24$', '$5$'],
      answer: 3,
      solution: 'The divisor count is $(a+1)(1+1) = 2(a+1)$, and we need that to equal $12$. So $a + 1 = 6$, giving $a = 5$. Check: $2^5 \\cdot 7 = 224$, and $(5+1)(1+1) = 12$. ✓ Forgetting the last subtraction gives $6$, and ignoring the factor of $7$ gives $a + 1 = 12$, or $11$.',
    },
  ],
  // 4. Odd divisor counts and perfect squares.
  [
    {
      q: 'How many numbers from $1$ to $200$ have an odd number of divisors?',
      choices: ['$14$', '$100$', '$10$', '$15$'],
      answer: 0,
      solution: 'A number has an odd divisor count exactly when it is a perfect square, because one divisor is its own buddy. The perfect squares up to $200$ are $1^2, 2^2, \\ldots, 14^2 = 196$; the next one, $15^2 = 225$, is too big. So there are $14$. (Squares up to $100$ number only $10$, and half of $200$ is $100$.)',
    },
    {
      q: 'How many numbers from $1$ to $60$ have an EVEN number of divisors?',
      choices: ['$30$', '$53$', '$7$', '$52$'],
      answer: 1,
      solution: 'Divisors pair up, so the count is even for every number EXCEPT a perfect square. The squares up to $60$ are $1, 4, 9, 16, 25, 36, 49$ — that is $7$ numbers. Everything else qualifies: $60 - 7 = 53$. (Answering $7$ solves the opposite question, and forgetting that $1 = 1^2$ counts as a square gives $52$.)',
    },
    {
      q: 'How many numbers from $50$ to $150$ have an odd number of divisors?',
      choices: ['$4$', '$6$', '$5$', '$12$'],
      answer: 2,
      solution: 'Again these are exactly the perfect squares. Since $7^2 = 49$ is just below the range and $12^2 = 144$ is just inside it, the squares between $50$ and $150$ are $64, 81, 100, 121, 144$ — five of them. (Counting every square up to $150$ gives $12$, and sliding the low end down to include $49$ gives $6$.)',
    },
  ],
  // 5. LCM of a whole run of small numbers.
  [
    {
      q: 'What is the smallest number that is divisible by every whole number from $1$ to $8$?',
      choices: ['$840$', '$420$', '$40{,}320$', '$168$'],
      answer: 0,
      solution: 'Take the highest power of each prime that any of $1$ through $8$ demands: $8 = 2^3$ demands $2^3$, $4$ is then covered; $3$ and $6$ are covered by $3^1$; then $5$ and $7$. So the answer is $2^3 \\cdot 3 \\cdot 5 \\cdot 7 = 840$. ($420$ misses a factor of $2$ and fails on $8$; $168$ leaves out the $5$; and $8! = 40{,}320$ works but is nowhere near smallest.)',
    },
    {
      q: 'What is the smallest number that is divisible by every whole number from $1$ to $10$?',
      choices: ['$3{,}628{,}800$', '$2520$', '$1260$', '$5040$'],
      answer: 1,
      solution: 'Highest prime powers needed: $8 = 2^3$ gives $2^3$, $9 = 3^2$ gives $3^2$, then $5$ and $7$. Multiply: $8 \\times 9 \\times 5 \\times 7 = 2520$. ($1260$ is half of that and fails on $8$; $5040 = 7!$ works but is twice as big as needed; $10! = 3{,}628{,}800$ is enormously bigger.)',
    },
    {
      q: 'A three-digit number $N$ is divisible by every whole number from $1$ to $6$. What is the smallest possible value of $N$?',
      choices: ['$60$', '$180$', '$100$', '$120$'],
      answer: 3,
      solution: 'Divisible by all of $1$ through $6$ means divisible by $2^2 \\cdot 3 \\cdot 5 = 60$. The multiples of $60$ are $60, 120, 180, \\ldots$, and the first one with three digits is $120$. ($60$ has only two digits, $180$ is a valid multiple but not the smallest three-digit one, and $100$ is not divisible by $3$ or $6$.)',
    },
  ],
  // 6. Sums and products over a list of primes.
  [
    {
      q: 'What is the sum of all the prime numbers between $20$ and $40$?',
      choices: ['$91$', '$120$', '$145$', '$83$'],
      answer: 1,
      solution: 'Sift the odd numbers from $21$ to $39$: $21 = 3 \\cdot 7$, $25 = 5^2$, $27 = 3^3$, $33 = 3 \\cdot 11$, $35 = 5 \\cdot 7$, and $39 = 3 \\cdot 13$ are composite. What survives is $23, 29, 31, 37$. Pair them for easy adding: $23 + 37 = 60$ and $29 + 31 = 60$, so the sum is $120$. (Slipping on $29$ gives $91$, dropping $37$ gives $83$, and counting $25$ as prime gives $145$.)',
    },
    {
      q: 'What is the sum of all the prime numbers less than $20$?',
      choices: ['$78$', '$75$', '$77$', '$86$'],
      answer: 2,
      solution: 'The primes below $20$ are $2, 3, 5, 7, 11, 13, 17, 19$. Add them in friendly chunks: $2 + 3 + 5 = 10$, $7 + 13 = 20$, $11 + 19 = 30$, and $17$ is left over, so the total is $10 + 20 + 30 + 17 = 77$. (Counting $1$ as prime gives $78$, forgetting the even prime $2$ gives $75$, and slipping $9$ onto the list gives $86$.)',
    },
    {
      q: 'What is the product of all the prime numbers between $1$ and $10$?',
      choices: ['$105$', '$17$', '$1890$', '$210$'],
      answer: 3,
      solution: 'The primes between $1$ and $10$ are $2, 3, 5, 7$ — remember that $1$ is neither prime nor composite, and $9 = 3^2$ is composite. Multiply: $2 \\times 3 = 6$, $6 \\times 5 = 30$, $30 \\times 7 = 210$. (Forgetting $2$ gives $105$, adding instead of multiplying gives $17$, and including $9$ gives $1890$.)',
    },
  ],
  // 7. The gcd-lcm-product identity with three different unknowns.
  [
    {
      q: 'Two numbers have $\\gcd$ equal to $9$ and $\\text{lcm}$ equal to $90$. What is their product?',
      choices: ['$810$', '$99$', '$10$', '$81$'],
      answer: 0,
      solution: 'By the identity $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b$, the product is $9 \\times 90 = 810$. (One such pair is $18$ and $45$: $\\gcd(18, 45) = 9$, $\\text{lcm}(18, 45) = 90$, and $18 \\times 45 = 810$. ✓) Adding gives $99$, dividing gives $10$, and squaring the GCD gives $81$ — none of which is the product.',
    },
    {
      q: 'Two numbers have product $1350$ and $\\gcd$ equal to $15$. What is their $\\text{lcm}$?',
      choices: ['$20{,}250$', '$1335$', '$90$', '$6$'],
      answer: 2,
      solution: 'Rearrange the identity: $\\text{lcm} = \\text{product} \\div \\gcd = 1350 \\div 15 = 90$. (One such pair is $15$ and $90$: $\\gcd(15, 90) = 15$, $\\text{lcm}(15, 90) = 90$, and $15 \\times 90 = 1350$. ✓) Multiplying instead gives $20{,}250$, subtracting gives $1335$, and dividing twice by $15$ gives $6$.',
    },
    {
      q: 'Two numbers $a$ and $b$ satisfy $a \\cdot b = 504$ and $\\text{lcm}(a, b) = 168$. What is $\\gcd(a, b)$?',
      choices: ['$672$', '$336$', '$84$', '$3$'],
      answer: 3,
      solution: 'The identity gives $\\gcd(a, b) = 504 \\div 168 = 3$. (One such pair is $21$ and $24$: $\\gcd(21, 24) = 3$, $\\text{lcm}(21, 24) = 168$, and $21 \\times 24 = 504$. ✓) Adding gives $672$, subtracting gives $336$, and halving the LCM gives $84$.',
    },
  ],
  // 8. Smallest/largest multi-digit number divisible by two numbers at once.
  [
    {
      q: 'What is the smallest three-digit number divisible by both $6$ and $8$?',
      choices: ['$120$', '$144$', '$100$', '$102$'],
      answer: 0,
      solution: 'Divisible by both means divisible by $\\text{lcm}(6, 8)$. Factor: $6 = 2 \\cdot 3$ and $8 = 2^3$, so the LCM is $2^3 \\cdot 3 = 24$ — not $48$. The multiples of $24$ are $24, 48, 72, 96, 120, \\ldots$, and $120$ is the first with three digits. ($102$ is divisible by $6$ but not $8$; $100$ is divisible by neither; $144$ is a valid multiple of $24$ but larger.)',
    },
    {
      q: 'What is the largest three-digit number divisible by both $9$ and $5$?',
      choices: ['$995$', '$990$', '$999$', '$945$'],
      answer: 1,
      solution: 'Since $9$ and $5$ are relatively prime, $\\text{lcm}(9, 5) = 45$. Work down from $999$: the largest multiple of $45$ below $1000$ is $45 \\times 22 = 990$. Check: it ends in $0$ ✓ and $9 + 9 + 0 = 18$ is a multiple of $9$ ✓. ($999$ passes the $9$ test but not the $5$ test, $995$ the reverse, and $945 = 45 \\times 21$ is a multiple that comes earlier.)',
    },
    {
      q: 'What is the smallest four-digit number divisible by both $15$ and $4$?',
      choices: ['$1000$', '$1005$', '$1020$', '$1060$'],
      answer: 2,
      solution: 'Since $15 = 3 \\cdot 5$ and $4 = 2^2$ share nothing, $\\text{lcm}(15, 4) = 60$. Divide: $1000 \\div 60 = 16$ remainder $40$, so the first four-digit multiple is $60 \\times 17 = 1020$. Check: $20$ is divisible by $4$ ✓, it ends in $0$ ✓, and $1 + 0 + 2 + 0 = 3$ ✓. ($1005$ is divisible by $15$ but not $4$; $1000$ and $1060$ are divisible by $4$ but not $15$.)',
    },
  ],
  // 9. LCM as a "when do they line up again" count of cycles.
  [
    {
      q: 'A small gear with $8$ teeth meshes with a large gear with $20$ teeth. A mark is painted on each gear where they touch. How many full turns does the SMALL gear make before both marks meet again?',
      choices: ['$2$', '$5$', '$40$', '$160$'],
      answer: 1,
      solution: 'The marks realign once a number of teeth have passed that is a multiple of both $8$ and $20$: that is $\\text{lcm}(8, 20) = 40$ teeth, since $8 = 2^3$ and $20 = 2^2 \\cdot 5$ give $2^3 \\cdot 5$. The small gear turns $40 \\div 8 = 5$ times. ($2$ is how many turns the LARGE gear makes, $40$ is the tooth count, and $160$ is the product of the two tooth numbers.)',
    },
    {
      q: 'A gear with $14$ teeth meshes with a gear with $21$ teeth, with a mark painted on each where they touch. How many full turns does the LARGER gear make before the marks meet again?',
      choices: ['$3$', '$42$', '$2$', '$7$'],
      answer: 2,
      solution: 'The marks meet again after $\\text{lcm}(14, 21)$ teeth have passed. Factor: $14 = 2 \\cdot 7$ and $21 = 3 \\cdot 7$, so the LCM is $2 \\cdot 3 \\cdot 7 = 42$ — not $14 \\times 21 = 294$, since they share a $7$. The larger gear turns $42 \\div 21 = 2$ times. (The smaller gear turns $42 \\div 14 = 3$ times, $42$ is the tooth count, and $7$ is the GCD.)',
    },
    {
      q: 'Two runners start together at the start line of a circular track. One finishes a lap every $5$ minutes and the other every $8$ minutes. How many laps has the FASTER runner completed when they next cross the start line together?',
      choices: ['$40$', '$5$', '$13$', '$8$'],
      answer: 3,
      solution: 'They meet at the start line at times that are multiples of both $5$ and $8$. Since $5$ and $8$ are relatively prime, $\\text{lcm}(5, 8) = 40$ minutes. The faster runner takes $5$ minutes per lap, so she completes $40 \\div 5 = 8$ laps (while the slower one completes $40 \\div 8 = 5$). ($40$ is the number of minutes and $13$ is just the sum of the lap times.)',
    },
  ],
  // 10. Counting divisors with a special shape.
  [
    {
      q: 'How many divisors of $900$ are perfect squares?',
      choices: ['$8$', '$27$', '$4$', '$9$'],
      answer: 0,
      solution: 'Factor: $900 = 2^2 \\cdot 3^2 \\cdot 5^2$. A divisor is a perfect square exactly when every exponent it uses is even, so each prime offers $2$ choices ($0$ or $2$): $2 \\times 2 \\times 2 = 8$. They are $1, 4, 9, 25, 36, 100, 225, 900$. ($27$ counts ALL the divisors, and using only two of the three primes gives $4$.)',
    },
    {
      q: 'How many divisors of $1080$ are perfect squares?',
      choices: ['$32$', '$4$', '$8$', '$16$'],
      answer: 1,
      solution: 'Factor: $1080 = 2^3 \\cdot 3^3 \\cdot 5$. For a square divisor each exponent must be even: the power of $2$ can be $0$ or $2$ ($2$ choices), the power of $3$ can be $0$ or $2$ ($2$ choices), and the power of $5$ must be $0$ ($1$ choice, since $5^1$ is odd and $5^2$ is not available). That gives $2 \\times 2 \\times 1 = 4$: namely $1, 4, 9, 36$. ($32$ counts all divisors, and letting $5$ have $2$ choices gives $8$.)',
    },
    {
      q: 'How many divisors of $2^6 \\cdot 3^4$ are perfect cubes? (A perfect cube is a number of the form $k^3$.)',
      choices: ['$35$', '$12$', '$9$', '$6$'],
      answer: 3,
      solution: 'A divisor is a perfect cube exactly when every exponent is a multiple of $3$ — the cube-root move is to divide each exponent by $3$, just as the square-root move halves them. The power of $2$ can be $2^0, 2^3,$ or $2^6$ ($3$ choices) and the power of $3$ can be $3^0$ or $3^3$ ($2$ choices), giving $3 \\times 2 = 6$ cube divisors: $1, 8, 27, 64, 216, 1728$. ($35$ counts all divisors and $12$ counts the perfect-SQUARE divisors.)',
    },
  ],
  // 11. A number pinned down by three conditions at once.
  [
    {
      q: 'A mystery number is a multiple of $8$, a divisor of $120$, and between $10$ and $30$. What is it?',
      choices: ['$24$', '$40$', '$16$', '$60$'],
      answer: 0,
      solution: 'The divisors of $120$ that are multiples of $8$ are $8, 24, 40,$ and $120$. Only $24$ lands between $10$ and $30$. Each distractor breaks exactly one rule: $40$ is a multiple of $8$ and a divisor of $120$ but is out of range, $16$ is a multiple of $8$ in range but $120 \\div 16$ is not whole, and $60$ divides $120$ but is not a multiple of $8$.',
    },
    {
      q: 'A mystery number is a multiple of $6$, a divisor of $180$, and between $40$ and $70$. What is it?',
      choices: ['$45$', '$48$', '$60$', '$90$'],
      answer: 2,
      solution: 'The divisors of $180$ that are multiples of $6$ are $6, 12, 18, 30, 36, 60, 90,$ and $180$. The only one between $40$ and $70$ is $60$. Checking the traps: $45$ divides $180$ and is in range but is odd, so it is not a multiple of $6$; $48$ is a multiple of $6$ in range but $180 \\div 48$ is not whole; $90$ passes the first two tests but is out of range.',
    },
    {
      q: 'A mystery number is a multiple of $21$, a divisor of $210$, and between $30$ and $80$. What is it?',
      choices: ['$63$', '$70$', '$105$', '$42$'],
      answer: 3,
      solution: 'Factor $210 = 2 \\cdot 3 \\cdot 5 \\cdot 7$. Its divisors that are multiples of $21 = 3 \\cdot 7$ are $21, 42, 105,$ and $210$. The only one between $30$ and $80$ is $42$. ($63 = 3^2 \\cdot 7$ is a multiple of $21$ but needs two $3$s, which $210$ does not have; $70$ divides $210$ but is missing the factor $3$; $105$ passes both tests but is too big.)',
    },
  ],
  // 12. Numbers with a prescribed divisor count.
  [
    {
      q: 'How many whole numbers less than $200$ have exactly $3$ divisors?',
      choices: ['$6$', '$14$', '$7$', '$46$'],
      answer: 0,
      solution: 'Three divisors is an odd count, so the number must be a perfect square, and its divisors must be exactly $1$, something, and itself — so the square of a PRIME: $p^2$ has divisors $1, p, p^2$. The primes with $p^2 < 200$ are $2, 3, 5, 7, 11, 13$, giving $4, 9, 25, 49, 121, 169$ — six numbers. ($14$ counts every square under $200$, and $46$ counts every prime under $200$.)',
    },
    {
      q: 'How many whole numbers from $1$ to $40$ have exactly $4$ divisors?',
      choices: ['$8$', '$14$', '$20$', '$6$'],
      answer: 1,
      solution: 'Since $4 = 4 \\times 1 = 2 \\times 2$, a number with exactly $4$ divisors is either $p^3$ or $p \\cdot q$ for different primes $p$ and $q$. The cubes are $8$ and $27$. The products of two different primes up to $40$ are $6, 10, 14, 15, 21, 22, 26, 33, 34, 35, 38, 39$ — twelve of them. Altogether $2 + 12 = 14$. (Forgetting the $p \\cdot q$ shape and counting only cubes and squares gives $6$; counting every even number that is not a multiple of $4$ gives $20$.)',
    },
    {
      q: 'How many whole numbers less than $100$ have exactly $5$ divisors?',
      choices: ['$4$', '$9$', '$5$', '$2$'],
      answer: 3,
      solution: 'The divisor count is a product of (exponent $+ 1$) terms, and $5$ is prime, so there can be only ONE term: the number must be $p^4$ for a prime $p$. Under $100$ that leaves $2^4 = 16$ and $3^4 = 81$, since $5^4 = 625$ is far too big. So the answer is $2$. ($9$ counts every perfect square under $100$, and $4$ is how many numbers under $100$ have exactly three divisors.)',
    },
  ],
]

const worksheet = [
  // 1. Listing multiples.
  [
    {
      q: 'List the first five multiples of $6$.',
      answer: '$6, 12, 18, 24, 30$',
      solution: 'Skip-count by sixes, or multiply in turn: $6 \\times 1 = 6$, $6 \\times 2 = 12$, $6 \\times 3 = 18$, $6 \\times 4 = 24$, $6 \\times 5 = 30$.',
    },
    {
      q: 'List the first four multiples of $13$.',
      answer: '$13, 26, 39, 52$',
      solution: 'Multiply $13$ by $1, 2, 3, 4$: $13$, $26$, $39$, $52$. Adding $13$ each time is another way to get there — and notice the first multiple is the number itself, not $26$.',
    },
    {
      q: 'List every multiple of $8$ that is between $30$ and $70$.',
      answer: '$32, 40, 48, 56, 64$',
      solution: 'Skip-count by eights and keep only what lands in the window: $8, 16, 24, 32, 40, 48, 56, 64, 72$. The first one past $30$ is $32 = 8 \\times 4$ and the last one before $70$ is $64 = 8 \\times 8$, so the list is $32, 40, 48, 56, 64$.',
    },
  ],
  // 2. Finding a missing digit from a divisibility rule.
  [
    {
      q: 'The three-digit number $5d8$ has tens digit $d$. Find the digit $d$ that makes the number divisible by $9$.',
      answer: '$5$',
      solution: 'The digit sum is $5 + d + 8 = 13 + d$, which must be a multiple of $9$. Since $d$ is a single digit, $13 + d$ runs from $13$ to $22$, and the only multiple of $9$ in that range is $18$. So $d = 5$. Check: $558 = 9 \\times 62$. ✓',
    },
    {
      q: 'The three-digit number $d34$ has hundreds digit $d$. Find the LARGEST digit $d$ that makes the number divisible by $6$.',
      answer: '$8$',
      solution: 'Divisible by $6$ means divisible by $2$ and by $3$. The number ends in $4$, so it is already even for any $d$. For $3$, the digit sum $d + 3 + 4 = d + 7$ must be a multiple of $3$, which happens for $d = 2, 5, 8$ (the hundreds digit cannot be $0$). The largest is $d = 8$. Check: $834 = 6 \\times 139$. ✓',
    },
    {
      q: 'The four-digit number $71d4$ has tens digit $d$. Find the digit $d$ that makes the number divisible by $9$.',
      answer: '$6$',
      solution: 'The digit sum is $7 + 1 + d + 4 = 12 + d$, which must be a multiple of $9$. As $d$ runs from $0$ to $9$, the sum runs from $12$ to $21$, and the only multiple of $9$ there is $18$. So $d = 6$. Check: $7164 = 9 \\times 796$. ✓',
    },
  ],
  // 3. Prime factorization with exponents.
  [
    {
      q: 'Write the prime factorization of $126$ using exponents.',
      answer: '$2 \\cdot 3^2 \\cdot 7$',
      solution: 'Factor tree: $126 = 2 \\times 63$, then $63 = 9 \\times 7$ and $9 = 3 \\times 3$. The leaves are $2, 3, 3, 7$, so $126 = 2 \\cdot 3^2 \\cdot 7$.',
    },
    {
      q: 'Write the prime factorization of $200$ using exponents.',
      answer: '$2^3 \\cdot 5^2$',
      solution: 'Split off the round part: $200 = 8 \\times 25$. Then $8 = 2^3$ and $25 = 5^2$, so $200 = 2^3 \\cdot 5^2$. (Peeling off $2$s one at a time works too: $200 \\to 100 \\to 50 \\to 25$, three halvings and then a stop.)',
    },
    {
      q: 'Write the prime factorization of $594$ using exponents.',
      answer: '$2 \\cdot 3^3 \\cdot 11$',
      solution: 'It is even, so $594 = 2 \\times 297$. The digit sum of $297$ is $18$, so divide by $3$ repeatedly: $297 = 3 \\times 99$, $99 = 3 \\times 33$, $33 = 3 \\times 11$. The leaves are $2, 3, 3, 3, 11$, so $594 = 2 \\cdot 3^3 \\cdot 11$.',
    },
  ],
  // 4. LCM of two numbers.
  [
    {
      q: 'Find $\\text{lcm}(9, 12)$.',
      answer: '$36$',
      solution: 'Factor: $9 = 3^2$ and $12 = 2^2 \\cdot 3$. Take the highest power of each prime: $2^2 \\cdot 3^2 = 36$. Check: $36 = 9 \\times 4 = 12 \\times 3$. ✓ (The product $108$ triple-counts the shared factor of $3$.)',
    },
    {
      q: 'Find $\\text{lcm}(14, 6)$.',
      answer: '$42$',
      solution: 'Factor: $14 = 2 \\cdot 7$ and $6 = 2 \\cdot 3$. Highest powers: $2 \\cdot 3 \\cdot 7 = 42$. Check: $42 = 14 \\times 3 = 6 \\times 7$. ✓',
    },
    {
      q: 'Find $\\text{lcm}(12, 21)$.',
      answer: '$84$',
      solution: 'Factor: $12 = 2^2 \\cdot 3$ and $21 = 3 \\cdot 7$. Taking the highest power of each prime gives $2^2 \\cdot 3 \\cdot 7 = 84$. Check: $84 = 12 \\times 7 = 21 \\times 4$. ✓',
    },
  ],
  // 5. Counting or listing divisors.
  [
    {
      q: 'How many divisors does $96$ have?',
      answer: '$12$',
      solution: 'Factor: $96 = 2^5 \\cdot 3$. Add one to each exponent and multiply: $(5+1)(1+1) = 12$. Listing confirms it: $1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96$.',
    },
    {
      q: 'How many divisors does $180$ have?',
      answer: '$18$',
      solution: 'Factor: $180 = 2^2 \\cdot 3^2 \\cdot 5$. Add one to each exponent and multiply: $(2+1)(2+1)(1+1) = 3 \\times 3 \\times 2 = 18$. Listing all $18$ by hand would take a while — the formula is much faster.',
    },
    {
      q: 'List all the divisors of $75$.',
      answer: '$1, 3, 5, 15, 25, 75$',
      solution: 'March upward recording buddy pairs: $1 \\times 75$, then $3 \\times 25$, then $5 \\times 15$. Nothing between $5$ and $15$ divides $75$, and the pairs have now crossed, so we stop. That is $6$ divisors — matching $75 = 3 \\cdot 5^2$, which predicts $(1+1)(2+1) = 6$. ✓',
    },
  ],
  // 6. GCD of two numbers.
  [
    {
      q: 'Find $\\gcd(36, 60)$.',
      answer: '$12$',
      solution: 'Factor: $36 = 2^2 \\cdot 3^2$ and $60 = 2^2 \\cdot 3 \\cdot 5$. Take the LOWEST power of each shared prime: $2^2$ and $3^1$, so $\\gcd(36, 60) = 4 \\times 3 = 12$. Check: $36 \\div 12 = 3$ and $60 \\div 12 = 5$. ✓',
    },
    {
      q: 'Find $\\gcd(45, 75)$.',
      answer: '$15$',
      solution: 'Factor: $45 = 3^2 \\cdot 5$ and $75 = 3 \\cdot 5^2$. The shared primes at their lowest powers are $3^1$ and $5^1$, so $\\gcd(45, 75) = 3 \\times 5 = 15$. Check: $45 \\div 15 = 3$ and $75 \\div 15 = 5$. ✓',
    },
    {
      q: 'What is the greatest whole number that divides both $52$ and $91$ evenly?',
      answer: '$13$',
      solution: 'That greatest number is $\\gcd(52, 91)$. Factor: $52 = 2^2 \\cdot 13$ and $91 = 7 \\cdot 13$. The only shared prime is $13$, so the answer is $13$. Check: $52 \\div 13 = 4$ and $91 \\div 13 = 7$. ✓',
    },
  ],
  // 7. Same remainder from several divisors.
  [
    {
      q: 'What is the smallest whole number greater than $1$ that leaves a remainder of $1$ when divided by $4$, by $6$, and by $9$?',
      answer: '$37$',
      solution: 'Subtracting the shared remainder gives a number divisible by $4$, $6$, and $9$ — a multiple of $\\text{lcm}(4, 6, 9)$. Highest prime powers: $2^2 \\cdot 3^2 = 36$. The smallest positive multiple is $36$, so the number is $36 + 1 = 37$. Check: $37 = 4 \\times 9 + 1 = 6 \\times 6 + 1 = 9 \\times 4 + 1$. ✓',
    },
    {
      q: 'What is the smallest whole number greater than $2$ that leaves a remainder of $2$ when divided by $5$, by $6$, and by $8$?',
      answer: '$122$',
      solution: 'Take away the remainder of $2$: what is left must be a multiple of $5$, $6$, and $8$. Highest prime powers: $2^3 \\cdot 3 \\cdot 5 = 120$, so $\\text{lcm}(5, 6, 8) = 120$. Add the remainder back: $120 + 2 = 122$. Check: $122 = 5 \\times 24 + 2 = 6 \\times 20 + 2 = 8 \\times 15 + 2$. ✓',
    },
    {
      q: 'What is the smallest whole number greater than $3$ that leaves a remainder of $3$ when divided by both $4$ and $7$?',
      answer: '$31$',
      solution: 'The number minus $3$ must be divisible by both $4$ and $7$. Since $4$ and $7$ share no factor, $\\text{lcm}(4, 7) = 28$. So the number is $28 + 3 = 31$. Check: $31 = 4 \\times 7 + 3 = 7 \\times 4 + 3$. ✓',
    },
  ],
  // 8. Counting or locating primes.
  [
    {
      q: 'How many prime numbers are there from $1$ to $50$?',
      answer: '$15$',
      solution: 'Sieve it out: drop $1$, then every even number past $2$, then multiples of $3$ past $3$, of $5$ past $5$, and of $7$ past $7$. What survives is $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$ — fifteen primes.',
    },
    {
      q: 'How many prime numbers are there between $30$ and $60$?',
      answer: '$7$',
      solution: 'Every number here is under $64 = 8^2$, so testing the primes $2, 3, 5, 7$ is enough. The even numbers are out; cross off the multiples of $3$ ($33, 39, 45, 51, 57$), of $5$ ($35, 55$), and of $7$ ($49$). What remains is $31, 37, 41, 43, 47, 53, 59$ — seven primes.',
    },
    {
      q: 'What is the sum of the two smallest prime numbers greater than $40$?',
      answer: '$84$',
      solution: 'Test upward from $41$: it is odd, its digit sum is $5$, it does not end in $0$ or $5$, and $7 \\times 6 = 42$ misses it — so $41$ is prime. Next, $42$ is even and $43$ passes the same four tests, so $43$ is prime too. (Both are under $49 = 7^2$, so testing $2, 3, 5, 7$ is enough.) Their sum is $41 + 43 = 84$.',
    },
  ],
  // 9. The gcd-lcm-product identity.
  [
    {
      q: 'Two numbers have $\\gcd(a, b) = 12$ and $a \\cdot b = 864$. Find $\\text{lcm}(a, b)$.',
      answer: '$72$',
      solution: 'Use $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b$: we get $12 \\cdot \\text{lcm}(a, b) = 864$, so $\\text{lcm}(a, b) = 864 \\div 12 = 72$. (One such pair is $12$ and $72$.)',
    },
    {
      q: 'Two numbers have $\\text{lcm}(a, b) = 84$ and $a \\cdot b = 588$. Find $\\gcd(a, b)$.',
      answer: '$7$',
      solution: 'The identity works in either direction: $\\gcd(a, b) \\cdot 84 = 588$, so $\\gcd(a, b) = 588 \\div 84 = 7$. (One such pair is $21$ and $28$: their GCD is $7$, their LCM is $84$, and $21 \\times 28 = 588$. ✓)',
    },
    {
      q: 'Two numbers have $\\gcd(a, b) = 6$ and $\\text{lcm}(a, b) = 90$. Find $a \\cdot b$.',
      answer: '$540$',
      solution: 'Here the identity is used left to right, with no division needed: $a \\cdot b = 6 \\times 90 = 540$. (One such pair is $18$ and $30$: their GCD is $6$, their LCM is $90$, and $18 \\times 30 = 540$. ✓)',
    },
  ],
  // 10. Smallest perfect square with a required factor.
  [
    {
      q: 'What is the smallest perfect square that is a multiple of $45$?',
      answer: '$225$',
      solution: 'Factor: $45 = 3^2 \\cdot 5$. A perfect square needs every exponent even, and the $5$ appears just once, so it needs a partner: multiply by $5$ to get $3^2 \\cdot 5^2 = 225 = 15^2$. ✓ No smaller square works, since any square multiple of $45$ must contain $3^2 \\cdot 5^2$.',
    },
    {
      q: 'What is the smallest perfect square that is a multiple of $24$?',
      answer: '$144$',
      solution: 'Factor: $24 = 2^3 \\cdot 3$. Both exponents are odd, so each prime needs one more copy: multiply by $2 \\times 3 = 6$ to reach $2^4 \\cdot 3^2 = 144 = 12^2$. ✓ Checking the smaller squares $36, 49, 64, 81, 100,$ and $121$ confirms that none is a multiple of $24$.',
    },
    {
      q: 'What is the smallest perfect square greater than $1$ that is a multiple of $21$?',
      answer: '$441$',
      solution: 'Factor: $21 = 3 \\cdot 7$. Each prime appears once, so a square multiple needs a second copy of each: $3^2 \\cdot 7^2 = 441 = 21^2$. ✓ Any perfect square divisible by $21$ must contain both $3^2$ and $7^2$, so $441$ really is the smallest.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 3,
  sections: { '3.7': s37 },
  challenge,
  worksheet,
}
