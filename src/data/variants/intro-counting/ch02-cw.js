// Counting & Probability chapter 2 — variations for the CHALLENGE set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - These are the hardest items in the chapter, so every stem settles its
//    conventions out loud (people are different, a row has a left end and a
//    right end, integers have no leading zero, "at least" is inclusive)
//    before it asks anything.
//  - Every keyed answer was brute-forced in node (integers, dice pairs, and
//    permutations enumerated directly) and then worked twice along routes that
//    share no steps: the overlap formula vs. disjoint blocks (slot 1); the
//    overlap formula vs. a direct listing or casework on one die (slot 2);
//    complement vs. building the repeats directly (slot 3); filling the ends
//    first vs. the complement (slot 4); casework on the leading digit vs. a
//    bars count (slot 5); casework on the smallest part vs. sorting the
//    ordered triples by how many parts tie (slot 6); casework on a seat vs.
//    inclusion-exclusion (slot 7); complement vs. counting by how many times
//    the digit appears (slot 8); padded strings vs. casework on the leading
//    digit (slot 9); gaps vs. choosing positions or counting girl blocks
//    (slot 10); casework on the ending vs. padded strings or a listing of the
//    exceptions (slot 11); gluing a block vs. placing the block seat by seat
//    (slot 12).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.

const challenge = [
  // slot 1 — divisible by one list or another, with the overlap thrown out.
  // Route two never forms the union: it builds two disjoint blocks.
  // Lane: 3 or 5 not 15 / exactly one of 4, 6 / derived, none of 2, 3, 5.
  [
    {
      q: 'How many integers from $1$ to $150$ are divisible by $3$ or by $5$, but not by $15$?',
      choices: ['$70$', '$50$', '$80$', '$60$'],
      answer: 3,
      solution:
        'Multiples of $3$ up to $150$: $50$. Multiples of $5$: $30$. Multiples of $15$ sit in both lists: $10$. So $50 + 30 - 10 = 70$ integers are divisible by $3$ or $5$, and every multiple of $15$ is among those $70$. The question throws them out: $70 - 10 = 60$ ✓. Check a second, independent way with two blocks that share nothing. Multiples of $3$ that are not multiples of $15$: $50 - 10 = 40$. Multiples of $5$ that are not multiples of $15$: $30 - 10 = 20$. No integer is in both blocks, since a number in both would be a multiple of $15$. Total $40 + 20 = 60$ ✓. (The choice $70$ is FORGETTING TO REMOVE THE MULTIPLES OF $15$ after forming the union ✗; the choice $50$ is REMOVING THE MULTIPLES OF $15$ TWICE, once for the overlap and once more for the rule ✗; the choice $80$ is ADDING THE TWO LISTS WITHOUT FIXING THE OVERLAP ✗.)',
    },
    {
      q: 'How many integers from $1$ to $200$ are divisible by exactly one of the two numbers $4$ and $6$?',
      choices: ['$67$', '$51$', '$83$', '$35$'],
      answer: 1,
      solution:
        'Multiples of $4$ up to $200$: $50$. Multiples of $6$: $33$ (since $6 \\cdot 33 = 198$). A number divisible by both is a multiple of $\\text{lcm}(4, 6) = 12$: $16$ of them. Adding the two lists counts each multiple of $12$ twice, and "exactly one" wants it counted zero times, so subtract it twice: $50 + 33 - 2 \\cdot 16 = 51$ ✓. Check a second, independent way with two disjoint blocks. Multiples of $4$ that are not multiples of $12$: $50 - 16 = 34$. Multiples of $6$ that are not multiples of $12$: $33 - 16 = 17$. A number in both blocks would be a multiple of $12$, so the blocks share nothing: $34 + 17 = 51$ ✓. (The choice $67$ is SUBTRACTING THE OVERLAP ONLY ONCE, which counts the multiples of $12$ as though they qualified ✗; the choice $83$ is ADDING THE TWO LISTS AND NEVER SUBTRACTING ✗; the choice $35$ is SUBTRACTING THE OVERLAP THREE TIMES ✗.)',
    },
    {
      q: 'How many integers from $1$ to $100$ are divisible by none of the numbers $2$, $3$, and $5$?',
      choices: ['$26$', '$29$', '$32$', '$74$'],
      answer: 0,
      solution:
        'Count the integers divisible by at least one of the three and subtract from $100$. Single lists: $50$, $33$, $20$, adding to $103$. Pairwise overlaps are the multiples of $6$, $10$, and $15$: $16$, $10$, $6$, so subtract $32$ to reach $71$. The multiples of $30$, of which there are $3$, were added three times and subtracted three times, so add them back: $74$ are divisible by at least one, leaving $100 - 74 = 26$ ✓. Check a second, independent way by using the pattern of length $30$. Among $1$ to $30$, the numbers divisible by none of $2$, $3$, $5$ are $1, 7, 11, 13, 17, 19, 23, 29$, eight of them, and adding $30$ to a number changes none of the three divisibility tests. So each of the blocks $1$–$30$, $31$–$60$, $61$–$90$ contributes $8$, for $24$, and the leftover stretch $91$–$100$ contributes $91$ and $97$ only. Total $24 + 2 = 26$ ✓. (The choice $29$ is NEVER ADDING BACK THE MULTIPLES OF $30$, stopping at $71$ ✗; the choice $32$ is SUBTRACTING THE MULTIPLES OF $30$ instead of adding them back ✗; the choice $74$ is REPORTING THE COMPLEMENT, the count divisible by at least one ✗.)',
    },
  ],
  // slot 2 — two dice conditions joined by "or"; the overlap must be checked,
  // not assumed. Route two lists the second list with the first removed, or
  // does casework on one die.
  // Lane: both odd or sum 8 / spinners odd product or sum 6 / derived, both
  // even or sum 9.
  [
    {
      q: 'A red die and a blue die are rolled, and the roll is recorded as an ordered pair (red, blue), so there are $36$ rolls. How many of the $36$ rolls have both dice showing an odd number, or a sum of $8$, or both?',
      choices: ['$14$', '$10$', '$12$', '$30$'],
      answer: 2,
      solution:
        'Both odd: $3 \\times 3 = 9$ rolls. Sum $8$: $(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)$, five rolls. Overlap: rolls with both dice odd and sum $8$ are $(3, 5)$ and $(5, 3)$, two rolls, so the union has $9 + 5 - 2 = 12$ rolls ✓. Check a second, independent way by keeping the lists disjoint. Take all $9$ both-odd rolls. The sum-$8$ rolls not already taken are those with at least one even die: $(2, 6), (4, 4), (6, 2)$, three rolls. Total $9 + 3 = 12$ ✓. (The choice $14$ is ASSUMING THE TWO LISTS DO NOT OVERLAP, adding $9 + 5$ ✗; the choice $10$ is SUBTRACTING THE OVERLAP TWICE ✗; the choice $30$ is READING "BOTH ODD" AS "AT LEAST ONE ODD", $27$ rolls, plus the three sum-$8$ rolls with both dice even ✗.)',
    },
    {
      q: 'Two spinners each have five equal sections numbered $1$ through $5$. Each is spun once and the result is recorded as an ordered pair (first spinner, second spinner), so there are $25$ outcomes. How many outcomes have an odd product or a sum of $6$, or both?',
      choices: ['$11$', '$14$', '$8$', '$17$'],
      answer: 0,
      solution:
        'An odd product needs both numbers odd: $3 \\times 3 = 9$ outcomes. Sum $6$: $(1, 5), (2, 4), (3, 3), (4, 2), (5, 1)$, five outcomes. Overlap: sum $6$ with both numbers odd is $(1, 5), (3, 3), (5, 1)$, three outcomes. Union: $9 + 5 - 3 = 11$ ✓. Check a second, independent way by casework on the first spinner. First spinner odd ($1$, $3$, or $5$): the product is odd whenever the second is odd, $3$ outcomes each, and the sum-$6$ partner ($5$, $3$, $1$ respectively) is odd and already among them, so $3 \\cdot 3 = 9$. First spinner even ($2$ or $4$): the product is even, so only sum $6$ helps, one partner each: $2$. Total $9 + 2 = 11$ ✓. (The choice $14$ is ASSUMING THE LISTS DO NOT OVERLAP ✗; the choice $8$ is SUBTRACTING THE OVERLAP TWICE ✗; the choice $17$ is ADDING THE OVERLAP INSTEAD OF SUBTRACTING IT ✗.)',
    },
    {
      q: 'A red die and a blue die are rolled, and the roll is recorded as an ordered pair (red, blue), so there are $36$ rolls. How many of the $36$ rolls have both dice showing an even number, or a sum of $9$?',
      choices: ['$12$', '$22$', '$31$', '$13$'],
      answer: 3,
      solution:
        'Both even: $3 \\times 3 = 9$ rolls. Sum $9$: $(3, 6), (4, 5), (5, 4), (6, 3)$, four rolls. Overlap: two even numbers add to an even number, so no sum-$9$ roll has both dice even. Add: $9 + 4 = 13$ ✓. Check a second, independent way by casework on the red die. Red odd ($1$, $3$, $5$): both-even fails, and the sum is $9$ only for blue $= 8, 6, 4$, of which $6$ and $4$ are on the die: $2$ rolls. Red even ($2$, $4$, $6$): blue even gives $3$ rolls each, $9$ in all; blue odd with sum $9$ needs blue $= 7, 5, 3$, of which $5$ and $3$ exist: $2$ rolls. Total $2 + 9 + 2 = 13$ ✓. (The choice $12$ is SUBTRACTING A PHANTOM OVERLAP of one roll ✗; the choice $22$ is READING "BOTH EVEN" AS "EVEN SUM", $18$ rolls, then adding the four sum-$9$ rolls ✗; the choice $31$ is READING "BOTH EVEN" AS "AT LEAST ONE EVEN", $27$ rolls, plus four ✗.)',
    },
  ],
  // slot 3 — "at least one repeated digit" by complement. Route two builds the
  // repeats directly, or strips leading zeros from a string count.
  // Lane: four-digit / 3-letter strings from 8 letters / derived, even
  // three-digit.
  [
    {
      q: 'How many four-digit positive integers (no leading zero) have at least one repeated digit, meaning some digit appears two or more times?',
      choices: ['$4464$', '$4536$', '$4960$', '$3888$'],
      answer: 0,
      solution:
        'There are $9000$ four-digit integers. The complement, all four digits different, is a clean construction: $9$ choices for the thousands digit, then $9$, $8$, $7$ for the rest, $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. Subtract: $9000 - 4536 = 4464$ ✓. Check a second, independent way by starting from strings. Among the $10000$ strings $0000$ through $9999$, those with a repeat number $10000 - 10 \\cdot 9 \\cdot 8 \\cdot 7 = 4960$. The strings that begin with $0$ and have a repeat number $1000 - 9 \\cdot 8 \\cdot 7 = 496$, and they are exactly the ones that are not four-digit integers. That leaves $4960 - 496 = 4464$ ✓. (The choice $4536$ is REPORTING THE COMPLEMENT, the count with all digits different ✗; the choice $4960$ is LETTING THE NUMBER START WITH $0$ ✗; the choice $3888$ is COUNTING ONLY THE NUMBERS WITH EXACTLY ONE PAIR of equal digits, missing every number with three or four equal digits or two pairs ✗.)',
    },
    {
      q: 'A string of $3$ letters is formed from the eight letters A through H, with repeats allowed. How many such strings have at least one repeated letter?',
      choices: ['$336$', '$168$', '$176$', '$344$'],
      answer: 2,
      solution:
        'All strings: $8^3 = 512$. The complement, three different letters, is $8 \\cdot 7 \\cdot 6 = 336$. Subtract: $512 - 336 = 176$ ✓. Check a second, independent way by building the repeats. All three letters the same: $8$ strings. Exactly two the same: choose the repeated letter ($8$ ways), the other letter ($7$ ways), and which of the three positions holds the odd letter out ($3$ ways): $8 \\cdot 7 \\cdot 3 = 168$. These two cases share nothing and cover every string with a repeat: $8 + 168 = 176$ ✓. (The choice $336$ is REPORTING THE COMPLEMENT ✗; the choice $168$ is FORGETTING THE STRINGS WITH ALL THREE LETTERS THE SAME ✗; the choice $344$ is SUBTRACTING THE EXACTLY-TWO COUNT FROM THE TOTAL, as though $168$ were the complement ✗.)',
    },
    {
      q: 'How many even three-digit positive integers have at least one repeated digit?',
      choices: ['$328$', '$122$', '$118$', '$126$'],
      answer: 1,
      solution:
        'There are $450$ even three-digit integers. Count the complement, even with all three digits different, by casework on the units digit. Units $0$: hundreds $9$ choices, tens $8$, so $72$. Units $2$, $4$, $6$, or $8$: the hundreds digit avoids $0$ and the units digit ($8$ choices), the tens digit avoids two digits ($8$): $4 \\cdot 64 = 256$. Complement $72 + 256 = 328$, so $450 - 328 = 122$ ✓. Check a second, independent way by building the repeats. All three digits equal and even: $222, 444, 666, 888$, four numbers. Pattern $AAB$ (hundreds and tens equal, units $B$ even and different): $A$ even ($4$ choices) leaves $4$ even values for $B$, $A$ odd ($5$) leaves $5$: $16 + 25 = 41$. Pattern $ABA$: $A$ is even and nonzero ($4$), $B$ is anything else ($9$): $36$. Pattern $BAA$: $A$ is even, $0$ allowed ($5$); $B$ is nonzero and different, $9$ choices if $A = 0$ and $8$ otherwise: $9 + 4 \\cdot 8 = 41$. Total $4 + 41 + 36 + 41 = 122$ ✓. (The choice $328$ is REPORTING THE COMPLEMENT ✗; the choice $118$ is FORGETTING THE FOUR NUMBERS WITH ALL THREE DIGITS EQUAL ✗; the choice $126$ is HALVING THE COUNT FOR ALL THREE-DIGIT INTEGERS, $252$, as though the even ones were exactly half ✗.)',
    },
  ],
  // slot 4 — two named people banned from the ends. Route two takes the
  // complement with inclusion-exclusion, or builds the exactly-one and
  // both cases.
  // Lane: seven people / an 8-digit number with non-prime ends / reversed,
  // at least one of the two at an end.
  [
    {
      q: 'Seven different people, including Cy and Di, stand in a row that has a left end and a right end. Neither Cy nor Di may stand at either end. How many arrangements are possible?',
      choices: ['$4800$', '$2400$', '$2640$', '$3600$'],
      answer: 1,
      solution:
        'Fill the restricted spots first. The left end takes one of the five people other than Cy and Di, and the right end takes one of the remaining four: $5 \\cdot 4 = 20$. The five middle spots take the five people left, Cy and Di among them, in $5! = 120$ orders. Total $20 \\cdot 120 = 2400$ ✓. Check a second, independent way by complement. Of the $7! = 5040$ arrangements, those with Cy at an end number $2 \\cdot 6! = 1440$, likewise $1440$ with Di at an end, and both at the ends number $2 \\cdot 5! = 240$. Bad arrangements: $1440 + 1440 - 240 = 2640$, so $5040 - 2640 = 2400$ ✓. (The choice $4800$ is MULTIPLYING BY $2$ FOR THE TWO ENDS after the ends were already filled in order ✗; the choice $2640$ is REPORTING THE COMPLEMENT, the arrangements with Cy or Di at an end ✗; the choice $3600$ is SUBTRACTING ONLY CY’S END ARRANGEMENTS, $5040 - 1440$ ✗.)',
    },
    {
      q: 'The digits $1$ through $8$ are each used exactly once to form an $8$-digit number. In how many of these numbers is neither the first digit nor the last digit a prime? (The primes among these digits are $2, 3, 5, 7$; the digit $1$ is not prime.)',
      choices: ['$4320$', '$11520$', '$31680$', '$8640$'],
      answer: 3,
      solution:
        'The non-prime digits are $1, 4, 6, 8$. The first digit takes one of these four and the last digit one of the remaining three: $4 \\cdot 3 = 12$. The six middle positions take the six leftover digits in $6! = 720$ orders. Total $12 \\cdot 720 = 8640$ ✓. Check a second, independent way by complement. All numbers: $8! = 40320$. First digit prime: $4 \\cdot 7! = 20160$; last digit prime: $20160$; both prime: $4 \\cdot 3 \\cdot 6! = 8640$. Numbers with a prime at some end: $20160 + 20160 - 8640 = 31680$, so $40320 - 31680 = 8640$ ✓. (The choice $4320$ is TREATING $1$ AS A PRIME, leaving only $4, 6, 8$ for the ends ✗; the choice $11520$ is ALLOWING THE SAME DIGIT AT BOTH ENDS, using $4 \\cdot 4$ ✗; the choice $31680$ is REPORTING THE COMPLEMENT ✗.)',
    },
    {
      q: 'Five different people, including Ann and Ben, stand in a row that has a left end and a right end. In how many arrangements does at least one of Ann and Ben stand at an end?',
      choices: ['$36$', '$96$', '$84$', '$72$'],
      answer: 2,
      solution:
        'Count the complement, neither at an end: the two ends take two of the other three people in $3 \\cdot 2 = 6$ ways, and the middle three spots take the rest in $3! = 6$ ways, $36$ arrangements. So $5! - 36 = 120 - 36 = 84$ ✓. Check a second, independent way by building the three disjoint cases. Ann at an end and Ben not: Ann picks an end ($2$), Ben picks one of the three middle spots ($3$), the other three people fill in ($6$): $36$. Ben at an end and Ann not: likewise $36$. Both at the ends: $2$ orders, the other three in $6$ ways: $12$. Total $36 + 36 + 12 = 84$ ✓. (The choice $36$ is REPORTING THE COMPLEMENT ✗; the choice $96$ is ADDING "ANN AT AN END" AND "BEN AT AN END", $48 + 48$, without removing the $12$ counted twice ✗; the choice $72$ is FORGETTING THE CASE WHERE BOTH STAND AT THE ENDS ✗.)',
    },
  ],
  // slot 5 — digits (or parts) with a fixed sum. Route two replaces the
  // casework with a bars count after shifting the leading digit, or with the
  // complement over the units digit.
  // Lane: four-digit sum 6 / ordered triples summing to 9 / derived, even
  // four-digit with sum 5.
  [
    {
      q: 'How many four-digit positive integers (no leading zero) have digits that add up to $6$?',
      choices: ['$84$', '$10$', '$21$', '$56$'],
      answer: 3,
      solution:
        'Case on the thousands digit $d$, which is at least $1$. The other three digits add to $6 - d$, and three digits can add to $s$ (for $s \\le 9$) in $\\frac{(s+1)(s+2)}{2}$ ways. So $d = 1$ gives $21$, $d = 2$ gives $15$, $d = 3$ gives $10$, $d = 4$ gives $6$, $d = 5$ gives $3$, $d = 6$ gives $1$: total $56$ ✓. Check a second, independent way with one bars count. Lower the thousands digit by $1$; now the four digits are any digits from $0$ to $9$ adding to $5$, and since $5 \\le 9$ no digit can overflow. Splitting $5$ identical units among $4$ digits is $\\binom{5 + 3}{3} = \\binom{8}{3} = 56$ ✓. (The choice $84$ is ALLOWING A LEADING ZERO, counting $\\binom{9}{3}$ strings with sum $6$ ✗; the choice $10$ is LOWERING ALL FOUR DIGITS BY $1$, as though every digit had to be positive ✗; the choice $21$ is STOPPING AFTER THE CASE $d = 1$ ✗.)',
    },
    {
      q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $a + b + c = 9$? (Ordered means $(1, 2, 6)$ and $(2, 1, 6)$ are different triples.)',
      choices: ['$55$', '$28$', '$36$', '$7$'],
      answer: 1,
      solution:
        'Write $9$ as a row of $9$ units and cut it into three nonempty pieces: the cuts go in $2$ of the $8$ gaps between units, $\\binom{8}{2} = 28$ ways, and each choice of cuts is one ordered triple ✓. Check a second, independent way by casework on $a$. For $a = 1$, $b + c = 8$ with $b, c \\ge 1$ has $7$ solutions ($b = 1$ to $7$). For $a = 2$, $b + c = 7$ has $6$; and so on down to $a = 7$, where $b + c = 2$ has $1$. Total $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$ ✓. (The choice $55$ is ALLOWING ZEROS, counting $\\binom{11}{2}$ triples of nonnegative integers ✗; the choice $36$ is USING $\\binom{9}{2}$, cutting at the units instead of in the gaps ✗; the choice $7$ is IGNORING THE ORDER, counting only the seven sets $\\{1, 1, 7\\}, \\{1, 2, 6\\}, \\{1, 3, 5\\}, \\{1, 4, 4\\}, \\{2, 2, 5\\}, \\{2, 3, 4\\}, \\{3, 3, 3\\}$ ✗.)',
    },
    {
      q: 'How many even four-digit positive integers (no leading zero) have digits that add up to $5$?',
      choices: ['$22$', '$13$', '$35$', '$21$'],
      answer: 0,
      solution:
        'Case on the units digit, which must be even and at most $5$. Units $0$: the thousands, hundreds, and tens digits add to $5$ with the thousands digit at least $1$, so lowering it by $1$ gives three digits adding to $4$: $\\binom{6}{2} = 15$. Units $2$: the front three add to $3$, lowered to $2$: $\\binom{4}{2} = 6$. Units $4$: the front three add to $1$, so the number is $1004$: $1$. Total $15 + 6 + 1 = 22$ ✓. Check a second, independent way by removing the odd ones. All four-digit integers with digit sum $5$: lower the thousands digit by $1$ and split $4$ among four digits, $\\binom{7}{3} = 35$. The odd ones have units $1$ (front three add to $4$, lowered to $3$: $\\binom{5}{2} = 10$), units $3$ (front three add to $2$, lowered to $1$: $3$), or units $5$ (front three add to $0$, impossible with a nonzero thousands digit): $13$ odd. Even: $35 - 13 = 22$ ✓. (The choice $13$ is COUNTING THE ODD ONES ✗; the choice $35$ is IGNORING THE WORD "EVEN" ✗; the choice $21$ is FORGETTING THE SINGLE NUMBER $1004$ with units digit $4$ ✗.)',
    },
  ],
  // slot 6 — triples in increasing order. Route two counts all ordered triples
  // and sorts them by how many parts tie, dividing by $6$ at the end.
  // Lane: sum 16 strict / sum 12 non-strict / derived, strict with sum at
  // most 10.
  [
    {
      q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $a + b + c = 16$ and $a < b < c$?',
      choices: ['$14$', '$105$', '$84$', '$21$'],
      answer: 0,
      solution:
        'Case on the smallest number $a$; since $3a < a + b + c = 16$, $a \\le 5$. $a = 1$: $b + c = 15$ with $1 < b < c$, so $b = 2, 3, 4, 5, 6, 7$ ($b = 8$ would give $c = 7$): $6$ triples. $a = 2$: $b + c = 14$, $b = 3, 4, 5, 6$: $4$. $a = 3$: $b + c = 13$, $b = 4, 5, 6$: $3$. $a = 4$: $b + c = 12$, $b = 5$ only: $1$. $a = 5$: $b + c = 11$ with $b \\ge 6$ forces $c \\le 5$: none. Total $6 + 4 + 3 + 1 = 14$ ✓. Check a second, independent way by sorting all ordered triples. Positive triples with sum $16$ number $\\binom{15}{2} = 105$. No triple has three equal parts, since $16$ is not a multiple of $3$. Triples with exactly two equal parts: $a = b$ and $c = 16 - 2a \\ne a$, where $a$ runs from $1$ to $7$, so $7$ patterns, each in $3$ positions: $21$. The remaining $105 - 21 = 84$ triples have three different parts, and each set of three different numbers appears in $3! = 6$ orders, of which exactly one is increasing: $84 \\div 6 = 14$ ✓. (The choice $105$ is DROPPING THE CONDITION $a < b < c$ entirely ✗; the choice $84$ is FORGETTING TO DIVIDE BY $6$ after removing the tied triples ✗; the choice $21$ is ALLOWING TIES, counting triples with $a \\le b \\le c$ ✗.)',
    },
    {
      q: 'How many triples of positive integers $(a, b, c)$ satisfy $a \\le b \\le c$ and $a + b + c = 12$?',
      choices: ['$55$', '$7$', '$12$', '$11$'],
      answer: 2,
      solution:
        'Case on the smallest part $a$; since $3a \\le 12$, $a \\le 4$. $a = 1$: $b + c = 11$ with $1 \\le b \\le c$, so $b = 1, 2, 3, 4, 5$: $5$. $a = 2$: $b + c = 10$, $b = 2, 3, 4, 5$: $4$. $a = 3$: $b + c = 9$, $b = 3, 4$: $2$. $a = 4$: $b + c = 8$, $b = 4$ only: $1$. Total $5 + 4 + 2 + 1 = 12$ ✓. Check a second, independent way by sorting all ordered triples. Positive ordered triples with sum $12$ number $\\binom{11}{2} = 55$. Exactly one has all three parts equal, $(4, 4, 4)$. Exactly two equal: $a = b$, $c = 12 - 2a \\ne a$, with $a = 1, 2, 3, 5$ (not $4$): four patterns, each in $3$ positions, $12$ triples, which is $4$ non-decreasing triples. Three different parts: $55 - 1 - 12 = 42$ ordered triples, or $42 \\div 6 = 7$ non-decreasing ones. Total $1 + 4 + 7 = 12$ ✓. (The choice $55$ is COUNTING EVERY ORDERED TRIPLE, ignoring $a \\le b \\le c$ ✗; the choice $7$ is READING $\\le$ AS $<$ and refusing every tie ✗; the choice $11$ is FORGETTING THE TRIPLE $(4, 4, 4)$ ✗.)',
    },
    {
      q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $a < b < c$ and $a + b + c \\le 10$?',
      choices: ['$4$', '$11$', '$120$', '$7$'],
      answer: 1,
      solution:
        'Case on the sum $s$; the smallest possible sum is $1 + 2 + 3 = 6$. $s = 6$: $(1, 2, 3)$. $s = 7$: $(1, 2, 4)$. $s = 8$: $(1, 2, 5), (1, 3, 4)$. $s = 9$: $(1, 2, 6), (1, 3, 5), (2, 3, 4)$. $s = 10$: $(1, 2, 7), (1, 3, 6), (1, 4, 5), (2, 3, 5)$. Total $1 + 1 + 2 + 3 + 4 = 11$ ✓. Check a second, independent way by casework on the largest number $c$, with $a < b < c$ and $a + b \\le 10 - c$. $c = 3$: $(a, b) = (1, 2)$: $1$. $c = 4$: $a + b \\le 6$ with $b \\le 3$: $(1, 2), (1, 3)$: $2$. $c = 5$: $a + b \\le 5$ with $b \\le 4$: $(1, 2), (1, 3), (1, 4), (2, 3)$: $4$. $c = 6$: $a + b \\le 4$: $(1, 2), (1, 3)$: $2$. $c = 7$: $a + b \\le 3$: $(1, 2)$: $1$. $c \\ge 8$: $a + b \\le 2$ is impossible. Total $1 + 2 + 4 + 2 + 1 = 11$ ✓. (The choice $4$ is COUNTING ONLY THE TRIPLES WITH SUM EXACTLY $10$ ✗; the choice $120$ is CHOOSING ANY THREE DIFFERENT NUMBERS FROM $1$ TO $10$, $\\binom{10}{3}$, and ignoring the sum ✗; the choice $7$ is STOPPING AT SUM $9$ ✗.)',
    },
  ],
  // slot 7 — one person refuses two neighbors, or two feuds at once. Route
  // two is inclusion-exclusion with the add-back made explicit, or a seat
  // count.
  // Lane: six people, Ann shuns Ben and Cal / two separate feuds / reversed,
  // Ann next to both.
  [
    {
      q: 'Six different people, including Ann, Ben, and Cal, stand in a row that has a left end and a right end. Ann refuses to stand next to Ben and also refuses to stand next to Cal. How many arrangements are possible?',
      choices: ['$240$', '$480$', '$144$', '$288$'],
      answer: 3,
      solution:
        'Case on Ann’s spot. Ann at an end ($2$ ways): her single neighbor is one of the three people other than Ben and Cal ($3$ ways), and the remaining four people fill the last four spots in $4! = 24$ ways: $2 \\cdot 3 \\cdot 24 = 144$. Ann in one of the four inner spots ($4$ ways): both neighbors come from those same three people, in order ($3 \\cdot 2 = 6$), and the remaining three people fill in ($3! = 6$): $4 \\cdot 6 \\cdot 6 = 144$. Total $144 + 144 = 288$ ✓. Check a second, independent way by inclusion-exclusion. All arrangements: $6! = 720$. Ann next to Ben: glue them, $5! \\cdot 2 = 240$; Ann next to Cal: likewise $240$. Ann next to both: she sits between them in a block of three with $2$ inside orders, and the block plus three others make $4! = 24$ orders: $48$. Good arrangements: $720 - 240 - 240 + 48 = 288$ ✓. (The choice $240$ is NEVER ADDING BACK THE $48$ arrangements with Ann between Ben and Cal ✗; the choice $480$ is SUBTRACTING ONLY ONE OF THE TWO FEUDS ✗; the choice $144$ is COUNTING ONLY THE ARRANGEMENTS WITH ANN AT AN END ✗.)',
    },
    {
      q: 'Six different people, including Ann, Ben, Cal, and Dee, stand in a row that has a left end and a right end. Ann refuses to stand next to Ben, and Cal refuses to stand next to Dee. How many arrangements are possible?',
      choices: ['$240$', '$336$', '$480$', '$624$'],
      answer: 1,
      solution:
        'Inclusion-exclusion on the two feuds. All arrangements: $720$. Ann next to Ben: $5! \\cdot 2 = 240$; Cal next to Dee: $240$. Both pairs adjacent: two blocks and two other people make $4! = 24$ orders, times $2 \\cdot 2$ inside orders: $96$. Good arrangements: $720 - 240 - 240 + 96 = 336$ ✓. Check a second, independent way by handling the feuds one at a time. Arrangements with Ann and Ben apart: $720 - 240 = 480$. Among these, remove the ones with Cal next to Dee: of the $240$ arrangements with Cal and Dee adjacent, $96$ also have Ann and Ben adjacent, so $240 - 96 = 144$ have Cal-Dee adjacent with Ann-Ben apart. That leaves $480 - 144 = 336$ ✓. (The choice $240$ is NEVER ADDING BACK THE $96$ arrangements with both pairs adjacent ✗; the choice $480$ is ENFORCING ONLY ONE OF THE TWO FEUDS ✗; the choice $624$ is SUBTRACTING ONLY THE ARRANGEMENTS WHERE BOTH PAIRS ARE ADJACENT ✗.)',
    },
    {
      q: 'Five different people, including Ann, Ben, and Cal, stand in a row that has a left end and a right end. In how many arrangements is Ann next to Ben and also next to Cal?',
      choices: ['$12$', '$36$', '$48$', '$6$'],
      answer: 0,
      solution:
        'Ann has at most two neighbors, so they must be exactly Ben and Cal: the three form a block reading Ben-Ann-Cal or Cal-Ann-Ben, $2$ inside orders. The block and the other two people are $3$ items in $3! = 6$ orders. Total $2 \\cdot 6 = 12$ ✓. Check a second, independent way by seats. Ann needs two neighbors, so she cannot take an end: $3$ possible seats. Her two neighbors are Ben and Cal in either order: $2$. The other two people take the two remaining seats: $2$. Total $3 \\cdot 2 \\cdot 2 = 12$ ✓. (The choice $36$ is ALLOWING ALL $3! = 6$ ORDERS INSIDE THE BLOCK, including ones where Ann is not in the middle ✗; the choice $48$ is GLUING ONLY ANN AND BEN, $4! \\cdot 2$, and forgetting Cal’s condition ✗; the choice $6$ is FORGETTING THE TWO ORDERS INSIDE THE BLOCK ✗.)',
    },
  ],
  // slot 8 — a required digit and a forbidden digit at once. Route two counts
  // by how many times the required digit appears, or by number of digits.
  // Lane: 1–9999, a 6 and no 7 / 3-letter strings, an A and no B / reversed,
  // 1–999 with no 4 and no 5.
  [
    {
      q: 'How many integers from $1$ to $9999$ contain at least one digit $6$ and no digit $7$? (An integer is written without leading zeros; $66$ has two digits.)',
      choices: ['$3439$', '$4096$', '$2465$', '$2048$'],
      answer: 2,
      solution:
        'Pad every integer from $0$ to $9999$ to a four-character string; leading zeros add no $6$ and no $7$, so the padding changes nothing. Strings with no $7$: $9^4 = 6561$. Strings with no $7$ and no $6$: $8^4 = 4096$. Strings with a $6$ and no $7$: $6561 - 4096 = 2465$, and $0000$ is not among them, so the count for $1$ to $9999$ is $2465$ ✓. Check a second, independent way by counting how many $6$s appear. With the same padding, choose the positions of the $6$s and fill the other positions from the $8$ digits that are neither $6$ nor $7$. Exactly one $6$: $4 \\cdot 8^3 = 2048$; exactly two: $\\binom{4}{2} \\cdot 8^2 = 384$; exactly three: $4 \\cdot 8 = 32$; four: $1$. Total $2048 + 384 + 32 + 1 = 2465$ ✓. (The choice $3439$ is IGNORING THE NO-$7$ RULE, computing $10^4 - 9^4$ ✗; the choice $4096$ is REPORTING THE COMPLEMENT, the strings with neither digit ✗; the choice $2048$ is COUNTING ONLY THE NUMBERS WITH EXACTLY ONE $6$ ✗.)',
    },
    {
      q: 'A string of $3$ letters is formed from the six letters A through F, with repeats allowed. How many such strings contain at least one A and no B?',
      choices: ['$61$', '$91$', '$64$', '$48$'],
      answer: 0,
      solution:
        'Strings with no B use the five letters A, C, D, E, F: $5^3 = 125$. Among them, strings with no A use four letters: $4^3 = 64$. Strings with an A and no B: $125 - 64 = 61$ ✓. Check a second, independent way by counting the A’s. Exactly one A: choose its position ($3$) and fill the other two from C, D, E, F ($4^2 = 16$): $48$. Exactly two A’s: choose the position of the non-A ($3$) and its letter ($4$): $12$. Three A’s: $1$. Total $48 + 12 + 1 = 61$ ✓. (The choice $91$ is IGNORING THE NO-B RULE, computing $6^3 - 5^3$ ✗; the choice $64$ is REPORTING THE COMPLEMENT, the strings with neither A nor B ✗; the choice $48$ is COUNTING ONLY THE STRINGS WITH EXACTLY ONE A ✗.)',
    },
    {
      q: 'How many integers from $1$ to $999$ contain no digit $4$ and no digit $5$? (Integers are written without leading zeros.)',
      choices: ['$512$', '$448$', '$729$', '$511$'],
      answer: 3,
      solution:
        'Pad every integer from $0$ to $999$ to three characters; leading zeros are neither $4$ nor $5$, so the padding changes nothing. Each position has $8$ allowed digits, giving $8^3 = 512$ strings, one of which is $000$. Removing it leaves $512 - 1 = 511$ ✓. Check a second, independent way by number of digits. One-digit integers avoiding $4$ and $5$: $1, 2, 3, 6, 7, 8, 9$, seven of them. Two-digit: the tens digit is one of those $7$ and the units digit one of $8$ (now $0$ is allowed): $56$. Three-digit: $7 \\cdot 8 \\cdot 8 = 448$. Total $7 + 56 + 448 = 511$ ✓. (The choice $512$ is COUNTING THE STRING $000$, which is not an integer from $1$ to $999$ ✗; the choice $448$ is COUNTING ONLY THE THREE-DIGIT INTEGERS ✗; the choice $729$ is FORBIDDING ONLY ONE DIGIT, using $9^3$ ✗.)',
    },
  ],
  // slot 9 — exactly one pair of equal digits. Route two swaps the padded
  // string count for casework on the leading position, or a multiset count.
  // Lane: four-digit / 4-letter strings from A–E / derived, even three-digit.
  [
    {
      q: 'How many four-digit positive integers (no leading zero) have exactly two digits the same, with the other two digits different from that digit and from each other?',
      choices: ['$4320$', '$3888$', '$1944$', '$4464$'],
      answer: 1,
      solution:
        'Count padded strings $0000$ to $9999$ first: choose the repeated digit ($10$), its two positions ($\\binom{4}{2} = 6$), and the two remaining digits in order ($9 \\cdot 8 = 72$): $4320$. Remove the strings that begin with $0$. If the leading $0$ is the repeated digit: the other $0$ takes one of $3$ positions and the two singles are $9 \\cdot 8 = 72$, so $216$. If the leading $0$ is a single: the repeated digit is one of $9$, its positions are $\\binom{3}{2} = 3$, the other single has $8$ choices, so $216$. Total $4320 - 216 - 216 = 3888$ ✓. Check a second, independent way by casework on the thousands digit. It is the repeated digit: $9$ choices, its twin takes one of $3$ positions, and the two singles are $9 \\cdot 8 = 72$: $1944$. It is a single: $9$ choices; the repeated digit is one of the other $9$ digits and takes $\\binom{3}{2} = 3$ position pairs; the last single is one of $8$: $9 \\cdot 9 \\cdot 3 \\cdot 8 = 1944$. Total $1944 + 1944 = 3888$ ✓. (The choice $4320$ is LETTING THE NUMBER START WITH $0$ ✗; the choice $1944$ is COUNTING ONLY THE CASE WHERE THE THOUSANDS DIGIT IS THE REPEATED ONE ✗; the choice $4464$ is COUNTING EVERY NUMBER WITH ANY REPEATED DIGIT, including $1112$ and $1122$ ✗.)',
    },
    {
      q: 'A string of $4$ letters is formed from the five letters A through E, with repeats allowed. How many such strings have exactly two letters the same, with the other two letters different from that letter and from each other?',
      choices: ['$120$', '$720$', '$180$', '$360$'],
      answer: 3,
      solution:
        'Choose the repeated letter ($5$), the two positions it occupies ($\\binom{4}{2} = 6$), then fill the remaining two positions in order with two different other letters ($4 \\cdot 3 = 12$): $5 \\cdot 6 \\cdot 12 = 360$ ✓. Check a second, independent way through the set of letters used. The string uses exactly three different letters: $\\binom{5}{3} = 10$ sets. One of the three is doubled: $3$ ways. A word like AABC has $\\frac{4!}{2!} = 12$ arrangements. Total $10 \\cdot 3 \\cdot 12 = 360$ ✓. (The choice $120$ is FORGETTING TO CHOOSE WHICH OF THE THREE LETTERS IS DOUBLED, $10 \\cdot 12$ ✗; the choice $720$ is ARRANGING THE FOUR LETTERS AS IF ALL DIFFERENT, $4!$ instead of $\\frac{4!}{2!}$ ✗; the choice $180$ is CHOOSING THE TWO SINGLE LETTERS AS A SET, $\\binom{4}{2}$ instead of $4 \\cdot 3$, and never ordering them ✗.)',
    },
    {
      q: 'How many even three-digit positive integers have exactly two digits the same (and the third digit different)?',
      choices: ['$122$', '$77$', '$118$', '$126$'],
      answer: 2,
      solution:
        'Case on which position holds the odd digit out. Pattern $AAB$: the units digit $B$ is even and differs from $A$; $A$ even ($4$ choices, nonzero) leaves $4$ values for $B$, $A$ odd ($5$) leaves $5$: $16 + 25 = 41$. Pattern $ABA$: the units digit equals the hundreds digit, so $A$ is even and nonzero ($4$), and $B$ is any other digit ($9$): $36$. Pattern $BAA$: $A$ is even with $0$ allowed ($5$), $B$ is nonzero and different: $9$ choices when $A = 0$, else $8$: $9 + 4 \\cdot 8 = 41$. Total $41 + 36 + 41 = 118$ ✓. Check a second, independent way by complement. Even three-digit integers: $450$. Those with all digits different: units $0$ gives $9 \\cdot 8 = 72$, units $2, 4, 6, 8$ gives $4 \\cdot 8 \\cdot 8 = 256$, so $328$. So $450 - 328 = 122$ have a repeat, and $4$ of those ($222, 444, 666, 888$) have all three digits equal: $122 - 4 = 118$ ✓. (The choice $122$ is INCLUDING THE FOUR NUMBERS WITH ALL THREE DIGITS EQUAL ✗; the choice $77$ is MISSING THE PATTERN $BAA$ ✗; the choice $126$ is HALVING THE COUNT FOR ALL THREE-DIGIT INTEGERS, $252$, as though the even ones were exactly half ✗.)',
    },
  ],
  // slot 10 — no two of one group adjacent. Route two chooses the positions
  // as a pattern first, or counts the girl blocks directly.
  // Lane: 5 boys 4 girls / 6 red 3 black cards / reversed, at least two
  // girls adjacent.
  [
    {
      q: 'Five boys and four girls, all different people, stand in a row so that no two girls are next to each other. How many arrangements are possible?',
      choices: ['$2880$', '$86400$', '$43200$', '$1800$'],
      answer: 2,
      solution:
        'Arrange the boys: $5! = 120$. They create $6$ gaps, counting the two ends, and the four girls must take four different gaps in order: $6 \\cdot 5 \\cdot 4 \\cdot 3 = 360$. Total $120 \\cdot 360 = 43200$ ✓. Check a second, independent way by patterns. Mark each of the $9$ positions B or G. Placing $4$ G’s with no two adjacent among $9$ positions is the same as choosing $4$ of the $6$ gaps around $5$ B’s: $\\binom{6}{4} = 15$ patterns. Each pattern is filled by the boys in $5! = 120$ ways and the girls in $4! = 24$ ways: $15 \\cdot 120 \\cdot 24 = 43200$ ✓. (The choice $2880$ is USING ONLY THE ALTERNATING PATTERN BGBGBGBGB, $5! \\cdot 4!$ ✗; the choice $86400$ is DOUBLING FOR A MIRROR IMAGE that was already counted ✗; the choice $1800$ is CHOOSING THE GAPS AS A SET, $\\binom{6}{4}$, and never ordering the girls ✗.)',
    },
    {
      q: 'Six different red cards and three different black cards are laid in a row. In how many arrangements are no two black cards next to each other?',
      choices: ['$151200$', '$25200$', '$86400$', '$362880$'],
      answer: 0,
      solution:
        'Arrange the red cards: $6! = 720$. They create $7$ gaps, counting the two ends, and the three black cards take three different gaps in order: $7 \\cdot 6 \\cdot 5 = 210$. Total $720 \\cdot 210 = 151200$ ✓. Check a second, independent way by patterns. Choose which $3$ of the $9$ positions are black with no two adjacent: that is choosing $3$ of the $7$ gaps around six R’s, $\\binom{7}{3} = 35$ patterns. Fill each with the red cards ($720$) and the black cards ($3! = 6$): $35 \\cdot 720 \\cdot 6 = 151200$ ✓. (The choice $25200$ is CHOOSING THE GAPS AS A SET and never ordering the black cards ✗; the choice $86400$ is FORGETTING THE TWO END GAPS, using $6 \\cdot 5 \\cdot 4$ ✗; the choice $362880$ is COUNTING ALL $9!$ ARRANGEMENTS and ignoring the rule ✗.)',
    },
    {
      q: 'Four boys and four girls, all different people, stand in a row. In how many arrangements are at least two girls next to each other, meaning some girl stands directly beside another girl?',
      choices: ['$2880$', '$34560$', '$20160$', '$37440$'],
      answer: 3,
      solution:
        'Count the complement, no two girls adjacent. Arrange the boys ($4! = 24$), then place the girls in four different gaps of the five around the boys: $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$. Complement $24 \\cdot 120 = 2880$, so $8! - 2880 = 40320 - 2880 = 37440$ ✓. Check a second, independent way by counting girl blocks directly. Mark positions B or G and sort the patterns by how many runs of consecutive G’s they contain; a run of length $2$ or more is what the question wants, so every pattern with fewer than $4$ runs qualifies. One run (GGGG): it sits in one of the $5$ gaps around the four B’s: $5$. Two runs: split $4$ girls into two ordered nonempty runs ($3$ ways: $1 + 3$, $2 + 2$, $3 + 1$) and place them in $2$ of the $5$ gaps ($\\binom{5}{2} = 10$): $30$. Three runs: split into three ordered runs ($3$ ways) and place in $3$ of $5$ gaps ($10$): $30$. Total $5 + 30 + 30 = 65$ patterns, each filled in $4! \\cdot 4! = 576$ ways: $65 \\cdot 576 = 37440$ ✓. (The choice $2880$ is REPORTING THE COMPLEMENT ✗; the choice $34560$ is SUBTRACTING THE COMPLEMENT TWICE, $40320 - 2 \\cdot 2880$ ✗; the choice $20160$ is ASSUMING HALF OF ALL ARRANGEMENTS QUALIFY ✗.)',
    },
  ],
  // slot 11 — distinct digits plus a divisibility rule read off the ending.
  // Route two strips leading zeros from a string count, lists the exceptions,
  // or counts endings that fail.
  // Lane: five-digit by 4 / three-digit by 6 / reversed, four-digit NOT by 4.
  [
    {
      q: 'How many five-digit positive integers (no leading zero) have five different digits and are divisible by $4$?',
      choices: ['$7392$', '$6720$', '$6468$', '$22500$'],
      answer: 1,
      solution:
        'A number is divisible by $4$ exactly when its last two digits form a multiple of $4$. The endings $00, 04, \\ldots, 96$ number $25$, and $00$, $44$, $88$ repeat a digit, leaving $22$ endings. Case on whether the ending contains a $0$. The endings $04, 08, 20, 40, 60, 80$ do ($6$ of them): then the ten-thousands digit avoids only the two used digits ($8$ choices), and the next two avoid three and four ($7$, $6$): $6 \\cdot 336 = 2016$. The other $16$ endings have no $0$, so the ten-thousands digit must avoid $0$ as well ($7$ choices), then $7$ and $6$: $16 \\cdot 294 = 4704$. Add: $2016 + 4704 = 6720$ ✓. Check a second, independent way by strings. Allow a leading zero: each of the $22$ endings is completed by three more different digits in $8 \\cdot 7 \\cdot 6 = 336$ ways, $7392$ strings. Strings that begin with $0$ need a zero-free ending ($16$ of them) and then $7 \\cdot 6 = 42$ fillings for the middle: $672$. So $7392 - 672 = 6720$ ✓. (The choice $7392$ is LETTING THE NUMBER START WITH $0$ ✗; the choice $6468$ is TREATING EVERY ENDING AS ZERO-FREE, $22 \\cdot 294$ ✗; the choice $22500$ is COUNTING ALL FIVE-DIGIT MULTIPLES OF $4$ and ignoring the distinct-digit rule ✗.)',
    },
    {
      q: 'How many three-digit positive integers have three different digits and are divisible by $6$?',
      choices: ['$150$', '$91$', '$300$', '$115$'],
      answer: 3,
      solution:
        'Three-digit multiples of $6$ run from $102$ to $996$: $\\frac{996 - 102}{6} + 1 = 150$. List the ones with a repeated digit by hundreds digit: $114, 144$; $222, 228, 252, 282, 288$; $300, 330, 336, 366$; $414, 444, 474$; $522, 552, 558, 588$; $600, 606, 636, 660, 666, 696$; $744, 774$; $822, 828, 858, 882, 888$; $900, 966, 990, 996$. That is $2 + 5 + 4 + 3 + 4 + 6 + 2 + 5 + 4 = 35$, so $150 - 35 = 115$ ✓. Check a second, independent way by casework on the units digit $u$, which must be even; the hundreds digit $h$ and tens digit $t$ must then make $h + t + u$ a multiple of $3$, with all three digits different. Sort the digits other than $u$ by remainder mod $3$. $u = 0$: $h, t$ from $1$–$9$ with $h + t \\equiv 0$: both remainder $0$ ($3 \\cdot 2 = 6$) or remainders $1$ and $2$ in either order ($2 \\cdot 3 \\cdot 3 = 18$): $24$. $u = 2$: need $h + t \\equiv 1$; remainder classes without $2$ are $\\{0, 3, 6, 9\\}$, $\\{1, 4, 7\\}$, $\\{5, 8\\}$: $h$ from $\\{3, 6, 9\\}$ with $t$ remainder $1$ ($9$), $h$ remainder $1$ with $t$ from $\\{0, 3, 6, 9\\}$ ($12$), both from $\\{5, 8\\}$ ($2$): $23$. $u = 4$: need $h + t \\equiv 2$; classes $\\{0, 3, 6, 9\\}$, $\\{1, 7\\}$, $\\{2, 5, 8\\}$: $3 \\cdot 3 + 3 \\cdot 4 + 2 \\cdot 1 = 23$. $u = 6$: need $h + t \\equiv 0$; classes $\\{0, 3, 9\\}$, $\\{1, 4, 7\\}$, $\\{2, 5, 8\\}$: both remainder $0$ with $h \\ne 0$ ($2 \\cdot 2 = 4$), remainders $1$ and $2$ ($2 \\cdot 9 = 18$): $22$. $u = 8$: need $h + t \\equiv 1$; classes $\\{0, 3, 6, 9\\}$, $\\{1, 4, 7\\}$, $\\{2, 5\\}$: $3 \\cdot 3 + 3 \\cdot 4 + 2 = 23$. Total $24 + 23 + 23 + 22 + 23 = 115$ ✓. (The choice $150$ is IGNORING THE DIFFERENT-DIGITS RULE ✗; the choice $91$ is DROPPING THE CASE $u = 0$ ✗; the choice $300$ is COUNTING EVERY THREE-DIGIT MULTIPLE OF $3$, forgetting both the evenness and the digit rule ✗.)',
    },
    {
      q: 'How many four-digit positive integers (no leading zero) have four different digits and are NOT divisible by $4$?',
      choices: ['$1120$', '$6750$', '$3416$', '$3402$'],
      answer: 2,
      solution:
        'Four-digit integers with four different digits: $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. Those divisible by $4$ end in one of the $22$ distinct-digit multiples of $4$ from $04$ to $96$; the $6$ endings containing $0$ are completed in $8 \\cdot 7 = 56$ ways and the other $16$ in $7 \\cdot 7 = 49$ ways: $336 + 784 = 1120$. Subtract: $4536 - 1120 = 3416$ ✓. Check a second, independent way by building the failing endings. Two-digit endings with different digits: $10 \\cdot 9 = 90$, of which $22$ are multiples of $4$, so $68$ endings are not. Among the $68$, those containing a $0$: the $18$ endings $0x$ and $x0$ minus the $6$ that are multiples of $4$, so $12$; each is completed by a thousands digit from $8$ choices and a hundreds digit from $7$: $12 \\cdot 56 = 672$. The other $56$ endings have no $0$, so the thousands digit has $7$ choices and the hundreds digit $7$: $56 \\cdot 49 = 2744$. Total $672 + 2744 = 3416$ ✓. (The choice $1120$ is REPORTING THE COMPLEMENT, the multiples of $4$ ✗; the choice $6750$ is COUNTING ALL FOUR-DIGIT INTEGERS NOT DIVISIBLE BY $4$ and ignoring the digit rule ✗; the choice $3402$ is ASSUMING EXACTLY ONE QUARTER OF THE $4536$ ARE MULTIPLES OF $4$ ✗.)',
    },
  ],
  // slot 12 — a glued pair that a third person must avoid. Route two places
  // the block seat by seat and counts the third person’s open seats.
  // Lane: eight people / two glued pairs kept apart / derived, Cal at an end.
  [
    {
      q: 'Nine different people, including Ava, Ben, and Cal, sit in a row of $9$ chairs. Ava and Ben must sit next to each other, and Cal must not sit next to either of them. How many seatings are possible?',
      choices: ['$60480$', '$30240$', '$80640$', '$70560$'],
      answer: 0,
      solution:
        'Glue Ava and Ben into a block. The block, Cal, and the six others are $8$ items, and Cal must not be next to the block: $8! - 2 \\cdot 7! = 40320 - 10080 = 30240$ item orders. The block has $2$ inside orders: $30240 \\cdot 2 = 60480$ ✓. Check a second, independent way by placing the block seat by seat. The block occupies chairs $(k, k+1)$ for $k = 1$ to $8$. If it is at an end of the row ($k = 1$ or $8$), it touches one chair, so Cal has $9 - 2 - 1 = 6$ chairs; otherwise ($6$ placements) it touches two chairs and Cal has $5$. Block-and-Cal placements: $2 \\cdot 6 + 6 \\cdot 5 = 42$. Multiply by the $2$ orders inside the block and the $6! = 720$ orders of the other six: $42 \\cdot 2 \\cdot 720 = 60480$ ✓. (The choice $30240$ is FORGETTING THE TWO ORDERS INSIDE THE BLOCK ✗; the choice $80640$ is IGNORING CAL’S RULE, $2 \\cdot 8!$ ✗; the choice $70560$ is SUBTRACTING THE BLOCK–CAL ADJACENCY ONLY ONCE, $(8! - 7!) \\cdot 2 = 70560$ ✗.)',
    },
    {
      q: 'Seven different people, including Ava, Ben, Cal, and Dee, sit in a row of $7$ chairs. Ava and Ben must sit next to each other, Cal and Dee must sit next to each other, and neither Ava nor Ben may sit next to Cal or Dee. How many seatings are possible?',
      choices: ['$72$', '$480$', '$288$', '$144$'],
      answer: 2,
      solution:
        'Glue each pair into a block. The two blocks and the three others are $5$ items, and the blocks must not be adjacent: $5! - 2 \\cdot 4! = 120 - 48 = 72$ item orders. Each block has $2$ inside orders: $72 \\cdot 2 \\cdot 2 = 288$ ✓. Check a second, independent way by chairs. The Ava-Ben block starts at chair $i$ and the Cal-Dee block at chair $j$, each from $1$ to $6$. The blocks neither overlap nor touch exactly when $|i - j| \\ge 3$: the pairs $(1, 4), (1, 5), (1, 6), (2, 5), (2, 6), (3, 6)$ and their reverses, $12$ placements. Multiply by $2 \\cdot 2$ inside orders and $3! = 6$ for the other three: $12 \\cdot 4 \\cdot 6 = 288$ ✓. (The choice $72$ is FORGETTING BOTH INSIDE ORDERS ✗; the choice $480$ is LETTING THE TWO BLOCKS SIT NEXT TO EACH OTHER, $5! \\cdot 4$ ✗; the choice $144$ is COUNTING THE INSIDE ORDER OF ONLY ONE BLOCK ✗.)',
    },
    {
      q: 'Seven different people, including Ava, Ben, and Cal, sit in a row of $7$ chairs. Ava and Ben must sit next to each other, Cal must not sit next to either of them, and Cal must sit in an end chair. How many seatings are possible?',
      choices: ['$192$', '$384$', '$480$', '$96$'],
      answer: 1,
      solution:
        'Put Cal in the left chair; the right chair gives a mirror-image count, so double at the end. The block cannot use chair $2$, so it occupies chairs $(k, k+1)$ for $k = 3, 4, 5, 6$: $4$ placements, times $2$ inside orders. The other four people fill the four remaining chairs in $4! = 24$ ways: $4 \\cdot 2 \\cdot 24 = 192$, and doubling for Cal at the right end gives $384$ ✓. Check a second, independent way with items. The block, Cal, and the four others are $6$ items. Cal takes the first or last item slot ($2$ ways). The other $5$ items fill the rest in $5! = 120$ orders, of which the $4! = 24$ orders that put the block beside Cal are forbidden: $96$. Multiply by $2$ for Cal’s end and $2$ for the inside order: $96 \\cdot 2 \\cdot 2 = 384$ ✓. (The choice $192$ is COUNTING CAL AT ONLY ONE END ✗; the choice $480$ is DROPPING THE RULE THAT CAL AVOIDS THE BLOCK, $2 \\cdot 5! \\cdot 2$ ✗; the choice $96$ is FORGETTING BOTH THE SECOND END AND THE INSIDE ORDER ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 2,
  challenge,
}
