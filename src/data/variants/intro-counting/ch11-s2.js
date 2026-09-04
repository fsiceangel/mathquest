// Counting chapter 11 — variations for §11.3 Expected Value Problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but measures a
//    different kind of object, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 1 3 0 2 2 0 3 1 0 3 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4.
//  - Every key was computed exactly in node before the stem was written, over
//    the full outcome distribution and in integer or rational arithmetic only:
//    every ordered die tuple, every flip string, every hand or set of drawn
//    tickets, all 24 deal orders, every product grid. Every key matches its
//    pin. Pin deviations: none. Every money key is an exact number of cents.
//  - Two independent routes per solution, each ending ✓. This is the section
//    where a count or a sum is broken into parts, so wherever route one adds
//    up the expected values of the parts, route two is a full distribution
//    computation — the outcomes sorted, counted, and averaged — and never
//    re-imports route one’s number. Fee games get a payout-then-subtract route
//    against a long-run total-money route. Each wrong choice is then named in
//    CAPS, ending ✗, and every attribution is arithmetically true.
//  - Conventions are settled in every stem: dice, coins, and spinners are fair
//    and independent; draws say with or without replacement and that every set
//    or order is equally likely; every fee stem says the fee is paid whatever
//    happens and is not returned; "expected net gain" means the fee is already
//    subtracted, and "expected payout" means it is not.

const s113 = [
  // slot 1 — is the game worth playing: expected payout against a fixed fee.
  //          Lanes: three-branch wheel -> $0.50; doubled card draw -> $4.00;
  //          reversed: the fee that makes a given spinner fair -> $4.50.
  [
    {
      q: 'A game costs $\\$4$ to play, and the $\\$4$ is paid on every play whatever happens and is never returned. A wheel is then spun once: it pays $\\$10$ with probability $\\frac{1}{4}$, pays $\\$6$ with probability $\\frac{1}{3}$, and pays nothing otherwise. What is the expected net gain for the player, per play?',
      choices: ['$\\$4.50$', '$\\$3.00$', '$\\$0.50$', '$-\\$0.50$'],
      answer: 2,
      solution:
        'Find the expected payout first. The three branches have probabilities $\\frac{1}{4}$, $\\frac{1}{3}$, and $1 - \\frac{1}{4} - \\frac{1}{3} = \\frac{5}{12}$, so the expected payout is $10 \\cdot \\frac{1}{4} + 6 \\cdot \\frac{1}{3} + 0 \\cdot \\frac{5}{12} = \\frac{5}{2} + 2 = \\frac{9}{2}$ dollars. The fee is paid every time, so the expected net gain is $\\frac{9}{2} - 4 = \\$0.50$ ✓. A long-run tally reaches the same place without an expectation ever being written down: over $12$ plays the wheel pays $\\$10$ on three of them, $\\$6$ on four of them, and nothing on the remaining five, handing back $30 + 24 = 54$ dollars against the $12 \\cdot 4 = 48$ dollars paid in — a gain of $\\$6$ spread over $12$ plays, or $\\$0.50$ a play ✓. FORGETTING THE ENTRY FEE reports the expected payout $\\$4.50$ ✗. READING THE $\\$6$ BRANCH AS "THE REST OF THE TIME" gives $10 \\cdot \\frac{1}{4} + 6 \\cdot \\frac{3}{4} - 4 = \\$3.00$, which leaves no room for the branch that pays nothing ✗. SUBTRACTING IN THE WRONG ORDER, fee minus payout, gives $-\\$0.50$ ✗.',
    },
    {
      q: 'A game costs $\\$7$ to play, and the $\\$7$ is paid on every play whatever the card turns out to be and is never returned. You then draw one card at random from ten cards numbered $1$ through $10$ and receive twice the number on the card, in dollars. What is the expected net gain for the player, per play?',
      choices: ['$\\$4.00$', '$\\$11.00$', '$-\\$1.50$', '$-\\$4.00$'],
      answer: 0,
      solution:
        'Work out the payout, then charge the fee. The ten cards are equally likely and add to $55$, so the expected card is $\\frac{55}{10} = \\frac{11}{2}$ and the expected payout is $2 \\cdot \\frac{11}{2} = 11$ dollars. Subtracting the fee that is always paid leaves an expected net gain of $11 - 7 = \\$4.00$ ✓. Averaging the net results directly never mentions a payout: the ten equally likely nets are $2 \\cdot 1 - 7 = -5$, then $-3, -1, 1, 3, 5, 7, 9, 11$, and $13$, a list of ten numbers whose first and last average to $4$, whose second and ninth average to $4$, and so on — five such pairs, so the ten add to $40$ and the expected net is $\\frac{40}{10} = \\$4.00$ ✓. FORGETTING THE FEE reports the expected payout $\\$11.00$ ✗. FORGETTING THE DOUBLING gives $\\frac{11}{2} - 7 = -\\$1.50$ ✗. REVERSING THE SUBTRACTION gives $7 - 11 = -\\$4.00$ ✗.',
    },
    {
      q: 'A booth’s spinner is spun once per play: it pays $\\$9$ with probability $\\frac{1}{3}$, pays $\\$3$ with probability $\\frac{1}{2}$, and pays nothing otherwise. The booth wants to charge a single entry fee, paid on every play whatever the spinner does and never returned, that makes the game fair — an expected net gain of exactly $\\$0$ for the player. What fee should the booth charge?',
      choices: ['$\\$4.00$', '$\\$6.00$', '$\\$5.40$', '$\\$4.50$'],
      answer: 3,
      solution:
        'A fair game is one where the fee exactly cancels the expected payout, so compute the payout. The third branch has probability $1 - \\frac{1}{3} - \\frac{1}{2} = \\frac{1}{6}$, and the expected payout is $9 \\cdot \\frac{1}{3} + 3 \\cdot \\frac{1}{2} + 0 \\cdot \\frac{1}{6} = 3 + \\frac{3}{2} = \\frac{9}{2}$ dollars. Charging that much makes the expected net $\\frac{9}{2} - \\frac{9}{2} = 0$, so the fee is $\\$4.50$ ✓. A booth’s ledger settles it independently: over $6$ plays the spinner pays $\\$9$ on two of them, $\\$3$ on three of them, and nothing on the last, so the booth hands out $18 + 9 = 27$ dollars; it breaks even over those $6$ plays exactly when it has collected $\\$27$, which is $\\frac{27}{6} = \\$4.50$ a play ✓. AVERAGING THE THREE LISTED PAYOUTS $\\$9$, $\\$3$, AND $\\$0$ EQUALLY gives $\\$4.00$ and ignores that the branches have different chances ✗. AVERAGING ONLY THE TWO PRIZES gives $\\frac{9 + 3}{2} = \\$6.00$ ✗. THROWING AWAY THE NO-PAY BRANCH and rescaling the other two so they add to $1$ gives $\\frac{9/2}{5/6} = \\frac{27}{5} = \\$5.40$ ✗.',
    },
  ],

  // slot 2 — expected count over independent trials with a stated probability.
  //          Lanes: 4 spins at 2/5 -> 8/5; 10 seeds at 3/4 -> 15/2;
  //          reversed: 5 spins with expected count 2 -> p = 2/5.
  [
    {
      q: 'A spinner has five equal sectors, two of them blue, so it lands on blue with probability $\\frac{2}{5}$ on each spin, independently of the other spins. It is spun $4$ times. What is the expected number of spins that land on blue?',
      choices: ['$\\frac{8}{5}$', '$\\frac{544}{625}$', '$\\frac{216}{625}$', '$\\frac{12}{5}$'],
      answer: 0,
      solution:
        'Break the count into its four parts. Each spin lands on blue with probability $\\frac{2}{5}$, so each spin contributes $\\frac{2}{5}$ of a blue to the total, and the expected number of blue spins is $4 \\cdot \\frac{2}{5} = \\frac{8}{5}$ ✓. Listing the whole distribution agrees. Record which of the five sectors each spin lands on: the $5^4 = 625$ sector strings are equally likely, and exactly $k$ of the spins are blue in $\\binom{4}{k} 2^k 3^{4-k}$ of them, namely $81$, $216$, $216$, $96$, and $16$ strings for $k = 0, 1, 2, 3, 4$ — a total of $625$, as it must be. The blue spins over all strings number $0 \\cdot 81 + 1 \\cdot 216 + 2 \\cdot 216 + 3 \\cdot 96 + 4 \\cdot 16 = 216 + 432 + 288 + 64 = 1000$, so the expected number is $\\frac{1000}{625} = \\frac{8}{5}$ ✓. AT LEAST ONE BLUE has probability $1 - \\left(\\frac{3}{5}\\right)^4 = \\frac{544}{625}$, which is a probability and not a count ✗. EXACTLY ONE BLUE has probability $\\frac{216}{625}$ ✗. COUNTING THE SPINS THAT ARE NOT BLUE gives $4 \\cdot \\frac{3}{5} = \\frac{12}{5}$ ✗.',
    },
    {
      q: 'Each of $10$ seeds sprouts with probability $\\frac{3}{4}$, independently of every other seed. What is the expected number of the $10$ seeds that sprout?',
      choices: ['$\\frac{5}{2}$', '$\\frac{3}{4}$', '$\\frac{15}{2}$', '$\\frac{40}{3}$'],
      answer: 2,
      solution:
        'Count seed by seed. Each seed contributes $\\frac{3}{4}$ of a sprout to the total, and the ten contributions add, so the expected number that sprout is $10 \\cdot \\frac{3}{4} = \\frac{15}{2}$ ✓. The full distribution gives the same number the long way. Imagine each seed drawing one of $4$ equally likely tickets, three of which say "sprout": the $4^{10} = 1048576$ ticket strings are equally likely, and exactly $k$ seeds sprout in $\\binom{10}{k} 3^k$ of them. The total number of sprouts across all strings is $\\sum_k k \\binom{10}{k} 3^k$, and since $k \\binom{10}{k} = 10 \\binom{9}{k-1}$ this equals $10 \\cdot 3 \\cdot \\sum_j \\binom{9}{j} 3^j = 30 \\cdot 4^9 = 30 \\cdot 262144 = 7864320$. Dividing, $\\frac{7864320}{1048576} = \\frac{15}{2}$ ✓. COUNTING THE SEEDS THAT FAIL gives $10 \\cdot \\frac{1}{4} = \\frac{5}{2}$ ✗. STOPPING AT ONE SEED leaves $\\frac{3}{4}$ ✗. FLIPPING THE FRACTION gives $10 \\cdot \\frac{4}{3} = \\frac{40}{3}$, more sprouts than there are seeds ✗.',
    },
    {
      q: 'A spinner lands on green with probability $p$ on each spin, independently of the other spins, and it is spun $5$ times. The expected number of spins that land on green is $2$. What is $p$?',
      choices: ['$\\frac{5}{2}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Read the count as a sum of parts. Each of the $5$ spins contributes $p$ of a green, so the expected number of greens is $5p$; setting $5p = 2$ gives $p = \\frac{2}{5}$ ✓. Testing the candidate against a full enumeration confirms it and rules out the others. If the spinner has five equal sectors with two of them green, the $5^5 = 3125$ sector strings are equally likely and exactly $k$ spins are green in $\\binom{5}{k} 2^k 3^{5-k}$ of them; the greens over all strings total $\\sum_k k \\binom{5}{k} 2^k 3^{5-k} = 5 \\cdot 2 \\cdot (2 + 3)^4 = 10 \\cdot 625 = 6250$, and $\\frac{6250}{3125} = 2$, exactly as stated ✓. Since the expected count $5p$ increases as $p$ does, no other probability works. DIVIDING THE OTHER WAY gives $\\frac{5}{2}$, which is larger than $1$ and cannot be a probability ✗. REPORTING THE NON-GREEN PROBABILITY gives $1 - \\frac{2}{5} = \\frac{3}{5}$ ✗. USING FOUR SPINS INSTEAD OF FIVE gives $\\frac{2}{4} = \\frac{1}{2}$ ✗.',
    },
  ],

  // slot 3 — expected count of a face or label over repeated equally likely trials.
  //          Lanes: four dice showing 3 or 5 -> 4/3; three replaced card draws
  //          showing a multiple of 3 -> 9/10; reversed: n dice, 2/3 sixes -> 4.
  [
    {
      q: 'Four standard dice are rolled. What is the expected number of the four dice that show an odd prime, that is, a $3$ or a $5$?',
      choices: ['$\\frac{65}{81}$', '$\\frac{4}{3}$', '$2$', '$\\frac{1}{3}$'],
      answer: 1,
      solution:
        'Each die is one part of the count. A single die shows a $3$ or a $5$ on $2$ of its $6$ faces, so it contributes $\\frac{2}{6} = \\frac{1}{3}$ to the count, and four dice give $4 \\cdot \\frac{1}{3} = \\frac{4}{3}$ ✓. The full roll distribution settles it independently. Of the $6^4 = 1296$ equally likely rolls, exactly $k$ dice show a $3$ or a $5$ in $\\binom{4}{k} 2^k 4^{4-k}$ rolls: $256$, $512$, $384$, $128$, and $16$ rolls for $k = 0, 1, 2, 3, 4$, which do add to $1296$. Counting the odd primes across every roll gives $0 \\cdot 256 + 1 \\cdot 512 + 2 \\cdot 384 + 3 \\cdot 128 + 4 \\cdot 16 = 512 + 768 + 384 + 64 = 1728$, and $\\frac{1728}{1296} = \\frac{4}{3}$ ✓. THE CHANCE OF AT LEAST ONE $3$ OR $5$ is $1 - \\left(\\frac{4}{6}\\right)^4 = \\frac{65}{81}$, a probability rather than a count ✗. COUNTING $2$ AS WELL, so that all three primes $2$, $3$, $5$ qualify, gives $4 \\cdot \\frac{1}{2} = 2$ ✗. STOPPING AT ONE DIE leaves $\\frac{1}{3}$ ✗.',
    },
    {
      q: 'Ten cards are numbered $1$ through $10$. A card is drawn at random, its number is recorded, and the card is put back and the ten are reshuffled; this is done $3$ times in all, so every draw is from the full ten. What is the expected number of the three draws that show a multiple of $3$?',
      choices: ['$\\frac{657}{1000}$', '$\\frac{3}{10}$', '$\\frac{21}{10}$', '$\\frac{9}{10}$'],
      answer: 3,
      solution:
        'Take the draws one at a time. The multiples of $3$ among $1$ through $10$ are $3$, $6$, and $9$, so each draw shows one with probability $\\frac{3}{10}$ and contributes that much to the count; three draws give $3 \\cdot \\frac{3}{10} = \\frac{9}{10}$ ✓. Enumerating every outcome agrees. Because the card goes back, the $10^3 = 1000$ ordered triples of card numbers are equally likely, and exactly $k$ of the three draws are multiples of $3$ in $\\binom{3}{k} 3^k 7^{3-k}$ triples: $343$, $441$, $189$, and $27$ for $k = 0, 1, 2, 3$, adding to $1000$. The multiples of $3$ across all triples number $441 + 2 \\cdot 189 + 3 \\cdot 27 = 441 + 378 + 81 = 900$, so the expected number is $\\frac{900}{1000} = \\frac{9}{10}$ ✓. THE CHANCE OF AT LEAST ONE MULTIPLE OF $3$ is $1 - \\left(\\frac{7}{10}\\right)^3 = \\frac{657}{1000}$ ✗. STOPPING AT ONE DRAW leaves $\\frac{3}{10}$ ✗. COUNTING THE DRAWS THAT ARE NOT MULTIPLES OF $3$ gives $3 \\cdot \\frac{7}{10} = \\frac{21}{10}$ ✗.',
    },
    {
      q: '$n$ standard dice are rolled, and the expected number of the $n$ dice that show a $6$ is $\\frac{2}{3}$. What is $n$?',
      choices: ['$2$', '$12$', '$4$', '$6$'],
      answer: 2,
      solution:
        'Each die contributes one sixth of a six to the count, so $n$ dice give an expected $\\frac{n}{6}$ sixes. Setting $\\frac{n}{6} = \\frac{2}{3}$ gives $n = 4$ ✓. Enumerating four dice checks the claim from scratch. Of the $6^4 = 1296$ equally likely rolls, exactly $k$ dice show a $6$ in $\\binom{4}{k} 5^{4-k}$ rolls: $625$, $500$, $150$, $20$, and $1$, adding to $1296$. The sixes across all rolls number $500 + 2 \\cdot 150 + 3 \\cdot 20 + 4 \\cdot 1 = 500 + 300 + 60 + 4 = 864$, and $\\frac{864}{1296} = \\frac{2}{3}$ ✓; since the expected count grows with $n$, four dice is the only answer. USING TWO LUCKY FACES, so that each die counts with probability $\\frac{1}{3}$, gives $n = 2$ ✗. SOLVING $\\frac{n}{6} = 2$ instead of $\\frac{n}{6} = \\frac{2}{3}$ gives $n = 12$ ✗. SOLVING $\\frac{n}{6} = 1$, one six per handful, gives $n = 6$ ✗.',
    },
  ],

  // slot 4 — raffle tickets: expected payout against a purchase price.
  //          Lanes: 500 tickets, one $300 and four $50 -> -$1.00; 100 scratch
  //          cards -> -$1.40; reversed: the prize that makes 250 tickets fair.
  [
    {
      q: 'A raffle sells $500$ tickets at $\\$2$ each. One ticket drawn at random wins $\\$300$, and four other tickets each win $\\$50$; no ticket wins twice, and the ticket price is not returned to a winner. What is the expected net gain from buying one ticket?',
      choices: ['$\\$1.00$', '$-\\$1.60$', '$-\\$2.00$', '$-\\$1.00$'],
      answer: 3,
      solution:
        'Weigh the prizes your own ticket might win. It takes the $\\$300$ with probability $\\frac{1}{500}$ and one of the $\\$50$ prizes with probability $\\frac{4}{500}$, so the expected payout is $\\frac{300 + 4 \\cdot 50}{500} = \\frac{500}{500} = 1$ dollar. The $\\$2$ price is paid whatever happens, so the expected net gain is $1 - 2 = -\\$1.00$ ✓. Looking at the whole raffle avoids probabilities entirely: it collects $500 \\cdot 2 = 1000$ dollars and gives back $300 + 4 \\cdot 50 = 500$ dollars, so the ticket holders are $\\$500$ short in total; the $500$ tickets are interchangeable, so that shortfall splits into $-\\$1.00$ each ✓. REPORTING THE EXPECTED PAYOUT alone gives $\\$1.00$ and forgets the price ✗. DROPPING THE GRAND PRIZE leaves $\\frac{200}{500} - 2 = -\\$1.60$ ✗. ASSUMING A TICKET NEVER WINS ANYTHING loses the whole price, $-\\$2.00$ ✗.',
    },
    {
      q: 'A club sells $100$ scratch cards at $\\$4$ each. Two of the cards win $\\$80$ each and five other cards win $\\$20$ each; every other card wins nothing, and the $\\$4$ is not returned to a winner. What is the expected net gain from buying one card?',
      choices: ['$\\$2.60$', '$-\\$1.40$', '$-\\$2.40$', '$\\$1.40$'],
      answer: 1,
      solution:
        'Your card is equally likely to be any of the $100$. It pays $\\$80$ with probability $\\frac{2}{100}$ and $\\$20$ with probability $\\frac{5}{100}$, so the expected payout is $\\frac{2 \\cdot 80 + 5 \\cdot 20}{100} = \\frac{260}{100} = 2.6$ dollars, and subtracting the $\\$4$ that is always paid leaves $2.6 - 4 = -\\$1.40$ ✓. The club’s books say the same thing another way: it takes in $100 \\cdot 4 = 400$ dollars and pays out $160 + 100 = 260$ dollars, leaving buyers $\\$140$ behind in total; spread over $100$ interchangeable cards that is $-\\$1.40$ a card ✓. REPORTING THE EXPECTED PAYOUT alone gives $\\$2.60$ ✗. COUNTING ONLY THE TWO $\\$80$ CARDS gives $\\frac{160}{100} - 4 = -\\$2.40$ ✗. REVERSING THE SIGN gives $\\$1.40$, which would make the club a losing business ✗.',
    },
    {
      q: 'A raffle sells $250$ tickets at $\\$2$ each and awards a single grand prize to one ticket drawn at random; the ticket price is not returned to the winner. How large must the grand prize be for buying one ticket to be a fair bet — an expected net gain of exactly $\\$0$?',
      choices: ['$\\$500.00$', '$\\$250.00$', '$\\$125.00$', '$\\$2.00$'],
      answer: 0,
      solution:
        'Let the prize be $P$ dollars. One ticket wins it with probability $\\frac{1}{250}$ and wins nothing otherwise, so the expected payout is $\\frac{P}{250}$ and the expected net gain is $\\frac{P}{250} - 2$. Fairness means that is $0$, so $P = 500$, or $\\$500.00$ ✓. The raffle’s total tells the same story without an equation in $P$: the organizers take in $250 \\cdot 2 = 500$ dollars, and the only way the ticket holders as a group come out even is for every dollar to go back out, so the single prize must be the whole $\\$500.00$ ✓. HANDING BACK ONE DOLLAR PER TICKET instead of the full price gives $\\$250.00$ ✗. DIVIDING THE TICKET COUNT BY THE PRICE gives $\\$125.00$ ✗. SETTING THE PRIZE EQUAL TO THE TICKET PRICE gives $\\$2.00$, which would return only $\\$2$ of the $\\$500$ collected ✗.',
    },
  ],

  // slot 5 — expected count over a random arrangement, where the parts overlap.
  //          Lanes: cards beating their positions -> 3/2; siblings in the front
  //          three of eight -> 9/8; derived: letters in the WRONG envelope -> 2.
  [
    {
      q: 'Four cards numbered $1$, $2$, $3$, $4$ are shuffled and dealt into four positions numbered $1$, $2$, $3$, $4$, one card per position, with all $24$ arrangements equally likely. You score $1$ point for each card whose number is greater than the number of the position it lands in. What is the expected score?',
      choices: ['$\\frac{3}{4}$', '$1$', '$2$', '$\\frac{3}{2}$'],
      answer: 3,
      solution:
        'Score the four positions separately. By symmetry the card landing in a given position is equally likely to be any of $1$, $2$, $3$, $4$, so the card in position $1$ beats its position with probability $\\frac{3}{4}$ (any card but the $1$), the card in position $2$ with probability $\\frac{2}{4}$, the card in position $3$ with probability $\\frac{1}{4}$, and the card in position $4$ never. Adding the four parts gives $\\frac{3 + 2 + 1 + 0}{4} = \\frac{3}{2}$ ✓. Listing all $24$ arrangements gives it again. Only $1, 2, 3, 4$ itself scores $0$, since scoring nothing forces card $1$ into position $1$, then card $2$ into position $2$, and so on; only $2, 3, 4, 1$ scores $3$, since positions $1$, $2$, $3$ must then hold cards larger than $1$, $2$, $3$, leaving $2$, $3$, $4$ in that order. Sorting the other $22$ arrangements by score gives $11$ with a score of $1$ and $11$ with a score of $2$. The total score over all arrangements is $0 \\cdot 1 + 1 \\cdot 11 + 2 \\cdot 11 + 3 \\cdot 1 = 36$, and $\\frac{36}{24} = \\frac{3}{2}$ ✓. LOOKING ONLY AT POSITION $1$ leaves $\\frac{3}{4}$ ✗. COUNTING THE CARDS THAT MATCH THEIR POSITION EXACTLY gives $4 \\cdot \\frac{1}{4} = 1$, a different question ✗. GIVING EVERY POSITION AN EVEN CHANCE gives $4 \\cdot \\frac{1}{2} = 2$ and forgets that position $4$ can never be beaten ✗.',
    },
    {
      q: 'Eight people, three of whom are siblings, line up in a random order, with every order of the eight equally likely. What is the expected number of siblings among the first three people in line?',
      choices: ['$\\frac{3}{8}$', '$\\frac{9}{8}$', '$\\frac{23}{28}$', '$\\frac{15}{8}$'],
      answer: 1,
      solution:
        'Count spot by spot. A random order makes each of the eight people equally likely to hold any given spot, so each of the first three spots holds a sibling with probability $\\frac{3}{8}$, and the three spots contribute $3 \\cdot \\frac{3}{8} = \\frac{9}{8}$ ✓. A full count over the possible front groups is independent of that argument. The set of three people at the front is equally likely to be any of the $\\binom{8}{3} = 56$ groups of three, and a group holds exactly $k$ siblings in $\\binom{3}{k}\\binom{5}{3-k}$ ways: $10$, $30$, $15$, and $1$ groups for $k = 0, 1, 2, 3$, adding to $56$. The siblings across all groups number $30 + 2 \\cdot 15 + 3 \\cdot 1 = 63$, so the expected number is $\\frac{63}{56} = \\frac{9}{8}$ ✓. STOPPING AT ONE SPOT leaves $\\frac{3}{8}$ ✗. THE CHANCE THAT AT LEAST ONE SIBLING IS IN FRONT is $1 - \\frac{10}{56} = \\frac{23}{28}$, a probability and not a count ✗. COUNTING THE NON-SIBLINGS IN FRONT gives $3 \\cdot \\frac{5}{8} = \\frac{15}{8}$ ✗.',
    },
    {
      q: 'Three letters are put at random into three addressed envelopes, one letter per envelope, with all $6$ arrangements equally likely. What is the expected number of letters that end up in the wrong envelope?',
      choices: ['$2$', '$1$', '$\\frac{2}{3}$', '$\\frac{5}{3}$'],
      answer: 0,
      solution:
        'Look at one letter at a time. A given letter is equally likely to land in any of the three envelopes, so it is in the wrong one with probability $\\frac{2}{3}$, and the three letters contribute $3 \\cdot \\frac{2}{3} = 2$ ✓. Listing the arrangements reaches the same number without ever splitting the count. Of the $6$ equally likely ways to fill the envelopes, one puts every letter right and so has $0$ wrong; three swap a pair and leave the third letter alone, giving $2$ wrong; and two cycle all three letters, giving $3$ wrong. There is no way to have exactly one letter wrong, since the misplaced letter would have nowhere to go. The wrong letters over all six arrangements number $0 \\cdot 1 + 2 \\cdot 3 + 3 \\cdot 2 = 12$, so the expected number is $\\frac{12}{6} = 2$ ✓. COUNTING THE CORRECTLY DELIVERED LETTERS gives $3 \\cdot \\frac{1}{3} = 1$, the other half of the same split ✗. STOPPING AT ONE LETTER leaves $\\frac{2}{3}$ ✗. AVERAGING THE THREE POSSIBLE WRONG-COUNTS $0$, $2$, AND $3$ EQUALLY gives $\\frac{5}{3}$ and ignores that they happen $1$, $3$, and $2$ times ✗.',
    },
  ],

  // slot 6 — expected value of a sum, found by adding the parts.
  //          Lanes: one d6 and two d4 -> 17/2; four of ten cards -> 22;
  //          reversed: how many dice give an expected sum of 28 -> 8.
  [
    {
      q: 'A standard die and two fair four-sided dice with faces numbered $1$ through $4$ are rolled together. What is the expected value of the sum of the three numbers showing?',
      choices: ['$\\frac{21}{2}$', '$\\frac{17}{2}$', '$6$', '$7$'],
      answer: 1,
      solution:
        'Add the three parts. The standard die averages $\\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{7}{2}$, and each four-sided die averages $\\frac{1 + 2 + 3 + 4}{4} = \\frac{5}{2}$, so the expected sum is $\\frac{7}{2} + \\frac{5}{2} + \\frac{5}{2} = \\frac{17}{2}$ ✓. Totalling every roll confirms it. There are $6 \\cdot 4 \\cdot 4 = 96$ equally likely rolls. The standard die shows each of $1$ through $6$ in $16$ of them, contributing $16 \\cdot 21 = 336$ to the grand total; each four-sided die shows each of $1$ through $4$ in $24$ rolls, contributing $24 \\cdot 10 = 240$ apiece. The sums over all rolls therefore add to $336 + 240 + 240 = 816$, and $\\frac{816}{96} = \\frac{17}{2}$ ✓. TREATING ALL THREE DICE AS SIX-SIDED gives $3 \\cdot \\frac{7}{2} = \\frac{21}{2}$ ✗. ADDING ONLY TWO OF THE THREE DICE gives $\\frac{7}{2} + \\frac{5}{2} = 6$ ✗. HALVING THE LARGEST POSSIBLE SUM $14$ gives $7$ and forgets that the smallest sum is $3$, not $0$ ✗.',
    },
    {
      q: 'Four cards are drawn at random without replacement from ten cards numbered $1$ through $10$, with every set of four cards equally likely. What is the expected value of the sum of the four numbers drawn?',
      choices: ['$\\frac{11}{2}$', '$20$', '$\\frac{55}{4}$', '$22$'],
      answer: 3,
      solution:
        'Break the sum into the four cards. Each drawn card, taken on its own, is equally likely to be any of the ten numbers, so it averages $\\frac{55}{10} = \\frac{11}{2}$; the four cards influence one another, but a sum of expected values does not care, so the expected total is $4 \\cdot \\frac{11}{2} = 22$ ✓. Counting every hand settles it without that rule. There are $\\binom{10}{4} = 210$ equally likely sets of four cards, and any particular number, say the $7$, appears in exactly $\\binom{9}{3} = 84$ of them, since the other three cards are chosen freely from the remaining nine. So the numbers appearing across all $210$ sets add to $84 \\cdot (1 + 2 + \\dots + 10) = 84 \\cdot 55 = 4620$, and the expected sum is $\\frac{4620}{210} = 22$ ✓. STOPPING AT ONE CARD leaves $\\frac{11}{2}$ ✗. USING $5$ AS THE AVERAGE CARD instead of $\\frac{11}{2}$ gives $4 \\cdot 5 = 20$ ✗. DIVIDING THE TOTAL $55$ AMONG THE FOUR CARDS gives $\\frac{55}{4}$ ✗.',
    },
    {
      q: '$n$ standard dice are rolled, and the expected value of the sum of the numbers showing is $28$. What is $n$?',
      choices: ['$4$', '$14$', '$8$', '$7$'],
      answer: 2,
      solution:
        'Each die contributes its own average to the sum. One standard die averages $\\frac{1 + 2 + \\dots + 6}{6} = \\frac{7}{2}$, so $n$ dice give an expected sum of $\\frac{7n}{2}$; setting $\\frac{7n}{2} = 28$ gives $n = 8$ ✓. A direct count over all rolls checks the candidate. With eight dice there are $6^8$ equally likely rolls, and a fixed die shows each of $1$ through $6$ in $6^7$ of them, so that die contributes $21 \\cdot 6^7$ to the grand total of all sums; eight dice contribute $8 \\cdot 21 \\cdot 6^7$, and dividing by $6^8$ leaves $\\frac{8 \\cdot 21}{6} = 28$ ✓. Since $\\frac{7n}{2}$ grows with $n$, eight is the only answer. DIVIDING BY $7$, the expected sum of two dice rather than one, gives $n = 4$ ✗. DIVIDING BY $2$ gives $n = 14$ ✗. USING $4$ AS THE AVERAGE ROLL gives $n = 7$ ✗.',
    },
  ],

  // slot 7 — scored draws without replacement, points attached to colors.
  //          Lanes: 4G5Y draw three at +3/-1 -> 7/3; six tickets at 5 and -2,
  //          draw two -> 2/3; derived: expected number of reds in two of 5R3B.
  [
    {
      q: 'A bag holds $4$ green and $5$ yellow marbles. Three marbles are drawn at random without replacement, with every set of three equally likely. You gain $3$ points for each green marble drawn and lose $1$ point for each yellow marble drawn. What is the expected value of your score?',
      choices: ['$\\frac{7}{3}$', '$\\frac{7}{9}$', '$\\frac{4}{3}$', '$4$'],
      answer: 0,
      solution:
        'Score the three marbles one at a time. Each drawn marble, taken by itself, is equally likely to be any of the nine, so it is green with probability $\\frac{4}{9}$ and yellow with probability $\\frac{5}{9}$, contributing $3 \\cdot \\frac{4}{9} - 1 \\cdot \\frac{5}{9} = \\frac{7}{9}$ points. The three draws lean on one another, but a sum of expected values is unaffected, so the expected score is $3 \\cdot \\frac{7}{9} = \\frac{7}{3}$ ✓. Sorting the actual outcomes gives it again. There are $\\binom{9}{3} = 84$ equally likely sets of three. A set with $g$ greens scores $3g - (3 - g) = 4g - 3$, and the counts are $\\binom{5}{3} = 10$ sets with no green (score $-3$), $4 \\cdot \\binom{5}{2} = 40$ with one (score $1$), $\\binom{4}{2} \\cdot 5 = 30$ with two (score $5$), and $\\binom{4}{3} = 4$ with three (score $9$) — a total of $84$. The scores add to $-30 + 40 + 150 + 36 = 196$, and $\\frac{196}{84} = \\frac{7}{3}$ ✓. STOPPING AFTER ONE MARBLE leaves $\\frac{7}{9}$ ✗. COUNTING THE GREENS AND FORGETTING THE POINTS gives $3 \\cdot \\frac{4}{9} = \\frac{4}{3}$ ✗. SCORING THE GREENS BUT SKIPPING THE YELLOW PENALTY gives $3 \\cdot \\frac{4}{3} = 4$ ✗.',
    },
    {
      q: 'A box holds $6$ tickets: two are worth $5$ points each and four are worth $-2$ points each. Two tickets are drawn at random without replacement, with every pair equally likely, and your total is the sum of the values of the two tickets. What is the expected value of your total?',
      choices: ['$\\frac{1}{3}$', '$3$', '$\\frac{2}{3}$', '$\\frac{10}{3}$'],
      answer: 2,
      solution:
        'Value the two tickets separately. Each drawn ticket, on its own, is equally likely to be any of the six, so it averages $\\frac{2 \\cdot 5 + 4 \\cdot (-2)}{6} = \\frac{10 - 8}{6} = \\frac{1}{3}$ points, and the two tickets give $2 \\cdot \\frac{1}{3} = \\frac{2}{3}$ ✓. Listing the pairs is a separate calculation. There are $\\binom{6}{2} = 15$ equally likely pairs: $\\binom{2}{2} = 1$ pair of two $5$s totalling $10$, $2 \\cdot 4 = 8$ mixed pairs totalling $5 - 2 = 3$ apiece, and $\\binom{4}{2} = 6$ pairs of two $-2$s totalling $-4$ apiece, which is $1 + 8 + 6 = 15$ pairs in all. The totals add to $10 + 8 \\cdot 3 + 6 \\cdot (-4) = 10 + 24 - 24 = 10$, so the expected total is $\\frac{10}{15} = \\frac{2}{3}$ ✓. STOPPING AT ONE TICKET leaves $\\frac{1}{3}$ ✗. AVERAGING $5$ AND $-2$ AS IF EQUALLY LIKELY gives $\\frac{3}{2}$ a ticket and $3$ for the pair, ignoring that there are twice as many $-2$ tickets ✗. SCORING ONLY THE $5$-POINT TICKETS gives $2 \\cdot \\frac{2}{6} \\cdot 5 = \\frac{10}{3}$ ✗.',
    },
    {
      q: 'A bag holds $5$ red and $3$ blue marbles. Two marbles are drawn at random without replacement, with every pair equally likely. What is the expected number of red marbles drawn?',
      choices: ['$\\frac{5}{8}$', '$\\frac{5}{4}$', '$\\frac{25}{28}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'Count the two draws separately. Each drawn marble, taken on its own, is equally likely to be any of the eight, so it is red with probability $\\frac{5}{8}$, and two draws give $2 \\cdot \\frac{5}{8} = \\frac{5}{4}$ ✓. Enumerating the pairs is an independent check. Of the $\\binom{8}{2} = 28$ equally likely pairs, $\\binom{3}{2} = 3$ have no red, $5 \\cdot 3 = 15$ have exactly one, and $\\binom{5}{2} = 10$ have two, which accounts for all $28$. The reds across all pairs number $15 + 2 \\cdot 10 = 35$, so the expected number is $\\frac{35}{28} = \\frac{5}{4}$ ✓. STOPPING AT ONE MARBLE leaves $\\frac{5}{8}$ ✗. THE PROBABILITY OF AT LEAST ONE RED is $1 - \\frac{3}{28} = \\frac{25}{28}$, which counts the two-red pairs once instead of twice ✗. COUNTING THE BLUES gives $2 \\cdot \\frac{3}{8} = \\frac{3}{4}$ ✗.',
    },
  ],

  // slot 8 — expected number of neighboring pairs with a property; the parts overlap.
  //          Lanes: six coins, TT matches -> 5/4; six dice, equal neighbors ->
  //          5/6; derived: four coins, neighbors that differ -> 3/2.
  [
    {
      q: 'Six fair coins are flipped and laid in a row. Each of the five pairs of neighboring coins (positions $1$–$2$, $2$–$3$, $3$–$4$, $4$–$5$, and $5$–$6$) is called a match if both coins in the pair show tails. What is the expected number of matches?',
      choices: ['$\\frac{3}{2}$', '$\\frac{5}{8}$', '$\\frac{5}{4}$', '$\\frac{5}{2}$'],
      answer: 2,
      solution:
        'Take the five pairs one at a time. A given pair is a match when both of its coins show tails, which happens with probability $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$, so the five pairs contribute $5 \\cdot \\frac{1}{4} = \\frac{5}{4}$. The pairs overlap — coin $3$ belongs to two of them — but overlapping parts still add ✓. Listing all $2^6 = 64$ flip sequences confirms it. Sorted by the number of matches, the sequences number $21$ with no match, $20$ with one, $13$ with two, $7$ with three, $2$ with four, and $1$ with all five (TTTTTT), and $21 + 20 + 13 + 7 + 2 + 1 = 64$. The matches over all sequences number $20 + 2 \\cdot 13 + 3 \\cdot 7 + 4 \\cdot 2 + 5 \\cdot 1 = 20 + 26 + 21 + 8 + 5 = 80$, so the expected number is $\\frac{80}{64} = \\frac{5}{4}$ ✓. USING SIX PAIRS, one per coin, instead of the five that exist gives $\\frac{6}{4} = \\frac{3}{2}$ ✗. USING $\\frac{1}{8}$ PER PAIR, the chance of three tails, gives $\\frac{5}{8}$ ✗. USING $\\frac{1}{2}$ PER PAIR, the chance that a single coin is tails, gives $\\frac{5}{2}$ ✗.',
    },
    {
      q: 'Six standard dice are rolled and lined up in a row. Each of the five pairs of neighboring dice is called a repeat if the two dice in the pair show the same number. What is the expected number of repeats?',
      choices: ['$\\frac{5}{6}$', '$1$', '$\\frac{5}{36}$', '$\\frac{1}{6}$'],
      answer: 0,
      solution:
        'Handle the five neighboring pairs separately. Whatever the left die of a pair shows, the right die copies it on $1$ of its $6$ faces, so each pair is a repeat with probability $\\frac{1}{6}$ and the five pairs contribute $5 \\cdot \\frac{1}{6} = \\frac{5}{6}$ ✓. Counting the rows exactly is a different computation. There are $6^6 = 46656$ equally likely rows. To build a row with exactly $j$ repeats, choose which $j$ of the $5$ gaps are repeats ($\\binom{5}{j}$ ways), choose the first die ($6$ ways), and at each of the $5 - j$ remaining gaps change to any of the $5$ other values: $\\binom{5}{j} \\cdot 6 \\cdot 5^{5-j}$ rows. That gives $18750$, $18750$, $7500$, $1500$, $150$, and $6$ rows for $j = 0$ through $5$, which add to $46656$. The repeats over all rows number $18750 + 2 \\cdot 7500 + 3 \\cdot 1500 + 4 \\cdot 150 + 5 \\cdot 6 = 18750 + 15000 + 4500 + 600 + 30 = 38880$, and $\\frac{38880}{46656} = \\frac{5}{6}$ ✓. USING SIX PAIRS, one per die, gives $\\frac{6}{6} = 1$ ✗. USING $\\frac{1}{36}$ PER PAIR, the chance of one named double such as two $4$s, gives $\\frac{5}{36}$ ✗. STOPPING AT ONE PAIR leaves $\\frac{1}{6}$ ✗.',
    },
    {
      q: 'Four fair coins are flipped and laid in a row. What is the expected number of the three neighboring pairs (positions $1$–$2$, $2$–$3$, and $3$–$4$) in which the two coins show different faces?',
      choices: ['$\\frac{3}{4}$', '$2$', '$\\frac{1}{2}$', '$\\frac{3}{2}$'],
      answer: 3,
      solution:
        'Take the three pairs separately. Whatever the left coin of a pair shows, the right coin differs half the time, so each pair contributes $\\frac{1}{2}$ and the three give $3 \\cdot \\frac{1}{2} = \\frac{3}{2}$ ✓. Enumerating the $2^4 = 16$ sequences is a separate route. A sequence is completely determined by its first coin and by which of the three gaps change face, so exactly $j$ gaps differ in $2 \\cdot \\binom{3}{j}$ sequences: $2$, $6$, $6$, and $2$ sequences for $j = 0, 1, 2, 3$, adding to $16$. The differing pairs over all sequences number $6 + 2 \\cdot 6 + 3 \\cdot 2 = 24$, so the expected number is $\\frac{24}{16} = \\frac{3}{2}$ ✓. USING $\\frac{1}{4}$ PER PAIR, the chance of one named pattern such as two heads, gives $\\frac{3}{4}$ ✗. USING FOUR PAIRS, one per coin, gives $4 \\cdot \\frac{1}{2} = 2$ ✗. STOPPING AT ONE PAIR leaves $\\frac{1}{2}$ ✗.',
    },
  ],

  // slot 9 — pay a fee, receive the product of two draws.
  //          Lanes: $30 for two of 2,4,6,8,10 -> $4.00; $6 for two spinners
  //          1-4 -> $0.25; reversed: the fair fee for two of cards 1-5.
  [
    {
      q: 'You pay $\\$30$, which is never returned, and then draw two cards at random without replacement from five cards marked $2$, $4$, $6$, $8$, and $10$, with every pair equally likely. You receive a number of dollars equal to the product of the two numbers drawn. What is your expected net gain?',
      choices: ['$\\$34.00$', '$\\$4.00$', '$\\$6.00$', '$-\\$4.00$'],
      answer: 1,
      solution:
        'List the pairs. The $\\binom{5}{2} = 10$ pairs are equally likely and their products are $8$, $12$, $16$, $20$, $24$, $32$, $40$, $48$, $60$, and $80$, which add to $340$. The expected payout is $\\frac{340}{10} = 34$ dollars, and the $\\$30$ is paid every time, so the expected net gain is $34 - 30 = \\$4.00$ ✓. The same total falls out of a squaring identity, with no list written. The five numbers add to $30$ and their squares add to $4 + 16 + 36 + 64 + 100 = 220$. Squaring the total counts each of the five squares once and each of the ten distinct products twice, so $30^2 = 220 + 2S$ where $S$ is the sum of the ten products; then $S = \\frac{900 - 220}{2} = 340$, the expected payout is $\\$34$, and the net is $\\$4.00$ ✓. REPORTING THE EXPECTED PAYOUT alone gives $\\$34.00$ ✗. MULTIPLYING THE TWO CARDS’ EXPECTED VALUES gives $6 \\cdot 6 = 36$ and a net of $\\$6.00$; that shortcut fails here because the second card cannot repeat the first ✗. REVERSING THE SUBTRACTION gives $-\\$4.00$ ✗.',
    },
    {
      q: 'You pay $\\$6$, which is never returned, and then spin two spinners, each with four equal sectors numbered $1$ through $4$, the two spins independent. You receive a number of dollars equal to the product of the two numbers spun. What is your expected net gain?',
      choices: ['$\\$6.25$', '$-\\$1.00$', '$-\\$0.25$', '$\\$0.25$'],
      answer: 3,
      solution:
        'The two spinners are independent of each other, so the expected product is the product of the expected values: each spinner averages $\\frac{1 + 2 + 3 + 4}{4} = \\frac{5}{2}$, giving an expected payout of $\\frac{5}{2} \\cdot \\frac{5}{2} = \\frac{25}{4} = 6.25$ dollars and an expected net gain of $6.25 - 6 = \\$0.25$ ✓. Averaging the payouts themselves assumes nothing about independence of expectations. The $16$ equally likely ordered spins produce the products $1$ once, $2$ twice, $3$ twice, $4$ three times, $6$ twice, $8$ twice, $9$ once, $12$ twice, and $16$ once — sixteen outcomes in all. These add to $1 + 4 + 6 + 12 + 12 + 16 + 9 + 24 + 16 = 100$, so the expected payout is $\\frac{100}{16} = \\frac{25}{4}$ and the net is $\\$0.25$ ✓. REPORTING THE EXPECTED PAYOUT alone gives $\\$6.25$ ✗. USING THE EXPECTED SUM INSTEAD OF THE PRODUCT gives $\\frac{5}{2} + \\frac{5}{2} - 6 = -\\$1.00$ ✗. REVERSING THE SUBTRACTION gives $6 - 6.25 = -\\$0.25$ ✗.',
    },
    {
      q: 'Five cards are numbered $1$ through $5$. Two are drawn at random without replacement, with every pair equally likely, and you receive a number of dollars equal to the product of the two numbers. A single entry fee is charged on every play, whatever the two cards turn out to be, and is never returned. What fee makes the game fair — an expected net gain of exactly $\\$0$?',
      choices: ['$\\$9.00$', '$\\$6.00$', '$\\$8.50$', '$\\$3.00$'],
      answer: 2,
      solution:
        'A fair fee equals the expected payout, so find that payout by listing the pairs. The $\\binom{5}{2} = 10$ equally likely pairs have products $2$, $3$, $4$, $5$, $6$, $8$, $10$, $12$, $15$, and $20$, which add to $85$; the expected payout is $\\frac{85}{10} = 8.5$ dollars, so the fair fee is $\\$8.50$ ✓. An identity gives the same total without the list. The five numbers add to $15$ and their squares add to $1 + 4 + 9 + 16 + 25 = 55$; squaring the total counts each square once and each of the ten products twice, so the products add to $\\frac{15^2 - 55}{2} = \\frac{170}{2} = 85$, and the expected payout is again $\\$8.50$ ✓. MULTIPLYING THE TWO CARDS’ EXPECTED VALUES gives $3 \\cdot 3 = \\$9.00$, which counts pairs such as a $3$ with another $3$ that cannot occur ✗. USING THE EXPECTED SUM instead of the product gives $3 + 3 = \\$6.00$ ✗. CHARGING ONE CARD’S EXPECTED VALUE gives $\\$3.00$ ✗.',
    },
  ],

  // slot 10 — expected number of distinct values, counted one value at a time.
  //           Lanes: four dice -> 671/216; three people and five flavors ->
  //           61/25; derived: three dice, values that never appear -> 125/36.
  [
    {
      q: 'Four standard dice are rolled. What is the expected number of different values showing? (The roll $3, 3, 5, 1$ shows $3$ different values.)',
      choices: ['$\\frac{671}{216}$', '$4$', '$\\frac{671}{1296}$', '$\\frac{625}{216}$'],
      answer: 0,
      solution:
        'Count one value at a time. A given value, say the $2$, is missed by a single die with probability $\\frac{5}{6}$, so it is missed by all four with probability $\\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$ and appears somewhere with probability $1 - \\frac{625}{1296} = \\frac{671}{1296}$. The number of different values showing is the total of six such all-or-nothing counts, one per value, so the expectation is $6 \\cdot \\frac{671}{1296} = \\frac{671}{216}$ ✓. Sorting all $6^4 = 1296$ rolls by how many values they show is an independent computation. Exactly one value: $6$ rolls, all four dice alike. Exactly two: choose the two values in $\\binom{6}{2} = 15$ ways and assign the four dice to them in $2^4 - 2 = 14$ ways that use both, giving $210$. Exactly three: choose the three values in $\\binom{6}{3} = 20$ ways, choose which one is doubled in $3$ ways, choose the two dice carrying it in $\\binom{4}{2} = 6$ ways, and hand the last two dice the last two values in $2$ ways, giving $720$. Exactly four: $\\binom{6}{4} \\cdot 4! = 15 \\cdot 24 = 360$. Those add to $6 + 210 + 720 + 360 = 1296$, and the values across all rolls number $6 + 2 \\cdot 210 + 3 \\cdot 720 + 4 \\cdot 360 = 6 + 420 + 2160 + 1440 = 4026$, so the expectation is $\\frac{4026}{1296} = \\frac{671}{216}$ ✓. ASSUMING THE FOUR DICE NEVER REPEAT gives $4$ ✗. FORGETTING TO ADD UP ALL SIX VALUES leaves one value’s probability $\\frac{671}{1296}$ ✗. COUNTING THE VALUES THAT DO NOT APPEAR gives $6 \\cdot \\frac{625}{1296} = \\frac{625}{216}$ ✗.',
    },
    {
      q: 'Three people each independently pick one of five flavors at random, with every flavor equally likely for each person. What is the expected number of different flavors picked? (If two people pick the same flavor, it counts once.)',
      choices: ['$3$', '$\\frac{61}{125}$', '$\\frac{61}{25}$', '$\\frac{64}{25}$'],
      answer: 2,
      solution:
        'Track one flavor at a time. A given flavor is skipped by one person with probability $\\frac{4}{5}$, so it is skipped by all three with probability $\\left(\\frac{4}{5}\\right)^3 = \\frac{64}{125}$ and is picked by somebody with probability $\\frac{61}{125}$. The number of different flavors picked is the total of five such all-or-nothing counts, so the expectation is $5 \\cdot \\frac{61}{125} = \\frac{61}{25}$ ✓. Sorting the $5^3 = 125$ equally likely choice triples settles it separately. All three people match: $5$ triples. Exactly two flavors: choose them in $\\binom{5}{2} = 10$ ways and split the three people between them in $2^3 - 2 = 6$ ways, giving $60$. All three different: $5 \\cdot 4 \\cdot 3 = 60$. Those add to $5 + 60 + 60 = 125$, and the flavors across all triples number $5 + 2 \\cdot 60 + 3 \\cdot 60 = 5 + 120 + 180 = 305$, so the expectation is $\\frac{305}{125} = \\frac{61}{25}$ ✓. ASSUMING NO TWO PEOPLE OVERLAP gives $3$ ✗. FORGETTING TO ADD UP ALL FIVE FLAVORS leaves $\\frac{61}{125}$ ✗. COUNTING THE FLAVORS NOBODY PICKED gives $5 \\cdot \\frac{64}{125} = \\frac{64}{25}$ ✗.',
    },
    {
      q: 'Three standard dice are rolled. What is the expected number of the six values $1$ through $6$ that do not appear on any of the three dice?',
      choices: ['$\\frac{125}{216}$', '$\\frac{125}{36}$', '$\\frac{91}{36}$', '$3$'],
      answer: 1,
      solution:
        'Ask about each value separately. A given value, say the $4$, is missed by one die with probability $\\frac{5}{6}$, so it is missed by all three with probability $\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$. The number of missing values is the total of six such all-or-nothing counts, so the expectation is $6 \\cdot \\frac{125}{216} = \\frac{125}{36}$ ✓. Sorting the $216$ rolls by how many values they show is a second computation. All three dice alike: $6$ rolls, each missing $5$ values. Exactly two values: $\\binom{6}{2} \\cdot (2^3 - 2) = 15 \\cdot 6 = 90$ rolls, each missing $4$. All three different: $6 \\cdot 5 \\cdot 4 = 120$ rolls, each missing $3$. Those add to $6 + 90 + 120 = 216$, and the missing values across all rolls number $5 \\cdot 6 + 4 \\cdot 90 + 3 \\cdot 120 = 30 + 360 + 360 = 750$, so the expectation is $\\frac{750}{216} = \\frac{125}{36}$ ✓. FORGETTING TO ADD UP ALL SIX VALUES leaves one value’s probability $\\frac{125}{216}$ ✗. COUNTING THE VALUES THAT DO APPEAR gives $6\\left(1 - \\frac{125}{216}\\right) = \\frac{91}{36}$, the answer to the opposite question ✗. ASSUMING THE THREE DICE ALWAYS DIFFER leaves exactly $3$ values missing every time ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 11,
  sections: {
    '11.3': s113,
  },
}
