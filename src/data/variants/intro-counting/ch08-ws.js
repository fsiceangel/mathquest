// Counting chapter 8 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    an exact reduced fraction such as '$\frac{7}{18}$'.
//  - Every key was brute-forced in node with exact rational arithmetic before
//    the stem was written: full enumeration of dice grids (six- and
//    eight-sided), coin and spinner sequences, ordered draws over labeled
//    items, unordered pairs, and integer ranges; the series were summed over
//    their complete stage trees (each tree checked to total exactly $1$), and
//    the shoot-until-miss sums were cross-checked against the tail identity
//    P(at least $k$ makes) $= p^k$. Every key matches its pin. Pin deviations:
//    none.
//  - This chapter is the four shortcuts — add, subtract from $1$, multiply
//    along a chain, adjust the chain when the pool shrinks — so every solution
//    runs two genuinely independent routes that each end ✓: one shortcut and
//    one grind (a full count of the sample space, a complement, a disjoint
//    case split, a block count, a geometric tail). Route two never re-imports
//    route one’s number. The solution then names the most tempting wrong
//    answer’s trap in CAPS, ending ✗, with the wrong value computed.
//  - Slot 4’s third variation is CONDITIONAL. Its solution enumerates the
//    conditioning event and the joint event separately and divides, and its
//    trap is the reversed conditional, stated in the direction it was checked.
//  - Conventions are settled in every stem: dice, coins, and spinners are fair
//    and independent, and two dice are distinguishable by color; draws say
//    with or without replacement and whether they come out one at a time or at
//    the same time; repeated trials are stated independent; every game says
//    exactly what ends it.

const worksheet = [
  // slot 1 — the addition rule with one overlapping outcome.
  //          Lanes: cards 1-18 mult 5 or >= 14 -> 7/18; tickets 1-24 mult 6 or
  //          ends in 2 -> 1/4; derived: the base overlap itself -> 1/16.
  [
    {
      q: 'Eighteen cards numbered $1$ through $18$ are shuffled, and one card is drawn at random, every card equally likely. What is the probability that the number drawn is a multiple of $5$ or is at least $14$?',
      answer: '$\\frac{7}{18}$',
      solution:
        'The multiples of $5$ are $5$, $10$, $15$ — three cards. The cards at least $14$ are $14$, $15$, $16$, $17$, $18$ — five cards. The card $15$ sits in both lists, so it is counted twice by the sum and must come back out once: $3 + 5 - 1 = 7$ favorable cards, and the probability is $\\frac{7}{18}$ ✓. Counting the cards that fail both tests gives the same answer without any subtraction: a card fails when it is below $14$ and not a multiple of $5$, which leaves $1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13$ — eleven cards. So $18 - 11 = 7$ cards succeed, again $\\frac{7}{18}$ ✓. ADDING THE TWO LIST SIZES WITHOUT REMOVING THE OVERLAP gives $\\frac{3 + 5}{18} = \\frac{8}{18} = \\frac{4}{9}$; that pays for card $15$ twice ✗.',
    },
    {
      q: 'A jar holds $24$ raffle tickets numbered $1$ through $24$, and one ticket is drawn at random, every ticket equally likely. What is the probability that the number drawn is a multiple of $6$ or ends in the digit $2$?',
      answer: '$\\frac{1}{4}$',
      solution:
        'The multiples of $6$ are $6$, $12$, $18$, $24$ — four tickets. The tickets ending in $2$ are $2$, $12$, $22$ — three tickets. Ticket $12$ is in both, so the union holds $4 + 3 - 1 = 6$ tickets, and the probability is $\\frac{6}{24} = \\frac{1}{4}$ ✓. Splitting into three groups that cannot overlap avoids the subtraction entirely: multiples of $6$ that do not end in $2$ are $6$, $18$, $24$ (three); numbers ending in $2$ that are not multiples of $6$ are $2$, $22$ (two); and the one ticket that is both is $12$. That is $3 + 2 + 1 = 6$ tickets, again $\\frac{6}{24} = \\frac{1}{4}$ ✓. ADDING $4 + 3 = 7$ gives $\\frac{7}{24}$; ticket $12$ cannot be drawn twice ✗.',
    },
    {
      q: 'Sixteen cards numbered $1$ through $16$ are shuffled, and one card is drawn at random, every card equally likely. What is the probability that the number drawn is a multiple of $3$ AND is at least $13$?',
      answer: '$\\frac{1}{16}$',
      solution:
        'Take the multiples of $3$ first: $3$, $6$, $9$, $12$, $15$. Of those five, only $15$ reaches $13$, so exactly one card of the sixteen does both, and the probability is $\\frac{1}{16}$ ✓. The addition rule, run backwards, gives the same count without inspecting that list: the union of the two events holds $8$ cards (the eight that fail are $1, 2, 4, 5, 7, 8, 10, 11$), the two events hold $5$ and $4$ cards on their own, and since $|A| + |B| - |A \\cap B| = |A \\cup B|$, the overlap is $5 + 4 - 8 = 1$ card, again $\\frac{1}{16}$ ✓. MULTIPLYING THE TWO PROBABILITIES gives $\\frac{5}{16} \\cdot \\frac{4}{16} = \\frac{5}{64}$; that would need the two conditions to be independent, but among the four cards at least $13$ exactly one is a multiple of $3$, a rate of $\\frac{1}{4}$ rather than $\\frac{5}{16}$ ✗.',
    },
  ],

  // slot 2 — dice products, ordered rolls.
  //          Lanes: two d6 product 6 or 16 -> 5/36; two d8 product 24 or 36 ->
  //          5/64; derived: two d6 product a multiple of 10 -> 1/6.
  [
    {
      q: 'Two standard six-sided dice, one red and one blue, are rolled. What is the probability that the product of the two numbers is $6$ or $16$?',
      answer: '$\\frac{5}{36}$',
      solution:
        'A product cannot be both $6$ and $16$, so the two cases add. Scanning the $36$ equally likely (red, blue) rolls, the product is $6$ for $(1,6)$, $(2,3)$, $(3,2)$, $(6,1)$ — four rolls — and $16$ for $(4,4)$ alone. That is $4 + 1 = 5$ rolls, so the probability is $\\frac{5}{36}$ ✓. Factoring instead of scanning agrees: $6 = 1 \\times 6 = 2 \\times 3$, two pairs of different faces, and each pair can be arranged on the red and blue dice in $2$ ways, giving $4$ rolls; $16 = 4 \\times 4$ is the only factorization with both factors at most $6$, and equal faces give just $1$ roll. Total $5$ of $36$ ✓. COUNTING UNORDERED PAIRS — $\\{1,6\\}$, $\\{2,3\\}$, $\\{4,4\\}$ — gives $\\frac{3}{36} = \\frac{1}{12}$; the dice are different colors, so $(1,6)$ and $(6,1)$ are two rolls, not one ✗.',
    },
    {
      q: 'Two fair eight-sided dice with faces numbered $1$ through $8$, one red and one blue, are rolled. What is the probability that the product of the two numbers is $24$ or $36$?',
      answer: '$\\frac{5}{64}$',
      solution:
        'The two products are different, so the cases add. Product $24$ comes from $(3,8)$, $(4,6)$, $(6,4)$, $(8,3)$ — four rolls, since $24 = 3 \\times 8 = 4 \\times 6$ and $2 \\times 12$ needs a face of $12$. Product $36$ comes only from $(6,6)$, since $36 = 4 \\times 9$ and $36 = 1 \\times 36$ both need a face above $8$. Five rolls of $64$, so $\\frac{5}{64}$ ✓. Sweeping the red die one face at a time confirms it: red $3$ works with blue $8$; red $4$ with blue $6$; red $6$ with blue $4$ (product $24$) and with blue $6$ (product $36$); red $8$ with blue $3$; and no other red face divides $24$ or $36$ into a number from $1$ to $8$. That is $1 + 1 + 2 + 1 = 5$ rolls of $64$ ✓. TREATING $(6,6)$ AS SWAPPABLE and counting it twice gives $\\frac{6}{64} = \\frac{3}{32}$; both dice show $6$, so there is only one such roll ✗.',
    },
    {
      q: 'Two standard six-sided dice, one red and one blue, are rolled. What is the probability that the product of the two numbers is a multiple of $10$?',
      answer: '$\\frac{1}{6}$',
      solution:
        'A multiple of $10$ needs a factor of $5$ and a factor of $2$. The only face carrying a $5$ is the face $5$, and two $5$s give $25$, so exactly one die must show $5$ and the other must be even. Choose which die shows the $5$ ($2$ ways) and which even face the other shows ($3$ ways): $2 \\times 3 = 6$ rolls of $36$, so $\\frac{6}{36} = \\frac{1}{6}$ ✓. Listing the grid outright agrees: the products divisible by $10$ come from $(2,5)$, $(4,5)$, $(5,2)$, $(5,4)$, $(5,6)$, $(6,5)$ — products $10$, $20$, $10$, $20$, $30$, $30$ — six rolls of $36$, again $\\frac{1}{6}$ ✓. READING "MULTIPLE OF $10$" AS "EXACTLY $10$" keeps only $(2,5)$ and $(5,2)$ and gives $\\frac{2}{36} = \\frac{1}{18}$; the products $20$ and $30$ are multiples of $10$ as well ✗.',
    },
  ],

  // slot 3 — at least one / exactly one over independent repeated trials.
  //          Lanes: 12 tokens twice with replacement -> 11/36; spinner 1-7
  //          thrice at least one prime -> 316/343; derived: base 9 tokens,
  //          exactly one multiple of 4 -> 28/81.
  [
    {
      q: 'A bag holds $12$ tokens numbered $1$ through $12$. A token is drawn at random, its number noted, and put back; then a token is drawn at random again, so the two draws are independent. What is the probability that at least one of the two draws shows a multiple of $5$?',
      answer: '$\\frac{11}{36}$',
      solution:
        'The multiples of $5$ in the bag are $5$ and $10$, so a single draw hits with probability $\\frac{2}{12} = \\frac{1}{6}$ and misses with probability $\\frac{5}{6}$. Because the token goes back, the draws are independent, so both miss with probability $\\frac{5}{6} \\cdot \\frac{5}{6} = \\frac{25}{36}$, and $P(\\text{at least one}) = 1 - \\frac{25}{36} = \\frac{11}{36}$ ✓. Adding the disjoint successes gives the same total without the complement: exactly one hit can come in $2$ orders, each of probability $\\frac{1}{6} \\cdot \\frac{5}{6} = \\frac{5}{36}$, for $\\frac{10}{36}$, and both hits contribute $\\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$; together $\\frac{10}{36} + \\frac{1}{36} = \\frac{11}{36}$ ✓. ADDING THE TWO DRAWS’ CHANCES gives $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3} = \\frac{12}{36}$; the two events overlap on the $\\frac{1}{36}$ where both draws hit, and adding counts that stretch twice ✗.',
    },
    {
      q: 'A spinner has $7$ equal sections numbered $1$ through $7$. It is spun three times, the spins independent. What is the probability that at least one spin lands on a prime number?',
      answer: '$\\frac{316}{343}$',
      solution:
        'The primes among $1$ through $7$ are $2$, $3$, $5$, $7$ — four sections — so a spin misses the primes with probability $\\frac{3}{7}$, landing on $1$, $4$, or $6$. All three spins miss with probability $\\left(\\frac{3}{7}\\right)^3 = \\frac{27}{343}$, so $P(\\text{at least one prime}) = 1 - \\frac{27}{343} = \\frac{316}{343}$ ✓. Counting sequences by how many primes appear agrees: exactly one prime, $3 \\cdot 4 \\cdot 3^2 = 108$ sequences; exactly two, $3 \\cdot 4^2 \\cdot 3 = 144$; all three, $4^3 = 64$. Those total $108 + 144 + 64 = 316$ of the $343$ equally likely sequences, again $\\frac{316}{343}$ ✓. COMPLEMENTING THE WRONG SIDE — computing $1 - \\left(\\frac{4}{7}\\right)^3 = \\frac{279}{343}$ — treats $\\left(\\frac{4}{7}\\right)^3$ as the event to subtract, but that is the chance all three spins are prime, not the chance none is ✗.',
    },
    {
      q: 'A bag holds $9$ tokens numbered $1$ through $9$. A token is drawn at random, its number noted, and put back; then a token is drawn at random again, so the two draws are independent. What is the probability that exactly one of the two draws shows a multiple of $4$?',
      answer: '$\\frac{28}{81}$',
      solution:
        'The multiples of $4$ in the bag are $4$ and $8$, so a draw hits with probability $\\frac{2}{9}$ and misses with probability $\\frac{7}{9}$. "Exactly one" splits into two disjoint orders: hit then miss, $\\frac{2}{9} \\cdot \\frac{7}{9} = \\frac{14}{81}$, and miss then hit, $\\frac{7}{9} \\cdot \\frac{2}{9} = \\frac{14}{81}$. Adding, $\\frac{28}{81}$ ✓. Peeling "exactly one" out of "at least one" gives the same value from different pieces: at least one hit has probability $1 - \\left(\\frac{7}{9}\\right)^2 = 1 - \\frac{49}{81} = \\frac{32}{81}$, and both hit with probability $\\left(\\frac{2}{9}\\right)^2 = \\frac{4}{81}$, so exactly one is $\\frac{32}{81} - \\frac{4}{81} = \\frac{28}{81}$ ✓. COUNTING ONLY THE HIT-THEN-MISS ORDER gives $\\frac{14}{81}$; the multiple of $4$ is just as likely to arrive on the second draw ✗.',
    },
  ],

  // slot 4 — exactly-k over independent trials; v3 is CONDITIONAL.
  //          Lanes: 7 coins exactly 3 heads -> 35/128; d4 five rolls exactly
  //          three 1s -> 45/512; derived conditional: 6 coins, given first is
  //          tails, exactly two heads -> 5/16 (joint 10, condition 32).
  [
    {
      q: 'Seven fair coins are flipped, the flips independent. What is the probability that exactly three of them show heads?',
      answer: '$\\frac{35}{128}$',
      solution:
        'All $2^7 = 128$ head-tail sequences are equally likely, and a sequence has exactly three heads when the three head positions are chosen from the seven slots: $\\binom{7}{3} = 35$ sequences. So the probability is $\\frac{35}{128}$ ✓. Splitting on the first coin builds the same count from six-coin counts instead of choosing positions: a seven-flip sequence with three heads either opens with heads, leaving two heads to place among the last six flips, or opens with tails, leaving all three among the last six. Six flips give $1, 6, 15, 20, 15, 6, 1$ sequences for $0$ through $6$ heads, so the two cases contribute $15$ and $20$ sequences, for $15 + 20 = 35$ out of $2 \\cdot 64 = 128$, again $\\frac{35}{128}$ ✓. READING "EXACTLY THREE" AS "AT LEAST THREE" counts the sequences with three, four, five, six, or seven heads — $35 + 35 + 21 + 7 + 1 = 99$ of them — for $\\frac{99}{128}$; the question fixes the head count, it does not set a floor ✗.',
    },
    {
      q: 'A fair four-sided die with faces numbered $1$ through $4$ is rolled $5$ times, the rolls independent. What is the probability that exactly three of the rolls show a $1$?',
      answer: '$\\frac{45}{512}$',
      solution:
        'Fix which three rolls are the $1$s — $\\binom{5}{3} = 10$ ways — and note that each such pattern has probability $\\left(\\frac{1}{4}\\right)^3 \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{1024}$, since the other two rolls must each avoid $1$. Multiplying, $10 \\cdot \\frac{9}{1024} = \\frac{90}{1024} = \\frac{45}{512}$ ✓. Counting the $4^5 = 1024$ equally likely roll strings agrees: the number of strings with exactly $k$ ones is $\\binom{5}{k} 3^{5-k}$, giving $243, 405, 270, 90, 15, 1$ for $k = 0$ through $5$, which sum to $1024$; the $k = 3$ entry is $90$, so the probability is $\\frac{90}{1024} = \\frac{45}{512}$ ✓. FORGETTING THAT THE OTHER TWO ROLLS MUST AVOID $1$ gives $10 \\cdot \\left(\\frac{1}{4}\\right)^3 = \\frac{10}{64} = \\frac{5}{32}$; that count sweeps in strings such as $1, 1, 1, 1, 4$, which show four $1$s ✗.',
    },
    {
      q: 'A fair coin is flipped $6$ times, the flips independent. Given that the first flip shows tails, what is the probability that exactly two of the six flips show heads?',
      answer: '$\\frac{5}{16}$',
      solution:
        'A conditional probability is the joint event divided by the conditioning event, so list both separately over the $64$ equally likely six-flip sequences. The conditioning event is "the first flip is tails": the remaining five flips are unrestricted, so it holds $2^5 = 32$ sequences. The joint event is "the first flip is tails AND exactly two of the six are heads": the first flip has used up a tail, so both heads sit among the last five flips, which happens in $\\binom{5}{2} = 10$ sequences. Dividing, $\\frac{10/64}{32/64} = \\frac{10}{32} = \\frac{5}{16}$ ✓. A second route reaches the value without ever forming the joint event, by trimming the unconditional count instead: exactly two heads happens in $\\binom{6}{2} = 15$ of the $64$ sequences, and the ones that open with heads need exactly one more head among the last five flips, which is $5$ sequences. The other $15 - 5 = 10$ open with tails, and they sit inside the $2^6 \\div 2 = 32$ sequences that open with tails, giving $\\frac{10}{32} = \\frac{5}{16}$ ✓. TURNING THE CONDITION AROUND — computing $P(\\text{the first flip is tails} \\mid \\text{exactly two heads})$ — gives a different answer: of the $\\binom{6}{2} = 15$ sequences with exactly two heads, $10$ begin with tails, for $\\frac{10}{15} = \\frac{2}{3}$. That answers which flip started a known two-head sequence, not what the six flips do once the first is known ✗.',
    },
  ],

  // slot 5 — dependent draws, two out of a small pool.
  //          Lanes: 11 markers (3 green) both green -> 3/55; 10 players (3
  //          captains) both captains -> 1/15; derived: base 7B 2R, exactly one
  //          red -> 7/18.
  [
    {
      q: 'A case holds $11$ markers: $8$ black and $3$ green. Two markers are taken out at random, one after the other, without replacement. What is the probability that both are green?',
      answer: '$\\frac{3}{55}$',
      solution:
        'The first marker is green with probability $\\frac{3}{11}$. That marker does not go back, so only $2$ green markers remain among the $10$ left, and the second is green with probability $\\frac{2}{10}$. Multiplying along the chain, $\\frac{3}{11} \\cdot \\frac{2}{10} = \\frac{6}{110} = \\frac{3}{55}$ ✓. Ignoring order and counting pairs gives the same answer: every pair of markers is equally likely to be the pair removed, there are $\\binom{11}{2} = 55$ pairs, and $\\binom{3}{2} = 3$ of them use two green markers, so $\\frac{3}{55}$ ✓. ADDING THE TWO STAGES gives $\\frac{3}{11} + \\frac{2}{10} = \\frac{26}{55}$; a chain of stages that must all happen is multiplied, and adding is for outcomes that cannot happen together ✗.',
    },
    {
      q: 'A team of $10$ players includes $3$ captains. Two of the players are chosen at random at the same time, every pair of players equally likely, to speak at the assembly. What is the probability that both chosen players are captains?',
      answer: '$\\frac{1}{15}$',
      solution:
        'Every pair is equally likely, so count pairs: there are $\\binom{10}{2} = 45$ pairs of players in all and $\\binom{3}{2} = 3$ pairs made of two captains, giving $\\frac{3}{45} = \\frac{1}{15}$ ✓. Choosing the two one after the other reaches the same pairs and confirms it: the first player picked is a captain with probability $\\frac{3}{10}$, and then $2$ captains remain among the $9$ players left, probability $\\frac{2}{9}$, so $\\frac{3}{10} \\cdot \\frac{2}{9} = \\frac{6}{90} = \\frac{1}{15}$ ✓. TREATING THE TWO CHOICES AS INDEPENDENT gives $\\left(\\frac{3}{10}\\right)^2 = \\frac{9}{100}$; once one captain is on the pair, only $2$ captains are left among $9$ players, so the second chance is $\\frac{2}{9}$, not $\\frac{3}{10}$ ✗.',
    },
    {
      q: 'A pencil case holds $7$ blue pens and $2$ red pens. Two pens are taken out at random, one after the other, without replacement. What is the probability that exactly one of the two pens is red?',
      answer: '$\\frac{7}{18}$',
      solution:
        'Two disjoint orders give exactly one red pen. Red then blue: $\\frac{2}{9} \\cdot \\frac{7}{8} = \\frac{14}{72}$. Blue then red: $\\frac{7}{9} \\cdot \\frac{2}{8} = \\frac{14}{72}$. Adding, $\\frac{28}{72} = \\frac{7}{18}$ ✓. Counting unordered pairs agrees: every pair of pens is equally likely to come out, there are $\\binom{9}{2} = 36$ pairs, and a mixed pair is one of the $2$ red pens together with one of the $7$ blue pens, $2 \\cdot 7 = 14$ pairs. So $\\frac{14}{36} = \\frac{7}{18}$ ✓. COUNTING ONLY THE RED-THEN-BLUE ORDER gives $\\frac{14}{72} = \\frac{7}{36}$; the red pen is equally likely to be the second pen out ✗.',
    },
  ],

  // slot 6 — all-different and exactly-two-distinct over independent picks.
  //          Lanes: WXYZ spinner 4 spins all different -> 3/32; 3 people, 5
  //          sports, all different -> 12/25; derived: base ABC spinner, three
  //          spins, conditional on the letter A appearing -> 6/19.
  [
    {
      q: 'A spinner has $4$ equal sections labeled W, X, Y, and Z. It is spun $4$ times, the spins independent. What is the probability that the four spins show four different letters?',
      answer: '$\\frac{3}{32}$',
      solution:
        'The first spin can be anything. The second must avoid the one letter already seen, probability $\\frac{3}{4}$; the third must avoid two letters, $\\frac{2}{4}$; the fourth must avoid three, $\\frac{1}{4}$. Multiplying along the chain, $1 \\cdot \\frac{3}{4} \\cdot \\frac{2}{4} \\cdot \\frac{1}{4} = \\frac{6}{64} = \\frac{3}{32}$ ✓. Counting sequences agrees: there are $4^4 = 256$ equally likely sequences of spins, and four different letters means the four spins are an arrangement of W, X, Y, Z, which happens in $4! = 24$ ways. So $\\frac{24}{256} = \\frac{3}{32}$ ✓. ASKING ONLY THAT NO SPIN MATCH THE ONE JUST BEFORE IT gives $\\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64}$; that weaker demand lets through W, X, W, X, which repeats letters ✗.',
    },
    {
      q: 'Three people each independently pick one of $5$ sports at random, every sport equally likely, and they do not consult one another. What is the probability that they pick three different sports?',
      answer: '$\\frac{12}{25}$',
      solution:
        'There are $5^3 = 125$ equally likely ordered triples of picks. Three different sports means the first person has $5$ choices, the second $4$, the third $3$: $5 \\cdot 4 \\cdot 3 = 60$ triples, so the probability is $\\frac{60}{125} = \\frac{12}{25}$ ✓. Running the chain of conditions gives the same value from probabilities rather than counts: the first pick is free, the second must dodge one sport, probability $\\frac{4}{5}$, and the third must dodge two, probability $\\frac{3}{5}$, so $\\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{12}{25}$ ✓. COUNTING UNORDERED TRIOS OF SPORTS gives $\\frac{\\binom{5}{3}}{125} = \\frac{10}{125} = \\frac{2}{25}$; the three people are different, so one trio of sports arrives in $3! = 6$ distinct outcomes ✗.',
    },
    {
      q: 'A spinner has $3$ equal sections labeled A, B, and C. It is spun exactly $3$ times, the spins independent, and all three results are recorded no matter what appears. Given that the letter A appears on at least one of the three spins, what is the probability that the three spins show three different letters?',
      answer: '$\\frac{6}{19}$',
      solution:
        'A conditional probability is the joint event divided by the conditioning event, so count the two separately over the $3^3 = 27$ equally likely ordered triples of spins. The conditioning event, which goes underneath, is "A appears on at least one spin"; its complement is the triples built from B and C alone, and there are $2^3 = 8$ of those, leaving $27 - 8 = 19$. The joint event, which goes on top, is "A appears AND the three spins show three different letters"; three different letters from three sections means the triple is an arrangement of A, B, C, so A is already aboard and the joint event holds all $3! = 6$ of those triples. Dividing, $\\frac{6/27}{19/27} = \\frac{6}{19}$ ✓. Note the other direction is a different question with a different value: $P(\\text{A appears} \\mid \\text{three different letters}) = 1$, since every all-different triple contains an A. A second route never builds that list of $27$, sorting the spins by how many of them land on A instead. The number of A’s is $0$ with probability $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$, $1$ with probability $3 \\cdot \\frac{1}{3} \\cdot \\left(\\frac{2}{3}\\right)^2 = \\frac{12}{27}$, $2$ with probability $3 \\cdot \\left(\\frac{1}{3}\\right)^2 \\cdot \\frac{2}{3} = \\frac{6}{27}$, and $3$ with probability $\\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27}$; the four branches total $\\frac{8 + 12 + 6 + 1}{27} = 1$, so nothing has been missed. At least one A is the last three branches, $\\frac{12 + 6 + 1}{27} = \\frac{19}{27}$. Three different letters can live only on the exactly-one-A branch, and there the two non-A spins are each B or C in $4$ equally likely ways, of which the $2$ using one of each are what is wanted: $\\frac{12}{27} \\cdot \\frac{2}{4} = \\frac{6}{27}$. The ratio of the two is $\\frac{6}{19}$ ✓. REPORTING THE JOINT PROBABILITY WITHOUT DIVIDING gives $\\frac{6}{27} = \\frac{2}{9}$; that is the chance of three different letters before anything is known, and the news about A throws out the $8$ triples made only of B and C, so the $6$ good triples are measured against $19$ triples, not $27$ ✗.',
    },
  ],

  // slot 7 — divisibility unions over an integer range.
  //          Lanes: 1-84 by 6 or 14 -> 3/14; 1-100 by 8 or 12 -> 4/25;
  //          derived: base 1-90 by 4 but not by 15 -> 7/30.
  [
    {
      q: 'An integer is chosen at random from $1$ through $84$, every integer equally likely. What is the probability that it is divisible by $6$ or by $14$?',
      answer: '$\\frac{3}{14}$',
      solution:
        'There are $\\frac{84}{6} = 14$ multiples of $6$ and $\\frac{84}{14} = 6$ multiples of $14$. An integer is in both lists exactly when it is a multiple of $\\text{lcm}(6, 14) = 42$, and there are $\\frac{84}{42} = 2$ of those, namely $42$ and $84$. So the union holds $14 + 6 - 2 = 18$ integers, and the probability is $\\frac{18}{84} = \\frac{3}{14}$ ✓. Listing the union outright agrees: $6, 12, 14, 18, 24, 28, 30, 36, 42, 48, 54, 56, 60, 66, 70, 72, 78, 84$ — eighteen integers, so $\\frac{18}{84} = \\frac{3}{14}$ ✓. ADDING THE TWO LISTS WITHOUT REMOVING THE OVERLAP gives $\\frac{14 + 6}{84} = \\frac{20}{84} = \\frac{5}{21}$; $42$ and $84$ appear on both lists and would each be paid for twice ✗.',
    },
    {
      q: 'The $100$ seats in a hall are numbered $1$ through $100$, and one seat is drawn at random, every seat equally likely. What is the probability that its number is divisible by $8$ or by $12$?',
      answer: '$\\frac{4}{25}$',
      solution:
        'Multiples of $8$ up to $100$: $8, 16, \\ldots, 96$, which is $12$ seats. Multiples of $12$: $12, 24, \\ldots, 96$, which is $8$ seats. Both at once means a multiple of $\\text{lcm}(8, 12) = 24$: $24, 48, 72, 96$, four seats. The union holds $12 + 8 - 4 = 16$ seats, so the probability is $\\frac{16}{100} = \\frac{4}{25}$ ✓. Building the union by hand agrees: start with the twelve multiples of $8$, then add only the multiples of $12$ not already there — $12$, $36$, $60$, $84$, since $24$, $48$, $72$, $96$ are already listed — for $12 + 4 = 16$ seats, again $\\frac{16}{100} = \\frac{4}{25}$ ✓. USING $8 \\cdot 12 = 96$ AS THE OVERLAP subtracts only the seat $96$ and gives $\\frac{12 + 8 - 1}{100} = \\frac{19}{100}$; the numbers divisible by both are the multiples of the least common multiple $24$, so $24$, $48$, and $72$ would still be double-counted ✗.',
    },
    {
      q: 'An integer is chosen at random from $1$ through $90$, every integer equally likely. What is the probability that it is divisible by $4$ but NOT by $15$?',
      answer: '$\\frac{7}{30}$',
      solution:
        'The multiples of $4$ up to $90$ run $4, 8, \\ldots, 88$, which is $22$ integers. Of those, the ones also divisible by $15$ are the multiples of $\\text{lcm}(4, 15) = 60$, and only $60$ itself is at most $90$. Removing it leaves $22 - 1 = 21$ integers, so the probability is $\\frac{21}{90} = \\frac{7}{30}$ ✓. Counting in two blocks confirms the $21$ without the subtraction: in $1$ through $60$ there are $15$ multiples of $4$, exactly one of which ($60$) is divisible by $15$, leaving $14$; in $61$ through $90$ the multiples of $4$ are $64, 68, 72, 76, 80, 84, 88$ — seven, none of them divisible by $15$. That is $14 + 7 = 21$ integers, again $\\frac{21}{90} = \\frac{7}{30}$ ✓. FORGETTING TO REMOVE $60$ gives $\\frac{22}{90} = \\frac{11}{45}$; the word NOT rules that one integer out ✗.',
    },
  ],

  // slot 8 — position symmetry in a shuffle vs. path sums.
  //          Lanes: 7G 3W third marble white -> 3/10; 11 cards, 4 starred,
  //          fourth is starred -> 4/11; derived: base 4R 2B, red then blue ->
  //          4/15.
  [
    {
      q: 'A bag holds $7$ green and $3$ white marbles. Three marbles are drawn at random one at a time without replacement. What is the probability that the THIRD marble drawn is white?',
      answer: '$\\frac{3}{10}$',
      solution:
        'Drawing without replacement puts the marbles into a random order, and before anyone looks, each of the $10$ marbles is equally likely to be the one sitting in the third spot. Three of the ten marbles are white, so the probability is $\\frac{3}{10}$ ✓. Summing over what the first two marbles do gives the same total the long way. White, white, white: $\\frac{3}{10} \\cdot \\frac{2}{9} \\cdot \\frac{1}{8} = \\frac{6}{720}$. Exactly one white among the first two, in either order: $\\frac{3}{10} \\cdot \\frac{7}{9} \\cdot \\frac{2}{8} = \\frac{42}{720}$ and $\\frac{7}{10} \\cdot \\frac{3}{9} \\cdot \\frac{2}{8} = \\frac{42}{720}$. No white among the first two: $\\frac{7}{10} \\cdot \\frac{6}{9} \\cdot \\frac{3}{8} = \\frac{126}{720}$. Adding, $\\frac{6 + 42 + 42 + 126}{720} = \\frac{216}{720} = \\frac{3}{10}$ ✓. DEMANDING THAT THE FIRST TWO MARBLES BE GREEN gives $\\frac{7}{10} \\cdot \\frac{6}{9} \\cdot \\frac{3}{8} = \\frac{7}{40}$; the question says nothing about the first two marbles, and that path is only one of the four ✗.',
    },
    {
      q: 'Eleven cards, exactly $4$ of them starred, are shuffled and dealt one at a time at random without replacement. What is the probability that the FOURTH card dealt is starred?',
      answer: '$\\frac{4}{11}$',
      solution:
        'A shuffle makes every order of the $11$ cards equally likely, so each card is equally likely to land in any particular position; in particular, each of the $11$ cards has the same chance of being the fourth card dealt. Four of the cards are starred, so the probability is $\\frac{4}{11}$ ✓. Counting the ways the first four cards can come out agrees: there are $11 \\cdot 10 \\cdot 9 \\cdot 8 = 7920$ equally likely ordered choices for the first four cards, and a favorable one picks a starred card for the fourth slot ($4$ ways) and then fills the first three slots from the remaining $10$ cards ($10 \\cdot 9 \\cdot 8 = 720$ ways), for $4 \\cdot 720 = 2880$. So $\\frac{2880}{7920} = \\frac{4}{11}$ ✓. DEMANDING THAT THE FIRST THREE CARDS BE UNSTARRED gives $\\frac{7}{11} \\cdot \\frac{6}{10} \\cdot \\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{7}{66}$; the first three cards may be anything at all ✗.',
    },
    {
      q: 'A bag holds $4$ red and $2$ blue marbles. Two marbles are drawn at random one at a time without replacement. What is the probability that the first marble is red AND the second is blue?',
      answer: '$\\frac{4}{15}$',
      solution:
        'The first marble is red with probability $\\frac{4}{6}$. It stays out, leaving $5$ marbles of which $2$ are blue, so the second is blue with probability $\\frac{2}{5}$. Multiplying along the chain, $\\frac{4}{6} \\cdot \\frac{2}{5} = \\frac{8}{30} = \\frac{4}{15}$ ✓. Counting ordered pairs of marbles agrees: there are $6 \\cdot 5 = 30$ equally likely ways to draw a first and then a second marble, and a favorable one takes any of the $4$ red marbles first and any of the $2$ blue marbles second, $4 \\cdot 2 = 8$ ways. So $\\frac{8}{30} = \\frac{4}{15}$ ✓. TREATING THE DRAWS AS INDEPENDENT, as though the first marble went back, gives $\\frac{4}{6} \\cdot \\frac{2}{6} = \\frac{2}{9}$; the bag holds $5$ marbles for the second draw, not $6$ ✗.',
    },
  ],

  // slot 9 — first-to-two series, complete stage tree.
  //          Lanes: Wolves 3/5, lasts 3 -> 12/25; Nan 1/5, needs a third game
  //          -> 8/25; derived: base Jets 3/4, the OPPONENT wins -> 5/32.
  [
    {
      q: 'Two teams play a series that ends as soon as one team has won $2$ games. No game can be tied, and the Wolves win each game with probability $\\frac{3}{5}$, independently of the other games. What is the probability that the series lasts $3$ games?',
      answer: '$\\frac{12}{25}$',
      solution:
        'A third game is played exactly when the first two games are split, since a sweep ends the series at $2$ games. Wolves then opponent: $\\frac{3}{5} \\cdot \\frac{2}{5} = \\frac{6}{25}$. Opponent then Wolves: $\\frac{2}{5} \\cdot \\frac{3}{5} = \\frac{6}{25}$. The two paths are disjoint, so add: $\\frac{12}{25}$ ✓. Working from the other end gives the same number: the series stops after $2$ games exactly when one team wins both, which is $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{2}{5}\\right)^2 = \\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25}$, so a third game is needed with probability $1 - \\frac{13}{25} = \\frac{12}{25}$ ✓. COUNTING ONLY ONE SPLIT ORDER gives $\\frac{6}{25}$; the opponent can just as well take game $1$ and lose game $2$ ✗.',
    },
    {
      q: 'Nan and Osk play a chess match that ends as soon as one of them has won $2$ games. There are no draws, and Nan wins each game with probability $\\frac{1}{5}$, independently of the other games. What is the probability that the match needs a third game?',
      answer: '$\\frac{8}{25}$',
      solution:
        'The match reaches game $3$ exactly when the players split the first two. Nan then Osk: $\\frac{1}{5} \\cdot \\frac{4}{5} = \\frac{4}{25}$. Osk then Nan: $\\frac{4}{5} \\cdot \\frac{1}{5} = \\frac{4}{25}$. Adding the two disjoint paths, $\\frac{8}{25}$ ✓. Subtracting the sweeps confirms it: the match ends in two games when one player wins both, which is $\\left(\\frac{1}{5}\\right)^2 = \\frac{1}{25}$ for Nan and $\\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25}$ for Osk, totaling $\\frac{17}{25}$; the rest of the time a third game is needed, $1 - \\frac{17}{25} = \\frac{8}{25}$ ✓. SUBTRACTING ONLY THE FAVORITE’S SWEEP gives $1 - \\frac{16}{25} = \\frac{9}{25}$; Nan can sweep as well, and her $\\frac{1}{25}$ also ends the match in two ✗.',
    },
    {
      q: 'Two teams play a series that ends as soon as one team has won $2$ games. No game can be tied, and the Jets win each game with probability $\\frac{3}{4}$, independently of the other games. What is the probability that the Jets’ OPPONENT wins the series?',
      answer: '$\\frac{5}{32}$',
      solution:
        'The opponent wins each game with probability $\\frac{1}{4}$. List the paths that end with the opponent holding $2$ wins. A sweep: $\\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{4}{64}$. Lose game $1$, then win games $2$ and $3$: $\\frac{3}{4} \\cdot \\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{3}{64}$. Win game $1$, lose game $2$, win game $3$: $\\frac{1}{4} \\cdot \\frac{3}{4} \\cdot \\frac{1}{4} = \\frac{3}{64}$. Those three paths are disjoint: $\\frac{4 + 3 + 3}{64} = \\frac{10}{64} = \\frac{5}{32}$ ✓. Pricing the Jets instead and subtracting agrees: the Jets sweep with probability $\\left(\\frac{3}{4}\\right)^2 = \\frac{36}{64}$, and they win in three by taking exactly one of the first two games and then game $3$, which is $2 \\cdot \\frac{3}{4} \\cdot \\frac{1}{4} \\cdot \\frac{3}{4} = \\frac{18}{64}$; that is $\\frac{54}{64} = \\frac{27}{32}$, so the opponent wins with probability $1 - \\frac{27}{32} = \\frac{5}{32}$ ✓. COUNTING ONLY THE OPPONENT’S SWEEP gives $\\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16} = \\frac{2}{32}$; the opponent can drop a game and still take the series in three ✗.',
    },
  ],

  // slot 10 — shoot until the first failure; tails cross-check P(>= k) = p^k.
  //          Lanes: Nia 4/5, 3 to 5 baskets -> 3904/15625; parts 3/5, 3 to 5
  //          pass -> 2646/15625; derived: base Star 3/4, at least 5 baskets ->
  //          243/1024.
  [
    {
      q: 'Nia makes each free throw with probability $\\frac{4}{5}$, her shots independent. She shoots until she misses, and then she stops. What is the probability that she makes at least $3$ but fewer than $6$ baskets?',
      answer: '$\\frac{3904}{15625}$',
      solution:
        'The basket count must be $3$, $4$, or $5$, and each of those is one path: that many makes in a row, then the miss that stops her. Exactly $3$: $\\left(\\frac{4}{5}\\right)^3 \\cdot \\frac{1}{5} = \\frac{64}{625} = \\frac{1600}{15625}$. Exactly $4$: $\\left(\\frac{4}{5}\\right)^4 \\cdot \\frac{1}{5} = \\frac{256}{3125} = \\frac{1280}{15625}$. Exactly $5$: $\\left(\\frac{4}{5}\\right)^5 \\cdot \\frac{1}{5} = \\frac{1024}{15625}$. The paths are disjoint, so add: $\\frac{1600 + 1280 + 1024}{15625} = \\frac{3904}{15625}$ ✓. Differencing two tails avoids the three paths entirely: she makes at least $k$ baskets exactly when her first $k$ shots all go in, whatever follows, so $P(\\text{at least } k) = \\left(\\frac{4}{5}\\right)^k$. Then $P(3 \\le \\text{baskets} \\le 5) = \\left(\\frac{4}{5}\\right)^3 - \\left(\\frac{4}{5}\\right)^6 = \\frac{8000}{15625} - \\frac{4096}{15625} = \\frac{3904}{15625}$ ✓. DROPPING THE MISS THAT ENDS THE RUN gives $\\left(\\frac{4}{5}\\right)^3 + \\left(\\frac{4}{5}\\right)^4 + \\left(\\frac{4}{5}\\right)^5 = \\frac{3904}{3125}$, which is greater than $1$ and so cannot be a probability; each path needs its final $\\frac{1}{5}$ ✗.',
    },
    {
      q: 'A machine stamps parts one at a time; each part passes inspection with probability $\\frac{3}{5}$, independently of the others, and the run stops at the first part that fails. What is the probability that exactly $3$, $4$, or $5$ parts pass?',
      answer: '$\\frac{2646}{15625}$',
      solution:
        'Each count of passes is a single path: that many passes in a row, then the failure that stops the run. Exactly $3$: $\\left(\\frac{3}{5}\\right)^3 \\cdot \\frac{2}{5} = \\frac{54}{625} = \\frac{1350}{15625}$. Exactly $4$: $\\left(\\frac{3}{5}\\right)^4 \\cdot \\frac{2}{5} = \\frac{162}{3125} = \\frac{810}{15625}$. Exactly $5$: $\\left(\\frac{3}{5}\\right)^5 \\cdot \\frac{2}{5} = \\frac{486}{15625}$. Adding the disjoint paths, $\\frac{1350 + 810 + 486}{15625} = \\frac{2646}{15625}$ ✓. Two tails give the same value without listing paths: at least $k$ parts pass exactly when the first $k$ parts all pass, so $P(\\text{at least } k) = \\left(\\frac{3}{5}\\right)^k$, and the answer is $\\left(\\frac{3}{5}\\right)^3 - \\left(\\frac{3}{5}\\right)^6 = \\frac{3375}{15625} - \\frac{729}{15625} = \\frac{2646}{15625}$ ✓. COUNTING PARTS INSPECTED INSTEAD OF PARTS THAT PASS gives $\\frac{882}{3125}$; a run of $3$, $4$, or $5$ inspected parts holds only $2$, $3$, or $4$ passes, because the last part inspected is the one that failed ✗.',
    },
    {
      q: 'Star makes each free throw with probability $\\frac{3}{4}$, her shots independent. She shoots until she misses, and then she stops. What is the probability that she makes AT LEAST $5$ baskets?',
      answer: '$\\frac{243}{1024}$',
      solution:
        'She reaches $5$ baskets exactly when her first five shots all go in — once that happens she has at least $5$ baskets no matter what the sixth shot does, and if any of the first five misses she stops below $5$. So the probability is $\\left(\\frac{3}{4}\\right)^5 = \\frac{243}{1024}$ ✓. Summing the paths one basket count at a time reaches the same value: making exactly $k$ baskets has probability $\\left(\\frac{3}{4}\\right)^k \\cdot \\frac{1}{4}$, so the answer is $\\frac{1}{4}\\left[\\left(\\frac{3}{4}\\right)^5 + \\left(\\frac{3}{4}\\right)^6 + \\cdots\\right]$, a geometric series with first term $\\frac{1}{4}\\left(\\frac{3}{4}\\right)^5$ and ratio $\\frac{3}{4}$. Its sum is $\\frac{\\frac{1}{4}\\left(\\frac{3}{4}\\right)^5}{1 - \\frac{3}{4}} = \\left(\\frac{3}{4}\\right)^5 = \\frac{243}{1024}$ ✓. READING "AT LEAST $5$" AS "EXACTLY $5$" gives $\\left(\\frac{3}{4}\\right)^5 \\cdot \\frac{1}{4} = \\frac{243}{4096}$; that insists the sixth shot miss, when the question lets her keep shooting ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 8,
  worksheet,
}
