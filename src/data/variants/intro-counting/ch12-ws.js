// Counting chapter 12 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s
//    formatting: a bare value such as '$816$', a located entry such as
//    'Row $18$, $19$ entries', or a combination with its value such as
//    '$\binom{10}{5} = 252$'.
//  - Every key was computed exactly in node before the stem was written:
//    Pascal’s triangle built to row $140$ by the additive rule alone (BigInt,
//    no factorials), every subset, committee and team count obtained by
//    enumerating all $2^n$ bitmasks and testing the stated predicate, and
//    every displayed sum accumulated term by term. Every key matches its pin.
//    Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: the closed formula vs. a
//    climb through the triangle by the additive rule (slots 1, 2, 4, 5);
//    the doubling rule vs. counting subsets of a set (slot 3); direct sum vs.
//    complementary count vs. a recursion on one element (slots 6, 8); a
//    column-by-column search vs. writing the rows out (slot 7); casework vs.
//    inclusion–exclusion (slots 9, 10). The solution then names the most
//    tempting wrong answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: rows and positions are numbered
//    from $0$; "subset" includes the empty set unless the stem says
//    otherwise; a committee or team "of any size" includes the empty one
//    unless a lower bound is written out; every size bound is stated; an
//    unknown row or set size is declared a positive integer; and where row
//    symmetry would admit a second index the stem gives an explicit range.

const worksheet = [
  // slot 1 — the position-1 entry names the row.
  //          Lanes: position 1 = 18 -> position 3 (816); position 1 = 16 ->
  //          positions 2 and 3 added (680); reversed: position 3 = 969 ->
  //          position 2 (171).
  [
    {
      q: 'In one row of Pascal’s triangle, the entry in position $1$ is $18$. What is the entry in position $3$ of that row? (Rows and positions are numbered from $0$.)',
      answer: '$816$',
      solution:
        'Name the row, then use the formula. Position $1$ of row $n$ is always $n$ itself, because the second column of the triangle reads $1, 2, 3, 4, \\ldots$ going down. So this is row $18$, and position $3$ is $\\binom{18}{3} = \\frac{18 \\cdot 17 \\cdot 16}{3 \\cdot 2 \\cdot 1} = 816$ ✓. Second route, by the additive rule only. Pascal’s rule says the entry in row $18$, position $3$ is the sum of the two entries above it, $\\binom{17}{2} + \\binom{17}{3}$. Row $17$’s position $2$ is $\\frac{17 \\cdot 16}{2} = 136$ and its position $3$ is $\\frac{17 \\cdot 16 \\cdot 15}{6} = 680$, and $136 + 680 = 816$ ✓. COUNTING POSITIONS FROM $1$ INSTEAD OF $0$ lands on the third entry written down, which is position $2$, giving $\\binom{18}{2} = 153$ ✗.',
    },
    {
      q: 'In one row of Pascal’s triangle, the entry in position $1$ is $16$. What is the sum of the entries in positions $2$ and $3$ of that row? (Rows and positions are numbered from $0$.)',
      answer: '$680$',
      solution:
        'Find the row and add the two entries. Position $1$ of row $n$ equals $n$, so the row is row $16$. Then $\\binom{16}{2} = \\frac{16 \\cdot 15}{2} = 120$ and $\\binom{16}{3} = \\frac{16 \\cdot 15 \\cdot 14}{6} = 560$, and $120 + 560 = 680$ ✓. Second route, without evaluating either entry. Two side-by-side entries of a row add up to the entry sitting directly below and between them, so $\\binom{16}{2} + \\binom{16}{3} = \\binom{17}{3}$, one row farther down. That entry is $\\frac{17 \\cdot 16 \\cdot 15}{6} = 680$ ✓. TAKING THE SECOND AND THIRD ENTRIES WRITTEN DOWN uses positions $1$ and $2$ instead, giving $16 + 120 = 136$ ✗.',
    },
    {
      q: 'In one row of Pascal’s triangle, the entry in position $3$ is $969$. What is the entry in position $2$ of that row? (Rows and positions are numbered from $0$.)',
      answer: '$171$',
      solution:
        'Solve for the row first. Position $3$ of row $n$ is $\\binom{n}{3} = \\frac{n(n-1)(n-2)}{6}$, so $n(n-1)(n-2) = 5814$. Three consecutive integers with that product sit near $\\sqrt[3]{5814} \\approx 18$, and $19 \\cdot 18 \\cdot 17 = 5814$, so the row is row $19$. Its position $2$ entry is $\\binom{19}{2} = \\frac{19 \\cdot 18}{2} = 171$ ✓. Second route, by climbing the third column and then summing a column. The third column of the triangle reads $\\binom{17}{3} = 680$, $\\binom{18}{3} = 816$, $\\binom{19}{3} = 969$ — a hit at row $19$, and the column strictly increases, so no other row holds $969$ there. Position $2$ of row $19$ is then the running total $1 + 2 + 3 + \\cdots + 18$ of the column above it, which is $\\frac{18 \\cdot 19}{2} = 171$ ✓. STEPPING ALONG THE ROW WITH THE WRONG RATIO computes $969 \\cdot \\frac{3}{19}$ instead of $969 \\cdot \\frac{3}{17}$ and reports $153$ ✗.',
    },
  ],

  // slot 2 — Pascal's additive rule on named entries.
  //          Lanes: row 14 positions 3 and 4 -> row 15 position 4 (1365);
  //          a child and one parent -> the other parent (3003); reversed:
  //          row 13 position 5 and row 14 position 5 -> row 13 position 4 (715).
  [
    {
      q: 'The entry in row $14$, position $4$ of Pascal’s triangle is $1001$, and the entry in row $14$, position $3$ is $364$. What is the entry in row $15$, position $4$? (Rows and positions are numbered from $0$.)',
      answer: '$1365$',
      solution:
        'Use the additive rule. Every entry is the sum of the two entries diagonally above it, so row $15$, position $4$ sits below row $14$’s positions $3$ and $4$: $364 + 1001 = 1365$ ✓. Second route, from the formula, using neither given number. Row $15$, position $4$ is $\\binom{15}{4} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{32760}{24} = 1365$ ✓. PICKING THE WRONG PAIR OF PARENTS — positions $4$ and $5$ of row $14$, which are $1001$ and $2002$ — adds to $3003$, the entry in position $5$ of row $15$, one step too far along ✗.',
    },
    {
      q: 'The entry in row $16$, position $5$ of Pascal’s triangle is $4368$, and the entry in row $15$, position $4$ is $1365$. What is the entry in row $15$, position $5$? (Rows and positions are numbered from $0$.)',
      answer: '$3003$',
      solution:
        'Read the additive rule backwards. The entry in row $16$, position $5$ is the sum of row $15$’s positions $4$ and $5$, so the missing parent is $4368 - 1365 = 3003$ ✓. Second route, from the formula, using neither given number. Row $15$, position $5$ is $\\binom{15}{5} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12 \\cdot 11}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{360360}{120} = 3003$ ✓. ADDING THE TWO GIVEN NUMBERS treats the row $16$ entry as a parent rather than as the child; $4368 + 1365 = 5733$, which is not an entry of row $15$ at all — that row runs $1, 15, 105, 455, 1365, 3003, 5005, 6435, \\ldots$ ✗.',
    },
    {
      q: 'The entry in row $13$, position $5$ of Pascal’s triangle is $1287$ and the entry in row $14$, position $5$ is $2002$. What is the entry in row $13$, position $4$? (Rows and positions are numbered from $0$.)',
      answer: '$715$',
      solution:
        'Peel one parent off the child. Row $14$, position $5$ sits directly below row $13$’s positions $4$ and $5$, so those two parents add to $2002$. One of them is the given $1287$, so the other is $2002 - 1287 = 715$ ✓. Second route, from the formula, using neither given number. Row $13$, position $4$ is $\\binom{13}{4} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{17160}{24} = 715$ ✓. ADDING RATHER THAN SUBTRACTING treats the row $14$ entry as though it were the parent of the row $13$ entry, giving $2002 + 1287 = 3289$; that would put an entry of row $13$ above and larger than the row $14$ entry beneath it, which the additive rule forbids, since a child is the sum of two positive parents and so exceeds each of them ✗.',
    },
  ],

  // slot 3 — row sums are powers of two.
  //          Lanes: sum of row 17 (131072); rows 10, 11, 12 combined (7168);
  //          reversed: a row summing to 262144 (row 18, 19 entries).
  [
    {
      q: 'What is the sum of all the entries in row $17$ of Pascal’s triangle? (The single $1$ at the top is row $0$.)',
      answer: '$131072$',
      solution:
        'Use the doubling rule. Every entry of a row feeds into exactly two entries of the next row, so each row sums to twice the row above it. Row $0$ sums to $1$, so row $n$ sums to $2^n$, and row $17$ sums to $2^{17}$. Doubling up from $2^{10} = 1024$: $2048, 4096, 8192, 16384, 32768, 65536, 131072$ ✓. Second route, by counting subsets. Row $17$ lists $\\binom{17}{0}, \\binom{17}{1}, \\ldots, \\binom{17}{17}$, so its sum counts every subset of a $17$-element set, sorted by size. Counted a different way, a subset is built by deciding in or out for each of the $17$ elements independently, which is $2 \\cdot 2 \\cdots 2 = 2^{17} = 131072$ choices ✓. CONFUSING THE NUMBER OF ENTRIES WITH THE ROW NUMBER uses $2^{18} = 262144$ because row $17$ has $18$ entries; the exponent is the row number, not the entry count ✗.',
    },
    {
      q: 'What is the sum of every entry in rows $10$, $11$ and $12$ of Pascal’s triangle, those three rows combined? (The single $1$ at the top is row $0$.)',
      answer: '$7168$',
      solution:
        'Add the three row sums. Row $n$ sums to $2^n$, so the total is $2^{10} + 2^{11} + 2^{12} = 1024 + 2048 + 4096 = 7168$ ✓. Second route, by differencing two grand totals. Rows $0$ through $n$ together sum to $2^{n+1} - 1$, since each doubling leaves the running total one short of the next power. Rows $0$ through $12$ give $2^{13} - 1 = 8191$ and rows $0$ through $9$ give $2^{10} - 1 = 1023$; the three rows in between account for $8191 - 1023 = 7168$ ✓. NUMBERING THE ROWS FROM $1$ shifts every exponent down and gives $2^9 + 2^{10} + 2^{11} = 512 + 1024 + 2048 = 3584$ ✗.',
    },
    {
      q: 'The entries of one row of Pascal’s triangle add up to $262144$. Which row is it, and how many entries does it have? (The single $1$ at the top is row $0$.)',
      answer: 'Row $18$, $19$ entries',
      solution:
        'Solve the power of two. Row $n$ sums to $2^n$, so $2^n = 262144$. Halving repeatedly, $262144 \\to 131072 \\to 65536 \\to 32768 \\to 16384 \\to 8192 \\to 4096 \\to 2048 \\to 1024$, which is $2^{10}$, and that took $8$ halvings, so $262144 = 2^{18}$ and the row is row $18$. Row $n$ runs from position $0$ to position $n$, so it holds $n + 1 = 19$ entries ✓. Second route, by subsets. A set whose subsets number $262144$ has $2^n = 262144$; factoring, $262144 = 512 \\cdot 512 = 2^9 \\cdot 2^9 = 2^{18}$, so the set has $18$ elements. Its subsets sort into sizes $0, 1, 2, \\ldots, 18$, which is $19$ different sizes and therefore $19$ entries in the row ✓. ANSWERING $18$ ENTRIES forgets position $0$; the row starts at position $0$ and ends at position $18$, so it has $19$ entries ✗.',
    },
  ],

  // slot 4 — Pascal's identity as a single combination, with its value.
  //          Lanes: C(9,4)+C(9,5) (C(10,5)=252); C(14,6)-C(13,6)
  //          (C(13,5)=1287); reversed: C(n,5)+C(n,6)=3003 (n=13, 1716).
  [
    {
      q: 'Express $\\binom{9}{4} + \\binom{9}{5}$ as a single combination, and give its value.',
      answer: '$\\binom{10}{5} = 252$',
      solution:
        'Read the triangle. The two terms sit side by side in row $9$, in positions $4$ and $5$, so by the additive rule they add to the entry directly below and between them, in row $10$, position $5$: $\\binom{9}{4} + \\binom{9}{5} = \\binom{10}{5}$. Its value is $\\frac{10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{30240}{120} = 252$ ✓. Second route, by a committee count. Count the $5$-person committees from $10$ people, one of whom is Rosa. Committees without Rosa take all $5$ from the other $9$: $\\binom{9}{5}$ of them. Committees with Rosa take $4$ more from the other $9$: $\\binom{9}{4}$. Every committee falls in exactly one case, so the sum is the total, $\\binom{10}{5}$; adding the numbers, $126 + 126 = 252$ ✓. KEEPING THE SMALLER BOTTOM NUMBER writes $\\binom{10}{4} = 210$; raising the top by $1$ means the bottom must match the later of the two positions ✗.',
    },
    {
      q: 'Express $\\binom{14}{6} - \\binom{13}{6}$ as a single combination, and give its value.',
      answer: '$\\binom{13}{5} = 1287$',
      solution:
        'Rearrange the additive rule. The entry $\\binom{14}{6}$ is the sum of its two parents, $\\binom{13}{5} + \\binom{13}{6}$. Subtracting one parent leaves the other: $\\binom{14}{6} - \\binom{13}{6} = \\binom{13}{5}$, whose value is $\\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{154440}{120} = 1287$ ✓. Second route, by a committee count. From $14$ people, one of whom is Mira, there are $\\binom{14}{6}$ committees of $6$; exactly $\\binom{13}{6}$ of them leave Mira out. The difference therefore counts the committees that include her, which are built by choosing her $5$ colleagues from the other $13$: $\\binom{13}{5}$. Numerically, $3003 - 1716 = 1287$ ✓. LOWERING THE TOP BUT KEEPING THE BOTTOM answers $\\binom{13}{6} = 1716$, which is the term that was subtracted away, not what is left ✗.',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{5} + \\binom{n}{6} = 3003$. Find $n$ and the value of $\\binom{n}{6}$.',
      answer: '$n = 13$, $\\binom{13}{6} = 1716$',
      solution:
        'Collapse the sum first. The two terms are neighbours in row $n$, so they add to $\\binom{n+1}{6} = 3003$. Climb the seventh column: $\\binom{12}{6} = 924$, $\\binom{13}{6} = 1716$, $\\binom{14}{6} = 3003$ — a hit at $n + 1 = 14$, and the column strictly increases from row $6$ on, so nothing else works. Hence $n = 13$, and $\\binom{13}{6} = 1716$ ✓. Second route, without the identity, by testing rows term by term. Row $11$: $462 + 462 = 924$. Row $12$: $792 + 924 = 1716$. Row $13$: $1287 + 1716 = 3003$ — the target, so $n = 13$, and the second term of that successful pair, $\\binom{13}{6}$, is $1716$ ✓. STOPPING AT THE COLLAPSED ROW answers $n = 14$ because $\\binom{14}{6} = 3003$; the identity raises the top number by $1$, so the row that was asked for is one higher than the row that holds $3003$ ✗.',
    },
  ],

  // slot 5 — repeated Pascal, the 1,2,1 and 1,3,3,1 patterns.
  //          Lanes: C(15,4)+2C(15,5)+C(15,6) (C(17,6)); the 1,3,3,1 pattern on
  //          row 12 (C(15,6)); reversed: solve for k with an explicit range,
  //          then report C(18,7) = 31824.
  [
    {
      q: 'Express $\\binom{15}{4} + 2\\binom{15}{5} + \\binom{15}{6}$ as a single combination.',
      answer: '$\\binom{17}{6}$',
      solution:
        'Split the doubled term and pair up. Writing $2\\binom{15}{5}$ as $\\binom{15}{5} + \\binom{15}{5}$ lets the four terms pair as $\\left(\\binom{15}{4} + \\binom{15}{5}\\right) + \\left(\\binom{15}{5} + \\binom{15}{6}\\right) = \\binom{16}{5} + \\binom{16}{6}$, and those two are themselves neighbours, so one more step gives $\\binom{17}{6}$ ✓. Second route, by arithmetic on the actual entries. Row $15$ gives $\\binom{15}{4} = 1365$, $\\binom{15}{5} = 3003$ and $\\binom{15}{6} = 5005$, so the expression equals $1365 + 2 \\cdot 3003 + 5005 = 1365 + 6006 + 5005 = 12376$. Row $17$, position $6$ is $\\frac{17 \\cdot 16 \\cdot 15 \\cdot 14 \\cdot 13 \\cdot 12}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 12376$, the same number ✓. RAISING THE TOP TWICE BUT THE BOTTOM ONCE gives $\\binom{17}{5} = 6188$, which is only half as large; each application of the rule moves the bottom number along with the top ✗.',
    },
    {
      q: 'Express $\\binom{12}{3} + 3\\binom{12}{4} + 3\\binom{12}{5} + \\binom{12}{6}$ as a single combination.',
      answer: '$\\binom{15}{6}$',
      solution:
        'Collapse one row at a time. Split the tripled terms so the coefficients $1, 3, 3, 1$ regroup as three neighbouring pairs plus leftovers: the sum equals $\\left(\\binom{12}{3} + \\binom{12}{4}\\right) + 2\\left(\\binom{12}{4} + \\binom{12}{5}\\right) + \\left(\\binom{12}{5} + \\binom{12}{6}\\right) = \\binom{13}{4} + 2\\binom{13}{5} + \\binom{13}{6}$. That is the $1, 2, 1$ pattern again, so it collapses to $\\binom{14}{5} + \\binom{14}{6} = \\binom{15}{6}$ ✓. Second route, by arithmetic on the actual entries. Row $12$ gives $220$, $495$, $792$ and $924$ in positions $3$ through $6$, so the expression is $220 + 3 \\cdot 495 + 3 \\cdot 792 + 924 = 220 + 1485 + 2376 + 924 = 5005$. Row $15$, position $6$ is $\\frac{15 \\cdot 14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 5005$, the same number ✓. MOVING THE TOP DOWN THREE ROWS BUT THE BOTTOM ONLY TWO answers $\\binom{15}{5} = 3003$; three applications of the rule shift the bottom number three times as well ✗.',
    },
    {
      q: 'For an integer $k$ with $0 \\le k \\le 7$, $\\binom{18}{k} + 2\\binom{18}{k+1} + \\binom{18}{k+2} = \\binom{20}{9}$. What is the value of $\\binom{18}{k}$?',
      answer: '$31824$',
      solution:
        'Collapse the left side. The $1, 2, 1$ pattern on three neighbouring entries of row $18$ folds twice: $\\left(\\binom{18}{k} + \\binom{18}{k+1}\\right) + \\left(\\binom{18}{k+1} + \\binom{18}{k+2}\\right) = \\binom{19}{k+1} + \\binom{19}{k+2} = \\binom{20}{k+2}$. Matching $\\binom{20}{k+2} = \\binom{20}{9}$ inside the stated range gives $k + 2 = 9$, so $k = 7$, and $\\binom{18}{7} = \\frac{18 \\cdot 17 \\cdot 16 \\cdot 15 \\cdot 14 \\cdot 13 \\cdot 12}{7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 31824$ ✓. Second route, by testing the candidate directly. Row $20$, position $9$ is $167960$. Reading row $18$ at positions $7, 8, 9$ gives $31824$, $43758$ and $48620$, and $31824 + 2 \\cdot 43758 + 48620 = 31824 + 87516 + 48620 = 167960$ — a match, so $k = 7$ and the requested entry is $31824$ ✓. FOLLOWING ROW SYMMETRY OUT OF RANGE notices that $\\binom{20}{9} = \\binom{20}{11}$ and takes $k + 2 = 11$, giving $k = 9$ and the answer $\\binom{18}{9} = 48620$; the stem restricts $k$ to $0 \\le k \\le 7$ precisely because that second index would otherwise also fit ✗.',
    },
  ],

  // slot 6 — subsets of a set under a size restriction.
  //          Lanes: 10-set with at least 4 elements (848); 11-set with at most
  //          2 (67); derived: 10-set with at least 4 and at most 7 (792).
  [
    {
      q: 'A set has $10$ elements. How many of its subsets have at least $4$ elements? (The whole set is a subset of itself.)',
      answer: '$848$',
      solution:
        'Count the complement. There are $2^{10} = 1024$ subsets in all, and the ones ruled out are those of size $0$, $1$, $2$ and $3$: $1 + 10 + 45 + 120 = 176$ of them. That leaves $1024 - 176 = 848$ ✓. Second route, by adding the sizes that qualify. The subsets of size $4$ through $10$ number $\\binom{10}{4} + \\binom{10}{5} + \\cdots + \\binom{10}{10} = 210 + 252 + 210 + 120 + 45 + 10 + 1$, and running that total gives $462, 672, 792, 837, 847, 848$ ✓. READING "AT LEAST $4$" AS "MORE THAN $4$" throws away the $210$ subsets of size exactly $4$ and reports $638$; "at least $4$" includes size $4$ ✗.',
    },
    {
      q: 'A set has $11$ elements. How many of its subsets have at most $2$ elements? (The empty set is a subset.)',
      answer: '$67$',
      solution:
        'Add the three allowed sizes. The subsets of size $0$, $1$ and $2$ number $\\binom{11}{0} + \\binom{11}{1} + \\binom{11}{2} = 1 + 11 + \\frac{11 \\cdot 10}{2} = 1 + 11 + 55 = 67$ ✓. Second route, by a recursion on one element. Call the answer $f(11)$ and single out one element $x$. Subsets avoiding $x$ with at most $2$ elements are the small subsets of the other $10$: $1 + 10 + 45 = 56$. Subsets containing $x$ have at most $1$ element left to pick from the other $10$: $1 + 10 = 11$. Since every subset either contains $x$ or does not, $f(11) = 56 + 11 = 67$ ✓. FORGETTING THE EMPTY SET counts only the singletons and pairs, $11 + 55 = 66$; the empty set has $0$ elements, which is at most $2$ ✗.',
    },
    {
      q: 'A set has $10$ elements. How many of its subsets have at least $4$ elements and at most $7$ elements?',
      answer: '$792$',
      solution:
        'Add the four allowed sizes. The count is $\\binom{10}{4} + \\binom{10}{5} + \\binom{10}{6} + \\binom{10}{7} = 210 + 252 + 210 + 120$, and running that total gives $462, 672, 792$ ✓. Second route, by cutting both tails off the whole collection. All $2^{10} = 1024$ subsets, minus the too-small ones of size $0$ through $3$ ($1 + 10 + 45 + 120 = 176$), minus the too-large ones of size $8$, $9$ and $10$ ($45 + 10 + 1 = 56$): $1024 - 176 - 56 = 792$ ✓. READING "AT MOST $7$" AS "FEWER THAN $7$" drops the $120$ subsets of size exactly $7$ and reports $672$ ✗.',
    },
  ],

  // slot 7 — where a given value sits in the triangle.
  //          Lanes: every position holding 10; how many positions hold 15;
  //          derived: 120 in positions 1, 2 and 3 of three different rows.
  [
    {
      q: 'The number $10$ appears in exactly two rows of Pascal’s triangle. Name both rows and the positions within each row that hold $10$. (Rows and positions are numbered from $0$.)',
      answer: 'Row $5$ (positions $2$ and $3$) and row $10$ (positions $1$ and $9$)',
      solution:
        'Search column by column. The second column holds $\\binom{n}{1} = n$, which is $10$ exactly at row $10$; by the palindrome symmetry $\\binom{10}{9} = \\binom{10}{1}$, so position $9$ of that row holds $10$ too. The third column holds $\\binom{n}{2} = \\frac{n(n-1)}{2}$, and $\\frac{5 \\cdot 4}{2} = 10$ puts a $10$ at position $2$ of row $5$, mirrored at position $3$. Nothing else can work: any entry at least three steps from both ends of its row is at least $\\binom{n}{3}$ with $n \\ge 6$, and the smallest such value is $\\binom{6}{3} = 20 > 10$, while $\\binom{n}{2}$ has already passed $10$ by row $6$, where it is $15$ ✓. Second route, by writing the triangle out. Rows $0$ through $10$ read $1$; $1, 1$; $1, 2, 1$; $1, 3, 3, 1$; $1, 4, 6, 4, 1$; $1, 5, 10, 10, 5, 1$; $1, 6, 15, 20, 15, 6, 1$; $1, 7, 21, 35, 21, 7, 1$; $1, 8, 28, 56, 70, 56, 28, 8, 1$; $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$; $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. The only $10$s are the two in row $5$ and the two in row $10$, and from row $11$ on every entry other than the $1$s and the end $n$s is at least $\\binom{11}{2} = 55$ ✓. STOPPING AT ROW $10$ because the number matches the row number misses row $5$ entirely, where $10$ appears twice ✗.',
    },
    {
      q: 'In how many positions of Pascal’s triangle, counted over every row, does the number $15$ appear? Name each row and position. (Rows and positions are numbered from $0$.)',
      answer: 'Four positions: row $6$ (positions $2$ and $4$) and row $15$ (positions $1$ and $14$)',
      solution:
        'Search column by column. The second column gives $\\binom{n}{1} = n = 15$ at row $15$, so positions $1$ and, by symmetry, $14$ of row $15$. The third column gives $\\binom{n}{2} = 15$ when $n(n-1) = 30$, so $n = 6$: positions $2$ and $4$ of row $6$. No other column reaches $15$, because any entry three or more steps from both ends is at least $\\binom{6}{3} = 20$, and $\\binom{n}{2}$ has jumped from $15$ at row $6$ to $21$ at row $7$. That is four positions in total ✓. Second route, by writing out the rows. Row $6$ is $1, 6, 15, 20, 15, 6, 1$ — two hits. Rows $0$ through $5$ contain only $1, 2, 3, 4, 5, 6, 10$, no $15$. From row $7$ onward the only entries below $20$ are the $1$s and the two copies of $n$, and $n = 15$ happens once, contributing two more hits in row $15$. Total: $4$ ✓. COUNTING EACH ROW ONCE INSTEAD OF EACH POSITION reports $2$; the question asks for positions, and both rows hold $15$ twice because every row is a palindrome ✗.',
    },
    {
      q: 'The number $120$ appears in position $1$ of one row of Pascal’s triangle, in position $2$ of a second row and in position $3$ of a third. Name all three rows and, for each, every position of that row holding $120$. (Rows and positions are numbered from $0$.)',
      answer: 'Row $10$ (positions $3$ and $7$), row $16$ (positions $2$ and $14$), row $120$ (positions $1$ and $119$)',
      solution:
        'Solve one column at a time. Position $1$: $\\binom{n}{1} = n = 120$ gives row $120$, mirrored at position $119$. Position $2$: $\\binom{n}{2} = 120$ means $n(n-1) = 240 = 16 \\cdot 15$, so row $16$, mirrored at position $14$. Position $3$: $\\binom{n}{3} = 120$ means $n(n-1)(n-2) = 720 = 10 \\cdot 9 \\cdot 8$, so row $10$, mirrored at position $7$ ✓. Second route, by reading the rows off the triangle and checking no other column can contribute. Row $10$ is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$ — the $120$s sit at positions $3$ and $7$. Row $16$ begins $1, 16, 120, 560, \\ldots$, so its $120$ is at position $2$ and, by symmetry, position $14$. Row $120$ begins $1, 120, 7140, \\ldots$. No fourth-column entry equals $120$: that column reads $70, 126, 210, \\ldots$ and steps straight past $120$ while only growing. And every entry five or more steps from both ends is at least $\\binom{10}{5} = 252$, well clear of $120$ ✓. SKIPPING ROW $120$ because it looks too far down keeps only the two "interior" rows; the second column of the triangle contains every positive integer, so $120$ must appear there as well ✗.',
    },
  ],

  // slot 8 — a tail of a row, summed by symmetry.
  //          Lanes: row 16 from position 9 (26333); row 13 from position 7
  //          (4096); derived: row 12 from the middle entry on (2510).
  [
    {
      q: 'Compute $\\binom{16}{9} + \\binom{16}{10} + \\binom{16}{11} + \\cdots + \\binom{16}{16}$. Note that the sum starts at $\\binom{16}{9}$, one step past the middle.',
      answer: '$26333$',
      solution:
        'Use the symmetry of the row. Row $16$ sums to $2^{16} = 65536$ and has a single middle entry, $\\binom{16}{8} = 12870$. Removing the middle leaves $65536 - 12870 = 52666$ split into two mirror-image halves, one before the middle and one after, so the eight entries from position $9$ on sum to $\\frac{52666}{2} = 26333$ ✓. Second route, term by term. Row $16$ past the middle reads $11440, 8008, 4368, 1820, 560, 120, 16, 1$, and the running total is $11440, 19448, 23816, 25636, 26196, 26316, 26332, 26333$ ✓. HALVING THE WHOLE ROW gives $\\frac{65536}{2} = 32768$; that splits the middle entry between the two halves, but $\\binom{16}{8}$ belongs to neither tail ✗.',
    },
    {
      q: 'Compute $\\binom{13}{7} + \\binom{13}{8} + \\binom{13}{9} + \\cdots + \\binom{13}{13}$. Note that the sum starts at $\\binom{13}{7}$.',
      answer: '$4096$',
      solution:
        'Use the symmetry of the row. Row $13$ has $14$ entries and therefore no single middle one: positions $0$ through $6$ mirror positions $7$ through $13$ exactly. The row sums to $2^{13} = 8192$, so each half is $\\frac{8192}{2} = 4096$ ✓. Second route, term by term. The entries from position $7$ on are $1716, 1287, 715, 286, 78, 13, 1$, and the running total is $1716, 3003, 3718, 4004, 4082, 4095, 4096$ ✓. PULLING OUT A MIDDLE ENTRY THAT IS NOT THERE treats $1716$ as an unpaired center and computes $\\frac{8192 - 1716}{2} = 3238$; row $13$ has an even number of entries, so nothing sits alone in the middle ✗.',
    },
    {
      q: 'Compute $\\binom{12}{6} + \\binom{12}{7} + \\binom{12}{8} + \\cdots + \\binom{12}{12}$. Note that the sum starts at the middle entry $\\binom{12}{6}$ and includes it.',
      answer: '$2510$',
      solution:
        'Split off the middle, then use symmetry. Row $12$ sums to $2^{12} = 4096$ and its single middle entry is $\\binom{12}{6} = 924$. The remaining $4096 - 924 = 3172$ splits into two equal halves, so the entries strictly past the middle total $\\frac{3172}{2} = 1586$. Adding the middle entry back in gives $1586 + 924 = 2510$ ✓. Second route, term by term. From position $6$ on, row $12$ reads $924, 792, 495, 220, 66, 12, 1$, and the running total is $924, 1716, 2211, 2431, 2497, 2509, 2510$ ✓. LEAVING THE MIDDLE ENTRY OUT reports $1586$; the sum is written as starting at $\\binom{12}{6}$, so the center counts ✗.',
    },
  ],

  // slot 9 — committees of any size with a restriction on two or three people.
  //          Lanes: two who refuse to serve together (768); two who insist on
  //          the same decision (512); derived: three, no two together (256).
  [
    {
      q: 'A committee of any size, including the empty committee, is chosen from $10$ people. Cleo and Dev refuse to serve together, though either may serve without the other. How many committees are possible?',
      answer: '$768$',
      solution:
        'Count the complement. Every committee is a subset of the $10$ people, so there are $2^{10} = 1024$ in all. The forbidden ones contain both Cleo and Dev; once those two are fixed as members, the rest of the committee is any subset of the remaining $8$ people, which is $2^8 = 256$ committees. So $1024 - 256 = 768$ are allowed ✓. Second route, by casework on the pair. Exactly three patterns are legal for Cleo and Dev: neither serves, Cleo alone serves, or Dev alone serves. In each case the other $8$ people are free, giving $2^8 = 256$ committees. Adding the three cases: $256 + 256 + 256 = 768$ ✓. SUBTRACTING EVERY COMMITTEE THAT CONTAINS CLEO removes $2^9 = 512$ and reports $512$; only the committees holding both of them are barred, not the ones holding just her ✗.',
    },
    {
      q: 'A committee of any size, including the empty committee, is chosen from $10$ people. Gus and Hana insist on the same decision: either both serve or neither does. How many committees are possible?',
      answer: '$512$',
      solution:
        'Case on the pair. If both Gus and Hana serve, the other $8$ people are unrestricted: $2^8 = 256$ committees. If neither serves, again the other $8$ are unrestricted: another $256$. Those two cases cover everything allowed and never overlap, so the total is $256 + 256 = 512$ ✓. Second route, by removing the illegal committees. Of the $2^{10} = 1024$ subsets of the $10$ people, the illegal ones have exactly one of the pair aboard. Choose which of the two it is ($2$ ways) and then any subset of the other $8$ ($2^8 = 256$), for $2 \\cdot 256 = 512$ illegal committees. That leaves $1024 - 512 = 512$ ✓. COUNTING ONLY THE COMMITTEES WHERE BOTH SERVE reports $256$; "neither serves" also satisfies the pair’s condition and doubles the count ✗.',
    },
    {
      q: 'A committee of any size, including the empty committee, is chosen from $9$ people. No two of Iris, Jonas and Kira may serve together, though any one of them may serve alone among the three. How many committees are possible?',
      answer: '$256$',
      solution:
        'Handle the three separately from the rest. Among Iris, Jonas and Kira, the legal patterns are: none of them serves, or exactly one does. That is $1 + 3 = 4$ patterns. The other $6$ people are unrestricted, contributing $2^6 = 64$ possibilities, and the two choices are independent, so the total is $4 \\cdot 64 = 256$ ✓. Second route, by inclusion–exclusion on the whole collection. There are $2^9 = 512$ committees in all. Let $A$, $B$, $C$ be the sets of committees containing Iris and Jonas, Jonas and Kira, and Iris and Kira; each has $2^7 = 128$ members. Any two of those events force all three people aboard, so each pairwise overlap, and the triple overlap too, has $2^6 = 64$ members. The illegal committees number $3 \\cdot 128 - 3 \\cdot 64 + 64 = 384 - 192 + 64 = 256$, leaving $512 - 256 = 256$ legal ones ✓. SUBTRACTING THE THREE FORBIDDEN PAIRS WITHOUT CORRECTING FOR OVERLAP gives $512 - 3 \\cdot 128 = 128$; committees holding all three people were removed three times each ✗.',
    },
  ],

  // slot 10 — teams built from independent groups with lower bounds.
  //           Lanes: 7 boys and 4 girls, at least one of each (1905); three
  //           groups with two of them bounded (3472); derived: at least two
  //           from each of two groups of 5 (676).
  [
    {
      q: 'A group has $7$ boys and $4$ girls. A team may have any number of members, but it must include at least one boy and at least one girl. How many different teams are possible?',
      answer: '$1905$',
      solution:
        'Choose the two groups independently. The boys on the team form any non-empty subset of the $7$ boys: $2^7 - 1 = 127$ ways. The girls form any non-empty subset of the $4$ girls: $2^4 - 1 = 15$ ways. The two choices do not interact, so multiply: $127 \\cdot 15 = 1905$ ✓. Second route, by inclusion–exclusion on all subsets. There are $2^{11} = 2048$ subsets of the $11$ people. Discard the $2^4 = 16$ with no boys and the $2^7 = 128$ with no girls; the empty team was discarded twice, so add $1$ back: $2048 - 16 - 128 + 1 = 1905$ ✓. THROWING OUT ONLY THE EMPTY TEAM gives $2^{11} - 1 = 2047$, which still counts the all-boy and all-girl teams that the two conditions forbid ✗.',
    },
    {
      q: 'A group has $5$ singers, $4$ drummers and $3$ pianists. A band may include any number of each, but it must have at least one singer and at least one pianist; a band with no drummer is allowed. How many different bands are possible?',
      answer: '$3472$',
      solution:
        'Choose the three groups independently. Singers: any non-empty subset of $5$, so $2^5 - 1 = 31$ ways. Drummers: unrestricted, so all $2^4 = 16$ subsets, the empty one included. Pianists: any non-empty subset of $3$, so $2^3 - 1 = 7$ ways. Multiplying, $31 \\cdot 16 \\cdot 7 = 496 \\cdot 7 = 3472$ ✓. Second route, by inclusion–exclusion on all subsets. All $2^{12} = 4096$ subsets of the $12$ musicians, minus the singer-free ones ($2^4 \\cdot 2^3 = 128$), minus the pianist-free ones ($2^5 \\cdot 2^4 = 512$), plus back the ones counted twice because they have neither a singer nor a pianist ($2^4 = 16$): $4096 - 128 - 512 + 16 = 3472$ ✓. FORCING A DRUMMER TOO computes $31 \\cdot 15 \\cdot 7 = 3255$; the stem allows a band with no drummer, so that group keeps its empty subset ✗.',
    },
    {
      q: 'A group has $5$ boys and $5$ girls. A team may have any number of members, but it must include at least two boys and at least two girls. How many different teams are possible?',
      answer: '$676$',
      solution:
        'Choose the two groups independently. From the $5$ boys, the team takes a subset of size at least $2$: all $2^5 = 32$ subsets, minus the empty one and the $5$ singletons, is $32 - 1 - 5 = 26$ ways. The girls give $26$ ways by the same count, and the choices are independent, so $26 \\cdot 26 = 676$ ✓. Second route, by inclusion–exclusion on all subsets. There are $2^{10} = 1024$ subsets of the $10$ people. Those with at most one boy number $6 \\cdot 2^5 = 192$ (six ways to pick the boys, any girls), and likewise $192$ have at most one girl; teams failing both conditions at once number $6 \\cdot 6 = 36$. The bad teams total $192 + 192 - 36 = 348$, leaving $1024 - 348 = 676$ ✓. SUBTRACTING THE SINGLETONS BUT NOT THE EMPTY SUBSET uses $32 - 5 = 27$ for each group and reports $27 \\cdot 27 = 729$; a team with no boys at all also falls short of two boys ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 12,
  worksheet,
}
