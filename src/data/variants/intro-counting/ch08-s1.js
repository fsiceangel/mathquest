// Counting chapter 8 — variations for §8.2 Probability and Addition.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses the question or asks the natural follow-up.
//  - Answer indices are derived from the base indices 0 1 3 1 2 0 3 1 2 2 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4.
//  - Every key was brute-forced in node before the stem was written: full
//    sample spaces for the dice grids, coin and spinner sequences, unordered
//    card pairs, three-digit numbers and letter codes, and exact rational
//    arithmetic for the given-probability items. Every key matches its pin.
//    Pin deviations: none.
//  - This is the addition section, so each solution runs two genuinely
//    independent routes that each end ✓ — one the inclusion–exclusion count
//    (add the two groups, subtract what sits in both), one a route that never
//    double-counts at all: disjoint blocks, conditioning on one trial, or the
//    complement. Route two never re-imports route one’s number. Each wrong
//    choice is then named in CAPS, ending ✗, and every attribution is an
//    arithmetically true statement about that number. The trap this section
//    exists for — adding and never subtracting the overlap — is on the board
//    in every slot where an overlap exists.
//  - Conventions are settled in every stem: draws are at random with every
//    item equally likely; two dice are named by color so order is visible;
//    spinner sectors are equal unless the stem gives the angles; repeated
//    trials are stated to be independent; every given probability is stated
//    as a probability, never inferred.

const s82 = [
  // slot 1 — disjoint categories, nothing to subtract.
  //          Lanes: three bead materials -> 13/20; four song genres -> 5/12;
  //          reversed: two overlapping counts pin down the middle group -> 9.
  [
    {
      q: 'A jar holds $20$ beads: $7$ are wooden, $5$ are glass, and $8$ are clay. One bead is drawn at random, every bead equally likely. What is the probability that it is glass or clay?',
      choices: ['$\\frac{2}{5}$', '$\\frac{13}{20}$', '$\\frac{1}{4}$', '$\\frac{13}{40}$'],
      answer: 1,
      solution:
        'No bead is made of two materials, so the glass beads and the clay beads are separate piles and the two probabilities simply add: $\\frac{5}{20} + \\frac{8}{20} = \\frac{13}{20}$ ✓. The complement gets there without touching either pile: every bead that is not glass and not clay is wooden, and there are $7$ of those, so the answer is $1 - \\frac{7}{20} = \\frac{13}{20}$ ✓. KEEPING ONLY THE CLAY BEADS gives $\\frac{8}{20} = \\frac{2}{5}$ ✗. KEEPING ONLY THE GLASS BEADS gives $\\frac{5}{20} = \\frac{1}{4}$ ✗. ADDING THE DENOMINATORS TOO turns $\\frac{5}{20} + \\frac{8}{20}$ into $\\frac{13}{40}$, but the jar does not grow when you add two of its groups ✗.',
    },
    {
      q: 'A playlist holds $24$ songs: $9$ rock, $6$ jazz, $4$ folk, and $5$ pop. One song is played at random, every song equally likely. What is the probability that it is jazz or folk?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{6}$', '$\\frac{7}{12}$', '$\\frac{5}{12}$'],
      answer: 3,
      solution:
        'A song has one genre, so jazz and folk are disjoint events and the probabilities add: $\\frac{6}{24} + \\frac{4}{24} = \\frac{10}{24} = \\frac{5}{12}$ ✓. Counting the other side of the playlist agrees: the songs that are neither jazz nor folk are exactly the $9$ rock and $5$ pop songs, $14$ in all, so the answer is $1 - \\frac{14}{24} = \\frac{10}{24} = \\frac{5}{12}$ ✓. KEEPING ONLY THE JAZZ SONGS gives $\\frac{6}{24} = \\frac{1}{4}$ ✗. KEEPING ONLY THE FOLK SONGS gives $\\frac{4}{24} = \\frac{1}{6}$ ✗. ANSWERING WITH THE OTHER TWO GENRES gives $\\frac{9 + 5}{24} = \\frac{7}{12}$, the chance the song is rock or pop ✗.',
    },
    {
      q: 'A box holds $30$ chips, and each chip is red, white, or blue. A chip is drawn at random, every chip equally likely. The probability that it is red or white is $\\frac{7}{10}$, and the probability that it is white or blue is $\\frac{3}{5}$. How many of the chips are white?',
      choices: ['$12$', '$21$', '$9$', '$3$'],
      answer: 2,
      solution:
        'Turn the probabilities into counts: red or white is $\\frac{7}{10} \\cdot 30 = 21$ chips, and white or blue is $\\frac{3}{5} \\cdot 30 = 18$ chips. Adding those two counts, $21 + 18 = 39$, sweeps up every chip once except the white ones, which are in both groups and so get counted twice. That means $39 = 30 + (\\text{white})$, so there are $9$ white chips ✓. A route through the other two colors never adds the groups at all: the chips outside "white or blue" are exactly the red ones, so red $= 30 - 18 = 12$; the chips outside "red or white" are exactly the blue ones, so blue $= 30 - 21 = 9$; and white $= 30 - 12 - 9 = 9$ ✓. ANSWERING WITH THE RED CHIPS gives $12$ ✗. ANSWERING WITH THE WHOLE RED-OR-WHITE GROUP gives $21$, which is the white chips plus all the red ones ✗. SUBTRACTING THE TWO COUNTS gives $21 - 18 = 3$, the difference between the red and blue groups rather than the white one ✗.',
    },
  ],

  // slot 2 — two number lists over a numbered set, one shared number.
  //          Lanes: 1-20 multiples of 4 vs above 16 -> 2/5; lockers 1-28,
  //          multiples of 4 vs 7 -> 5/14; derived: exactly one of the base's
  //          two conditions -> 1/2.
  [
    {
      q: 'Twenty cards numbered $1$ through $20$ are shuffled and one is drawn at random, every card equally likely. What is the probability that the number drawn is a multiple of $4$ or greater than $16$?',
      choices: ['$\\frac{9}{20}$', '$\\frac{1}{4}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$'],
      answer: 2,
      solution:
        'The multiples of $4$ are $4, 8, 12, 16, 20$ — five cards — and the cards greater than $16$ are $17, 18, 19, 20$ — four cards. The card $20$ is on both lists, so $5 + 4$ counts it twice; subtract it once for $5 + 4 - 1 = 8$ favorable cards and $\\frac{8}{20} = \\frac{2}{5}$ ✓. Cutting the event into two disjoint blocks avoids the double count entirely: take the cards greater than $16$ ($17, 18, 19, 20$, four of them) and then the multiples of $4$ that are $16$ or less ($4, 8, 12, 16$, four more). No card is in both blocks, and together they are exactly the event, so $4 + 4 = 8$ cards and $\\frac{2}{5}$ ✓. ADDING $5 + 4$ AND NEVER SUBTRACTING gives $\\frac{9}{20}$ and counts the card $20$ twice ✗. KEEPING ONLY THE MULTIPLES OF $4$ gives $\\frac{5}{20} = \\frac{1}{4}$ ✗. KEEPING ONLY THE CARDS ABOVE $16$ gives $\\frac{4}{20} = \\frac{1}{5}$ ✗.',
    },
    {
      q: 'A hallway has $28$ lockers numbered $1$ through $28$, and one is chosen at random for inspection, every locker equally likely. What is the probability that its number is a multiple of $4$ or a multiple of $7$?',
      choices: ['$\\frac{5}{14}$', '$\\frac{11}{28}$', '$\\frac{1}{4}$', '$\\frac{9}{28}$'],
      answer: 0,
      solution:
        'There are $7$ multiples of $4$ up to $28$ and $4$ multiples of $7$. A number on both lists is a multiple of $28$, and the only one in range is $28$ itself, so the favorable count is $7 + 4 - 1 = 10$ and the probability is $\\frac{10}{28} = \\frac{5}{14}$ ✓. Three disjoint piles give the same total without any subtraction: multiples of $4$ that are not multiples of $7$ ($4, 8, 12, 16, 20, 24$ — six), multiples of $7$ that are not multiples of $4$ ($7, 14, 21$ — three), and the single locker in both ($28$). That is $6 + 3 + 1 = 10$ lockers, so $\\frac{5}{14}$ ✓. ADDING $7 + 4$ AND NEVER SUBTRACTING gives $\\frac{11}{28}$ ✗. KEEPING ONLY THE MULTIPLES OF $4$ gives $\\frac{7}{28} = \\frac{1}{4}$ ✗. STRIKING LOCKER $28$ FROM BOTH LISTS leaves $6 + 3 = 9$ and $\\frac{9}{28}$, which removes the shared locker one time too many ✗.',
    },
    {
      q: 'Twelve cards numbered $1$ through $12$ are shuffled and one is drawn at random, every card equally likely. What is the probability that the number drawn satisfies exactly one of the two conditions "is a factor of $12$" and "is greater than $10$" — that is, one of them but not both?',
      choices: ['$\\frac{7}{12}$', '$\\frac{2}{3}$', '$\\frac{1}{12}$', '$\\frac{1}{2}$'],
      answer: 3,
      solution:
        'List the two groups: the factors of $12$ are $1, 2, 3, 4, 6, 12$ and the cards above $10$ are $11, 12$. "Exactly one" keeps the factors that are not above $10$ ($1, 2, 3, 4, 6$ — five cards) and the cards above $10$ that are not factors ($11$ — one card), so $5 + 1 = 6$ favorable cards and $\\frac{6}{12} = \\frac{1}{2}$ ✓. A formula route reaches the same place from the two sizes: "exactly one" is $P(A) + P(B) - 2P(A \\text{ and } B)$, because the shared card must be removed once for each group that claimed it, giving $\\frac{6}{12} + \\frac{2}{12} - 2 \\cdot \\frac{1}{12} = \\frac{6}{12} = \\frac{1}{2}$ ✓. ANSWERING WITH THE "OR" GROUP gives $\\frac{7}{12}$, which still includes the card $12$ that meets both conditions ✗. ADDING THE TWO GROUPS WITH NO SUBTRACTION AT ALL gives $\\frac{6 + 2}{12} = \\frac{2}{3}$ ✗. ANSWERING WITH THE SHARED CARD gives $\\frac{1}{12}$, the chance of drawing the $12$ ✗.',
    },
  ],

  // slot 3 — spinner areas, disjoint sectors.
  //          Lanes: silver/bronze/mint/plum eighths -> 3/8; a wheel given by
  //          central angles -> 7/12; reversed: recover one sector's share -> 1/12.
  [
    {
      q: 'The spinner shown is divided into four sections: half of it is silver, one quarter is bronze, and the remaining quarter is split into two equal sections, mint and plum. The pointer is equally likely to stop anywhere. What is the probability that one spin lands on bronze or mint?',
      fig: {
        view: [-1.35, -1.35, 1.35, 1.35],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 1], b: [0, -1] },
          { t: 'seg', a: [0, 0], b: [1, 0] },
          { t: 'seg', a: [0, 0], b: [0.7071, -0.7071] },
          { t: 'label', p: [-0.5, 0], text: 'silver' },
          { t: 'label', p: [0.45, 0.45], text: 'bronze' },
          { t: 'label', p: [0.68, -0.28], text: 'mint' },
          { t: 'label', p: [0.28, -0.68], text: 'plum' },
        ],
      },
      choices: ['$\\frac{3}{8}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{1}{32}$'],
      answer: 0,
      solution:
        'Mint and plum share the quarter that is left after silver and bronze, and they are equal, so each is half of a quarter, or $\\frac{1}{8}$ of the spinner. One spin cannot land on two sections, so the two probabilities add: $\\frac{1}{4} + \\frac{1}{8} = \\frac{3}{8}$ ✓. Measuring the whole spinner in eighths settles it without any fraction addition: silver is $4$ eighths, bronze is $2$, mint is $1$, and plum is $1$, which is the full $8$; bronze or mint is $2 + 1 = 3$ of those $8$ equal pieces, so $\\frac{3}{8}$ ✓. TREATING MINT AS A WHOLE QUARTER gives $\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$ and forgets that the last quarter was split in two ✗. ADDING SILVER TO MINT gives $\\frac{1}{2} + \\frac{1}{8} = \\frac{5}{8}$, which is the wrong pair of sections ✗. MULTIPLYING THE TWO SECTIONS gives $\\frac{1}{4} \\cdot \\frac{1}{8} = \\frac{1}{32}$; multiplication is for two separate spins, not for "or" on one spin ✗.',
    },
    {
      q: 'A game wheel’s pointer is spun and stops in a uniformly random direction. The wheel has four wedges, with central angles $180°$ (WIN), $90°$ (TRADE), $60°$ (LOSE), and $30°$ (SPIN AGAIN), as shown. What is the probability that the pointer stops on WIN or on SPIN AGAIN?',
      fig: {
        view: [-1.35, -1.35, 1.35, 1.35],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [-1, 0], b: [1, 0] },
          { t: 'seg', a: [0, 0], b: [0, -1] },
          { t: 'seg', a: [0, 0], b: [0.866, -0.5] },
          { t: 'label', p: [0, 0.5], text: 'WIN' },
          { t: 'label', p: [-0.42, -0.42], text: 'TRADE' },
          { t: 'label', p: [0.33, -0.58], text: 'LOSE' },
          { t: 'label', p: [0.74, -0.2], text: 'AGAIN' },
        ],
      },
      choices: ['$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{7}{12}$', '$\\frac{5}{12}$'],
      answer: 2,
      solution:
        'Because the direction is uniform, a wedge’s probability is its central angle over $360°$. The two wedges named cannot both catch one pointer, so their angles add: $\\frac{180 + 30}{360} = \\frac{210}{360} = \\frac{7}{12}$ ✓. Slicing the wheel into $30°$ units gives an equally likely sample space to count in: WIN is $6$ units, TRADE is $3$, LOSE is $2$, and SPIN AGAIN is $1$, a total of $12$ units, and the two named wedges hold $6 + 1 = 7$ of them, so $\\frac{7}{12}$ ✓. STOPPING AFTER WIN gives $\\frac{180}{360} = \\frac{1}{2}$ ✗. ADDING TRADE INSTEAD OF SPIN AGAIN gives $\\frac{180 + 90}{360} = \\frac{3}{4}$ ✗. ADDING THE OTHER TWO WEDGES gives $\\frac{90 + 60}{360} = \\frac{5}{12}$, the chance of landing on TRADE or LOSE ✗.',
    },
    {
      q: 'The spinner shown has four sections — red, blue, green, and yellow. Red is exactly half the spinner, and the green and yellow sections are equal in size. The pointer is equally likely to stop anywhere, and the probability that one spin lands on red or green is $\\frac{7}{12}$. What fraction of the spinner is yellow?',
      fig: {
        view: [-1.35, -1.35, 1.35, 1.35],
        elems: [
          { t: 'circle', c: [0, 0], r: 1 },
          { t: 'seg', a: [0, 1], b: [0, -1] },
          { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
          { t: 'seg', a: [0, 0], b: [-0.5, -0.866] },
          { t: 'label', p: [0.5, 0], text: 'red' },
          { t: 'label', p: [-0.2, 0.75], text: 'green' },
          { t: 'label', p: [-0.58, 0], text: 'blue' },
          { t: 'label', p: [-0.2, -0.75], text: 'yellow' },
        ],
      },
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{1}{3}$', '$\\frac{5}{24}$'],
      answer: 1,
      solution:
        'Red and green are different sections, so one spin cannot land on both and the two shares add with nothing to subtract: red $+$ green $= \\frac{7}{12}$. Red is $\\frac{1}{2} = \\frac{6}{12}$, so green is $\\frac{7}{12} - \\frac{6}{12} = \\frac{1}{12}$, and yellow equals green, so yellow is $\\frac{1}{12}$ ✓. Working through the sections the question did not mention confirms it: writing $y$ for the yellow share, the whole spinner is red $+$ blue $+$ green $+$ yellow, so blue $= 1 - \\frac{1}{2} - 2y = \\frac{1}{2} - 2y$. The event "not red and not green" is blue or yellow, with probability $1 - \\frac{7}{12} = \\frac{5}{12}$, so $\\left(\\frac{1}{2} - 2y\\right) + y = \\frac{5}{12}$, giving $\\frac{1}{2} - y = \\frac{5}{12}$ and $y = \\frac{1}{12}$ ✓. ANSWERING WITH GREEN AND YELLOW TOGETHER gives $\\frac{7}{12} - \\frac{1}{2}$ doubled, or $\\frac{1}{6}$, and never splits the pair ✗. ANSWERING WITH BLUE gives $1 - \\frac{1}{2} - \\frac{2}{12} = \\frac{1}{3}$ ✗. HALVING THE LEFTOVER $1 - \\frac{7}{12} = \\frac{5}{12}$ gives $\\frac{5}{24}$, which treats blue and yellow as equal when only green and yellow were said to be ✗.',
    },
  ],

  // slot 4 — two divisibility/shape lists over a range, one shared number.
  //          Lanes: 1-60 multiples of 9 vs cubes -> 2/15; pages 1-72, multiples
  //          of 8 vs squares -> 5/24; derived: the base's group minus the
  //          overlap it had to remove -> 1/8.
  [
    {
      q: 'An integer is chosen at random from $1$ through $60$, every integer equally likely. What is the probability that it is a multiple of $9$ or a perfect cube?',
      choices: ['$\\frac{3}{20}$', '$\\frac{1}{10}$', '$\\frac{2}{15}$', '$\\frac{7}{60}$'],
      answer: 2,
      solution:
        'The multiples of $9$ up to $60$ are $9, 18, 27, 36, 45, 54$ — six numbers — and the perfect cubes are $1 = 1^3$, $8 = 2^3$, and $27 = 3^3$ — three numbers. Only $27$ is on both lists, so the count is $6 + 3 - 1 = 8$ and the probability is $\\frac{8}{60} = \\frac{2}{15}$ ✓. Writing the union out once as a single sorted list removes any chance of a double count: $1, 8, 9, 18, 27, 36, 45, 54$ — eight numbers, so $\\frac{8}{60} = \\frac{2}{15}$ ✓. ADDING $6 + 3$ AND NEVER SUBTRACTING gives $\\frac{9}{60} = \\frac{3}{20}$ and counts $27$ twice ✗. KEEPING ONLY THE MULTIPLES OF $9$ gives $\\frac{6}{60} = \\frac{1}{10}$ ✗. FORGETTING THAT $1$ IS A PERFECT CUBE leaves only $8$ and $27$ as cubes, giving $6 + 2 - 1 = 7$ and $\\frac{7}{60}$ ✗.',
    },
    {
      q: 'A book has pages numbered $1$ through $72$, and one page is opened at random, every page equally likely. What is the probability that its number is a multiple of $8$ or a perfect square?',
      choices: ['$\\frac{5}{24}$', '$\\frac{17}{72}$', '$\\frac{1}{8}$', '$\\frac{2}{9}$'],
      answer: 0,
      solution:
        'There are $9$ multiples of $8$ up to $72$ and $8$ perfect squares ($1, 4, 9, 16, 25, 36, 49, 64$). Two numbers, $16$ and $64$, are on both lists, so the count is $9 + 8 - 2 = 15$ and the probability is $\\frac{15}{72} = \\frac{5}{24}$ ✓. Sorting the pages into three disjoint piles gives the same total with no subtraction: multiples of $8$ that are not squares ($8, 24, 32, 40, 48, 56, 72$ — seven), squares that are not multiples of $8$ ($1, 4, 9, 25, 36, 49$ — six), and the two that are both ($16, 64$). That is $7 + 6 + 2 = 15$ pages, so $\\frac{5}{24}$ ✓. ADDING $9 + 8$ AND NEVER SUBTRACTING gives $\\frac{17}{72}$ ✗. KEEPING ONLY THE MULTIPLES OF $8$ gives $\\frac{9}{72} = \\frac{1}{8}$ ✗. NOTICING ONLY ONE OF THE TWO SHARED PAGES gives $9 + 8 - 1 = 16$ and $\\frac{16}{72} = \\frac{2}{9}$ ✗.',
    },
    {
      q: 'An integer is chosen at random from $1$ through $40$, every integer equally likely. What is the probability that it is a multiple of $6$ but is not a perfect square?',
      choices: ['$\\frac{3}{20}$', '$\\frac{11}{40}$', '$\\frac{1}{40}$', '$\\frac{1}{8}$'],
      answer: 3,
      solution:
        'The multiples of $6$ up to $40$ are $6, 12, 18, 24, 30, 36$ — six numbers. Of those, only $36 = 6^2$ is a perfect square, so five survive and the probability is $\\frac{5}{40} = \\frac{1}{8}$ ✓. A divisibility argument reaches the same count without listing anything: there are $\\left\\lfloor \\frac{40}{6} \\right\\rfloor = 6$ multiples of $6$, and a perfect square that is a multiple of $6$ must contain both $2^2$ and $3^2$, so it is a multiple of $36$; the only multiple of $36$ up to $40$ is $36$ itself, so exactly one of the six is struck and $\\frac{6 - 1}{40} = \\frac{1}{8}$ ✓. KEEPING EVERY MULTIPLE OF $6$ gives $\\frac{6}{40} = \\frac{3}{20}$ and never strikes $36$ ✗. ANSWERING THE "OR" QUESTION INSTEAD gives $\\frac{11}{40}$, the chance of a multiple of $6$ or a perfect square ✗. ANSWERING WITH THE STRUCK NUMBER gives $\\frac{1}{40}$, the chance of drawing $36$ ✗.',
    },
  ],

  // slot 5 — casework over disjoint sums.
  //          Lanes: two eight-sided dice, sum a multiple of 5 -> 13/64; two of
  //          seven cards at once, square sum -> 4/21; derived: the base's
  //          square sums plus the cube sum -> 1/3.
  [
    {
      q: 'Two fair eight-sided dice, with faces numbered $1$ through $8$, one red and one blue, are rolled. What is the probability that the sum of the two numbers is a multiple of $5$?',
      choices: ['$\\frac{7}{64}$', '$\\frac{3}{32}$', '$\\frac{11}{64}$', '$\\frac{13}{64}$'],
      answer: 3,
      solution:
        'The sum runs from $2$ to $16$, so the multiples of $5$ available are $5$, $10$, and $15$, and no roll has two different sums, so the three cases are disjoint and their counts add. Sum $5$: $(1,4), (2,3), (3,2), (4,1)$ — four rolls. Sum $10$: $(2,8), (3,7), (4,6), (5,5), (6,4), (7,3), (8,2)$ — seven rolls. Sum $15$: $(7,8), (8,7)$ — two rolls. Together $4 + 7 + 2 = 13$ of the $64$ equally likely rolls, so $\\frac{13}{64}$ ✓. Sweeping the red die instead never mentions a sum total: for each red face, count the blue faces that finish a multiple of $5$ — red $1$ needs blue $4$; red $2$ needs $3$ or $8$; red $3$ needs $2$ or $7$; red $4$ needs $1$ or $6$; red $5$ needs $5$; red $6$ needs $4$; red $7$ needs $3$ or $8$; red $8$ needs $2$ or $7$. That is $1 + 2 + 2 + 2 + 1 + 1 + 2 + 2 = 13$ rolls ✓. KEEPING ONLY THE SUM OF $10$ gives $\\frac{7}{64}$ ✗. KEEPING ONLY THE OUTER CASES gives $\\frac{4 + 2}{64} = \\frac{3}{32}$ ✗. FORGETTING THAT $15$ IS ALSO A MULTIPLE OF $5$ gives $\\frac{4 + 7}{64} = \\frac{11}{64}$ ✗.',
    },
    {
      q: 'Seven cards numbered $1$ through $7$ are shuffled, and two of them are drawn at the same time, so every pair of cards is equally likely. What is the probability that the sum of the two numbers is a perfect square?',
      choices: ['$\\frac{1}{7}$', '$\\frac{4}{21}$', '$\\frac{1}{21}$', '$\\frac{9}{49}$'],
      answer: 1,
      solution:
        'Two different cards give a sum between $1 + 2 = 3$ and $6 + 7 = 13$, so the only perfect-square sums are $4$ and $9$, and a pair cannot have both sums, so the two cases are disjoint. Sum $4$: $\\{1,3\\}$. Sum $9$: $\\{2,7\\}, \\{3,6\\}, \\{4,5\\}$. That is $4$ favorable pairs out of $\\binom{7}{2} = 21$, so $\\frac{4}{21}$ ✓. Treating the draw as ordered gives an independent check on a different sample space: there are $7 \\cdot 6 = 42$ ordered ways to name a first and second card, and each favorable set shows up in $2$ orders, so $\\frac{4 \\cdot 2}{42} = \\frac{8}{42} = \\frac{4}{21}$ ✓. KEEPING ONLY THE SUM OF $9$ gives $\\frac{3}{21} = \\frac{1}{7}$ ✗. KEEPING ONLY THE SUM OF $4$ gives $\\frac{1}{21}$ ✗. ALLOWING THE SAME CARD TWICE AND COUNTING ORDER gives $49$ outcomes with $9$ favorable — the six ordered versions of the sum-$9$ pairs, the two ordered versions of $\\{1,3\\}$, and the impossible $(2,2)$ — for $\\frac{9}{49}$, but the two cards come out together and must differ ✗.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the sum of the two numbers is a perfect square or a perfect cube?',
      choices: ['$\\frac{1}{3}$', '$\\frac{7}{36}$', '$\\frac{5}{36}$', '$\\frac{2}{9}$'],
      answer: 0,
      solution:
        'The sum runs from $2$ to $12$. The perfect squares in that range are $4$ and $9$; the only perfect cube is $8$. No number is two of these at once, so the three sums are disjoint cases whose counts add: sum $4$ has $(1,3), (2,2), (3,1)$ — three rolls; sum $8$ has $(2,6), (3,5), (4,4), (5,3), (6,2)$ — five rolls; sum $9$ has $(3,6), (4,5), (5,4), (6,3)$ — four rolls. That is $3 + 5 + 4 = 12$ of the $36$ rolls, so $\\frac{12}{36} = \\frac{1}{3}$ ✓. Counting by the red die instead of by the sum agrees: red $1$ works only with blue $3$; red $2$ with blue $2$ or $6$; red $3$ with blue $1$, $5$, or $6$; red $4$ with blue $4$ or $5$; red $5$ with blue $3$ or $4$; red $6$ with blue $2$ or $3$. That is $1 + 2 + 3 + 2 + 2 + 2 = 12$ rolls ✓. KEEPING ONLY THE SQUARE SUMS gives $\\frac{7}{36}$ ✗. KEEPING ONLY THE CUBE SUM gives $\\frac{5}{36}$ ✗. COUNTING ONLY THE SUMS $4$ AND $8$ gives $\\frac{3 + 5}{36} = \\frac{2}{9}$ and forgets that $9$ is a square ✗.',
    },
  ],

  // slot 6 — an "at least one face" event overlapping a sum event.
  //          Lanes: two eight-sided dice, a 7 or sum 9 -> 21/64; three dice, a
  //          6 or a triple -> 4/9; derived: the base's overlap by itself -> 1/18.
  [
    {
      q: 'Two fair eight-sided dice, with faces numbered $1$ through $8$, one red and one blue, are rolled. What is the probability that at least one die shows a $7$ or the sum of the two numbers is $9$?',
      choices: ['$\\frac{23}{64}$', '$\\frac{21}{64}$', '$\\frac{15}{64}$', '$\\frac{19}{64}$'],
      answer: 1,
      solution:
        'At least one $7$ is easiest through its own complement: neither die is a $7$ in $7 \\cdot 7 = 49$ rolls, so at least one $7$ happens in $64 - 49 = 15$ rolls. The sum is $9$ in $8$ rolls, $(1,8)$ through $(8,1)$. Two rolls do both, $(2,7)$ and $(7,2)$, so the count is $15 + 8 - 2 = 21$ and the probability is $\\frac{21}{64}$ ✓. Splitting the event into disjoint blocks never counts a roll twice: take every roll with at least one $7$ ($15$ of them), then the sum-$9$ rolls that contain no $7$ — $(1,8), (3,6), (4,5), (5,4), (6,3), (8,1)$, six of them. That is $15 + 6 = 21$ rolls, so $\\frac{21}{64}$ ✓. ADDING $15 + 8$ AND NEVER SUBTRACTING gives $\\frac{23}{64}$ ✗. KEEPING ONLY THE ROLLS WITH A $7$ gives $\\frac{15}{64}$ ✗. REMOVING THE TWO SHARED ROLLS FROM BOTH GROUPS gives $15 + 8 - 4 = 19$ and $\\frac{19}{64}$, taking them away one time too many ✗.',
    },
    {
      q: 'Three standard dice — one red, one blue, and one green — are rolled. What is the probability that at least one die shows a $6$ or all three dice show the same number?',
      choices: ['$\\frac{97}{216}$', '$\\frac{1}{2}$', '$\\frac{91}{216}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution:
        'There are $6^3 = 216$ equally likely rolls. "At least one $6$" is counted through its complement: no die shows a $6$ in $5^3 = 125$ rolls, so at least one $6$ happens in $216 - 125 = 91$. All three match in $6$ rolls, $(1,1,1)$ through $(6,6,6)$. Exactly one roll, $(6,6,6)$, is in both groups, so the count is $91 + 6 - 1 = 96$ and the probability is $\\frac{96}{216} = \\frac{4}{9}$ ✓. A single complement handles both conditions at once: a roll fails only if it has no $6$ and its three numbers are not all equal. Rolls with no $6$ number $125$, and $5$ of those are triples ($(1,1,1)$ through $(5,5,5)$), so $125 - 5 = 120$ rolls fail and $216 - 120 = 96$ succeed, giving $\\frac{4}{9}$ ✓. ADDING $91 + 6$ AND NEVER SUBTRACTING gives $\\frac{97}{216}$ ✗. USING $3 \\cdot \\frac{1}{6} = \\frac{1}{2}$ FOR "AT LEAST ONE $6$" counts every roll with two or three sixes more than once ✗. KEEPING ONLY THE ROLLS WITH A $6$ gives $\\frac{91}{216}$ ✗.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that at least one die shows a $3$ and the sum of the two numbers is $4$?',
      choices: ['$\\frac{1}{12}$', '$\\frac{11}{36}$', '$\\frac{1}{18}$', '$\\frac{1}{3}$'],
      answer: 2,
      solution:
        'The word here is "and", so only rolls in both groups count. The sum is $4$ for $(1,3), (2,2), (3,1)$, and of those, $(1,3)$ and $(3,1)$ contain a $3$ while $(2,2)$ does not. That leaves $2$ of the $36$ rolls, so $\\frac{2}{36} = \\frac{1}{18}$ ✓. Starting from the $3$ instead of the sum agrees: if the red die is a $3$ the blue must be $1$ to reach a sum of $4$, and if the blue die is a $3$ the red must be $1$; those give the two rolls $(3,1)$ and $(1,3)$, and the roll $(3,3)$ counted in neither since its sum is $6$. So $\\frac{2}{36} = \\frac{1}{18}$ ✓. COUNTING EVERY SUM-$4$ ROLL gives $\\frac{3}{36} = \\frac{1}{12}$, including $(2,2)$, which shows no $3$ ✗. COUNTING EVERY ROLL WITH A $3$ gives $\\frac{11}{36}$, ignoring the sum ✗. ANSWERING THE "OR" QUESTION gives $\\frac{1}{3}$, which is the union this overlap was subtracted from, not the overlap ✗.',
    },
  ],

  // slot 7 — probabilities and counts given directly, overlap supplied.
  //          Lanes: two office machines -> 11/30; a class with two activities
  //          -> 5/6; reversed: solve the addition rule for the overlap -> 3/20.
  [
    {
      q: 'On a random workday the office printer jams with probability $\\frac{1}{5}$, the copier jams with probability $\\frac{1}{4}$, and both machines jam with probability $\\frac{1}{12}$. What is the probability that at least one of the two machines jams?',
      choices: ['$\\frac{11}{30}$', '$\\frac{9}{20}$', '$\\frac{2}{5}$', '$\\frac{17}{60}$'],
      answer: 0,
      solution:
        'Some days both machines jam, so the two events overlap and the addition rule needs its correction: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B) = \\frac{1}{5} + \\frac{1}{4} - \\frac{1}{12}$. Over sixtieths that is $\\frac{12 + 15 - 5}{60} = \\frac{22}{60} = \\frac{11}{30}$ ✓. Cutting the workdays into three disjoint kinds avoids the subtraction: printer only is $\\frac{12}{60} - \\frac{5}{60} = \\frac{7}{60}$, copier only is $\\frac{15}{60} - \\frac{5}{60} = \\frac{10}{60}$, and both is $\\frac{5}{60}$. These three cannot happen together, and together they are "at least one", so $\\frac{7 + 10 + 5}{60} = \\frac{22}{60} = \\frac{11}{30}$ ✓. ADDING AND NEVER SUBTRACTING gives $\\frac{12 + 15}{60} = \\frac{9}{20}$ and counts the both-jam days twice ✗. USING $\\frac{1}{5} \\cdot \\frac{1}{4} = \\frac{1}{20}$ AS THE OVERLAP gives $\\frac{12 + 15 - 3}{60} = \\frac{2}{5}$, but the problem gave the overlap as $\\frac{1}{12}$ and never said the machines were independent ✗. SUBTRACTING THE OVERLAP TWICE gives $\\frac{12 + 15 - 10}{60} = \\frac{17}{60}$ ✗.',
    },
    {
      q: 'In a class of $30$ students, $18$ play an instrument, $14$ play a sport, and $7$ do both. One student is chosen at random, every student equally likely. What is the probability that the student plays an instrument or a sport?',
      choices: ['$\\frac{3}{5}$', '$\\frac{7}{15}$', '$\\frac{5}{6}$', '$\\frac{7}{30}$'],
      answer: 2,
      solution:
        'The givens are counts, but the correction is the same one: adding $18 + 14 = 32$ counts each of the $7$ double-duty students twice, so the number who do at least one is $18 + 14 - 7 = 25$, and the probability is $\\frac{25}{30} = \\frac{5}{6}$ ✓. Chasing the students who do neither gives an independent check: $30 - 18 = 12$ students do not play an instrument, and of the $14$ sport players, $7$ also play an instrument, so $7$ play only a sport. That leaves $12 - 7 = 5$ students who do neither, so the answer is $1 - \\frac{5}{30} = \\frac{5}{6}$ ✓. SUBTRACTING THE OVERLAP FROM BOTH GROUPS leaves $11 + 7 = 18$ students and $\\frac{18}{30} = \\frac{3}{5}$, removing the shared students one time too many ✗. KEEPING ONLY THE SPORT PLAYERS gives $\\frac{14}{30} = \\frac{7}{15}$ ✗. ANSWERING WITH THE SHARED GROUP gives $\\frac{7}{30}$, the chance the student does both ✗.',
    },
    {
      q: 'On a random morning Tam’s train is late with probability $\\frac{2}{5}$, Uri’s train is late with probability $\\frac{3}{10}$, and the probability that at least one of the two trains is late is $\\frac{11}{20}$. What is the probability that both trains are late?',
      choices: ['$\\frac{3}{25}$', '$\\frac{3}{20}$', '$\\frac{7}{10}$', '$\\frac{1}{4}$'],
      answer: 1,
      solution:
        'The addition rule can be read backwards. From $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$ we get $P(A \\text{ and } B) = P(A) + P(B) - P(A \\text{ or } B) = \\frac{8}{20} + \\frac{6}{20} - \\frac{11}{20} = \\frac{3}{20}$ ✓. Building the morning out of its four disjoint kinds confirms it without rearranging any formula: write $x$ for the both-late probability. Then Tam only is $\\frac{8}{20} - x$, Uri only is $\\frac{6}{20} - x$, and neither is $1 - \\frac{11}{20} = \\frac{9}{20}$. Those four pieces make up every morning, so $\\left(\\frac{8}{20} - x\\right) + \\left(\\frac{6}{20} - x\\right) + x + \\frac{9}{20} = 1$, which simplifies to $\\frac{23}{20} - x = 1$ and $x = \\frac{3}{20}$ ✓. MULTIPLYING THE TWO PROBABILITIES gives $\\frac{2}{5} \\cdot \\frac{3}{10} = \\frac{3}{25}$, which would be the answer only if the two trains ran independently — and they do not, since independence would force the union to be $\\frac{7}{10} - \\frac{3}{25} = \\frac{29}{50}$, not $\\frac{11}{20}$ ✗. ADDING THE TWO LATENESS CHANCES gives $\\frac{2}{5} + \\frac{3}{10} = \\frac{7}{10}$ ✗. SUBTRACTING ONLY URI’S PROBABILITY gives $\\frac{11}{20} - \\frac{3}{10} = \\frac{1}{4}$ and leaves Tam out of the rearrangement ✗.',
    },
  ],

  // slot 8 — a head-count event overlapping a fixed-position event.
  //          Lanes: four coins, three heads or a fourth tails -> 11/16; ABC
  //          spinner, two A's or a first A -> 11/27; derived: the base's
  //          overlap by itself -> 1/4.
  [
    {
      q: 'Four fair coins are flipped in order, the flips independent. What is the probability that exactly three of them show heads or the fourth coin shows tails?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{11}{16}$', '$\\frac{5}{8}$'],
      answer: 2,
      solution:
        'There are $16$ equally likely sequences. Exactly three heads happens for HHHT, HHTH, HTHH, THHH — four sequences. The fourth coin shows tails in half of them, $8$ sequences. The single sequence HHHT is in both groups, so the count is $4 + 8 - 1 = 11$ and the probability is $\\frac{11}{16}$ ✓. Splitting on the fourth coin makes the groups disjoint from the start: if the fourth coin is tails, all $8$ such sequences already qualify; if the fourth coin is heads, the event needs exactly three heads overall, so exactly two heads among the first three — HHT, HTH, THH, three sequences. Those cases cannot overlap, so $8 + 3 = 11$ and $\\frac{11}{16}$ ✓. ADDING $4 + 8$ AND NEVER SUBTRACTING gives $\\frac{12}{16} = \\frac{3}{4}$ and counts HHHT twice ✗. KEEPING ONLY THE FOURTH-COIN-TAILS SEQUENCES gives $\\frac{8}{16} = \\frac{1}{2}$ ✗. REMOVING HHHT FROM BOTH GROUPS gives $4 + 8 - 2 = 10$ and $\\frac{5}{8}$ ✗.',
    },
    {
      q: 'A spinner with $3$ equal sections labeled A, B, and C is spun three times, the spins independent. What is the probability that exactly two of the spins land on A or the first spin lands on A?',
      choices: ['$\\frac{11}{27}$', '$\\frac{5}{9}$', '$\\frac{1}{3}$', '$\\frac{2}{9}$'],
      answer: 0,
      solution:
        'There are $3^3 = 27$ equally likely sequences of spins. Exactly two A’s: choose which two of the three spins are the A’s ($3$ ways) and let the remaining spin be B or C ($2$ ways), for $6$ sequences. First spin A: the other two spins are free, so $3 \\cdot 3 = 9$ sequences. Both at once means the first spin is A and exactly one of the last two is A, which is $2$ positions times $2$ choices for the non-A spin, or $4$ sequences. The count is $6 + 9 - 4 = 11$, so $\\frac{11}{27}$ ✓. Conditioning on the first spin keeps the cases apart: if the first spin is A, all $9$ such sequences already qualify. If the first spin is not A ($18$ sequences), the event requires exactly two A’s among the remaining two spins, so both must be A — that is $2$ sequences, one for each non-A first spin. Disjoint, so $9 + 2 = 11$ and $\\frac{11}{27}$ ✓. ADDING $6 + 9$ AND NEVER SUBTRACTING gives $\\frac{15}{27} = \\frac{5}{9}$ ✗. KEEPING ONLY THE FIRST-SPIN-A SEQUENCES gives $\\frac{9}{27} = \\frac{1}{3}$ ✗. KEEPING ONLY THE EXACTLY-TWO-A SEQUENCES gives $\\frac{6}{27} = \\frac{2}{9}$ ✗.',
    },
    {
      q: 'Three fair coins are flipped in order, the flips independent. What is the probability that exactly two of them show heads and the first coin shows heads?',
      choices: ['$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{8}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'This asks for "and", so only the sequences in both groups count. The exactly-two-heads sequences are HHT, HTH, and THH, and of those, HHT and HTH begin with heads. That is $2$ of the $8$ equally likely sequences, so $\\frac{2}{8} = \\frac{1}{4}$ ✓. Building the sequence in two independent stages agrees: the first coin must be heads, which has probability $\\frac{1}{2}$, and then exactly one of the remaining two coins must be heads, which happens for HT and TH — $2$ of $4$, or $\\frac{1}{2}$. The two stages involve different coins and so are independent: $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ ✓. ANSWERING THE "OR" QUESTION gives $\\frac{5}{8}$ ✗. COUNTING EVERY EXACTLY-TWO-HEADS SEQUENCE gives $\\frac{3}{8}$, including THH, which begins with tails ✗. KEEPING ONLY HHT gives $\\frac{1}{8}$ and forgets that HTH also qualifies ✗.',
    },
  ],

  // slot 9 — a gap event overlapping a sum event.
  //          Lanes: two eight-sided dice -> 5/16; unequal spinners -> 3/8;
  //          derived: the base's gap group with the overlap stripped -> 2/9.
  [
    {
      q: 'Two fair eight-sided dice, with faces numbered $1$ through $8$, one red and one blue, are rolled. What is the probability that the two numbers differ by exactly $1$ or that their sum is $9$?',
      choices: ['$\\frac{11}{32}$', '$\\frac{7}{32}$', '$\\frac{1}{8}$', '$\\frac{5}{16}$'],
      answer: 3,
      solution:
        'Numbers differing by $1$ come from the seven neighboring pairs $\\{1,2\\}$ through $\\{7,8\\}$, and each pair appears in two orders on the two colored dice, so $14$ rolls. The sum is $9$ in $8$ rolls, $(1,8)$ through $(8,1)$. A roll doing both needs two neighbors adding to $9$, which is only $\\{4,5\\}$, in two orders. The count is $14 + 8 - 2 = 20$, so $\\frac{20}{64} = \\frac{5}{16}$ ✓. Counting by the red die never mentions either group as a whole: red $r$ works with blue $r-1$, blue $r+1$, or blue $9-r$, keeping only values from $1$ to $8$ and listing each blue value once. Red $1$: blue $2$ or $8$ — two. Red $2$: $1, 3, 7$ — three. Red $3$: $2, 4, 6$ — three. Red $4$: $3, 5$, and $9-4=5$ repeats — two. Red $5$: $4, 6$, and $9-5=4$ repeats — two. Red $6$: $5, 7, 3$ — three. Red $7$: $6, 8, 2$ — three. Red $8$: $7, 1$ — two. That is $2+3+3+2+2+3+3+2 = 20$ rolls, so $\\frac{5}{16}$ ✓. ADDING $14 + 8$ AND NEVER SUBTRACTING gives $\\frac{22}{64} = \\frac{11}{32}$ ✗. KEEPING ONLY THE DIFFER-BY-ONE ROLLS gives $\\frac{14}{64} = \\frac{7}{32}$ ✗. KEEPING ONLY THE SUM-$9$ ROLLS gives $\\frac{8}{64} = \\frac{1}{8}$ ✗.',
    },
    {
      q: 'Ana spins a spinner with $6$ equal sectors numbered $1$ through $6$, and Ben spins a different spinner with $4$ equal sectors numbered $1$ through $4$. The two spins are independent, so all $24$ number pairs are equally likely. What is the probability that the two numbers differ by exactly $1$ or that their sum is $7$?',
      choices: ['$\\frac{11}{24}$', '$\\frac{3}{8}$', '$\\frac{7}{24}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution:
        'Write a pair as (Ana, Ben). Differing by exactly $1$: $(1,2), (2,1), (2,3), (3,2), (3,4), (4,3), (5,4)$ — seven pairs, and note the list is lopsided because Ben’s spinner stops at $4$. Sum $7$: $(3,4), (4,3), (5,2), (6,1)$ — four pairs. Two pairs, $(3,4)$ and $(4,3)$, are on both lists, so the count is $7 + 4 - 2 = 9$ and the probability is $\\frac{9}{24} = \\frac{3}{8}$ ✓. Conditioning on Ben’s spin gives four disjoint cases and no subtraction: if Ben spins $1$, Ana works with $2$ (differ) or $6$ (sum) — two values; Ben $2$: Ana $1$, $3$, or $5$ — three; Ben $3$: Ana $2$ or $4$, and the sum-$7$ partner $4$ is already listed — two; Ben $4$: Ana $3$ or $5$, and the sum-$7$ partner $3$ is already listed — two. That is $2 + 3 + 2 + 2 = 9$ pairs, so $\\frac{3}{8}$ ✓. ADDING $7 + 4$ AND NEVER SUBTRACTING gives $\\frac{11}{24}$ ✗. KEEPING ONLY THE DIFFER-BY-ONE PAIRS gives $\\frac{7}{24}$ ✗. KEEPING ONLY THE SUM-$7$ PAIRS gives $\\frac{4}{24} = \\frac{1}{6}$ ✗.',
    },
    {
      q: 'Two standard dice, one red and one blue, are rolled. What is the probability that the two numbers differ by exactly $1$ but their sum is not $7$?',
      choices: ['$\\frac{2}{9}$', '$\\frac{5}{18}$', '$\\frac{7}{18}$', '$\\frac{1}{18}$'],
      answer: 0,
      solution:
        'Numbers differing by $1$ come from the five neighboring pairs $\\{1,2\\}, \\{2,3\\}, \\{3,4\\}, \\{4,5\\}, \\{5,6\\}$, each in two orders, so $10$ rolls. Among those, the only neighbors adding to $7$ are $3$ and $4$, giving $(3,4)$ and $(4,3)$. Striking those leaves $10 - 2 = 8$ rolls, so $\\frac{8}{36} = \\frac{2}{9}$ ✓. Sweeping the red die and checking each sum directly agrees: red $1$ with blue $2$ (sum $3$) — one; red $2$ with blue $1$ or $3$ (sums $3$ and $5$) — two; red $3$ with blue $2$ (sum $5$), while blue $4$ makes $7$ — one; red $4$ with blue $5$ (sum $9$), while blue $3$ makes $7$ — one; red $5$ with blue $4$ or $6$ (sums $9$ and $11$) — two; red $6$ with blue $5$ (sum $11$) — one. That is $1+2+1+1+2+1 = 8$ rolls, so $\\frac{2}{9}$ ✓. KEEPING EVERY DIFFER-BY-ONE ROLL gives $\\frac{10}{36} = \\frac{5}{18}$ ✗. ANSWERING THE "OR" QUESTION gives $\\frac{7}{18}$ ✗. ANSWERING WITH THE TWO STRUCK ROLLS gives $\\frac{2}{36} = \\frac{1}{18}$ ✗.',
    },
  ],

  // slot 10 — two digit/letter conditions, both counted by complements.
  //           Lanes: three-digit, a 2 or all even -> 1/3; ABCD codes, an A or
  //           all different -> 43/64; derived: the base's two conditions both
  //           negated -> 32/45.
  [
    {
      q: 'A three-digit positive integer is chosen at random from $100$ through $999$, every integer equally likely. What is the probability that it contains the digit $2$ or that all three of its digits are even?',
      choices: ['$\\frac{88}{225}$', '$\\frac{7}{25}$', '$\\frac{1}{9}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution:
        'There are $900$ numbers. Count each group by its own complement. Numbers with no $2$: $8$ choices for the hundreds digit (not $0$, not $2$) and $9$ for each of the others, so $8 \\cdot 9 \\cdot 9 = 648$, leaving $900 - 648 = 252$ that contain a $2$. All digits even: $4$ choices for the hundreds digit ($2, 4, 6, 8$) and $5$ each for the other two ($0, 2, 4, 6, 8$), so $100$. The overlap is the all-even numbers that use a $2$: of the $100$, those avoiding $2$ number $3 \\cdot 4 \\cdot 4 = 48$, so $100 - 48 = 52$ overlap. The count is $252 + 100 - 52 = 300$ and the probability is $\\frac{300}{900} = \\frac{1}{3}$ ✓. One complement handles both conditions at once and never touches inclusion–exclusion: a number fails only if it contains no $2$ and its digits are not all even. Numbers with no $2$ number $648$, of which $48$ are all even, so $648 - 48 = 600$ fail. That leaves $900 - 600 = 300$, so $\\frac{1}{3}$ ✓. ADDING $252 + 100$ AND NEVER SUBTRACTING gives $\\frac{352}{900} = \\frac{88}{225}$ ✗. KEEPING ONLY THE NUMBERS WITH A $2$ gives $\\frac{252}{900} = \\frac{7}{25}$ ✗. KEEPING ONLY THE ALL-EVEN NUMBERS gives $\\frac{100}{900} = \\frac{1}{9}$ ✗.',
    },
    {
      q: 'A three-letter code is formed by choosing each letter independently and at random from A, B, C, and D, so all $64$ codes are equally likely. What is the probability that the code contains at least one A or that its three letters are all different?',
      choices: ['$\\frac{61}{64}$', '$\\frac{43}{64}$', '$\\frac{37}{64}$', '$\\frac{3}{8}$'],
      answer: 1,
      solution:
        'At least one A, by complement: codes with no A number $3^3 = 27$, so $64 - 27 = 37$ contain an A. All three letters different: $4 \\cdot 3 \\cdot 2 = 24$ codes. The overlap is the all-different codes that use an A: of the $24$, those built only from B, C, and D number $3! = 6$, so $24 - 6 = 18$ overlap. The count is $37 + 24 - 18 = 43$, so $\\frac{43}{64}$ ✓. A single complement gets there without ever adding the two groups: a code fails only if it has no A and its letters are not all different. Codes with no A number $27$, of which $6$ are all different, so $27 - 6 = 21$ fail, leaving $64 - 21 = 43$, or $\\frac{43}{64}$ ✓. ADDING $37 + 24$ AND NEVER SUBTRACTING gives $\\frac{61}{64}$ ✗. KEEPING ONLY THE CODES WITH AN A gives $\\frac{37}{64}$ ✗. KEEPING ONLY THE ALL-DIFFERENT CODES gives $\\frac{24}{64} = \\frac{3}{8}$ ✗.',
    },
    {
      q: 'A three-digit positive integer is chosen at random from $100$ through $999$, every integer equally likely. What is the probability that it contains no digit $5$ and its three digits are not all the same?',
      choices: ['$\\frac{32}{45}$', '$\\frac{18}{25}$', '$\\frac{71}{100}$', '$\\frac{13}{45}$'],
      answer: 0,
      solution:
        'Handle the two demands in order. Numbers with no digit $5$: $8$ choices for the hundreds digit (not $0$, not $5$) and $9$ for each of the others, so $8 \\cdot 9 \\cdot 9 = 648$. Among those, the ones with all three digits the same are $111, 222, 333, 444, 666, 777, 888, 999$ — eight of them, since $555$ was already excluded for containing a $5$. That leaves $648 - 8 = 640$ numbers and $\\frac{640}{900} = \\frac{32}{45}$ ✓. Building the number by its leading digit gives the same total another way: the hundreds digit can be any of the $8$ nonzero digits other than $5$, and for each such choice there are $9 \\cdot 9 = 81$ ways to fill the last two digits without a $5$, exactly one of which repeats the leading digit twice and makes all three the same. So each leading digit contributes $81 - 1 = 80$ numbers, and $8 \\cdot 80 = 640$, or $\\frac{32}{45}$ ✓. STOPPING AFTER THE DIGIT $5$ gives $\\frac{648}{900} = \\frac{18}{25}$ and keeps the eight repeated-digit numbers ✗. STRIKING ALL NINE REPEATED-DIGIT NUMBERS gives $\\frac{639}{900} = \\frac{71}{100}$, removing $555$ a second time although the no-$5$ rule had already thrown it out ✗. ANSWERING THE ORIGINAL "OR" QUESTION gives $\\frac{13}{45}$, the chance of containing a $5$ or having all three digits the same ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 8,
  sections: {
    '8.2': s82,
  },
}
