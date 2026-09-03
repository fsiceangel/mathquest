// Counting chapter 15 — variations for section 15.2 (Problems).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Multiple choice: every variation is { q, fig?, choices, answer, solution }.
//    Answer indices are derived from the base: v1 = (b+1)%4, v2 = (b+3)%4,
//    v3 = (b+2)%4, giving rows v1: 2 3 2 1 1 0 3 3 0 1, v2: 0 1 0 3 3 2 1 1 2 3,
//    v3: 3 0 3 2 2 1 0 0 1 2.
//  - Every key was brute-forced in node before the stem was written: full
//    enumeration of every discrete sample space (all $4^6$ spin sequences, all
//    $8!$ card orders, all multiset arrangements, all $6^4$ and $8^3$ dice
//    outcomes, all $2^8$ walks and flip strings, all seatings), and the three
//    continuous keys by exact area decomposition cross-checked with Monte Carlo
//    at $n \ge 3{,}000{,}000$. Every key matches its pin. Pin deviations: none.
//  - Capstone chapter: every variation mixes at least two techniques, and every
//    solution runs two genuinely different routes that each end ✓, then names
//    each wrong choice’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: dice are standard and fair unless
//    the stem says eight-sided; coins and spinners are fair with independent
//    trials; drawn objects are distinguishable; $0$ counts whenever a
//    multiple-of condition can be met by zero; continuous choices are uniform
//    and independent; expected values are exact fractions.

const s152 = [
  // slot 1 — digit-restricted integers (casework by length + a bijection).
  //          Lanes: even nonzero digits to 9999 -> 340; odd all-prime-digit
  //          < 1000 -> 63; reversed: 100th all-odd-digit number -> 579.
  [
    {
      q: 'How many of the integers from $1$ to $9999$ have every digit even and no digit equal to $0$?',
      choices: ['$84$', '$256$', '$340$', '$624$'],
      answer: 2,
      solution: 'Name the object: a string of $1$ to $4$ digits, each from $\\{2, 4, 6, 8\\}$; since $0$ is banned there is no leading-zero worry. Sort by length: $4$ one-digit, $4^2 = 16$ two-digit, $4^3 = 64$ three-digit, and $4^4 = 256$ four-digit numbers, for $4 + 16 + 64 + 256 = 340$ ✓. Second route, as one geometric sum: the count is $4^1 + 4^2 + 4^3 + 4^4 = \\frac{4^5 - 4}{3} = \\frac{1020}{3} = 340$, and a small check at the two-digit stage ($22, 24, \\ldots, 88$ is indeed $16$ numbers) confirms the pattern ✓. $256$ COUNTS ONLY THE FOUR-DIGIT NUMBERS ✗. $84$ STOPS AT THREE DIGITS AND FORGETS THE $256$ FOUR-DIGIT NUMBERS ✗. $624$ LETS $0$ BACK IN AS AN EVEN DIGIT everywhere but the front, counting $4 + 20 + 100 + 500$ ✗.',
    },
    {
      q: 'How many odd positive integers less than $1000$ have every digit prime? (The prime digits are $2$, $3$, $5$, and $7$.)',
      choices: ['$63$', '$39$', '$48$', '$84$'],
      answer: 0,
      solution: 'The number is odd exactly when its last digit is odd, so the last digit comes from $\\{3, 5, 7\\}$ while every earlier digit comes from all four of $\\{2, 3, 5, 7\\}$. By length: $3$ one-digit, $4 \\cdot 3 = 12$ two-digit, and $4 \\cdot 4 \\cdot 3 = 48$ three-digit numbers, $3 + 12 + 48 = 63$ ✓. Second route, by symmetry on the last digit: there are $4 + 16 + 64 = 84$ all-prime-digit numbers below $1000$, and within each length the last digit runs over $\\{2, 3, 5, 7\\}$ evenly, so exactly $\\frac{3}{4}$ of each length is odd: $\\frac{3}{4} \\cdot 84 = 63$ ✓. $84$ FORGETS THE ODDNESS CONDITION entirely ✗. $48$ KEEPS ONLY THE THREE-DIGIT NUMBERS ✗. $39$ FORCES EVERY DIGIT TO BE AN ODD PRIME, computing $3 + 9 + 27$ ✗.',
    },
    {
      q: 'The positive integers whose digits are all odd are listed in increasing order: $1, 3, 5, 7, 9, 11, 13, \\ldots$ What is the $100$th number in the list?',
      choices: ['$591$', '$975$', '$799$', '$579$'],
      answer: 3,
      solution: 'Count by length first: $5$ one-digit and $5^2 = 25$ two-digit numbers cover ranks $1$ through $30$, so rank $100$ is the $70$th three-digit member. The three-digit members come in blocks of $25$ by leading digit: leading $1$ and $3$ cover ranks $31$–$80$ of the list, so the target has leading digit $5$ and is the $19$th entry after $511$; within the block, each middle digit covers $5$ numbers, so $19 = 3 \\cdot 5 + 4$ puts the middle digit at $7$ (the fourth odd digit) and the last digit at $9$ (the fifth): the number is $579$ ✓. Second route, by bijection with base-$5$ numerals that use digits $1$–$5$: writing $100 = 19 \\cdot 5 + 5$ gives last numeral $5$, then $19 = 3 \\cdot 5 + 4$ gives numerals $3, 4$, so $100$ is the numeral string $(3, 4, 5)$, and the digit map $d \\mapsto 2d - 1$ turns it into $579$ ✓. $591$ STARTS THE COUNT AT ZERO, landing one entry late — $591$ is the $101$st number ✗. $975$ READS THE BASE-$5$ NUMERALS IN REVERSE ORDER ✗. $799$ FORGETS THE $30$ SHORTER NUMBERS and takes the $100$th three-digit member ✗.',
    },
  ],

  // slot 2 — expected step-downs/rises (linearity + symmetry with ties).
  //          Lanes: spinner 1-4 spun 6 times, drops -> 15/8; cards 1-8 rises
  //          -> 7/2; reversed: die step-ups 35/12 -> n = 8.
  [
    {
      q: 'A fair spinner with the numbers $1$ through $4$ is spun $6$ times, the spins independent. A spin is called a drop if it is strictly smaller than the spin just before it (the first spin cannot be a drop). What is the expected number of drops?',
      choices: ['$\\frac{5}{2}$', '$\\frac{9}{4}$', '$\\frac{3}{8}$', '$\\frac{15}{8}$'],
      answer: 3,
      solution: 'Split into pieces: there are $5$ neighboring pairs of spins. For one pair, $4$ of the $16$ equally likely ordered results are ties, and the other $12$ split evenly between rises and drops by symmetry, so a drop has probability $\\frac{6}{16} = \\frac{3}{8}$; the pieces overlap in the spins they share, but expected values add anyway, giving $5 \\cdot \\frac{3}{8} = \\frac{15}{8}$ ✓. Second route, by a global double count: over all $4^6$ spin sequences, each of the $5$ pair positions contributes one drop for each of the $\\binom{4}{2} = 6$ strictly decreasing value pairs times $4^4$ choices for the other spins, so the total number of drops is $5 \\cdot 6 \\cdot 4^4$, and dividing by $4^6$ gives $\\frac{30}{16} = \\frac{15}{8}$ ✓. $\\frac{5}{2}$ FORGETS THE TIES and prices each pair at $\\frac{1}{2}$ ✗. $\\frac{9}{4}$ COUNTS SIX PAIRS, letting the first spin be a drop ✗. $\\frac{3}{8}$ IS THE PROBABILITY FOR ONE PAIR, not the expected total ✗.',
    },
    {
      q: 'Cards numbered $1$ through $8$ are shuffled into a row, all $8!$ orders equally likely. A card other than the leftmost is called a rise if it is larger than the card immediately to its left. (No ties can occur.) What is the expected number of rises?',
      choices: ['$4$', '$\\frac{7}{2}$', '$\\frac{35}{12}$', '$3$'],
      answer: 1,
      solution: 'There are $7$ neighboring pairs, and for each pair the two cards involved are two different numbers, so by symmetry the larger one sits on the right with probability exactly $\\frac{1}{2}$; linearity gives $7 \\cdot \\frac{1}{2} = \\frac{7}{2}$ ✓. Second route, by a bijection: reversing the row swaps rises and falls, so rises and falls have the same expected count, and every arrangement has rises plus falls equal to $7$; two equal numbers summing to $7$ must each be $\\frac{7}{2}$ ✓. $4$ COUNTS EIGHT PAIRS, one per card including the leftmost ✗. $\\frac{35}{12}$ SUBTRACTS TIES THAT CANNOT HAPPEN, importing the dice probability $\\frac{5}{12}$ ✗. $3$ COUNTS ONLY SIX PAIRS ✗.',
    },
    {
      q: 'A standard die is rolled $n$ times, the rolls independent. A roll is called a step up if it is strictly larger than the roll just before it (the first roll cannot be a step up). The expected number of steps up is exactly $\\frac{35}{12}$. What is $n$?',
      choices: ['$8$', '$7$', '$9$', '$6$'],
      answer: 0,
      solution: 'For one neighboring pair of rolls, $6$ of the $36$ ordered results are ties and the rest split evenly, so a step up has probability $\\frac{15}{36} = \\frac{5}{12}$; with $n$ rolls there are $n - 1$ pairs, so the expected count is $(n-1) \\cdot \\frac{5}{12}$. Setting $(n-1) \\cdot \\frac{5}{12} = \\frac{35}{12}$ gives $n - 1 = 7$, so $n = 8$ ✓. Second route, verify and pin down: at $n = 8$ a global count gives $7 \\cdot 15 \\cdot 6^6$ steps up across all $6^8$ sequences, which is $\\frac{7 \\cdot 15}{36} = \\frac{35}{12}$ per sequence on average ✓; and since each extra roll adds exactly $\\frac{5}{12}$ to the expectation, the expectation is strictly increasing in $n$, so no other $n$ works ✓. $7$ USES $n$ PAIRS INSTEAD OF $n - 1$ ✗. $9$ THROWS AWAY TWO ROLLS, as if the first two rolls could not be steps up ✗. $6$ COUNTS TIES AS STEPS UP, pricing each pair at $\\frac{7}{12}$ ✗.',
    },
  ],

  // slot 3 — capped compositions (stars and bars + inclusion-exclusion,
  //          complement substitution). Lanes: sum 10 in four vars cap 4 -> 68;
  //          15 candies caps 2..7 -> 25; reversed: cap m with count 46 -> 7.
  [
    {
      q: 'How many ordered quadruples of nonnegative integers $(a, b, c, d)$ satisfy $a + b + c + d = 10$ with each of the four entries at most $4$?',
      choices: ['$286$', '$62$', '$68$', '$230$'],
      answer: 2,
      solution: 'Without the cap, stars and bars gives $\\binom{13}{3} = 286$. Subtract the quadruples where some entry is $5$ or more: if $a \\ge 5$, write $a = a\' + 5$ and count $a\' + b + c + d = 5$, which is $\\binom{8}{3} = 56$, and the same for each of the four entries. Two entries of $5$ or more force the substituted sum to $0$, which happens in exactly $1$ way for each of the $\\binom{4}{2} = 6$ pairs, so inclusion-exclusion gives $286 - 4 \\cdot 56 + 6 = 68$ ✓. Second route, by the complement substitution $a \\mapsto 4 - a$: capped solutions of sum $10$ match capped solutions of $a + b + c + d = 16 - 10 = 6$, and there the overflow is rarer: $\\binom{9}{3} = 84$ total minus $4 \\cdot \\binom{4}{3} = 16$ with an entry of $5$ or more (two entries of $5$ would need a sum of $10$, so no double overflow), giving $84 - 16 = 68$ ✓. $286$ IGNORES THE CAP ✗. $62$ FORGETS TO ADD BACK the $6$ doubly subtracted quadruples ✗. $230$ SUBTRACTS THE OVERFLOW FOR ONLY ONE ENTRY ✗.',
    },
    {
      q: 'Fifteen identical candies are distributed into $3$ labeled bags so that every bag gets at least $2$ and at most $7$ candies. How many distributions are there?',
      choices: ['$25$', '$55$', '$37$', '$136$'],
      answer: 0,
      solution: 'Give each bag its required $2$ candies first: the remaining $9$ candies go into $3$ bags with each bag taking at most $5$ more. Stars and bars gives $\\binom{11}{2} = 55$, minus the distributions where some bag takes $6$ or more extra: substitute out $6$ to count $\\binom{5}{2} = 10$ for each of the $3$ bags, and two bags overflowing would need at least $12 > 9$, so the count is $55 - 30 = 25$ ✓. Second route, from the top down: substitute $c_i = 7 - b_i$, so the $c_i$ are nonnegative, sum to $21 - 15 = 6$, and are each at most $5$. That gives $\\binom{8}{2} = 28$ minus the $3$ solutions with some $c_i = 6$ (the other two then $0$), and $28 - 3 = 25$ ✓. $55$ DROPS THE UPPER CAP of $7$ ✗. $37$ SHIFTS THE OVERFLOW BY $7$ INSTEAD OF $6$, subtracting only $18$ ✗. $136$ IGNORES BOTH BOUNDS, computing $\\binom{17}{2}$ ✗.',
    },
    {
      q: 'For a positive integer $m$, the ordered triples of nonnegative integers $(a, b, c)$ with $a + b + c = 12$ and every entry at most $m$ number exactly $46$. What is $m$?',
      choices: ['$6$', '$8$', '$5$', '$7$'],
      answer: 3,
      solution: 'For $m \\ge 6$ at most one entry can exceed $m$, so the capped count is $\\binom{14}{2} - 3\\binom{13 - m}{2} = 91 - 3\\binom{13 - m}{2}$: an entry of at least $m + 1$ leaves a sum of $11 - m$ for a substituted stars-and-bars count of $\\binom{13 - m}{2}$. Setting $91 - 3\\binom{13-m}{2} = 46$ gives $\\binom{13-m}{2} = 15$, so $13 - m = 6$ and $m = 7$ ✓. Second route, march through the candidates: $m = 6$ gives $91 - 3 \\cdot 21 = 28$; $m = 7$ gives $91 - 3 \\cdot 15 = 46$; $m = 8$ gives $91 - 3 \\cdot 10 = 61$. The count grows as the cap loosens, so $m = 7$ is the only solution ✓. $6$ IS OFF BY ONE IN THE OVERFLOW SHIFT and produces the count $28$ ✗. $8$ PRODUCES $61$, loosening the cap one step too far ✗. $5$ PRODUCES ONLY $10$ TRIPLES (the double overflows return at that cap) ✗.',
    },
  ],

  // slot 4 — multiset arrangements with no equal neighbors (inclusion-
  //          exclusion + constructive splits). Lanes: 1122334 -> 246;
  //          BANANA -> 10; derived: exactly one equal-adjacent pair -> 36.
  [
    {
      q: 'How many seven-digit numbers use each of the digits $1, 1, 2, 2, 3, 3, 4$ exactly once and have no two equal digits next to each other?',
      choices: ['$630$', '$246$', '$270$', '$90$'],
      answer: 1,
      solution: 'There are $\\frac{7!}{2!\\,2!\\,2!} = 630$ arrangements in all. Inclusion-exclusion on glued pairs: gluing one repeated pair leaves $6$ items with two repeated pairs, $\\frac{6!}{2!\\,2!} = 180$ arrangements, so subtract $3 \\cdot 180 = 540$; add back two glued pairs, $3 \\cdot \\frac{5!}{2!} = 180$; subtract all three glued, $4! = 24$. The count is $630 - 540 + 180 - 24 = 246$ ✓. Second route, casework on how the $4$ splits the row: the digits left and right of the $4$ never clash with it, so a valid number is a split of the multiset $\\{1,1,2,2,3,3\\}$ into a left part and a right part, each with no equal neighbors of its own. Writing $f$ for the no-equal-neighbor count of a sub-multiset ($f$ of a full pair plus a spare digit of another value is $6$, of two full pairs is $2$, of two full pairs plus a spare is $12$, of all six digits is $30$): whole multiset on one side, $2 \\cdot 30 = 60$; a lone digit on one side, $2 \\cdot 3 \\cdot 12 = 72$; two unequal digits on one side, $2 \\cdot 3 \\cdot 2 \\cdot 6 = 72$; three and three, $6 \\cdot 1 \\cdot 1 + 6 \\cdot 6 = 42$. The total is $60 + 72 + 72 + 42 = 246$ ✓. $630$ IGNORES THE RESTRICTION ✗. $270$ STOPS AFTER THE ADD-BACK, never removing the triple-glued arrangements ✗. $90$ STOPS AFTER THE FIRST SUBTRACTION ✗.',
    },
    {
      q: 'In how many arrangements of the six letters of BANANA are no two equal letters next to each other?',
      choices: ['$12$', '$40$', '$60$', '$10$'],
      answer: 3,
      solution: 'Build constructively: first arrange B, N, N, which can be done in $\\frac{3!}{2!} = 3$ ways, then drop the three A’s into three of the four gaps, at most one per gap, in $\\binom{4}{3} = 4$ ways — $12$ arrangements with the A’s separated. Among these the N’s still touch when the base arrangement has NN adjacent (NNB or BNN) and the gap between the two N’s got no A: one bad choice of gaps for each, so $12 - 2 = 10$ ✓. Second route, complement with inclusion-exclusion: of the $\\frac{6!}{3!\\,2!} = 60$ arrangements, those with the N’s together number $\\frac{5!}{3!} = 20$, and those with two A’s adjacent are the complement of the $12$ A-separated ones, so $48$; arrangements bad in both ways are NN-glued with A’s not all separated: gluing NN leaves $\\frac{5!}{3!} = 20$, of which B and the NN block make $2$ arrangements with $\\binom{3}{3} = 1$ gap choice each, so $20 - 2 = 18$. Bad in all: $48 + 20 - 18 = 50$, leaving $60 - 50 = 10$ ✓. $12$ SEPARATES ONLY THE A’S and lets the N’s touch ✗. $40$ SEPARATES ONLY THE N’S ✗. $60$ IGNORES THE RESTRICTION ✗.',
    },
    {
      q: 'How many six-digit numbers use each of the digits $1, 1, 2, 2, 3, 3$ exactly once and have equal digits next to each other in exactly one pair of neighboring positions?',
      choices: ['$60$', '$90$', '$36$', '$30$'],
      answer: 2,
      solution: 'Build the single seam directly: choose which value forms it ($3$ ways) and glue that pair into a block X. The block’s digit appears nowhere else, so the number has exactly one seam precisely when the arrangement of X with the remaining two pairs $a, a, b, b$ has no $aa$ or $bb$ adjacency: $\\frac{5!}{2!\\,2!} = 30$ arrangements, minus $\\frac{4!}{2!} = 12$ with $aa$ glued and $12$ with $bb$ glued, plus $3! = 6$ with both, gives $30 - 24 + 6 = 12$. So the count is $3 \\cdot 12 = 36$ ✓. Second route, by the exactly-one inclusion-exclusion formula: with $S_1 = 3 \\cdot \\frac{5!}{2!\\,2!} = 90$, $S_2 = 3 \\cdot \\frac{4!}{2!} = 36$, and $S_3 = 3! = 6$ counting arrangements with chosen pairs glued, the number with exactly one seam is $S_1 - 2S_2 + 3S_3 = 90 - 72 + 18 = 36$ ✓. $60$ COUNTS AT LEAST ONE SEAM rather than exactly one ✗. $90$ ADDS THE THREE GLUED COUNTS and double-counts every two-seam arrangement ✗. $30$ COUNTS THE ARRANGEMENTS WITH NO SEAM AT ALL ✗.',
    },
  ],

  // slot 5 — dice with several simultaneous conditions (symmetry sets +
  //          modular casework, conditional chain). Lanes: all diff, min 1,
  //          sum mult of 3 -> 1/18; 8-sided all diff largest 5 -> 9/128;
  //          derived conditional: largest 6 and odd sum given all diff -> 4/15.
  [
    {
      q: 'Four standard dice are rolled. What is the probability that the four numbers rolled are all different, the smallest of them is $1$, and their sum is a multiple of $3$?',
      choices: ['$\\frac{5}{27}$', '$\\frac{1}{18}$', '$\\frac{5}{81}$', '$\\frac{1}{54}$'],
      answer: 1,
      solution: 'One outcome is an ordered list of four rolls, $6^4 = 1296$ in all, and each qualifying set of four values appears in $4! = 24$ orders. A qualifying set contains $1$ and three different values from $2$ through $6$ whose sum is $2$ modulo $3$ (so that adding the $1$ gives a multiple of $3$); checking residues $2, 0, 1, 2, 0$ for $2, 3, 4, 5, 6$ finds exactly $\\{2,3,6\\}$, $\\{2,4,5\\}$, and $\\{3,5,6\\}$. That is $3 \\cdot 24 = 72$ outcomes, probability $\\frac{72}{1296} = \\frac{1}{18}$ ✓. Second route, by a conditional chain: all four different has probability $\\frac{6 \\cdot 5 \\cdot 4 \\cdot 3}{1296} = \\frac{5}{18}$; given that, the $\\binom{6}{4} = 15$ value sets are equally likely, and the qualifying ones — containing $1$, sum a multiple of $3$, which means sums $12$ or $15$ among $\\{1\\} \\cup \\{2..6\\}$ sets — are $\\{1,2,3,6\\}$, $\\{1,2,4,5\\}$, $\\{1,3,5,6\\}$, three of the fifteen. So the probability is $\\frac{5}{18} \\cdot \\frac{3}{15} = \\frac{1}{18}$ ✓. $\\frac{5}{27}$ DROPS THE MULTIPLE-OF-3 CONDITION, keeping all $240$ smallest-is-$1$ outcomes ✗. $\\frac{5}{81}$ ASSUMES EXACTLY A THIRD of those $240$ outcomes have a good sum, but the sets are not balanced across residues ✗. $\\frac{1}{54}$ FINDS ONLY ONE QUALIFYING SET ✗.',
    },
    {
      q: 'Three fair eight-sided dice, with faces numbered $1$ through $8$, are rolled independently. What is the probability that the three numbers rolled are all different and the largest of them is exactly $5$?',
      choices: ['$\\frac{15}{128}$', '$\\frac{61}{512}$', '$\\frac{3}{256}$', '$\\frac{9}{128}$'],
      answer: 3,
      solution: 'One outcome is an ordered triple, $8^3 = 512$ in all. A qualifying set of values contains $5$ and two different values from $\\{1, 2, 3, 4\\}$: $\\binom{4}{2} = 6$ sets, each in $3! = 6$ orders, so $36$ outcomes and probability $\\frac{36}{512} = \\frac{9}{128}$ ✓. Second route, by a complement inside the all-different outcomes: all different with every value at most $5$ gives $5 \\cdot 4 \\cdot 3 = 60$ ordered triples, and all different with every value at most $4$ gives $4 \\cdot 3 \\cdot 2 = 24$; the difference $60 - 24 = 36$ is exactly the all-different triples whose largest is $5$, and $\\frac{36}{512} = \\frac{9}{128}$ ✓. $\\frac{15}{128}$ NEVER FORCES A $5$ TO APPEAR, counting all $60$ all-different triples with values at most $5$ ✗. $\\frac{61}{512}$ DROPS THE ALL-DIFFERENT CONDITION, computing $5^3 - 4^3$ ✗. $\\frac{3}{256}$ FORGETS THE SIX ORDERS of each value set ✗.',
    },
    {
      q: 'Four standard dice are rolled, and the four numbers turn out to be all different. Given that, what is the probability that the largest of them is $6$ and their sum is odd?',
      choices: ['$\\frac{2}{3}$', '$\\frac{2}{5}$', '$\\frac{4}{15}$', '$\\frac{2}{27}$'],
      answer: 2,
      solution: 'Given all different, every one of the $\\binom{6}{4} = 15$ value sets is equally likely, since each appears in exactly $4! = 24$ of the ordered outcomes. A favorable set contains $6$, and since $6$ is even the sum is odd exactly when the other three values from $\\{1, \\ldots, 5\\}$ have an odd sum: all three odd gives $\\{1,3,5\\}$, and one odd with both evens gives $\\{1,2,4\\}$, $\\{3,2,4\\}$, $\\{5,2,4\\}$ — four sets, so the probability is $\\frac{4}{15}$ ✓. Second route, chain the two conditions: $10$ of the $15$ sets contain $6$, probability $\\frac{2}{3}$; among those $10$, the odd-sum ones need an odd number of odd values among the three companions, and the count above shows $4$ of the $10$, probability $\\frac{2}{5}$; multiplying gives $\\frac{2}{3} \\cdot \\frac{2}{5} = \\frac{4}{15}$ ✓. $\\frac{2}{3}$ KEEPS ONLY THE LARGEST-IS-6 CONDITION and drops the parity ✗. $\\frac{2}{5}$ COUNTS THE EVEN SUMS — six of the fifteen sets — instead of the odd ones ✗. $\\frac{2}{27}$ FORGETS TO CONDITION, reporting $\\frac{96}{1296}$ ✗.',
    },
  ],

  // slot 6 — nonnegative lattice walks and ballot orders (reflection/Catalan
  //          + recursion or listing). Lanes: 8-step loop never left -> 7/128;
  //          ballot 3-3 never behind -> 1/4; derived: 6-step loop reaching
  //          +2 -> 1/16.
  [
    {
      q: 'A token starts at $0$ on a number line. Each second it moves $1$ unit right or $1$ unit left, each with probability $\\frac{1}{2}$, independently of earlier moves. What is the probability that after $8$ seconds the token is back at $0$ and was never to the left of $0$ at any time?',
      choices: ['$\\frac{7}{128}$', '$\\frac{35}{128}$', '$\\frac{1}{5}$', '$\\frac{5}{256}$'],
      answer: 0,
      solution: 'One outcome is a string of $8$ moves, $2^8 = 256$ equally likely, and returning to $0$ needs $4$ rights and $4$ lefts. Count the balanced strings that stay nonnegative by reflection: of the $\\binom{8}{4} = 70$ balanced strings, the bad ones — those that touch $-1$ — match up with strings having $5$ lefts and $3$ rights by flipping every move after the first visit to $-1$, so there are $\\binom{8}{5} = 56$ bad strings and $70 - 56 = 14$ good ones, probability $\\frac{14}{256} = \\frac{7}{128}$ ✓. Second route, split at the first return to $0$: a good $8$-move string is an arch (one right, a good middle staying nonnegative one level up, one left) of length $2k$ followed by a good string of length $8 - 2k$. With $c_n$ counting good strings of $2n$ moves, $c_0 = 1$, $c_1 = 1$, $c_2 = 2$, $c_3 = 5$ (the five strings RRRLLL, RRLRLL, RRLLRL, RLRRLL, RLRLRL), the recursion gives $c_4 = c_0 c_3 + c_1 c_2 + c_2 c_1 + c_3 c_0 = 5 + 2 + 2 + 5 = 14$ ✓. $\\frac{35}{128}$ FORGETS THE NEVER-LEFT CONDITION and keeps all $70$ balanced strings ✗. $\\frac{1}{5}$ IS THE CONDITIONAL PROBABILITY given that the token ends at $0$, not the asked joint probability ✗. $\\frac{5}{256}$ DEMANDS THE TOKEN NEVER REVISIT $0$ before the end, counting only the $5$ strictly positive arches ✗.',
    },
    {
      q: 'Six ballots, $3$ for Ana and $3$ for Ben, are counted one at a time in a random order, all $\\binom{6}{3} = 20$ orders equally likely. What is the probability that at every point of the count, Ana’s running total is at least as large as Ben’s?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{64}$', '$\\frac{1}{4}$', '$\\frac{3}{10}$'], answer: 2,
      solution: 'Reflection on the $20$ orders: an order fails when at some point Ben leads by one; flipping every ballot after the first such moment turns the order into one with $4$ Ben ballots and $2$ Ana ballots, and this matching is reversible, so there are $\\binom{6}{4} = 15$ failing orders and $20 - 15 = 5$ good ones, probability $\\frac{5}{20} = \\frac{1}{4}$ ✓. Second route, shrink and list: writing A and B, a good order must start with A and never let the B’s catch up strictly; checking the orders directly leaves AAABBB, AABABB, AABBAB, ABAABB, ABABAB and nothing else, again $5$ of $20$ ✓. $\\frac{1}{2}$ GUESSES A SYMMETRY BETWEEN ANA AND BEN, but the tied positions belong to neither and break the even split ✗. $\\frac{5}{64}$ DIVIDES BY $2^6$ AS IF EACH BALLOT WERE A COIN FLIP, but the orders of a fixed $3$–$3$ count are the sample space ✗. $\\frac{3}{10}$ ALSO ADMITS AABBBA, where Ana falls behind on the fifth ballot ✗.',
    },
    {
      q: 'A token starts at $0$ on a number line. Each second it moves $1$ unit right or $1$ unit left, each with probability $\\frac{1}{2}$, independently of earlier moves. What is the probability that after $6$ seconds the token is back at $0$, was never to the left of $0$, and reached $+2$ at some moment?',
      choices: ['$\\frac{5}{64}$', '$\\frac{1}{16}$', '$\\frac{3}{64}$', '$\\frac{1}{64}$'], answer: 1,
      solution: 'The $6$-move strings that return to $0$ and stay nonnegative are exactly RRRLLL, RRLRLL, RRLLRL, RLRRLL, RLRLRL — five strings, found by checking the $\\binom{6}{3} = 20$ balanced strings. Track the running position in each: the first four reach $+2$, while RLRLRL bounces between $0$ and $1$ and never does. So $4$ of the $64$ strings qualify, probability $\\frac{4}{64} = \\frac{1}{16}$ ✓. Second route, complement inside the nonnegative loops: a nonnegative loop that never reaches $+2$ is trapped in $\\{0, 1\\}$, so its moves must alternate right, left, right, left, right, left — exactly one string. Reflection counts the nonnegative loops as $\\binom{6}{3} - \\binom{6}{4} = 20 - 15 = 5$, so $5 - 1 = 4$ of them reach $+2$, and $\\frac{4}{64} = \\frac{1}{16}$ ✓. $\\frac{5}{64}$ DROPS THE REACH-$+2$ REQUIREMENT ✗. $\\frac{3}{64}$ LOSES ONE OF THE FOUR STRINGS — RLRRLL reaches $+2$ on its fourth move ✗. $\\frac{1}{64}$ KEEPS ONLY RRRLLL, as if the token had to climb straight up ✗.',
    },
  ],

  // slot 7 — parity/multiplicity of heads with a positional condition
  //          (binomial casework + symmetry or Bayes). Lanes: 8 flips, heads
  //          mult of 4, last tails -> 9/64; spinner 1s even, first not 1
  //          -> 51/128; reversed conditional: first heads given mult of 3
  //          -> 21/43.
  [
    {
      q: 'A fair coin is flipped $8$ times. What is the probability that the total number of heads is a multiple of $4$ (where $0$ counts) and the last flip is tails?',
      choices: ['$\\frac{9}{32}$', '$\\frac{35}{256}$', '$\\frac{35}{128}$', '$\\frac{9}{64}$'],
      answer: 3,
      solution: 'One outcome is a sequence of $8$ flips, $2^8 = 256$ in all. With the last flip forced to tails, the first $7$ flips carry every head, so the total is $0$ or $4$ (a total of $8$ is impossible with a tail present): $\\binom{7}{0} + \\binom{7}{4} = 1 + 35 = 36$ sequences, probability $\\frac{36}{256} = \\frac{9}{64}$ ✓. Second route, start from the multiple-of-$4$ counts: totals $0, 4, 8$ give $1 + 70 + 1 = 72$ sequences, and a sequence with $h$ heads ends in tails in $\\frac{8-h}{8}$ of its arrangements, so the qualifying count is $1 \\cdot 1 + 70 \\cdot \\frac{4}{8} + 1 \\cdot 0 = 36$, again $\\frac{9}{64}$ ✓. $\\frac{9}{32}$ DROPS THE LAST-FLIP CONDITION, keeping all $72$ sequences ✗. $\\frac{35}{256}$ FORGETS THAT $0$ HEADS COUNTS ✗. $\\frac{35}{128}$ KEEPS ONLY THE FOUR-HEAD SEQUENCES and ignores the last flip ✗.',
    },
    {
      q: 'A fair spinner with the numbers $1$ through $4$ is spun $5$ times, the spins independent. What is the probability that the number of $1$’s spun is even (where $0$ counts) and the first spin is not a $1$?',
      choices: ['$\\frac{33}{64}$', '$\\frac{51}{128}$', '$\\frac{17}{32}$', '$\\frac{99}{256}$'],
      answer: 1,
      solution: 'One outcome is a sequence of $5$ spins, $4^5 = 1024$ in all. The first spin avoids $1$ in $3$ ways, and then the remaining $4$ spins must contain an even number of $1$’s: sequences of length $4$ with even $1$-count number $\\frac{4^4 + 2^4}{2} = 136$, since the difference between even and odd counts is $(3-1)^4 = 16$. So $3 \\cdot 136 = 408$ sequences qualify, probability $\\frac{408}{1024} = \\frac{51}{128}$ ✓. Second route, complement on the first spin: all length-$5$ sequences with an even number of $1$’s number $\\frac{4^5 + 2^5}{2} = 528$; those starting with a $1$ need an odd $1$-count in the last $4$ spins, $\\frac{4^4 - 2^4}{2} = 120$ of them, and $528 - 120 = 408$ ✓. $\\frac{33}{64}$ DROPS THE FIRST-SPIN CONDITION, keeping all $528$ sequences ✗. $\\frac{17}{32}$ IS THE CONDITIONAL PROBABILITY given that the first spin is not a $1$ ✗. $\\frac{99}{256}$ MULTIPLIES THE TWO CONDITIONS AS IF INDEPENDENT, but fixing the first spin shifts the parity odds ✗.',
    },
    {
      q: 'A fair coin is flipped $7$ times, and the total number of heads turns out to be a multiple of $3$ (where $0$ counts). Given that, what is the probability that the first flip was heads?',
      choices: ['$\\frac{21}{43}$', '$\\frac{1}{2}$', '$\\frac{21}{128}$', '$\\frac{15}{43}$'],
      answer: 0,
      solution: 'Count both sides of the condition: totals $0, 3, 6$ give $1 + 35 + 7 = 43$ sequences. Among them, the ones starting with heads need $2$ or $5$ heads in the remaining $6$ flips: $\\binom{6}{2} + \\binom{6}{5} = 15 + 6 = 21$. So the conditional probability is $\\frac{21}{43}$ ✓. Second route, by symmetry fractions: a sequence with $h$ heads starts with heads in $\\frac{h}{7}$ of its arrangements, so the favorable count is $0 \\cdot 1 + \\frac{3}{7} \\cdot 35 + \\frac{6}{7} \\cdot 7 = 15 + 6 = 21$ of the $43$, again $\\frac{21}{43}$ ✓. $\\frac{1}{2}$ ASSUMES THE INFORMATION CHANGES NOTHING, but a multiple-of-$3$ total leans toward head-heavy sequences ✗. $\\frac{21}{128}$ REPORTS THE JOINT PROBABILITY of both events, not the conditional ✗. $\\frac{15}{43}$ KEEPS ONLY THE THREE-HEAD SEQUENCES and forgets the total of $6$ ✗.',
    },
  ],

  // slot 8 — continuous bands in a rectangle (complement triangles +
  //          slicing; MC-checked). Lanes: |x-y|<2 in 4x3 -> 19/24;
  //          1<x+y<4 in 4x2 -> 11/16; derived conditional in 3x2 -> 1/7.
  [
    {
      q: 'A number $x$ is chosen uniformly at random from $0$ to $4$ and, independently, a number $y$ is chosen uniformly at random from $0$ to $3$. What is the probability that $x$ and $y$ differ by less than $2$?',
      fig: {
        view: [-0.5, -0.5, 4.5, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [4, 2], [4, 3], [1, 3], [0, 2]] },
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 3], [0, 3]], fill: false },
          { t: 'seg', a: [0, 2], b: [1, 3], dash: true },
          { t: 'seg', a: [2, 0], b: [4, 2], dash: true },
          { t: 'label', p: [0, 0], text: 'O', dx: -10, dy: 12 },
          { t: 'label', p: [4, 0], text: '(4, 0)', dx: 4, dy: 14 },
          { t: 'label', p: [0, 3], text: '(0, 3)', dx: -18, dy: -6 },
          { t: 'label', p: [4, 3], text: '(4, 3)', dx: 8, dy: -6 },
        ],
      },
      choices: ['$\\frac{5}{24}$', '$\\frac{5}{6}$', '$\\frac{2}{3}$', '$\\frac{19}{24}$'],
      answer: 3,
      solution: 'The outcome is a point $(x, y)$ in a $4 \\times 3$ rectangle of area $12$, and the event is the band between the lines $y = x + 2$ and $y = x - 2$. Count the complement: above the upper line lies the triangle with corners $(0, 2)$, $(0, 3)$, $(1, 3)$, area $\\frac{1}{2}$; below the lower line lies the triangle with corners $(2, 0)$, $(4, 0)$, $(4, 2)$, area $2$. The band has area $12 - \\frac{5}{2} = \\frac{19}{2}$, so the probability is $\\frac{19}{2} \\div 12 = \\frac{19}{24}$ ✓. Second route, slice by $x$: for $0 \\le x \\le 1$ the allowed $y$ runs from $0$ to $x + 2$, a trapezoid of area $\\frac{5}{2}$; for $1 \\le x \\le 2$ the whole height $3$ is allowed, area $3$; for $2 \\le x \\le 4$ the allowed length is $3 - (x - 2) = 5 - x$, a trapezoid of area $4$. The slices total $\\frac{5}{2} + 3 + 4 = \\frac{19}{2}$, and $\\frac{19}{2} \\div 12 = \\frac{19}{24}$ ✓. $\\frac{5}{24}$ REPORTS THE COMPLEMENT ✗. $\\frac{5}{6}$ DROPS THE SMALL TRIANGLE above $y = x + 2$ ✗. $\\frac{2}{3}$ PRICES BOTH CUT-OFF CORNERS AT AREA $2$, though the upper one holds only $\\frac{1}{2}$ ✗.',
    },
    {
      q: 'A number $x$ is chosen uniformly at random from $0$ to $4$ and, independently, a number $y$ is chosen uniformly at random from $0$ to $2$. What is the probability that $1 < x + y < 4$?',
      fig: {
        view: [-0.5, -0.5, 4.5, 2.5],
        elems: [
          { t: 'poly', pts: [[1, 0], [4, 0], [2, 2], [0, 2], [0, 1]] },
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 2], [0, 2]], fill: false },
          { t: 'seg', a: [1, 0], b: [0, 1], dash: true },
          { t: 'seg', a: [4, 0], b: [2, 2], dash: true },
          { t: 'label', p: [0, 0], text: 'O', dx: -10, dy: 12 },
          { t: 'label', p: [4, 0], text: '(4, 0)', dx: 4, dy: 14 },
          { t: 'label', p: [0, 2], text: '(0, 2)', dx: -18, dy: -6 },
          { t: 'label', p: [4, 2], text: '(4, 2)', dx: 8, dy: -6 },
        ],
      },
      choices: ['$\\frac{5}{16}$', '$\\frac{11}{16}$', '$\\frac{3}{4}$', '$\\frac{7}{16}$'],
      answer: 1,
      solution: 'The outcome is a point $(x, y)$ in a $4 \\times 2$ rectangle of area $8$, and the event is the band between the lines $x + y = 1$ and $x + y = 4$. Complement: below the lower line lies the triangle with corners $(0, 0)$, $(1, 0)$, $(0, 1)$, area $\\frac{1}{2}$; above the upper line lies the triangle with corners $(4, 0)$, $(4, 2)$, $(2, 2)$, area $2$. The band has area $8 - \\frac{5}{2} = \\frac{11}{2}$, so the probability is $\\frac{11}{2} \\div 8 = \\frac{11}{16}$ ✓. Second route, slice by $x$: for $0 \\le x \\le 1$ the allowed $y$ runs from $1 - x$ to $2$, a trapezoid of area $\\frac{3}{2}$; for $1 \\le x \\le 2$ the whole height $2$ is allowed, area $2$; for $2 \\le x \\le 4$ the allowed $y$ runs from $0$ to $4 - x$, a triangle of area $2$. The slices total $\\frac{3}{2} + 2 + 2 = \\frac{11}{2}$, and $\\frac{11}{2} \\div 8 = \\frac{11}{16}$ ✓. $\\frac{5}{16}$ REPORTS THE COMPLEMENT ✗. $\\frac{3}{4}$ DROPS THE CORNER TRIANGLE below $x + y = 1$ ✗. $\\frac{7}{16}$ CUTS AWAY HALF THE RECTANGLE FOR THE UPPER LINE, pricing that corner at area $4$ instead of $2$ ✗.',
    },
    {
      q: 'A number $x$ is chosen uniformly at random from $0$ to $3$ and, independently, a number $y$ is chosen uniformly at random from $0$ to $2$. It is given that $x$ and $y$ differ by less than $1$. What is the probability that $x > 2$?',
      fig: {
        view: [-0.5, -0.5, 3.5, 2.5],
        elems: [
          { t: 'poly', pts: [[2, 1], [3, 2], [2, 2]] },
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 2], [0, 2]], fill: false },
          { t: 'seg', a: [0, 1], b: [1, 2], dash: true },
          { t: 'seg', a: [1, 0], b: [3, 2], dash: true },
          { t: 'seg', a: [2, 0], b: [2, 2], dash: true },
          { t: 'label', p: [0, 0], text: 'O', dx: -10, dy: 12 },
          { t: 'label', p: [3, 0], text: '(3, 0)', dx: 4, dy: 14 },
          { t: 'label', p: [0, 2], text: '(0, 2)', dx: -18, dy: -6 },
          { t: 'label', p: [3, 2], text: '(3, 2)', dx: 8, dy: -6 },
        ],
      },
      choices: ['$\\frac{1}{7}$', '$\\frac{1}{3}$', '$\\frac{1}{12}$', '$\\frac{2}{7}$'],
      answer: 0,
      solution: 'The given information restricts the outcome to the band between $y = x + 1$ and $y = x - 1$ inside the $3 \\times 2$ rectangle, and a conditional probability is the ratio of two areas. Band area by complement: the rectangle has area $6$; above the band lies the triangle $(0,1)$, $(0,2)$, $(1,2)$ of area $\\frac{1}{2}$, and below it the triangle $(1,0)$, $(3,0)$, $(3,2)$ of area $2$, so the band has area $\\frac{7}{2}$. The part of the band with $x > 2$ is the triangle with corners $(2,1)$, $(3,2)$, $(2,2)$, area $\\frac{1}{2}$, so the probability is $\\frac{1}{2} \\div \\frac{7}{2} = \\frac{1}{7}$ ✓. Second route, slice the band by $x$: for $0 \\le x \\le 1$ the band’s height is $x + 1$, area $\\frac{3}{2}$; for $1 \\le x \\le 2$ the band’s top is capped at $2$, so the height is $2 - (x - 1) = 3 - x$, area $\\frac{3}{2}$; for $2 \\le x \\le 3$ the height is $3 - x$, area $\\frac{1}{2}$. The band totals $\\frac{7}{2}$ and the $x > 2$ slice holds $\\frac{1}{2}$ of it, so the probability is $\\frac{1}{7}$ ✓. $\\frac{1}{3}$ IGNORES THE GIVEN INFORMATION and reports the unconditional chance that $x > 2$ ✗. $\\frac{1}{12}$ DIVIDES BY THE WHOLE RECTANGLE, reporting the joint probability instead of the conditional ✗. $\\frac{2}{7}$ PRICES THE CORNER PIECE AS A FULL UNIT SQUARE, though the band narrows to a triangle there ✗.',
    },
  ],

  // slot 9 — digit strings vs monotone/parity classes (product counts +
  //          per-set bijection). Lanes: five digits not monotone -> 26838;
  //          four digits not one parity -> 4320; reversed: monotone
  //          four-digit -> 336.
  [
    {
      q: 'How many five-digit positive integers have five different digits that, read from left to right, are neither strictly increasing nor strictly decreasing?',
      choices: ['$26838$', '$26964$', '$27090$', '$26712$'],
      answer: 0,
      solution: 'Five-digit numbers with five different digits: $9 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 27216$. A strictly increasing number is determined by its digit set, which cannot contain $0$ (it would have to lead), so there are $\\binom{9}{5} = 126$; a strictly decreasing number is also determined by its set, and $0$ may sit last, so there are $\\binom{10}{5} = 252$. No number is both, and $27216 - 126 - 252 = 26838$ ✓. Second route, per digit set: the $\\binom{9}{5} = 126$ zero-free sets give $5! = 120$ numbers each, and the $\\binom{9}{4} = 126$ sets containing $0$ give $120 - 24 = 96$ each (the $0$-leading orders die), confirming $126 \\cdot 120 + 126 \\cdot 96 = 27216$; each zero-free set carries $2$ monotone numbers and each $0$-set carries $1$ (decreasing only), so the monotone total is $252 + 126 = 378$ and the answer is $27216 - 378 = 26838$ ✓. $26964$ SUBTRACTS ONLY THE DECREASING NUMBERS ✗. $27090$ SUBTRACTS ONLY THE INCREASING NUMBERS ✗. $26712$ TREATS $0$ AS A LEGAL LEADING DIGIT in the increasing case, subtracting $\\binom{10}{5}$ twice ✗.',
    },
    {
      q: 'How many four-digit positive integers have four different digits that are neither all even nor all odd?',
      choices: ['$4536$', '$4296$', '$4320$', '$4200$'],
      answer: 2,
      solution: 'Four-digit numbers with four different digits: $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. All-even numbers draw from $\\{0, 2, 4, 6, 8\\}$ with a nonzero leader: $4 \\cdot 4 \\cdot 3 \\cdot 2 = 96$. All-odd numbers draw from five digits with no zero worry: $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$. The two classes cannot overlap, so $4536 - 96 - 120 = 4320$ ✓. Second route, per digit set: all-even sets are the $\\binom{5}{4} = 5$ subsets of the even digits — the one without $0$ gives $24$ numbers and the four with $0$ give $18$ each, $24 + 72 = 96$; all-odd sets are $\\binom{5}{4} = 5$ with $24$ numbers each, $120$; and the same set-by-set count on all digits rebuilds $126 \\cdot 24 + 84 \\cdot 18 = 4536$, so mixed-parity numbers total $4536 - 216 = 4320$ ✓. $4536$ FORGETS TO SUBTRACT anything ✗. $4296$ GIVES THE EVEN NUMBERS A FREE LEADING ZERO, subtracting $120$ twice ✗. $4200$ SUBTRACTS THE MONOTONE COUNTS instead of the parity counts ✗.',
    },
    {
      q: 'How many four-digit positive integers have four different digits that, read from left to right, are in strictly increasing or strictly decreasing order?',
      choices: ['$252$', '$336$', '$420$', '$126$'],
      answer: 1,
      solution: 'A strictly increasing number is determined by its digit set, and the set cannot contain $0$ (it would have to lead): $\\binom{9}{4} = 126$. A strictly decreasing number is determined by its set with $0$ allowed to sit last: $\\binom{10}{4} = 210$. No number is both, so there are $126 + 210 = 336$ ✓. Second route, per digit set: each of the $\\binom{9}{4} = 126$ zero-free sets yields exactly $2$ monotone numbers, one in each direction, and each of the $\\binom{9}{3} = 84$ sets containing $0$ yields exactly $1$ (decreasing only), so the total is $126 \\cdot 2 + 84 = 336$ ✓. $252$ GIVES EVERY ZERO-FREE SET ITS TWO NUMBERS BUT DROPS THE ZERO SETS entirely ✗. $420$ LETS $0$ LEAD AN INCREASING NUMBER, doubling $\\binom{10}{4}$ ✗. $126$ COUNTS ONLY THE INCREASING NUMBERS ✗.',
    },
  ],

  // slot 10 — expected neighbor pairs by type (linearity over seat-pairs vs
  //           person-pairs). Lanes: 4+4 round table boy-girl -> 32/7; 4R6B row
  //           different colors -> 24/5; derived: 5+5 girl-girl pairs -> 20/9.
  [
    {
      q: 'Four boys and four girls sit in random order around a round table with $8$ seats, all $8!$ seatings equally likely. Two people are neighbors if they sit in adjacent seats. What is the expected number of pairs of neighbors consisting of one boy and one girl?',
      choices: ['$4$', '$\\frac{32}{7}$', '$\\frac{24}{7}$', '$\\frac{16}{7}$'],
      answer: 1,
      solution: 'There are $8$ neighboring pairs of seats. For one fixed pair, the first seat holds a boy with probability $\\frac{4}{8}$ and then the second holds a girl with probability $\\frac{4}{7}$, and the girl-then-boy order matches, so a mixed pair has probability $2 \\cdot \\frac{4}{8} \\cdot \\frac{4}{7} = \\frac{4}{7}$; the pieces are dependent, but expected values add, giving $8 \\cdot \\frac{4}{7} = \\frac{32}{7}$ ✓. Second route, sum over person-pairs instead: there are $4 \\cdot 4 = 16$ boy–girl pairs of people, and two given people are neighbors with probability $\\frac{8 \\cdot 2 \\cdot 6!}{8!} = \\frac{2}{7}$ (choose the seat pair, order them, seat the rest), so the expected count is $16 \\cdot \\frac{2}{7} = \\frac{32}{7}$ ✓. $4$ PRICES THE SECOND SEAT AT $\\frac{1}{2}$, ignoring that one boy is already used up ✗. $\\frac{24}{7}$ COUNTS THE SAME-GENDER PAIRS instead ✗. $\\frac{16}{7}$ FORGETS THE GIRL-THEN-BOY ORDER of each mixed pair ✗.',
    },
    {
      q: 'Four red cards and six black cards are shuffled into a row of $10$, all orders of the ten cards equally likely. What is the expected number of neighboring pairs of cards showing two different colors?',
      choices: ['$\\frac{9}{2}$', '$\\frac{16}{3}$', '$\\frac{12}{5}$', '$\\frac{24}{5}$'],
      answer: 3,
      solution: 'A row of $10$ has $9$ neighboring pairs. For one fixed pair of positions, the pair is mixed with probability $2 \\cdot \\frac{4}{10} \\cdot \\frac{6}{9} = \\frac{8}{15}$ (red-then-black or black-then-red, the second card drawn from the remaining $9$), so linearity gives $9 \\cdot \\frac{8}{15} = \\frac{24}{5}$ ✓. Second route, sum over card-pairs: there are $4 \\cdot 6 = 24$ red–black pairs of cards, and two given cards land in adjacent positions with probability $\\frac{9 \\cdot 2 \\cdot 8!}{10!} = \\frac{1}{5}$, so the expected count is $24 \\cdot \\frac{1}{5} = \\frac{24}{5}$ ✓. $\\frac{9}{2}$ TREATS EACH BOUNDARY AS A FAIR COIN, though the colors are not evenly split ✗. $\\frac{16}{3}$ WRAPS THE ROW INTO A CIRCLE and counts $10$ pairs ✗. $\\frac{12}{5}$ FORGETS THE BLACK-THEN-RED ORDER ✗.',
    },
    {
      q: 'Five boys and five girls sit in random order around a round table with $10$ seats, all $10!$ seatings equally likely. Two people are neighbors if they sit in adjacent seats. What is the expected number of pairs of neighbors consisting of two girls?',
      choices: ['$\\frac{5}{2}$', '$\\frac{25}{9}$', '$\\frac{20}{9}$', '$\\frac{40}{9}$'],
      answer: 2,
      solution: 'There are $10$ neighboring pairs of seats. For one fixed pair, the first seat holds a girl with probability $\\frac{5}{10}$ and then the second holds another girl with probability $\\frac{4}{9}$, so a girl–girl pair has probability $\\frac{2}{9}$, and linearity over the $10$ dependent pieces gives $10 \\cdot \\frac{2}{9} = \\frac{20}{9}$ ✓. Second route, sum over person-pairs: there are $\\binom{5}{2} = 10$ pairs of girls, and two given people are neighbors at a $10$-seat round table with probability $\\frac{10 \\cdot 2 \\cdot 8!}{10!} = \\frac{2}{9}$, so the expected count is $10 \\cdot \\frac{2}{9} = \\frac{20}{9}$ ✓. $\\frac{5}{2}$ PRICES BOTH SEATS AT $\\frac{1}{2}$ AS IF INDEPENDENT ✗. $\\frac{25}{9}$ PUTS THE FIRST GIRL BACK, using $\\frac{5}{9}$ for the second seat ✗. $\\frac{40}{9}$ DOUBLES FOR ORDER, though a girl–girl pair reads the same both ways ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 15,
  sections: { '15.2': s152 },
}
