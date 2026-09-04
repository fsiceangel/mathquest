// Counting chapter 11 — variations for §11.4 A Funky Game.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but changes the shape
//    of the game, v3 reverses the question or asks the natural follow-up.
//  - Answer indices are derived from the base indices 3 1 2 0 1 3 0 2 1 0 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving
//    v1: 0 2 3 1 2 0 1 3 2 1, v2: 2 0 1 3 0 2 3 1 0 3, v3: 1 3 0 2 3 1 2 0 3 2.
//  - Every key was computed exactly in node with BigInt rationals over the full
//    outcome distribution or the full stopping tree — all 36 ordered rolls, all
//    1296 four-die tuples, every hand, every path of every tree — and each
//    tree’s branch probabilities were checked to total exactly 1 before the
//    stem was written. Every money key is an exact number of cents. Every key
//    matches its pin. Pin deviations: none.
//  - This is the chapter where expected value surprises, so every stem settles
//    whether an entry cost is subtracted, whether a losing bet forfeits the
//    stake, and exactly when the game stops. Where a game loses more often than
//    it wins and still favors the player (or the reverse), the solution says so
//    plainly: "likelier to lose" and "bad bet" are different claims.
//  - Two genuinely independent routes per solution, each ending ✓ — typically
//    one probability-weighted sum and one whole-population tally (play the game
//    once for every equally likely outcome, or bank the totals over many
//    plays), or a tree against a decomposition into separate bets. Route two
//    never re-imports route one’s number. Each wrong choice is then named in
//    CAPS, ending ✗, and every attribution is arithmetically true.

const s114 = [
  // slot 1 — a fair-looking win/lose bet; key 3/2, 11/10, 21/5. Lane v3 solves for the prize.
  [
    {
      q: 'Two standard dice are rolled. If both dice show even numbers you win $\\$12$; otherwise you lose $\\$2$. There is no entry fee, and a loss costs you exactly $\\$2$. What is the expected value of one play?',
      choices: ['$\\$1.50$', '$\\$5.00$', '$\\$3.00$', '$\\$2.00$'],
      answer: 0,
      solution:
        'Each die is even with probability $\\frac{3}{6} = \\frac{1}{2}$, and the two dice are independent, so both are even with probability $\\frac{1}{4}$ and the other $\\frac{3}{4}$ of the time you lose. Expected value: $12 \\cdot \\frac{1}{4} - 2 \\cdot \\frac{3}{4} = 3 - \\frac{3}{2} = \\frac{3}{2}$, or $\\$1.50$ ✓. A whole-population tally agrees without any probability arithmetic: play once for each of the $36$ equally likely ordered rolls. Both dice are even in $3 \\cdot 3 = 9$ of them, so those plays bank $9 \\cdot 12 = 108$ dollars, and the other $27$ plays cost $27 \\cdot 2 = 54$ dollars; the net over $36$ plays is $108 - 54 = 54$ dollars, which is $\\frac{54}{36} = \\$1.50$ per play ✓. You lose three plays out of four and the game still favors you — losing more often is not the same as losing money, because a win is worth six losses. TAKING THE UNWEIGHTED AVERAGE of the two results gives $\\frac{12 - 2}{2} = \\$5.00$ and pretends winning and losing are equally likely ✗. FORGETTING THE LOSSES keeps only $12 \\cdot \\frac{1}{4} = \\$3.00$ ✗. COUNTING THE $21$ UNORDERED PAIRS instead of the $36$ ordered rolls makes both-even look like $6$ pairs out of $21$ and gives $\\frac{12 \\cdot 6 - 2 \\cdot 15}{21} = \\$2.00$, but a roll of $2$ and $4$ is twice as likely as a roll of two $2$s ✗.',
    },
    {
      q: 'Ten cards are numbered $1$ through $10$ and you draw one at random. If the number is a perfect square you win $\\$6$; otherwise you lose $\\$1$. There is no entry fee, and a loss costs you exactly $\\$1$. What is the expected value of one play?',
      choices: ['$\\$2.50$', '$\\$1.80$', '$\\$1.10$', '$\\$0.40$'],
      answer: 2,
      solution:
        'The perfect squares from $1$ to $10$ are $1$, $4$, and $9$ — three of them, since $1 = 1^2$ counts. So you win with probability $\\frac{3}{10}$ and lose with probability $\\frac{7}{10}$: $6 \\cdot \\frac{3}{10} - 1 \\cdot \\frac{7}{10} = \\frac{18 - 7}{10} = \\frac{11}{10}$, or $\\$1.10$ ✓. Independently, imagine drawing each card exactly once, ten plays in all. The three square cards bring in $3 \\cdot 6 = 18$ dollars and the seven others cost $7$ dollars, leaving $18 - 7 = 11$ dollars across ten plays, or $\\$1.10$ each ✓. Seven plays out of ten lose, and the game is still worth playing. TAKING THE UNWEIGHTED AVERAGE of the two results gives $\\frac{6 - 1}{2} = \\$2.50$ ✗. FORGETTING THE LOSSES keeps only $6 \\cdot \\frac{3}{10} = \\$1.80$ ✗. FORGETTING THAT $1$ IS A PERFECT SQUARE leaves two winners and gives $6 \\cdot \\frac{2}{10} - 1 \\cdot \\frac{8}{10} = \\$0.40$ ✗.',
    },
    {
      q: '*Reversed:* Two standard dice are rolled. If the sum of the two numbers is a prime you win $\\$w$; otherwise you lose $\\$3$, and a loss costs you exactly $\\$3$. There is no entry fee. The game is fair, meaning its expected value is $0$. What is $w$?',
      choices: ['$\\$3.60$', '$\\$4.20$', '$\\$3.00$', '$\\$7.20$'],
      answer: 1,
      solution:
        'The prime sums are $2, 3, 5, 7, 11$, reached by $1 + 2 + 4 + 6 + 2 = 15$ of the $36$ ordered rolls, so $21$ rolls lose. Fairness means $w \\cdot \\frac{15}{36} = 3 \\cdot \\frac{21}{36}$, so $w = \\frac{3 \\cdot 21}{15} = \\frac{21}{5} = \\$4.20$ ✓. Route two never divides by $36$ at all: over $36$ plays, one for each ordered roll, the losing rolls take $21 \\cdot 3 = 63$ dollars, and for the game to break even the $15$ winning rolls must return $63$ dollars, which is $\\frac{63}{15} = \\$4.20$ apiece ✓. Note that the fair prize is bigger than the $\\$3$ stake precisely because winning is the rarer side. TREATING THE ELEVEN SUMS $2$ THROUGH $12$ AS EQUALLY LIKELY makes $5$ of $11$ prime and gives $w = \\frac{3 \\cdot 6}{5} = \\$3.60$, but a sum of $7$ is six times as likely as a sum of $2$ ✗. READING THE GAME AS A COIN FLIP sets $w = \\$3.00$, matching the stake ✗. CHARGING THE $\\$3$ LOSS TO EVERY PLAY solves $w \\cdot \\frac{15}{36} = 3$ and gives $w = \\frac{36}{5} = \\$7.20$ ✗.',
    },
  ],

  // slot 2 — huge prize, tiny chance; key $2.00, $1.00, $432.00. Lane v3 solves for the prize.
  [
    {
      q: 'A game costs $\\$2$ to play, paid before you start. You flip five fair coins; if all five show heads you win $\\$128$, and otherwise you win nothing and the $\\$2$ is gone. What is the expected net gain for the player?',
      choices: ['$\\$4.00$', '$\\$6.00$', '$\\$2.00$', '$-\\$2.00$'],
      answer: 2,
      solution:
        'Five fair coins land in $2^5 = 32$ equally likely head-tail strings, exactly one of which is HHHHH, so the win has probability $\\frac{1}{32}$. Expected payout: $128 \\cdot \\frac{1}{32} = 4$ dollars. Subtract the fee paid every play: the expected net gain is $4 - 2 = \\$2.00$ ✓. A bank-balance route reaches the same place from the other side. Play $32$ times and pay $32 \\cdot 2 = 64$ dollars in fees; on average one of those plays is all heads and returns $128$ dollars, leaving $128 - 64 = 64$ dollars over $32$ plays, or $\\$2.00$ each ✓. The player loses $31$ plays out of $32$ and the game still favors the player by a wide margin: the prize is $64$ times the fee while the win is only $32$ times rarer. FORGETTING THE FEE reports the expected payout $\\$4.00$ ✗. USING FOUR COINS gives probability $\\frac{1}{16}$ and $\\frac{128}{16} - 2 = \\$6.00$ ✗. REASONING THAT YOU ALMOST ALWAYS LOSE THE FEE reports $-\\$2.00$, which is the result of a losing play, not the average of all plays ✗.',
    },
    {
      q: 'A game costs $\\$3$ to play, paid before you start. You draw three cards at random without replacement from ten cards numbered $1$ through $10$; if the three cards are the $1$, the $2$, and the $3$ in any order you win $\\$480$, and otherwise you win nothing and the $\\$3$ is gone. What is the expected net gain for the player?',
      choices: ['$\\$1.00$', '$\\$4.00$', '$-\\$3.00$', '$-\\$0.12$'],
      answer: 0,
      solution:
        'Every set of three cards is equally likely, and there are $\\binom{10}{3} = 120$ of them, exactly one of which is $\\{1, 2, 3\\}$. Expected payout: $480 \\cdot \\frac{1}{120} = 4$ dollars, so the expected net gain is $4 - 3 = \\$1.00$ ✓. Route two builds the same probability from ordered draws and then tallies money separately. The chance the first card is one of the three small numbers is $\\frac{3}{10}$, then $\\frac{2}{9}$, then $\\frac{1}{8}$, and $\\frac{3}{10} \\cdot \\frac{2}{9} \\cdot \\frac{1}{8} = \\frac{6}{720}$; over $720$ plays that is $6$ wins worth $6 \\cdot 480 = 2880$ dollars against $720 \\cdot 3 = 2160$ dollars in fees, leaving $\\frac{2880 - 2160}{720} = \\$1.00$ per play ✓. FORGETTING THE FEE reports the expected payout $\\$4.00$ ✗. REASONING THAT YOU ALMOST ALWAYS LOSE THE FEE reports $-\\$3.00$ ✗. DRAWING WITH REPLACEMENT would let the three cards repeat, giving the win probability $\\frac{6}{1000}$ and $480 \\cdot \\frac{6}{1000} - 3 = -\\$0.12$; the stem says the cards are drawn without replacement ✗.',
    },
    {
      q: '*Reversed:* A game costs $\\$2$ to play, paid before you start. You roll four standard dice; if all four show the same number you win a prize, and otherwise you win nothing and the $\\$2$ is gone. What prize makes the game fair, meaning the expected net gain is $0$?',
      choices: ['$\\$2592.00$', '$\\$72.00$', '$\\$430.00$', '$\\$432.00$'],
      answer: 3,
      solution:
        'There are $6^4 = 1296$ equally likely ordered rolls of four dice, and $6$ of them are four of a kind (one for each face), so the win probability is $\\frac{6}{1296} = \\frac{1}{216}$. Fairness needs the expected payout to equal the fee: $P \\cdot \\frac{1}{216} = 2$, so $P = \\$432.00$ ✓. A chain of conditional probabilities gets there without counting tuples: the first die can be anything, and the remaining three must match it, which happens with probability $\\left(\\frac{1}{6}\\right)^3 = \\frac{1}{216}$; over $216$ plays the booth collects $216 \\cdot 2 = 432$ dollars and pays out one prize, so a fair prize is $\\$432.00$ ✓. USING $\\frac{1}{1296}$ treats one particular face — four $6$s, say — as the only winner and gives $P = 2 \\cdot 1296 = \\$2592.00$ ✗. USING $\\frac{1}{36}$ matches only two of the four dice and gives $P = 2 \\cdot 36 = \\$72.00$ ✗. CHARGING THE FEE ONLY ON LOSING PLAYS solves $\\frac{P}{216} = 2 \\cdot \\frac{215}{216}$ and gives $\\$430.00$, but the fee is paid before the dice are rolled, winners included ✗.',
    },
  ],

  // slot 3 — doubling up; key -7/9, -$1.25, 1. Lane v3 changes the payout odds.
  [
    {
      q: 'You bet $1$ point that a standard die shows a $5$ or a $6$. If it does not, you bet $2$ points on a second roll, and then the game ends whatever happens. A winning bet pays a profit equal to the amount bet, a losing bet loses the amount bet, and the game ends at the first win. There is no entry cost beyond the bets themselves. What is the expected value of the game, in points?',
      choices: ['$\\frac{5}{9}$', '$-\\frac{5}{9}$', '$-\\frac{1}{3}$', '$-\\frac{7}{9}$'],
      answer: 3,
      solution:
        'A roll wins with probability $\\frac{2}{6} = \\frac{1}{3}$. Three paths cover the game: win at once, probability $\\frac{1}{3}$, net $+1$; lose then win, probability $\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$, net $-1 + 2 = +1$; lose twice, probability $\\frac{4}{9}$, net $-1 - 2 = -3$. Those probabilities total $\\frac{3}{9} + \\frac{2}{9} + \\frac{4}{9} = 1$, and the expected value is $\\frac{1}{3} + \\frac{2}{9} - 3 \\cdot \\frac{4}{9} = \\frac{3 + 2 - 12}{9} = -\\frac{7}{9}$ ✓. Route two prices the two bets separately instead of walking the tree. The first bet is always made and is worth $1 \\cdot \\frac{1}{3} - 1 \\cdot \\frac{2}{3} = -\\frac{1}{3}$. The second bet is made only on the $\\frac{2}{3}$ of games that start with a loss, and when it is made it is worth $2 \\cdot \\frac{1}{3} - 2 \\cdot \\frac{2}{3} = -\\frac{2}{3}$, contributing $\\frac{2}{3} \\cdot \\left(-\\frac{2}{3}\\right) = -\\frac{4}{9}$. Adding: $-\\frac{3}{9} - \\frac{4}{9} = -\\frac{7}{9}$ ✓. Doubling feels safe because any win nets exactly $1$ point, but the two ways to win are together only $\\frac{5}{9}$ likely here, and the single losing path costs $3$. THE PROBABILITY OF FINISHING AHEAD is $\\frac{1}{3} + \\frac{2}{9} = \\frac{5}{9}$, which answers how often, not how much ✗. FORGETTING THAT THE FIRST POINT IS ALREADY LOST scores the recovery path as $+2$ and gives $\\frac{1}{3} + 2 \\cdot \\frac{2}{9} - 3 \\cdot \\frac{4}{9} = -\\frac{5}{9}$ ✗. COUNTING ONLY THE SECOND STAKE ON THE LOSING PATH scores it as $-2$ and gives $\\frac{5}{9} - 2 \\cdot \\frac{4}{9} = -\\frac{1}{3}$ ✗.',
    },
    {
      q: 'You bet $\\$1$ that a spinner lands on gold, which happens with probability $\\frac{1}{4}$ on each spin, independently. If it does not, you bet $\\$2$ on a second spin, and then the game ends whatever happens. A winning bet pays a profit equal to the amount bet, a losing bet loses the amount bet, and the game ends at the first win. There is no entry cost beyond the bets themselves. What is the expected value of the game?',
      choices: ['$\\$0.00$', '$-\\$1.25$', '$-\\$1.50$', '$-\\$3.00$'],
      answer: 1,
      solution:
        'Three paths: gold at once, probability $\\frac{1}{4}$, net $+\\$1$; miss then gold, probability $\\frac{3}{4} \\cdot \\frac{1}{4} = \\frac{3}{16}$, net $-1 + 2 = +\\$1$; miss twice, probability $\\frac{9}{16}$, net $-1 - 2 = -\\$3$. The three probabilities are $\\frac{4}{16} + \\frac{3}{16} + \\frac{9}{16} = 1$, and the expected value is $1 \\cdot \\frac{7}{16} - 3 \\cdot \\frac{9}{16} = \\frac{7 - 27}{16} = -\\frac{20}{16} = -\\$1.25$ ✓. Pricing the bets separately confirms it. The $\\$1$ bet is always made and is worth $1 \\cdot \\frac{1}{4} - 1 \\cdot \\frac{3}{4} = -\\$0.50$; the $\\$2$ bet is made on the $\\frac{3}{4}$ of games that open with a miss and is then worth $2 \\cdot \\frac{1}{4} - 2 \\cdot \\frac{3}{4} = -\\$1.00$, contributing $\\frac{3}{4} \\cdot (-1) = -\\$0.75$. Together $-0.50 - 0.75 = -\\$1.25$ ✓. CONCLUDING FROM "EVERY WIN NETS $\\$1$" THAT THE GAME IS FAIR reports $\\$0.00$ and ignores how often the doubling runs out ✗. BETTING BOTH ROUNDS UNCONDITIONALLY adds $-\\$0.50$ and $-\\$1.00$ in full and gives $-\\$1.50$, but the second bet is never made after a first-spin win ✗. REPORTING THE WORST PATH gives $-1 - 2 = -\\$3.00$, the result of one outcome rather than the average ✗.',
    },
    {
      q: '*Derived:* You bet $1$ point on a fair coin landing heads; if it lands tails you bet $2$ points on a second flip, and then the game ends whatever happens. This time a winning bet pays a profit equal to twice the amount bet, while a losing bet still loses the amount bet, and the game still ends at the first win. There is no entry cost beyond the bets themselves. What is the expected value of the game, in points?',
      choices: ['$1$', '$0$', '$\\frac{5}{4}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Heads first has probability $\\frac{1}{2}$ and pays a profit of $2 \\cdot 1 = 2$ points, net $+2$. Tails then heads has probability $\\frac{1}{4}$ and pays a profit of $2 \\cdot 2 = 4$ on the second bet, net $-1 + 4 = +3$. Two tails has probability $\\frac{1}{4}$ and net $-1 - 2 = -3$. The probabilities total $1$, and the expected value is $2 \\cdot \\frac{1}{2} + 3 \\cdot \\frac{1}{4} - 3 \\cdot \\frac{1}{4} = 1$ ✓. Bet by bet: the first bet is always made and is worth $2 \\cdot \\frac{1}{2} - 1 \\cdot \\frac{1}{2} = \\frac{1}{2}$; the second is made on the $\\frac{1}{2}$ of games that open with tails and is worth $4 \\cdot \\frac{1}{2} - 2 \\cdot \\frac{1}{2} = 1$, contributing $\\frac{1}{2}$. Adding, $\\frac{1}{2} + \\frac{1}{2} = 1$ ✓. Sweetening the payout to $2{:}1$ turns an exactly fair doubling game into a clearly good one, without changing how often you finish ahead. USING A PROFIT EQUAL TO THE BET keeps the old game, whose value is $0$ ✗. FORGETTING THE POINT ALREADY LOST scores the recovery path as $+4$ and gives $1 + 4 \\cdot \\frac{1}{4} - 3 \\cdot \\frac{1}{4} = \\frac{5}{4}$ ✗. THE PROBABILITY OF FINISHING AHEAD is $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$, which is not a point total ✗.',
    },
  ],

  // slot 4 — money-back sector; key -$0.75, -$0.50, $12.00. Lane v3 solves for the prize.
  [
    {
      q: 'A game costs $\\$5$ to play, paid before you start. A wheel then pays $\\$24$ with probability $\\frac{1}{8}$, returns your $\\$5$ with probability $\\frac{1}{4}$, and pays nothing otherwise. What is the expected net gain for the player?',
      choices: ['$-\\$2.00$', '$-\\$0.75$', '$\\$4.25$', '$\\$0.50$'],
      answer: 1,
      solution:
        'The three sectors have probabilities $\\frac{1}{8}$, $\\frac{1}{4}$, and $1 - \\frac{1}{8} - \\frac{1}{4} = \\frac{5}{8}$, which total $1$. Expected payout: $24 \\cdot \\frac{1}{8} + 5 \\cdot \\frac{1}{4} + 0 \\cdot \\frac{5}{8} = 3 + 1.25 = 4.25$ dollars, so the expected net gain is $4.25 - 5 = -\\$0.75$ ✓. Route two nets each sector first and never computes a payout total: the big sector gains $24 - 5 = 19$ dollars, the money-back sector gains $5 - 5 = 0$, and the empty sector loses $5$. That gives $19 \\cdot \\frac{1}{8} + 0 \\cdot \\frac{1}{4} - 5 \\cdot \\frac{5}{8} = \\frac{19 - 25}{8} = -\\frac{6}{8} = -\\$0.75$ ✓. Seen that way the money-back sector is worth nothing at all — it only cancels the fee — so the game rests on one sector in eight. FORGETTING THE MONEY-BACK OUTCOME gives $24 \\cdot \\frac{1}{8} - 5 = -\\$2.00$ ✗. REPORTING THE PAYOUT BEFORE THE FEE gives $\\$4.25$ ✗. COUNTING THE REFUND AS A $\\$5$ PROFIT ON TOP OF THE RETURNED FEE gives $3 + 2.5 - 5 = \\$0.50$ ✗.',
    },
    {
      q: 'A booth charges $\\$4$ to play, paid before you start. You draw one token at random from a bag of $20$: two tokens pay $\\$25$, five tokens return your $\\$4$, and the other thirteen pay nothing. What is the expected net gain for the player?',
      choices: ['$-\\$1.50$', '$\\$3.50$', '$\\$0.50$', '$-\\$0.50$'],
      answer: 3,
      solution:
        'The three kinds of token have probabilities $\\frac{2}{20}$, $\\frac{5}{20}$, and $\\frac{13}{20}$, which total $1$. Expected payout: $25 \\cdot \\frac{2}{20} + 4 \\cdot \\frac{5}{20} + 0 = \\frac{50 + 20}{20} = 3.5$ dollars, and the expected net gain is $3.5 - 4 = -\\$0.50$ ✓. A booth-ledger route settles it with whole dollars: run the bag once, one play per token, taking in $20 \\cdot 4 = 80$ dollars and paying out $2 \\cdot 25 + 5 \\cdot 4 = 70$ dollars, so the booth keeps $10$ dollars over $20$ plays and the player is behind $\\frac{10}{20} = \\$0.50$ per play ✓. FORGETTING THE REFUND TOKENS gives $25 \\cdot \\frac{2}{20} - 4 = -\\$1.50$ ✗. REPORTING THE PAYOUT BEFORE THE FEE gives $\\$3.50$ ✗. COUNTING THE REFUND AS A $\\$4$ PROFIT ON TOP OF THE RETURNED FEE gives $2.5 + 2 - 4 = \\$0.50$ ✗.',
    },
    {
      q: '*Reversed:* A game costs $\\$3$ to play, paid before you start. A wheel pays $\\$x$ with probability $\\frac{1}{6}$, returns your $\\$3$ with probability $\\frac{1}{3}$, and pays nothing otherwise. The game is fair, meaning the expected net gain is $0$. What is $x$?',
      choices: ['$\\$18.00$', '$\\$6.00$', '$\\$12.00$', '$\\$15.00$'],
      answer: 2,
      solution:
        'The empty sector has probability $1 - \\frac{1}{6} - \\frac{1}{3} = \\frac{1}{2}$, so the three probabilities total $1$. Fairness means the expected payout equals the $\\$3$ fee: $x \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{3} = 3$, so $\\frac{x}{6} = 2$ and $x = \\$12.00$ ✓. Netting each sector first avoids the payout equation entirely. The refund sector nets $0$, the empty sector nets $-3$, and the prize sector nets $x - 3$, so fairness reads $(x - 3) \\cdot \\frac{1}{6} - 3 \\cdot \\frac{1}{2} = 0$, giving $x - 3 = 9$ and $x = \\$12.00$ ✓. IGNORING THE MONEY-BACK SECTOR solves $\\frac{x}{6} = 3$ and gives $\\$18.00$ ✗. COUNTING THE REFUND AS A $\\$3$ PROFIT ON TOP OF THE RETURNED FEE solves $\\frac{x}{6} + 1 + 1 = 3$ and gives $\\$6.00$ ✗. ADDING THE FEE BACK TO A CORRECT PRIZE reports $12 + 3 = \\$15.00$, but $x$ is already the money handed to the player ✗.',
    },
  ],

  // slot 5 — "several chances to win, one way to lose"; key -3/32, 5/11, 12/25. Lane v3 solves for the penalty.
  [
    {
      q: 'You pick a number from $1$ to $4$, then spin a spinner with four equal sectors numbered $1$ through $4$ three times. You gain $1$ point for each spin that shows your number, and if no spin shows it you lose $2$ points instead. There is no entry cost. What is the expected value of the game, in points?',
      choices: ['$\\frac{3}{4}$', '$-\\frac{5}{4}$', '$-\\frac{3}{32}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'Let $k$ be the number of matching spins. Each spin matches with probability $\\frac{1}{4}$, independently, so $P(k = 0) = \\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64}$, $P(k = 1) = 3 \\cdot \\frac{1}{4} \\cdot \\frac{9}{16} = \\frac{27}{64}$, $P(k = 2) = 3 \\cdot \\frac{1}{16} \\cdot \\frac{3}{4} = \\frac{9}{64}$, and $P(k = 3) = \\frac{1}{64}$; these total $\\frac{64}{64} = 1$. The score is $-2$ when $k = 0$ and $k$ otherwise, so the expected value is $\\frac{-2 \\cdot 27 + 1 \\cdot 27 + 2 \\cdot 9 + 3 \\cdot 1}{64} = \\frac{-54 + 27 + 18 + 3}{64} = -\\frac{6}{64} = -\\frac{3}{32}$ ✓. Route two splits the score into a plain count plus a penalty. The expected number of matches is $3 \\cdot \\frac{1}{4} = \\frac{3}{4}$ by linearity, and the penalty subtracts $2$ points on exactly the no-match games, which are $\\frac{27}{64}$ of them and where the count contributes $0$ anyway, so the value is $\\frac{3}{4} - 2 \\cdot \\frac{27}{64} = \\frac{48 - 54}{64} = -\\frac{3}{32}$ ✓. Three chances to win against one way to lose sounds generous, yet the loss lands more than $\\frac{2}{5}$ of the time and costs double. THE EXPECTED NUMBER OF MATCHES is $\\frac{3}{4}$ with the penalty dropped ✗. SUBTRACTING THE PENALTY ON EVERY PLAY gives $\\frac{3}{4} - 2 = -\\frac{5}{4}$ ✗. TAKING $P(k = 0)$ TO BE $1$ MINUS THE EXPECTED NUMBER OF MATCHES uses $\\frac{1}{4}$ and gives $\\frac{3}{4} - 2 \\cdot \\frac{1}{4} = \\frac{1}{4}$; an expected count is not a probability ✗.',
    },
    {
      q: 'A bag holds $12$ marbles, three of them lucky. You draw two at random without replacement, gaining $2$ points for each lucky marble drawn; if neither marble is lucky you lose $1$ point instead. There is no entry cost. What is the expected value of the game, in points?',
      choices: ['$\\frac{5}{11}$', '$1$', '$0$', '$\\frac{7}{16}$'],
      answer: 0,
      solution:
        'Every one of the $\\binom{12}{2} = 66$ pairs is equally likely. Both lucky: $\\binom{3}{2} = 3$ pairs, score $4$. Exactly one lucky: $3 \\cdot 9 = 27$ pairs, score $2$. Neither: $\\binom{9}{2} = 36$ pairs, score $-1$. The counts check out as $3 + 27 + 36 = 66$, and the expected value is $\\frac{4 \\cdot 3 + 2 \\cdot 27 - 1 \\cdot 36}{66} = \\frac{12 + 54 - 36}{66} = \\frac{30}{66} = \\frac{5}{11}$ ✓. Route two uses linearity and a separate penalty term. Each drawn marble is lucky with probability $\\frac{3}{12} = \\frac{1}{4}$, so the expected number of lucky marbles is $\\frac{1}{2}$ and the scoring part is worth $2 \\cdot \\frac{1}{2} = 1$ point; the penalty applies only when neither is lucky, with probability $\\frac{9}{12} \\cdot \\frac{8}{11} = \\frac{6}{11}$, so the value is $1 - \\frac{6}{11} = \\frac{5}{11}$ ✓. THE SCORING PART ALONE is $1$ point with the penalty dropped ✗. SUBTRACTING THE PENALTY ON EVERY PLAY gives $1 - 1 = 0$ ✗. DRAWING WITH REPLACEMENT makes the no-luck probability $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$ and gives $1 - \\frac{9}{16} = \\frac{7}{16}$; the marble is not put back ✗.',
    },
    {
      q: '*Reversed:* You pick a number from $1$ to $6$, then roll two standard dice. You gain $1$ point for each die that shows your number, and you lose $L$ points if neither die shows it. There is no entry cost. For what $L$ is the game fair, meaning its expected value is $0$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{11}{25}$', '$\\frac{1}{3}$', '$\\frac{12}{25}$'],
      answer: 3,
      solution:
        'Of the $36$ ordered rolls, $25$ show your number on neither die, $10$ show it on exactly one, and $1$ shows it on both, and $25 + 10 + 1 = 36$. The gains total $10 \\cdot 1 + 1 \\cdot 2 = 12$ points across those $36$ rolls, so fairness needs the penalty to remove $12$ points as well: $25L = 12$ and $L = \\frac{12}{25}$ ✓. Linearity gives the same equation from a different direction: the expected number of matching dice is $2 \\cdot \\frac{1}{6} = \\frac{1}{3}$, and neither die matches with probability $\\left(\\frac{5}{6}\\right)^2 = \\frac{25}{36}$, so $\\frac{1}{3} = L \\cdot \\frac{25}{36}$ and $L = \\frac{1}{3} \\cdot \\frac{36}{25} = \\frac{12}{25}$ ✓. The fair penalty is smaller than a single point even though the game has two ways to win — losing is by far the commoner outcome. USING $1 - \\frac{1}{3}$ FOR THE LOSING PROBABILITY treats an expected count as a probability and gives $L = \\frac{1/3}{2/3} = \\frac{1}{2}$ ✗. SCORING A DOUBLE MATCH AS $1$ POINT makes the gains $\\frac{11}{36}$ and gives $L = \\frac{11}{25}$ ✗. FORGETTING TO DIVIDE BY THE LOSING PROBABILITY reports the expected gain $\\frac{1}{3}$ itself ✗.',
    },
  ],

  // slot 6 — wins almost every play and still loses money; key 8/25, 6/25, $19.00. Lane v3 solves for the loss.
  [
    {
      q: 'Fifty cards numbered $1$ through $50$ are shuffled and you draw one. If the number is $1$ through $48$ you win $\\$2$; if it is $49$ or $50$ you lose $\\$40$. There is no entry fee, and a loss costs you exactly $\\$40$. What is the expected value of one play?',
      choices: ['$\\$0.32$', '$\\$1.92$', '$-\\$1.60$', '$-\\$19.00$'],
      answer: 0,
      solution:
        'You win with probability $\\frac{48}{50}$ and lose with probability $\\frac{2}{50}$, and those total $1$. Expected value: $2 \\cdot \\frac{48}{50} - 40 \\cdot \\frac{2}{50} = \\frac{96 - 80}{50} = \\frac{16}{50} = \\$0.32$ ✓. A surcharge route reaches the same number without ever weighting the win. Treat the game as collecting $\\$2$ on every play, which is certain and worth $\\$2$, and then paying a $2 + 40 = 42$ dollar surcharge on the two bad cards: $2 - 42 \\cdot \\frac{2}{50} = 2 - \\frac{84}{50} = \\frac{16}{50} = \\$0.32$ ✓. The game favors the player even though a single bad card wipes out twenty wins — $96\\%$ of plays win, and here that frequency is enough. IGNORING THE LOSING CARDS gives $2 \\cdot \\frac{48}{50} = \\$1.92$ ✗. IGNORING THE WINNING CARDS gives $-40 \\cdot \\frac{2}{50} = -\\$1.60$ ✗. TAKING THE UNWEIGHTED AVERAGE of the two results gives $\\frac{2 - 40}{2} = -\\$19.00$ and pretends a bad card is as likely as a good one ✗.',
    },
    {
      q: 'A jar holds $25$ chips, $23$ white and $2$ black. You draw one at random; a white chip wins $\\$2$ and a black chip loses $\\$20$. There is no entry fee, and a loss costs you exactly $\\$20$. What is the expected value of one draw?',
      choices: ['$\\$1.84$', '$-\\$1.60$', '$\\$0.24$', '$-\\$9.00$'],
      answer: 2,
      solution:
        'White has probability $\\frac{23}{25}$ and black $\\frac{2}{25}$, totalling $1$. Expected value: $2 \\cdot \\frac{23}{25} - 20 \\cdot \\frac{2}{25} = \\frac{46 - 40}{25} = \\frac{6}{25} = \\$0.24$ ✓. Independently, run the whole jar: draw each chip once, $25$ plays. The white chips bring in $23 \\cdot 2 = 46$ dollars and the black chips take $2 \\cdot 20 = 40$ dollars, leaving $6$ dollars over $25$ plays, or $\\frac{6}{25} = \\$0.24$ apiece ✓. Two chips in twenty-five carry a loss ten times the size of a win, and the game still comes out ahead — barely. IGNORING THE BLACK CHIPS gives $2 \\cdot \\frac{23}{25} = \\$1.84$ ✗. IGNORING THE WHITE CHIPS gives $-20 \\cdot \\frac{2}{25} = -\\$1.60$ ✗. TAKING THE UNWEIGHTED AVERAGE of the two results gives $\\frac{2 - 20}{2} = -\\$9.00$ ✗.',
    },
    {
      q: '*Reversed:* Twenty cards numbered $1$ through $20$ are shuffled and you draw one. Any card from $1$ to $19$ wins $\\$1$, and the $20$ loses $\\$L$. There is no entry fee. For what $L$ is the game fair, meaning its expected value is $0$?',
      choices: ['$\\$1.00$', '$\\$19.00$', '$\\$20.00$', '$\\$0.95$'],
      answer: 1,
      solution:
        'Fairness means the winning side and the losing side cancel: $1 \\cdot \\frac{19}{20} = L \\cdot \\frac{1}{20}$, so $L = 19$ and the answer is $\\$19.00$ ✓. A ledger route never touches a fraction. Draw each card once, twenty plays: the nineteen good cards pay the player $19$ dollars, so the single bad card must take back exactly $19$ dollars for the ledger to close at zero, giving $L = \\$19.00$ ✓. The fair penalty is enormous compared with the prize, which is exactly why a game like this can win $95\\%$ of the time and still be a losing bet once the penalty is pushed past $\\$19$. MATCHING THE STAKES sets $L = \\$1.00$, which would make the player $\\$0.90$ per play on average ✗. CHARGING THE WIN TO EVERY CARD solves $1 = L \\cdot \\frac{1}{20}$ and gives $\\$20.00$ ✗. REPORTING THE EXPECTED WINNINGS instead of solving for $L$ gives $1 \\cdot \\frac{19}{20} = \\$0.95$ ✗.',
    },
  ],

  // slot 7 — a stopping rule with a growing prize; key $23.50, $15.00, 15/8. Lane v3 asks for the length.
  [
    {
      q: 'You flip a fair coin up to $4$ times, stopping at the first tails, and stopping after the fourth flip in any case. You then receive $4^h$ dollars, where $h$ is the number of heads you flipped, so $h$ can be $0, 1, 2, 3,$ or $4$. There is no entry fee. What is the expected payout?',
      choices: ['$\\$11.50$', '$\\$23.50$', '$\\$15.50$', '$\\$68.20$'],
      answer: 1,
      solution:
        'The complete paths are T with probability $\\frac{1}{2}$ and payout $4^0 = \\$1$; HT with $\\frac{1}{4}$ and $\\$4$; HHT with $\\frac{1}{8}$ and $\\$16$; HHHT with $\\frac{1}{16}$ and $\\$64$; and HHHH with $\\frac{1}{16}$ and $\\$256$. Those probabilities total $\\frac{8 + 4 + 2 + 1 + 1}{16} = 1$. The expected payout is $\\frac{1}{2} + 1 + 2 + 4 + 16 = \\$23.50$ ✓. A recursion route computes it without listing a single path. Let $A_n$ be the expected payout when up to $n$ flips are still allowed and no heads have been banked. Then $A_0 = 1$, and one more allowed flip gives $A_n = \\frac{1}{2} \\cdot 1 + \\frac{1}{2} \\cdot 4A_{n-1}$, because a head quadruples the eventual payout. So $A_1 = \\frac{1}{2} + 2 = \\frac{5}{2}$, $A_2 = \\frac{1}{2} + 5 = \\frac{11}{2}$, $A_3 = \\frac{1}{2} + 11 = \\frac{23}{2}$, and $A_4 = \\frac{1}{2} + 23 = \\frac{47}{2} = \\$23.50$ ✓. Each extra allowed flip is worth more than the last here, because quadrupling beats the halving. GIVING HHHH THE PAYOUT $4^3$ gives $\\frac{1}{2} + 1 + 2 + 4 + 4 = \\$11.50$ ✗. GIVING HHHH PROBABILITY $\\frac{1}{32}$, as though a fifth flip were needed, gives $\\frac{1}{2} + 1 + 2 + 4 + 8 = \\$15.50$ ✗. AVERAGING THE FIVE PAYOUTS EQUALLY gives $\\frac{1 + 4 + 16 + 64 + 256}{5} = \\$68.20$, but the paths are nowhere near equally likely ✗.',
    },
    {
      q: 'A jar holds $3$ gold tokens and $1$ black token. You draw tokens one at a time at random without replacement, stopping the moment the black token appears. You receive $\\$10$ for each gold token drawn before it, and there is no entry fee. What is the expected payout?',
      choices: ['$\\$30.00$', '$\\$25.00$', '$\\$7.50$', '$\\$15.00$'],
      answer: 3,
      solution:
        'Everything depends on where the black token sits in the shuffled jar, and it is equally likely to be first, second, third, or fourth. Those four cases give $0$, $1$, $2$, or $3$ gold tokens before it, each with probability $\\frac{1}{4}$, so the expected number of golds is $\\frac{0 + 1 + 2 + 3}{4} = \\frac{3}{2}$ and the payout is $10 \\cdot \\frac{3}{2} = \\$15.00$ ✓. An indicator route never mentions the black token’s position. Fix one gold token: it is drawn before the black token exactly when it comes first in the order of those two, which happens with probability $\\frac{1}{2}$ by symmetry. Each of the three golds pays $\\$10$ with probability $\\frac{1}{2}$, so by linearity the expected payout is $3 \\cdot 10 \\cdot \\frac{1}{2} = \\$15.00$ ✓. ASSUMING ALL THREE GOLDS COME OUT FIRST gives $\\$30.00$, which happens only $\\frac{1}{4}$ of the time ✗. PAYING FOR THE BLACK TOKEN’S POSITION uses its average position $\\frac{1 + 2 + 3 + 4}{4} = \\frac{5}{2}$ and gives $\\$25.00$; the position is one more than the number of golds ✗. COUNTING ONLY THE FIRST DRAW gives $10 \\cdot \\frac{3}{4} = \\$7.50$ ✗.',
    },
    {
      q: '*Derived:* You flip a fair coin up to $4$ times, stopping at the first tails, so four heads in a row also ends the game. There is no payout and no entry fee. What is the expected number of flips?',
      choices: ['$\\frac{31}{16}$', '$2$', '$\\frac{15}{8}$', '$\\frac{5}{2}$'],
      answer: 2,
      solution:
        'The paths are T ($\\frac{1}{2}$, one flip), HT ($\\frac{1}{4}$, two), HHT ($\\frac{1}{8}$, three), HHHT ($\\frac{1}{16}$, four), and HHHH ($\\frac{1}{16}$, four — the game is over because no flips are left). The probabilities total $1$, and the expected number of flips is $\\frac{1}{2} + \\frac{2}{4} + \\frac{3}{8} + \\frac{4}{16} + \\frac{4}{16} = \\frac{8 + 8 + 6 + 4 + 4}{16} = \\frac{30}{16} = \\frac{15}{8}$ ✓. A tail-sum route avoids the path list entirely: the expected count equals $P(\\text{at least }1) + P(\\text{at least }2) + P(\\text{at least }3) + P(\\text{at least }4)$. A $k$-th flip happens exactly when the first $k - 1$ flips were all heads, so those probabilities are $1$, $\\frac{1}{2}$, $\\frac{1}{4}$, and $\\frac{1}{8}$, summing to $\\frac{15}{8}$ ✓. COUNTING HHHH AS FIVE FLIPS gives $\\frac{8 + 8 + 6 + 4 + 5}{16} = \\frac{31}{16}$, but the fourth flip is the last one allowed ✗. FLIPPING WITHOUT A LIMIT until tails gives $2$, the value of the unbounded game ✗. AVERAGING $1, 2, 3, 4$ EQUALLY gives $\\frac{5}{2}$ ✗.',
    },
  ],

  // slot 8 — keep-or-replay; key $1.75, $3.25, $4.25. Lane v3 solves for the fee.
  [
    {
      q: 'A game costs $\\$6$ to play, paid before you start. You roll a standard die: if it shows an even number you keep three times that many dollars; if it shows an odd number you roll once more and keep the number of dollars shown on the second roll, whatever it is. What is the expected net gain for the player?',
      choices: ['$\\$1.00$', '$\\$7.75$', '$\\$4.50$', '$\\$1.75$'],
      answer: 3,
      solution:
        'The first roll is even with probability $\\frac{1}{2}$, and the even faces $2, 4, 6$ are equally likely, so that branch pays $6$, $12$, or $18$ dollars, an average of $12$. Otherwise, with probability $\\frac{1}{2}$, the second roll is kept and averages $\\frac{7}{2}$. Expected payout: $\\frac{1}{2} \\cdot 12 + \\frac{1}{2} \\cdot \\frac{7}{2} = 6 + \\frac{7}{4} = \\frac{31}{4} = 7.75$ dollars, so the expected net gain is $7.75 - 6 = \\$1.75$ ✓. A whole-population tally confirms it without branch averages. Weight every play by $\\frac{1}{36}$: each even first roll carries weight $\\frac{6}{36}$ and pays $6$, $12$, or $18$; each odd first roll splits into six second rolls of weight $\\frac{1}{36}$ paying $1$ through $6$. The total is $6(6 + 12 + 18) + 3(1 + 2 + 3 + 4 + 5 + 6) = 216 + 63 = 279$, and $\\frac{279}{36} - 6 = 7.75 - 6 = \\$1.75$ ✓. USING THREE TIMES THE DIE AVERAGE for the even branch gives $\\frac{1}{2} \\cdot \\frac{21}{2} + \\frac{1}{2} \\cdot \\frac{7}{2} = 7$ and a net of $\\$1.00$, but only the even faces are tripled ✗. FORGETTING THE FEE reports the payout $\\$7.75$ ✗. TRIPLING THE WHOLE GAME gives $3 \\cdot \\frac{7}{2} - 6 = \\$4.50$ ✗.',
    },
    {
      q: 'A game costs $\\$2$ to play, paid before you start. You draw one of eight cards numbered $1$ through $8$: if it is the $7$ or the $8$ you keep that many dollars; otherwise you shuffle it back, draw again, and keep the number of dollars on the second card, whatever it is. What is the expected net gain for the player?',
      choices: ['$\\$5.25$', '$\\$3.25$', '$\\$2.50$', '$\\$4.00$'],
      answer: 1,
      solution:
        'With probability $\\frac{2}{8} = \\frac{1}{4}$ the first card is kept, and it is the $7$ or the $8$ equally often, an average of $\\frac{15}{2}$. With probability $\\frac{3}{4}$ the second card is kept, and since the first card was shuffled back the second is uniform on $1$ through $8$, averaging $\\frac{9}{2}$. Expected payout: $\\frac{1}{4} \\cdot \\frac{15}{2} + \\frac{3}{4} \\cdot \\frac{9}{2} = \\frac{15}{8} + \\frac{27}{8} = \\frac{42}{8} = 5.25$ dollars, so the net is $5.25 - 2 = \\$3.25$ ✓. Tallying the whole population agrees: weight each play by $\\frac{1}{64}$, so the $7$ and the $8$ each carry weight $\\frac{8}{64}$, while each of the six small cards splits into eight second draws of weight $\\frac{1}{64}$. The total is $8(7 + 8) + 6(1 + 2 + \\cdots + 8) = 120 + 216 = 336$, and $\\frac{336}{64} - 2 = 5.25 - 2 = \\$3.25$ ✓. FORGETTING THE FEE reports the payout $\\$5.25$ ✗. USING THE PLAIN AVERAGE $\\frac{9}{2}$ FOR THE WHOLE GAME gives $4.5 - 2 = \\$2.50$ and ignores the keep rule ✗. WEIGHTING THE TWO BRANCHES EQUALLY gives $\\frac{1}{2} \\cdot \\frac{15}{2} + \\frac{1}{2} \\cdot \\frac{9}{2} - 2 = 6 - 2 = \\$4.00$, but keeping the first card happens only a quarter of the time ✗.',
    },
    {
      q: '*Reversed:* You roll a standard die. If it shows $4$, $5$, or $6$ you keep that many dollars; if it shows $1$, $2$, or $3$ you roll once more and keep the number of dollars shown on the second roll, whatever it is. What entry fee, paid before you start, makes the game fair?',
      choices: ['$\\$4.25$', '$\\$3.50$', '$\\$5.00$', '$\\$8.50$'],
      answer: 0,
      solution:
        'A fair fee is exactly the expected payout. With probability $\\frac{1}{2}$ the first roll is kept and averages $\\frac{4 + 5 + 6}{3} = 5$; with probability $\\frac{1}{2}$ the second roll is kept and averages $\\frac{7}{2}$. So the fee is $\\frac{1}{2} \\cdot 5 + \\frac{1}{2} \\cdot \\frac{7}{2} = \\frac{17}{4} = \\$4.25$ ✓. A tally over $36$ equally weighted plays gives the same fee without branch averages: the three high faces carry weight $6$ each and pay $6(4 + 5 + 6) = 90$, while the three low faces each split into six second rolls paying $3(1 + 2 + 3 + 4 + 5 + 6) = 63$. That is $\\frac{90 + 63}{36} = \\frac{153}{36} = \\$4.25$ ✓. The reroll rule is worth $\\$0.75$ over the plain die, since it discards only the bad half of the faces. IGNORING THE KEEP RULE gives the plain die average $\\$3.50$ ✗. ASSUMING THE SECOND ROLL IS ALSO A $4$, $5$, OR $6$ makes both branches average $5$ and gives $\\$5.00$ ✗. ADDING THE TWO BRANCH AVERAGES instead of weighting them gives $5 + \\frac{7}{2} = \\$8.50$ ✗.',
    },
  ],

  // slot 9 — a sudden-death stopping rule; key 130/81, 8/3, 1/2. Lane v3 solves for the stopping chance.
  [
    {
      q: 'You roll a standard die up to four times. Each roll of $1$, $2$, $3$, or $4$ earns $1$ point and lets you roll again; a roll of $5$ or $6$ ends the game immediately and earns nothing for that roll. The game also ends after the fourth roll. There is no entry cost. What is the expected number of points?',
      choices: ['$\\frac{8}{3}$', '$2$', '$\\frac{130}{81}$', '$\\frac{38}{27}$'],
      answer: 2,
      solution:
        'A roll earns a point with probability $\\frac{4}{6} = \\frac{2}{3}$. Scoring $k$ points for $k = 0, 1, 2, 3$ means $k$ good rolls then a bad one, with probability $\\left(\\frac{2}{3}\\right)^k \\cdot \\frac{1}{3}$, and scoring $4$ means four good rolls, probability $\\frac{16}{81}$. Those five probabilities are $\\frac{27 + 18 + 12 + 8 + 16}{81} = 1$. The expected score is $\\frac{1 \\cdot 18 + 2 \\cdot 12 + 3 \\cdot 8 + 4 \\cdot 16}{81} = \\frac{18 + 24 + 24 + 64}{81} = \\frac{130}{81}$ ✓. A tail-sum route needs no path probabilities at all: the expected count equals $P(\\text{score} \\ge 1) + P(\\text{score} \\ge 2) + P(\\text{score} \\ge 3) + P(\\text{score} \\ge 4)$, and scoring at least $k$ points just means the first $k$ rolls were all good, with probability $\\left(\\frac{2}{3}\\right)^k$. So the total is $\\frac{2}{3} + \\frac{4}{9} + \\frac{8}{27} + \\frac{16}{81} = \\frac{54 + 36 + 24 + 16}{81} = \\frac{130}{81}$ ✓. IGNORING THE SUDDEN DEATH counts every roll and gives $4 \\cdot \\frac{2}{3} = \\frac{8}{3}$ ✗. DROPPING THE FOUR-ROLL LIMIT gives the unbounded value $\\frac{2/3}{1/3} = 2$ ✗. STOPPING THE TAIL SUM AFTER THREE TERMS gives $\\frac{2}{3} + \\frac{4}{9} + \\frac{8}{27} = \\frac{38}{27}$ and forgets the fourth roll ✗.',
    },
    {
      q: 'A jar holds $4$ white and $2$ black marbles. You draw them one at a time at random without replacement; every white marble earns $2$ points, and the first black marble ends the game immediately and earns nothing. There is no entry cost. What is the expected number of points?',
      choices: ['$\\frac{8}{3}$', '$8$', '$\\frac{4}{3}$', '$4$'],
      answer: 0,
      solution:
        'Only the number of whites before the first black matters. Every one of the $\\binom{6}{2} = 15$ placements of the two black marbles is equally likely, and the first black sits at position $j + 1$ in $5 - j$ of them, so $j$ whites come first with probability $\\frac{5 - j}{15}$ for $j = 0, 1, 2, 3, 4$. Those add to $\\frac{5 + 4 + 3 + 2 + 1}{15} = 1$, and the expected number of whites is $\\frac{0 + 4 + 6 + 6 + 4}{15} = \\frac{20}{15} = \\frac{4}{3}$, worth $2 \\cdot \\frac{4}{3} = \\frac{8}{3}$ points ✓. An indicator route skips the distribution entirely. Fix one white marble and look only at it and the two blacks: those three are in a random relative order, and the white comes first in $\\frac{1}{3}$ of them, which is exactly when it scores. Each of the four whites therefore earns $2$ points with probability $\\frac{1}{3}$, so by linearity the expected score is $4 \\cdot 2 \\cdot \\frac{1}{3} = \\frac{8}{3}$ ✓. ASSUMING EVERY WHITE IS DRAWN gives $8$ points ✗. FORGETTING TO DOUBLE reports the expected number of whites, $\\frac{4}{3}$ ✗. DRAWING WITH REPLACEMENT makes the count geometric, $\\frac{4/6}{2/6} = 2$ whites and $4$ points, but the marbles are not put back ✗.',
    },
    {
      q: '*Reversed:* A spinner says STOP with probability $p$ and GO with probability $1 - p$ on each spin, independently. You spin it up to three times; every GO earns $1$ point and a STOP ends the game immediately, earning nothing. There is no entry cost. The expected number of points is $\\frac{7}{8}$. What is $p$?',
      choices: ['$\\frac{17}{24}$', '$\\frac{8}{15}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
      answer: 3,
      solution:
        'Write $q = 1 - p$. Scoring at least $k$ points means the first $k$ spins were all GO, so the expected score is $q + q^2 + q^3$. Setting $q + q^2 + q^3 = \\frac{7}{8}$ and testing $q = \\frac{1}{2}$ gives $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{7}{8}$, and since $q + q^2 + q^3$ strictly increases as $q$ grows from $0$ to $1$, no other $q$ works. So $q = \\frac{1}{2}$ and $p = \\frac{1}{2}$ ✓. Route two checks the candidate by walking the tree instead of summing tails. With $p = \\frac{1}{2}$ the four outcomes are $0$ points with probability $\\frac{1}{2}$, $1$ point with $\\frac{1}{4}$, $2$ points with $\\frac{1}{8}$, and $3$ points with $\\frac{1}{8}$ — a total probability of $1$ — giving $\\frac{1}{4} + \\frac{2}{8} + \\frac{3}{8} = \\frac{7}{8}$ points, as required ✓. TREATING ALL THREE SPINS AS SCORING solves $3q = \\frac{7}{8}$ and gives $p = 1 - \\frac{7}{24} = \\frac{17}{24}$ ✗. DROPPING THE THREE-SPIN LIMIT solves $\\frac{q}{1 - q} = \\frac{7}{8}$ and gives $p = \\frac{8}{15}$ ✗. ANSWERING $\\frac{1}{3}$ makes the expected score $\\frac{2}{3} + \\frac{4}{9} + \\frac{8}{27} = \\frac{38}{27}$, not $\\frac{7}{8}$ ✗.',
    },
  ],

  // slot 10 — quit-while-ahead; key -91/108, 37/64, 19/9. Lane v3 asks for the length instead.
  [
    {
      q: 'You start with a score of $0$ and roll a standard die up to three times. A $6$ adds $3$ to your score; any other number subtracts $1$. You stop as soon as your score is positive, and otherwise after the third roll. There is no entry cost. What is the expected value of your final score?',
      choices: ['$\\frac{91}{216}$', '$-\\frac{91}{108}$', '$-1$', '$\\frac{193}{216}$'],
      answer: 1,
      solution:
        'Four paths finish the game. A $6$ first: probability $\\frac{1}{6}$, score $3$, stop. Miss then $6$: $\\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{5}{36}$, score $-1 + 3 = 2$, stop. Miss, miss, $6$: $\\frac{25}{36} \\cdot \\frac{1}{6} = \\frac{25}{216}$, score $1$, stop. Three misses: $\\frac{125}{216}$, score $-3$. The four probabilities are $\\frac{36 + 30 + 25 + 125}{216} = 1$, and the expected score is $\\frac{3 \\cdot 36 + 2 \\cdot 30 + 1 \\cdot 25 - 3 \\cdot 125}{216} = \\frac{108 + 60 + 25 - 375}{216} = -\\frac{182}{216} = -\\frac{91}{108}$ ✓. Route two prices the rolls rather than the paths. Every roll that gets made, whenever it is made, changes the score by $3 \\cdot \\frac{1}{6} - 1 \\cdot \\frac{5}{6} = -\\frac{1}{3}$ on average, and the number of rolls made is $1$ with probability $\\frac{1}{6}$, $2$ with probability $\\frac{5}{36}$, and $3$ with probability $\\frac{25}{36}$, an average of $\\frac{6 + 10 + 75}{36} = \\frac{91}{36}$ rolls. Multiplying, the expected score is $-\\frac{1}{3} \\cdot \\frac{91}{36} = -\\frac{91}{108}$ ✓. That second route explains the whole game: each roll is a losing bet, so a rule about when to quit cannot rescue it — stopping early only limits how many losing bets you make. THE PROBABILITY OF FINISHING AHEAD is $1 - \\frac{125}{216} = \\frac{91}{216}$, which answers how often, not how much ✗. CHARGING THREE ROLLS EVERY GAME gives $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$, but the winning games stop early ✗. FORGETTING THE THREE-MISS PATH leaves $\\frac{108 + 60 + 25}{216} = \\frac{193}{216}$ ✗.',
    },
    {
      q: 'You start with a score of $0$ and draw from a bag of $8$ chips, two marked $+4$ and six marked $-1$, putting the chip back after each draw. You draw up to three times, stopping as soon as your score is positive, and otherwise after the third draw. There is no entry cost. What is the expected value of your final score?',
      choices: ['$\\frac{3}{4}$', '$\\frac{59}{32}$', '$\\frac{91}{64}$', '$\\frac{37}{64}$'],
      answer: 3,
      solution:
        'A draw is good with probability $\\frac{2}{8} = \\frac{1}{4}$. Four paths: good first ($\\frac{1}{4}$, score $4$, stop); bad then good ($\\frac{3}{4} \\cdot \\frac{1}{4} = \\frac{3}{16}$, score $3$, stop); bad, bad, good ($\\frac{9}{64}$, score $2$, stop); three bad ($\\frac{27}{64}$, score $-3$). The probabilities total $\\frac{16 + 12 + 9 + 27}{64} = 1$, and the expected score is $\\frac{4 \\cdot 16 + 3 \\cdot 12 + 2 \\cdot 9 - 3 \\cdot 27}{64} = \\frac{64 + 36 + 18 - 81}{64} = \\frac{37}{64}$ ✓. Pricing the draws instead of the paths gives the same value. Each draw made is worth $4 \\cdot \\frac{1}{4} - 1 \\cdot \\frac{3}{4} = \\frac{1}{4}$ on average, and the number of draws made is $1$ with probability $\\frac{1}{4}$, $2$ with $\\frac{3}{16}$, and $3$ with $\\frac{9}{16}$, an average of $\\frac{4 + 6 + 27}{16} = \\frac{37}{16}$ draws, so the expected score is $\\frac{1}{4} \\cdot \\frac{37}{16} = \\frac{37}{64}$ ✓. Here each draw is a favorable bet, so stopping early costs the player something — the rule protects a small lead by giving up good bets. CHARGING THREE DRAWS EVERY GAME gives $3 \\cdot \\frac{1}{4} = \\frac{3}{4}$ ✗. FORGETTING THE THREE-BAD PATH leaves $\\frac{64 + 36 + 18}{64} = \\frac{59}{32}$ ✗. SCORING THE LOSING PATH AS $-1$, the value of one chip rather than three draws, gives $\\frac{64 + 36 + 18 - 27}{64} = \\frac{91}{64}$ ✗.',
    },
    {
      q: '*Derived:* You start with a score of $0$ and roll a standard die up to three times. A $5$ or $6$ adds $2$ to your score; any other number subtracts $1$. You stop as soon as your score is positive, and otherwise after the third roll. There is no entry cost. What is the expected number of rolls?',
      choices: ['$3$', '$\\frac{5}{9}$', '$\\frac{19}{9}$', '$\\frac{7}{3}$'],
      answer: 2,
      solution:
        'A roll is good with probability $\\frac{2}{6} = \\frac{1}{3}$. A good first roll makes the score $2$ and stops the game after one roll, probability $\\frac{1}{3}$. A bad roll then a good one makes the score $-1 + 2 = 1$, positive, and stops after two rolls, probability $\\frac{2}{3} \\cdot \\frac{1}{3} = \\frac{2}{9}$. Every other game reaches the third roll, probability $\\frac{4}{9}$; note that a third good roll only lifts the score from $-2$ to $0$, which is not positive, so the third roll is always the last. The probabilities total $\\frac{3 + 2 + 4}{9} = 1$, and the expected number of rolls is $1 \\cdot \\frac{1}{3} + 2 \\cdot \\frac{2}{9} + 3 \\cdot \\frac{4}{9} = \\frac{3 + 4 + 12}{9} = \\frac{19}{9}$ ✓. A tail sum reaches it without the path list: the expected count is $P(\\text{at least }1) + P(\\text{at least }2) + P(\\text{at least }3)$. The first roll always happens; a second happens unless the first was good, probability $\\frac{2}{3}$; a third happens only if neither of the first two was good, probability $\\frac{4}{9}$. That gives $1 + \\frac{2}{3} + \\frac{4}{9} = \\frac{19}{9}$ ✓. ASSUMING EVERY GAME RUNS THE FULL DISTANCE gives $3$ ✗. THE PROBABILITY OF STOPPING EARLY is $\\frac{1}{3} + \\frac{2}{9} = \\frac{5}{9}$, which is not a number of rolls ✗. LETTING ONLY THE FIRST ROLL END THE GAME EARLY gives $1 \\cdot \\frac{1}{3} + 3 \\cdot \\frac{2}{3} = \\frac{7}{3}$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 11,
  sections: { '11.4': s114 },
}
