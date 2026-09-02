// Counting & Probability — Chapter 11: Expected Value
// All problems, explanations, and examples are original MathQuest content.

// Spinner cut into sectors of 180°, 120°, and 60°.
const spinnerHTS = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [0.5, -0.866] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0, 0.55], text: '4' },
    { t: 'label', p: [-0.4, -0.5], text: '9' },
    { t: 'label', p: [0.6, -0.3], text: '12' },
  ],
}

const s112 = {
  id: '11.2',
  title: 'Definition of Expected Value',
  learn: {
    concepts: [
      {
        heading: 'A weighted average of what could happen',
        body: 'The expected value of a random quantity is the sum of every possible value times the probability of that value: $E = v_1 p_1 + v_2 p_2 + \\cdots + v_n p_n$. It is an average in which likelier outcomes count for more. The recipe is always the same: list every outcome, attach its probability, multiply, add. The probabilities must add up to $1$ — if they do not, you have missed an outcome.',
      },
      {
        heading: 'Equally likely means a plain average',
        body: 'When the $n$ outcomes are all equally likely, every weight is $\\frac{1}{n}$ and the expected value is just the ordinary average of the values. A standard die has expected value $\\frac{1+2+3+4+5+6}{6} = \\frac{7}{2}$. Notice that $\\frac{7}{2}$ is not on any face: an expected value does not have to be a possible outcome.',
      },
      {
        heading: 'Unequal probabilities: weight by the chance',
        body: 'A spinner whose sectors have different sizes is not equally likely, so averaging the numbers on the sectors is wrong. Each sector’s number must be multiplied by the fraction of the circle it occupies. A sector taking $\\frac{1}{2}$ of the wheel pulls the average toward its number twice as hard as a sector taking $\\frac{1}{4}$. The trap is treating a list of labels as if each label were one outcome.',
      },
      {
        heading: 'What the number means',
        body: 'The expected value is the long-run average per play: over many, many repetitions, the total divided by the number of plays settles near it. For a bet, list each net result (a loss is a negative value) with its probability; the expected value tells you the average gain per play. A positive expected value is good for the player, a negative one is good for the house, and zero means the game is fair.',
      },
    ],
    examples: [
      {
        problem: 'A six-sided die has its faces marked $1, 1, 2, 3, 5, 8$. What is the expected value of one roll?',
        steps: [
          'The six faces are equally likely, each with probability $\\frac{1}{6}$.',
          'The two faces marked $1$ are separate outcomes, so both are added: the sum of the faces is $1 + 1 + 2 + 3 + 5 + 8 = 20$.',
          'The expected value is $\\frac{20}{6} = \\frac{10}{3}$, even though no face shows $\\frac{10}{3}$.',
        ],
        answer: 'The expected value is $\\frac{10}{3}$.',
      },
      {
        problem: 'A spinner is divided into four sectors: half of the wheel is marked $2$, a quarter is marked $6$, and two eighths are marked $10$ and $20$. What is the expected value of one spin?',
        steps: [
          'The probabilities are the fractions of the wheel: $\\frac{1}{2}$, $\\frac{1}{4}$, $\\frac{1}{8}$, $\\frac{1}{8}$, which add to $1$.',
          'Multiply each number by its probability: $2 \\cdot \\frac{1}{2} = 1$, $6 \\cdot \\frac{1}{4} = \\frac{3}{2}$, $10 \\cdot \\frac{1}{8} = \\frac{5}{4}$, $20 \\cdot \\frac{1}{8} = \\frac{5}{2}$.',
          'Add: $1 + \\frac{3}{2} + \\frac{5}{4} + \\frac{5}{2} = \\frac{25}{4}$.',
          'The plain average of the four labels would be $\\frac{38}{4} = \\frac{19}{2}$, much too big, because the big numbers sit on small sectors.',
        ],
        answer: 'The expected value is $\\frac{25}{4}$.',
      },
      {
        problem: 'Ten cards are numbered $1$ through $10$. You draw one at random. If the number is prime you win $\\$5$; otherwise you lose $\\$2$. What is the expected value of the game for you?',
        steps: [
          'The primes from $1$ to $10$ are $2, 3, 5, 7$, so you win with probability $\\frac{4}{10}$ and lose with probability $\\frac{6}{10}$.',
          'Write the loss as a negative value: the outcomes are $+5$ with probability $\\frac{4}{10}$ and $-2$ with probability $\\frac{6}{10}$.',
          'The expected value is $5 \\cdot \\frac{4}{10} - 2 \\cdot \\frac{6}{10} = 2 - 1.2 = 0.8$.',
          'On average you gain $\\$0.80$ per play, so over $100$ plays you would expect to be about $\\$80$ ahead.',
        ],
        answer: 'The expected value is $\\$0.80$ per play.',
      },
    ],
  },
  problems: [
    {
      q: 'A fair eight-sided die has faces numbered $1$ through $8$. What is the expected value of one roll?',
      choices: ['$4$', '$36$', '$\\frac{9}{2}$', '$5$'],
      answer: 2,
      solution: 'The eight faces are equally likely, so the expected value is the plain average $\\frac{1 + 2 + \\cdots + 8}{8} = \\frac{36}{8} = \\frac{9}{2}$. The number $36$ is the sum before dividing; $4$ and $5$ are the two middle faces, and the expected value sits exactly between them.',
    },
    {
      q: 'A box holds ten cards: four cards marked $1$, three marked $5$, two marked $8$, and one marked $20$. One card is drawn at random. What is the expected value of the number drawn?',
      choices: ['$\\frac{11}{2}$', '$\\frac{17}{2}$', '$\\frac{55}{4}$', '$\\frac{11}{4}$'],
      answer: 0,
      solution: 'Each card is equally likely, so add every card and divide by $10$: $4 \\cdot 1 + 3 \\cdot 5 + 2 \\cdot 8 + 1 \\cdot 20 = 55$, giving $\\frac{55}{10} = \\frac{11}{2}$. Averaging the four different labels, $\\frac{1 + 5 + 8 + 20}{4} = \\frac{17}{2}$, ignores that the $1$s are four times as likely as the $20$. Dividing $55$ by the $4$ labels gives $\\frac{55}{4}$.',
    },
    {
      q: 'The spinner shown is cut into three sectors of $180^\\circ$, $120^\\circ$, and $60^\\circ$, marked $4$, $9$, and $12$ respectively. What is the expected value of one spin?',
      fig: spinnerHTS,
      choices: ['$\\frac{25}{3}$', '$7$', '$\\frac{15}{2}$', '$25$'],
      answer: 1,
      solution: 'The sectors take $\\frac{1}{2}$, $\\frac{1}{3}$, and $\\frac{1}{6}$ of the wheel. Weight each number by its share: $4 \\cdot \\frac{1}{2} + 9 \\cdot \\frac{1}{3} + 12 \\cdot \\frac{1}{6} = 2 + 3 + 2 = 7$. The plain average of the labels, $\\frac{25}{3}$, treats the tiny $12$ sector as if it were as likely as the big $4$ sector.',
    },
    {
      q: 'A jar holds $3$ quarters, $5$ dimes, and $2$ nickels. One coin is pulled out at random. What is the expected value of the coin, in cents?',
      choices: ['$15$', '$\\frac{40}{3}$', '$135$', '$\\frac{27}{2}$'],
      answer: 3,
      solution: 'Each of the $10$ coins is equally likely. The total value is $3 \\cdot 25 + 5 \\cdot 10 + 2 \\cdot 5 = 135$ cents, so the expected value is $\\frac{135}{10} = \\frac{27}{2}$ cents. Averaging the three coin types, $\\frac{25 + 10 + 5}{3} = \\frac{40}{3}$, forgets that dimes are the most common; $135$ is the total, not the average.',
    },
    {
      q: 'You roll a standard die. If it shows a $6$ you win $\\$10$, if it shows a $5$ you win $\\$2$, and if it shows anything else you lose $\\$3$. What is the expected value of one play, in dollars?',
      choices: ['$\\$0.00$', '$\\$2.00$', '$\\$3.00$', '$-\\$1.00$'],
      answer: 0,
      solution: 'Three outcomes: $+10$ with probability $\\frac{1}{6}$, $+2$ with probability $\\frac{1}{6}$, and $-3$ with probability $\\frac{4}{6}$. Expected value: $\\frac{10 + 2 - 12}{6} = 0$, so the game is exactly fair — the two wins together pay for the four losses. Averaging the three results, $\\frac{10 + 2 - 3}{3} = 3$, pretends a loss is as likely as each win; $\\frac{10 + 2}{6} = 2$ forgets the losses; $2 - 3 = -1$ subtracts the loss as if it were certain.',
    },
    {
      q: 'A game pays $\\$3$ with probability $\\frac{1}{4}$, pays $\\$1$ with probability $\\frac{1}{2}$, and pays nothing otherwise. If the game is played $200$ times, about how much money should it pay out in total?',
      choices: ['$\\$400$', '$\\$200$', '$\\$250$', '$\\$267$'],
      answer: 2,
      solution: 'One play has expected value $3 \\cdot \\frac{1}{4} + 1 \\cdot \\frac{1}{2} + 0 \\cdot \\frac{1}{4} = 1.25$ dollars. Expected value is a long-run average, so $200$ plays should pay about $200 \\cdot 1.25 = \\$250$. Using $\\frac{3 + 1 + 0}{3}$ per play (about $\\$267$ in total) ignores the probabilities; $\\$400$ averages only the two paying prizes, $\\frac{3 + 1}{2} = 2$ per play, forgetting the plays that pay nothing; and $\\$200$ assumes every play pays the middle prize.',
    },
    {
      q: 'A spinner lands on region A with probability $\\frac{2}{5}$ and on region B with probability $\\frac{3}{5}$. Region A is worth $4$ points, and the expected value of one spin is $7$ points. How many points is region B worth?',
      choices: ['$10$', '$9$', '$\\frac{27}{5}$', '$\\frac{35}{3}$'],
      answer: 1,
      solution: 'Let B be worth $x$ points. Then $4 \\cdot \\frac{2}{5} + x \\cdot \\frac{3}{5} = 7$, so $\\frac{3x}{5} = 7 - \\frac{8}{5} = \\frac{27}{5}$ and $x = 9$. Check: $\\frac{8}{5} + \\frac{27}{5} = 7$. Solving $\\frac{4 + x}{2} = 7$ gives $10$, but that is a plain average, which is wrong when the regions are not equally likely. Stopping at $\\frac{27}{5}$ forgets to divide by $\\frac{3}{5}$, and $\\frac{35}{3}$ comes from $\\frac{3x}{5} = 7$, which leaves region A out entirely.',
    },
    {
      q: 'Two standard dice are rolled. What is the expected value of the product of the two numbers showing?',
      choices: ['$\\frac{21}{2}$', '$7$', '$\\frac{91}{6}$', '$\\frac{49}{4}$'],
      answer: 3,
      solution: 'All $36$ ordered rolls are equally likely, so the expected product is $\\frac{1}{36}\\sum_{a=1}^{6}\\sum_{b=1}^{6} ab$. Factor the double sum: $\\sum_a \\sum_b ab = (1 + 2 + \\cdots + 6)(1 + 2 + \\cdots + 6) = 21 \\cdot 21 = 441$, so the expected value is $\\frac{441}{36} = \\frac{49}{4}$, which is $\\left(\\frac{7}{2}\\right)^2$. The value $7$ is the expected sum, not the product; $\\frac{21}{2}$ mixes a sum of $21$ with the wrong denominator; and $\\frac{91}{6} = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6}$ is the expected square of a single die, which treats the two dice as if they always matched.',
    },
    {
      q: 'An integer is chosen at random from $1$ to $12$, inclusive. What is the expected number of positive divisors of the chosen integer?',
      choices: ['$\\frac{35}{12}$', '$\\frac{17}{6}$', '$\\frac{23}{12}$', '$3$'],
      answer: 0,
      solution: 'Count the divisors of each integer: $1, 2, 2, 3, 2, 4, 2, 4, 3, 4, 2, 6$ for $1$ through $12$. The twelve integers are equally likely, so the expected value is the average $\\frac{1 + 2 + 2 + 3 + 2 + 4 + 2 + 4 + 3 + 4 + 2 + 6}{12} = \\frac{35}{12}$. Missing one of the six divisors of $12$ gives $\\frac{34}{12} = \\frac{17}{6}$; forgetting that $1$ counts as a divisor of every number gives $\\frac{23}{12}$.',
    },
    {
      q: 'Two standard dice are rolled. What is the expected value of the larger of the two numbers showing? (If both dice match, that common number is the larger.)',
      choices: ['$4$', '$\\frac{161}{36}$', '$\\frac{7}{2}$', '$\\frac{91}{36}$'],
      answer: 1,
      solution: 'For the larger number to be exactly $k$, both dice must be at most $k$ but not both at most $k - 1$: that is $k^2 - (k-1)^2 = 2k - 1$ of the $36$ rolls. So the probabilities of a maximum of $1, 2, 3, 4, 5, 6$ are $\\frac{1}{36}, \\frac{3}{36}, \\frac{5}{36}, \\frac{7}{36}, \\frac{9}{36}, \\frac{11}{36}$, and the expected value is $\\frac{1 + 6 + 15 + 28 + 45 + 66}{36} = \\frac{161}{36}$. Guessing $\\frac{7}{2}$ treats the larger die like a single die, and $\\frac{91}{36}$ is the expected value of the smaller number.',
    },
  ],
}

const s113 = {
  id: '11.3',
  title: 'Expected Value Problems',
  learn: {
    concepts: [
      {
        heading: 'Is the game worth playing?',
        body: 'When a game costs money to enter, compute the expected payout and subtract the cost — or, equivalently, list each net result (payout minus cost) with its probability. A positive expected net means the game favors the player; negative means it favors whoever is running it; exactly zero is a fair game. The trap is comparing the expected payout to nothing at all and forgetting the entry fee.',
      },
      {
        heading: 'Expected number of something',
        body: 'Questions like "how many heads" or "how many aces" ask for the expected value of a count. The direct method is to find the probability of each possible count and take the weighted average. Three coins give $0, 1, 2, 3$ heads with probabilities $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$, so the expected number of heads is $\\frac{0 + 3 + 6 + 3}{8} = \\frac{3}{2}$.',
      },
      {
        heading: 'Add the expected values of the parts',
        body: 'The expected value of a sum is the sum of the expected values of its parts, and this is true even when the parts influence each other. The sum of two dice has expected value $\\frac{7}{2} + \\frac{7}{2} = 7$; you can check it by listing all $36$ rolls. For a count, each item contributes its own probability of counting: each of three coins contributes $\\frac{1}{2}$ head, and $3 \\cdot \\frac{1}{2} = \\frac{3}{2}$ matches the list above. We will not prove this rule here, but every problem in this section can be checked by listing outcomes.',
      },
      {
        heading: 'What does not add',
        body: 'Probabilities of overlapping events do not add, and the expected value of a product is not the product of expected values when the parts depend on each other. So the expected number of $6$s on two dice is $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$, but the probability of at least one $6$ is smaller, $\\frac{11}{36}$: the double-$6$ roll counts twice in the expected number and once in the probability. Keep "expected count" and "probability of at least one" apart.',
      },
    ],
    examples: [
      {
        problem: 'A booth charges $\\$2$ to roll a standard die, and pays you a number of dollars equal to the number rolled. Is the game worth playing, and by how much per play?',
        steps: [
          'The payout is $1, 2, 3, 4, 5, 6$ dollars, each with probability $\\frac{1}{6}$, so the expected payout is $\\frac{21}{6} = 3.5$ dollars.',
          'Subtract the entry fee: the expected net gain is $3.5 - 2 = 1.5$ dollars per play.',
          'The same answer comes from listing net results $-1, 0, 1, 2, 3, 4$ and averaging: $\\frac{9}{6} = 1.5$.',
        ],
        answer: 'Yes: the player gains $\\$1.50$ per play on average.',
      },
      {
        problem: 'A fair coin is flipped three times. What is the expected number of heads?',
        steps: [
          'The $8$ equally likely sequences give $0$ heads once (TTT), $1$ head three times, $2$ heads three times, and $3$ heads once (HHH).',
          'Weighted average: $0 \\cdot \\frac{1}{8} + 1 \\cdot \\frac{3}{8} + 2 \\cdot \\frac{3}{8} + 3 \\cdot \\frac{1}{8} = \\frac{12}{8} = \\frac{3}{2}$.',
          'Check by parts: each flip contributes $\\frac{1}{2}$ of a head, and $3 \\cdot \\frac{1}{2} = \\frac{3}{2}$.',
        ],
        answer: 'The expected number of heads is $\\frac{3}{2}$.',
      },
      {
        problem: 'Two cards are dealt from a standard $52$-card deck. What is the expected number of aces among them?',
        steps: [
          'There are $\\binom{52}{2} = 1326$ equally likely hands.',
          'Hands with two aces: $\\binom{4}{2} = 6$. Hands with exactly one ace: $4 \\cdot 48 = 192$. The rest, $1128$, have none.',
          'Expected number of aces: $\\frac{1 \\cdot 192 + 2 \\cdot 6}{1326} = \\frac{204}{1326} = \\frac{2}{13}$.',
          'By parts: each dealt card is an ace with probability $\\frac{4}{52} = \\frac{1}{13}$, and two cards give $\\frac{2}{13}$ — the same number, with far less work.',
        ],
        answer: 'The expected number of aces is $\\frac{2}{13}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A game costs $\\$3$ to play. A spinner then pays $\\$2$ with probability $\\frac{1}{2}$, $\\$4$ with probability $\\frac{1}{4}$, and $\\$8$ with probability $\\frac{1}{4}$. What is the expected net gain for the player, per play?',
      choices: ['$\\$4.00$', '$\\$1.00$', '$-\\$1.00$', '$\\$1.67$'],
      answer: 1,
      solution: 'The expected payout is $2 \\cdot \\frac{1}{2} + 4 \\cdot \\frac{1}{4} + 8 \\cdot \\frac{1}{4} = 1 + 1 + 2 = 4$ dollars; subtracting the $\\$3$ fee leaves an expected net gain of $\\$1.00$. Reporting $\\$4.00$ forgets the fee, and $\\$1.67$ comes from the plain average $\\frac{2 + 4 + 8}{3}$ minus $3$.',
    },
    {
      q: 'A spinner lands on red with probability $\\frac{1}{3}$ on each spin. It is spun $3$ times. What is the expected number of spins that land on red?',
      choices: ['$\\frac{19}{27}$', '$\\frac{4}{9}$', '$\\frac{3}{2}$', '$1$'],
      answer: 3,
      solution: 'The counts $0, 1, 2, 3$ have probabilities $\\frac{8}{27}, \\frac{12}{27}, \\frac{6}{27}, \\frac{1}{27}$, so the expected number is $\\frac{12 + 12 + 3}{27} = 1$. Faster: each spin contributes $\\frac{1}{3}$ of a red, and $3 \\cdot \\frac{1}{3} = 1$. The fraction $\\frac{19}{27}$ is the probability of at least one red, and $\\frac{4}{9}$ is the probability of exactly one.',
    },
    {
      q: 'Two standard dice are rolled. What is the expected number of dice that show a $6$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{11}{36}$', '$\\frac{1}{6}$', '$\\frac{1}{18}$'],
      answer: 0,
      solution: 'Of the $36$ rolls, $25$ have no $6$, $10$ have exactly one, and $1$ has two. The expected count is $\\frac{0 \\cdot 25 + 1 \\cdot 10 + 2 \\cdot 1}{36} = \\frac{12}{36} = \\frac{1}{3}$, which also equals $\\frac{1}{6} + \\frac{1}{6}$. The fraction $\\frac{11}{36}$ is the probability of at least one $6$ — the double-$6$ roll is counted once there but contributes two $6$s to the count.',
    },
    {
      q: 'A raffle sells $200$ tickets at $\\$1$ each. One ticket wins $\\$100$ and two other tickets each win $\\$25$. What is the expected net gain from buying one ticket?',
      choices: ['$\\$0.75$', '$-\\$0.75$', '$-\\$0.25$', '$\\$0.25$'],
      answer: 2,
      solution: 'Your ticket wins $\\$100$ with probability $\\frac{1}{200}$ and $\\$25$ with probability $\\frac{2}{200}$, so the expected payout is $\\frac{100 + 50}{200} = 0.75$ dollars. Subtract the $\\$1$ price: the expected net gain is $-\\$0.25$. Reporting $\\$0.75$ forgets the price, and $-\\$0.75$ forgets the $\\$100$ prize entirely.',
    },
    {
      q: 'Three letters are written to three different people, and the three envelopes are addressed. The letters are then put into the envelopes at random, one letter per envelope. What is the expected number of letters that end up in the correct envelope?',
      choices: ['$\\frac{1}{2}$', '$\\frac{3}{2}$', '$1$', '$\\frac{1}{3}$'],
      answer: 2,
      solution: 'There are $3! = 6$ equally likely ways to fill the envelopes. Listing them: one way puts all $3$ letters right, three ways put exactly $1$ right, and two ways put none right (there is no way to get exactly $2$ right). The expected number is $\\frac{3 \\cdot 1 + 1 \\cdot 3 + 0 \\cdot 2}{6} = 1$. By parts: each letter has a $\\frac{1}{3}$ chance of landing correctly, and $3 \\cdot \\frac{1}{3} = 1$. The value $\\frac{1}{3}$ is one letter’s chance, not the expected total.',
    },
    {
      q: 'Three standard dice are rolled. What is the expected value of the sum of the three numbers showing?',
      choices: ['$\\frac{21}{2}$', '$9$', '$7$', '$12$'],
      answer: 0,
      solution: 'The sum is a sum of three parts, and each die has expected value $\\frac{7}{2}$, so the expected sum is $3 \\cdot \\frac{7}{2} = \\frac{21}{2}$. Listing all $216$ rolls confirms it. The value $7$ is the expected sum of two dice, and $9$ is half of the largest possible sum $18$ — a symmetric guess that forgets the smallest sum is $3$, not $0$.',
    },
    {
      q: 'A bag holds $5$ red marbles and $3$ blue marbles. Two marbles are drawn at random without replacement. You receive $2$ points for each red marble drawn and lose $1$ point for each blue marble drawn. What is the expected value of your score?',
      choices: ['$\\frac{5}{4}$', '$\\frac{5}{2}$', '$\\frac{7}{8}$', '$\\frac{7}{4}$'],
      answer: 3,
      solution: 'There are $\\binom{8}{2} = 28$ equally likely pairs: $\\binom{5}{2} = 10$ score $4$ (two reds), $5 \\cdot 3 = 15$ score $2 - 1 = 1$ (one of each), and $\\binom{3}{2} = 3$ score $-2$ (two blues). Expected score: $\\frac{40 + 15 - 6}{28} = \\frac{49}{28} = \\frac{7}{4}$. By parts: each drawn marble is red with probability $\\frac{5}{8}$ and blue with probability $\\frac{3}{8}$, so it contributes $2 \\cdot \\frac{5}{8} - \\frac{3}{8} = \\frac{7}{8}$, and two marbles give $\\frac{7}{4}$ — the draws depend on each other, but that does not matter for a sum. The fraction $\\frac{7}{8}$ stops after one marble; $\\frac{5}{4}$ is the expected number of reds with the points forgotten; $\\frac{5}{2}$ counts the red points but not the blue penalty.',
    },
    {
      q: 'Four fair coins are flipped and laid in a row. Each pair of neighboring coins (positions $1$–$2$, $2$–$3$, and $3$–$4$) is called a match if both show heads. What is the expected number of matches?',
      choices: ['$\\frac{3}{8}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$1$'],
      answer: 1,
      solution: 'Each of the three neighboring pairs is a match with probability $\\frac{1}{4}$, and the expected number of matches is the sum of the parts: $3 \\cdot \\frac{1}{4} = \\frac{3}{4}$. The pairs overlap (coin $2$ belongs to two of them), but overlap does not affect a sum of expected values. Listing the $16$ sequences confirms it: $8$ have no match, $5$ have one, $2$ have two, $1$ has three, and $\\frac{5 + 4 + 3}{16} = \\frac{3}{4}$. The fraction $\\frac{3}{8}$ comes from wrongly using $\\frac{1}{8}$ per pair.',
    },
    {
      q: 'Five cards are numbered $1$ through $5$. You pay $\\$8$, then draw two cards at random without replacement and receive a number of dollars equal to the product of the two numbers. What is your expected net gain?',
      choices: ['$\\$0.50$', '$\\$1.00$', '$\\$0.00$', '$-\\$0.50$'],
      answer: 0,
      solution: 'The $\\binom{5}{2} = 10$ pairs are equally likely. Their products are $2, 3, 4, 5, 6, 8, 10, 12, 15, 20$, which add to $85$, so the expected payout is $\\frac{85}{10} = 8.5$ dollars and the expected net gain is $8.5 - 8 = \\$0.50$. Multiplying the expected values of the two cards, $3 \\cdot 3 = 9$, gives a net of $\\$1.00$, but that product rule fails here because the two cards must be different.',
    },
    {
      q: 'Three standard dice are rolled. What is the expected number of different values showing? (For example, the roll $4, 4, 1$ shows $2$ different values.)',
      choices: ['$\\frac{5}{2}$', '$\\frac{11}{6}$', '$3$', '$\\frac{91}{36}$'],
      answer: 3,
      solution: 'Of the $216$ rolls, $6$ show one value (all three match), $6 \\cdot 5 \\cdot 3 = 90$ show exactly two values (pick the repeated value, the single value, and which die is the single), and $6 \\cdot 5 \\cdot 4 = 120$ show three different values. The expected number is $\\frac{6 + 180 + 360}{216} = \\frac{546}{216} = \\frac{91}{36}$. By parts: each of the six values appears with probability $1 - \\left(\\frac{5}{6}\\right)^3 = \\frac{91}{216}$, and $6 \\cdot \\frac{91}{216} = \\frac{91}{36}$. Answering $3$ assumes the dice never repeat.',
    },
  ],
}

const s114 = {
  id: '11.4',
  title: 'A Funky Game',
  learn: {
    concepts: [
      {
        heading: 'Looks fair is not the same as is fair',
        body: 'Many games are built to feel balanced: two ways to win and one way to lose, a symmetric-sounding rule, a bonus that seems generous. None of that is evidence. A game is fair exactly when its expected value is $0$, and the only way to know is to list the outcomes with their real probabilities and compute. "Same parity or different parity" sounds like a coin flip, but with cards it is not $\\frac{1}{2}$.',
      },
      {
        heading: 'A huge prize with a tiny chance',
        body: 'A lottery can offer a prize worth thousands of times the ticket price and still have negative expected value, because the prize is multiplied by a tiny probability. The reverse also happens: a game can lose almost every time and still be worth playing if the rare win is big enough. Always compute prize times probability; do not let the size of the prize or the frequency of losing decide for you.',
      },
      {
        heading: 'Games with several stages',
        body: 'When a game has a stopping rule — "roll until you get a $6$, up to three times" or "quit as soon as you are ahead" — draw the tree of possible paths. Each complete path has a probability (multiply along the branches) and a final net result. The expected value is the sum of net result times probability over all the paths, and the path probabilities must add to $1$. Forgetting the path where every stage fails is the usual slip.',
      },
      {
        heading: 'Doubling up and other funky feelings',
        body: 'Betting $1$, then $2$ if you lose, then $4$ if you lose again seems unbeatable: any single win recovers everything and nets $1$. But the one path where every bet loses costs $1 + 2 + 4 = 7$, and its probability is exactly big enough to cancel the small wins. A game that ends ahead most of the time can have expected value $0$ or less; expected value weighs how much, not just how often.',
      },
    ],
    examples: [
      {
        problem: 'Five cards are numbered $1$ through $5$. You draw two at random. If the two numbers have the same parity (both odd or both even) you win $\\$1$; otherwise you lose $\\$1$. Is this game fair?',
        steps: [
          'There are $\\binom{5}{2} = 10$ equally likely pairs.',
          'Same-parity pairs: two odds from $\\{1, 3, 5\\}$ in $\\binom{3}{2} = 3$ ways, two evens from $\\{2, 4\\}$ in $1$ way, so $4$ pairs win and $6$ lose.',
          'Expected value: $1 \\cdot \\frac{4}{10} - 1 \\cdot \\frac{6}{10} = -\\frac{2}{10} = -0.2$.',
          'The game feels like a $50$–$50$ coin toss, but the extra odd card tips it: you lose $\\$0.20$ per play on average.',
        ],
        answer: 'No: the expected value is $-\\$0.20$ per play.',
      },
      {
        problem: 'A lottery sells $500{,}000$ tickets at $\\$2$ each. One ticket wins $\\$600{,}000$ and $100$ other tickets each win $\\$500$. What is the expected net gain from one ticket?',
        steps: [
          'The total prize money is $600{,}000 + 100 \\cdot 500 = 650{,}000$ dollars, spread over $500{,}000$ equally likely tickets.',
          'So one ticket’s expected payout is $\\frac{650{,}000}{500{,}000} = 1.30$ dollars.',
          'Subtract the $\\$2$ price: the expected net gain is $1.30 - 2 = -0.70$ dollars.',
          'A prize $300{,}000$ times the ticket price still leaves the buyer $\\$0.70$ behind on average, and $\\frac{499{,}899}{500{,}000}$ of tickets win nothing at all.',
        ],
        answer: 'The expected net gain is $-\\$0.70$ per ticket.',
      },
      {
        problem: 'A booth charges $\\$3$ for a game: roll a standard die; if it shows $6$ you receive $\\$9$ and the game ends, and if not you roll once more and receive $\\$9$ for a $6$. Two chances at $\\$9$ for $\\$3$ — is it a good deal?',
        steps: [
          'Draw the tree: win on the first roll with probability $\\frac{1}{6}$; miss and win on the second with probability $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$; miss both with probability $\\frac{25}{36}$.',
          'The probability of winning $\\$9$ is $\\frac{1}{6} + \\frac{5}{36} = \\frac{11}{36}$ — less than the $\\frac{2}{6}$ that "two chances" suggests, because a first-roll win ends the game.',
          'The expected payout is $9 \\cdot \\frac{11}{36} = 2.75$ dollars, so the expected net gain is $2.75 - 3 = -0.25$ dollars.',
        ],
        answer: 'No: the player loses $\\$0.25$ per play on average.',
      },
    ],
  },
  problems: [
    {
      q: 'Two standard dice are rolled. If the sum of the two numbers is a prime you win $\\$4$; otherwise you lose $\\$2$. What is the expected value of one play?',
      choices: ['$\\$1.00$', '$\\$1.67$', '$\\$0.33$', '$\\$0.50$'],
      answer: 3,
      solution: 'The prime sums are $2, 3, 5, 7, 11$, which occur in $1 + 2 + 4 + 6 + 2 = 15$ of the $36$ rolls, so you win with probability $\\frac{15}{36}$ and lose with probability $\\frac{21}{36}$. Expected value: $4 \\cdot \\frac{15}{36} - 2 \\cdot \\frac{21}{36} = \\frac{60 - 42}{36} = \\frac{1}{2}$, so the game is worth $\\$0.50$ to the player. Losing is the likelier result, yet the game favors you, because a win is worth twice a loss. Averaging the two results, $\\frac{4 - 2}{2} = 1$, pretends winning is as likely as losing; $4 \\cdot \\frac{15}{36} \\approx 1.67$ forgets the losses; forgetting that $2$ is prime leaves $14$ winning rolls and gives $\\frac{12}{36} \\approx 0.33$.',
    },
    {
      q: 'A game costs $\\$1$. You roll three standard dice; if all three show $6$ you win $\\$324$, and otherwise you win nothing. What is the expected net gain for the player?',
      choices: ['$-\\$1.00$', '$\\$0.50$', '$\\$1.50$', '$\\$8.00$'],
      answer: 1,
      solution: 'Three $6$s have probability $\\left(\\frac{1}{6}\\right)^3 = \\frac{1}{216}$, so the expected payout is $\\frac{324}{216} = 1.5$ dollars and the expected net gain is $1.5 - 1 = \\$0.50$. You lose $215$ plays out of $216$ and the game still favors you, because the rare prize is big enough. Answering $-\\$1.00$ reasons that you almost always lose the dollar; $\\$1.50$ forgets the fee; $\\$8.00$ uses $\\frac{1}{36}$, the chance that two particular dice show $6$, and forgets the third die.',
    },
    {
      q: 'You bet $1$ point on a fair coin landing heads. If it lands tails, you bet $2$ points on a second flip, and then the game ends either way. A winning bet pays a profit equal to the amount bet, and a losing bet loses the amount bet. What is the expected value of the game?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{4}$', '$0$', '$-\\frac{1}{2}$'],
      answer: 2,
      solution: 'Three paths: heads first (probability $\\frac{1}{2}$, net $+1$); tails then heads (probability $\\frac{1}{4}$, net $-1 + 2 = +1$); tails twice (probability $\\frac{1}{4}$, net $-1 - 2 = -3$). Expected value: $\\frac{1}{2} + \\frac{1}{4} - \\frac{3}{4} = 0$. You finish ahead $\\frac{3}{4}$ of the time, yet the game is exactly fair, because the rare loss is three times the size of a win. The answer $\\frac{3}{4}$ is the probability of ending ahead, not the expected value.',
    },
    {
      q: 'A carnival game costs $\\$2$. A wheel gives a $\\$15$ prize with probability $\\frac{1}{10}$, returns your $\\$2$ with probability $\\frac{3}{10}$, and gives nothing otherwise. What is the expected net gain for the player?',
      choices: ['$\\$0.10$', '$-\\$0.50$', '$\\$2.10$', '$\\$3.67$'],
      answer: 0,
      solution: 'Expected payout: $15 \\cdot \\frac{1}{10} + 2 \\cdot \\frac{3}{10} + 0 \\cdot \\frac{6}{10} = 1.5 + 0.6 = 2.1$ dollars, so the expected net gain is $2.1 - 2 = \\$0.10$. This game favors the player, even though $\\frac{6}{10}$ of plays lose everything. Forgetting the money-back outcome gives $-\\$0.50$; $\\$2.10$ is the payout before the fee; $\\$3.67$ averages the three prizes as if equally likely, $\\frac{15 + 2 + 0}{3}$, and then subtracts the fee.',
    },
    {
      q: 'You pick a number from $1$ to $6$, then roll two standard dice. You gain $1$ point for each die that shows your number, and if neither die shows it you lose $1$ point. What is the expected value of the game?',
      choices: ['$0$', '$-\\frac{13}{36}$', '$\\frac{1}{3}$', '$-\\frac{7}{18}$'],
      answer: 1,
      solution: 'Of the $36$ rolls, $25$ show your number on neither die, $10$ show it on exactly one, and $1$ shows it on both. Expected value: $\\frac{-25 + 10 + 2}{36} = -\\frac{13}{36}$ points. "Two chances to win, one way to lose" sounds fair, but a loss happens $\\frac{25}{36}$ of the time. The value $\\frac{1}{3}$ is the expected number of matching dice with the penalty forgotten, and $-\\frac{7}{18}$ counts the double match as $1$ point instead of $2$.',
    },
    {
      q: 'Twenty cards numbered $1$ through $20$ are shuffled and you draw one. If the card is any number from $1$ to $19$ you win $\\$1$; if it is the $20$ you lose $\\$25$. What is the expected value of one play?',
      choices: ['$\\$0.95$', '$-\\$1.25$', '$-\\$0.05$', '$-\\$0.30$'],
      answer: 3,
      solution: 'Expected value: $1 \\cdot \\frac{19}{20} - 25 \\cdot \\frac{1}{20} = \\frac{19 - 25}{20} = -\\$0.30$. You win $95\\%$ of the time and still lose money on average, because the one bad card costs as much as $25$ wins. Reporting $\\$0.95$ ignores the loss; $-\\$1.25$ ignores the wins; $-\\$0.05$ treats the loss as if it were only $\\$1$.',
    },
    {
      q: 'You flip a fair coin up to $4$ times, stopping at the first tails. You then receive $2^h$ dollars, where $h$ is the number of heads you flipped ($h$ can be $0, 1, 2, 3,$ or $4$). What is the expected payout?',
      choices: ['$\\$3.00$', '$\\$2.00$', '$\\$2.50$', '$\\$4.00$'],
      answer: 0,
      solution: 'The paths are T (probability $\\frac{1}{2}$, payout $\\$1$), HT ($\\frac{1}{4}$, $\\$2$), HHT ($\\frac{1}{8}$, $\\$4$), HHHT ($\\frac{1}{16}$, $\\$8$), and HHHH ($\\frac{1}{16}$, $\\$16$). Each of the first four paths contributes exactly $\\frac{1}{2}$ dollar, and the last contributes $1$: $\\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} + 1 = \\$3.00$. Halving the payout probability exactly cancels doubling the prize, so every extra allowed flip adds the same amount. Answering $\\$2.50$ forgets that HHHH pays $\\$16$, not $\\$8$.',
    },
    {
      q: 'A game costs $\\$4$. You roll a standard die. If it shows $4$, $5$, or $6$ you keep that number of dollars. If it shows $1$, $2$, or $3$ you must roll once more and keep the number of dollars shown on the second roll, whatever it is. What is the expected net gain for the player?',
      choices: ['$-\\$0.50$', '$\\$0.50$', '$\\$0.25$', '$\\$0.00$'],
      answer: 2,
      solution: 'With probability $\\frac{1}{2}$ the first roll is kept, and it is $4, 5,$ or $6$ equally often, average $5$. With probability $\\frac{1}{2}$ the second roll is kept, average $\\frac{7}{2}$. Expected payout: $\\frac{1}{2} \\cdot 5 + \\frac{1}{2} \\cdot \\frac{7}{2} = \\frac{17}{4} = 4.25$ dollars, so the expected net gain is $\\$0.25$. Using $\\frac{7}{2}$ for the whole game gives $-\\$0.50$; that ignores the fact that only the good first rolls are kept.',
    },
    {
      q: 'A spinner says STOP with probability $\\frac{1}{3}$ and GO with probability $\\frac{2}{3}$. You spin it up to three times; every GO earns $1$ point, and a STOP ends the game immediately. What is the expected number of points?',
      choices: ['$2$', '$\\frac{38}{27}$', '$\\frac{4}{3}$', '$\\frac{14}{9}$'],
      answer: 1,
      solution: 'Scores: $0$ if the first spin is STOP (probability $\\frac{1}{3}$); $1$ for GO then STOP ($\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$); $2$ for GO, GO, STOP ($\\frac{4}{27}$); $3$ for three GOs ($\\frac{8}{27}$). Expected points: $\\frac{2}{9} + \\frac{8}{27} + \\frac{24}{27} = \\frac{6 + 8 + 24}{27} = \\frac{38}{27}$. The answer $2$ is $3 \\cdot \\frac{2}{3}$, which would be right only if a STOP did not end the game.',
    },
    {
      q: 'You start with a score of $0$ and roll a standard die up to three times. A $5$ or $6$ adds $2$ to your score; any other number subtracts $1$. You stop as soon as your score is positive, or after the third roll. What is the expected value of your final score?',
      choices: ['$0$', '$\\frac{1}{3}$', '$\\frac{5}{9}$', '$-\\frac{1}{3}$'],
      answer: 0,
      solution: 'Draw the tree. First roll good (probability $\\frac{1}{3}$): score $2$, stop. First roll bad, second good ($\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$): score $1$, stop. Two bad then good ($\\frac{4}{27}$): score $0$. Three bad ($\\frac{8}{27}$): score $-3$. Expected value: $2 \\cdot \\frac{1}{3} + 1 \\cdot \\frac{2}{9} + 0 - 3 \\cdot \\frac{8}{27} = \\frac{18 + 6 - 24}{27} = 0$. You stop ahead $\\frac{5}{9}$ of the time, but each roll is itself fair ($2 \\cdot \\frac{1}{3} - 1 \\cdot \\frac{2}{3} = 0$), and no stopping rule can change that. The value $\\frac{5}{9}$ is the probability of finishing ahead, not the expected score.',
    },
  ],
}

const challenge = [
  {
    q: 'You flip a fair coin. If it shows heads, you roll a standard die and receive a number of dollars equal to the number rolled; if it shows tails, you receive $\\$2$. What is the expected payout?',
    choices: ['$\\$5.50$', '$\\$2.75$', '$\\$3.50$', '$\\$1.75$'],
    answer: 1,
    solution: 'With probability $\\frac{1}{2}$ you roll the die, whose expected value is $\\frac{7}{2}$; with probability $\\frac{1}{2}$ you get $2$. Expected payout: $\\frac{1}{2} \\cdot \\frac{7}{2} + \\frac{1}{2} \\cdot 2 = \\frac{7}{4} + 1 = \\frac{11}{4} = \\$2.75$. Adding the two branches without their probabilities gives $\\$5.50$; $\\$3.50$ ignores the tails branch; $\\$1.75$ halves the die branch and forgets the $\\$2$ branch.',
  },
  {
    q: 'A game costs $\\$3$. A wheel pays $\\$10$ with probability $\\frac{1}{5}$, pays $\\$3$ with probability $\\frac{3}{10}$, and pays nothing otherwise. What is the expected net gain for the player?',
    choices: ['$\\$2.90$', '$\\$0.90$', '$-\\$0.10$', '$\\$1.33$'],
    answer: 2,
    solution: 'Expected payout: $10 \\cdot \\frac{1}{5} + 3 \\cdot \\frac{3}{10} + 0 \\cdot \\frac{1}{2} = 2 + 0.9 = 2.9$ dollars. Subtract the fee: $2.9 - 3 = -\\$0.10$. The $\\$3$ outcome only returns the fee, so it adds nothing to the net. Reporting $\\$2.90$ forgets the fee; $\\$1.33$ is the plain average $\\frac{10 + 3 + 0}{3}$ minus $3$.',
  },
  {
    q: 'Three standard dice are rolled. What is the expected number of dice that show a prime number?',
    choices: ['$\\frac{3}{2}$', '$1$', '$\\frac{7}{8}$', '$2$'],
    answer: 0,
    solution: 'The primes on a die are $2, 3, 5$, so each die shows a prime with probability $\\frac{1}{2}$, and three dice give $3 \\cdot \\frac{1}{2} = \\frac{3}{2}$. Listing the counts confirms it: $0, 1, 2, 3$ primes occur in $27, 81, 81, 27$ of the $216$ rolls, and $\\frac{81 + 162 + 81}{216} = \\frac{3}{2}$. The fraction $\\frac{7}{8}$ is the probability of at least one prime, and $1$ comes from forgetting that $2$ is prime.',
  },
  {
    q: 'A prize wheel pays $\\$5$ with probability $\\frac{1}{3}$, $\\$2$ with probability $\\frac{1}{6}$, and $\\$x$ with probability $\\frac{1}{2}$. The expected payout is exactly $\\$4$. What is $x$?',
    choices: ['$\\$2.00$', '$\\$6.00$', '$\\$5.00$', '$\\$4.00$'],
    answer: 3,
    solution: 'Set up $5 \\cdot \\frac{1}{3} + 2 \\cdot \\frac{1}{6} + x \\cdot \\frac{1}{2} = 4$. The known part is $\\frac{5}{3} + \\frac{1}{3} = 2$, so $\\frac{x}{2} = 2$ and $x = 4$. Solving the plain-average equation $\\frac{5 + 2 + x}{3} = 4$ gives $\\$5.00$, but the three prizes are not equally likely.',
  },
  {
    q: 'Five cards are numbered $1$ through $5$. Two are drawn at random without replacement. What is the expected value of the sum of the two numbers?',
    choices: ['$3$', '$5$', '$6$', '$9$'],
    answer: 2,
    solution: 'Each card has expected value $\\frac{1 + 2 + 3 + 4 + 5}{5} = 3$, and the expected sum is the sum of the parts: $3 + 3 = 6$. Drawing without replacement does not change this, and listing confirms it: each number appears in $4$ of the $\\binom{5}{2} = 10$ pairs, so the pair sums total $4 \\cdot 15 = 60$ and average $6$. The value $3$ is one card’s expected value, and $5$ is the largest card.',
  },
  {
    q: 'Two standard dice are rolled. What is the expected value of the positive difference between the two numbers showing? (A matching pair has difference $0$.)',
    choices: ['$\\frac{7}{2}$', '$\\frac{35}{18}$', '$\\frac{5}{2}$', '$2$'],
    answer: 1,
    solution: 'Count the $36$ rolls by difference: difference $0$ in $6$ rolls, $1$ in $10$, $2$ in $8$, $3$ in $6$, $4$ in $4$, $5$ in $2$ (a difference of $d \\geq 1$ happens in $2(6 - d)$ rolls). Expected value: $\\frac{0 \\cdot 6 + 1 \\cdot 10 + 2 \\cdot 8 + 3 \\cdot 6 + 4 \\cdot 4 + 5 \\cdot 2}{36} = \\frac{70}{36} = \\frac{35}{18}$. Subtracting expected values, $\\frac{7}{2} - \\frac{7}{2} = 0$, is the expected signed difference, not the positive one; $\\frac{5}{2}$ is the plain average of the differences $0$ through $5$.',
  },
  {
    q: 'A raffle sells exactly $100$ tickets at $\\$1$ each, and one ticket drawn at random wins $\\$60$. Nadia buys $5$ tickets. What is her expected net gain?',
    choices: ['$-\\$2.00$', '$-\\$0.40$', '$\\$3.00$', '$-\\$4.40$'],
    answer: 0,
    solution: 'One of her $5$ tickets wins with probability $\\frac{5}{100}$, so her expected payout is $60 \\cdot \\frac{5}{100} = 3$ dollars. She paid $\\$5$, so her expected net gain is $3 - 5 = -\\$2.00$. Each ticket loses $\\$0.40$ on average, so buying five loses five times as much — $-\\$0.40$ is the answer for a single ticket, and $\\$3.00$ forgets the cost.',
  },
  {
    q: 'A bag holds $2$ gold coins and $3$ silver coins. Coins are drawn one at a time at random without replacement until a gold coin appears. What is the expected number of coins drawn?',
    choices: ['$\\frac{3}{2}$', '$\\frac{5}{2}$', '$3$', '$2$'],
    answer: 3,
    solution: 'The first gold appears on draw $1$ with probability $\\frac{2}{5}$; on draw $2$ with probability $\\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{3}{10}$; on draw $3$ with probability $\\frac{3}{5} \\cdot \\frac{2}{4} \\cdot \\frac{2}{3} = \\frac{1}{5}$; on draw $4$ with probability $\\frac{3}{5} \\cdot \\frac{2}{4} \\cdot \\frac{1}{3} \\cdot 1 = \\frac{1}{10}$. These add to $1$. Expected draws: $1 \\cdot \\frac{2}{5} + 2 \\cdot \\frac{3}{10} + 3 \\cdot \\frac{1}{5} + 4 \\cdot \\frac{1}{10} = 2$. Guessing $\\frac{5}{2}$ (the middle of $1$ to $4$) ignores that early draws are likelier.',
  },
  {
    q: 'A bag holds $2$ red, $2$ blue, and $2$ green marbles. Two marbles are drawn at random without replacement. What is the expected number of different colors among the two marbles drawn?',
    choices: ['$2$', '$\\frac{9}{5}$', '$\\frac{5}{3}$', '$\\frac{4}{5}$'],
    answer: 1,
    solution: 'The number of colors is $1$ if the marbles match and $2$ if they differ. Of the $\\binom{6}{2} = 15$ pairs, $3$ are matching (one pair per color), so the probability of a match is $\\frac{1}{5}$. Expected colors: $1 \\cdot \\frac{1}{5} + 2 \\cdot \\frac{4}{5} = \\frac{9}{5}$. Answering $2$ assumes the marbles never match, and $\\frac{4}{5}$ is the probability of two colors rather than the expected number.',
  },
  {
    q: 'A game costs $\\$2$. You roll a standard die: a $6$ wins $\\$9$ and ends the game, a $1$ ends the game with no prize, and any other number lets you roll once more, where a $6$ wins $\\$9$ and anything else wins nothing. What is the expected net gain for the player?',
    choices: ['$\\$0.50$', '$-\\$0.50$', '$\\$0.25$', '$\\$0.75$'],
    answer: 0,
    solution: 'Win on the first roll with probability $\\frac{1}{6}$; reach a second roll with probability $\\frac{4}{6}$ and win there with probability $\\frac{1}{6}$, so $\\frac{4}{36}$. The total probability of winning $\\$9$ is $\\frac{6 + 4}{36} = \\frac{5}{18}$, giving an expected payout of $9 \\cdot \\frac{5}{18} = 2.5$ dollars and an expected net gain of $\\$0.50$. Ignoring the second roll gives $\\frac{9}{6} - 2 = -\\$0.50$; ignoring the rule that a $1$ ends the game gives $9 \\cdot \\frac{11}{36} - 2 = \\$0.75$.',
  },
  {
    q: 'Six cards are numbered $1$ through $6$. Three are drawn at random without replacement. What is the expected value of the smallest number drawn?',
    choices: ['$2$', '$\\frac{3}{2}$', '$\\frac{7}{4}$', '$\\frac{5}{2}$'],
    answer: 2,
    solution: 'There are $\\binom{6}{3} = 20$ equally likely triples. The smallest card is $k$ when the other two come from the $6 - k$ cards above it: $\\binom{5}{2} = 10$ triples have smallest $1$, $\\binom{4}{2} = 6$ have smallest $2$, $\\binom{3}{2} = 3$ have smallest $3$, and $\\binom{2}{2} = 1$ has smallest $4$. Expected value: $\\frac{1 \\cdot 10 + 2 \\cdot 6 + 3 \\cdot 3 + 4 \\cdot 1}{20} = \\frac{35}{20} = \\frac{7}{4}$. The guess $2$ comes from evenly spacing three cards among six; it is close but not exact.',
  },
  {
    q: 'Three standard dice are rolled, and the three numbers showing are put in order from smallest to largest. What is the expected value of the middle number? (For the roll $2, 5, 5$ the middle number is $5$.)',
    choices: ['$\\frac{119}{24}$', '$\\frac{49}{24}$', '$\\frac{161}{36}$', '$\\frac{7}{2}$'],
    answer: 3,
    solution: 'Sort the $216$ equally likely rolls by their middle number $k$. There are three ways for the middle number to be $k$: all three dice show $k$ ($1$ roll); exactly two show $k$ and the third shows one of the other $5$ faces ($3 \\cdot 5 = 15$ rolls); or exactly one shows $k$, one die is below $k$ and one is above ($3! \\cdot (k - 1)(6 - k)$ rolls). So the counts for $k = 1$ through $6$ are $16, 40, 52, 52, 40, 16$, which add to $216$, and the expected value is $\\frac{16 + 80 + 156 + 208 + 200 + 96}{216} = \\frac{756}{216} = \\frac{7}{2}$. The counts are symmetric — $k$ and $7 - k$ occur equally often, because turning every die over (replacing each $x$ by $7 - x$) swaps them — so the answer is the center $\\frac{7}{2}$, the same as a single die, even though the middle number is a $3$ or $4$ far more often than a $1$ or $6$. The value $\\frac{119}{24}$ is the expected largest number and $\\frac{49}{24}$ the expected smallest; $\\frac{161}{36}$ is the expected larger of only two dice.',
  },
]

const worksheet = [
  {
    q: 'One of the four digits of the number $2026$ is chosen at random. What is the expected value of the chosen digit?',
    answer: '$\\frac{5}{2}$',
    solution: 'The four digits $2, 0, 2, 6$ are equally likely, so the expected value is their average: $\\frac{2 + 0 + 2 + 6}{4} = \\frac{10}{4} = \\frac{5}{2}$. The repeated $2$ and the $0$ both count as outcomes.',
  },
  {
    q: 'A standard die is rolled. What is the expected value of the remainder when the number rolled is divided by $4$?',
    answer: '$\\frac{3}{2}$',
    solution: 'The remainders of $1, 2, 3, 4, 5, 6$ on division by $4$ are $1, 2, 3, 0, 1, 2$, and the six rolls are equally likely, so the expected remainder is $\\frac{1 + 2 + 3 + 0 + 1 + 2}{6} = \\frac{9}{6} = \\frac{3}{2}$. The roll of $4$ contributes $0$, but it is still one of the six outcomes.',
  },
  {
    q: 'A game costs $\\$1$. You flip two fair coins and receive $\\$3$ if both show heads; otherwise you receive nothing. What is the expected net gain for the player, in dollars?',
    answer: '$-\\$0.25$',
    solution: 'Both heads has probability $\\frac{1}{4}$, so the expected payout is $3 \\cdot \\frac{1}{4} = 0.75$ dollars. Subtract the $\\$1$ fee: $0.75 - 1 = -0.25$, a loss of $\\$0.25$ per play on average.',
  },
  {
    q: 'Three standard dice are rolled. What is the expected number of dice that show a $1$?',
    answer: '$\\frac{1}{2}$',
    solution: 'Each die shows a $1$ with probability $\\frac{1}{6}$, and the expected count is the sum over the three dice: $3 \\cdot \\frac{1}{6} = \\frac{1}{2}$. Listing confirms it: $0, 1, 2, 3$ ones occur in $125, 75, 15, 1$ of the $216$ rolls, and $\\frac{75 + 30 + 3}{216} = \\frac{1}{2}$.',
  },
  {
    q: 'Eight cards are numbered $1$ through $8$, and one is drawn at random. If the number is even you win that many points; if it is odd you win nothing. What is the expected number of points won?',
    answer: '$\\frac{5}{2}$',
    solution: 'Each card has probability $\\frac{1}{8}$. The even cards pay $2, 4, 6, 8$ and the odd cards pay $0$, so the expected value is $\\frac{2 + 4 + 6 + 8}{8} = \\frac{20}{8} = \\frac{5}{2}$. Dividing by the four even cards instead of all eight would give $5$, which forgets the odd draws.',
  },
  {
    q: 'A game costs $\\$2$. You roll two standard dice and receive $\\$6$ if the sum is $7$; otherwise you receive nothing. What is the expected net gain for the player, in dollars?',
    answer: '$-\\$1.00$',
    solution: 'A sum of $7$ occurs in $6$ of the $36$ rolls, probability $\\frac{1}{6}$. Expected payout: $6 \\cdot \\frac{1}{6} = 1$ dollar, so the expected net gain is $1 - 2 = -\\$1.00$.',
  },
  {
    q: 'A fair coin is flipped $4$ times. Let $h$ be the number of heads and $t$ the number of tails. What is the expected value of the product $ht$?',
    answer: '$3$',
    solution: 'Of the $16$ equally likely sequences, $1$ has $h = 0$, $4$ have $h = 1$, $6$ have $h = 2$, $4$ have $h = 3$, and $1$ has $h = 4$. Since $t = 4 - h$, the products are $0, 3, 4, 3, 0$ respectively, and the expected value is $\\frac{4 \\cdot 3 + 6 \\cdot 4 + 4 \\cdot 3}{16} = \\frac{48}{16} = 3$. Multiplying the expected values $2 \\cdot 2 = 4$ is wrong here: $h$ and $t$ depend on each other, and the product of expected values is not the expected product.',
  },
  {
    q: 'A game costs $\\$1$. A bag holds $4$ red marbles and $2$ blue marbles; you draw three at random without replacement and win $\\$6$ if both blue marbles are among them, and nothing otherwise. What is the expected net gain for the player, in dollars?',
    answer: '$\\$0.20$',
    solution: 'Of the $\\binom{6}{3} = 20$ equally likely triples, the ones containing both blues are those whose third marble is any of the $4$ reds, so $4$ triples win: probability $\\frac{4}{20} = \\frac{1}{5}$. Expected payout: $6 \\cdot \\frac{1}{5} = 1.2$ dollars, so the expected net gain is $1.2 - 1 = \\$0.20$. Four plays in five lose the dollar, and the game still favors the player.',
  },
  {
    q: 'A fair coin is flipped until it shows heads, but at most $3$ times. What is the expected number of flips?',
    answer: '$\\frac{7}{4}$',
    solution: 'One flip with probability $\\frac{1}{2}$ (heads first); two flips with probability $\\frac{1}{4}$ (tails, heads); three flips with probability $\\frac{1}{4}$ (tails, tails, then the final flip whatever it shows). Expected flips: $1 \\cdot \\frac{1}{2} + 2 \\cdot \\frac{1}{4} + 3 \\cdot \\frac{1}{4} = \\frac{7}{4}$. The slip is giving three flips probability $\\frac{1}{8}$, which forgets that the path tails-tails-tails also uses three flips.',
  },
  {
    q: 'You bet $1$ point that a standard die shows a $6$. If it does not, you bet $2$ points on a second roll; if that also fails, you bet $4$ points on a third roll, and then the game ends. A winning bet pays a profit equal to the amount bet, a losing bet loses the amount bet, and the game ends at the first win. What is the expected value of the game, in points?',
    answer: '$-\\frac{98}{27}$',
    solution: 'Any win nets $+1$: the first bet wins with probability $\\frac{1}{6}$, the second with $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$, the third with $\\frac{25}{216}$, a total of $\\frac{36 + 30 + 25}{216} = \\frac{91}{216}$. Losing all three, probability $\\frac{125}{216}$, costs $1 + 2 + 4 = 7$ points. Expected value: $\\frac{91}{216} - 7 \\cdot \\frac{125}{216} = \\frac{91 - 875}{216} = -\\frac{784}{216} = -\\frac{98}{27}$. Doubling cannot rescue a bet that loses $\\frac{5}{6}$ of the time: the game loses more than $3$ points per play on average.',
  },
]

export default {
  id: 'intro-counting-ch11',
  book: 'intro-counting',
  number: 11,
  title: 'Expected Value',
  intro:
    'What is a game worth? Not the biggest prize and not the most common result, but a single number that blends every outcome with its chance: the expected value. In this chapter you will compute it for dice, spinners, raffles, and bets, learn a shortcut for counting questions, and then take apart games that feel fair but are not.',
  sections: [s112, s113, s114],
  challenge,
  worksheet,
}
