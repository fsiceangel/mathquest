// Counting chapter 7 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    an exact reduced fraction such as '$\frac{13}{55}$', or a bare whole
//    number such as '$16$' for the reversed items.
//  - Every key was brute-forced in node before the stem was written: full dice
//    and spinner grids, complete divisor and multiple scans over the stated
//    integer ranges, every subset of the stated size for the committee, team,
//    and card-draw items, and full permutation lists for the arrangement items
//    (the position-pair counts were cross-checked against the permutations).
//    The four reversed items were solved by scanning the unknown over a wide
//    range and confirming exactly one value inside the stated bound produces
//    the stated probability. Every key matches its pin. Pin deviations: none.
//  - This is the chapter where probability is introduced, so every stem names
//    the equally likely outcomes and every solution stays inside the chapter’s
//    tools: count the outcomes, count the favorable ones, reduce. Each solution
//    runs two genuinely independent routes that each end ✓ — a direct count and
//    a second route that is a complement, a symmetry over positions, a residue
//    or gap classification, a block glue, or a stage-by-stage share — and route
//    two never re-imports route one’s number. The solution then names the most
//    tempting wrong answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: dice are fair and independent and
//    a die is a standard six-sided die unless the stem says otherwise; spinner
//    sectors are equal and every label is given; a draw of two or more items
//    “at the same time” is an unordered set with every set equally likely;
//    people, books, photographs, and cards are all different; “at least”,
//    “exactly”, “fewer than”, and “not at either end” are spelled out.

const worksheet = [
  // slot 1 — a multiple among numbered items (block count vs. complement).
  //          Lanes: 30 lockers multiple of 4 -> 7/30; 31 day slips multiple of
  //          5 -> 6/31; reversed: multiples of 3 give 5/16 -> n = 16.
  [
    {
      q: 'A gym has $30$ lockers numbered $1$ through $30$, and a new member is assigned one of them at random, every locker equally likely. What is the probability that the locker number is a multiple of $4$?',
      answer: '$\\frac{7}{30}$',
      solution:
        'The $30$ lockers are the equally likely outcomes. The multiples of $4$ in this range are $4, 8, 12, 16, 20, 24, 28$ — seven of them, since the next one, $32$, is past $30$. The probability is $\\frac{7}{30}$ ✓. Blocks give the same seven without listing: the numbers $1$ through $28$ split into $7$ blocks of four consecutive numbers, and each block holds exactly one multiple of $4$; the leftover numbers $29$ and $30$ hold none. So $7$ lockers are favorable and $23$ are not, and $1 - \\frac{23}{30} = \\frac{7}{30}$ ✓. ANSWERING $\\frac{1}{4}$ assumes a clean quarter of the lockers are multiples of $4$, but $30$ is not a multiple of $4$: a quarter of $30$ would be $7.5$ lockers ✗.',
    },
    {
      q: 'The $31$ day numbers of a month are written on $31$ identical slips, one day number per slip, and one slip is drawn at random, every slip equally likely. What is the probability that the day number drawn is a multiple of $5$?',
      answer: '$\\frac{6}{31}$',
      solution:
        'All $31$ slips are equally likely. The day numbers that are multiples of $5$ are $5, 10, 15, 20, 25, 30$, six of them, so the probability is $\\frac{6}{31}$ ✓. A block count confirms the six independently: days $1$ through $30$ fall into six blocks of five consecutive days ($1$–$5$, $6$–$10$, and so on), each block holding exactly one multiple of $5$, and day $31$ starts a seventh block that never finishes. That is $6$ favorable slips out of $31$ ✓. DIVIDING BY $30$ instead of $31$ gives $\\frac{6}{30} = \\frac{1}{5}$; the month has a thirty-first day, and it is an outcome like any other ✗.',
    },
    {
      q: 'A box holds $n$ tickets numbered $1$ through $n$, and one ticket is drawn at random, every ticket equally likely. The probability that the number on it is a multiple of $3$ is exactly $\\frac{5}{16}$. Given that $n < 20$, what is $n$?',
      answer: '$16$',
      solution:
        'The multiples of $3$ from $1$ to $n$ are $3, 6, 9, \\ldots$, and there are $\\left\\lfloor \\frac{n}{3} \\right\\rfloor$ of them, so the probability is $\\frac{\\lfloor n/3 \\rfloor}{n}$. Checking the values below $20$: $n = 15$ gives $\\frac{5}{15}$, $n = 16$ gives $\\frac{5}{16}$, $n = 17$ gives $\\frac{5}{17}$, $n = 18$ gives $\\frac{6}{18}$ — only $n = 16$ hits $\\frac{5}{16}$ ✓. A divisibility argument pins it without the scan: the favorable count is a whole number equal to $\\frac{5n}{16}$, and since $5$ and $16$ share no factor, $n$ must be a multiple of $16$; the only multiple of $16$ below $20$ is $16$ itself, and $16$ does have exactly $5$ multiples of $3$ ($3, 6, 9, 12, 15$) ✓. ANSWERING $15$ matches the numerator to the five multiples but forgets that the denominator counts every ticket: $15$ tickets would give $\\frac{5}{15} = \\frac{1}{3}$ ✗.',
    },
  ],

  // slot 2 — factors and multiples on a die or spinner (divisor list vs. pairing).
  //          Lanes: d12 factor of 18 -> 5/12; 10-sector factor of 60 -> 7/10;
  //          reversed: die multiple of k gives 1/3 -> k = 3.
  [
    {
      q: 'A fair twelve-sided die with faces numbered $1$ through $12$ is rolled once. What is the probability that the number showing is a factor of $18$?',
      answer: '$\\frac{5}{12}$',
      solution:
        'The twelve faces are equally likely. Testing them one at a time, $18$ is divisible by $1$, $2$, $3$, $6$, and $9$, and by none of $4$, $5$, $7$, $8$, $10$, $11$, $12$. That is $5$ favorable faces, so the probability is $\\frac{5}{12}$ ✓. Pairing the divisors of $18$ gives the same five a different way: the divisors come in pairs whose product is $18$, namely $1 \\cdot 18$, $2 \\cdot 9$, and $3 \\cdot 6$, so $18$ has exactly $6$ divisors; of those, only $18$ is too large to sit on the die, leaving $6 - 1 = 5$ ✓. COUNTING ALL SIX DIVISORS gives $\\frac{6}{12} = \\frac{1}{2}$; the die stops at $12$, so the divisor $18$ can never show ✗.',
    },
    {
      q: 'A spinner has $10$ equal sectors numbered $1$ through $10$, and it is spun once. What is the probability that it lands on a number that is a factor of $60$?',
      answer: '$\\frac{7}{10}$',
      solution:
        'The ten sectors are equally likely. Testing each: $60$ is divisible by $1, 2, 3, 4, 5, 6$, and by $10$, while $\\frac{60}{7}$, $\\frac{60}{8} = 7.5$, and $\\frac{60}{9}$ are not whole numbers. That is $7$ favorable sectors, so $\\frac{7}{10}$ ✓. The prime factorization confirms the count independently: $60 = 2^2 \\cdot 3 \\cdot 5$, so a number divides $60$ only if it is built from at most two $2$s, one $3$, and one $5$. Among $1$ through $10$ that rules out $7$ (a new prime), $8 = 2^3$ (too many $2$s), and $9 = 3^2$ (too many $3$s), and admits the other seven ✓. STOPPING AT $6$ gives $\\frac{6}{10} = \\frac{3}{5}$; it misses that $10$ divides $60$ as well ✗.',
    },
    {
      q: 'A standard die is rolled once. For some whole number $k$ greater than $1$, the probability that the number showing is a multiple of $k$ is exactly $\\frac{1}{3}$. What is $k$?',
      answer: '$3$',
      solution:
        'The six faces are equally likely, so a probability of $\\frac{1}{3}$ means exactly $2$ of the $6$ faces are multiples of $k$. Counting the multiples of $k$ on the die for each candidate: $k = 2$ gives $2, 4, 6$ (three faces), $k = 3$ gives $3, 6$ (two faces), $k = 4$ gives $4$, $k = 5$ gives $5$, $k = 6$ gives $6$, and any $k \\ge 7$ gives none. Only $k = 3$ leaves exactly two ✓. Solving with inequalities avoids the case list: the multiples of $k$ on the die are $k, 2k, 3k, \\ldots$, so having exactly two means $2k \\le 6$ and $3k > 6$, that is $k \\le 3$ and $k > 2$, forcing $k = 3$ ✓. ANSWERING $2$ takes the smallest candidate greater than $1$ without counting its multiples, but the even faces $2$, $4$, $6$ are half of the die: $\\frac{3}{6} = \\frac{1}{2}$ ✗.',
    },
  ],

  // slot 3 — a sum that is a multiple (sum casework vs. residues or a per-face tally).
  //          Lanes: two d4 sum multiple of 3 -> 5/16; two of 1-11 at once sum
  //          multiple of 4 -> 13/55; derived: two dice, multiple of 4 and
  //          different faces -> 1/6.
  [
    {
      q: 'Two fair four-sided dice, each with faces numbered $1$ through $4$, are rolled independently. What is the probability that the sum of the two numbers showing is a multiple of $3$?',
      answer: '$\\frac{5}{16}$',
      solution:
        'The two dice give $4 \\times 4 = 16$ equally likely ordered outcomes, and the possible sums run from $2$ to $8$, so the multiples of $3$ available are $3$ and $6$. Sum $3$ comes from $(1,2)$ and $(2,1)$; sum $6$ comes from $(2,4)$, $(3,3)$, and $(4,2)$. That is $2 + 3 = 5$ outcomes, so $\\frac{5}{16}$ ✓. Remainders give the same five without any sums: the faces $1$, $2$, $3$, $4$ leave remainders $1$, $2$, $0$, $1$ when divided by $3$, so one face is a $0$, two faces are a $1$, and one face is a $2$. A sum is a multiple of $3$ when the two remainders are $0$ and $0$ ($1 \\cdot 1 = 1$ outcome), or $1$ and $2$ ($2 \\cdot 1 = 2$), or $2$ and $1$ ($1 \\cdot 2 = 2$), for $1 + 2 + 2 = 5$ ✓. TREATING THE SEVEN SUMS $2$ THROUGH $8$ AS EQUALLY LIKELY gives $\\frac{2}{7}$; sum $5$ happens four ways while sum $2$ happens once, so the sums are not equally likely outcomes ✗.',
    },
    {
      q: 'Two different tickets are drawn at the same time from a box of tickets numbered $1$ through $11$, every pair of tickets equally likely. What is the probability that the sum of the two numbers is a multiple of $4$?',
      answer: '$\\frac{13}{55}$',
      solution:
        'There are $\\binom{11}{2} = 55$ equally likely pairs, and two different tickets from $1$ through $11$ give sums from $3$ to $21$, so the multiples of $4$ available are $4$, $8$, $12$, $16$, $20$. Listing: sum $4$ is $\\{1,3\\}$; sum $8$ is $\\{1,7\\}, \\{2,6\\}, \\{3,5\\}$; sum $12$ is $\\{1,11\\}, \\{2,10\\}, \\{3,9\\}, \\{4,8\\}, \\{5,7\\}$; sum $16$ is $\\{5,11\\}, \\{6,10\\}, \\{7,9\\}$; sum $20$ is $\\{9,11\\}$. That is $1 + 3 + 5 + 3 + 1 = 13$ pairs, so $\\frac{13}{55}$ ✓. Sorting by remainder on division by $4$ gives $13$ another way: the tickets leaving remainder $0$ are $4, 8$ (two of them), remainder $1$ are $1, 5, 9$ (three), remainder $2$ are $2, 6, 10$ (three), remainder $3$ are $3, 7, 11$ (three). A pair sums to a multiple of $4$ when both remainders are $0$, giving $\\binom{2}{2} = 1$ pair, or both are $2$, giving $\\binom{3}{2} = 3$, or they are $1$ and $3$, giving $3 \\cdot 3 = 9$: total $1 + 3 + 9 = 13$ ✓. DIVIDING THE $13$ PAIRS BY THE $11 \\cdot 10 = 110$ ORDERED DRAWS gives $\\frac{13}{110}$; the two tickets come out at the same time, so the sample space must be unordered too ✗.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the sum of the two numbers showing is a multiple of $4$ and the two dice show different numbers?',
      answer: '$\\frac{1}{6}$',
      solution:
        'There are $36$ equally likely ordered outcomes. The multiples of $4$ that two dice can total are $4$, $8$, and $12$. Sum $4$ comes from $(1,3), (2,2), (3,1)$, sum $8$ from $(2,6), (3,5), (4,4), (5,3), (6,2)$, and sum $12$ only from $(6,6)$; dropping the three matched rolls $(2,2)$, $(4,4)$, $(6,6)$ leaves $(1,3), (3,1), (2,6), (6,2), (3,5), (5,3)$, six outcomes, so $\\frac{6}{36} = \\frac{1}{6}$ ✓. A tally over the first die confirms six without any sum casework: if the first die is $1$ the second must be $3$; if it is $2$ the second must be $6$; if it is $3$ the second is $1$ or $5$; if it is $4$ the only partner would be another $4$, which is barred; if it is $5$ the second is $3$; if it is $6$ the second is $2$, since $6$ again is barred. Those counts are $1, 1, 2, 0, 1, 1$, totaling $6$ ✓. KEEPING THE THREE MATCHED ROLLS gives $\\frac{9}{36} = \\frac{1}{4}$; the question asks for different numbers, and $(2,2)$, $(4,4)$, $(6,6)$ all show the same number twice ✗.',
    },
  ],

  // slot 4 — a threshold count over repeated trials (direct count vs. a reframe
  //          or complement). Lanes: six coins at least five heads -> 7/64; die
  //          three times, at least two above 4 -> 7/27; derived: four coins
  //          fewer than three heads -> 11/16.
  [
    {
      q: 'Six fair coins are flipped, all flips independent. What is the probability that at least five of them show heads?',
      answer: '$\\frac{7}{64}$',
      solution:
        'There are $2^6 = 64$ equally likely sequences of heads and tails. Exactly five heads means one coin shows tails, and there are $\\binom{6}{5} = 6$ ways to choose which coin that is; exactly six heads is the single sequence HHHHHH. That gives $6 + 1 = 7$ favorable sequences, so $\\frac{7}{64}$ ✓. Reframing by tails counts the same seven without binomials: “at least five heads” is the same as “at most one tail”, and a sequence with at most one tail is described completely by saying which coin is the tail or that there is none — $6$ choices plus $1$, so $7$ sequences of the $64$ ✓. TREATING THE SEVEN HEAD-COUNTS $0$ THROUGH $6$ AS EQUALLY LIKELY gives $\\frac{2}{7}$; three heads happens $20$ ways while six heads happens once, so those totals are far from equally likely ✗.',
    },
    {
      q: 'A standard die is rolled three times, the rolls independent. What is the probability that at least two of the three rolls show a number greater than $4$?',
      answer: '$\\frac{7}{27}$',
      solution:
        'There are $6^3 = 216$ equally likely ordered triples. Call a roll big if it shows $5$ or $6$ ($2$ faces) and small otherwise ($4$ faces). Exactly two big rolls: choose which two rolls are big in $\\binom{3}{2} = 3$ ways, fill them in $2 \\cdot 2 = 4$ ways, and fill the small roll in $4$ ways, for $3 \\cdot 4 \\cdot 4 = 48$ triples. All three big: $2^3 = 8$ triples. Total $48 + 8 = 56$, so $\\frac{56}{216} = \\frac{7}{27}$ ✓. Shrinking the die first gives the answer with much smaller numbers: since $2$ of the $6$ faces are big and $4$ are small, each roll behaves like drawing from a bag with one B slip and two S slips, so the three rolls give $3^3 = 27$ equally likely slip-triples. Exactly two Bs: pick the position of the S in $3$ ways and pick which of the two S slips it is in $2$ ways, $6$ triples; three Bs: $1$ triple. That is $\\frac{7}{27}$ ✓. STOPPING AT EXACTLY TWO BIG ROLLS gives $\\frac{48}{216} = \\frac{2}{9}$; “at least two” also allows all three ✗.',
    },
    {
      q: 'Four fair coins are flipped, all flips independent. What is the probability that fewer than three of them show heads?',
      answer: '$\\frac{11}{16}$',
      solution:
        'There are $2^4 = 16$ equally likely sequences. Fewer than three heads means zero, one, or two heads: $\\binom{4}{0} = 1$ sequence, $\\binom{4}{1} = 4$ sequences, and $\\binom{4}{2} = 6$ sequences, for $1 + 4 + 6 = 11$, so $\\frac{11}{16}$ ✓. Counting the unwanted sequences instead reaches the same place from the other side: three or more heads means either exactly one tail, which is $4$ sequences (one for each coin that could be the tail), or no tail at all, $1$ sequence, so $5$ sequences are unwanted and $16 - 5 = 11$ remain ✓. READING “FEWER THAN THREE” AS “AT MOST THREE” pulls in the $4$ sequences with exactly three heads and gives $\\frac{15}{16}$; three heads is not fewer than three ✗.',
    },
  ],

  // slot 5 — a stated probability fixes a count (fraction of the total vs. the
  //          complementary fraction or an equation). Lanes: 45 pens capped 7/9
  //          -> 10 uncapped; 54 vehicles trucks 2/9 -> 42 cars; reversed: 15
  //          white and green 2/5 -> total 25.
  [
    {
      q: 'A bin holds $45$ pens, some capped and the rest uncapped. One pen is taken at random, every pen equally likely, and the probability that it is capped is $\\frac{7}{9}$. How many of the pens are uncapped?',
      answer: '$10$',
      solution:
        'Since every pen is equally likely, the probability that a pen is capped is the share of pens that are capped, so the capped pens number $\\frac{7}{9} \\cdot 45 = 35$, and the uncapped pens number $45 - 35 = 10$ ✓. Working with the uncapped share directly never mentions $35$: a pen is either capped or uncapped, so the uncapped share is $1 - \\frac{7}{9} = \\frac{2}{9}$, and $\\frac{2}{9} \\cdot 45 = 10$ pens ✓. ANSWERING $35$ reports the capped pens; the question asks for the pens that are left ✗.',
    },
    {
      q: 'A parking lot holds $54$ vehicles, some cars and the rest trucks. One vehicle is picked at random, every vehicle equally likely, and the probability that it is a truck is $\\frac{2}{9}$. How many of the vehicles are cars?',
      answer: '$42$',
      solution:
        'Every vehicle is equally likely, so the probability of a truck is the share of vehicles that are trucks: the trucks number $\\frac{2}{9} \\cdot 54 = 12$, and the cars number $54 - 12 = 42$ ✓. Taking the car share first avoids the truck count: since a vehicle is either a car or a truck, the car share is $1 - \\frac{2}{9} = \\frac{7}{9}$, and $\\frac{7}{9} \\cdot 54 = 42$ cars ✓. ANSWERING $12$ reports the trucks, which is the count the probability names rather than the one the question asks for ✗.',
    },
    {
      q: 'A jar holds green marbles and white marbles only. There are $15$ white marbles, and one marble drawn at random, every marble equally likely, is green with probability $\\frac{2}{5}$. How many marbles are in the jar altogether?',
      answer: '$25$',
      solution:
        'A marble is green or white, so the white share is $1 - \\frac{2}{5} = \\frac{3}{5}$ of the jar. If the total is $T$, then $\\frac{3}{5} T = 15$, so $T = 15 \\cdot \\frac{5}{3} = 25$ ✓. Solving for the green marbles instead confirms it: if there are $g$ green marbles, the total is $g + 15$ and $\\frac{g}{g + 15} = \\frac{2}{5}$, so $5g = 2g + 30$, giving $g = 10$ and a jar of $10 + 15 = 25$ marbles ✓. TAKING $\\frac{2}{5}$ OF THE $15$ WHITE MARBLES gives $6$ green and a total of $21$; the probability is a share of the whole jar, not of the white marbles, and $\\frac{6}{21} = \\frac{2}{7}$, not $\\frac{2}{5}$ ✗.',
    },
  ],

  // slot 6 — a product that is a perfect power (product casework vs. a scan
  //          over the first roll). Lanes: two dice product a cube -> 1/12;
  //          spinner 1-5 twice product a square -> 7/25; derived: two dice,
  //          square product on different faces -> 1/18.
  [
    {
      q: 'Two standard dice are rolled. What is the probability that the product of the two numbers showing is a perfect cube?',
      answer: '$\\frac{1}{12}$',
      solution:
        'There are $36$ equally likely ordered outcomes, and the product runs from $1$ to $36$, so the perfect cubes in reach are $1$, $8$, and $27$. Product $1$ needs both dice at $1$: the outcome $(1,1)$. Product $8$ needs $1 \\cdot 8$, which no die can supply, or $2 \\cdot 4$: the outcomes $(2,4)$ and $(4,2)$. Product $27$ needs $1 \\cdot 27$ or $3 \\cdot 9$, and neither $27$ nor $9$ is on a die, so it is impossible. That is $3$ outcomes, so $\\frac{3}{36} = \\frac{1}{12}$ ✓. Scanning the first die confirms three without listing the cubes as a group: if the first die is $1$ the second must be $1$; if it is $2$ the second must be $4$; if it is $3$ the second would have to be $9$ (for $27$) — off the die; if it is $4$ the second must be $2$; if it is $5$ no product $5k$ with $k \\le 6$ is a cube; if it is $6$ the only candidate $27$ is not a multiple of $6$. The counts $1, 1, 0, 1, 0, 0$ total $3$ ✓. COUNTING EVERY PAIR WITH A PERFECT-SQUARE PRODUCT gives $\\frac{8}{36} = \\frac{2}{9}$; the six doubles $(a,a)$ make $a^2$, which is a square and almost never a cube ✗.',
    },
    {
      q: 'A spinner with $5$ equal sectors numbered $1$ through $5$ is spun twice, the spins independent. What is the probability that the product of the two spins is a perfect square?',
      answer: '$\\frac{7}{25}$',
      solution:
        'The two spins give $5 \\times 5 = 25$ equally likely ordered outcomes. If the two spins match, the product is $a \\cdot a = a^2$, a square every time: that is $5$ outcomes. If the spins differ, the product $ab$ with $a \\ne b$ and both at most $5$ can only be a square when $ab = 4 = 1 \\cdot 4$: the other squares up to $25$ need either a factor above $5$ ($9 = 1 \\cdot 9$ and $16 = 2 \\cdot 8$) or two equal factors ($1 = 1 \\cdot 1$ and $25 = 5 \\cdot 5$), both of which are ruled out here. That gives $(1,4)$ and $(4,1)$. Total $5 + 2 = 7$, so $\\frac{7}{25}$ ✓. Scanning the first spin agrees: a first spin of $1$ pairs with $1$ or $4$ ($2$ outcomes), of $2$ pairs only with $2$ ($2 \\cdot 8$ is out of range), of $3$ only with $3$, of $4$ with $1$ or $4$ ($2$ outcomes), of $5$ only with $5$. Those counts $2, 1, 1, 2, 1$ total $7$ ✓. COUNTING ONLY THE FIVE MATCHING SPINS gives $\\frac{5}{25} = \\frac{1}{5}$; it misses $1 \\cdot 4 = 4$, a square made from two different numbers ✗.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the product of the two numbers showing is a perfect square and the two dice show different numbers?',
      answer: '$\\frac{1}{18}$',
      solution:
        'There are $36$ equally likely ordered outcomes. Since the two numbers must differ, write the product as $ab$ with $a \\ne b$ and both at most $6$. The squares in reach are $1, 4, 9, 16, 25, 36$: product $1$ forces $1 \\cdot 1$ (matching, barred); product $4$ allows $1 \\cdot 4$; product $9$ needs $1 \\cdot 9$ (off the die) or $3 \\cdot 3$ (matching); product $16$ needs $2 \\cdot 8$ (off the die) or $4 \\cdot 4$ (matching); product $25$ needs $5 \\cdot 5$; product $36$ needs $6 \\cdot 6$. Only $(1,4)$ and $(4,1)$ survive, so $\\frac{2}{36} = \\frac{1}{18}$ ✓. A scan over the first die reaches the same two: a $1$ needs a partner that is itself a square and not $1$, so $4$; a $2$ needs $2k$ square with $k \\ne 2$, and $2 \\cdot 8$ is off the die; a $3$ needs $3k$ square with $k \\ne 3$, and $3 \\cdot 12$ is off the die; a $4$ needs $4k$ square with $k \\ne 4$, so $k = 1$; a $5$ needs $5 \\cdot 5$, barred; a $6$ needs $6 \\cdot 6$, barred. The counts $1, 0, 0, 1, 0, 0$ total $2$ ✓. KEEPING THE SIX DOUBLES gives $\\frac{8}{36} = \\frac{2}{9}$; every double has a square product but shows the same number on both dice ✗.',
    },
  ],

  // slot 7 — keeping something off the ends of a row (position symmetry vs. a
  //          full arrangement count). Lanes: PICTURE with C off the ends ->
  //          5/7; eight photographs with two portraits off the ends -> 15/28;
  //          reversed: one letter off the ends with 9/11 -> n = 11.
  [
    {
      q: 'The $7$ letters of the word PICTURE, all different, are written on identical tiles, one letter per tile, and the tiles are arranged in a row in random order, all $7!$ orders equally likely. What is the probability that the letter C is not at either end of the row?',
      answer: '$\\frac{5}{7}$',
      solution:
        'All seven letters are different, and by symmetry the tile carrying C is equally likely to land in any one of the $7$ positions. Two of those positions are ends, so $5$ are not, and the probability is $\\frac{5}{7}$ ✓. A full count agrees: choose C’s position from the $5$ interior spots, then arrange the other six letters in the remaining six spots in $6! = 720$ ways, for $5 \\cdot 720 = 3600$ favorable arrangements out of $7! = 5040$, and $\\frac{3600}{5040} = \\frac{5}{7}$ ✓. BARRING C FROM ONLY THE FIRST POSITION gives $\\frac{6}{7}$; the row has two ends, and the last position is just as forbidden as the first ✗.',
    },
    {
      q: 'Eight different photographs, two of which are portraits, are hung in a row in random order, all orders equally likely. What is the probability that neither portrait is at either end of the row?',
      answer: '$\\frac{15}{28}$',
      solution:
        'The pair of positions taken by the two portraits is an equally likely $2$-element subset of the $8$ positions, so there are $\\binom{8}{2} = 28$ equally likely position pairs. Both portraits avoid the ends exactly when the pair sits inside the $6$ interior positions, which happens in $\\binom{6}{2} = 15$ ways, so the probability is $\\frac{15}{28}$ ✓. Hanging them one at a time gives the same value without subsets: the first portrait lands in an interior position with probability $\\frac{6}{8}$, and then $5$ of the $7$ positions still open are interior, so the second follows with probability $\\frac{5}{7}$; multiplying, $\\frac{6}{8} \\cdot \\frac{5}{7} = \\frac{30}{56} = \\frac{15}{28}$ ✓. TREATING THE TWO PORTRAIT POSITIONS AS INDEPENDENT and squaring $\\frac{6}{8}$ gives $\\frac{9}{16}$; the first portrait uses up one interior spot, so the second one faces $5$ interior spots out of $7$, not $6$ out of $8$ ✗.',
    },
    {
      q: 'A word has $n$ different letters, no two alike. They are written on identical tiles, one letter per tile, and arranged in a row in random order, all $n!$ orders equally likely. The probability that one particular letter is not at either end of the row is exactly $\\frac{9}{11}$. What is $n$?',
      answer: '$11$',
      solution:
        'By symmetry the chosen letter is equally likely to occupy any one of the $n$ positions, and $n - 2$ of them are interior, so the probability is $\\frac{n - 2}{n}$. Setting $\\frac{n-2}{n} = \\frac{9}{11}$ gives $11n - 22 = 9n$, so $2n = 22$ and $n = 11$ ✓. The complement fixes $n$ without that equation: the letter IS at an end with probability $1 - \\frac{9}{11} = \\frac{2}{11}$, and there are exactly $2$ end positions among $n$, so $\\frac{2}{n} = \\frac{2}{11}$ and $n = 11$ ✓. ANSWERING $9$ reads the numerator as the number of letters, but a $9$-letter word would leave $9 - 2 = 7$ interior positions and a probability of $\\frac{7}{9}$ ✗.',
    },
  ],

  // slot 8 — two named people or items inside a random selection (direct build
  //          vs. complement or a stage-by-stage share). Lanes: team of 4 from 9
  //          with Rio in and Sky out -> 5/18; 4 of 9 paintings with exactly one
  //          of a pair -> 5/9; derived: committee of 3 from 7 with exactly one
  //          of Mia and Noah -> 4/7.
  [
    {
      q: 'A team of $4$ is chosen at random from $9$ players, two of whom are Rio and Sky, every set of four equally likely. What is the probability that Rio is on the team and Sky is not?',
      answer: '$\\frac{5}{18}$',
      solution:
        'There are $\\binom{9}{4} = 126$ equally likely teams. A favorable team holds Rio plus $3$ of the $7$ players who are neither Rio nor Sky, which is $\\binom{7}{3} = 35$ teams, so the probability is $\\frac{35}{126} = \\frac{5}{18}$ ✓. Two stages give the same value without those binomials: the team covers $4$ of the $9$ players, so by symmetry Rio is on it with probability $\\frac{4}{9}$; once Rio is in, the other $3$ spots are filled from the $8$ remaining players, and by the same symmetry Sky takes one of those spots with probability $\\frac{3}{8}$, so Sky stays off with probability $\\frac{5}{8}$. Multiplying, $\\frac{4}{9} \\cdot \\frac{5}{8} = \\frac{5}{18}$ ✓. ANSWERING $\\frac{4}{9}$ prices only Rio’s selection; that is $\\frac{56}{126}$, and it counts the $21$ teams that hold both Rio and Sky ✗.',
    },
    {
      q: 'Four of $9$ paintings, two of which are by the same artist, are chosen at random to hang in the hall, every set of four equally likely. What is the probability that exactly one of those two paintings is chosen?',
      answer: '$\\frac{5}{9}$',
      solution:
        'There are $\\binom{9}{4} = 126$ equally likely sets of four. Build a favorable set: choose which of the two paintings by that artist is in ($2$ ways), then fill the other $3$ slots from the $7$ paintings by other artists, $\\binom{7}{3} = 35$ ways. That gives $2 \\cdot 35 = 70$ sets, so $\\frac{70}{126} = \\frac{5}{9}$ ✓. Counting the other two cases instead reaches $70$ from the opposite side: both paintings chosen means the remaining $2$ slots come from the other $7$, $\\binom{7}{2} = 21$ sets; neither chosen means all $4$ come from the other $7$, $\\binom{7}{4} = 35$ sets. Subtracting, $126 - 21 - 35 = 70$ ✓. ANSWERING $\\frac{13}{18}$ prices “at least one of the two is chosen” — that is $126 - 35 = 91$ sets — and so counts the $21$ sets holding both ✗.',
    },
    {
      q: 'A committee of $3$ is chosen at random from $7$ people, two of whom are Mia and Noah, every set of three equally likely. What is the probability that exactly one of Mia and Noah is on the committee?',
      answer: '$\\frac{4}{7}$',
      solution:
        'There are $\\binom{7}{3} = 35$ equally likely committees. A favorable committee holds exactly one of the two: choose which one ($2$ ways), then fill the remaining $2$ seats from the $5$ other people, $\\binom{5}{2} = 10$ ways, for $2 \\cdot 10 = 20$ committees and a probability of $\\frac{20}{35} = \\frac{4}{7}$ ✓. Ruling out the other two cases gives $20$ independently: both are on the committee in $\\binom{5}{1} = 5$ ways (the third seat is anyone else), and neither is on it in $\\binom{5}{3} = 10$ ways, so $35 - 5 - 10 = 20$ committees are left ✓. ANSWERING $\\frac{5}{7}$ prices “at least one of them is chosen”, which is $25$ of the $35$ committees; that total folds in the $5$ committees holding both ✗.',
    },
  ],

  // slot 9 — a target sum from two different numbers (pair listing vs. a
  //          partner-symmetry argument or inclusion-exclusion). Lanes: two of
  //          1-12 (bib numbers) summing to 13 -> 1/11; two of 1-15 summing to 16 -> 1/15;
  //          derived: two of 1-10 summing to 11 or consecutive -> 13/45.
  [
    {
      q: 'Twelve runners wear bibs numbered $1$ through $12$. Two of the runners are picked at random to lead the warm-up, every pair equally likely. What is the probability that their bib numbers add up to $13$?',
      answer: '$\\frac{1}{11}$',
      solution:
        'There are $\\binom{12}{2} = 66$ equally likely pairs of runners. The bib pairs summing to $13$ are $\\{1,12\\}, \\{2,11\\}, \\{3,10\\}, \\{4,9\\}, \\{5,8\\}, \\{6,7\\}$ — six of them — so the probability is $\\frac{6}{66} = \\frac{1}{11}$ ✓. A partner argument skips the list: fix whichever number is drawn first, call it $a$; its partner must be $13 - a$, which for every $a$ from $1$ to $12$ is a different number in that same range (no number is its own partner, since $13$ is odd). So exactly $1$ of the $11$ remaining equally likely numbers completes the sum, giving $\\frac{1}{11}$ ✓. DIVIDING THE $6$ PAIRS BY THE $12 \\cdot 11 = 132$ ORDERED DRAWS gives $\\frac{1}{22}$; if the outcomes are ordered draws, then $\\{1,12\\}$ arrives two ways and the favorable count is $12$, not $6$ ✗.',
    },
    {
      q: 'A drum holds $15$ balls numbered $1$ through $15$. Two of them are drawn at the same time, every pair equally likely. What is the probability that the two numbers add up to $16$?',
      answer: '$\\frac{1}{15}$',
      solution:
        'There are $\\binom{15}{2} = 105$ equally likely pairs. The pairs summing to $16$ are $\\{1,15\\}, \\{2,14\\}, \\{3,13\\}, \\{4,12\\}, \\{5,11\\}, \\{6,10\\}, \\{7,9\\}$ — seven of them, and $8$ has no partner but itself — so the probability is $\\frac{7}{105} = \\frac{1}{15}$ ✓. A partner argument gets there differently: think of one ball as coming out first. With probability $\\frac{1}{15}$ it is the $8$, which can never be completed to $16$; otherwise, with probability $\\frac{14}{15}$, exactly one of the $14$ balls still in the drum is its partner, so the draw succeeds with probability $\\frac{1}{14}$. Altogether $\\frac{14}{15} \\cdot \\frac{1}{14} = \\frac{1}{15}$ ✓. COUNTING $\\{8,8\\}$ AS AN EIGHTH PAIR gives $\\frac{8}{105}$; the two balls drawn are different balls, and there is only one ball numbered $8$ ✗.',
    },
    {
      q: 'Two different integers are chosen at random from $1$ through $10$, every pair equally likely. What is the probability that they add up to $11$ or are consecutive integers (or both)?',
      answer: '$\\frac{13}{45}$',
      solution:
        'There are $\\binom{10}{2} = 45$ equally likely pairs. The pairs summing to $11$ are $\\{1,10\\}, \\{2,9\\}, \\{3,8\\}, \\{4,7\\}, \\{5,6\\}$, five of them. The consecutive pairs are $\\{1,2\\}, \\{2,3\\}, \\ldots, \\{9,10\\}$, nine of them. The pair $\\{5,6\\}$ is on both lists and no other pair is, so the count is $5 + 9 - 1 = 13$ and the probability is $\\frac{13}{45}$ ✓. Sorting the favorable pairs into two disjoint piles avoids the subtraction: the $9$ consecutive pairs, plus the sum-$11$ pairs that are not consecutive, namely $\\{1,10\\}, \\{2,9\\}, \\{3,8\\}, \\{4,7\\}$ — four of them, since $\\{5,6\\}$ is already counted as consecutive. That is $9 + 4 = 13$ pairs ✓. ADDING $5$ AND $9$ WITHOUT REMOVING THE OVERLAP gives $\\frac{14}{45}$; $\\{5,6\\}$ both sums to $11$ and is consecutive, so it would be counted twice ✗.',
    },
  ],

  // slot 10 — relative order and a required gap in a row (ordered position
  //           pairs vs. a gap tally or a block glue). Lanes: seven people, Rae
  //           left of Sid with at least two between -> 5/21; seven books,
  //           exactly two between -> 2/21; derived: five people, Ana left of
  //           Ben and directly beside him -> 1/5.
  [
    {
      q: 'Seven people, including Rae and Sid, stand in a row in random order, all orders equally likely. What is the probability that Rae stands somewhere to the left of Sid with at least two people between them?',
      answer: '$\\frac{5}{21}$',
      solution:
        'Only the two positions matter, and the ordered pair (Rae’s position, Sid’s position) is equally likely to be any of the $7 \\cdot 6 = 42$ ordered pairs of different positions. “Rae to the left with at least two people between” means Sid’s position minus Rae’s is at least $3$: Rae at position $1$ allows Sid at $4, 5, 6, 7$ ($4$ ways), Rae at $2$ allows $5, 6, 7$ ($3$), Rae at $3$ allows $6, 7$ ($2$), Rae at $4$ allows $7$ ($1$), and Rae at $5$ or later allows none. That is $4 + 3 + 2 + 1 = 10$ ordered pairs, so $\\frac{10}{42} = \\frac{5}{21}$ ✓. Counting by gap gives the same share another way: among the $\\binom{7}{2} = 21$ unordered position pairs, the number with a gap of $d$ is $7 - d$, so gaps $3, 4, 5, 6$ account for $4 + 3 + 2 + 1 = 10$ pairs. In each such pair Rae is the left one in half of the arrangements, so the probability is $\\frac{10}{21} \\cdot \\frac{1}{2} = \\frac{5}{21}$ ✓. FORGETTING THE LEFT-RIGHT HALVING gives $\\frac{10}{21}$, which prices “at least two people between them” in either order; the question fixes Rae on the left ✗.',
    },
    {
      q: 'Seven books, including an atlas and a thesaurus, are shelved in a row in random order, all orders equally likely. What is the probability that the atlas stands somewhere to the left of the thesaurus with exactly two books between them?',
      answer: '$\\frac{2}{21}$',
      solution:
        'The ordered pair (atlas position, thesaurus position) is equally likely to be any of the $7 \\cdot 6 = 42$ ordered pairs of different positions. Exactly two books between them, with the atlas on the left, means the thesaurus position is the atlas position plus $3$: the atlas can sit at $1, 2, 3$, or $4$, giving pairs $(1,4), (2,5), (3,6), (4,7)$ — four of them — so $\\frac{4}{42} = \\frac{2}{21}$ ✓. Gluing the pattern into a block counts arrangements instead: the stretch “atlas, book, book, thesaurus” fills $4$ consecutive shelf slots, so it can start at slot $1$, $2$, $3$, or $4$ — $4$ placements — and the other $5$ books fill the remaining slots in $5! = 120$ ways, for $4 \\cdot 120 = 480$ arrangements out of $7! = 5040$, and $\\frac{480}{5040} = \\frac{2}{21}$ ✓. ALLOWING EITHER ORDER gives $\\frac{8}{42} = \\frac{4}{21}$; that counts the thesaurus-first arrangements, which the stem excludes ✗.',
    },
    {
      q: 'Five people, including Ana and Ben, stand in a row in random order, all orders equally likely. What is the probability that Ana stands somewhere to the left of Ben and directly next to him?',
      answer: '$\\frac{1}{5}$',
      solution:
        'The ordered pair (Ana’s position, Ben’s position) is equally likely to be any of the $5 \\cdot 4 = 20$ ordered pairs of different positions. Ana directly to Ben’s left means Ben’s position is Ana’s plus $1$: $(1,2), (2,3), (3,4), (4,5)$, four pairs, so $\\frac{4}{20} = \\frac{1}{5}$ ✓. Gluing gives the same value by counting whole orders: treat the pair “Ana then Ben” as a single wide block, so the block and the other $3$ people make $4$ items to arrange, $4! = 24$ orders, out of $5! = 120$ total, and $\\frac{24}{120} = \\frac{1}{5}$ ✓. ALLOWING BEN ON EITHER SIDE OF ANA gives $\\frac{8}{20} = \\frac{2}{5}$; that doubles the count by admitting the orders with Ben on the left ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 7,
  worksheet,
}
