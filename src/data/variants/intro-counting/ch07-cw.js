// Counting chapter 7 — variations for the challenge set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Challenge items are multiple choice: a question, four `choices`, an
//    `answer` INDEX, and a solution. The index is derived from the base
//    problem’s index b, never chosen: v1 = (b+1)%4, v2 = (b+3)%4,
//    v3 = (b+2)%4. Base indices: 1 0 3 2 0 1 3 2 1 0 2 1.
//  - Every key was brute-forced in node before the stem was written: full
//    enumeration of the sample space in each case — dice and spinner grids,
//    unordered card and marble draws, complete permutation lists for the
//    digit-arrangement items, divisor and common-factor scans over the stated
//    integer ranges, and full committee and couple-subset enumerations. Every
//    key matches its pin. Pin deviations: none.
//  - Every distractor is a real slip whose value was computed in node, so each
//    attribution is arithmetically true, not a guess.
//  - This is the chapter where probability is introduced, so every solution
//    stays inside the chapter’s tools: name the equally likely outcomes, count
//    the favorable ones, reduce. Each solution runs two genuinely independent
//    routes that each end ✓ — a direct count and a complement, casework and a
//    formula, a symmetry shortcut and a raw count, a list and a modular
//    argument. Route two never re-imports route one’s number. Each wrong
//    choice’s trap is then named in CAPS, ending ✗.
//  - Challenge variations stay as hard as the base problems they replace.
//  - Conventions are settled in every stem: dice are fair and standard unless
//    the stem says otherwise; dice, coins, and spins are independent; spinner
//    sectors are equal and every label is given; cards or marbles drawn “at the
//    same time” form an unordered set with every set equally likely; people and
//    cards are all different; “at least”, “exactly”, and “at most” are spelled
//    out.

// Slot 5 keeps a spinner in every variation. Uniform scale, sectors drawn to
// size, labels on the sectors — never on the quantity being asked.
const spinner6a = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.5, -0.866] },
    { t: 'seg', a: [0, 0], b: [0.5, -0.866] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0, 0.65], text: '1' },
    { t: 'label', p: [0.56, 0.33], text: '3' },
    { t: 'label', p: [0.56, -0.33], text: '2' },
    { t: 'label', p: [0, -0.65], text: '1' },
    { t: 'label', p: [-0.56, -0.33], text: '2' },
    { t: 'label', p: [-0.56, 0.33], text: '4' },
  ],
}

const spinner8 = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0.924, 0.383] },
    { t: 'seg', a: [0, 0], b: [0.383, 0.924] },
    { t: 'seg', a: [0, 0], b: [-0.383, 0.924] },
    { t: 'seg', a: [0, 0], b: [-0.924, 0.383] },
    { t: 'seg', a: [0, 0], b: [-0.924, -0.383] },
    { t: 'seg', a: [0, 0], b: [-0.383, -0.924] },
    { t: 'seg', a: [0, 0], b: [0.383, -0.924] },
    { t: 'seg', a: [0, 0], b: [0.924, -0.383] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0, 0.62], text: 'R' },
    { t: 'label', p: [0.438, 0.438], text: 'B' },
    { t: 'label', p: [0.62, 0], text: 'R' },
    { t: 'label', p: [0.438, -0.438], text: 'G' },
    { t: 'label', p: [0, -0.62], text: 'B' },
    { t: 'label', p: [-0.438, -0.438], text: 'R' },
    { t: 'label', p: [-0.62, 0], text: 'G' },
    { t: 'label', p: [-0.438, 0.438], text: 'B' },
  ],
}

const spinner6base = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.5, -0.866] },
    { t: 'seg', a: [0, 0], b: [0.5, -0.866] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.56, 0.33], text: '1' },
    { t: 'label', p: [0, 0.65], text: '2' },
    { t: 'label', p: [-0.56, 0.33], text: '2' },
    { t: 'label', p: [-0.56, -0.33], text: '1' },
    { t: 'label', p: [0, -0.65], text: '3' },
    { t: 'label', p: [0.56, -0.33], text: '2' },
  ],
}

const challenge = [
  // slot 1 — three named parts of one collection, two shares given (counts vs.
  //          the leftover share). Lanes: 60 fruit -> 21 plums; 45 spinner
  //          sectors in a 2:1 ratio -> 9 bronze; reversed: 18 known marbles are
  //          three fifths of the bag -> 30 marbles.
  [
    {
      q: 'A basket holds $60$ pieces of fruit, each one an apple, a pear, or a plum. One piece is taken out at random, every piece equally likely. The probability that it is an apple is $\\frac{2}{5}$, and the probability that it is a pear is $\\frac{1}{4}$. How many plums are in the basket?',
      choices: ['$15$', '$24$', '$21$', '$36$'],
      answer: 2,
      solution:
        'Turn each share into a count. Apples are $\\frac{2}{5}$ of $60$, which is $24$, and pears are $\\frac{1}{4}$ of $60$, which is $15$. Every piece is exactly one of the three kinds, so the plums are what is left: $60 - 24 - 15 = 21$ ✓. Working in shares instead never touches those counts. The three probabilities add to $1$, so the plum share is $1 - \\frac{2}{5} - \\frac{1}{4} = \\frac{20}{20} - \\frac{8}{20} - \\frac{5}{20} = \\frac{7}{20}$, and $\\frac{7}{20}$ of $60$ is $21$ ✓. READING OFF $24$ hands back the apple count ✗. READING OFF $15$ hands back the pear count ✗. SUBTRACTING ONLY THE APPLES, $60 - 24 = 36$, leaves the pears sitting in with the plums ✗.',
    },
    {
      q: 'A spinner has $45$ equal sectors, each one colored gold, silver, or bronze. One spin lands on gold with probability $\\frac{2}{5}$, and the spinner has exactly twice as many silver sectors as bronze sectors. How many bronze sectors does the spinner have?',
      choices: ['$9$', '$15$', '$18$', '$27$'],
      answer: 0,
      solution:
        'Every sector is equally likely, so the gold share is the gold count over $45$: gold $= \\frac{2}{5} \\cdot 45 = 18$ sectors. That leaves $45 - 18 = 27$ sectors to split between silver and bronze in the ratio $2 : 1$, which makes bronze one third of the $27$: $9$ ✓. An equation in the bronze count agrees. Let $b$ be the bronze count; then silver is $2b$ and gold is $45 - 3b$, so $\\frac{45 - 3b}{45} = \\frac{2}{5}$, giving $45 - 3b = 18$ and $b = 9$ ✓. SPLITTING ALL $45$ SECTORS in the ratio $2 : 1$ gives $15$ and forgets that the gold sectors are not part of that split ✗. READING OFF $18$ hands back the gold count, which is also the silver count, not the bronze one ✗. READING OFF $27$ hands back every sector that is not gold ✗.',
    },
    {
      q: 'A bag holds red, white, and blue marbles only: $8$ red, $10$ white, and some blue. One marble is drawn at random, every marble equally likely, and the probability that it is blue is $\\frac{2}{5}$. How many marbles are in the bag altogether?',
      choices: ['$12$', '$18$', '$45$', '$30$'],
      answer: 3,
      solution:
        'Work with the marbles you can count. The non-blue marbles are the $8$ red and the $10$ white, $18$ of them, and since the blue share is $\\frac{2}{5}$, the non-blue share is $\\frac{3}{5}$. So $\\frac{3}{5}$ of the bag is $18$ marbles, and the bag holds $18 \\cdot \\frac{5}{3} = 30$ ✓. Solving for the blue count instead agrees. Let $b$ be the number of blue marbles; the bag holds $18 + b$ marbles, so $\\frac{b}{18 + b} = \\frac{2}{5}$ gives $5b = 36 + 2b$, then $3b = 36$ and $b = 12$, for a bag of $18 + 12 = 30$ ✓. READING OFF $12$ hands back the blue count instead of the whole bag ✗. READING OFF $18$ hands back only the marbles you were told about ✗. TREATING THE $18$ KNOWN MARBLES AS THE TWO FIFTHS gives $18 \\cdot \\frac{5}{2} = 45$, attaching the fraction to the wrong color ✗.',
    },
  ],

  // slot 2 — a fixed difference between two numbers (ordered grid vs. row-by-row
  //          count vs. unordered pairs). Lanes: two d8 differ by 3; two of nine
  //          cards differ by 2; derived: two dice differ by at most 1.
  [
    {
      q: 'Two fair eight-sided dice, each with faces numbered $1$ through $8$, are rolled, the two rolls independent. What is the probability that the two numbers showing differ by exactly $3$?',
      choices: ['$\\frac{5}{64}$', '$\\frac{5}{32}$', '$\\frac{5}{28}$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        'The equally likely outcomes are the $8 \\times 8 = 64$ ordered pairs. List the pairs whose smaller number comes first: $(1,4), (2,5), (3,6), (4,7), (5,8)$ — five of them — and each one can also happen the other way round, so $10$ ordered pairs work: $\\frac{10}{64} = \\frac{5}{32}$ ✓. Counting row by row agrees. If the first die shows $d$, the second must show $d - 3$ or $d + 3$, and only the values in $1$ through $8$ count: $d = 1, 2, 3$ each allow one partner, $d = 4$ and $d = 5$ each allow two, and $d = 6, 7, 8$ each allow one. That is $1 + 1 + 1 + 2 + 2 + 1 + 1 + 1 = 10$ ordered pairs out of $64$, or $\\frac{5}{32}$ ✓. KEEPING ONLY $\\frac{5}{64}$ counts the five smaller-first pairs and forgets that each can happen in reverse ✗. DIVIDING BY $8 \\times 7 = 56$ gives $\\frac{10}{56} = \\frac{5}{28}$ and pretends the two dice cannot show the same number ✗. TREATING THE EIGHT POSSIBLE DIFFERENCES $0$ through $7$ as equally likely gives $\\frac{1}{8}$, but a difference of $0$ has eight ordered pairs and a difference of $7$ has only two ✗.',
    },
    {
      q: 'Two different cards are drawn at the same time from cards numbered $1$ through $9$, every pair of cards equally likely. What is the probability that the two numbers differ by exactly $2$?',
      choices: ['$\\frac{7}{72}$', '$\\frac{14}{81}$', '$\\frac{5}{12}$', '$\\frac{7}{36}$'],
      answer: 3,
      solution:
        'The equally likely outcomes are the $\\binom{9}{2} = 36$ unordered pairs. A pair differing by $2$ is pinned down by its smaller card, which can be $1, 2, 3, 4, 5, 6$, or $7$: the pairs $\\{1,3\\}, \\{2,4\\}, \\{3,5\\}, \\{4,6\\}, \\{5,7\\}, \\{6,8\\}, \\{7,9\\}$, seven of them. So the probability is $\\frac{7}{36}$ ✓. Choosing a different sample space agrees. Imagine drawing the cards one after the other, giving $9 \\times 8 = 72$ equally likely ordered draws; a difference of $2$ happens in $14$ of them, since each of the seven pairs shows up in two orders. The probability is $\\frac{14}{72} = \\frac{7}{36}$ ✓. MIXING THE TWO SAMPLE SPACES gives $\\frac{7}{72}$, seven unordered pairs over seventy-two ordered draws ✗. USING $9^2 = 81$ gives $\\frac{14}{81}$ and lets the same card be drawn twice, which the simultaneous draw forbids ✗. ANSWERING “DIFFER BY AT MOST $2$” adds the eight pairs differing by $1$ for $\\frac{15}{36} = \\frac{5}{12}$ ✗.',
    },
    {
      q: 'Two standard dice are rolled, the two rolls independent. What is the probability that the two numbers showing differ by at most $1$?',
      choices: ['$\\frac{5}{18}$', '$\\frac{11}{21}$', '$\\frac{4}{9}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'Split the event by the difference. A difference of $0$ is one of the six doubles $(1,1)$ through $(6,6)$. A difference of $1$ is $(1,2), (2,3), (3,4), (4,5), (5,6)$ and their five reverses, $10$ ordered pairs. That is $6 + 10 = 16$ of the $36$ equally likely ordered pairs: $\\frac{16}{36} = \\frac{4}{9}$ ✓. Counting row by row agrees. If the first die shows $1$, the second may show $1$ or $2$; if it shows $6$, the second may show $5$ or $6$; and for each of $2, 3, 4, 5$ there are three allowed values. That is $2 + 3 + 3 + 3 + 3 + 2 = 16$ ordered pairs out of $36$, or $\\frac{4}{9}$ ✓. KEEPING ONLY THE DIFFERENCE OF $1$ gives $\\frac{10}{36} = \\frac{5}{18}$ and drops the six doubles ✗. KEEPING ONLY THE DOUBLES gives $\\frac{6}{36} = \\frac{1}{6}$ ✗. TREATING THE ROLL AS AN UNORDERED PAIR gives $11$ favorable out of $21$, but those $21$ outcomes are not equally likely — a double happens half as often as a mixed pair ✗.',
    },
  ],

  // slot 3 — common factors with a fixed number over an integer range
  //          (inclusion-exclusion vs. a block count or a totient count).
  //          Lanes: 1-70 coprime to 15; 1-84 sharing a factor with 84;
  //          derived: 1-40 divisible by 2 or 3.
  [
    {
      q: 'An integer is chosen at random from $1$ to $70$, inclusive, every integer equally likely. What is the probability that it has no common factor greater than $1$ with $15$?',
      choices: ['$\\frac{37}{70}$', '$\\frac{33}{70}$', '$\\frac{18}{35}$', '$\\frac{33}{35}$'],
      answer: 0,
      solution:
        'Since $15 = 3 \\cdot 5$, sharing a factor greater than $1$ with $15$ means being a multiple of $3$ or of $5$. From $1$ to $70$ there are $23$ multiples of $3$, $14$ multiples of $5$, and $4$ multiples of $15$ counted in both, so $23 + 14 - 4 = 33$ integers share a factor. The rest, $70 - 33 = 37$, do not: $\\frac{37}{70}$ ✓. Counting in blocks agrees and never uses that $33$. In any run of $15$ consecutive integers exactly $8$ are free of the factors $3$ and $5$ — the residues $1, 2, 4, 7, 8, 11, 13, 14$ — so the four full blocks $1$–$60$ contribute $4 \\cdot 8 = 32$. Among $61$–$70$ the survivors are $61, 62, 64, 67, 68$, five more, for $32 + 5 = 37$ out of $70$ ✓. READING OFF $\\frac{33}{70}$ answers the opposite question, the chance the number DOES share a factor with $15$ ✗. THROWING OUT $1$ gives $\\frac{36}{70} = \\frac{18}{35}$, but $1$ shares no factor greater than $1$ with anything ✗. READING “COMMON FACTOR” AS “MULTIPLE” removes only the four multiples of $15$ for $\\frac{66}{70} = \\frac{33}{35}$ ✗.',
    },
    {
      q: 'A raffle drum holds tickets numbered $1$ through $84$, and one ticket is drawn at random, every ticket equally likely. What is the probability that the number on it shares a common factor greater than $1$ with $84$?',
      choices: ['$\\frac{2}{7}$', '$\\frac{2}{3}$', '$\\frac{5}{7}$', '$\\frac{41}{42}$'],
      answer: 2,
      solution:
        'Since $84 = 2^2 \\cdot 3 \\cdot 7$, a ticket shares a factor greater than $1$ with $84$ exactly when it is a multiple of $2$, of $3$, or of $7$. From $1$ to $84$ those counts are $42$, $28$, and $12$; the overlaps are $14$ multiples of $6$, $6$ multiples of $14$, and $4$ multiples of $21$; and $2$ tickets are multiples of $42$. Inclusion and exclusion give $42 + 28 + 12 - 14 - 6 - 4 + 2 = 60$ tickets, so the probability is $\\frac{60}{84} = \\frac{5}{7}$ ✓. Counting the survivors instead agrees. A ticket shares nothing with $84$ when it avoids $2$, $3$, and $7$; among $84$ consecutive integers the share that survives is $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{6}{7} = \\frac{2}{7}$, which is $84 \\cdot \\frac{2}{7} = 24$ tickets. The answer is therefore $1 - \\frac{24}{84} = \\frac{5}{7}$ ✓. READING OFF $\\frac{2}{7}$ answers with the tickets that share NOTHING with $84$ ✗. USING ONLY $2$ AND $3$ counts $56$ tickets for $\\frac{2}{3}$ and forgets the factor $7$ ✗. ADDING $42 + 28 + 12$ WITH NO CORRECTION gives $\\frac{82}{84} = \\frac{41}{42}$, counting the multiples of $6$, $14$, $21$, and $42$ more than once ✗.',
    },
    {
      q: 'An integer is chosen at random from $1$ to $40$, inclusive, every integer equally likely. What is the probability that it is divisible by $2$ or by $3$, or by both?',
      choices: ['$\\frac{33}{40}$', '$\\frac{27}{40}$', '$\\frac{21}{40}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'From $1$ to $40$ there are $20$ multiples of $2$ and $13$ multiples of $3$, and the $6$ multiples of $6$ appear on both lists. Inclusion and exclusion give $20 + 13 - 6 = 27$ integers, so the probability is $\\frac{27}{40}$ ✓. Counting the failures agrees and never uses that $27$. An integer is divisible by neither $2$ nor $3$ exactly when it leaves a remainder of $1$ or $5$ on division by $6$: those are $1, 7, 13, 19, 25, 31, 37$ and $5, 11, 17, 23, 29, 35$, thirteen numbers. So $40 - 13 = 27$ integers work, and the probability is $\\frac{27}{40}$ ✓. ADDING $20 + 13$ WITH NO CORRECTION gives $\\frac{33}{40}$ and counts the six multiples of $6$ twice ✗. COUNTING ONLY THE NUMBERS DIVISIBLE BY EXACTLY ONE of $2$ and $3$ gives $\\frac{21}{40}$ and throws out the multiples of $6$, which the word “both” keeps in ✗. KEEPING ONLY THE MULTIPLES OF $2$ gives $\\frac{20}{40} = \\frac{1}{2}$ ✗.',
    },
  ],

  // slot 4 — alternating runs (listing the pinned sequences vs. multiplying the
  //          per-gap chances vs. first-match casework). Lanes: 5 coin flips
  //          alternate; 4 spins of an ABC spinner with no repeat; derived: 4
  //          flips with some repeat.
  [
    {
      q: 'A fair coin is flipped $5$ times, the flips independent. What is the probability that the results alternate, with no two consecutive flips showing the same face?',
      choices: ['$\\frac{1}{32}$', '$\\frac{5}{8}$', '$\\frac{1}{8}$', '$\\frac{1}{16}$'],
      answer: 3,
      solution:
        'There are $2^5 = 32$ equally likely sequences of five flips. An alternating sequence is completely fixed by its first flip, since every later flip must be the opposite of the one before it: HTHTH and THTHT, and nothing else. So $2$ of the $32$ sequences work: $\\frac{2}{32} = \\frac{1}{16}$ ✓. Multiplying chances agrees without listing anything. The first flip is free. Each of the four flips after it must differ from its predecessor, which happens with probability $\\frac{1}{2}$, and the flips are independent, so the probability is $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$ ✓. KEEPING ONLY ONE ALTERNATING SEQUENCE gives $\\frac{1}{32}$ ✗. IMPOSING ONLY THREE “MUST DIFFER” STEPS gives $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$; five flips have four gaps between neighbors, not three ✗. READING “ALTERNATE” AS “AS EVEN A SPLIT AS POSSIBLE” counts the $10 + 10 = 20$ sequences with two or three heads for $\\frac{20}{32} = \\frac{5}{8}$ ✗.',
    },
    {
      q: 'A spinner with $3$ equal sectors labeled A, B, C is spun $4$ times, the spins independent. What is the probability that no two consecutive spins show the same letter?',
      choices: ['$\\frac{16}{27}$', '$\\frac{8}{27}$', '$\\frac{2}{3}$', '$\\frac{19}{27}$'],
      answer: 1,
      solution:
        'There are $3^4 = 81$ equally likely sequences of four spins. Build a good sequence left to right: the first spin is any of the $3$ letters, and each of the next three spins must avoid whatever came just before it, leaving $2$ letters each time. That is $3 \\cdot 2 \\cdot 2 \\cdot 2 = 24$ sequences, so the probability is $\\frac{24}{81} = \\frac{8}{27}$ ✓. Multiplying chances agrees without counting sequences. Whatever the first spin shows, the second differs from it with probability $\\frac{2}{3}$, and the same holds for the third against the second and the fourth against the third, independently: $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$ ✓. USING $3 \\cdot 2^4 = 48$ gives $\\frac{48}{81} = \\frac{16}{27}$ and uses one factor of $2$ too many — four spins leave only three gaps to constrain ✗. CONSTRAINING ONLY THE LAST SPIN gives $\\frac{2 \\cdot 3^3}{81} = \\frac{2}{3}$ ✗. READING OFF $\\frac{57}{81} = \\frac{19}{27}$ answers the opposite question, the chance that SOME two consecutive spins match ✗.',
    },
    {
      q: 'A fair coin is flipped $4$ times, the flips independent. What is the probability that some two consecutive flips show the same face?',
      choices: ['$\\frac{7}{8}$', '$\\frac{15}{16}$', '$\\frac{3}{4}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'It is easier to count the sequences with no repeat. Of the $2^4 = 16$ equally likely sequences, the alternating ones are HTHT and THTH, since the first flip fixes the rest. So $16 - 2 = 14$ sequences have some two neighbors alike: $\\frac{14}{16} = \\frac{7}{8}$ ✓. Counting the good sequences directly agrees. Sort them by where the FIRST matching pair sits. If flips $1$ and $2$ match, the last two flips are free: $2 \\cdot 1 \\cdot 2 \\cdot 2 = 8$ sequences. If the first match is flips $2$ and $3$, then flips $1$ and $2$ differ and flip $4$ is free: $2 \\cdot 1 \\cdot 1 \\cdot 2 = 4$. If the first match is flips $3$ and $4$, the earlier two gaps both differ: $2 \\cdot 1 \\cdot 1 \\cdot 1 = 2$. That is $8 + 4 + 2 = 14$ of $16$, or $\\frac{7}{8}$ ✓. READING OFF $\\frac{1}{8}$ answers the opposite question, the chance the flips ALTERNATE ✗. SUBTRACTING ONLY ONE ALTERNATING SEQUENCE gives $\\frac{15}{16}$ ✗. ANSWERING FOR THREE FLIPS gives $\\frac{8 - 2}{8} = \\frac{3}{4}$ ✗.',
    },
  ],

  // slot 5 — an unequally weighted spinner spun twice (sector grid vs. a
  //          complement count or exact sector probabilities). Every variation
  //          keeps a figure. Lanes: 6 sectors 1,3,2,1,2,4 summing to 5; 8
  //          sectors in three colors matching; derived: the base spinner
  //          matching.
  [
    {
      q: 'The spinner shown has $6$ equal sectors; reading clockwise from the top, the labels are $1$, $3$, $2$, $1$, $2$, $4$, so two sectors show $1$, two show $2$, one shows $3$, and one shows $4$. The spinner is spun twice, the two spins independent. What is the probability that the two spins add up to $5$?',
      fig: spinner6a,
      choices: ['$\\frac{1}{9}$', '$\\frac{2}{9}$', '$\\frac{1}{4}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution:
        'The labels are not equally likely, so work with sectors: the $6 \\times 6 = 36$ ordered pairs of sectors are equally likely. A sum of $5$ comes from $1 + 4$, $4 + 1$, $2 + 3$, or $3 + 2$. There are two sectors showing $1$ and one showing $4$, so $1 + 4$ is $2 \\cdot 1 = 2$ pairs and $4 + 1$ is another $2$; likewise $2 + 3$ is $2 \\cdot 1 = 2$ pairs and $3 + 2$ is $2$. That is $8$ pairs: $\\frac{8}{36} = \\frac{2}{9}$ ✓. Working with the label probabilities agrees. One spin shows $1$ with probability $\\frac{2}{6} = \\frac{1}{3}$, shows $2$ with probability $\\frac{1}{3}$, and shows $3$ or $4$ each with probability $\\frac{1}{6}$. The spins are independent, so the chance of a sum of $5$ is $2 \\cdot \\frac{1}{3} \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{3} \\cdot \\frac{1}{6} = \\frac{2}{18} + \\frac{2}{18} = \\frac{2}{9}$ ✓. COUNTING EACH COMBINATION IN ONE ORDER ONLY gives $\\frac{4}{36} = \\frac{1}{9}$ ✗. TREATING THE FOUR LABELS AS EQUALLY LIKELY finds $4$ of $16$ for $\\frac{1}{4}$, which would need one sector per label ✗. ADDING THE SECTOR COUNTS instead of multiplying them gives $(2 + 1) + (2 + 1) = 6$ and $\\frac{6}{36} = \\frac{1}{6}$ ✗.',
    },
    {
      q: 'The spinner shown has $8$ equal sectors, each colored red, blue, or green and marked R, B, or G; reading clockwise from the top the sectors are red, blue, red, green, blue, red, green, blue, so three are red, three are blue, and two are green. The spinner is spun twice, the two spins independent. What is the probability that the two spins land on the same color?',
      fig: spinner8,
      choices: ['$\\frac{1}{3}$', '$\\frac{9}{32}$', '$\\frac{21}{32}$', '$\\frac{11}{32}$'],
      answer: 3,
      solution:
        'The colors are not equally likely, so work with sectors: the $8 \\times 8 = 64$ ordered pairs of sectors are equally likely. Two reds can happen in $3 \\cdot 3 = 9$ ways, two blues in $3 \\cdot 3 = 9$ ways, and two greens in $2 \\cdot 2 = 4$ ways, for $9 + 9 + 4 = 22$ pairs: $\\frac{22}{64} = \\frac{11}{32}$ ✓. Counting the mismatches agrees. A red with a blue happens in $3 \\cdot 3 = 9$ ways with red first and $9$ with blue first, $18$ pairs; a red with a green in $3 \\cdot 2 = 6$ ways each way round, $12$ pairs; a blue with a green likewise $12$ pairs. That is $18 + 12 + 12 = 42$ mismatched pairs, so $64 - 42 = 22$ pairs match and the probability is $\\frac{22}{64} = \\frac{11}{32}$ ✓. TREATING THE THREE COLORS AS EQUALLY LIKELY gives $\\frac{1}{3}$, which would need the same number of sectors in each color ✗. FORGETTING THE GREEN MATCHES gives $\\frac{18}{64} = \\frac{9}{32}$ ✗. READING OFF $\\frac{42}{64} = \\frac{21}{32}$ answers the opposite question, the chance of two DIFFERENT colors ✗.',
    },
    {
      q: 'The spinner shown has $6$ equal sectors labeled with the numbers $1$, $2$, and $3$: two sectors show $1$, three show $2$, and one shows $3$. The spinner is spun twice, the two spins independent. What is the probability that the two spins show the same number?',
      fig: spinner6base,
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{7}{18}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'Work with sectors, since the labels are not equally likely: the $6 \\times 6 = 36$ ordered pairs of sectors are equally likely. Both spins show $1$ in $2 \\cdot 2 = 4$ ways, both show $2$ in $3 \\cdot 3 = 9$ ways, and both show $3$ in $1 \\cdot 1 = 1$ way, for $4 + 9 + 1 = 14$ pairs: $\\frac{14}{36} = \\frac{7}{18}$ ✓. Counting the mismatches agrees. A $1$ with a $2$ happens in $2 \\cdot 3 = 6$ ways each way round, $12$ pairs; a $1$ with a $3$ in $2 \\cdot 1 = 2$ ways each way round, $4$ pairs; a $2$ with a $3$ in $3 \\cdot 1 = 3$ ways each way round, $6$ pairs. That is $12 + 4 + 6 = 22$ mismatched pairs, leaving $36 - 22 = 14$ matches and $\\frac{7}{18}$ ✓. TREATING THE THREE LABELS AS EQUALLY LIKELY gives $3$ of $9$ for $\\frac{1}{3}$ ✗. KEEPING ONLY THE PAIRS OF TWOS gives $\\frac{9}{36} = \\frac{1}{4}$ ✗. ADDING THE SECTOR COUNTS $2 + 3 + 1$ instead of squaring each gives $\\frac{6}{36} = \\frac{1}{6}$ ✗.',
    },
  ],

  // slot 6 — parity of a product of two different numbers (complement vs. direct
  //          casework vs. an ordered sample space). Lanes: 1-8 even product;
  //          1-12 odd product; reversed: solve for n from an odd-product chance.
  [
    {
      q: 'Two different whole numbers are chosen at random from $1$ through $8$, every pair equally likely. What is the probability that their product is even?',
      choices: ['$\\frac{3}{14}$', '$\\frac{3}{4}$', '$\\frac{11}{14}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'There are $\\binom{8}{2} = 28$ equally likely pairs. A product is odd only when both factors are odd, and $1, 3, 5, 7$ give $\\binom{4}{2} = 6$ such pairs. Every other pair has an even product: $28 - 6 = 22$, so the probability is $\\frac{22}{28} = \\frac{11}{14}$ ✓. Counting the even products directly agrees. Either exactly one number is even, $4 \\cdot 4 = 16$ pairs, or both are, $\\binom{4}{2} = 6$ pairs, and those cases do not overlap: $16 + 6 = 22$ pairs out of $28$, or $\\frac{11}{14}$ ✓. READING OFF $\\frac{6}{28} = \\frac{3}{14}$ answers the opposite question, the chance of an ODD product ✗. USING $8 \\times 8 = 64$ ORDERED CHOICES gives $\\frac{48}{64} = \\frac{3}{4}$ and lets the same number be picked twice, which “two different numbers” forbids ✗. GUESSING $\\frac{1}{2}$ assumes odd and even products are equally common, but an odd product needs both factors odd, which is the rarer demand ✗.',
    },
    {
      q: 'Two different cards are drawn at the same time from cards numbered $1$ through $12$, every pair of cards equally likely. What is the probability that the product of the two numbers is odd?',
      choices: ['$\\frac{5}{22}$', '$\\frac{1}{4}$', '$\\frac{17}{22}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'There are $\\binom{12}{2} = 66$ equally likely pairs. A product is odd exactly when both cards are odd, and the odd cards are $1, 3, 5, 7, 9, 11$, six of them, giving $\\binom{6}{2} = 15$ pairs. The probability is $\\frac{15}{66} = \\frac{5}{22}$ ✓. A different sample space agrees. Draw the two cards one after the other, giving $12 \\cdot 11 = 132$ equally likely ordered draws; both cards are odd in $6 \\cdot 5 = 30$ of them, so the probability is $\\frac{30}{132} = \\frac{5}{22}$ ✓. USING $12^2 = 144$ gives $\\frac{36}{144} = \\frac{1}{4}$ and allows the same card twice, which a simultaneous draw forbids ✗. READING OFF $\\frac{51}{66} = \\frac{17}{22}$ answers the opposite question, the chance of an EVEN product ✗. GUESSING $\\frac{1}{2}$ treats odd and even products as equally common, when an odd product needs both cards odd ✗.',
    },
    {
      q: 'Two different whole numbers are chosen at random from $1$ through $n$, every pair equally likely, and the probability that their product is odd is exactly $\\frac{3}{14}$. What is $n$?',
      choices: ['$4$', '$7$', '$21$', '$8$'],
      answer: 3,
      solution:
        'A product is odd exactly when both numbers are odd, so the probability is $\\frac{\\binom{m}{2}}{\\binom{n}{2}}$, where $m$ is how many of $1$ through $n$ are odd. If $n = 2m$ is even, that ratio is $\\frac{m(m-1)/2}{2m(2m-1)/2} = \\frac{m-1}{2(2m-1)}$, and setting it equal to $\\frac{3}{14}$ gives $14(m-1) = 6(2m-1)$, so $14m - 14 = 12m - 6$, $m = 4$, and $n = 8$. If $n = 2m - 1$ is odd, the ratio is $\\frac{m(m-1)/2}{(2m-1)(2m-2)/2} = \\frac{m}{2(2m-1)}$, and $14m = 12m - 6$ has no positive solution. So $n = 8$ ✓. Scanning the values agrees and shows the answer is the only one. For even $n$ the probability climbs steadily: $n = 4$ gives $\\frac{1}{6}$, $n = 6$ gives $\\frac{1}{5}$, $n = 8$ gives $\\frac{6}{28} = \\frac{3}{14}$, $n = 10$ gives $\\frac{2}{9}$, $n = 12$ gives $\\frac{5}{22}$, all rising toward $\\frac{1}{4}$. For odd $n$ it falls toward $\\frac{1}{4}$ from above — $\\frac{1}{3}$, $\\frac{3}{10}$, $\\frac{2}{7}$, $\\frac{5}{18}$ — and so never dips to $\\frac{3}{14}$. Only $n = 8$ lands on it ✓. HANDING BACK $4$ reports $m$, the count of odd numbers found along the way, instead of $n$ ✗. COUNTING $0$ THROUGH $n$ instead of $1$ through $n$ makes $n = 7$ fit: among $0, 1, \\dots, 7$ four are odd and $\\frac{\\binom{4}{2}}{\\binom{8}{2}} = \\frac{6}{28} = \\frac{3}{14}$ ✗. COUNTING THE ODD NUMBERS AS $\\left\\lfloor \\frac{n}{2} \\right\\rfloor$ makes $n = 21$ fit, since that miscount gives $\\frac{\\binom{10}{2}}{\\binom{21}{2}} = \\frac{45}{210} = \\frac{3}{14}$, but $1$ through $21$ holds $11$ odd numbers, not $10$ ✗.',
    },
  ],

  // slot 7 — two named people at a round table or bracelet (fix one and count
  //          the seats left vs. count whole seatings or position pairs). Lanes:
  //          10 seats, neither adjacent nor across; 12 bead circle, opposite;
  //          derived: the base 6 seats, adjacent or across.
  [
    {
      q: 'Ten people, including Ana and Ben, sit at random around a round table with $10$ evenly spaced seats, every seating equally likely. What is the probability that Ben sits neither next to Ana nor directly across the table from her?',
      choices: ['$\\frac{2}{3}$', '$\\frac{7}{9}$', '$\\frac{8}{9}$', '$\\frac{3}{5}$'],
      answer: 0,
      solution:
        'Let Ana sit wherever she sits; the other eight people have no bearing on the question. Ben is then equally likely to take any of the $9$ remaining seats. Two of them are the seats beside Ana and one is the seat directly across from her, so $9 - 3 = 6$ seats are allowed: $\\frac{6}{9} = \\frac{2}{3}$ ✓. Counting whole seatings agrees. All $10! $ seatings are equally likely. Sort them by where Ana and Ben sit: Ana has $10$ choices, Ben has $9$, and the remaining eight people fill in $8!$ ways, so $10 \\cdot 9 \\cdot 8! = 90 \\cdot 8!$ seatings in all. The bad ones put Ben in one of the $3$ forbidden seats: $10 \\cdot 3 \\cdot 8! = 30 \\cdot 8!$. The good seatings number $90 \\cdot 8! - 30 \\cdot 8! = 60 \\cdot 8!$, and $\\frac{60}{90} = \\frac{2}{3}$ ✓. REMOVING ONLY THE TWO NEIGHBORING SEATS gives $\\frac{7}{9}$ ✗. REMOVING ONLY THE SEAT ACROSS gives $\\frac{8}{9}$ ✗. DIVIDING BY ALL $10$ SEATS gives $\\frac{6}{10} = \\frac{3}{5}$ and counts the seat Ana is already sitting in as a place Ben could go ✗.',
    },
    {
      q: 'Twelve beads, including one amber bead and one jade bead, are strung at random into a circular bracelet with $12$ evenly spaced positions, every arrangement equally likely. What is the probability that the amber and jade beads end up directly opposite each other?',
      choices: ['$\\frac{1}{12}$', '$\\frac{2}{11}$', '$\\frac{1}{11}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'Let the amber bead land wherever it lands; the ten plain beads have no bearing on the question. The jade bead is then equally likely to take any of the $11$ positions still open, and exactly one of those is the position directly opposite the amber bead: $\\frac{1}{11}$ ✓. Counting position pairs agrees. The two special beads occupy an unordered pair of positions, and all $\\binom{12}{2} = 66$ pairs are equally likely. Each position has exactly one opposite, so the opposite pairs number $\\frac{12}{2} = 6$. The probability is $\\frac{6}{66} = \\frac{1}{11}$ ✓. DIVIDING BY ALL $12$ POSITIONS gives $\\frac{1}{12}$ and counts the position the amber bead already fills ✗. READING OFF $\\frac{2}{11}$ answers a different question, the chance the two beads are NEXT TO each other, since two of the eleven open positions are neighbors ✗. MAKING BOTH SLIPS AT ONCE gives $\\frac{2}{12} = \\frac{1}{6}$ ✗.',
    },
    {
      q: 'Six people, including Ana and Ben, sit at random around a round table with $6$ evenly spaced seats, every seating equally likely. What is the probability that Ben sits next to Ana or directly across the table from her?',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'Let Ana sit wherever she sits; the other four people have no bearing on the question. Ben is equally likely to take any of the $5$ remaining seats, and $3$ of them count: the two beside Ana and the one directly across from her. That gives $\\frac{3}{5}$ ✓. A raw count of every seating agrees. All $6! = 720$ seatings are equally likely. Ana can sit in any of the $6$ seats, Ben in any of the $3$ that qualify, and the other four people fill the remaining chairs in $4! = 24$ ways: $6 \\cdot 3 \\cdot 24 = 432$ seatings. The probability is $\\frac{432}{720} = \\frac{3}{5}$ ✓. KEEPING ONLY THE TWO NEIGHBORING SEATS gives $\\frac{2}{5}$ ✗. KEEPING ONLY THE SEAT ACROSS gives $\\frac{1}{5}$ ✗. DIVIDING BY ALL $6$ SEATS gives $\\frac{3}{6} = \\frac{1}{2}$ and counts Ana’s own seat as somewhere Ben could sit ✗.',
    },
  ],

  // slot 8 — divisibility of a number made from distinct digit cards (the
  //          last-digits rule with a listed ending set vs. a modular argument).
  //          Lanes: five cards 3,4,5,7,8 divisible by 4; three of 1,2,4,5,8
  //          divisible by 4; derived: digits 1-6 divisible by 8.
  [
    {
      q: 'Five cards showing the digits $3$, $4$, $5$, $7$, $8$ are laid in a row in random order, each card used exactly once, to form a five-digit number; all $120$ orders are equally likely. What is the probability that the number is divisible by $4$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{4}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        'A whole number is divisible by $4$ exactly when the number formed by its last two digits is, because $100$ is a multiple of $4$. The last two cards form an ordered pair of different digits from the set, and all $5 \\cdot 4 = 20$ such pairs are equally likely: $34, 35, 37, 38, 43, 45, 47, 48, 53, 54, 57, 58, 73, 74, 75, 78, 83, 84, 85, 87$. Only $48$ and $84$ are multiples of $4$, so the probability is $\\frac{2}{20} = \\frac{1}{10}$ ✓. A modular argument agrees without checking twenty numbers. If the last two cards are $t$ then $u$, the ending is $10t + u \\equiv 2t + u \\pmod 4$. Since $2t$ is always even, $u$ must be even too, so $u$ is $4$ or $8$. If $u = 4$ we need $2t \\equiv 0 \\pmod 4$, so $t$ is even, forcing $t = 8$; if $u = 8$ the same requirement forces $t = 4$. Two endings survive, each with $3! = 6$ orders for the first three cards, so $\\frac{2 \\cdot 6}{120} = \\frac{1}{10}$ ✓. COUNTING $44$ AND $88$ AS ENDINGS gives $\\frac{4}{20} = \\frac{1}{5}$, but there is only one card of each digit ✗. ASKING ONLY THAT THE NUMBER BE EVEN gives $\\frac{2}{5}$, the chance the last card is the $4$ or the $8$ ✗. ASSUMING ONE NUMBER IN FOUR IS A MULTIPLE OF $4$ gives $\\frac{1}{4}$, which fails once the available digits are restricted and cannot repeat ✗.',
    },
    {
      q: 'Three of the five cards showing the digits $1$, $2$, $4$, $5$, $8$ are drawn at random and laid in a row in random order to form a three-digit number, each card used at most once; all $60$ resulting numbers are equally likely. What is the probability that the number is divisible by $4$?',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{10}$', '$\\frac{3}{5}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'Only the last two digits decide divisibility by $4$, since $100$ is a multiple of $4$. The last two cards form an ordered pair of different digits from the set, $5 \\cdot 4 = 20$ equally likely pairs, and the multiples of $4$ among them are $12$, $24$, $28$, $48$, $52$, and $84$ — six pairs. Each such ending leaves $3$ cards that could be the hundreds digit, so $6 \\cdot 3 = 18$ of the $60$ numbers work: $\\frac{18}{60} = \\frac{3}{10}$ ✓. A modular argument agrees. Writing the number as $100h + 10t + u$, it is $\\equiv 2t + u \\pmod 4$. If $u = 1$ or $u = 5$ we would need $2t \\equiv 3 \\pmod 4$, impossible for an even number. If $u = 2$ we need $2t \\equiv 2$, so $t$ is odd: $t = 1$ or $5$. If $u = 4$ we need $2t \\equiv 0$, so $t$ is even: $t = 2$ or $8$. If $u = 8$ we again need $t$ even: $t = 2$ or $4$. That is $2 + 2 + 2 = 6$ endings, each with $3$ choices of hundreds card, so $\\frac{18}{60} = \\frac{3}{10}$ ✓. ASKING ONLY THAT THE LAST DIGIT BE A MULTIPLE OF $4$ gives $\\frac{24}{60} = \\frac{2}{5}$ ✗. ASKING ONLY THAT THE NUMBER BE EVEN gives $\\frac{36}{60} = \\frac{3}{5}$ ✗. ASSUMING ONE NUMBER IN FOUR IS A MULTIPLE OF $4$ gives $\\frac{1}{4}$, which fails with digits that are restricted and cannot repeat ✗.',
    },
    {
      q: 'The digits $1$, $2$, $3$, $4$, $5$, $6$ are arranged in random order to form a six-digit number, each digit used exactly once; all $720$ orders are equally likely. What is the probability that the number is divisible by $8$?',
      choices: ['$\\frac{7}{60}$', '$\\frac{4}{15}$', '$\\frac{1}{8}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'A whole number is divisible by $8$ exactly when the number formed by its last three digits is, because $1000$ is a multiple of $8$. The last three digits form an ordered triple of different digits from $1$ to $6$, and all $6 \\cdot 5 \\cdot 4 = 120$ triples are equally likely. Running through them, the multiples of $8$ are $136$, $152$, $216$, $256$, $264$, $312$, $352$, $416$, $432$, $456$, $512$, $536$, $624$, and $632$ — fourteen of them — so the probability is $\\frac{14}{120} = \\frac{7}{60}$ ✓. Modular casework agrees and never lists an ending. Write the last three digits as $100h + 10t + u \\equiv 4h + 2t + u \\pmod 8$. Since $4h + 2t$ is even, $u$ must be even. For $u = 2$ we need $4h + 2t \\equiv 6$, that is $2h + t \\equiv 3 \\pmod 4$, and checking the five remaining digits for $h$ and $t$ leaves six pairs. For $u = 4$ the requirement $2h + t \\equiv 2 \\pmod 4$ leaves two pairs, and for $u = 6$ the requirement $2h + t \\equiv 1 \\pmod 4$ leaves six. That is $6 + 2 + 6 = 14$ endings, each with $3! = 6$ orders for the first three digits, so $\\frac{14 \\cdot 6}{720} = \\frac{84}{720} = \\frac{7}{60}$ ✓. USING THE RULE FOR $4$ instead, and looking only at the last two digits, gives $\\frac{4}{15}$ ✗. ASSUMING ONE NUMBER IN EIGHT IS A MULTIPLE OF $8$ gives $\\frac{1}{8}$, which fails with restricted digits that cannot repeat ✗. ASKING ONLY THAT THE NUMBER BE EVEN gives $\\frac{1}{2}$ ✗.',
    },
  ],

  // slot 9 — which group outnumbers the other on a random committee (casework
  //          vs. a complement or a color-swap symmetry). Lanes: 3 from 5 boys
  //          4 girls, more girls; 4 from 5 red 5 blue, more red; derived: 4
  //          from 6 boys 4 girls, an even split.
  [
    {
      q: 'A committee of $3$ is chosen at random from $5$ boys and $4$ girls, every set of three equally likely. What is the probability that the committee has more girls than boys?',
      choices: ['$\\frac{5}{14}$', '$\\frac{25}{42}$', '$\\frac{17}{42}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'There are $\\binom{9}{3} = 84$ equally likely committees. More girls than boys on a committee of three means either $2$ girls and $1$ boy, $\\binom{4}{2} \\cdot \\binom{5}{1} = 6 \\cdot 5 = 30$ committees, or $3$ girls, $\\binom{4}{3} = 4$ committees. That is $30 + 4 = 34$, so the probability is $\\frac{34}{84} = \\frac{17}{42}$ ✓. Counting the other side agrees and never uses that $34$. Three is odd, so a committee can never be tied: it has either more girls or more boys. More boys means $2$ boys and $1$ girl, $\\binom{5}{2} \\cdot \\binom{4}{1} = 10 \\cdot 4 = 40$ committees, or $3$ boys, $\\binom{5}{3} = 10$ committees, for $50$. The rest, $84 - 50 = 34$, have more girls: $\\frac{34}{84} = \\frac{17}{42}$ ✓. STOPPING AFTER THE TWO-GIRL CASE gives $\\frac{30}{84} = \\frac{5}{14}$ and forgets the all-girl committees ✗. READING OFF $\\frac{50}{84} = \\frac{25}{42}$ answers the opposite question, the chance of more BOYS ✗. GUESSING $\\frac{1}{2}$ treats the two groups as symmetric, ignoring that there are five boys and only four girls ✗.',
    },
    {
      q: 'A hand of $4$ tiles is drawn at random from $5$ red tiles and $5$ blue tiles, all ten tiles different, every hand equally likely. What is the probability that the hand has more red tiles than blue tiles?',
      choices: ['$\\frac{11}{42}$', '$\\frac{5}{21}$', '$\\frac{31}{42}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'There are $\\binom{10}{4} = 210$ equally likely hands. More red than blue on a hand of four means $3$ red and $1$ blue, $\\binom{5}{3} \\cdot \\binom{5}{1} = 10 \\cdot 5 = 50$ hands, or $4$ red, $\\binom{5}{4} = 5$ hands. That is $55$ hands, so the probability is $\\frac{55}{210} = \\frac{11}{42}$ ✓. A symmetry argument agrees without those case counts. Repainting every red tile blue and every blue tile red matches each “more red” hand with exactly one “more blue” hand, so those two piles are the same size. The hands that are neither have $2$ of each color, $\\binom{5}{2} \\cdot \\binom{5}{2} = 10 \\cdot 10 = 100$ of them. So “more red” accounts for $\\frac{210 - 100}{2} = 55$ hands: $\\frac{55}{210} = \\frac{11}{42}$ ✓. STOPPING AFTER THE THREE-RED CASE gives $\\frac{50}{210} = \\frac{5}{21}$ and forgets the all-red hands ✗. COUNTING THE TIED HANDS AS “MORE RED” gives $\\frac{155}{210} = \\frac{31}{42}$ ✗. USING THE COLOR SYMMETRY BUT FORGETTING TIES gives $\\frac{1}{2}$; a hand of four can split evenly, and $100$ of the $210$ hands do ✗.',
    },
    {
      q: 'A committee of $4$ is chosen at random from $6$ boys and $4$ girls, every set of four equally likely. What is the probability that the committee has equally many boys and girls?',
      choices: ['$\\frac{19}{42}$', '$\\frac{4}{7}$', '$\\frac{1}{2}$', '$\\frac{3}{7}$'],
      answer: 3,
      solution:
        'There are $\\binom{10}{4} = 210$ equally likely committees. An even split is $2$ boys and $2$ girls: choose the boys in $\\binom{6}{2} = 15$ ways and the girls in $\\binom{4}{2} = 6$ ways, for $15 \\cdot 6 = 90$ committees. The probability is $\\frac{90}{210} = \\frac{3}{7}$ ✓. Counting the lopsided committees agrees and never uses that $90$. More boys means $3$ boys and $1$ girl, $\\binom{6}{3} \\cdot \\binom{4}{1} = 20 \\cdot 4 = 80$, or $4$ boys, $\\binom{6}{4} = 15$, for $95$. More girls means $3$ girls and $1$ boy, $\\binom{4}{3} \\cdot \\binom{6}{1} = 4 \\cdot 6 = 24$, or $4$ girls, $\\binom{4}{4} = 1$, for $25$. So $95 + 25 = 120$ committees are lopsided and $210 - 120 = 90$ are even: $\\frac{3}{7}$ ✓. READING OFF $\\frac{95}{210} = \\frac{19}{42}$ answers a different question, the chance of more BOYS ✗. READING OFF $\\frac{120}{210} = \\frac{4}{7}$ answers the opposite question, the chance the committee is NOT evenly split ✗. GUESSING $\\frac{1}{2}$ assumes an even split is as likely as not, when the two pools are different sizes ✗.',
    },
  ],

  // slot 10 — how many factors of 2 or 3 a product of three rolls carries
  //           (counting the carriers vs. a complement). Lanes: three dice, a
  //           multiple of 9; three spins of a 1-4 spinner, a multiple of 8;
  //           derived: three dice, a multiple of 4 but not of 8.
  [
    {
      q: 'Three standard dice are rolled, the rolls independent. What is the probability that the product of the three numbers showing is a multiple of $9$?',
      choices: ['$\\frac{19}{27}$', '$\\frac{7}{27}$', '$\\frac{2}{9}$', '$\\frac{1}{9}$'],
      answer: 1,
      solution:
        'Only $3$ and $6$ carry a factor of $3$, and each carries exactly one, so the product is a multiple of $9 = 3^2$ exactly when at least two of the three dice show a $3$ or a $6$. Exactly two: choose which die is not a carrier ($3$ ways), give it one of the $4$ other faces, and give the two carriers $2$ faces each, for $3 \\cdot 4 \\cdot 2 \\cdot 2 = 48$ rolls. All three carriers: $2^3 = 8$ rolls. That is $48 + 8 = 56$ of the $6^3 = 216$ equally likely rolls: $\\frac{56}{216} = \\frac{7}{27}$ ✓. Counting the failures agrees. The product misses $9$ when at most one die is a carrier: no carriers, $4^3 = 64$ rolls; exactly one, $3 \\cdot 2 \\cdot 4^2 = 96$ rolls, for $160$. Then $216 - 160 = 56$ rolls work, or $\\frac{7}{27}$ ✓. READING OFF $\\frac{152}{216} = \\frac{19}{27}$ answers a weaker question, the chance the product is a multiple of $3$, which needs only ONE carrier ✗. STOPPING AFTER “EXACTLY TWO” gives $\\frac{48}{216} = \\frac{2}{9}$ and drops the eight rolls where all three dice carry a factor of $3$ ✗. PINNING THE CARRIERS TO THE FIRST TWO DICE gives $\\frac{2 \\cdot 2 \\cdot 6}{216} = \\frac{1}{9}$ and never chooses which dice they are ✗.',
    },
    {
      q: 'A spinner with $4$ equal sectors numbered $1$, $2$, $3$, $4$ is spun three times, the spins independent. What is the probability that the product of the three numbers is a multiple of $8$?',
      choices: ['$\\frac{11}{16}$', '$\\frac{7}{8}$', '$\\frac{13}{64}$', '$\\frac{13}{32}$'],
      answer: 3,
      solution:
        'There are $4^3 = 64$ equally likely triples of spins. Sort the sectors by how many factors of $2$ they carry: $1$ and $3$ carry none, $2$ carries one, and $4$ carries two. The product is a multiple of $8 = 2^3$ when the three spins carry at least three factors of $2$ between them. By type: one of each ($6$ orders, and the “none” spin has $2$ faces) gives $12$; one “none” and two fours ($3$ orders, $2$ faces) gives $6$; three twos gives $1$; two twos and a four ($3$ orders) gives $3$; one two and two fours ($3$ orders) gives $3$; three fours gives $1$. That is $12 + 6 + 1 + 3 + 3 + 1 = 26$ triples: $\\frac{26}{64} = \\frac{13}{32}$ ✓. Counting the failures agrees. At most two factors of $2$ means: three “none” spins, $2^3 = 8$; two “none” and one two, $3 \\cdot 2 \\cdot 2 \\cdot 1 = 12$; two “none” and one four, another $12$; one “none” and two twos, $3 \\cdot 2 = 6$. That is $8 + 12 + 12 + 6 = 38$, so $64 - 38 = 26$ triples work: $\\frac{13}{32}$ ✓. READING OFF $\\frac{44}{64} = \\frac{11}{16}$ answers the weaker question, a multiple of $4$ ✗. READING OFF $\\frac{56}{64} = \\frac{7}{8}$ answers only that the product is EVEN ✗. READING OFF $\\frac{13}{64}$ answers the stronger question, a multiple of $16$ ✗.',
    },
    {
      q: 'Three standard dice are rolled, the rolls independent. What is the probability that the product of the three numbers showing is a multiple of $4$ but not a multiple of $8$?',
      choices: ['$\\frac{5}{8}$', '$\\frac{1}{3}$', '$\\frac{7}{24}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'Sort the faces by how many factors of $2$ they carry: $1$, $3$, $5$ carry none ($3$ faces), $2$ and $6$ carry one ($2$ faces), and $4$ carries two ($1$ face). “A multiple of $4$ but not of $8$” means the three dice carry exactly two factors of $2$. That happens two ways: two carry none and one shows a $4$ — $3$ orders, $3 \\cdot 3 \\cdot 1 = 9$ face choices, so $27$ rolls — or one carries none and the other two each carry one — $3$ orders, $3 \\cdot 2 \\cdot 2 = 12$ face choices, so $36$ rolls. That is $27 + 36 = 63$ of the $6^3 = 216$ equally likely rolls: $\\frac{63}{216} = \\frac{7}{24}$ ✓. Subtracting two separately computed counts agrees. The product is a multiple of $4$ unless the dice carry fewer than two factors of $2$: none at all, $3^3 = 27$ rolls, or exactly one, $3 \\cdot 2 \\cdot 3^2 = 54$ rolls, so $216 - 27 - 54 = 135$ rolls give a multiple of $4$. The product is a multiple of $8$ when the dice carry at least three factors of $2$: one of each type, $6 \\cdot 3 \\cdot 2 \\cdot 1 = 36$; one “none” and two fours, $3 \\cdot 3 = 9$; three carriers of one, $2^3 = 8$; two of one and a four, $3 \\cdot 4 = 12$; one of one and two fours, $3 \\cdot 2 = 6$; three fours, $1$ — a total of $72$. So $135 - 72 = 63$ rolls, or $\\frac{7}{24}$ ✓. READING OFF $\\frac{135}{216} = \\frac{5}{8}$ answers “a multiple of $4$” and leaves the multiples of $8$ in ✗. READING OFF $\\frac{72}{216} = \\frac{1}{3}$ answers “a multiple of $8$” ✗. COUNTING EXACTLY ONE FACTOR OF $2$ gives $\\frac{54}{216} = \\frac{1}{4}$, the chance the product is even but NOT a multiple of $4$ ✗.',
    },
  ],

  // slot 11 — the extreme value of several rolls (two “at most” counts vs.
  //           casework on how many dice hit the extreme). Lanes: three dice,
  //           smallest exactly 2; four d4, largest exactly 3; derived: three
  //           dice, largest at most 4.
  [
    {
      q: 'Three standard dice are rolled, the rolls independent. What is the probability that the smallest number showing is exactly $2$?',
      choices: ['$\\frac{125}{216}$', '$\\frac{1}{6}$', '$\\frac{2}{9}$', '$\\frac{61}{216}$'],
      answer: 3,
      solution:
        'There are $6^3 = 216$ equally likely rolls. “The smallest is at least $2$” means every die shows $2$ through $6$: $5^3 = 125$ rolls. “The smallest is at least $3$” means every die shows $3$ through $6$: $4^3 = 64$ rolls. The smallest is exactly $2$ in the gap between them, $125 - 64 = 61$ rolls: $\\frac{61}{216}$ ✓. Casework on how many dice show a $2$ agrees. Exactly one $2$, with the other two dice in $3$ through $6$: $3 \\cdot 1 \\cdot 4^2 = 48$ rolls. Exactly two $2$s, with the third die in $3$ through $6$: $3 \\cdot 4 = 12$ rolls. Three $2$s: $1$ roll. That is $48 + 12 + 1 = 61$ rolls, or $\\frac{61}{216}$ ✓. STOPPING AT $\\frac{125}{216}$ answers “the smallest is at LEAST $2$” and keeps every roll with no $1$ ✗. ASSUMING THE SIX POSSIBLE MINIMUMS ARE EQUALLY LIKELY gives $\\frac{1}{6}$, but a minimum of $1$ is far more common than a minimum of $6$ ✗. KEEPING ONLY THE ROLLS WITH EXACTLY ONE $2$ gives $\\frac{48}{216} = \\frac{2}{9}$ ✗.',
    },
    {
      q: 'Four fair four-sided dice, each with faces numbered $1$ through $4$, are rolled, the rolls independent. What is the probability that the largest number showing is exactly $3$?',
      choices: ['$\\frac{81}{256}$', '$\\frac{65}{256}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        'There are $4^4 = 256$ equally likely rolls. “The largest is at most $3$” means all four dice show $1$, $2$, or $3$: $3^4 = 81$ rolls. “The largest is at most $2$” means all four show $1$ or $2$: $2^4 = 16$ rolls. The largest is exactly $3$ in the gap, $81 - 16 = 65$ rolls: $\\frac{65}{256}$ ✓. Casework on how many dice show a $3$ agrees. With exactly one $3$ the other three dice show $1$ or $2$: $\\binom{4}{1} \\cdot 2^3 = 32$ rolls. With exactly two: $\\binom{4}{2} \\cdot 2^2 = 24$. With exactly three: $\\binom{4}{3} \\cdot 2 = 8$. With all four: $1$. That is $32 + 24 + 8 + 1 = 65$, or $\\frac{65}{256}$ ✓. STOPPING AT $\\frac{81}{256}$ answers “the largest is at MOST $3$” and keeps the sixteen rolls with no $3$ at all ✗. ASSUMING THE FOUR POSSIBLE MAXIMUMS ARE EQUALLY LIKELY gives $\\frac{1}{4}$, but a maximum of $4$ happens far more often than a maximum of $1$ ✗. KEEPING ONLY THE ROLLS WITH EXACTLY ONE $3$ gives $\\frac{32}{256} = \\frac{1}{8}$ ✗.',
    },
    {
      q: 'Three standard dice are rolled, the rolls independent. What is the probability that the largest number showing is at most $4$?',
      choices: ['$\\frac{8}{27}$', '$\\frac{1}{8}$', '$\\frac{37}{216}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution:
        'The largest number showing is at most $4$ exactly when every die shows $1$, $2$, $3$, or $4$ — one condition per die. That gives $4^3 = 64$ of the $6^3 = 216$ equally likely rolls: $\\frac{64}{216} = \\frac{8}{27}$ ✓. Adding up the exact maximums agrees. The largest is exactly $1$ in $1^3 = 1$ roll; exactly $2$ in $2^3 - 1^3 = 7$ rolls; exactly $3$ in $3^3 - 2^3 = 19$ rolls; exactly $4$ in $4^3 - 3^3 = 37$ rolls. Those four cases are the whole event and do not overlap: $1 + 7 + 19 + 37 = 64$ rolls, or $\\frac{8}{27}$ ✓. READING OFF $\\frac{27}{216} = \\frac{1}{8}$ answers “at most $3$” ✗. READING OFF $\\frac{37}{216}$ answers “the largest is EXACTLY $4$” and drops every roll whose maximum is smaller ✗. CONSTRAINING ONLY ONE DIE gives $\\frac{4}{6} = \\frac{2}{3}$ and leaves the other two free to show a $5$ or a $6$ ✗.',
    },
  ],

  // slot 12 — paired people in a random group (build the group around the pair
  //           vs. count by how many pairs it holds). Lanes: 4 of 10 with
  //           exactly one couple; 3 of 12 twins with exactly one pair; derived:
  //           the base 8 people with no couple.
  [
    {
      q: 'Five married couples — $10$ people — are at a dinner, and $4$ of the $10$ are chosen at random to give a toast, every set of four equally likely. What is the probability that the group of $4$ contains exactly one married couple?',
      choices: ['$\\frac{2}{3}$', '$\\frac{13}{21}$', '$\\frac{4}{7}$', '$\\frac{1}{21}$'],
      answer: 2,
      solution:
        'There are $\\binom{10}{4} = 210$ equally likely groups. Build a favorable group: pick which couple is in it, $5$ ways, then pick $2$ more people from the other $8$ so that those two are not themselves a couple — $\\binom{8}{2} = 28$ pairs minus the $4$ remaining couples, so $24$ ways. That gives $5 \\cdot 24 = 120$ groups: $\\frac{120}{210} = \\frac{4}{7}$ ✓. Sorting the groups by how many couples they hold agrees. A group with no couple takes at most one person from each couple: choose $4$ of the $5$ couples to contribute, $\\binom{5}{4} = 5$ ways, then one person from each, $2^4 = 16$ ways, for $80$ groups. A group with two couples is just a choice of $2$ couples, $\\binom{5}{2} = 10$ groups. Since a group of four can hold no more than two couples, the rest hold exactly one: $210 - 80 - 10 = 120$, or $\\frac{4}{7}$ ✓. USING $5 \\cdot \\binom{8}{2} = 140$ gives $\\frac{140}{210} = \\frac{2}{3}$ and never rules out a second couple, so each two-couple group is counted twice ✗. READING OFF $\\frac{130}{210} = \\frac{13}{21}$ answers “AT LEAST one couple” ✗. READING OFF $\\frac{10}{210} = \\frac{1}{21}$ answers “exactly TWO couples” ✗.',
    },
    {
      q: 'Six pairs of twins — $12$ children — are at a party, and $3$ of the $12$ are chosen at random for a game, every set of three equally likely. What is the probability that exactly one pair of twins is among the three chosen?',
      choices: ['$\\frac{3}{11}$', '$\\frac{8}{11}$', '$\\frac{1}{22}$', '$\\frac{6}{11}$'],
      answer: 0,
      solution:
        'There are $\\binom{12}{3} = 220$ equally likely groups. Build a favorable group: pick which pair of twins is in it, $6$ ways, then pick the third child from the $10$ children left, $10$ ways. That gives $6 \\cdot 10 = 60$ groups, and no group is built twice, since three children cannot contain two complete pairs. The probability is $\\frac{60}{220} = \\frac{3}{11}$ ✓. Counting the groups with no pair agrees. Choose $3$ of the $6$ twin pairs to contribute, $\\binom{6}{3} = 20$ ways, then one child from each, $2^3 = 8$ ways, for $160$ groups with no twins together. Since a group of three holds either no pair or exactly one, the rest are favorable: $220 - 160 = 60$, or $\\frac{3}{11}$ ✓. READING OFF $\\frac{160}{220} = \\frac{8}{11}$ answers the opposite question, the chance NO two of the three are twins ✗. DIVIDING BY $12 \\cdot 11 \\cdot 10 = 1320$ gives $\\frac{60}{1320} = \\frac{1}{22}$ and puts unordered groups over ordered choices ✗. COUNTING THE PAIR IN BOTH ORDERS gives $2 \\cdot 6 \\cdot 10 = 120$ and $\\frac{120}{220} = \\frac{6}{11}$, but a group is a set and the two twins have no order ✗.',
    },
    {
      q: 'Four married couples — $8$ people — are at a dinner, and $4$ of the $8$ are chosen at random to give a toast, every set of four equally likely. What is the probability that no married couple is among the four?',
      choices: ['$\\frac{27}{35}$', '$\\frac{24}{35}$', '$\\frac{1}{7}$', '$\\frac{8}{35}$'],
      answer: 3,
      solution:
        'There are $\\binom{8}{4} = 70$ equally likely groups. Four people with no couple among them must take at most one person from each of the four couples, and four people from four couples means exactly one from each. So the group is built by choosing a person from every couple: $2^4 = 16$ groups. The probability is $\\frac{16}{70} = \\frac{8}{35}$ ✓. Counting the groups that DO hold a couple agrees. Exactly one couple: pick the couple, $4$ ways, then $2$ more from the other $6$ people avoiding the $3$ remaining couples, $\\binom{6}{2} - 3 = 12$ ways, for $48$ groups. Exactly two couples: just pick the two couples, $\\binom{4}{2} = 6$ groups. That is $48 + 6 = 54$ groups with at least one couple, leaving $70 - 54 = 16$: $\\frac{8}{35}$ ✓. READING OFF $\\frac{54}{70} = \\frac{27}{35}$ answers the opposite question, the chance of AT LEAST one couple ✗. READING OFF $\\frac{48}{70} = \\frac{24}{35}$ answers “exactly one couple” ✗. SUBTRACTING $4 \\cdot \\binom{6}{2} = 60$ gives $\\frac{10}{70} = \\frac{1}{7}$ and overcounts the bad groups, since each two-couple group is caught twice in that $60$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 7,
  challenge,
}
