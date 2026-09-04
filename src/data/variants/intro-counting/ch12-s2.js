// Counting & Probability chapter 12 — variations for section 12.3
// (Those Numbers Look Familiar!). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Rows and positions are numbered from $0$ in every stem that names one, and
//    any stem that would otherwise have two answers by row symmetry states its
//    index range outright.
//  - A walk down the triangle starts at the single $1$ at the top and takes one
//    down-left or down-right step at each stage.
//  - Every keyed answer is reached twice along routes that share no steps: read
//    the entry off the row built by the additive rule, evaluate the combination
//    by its formula, count the walks that land on the spot, or pair each choice
//    with its complement.
//  - Each distractor is one named slip — counting rows or positions from $1$,
//    mirroring across the wrong number, sliding one row or one position, taking
//    a total instead of a part — named in CAPS.

const s123 = [
  // slot 1 — naming the entry as a combination
  [
    {
      q: 'Which combination is the entry in row $12$, position $5$ of Pascal’s triangle? (Rows and positions are numbered from $0$.)',
      choices: ['$\\binom{5}{12}$', '$\\binom{12}{5}$', '$\\binom{11}{5}$', '$\\binom{12}{6}$'],
      answer: 1,
      solution:
        'Route one, the naming rule. The row number goes on top and the position on the bottom, so the entry is $\\binom{12}{5}$; by formula that is $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 792$ ✓. Route two, count the walks. Landing in row $12$, position $5$ takes $12$ steps of which exactly $5$ go right, so the number of walks is the number of ways to choose those $5$ steps; building row $12$ from row $11 = 1, 11, 55, 165, 330, 462, \\ldots$ gives $330 + 462 = 792$ walks to that spot, matching $\\binom{12}{5}$ ✓. (The choice $\\binom{5}{12}$ SWAPS ROW AND POSITION, and choosing $12$ things from $5$ is impossible ✗; $\\binom{11}{5}$ COUNTS ROWS FROM $1$, landing one row too high at $462$ ✗; $\\binom{12}{6}$ COUNTS POSITIONS FROM $1$, landing on the center entry $924$ ✗.)',
    },
    {
      q: 'The entry in row $9$, position $2$ of Pascal’s triangle is $36$. Because every row of the triangle is a palindrome, exactly one other combination with top number $9$ also equals $36$. Which one is it? (Rows and positions are numbered from $0$.)',
      choices: ['$\\binom{9}{6}$', '$\\binom{9}{8}$', '$\\binom{10}{7}$', '$\\binom{9}{7}$'],
      answer: 3,
      solution:
        'Route one, pair each choice with its complement. Choosing which $2$ of $9$ things to take is the same as choosing which $7$ to leave out, so $\\binom{9}{2} = \\binom{9}{7}$, and both equal $36$ ✓. Route two, write the row out. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, so adding neighbors gives row $9 = 1, 9, 36, 84, 126, 126, 84, 36, 9, 1$; the second $36$ sits in position $7$, so the matching combination is $\\binom{9}{7}$ ✓. (The choice $\\binom{9}{6}$ MIRRORS THE WRONG POSITION, pairing $2$ with $6$ instead of with $7$, and equals $84$ ✗; $\\binom{9}{8}$ MIRRORS ACROSS THE NUMBER OF ENTRIES, using $10 - 2$ rather than $9 - 2$, and equals $9$ ✗; $\\binom{10}{7}$ CHANGES THE ROW as well and equals $120$ ✗.)',
    },
    {
      q: 'A student looking up $\\binom{16}{4}$ in Pascal’s triangle counts lines from the top starting at $1$, and counts the numbers inside a line starting at $1$. Which line, and which number in that line, holds the value the student wants?',
      choices: ['Line $16$, number $4$', 'Line $17$, number $4$', 'Line $17$, number $5$', 'Line $16$, number $5$'],
      answer: 2,
      solution:
        'Route one, shift both counts. In the usual numbering $\\binom{16}{4}$ is the entry in row $16$, position $4$, and both of those counts start at $0$. Counting lines from $1$ turns row $16$ into line $17$, and counting numbers from $1$ turns position $4$ into number $5$: line $17$, number $5$ ✓. Route two, hunt for the value. $\\binom{16}{4} = \\frac{16 \\cdot 15 \\cdot 14 \\cdot 13}{4 \\cdot 3 \\cdot 2 \\cdot 1} = 1820$. The line that begins $1, 16, 120, 560, 1820, \\ldots$ is the one whose second number is $16$, and counting lines from the top starting at $1$ that is line $17$; inside it, $1820$ is the fifth number written ✓. (The choice line $16$, number $4$ FORGETS BOTH SHIFTS and points at $455$ ✗; line $17$, number $4$ SHIFTS ONLY THE LINE and points at $560$ ✗; line $16$, number $5$ SHIFTS ONLY THE NUMBER and points at $1365$ ✗.)',
    },
  ],
  // slot 2 — arithmetic on entries read off a printed row
  [
    {
      q: 'Row $9$ of Pascal’s triangle is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$. Without computing any factorials, use the row to find $\\binom{9}{6} - \\binom{9}{8}$. (Positions are numbered from $0$.)',
      choices: ['$90$', '$93$', '$75$', '$84$'],
      answer: 2,
      solution:
        'Route one, read the row. Counting from position $0$, the entries are $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, so position $6$ holds $84$ and position $8$ holds $9$: $84 - 9 = 75$ ✓. Route two, count directly. Choosing $6$ of $9$ things is the same as leaving out $3$, and there are $\\frac{9 \\cdot 8 \\cdot 7}{3 \\cdot 2 \\cdot 1} = 84$ ways; choosing $8$ of $9$ is the same as picking the single one left out, so there are $9$ ways. The difference is $84 - 9 = 75$ ✓. (The choice $90$ COUNTS BOTH POSITIONS FROM $1$, reading $126$ and $36$ ✗; $93$ ADDS THE TWO ENTRIES instead of subtracting ✗; $84$ STOPS AFTER THE FIRST TERM, never subtracting ✗.)',
    },
    {
      q: 'Row $10$ of Pascal’s triangle is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. Without computing any factorials, use the row to find $\\binom{10}{6} - \\binom{10}{2} - \\binom{10}{1}$. (Positions are numbered from $0$.)',
      choices: ['$155$', '$165$', '$241$', '$175$'],
      answer: 0,
      solution:
        'Route one, read the row. Counting from position $0$: position $6$ holds $210$, position $2$ holds $45$, and position $1$ holds $10$. So the value is $210 - 45 - 10 = 155$ ✓. Route two, count directly. Choosing $6$ of $10$ is the same as leaving out $4$, which can be done in $\\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4 \\cdot 3 \\cdot 2 \\cdot 1} = 210$ ways; $\\binom{10}{2}$ is the number of pairs from $10$, which is $\\frac{10 \\cdot 9}{2} = 45$; and $\\binom{10}{1} = 10$. Then $210 - 45 - 10 = 155$ ✓. (The choice $165$ SUBTRACTS ONLY THE FIRST OF THE TWO TERMS, forgetting $\\binom{10}{1}$ ✗; $241$ COUNTS EVERY POSITION FROM $1$, reading $252 - 10 - 1$ ✗; $175$ FLIPS THE LAST SIGN, adding $10$ instead of subtracting it ✗.)',
    },
    {
      q: 'Row $12$ of Pascal’s triangle is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$. One entry of this row is exactly $429$ less than the entry in position $6$. What is that smaller entry? (Positions are numbered from $0$.)',
      choices: ['$792$', '$429$', '$1353$', '$495$'],
      answer: 3,
      solution:
        'Route one, subtract. Counting from position $0$, position $6$ holds $924$, so the entry wanted is $924 - 429 = 495$, and $495$ does appear in the row, in positions $4$ and $8$ ✓. Route two, test the gaps. Work along the row measuring each entry’s distance below $924$: $924 - 1 = 923$, $924 - 12 = 912$, $924 - 66 = 858$, $924 - 220 = 704$, $924 - 495 = 429$, and the remaining entries $792$ and $924$ give gaps of $132$ and $0$. Only $495$ has a gap of $429$ ✓. (The choice $792$ READS “LESS” AS THE NEXT SMALLER ENTRY ALONG THE ROW, whose gap is $132$ ✗; $429$ REPEATS THE GAP instead of naming the entry ✗; $1353$ ADDS $429$ TO $924$ and produces a number that is not in the row at all ✗.)',
    },
  ],
  // slot 3 — equal entries and the symmetry identity
  [
    {
      q: 'The entry in row $13$, position $9$ of Pascal’s triangle is $715$. Which of the following also equals $715$? (Rows and positions are numbered from $0$.)',
      choices: ['$\\binom{13}{4}$', '$\\binom{13}{5}$', '$\\binom{12}{9}$', '$\\binom{14}{9}$'],
      answer: 0,
      solution:
        'Route one, pair each choice with its complement. A walk to row $13$, position $9$ sends $9$ of its $13$ steps to the right, and naming those $9$ steps is the same as naming the $4$ that go left. So the walks to position $9$ and the walks to position $4$ are matched one for one, and $\\binom{13}{9} = \\binom{13}{4}$ ✓. Route two, evaluate. $\\binom{13}{4} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{17160}{24} = 715$, which is the stated value ✓. (The choice $\\binom{13}{5}$ MIRRORS $9$ USING $14 - 9$, the number of entries rather than the row number, and equals $1287$ ✗; $\\binom{12}{9}$ DROPS A ROW and equals $220$ ✗; $\\binom{14}{9}$ ADDS A ROW and equals $2002$ ✗.)',
    },
    {
      q: 'For which value of $k$ other than $3$, with $0 \\le k \\le 14$, is $\\binom{14}{k} = \\binom{14}{3}$?',
      choices: ['$10$', '$12$', '$11$', '$4$'],
      answer: 2,
      solution:
        'Route one, complement the choice. Picking $3$ of $14$ things is the same as picking the $11$ to leave behind, so $\\binom{14}{3} = \\binom{14}{11}$, giving $k = 11$ ✓. Route two, scan the row. Row $14$ is $1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1$. The value in position $3$ is $364$, and reading along, $364$ appears again only in position $11$ ✓. (The choice $10$ MIRRORS ACROSS $13$ instead of $14$ and lands on $1001$ ✗; $12$ MIRRORS ACROSS $15$, the number of entries, and lands on $91$ ✗; $4$ SLIDES ONE POSITION ALONG rather than mirroring, and lands on $1001$ ✗.)',
    },
    {
      q: 'For a positive integer $n$ greater than $15$, $\\binom{n}{4} = \\binom{n}{15}$. What is $n$?',
      choices: ['$11$', '$19$', '$18$', '$60$'],
      answer: 1,
      solution:
        'Route one, use the mirror. Within a single row, two entries in different positions are equal exactly when the positions mirror each other, which means they add up to the row number: $4 + 15 = n$, so $n = 19$ ✓. Route two, march down the triangle. Compare the two entries row by row: row $16$ gives $1820$ and $16$; row $17$ gives $2380$ and $136$; row $18$ gives $3060$ and $816$; row $19$ gives $3876$ and $3876$. The position-$15$ entry is catching up the whole way, so $n = 19$ is the only row that works ✓. (The choice $11$ SUBTRACTS $4$ FROM $15$ instead of adding ✗; $18$ STOPS ONE ROW SHORT, where the two entries are still $3060$ and $816$ ✗; $60$ MULTIPLIES $4$ AND $15$ ✗.)',
    },
  ],
  // slot 4 — walks down the triangle
  [
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $7$ steps, each going down-left or down-right. How many different walks end at position $3$ of row $7$? (Rows and positions are numbered from $0$.)',
      choices: ['$21$', '$7$', '$128$', '$35$'],
      answer: 3,
      solution:
        'Route one, choose the steps. Your position in row $7$ counts the steps that went right, so ending at position $3$ means exactly $3$ of the $7$ steps went right. Choosing which $3$ can be done in $\\frac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$ ways ✓. Route two, read the entry. The walk counts obey the same additive rule and start from the same single $1$, so they are the entries themselves. Row $6$ is $1, 6, 15, 20, 15, 6, 1$, so row $7$ is $1, 7, 21, 35, 35, 21, 7, 1$ and position $3$ holds $35$ ✓. (The choice $21$ COUNTS POSITIONS FROM $1$, reading position $2$ ✗; $7$ COUNTS THE STEPS rather than the walks ✗; $128 = 2^7$ COUNTS EVERY $7$-STEP WALK, wherever it lands ✗.)',
    },
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $6$ steps, each going down-left or down-right. How many different walks end at position $2$ or at position $4$ of row $6$? (Rows and positions are numbered from $0$.)',
      choices: ['$15$', '$30$', '$64$', '$26$'],
      answer: 1,
      solution:
        'Route one, choose the steps. Ending at position $2$ means $2$ of the $6$ steps went right, which can be arranged in $\\frac{6 \\cdot 5}{2} = 15$ ways; ending at position $4$ means $4$ went right, which is the same as choosing the $2$ that went left, another $15$ ways. The two endings are different, so the total is $15 + 15 = 30$ ✓. Route two, build the row. From row $5 = 1, 5, 10, 10, 5, 1$ the additive rule gives row $6 = 1, 6, 15, 20, 15, 6, 1$. Positions $2$ and $4$ hold $15$ and $15$, and each entry counts the walks reaching it, so $15 + 15 = 30$ ✓. (The choice $15$ COUNTS ONLY ONE OF THE TWO ENDINGS ✗; $64 = 2^6$ COUNTS EVERY $6$-STEP WALK ✗; $26$ COUNTS POSITIONS FROM $1$, adding $6 + 20$ ✗.)',
    },
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $9$ steps, each going down-left or down-right. Exactly $126$ walks end at one particular entry of row $9$. Which positions of row $9$ could that entry occupy? (Rows and positions are numbered from $0$.)',
      choices: ['Positions $4$ and $5$', 'Positions $3$ and $6$', 'Position $4$ only', 'Positions $5$ and $6$'],
      answer: 0,
      solution:
        'Route one, scan the row. The walks ending at a spot are counted by the entry there, and row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$. The value $126$ appears in positions $4$ and $5$ and nowhere else ✓. Route two, solve for the position. Ending at position $k$ means choosing which $k$ of the $9$ steps go right, so we need $\\binom{9}{k} = 126$. By formula $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{4 \\cdot 3 \\cdot 2 \\cdot 1} = 126$, and its mirror is position $9 - 4 = 5$. Entries strictly increase up to the center, so no third position can hold $126$ ✓. (The choice positions $3$ and $6$ READS THE $84$ PAIR instead ✗; position $4$ only FORGETS THE MIRROR, though the row is a palindrome ✗; positions $5$ and $6$ COUNTS POSITIONS FROM $1$, naming the two $126$s as the fifth and sixth entries written, and position $6$ holds $84$ ✗.)',
    },
  ],
  // slot 5 — solving for the size of a selection
  [
    {
      q: 'Row $10$ of Pascal’s triangle is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. A baker chooses $k$ different fillings out of $10$ kinds for a pastry box and finds there are exactly $120$ possible choices. What can $k$ be? (Positions are numbered from $0$.)',
      choices: ['$3$ only', '$4$ or $6$', '$3$ or $7$', '$4$ or $8$'],
      answer: 2,
      solution:
        'Route one, read the row. The number of choices is $\\binom{10}{k}$, the entry in position $k$ of row $10$. Counting from position $0$, the value $120$ sits in position $3$ and again in position $7$, so $k = 3$ or $k = 7$ ✓. Route two, pair the selections. Naming the fillings used is the same as naming the fillings left out, so a $k$ that works forces $10 - k$ to work too. By formula $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120$, so $k = 3$ works and its partner $10 - 3 = 7$ works as well; entries strictly increase up to the center, so no other $k$ gives $120$ ✓. (The choice $3$ only FORGETS THE MIRROR VALUE ✗; $4$ or $6$ READS THE $210$ PAIR ✗; $4$ or $8$ COUNTS POSITIONS FROM $1$, naming the two $120$s as the fourth and eighth entries written ✗.)',
    },
    {
      q: 'Row $12$ of Pascal’s triangle is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$. A gardener chooses $k$ of $12$ different seed packets and finds there are exactly $220$ possible choices. What is the sum of the two possible values of $k$? (Positions are numbered from $0$.)',
      choices: ['$12$', '$6$', '$14$', '$9$'],
      answer: 0,
      solution:
        'Route one, read the row. The count is $\\binom{12}{k}$, the entry in position $k$. Counting from position $0$, the value $220$ appears in positions $3$ and $9$, so the two values of $k$ are $3$ and $9$ and their sum is $12$ ✓. Route two, use the mirror without finding either value. Two different positions in row $12$ hold the same entry exactly when they mirror each other, and mirrored positions add up to the row number. So whatever the two values of $k$ turn out to be, they must sum to $12$ ✓. (The choice $6$ DOUBLES THE SMALLER VALUE, as if $k$ mirrored to itself ✗; $14$ COUNTS POSITIONS FROM $1$, adding $4 + 10$ ✗; $9$ NAMES THE LARGER VALUE alone instead of the sum ✗.)',
    },
    {
      q: 'For a positive integer $n$, choosing $k$ of $n$ different tiles can be done in exactly $3060$ ways, and among all $k$ with $0 \\le k \\le n$ this happens only for $k = 4$ and $k = 14$. What is $n$?',
      choices: ['$16$', '$10$', '$17$', '$18$'],
      answer: 3,
      solution:
        'Route one, use the mirror. Two different positions of a row hold the same entry only when they mirror each other, and mirrored positions add up to the row number: $n = 4 + 14 = 18$ ✓. Route two, solve for $n$ from the value alone. We need $\\binom{n}{4} = 3060$, so $n(n-1)(n-2)(n-3) = 3060 \\cdot 24 = 73440$. Trying rows: $16 \\cdot 15 \\cdot 14 \\cdot 13 = 43680$, $17 \\cdot 16 \\cdot 15 \\cdot 14 = 57120$, $18 \\cdot 17 \\cdot 16 \\cdot 15 = 73440$, so $n = 18$ ✓. (The choice $16$ FALLS TWO ROWS SHORT, where position $4$ holds $1820$ ✗; $10$ SUBTRACTS $4$ FROM $14$ instead of adding ✗; $17$ FALLS ONE ROW SHORT, where position $4$ holds $2380$ ✗.)',
    },
  ],
  // slot 6 — locating a count inside the triangle
  [
    {
      q: 'The number of ways to choose $4$ of $12$ different stamps is an entry of Pascal’s triangle. Which position of row $12$ holds it, and what is its value? (Rows and positions are numbered from $0$.)',
      choices: ['Position $4$, value $792$', 'Position $4$, value $495$', 'Position $5$, value $792$', 'Position $3$, value $220$'],
      answer: 1,
      solution:
        'Route one, build the row. The count is $\\binom{12}{4}$, so it sits in position $4$ of row $12$. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$, and the additive rule gives position $4$ of row $12$ as $165 + 330 = 495$ ✓. Route two, use the formula. $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{11880}{24} = 495$ ✓. (The choice position $4$, value $792$ NAMES THE POSITION CORRECTLY BUT READS THE VALUE FROM POSITION $5$ ✗; position $5$, value $792$ COUNTS POSITIONS FROM $1$ throughout ✗; position $3$, value $220$ SLIDES THE POSITION BACK ONE, as if the position counted the steps between entries ✗.)',
    },
    {
      q: 'Every row of Pascal’s triangle is a palindrome, so the value $\\binom{13}{10}$ can be read off row $13$ in two different positions. Which two positions are they? (Rows and positions are numbered from $0$.)',
      choices: ['Positions $4$ and $10$', 'Positions $2$ and $10$', 'Positions $3$ and $9$', 'Positions $3$ and $10$'],
      answer: 3,
      solution:
        'Route one, mirror the position. Choosing $10$ of $13$ things is the same as choosing the $3$ to leave out, so $\\binom{13}{10} = \\binom{13}{3}$ and the value is readable in positions $3$ and $10$ ✓. Route two, compute the value and hunt for it. $\\binom{13}{10} = \\frac{13 \\cdot 12 \\cdot 11}{3 \\cdot 2 \\cdot 1} = 286$ once the fraction is reduced, and row $13$ is $1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$; the number $286$ is written in positions $3$ and $10$ ✓. (The choice positions $4$ and $10$ MIRRORS ACROSS $14$, the number of entries, and position $4$ holds $715$ ✗; positions $2$ and $10$ MIRRORS ACROSS $12$, dropping a row, and position $2$ holds $78$ ✗; positions $3$ and $9$ FINDS THE PARTNER $3$ BUT THEN SLIDES THE ORIGINAL POSITION ONE BACK, and position $9$ holds $715$ ✗.)',
    },
    {
      q: 'One entry of Pascal’s triangle has value $364$ and sits in position $3$ of its row. Which row is it in, and what is the entry immediately to its left in that row? (Rows and positions are numbered from $0$.)',
      choices: ['Row $14$, entry $1001$', 'Row $13$, entry $78$', 'Row $14$, entry $91$', 'Row $15$, entry $105$'],
      answer: 2,
      solution:
        'Route one, solve for the row. We need $\\binom{n}{3} = 364$, so $n(n-1)(n-2) = 364 \\cdot 6 = 2184$. Since $14 \\cdot 13 \\cdot 12 = 2184$, the row is $14$, and the entry immediately to the left is $\\binom{14}{2} = \\frac{14 \\cdot 13}{2} = 91$ ✓. Route two, walk down the position-$3$ diagonal. Adding the position-$2$ entry each time gives $220$ in row $12$, then $220 + 66 = 286$ in row $13$, then $286 + 78 = 364$ in row $14$. Row $14$ written out is $1, 14, 91, 364, \\ldots$, so $364$ has $91$ on its left ✓. (The choice row $14$, entry $1001$ TAKES THE NEIGHBOR ON THE RIGHT ✗; row $13$, entry $78$ IS ONE ROW TOO HIGH, where position $3$ holds $286$ ✗; row $15$, entry $105$ IS ONE ROW TOO LOW, where position $3$ holds $455$ ✗.)',
    },
  ],
  // slot 7 — sums of entries from one row
  [
    {
      q: 'Row $12$ of Pascal’s triangle is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$. What is $\\binom{12}{3} + \\binom{12}{9}$? (Positions are numbered from $0$.)',
      choices: ['$440$', '$715$', '$220$', '$561$'],
      answer: 0,
      solution:
        'Route one, read both entries. Counting from position $0$, position $3$ holds $220$ and position $9$ also holds $220$, so the sum is $220 + 220 = 440$ ✓. Route two, mirror and evaluate once. Since $12 - 9 = 3$, the two terms are the same number, so the sum is $2\\binom{12}{3} = 2 \\cdot \\frac{12 \\cdot 11 \\cdot 10}{3 \\cdot 2 \\cdot 1} = 2 \\cdot 220 = 440$ ✓. (The choice $715$ MIRRORS $9$ ACROSS $13$ instead of $12$, reading the second term as $495$ ✗; $220$ REPORTS ONE TERM instead of the sum ✗; $561$ COUNTS POSITIONS FROM $1$, adding $66 + 495$ ✗.)',
    },
    {
      q: 'Row $10$ of Pascal’s triangle is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. What is $\\binom{10}{2} + \\binom{10}{8} + \\binom{10}{5}$? (Positions are numbered from $0$.)',
      choices: ['$417$', '$297$', '$342$', '$252$'],
      answer: 2,
      solution:
        'Route one, read the three entries. Counting from position $0$: position $2$ holds $45$, position $8$ holds $45$, and position $5$ holds $252$. The sum is $45 + 45 + 252 = 342$ ✓. Route two, count each selection. $\\binom{10}{2}$ counts pairs from $10$, which is $\\frac{10 \\cdot 9}{2} = 45$; $\\binom{10}{8}$ counts the same pairs by naming the two left out, another $45$; and $\\binom{10}{5} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 252$. Adding, $45 + 45 + 252 = 342$ ✓. (The choice $417$ COUNTS POSITION $8$ FROM $1$, reading $120$ ✗; $297$ USES ONLY ONE OF THE TWO EQUAL END TERMS ✗; $252$ REPORTS THE MIDDLE TERM alone ✗.)',
    },
    {
      q: 'Row $13$ of Pascal’s triangle is $1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$. For one value of $k$ with $k > 6$, $\\binom{13}{3} + \\binom{13}{k} = 572$. What is $k$? (Positions are numbered from $0$.)',
      choices: ['$3$', '$10$', '$9$', '$11$'],
      answer: 1,
      solution:
        'Route one, subtract and search. Counting from position $0$, position $3$ holds $286$, so the missing term is $572 - 286 = 286$. Reading along row $13$ past position $6$, the value $286$ appears in position $10$, so $k = 10$ ✓. Route two, notice the doubling. The total $572$ is exactly $2 \\cdot 286$, so the second term equals the first; two entries of one row are equal only in mirrored positions, and the mirror of position $3$ is $13 - 3 = 10$, which satisfies $k > 6$ ✓. (The choice $3$ IGNORES THE REQUIREMENT $k > 6$ and repeats the position already used ✗; $9$ MIRRORS ACROSS $12$, dropping a row, and lands on $715$ ✗; $11$ MIRRORS ACROSS $14$, the number of entries, and lands on $78$ ✗.)',
    },
  ],
  // slot 8 — finding the row from an entry
  [
    {
      q: 'An entry of Pascal’s triangle equals $2380$ and sits in position $4$ of its row. Which row is it in? (Rows and positions are numbered from $0$.)',
      choices: ['Row $16$', 'Row $18$', 'Row $17$', 'Row $19$'],
      answer: 2,
      solution:
        'Route one, solve with the formula. We need $\\binom{n}{4} = 2380$, so $n(n-1)(n-2)(n-3) = 2380 \\cdot 24 = 57120$. Testing: $16 \\cdot 15 \\cdot 14 \\cdot 13 = 43680$ and $17 \\cdot 16 \\cdot 15 \\cdot 14 = 57120$, so the row is $17$ ✓. Route two, climb the position-$4$ diagonal. Each position-$4$ entry is the one above it plus the position-$3$ entry of that same row: from $\\binom{14}{4} = 1001$ we get $1001 + 364 = 1365$ in row $15$, then $1365 + 455 = 1820$ in row $16$, then $1820 + 560 = 2380$ in row $17$ ✓. (The choice row $16$ FALLS ONE ROW SHORT, where position $4$ holds $1820$ ✗; row $18$ COUNTS ROWS FROM $1$, and its position-$4$ entry is $3060$ ✗; row $19$ OVERSHOOTS BY TWO, where position $4$ holds $3876$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, the entry in position $3$ of row $n$ of Pascal’s triangle is $816$. How many entries does row $n$ have? (Rows and positions are numbered from $0$.)',
      choices: ['$19$', '$18$', '$17$', '$20$'],
      answer: 0,
      solution:
        'Route one, solve with the formula. We need $\\binom{n}{3} = 816$, so $n(n-1)(n-2) = 816 \\cdot 6 = 4896$. Since $18 \\cdot 17 \\cdot 16 = 4896$, the row is $18$. Row $0$ has one entry and each row after it has one more, so row $18$ has $19$ entries ✓. Route two, climb the position-$3$ diagonal and count entries. Adding the position-$2$ entry each time gives $560$ in row $16$, then $560 + 120 = 680$ in row $17$, then $680 + 136 = 816$ in row $18$. A walk into row $18$ takes $18$ steps and can land at $0, 1, 2, \\ldots, 18$ steps to the right, which is $19$ landing spots, so the row has $19$ entries ✓. (The choice $18$ GIVES THE ROW NUMBER instead of the count of entries ✗; $17$ FALLS ONE ROW SHORT and also reports a row number, where position $3$ holds $680$ ✗; $20$ ADDS TWO TO THE ROW NUMBER when converting to a count ✗.)',
    },
    {
      q: 'What is the entry in position $5$ of row $14$ of Pascal’s triangle? (Rows and positions are numbered from $0$.)',
      choices: ['$1001$', '$3003$', '$1287$', '$2002$'],
      answer: 3,
      solution:
        'Route one, use the formula. The entry is $\\binom{14}{5} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{240240}{120} = 2002$ ✓. Route two, add the two entries above. Row $13$ is $1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$, and position $5$ of row $14$ is the sum of positions $4$ and $5$ of row $13$: $715 + 1287 = 2002$ ✓. (The choice $1001$ COUNTS POSITIONS FROM $1$, reading position $4$ ✗; $3003$ SLIDES ONE POSITION ALONG to position $6$ ✗; $1287$ STAYS IN ROW $13$, reading its position-$5$ entry ✗.)',
    },
  ],
  // slot 9 — totals over several landing spots
  [
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $7$ steps, each going down-left or down-right, ending somewhere in row $7 = 1, 7, 21, 35, 35, 21, 7, 1$. How many of the possible walks end at an entry whose value is at least $21$?',
      choices: ['$112$', '$70$', '$128$', '$4$'],
      answer: 0,
      solution:
        'Route one, add the qualifying entries. Each entry counts the walks that end on it, and the entries of value at least $21$ are $21, 35, 35, 21$, in positions $2$ through $5$. Those walks number $21 + 35 + 35 + 21 = 112$ ✓. Route two, subtract the rest from the total. Every walk makes $7$ independent choices, so there are $2^7 = 128$ walks in all. The entries below $21$ are the $1, 7, 7, 1$ at the two ends, accounting for $16$ walks, so the qualifying walks number $128 - 16 = 112$ ✓. (The choice $70$ KEEPS ONLY THE TWO $35$s, dropping the two $21$s that also qualify ✗; $128$ COUNTS EVERY WALK, ignoring the condition ✗; $4$ COUNTS THE QUALIFYING ENTRIES rather than the walks reaching them ✗.)',
    },
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $8$ steps, each going down-left or down-right, ending somewhere in row $8 = 1, 8, 28, 56, 70, 56, 28, 8, 1$. How many of the possible walks end at an entry whose value is at most $28$?',
      choices: ['$37$', '$182$', '$74$', '$6$'],
      answer: 2,
      solution:
        'Route one, add the qualifying entries. Each entry counts the walks ending on it, and the entries of value at most $28$ are $1, 8, 28$ on the left and $28, 8, 1$ on the right. Those walks number $1 + 8 + 28 + 28 + 8 + 1 = 74$ ✓. Route two, subtract the rest from the total. Every walk makes $8$ independent choices, so there are $2^8 = 256$ walks in all. The entries above $28$ are $56, 70, 56$, accounting for $182$ walks, so the qualifying walks number $256 - 182 = 74$ ✓. (The choice $37$ ADDS ONLY THE LEFT-HAND $1, 8, 28$, forgetting the mirror ✗; $182$ COUNTS THE WALKS THAT FAIL the condition ✗; $6$ COUNTS THE QUALIFYING ENTRIES rather than the walks ✗.)',
    },
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $n$ steps, each going down-left or down-right, for a positive integer $n$. In all, $4096$ different walks are possible. How many of them end at the single middle entry of row $n$? (Rows and positions are numbered from $0$.)',
      choices: ['$792$', '$924$', '$4096$', '$1716$'],
      answer: 1,
      solution:
        'Route one, find $n$, then use the formula. Each step is one of two choices, so the walks number $2^n$; since $2^{12} = 4096$, we have $n = 12$. Row $12$ has $13$ entries, so its single middle entry is in position $6$, and $\\binom{12}{6} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{665280}{720} = 924$ ✓. Route two, build up by rows. Each row of the triangle sums to twice the row above it, and row $11 = 1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$ sums to $2048$, so row $12$ sums to $4096$ and is the row in question. Its middle entry is the sum of the two equal middle entries above it: $462 + 462 = 924$ ✓. (The choice $792$ TAKES THE ENTRY BESIDE THE MIDDLE, position $5$ ✗; $4096$ REPORTS THE TOTAL number of walks ✗; $1716$ COUNTS ROWS FROM $1$, landing in row $13$, which has two equal largest entries rather than a single middle one ✗.)',
    },
  ],
  // slot 10 — pinning the row down, then moving to another row
  [
    {
      q: 'In one row of Pascal’s triangle, the entries in positions $6$ and $7$ are both $1716$. What is the entry in position $6$ of the row two rows farther down? (Rows and positions are numbered from $0$.)',
      choices: ['$3003$', '$5005$', '$3432$', '$6435$'],
      answer: 1,
      solution:
        'Route one, name the row, then use the formula. Two equal entries in a row sit in mirrored positions, and mirrored positions add up to the row number, so the row is $6 + 7 = 13$. Two rows farther down is row $15$, where position $6$ holds $\\binom{15}{6} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{3603600}{720} = 5005$ ✓. Route two, step down with the additive rule. The row with $1716$ in positions $6$ and $7$ is $1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1$. Adding neighbors, the next row has $715 + 1287 = 2002$ in position $5$ and $1287 + 1716 = 3003$ in position $6$; adding those two gives $2002 + 3003 = 5005$ in position $6$ two rows down ✓. (The choice $3003$ GOES DOWN ONLY ONE ROW ✗; $3432$ TAKES POSITION $7$ ONE ROW DOWN, the largest entry of that row ✗; $6435$ TAKES THE LARGEST ENTRY OF THE CORRECT ROW, in position $7$ rather than $6$ ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle has a single largest entry, and that entry is $252$. What is the largest entry of the row three rows farther down? (Rows are numbered from $0$.)',
      choices: ['$924$', '$3432$', '$1287$', '$1716$'],
      answer: 3,
      solution:
        'Route one, name the row, then use the formula. A row has a single largest entry only when its row number is even, and that entry is the middle one. Since $\\binom{10}{5} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 252$, the row is $10$. Three rows farther down is row $13$, whose largest entry is $\\binom{13}{6} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{1235520}{720} = 1716$ ✓. Route two, step down with the additive rule. Row $10 = 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$; adding neighbors gives row $11$ with largest entries $210 + 252 = 462$ and $252 + 210 = 462$, then row $12$ with largest entry $462 + 462 = 924$ and $330 + 462 = 792$ beside it, and finally row $13$ with largest entry $792 + 924 = 1716$ ✓. (The choice $924$ STOPS TWO ROWS DOWN ✗; $3432$ GOES FOUR ROWS DOWN, to row $14$ ✗; $1287$ TAKES THE ENTRY BESIDE THE LARGEST in row $13$ ✗.)',
    },
    {
      q: 'The entry in position $5$ of one row of Pascal’s triangle is $6188$, and the row two rows above it has two equal middle entries. What is each of those two equal entries? (Rows and positions are numbered from $0$.)',
      choices: ['$3003$', '$12870$', '$6435$', '$5005$'],
      answer: 2,
      solution:
        'Route one, solve for the row, then use the formula. We need $\\binom{n}{5} = 6188$, so $n(n-1)(n-2)(n-3)(n-4) = 6188 \\cdot 120 = 742560$; since $17 \\cdot 16 \\cdot 15 \\cdot 14 \\cdot 13 = 742560$, the row is $17$. Two rows above is row $15$, which is odd and so has two equal middle entries, in positions $7$ and $8$, each equal to $\\binom{15}{7} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{32432400}{5040} = 6435$ ✓. Route two, walk the diagonals. Along the position-$5$ diagonal, each entry is the one above plus the position-$4$ entry of that same row: $3003$ in row $15$, then $3003 + 1365 = 4368$ in row $16$, then $4368 + 1820 = 6188$ in row $17$, so the row is $17$ and the row two above is $15$. Row $14$ is $1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, \\ldots$, and adding neighbors gives the middle pair of row $15$ as $3003 + 3432 = 6435$ ✓. (The choice $3003$ TAKES POSITION $5$ OF ROW $15$ instead of its middle ✗; $12870$ GOES UP ONLY ONE ROW, to the middle entry of row $16$ ✗; $5005$ TAKES THE ENTRY BESIDE THE MIDDLE PAIR of row $15$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 12, sections: { '12.3': s123 } }
