// Counting chapter 7 — variations for §7.3 Problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 1 3 0 2 3 0 1 2 0 1 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving the rows
//    v1: 2 0 1 3 0 1 2 3 1 2 | v2: 0 2 3 1 2 3 0 1 3 0 | v3: 3 1 2 0 1 2 3 0 2 3.
//  - Every key was brute-forced in node before the stem was written, by
//    enumerating the sample space itself: full dice and spinner grids, complete
//    lists of coin and guess sequences, unordered card pairs, and a scan of
//    every sum value for the reversed item. Every key matches its pin. Pin
//    deviations: none.
//  - This is the section about outcomes that are NOT equally likely, so the
//    solutions keep naming the true sample space out loud — the ordered pairs,
//    the labeled sequences, the unordered sets — and the standing trap in every
//    distractor set is the one this section exists to kill: treating a list of
//    unequal results (sums, head counts, "the largest number", "same or
//    different") as if each entry were equally likely.
//  - Two genuinely independent routes per solution, each ending ✓; route two
//    never re-imports route one's count. Each wrong choice is then named in
//    CAPS, ending ✗, and every attribution is an arithmetically true statement
//    about that number, checked in the same enumeration.
//  - Conventions are settled in every stem: dice are fair, spinner sectors are
//    equal and every label is given, separate devices are independent, repeated
//    draws say whether the item goes back, and simultaneous draws say that every
//    set is equally likely. "Exactly" and "at least" are always spelled out.

const s73 = [
  // slot 1 — two independent devices; the sample space is the grid of pairs.
  //          Lanes: coin x 7-spinner prime -> 2/7; color x number spinner -> 1/6;
  //          derived: exactly one of two events on a coin-and-die grid -> 1/2.
  [
    {
      q: 'A fair coin is flipped once, and a spinner with $7$ equal sectors numbered $1$ through $7$ is spun once. The coin and the spinner do not affect each other. What is the probability that the coin shows tails and the spinner lands on a prime number?',
      choices: ['$\\frac{4}{7}$', '$\\frac{1}{14}$', '$\\frac{2}{7}$', '$\\frac{2}{5}$'],
      answer: 2,
      solution:
        'The equally likely outcomes are not "tails" and "a prime" — they are the $2 \\times 7 = 14$ pairs (coin face, sector), because each of the two faces can meet each of the seven sectors and no pair is favored. The primes among $1$ through $7$ are $2$, $3$, $5$, and $7$, so the favorable pairs are $(T,2)$, $(T,3)$, $(T,5)$, $(T,7)$: $\\frac{4}{14} = \\frac{2}{7}$ ✓. Counting the failures instead gives the same answer. A pair fails if the coin shows heads — all $7$ pairs in that row — or if the coin shows tails while the spinner lands on $1$, $4$, or $6$, which is $3$ more. That is $7 + 3 = 10$ failures out of $14$, leaving $14 - 10 = 4$ favorable pairs and $\\frac{4}{14} = \\frac{2}{7}$ ✓. FORGETTING THE COIN gives $\\frac{4}{7}$, the probability that the spinner alone lands on a prime ✗. COUNTING ONE PAIR gives $\\frac{1}{14}$, the probability of a single named outcome such as $(T,3)$ ✗. COMPARING FAVORABLE PAIRS WITH UNFAVORABLE PAIRS instead of with the whole sample space gives $\\frac{4}{10} = \\frac{2}{5}$ ✗.',
    },
    {
      q: 'A spinner with $3$ equal sectors — red, blue, green — and a second spinner with $4$ equal sectors numbered $1$, $2$, $3$, $4$ are each spun once, independently. What is the probability that the first spinner lands on red and the second lands on an even number?',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution:
        'Write down the real sample space: the $3 \\times 4 = 12$ pairs (color, number), each equally likely since every sector on each spinner is the same size. Red with an even number means the pairs $(\\text{red},2)$ and $(\\text{red},4)$, so the probability is $\\frac{2}{12} = \\frac{1}{6}$ ✓. Counting the pairs that fail is an independent check: any pair whose color is blue or green fails, and there are $2 \\times 4 = 8$ of those; among the $4$ red pairs, $(\\text{red},1)$ and $(\\text{red},3)$ fail as well. That is $8 + 2 = 10$ failing pairs out of $12$, so $12 - 10 = 2$ succeed and the probability is $\\frac{2}{12} = \\frac{1}{6}$ ✓. STOPPING AT THE COLOR gives $\\frac{1}{3}$, the probability that the first spinner lands on red no matter what the second does ✗. READING "AND" AS "OR" gives the $4$ red pairs plus the $6$ even-numbered pairs minus the $2$ counted twice, $\\frac{8}{12} = \\frac{2}{3}$ ✗. COUNTING A SINGLE PAIR gives $\\frac{1}{12}$, which is $(\\text{red},2)$ alone and leaves out $(\\text{red},4)$ ✗.',
    },
    {
      q: 'A fair coin is flipped once and a standard six-sided die is rolled once, independently. What is the probability that exactly one of these two things happens: the coin shows heads, the die shows an even number?',
      choices: ['$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $2 \\times 6 = 12$ pairs (coin, die). "Exactly one" splits into two blocks that cannot overlap: heads with an odd die, which is $1 \\times 3 = 3$ pairs, and tails with an even die, another $1 \\times 3 = 3$ pairs. That is $6$ favorable pairs, so the probability is $\\frac{6}{12} = \\frac{1}{2}$ ✓. Removing the failures is a separate route to the same place. A pair fails when both things happen — heads with an even die, $3$ pairs — or when neither happens — tails with an odd die, $3$ pairs — for $6$ failures; $12 - 6 = 6$ pairs remain and $\\frac{6}{12} = \\frac{1}{2}$ ✓. ANSWERING "BOTH" gives $\\frac{3}{12} = \\frac{1}{4}$, the probability of heads together with an even die ✗. ANSWERING "AT LEAST ONE" gives $\\frac{9}{12} = \\frac{3}{4}$, which also sweeps in the pairs where both happen ✗. TREATING "BOTH, EXACTLY ONE, NEITHER" AS THREE EQUALLY LIKELY OUTCOMES gives $\\frac{1}{3}$; those three descriptions cover $3$, $6$, and $3$ of the $12$ pairs, so they are not interchangeable ✗.',
    },
  ],

  // slot 2 — matching outcomes across identical devices.
  //          Lanes: two d8 match -> 1/8; two letter spinners differ -> 4/5;
  //          derived: three dice all match -> 1/36.
  [
    {
      q: 'Two fair eight-sided dice, each with faces numbered $1$ through $8$, are rolled together. What is the probability that the two dice show the same number?',
      choices: ['$\\frac{1}{8}$', '$\\frac{1}{64}$', '$\\frac{1}{4}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'Think of the dice as a first one and a second one; then the sample space is the $8 \\times 8 = 64$ ordered pairs, all equally likely. The pairs that match are $(1,1), (2,2), \\ldots, (8,8)$ — one for each face, so $8$ of them — and the probability is $\\frac{8}{64} = \\frac{1}{8}$ ✓. A route that never builds the grid: let the first die land wherever it likes, and only then look at the second. Whatever number the first die shows, the second die shows that same number on exactly $1$ of its $8$ equally likely faces, so the probability is $\\frac{1}{8}$ ✓. COUNTING ONE PARTICULAR DOUBLE gives $\\frac{1}{64}$, which is the chance of, say, two fives ✗. COUNTING EACH DOUBLE TWICE, as though $(3,3)$ and "$(3,3)$ with the dice swapped" were different rolls, gives $\\frac{16}{64} = \\frac{1}{4}$ ✗. TREATING "SAME" AND "DIFFERENT" AS TWO EQUALLY LIKELY OUTCOMES gives $\\frac{1}{2}$; they cover $8$ and $56$ of the $64$ pairs, which is not a fair split ✗.',
    },
    {
      q: 'Two spinners, each with $5$ equal sectors labeled A, B, C, D, E, are spun once each, independently. What is the probability that they land on different letters?',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{3}$', '$\\frac{4}{5}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'The equally likely outcomes are the $5 \\times 5 = 25$ ordered pairs (first spinner, second spinner). Exactly $5$ of them repeat a letter — AA, BB, CC, DD, EE — so $25 - 5 = 20$ pairs show different letters and the probability is $\\frac{20}{25} = \\frac{4}{5}$ ✓. A one-spinner-at-a-time route agrees without the grid: the first spinner lands on some letter, and the second spinner then avoids it as long as it lands on any of the other $4$ of its $5$ equally likely sectors, giving $\\frac{4}{5}$ ✓. ANSWERING THE COMPLEMENT gives $\\frac{5}{25} = \\frac{1}{5}$, the probability that the two letters match ✗. TREATING THE UNORDERED RESULTS AS EQUALLY LIKELY gives $\\frac{10}{15} = \\frac{2}{3}$: there are $15$ unordered results — $10$ letter pairs and $5$ repeats — but a result like "A and B" happens twice as often as "A and A" ✗. GUESSING "THEY MATCH OR THEY DO NOT" gives $\\frac{1}{2}$ ✗.',
    },
    {
      q: 'Three standard six-sided dice are rolled together, all three fair and independent. What is the probability that all three dice show the same number?',
      choices: ['$\\frac{1}{216}$', '$\\frac{1}{36}$', '$\\frac{1}{6}$', '$\\frac{4}{9}$'],
      answer: 1,
      solution:
        'Label the dice first, second, third; the sample space is the $6 \\times 6 \\times 6 = 216$ ordered triples, each equally likely. A triple with all three the same is settled by naming the common number, so there are exactly $6$ of them and the probability is $\\frac{6}{216} = \\frac{1}{36}$ ✓. Taking the dice one at a time gives the same answer without the $216$: the first die may show anything, the second matches it on $1$ of its $6$ faces, and the third must match as well, another $1$ of $6$, so the probability is $\\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$ ✓. NAMING THE NUMBER TOO gives $\\frac{1}{216}$, the probability of one particular triple such as three fours ✗. MATCHING ONLY ONE PAIR OF DICE gives $\\frac{1}{6}$, the probability that the second die copies the first while the third is ignored ✗. ASKING FOR SOME TWO DICE TO MATCH gives $\\frac{96}{216} = \\frac{4}{9}$, which counts every triple with a repeat rather than only the all-alike ones ✗.',
    },
  ],

  // slot 3 — restricting both dice to a range, and the "at least one" reversal.
  //          Lanes: two dice both below 5 -> 4/9; two d10 both at least 8 -> 9/100;
  //          derived: at least one die at least 5 -> 5/9.
  [
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that both dice show a number less than $5$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{4}{9}$', '$\\frac{5}{9}$', '$\\frac{8}{9}$'],
      answer: 1,
      solution:
        'The sample space is the $6 \\times 6 = 36$ ordered pairs. A pair is favorable exactly when each die lands in $\\{1,2,3,4\\}$, so the favorable pairs form a $4 \\times 4$ block of the table: $16$ of them, and $\\frac{16}{36} = \\frac{4}{9}$ ✓. Counting the failures from scratch confirms it. A pair fails when at least one die shows $5$ or $6$: the first die does so in $2 \\times 6 = 12$ pairs, the second in another $2 \\times 6 = 12$, and the $2 \\times 2 = 4$ pairs where both dice are big have been counted twice, so the failures number $12 + 12 - 4 = 20$. That leaves $36 - 20 = 16$ favorable pairs and $\\frac{16}{36} = \\frac{4}{9}$ ✓. LOOKING AT ONE DIE ONLY gives $\\frac{4}{6} = \\frac{2}{3}$ and forgets that the other die must cooperate too ✗. ANSWERING THE COMPLEMENT gives $\\frac{20}{36} = \\frac{5}{9}$, the probability that at least one die shows $5$ or more ✗. ASKING FOR AT LEAST ONE SMALL DIE instead of both gives $\\frac{32}{36} = \\frac{8}{9}$ ✗.',
    },
    {
      q: 'Two fair ten-sided dice, each with faces numbered $1$ through $10$, are rolled together, independently. What is the probability that both numbers showing are at least $8$?',
      choices: ['$\\frac{3}{10}$', '$\\frac{51}{100}$', '$\\frac{3}{50}$', '$\\frac{9}{100}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $10 \\times 10 = 100$ ordered pairs. "At least $8$" means $8$, $9$, or $10$ — three faces on each die — so the favorable pairs form a $3 \\times 3$ block: $9$ pairs, and the probability is $\\frac{9}{100}$ ✓. A complementary count reaches the same place from the other side. A pair fails when the first die is at most $7$ ($7 \\times 10 = 70$ pairs) or the second die is at most $7$ (another $70$), and the $7 \\times 7 = 49$ pairs where both are small were counted twice, so the failures number $70 + 70 - 49 = 91$. Then $100 - 91 = 9$ pairs are favorable: $\\frac{9}{100}$ ✓. LOOKING AT ONE DIE ONLY gives $\\frac{3}{10}$ ✗. ADDING THE TWO COUNTS INSTEAD OF MULTIPLYING gives $\\frac{3 + 3}{100} = \\frac{6}{100} = \\frac{3}{50}$; the favorable pairs form a block, not a line ✗. ASKING FOR AT LEAST ONE BIG DIE gives $\\frac{51}{100}$ ✗.',
    },
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that at least one of the two numbers showing is at least $5$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{4}{9}$', '$\\frac{5}{9}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        'Work with the complement inside the $36$-pair sample space. "At least one die is $5$ or more" fails only when both dice land in $\\{1,2,3,4\\}$, and those pairs form a $4 \\times 4$ block of $16$ cells. So $36 - 16 = 20$ pairs are favorable and the probability is $\\frac{20}{36} = \\frac{5}{9}$ ✓. Counting the favorable pairs head-on agrees. The first die is $5$ or $6$ in $2 \\times 6 = 12$ pairs and the second die is $5$ or $6$ in $2 \\times 6 = 12$ pairs, but the $2 \\times 2 = 4$ pairs where both dice are big appear in both lists, so the total is $12 + 12 - 4 = 20$ and the probability is $\\frac{20}{36} = \\frac{5}{9}$ ✓. READING "AT LEAST ONE" AS "BOTH" gives $\\frac{4}{36} = \\frac{1}{9}$ ✗. READING IT AS "EXACTLY ONE" gives $\\frac{16}{36} = \\frac{4}{9}$ and throws away the $4$ pairs where both dice are big ✗. ADDING THE TWO HALVES WITHOUT REMOVING THE OVERLAP gives $\\frac{12 + 12}{36} = \\frac{2}{3}$, which counts those same $4$ pairs twice ✗.',
    },
  ],

  // slot 4 — a fixed sum on a small square grid; the sums themselves are unequal.
  //          Lanes: spinner 1-4 twice, sum 6 -> 3/16; cards 1-5 with replacement,
  //          sum 6 -> 1/5; reversed: which sum on a 3-spinner has probability 2/9.
  [
    {
      q: 'A spinner with $4$ equal sectors numbered $1$, $2$, $3$, $4$ is spun twice, the two spins independent. What is the probability that the two spins add up to $6$?',
      choices: ['$\\frac{1}{7}$', '$\\frac{1}{8}$', '$\\frac{3}{8}$', '$\\frac{3}{16}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $4 \\times 4 = 16$ ordered pairs (first spin, second spin), not the seven possible sums. Reading the sum-$6$ diagonal of that grid gives $(2,4)$, $(3,3)$, and $(4,2)$ — three cells — so the probability is $\\frac{3}{16}$ ✓. The shape of the whole sum distribution confirms the count independently. Sums run from $2$ to $8$ with cell counts $1, 2, 3, 4, 3, 2, 1$, which add to $16$ as they must, and the list is symmetric about the middle sum $5$; so sum $6$ occupies as many cells as sum $4$, and sum $4$ is $(1,3), (2,2), (3,1)$, three cells. That gives $\\frac{3}{16}$ ✓. TREATING THE SEVEN SUMS AS EQUALLY LIKELY gives $\\frac{1}{7}$, the flat guess this section exists to warn against ✗. DROPPING $(3,3)$, as though the two spins had to differ, gives $\\frac{2}{16} = \\frac{1}{8}$ ✗. ANSWERING "A SUM OF $6$ OR MORE" gives $3 + 2 + 1 = 6$ cells, $\\frac{6}{16} = \\frac{3}{8}$ ✗.',
    },
    {
      q: 'Five cards numbered $1$ through $5$ sit in a box. One card is drawn at random, its number is written down, and the card is put back; then a card is drawn at random again. What is the probability that the two numbers written down add up to $6$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{5}$', '$\\frac{4}{25}$', '$\\frac{1}{25}$'],
      answer: 1,
      solution:
        'Because the card goes back, the second draw has the same five options as the first, and the equally likely outcomes are the $5 \\times 5 = 25$ ordered pairs. The pairs adding to $6$ are $(1,5), (2,4), (3,3), (4,2), (5,1)$ — five of them — so the probability is $\\frac{5}{25} = \\frac{1}{5}$ ✓. A route that never lists the pairs: whatever number $c$ comes up first, the second draw completes the sum $6$ only if it is $6 - c$, and for every $c$ from $1$ to $5$ that partner $6 - c$ is itself a number from $1$ to $5$, so exactly $1$ of the $5$ equally likely second cards works no matter what happened first: $\\frac{1}{5}$ ✓. TREATING THE NINE POSSIBLE SUMS $2$ THROUGH $10$ AS EQUALLY LIKELY gives $\\frac{1}{9}$; the sums own $1, 2, 3, 4, 5, 4, 3, 2, 1$ of the $25$ pairs, so they are far from interchangeable ✗. DROPPING $(3,3)$, as though the same card could not come up twice, leaves $\\frac{4}{25}$ ✗. COUNTING ONE ORDERED PAIR gives $\\frac{1}{25}$ ✗.',
    },
    {
      q: 'A spinner with $3$ equal sectors numbered $1$, $2$, $3$ is spun twice, the two spins independent. For a certain whole number $k$ greater than $4$, the probability that the two spins add up to $k$ is exactly $\\frac{2}{9}$. What is $k$?',
      choices: ['$5$', '$6$', '$3$', '$4$'],
      answer: 0,
      solution:
        'The sample space is the $3 \\times 3 = 9$ ordered pairs, so a probability of $\\frac{2}{9}$ means the sum is reached by exactly $2$ of those pairs. Listing the grid, sum $2$ comes from $1$ pair, sum $3$ from $2$, sum $4$ from $3$, sum $5$ from $2$, and sum $6$ from $1$; the counts $1, 2, 3, 2, 1$ add to $9$. Exactly two sums are reached twice, namely $3$ and $5$, and only $5$ is greater than $4$, so $k = 5$ ✓. A formula settles it without the list. A sum $k$ is made by choosing the first spin $a$ and forcing the second to be $k - a$, which is legal only when both numbers lie between $1$ and $3$; that gives $k - 1$ pairs when $k \\le 4$ and $7 - k$ pairs when $k \\ge 4$. For $k > 4$ we need $7 - k = 2$, so $k = 5$ ✓. PICKING THE LARGEST SUM gives $6$, which happens only through $(3,3)$, a probability of $\\frac{1}{9}$ ✗. IGNORING THE CONDITION $k > 4$ gives $3$, the other sum with probability $\\frac{2}{9}$ ✗. PICKING THE MOST LIKELY SUM gives $4$, which has probability $\\frac{3}{9} = \\frac{1}{3}$ ✗.',
    },
  ],

  // slot 5 — smallest / largest of two dice; the extreme values are very unequal.
  //          Lanes: two dice, minimum exactly 2 -> 1/4; two d4, maximum exactly 3
  //          -> 5/16; derived: two dice, maximum at least 4 -> 3/4.
  [
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the smaller of the two numbers showing is exactly $2$? (If both dice show the same number, that number counts as the smaller.)',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{6}$', '$\\frac{11}{36}$', '$\\frac{25}{36}$'],
      answer: 0,
      solution:
        'Use nested blocks inside the $36$-pair sample space. "The smaller number is at least $2$" means both dice avoid $1$, which is a $5 \\times 5 = 25$ block; "the smaller number is at least $3$" means both avoid $1$ and $2$, a $4 \\times 4 = 16$ block. The rolls whose smallest number is exactly $2$ are the ones in the first block but not the second: $25 - 16 = 9$ pairs, so $\\frac{9}{36} = \\frac{1}{4}$ ✓. Listing them directly is a separate check: the roll must contain a $2$ and nothing below it, so it is $(2,2)$, or a $2$ paired with $3$, $4$, $5$, or $6$ in either order. That is $1 + 2 \\cdot 4 = 9$ pairs and $\\frac{9}{36} = \\frac{1}{4}$ ✓. TREATING THE SIX POSSIBLE SMALLEST NUMBERS AS EQUALLY LIKELY gives $\\frac{1}{6}$; in fact a smallest of $1$ fills $11$ cells while a smallest of $6$ fills just $1$ ✗. COUNTING EVERY ROLL THAT CONTAINS A $2$ gives $\\frac{11}{36}$ and wrongly keeps $(2,1)$ and $(1,2)$, whose smaller number is $1$ ✗. ANSWERING "THE SMALLER NUMBER IS AT LEAST $2$" gives $\\frac{25}{36}$ ✗.',
    },
    {
      q: 'Two fair four-sided dice, each with faces numbered $1$ through $4$, are rolled together, independently. What is the probability that the larger of the two numbers showing is exactly $3$? (If both dice show the same number, that number counts as the larger.)',
      choices: ['$\\frac{1}{4}$', '$\\frac{7}{16}$', '$\\frac{5}{16}$', '$\\frac{9}{16}$'],
      answer: 2,
      solution:
        'The sample space is the $4 \\times 4 = 16$ ordered pairs. "The larger number is at most $3$" means both dice land in $\\{1,2,3\\}$, a $3 \\times 3 = 9$ block, and "at most $2$" means both land in $\\{1,2\\}$, a $2 \\times 2 = 4$ block. Subtracting one block from the other leaves the rolls whose largest number is exactly $3$: $9 - 4 = 5$ pairs, so $\\frac{5}{16}$ ✓. Naming them one by one is an independent count: the roll must contain a $3$ and nothing above it, so it is $(3,3)$, or a $3$ paired with $1$ or $2$ in either order — $1 + 2 \\cdot 2 = 5$ pairs — giving $\\frac{5}{16}$ ✓. TREATING THE FOUR POSSIBLE LARGEST NUMBERS AS EQUALLY LIKELY gives $\\frac{1}{4}$; those four values fill $1$, $3$, $5$, and $7$ of the $16$ cells ✗. COUNTING EVERY ROLL THAT CONTAINS A $3$ gives $\\frac{7}{16}$ and wrongly keeps $(3,4)$ and $(4,3)$, whose larger number is $4$ ✗. ANSWERING "THE LARGER NUMBER IS AT MOST $3$" gives $\\frac{9}{16}$ ✗.',
    },
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the larger of the two numbers showing is at least $4$? (If both dice show the same number, that number counts as the larger.)',
      choices: ['$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{7}{36}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Take the complement inside the $36$-pair sample space. The larger number falls short of $4$ only when both dice land in $\\{1,2,3\\}$, a $3 \\times 3 = 9$ block, so $36 - 9 = 27$ rolls are favorable and the probability is $\\frac{27}{36} = \\frac{3}{4}$ ✓. Counting the favorable rolls directly agrees: the largest number is at least $4$ exactly when at least one die shows $4$, $5$, or $6$. The first die does so in $3 \\times 6 = 18$ pairs, the second in another $18$, and the $3 \\times 3 = 9$ pairs where both dice are large sit in both lists, so the total is $18 + 18 - 9 = 27$ and the probability is $\\frac{27}{36} = \\frac{3}{4}$ ✓. REQUIRING BOTH DICE TO BE AT LEAST $4$ gives $\\frac{9}{36} = \\frac{1}{4}$ ✗. READING "AT LEAST $4$" AS "EXACTLY $4$" gives the $7$ rolls that contain a $4$ and nothing higher, $\\frac{7}{36}$ ✗. LOOKING AT ONE DIE ONLY gives $\\frac{3}{6} = \\frac{1}{2}$ ✗.',
    },
  ],

  // slot 6 — sequences of coins or spins where the "descriptions" are unequal.
  //          Lanes: three draws from a lopsided bag, not all one color -> 5/6; three
  //          spins not all alike -> 8/9; reversed: given the probability, how many
  //          coins -> 6.
  [
    {
      q: 'A bag holds $6$ marbles: $1$ red, $2$ blue, and $3$ green. A marble is drawn at random, its color is recorded, and it is put back; this is done three times, the draws independent. What is the probability that the three recorded colors are not all the same?',
      choices: ['$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{8}{9}$', '$\\frac{7}{8}$'],
      answer: 1,
      solution:
        'The three colors are not equally likely, so the honest sample space is built from the marbles rather than the colors: the $6^3 = 216$ ordered triples of marbles are equally likely. All three draws share a color in $1^3 = 1$ way for red, $2^3 = 8$ ways for blue, and $3^3 = 27$ ways for green, so $1 + 8 + 27 = 36$ triples are all one color and $216 - 36 = 180$ are not: $\\frac{180}{216} = \\frac{5}{6}$ ✓. Building the favorable triples directly is an independent route. A triple that is not all one color shows either three colors or exactly two. Three colors means one marble of each, in some order: $3! \\cdot (1 \\cdot 2 \\cdot 3) = 36$ triples. For exactly two colors, count the triples that stay inside a pair of colors and drop the ones that use a single color: red and blue give $3^3 - 1 - 8 = 18$, red and green give $4^3 - 1 - 27 = 36$, and blue and green give $5^3 - 8 - 27 = 90$, for $18 + 36 + 90 = 144$. That makes $36 + 144 = 180$ triples, and $\\frac{180}{216} = \\frac{5}{6}$ ✓. TREATING THE THREE COLORS AS EQUALLY LIKELY gives $1 - \\frac{3}{27} = \\frac{8}{9}$, which would be right only if red, blue, and green each owned a third of the bag ✗. ANSWERING THE COMPLEMENT gives $\\frac{36}{216} = \\frac{1}{6}$, the probability that the three colors do match ✗. SUBTRACTING ONLY THE ALL-GREEN TRIPLES gives $\\frac{216 - 27}{216} = \\frac{7}{8}$ and forgets that red or blue can sweep all three draws too ✗.',
    },
    {
      q: 'A spinner with $3$ equal sectors labeled X, Y, Z is spun three times, the spins independent. What is the probability that the three spins do not all show the same letter?',
      choices: ['$\\frac{2}{9}$', '$\\frac{1}{9}$', '$\\frac{7}{9}$', '$\\frac{8}{9}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $3^3 = 27$ ordered triples of letters. Exactly $3$ of them are all alike — XXX, YYY, ZZZ, one for each letter — so $27 - 3 = 24$ triples are favorable and the probability is $\\frac{24}{27} = \\frac{8}{9}$ ✓. A spin-by-spin route reaches the same number without the $27$: the first spin sets some letter, and the three spins are all alike only if the second spin repeats it, probability $\\frac{1}{3}$, and the third repeats it too, another $\\frac{1}{3}$. So "all alike" has probability $\\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{9}$, and the answer is $1 - \\frac{1}{9} = \\frac{8}{9}$ ✓. ANSWERING "ALL THREE DIFFERENT" gives $\\frac{6}{27} = \\frac{2}{9}$, since the three letters can be ordered in $3! = 6$ ways ✗. ANSWERING THE COMPLEMENT gives $\\frac{3}{27} = \\frac{1}{9}$, the probability that the three spins do match ✗. READING "NOT ALL THE SAME" AS "NOT ALL DIFFERENT" gives $\\frac{27 - 6}{27} = \\frac{7}{9}$ ✗.',
    },
    {
      q: 'A pile of $n$ fair coins is flipped, all flips independent. The probability that at least one coin shows heads and at least one coin shows tails is $\\frac{31}{32}$. What is $n$?',
      choices: ['$5$', '$63$', '$6$', '$64$'],
      answer: 2,
      solution:
        'Label the coins, so the $2^n$ sequences of H and T are equally likely. Exactly two of them miss a face — all heads and all tails — so the probability asked about is $\\frac{2^n - 2}{2^n}$. Setting $\\frac{2^n - 2}{2^n} = \\frac{31}{32}$ and clearing denominators gives $32 \\cdot 2^n - 64 = 31 \\cdot 2^n$, so $2^n = 64$ and $n = 6$ ✓. A flip-by-flip route reaches $n$ without ever forming $2^n$. The coins are all alike exactly when every flip after the first copies the first, and each of those $n - 1$ flips copies it with probability $\\frac{1}{2}$, so all alike has probability $\\left(\\frac{1}{2}\\right)^{n-1}$. Here all alike has probability $1 - \\frac{31}{32} = \\frac{1}{32}$, so $\\left(\\frac{1}{2}\\right)^{n-1} = \\frac{1}{32}$, giving $n - 1 = 5$ and $n = 6$ ✓. TREATING THE HEAD COUNTS $0, 1, \\ldots, n$ AS $n + 1$ EQUALLY LIKELY OUTCOMES turns the probability into $\\frac{n - 1}{n + 1}$, and $\\frac{n - 1}{n + 1} = \\frac{31}{32}$ gives $32n - 32 = 31n + 31$, or $n = 63$ ✗. READING THE $32$ AS THE NUMBER OF SEQUENCES gives $2^n = 32$ and $n = 5$, but five coins give $\\frac{30}{32} = \\frac{15}{16}$ ✗. ANSWERING WITH THE SIZE OF THE SAMPLE SPACE gives $64$, the number of sequences rather than the number of coins ✗.',
    },
  ],

  // slot 7 — head counts and vote counts, the classic unequal-outcome list.
  //          Lanes: eight coins split evenly -> 35/128; five guesses, at least four
  //          "true" -> 3/16; derived: four coins, more heads than tails -> 5/16.
  [
    {
      q: 'Eight fair coins are flipped, each flip independent of the others. What is the probability that the number of heads equals the number of tails?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{2}$', '$\\frac{35}{128}$', '$\\frac{93}{256}$'],
      answer: 2,
      solution:
        'The equally likely outcomes are the $2^8 = 256$ labeled sequences of H and T. Equal counts means exactly $4$ heads, and a sequence with exactly $4$ heads is fixed by choosing which $4$ of the $8$ coins they are: $\\binom{8}{4} = 70$ sequences. The probability is $\\frac{70}{256} = \\frac{35}{128}$ ✓. Splitting the coins into two halves counts the same sequences a different way. Say $i$ of the first four coins are heads; then $4 - i$ of the last four must be heads, so the count is $\\binom{4}{0}\\binom{4}{4} + \\binom{4}{1}\\binom{4}{3} + \\binom{4}{2}\\binom{4}{2} + \\binom{4}{3}\\binom{4}{1} + \\binom{4}{4}\\binom{4}{0} = 1 + 16 + 36 + 16 + 1 = 70$, and again $\\frac{70}{256} = \\frac{35}{128}$ ✓. TREATING THE NINE POSSIBLE HEAD COUNTS $0$ THROUGH $8$ AS EQUALLY LIKELY gives $\\frac{1}{9}$; the count $4$ owns $70$ sequences while the count $0$ owns $1$ ✗. GUESSING "THEY MATCH OR THEY DO NOT" gives $\\frac{1}{2}$ ✗. ANSWERING "MORE HEADS THAN TAILS" gives $\\frac{93}{256}$, since $\\frac{256 - 70}{2} = 93$ ✗.',
    },
    {
      q: 'Five students each independently guess “true” or “false” on the same question, each of the two guesses equally likely for each student. What is the probability that at least four of the five students guess “true”?',
      choices: ['$\\frac{3}{16}$', '$\\frac{5}{32}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'The students are different people, so the equally likely outcomes are the $2^5 = 32$ lists of five guesses. All five guessing “true” is $1$ list. Exactly four guessing “true” is settled by naming the one student who guessed “false”, so that is $5$ lists. Together $1 + 5 = 6$ lists are favorable and the probability is $\\frac{6}{32} = \\frac{3}{16}$ ✓. A symmetry route avoids that count. Swapping every guess turns “at least four true” into “at least four false”, so those two groups are the same size, and they cannot overlap. The lists in neither group have two or three “true” guesses, and there are $\\binom{5}{2} + \\binom{5}{3} = 10 + 10 = 20$ of those, so the two groups cover $32 - 20 = 12$ lists between them and each holds $6$: $\\frac{6}{32} = \\frac{3}{16}$ ✓. READING "AT LEAST FOUR" AS "EXACTLY FOUR" gives $\\frac{5}{32}$ ✗. TREATING THE SIX POSSIBLE COUNTS OF “TRUE” AS EQUALLY LIKELY and taking two of them gives $\\frac{2}{6} = \\frac{1}{3}$; the true sizes are $1, 5, 10, 10, 5, 1$ ✗. ANSWERING "AT LEAST THREE" gives $\\frac{16}{32} = \\frac{1}{2}$ ✗.',
    },
    {
      q: 'Four fair coins are flipped, each flip independent of the others. What is the probability that the number of heads is greater than the number of tails?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{11}{16}$', '$\\frac{5}{16}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $2^4 = 16$ labeled sequences. More heads than tails means $3$ or $4$ heads, and choosing which coins are heads gives $\\binom{4}{3} = 4$ sequences with three heads and $\\binom{4}{4} = 1$ with four. That is $5$ sequences, so the probability is $\\frac{5}{16}$ ✓. A symmetry route never touches those binomial coefficients. Turning every coin over swaps heads with tails, so "more heads" and "more tails" contain equally many sequences; the only sequences in neither group are the ties, which have exactly $2$ heads and $2$ tails and number $\\binom{4}{2} = 6$. So the two groups split the remaining $16 - 6 = 10$ sequences evenly, $5$ apiece: $\\frac{5}{16}$ ✓. TREATING THE FIVE POSSIBLE HEAD COUNTS $0$ THROUGH $4$ AS EQUALLY LIKELY and keeping counts $3$ and $4$ gives $\\frac{2}{5}$; the real sizes are $1, 4, 6, 4, 1$ ✗. FORGETTING THAT A TIE IS POSSIBLE and splitting everything in half gives $\\frac{1}{2}$ ✗. ANSWERING "AT LEAST TWO HEADS" gives $\\frac{11}{16}$ ✗.',
    },
  ],

  // slot 8 — sums with a number-theory condition; the eleven sums are unequal.
  //          Lanes: two dice, sum a multiple of 5 -> 7/36; spinner 1-4 twice, prime sum ->
  //          9/16; derived: two dice, composite sum -> 7/12.
  [
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the sum of the two numbers showing is a multiple of $5$?',
      choices: ['$\\frac{2}{11}$', '$\\frac{4}{21}$', '$\\frac{1}{9}$', '$\\frac{7}{36}$'],
      answer: 3,
      solution:
        'The sums run from $2$ to $12$, and the only multiples of $5$ in that range are $5$ and $10$. The equally likely outcomes are the $36$ ordered pairs, so count cells: sum $5$ comes from $(1,4), (2,3), (3,2), (4,1)$, four cells, and sum $10$ from $(4,6), (5,5), (6,4)$, three cells. Together $4 + 3 = 7$ cells, so the probability is $\\frac{7}{36}$ ✓. A count that uses no diagonals: for each first die $a$, the second die must be $5 - a$ or $10 - a$, and it works only if that number lies between $1$ and $6$. Running $a$ from $1$ to $6$, the legal partners are $\\{4\\}, \\{3\\}, \\{2\\}, \\{1, 6\\}, \\{5\\}, \\{4\\}$ — sizes $1, 1, 1, 2, 1, 1$, totaling $7$ pairs — so again $\\frac{7}{36}$ ✓. TREATING THE ELEVEN SUMS AS EQUALLY LIKELY gives $\\frac{2}{11}$, two multiples of $5$ out of eleven values ✗. TREATING THE $21$ UNORDERED RESULTS AS EQUALLY LIKELY gives $\\frac{4}{21}$, counting $\\{1,4\\}, \\{2,3\\}, \\{4,6\\}, \\{5,5\\}$; but $\\{1,4\\}$ happens twice as often as $\\{5,5\\}$ ✗. KEEPING ONLY THE SUM $5$ gives $\\frac{4}{36} = \\frac{1}{9}$ ✗.',
    },
    {
      q: 'A spinner with $4$ equal sectors numbered $1$, $2$, $3$, $4$ is spun twice, the two spins independent. What is the probability that the sum of the two spins is a prime number?',
      choices: ['$\\frac{4}{7}$', '$\\frac{9}{16}$', '$\\frac{1}{2}$', '$\\frac{7}{16}$'],
      answer: 1,
      solution:
        'The sums range from $2$ to $8$, and the primes among them are $2$, $3$, $5$, and $7$. The equally likely outcomes are the $4 \\times 4 = 16$ ordered pairs, so count cells on each diagonal: sum $2$ has $(1,1)$, one cell; sum $3$ has $(1,2), (2,1)$, two; sum $5$ has $(1,4), (2,3), (3,2), (4,1)$, four; sum $7$ has $(3,4), (4,3)$, two. Altogether $1 + 2 + 4 + 2 = 9$ cells and the probability is $\\frac{9}{16}$ ✓. The complement gives an independent check. The non-prime sums are $4$, $6$, and $8$, filling $3$, $3$, and $1$ cells respectively — $(1,3),(2,2),(3,1)$; $(2,4),(3,3),(4,2)$; $(4,4)$ — for $7$ cells, so $16 - 7 = 9$ remain and the probability is $\\frac{9}{16}$ ✓. TREATING THE SEVEN SUMS AS EQUALLY LIKELY gives $\\frac{4}{7}$, four primes out of seven values ✗. FORGETTING THAT $2$ IS PRIME drops $(1,1)$ and gives $\\frac{8}{16} = \\frac{1}{2}$ ✗. ANSWERING THE COMPLEMENT gives $\\frac{7}{16}$, the probability of a non-prime sum ✗.',
    },
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the sum of the two numbers showing is a composite number? (A composite number is a whole number greater than $1$ that is not prime.)',
      choices: ['$\\frac{7}{12}$', '$\\frac{6}{11}$', '$\\frac{5}{12}$', '$\\frac{17}{36}$'],
      answer: 0,
      solution:
        'Every sum from $2$ to $12$ is either prime or composite, so the complement is the quick road. The prime sums are $2$, $3$, $5$, $7$, and $11$, filling $1$, $2$, $4$, $6$, and $2$ of the $36$ cells for a total of $15$. That leaves $36 - 15 = 21$ cells with a composite sum, so the probability is $\\frac{21}{36} = \\frac{7}{12}$ ✓. Adding up the composite diagonals directly is a genuinely separate count: the composite sums are $4$, $6$, $8$, $9$, $10$, and $12$, and their cell counts are $3$, $5$, $5$, $4$, $3$, and $1$ — recall a sum $s$ fills $s - 1$ cells up to $7$ and $13 - s$ cells beyond it. Those add to $3 + 5 + 5 + 4 + 3 + 1 = 21$, so the probability is $\\frac{21}{36} = \\frac{7}{12}$ ✓. TREATING THE ELEVEN SUMS AS EQUALLY LIKELY gives $\\frac{6}{11}$, six composite values out of eleven ✗. ANSWERING THE COMPLEMENT gives $\\frac{15}{36} = \\frac{5}{12}$, the probability of a prime sum ✗. CALLING $9$ PRIME drops its $4$ cells and gives $\\frac{17}{36}$ ✗.',
    },
  ],

  // slot 9 — products and divisibility, where the needed prime factors are rare.
  //          Lanes: two dice, product a multiple of 5 -> 11/36; spinner 1-5 twice,
  //          product a multiple of 10 -> 4/25; derived: multiple of 12 -> 7/36.
  [
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the product of the two numbers showing is a multiple of $5$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{11}{36}$', '$\\frac{1}{6}$', '$\\frac{25}{36}$'],
      answer: 1,
      solution:
        'Among the faces $1$ through $6$, only the face $5$ carries a factor of $5$, so the product is a multiple of $5$ exactly when at least one die shows a $5$. Work with the complement inside the $36$-pair sample space: neither die is a $5$ in $5 \\times 5 = 25$ pairs, so $36 - 25 = 11$ pairs are favorable and the probability is $\\frac{11}{36}$ ✓. Counting the favorable pairs head-on agrees. The first die is a $5$ in $6$ pairs and the second die is a $5$ in $6$ pairs, and the single pair $(5,5)$ appears in both lists, so the total is $6 + 6 - 1 = 11$: $\\frac{11}{36}$ ✓. FORGETTING TO REMOVE THE OVERLAP gives $\\frac{6 + 6}{36} = \\frac{1}{3}$, counting $(5,5)$ twice ✗. LOOKING AT ONE DIE ONLY gives $\\frac{6}{36} = \\frac{1}{6}$, the probability that the first die is a $5$ ✗. ANSWERING THE COMPLEMENT gives $\\frac{25}{36}$, the probability that no $5$ appears at all ✗.',
    },
    {
      q: 'A spinner with $5$ equal sectors numbered $1$, $2$, $3$, $4$, $5$ is spun twice, the two spins independent. What is the probability that the product of the two spins is a multiple of $10$?',
      choices: ['$\\frac{9}{25}$', '$\\frac{2}{15}$', '$\\frac{2}{25}$', '$\\frac{4}{25}$'],
      answer: 3,
      solution:
        'A multiple of $10$ needs a factor of $5$ and a factor of $2$. Among $1$ through $5$ only the sector $5$ supplies the $5$, and $5$ is odd, so the other spin must be even — a $2$ or a $4$. Inside the $5 \\times 5 = 25$ ordered pairs that means one spin is the $5$ and the other is $2$ or $4$: $(5,2), (5,4), (2,5), (4,5)$, four pairs, so the probability is $\\frac{4}{25}$ ✓. Narrowing from the pairs containing a $5$ is a separate route. There are $5 + 5 - 1 = 9$ such pairs, and the ones that fail are those whose partner is odd: $(5,1), (1,5), (5,3), (3,5)$, and $(5,5)$ — five of them, with products $5$, $5$, $15$, $15$, and $25$. So $9 - 5 = 4$ pairs work and the probability is $\\frac{4}{25}$ ✓. FORGETTING THE FACTOR OF $2$ gives all $9$ pairs containing a $5$, $\\frac{9}{25}$ ✗. TREATING THE $15$ UNORDERED RESULTS AS EQUALLY LIKELY gives $\\frac{2}{15}$, counting $\\{2,5\\}$ and $\\{4,5\\}$ ✗. KEEPING ONLY THE PRODUCT $10$ gives $(2,5)$ and $(5,2)$, $\\frac{2}{25}$, and drops the product $20$ ✗.',
    },
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the product of the two numbers showing is a multiple of $12$?',
      choices: ['$\\frac{5}{12}$', '$\\frac{5}{36}$', '$\\frac{7}{36}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'A multiple of $12$ needs a factor of $3$ and a factor of $4$. The factor of $3$ can only come from a face showing $3$ or $6$, so split into cases inside the $36$ ordered pairs. If one die is a $3$, the other must supply the whole factor of $4$, so it is a $4$: that is $(3,4)$ and $(4,3)$. If one die is a $6$, it brings a $3$ and a $2$, so the other die need only be even: $(6,2), (2,6), (6,4), (4,6), (6,6)$. The two lists share no pair, since the first holds only $(3,4)$ and $(4,3)$ and neither of those shows a $6$, giving $2 + 5 = 7$ pairs and $\\frac{7}{36}$ ✓. Scanning the products themselves is an independent check: the multiples of $12$ reachable as a product of two faces are $12$, $24$, and $36$. Product $12$ comes from $(2,6), (6,2), (3,4), (4,3)$; product $24$ from $(4,6)$ and $(6,4)$; product $36$ only from $(6,6)$. That is $4 + 2 + 1 = 7$ pairs, so $\\frac{7}{36}$ ✓. ANSWERING "A MULTIPLE OF $6$" gives $\\frac{15}{36} = \\frac{5}{12}$ ✗. KEEPING ONLY THE ROLLS THAT CONTAIN A $6$ WITH AN EVEN PARTNER gives $\\frac{5}{36}$ and misses $(3,4)$ and $(4,3)$ ✗. DROPPING $(6,6)$, whose two dice match, leaves $\\frac{6}{36} = \\frac{1}{6}$ ✗.',
    },
  ],

  // slot 10 — sum against product; the criterion collapses to "is there a 1?".
  //           Lanes: spinner 1-4 twice, sum beats product -> 7/16; two distinct
  //           cards 1-6 -> 1/3; derived: two dice, product beats sum -> 2/3.
  [
    {
      q: 'A spinner with $4$ equal sectors numbered $1$, $2$, $3$, $4$ is spun twice, the two spins independent. What is the probability that the sum of the two spins is greater than their product?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{7}{16}$', '$\\frac{9}{16}$'],
      answer: 2,
      solution:
        'Call the spins $a$ and $b$. Then $a + b > ab$ rearranges to $ab - a - b + 1 < 1$, that is $(a-1)(b-1) < 1$; both factors are whole numbers that cannot be negative here, so their product is less than $1$ only when one of them is $0$ — in other words when $a = 1$ or $b = 1$. Inside the $4 \\times 4 = 16$ ordered pairs, the pairs with a $1$ number $4 + 4 - 1 = 7$, so the probability is $\\frac{7}{16}$ ✓. Sweeping the grid by rows confirms it without any algebra. Row $a = 1$ works throughout, since $1 + b > b$ for every $b$: $4$ pairs. Row $a = 2$ works only at $b = 1$, because $(2,2)$ gives $4$ and $4$, a tie, and $2 + b < 2b$ beyond that. Rows $a = 3$ and $a = 4$ likewise work only at $b = 1$. That is $4 + 1 + 1 + 1 = 7$ pairs and $\\frac{7}{16}$ ✓. COUNTING THE TIE $(2,2)$ AS A WIN gives $\\frac{8}{16} = \\frac{1}{2}$ ✗. KEEPING ONLY THE ROW WHERE THE FIRST SPIN IS A $1$ gives $\\frac{4}{16} = \\frac{1}{4}$ ✗. ANSWERING THE COMPLEMENT gives $\\frac{9}{16}$, the probability that the product is greater than or equal to the sum ✗.',
    },
    {
      q: 'Six cards numbered $1$ through $6$ sit in a box, and two different cards are drawn at the same time, every pair of cards equally likely. What is the probability that the sum of the two numbers is greater than their product?',
      choices: ['$\\frac{1}{3}$', '$\\frac{11}{36}$', '$\\frac{4}{15}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution:
        'The two cards come out together, so the equally likely outcomes are the $\\binom{6}{2} = 15$ unordered pairs, and the two numbers are always different. Divide $a + b > ab$ by $ab$: the condition says $\\frac{1}{a} + \\frac{1}{b} > 1$. If the smaller card is at least $2$, then the larger is at least $3$ and $\\frac{1}{a} + \\frac{1}{b} \\le \\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6} < 1$, so the smaller card must be the $1$. The pairs $\\{1,2\\}, \\{1,3\\}, \\{1,4\\}, \\{1,5\\}, \\{1,6\\}$ all work, five of the fifteen: $\\frac{5}{15} = \\frac{1}{3}$ ✓. A plain tabulation reaches the same total. Sums and products for the ten pairs without a $1$ read $\\{2,3\\}$: $5$ against $6$; $\\{2,4\\}$: $6$ against $8$; $\\{2,5\\}$: $7$ against $10$; $\\{2,6\\}$: $8$ against $12$; $\\{3,4\\}$: $7$ against $12$; and the rest are worse still — every one fails. The five pairs holding the $1$ all succeed, since $1 + b > b$. So $5$ of $15$: $\\frac{1}{3}$ ✓. TREATING THE DRAW AS TWO ORDERED DICE gives $\\frac{11}{36}$, which even allows a card to be drawn twice ✗. DROPPING $\\{1,6\\}$, whose sum $7$ only just beats its product $6$, leaves $\\frac{4}{15}$ ✗. ANSWERING THE COMPLEMENT gives $\\frac{10}{15} = \\frac{2}{3}$ ✗.',
    },
    {
      q: 'Two standard six-sided dice are rolled together, both fair and independent. What is the probability that the product of the two numbers showing is greater than their sum?',
      choices: ['$\\frac{11}{36}$', '$\\frac{25}{36}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
      answer: 3,
      solution:
        'Write the dice as $a$ and $b$. Since $ab - a - b + 1 = (a-1)(b-1)$, the product beats the sum exactly when $(a-1)(b-1) > 1$. Inside the $36$ ordered pairs this fails in two ways: when one die is a $1$, making the left side $0$ — there are $6 + 6 - 1 = 11$ such pairs — and when $(a-1)(b-1)$ equals exactly $1$, which needs $a = b = 2$, one more pair. So $36 - 12 = 24$ pairs are favorable and the probability is $\\frac{24}{36} = \\frac{2}{3}$ ✓. Sweeping the grid row by row counts them independently. Row $a = 1$ contributes nothing, since $1 + b$ always beats $b$. Row $a = 2$ works for $b = 3, 4, 5, 6$ but not for $b = 1$ or $b = 2$, where $(2,2)$ gives $4$ against $4$: $4$ pairs. Each of the rows $a = 3, 4, 5, 6$ works for every $b$ except $b = 1$: $5$ pairs apiece. The total is $0 + 4 + 4 \\cdot 5 = 24$, so $\\frac{24}{36} = \\frac{2}{3}$ ✓. ANSWERING THE OTHER DIRECTION gives $\\frac{11}{36}$, the probability that the sum beats the product ✗. COUNTING THE TIE $(2,2)$ AS A WIN gives $\\frac{25}{36}$ ✗. GUESSING THAT ONE OF THE TWO IS BIGGER HALF THE TIME gives $\\frac{1}{2}$ and ignores both the eleven rolls containing a $1$ and the tie ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 7,
  sections: { '7.3': s73 },
}
