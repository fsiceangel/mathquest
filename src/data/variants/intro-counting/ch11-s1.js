// Counting chapter 11 — variations for §11.2 Definition of Expected Value.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Ten slots, three variations each: v1 keeps the technique with fresh
//    numbers and a fresh scenario, v2 keeps the technique but weights different
//    objects, v3 reverses the question (given the expected value, find a value,
//    a count, a probability, or a prize) or extends it.
//  - Answer indices are derived from the base indices 2 0 1 3 0 2 1 3 0 1 by
//    v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4, giving
//    v1: 3 1 2 0 1 3 2 0 1 2   v2: 1 3 0 2 3 1 0 2 3 0   v3: 0 2 3 1 2 0 3 1 2 3.
//  - Every key was computed exactly in node over the full outcome distribution
//    with integer and rational arithmetic before any choice was written: whole
//    face lists, whole card and coin and tile pools, sector shares as exact
//    fractions of $360^\circ$, all $24$, $12$, $36$, and $64$ ordered pairs, all
//    $15$ unordered pairs, and divisor and prime-factor tables built by trial
//    division. Unknowns in the reversed items were found by exhaustive search
//    over the candidate range, never solved on paper alone. Every money key is
//    an exact number of cents. Every key matches its pin. Pin deviations: none.
//  - Each solution runs two genuinely independent routes that each end ✓ — one
//    the weighted sum over outcomes, the other a pooled total, a shift to a
//    convenient zero, a balance-point argument, a long-run tally of many plays,
//    a divisor-pair count, or a tail sum. Route two never re-imports route
//    one’s number. Each wrong choice is then named in CAPS, ending ✗, and every
//    attribution is an arithmetically true statement about that number.
//  - Conventions are settled in every stem: dice, coins, and spinners are fair
//    unless the sector sizes are given; every stem says whether an entry cost is
//    subtracted and whether a losing bet forfeits the stake; draws are at random
//    from a stated pool, with or without replacement said out loud.
//  - Slot 3 keeps a spinner figure in all three variations, drawn to scale from
//    the stated sector angles, with the sectors labeled and the asked quantity
//    never labeled.

// Spinner cut into sectors of 240°, 90°, and 30°, marked 3, 8, and 20.
const spinnerBig = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [-0.866, -0.5] },
    { t: 'seg', a: [0, 0], b: [-0.5, 0.866] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.48, -0.28], text: '3' },
    { t: 'label', p: [-0.53, 0.14], text: '8' },
    { t: 'label', p: [-0.17, 0.63], text: '20' },
  ],
}

// Prize wheel cut into sectors of 180°, 90°, 45°, and 45°, marked 4, 8, 16, 24.
const wheelFour = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [0, -1] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'seg', a: [0, 0], b: [-0.707, 0.707] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.55, 0], text: '4' },
    { t: 'label', p: [-0.39, -0.39], text: '8' },
    { t: 'label', p: [-0.57, 0.24], text: '16' },
    { t: 'label', p: [-0.24, 0.57], text: '24' },
  ],
}

// Spinner cut into sectors of 180°, 90°, and 90°, marked 2, 10, and x.
const spinnerHalfQuarters = {
  view: [-1.2, -1.2, 1.2, 1.2],
  elems: [
    { t: 'circle', c: [0, 0], r: 1 },
    { t: 'seg', a: [0, 0], b: [0, 1] },
    { t: 'seg', a: [0, 0], b: [0, -1] },
    { t: 'seg', a: [0, 0], b: [-1, 0] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [0.55, 0], text: '2' },
    { t: 'label', p: [-0.39, -0.39], text: '10' },
    { t: 'label', p: [-0.39, 0.39], text: 'x' },
  ],
}

const s112 = [
  // slot 1 — a plain average of equally likely values.
  //          Lanes: twelve faces -> 13/2; twenty page numbers -> 101/2;
  //          reversed: the expected value names the die -> n = 20.
  [
    {
      q: 'A fair twelve-sided die has faces numbered $1$ through $12$. What is the expected value of one roll?',
      choices: ['$6$', '$13$', '$78$', '$\\frac{13}{2}$'],
      answer: 3,
      solution:
        'All twelve faces are equally likely, so pair them off from the outside in: $1$ with $12$, $2$ with $11$, and so on down to $6$ with $7$. That is six pairs, and every pair sums to $13$, so every pair averages $\\frac{13}{2}$; a list built out of pairs that all average $\\frac{13}{2}$ averages $\\frac{13}{2}$ ✓. Adding first and dividing later gets there by a different road: $1 + 2 + \\cdots + 12 = \\frac{12 \\cdot 13}{2} = 78$, and each face carries weight $\\frac{1}{12}$, so the expected value is $\\frac{78}{12} = \\frac{13}{2}$ ✓. As usual the answer is not a face on the die. DIVIDING $78$ BY $13$ INSTEAD OF $12$ gives $6$; that is the average of the thirteen numbers $0$ through $12$, one outcome too many ✗. ADDING THE SMALLEST AND LARGEST FACE WITHOUT HALVING gives $13$, which is the pair total, not the pair average ✗. STOPPING AT THE TOTAL gives $78$, the sum of the faces before it is divided among the twelve equally likely outcomes ✗.',
    },
    {
      q: 'A page is chosen at random from the pages numbered $41$ through $60$ of a booklet, every one of those pages equally likely. What is the expected value of the page number?',
      choices: ['$50$', '$\\frac{101}{2}$', '$101$', '$1010$'],
      answer: 1,
      solution:
        'There are $60 - 41 + 1 = 20$ pages, all equally likely. Pair the smallest with the largest, $41$ with $60$, then $42$ with $59$, and so on: ten pairs, each summing to $101$, so each pair averages $\\frac{101}{2}$ and so does the whole list ✓. Shifting to an easier list confirms it without any pairing: subtract $40$ from every page number and the choices become $1$ through $20$, whose expected value is $\\frac{1 + 2 + \\cdots + 20}{20} = \\frac{210}{20} = \\frac{21}{2}$; adding the $40$ back gives $40 + \\frac{21}{2} = \\frac{101}{2}$ ✓. COUNTING THE PAGES FROM $40$ INSTEAD OF $41$ gives the average of $40$ through $60$, which is $50$ — a whole number only because that list has an odd number of entries ✗. ADDING THE FIRST AND LAST PAGE WITHOUT HALVING gives $101$ ✗. STOPPING AT THE TOTAL gives $1010$, the sum of the twenty page numbers before dividing ✗.',
    },
    {
      q: 'A fair $n$-sided die has faces numbered $1$ through $n$, and the expected value of one roll is $\\frac{21}{2}$. What is $n$?',
      choices: ['$20$', '$6$', '$21$', '$41$'],
      answer: 0,
      solution:
        'Equally likely faces average to the midpoint of the list. Pairing $1$ with $n$, $2$ with $n-1$, and so on, every pair sums to $n + 1$, so the expected value is $\\frac{n+1}{2}$. Setting $\\frac{n+1}{2} = \\frac{21}{2}$ gives $n + 1 = 21$ and $n = 20$ ✓. Testing candidates directly agrees and shows there is only one: a $20$-sided die has faces summing to $\\frac{20 \\cdot 21}{2} = 210$, and $\\frac{210}{20} = \\frac{21}{2}$, while $n = 19$ gives $\\frac{190}{19} = 10$ and $n = 21$ gives $\\frac{231}{21} = 11$; since the expected value $\\frac{n+1}{2}$ grows as $n$ grows, no other $n$ can land on $\\frac{21}{2}$ ✓. READING $\\frac{21}{2}$ AS THE TOTAL OF THE FACES gives $n = 6$, since $1 + 2 + \\cdots + 6 = 21$; that is a sum, not an average ✗. USING $\\frac{n}{2}$ AS THE AVERAGE gives $n = 21$, forgetting that the faces start at $1$, not at $0$ — a $21$-sided die averages $11$ ✗. CLEARING THE FRACTION ON ONE SIDE ONLY gives $n + 1 = 21 \\cdot 2$ and $n = 41$, the die whose expected value is $21$, twice what was asked ✗.',
    },
  ],

  // slot 2 — a pool of repeated labels; the repeats are the weights.
  //          Lanes: twelve tiles -> 67/12; fifteen tokens -> 31/5;
  //          reversed: one unknown chip forced by the expected value -> 17.
  [
    {
      q: 'A box holds twelve tiles: five marked $2$, four marked $6$, two marked $9$, and one marked $15$. One tile is drawn at random. What is the expected value of the number on it?',
      choices: ['$8$', '$\\frac{67}{12}$', '$\\frac{67}{4}$', '$67$'],
      answer: 1,
      solution:
        'Each of the twelve tiles is equally likely, so a tile marked $2$ carries five times the weight of the tile marked $15$. Weighting by those shares, $2 \\cdot \\frac{5}{12} + 6 \\cdot \\frac{4}{12} + 9 \\cdot \\frac{2}{12} + 15 \\cdot \\frac{1}{12} = \\frac{10 + 24 + 18 + 15}{12} = \\frac{67}{12}$ ✓. Measuring from the smallest label gives the same number without ever writing a weight: imagine every tile starts at $2$, which costs $2$ no matter what is drawn, and then add the excess. The four $6$s carry $4$ extra each, the two $9$s carry $7$ extra each, and the $15$ carries $13$ extra, a total excess of $16 + 14 + 13 = 43$ spread over twelve tiles. So the expected value is $2 + \\frac{43}{12} = \\frac{24 + 43}{12} = \\frac{67}{12}$ ✓. AVERAGING THE FOUR DIFFERENT LABELS gives $\\frac{2 + 6 + 9 + 15}{4} = 8$, treating the lone $15$ as if it were as likely as the five $2$s ✗. DIVIDING THE POOL TOTAL BY THE FOUR KINDS gives $\\frac{67}{4}$ ✗. STOPPING AT THE POOL TOTAL gives $67$, the sum of all twelve tiles before dividing ✗.',
    },
    {
      q: 'A bag holds fifteen tokens: six are worth $3$ points, five are worth $7$ points, and four are worth $10$ points. One token is drawn at random. What is the expected number of points?',
      choices: ['$\\frac{20}{3}$', '$31$', '$93$', '$\\frac{31}{5}$'],
      answer: 3,
      solution:
        'All fifteen tokens are equally likely, so pool their points and share the pool out evenly: $6 \\cdot 3 + 5 \\cdot 7 + 4 \\cdot 10 = 18 + 35 + 40 = 93$ points across fifteen tokens, giving $\\frac{93}{15} = \\frac{31}{5}$ ✓. Working from a floor of $3$ points confirms it by a different arithmetic: every token is worth at least $3$, and above that floor the five $7$s carry $4$ extra each and the four $10$s carry $7$ extra each, a total of $20 + 28 = 48$ extra points over fifteen tokens. The expected value is $3 + \\frac{48}{15} = 3 + \\frac{16}{5} = \\frac{31}{5}$ ✓. AVERAGING THE THREE POINT VALUES gives $\\frac{3 + 7 + 10}{3} = \\frac{20}{3}$, which ignores that the $3$-point tokens are the most common ✗. DIVIDING THE POOL TOTAL BY THE THREE KINDS gives $\\frac{93}{3} = 31$ ✗. STOPPING AT THE POOL TOTAL gives $93$, the points in the whole bag rather than the points on one token ✗.',
    },
    {
      q: 'A box holds nine chips: five marked $2$, three marked $6$, and one marked $x$. A chip is drawn at random, and the expected value of the number on it is $5$. What is $x$?',
      choices: ['$7$', '$27$', '$17$', '$45$'],
      answer: 2,
      solution:
        'Nine equally likely chips average $5$ exactly when their nine numbers total $9 \\cdot 5 = 45$. The known chips supply $5 \\cdot 2 + 3 \\cdot 6 = 10 + 18 = 28$, so the last chip must supply $45 - 28 = 17$ ✓. Balancing around the target $5$ settles it without any totals: each $2$ sits $3$ below $5$, so the five of them pull the average down by $15$; each $6$ sits $1$ above, pulling up by $3$; the net pull so far is $15 - 3 = 12$ downward, and the single unknown chip must cancel it by sitting $12$ above $5$, so $x = 5 + 12 = 17$ ✓. AVERAGING THE THREE LABELS solves $\\frac{2 + 6 + x}{3} = 5$ and gives $x = 7$, which ignores that the $2$ appears five times ✗. SUBTRACTING ONLY THE THREE $6$s gives $45 - 18 = 27$ and forgets the five $2$s ✗. ANSWERING WITH THE POOL TOTAL gives $45$, the number all nine chips must reach together, not the number on one chip ✗.',
    },
  ],

  // slot 3 — spinner sectors as exact shares of the circle (figure in all three).
  //          Lanes: 240/90/30 -> 17/3; 180/90/45/45 -> 9;
  //          reversed: 180/90/90 with the expected value given -> x = 18.
  [
    {
      q: 'The spinner shown is cut into three sectors of $240^\\circ$, $90^\\circ$, and $30^\\circ$, marked $3$, $8$, and $20$ respectively. The pointer is equally likely to stop anywhere on the circle. What is the expected value of one spin?',
      fig: spinnerBig,
      choices: ['$\\frac{31}{3}$', '$\\frac{187}{12}$', '$\\frac{17}{3}$', '$31$'],
      answer: 2,
      solution:
        'A sector’s probability is its share of the full $360^\\circ$: $\\frac{240}{360} = \\frac{2}{3}$, $\\frac{90}{360} = \\frac{1}{4}$, and $\\frac{30}{360} = \\frac{1}{12}$, which add to $1$ as they must. Weighting each number by its own share, $3 \\cdot \\frac{2}{3} + 8 \\cdot \\frac{1}{4} + 20 \\cdot \\frac{1}{12} = 2 + 2 + \\frac{5}{3} = \\frac{17}{3}$ ✓. Cutting the wheel into equal pieces reaches the same value by a plain average: slice the circle into twelve $30^\\circ$ slices, all equally likely. Eight of them lie in the $3$ sector, three lie in the $8$ sector, and one is the $20$ sector, so the expected value is $\\frac{8 \\cdot 3 + 3 \\cdot 8 + 1 \\cdot 20}{12} = \\frac{24 + 24 + 20}{12} = \\frac{68}{12} = \\frac{17}{3}$ ✓. AVERAGING THE THREE LABELS gives $\\frac{3 + 8 + 20}{3} = \\frac{31}{3}$, which treats the sliver marked $20$ as if it were as likely as the sector filling two-thirds of the wheel ✗. ATTACHING THE BIGGEST SHARE TO THE BIGGEST NUMBER gives $20 \\cdot \\frac{2}{3} + 8 \\cdot \\frac{1}{4} + 3 \\cdot \\frac{1}{12} = \\frac{187}{12}$, the reverse pairing ✗. ADDING THE LABELS gives $31$, a total rather than an average ✗.',
    },
    {
      q: 'A prize wheel, shown, is cut into four sectors of $180^\\circ$, $90^\\circ$, $45^\\circ$, and $45^\\circ$, awarding $4$, $8$, $16$, and $24$ tickets respectively. The pointer is equally likely to stop anywhere on the circle. What is the expected number of tickets from one spin?',
      fig: wheelFour,
      choices: ['$9$', '$13$', '$\\frac{35}{2}$', '$52$'],
      answer: 0,
      solution:
        'The four sectors take $\\frac{180}{360} = \\frac{1}{2}$, $\\frac{90}{360} = \\frac{1}{4}$, $\\frac{45}{360} = \\frac{1}{8}$, and $\\frac{1}{8}$ of the wheel, and $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{8} = 1$. Weighting each prize by its share, $4 \\cdot \\frac{1}{2} + 8 \\cdot \\frac{1}{4} + 16 \\cdot \\frac{1}{8} + 24 \\cdot \\frac{1}{8} = 2 + 2 + 2 + 3 = 9$ ✓. Equal slices give the same answer as a plain average: cut the wheel into eight $45^\\circ$ slices, all equally likely. Four of them award $4$ tickets, two award $8$, one awards $16$, and one awards $24$, so the expected number is $\\frac{4 \\cdot 4 + 2 \\cdot 8 + 16 + 24}{8} = \\frac{16 + 16 + 16 + 24}{8} = \\frac{72}{8} = 9$ ✓. AVERAGING THE FOUR PRIZES gives $\\frac{4 + 8 + 16 + 24}{4} = 13$, which hands the two thin sectors the same weight as the half-wheel ✗. GIVING THE BIGGEST SHARE TO THE BIGGEST PRIZE gives $24 \\cdot \\frac{1}{2} + 16 \\cdot \\frac{1}{4} + 8 \\cdot \\frac{1}{8} + 4 \\cdot \\frac{1}{8} = \\frac{35}{2}$ ✗. ADDING THE PRIZES gives $52$, the tickets on the whole wheel rather than the tickets from one spin ✗.',
    },
    {
      q: 'The spinner shown is cut into three sectors of $180^\\circ$, $90^\\circ$, and $90^\\circ$; the $180^\\circ$ sector is marked $2$, one $90^\\circ$ sector is marked $10$, and the other is marked $x$. The pointer is equally likely to stop anywhere on the circle, and the expected value of one spin is $8$. What is $x$?',
      fig: spinnerHalfQuarters,
      choices: ['$\\frac{9}{2}$', '$12$', '$22$', '$18$'],
      answer: 3,
      solution:
        'The sectors take $\\frac{1}{2}$, $\\frac{1}{4}$, and $\\frac{1}{4}$ of the circle, so the expected value is $2 \\cdot \\frac{1}{2} + 10 \\cdot \\frac{1}{4} + x \\cdot \\frac{1}{4} = 1 + \\frac{5}{2} + \\frac{x}{4}$. Setting that equal to $8$ gives $\\frac{x}{4} = 8 - \\frac{7}{2} = \\frac{9}{2}$, so $x = 4 \\cdot \\frac{9}{2} = 18$ ✓. Equal quarters reach the same value with no fractions at all: cut the wheel into four $90^\\circ$ slices, all equally likely, two of them marked $2$, one marked $10$, and one marked $x$. Their plain average must be $8$, so $\\frac{2 + 2 + 10 + x}{4} = 8$, giving $14 + x = 32$ and $x = 18$ ✓. STOPPING AT $\\frac{9}{2}$ reports how much the unknown sector contributes to the average, before dividing by that sector’s probability $\\frac{1}{4}$ ✗. AVERAGING THE THREE LABELS solves $\\frac{2 + 10 + x}{3} = 8$ and gives $x = 12$, treating the half-wheel as one outcome among three ✗. DROPPING THE $180^\\circ$ SECTOR solves $\\frac{10}{4} + \\frac{x}{4} = 8$ and gives $x = 22$ ✗.',
    },
  ],

  // slot 4 — money pools, answered in cents.
  //          Lanes: fifteen coins -> 21; twelve stamps -> 50/3;
  //          reversed: the expected value fixes how many nickels -> 6.
  [
    {
      q: 'A purse holds $4$ half-dollars, $3$ quarters, and $8$ nickels. One coin is pulled out at random. What is the expected value of the coin, in cents?',
      choices: ['$21$', '$\\frac{80}{3}$', '$105$', '$315$'],
      answer: 0,
      solution:
        'There are $4 + 3 + 8 = 15$ coins, all equally likely, so pool the money and share it out evenly: $4 \\cdot 50 + 3 \\cdot 25 + 8 \\cdot 5 = 200 + 75 + 40 = 315$ cents across fifteen coins, giving $\\frac{315}{15} = 21$ cents ✓. Measuring from a nickel confirms it with different arithmetic: every coin is worth at least $5$ cents, and above that floor each half-dollar carries $45$ extra and each quarter carries $20$ extra, a total of $4 \\cdot 45 + 3 \\cdot 20 = 180 + 60 = 240$ extra cents spread over fifteen coins. So the expected value is $5 + \\frac{240}{15} = 5 + 16 = 21$ cents ✓. AVERAGING THE THREE COIN VALUES gives $\\frac{50 + 25 + 5}{3} = \\frac{80}{3}$ cents, which forgets that nickels outnumber every other coin ✗. DIVIDING THE POOL BY THE THREE KINDS gives $\\frac{315}{3} = 105$ cents ✗. STOPPING AT THE POOL gives $315$ cents, the money in the whole purse ✗.',
    },
    {
      q: 'A folder holds twelve stamps: six worth $5$ cents, four worth $20$ cents, and two worth $45$ cents. One stamp is taken at random. What is its expected value, in cents?',
      choices: ['$\\frac{70}{3}$', '$\\frac{200}{3}$', '$\\frac{50}{3}$', '$200$'],
      answer: 2,
      solution:
        'Each of the twelve stamps is equally likely, so the weights are $\\frac{6}{12} = \\frac{1}{2}$, $\\frac{4}{12} = \\frac{1}{3}$, and $\\frac{2}{12} = \\frac{1}{6}$. Weighting each value by its share, $5 \\cdot \\frac{1}{2} + 20 \\cdot \\frac{1}{3} + 45 \\cdot \\frac{1}{6} = \\frac{5}{2} + \\frac{20}{3} + \\frac{15}{2} = 10 + \\frac{20}{3} = \\frac{50}{3}$ cents ✓. Working up from a floor of $5$ cents avoids those fractions entirely: every stamp is worth at least $5$ cents, and above the floor the four $20$s carry $15$ extra each and the two $45$s carry $40$ extra each, a total of $60 + 80 = 140$ extra cents over twelve stamps. The expected value is $5 + \\frac{140}{12} = 5 + \\frac{35}{3} = \\frac{50}{3}$ cents ✓. AVERAGING THE THREE STAMP VALUES gives $\\frac{5 + 20 + 45}{3} = \\frac{70}{3}$ cents, which weights the two costliest stamps like the six cheapest ✗. DIVIDING THE POOL BY THE THREE KINDS gives $\\frac{200}{3}$ cents ✗. STOPPING AT THE POOL gives $200$ cents, the value of the whole folder ✗.',
    },
    {
      q: 'A jar holds $4$ dimes and some nickels, and nothing else. One coin is drawn at random, and its expected value is $7$ cents. How many nickels are in the jar?',
      choices: ['$3$', '$6$', '$12$', '$20$'],
      answer: 1,
      solution:
        'Let there be $n$ nickels, so the jar holds $4 + n$ equally likely coins worth $40 + 5n$ cents in all. The expected value is $\\frac{40 + 5n}{4 + n} = 7$, so $40 + 5n = 28 + 7n$, giving $2n = 12$ and $n = 6$ ✓. Check: six nickels make ten coins worth $70$ cents, and $\\frac{70}{10} = 7$. Balancing around the target settles it without solving an equation: a dime sits $10 - 7 = 3$ cents above the average and a nickel sits $7 - 5 = 2$ cents below it, and for the average to land on $7$ the upward pull and the downward pull must cancel. The four dimes pull up by $4 \\cdot 3 = 12$ cents, so the nickels must pull down by $12$ cents, and at $2$ cents each that takes $\\frac{12}{2} = 6$ nickels ✓. ANSWERING WITH A DIME’S DISTANCE ABOVE THE AVERAGE gives $3$, which is a number of cents, not a count of coins ✗. STOPPING AT THE DIMES’ TOTAL PULL gives $12$, before dividing by the $2$ cents each nickel supplies ✗. LEAVING THE DIMES OUT OF THE COUNT solves $\\frac{40 + 5n}{n} = 7$ and gives $n = 20$, which divides the jar’s whole value among the nickels alone ✗.',
    },
  ],

  // slot 5 — a bet with named wins and losses; a loss is a negative value.
  //          Lanes: die paying 12/3/-4 -> $1.00; eight chips -> $0.50;
  //          reversed: the prize that makes a die bet fair -> $10.00.
  [
    {
      q: 'You roll a standard die. A $1$ wins $\\$12$, a $2$ or a $3$ wins $\\$3$, and any other number loses $\\$4$. There is no entry fee, and the amounts named are what you gain or lose. What is the expected value of one play, in dollars?',
      choices: ['$\\$3.00$', '$\\$1.00$', '$\\$0.50$', '$-\\$2.00$'],
      answer: 1,
      solution:
        'Write out what each of the six equally likely faces is worth to you, with a loss written as a negative number: $12$, $3$, $3$, $-4$, $-4$, $-4$. Their total is $18 - 12 = 6$, so the expected value is $\\frac{6}{6} = 1$, that is $\\$1.00$ ✓. Shifting the whole game up by $\\$4$ removes the negatives and gives the same answer: if every result were $\\$4$ better, the six faces would be worth $16$, $7$, $7$, $0$, $0$, $0$, whose average is $\\frac{30}{6} = 5$; taking the $\\$4$ back off leaves $5 - 4 = 1$ dollar ✓. COUNTING ONLY THE WINNING FACES gives $\\frac{12 + 3 + 3}{6} = \\$3.00$ and ignores the three losing faces entirely ✗. COUNTING THE $\\$3$ ONCE INSTEAD OF ONCE FOR EACH OF THE TWO FACES gives $\\frac{12 + 3 - 12}{6} = \\$0.50$ ✗. SUBTRACTING THE LOSS AS IF IT WERE CERTAIN gives $\\frac{12}{6} - 4 = -\\$2.00$, which charges the $\\$4$ on every roll instead of on half of them ✗.',
    },
    {
      q: 'A bag holds $8$ chips: $1$ gold, $3$ silver, and $4$ plain. You draw one at random; gold wins $\\$5$, silver wins $\\$1$, and plain loses $\\$1$. There is no entry fee, and the amounts named are what you gain or lose. What is the expected value of one draw, in dollars?',
      choices: ['$\\$0.25$', '$\\$1.00$', '$\\$4.00$', '$\\$0.50$'],
      answer: 3,
      solution:
        'The eight chips are equally likely, and each carries a signed amount: $5$ once, $1$ three times, and $-1$ four times. The pool totals $5 + 3 - 4 = 4$ dollars, shared over eight equally likely draws, so the expected value is $\\frac{4}{8} = \\frac{1}{2}$, that is $\\$0.50$ ✓. Adding a dollar to every result gives the same answer with no negatives: the chips would then be worth $6$, $2$, $2$, $2$, $0$, $0$, $0$, $0$, whose average is $\\frac{12}{8} = \\frac{3}{2}$; removing the extra dollar leaves $\\frac{3}{2} - 1 = \\frac{1}{2}$ ✓. COUNTING THE SILVER DOLLAR ONCE INSTEAD OF ONCE PER SILVER CHIP gives $\\frac{5 + 1 - 4}{8} = \\$0.25$ ✗. COUNTING ONLY THE WINNING CHIPS gives $\\frac{5 + 3}{8} = \\$1.00$ and drops the four plain chips that cost you a dollar each ✗. STOPPING AT THE POOL TOTAL gives $\\$4.00$, the net across all eight chips rather than the average of one draw ✗.',
    },
    {
      q: 'You roll a standard die. A $6$ wins $\\$d$ and any other number loses $\\$2$. There is no entry fee, and the game is fair, meaning its expected value is $\\$0$. What is $d$?',
      choices: ['$\\$2.00$', '$\\$12.00$', '$\\$10.00$', '$\\$60.00$'],
      answer: 2,
      solution:
        'Fair means the expected value is $0$. One face wins $d$ and five faces lose $2$, so $d \\cdot \\frac{1}{6} - 2 \\cdot \\frac{5}{6} = 0$, giving $\\frac{d}{6} = \\frac{10}{6}$ and $d = 10$, that is $\\$10.00$ ✓. Tallying six typical rolls says the same thing without an equation: in six rolls you expect one $6$ and five other faces, so you expect to pay $5 \\cdot \\$2 = \\$10$ and to collect the prize once. Breaking even over those six rolls needs that single prize to be $\\$10$ ✓. MATCHING THE STAKE gives $\\$2.00$, which would be fair only if winning and losing were equally likely, and here a loss is five times as likely ✗. CHARGING THE LOSS TO EVERY FACE solves $\\frac{d}{6} = 2$ and gives $\\$12.00$ ✗. WEIGHTING THE PRIZE A SECOND TIME solves $\\frac{d}{6} = 10$ and gives $\\$60.00$; the $\\$10$ is already the six-roll total of the losses, so it should be matched by one prize, not by six ✗.',
    },
  ],

  // slot 6 — expected value as a long-run average over many repetitions.
  //          Lanes: 300 plays of a two-prize machine -> $480.00; 120 plays for
  //          tickets -> 140; reversed: how many plays reach a total -> 168.
  [
    {
      q: 'A machine pays $\\$5$ with probability $\\frac{1}{5}$, pays $\\$2$ with probability $\\frac{3}{10}$, and pays nothing otherwise. There is no charge to play. If it is played $300$ times, about how much should it pay out in total?',
      choices: ['$\\$300.00$', '$\\$700.00$', '$\\$1050.00$', '$\\$480.00$'],
      answer: 3,
      solution:
        'Find the payout of one play first. The three probabilities are $\\frac{1}{5}$, $\\frac{3}{10}$, and $1 - \\frac{1}{5} - \\frac{3}{10} = \\frac{1}{2}$, and they add to $1$, so nothing has been missed. One play pays $5 \\cdot \\frac{1}{5} + 2 \\cdot \\frac{3}{10} + 0 \\cdot \\frac{1}{2} = 1 + \\frac{3}{5} = \\frac{8}{5}$ dollars on average, and since expected value is a long-run average per play, $300$ plays should pay about $300 \\cdot \\frac{8}{5} = \\$480.00$ ✓. Counting the plays themselves gives the same total without any per-play average: of $300$ plays, about $\\frac{1}{5}$ of them, or $60$, pay $\\$5$, which is $\\$300$, and about $\\frac{3}{10}$ of them, or $90$, pay $\\$2$, which is $\\$180$; the remaining $150$ plays pay nothing, so the total is $300 + 180 = \\$480.00$ ✓. COUNTING ONLY THE $\\$5$ PRIZE gives $60 \\cdot 5 = \\$300.00$ ✗. AVERAGING THE THREE PAYOUTS EQUALLY gives $\\frac{5 + 2 + 0}{3}$ per play and $\\$700.00$ in total, which ignores the probabilities ✗. AVERAGING ONLY THE TWO PAYING RESULTS gives $\\frac{5 + 2}{2} = \\$3.50$ per play and $\\$1050.00$, forgetting the half of the plays that pay nothing ✗.',
    },
    {
      q: 'A game gives $4$ tickets with probability $\\frac{1}{6}$, gives $1$ ticket with probability $\\frac{1}{2}$, and gives no tickets otherwise. It is free to play, and a class plays it $120$ times. About how many tickets should the class collect in total?',
      choices: ['$80$', '$140$', '$200$', '$300$'],
      answer: 1,
      solution:
        'The missing probability is $1 - \\frac{1}{6} - \\frac{1}{2} = \\frac{1}{3}$, so one play gives $4 \\cdot \\frac{1}{6} + 1 \\cdot \\frac{1}{2} + 0 \\cdot \\frac{1}{3} = \\frac{2}{3} + \\frac{1}{2} = \\frac{7}{6}$ tickets on average. Over many plays the total settles near the number of plays times that average, so $120$ plays should give about $120 \\cdot \\frac{7}{6} = 140$ tickets ✓. Splitting the $120$ plays by outcome gives the same total directly: about $\\frac{1}{6}$ of them, or $20$ plays, give $4$ tickets each, which is $80$ tickets, and about $\\frac{1}{2}$ of them, or $60$ plays, give $1$ ticket each, which is $60$ tickets; the other $40$ plays give none, so the class collects about $80 + 60 = 140$ ✓. COUNTING ONLY THE FOUR-TICKET PRIZE gives $20 \\cdot 4 = 80$ ✗. AVERAGING THE THREE RESULTS EQUALLY gives $\\frac{4 + 1 + 0}{3}$ per play and $200$ tickets ✗. AVERAGING ONLY THE TWO PAYING RESULTS gives $\\frac{4 + 1}{2} = \\frac{5}{2}$ per play and $300$ tickets, forgetting the plays that give nothing ✗.',
    },
    {
      q: 'A game pays $\\$9$ with probability $\\frac{1}{6}$, pays $\\$4$ with probability $\\frac{1}{4}$, and pays nothing otherwise. It is free to play. About how many plays should it take for the total payout to reach $\\$420$?',
      choices: ['$168$', '$280$', '$420$', '$1050$'],
      answer: 0,
      solution:
        'One play pays $9 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{4} = \\frac{3}{2} + 1 = \\frac{5}{2}$ dollars on average, the remaining probability $\\frac{7}{12}$ paying nothing. The total after $k$ plays is about $\\frac{5}{2}k$ dollars, so reaching $\\$420$ takes $k = 420 \\div \\frac{5}{2} = 420 \\cdot \\frac{2}{5} = 168$ plays ✓. Working in blocks of twelve plays avoids dividing by a fraction: in twelve plays you expect two payouts of $\\$9$, worth $\\$18$, and three payouts of $\\$4$, worth $\\$12$, a total of $\\$30$ per twelve plays. Reaching $\\$420$ takes $\\frac{420}{30} = 14$ such blocks, which is $14 \\cdot 12 = 168$ plays ✓. COUNTING ONLY THE $\\$9$ PRIZE gives a rate of $\\$1.50$ a play and $\\frac{420}{1.5} = 280$ plays ✗. COUNTING ONLY THE $\\$4$ PRIZE gives a rate of exactly $\\$1$ a play and $420$ plays ✗. MULTIPLYING INSTEAD OF DIVIDING gives $420 \\cdot \\frac{5}{2} = 1050$, which is a number of dollars dressed up as a number of plays ✗.',
    },
  ],

  // slot 7 — the expected value is given; recover a value or a probability.
  //          Lanes: two spinner regions -> 5; eight cards -> 11;
  //          reversed: the two values are known, find the probability -> 1/4.
  [
    {
      q: 'A spinner lands on region X with probability $\\frac{1}{5}$ and on region Y with probability $\\frac{4}{5}$, and it has no other regions. Region X is worth $20$ points, and the expected value of one spin is $8$ points. How many points is region Y worth?',
      choices: ['$-4$', '$4$', '$5$', '$10$'],
      answer: 2,
      solution:
        'Let region Y be worth $y$ points. The expected value is $20 \\cdot \\frac{1}{5} + y \\cdot \\frac{4}{5} = 4 + \\frac{4y}{5}$, and setting that equal to $8$ gives $\\frac{4y}{5} = 4$, so $y = 5$ ✓. Tallying five typical spins reaches the same number with whole numbers only: in five spins you expect one landing on X, worth $20$ points, and four landings on Y. Five spins should total $5 \\cdot 8 = 40$ points, so the four Y spins must supply $40 - 20 = 20$ points, which is $5$ points each ✓. AVERAGING THE TWO REGIONS solves $\\frac{20 + y}{2} = 8$ and gives $-4$, treating the rare region X like a coin flip ✗. STOPPING AT $4$ reports how many points Y contributes to the average, before dividing by Y’s probability $\\frac{4}{5}$ ✗. LEAVING REGION X OUT solves $\\frac{4y}{5} = 8$ and gives $10$, as if the whole expected value came from Y ✗.',
    },
    {
      q: 'A box holds $8$ cards; five are marked $3$ and the other three are marked $m$. One card is drawn at random and the expected value of the number on it is $6$. What is $m$?',
      choices: ['$11$', '$9$', '$16$', '$33$'],
      answer: 0,
      solution:
        'The eight cards are equally likely, so their eight numbers must total $8 \\cdot 6 = 48$. The five known cards supply $5 \\cdot 3 = 15$, so the three unknown cards supply $48 - 15 = 33$, which is $\\frac{33}{3} = 11$ each ✓. Balancing around the target $6$ gets there without any totals: each card marked $3$ sits $3$ below $6$, so the five of them pull the average down by $15$. The three unknown cards must pull up by $15$ between them, that is $5$ each, so each is marked $6 + 5 = 11$ ✓. AVERAGING THE TWO LABELS solves $\\frac{3 + m}{2} = 6$ and gives $9$, which pretends a $3$ and an $m$ are equally likely when there are five of one and three of the other ✗. LEAVING THE FIVE $3$s OUT solves $\\frac{3m}{8} = 6$ and gives $16$ ✗. STOPPING AT $33$ reports what all three unknown cards carry together, not what one of them is marked ✗.',
    },
    {
      q: 'A spinner has just two regions, one worth $2$ points and one worth $10$ points, and the expected value of one spin is $4$ points. What is the probability of landing on the $10$-point region?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'Let $p$ be the probability of the $10$-point region; the other region then has probability $1 - p$, since those are the only two. The expected value is $2(1 - p) + 10p = 2 + 8p$, and setting that equal to $4$ gives $8p = 2$, so $p = \\frac{1}{4}$ ✓. A balance-point argument gives the same fraction without solving for anything: the average $4$ sits $2$ above the $2$-point region and $6$ below the $10$-point region. For the two pulls to cancel, the weights must be in the reverse ratio of those distances, $6 : 2 = 3 : 1$, with the heavier weight on the nearer value. So the $10$-point region takes $\\frac{1}{3 + 1} = \\frac{1}{4}$ of the circle ✓. DIVIDING THE EXPECTED VALUE BY THE LARGER LABEL gives $\\frac{4}{10} = \\frac{2}{5}$, an answer that never uses the $2$-point region ✗. ASSUMING EQUAL REGIONS gives $\\frac{1}{2}$, but two equal halves would average $\\frac{2 + 10}{2} = 6$, not $4$ ✗. ANSWERING FOR THE OTHER REGION gives $\\frac{3}{4}$, the probability of landing on the $2$-point region ✗.',
    },
  ],

  // slot 8 — expected value of a product or a square, over the full grid.
  //          Lanes: d6 times d4 -> 35/4; two spinners -> 15;
  //          derived: the square of the sum of two dice -> 329/6.
  [
    {
      q: 'A standard die and a fair four-sided die with faces numbered $1$ through $4$ are rolled. What is the expected value of the product of the two numbers showing?',
      choices: ['$\\frac{35}{4}$', '$6$', '$\\frac{15}{2}$', '$\\frac{49}{4}$'],
      answer: 0,
      solution:
        'There are $6 \\cdot 4 = 24$ equally likely ordered results, so add every product and divide by $24$. The double sum factors: $\\sum_{a=1}^{6}\\sum_{b=1}^{4} ab = (1 + 2 + \\cdots + 6)(1 + 2 + 3 + 4) = 21 \\cdot 10 = 210$, so the expected product is $\\frac{210}{24} = \\frac{35}{4}$ ✓. A second route uses the fact that neither die affects the other, so the average product is the product of the averages: the six-sided die averages $\\frac{7}{2}$, the four-sided die averages $\\frac{5}{2}$, and $\\frac{7}{2} \\cdot \\frac{5}{2} = \\frac{35}{4}$ ✓. ANSWERING FOR THE SUM gives $\\frac{7}{2} + \\frac{5}{2} = 6$ ✗. PAIRING THE DICE FACE TO FACE averages $1 \\cdot 1$, $2 \\cdot 2$, $3 \\cdot 3$, $4 \\cdot 4$ to get $\\frac{30}{4} = \\frac{15}{2}$, which uses only $4$ of the $24$ results and pretends the dice always match ✗. SQUARING ONE DIE’S AVERAGE gives $\\left(\\frac{7}{2}\\right)^2 = \\frac{49}{4}$, the answer for two six-sided dice, not for a six and a four ✗.',
    },
    {
      q: 'Spinner P has four equal sectors marked $2$, $4$, $6$, $8$; spinner Q has three equal sectors marked $1$, $3$, $5$. Each spinner is spun once, and the two spins do not affect each other. What is the expected value of the product of the two numbers?',
      choices: ['$8$', '$\\frac{29}{7}$', '$15$', '$\\frac{44}{3}$'],
      answer: 2,
      solution:
        'The two spins give $4 \\cdot 3 = 12$ equally likely ordered pairs. Add every product and divide: $\\sum_{p}\\sum_{q} pq = (2 + 4 + 6 + 8)(1 + 3 + 5) = 20 \\cdot 9 = 180$, so the expected product is $\\frac{180}{12} = 15$ ✓. Because neither spin affects the other, the averages may be multiplied instead: spinner P averages $\\frac{2 + 4 + 6 + 8}{4} = 5$ and spinner Q averages $\\frac{1 + 3 + 5}{3} = 3$, and $5 \\cdot 3 = 15$ ✓. ANSWERING FOR THE SUM gives $5 + 3 = 8$ ✗. AVERAGING ALL SEVEN LABELS AS ONE LIST gives $\\frac{2 + 4 + 6 + 8 + 1 + 3 + 5}{7} = \\frac{29}{7}$, which answers a question about one spin of one mixed spinner ✗. PAIRING THE SECTORS OFF averages $2 \\cdot 1$, $4 \\cdot 3$, $6 \\cdot 5$ to get $\\frac{44}{3}$, using only $3$ of the $12$ pairs ✗.',
    },
    {
      q: 'Two standard dice are rolled. What is the expected value of the square of the sum of the two numbers showing?',
      choices: ['$49$', '$\\frac{329}{6}$', '$59$', '$\\frac{91}{3}$'],
      answer: 1,
      solution:
        'Group the $36$ equally likely rolls by their sum. The sums $2$ through $12$ occur $1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1$ times, so squaring each sum and weighting by its count gives $4 + 18 + 48 + 100 + 180 + 294 + 320 + 324 + 300 + 242 + 144 = 1974$, and the expected value is $\\frac{1974}{36} = \\frac{329}{6}$ ✓. Expanding the square is a different route to the same number: $(a + b)^2 = a^2 + 2ab + b^2$. One die satisfies $\\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}$ for its square, and since the dice do not affect each other the average of $ab$ is $\\frac{7}{2} \\cdot \\frac{7}{2} = \\frac{49}{4}$. So the total is $\\frac{91}{6} + \\frac{91}{6} + 2 \\cdot \\frac{49}{4} = \\frac{91}{3} + \\frac{49}{2} = \\frac{182 + 147}{6} = \\frac{329}{6}$ ✓. SQUARING THE EXPECTED SUM gives $7^2 = 49$; the square of an average is not the average of the squares ✗. TREATING THE ELEVEN SUMS AS EQUALLY LIKELY gives $\\frac{4 + 9 + \\cdots + 144}{11} = \\frac{649}{11} = 59$, but a sum of $7$ is six times as likely as a sum of $2$ ✗. DROPPING THE CROSS TERM gives $\\frac{91}{6} + \\frac{91}{6} = \\frac{91}{3}$, the average of $a^2 + b^2$ rather than of $(a + b)^2$ ✗.',
    },
  ],

  // slot 9 — average a number-theory count over an equally likely range.
  //          Lanes: divisor count of 1-16 -> 25/8; distinct prime factors of
  //          1-20 -> 13/10; derived: the sum of the divisors of 1-12 -> 127/12.
  [
    {
      q: 'An integer is chosen at random from $1$ to $16$, inclusive, every one equally likely. What is the expected number of positive divisors of the chosen integer?',
      choices: ['$\\frac{9}{8}$', '$\\frac{25}{8}$', '$\\frac{17}{8}$', '$50$'],
      answer: 1,
      solution:
        'List the divisor counts of $1$ through $16$: $1, 2, 2, 3, 2, 4, 2, 4, 3, 4, 2, 6, 2, 4, 4, 5$. The sixteen integers are equally likely, so average them: the counts total $50$, and $\\frac{50}{16} = \\frac{25}{8}$ ✓. Counting from the other side avoids listing anything: instead of asking how many divisors each integer has, ask how many integers each divisor serves. The divisor $d$ divides exactly $\\left\\lfloor \\frac{16}{d} \\right\\rfloor$ of the numbers, so the grand total of all divisor counts is $16 + 8 + 5 + 4 + 3 + 2 + 2 + 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 50$ for $d = 1$ through $16$, and dividing by the sixteen equally likely choices gives $\\frac{25}{8}$ ✓. DROPPING BOTH $1$ AND THE NUMBER ITSELF removes $2$ divisors from each of the sixteen numbers and gives $\\frac{50 - 32}{16} = \\frac{9}{8}$ ✗. FORGETTING THAT $1$ DIVIDES EVERY NUMBER gives $\\frac{50 - 16}{16} = \\frac{17}{8}$ ✗. STOPPING AT THE TOTAL gives $50$, the divisors of all sixteen numbers put together ✗.',
    },
    {
      q: 'An integer is chosen at random from $1$ to $20$, inclusive, every one equally likely. What is the expected number of different prime factors of the chosen integer? (The number $1$ has none, and a repeated prime is counted once, so $12 = 2^2 \\cdot 3$ has two.)',
      choices: ['$\\frac{2}{5}$', '$\\frac{27}{20}$', '$26$', '$\\frac{13}{10}$'],
      answer: 3,
      solution:
        'List the counts for $1$ through $20$: $0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 2$. All twenty integers are equally likely, so average them: the counts total $26$, giving $\\frac{26}{20} = \\frac{13}{10}$ ✓. Counting by prime instead of by integer reaches the same total another way. The primes up to $20$ are $2, 3, 5, 7, 11, 13, 17, 19$, and the prime $p$ is a factor of exactly $\\left\\lfloor \\frac{20}{p} \\right\\rfloor$ of the numbers, which gives $10 + 6 + 4 + 2 + 1 + 1 + 1 + 1 = 26$ prime-and-number matches in all; sharing them among twenty equally likely choices gives $\\frac{13}{10}$ ✓. COUNTING ONLY THE NUMBERS THAT ARE THEMSELVES PRIME gives $\\frac{8}{20} = \\frac{2}{5}$, which credits $12$ and $15$ with nothing ✗. GIVING $1$ A PRIME FACTOR OF ITS OWN gives $\\frac{27}{20}$ ✗. STOPPING AT THE TOTAL gives $26$, the matches across all twenty numbers rather than the average for one ✗.',
    },
    {
      q: 'An integer is chosen at random from $1$ to $12$, inclusive, every one equally likely. What is the expected value of the sum of its positive divisors? (For $6$ that sum is $1 + 2 + 3 + 6 = 12$.)',
      choices: ['$\\frac{35}{12}$', '$\\frac{115}{12}$', '$\\frac{127}{12}$', '$127$'],
      answer: 2,
      solution:
        'Work out the divisor sums of $1$ through $12$: $1, 3, 4, 7, 6, 12, 8, 15, 13, 18, 12, 28$. The twelve integers are equally likely, so average them: those sums total $127$, and the expected value is $\\frac{127}{12}$ ✓. Counting each divisor’s contribution instead reaches the same total with no divisor lists at all. The number $d$ appears as a divisor of exactly $\\left\\lfloor \\frac{12}{d} \\right\\rfloor$ of the twelve integers and contributes $d$ each time, so the grand total is $1 \\cdot 12 + 2 \\cdot 6 + 3 \\cdot 4 + 4 \\cdot 3 + 5 \\cdot 2 + 6 \\cdot 2 + 7 + 8 + 9 + 10 + 11 + 12 = 12 + 12 + 12 + 12 + 10 + 12 + 57 = 127$, and $\\frac{127}{12}$ follows ✓. COUNTING THE DIVISORS INSTEAD OF ADDING THEM gives $\\frac{35}{12}$, the expected number of divisors of an integer from $1$ to $12$ ✗. FORGETTING THAT $1$ IS A DIVISOR of each of the twelve numbers gives $\\frac{127 - 12}{12} = \\frac{115}{12}$ ✗. STOPPING AT THE TOTAL gives $127$, the divisor sums of all twelve integers put together ✗.',
    },
  ],

  // slot 10 — the larger or smaller of two draws, over the full grid.
  //           Lanes: two eight-sided dice, larger -> 93/16; two of six cards
  //           without replacement, larger -> 14/3; derived: smaller of two
  //           standard dice -> 91/36.
  [
    {
      q: 'Two fair eight-sided dice with faces numbered $1$ through $8$ are rolled. What is the expected value of the larger of the two numbers? (If the two dice match, that common number counts as the larger.)',
      choices: ['$\\frac{9}{2}$', '$\\frac{51}{16}$', '$\\frac{93}{16}$', '$\\frac{17}{3}$'],
      answer: 2,
      solution:
        'There are $8 \\cdot 8 = 64$ equally likely ordered rolls. The larger number is exactly $k$ when both dice are at most $k$ but not both at most $k - 1$, which happens in $k^2 - (k-1)^2 = 2k - 1$ rolls. So the counts for $k = 1$ through $8$ are $1, 3, 5, 7, 9, 11, 13, 15$, and the expected value is $\\frac{1 + 6 + 15 + 28 + 45 + 66 + 91 + 120}{64} = \\frac{372}{64} = \\frac{93}{16}$ ✓. A tail count gets there without those per-value counts. The larger number is bigger than $k$ unless both dice are at most $k$, which has probability $\\frac{k^2}{64}$, and for a quantity taking values $1$ through $8$ the expected value equals the sum of the probabilities of exceeding $k$ for $k = 0$ through $7$: that is $8 - \\frac{0 + 1 + 4 + 9 + 16 + 25 + 36 + 49}{64} = 8 - \\frac{140}{64} = \\frac{372}{64} = \\frac{93}{16}$ ✓. TREATING THE LARGER DIE LIKE A SINGLE DIE gives $\\frac{9}{2}$, the expected value of one eight-sided die ✗. ANSWERING FOR THE SMALLER gives $\\frac{51}{16}$, since the two expectations must add to $\\frac{9}{2} + \\frac{9}{2} = 9$ ✗. TREATING THE $36$ UNORDERED RESULTS AS EQUALLY LIKELY gives $\\frac{204}{36} = \\frac{17}{3}$, but a matched pair happens half as often as a mixed one ✗.',
    },
    {
      q: 'Two cards are drawn at random without replacement from six cards numbered $1$ through $6$, every pair equally likely. What is the expected value of the larger of the two numbers?',
      choices: ['$\\frac{14}{3}$', '$\\frac{7}{2}$', '$\\frac{7}{3}$', '$\\frac{161}{36}$'],
      answer: 0,
      solution:
        'There are $\\binom{6}{2} = 15$ equally likely pairs, and no pair can be a tie. The larger card is $k$ exactly when the other card is one of the $k - 1$ cards below it, so the counts for $k = 2$ through $6$ are $1, 2, 3, 4, 5$. The expected value is $\\frac{2 \\cdot 1 + 3 \\cdot 2 + 4 \\cdot 3 + 5 \\cdot 4 + 6 \\cdot 5}{15} = \\frac{2 + 6 + 12 + 20 + 30}{15} = \\frac{70}{15} = \\frac{14}{3}$ ✓. A tail count agrees without listing those cases: the larger card is at least $k$ unless both cards come from the $k - 1$ cards below $k$, which happens in $\\binom{k-1}{2}$ pairs. Summing the probabilities of being at least $k$ for $k = 1$ through $6$ gives $6 - \\frac{0 + 0 + 1 + 3 + 6 + 10}{15} = 6 - \\frac{20}{15} = 6 - \\frac{4}{3} = \\frac{14}{3}$ ✓. ANSWERING FOR ONE CARD gives $\\frac{7}{2}$, the average of a single card ✗. ANSWERING FOR THE SMALLER gives $\\frac{7}{3}$, since the larger and the smaller must add to $\\frac{7}{2} + \\frac{7}{2} = 7$ ✗. ALLOWING THE TWO DRAWS TO MATCH, as if the first card were put back, gives $\\frac{161}{36}$, which is the answer for two rolls of a standard die instead of two different cards ✗.',
    },
    {
      q: 'Two standard dice are rolled. What is the expected value of the smaller of the two numbers showing? (If the two dice match, that common number counts as the smaller.)',
      choices: ['$\\frac{7}{3}$', '$\\frac{7}{2}$', '$\\frac{161}{36}$', '$\\frac{91}{36}$'],
      answer: 3,
      solution:
        'There are $36$ equally likely ordered rolls. The smaller number is exactly $k$ when both dice are at least $k$ but not both at least $k + 1$, which happens in $(7-k)^2 - (6-k)^2 = 13 - 2k$ rolls. So the counts for $k = 1$ through $6$ are $11, 9, 7, 5, 3, 1$, and the expected value is $\\frac{11 + 18 + 21 + 20 + 15 + 6}{36} = \\frac{91}{36}$ ✓. A tail count reaches the same number another way: the smaller is at least $k$ exactly when both dice are at least $k$, which has probability $\\frac{(7-k)^2}{36}$, and summing those probabilities for $k = 1$ through $6$ gives $\\frac{36 + 25 + 16 + 9 + 4 + 1}{36} = \\frac{91}{36}$ ✓. FORBIDDING TIES gives $\\frac{7}{3}$, the answer for two different cards drawn from $1$ through $6$, where a matched pair is impossible ✗. TREATING THE SMALLER DIE LIKE A SINGLE DIE gives $\\frac{7}{2}$ ✗. ANSWERING FOR THE LARGER gives $\\frac{161}{36}$, and indeed $\\frac{91}{36} + \\frac{161}{36} = 7$, the expected sum of the two dice ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 11,
  sections: { '11.2': s112 },
}
