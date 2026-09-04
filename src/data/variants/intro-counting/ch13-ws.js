// Counting chapter 13 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s
//    formatting: a bare value such as '$1365$'.
//  - Every key was brute-forced in node before its stem was written —
//    distributions enumerated as explicit tuples of non-negative integers
//    under their stated minimums, caps and comparisons, subset sums
//    enumerated over the actual subsets, identity sums added term by term,
//    and the reversed slots found by scanning $n$. Every computed value
//    matched its pin. Pin deviations: none.
//  - Every stem settles its conventions: identical items, labeled boxes,
//    whether a box may be empty, every minimum and every cap, and where a
//    sum starts and stops.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: stars and bars vs. a
//    hockey-stick casework ladder (slots 1–2 and 4), the closed hockey stick
//    vs. adding the terms one at a time (slots 3 and 6), a direct parity
//    ladder vs. total-minus-the-other-parity (slot 5), inclusion–exclusion
//    vs. a complement bijection or a first-box table (slot 7), a
//    count-by-value sum vs. a tail count (slot 8), complementary counting vs.
//    casework (slot 9), and a symmetry split vs. direct casework (slot 10).
//    Each solution then names the most tempting wrong answer’s trap in CAPS,
//    ending ✗, with the wrong value computed rather than guessed.

const worksheet = [
  // slot 1 — plain stars and bars.
  //          Lanes: 5 non-negative variables summing to 11 -> 1365;
  //          5 beads into 6 labeled boxes -> 252;
  //          derived: 4 POSITIVE variables summing to 10 -> 84.
  [
    {
      q: 'How many ordered quintuples $(x_1, x_2, x_3, x_4, x_5)$ of non-negative integers satisfy $x_1 + x_2 + x_3 + x_4 + x_5 = 11$? (Any variable may be $0$.)',
      answer: '$1365$',
      solution:
        'Stars and bars. Line up $11$ stars and insert $4$ bars to cut them into $5$ groups, one group per variable; an empty group is allowed because a variable may be $0$. That is $15$ symbols in a row, and the arrangement is fixed once the bar positions are chosen: $\\binom{15}{4} = 1365$ ✓. Second route, a hockey stick. Fix $x_1$ and count what is left. If $x_1 = j$, the other four variables must sum to $11 - j$, which happens in $\\binom{11-j+3}{3} = \\binom{14-j}{3}$ ways. Adding over $j = 0, 1, \\ldots, 11$ gives $\\binom{14}{3} + \\binom{13}{3} + \\cdots + \\binom{3}{3} = 364 + 286 + 220 + 165 + 120 + 84 + 56 + 35 + 20 + 10 + 4 + 1 = 1365$, a complete diagonal ✓. USING $\\binom{15}{5} = 3003$ counts $5$ chosen positions instead of $4$ bars; five groups need only four dividers ✗.',
    },
    {
      q: 'Five identical beads are placed into six boxes labeled $1$ through $6$. A box may be left empty. How many placements are there?',
      answer: '$252$',
      solution:
        'Stars and bars. Because the beads are identical, a placement is nothing more than the list of six box counts adding to $5$. Write $5$ stars and $5$ bars in a row — five bars cut the stars into six groups, and an empty group is allowed — so the count is $\\binom{10}{5} = 252$ ✓. Second route, a hockey stick. Suppose box $1$ receives $j$ beads. The remaining $5 - j$ beads go into the other five boxes in $\\binom{5-j+4}{4} = \\binom{9-j}{4}$ ways. Adding over $j = 0$ through $5$: $\\binom{9}{4} + \\binom{8}{4} + \\binom{7}{4} + \\binom{6}{4} + \\binom{5}{4} + \\binom{4}{4} = 126 + 70 + 35 + 15 + 5 + 1 = 252$ ✓. COUNTING $6^5 = 7776$ treats the beads as distinguishable, giving each bead its own choice of box; identical beads make all such assignments with the same box counts one placement ✗.',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of **positive** integers satisfy $x + y + z + w = 10$? (Every variable must be at least $1$.)',
      answer: '$84$',
      solution:
        'Reserve one, then stars and bars. Set $x = a + 1$, $y = b + 1$, $z = c + 1$, $w = d + 1$ with $a, b, c, d$ non-negative. The equation becomes $a + b + c + d = 6$, and this substitution pairs off the positive quadruples with the non-negative ones exactly. Six stars and $3$ bars give $\\binom{9}{3} = 84$ ✓. Second route, a hockey stick over the first variable. If $x = k$, the other three positive variables sum to $10 - k$, and positive triples with sum $s$ number $\\binom{s-1}{2}$. So the total is $\\binom{8}{2} + \\binom{7}{2} + \\binom{6}{2} + \\binom{5}{2} + \\binom{4}{2} + \\binom{3}{2} + \\binom{2}{2}$ for $k = 1$ through $7$, that is $28 + 21 + 15 + 10 + 6 + 3 + 1 = 84$ ✓. ANSWERING $\\binom{13}{3} = 286$ solves the non-negative problem and ignores the word "positive"; those $286$ include quadruples with a zero ✗.',
    },
  ],

  // slot 2 — a floor on every share, plus the reversed "how many items" form.
  //          Lanes: 20 pencils to 5 students each >= 2 -> 1001;
  //          triples each >= 4 summing to 25 -> 105;
  //          reversed: 4 friends each >= 2, 2024 ways -> 29 cards.
  [
    {
      q: 'Twenty identical pencils are given to five students, and each student must receive at least $2$ pencils. How many ways are there to hand out all $20$ pencils?',
      answer: '$1001$',
      solution:
        'Pay the minimums first. Hand each of the five students $2$ pencils, using $10$ of them. The remaining $10$ pencils may go anywhere, including all to one student, so we need the number of ways to write $10$ as an ordered sum of five non-negative numbers: $10$ stars and $4$ bars, $\\binom{14}{4} = 1001$ ✓. Second route, a hockey stick on the first student. Let the first student take $2 + e$ pencils, where $e$ runs from $0$ to $10$. The other four students then share $18 - e$ pencils with each getting at least $2$, that is $10 - e$ extra pencils among four, in $\\binom{10-e+3}{3} = \\binom{13-e}{3}$ ways. Adding: $\\binom{13}{3} + \\binom{12}{3} + \\cdots + \\binom{3}{3} = 286 + 220 + 165 + 120 + 84 + 56 + 35 + 20 + 10 + 4 + 1 = 1001$ ✓. RESERVING ONLY ONE PENCIL EACH gives $15$ free pencils and $\\binom{19}{4} = 3876$; that answers "at least $1$", and it counts every share of exactly $1$, which the problem forbids ✗.',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of integers, each at least $4$, satisfy $a + b + c = 25$?',
      answer: '$105$',
      solution:
        'Shift each variable down. Write $a = a\' + 4$, $b = b\' + 4$, $c = c\' + 4$ with $a\', b\', c\'$ non-negative; the condition "at least $4$" becomes "at least $0$", and the sum drops by $12$ to $a\' + b\' + c\' = 13$. Thirteen stars and $2$ bars give $\\binom{15}{2} = 105$ ✓. Second route, casework on $a$. With $a$ fixed, $b + c = 25 - a$ and both are at least $4$, so $b$ may be anything from $4$ up to $21 - a$, giving $18 - a$ choices; this is positive only for $a$ from $4$ to $17$. Adding those counts is $14 + 13 + 12 + \\cdots + 2 + 1 = \\frac{14 \\cdot 15}{2} = 105$ ✓. SHIFTING BY $3$ INSTEAD OF $4$ leaves $16$ to distribute and gives $\\binom{18}{2} = 153$; "at least $4$" means subtracting $4$ from each variable, not $3$ ✗.',
    },
    {
      q: 'Some identical trading cards are divided among four friends so that each friend receives at least $2$ cards, and there are exactly $2024$ ways to do this. How many cards are there?',
      answer: '$29$',
      solution:
        'Undo the reserve. Say there are $N$ cards. Giving each friend $2$ cards uses $8$ of them and leaves $N - 8$ to spread freely among the four, which can be done in $\\binom{N-8+3}{3} = \\binom{N-5}{3}$ ways. So $\\binom{N-5}{3} = 2024$. Since $\\binom{24}{3} = \\frac{24 \\cdot 23 \\cdot 22}{6} = 2024$, we need $N - 5 = 24$, so $N = 29$ ✓. Second route, climbing the third diagonal. The numbers $\\binom{m}{3}$ increase strictly as $m$ grows, so at most one $m$ can work; walking up the diagonal, $\\binom{22}{3} = 1540$, $\\binom{23}{3} = 1771$, $\\binom{24}{3} = 2024$ — a hit at $m = 24$. Reading back through $m = N - 5$ gives $N = 29$ ✓. ANSWERING $21$ stops at the number of *free* cards and forgets the $8$ cards paid out as minimums; those eight are part of the pile too ✗.',
    },
  ],

  // slot 3 — a hockey stick read straight off, including one with a missing head.
  //          Lanes: binom(2,2)..binom(18,2) -> 969; binom(5,5)..binom(12,5) -> 1716;
  //          derived: binom(12,3)..binom(20,3), head removed -> 5490.
  [
    {
      q: 'Compute $\\binom{2}{2} + \\binom{3}{2} + \\binom{4}{2} + \\cdots + \\binom{18}{2}$. (The sum starts at $\\binom{2}{2}$ and every upper index from $2$ to $18$ appears once.)',
      answer: '$969$',
      solution:
        'The hockey stick. A sum $\\binom{r}{r} + \\binom{r+1}{r} + \\cdots + \\binom{n}{r}$ that starts at the very top of its diagonal equals $\\binom{n+1}{r+1}$. Here $r = 2$ and $n = 18$, so the value is $\\binom{19}{3} = \\frac{19 \\cdot 18 \\cdot 17}{6} = 969$ ✓. Second route, adding the terms one at a time. The terms $\\binom{m}{2}$ are the triangular numbers $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153$. Running totals: $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816, 969$ ✓. USING $\\binom{19}{2} = 171$ raises the upper index but leaves the lower one alone; the identity moves both up by one ✗.',
    },
    {
      q: 'Compute $\\binom{5}{5} + \\binom{6}{5} + \\binom{7}{5} + \\cdots + \\binom{12}{5}$. (The sum starts at $\\binom{5}{5}$ and every upper index from $5$ to $12$ appears once.)',
      answer: '$1716$',
      solution:
        'The hockey stick. The sum starts at the head of the $r = 5$ diagonal and stops at $n = 12$, so it collapses to $\\binom{13}{6} = 1716$; expanding, $\\binom{13}{6} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{720} = 1716$ ✓. Second route, adding the terms one at a time. They are $\\binom{5}{5} = 1$, $\\binom{6}{5} = 6$, $\\binom{7}{5} = 21$, $\\binom{8}{5} = 56$, $\\binom{9}{5} = 126$, $\\binom{10}{5} = 252$, $\\binom{11}{5} = 462$, $\\binom{12}{5} = 792$. Running totals: $1, 7, 28, 84, 210, 462, 924, 1716$ ✓. USING $\\binom{13}{5} = 1287$ bumps the upper index but keeps the lower index at $5$; both indices step up together ✗.',
    },
    {
      q: 'Compute $\\binom{12}{3} + \\binom{13}{3} + \\binom{14}{3} + \\cdots + \\binom{20}{3}$. Note that the sum starts at $\\binom{12}{3}$, not at the top of the diagonal.',
      answer: '$5490$',
      solution:
        'Complete the diagonal, then subtract the missing front. The full diagonal $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{20}{3}$ is a hockey stick equal to $\\binom{21}{4} = 5985$. The part we do not want, $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{11}{3}$, is itself a complete hockey stick equal to $\\binom{12}{4} = 495$. Subtracting, $5985 - 495 = 5490$ ✓. Second route, adding the nine terms one at a time: $\\binom{12}{3} = 220$, $286$, $364$, $455$, $560$, $680$, $816$, $969$, $\\binom{20}{3} = 1140$. Running totals: $220, 506, 870, 1325, 1885, 2565, 3381, 4350, 5490$ ✓. ANSWERING $\\binom{21}{4} = 5985$ applies the identity as if the sum began at $\\binom{3}{3}$; the nine terms from $\\binom{3}{3}$ through $\\binom{11}{3}$ were never in the sum ✗.',
    },
  ],

  // slot 4 — non-decreasing strings and multisets.
  //          Lanes: 5-digit non-decreasing strings over 10 digits -> 2002;
  //          bags of 6 from 7 kinds -> 924;
  //          derived: 3-digit non-decreasing with at least two different digits -> 210.
  [
    {
      q: 'How many five-digit strings, using the digits $0$ through $9$ and allowing leading zeros, are non-decreasing — each digit at least as large as the digit before it? (Repeats are allowed; $00247$ and $55558$ both qualify.)',
      answer: '$2002$',
      solution:
        'A string is its digit counts. Once you know how many $0$s, how many $1$s, and so on up to how many $9$s the string contains, there is exactly one way to write them down in non-decreasing order, so a string is the same thing as ten non-negative counts adding to $5$. Five stars and $9$ bars give $\\binom{14}{9} = \\binom{14}{5} = 2002$ ✓. Second route, a hockey stick on the smallest digit. If the first digit is $d$, the remaining four digits form a non-decreasing string over the $10 - d$ digits from $d$ to $9$, and by the same counting that number is $\\binom{4 + (10-d) - 1}{4} = \\binom{13-d}{4}$. Adding over $d = 0$ through $9$: $\\binom{13}{4} + \\binom{12}{4} + \\cdots + \\binom{4}{4} = 715 + 495 + 330 + 210 + 126 + 70 + 35 + 15 + 5 + 1 = 2002$ ✓. ANSWERING $\\binom{10}{5} = 252$ counts strictly increasing strings, one for each choice of five different digits; the problem allows a digit to repeat ✗.',
    },
    {
      q: 'A shop sells $7$ kinds of candy. How many different bags of $6$ candies are possible, using any number of each kind (a kind may be skipped)? (Bags with the same counts of each kind are the same bag.)',
      answer: '$924$',
      solution:
        'Stars and bars over the kinds. A bag is determined by seven non-negative counts, one per kind, adding to $6$. Six stars and $6$ bars in a row give $\\binom{12}{6} = 924$ ✓. Second route, a hockey stick on the first kind. If the bag holds $j$ candies of the first kind, the other $6 - j$ candies come from the remaining six kinds in $\\binom{6-j+5}{5} = \\binom{11-j}{5}$ ways. Adding over $j = 0$ through $6$: $\\binom{11}{5} + \\binom{10}{5} + \\binom{9}{5} + \\binom{8}{5} + \\binom{7}{5} + \\binom{6}{5} + \\binom{5}{5} = 462 + 252 + 126 + 56 + 21 + 6 + 1 = 924$ ✓. COMPUTING $7^6 = 117649$ picks a kind for each of six *distinguishable* candies; candies of the same kind are interchangeable, so only the counts matter ✗.',
    },
    {
      q: 'How many three-digit strings, using the digits $0$ through $9$ and allowing leading zeros, are non-decreasing and use at least two different digits? (Repeats are allowed, so $004$ counts, but $777$ does not.)',
      answer: '$210$',
      solution:
        'Count all, remove the constant strings. A non-decreasing three-digit string is the same as ten non-negative digit counts adding to $3$, which is $\\binom{12}{3} = 220$ strings in all. The ones using only one digit are $000, 111, \\ldots, 999$ — exactly $10$ of them. So the answer is $220 - 10 = 210$ ✓. Second route, by how many different digits appear. If all three digits differ, choosing the three digits fixes the string, since only one order is non-decreasing: $\\binom{10}{3} = 120$ strings. If exactly two different digits appear, choose them in $\\binom{10}{2} = 45$ ways, then decide whether the smaller or the larger is doubled, $2$ ways each, for $90$ strings. Together $120 + 90 = 210$ ✓. ANSWERING $220$ counts every non-decreasing string and never applies the restriction; the ten one-digit strings must go ✗.',
    },
  ],

  // slot 5 — a parity condition on one share.
  //          Lanes: 15 stickers, Ana odd -> 372; a+b+c+d = 9 with a even -> 125;
  //          derived: 11 stickers, Ana even -> 203.
  [
    {
      q: 'Fifteen identical stickers are given to four children — Ana, Bo, Cy, and Di. Ana must receive an odd number of stickers; the others may receive any number, including none. All $15$ stickers are handed out. How many ways are there?',
      answer: '$372$',
      solution:
        'Casework on Ana. If Ana takes $a$ stickers, the other three children share $15 - a$ with no restriction, which happens in $\\binom{15-a+2}{2} = \\binom{17-a}{2}$ ways. Ana’s share is odd, so $a = 1, 3, 5, 7, 9, 11, 13, 15$ and the counts are $\\binom{16}{2}, \\binom{14}{2}, \\binom{12}{2}, \\binom{10}{2}, \\binom{8}{2}, \\binom{6}{2}, \\binom{4}{2}, \\binom{2}{2}$, that is $120 + 91 + 66 + 45 + 28 + 15 + 6 + 1 = 372$ ✓. Second route, all ways minus the even ones. With no restriction at all the count is $\\binom{18}{3} = 816$. The even shares $a = 0, 2, 4, 6, 8, 10, 12, 14$ contribute $\\binom{17}{2} + \\binom{15}{2} + \\binom{13}{2} + \\binom{11}{2} + \\binom{9}{2} + \\binom{7}{2} + \\binom{5}{2} + \\binom{3}{2} = 136 + 105 + 78 + 55 + 36 + 21 + 10 + 3 = 444$. Subtracting, $816 - 444 = 372$ ✓. SPLITTING $816$ IN HALF for $408$ assumes odd and even shares are equally common; they are not, because $a = 0$ is available on the even side and pushes that side ahead ✗.',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d = 9$ with $a$ even? (Zero counts as even, and $b$, $c$, $d$ are unrestricted.)',
      answer: '$125$',
      solution:
        'Casework on $a$. For a fixed $a$, the triple $(b, c, d)$ must sum to $9 - a$, which happens in $\\binom{9-a+2}{2} = \\binom{11-a}{2}$ ways. Running $a$ over the even values $0, 2, 4, 6, 8$ gives $\\binom{11}{2} + \\binom{9}{2} + \\binom{7}{2} + \\binom{5}{2} + \\binom{3}{2} = 55 + 36 + 21 + 10 + 3 = 125$ ✓. Second route, all quadruples minus the odd-$a$ ones. Without any parity condition there are $\\binom{12}{3} = 220$ quadruples. The odd values $a = 1, 3, 5, 7, 9$ contribute $\\binom{10}{2} + \\binom{8}{2} + \\binom{6}{2} + \\binom{4}{2} + \\binom{2}{2} = 45 + 28 + 15 + 6 + 1 = 95$. Subtracting, $220 - 95 = 125$ ✓. DROPPING THE $a = 0$ CASE gives $125 - 55 = 70$; zero is even, and $a = 0$ is the single largest case in the ladder ✗.',
    },
    {
      q: 'Eleven identical stickers are given to four children — Ana, Bo, Cy, and Di. Ana must receive an even number of stickers (zero counts as even); the others may receive any number, including none. All $11$ stickers are handed out. How many ways are there?',
      answer: '$203$',
      solution:
        'Casework on Ana. If Ana takes $a$ stickers, the remaining $11 - a$ are shared by three children in $\\binom{11-a+2}{2} = \\binom{13-a}{2}$ ways. The even values are $a = 0, 2, 4, 6, 8, 10$, giving $\\binom{13}{2} + \\binom{11}{2} + \\binom{9}{2} + \\binom{7}{2} + \\binom{5}{2} + \\binom{3}{2} = 78 + 55 + 36 + 21 + 10 + 3 = 203$ ✓. Second route, all ways minus the odd ones. With no restriction the four children share $11$ stickers in $\\binom{14}{3} = 364$ ways. The odd shares $a = 1, 3, 5, 7, 9, 11$ account for $\\binom{12}{2} + \\binom{10}{2} + \\binom{8}{2} + \\binom{6}{2} + \\binom{4}{2} + \\binom{2}{2} = 66 + 45 + 28 + 15 + 6 + 1 = 161$, and $364 - 161 = 203$ ✓. ANSWERING $161$ counts the odd shares instead of the even ones; the two ladders differ because only the even side can start at $a = 0$ ✗.',
    },
  ],
  // slot 6 — figurate-number sums, one of them missing its front.
  //          Lanes: first sixteen triangular numbers -> 816;
  //          first eleven tetrahedral numbers -> 1001;
  //          derived: the 21st through 30th triangular numbers -> 3420.
  [
    {
      q: 'Find the sum of the first sixteen triangular numbers, $1 + 3 + 6 + 10 + \\cdots + 136$. (The $i$th triangular number is $1 + 2 + \\cdots + i$, and the sum runs from $i = 1$ to $i = 16$.)',
      answer: '$816$',
      solution:
        'Rewrite each term as a binomial coefficient. The $i$th triangular number is $\\frac{i(i+1)}{2} = \\binom{i+1}{2}$, so the sum is $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{17}{2}$. That starts at the head of the $r = 2$ diagonal and stops at $n = 17$, so the hockey stick gives $\\binom{18}{3} = \\frac{18 \\cdot 17 \\cdot 16}{6} = 816$ ✓. Second route, adding the sixteen numbers one at a time: $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136$, with running totals $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816$ ✓. ANSWERING $\\binom{17}{3} = 680$ uses $16$ as the top upper index instead of $17$; the sixteenth term is $\\binom{17}{2}$, not $\\binom{16}{2}$, so $680$ is the sum of only the first fifteen ✗.',
    },
    {
      q: 'Find the sum of the first eleven tetrahedral numbers, $1 + 4 + 10 + 20 + \\cdots + 286$, where the $i$th tetrahedral number is $\\binom{i+2}{3}$. (The sum runs from $i = 1$ to $i = 11$.)',
      answer: '$1001$',
      solution:
        'A hockey stick on the $r = 3$ diagonal. Substituting $i = 1, 2, \\ldots, 11$ into $\\binom{i+2}{3}$ turns the sum into $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{13}{3}$, which starts at the top of its diagonal and stops at $n = 13$. The identity gives $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$ ✓. Second route, adding the eleven numbers one at a time: $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286$, with running totals $1, 5, 15, 35, 70, 126, 210, 330, 495, 715, 1001$ ✓. ANSWERING $\\binom{13}{4} = 715$ stops the diagonal at $\\binom{12}{3}$; that is the tenth tetrahedral number, so $715$ leaves out the final $286$ ✗.',
    },
    {
      q: 'Find the sum of the twenty-first through thirtieth triangular numbers, $231 + 253 + 276 + \\cdots + 465$. (The $i$th triangular number is $1 + 2 + \\cdots + i$, and the sum runs from $i = 21$ to $i = 30$ — it does not start at $1$.)',
      answer: '$3420$',
      solution:
        'Two hockey sticks, one subtracted from the other. Since the $i$th triangular number is $\\binom{i+1}{2}$, the requested sum is $\\binom{22}{2} + \\binom{23}{2} + \\cdots + \\binom{31}{2}$. The full diagonal from $\\binom{2}{2}$ up to $\\binom{31}{2}$ is $\\binom{32}{3} = \\frac{32 \\cdot 31 \\cdot 30}{6} = 4960$, and the front we must remove, $\\binom{2}{2} + \\cdots + \\binom{21}{2}$, is $\\binom{22}{3} = \\frac{22 \\cdot 21 \\cdot 20}{6} = 1540$. So the answer is $4960 - 1540 = 3420$ ✓. Second route, adding the ten numbers one at a time: $231, 253, 276, 300, 325, 351, 378, 406, 435, 465$, with running totals $231, 484, 760, 1060, 1385, 1736, 2114, 2520, 2955, 3420$ ✓. SUBTRACTING $\\binom{21}{3} = 1330$ removes only the first nineteen triangular numbers and leaves the twentieth, $210$, in the total; that gives $4960 - 1330 = 3630$, which is $210$ too big ✗.',
    },
  ],

  // slot 7 — a cap on every variable.
  //          Lanes: four variables summing to 14, each <= 5 -> 80;
  //          four variables summing to 11, each <= 4 -> 52;
  //          derived: three variables summing to 15, each <= 9 -> 73.
  [
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 14$ with each of the four at most $5$? (Any variable may be $0$.)',
      answer: '$80$',
      solution:
        'Inclusion–exclusion. Ignoring the caps there are $\\binom{17}{3} = 680$ quadruples. To count those where a chosen variable is at least $6$, hand it $6$ and share the remaining $8$ freely: $\\binom{11}{3} = 165$, and there are $4$ choices of variable, so $660$. Two variables at least $6$ each costs $12$ and leaves $2$ to share: $\\binom{5}{3} = 10$, times $\\binom{4}{2} = 6$ pairs, so $60$; three would cost $18 > 14$, so the alternating sum stops. The answer is $680 - 660 + 60 = 80$ ✓. Second route, count the shortfalls instead. Each variable is at most $5$, so let $x\' = 5 - x$, and likewise for the others; these are non-negative and $x\' + y\' + z\' + w\' = 20 - 14 = 6$, again with each at most $5$. Free quadruples summing to $6$ number $\\binom{9}{3} = 84$, and the only violations are a single variable equal to $6$, which happens $4$ ways (one per variable, the rest zero). So $84 - 4 = 80$ ✓. STOPPING AFTER ONE SUBTRACTION at $680 - 660 = 20$ removes every quadruple with two large variables twice; those $60$ must be added back ✗.',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 11$ with each of the four at most $4$? (Any variable may be $0$.)',
      answer: '$52$',
      solution:
        'Inclusion–exclusion. With no caps there are $\\binom{14}{3} = 364$ quadruples. Forcing one chosen variable to be at least $5$ costs $5$ and leaves $6$: $\\binom{9}{3} = 84$, times $4$ variables is $336$. Two variables at least $5$ each costs $10$ and leaves $1$: $\\binom{4}{3} = 4$, times $\\binom{4}{2} = 6$ pairs is $24$; three would cost $15 > 11$. So the count is $364 - 336 + 24 = 52$ ✓. Second route, a table on $x$. Fix $x$ and count triples $(y, z, w)$ that sum to $11 - x$ with each at most $4$. Replacing each by its shortfall from $4$ turns this into triples summing to $12 - (11 - x) = 1 + x$ with each at most $4$: for $x = 0, 1, 2, 3$ the target $1, 2, 3, 4$ is small enough that no cap can bind, giving $\\binom{3}{2} = 3$, $\\binom{4}{2} = 6$, $\\binom{5}{2} = 10$, $\\binom{6}{2} = 15$; for $x = 4$ the target is $5$ and the three ways to put all $5$ in one place are lost, giving $\\binom{7}{2} - 3 = 18$. Adding, $3 + 6 + 10 + 15 + 18 = 52$ ✓. STOPPING AT $364 - 336 = 28$ forgets that a quadruple with two variables of $5$ or more, such as $(5, 6, 0, 0)$, was subtracted once for each of them ✗.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 15$ with each of $x$, $y$, $z$ at most $9$? (Any variable may be $0$.)',
      answer: '$73$',
      solution:
        'Inclusion–exclusion. All triples summing to $15$ number $\\binom{17}{2} = 136$. A chosen variable being at least $10$ costs $10$ and leaves $5$ to spread: $\\binom{7}{2} = 21$, times $3$ variables is $63$. Two variables at least $10$ would need $20 > 15$, so nothing is double-counted and the answer is $136 - 63 = 73$ ✓. Second route, a table on $x$. For a fixed $x$, we need $y + z = 15 - x$ with $0 \\leq y \\leq 9$ and $0 \\leq z \\leq 9$, so $y$ ranges over the integers from $\\max(0, 6-x)$ to $\\min(9, 15-x)$. Counting for $x = 0$ through $9$ gives $4, 5, 6, 7, 8, 9, 10, 9, 8, 7$, and $4 + 5 + 6 + 7 + 8 + 9 + 10 + 9 + 8 + 7 = 73$ ✓. SUBTRACTING FOR $x \\geq 9$ INSTEAD OF $x \\geq 10$ removes $3\\binom{8}{2} = 84$ and gives $136 - 84 = 52$; a variable equal to $9$ obeys the cap and must be kept ✗.',
    },
  ],

  // slot 8 — summing extreme elements over all subsets of a fixed size.
  //          Lanes: larger element of 2-subsets of 1..15 -> 1120;
  //          largest of 3-subsets of 1..9 -> 630;
  //          derived: smaller element of 2-subsets of 1..13 -> 364.
  [
    {
      q: 'For every $2$-element subset of $\\{1, 2, \\ldots, 15\\}$, write down its larger element. What is the sum of all these larger elements? (There are $\\binom{15}{2}$ subsets, and each contributes one number.)',
      answer: '$1120$',
      solution:
        'Count how often each value is the larger one. The number $m$ is the larger element exactly when the other element is smaller, so it happens $m - 1$ times. The sum is therefore $\\sum_{m=2}^{15} m(m-1)$, and since $m(m-1) = 2\\binom{m}{2}$ this equals $2\\left(\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{15}{2}\\right) = 2\\binom{16}{3} = 2 \\cdot 560 = 1120$ ✓. Second route, through the total. Every element of $\\{1, \\ldots, 15\\}$ lies in $14$ subsets, so adding both elements of every subset gives $14(1 + 2 + \\cdots + 15) = 14 \\cdot 120 = 1680$. Now count the smaller elements by tails: the number of subsets whose smaller element is at least $t$ is $\\binom{16-t}{2}$, and summing that over $t = 1, 2, \\ldots, 15$ counts each subset once for each $t$ up to its smaller element, so the smaller elements total $\\binom{15}{2} + \\binom{14}{2} + \\cdots + \\binom{1}{2} = \\binom{16}{3} = 560$. The larger elements are what remains: $1680 - 560 = 1120$ ✓. REPORTING $560$ answers with the sum of the *smaller* elements; the two sums are different, and the larger one is the bigger of the pair ✗.',
    },
    {
      q: 'For every $3$-element subset of $\\{1, 2, \\ldots, 9\\}$, write down its largest element. What is the sum of all these largest elements? (There are $\\binom{9}{3}$ subsets, and each contributes one number.)',
      answer: '$630$',
      solution:
        'Count how often each value is the largest. A subset has largest element $m$ exactly when its other two elements come from $\\{1, \\ldots, m-1\\}$, which happens $\\binom{m-1}{2}$ times. So the sum is $\\sum_{m=3}^{9} m\\binom{m-1}{2}$. Since $m\\binom{m-1}{2} = \\frac{m(m-1)(m-2)}{2} = 3\\binom{m}{3}$, the sum is $3\\left(\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{9}{3}\\right) = 3\\binom{10}{4} = 3 \\cdot 210 = 630$ ✓. Second route, by tails. For each threshold $t$ from $1$ to $9$, count the subsets whose largest element is at least $t$: that is all $\\binom{9}{3} = 84$ subsets minus the $\\binom{t-1}{3}$ living entirely below $t$. A subset with largest element $M$ is counted once for every $t$ from $1$ to $M$, so this running total is exactly the sum we want: $9 \\cdot 84 - \\left(\\binom{0}{3} + \\binom{1}{3} + \\cdots + \\binom{8}{3}\\right) = 756 - \\binom{9}{4} = 756 - 126 = 630$ ✓. ANSWERING $210$ reports $\\binom{10}{4}$ and forgets the factor of $3$; that number counts subsets, not the total of their largest elements ✗.',
    },
    {
      q: 'For every $2$-element subset of $\\{1, 2, \\ldots, 13\\}$, write down its smaller element. What is the sum of all these smaller elements? (There are $\\binom{13}{2}$ subsets, and each contributes one number.)',
      answer: '$364$',
      solution:
        'Count how often each value is the smaller one. The number $m$ is the smaller element exactly when the partner is larger, so it happens $13 - m$ times, for $m = 1$ through $12$. The sum is $\\sum_{m=1}^{12} m(13-m) = 12 + 22 + 30 + 36 + 40 + 42 + 42 + 40 + 36 + 30 + 22 + 12 = 364$ ✓. Second route, by tails and a hockey stick. For a threshold $t$, the subsets whose smaller element is at least $t$ are the $2$-element subsets of $\\{t, t+1, \\ldots, 13\\}$, and there are $\\binom{14-t}{2}$ of them. A subset with smaller element $s$ is counted once for each $t$ from $1$ to $s$, so adding over $t = 1$ to $13$ gives the sum of the smaller elements: $\\binom{13}{2} + \\binom{12}{2} + \\cdots + \\binom{1}{2} = \\binom{14}{3} = 364$ ✓. REPORTING $728$ gives the sum of the *larger* elements instead; both elements of every subset add to $12 \\cdot 91 = 1092$, and $1092 - 364 = 728$, so the two answers are far apart ✗.',
    },
  ],

  // slot 9 — caps in a purchase setting.
  //          Lanes: 12 scoops from 5 kinds, cashews <= 3 -> 1325;
  //          x+y+z = 20 with x <= 7 -> 140;
  //          derived: 15 fruits from 4 kinds, apples <= 4 and bananas <= 4 -> 300.
  [
    {
      q: 'A stand sells $5$ kinds of nut. Ravi buys $12$ scoops in all, any number of each kind (a kind may be skipped), but at most $3$ scoops of cashews. How many different purchases are possible? (Purchases with the same counts of each kind are the same.)',
      answer: '$1325$',
      solution:
        'Complementary counting. A purchase is five non-negative counts adding to $12$, so with no cap there are $\\binom{16}{4} = 1820$ purchases. The forbidden ones have at least $4$ scoops of cashews: set aside $4$ cashew scoops and choose the remaining $8$ scoops freely from the five kinds, $\\binom{12}{4} = 495$ ways. Subtracting, $1820 - 495 = 1325$ ✓. Second route, casework on the cashews. If the purchase holds $c$ cashew scoops, the other $12 - c$ scoops come from the remaining four kinds in $\\binom{12-c+3}{3} = \\binom{15-c}{3}$ ways. For $c = 0, 1, 2, 3$ that is $\\binom{15}{3} + \\binom{14}{3} + \\binom{13}{3} + \\binom{12}{3} = 455 + 364 + 286 + 220 = 1325$ ✓. SETTING ASIDE ONLY $3$ CASHEW SCOOPS subtracts $\\binom{13}{4} = 715$ for $1820 - 715 = 1105$; that removes every purchase with $3$ or more cashews, but exactly $3$ is allowed ✗.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 20$ with $x \\leq 7$? (There is no cap on $y$ or $z$, and any variable may be $0$.)',
      answer: '$140$',
      solution:
        'Complementary counting. All triples summing to $20$ number $\\binom{22}{2} = 231$. Those breaking the cap have $x \\geq 8$: hand $x$ eight units and spread the remaining $12$ freely, $\\binom{14}{2} = 91$ triples. Subtracting, $231 - 91 = 140$ ✓. Second route, casework on $x$. For a fixed $x$ the pair $(y, z)$ must sum to $20 - x$, and there are $21 - x$ such pairs. Running $x$ from $0$ to $7$ gives $21 + 20 + 19 + 18 + 17 + 16 + 15 + 14 = 140$ ✓. SUBTRACTING THE $x \\geq 7$ TRIPLES instead gives $231 - \\binom{15}{2} = 231 - 105 = 126$; the cap is $x \\leq 7$, so $x = 7$ is allowed and its $14$ triples must stay ✗.',
    },
    {
      q: 'A fruit stand sells apples, bananas, cherries, and dates. Lu buys $15$ pieces of fruit, any number of each kind, but at most $4$ apples and at most $4$ bananas. How many different purchases are possible? (Purchases with the same counts of each kind are the same; cherries and dates are uncapped, and a kind may be skipped.)',
      answer: '$300$',
      solution:
        'Inclusion–exclusion on the two caps. Without any cap, four non-negative counts adding to $15$ number $\\binom{18}{3} = 816$. Purchases with at least $5$ apples: set aside $5$ apples and choose the other $10$ pieces freely, $\\binom{13}{3} = 286$; likewise $286$ with at least $5$ bananas. Purchases breaking both caps set aside $10$ pieces and choose $5$ freely, $\\binom{8}{3} = 56$. So the count is $816 - 286 - 286 + 56 = 300$ ✓. Second route, casework on the apples. With $a$ apples fixed, the remaining $15 - a$ pieces split among bananas (capped at $4$), cherries and dates, which is $\\binom{17-a}{2} - \\binom{12-a}{2}$ by removing the banana-heavy cases. For $a = 0, 1, 2, 3, 4$ this gives $136 - 66 = 70$, $120 - 55 = 65$, $105 - 45 = 60$, $91 - 36 = 55$, $78 - 28 = 50$, and $70 + 65 + 60 + 55 + 50 = 300$ ✓. SUBTRACTING BOTH BAD CASES AND STOPPING at $816 - 572 = 244$ ignores the $56$ purchases that break both caps at once; those were removed twice and must be added back ✗.',
    },
  ],

  // slot 10 — a comparison between two of the variables.
  //          Lanes: x+y+z+w = 11 with x <= y -> 203; x+y+z = 14 with x <= y -> 64;
  //          derived: x+y+z+w = 9 with x < y (strict) -> 95.
  [
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 11$ with $x \\leq y$? (Equality is allowed, $z$ and $w$ are unrestricted, and any variable may be $0$.)',
      answer: '$203$',
      solution:
        'Symmetry, with the ties handled separately. All quadruples summing to $11$ number $\\binom{14}{3} = 364$. The tied ones have $x = y$, so $2x + z + w = 11$ with $x = 0, 1, 2, 3, 4, 5$, leaving $z + w = 11, 9, 7, 5, 3, 1$ and therefore $12 + 10 + 8 + 6 + 4 + 2 = 42$ quadruples. Swapping $x$ and $y$ matches the untied quadruples with $x < y$ to those with $x > y$ one for one, so each group has $\\frac{364 - 42}{2} = 161$. The answer is $161 + 42 = 203$ ✓. Second route, casework on $x$. Fix $x$; then $y \\geq x$, so write $y = x + y\'$ with $y\' \\geq 0$ and the equation becomes $y\' + z + w = 11 - 2x$, which has $\\binom{13-2x}{2}$ solutions. For $x = 0$ through $5$ that is $\\binom{13}{2} + \\binom{11}{2} + \\binom{9}{2} + \\binom{7}{2} + \\binom{5}{2} + \\binom{3}{2} = 78 + 55 + 36 + 21 + 10 + 3 = 203$, and $x \\geq 6$ is impossible since it would force $x + y \\geq 12$ ✓. HALVING $364$ FOR $182$ assumes $x \\leq y$ and $x > y$ split the quadruples evenly; the $42$ tied quadruples belong only to the first group, so it is larger ✗.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 14$ with $x \\leq y$? (Equality is allowed, $z$ is unrestricted, and any variable may be $0$.)',
      answer: '$64$',
      solution:
        'Symmetry, with the ties handled separately. All triples summing to $14$ number $\\binom{16}{2} = 120$. Ties need $x = y$, so $2x + z = 14$ and $x$ may be $0$ through $7$ with $z$ then forced — exactly $8$ triples. The remaining $120 - 8 = 112$ split evenly between $x < y$ and $x > y$ under the swap, giving $56$ each, so the answer is $56 + 8 = 64$ ✓. Second route, casework on $x$. With $x$ fixed and $y = x + y\'$ for $y\' \\geq 0$, the equation reads $y\' + z = 14 - 2x$, which has $15 - 2x$ solutions. For $x = 0$ through $7$ that is $15 + 13 + 11 + 9 + 7 + 5 + 3 + 1 = 64$, and $x \\geq 8$ is impossible ✓. HALVING $120$ FOR $60$ forgets that a tied triple is its own mirror image and so cannot be paired off; the eight ties push the $x \\leq y$ side above half ✗.',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 9$ with $x < y$? (The inequality is strict, so $x = y$ is not allowed; $z$ and $w$ are unrestricted and any variable may be $0$.)',
      answer: '$95$',
      solution:
        'Symmetry, with the ties removed. All quadruples summing to $9$ number $\\binom{12}{3} = 220$. The tied ones have $x = y$, so $2x + z + w = 9$ with $x = 0, 1, 2, 3, 4$, leaving $z + w = 9, 7, 5, 3, 1$ and therefore $10 + 8 + 6 + 4 + 2 = 30$ quadruples. The other $220 - 30 = 190$ pair off under the swap of $x$ and $y$, half with $x < y$: the answer is $\\frac{190}{2} = 95$ ✓. Second route, casework on $x$. Fix $x$; strictness means $y \\geq x + 1$, so write $y = x + 1 + y\'$ with $y\' \\geq 0$ and the equation becomes $y\' + z + w = 8 - 2x$, which has $\\binom{10-2x}{2}$ solutions. For $x = 0, 1, 2, 3, 4$ that is $\\binom{10}{2} + \\binom{8}{2} + \\binom{6}{2} + \\binom{4}{2} + \\binom{2}{2} = 45 + 28 + 15 + 6 + 1 = 95$, and $x \\geq 5$ would force $x + y \\geq 11$ ✓. ANSWERING $125$ counts $x \\leq y$ by adding the $30$ tied quadruples back in; the strict inequality excludes every one of them ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 13,
  worksheet,
}
