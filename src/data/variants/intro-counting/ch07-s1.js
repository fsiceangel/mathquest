// Counting chapter 7 — variations for §7.2 Basic Probability.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but counts different
//    objects, v3 reverses or extends the base question.
//  - Answer indices are derived from the base indices 0 2 1 3 0 2 3 1 2 0 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4.
//  - Every key was brute-forced in node before the stem was written: pen and
//    book and bead collections listed item by item, spinner sectors listed
//    sector by sector, die and card faces listed face by face, divisor counts
//    computed by trial division over the stated range, and every reversed item
//    solved by scanning the unknown over a wide range and confirming that one
//    value alone produces the stated probability. Every key matches its pin.
//    Pin deviations: none.
//  - This is the chapter where probability is introduced, so every solution
//    stays inside the chapter's tools: name the equally likely outcomes, count
//    the favorable ones, reduce. Each solution runs two genuinely independent
//    routes that each end ✓ — one a direct count of the favorable outcomes, the
//    other a complement, a ratio-of-parts argument, or a structural fact about
//    the objects. Route two never re-imports route one's number. Each wrong
//    choice is then named in CAPS, ending ✗, and every attribution is an
//    arithmetically true statement about that number.
//  - Conventions are settled in every stem: one item is drawn at random with
//    every item equally likely; dice are fair and every face equally likely;
//    spinner sectors are equal and every sector's label is given; letters go on
//    identical tiles, one letter per tile; "at least", "greater than", and
//    "exactly" are always spelled out.

// Slot 2 keeps a spinner in every variation. All three are drawn at the same
// scale — unit circle, view [-1.2, -1.2, 1.2, 1.2] — with the sector labels
// read clockwise from the top exactly as the stems describe them.

const spinnerColors10 = {
  w: 400,
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [0.5878, 0.809] },
    { t: 'seg', a: [0, 0], b: [0.9511, 0.309] },
    { t: 'seg', a: [0, 0], b: [0.9511, -0.309] },
    { t: 'seg', a: [0, 0], b: [0.5878, -0.809] },
    { t: 'seg', a: [0, 0], b: [0, -1] },
    { t: 'seg', a: [0, 0], b: [-0.5878, -0.809] },
    { t: 'seg', a: [0, 0], b: [-0.9511, -0.309] },
    { t: 'seg', a: [0, 0], b: [-0.9511, 0.309] },
    { t: 'seg', a: [0, 0], b: [-0.5878, 0.809] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.1916, 0.5897], text: 'red' },
    { t: 'label', p: [0.5016, 0.3645], text: 'green' },
    { t: 'label', p: [0.62, 0], text: 'red' },
    { t: 'label', p: [0.5016, -0.3645], text: 'blue' },
    { t: 'label', p: [0.1916, -0.5897], text: 'red' },
    { t: 'label', p: [-0.1916, -0.5897], text: 'green' },
    { t: 'label', p: [-0.5016, -0.3645], text: 'yellow' },
    { t: 'label', p: [-0.62, 0], text: 'red' },
    { t: 'label', p: [-0.5016, 0.3645], text: 'green' },
    { t: 'label', p: [-0.1916, 0.5897], text: 'blue' },
  ],
}

const spinnerShapes12 = {
  w: 400,
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [0.5, 0.866] },
    { t: 'seg', a: [0, 0], b: [0.866, 0.5] },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [0.866, -0.5] },
    { t: 'seg', a: [0, 0], b: [0.5, -0.866] },
    { t: 'seg', a: [0, 0], b: [0, -1] },
    { t: 'seg', a: [0, 0], b: [-0.5, -0.866] },
    { t: 'seg', a: [0, 0], b: [-0.866, -0.5] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.866, 0.5] },
    { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.1708, 0.6375], text: 'star' },
    { t: 'label', p: [0.4667, 0.4667], text: 'moon' },
    { t: 'label', p: [0.6375, 0.1708], text: 'sun' },
    { t: 'label', p: [0.6375, -0.1708], text: 'star' },
    { t: 'label', p: [0.4667, -0.4667], text: 'moon' },
    { t: 'label', p: [0.1708, -0.6375], text: 'star' },
    { t: 'label', p: [-0.1708, -0.6375], text: 'sun' },
    { t: 'label', p: [-0.4667, -0.4667], text: 'moon' },
    { t: 'label', p: [-0.6375, -0.1708], text: 'star' },
    { t: 'label', p: [-0.6375, 0.1708], text: 'sun' },
    { t: 'label', p: [-0.4667, 0.4667], text: 'star' },
    { t: 'label', p: [-0.1708, 0.6375], text: 'moon' },
  ],
}

const spinnerLetters8 = {
  w: 400,
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [0.7071, 0.7071] },
    { t: 'seg', a: [0, 0], b: [1, 0] },
    { t: 'seg', a: [0, 0], b: [0.7071, -0.7071] },
    { t: 'seg', a: [0, 0], b: [0, -1] },
    { t: 'seg', a: [0, 0], b: [-0.7071, -0.7071] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.7071, 0.7071] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.2488, 0.6005], text: 'A' },
    { t: 'label', p: [0.6005, 0.2488], text: 'B' },
    { t: 'label', p: [0.6005, -0.2488], text: 'A' },
    { t: 'label', p: [0.2488, -0.6005], text: 'C' },
    { t: 'label', p: [-0.2488, -0.6005], text: 'A' },
    { t: 'label', p: [-0.6005, -0.2488], text: 'B' },
    { t: 'label', p: [-0.6005, 0.2488], text: 'D' },
    { t: 'label', p: [-0.2488, 0.6005], text: 'A' },
  ],
}

const s72 = [
  // slot 1 — the "rest" of a collection: subtract the named groups, then reduce.
  //          Lanes: pens 6/4/rest -> 1/3; books 10/5/rest -> 3/8;
  //          reversed: a given probability plus a named group -> a missing count.
  [
    {
      q: 'A pencil case holds $15$ pens: $6$ are black, $4$ are purple, and the rest are orange. One pen is taken out at random, with every pen equally likely. What is the probability that it is orange?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Each pen is one equally likely outcome, so the case holds $15$ outcomes. The orange pens are the ones left over: $15 - 6 - 4 = 5$ of them, and $\\frac{5}{15} = \\frac{1}{3}$ ✓. The complement gives the same value without ever naming the orange count. A pen that is not orange is black or purple, and those events cover $\\frac{6}{15} = \\frac{2}{5}$ and $\\frac{4}{15}$ of the case, so the orange probability is $1 - \\frac{6}{15} - \\frac{4}{15} = \\frac{15 - 6 - 4}{15} = \\frac{5}{15} = \\frac{1}{3}$ ✓. COMPARING ORANGE PENS WITH THE OTHER PENS instead of with the whole case gives $\\frac{5}{10} = \\frac{1}{2}$, a ratio rather than a probability ✗. ANSWERING FOR THE BLACK PENS gives $\\frac{6}{15} = \\frac{2}{5}$ ✗. TAKING THE COMPLEMENT AT THE END gives $\\frac{10}{15} = \\frac{2}{3}$, the probability that the pen is not orange ✗.',
    },
    {
      q: 'A shelf holds $24$ books: $10$ are mysteries, $5$ are poetry collections, and the rest are atlases. One book is pulled off the shelf at random, with every book equally likely. What is the probability that it is an atlas?',
      choices: ['$\\frac{3}{5}$', '$\\frac{5}{24}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$'],
      answer: 3,
      solution:
        'Each book is one equally likely outcome, so there are $24$ outcomes. The atlases are what remain after the two named groups are removed: $24 - 10 - 5 = 9$ books, and $\\frac{9}{24} = \\frac{3}{8}$ ✓. Working in probabilities instead of counts agrees. A mystery has probability $\\frac{10}{24} = \\frac{5}{12}$ and a poetry collection has probability $\\frac{5}{24}$; every book is one of the three kinds, so the atlas probability is $1 - \\frac{5}{12} - \\frac{5}{24} = \\frac{24 - 10 - 5}{24} = \\frac{9}{24} = \\frac{3}{8}$ ✓. COMPARING ATLASES WITH THE OTHER BOOKS gives $\\frac{9}{15} = \\frac{3}{5}$, which measures atlases against the wrong total ✗. ANSWERING FOR THE POETRY COLLECTIONS gives $\\frac{5}{24}$ ✗. TAKING THE COMPLEMENT AT THE END gives $\\frac{15}{24} = \\frac{5}{8}$, the probability that the book is not an atlas ✗.',
    },
    {
      q: 'A box holds $30$ beads: some are silver, exactly $11$ are gold, and the rest are wooden. One bead is drawn at random, with every bead equally likely, and the probability that it is silver is $\\frac{2}{5}$. How many wooden beads are in the box?',
      choices: ['$12$', '$18$', '$7$', '$19$'],
      answer: 2,
      solution:
        'Read the probability backward: the silver beads are $\\frac{2}{5}$ of the $30$ beads, so there are $\\frac{2}{5} \\times 30 = 12$ of them. The three kinds fill the box, so the wooden beads number $30 - 12 - 11 = 7$ ✓. Counting from the other side agrees without using the silver count. A bead that is not silver has probability $1 - \\frac{2}{5} = \\frac{3}{5}$, and $\\frac{3}{5} \\times 30 = 18$ beads are not silver; those $18$ are the gold and wooden beads together, so the wooden ones number $18 - 11 = 7$ ✓. ANSWERING WITH THE SILVER COUNT gives $12$, which is what the probability was read off to find, not what was asked ✗. STOPPING AT THE NON-SILVER BEADS gives $18$, a group that still contains all $11$ gold beads ✗. SUBTRACTING ONLY THE GOLD BEADS gives $30 - 11 = 19$ and forgets the silver ones entirely ✗.',
    },
  ],

  // slot 2 — a spinner with unequal numbers of like sectors; the sectors are the
  //          outcomes, not the labels. Lanes: 10 colored sectors -> 2/5;
  //          12 shape sectors, complement -> 7/12; derived: base spinner, the
  //          letters that appear on exactly one sector -> 1/4.
  [
    {
      q: 'The spinner shown has $10$ equal sectors, each painted one color. Reading clockwise from the top, the colors are red, green, red, blue, red, green, yellow, red, green, blue — so $4$ sectors are red, $3$ are green, $2$ are blue, and $1$ is yellow. What is the probability that one spin lands on a sector that is green or yellow?',
      fig: spinnerColors10,
      choices: ['$\\frac{3}{10}$', '$\\frac{1}{2}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$'],
      answer: 3,
      solution:
        'The sectors are equal, so the $10$ sectors — not the $4$ colors — are the equally likely outcomes. The favorable sectors are the $3$ green ones and the $1$ yellow one, $4$ in all, and $\\frac{4}{10} = \\frac{2}{5}$ ✓. The complement gives the same answer from the sectors nobody counted. A spin fails only by landing red or blue, which covers $4 + 2 = 6$ sectors, so the probability of green or yellow is $1 - \\frac{6}{10} = \\frac{4}{10} = \\frac{2}{5}$ ✓. FORGETTING THE YELLOW SECTOR gives $\\frac{3}{10}$, the probability of green alone ✗. TREATING THE FOUR COLORS AS FOUR EQUALLY LIKELY OUTCOMES and taking two of them gives $\\frac{2}{4} = \\frac{1}{2}$, which pretends the one yellow sector is as wide as the four red ones ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{6}{10} = \\frac{3}{5}$, the probability of red or blue ✗.',
    },
    {
      q: 'The spinner shown has $12$ equal sectors, each stamped with one shape. Reading clockwise from the top, the shapes are star, moon, sun, star, moon, star, sun, moon, star, sun, star, moon — so $5$ sectors show a star, $4$ show a moon, and $3$ show a sun. What is the probability that one spin lands on a sector that does not show a star?',
      fig: spinnerShapes12,
      choices: ['$\\frac{5}{12}$', '$\\frac{7}{12}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'The $12$ equal sectors are the equally likely outcomes. Five of them show a star, so $12 - 5 = 7$ do not, giving $\\frac{7}{12}$, which is already in lowest terms ✓. Adding the two favorable shapes directly agrees. The sectors that are not stars are the $4$ moons and the $3$ suns, and those groups do not overlap because each sector carries one shape, so the count is $4 + 3 = 7$ and the probability is $\\frac{7}{12}$ ✓. ANSWERING THE OPPOSITE EVENT gives $\\frac{5}{12}$, the probability of a star ✗. COUNTING ONLY THE MOONS gives $\\frac{4}{12} = \\frac{1}{3}$ and leaves the suns out of a non-star event ✗. TREATING THE THREE SHAPES AS THREE EQUALLY LIKELY OUTCOMES and taking two of them gives $\\frac{2}{3}$, which pretends the three suns cover as much of the spinner as the five stars ✗.',
    },
    {
      q: 'The spinner shown has $8$ equal sectors, each labeled with a letter. Reading clockwise from the top, the letters are A, B, A, C, A, B, D, A. What is the probability that one spin lands on a sector whose letter appears on exactly one sector of the whole spinner?',
      fig: spinnerLetters8,
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{8}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Tally the letters first: A fills $4$ sectors, B fills $2$, C fills $1$, and D fills $1$, for $4 + 2 + 1 + 1 = 8$ sectors. Only C and D appear on exactly one sector, so $2$ of the $8$ equally likely sectors are favorable: $\\frac{2}{8} = \\frac{1}{4}$ ✓. The complement reaches the same value from the repeated letters. A spin fails when its letter appears more than once, which happens on the four A sectors and the two B sectors, $6$ sectors in all, so the probability is $1 - \\frac{6}{8} = \\frac{2}{8} = \\frac{1}{4}$ ✓. TREATING THE FOUR LETTERS AS FOUR EQUALLY LIKELY OUTCOMES and taking the two that appear once gives $\\frac{2}{4} = \\frac{1}{2}$, but a C sector is no wider than an A sector ✗. COUNTING ONLY THE C SECTOR gives $\\frac{1}{8}$ and drops D, which also appears exactly once ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{6}{8} = \\frac{3}{4}$, the probability of landing on an A or a B ✗.',
    },
  ],

  // slot 3 — a single roll or draw compared against a threshold.
  //          Lanes: d8 less than 6 -> 5/8; 14 cards at least 10 -> 5/14;
  //          reversed: an n-sided die with P(greater than 4) = 3/5 -> n = 10.
  [
    {
      q: 'A fair eight-sided die with faces numbered $1$ through $8$ is rolled once, with every face equally likely. What is the probability that the number showing is less than $6$?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$'],
      answer: 2,
      solution:
        'The eight faces are the equally likely outcomes. "Less than $6$" leaves out $6$ itself, so the favorable faces are $1, 2, 3, 4, 5$ — five of them — and the probability is $\\frac{5}{8}$ ✓. Counting the other side agrees. The faces that fail are $6, 7, 8$, three of them, so the probability of failing is $\\frac{3}{8}$ and the probability asked for is $1 - \\frac{3}{8} = \\frac{5}{8}$ ✓. READING "LESS THAN $6$" AS "AT MOST $6$" adds the face $6$ and gives $\\frac{6}{8} = \\frac{3}{4}$ ✗. READING IT AS "LESS THAN $5$" drops the face $5$ and gives $\\frac{4}{8} = \\frac{1}{2}$ ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{3}{8}$, the probability that the number is $6$ or more ✗.',
    },
    {
      q: 'Fourteen cards numbered $1$ through $14$ are shuffled, and one card is drawn at random with every card equally likely. What is the probability that the number on it is at least $10$?',
      choices: ['$\\frac{5}{14}$', '$\\frac{2}{7}$', '$\\frac{3}{7}$', '$\\frac{9}{14}$'],
      answer: 0,
      solution:
        'Each card is one equally likely outcome, so there are $14$ outcomes. "At least $10$" includes $10$ itself, so the favorable cards are $10, 11, 12, 13, 14$ — five cards — and the probability is $\\frac{5}{14}$, already in lowest terms ✓. Subtracting the small cards agrees. The cards below $10$ are $1$ through $9$, nine of them, so the probability asked for is $1 - \\frac{9}{14} = \\frac{5}{14}$ ✓. READING "AT LEAST $10$" AS "GREATER THAN $10$" drops the card $10$ and gives $\\frac{4}{14} = \\frac{2}{7}$ ✗. STARTING THE LIST AT $9$ adds a card that is below $10$ and gives $\\frac{6}{14} = \\frac{3}{7}$ ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{9}{14}$, the probability that the card is below $10$ ✗.',
    },
    {
      q: 'A fair $n$-sided die with faces numbered $1$ through $n$ is rolled once, with every face equally likely. The probability that the number showing is greater than $4$ is exactly $\\frac{3}{5}$. What is $n$?',
      choices: ['$5$', '$7$', '$8$', '$10$'],
      answer: 3,
      solution:
        'The faces greater than $4$ are $5, 6, \\ldots, n$, and there are $n - 4$ of them, so $\\frac{n-4}{n} = \\frac{3}{5}$. Cross-multiplying gives $5n - 20 = 3n$, so $2n = 20$ and $n = 10$; the check is $\\frac{6}{10} = \\frac{3}{5}$ ✓. The complement pins the same value with no equation in $n - 4$ at all. The faces that are $4$ or less are $1, 2, 3, 4$, always exactly $4$ of them, and they make up $1 - \\frac{3}{5} = \\frac{2}{5}$ of the die, so $\\frac{2}{5} n = 4$ and $n = 10$ ✓. READING THE DENOMINATOR AS THE NUMBER OF FACES gives $n = 5$, where only the face $5$ beats $4$ and the probability is $\\frac{1}{5}$ ✗. SETTING THE FAVORABLE COUNT EQUAL TO THE NUMERATOR gives $n - 4 = 3$ and $n = 7$, where the probability is $\\frac{3}{7}$ ✗. ASSUMING "GREATER THAN $4$" ALWAYS COVERS HALF THE FACES gives $n = 8$, where the probability is $\\frac{4}{8} = \\frac{1}{2}$ ✗.',
    },
  ],

  // slot 4 — the ends of the probability scale and a two-condition event.
  //          Lanes: certain event -> 1; even and prime -> 1/10;
  //          reversed: 9 green with P(not green) = 3/4 -> total 36.
  [
    {
      q: 'A bag holds $15$ tiles numbered $1$ through $15$, and one tile is drawn at random with every tile equally likely. What is the probability that the number on it is less than $16$?',
      choices: ['$1$', '$0$', '$\\frac{14}{15}$', '$\\frac{15}{16}$'],
      answer: 0,
      solution:
        'The $15$ tiles are the equally likely outcomes. The largest number in the bag is $15$, and $15 < 16$, so every single tile is favorable: $\\frac{15}{15} = 1$ ✓. The complement says the same thing from the other end. For the draw to fail, the tile would have to show $16$ or more, and no such tile exists, so that event has probability $\\frac{0}{15} = 0$ and the event asked about has probability $1 - 0 = 1$ ✓. A probability of $1$ marks an event that must happen. CONFUSING THE CERTAIN EVENT WITH THE IMPOSSIBLE ONE gives $0$, the probability that the tile shows $16$ or more ✗. READING THE BOUND AS "LESS THAN $15$" throws out the tile $15$ and gives $\\frac{14}{15}$ ✗. DIVIDING BY $16$ gives $\\frac{15}{16}$ and counts a sixteenth tile the bag does not contain ✗.',
    },
    {
      q: 'A spinner has $10$ equal sectors numbered $1$ through $10$. What is the probability that one spin lands on a number that is both even and prime?',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{5}$', '$\\frac{1}{10}$', '$\\frac{4}{5}$'],
      answer: 2,
      solution:
        'The $10$ equal sectors are the equally likely outcomes. The even sectors are $2, 4, 6, 8, 10$ and the prime sectors are $2, 3, 5, 7$; the only number on both lists is $2$, so the probability is $\\frac{1}{10}$ ✓. A structural argument reaches the same sector without comparing lists. Any even number larger than $2$ has $2$ as a divisor besides $1$ and itself, so it cannot be prime; that rules out $4, 6, 8, 10$ and leaves $2$ as the only even prime anywhere, let alone on this spinner, so $1$ of the $10$ sectors is favorable ✓. ANSWERING FOR THE EVEN SECTORS ALONE gives $\\frac{5}{10} = \\frac{1}{2}$ ✗. ANSWERING FOR THE PRIME SECTORS ALONE gives $\\frac{4}{10} = \\frac{2}{5}$ ✗. READING "BOTH" AS "EITHER" gives the $8$ sectors $2, 3, 4, 5, 6, 7, 8, 10$ and $\\frac{8}{10} = \\frac{4}{5}$ ✗.',
    },
    {
      q: 'A box holds $9$ green marbles and some blue marbles, and nothing else. One marble is drawn at random, with every marble equally likely, and the probability that it is not green is $\\frac{3}{4}$. How many marbles are in the box altogether?',
      choices: ['$12$', '$36$', '$27$', '$3$'],
      answer: 1,
      solution:
        'If a marble fails to be green with probability $\\frac{3}{4}$, then it is green with probability $1 - \\frac{3}{4} = \\frac{1}{4}$. So the $9$ green marbles are one quarter of the box, and the box holds $4 \\times 9 = 36$ marbles ✓. A ratio argument avoids the total until the last step. Three quarters blue against one quarter green means $3$ blue marbles for every green one, so the $9$ green marbles come with $3 \\times 9 = 27$ blue ones, and the box holds $9 + 27 = 36$ ✓. GIVING THE $\\frac{3}{4}$ TO THE GREEN MARBLES makes $9$ three quarters of the box and gives $12$, a box in which green would be far too common ✗. ANSWERING WITH THE BLUE COUNT gives $27$, one step short of the total ✗. SOLVING $\\frac{9}{9+b} = \\frac{3}{4}$ FOR THE BLUE MARBLES gives $b = 3$, the same mix-up reported as a color count ✗.',
    },
  ],

  // slot 5 — read a probability backward over a known total, then answer for
  //          the other group. Lanes: 28 fruit, apples 3/7 -> 16 pears;
  //          36 songs, jazz 7/12 -> 15 others; reversed: a known count of the
  //          other color plus P(red) = 4/7 -> a total of 42.
  [
    {
      q: 'A basket holds $28$ pieces of fruit, some green apples and the rest yellow pears. One piece is taken at random, with every piece equally likely, and the probability that it is a green apple is $\\frac{3}{7}$. How many yellow pears are in the basket?',
      choices: ['$12$', '$16$', '$4$', '$24$'],
      answer: 1,
      solution:
        'The apples are $\\frac{3}{7}$ of the basket, and $\\frac{3}{7} \\times 28 = 12$, so $12$ pieces are green apples. Everything else is a pear: $28 - 12 = 16$ ✓. Working with the pears from the start agrees. Every piece is an apple or a pear, so a pear has probability $1 - \\frac{3}{7} = \\frac{4}{7}$, and $\\frac{4}{7} \\times 28 = 16$ pears ✓. ANSWERING WITH THE APPLE COUNT gives $12$, the number the probability was read off to find rather than the number asked for ✗. STOPPING AT ONE SHARE gives $28 \\div 7 = 4$, the size of a single seventh of the basket ✗. TAKING ONLY ONE SEVENTH TO BE APPLES leaves $28 - 4 = 24$ pears, which would make the apple probability $\\frac{1}{7}$ ✗.',
    },
    {
      q: 'A playlist has $36$ songs, some by a jazz band and the rest by other performers. One song is played at random, with every song equally likely, and the probability that it is by the jazz band is $\\frac{7}{12}$. How many of the songs are not by the jazz band?',
      choices: ['$21$', '$3$', '$29$', '$15$'],
      answer: 3,
      solution:
        'The jazz songs are $\\frac{7}{12}$ of the playlist, and $\\frac{7}{12} \\times 36 = 21$ of them. The rest of the playlist is $36 - 21 = 15$ songs ✓. Taking the complement first agrees. A song not by the jazz band has probability $1 - \\frac{7}{12} = \\frac{5}{12}$, and $\\frac{5}{12} \\times 36 = 15$ songs ✓. ANSWERING WITH THE JAZZ COUNT gives $21$, which is the other half of the split ✗. STOPPING AT ONE SHARE gives $36 \\div 12 = 3$, the size of a single twelfth of the playlist ✗. TREATING THE NUMERATOR AS A COUNT of jazz songs gives $36 - 7 = 29$, which would make the jazz probability $\\frac{7}{36}$ ✗.',
    },
    {
      q: 'A box holds red chips and white chips and nothing else. There are $18$ white chips, and one chip is drawn at random with every chip equally likely; the probability of drawing a red chip is $\\frac{4}{7}$. How many chips are in the box altogether?',
      choices: ['$24$', '$22$', '$42$', '$6$'],
      answer: 2,
      solution:
        'A chip that is not red is white, so a white chip has probability $1 - \\frac{4}{7} = \\frac{3}{7}$. The $18$ white chips are therefore three sevenths of the box, one seventh is $18 \\div 3 = 6$ chips, and the whole box holds $7 \\times 6 = 42$ ✓. A ratio argument agrees without ever naming a seventh. Four sevenths red against three sevenths white means $4$ red chips for every $3$ white ones; the $18$ white chips form $6$ groups of $3$, so they come with $6 \\times 4 = 24$ red chips, and $18 + 24 = 42$ ✓. ANSWERING WITH THE RED COUNT gives $24$, one step short of the total ✗. TREATING THE NUMERATOR AS A COUNT of red chips gives a box of $18 + 4 = 22$, in which red would have probability $\\frac{4}{22} = \\frac{2}{11}$ ✗. STOPPING AT ONE SHARE gives $6$, the size of a single seventh of the box ✗.',
    },
  ],

  // slot 6 — one group's size is known, the other group's probability is known.
  //          Lanes: 10 black gloves, white 3/8 -> 6; 21 novels, comics 2/5 -> 14;
  //          derived: tokens added to the jar before the probability is read.
  [
    {
      q: 'A drawer holds $10$ black gloves and some white gloves, and nothing else. One glove is pulled out at random, with every glove equally likely, and the probability that it is white is $\\frac{3}{8}$. How many white gloves are in the drawer?',
      choices: ['$16$', '$8$', '$30$', '$6$'],
      answer: 3,
      solution:
        'Let $w$ be the number of white gloves. The drawer then holds $10 + w$ gloves, so $\\frac{w}{10+w} = \\frac{3}{8}$. Cross-multiplying gives $8w = 30 + 3w$, so $5w = 30$ and $w = 6$; the check is $\\frac{6}{16} = \\frac{3}{8}$ ✓. Counting in eighths avoids the equation. If white gloves are $\\frac{3}{8}$ of the drawer, black gloves are $\\frac{5}{8}$ of it, and those five eighths are the $10$ black gloves, so one eighth is $10 \\div 5 = 2$ gloves; the white gloves take three eighths, which is $3 \\times 2 = 6$ ✓. ANSWERING WITH THE TOTAL gives $16$, the number of gloves in the drawer rather than the number of white ones ✗. SCALING THE $3 : 5$ WHITE-TO-BLACK RATIO BY ADDING $5$ TO EACH PART instead of doubling turns $3 : 5$ into $8 : 10$ and gives $8$, but $8$ white of $18$ gloves is $\\frac{4}{9}$ ✗. CROSS-MULTIPLYING $3 \\times 10$ AND NEVER DIVIDING gives $30$, and $30$ white of $40$ gloves is $\\frac{3}{4}$ ✗.',
    },
    {
      q: 'A shelf holds $21$ novels and some comics, and nothing else. One book is chosen at random, with every book equally likely, and the probability that it is a comic is $\\frac{2}{5}$. How many comics are on the shelf?',
      choices: ['$35$', '$14$', '$20$', '$42$'],
      answer: 1,
      solution:
        'Let $c$ be the number of comics, so the shelf holds $21 + c$ books and $\\frac{c}{21+c} = \\frac{2}{5}$. Cross-multiplying gives $5c = 42 + 2c$, so $3c = 42$ and $c = 14$; the check is $\\frac{14}{35} = \\frac{2}{5}$ ✓. Counting in fifths avoids the equation. Comics are $\\frac{2}{5}$ of the shelf, so novels are $\\frac{3}{5}$ of it, and those three fifths are the $21$ novels; one fifth is $21 \\div 3 = 7$ books, and the comics take two fifths, which is $2 \\times 7 = 14$ ✓. ANSWERING WITH THE TOTAL gives $35$, the number of books on the shelf rather than the number of comics ✗. SCALING THE $2 : 3$ COMIC-TO-NOVEL RATIO BY ADDING $18$ TO EACH PART gives $20$, but $20$ comics of $41$ books is $\\frac{20}{41}$ ✗. CROSS-MULTIPLYING $2 \\times 21$ AND NEVER DIVIDING gives $42$, and $42$ comics of $63$ books is $\\frac{2}{3}$ ✗.',
    },
    {
      q: 'A bag holds $4$ green tokens and some yellow tokens, and nothing else. After $6$ more yellow tokens are dropped in, a token drawn at random from the bag is yellow with probability $\\frac{5}{7}$, with every token equally likely. How many yellow tokens were in the bag before the $6$ were added?',
      choices: ['$4$', '$10$', '$14$', '$25$'],
      answer: 0,
      solution:
        'Let $y$ be the number of yellow tokens at the start. Afterward the bag holds $y + 6$ yellow tokens among $4 + y + 6 = 10 + y$ tokens, so $\\frac{y+6}{10+y} = \\frac{5}{7}$. Cross-multiplying gives $7y + 42 = 50 + 5y$, so $2y = 8$ and $y = 4$; the check is $\\frac{10}{14} = \\frac{5}{7}$ ✓. Watching the green tokens instead settles it without an equation in $y + 6$. The $4$ green tokens are never touched, and afterward they make up $1 - \\frac{5}{7} = \\frac{2}{7}$ of the bag, so the bag then holds $4 \\div \\frac{2}{7} = 14$ tokens. Before the drop it held $14 - 6 = 8$ tokens, $4$ of them green, so $4$ were yellow ✓. ANSWERING FOR THE WRONG MOMENT gives $10$, the number of yellow tokens after the six are added ✗. ANSWERING WITH THE NEW TOTAL gives $14$, the size of the bag afterward ✗. PUTTING THE SIX NEW TOKENS IN THE TOTAL BUT NOT IN THE YELLOW COUNT gives $\\frac{y}{10+y} = \\frac{5}{7}$ and $y = 25$, a bag in which yellow would end up at $\\frac{31}{35}$ ✗.',
    },
  ],

  // slot 7 — tiles or cards carrying labels, where identical labels are still
  //          separate outcomes. Lanes: BASKETBALL vowels -> 3/10; month names
  //          beginning with J -> 1/4; derived: COMMITTEE letters that appear
  //          exactly once -> 1/3.
  [
    {
      q: 'The $10$ letters of the word BASKETBALL are written on identical tiles, one letter per tile, and one tile is drawn at random with every tile equally likely. What is the probability that it shows a vowel?',
      choices: ['$\\frac{3}{10}$', '$\\frac{1}{5}$', '$\\frac{7}{10}$', '$\\frac{2}{7}$'],
      answer: 0,
      solution:
        'Each tile is one outcome, so there are $10$ equally likely outcomes: B, A, S, K, E, T, B, A, L, L. The vowel tiles are A, E, and the second A — three tiles, because the two A tiles are separate pieces even though they carry the same letter — so the probability is $\\frac{3}{10}$ ✓. Counting the consonants agrees. The consonant tiles are B, S, K, T, B, L, L, seven of them, so the vowel probability is $1 - \\frac{7}{10} = \\frac{3}{10}$ ✓. COUNTING EACH DIFFERENT VOWEL ONCE gives $\\frac{2}{10} = \\frac{1}{5}$ and treats the two A tiles as one ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{7}{10}$, the probability of a consonant ✗. USING THE $7$ DIFFERENT LETTERS B, A, S, K, E, T, L AS THE OUTCOMES gives $\\frac{2}{7}$, but the tiles in the bag are not equally split among those letters ✗.',
    },
    {
      q: 'The names of the $12$ months of the year are written on identical cards, one name per card, and one card is drawn at random with every card equally likely. What is the probability that the month’s name begins with the letter J?',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$'],
      answer: 2,
      solution:
        'Each card is one equally likely outcome, so there are $12$ outcomes. The month names that begin with J are January, June, and July — three of them — so the probability is $\\frac{3}{12} = \\frac{1}{4}$ ✓. Listing the other side agrees. The months whose names begin with some other letter are February, March, April, May, August, September, October, and November, together with December: nine cards, so the probability asked for is $1 - \\frac{9}{12} = \\frac{3}{12} = \\frac{1}{4}$ ✓. COUNTING JANUARY ALONE gives $\\frac{1}{12}$ ✗. MISSING ONE OF THE LOOK-ALIKE PAIR June AND July gives $\\frac{2}{12} = \\frac{1}{6}$ ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{9}{12} = \\frac{3}{4}$, the probability that the name begins with some other letter ✗.',
    },
    {
      q: 'The $9$ letters of the word COMMITTEE are written on identical tiles, one letter per tile, and one tile is drawn at random with every tile equally likely. What is the probability that it shows a letter that appears exactly once in the word?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{4}{9}$'],
      answer: 1,
      solution:
        'Tally the word first: C appears once, O once, M twice, I once, T twice, E twice, which accounts for $1 + 1 + 2 + 1 + 2 + 2 = 9$ tiles. The letters appearing exactly once are C, O, and I, so $3$ of the $9$ equally likely tiles are favorable: $\\frac{3}{9} = \\frac{1}{3}$ ✓. The complement agrees from the repeated letters. The repeated letters M, T, and E carry $2 + 2 + 2 = 6$ tiles between them, so the probability of drawing a one-time letter is $1 - \\frac{6}{9} = \\frac{3}{9} = \\frac{1}{3}$ ✓. USING THE $6$ DIFFERENT LETTERS AS THE OUTCOMES gives $\\frac{3}{6} = \\frac{1}{2}$, but a bag holding one C and two E tiles does not favor the six letters equally ✗. ANSWERING THE OPPOSITE EVENT gives $\\frac{6}{9} = \\frac{2}{3}$, the probability of a repeated letter ✗. COUNTING THE VOWEL TILES O, I, E, E gives $\\frac{4}{9}$, which answers a different question ✗.',
    },
  ],

  // slot 8 — divisibility over a range, with overlaps handled carefully.
  //          Lanes: 1-60 exactly one of 6 and 10 -> 1/5; 1-45 multiple of 3 but
  //          not 4 -> 4/15; derived: 1-50 divisible by neither 4 nor 6 -> 17/25.
  [
    {
      q: 'An integer is chosen at random from $1$ to $60$, inclusive, with every integer equally likely. What is the probability that it is divisible by exactly one of the numbers $6$ and $10$?',
      choices: ['$\\frac{7}{30}$', '$\\frac{1}{30}$', '$\\frac{1}{5}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'There are $60$ equally likely integers. From $1$ to $60$ there are $60 \\div 6 = 10$ multiples of $6$ and $60 \\div 10 = 6$ multiples of $10$, and the integers on both lists are the multiples of $30$, namely $30$ and $60$, so $2$ of them. "Exactly one" throws that overlap out of both lists: $(10 - 2) + (6 - 2) = 12$ integers, and $\\frac{12}{60} = \\frac{1}{5}$ ✓. Writing the two lists out agrees. The multiples of $6$ that are not multiples of $10$ are $6, 12, 18, 24, 36, 42, 48, 54$, and the multiples of $10$ that are not multiples of $6$ are $10, 20, 40, 50$; that is $8 + 4 = 12$ integers out of $60$, so the probability is $\\frac{1}{5}$ ✓. SUBTRACTING THE OVERLAP ONLY ONCE gives $10 + 6 - 2 = 14$ integers and $\\frac{14}{60} = \\frac{7}{30}$, the probability of being divisible by $6$ or $10$ ✗. COUNTING THE OVERLAP ITSELF gives $\\frac{2}{60} = \\frac{1}{30}$, the probability of being divisible by both ✗. COUNTING ONLY THE MULTIPLES OF $6$ gives $\\frac{10}{60} = \\frac{1}{6}$ and ignores the multiples of $10$ altogether ✗.',
    },
    {
      q: 'A ticket is drawn at random from tickets numbered $1$ through $45$, with every ticket equally likely. What is the probability that the number on it is a multiple of $3$ but not a multiple of $4$?',
      choices: ['$\\frac{4}{15}$', '$\\frac{1}{3}$', '$\\frac{1}{15}$', '$\\frac{4}{45}$'],
      answer: 0,
      solution:
        'There are $45$ equally likely tickets. The multiples of $3$ number $45 \\div 3 = 15$. A number divisible by both $3$ and $4$ is divisible by $12$, and the multiples of $12$ up to $45$ are $12, 24, 36$ — three of them — so the tickets that qualify number $15 - 3 = 12$, and $\\frac{12}{45} = \\frac{4}{15}$ ✓. Sweeping the range in blocks of $12$ agrees. Among any $12$ consecutive integers exactly $4$ are multiples of $3$ and exactly one of those is also a multiple of $12$, so $3$ per block qualify; the tickets $1$ through $36$ hold three such blocks and contribute $9$, and among the remaining tickets $37$ through $45$ the multiples of $3$ are $39, 42, 45$, none of them a multiple of $4$, so all three qualify. That is $9 + 3 = 12$ tickets, or $\\frac{4}{15}$ ✓. FORGETTING THE EXCLUSION gives $\\frac{15}{45} = \\frac{1}{3}$, the probability of any multiple of $3$ ✗. ANSWERING WITH THE EXCLUDED TICKETS gives $\\frac{3}{45} = \\frac{1}{15}$, the probability of a multiple of $12$ ✗. SUBTRACTING ALL $11$ MULTIPLES OF $4$ instead of only the three shared with the multiples of $3$ gives $15 - 11 = 4$ and $\\frac{4}{45}$ ✗.',
    },
    {
      q: 'An integer is chosen at random from $1$ to $50$, inclusive, with every integer equally likely. What is the probability that it is divisible by neither $4$ nor $6$?',
      choices: ['$\\frac{8}{25}$', '$\\frac{3}{5}$', '$\\frac{19}{25}$', '$\\frac{17}{25}$'],
      answer: 3,
      solution:
        'There are $50$ equally likely integers. From $1$ to $50$ there are $12$ multiples of $4$ and $8$ multiples of $6$, and the $4$ multiples of $12$ sit on both lists, so $12 + 8 - 4 = 16$ integers are divisible by $4$ or by $6$. The rest are divisible by neither: $50 - 16 = 34$, and $\\frac{34}{50} = \\frac{17}{25}$ ✓. Sweeping in blocks of $12$ counts the survivors directly. Among any $12$ consecutive integers the ones divisible by $4$ or $6$ sit in $4$ positions, leaving $8$ clean, so $1$ through $48$ is four blocks and contributes $4 \\times 8 = 32$ clean integers; of the two left over, $49$ and $50$, neither is divisible by $4$ or $6$, so $32 + 2 = 34$ integers survive and the probability is $\\frac{17}{25}$ ✓. ANSWERING THE OPPOSITE EVENT gives $\\frac{16}{50} = \\frac{8}{25}$, the probability of being divisible by $4$ or $6$ ✗. SUBTRACTING BOTH COUNTS WITHOUT RESTORING THE OVERLAP gives $50 - (12 + 8) = 30$ and $\\frac{30}{50} = \\frac{3}{5}$, which punishes the multiples of $12$ twice ✗. THROWING OUT ONLY THE MULTIPLES OF $4$ gives $50 - 12 = 38$ and $\\frac{38}{50} = \\frac{19}{25}$ ✗.',
    },
  ],

  // slot 9 — divisor counts as the event. Lanes: 1-30 odd divisor count -> 1/6;
  //          1-24 exactly four divisors -> 7/24; derived: 1-20 exactly two
  //          divisors -> 2/5.
  [
    {
      q: 'The integers from $1$ to $30$ are written on $30$ cards, one number per card, and one card is drawn at random with every card equally likely. What is the probability that the number drawn has an odd number of positive divisors?',
      choices: ['$\\frac{2}{15}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$'],
      answer: 3,
      solution:
        'Divisors come in pairs: whenever $d$ divides $n$, so does $\\frac{n}{d}$. The pairing accounts for every divisor, so the count is even unless some pair collapses, which happens only when $d = \\frac{n}{d}$ — that is, when $n$ is a perfect square. The perfect squares from $1$ to $30$ are $1, 4, 9, 16, 25$, five cards, so the probability is $\\frac{5}{30} = \\frac{1}{6}$ ✓. Prime factorization reaches the same list independently. If $n = 2^{a} 3^{b} 5^{c} \\cdots$, then $n$ has $(a+1)(b+1)(c+1)\\cdots$ divisors, and a product of whole numbers is odd only when every factor is odd, so every exponent must be even and $n$ must be a square. Since $6^2 = 36$ is past the top card, the squares available are $1^2$ through $5^2$, again five cards and $\\frac{1}{6}$ ✓. DROPPING $1$ FROM THE LIST OF SQUARES gives $\\frac{4}{30} = \\frac{2}{15}$, but $1$ has exactly one divisor, an odd count ✗. COUNTING THE PRIMES gives the ten cards $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ and $\\frac{10}{30} = \\frac{1}{3}$, but those have exactly two divisors, an even count ✗. ASSUMING ODD AND EVEN DIVISOR COUNTS SPLIT THE CARDS EVENLY gives $\\frac{1}{2}$ ✗.',
    },
    {
      q: 'The integers from $1$ to $24$ are written on $24$ cards, one number per card, and one card is drawn at random with every card equally likely. What is the probability that the number drawn has exactly $4$ positive divisors?',
      choices: ['$\\frac{1}{4}$', '$\\frac{7}{24}$', '$\\frac{3}{8}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution:
        'A number with exactly $4$ divisors has one of two shapes. If it is the product of two different primes, $n = pq$, its divisors are $1, p, q, pq$; if it is a prime cubed, $n = p^{3}$, its divisors are $1, p, p^{2}, p^{3}$. Up to $24$ the products of two different primes are $6, 10, 14, 15, 21, 22$, and the only cube of a prime is $8$, since $27$ is past the top card. That is $6 + 1 = 7$ cards, so the probability is $\\frac{7}{24}$ ✓. Listing every card and counting its divisors agrees. The divisor counts of $1$ through $24$ run $1, 2, 2, 3, 2, 4, 2, 4, 3, 4, 2, 6, 2, 4, 4, 5, 2, 6, 2, 6, 4, 4, 2, 8$, and a $4$ shows up at $6, 8, 10, 14, 15, 21, 22$ — seven cards out of $24$ ✓. LISTING ONLY THE PRODUCTS OF TWO DIFFERENT PRIMES gives $\\frac{6}{24} = \\frac{1}{4}$ and forgets $8 = 2^{3}$ ✗. COUNTING THE PRIMES gives the nine cards $2, 3, 5, 7, 11, 13, 17, 19, 23$ and $\\frac{9}{24} = \\frac{3}{8}$, but those have exactly two divisors ✗. COUNTING THE PERFECT SQUARES $1, 4, 9, 16$ gives $\\frac{4}{24} = \\frac{1}{6}$, the cards with an odd number of divisors ✗.',
    },
    {
      q: 'The integers from $1$ to $20$ are written on $20$ cards, one number per card, and one card is drawn at random with every card equally likely. What is the probability that the number drawn has exactly two positive divisors?',
      choices: ['$\\frac{2}{5}$', '$\\frac{9}{20}$', '$\\frac{1}{5}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'A number with exactly two positive divisors has $1$ and itself and nothing else, which is what it means to be prime. The primes from $1$ to $20$ are $2, 3, 5, 7, 11, 13, 17, 19$, eight cards, so the probability is $\\frac{8}{20} = \\frac{2}{5}$ ✓. Striking out the cards that fail agrees. The card $1$ has a single divisor, and the composite cards $4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20$ each have at least three, so $1 + 11 = 12$ cards fail and $20 - 12 = 8$ survive, giving $\\frac{8}{20} = \\frac{2}{5}$ ✓. COUNTING THE CARD $1$ AS PRIME gives $\\frac{9}{20}$, but $1$ has exactly one divisor, not two ✗. COUNTING THE PERFECT SQUARES $1, 4, 9, 16$ gives $\\frac{4}{20} = \\frac{1}{5}$, the cards with an odd number of divisors ✗. COUNTING THE ODD NUMBERS gives $\\frac{10}{20} = \\frac{1}{2}$, which keeps $1, 9, 15$ and throws out the prime $2$ ✗.',
    },
  ],

  // slot 10 — two conditions on the same collection, or one condition after a
  //           change. Lanes: beads, add 3 then remove 3 -> 33; coins, a known
  //           probability plus an addition -> 45; reversed: how many chips to
  //           add to reach a target probability -> 15.
  [
    {
      q: 'A jar holds only white beads and black beads. If $3$ more white beads were dropped in, the probability of drawing a white bead at random would be $\\frac{1}{2}$; if instead $3$ white beads were taken out, that probability would be $\\frac{2}{5}$. How many beads are in the jar now?',
      choices: ['$36$', '$33$', '$30$', '$15$'],
      answer: 1,
      solution:
        'Let the jar hold $w$ white beads and $t$ beads in all. Dropping in $3$ white beads gives $\\frac{w+3}{t+3} = \\frac{1}{2}$, so $2w + 6 = t + 3$ and $t = 2w + 3$. Taking out $3$ white beads gives $\\frac{w-3}{t-3} = \\frac{2}{5}$, so $5w - 15 = 2t - 6$ and $2t = 5w - 9$. Substituting the first into the second gives $2(2w+3) = 5w - 9$, so $4w + 6 = 5w - 9$ and $w = 15$, hence $t = 33$ ✓. Working with the two colors instead of the total agrees. Let there be $w$ white and $b$ black beads. After $3$ white beads are added the two colors are equal in number, so $w + 3 = b$. After $3$ white beads are removed the white beads are $2$ parts against $3$ parts black, so $3(w-3) = 2b$, and substituting $b = w + 3$ gives $3w - 9 = 2w + 6$, so $w = 15$ and $b = 18$, for $15 + 18 = 33$ beads. The check runs $\\frac{18}{36} = \\frac{1}{2}$ and $\\frac{12}{30} = \\frac{2}{5}$ ✓. ANSWERING FOR THE JAR AFTER THE ADDITION gives $36$ ✗. ANSWERING FOR THE JAR AFTER THE REMOVAL gives $30$ ✗. ANSWERING WITH THE WHITE BEADS gives $15$, a color count rather than the size of the jar ✗.',
    },
    {
      q: 'A jar holds only nickels and dimes, and the probability that a coin chosen at random is a dime is $\\frac{2}{5}$. If $9$ more dimes were added to the jar, that probability would become $\\frac{1}{2}$. How many coins are in the jar now?',
      choices: ['$54$', '$18$', '$27$', '$45$'],
      answer: 3,
      solution:
        'Let the jar hold $t$ coins now, $d$ of them dimes. The first fact gives $d = \\frac{2}{5} t$. Adding $9$ dimes gives $\\frac{d+9}{t+9} = \\frac{1}{2}$, so $2d + 18 = t + 9$. Substituting yields $\\frac{4}{5} t + 18 = t + 9$, so $9 = \\frac{1}{5} t$ and $t = 45$ ✓. Tracking the nickels settles it without ever writing $t$. Dimes are $2$ parts and nickels $3$ parts of some size $k$, so there are $2k$ dimes and $3k$ nickels. The nickels are untouched, and afterward they are half the jar, so the dimes must then match them at $3k$: from $2k + 9 = 3k$ we get $k = 9$, so the jar now holds $5k = 45$ coins. The check runs $\\frac{18}{45} = \\frac{2}{5}$ and $\\frac{27}{54} = \\frac{1}{2}$ ✓. ANSWERING FOR THE JAR AFTER THE ADDITION gives $54$ ✗. ANSWERING WITH THE DIMES gives $18$, the number of dimes in the jar now ✗. ANSWERING WITH THE NICKELS gives $27$ ✗.',
    },
    {
      q: 'A bag holds $12$ red chips and $18$ blue chips, and nothing else. How many more red chips must be added so that a chip drawn at random from the bag, with every chip equally likely, is red with probability $\\frac{3}{5}$?',
      choices: ['$45$', '$27$', '$15$', '$6$'],
      answer: 2,
      solution:
        'Let $x$ be the number of red chips added. Afterward the bag holds $12 + x$ red chips among $30 + x$ chips, so $\\frac{12+x}{30+x} = \\frac{3}{5}$. Cross-multiplying gives $60 + 5x = 90 + 3x$, so $2x = 30$ and $x = 15$; the check is $\\frac{27}{45} = \\frac{3}{5}$ ✓. Watching the blue chips settles it without an equation in $12 + x$. The $18$ blue chips are never touched, and afterward they make up $1 - \\frac{3}{5} = \\frac{2}{5}$ of the bag, so the bag must then hold $18 \\div \\frac{2}{5} = 45$ chips. It holds $30$ now, so $45 - 30 = 15$ red chips were added ✓. ANSWERING WITH THE FINAL TOTAL gives $45$, the size of the bag afterward rather than the number added ✗. ANSWERING WITH THE FINAL RED COUNT gives $27$ ✗. FORGETTING THAT THE NEW CHIPS ENLARGE THE BAG gives $\\frac{12+x}{30} = \\frac{3}{5}$ and $x = 6$, but $18$ red of $36$ chips is $\\frac{1}{2}$ ✗.',
    },
  ],
]

export default { book: 'intro-counting', number: 7, sections: { '7.2': s72 } }
