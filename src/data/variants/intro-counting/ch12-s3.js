// Counting & Probability chapter 12 — variations for section 12.4
// (An Interesting Combinatorial Identity). All problems and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: rows and positions of Pascal’s
//    triangle are numbered from $0$, unknown row numbers and class sizes are
//    stated positive, and wherever row symmetry would admit a second index the
//    stem gives the index an explicit range.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    is-this-person-on-the-committee argument against a direct computation —
//    the entries multiplied out, the row built by addition, or a total split
//    the other way. Route two never reuses route one’s number.
//  - Each distractor is one named slip — keeping the smaller bottom number,
//    stopping a peel too early, reporting $n - 1$ for $n$, adding where the
//    identity subtracts — and the slip is named in CAPS.

const s124 = [
  // slot 1 — adding two neighbors in one row
  [
    {
      q: 'What is $\\binom{20}{1} + \\binom{20}{2}$?',
      choices: ['$21$', '$190$', '$231$', '$210$'],
      answer: 3,
      solution:
        'Route one, ask whether one person is on the committee. Picture $21$ people, one of them Vik, and count $2$-person committees. Those that include Vik need $1$ more from the other $20$, which is $\\binom{20}{1}$; those that leave him out take both members from the other $20$, which is $\\binom{20}{2}$. Every committee falls in exactly one pile, so the sum is the total, $\\binom{21}{2} = \\frac{21 \\cdot 20}{2} = 210$ ✓. Route two, read the two entries off the triangle’s diagonals and add them. Position $1$ of any row is the row number, so $\\binom{20}{1} = 20$. Position $2$ climbs by the row number above it at every step, so $\\binom{20}{2} = 1 + 2 + \\cdots + 19 = \\frac{19 \\cdot 20}{2} = 190$. Adding the two entries gives $20 + 190 = 210$ ✓. (The choice $21$ is $\\binom{21}{1}$, KEEPING THE SMALLER BOTTOM NUMBER when stepping down a row ✗; $190$ REPORTS ONLY $\\binom{20}{2}$ and never adds ✗; $231$ is $\\binom{22}{2}$, APPLYING THE IDENTITY TWICE ✗.)',
    },
    {
      q: 'A $5$-person committee is chosen from $12$ people, one of whom is Rosa. There are $330$ possible committees that include Rosa and $462$ that leave her out. How many committees are possible in all?',
      choices: ['$462$', '$792$', '$132$', '$924$'],
      answer: 1,
      solution:
        'Route one, split on Rosa. A committee either has Rosa on it or does not, and no committee is in both piles, so the two given counts cover every committee exactly once: $330 + 462 = 792$ ✓. Route two, count all committees from scratch. Choosing $5$ of $12$ people can be done in $\\binom{12}{5} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{120} = \\frac{95040}{120} = 792$ ways ✓. (The choice $462$ REPORTS ONLY THE WITHOUT-ROSA PILE ✗; $132$ SUBTRACTS THE PILES instead of adding them ✗; $924$ DOUBLES THE LARGER PILE, as if the two piles were the same size ✗.)',
    },
    {
      q: 'Pascal’s identity gives $\\binom{20}{1} + \\binom{20}{2} = \\binom{21}{2} = 210$, and the value $210$ turns up again in row $10$, at $\\binom{10}{6}$. Using that value, what is $\\binom{10}{6} + \\binom{10}{7}$?',
      choices: ['$330$', '$420$', '$462$', '$120$'],
      answer: 0,
      solution:
        'Route one, use the identity again. Two neighbors in row $10$, at positions $6$ and $7$, add to the entry directly below them in row $11$, at position $7$: $\\binom{10}{6} + \\binom{10}{7} = \\binom{11}{7}$. That value is $\\binom{11}{7} = \\binom{11}{4} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8}{24} = \\frac{7920}{24} = 330$ ✓. Route two, evaluate the second term and add. By symmetry $\\binom{10}{7} = \\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$, and with the given $\\binom{10}{6} = 210$ the sum is $210 + 120 = 330$ ✓. (The choice $420$ ASSUMES $\\binom{10}{7} = \\binom{10}{6}$ and doubles ✗; $462$ is $\\binom{11}{6}$, KEEPING THE SMALLER BOTTOM NUMBER ✗; $120$ REPORTS ONLY $\\binom{10}{7}$ ✗.)',
    },
  ],
  // slot 2 — naming the identity in symbols
  [
    {
      q: 'Which sum equals $\\binom{15}{6}$?',
      choices: ['$\\binom{14}{6} + \\binom{14}{7}$', '$\\binom{14}{5} + \\binom{14}{6}$', '$\\binom{15}{5} + \\binom{15}{6}$', '$\\binom{14}{5} + \\binom{15}{6}$'],
      answer: 1,
      solution:
        'Route one, ask whether Ana is on the committee. Read $\\binom{15}{6}$ as the number of $6$-person committees from $15$ people, one of them Ana. With Ana, $5$ more come from the other $14$: $\\binom{14}{5}$. Without Ana, all $6$ come from the other $14$: $\\binom{14}{6}$. Adding the two piles rebuilds the total, so $\\binom{15}{6} = \\binom{14}{5} + \\binom{14}{6}$ ✓. Route two, check the numbers. $\\binom{15}{6} = 5005$, while $\\binom{14}{5} = 2002$ and $\\binom{14}{6} = 3003$, and $2002 + 3003 = 5005$ ✓. (The choice $\\binom{14}{6} + \\binom{14}{7}$ SHIFTS BOTH BOTTOM NUMBERS UP, giving $3003 + 3432 = 6435 = \\binom{15}{7}$ ✗; $\\binom{15}{5} + \\binom{15}{6}$ STAYS IN ROW $15$ instead of stepping up a row, giving $\\binom{16}{6} = 8008$ ✗; $\\binom{14}{5} + \\binom{15}{6}$ MIXES TWO DIFFERENT ROWS and lands on $7007$, which is not an entry of the triangle at all ✗.)',
    },
    {
      q: 'A $6$-person committee is chosen from $14$ people, one of whom is Theo. Which expression counts exactly the possible committees that leave Theo out?',
      choices: ['$\\binom{13}{5}$', '$\\binom{14}{6}$', '$\\binom{14}{5}$', '$\\binom{13}{6}$'],
      answer: 3,
      solution:
        'Route one, remove Theo from the pool. If Theo is not on the committee, all $6$ members come from the other $13$ people, and any $6$ of them will do, so the count is $\\binom{13}{6}$ ✓. Route two, subtract the other pile from the total. All committees number $\\binom{14}{6} = 3003$, and the ones that include Theo fill his seat and take $5$ more from $13$, which is $\\binom{13}{5} = 1287$. The leftovers number $3003 - 1287 = 1716$, and $\\binom{13}{6} = 1716$ ✓. (The choice $\\binom{13}{5}$ COUNTS THE COMMITTEES WITH THEO ✗; $\\binom{14}{6}$ COUNTS EVERY COMMITTEE, both piles together ✗; $\\binom{14}{5}$ REMOVES A SEAT INSTEAD OF A PERSON, leaving Theo in the pool ✗.)',
    },
    {
      q: 'The two entries of Pascal’s triangle sitting diagonally above one particular entry are $\\binom{16}{6}$ and $\\binom{16}{7}$. Which combination is that entry?',
      choices: ['$\\binom{17}{6}$', '$\\binom{16}{13}$', '$\\binom{17}{7}$', '$\\binom{32}{13}$'],
      answer: 2,
      solution:
        'Route one, run the committee argument backwards. The two given entries are the with-Bea and without-Bea piles for $7$-person committees drawn from $17$ people: $\\binom{16}{6}$ fills Bea’s seat and takes $6$ more from the other $16$, and $\\binom{16}{7}$ takes all $7$ from those $16$. Together they count every $7$-person committee from $17$, so the entry below is $\\binom{17}{7}$ ✓. Route two, add the values. $\\binom{16}{6} = 8008$ and $\\binom{16}{7} = 11440$, and $8008 + 11440 = 19448$, which is exactly $\\binom{17}{7} = 19448$ ✓. (The choice $\\binom{17}{6} = 12376$ KEEPS THE SMALLER BOTTOM NUMBER ✗; $\\binom{16}{13}$ ADDS THE BOTTOM NUMBERS and stays in row $16$ ✗; $\\binom{32}{13}$ ADDS EVERYTHING IN SIGHT, both tops and both bottoms ✗.)',
    },
  ],
  // slot 3 — one combination from a sum or difference
  [
    {
      q: 'Which single combination equals $\\binom{31}{14} + \\binom{31}{15}$?',
      choices: ['$\\binom{32}{14}$', '$\\binom{31}{29}$', '$\\binom{32}{15}$', '$\\binom{62}{29}$'],
      answer: 2,
      solution:
        'Route one, ask whether Yusuf is on the committee. Take $32$ people, one of them Yusuf, and count $15$-person committees. With Yusuf: $14$ more from the other $31$, which is $\\binom{31}{14}$. Without him: all $15$ from those $31$, which is $\\binom{31}{15}$. The two piles together are every $15$-person committee from $32$, so the sum is $\\binom{32}{15}$ ✓. Route two, test the shape where the numbers are small enough to see. In row $5 = 1, 5, 10, 10, 5, 1$, the neighbors $\\binom{5}{2} + \\binom{5}{3} = 10 + 10 = 20$, and row $6 = 1, 6, 15, 20, 15, 6, 1$ has $20$ in position $3$, so the top rises by one and the bottom is the larger of the two bottoms ✓. (The choice $\\binom{32}{14}$ TAKES THE SMALLER BOTTOM NUMBER; the same small test gives $\\binom{6}{2} = 15$, not $20$ ✗; $\\binom{31}{29}$ ADDS THE BOTTOM NUMBERS and never leaves row $31$ ✗; $\\binom{62}{29}$ ADDS THE TOPS AND THE BOTTOMS TOGETHER ✗.)',
    },
    {
      q: 'Which single combination equals $\\binom{18}{7} - \\binom{17}{7}$?',
      choices: ['$\\binom{17}{6}$', '$\\binom{18}{6}$', '$\\binom{16}{6}$', '$\\binom{17}{7}$'],
      answer: 0,
      solution:
        'Route one, split a committee count on one person. Among $18$ people, one of them Bea, the $7$-person committees number $\\binom{18}{7}$, and the ones that leave Bea out number $\\binom{17}{7}$. Subtracting removes exactly the without-Bea pile, leaving the committees that include Bea: her seat is filled and $6$ more come from the other $17$, which is $\\binom{17}{6}$ ✓. Route two, subtract the values. $\\binom{18}{7} = 31824$ and $\\binom{17}{7} = 19448$, so the difference is $31824 - 19448 = 12376$, and $\\binom{17}{6} = 12376$ ✓. (The choice $\\binom{18}{6} = 18564$ SUBTRACTS THE BOTTOM NUMBERS while keeping the top ✗; $\\binom{16}{6} = 8008$ GOES ONE ROW TOO FAR UP ✗; $\\binom{17}{7}$ NAMES THE TERM BEING SUBTRACTED rather than the difference ✗.)',
    },
    {
      q: 'For an integer $k$ with $11 \\le k \\le 20$, $\\binom{20}{k-1} + \\binom{20}{k} = \\binom{21}{11}$. What is $k$?',
      choices: ['$10$', '$12$', '$21$', '$11$'],
      answer: 3,
      solution:
        'Route one, use the identity on the left side. Two neighbors of row $20$ in positions $k - 1$ and $k$ add to the entry below them, $\\binom{21}{k}$. So $\\binom{21}{k} = \\binom{21}{11}$, and inside the stated range $11 \\le k \\le 20$ the only position of row $21$ holding that value is $k = 11$ ✓. Route two, add the two entries for $k = 11$ and compare. $\\binom{20}{10} = 184756$ and $\\binom{20}{11} = 167960$, so their sum is $184756 + 167960 = 352716$; and $\\binom{21}{11} = 352716$ ✓. (The choice $10$ is the SYMMETRIC PARTNER: row $21$ also holds $352716$ in position $10$, but $10$ is below the stated range ✗; $12$ SHIFTS $k$ BY ONE, and $\\binom{21}{12} = 293930$ instead ✗; $21$ READS THE TOP NUMBER of the right side as $k$ ✗.)',
    },
  ],
  // slot 4 — parents and children around one entry
  [
    {
      q: 'An entry of Pascal’s triangle is $1287$, and it sits in the left half of a row that has $14$ entries in all. What are the two entries on either side of it in that row?',
      choices: ['$715$ and $1716$', '$1001$ and $3003$', '$495$ and $792$', '$2002$ and $3003$'],
      answer: 0,
      solution:
        'Route one, build the row by addition. Row $n$ holds $n + 1$ entries, so a row of $14$ entries is row $13$. Row $12$ is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$, and adding each neighboring pair gives row $13 = 1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$. The left half of that row holds $1287$ once, with $715$ before it and $1716$ after it ✓. Route two, locate the entry with the formula. In row $13$, $\\binom{13}{5} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{120} = \\frac{154440}{120} = 1287$, which is position $5$ and so lies in the left half; the entries beside it are $\\binom{13}{4} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10}{24} = 715$ and $\\binom{13}{6} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{720} = 1716$ ✓. (The choice $1001$ and $3003$ READS THE ENTRY COUNT AS THE ROW NUMBER and takes the entries beside position $5$ of row $14$ ✗; $495$ and $792$ NAMES THE TWO PARENTS, which sit diagonally above the entry rather than beside it ✗; $2002$ and $3003$ NAMES THE TWO CHILDREN, one row down ✗.)',
    },
    {
      q: 'An entry of Pascal’s triangle is $210$, and the two entries on either side of it in its own row are $120$ (left) and $252$ (right). What are the two entries directly below $210$ in the next row?',
      choices: ['$90$ and $42$', '$120$ and $252$', '$330$ and $462$', '$330$ and $252$'],
      answer: 2,
      solution:
        'Route one, apply the building rule twice. Each child is the sum of the two entries above it, so the down-left child is $120 + 210 = 330$ and the down-right child is $210 + 252 = 462$ ✓. Route two, name the positions. The run $120, 210, 252$ is row $10$ in positions $3, 4, 5$, so the two children are $\\binom{11}{4} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8}{24} = 330$ and $\\binom{11}{5} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{120} = 462$ ✓. (The choice $90$ and $42$ SUBTRACTS THE NEIGHBORS instead of adding them ✗; $120$ and $252$ REPEATS THE NEIGHBORS, which sit in the same row, not below ✗; $330$ and $252$ builds the left child correctly then COPIES THE RIGHT NEIGHBOR in place of the right child ✗.)',
    },
    {
      q: 'An entry of Pascal’s triangle has $78$ immediately to its left in its own row, and the entry directly below and to the left of it, in the next row, is $364$. What is the entry?',
      choices: ['$442$', '$286$', '$364$', '$182$'],
      answer: 1,
      solution:
        'Route one, undo the addition. The entry below and to the left is the sum of the entry we want and the neighbor on its left, so $78 + \\text{entry} = 364$ and the entry is $364 - 78 = 286$ ✓. Route two, locate the child in the triangle. The value $364$ is $\\binom{14}{3}$, whose two parents are $\\binom{13}{2}$ and $\\binom{13}{3}$; the first of those is $\\frac{13 \\cdot 12}{2} = 78$, matching the given left neighbor, so the entry is $\\binom{13}{3} = \\frac{13 \\cdot 12 \\cdot 11}{6} = 286$ ✓. (The choice $442$ ADDS $78$ TO $364$ instead of subtracting ✗; $364$ REPEATS THE CHILD in place of the parent ✗; $182$ HALVES THE CHILD, treating the two parents as equal ✗.)',
    },
  ],
  // slot 5 — committee counts split on one member
  [
    {
      q: 'A $4$-person committee is chosen from $12$ people, one of whom is Nadia. There are $165$ possible committees that include Nadia. How many possible committees do not include her?',
      choices: ['$165$', '$330$', '$495$', '$660$'],
      answer: 1,
      solution:
        'Route one, remove Nadia from the pool. A committee without Nadia takes all $4$ members from the other $11$ people, so there are $\\binom{11}{4} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8}{24} = \\frac{7920}{24} = 330$ of them ✓. Route two, subtract from the total. All $4$-person committees from $12$ number $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$, and the with-Nadia pile accounts for $165$ of them, so the rest number $495 - 165 = 330$ ✓. (The choice $165$ REPEATS THE WITH-NADIA COUNT ✗; $495$ GIVES THE TOTAL, both piles together ✗; $660$ ADDS THE TOTAL TO THE GIVEN COUNT, double-counting the with-Nadia committees ✗.)',
    },
    {
      q: 'A $3$-person committee is chosen from $n$ students, one of whom is Owen, for a positive integer $n$. There are $105$ possible committees that include Owen and $455$ that leave him out. What is $n$?',
      choices: ['$15$', '$560$', '$17$', '$16$'],
      answer: 3,
      solution:
        'Route one, use the with-Owen pile. Such a committee fills Owen’s seat and takes $2$ more from the other $n - 1$ students, so $\\binom{n-1}{2} = 105$, that is $\\frac{(n-1)(n-2)}{2} = 105$ and $(n-1)(n-2) = 210 = 15 \\cdot 14$. So $n - 1 = 15$ and $n = 16$ ✓. Route two, use the total. Every committee is in exactly one pile, so all $3$-person committees number $105 + 455 = 560 = \\binom{n}{3}$, giving $n(n-1)(n-2) = 3360$; since $16 \\cdot 15 \\cdot 14 = 3360$, we get $n = 16$ ✓. (The choice $15$ REPORTS $n - 1$, the size of the pool left after Owen is set aside ✗; $560$ REPORTS THE TOTAL NUMBER OF COMMITTEES instead of $n$ ✗; $17$ OVERSHOOTS BY A ROW: it would need $\\binom{16}{2} = 120$ committees with Owen, not $105$ ✗.)',
    },
    {
      q: 'A $4$-person committee is chosen from $11$ people, one of whom is Ines, and $330$ committees are possible in all. How many of them include Ines?',
      choices: ['$210$', '$165$', '$120$', '$330$'],
      answer: 2,
      solution:
        'Route one, build the with-Ines pile directly. Ines takes one of the four seats, and the other $3$ members come from the remaining $10$ people, so the count is $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ ✓. Route two, subtract the other pile from the given total. Committees without Ines choose all $4$ from the other $10$: $\\binom{10}{4} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{24} = 210$. Since the two piles cover the $330$ committees exactly once each, the with-Ines pile is $330 - 210 = 120$ ✓. (The choice $210$ IS THE WITHOUT-INES COUNT ✗; $165$ is $\\binom{11}{3}$, CHOOSING THE OTHER THREE FROM ALL $11$ and leaving Ines in the pool she already left ✗; $330$ REPEATS THE TOTAL ✗.)',
    },
  ],
  // slot 6 — two known parents, one unknown row
  [
    {
      q: 'For some positive integer $n$, $\\binom{n-1}{2} = 45$ and $\\binom{n-1}{3} = 120$. What is $n$?',
      choices: ['$10$', '$165$', '$11$', '$12$'],
      answer: 2,
      solution:
        'Route one, solve the first equation. Writing $m = n - 1$, $\\binom{m}{2} = \\frac{m(m-1)}{2} = 45$ gives $m(m-1) = 90 = 10 \\cdot 9$, so $m = 10$ and $n = 11$. The second given agrees, since $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ ✓. Route two, add the parents and find the child. The two givens are neighbors in row $n - 1$, so by the identity the entry below them is $\\binom{n}{3} = 45 + 120 = 165$. Solving $\\frac{n(n-1)(n-2)}{6} = 165$ gives $n(n-1)(n-2) = 990 = 11 \\cdot 10 \\cdot 9$, so $n = 11$ ✓. (The choice $10$ REPORTS $n - 1$, the row the two givens live in ✗; $165$ REPORTS THE SUM OF THE TWO ENTRIES instead of $n$ ✗; $12$ OVERSHOOTS BY A ROW: it would need $\\binom{11}{2} = 55$, not $45$ ✗.)',
    },
    {
      q: 'For some positive integer $n$, $\\binom{n-1}{4} = 495$ and $\\binom{n-1}{5} = 792$. What is $\\binom{n}{5}$?',
      choices: ['$1287$', '$297$', '$792$', '$1716$'],
      answer: 0,
      solution:
        'Route one, split on one person. Among $n$ people, one of them Cleo, the $5$-person committees with Cleo number $\\binom{n-1}{4} = 495$ and those without her number $\\binom{n-1}{5} = 792$. The two piles cover every committee once, so $\\binom{n}{5} = 495 + 792 = 1287$ ✓. Route two, find $n$ and compute. From $\\binom{m}{4} = 495$ with $m = n - 1$: $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$, so $m = 12$ and $n = 13$. Then $\\binom{13}{5} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{120} = \\frac{154440}{120} = 1287$ ✓. (The choice $297$ SUBTRACTS THE TWO GIVENS instead of adding them ✗; $792$ REPEATS THE LARGER GIVEN ✗; $1716$ is $\\binom{13}{6}$, STEPPING ONE POSITION TOO FAR ALONG the new row ✗.)',
    },
    {
      q: 'For some positive integer $n$, $\\binom{n}{4} = 1820$ and $\\binom{n-1}{3} = 455$. What is $\\binom{n-1}{4}$?',
      choices: ['$2275$', '$455$', '$910$', '$1365$'],
      answer: 3,
      solution:
        'Route one, split on one person. Reading $\\binom{n}{4} = 1820$ as all $4$-person committees from $n$ people, one of them Bruno, the identity says $1820 = \\binom{n-1}{3} + \\binom{n-1}{4}$: the first term is the with-Bruno pile, the second the without-Bruno pile. So $\\binom{n-1}{4} = 1820 - 455 = 1365$ ✓. Route two, find $n$ and compute. Since $\\frac{16 \\cdot 15 \\cdot 14 \\cdot 13}{24} = \\frac{43680}{24} = 1820$, we have $n = 16$, and the second given checks out as $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{6} = 455$. Then $\\binom{15}{4} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12}{24} = \\frac{32760}{24} = 1365$ ✓. (The choice $2275$ ADDS WHERE THE IDENTITY SUBTRACTS ✗; $455$ REPEATS THE GIVEN PARENT, the with-Bruno pile ✗; $910$ HALVES $1820$, treating the two piles as equal ✗.)',
    },
  ],
  // slot 7 — peeling several parents off one entry
  [
    {
      q: 'Which single combination equals $\\binom{11}{5} - \\binom{10}{5} - \\binom{9}{4}$?',
      choices: ['$\\binom{10}{4}$', '$\\binom{8}{3}$', '$\\binom{9}{4}$', '$\\binom{9}{3}$'],
      answer: 3,
      solution:
        'Route one, peel one person at a time. Among $11$ people the $5$-person committees number $\\binom{11}{5}$, and $\\binom{10}{5}$ of them leave Dario out, so the difference $\\binom{11}{5} - \\binom{10}{5} = \\binom{10}{4}$ counts the committees containing Dario. Of those, $\\binom{9}{4}$ also contain Elsa, and taking them away leaves the committees with Dario but not Elsa: Dario’s seat plus $3$ more from the remaining $9$, which is $\\binom{9}{3}$ ✓. Route two, evaluate every term. $\\binom{11}{5} = 462$, $\\binom{10}{5} = 252$ and $\\binom{9}{4} = 126$, so the expression is $462 - 252 - 126 = 84$, and $\\binom{9}{3} = \\frac{9 \\cdot 8 \\cdot 7}{6} = 84$ ✓. (The choice $\\binom{10}{4} = 210$ STOPS AFTER ONE PEEL ✗; $\\binom{8}{3} = 56$ PEELS ONE ROW TOO FAR ✗; $\\binom{9}{4} = 126$ PEELS THE WRONG PARENT at the second step ✗.)',
    },
    {
      q: 'Which single combination equals $\\binom{10}{2} + \\binom{10}{3} + \\binom{11}{4}$?',
      choices: ['$\\binom{11}{3}$', '$\\binom{12}{4}$', '$\\binom{12}{3}$', '$\\binom{13}{5}$'],
      answer: 1,
      solution:
        'Route one, combine left to right. The first two terms are neighbors in row $10$, so they add to the entry below them: $\\binom{10}{2} + \\binom{10}{3} = \\binom{11}{3}$. That result is now the left neighbor of $\\binom{11}{4}$ in row $11$, so the two of them add to $\\binom{12}{4}$ ✓. Route two, add the values. $\\binom{10}{2} = 45$, $\\binom{10}{3} = 120$ and $\\binom{11}{4} = 330$, so the sum is $45 + 120 + 330 = 495$, and $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$ ✓. (The choice $\\binom{11}{3} = 165$ STOPS AFTER THE FIRST COMBINATION and never uses the third term ✗; $\\binom{12}{3} = 220$ KEEPS THE SMALLER BOTTOM NUMBER at the last step ✗; $\\binom{13}{5} = 1287$ APPLIES THE IDENTITY ONE TIME TOO MANY ✗.)',
    },
    {
      q: 'For an integer $k$ with $0 \\le k \\le 5$, $\\binom{13}{6} - \\binom{12}{6} - \\binom{11}{5} = \\binom{11}{k}$. What is $k$?',
      choices: ['$4$', '$5$', '$7$', '$6$'],
      answer: 0,
      solution:
        'Route one, peel twice. The identity gives $\\binom{13}{6} - \\binom{12}{6} = \\binom{12}{5}$, and then $\\binom{12}{5} - \\binom{11}{5} = \\binom{11}{4}$, so $k = 4$ ✓. Route two, work with the values. $\\binom{13}{6} = 1716$, $\\binom{12}{6} = 924$ and $\\binom{11}{5} = 462$, so the left side is $1716 - 924 - 462 = 330$. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$, which holds $330$ in positions $4$ and $7$; only position $4$ lies in the stated range $0 \\le k \\le 5$ ✓. (The choice $5$ STOPS AFTER ONE PEEL at $\\binom{12}{5}$ and reads off its bottom number ✗; $7$ IS THE SYMMETRIC PARTNER, since $\\binom{11}{7} = 330$ as well, but it sits outside the stated range ✗; $6$ COPIES THE BOTTOM NUMBER OF THE FIRST TERM ✗.)',
    },
  ],
  // slot 8 — barred members and unknown class sizes
  [
    {
      q: 'From a class of $n$ students, $4$-person committees are formed, where $n$ is a positive integer. Exactly $286$ of the possible committees include Dario. How many of the possible committees include neither Dario nor Elsa?',
      choices: ['$495$', '$715$', '$1001$', '$220$'],
      answer: 0,
      solution:
        'Route one, find $n$, then bar two students. A committee with Dario fills his seat and takes $3$ more from the other $n - 1$, so $\\binom{n-1}{3} = 286$, that is $(n-1)(n-2)(n-3) = 1716 = 13 \\cdot 12 \\cdot 11$, giving $n - 1 = 13$ and $n = 14$. Committees avoiding both Dario and Elsa take all $4$ from the remaining $12$ students: $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$ ✓. Route two, subtract the piles one at a time. All committees number $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$, so those without Dario number $1001 - 286 = 715$. Among those, the ones containing Elsa fill her seat and take $3$ more from the $12$ students who are neither Dario nor Elsa, which is $\\binom{12}{3} = 220$. So the committees with neither are $715 - 220 = 495$ ✓. (The choice $715$ REMOVES ONLY DARIO ✗; $1001$ IS THE TOTAL ✗; $220$ LEAVES A SEAT FOR A BARRED STUDENT, choosing only $3$ from the $12$ ✗.)',
    },
    {
      q: 'From a club of $n$ members, $3$-person committees are formed, where $n$ is a positive integer. Exactly $455$ of the possible committees include neither Hana nor Iris. What is $n$?',
      choices: ['$15$', '$16$', '$17$', '$680$'],
      answer: 2,
      solution:
        'Route one, bar the two members. A committee with neither Hana nor Iris takes all $3$ members from the other $n - 2$, so $\\binom{n-2}{3} = 455$, that is $(n-2)(n-3)(n-4) = 2730 = 15 \\cdot 14 \\cdot 13$. So $n - 2 = 15$ and $n = 17$ ✓. Route two, count from the other side for $n = 17$. All $3$-person committees from $17$ members number $\\binom{17}{3} = \\frac{17 \\cdot 16 \\cdot 15}{6} = 680$. Those using at least one of Hana and Iris split into: both of them plus $1$ more from $15$, which is $15$; Hana without Iris plus $2$ more from $15$, which is $\\binom{15}{2} = 105$; and Iris without Hana, another $105$. That is $15 + 105 + 105 = 225$, leaving $680 - 225 = 455$ ✓. (The choice $15$ REPORTS $n - 2$, the pool left after both are barred ✗; $16$ REMOVES ONLY ONE OF THE TWO, and would give $\\binom{14}{3} = 364$ ✗; $680$ REPORTS THE TOTAL NUMBER OF COMMITTEES instead of $n$ ✗.)',
    },
    {
      q: 'From a class of $n$ students, $4$-person committees are formed, where $n$ is a positive integer. Exactly $455$ of them include Bruno and exactly $1365$ of them leave him out. How many committees are possible in all?',
      choices: ['$1365$', '$1820$', '$910$', '$2730$'],
      answer: 1,
      solution:
        'Route one, split on Bruno. Every committee either includes Bruno or leaves him out, and no committee does both, so the total is $455 + 1365 = 1820$ ✓. Route two, recover $n$ and count directly. The with-Bruno pile takes $3$ more from the other $n - 1$ students, so $\\binom{n-1}{3} = 455$, that is $(n-1)(n-2)(n-3) = 2730 = 15 \\cdot 14 \\cdot 13$, giving $n = 16$. All $4$-person committees from $16$ students number $\\binom{16}{4} = \\frac{16 \\cdot 15 \\cdot 14 \\cdot 13}{24} = \\frac{43680}{24} = 1820$ ✓. (The choice $1365$ REPORTS ONLY THE WITHOUT-BRUNO PILE ✗; $910$ SUBTRACTS THE PILES instead of adding them ✗; $2730$ DOUBLES THE LARGER PILE ✗.)',
    },
  ],
  // slot 9 — chains of the identity
  [
    {
      q: 'What is $\\binom{8}{3} + \\binom{8}{4} + \\binom{9}{5}$?',
      choices: ['$126$', '$252$', '$182$', '$210$'],
      answer: 1,
      solution:
        'Route one, combine left to right. The first two are neighbors in row $8$, so $\\binom{8}{3} + \\binom{8}{4} = \\binom{9}{4}$. That is now the left neighbor of $\\binom{9}{5}$ in row $9$, so the whole sum is $\\binom{10}{5} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6}{120} = \\frac{30240}{120} = 252$ ✓. Route two, add the values. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, so $\\binom{8}{3} = 56$ and $\\binom{8}{4} = 70$; row $9$ gives $\\binom{9}{5} = 126$. Then $56 + 70 + 126 = 252$ ✓. (The choice $126$ STOPS AFTER THE FIRST COMBINATION, reporting $\\binom{9}{4}$ ✗; $182$ DROPS THE MIDDLE TERM, adding only $56 + 126$ ✗; $210$ is $\\binom{10}{4}$, KEEPING THE SMALLER BOTTOM NUMBER at the last step ✗.)',
    },
    {
      q: 'What is $\\binom{12}{4} + \\binom{12}{5} + \\binom{13}{6} + \\binom{14}{7}$?',
      choices: ['$3003$', '$5005$', '$4719$', '$6435$'],
      answer: 3,
      solution:
        'Route one, collapse the chain one step at a time. The first two are neighbors in row $12$: $\\binom{12}{4} + \\binom{12}{5} = \\binom{13}{5}$. Adding $\\binom{13}{6}$ gives $\\binom{14}{6}$, and adding $\\binom{14}{7}$ gives $\\binom{15}{7} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{5040} = 6435$ ✓. Route two, add the four values. $\\binom{12}{4} = 495$, $\\binom{12}{5} = 792$, $\\binom{13}{6} = 1716$ and $\\binom{14}{7} = 3432$, so the sum is $495 + 792 + 1716 + 3432 = 6435$ ✓. (The choice $3003$ is $\\binom{14}{6}$, STOPPING ONE STEP EARLY and never using the last term ✗; $5005$ is $\\binom{15}{6}$, KEEPING THE SMALLER BOTTOM NUMBER at the last step ✗; $4719$ DROPS $\\binom{13}{6}$ from the sum ✗.)',
    },
    {
      q: 'For an integer $m$ with $0 \\le m \\le 6$, $\\binom{10}{3} + \\binom{10}{4} + \\binom{11}{5} + \\binom{12}{6} = \\binom{13}{m}$. What is $m$?',
      choices: ['$4$', '$5$', '$6$', '$7$'],
      answer: 2,
      solution:
        'Route one, collapse the chain. The first two are neighbors in row $10$, giving $\\binom{11}{4}$; adding $\\binom{11}{5}$ gives $\\binom{12}{5}$; adding $\\binom{12}{6}$ gives $\\binom{13}{6}$, so $m = 6$ ✓. Route two, add the values and look up the row. $\\binom{10}{3} = 120$, $\\binom{10}{4} = 210$, $\\binom{11}{5} = 462$ and $\\binom{12}{6} = 924$, so the sum is $120 + 210 + 462 + 924 = 1716$. Row $13$ is $1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$, which holds $1716$ in positions $6$ and $7$; only position $6$ lies in the stated range $0 \\le m \\le 6$ ✓. (The choice $4$ STOPS AFTER THE FIRST COMBINATION at $\\binom{11}{4}$ ✗; $5$ STOPS ONE STEP SHORT at $\\binom{12}{5}$ ✗; $7$ IS THE SYMMETRIC PARTNER, since $\\binom{13}{7} = 1716$ too, but it sits outside the stated range ✗.)',
    },
  ],
  // slot 10 — the identity read as a difference
  [
    {
      q: 'For some positive integer $n$, $\\binom{n}{5} - \\binom{n-1}{5} = 495$. What is $\\binom{n}{2}$?',
      choices: ['$66$', '$495$', '$78$', '$91$'],
      answer: 2,
      solution:
        'Route one, read the difference as a pile of committees. Among $n$ people the $5$-person committees number $\\binom{n}{5}$, and $\\binom{n-1}{5}$ of them leave Vik out, so the difference counts the committees containing Vik: $\\binom{n-1}{4} = 495$. Since $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$, we get $n - 1 = 12$ and $n = 13$, so $\\binom{13}{2} = \\frac{13 \\cdot 12}{2} = 78$ ✓. Route two, test rows against the given difference. Row $12$ has $\\binom{12}{5} = 792$ and row $13$ has $\\binom{13}{5} = 1287$, and $1287 - 792 = 495$ exactly, so $n = 13$; row $13$ then gives its position-$2$ entry as $78$ ✓. (The choice $66$ is $\\binom{12}{2}$, USING $n - 1$ IN PLACE OF $n$ ✗; $495$ REPEATS THE GIVEN DIFFERENCE ✗; $91$ is $\\binom{14}{2}$, OVERSHOOTING BY A ROW ✗.)',
    },
    {
      q: 'For some positive integer $n$, $\\binom{n}{3} - \\binom{n-1}{3} = 136$. What is $n$?',
      choices: ['$18$', '$17$', '$19$', '$816$'],
      answer: 0,
      solution:
        'Route one, read the difference as a pile of committees. The $3$-person committees from $n$ people number $\\binom{n}{3}$, and $\\binom{n-1}{3}$ of them leave Cleo out, so the difference counts the committees with Cleo: $\\binom{n-1}{2} = 136$. Then $\\frac{(n-1)(n-2)}{2} = 136$ gives $(n-1)(n-2) = 272 = 17 \\cdot 16$, so $n - 1 = 17$ and $n = 18$ ✓. Route two, compute both terms for $n = 18$. $\\binom{18}{3} = \\frac{18 \\cdot 17 \\cdot 16}{6} = 816$ and $\\binom{17}{3} = \\frac{17 \\cdot 16 \\cdot 15}{6} = 680$, and $816 - 680 = 136$ ✓. (The choice $17$ REPORTS $n - 1$, the row the difference lives in ✗; $19$ OVERSHOOTS BY A ROW, since it would need $\\binom{18}{2} = 153$ ✗; $816$ REPORTS $\\binom{18}{3}$ instead of $n$ ✗.)',
    },
    {
      q: 'For some positive integer $n$, $\\binom{n}{2} = 105$. What is $\\binom{n}{4} - \\binom{n-1}{4}$?',
      choices: ['$455$', '$286$', '$1365$', '$364$'],
      answer: 3,
      solution:
        'Route one, find $n$, then read the difference with the identity. From $\\frac{n(n-1)}{2} = 105$ we get $n(n-1) = 210 = 15 \\cdot 14$, so $n = 15$. The identity rearranges to $\\binom{n}{4} - \\binom{n-1}{4} = \\binom{n-1}{3}$, so the answer is $\\binom{14}{3} = \\frac{14 \\cdot 13 \\cdot 12}{6} = 364$ ✓. Route two, compute both terms. With $n = 15$, $\\binom{15}{4} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12}{24} = 1365$ and $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$, so the difference is $1365 - 1001 = 364$ ✓. (The choice $455$ is $\\binom{15}{3}$, USING $n$ WHERE THE IDENTITY WANTS $n - 1$ ✗; $286$ is $\\binom{13}{3}$, DROPPING ONE ROW TOO FAR ✗; $1365$ REPORTS THE FIRST TERM alone, forgetting the subtraction ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 12, sections: { '12.4': s124 } }
