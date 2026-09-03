// Counting chapter 2 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$16$'.
//  - Every key was brute-forced in node by enumerating the objects (digit
//    strings, dice and spinner tuples, side-length pairs, bit strings, and
//    permutations of labeled people or books) before the stem was written, and
//    every key matches its pin. Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: casework on one digit vs.
//    casework on the other, or casework vs. a complement (slot 1); listing vs.
//    a pairing or divisor argument (slot 2); subtraction vs. a block pattern or
//    a union identity (slot 3); complement vs. a direct binomial sum or a
//    symmetry (slot 4); a slot-by-slot product vs. a complement or a pair
//    count (slot 5); gluing vs. placing the block first (slots 6–7);
//    complement-of-a-complement vs. casework on the number of sixes (slot 8);
//    digit sets vs. casework on the hundreds digit (slot 9); gaps vs. counting
//    patterns (slot 10). The solution then names the most tempting wrong
//    answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: people, books, flowers, and cards
//    are all different; a row has a left end and a right end; "at least" and
//    "at most" include the boundary; a rectangle and the same rectangle turned
//    on its side count once; a three-digit or four-digit integer has no
//    leading zero.

const worksheet = [
  // slot 1 — two-digit integers with a digit inequality.
  //          Lanes: units > 2·tens -> 16; blue die ≥ 2·red -> 9;
  //          reversed: units < 2·tens -> 70.
  [
    {
      q: 'How many two-digit positive integers have a units digit that is more than twice the tens digit?',
      answer: '$16$',
      solution:
        'Case on the tens digit $t$. The units digit must be at least $2t + 1$, so $t \\le 4$. $t = 1$: units $3$ through $9$, $7$ numbers. $t = 2$: units $5$ through $9$, $5$ numbers. $t = 3$: units $7$, $8$, $9$, $3$ numbers. $t = 4$: units $9$ only, $1$ number. Total $7 + 5 + 3 + 1 = 16$ ✓. Second route, casing on the units digit $u$ instead: the tens digit is a positive integer below $\\frac{u}{2}$. $u = 3$ or $4$: tens $1$, one each. $u = 5$ or $6$: tens $1$ or $2$, two each. $u = 7$ or $8$: tens $1$, $2$, $3$, three each. $u = 9$: tens $1$ through $4$, four. Total $1 + 1 + 2 + 2 + 3 + 3 + 4 = 16$ ✓. READING "MORE THAN TWICE" AS "AT LEAST TWICE" lets the units digit equal $2t$, which adds $12$, $24$, $36$, $48$ and gives $20$ ✗.',
    },
    {
      q: 'A red die and a blue die are rolled. In how many of the $36$ possible rolls is the number on the blue die at least twice the number on the red die?',
      answer: '$9$',
      solution:
        'Case on the red die $r$. The blue die must show at least $2r$, so $r \\le 3$. $r = 1$: blue $2$ through $6$, $5$ rolls. $r = 2$: blue $4$, $5$, $6$, $3$ rolls. $r = 3$: blue $6$, $1$ roll. Total $5 + 3 + 1 = 9$ ✓. Second route, casing on the blue die $b$: the red die must show at most $\\frac{b}{2}$. $b = 2$: red $1$. $b = 3$: red $1$. $b = 4$: red $1$ or $2$. $b = 5$: red $1$ or $2$. $b = 6$: red $1$, $2$, or $3$. Total $1 + 1 + 2 + 2 + 3 = 9$ ✓. READING "AT LEAST TWICE" AS "MORE THAN TWICE" throws out the rolls $(1, 2)$, $(2, 4)$, $(3, 6)$ where the blue die is exactly double, giving $6$ ✗.',
    },
    {
      q: 'How many two-digit positive integers have a units digit that is less than twice the tens digit?',
      answer: '$70$',
      solution:
        'Case on the tens digit $t$. The units digit runs from $0$ up to $2t - 1$, but never past $9$. $t = 1$: units $0$ or $1$, $2$ numbers. $t = 2$: units $0$ through $3$, $4$ numbers. $t = 3$: $0$ through $5$, $6$ numbers. $t = 4$: $0$ through $7$, $8$ numbers. $t = 5$ through $9$: every units digit $0$ through $9$ works, $5 \\times 10 = 50$ numbers. Total $2 + 4 + 6 + 8 + 50 = 70$ ✓. Second route, by complement. There are $90$ two-digit integers. The ones that fail have units digit at least $2t$: $t = 1$ gives $8$ of them, $t = 2$ gives $6$, $t = 3$ gives $4$, $t = 4$ gives $2$, and $t \\ge 5$ gives none, so $20$ fail. Then $90 - 20 = 70$ ✓. FORGETTING THAT $0$ IS A LEGAL UNITS DIGIT drops one number from each of the nine tens cases, giving $61$ ✗.',
    },
  ],

  // slot 2 — rectangles with integer sides.
  //          Lanes: perimeter 30 -> 7; area 120 -> 8;
  //          derived: perimeter at most 30 -> 56.
  [
    {
      q: 'How many rectangles with positive integer side lengths have a perimeter of $30$? A rectangle and the same rectangle turned on its side count as one rectangle.',
      answer: '$7$',
      solution:
        'The two side lengths add to $15$. Let $a$ be the shorter side, so $a < 15 - a$ and $a \\le 7$. The rectangles are $1 \\times 14$, $2 \\times 13$, $3 \\times 12$, $4 \\times 11$, $5 \\times 10$, $6 \\times 9$, $7 \\times 8$, which is $7$ ✓. Second route, by pairing. Ordered pairs $(a, b)$ of positive integers with $a + b = 15$: $a$ can be $1$ through $14$, so $14$ pairs. Because $15$ is odd, no pair has $a = b$, so every rectangle appears in exactly two pairs, $(a, b)$ and $(b, a)$. The count is $14 \\div 2 = 7$ ✓. COUNTING $1 \\times 14$ AND $14 \\times 1$ AS DIFFERENT lists all $14$ ordered pairs and gives $14$ ✗.',
    },
    {
      q: 'How many rectangles with positive integer side lengths have an area of $120$? A rectangle and the same rectangle turned on its side count as one rectangle.',
      answer: '$8$',
      solution:
        'List the factor pairs with the smaller factor first: $1 \\times 120$, $2 \\times 60$, $3 \\times 40$, $4 \\times 30$, $5 \\times 24$, $6 \\times 20$, $8 \\times 15$, $10 \\times 12$. The next candidate, $11$, does not divide $120$, and $12 \\times 10$ repeats a pair. That is $8$ rectangles ✓. Second route, through the divisors. $120 = 2^3 \\cdot 3 \\cdot 5$ has $(3 + 1)(1 + 1)(1 + 1) = 16$ positive divisors. Each divisor $d$ gives the rectangle $d \\times \\frac{120}{d}$, and since $120$ is not a perfect square, $d$ and $\\frac{120}{d}$ are always different, so the $16$ divisors pair up into $16 \\div 2 = 8$ rectangles ✓. COUNTING EVERY DIVISOR AS ITS OWN RECTANGLE treats $8 \\times 15$ and $15 \\times 8$ as different and gives $16$ ✗.',
    },
    {
      q: 'How many rectangles with positive integer side lengths have a perimeter of at most $30$? A rectangle and the same rectangle turned on its side count as one rectangle.',
      answer: '$56$',
      solution:
        'Let $s$ be the sum of the two side lengths, so the perimeter is $2s$ and $s$ runs from $2$ to $15$. For a given $s$, the shorter side runs from $1$ to $\\lfloor s/2 \\rfloor$, so there are $\\lfloor s/2 \\rfloor$ rectangles. Adding over $s = 2, 3, \\ldots, 15$: $1 + 1 + 2 + 2 + 3 + 3 + 4 + 4 + 5 + 5 + 6 + 6 + 7 + 7 = 2(1 + 2 + \\cdots + 7) = 56$ ✓. Second route, casing on the shorter side $a$. The longer side $b$ satisfies $a \\le b \\le 15 - a$, which is $16 - 2a$ choices, and $a$ can be at most $7$. So the total is $14 + 12 + 10 + 8 + 6 + 4 + 2 = 56$ ✓. READING "AT MOST $30$" AS "LESS THAN $30$" leaves out the $7$ rectangles with perimeter exactly $30$ and gives $49$ ✗.',
    },
  ],

  // slot 3 — multiples of one number but not another.
  //          Lanes: 1..300 by 4 not 6 -> 50; three-digit by 7 not 3 -> 85;
  //          derived: 1..200 by 3 or 5 but not both -> 80.
  [
    {
      q: 'How many integers from $1$ to $300$, inclusive, are multiples of $4$ but not multiples of $6$?',
      answer: '$50$',
      solution:
        'Multiples of $4$ up to $300$: $300 \\div 4 = 75$. A multiple of $4$ that is also a multiple of $6$ is a multiple of $\\text{lcm}(4, 6) = 12$, and there are $300 \\div 12 = 25$ of those. Subtract: $75 - 25 = 50$ ✓. Second route, block by block. The pattern repeats every $12$ numbers. In $1$ through $12$ the multiples of $4$ are $4$, $8$, $12$, and only $12$ is a multiple of $6$, so each block contributes $2$. There are $300 \\div 12 = 25$ full blocks, giving $25 \\times 2 = 50$ ✓. USING $24$ AS THE COMMON MULTIPLE OF $4$ AND $6$ subtracts only the $12$ multiples of $24$ and gives $75 - 12 = 63$ ✗.',
    },
    {
      q: 'How many three-digit positive integers are multiples of $7$ but not multiples of $3$?',
      answer: '$85$',
      solution:
        'Three-digit multiples of $7$ run from $105$ to $994$: $\\frac{994 - 105}{7} + 1 = 128$. The ones that are also multiples of $3$ are the multiples of $21$, from $105$ to $987$: $\\frac{987 - 105}{21} + 1 = 43$. Subtract: $128 - 43 = 85$ ✓. Second route, by counting up to $999$ and removing the small numbers. From $1$ to $999$: $142$ multiples of $7$ and $47$ multiples of $21$, so $142 - 47 = 95$ are multiples of $7$ but not of $3$. From $1$ to $99$: $14$ multiples of $7$ and $4$ multiples of $21$, so $10$ such numbers. The three-digit ones number $95 - 10 = 85$ ✓. SUBTRACTING ALL $47$ MULTIPLES OF $21$ UP TO $999$ from the $128$ three-digit multiples of $7$ mixes two ranges and gives $81$ ✗.',
    },
    {
      q: 'How many integers from $1$ to $200$, inclusive, are multiples of $3$ or multiples of $5$, but not multiples of both?',
      answer: '$80$',
      solution:
        'Multiples of $3$: $66$. Multiples of $5$: $40$. Multiples of both, meaning of $15$: $13$. Multiples of $3$ but not $5$: $66 - 13 = 53$. Multiples of $5$ but not $3$: $40 - 13 = 27$. Together: $53 + 27 = 80$ ✓. Second route, union minus the overlap. Multiples of at least one of $3$ and $5$: $66 + 40 - 13 = 93$. Among them, the $13$ multiples of $15$ are multiples of both, which the question excludes, so $93 - 13 = 80$ ✓. STOPPING AT THE UNION $66 + 40 - 13 = 93$ keeps the $13$ multiples of $15$ that are multiples of both and gives $93$ ✗.',
    },
  ],

  // slot 4 — two-letter strings with an "at least" condition.
  //          Lanes: 6 letters at least two X -> 57; 5 diners soup/salad -> 25;
  //          derived: 5 letters fewer X than Y -> 16.
  [
    {
      q: 'A string of $6$ letters is formed from the letters X and Y, repeats allowed. How many such strings contain at least two X’s?',
      answer: '$57$',
      solution:
        'All strings: $2^6 = 64$. The complement is "fewer than two X’s": no X at all, which is the single string YYYYYY, or exactly one X, which is $6$ strings, one for each position. Subtract: $64 - 1 - 6 = 57$ ✓. Second route, adding the cases directly. A string with exactly $k$ X’s is fixed by choosing which $k$ of the $6$ positions hold X, so the count is $\\binom{6}{2} + \\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 15 + 20 + 15 + 6 + 1 = 57$ ✓. SUBTRACTING ONLY THE ALL-Y STRING forgets the six strings with exactly one X, which also fall short of two, and gives $63$ ✗.',
    },
    {
      q: 'Five people, all different, each choose either soup or salad. In how many ways can the choices be made so that at least two people choose soup and at least one person chooses salad?',
      answer: '$25$',
      solution:
        'All choice lists: $2^5 = 32$. The bad lists have fewer than two soups or no salad at all: zero soups ($1$ list), exactly one soup ($5$ lists, one for each person), or five soups ($1$ list). Subtract: $32 - 1 - 5 - 1 = 25$ ✓. Second route, by the number of soups. The soup count must be at least $2$ and at most $4$, and a list is fixed by choosing which people take soup: $\\binom{5}{2} + \\binom{5}{3} + \\binom{5}{4} = 10 + 10 + 5 = 25$ ✓. FORGETTING THE ALL-SOUP LIST, which has no salad, subtracts only $6$ from $32$ and gives $26$ ✗.',
    },
    {
      q: 'A string of $5$ letters is formed from the letters X and Y, repeats allowed. How many such strings contain fewer X’s than Y’s?',
      answer: '$16$',
      solution:
        'Five letters split into X’s and Y’s, so fewer X’s means at most $2$ X’s. Strings with $0$, $1$, or $2$ X’s: $\\binom{5}{0} + \\binom{5}{1} + \\binom{5}{2} = 1 + 5 + 10 = 16$ ✓. Second route, by symmetry. Because $5$ is odd, no string has equally many X’s and Y’s, so each of the $2^5 = 32$ strings has either fewer X’s or fewer Y’s. Swapping every X for a Y and every Y for an X matches each string of the first kind with one of the second kind, so the two kinds are equal in size: $32 \\div 2 = 16$ ✓. FORGETTING THE STRING YYYYY, which has zero X’s and so fewer X’s than Y’s, counts only $5 + 10 = 15$ ✗.',
    },
  ],

  // slot 5 — parity-restricted numbers or codes with distinct symbols.
  //          Lanes: odd five-digit distinct -> 13440; A–H codes ending in a consonant -> 1260;
  //          derived: odd four-digit distinct above 5000 -> 1232.
  [
    {
      q: 'How many odd five-digit positive integers have five different digits?',
      answer: '$13440$',
      solution:
        'Units digit first: $5$ odd choices. Ten-thousands digit: not $0$ and not the units digit, $8$ choices. The thousands, hundreds, and tens digits avoid what is used: $8$, $7$, then $6$ choices. Multiply: $5 \\times 8 \\times 8 \\times 7 \\times 6 = 13440$ ✓. Second route, by complement. All five-digit integers with different digits: $9 \\times 9 \\times 8 \\times 7 \\times 6 = 27216$. The even ones: units $0$ gives $9 \\times 8 \\times 7 \\times 6 = 3024$, and units $2$, $4$, $6$, or $8$ gives $4 \\times 8 \\times 8 \\times 7 \\times 6 = 10752$, so $13776$ are even. The odd ones number $27216 - 13776 = 13440$ ✓. FILLING THE FRONT FIRST, $9 \\times 5 \\times 8 \\times 7 \\times 6 = 15120$, pretends the leading digit never uses up one of the five odd digits ✗.',
    },
    {
      q: 'A code is $4$ letters long, uses only the letters A through H, and never repeats a letter. How many codes end in a consonant? (Among A through H, the vowels are A and E.)',
      answer: '$1260$',
      solution:
        'Last letter first: the consonants among A through H are B, C, D, F, G, H, so $6$ choices. The first three letters then avoid what is used: $7 \\times 6 \\times 5 = 210$. Multiply: $6 \\times 210 = 1260$ ✓. Second route, by complement. All $4$-letter codes with no repeat: $8 \\times 7 \\times 6 \\times 5 = 1680$. Codes ending in a vowel: $2$ choices for the last letter, then $7 \\times 6 \\times 5 = 210$, so $420$. Codes ending in a consonant: $1680 - 420 = 1260$ ✓. FILLING THE FRONT FIRST, $8 \\times 7 \\times 6 \\times 6 = 2016$, pretends all six consonants are still free for the last spot after three letters have been used ✗.',
    },
    {
      q: 'How many odd four-digit positive integers greater than $5000$ have four different digits?',
      answer: '$1232$',
      solution:
        'The thousands digit is $5$ through $9$. Case on whether it is odd. Odd thousands digit ($5$, $7$, or $9$): $3$ choices, then $4$ odd choices for the units digit that differ from it, then $8 \\times 7$ for the middle: $3 \\times 4 \\times 56 = 672$. Even thousands digit ($6$ or $8$): $2$ choices, $5$ for the units digit, $8 \\times 7$ for the middle: $2 \\times 5 \\times 56 = 560$. Total $672 + 560 = 1232$ ✓. Second route, by pairing the ends first. Thousands digit $5$ ways and units digit $5$ ways make $25$ pairs, of which $(5, 5)$, $(7, 7)$, $(9, 9)$ repeat a digit, leaving $22$ legal pairs. The middle two digits then have $8 \\times 7 = 56$ choices: $22 \\times 56 = 1232$ ✓. MULTIPLYING $5 \\times 5 \\times 8 \\times 7 = 1400$ ignores that the thousands and units digits can collide on $5$, $7$, or $9$ ✗.',
    },
  ],

  // slot 6 — a fixed end plus a glued block.
  //          Lanes: dictionary right end, 3 atlases together -> 720;
  //          8 first, 123 in order adjacent -> 120;
  //          reversed: atlas left end, cookbooks NOT adjacent -> 480.
  [
    {
      q: 'Eight different books are placed on a shelf. In how many arrangements is the dictionary at the right end and the three atlases next to each other, in any order?',
      answer: '$720$',
      solution:
        'Fix the dictionary at the right end. The other seven books fill the seven spots to its left. Glue the three atlases into one block: that leaves $5$ items to order, $5! = 120$ ways, times $3! = 6$ for the order inside the block. $120 \\times 6 = 720$ ✓. Second route, placing the block first. Among the seven spots left of the dictionary, a block of three consecutive spots can start at spot $1$ through spot $5$, so $5$ placements; the atlases fill it in $3! = 6$ orders; the remaining four books fill the remaining four spots in $4! = 24$ orders. $5 \\times 6 \\times 24 = 720$ ✓. FORGETTING TO ORDER THE ATLASES WITHIN THE BLOCK stops at $5! = 120$ ✗.',
    },
    {
      q: 'The digits $1$ through $8$ are each used exactly once to form an eight-digit number. How many such numbers begin with $8$ and contain the digits $1$, $2$, $3$ next to each other reading $123$ from left to right?',
      answer: '$120$',
      solution:
        'Fix $8$ in the first position. The other seven digits fill positions $2$ through $8$. Glue $1$, $2$, $3$ into a single block whose internal order is fixed as $123$: that leaves $5$ items, the block and the digits $4$, $5$, $6$, $7$, to order in $5! = 120$ ways ✓. Second route, placing the block first. Positions $2$ through $8$ are seven spots; a block of three consecutive spots can start at spot $2$ through spot $6$, so $5$ placements. The digits $4$, $5$, $6$, $7$ then fill the four leftover spots in $4! = 24$ orders. $5 \\times 24 = 120$ ✓. MULTIPLYING BY $3!$ FOR THE ORDER INSIDE THE BLOCK ignores that the stem fixes the order as $123$, giving $720$ ✗.',
    },
    {
      q: 'Seven different books are placed on a shelf. In how many arrangements is the atlas at the left end and the two cookbooks not next to each other?',
      answer: '$480$',
      solution:
        'Fix the atlas at the left end; the other six books fill the six spots to its right in $6! = 720$ ways. The unwanted arrangements have the cookbooks together: glue them, $5! = 120$ orders of the five items, times $2$ for the order inside, so $240$. Subtract: $720 - 240 = 480$ ✓. Second route, by gaps. Ignore the cookbooks and place the other four non-atlas books in the six spots to the right of the atlas: $4! = 24$ orders. These four books create $5$ gaps (before the first, between neighbors, after the last). The two cookbooks take two different gaps, first cookbook $5$ choices and second $4$: $20$. $24 \\times 20 = 480$ ✓. FORGETTING THE $\\times 2$ INSIDE THE GLUED BLOCK subtracts only $120$ and gives $600$ ✗.',
    },
  ],

  // slot 7 — a glued pair plus a third person kept off the ends.
  //          Lanes: 7 campers Uma-Vic adjacent, Wes not at an end -> 960;
  //          8 flowers roses adjacent, sunflower not at an end -> 7200;
  //          derived: 6 people, Ava left of Ben adjacent, Cal not at an end -> 72.
  [
    {
      q: 'Seven campers, including Uma, Vic, and Wes, stand in a row. Uma and Vic must stand next to each other, and Wes must not stand at either end of the row. How many arrangements are possible?',
      answer: '$960$',
      solution:
        'Glue Uma and Vic into a block, leaving $6$ items: the block, Wes, and four others. Because the block is one solid piece, Wes is at an end of the row exactly when he is first or last among the six items. Item orders with Wes at neither end: $6! - 2 \\cdot 5! = 720 - 240 = 480$. Multiply by $2$ for the order inside the block: $960$ ✓. Second route, placing the block first. The block can occupy spots $1$–$2$ through $6$–$7$, $6$ placements, times $2$ for who is on the left. If the block sits at an end ($2$ placements), one end spot is taken and Wes has $4$ of the remaining $5$ spots; the four others fill the rest in $4! = 24$ ways: $2 \\times 2 \\times 4 \\times 24 = 384$. If the block is in the middle ($4$ placements), Wes has $3$ spots: $4 \\times 2 \\times 3 \\times 24 = 576$. Total $384 + 576 = 960$ ✓. FORGETTING THE $\\times 2$ FOR UMA AND VIC SWAPPING stops at $480$ ✗.',
    },
    {
      q: 'Eight different flowers, including two roses and a sunflower, are arranged in a row. The two roses must be next to each other, and the sunflower must not be at either end of the row. How many arrangements are possible?',
      answer: '$7200$',
      solution:
        'Glue the roses into a block, leaving $7$ items. The sunflower is at an end of the row exactly when it is first or last among the seven items, so item orders with the sunflower at neither end: $7! - 2 \\cdot 6! = 5040 - 1440 = 3600$. Multiply by $2$ for the order of the two roses inside the block: $7200$ ✓. Second route, placing the block first. The rose block can occupy spots $1$–$2$ through $7$–$8$, $7$ placements, times $2$ for which rose is on the left. Block at an end ($2$ placements): the sunflower avoids the one free end, $5$ of the $6$ remaining spots, and the five others fill the rest in $5! = 120$ ways: $2 \\times 2 \\times 5 \\times 120 = 2400$. Block in the middle ($5$ placements): the sunflower avoids both ends, $4$ spots: $5 \\times 2 \\times 4 \\times 120 = 4800$. Total $2400 + 4800 = 7200$ ✓. FORGETTING THE $\\times 2$ FOR THE TWO ROSES SWAPPING stops at $3600$ ✗.',
    },
    {
      q: 'Six people, including Ava, Ben, and Cal, sit in a row of six chairs. Ava must sit immediately to the left of Ben, and Cal must not sit in either end chair. How many seatings are possible?',
      answer: '$72$',
      solution:
        'Glue Ava and Ben into a block with Ava on the left, which is now fixed. That leaves $5$ items: the block, Cal, and three others. Cal is in an end chair exactly when he is first or last among the five items, so the count is $5! - 2 \\cdot 4! = 120 - 48 = 72$, with no factor for the inside of the block since its order is fixed ✓. Second route, placing the block first. The block can occupy chairs $1$–$2$ through $5$–$6$, $5$ placements, and its inside order is fixed. Block at an end ($2$ placements): Cal avoids the one free end chair, $3$ of the $4$ remaining chairs; the three others fill the rest in $3! = 6$ ways: $2 \\times 3 \\times 6 = 36$. Block in the middle ($3$ placements): Cal avoids both end chairs, $2$ of $4$: $3 \\times 2 \\times 6 = 36$. Total $36 + 36 = 72$ ✓. MULTIPLYING BY $2$ FOR AVA AND BEN SWAPPING ignores that Ava must be on the left, giving $144$ ✗.',
    },
  ],

  // slot 8 — dice with "at least one 6" and a second condition.
  //          Lanes: 4 dice, a 6 and not all different -> 431;
  //          3 spinners 1–4, a 4 and not all different -> 19;
  //          derived: 3 dice, a 6 and an even sum -> 46.
  [
    {
      q: 'Four dice — red, blue, green, and yellow — are rolled. How many of the $1296$ outcomes show at least one $6$ and do not show four different numbers?',
      answer: '$431$',
      solution:
        'Outcomes with at least one $6$: $1296 - 5^4 = 1296 - 625 = 671$. Among these, the ones with four different numbers have exactly one $6$: choose its die ($4$ ways), then three different non-$6$ values for the other dice in order ($5 \\times 4 \\times 3 = 60$), so $240$. Subtract: $671 - 240 = 431$ ✓. Second route, starting from the repeats. Outcomes with some repeated number: $1296 - 6 \\times 5 \\times 4 \\times 3 = 1296 - 360 = 936$. Of these, the ones with no $6$ use only $1$ through $5$: $625 - 5 \\times 4 \\times 3 \\times 2 = 625 - 120 = 505$. Outcomes with a repeat and a $6$: $936 - 505 = 431$ ✓. SUBTRACTING ALL $360$ FOUR-DIFFERENT OUTCOMES from $671$ removes outcomes that never had a $6$ in the first place and gives $311$ ✗.',
    },
    {
      q: 'Three spinners each have four equal sections numbered $1$ through $4$. Each spinner is spun once, and the result is recorded as an ordered triple (first, second, third). How many of the $64$ outcomes show at least one $4$ and do not show three different numbers?',
      answer: '$19$',
      solution:
        'Outcomes with at least one $4$: $64 - 3^3 = 64 - 27 = 37$. Among these, the ones with three different numbers have exactly one $4$: choose its spinner ($3$ ways), then two different non-$4$ values in order ($3 \\times 2 = 6$), so $18$. Subtract: $37 - 18 = 19$ ✓. Second route, starting from the repeats. Outcomes with some repeated number: $64 - 4 \\times 3 \\times 2 = 40$. Of these, the ones with no $4$ use only $1$, $2$, $3$: $27 - 3 \\times 2 \\times 1 = 21$. Outcomes with a repeat and a $4$: $40 - 21 = 19$ ✓. SUBTRACTING ALL $24$ THREE-DIFFERENT OUTCOMES from $37$ removes outcomes with no $4$ at all and gives $13$ ✗.',
    },
    {
      q: 'Three dice — red, blue, and green — are rolled. How many of the $216$ outcomes show at least one $6$ and have an even sum?',
      answer: '$46$',
      solution:
        'Count even sums, then remove the ones with no $6$. Each die is equally likely even or odd, so exactly half of the $216$ outcomes, $108$, have an even sum. With no $6$, each die shows $1$ through $5$: $3$ odd values and $2$ even. An even sum needs all three even ($2^3 = 8$) or exactly two odd (choose the even die, $3$ ways, then $3 \\times 3 \\times 2 = 18$), so $8 + 54 = 62$. Subtract: $108 - 62 = 46$ ✓. Second route, casing on how many sixes appear. Exactly one $6$: choose its die ($3$ ways); since $6$ is even, the other two dice, each $1$ through $5$, must have an even sum, both odd ($3 \\times 3 = 9$) or both even ($2 \\times 2 = 4$), so $3 \\times 13 = 39$. Exactly two sixes: choose the odd die out ($3$ ways), and it must be even and not $6$, so $2$ values: $6$. Three sixes: $1$. Total $39 + 6 + 1 = 46$ ✓. DROPPING THE TRIPLE-SIX OUTCOME, whose sum $18$ is even, gives $45$ ✗.',
    },
  ],

  // slot 9 — digit products.
  //          Lanes: three-digit product 48 -> 21; four-digit product 6 -> 16;
  //          derived: three-digit product 72 -> 24.
  [
    {
      q: 'How many three-digit positive integers have digits whose product is $48$?',
      answer: '$21$',
      solution:
        'Case on the digit set. $48 = 2^4 \\cdot 3$, and no digit can be $0$. $\\{1, 6, 8\\}$: $3! = 6$ orders. $\\{2, 3, 8\\}$: $6$ orders. $\\{2, 4, 6\\}$: $6$ orders. $\\{3, 4, 4\\}$: $3$ orders. No other set of three digits works: a $5$, $7$, or $9$ never divides $48$, and $1$ pairs only with $6 \\times 8$. Total $6 + 6 + 6 + 3 = 21$ ✓. Second route, casing on the hundreds digit $h$ and counting ordered (tens, units) pairs with product $\\frac{48}{h}$. $h = 1$: product $48$, pairs $(6, 8)$, $(8, 6)$: $2$. $h = 2$: product $24$: $(3, 8)$, $(4, 6)$, $(6, 4)$, $(8, 3)$: $4$. $h = 3$: product $16$: $(2, 8)$, $(4, 4)$, $(8, 2)$: $3$. $h = 4$: product $12$: $4$ pairs. $h = 6$: product $8$: $(1, 8)$, $(2, 4)$, $(4, 2)$, $(8, 1)$: $4$. $h = 8$: product $6$: $4$ pairs. Total $2 + 4 + 3 + 4 + 4 + 4 = 21$ ✓. GIVING $\\{3, 4, 4\\}$ SIX ORDERS as if its digits were all different counts $344$, $434$, $443$ twice each and gives $24$ ✗.',
    },
    {
      q: 'How many four-digit positive integers have digits whose product is $6$?',
      answer: '$16$',
      solution:
        'Case on the digit set. Every digit divides $6$, so digits come from $1$, $2$, $3$, $6$, and there is no $0$. $\\{1, 1, 1, 6\\}$: the $6$ can be in any of $4$ positions, $4$ numbers. $\\{1, 1, 2, 3\\}$: place the $2$ ($4$ ways) then the $3$ ($3$ ways), $12$ numbers. Total $4 + 12 = 16$ ✓. Second route, casing on the thousands digit $t$ and counting three-digit tails with product $\\frac{6}{t}$. $t = 1$: tails with product $6$ are the orders of $\\{1, 1, 6\\}$ ($3$) and of $\\{1, 2, 3\\}$ ($6$), so $9$. $t = 2$: product $3$, orders of $\\{1, 1, 3\\}$: $3$. $t = 3$: product $2$, orders of $\\{1, 1, 2\\}$: $3$. $t = 6$: product $1$, only $111$: $1$. Total $9 + 3 + 3 + 1 = 16$ ✓. TREATING $\\{1, 1, 2, 3\\}$ AS $4! = 24$ ORDERS counts each number twice, once for each way to swap the two $1$’s, and gives $28$ ✗.',
    },
    {
      q: 'How many three-digit positive integers have digits whose product is $72$?',
      answer: '$24$',
      solution:
        'Case on the digit set. $72 = 2^3 \\cdot 3^2$, and no digit can be $0$, $5$, or $7$. $\\{1, 8, 9\\}$: $6$ orders. $\\{2, 4, 9\\}$: $6$ orders. $\\{3, 4, 6\\}$: $6$ orders. $\\{2, 6, 6\\}$: $3$ orders. $\\{3, 3, 8\\}$: $3$ orders. Total $6 + 6 + 6 + 3 + 3 = 24$ ✓. Second route, casing on the hundreds digit $h$ and counting ordered (tens, units) pairs with product $\\frac{72}{h}$. $h = 1$: product $72$: $(8, 9)$, $(9, 8)$: $2$. $h = 2$: product $36$: $(4, 9)$, $(6, 6)$, $(9, 4)$: $3$. $h = 3$: product $24$: $(3, 8)$, $(4, 6)$, $(6, 4)$, $(8, 3)$: $4$. $h = 4$: product $18$: $(2, 9)$, $(3, 6)$, $(6, 3)$, $(9, 2)$: $4$. $h = 6$: product $12$: $(2, 6)$, $(3, 4)$, $(4, 3)$, $(6, 2)$: $4$. $h = 8$: product $9$: $(1, 9)$, $(3, 3)$, $(9, 1)$: $3$. $h = 9$: product $8$: $(1, 8)$, $(2, 4)$, $(4, 2)$, $(8, 1)$: $4$. Total $2 + 3 + 4 + 4 + 4 + 3 + 4 = 24$ ✓. GIVING EVERY DIGIT SET SIX ORDERS double-counts the numbers built from $\\{2, 6, 6\\}$ and $\\{3, 3, 8\\}$ and gives $30$ ✗.',
    },
  ],

  // slot 10 — no two of one kind adjacent, with an end condition.
  //          Lanes: 5 boys 3 girls, boys at both ends -> 2880;
  //          6 red 4 black cards, red at both ends -> 86400;
  //          reversed: 4 boys 3 girls, a girl at at least one end -> 1296.
  [
    {
      q: 'Five boys and three girls, all different people, stand in a row so that a boy stands at each end and no two girls are next to each other. How many arrangements are possible?',
      answer: '$2880$',
      solution:
        'Arrange the boys: $5! = 120$. With boys at both ends, the girls may only use the four gaps between neighboring boys, and no two girls may share a gap, so the three girls take three different gaps: $4 \\times 3 \\times 2 = 24$. Multiply: $120 \\times 24 = 2880$ ✓. Second route, by patterns. Write the row as a string of B’s and G’s. The G’s must avoid positions $1$ and $8$ and never touch, so their positions are three of the four interior gaps between boys: $\\binom{4}{3} = 4$ patterns. Each pattern is filled by the boys in $5! = 120$ ways and the girls in $3! = 6$ ways: $4 \\times 120 \\times 6 = 2880$ ✓. LETTING THE GIRLS USE ALL SIX GAPS, including the two end gaps, gives $120 \\times 6 \\times 5 \\times 4 = 14400$ and ignores the boys-at-both-ends rule ✗.',
    },
    {
      q: 'Six different red cards and four different black cards are laid out in a row so that a red card is at each end and no two black cards are next to each other. How many arrangements are possible?',
      answer: '$86400$',
      solution:
        'Arrange the red cards: $6! = 720$. With red cards at both ends, the black cards may only use the five gaps between neighboring red cards, one black card per gap: $5 \\times 4 \\times 3 \\times 2 = 120$. Multiply: $720 \\times 120 = 86400$ ✓. Second route, by patterns. The black positions are four of the five interior gaps, $\\binom{5}{4} = 5$ patterns. Each pattern is filled by the red cards in $6! = 720$ ways and the black cards in $4! = 24$ ways: $5 \\times 720 \\times 24 = 86400$ ✓. LETTING THE BLACK CARDS USE ALL SEVEN GAPS, including the two ends, gives $720 \\times 7 \\times 6 \\times 5 \\times 4 = 604800$ ✗.',
    },
    {
      q: 'Four boys and three girls, all different people, stand in a row so that no two girls are next to each other and a girl stands at at least one end of the row. How many arrangements are possible?',
      answer: '$1296$',
      solution:
        'Count all no-two-girls-adjacent rows, then remove the ones with a boy at each end. Arrange the boys, $4! = 24$; the girls take three of the five gaps around and between them, $5 \\times 4 \\times 3 = 60$; so $24 \\times 60 = 1440$ rows in all. With a boy at each end, the girls use only the three interior gaps, $3! = 6$ ways, so $24 \\times 6 = 144$ rows. Subtract: $1440 - 144 = 1296$ ✓. Second route, by patterns. Number the five gaps $0$ through $4$, with gaps $0$ and $4$ the two ends. The girls choose three gaps including gap $0$ or gap $4$ or both: $\\binom{5}{3} - \\binom{3}{3} = 10 - 1 = 9$ patterns. Each pattern is filled in $4! \\times 3! = 144$ ways: $9 \\times 144 = 1296$ ✓. ADDING "GIRL AT THE LEFT END" TO "GIRL AT THE RIGHT END" WITHOUT SUBTRACTING THE OVERLAP counts $\\binom{4}{2} + \\binom{4}{2} = 12$ patterns instead of $9$ and gives $1728$ ✗.',
    },
  ],
]

export default { book: 'intro-counting', number: 2, worksheet }
