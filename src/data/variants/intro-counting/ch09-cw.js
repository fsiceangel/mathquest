// Counting chapter 9 — variations for the challenge set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Challenge items are multiple choice: a question, four `choices`, an
//    `answer` INDEX, and a solution. The index is derived from the base
//    problem’s index b, never chosen: v1 = (b+1)%4, v2 = (b+3)%4,
//    v3 = (b+2)%4. Base indices: 1 0 3 2 0 3 1 2 0 3 1 2.
//  - Every key was brute-forced in node before the stem was written: full
//    enumeration of position sets, relative orders, chair pairs, group seat
//    assignments, dice grids, colored subsets, and paired-item draws, with the
//    two reroll games confirmed by geometric partial sums as well. Every key
//    matches its pin. Pin deviations: none.
//  - Every distractor is a real slip whose value was computed in node, so each
//    attribution is arithmetically true, not a guess.
//  - This is the clever-viewpoint chapter, so every solution runs two genuinely
//    independent routes that each end ✓ — one the clever viewpoint (symmetry,
//    ignoring the cards that cannot decide the question, reframing the game,
//    the gap argument, choosing the sample space), one the grind (a full count,
//    a bijection, a geometric sum, casework). Route two never re-imports route
//    one’s number. Each wrong choice’s trap is then named in CAPS, ending ✗.
//  - Challenge variations stay as hard as the base problems they replace.
//  - Conventions are settled in every stem: shuffles make every order equally
//    likely; simultaneous draws make every set equally likely; splits say the
//    sizes and that every split is equally likely; dice, coins, and spinners
//    are fair and independent; every stopping rule says what stops the process
//    and what a wasted round does; people are all different.

const challenge = [
  // slot 1 — two special items landing in the same half (symmetry over the
  //          leftover slots vs. counting the splits). Lanes: 40 campers into
  //          two cabins of 20 -> 19/39; 18 songs onto two sides of 9 -> 8/17;
  //          derived: all four aces in one half of a cut deck -> 92/833.
  [
    {
      q: 'Forty campers, including the sisters Mia and Mya, are split at random into two cabins of $20$ campers each, with every split equally likely. What is the probability that the two sisters end up in the same cabin?',
      choices: ['$\\frac{1}{2}$', '$\\frac{20}{39}$', '$\\frac{19}{39}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'Let Mia land wherever she lands and stop worrying about which cabin it is. Her cabin now has $19$ empty beds, and the other cabin has $20$, so $39$ beds are still open. By symmetry Mya is equally likely to take any one of those $39$, and $19$ of them are beside Mia: $\\frac{19}{39}$ ✓. Counting splits agrees. Name the cabins A and B; there are $\\binom{40}{20}$ equally likely splits, and the ones putting both sisters in cabin A number $\\binom{38}{18}$, since the other $18$ spots in A come from the $38$ remaining campers. The same count holds for cabin B, so the probability is $\\frac{2\\binom{38}{18}}{\\binom{40}{20}} = \\frac{2 \\cdot 20 \\cdot 19}{40 \\cdot 39} = \\frac{19}{39}$ ✓. TAKING $\\frac{1}{2}$ says Mya is as likely to join Mia as not, but Mia has already used one of her cabin’s $20$ beds, leaving her the smaller side of the $39$ ✗. READING OFF $\\frac{20}{39}$ counts the beds in the other cabin, which is the probability that the sisters are SEPARATED ✗. MULTIPLYING $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ prices both sisters landing in one named cabin, and treats the two placements as independent besides ✗.',
    },
    {
      q: 'A playlist of $18$ songs includes exactly two songs by the Bluejays. The playlist is split at random into two mixtape sides of $9$ songs each, with every split equally likely. What is the probability that both Bluejays songs land on the same side?',
      choices: ['$\\frac{8}{17}$', '$\\frac{1}{2}$', '$\\frac{9}{17}$', '$\\frac{1}{4}$'],
      answer: 0,
      solution:
        'Place one Bluejays song first. Whichever side it goes to now has $8$ open slots, while the other side has all $9$, for $17$ open slots in all. By symmetry the second Bluejays song is equally likely to take any of those $17$, and $8$ of them keep the two songs together: $\\frac{8}{17}$ ✓. Counting splits agrees. Of the $\\binom{18}{9}$ equally likely splits, those putting both songs on a named side number $\\binom{16}{7}$, so the probability is $\\frac{2\\binom{16}{7}}{\\binom{18}{9}} = \\frac{2 \\cdot 9 \\cdot 8}{18 \\cdot 17} = \\frac{8}{17}$ ✓. TAKING $\\frac{1}{2}$ forgets that the first Bluejays song has already eaten one of its side’s nine slots ✗. READING OFF $\\frac{9}{17}$ counts the slots on the opposite side, the probability that the two songs are SPLIT UP ✗. MULTIPLYING $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ asks for both songs to land on one named side and pretends the two placements do not interfere ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled, every order equally likely, and then cut into two piles of $26$ cards, the top half and the bottom half. What is the probability that all four aces end up in the same half?',
      choices: ['$\\frac{1}{8}$', '$\\frac{25}{51}$', '$\\frac{4}{17}$', '$\\frac{92}{833}$'],
      answer: 3,
      solution:
        'Let the ace of spades land wherever it lands; its half has $25$ more slots among the $51$ cards still to be placed, so the ace of hearts joins it with probability $\\frac{25}{51}$. Given that, $24$ of the remaining $50$ slots are in that half for the ace of diamonds, and then $23$ of $49$ for the ace of clubs. So the probability is $\\frac{25}{51} \\cdot \\frac{24}{50} \\cdot \\frac{23}{49} = \\frac{13800}{124950} = \\frac{92}{833}$ ✓. Choosing the sample space differently agrees: the four aces occupy a set of $4$ positions out of $52$, and every one of the $\\binom{52}{4} = 270{,}725$ sets is equally likely. A favorable set lies entirely inside the top $26$ or entirely inside the bottom $26$, and each of those counts $\\binom{26}{4} = 14{,}950$, so the probability is $\\frac{2 \\cdot 14{,}950}{270{,}725} = \\frac{29{,}900}{270{,}725} = \\frac{92}{833}$ ✓. USING $2 \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{8}$ treats each ace as an independent coin toss between the halves, ignoring that each ace already placed leaves its half one slot emptier ✗. STOPPING AT $\\frac{25}{51}$ answers the base question about two aces and never places the other two ✗. STOPPING AT $\\frac{25}{51} \\cdot \\frac{24}{50} = \\frac{4}{17}$ places three aces and forgets the fourth ✗.',
    },
  ],

  // slot 2 — a named ticket inside a random draw (symmetry over positions vs.
  //          counting hands). Lanes: 7 cards from 52, ace of clubs -> 7/52;
  //          30 raffle tickets, 6 drawn -> 1/5; reversed: chance 3/26 -> n = 6.
  [
    {
      q: 'Seven cards are dealt from a shuffled standard deck of $52$ cards, every order of the deck equally likely. What is the probability that the ace of clubs is one of the seven?',
      choices: ['$\\frac{1}{52}$', '$\\frac{7}{52}$', '$\\frac{7}{45}$', '$\\frac{1}{13}$'],
      answer: 1,
      solution:
        'Turn the question around and follow the one card that matters. The ace of clubs is equally likely to sit in any of the $52$ positions of the shuffled deck, and the hand is made of $7$ of those positions, so the probability is $\\frac{7}{52}$ ✓. Counting hands agrees. There are $\\binom{52}{7}$ equally likely hands, and a hand containing the ace of clubs is that card together with $6$ of the other $51$, so $\\binom{51}{6}$ hands work: $\\frac{\\binom{51}{6}}{\\binom{52}{7}} = \\frac{7}{52}$ ✓. TAKING $\\frac{1}{52}$ prices a single named position instead of the seven the hand covers ✗. USING $\\frac{7}{45}$ compares the hand to the $45$ cards left undealt instead of to the whole deck of $52$ ✗. TAKING $\\frac{1}{13} = \\frac{4}{52}$ answers a different question, the chance that the top card of the deck is SOME ace ✗.',
    },
    {
      q: 'A jar holds $30$ raffle tickets, exactly one of which is Zoe’s. Six winning tickets are drawn at random from the jar without replacement, with every set of six equally likely. What is the probability that Zoe’s ticket is drawn?',
      choices: ['$\\frac{1}{30}$', '$\\frac{1}{4}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$'],
      answer: 3,
      solution:
        'Ignore the drawing order entirely: the six winners are just $6$ of the $30$ tickets, and by symmetry Zoe’s ticket is as likely to be any one of the $30$ as any other. So it is a winner with probability $\\frac{6}{30} = \\frac{1}{5}$ ✓. The complement, drawn one at a time, agrees. Zoe’s ticket survives the first draw with probability $\\frac{29}{30}$, then the second with probability $\\frac{28}{29}$, and so on down to $\\frac{24}{25}$ for the sixth. The product telescopes to $\\frac{24}{30} = \\frac{4}{5}$, so Zoe wins with probability $1 - \\frac{4}{5} = \\frac{1}{5}$ ✓. TAKING $\\frac{1}{30}$ prices a single draw when six are made ✗. USING $\\frac{6}{24} = \\frac{1}{4}$ compares the six winning tickets to the $24$ losing ones instead of to all $30$ ✗. STOPPING AT $\\frac{4}{5}$ reports the chance that Zoe’s ticket is NOT drawn ✗.',
    },
    {
      q: 'A number $n$ of cards is dealt from a shuffled standard deck of $52$ cards, every order of the deck equally likely, and the probability that the queen of hearts is among the $n$ cards dealt is exactly $\\frac{3}{26}$. What is $n$?',
      choices: ['$3$', '$12$', '$6$', '$46$'],
      answer: 2,
      solution:
        'By symmetry the queen of hearts is equally likely to occupy any of the $52$ positions of the shuffled deck, and the deal covers $n$ of them, so the probability is $\\frac{n}{52}$. Setting $\\frac{n}{52} = \\frac{3}{26}$ gives $26n = 156$, so $n = 6$ ✓. Counting hands from the other side agrees without reusing that formula: the queen is MISSED exactly when all $n$ cards come from the other $51$, which happens for $\\frac{\\binom{51}{n}}{\\binom{52}{n}} = \\frac{52 - n}{52}$ of the equally likely hands. Setting $\\frac{52 - n}{52} = 1 - \\frac{3}{26} = \\frac{23}{26}$ gives $52 - n = 46$, so $n = 6$ ✓. SOLVING $\\frac{n}{26} = \\frac{3}{26}$ gives $3$; it prices the deal against a $26$-card pool when all $52$ cards are shuffled ✗. MIS-SCALING $\\frac{3}{26}$ INTO $\\frac{3}{13}$ and solving $\\frac{n}{52} = \\frac{3}{13}$ gives $12$, twice the true count ✗. SOLVING $\\frac{52 - n}{52} = \\frac{3}{26}$ gives $46$; that is the number of cards left UNDEALT when the answer is $6$ ✗.',
    },
  ],

  // slot 3 — a round table (seat one person, then symmetry over the chairs
  //          left vs. counting chair pairs). Lanes: 10 chairs, opposite ->
  //          1/9; 10 chairs, adjacent -> 2/9; derived: 8 chairs, Cal opposite
  //          Ana or Ben -> 2/7.
  [
    {
      q: 'Ten people, including Ana and Ben, sit down at random in the $10$ evenly spaced chairs around a round table, with every seating equally likely. What is the probability that Ana sits directly opposite Ben?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{10}$', '$\\frac{2}{9}$', '$\\frac{1}{45}$'],
      answer: 0,
      solution:
        'Let Ana sit wherever she lands; the table looks the same from every chair, so it does not matter which. Exactly one of the $9$ chairs still open is directly across the table from her, and by symmetry Ben is equally likely to take any of those $9$: $\\frac{1}{9}$ ✓. The other eight people never enter the calculation. Counting chair pairs agrees. The unordered pair of chairs used by Ana and Ben is equally likely to be any of the $\\binom{10}{2} = 45$ pairs, and a $10$-chair circle has exactly $5$ pairs of opposite chairs, one for each diameter: $\\frac{5}{45} = \\frac{1}{9}$ ✓. TAKING $\\frac{1}{10}$ counts all ten chairs as available to Ben, but Ana is sitting in one of them ✗. TAKING $\\frac{2}{9}$ answers a different question, the chance that Ben is one of Ana’s two NEIGHBORS ✗. USING $\\frac{1}{45}$ counts a single diameter as the only favorable pair, when five diameters cross this table ✗.',
    },
    {
      q: 'Ten knights, including Sir Kay and Sir Bors, sit down at random in the $10$ evenly spaced chairs around a round table, with every seating equally likely. What is the probability that Kay and Bors sit in adjacent chairs?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{5}$', '$\\frac{2}{9}$', '$\\frac{4}{9}$'],
      answer: 2,
      solution:
        'Seat Kay first; every chair is the same by symmetry. Of the $9$ chairs left, exactly $2$ touch his — one on each side — and Bors is equally likely to take any of the $9$: $\\frac{2}{9}$ ✓. The other eight knights are scenery. Counting chair pairs agrees. The pair of chairs Kay and Bors occupy is equally likely to be any of the $\\binom{10}{2} = 45$ pairs, and a circle of $10$ chairs has exactly $10$ adjacent pairs, one for each gap between neighbors: $\\frac{10}{45} = \\frac{2}{9}$ ✓. TAKING $\\frac{1}{9}$ counts only the chair on Kay’s left and drops the one on his right ✗. USING $\\frac{9}{45} = \\frac{1}{5}$ counts the $9$ adjacent pairs of a straight ROW of ten chairs and misses the pair that closes the circle ✗. TAKING $\\frac{4}{9}$ counts the four chairs within two seats of Kay, which is a wider event than sitting next to him ✗.',
    },
    {
      q: 'Eight people, including Ana, Ben, and Cal, sit down at random in the $8$ evenly spaced chairs around a round table, with every seating equally likely. What is the probability that Cal sits directly opposite Ana or directly opposite Ben?',
      choices: ['$\\frac{1}{7}$', '$\\frac{2}{7}$', '$\\frac{3}{7}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'Seat Cal first and look only at the chair facing him. Exactly one chair does, and by symmetry each of the $7$ other people is equally likely to be the one sitting there. Two of those seven — Ana and Ben — make the event happen, so the probability is $\\frac{2}{7}$ ✓. Adding two disjoint events agrees. Seating Ana first, Cal takes one of the $7$ remaining chairs and exactly one faces her, so $P(\\text{Cal opposite Ana}) = \\frac{1}{7}$, and the same argument gives $P(\\text{Cal opposite Ben}) = \\frac{1}{7}$. Only one chair faces Cal, so Ana and Ben cannot both be in it and the two events never overlap: $\\frac{1}{7} + \\frac{1}{7} = \\frac{2}{7}$ ✓. STOPPING AT $\\frac{1}{7}$ answers only for Ana and forgets that Ben works too ✗. TAKING $\\frac{2}{8} = \\frac{1}{4}$ leaves Cal’s own chair in the pool of chairs the other seven could fill ✗. USING $\\frac{3}{7}$ also counts the seatings where ANA FACES BEN, which the question never asked about ✗.',
    },
  ],

  // slot 4 — no two chosen numbers consecutive (a shifting bijection vs. a gap
  //          count). Lanes: 4 from 1-12 -> 14/55; 3 of 12 lockers -> 6/11;
  //          derived: 3 from 1-10 that ARE consecutive -> 1/15.
  [
    {
      q: 'Four different numbers are chosen at random from $\\{1, 2, 3, \\ldots, 12\\}$, with every set of four equally likely. What is the probability that no two of the chosen numbers are consecutive integers?',
      choices: ['$\\frac{41}{55}$', '$\\frac{14}{99}$', '$\\frac{7}{33}$', '$\\frac{14}{55}$'],
      answer: 3,
      solution:
        'Choose the sample space to be the $\\binom{12}{4} = 495$ equally likely sets, then find a bijection. Write a favorable set in increasing order as $a < b < c < d$ with every gap at least $2$, and replace it by $a,\\, b - 1,\\, c - 2,\\, d - 3$. Each gap shrinks by exactly $1$, so the new numbers are four different numbers between $1$ and $9$; adding back $0, 1, 2, 3$ recovers the original set from any such choice, so the correspondence is one-to-one both ways. That gives $\\binom{9}{4} = 126$ favorable sets and $\\frac{126}{495} = \\frac{14}{55}$ ✓. Counting gaps directly agrees. Lay the $8$ unchosen numbers in a row; they create $9$ gaps, one before each of them and one at the end. A set with no two consecutive numbers drops exactly one chosen number into $4$ different gaps, and any such choice of $4$ gaps rebuilds the set, so again $\\binom{9}{4} = 126$ of $495$, or $\\frac{14}{55}$ ✓. TAKING $\\frac{41}{55}$ answers the complement, that some two of the four ARE consecutive ✗. SHIFTING BY FOUR — using $\\binom{8}{4} = 70$ for $\\frac{14}{99}$ — subtracts one step too many, since the smallest number never moves ✗. USING $\\frac{7}{33} = \\frac{105}{495}$ is the count for a LOOP in which $12$ and $1$ also count as consecutive, and this is a straight list ✗.',
    },
    {
      q: 'A hallway has a row of $12$ lockers, numbered $1$ through $12$ from one end. Three of them are chosen at random for inspection, with every set of three lockers equally likely. What is the probability that no two of the chosen lockers are next to each other?',
      choices: ['$\\frac{5}{11}$', '$\\frac{6}{11}$', '$\\frac{21}{55}$', '$\\frac{28}{55}$'],
      answer: 1,
      solution:
        'Take the sample space to be the $\\binom{12}{3} = 220$ equally likely sets of three lockers. Write a favorable set as $a < b < c$ with every gap at least $2$ and replace it by $a,\\, b - 1,\\, c - 2$: each gap shrinks by one, so the result is three different numbers from $1$ to $10$, and adding back $0, 1, 2$ undoes the move. So the favorable sets number $\\binom{10}{3} = 120$, and the probability is $\\frac{120}{220} = \\frac{6}{11}$ ✓. Counting gaps agrees. Line up the $9$ uninspected lockers; they open $10$ gaps, and a spread-out set drops one inspected locker into $3$ different gaps, which is $\\binom{10}{3} = 120$ ways, again $\\frac{6}{11}$ ✓. TAKING $\\frac{5}{11}$ answers the complement, that some two chosen lockers touch ✗. SHIFTING BY THREE — using $\\binom{9}{3} = 84$ for $\\frac{21}{55}$ — moves the smallest locker down as well, which it never needs ✗. USING $\\frac{28}{55} = \\frac{112}{220}$ is the count for a hallway bent into a LOOP so that lockers $12$ and $1$ are neighbors, and this hallway is straight ✗.',
    },
    {
      q: 'Three different numbers are chosen at random from $\\{1, 2, 3, \\ldots, 10\\}$, with every set of three equally likely. What is the probability that the three numbers are three consecutive integers?',
      choices: ['$\\frac{1}{15}$', '$\\frac{1}{120}$', '$\\frac{1}{12}$', '$\\frac{1}{90}$'],
      answer: 0,
      solution:
        'A run of three consecutive integers is pinned down by its smallest member alone, and that smallest member can be any of $1$ through $8$, since $9$ would need an $11$. So exactly $8$ of the $\\binom{10}{3} = 120$ equally likely sets are runs: $\\frac{8}{120} = \\frac{1}{15}$ ✓. Working with ordered picks agrees. Drawing three different numbers one at a time gives $10 \\cdot 9 \\cdot 8 = 720$ equally likely ordered triples, and each of the $8$ runs shows up in $3! = 6$ of them, for $48$ favorable triples: $\\frac{48}{720} = \\frac{1}{15}$ ✓. TAKING $\\frac{1}{120}$ counts a single run as the only favorable set, when eight runs fit inside $1$ through $10$ ✗. USING $\\frac{10}{120} = \\frac{1}{12}$ counts ten runs by wrapping around, letting $\\{9, 10, 1\\}$ pass as consecutive ✗. USING $\\frac{8}{720} = \\frac{1}{90}$ puts an unordered numerator over an ordered denominator ✗.',
    },
  ],

  // slot 5 — a game with ties replayed (ties cannot decide anything, so drop
  //          them vs. a geometric sum over rounds). Lanes: d8 versus d6 ->
  //          9/14; a 5-spinner versus a 3-spinner, the underdog -> 1/4;
  //          derived: the base d6-d4 game settled with no reroll -> 5/6.
  [
    {
      q: 'Ana rolls a fair eight-sided die with faces numbered $1$ through $8$ and Ben rolls a standard six-sided die. If the two numbers are equal, both roll again, and they keep doing so until the numbers differ; the player with the larger number then wins. What is the probability that Ana wins?',
      choices: ['$\\frac{9}{16}$', '$\\frac{9}{14}$', '$\\frac{11}{16}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'A tied round leaves the game exactly as it was, so ties cannot decide anything and can be thrown away. Of the $8 \\cdot 6 = 48$ equally likely pairs in one round, $6$ are ties, leaving $42$ deciding pairs, all equally likely. Ana’s number is larger in $7 + 6 + 5 + 4 + 3 + 2 = 27$ of them, counting by Ben’s number $1, 2, 3, 4, 5, 6$. So Ana wins with probability $\\frac{27}{42} = \\frac{9}{14}$ ✓. Summing over rounds agrees. In any one round Ana wins outright with probability $\\frac{27}{48}$ and the round is wasted with probability $\\frac{6}{48} = \\frac{1}{8}$, so Ana wins on round $1$, or round $2$, or round $3$, and so on: $\\frac{27}{48}\\left(1 + \\frac{1}{8} + \\frac{1}{64} + \\cdots\\right) = \\frac{27}{48} \\cdot \\frac{1}{1 - \\frac{1}{8}} = \\frac{27}{48} \\cdot \\frac{8}{7} = \\frac{9}{14}$ ✓. USING $\\frac{27}{48} = \\frac{9}{16}$ leaves the tied rounds in the denominator, as if a tie were a loss for Ana ✗. USING $\\frac{33}{48} = \\frac{11}{16}$ hands all six tied pairs to Ana instead of replaying them ✗. TAKING $\\frac{1}{2}$ treats the two dice as matched, but Ana’s die reaches $7$ and $8$ and Ben’s never does ✗.',
    },
    {
      q: 'Priya spins a spinner with $5$ equal sectors numbered $1$ through $5$ and Quinn spins a spinner with $3$ equal sectors numbered $1$ through $3$. If the two numbers are equal, both spin again, and they keep doing so until the numbers differ; the player with the higher number then wins. What is the probability that Quinn wins?',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{5}$', '$\\frac{3}{4}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'A tie sends the players back to the start with nothing changed, so tied rounds cannot decide the game and may be ignored. One round has $5 \\cdot 3 = 15$ equally likely pairs, of which $3$ are ties, leaving $12$ deciding pairs. Quinn’s number is higher in exactly $3$ of them — $2$ over $1$, $3$ over $1$, and $3$ over $2$ — so Quinn wins with probability $\\frac{3}{12} = \\frac{1}{4}$ ✓. Summing over rounds agrees. Each round Quinn wins outright with probability $\\frac{3}{15} = \\frac{1}{5}$ and is sent back with probability $\\frac{3}{15} = \\frac{1}{5}$, so his chance is $\\frac{1}{5}\\left(1 + \\frac{1}{5} + \\frac{1}{25} + \\cdots\\right) = \\frac{1}{5} \\cdot \\frac{5}{4} = \\frac{1}{4}$ ✓. USING $\\frac{3}{15} = \\frac{1}{5}$ keeps the tied pairs in the denominator, scoring a tie as a loss for Quinn ✗. USING $\\frac{6}{15} = \\frac{2}{5}$ awards the three tied pairs to Quinn rather than respinning them ✗. TAKING $\\frac{3}{4}$ answers for PRIYA, who wins the other $9$ of the $12$ deciding pairs ✗.',
    },
    {
      q: 'Ana rolls a standard six-sided die and Ben rolls a fair four-sided die with faces numbered $1$ through $4$. If the two numbers are equal, both roll again, and they keep doing so until the numbers differ; the player with the larger number then wins. What is the probability that the very first round already settles the game, so that no reroll is ever needed?',
      choices: ['$\\frac{1}{6}$', '$\\frac{7}{10}$', '$\\frac{5}{6}$', '$\\frac{8}{9}$'],
      answer: 2,
      solution:
        'The only thing that forces a reroll is a tie, so ask for the complement of a tie. One round has $6 \\cdot 4 = 24$ equally likely pairs, and a tie needs Ben’s number — one of $1, 2, 3, 4$ — matched by Ana, which happens in exactly $4$ pairs. So the first round settles the game with probability $1 - \\frac{4}{24} = \\frac{20}{24} = \\frac{5}{6}$ ✓. Counting the deciding pairs directly agrees. Ana’s number is larger in $5 + 4 + 3 + 2 = 14$ pairs, counting by Ben’s number, and Ben’s is larger in $0 + 1 + 2 + 3 = 6$ pairs, for $14 + 6 = 20$ pairs that end the game on the spot out of $24$: $\\frac{20}{24} = \\frac{5}{6}$ ✓. TAKING $\\frac{1}{6}$ reports the chance of a TIE, which is the chance that a reroll IS needed ✗. TAKING $\\frac{7}{10}$ answers the base question, the chance that ANA WINS the whole game ✗. USING $1 - \\frac{4}{36} = \\frac{8}{9}$ counts $36$ equally likely pairs, as if Ben’s die had six faces like Ana’s ✗.',
    },
  ],

  // slot 6 — comparing two piles of coin flips (turn every coin over vs. a
  //          full tally). Lanes: 5 coins each, same number of heads ->
  //          63/256; 3 coins versus 4, more heads -> 1/2; derived: 3 coins
  //          each, strictly more heads -> 11/32.
  [
    {
      q: 'Ana flips $5$ fair coins and Ben flips $5$ fair coins, all ten flips independent. What is the probability that Ana and Ben get the same number of heads?',
      choices: ['$\\frac{63}{256}$', '$\\frac{1}{32}$', '$\\frac{1}{2}$', '$\\frac{125}{512}$'],
      answer: 0,
      solution:
        'Reframe by turning every one of Ben’s coins over. His heads become tails and his tails become heads, and since each coin is fair the ten flips are still equally likely to show any of the $2^{10} = 1024$ patterns. Ben matched Ana exactly when his new head count is $5$ minus Ana’s — that is, when Ana’s heads and Ben’s new heads add to $5$, so that exactly $5$ heads show among the ten coins. That happens for $\\binom{10}{5} = 252$ patterns: $\\frac{252}{1024} = \\frac{63}{256}$ ✓. The tally agrees. Ana and Ben both show $k$ heads in $\\binom{5}{k}^2$ of the $1024$ patterns, so the count is $1^2 + 5^2 + 10^2 + 10^2 + 5^2 + 1^2 = 1 + 25 + 100 + 100 + 25 + 1 = 252$, again $\\frac{63}{256}$ ✓. TAKING $\\frac{1}{32}$ demands that Ben match Ana coin by coin, a much stronger event than matching totals ✗. TAKING $\\frac{1}{2}$ treats “same” and “different” as a fair split, when there are six ways to tie and thirty ways not to ✗. USING $\\frac{250}{1024} = \\frac{125}{512}$ drops the all-heads and all-tails ties, which count like any other ✗.',
    },
    {
      q: 'Ana flips $3$ fair coins and Ben flips $4$ fair coins, all seven flips independent. What is the probability that Ben gets strictly more heads than Ana?',
      choices: ['$\\frac{29}{128}$', '$\\frac{99}{128}$', '$\\frac{1}{2}$', '$\\frac{11}{32}$'],
      answer: 2,
      solution:
        'Reframe by turning all seven coins over at once; the $2^7 = 128$ patterns stay equally likely. If Ana had $a$ heads and Ben had $b$, the flipped piles show $3 - a$ and $4 - b$. Now $b > a$ means $b \\ge a + 1$, which rearranges to $4 - b \\le 3 - a$: Ben’s flipped count is at most Ana’s flipped count. So turning the coins over matches every outcome where Ben leads with an outcome where Ben does NOT lead, one for one. Two events that trade places under a bijection have equal probability and together cover everything, so each is $\\frac{1}{2}$ ✓. The tally agrees. Ben’s head count is $0, 1, 2, 3, 4$ with counts $1, 4, 6, 4, 1$ out of $16$, so Ben beats a total of $a$ with probability $\\frac{15}{16}, \\frac{11}{16}, \\frac{5}{16}, \\frac{1}{16}$ for $a = 0, 1, 2, 3$. Weighting by Ana’s counts $1, 3, 3, 1$ out of $8$ gives $\\frac{1 \\cdot 15 + 3 \\cdot 11 + 3 \\cdot 5 + 1 \\cdot 1}{128} = \\frac{64}{128} = \\frac{1}{2}$ ✓. USING $\\frac{99}{128}$ counts the ties as wins for Ben, answering “at least as many” ✗. USING $\\frac{29}{128}$ answers the other direction, the chance that ANA leads ✗. TAKING $\\frac{11}{32}$ pretends Ben also flips three coins, which makes the two players symmetric and changes the problem ✗.',
    },
    {
      q: 'Ana flips $3$ fair coins and Ben flips $3$ fair coins, all six flips independent. What is the probability that Ana gets strictly more heads than Ben?',
      choices: ['$\\frac{5}{16}$', '$\\frac{11}{32}$', '$\\frac{1}{2}$', '$\\frac{21}{32}$'],
      answer: 1,
      solution:
        'Split the outcomes into three groups: Ana leads, Ben leads, or they tie. The two players flip the same number of fair coins, so swapping their names is a bijection on the $64$ equally likely patterns and the first two groups have equal probability. For the ties, turn Ben’s three coins over: he ties Ana exactly when the six coins then show $3$ heads in total, which happens for $\\binom{6}{3} = 20$ patterns, a probability of $\\frac{20}{64} = \\frac{5}{16}$. So Ana leads with probability $\\frac{1}{2}\\left(1 - \\frac{5}{16}\\right) = \\frac{11}{32}$ ✓. The tally agrees. Ben shows $0, 1, 2, 3$ heads with counts $1, 3, 3, 1$ out of $8$, so Ana’s total of $a$ beats Ben with probability $0, \\frac{1}{8}, \\frac{4}{8}, \\frac{7}{8}$ for $a = 0, 1, 2, 3$. Weighting by Ana’s own counts gives $\\frac{3 \\cdot 1 + 3 \\cdot 4 + 1 \\cdot 7}{64} = \\frac{22}{64} = \\frac{11}{32}$ ✓. TAKING $\\frac{5}{16}$ reports the chance of a TIE ✗. TAKING $\\frac{1}{2}$ splits the outcomes two ways and forgets that the ties belong to neither player ✗. USING $\\frac{21}{32}$ folds the ties in with Ana’s wins, answering “at least as many” ✗.',
    },
  ],

  // slot 7 — which special card shows up first (the ordinary cards are
  //          scenery). Lanes: first two of the 12 face cards both jacks ->
  //          1/11; first band song is a Lark -> 3/7; derived: first two aces
  //          the same color -> 1/3.
  [
    {
      q: 'A standard deck of $52$ cards is shuffled, every order equally likely, and the cards are turned over one at a time. What is the probability that the first two face cards to appear are both jacks? (The face cards are the four jacks, the four queens, and the four kings.)',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{3}$', '$\\frac{1}{11}$', '$\\frac{1}{221}$'],
      answer: 2,
      solution:
        'The $40$ other cards are scenery: they can sit anywhere without changing which face card comes first or second. Only the relative order of the $12$ face cards matters, and by symmetry all of their orders are equally likely. The first of them is a jack with probability $\\frac{4}{12} = \\frac{1}{3}$, and then the second is one of the $3$ jacks left among the $11$ face cards left, probability $\\frac{3}{11}$: $\\frac{1}{3} \\cdot \\frac{3}{11} = \\frac{1}{11}$ ✓. Choosing an unordered sample space agrees. The set formed by the first two face cards is equally likely to be any of the $\\binom{12}{2} = 66$ pairs of face cards, and $\\binom{4}{2} = 6$ of those pairs are two jacks: $\\frac{6}{66} = \\frac{1}{11}$ ✓. USING $\\left(\\frac{4}{12}\\right)^2 = \\frac{1}{9}$ lets the same jack count twice, since the second face card cannot repeat the first ✗. STOPPING AT $\\frac{1}{3}$ asks only that the first face card be a jack ✗. USING $\\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{1}{221}$ demands two jacks on TOP of the whole deck, not merely ahead of the other face cards ✗.',
    },
    {
      q: 'A playlist of $25$ songs is shuffled, every order equally likely, and played one song at a time. Exactly $4$ of the songs are by the Herons and exactly $3$ are by the Larks; no other song on the playlist is by either band. What is the probability that the first song by either band to play is by the Larks?',
      choices: ['$\\frac{3}{7}$', '$\\frac{3}{25}$', '$\\frac{4}{7}$', '$\\frac{7}{25}$'],
      answer: 0,
      solution:
        'The $18$ songs by other bands are scenery: they can be scattered anywhere in the playlist without changing which of the $7$ band songs plays first. So only those $7$ matter, all of their orders are equally likely, and whichever one leads decides the question. Three of the seven are Larks songs, so the probability is $\\frac{3}{7}$ ✓. Naming one song agrees. Take one particular Larks song; the $7$ band songs appear in one of $7!$ equally likely relative orders, and $6!$ of them put that song first, so it leads with probability $\\frac{6!}{7!} = \\frac{1}{7}$. Two different Larks songs cannot both be first, so the three events are disjoint and add: $3 \\cdot \\frac{1}{7} = \\frac{3}{7}$ ✓. TAKING $\\frac{3}{25}$ answers whether the very FIRST song of the playlist is a Larks song, which is a different event ✗. TAKING $\\frac{4}{7}$ reports the Herons’ share, the chance that they lead instead ✗. TAKING $\\frac{7}{25}$ answers whether the first song of the playlist is by either band at all ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled, every order equally likely, and the cards are turned over one at a time. What is the probability that the first two aces to appear are the same color as each other?',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution:
        'The $48$ non-aces are scenery, so only the order of the four aces among themselves matters, and by symmetry all of those orders are equally likely. Whatever the first ace turns out to be, exactly $1$ of the $3$ aces still buried shares its color, and each of the three is equally likely to come next: $\\frac{1}{3}$ ✓. An unordered count agrees. The pair formed by the first two aces is equally likely to be any of the $\\binom{4}{2} = 6$ pairs of aces, and exactly $2$ of those pairs are one color — the two black aces and the two red aces: $\\frac{2}{6} = \\frac{1}{3}$ ✓. TAKING $\\frac{1}{6}$ answers the base question, which asks for both aces to be BLACK and rules out the red pair ✗. TAKING $\\frac{1}{2}$ treats the second ace as equally likely to match or not, when only $1$ of the $3$ remaining aces matches ✗. TAKING $\\frac{2}{3}$ reports the complement, that the first two aces are different colors ✗.',
    },
  ],

  // slot 8 — three named people spread over groups (place one, then count the
  //          spots the others can take). Lanes: 15 into three 5s, exactly two
  //          together -> 60/91; 16 into four heats of 4, all different ->
  //          16/35; derived: 12 into three 4s, at least two together -> 39/55.
  [
    {
      q: 'Fifteen students, including Ana, Ben, and Cal, are divided at random into three project groups of five students each, with every division equally likely. What is the probability that exactly two of Ana, Ben, and Cal end up in the same group, with the third in a different group?',
      choices: ['$\\frac{6}{91}$', '$\\frac{25}{91}$', '$\\frac{66}{91}$', '$\\frac{60}{91}$'],
      answer: 3,
      solution:
        'Place Ana first and rule out the two cases that are not wanted; the other twelve students never matter. Her group has $4$ empty spots among the $14$ spots left, so Ben joins her with probability $\\frac{4}{14}$, and then Cal joins them with probability $\\frac{3}{13}$: all three together has probability $\\frac{4}{14} \\cdot \\frac{3}{13} = \\frac{6}{91}$. Ben lands elsewhere with probability $\\frac{10}{14}$, and then Cal must take one of the $5$ spots in the untouched group out of the $13$ left: all three apart has probability $\\frac{10}{14} \\cdot \\frac{5}{13} = \\frac{25}{91}$. Everything else is exactly two together: $1 - \\frac{6}{91} - \\frac{25}{91} = \\frac{60}{91}$ ✓. Adding the three pairings agrees. Ana and Ben share a group while Cal does not: $\\frac{4}{14} \\cdot \\frac{10}{13} = \\frac{20}{91}$. Naming the pair Ana–Cal or Ben–Cal instead gives the same probability by symmetry, and the three pairings cannot happen at once, so $3 \\cdot \\frac{20}{91} = \\frac{60}{91}$ ✓. TAKING $\\frac{6}{91}$ answers for ALL THREE in one group ✗. TAKING $\\frac{25}{91}$ answers for all three in DIFFERENT groups ✗. TAKING $\\frac{66}{91}$ answers “at least two together”, which wrongly keeps the case of all three together ✗.',
    },
    {
      q: 'Sixteen runners, including Ana, Ben, and Cal, are placed at random into four heats of four runners each, with every placement equally likely. What is the probability that the three of them land in three different heats?',
      choices: ['$\\frac{1}{35}$', '$\\frac{16}{35}$', '$\\frac{19}{35}$', '$\\frac{3}{8}$'],
      answer: 1,
      solution:
        'Place Ana first; the thirteen other runners never enter the count. Of the $15$ spots left, $12$ are outside her heat, so Ben avoids her with probability $\\frac{12}{15}$. Two heats are now spoken for, and $8$ of the $14$ remaining spots lie in the other two heats, so Cal avoids both with probability $\\frac{8}{14}$. That gives $\\frac{12}{15} \\cdot \\frac{8}{14} = \\frac{96}{210} = \\frac{16}{35}$ ✓. Counting spot sets agrees. Think of the $16$ places as labeled slots; the three runners occupy a set of $3$ of them, equally likely to be any of the $\\binom{16}{3} = 560$ sets. A favorable set uses $3$ different heats, chosen in $\\binom{4}{3} = 4$ ways, with one of the $4$ slots taken from each, for $4 \\cdot 4^3 = 256$ sets: $\\frac{256}{560} = \\frac{16}{35}$ ✓. TAKING $\\frac{1}{35}$ answers for all three in ONE heat ✗. TAKING $\\frac{19}{35}$ reports the complement, that some two of them share a heat ✗. USING $\\frac{12}{16} \\cdot \\frac{8}{16} = \\frac{3}{8}$ divides by $16$ both times, as if placing Ana and Ben freed up no spots ✗.',
    },
    {
      q: 'Twelve students, including Ana, Ben, and Cal, are divided at random into three project groups of four students each, one group for each of three different projects, with every division equally likely. What is the probability that at least two of Ana, Ben, and Cal work on the same project?',
      choices: ['$\\frac{39}{55}$', '$\\frac{36}{55}$', '$\\frac{16}{55}$', '$\\frac{3}{55}$'],
      answer: 0,
      solution:
        'Go after the complement, which is a single clean case. Place Ana; of the $11$ spots left, $8$ are outside her group, so Ben avoids her with probability $\\frac{8}{11}$, and then $4$ of the $10$ remaining spots sit in the group neither has touched, so Cal avoids both with probability $\\frac{4}{10}$. All three apart has probability $\\frac{8}{11} \\cdot \\frac{4}{10} = \\frac{16}{55}$, so at least two share a project with probability $1 - \\frac{16}{55} = \\frac{39}{55}$ ✓. Adding the two disjoint favorable cases agrees. All three together: $\\frac{3}{11} \\cdot \\frac{2}{10} = \\frac{3}{55}$. Exactly one named pair together with the third elsewhere: $\\frac{3}{11} \\cdot \\frac{8}{10} = \\frac{12}{55}$, and there are three such pairs, for $\\frac{36}{55}$. Together that is $\\frac{3}{55} + \\frac{36}{55} = \\frac{39}{55}$ ✓. TAKING $\\frac{36}{55}$ answers the base question, EXACTLY two together, and drops the case where all three share a project ✗. TAKING $\\frac{16}{55}$ reports the complement, all three on different projects ✗. TAKING $\\frac{3}{55}$ counts only the case of all three together ✗.',
    },
  ],

  // slot 9 — the largest and smallest values on a handful of dice (count the
  //          window and take out what is missing vs. casework). Lanes: three
  //          d6, largest 5 and smallest 2 -> 1/12; four d4, largest 4 and
  //          smallest 1 -> 55/128; derived: three d6, largest exactly 6 ->
  //          91/216.
  [
    {
      q: 'Three standard six-sided dice are rolled. What is the probability that the largest number showing is exactly $5$ and the smallest number showing is exactly $2$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{12}$', '$\\frac{5}{108}$', '$\\frac{1}{27}$'],
      answer: 1,
      solution:
        'Shrink the sample space first. If the largest is $5$ and the smallest is $2$, every die shows a $2$, $3$, $4$, or $5$, which happens for $4^3 = 64$ of the $216$ equally likely rolls. Inside that window, throw out the rolls that miss the $5$ ($3^3 = 27$ of them) and the rolls that miss the $2$ ($27$ more), then add back the $2^3 = 8$ rolls that miss both and were removed twice: $64 - 27 - 27 + 8 = 18$. So the probability is $\\frac{18}{216} = \\frac{1}{12}$ ✓. Casework on the third die agrees. The roll must contain a $5$ and a $2$, and the third value can be $2$, $3$, $4$, or $5$. The multiset $\\{5, 2, 2\\}$ has $3$ arrangements, $\\{5, 2, 3\\}$ has $6$, $\\{5, 2, 4\\}$ has $6$, and $\\{5, 5, 2\\}$ has $3$, for $3 + 6 + 6 + 3 = 18$ rolls: $\\frac{18}{216} = \\frac{1}{12}$ ✓. USING $3 \\cdot 2 \\cdot 4 = 24$ rolls for $\\frac{1}{9}$ picks a die for the $5$, a die for the $2$, and lets the third be anything in the window, counting a roll like $5, 5, 2$ twice ✗. USING $\\frac{64 - 27 - 27}{216} = \\frac{5}{108}$ forgets to add back the $8$ rolls that dodge both the $5$ and the $2$ ✗. USING $\\frac{8}{216} = \\frac{1}{27}$ allows only $2$s and $5$s, but a $3$ or a $4$ leaves the largest and smallest alone ✗.',
    },
    {
      q: 'Four fair four-sided dice, each with faces numbered $1$ through $4$, are rolled. What is the probability that the largest number showing is $4$ and the smallest number showing is $1$?',
      choices: ['$\\frac{3}{32}$', '$\\frac{47}{128}$', '$\\frac{73}{128}$', '$\\frac{55}{128}$'],
      answer: 3,
      solution:
        'There are $4^4 = 256$ equally likely rolls. Take out the ones that miss a $4$, namely the $3^4 = 81$ rolls using only $1, 2, 3$, and the ones that miss a $1$, namely the $81$ rolls using only $2, 3, 4$. The $2^4 = 16$ rolls using only $2$ and $3$ were removed twice, so add them back: $256 - 81 - 81 + 16 = 110$, and the probability is $\\frac{110}{256} = \\frac{55}{128}$ ✓. Conditioning instead of correcting agrees. Rolls showing at least one $1$ number $256 - 81 = 175$. Among those, the ones with no $4$ use only $1, 2, 3$ and show at least one $1$, which is $81 - 16 = 65$ rolls. Subtracting leaves $175 - 65 = 110$ rolls with both a $1$ and a $4$: $\\frac{110}{256} = \\frac{55}{128}$ ✓. USING $\\frac{4!}{256} = \\frac{3}{32}$ demands all four dice show different numbers, but a roll like $1, 1, 3, 4$ works fine ✗. USING $\\frac{256 - 81 - 81}{256} = \\frac{47}{128}$ leaves out the $16$ rolls that dodge both values and were subtracted twice ✗. TAKING $\\frac{73}{128}$ reports the complement, that some end of the range is missing ✗.',
    },
    {
      q: 'Three standard six-sided dice are rolled. What is the probability that the largest number showing is exactly $6$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{125}{216}$', '$\\frac{91}{216}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'Saying the largest number is exactly $6$ is the same as saying at least one die shows a $6$, since nothing on a die beats $6$. That flips the question into an easy complement: rolls with no $6$ at all use only $1$ through $5$, so there are $5^3 = 125$ of them out of $216$, leaving $216 - 125 = 91$ rolls with a $6$: $\\frac{91}{216}$ ✓. Casework on how many $6$s appear agrees. Exactly one $6$: choose the die in $3$ ways and fill the others from $1$ through $5$ in $5^2 = 25$ ways, for $75$ rolls. Exactly two $6$s: choose the odd die out in $3$ ways and give it one of $5$ values, for $15$ rolls. Three $6$s: $1$ roll. That is $75 + 15 + 1 = 91$ rolls: $\\frac{91}{216}$ ✓. USING $3 \\cdot \\frac{1}{6} = \\frac{1}{2}$ adds up the three dice’s chances as if two dice could never both show $6$ ✗. TAKING $\\frac{125}{216}$ reports the chance of NO $6$ ✗. TAKING $\\frac{1}{6}$ asks only whether one named die shows a $6$ ✗.',
    },
  ],

  // slot 10 — how long a drawing takes (read it off the tail of the order).
  //           Lanes: 4 red of 9, all reds out within 7 -> 5/18; deck, all four
  //           aces within 50 -> 188/221; derived: base jar needs all 10 draws
  //           -> 2/5.
  [
    {
      q: 'A jar holds $4$ red balls and $5$ white balls. The balls are drawn one at a time without replacement, in a random order with every order equally likely, until all four red balls have been drawn. What is the probability that this takes at most $7$ draws?',
      choices: ['$\\frac{5}{18}$', '$\\frac{5}{9}$', '$\\frac{13}{18}$', '$\\frac{1}{6}$'],
      answer: 0,
      solution:
        'Reframe the stopping rule as a statement about the end of the line. Imagine all $9$ balls laid out in the order they would come out. The reds are all gone within $7$ draws exactly when neither of the last two positions holds a red — that is, when positions $8$ and $9$ are both white. By symmetry those two positions are as random as any two, so the probability is $\\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{20}{72} = \\frac{5}{18}$ ✓. No casework about the first three reds is needed. Counting position sets agrees. The four reds occupy a set of $4$ positions out of $9$, and all $\\binom{9}{4} = 126$ sets are equally likely; the favorable ones fit inside positions $1$ through $7$, and there are $\\binom{7}{4} = 35$ of those: $\\frac{35}{126} = \\frac{5}{18}$ ✓. TAKING $\\frac{5}{9}$ only makes the LAST ball white, which still allows a red to sit in position $8$ ✗. TAKING $\\frac{13}{18}$ reports the complement, that the drawing runs past seven ✗. USING $\\frac{4}{9} \\cdot \\frac{3}{8} = \\frac{1}{6}$ makes the last two balls both RED ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled, every order equally likely, and dealt one card at a time until all four aces have appeared. What is the probability that this happens within the first $50$ cards?',
      choices: ['$\\frac{12}{13}$', '$\\frac{33}{221}$', '$\\frac{188}{221}$', '$\\frac{1}{221}$'],
      answer: 2,
      solution:
        'Look at the bottom of the deck instead of the top. All four aces show up within $50$ cards exactly when neither of the last two cards is an ace. By symmetry the bottom two cards are as random as any two cards, so the probability is $\\frac{48}{52} \\cdot \\frac{47}{51} = \\frac{2256}{2652} = \\frac{188}{221}$ ✓. Counting position sets agrees. The four aces occupy a set of $4$ positions out of $52$, all $\\binom{52}{4} = 270{,}725$ sets equally likely, and the favorable sets fit inside the first $50$ positions: $\\binom{50}{4} = 230{,}300$. That gives $\\frac{230{,}300}{270{,}725} = \\frac{188}{221}$ ✓. USING $\\frac{48}{52} = \\frac{12}{13}$ only keeps an ace off the very bottom card, which still allows one at position $51$ ✗. TAKING $\\frac{33}{221}$ reports the complement, that the deal runs past card $50$ ✗. USING $\\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{1}{221}$ makes the bottom two cards both ACES ✗.',
    },
    {
      q: 'A jar holds $4$ red balls and $6$ white balls. The balls are drawn one at a time without replacement, in a random order with every order equally likely, until all four red balls have been drawn. What is the probability that all $10$ draws are needed?',
      choices: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{10}$', '$\\frac{2}{15}$'],
      answer: 1,
      solution:
        'The tenth draw is needed exactly when the last ball in the jar is red, since any earlier finish would leave a white ball sitting at the bottom. By symmetry the ball in the last position is equally likely to be any of the $10$, and $4$ of them are red: $\\frac{4}{10} = \\frac{2}{5}$ ✓. Counting position sets agrees. The four reds occupy a set of $4$ positions out of $10$, all $\\binom{10}{4} = 210$ sets equally likely, and the favorable ones contain position $10$ together with $3$ of the first $9$, which is $\\binom{9}{3} = 84$ sets: $\\frac{84}{210} = \\frac{2}{5}$ ✓. TAKING $\\frac{3}{5}$ makes the last ball WHITE, which is exactly when the drawing stops early ✗. TAKING $\\frac{1}{10}$ prices one named red ball landing last, when any of the four will do ✗. USING $\\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{2}{15}$ makes the last TWO balls red, a stricter demand than the question makes ✗.',
    },
  ],

  // slot 11 — matching pairs pulled from a drawer (complement one item at a
  //           time vs. counting sets by pair). Lanes: 6 mitten pairs, 4 pulled
  //           -> 17/33; 10 tile pairs, 3 flipped -> 3/19; derived: base sock
  //           drawer, 4 pulled, NO match -> 8/21.
  [
    {
      q: 'A drawer holds $6$ pairs of mittens, $12$ mittens in all, and no two pairs look alike. Four mittens are pulled out at random, with every set of four equally likely. What is the probability that at least two of them form a matching pair?',
      choices: ['$\\frac{16}{33}$', '$\\frac{1}{11}$', '$\\frac{17}{33}$', '$\\frac{6}{11}$'],
      answer: 2,
      solution:
        'Chase the complement one mitten at a time, since “no pair at all” is a single clean story. The first mitten can be anything. The second must dodge the first one’s partner: $\\frac{10}{11}$. The third must dodge two partners: $\\frac{8}{10}$. The fourth must dodge three: $\\frac{6}{9}$. So no pair appears with probability $\\frac{10}{11} \\cdot \\frac{8}{10} \\cdot \\frac{6}{9} = \\frac{480}{990} = \\frac{16}{33}$, and at least one pair appears with probability $1 - \\frac{16}{33} = \\frac{17}{33}$ ✓. Counting sets agrees. Of the $\\binom{12}{4} = 495$ equally likely sets, a set with no pair picks $4$ of the $6$ pairs and then one mitten from each: $\\binom{6}{4} \\cdot 2^4 = 15 \\cdot 16 = 240$ sets. That leaves $495 - 240 = 255$ sets with a match: $\\frac{255}{495} = \\frac{17}{33}$ ✓. TAKING $\\frac{16}{33}$ stops at the complement, no match at all ✗. TAKING $\\frac{1}{11}$ prices only the second mitten matching the first and ignores the last two ✗. USING $6 \\cdot \\binom{10}{2} = 270$ sets for $\\frac{6}{11}$ counts a pair plus any two other mittens, which counts every two-pair set twice ✗.',
    },
    {
      q: 'A memory game has $20$ tiles making up $10$ matching pairs, and no two pairs carry the same picture. Three tiles are flipped over at random, with every set of three equally likely. What is the probability that some two of the three tiles match?',
      choices: ['$\\frac{3}{19}$', '$\\frac{16}{19}$', '$\\frac{1}{19}$', '$\\frac{7}{25}$'],
      answer: 0,
      solution:
        'Go for the complement, which is one clean chain. The first tile can be anything; the second must dodge the first tile’s twin, probability $\\frac{18}{19}$; the third must dodge two twins, probability $\\frac{16}{18}$. So no match has probability $\\frac{18}{19} \\cdot \\frac{16}{18} = \\frac{16}{19}$, and some two match with probability $1 - \\frac{16}{19} = \\frac{3}{19}$ ✓. A direct count agrees. Of the $\\binom{20}{3} = 1140$ equally likely sets, a favorable one is a matching pair together with any third tile: $10 \\cdot 18 = 180$ sets, with no double counting because three tiles cannot hold two full pairs. So $\\frac{180}{1140} = \\frac{3}{19}$ ✓. TAKING $\\frac{16}{19}$ stops at the complement, no match at all ✗. TAKING $\\frac{1}{19}$ prices only the second tile matching the first and forgets the third ✗. USING $1 - \\frac{18}{20} \\cdot \\frac{16}{20} = \\frac{7}{25}$ keeps the denominator at $20$, as if each flipped tile went back into the pile ✗.',
    },
    {
      q: 'A drawer holds $5$ pairs of socks, $10$ socks in all, and no two pairs look alike. Four socks are pulled out at random, with every set of four equally likely. What is the probability that no two of them form a matching pair?',
      choices: ['$\\frac{13}{21}$', '$\\frac{24}{125}$', '$\\frac{2}{3}$', '$\\frac{8}{21}$'],
      answer: 3,
      solution:
        'Take the socks out one at a time and keep dodging partners. The first sock can be anything. The second must avoid the first sock’s mate, leaving $8$ safe socks of the $9$ still in the drawer: $\\frac{8}{9}$. The third must avoid two mates: $\\frac{6}{8}$. The fourth must avoid three: $\\frac{4}{7}$. So the probability is $\\frac{8}{9} \\cdot \\frac{6}{8} \\cdot \\frac{4}{7} = \\frac{192}{504} = \\frac{8}{21}$ ✓. Counting sets agrees. Of the $\\binom{10}{4} = 210$ equally likely sets of four socks, a pair-free one uses $4$ of the $5$ pairs and takes one sock from each: $\\binom{5}{4} \\cdot 2^4 = 5 \\cdot 16 = 80$ sets. That gives $\\frac{80}{210} = \\frac{8}{21}$ ✓. TAKING $\\frac{13}{21}$ reports the complement, that some two socks match ✗. USING $\\frac{8}{10} \\cdot \\frac{6}{10} \\cdot \\frac{4}{10} = \\frac{24}{125}$ keeps the denominator at $10$, as if each sock were tossed back before the next pull ✗. TAKING $\\frac{2}{3}$ answers the base drawer with only THREE socks pulled and stops one sock early ✗.',
    },
  ],

  // slot 12 — the card right after the first special one (the gap argument,
  //           one named card at a time). Lanes: 13 hearts, first face card ->
  //           3/13; 24 beads, 5 amber -> 5/24; derived: the card after the
  //           first ace is the ace of spades in particular -> 1/52.
  [
    {
      q: 'The $13$ hearts of a standard deck are shuffled on their own, every order equally likely, and turned over one at a time until the first face card — the jack, the queen, or the king — appears. What is the probability that the very next card is also a face card? (If that first face card is the last of the $13$, there is no next card and the event does not happen.)',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{1}{13}$', '$\\frac{3}{13}$'],
      answer: 3,
      solution:
        'Ask the question about one named card first. Take the jack out, shuffle the other $12$ hearts, and slip the jack back into one of the $13$ gaps — before the first card, between two cards, or at the end — each gap equally likely. The jack is the card immediately after the first face card exactly when it lands in the one gap just behind the first face card among those $12$; in every other gap it either sits somewhere else entirely or becomes the first face card itself, and then the card after it is not the jack. So that event has probability $\\frac{1}{13}$, and the identical argument gives $\\frac{1}{13}$ for the queen and $\\frac{1}{13}$ for the king. Only one card can follow the first face card, so the three events never overlap and add: $\\frac{3}{13}$ ✓. Counting position sets agrees. The three face cards occupy a set of $3$ positions out of $13$, all $\\binom{13}{3} = 286$ sets equally likely, and the event says the two smallest positions are next to each other. Taking the smallest to be $p$, the second is $p + 1$ and the third is any of the $12 - p$ positions above it, so the count is $11 + 10 + \\cdots + 1 = 66$: $\\frac{66}{286} = \\frac{3}{13}$ ✓. USING $\\frac{2}{12} = \\frac{1}{6}$ treats the first face card as a card pulled out at random and reads $2$ face cards among the $12$ left, forgetting that every card ahead of it is known to be a low card ✗. USING $\\frac{3}{12} = \\frac{1}{4}$ makes the same mistake without even removing the first face card ✗. TAKING $\\frac{1}{13}$ prices one named face card’s gap and forgets the other two ✗.',
    },
    {
      q: 'A necklace kit holds $24$ beads, exactly $5$ of them amber and the other $19$ clear. The beads are strung in a random order, every order equally likely, and revealed one bead at a time until the first amber bead appears. What is the probability that the very next bead is also amber? (If the first amber bead is the last of the $24$, there is no next bead and the event does not happen.)',
      choices: ['$\\frac{4}{23}$', '$\\frac{5}{24}$', '$\\frac{5}{23}$', '$\\frac{1}{24}$'],
      answer: 1,
      solution:
        'Work with one named amber bead at a time. Pull that bead out, string the other $23$ in a random order, and drop it back into one of the $24$ gaps, each equally likely. It is the bead right after the first amber bead exactly when it falls in the single gap just behind the first amber of those $23$: probability $\\frac{1}{24}$. The same argument works word for word for each of the five amber beads, and only one bead can follow the first amber, so the five events are disjoint and add to $\\frac{5}{24}$ ✓. Counting position sets agrees. The five amber beads occupy a set of $5$ positions out of $24$, all $\\binom{24}{5} = 42{,}504$ sets equally likely, and the event asks that the two smallest positions be adjacent. Summing over the smallest position gives $\\binom{22}{3} + \\binom{21}{3} + \\cdots + \\binom{3}{3} = \\binom{23}{4} = 8855$ favorable sets: $\\frac{8855}{42{,}504} = \\frac{5}{24}$ ✓. USING $\\frac{4}{23}$ treats the first amber bead as one pulled out at random, leaving $4$ ambers among $23$ beads, and ignores that every bead ahead of it is known to be clear ✗. USING $\\frac{5}{23}$ makes the same mistake without even removing the first amber ✗. TAKING $\\frac{1}{24}$ prices one named amber bead’s gap and forgets the other four ✗.',
    },
    {
      q: 'A standard deck of $52$ cards is shuffled, every order equally likely, and the cards are turned over one at a time until the first ace appears. What is the probability that the very next card is the ace of spades? (If the first ace is the last card of the deck, there is no next card and the event does not happen.)',
      choices: ['$\\frac{1}{52}$', '$\\frac{1}{13}$', '$\\frac{1}{51}$', '$\\frac{1}{208}$'],
      answer: 0,
      solution:
        'Only one card is named, so the gap argument answers it in one step. Take the ace of spades out of the deck, shuffle the other $51$ cards, and slide it back into one of the $52$ gaps, each equally likely. It is the card immediately after the first ace exactly when it lands in the single gap just behind the first ace of those $51$; anywhere earlier it becomes the first ace itself, and anywhere else it is not the card following the first ace. So the probability is $\\frac{1}{52}$ ✓. Splitting the question into positions and labels agrees. The four aces sit on a set of $4$ positions out of $52$, and the four aces are then arranged on those positions in one of $4!$ equally likely ways. The two smallest positions are adjacent for $\\binom{51}{3} = 20{,}825$ of the $\\binom{52}{4} = 270{,}725$ position sets, a probability of $\\frac{1}{13}$, and given that, the ace of spades holds the second of the four slots with probability $\\frac{1}{4}$: $\\frac{1}{13} \\cdot \\frac{1}{4} = \\frac{1}{52}$ ✓. TAKING $\\frac{1}{13}$ answers the base question, in which ANY of the four aces may follow ✗. USING $\\frac{1}{51}$ treats the first ace as a card removed at random and hunts the spade among $51$ unknowns, forgetting that every card ahead of the first ace is known to be a non-ace ✗. USING $\\frac{1}{4} \\cdot \\frac{1}{52} = \\frac{1}{208}$ discounts the gap answer by another $\\frac{1}{4}$, naming the spade a second time when the gap argument already named it ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 9,
  challenge,
}
