// Counting chapter 15 — variations for the CHALLENGE set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was brute-forced in node before the stem was written: full
//    enumeration of every discrete sample space (all strings over three or
//    four symbols, all subset pairs and triples, all $8^3$ spins and $6^5$
//    rolls, all $9000$ four-digit numbers, all shadings of the $3 \times 3$
//    grid, all switch settings and flip sequences, and the full $8!$
//    permutation sweep for the record problems), and the continuous keys by
//    exact decomposition cross-checked with Monte Carlo at $n = 4{,}000{,}000$.
//    Every key matches its pin. Pin deviations: none.
//  - Answer indices are derived from the base problem, never chosen: with
//    base index b, v1 = (b+1)%4, v2 = (b+3)%4, v3 = (b+2)%4.
//  - This is the capstone chapter, so every variation welds at least two
//    techniques, and every solution runs two genuinely different routes that
//    each end ✓: complement vs. a recursion (slots 1, 11), a label bijection
//    vs. summing over one set (slot 2), symmetry vs. a full residue or
//    binomial count (slot 3), linearity over positions vs. over values or a
//    double count (slots 4, 10, 12), a product-table vs. a row-pair count
//    (slot 5), a swap bijection vs. straight casework (slot 6), fold or
//    centroid decomposition vs. a slicing or volume argument (slot 7),
//    direct listing vs. a column-pattern or complement count (slot 8), a
//    step recursion vs. compositions (slot 9). Route two never re-imports
//    route one’s number.
//  - Each distractor is one named mistake, named in CAPS in the solution and
//    marked ✗, in the order the distractors appear.
//  - Conventions are settled in every stem: dice, coins, and spinners are
//    fair with independent trials; drawn objects are distinguishable;
//    "$0$ counts" whenever a multiple-of condition can be met by zero;
//    continuous choices are uniform and independent; expected values are
//    exact fractions.

const challenge = [
  // slot 1 — no-equal-neighbors strings with a coverage condition.
  //          Lanes: 6 symbols XYZ all used -> 90; 5 houses 4 colors -> 144;
  //          derived: 5 symbols, first = last -> 18.
  [
    {
      q: 'How many strings of $6$ symbols, each symbol chosen from $X$, $Y$, and $Z$, have no two equal symbols next to each other and use all three symbols at least once?',
      choices: ['$84$', '$93$', '$90$', '$96$'],
      answer: 2,
      solution:
        'Complement first. Strings with no equal neighbors: $3$ choices for the first symbol and $2$ for each of the next five, $3 \\cdot 2^5 = 96$. A string that misses a symbol uses only two, and with no equal neighbors it must alternate them, so each of the $3$ pairs of symbols gives exactly $2$ strings, $6$ in all; a string cannot miss two symbols. So $96 - 6 = 90$ ✓. Second route, by a recursion on the length. Let $u_n$ be the number of no-equal-neighbor strings of length $n$ that use all three symbols. A length-$n$ string using all three either extends a length-$(n-1)$ string that already used all three ($2$ choices of new symbol) or extends one of the $6$ alternating two-symbol strings by its missing symbol ($1$ way). So $u_n = 2u_{n-1} + 6$, and from $u_3 = 6$: $u_4 = 18$, $u_5 = 42$, $u_6 = 2 \\cdot 42 + 6 = 90$ ✓. The choice $84$ REMOVES FOUR ALTERNATING STRINGS PER PAIR of symbols instead of two ✗; $93$ REMOVES ONE STRING PER MISSING SYMBOL instead of two per pair ✗; $96$ SKIPS THE ALL-THREE CONDITION entirely ✗.',
    },
    {
      q: 'A row of $5$ houses is painted, each house in one of $4$ colors, so that no two neighboring houses get the same color and every one of the $4$ colors is used at least once. How many paintings are there?',
      choices: ['$144$', '$240$', '$324$', '$480$'],
      answer: 0,
      solution:
        'Build directly. With $5$ houses and $4$ colors all used, exactly one color repeats, on two houses. Choose the repeated color ($4$ ways), then arrange the multiset of five paint jobs — two alike, three different — in the row so that the two alike are not neighbors: all arrangements number $\\frac{5!}{2} = 60$, and gluing the pair together gives $4! = 24$ arrangements with them adjacent, so $60 - 24 = 36$ work. No other equal pair exists, so no other adjacency can fail, and the total is $4 \\cdot 36 = 144$ ✓. Second route, inclusion-exclusion on the colors used. No-equal-neighbor rows using colors from a fixed set of size $k$ number $k(k-1)^4$. Alternating add and subtract: $4 \\cdot 3^4 - \\binom{4}{3} \\cdot 3 \\cdot 2^4 + \\binom{4}{2} \\cdot 2 \\cdot 1^4 - 0 = 324 - 192 + 12 = 144$ ✓. The choice $240$ is $4 \\cdot 60$: it LETS THE TWO SAME-COLORED HOUSES SIT NEXT TO EACH OTHER ✗; $324$ SKIPS THE ALL-FOUR-COLORS CONDITION ✗; $480$ TREATS THE TWO SAME-COLORED HOUSES AS DIFFERENT and arranges $5!$ ways ✗.',
    },
    {
      q: 'How many strings of $5$ symbols, each symbol chosen from $X$, $Y$, and $Z$, have no two equal symbols next to each other and have their first symbol equal to their last symbol?',
      choices: ['$6$', '$12$', '$16$', '$18$'],
      answer: 3,
      solution:
        'Casework on the inside. Say the first and last symbols are both $A$ ($3$ choices of $A$). The second and fourth symbols must each avoid $A$, and the middle symbol must avoid both of them. If the second and fourth agree ($2$ choices of their common symbol), the middle can be either of the other two symbols: $2 \\cdot 2 = 4$ strings. If they disagree ($2$ orders of the two non-$A$ symbols), the middle must avoid both, so it is $A$: $2$ strings. That is $6$ per choice of $A$, and $3 \\cdot 6 = 18$ ✓. Second route, a return recursion. Let $c_n$ count no-equal-neighbor strings of length $n$ that start and end with the same fixed symbol. Every no-equal-neighbor string of length $n - 1$ either ends at that symbol or not, and only the $2^{n-2} - c_{n-1}$ that end elsewhere extend to end there. So $c_n = 2^{n-2} - c_{n-1}$: from $c_2 = 0$, $c_3 = 2 - 0 = 2$, $c_4 = 4 - 2 = 2$, $c_5 = 8 - 2 = 6$, and $3 \\cdot 6 = 18$ over the three symbols ✓. The choice $6$ FORGETS THE THREE CHOICES OF THE SHARED SYMBOL ✗; $12$ MISSES THE CASE where the second and fourth symbols disagree ✗; $16$ ASSUMES A THIRD of the $48$ no-equal-neighbor strings close up, but short strings return more often than that ✗.',
    },
  ],

  // slot 2 — subset pairs by labeling elements.
  //          Lanes: A ⊆ B, A ≠ B over {1..6} -> 665; |A∩B| = 1 over {1..5} -> 405;
  //          derived: chains A ⊆ B ⊆ C over {1..4} -> 256.
  [
    {
      q: 'How many ordered pairs $(A, B)$ of subsets of $\\{1, 2, 3, 4, 5, 6\\}$ have $A \\subseteq B$ and $A \\neq B$?',
      choices: ['$729$', '$4032$', '$665$', '$211$'],
      answer: 2,
      solution:
        'Label every element: it is in neither set, in $B$ only, or in both — the condition $A \\subseteq B$ forbids "in $A$ only." Each of the $6$ elements gets one of $3$ labels independently, $3^6 = 729$ pairs with $A \\subseteq B$; exactly $2^6 = 64$ of them have $A = B$ (no element labeled "$B$ only"), so $729 - 64 = 665$ ✓. Second route, summing over $B$. A set $B$ with $k$ elements has $2^k$ subsets, of which $2^k - 1$ differ from $B$, so the count is $\\sum_k \\binom{6}{k}(2^k - 1) = 6 \\cdot 1 + 15 \\cdot 3 + 20 \\cdot 7 + 15 \\cdot 15 + 6 \\cdot 31 + 1 \\cdot 63 = 6 + 45 + 140 + 225 + 186 + 63 = 665$ ✓. The choice $729$ ALLOWS $A = B$ ✗; $4032$ is $64 \\cdot 63$, EVERY ORDERED PAIR OF DIFFERENT SUBSETS whether or not one contains the other ✗; $211$ WORKS IN A FIVE-ELEMENT SET instead of six ✗.',
    },
    {
      q: 'How many ordered pairs $(A, B)$ of subsets of $\\{1, 2, 3, 4, 5\\}$ have $A \\cap B$ containing exactly one element?',
      choices: ['$405$', '$1280$', '$243$', '$80$'],
      answer: 0,
      solution:
        'Label every element by where it lands: in neither set, in $A$ only, in $B$ only, or in both. The condition says exactly one element is labeled "both": choose it ($5$ ways), and each of the other $4$ elements takes one of the $3$ remaining labels, $5 \\cdot 3^4 = 405$ ✓. Second route, summing over $A$. A fixed set $A$ with $a$ elements meets $B$ in exactly one element when $B$ picks one element of $A$ ($a$ ways), avoids the other $a - 1$, and does as it pleases on the $5 - a$ outside elements: $a \\cdot 2^{5-a}$ choices. Summing, $\\sum_a \\binom{5}{a} \\, a \\, 2^{5-a} = 5 \\cdot 16 + 10 \\cdot 2 \\cdot 8 + 10 \\cdot 3 \\cdot 4 + 5 \\cdot 4 \\cdot 2 + 1 \\cdot 5 \\cdot 1 = 80 + 160 + 120 + 40 + 5 = 405$ ✓. The choice $1280$ is $5 \\cdot 4^4$: it LETS THE OTHER FOUR ELEMENTS LAND IN BOTH SETS ✗; $243$ is $3^5$, the pairs whose INTERSECTION IS EMPTY ✗; $80$ is $5 \\cdot 2^4$: it GIVES THE OTHER ELEMENTS ONLY TWO HOMES instead of three ✗.',
    },
    {
      q: 'How many ordered triples $(A, B, C)$ of subsets of $\\{1, 2, 3, 4\\}$ satisfy $A \\subseteq B \\subseteq C$?',
      choices: ['$81$', '$64$', '$4096$', '$256$'],
      answer: 3,
      solution:
        'Label every element by how deep it sits in the chain: in none of the sets, in $C$ only, in $B$ and $C$, or in all three. The chain condition allows exactly these $4$ labels and no others, and each of the $4$ elements is labeled independently, so there are $4^4 = 256$ triples ✓. Second route, summing over the middle set. For a fixed $B$ with $k$ elements, $A$ is any of its $2^k$ subsets and $C$ is any of the $2^{4-k}$ supersets, so $B$ contributes $2^k \\cdot 2^{4-k} = 16$ triples no matter what $k$ is — and $16$ choices of $B$ times $16$ each gives $256$ ✓. The choice $81$ is $3^4$, the LABEL COUNT FOR A TWO-SET CHAIN $A \\subseteq B$ ✗; $64$ is $4^3$: it PUTS THE FOUR LABELS ON ONLY THREE ELEMENTS ✗; $4096$ is $(2^4)^3$, ALL TRIPLES OF SUBSETS with the chain condition ignored ✗.',
    },
  ],

  // slot 3 — divisibility of sums and products of independent trials.
  //          Lanes: spinner 1-8 x3 sum mult of 4 -> 1/4; five dice product
  //          mult of 3 -> 211/243; derived: given sum mult of 3, all same -> 1/12.
  [
    {
      q: 'A fair spinner with the numbers $1$ through $8$, each equally likely, is spun three times, the spins independent. What is the probability that the sum of the three spins is a multiple of $4$?',
      choices: ['$\\frac{31}{128}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{8}$'],
      answer: 1,
      solution:
        'Symmetry on the last spin: whatever the first two spins show, exactly $2$ of the $8$ numbers on the third spin complete a multiple of $4$, because $1$ through $8$ leave each remainder $0, 1, 2, 3$ (on division by $4$) exactly twice. So the probability is $\\frac{2}{8} = \\frac{1}{4}$ with no casework ✓. Second route, counting by remainders. Each spin’s remainder mod $4$ is uniform over $\\{0, 1, 2, 3\\}$, and of the $4^3 = 64$ remainder triples exactly $16$ sum to a multiple of $4$ — for any first two remainders, one of the four third remainders works. Each remainder triple stands for $2^3 = 8$ spin outcomes, so $16 \\cdot 8 = 128$ of the $512$ outcomes qualify, and $\\frac{128}{512} = \\frac{1}{4}$ ✓. The choice $\\frac{31}{128}$ DROPS THE EXTREME TOTALS $4$ and $24$, which are multiples of $4$ too ✗; $\\frac{1}{3}$ CARRIES OVER THE MULTIPLE-OF-THREE ANSWER from three dice ✗; $\\frac{1}{8}$ WORKS MOD $8$ instead of mod $4$ ✗.',
    },
    {
      q: 'Five standard dice are rolled. What is the probability that the product of the five numbers is a multiple of $3$?',
      choices: ['$\\frac{32}{243}$', '$\\frac{80}{243}$', '$\\frac{4651}{7776}$', '$\\frac{211}{243}$'],
      answer: 3,
      solution:
        'Complement. The product misses the factor $3$ exactly when no die shows $3$ or $6$, and each die avoids both with probability $\\frac{4}{6} = \\frac{2}{3}$, independently: $\\left(\\frac{2}{3}\\right)^5 = \\frac{32}{243}$. So the probability is $1 - \\frac{32}{243} = \\frac{211}{243}$ ✓. Second route, direct casework on how many dice show a multiple of $3$. Exactly $k$ of the five dice do so with probability $\\binom{5}{k}\\left(\\frac{1}{3}\\right)^k\\left(\\frac{2}{3}\\right)^{5-k}$, and any $k \\ge 1$ makes the product a multiple of $3$: over the denominator $243$ the counts are $80 + 80 + 40 + 10 + 1 = 211$, giving $\\frac{211}{243}$ ✓. The choice $\\frac{32}{243}$ REPORTS THE COMPLEMENT, the probability of no multiple of $3$ ✗; $\\frac{80}{243}$ COUNTS ONLY EXACTLY ONE qualifying die ✗; $\\frac{4651}{7776}$ TREATS $3$ AS THE ONLY QUALIFYING FACE and forgets that a $6$ also delivers the factor ✗.',
    },
    {
      q: 'Three standard dice are rolled, and the sum of the three numbers turns out to be a multiple of $3$. Given that, what is the probability that all three dice show the same number?',
      choices: ['$\\frac{1}{36}$', '$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{1}{18}$'],
      answer: 2,
      solution:
        'Count the condition first, by symmetry on the last die: whatever the first two dice show, exactly $2$ of the $6$ faces of the third make the sum a multiple of $3$, so $\\frac{1}{3}$ of the $216$ rolls — that is, $72$ — satisfy the condition. Every all-same roll $(a, a, a)$ has sum $3a$, a multiple of $3$, so all $6$ of them survive the conditioning, and the probability is $\\frac{6}{72} = \\frac{1}{12}$ ✓. Second route, through the distribution of totals. The multiples of $3$ among the sums are $3, 6, 9, 12, 15, 18$, hit by $1, 10, 25, 25, 10, 1$ rolls — again $72$ — and the six all-same rolls land one in each of those six totals: $(1,1,1)$ in $3$, $(2,2,2)$ in $6$, and so on. So the conditional probability is $\\frac{6}{72} = \\frac{1}{12}$ ✓. The choice $\\frac{1}{36}$ is $\\frac{6}{216}$: it FORGETS TO CONDITION on the sum ✗; $\\frac{1}{6}$ is $\\frac{6}{36}$: it TREATS THE CONDITION AS FIXING ONE DIE ✗; $\\frac{1}{18}$ DIVIDES BY HALF THE SAMPLE SPACE instead of a third ✗.',
    },
  ],

  // slot 4 — linearity over adjacent pairs.
  //          Lanes: 1-10 row differ-by-2 -> 8/5; 1-6 circle sum to 7 -> 6/5;
  //          reversed: differ-by-1 expectation 9/5 -> n = 10.
  [
    {
      q: 'The numbers $1$ through $10$ are written in a row in random order, all orders equally likely. What is the expected number of adjacent pairs (numbers next to each other in the row) whose two numbers differ by exactly $2$?',
      choices: ['$\\frac{8}{45}$', '$\\frac{4}{5}$', '$\\frac{9}{5}$', '$\\frac{8}{5}$'],
      answer: 3,
      solution:
        'One piece per pair of neighboring positions; there are $9$. Fix one: the ordered pair of numbers filling it is equally likely to be any of the $10 \\cdot 9 = 90$ ordered pairs of different numbers, and the pairs differing by $2$ are $\\{k, k+2\\}$ for $k = 1$ through $8$, each in two orders — $16$ of the $90$, probability $\\frac{8}{45}$. The pieces are dependent, but expected values add: $9 \\cdot \\frac{8}{45} = \\frac{8}{5}$ ✓. Second route, a double count over all $10!$ rows. Choose a neighboring position pair ($9$ ways), an ordered differ-by-$2$ pair to fill it ($16$ ways), and any arrangement of the other eight numbers ($8!$ ways): every (row, qualifying pair) meeting is counted once, so the total is $9 \\cdot 16 \\cdot 8!$, and dividing by $10!$ gives $\\frac{9 \\cdot 16}{90} = \\frac{8}{5}$ ✓. The choice $\\frac{8}{45}$ is a SINGLE POSITION PAIR, not all nine ✗; $\\frac{4}{5}$ COUNTS EACH VALUE PAIR IN ONLY ONE ORDER ✗; $\\frac{9}{5}$ USES NINE VALUE PAIRS when only $1$ through $8$ can start one ✗.',
    },
    {
      q: 'The numbers $1$ through $6$ are placed at random around a circle, all arrangements of the $6$ positions equally likely. What is the expected number of neighboring pairs whose two numbers sum to $7$?',
      choices: ['$\\frac{3}{5}$', '$\\frac{6}{5}$', '$\\frac{12}{5}$', '$\\frac{2}{5}$'],
      answer: 1,
      solution:
        'One piece per pair of neighboring positions; a circle of $6$ has $6$ of them. Fix one: its ordered pair of numbers is uniform over the $6 \\cdot 5 = 30$ ordered pairs, and the pairs summing to $7$ are $\\{1,6\\}$, $\\{2,5\\}$, $\\{3,4\\}$ in either order — $6$ of $30$, probability $\\frac{1}{5}$. Expected values add across the dependent pieces: $6 \\cdot \\frac{1}{5} = \\frac{6}{5}$ ✓. Second route, one piece per value pair. For a fixed pair such as $\\{1, 6\\}$, put $1$ in its seat: $6$ then sits in one of the $5$ remaining seats, $2$ of which are its neighbors, so the pair is adjacent with probability $\\frac{2}{5}$, and the three value pairs give $3 \\cdot \\frac{2}{5} = \\frac{6}{5}$ ✓. The choice $\\frac{3}{5}$ GIVES EACH VALUE PAIR PROBABILITY $\\frac{1}{5}$, the position-pair number, instead of $\\frac{2}{5}$ ✗; $\\frac{12}{5}$ COUNTS EVERY NEIGHBORING PAIR FROM BOTH SIDES ✗; $\\frac{2}{5}$ is a SINGLE VALUE PAIR, not all three ✗.',
    },
    {
      q: 'The numbers $1$ through $n$ (where $n \\ge 2$) are written in a row in random order, and the expected number of adjacent pairs whose two numbers differ by exactly $1$ is $\\frac{9}{5}$. What is $n$?',
      choices: ['$10$', '$9$', '$11$', '$19$'],
      answer: 0,
      solution:
        'One piece per pair of neighboring positions: there are $n - 1$, and each holds an ordered pair uniform over the $n(n-1)$ ordered pairs of different numbers, of which $2(n-1)$ differ by $1$. So the expectation is $(n-1) \\cdot \\frac{2(n-1)}{n(n-1)} = \\frac{2(n-1)}{n}$, and $\\frac{2(n-1)}{n} = \\frac{9}{5}$ gives $10n - 10 = 9n$, so $n = 10$ ✓. Second route, one piece per value pair. Two fixed numbers are adjacent in a random row of $n$ with probability $\\frac{2}{n}$ (line up the other $n - 2$ numbers, then the second number of the pair has $n$ slots relative to the first, $2$ of them adjacent — or count directly: $2(n-1) \\cdot (n-2)!$ of the $n!$ rows). The $n - 1$ value pairs $\\{k, k+1\\}$ give $(n-1) \\cdot \\frac{2}{n} = \\frac{2(n-1)}{n}$, and solving again forces $n = 10$ ✓. The choice $9$ USES $n$ POSITION PAIRS instead of $n - 1$, solving $\\frac{2n}{n+1} = \\frac{9}{5}$ ✗; $11$ USES $n - 2$ POSITION PAIRS, solving $\\frac{2(n-2)}{n-1} = \\frac{9}{5}$ ✗; $19$ PUTS $n + 1$ IN THE DENOMINATOR, solving $\\frac{2(n-1)}{n+1} = \\frac{9}{5}$ ✗.',
    },
  ],

  // slot 5 — matched halves of a four-digit string or four dice.
  //          Lanes: equal digit products -> 380; equal dice sums -> 146;
  //          derived: first digit-sum strictly greater -> 4500.
  [
    {
      q: 'How many four-digit positive integers have the product of their first two digits equal to the product of their last two digits?',
      choices: ['$209$', '$299$', '$570$', '$380$'],
      answer: 3,
      solution:
        'Split on whether the common product is $0$. Zero: the first product is $0$ exactly when the second digit is $0$ ($9$ choices of leading digit), and the last product is $0$ when the third or fourth digit is $0$ ($19$ pairs), so $9 \\cdot 19 = 171$. Nonzero: all four digits are $1$–$9$; group the $36$ distinct products of the $9 \\times 9$ table by how many ordered pairs $f$ produce them — $5$ products come from one pair ($1, 25, 49, 64, 81$), $22$ from two, $4$ from three ($4, 9, 16, 36$), and $5$ from four ($6, 8, 12, 18, 24$) — and matched front-back pairs number $\\sum f^2 = 5 + 22 \\cdot 4 + 4 \\cdot 9 + 5 \\cdot 16 = 209$. Total $171 + 209 = 380$ ✓. Second route, count with a free leading digit and strip. Nonzero core, recounted by leading digits: for first and third digits $a$ and $c$, write $\\frac{a}{c} = \\frac{a\'}{c\'}$ in lowest terms; then $ab = cd$ forces $(b, d) = (c\'t, a\'t)$, one solution for each $t \\le \\lfloor 9/\\max(a\', c\') \\rfloor$. The $9$ pairs with $a = c$ give $9$ solutions each ($81$), and the $72$ pairs with $a \\neq c$ give $128$ more — $209$ again, independently. With the leading digit free, zero-product matches number $19 \\cdot 19 = 361$, so $361 + 209 = 570$ strings; the $10 \\cdot 19 = 190$ of them starting with $0$ (any $(0, b)$ front, any zero-product back) are not four-digit numbers, and $570 - 190 = 380$ ✓. The choice $209$ DROPS EVERY ZERO PRODUCT ✗; $299$ THINKS ONLY THE FOURTH DIGIT CAN ZERO the last product, using $10$ pairs instead of $19$ ✗; $570$ LETS THE NUMBER START WITH $0$ ✗.',
    },
    {
      q: 'Four standard dice are rolled in order. How many of the $1296$ equally likely outcomes have the sum of the first two dice equal to the sum of the last two dice?',
      choices: ['$36$', '$146$', '$216$', '$286$'],
      answer: 1,
      solution:
        'Match the halves sum by sum. Two dice make the sums $2$ through $12$ in $1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1$ ways, and for a common sum $s$ the front pair and back pair choose independently, so the count is the sum of squares $1 + 4 + 9 + 16 + 25 + 36 + 25 + 16 + 9 + 4 + 1 = 146$ ✓. Second route, a bijection to a single total. Replace the last two dice by their complements $(7 - c, 7 - d)$ — a bijection on outcomes — and the condition $a + b = c + d$ becomes $a + b + (7 - c) + (7 - d) = 14$: the matched outcomes correspond exactly to four dice summing to $14$. Count those by stars and bars with the cap: solutions of $a\' + b\' + c\' + d\' = 10$ in $0$–$5$ number $\\binom{13}{3} - \\binom{4}{1}\\binom{7}{3} = 286 - 140 = 146$ ✓. The choice $36$ ADDS THE COUNTS INSTEAD OF SQUARING them, losing the independent back-pair choice ✗; $216$ PRETENDS THE BACK PAIR MATCHES ONE TIME IN SIX, as if a single die were completing the sum ✗; $286$ DROPS THE SIX-FACE CAP in the stars-and-bars count ✗.',
    },
    {
      q: 'How many four-digit positive integers have the sum of their first two digits strictly greater than the sum of their last two digits?',
      choices: ['$4500$', '$3885$', '$4165$', '$4665$'],
      answer: 0,
      solution:
        'Two complement bijections kill the comparison. First send only the back half to $(9 - d_3, 9 - d_4)$ — a bijection on back pairs — turning the condition $d_1 + d_2 > d_3 + d_4$ into $d_1 + d_2 + d_3 + d_4 \\ge 19$. Then map each whole number $d_1 d_2 d_3 d_4$ to $(10 - d_1)(9 - d_2)(9 - d_3)(9 - d_4)$: the leading digit stays in $1$–$9$, so this pairs the four-digit numbers off while sending the digit total $T$ to $37 - T$, matching totals $T \\ge 19$ with totals $37 - T \\le 18$ perfectly and fixing nothing, because $T = 18.5$ is impossible. So exactly half of the $9000$ four-digit numbers qualify: $4500$ ✓. Second route, straight summation. Front pairs make sum $s$ in $f(s) = s$ ways for $s \\le 9$ and $19 - s$ for $s \\ge 10$; back pairs make sum $t$ in $g(t) = t + 1$ ways for $t \\le 9$ and $19 - t$ for $t \\ge 10$. The running totals $G(s-1) = \\sum_{t < s} g(t)$ equal $\\frac{s(s+1)}{2}$ for $s \\le 10$ and $100 - \\frac{(19-s)(20-s)}{2}$ beyond, so the count is $\\sum_{s=1}^{9} s \\cdot \\frac{s(s+1)}{2} + \\sum_{s=10}^{18} (19 - s)\\left(100 - \\frac{(19-s)(20-s)}{2}\\right) = 1155 + 3345 = 4500$ ✓. The choice $3885$ COUNTS THE REVERSED INEQUALITY — the leading digit’s minimum of $1$ tilts front sums higher, so the two sides are not equal ✗; $4165$ HALVES $9000$ MINUS THE WRONG TIE COUNT, using the $670$ ties that allow a leading zero ✗; $4665$ ALLOWS THE LEADING ZERO everywhere, halving $10000 - 670$ ✗.',
    },
  ],

  // slot 6 — majority subsets via the swap bijection.
  //          Lanes: {1..8} more odds -> 93; 6 men 6 women more women -> 1586;
  //          derived: {1..10} at least as many odds -> 638.
  [
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 8\\}$ contain more odd numbers than even numbers? (The empty set has no odd numbers and no even numbers.)',
      choices: ['$70$', '$128$', '$93$', '$163$'],
      answer: 2,
      solution:
        'Swap each odd number $k$ with the even number $k + 1$: the swap is a bijection turning a subset with more odds into one with more evens and back, so those two families are equally big, and everything else is balanced. Balanced subsets take $j$ of the $4$ odds and $j$ of the $4$ evens: $\\sum_j \\binom{4}{j}^2 = \\binom{8}{4} = 70$, by the identity that choosing $4$ of $8$ splits as $j$ from one half and $4 - j$ from the other. So the answer is $\\frac{2^8 - 70}{2} = 93$ ✓. Second route, straight casework on (odds, evens) $= (o, e)$ with $o > e$: $\\binom{4}{1} \\cdot 1 = 4$, then $\\binom{4}{2}(1 + 4) = 30$, then $\\binom{4}{3}(1 + 4 + 6) = 44$, then $\\binom{4}{4}(1 + 4 + 6 + 4) = 15$, and $4 + 30 + 44 + 15 = 93$ ✓. The choice $70$ is the BALANCED COUNT ITSELF ✗; $128$ ASSUMES NO SUBSET IS BALANCED and halves $256$ ✗; $163$ COUNTS "AT LEAST AS MANY ODDS" by keeping the balanced subsets ✗.',
    },
    {
      q: 'A committee of any size (the empty committee allowed) is chosen from $6$ men and $6$ women. How many committees have strictly more women than men?',
      choices: ['$1586$', '$924$', '$2048$', '$2510$'],
      answer: 0,
      solution:
        'Pair each man with one fixed woman and swap the twelve people pairwise: the swap is a bijection exchanging woman-majority committees with man-majority ones, so those two families match, and the rest have equally many women as men. Balanced committees pick $j$ women and $j$ men: $\\sum_j \\binom{6}{j}^2 = \\binom{12}{6} = 924$. So woman-majority committees number $\\frac{2^{12} - 924}{2} = \\frac{4096 - 924}{2} = 1586$ ✓. Second route, casework on the number of women $w$, adding the man counts below it: $6 \\cdot 1 + 15 \\cdot 7 + 20 \\cdot 22 + 15 \\cdot 42 + 6 \\cdot 57 + 1 \\cdot 63 = 6 + 105 + 440 + 630 + 342 + 63 = 1586$ ✓ (the second factors are the running sums $1, 1{+}6, 1{+}6{+}15, \\ldots$ of $\\binom{6}{m}$). The choice $924$ is the BALANCED COUNT ✗; $2048$ HALVES $4096$ AS IF NO COMMITTEE WERE BALANCED ✗; $2510$ KEEPS THE BALANCED COMMITTEES, answering "at least as many women" ✗.',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ contain at least as many odd numbers as even numbers? (The empty set counts: it has zero of each.)',
      choices: ['$252$', '$386$', '$512$', '$638$'],
      answer: 3,
      solution:
        '"At least as many" splits into "strictly more" plus "balanced." Swapping each odd $k$ with the even $k + 1$ matches odd-majority subsets with even-majority ones, so odd-majority subsets number $\\frac{2^{10} - B}{2}$ where $B$ is the balanced count $\\sum_j \\binom{5}{j}^2 = \\binom{10}{5} = 252$; that gives $\\frac{1024 - 252}{2} = 386$, and $386 + 252 = 638$ ✓. Second route, direct casework on $o \\ge e$: $1 + 5 \\cdot 6 + 10 \\cdot 16 + 10 \\cdot 26 + 5 \\cdot 31 + 1 \\cdot 32 = 1 + 30 + 160 + 260 + 155 + 32 = 638$ ✓ (each term is $\\binom{5}{o}$ times the running sum of $\\binom{5}{e}$ over $e \\le o$). The choice $252$ is the BALANCED SUBSETS ALONE ✗; $386$ is STRICTLY MORE ODDS, dropping the balanced subsets the stem includes ✗; $512$ HALVES $1024$, ignoring balance entirely ✗.',
    },
  ],

  // slot 7 — distance to the boundary of a region.
  //          Lanes: 4x2 expected nearest-side distance -> 5/12; right triangle
  //          to hypotenuse -> 4/5; derived: 3x2, P(distance > 1/2) -> 1/3.
  [
    {
      q: 'A point is chosen uniformly at random inside a $4 \\times 2$ rectangle. What is the expected value of its distance to the nearest side of the rectangle?',
      choices: ['$\\frac{5}{12}$', '$\\frac{1}{2}$', '$\\frac{7}{18}$', '$\\frac{1}{3}$'],
      answer: 0,
      solution:
        'Cut along the folds where two sides tie for nearest: with corners $(0,0)$ and $(4,2)$, the $45^\\circ$ folds meet the ridge from $(1,1)$ to $(3,1)$, making two trapezoids and two triangles. Bottom trapezoid, corners $(0,0)$, $(4,0)$, $(3,1)$, $(1,1)$: the distance is the height $y$, the area is $3$, and the mean height of a trapezoid with bottom $4$, top $2$, height $1$ is $\\frac{2 \\cdot 2 + 4}{3(2 + 4)} = \\frac{4}{9}$; the top trapezoid matches. Left triangle, corners $(0,0)$, $(1,1)$, $(0,2)$: the distance is $x$, the area is $1$, and the mean of a coordinate over a triangle is its centroid coordinate, $\\frac{0 + 1 + 0}{3} = \\frac{1}{3}$; the right triangle matches. Weight by area: $\\frac{1}{8}\\left(2 \\cdot 3 \\cdot \\frac{4}{9} + 2 \\cdot 1 \\cdot \\frac{1}{3}\\right) = \\frac{1}{8} \\cdot \\frac{10}{3} = \\frac{5}{12}$ ✓. Second route, slice vertically instead. In the middle band $1 \\le x \\le 3$ (area $4$) the nearest side is the top or bottom, the distance is $\\min(y, 2 - y)$, and that minimum is uniform on $[0, 1]$ — mean $\\frac{1}{2}$. In each end piece (area $2$) the distance is $\\min(x, y, 2 - y)$ measuring $x$ from the near short side; folding $y$ makes this $\\min$ of two independent uniforms on $[0,1]$, and two uniform points cut $[0,1]$ into three gaps of equal expected length, so the mean is $\\frac{1}{3}$. Weighting, $\\frac{1}{8}\\left(4 \\cdot \\frac{1}{2} + 2 \\cdot 2 \\cdot \\frac{1}{3}\\right) = \\frac{5}{12}$ ✓. The choice $\\frac{1}{2}$ PRETENDS THE NEAREST SIDE IS ALWAYS THE TOP OR BOTTOM ✗; $\\frac{7}{18}$ CARRIES OVER THE $3 \\times 2$ RECTANGLE’S ANSWER ✗; $\\frac{1}{3}$ CARRIES OVER THE SQUARE’S ANSWER, where the four fold regions are congruent ✗.',
    },
    {
      q: 'A point is chosen uniformly at random inside a right triangle with legs of lengths $3$ and $4$. What is the expected value of its distance to the hypotenuse?',
      choices: ['$\\frac{8}{5}$', '$\\frac{12}{5}$', '$\\frac{4}{5}$', '$\\frac{6}{5}$'],
      answer: 2,
      solution:
        'Distance to a fixed line is a linear function of position, and the average of a linear function over a triangle is its value at the centroid — which averages the three vertices’ values. The two hypotenuse endpoints are at distance $0$ and the right-angle vertex is at the altitude $\\frac{3 \\cdot 4}{5} = \\frac{12}{5}$, so the expected distance is $\\frac{0 + 0 + \\frac{12}{5}}{3} = \\frac{4}{5}$ ✓. Second route, a volume. Build the solid over the triangle whose height at each point is that point’s distance to the hypotenuse: it is a pyramid with base the triangle (area $6$) and apex over the right-angle vertex at height $\\frac{12}{5}$, so its volume is $\\frac{1}{3} \\cdot 6 \\cdot \\frac{12}{5} = \\frac{24}{5}$, and the average height is volume over base area: $\\frac{24/5}{6} = \\frac{4}{5}$ ✓. The choice $\\frac{8}{5}$ TAKES TWO-THIRDS OF THE ALTITUDE, misreading the centroid’s $2:1$ ratio ✗; $\\frac{12}{5}$ is the FULL ALTITUDE, the largest possible distance ✗; $\\frac{6}{5}$ PUTS THE AVERAGE HALFWAY UP the altitude ✗.',
    },
    {
      q: 'A point is chosen uniformly at random inside a $3 \\times 2$ rectangle. What is the probability that its distance to the nearest side of the rectangle is greater than $\\frac{1}{2}$?',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{5}{8}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Every side must be farther than $\\frac{1}{2}$, which pens the point in the inner rectangle obtained by trimming $\\frac{1}{2}$ off each of the four sides: it measures $(3 - 1) \\times (2 - 1) = 2 \\times 1$, area $2$, out of area $6$ — probability $\\frac{2}{6} = \\frac{1}{3}$ ✓. Second route, complement by the boundary strip. Points within $\\frac{1}{2}$ of some side fill a border band of width $\\frac{1}{2}$: running the band along the perimeter counts $10 \\cdot \\frac{1}{2} = 5$, but each of the four corner $\\frac{1}{2} \\times \\frac{1}{2}$ squares is covered twice, so the band’s area is $5 - 4 \\cdot \\frac{1}{4} = 4$, leaving $\\frac{6 - 4}{6} = \\frac{1}{3}$ ✓. The choice $\\frac{1}{6}$ FORGETS TO ADD BACK THE CORNER SQUARES, making the band area $5$ ✗; $\\frac{5}{8}$ TRIMS EACH DIMENSION ONLY ONCE, using a $\\frac{5}{2} \\times \\frac{3}{2}$ inner rectangle ✗; $\\frac{2}{3}$ REPORTS THE COMPLEMENT ✗.',
    },
  ],

  // slot 8 — random selections avoiding adjacency.
  //          Lanes: 3x3 grid, 4 shaded no shared side -> 1/21; 8 round chairs,
  //          3 people not adjacent -> 2/7; derived: 3 shaded, no side or corner -> 2/21.
  [
    {
      q: 'A $3 \\times 3$ grid has $9$ unit squares. Four of the squares are chosen at random, with every set of four equally likely, and shaded. What is the probability that no two shaded squares share a side?',
      choices: ['$\\frac{1}{21}$', '$\\frac{5}{126}$', '$\\frac{2}{63}$', '$\\frac{11}{42}$'],
      answer: 0,
      solution:
        'There are $\\binom{9}{4} = 126$ selections; list the good ones by the center. Center shaded: every edge-middle square touches it, so the other three shaded squares must be corners — $\\binom{4}{3} = 4$ ways, and corners never touch. Center not shaded: choosing $c$ corners and $4 - c$ edge-middles, an edge-middle touches two corners and only one corner can be left out, so no mix works; that leaves all four corners ($1$ way) and all four edge-middles ($1$ way — edge-middles only meet at corners of squares, not sides). Total $6$, probability $\\frac{6}{126} = \\frac{1}{21}$ ✓. Second route, column patterns. A column can be shaded in the vertically-safe patterns $\\varnothing$, top, middle, bottom, or top-and-bottom, and side-sharing between columns means neighboring columns must use disjoint rows. Four shaded squares split over three columns as $2{+}0{+}2$ (top-and-bottom, empty, top-and-bottom: $1$ way), $2{+}1{+}1$ and $1{+}1{+}2$ (top-and-bottom, then middle, then top or bottom: $2$ ways each), or $1{+}2{+}1$ (middle, top-and-bottom, middle: $1$ way) — $6$ selections again ✓. The choice $\\frac{5}{126}$ FORGETS THE FOUR EDGE-MIDDLES selection ✗; $\\frac{2}{63}$ KEEPS ONLY THE CENTER-SHADED selections ✗; $\\frac{11}{42}$ ANSWERS THE THREE-SQUARE VERSION of the problem ✗.',
    },
    {
      q: 'Eight chairs are evenly spaced around a round table, and $3$ people pick seats at random, all $\\binom{8}{3}$ sets of three chairs equally likely. What is the probability that no two of them sit in adjacent chairs?',
      choices: ['$\\frac{1}{7}$', '$\\frac{5}{7}$', '$\\frac{2}{7}$', '$\\frac{5}{14}$'],
      answer: 2,
      solution:
        'Count the spread-out seatings by the gap method: sit one person anywhere ($8$ rotations of the pattern will be divided out by counting sets), or cleaner, count sets directly — circular selections of $3$ chairs from $8$ with no two adjacent number $\\frac{8}{8-3}\\binom{8-3}{3} = \\frac{8}{5} \\cdot 10 = 16$, so the probability is $\\frac{16}{56} = \\frac{2}{7}$ ✓. Second route, complement with inclusion-exclusion. Adjacent chair pairs number $8$; selections containing a given adjacent pair number $6$ (any third chair), totalling $48$, but each run of three consecutive chairs holds two adjacent pairs and is counted twice — there are $8$ such runs — so selections with some adjacency number $48 - 8 = 40$, leaving $56 - 40 = 16$ good ones and probability $\\frac{2}{7}$ ✓. The choice $\\frac{1}{7}$ SUBTRACTS $48$ WITHOUT ADDING BACK the double-counted triples ✗; $\\frac{5}{7}$ REPORTS THE COMPLEMENT ✗; $\\frac{5}{14}$ TREATS THE CHAIRS AS A ROW, using $\\binom{6}{3} = 20$ ✗.',
    },
    {
      q: 'A $3 \\times 3$ grid has $9$ unit squares. Three of the squares are chosen at random, with every set of three equally likely, and shaded. What is the probability that no two shaded squares share a side or a corner?',
      choices: ['$\\frac{1}{21}$', '$\\frac{2}{21}$', '$\\frac{11}{42}$', '$\\frac{1}{12}$'],
      answer: 1,
      solution:
        'There are $\\binom{9}{3} = 84$ selections. The center square touches all eight others by side or corner, so it is never shaded. Corners pairwise touch nothing (they sit two steps apart), so any three corners work: $4$ selections. An edge-middle touches the two corners of its side, the center, and both neighboring edge-middles — the only squares clear of it are the two far corners and the opposite edge-middle, and the opposite pair of those corners plus the edge-middle is exactly the good mix: two corners on one side with the opposite side’s edge-middle, $4$ selections (one per side); no selection uses two or more edge-middles, since any two edge-middles either share a corner or, if opposite, leave no third square clear of both. Total $8$, probability $\\frac{8}{84} = \\frac{2}{21}$ ✓. Second route, row patterns. Within a row the safe patterns are $\\varnothing$, one square, or the two ends; between neighboring rows, chosen columns must differ by at least $2$, which permits only end-against-opposite-end, and kills any two-square row next to a nonempty row. Splitting three squares over the rows: $2{+}0{+}1$ and $1{+}0{+}2$ give $3$ each (the lone square free in its row), and $1{+}1{+}1$ gives the two zigzags left-right-left and right-left-right — $3 + 3 + 2 = 8$ ✓. The choice $\\frac{1}{21}$ KEEPS ONLY THE THREE-CORNER selections ✗; $\\frac{11}{42}$ FORBIDS ONLY SHARED SIDES, ignoring corners ✗; $\\frac{1}{12}$ MISSES ONE of the eight selections ✗.',
    },
  ],

  // slot 9 — first-passage for +1/+2 steps.
  //          Lanes: frog reaches 5 -> 21/32; point total reaches 3 -> 5/8;
  //          derived: first jump 2, reaches 4 -> 3/4.
  [
    {
      q: 'A frog starts at $0$ on a number line. Each second it jumps forward $1$ unit or $2$ units, each with probability $\\frac{1}{2}$, independently of earlier jumps. What is the probability that the frog lands on $5$ at some point?',
      choices: ['$\\frac{11}{32}$', '$\\frac{5}{8}$', '$\\frac{11}{16}$', '$\\frac{21}{32}$'],
      answer: 3,
      solution:
        'Let $p_n$ be the probability of landing on $n$. To land on $n$ the frog must land on $n - 1$ and jump $1$, or land on $n - 2$ and jump $2$, and these cannot both happen, so $p_n = \\frac{1}{2}p_{n-1} + \\frac{1}{2}p_{n-2}$. From $p_0 = 1$ and $p_1 = \\frac{1}{2}$: $p_2 = \\frac{3}{4}$, $p_3 = \\frac{5}{8}$, $p_4 = \\frac{11}{16}$, $p_5 = \\frac{1}{2}\\left(\\frac{11}{16} + \\frac{5}{8}\\right) = \\frac{21}{32}$ ✓. Second route, compositions. The frog lands on $5$ exactly when some initial block of jumps sums to $5$, and each way of writing $5$ as an ordered sum of $1$’s and $2$’s is one such block, with probability $\\left(\\frac{1}{2}\\right)^{\\text{jumps}}$; blocks with $j$ twos use $5 - j$ jumps and number $\\binom{5-j}{j}$. Summing, $1 \\cdot \\frac{1}{32} + 4 \\cdot \\frac{1}{16} + 3 \\cdot \\frac{1}{8} = \\frac{1 + 8 + 12}{32} = \\frac{21}{32}$ ✓. The choice $\\frac{11}{32}$ is the COMPLEMENT, the probability of hopping over $5$ ✗; $\\frac{5}{8}$ STOPS AT $p_3$ ✗; $\\frac{11}{16}$ STOPS AT $p_4$, one step short ✗.',
    },
    {
      q: 'Nia flips a fair coin repeatedly, the flips independent. Each heads adds $1$ point and each tails adds $2$ points to her running total, which starts at $0$. What is the probability that her total ever equals exactly $3$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{11}{16}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'Let $q_n$ be the probability the total ever equals $n$. Hitting $n$ requires hitting $n - 1$ then flipping heads, or hitting $n - 2$ then flipping tails, and not both, so $q_n = \\frac{1}{2}q_{n-1} + \\frac{1}{2}q_{n-2}$ with $q_0 = 1$, $q_1 = \\frac{1}{2}$: $q_2 = \\frac{3}{4}$ and $q_3 = \\frac{1}{2}\\left(\\frac{3}{4} + \\frac{1}{2}\\right) = \\frac{5}{8}$ ✓. Second route, list the ways to spell $3$. The total passes through $3$ exactly when the first flips spell $1{+}1{+}1$, $1{+}2$, or $2{+}1$ — probabilities $\\frac{1}{8}$, $\\frac{1}{4}$, $\\frac{1}{4}$ — and no outcome spells two of these at once, so the probability is $\\frac{1}{8} + \\frac{1}{4} + \\frac{1}{4} = \\frac{5}{8}$ ✓. The choice $\\frac{1}{2}$ FORGETS THE ALL-HEADS ROUTE $1{+}1{+}1$ ✗; $\\frac{11}{16}$ AIMS AT A TOTAL OF $4$ instead of $3$ ✗; $\\frac{3}{4}$ STOPS AT $q_2$ ✗.',
    },
    {
      q: 'The frog again starts at $0$ and jumps forward $1$ or $2$ units each second, each with probability $\\frac{1}{2}$, independently. Its first jump turns out to be $2$ units. Given that, what is the probability that the frog lands on $4$ at some point?',
      choices: ['$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{11}{16}$'],
      answer: 0,
      solution:
        'After the first jump the frog sits at $2$, and the later jumps are unaffected by the conditioning, so the question is the probability of gaining exactly $2$ more at some point — the same as landing on $2$ from a fresh start: $p_2 = \\frac{1}{2}p_1 + \\frac{1}{2}p_0 = \\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{1}{2} = \\frac{3}{4}$ ✓. Second route, enumerate from $2$. The next jump is $2$ (landing on $4$ directly, probability $\\frac{1}{2}$) or $1$ (landing on $3$, after which only a $1$-jump hits $4$: probability $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$); these routes are disjoint and $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$ ✓. The choice $\\frac{1}{2}$ KEEPS ONLY THE DIRECT DOUBLE JUMP and forgets the $3$-then-$4$ route ✗; $\\frac{5}{8}$ ASKS FOR TWO MORE STEPS THAN NEEDED, the fresh-start $p_3$ ✗; $\\frac{11}{16}$ IGNORES THE GIVEN FIRST JUMP, reporting the unconditional $p_4$ ✗.',
    },
  ],

  // slot 10 — expected peaks.
  //          Lanes: 1-9 row -> 10/3; 1-9 circle -> 3; reversed: row expectation 4 -> n = 11.
  [
    {
      q: 'The numbers $1$ through $9$ are written in a row in random order. A number is a peak if it is larger than every number next to it (a number at an end has only one neighbor). What is the expected number of peaks?',
      choices: ['$3$', '$\\frac{10}{3}$', '$\\frac{17}{6}$', '$\\frac{9}{2}$'],
      answer: 1,
      solution:
        'One piece per position. An interior position is a peak when its number is the largest of the three in its window, which by symmetry happens with probability $\\frac{1}{3}$; an end position needs only to beat one neighbor, probability $\\frac{1}{2}$. With $7$ interior positions and $2$ ends, the expectation is $\\frac{7}{3} + 1 = \\frac{10}{3}$ ✓. Second route, one piece per value. The number $j$ sits at an end with probability $\\frac{2}{9}$ and beats its single neighbor with probability $\\frac{j-1}{8}$; it sits inside with probability $\\frac{7}{9}$ and beats both neighbors with probability $\\frac{(j-1)(j-2)}{8 \\cdot 7}$. Summing over $j$ with $\\sum (j - 1) = 36$ and $\\sum (j-1)(j-2) = 168$: $\\frac{2 \\cdot 36}{9 \\cdot 8} + \\frac{7 \\cdot 168}{9 \\cdot 56} = 1 + \\frac{7}{3} = \\frac{10}{3}$ ✓. The choice $3$ TREATS THE ENDS LIKE INTERIOR POSITIONS ✗; $\\frac{17}{6}$ DROPS ONE OF THE ENDS ✗; $\\frac{9}{2}$ TREATS EVERY POSITION LIKE AN END ✗.',
    },
    {
      q: 'The numbers $1$ through $9$ are placed at random around a circle, all arrangements of the $9$ positions equally likely. A number is a peak if it is larger than both of its neighbors. What is the expected number of peaks?',
      choices: ['$\\frac{7}{3}$', '$\\frac{8}{3}$', '$\\frac{10}{3}$', '$3$'],
      answer: 3,
      solution:
        'On a circle every position has two neighbors, so each of the $9$ positions is a peak exactly when its number is the largest of the three in its window — probability $\\frac{1}{3}$ by symmetry — and the expectation is $9 \\cdot \\frac{1}{3} = 3$ ✓. Second route, one piece per value. The number $j$ beats two uniformly random distinct others with probability $\\frac{(j-1)(j-2)}{8 \\cdot 7}$, so the expectation is $\\sum_j \\frac{(j-1)(j-2)}{56} = \\frac{168}{56} = 3$ — with the top number $9$ contributing its guaranteed $\\frac{8 \\cdot 7}{56} = 1$ ✓. The choice $\\frac{7}{3}$ COUNTS ONLY $7$ POSITIONS as if two were ends ✗; $\\frac{8}{3}$ CARRIES OVER THE SEVEN-NUMBER ROW’S ANSWER ✗; $\\frac{10}{3}$ ADDS ROW-STYLE END CORRECTIONS a circle does not have ✗.',
    },
    {
      q: 'The numbers $1$ through $n$ (where $n \\ge 3$) are written in a row in random order, and the expected number of peaks — numbers larger than every neighbor, where a number at an end has only one neighbor — is exactly $4$. What is $n$?',
      choices: ['$10$', '$14$', '$11$', '$12$'],
      answer: 2,
      solution:
        'Position pieces: $n - 2$ interior positions are peaks with probability $\\frac{1}{3}$ and the $2$ ends with probability $\\frac{1}{2}$, so the expectation is $\\frac{n-2}{3} + 1 = \\frac{n+1}{3}$. Setting $\\frac{n+1}{3} = 4$ gives $n = 11$ ✓. Second route, value pieces. The number $j$ is a peak with probability $\\frac{2}{n} \\cdot \\frac{j-1}{n-1} + \\frac{n-2}{n} \\cdot \\frac{(j-1)(j-2)}{(n-1)(n-2)}$; summing, $\\sum (j-1) = \\frac{n(n-1)}{2}$ makes the end part $1$, and $\\sum (j-1)(j-2) = \\frac{n(n-1)(n-2)}{3}$ makes the interior part $\\frac{n-2}{3}$ — the same $\\frac{n+1}{3}$, independently assembled, and $\\frac{n+1}{3} = 4$ again forces $n = 11$ ✓. The choice $10$ COUNTS $n - 1$ INTERIOR POSITIONS, solving $\\frac{n-1}{3} + 1 = 4$ ✗; $14$ FORGETS THE TWO ENDS, solving $\\frac{n-2}{3} = 4$ ✗; $12$ TREATS EVERY POSITION AS INTERIOR, solving $\\frac{n}{3} = 4$ ✗.',
    },
  ],

  // slot 11 — runs of equal outcomes in independent trials.
  //          Lanes: 8 flips contain HHH -> 107/256; 7 switches no two adjacent
  //          up -> 17/64; derived: 10 flips, three equal in a row -> 423/512.
  [
    {
      q: 'A fair coin is flipped $8$ times, the flips independent. What is the probability that at some point three consecutive flips are all heads?',
      choices: ['$\\frac{107}{256}$', '$\\frac{149}{256}$', '$\\frac{65}{128}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Complement: count length-$8$ sequences with no $HHH$. Sorting by the ending — $T$, $HT$, or $HHT$ glued onto a shorter good sequence — gives $a_n = a_{n-1} + a_{n-2} + a_{n-3}$ with $a_1 = 2$, $a_2 = 4$, $a_3 = 7$, then $13, 24, 44, 81, 149$. So $256 - 149 = 107$ sequences contain $HHH$, probability $\\frac{107}{256}$ ✓. Second route, march a state machine that remembers the current streak of heads ($0$, $1$, or $2$). From counts $(c_0, c_1, c_2)$, a tails sends everything to $c_0$ and a heads shifts the streak up, so the next counts are $(c_0 + c_1 + c_2, c_0, c_1)$. From $(1, 0, 0)$: $(1,1,0)$, $(2,1,1)$, $(4,2,1)$, $(7,4,2)$, $(13,7,4)$, $(24,13,7)$, $(44,24,13)$, $(81,44,24)$ — total $149$ survivors after $8$ flips, and $\\frac{256 - 149}{256} = \\frac{107}{256}$ ✓. The choice $\\frac{149}{256}$ REPORTS THE COMPLEMENT ✗; $\\frac{65}{128}$ CARRIES OVER THE TEN-FLIP ANSWER ✗; $\\frac{3}{4}$ ADDS THE SIX WINDOW PROBABILITIES $6 \\cdot \\frac{1}{8}$ as if the windows never overlapped ✗.',
    },
    {
      q: 'A row of $7$ light switches is set at random, each switch up or down with probability $\\frac{1}{2}$, independently. What is the probability that no two adjacent switches are both up? (A setting with no switches up counts.)',
      choices: ['$\\frac{21}{128}$', '$\\frac{33}{128}$', '$\\frac{17}{64}$', '$\\frac{47}{64}$'],
      answer: 2,
      solution:
        'Count good settings by a recursion on the row length: a good setting of $n$ switches ends in a down switch after a good setting of $n - 1$, or in down-then-up after a good setting of $n - 2$, so $b_n = b_{n-1} + b_{n-2}$ with $b_1 = 2$, $b_2 = 3$: $5, 8, 13, 21, 34$. That is $34$ of $128$, probability $\\frac{34}{128} = \\frac{17}{64}$ ✓. Second route, casework on the number of up switches $k$: placing $k$ non-adjacent ups among $7$ switches means choosing $k$ slots from $7 - k + 1$, and $\\binom{8}{0} + \\binom{7}{1} + \\binom{6}{2} + \\binom{5}{3} + \\binom{4}{4} = 1 + 7 + 15 + 10 + 1 = 34$ ✓. The choice $\\frac{21}{128}$ STOPS THE RECURSION AT SIX SWITCHES ✗; $\\frac{33}{128}$ DROPS THE ALL-DOWN SETTING, which the stem says counts ✗; $\\frac{47}{64}$ REPORTS THE COMPLEMENT ✗.',
    },
    {
      q: 'A fair coin is flipped $10$ times, the flips independent. What is the probability that at some point three consecutive flips all show the same face — three heads in a row or three tails in a row?',
      choices: ['$\\frac{65}{128}$', '$\\frac{423}{512}$', '$\\frac{457}{512}$', '$\\frac{89}{512}$'],
      answer: 1,
      solution:
        'Complement: no three equal in a row means every run has length $1$ or $2$. Recursion: a good sequence of length $n$ ends in a run of length $1$ (append the opposite of the last face of any good length-$(n-1)$ sequence) or length $2$ (append a doubled opposite face to any good length-$(n-2)$ sequence), so $c_n = c_{n-1} + c_{n-2}$ with $c_1 = 2$, $c_2 = 4$: $6, 10, 16, 26, 42, 68, 110, 178$. So the probability is $\\frac{1024 - 178}{1024} = \\frac{846}{1024} = \\frac{423}{512}$ ✓. Second route, a bijection. A sequence with all runs of length $1$ or $2$ is exactly a first face ($2$ ways) together with an ordered list of run lengths — a way of writing $10$ as an ordered sum of $1$’s and $2$’s, and those number the Fibonacci value $F_{11} = 89$. So $2 \\cdot 89 = 178$ sequences avoid a triple, and $\\frac{846}{1024} = \\frac{423}{512}$ again ✓. The choice $\\frac{65}{128}$ COUNTS ONLY HEADS TRIPLES, forgetting $TTT$ ✗; $\\frac{457}{512}$ STOPS THE RECURSION ONE STEP EARLY, using $110$ ✗; $\\frac{89}{512}$ REPORTS THE COMPLEMENT ✗.',
    },
  ],

  // slot 12 — records in a random shuffle.
  //          Lanes: 1-6, records among last two -> 11/30; 7 books visible -> 363/140;
  //          derived: 1-8, exactly one record among last three -> 107/336.
  [
    {
      q: 'Six cards numbered $1$ through $6$ are shuffled and laid out in a row from left to right. A card is a record if its number is larger than the number on every card to its left. What is the expected number of records among the last two cards of the row?',
      choices: ['$\\frac{1}{3}$', '$\\frac{3}{2}$', '$\\frac{11}{30}$', '$\\frac{49}{20}$'],
      answer: 2,
      solution:
        'One piece per position: the card in position $k$ is a record exactly when it is the largest of the first $k$ cards, and by symmetry that has probability $\\frac{1}{k}$. For the fifth and sixth cards, $\\frac{1}{5} + \\frac{1}{6} = \\frac{11}{30}$ — dependent pieces, but expected values add ✓. Second route, casework on where the $6$ lands. If the $6$ is among the first four cards ($\\frac{4}{6}$), neither late position can beat it: $0$ records. If the $6$ is fifth ($\\frac{1}{6}$): exactly $1$ record. If the $6$ is sixth ($\\frac{1}{6}$): position six is a record, and position five adds another exactly when the largest of the remaining five cards sits there, probability $\\frac{1}{5}$ — so $1 + \\frac{1}{5}$ on average. Total: $\\frac{1}{6} \\cdot 1 + \\frac{1}{6}\\left(1 + \\frac{1}{5}\\right) = \\frac{5 + 5 + 1}{30} = \\frac{11}{30}$ ✓. The choice $\\frac{1}{3}$ GIVES BOTH POSITIONS THE SIXTH CARD’S $\\frac{1}{6}$ ✗; $\\frac{3}{2}$ TREATS THE LAST TWO CARDS AS A FRESH TWO-CARD DECK ✗; $\\frac{49}{20}$ is the EXPECTED RECORDS IN THE WHOLE ROW ✗.',
    },
    {
      q: 'Seven books, all of different heights, are shelved in a row in random order. A book is visible from the left if it is taller than every book to its left (the leftmost book is always visible). What is the expected number of visible books?',
      choices: ['$\\frac{363}{140}$', '$\\frac{49}{20}$', '$\\frac{761}{280}$', '$\\frac{7}{2}$'],
      answer: 0,
      solution:
        'One piece per position: the book in position $k$ is visible exactly when it is the tallest of the first $k$, probability $\\frac{1}{k}$, so the expectation is $\\sum_{k=1}^{7} \\frac{1}{k} = \\frac{420 + 210 + 140 + 105 + 84 + 70 + 60}{420} = \\frac{1089}{420} = \\frac{363}{140}$ ✓. Second route, one piece per book. Rank the books by height; the $j$th tallest is visible exactly when it stands before all $j - 1$ taller books, and among those $j$ books each is equally likely to come first, probability $\\frac{1}{j}$. Summing over ranks gives $\\sum_{j=1}^{7} \\frac{1}{j}$ again — assembled from different indicators — and the same $\\frac{363}{140}$ ✓ (as a check, the tallest book contributes its guaranteed $1$). The choice $\\frac{49}{20}$ STOPS AT SIX BOOKS ✗; $\\frac{761}{280}$ SHELVES AN EIGHTH BOOK ✗; $\\frac{7}{2}$ GIVES EVERY BOOK PROBABILITY $\\frac{1}{2}$ ✗.',
    },
    {
      q: 'Eight cards numbered $1$ through $8$ are shuffled and laid out in a row from left to right. A card is a record if its number is larger than the number on every card to its left. What is the probability that exactly one of the last three cards of the row is a record?',
      choices: ['$\\frac{73}{168}$', '$\\frac{5}{8}$', '$\\frac{3}{8}$', '$\\frac{107}{336}$'],
      answer: 3,
      solution:
        'The record events at different positions are independent: position $k$ is a record when the largest of the first $k$ cards sits at $k$, and for $j < k$ the chance that both the largest of the first $j$ leads at $j$ and the largest of the first $k$ leads at $k$ is $\\frac{1}{j} \\cdot \\frac{1}{k}$ — choosing which of the first $k$ cards is biggest says nothing about the shuffle of the first $j$. So "exactly one of positions $6, 7, 8$" sums three products: $\\frac{1}{6} \\cdot \\frac{6}{7} \\cdot \\frac{7}{8} + \\frac{5}{6} \\cdot \\frac{1}{7} \\cdot \\frac{7}{8} + \\frac{5}{6} \\cdot \\frac{6}{7} \\cdot \\frac{1}{8} = \\frac{42 + 35 + 30}{336} = \\frac{107}{336}$ ✓. Second route, complement. No late record has probability $\\frac{5}{6} \\cdot \\frac{6}{7} \\cdot \\frac{7}{8} = \\frac{5}{8}$ (the product telescopes), and two or more has probability $\\left(\\frac{1}{42} + \\frac{1}{48} + \\frac{1}{56}\\right) - 2 \\cdot \\frac{1}{336} = \\frac{21 - 2}{336} = \\frac{19}{336}$ by inclusion-exclusion on the three pairs and the triple. Then $1 - \\frac{5}{8} - \\frac{19}{336} = \\frac{336 - 210 - 19}{336} = \\frac{107}{336}$ ✓. The choice $\\frac{73}{168}$ is the EXPECTED NUMBER of late records, not a probability of exactly one ✗; $\\frac{5}{8}$ is the probability of NO LATE RECORD AT ALL ✗; $\\frac{3}{8}$ is the probability of AT LEAST ONE late record ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 15,
  challenge,
}
