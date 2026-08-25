// Prealgebra — Chapter 3: Number Theory
// All problems, explanations, and examples are original MathQuest content.

const s31 = {
  id: '3.1',
  title: 'Multiples',
  learn: {
    concepts: [
      {
        heading: 'What is a multiple?',
        body: 'The multiples of a number are what you get when you multiply it by $1, 2, 3, 4, \\ldots$ So the multiples of $6$ are $6, 12, 18, 24, 30, \\ldots$ You already know how to find them: it is exactly skip-counting!',
      },
      {
        heading: 'The list never ends',
        body: 'Every number has infinitely many multiples — you can always skip-count one more step. The smallest positive multiple of a number is the number itself: the first multiple of $9$ is $9 \\times 1 = 9$.',
      },
      {
        heading: 'Common multiples',
        body: 'A common multiple of two numbers is a number that appears on both of their multiple lists. For example, $3$ has multiples $3, 6, 9, 12, 15, \\ldots$ and $4$ has multiples $4, 8, 12, 16, \\ldots$ The number $12$ shows up on both lists, so $12$ is a common multiple of $3$ and $4$.',
      },
      {
        heading: 'Multiples all around you',
        body: 'Multiples hide everywhere: days on a calendar repeat every $7$, eggs come in cartons of $12$, and a bus that leaves every $15$ minutes departs at multiples of $15$. Whenever things repeat in equal-size steps or pack into equal-size groups, you are working with multiples.',
      },
    ],
    examples: [
      {
        problem: 'List the first five multiples of $7$.',
        steps: [
          'Multiply $7$ by $1, 2, 3, 4, 5$ in turn — or just skip-count by sevens.',
          '$7 \\times 1 = 7$, $7 \\times 2 = 14$, $7 \\times 3 = 21$, $7 \\times 4 = 28$, $7 \\times 5 = 35$.',
        ],
        answer: 'The first five multiples of $7$ are $7, 14, 21, 28, 35$.',
      },
      {
        problem: 'Is $91$ a multiple of $6$?',
        steps: [
          'If $91$ is a multiple of $6$, then $6 \\times \\text{(some whole number)} = 91$.',
          'Try nearby products: $6 \\times 15 = 90$ and $6 \\times 16 = 96$.',
          'The multiples of $6$ jump straight from $90$ to $96$, skipping right over $91$.',
        ],
        answer: 'No — $91$ is not a multiple of $6$, since it falls between $6 \\times 15 = 90$ and $6 \\times 16 = 96$.',
      },
      {
        problem: 'Find all common multiples of $4$ and $6$ that are less than $40$.',
        steps: [
          'Multiples of $4$ less than $40$: $4, 8, 12, 16, 20, 24, 28, 32, 36$.',
          'Multiples of $6$ less than $40$: $6, 12, 18, 24, 30, 36$.',
          'Circle the numbers on both lists: $12$, $24$, and $36$.',
        ],
        answer: 'The common multiples of $4$ and $6$ below $40$ are $12, 24, 36$ — notice they are all multiples of $12$!',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these numbers is a multiple of $8$?',
      choices: ['$18$', '$28$', '$32$', '$44$'],
      answer: 2,
      solution: 'Skip-count by eights: $8, 16, 24, 32, 40, 48$. The number $32 = 8 \\times 4$ is on the list. The others fall in the gaps: $18$ is between $16$ and $24$, $28$ is between $24$ and $32$, and $44$ is between $40$ and $48$.',
    },
    {
      q: 'What is the sixth multiple of $7$?',
      choices: ['$36$', '$42$', '$49$', '$56$'],
      answer: 1,
      solution: 'The sixth multiple of $7$ is $7 \\times 6 = 42$. Careful: $49 = 7 \\times 7$ is the seventh multiple, one step too far.',
    },
    {
      q: 'Fill in the blank in this skip-counting pattern: $9, 18, 27, 36, \\square$',
      choices: ['$46$', '$44$', '$40$', '$45$'],
      answer: 3,
      solution: 'Each step adds $9$. From $36$, one more hop of $9$ lands on $36 + 9 = 45$, which is $9 \\times 5$.',
    },
    {
      q: 'Which of these is NOT a multiple of $6$?',
      choices: ['$54$', '$64$', '$42$', '$66$'],
      answer: 1,
      solution: 'Check each: $54 = 6 \\times 9$, $42 = 6 \\times 7$, and $66 = 6 \\times 11$ are all multiples of $6$. But $64$ sits between $6 \\times 10 = 60$ and $6 \\times 11 = 66$, so it is not a multiple of $6$. (It is a multiple of $8$ instead: $64 = 8 \\times 8$.)',
    },
    {
      q: 'Which number is a common multiple of $3$ and $5$?',
      choices: ['$15$', '$35$', '$53$', '$25$'],
      answer: 0,
      solution: 'A common multiple must appear on both lists. $15 = 3 \\times 5$, so $15$ is a multiple of $3$ AND a multiple of $5$. The number $35$ is a multiple of $5$ but not of $3$ (the multiples of $3$ jump from $33$ to $36$), and $25$ is a multiple of $5$ only.',
    },
    {
      q: 'Mia packs cupcakes into boxes of $4$ with none left over. Which total number of cupcakes could she have?',
      choices: ['$34$', '$30$', '$36$', '$38$'],
      answer: 2,
      solution: 'Packing evenly into boxes of $4$ means the total must be a multiple of $4$. Since $36 = 4 \\times 9$, she could have $36$ cupcakes. The others land between multiples of $4$: $30$ and $34$ and $38$ all leave $2$ cupcakes without a box.',
    },
    {
      q: 'How many multiples of $8$ are there from $1$ to $100$?',
      choices: ['$12$', '$11$', '$13$', '$8$'],
      answer: 0,
      solution: 'The multiples of $8$ are $8 \\times 1, 8 \\times 2, \\ldots$ The biggest one that fits under $100$ is $8 \\times 12 = 96$, since $8 \\times 13 = 104$ is too big. So there are $12$ multiples.',
    },
    {
      q: 'What is the smallest number that is a multiple of both $6$ and $8$?',
      choices: ['$48$', '$24$', '$14$', '$12$'],
      answer: 1,
      solution: 'List multiples of $8$ and stop at the first one that is also a multiple of $6$: $8$ (no), $16$ (no), $24$ (yes — $24 = 6 \\times 4$). So $24$ is the smallest. Note that $48$ works too, but it is not the smallest, and $6 \\times 8 = 48$ is not always the first common multiple!',
    },
    {
      q: 'How many multiples of $7$ are there between $100$ and $200$?',
      choices: ['$13$', '$15$', '$14$', '$16$'],
      answer: 2,
      solution: 'The first multiple of $7$ past $100$ is $7 \\times 15 = 105$, and the last one before $200$ is $7 \\times 28 = 196$. Counting from the $15$th multiple to the $28$th gives $28 - 15 + 1 = 14$ multiples.',
    },
    {
      q: 'Ana claps on every $3$rd beat of a song and Ben claps on every $4$th beat. On how many of the first $100$ beats do they clap together?',
      choices: ['$7$', '$9$', '$12$', '$8$'],
      answer: 3,
      solution: 'They clap together on beats that are multiples of both $3$ and $4$ — that is, multiples of $12$: beats $12, 24, 36, 48, 60, 72, 84, 96$. The next one, $108$, is past beat $100$. That makes $8$ shared claps.',
    },
  ],
}

const s32 = {
  id: '3.2',
  title: 'Divisibility Tests',
  learn: {
    concepts: [
      {
        heading: 'Last-digit tests: 2, 5, and 10',
        body: 'Every whole number of tens ($10, 20, 30, \\ldots$) is divisible by $2$, $5$, and $10$. So only the ones digit matters! A number is divisible by $2$ if it ends in $0, 2, 4, 6,$ or $8$; divisible by $5$ if it ends in $0$ or $5$; and divisible by $10$ if it ends in $0$.',
      },
      {
        heading: 'Digit-sum tests: 3 and 9',
        body: 'Here is the magic behind the famous trick: $10 = 9 + 1$, $100 = 99 + 1$, $1000 = 999 + 1$, and $9$, $99$, $999$ are all multiples of $9$. So each digit leaves behind just itself as a "remainder." That means a number is divisible by $9$ exactly when its digit sum is, and divisible by $3$ exactly when its digit sum is. For $4{,}518$: the digit sum is $4 + 5 + 1 + 8 = 18$, a multiple of $9$, so $4518$ is too.',
      },
      {
        heading: 'The test for 4: last two digits',
        body: 'Since $100 = 4 \\times 25$, every whole number of hundreds is divisible by $4$. So you only need to check the last TWO digits. For $7{,}316$: the last two digits form $16$, and $16 = 4 \\times 4$, so $7316$ is divisible by $4$.',
      },
      {
        heading: 'The test for 6: team up two tests',
        body: 'A number is divisible by $6$ exactly when it is divisible by both $2$ and $3$, because $6 = 2 \\times 3$. So check two things: is it even, and does its digit sum divide by $3$? Pass both tests, and $6$ goes in evenly.',
      },
    ],
    examples: [
      {
        problem: 'Is $3474$ divisible by $6$?',
        steps: [
          'Divisible by $6$ means divisible by both $2$ and $3$.',
          'Test for $2$: the last digit is $4$, which is even. Pass!',
          'Test for $3$: the digit sum is $3 + 4 + 7 + 4 = 18$, and $18 = 3 \\times 6$. Pass!',
        ],
        answer: 'Yes — $3474$ passes both the evenness test and the digit-sum test, so it is divisible by $6$.',
      },
      {
        problem: 'Is $5318$ divisible by $4$?',
        steps: [
          'For $4$, only the last two digits matter, because every hundred is a multiple of $4$.',
          'The last two digits form $18$. Is $18$ divisible by $4$? No: $4 \\times 4 = 16$ and $4 \\times 5 = 20$.',
        ],
        answer: 'No — since $18$ is not divisible by $4$, neither is $5318$.',
      },
      {
        problem: 'Find the digit $d$ so that the three-digit number $52d$ is divisible by $9$.',
        steps: [
          'A number is divisible by $9$ when its digit sum is a multiple of $9$.',
          'The digit sum is $5 + 2 + d = 7 + d$.',
          'We need $7 + d$ to be a multiple of $9$. Since $d$ is a single digit, $7 + d$ is between $7$ and $16$ — the only multiple of $9$ in that range is $9$ itself.',
          'So $7 + d = 9$, which gives $d = 2$.',
        ],
        answer: '$d = 2$, making the number $522$. Check: $5 + 2 + 2 = 9$. ✓',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these numbers is divisible by $5$?',
      choices: ['$342$', '$585$', '$553$', '$508$'],
      answer: 1,
      solution: 'A number is divisible by $5$ exactly when it ends in $0$ or $5$. Only $585$ ends in $5$. The endings $2$, $3$, and $8$ all fail the test.',
    },
    {
      q: 'Which of these numbers is divisible by $2$?',
      choices: ['$4581$', '$3427$', '$9173$', '$7306$'],
      answer: 3,
      solution: 'Divisible by $2$ means even, so look at the ones digit: $7306$ ends in $6$, an even digit. The others end in $1$, $7$, and $3$ — all odd.',
    },
    {
      q: 'Which of these numbers is divisible by $3$?',
      choices: ['$214$', '$342$', '$223$', '$217$'],
      answer: 1,
      solution: 'Add the digits of each. For $342$: $3 + 4 + 2 = 9$, a multiple of $3$, so $342$ passes. The others give digit sums $7$, $7$, and $10$, none of which are multiples of $3$.',
    },
    {
      q: 'Which of these numbers is divisible by $10$?',
      choices: ['$730$', '$735$', '$703$', '$733$'],
      answer: 0,
      solution: 'Divisible by $10$ means the number ends in $0$. Only $730$ does. (Notice $735$ is divisible by $5$ but not by $10$ — ending in $5$ is not enough for $10$.)',
    },
    {
      q: 'Which of these numbers is divisible by $4$?',
      choices: ['$526$', '$634$', '$932$', '$718$'],
      answer: 2,
      solution: 'Check just the last two digits of each: $26$, $34$, $32$, $18$. Only $32 = 4 \\times 8$ is a multiple of $4$, so $932$ is the one. Being even is not enough for $4$ — all four numbers are even, but only one passes!',
    },
    {
      q: 'Which of these numbers is divisible by $9$?',
      choices: ['$4685$', '$2333$', '$6571$', '$6570$'],
      answer: 3,
      solution: 'Add the digits: $6 + 5 + 7 + 0 = 18$, and $18 = 9 \\times 2$, so $6570$ is divisible by $9$. The other digit sums are $23$, $11$, and $19$ — none are multiples of $9$.',
    },
    {
      q: 'Which of these numbers is divisible by $6$?',
      choices: ['$534$', '$921$', '$502$', '$863$'],
      answer: 0,
      solution: 'A multiple of $6$ must pass BOTH the test for $2$ and the test for $3$. $534$ is even and its digit sum $5 + 3 + 4 = 12$ is a multiple of $3$ — it passes both. $921$ has digit sum $12$ but is odd; $502$ is even but has digit sum $7$; $863$ fails both.',
    },
    {
      q: 'The three-digit number $7\\square 4$ is divisible by $9$. What digit goes in the box?',
      choices: ['$2$', '$5$', '$7$', '$8$'],
      answer: 2,
      solution: 'The digit sum is $7 + \\square + 4 = 11 + \\square$, and it must be a multiple of $9$. Since the box holds a single digit, $11 + \\square$ runs from $11$ to $20$, and the only multiple of $9$ in that range is $18$. So $\\square = 7$, giving $774$. Check: $774 = 9 \\times 86$. ✓',
    },
    {
      q: 'What is the smallest digit $d$ that makes the four-digit number $25d2$ divisible by $12$?',
      choices: ['$0$', '$3$', '$6$', '$9$'],
      answer: 1,
      solution: 'Divisible by $12$ means divisible by both $3$ and $4$. Test for $3$: the digit sum $2 + 5 + d + 2 = 9 + d$ must be a multiple of $3$, so $d$ is $0, 3, 6,$ or $9$. Test for $4$: the last two digits "$d2$" must form a multiple of $4$ — of $02, 32, 62, 92$, only $32$ and $92$ work. Both tests together leave $d = 3$ or $d = 9$, and the smallest is $d = 3$. Check: $2532 = 12 \\times 211$. ✓',
    },
    {
      q: 'How many three-digit numbers of the form $4\\square 2$ are divisible by $3$?',
      choices: ['$3$', '$5$', '$4$', '$10$'],
      answer: 2,
      solution: 'The digit sum is $4 + \\square + 2 = 6 + \\square$. Since $6$ is already a multiple of $3$, we need $\\square$ itself to be a multiple of $3$: that is $\\square = 0, 3, 6,$ or $9$. So there are $4$ such numbers: $402, 432, 462, 492$.',
    },
  ],
}

const s33 = {
  id: '3.3',
  title: 'Prime Numbers',
  learn: {
    concepts: [
      {
        heading: 'Primes and composites',
        body: 'A prime number has exactly two divisors: $1$ and itself. The first few primes are $2, 3, 5, 7, 11, 13, \\ldots$ A composite number has more than two divisors — like $12$, which is divisible by $1, 2, 3, 4, 6,$ and $12$. Think of primes as the atoms of arithmetic: they cannot be split into smaller factors.',
      },
      {
        heading: 'Why 1 is neither',
        body: 'The number $1$ has only ONE divisor — itself. A prime needs exactly two divisors, and a composite needs more than two, so $1$ fits in neither club. Mathematicians made this choice on purpose: it keeps prime factorizations unique, as you will see in the next section.',
      },
      {
        heading: 'The sieve: catching primes',
        body: 'To find all primes up to $50$, write out the numbers and cross off every multiple of $2$ (except $2$), then every multiple of $3$ (except $3$), then of $5$, then of $7$. Whatever survives is prime! This ancient method is called the Sieve of Eratosthenes — the composites fall through the holes and the primes stay behind.',
      },
      {
        heading: 'Checking primality the smart way',
        body: 'To test whether a number is prime, try dividing by primes: $2, 3, 5, 7, 11, \\ldots$ But here is the shortcut: you can stop once the prime you are testing passes the square root of your number. Why? If a number factors as $a \\times b$ with both factors bigger than its square root, the product would be too big! Bonus vocabulary: primes that differ by $2$, like $11$ and $13$, are called twin primes.',
      },
    ],
    examples: [
      {
        problem: 'Is $51$ prime?',
        steps: [
          'It looks prime at first glance — it is odd and does not end in $5$. But try the digit-sum test for $3$.',
          'The digit sum is $5 + 1 = 6$, a multiple of $3$. So $3$ divides $51$.',
          'Indeed, $51 = 3 \\times 17$.',
        ],
        answer: 'No — $51 = 3 \\times 17$ is composite. Sneaky numbers like this are why we test instead of guess!',
      },
      {
        problem: 'Is $79$ prime?',
        steps: [
          'We only need to test primes up to $\\sqrt{79}$. Since $8 \\times 8 = 64$ and $9 \\times 9 = 81$, the square root of $79$ is a bit less than $9$, so we test $2, 3, 5, 7$.',
          'Test $2$: $79$ is odd. Test $3$: digit sum $7 + 9 = 16$, not a multiple of $3$. Test $5$: does not end in $0$ or $5$.',
          'Test $7$: $7 \\times 11 = 77$ and $7 \\times 12 = 84$, so $7$ does not divide $79$.',
        ],
        answer: 'Yes — $79$ is prime. Four quick tests were all we needed.',
      },
      {
        problem: 'Find all twin prime pairs between $10$ and $20$.',
        steps: [
          'The primes between $10$ and $20$ are $11, 13, 17, 19$.',
          'Twin primes differ by exactly $2$. Check the gaps: $13 - 11 = 2$ (twins!), $17 - 13 = 4$ (no), $19 - 17 = 2$ (twins!).',
        ],
        answer: 'Two pairs: $11$ and $13$, and $17$ and $19$.',
      },
    ],
  },
  problems: [
    {
      q: 'Which of these numbers is prime?',
      choices: ['$21$', '$25$', '$23$', '$27$'],
      answer: 2,
      solution: 'Check each: $21 = 3 \\times 7$, $25 = 5 \\times 5$, and $27 = 3 \\times 9$ are all composite. But $23$ resists every test — it is odd, its digit sum $5$ is not a multiple of $3$, and it does not end in $0$ or $5$. Since $\\sqrt{23} < 5$, those checks are enough: $23$ is prime.',
    },
    {
      q: 'What is the smallest prime number?',
      choices: ['$0$', '$1$', '$2$', '$3$'],
      answer: 2,
      solution: 'The smallest prime is $2$ — it has exactly two divisors, $1$ and $2$. Remember that $1$ has only one divisor, so it is not prime, and $0$ is not prime either. Fun fact: $2$ is the only even prime, since every other even number is divisible by $2$.',
    },
    {
      q: 'Which of these numbers is composite?',
      choices: ['$31$', '$39$', '$37$', '$41$'],
      answer: 1,
      solution: 'The digit sum of $39$ is $3 + 9 = 12$, a multiple of $3$, so $39 = 3 \\times 13$ is composite. The numbers $31$, $37$, and $41$ all survive the tests for $2$, $3$, and $5$, and since each is less than $49 = 7^2$, they are all prime.',
    },
    {
      q: 'Why is $1$ neither prime nor composite?',
      choices: [
        'It has only one divisor: itself',
        'It is too small to have any divisors',
        'It is neither even nor odd',
        'It is a multiple of every number',
      ],
      answer: 0,
      solution: 'A prime has exactly two divisors and a composite has more than two. The number $1$ has just one divisor ($1$ itself), so it belongs to neither group. It does have a divisor, and it is odd — the divisor COUNT is what settles the question.',
    },
    {
      q: 'How many prime numbers are there between $20$ and $30$?',
      choices: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      solution: 'Test each number from $21$ to $29$: the even ones are out, $21 = 3 \\times 7$, $25 = 5 \\times 5$, and $27 = 3 \\times 9$ are composite. That leaves $23$ and $29$, both prime. So there are $2$.',
    },
    {
      q: 'Which statement about $91$ is true?',
      choices: [
        'It is prime because it is odd',
        'It is prime because it is not divisible by $2$, $3$, or $5$',
        'It is composite because $91 = 7 \\times 13$',
        'It is composite because it ends in $1$',
      ],
      answer: 2,
      solution: 'Since $\\sqrt{91} < 10$, we must test $2, 3, 5,$ AND $7$. The first three fail, but $7 \\times 13 = 91$ — caught it! Stopping at $5$ is the classic trap; $91$ is composite. (Ending in $1$ tells you nothing: $11$ ends in $1$ and is prime.)',
    },
    {
      q: 'To decide whether $143$ is prime by trial division, which primes do you need to test?',
      choices: ['$2, 3, 5$', '$2, 3, 5, 7$', '$2, 3, 5, 7, 11$', 'Every prime up to $143$'],
      answer: 2,
      solution: 'Since $11 \\times 11 = 121$ and $12 \\times 12 = 144$, the square root of $143$ is just under $12$, so we test all primes up to $11$: that is $2, 3, 5, 7, 11$. And the last test pays off: $143 = 11 \\times 13$, so $143$ is composite.',
    },
    {
      q: 'Which pair is a pair of twin primes?',
      choices: ['$13$ and $15$', '$21$ and $23$', '$2$ and $3$', '$17$ and $19$'],
      answer: 3,
      solution: 'Twin primes must BOTH be prime and differ by exactly $2$. In the pair $17$ and $19$, both are prime and $19 - 17 = 2$. ✓ The pair $13$ and $15$ fails because $15 = 3 \\times 5$; $21$ and $23$ fails because $21 = 3 \\times 7$; and $2$ and $3$ differ by only $1$.',
    },
    {
      q: 'What is the largest prime number less than $100$?',
      choices: ['$97$', '$99$', '$93$', '$91$'],
      answer: 0,
      solution: 'Work down from $99$: the digit sum of $99$ is $18$, so $99 = 9 \\times 11$ is composite. Next odd candidates: $97$ is odd, has digit sum $16$, does not end in $5$, and is not a multiple of $7$ ($7 \\times 14 = 98$). Since $\\sqrt{97} < 10$, that is every test — $97$ is prime. (The distractors: $93 = 3 \\times 31$ and $91 = 7 \\times 13$.)',
    },
    {
      q: 'A prime $p$ between $40$ and $50$ has the property that $p + 2$ is also prime. What is $p$?',
      choices: ['$43$', '$45$', '$47$', '$41$'],
      answer: 3,
      solution: 'The primes between $40$ and $50$ are $41, 43, 47$. Now check each partner: $41 + 2 = 43$ is prime ✓; $43 + 2 = 45 = 9 \\times 5$ is composite; $47 + 2 = 49 = 7 \\times 7$ is composite. So $p = 41$, and $41, 43$ are twin primes.',
    },
  ],
}

const s34 = {
  id: '3.4',
  title: 'Prime Factorization',
  learn: {
    concepts: [
      {
        heading: 'Breaking numbers down with factor trees',
        body: 'Every composite number can be split into a product of smaller factors, and those can be split again, until only primes remain. Draw it as a tree: $60$ branches into $6 \\times 10$, then $6$ branches into $2 \\times 3$ and $10$ into $2 \\times 5$. The leaves of the tree — $2, 2, 3, 5$ — are the prime factorization of $60$.',
      },
      {
        heading: 'Writing it with exponents',
        body: 'When a prime appears more than once, gather the copies using an exponent. Instead of $2 \\times 2 \\times 3 \\times 5$, write $2^2 \\cdot 3 \\cdot 5$. By custom we list primes from smallest to largest — it makes factorizations easy to compare at a glance.',
      },
      {
        heading: 'One number, one factorization',
        body: 'Here is one of the most important facts in all of math: every whole number greater than $1$ has exactly ONE prime factorization. No matter how you draw the factor tree — start $60$ as $6 \\times 10$ or as $4 \\times 15$ — you always end with the same leaves: $2^2 \\cdot 3 \\cdot 5$. This is why primes are called the building blocks of numbers.',
      },
      {
        heading: 'Spotting perfect squares',
        body: 'A perfect square like $36 = 6^2$ has a prime factorization where every exponent is EVEN: $36 = 2^2 \\cdot 3^2$. That is because squaring doubles every exponent. So to check whether a big number is a perfect square, factor it and glance at the exponents!',
      },
    ],
    examples: [
      {
        problem: 'Find the prime factorization of $84$.',
        steps: [
          'Start a factor tree: $84 = 2 \\times 42$.',
          'Keep splitting: $42 = 2 \\times 21$, and $21 = 3 \\times 7$.',
          'The leaves are $2, 2, 3, 7$. Gather the repeated $2$s with an exponent.',
        ],
        answer: '$84 = 2^2 \\cdot 3 \\cdot 7$',
      },
      {
        problem: 'Find the prime factorization of $360$.',
        steps: [
          'Split off easy factors: $360 = 36 \\times 10$.',
          'Factor each piece: $36 = 2^2 \\cdot 3^2$ and $10 = 2 \\cdot 5$.',
          'Combine, adding up the exponents of matching primes: $2^2 \\cdot 2 = 2^3$, so $360 = 2^3 \\cdot 3^2 \\cdot 5$.',
        ],
        answer: '$360 = 2^3 \\cdot 3^2 \\cdot 5$',
      },
      {
        problem: 'Use prime factorization to show that $196$ is a perfect square, and find its square root.',
        steps: [
          'Factor: $196 = 2 \\times 98 = 2 \\times 2 \\times 49 = 2^2 \\cdot 7^2$.',
          'Every exponent is even, so $196$ is a perfect square.',
          'Halve each exponent to find the square root: $2^1 \\cdot 7^1 = 14$.',
        ],
        answer: '$196 = 2^2 \\cdot 7^2 = (2 \\cdot 7)^2 = 14^2$, so $\\sqrt{196} = 14$.',
      },
    ],
  },
  problems: [
    {
      q: 'What is the prime factorization of $12$?',
      choices: ['$2^2 \\cdot 3$', '$2 \\cdot 6$', '$4 \\cdot 3$', '$2 \\cdot 3^2$'],
      answer: 0,
      solution: 'A factor tree gives $12 = 2 \\times 6 = 2 \\times 2 \\times 3 = 2^2 \\cdot 3$. The products $2 \\cdot 6$ and $4 \\cdot 3$ do equal $12$, but $6$ and $4$ are not prime, so those are not prime factorizations. And $2 \\cdot 3^2 = 18$, a different number entirely.',
    },
    {
      q: 'What is the prime factorization of $45$?',
      choices: ['$5 \\cdot 9$', '$3 \\cdot 15$', '$3^2 \\cdot 5$', '$3 \\cdot 5^2$'],
      answer: 2,
      solution: 'Split $45 = 9 \\times 5$, then split $9 = 3 \\times 3$. The leaves are $3, 3, 5$, so $45 = 3^2 \\cdot 5$. Watch the exponent placement: $3 \\cdot 5^2 = 75$, not $45$.',
    },
    {
      q: 'Which of these products is a prime factorization (every factor prime)?',
      choices: ['$4 \\cdot 9$', '$2 \\cdot 3 \\cdot 7$', '$6 \\cdot 5$', '$2 \\cdot 2 \\cdot 21$'],
      answer: 1,
      solution: 'In $2 \\cdot 3 \\cdot 7$, every factor is prime — this is the prime factorization of $42$. The others still contain composite factors that can be split further: $4 = 2^2$, $9 = 3^2$, $6 = 2 \\cdot 3$, and $21 = 3 \\cdot 7$. Notice that having lots of factors is not the point — $2 \\cdot 2 \\cdot 21$ has three factors and still is not finished.',
    },
    {
      q: 'What is the prime factorization of $100$?',
      choices: ['$10^2$', '$4 \\cdot 25$', '$2 \\cdot 5^2$', '$2^2 \\cdot 5^2$'],
      answer: 3,
      solution: 'Split $100 = 10 \\times 10$, and each $10 = 2 \\times 5$. Collecting the leaves: $100 = 2^2 \\cdot 5^2$. Although $10^2$ and $4 \\cdot 25$ equal $100$, their factors are not prime, and $2 \\cdot 5^2 = 50$ — only half of what we want!',
    },
    {
      q: 'Which number has the prime factorization $2^3 \\cdot 3 \\cdot 5$?',
      choices: ['$120$', '$60$', '$90$', '$30$'],
      answer: 0,
      solution: 'Multiply it out: $2^3 = 8$, then $8 \\times 3 = 24$, then $24 \\times 5 = 120$. A common slip is reading $2^3$ as $2 \\times 3 = 6$, which would give $90$ — but $2^3$ means $2 \\times 2 \\times 2 = 8$.',
    },
    {
      q: 'What is the prime factorization of $132$?',
      choices: ['$2 \\cdot 3 \\cdot 22$', '$2^2 \\cdot 3 \\cdot 11$', '$4 \\cdot 33$', '$2 \\cdot 66$'],
      answer: 1,
      solution: 'Build the tree: $132 = 2 \\times 66 = 2 \\times 2 \\times 33 = 2 \\times 2 \\times 3 \\times 11$. So $132 = 2^2 \\cdot 3 \\cdot 11$. The other choices equal $132$ but still contain composite factors ($22$, $4$, $33$, $66$), so the tree is not finished.',
    },
    {
      q: 'Let $n = 2^4 \\cdot 3^2$. What is $\\sqrt{n}$?',
      choices: ['$24$', '$18$', '$12$', '$36$'],
      answer: 2,
      solution: 'Every exponent in $n$ is even, so $n$ is a perfect square. Halve each exponent: $\\sqrt{n} = 2^2 \\cdot 3 = 12$. Check: $n = 16 \\times 9 = 144$ and $12^2 = 144$. ✓',
    },
    {
      q: 'What is the prime factorization of $675$?',
      choices: ['$3^3 \\cdot 5^2$', '$3^2 \\cdot 5^3$', '$3 \\cdot 225$', '$5 \\cdot 135$'],
      answer: 0,
      solution: 'Notice $675 = 27 \\times 25$ — both pieces are easy: $27 = 3^3$ and $25 = 5^2$. So $675 = 3^3 \\cdot 5^2$. Swapping the exponents gives $3^2 \\cdot 5^3 = 9 \\times 125 = 1125$, a different number, so exponent placement really matters!',
    },
    {
      q: 'What is the smallest whole number whose prime factorization uses three DIFFERENT primes?',
      choices: ['$105$', '$8$', '$60$', '$30$'],
      answer: 3,
      solution: 'To keep the number small, use the three smallest primes, each once: $2 \\cdot 3 \\cdot 5 = 30$. Note that $8 = 2^3$ uses only one prime (three times), $60 = 2^2 \\cdot 3 \\cdot 5$ uses three primes but is bigger, and $105 = 3 \\cdot 5 \\cdot 7$ skips the smallest prime, $2$.',
    },
    {
      q: 'What is the smallest whole number $k$ so that $60k$ is a perfect square?',
      choices: ['$3$', '$5$', '$15$', '$30$'],
      answer: 2,
      solution: 'Factor first: $60 = 2^2 \\cdot 3 \\cdot 5$. A perfect square needs every exponent even. The exponent of $2$ is already even, but $3$ and $5$ each appear an odd number of times — so multiply by one more of each: $k = 3 \\times 5 = 15$. Check: $60 \\times 15 = 900 = 30^2$. ✓',
    },
  ],
}

const s35 = {
  id: '3.5',
  title: 'Least Common Multiple',
  learn: {
    concepts: [
      {
        heading: 'The first meeting point',
        body: 'The least common multiple (LCM) of two numbers is the SMALLEST positive number that is a multiple of both. One way to find it: list multiples of each number until the lists first agree. Multiples of $4$: $4, 8, 12, 16, \\ldots$ Multiples of $6$: $6, 12, 18, \\ldots$ They first meet at $12$, so $\\text{lcm}(4, 6) = 12$.',
      },
      {
        heading: 'The prime factorization shortcut',
        body: 'For bigger numbers, listing takes forever. Instead, factor both numbers and take the HIGHEST power of every prime that appears. For $12 = 2^2 \\cdot 3$ and $18 = 2 \\cdot 3^2$: take $2^2$ (the higher power of $2$) and $3^2$ (the higher power of $3$), giving $\\text{lcm}(12, 18) = 2^2 \\cdot 3^2 = 36$. The LCM needs enough of each prime to contain both numbers — no more, no less.',
      },
      {
        heading: 'Handy special cases',
        body: 'If one number divides the other, the bigger one IS the LCM: $\\text{lcm}(5, 10) = 10$. And if two numbers share no common factor bigger than $1$, their LCM is simply their product: $\\text{lcm}(3, 7) = 21$. But beware: the product is not always the LCM — $\\text{lcm}(4, 6) = 12$, not $24$.',
      },
      {
        heading: 'When will they meet again?',
        body: 'LCM problems love to hide in stories about repeating events: buses on different schedules, lights blinking at different speeds, planets orbiting at different rates. If two things happen every $a$ minutes and every $b$ minutes and start together, they line up again after exactly $\\text{lcm}(a, b)$ minutes.',
      },
    ],
    examples: [
      {
        problem: 'Find $\\text{lcm}(6, 8)$ by listing multiples.',
        steps: [
          'Multiples of $8$ (the bigger number): $8, 16, 24, 32, \\ldots$',
          'Check each against the multiples of $6$: is $8$ a multiple of $6$? No. Is $16$? No. Is $24$? Yes — $24 = 6 \\times 4$.',
        ],
        answer: '$\\text{lcm}(6, 8) = 24$',
      },
      {
        problem: 'Find $\\text{lcm}(12, 18)$ using prime factorizations.',
        steps: [
          'Factor both: $12 = 2^2 \\cdot 3$ and $18 = 2 \\cdot 3^2$.',
          'For each prime, take the highest power that appears: $2^2$ from the $12$, and $3^2$ from the $18$.',
          'Multiply: $2^2 \\cdot 3^2 = 4 \\times 9 = 36$.',
        ],
        answer: '$\\text{lcm}(12, 18) = 36$',
      },
      {
        problem: 'Two buses leave the station together at noon. Bus A leaves every $10$ minutes and Bus B leaves every $15$ minutes. When do they next leave together?',
        steps: [
          'They leave together at times that are common multiples of $10$ and $15$.',
          'Factor: $10 = 2 \\cdot 5$ and $15 = 3 \\cdot 5$. Highest powers: $2 \\cdot 3 \\cdot 5 = 30$.',
          'So they next depart together $30$ minutes after noon.',
        ],
        answer: 'At 12:30 — $\\text{lcm}(10, 15) = 30$ minutes after noon.',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\text{lcm}(4, 6)$?',
      choices: ['$24$', '$12$', '$2$', '$8$'],
      answer: 1,
      solution: 'List multiples of $6$ and stop at the first multiple of $4$: $6$ (no), $12$ (yes, $12 = 4 \\times 3$). So $\\text{lcm}(4, 6) = 12$. The product $24$ is a common multiple, but not the least one, and $2$ is the greatest common DIVISOR — the other direction!',
    },
    {
      q: 'What is $\\text{lcm}(3, 7)$?',
      choices: ['$10$', '$1$', '$21$', '$42$'],
      answer: 2,
      solution: 'Since $3$ and $7$ share no common factor bigger than $1$, their LCM is just their product: $3 \\times 7 = 21$. (Adding gives $10$, and $1$ is their greatest common divisor — neither is a multiple of both.)',
    },
    {
      q: 'What is $\\text{lcm}(5, 10)$?',
      choices: ['$10$', '$50$', '$5$', '$15$'],
      answer: 0,
      solution: 'Since $5$ divides $10$, the number $10$ is already a multiple of both — so $\\text{lcm}(5, 10) = 10$. No need to go all the way up to the product $50$.',
    },
    {
      q: 'What is $\\text{lcm}(8, 12)$?',
      choices: ['$96$', '$48$', '$4$', '$24$'],
      answer: 3,
      solution: 'Factor: $8 = 2^3$ and $12 = 2^2 \\cdot 3$. Take the highest powers: $2^3 \\cdot 3 = 24$. Check: $24 = 8 \\times 3$ and $24 = 12 \\times 2$. ✓ The product $96$ overshoots, and $4$ is the GCD, not the LCM.',
    },
    {
      q: 'What is $\\text{lcm}(9, 15)$?',
      choices: ['$45$', '$90$', '$135$', '$3$'],
      answer: 0,
      solution: 'Factor: $9 = 3^2$ and $15 = 3 \\cdot 5$. Highest powers: $3^2 \\cdot 5 = 45$. Check: $45 = 9 \\times 5 = 15 \\times 3$. ✓ The product $9 \\times 15 = 135$ is triple the LCM because both numbers share a factor of $3$.',
    },
    {
      q: 'A red light blinks every $6$ seconds and a blue light blinks every $10$ seconds. They just blinked together. In how many seconds will they next blink together?',
      choices: ['$16$ seconds', '$60$ seconds', '$30$ seconds', '$20$ seconds'],
      answer: 2,
      solution: 'They blink together at common multiples of $6$ and $10$. Factor: $6 = 2 \\cdot 3$ and $10 = 2 \\cdot 5$, so the LCM is $2 \\cdot 3 \\cdot 5 = 30$. In $30$ seconds the red light will have blinked $5$ times and the blue light $3$ times, landing together.',
    },
    {
      q: 'Use prime factorizations to find $\\text{lcm}(12, 20)$.',
      choices: ['$240$', '$60$', '$120$', '$4$'],
      answer: 1,
      solution: 'Factor: $12 = 2^2 \\cdot 3$ and $20 = 2^2 \\cdot 5$. Take the highest power of each prime: $2^2 \\cdot 3 \\cdot 5 = 60$. Check: $60 = 12 \\times 5 = 20 \\times 3$. ✓ Multiplying $12 \\times 20 = 240$ counts the shared $2^2$ twice.',
    },
    {
      q: 'What is $\\text{lcm}(4, 5, 6)$?',
      choices: ['$120$', '$20$', '$30$', '$60$'],
      answer: 3,
      solution: 'The same highest-power rule works for three numbers. Factor: $4 = 2^2$, $5 = 5$, $6 = 2 \\cdot 3$. Highest powers: $2^2 \\cdot 3 \\cdot 5 = 60$. Check: $60 \\div 4 = 15$, $60 \\div 5 = 12$, $60 \\div 6 = 10$ — all whole. ✓',
    },
    {
      q: 'Hot dogs come in packs of $10$ and buns come in packs of $8$. What is the smallest number of hot dogs Kenji can buy so that every hot dog gets a bun with nothing left over?',
      choices: ['$40$', '$80$', '$18$', '$20$'],
      answer: 0,
      solution: 'Kenji needs a number that is a multiple of $10$ (whole packs of hot dogs) and of $8$ (whole packs of buns). Factor: $10 = 2 \\cdot 5$ and $8 = 2^3$, so $\\text{lcm}(10, 8) = 2^3 \\cdot 5 = 40$. That is $4$ packs of hot dogs and $5$ packs of buns.',
    },
    {
      q: 'Suppose $\\text{lcm}(a, 12) = 36$. What is the smallest possible value of $a$?',
      choices: ['$3$', '$6$', '$18$', '$9$'],
      answer: 3,
      solution: 'Since $36 = 2^2 \\cdot 3^2$ and $12 = 2^2 \\cdot 3$ only supplies ONE factor of $3$, the second factor of $3$ must come from $a$ — so $a$ must be a multiple of $3^2 = 9$. Try $a = 9$: $\\text{lcm}(9, 12) = 2^2 \\cdot 3^2 = 36$. ✓ Smaller candidates fail: $\\text{lcm}(3, 12) = 12$ and $\\text{lcm}(6, 12) = 12$.',
    },
  ],
}

const s36 = {
  id: '3.6',
  title: 'Divisors',
  learn: {
    concepts: [
      {
        heading: 'Divisors: the numbers that fit evenly',
        body: 'A divisor (or factor) of a number divides it with no remainder. The divisors of $18$ are $1, 2, 3, 6, 9, 18$. Divisors and multiples are two views of the same fact: $3$ is a divisor of $18$ exactly because $18$ is a multiple of $3$.',
      },
      {
        heading: 'Divisors come in pairs',
        body: 'Divisors buddy up: if $d$ divides $n$, so does $n \\div d$. For $18$: the pairs are $1 \\times 18$, $2 \\times 9$, $3 \\times 6$. To list all divisors without missing any, march upward from $1$ and record each buddy pair — you can stop once the pairs start to cross, which happens at the square root.',
      },
      {
        heading: 'Counting divisors without listing',
        body: 'Prime factorization counts divisors for you! Every divisor of $72 = 2^3 \\cdot 3^2$ is built by choosing how many $2$s to use ($0, 1, 2,$ or $3$ — four choices) and how many $3$s ($0, 1,$ or $2$ — three choices). So $72$ has $4 \\times 3 = 12$ divisors. In general, add $1$ to each exponent and multiply.',
      },
      {
        heading: 'The perfect square surprise',
        body: 'Most numbers have an even number of divisors, since divisors come in pairs. But perfect squares are the exception! For $36$, the pair for $6$ is $6$ itself — the buddy pair $6 \\times 6$ contributes only one new divisor. So perfect squares, and only perfect squares, have an ODD number of divisors.',
      },
    ],
    examples: [
      {
        problem: 'List all the divisors of $18$.',
        steps: [
          'March upward, recording buddy pairs: $1 \\times 18$, then $2 \\times 9$, then $3 \\times 6$.',
          'Does $4$ divide $18$? No ($4 \\times 4 = 16$, $4 \\times 5 = 20$). Does $5$? No. The next candidate, $6$, already appeared as a buddy — time to stop.',
        ],
        answer: 'The divisors of $18$ are $1, 2, 3, 6, 9, 18$ — six in all.',
      },
      {
        problem: 'How many divisors does $72$ have?',
        steps: [
          'Factor: $72 = 2^3 \\cdot 3^2$.',
          'A divisor uses between $0$ and $3$ factors of $2$ (that is $4$ choices) and between $0$ and $2$ factors of $3$ (that is $3$ choices).',
          'Multiply the choices: $4 \\times 3 = 12$.',
        ],
        answer: '$72$ has $12$ divisors.',
      },
      {
        problem: 'Show that $36$ has an odd number of divisors.',
        steps: [
          'List by buddy pairs: $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$.',
          'The last pair is $6$ with itself, so it adds only ONE divisor, not two.',
          'Count: $1, 2, 3, 4, 6, 9, 12, 18, 36$ — that is $9$ divisors.',
        ],
        answer: '$36$ has $9$ divisors, an odd number, because it is a perfect square: $6 \\times 6 = 36$.',
      },
    ],
  },
  problems: [
    {
      q: 'How many divisors does $10$ have?',
      choices: ['$2$', '$3$', '$4$', '$5$'],
      answer: 2,
      solution: 'Find the buddy pairs: $1 \\times 10$ and $2 \\times 5$. That gives the divisors $1, 2, 5, 10$ — four in all.',
    },
    {
      q: 'Which of these numbers is a divisor of $42$?',
      choices: ['$4$', '$14$', '$5$', '$16$'],
      answer: 1,
      solution: 'Check: $42 \\div 14 = 3$ exactly, so $14$ is a divisor — its buddy is $3$. Meanwhile $42 \\div 4 = 10$ remainder $2$, $42$ does not end in $0$ or $5$ (so $5$ fails), and $42 \\div 16 = 2$ remainder $10$, so $16$ fails too.',
    },
    {
      q: 'The divisors of $24$ come in buddy pairs. Which divisor is paired with $3$?',
      choices: ['$8$', '$21$', '$12$', '$6$'],
      answer: 0,
      solution: 'A buddy pair multiplies to the number itself: $3 \\times \\square = 24$, so the buddy is $24 \\div 3 = 8$. (A common slip is subtracting: $24 - 3 = 21$, but pairs multiply, not add!)',
    },
    {
      q: 'How many divisors does $16$ have?',
      choices: ['$4$', '$6$', '$5$', '$3$'],
      answer: 2,
      solution: 'List them: $1, 2, 4, 8, 16$ — five divisors. The count is odd because $16 = 4 \\times 4$ is a perfect square: the divisor $4$ is its own buddy. Formula check: $16 = 2^4$, so it has $4 + 1 = 5$ divisors. ✓',
    },
    {
      q: 'How many divisors does $36$ have?',
      choices: ['$8$', '$10$', '$7$', '$9$'],
      answer: 3,
      solution: 'Factor: $36 = 2^2 \\cdot 3^2$. Add one to each exponent and multiply: $(2+1)(2+1) = 9$. Listing confirms it: $1, 2, 3, 4, 6, 9, 12, 18, 36$. An odd count — exactly what we expect from the perfect square $6^2$.',
    },
    {
      q: 'Using the prime factorization $20 = 2^2 \\cdot 5$, how many divisors does $20$ have?',
      choices: ['$6$', '$5$', '$4$', '$10$'],
      answer: 0,
      solution: 'A divisor uses $0$, $1$, or $2$ factors of $2$ ($3$ choices) and $0$ or $1$ factor of $5$ ($2$ choices). That gives $3 \\times 2 = 6$ divisors: $1, 2, 4, 5, 10, 20$.',
    },
    {
      q: 'How many divisors does $100$ have?',
      choices: ['$8$', '$9$', '$10$', '$12$'],
      answer: 1,
      solution: 'Factor: $100 = 2^2 \\cdot 5^2$. The divisor count is $(2+1)(2+1) = 9$. As a bonus check, $100 = 10^2$ is a perfect square, and sure enough the count came out odd.',
    },
    {
      q: 'Which of these numbers has an ODD number of divisors?',
      choices: ['$18$', '$50$', '$49$', '$12$'],
      answer: 2,
      solution: 'Only perfect squares have an odd number of divisors, and $49 = 7^2$ is the only perfect square here. It has $3$ divisors: $1, 7, 49$. The others pair up evenly: $18$, $50$, and $12$ have $6$ divisors each.',
    },
    {
      q: 'How many divisors does $360$ have?',
      choices: ['$20$', '$24$', '$36$', '$12$'],
      answer: 1,
      solution: 'Factor: $360 = 2^3 \\cdot 3^2 \\cdot 5$. Add one to each exponent and multiply: $(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$. Imagine trying to list all $24$ by hand — the formula is a real time-saver!',
    },
    {
      q: 'What is the smallest whole number with exactly $6$ divisors?',
      choices: ['$18$', '$24$', '$16$', '$12$'],
      answer: 3,
      solution: 'Count divisors of small numbers: $1$ has one, primes have two, $4, 9$ have three, $6, 8, 10$ have four, $16$ has five... and $12 = 2^2 \\cdot 3$ has $(2+1)(1+1) = 6$. ✓ Nothing smaller reaches six. Note $18 = 2 \\cdot 3^2$ also has $6$ divisors, but $12$ beats it there first.',
    },
  ],
}

const s37 = {
  id: '3.7',
  title: 'Greatest Common Divisor',
  learn: {
    concepts: [
      {
        heading: 'The biggest shared divisor',
        body: 'The greatest common divisor (GCD) of two numbers is the LARGEST number that divides both. One way to find it: list each number’s divisors and pick the biggest one they share. Divisors of $12$: $1, 2, 3, 4, 6, 12$. Divisors of $18$: $1, 2, 3, 6, 9, 18$. The shared divisors are $1, 2, 3, 6$, so $\\gcd(12, 18) = 6$.',
      },
      {
        heading: 'The prime factorization shortcut',
        body: 'Factor both numbers and take the LOWEST power of each SHARED prime. For $48 = 2^4 \\cdot 3$ and $60 = 2^2 \\cdot 3 \\cdot 5$: the shared primes are $2$ (lowest power $2^2$) and $3$ (lowest power $3$), so $\\gcd(48, 60) = 2^2 \\cdot 3 = 12$. Notice the beautiful symmetry: LCM takes highest powers, GCD takes lowest powers.',
      },
      {
        heading: 'Relatively prime numbers',
        body: 'Two numbers whose GCD is $1$ are called relatively prime — they share no factor bigger than $1$. The numbers themselves need not be prime! $8 = 2^3$ and $15 = 3 \\cdot 5$ are both composite, yet they have no prime in common, so $\\gcd(8, 15) = 1$.',
      },
      {
        heading: 'A perfect partnership',
        body: 'GCD and LCM fit together like puzzle pieces: $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b$. Why? Between them, the lowest powers (GCD) and highest powers (LCM) use up every prime factor of $a$ and $b$ exactly once. So if you know one, you can find the other with a single division!',
      },
    ],
    examples: [
      {
        problem: 'Find $\\gcd(12, 18)$ by listing divisors.',
        steps: [
          'Divisors of $12$: $1, 2, 3, 4, 6, 12$.',
          'Divisors of $18$: $1, 2, 3, 6, 9, 18$.',
          'The common divisors are $1, 2, 3, 6$ — and the greatest is $6$.',
        ],
        answer: '$\\gcd(12, 18) = 6$',
      },
      {
        problem: 'Find $\\gcd(48, 60)$ using prime factorizations.',
        steps: [
          'Factor both: $48 = 2^4 \\cdot 3$ and $60 = 2^2 \\cdot 3 \\cdot 5$.',
          'For each shared prime, take the LOWEST power: $2^2$ and $3^1$. (The prime $5$ is not shared, so it stays out.)',
          'Multiply: $2^2 \\cdot 3 = 12$.',
        ],
        answer: '$\\gcd(48, 60) = 12$',
      },
      {
        problem: 'Given that $\\gcd(8, 12) = 4$, find $\\text{lcm}(8, 12)$ without listing multiples.',
        steps: [
          'Use the identity $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b$.',
          'Here $a \\cdot b = 8 \\times 12 = 96$, so $4 \\cdot \\text{lcm}(8, 12) = 96$.',
          'Divide: $\\text{lcm}(8, 12) = 96 \\div 4 = 24$.',
        ],
        answer: '$\\text{lcm}(8, 12) = 24$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\gcd(6, 9)$?',
      choices: ['$18$', '$3$', '$1$', '$6$'],
      answer: 1,
      solution: 'Divisors of $6$: $1, 2, 3, 6$. Divisors of $9$: $1, 3, 9$. The biggest shared divisor is $3$. (Careful: $18$ is the LCM — the greatest common divisor can never be bigger than either number!)',
    },
    {
      q: 'What is $\\gcd(10, 25)$?',
      choices: ['$5$', '$50$', '$2$', '$10$'],
      answer: 0,
      solution: 'Factor: $10 = 2 \\cdot 5$ and $25 = 5^2$. The only shared prime is $5$, at lowest power $5^1$. So $\\gcd(10, 25) = 5$.',
    },
    {
      q: 'Which pair of numbers is relatively prime?',
      choices: ['$6$ and $9$', '$10$ and $15$', '$8$ and $15$', '$12$ and $18$'],
      answer: 2,
      solution: 'Relatively prime means the GCD is $1$. Factor $8 = 2^3$ and $15 = 3 \\cdot 5$: no shared prime, so $\\gcd(8, 15) = 1$. ✓ The other pairs share factors: $\\gcd(6, 9) = 3$, $\\gcd(10, 15) = 5$, $\\gcd(12, 18) = 6$. Notice $8$ and $15$ are both composite — relatively prime is about what they SHARE.',
    },
    {
      q: 'What is $\\gcd(7, 13)$?',
      choices: ['$7$', '$13$', '$91$', '$1$'],
      answer: 3,
      solution: 'Both $7$ and $13$ are prime, and they are different primes, so they share no factor except $1$. Two different primes are always relatively prime: $\\gcd(7, 13) = 1$.',
    },
    {
      q: 'What is $\\gcd(24, 36)$?',
      choices: ['$6$', '$12$', '$8$', '$72$'],
      answer: 1,
      solution: 'Factor: $24 = 2^3 \\cdot 3$ and $36 = 2^2 \\cdot 3^2$. Lowest shared powers: $2^2$ and $3^1$, so $\\gcd(24, 36) = 4 \\times 3 = 12$. Check: $24 \\div 12 = 2$ and $36 \\div 12 = 3$. ✓ ($6$ is a common divisor, just not the greatest one.)',
    },
    {
      q: 'Use prime factorizations to find $\\gcd(30, 45)$.',
      choices: ['$5$', '$90$', '$15$', '$3$'],
      answer: 2,
      solution: 'Factor: $30 = 2 \\cdot 3 \\cdot 5$ and $45 = 3^2 \\cdot 5$. The shared primes are $3$ (lowest power $3^1$) and $5$ (lowest power $5^1$), so $\\gcd(30, 45) = 3 \\times 5 = 15$. The prime $2$ belongs only to $30$, so it cannot be shared.',
    },
    {
      q: 'A teacher has $24$ pencils and $36$ erasers to split into identical gift bags with nothing left over. What is the greatest number of bags she can make?',
      choices: ['$12$', '$6$', '$24$', '$4$'],
      answer: 0,
      solution: 'The number of bags must divide $24$ (to split the pencils evenly) and also divide $36$ (for the erasers). The greatest such number is $\\gcd(24, 36) = 12$. Each of the $12$ bags gets $2$ pencils and $3$ erasers.',
    },
    {
      q: 'You know that $\\gcd(6, 10) = 2$. Use the identity $\\gcd(a,b) \\cdot \\text{lcm}(a,b) = a \\cdot b$ to find $\\text{lcm}(6, 10)$.',
      choices: ['$60$', '$20$', '$15$', '$30$'],
      answer: 3,
      solution: 'The identity says $2 \\cdot \\text{lcm}(6, 10) = 6 \\times 10 = 60$. Dividing both sides by $2$ gives $\\text{lcm}(6, 10) = 30$. Check by listing: $10, 20, 30$ — and $30 = 6 \\times 5$. ✓',
    },
    {
      q: 'What is $\\gcd(54, 72)$?',
      choices: ['$9$', '$18$', '$27$', '$6$'],
      answer: 1,
      solution: 'Factor: $54 = 2 \\cdot 3^3$ and $72 = 2^3 \\cdot 3^2$. Lowest shared powers: $2^1$ and $3^2$, so $\\gcd(54, 72) = 2 \\times 9 = 18$. Check: $54 \\div 18 = 3$ and $72 \\div 18 = 4$, and $3$ and $4$ are relatively prime, confirming we cannot do better. ✓',
    },
    {
      q: 'Two whole numbers have product $240$ and least common multiple $60$. What is their greatest common divisor?',
      choices: ['$4$', '$2$', '$8$', '$6$'],
      answer: 0,
      solution: 'The identity $\\gcd \\cdot \\text{lcm} = \\text{product}$ works even without knowing the numbers themselves! Here $\\gcd \\times 60 = 240$, so $\\gcd = 240 \\div 60 = 4$. (One such pair is $12$ and $20$: $\\gcd(12, 20) = 4$ and $\\text{lcm}(12, 20) = 60$.)',
    },
  ],
}

export default {
  id: 'prealgebra-ch03',
  book: 'prealgebra',
  number: 3,
  title: 'Number Theory',
  intro:
    'Number theory is the study of what whole numbers are made of — and it turns out they are built from primes, the way words are built from letters. In this chapter you will learn to break numbers into their prime pieces and use those pieces to answer questions that look impossible at first glance. Ready to see inside the numbers?',
  sections: [s31, s32, s33, s34, s35, s36, s37],
  challenge: [
    {
      q: 'How many numbers from $1$ to $200$ are multiples of both $6$ and $4$?',
      choices: ['$33$', '$16$', '$50$', '$8$'],
      answer: 1,
      solution: 'A multiple of both $6$ and $4$ is a multiple of $\\text{lcm}(6, 4) = 12$ — not of $24$! The multiples of $12$ up to $200$ are $12 \\times 1$ through $12 \\times 16 = 192$, so there are $16$.',
    },
    {
      q: 'What is the smallest four-digit number divisible by $9$?',
      choices: ['$1000$', '$1080$', '$1008$', '$1017$'],
      answer: 2,
      solution: 'Start at $1000$, whose digit sum is $1$. We need a digit sum that is a multiple of $9$, so we need $8$ more: $1008$ has digit sum $1 + 0 + 0 + 8 = 9$. ✓ Check: $1008 = 9 \\times 112$. Every number from $1000$ to $1007$ has digit sum between $1$ and $8$, so none of them work.',
    },
    {
      q: 'A number $N$ has prime factorization $2^3 \\cdot 3^2 \\cdot 5$. How many divisors does $N$ have?',
      choices: ['$24$', '$30$', '$17$', '$20$'],
      answer: 0,
      solution: 'Add one to each exponent and multiply: $(3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$. Each divisor comes from choosing how many $2$s, $3$s, and $5$s to include — and the choices multiply.',
    },
    {
      q: 'How many numbers from $1$ to $100$ have an odd number of divisors?',
      choices: ['$9$', '$50$', '$25$', '$10$'],
      answer: 3,
      solution: 'A number has an odd number of divisors exactly when it is a perfect square (one divisor is its own buddy). The perfect squares from $1$ to $100$ are $1^2, 2^2, \\ldots, 10^2$ — that is $10$ numbers.',
    },
    {
      q: 'What is the smallest number that is divisible by every whole number from $1$ to $6$?',
      choices: ['$720$', '$120$', '$60$', '$30$'],
      answer: 2,
      solution: 'Take the highest prime powers needed: $4 = 2^2$ demands $2^2$, $3$ demands $3$, and $5$ demands $5$ (the numbers $1$, $2$, and $6 = 2 \\cdot 3$ are then covered automatically). So the answer is $2^2 \\cdot 3 \\cdot 5 = 60$. Multiplying all six numbers gives $720$, which works but is far from smallest.',
    },
    {
      q: 'What is the sum of all the prime numbers between $10$ and $20$?',
      choices: ['$60$', '$41$', '$75$', '$64$'],
      answer: 0,
      solution: 'The primes between $10$ and $20$ are $11, 13, 17, 19$ (the odd numbers $15 = 3 \\cdot 5$ and the evens are composite). Their sum: $11 + 19 = 30$ and $13 + 17 = 30$, so the total is $60$. Pairing made the addition easy!',
    },
    {
      q: 'Two numbers have $\\gcd$ equal to $6$ and $\\text{lcm}$ equal to $72$. What is their product?',
      choices: ['$78$', '$432$', '$864$', '$12$'],
      answer: 1,
      solution: 'By the identity $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b$, the product is $6 \\times 72 = 432$. (One such pair: $18$ and $24$ — check that $\\gcd(18, 24) = 6$, $\\text{lcm}(18, 24) = 72$, and $18 \\times 24 = 432$.)',
    },
    {
      q: 'What is the smallest three-digit number divisible by both $4$ and $9$?',
      choices: ['$100$', '$144$', '$104$', '$108$'],
      answer: 3,
      solution: 'Divisible by both $4$ and $9$ means divisible by $\\text{lcm}(4, 9) = 36$, since $4$ and $9$ are relatively prime. The multiples of $36$ are $36, 72, 108, \\ldots$ — the first with three digits is $108$. Check: $08$ is divisible by $4$ ✓ and $1 + 0 + 8 = 9$ ✓.',
    },
    {
      q: 'A small gear with $12$ teeth meshes with a large gear with $18$ teeth. Marks are painted where they touch. How many full turns does the SMALL gear make before both marks meet again?',
      choices: ['$3$', '$2$', '$6$', '$18$'],
      answer: 0,
      solution: 'The marks meet again after a number of teeth have passed that is a multiple of both $12$ and $18$: that is $\\text{lcm}(12, 18) = 36$ teeth. The small gear turns $36 \\div 12 = 3$ full times (while the large gear turns $36 \\div 18 = 2$ times).',
    },
    {
      q: 'How many divisors of $400$ are perfect squares?',
      choices: ['$15$', '$4$', '$6$', '$8$'],
      answer: 2,
      solution: 'Factor: $400 = 2^4 \\cdot 5^2$. A perfect-square divisor needs EVEN exponents: the power of $2$ can be $2^0, 2^2,$ or $2^4$ ($3$ choices) and the power of $5$ can be $5^0$ or $5^2$ ($2$ choices). That gives $3 \\times 2 = 6$ square divisors: $1, 4, 16, 25, 100, 400$.',
    },
    {
      q: 'A mystery number is a multiple of $15$, a divisor of $90$, and between $20$ and $40$. What is it?',
      choices: ['$45$', '$30$', '$60$', '$75$'],
      answer: 1,
      solution: 'First find the multiples of $15$ that also divide $90$: checking $15, 30, 45, 60, 75, 90$, the divisors of $90$ among them are $15, 30, 45, 90$. Only one of those falls between $20$ and $40$: the mystery number is $30$. (Watch out for $60$ — it is a multiple of $15$, but $90 \\div 60$ is not a whole number.)',
    },
    {
      q: 'How many whole numbers less than $50$ have exactly $3$ divisors?',
      choices: ['$3$', '$5$', '$4$', '$6$'],
      answer: 2,
      solution: 'A number with exactly $3$ divisors must be $p^2$ for a prime $p$ — its divisors are $1, p, p^2$. (Three divisors is an odd count, so the number is a perfect square, and only prime squares have exactly three.) The prime squares under $50$ are $4, 9, 25, 49$ — that is $4$ numbers.',
    },
  ],
  worksheet: [
    {
      q: 'List the first four multiples of $9$.',
      answer: '$9, 18, 27, 36$',
      solution: 'Skip-count by nines, or multiply: $9 \\times 1 = 9$, $9 \\times 2 = 18$, $9 \\times 3 = 27$, $9 \\times 4 = 36$.',
    },
    {
      q: 'The three-digit number $47d$ has ones digit $d$. Find the digit $d$ that makes the number divisible by $9$.',
      answer: '$7$',
      solution: 'The digit sum is $4 + 7 + d = 11 + d$, which must be a multiple of $9$. Since $11 + d$ runs from $11$ to $20$, the only option is $18$, so $d = 7$. Check: $477 = 9 \\times 53$. ✓',
    },
    {
      q: 'Write the prime factorization of $90$ using exponents.',
      answer: '$2 \\cdot 3^2 \\cdot 5$',
      solution: 'Factor tree: $90 = 9 \\times 10$, then $9 = 3 \\times 3$ and $10 = 2 \\times 5$. The leaves are $2, 3, 3, 5$, so $90 = 2 \\cdot 3^2 \\cdot 5$.',
    },
    {
      q: 'Find $\\text{lcm}(8, 10)$.',
      answer: '$40$',
      solution: 'Factor: $8 = 2^3$ and $10 = 2 \\cdot 5$. Take the highest power of each prime: $2^3 \\cdot 5 = 40$. Check: $40 = 8 \\times 5 = 10 \\times 4$. ✓',
    },
    {
      q: 'How many divisors does $48$ have?',
      answer: '$10$',
      solution: 'Factor: $48 = 2^4 \\cdot 3$. Add one to each exponent and multiply: $(4+1)(1+1) = 10$. Listing confirms it: $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$.',
    },
    {
      q: 'Find $\\gcd(28, 42)$.',
      answer: '$14$',
      solution: 'Factor: $28 = 2^2 \\cdot 7$ and $42 = 2 \\cdot 3 \\cdot 7$. The shared primes at their lowest powers are $2^1$ and $7^1$, so $\\gcd(28, 42) = 2 \\times 7 = 14$. Check: $28 \\div 14 = 2$ and $42 \\div 14 = 3$. ✓',
    },
    {
      q: 'What is the smallest whole number greater than $1$ that leaves a remainder of $1$ when divided by $3$, by $4$, and by $5$?',
      answer: '$61$',
      solution: 'One less than our number must be divisible by $3$, $4$, and $5$ — that is, a multiple of $\\text{lcm}(3, 4, 5) = 60$. The smallest positive choice is $60$ itself, so the number is $60 + 1 = 61$. Check: $61 = 3 \\times 20 + 1 = 4 \\times 15 + 1 = 5 \\times 12 + 1$. ✓',
    },
    {
      q: 'How many prime numbers are there from $1$ to $30$?',
      answer: '$10$',
      solution: 'Sieve it out: cross off $1$ (neither prime nor composite), the even numbers past $2$, the multiples of $3$ past $3$, and of $5$ past $5$. What survives: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ — ten primes.',
    },
    {
      q: 'Two numbers have $\\gcd(a, b) = 8$ and $a \\cdot b = 960$. Find $\\text{lcm}(a, b)$.',
      answer: '$120$',
      solution: 'Use the identity $\\gcd(a, b) \\cdot \\text{lcm}(a, b) = a \\cdot b$: we get $8 \\cdot \\text{lcm}(a, b) = 960$, so $\\text{lcm}(a, b) = 960 \\div 8 = 120$. (One such pair is $24$ and $40$.)',
    },
    {
      q: 'What is the smallest perfect square that is a multiple of $12$?',
      answer: '$36$',
      solution: 'Factor: $12 = 2^2 \\cdot 3$. A perfect square needs every exponent even, so the factor $3$ needs a partner: multiply by $3$ to get $2^2 \\cdot 3^2 = 36 = 6^2$. ✓ The smaller multiples $12$ and $24$ are not perfect squares.',
    },
  ],
}
