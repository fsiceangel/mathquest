// Counting chapter 11 — variations for the challenge set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Challenge items are multiple choice: a question, four `choices`, an
//    `answer` INDEX, and a solution. The index is derived from the base
//    problem’s index b, never chosen: v1 = (b+1)%4, v2 = (b+3)%4,
//    v3 = (b+2)%4. Base indices: 1 2 0 3 2 1 0 3 1 0 2 3, so the rows are
//    v1: 2 3 1 0 3 2 1 0 2 1 3 0
//    v2: 0 1 3 2 1 0 3 2 0 3 1 2
//    v3: 3 0 2 1 0 3 2 1 3 2 0 1
//  - Every key was computed exactly in node before any stem was written, with
//    BigInt rationals and no floating point: full outcome distributions
//    (all 64 and 216 die tuples, all C(n,k) hands, every branch of every
//    stopping tree), and every tree’s branch probabilities were checked to
//    total exactly 1. Unknowns in the reversed items (prizes, fees, counts,
//    probabilities) were found by exhaustive search over the candidate range
//    against the enumerated expectation. Every money key is an exact number of
//    cents. Every key matches its pin. Pin deviations: none. Six stems were
//    re-dressed away from the pin’s suggested surface (slot 2 v2, slot 3 v1
//    and v2, slot 4 v2, slot 6 v1, slot 9 v1) because each shared its
//    apparatus and statistic with a base challenge problem or with a
//    same-round item in another ch11 variation file; every key is unchanged.
//  - Every distractor is a real slip whose value was computed in node, so each
//    attribution is arithmetically true, not a guess.
//  - Every solution runs two genuinely independent routes that each end ✓ —
//    typically one that conditions or uses linearity, and one that builds the
//    whole distribution or enumerates the full record space and counts. Where
//    route one leans on linearity of expectation, route two never reuses it:
//    it grinds out the distribution instead, and never re-imports route one’s
//    number. Each wrong choice’s trap is then named in CAPS, ending ✗, and the
//    traps are listed in choice order.
//  - Challenge variations stay as hard as the base problems they replace.
//  - Conventions are settled in every stem: dice, coins, spinners, and wheels
//    are fair; draws say with or without replacement; every entry cost says
//    that it is paid up front and not returned; every multi-stage game says
//    when it stops; and "fair game" is defined as an expected net gain of zero.

const challenge = [
  // slot 1 — a two-stage payout, one branch a sub-game (conditioning vs. the
  //          full payout distribution). Lanes: die parity into a coin;
  //          token color into a spinner; reversed: find the flat branch.
  [
    {
      q: 'You roll a standard die. If it shows an even number you flip a fair coin and receive $\\$6$ for heads or $\\$2$ for tails; if it shows an odd number you receive $\\$5$. The game costs nothing to play. What is the expected payout?',
      choices: ['$\\$5.50$', '$\\$4.00$', '$\\$4.50$', '$\\$2.00$'],
      answer: 2,
      solution:
        'Condition on the die. An even roll comes up with probability $\\frac{1}{2}$ and hands you a coin worth $\\frac{1}{2} \\cdot 6 + \\frac{1}{2} \\cdot 2 = 4$ dollars; an odd roll comes up with probability $\\frac{1}{2}$ and pays $5$. So the expected payout is $\\frac{1}{2} \\cdot 4 + \\frac{1}{2} \\cdot 5 = 2 + \\frac{5}{2} = \\frac{9}{2} = \\$4.50$ ✓. Building the payout distribution instead agrees. Only three amounts can be paid: $\\$6$ needs an even roll and heads, probability $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$; $\\$2$ needs an even roll and tails, also $\\frac{1}{4}$; and $\\$5$ needs an odd roll, probability $\\frac{1}{2}$. Those add to $\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{2} = 1$, so nothing is missing, and the expected payout is $6 \\cdot \\frac{1}{4} + 2 \\cdot \\frac{1}{4} + 5 \\cdot \\frac{1}{2} = \\frac{3}{2} + \\frac{1}{2} + \\frac{5}{2} = \\frac{9}{2}$ ✓. READING THE COIN AS ALWAYS HEADS pays $\\$6$ on every even roll and gives $\\frac{1}{2} \\cdot 6 + \\frac{1}{2} \\cdot 5 = \\$5.50$ ✗. STOPPING AT THE COIN’S OWN AVERAGE reports $\\frac{1}{2} \\cdot 6 + \\frac{1}{2} \\cdot 2 = \\$4.00$, which is what the even branch is worth and never weighs it against the odd branch ✗. HALVING ONLY THE COIN BRANCH gives $\\frac{1}{2} \\cdot 4 = \\$2.00$ and drops the odd rolls, which are half of all plays ✗.',
    },
    {
      q: 'A bag holds $3$ red and $5$ blue tokens. You draw one at random: if it is red you spin a spinner with four equal sectors marked $2$, $4$, $6$, $8$ and receive that many points; if it is blue you receive $3$ points. The game costs nothing to play. What is the expected number of points?',
      choices: ['$\\frac{15}{4}$', '$4$', '$5$', '$\\frac{23}{5}$'],
      answer: 0,
      solution:
        'Condition on the color drawn. A red token comes up with probability $\\frac{3}{8}$ and hands you a spinner worth $\\frac{2 + 4 + 6 + 8}{4} = 5$ points; a blue token comes up with probability $\\frac{5}{8}$ and pays $3$. So the expected score is $\\frac{3}{8} \\cdot 5 + \\frac{5}{8} \\cdot 3 = \\frac{15}{8} + \\frac{15}{8} = \\frac{30}{8} = \\frac{15}{4}$ ✓. Enumerating the whole experiment agrees. Read one play as a record (token, sector), spinning even after a blue token so that every record is equally likely: there are $8 \\cdot 4 = 32$ of them. The $3 \\cdot 4 = 12$ red records split evenly among the four sector values, so each of $2$, $4$, $6$, $8$ is paid in $3$ records, and the $5 \\cdot 4 = 20$ blue records all pay $3$; $12 + 20 = 32$, so every record is accounted for. The expected score is $\\frac{3(2 + 4 + 6 + 8) + 20 \\cdot 3}{32} = \\frac{60 + 60}{32} = \\frac{120}{32} = \\frac{15}{4}$ ✓. AVERAGING THE TWO BRANCH VALUES as $\\frac{5 + 3}{2} = 4$ treats red and blue as equally likely, but blue is the likelier draw and drags the answer down ✗. REPORTING THE SPINNER’S OWN AVERAGE, $5$, prices the red branch alone and ignores the $5$ blue tokens ✗. TREATING THE FIVE NUMBERS $2, 4, 6, 8, 3$ AS EQUALLY LIKELY gives $\\frac{2 + 4 + 6 + 8 + 3}{5} = \\frac{23}{5}$, but a blue token is far likelier than any one sector ✗.',
    },
    {
      q: 'You flip a fair coin. If it lands heads you roll a standard die and receive that many dollars; if it lands tails you receive $\\$t$. The game costs nothing to play, and the expected payout is $\\$3.25$. What is $t$?',
      choices: ['$\\$1.50$', '$\\$3.50$', '$\\$6.50$', '$\\$3.00$'],
      answer: 3,
      solution:
        'Condition on the coin. Heads has probability $\\frac{1}{2}$ and hands you a die worth $\\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{7}{2}$ dollars; tails has probability $\\frac{1}{2}$ and pays $t$. So $\\frac{1}{2} \\cdot \\frac{7}{2} + \\frac{1}{2} t = \\frac{13}{4}$, giving $\\frac{t}{2} = \\frac{13}{4} - \\frac{7}{4} = \\frac{3}{2}$ and $t = 3$, that is $\\$3.00$ ✓. Counting dollars over a full cycle agrees. Imagine $12$ plays that come out perfectly average: six are heads, showing each face once, and six are tails. The player collects $1 + 2 + 3 + 4 + 5 + 6 = 21$ dollars from the heads plays and $6t$ from the tails plays, and the total must be $12 \\cdot \\frac{13}{4} = 39$ dollars. So $21 + 6t = 39$, $6t = 18$, and $t = 3$, that is $\\$3.00$ ✓. FORGETTING TO HALVE THE TAILS PAYMENT solves $\\frac{7}{4} + t = \\frac{13}{4}$ and reports $\\$1.50$, which would be right only if tails paid on every play ✗. USING $3$ FOR THE DIE’S AVERAGE, as though the middle of $1$ through $6$ were a face, solves $\\frac{1}{2} \\cdot 3 + \\frac{t}{2} = \\frac{13}{4}$ and gets $\\$3.50$ ✗. DROPPING THE HEADS BRANCH treats the whole $\\$3.25$ as coming from tails alone and doubles it to $\\$6.50$ ✗.',
    },
  ],

  // slot 2 — entry fee against a three-outcome payout (payout-minus-fee vs.
  //          the distribution of the net). Lanes: wheel; shelf of sealed
  //          boxes; reversed: the fair fee.
  [
    {
      q: 'A game costs $\\$6$ to play, paid up front and not returned. A wheel then pays $\\$25$ with probability $\\frac{1}{5}$, pays $\\$8$ with probability $\\frac{3}{20}$, and pays nothing otherwise. What is the expected net gain for the player, per play?',
      choices: ['$\\$6.20$', '$-\\$1.00$', '$\\$4.10$', '$\\$0.20$'],
      answer: 3,
      solution:
        'Price the payout first, then charge the fee. The expected payout is $25 \\cdot \\frac{1}{5} + 8 \\cdot \\frac{3}{20} + 0 = 5 + \\frac{6}{5} = \\frac{31}{5} = \\$6.20$, and the fee is paid on every play, so the expected net gain is $6.20 - 6 = \\$0.20$ ✓. Working with the net outcome directly agrees. The wheel pays nothing with probability $1 - \\frac{1}{5} - \\frac{3}{20} = \\frac{13}{20}$, so in twentieths the three nets are $+19$ with probability $\\frac{4}{20}$, $+2$ with probability $\\frac{3}{20}$, and $-6$ with probability $\\frac{13}{20}$; the three add to $\\frac{20}{20} = 1$. The expected net is $\\frac{4 \\cdot 19 + 3 \\cdot 2 + 13 \\cdot (-6)}{20} = \\frac{76 + 6 - 78}{20} = \\frac{4}{20} = \\frac{1}{5} = \\$0.20$ ✓. STOPPING AT THE EXPECTED PAYOUT reports $\\$6.20$ and never subtracts the fee the player hands over every time ✗. KEEPING ONLY THE BIG PRIZE gives $25 \\cdot \\frac{1}{5} - 6 = -\\$1.00$ and throws away the three plays in twenty that pay $\\$8$ ✗. SUBTRACTING THE FEE ONLY WHEN THE WHEEL PAYS gives $(25 - 6) \\cdot \\frac{1}{5} + (8 - 6) \\cdot \\frac{3}{20} = 3.80 + 0.30 = \\$4.10$ and lets the thirteen blank plays in twenty cost the player nothing ✗.',
    },
    {
      q: 'A game costs $\\$5$ to play, paid up front and not returned. Twenty sealed boxes sit on a shelf: three of them hold a $\\$20$ voucher, four hold a $\\$7$ voucher, and the other thirteen are empty. You then open one box at random. What is the expected net gain for the player, per play?',
      choices: ['$\\$4.40$', '$-\\$0.60$', '$\\$4.00$', '$\\$2.65$'],
      answer: 1,
      solution:
        'Price the payout first, then charge the fee. Every box is equally likely, so the expected payout is $\\frac{3 \\cdot 20 + 4 \\cdot 7 + 13 \\cdot 0}{20} = \\frac{88}{20} = \\frac{22}{5} = \\$4.40$, and the fee comes off every play, so the expected net gain is $4.40 - 5 = -\\$0.60$ ✓. Working with the net outcome directly agrees. Attach a net to each box: the three big boxes net $+15$, the four small ones net $+2$, and the thirteen empties net $-5$; the counts $3 + 4 + 13 = 20$ cover the shelf, so the probabilities $\\frac{3}{20}$, $\\frac{4}{20}$, $\\frac{13}{20}$ add to $1$. The expected net is $\\frac{3 \\cdot 15 + 4 \\cdot 2 + 13 \\cdot (-5)}{20} = \\frac{45 + 8 - 65}{20} = -\\frac{12}{20} = -\\frac{3}{5} = -\\$0.60$ ✓. STOPPING AT THE EXPECTED PAYOUT reports $\\$4.40$ and forgets the fee the player hands over every time ✗. TREATING THE THREE KINDS OF BOX AS EQUALLY LIKELY averages the payouts as $\\frac{20 + 7 + 0}{3} = 9$ and reports $9 - 5 = \\$4.00$, but the empties outnumber the two prize kinds together ✗. SUBTRACTING THE FEE ONLY WHEN YOU WIN gives $\\frac{3 \\cdot 15 + 4 \\cdot 2}{20} = \\frac{53}{20} = \\$2.65$ and lets the thirteen empty boxes cost the player nothing ✗.',
    },
    {
      q: 'A wheel pays $\\$10$ with probability $\\frac{1}{5}$, pays $\\$3$ with probability $\\frac{3}{10}$, and pays nothing otherwise. A fair game is one whose expected net gain for the player is $\\$0$. What entry fee, paid up front and not returned, makes this game fair?',
      choices: ['$\\$2.90$', '$\\$5.80$', '$\\$2.30$', '$\\$2.00$'],
      answer: 0,
      solution:
        'A fee $f$ is charged on every play, so the expected net gain is the expected payout minus $f$, and fairness means $f$ equals the expected payout. That payout is $10 \\cdot \\frac{1}{5} + 3 \\cdot \\frac{3}{10} + 0 \\cdot \\frac{1}{2} = 2 + \\frac{9}{10} = \\frac{29}{10} = \\$2.90$, so the fair fee is $\\$2.90$ ✓. Counting dollars over a full cycle agrees. In tenths the wheel pays $\\$10$ on $2$ plays out of $10$, $\\$3$ on $3$ plays, and nothing on the remaining $5$; those counts total $10$, so the cycle is complete. Over those $10$ plays the player collects $2 \\cdot 10 + 3 \\cdot 3 = 29$ dollars and hands over $10f$, and the game is fair when $10f = 29$, so $f = \\$2.90$ ✓. SPREADING THE $\\$29$ OVER THE WINNING PLAYS ONLY divides by the $5$ plays that pay something instead of all $10$, giving $\\$5.80$ ✗. READING $3 \\cdot \\frac{3}{10}$ AS $\\frac{3}{10}$ gives $2 + 0.30 = \\$2.30$ and prices the $\\$3$ branch as though it paid a dime ✗. KEEPING ONLY THE $\\$10$ BRANCH gives $10 \\cdot \\frac{1}{5} = \\$2.00$ and throws away the three plays in ten that pay $\\$3$ ✗.',
    },
  ],

  // slot 3 — expected count over independent trials (linearity vs. the full
  //          binomial distribution). Lanes: five draws from a three-bead jar;
  //          four students picking a prime; reversed: how many dice.
  [
    {
      q: 'A jar holds $2$ green beads and $1$ yellow bead. A bead is drawn at random, its color noted, and returned to the jar; this is done $5$ times, so the draws are independent. What is the expected number of green beads drawn?',
      choices: ['$\\frac{5}{2}$', '$\\frac{10}{3}$', '$\\frac{242}{243}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Use linearity of expectation. A single draw is green with probability $\\frac{2}{3}$, and the number of green draws is the sum of five such counts, one per draw, so the expected number is $5 \\cdot \\frac{2}{3} = \\frac{10}{3}$ ✓. Grinding out the whole distribution agrees, and uses no linearity at all. Because the bead goes back every time, a play is a string of $5$ named beads and all $3^5 = 243$ strings are equally likely. Exactly $k$ draws are green in $\\binom{5}{k} 2^k$ of them: choose which $k$ draws are green, then fill each of those slots with either green bead while every other slot takes the lone yellow one. The counts for $k = 0$ through $5$ are $1, 10, 40, 80, 80, 32$, and they add to $243$, so nothing is missing. The expected count is $\\frac{0 \\cdot 1 + 1 \\cdot 10 + 2 \\cdot 40 + 3 \\cdot 80 + 4 \\cdot 80 + 5 \\cdot 32}{243} = \\frac{10 + 80 + 240 + 320 + 160}{243} = \\frac{810}{243} = \\frac{10}{3}$ ✓. COUNTING COLORS RATHER THAN BEADS uses $p = \\frac{1}{2}$, since the jar shows two colors, and gives $5 \\cdot \\frac{1}{2} = \\frac{5}{2}$; the draw picks a bead, and two of the three beads are green ✗. COMPUTING $1 - \\left(\\frac{1}{3}\\right)^5 = \\frac{242}{243}$ answers the probability that at least one draw is green, a chance rather than a count ✗. REPORTING $\\frac{2}{3}$ prices one draw and never multiplies by the five draws made ✗.',
    },
    {
      q: 'Each of $4$ students independently picks one of the numbers $1$ through $10$, every number equally likely. What is the expected number of students who pick a prime number?',
      choices: ['$2$', '$\\frac{2}{5}$', '$\\frac{544}{625}$', '$\\frac{8}{5}$'],
      answer: 3,
      solution:
        'Use linearity of expectation. The primes from $1$ to $10$ are $2$, $3$, $5$, and $7$, so one student picks a prime with probability $\\frac{4}{10} = \\frac{2}{5}$, and four students give $4 \\cdot \\frac{2}{5} = \\frac{8}{5}$ ✓. Grinding out the whole distribution agrees. Record only which kind of number each student picked, giving a prime weight $2$ and a non-prime weight $3$ so that the reduced records stay equally likely out of $5$ apiece: exactly $k$ students pick a prime in $\\binom{4}{k} 2^k 3^{4-k}$ of the $5^4 = 625$ equally likely reduced records. The counts for $k = 0$ through $4$ are $81, 216, 216, 96, 16$, adding to $625$. The expected count is $\\frac{1 \\cdot 216 + 2 \\cdot 216 + 3 \\cdot 96 + 4 \\cdot 16}{625} = \\frac{216 + 432 + 288 + 64}{625} = \\frac{1000}{625} = \\frac{8}{5}$ ✓. COUNTING $1$ AS A PRIME makes five of the ten numbers prime and gives $4 \\cdot \\frac{1}{2} = 2$; the number $1$ has only one divisor, so it is not prime ✗. REPORTING $\\frac{2}{5}$ prices one student and never multiplies by the four students ✗. COMPUTING $1 - \\left(\\frac{3}{5}\\right)^4 = \\frac{544}{625}$ answers the probability that at least one student picks a prime, a chance rather than a count ✗.',
    },
    {
      q: '$n$ standard dice are rolled, and the expected number of dice showing a prime number is $\\frac{7}{2}$. What is $n$?',
      choices: ['$\\frac{21}{2}$', '$\\frac{7}{2}$', '$7$', '$21$'],
      answer: 2,
      solution:
        'Use linearity of expectation. The primes on a die are $2$, $3$, and $5$, so a single die shows a prime with probability $\\frac{3}{6} = \\frac{1}{2}$, and $n$ dice give an expected count of $\\frac{n}{2}$. Setting $\\frac{n}{2} = \\frac{7}{2}$ gives $n = 7$ ✓. Testing candidates against the full distribution agrees. Since exactly $3$ of the $6$ faces are prime, each die is prime or not with equal weight, so the $2^n$ prime-or-not patterns are all equally likely and exactly $k$ dice are prime in $\\binom{n}{k}$ of them. The expected count is $\\frac{\\sum_k k \\binom{n}{k}}{2^n} = \\frac{n \\cdot 2^{n-1}}{2^n}$, which grows by $\\frac{1}{2}$ every time $n$ grows by $1$, so at most one $n$ can work. For $n = 7$ the sum $\\sum_k k \\binom{7}{k} = 7 \\cdot 64 = 448$ over $2^7 = 128$ patterns gives $\\frac{448}{128} = \\frac{7}{2}$, so $n = 7$ is the one ✓. FORGETTING THAT $2$ IS PRIME leaves only $3$ and $5$, uses $p = \\frac{1}{3}$, and solves $\\frac{n}{3} = \\frac{7}{2}$ for $\\frac{21}{2}$, which is not even a whole number of dice ✗. ECHOING THE GIVEN EXPECTATION answers $\\frac{7}{2}$, confusing the average number of primes with the number of dice ✗. REPORTING $21$ counts the prime FACES carried by the seven dice, $3$ apiece, not the dice ✗.',
    },
  ],

  // slot 4 — an unknown inside a fixed expectation (solve the equation vs. a
  //          full cycle of typical plays / balancing deviations). Lanes:
  //          missing prize; missing slip value; reversed: missing probability.
  [
    {
      q: 'A prize wheel pays $\\$12$ with probability $\\frac{1}{4}$, $\\$6$ with probability $\\frac{1}{3}$, and $\\$x$ with probability $\\frac{5}{12}$. The game costs nothing to play, and the expected payout is exactly $\\$8$. What is $x$?',
      choices: ['$\\$7.20$', '$\\$6.00$', '$\\$3.00$', '$\\$1.25$'],
      answer: 0,
      solution:
        'Set up the expectation. In twelfths the three probabilities are $\\frac{3}{12}$, $\\frac{4}{12}$, and $\\frac{5}{12}$, which add to $1$, so the wheel has no fourth outcome. Then $12 \\cdot \\frac{1}{4} + 6 \\cdot \\frac{1}{3} + x \\cdot \\frac{5}{12} = 8$ becomes $3 + 2 + \\frac{5x}{12} = 8$, so $\\frac{5x}{12} = 3$ and $x = \\frac{36}{5} = \\$7.20$ ✓. Counting dollars over a full cycle agrees. Take $12$ plays that come out perfectly average: $3$ pay $\\$12$ for $\\$36$, $4$ pay $\\$6$ for $\\$24$, and $5$ pay $\\$x$. An average of $\\$8$ over $12$ plays means the cycle hands the player $\\$96$ in all, so $5x = 96 - 60 = 36$ and $x = \\$7.20$ ✓. TREATING THE THREE PRIZES AS EQUALLY LIKELY solves $\\frac{12 + 6 + x}{3} = 8$ for $\\$6.00$, but the $\\$x$ sector is the biggest of the three ✗. STOPPING AT $\\frac{5x}{12} = 3$ and calling the prize $\\$3.00$ reports what the unknown sector contributes to the average, not what it pays ✗. MULTIPLYING BY $\\frac{5}{12}$ INSTEAD OF DIVIDING gives $3 \\cdot \\frac{5}{12} = \\$1.25$ ✗.',
    },
    {
      q: 'Ten prize slips are folded and dropped into a bowl: three read $12$ points, two read $2$ points, and the other five read $y$ points. One slip is pulled out at random, and the expected number of points on it is $8$. What is $y$?',
      choices: ['$10$', '$16$', '$8$', '$40$'],
      answer: 2,
      solution:
        'Set up the expectation. Every slip is equally likely, so $\\frac{3 \\cdot 12 + 2 \\cdot 2 + 5y}{10} = 8$, giving $36 + 4 + 5y = 80$, then $5y = 40$ and $y = 8$ ✓. Balancing the deviations from the average agrees, and never writes that equation. Measure each slip against the target of $8$: each $12$ is $+4$ and there are three of them, for $+12$ in all; each $2$ is $-6$ and there are two of them, for $-12$. Those cancel exactly, so the five remaining slips must together be $0$ away from $8$, and since they all read the same number that number must be $8$ itself ✓. AVERAGING THE THREE NUMBERS solves $\\frac{12 + 2 + y}{3} = 8$ for $10$, but they appear on $3$, $2$, and $5$ slips, not on one each ✗. FORGETTING THE POINTS ALREADY IN THE BOWL solves $5y = 80$ for $16$ and never subtracts the $40$ points carried by the other five slips ✗. FORGETTING THE FIVE COPIES solves $40 + y = 80$ for $40$, pricing the unknown number as though only one slip carried it ✗.',
    },
    {
      q: 'A wheel pays $\\$10$ with probability $p$ and pays $\\$2$ otherwise. The game costs nothing to play, and the expected payout is $\\$4.50$. What is $p$?',
      choices: ['$\\frac{9}{20}$', '$\\frac{5}{16}$', '$\\frac{1}{4}$', '$\\frac{3}{8}$'],
      answer: 1,
      solution:
        'Set up the expectation. The two outcomes have probabilities $p$ and $1 - p$, which add to $1$, so $10p + 2(1 - p) = \\frac{9}{2}$ becomes $8p + 2 = \\frac{9}{2}$, then $8p = \\frac{5}{2}$ and $p = \\frac{5}{16}$ ✓. Counting dollars over a cycle of $16$ plays agrees. Suppose $k$ of $16$ typical plays pay $\\$10$ and the other $16 - k$ pay $\\$2$; the player collects $10k + 2(16 - k) = 8k + 32$ dollars, and an average of $\\$4.50$ over $16$ plays means $\\$72$ in all. So $8k = 40$, $k = 5$, and the probability is $\\frac{5}{16}$; checking, $5$ plays at $\\$10$ and $11$ at $\\$2$ do total $50 + 22 = 72$ dollars ✓. IGNORING THE $\\$2$ BRANCH solves $10p = \\frac{9}{2}$ for $\\frac{9}{20}$, as though a loss paid nothing ✗. SUBTRACTING THE $\\$2$ AND THEN DIVIDING BY $10$ gives $\\frac{2.5}{10} = \\frac{1}{4}$; once the $\\$2$ floor is removed, the extra a win brings is $\\$8$, not $\\$10$ ✗. DIVIDING BY THE PRIZE TOTAL computes $\\frac{4.5}{10 + 2} = \\frac{3}{8}$, which mixes the two prizes into one denominator that means nothing here ✗.',
    },
  ],

  // slot 5 — expected sum of a hand drawn without replacement (linearity vs.
  //          a full enumeration of the hands). Lanes: three of seven cards;
  //          two of six prime tiles; derived: the cards left behind.
  [
    {
      q: 'Seven cards are numbered $1$ through $7$. Three are drawn at random without replacement. What is the expected value of the sum of the three numbers?',
      choices: ['$4$', '$\\frac{21}{2}$', '$28$', '$12$'],
      answer: 3,
      solution:
        'Use linearity of expectation. Whatever has happened before it, each of the three draws is equally likely to be any of the seven cards, so each draw has expected value $\\frac{1 + 2 + 3 + 4 + 5 + 6 + 7}{7} = \\frac{28}{7} = 4$. Expectations add even when the draws interfere with one another, so the expected sum is $3 \\cdot 4 = 12$ ✓. Enumerating the hands agrees, with no appeal to linearity. There are $\\binom{7}{3} = 35$ equally likely hands. A given card sits in $\\binom{6}{2} = 15$ of them, since the other two cards come from the remaining six, so across all $35$ hands each card is counted $15$ times and the hand sums total $15 \\cdot 28 = 420$. The average is $\\frac{420}{35} = 12$ ✓. REPORTING $4$ prices a single card and never triples it ✗. USING $\\frac{7}{2}$ FOR A CARD’S AVERAGE borrows a standard die’s expected value and gives $3 \\cdot \\frac{7}{2} = \\frac{21}{2}$, but these cards run to $7$, so their average is $4$ ✗. REPORTING $28$ adds all seven cards and forgets that only three are drawn ✗.',
    },
    {
      q: 'Six tiles are marked $2$, $3$, $5$, $7$, $11$, $13$. Two are drawn at random without replacement. What is the expected value of the sum of the two numbers?',
      choices: ['$\\frac{41}{6}$', '$\\frac{41}{3}$', '$\\frac{29}{2}$', '$41$'],
      answer: 1,
      solution:
        'Use linearity of expectation. The six tiles total $2 + 3 + 5 + 7 + 11 + 13 = 41$, so each draw on its own is equally likely to be any tile and has expected value $\\frac{41}{6}$. Expectations add, so the sum of the two draws has expected value $2 \\cdot \\frac{41}{6} = \\frac{41}{3}$ ✓. Enumerating the pairs agrees, with no appeal to linearity. There are $\\binom{6}{2} = 15$ equally likely pairs, and each tile is paired with each of the other five, so each tile appears in exactly $5$ pairs. The $15$ pair sums therefore total $5 \\cdot 41 = 205$, and the average is $\\frac{205}{15} = \\frac{41}{3}$ ✓. REPORTING $\\frac{41}{6}$ prices a single tile and never doubles it ✗. SPLITTING THE DIFFERENCE BETWEEN THE EXTREME SUMS averages the smallest pair sum $2 + 3 = 5$ and the largest $11 + 13 = 24$ to get $\\frac{29}{2}$, but the middling pairs are far more numerous than the extreme ones ✗. REPORTING $41$ adds all six tiles and forgets that only two are drawn ✗.',
    },
    {
      q: 'Five cards are numbered $1$ through $5$. Two are drawn at random without replacement. What is the expected value of the sum of the three cards left behind?',
      choices: ['$9$', '$6$', '$12$', '$15$'],
      answer: 0,
      solution:
        'Work from the whole pile. The five cards total $1 + 2 + 3 + 4 + 5 = 15$, a fixed number, so the sum left behind is $15$ minus the sum drawn. Each draw is equally likely to be any card and so has expected value $\\frac{15}{5} = 3$; by linearity the two drawn cards have expected sum $2 \\cdot 3 = 6$, and the cards left behind have expected sum $15 - 6 = 9$ ✓. Enumerating what stays agrees, and never prices the cards drawn. The three cards left behind form one of the $\\binom{5}{3} = 10$ equally likely triples. A given card belongs to $\\binom{4}{2} = 6$ of those triples, so across all $10$ triples the sums total $6 \\cdot 15 = 90$ and the average is $\\frac{90}{10} = 9$ ✓. REPORTING $6$ answers for the two cards DRAWN rather than the three left behind ✗. SUBTRACTING ONE CARD’S AVERAGE gives $15 - 3 = 12$ and forgets that two cards leave the pile ✗. REPORTING $15$ is the whole pile, as though nothing had been drawn ✗.',
    },
  ],

  // slot 6 — expected gap between two numbers (count by difference vs. tail
  //          sums / expanding the square). Lanes: an eight-sector spinner spun
  //          twice; two of six cards; derived: the squared difference.
  [
    {
      q: 'A spinner has eight equal sectors numbered $1$ through $8$. It is spun twice, the two spins independent. What is the expected value of the positive difference between the two numbers? (Two matching spins have difference $0$.)',
      choices: ['$\\frac{7}{2}$', '$3$', '$\\frac{21}{8}$', '$0$'],
      answer: 2,
      solution:
        'Sort the $64$ equally likely ordered pairs of spins by their difference. Eight pairs tie, and for each $d$ from $1$ to $7$ the difference is $d$ in $2(8 - d)$ pairs, since the smaller number can be anything from $1$ to $8 - d$ and either spin can be the larger: $14, 12, 10, 8, 6, 4, 2$. The counts total $8 + 14 + 12 + 10 + 8 + 6 + 4 + 2 = 64$, so every pair is sorted. The differences total $1 \\cdot 14 + 2 \\cdot 12 + 3 \\cdot 10 + 4 \\cdot 8 + 5 \\cdot 6 + 6 \\cdot 4 + 7 \\cdot 2 = 168$, and the expected difference is $\\frac{168}{64} = \\frac{21}{8}$ ✓. Adding up tail probabilities agrees. For a whole-number quantity, the expected value equals $P(\\text{difference} \\geq 1) + P(\\text{difference} \\geq 2) + \\cdots$, because a difference of $d$ is counted once by each of the first $d$ terms. The pairs with difference at least $d$ number $(8 - d)(9 - d)$: that is $56, 42, 30, 20, 12, 6, 2$ for $d = 1$ through $7$, and $\\frac{56 + 42 + 30 + 20 + 12 + 6 + 2}{64} = \\frac{168}{64} = \\frac{21}{8}$ ✓. AVERAGING THE EIGHT POSSIBLE DIFFERENCES $0$ THROUGH $7$ gives $\\frac{7}{2}$, but small differences happen far more often than large ones ✗. THROWING OUT THE TIES divides by the $56$ pairs that differ instead of all $64$ and gives $\\frac{168}{56} = 3$; a tie is a legitimate pair with difference $0$ ✗. REPORTING $0$ prices the SIGNED difference, where the two spins cancel by symmetry, not the positive one ✗.',
    },
    {
      q: 'Two cards are drawn at random without replacement from six cards numbered $1$ through $6$. What is the expected value of the positive difference between the two numbers?',
      choices: ['$\\frac{7}{3}$', '$3$', '$\\frac{35}{18}$', '$\\frac{7}{6}$'],
      answer: 0,
      solution:
        'Sort the $\\binom{6}{2} = 15$ equally likely pairs by their difference. A difference of $d$ needs the smaller card to be one of $1$ through $6 - d$, so there are $6 - d$ such pairs: $5, 4, 3, 2, 1$ for $d = 1$ through $5$, totalling $15$ pairs, which is every pair. The differences total $1 \\cdot 5 + 2 \\cdot 4 + 3 \\cdot 3 + 4 \\cdot 2 + 5 \\cdot 1 = 35$, so the expected difference is $\\frac{35}{15} = \\frac{7}{3}$ ✓. Adding up tail probabilities agrees. The expected difference equals $P(\\text{difference} \\geq 1) + \\cdots + P(\\text{difference} \\geq 5)$, and the pairs at distance at least $d$ number $5 + 4 + \\cdots$ down from $6 - d$: that is $15, 10, 6, 3, 1$ out of $15$. Their sum is $\\frac{15 + 10 + 6 + 3 + 1}{15} = \\frac{35}{15} = \\frac{7}{3}$ ✓. AVERAGING THE FIVE POSSIBLE DIFFERENCES $1$ THROUGH $5$ gives $3$, but a difference of $1$ happens five times as often as a difference of $5$ ✗. ROLLING TWO DICE INSTEAD allows repeats and ties and gives $\\frac{35}{18}$; drawing without replacement removes the six tied outcomes, which drags the average up, not down ✗. DIVIDING THE $35$ BY $30$ counts the differences over unordered pairs but divides by the ordered draws, giving $\\frac{7}{6}$; the two counts must match ✗.',
    },
    {
      q: 'Two standard dice are rolled. What is the expected value of the square of the difference between the two numbers showing?',
      choices: ['$\\frac{55}{6}$', '$7$', '$\\frac{1225}{324}$', '$\\frac{35}{6}$'],
      answer: 3,
      solution:
        'Sort the $36$ equally likely rolls by the size of their difference. Six rolls tie, and a difference of size $d$ occurs in $2(6 - d)$ rolls: $10, 8, 6, 4, 2$ for $d = 1$ through $5$. The counts total $6 + 10 + 8 + 6 + 4 + 2 = 36$. Squaring, the total is $1 \\cdot 10 + 4 \\cdot 8 + 9 \\cdot 6 + 16 \\cdot 4 + 25 \\cdot 2 = 10 + 32 + 54 + 64 + 50 = 210$, so the expected square is $\\frac{210}{36} = \\frac{35}{6}$ ✓. Expanding the square agrees, and never sorts a single roll. Writing the two dice as $X$ and $Y$, $(X - Y)^2 = X^2 - 2XY + Y^2$. One die has $E[X^2] = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}$ and $E[X] = \\frac{7}{2}$, and the dice are independent, so $E[XY] = \\frac{7}{2} \\cdot \\frac{7}{2} = \\frac{49}{4}$. Then the expected square is $\\frac{91}{6} - 2 \\cdot \\frac{49}{4} + \\frac{91}{6} = \\frac{91}{3} - \\frac{49}{2} = \\frac{182 - 147}{6} = \\frac{35}{6}$ ✓. AVERAGING THE SQUARES $0^2$ THROUGH $5^2$ gives $\\frac{0 + 1 + 4 + 9 + 16 + 25}{6} = \\frac{55}{6}$ and treats the six difference sizes as equally likely ✗. THROWING OUT THE TIES divides by the $30$ rolls that differ instead of all $36$ and gives $\\frac{210}{30} = 7$ ✗. SQUARING THE EXPECTED DIFFERENCE computes $\\left(\\frac{35}{18}\\right)^2 = \\frac{1225}{324}$; the expected square of a spread-out quantity is larger than the square of its expectation ✗.',
    },
  ],

  // slot 7 — a block of raffle tickets (per-ticket linearity vs. the full
  //          distribution of the purchase). Lanes: 8 of 400 for one prize;
  //          6 of 60 for two prizes; reversed: how many tickets.
  [
    {
      q: 'A raffle sells exactly $400$ tickets at $\\$2$ each, and one ticket drawn at random wins $\\$500$. Omar buys $8$ tickets. What is his expected net gain?',
      choices: ['$-\\$0.75$', '$-\\$6.00$', '$\\$10.00$', '$\\$8.00$'],
      answer: 1,
      solution:
        'Price one ticket and multiply. Each ticket is equally likely to be the winner, so a single ticket has expected payout $\\frac{500}{400} = \\$1.25$ against a cost of $\\$2$, a net of $-\\$0.75$. Expected values add, so eight tickets give $8 \\cdot (-0.75) = -\\$6.00$ ✓. Building the distribution of the whole purchase agrees. Omar holds the winning ticket with probability $\\frac{8}{400} = \\frac{1}{50}$, and then he collects $\\$500$ having spent $8 \\cdot 2 = \\$16$, netting $\\$484$; otherwise, with probability $\\frac{49}{50}$, he nets $-\\$16$. The two probabilities add to $1$, and the expected net is $\\frac{484 - 49 \\cdot 16}{50} = \\frac{484 - 784}{50} = -\\frac{300}{50} = -\\$6.00$ ✓. REPORTING $-\\$0.75$ answers for a single ticket, but Omar bought eight ✗. REPORTING $\\$10.00$ is the expected payout $500 \\cdot \\frac{8}{400}$ with the $\\$16$ he spent never subtracted ✗. SUBTRACTING ONE TICKET’S PRICE gives $10 - 2 = \\$8.00$ and charges him for a single ticket while paying him for eight ✗.',
    },
    {
      q: 'A club sells exactly $60$ chances at $\\$3$ each. Two different chances are drawn at random, and each one wins $\\$40$. Rina buys $6$ chances. What is her expected net gain?',
      choices: ['$\\$8.00$', '$-\\$14.00$', '$\\$5.00$', '$-\\$10.00$'],
      answer: 3,
      solution:
        'Use linearity across the two prize draws. Each of the two winning chances is equally likely to be any of the $60$, so each lands on one of Rina’s six with probability $\\frac{6}{60} = \\frac{1}{10}$; the expected number of her chances that win is $2 \\cdot \\frac{1}{10} = \\frac{1}{5}$, worth $40 \\cdot \\frac{1}{5} = \\$8$. She spent $6 \\cdot 3 = \\$18$, so her expected net gain is $8 - 18 = -\\$10.00$ ✓. Building the full distribution of her wins agrees. The two winners form one of $\\binom{60}{2} = 1770$ equally likely pairs. Both are hers in $\\binom{6}{2} = 15$ pairs, exactly one is hers in $6 \\cdot 54 = 324$ pairs, and neither is hers in $\\binom{54}{2} = 1431$ pairs; $15 + 324 + 1431 = 1770$, so every pair is placed. Her expected payout is $40 \\cdot \\frac{2 \\cdot 15 + 1 \\cdot 324}{1770} = 40 \\cdot \\frac{354}{1770} = \\$8$, and $8 - 18 = -\\$10.00$ ✓. REPORTING $\\$8.00$ is the expected payout with the $\\$18$ she spent never subtracted ✗. COUNTING ONLY ONE PRIZE gives $40 \\cdot \\frac{6}{60} - 18 = -\\$14.00$ and forgets that two chances are drawn ✗. SUBTRACTING ONE CHANCE’S PRICE gives $8 - 3 = \\$5.00$ and charges her for one chance while paying her for six ✗.',
    },
    {
      q: 'A raffle sells exactly $100$ tickets at $\\$1$ each, and one ticket drawn at random wins $\\$60$. How many tickets must a buyer purchase for the expected net gain to be $-\\$4$?',
      choices: ['$4$', '$\\frac{20}{3}$', '$10$', '$34$'],
      answer: 2,
      solution:
        'Price one ticket and scale. A single ticket wins with probability $\\frac{1}{100}$, so its expected payout is $\\frac{60}{100} = \\$0.60$ against a cost of $\\$1$, a net of $-\\$0.40$. Expected values add, so $k$ tickets have expected net gain $-0.40k$, and $-0.40k = -4$ gives $k = 10$ ✓. Building the distribution for a purchase of $k$ tickets agrees. With probability $\\frac{k}{100}$ the buyer holds the winner and nets $60 - k$ dollars; with probability $\\frac{100 - k}{100}$ the buyer nets $-k$. The two probabilities add to $1$, and the expected net is $\\frac{k(60 - k) + (100 - k)(-k)}{100} = \\frac{60k - k^2 - 100k + k^2}{100} = -\\frac{40k}{100}$. The $k^2$ terms cancel, so this is $-0.4k$, which equals $-4$ exactly when $k = 10$ ✓. ANSWERING $4$ treats each ticket as a straight $\\$1$ loss and ignores the prize the ticket buys a claim on ✗. SETTING THE PAYOUT RATHER THAN THE NET TO $\\$4$ solves $0.6k = 4$ for $\\frac{20}{3}$, which is not even a whole number of tickets ✗. TREATING WINNING AND LOSING AS EQUALLY LIKELY averages the two nets as $\\frac{(60 - k) + (-k)}{2} = -4$ and gives $34$, but a buyer with $34$ tickets wins far less than half the time ✗.',
    },
  ],

  // slot 8 — drawing until a marked item appears (full stopping distribution
  //          vs. symmetry over the items that must come first). Lanes: 3 red
  //          in 8 chips; two big cards in ten; derived: what is left behind.
  [
    {
      q: 'A bag holds $3$ red and $5$ white chips. Chips are drawn one at a time at random without replacement until a red chip appears, and then the drawing stops. What is the expected number of chips drawn?',
      choices: ['$\\frac{9}{4}$', '$\\frac{8}{3}$', '$\\frac{7}{2}$', '$\\frac{5}{4}$'],
      answer: 0,
      solution:
        'Build the full stopping distribution. The drawing stops on draw $1$ with probability $\\frac{3}{8}$; on draw $2$ with probability $\\frac{5}{8} \\cdot \\frac{3}{7} = \\frac{15}{56}$; on draw $3$ with $\\frac{5}{8} \\cdot \\frac{4}{7} \\cdot \\frac{3}{6} = \\frac{10}{56}$; on draw $4$ with $\\frac{5}{8} \\cdot \\frac{4}{7} \\cdot \\frac{3}{6} \\cdot \\frac{3}{5} = \\frac{6}{56}$; on draw $5$ with $\\frac{3}{56}$; and on draw $6$ with $\\frac{1}{56}$, which is forced, since five whites cannot outlast the reds any longer. In fifty-sixths those are $21, 15, 10, 6, 3, 1$, which add to $56$, so the tree is complete. The expected number of draws is $\\frac{1 \\cdot 21 + 2 \\cdot 15 + 3 \\cdot 10 + 4 \\cdot 6 + 5 \\cdot 3 + 6 \\cdot 1}{56} = \\frac{126}{56} = \\frac{9}{4}$ ✓. Counting the white chips by symmetry agrees, without touching that tree. Shuffle all eight chips into a random order. A particular white chip is drawn only if it comes before every red, that is, only if it is first among itself and the three reds; those four chips are in a random relative order, so that happens with probability $\\frac{1}{4}$. The five whites therefore contribute $5 \\cdot \\frac{1}{4} = \\frac{5}{4}$ chips on average, and the red chip that stops the drawing adds exactly $1$: $1 + \\frac{5}{4} = \\frac{9}{4}$ ✓. PUTTING THE CHIP BACK makes the wait $\\frac{1}{3/8} = \\frac{8}{3}$; without replacement the bag gets redder every time a white leaves, so the wait is shorter ✗. AVERAGING THE SIX POSSIBLE STOPPING POINTS $1$ THROUGH $6$ gives $\\frac{7}{2}$ and treats a six-draw wait as being as likely as stopping at once ✗. REPORTING $\\frac{5}{4}$ counts the white chips drawn and forgets the red chip that ends the drawing ✗.',
    },
    {
      q: 'Ten cards numbered $1$ through $10$ are shuffled, every order equally likely, and turned over one at a time until a card greater than $8$ appears, at which point the turning stops. What is the expected number of cards turned over?',
      choices: ['$5$', '$\\frac{8}{3}$', '$\\frac{11}{3}$', '$\\frac{11}{2}$'],
      answer: 2,
      solution:
        'Build the full stopping distribution from the positions of the two big cards. Only the $9$ and the $10$ can stop the turning, and their positions form one of $\\binom{10}{2} = 45$ equally likely pairs. The turning stops at position $k$ exactly when the earlier big card sits at $k$ and the other sits at one of the $10 - k$ later positions, so position $k$ is the stopping point in $10 - k$ pairs: $9, 8, 7, 6, 5, 4, 3, 2, 1$ for $k = 1$ through $9$, adding to $45$. The expected number turned over is $\\frac{1 \\cdot 9 + 2 \\cdot 8 + 3 \\cdot 7 + 4 \\cdot 6 + 5 \\cdot 5 + 6 \\cdot 4 + 7 \\cdot 3 + 8 \\cdot 2 + 9 \\cdot 1}{45} = \\frac{165}{45} = \\frac{11}{3}$ ✓. Counting the small cards by symmetry agrees, without touching those positions. A particular small card is turned over only if it comes before both big cards, that is, only if it is first among itself, the $9$, and the $10$; those three are in a random relative order, so that happens with probability $\\frac{1}{3}$. The eight small cards give $8 \\cdot \\frac{1}{3} = \\frac{8}{3}$ on average, and the big card that stops the turning adds $1$: $1 + \\frac{8}{3} = \\frac{11}{3}$ ✓. SHUFFLING THE CARD BACK EACH TIME makes the wait $\\frac{1}{2/10} = 5$, but a shuffled deck runs out of small cards while a reshuffled one never does ✗. REPORTING $\\frac{8}{3}$ counts the small cards turned over and forgets the big one that stops the turning ✗. USING ONLY THE $10$ AS A STOPPER leaves one special card among ten, and one card alone would be reached after $1 + 9 \\cdot \\frac{1}{2} = \\frac{11}{2}$ turns on average; the $9$ stops the turning too, and two stoppers arrive sooner than one ✗.',
    },
    {
      q: 'A bag holds $2$ gold and $3$ silver coins. Coins are drawn one at a time at random without replacement until a gold coin appears, and then the drawing stops. What is the expected number of coins still in the bag when the drawing stops?',
      choices: ['$2$', '$3$', '$4$', '$\\frac{5}{2}$'],
      answer: 1,
      solution:
        'Count the coins that stay, one at a time. The second gold coin is always still in the bag, because the drawing stops the moment the first gold appears, so it contributes $1$ for certain. A particular silver coin is still in the bag exactly when it comes after the first gold, that is, when it is not first among itself and the two golds; those three are in a random relative order, so it stays with probability $\\frac{2}{3}$. The expected number left is $1 + 3 \\cdot \\frac{2}{3} = 1 + 2 = 3$ ✓. Building the full stopping distribution agrees, and counts the coins that leave instead. The drawing stops on draw $1$ with probability $\\frac{2}{5}$; on draw $2$ with $\\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{3}{10}$; on draw $3$ with $\\frac{3}{5} \\cdot \\frac{2}{4} \\cdot \\frac{2}{3} = \\frac{2}{10}$; and on draw $4$ with $\\frac{3}{5} \\cdot \\frac{2}{4} \\cdot \\frac{1}{3} = \\frac{1}{10}$, which is forced, since three silvers cannot hold out longer. In tenths those are $4, 3, 2, 1$, adding to $10$. The coins left are $5$ minus the draws, so the expected number left is $\\frac{4 \\cdot 4 + 3 \\cdot 3 + 2 \\cdot 2 + 1 \\cdot 1}{10} = \\frac{16 + 9 + 4 + 1}{10} = \\frac{30}{10} = 3$ ✓. REPORTING $2$ answers the number of coins DRAWN, which is $5 - 3$, not the number left ✗. REPORTING $4$ assumes the very first coin is gold, so that exactly one coin ever leaves the bag ✗. AVERAGING THE FOUR POSSIBLE ANSWERS $4, 3, 2, 1$ gives $\\frac{5}{2}$ and treats a long wait as being as likely as an immediate stop ✗.',
    },
  ],

  // slot 9 — expected number of colors in a small handful (the full pair or
  //          triple count vs. linearity over the groups). Lanes: 2 of nine club
  //          members from three schools; 3 socks from 4 pairs; derived: 3 of
  //          2R2B2G.
  [
    {
      q: 'A club has nine members, three from each of three different schools. Two members are chosen at random, without replacement, to speak at an assembly. What is the expected number of different schools represented by the two speakers?',
      choices: ['$2$', '$\\frac{5}{3}$', '$\\frac{7}{4}$', '$\\frac{3}{4}$'],
      answer: 2,
      solution:
        'Build the whole distribution. Two speakers come from either $1$ school or $2$, and there are $\\binom{9}{2} = 36$ equally likely pairs. A pair from a single school takes two of that school’s three members, which can be done in $\\binom{3}{2} = 3$ ways for each of the three schools, so $9$ pairs share a school and the other $27$ split; $9 + 27 = 36$. The expected number of schools is $\\frac{1 \\cdot 9 + 2 \\cdot 27}{36} = \\frac{9 + 54}{36} = \\frac{63}{36} = \\frac{7}{4}$ ✓. Counting schools one at a time agrees, without sorting a single pair. The number of schools represented is the first school’s count plus the second’s plus the third’s, each of which is $1$ or $0$. A given school goes unrepresented when both speakers come from the six members elsewhere, which happens in $\\binom{6}{2} = 15$ of the $36$ pairs, so it is represented with probability $\\frac{21}{36} = \\frac{7}{12}$; the other two schools are the same by symmetry. The expected number of schools is $3 \\cdot \\frac{7}{12} = \\frac{7}{4}$ ✓. ANSWERING $2$ assumes the two speakers never share a school, but a quarter of the pairs do ✗. USING $\\frac{1}{3}$ FOR THE CHANCE OF A SHARED SCHOOL gives $1 \\cdot \\frac{1}{3} + 2 \\cdot \\frac{2}{3} = \\frac{5}{3}$; once the first speaker is fixed, only $2$ of the $8$ members left share a school, not $3$ of $9$ ✗. REPORTING $\\frac{3}{4}$ gives the probability that the two come from different schools rather than the expected number of schools ✗.',
    },
    {
      q: 'A drawer holds $4$ pairs of socks, each pair a different color, $8$ socks in all. Three socks are pulled out at random without replacement. What is the expected number of different colors among them?',
      choices: ['$\\frac{18}{7}$', '$3$', '$\\frac{37}{16}$', '$\\frac{9}{14}$'],
      answer: 0,
      solution:
        'Count colors one at a time. The number of colors present is a sum of four yes-or-no counts, one per color. A given color is missing exactly when all three socks come from the other six, which happens in $\\binom{6}{3} = 20$ of the $\\binom{8}{3} = 56$ equally likely triples, so that color appears with probability $\\frac{36}{56} = \\frac{9}{14}$. Adding over the four colors gives $4 \\cdot \\frac{9}{14} = \\frac{18}{7}$ ✓. Sorting the triples themselves agrees, with no appeal to linearity. Three socks from four pairs show either $2$ colors or $3$. They show $2$ when they contain a matched pair plus one other sock: $4$ choices of pair times $6$ remaining socks, or $24$ triples. They show $3$ when all three differ: $\\binom{4}{3} = 4$ choices of colors and $2$ socks per color, or $4 \\cdot 8 = 32$ triples. Since $24 + 32 = 56$, every triple is placed, and the expected number of colors is $\\frac{2 \\cdot 24 + 3 \\cdot 32}{56} = \\frac{48 + 96}{56} = \\frac{144}{56} = \\frac{18}{7}$ ✓. ANSWERING $3$ assumes no two socks ever match, but $24$ of the $56$ triples contain a pair ✗. TREATING EACH SOCK AS AN INDEPENDENT COLOR PICK computes $4\\left(1 - \\left(\\frac{3}{4}\\right)^3\\right) = \\frac{37}{16}$, which is the answer for socks drawn with replacement from an endless drawer ✗. REPORTING $\\frac{9}{14}$ stops at one color’s chance of appearing and never adds the four colors ✗.',
    },
    {
      q: 'A bag holds $2$ red, $2$ blue, and $2$ green marbles. Three are drawn at random without replacement. What is the expected number of different colors among them?',
      choices: ['$3$', '$\\frac{19}{9}$', '$\\frac{2}{5}$', '$\\frac{12}{5}$'],
      answer: 3,
      solution:
        'Count colors one at a time. A given color is missing exactly when all three marbles come from the other four, which happens in $\\binom{4}{3} = 4$ of the $\\binom{6}{3} = 20$ equally likely triples, so that color appears with probability $\\frac{16}{20} = \\frac{4}{5}$. Adding over the three colors gives $3 \\cdot \\frac{4}{5} = \\frac{12}{5}$ ✓. Sorting the triples themselves agrees, with no appeal to linearity. Three marbles from three pairs show either $2$ colors or $3$; with only two marbles per color, one color can never fill all three slots. They show $2$ when they contain a matched pair plus one other marble: $3$ choices of pair times $4$ remaining marbles, or $12$ triples. They show $3$ when they take one marble of each color: $2 \\cdot 2 \\cdot 2 = 8$ triples. Since $12 + 8 = 20$, every triple is placed, and the expected number of colors is $\\frac{2 \\cdot 12 + 3 \\cdot 8}{20} = \\frac{24 + 24}{20} = \\frac{48}{20} = \\frac{12}{5}$ ✓. ANSWERING $3$ assumes all three marbles differ, but $12$ of the $20$ triples carry a matched pair ✗. TREATING EACH DRAW AS AN INDEPENDENT COLOR PICK computes $3\\left(1 - \\left(\\frac{2}{3}\\right)^3\\right) = \\frac{19}{9}$, the answer for draws with replacement ✗. REPORTING $\\frac{2}{5}$ gives the probability of seeing all three colors, $\\frac{8}{20}$, rather than the expected number ✗.',
    },
  ],

  // slot 10 — a two-stage game with three first-stage branches (enumerating
  //           the record space vs. valuing the sub-game). Lanes: die at $5$;
  //           ten cards at $3$; reversed: the fair prize.
  [
    {
      q: 'A game costs $\\$5$ to play, paid up front and not returned. You roll a standard die: a $5$ or $6$ wins $\\$18$ and ends the game, a $1$ or $2$ ends the game with no prize, and a $3$ or $4$ lets you roll once more, where a $5$ or $6$ wins $\\$18$ and anything else wins nothing. The game ends after the second roll no matter what. What is the expected net gain for the player?',
      choices: ['$\\$1.00$', '$\\$3.00$', '$\\$5.00$', '$\\$8.00$'],
      answer: 1,
      solution:
        'Enumerate the record space. Read each play as a pair (first roll, second roll), rolling the second die even when the game has already ended, so that all $36$ pairs are equally likely and no branch is left out. A first roll of $5$ or $6$ wins in all $2 \\cdot 6 = 12$ of its pairs; a first roll of $1$ or $2$ wins in none of its $12$; a first roll of $3$ or $4$ occupies $12$ pairs and wins only when the second roll is a $5$ or $6$, which is $2 \\cdot 2 = 4$ of them. The three groups cover $12 + 12 + 12 = 36$ pairs, and $12 + 4 = 16$ of them win. The expected payout is $18 \\cdot \\frac{16}{36} = 18 \\cdot \\frac{4}{9} = \\$8$, so the expected net gain is $8 - 5 = \\$3.00$ ✓. Valuing the sub-game first agrees. The one-roll game "a $5$ or $6$ wins $\\$18$" is worth $18 \\cdot \\frac{1}{3} = \\$6$. Now the first roll hands you $\\$18$ with probability $\\frac{1}{3}$, nothing with probability $\\frac{1}{3}$, and that $\\$6$ sub-game with probability $\\frac{1}{3}$, so the expected payout is $\\frac{1}{3} \\cdot 18 + \\frac{1}{3} \\cdot 0 + \\frac{1}{3} \\cdot 6 = 6 + 0 + 2 = \\$8$, and the net is $\\$3.00$ ✓. PRICING THE FIRST ROLL ONLY gives $18 \\cdot \\frac{1}{3} - 5 = \\$1.00$ and throws away the second chance the $3$s and $4$s buy ✗. LETTING A $1$ OR $2$ ROLL AGAIN TOO makes the win chance $\\frac{1}{3} + \\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{5}{9}$ and the payout $\\$10$, for $\\$5.00$; those rolls end the game on the spot ✗. REPORTING $\\$8.00$ is the expected payout with the $\\$5$ fee never subtracted ✗.',
    },
    {
      q: 'A game costs $\\$3$ to play, paid up front and not returned. You draw one of ten cards numbered $1$ through $10$: the $10$ wins $\\$12$ and ends the game, the $1$ ends the game with no prize, and any other card is shuffled back and you draw once more, where the $10$ wins $\\$12$ and anything else wins nothing. The game ends after the second draw no matter what. What is the expected net gain for the player?',
      choices: ['$-\\$1.80$', '$-\\$0.72$', '$\\$2.16$', '$-\\$0.84$'],
      answer: 3,
      solution:
        'Enumerate the record space. Read each play as a pair (first card, second card), the second card drawn from the full ten and recorded even when the game has already ended, so that all $100$ pairs are equally likely. A first card of $10$ wins in all $10$ of its pairs; a first card of $1$ wins in none of its $10$; a first card from $2$ to $9$ fills $8 \\cdot 10 = 80$ pairs and wins only when the second card is the $10$, which is $8$ of them. The groups cover $10 + 10 + 80 = 100$ pairs, and $10 + 8 = 18$ win. The expected payout is $12 \\cdot \\frac{18}{100} = \\frac{216}{100} = \\$2.16$, so the expected net gain is $2.16 - 3 = -\\$0.84$ ✓. Valuing the sub-game first agrees. The one-draw game "the $10$ wins $\\$12$" is worth $12 \\cdot \\frac{1}{10} = \\$1.20$. The first draw hands you $\\$12$ with probability $\\frac{1}{10}$, nothing with probability $\\frac{1}{10}$, and that $\\$1.20$ sub-game with probability $\\frac{8}{10}$, so the expected payout is $1.20 + 0 + \\frac{8}{10} \\cdot 1.20 = 1.20 + 0.96 = \\$2.16$, and the net is $-\\$0.84$ ✓. PRICING THE FIRST DRAW ONLY gives $1.20 - 3 = -\\$1.80$ and throws away the second chance ✗. LETTING THE $1$ REDRAW TOO puts nine cards in ten into the second stage: $1.20 + \\frac{9}{10} \\cdot 1.20 - 3 = -\\$0.72$; the $1$ ends the game on the spot ✗. REPORTING $\\$2.16$ is the expected payout with the $\\$3$ fee never subtracted ✗.',
    },
    {
      q: 'A game costs $\\$2$ to play, paid up front and not returned. You roll a standard die: a $6$ wins a prize of $\\$P$ and ends the game, a $1$ ends the game with no prize, and any other number lets you roll once more, where a $6$ wins $\\$P$ and anything else wins nothing. The game ends after the second roll no matter what. A fair game is one whose expected net gain for the player is $\\$0$. What prize $P$ makes the game fair?',
      choices: ['$\\$12.00$', '$\\$6.00$', '$\\$7.20$', '$\\$2.00$'],
      answer: 2,
      solution:
        'Split the win into disjoint cases. You win on the first roll with probability $\\frac{1}{6}$. You win on the second roll only when the first roll is a $2$, $3$, $4$, or $5$ and the second is a $6$, probability $\\frac{4}{6} \\cdot \\frac{1}{6} = \\frac{1}{9}$. The two cases cannot both happen, so the prize is won with probability $\\frac{1}{6} + \\frac{1}{9} = \\frac{3}{18} + \\frac{2}{18} = \\frac{5}{18}$. The fee is paid on every play, so fairness needs $\\frac{5}{18} P = 2$, giving $P = \\frac{36}{5} = \\$7.20$ ✓. Totalling the money over the whole record space agrees. Read each play as a pair (first roll, second roll), rolling the second die even when the game has ended, for $36$ equally likely records: $6$ have a first roll of $6$ and pay $P$; $6$ have a first roll of $1$ and pay nothing; the remaining $24$ continue, and $4$ of those (first roll in $\\{2, 3, 4, 5\\}$, second roll a $6$) pay $P$. The counts $6 + 6 + 24 = 36$ cover everything, and $10$ records pay $P$ while $26$ pay nothing. Over $36$ such plays the player collects $10P$ dollars and hands over $36 \\cdot 2 = 72$, so fairness needs $10P = 72$ and $P = \\$7.20$ ✓. PRICING THE FIRST ROLL ONLY solves $\\frac{P}{6} = 2$ for $\\$12.00$ and ignores the second chance, which lets a smaller prize still pay for the game ✗. ADDING THE TWO ROLLS’ CHANCES AS $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$ solves $\\frac{P}{3} = 2$ for $\\$6.00$, but the second roll only happens on four plays in six ✗. CHARGING THE FEE ONLY ON WINNING PLAYS solves $\\frac{5}{18}(P - 2) = 0$ for $\\$2.00$; the $\\$2$ is gone whether or not the prize is won ✗.',
    },
  ],

  // slot 11 — the extreme value of a hand (count by the extreme vs. tail
  //           sums or turning the labels around). Lanes: smallest of 4 from
  //           8; largest of 3 from 10; derived: largest of 3 from 6.
  [
    {
      q: 'Eight cards are numbered $1$ through $8$. Four are drawn at random without replacement. What is the expected value of the smallest number drawn?',
      choices: ['$\\frac{8}{5}$', '$\\frac{5}{2}$', '$\\frac{36}{5}$', '$\\frac{9}{5}$'],
      answer: 3,
      solution:
        'Count the hands by their smallest card. There are $\\binom{8}{4} = 70$ equally likely hands. The smallest is $k$ exactly when $k$ is drawn and the other three come from the $8 - k$ cards above it, so the counts are $\\binom{7}{3} = 35$ for $k = 1$, $\\binom{6}{3} = 20$ for $k = 2$, $\\binom{5}{3} = 10$ for $k = 3$, $\\binom{4}{3} = 4$ for $k = 4$, and $\\binom{3}{3} = 1$ for $k = 5$; nothing larger can be smallest, and $35 + 20 + 10 + 4 + 1 = 70$. The expected smallest is $\\frac{1 \\cdot 35 + 2 \\cdot 20 + 3 \\cdot 10 + 4 \\cdot 4 + 5 \\cdot 1}{70} = \\frac{35 + 40 + 30 + 16 + 5}{70} = \\frac{126}{70} = \\frac{9}{5}$ ✓. Adding up tail probabilities agrees. For a positive whole number, the expected value is $P(\\text{smallest} \\geq 1) + P(\\text{smallest} \\geq 2) + \\cdots$. The hands with smallest at least $k$ are drawn entirely from the cards $k$ through $8$, so there are $\\binom{9-k}{4}$ of them: $70, 35, 15, 5, 1$ for $k = 1$ through $5$, and zero after that. The sum is $\\frac{70 + 35 + 15 + 5 + 1}{70} = \\frac{126}{70} = \\frac{9}{5}$ ✓. SPACING THE FOUR CARDS EVENLY across $1$ to $8$ suggests a first gap of $\\frac{8}{5}$, but even spacing is a picture, not a count ✗. AVERAGING THE FIVE POSSIBLE SMALLEST VALUES $1$ THROUGH $5$ gives $\\frac{5}{2}$ and treats a smallest of $5$, which happens in $1$ hand out of $70$, as being as likely as a smallest of $1$ ✗. REPORTING $\\frac{36}{5}$ answers the expected LARGEST card, which is $9 - \\frac{9}{5}$ by turning the labels around ✗.',
    },
    {
      q: 'Ten runners wear bibs numbered $1$ through $10$, and three of them are chosen at random for a relay. What is the expected value of the largest bib number chosen?',
      choices: ['$\\frac{11}{4}$', '$\\frac{33}{4}$', '$\\frac{13}{2}$', '$10$'],
      answer: 1,
      solution:
        'Count the teams by their largest bib. There are $\\binom{10}{3} = 120$ equally likely teams. The largest bib is $k$ exactly when $k$ runs and the other two come from the $k - 1$ bibs below, so the counts are $\\binom{k-1}{2}$: that is $1, 3, 6, 10, 15, 21, 28, 36$ for $k = 3$ through $10$, and they add to $120$. The expected largest is $\\frac{3 \\cdot 1 + 4 \\cdot 3 + 5 \\cdot 6 + 6 \\cdot 10 + 7 \\cdot 15 + 8 \\cdot 21 + 9 \\cdot 28 + 10 \\cdot 36}{120} = \\frac{3 + 12 + 30 + 60 + 105 + 168 + 252 + 360}{120} = \\frac{990}{120} = \\frac{33}{4}$ ✓. Turning the bibs around agrees, and never counts a largest. Replacing every bib $k$ by $11 - k$ matches each team with exactly one other team and turns its largest bib into the smallest, so the expected largest is $11$ minus the expected smallest. The expected smallest is the sum of the tail probabilities $P(\\text{smallest} \\geq k)$, and a team with smallest at least $k$ is drawn from the bibs $k$ through $10$, giving $\\binom{11-k}{3}$ teams: $120, 84, 56, 35, 20, 10, 4, 1$ for $k = 1$ through $8$. Their sum is $\\frac{330}{120} = \\frac{11}{4}$, so the expected largest is $11 - \\frac{11}{4} = \\frac{33}{4}$ ✓. REPORTING $\\frac{11}{4}$ answers the expected SMALLEST bib ✗. AVERAGING THE EIGHT POSSIBLE LARGEST VALUES $3$ THROUGH $10$ gives $\\frac{13}{2}$ and treats a largest of $3$, which happens in $1$ team out of $120$, as being as likely as a largest of $10$ ✗. ANSWERING $10$ names the biggest bib in the race, but bib $10$ runs on only $36$ of the $120$ teams ✗.',
    },
    {
      q: 'Six cards are numbered $1$ through $6$. Three are drawn at random without replacement. What is the expected value of the largest number drawn?',
      choices: ['$\\frac{21}{4}$', '$\\frac{7}{4}$', '$\\frac{9}{2}$', '$6$'],
      answer: 0,
      solution:
        'Count the triples by their largest card. There are $\\binom{6}{3} = 20$ equally likely triples, and the largest is $k$ exactly when $k$ is drawn and the other two come from the $k - 1$ cards below it, so the counts are $\\binom{k-1}{2}$: $1, 3, 6, 10$ for $k = 3, 4, 5, 6$, adding to $20$. The expected largest is $\\frac{3 \\cdot 1 + 4 \\cdot 3 + 5 \\cdot 6 + 6 \\cdot 10}{20} = \\frac{3 + 12 + 30 + 60}{20} = \\frac{105}{20} = \\frac{21}{4}$ ✓. Adding up tail probabilities agrees. The expected largest is $P(\\text{largest} \\geq 1) + \\cdots + P(\\text{largest} \\geq 6)$, and the largest falls below $k$ only when all three cards come from the $k - 1$ cards under it, which is $\\binom{k-1}{3}$ triples. So the tails are $1, 1, 1$ for $k = 1, 2, 3$, then $1 - \\frac{1}{20} = \\frac{19}{20}$, then $1 - \\frac{4}{20} = \\frac{16}{20}$, then $1 - \\frac{10}{20} = \\frac{10}{20}$. Their sum is $3 + \\frac{19 + 16 + 10}{20} = 3 + \\frac{45}{20} = 3 + \\frac{9}{4} = \\frac{21}{4}$ ✓. REPORTING $\\frac{7}{4}$ answers the expected SMALLEST card, which is $7 - \\frac{21}{4}$ by turning the labels around ✗. AVERAGING THE FOUR POSSIBLE LARGEST VALUES $3$ THROUGH $6$ gives $\\frac{9}{2}$ and treats a largest of $3$, which happens in $1$ triple out of $20$, as being as likely as a largest of $6$ ✗. ANSWERING $6$ names the biggest card in the pile, but the $6$ is drawn in only $10$ of the $20$ triples ✗.',
    },
  ],

  // slot 12 — the middle of three (count by how many copies sit at the
  //           middle vs. tail sums across the gaps). Lanes: a 2/3/5/8 die
  //           rolled thrice; three of six doubling tiles; derived: largest
  //           of three dice.
  [
    {
      q: 'A fair four-sided die has faces marked $2$, $3$, $5$, and $8$. It is rolled three times and the three numbers are put in order from smallest to largest. What is the expected value of the middle number? (For the rolls $3$, $8$, $3$ the middle number is $3$.)',
      choices: ['$\\frac{69}{16}$', '$\\frac{9}{2}$', '$4$', '$\\frac{207}{32}$'],
      answer: 0,
      solution:
        'Sort the $4^3 = 64$ equally likely ordered triples by their middle number. A face $v$ is the middle in three disjoint ways: all three rolls show $v$, which is $1$ triple; exactly two rolls show $v$ and the third shows one of the other $3$ faces, which is $3 \\cdot 3 = 9$ triples, since the odd roll can be in any of $3$ positions; or one roll shows $v$ with one roll strictly below and one strictly above, which is $3! = 6$ arrangements times the number of faces below times the number above. For $2$ and $8$ there is nothing on one side, so each gets $1 + 9 = 10$ triples; for $3$ there is $1$ face below and $2$ above, giving $1 + 9 + 6 \\cdot 1 \\cdot 2 = 22$, and $5$ likewise gets $22$. The counts $10 + 22 + 22 + 10 = 64$ cover every roll, and the expected middle is $\\frac{2 \\cdot 10 + 3 \\cdot 22 + 5 \\cdot 22 + 8 \\cdot 10}{64} = \\frac{20 + 66 + 110 + 80}{64} = \\frac{276}{64} = \\frac{69}{16}$ ✓. Climbing the gaps with tail probabilities agrees. The middle number starts at $2$ and steps up by $1$ to reach $3$, by $2$ more to reach $5$, and by $3$ more to reach $8$, so its expected value is $2 + 1 \\cdot P(M \\geq 3) + 2 \\cdot P(M \\geq 5) + 3 \\cdot P(M \\geq 8)$. The middle is at least $v$ exactly when at least two of the three rolls are at least $v$. Rolls reach $3$ with probability $\\frac{3}{4}$, giving $3 \\left(\\frac{3}{4}\\right)^2 \\frac{1}{4} + \\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64} + \\frac{27}{64} = \\frac{27}{32}$; they reach $5$ with probability $\\frac{1}{2}$, giving $3 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} + \\frac{1}{8} = \\frac{1}{2}$; they reach $8$ with probability $\\frac{1}{4}$, giving $3 \\cdot \\frac{1}{16} \\cdot \\frac{3}{4} + \\frac{1}{64} = \\frac{10}{64} = \\frac{5}{32}$. So the expected middle is $2 + \\frac{27}{32} + 1 + \\frac{15}{32} = 3 + \\frac{42}{32} = \\frac{69}{16}$ ✓. AVERAGING THE FOUR FACES gives $\\frac{2 + 3 + 5 + 8}{4} = \\frac{9}{2}$, which prices one roll; the middle of three is pulled away from the lonely $8$ ✗. SPLITTING THE DIFFERENCE BETWEEN $3$ AND $5$ gives $4$ and ignores the $10$ triples apiece whose middle is $2$ or $8$ ✗. REPORTING $\\frac{207}{32}$ answers the expected LARGEST of the three rolls ✗.',
    },
    {
      q: 'Six tiles are marked $1$, $2$, $4$, $8$, $16$, $32$. Three are drawn at random without replacement and put in order from smallest to largest. What is the expected value of the middle number?',
      choices: ['$\\frac{21}{2}$', '$6$', '$\\frac{36}{5}$', '$\\frac{111}{5}$'],
      answer: 2,
      solution:
        'Count the triples by which tile lands in the middle. There are $\\binom{6}{3} = 20$ equally likely triples. List the tiles in increasing order as positions $1$ through $6$; the tile in position $j$ is the middle one exactly when one of the $j - 1$ smaller tiles and one of the $6 - j$ larger tiles join it, which is $(j-1)(6-j)$ triples. That gives $0, 4, 6, 6, 4, 0$ for $j = 1$ through $6$, adding to $20$, so the middle tile is $2$ in $4$ triples, $4$ in $6$, $8$ in $6$, and $16$ in $4$; the smallest and largest tiles can never be in the middle. The expected middle is $\\frac{4 \\cdot 2 + 6 \\cdot 4 + 6 \\cdot 8 + 4 \\cdot 16}{20} = \\frac{8 + 24 + 48 + 64}{20} = \\frac{144}{20} = \\frac{36}{5}$ ✓. Climbing the gaps with tail probabilities agrees. The middle starts at $1$ and steps by $1$, $2$, $4$, $8$, $16$ to reach $2$, $4$, $8$, $16$, $32$, so its expected value is $1 + 1 \\cdot P(M \\geq 2) + 2 \\cdot P(M \\geq 4) + 4 \\cdot P(M \\geq 8) + 8 \\cdot P(M \\geq 16) + 16 \\cdot P(M \\geq 32)$, where $M \\geq v$ means at least two of the three drawn tiles are $v$ or larger. Only one tile is below $2$, so $P(M \\geq 2) = 1$. For $v = 4$ there are four tiles at or above, and at least two of them appear in $\\binom{4}{2} \\cdot 2 + \\binom{4}{3} = 12 + 4 = 16$ triples, so $P = \\frac{16}{20} = \\frac{4}{5}$. For $v = 8$: $\\binom{3}{2} \\cdot 3 + \\binom{3}{3} = 9 + 1 = 10$, so $P = \\frac{1}{2}$. For $v = 16$: $\\binom{2}{2} \\cdot 4 = 4$, so $P = \\frac{1}{5}$. For $v = 32$ it is impossible. The total is $1 + 1 + 2 \\cdot \\frac{4}{5} + 4 \\cdot \\frac{1}{2} + 8 \\cdot \\frac{1}{5} = 4 + \\frac{16}{5} = \\frac{36}{5}$ ✓. AVERAGING ALL SIX TILES gives $\\frac{1 + 2 + 4 + 8 + 16 + 32}{6} = \\frac{21}{2}$, which prices one tile; the middle of three is dragged down by the huge, rarely central $32$ ✗. SPLITTING THE DIFFERENCE BETWEEN THE TWO CENTER TILES $4$ AND $8$ gives $6$ and ignores the $4$ triples apiece whose middle is $2$ or $16$ ✗. REPORTING $\\frac{111}{5}$ answers the expected LARGEST of the three tiles ✗.',
    },
    {
      q: 'Three standard dice are rolled and the three numbers showing are put in order from smallest to largest. What is the expected value of the largest number? (For the roll $2$, $5$, $5$ the largest number is $5$.)',
      choices: ['$\\frac{49}{24}$', '$\\frac{119}{24}$', '$\\frac{7}{2}$', '$\\frac{161}{36}$'],
      answer: 1,
      solution:
        'Count the $216$ equally likely rolls by their largest value. All three dice are at most $k$ in $k^3$ rolls, so the largest is exactly $k$ in $k^3 - (k-1)^3$ rolls: $1, 7, 19, 37, 61, 91$ for $k = 1$ through $6$, and those add to $216$, so every roll is placed. The expected largest is $\\frac{1 \\cdot 1 + 2 \\cdot 7 + 3 \\cdot 19 + 4 \\cdot 37 + 5 \\cdot 61 + 6 \\cdot 91}{216} = \\frac{1 + 14 + 57 + 148 + 305 + 546}{216} = \\frac{1071}{216} = \\frac{119}{24}$ ✓. Adding up tail probabilities agrees. The expected largest is $P(\\text{largest} \\geq 1) + \\cdots + P(\\text{largest} \\geq 6)$, and the largest falls below $k$ only when all three dice are at most $k - 1$, which happens in $(k-1)^3$ of the $216$ rolls. So the six tail probabilities total $6 - \\frac{0 + 1 + 8 + 27 + 64 + 125}{216} = 6 - \\frac{225}{216} = \\frac{1296 - 225}{216} = \\frac{1071}{216} = \\frac{119}{24}$ ✓. REPORTING $\\frac{49}{24}$ answers the expected SMALLEST of the three dice, which is $7 - \\frac{119}{24}$ by turning every die over ✗. ANSWERING $\\frac{7}{2}$ gives the expected MIDDLE number, which is also a single die’s expected value; the largest of three sits well above it ✗. REPORTING $\\frac{161}{36}$ answers the expected larger of only TWO dice, and a third die can only push the largest up ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 11,
  challenge,
}
