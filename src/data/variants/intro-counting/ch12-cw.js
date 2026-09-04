// Counting & Probability chapter 12 — variations for the challenge problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Rows and positions of Pascal’s triangle are numbered from $0$ wherever a
//    stem names one, a "subset" includes the empty set unless the stem rules it
//    out, and every bound on a committee or subset size is written out in full.
//  - Every keyed answer is reached twice along routes that share no steps: an
//    additive build of the triangle against a direct count, a complementary
//    count against constructive casework, a formula against a bijection.
//  - Each distractor is one named slip — an off-by-one row, a bound read as
//    "at most" instead of "fewer than", a dropped condition — named in CAPS.

const challenge = [
  // slot 1 — row sums from the number of entries, and back again
  [
    {
      q: 'One row of Pascal’s triangle has exactly $16$ entries. What is the sum of those entries? (The single $1$ at the top is row $0$.)',
      choices: ['$65536$', '$16384$', '$32768$', '$16$'],
      answer: 2,
      solution:
        'Route one, count rows and double. Row $0$ has $1$ entry, row $1$ has $2$, and each row down adds one more entry, so a row with $16$ entries is row $15$. Every entry of a row feeds into exactly two entries of the next row, so the row totals double: $1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768$, and the sixteenth of these is $32768$ ✓. Route two, count walks. A walk from the $1$ at the top takes one down-left or down-right step at each stage, and each step widens the row it lands in by one entry; a row of $16$ entries is therefore reached after $15$ steps. The entries of that row count the walks ending at each position, so their total is the number of $15$-step walks, and each step is a free choice between two: $2^{15} = 32768$ ✓. (The choice $65536$ READS "$16$ ENTRIES" AS ROW $16$ and sums $2^{16}$ ✗; $16384$ SLIPS THE OTHER WAY to row $14$ ✗; $16$ GIVES BACK THE NUMBER OF ENTRIES instead of their sum ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle has exactly $11$ entries. What is the sum of the entries of the row immediately below it? (The single $1$ at the top is row $0$.)',
      choices: ['$2048$', '$1024$', '$4096$', '$2047$'],
      answer: 0,
      solution:
        'Route one, step down the doubling. A row with $11$ entries is row $10$, since row $n$ has $n + 1$ entries, so the row asked about is row $11$. Row totals double as you descend: $1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048$, and the entry of that list for row $11$ is $2048$ ✓. Route two, count subsets. The row below has $12$ entries, and a row with $12$ entries holds $\\binom{11}{0}, \\binom{11}{1}, \\ldots, \\binom{11}{11}$. Adding those counts the subsets of an $11$-element set of every possible size, which is every subset: each of the $11$ elements is independently in or out, giving $2^{11} = 2048$ ✓. (The choice $1024$ SUMS THE GIVEN ROW instead of the one below it ✗; $4096$ READS "$11$ ENTRIES" AS ROW $11$ and then steps down to row $12$, two rows too far ✗; $2047$ SUBTRACTS A $1$ that was never left out of the sum ✗.)',
    },
    {
      q: '*Reversed:* The entries of one row of Pascal’s triangle add up to $8388608$. How many entries does that row have? (The single $1$ at the top is row $0$.)',
      choices: ['$23$', '$25$', '$22$', '$24$'],
      answer: 3,
      solution:
        'Route one, double up from the top. Row totals run $1, 2, 4, \\ldots$, doubling once per row, so counting doublings from $1$ up to $8388608$ gives $8388608 = 2^{23}$ and the row is row $23$. A row of the triangle runs from position $0$ to position $23$, which is $24$ entries ✓. Route two, count walks and their landing spots. Walks of $n$ steps from the top number $2^n$, and the entries of row $n$ count how many end at each position, so the row total $8388608$ means $2^n = 8388608$, giving $n = 23$ steps. A $23$-step walk is fixed by how many of its steps go down-right, and that number can be anything from $0$ to $23$ — $24$ possible landing spots, so $24$ entries ✓. (The choice $23$ NAMES THE ROW instead of counting its entries ✗; $25$ ADDS ONE TWICE, once for the row and once again for the entries ✗; $22$ STOPS ONE DOUBLING SHORT, landing on $2^{22} = 4194304$, and then reports that exponent ✗.)',
    },
  ],
  // slot 2 — Pascal’s identity forwards and backwards
  [
    {
      q: 'What is $\\binom{10}{5} + \\binom{10}{6}$?',
      choices: ['$462$', '$252$', '$924$', '$210$'],
      answer: 0,
      solution:
        'Route one, Pascal’s identity. Two side-by-side entries of a row add to the entry between them one row down, so $\\binom{10}{5} + \\binom{10}{6} = \\binom{11}{6}$. Building row $11$ from row $10$ gives $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$, and position $6$ holds $462$ ✓. Route two, evaluate both terms and add. Row $10$ is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$, so $\\binom{10}{5} = 252$ and $\\binom{10}{6} = 210$, and $252 + 210 = 462$ ✓. (The choice $252$ KEEPS ONLY $\\binom{10}{5}$ ✗; $924$ APPLIES THE IDENTITY ONE ROW TOO FAR, landing on $\\binom{12}{6}$ ✗; $210$ KEEPS ONLY $\\binom{10}{6}$ ✗.)',
    },
    {
      q: 'Two entries sitting side by side in row $16$ of Pascal’s triangle are $\\binom{16}{7}$ and $\\binom{16}{8}$. What is the value of the entry directly below and between them? (Rows and positions are numbered from $0$.)',
      choices: ['$12870$', '$11440$', '$24310$', '$25740$'],
      answer: 2,
      solution:
        'Route one, add the parents. Row $15$ has $\\binom{15}{6} = 5005$, $\\binom{15}{7} = 6435$ and $\\binom{15}{8} = 6435$, so building row $16$ additively gives $\\binom{16}{7} = 5005 + 6435 = 11440$ and $\\binom{16}{8} = 6435 + 6435 = 12870$. The entry directly below and between them is their sum: $11440 + 12870 = 24310$ ✓. Route two, step down the column by the ratio rule. The entry asked for is $\\binom{17}{8}$, and moving from row $16$ to row $17$ at a fixed position multiplies by $\\frac{17}{17 - 8} = \\frac{17}{9}$. So $\\binom{17}{8} = \\binom{16}{8} \\cdot \\frac{17}{9} = 12870 \\cdot \\frac{17}{9} = 1430 \\cdot 17 = 24310$ ✓. (The choice $12870$ NAMES THE LARGER OF THE TWO GIVEN ENTRIES instead of the entry below them ✗; $11440$ NAMES THE SMALLER ✗; $25740$ DOUBLES $\\binom{16}{8}$, treating the two side-by-side entries as equal ✗.)',
    },
    {
      q: '*Reversed:* For a positive integer $n$, $\\binom{n}{2} + \\binom{n}{3} = 969$. What is $\\binom{n}{2}$?',
      choices: ['$816$', '$153$', '$18$', '$171$'], answer: 1,
      solution:
        'Route one, collapse the sum. Pascal’s identity turns the left side into a single entry: $\\binom{n}{2} + \\binom{n}{3} = \\binom{n+1}{3}$. Walking down the position-$3$ diagonal gives $\\binom{17}{3} = 680$, $\\binom{18}{3} = 816$, $\\binom{19}{3} = 969$, so $n + 1 = 19$ and $n = 18$. Then $\\binom{18}{2} = \\frac{18 \\cdot 17}{2} = 153$ ✓. Route two, solve the equation as written. Writing $\\binom{n}{2} = \\frac{n(n-1)}{2}$ and $\\binom{n}{3} = \\frac{n(n-1)(n-2)}{6}$ and adding gives $\\frac{n(n-1)}{6}\\left(3 + n - 2\\right) = \\frac{n(n-1)(n+1)}{6}$. Setting that equal to $969$ gives $n(n-1)(n+1) = 5814$, and $18 \\cdot 17 \\cdot 19 = 5814$, so $n = 18$ and $\\frac{18 \\cdot 17}{2} = 153$ ✓. (The choice $816$ GIVES $\\binom{18}{3}$, the other term of the sum ✗; $18$ REPORTS $n$ ITSELF rather than $\\binom{n}{2}$ ✗; $171$ GIVES $\\binom{19}{2}$, taking the collapsed row $19$ as the answer’s row ✗.)',
    },
  ],
  // slot 3 — comparing two entries from different rows
  [
    {
      q: 'Which is larger, the entry in row $12$, position $4$ of Pascal’s triangle or the entry in row $11$, position $5$, and by how much? (Rows and positions are numbered from $0$.)',
      choices: ['Row $11$’s entry, by $33$', 'Row $12$’s entry, by $33$', 'They are equal', 'Row $11$’s entry, by $110$'],
      answer: 1,
      solution:
        'Route one, build both rows. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$, so position $5$ holds $462$. Adding neighbors gives row $12 = 1, 12, 66, 220, 495, \\ldots$, so position $4$ holds $495$. Then $495 - 462 = 33$, and row $12$’s entry is the larger ✓. Route two, count committees. Row $12$, position $4$ counts the $4$-member teams from $12$ people: $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = \\frac{11880}{24} = 495$. Row $11$, position $5$ counts the $5$-member teams from $11$ people: $\\frac{11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{120} = \\frac{55440}{120} = 462$. The first exceeds the second by $33$ ✓. (The choice "Row $11$’s entry, by $33$" GETS THE GAP RIGHT BUT REVERSES THE DIRECTION, assuming the lower row must hold the bigger number ✗; "They are equal" ASSUMES SYMMETRY MATCHES ENTRIES ACROSS DIFFERENT ROWS ✗; "Row $11$’s entry, by $110$" COUNTS POSITIONS FROM $1$, comparing $\\binom{12}{3} = 220$ with $\\binom{11}{4} = 330$ ✗.)',
    },
    {
      q: 'Which is larger, $\\binom{14}{5}$ or $\\binom{13}{6}$, and by how much?',
      choices: ['$\\binom{13}{6}$, by $286$', 'They are equal', '$\\binom{14}{5}$, by $715$', '$\\binom{14}{5}$, by $286$'],
      answer: 3,
      solution:
        'Route one, split the larger term with Pascal’s identity. $\\binom{14}{5} = \\binom{13}{4} + \\binom{13}{5} = 715 + 1287 = 2002$, while row $13$ gives $\\binom{13}{6} = 1716$ directly. So $\\binom{14}{5}$ is larger, by $2002 - 1716 = 286$ ✓. Route two, evaluate each as a product. $\\binom{14}{5} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10}{120} = \\frac{240240}{120} = 2002$ and $\\binom{13}{6} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{720} = \\frac{1235520}{720} = 1716$, and $2002 - 1716 = 286$ ✓. (The choice "$\\binom{13}{6}$, by $286$" REVERSES THE DIRECTION of the comparison ✗; "They are equal" TREATS $14 + 5$ AND $13 + 6$ AS INTERCHANGEABLE, as though only the total mattered ✗; "$\\binom{14}{5}$, by $715$" COMPARES AGAINST $\\binom{13}{5} = 1287$ instead of $\\binom{13}{6}$ ✗.)',
    },
    {
      q: '*Derived:* The entry in row $10$, position $3$ of Pascal’s triangle and the entry in row $9$, position $4$ differ by $6$. What is the sum of those two entries? (Rows and positions are numbered from $0$.)',
      choices: ['$6$', '$240$', '$246$', '$252$'],
      answer: 2,
      solution:
        'Route one, build the rows. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$; adding neighbors gives row $9 = 1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, whose position $4$ holds $126$, and again gives row $10 = 1, 10, 45, 120, 210, \\ldots$, whose position $3$ holds $120$. The sum is $120 + 126 = 246$ ✓. Route two, evaluate each as a product. Row $10$, position $3$ is $\\frac{10 \\cdot 9 \\cdot 8}{6} = 120$, and row $9$, position $4$ is $\\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24} = \\frac{3024}{24} = 126$; adding gives $246$ ✓. (The choice $6$ REPEATS THE GIVEN DIFFERENCE instead of the sum ✗; $240$ DOUBLES $120$, assuming the two entries are equal ✗; $252$ DOUBLES $126$, the same slip from the other side ✗.)',
    },
  ],
  // slot 4 — subset counts under a size bound
  [
    {
      q: 'A set has $7$ elements. How many of its subsets have fewer than $5$ elements? (The empty set is a subset and has $0$ elements.)',
      choices: ['$120$', '$107$', '$64$', '$99$'],
      answer: 3,
      solution:
        'Route one, count the complement. The set has $2^7 = 128$ subsets in all. Those with $5$ or more elements are the $\\binom{7}{5} = 21$ five-element subsets, the $\\binom{7}{6} = 7$ six-element ones and the single whole set: $21 + 7 + 1 = 29$. So $128 - 29 = 99$ have fewer than $5$ ✓. Route two, add the allowed sizes. Sizes $0$ through $4$ contribute $\\binom{7}{0} + \\binom{7}{1} + \\binom{7}{2} + \\binom{7}{3} + \\binom{7}{4} = 1 + 7 + 21 + 35 + 35 = 99$ ✓. (The choice $120$ READS "FEWER THAN $5$" AS "AT MOST $5$", leaving the $21$ five-element subsets in ✗; $107$ REMOVES ONLY THE FIVE-ELEMENT SUBSETS and forgets the six- and seven-element ones ✗; $64$ STOPS AT $3$ ELEMENTS, misreading the bound as "fewer than $4$" ✗.)',
    },
    {
      q: 'A set has $9$ elements. How many of its subsets have more than $6$ elements? (The whole set is a subset of itself.)',
      choices: ['$130$', '$46$', '$10$', '$466$'],
      answer: 1,
      solution:
        'Route one, add the allowed sizes. Sizes $7$, $8$ and $9$ contribute $\\binom{9}{7} + \\binom{9}{8} + \\binom{9}{9} = 36 + 9 + 1 = 46$ ✓. Route two, flip to the complement set. Sending each subset to the elements it leaves out is one-to-one, and a subset with more than $6$ elements leaves out fewer than $3$. So the count equals the number of subsets with $0$, $1$ or $2$ elements: $1 + 9 + 36 = 46$ ✓. (The choice $130$ READS "MORE THAN $6$" AS "AT LEAST $6$", adding the $84$ six-element subsets ✗; $10$ SHIFTS THE BOUND TO "MORE THAN $7$" ✗; $466$ GIVES THE COMPLEMENTARY COUNT, the subsets with $6$ or fewer elements ✗.)',
    },
    {
      q: '*Derived:* A set has $8$ elements. How many of its subsets have at least $2$ elements but fewer than $5$? (The empty set is a subset and has $0$ elements.)',
      choices: ['$154$', '$210$', '$163$', '$126$'],
      answer: 0,
      solution:
        'Route one, add the three allowed sizes. $\\binom{8}{2} + \\binom{8}{3} + \\binom{8}{4} = 28 + 56 + 70 = 154$ ✓. Route two, strip the two ends off. Sending each subset to the elements it leaves out shows that the subsets with $5$ or more elements are as many as those with $3$ or fewer: $1 + 8 + 28 + 56 = 93$. So the subsets with fewer than $5$ elements number $2^8 - 93 = 256 - 93 = 163$. Dropping the single empty subset and the $8$ one-element ones leaves $163 - 9 = 154$ ✓. (The choice $210$ READS THE UPPER BOUND AS "AT MOST $5$", adding the $56$ five-element subsets ✗; $163$ DROPS THE LOWER BOUND, counting every subset with fewer than $5$ elements ✗; $126$ READS THE LOWER BOUND AS "AT LEAST $3$", dropping the $28$ two-element subsets ✗.)',
    },
  ],
  // slot 5 — half a row, by position parity
  [
    {
      q: 'What is $\\binom{14}{1} + \\binom{14}{3} + \\binom{14}{5} + \\binom{14}{7} + \\binom{14}{9} + \\binom{14}{11} + \\binom{14}{13}$?',
      choices: ['$16384$', '$8191$', '$8192$', '$4096$'],
      answer: 2,
      solution:
        'Route one, split the row in half by the alternating sum. Every entry of row $14$ is the sum of the two entries above it, so writing $\\binom{14}{0} - \\binom{14}{1} + \\binom{14}{2} - \\cdots + \\binom{14}{14}$ and replacing each entry by its two parents makes every row-$13$ entry appear once with each sign; the alternating sum is $0$. That says the odd-position entries and the even-position entries have equal totals, and together they make the full row sum $2^{14} = 16384$. Each half is $\\frac{16384}{2} = 8192$ ✓. Route two, pair the subsets off. The listed terms count the subsets of a $14$-element set whose size is odd. Toggle whether element $1$ is in: this changes the size by exactly one, flipping odd to even and back, and doing it twice returns the original subset. So it matches the odd-size subsets one-to-one with the even-size ones, and exactly half of the $2^{14}$ subsets have odd size: $8192$ ✓. (The choice $16384$ SUMS THE WHOLE ROW, even positions included ✗; $8191$ SUBTRACTS A $1$ that was never in the sum — the $1$s at the ends of row $14$ both sit in even positions ✗; $4096$ HALVES A SECOND TIME, as if the odd positions split again ✗.)',
    },
    {
      q: 'What is the sum of the entries of row $15$ of Pascal’s triangle that sit in even-numbered positions? (Rows and positions are numbered from $0$, so position $0$ counts as even.)',
      choices: ['$16384$', '$32768$', '$16383$', '$8192$'],
      answer: 0,
      solution:
        'Route one, use the palindrome. Row $15$ reads the same forwards and backwards, so position $k$ and position $15 - k$ hold equal entries. Since $15$ is odd, those two positions always have opposite parity, so the pairing matches each even-position entry with an equal odd-position entry. The two halves are therefore equal, and the row totals $2^{15} = 32768$, so each half is $16384$ ✓. Route two, build row $15$ out of row $14$. Pascal’s rule gives $\\binom{15}{0} = \\binom{14}{0}$, $\\binom{15}{2} = \\binom{14}{1} + \\binom{14}{2}$, $\\binom{15}{4} = \\binom{14}{3} + \\binom{14}{4}$, and so on up to $\\binom{15}{14} = \\binom{14}{13} + \\binom{14}{14}$. Every entry of row $14$ is used exactly once across these, so the even-position total of row $15$ is the whole row-$14$ total, $2^{14} = 16384$ ✓. (The choice $32768$ SUMS THE WHOLE ROW ✗; $16383$ SUBTRACTS A $1$ THAT BELONGS IN THE SUM — position $0$ holds a $1$ and $0$ is even ✗; $8192$ ANSWERS FOR ROW $14$ instead of row $15$ ✗.)',
    },
    {
      q: '*Reversed:* For a positive integer $n$, the entries of row $n$ of Pascal’s triangle that sit in odd-numbered positions add up to $32768$. What is the single middle entry of row $n$? (Rows and positions are numbered from $0$.)',
      choices: ['$16$', '$65536$', '$11440$', '$12870$'],
      answer: 3,
      solution:
        'Route one, halve the row total. The alternating sum of any row is $0$, because replacing each entry by its two parents makes every entry of the row above appear once with each sign; so the odd positions and the even positions carry equal totals, each half of $2^n$. Then $2^{n-1} = 32768 = 2^{15}$, giving $n = 16$. Row $16$ has $17$ entries, whose middle sits at position $8$, and adding neighbors in row $15 = \\ldots, 6435, 6435, \\ldots$ gives $6435 + 6435 = 12870$ ✓. Route two, count walks and step along the row. The entries of row $n$ count the $n$-step walks from the top by landing position, and a walk lands in an odd position exactly when it takes an odd number of down-right steps; flipping the first step changes that parity and undoes itself, so exactly half of the $2^n$ walks qualify. From $2^{n-1} = 32768$ comes $n = 16$. Stepping across row $16$ by the ratio rule from $\\binom{16}{6} = 8008$ gives $\\binom{16}{7} = 8008 \\cdot \\frac{10}{7} = 11440$ and then $\\binom{16}{8} = 11440 \\cdot \\frac{9}{8} = 12870$ ✓. (The choice $16$ REPORTS $n$ instead of the middle entry ✗; $65536$ GIVES THE ROW TOTAL $2^{16}$ ✗; $11440$ TAKES POSITION $7$, one place short of the middle of a $17$-entry row ✗.)',
    },
  ],
  // slot 6 — locate a row from two entries, then read a neighboring row
  [
    {
      q: 'In one row of Pascal’s triangle, the entries in positions $3$ and $4$ are $560$ and $1820$. What is the entry in position $5$ of the next row down? (Rows and positions are numbered from $0$.)',
      choices: ['$2380$', '$6188$', '$4368$', '$12376$'],
      answer: 1,
      solution:
        'Route one, name the row and add. Walking down the position-$3$ diagonal gives $\\binom{15}{3} = 455$ and $\\binom{16}{3} = 560$, so the row is row $16$, and $\\binom{16}{4} = 1820$ confirms it. The entry asked for is $\\binom{17}{5} = \\binom{16}{4} + \\binom{16}{5}$, and stepping along row $16$ gives $\\binom{16}{5} = 1820 \\cdot \\frac{16 - 4}{5} = 1820 \\cdot \\frac{12}{5} = 4368$. So the answer is $1820 + 4368 = 6188$ ✓. Route two, count teams from $17$ people. Position $5$ of row $17$ counts the $5$-member teams that can be drawn from $17$ people: $\\frac{17 \\cdot 16 \\cdot 15 \\cdot 14 \\cdot 13}{120} = \\frac{742560}{120} = 6188$ ✓. (The choice $2380$ ADDS THE TWO GIVEN ENTRIES, which lands at position $4$ of the next row, not position $5$ ✗; $4368$ STAYS IN THE GIVEN ROW, reading position $5$ of row $16$ ✗; $12376$ OVERSHOOTS TO POSITION $6$ of row $17$ ✗.)',
    },
    {
      q: 'In one row of Pascal’s triangle, the entries in positions $2$ and $3$ are $105$ and $455$. What is the entry in position $3$ of the row immediately above? (Rows and positions are numbered from $0$.)',
      choices: ['$350$', '$560$', '$91$', '$364$'], answer: 3,
      solution:
        'Route one, name the row and subtract. Position $2$ of row $n$ is $\\frac{n(n-1)}{2}$, so $\\frac{n(n-1)}{2} = 105$ gives $n(n-1) = 210 = 15 \\cdot 14$ and $n = 15$; the entry $455$ in position $3$ agrees. Pascal’s rule says $\\binom{15}{3} = \\binom{14}{2} + \\binom{14}{3}$, and $\\binom{14}{2} = \\frac{14 \\cdot 13}{2} = 91$, so $\\binom{14}{3} = 455 - 91 = 364$ ✓. Route two, count committees from $14$ people. The row above is row $14$, and its position $3$ counts the $3$-member committees from $14$ people: $\\frac{14 \\cdot 13 \\cdot 12}{6} = \\frac{2184}{6} = 364$ ✓. (The choice $350$ SUBTRACTS $105$ FROM $455$, applying the additive rule sideways along the row ✗; $560$ ADDS THE GIVEN ENTRIES, which gives position $3$ of the row BELOW rather than above ✗; $91$ NAMES POSITION $2$ OF ROW $14$, one place to the left of the entry asked for ✗.)',
    },
    {
      q: '*Reversed:* In one row of Pascal’s triangle the entry in position $2$ is $153$, and in the next row down the entry in position $4$ is $3876$. What is the entry in position $3$ of the first of those two rows? (Rows and positions are numbered from $0$.)',
      choices: ['$3060$', '$969$', '$816$', '$171$'],
      answer: 2,
      solution:
        'Route one, use the first given only. Position $2$ of row $n$ is $\\frac{n(n-1)}{2}$, so $\\frac{n(n-1)}{2} = 153$ gives $n(n-1) = 306 = 18 \\cdot 17$ and the first row is row $18$. Its position $3$ is $\\frac{18 \\cdot 17 \\cdot 16}{6} = \\frac{4896}{6} = 816$ ✓. Route two, use the second given only. Call the rows $n$ and $n+1$; walking down the position-$4$ diagonal gives $\\binom{17}{4} = 2380$, $\\binom{18}{4} = 3060$, $\\binom{19}{4} = 3876$, so $n + 1 = 19$ and the first row is row $18$. Pascal’s rule then reads $\\binom{19}{4} = \\binom{18}{3} + \\binom{18}{4}$, so $\\binom{18}{3} = 3876 - 3060 = 816$ ✓. (The choice $3060$ GIVES $\\binom{18}{4}$, position $4$ of the first row rather than position $3$ ✗; $969$ GIVES POSITION $3$ OF THE ROW BELOW, the sum $153 + 816$ ✗; $171$ GIVES POSITION $2$ OF THE ROW BELOW, $\\binom{19}{2}$ ✗.)',
    },
  ],
  // slot 7 — parity of entries across a block of rows
  [
    {
      q: 'How many odd entries are there in rows $0$ through $8$ of Pascal’s triangle, all nine rows combined?',
      choices: ['$29$', '$45$', '$28$', '$27$'],
      answer: 0,
      solution:
        'Route one, build the rows and count. The rows are $1$; $1, 1$; $1, 2, 1$; $1, 3, 3, 1$; $1, 4, 6, 4, 1$; $1, 5, 10, 10, 5, 1$; $1, 6, 15, 20, 15, 6, 1$; $1, 7, 21, 35, 35, 21, 7, 1$; $1, 8, 28, 56, 70, 56, 28, 8, 1$, holding $1, 2, 2, 4, 2, 4, 4, 8, 2$ odd entries. Adding term by term: $1 + 2 + 2 + 4 + 2 + 4 + 4 + 8 + 2 = 29$ ✓. Route two, use the repeating parity block. Reduce every entry to odd or even. Rows $0$ through $3$ hold $1 + 2 + 2 + 4 = 9$ odd entries. Rows $4$ through $7$ are, in parity, a copy of that block down the left edge and another copy down the right edge with even numbers between them, so they hold $2 \\cdot 9 = 18$, bringing rows $0$ through $7$ to $27$. Row $8$ starts the next block, and the only odd entries a fresh block starts with are its two end $1$s, adding $2$ for $29$ ✓. (The choice $45$ COUNTS EVERY ENTRY in the nine rows ✗; $28$ LEAVES OUT ROW $0$ ✗; $27$ STOPS AT ROW $7$, leaving row $8$ out ✗.)',
    },
    {
      q: 'How many even entries are there in rows $0$ through $9$ of Pascal’s triangle, all ten rows combined?',
      choices: ['$33$', '$55$', '$22$', '$16$'], answer: 2,
      solution:
        'Route one, count the even entries row by row. Rows $0$ through $9$ contain $0, 0, 1, 0, 3, 2, 3, 0, 7, 6$ even entries: row $2$ has only its $2$, row $4$ has $4, 6, 4$, row $5$ has the two $10$s, row $6$ has $6, 20, 6$, rows $3$ and $7$ are entirely odd, row $8$ has all but its two end $1$s even, and row $9$ has $36, 84, 126, 126, 84, 36$. Adding term by term gives $22$ ✓. Route two, subtract the odd ones from the total. The ten rows hold $1 + 2 + \\cdots + 10 = 55$ entries. Rows $0$ through $7$ hold $27$ odd entries by the doubling parity block ($9$ in rows $0$–$3$, twice that in rows $4$–$7$), row $8$ adds its two end $1$s and row $9$ adds $1, 9, 9, 1$, so the odd entries number $27 + 2 + 4 = 33$. Then $55 - 33 = 22$ ✓. (The choice $33$ COUNTS THE ODD ENTRIES instead of the even ones ✗; $55$ COUNTS EVERY ENTRY in the ten rows ✗; $16$ STOPS AT ROW $8$, leaving row $9$’s six even entries out ✗.)',
    },
    {
      q: '*Derived:* How many odd entries are there in rows $0$ through $15$ of Pascal’s triangle, all sixteen rows combined?',
      choices: ['$136$', '$81$', '$55$', '$83$'],
      answer: 1,
      solution:
        'Route one, triple with each doubling of the block. Rows $0$–$1$ hold $1 + 2 = 3$ odd entries. Doubling the block height reproduces the block down the left edge and down the right edge with an all-even triangle between them, so the odd count triples: rows $0$–$3$ hold $9$, rows $0$–$7$ hold $27$ and rows $0$–$15$ hold $81$ ✓. Route two, count each row separately from its binary form. Row $n$ has $2^{d}$ odd entries, where $d$ is the number of $1$s in the binary form of $n$ — each carry-free digit doubles the odd count. For $n = 0$ through $15$ that gives $1, 2, 2, 4, 2, 4, 4, 8, 2, 4, 4, 8, 4, 8, 8, 16$, and adding term by term yields $3, 5, 9, 11, 15, 19, 27, 29, 33, 37, 45, 49, 57, 65, 81$ — a running total ending at $81$ ✓. (The choice $136$ COUNTS EVERY ENTRY in the sixteen rows ✗; $55$ COUNTS THE EVEN ENTRIES instead ✗; $83$ INCLUDES ROW $16$, whose two end $1$s are odd ✗.)',
    },
  ],
  // slot 8 — two independent groups, with membership requirements
  [
    {
      q: 'A school council can include any of its $7$ teachers and any of its $5$ students, in any numbers, as long as at least one student is on it. How many different councils are possible?',
      choices: ['$4096$', '$4095$', '$3937$', '$3968$'],
      answer: 3,
      solution:
        'Route one, choose the two groups separately. The teachers on the council form any subset of the $7$, the empty one allowed, which is $2^7 = 128$ ways. The students form any nonempty subset of the $5$, which is $2^5 - 1 = 31$ ways. The two choices are independent, so $128 \\times 31 = 3968$ ✓. Route two, count everything and remove the failures. Ignoring the requirement, each of the $12$ people is on or off, giving $2^{12} = 4096$ councils. A council fails only when it has no student, and those are exactly the councils built from teachers alone: $2^7 = 128$ of them. So $4096 - 128 = 3968$ ✓. (The choice $4096$ COUNTS EVERY COUNCIL and ignores the student requirement ✗; $4095$ REMOVES ONLY THE ONE EMPTY COUNCIL, leaving every teacher-only council in ✗; $3937$ ALSO FORCES AT LEAST ONE TEACHER, computing $127 \\times 31$ for a condition the stem never states ✗.)',
    },
    {
      q: 'A review panel can include any of $6$ writers and any of $5$ editors, in any numbers, as long as at least one writer and at least one editor are on it. How many different panels are possible?',
      choices: ['$2048$', '$1953$', '$2047$', '$1984$'], answer: 1,
      solution:
        'Route one, choose the two groups separately. The writers form any nonempty subset of the $6$: $2^6 - 1 = 63$ ways. The editors form any nonempty subset of the $5$: $2^5 - 1 = 31$ ways. Multiplying, $63 \\times 31 = 1953$ ✓. Route two, count everything and remove the failures with care. All panels, requirements ignored: $2^{11} = 2048$. Panels with no writer: $2^5 = 32$. Panels with no editor: $2^6 = 64$. The empty panel is the only one counted in both of those, so subtract $32$ and $64$ and add $1$ back: $2048 - 32 - 64 + 1 = 1953$ ✓. (The choice $2048$ COUNTS EVERY PANEL, both requirements ignored ✗; $2047$ REMOVES ONLY THE EMPTY PANEL ✗; $1984$ DROPS THE WRITER REQUIREMENT, computing $64 \\times 31$ ✗.)',
    },
    {
      q: '*Derived:* A school council can include any of its $6$ teachers and any of its $4$ students, in any numbers, as long as at least one teacher and at least one student are on it. How many different councils are possible?',
      choices: ['$945$', '$1008$', '$960$', '$1023$'],
      answer: 0,
      solution:
        'Route one, choose the two groups separately. Teachers: any nonempty subset of $6$, so $2^6 - 1 = 63$ ways. Students: any nonempty subset of $4$, so $2^4 - 1 = 15$ ways. Multiplying, $63 \\times 15 = 945$ ✓. Route two, count everything and remove the failures with care. All councils: $2^{10} = 1024$. Those with no teacher: $2^4 = 16$. Those with no student: $2^6 = 64$. The empty council is the only one in both, so $1024 - 16 - 64 + 1 = 945$ ✓. (The choice $1008$ ENFORCES ONLY THE TEACHER REQUIREMENT, computing $63 \\times 16$ ✗; $960$ ENFORCES ONLY THE STUDENT REQUIREMENT, computing $64 \\times 15$ ✗; $1023$ REMOVES ONLY THE EMPTY COUNCIL from the $1024$ ✗.)',
    },
  ],
  // slot 9 — one value appearing in two different rows
  [
    {
      q: 'The number $120$ appears in position $2$ of one row of Pascal’s triangle and in position $3$ of a different row. What is the sum of those two row numbers? (Rows and positions are numbered from $0$.)',
      choices: ['$20$', '$32$', '$26$', '$6$'],
      answer: 2,
      solution:
        'Route one, solve each equation. Position $2$ of row $n$ is $\\frac{n(n-1)}{2}$, so $n(n-1) = 240 = 16 \\cdot 15$ and that row is $16$. Position $3$ of row $n$ is $\\frac{n(n-1)(n-2)}{6}$, so $n(n-1)(n-2) = 720 = 10 \\cdot 9 \\cdot 8$ and that row is $10$. The sum is $16 + 10 = 26$ ✓. Route two, walk down each diagonal. The position-$2$ entries run $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120$ for rows $2$ through $16$, each obtained from the one above by adding the new row number, so $120$ sits in row $16$. The position-$3$ entries run $1, 4, 10, 20, 35, 56, 84, 120$ for rows $3$ through $10$, each the running total of the diagonal above it, so $120$ sits in row $10$. The sum is $26$ ✓. (The choice $20$ USES ROW $10$ TWICE ✗; $32$ USES ROW $16$ TWICE ✗; $6$ GIVES THE DIFFERENCE of the two row numbers instead of their sum ✗.)',
    },
    {
      q: 'The number $1540$ appears in position $2$ of one row of Pascal’s triangle and in position $3$ of a different row. By how much do those two row numbers differ? (Rows and positions are numbered from $0$.)',
      choices: ['$34$', '$78$', '$0$', '$33$'], answer: 0,
      solution:
        'Route one, solve each equation. From $\\frac{n(n-1)}{2} = 1540$ comes $n(n-1) = 3080 = 56 \\cdot 55$, so that row is $56$. From $\\frac{n(n-1)(n-2)}{6} = 1540$ comes $n(n-1)(n-2) = 9240 = 22 \\cdot 21 \\cdot 20$, so that row is $22$. The gap is $56 - 22 = 34$ ✓. Route two, climb the diagonals additively. On the position-$3$ diagonal, $\\binom{20}{3} = 1140$, then $\\binom{21}{3} = 1140 + \\binom{20}{2} = 1140 + 190 = 1330$ and $\\binom{22}{3} = 1330 + \\binom{21}{2} = 1330 + 210 = 1540$, so that row is $22$. On the position-$2$ diagonal each step adds the previous row number: from $\\binom{50}{2} = 1225$ come $1275, 1326, 1378, 1431, 1485, 1540$ for rows $51$ through $56$, so that row is $56$. The gap is $34$ ✓. (The choice $78$ ADDS THE ROW NUMBERS instead of subtracting them ✗; $0$ ASSUMES BOTH APPEARANCES SIT IN THE SAME ROW ✗; $33$ SOLVES $\\frac{n(n-1)}{2} = 1540$ AS $n^2 = 3080$, rounding down to row $55$ ✗.)',
    },
    {
      q: '*Reversed:* The number $3003$ sits in position $5$ of row $15$ of Pascal’s triangle and in position $6$ of row $14$. In which other position of each of those two rows does $3003$ appear? (Rows and positions are numbered from $0$.)',
      choices: [
        'Position $9$ of row $15$ and position $7$ of row $14$',
        'Position $10$ of row $15$ and position $9$ of row $14$',
        'Position $11$ of row $15$ and position $9$ of row $14$',
        'Position $10$ of row $15$ and position $8$ of row $14$',
      ],
      answer: 3,
      solution:
        'Route one, use the palindrome. Every row of Pascal’s triangle reads the same forwards and backwards, because choosing $k$ of $n$ people is the same job as naming the $n - k$ left out. So position $k$ of row $n$ is matched by position $n - k$: in row $15$ that is $15 - 5 = 10$, and in row $14$ it is $14 - 6 = 8$ ✓. Route two, step across each row by the ratio rule, where moving one position right multiplies by $\\frac{n-k}{k+1}$. In row $14$: $3003 \\cdot \\frac{8}{7} = 3432$ at position $7$, then $3432 \\cdot \\frac{7}{8} = 3003$ at position $8$. In row $15$: $3003 \\cdot \\frac{10}{6} = 5005$, then $\\cdot \\frac{9}{7} = 6435$, then $\\cdot \\frac{8}{8} = 6435$, then $\\cdot \\frac{7}{9} = 5005$, then $\\cdot \\frac{6}{10} = 3003$ — reaching $3003$ again at position $10$ ✓. (The first choice COUNTS BACK FROM THE FAR END STARTING AT $1$, subtracting one too many in each row ✗; the second USES ROW $15$’S SUBTRACTION FOR BOTH ROWS, taking $15 - 6 = 9$ inside row $14$ ✗; the third ADDS ONE to each mirrored position ✗.)',
    },
  ],
  // slot 10 — subsets of fixed size parity meeting a marked-element condition
  [
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 8\\}$ have an odd number of elements and contain exactly one of the numbers $1$ and $2$?',
      choices: ['$128$', '$64$', '$96$', '$32$'], answer: 1,
      solution:
        'Route one, build the subset in two stages. Decide which of $1$ and $2$ is in — $2$ ways, the other being out. The rest of the subset is drawn from $\\{3, 4, \\ldots, 8\\}$, six numbers, and must have an even number of elements so the total stays odd. Half of the $2^6 = 64$ subsets of a six-element set have even size, so there are $32$ ways, and $2 \\times 32 = 64$ ✓. Route two, sort the odd-size subsets by how many of $1$ and $2$ they use. There are $\\frac{2^8}{2} = 128$ odd-size subsets in all. Those containing both $1$ and $2$ need an odd-size remainder from the other six: $32$ of them. Those containing neither need an odd-size subset of the other six: $32$ again. What is left is $128 - 32 - 32 = 64$ ✓. (The choice $128$ COUNTS EVERY ODD-SIZE SUBSET, whether or not it uses $1$ or $2$ ✗; $96$ READS "EXACTLY ONE" AS "AT LEAST ONE", letting the subsets containing both back in ✗; $32$ HANDLES ONLY THE CASE where $1$ is in and $2$ is out ✗.)',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an even number of elements and contain exactly one of the numbers $1$, $2$ and $3$? The empty set counts as having $0$ elements, which is even.',
      choices: ['$512$', '$64$', '$448$', '$192$'], answer: 3,
      solution:
        'Route one, build the subset in two stages. Choose which one of $1$, $2$, $3$ is in — $3$ ways, the other two being out. The rest comes from $\\{4, 5, \\ldots, 10\\}$, seven numbers, and must have an odd number of elements so the total is even: half of $2^7 = 128$, which is $64$. So $3 \\times 64 = 192$ ✓. Route two, classify every even-size subset. There are $\\frac{2^{10}}{2} = 512$ even-size subsets. Using none of $1, 2, 3$ needs an even-size remainder from the other seven: $64$. Using exactly two — $3$ ways to pick the pair — needs an even-size remainder: $3 \\times 64 = 192$. Using all three needs an odd-size remainder: $64$. Those account for $64 + 192 + 64 = 320$, so the subsets using exactly one of the three number $512 - 320 = 192$ ✓. (The choice $512$ COUNTS EVERY EVEN-SIZE SUBSET ✗; $64$ HANDLES ONLY THE CASE where $1$ is in and $2$ and $3$ are out ✗; $448$ READS "EXACTLY ONE" AS "AT LEAST ONE", adding the subsets that use two or three of them ✗.)',
    },
    {
      q: '*Derived:* How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an even number of elements and contain neither $1$ nor $2$? The empty set counts as having $0$ elements, which is even.',
      choices: ['$256$', '$512$', '$128$', '$384$'], answer: 2,
      solution:
        'Route one, shrink the ground set. Such a subset is exactly an even-size subset of $\\{3, 4, \\ldots, 10\\}$, eight numbers. Toggling whether $3$ belongs matches the even-size subsets one-to-one with the odd-size ones, so half of the $2^8 = 256$ subsets qualify: $128$ ✓. Route two, add the sizes term by term. $\\binom{8}{0} + \\binom{8}{2} + \\binom{8}{4} + \\binom{8}{6} + \\binom{8}{8} = 1 + 28 + 70 + 28 + 1 = 128$ ✓. (The choice $256$ COUNTS EVERY SUBSET OF THE OTHER EIGHT NUMBERS, dropping the even-size condition ✗; $512$ COUNTS EVERY EVEN-SIZE SUBSET of the full ten ✗; $384$ GIVES THE COMPLEMENTARY COUNT, the even-size subsets that do use $1$ or $2$ ✗.)',
    },
  ],
  // slot 11 — solving for a club size from a committee count
  [
    {
      q: 'A club with $n$ members can form exactly $32647$ different committees that have at least $3$ members, for a positive integer $n$. What is $n$?',
      choices: ['$14$', '$13$', '$16$', '$15$'], answer: 3,
      solution:
        'Route one, count the complement. Committees of every size number $2^n$; the ones ruled out are the empty committee, the $n$ one-member committees and the $\\binom{n}{2}$ two-member committees, so the count is $2^n - 1 - n - \\binom{n}{2}$. At $n = 15$ that is $32768 - 1 - 15 - 105 = 32647$ ✓. Route two, add the allowed sizes forwards. Since $1 + n + \\binom{n}{2}$ stays in the low hundreds for a two-digit $n$ while row totals double, $32647$ can only sit just under $2^{15}$. Adding row $15$ from position $3$ on: $455 + 1365 + 3003 + 5005 + 6435 + 6435 + 5005 + 3003 + 1365 + 455 + 105 + 15 + 1$, whose running total is $455, 1820, 4823, 9828, 16263, 22698, 27703, 30706, 32071, 32526, 32631, 32646, 32647$ ✓. (The choice $14$ STOPS ONE MEMBER SHORT: a club of $14$ yields only $16278$ such committees ✗; $13$ MISREADS THE POWER OF TWO, using $2^{13}$ and landing on $8100$ ✗; $16$ OVERSHOOTS to $65399$ ✗.)',
    },
    {
      q: 'A club with $n$ members can form exactly $7814$ different committees that have at least $4$ members, for a positive integer $n$. What is $n$?',
      choices: ['$12$', '$13$', '$11$', '$14$'], answer: 1,
      solution:
        'Route one, count the complement. The committees ruled out are the empty one, the $n$ singles, the $\\binom{n}{2}$ pairs and the $\\binom{n}{3}$ triples, so the count is $2^n - 1 - n - \\binom{n}{2} - \\binom{n}{3}$. At $n = 13$ that is $8192 - 1 - 13 - 78 - 286 = 8192 - 378 = 7814$ ✓. Route two, add the allowed sizes forwards. The four discarded classes stay in the hundreds while row totals double, so $7814$ can only sit just under $2^{13}$. Adding row $13$ from position $4$ on: $715 + 1287 + 1716 + 1716 + 1287 + 715 + 286 + 78 + 13 + 1$, with running total $715, 2002, 3718, 5434, 6721, 7436, 7722, 7800, 7813, 7814$ ✓. (The choice $12$ FALLS SHORT: a club of $12$ yields $3797$ ✗; $11$ MISREADS THE POWER OF TWO, using $2^{11}$ and landing on $1816$ ✗; $14$ OVERSHOOTS to $15914$ ✗.)',
    },
    {
      q: '*Reversed:* A club has $11$ members. Counting committees of every size, from the empty one up to the whole club, how many of them have at least $3$ members?',
      choices: ['$1981$', '$2036$', '$2048$', '$1816$'],
      answer: 0,
      solution:
        'Route one, count the complement. Every member is on or off, giving $2^{11} = 2048$ committees. Remove the empty one, the $11$ single-member ones and the $\\binom{11}{2} = 55$ pairs: $2048 - 1 - 11 - 55 = 1981$ ✓. Route two, add the allowed sizes term by term. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$, and adding from position $3$ on gives $165 + 330 + 462 + 462 + 330 + 165 + 55 + 11 + 1$, with running total $165, 495, 957, 1419, 1749, 1914, 1969, 1980, 1981$ ✓. (The choice $2036$ DROPS ONLY THE EMPTY COMMITTEE AND THE SINGLES, answering "at least $2$" ✗; $2048$ COUNTS EVERY COMMITTEE, no lower bound applied ✗; $1816$ ALSO DROPS THE TRIPLES, answering "at least $4$" ✗.)',
    },
  ],
  // slot 12 — even or odd size, with "at least one" of a marked group
  [
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 12\\}$ have an even number of elements and contain at least one of the numbers $1$ and $2$? The empty set counts as having $0$ elements, which is even.',
      choices: ['$1536$', '$1024$', '$3072$', '$2048$'], answer: 0,
      solution:
        'Route one, subtract the ones that avoid both. Half of the $2^{12}$ subsets have even size, so there are $2048$ of them. Those avoiding $1$ and $2$ are exactly the even-size subsets of the other ten numbers, and half of $2^{10}$ is $512$. So $2048 - 512 = 1536$ ✓. Route two, case on how many of $1$ and $2$ are used. Using exactly one — $2$ ways — leaves an odd-size remainder from the other ten, which is $\\frac{2^{10}}{2} = 512$ each, giving $1024$. Using both leaves an even-size remainder from the other ten, another $512$. The total is $1024 + 512 = 1536$ ✓. (The choice $1024$ COUNTS ONLY THE SUBSETS USING EXACTLY ONE of $1$ and $2$ ✗; $3072$ DROPS THE EVEN-SIZE CONDITION, counting all $4096 - 1024$ subsets that meet at least one of $1$ and $2$ ✗; $2048$ COUNTS EVERY EVEN-SIZE SUBSET, the requirement ignored ✗.)',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an odd number of elements and contain at least one of the numbers $1$, $2$ and $3$?',
      choices: ['$192$', '$512$', '$448$', '$896$'], answer: 2,
      solution:
        'Route one, subtract the ones that avoid all three. Half of the $2^{10}$ subsets have odd size, so there are $512$. Those avoiding $1$, $2$ and $3$ are the odd-size subsets of the remaining seven numbers, and half of $2^7$ is $64$. So $512 - 64 = 448$ ✓. Route two, case on how many of $1$, $2$, $3$ are used. Exactly one — $3$ ways — leaves an even-size remainder from the other seven, $64$ each, giving $192$. Exactly two — $3$ ways — leaves an odd-size remainder, $64$ each, giving another $192$. All three leaves an even-size remainder, $64$. The total is $192 + 192 + 64 = 448$ ✓. (The choice $192$ COUNTS ONLY THE SUBSETS USING EXACTLY ONE of the three ✗; $512$ COUNTS EVERY ODD-SIZE SUBSET ✗; $896$ DROPS THE ODD-SIZE CONDITION, counting all $1024 - 128$ subsets that meet at least one of the three ✗.)',
    },
    {
      q: '*Derived:* How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an even number of elements and contain at least one of the numbers $1$, $2$, $3$ and $4$? The empty set counts as having $0$ elements, which is even.',
      choices: ['$512$', '$480$', '$448$', '$960$'],
      answer: 1,
      solution:
        'Route one, subtract the ones that avoid all four. Half of the $2^{10}$ subsets have even size: $512$. Those avoiding $1$, $2$, $3$ and $4$ are the even-size subsets of $\\{5, 6, \\ldots, 10\\}$, six numbers, and half of $2^6$ is $32$. So $512 - 32 = 480$ ✓. Route two, case on how many of the four marked numbers are used. Say $j$ of them are in, with $j$ from $1$ to $4$; the rest of the subset comes from the other six numbers and needs whichever parity makes the total even, and either parity accounts for half of $2^6$, namely $32$. The number of ways to pick which $j$ are used is $\\binom{4}{j}$, so the total is $32\\left(\\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4}\\right) = 32(4 + 6 + 4 + 1) = 32 \\times 15 = 480$ ✓. (The choice $512$ COUNTS EVERY EVEN-SIZE SUBSET ✗; $448$ USES ONLY THREE OF THE FOUR MARKED NUMBERS, subtracting $\\frac{2^7}{2} = 64$ instead of $32$ ✗; $960$ DROPS THE EVEN-SIZE CONDITION, counting all $1024 - 64$ subsets that meet at least one of the four ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 12,
  challenge,
}
