// Counting & Probability chapter 6 — variations for the CHALLENGE set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Chapter 6 is the mixed chapter: every item below welds two techniques
//    together (casework + a subset bijection, glue + complement, stars and
//    bars + a cap, inclusion-exclusion + a fixed seat, gaps + insertion), and
//    every stem settles its conventions out loud (people and books are all
//    different, "identical" is said when meant, round tables identify
//    rotations, digit strings have no leading zero unless called a code).
//  - Every keyed answer was worked twice along routes that share no steps,
//    and the two routes had to agree before the key was written: casework on
//    the last digit vs. a complement (slot 1); glue-and-subtract vs. counting
//    block positions or inserting letters into gaps (slot 2); choose-the-pair
//    vs. an anchored construction or a multiplicity-pattern count (slot 3);
//    subtract-the-overflow vs. straight casework (slot 4); a leading-digit
//    construction vs. counting strings and stripping the bad ones (slot 5);
//    a parity complement vs. inclusion-exclusion on the dimensions (slot 6);
//    splitting on one member vs. splitting on the other pair (slot 7);
//    inclusion-exclusion vs. building the row by insertion (slot 8); the
//    multiset bijection vs. splitting on a digit or a complement (slot 9);
//    the fixed-vertex split vs. a complement over sides (slot 10); full
//    inclusion-exclusion vs. a gap construction or seat casework (slot 11);
//    inclusion-exclusion vs. seating person by person (slot 12).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.

const challenge = [
  // slot 1 — strictly increasing digit strings are subsets in disguise, plus
  // a parity condition. Lane: five digits ending odd / subsets of {1..15}
  // with a pinned largest element / derived, odd FIRST digit.
  [
    {
      q: 'How many five-digit positive integers have digits that strictly increase from left to right and are odd?',
      choices: ['$126$', '$40$', '$86$', '$63$'],
      answer: 2,
      solution:
        'A strictly increasing five-digit number is a $5$-element subset of $\\{1, 2, \\ldots, 9\\}$ written in order: a $0$ would have to come first, and no digit repeats. The units digit is the largest, and the number is odd exactly when that largest digit is odd. Casework on it: largest $5$ gives $\\binom{4}{4} = 1$, largest $7$ gives $\\binom{6}{4} = 15$, largest $9$ gives $\\binom{8}{4} = 70$, and $1 + 15 + 70 = 86$ ✓. Check a second, independent way by complement. All strictly increasing five-digit numbers: $\\binom{9}{5} = 126$. The even ones end in $6$ or $8$: $\\binom{5}{4} + \\binom{7}{4} = 5 + 35 = 40$, so $126 - 40 = 86$ are odd ✓. (The choice $126$ is IGNORING THE ODD REQUIREMENT and counting every increasing number ✗; the choice $40$ is COUNTING THE EVEN NUMBERS, the complement of what was asked ✗; the choice $63$ is ASSUMING EXACTLY HALF of the $126$ are odd, but the largest digit is not odd half the time ✗.)',
    },
    {
      q: 'How many $3$-element subsets of $\\{1, 2, \\ldots, 15\\}$ have a largest element that is a multiple of $5$?',
      choices: ['$133$', '$91$', '$273$', '$455$'],
      answer: 0,
      solution:
        'Casework on the largest element. If it is $5$, the other two come from $\\{1, 2, 3, 4\\}$: $\\binom{4}{2} = 6$. If it is $10$: $\\binom{9}{2} = 36$. If it is $15$: $\\binom{14}{2} = 91$. Total $6 + 36 + 91 = 133$ ✓. Check a second, independent way with prefix counts: the subsets whose largest element is exactly $m$ are the subsets inside $\\{1, \\ldots, m\\}$ that are not inside $\\{1, \\ldots, m-1\\}$. That gives $\\binom{5}{3} - \\binom{4}{3} = 10 - 4 = 6$, then $\\binom{10}{3} - \\binom{9}{3} = 120 - 84 = 36$, then $\\binom{15}{3} - \\binom{14}{3} = 455 - 364 = 91$, and again $133$ ✓. (The choice $91$ is KEEPING ONLY THE LARGEST CASE, subsets topped by $15$ ✗; the choice $273$ is $3 \\cdot \\binom{14}{2}$, PICKING A MULTIPLE OF $5$ AND ANY TWO OTHERS, which lets a bigger number sit above it and counts some subsets twice ✗; the choice $455$ is IGNORING THE CONDITION entirely ✗.)',
    },
    {
      q: 'How many four-digit positive integers have digits that strictly increase from left to right and an odd first digit?',
      choices: ['$126$', '$46$', '$63$', '$80$'],
      answer: 3,
      solution:
        'A strictly increasing four-digit number is a $4$-element subset of $\\{1, \\ldots, 9\\}$ in order, and its first digit is the smallest. Casework on that smallest digit: $1$ leaves $\\binom{8}{3} = 56$, $3$ leaves $\\binom{6}{3} = 20$, $5$ leaves $\\binom{4}{3} = 4$, while $7$ and $9$ leave too few larger digits to finish. Total $56 + 20 + 4 = 80$ ✓. Check a second, independent way by complement: all increasing four-digit numbers, $\\binom{9}{4} = 126$; those with an even first digit start with $2$, $4$, or $6$ ($8$ leaves only one larger digit): $\\binom{7}{3} + \\binom{5}{3} + \\binom{3}{3} = 35 + 10 + 1 = 46$, and $126 - 46 = 80$ ✓. (The choice $126$ is IGNORING THE FIRST-DIGIT CONDITION ✗; the choice $46$ is COUNTING THE EVEN-LEADING NUMBERS, the complement ✗; the choice $63$ is ASSUMING HALF of the $126$ qualify ✗.)',
    },
  ],
  // slot 2 — multiset arrangements with one pair glued and another kept
  // apart. Lane: PEPPER / colored flags / derived, LETTER with OR.
  [
    {
      q: 'How many distinct arrangements of the letters of $PEPPER$ have the two $E$’s next to each other but the three $P$’s not all next to each other?',
      choices: ['$14$', '$20$', '$6$', '$120$'],
      answer: 0,
      solution:
        'Glue the $E$’s into one block. Arranging $P, P, P, R$ and the block gives $\\frac{5!}{3!} = 20$ arrangements with the $E$’s together; those with the $P$’s together as well are three blocks $EE$, $PPP$, $R$ in $3! = 6$ orders. Subtract: $20 - 6 = 14$ ✓. Check a second, independent way by placing the $EE$ block first: it can cover $5$ adjacent pairs of positions, and the other four positions hold $R$ and three $P$’s, so only $R$’s spot matters. With $EE$ at an end, $R$ must split the $P$’s and $2$ of its $4$ spots do; one step in, $3$ spots work; in the center, the $P$’s can never form a run, all $4$ work. Total $2 + 3 + 4 + 3 + 2 = 14$ ✓. (The choice $20$ is IGNORING THE RULE ABOUT THE $P$’s ✗; the choice $6$ is the COMPLEMENT, arrangements with both groups together ✗; the choice $120$ is TREATING THE THREE $P$’s AS DIFFERENT LETTERS, $5!$ with the block ✗.)',
    },
    {
      q: 'Four identical red flags, two identical blue flags, and two identical yellow flags are hung in a row of $8$ hooks, one flag per hook. How many arrangements have the two blue flags next to each other but the two yellow flags not next to each other?',
      choices: ['$105$', '$30$', '$75$', '$210$'],
      answer: 2,
      solution:
        'Glue the blues. Arranging $R, R, R, R, Y, Y$ and the $BB$ block gives $\\frac{7!}{4! \\, 2!} = 105$ rows with the blues together; gluing the yellows as well gives $\\frac{6!}{4!} = 30$. Subtract: $105 - 30 = 75$ ✓. Check a second, independent way with gaps: arrange the four reds and the $BB$ block, $\\frac{5!}{4!} = 5$ ways, which opens $6$ gaps (the ends count); drop the two identical yellows into two different gaps, $\\binom{6}{2} = 15$ ways, so no two yellows touch. Total $5 \\cdot 15 = 75$ ✓. (The choice $105$ is IGNORING THE YELLOW RULE ✗; the choice $30$ is the COMPLEMENT, both pairs together ✗; the choice $210$ is FORGETTING THE YELLOWS ARE IDENTICAL, $\\frac{7!}{4!}$ ✗.)',
    },
    {
      q: 'How many distinct arrangements of the letters of $LETTER$ have the two $E$’s next to each other or the two $T$’s next to each other, or both?',
      choices: ['$120$', '$96$', '$84$', '$60$'],
      answer: 1,
      solution:
        'Add the two glued counts and remove the overlap. $E$’s glued: $\\frac{5!}{2!} = 60$; $T$’s glued: $60$; both glued: $4! = 24$. Either-or: $60 + 60 - 24 = 96$ ✓. Check a second, independent way by counting the complement with insertions. Arrange $L, E, E, R$: $\\frac{4!}{2!} = 12$ words, $6$ with the $E$’s apart and $6$ with them together. Now insert the two $T$’s into two different gaps of the four-letter word ($5$ gaps). If the $E$’s are apart, any $\\binom{5}{2} = 10$ choices keep everything apart: $60$ words. If the $E$’s are together, one $T$ must land between them and the other picks one of the $4$ remaining gaps: $24$ words. So $84$ arrangements have neither pair together, and $\\frac{6!}{2! \\, 2!} - 84 = 180 - 84 = 96$ ✓. (The choice $120$ is ADDING $60 + 60$ WITHOUT REMOVING the $24$ counted twice ✗; the choice $84$ is the COMPLEMENT, neither pair together ✗; the choice $60$ is COUNTING ONLY THE $E$’s-together arrangements ✗.)',
    },
  ],
  // slot 3 — strings over a small alphabet using an exact number of letters:
  // choose-the-letters plus a surjection count. Lane: exactly two of five /
  // balls into boxes with exactly two used / derived, all four letters.
  [
    {
      q: 'A string of $5$ letters is formed using only the letters $A, B, C, D, E$, with repetition allowed. How many such strings use exactly two of the five letters?',
      choices: ['$320$', '$600$', '$30$', '$300$'],
      answer: 3,
      solution:
        'Choose which two letters appear, $\\binom{5}{2} = 10$ ways; strings over a given pair that use both letters number $2^5 - 2 = 30$, since only the two one-letter strings fail. Total $10 \\cdot 30 = 300$ ✓. Check a second, independent way by anchoring on the first position: its letter can be any of $5$; the other letter used is one of the remaining $4$; the last four positions each take one of the two letters, and the second letter must show up somewhere among them, $2^4 - 1 = 15$ ways. The pair (first letter, other letter) is determined by the string, so nothing is double-counted: $5 \\cdot 4 \\cdot 15 = 300$ ✓. (The choice $320$ is $10 \\cdot 2^5$, FORGETTING TO THROW OUT the two one-letter strings for each pair ✗; the choice $600$ is CHOOSING THE PAIR IN ORDER, counting every string twice ✗; the choice $30$ is FORGETTING TO CHOOSE which two letters appear ✗.)',
    },
    {
      q: 'Six different balls are placed into four labeled boxes, and a box may be left empty. In how many ways do exactly two of the four boxes end up with at least one ball?',
      choices: ['$384$', '$372$', '$62$', '$4096$'],
      answer: 1,
      solution:
        'Choose the two boxes that get balls, $\\binom{4}{2} = 6$ ways; then every ball picks one of those two boxes, with both boxes used: $2^6 - 2 = 62$. Total $6 \\cdot 62 = 372$ ✓. Check a second, independent way by correcting an overcount: summing $2^6 = 64$ over all $6$ pairs of boxes gives $384$ placements that fit inside some pair, but a placement using just one box lies inside $3$ different pairs and is counted $3$ times when it should be counted $0$ times. There are $4$ one-box placements, so subtract $3 \\cdot 4 = 12$: $384 - 12 = 372$ ✓. (The choice $384$ is KEEPING THE ONE-BOX PLACEMENTS in the count ✗; the choice $62$ is FORGETTING TO CHOOSE which two boxes ✗; the choice $4096$ is $4^6$, IGNORING THE CONDITION entirely ✗.)',
    },
    {
      q: 'A string of $6$ letters is formed using only the letters $A, B, C, D$, with repetition allowed. How many such strings use all four of the letters at least once?',
      choices: ['$1560$', '$1180$', '$1564$', '$4096$'],
      answer: 0,
      solution:
        'Inclusion-exclusion on the missing letters: all strings, $4^6 = 4096$; strings missing a given letter, $3^6 = 729$, for $4$ letters; strings missing two given letters, $2^6 = 64$, for $\\binom{4}{2} = 6$ pairs; strings missing three, $1$ each, for $4$ triples. Total $4096 - 4 \\cdot 729 + 6 \\cdot 64 - 4 = 1560$ ✓. Check a second, independent way by multiplicity patterns. Six letters covering four values split as $3{+}1{+}1{+}1$ or $2{+}2{+}1{+}1$. First pattern: choose the tripled letter, $4$ ways, and arrange, $\\frac{6!}{3!} = 120$: $480$ strings. Second: choose the two doubled letters, $\\binom{4}{2} = 6$, and arrange, $\\frac{6!}{2! \\, 2!} = 180$: $1080$ strings. Total $480 + 1080 = 1560$ ✓. (The choice $1180$ is STOPPING AFTER THE FIRST SUBTRACTION, $4096 - 2916$ ✗; the choice $1564$ is FORGETTING THE FINAL $-4$ for the one-letter strings ✗; the choice $4096$ is IGNORING THE CONDITION ✗.)',
    },
  ],
  // slot 4 — stars and bars with a floor and a cap: subtract the overflow.
  // Lane: pencils with one cap / coins with a floor of 2 and a shared cap /
  // derived, two capped boxes needing an add-back.
  [
    {
      q: 'Thirteen identical pencils are handed out to three students, Kai, Lin, and Mo, so that each student gets at least one pencil and Kai gets at most $4$. How many distributions are possible?',
      choices: ['$66$', '$28$', '$105$', '$38$'],
      answer: 3,
      solution:
        'Count everyone-gets-one distributions and subtract the overflow. With each of the three getting at least one: $\\binom{12}{2} = 66$. Kai getting at least $5$ (with Lin and Mo still at least $1$) leaves $13 - 5 - 1 - 1 = 6$ free pencils: $\\binom{8}{2} = 28$. Subtract: $66 - 28 = 38$ ✓. Check a second, independent way by casework on Kai’s count: if Kai takes $k$ pencils, Lin and Mo split $13 - k$ with each at least one, $12 - k$ ways. For $k = 1, 2, 3, 4$: $11 + 10 + 9 + 8 = 38$ ✓. (The choice $66$ is IGNORING KAI’S CAP ✗; the choice $28$ is the COMPLEMENT, distributions where Kai takes $5$ or more ✗; the choice $105$ is $\\binom{15}{2}$, DROPPING THE AT-LEAST-ONE RULE and letting students go without ✗.)',
    },
    {
      q: 'Twenty identical coins are divided among three children, Pia, Rey, and Sol, so that each child gets at least $2$ coins and no child gets more than $10$ coins. How many divisions are possible?',
      choices: ['$120$', '$57$', '$99$', '$66$'],
      answer: 1,
      solution:
        'Hand each child $2$ coins first, leaving $14$ free coins with each child allowed at most $8$ more: $\\binom{16}{2} = 120$ ways with no cap. A child who breaks the cap takes at least $9$ of the free coins, leaving $\\binom{7}{2} = 21$ ways, and two children cannot both do it since $9 + 9 > 14$. Subtract for each child: $120 - 3 \\cdot 21 = 57$ ✓. Check a second, independent way by casework on Pia’s total, $2$ through $10$: Rey’s share then runs over an interval, giving $3, 4, 5, 6, 7, 8, 9$ ways for Pia’s total $2$ through $8$, then $8$ and $7$ ways for totals $9$ and $10$ as the cap bites. Sum: $3+4+5+6+7+8+9+8+7 = 57$ ✓. (The choice $120$ is IGNORING THE CAP ✗; the choice $99$ is SUBTRACTING THE OVERFLOW FOR ONLY ONE CHILD ✗; the choice $66$ is DROPPING THE FLOOR, counting divisions where a child gets $0$ or $1$ coins ✗.)',
    },
    {
      q: 'Fifteen identical balls are placed into four boxes labeled $1$ through $4$. Every box must receive at least one ball, and box $1$ and box $2$ must each hold at most $3$ balls. How many distributions are possible?',
      choices: ['$90$', '$199$', '$34$', '$364$'],
      answer: 0,
      solution:
        'Inclusion-exclusion on the two capped boxes. All nonempty distributions: $\\binom{14}{3} = 364$. Box $1$ holding at least $4$: pay it four and the others one each, $\\binom{11}{3} = 165$; box $2$ likewise $165$. Both over: pay four twice and one twice, leaving $5$ free balls, $\\binom{8}{3} = 56$, subtracted twice, so add it back: $364 - 165 - 165 + 56 = 90$ ✓. Check a second, independent way by casework on boxes $1$ and $2$: each takes $1$, $2$, or $3$ balls, and boxes $3$ and $4$ split the remaining $15 - a - b$ with each at least one, $14 - a - b$ ways. Summing over the nine pairs $(a, b)$: $9 \\cdot 14 - 2(1 + 2 + 3) \\cdot 3 = 126 - 36 = 90$ ✓. (The choice $199$ is CAPPING ONLY BOX $1$ ✗; the choice $34$ is FORGETTING THE ADD-BACK of the doubly-subtracted $56$ ✗; the choice $364$ is IGNORING BOTH CAPS ✗.)',
    },
  ],
  // slot 5 — exact digit variety with a leading-digit rule. Lane: two digits
  // one of them 0 / a code with exactly three digits / derived, two digits
  // and odd.
  [
    {
      q: 'How many five-digit positive integers use exactly two different digits, one of which is $0$?',
      choices: ['$270$', '$144$', '$135$', '$1350$'],
      answer: 2,
      solution:
        'Call the nonzero digit $d$. The leading digit cannot be $0$, so it is $d$: $9$ choices. Each of the other four places holds $0$ or $d$, and at least one must be $0$ so that both digits appear: $2^4 - 1 = 15$ patterns. Total $9 \\cdot 15 = 135$ ✓. Check a second, independent way by counting strings and stripping the bad ones: for a given $d$, strings of length $5$ over $\\{0, d\\}$ using both digits number $2^5 - 2 = 30$; those starting with $0$ need a $d$ somewhere in the last four places, $2^4 - 1 = 15$, and they are exactly the strings that are not five-digit numbers. So $30 - 15 = 15$ per $d$, and $9 \\cdot 15 = 135$ ✓. (The choice $270$ is ALLOWING A LEADING ZERO, $9 \\cdot 30$ ✗; the choice $144$ is $9 \\cdot 2^4$, COUNTING THE ALL-$d$ NUMBER TOO, which uses only one digit ✗; the choice $1350$ is CHOOSING ANY PAIR OF DIGITS, $45 \\cdot 30$, ignoring that $0$ must be one of them and may not lead ✗.)',
    },
    {
      q: 'A $4$-digit code is a string of four digits, and it may begin with $0$. How many codes use exactly three different digits?',
      choices: ['$4320$', '$9720$', '$3960$', '$36$'],
      answer: 0,
      solution:
        'Choose the set of three digits, $\\binom{10}{3} = 120$ ways, then count codes over a given set that use all three: $3^4 - 3 \\cdot 2^4 + 3 = 81 - 48 + 3 = 36$ by inclusion-exclusion on the missing digit. Total $120 \\cdot 36 = 4320$ ✓. Check a second, independent way by the multiplicity pattern: four places covering three digits means one digit appears twice and the others once. Choose the doubled digit, $10$ ways; choose the two single digits, $\\binom{9}{2} = 36$; arrange, $\\frac{4!}{2!} = 12$. Total $10 \\cdot 36 \\cdot 12 = 4320$ ✓. (The choice $9720$ is $120 \\cdot 81$, COUNTING CODES THAT SKIP one or two of the chosen digits ✗; the choice $3960$ is FORGETTING THE ADD-BACK, using $81 - 48 = 33$ per set ✗; the choice $36$ is FORGETTING TO CHOOSE which three digits ✗.)',
    },
    {
      q: 'How many four-digit positive integers use exactly two different digits and are odd?',
      choices: ['$315$', '$280$', '$567$', '$295$'],
      answer: 3,
      solution:
        'Casework on the pair of digits. Both odd: $\\binom{5}{2} = 10$ pairs, and every pattern using both digits works since the units digit is odd either way and nothing is $0$: $2^4 - 2 = 14$ each, so $140$. One odd, one even and nonzero: $5 \\cdot 4 = 20$ pairs; the units place must hold the odd digit, and the even digit must appear among the other three places: $2^3 - 1 = 7$ each, so $140$. An odd digit paired with $0$: $5$ pairs; the units and thousands places must hold the odd digit, and at least one middle place is $0$: $2^2 - 1 = 3$ each, so $15$. Total $140 + 140 + 15 = 295$ ✓. Check a second, independent way from the units place: choose the odd units digit $u$, $5$ ways, and the other digit $d$, $9$ ways; the first three places use $u$ and $d$ with $d$ appearing, $2^3 - 1 = 7$: $315$ strings. Strings with a leading $0$ have $d = 0$ in front, and the two middle places free over $\\{0, u\\}$: $5 \\cdot 4 = 20$. Subtract: $315 - 20 = 295$ ✓. (The choice $315$ is ALLOWING A LEADING ZERO ✗; the choice $280$ is FORGETTING THE PAIRS THAT CONTAIN $0$ ✗; the choice $567$ is IGNORING THE ODD REQUIREMENT ✗.)',
    },
  ],
  // slot 6 — counting rectangles by choosing grid lines, filtered by a
  // divisibility condition on the dimensions. Lane: area a multiple of 3 /
  // perimeter a multiple of 4 / derived, even area but not a square.
  [
    {
      q: 'A $6 \\times 6$ grid is made of $36$ unit squares. How many rectangles with sides along the grid lines have an area that is a multiple of $3$?',
      choices: ['$185$', '$256$', '$441$', '$210$'],
      answer: 0,
      solution:
        'A rectangle is a choice of $2$ of the $7$ vertical lines and $2$ of the $7$ horizontal lines, $\\binom{7}{2}^2 = 441$ in all, and its area misses being a multiple of $3$ exactly when neither its width nor its height is a multiple of $3$. Widths $1, 2, 4, 5$ can be placed in $6 + 5 + 3 + 2 = 16$ ways among the $21$ vertical choices, and likewise $16$ of $21$ for heights, so $16^2 = 256$ rectangles have area not divisible by $3$, leaving $441 - 256 = 185$ ✓. Check a second, independent way by inclusion-exclusion on the dimensions: width a multiple of $3$ means width $3$ or $6$, placeable in $4 + 1 = 5$ ways, giving $5 \\cdot 21 = 105$ rectangles; height likewise $105$; both, $5 \\cdot 5 = 25$. Total $105 + 105 - 25 = 185$ ✓. (The choice $256$ is the COMPLEMENT, areas not divisible by $3$ ✗; the choice $441$ is IGNORING THE CONDITION ✗; the choice $210$ is ADDING $105 + 105$ WITHOUT REMOVING the $25$ counted twice ✗.)',
    },
    {
      q: 'A grid of unit squares is $6$ squares wide and $5$ squares tall. How many rectangles with sides along the grid lines have a perimeter that is a multiple of $4$?',
      choices: ['$108$', '$153$', '$162$', '$315$'],
      answer: 2,
      solution:
        'A $w \\times h$ rectangle has perimeter $2(w + h)$, a multiple of $4$ exactly when $w + h$ is even, that is, when $w$ and $h$ have the same parity. Odd widths $1, 3, 5$ place in $6 + 4 + 2 = 12$ ways; even widths $2, 4, 6$ in $5 + 3 + 1 = 9$. Odd heights $1, 3, 5$ place in $5 + 3 + 1 = 9$ ways; even heights $2, 4$ in $4 + 2 = 6$. Same parity: $12 \\cdot 9 + 9 \\cdot 6 = 108 + 54 = 162$ ✓. Check a second, independent way by complement: all rectangles, $\\binom{7}{2}\\binom{6}{2} = 21 \\cdot 15 = 315$; opposite parity, $12 \\cdot 6 + 9 \\cdot 9 = 72 + 81 = 153$; and $315 - 153 = 162$ ✓. (The choice $108$ is KEEPING ONLY THE ODD-BY-ODD rectangles ✗; the choice $153$ is the COMPLEMENT, perimeters not divisible by $4$ ✗; the choice $315$ is IGNORING THE CONDITION ✗.)',
    },
    {
      q: 'A $6 \\times 6$ grid is made of $36$ unit squares. How many non-square rectangles with sides along the grid lines have an even area?',
      choices: ['$297$', '$262$', '$350$', '$206$'],
      answer: 1,
      solution:
        'Count the even areas, then remove the square ones. Of the $\\binom{7}{2}^2 = 441$ rectangles, the odd areas are the odd-by-odd ones: widths $1, 3, 5$ place in $6 + 4 + 2 = 12$ ways, likewise heights, so $144$, leaving $441 - 144 = 297$ even areas. An even-area square has even side: $2 \\times 2$, $4 \\times 4$, $6 \\times 6$ place in $25 + 9 + 1 = 35$ ways. Subtract: $297 - 35 = 262$ ✓. Check a second, independent way by starting from the non-squares: squares of side $k$ number $(7-k)^2$, so $36 + 25 + 16 + 9 + 4 + 1 = 91$ squares and $441 - 91 = 350$ non-squares. The odd-area non-squares are the $144$ odd-by-odd rectangles minus the odd squares $36 + 16 + 4 = 56$, so $88$; and $350 - 88 = 262$ ✓. (The choice $297$ is FORGETTING TO REMOVE THE SQUARES ✗; the choice $350$ is DROPPING THE AREA CONDITION and counting every non-square ✗; the choice $206$ is SUBTRACTING ALL $91$ SQUARES, including the odd-area ones that were already gone ✗.)',
    },
  ],
  // slot 7 — committees with a one-way "only if" rule plus a feuding pair:
  // split on the right person. Lane: club of 10 / pizza toppings / derived,
  // both-or-neither pair.
  [
    {
      q: 'A club has $10$ members, including Ana, Ben, Cal, and Dee. A committee of $4$ is chosen. Ana will serve only if Ben also serves, and Cal and Dee refuse to serve together. How many committees are possible?',
      choices: ['$210$', '$182$', '$154$', '$132$'],
      answer: 3,
      solution:
        'Split on Ben. If Ben serves, choose $3$ more from the other $9$ with Cal and Dee not both chosen: $\\binom{9}{3} - 7 = 84 - 7 = 77$, since committees with both Cal and Dee take $1$ more from the remaining $7$. If Ben does not serve, Ana cannot either: choose $4$ from the remaining $8$ with Cal and Dee not both in, $\\binom{8}{4} - \\binom{6}{2} = 70 - 15 = 55$. Total $77 + 55 = 132$ ✓. Check a second, independent way by splitting on Cal and Dee. Neither serves: choose $4$ from the other $8$, minus the choices with Ana but not Ben, $\\binom{8}{4} - \\binom{6}{3} = 70 - 20 = 50$. Cal without Dee: $\\binom{8}{3} - \\binom{6}{2} = 56 - 15 = 41$; Dee without Cal, likewise $41$. Total $50 + 41 + 41 = 132$ ✓. (The choice $210$ is $\\binom{10}{4}$, IGNORING BOTH RULES ✗; the choice $182$ is ENFORCING ONLY THE CAL-DEE RULE ✗; the choice $154$ is ENFORCING ONLY THE ANA-BEN RULE ✗.)',
    },
    {
      q: 'A pizza is topped with exactly $3$ of $8$ available toppings, which include mushrooms, olives, pepperoni, and sausage. Olives are used only if mushrooms are also used, and pepperoni and sausage are never used together. How many sets of toppings are possible?',
      choices: ['$56$', '$36$', '$50$', '$35$'],
      answer: 1,
      solution:
        'Split on mushrooms. With mushrooms on, choose $2$ more from the other $7$ with pepperoni and sausage not both chosen: $\\binom{7}{2} - 1 = 20$. Without mushrooms, olives are out too: choose $3$ from the remaining $6$ with pepperoni and sausage not both on, $\\binom{6}{3} - \\binom{4}{1} = 20 - 4 = 16$. Total $20 + 16 = 36$ ✓. Check a second, independent way by inclusion-exclusion on the bad sets: all $\\binom{8}{3} = 56$; olives without mushrooms, $\\binom{6}{2} = 15$; pepperoni with sausage, $\\binom{6}{1} = 6$; both bad at once is exactly $\\{$olives, pepperoni, sausage$\\}$, $1$ set. Total $56 - 15 - 6 + 1 = 36$ ✓. (The choice $56$ is IGNORING BOTH RULES ✗; the choice $50$ is ENFORCING ONLY THE PEPPERONI-SAUSAGE RULE ✗; the choice $35$ is FORGETTING THE ADD-BACK of the one set that breaks both rules ✗.)',
    },
    {
      q: 'A club has $9$ members, including Ana, Ben, Cal, and Dee. A committee of $5$ is chosen. Ana and Ben refuse to serve together, and Cal and Dee will serve together or not at all. How many committees are possible?',
      choices: ['$41$', '$91$', '$56$', '$30$'],
      answer: 0,
      solution:
        'Split on the Cal-Dee pair. Both serve: choose $3$ more from the other $7$ with Ana and Ben not both chosen, $\\binom{7}{3} - \\binom{5}{1} = 35 - 5 = 30$. Neither serves: choose $5$ from the other $7$, minus both-Ana-and-Ben, $\\binom{7}{5} - \\binom{5}{3} = 21 - 10 = 11$. Total $30 + 11 = 41$ ✓. Check a second, independent way by enforcing the pair rule first and subtracting: committees honoring only the Cal-Dee rule number $\\binom{7}{3} + \\binom{7}{5} = 35 + 21 = 56$; among them, those with both Ana and Ben take either Cal and Dee plus one from the last $5$, $5$ ways, or neither plus $3$ from the last $5$, $\\binom{5}{3} = 10$. Subtract: $56 - 15 = 41$ ✓. (The choice $91$ is ENFORCING ONLY THE ANA-BEN RULE, $\\binom{9}{5} - \\binom{7}{3}$ ✗; the choice $56$ is ENFORCING ONLY THE CAL-DEE RULE ✗; the choice $30$ is DROPPING THE CASE where Cal and Dee both stay home ✗.)',
    },
  ],
  // slot 8 — multiset rows with ends pinned or repeats separated: glue,
  // gaps, and insertion. Lane: tiles with gray ends / SUCCESS / derived,
  // marbles with every color separated.
  [
    {
      q: 'Two identical white tiles, two identical black tiles, and three identical gray tiles are laid in a row of seven. A gray tile must sit at each end, and no two white tiles may be next to each other. How many arrangements are possible?',
      choices: ['$30$', '$18$', '$12$', '$210$'],
      answer: 1,
      solution:
        'The ends take two grays, so the middle five positions hold $G, W, W, B, B$: $\\frac{5!}{2! \\, 2!} = 30$ arrangements. Those with the whites together glue $WW$ into one unit among $G, B, B$: $\\frac{4!}{2!} = 12$. Subtract: $30 - 12 = 18$ ✓. Check a second, independent way with gaps: arrange $G, B, B$ in the middle, $\\frac{3!}{2!} = 3$ ways, opening $4$ gaps (the gaps at the ends of the middle block sit next to gray end tiles, which is allowed); place the two identical whites in different gaps, $\\binom{4}{2} = 6$. Total $3 \\cdot 6 = 18$ ✓. (The choice $30$ is IGNORING THE WHITE RULE ✗; the choice $12$ is the COMPLEMENT, whites together ✗; the choice $210$ is IGNORING BOTH CONDITIONS, $\\frac{7!}{2! \\, 2! \\, 3!}$ ✗.)',
    },
    {
      q: 'How many distinct arrangements of the letters of $SUCCESS$ have no two $C$’s next to each other and the three $S$’s not all next to each other?',
      choices: ['$300$', '$360$', '$240$', '$264$'],
      answer: 3,
      solution:
        'Inclusion-exclusion. All arrangements: $\\frac{7!}{3! \\, 2!} = 420$. $C$’s glued: $\\frac{6!}{3!} = 120$; $S$’s glued: $\\frac{5!}{2!} = 60$; both glued: $4! = 24$. Bad arrangements have the $C$’s together or the $S$’s together: $120 + 60 - 24 = 156$, leaving $420 - 156 = 264$ ✓. Check a second, independent way by insertion: arrange $S, S, S, U, E$, $\\frac{5!}{3!} = 20$ words, then place the two $C$’s in different gaps of the $6$ available: $\\binom{6}{2} = 15$, giving $300$ arrangements with the $C$’s apart. Among them the $S$’s form a run only when the base word had $SSS$ consecutive ($3! = 6$ words, treating the run as a block with $U$ and $E$) and neither $C$ landed inside the run, $\\binom{4}{2} = 6$ gap choices: $36$ arrangements. Subtract: $300 - 36 = 264$ ✓. (The choice $300$ is IGNORING THE RULE ABOUT THE $S$’s ✗; the choice $360$ is IGNORING THE RULE ABOUT THE $C$’s, $420 - 60$ ✗; the choice $240$ is FORGETTING THE ADD-BACK of the $24$ doubly-glued arrangements ✗.)',
    },
    {
      q: 'Three identical red marbles, two identical blue marbles, two identical green marbles, and one yellow marble are placed in a row. A red marble must sit first, and no two marbles of the same color may be next to each other, the reds included. How many arrangements are possible?',
      choices: ['$630$', '$120$', '$174$', '$270$'],
      answer: 2,
      solution:
        'Build the row by inserting the reds. Order the five non-red marbles $B, B, G, G, Y$: $\\frac{5!}{2! \\, 2!} = 30$ words, of which $12$ have neither same-color pair adjacent, $12$ have exactly one adjacent pair, and $6$ have both (gluing gives $12$ words with the blues together, $12$ with the greens, $6$ with both, and $30 - 12 - 12 + 6 = 12$ with neither). The three reds must be pairwise separated with one at the very front, so one red takes the front gap and the other two take two different gaps among the remaining $5$ — and any adjacent same-color pair must receive a red in its gap. Neither pair adjacent: $\\binom{5}{2} = 10$ choices, $120$ rows; exactly one: that gap is forced and the other red picks from $4$, $48$ rows; both: forced, $6$ rows. Total $120 + 48 + 6 = 174$ ✓. Check a second, independent way by inclusion-exclusion over the three colors, among the $\\frac{7!}{2! \\, 2! \\, 2!} = 630$ rows that start with a red. Reds touching: $630$ minus the separated-reds rows, $30 \\cdot 10 = 300$, so $330$. Blues touching: glue, $\\frac{6!}{2! \\, 2!} = 180$; greens: $180$. Reds and blues: $180 - 12 \\cdot 6 = 108$ (of the glued-blue rows, $12$ orders of $BB, G, G, Y$ times $6$ separated placements of the reds among $7$ units); reds and greens: $108$; blues and greens: $\\frac{5!}{2!} = 60$; all three: $60 - 6 \\cdot 3 = 42$. Union: $330 + 180 + 180 - 108 - 108 - 60 + 42 = 456$, and $630 - 456 = 174$ ✓. (The choice $630$ is IGNORING ALL THE ADJACENCY RULES ✗; the choice $120$ is DEMANDING THE OTHER FIVE MARBLES BE SEPARATED BEFORE THE REDS ARRIVE, losing every row where a red repairs a pair ✗; the choice $270$ is SUBTRACTING ONLY THE BLUE AND GREEN GLUINGS, $630 - 180 - 180$, ignoring the reds and the add-backs ✗.)',
    },
  ],
  // slot 9 — monotone digit strings and scoop counts are multisets: the
  // stars-and-bars bijection plus one repair. Lane: never-increasing digits /
  // ice-cream scoops with two required flavors / derived, never-decreasing
  // and even.
  [
    {
      q: 'How many four-digit positive integers have digits that never increase from left to right, such as $8831$ or $7440$?',
      choices: ['$715$', '$714$', '$495$', '$1001$'],
      answer: 1,
      solution:
        'A never-increasing number is determined by which digits it uses and how often: write the multiset largest-first. Multisets of $4$ digits from $0$–$9$ number $\\binom{13}{4} = 715$ by stars and bars, and every one of them gives a valid number except $\\{0, 0, 0, 0\\}$, whose leading digit would be $0$ — any other multiset leads with its largest digit, which is nonzero. Total $715 - 1 = 714$ ✓. Check a second, independent way by splitting on the zeros: numbers with no $0$ are multisets of $4$ from $1$–$9$, $\\binom{12}{4} = 495$; numbers with at least one $0$ put all their zeros at the tail, and the nonzero head is a multiset of size $1$, $2$, or $3$ from $1$–$9$: $9 + \\binom{10}{2} + \\binom{11}{3} = 9 + 45 + 165 = 219$. Total $495 + 219 = 714$ ✓. (The choice $715$ is KEEPING $0000$, which is not a four-digit number ✗; the choice $495$ is BANNING THE DIGIT $0$ ENTIRELY instead of only in front ✗; the choice $1001$ is $\\binom{14}{4}$, MISCOUNTING THE STARS AND BARS ✗.)',
    },
    {
      q: 'An ice-cream shop offers $4$ flavors, two of which are vanilla and chocolate. In how many ways can $6$ scoops be chosen, if repeated flavors are allowed, the order of the scoops does not matter, and the choice must include at least one scoop of vanilla and at least one scoop of chocolate?',
      choices: ['$84$', '$28$', '$56$', '$35$'],
      answer: 3,
      solution:
        'Set aside one scoop of vanilla and one of chocolate; the remaining $4$ scoops range freely over the $4$ flavors, a multiset counted by stars and bars: $\\binom{7}{3} = 35$ ✓. Check a second, independent way by inclusion-exclusion: all choices of $6$ scoops, $\\binom{9}{3} = 84$; choices with no vanilla use $3$ flavors, $\\binom{8}{2} = 28$, likewise no chocolate, $28$; choices missing both use $2$ flavors, $\\binom{7}{1} = 7$. Total $84 - 28 - 28 + 7 = 35$ ✓. (The choice $84$ is IGNORING BOTH REQUIREMENTS ✗; the choice $28$ is COUNTING THE NO-VANILLA CHOICES, a piece of the complement ✗; the choice $56$ is SUBTRACTING ONLY ONE of the two bad kinds, $84 - 28$ ✗.)',
    },
    {
      q: 'How many five-digit positive integers have digits that never decrease from left to right and are even?',
      choices: ['$1287$', '$791$', '$496$', '$643$'],
      answer: 2,
      solution:
        'A never-decreasing number uses no $0$ (a $0$ would have to come first), and its last digit is its largest, so an even number ends in $2$, $4$, $6$, or $8$. With last digit $u$, the first four digits are a never-decreasing string from $\\{1, \\ldots, u\\}$, a multiset of size $4$: $\\binom{u + 3}{4}$. Casework: $\\binom{5}{4} + \\binom{7}{4} + \\binom{9}{4} + \\binom{11}{4} = 5 + 35 + 126 + 330 = 496$ ✓. Check a second, independent way by complement: all never-decreasing five-digit numbers are multisets of $5$ from $1$–$9$, $\\binom{13}{5} = 1287$; the odd ones end in $1, 3, 5, 7, 9$: $\\binom{4}{4} + \\binom{6}{4} + \\binom{8}{4} + \\binom{10}{4} + \\binom{12}{4} = 1 + 15 + 70 + 210 + 495 = 791$; and $1287 - 791 = 496$ ✓. (The choice $1287$ is IGNORING THE EVEN REQUIREMENT ✗; the choice $791$ is COUNTING THE ODD NUMBERS, the complement ✗; the choice $643$ is ASSUMING ABOUT HALF ARE EVEN, but the largest digit is odd far more often ✗.)',
    },
  ],
  // slot 10 — polygon vertices around a circle with no two chosen adjacent:
  // the path shift bijection meets circular casework. Lane: triangles
  // through a fixed vertex / three of nine at a round table / derived,
  // quadrilaterals in a decagon.
  [
    {
      q: 'A regular $12$-gon has vertices $V_1, V_2, \\ldots, V_{12}$. How many triangles have $V_1$ and two other vertices of the $12$-gon as their corners and share no side with the $12$-gon?',
      choices: ['$36$', '$28$', '$45$', '$55$'],
      answer: 1,
      solution:
        'The triangle may not use a side at $V_1$, so $V_2$ and $V_{12}$ are out: the other two corners come from the $9$ vertices $V_3, \\ldots, V_{11}$, which sit in a row along the polygon. They must also not be next to each other, or the triangle would use that side. Rows of $9$ have $8$ adjacent pairs, so $\\binom{9}{2} - 8 = 36 - 8 = 28$ ✓. Check a second, independent way with the shift bijection: picking $2$ of $9$ in a row with no two adjacent is the same as picking $2$ of $8$ freely — shrink the gap after the first chosen vertex by one — so $\\binom{8}{2} = 28$ ✓. (The choice $36$ is FORGETTING TO KEEP THE TWO CHOSEN VERTICES APART ✗; the choice $45$ is $\\binom{10}{2}$, EXCLUDING ONLY ONE of $V_1$’s neighbors ✗; the choice $55$ is $\\binom{11}{2}$, PICKING ANY TWO OTHER VERTICES with no rule at all ✗.)',
    },
    {
      q: 'Nine people sit around a round table. In how many ways can $3$ of them be chosen so that no two of the chosen people are sitting next to each other?',
      choices: ['$84$', '$75$', '$35$', '$30$'],
      answer: 3,
      solution:
        'Complement. All choices: $\\binom{9}{3} = 84$. Choices with all three in consecutive seats: $9$, one per starting seat. Choices with exactly one adjacent pair: $9$ pairs of neighbors, and the third person avoids the pair and its two outer neighbors, $5$ ways, so $45$. Total $84 - 9 - 45 = 30$ ✓. Check a second, independent way by splitting on one fixed person, Pat: if Pat is chosen, both neighbors are out and the other two come from the remaining arc of $6$ with no two adjacent, $\\binom{5}{2} = 10$ by the shift bijection; if Pat is not chosen, choose $3$ from the arc of $8$ others with no two adjacent, $\\binom{6}{3} = 20$. Total $10 + 20 = 30$ ✓. (The choice $84$ is IGNORING THE CONDITION ✗; the choice $75$ is REMOVING ONLY THE ALL-THREE-TOGETHER choices ✗; the choice $35$ is $\\binom{7}{3}$, USING THE STRAIGHT-ROW FORMULA and forgetting the table wraps around ✗.)',
    },
    {
      q: 'How many quadrilaterals have all four corners among the vertices of a regular decagon and share no side with the decagon?',
      choices: ['$210$', '$15$', '$25$', '$35$'],
      answer: 2,
      solution:
        'Sharing no side means no two chosen vertices are adjacent on the decagon. Split on one fixed vertex $V$: if $V$ is chosen, its two neighbors are out, and the other three corners come from the remaining arc of $7$ with no two adjacent, $\\binom{5}{3} = 10$ by the shift bijection; if $V$ is not chosen, all four come from the arc of $9$ others with no two adjacent, $\\binom{6}{4} = 15$. Total $10 + 15 = 25$ ✓. Check a second, independent way by complement over sides: all $\\binom{10}{4} = 210$ quadrilaterals; using a given side, $\\binom{8}{2} = 28$ each for $10$ sides, $280$; using two given sides, either sharing a vertex ($10$ such pairs, three corners set, $7$ choices left: $70$) or disjoint ($35$ pairs, all four corners set: $35$); using three sides means four consecutive vertices, $10$ ways, and four sides is impossible. Inclusion-exclusion: $280 - 105 + 10 = 185$ quadrilaterals use a side, and $210 - 185 = 25$ ✓. (The choice $210$ is IGNORING THE CONDITION ✗; the choice $15$ is DROPPING THE CASE where the fixed vertex is chosen ✗; the choice $35$ is $\\binom{7}{4}$, USING THE ROW FORMULA and forgetting the wrap ✗.)',
    },
  ],
  // slot 11 — couples kept apart or counted exactly: inclusion-exclusion
  // with every term earning its sign. Lane: two couples and three singles /
  // three couples at a round table / derived, exactly one couple together.
  [
    {
      q: 'Two married couples and three single people, seven people in all, sit in a row of $7$ chairs. In how many arrangements does neither couple sit together?',
      choices: ['$5040$', '$2160$', '$3600$', '$2640$'],
      answer: 3,
      solution:
        'Inclusion-exclusion. All rows: $7! = 5040$. Rows with a given couple together: glue them, $6! \\cdot 2 = 1440$, for each of the two couples. Rows with both couples together: $5! \\cdot 2 \\cdot 2 = 480$, subtracted twice, so add it back: $5040 - 2880 + 480 = 2640$ ✓. Check a second, independent way with gaps: keep the first couple apart by arranging the other five people, $5! = 120$, and dropping the two spouses into different gaps of the $6$, $6 \\cdot 5 = 30$, for $3600$ rows. Among these, the second couple sits together in: glue that couple and arrange the four non-first-couple units, $4! \\cdot 2 = 48$, then insert the first couple’s two members into different gaps of the $5$, $5 \\cdot 4 = 20$, for $960$ rows. Subtract: $3600 - 960 = 2640$ ✓. (The choice $5040$ is IGNORING BOTH COUPLES ✗; the choice $2160$ is FORGETTING THE ADD-BACK of the $480$ ✗; the choice $3600$ is SEPARATING ONLY ONE COUPLE ✗.)',
    },
    {
      q: 'Three married couples sit around a round table with $6$ seats; seatings that differ by a rotation are the same. In how many seatings does no person sit next to their own spouse?',
      choices: ['$120$', '$32$', '$48$', '$240$'],
      answer: 1,
      solution:
        'Inclusion-exclusion. All seatings: $5! = 120$. A given couple together: glue, $5$ units around a table, $4! \\cdot 2 = 48$, times $3$ couples. Two couples: $3! \\cdot 4 = 24$, times $3$ pairs. All three: $2! \\cdot 8 = 16$. Total $120 - 144 + 72 - 16 = 32$ ✓. Check a second, independent way by seating one person, Ana, and splitting on her spouse’s seat. Opposite Ana: the other four fill two pairs of adjacent seats flanking the table; of their $4! = 24$ orders, subtract a couple in the left pair ($8$) and in the right pair ($8$), add back both ($8$): $16$. In one of the two seats neither next to nor opposite Ana: the two adjacent seat pairs left over share a seat, so no order can break the rule twice, $24 - 8 - 8 = 8$ each. Total $16 + 8 + 8 = 32$ ✓. (The choice $120$ is IGNORING THE SPOUSES ✗; the choice $48$ is STOPPING THE ALTERNATION EARLY, $120 - 144 + 72$ ✗; the choice $240$ is TREATING THE TABLE AS A ROW of six chairs ✗.)',
    },
    {
      q: 'Three married couples sit in a row of $6$ chairs. In how many arrangements does exactly one of the three couples sit together?',
      choices: ['$288$', '$720$', '$240$', '$96$'],
      answer: 0,
      solution:
        'The exactly-one count: rows with a given couple together number $5! \\cdot 2 = 240$; with two given couples, $4! \\cdot 4 = 96$; with all three, $3! \\cdot 8 = 48$. Summing $3 \\cdot 240$ counts each two-couple row twice and each three-couple row three times, so subtract every pair term twice and restore the triple three times: $720 - 2 \\cdot 3 \\cdot 96 + 3 \\cdot 48 = 720 - 576 + 144 = 288$ ✓. Check a second, independent way by building the row: choose the together couple, $3$ ways, and glue it. Arrange the other four people, $4! = 24$ orders — $8$ with neither remaining couple adjacent, $8$ with exactly one, $8$ with both. With neither, the block drops into any of the $5$ gaps: $40$; with exactly one, the block must be wedged into that couple’s gap: $8$; with both, one block cannot split two pairs: $0$. That is $48$ placements, times $2$ for the block’s inner order: $96$ per couple, and $3 \\cdot 96 = 288$ ✓. (The choice $720$ is $3 \\cdot 240$, COUNTING ROWS WHERE A SECOND COUPLE ALSO SITS TOGETHER, some of them repeatedly ✗; the choice $240$ is THE NO-COUPLE-TOGETHER COUNT, a different question ✗; the choice $96$ is FORGETTING TO MULTIPLY by the $3$ choices of couple ✗.)',
    },
  ],
  // slot 12 — round tables with several people kept away from each other:
  // fix a seat, then inclusion-exclusion or a direct fill. Lane: two people
  // kept off Ana’s sides / adjacency plus an opposite ban / derived, three
  // separated pairs.
  [
    {
      q: 'Eight people, including Ana, Ben, and Cal, sit around a round table with $8$ seats; seatings that differ by a rotation are the same. In how many seatings is Ben not next to Ana and Cal also not next to Ana?',
      choices: ['$2160$', '$5040$', '$2400$', '$3600$'],
      answer: 2,
      solution:
        'Fix Ana’s seat to kill the rotations. Her two neighbors must come from the five people other than Ben and Cal: $5 \\cdot 4 = 20$ ordered choices, and the remaining five people fill the last five seats in $5! = 120$ ways: $20 \\cdot 120 = 2400$ ✓. Check a second, independent way by inclusion-exclusion: all seatings, $7! = 5040$; Ben beside Ana, $2 \\cdot 6! = 1440$, and likewise Cal, $1440$; both beside her means one on each side, $2 \\cdot 5! = 240$. Total $5040 - 1440 - 1440 + 240 = 2400$ ✓. (The choice $2160$ is FORGETTING THE ADD-BACK of the $240$ ✗; the choice $5040$ is IGNORING BOTH RULES ✗; the choice $3600$ is KEEPING ONLY BEN AWAY and letting Cal sit anywhere ✗.)',
    },
    {
      q: 'Eight people, including Ana, Ben, Cal, and Dee, sit around a round table with $8$ seats; seatings that differ by a rotation are the same. In how many seatings is Ana not next to Ben, and Cal not directly opposite Dee?',
      choices: ['$3072$', '$2880$', '$3600$', '$4320$'],
      answer: 0,
      solution:
        'Fix Ana; there are $7! = 5040$ seatings. Ben beside Ana: $2 \\cdot 6! = 1440$. Cal opposite Dee: with Ana seated, three opposite seat-pairs avoid her, so $3 \\cdot 2 \\cdot 5! = 720$. Both at once: Ben takes a side of Ana, $2$ ways; two opposite pairs remain free of Ana and Ben, $2 \\cdot 2$ ways for Cal and Dee; the rest fill in $4! = 24$ ways: $192$. Inclusion-exclusion: $5040 - 1440 - 720 + 192 = 3072$ ✓. Check a second, independent way by placing Ben first: he picks one of the $5$ seats not beside Ana. If Ben sits opposite Ana, all three remaining opposite pairs are intact, and of the $6 \\cdot 5 = 30$ ordered seat choices for Cal and Dee, $6$ are opposite: $24$ good, then $4! = 24$ for the rest, $576$. From any of the other $4$ seats Ben breaks one pair, leaving $30 - 4 = 26$ good choices: $26 \\cdot 24 = 624$ each. Total $576 + 4 \\cdot 624 = 3072$ ✓. (The choice $2880$ is FORGETTING THE ADD-BACK of the $192$ ✗; the choice $3600$ is ENFORCING ONLY THE ANA-BEN RULE ✗; the choice $4320$ is ENFORCING ONLY THE OPPOSITE RULE ✗.)',
    },
    {
      q: 'Eight people — Ana, Ben, Cal, Dee, Eli, Fay, and two others — sit around a round table with $8$ seats; seatings that differ by a rotation are the same. Ana is not next to Ben, Cal is not next to Dee, and Eli is not next to Fay. How many seatings are possible?',
      choices: ['$720$', '$2160$', '$3216$', '$1968$'],
      answer: 3,
      solution:
        'Inclusion-exclusion over the three pairs. All seatings: $7! = 5040$. One given pair together: glue, $6! \\cdot 2 = 1440$, times $3$. Two given pairs: $5! \\cdot 4 = 480$, times $3$. All three: $4! \\cdot 8 = 192$. Total $5040 - 4320 + 1440 - 192 = 1968$ ✓. Check a second, independent way by fixing Ana and splitting on Ben’s seat, which by reflection has three cases. Ben two seats away: the six free seats keep $4$ adjacent seat-pairs, three of whose disjoint pairings exist; of the $6! = 720$ ways to fill them, Cal-Dee on an adjacent pair costs $4 \\cdot 2 \\cdot 4! = 192$, Eli-Fay the same, and both at once restores $3 \\cdot 2 \\cdot 4 \\cdot 2 = 48$: $384$, for Ben’s $2$ such seats. Ben three seats away, or opposite: again $4$ free adjacent pairs but now $4$ disjoint pairings, restoring $64$: $720 - 384 + 64 = 400$, for the remaining $3$ seats. Total $2 \\cdot 384 + 3 \\cdot 400 = 1968$ ✓. (The choice $720$ is STOPPING AFTER SUBTRACTING the three gluings ✗; the choice $2160$ is DROPPING THE FINAL TRIPLE-OVERLAP term ✗; the choice $3216$ is FORGETTING THAT EACH GLUED PAIR CAN SWAP, losing every factor of $2$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 6, challenge }
