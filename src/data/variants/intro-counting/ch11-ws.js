// Counting chapter 11 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    an exact reduced fraction such as '$\frac{31}{15}$', a two-decimal dollar
//    amount such as '$-\$0.50$' with the sign outside, or a bare integer such
//    as '$-1$'.
//  - Every key was computed exactly in node before the stem was written, with
//    BigInt rationals and no floating point: full digit lists, all $6^k$ die
//    tuples, all $2^k$ and $3^k$ flip and spin strings, all $\binom{n}{k}$
//    hands, all $6!$ draw orders, and every branch of every stopping tree, with
//    each tree’s branch probabilities checked to total exactly $1$. Unknown
//    prizes and fees were found by exhaustive search over whole cents. Every
//    money key is an exact number of cents. Every key matches its pin. Pin
//    deviations: none.
//  - Every solution runs two genuinely independent routes that each end ✓.
//    Where route one is linearity of expectation (an indicator sum, a
//    per-stage tally, a pair count), route two is a full distribution
//    computation — the whole outcome list, or the whole stopping tree with its
//    probabilities summed to $1$ — and never re-imports route one’s number.
//    The solution then names the most tempting wrong answer’s trap in CAPS,
//    ending ✗, with the wrong value stated so the gap is visible.
//  - Conventions are settled in every stem: dice, coins, and spinners are fair
//    and independent; entry fees say they are not returned; "expected net gain"
//    subtracts the fee and "expected payout" does not; a losing bet loses the
//    amount bet; draws say with or without replacement; and every stopping rule
//    says exactly what ends the game.

const worksheet = [
  // slot 1 — expected value of a random digit.
  //          Lanes: digits of 40,513 -> 13/5; the code 7,3,7,1 -> 9/2;
  //          derived: expected SQUARE of a digit of 2026 -> 11.
  [
    {
      q: 'One of the five digits of the number $40{,}513$ is chosen at random, with each of the five positions equally likely. What is the expected value of the chosen digit?',
      answer: '$\\frac{13}{5}$',
      solution:
        'The five positions hold $4$, $0$, $5$, $1$, $3$, and each is chosen with probability $\\frac{1}{5}$, so the expected value is $\\frac{1}{5}(4) + \\frac{1}{5}(0) + \\frac{1}{5}(5) + \\frac{1}{5}(1) + \\frac{1}{5}(3) = \\frac{13}{5}$; the five probabilities total $1$, so no outcome is missing ✓. A second route guesses the mean is $3$ and averages the errors: the digits sit $1$, $-3$, $2$, $-2$, and $0$ away from $3$, a total of $-2$, so the mean is $3 + \\frac{-2}{5} = \\frac{15 - 2}{5} = \\frac{13}{5}$ ✓. AVERAGING ONLY THE NONZERO DIGITS gives $\\frac{4 + 5 + 1 + 3}{5 - 1} = \\frac{13}{4}$; the $0$ is a real outcome with probability $\\frac{1}{5}$ and pulls the mean down ✗.',
    },
    {
      q: 'A four-digit locker code is $7$, $3$, $7$, $1$. One of its four digit positions is chosen at random, with each position equally likely. What is the expected value of the chosen digit?',
      answer: '$\\frac{9}{2}$',
      solution:
        'Two of the four positions hold a $7$, so the digit is $7$ with probability $\\frac{2}{4} = \\frac{1}{2}$, is $3$ with probability $\\frac{1}{4}$, and is $1$ with probability $\\frac{1}{4}$; those probabilities total $1$, and the expected value is $\\frac{1}{2}(7) + \\frac{1}{4}(3) + \\frac{1}{4}(1) = \\frac{7}{2} + 1 = \\frac{9}{2}$ ✓. A second route measures from a guess of $4$: the four digits sit $3$, $-1$, $3$, and $-3$ away from $4$, a total of $2$, so the mean is $4 + \\frac{2}{4} = \\frac{9}{2}$ ✓. TREATING THE THREE DIFFERENT VALUES $7$, $3$, $1$ AS EQUALLY LIKELY gives $\\frac{7 + 3 + 1}{3} = \\frac{11}{3}$; the $7$ fills two of the four positions and must be weighted twice ✗.',
    },
    {
      q: 'One of the four digits of the number $2026$ is chosen at random, with each of the four positions equally likely. What is the expected value of the square of the chosen digit?',
      answer: '$11$',
      solution:
        'The square is $4$ when a $2$ is chosen, which happens with probability $\\frac{2}{4} = \\frac{1}{2}$; it is $0$ with probability $\\frac{1}{4}$ and $36$ with probability $\\frac{1}{4}$, and those total $1$. So the expected square is $\\frac{1}{2}(4) + \\frac{1}{4}(0) + \\frac{1}{4}(36) = 2 + 0 + 9 = 11$ ✓. A second route uses the spread around the mean digit. The mean digit is $\\frac{2 + 0 + 2 + 6}{4} = \\frac{5}{2}$, and the digits sit $-\\frac{1}{2}$, $-\\frac{5}{2}$, $-\\frac{1}{2}$, $\\frac{7}{2}$ away from it, so the mean squared error is $\\frac{1}{4}\\left(\\frac{1}{4} + \\frac{25}{4} + \\frac{1}{4} + \\frac{49}{4}\\right) = \\frac{19}{4}$. The expected square is the squared mean plus that spread: $\\frac{25}{4} + \\frac{19}{4} = \\frac{44}{4} = 11$ ✓. SQUARING THE EXPECTED DIGIT gives $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$; squaring is not an averaging-friendly operation, and the gap $\\frac{19}{4}$ is exactly the spread the squaring adds ✗.',
    },
  ],

  // slot 2 — expected remainder.
  //          Lanes: die mod 5 -> 11/6; cards 1-10 mod 3 -> 1;
  //          derived: die conditioned away from 4, mod 4 -> 9/5.
  [
    {
      q: 'A fair standard die with faces $1$ through $6$ is rolled once. What is the expected value of the remainder when the number rolled is divided by $5$?',
      answer: '$\\frac{11}{6}$',
      solution:
        'The six faces $1, 2, 3, 4, 5, 6$ leave remainders $1, 2, 3, 4, 0, 1$ on division by $5$, and the six rolls are equally likely, so the expected remainder is $\\frac{1 + 2 + 3 + 4 + 0 + 1}{6} = \\frac{11}{6}$ ✓. A second route writes the remainder as the roll itself minus a correction: for $1, 2, 3, 4$ the remainder is the roll, and for $5$ and $6$ it is the roll minus $5$. So the remainder equals the roll minus $5$ times an indicator that the roll is $5$ or more, and the expected remainder is $\\frac{7}{2} - 5 \\cdot \\frac{2}{6} = \\frac{21}{6} - \\frac{10}{6} = \\frac{11}{6}$ ✓. AVERAGING THE FIVE POSSIBLE REMAINDERS $0, 1, 2, 3, 4$ gives $2$; the die has six equally likely faces, not five, and the remainder $1$ arrives twice ✗.',
    },
    {
      q: 'A card is drawn at random from ten cards numbered $1$ through $10$, with each card equally likely. What is the expected value of the remainder when the number drawn is divided by $3$?',
      answer: '$1$',
      solution:
        'Sort the ten cards by remainder: the $3$, $6$, $9$ leave $0$; the $1$, $4$, $7$, $10$ leave $1$; the $2$, $5$, $8$ leave $2$. Those groups hold $3 + 4 + 3 = 10$ cards, so the probabilities $\\frac{3}{10}$, $\\frac{4}{10}$, $\\frac{3}{10}$ total $1$, and the expected remainder is $\\frac{3}{10}(0) + \\frac{4}{10}(1) + \\frac{3}{10}(2) = \\frac{0 + 4 + 6}{10} = 1$ ✓. A second route never sorts the cards at all: the remainder of a card numbered $n$ is $n - 3q$, where $q$ is the number of complete threes inside $n$. Expected values subtract, so the expected remainder is the expected card minus $3$ times the expected $q$. The ten cards average $\\frac{1 + 2 + \\cdots + 10}{10} = \\frac{11}{2}$, and their values of $q$ — $0, 0, 1, 1, 1, 2, 2, 2, 3, 3$ — average $\\frac{15}{10} = \\frac{3}{2}$, so the expected remainder is $\\frac{11}{2} - 3 \\cdot \\frac{3}{2} = \\frac{11 - 9}{2} = 1$ ✓. TAKING THE REMAINDER OF THE AVERAGE CARD instead of the average of the remainders gives the remainder of $\\frac{11}{2}$, namely $\\frac{5}{2}$; the remainder must be computed on each card before averaging ✗.',
    },
    {
      q: 'A fair standard die is rolled and turns out not to be a $4$. Given that, the five remaining faces are equally likely. What is the expected value of the remainder when the number rolled is divided by $4$?',
      answer: '$\\frac{9}{5}$',
      solution:
        'The five possible faces $1, 2, 3, 5, 6$ leave remainders $1, 2, 3, 1, 2$ on division by $4$, so the remainder is $1$ with probability $\\frac{2}{5}$, is $2$ with probability $\\frac{2}{5}$, and is $3$ with probability $\\frac{1}{5}$ — probabilities totaling $1$ — and the expected value is $\\frac{2}{5}(1) + \\frac{2}{5}(2) + \\frac{1}{5}(3) = \\frac{2 + 4 + 3}{5} = \\frac{9}{5}$ ✓. A second route starts from the whole die: over all six faces the remainders $1, 2, 3, 0, 1, 2$ add to $9$. The face removed is the $4$, whose remainder is $0$, so the total is still $9$ while the number of equally likely faces drops to $5$, giving $\\frac{9}{5}$ ✓. LEAVING THE $4$ IN THE COUNT gives $\\frac{9}{6} = \\frac{3}{2}$; the $4$ contributes nothing to the total but is no longer one of the outcomes, so the denominator must shrink too ✗.',
    },
  ],

  // slot 3 — small fee against a rare payout (net gain, then a reversed prize).
  //          Lanes: $3 fee, three heads pays $20 -> -$0.50; $2 fee, two even
  //          cards of six pay $9 -> -$0.20; reversed: $1 fee, two heads pay P,
  //          fair -> $4.00.
  [
    {
      q: 'A game costs $\\$3$ to play, and the fee is not returned. You flip three fair coins and receive $\\$20$ if all three show heads; otherwise you receive nothing. What is the expected net gain for the player, in dollars?',
      answer: '$-\\$0.50$',
      solution:
        'Each coin shows heads with probability $\\frac{1}{2}$ and the flips are independent, so all three are heads with probability $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$. The expected payout is $20 \\cdot \\frac{1}{8} = 2.50$ dollars, and subtracting the $\\$3$ fee leaves $2.50 - 3 = -0.50$, so the expected net gain is $-\\$0.50$ ✓. A second route works with the net result over the $8$ equally likely flip sequences: the single sequence HHH nets $20 - 3 = 17$ dollars and the other $7$ sequences each net $-3$ dollars, so the expected net gain is $\\frac{17 - 21}{8} = \\frac{-4}{8} = -\\$0.50$ ✓. FORGETTING TO SUBTRACT THE FEE gives $\\$2.50$ and turns a game that bleeds fifty cents a play into a windfall; the question asks for net gain, so the $\\$3$ comes off every play, win or lose ✗.',
    },
    {
      q: 'A game costs $\\$2$ to play, and the fee is not returned. You draw two cards at random without replacement from six cards numbered $1$ through $6$ and receive $\\$9$ if both numbers are even; otherwise you receive nothing. What is the expected net gain for the player, in dollars?',
      answer: '$-\\$0.20$',
      solution:
        'Three of the six cards are even, so of the $\\binom{6}{2} = 15$ equally likely pairs the winning ones are the $\\binom{3}{2} = 3$ pairs of evens: probability $\\frac{3}{15} = \\frac{1}{5}$. The expected payout is $9 \\cdot \\frac{1}{5} = 1.80$ dollars, and $1.80 - 2 = -0.20$, so the expected net gain is $-\\$0.20$ ✓. A second route nets out every pair: the winning pairs are $\\{2,4\\}$, $\\{2,6\\}$, $\\{4,6\\}$, each netting $9 - 2 = 7$ dollars, and the other $12$ pairs each net $-2$ dollars, so the expected net gain is $\\frac{3(7) + 12(-2)}{15} = \\frac{21 - 24}{15} = \\frac{-3}{15} = -\\$0.20$ ✓. TREATING THE TWO DRAWS AS INDEPENDENT, each even with probability $\\frac{1}{2}$, gives a win chance of $\\frac{1}{4}$ and a net gain of $9 \\cdot \\frac{1}{4} - 2 = \\$0.25$; the first even card is not replaced, so only $2$ of the remaining $5$ cards are even ✗.',
    },
    {
      q: 'A game costs $\\$1$ to play, and the fee is not returned. You flip two fair coins and receive $\\$P$ if both show heads, and nothing otherwise. The game is fair, meaning the expected net gain for the player is $\\$0$. What must $P$ be?',
      answer: '$\\$4.00$',
      solution:
        'The four equally likely outcomes are HH, HT, TH, TT, so both heads has probability $\\frac{1}{4}$. Fair means the expected payout equals the fee: $P \\cdot \\frac{1}{4} = 1$, so $P = \\$4.00$ ✓. A second route balances the net results directly: one of the four outcomes nets $P - 1$ dollars and the other three each net $-1$ dollar, so fairness requires $(P - 1) + 3(-1) = 0$, giving $P - 4 = 0$ and $P = \\$4.00$ ✓. Checking, a $\\$4$ prize pays $4 \\cdot \\frac{1}{4} = \\$1$ per play on average, exactly the fee. TREATING THE OUTCOMES AS "TWO HEADS, ONE HEAD, NO HEADS" EQUALLY LIKELY gives $P \\cdot \\frac{1}{3} = 1$ and a prize of $\\$3.00$; one head happens two ways, HT and TH, so the three head-counts are not equally likely ✗.',
    },
  ],

  // slot 4 — expected count of successes among independent trials.
  //          Lanes: 5 dice under 3 -> 5/3; 8-sector spinner x6, multiples of 3
  //          -> 3/2; derived: 3 dice NOT showing a 1 -> 5/2.
  [
    {
      q: 'Five fair standard dice are rolled, independently of one another. What is the expected number of dice that show a number less than $3$?',
      answer: '$\\frac{5}{3}$',
      solution:
        'Two faces, the $1$ and the $2$, are less than $3$, so each die succeeds with probability $\\frac{2}{6} = \\frac{1}{3}$. The number of successes is the sum of five such indicators, and expected values add whether or not the dice interact, so the expected count is $5 \\cdot \\frac{1}{3} = \\frac{5}{3}$ ✓. A second route builds the whole distribution over the $3^5 = 243$ equally likely success-failure patterns weighted by their chances: the count is $k$ with probability $\\binom{5}{k}\\frac{2^{5-k}}{243}$, giving numerators $32, 80, 80, 40, 10, 1$ for $k = 0$ through $5$, which total $243$ ✓. The expected count is $\\frac{1(80) + 2(80) + 3(40) + 4(10) + 5(1)}{243} = \\frac{80 + 160 + 120 + 40 + 5}{243} = \\frac{405}{243} = \\frac{5}{3}$ ✓. READING "LESS THAN $3$" AS INCLUDING THE $3$ gives $5 \\cdot \\frac{3}{6} = \\frac{5}{2}$; the $3$ is not less than itself ✗.',
    },
    {
      q: 'A spinner has $8$ equal sectors numbered $1$ through $8$ and is spun $6$ times, with the spins independent. What is the expected number of spins that land on a multiple of $3$?',
      answer: '$\\frac{3}{2}$',
      solution:
        'The multiples of $3$ among $1$ through $8$ are $3$ and $6$, so one spin succeeds with probability $\\frac{2}{8} = \\frac{1}{4}$. The number of successes is a sum of six indicators, so the expected count is $6 \\cdot \\frac{1}{4} = \\frac{3}{2}$ ✓. A second route sums over the full distribution: the count is $k$ with probability $\\binom{6}{k}\\frac{3^{6-k}}{4^6}$, whose numerators for $k = 0$ through $6$ are $729, 1458, 1215, 540, 135, 18, 1$, totaling $4096 = 4^6$ ✓. Then the expected count is $\\frac{1458 + 2(1215) + 3(540) + 4(135) + 5(18) + 6(1)}{4096} = \\frac{6144}{4096} = \\frac{3}{2}$ ✓. ANSWERING $1$, THE MOST LIKELY NUMBER OF HITS, confuses the mode with the mean: exactly one hit is the single most probable count at $\\frac{1458}{4096}$, but the heavier counts above it drag the average up to $\\frac{3}{2}$ ✗.',
    },
    {
      q: 'Three fair standard dice are rolled, independently of one another. What is the expected number of dice that do not show a $1$?',
      answer: '$\\frac{5}{2}$',
      solution:
        'Each die avoids the $1$ with probability $\\frac{5}{6}$, and the number of such dice is a sum of three indicators, so the expected count is $3 \\cdot \\frac{5}{6} = \\frac{5}{2}$ ✓. A second route counts the $216$ equally likely rolls of three dice by how many $1$s they show: $5^3 = 125$ rolls show no $1$, $3 \\cdot 5^2 = 75$ show exactly one, $3 \\cdot 5 = 15$ show exactly two, and $1$ shows three, and $125 + 75 + 15 + 1 = 216$ ✓. Those rolls have $3, 2, 1, 0$ dice avoiding the $1$, so the expected count is $\\frac{3(125) + 2(75) + 1(15) + 0(1)}{216} = \\frac{375 + 150 + 15}{216} = \\frac{540}{216} = \\frac{5}{2}$ ✓. SUBTRACTING THE PROBABILITY $\\frac{1}{6}$ FROM $3$ gives $\\frac{17}{6}$; what must be subtracted is the expected number of $1$s, which is $3 \\cdot \\frac{1}{6} = \\frac{1}{2}$, not the single-die probability ✗.',
    },
  ],

  // slot 5 — a payoff that depends on the value drawn.
  //          Lanes: multiples of 4 among 1-12 pay their value -> 2; primes on a
  //          die pay triple -> 5; derived: evens pay their value, odds cost 7
  //          -> -1.
  [
    {
      q: 'Twelve cards are numbered $1$ through $12$, and one is drawn at random with every card equally likely. If the number is a multiple of $4$ you win that many points; otherwise you win nothing. What is the expected number of points won?',
      answer: '$2$',
      solution:
        'Only the $4$, the $8$, and the $12$ pay, each with probability $\\frac{1}{12}$, and the other nine cards pay $0$; the twelve probabilities total $1$. So the expected score is $\\frac{4 + 8 + 12 + 9(0)}{12} = \\frac{24}{12} = 2$ ✓. A second route splits the draw in two stages. A multiple of $4$ appears with probability $\\frac{3}{12} = \\frac{1}{4}$, and when one does appear the three multiples $4$, $8$, $12$ are equally likely, worth $\\frac{4 + 8 + 12}{3} = 8$ points on average; the other $\\frac{3}{4}$ of the time the score is $0$. So the expected score is $\\frac{1}{4}(8) + \\frac{3}{4}(0) = 2$ ✓. AVERAGING ONLY THE THREE WINNING CARDS gives $8$; that is the average payout on a winning draw, but three draws in four win nothing and must be averaged in ✗.',
    },
    {
      q: 'A fair standard die is rolled once. If the number showing is prime you win three times that many points; otherwise you win nothing. What is the expected number of points won?',
      answer: '$5$',
      solution:
        'The primes among $1$ through $6$ are $2$, $3$, and $5$, so the six equally likely faces pay $0, 6, 9, 0, 15, 0$ points. The expected score is $\\frac{0 + 6 + 9 + 0 + 15 + 0}{6} = \\frac{30}{6} = 5$ ✓. A second route separates the chance of a prime from its size. A prime appears with probability $\\frac{3}{6} = \\frac{1}{2}$, and given a prime the face is $2$, $3$, or $5$ equally likely, averaging $\\frac{10}{3}$; the payout triples the face, so the expected score is $\\frac{1}{2} \\cdot 3 \\cdot \\frac{10}{3} = 5$ ✓. COUNTING $1$ AS PRIME gives payouts $3, 6, 9, 0, 15, 0$ and an expected score of $\\frac{33}{6} = \\frac{11}{2}$; the number $1$ has only one positive divisor, so it is not prime ✗.',
    },
    {
      q: 'Eight cards are numbered $1$ through $8$, and one is drawn at random with every card equally likely. If the number is even you win that many points; if it is odd you lose $7$ points. What is the expected value of your score?',
      answer: '$-1$',
      solution:
        'The eight equally likely cards score $-7, 2, -7, 4, -7, 6, -7, 8$, so the expected score is $\\frac{(2 + 4 + 6 + 8) - 4(7)}{8} = \\frac{20 - 28}{8} = \\frac{-8}{8} = -1$ ✓. A second route weighs the two halves against each other. An even card comes up with probability $\\frac{1}{2}$, and the evens $2, 4, 6, 8$ average $5$, contributing $\\frac{1}{2}(5) = \\frac{5}{2}$; an odd card also comes up with probability $\\frac{1}{2}$ and always costs $7$, contributing $-\\frac{7}{2}$. Together, $\\frac{5}{2} - \\frac{7}{2} = -1$ ✓. SUBTRACTING THE $7$ ONLY ONCE gives $\\frac{20 - 7}{8} = \\frac{13}{8}$ and even flips the sign; the penalty lands on each of the four odd cards, so it is subtracted four times ✗.',
    },
  ],

  // slot 6 — fee against a payout on a listed set of outcomes.
  //          Lanes: $3 fee, sum 11 or 12 pays $21 -> -$1.25; $1 fee, exactly
  //          two heads of four pays $8 -> $2.00; reversed: $2 fee, sum 5 or 9
  //          pays P, fair -> $9.00.
  [
    {
      q: 'A game costs $\\$3$ to play, and the fee is not returned. You roll two fair standard dice and receive $\\$21$ if the sum is $11$ or $12$; otherwise you receive nothing. What is the expected net gain for the player, in dollars?',
      answer: '$-\\$1.25$',
      solution:
        'Of the $36$ equally likely rolls, a sum of $11$ comes from $2$ of them and a sum of $12$ from $1$, so the win chance is $\\frac{3}{36} = \\frac{1}{12}$. The expected payout is $21 \\cdot \\frac{1}{12} = 1.75$ dollars, and $1.75 - 3 = -1.25$, so the expected net gain is $-\\$1.25$ ✓. A second route nets out all $36$ rolls: $3$ of them net $21 - 3 = 18$ dollars and the other $33$ net $-3$ dollars, so the expected net gain is $\\frac{3(18) + 33(-3)}{36} = \\frac{54 - 99}{36} = \\frac{-45}{36} = -\\$1.25$ ✓. GIVING THE SUM $12$ TWO ROLLS, as sums like $11$ have, makes the win chance $\\frac{4}{36} = \\frac{1}{9}$ and the net gain $21 \\cdot \\frac{1}{9} - 3 = -\\frac{2}{3}$ of a dollar; only the double six sums to $12$, while $11$ arrives as $5{+}6$ and as $6{+}5$ ✗.',
    },
    {
      q: 'A game costs $\\$1$ to play, and the fee is not returned. You flip four fair coins and receive $\\$8$ if exactly two of them show heads; otherwise you receive nothing. What is the expected net gain for the player, in dollars?',
      answer: '$\\$2.00$',
      solution:
        'Of the $2^4 = 16$ equally likely flip sequences, $\\binom{4}{2} = 6$ show exactly two heads, so the win chance is $\\frac{6}{16} = \\frac{3}{8}$. The expected payout is $8 \\cdot \\frac{3}{8} = 3$ dollars, and $3 - 1 = 2$, so the expected net gain is $\\$2.00$ ✓. A second route nets out all $16$ sequences: the $6$ winners each net $8 - 1 = 7$ dollars and the other $10$ each net $-1$ dollar, so the expected net gain is $\\frac{6(7) + 10(-1)}{16} = \\frac{42 - 10}{16} = \\frac{32}{16} = \\$2.00$ ✓. TREATING THE FIVE HEAD-COUNTS $0, 1, 2, 3, 4$ AS EQUALLY LIKELY gives a win chance of $\\frac{1}{5}$ and a net gain of $8 \\cdot \\frac{1}{5} - 1 = \\$0.60$; two heads happens $6$ ways while four heads happens only $1$ way ✗.',
    },
    {
      q: 'A game costs $\\$2$ to play, and the fee is not returned. You roll two fair standard dice and receive $\\$P$ if the sum is $5$ or $9$, and nothing otherwise. The game is fair, meaning the expected net gain for the player is $\\$0$. What must $P$ be?',
      answer: '$\\$9.00$',
      solution:
        'A sum of $5$ comes from $4$ of the $36$ rolls and a sum of $9$ from another $4$, so the win chance is $\\frac{8}{36} = \\frac{2}{9}$. Fair means the expected payout equals the fee: $P \\cdot \\frac{2}{9} = 2$, so $P = 9$, that is $\\$9.00$ ✓. A second route balances the net results over all $36$ rolls: $8$ rolls net $P - 2$ dollars and $28$ rolls net $-2$ dollars, so fairness needs $8(P - 2) + 28(-2) = 0$, giving $8P = 72$ and $P = \\$9.00$ ✓. COUNTING THE SUMS $5$ AND $9$ AS TWO OF THE ELEVEN POSSIBLE SUMS gives $P \\cdot \\frac{2}{11} = 2$ and a prize of $\\$11.00$; the eleven sums are not equally likely, and $5$ and $9$ are among the more common ones ✗.',
    },
  ],

  // slot 7 — expected value of a product or square of counts.
  //          Lanes: ht on 6 flips -> 15/2; rs on 3 spins of a one-in-three
  //          spinner -> 4/3; derived: h squared on 4 flips -> 5.
  [
    {
      q: 'A fair coin is flipped $6$ times. Let $h$ be the number of heads and $t$ the number of tails, so $h + t = 6$. What is the expected value of the product $ht$?',
      answer: '$\\frac{15}{2}$',
      solution:
        'The product $ht$ counts the pairs made of one head and one tail, so it counts exactly the pairs of flip positions that show different faces. There are $\\binom{6}{2} = 15$ pairs of positions, and any one pair shows different faces with probability $\\frac{1}{2}$, since two of its four equally likely patterns HH, HT, TH, TT are mixed. Expected values add, so the expected product is $15 \\cdot \\frac{1}{2} = \\frac{15}{2}$ ✓. A second route runs the whole distribution of $h$: among the $64$ equally likely sequences, $h$ equals $0, 1, 2, 3, 4, 5, 6$ in $1, 6, 15, 20, 15, 6, 1$ of them, and those total $64$ ✓. Since $t = 6 - h$, the products $h(6-h)$ are $0, 5, 8, 9, 8, 5, 0$, so the expected product is $\\frac{6(5) + 15(8) + 20(9) + 15(8) + 6(5)}{64} = \\frac{480}{64} = \\frac{15}{2}$ ✓. MULTIPLYING THE EXPECTED VALUES gives $3 \\cdot 3 = 9$; heads and tails move in opposite directions here, so the expected product is smaller than the product of the expected values ✗.',
    },
    {
      q: 'A spinner has $3$ equal sectors, exactly one of them red, and it is spun $3$ times with the spins independent. Let $r$ be the number of red spins and $s$ the number of non-red spins, so $r + s = 3$. What is the expected value of the product $rs$?',
      answer: '$\\frac{4}{3}$',
      solution:
        'The product $rs$ counts the pairs of spins in which one spin is red and the other is not. There are $\\binom{3}{2} = 3$ pairs of spins, and a given pair is mixed with probability $2 \\cdot \\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{4}{9}$, the two orders red-then-other and other-then-red. So the expected product is $3 \\cdot \\frac{4}{9} = \\frac{4}{3}$ ✓. A second route runs the distribution of $r$ over the $27$ equally likely spin triples: $r$ equals $0, 1, 2, 3$ in $8, 12, 6, 1$ of them, totaling $27$ ✓. The products $r(3-r)$ are $0, 2, 2, 0$, so the expected product is $\\frac{12(2) + 6(2)}{27} = \\frac{36}{27} = \\frac{4}{3}$ ✓. ANSWERING $2$, THE MOST LIKELY VALUE OF THE PRODUCT, confuses the mode with the mean: the product is $2$ on $18$ of the $27$ triples and $0$ on the other $9$, and averaging those gives $\\frac{4}{3}$, not $2$ ✗.',
    },
    {
      q: 'A fair coin is flipped $4$ times. Let $h$ be the number of heads. What is the expected value of $h^2$?',
      answer: '$5$',
      solution:
        'Write $h = X_1 + X_2 + X_3 + X_4$, where $X_i$ is $1$ if flip $i$ is heads and $0$ if not. Expanding, $h^2$ is the sum of the four terms $X_i^2$ and the $12$ ordered cross terms $X_iX_j$ with $i \\neq j$. Since $X_i^2 = X_i$, each of the four has expected value $\\frac{1}{2}$; distinct flips are independent, so each cross term has expected value $\\frac{1}{4}$. Adding, $4 \\cdot \\frac{1}{2} + 12 \\cdot \\frac{1}{4} = 2 + 3 = 5$ ✓. A second route runs the whole distribution: among the $16$ equally likely sequences, $h$ equals $0, 1, 2, 3, 4$ in $1, 4, 6, 4, 1$ of them, totaling $16$ ✓, so the expected value of $h^2$ is $\\frac{1(0) + 4(1) + 6(4) + 4(9) + 1(16)}{16} = \\frac{80}{16} = 5$ ✓. SQUARING THE EXPECTED NUMBER OF HEADS gives $2^2 = 4$; the spread of $h$ around its mean adds $1$ to the expected square ✗.',
    },
  ],

  // slot 8 — fee against a hand-based prize, then a reversed fair fee.
  //          Lanes: $3 fee, all 3 blacks in 4 of 8 pays $14 -> -$2.00; $2 fee,
  //          consecutive pair from five cards pays $7 -> $0.80; reversed: both
  //          blues in 3 of 6 pays $6, fair fee -> $1.20.
  [
    {
      q: 'A game costs $\\$3$ to play, and the fee is not returned. A bag holds $5$ white and $3$ black marbles; you draw four of them at random without replacement and win $\\$14$ if all three black marbles are among the four, and nothing otherwise. What is the expected net gain for the player, in dollars?',
      answer: '$-\\$2.00$',
      solution:
        'There are $\\binom{8}{4} = 70$ equally likely sets of four marbles. A winning set holds all $3$ blacks plus one of the $5$ whites, so $5$ sets win and the chance is $\\frac{5}{70} = \\frac{1}{14}$. The expected payout is $14 \\cdot \\frac{1}{14} = 1$ dollar, and $1 - 3 = -2$, so the expected net gain is $-\\$2.00$ ✓. A second route sorts all $70$ sets by how many blacks they hold: $\\binom{5}{4} = 5$ sets hold no black, $\\binom{3}{1}\\binom{5}{3} = 30$ hold one, $\\binom{3}{2}\\binom{5}{2} = 30$ hold two, and $\\binom{3}{3}\\binom{5}{1} = 5$ hold three, and $5 + 30 + 30 + 5 = 70$ ✓. Only the last group pays, so the expected net gain is $\\frac{5(14 - 3) + 65(-3)}{70} = \\frac{55 - 195}{70} = \\frac{-140}{70} = -\\$2.00$ ✓. USING $\\frac{3}{8} \\cdot \\frac{2}{7} \\cdot \\frac{1}{6} = \\frac{1}{56}$ FOR THE WIN CHANCE gives a net gain of $\\frac{14}{56} - 3 = -\\$2.75$; that is the chance the first three marbles drawn are the blacks, but the blacks may arrive in any three of the four draws ✗.',
    },
    {
      q: 'A game costs $\\$2$ to play, and the fee is not returned. Five cards numbered $1$ through $5$ are shuffled and you draw two of them at random without replacement; you win $\\$7$ if the two numbers are consecutive integers, and nothing otherwise. What is the expected net gain for the player, in dollars?',
      answer: '$\\$0.80$',
      solution:
        'There are $\\binom{5}{2} = 10$ equally likely pairs, and the consecutive ones are $\\{1,2\\}$, $\\{2,3\\}$, $\\{3,4\\}$, $\\{4,5\\}$, so the win chance is $\\frac{4}{10} = \\frac{2}{5}$. The expected payout is $7 \\cdot \\frac{2}{5} = 2.80$ dollars, and $2.80 - 2 = 0.80$, so the expected net gain is $\\$0.80$ ✓. A second route nets out all $10$ pairs: $4$ of them net $7 - 2 = 5$ dollars and $6$ net $-2$ dollars, so the expected net gain is $\\frac{4(5) + 6(-2)}{10} = \\frac{20 - 12}{10} = \\frac{8}{10} = \\$0.80$ ✓. COUNTING $\\{5,1\\}$ AS CONSECUTIVE, as if the cards wrapped around, gives a win chance of $\\frac{5}{10} = \\frac{1}{2}$ and a net gain of $7 \\cdot \\frac{1}{2} - 2 = \\$1.50$; $5$ and $1$ differ by $4$ ✗.',
    },
    {
      q: 'A bag holds $4$ red and $2$ blue marbles. You draw three of them at random without replacement and win $\\$6$ if both blue marbles are among the three, and nothing otherwise. What entry fee, not returned, makes the game fair — that is, makes the expected net gain for the player $\\$0$?',
      answer: '$\\$1.20$',
      solution:
        'There are $\\binom{6}{3} = 20$ equally likely sets of three marbles, and a winning set holds both blues plus one of the $4$ reds, so $4$ sets win and the chance is $\\frac{4}{20} = \\frac{1}{5}$. The expected payout is $6 \\cdot \\frac{1}{5} = 1.20$ dollars, and a fair fee is exactly the expected payout, so the fee is $\\$1.20$ ✓. A second route calls the fee $c$ and balances the net results over all $20$ sets: $4$ sets net $6 - c$ dollars and $16$ net $-c$ dollars, so fairness needs $4(6 - c) + 16(-c) = 0$, giving $24 = 20c$ and $c = \\frac{6}{5} = \\$1.20$ ✓. USING $\\frac{2}{6} \\cdot \\frac{1}{5} = \\frac{1}{15}$ FOR THE WIN CHANCE gives a fee of $6 \\cdot \\frac{1}{15} = \\$0.40$; that is the chance the first two marbles drawn are the blues, but the blues may arrive in any two of the three draws ✗.',
    },
  ],

  // slot 9 — stop at the first success, capped at three tries.
  //          Lanes: die until a 6, at most 3 rolls -> 91/36; 2R4B until red, at
  //          most 3 draws -> 31/15; derived: coin until heads, at most 3 flips,
  //          expected HEADS -> 7/8.
  [
    {
      q: 'A fair standard die is rolled until it shows a $6$, except that at most $3$ rolls are made: if the first two rolls miss, a third roll is made and the game ends there whatever it shows. What is the expected number of rolls?',
      answer: '$\\frac{91}{36}$',
      solution:
        'The game lasts $1$ roll if the first roll is a $6$, probability $\\frac{1}{6} = \\frac{6}{36}$; it lasts $2$ rolls if the first misses and the second is a $6$, probability $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$; and it lasts $3$ rolls whenever the first two both miss, probability $\\frac{25}{36}$. Those branches total $\\frac{6 + 5 + 25}{36} = 1$ ✓, so the expected number of rolls is $\\frac{1(6) + 2(5) + 3(25)}{36} = \\frac{6 + 10 + 75}{36} = \\frac{91}{36}$ ✓. A second route counts rolls one at a time: the first roll always happens, the second happens exactly when the first misses, and the third happens exactly when the first two miss. Adding those chances, the expected number of rolls is $1 + \\frac{5}{6} + \\frac{25}{36} = \\frac{36 + 30 + 25}{36} = \\frac{91}{36}$ ✓. GIVING THE THREE-ROLL BRANCH PROBABILITY $\\frac{25}{36} \\cdot \\frac{1}{6} = \\frac{25}{216}$ gives $\\frac{19}{24}$, and the branch probabilities then total only $\\frac{91}{216}$; the third roll is made whether or not it turns up a $6$ ✗.',
    },
    {
      q: 'A bag holds $2$ red and $4$ blue marbles. Marbles are drawn at random one at a time without replacement until a red one appears, except that at most $3$ draws are made: if the first two are blue, a third marble is drawn and the drawing ends there whatever its color. What is the expected number of draws?',
      answer: '$\\frac{31}{15}$',
      solution:
        'The drawing stops after $1$ marble if the first is red, probability $\\frac{2}{6} = \\frac{5}{15}$; after $2$ if the first is blue and the second red, probability $\\frac{4}{6} \\cdot \\frac{2}{5} = \\frac{4}{15}$; and after $3$ whenever the first two are both blue, probability $\\frac{4}{6} \\cdot \\frac{3}{5} = \\frac{6}{15}$. Those branches total $\\frac{5 + 4 + 6}{15} = 1$ ✓, so the expected number of draws is $\\frac{1(5) + 2(4) + 3(6)}{15} = \\frac{5 + 8 + 18}{15} = \\frac{31}{15}$ ✓. A second route counts draws one at a time: the first draw always happens; the second happens exactly when the first is blue, probability $\\frac{4}{6} = \\frac{2}{3}$; the third happens exactly when the first two are blue, probability $\\frac{4}{6} \\cdot \\frac{3}{5} = \\frac{2}{5}$. Adding, $1 + \\frac{2}{3} + \\frac{2}{5} = \\frac{15 + 10 + 6}{15} = \\frac{31}{15}$ ✓. TREATING EACH DRAW AS RED WITH PROBABILITY $\\frac{1}{3}$, as though the marble were put back, gives $1 + \\frac{2}{3} + \\frac{4}{9} = \\frac{19}{9}$; once a blue is gone the bag holds $2$ reds among $5$ marbles, so later draws are likelier to end the game ✗.',
    },
    {
      q: 'A fair coin is flipped until it shows heads, except that at most $3$ flips are made: if the first two are tails, a third flip is made and the game ends there whatever it shows. What is the expected number of heads?',
      answer: '$\\frac{7}{8}$',
      solution:
        'The game has four possible records: H with probability $\\frac{1}{2}$, TH with probability $\\frac{1}{4}$, TTH with probability $\\frac{1}{8}$, and TTT with probability $\\frac{1}{8}$; those total $\\frac{4 + 2 + 1 + 1}{8} = 1$ ✓. The first three records show one head and the last shows none, so the expected number of heads is $1 \\cdot \\frac{4 + 2 + 1}{8} + 0 \\cdot \\frac{1}{8} = \\frac{7}{8}$ ✓. A second route counts heads flip by flip: flip $1$ is heads with probability $\\frac{1}{2}$; flip $2$ happens and is heads only after a first tails, probability $\\frac{1}{4}$; flip $3$ happens and is heads only after two tails, probability $\\frac{1}{8}$. Adding those chances gives $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{7}{8}$ ✓. ANSWERING $\\frac{7}{4}$, THE EXPECTED NUMBER OF FLIPS, answers the wrong question: the game stops at the first heads, so it never records more than one head, and the expected count cannot exceed $1$ ✗.',
    },
  ],

  // slot 10 — doubling bets with a hard stop.
  //          Lanes: 1-2-4 on a ring toss at p = 1/4 -> -19/8; 1-2-4-8 on a
  //          one-in-three chip with replacement -> -175/81; derived: chance of
  //          ending ahead in the 1-2-4 die game -> 91/216.
  [
    {
      q: 'In a ring-toss game each throw lands on the peg with probability $\\frac{1}{4}$, and the throws are independent. You bet $1$ point on your first throw; if it misses, you bet $2$ points on a second throw; if that one also misses, you bet $4$ points on a third throw, and then the game ends. A throw that lands on the peg wins a profit equal to the amount bet and ends the game at once; a throw that misses loses the amount bet, which is not returned. What is the expected net gain for the player, in points?',
      answer: '$-\\frac{19}{8}$',
      solution:
        'Since each throw is independent, a throw lands with probability $\\frac{1}{4}$ and misses with probability $\\frac{3}{4}$ no matter what came before, so there are four possible games. A ring on the first throw, probability $\\frac{16}{64}$, ends at $+1$. A miss then a ring, probability $\\frac{12}{64}$, ends at $-1 + 2 = +1$. Two misses then a ring, probability $\\frac{9}{64}$, ends at $-1 - 2 + 4 = +1$. Three misses, probability $\\frac{27}{64}$, ends at $-1 - 2 - 4 = -7$. Those branches total $\\frac{16 + 12 + 9 + 27}{64} = 1$ ✓, so the expected net gain is $\\frac{16 + 12 + 9 - 7(27)}{64} = \\frac{37 - 189}{64} = \\frac{-152}{64} = -\\frac{19}{8}$ ✓. A second route prices the three throws one at a time. The first bet is always placed and is worth $\\frac{1}{4}(1) + \\frac{3}{4}(-1) = -\\frac{1}{2}$. The second bet is placed only after a miss, probability $\\frac{3}{4}$, and is worth $\\frac{1}{4}(2) + \\frac{3}{4}(-2) = -1$ when placed, contributing $-\\frac{3}{4}$. The third is placed only after two misses, probability $\\frac{9}{16}$, and is worth $-2$ when placed, contributing $-\\frac{9}{8}$. Adding, $-\\frac{1}{2} - \\frac{3}{4} - \\frac{9}{8} = \\frac{-4 - 6 - 9}{8} = -\\frac{19}{8}$ ✓. CHARGING THE THREE-MISS GAME ONLY THE LAST BET, $-4$ instead of $-7$, gives $\\frac{37 - 108}{64} = -\\frac{71}{64}$; the first two stakes are gone for good and no later throw hands them back ✗.',
    },
    {
      q: 'A jar holds $9$ chips, $3$ of them lucky. You bet $1$ point that a chip drawn at random is lucky; if it is not, you put the chip back and bet $2$ points on a second draw; if that fails, you put it back and bet $4$ points on a third draw; if that fails, you put it back and bet $8$ points on a fourth draw, and then the game ends. A winning bet pays a profit equal to the amount bet, a losing bet loses the amount bet, and the game ends at the first win. What is the expected value of the game, in points?',
      answer: '$-\\frac{175}{81}$',
      solution:
        'Because each chip goes back, every draw is lucky with probability $\\frac{3}{9} = \\frac{1}{3}$. A win on the first draw ends at $+1$; a win on the second ends at $-1 + 2 = +1$; on the third, $-1 - 2 + 4 = +1$; on the fourth, $-1 - 2 - 4 + 8 = +1$. Their probabilities are $\\frac{27}{81}$, $\\frac{18}{81}$, $\\frac{12}{81}$, $\\frac{8}{81}$, and four misses has probability $\\frac{16}{81}$ and ends at $-(1 + 2 + 4 + 8) = -15$. Those branches total $\\frac{27 + 18 + 12 + 8 + 16}{81} = 1$ ✓, so the expected value is $\\frac{65 - 15(16)}{81} = \\frac{65 - 240}{81} = -\\frac{175}{81}$ ✓. A second route prices the four bets one at a time. A bet of $b$ points, once placed, is worth $\\frac{1}{3}(b) + \\frac{2}{3}(-b) = -\\frac{b}{3}$, and bet $k$ is placed only after $k - 1$ misses, probability $\\left(\\frac{2}{3}\\right)^{k-1}$. So the total is $-\\frac{1}{3} - \\frac{2}{3} \\cdot \\frac{2}{3} - \\frac{4}{3} \\cdot \\frac{4}{9} - \\frac{8}{3} \\cdot \\frac{8}{27} = \\frac{-27 - 36 - 48 - 64}{81} = -\\frac{175}{81}$ ✓. COUNTING A LATE WIN AS THE FULL PRIZE, $+2$, $+4$, or $+8$ instead of $+1$, gives $\\frac{27 + 36 + 48 + 64 - 240}{81} = -\\frac{65}{81}$; a winning bet only returns the stakes already lost plus one point ✗.',
    },
    {
      q: 'You bet $1$ point that a fair standard die shows a $6$; if it does not, you bet $2$ points on a second roll; if that also fails, you bet $4$ points on a third roll, and then the game ends. A winning bet pays a profit equal to the amount bet, a losing bet loses the amount bet, and the game ends at the first win. What is the probability that you end the game with more points than you started with?',
      answer: '$\\frac{91}{216}$',
      solution:
        'Track the three ways the game can end with a win. A $6$ on the first roll leaves $+1$ point, probability $\\frac{36}{216}$. A miss then a $6$ leaves $-1 + 2 = +1$, probability $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{30}{216}$. Two misses then a $6$ leaves $-1 - 2 + 4 = +1$, probability $\\frac{25}{216}$. Every one of these ends ahead, and the only other ending, three misses, leaves $-7$ points; since $36 + 30 + 25 + 125 = 216$, the branches total $1$ ✓, and the chance of ending ahead is $\\frac{36 + 30 + 25}{216} = \\frac{91}{216}$ ✓. A second route works from the losing side: ending ahead fails only when all three rolls miss the $6$, which happens with probability $\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$, so the answer is $1 - \\frac{125}{216} = \\frac{91}{216}$ ✓. ADDING $\\frac{1}{6}$ ONCE PER ROLL gives $\\frac{1}{2}$; the second and third rolls happen only if the earlier ones missed, so their chances are $\\frac{5}{36}$ and $\\frac{25}{216}$, not $\\frac{1}{6}$ each ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 11,
  worksheet,
}
