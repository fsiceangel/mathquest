// Counting & Probability — Chapter 7: Introduction to Probability
// All problems, explanations, and examples are original MathQuest content.

const spinner8 = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [0.707, 0.707] },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [-0.707, 0.707] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.707, -0.707] },
    { t: 'seg', a: [0, 0], b: [0, -1] },
    { t: 'seg', a: [0, 0], b: [0.707, -0.707] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.6, 0.25], text: 'A' },
    { t: 'label', p: [0.25, 0.6], text: 'B' },
    { t: 'label', p: [-0.25, 0.6], text: 'A' },
    { t: 'label', p: [-0.6, 0.25], text: 'C' },
    { t: 'label', p: [-0.6, -0.25], text: 'A' },
    { t: 'label', p: [-0.25, -0.6], text: 'B' },
    { t: 'label', p: [0.25, -0.6], text: 'D' },
    { t: 'label', p: [0.6, -0.25], text: 'A' },
  ],
}

const s72 = {
  id: '7.2',
  title: 'Basic Probability',
  learn: {
    concepts: [
      {
        heading: 'Probability is a fraction of outcomes',
        body: 'When every outcome of an experiment is equally likely, the probability of an event is $\\frac{\\text{number of outcomes that make the event happen}}{\\text{total number of outcomes}}$. Draw one card from a pile of $10$ cards, $3$ of which are red, and the probability of red is $\\frac{3}{10}$: three favorable outcomes out of ten equally likely ones. Both numbers in the fraction are counts, so probability is counting in disguise.',
      },
      {
        heading: 'The scale runs from 0 to 1',
        body: 'An event that cannot happen has probability $0$ — no favorable outcomes at all. An event that must happen has probability $1$ — every outcome is favorable. Everything else sits strictly between, so a probability can never be negative and can never exceed $1$. If a computation hands you $\\frac{7}{5}$, something in the count went wrong.',
      },
      {
        heading: 'Find the outcomes before you count them',
        body: 'The first job is always to name the equally likely outcomes. For a bag of marbles, each marble is one outcome, so the total is the number of marbles, not the number of colors. For a spinner with equal sectors, each sector is one outcome. For one die, the six faces are the outcomes. Only after the outcomes are pinned down do you count how many are favorable.',
      },
      {
        heading: 'Reduce, and read fractions backward',
        body: 'Always write a probability in lowest terms: $\\frac{6}{15}$ becomes $\\frac{2}{5}$. That reduced form hides the real counts, so a problem can run the other way — “the probability of green is $\\frac{2}{5}$ and there are $30$ marbles” means the green marbles are $\\frac{2}{5}$ of $30$, which is $12$. Treat a given probability as a ratio of favorable to total, and let the totals scale.',
      },
    ],
    examples: [
      {
        problem: 'A bag holds $5$ orange tokens and $7$ purple tokens. One token is drawn at random. What is the probability that it is orange?',
        steps: [
          'Each token is one equally likely outcome, so there are $5 + 7 = 12$ outcomes in total.',
          'The favorable outcomes are the orange tokens: $5$ of them.',
          'The probability is $\\frac{5}{12}$, which is already in lowest terms.',
        ],
        answer: 'The probability is $\\frac{5}{12}$.',
      },
      {
        problem: 'A spinner has $10$ equal sectors numbered $1$ through $10$. What is the probability that a spin lands on a prime number?',
        steps: [
          'The $10$ sectors are equal, so each number is an equally likely outcome.',
          'The primes from $1$ to $10$ are $2, 3, 5, 7$ — four of them ($1$ is not prime).',
          'The probability is $\\frac{4}{10} = \\frac{2}{5}$.',
        ],
        answer: 'The probability is $\\frac{2}{5}$.',
      },
      {
        problem: 'A standard die is rolled. Which is more likely: rolling a number less than $3$, or rolling a multiple of $3$?',
        steps: [
          'The outcomes are the six faces, all equally likely.',
          'Less than $3$ means a $1$ or a $2$, so that probability is $\\frac{2}{6} = \\frac{1}{3}$.',
          'A multiple of $3$ means a $3$ or a $6$, so that probability is also $\\frac{2}{6} = \\frac{1}{3}$.',
          'Two events with the same number of favorable outcomes are equally likely, even though they sound different.',
        ],
        answer: 'Neither — both have probability $\\frac{1}{3}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A box holds $12$ crayons: $5$ are blue, $4$ are green, and the rest are red. One crayon is drawn at random. What is the probability that it is red?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{5}{12}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution: 'There are $12 - 5 - 4 = 3$ red crayons, and each of the $12$ crayons is an equally likely outcome: $\\frac{3}{12} = \\frac{1}{4}$. The slip $\\frac{3}{9} = \\frac{1}{3}$ compares red to the other crayons instead of to all the crayons; $\\frac{5}{12}$ is the probability of blue; and $\\frac{3}{4}$ is the probability of not red.',
    },
    {
      q: 'The spinner shown has $8$ equal sectors, each labeled with a letter. What is the probability that one spin lands on a sector labeled B or C?',
      fig: spinner8,
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{8}$', '$\\frac{5}{8}$'],
      answer: 2,
      solution: 'The $8$ equal sectors are the outcomes, not the four letters. Two sectors are labeled B and one is labeled C, so $3$ of the $8$ sectors are favorable: $\\frac{3}{8}$. The slip $\\frac{1}{2}$ treats the four letters as four equally likely outcomes and takes two of them; $\\frac{1}{4}$ counts only the two B sectors; and $\\frac{5}{8}$ is the probability of A or D, the complement.',
    },
    {
      q: 'A standard die is rolled once. What is the probability that the number showing is greater than $2$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$', '$\\frac{1}{3}$'],
      answer: 1,
      solution: 'The favorable faces are $3, 4, 5, 6$, four of the six: $\\frac{4}{6} = \\frac{2}{3}$. Reading “greater than $2$” as “at least $2$” gives $\\frac{5}{6}$; reading it as “greater than $3$” gives $\\frac{1}{2}$; and $\\frac{1}{3}$ is the probability of a $1$ or $2$.',
    },
    {
      q: 'A box holds $9$ marbles, and every one of them is green. One marble is drawn at random. What is the probability that it is not green?',
      choices: ['$\\frac{1}{9}$', '$\\frac{8}{9}$', '$1$', '$0$'],
      answer: 3,
      solution: 'No marble in the box fails to be green, so there are $0$ favorable outcomes out of $9$: the probability is $\\frac{0}{9} = 0$. The event is impossible. The choice $1$ is the probability of the certain event “the marble is green”; $\\frac{1}{9}$ and $\\frac{8}{9}$ invent a marble that is not there.',
    },
    {
      q: 'A jar holds $20$ marbles, some red and the rest blue. The probability of drawing a red marble at random is $\\frac{2}{5}$. How many of the marbles are blue?',
      choices: ['$12$', '$8$', '$10$', '$15$'],
      answer: 0,
      solution: 'Red marbles make up $\\frac{2}{5}$ of the $20$, so there are $\\frac{2}{5} \\times 20 = 8$ red marbles and $20 - 8 = 12$ blue ones. Answering $8$ stops at the red count; the question asked for blue.',
    },
    {
      q: 'A drawer holds $6$ blue socks and some red socks. When one sock is pulled out at random, the probability that it is red is $\\frac{1}{3}$. How many red socks are in the drawer?',
      choices: ['$2$', '$9$', '$3$', '$6$'],
      answer: 2,
      solution: 'Let there be $r$ red socks. Then $\\frac{r}{6 + r} = \\frac{1}{3}$, so $3r = 6 + r$ and $r = 3$. Check: $3$ red out of $9$ socks is $\\frac{1}{3}$. The slip $2$ takes a third of the blue socks, and $9$ is the total number of socks rather than the red ones.',
    },
    {
      q: 'The $9$ letters of the word COMMITTEE are written on identical tiles, one letter per tile, and one tile is drawn at random. What is the probability that it shows a vowel?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{5}{9}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution: 'Each tile is one outcome, so there are $9$ outcomes. The vowel tiles are O, I, E, E — four tiles, because the two E’s are separate tiles. The probability is $\\frac{4}{9}$. Counting the three different vowels gives $\\frac{3}{9} = \\frac{1}{3}$; counting distinct letters (C, O, M, I, T, E) gives $\\frac{3}{6} = \\frac{1}{2}$; and $\\frac{5}{9}$ is the probability of a consonant.',
    },
    {
      q: 'An integer is chosen at random from $1$ to $50$, inclusive. What is the probability that it is divisible by exactly one of the numbers $4$ and $6$?',
      choices: ['$\\frac{8}{25}$', '$\\frac{6}{25}$', '$\\frac{4}{25}$', '$\\frac{2}{25}$'],
      answer: 1,
      solution: 'There are $50$ equally likely integers. From $1$ to $50$ there are $12$ multiples of $4$ and $8$ multiples of $6$, and the $4$ multiples of $12$ are on both lists. “Exactly one” throws the overlap out of both lists: $(12 - 4) + (8 - 4) = 12$ integers, so the probability is $\\frac{12}{50} = \\frac{6}{25}$. Subtracting the overlap only once gives $12 + 8 - 4 = 16$, the count divisible by $4$ or $6$, and the choice $\\frac{8}{25}$; the choice $\\frac{4}{25}$ counts only the $8$ integers divisible by $4$ but not $6$ and forgets the other side; $\\frac{2}{25}$ is the probability of being divisible by both.',
    },
    {
      q: 'The integers from $1$ to $20$ are written on $20$ cards, one per card, and one card is drawn at random. What is the probability that the number drawn has an odd number of positive divisors?',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{3}{20}$'],
      answer: 2,
      solution: 'Divisors come in pairs $d$ and $\\frac{n}{d}$, so a number has an odd number of divisors only when some pair collapses — that is, when $n$ is a perfect square. The perfect squares from $1$ to $20$ are $1, 4, 9, 16$, so the probability is $\\frac{4}{20} = \\frac{1}{5}$. The guess $\\frac{1}{2}$ assumes odd and even divisor counts are equally common; $\\frac{2}{5}$ counts the eight primes, which have exactly two divisors; and $\\frac{3}{20}$ forgets that $1$ is a perfect square.',
    },
    {
      q: 'A bag holds only red chips and blue chips. If $4$ more red chips were added, the probability of drawing a red chip at random would be $\\frac{1}{2}$. If instead $4$ red chips were removed, that probability would be $\\frac{1}{3}$. How many chips are in the bag now?',
      choices: ['$28$', '$24$', '$32$', '$20$'],
      answer: 0,
      solution: 'Let the bag hold $r$ red and $b$ blue chips. Adding $4$ red gives $\\frac{r + 4}{r + b + 4} = \\frac{1}{2}$, so $2r + 8 = r + b + 4$ and $b = r + 4$. Removing $4$ red gives $\\frac{r - 4}{r + b - 4} = \\frac{1}{3}$, so $3r - 12 = r + b - 4$ and $b = 2r - 8$. Setting $r + 4 = 2r - 8$ gives $r = 12$, then $b = 16$, for $12 + 16 = 28$ chips. Check: $\\frac{16}{32} = \\frac{1}{2}$ and $\\frac{8}{24} = \\frac{1}{3}$. The choice $32$ is the total after adding the chips, and $24$ is the total after removing them.',
    },
  ],
}

const s73 = {
  id: '7.3',
  title: 'Equally Likely Outcomes',
  learn: {
    concepts: [
      {
        heading: 'The fraction only works for equally likely outcomes',
        body: 'The rule $\\frac{\\text{favorable}}{\\text{total}}$ has a hidden condition: every outcome you count must have the same chance. “Either it rains tomorrow or it doesn’t” lists two outcomes, but nobody believes rain is a $\\frac{1}{2}$ event every day. Before dividing, ask whether the outcomes you listed are truly interchangeable.',
      },
      {
        heading: 'Dice sums are a famous trap',
        body: 'Two dice have sums from $2$ to $12$, eleven values — but a sum of $7$ can happen six ways while a sum of $2$ happens only one way, so “$\\frac{1}{11}$ for each sum” is wrong. The equally likely outcomes are the $36$ ordered pairs (first die, second die). Always count pairs, then ask how many pairs give the sum you want.',
      },
      {
        heading: 'Draw the $6 \\times 6$ table',
        body: 'A grid with the first die down the side and the second die across the top shows all $36$ rolls at once. Each cell is one outcome. Sums line up on diagonals, so a sum of $s$ fills $s - 1$ cells when $s \\le 7$ and $13 - s$ cells when $s \\ge 7$. Products, differences, and “larger number” questions are all answered by scanning the same table.',
      },
      {
        heading: 'Coins: label them to see the true outcomes',
        body: 'Flipping two coins seems to give three results — two heads, one head, no heads — but if you paint one coin red, you see HH, HT, TH, TT: four equally likely outcomes, and “one head” owns two of them. With $n$ coins there are $2^n$ equally likely sequences, and the number of heads is not spread evenly across them.',
      },
    ],
    examples: [
      {
        problem: 'Two standard dice are rolled. What is the probability that the sum is $4$ or less?',
        steps: [
          'The equally likely outcomes are the $36$ ordered pairs, not the eleven possible sums.',
          'Sum $2$: $(1,1)$. Sum $3$: $(1,2), (2,1)$. Sum $4$: $(1,3), (2,2), (3,1)$.',
          'That is $1 + 2 + 3 = 6$ favorable pairs, so the probability is $\\frac{6}{36} = \\frac{1}{6}$.',
        ],
        answer: 'The probability is $\\frac{1}{6}$.',
      },
      {
        problem: 'Three fair coins are flipped. What is the probability of exactly two heads?',
        steps: [
          'Label the coins first, second, third; every sequence of H and T is equally likely, and there are $2^3 = 8$ of them.',
          'Exactly two heads means exactly one tail, and the tail can be on the first, second, or third coin: HHT, HTH, THH.',
          'The probability is $\\frac{3}{8}$ — not $\\frac{1}{4}$, even though “$0, 1, 2$, or $3$ heads” lists four possibilities.',
        ],
        answer: 'The probability is $\\frac{3}{8}$.',
      },
      {
        problem: 'Two standard dice are rolled. What is the probability that the product of the two numbers is odd?',
        steps: [
          'A product is odd only when both factors are odd; one even die makes the whole product even.',
          'Each die is odd on $3$ of its $6$ faces, so the odd-odd pairs number $3 \\times 3 = 9$ out of $36$.',
          'The probability is $\\frac{9}{36} = \\frac{1}{4}$. “Odd or even” are two outcomes, but they are far from equally likely.',
        ],
        answer: 'The probability is $\\frac{1}{4}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A fair coin is flipped and a standard die is rolled. What is the probability that the coin shows heads and the die shows an even number?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{12}$'],
      answer: 1,
      solution: 'The equally likely outcomes are the $2 \\times 6 = 12$ pairs (coin, die). Heads with $2$, $4$, or $6$ gives $3$ favorable pairs: $\\frac{3}{12} = \\frac{1}{4}$. The slip $\\frac{1}{12}$ counts only one pair; $\\frac{1}{2}$ forgets the coin entirely; and $\\frac{3}{9} = \\frac{1}{3}$ compares the favorable pairs to the unfavorable ones instead of to all $12$.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the two dice show the same number?',
      choices: ['$\\frac{1}{36}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$'],
      answer: 3,
      solution: 'Of the $36$ ordered pairs, the doubles are $(1,1), (2,2), \\ldots, (6,6)$: six of them, so $\\frac{6}{36} = \\frac{1}{6}$. (Or: whatever the first die shows, the second die matches it on $1$ of its $6$ faces.) The choice $\\frac{1}{36}$ is the probability of one particular double; $\\frac{1}{3}$ counts each double twice, as if $(2,2)$ and “$(2,2)$ reversed” were different rolls; and $\\frac{1}{2}$ is a “same or different” guess.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that both dice show a number that is at least $5$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{5}{9}$'],
      answer: 0,
      solution: 'Each die shows $5$ or $6$ on $2$ of its faces, so the favorable pairs are $2 \\times 2 = 4$ out of $36$: $\\frac{4}{36} = \\frac{1}{9}$. The choice $\\frac{1}{3}$ is the chance for one die only; $\\frac{5}{9}$ counts the $20$ rolls in which at least one die is $5$ or $6$, not both; $\\frac{1}{6}$ counts the six pairs in which the dice match.',
    },
    {
      q: 'A spinner with $3$ equal sectors numbered $1$, $2$, $3$ is spun twice. What is the probability that the two spins add up to $4$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{9}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution: 'The outcomes are the $3 \\times 3 = 9$ ordered pairs (first spin, second spin). Sum $4$ comes from $(1,3)$, $(2,2)$, and $(3,1)$: $\\frac{3}{9} = \\frac{1}{3}$. The choice $\\frac{1}{5}$ treats the five sums $2$ through $6$ as equally likely; $\\frac{2}{9}$ leaves out $(2,2)$.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the larger of the two numbers showing is exactly $4$? (If both dice show the same number, that number counts as the larger.)',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{2}{9}$', '$\\frac{7}{36}$'],
      answer: 3,
      solution: 'In the $6 \\times 6$ table, the rolls whose largest number is $4$ are the ones with a $4$ and nothing above $4$: $(4,1), (4,2), (4,3), (4,4)$ and $(1,4), (2,4), (3,4)$. That is $7$ cells, so the probability is $\\frac{7}{36}$. Counting $(4,4)$ twice gives $\\frac{8}{36} = \\frac{2}{9}$; counting only the row $(4,1)$ through $(4,4)$ gives $\\frac{1}{9}$; and $\\frac{1}{6}$ assumes the six possible maximums are equally likely.',
    },
    {
      q: 'Three fair coins are flipped. What is the probability that at least one coin shows heads and at least one coin shows tails?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution: 'There are $2^3 = 8$ equally likely sequences. The only ones without both faces are HHH and TTT, so $6$ sequences are favorable: $\\frac{6}{8} = \\frac{3}{4}$. Treating “$0, 1, 2, 3$ heads” as four equal outcomes and picking the middle two gives $\\frac{1}{2}$; treating “all the same, mixed” as two equal outcomes gives $\\frac{1}{2}$ as well; $\\frac{2}{3}$ picks two of the three unlabeled results “all heads, all tails, mixed”.',
    },
    {
      q: 'Four fair coins are flipped. What is the probability that the number of heads equals the number of tails?',
      choices: ['$\\frac{1}{4}$', '$\\frac{3}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{5}$'],
      answer: 1,
      solution: 'There are $2^4 = 16$ equally likely sequences. Equal heads and tails means exactly $2$ heads, and the positions of the two heads can be chosen in $\\binom{4}{2} = 6$ ways: $\\frac{6}{16} = \\frac{3}{8}$. The choice $\\frac{1}{5}$ treats the five possible head counts $0$ through $4$ as equally likely, and $\\frac{1}{2}$ is an “either they match or they don’t” guess.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the sum of the two numbers is a prime number?',
      choices: ['$\\frac{1}{3}$', '$\\frac{5}{11}$', '$\\frac{5}{12}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution: 'The prime sums available are $2, 3, 5, 7, 11$. Counting cells in the table: sum $2$ has $1$, sum $3$ has $2$, sum $5$ has $4$, sum $7$ has $6$, and sum $11$ has $2$, for $1 + 2 + 4 + 6 + 2 = 15$ favorable pairs. The probability is $\\frac{15}{36} = \\frac{5}{12}$. The choice $\\frac{5}{11}$ counts five prime sums out of eleven sums as if sums were equally likely; $\\frac{1}{3}$ leaves out the sum-$2$ roll and the two sum-$11$ rolls.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the product of the two numbers is a multiple of $6$?',
      choices: ['$\\frac{5}{12}$', '$\\frac{11}{36}$', '$\\frac{1}{3}$', '$\\frac{13}{36}$'],
      answer: 0,
      solution: 'Split into cases. If at least one die shows a $6$, the product is a multiple of $6$: there are $11$ such pairs. If neither die is a $6$, the product needs a factor of $2$ from one die and a factor of $3$ from the other, and among $1$ through $5$ that means one die is $3$ and the other is $2$ or $4$: the pairs $(3,2), (3,4), (2,3), (4,3)$, four more. In total $11 + 4 = 15$ pairs, so the probability is $\\frac{15}{36} = \\frac{5}{12}$. Stopping after the $6$’s gives $\\frac{11}{36}$; the choice $\\frac{1}{3}$ counts the pairs with a $6$ as $12$ by counting $(6,6)$ twice; $\\frac{13}{36}$ finds $(3,2)$ and $(3,4)$ but forgets their reverses.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the sum of the two numbers is greater than their product?',
      choices: ['$\\frac{1}{6}$', '$\\frac{11}{36}$', '$\\frac{5}{18}$', '$\\frac{1}{3}$'],
      answer: 1,
      solution: 'Call the numbers $a$ and $b$. The condition $a + b > ab$ rearranges to $ab - a - b < 0$, or $(a - 1)(b - 1) < 1$, and since both factors are whole numbers that forces $a = 1$ or $b = 1$. Every pair with a $1$ works (check $(1,6)$: $7 > 6$), and pairs with no $1$ fail (check $(2,2)$: $4 = 4$, not greater). There are $11$ pairs containing at least one $1$, so the probability is $\\frac{11}{36}$. The choice $\\frac{1}{6}$ counts only the pairs with $a = 1$; $\\frac{1}{3}$ counts $(1,1)$ twice; and $\\frac{5}{18}$ drops $(1,1)$ because the sum $2$ and product $1$ feel like a tie.',
    },
  ],
}

const s74 = {
  id: '7.4',
  title: 'Counting Techniques in Probability Problems',
  learn: {
    concepts: [
      {
        heading: 'Two counting problems in one fraction',
        body: 'When the equally likely outcomes are committees, arrangements, or hands of cards, the numerator and the denominator are each a counting problem from the earlier chapters. Compute the total number of outcomes first — it is usually a clean $\\binom{n}{k}$ or $n!$ — then count the outcomes with the property, and reduce.',
      },
      {
        heading: 'Random committees',
        body: 'If $k$ people are chosen at random from $n$, every one of the $\\binom{n}{k}$ committees is equally likely. To find the probability the committee has some property, count the committees with that property using the same tools as before: split by how many come from each group, multiply within a case, add across cases. For $2$ of $6$ people with $2$ of them left-handed, the chance both chosen are left-handed is $\\frac{\\binom{2}{2}}{\\binom{6}{2}} = \\frac{1}{15}$.',
      },
      {
        heading: 'Random arrangements',
        body: 'If $n$ different objects are lined up in random order, all $n!$ orders are equally likely. Restrictions such as “these two are next to each other” or “a vowel is at each end” are counted the way they were in earlier chapters — glue a pair into a block, fill the picky slots first — and the count goes over $n!$. When letters repeat, the equally likely outcomes are the distinct arrangements, so divide by the repeats in both the numerator and the denominator.',
      },
      {
        heading: 'Keep the numerator and denominator in the same currency',
        body: 'The most common error is mixing an ordered count on top with an unordered count on the bottom, or the other way around. If the denominator is $\\binom{n}{k}$ committees, the numerator must count committees; if the denominator is the $n(n-1)$ ordered draws, the numerator must count ordered draws. Either currency gives the same reduced fraction, as long as you do not switch halfway.',
      },
    ],
    examples: [
      {
        problem: 'A bag holds $5$ red marbles and $3$ blue marbles, all different. Two marbles are drawn at random at the same time. What is the probability that one is red and one is blue?',
        steps: [
          'The outcomes are the $\\binom{8}{2} = 28$ equally likely pairs of marbles.',
          'A red-and-blue pair is one of the $5$ reds together with one of the $3$ blues: $5 \\times 3 = 15$ pairs.',
          'The probability is $\\frac{15}{28}$.',
        ],
        answer: 'The probability is $\\frac{15}{28}$.',
      },
      {
        problem: 'The five letters of the word MUSIC are arranged in a row in random order. What is the probability that the two vowels are next to each other?',
        steps: [
          'All $5! = 120$ arrangements are equally likely.',
          'Glue U and I into one block; the block plus M, S, C are $4$ objects, arranged in $4! = 24$ ways, and the block itself can be UI or IU, for $24 \\times 2 = 48$ arrangements.',
          'The probability is $\\frac{48}{120} = \\frac{2}{5}$.',
        ],
        answer: 'The probability is $\\frac{2}{5}$.',
      },
      {
        problem: 'A committee of $3$ is chosen at random from $5$ seniors and $4$ juniors. What is the probability that the committee includes at least one junior?',
        steps: [
          'There are $\\binom{9}{3} = 84$ equally likely committees.',
          '“At least one junior” has three cases, but its opposite — no juniors, all seniors — is a single case: $\\binom{5}{3} = 10$ committees.',
          'So $84 - 10 = 74$ committees include a junior, and the probability is $\\frac{74}{84} = \\frac{37}{42}$.',
        ],
        answer: 'The probability is $\\frac{37}{42}$.',
      },
    ],
  },
  problems: [
    {
      q: 'Two people are chosen at random from a group of $6$ women and $4$ men to carry a banner. What is the probability that both are men?',
      choices: ['$\\frac{2}{5}$', '$\\frac{4}{25}$', '$\\frac{2}{15}$', '$\\frac{1}{15}$'],
      answer: 2,
      solution: 'There are $\\binom{10}{2} = 45$ equally likely pairs, and $\\binom{4}{2} = 6$ of them are two men: $\\frac{6}{45} = \\frac{2}{15}$. The choice $\\frac{1}{15}$ puts the unordered count $6$ over the $10 \\times 9 = 90$ ordered draws; $\\frac{4}{25}$ lets the same person be chosen twice; $\\frac{2}{5}$ is the chance that a single draw is a man.',
    },
    {
      q: 'Five different books, one of which is a dictionary, are placed on a shelf in random order. What is the probability that the dictionary is in the middle position?',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{120}$', '$\\frac{3}{5}$'],
      answer: 0,
      solution: 'All $5! = 120$ orders are equally likely. With the dictionary fixed in the middle, the other four books fill the remaining spots in $4! = 24$ ways, so the probability is $\\frac{24}{120} = \\frac{1}{5}$. (Or: the dictionary is equally likely to be in any of the $5$ positions.) The choice $\\frac{2}{5}$ answers “at either end”, $\\frac{3}{5}$ answers “not at an end”, and $\\frac{1}{120}$ counts a single arrangement.',
    },
    {
      q: 'A club has $10$ members, $4$ of whom are officers. A committee of $3$ members is chosen at random. What is the probability that the committee contains no officers?',
      choices: ['$\\frac{1}{2}$', '$\\frac{3}{5}$', '$\\frac{27}{125}$', '$\\frac{1}{6}$'],
      answer: 3,
      solution: 'There are $\\binom{10}{3} = 120$ committees, and the ones with no officers are chosen from the $6$ non-officers: $\\binom{6}{3} = 20$. The probability is $\\frac{20}{120} = \\frac{1}{6}$. The choice $\\frac{3}{5}$ is the chance that a single random member is not an officer, and $\\frac{27}{125}$ cubes that as if the same member could be picked three times.',
    },
    {
      q: 'The five letters of the word BREAD are arranged in a row in random order. What is the probability that the arrangement begins with a vowel and ends with a vowel?',
      choices: ['$\\frac{1}{5}$', '$\\frac{1}{10}$', '$\\frac{2}{5}$', '$\\frac{1}{20}$'],
      answer: 1,
      solution: 'All $5! = 120$ arrangements are equally likely. The vowels E and A must take the two end spots, in $2$ orders, and then B, R, D fill the middle in $3! = 6$ ways: $2 \\times 6 = 12$ arrangements, so the probability is $\\frac{12}{120} = \\frac{1}{10}$. The choice $\\frac{1}{20}$ forgets that the vowels can swap ends; $\\frac{2}{5}$ is the chance that just the first letter is a vowel.',
    },
    {
      q: 'Five cards numbered $1$ through $5$ are shuffled, and two of them are drawn at random at the same time. What is the probability that the sum of the two numbers is even?',
      choices: ['$\\frac{1}{2}$', '$\\frac{3}{10}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$'],
      answer: 2,
      solution: 'There are $\\binom{5}{2} = 10$ equally likely pairs. An even sum needs two odds or two evens: $\\binom{3}{2} = 3$ pairs of odd cards and $\\binom{2}{2} = 1$ pair of even cards, so $4$ pairs. The probability is $\\frac{4}{10} = \\frac{2}{5}$. The choice $\\frac{3}{10}$ forgets the even-even pair, $\\frac{3}{5}$ is the probability of an odd sum, and $\\frac{1}{2}$ assumes even and odd sums are equally likely.',
    },
    {
      q: 'A committee of $4$ is chosen at random from $5$ teachers and $7$ students. What is the probability that the committee has exactly $2$ teachers?',
      choices: ['$\\frac{19}{33}$', '$\\frac{1}{2}$', '$\\frac{31}{495}$', '$\\frac{14}{33}$'],
      answer: 3,
      solution: 'There are $\\binom{12}{4} = 495$ committees. Exactly $2$ teachers means $2$ teachers and $2$ students: $\\binom{5}{2} \\times \\binom{7}{2} = 10 \\times 21 = 210$ committees. The probability is $\\frac{210}{495} = \\frac{14}{33}$. Adding $10 + 21 = 31$ instead of multiplying gives $\\frac{31}{495}$; the choice $\\frac{19}{33}$ answers “at least $2$ teachers” by also counting the $70 + 5$ committees with $3$ or $4$ teachers; $\\frac{1}{2}$ is a “two or not two” guess.',
    },
    {
      q: 'Six people, including Ana and Ben, sit in a random order in a row of $6$ chairs. What is the probability that exactly one person sits between Ana and Ben?',
      choices: ['$\\frac{4}{15}$', '$\\frac{2}{15}$', '$\\frac{1}{3}$', '$\\frac{1}{5}$'],
      answer: 0,
      solution: 'All $6! = 720$ seatings are equally likely. Ana and Ben must occupy chairs two apart: the pairs $(1,3), (2,4), (3,5), (4,6)$, four pairs, with Ana and Ben in either order, so $4 \\times 2 = 8$ ways; the other four people fill the rest in $4! = 24$ ways, for $8 \\times 24 = 192$ seatings. The probability is $\\frac{192}{720} = \\frac{4}{15}$. The choice $\\frac{2}{15}$ forgets that Ana and Ben can swap; $\\frac{1}{3}$ is the probability that they sit next to each other.',
    },
    {
      q: 'The six letters of the word PEPPER are arranged in a row in random order, with every distinct arrangement equally likely. What is the probability that the three P’s are all next to each other?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{30}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution: 'The distinct arrangements number $\\frac{6!}{3! \\, 2!} = 60$. Glue PPP into a block; the block with E, E, R is four objects with a repeated pair, arranged in $\\frac{4!}{2!} = 12$ distinct ways. The probability is $\\frac{12}{60} = \\frac{1}{5}$. Forgetting the repeated E’s in the numerator gives $\\frac{24}{60} = \\frac{2}{5}$; putting $24$ over $6! = 720$ gives $\\frac{1}{30}$.',
    },
    {
      q: 'Eight cards numbered $1$ through $8$ are shuffled, and three are drawn at random at the same time. What is the probability that the largest number drawn is $6$?',
      choices: ['$\\frac{3}{8}$', '$\\frac{15}{56}$', '$\\frac{1}{8}$', '$\\frac{5}{28}$'],
      answer: 3,
      solution: 'There are $\\binom{8}{3} = 56$ equally likely hands. For the largest card to be $6$, the hand must contain the $6$ and two cards chosen from $1$ through $5$: $\\binom{5}{2} = 10$ hands. The probability is $\\frac{10}{56} = \\frac{5}{28}$. The choice $\\frac{15}{56}$ chooses the other two cards from $1$ through $6$, as if the $6$ could be drawn a second time; $\\frac{3}{8} = \\frac{21}{56}$ chooses them from all seven other cards, which lets a $7$ or $8$ in — it is the chance that the $6$ is drawn at all; $\\frac{1}{8}$ assumes each of the eight cards is equally likely to be the largest.',
    },
    {
      q: 'Ten students, including three siblings, are split at random into a red team of $5$ and a blue team of $5$. What is the probability that all three siblings end up on the same team?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{8}$'],
      answer: 2,
      solution: 'A split is determined by the red team, so there are $\\binom{10}{5} = 252$ equally likely splits. The siblings are all red when the other $2$ red spots go to $2$ of the remaining $7$ students, $\\binom{7}{2} = 21$ ways, and all blue in another $21$ ways: $42$ splits. The probability is $\\frac{42}{252} = \\frac{1}{6}$. The choice $\\frac{1}{12}$ counts only the all-red case; $\\frac{1}{4}$ treats the second and third sibling as independent coin flips that each land with the first, ignoring that the teams have only five spots.',
    },
  ],
}

const spinner6 = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.5, -0.866] },
    { t: 'seg', a: [0, 0], b: [0.5, -0.866] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.56, 0.33], text: '1' },
    { t: 'label', p: [0, 0.65], text: '2' },
    { t: 'label', p: [-0.56, 0.33], text: '2' },
    { t: 'label', p: [-0.56, -0.33], text: '1' },
    { t: 'label', p: [0, -0.65], text: '3' },
    { t: 'label', p: [0.56, -0.33], text: '2' },
  ],
}

const challenge = [
  {
    q: 'A bag holds $36$ marbles, each red, white, or blue. The probability of drawing a red marble at random is $\\frac{1}{4}$, and the probability of drawing a white one is $\\frac{1}{3}$. How many blue marbles are in the bag?',
    choices: ['$9$', '$15$', '$21$', '$12$'],
    answer: 1,
    solution: 'Red marbles are $\\frac{1}{4}$ of $36$, which is $9$, and white marbles are $\\frac{1}{3}$ of $36$, which is $12$. That leaves $36 - 9 - 12 = 15$ blue marbles. The choice $21$ is the number of marbles that are not blue; $9$ and $12$ are the red and white counts.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that the two numbers showing differ by exactly $2$?',
    choices: ['$\\frac{2}{9}$', '$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{1}{4}$'],
    answer: 0,
    solution: 'Among the $36$ ordered pairs, a difference of $2$ occurs for $(1,3), (2,4), (3,5), (4,6)$ and their reverses $(3,1), (4,2), (5,3), (6,4)$: $8$ pairs, so $\\frac{8}{36} = \\frac{2}{9}$. The choice $\\frac{1}{9}$ counts only one direction, and $\\frac{1}{6}$ treats the six possible differences $0$ through $5$ as equally likely.',
  },
  {
    q: 'An integer is chosen at random from $1$ to $40$, inclusive. What is the probability that it has no common factor greater than $1$ with $12$?',
    choices: ['$\\frac{7}{40}$', '$\\frac{3}{10}$', '$\\frac{7}{20}$', '$\\frac{13}{40}$'],
    answer: 3,
    solution: 'Sharing no factor with $12 = 2^2 \\times 3$ means being divisible by neither $2$ nor $3$. From $1$ to $40$ there are $20$ multiples of $2$, $13$ multiples of $3$, and $6$ multiples of $6$ counted in both, so $20 + 13 - 6 = 27$ numbers share a factor and $40 - 27 = 13$ do not: $\\frac{13}{40}$. The choice $\\frac{7}{40}$ subtracts $20$ and $13$ without adding the overlap back; $\\frac{3}{10}$ throws out $1$, which does count; $\\frac{7}{20}$ misses the odd multiple $39$ when removing the multiples of $3$ from the $20$ odd numbers.',
  },
  {
    q: 'A fair coin is flipped $4$ times. What is the probability that the results alternate, with no two consecutive flips the same?',
    choices: ['$\\frac{1}{4}$', '$\\frac{1}{16}$', '$\\frac{1}{8}$', '$\\frac{3}{8}$'],
    answer: 2,
    solution: 'There are $2^4 = 16$ equally likely sequences. An alternating sequence is fixed by its first flip: HTHT or THTH. So $2$ of the $16$ sequences work: $\\frac{2}{16} = \\frac{1}{8}$. The choice $\\frac{1}{16}$ counts only one of the two alternating sequences; $\\frac{3}{8}$ is the probability of two heads and two tails in any order.',
  },
  {
    q: 'The spinner shown has $6$ equal sectors, labeled as shown. It is spun twice. What is the probability that the two spins add up to $4$?',
    fig: spinner6,
    choices: ['$\\frac{13}{36}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{5}{18}$'],
    answer: 0,
    solution: 'The labels $1$, $2$, $3$ are not equally likely, so work with the $6 \\times 6 = 36$ equally likely pairs of sectors. Two of the sectors show $1$, three show $2$, and one shows $3$. A sum of $4$ is $1 + 3$ ($2 \\times 1 = 2$ pairs), $3 + 1$ ($1 \\times 2 = 2$ pairs), or $2 + 2$ ($3 \\times 3 = 9$ pairs): $13$ pairs, so $\\frac{13}{36}$. The choice $\\frac{1}{3}$ treats the three labels as equally likely and finds $3$ of $9$; $\\frac{1}{4}$ counts only the $2 + 2$ pairs; $\\frac{5}{18}$ counts the $1$-and-$3$ combination as a single pair instead of $2 + 2 = 4$ ordered pairs.',
  },
  {
    q: 'Two different digits are chosen at random from $1$ through $9$. What is the probability that their product is odd?',
    choices: ['$\\frac{1}{2}$', '$\\frac{5}{18}$', '$\\frac{25}{81}$', '$\\frac{5}{9}$'],
    answer: 1,
    solution: 'There are $\\binom{9}{2} = 36$ equally likely pairs. The product is odd only when both digits are odd, and there are $5$ odd digits: $\\binom{5}{2} = 10$ pairs. The probability is $\\frac{10}{36} = \\frac{5}{18}$. The choice $\\frac{25}{81}$ allows the same digit twice; $\\frac{5}{9}$ is the chance that one digit is odd; $\\frac{1}{2}$ guesses that odd and even products are equally common.',
  },
  {
    q: 'Six people, including Ana and Ben, sit at random around a round table with $6$ evenly spaced seats. What is the probability that Ben is neither next to Ana nor directly across the table from her?',
    choices: ['$\\frac{1}{3}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{2}{5}$'],
    answer: 3,
    solution: 'Seat Ana first; whatever seat she takes, Ben is equally likely to be in any of the other $5$ seats, and the remaining four people do not affect the question. Two of those seats are next to Ana and one is directly across from her, so $5 - 2 - 1 = 2$ seats are allowed: $\\frac{2}{5}$. (Counting seatings instead: $2 \\times 4! = 48$ of the $5! = 120$ arrangements of the other five people.) The choice $\\frac{3}{5}$ removes only the two neighboring seats; $\\frac{4}{5}$ removes only the seat across; and $\\frac{1}{3}$ puts the $2$ good seats over all $6$ seats, including Ana’s own.',
  },
  {
    q: 'The digits $1, 2, 3, 4, 5, 6$ are arranged in random order to form a six-digit number, each digit used exactly once. What is the probability that the number is divisible by $4$?',
    choices: ['$\\frac{1}{5}$', '$\\frac{1}{4}$', '$\\frac{4}{15}$', '$\\frac{7}{30}$'],
    answer: 2,
    solution: 'A number is divisible by $4$ exactly when its last two digits form a multiple of $4$. The last two digits are a random ordered pair of different digits from $1$ to $6$, $6 \\times 5 = 30$ equally likely pairs, and the multiples of $4$ among them are $12, 16, 24, 32, 36, 52, 56, 64$ — eight pairs ($44$ repeats a digit, and $20, 40, 60$ need a $0$). The probability is $\\frac{8}{30} = \\frac{4}{15}$. The choice $\\frac{1}{4}$ assumes every fourth number is divisible by $4$, which fails when digits cannot repeat; $\\frac{7}{30}$ misses one of the eight endings.',
  },
  {
    q: 'A committee of $4$ is chosen at random from $6$ boys and $4$ girls. What is the probability that the committee has more girls than boys?',
    choices: ['$\\frac{1}{2}$', '$\\frac{5}{42}$', '$\\frac{4}{35}$', '$\\frac{23}{42}$'],
    answer: 1,
    solution: 'There are $\\binom{10}{4} = 210$ committees. More girls than boys means $3$ girls and $1$ boy, $\\binom{4}{3} \\times \\binom{6}{1} = 24$ committees, or $4$ girls, $\\binom{4}{4} = 1$ committee: $25$ in all. The probability is $\\frac{25}{210} = \\frac{5}{42}$. The choice $\\frac{4}{35}$ forgets the all-girl committee; $\\frac{23}{42}$ also counts the $90$ committees with two of each, where the girls do not outnumber the boys; $\\frac{1}{2}$ guesses that either group is equally likely to be the majority, ignoring that there are more boys.',
  },
  {
    q: 'Three standard dice are rolled. What is the probability that the product of the three numbers showing is a multiple of $4$?',
    choices: ['$\\frac{5}{8}$', '$\\frac{7}{8}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
    answer: 0,
    solution: 'Count the complement: the product misses being a multiple of $4$ when the three dice supply fewer than two factors of $2$. Case one, all three dice odd: $3^3 = 27$ rolls. Case two, exactly one die contributes a single factor of $2$ — it shows $2$ or $6$ — and the other two are odd: $3$ choices for which die, $2$ faces for it, $3 \\times 3$ for the others, $54$ rolls. (A $4$ on any die supplies two factors of $2$ by itself, so it never appears in the complement.) That is $27 + 54 = 81$ rolls out of $6^3 = 216$, so the probability is $1 - \\frac{81}{216} = \\frac{135}{216} = \\frac{5}{8}$. Stopping after the all-odd case gives $\\frac{7}{8}$; treating any even face, including $4$, as a single factor of $2$ makes the second case $3 \\times 3 \\times 9 = 81$ and gives $\\frac{1}{2}$; forgetting that a $6$ is even makes it $27$ and gives $\\frac{3}{4}$.',
  },
  {
    q: 'Three standard dice are rolled. What is the probability that the largest number showing is exactly $4$?',
    choices: ['$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{37}{216}$', '$\\frac{8}{27}$'],
    answer: 2,
    solution: 'There are $6^3 = 216$ equally likely rolls. “Largest is at most $4$” means all three dice show $1$ through $4$: $4^3 = 64$ rolls. “Largest is at most $3$” means all three show $1$ through $3$: $3^3 = 27$ rolls. The largest is exactly $4$ in the difference, $64 - 27 = 37$ rolls, so the probability is $\\frac{37}{216}$. The choice $\\frac{8}{27} = \\frac{64}{216}$ stops at “at most $4$”; $\\frac{1}{6}$ assumes each of the six possible maximums is equally likely.',
  },
  {
    q: 'Four married couples — $8$ people — are at a dinner, and $4$ of the $8$ are chosen at random to give a toast. What is the probability that the group of $4$ contains exactly one married couple?',
    choices: ['$\\frac{6}{7}$', '$\\frac{24}{35}$', '$\\frac{3}{35}$', '$\\frac{27}{35}$'],
    answer: 1,
    solution: 'There are $\\binom{8}{4} = 70$ equally likely groups. Choose which couple is in the group ($4$ ways), then choose $2$ more people from the other $6$ so that they are not a couple: $\\binom{6}{2} = 15$ pairs minus the $3$ that are couples, $12$ ways. That gives $4 \\times 12 = 48$ groups, so the probability is $\\frac{48}{70} = \\frac{24}{35}$. The choice $\\frac{6}{7}$ keeps all $15$ pairs and so counts groups with two couples twice; $\\frac{27}{35}$ is the probability of at least one couple ($70 - 2^4 = 54$ groups); $\\frac{3}{35}$ is the probability of exactly two couples.',
  },
]

const worksheet = [
  {
    q: 'A box holds $20$ tickets numbered $1$ through $20$, and one ticket is drawn at random. What is the probability that the number on it is a multiple of $3$?',
    answer: '$\\frac{3}{10}$',
    solution: 'Each of the $20$ tickets is an equally likely outcome. The multiples of $3$ from $1$ to $20$ are $3, 6, 9, 12, 15, 18$ — six of them. The probability is $\\frac{6}{20} = \\frac{3}{10}$.',
  },
  {
    q: 'A standard die is rolled once. What is the probability that the number showing is a factor of $4$?',
    answer: '$\\frac{1}{2}$',
    solution: 'The factors of $4$ that appear on a die are $1$, $2$, and $4$, three of the six equally likely faces: $\\frac{3}{6} = \\frac{1}{2}$. Forgetting that $1$ is a factor gives $\\frac{1}{3}$.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that the sum of the two numbers is a multiple of $4$?',
    answer: '$\\frac{1}{4}$',
    solution: 'The possible sums that are multiples of $4$ are $4$, $8$, and $12$. In the $6 \\times 6$ table, sum $4$ fills $3$ cells, sum $8$ fills $5$ cells, and sum $12$ fills $1$ cell: $3 + 5 + 1 = 9$ of the $36$ ordered pairs, so $\\frac{9}{36} = \\frac{1}{4}$. Treating the eleven sums as equally likely would wrongly give $\\frac{3}{11}$.',
  },
  {
    q: 'Four fair coins are flipped. What is the probability that at least three of them show heads?',
    answer: '$\\frac{5}{16}$',
    solution: 'There are $2^4 = 16$ equally likely sequences. Exactly three heads means the single tail is on one of the $4$ coins, $4$ sequences, and exactly four heads is the single sequence HHHH: $4 + 1 = 5$ favorable sequences, so $\\frac{5}{16}$. Treating “$0, 1, 2, 3, 4$ heads” as five equal outcomes would wrongly give $\\frac{2}{5}$.',
  },
  {
    q: 'A jar holds $21$ marbles, some green and the rest white. The probability of drawing a green marble at random is $\\frac{3}{7}$. How many white marbles are in the jar?',
    answer: '$12$',
    solution: 'Green marbles are $\\frac{3}{7}$ of $21$, which is $9$, so the white marbles number $21 - 9 = 12$.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that the product of the two numbers is a perfect square?',
    answer: '$\\frac{2}{9}$',
    solution: 'The six doubles $(1,1)$ through $(6,6)$ all give squares. With different numbers, the only square products available are $4 = 1 \\times 4$ and — since $9$, $16$, $25$ need equal factors or a factor above $6$ — nothing else, giving $(1,4)$ and $(4,1)$. That is $6 + 2 = 8$ pairs: $\\frac{8}{36} = \\frac{2}{9}$.',
  },
  {
    q: 'The five letters of the word CANDY are arranged in a row in random order. What is the probability that the letter A is not at either end of the row?',
    answer: '$\\frac{3}{5}$',
    solution: 'All $5! = 120$ arrangements are equally likely. Place A first: it must go in one of the $3$ middle positions, and then the other four letters fill the rest in $4! = 24$ ways, for $3 \\times 24 = 72$ arrangements. The probability is $\\frac{72}{120} = \\frac{3}{5}$. (Or: A is equally likely to be in any of the $5$ positions, and $3$ of them are not ends.)',
  },
  {
    q: 'A committee of $3$ is chosen at random from $7$ people, two of whom are Mia and Noah. What is the probability that Mia is on the committee and Noah is not?',
    answer: '$\\frac{2}{7}$',
    solution: 'There are $\\binom{7}{3} = 35$ equally likely committees. A favorable committee is Mia together with $2$ of the $5$ people other than Mia and Noah: $\\binom{5}{2} = 10$ committees. The probability is $\\frac{10}{35} = \\frac{2}{7}$. Choosing the other two from all $6$ remaining people, $\\binom{6}{2} = 15$, would let Noah in and give $\\frac{3}{7}$, the probability that Mia is chosen at all.',
  },
  {
    q: 'Two different integers are chosen at random from $1$ through $10$. What is the probability that they add up to $11$?',
    answer: '$\\frac{1}{9}$',
    solution: 'There are $\\binom{10}{2} = 45$ equally likely pairs. The pairs with sum $11$ are $\\{1,10\\}, \\{2,9\\}, \\{3,8\\}, \\{4,7\\}, \\{5,6\\}$, five of them: $\\frac{5}{45} = \\frac{1}{9}$.',
  },
  {
    q: 'Five people, including Ana and Ben, stand in a row in random order. What is the probability that Ana stands somewhere to the left of Ben but not directly next to him?',
    answer: '$\\frac{3}{10}$',
    solution: 'All $5! = 120$ orders are equally likely. Ana’s position must be at least two to the left of Ben’s: the position pairs are $(1,3), (1,4), (1,5), (2,4), (2,5), (3,5)$, six of them, and the other three people fill the remaining spots in $3! = 6$ ways, for $36$ orders. The probability is $\\frac{36}{120} = \\frac{3}{10}$. (Check by symmetry: Ana is left of Ben in half of all orders, and next to him on his left in $\\frac{4 \\times 6}{120} = \\frac{1}{5}$ of them; $\\frac{1}{2} - \\frac{1}{5} = \\frac{3}{10}$.)',
  },
]

export default {
  id: 'intro-counting-ch07',
  book: 'intro-counting',
  number: 7,
  title: 'Introduction to Probability',
  intro:
    'How likely is it? Every counting skill you have built — lists, slots, casework, committees — turns into a way to measure chance. In this chapter you will learn what a probability is, why “one out of two possibilities” is usually a trap, and how to put a count on top of a count to predict dice, coins, spinners, and random committees.',
  sections: [s72, s73, s74],
  challenge,
  worksheet,
}
