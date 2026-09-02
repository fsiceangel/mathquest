// Counting & Probability — Chapter 8: Basic Probability Techniques
// All problems, explanations, and examples are original MathQuest content.

const s82 = {
  id: '8.2',
  title: 'Probability and Addition',
  learn: {
    concepts: [
      {
        heading: 'Disjoint events add',
        body: 'Two events are disjoint if no single outcome makes both of them happen. When that is true, $P(A \\text{ or } B) = P(A) + P(B)$: the favorable outcomes for $A$ and the favorable outcomes for $B$ are separate piles, so you just pile them together. Rolling a $1$ or rolling a $6$ on one die: $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$.',
      },
      {
        heading: 'Overlap gets counted twice',
        body: 'If some outcome sits in BOTH events, adding $P(A) + P(B)$ counts it twice. Subtract it back once: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. Ask "can one outcome do both?" before you add — if the answer is yes, there is an overlap to subtract.',
      },
      {
        heading: 'Casework in probability',
        body: 'A messy event can be cut into disjoint cases, each an easy probability over the same sample space, and the case probabilities add. "The sum is $5$ or $9$" splits cleanly into sum $5$ and sum $9$, because no roll has both sums. Casework is addition with the disjointness built in.',
      },
      {
        heading: 'Adding fractions or counting outcomes?',
        body: 'When every outcome is equally likely, both routes give the same number: add the probabilities, or count all favorable outcomes and divide once by the total. The counting route makes the overlap visible — you can see the outcome you are about to count twice. Use it whenever "or" makes you nervous.',
      },
    ],
    examples: [
      {
        problem: 'A spinner has $10$ equal sections numbered $1$ through $10$. What is the probability that one spin lands on a prime number or on a number greater than $8$?',
        steps: [
          'The primes on the spinner are $2, 3, 5, 7$, so $P(\\text{prime}) = \\frac{4}{10}$.',
          'The numbers greater than $8$ are $9$ and $10$, so $P(\\text{greater than } 8) = \\frac{2}{10}$.',
          'No number is in both lists — $9$ and $10$ are not prime — so the events are disjoint and the probabilities add: $\\frac{4}{10} + \\frac{2}{10} = \\frac{6}{10}$.',
        ],
        answer: 'The probability is $\\frac{3}{5}$.',
      },
      {
        problem: 'Twelve cards are numbered $1$ through $12$, and one is drawn at random. What is the probability that the number is even or a multiple of $3$?',
        steps: [
          'Six of the cards are even, and four are multiples of $3$ ($3, 6, 9, 12$).',
          'The cards $6$ and $12$ are in both groups, so adding $6 + 4 = 10$ counts them twice.',
          'Subtract the overlap once: $6 + 4 - 2 = 8$ favorable cards out of $12$.',
        ],
        answer: 'The probability is $\\frac{8}{12} = \\frac{2}{3}$.',
      },
      {
        problem: 'Two standard dice, one red and one blue, are rolled. What is the probability that the sum is $6$ or that both dice show the same number?',
        steps: [
          'Of the $36$ equally likely rolls, the sum is $6$ for $(1,5), (2,4), (3,3), (4,2), (5,1)$ — that is $5$ rolls.',
          'The dice match in $6$ rolls: $(1,1)$ through $(6,6)$.',
          'The roll $(3,3)$ appears in both lists, so it must be counted only once: $5 + 6 - 1 = 10$ favorable rolls.',
          'The probability is $\\frac{10}{36} = \\frac{5}{18}$.',
        ],
        answer: 'The probability is $\\frac{5}{18}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A bag holds $5$ red chips, $3$ white chips, and $4$ black chips. One chip is drawn at random. What is the probability that it is red or black?',
      choices: ['$\\frac{3}{4}$', '$\\frac{5}{12}$', '$\\frac{1}{3}$', '$\\frac{7}{12}$'],
      answer: 0,
      solution: 'A chip cannot be both red and black, so the events are disjoint and the probabilities add: $\\frac{5}{12} + \\frac{4}{12} = \\frac{9}{12} = \\frac{3}{4}$. The choice $\\frac{5}{12}$ is red alone, and $\\frac{7}{12}$ is white or black.',
    },
    {
      q: 'A standard six-sided die is rolled once. What is the probability that the result is even or greater than $4$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$'],
      answer: 1,
      solution: 'The even results are $2, 4, 6$ and the results greater than $4$ are $5, 6$. The roll $6$ is in both lists, so $\\frac{3}{6} + \\frac{2}{6}$ counts it twice. Subtract it once: $\\frac{3 + 2 - 1}{6} = \\frac{4}{6} = \\frac{2}{3}$. The choice $\\frac{5}{6}$ forgets the overlap.',
    },
    {
      q: 'The spinner shown is divided into four sections: half of it is red, one quarter is blue, and the remaining two sections, green and yellow, are equal in size. What is the probability that one spin lands on red or green?',
      fig: {
        view: [-1.35, -1.35, 1.35, 1.35],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, -1], b: [0, 1] },
          { t: 'seg', a: [0, 0], b: [-1, 0] },
          { t: 'seg', a: [0, 0], b: [-0.7071, -0.7071] },
          { t: 'label', p: [0.5, 0], text: 'red' },
          { t: 'label', p: [-0.45, 0.45], text: 'blue' },
          { t: 'label', p: [-0.7, -0.22], text: 'green' },
          { t: 'label', p: [-0.3, -0.62], text: 'yellow' },
        ],
      },
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{8}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution: 'Green and yellow share the quarter that is left after red and blue, so each is $\\frac{1}{8}$ of the spinner. Red and green cannot both happen on one spin, so add: $\\frac{1}{2} + \\frac{1}{8} = \\frac{5}{8}$. The choice $\\frac{3}{4}$ treats green as a full quarter.',
    },
    {
      q: 'An integer is chosen at random from $1$ through $40$. What is the probability that it is a multiple of $6$ or a perfect square?',
      choices: ['$\\frac{3}{20}$', '$\\frac{11}{40}$', '$\\frac{3}{10}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution: 'There are $6$ multiples of $6$ ($6$ through $36$) and $6$ perfect squares ($1, 4, 9, 16, 25, 36$). The number $36$ is on both lists, so it is counted twice in $6 + 6 = 12$. Correct: $6 + 6 - 1 = 11$ favorable numbers, and $\\frac{11}{40}$. The choice $\\frac{3}{10}$ skips the overlap, $\\frac{3}{20}$ is one group alone, and $\\frac{1}{4}$ forgets that $1$ is a perfect square.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the sum is $5$ or the sum is $9$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{7}{36}$', '$\\frac{2}{9}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution: 'A roll has only one sum, so the two cases are disjoint. Sum $5$: $(1,4), (2,3), (3,2), (4,1)$, four rolls. Sum $9$: $(3,6), (4,5), (5,4), (6,3)$, four rolls. Together $\\frac{4 + 4}{36} = \\frac{8}{36} = \\frac{2}{9}$. The choice $\\frac{1}{9}$ is one sum alone.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that at least one die shows a $3$ or the sum is $4$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{7}{18}$', '$\\frac{11}{36}$', '$\\frac{5}{18}$'],
      answer: 0,
      solution: 'At least one $3$ happens in $11$ rolls ($6$ with a red $3$, $6$ with a blue $3$, minus the double $(3,3)$). The sum is $4$ in $3$ rolls: $(1,3), (2,2), (3,1)$. Two of those, $(1,3)$ and $(3,1)$, already contain a $3$, so they were counted in the first group. Favorable rolls: $11 + 3 - 2 = 12$, and $\\frac{12}{36} = \\frac{1}{3}$. The choice $\\frac{7}{18}$ adds $11 + 3$ without removing the overlap.',
    },
    {
      q: 'A two-digit positive integer is chosen at random (there are $90$ of them, from $10$ through $99$). What is the probability that its tens digit is $7$ or its units digit is $7$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{19}{90}$', '$\\frac{1}{10}$', '$\\frac{1}{5}$'],
      answer: 3,
      solution: 'Tens digit $7$: the ten numbers $70$ through $79$. Units digit $7$: the nine numbers $17, 27, \\ldots, 97$. The number $77$ is in both groups, so the count is $10 + 9 - 1 = 18$, and $\\frac{18}{90} = \\frac{1}{5}$. The choice $\\frac{19}{90}$ counts $77$ twice, and $\\frac{1}{9}$ is the tens-digit group alone.',
    },
    {
      q: 'Three fair coins are flipped in order. What is the probability that exactly two of them show heads or the first coin shows heads?',
      choices: ['$\\frac{7}{8}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'Exactly two heads: HHT, HTH, THH — $3$ of the $8$ sequences. First coin heads: $4$ sequences. The sequences HHT and HTH are in both groups, so the favorable count is $3 + 4 - 2 = 5$, giving $\\frac{5}{8}$. The choice $\\frac{7}{8}$ adds $3 + 4$ and never subtracts the overlap.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the two numbers differ by exactly $1$ or that their sum is $7$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{4}{9}$', '$\\frac{7}{18}$', '$\\frac{5}{18}$'],
      answer: 2,
      solution: 'Differ by $1$: the pairs $\\{1,2\\}, \\{2,3\\}, \\{3,4\\}, \\{4,5\\}, \\{5,6\\}$, each in two orders, so $10$ rolls. Sum $7$: $6$ rolls. The rolls $(3,4)$ and $(4,3)$ do both, so the favorable count is $10 + 6 - 2 = 14$, and $\\frac{14}{36} = \\frac{7}{18}$. The choice $\\frac{4}{9}$ is $\\frac{16}{36}$, the sum with no overlap removed; $\\frac{5}{18}$ counts each differ-by-$1$ pair in only one order.',
    },
    {
      q: 'A three-digit positive integer is chosen at random from $100$ through $999$. What is the probability that it contains the digit $5$ or that all three of its digits are the same?',
      choices: ['$\\frac{7}{25}$', '$\\frac{29}{100}$', '$\\frac{13}{45}$', '$\\frac{1}{100}$'],
      answer: 2,
      solution: 'There are $900$ numbers. Count those with no $5$: $8$ choices for the hundreds digit (not $0$, not $5$) and $9$ each for the other two, so $8 \\times 9 \\times 9 = 648$, leaving $900 - 648 = 252$ that contain a $5$. All digits the same: $111, 222, \\ldots, 999$, nine numbers — but $555$ contains a $5$ and is already counted. Favorable: $252 + 9 - 1 = 260$, and $\\frac{260}{900} = \\frac{13}{45}$. The choice $\\frac{29}{100}$ counts $555$ twice, and $\\frac{7}{25}$ forgets the repeated-digit numbers entirely.',
    },
  ],
}

const s83 = {
  id: '8.3',
  title: 'Complementary Probabilities',
  learn: {
    concepts: [
      {
        heading: 'The other side of the coin',
        body: 'Every outcome either makes event $A$ happen or it does not. The outcomes where $A$ fails form the complement of $A$, and since the two piles together make up everything, $P(\\text{not } A) = 1 - P(A)$. If the chance of rain is $\\frac{3}{10}$, the chance of no rain is $\\frac{7}{10}$ — no new counting required.',
      },
      {
        heading: '"At least one" means "not zero"',
        body: 'The complement of "at least one head" is "no heads at all" — a single, clean outcome. The complement is NOT "all heads": at least one head already includes all heads. So $P(\\text{at least one}) = 1 - P(\\text{none})$, and "none" is usually the easiest event in the whole problem.',
      },
      {
        heading: 'Several tries, all missing',
        body: 'When the same thing is tried several times independently, "none" happens only if every try misses. With equally likely outcomes, count the miss outcomes for each try and multiply: three rolls all avoid a $6$ in $5 \\times 5 \\times 5 = 125$ of the $216$ ways. Then $P(\\text{at least one } 6) = 1 - \\frac{125}{216} = \\frac{91}{216}$.',
      },
      {
        heading: 'Take the smaller job',
        body: 'Before counting, ask which is shorter: the event or its complement. "At least two heads in five flips" has four cases, but its complement, "zero or one head", has two tiny ones — and both must be included. The trap is stopping early: the complement of "at least $2$" is "at most $1$", not just "$0$".',
      },
    ],
    examples: [
      {
        problem: 'A spinner has $12$ equal sections numbered $1$ through $12$. What is the probability that one spin does not land on a multiple of $5$?',
        steps: [
          'The multiples of $5$ on the spinner are $5$ and $10$, so $P(\\text{multiple of } 5) = \\frac{2}{12} = \\frac{1}{6}$.',
          'Not landing on one is the complement, so subtract from $1$: $1 - \\frac{1}{6} = \\frac{5}{6}$.',
        ],
        answer: 'The probability is $\\frac{5}{6}$.',
      },
      {
        problem: 'Four fair coins are flipped. What is the probability that at least one of them shows tails?',
        steps: [
          'The complement of "at least one tails" is "no tails", which means all four coins show heads.',
          'There are $2^4 = 16$ equally likely sequences, and only HHHH has no tails, so $P(\\text{no tails}) = \\frac{1}{16}$.',
          'Subtract: $1 - \\frac{1}{16} = \\frac{15}{16}$.',
        ],
        answer: 'The probability is $\\frac{15}{16}$.',
      },
      {
        problem: 'A standard die is rolled three times. What is the probability that at least one of the rolls is a $1$ or a $2$?',
        steps: [
          'Go through the complement: no roll is a $1$ or a $2$, meaning every roll is $3, 4, 5,$ or $6$.',
          'Each roll misses in $4$ of $6$ ways, so all three miss in $4 \\times 4 \\times 4 = 64$ of the $6 \\times 6 \\times 6 = 216$ equally likely results.',
          'So $P(\\text{none}) = \\frac{64}{216} = \\frac{8}{27}$, and $P(\\text{at least one}) = 1 - \\frac{8}{27} = \\frac{19}{27}$.',
        ],
        answer: 'The probability is $\\frac{19}{27}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A standard six-sided die is rolled once. What is the probability that the result is not a perfect square?',
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'The perfect squares on a die are $1$ and $4$, so $P(\\text{square}) = \\frac{2}{6} = \\frac{1}{3}$ and $P(\\text{not a square}) = 1 - \\frac{1}{3} = \\frac{2}{3}$. The choice $\\frac{5}{6}$ forgets that $1$ is a perfect square.',
    },
    {
      q: 'A spinner has $10$ equal sections numbered $1$ through $10$. What is the probability that one spin lands on a number that is not prime?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{7}{10}$', '$\\frac{3}{5}$'],
      answer: 3,
      solution: 'The primes from $1$ to $10$ are $2, 3, 5, 7$, so $P(\\text{prime}) = \\frac{4}{10}$ and $P(\\text{not prime}) = 1 - \\frac{4}{10} = \\frac{6}{10} = \\frac{3}{5}$. The choice $\\frac{1}{2}$ comes from calling $1$ a prime; it is not.',
    },
    {
      q: 'A standard die is rolled twice. What is the probability that at least one of the two rolls is even?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{5}{8}$'],
      answer: 0,
      solution: 'The complement is that both rolls are odd. Each roll is odd in $3$ of $6$ ways, so both are odd in $3 \\times 3 = 9$ of the $36$ results: $P(\\text{both odd}) = \\frac{1}{4}$. Then $P(\\text{at least one even}) = 1 - \\frac{1}{4} = \\frac{3}{4}$. The choice $\\frac{1}{4}$ is the complement itself, and $\\frac{1}{2}$ is the probability that one particular roll is even.',
    },
    {
      q: 'One of the $26$ letters of the alphabet is chosen at random. What is the probability that it is not a vowel? (The vowels are A, E, I, O, and U.)',
      choices: ['$\\frac{5}{26}$', '$\\frac{10}{13}$', '$\\frac{21}{26}$', '$\\frac{4}{13}$'],
      answer: 2,
      solution: 'Five letters are vowels, so $P(\\text{vowel}) = \\frac{5}{26}$ and $P(\\text{not a vowel}) = 1 - \\frac{5}{26} = \\frac{21}{26}$. The choice $\\frac{10}{13} = \\frac{20}{26}$ is an off-by-one slip that removes six letters instead of five.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the product of the two numbers is not a perfect square?',
      choices: ['$\\frac{5}{6}$', '$\\frac{2}{9}$', '$\\frac{3}{4}$', '$\\frac{7}{9}$'],
      answer: 3,
      solution: 'Count the complement: rolls whose product is a perfect square. The six doubles $(1,1)$ through $(6,6)$ all work, and so do $(1,4)$ and $(4,1)$, whose product is $4$. No other pair of numbers from $1$ to $6$ multiplies to a square, so there are $8$ square products, and $P(\\text{not a square}) = 1 - \\frac{8}{36} = \\frac{28}{36} = \\frac{7}{9}$. The choice $\\frac{5}{6}$ misses $(1,4)$ and $(4,1)$; $\\frac{2}{9}$ is the complement.',
    },
    {
      q: 'Four friends each name their favorite season, and each of them is equally likely to name any of the four seasons, independently of the others. What is the probability that at least one of the four names winter?',
      choices: ['$\\frac{175}{256}$', '$\\frac{81}{256}$', '$\\frac{37}{64}$', '$\\frac{1}{256}$'],
      answer: 0,
      solution: 'All four avoid winter in $3 \\times 3 \\times 3 \\times 3 = 81$ of the $4^4 = 256$ equally likely lists of answers. So $P(\\text{at least one winter}) = 1 - \\frac{81}{256} = \\frac{175}{256}$. The choice $\\frac{81}{256}$ stops at the complement, $\\frac{37}{64} = 1 - \\frac{27}{64}$ counts only three friends, and $\\frac{1}{256}$ is all four naming winter.',
    },
    {
      q: 'Five fair coins are flipped. What is the probability that at least two of them show heads?',
      choices: ['$\\frac{31}{32}$', '$\\frac{13}{16}$', '$\\frac{27}{32}$', '$\\frac{3}{16}$'],
      answer: 1,
      solution: 'The complement of "at least two heads" is "zero or one head". Zero heads: $1$ sequence. Exactly one head: $5$ sequences, one for each coin that could be the head. So $6$ of the $32$ sequences fail, and $P = 1 - \\frac{6}{32} = \\frac{26}{32} = \\frac{13}{16}$. The choice $\\frac{31}{32}$ only removes the all-tails sequence, forgetting the one-head case.',
    },
    {
      q: 'A bag holds $3$ red, $3$ blue, and $3$ green marbles. A marble is drawn at random, its color noted, and it is put back; this is done three times in total. What is the probability that the three colors noted are not all the same?',
      choices: ['$\\frac{26}{27}$', '$\\frac{2}{3}$', '$\\frac{8}{9}$', '$\\frac{1}{9}$'],
      answer: 2,
      solution: 'Because the marble goes back each time, every draw is red, blue, or green with probability $\\frac{1}{3}$. All three the same color happens in $3$ ways (all red, all blue, all green) out of $27$ equally likely color sequences, so $P(\\text{all same}) = \\frac{3}{27} = \\frac{1}{9}$ and $P(\\text{not all same}) = 1 - \\frac{1}{9} = \\frac{8}{9}$. The choice $\\frac{26}{27}$ counts only one of the three all-same sequences.',
    },
    {
      q: 'Three standard dice — red, blue, and green — are rolled. What is the probability that at least two of the dice show the same number?',
      choices: ['$\\frac{5}{9}$', '$\\frac{1}{36}$', '$\\frac{5}{12}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution: 'The complement is that all three numbers are different: $6 \\times 5 \\times 4 = 120$ of the $216$ rolls. So $P(\\text{some match}) = 1 - \\frac{120}{216} = \\frac{96}{216} = \\frac{4}{9}$. The choice $\\frac{5}{9}$ is the complement, and $\\frac{5}{12}$ counts only rolls with exactly two matching, leaving out the six triples.',
    },
    {
      q: 'A four-digit positive integer is chosen at random from $1000$ through $9999$. What is the probability that at least one digit appears more than once?',
      choices: ['$\\frac{62}{125}$', '$\\frac{63}{125}$', '$\\frac{11}{25}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution: 'There are $9000$ four-digit numbers. The complement is "all four digits different": $9$ choices for the first digit (not $0$), then $9$ for the second (anything but the first — $0$ is allowed now), then $8$, then $7$, for $9 \\times 9 \\times 8 \\times 7 = 4536$ numbers. So $P(\\text{a repeat}) = 1 - \\frac{4536}{9000} = \\frac{4464}{9000} = \\frac{62}{125}$. The choice $\\frac{63}{125}$ is the complement, and $\\frac{11}{25}$ comes from $10 \\times 9 \\times 8 \\times 7$, which lets the number start with $0$.',
    },
  ],
}

const s84 = {
  id: '8.4',
  title: 'Probability and Multiplication',
  learn: {
    concepts: [
      {
        heading: 'Independent events multiply',
        body: 'Two events are independent when one happening tells you nothing about the other — a coin flip and a die roll, two spins of a spinner. For independent events, $P(A \\text{ and } B) = P(A) \\times P(B)$. Heads and then a $6$: $\\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$. Adding here would be the classic slip: "and" multiplies, "or" adds.',
      },
      {
        heading: 'One exact sequence',
        body: 'For a whole chain of independent results, multiply all the way along. The exact sequence heads, tails, heads has probability $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$, and so does every other exact sequence of three flips. Notice what this counts: one specific order, not "two heads somewhere".',
      },
      {
        heading: 'Exactly $k$ of $n$: one order, times the orders',
        body: '"Exactly two heads in four flips" can happen in $\\binom{4}{2} = 6$ different orders, and each order has the same probability $\\frac{1}{16}$. So the answer is $6 \\times \\frac{1}{16} = \\frac{3}{8}$. Two jobs, always: the probability of one order (a product), and the number of orders (a count). Forgetting the count is the most common slip in the chapter.',
      },
      {
        heading: 'When the two results are not equally likely',
        body: 'The same plan works for a lopsided coin or a spinner that is $\\frac{1}{3}$ red. With $P(\\text{red}) = \\frac{1}{3}$, exactly two reds in three spins has probability $\\binom{3}{2} \\times \\left(\\frac{1}{3}\\right)^2 \\times \\frac{2}{3} = \\frac{2}{9}$: every order still has the same probability, because it uses the same factors in a different order.',
      },
    ],
    examples: [
      {
        problem: 'A spinner has $3$ equal sections: one red and two blue. It is spun twice. What is the probability that the first spin is red and the second is blue?',
        steps: [
          'The spins are independent, so multiply.',
          '$P(\\text{red}) = \\frac{1}{3}$ and $P(\\text{blue}) = \\frac{2}{3}$, so $P(\\text{red then blue}) = \\frac{1}{3} \\times \\frac{2}{3} = \\frac{2}{9}$.',
        ],
        answer: 'The probability is $\\frac{2}{9}$.',
      },
      {
        problem: 'A fair coin is flipped $5$ times. What is the probability of getting exactly $2$ heads?',
        steps: [
          'Any one exact sequence of $5$ flips has probability $\\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$.',
          'The two heads can sit in any $2$ of the $5$ positions: $\\binom{5}{2} = 10$ orders.',
          'Multiply the count of orders by the probability of one order: $10 \\times \\frac{1}{32} = \\frac{10}{32}$.',
        ],
        answer: 'The probability is $\\frac{5}{16}$.',
      },
      {
        problem: 'A standard die is rolled $3$ times. What is the probability that exactly one of the rolls is a $6$?',
        steps: [
          'One order — say $6$, not $6$, not $6$ — has probability $\\frac{1}{6} \\times \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{216}$.',
          'The single $6$ could be the first, second, or third roll, and each of those orders has that same probability.',
          'So the answer is $3 \\times \\frac{25}{216} = \\frac{75}{216}$.',
        ],
        answer: 'The probability is $\\frac{25}{72}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A fair coin is flipped and a standard die is rolled. What is the probability that the coin shows heads and the die shows a multiple of $3$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
      answer: 2,
      solution: 'The coin and the die are independent. $P(\\text{heads}) = \\frac{1}{2}$ and $P(3 \\text{ or } 6) = \\frac{2}{6} = \\frac{1}{3}$, so the probability of both is $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$. The choice $\\frac{5}{6}$ adds instead of multiplying, and $\\frac{1}{12}$ counts only the $6$.',
    },
    {
      q: 'A bag holds $2$ red and $3$ blue marbles. A marble is drawn at random, put back, and a marble is drawn again. What is the probability that both draws are red?',
      choices: ['$\\frac{4}{25}$', '$\\frac{1}{10}$', '$\\frac{2}{5}$', '$\\frac{4}{5}$'],
      answer: 0,
      solution: 'Because the marble goes back, the second draw is exactly like the first: $P(\\text{red}) = \\frac{2}{5}$ both times, and the draws are independent. Multiply: $\\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}$. The choice $\\frac{1}{10} = \\frac{2}{5} \\times \\frac{1}{4}$ is the answer if the marble were NOT put back.',
    },
    {
      q: 'A fair coin is flipped $4$ times. What is the probability that the results, in order, are heads, tails, tails, heads?',
      choices: ['$\\frac{1}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{4}$', '$\\frac{1}{16}$'],
      answer: 3,
      solution: 'This asks for one exact sequence, so multiply the four independent flips: $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{16}$. The choice $\\frac{3}{8}$ is the probability of two heads in ANY order, which is a different question.',
    },
    {
      q: 'A fair coin is flipped $4$ times. What is the probability of getting exactly $3$ heads?',
      choices: ['$\\frac{1}{16}$', '$\\frac{1}{4}$', '$\\frac{3}{8}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution: 'One order, such as HHHT, has probability $\\frac{1}{16}$. The single tail can be any of the $4$ flips, so there are $4$ orders: $4 \\times \\frac{1}{16} = \\frac{1}{4}$. The choice $\\frac{1}{16}$ forgets to count the orders; $\\frac{3}{8}$ is exactly $2$ heads.',
    },
    {
      q: 'A spinner has $8$ equal sections numbered $1$ through $8$. It is spun twice. What is the probability that exactly one of the two spins lands on $8$?',
      choices: ['$\\frac{7}{64}$', '$\\frac{15}{64}$', '$\\frac{7}{32}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution: 'The order "$8$ then not $8$" has probability $\\frac{1}{8} \\times \\frac{7}{8} = \\frac{7}{64}$, and so does "not $8$ then $8$". The two orders cannot both happen, so add them: $\\frac{7}{64} + \\frac{7}{64} = \\frac{14}{64} = \\frac{7}{32}$. The choice $\\frac{7}{64}$ is one order only; $\\frac{15}{64}$ is "at least one $8$", which wrongly includes the double $8$; $\\frac{1}{4}$ adds $\\frac{1}{8} + \\frac{1}{8}$ as if the other spin did not have to miss.',
    },
    {
      q: 'A spinner has $5$ equal sections: $2$ are green and $3$ are yellow. It is spun $3$ times. What is the probability that exactly two of the spins land on green?',
      choices: ['$\\frac{36}{125}$', '$\\frac{12}{125}$', '$\\frac{54}{125}$', '$\\frac{8}{125}$'],
      answer: 0,
      solution: 'One order, green-green-yellow, has probability $\\frac{2}{5} \\times \\frac{2}{5} \\times \\frac{3}{5} = \\frac{12}{125}$. The yellow spin can be first, second, or third, so there are $3$ orders with that same probability: $3 \\times \\frac{12}{125} = \\frac{36}{125}$. The choice $\\frac{12}{125}$ forgets the three orders, and $\\frac{54}{125}$ answers "exactly two yellow".',
    },
    {
      q: 'Ana makes each free throw with probability $\\frac{3}{4}$, and her shots are independent. She takes $3$ free throws. What is the probability that she makes exactly two of them?',
      choices: ['$\\frac{9}{64}$', '$\\frac{63}{64}$', '$\\frac{27}{32}$', '$\\frac{27}{64}$'],
      answer: 3,
      solution: 'One order, make-make-miss, has probability $\\frac{3}{4} \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{9}{64}$. The miss can be any of the $3$ shots, so $3 \\times \\frac{9}{64} = \\frac{27}{64}$. The choice $\\frac{9}{64}$ is a single order, and $\\frac{63}{64}$ is "at least one make".',
    },
    {
      q: 'A fair coin is flipped $6$ times. What is the probability that it shows more heads than tails?',
      choices: ['$\\frac{1}{2}$', '$\\frac{11}{32}$', '$\\frac{5}{16}$', '$\\frac{15}{64}$'],
      answer: 1,
      solution: 'More heads than tails means $4$, $5$, or $6$ heads. Each exact sequence has probability $\\frac{1}{64}$, and the number of sequences is $\\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 15 + 6 + 1 = 22$. So the probability is $\\frac{22}{64} = \\frac{11}{32}$. The choice $\\frac{1}{2}$ forgets that a $3$–$3$ tie is possible; $\\frac{15}{64}$ is exactly $4$ heads alone.',
    },
    {
      q: 'A weighted coin lands heads with probability $\\frac{2}{3}$ on each flip, independently. It is flipped $4$ times. What is the probability that exactly two flips are heads and those two heads come on consecutive flips?',
      choices: ['$\\frac{4}{27}$', '$\\frac{8}{27}$', '$\\frac{4}{81}$', '$\\frac{2}{9}$'],
      answer: 0,
      solution: 'Every sequence with exactly two heads has probability $\\left(\\frac{2}{3}\\right)^2 \\left(\\frac{1}{3}\\right)^2 = \\frac{4}{81}$. Of the $\\binom{4}{2} = 6$ such sequences, only HHTT, THHT, and TTHH have the heads side by side. So the probability is $3 \\times \\frac{4}{81} = \\frac{12}{81} = \\frac{4}{27}$. The choice $\\frac{8}{27}$ uses all $6$ orders, ignoring the consecutive condition; $\\frac{4}{81}$ is a single order.',
    },
    {
      q: 'Ben flips a fair coin $3$ times and Cara flips a fair coin $4$ times. What is the probability that Cara gets more heads than Ben?',
      choices: ['$\\frac{35}{64}$', '$\\frac{9}{16}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$'],
      answer: 2,
      solution: 'Compare after Cara’s first $3$ flips, when the two have flipped the same number of times. By symmetry, "Cara is ahead" and "Ben is ahead" have the same probability, say $p$, and "tied" has probability $t$, with $2p + t = 1$. If Cara is already ahead, she stays ahead no matter what her fourth flip does; if she is behind after three, one more flip can at best tie. If they are tied, she pulls ahead exactly when her fourth flip is heads, probability $\\frac{1}{2}$. So $P(\\text{Cara ahead}) = p + \\frac{t}{2} = \\frac{2p + t}{2} = \\frac{1}{2}$. Listing all $128$ pairs of results gives the same $\\frac{64}{128}$. The choice $\\frac{35}{64}$ comes from miscounting the tie cases.',
    },
  ],
}

const s85 = {
  id: '8.5',
  title: 'Probability with Dependent Events',
  learn: {
    concepts: [
      {
        heading: 'The bag changes after each draw',
        body: 'When a marble is drawn and NOT put back, the second draw comes from a smaller bag, so its probability depends on what left. Draw two from $3$ red and $2$ blue: the first is red with probability $\\frac{3}{5}$, and if that happened, the second is red with probability $\\frac{2}{4}$ — two reds left among four marbles. Events like these are dependent.',
      },
      {
        heading: 'Multiply stage by stage',
        body: 'For dependent events, $P(A \\text{ then } B) = P(A) \\times P(B \\text{ given that } A \\text{ happened})$. Just keep asking "what is left?": both red from $3$ red and $2$ blue is $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$. Each draw drops the denominator by $1$, and the numerator drops only when the draw used up one of the marbles you want.',
      },
      {
        heading: 'Different orders, same probability',
        body: '"One red and one blue" can happen as red-then-blue or blue-then-red. From $3$ red and $2$ blue, those are $\\frac{3}{5} \\times \\frac{2}{4}$ and $\\frac{2}{5} \\times \\frac{3}{4}$ — the same fractions in a different order, so the same value. Add the orders: $2 \\times \\frac{3}{10} = \\frac{3}{5}$. Whenever the mix of colors is fixed, every order has the same probability, so multiply one order by the number of orders.',
      },
      {
        heading: 'Cross-check by counting',
        body: 'Drawing $k$ marbles one at a time without replacement gives the same answer as grabbing $k$ at once, so you can also count: favorable groups divided by $\\binom{n}{k}$. Both red from $3$ red and $2$ blue is $\\frac{\\binom{3}{2}}{\\binom{5}{2}} = \\frac{3}{10}$, matching the stage-by-stage product. When the two routes disagree, one of them missed an order.',
      },
    ],
    examples: [
      {
        problem: 'A bag holds $4$ red and $3$ blue marbles. Two marbles are drawn at random without replacement. What is the probability that both are blue?',
        steps: [
          'The first marble is blue with probability $\\frac{3}{7}$.',
          'If it was, $2$ blue marbles remain among $6$, so the second is blue with probability $\\frac{2}{6}$.',
          'Multiply the stages: $\\frac{3}{7} \\times \\frac{2}{6} = \\frac{6}{42} = \\frac{1}{7}$.',
        ],
        answer: 'The probability is $\\frac{1}{7}$.',
      },
      {
        problem: 'Five cards numbered $1$ through $5$ are shuffled. Two cards are dealt, one after the other. What is the probability that the first card is odd and the second card is even?',
        steps: [
          'Three of the five cards are odd, so $P(\\text{first odd}) = \\frac{3}{5}$.',
          'After an odd card is gone, $4$ cards remain and both even cards, $2$ and $4$, are still there: $P(\\text{second even}) = \\frac{2}{4}$.',
          'Multiply: $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$.',
        ],
        answer: 'The probability is $\\frac{3}{10}$.',
      },
      {
        problem: 'A bag holds $5$ white and $3$ black marbles. Three are drawn without replacement. What is the probability that exactly one of them is black?',
        steps: [
          'One order, black-white-white, has probability $\\frac{3}{8} \\times \\frac{5}{7} \\times \\frac{4}{6} = \\frac{60}{336}$.',
          'The black marble could be the first, second, or third draw, and each of those orders uses the same three numerators and the same three denominators, just rearranged — so each has probability $\\frac{60}{336}$.',
          'Add the three orders: $3 \\times \\frac{60}{336} = \\frac{180}{336} = \\frac{15}{28}$.',
          'Cross-check by counting: $\\frac{\\binom{3}{1}\\binom{5}{2}}{\\binom{8}{3}} = \\frac{30}{56} = \\frac{15}{28}$.',
        ],
        answer: 'The probability is $\\frac{15}{28}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A drawer holds $4$ black socks and $6$ gray socks, all loose. Two socks are pulled out at random, one after the other, without replacement. What is the probability that both are gray?',
      choices: ['$\\frac{9}{25}$', '$\\frac{2}{15}$', '$\\frac{3}{5}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution: 'The first sock is gray with probability $\\frac{6}{10}$; then $5$ gray socks remain among $9$, so the second is gray with probability $\\frac{5}{9}$. Multiply: $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$. The choice $\\frac{9}{25}$ forgets that the first sock is gone, $\\frac{2}{15}$ is both black, and $\\frac{3}{5}$ stops after one sock.',
    },
    {
      q: 'Ten cards numbered $1$ through $10$ are shuffled. Two cards are dealt one after the other. What is the probability that the first card is the $7$ and the second card is the $3$?',
      choices: ['$\\frac{1}{100}$', '$\\frac{1}{90}$', '$\\frac{1}{45}$', '$\\frac{1}{10}$'],
      answer: 1,
      solution: 'The first card is the $7$ with probability $\\frac{1}{10}$, and then the $3$ is one of the $9$ remaining cards: $\\frac{1}{10} \\times \\frac{1}{9} = \\frac{1}{90}$. The choice $\\frac{1}{45}$ allows the two cards in either order, but the question fixes the order.',
    },
    {
      q: 'A class has $7$ girls and $5$ boys. Two students are chosen at random, one after the other, to carry equipment. What is the probability that the first is a girl and the second is a boy?',
      choices: ['$\\frac{35}{144}$', '$\\frac{35}{66}$', '$\\frac{35}{132}$', '$\\frac{7}{22}$'],
      answer: 2,
      solution: 'The first pick is a girl with probability $\\frac{7}{12}$. Then $11$ students remain, all $5$ boys still among them, so the second is a boy with probability $\\frac{5}{11}$. Multiply: $\\frac{7}{12} \\times \\frac{5}{11} = \\frac{35}{132}$. The choice $\\frac{35}{144}$ uses $12$ for the second denominator, and $\\frac{35}{66}$ counts girl-boy in either order.',
    },
    {
      q: 'A bag holds $4$ red and $2$ blue marbles. Two are drawn at random without replacement. What is the probability that the two marbles are different colors?',
      choices: ['$\\frac{8}{15}$', '$\\frac{4}{15}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$'],
      answer: 0,
      solution: 'Red then blue: $\\frac{4}{6} \\times \\frac{2}{5} = \\frac{8}{30}$. Blue then red: $\\frac{2}{6} \\times \\frac{4}{5} = \\frac{8}{30}$. The two orders cannot both happen, so add: $\\frac{16}{30} = \\frac{8}{15}$. The choice $\\frac{4}{15}$ counts just one order.',
    },
    {
      q: 'A bag holds $3$ gold and $5$ silver coins. Three coins are drawn at random without replacement. What is the probability that all three are silver?',
      choices: ['$\\frac{125}{512}$', '$\\frac{5}{28}$', '$\\frac{5}{14}$', '$\\frac{1}{28}$'],
      answer: 1,
      solution: 'Stage by stage: $\\frac{5}{8}$ for the first silver coin, then $\\frac{4}{7}$, then $\\frac{3}{6}$. The product is $\\frac{60}{336} = \\frac{5}{28}$. The choice $\\frac{125}{512}$ puts each coin back, and $\\frac{5}{14}$ stops after two coins.',
    },
    {
      q: 'Ten cards numbered $1$ through $10$ are shuffled, and two of them are drawn together at random. What is the probability that both numbers are even?',
      choices: ['$\\frac{1}{4}$', '$\\frac{5}{18}$', '$\\frac{1}{9}$', '$\\frac{2}{9}$'],
      answer: 3,
      solution: 'Drawing two together is the same as drawing one and then another. The first is even with probability $\\frac{5}{10}$, and then $4$ of the $9$ remaining cards are even: $\\frac{5}{10} \\times \\frac{4}{9} = \\frac{20}{90} = \\frac{2}{9}$. Counting agrees: $\\frac{\\binom{5}{2}}{\\binom{10}{2}} = \\frac{10}{45}$. The choice $\\frac{1}{4}$ treats the draws as independent.',
    },
    {
      q: 'A jar holds $4$ lemon candies and $4$ lime candies. Sam takes two candies at random without looking. What is the probability that they are different flavors?',
      choices: ['$\\frac{1}{2}$', '$\\frac{3}{7}$', '$\\frac{4}{7}$', '$\\frac{2}{7}$'],
      answer: 2,
      solution: 'Lemon then lime is $\\frac{4}{8} \\times \\frac{4}{7} = \\frac{2}{7}$, and lime then lemon is the same. Add the two orders: $\\frac{4}{7}$. The choice $\\frac{3}{7}$ is the complement, both candies the same flavor ($2 \\times \\frac{4}{8} \\times \\frac{3}{7}$); $\\frac{1}{2}$ is the tempting guess that ignores how the jar changes after the first candy.',
    },
    {
      q: 'A bag holds $2$ red, $3$ blue, and $4$ green marbles. Three marbles are drawn at random without replacement. What is the probability that there is one of each color?',
      choices: ['$\\frac{2}{7}$', '$\\frac{1}{21}$', '$\\frac{16}{81}$', '$\\frac{4}{21}$'],
      answer: 0,
      solution: 'One order, red-blue-green, has probability $\\frac{2}{9} \\times \\frac{3}{8} \\times \\frac{4}{7} = \\frac{24}{504} = \\frac{1}{21}$. The three colors can come out in $3! = 6$ orders, each with that same probability: $6 \\times \\frac{1}{21} = \\frac{6}{21} = \\frac{2}{7}$. The choice $\\frac{1}{21}$ forgets the orders, and $\\frac{16}{81}$ puts each marble back before the next draw.',
    },
    {
      q: 'A box holds $3$ red and $3$ white balls. Balls are drawn at random one at a time without replacement until a red ball appears, and then the drawing stops. What is the probability that exactly three balls are drawn?',
      choices: ['$\\frac{1}{8}$', '$\\frac{3}{20}$', '$\\frac{1}{20}$', '$\\frac{3}{10}$'],
      answer: 1,
      solution: 'Exactly three draws means white, white, red in that order. Stage by stage: $\\frac{3}{6}$ for the first white, then $\\frac{2}{5}$ for the second white, then $\\frac{3}{4}$ for a red from the $4$ balls left. Multiply: $\\frac{3}{6} \\times \\frac{2}{5} \\times \\frac{3}{4} = \\frac{18}{120} = \\frac{3}{20}$. The choice $\\frac{1}{8}$ treats each draw as an independent coin flip.',
    },
    {
      q: 'A bag holds $5$ red and $3$ blue marbles. Marbles are drawn at random one at a time without replacement. What is the probability that the second blue marble to appear is the fourth marble drawn?',
      choices: ['$\\frac{1}{14}$', '$\\frac{5}{28}$', '$\\frac{15}{56}$', '$\\frac{3}{14}$'],
      answer: 3,
      solution: 'The first three draws must contain exactly one blue marble, and the fourth must be blue. One order for the first three, blue-red-red, has probability $\\frac{3}{8} \\times \\frac{5}{7} \\times \\frac{4}{6} = \\frac{60}{336} = \\frac{5}{28}$, and the blue could be in any of $3$ positions, so $P(\\text{one blue in three}) = \\frac{15}{28}$. Then $2$ blue marbles remain among $5$: multiply by $\\frac{2}{5}$ to get $\\frac{15}{28} \\times \\frac{2}{5} = \\frac{30}{140} = \\frac{3}{14}$. The choice $\\frac{1}{14}$ uses only one order for the first three draws, and $\\frac{15}{56}$ multiplies by $\\frac{1}{2}$ instead of $\\frac{2}{5}$ at the last stage.',
    },
  ],
}

const s86 = {
  id: '8.6',
  title: 'Shooting Stars — a Hard Problem',
  learn: {
    concepts: [
      {
        heading: 'Games unfold in stages',
        body: 'Star shoots free throws until she misses. Nova draws marbles until a red one appears. Two teams play until one has won twice. Problems like these do not have a fixed sample space of equally likely outcomes — the game can be short or long. The tool is a tree: at each stage, branch on what can happen next, and write the probability of that branch on it.',
      },
      {
        heading: 'Multiply along a path',
        body: 'One complete path through the tree — make, make, miss — is a chain of events happening in order, so its probability is the product of the branch probabilities along it. If each shot goes in with probability $\\frac{2}{3}$, the path make-make-miss has probability $\\frac{2}{3} \\times \\frac{2}{3} \\times \\frac{1}{3} = \\frac{4}{27}$. When the branches depend on earlier stages (drawing without replacement), each branch probability uses what is left at that moment.',
      },
      {
        heading: 'Add across the winning paths',
        body: 'Two different paths can never both happen — they part ways at the first stage where they differ. So the winning paths are disjoint, and the probability of winning is the sum over them. The whole method: list every path that wins, multiply along each one, add the results. The only way to get it wrong is to miss a path or list one that does not really end the game.',
      },
      {
        heading: 'Organize by the stage where the game ends',
        body: 'To be sure no path is missed, sort the paths by their length — "wins in $2$ games", "wins in $3$ games" — or by the stage at which the deciding event lands. Check that the stopping rule is honored: in a best-of-three, the path win-win-win does not exist, because the series ended after two wins. As a sanity check, the probabilities of ALL possible endings should add to $1$.',
      },
    ],
    examples: [
      {
        problem: 'A bag holds $2$ red and $3$ blue marbles. Marbles are drawn at random one at a time without replacement until a red marble appears. What is the probability that the drawing ends on the second or third draw?',
        steps: [
          'Ends on the second draw: the path is blue, red, with probability $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$.',
          'Ends on the third draw: the path is blue, blue, red, with probability $\\frac{3}{5} \\times \\frac{2}{4} \\times \\frac{2}{3} = \\frac{1}{5}$.',
          'The two paths are disjoint, so add: $\\frac{3}{10} + \\frac{1}{5} = \\frac{1}{2}$.',
        ],
        answer: 'The probability is $\\frac{1}{2}$.',
      },
      {
        problem: 'Two teams play a series that ends as soon as one team has won $2$ games. Team A wins each game with probability $\\frac{2}{3}$, independently. What is the probability that Team A wins the series?',
        steps: [
          'Organize by the length of the series. A wins in two games by the path AA, with probability $\\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9}$.',
          'A wins in three games by ABA or BAA — the third game must be the clinching win, so A cannot have won both of the first two. Each path has probability $\\frac{2}{3} \\times \\frac{1}{3} \\times \\frac{2}{3} = \\frac{4}{27}$.',
          'Add the three disjoint paths: $\\frac{4}{9} + \\frac{4}{27} + \\frac{4}{27} = \\frac{12}{27} + \\frac{8}{27} = \\frac{20}{27}$.',
        ],
        answer: 'The probability is $\\frac{20}{27}$.',
      },
      {
        problem: 'Star makes each free throw with probability $\\frac{2}{3}$, independently. She keeps shooting until she has missed twice in total, and then she stops. What is the probability that she makes exactly $3$ baskets before stopping?',
        steps: [
          'The game ends on the second miss, so the last shot is a miss. Exactly $3$ baskets means the shots before the last one are $3$ makes and $1$ miss, in some order — $5$ shots in all.',
          'Every such path has $3$ makes and $2$ misses, so its probability is $\\left(\\frac{2}{3}\\right)^3 \\left(\\frac{1}{3}\\right)^2 = \\frac{8}{243}$.',
          'The first miss can be any of the first $4$ shots, giving $4$ paths: for example, miss-make-make-make-miss or make-make-miss-make-miss.',
          'Add the four disjoint paths: $4 \\times \\frac{8}{243} = \\frac{32}{243}$.',
        ],
        answer: 'The probability is $\\frac{32}{243}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A spinner lands on gold with probability $\\frac{1}{3}$ on every spin, independently of the other spins. It is spun until it lands on gold. What is the probability that the first gold comes on the first or second spin?',
      choices: ['$\\frac{5}{9}$', '$\\frac{2}{3}$', '$\\frac{2}{9}$', '$\\frac{4}{9}$'],
      answer: 0,
      solution: 'Two disjoint paths. Gold on the first spin: $\\frac{1}{3}$. Not gold, then gold: $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. Add: $\\frac{1}{3} + \\frac{2}{9} = \\frac{5}{9}$. The choice $\\frac{2}{3}$ adds $\\frac{1}{3} + \\frac{1}{3}$ as if the second spin did not need the first to fail.',
    },
    {
      q: 'A spinner lands on a star with probability $\\frac{1}{4}$ on every spin, independently of the other spins. It is spun until a star appears. What is the probability that the first star comes on the second or third spin?',
      choices: ['$\\frac{3}{16}$', '$\\frac{1}{2}$', '$\\frac{21}{64}$', '$\\frac{27}{64}$'],
      answer: 2,
      solution: 'Star on the second spin: the path is miss, star, with probability $\\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}$. Star on the third spin: miss, miss, star, with probability $\\frac{3}{4} \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{9}{64}$. Add the two paths: $\\frac{12}{64} + \\frac{9}{64} = \\frac{21}{64}$. The choice $\\frac{27}{64}$ is the probability that the first three spins all miss.',
    },
    {
      q: 'Two teams play a series that ends as soon as one team has won $2$ games. The Comets win each game with probability $\\frac{3}{5}$, independently of the other games. What is the probability that the Comets lose the first game but still win the series?',
      choices: ['$\\frac{9}{25}$', '$\\frac{18}{125}$', '$\\frac{6}{25}$', '$\\frac{12}{125}$'],
      answer: 1,
      solution: 'After losing game $1$, the Comets must win both remaining games, and the series then lasts exactly three games: the only path is lose, win, win. Multiply along it: $\\frac{2}{5} \\times \\frac{3}{5} \\times \\frac{3}{5} = \\frac{18}{125}$. The choice $\\frac{6}{25}$ stops after game $2$, forgetting that a $1$–$1$ split does not end the series; $\\frac{9}{25}$ is a two-game sweep, which cannot happen after a loss; and $\\frac{12}{125}$ uses the losing probability $\\frac{2}{5}$ for the deciding game.',
    },
    {
      q: 'A box holds $5$ raffle tickets: $2$ are winners and $3$ are blanks. Tickets are drawn at random one at a time without replacement until a winning ticket appears, and then the drawing stops. What is the probability that at most one blank ticket is drawn?',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{10}$', '$\\frac{16}{25}$', '$\\frac{7}{10}$'],
      answer: 3,
      solution: 'At most one blank means the drawing ends on the first or second draw. Winner first: $\\frac{2}{5}$. Blank then winner: $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$, since both winners are still among the four tickets that remain. Add the two disjoint paths: $\\frac{2}{5} + \\frac{3}{10} = \\frac{7}{10}$. The choice $\\frac{2}{5}$ counts only the first-draw path, $\\frac{3}{10}$ only the second, and $\\frac{16}{25}$ treats the second draw as if the blank ticket had been put back.',
    },
    {
      q: 'Star makes each free throw with probability $\\frac{2}{3}$, independently. She shoots until she misses, then stops. What is the probability that she makes at least $1$ basket but no more than $3$ baskets?',
      choices: ['$\\frac{26}{81}$', '$\\frac{19}{81}$', '$\\frac{38}{81}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'Organize by the number of baskets. Exactly $1$: make, miss, probability $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. Exactly $2$: $\\left(\\frac{2}{3}\\right)^2 \\times \\frac{1}{3} = \\frac{4}{27}$. Exactly $3$: $\\left(\\frac{2}{3}\\right)^3 \\times \\frac{1}{3} = \\frac{8}{81}$. Add the three disjoint paths: $\\frac{18}{81} + \\frac{12}{81} + \\frac{8}{81} = \\frac{38}{81}$. The choice $\\frac{2}{3}$ is the probability of at least one basket, with no upper limit.',
    },
    {
      q: 'Pia and Quinn take turns rolling a standard die, Pia first. The first person to roll a $6$ wins. If neither has rolled a $6$ after each has rolled twice, the game ends with no winner. What is the probability that Pia wins?',
      choices: ['$\\frac{61}{216}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{11}{36}$'],
      answer: 0,
      solution: 'Pia can win on her first roll or her second, which is the third roll of the game. First roll: $\\frac{1}{6}$. Third roll: the first two rolls must both miss, then Pia rolls a $6$, giving $\\frac{5}{6} \\times \\frac{5}{6} \\times \\frac{1}{6} = \\frac{25}{216}$. Add: $\\frac{36}{216} + \\frac{25}{216} = \\frac{61}{216}$. The choice $\\frac{11}{36}$ is the chance that at least one of Pia’s two rolls is a $6$, which ignores that Quinn may have already won.',
    },
    {
      q: 'A bag holds $3$ red and $2$ blue marbles. Marbles are drawn at random one at a time without replacement until both blue marbles have been drawn. What is the probability that the drawing ends on the third draw?',
      choices: ['$\\frac{1}{10}$', '$\\frac{1}{5}$', '$\\frac{3}{10}$', '$\\frac{2}{5}$'],
      answer: 1,
      solution: 'The third draw must be the second blue, so the first two draws contain exactly one blue. Path red-blue-blue: $\\frac{3}{5} \\times \\frac{2}{4} \\times \\frac{1}{3} = \\frac{1}{10}$. Path blue-red-blue: $\\frac{2}{5} \\times \\frac{3}{4} \\times \\frac{1}{3} = \\frac{1}{10}$. Add: $\\frac{1}{5}$. The choice $\\frac{1}{10}$ lists only one of the two paths.',
    },
    {
      q: 'Two teams play a series that ends as soon as one team has won $3$ games. The Rockets win each game with probability $\\frac{2}{3}$, independently. What is the probability that the series ends after exactly $4$ games?',
      choices: ['$\\frac{8}{27}$', '$\\frac{2}{27}$', '$\\frac{4}{9}$', '$\\frac{10}{27}$'],
      answer: 3,
      solution: 'Either team could win in four. The Rockets do it by winning game $4$ and exactly $2$ of the first $3$: $\\binom{3}{2} = 3$ paths, each with probability $\\left(\\frac{2}{3}\\right)^3 \\times \\frac{1}{3} = \\frac{8}{81}$, total $\\frac{24}{81}$. Their opponents do it by winning game $4$ and $2$ of the first $3$: $3$ paths, each $\\left(\\frac{1}{3}\\right)^3 \\times \\frac{2}{3} = \\frac{2}{81}$, total $\\frac{6}{81}$. Add: $\\frac{30}{81} = \\frac{10}{27}$. The choice $\\frac{8}{27}$ forgets that the other team can also end the series in four games.',
    },
    {
      q: 'Star makes each free throw with probability $\\frac{1}{2}$, independently. She keeps shooting until she has made two baskets in a row, and then she stops. What is the probability that she takes exactly $5$ shots?',
      choices: ['$\\frac{3}{32}$', '$\\frac{1}{8}$', '$\\frac{1}{16}$', '$\\frac{5}{32}$'],
      answer: 0,
      solution: 'Shots $4$ and $5$ must both be makes. Shot $3$ must be a miss — a make there would have made shots $3$ and $4$ two in a row, ending the game early. Shots $1$ and $2$ can be anything except make-make, which would have ended the game after two shots: miss-miss, miss-make, or make-miss. That gives $3$ paths, each a specific sequence of $5$ shots with probability $\\frac{1}{32}$, so the answer is $\\frac{3}{32}$. The choice $\\frac{1}{8}$ allows all four beginnings, including the make-make that ends the game too soon.',
    },
    {
      q: 'A bag holds $3$ red and $4$ blue marbles. Two players take turns drawing one marble at random without replacement, and the first player to draw a red marble wins. What is the probability that the player who draws first wins?',
      choices: ['$\\frac{3}{7}$', '$\\frac{4}{7}$', '$\\frac{22}{35}$', '$\\frac{3}{5}$'],
      answer: 2,
      solution: 'The first player draws on turns $1$, $3$, and $5$, and can win on any of them; turn $7$ is impossible since only $4$ blue marbles exist. Turn $1$: $\\frac{3}{7}$. Turn $3$: blue, blue, red, with probability $\\frac{4}{7} \\times \\frac{3}{6} \\times \\frac{3}{5} = \\frac{6}{35}$. Turn $5$: four blues then red, $\\frac{4}{7} \\times \\frac{3}{6} \\times \\frac{2}{5} \\times \\frac{1}{4} \\times \\frac{3}{3} = \\frac{1}{35}$. Add: $\\frac{15}{35} + \\frac{6}{35} + \\frac{1}{35} = \\frac{22}{35}$. The choice $\\frac{3}{7}$ stops after the first turn, and $\\frac{3}{5}$ drops the turn-$5$ path.',
    },
  ],
}

const challenge = [
  {
    q: 'An integer is chosen at random from $1$ through $50$. What is the probability that it is a multiple of $3$ or ends in the digit $0$?',
    choices: ['$\\frac{21}{50}$', '$\\frac{2}{5}$', '$\\frac{8}{25}$', '$\\frac{3}{10}$'],
    answer: 1,
    solution: 'There are $16$ multiples of $3$ (up through $48$) and $5$ numbers ending in $0$. The number $30$ is in both groups, so the favorable count is $16 + 5 - 1 = 20$, and $\\frac{20}{50} = \\frac{2}{5}$. The choice $\\frac{21}{50}$ counts $30$ twice, and $\\frac{8}{25}$ is the multiples of $3$ alone.',
  },
  {
    q: 'A standard die is rolled three times. What is the probability that no roll is a $6$ but at least one roll is a $5$?',
    choices: ['$\\frac{91}{216}$', '$\\frac{125}{216}$', '$\\frac{1}{8}$', '$\\frac{61}{216}$'],
    answer: 3,
    solution: 'Start with the rolls that have no $6$: $5^3 = 125$ of the $216$. Among those, remove the ones that also have no $5$ — every roll from $\\{1,2,3,4\\}$, which is $4^3 = 64$. That leaves $125 - 64 = 61$ favorable rolls, so the probability is $\\frac{61}{216}$. The choice $\\frac{125}{216}$ stops at "no $6$", and $\\frac{91}{216}$ is "at least one $6$", the wrong event entirely.',
  },
  {
    q: 'A spinner has $3$ equal sections colored red, green, and blue. It is spun $4$ times. What is the probability that exactly two of the spins land on red?',
    choices: ['$\\frac{8}{27}$', '$\\frac{4}{27}$', '$\\frac{1}{9}$', '$\\frac{16}{81}$'],
    answer: 0,
    solution: 'One order with two reds and two non-reds has probability $\\left(\\frac{1}{3}\\right)^2 \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{81}$, and the two reds can occupy any $\\binom{4}{2} = 6$ of the four positions: $6 \\times \\frac{4}{81} = \\frac{24}{81} = \\frac{8}{27}$. The choice $\\frac{16}{81}$ uses only $4$ orders, and $\\frac{4}{27}$ uses $3$.',
  },
  {
    q: 'A bag holds $5$ red and $4$ blue marbles. Three marbles are drawn at random without replacement. What is the probability that at least one of them is blue?',
    choices: ['$\\frac{5}{42}$', '$\\frac{4}{9}$', '$\\frac{37}{42}$', '$\\frac{13}{18}$'],
    answer: 2,
    solution: 'The complement is that all three are red: $\\frac{5}{9} \\times \\frac{4}{8} \\times \\frac{3}{7} = \\frac{60}{504} = \\frac{5}{42}$. So $P(\\text{at least one blue}) = 1 - \\frac{5}{42} = \\frac{37}{42}$. The choice $\\frac{5}{42}$ is the complement itself, and $\\frac{13}{18}$ stops the complement after two draws.',
  },
  {
    q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the sum is even or at least one die shows a $2$?',
    choices: ['$\\frac{29}{36}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{5}{9}$'],
    answer: 1,
    solution: 'The sum is even in $18$ rolls (both odd or both even). At least one $2$ happens in $11$ rolls. The overlap is the rolls with a $2$ and an even sum, meaning the other die is also even: $(2,2), (2,4), (2,6), (4,2), (6,2)$, five rolls. Favorable: $18 + 11 - 5 = 24$, so $\\frac{24}{36} = \\frac{2}{3}$. The choice $\\frac{29}{36}$ never subtracts the overlap.',
  },
  {
    q: 'A fair coin is flipped $5$ times. What is the probability that the first two flips match or the last two flips match?',
    choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{5}{8}$', '$\\frac{3}{4}$'],
    answer: 3,
    solution: 'The first two flips match with probability $\\frac{1}{2}$ (the second must copy the first), and so do the last two. The two events involve different coins, so they are independent and both happen with probability $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. Then $P(\\text{either}) = \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{4} = \\frac{3}{4}$. The middle flip never matters. The choice $\\frac{1}{4}$ is "both", and $\\frac{1}{2}$ is one of the events alone.',
  },
  {
    q: 'A standard die is rolled $4$ times. What is the probability that at least one roll is a $1$ and at least one roll is a $6$?',
    choices: ['$\\frac{151}{648}$', '$\\frac{23}{648}$', '$\\frac{671}{1296}$', '$\\frac{1}{4}$'],
    answer: 0,
    solution: 'Count the complement: no $1$ or no $6$. $P(\\text{no } 1) = \\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$, and the same for no $6$; both at once means every roll is from $\\{2,3,4,5\\}$, probability $\\left(\\frac{4}{6}\\right)^4 = \\frac{256}{1296}$. So $P(\\text{no } 1 \\text{ or no } 6) = \\frac{625 + 625 - 256}{1296} = \\frac{994}{1296}$, and the answer is $1 - \\frac{994}{1296} = \\frac{302}{1296} = \\frac{151}{648}$. The choice $\\frac{23}{648}$ subtracts both complements but forgets to add the overlap back; $\\frac{671}{1296}$ handles only one of the two conditions.',
  },
  {
    q: 'Two evenly matched teams play a series that ends as soon as one team has won $3$ games; each game is won by either team with probability $\\frac{1}{2}$. What is the probability that the series lasts the full $5$ games?',
    choices: ['$\\frac{1}{2}$', '$\\frac{5}{16}$', '$\\frac{3}{8}$', '$\\frac{1}{4}$'],
    answer: 2,
    solution: 'The series reaches a fifth game exactly when the first four games are split $2$–$2$. Each sequence of four results has probability $\\frac{1}{16}$, and $\\binom{4}{2} = 6$ of them are $2$–$2$ splits, so the probability is $\\frac{6}{16} = \\frac{3}{8}$. The choice $\\frac{5}{16}$ comes from counting $5$ sequences, and $\\frac{1}{4}$ from treating the split as a single coin flip.',
  },
  {
    q: 'A bag holds $3$ red and $3$ blue marbles. All six are drawn at random one at a time without replacement. What is the probability that the colors alternate for the whole sequence?',
    choices: ['$\\frac{1}{20}$', '$\\frac{1}{32}$', '$\\frac{1}{6}$', '$\\frac{1}{10}$'],
    answer: 3,
    solution: 'Starting with red, the sequence must be R B R B R B: $\\frac{3}{6} \\times \\frac{3}{5} \\times \\frac{2}{4} \\times \\frac{2}{3} \\times \\frac{1}{2} \\times 1 = \\frac{36}{720} = \\frac{1}{20}$. Starting with blue gives the same product. Add the two paths: $\\frac{1}{10}$. The choice $\\frac{1}{20}$ forgets the sequence that starts with blue, and $\\frac{1}{32}$ treats the draws as independent coin flips.',
  },
  {
    q: 'Ann flips a fair coin $4$ times and Bo flips a fair coin $3$ times. What is the probability that Ann gets exactly one more head than Bo?',
    choices: ['$\\frac{35}{64}$', '$\\frac{35}{128}$', '$\\frac{1}{4}$', '$\\frac{17}{128}$'],
    answer: 1,
    solution: 'Organize by Bo’s number of heads $k$, which forces Ann to get $k + 1$. The flips are independent, so multiply the counts: $k = 0$: $\\binom{3}{0}\\binom{4}{1} = 4$; $k = 1$: $\\binom{3}{1}\\binom{4}{2} = 18$; $k = 2$: $\\binom{3}{2}\\binom{4}{3} = 12$; $k = 3$: $\\binom{3}{3}\\binom{4}{4} = 1$. That is $35$ favorable pairs out of $2^7 = 128$, so $\\frac{35}{128}$. The choice $\\frac{35}{64}$ uses the wrong total, and $\\frac{17}{128}$ misses the $k = 1$ case.',
  },
  {
    q: 'A bag holds $2$ red, $2$ blue, and $2$ green marbles. Marbles are drawn at random one at a time without replacement until two marbles of the same color have been drawn, and then the drawing stops. What is the probability that the drawing stops on the third draw?',
    choices: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{3}{10}$', '$\\frac{8}{25}$'],
    answer: 0,
    solution: 'Stopping on the third draw needs the first two marbles to differ and the third to match one of them. The second marble differs from the first with probability $\\frac{4}{5}$. Then four marbles remain: one of each of the two colors already seen and two of the third color, so the third draw matches an earlier color with probability $\\frac{2}{4}$. Multiply: $\\frac{4}{5} \\times \\frac{1}{2} = \\frac{2}{5}$. As a check, stopping on the second draw has probability $\\frac{1}{5}$ and stopping on the fourth has probability $\\frac{4}{5} \\times \\frac{1}{2} = \\frac{2}{5}$, and $\\frac{1}{5} + \\frac{2}{5} + \\frac{2}{5} = 1$. The choice $\\frac{1}{5}$ is the second-draw case.',
  },
  {
    q: 'The Hawks and the Owls play a series that ends as soon as one team has won $3$ games. Games $1$, $2$, and $5$ (if needed) are at the Hawks’ home court, where the Hawks win with probability $\\frac{3}{4}$; games $3$ and $4$ (if needed) are away, where the Hawks win with probability $\\frac{1}{2}$. Games are independent. What is the probability that the Hawks win the series?',
    choices: ['$\\frac{33}{64}$', '$\\frac{459}{512}$', '$\\frac{99}{128}$', '$\\frac{3}{4}$'],
    answer: 2,
    solution: 'Organize by the length of the series. In $3$ games: win, win, win $= \\frac{3}{4} \\times \\frac{3}{4} \\times \\frac{1}{2} = \\frac{9}{32}$. In $4$ games: the Hawks win game $4$ (away, $\\frac{1}{2}$) after winning exactly $2$ of the first $3$. The paths are WWL, WLW, LWW for games $1$–$3$, with probabilities $\\frac{9}{32}$, $\\frac{3}{32}$, $\\frac{3}{32}$; their sum $\\frac{15}{32}$ times $\\frac{1}{2}$ gives $\\frac{15}{64}$. In $5$ games: the Hawks win game $5$ (home, $\\frac{3}{4}$) after splitting the first $4$. Two wins among games $1$–$4$: WWLL has probability $\\frac{9}{64}$, LLWW has $\\frac{1}{64}$, and the other four splits (one home win, one away win) have $\\frac{3}{64}$ each, so the total is $\\frac{22}{64}$; times $\\frac{3}{4}$ gives $\\frac{33}{128}$. Add: $\\frac{36}{128} + \\frac{30}{128} + \\frac{33}{128} = \\frac{99}{128}$. The choice $\\frac{33}{64}$ forgets the five-game paths, and $\\frac{459}{512}$ treats every game as a home game.',
  },
]

const worksheet = [
  {
    q: 'A spinner has $8$ equal sections numbered $1$ through $8$. What is the probability that one spin lands on an odd number or a number greater than $6$?',
    answer: '$\\frac{5}{8}$',
    solution: 'Odd: $1, 3, 5, 7$, four numbers. Greater than $6$: $7, 8$, two numbers. The number $7$ is in both lists, so the favorable count is $4 + 2 - 1 = 5$, and the probability is $\\frac{5}{8}$.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that the sum is $4$ or the sum is $11$?',
    answer: '$\\frac{5}{36}$',
    solution: 'The two sums cannot both happen, so add. Sum $4$: $(1,3), (2,2), (3,1)$, three rolls. Sum $11$: $(5,6), (6,5)$, two rolls. Together $\\frac{3 + 2}{36} = \\frac{5}{36}$.',
  },
  {
    q: 'A standard die is rolled twice. What is the probability that at least one of the rolls is a multiple of $3$?',
    answer: '$\\frac{5}{9}$',
    solution: 'The complement is that neither roll is a $3$ or a $6$: each roll avoids them in $4$ of $6$ ways, so both do in $\\frac{16}{36} = \\frac{4}{9}$ of the rolls. Then $P(\\text{at least one}) = 1 - \\frac{4}{9} = \\frac{5}{9}$.',
  },
  {
    q: 'A fair coin is flipped $5$ times. What is the probability of getting exactly $4$ heads?',
    answer: '$\\frac{5}{32}$',
    solution: 'One order has probability $\\frac{1}{32}$, and the single tail can be any of the $5$ flips, so there are $5$ orders: $5 \\times \\frac{1}{32} = \\frac{5}{32}$.',
  },
  {
    q: 'A bag holds $6$ red and $2$ blue marbles. Two marbles are drawn at random without replacement. What is the probability that both are blue?',
    answer: '$\\frac{1}{28}$',
    solution: 'The first marble is blue with probability $\\frac{2}{8}$, and then one blue marble remains among $7$: $\\frac{2}{8} \\times \\frac{1}{7} = \\frac{2}{56} = \\frac{1}{28}$.',
  },
  {
    q: 'A spinner has $3$ equal sections labeled A, B, and C. It is spun $3$ times. What is the probability that the three spins show three different letters?',
    answer: '$\\frac{2}{9}$',
    solution: 'The first spin can be anything. The second must avoid the first letter, probability $\\frac{2}{3}$, and the third must avoid both letters seen, probability $\\frac{1}{3}$. Multiply: $1 \\times \\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. Counting agrees: $3! = 6$ favorable sequences out of $27$.',
  },
  {
    q: 'An integer is chosen at random from $1$ through $100$. What is the probability that it is divisible by $6$ or by $10$?',
    answer: '$\\frac{23}{100}$',
    solution: 'There are $16$ multiples of $6$ (up through $96$) and $10$ multiples of $10$. The overlap is the multiples of $30$: $30, 60, 90$, three numbers. Favorable: $16 + 10 - 3 = 23$, so the probability is $\\frac{23}{100}$.',
  },
  {
    q: 'A bag holds $4$ red and $2$ blue marbles. Two marbles are drawn at random one at a time without replacement. What is the probability that the second marble drawn is blue?',
    answer: '$\\frac{1}{3}$',
    solution: 'Two disjoint paths end with a blue second marble. Red then blue: $\\frac{4}{6} \\times \\frac{2}{5} = \\frac{8}{30}$. Blue then blue: $\\frac{2}{6} \\times \\frac{1}{5} = \\frac{2}{30}$. Add: $\\frac{10}{30} = \\frac{1}{3}$ — the same as the chance that the first marble is blue, which makes sense: before anyone looks, every position in the draw order is equally likely to hold any particular marble.',
  },
  {
    q: 'Two teams play a series that ends as soon as one team has won $2$ games. The Jets win each game with probability $\\frac{3}{4}$, independently. What is the probability that the series lasts $3$ games?',
    answer: '$\\frac{3}{8}$',
    solution: 'The series reaches a third game exactly when the first two games are split. Jets then opponent: $\\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}$; opponent then Jets: the same. Add the two paths: $\\frac{6}{16} = \\frac{3}{8}$.',
  },
  {
    q: 'Star makes each free throw with probability $\\frac{3}{4}$, independently. She shoots until she misses, then stops. What is the probability that she makes at least $2$ baskets but fewer than $5$?',
    answer: '$\\frac{333}{1024}$',
    solution: 'Organize by the number of baskets, which must be $2$, $3$, or $4$; each path is that many makes followed by one miss. Exactly $2$: $\\left(\\frac{3}{4}\\right)^2 \\times \\frac{1}{4} = \\frac{9}{64}$. Exactly $3$: $\\left(\\frac{3}{4}\\right)^3 \\times \\frac{1}{4} = \\frac{27}{256}$. Exactly $4$: $\\left(\\frac{3}{4}\\right)^4 \\times \\frac{1}{4} = \\frac{81}{1024}$. Add over a common denominator: $\\frac{144 + 108 + 81}{1024} = \\frac{333}{1024}$.',
  },
]

export default {
  id: 'intro-counting-ch08',
  book: 'intro-counting',
  number: 8,
  title: 'Basic Probability Techniques',
  intro:
    'You can already find a probability by counting outcomes. This chapter gives you four shortcuts that skip most of the counting: add the probabilities of events that cannot overlap, subtract from $1$ instead of counting a monster event, multiply along a chain of independent results, and adjust the chain when each draw changes what is left. Then you will put all four to work on games that unfold in stages — a shooter who keeps going until she misses, a series that ends when one team has won enough — where the winning paths are listed, multiplied along, and added up.',
  sections: [s82, s83, s84, s85, s86],
  challenge,
  worksheet,
}
