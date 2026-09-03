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
      q: 'A pouch holds $15$ game tokens: $6$ are square, $4$ are triangular, and $5$ are round. One token is drawn at random. What is the probability that it is square or round?',
      choices: ['$\\frac{11}{15}$', '$\\frac{2}{5}$', '$\\frac{4}{15}$', '$\\frac{3}{5}$'],
      answer: 0,
      solution: 'A token cannot be both square and round, so the events are disjoint and the probabilities add: $\\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$. The choice $\\frac{2}{5}$ is square alone, $\\frac{4}{15}$ is triangular, and $\\frac{3}{5}$ is triangular or round.',
    },
    {
      q: 'Twelve cards numbered $1$ through $12$ are shuffled, and one is drawn at random. What is the probability that the number drawn is a factor of $12$ or greater than $10$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{7}{12}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution: 'The factors of $12$ on the cards are $1, 2, 3, 4, 6, 12$ — six cards — and the numbers greater than $10$ are $11$ and $12$. The card $12$ is in both lists, so $6 + 2$ counts it twice. Subtract it once: $6 + 2 - 1 = 7$ favorable cards, giving $\\frac{7}{12}$. The choice $\\frac{2}{3}$ forgets the overlap, $\\frac{1}{2}$ is the factors alone, and $\\frac{1}{6}$ is the greater-than-$10$ cards alone.',
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
      q: 'Two standard dice are rolled. What is the probability that the sum of the two numbers is a perfect square?',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{9}$', '$\\frac{7}{36}$', '$\\frac{2}{9}$'],
      answer: 2,
      solution: 'The possible sums run from $2$ to $12$, so the only perfect-square sums are $4$ and $9$, and no roll has both — disjoint cases. Sum $4$: $(1,3), (2,2), (3,1)$, three rolls. Sum $9$: $(3,6), (4,5), (5,4), (6,3)$, four rolls. Together $\\frac{3 + 4}{36} = \\frac{7}{36}$. The choice $\\frac{1}{12}$ is sum $4$ alone, $\\frac{1}{9}$ is sum $9$ alone, and $\\frac{2}{9}$ counts $(2,2)$ in two orders.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that at least one die shows a $3$ or the sum is $4$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{7}{18}$', '$\\frac{11}{36}$', '$\\frac{5}{18}$'],
      answer: 0,
      solution: 'At least one $3$ happens in $11$ rolls ($6$ with a red $3$, $6$ with a blue $3$, minus the double $(3,3)$). The sum is $4$ in $3$ rolls: $(1,3), (2,2), (3,1)$. Two of those, $(1,3)$ and $(3,1)$, already contain a $3$, so they were counted in the first group. Favorable rolls: $11 + 3 - 2 = 12$, and $\\frac{12}{36} = \\frac{1}{3}$. The choice $\\frac{7}{18}$ adds $11 + 3$ without removing the overlap.',
    },
    {
      q: 'On any school morning, Tam’s bus is late with probability $\\frac{1}{4}$, his friend Uri’s bus is late with probability $\\frac{1}{3}$, and both buses are late with probability $\\frac{1}{10}$. On a random school morning, what is the probability that at least one of the two buses is late?',
      choices: ['$\\frac{7}{12}$', '$\\frac{23}{60}$', '$\\frac{1}{2}$', '$\\frac{29}{60}$'],
      answer: 3,
      solution: 'The events overlap — some mornings both buses are late — so use $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B) = \\frac{1}{4} + \\frac{1}{3} - \\frac{1}{10}$. Over sixtieths: $\\frac{15 + 20 - 6}{60} = \\frac{29}{60}$. The choice $\\frac{7}{12}$ adds and never subtracts, $\\frac{23}{60}$ subtracts the overlap twice, and $\\frac{1}{2}$ pretends the buses are independent and uses $\\frac{1}{4} \\times \\frac{1}{3}$ as the overlap instead of the given $\\frac{1}{10}$.',
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
        problem: 'A carnival wheel lands on a prize space with probability $\\frac{1}{5}$ on each spin, independently. Mel spins it $3$ times. What is the probability that she wins at least one prize?',
        steps: [
          'The complement of "at least one prize" is "no prizes at all": every spin misses.',
          'Each spin misses with probability $\\frac{4}{5}$, and the spins are independent, so $P(\\text{all miss}) = \\left(\\frac{4}{5}\\right)^3 = \\frac{64}{125}$.',
          'Subtract: $1 - \\frac{64}{125} = \\frac{61}{125}$.',
        ],
        answer: 'The probability is $\\frac{61}{125}$.',
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
      q: 'A spinner has $9$ equal sections numbered $1$ through $9$. What is the probability that one spin lands on a number that is not a factor of $12$?',
      choices: ['$\\frac{5}{9}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution: 'The factors of $12$ on the spinner are $1, 2, 3, 4, 6$ — five of the nine numbers — so $P(\\text{factor}) = \\frac{5}{9}$ and $P(\\text{not a factor}) = 1 - \\frac{5}{9} = \\frac{4}{9}$. The choice $\\frac{5}{9}$ is the complement itself, $\\frac{2}{3}$ forgets that $1$ and $6$ divide $12$, and $\\frac{1}{3}$ counts $12$ itself as a sixth factor even though it is not on the spinner.',
    },
    {
      q: 'A spinner has $6$ equal sections: $1$ gold and $5$ gray. It is spun twice. What is the probability that at least one of the two spins lands on gold?',
      choices: ['$\\frac{11}{36}$', '$\\frac{25}{36}$', '$\\frac{1}{3}$', '$\\frac{1}{36}$'],
      answer: 0,
      solution: 'The complement is that both spins land on gray: $\\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}$. Then $P(\\text{at least one gold}) = 1 - \\frac{25}{36} = \\frac{11}{36}$. The choice $\\frac{25}{36}$ is the complement itself, $\\frac{1}{3}$ adds $\\frac{1}{6} + \\frac{1}{6}$ as if the events could not overlap, and $\\frac{1}{36}$ is both spins landing on gold.',
    },
    {
      q: 'One of the $26$ letters of the alphabet is chosen at random. What is the probability that it is not a vowel? (The vowels are A, E, I, O, and U.)',
      choices: ['$\\frac{5}{26}$', '$\\frac{10}{13}$', '$\\frac{21}{26}$', '$\\frac{4}{13}$'],
      answer: 2,
      solution: 'Five letters are vowels, so $P(\\text{vowel}) = \\frac{5}{26}$ and $P(\\text{not a vowel}) = 1 - \\frac{5}{26} = \\frac{21}{26}$. The choice $\\frac{10}{13} = \\frac{20}{26}$ is an off-by-one slip that removes six letters instead of five.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the product of the two numbers is not a multiple of $5$?',
      choices: ['$\\frac{11}{36}$', '$\\frac{5}{6}$', '$\\frac{2}{3}$', '$\\frac{25}{36}$'],
      answer: 3,
      solution: 'A product of numbers from $1$ to $6$ is a multiple of $5$ exactly when some die shows a $5$, so the complement is "at least one $5$". Easier still: the product avoids multiples of $5$ exactly when BOTH dice avoid $5$, which happens in $5 \\times 5 = 25$ of the $36$ rolls, so the probability is $\\frac{25}{36}$. The choice $\\frac{11}{36}$ is the complement, $\\frac{5}{6}$ makes only one die avoid the $5$, and $\\frac{2}{3}$ counts $12$ rolls containing a $5$ by adding $6 + 6$ without removing the double $(5,5)$.',
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
      q: 'Kim’s bike ride to school passes $3$ traffic lights, and each light is green when she arrives at it with probability $\\frac{2}{3}$, independently of the others. What is the probability that she has to stop at least once on the ride?',
      choices: ['$\\frac{8}{27}$', '$\\frac{26}{27}$', '$\\frac{19}{27}$', '$\\frac{1}{3}$'],
      answer: 2,
      solution: 'Kim stops at least once unless every light is green. All three are green with probability $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$, so $P(\\text{at least one stop}) = 1 - \\frac{8}{27} = \\frac{19}{27}$. The choice $\\frac{8}{27}$ is the all-green ride, $\\frac{26}{27}$ subtracts $\\left(\\frac{1}{3}\\right)^3$ — the complement of the wrong event — and $\\frac{1}{3}$ is the chance that one particular light is red.',
    },
    {
      q: 'Three standard dice — red, blue, and green — are rolled. What is the probability that at least two of the dice show the same number?',
      choices: ['$\\frac{5}{9}$', '$\\frac{1}{36}$', '$\\frac{5}{12}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution: 'The complement is that all three numbers are different: $6 \\times 5 \\times 4 = 120$ of the $216$ rolls. So $P(\\text{some match}) = 1 - \\frac{120}{216} = \\frac{96}{216} = \\frac{4}{9}$. The choice $\\frac{5}{9}$ is the complement, and $\\frac{5}{12}$ counts only rolls with exactly two matching, leaving out the six triples.',
    },
    {
      q: 'A three-digit positive integer is chosen at random from $100$ through $999$. What is the probability that some two neighboring digits of the number are equal — the first two digits match, or the last two do?',
      choices: ['$\\frac{19}{100}$', '$\\frac{81}{100}$', '$\\frac{7}{25}$', '$\\frac{1}{10}$'],
      answer: 0,
      solution: 'Count the complement: neighboring digits always differ. The hundreds digit has $9$ choices (not $0$), the tens digit must differ from the hundreds ($9$ choices, since $0$ is now allowed), and the units must differ from the tens ($9$ choices): $9 \\times 9 \\times 9 = 729$ of the $900$ numbers. So the probability is $1 - \\frac{729}{900} = \\frac{171}{900} = \\frac{19}{100}$. The choice $\\frac{81}{100}$ is the complement, $\\frac{7}{25}$ also counts numbers like $101$ whose equal digits are not neighbors, and $\\frac{1}{10}$ lets the complement count start with $0$.',
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
      q: 'A standard die is rolled and a spinner with $4$ equal sections labeled A, B, C, D is spun. What is the probability that the die shows a number less than $3$ and the spinner lands on A?',
      choices: ['$\\frac{7}{12}$', '$\\frac{1}{24}$', '$\\frac{1}{12}$', '$\\frac{1}{3}$'],
      answer: 2,
      solution: 'The die and the spinner are independent. $P(\\text{less than } 3) = \\frac{2}{6} = \\frac{1}{3}$ and $P(\\text{A}) = \\frac{1}{4}$, so the probability of both is $\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$. The choice $\\frac{7}{12}$ adds instead of multiplying, $\\frac{1}{24}$ counts only the roll of $1$, and $\\frac{1}{3}$ forgets the spinner entirely.',
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
      q: 'A fair four-sided die with faces numbered $1$ through $4$ is rolled $3$ times. What is the probability that exactly two of the rolls show a $4$?',
      choices: ['$\\frac{3}{64}$', '$\\frac{9}{64}$', '$\\frac{1}{16}$', '$\\frac{27}{64}$'],
      answer: 1,
      solution: 'One order, such as $4$, $4$, then not $4$, has probability $\\frac{1}{4} \\times \\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{64}$. The roll that misses can be the first, second, or third, so there are $3$ orders: $3 \\times \\frac{3}{64} = \\frac{9}{64}$. The choice $\\frac{3}{64}$ forgets to count the orders, $\\frac{1}{16}$ drops the $\\frac{3}{4}$ factor for the miss, and $\\frac{27}{64}$ answers "exactly two rolls that are not $4$".',
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
      q: 'A standard die is rolled $3$ times. What is the probability that the three numbers, in the order they are rolled, are strictly increasing?',
      choices: ['$\\frac{5}{9}$', '$\\frac{5}{27}$', '$\\frac{5}{54}$', '$\\frac{1}{216}$'],
      answer: 2,
      solution: 'First the three rolls must all be different, which happens with probability $\\frac{6 \\times 5 \\times 4}{216} = \\frac{120}{216} = \\frac{5}{9}$. Any three different numbers arrive in one of $3! = 6$ equally likely orders, and exactly one of those orders is increasing, so multiply by $\\frac{1}{6}$: $\\frac{5}{9} \\times \\frac{1}{6} = \\frac{5}{54}$. The choice $\\frac{5}{9}$ stops at "all different", $\\frac{5}{27}$ divides by $3$ instead of $6$, and $\\frac{1}{216}$ is the probability of one particular increasing run such as $1, 2, 3$.',
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
      q: 'A shelf holds $8$ library books: $3$ novels and $5$ comics. Rio grabs two books at random, one after the other. What is the probability that the first book is a comic and the second is a novel?',
      choices: ['$\\frac{15}{64}$', '$\\frac{15}{28}$', '$\\frac{15}{56}$', '$\\frac{5}{8}$'],
      answer: 2,
      solution: 'The first book is a comic with probability $\\frac{5}{8}$. Then $7$ books remain, all $3$ novels still among them, so the second is a novel with probability $\\frac{3}{7}$. Multiply: $\\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$. The choice $\\frac{15}{64}$ uses $8$ for the second denominator as if the first book went back, $\\frac{15}{28}$ counts comic-novel in either order, and $\\frac{5}{8}$ stops after one book.',
    },
    {
      q: 'A key ring holds $5$ brass keys and $3$ iron keys. Two keys are removed at random without replacement. What is the probability that one is brass and one is iron?',
      choices: ['$\\frac{15}{28}$', '$\\frac{15}{56}$', '$\\frac{13}{28}$', '$\\frac{15}{64}$'],
      answer: 0,
      solution: 'Brass then iron: $\\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$. Iron then brass: $\\frac{3}{8} \\times \\frac{5}{7} = \\frac{15}{56}$. The two orders cannot both happen, so add: $\\frac{30}{56} = \\frac{15}{28}$. The choice $\\frac{15}{56}$ counts just one order, $\\frac{13}{28}$ is the complement (two keys of the same metal), and $\\frac{15}{64}$ puts the first key back before the second is taken.',
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
      q: 'A tin holds $10$ buttons: $6$ large and $4$ small. Two buttons are drawn at random without replacement. What is the probability that the two buttons are the same size?',
      choices: ['$\\frac{8}{15}$', '$\\frac{1}{3}$', '$\\frac{7}{15}$', '$\\frac{13}{25}$'],
      answer: 2,
      solution: 'Split into two disjoint cases. Both large: $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90}$. Both small: $\\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90}$. Add: $\\frac{42}{90} = \\frac{7}{15}$. The choice $\\frac{8}{15}$ is the complement (one of each size), $\\frac{1}{3}$ is the both-large case alone, and $\\frac{13}{25}$ puts the first button back before the second draw.',
    },
    {
      q: 'Bag A holds $2$ red and $2$ blue marbles, and Bag B holds $3$ red and $1$ blue marble. One marble is moved at random from Bag A into Bag B, and then one marble is drawn at random from Bag B. What is the probability that the drawn marble is red?',
      choices: ['$\\frac{7}{10}$', '$\\frac{3}{4}$', '$\\frac{4}{5}$', '$\\frac{3}{5}$'],
      answer: 0,
      solution: 'Branch on the moved marble, which is red or blue with probability $\\frac{1}{2}$ each. If it is red, Bag B becomes $4$ red and $1$ blue, and the draw is red with probability $\\frac{4}{5}$; if it is blue, Bag B becomes $3$ red and $2$ blue, and the draw is red with probability $\\frac{3}{5}$. Add the two disjoint paths: $\\frac{1}{2} \\times \\frac{4}{5} + \\frac{1}{2} \\times \\frac{3}{5} = \\frac{7}{10}$. The choice $\\frac{3}{4}$ ignores the transfer and uses Bag B as it started, $\\frac{4}{5}$ assumes the moved marble was red, and $\\frac{3}{5}$ assumes it was blue.',
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
      q: 'Lena flips a fair coin to pick a spinner. If the coin shows heads she spins Spinner P, which has $3$ equal sections, one marked with a star; if it shows tails she spins Spinner Q, which has $4$ equal sections, one marked with a star. What is the probability that her spin lands on a star?',
      choices: ['$\\frac{7}{12}$', '$\\frac{7}{24}$', '$\\frac{1}{12}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution: 'Two disjoint paths lead to a star. Heads then a star on P: $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$. Tails then a star on Q: $\\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$. Add: $\\frac{4}{24} + \\frac{3}{24} = \\frac{7}{24}$. The choice $\\frac{7}{12}$ adds $\\frac{1}{3} + \\frac{1}{4}$ and forgets the coin, $\\frac{1}{12}$ multiplies $\\frac{1}{3} \\times \\frac{1}{4}$, and $\\frac{1}{6}$ is the heads path alone.',
    },
    {
      q: 'Vera plays a carnival game in stages. She rolls a standard die: a $5$ or $6$ wins a prize at once, a $1$ loses at once, and any other roll sends her to a bonus round, where she flips a fair coin and wins a prize exactly when it shows heads. What is the probability that Vera wins a prize?',
      choices: ['$\\frac{1}{3}$', '$\\frac{5}{12}$', '$\\frac{2}{3}$', '$\\frac{7}{12}$'],
      answer: 3,
      solution: 'Two disjoint winning paths. Instant win: $5$ or $6$, probability $\\frac{2}{6} = \\frac{1}{3}$. Bonus-round win: a roll of $2$, $3$, or $4$ (probability $\\frac{3}{6} = \\frac{1}{2}$) followed by heads, giving $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. Add: $\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$. The choice $\\frac{1}{3}$ counts only the instant win, $\\frac{5}{12}$ lets only the $6$ win at once, and $\\frac{2}{3}$ sends the losing roll of $1$ to the bonus round too.',
    },
    {
      q: 'Star makes each free throw with probability $\\frac{2}{3}$, independently. She shoots until she misses, then stops. What is the probability that she makes at least $1$ basket but no more than $3$ baskets?',
      choices: ['$\\frac{26}{81}$', '$\\frac{19}{81}$', '$\\frac{38}{81}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'Organize by the number of baskets. Exactly $1$: make, miss, probability $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. Exactly $2$: $\\left(\\frac{2}{3}\\right)^2 \\times \\frac{1}{3} = \\frac{4}{27}$. Exactly $3$: $\\left(\\frac{2}{3}\\right)^3 \\times \\frac{1}{3} = \\frac{8}{81}$. Add the three disjoint paths: $\\frac{18}{81} + \\frac{12}{81} + \\frac{8}{81} = \\frac{38}{81}$. The choice $\\frac{2}{3}$ is the probability of at least one basket, with no upper limit.',
    },
    {
      q: 'Ana and Ben play a game in rounds. In each round, both of them flip a fair coin at the same time: Ana wins the game if her coin shows heads and Ben’s shows tails, Ben wins if his shows heads and Ana’s shows tails, and otherwise the game goes to another round. What is the probability that Ana wins during the first two rounds?',
      choices: ['$\\frac{3}{8}$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{7}{16}$'],
      answer: 0,
      solution: 'In any round, Ana wins with probability $\\frac{1}{4}$, Ben wins with probability $\\frac{1}{4}$, and the game continues with probability $\\frac{1}{2}$. Ana wins in round $1$ with probability $\\frac{1}{4}$, and wins in round $2$ by the path continue-then-win: $\\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$. Add the disjoint paths: $\\frac{1}{4} + \\frac{1}{8} = \\frac{3}{8}$. The choice $\\frac{1}{4}$ counts only round $1$, $\\frac{7}{16}$ multiplies by the $\\frac{3}{4}$ chance that Ana did not win round $1$ — but the game must reach round $2$, which needs nobody to win — and $\\frac{1}{2}$ is Ana’s chance of winning eventually, with no two-round limit.',
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
      q: 'Ria and Sol play a table tennis game one point at a time, and Ria wins each point with probability $\\frac{3}{5}$, independently. Play continues until one player is ahead by two points, and that player wins the game. What is the probability that Ria wins?',
      choices: ['$\\frac{9}{25}$', '$\\frac{3}{5}$', '$\\frac{9}{13}$', '$\\frac{21}{25}$'],
      answer: 2,
      solution: 'Group the points into pairs. A pair goes Ria-Ria with probability $\\frac{9}{25}$, ending the game in Ria’s favor; Sol-Sol with probability $\\frac{4}{25}$, ending it in Sol’s; and splits with probability $\\frac{12}{25}$, returning the score to even, where the game looks exactly as it did at the start. So the game is decided by the first unsplit pair, and given that a pair decides it, Ria’s share is $\\frac{9/25}{9/25 + 4/25} = \\frac{9}{13}$. The choice $\\frac{9}{25}$ is winning the first two points, which ignores that the game can restart after a split; $\\frac{3}{5}$ is a single point; and $\\frac{21}{25}$ counts a split pair as a win for Ria.',
    },
  ],
}

const challenge = [
  {
    q: 'A three-digit positive integer is chosen at random from $100$ through $999$. What is the probability that its hundreds digit is odd or its units digit is $5$?',
    choices: ['$\\frac{59}{90}$', '$\\frac{3}{5}$', '$\\frac{5}{9}$', '$\\frac{49}{90}$'],
    answer: 1,
    solution: 'Of the $900$ numbers, those with an odd hundreds digit ($1, 3, 5, 7, 9$) number $5 \\times 100 = 500$, and those with units digit $5$ number $90$. The overlap — odd hundreds digit and units digit $5$ — has $5 \\times 10 = 50$ numbers, so the favorable count is $500 + 90 - 50 = 540$, and $\\frac{540}{900} = \\frac{3}{5}$. The choice $\\frac{59}{90}$ never subtracts the overlap, $\\frac{5}{9}$ is the odd-hundreds group alone, and $\\frac{49}{90}$ subtracts the overlap twice.',
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
    q: 'A pencil case holds $9$ pens, and exactly $2$ of them are out of ink. Noa grabs $3$ pens at random for her group. What is the probability that at least one of the three is out of ink?',
    choices: ['$\\frac{5}{12}$', '$\\frac{2}{3}$', '$\\frac{7}{12}$', '$\\frac{1}{2}$'],
    answer: 2,
    solution: 'The complement is that all three pens work: $\\frac{7}{9} \\times \\frac{6}{8} \\times \\frac{5}{7} = \\frac{210}{504} = \\frac{5}{12}$. So $P(\\text{at least one dead pen}) = 1 - \\frac{5}{12} = \\frac{7}{12}$. The choice $\\frac{5}{12}$ is the complement itself, $\\frac{2}{3}$ adds the single-pen probability $\\frac{2}{9}$ three times, and $\\frac{1}{2}$ counts only the draws with exactly one dead pen, leaving out those with both.',
  },
  {
    q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the sum is a multiple of $3$ or both dice show odd numbers?',
    choices: ['$\\frac{7}{12}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$'],
    answer: 1,
    solution: 'The sum is a multiple of $3$ in $12$ rolls (sums $3, 6, 9, 12$ give $2 + 5 + 4 + 1$ rolls), and both dice are odd in $3 \\times 3 = 9$ rolls. The overlap needs both odd AND a sum divisible by $3$; two odd numbers have an even sum, so the sum must be $6$: $(1,5), (3,3), (5,1)$, three rolls. Favorable: $12 + 9 - 3 = 18$, so $\\frac{18}{36} = \\frac{1}{2}$. The choice $\\frac{7}{12}$ never subtracts the overlap, $\\frac{1}{3}$ is the multiple-of-$3$ rolls alone, and $\\frac{1}{4}$ is the both-odd rolls alone.',
  },
  {
    q: 'A fair coin is flipped $5$ times. What is the probability that the first two flips match or the last two flips match?',
    choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{5}{8}$', '$\\frac{3}{4}$'],
    answer: 3,
    solution: 'The first two flips match with probability $\\frac{1}{2}$ (the second must copy the first), and so do the last two. The two events involve different coins, so they are independent and both happen with probability $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. Then $P(\\text{either}) = \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{4} = \\frac{3}{4}$. The middle flip never matters. The choice $\\frac{1}{4}$ is "both", and $\\frac{1}{2}$ is one of the events alone.',
  },
  {
    q: 'A spinner has $4$ equal sections colored red, blue, green, and yellow, and it is spun $4$ times. What is the probability that at least one spin lands on red and at least one spin lands on blue?',
    choices: ['$\\frac{55}{128}$', '$\\frac{47}{128}$', '$\\frac{175}{256}$', '$\\frac{81}{256}$'],
    answer: 0,
    solution: 'Count the complement: no red or no blue. $P(\\text{no red}) = \\left(\\frac{3}{4}\\right)^4 = \\frac{81}{256}$, and the same for no blue; both at once means every spin is green or yellow, probability $\\left(\\frac{1}{2}\\right)^4 = \\frac{16}{256}$. So $P(\\text{no red or no blue}) = \\frac{81 + 81 - 16}{256} = \\frac{146}{256}$, and the answer is $1 - \\frac{146}{256} = \\frac{110}{256} = \\frac{55}{128}$. The choice $\\frac{47}{128}$ subtracts both complements but forgets to add their overlap back, $\\frac{175}{256}$ handles only the red condition, and $\\frac{81}{256}$ is the probability of no red at all — the wrong event.',
  },
  {
    q: 'Riko and Sana play a badminton match that ends as soon as one of them has won $3$ games. Riko wins each game with probability $\\frac{2}{5}$, independently of the other games. What is the probability that the match lasts the full $5$ games?',
    choices: ['$\\frac{36}{625}$', '$\\frac{3}{8}$', '$\\frac{216}{625}$', '$\\frac{108}{625}$'],
    answer: 2,
    solution: 'The match reaches a fifth game exactly when the first four games are split $2$–$2$. Each sequence with two Riko wins and two Sana wins has probability $\\left(\\frac{2}{5}\\right)^2 \\left(\\frac{3}{5}\\right)^2 = \\frac{36}{625}$, and there are $\\binom{4}{2} = 6$ such sequences, so the probability is $6 \\times \\frac{36}{625} = \\frac{216}{625}$. The choice $\\frac{36}{625}$ is a single sequence, $\\frac{108}{625}$ counts only $3$ of the $6$ splits, and $\\frac{3}{8}$ is the answer for evenly matched players, ignoring the given odds.',
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
    q: 'Sixteen cards numbered $1$ through $16$ are shuffled, and one is drawn at random. What is the probability that the number drawn is a multiple of $3$ or is at least $13$?',
    answer: '$\\frac{1}{2}$',
    solution: 'Multiples of $3$: $3, 6, 9, 12, 15$, five cards. At least $13$: $13, 14, 15, 16$, four cards. The card $15$ is in both lists, so the favorable count is $5 + 4 - 1 = 8$, and the probability is $\\frac{8}{16} = \\frac{1}{2}$.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that the product of the two numbers is $20$ or $30$?',
    answer: '$\\frac{1}{9}$',
    solution: 'The two products cannot both happen, so add. Product $20$: $(4,5), (5,4)$, two rolls. Product $30$: $(5,6), (6,5)$, two rolls. Together $\\frac{2 + 2}{36} = \\frac{4}{36} = \\frac{1}{9}$.',
  },
  {
    q: 'A bag holds $9$ tokens numbered $1$ through $9$. A token is drawn at random, put back, and a token is drawn again. What is the probability that at least one of the two draws shows a multiple of $4$?',
    answer: '$\\frac{32}{81}$',
    solution: 'The multiples of $4$ in the bag are $4$ and $8$, so each draw misses them in $7$ of $9$ ways. Because the token goes back, the draws are independent, and both miss with probability $\\frac{7}{9} \\times \\frac{7}{9} = \\frac{49}{81}$. Then $P(\\text{at least one}) = 1 - \\frac{49}{81} = \\frac{32}{81}$.',
  },
  {
    q: 'A fair coin is flipped $6$ times. What is the probability of getting exactly $2$ heads?',
    answer: '$\\frac{15}{64}$',
    solution: 'One order has probability $\\left(\\frac{1}{2}\\right)^6 = \\frac{1}{64}$, and the two heads can sit in any $\\binom{6}{2} = 15$ pairs of positions: $15 \\times \\frac{1}{64} = \\frac{15}{64}$.',
  },
  {
    q: 'A pencil case holds $7$ blue pens and $2$ red pens. Two pens are taken out at random without replacement. What is the probability that both are red?',
    answer: '$\\frac{1}{36}$',
    solution: 'The first pen is red with probability $\\frac{2}{9}$, and then one red pen remains among $8$: $\\frac{2}{9} \\times \\frac{1}{8} = \\frac{2}{72} = \\frac{1}{36}$.',
  },
  {
    q: 'A spinner has $3$ equal sections labeled A, B, and C. It is spun $3$ times. What is the probability that the three spins show three different letters?',
    answer: '$\\frac{2}{9}$',
    solution: 'The first spin can be anything. The second must avoid the first letter, probability $\\frac{2}{3}$, and the third must avoid both letters seen, probability $\\frac{1}{3}$. Multiply: $1 \\times \\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. Counting agrees: $3! = 6$ favorable sequences out of $27$.',
  },
  {
    q: 'An integer is chosen at random from $1$ through $90$. What is the probability that it is divisible by $4$ or by $15$?',
    answer: '$\\frac{3}{10}$',
    solution: 'There are $22$ multiples of $4$ (up through $88$) and $6$ multiples of $15$. The overlap is the multiples of $\\text{lcm}(4, 15) = 60$: only $60$ itself. Favorable: $22 + 6 - 1 = 27$, so the probability is $\\frac{27}{90} = \\frac{3}{10}$.',
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
