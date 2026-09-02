// Counting chapter 1 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$94$'.
//  - Every key was brute-forced in node by enumerating the objects (lists,
//    digit strings, permutations of labeled people) before the stem was
//    written, and every key matches its pin. Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: the endpoint formula vs. a
//    shift to a list starting at $1$ (slots 1–3); inclusion-exclusion vs. a
//    block-by-block or complementary count (slot 4); the union identity vs. an
//    "only" count (slot 5); a slot-by-slot product vs. a permutation formula or
//    a complement (slot 6); cancelling factorials vs. plain arithmetic or a
//    factorization (slot 7); constructive placement vs. a probability or
//    complementary count (slots 8–10). The solution then names the most
//    tempting wrong answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: people, trophies, and digits are
//    all different; "row" means order matters; digit strings are positive
//    integers with no leading zero unless the stem says a code; "between" is
//    strict, "from … to" and "through" include both ends.

const worksheet = [
  // slot 1 — counting a block of consecutive integers.
  //          Lanes: 44..137 -> 94; garage 116..261 -> 146;
  //          reversed: 64 members ending at 210 -> first is 147.
  [
    {
      q: 'How many integers are in the list $44, 45, 46, \\ldots, 137$?',
      answer: '$94$',
      solution:
        'Fence posts, not gaps. From $44$ to $137$ there are $137 - 44 = 93$ steps, and a walk of $93$ steps touches $93 + 1 = 94$ posts, so the list has $94$ integers ✓. Second route, by shifting the list. Subtract $43$ from every entry: $44 - 43 = 1$, $45 - 43 = 2$, and so on up to $137 - 43 = 94$. The shifted list is $1, 2, 3, \\ldots, 94$, which plainly has $94$ members, and shifting does not change how many there are ✓. STOPPING AT THE SUBTRACTION $137 - 44 = 93$ counts the gaps between the numbers instead of the numbers themselves and drops the first entry, giving $93$ ✗.',
    },
    {
      q: 'A parking garage numbers its spaces $116$ through $261$, using every whole number in between and skipping none. How many spaces does the garage have?',
      answer: '$146$',
      solution:
        'Endpoint formula: a run of consecutive integers from $a$ to $b$ has $b - a + 1$ members, so the garage has $261 - 116 + 1 = 146$ spaces ✓. Second route, by taking away a prefix. The integers $1$ through $261$ number exactly $261$. The garage skips the integers $1$ through $115$, which number exactly $115$. What remains is $261 - 115 = 146$ spaces ✓. WRITING $261 - 116 = 145$ AND STOPPING forgets that both endpoints are real spaces; the difference counts the steps between space $116$ and space $261$, one fewer than the spaces themselves, giving $145$ ✗.',
    },
    {
      q: 'A list of consecutive integers ends at $210$ and has exactly $64$ members. What is the first number in the list?',
      answer: '$147$',
      solution:
        'Walk backward. The list has $64$ members, so from the last member to the first is $64 - 1 = 63$ steps of $1$. Starting at $210$ and stepping back $63$ lands on $210 - 63 = 147$ ✓. Second route, by solving the count formula. If the first number is $a$, the list $a, a+1, \\ldots, 210$ has $210 - a + 1 = 211 - a$ members. Setting $211 - a = 64$ gives $a = 147$. Check: the list $147, 148, \\ldots, 210$ shifted down by $146$ is $1, 2, \\ldots, 64$, exactly $64$ members ✓. SUBTRACTING THE FULL COUNT, $210 - 64 = 146$, steps back $64$ times when only $63$ steps separate the first member from the last, so it overshoots by one and gives $146$ ✗.',
    },
  ],

  // slot 2 — counting an arithmetic list.
  //          Lanes: 13,21,...,373 step 8 -> 46; blinks 10,22,...,658 step 12 -> 55;
  //          reversed: 41 numbers from 3 to 563 -> step 14.
  [
    {
      q: 'How many numbers are in the list $13, 21, 29, \\ldots, 373$?',
      answer: '$46$',
      solution:
        'The step is $21 - 13 = 8$. From $13$ to $373$ is a span of $373 - 13 = 360$, which is $360 \\div 8 = 45$ steps of $8$, and $45$ steps touch $45 + 1 = 46$ numbers ✓. Second route, by turning the list into $1, 2, 3, \\ldots$. Subtract $5$ from every entry to get $8, 16, 24, \\ldots, 368$, every entry now a multiple of $8$. Divide every entry by $8$ to get $1, 2, 3, \\ldots, 46$. Neither move changes how many numbers there are, so the original list has $46$ numbers ✓. REPORTING THE NUMBER OF STEPS, $360 \\div 8 = 45$, counts the jumps between neighbors and misses the number $13$ at the start, giving $45$ ✗.',
    },
    {
      q: 'A warning light blinks at $10$ seconds, again at $22$ seconds, again at $34$ seconds, and so on, blinking every $12$ seconds. Its last blink is at $658$ seconds. How many times does the light blink in all?',
      answer: '$55$',
      solution:
        'The blink times form the list $10, 22, 34, \\ldots, 658$ with step $12$. The span from the first blink to the last is $658 - 10 = 648$ seconds, which is $648 \\div 12 = 54$ gaps of $12$ seconds, and $54$ gaps sit between $54 + 1 = 55$ blinks ✓. Second route, by shifting to a list that starts at $0$. Subtract $10$ from every time: $0, 12, 24, \\ldots, 648$. Divide by $12$: $0, 1, 2, \\ldots, 54$. A list that starts at $0$ and ends at $54$ has $55$ members, one more than its last entry, so the light blinks $55$ times ✓. DIVIDING $648$ BY $12$ AND STOPPING at $54$ counts the twelve-second gaps and forgets the blink at $10$ seconds that opens the first gap, giving $54$ ✗.',
    },
    {
      q: 'An arithmetic list of $41$ numbers starts at $3$ and ends at $563$, climbing by the same amount from each number to the next. What is that amount?',
      answer: '$14$',
      solution:
        'Count the gaps, not the numbers. A list of $41$ numbers has $41 - 1 = 40$ gaps between neighbors, and those $40$ equal gaps together span $563 - 3 = 560$. Each gap is $560 \\div 40 = 14$ ✓. Second route, by writing the last term with the step as an unknown. With first term $3$ and step $d$, the $n$th term is $3 + (n - 1)d$, so the $41$st term is $3 + 40d$. Setting $3 + 40d = 563$ gives $40d = 560$ and $d = 14$. Check by rebuilding: $3, 17, 31, \\ldots$ shifted down by $3$ is $0, 14, 28, \\ldots$, and divided by $14$ is $0, 1, \\ldots, 40$, which is $41$ numbers ending at $3 + 40 \\cdot 14 = 563$ ✓. DIVIDING THE SPAN BY THE NUMBER OF TERMS, $560 \\div 41$, uses $41$ gaps when there are only $40$; it gives $13.65\\ldots$, which is not even a whole number ✗.',
    },
  ],

  // slot 3 — an arithmetic list with one endpoint unknown.
  //          Lanes: 33 numbers from 4 step 9 -> 292; 25 numbers step 8 ending at 250 -> 58;
  //          reversed: count 14,23,...,356 -> 39.
  [
    {
      q: 'The list $4, 13, 22, \\ldots, m$ climbs by $9$ each time and contains exactly $33$ numbers. What is $m$?',
      answer: '$292$',
      solution:
        'The first number is $4$, and after it come $33 - 1 = 32$ jumps of $9$ before the list stops. So $m = 4 + 32 \\cdot 9 = 4 + 288 = 292$ ✓. Second route, through the shifted list. Subtract $4$ from every entry to get $0, 9, 18, \\ldots, m - 4$, then divide by $9$ to get $0, 1, 2, \\ldots, \\frac{m-4}{9}$. A list from $0$ to $k$ has $k + 1$ members, so $\\frac{m-4}{9} + 1 = 33$, which gives $\\frac{m-4}{9} = 32$ and $m = 9 \\cdot 32 + 4 = 292$ ✓. USING $33$ JUMPS INSTEAD OF $32$, as in $4 + 33 \\cdot 9 = 301$, adds a jump for the first number even though the first number is where the jumping starts; the list $4, 13, \\ldots, 301$ has $34$ numbers, one too many, so $301$ ✗.',
    },
    {
      q: 'An arithmetic list of $25$ numbers climbs by $8$ from each number to the next and ends at $250$. What is the first number in the list?',
      answer: '$58$',
      solution:
        'Walk backward from the end. A list of $25$ numbers has $24$ jumps, so the first number sits $24$ jumps of $8$ below the last: $250 - 24 \\cdot 8 = 250 - 192 = 58$ ✓. Second route, by solving for the unknown start. Call the first number $a$. The list $a, a + 8, \\ldots, 250$ shifted down by $a$ is $0, 8, \\ldots, 250 - a$, and divided by $8$ is $0, 1, \\ldots, \\frac{250 - a}{8}$, which has $\\frac{250 - a}{8} + 1$ members. Setting this equal to $25$ gives $250 - a = 192$, so $a = 58$. Check: $58, 66, 74, \\ldots$ all leave remainder $2$ when divided by $8$, and so does $250 = 31 \\cdot 8 + 2$, so $250$ is on the list ✓. STEPPING BACK $25$ TIMES, $250 - 25 \\cdot 8 = 50$, treats the count of numbers as the count of jumps; the list $50, 58, \\ldots, 250$ has $26$ numbers, so $50$ ✗.',
    },
    {
      q: 'How many numbers are in the list $14, 23, 32, \\ldots, 356$?',
      answer: '$39$',
      solution:
        'The step is $23 - 14 = 9$. The span $356 - 14 = 342$ is $342 \\div 9 = 38$ jumps of $9$, and $38$ jumps connect $38 + 1 = 39$ numbers ✓. Second route, by shifting to $1, 2, 3, \\ldots$. Subtract $5$ from every entry: $9, 18, 27, \\ldots, 351$. Divide by $9$: $1, 2, 3, \\ldots, 39$. So the list has $39$ numbers ✓. STOPPING AT $342 \\div 9 = 38$ counts the jumps and leaves out the starting number $14$, giving $38$ ✗.',
    },
  ],

  // slot 4 — neither / exactly one, by inclusion-exclusion.
  //          Lanes: 1..140 neither 5 nor 8 -> 98; three-digit neither 5 nor 8 -> 630;
  //          derived: 1..126 exactly one of 6, 7 -> 33.
  [
    {
      q: 'How many integers from $1$ to $140$, inclusive, are multiples of neither $5$ nor $8$?',
      answer: '$98$',
      solution:
        'Count the multiples and subtract. Multiples of $5$ up to $140$: $140 \\div 5 = 28$. Multiples of $8$: $8, 16, \\ldots, 136$, which is $17$. Multiples of both, meaning multiples of $40$: $40, 80, 120$, which is $3$. Multiples of at least one: $28 + 17 - 3 = 42$. Multiples of neither: $140 - 42 = 98$ ✓. Second route, block by block. The pattern of multiples repeats every $40$ numbers. In $1$ to $40$ there are $8$ multiples of $5$, $5$ multiples of $8$, and $1$ multiple of both, so $8 + 5 - 1 = 12$ hit and $40 - 12 = 28$ miss. Three full blocks cover $1$ to $120$ and contribute $3 \\cdot 28 = 84$. The leftover $121$ to $140$ matches $1$ to $20$: $4$ multiples of $5$, $2$ multiples of $8$, none of both, so $6$ hit and $14$ miss. Total $84 + 14 = 98$ ✓. SUBTRACTING $28 + 17 = 45$ WITHOUT ADDING BACK the $3$ multiples of $40$ removes $40$, $80$, $120$ twice each and gives $140 - 45 = 95$ ✗.',
    },
    {
      q: 'How many three-digit positive integers are divisible by neither $5$ nor $8$?',
      answer: '$630$',
      solution:
        'There are $900$ three-digit integers, $100$ through $999$. Multiples of $5$ among them: $100, 105, \\ldots, 995$, which is $\\frac{995 - 100}{5} + 1 = 180$. Multiples of $8$: $104, 112, \\ldots, 992$, which is $\\frac{992 - 104}{8} + 1 = 112$. Multiples of both, meaning multiples of $40$: $120, 160, \\ldots, 960$, which is $\\frac{960 - 120}{40} + 1 = 22$. Divisible by at least one: $180 + 112 - 22 = 270$. Divisible by neither: $900 - 270 = 630$ ✓. Second route, by counting up to $999$ and removing everything below $100$. From $1$ to $999$: $199$ multiples of $5$, $124$ multiples of $8$, and $24$ multiples of $40$, so $999 - (199 + 124 - 24) = 999 - 299 = 700$ are divisible by neither. From $1$ to $99$: $19$ multiples of $5$, $12$ multiples of $8$, and $2$ multiples of $40$, so $99 - (19 + 12 - 2) = 99 - 29 = 70$ are divisible by neither. Three-digit answer: $700 - 70 = 630$ ✓. FORGETTING TO ADD BACK THE MULTIPLES OF $40$ subtracts $180 + 112 = 292$ and gives $900 - 292 = 608$, which has thrown out each of the $22$ multiples of $40$ twice ✗.',
    },
    {
      q: 'How many integers from $1$ to $126$, inclusive, are multiples of exactly one of the numbers $6$ and $7$?',
      answer: '$33$',
      solution:
        'Multiples of $6$ up to $126$: $126 \\div 6 = 21$. Multiples of $7$: $126 \\div 7 = 18$. Multiples of both, meaning of $42$: $42, 84, 126$, which is $3$. "Exactly one" means a multiple of $6$ but not $7$, or of $7$ but not $6$: $(21 - 3) + (18 - 3) = 18 + 15 = 33$ ✓. Second route, union minus overlap. Multiples of at least one of $6$ and $7$: $21 + 18 - 3 = 36$. Of those $36$, the ones that are multiples of both, namely $42$, $84$, and $126$, are multiples of two, not exactly one, so remove them: $36 - 3 = 33$ ✓. STOPPING AT THE UNION $21 + 18 - 3 = 36$ keeps $42$, $84$, and $126$, which are multiples of both $6$ and $7$ and so fail "exactly one", giving $36$ ✗.',
    },
  ],

  // slot 5 — two overlapping groups; solve for the overlap.
  //          Lanes: 42 students, hockey 25, drama 20, neither 9 -> 12;
  //          70 houses, garage 41, porch 36, neither 10 -> 17;
  //          reversed: class of 33, math 24, art 19, nobody neither -> 10.
  [
    {
      q: 'In a class of $42$ students, $25$ play hockey, $20$ are in the drama club, and $9$ do neither. How many students both play hockey and are in the drama club?',
      answer: '$12$',
      solution:
        'First find how many do at least one activity: $42 - 9 = 33$. Adding the two group sizes, $25 + 20 = 45$, counts every student in both groups twice, so the excess over $33$ is exactly the overlap: $45 - 33 = 12$ students do both ✓. Second route, through the hockey-only students. Of the $33$ students who do at least one activity, $20$ are in drama; the other $33 - 20 = 13$ do hockey but not drama. Hockey has $25$ players in all, and $13$ of them are hockey-only, so the remaining $25 - 13 = 12$ are also in drama ✓. Check the four pieces: $13$ hockey-only, $12$ both, $20 - 12 = 8$ drama-only, $9$ neither, and $13 + 12 + 8 + 9 = 42$. IGNORING THE $9$ WHO DO NEITHER and computing $25 + 20 - 42 = 3$ compares the double count against the whole class instead of against the $33$ who are in a group at all, giving $3$ ✗.',
    },
    {
      q: 'On a street of $70$ houses, $41$ have a garage, $36$ have a porch, and $10$ have neither. How many houses have both a garage and a porch?',
      answer: '$17$',
      solution:
        'Houses with at least one feature: $70 - 10 = 60$. The sum $41 + 36 = 77$ counts the garage-and-porch houses twice, so the overlap is $77 - 60 = 17$ ✓. Second route, through the garage-only houses. Among the $60$ houses with at least one feature, $36$ have a porch, so $60 - 36 = 24$ have a garage and no porch. Since $41$ houses have a garage and $24$ of those have no porch, the other $41 - 24 = 17$ have both ✓. Check: $24$ garage-only, $17$ both, $36 - 17 = 19$ porch-only, $10$ neither, and $24 + 17 + 19 + 10 = 70$. SUBTRACTING THE WHOLE STREET, $41 + 36 - 70 = 7$, forgets that the $10$ featureless houses were never in either group, so it undercounts the overlap by $10$ and gives $7$ ✗.',
    },
    {
      q: 'In a class of $33$ students, $24$ like math and $19$ like art, and every student likes at least one of the two. How many students like both?',
      answer: '$10$',
      solution:
        'Since nobody likes neither, all $33$ students are in at least one group. The sum $24 + 19 = 43$ counts the both-students twice, so the overlap is $43 - 33 = 10$ ✓. Second route, through the math-only students. Everyone is in a group, and $19$ like art, so the $33 - 19 = 14$ others like math but not art. Math has $24$ fans, $14$ of whom are math-only, so $24 - 14 = 10$ like both ✓. Check: $14$ math-only, $10$ both, $19 - 10 = 9$ art-only, and $14 + 10 + 9 = 33$. REPORTING THE MATH-ONLY COUNT $33 - 19 = 14$ answers a different question; those $14$ are the students who like math and not art, not the students who like both, so $14$ ✗.',
    },
  ],

  // slot 6 — four-digit numbers from a restricted digit set, no repeats.
  //          Lanes: digits from {2,3,5,7} -> 24; code from 3-9 -> 840;
  //          derived: odd digits, distinct, > 5000 -> 72.
  [
    {
      q: 'How many four-digit positive integers have four different digits, every one of them a prime digit ($2$, $3$, $5$, or $7$)?',
      answer: '$24$',
      solution:
        'Fill the places left to right. The thousands digit is any of the $4$ prime digits, the hundreds digit any of the $3$ not yet used, the tens digit any of the remaining $2$, and the units digit is the last one left: $4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$ ✓. Second route, by listing and symmetry. There are exactly four prime digits and the number needs four different ones, so every such number uses each of $2, 3, 5, 7$ exactly once. The ones that start with $2$ are $2357, 2375, 2537, 2573, 2735, 2753$: six of them. Nothing singles out $2$ as a leading digit, so each of the four prime digits leads exactly six such numbers, and there are $4 \\cdot 6 = 24$ in all ✓. ALLOWING REPEATS, as in $4 \\cdot 4 \\cdot 4 \\cdot 4 = 256$, counts numbers like $2255$ and $7777$ whose digits are not all different, giving $256$ ✗.',
    },
    {
      q: 'A four-digit code uses four different digits, each chosen from $3, 4, 5, 6, 7, 8, 9$. How many such codes are there?',
      answer: '$840$',
      solution:
        'Seven digits are available. The first position has $7$ choices, the second $6$ (one digit is used up), the third $5$, and the fourth $4$: $7 \\cdot 6 \\cdot 5 \\cdot 4 = 840$ ✓. Second route, by the permutation formula. Choosing $4$ of $7$ different symbols and putting them in order is $\\frac{7!}{(7-4)!} = \\frac{7!}{3!} = \\frac{5040}{6} = 840$ ✓. LETTING DIGITS REPEAT, as in $7^4 = 2401$, counts codes such as $3388$ that reuse a digit, giving $2401$ ✗.',
    },
    {
      q: 'How many four-digit positive integers have four different digits, all of them odd, and are greater than $5000$?',
      answer: '$72$',
      solution:
        'The odd digits are $1, 3, 5, 7, 9$. To exceed $5000$ with an odd thousands digit, that digit must be $5$, $7$, or $9$: $3$ choices. The remaining three places take three different digits from the four odd digits left over, in $4 \\cdot 3 \\cdot 2 = 24$ ways. Total $3 \\cdot 24 = 72$ ✓. Second route, by symmetry and subtraction. Four-digit numbers with four different odd digits, no size restriction: $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$. Each of the five odd digits leads the same number of these, so $120 \\div 5 = 24$ start with $1$ and $24$ start with $3$; those $48$ are the ones below $5000$. The rest, $120 - 48 = 72$, are greater than $5000$ ✓. TAKING "GREATER THAN $5000$" AS FIVE CHOICES FOR THE THOUSANDS DIGIT, $5, 6, 7, 8, 9$, forgets that $6$ and $8$ are even; it gives $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$ ✗.',
    },
  ],

  // slot 7 — factorial arithmetic.
  //          Lanes: 12!/10! -> 132; (9! - 8!)/8! -> 8; reversed: n!/(n-3)! = 3360 -> 16.
  [
    {
      q: 'What is the value of $\\frac{12!}{10!}$?',
      answer: '$132$',
      solution:
        'Cancel the common tail. Since $12! = 12 \\cdot 11 \\cdot 10!$, dividing by $10!$ leaves $12 \\cdot 11 = 132$ ✓. Second route, by computing both factorials outright. $10! = 3{,}628{,}800$, and $12! = 12 \\cdot 11 \\cdot 3{,}628{,}800 = 479{,}001{,}600$. Then $479{,}001{,}600 \\div 3{,}628{,}800 = 132$ ✓. CANCELLING ONE FACTOR TOO FEW, as if the denominator were $9!$, leaves $12 \\cdot 11 \\cdot 10 = 1320$ ✗.',
    },
    {
      q: 'What is the value of $\\frac{9! - 8!}{8!}$?',
      answer: '$8$',
      solution:
        'Factor the numerator. Since $9! = 9 \\cdot 8!$, the numerator is $9 \\cdot 8! - 1 \\cdot 8! = 8 \\cdot 8!$, and dividing by $8!$ leaves $8$ ✓. Second route, by plain arithmetic. $8! = 40{,}320$ and $9! = 362{,}880$, so the numerator is $362{,}880 - 40{,}320 = 322{,}560$, and $322{,}560 \\div 40{,}320 = 8$ ✓. DROPPING THE SUBTRACTED $8!$ and computing only $\\frac{9!}{8!} = 9$ forgets that the numerator is one $8!$ short of a full $9!$, giving $9$ ✗.',
    },
    {
      q: 'For which positive integer $n$ is $\\frac{n!}{(n-3)!} = 3360$?',
      answer: '$16$',
      solution:
        'Cancel first. $n! = n(n-1)(n-2) \\cdot (n-3)!$, so $\\frac{n!}{(n-3)!} = n(n-1)(n-2)$, a product of three consecutive integers. The cube root of $3360$ is a little under $15$, so the three factors sit near $15$: $16 \\cdot 15 \\cdot 14 = 3360$, and $n = 16$ ✓. Second route, by factoring $3360$. $3360 = 2^5 \\cdot 3 \\cdot 5 \\cdot 7$. Three consecutive integers with this product must include the multiple of $7$ and the multiple of $5$ as different factors, and the powers of $2$ force $16 = 2^4$ in as well: $14 \\cdot 15 \\cdot 16 = (2 \\cdot 7)(3 \\cdot 5)(2^4) = 2^5 \\cdot 3 \\cdot 5 \\cdot 7$. The largest of the three is $n = 16$ ✓. REPORTING THE SMALLEST FACTOR, $14$, mistakes $n - 2$ for $n$; with $n = 14$ the quotient would be $14 \\cdot 13 \\cdot 12 = 2184$, so $14$ ✗.',
    },
  ],

  // slot 8 — rows with people pinned to the ends.
  //          Lanes: 8 friends, Ola and Pim at the two ends -> 1440;
  //          5 trophies, tallest left, shortest right -> 6;
  //          derived: 7 friends, neither Raj nor Sol at an end -> 2400.
  [
    {
      q: 'Eight friends, including Ola and Pim, stand in a row for a photo. Ola must be at one end of the row and Pim at the other end. How many different rows are possible?',
      answer: '$1440$',
      solution:
        'Place the restricted people first. Either Ola takes the left end and Pim the right, or Pim takes the left end and Ola the right: $2$ ways. The six other friends then fill the six middle spots in any order, $6! = 720$ ways. Total $2 \\cdot 720 = 1440$ ✓. Second route, by probability. Rows with Ola at an end: $2$ choices of end for Ola, then $7! = 5040$ orders for everyone else, so $10{,}080$ rows. In those rows the far end is one of the $7$ remaining positions, all equally likely for Pim, so Pim is at the far end in $\\frac{1}{7}$ of them: $10{,}080 \\div 7 = 1440$ ✓. FIXING OLA ON THE LEFT AND PIM ON THE RIGHT ONLY, $6! = 720$, forgets that the two of them can swap ends, giving $720$ ✗.',
    },
    {
      q: 'Five trophies of five different heights are placed in a row on a shelf. The tallest trophy must be at the left end and the shortest at the right end. How many arrangements are possible?',
      answer: '$6$',
      solution:
        'The tallest trophy has exactly one allowed spot and so does the shortest, so those two are fixed. The three middle trophies can be arranged in the three middle spots in any order: $3 \\cdot 2 \\cdot 1 = 6$ ✓. Second route, by thinning out all arrangements. Five different trophies can be ordered in $5! = 120$ ways. In exactly $\\frac{1}{5}$ of them the tallest is at the left end, leaving $24$; among those, the shortest is equally likely to sit in any of the $4$ other spots, so it is at the right end in $\\frac{1}{4}$ of them, leaving $24 \\div 4 = 6$ ✓. LETTING THE TALLEST AND SHORTEST SWAP ENDS, $2 \\cdot 3! = 12$, ignores that the stem names which end each one gets, giving $12$ ✗.',
    },
    {
      q: 'Seven friends, including Raj and Sol, line up in a row. Neither Raj nor Sol may stand at either end of the row. How many lineups are possible?',
      answer: '$2400$',
      solution:
        'Fill the ends first, since they carry the restriction. The left end must be one of the $5$ friends other than Raj and Sol, and the right end one of the $4$ of those not yet used: $5 \\cdot 4 = 20$ ways. Then all five remaining people, Raj and Sol included, fill the five middle spots in $5! = 120$ ways. Total $20 \\cdot 120 = 2400$ ✓. Second route, complementary counting. All lineups: $7! = 5040$. Lineups with Raj at an end: $2 \\cdot 6! = 1440$; with Sol at an end: also $1440$; with both at ends: $2 \\cdot 5! = 240$. Lineups with at least one of them at an end: $1440 + 1440 - 240 = 2640$. Lineups with neither at an end: $5040 - 2640 = 2400$ ✓. SUBTRACTING BOTH "AT AN END" COUNTS WITHOUT ADDING BACK THE OVERLAP, $5040 - 1440 - 1440 = 2160$, removes the $240$ lineups with Raj and Sol at the two ends twice, giving $2160$ ✗.',
    },
  ],

  // slot 9 — digit strings with a prescribed number of zeros.
  //          Lanes: four-digit exactly one 0 -> 2187; four-digit exactly one 0, all
  //          digits different -> 1512; derived: three-digit at least one 0 -> 171.
  [
    {
      q: 'How many four-digit positive integers contain exactly one digit equal to $0$?',
      answer: '$2187$',
      solution:
        'The $0$ cannot lead, so it sits in the hundreds, tens, or units place: $3$ choices of position. Each of the other three places holds a nonzero digit, $9$ choices apiece: $9 \\cdot 9 \\cdot 9 = 729$. Total $3 \\cdot 729 = 2187$ ✓. Second route, by peeling off the other zero counts. Four-digit integers with no $0$ at all: $9^4 = 6561$, so $9000 - 6561 = 2439$ contain at least one $0$. Of these, exactly two zeros: choose $2$ of the $3$ non-leading places for the zeros and fill the other two places with nonzero digits, $3 \\cdot 81 = 243$; exactly three zeros: only the leading digit is nonzero, $9$ numbers. Exactly one zero: $2439 - 243 - 9 = 2187$ ✓. LETTING THE $0$ TAKE ANY OF THE FOUR PLACES, $4 \\cdot 9^3 = 2916$, counts strings like $0473$ that are not four-digit integers, giving $2916$ ✗.',
    },
    {
      q: 'A four-digit positive integer has four different digits, and one of those digits is $0$. How many such integers are there?',
      answer: '$1512$',
      solution:
        'Place the $0$ in one of the three non-leading positions: $3$ ways. The other three places take three different nonzero digits in order: $9 \\cdot 8 \\cdot 7 = 504$ ways. Total $3 \\cdot 504 = 1512$ ✓. Second route, by subtraction. Four-digit integers with four different digits: $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. Those with four different digits and no $0$ anywhere: $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$. A number with distinct digits cannot contain two zeros, so "at least one $0$" and "exactly one $0$" mean the same thing here: $4536 - 3024 = 1512$ ✓. ALLOWING THE $0$ IN ALL FOUR POSITIONS, $4 \\cdot 504 = 2016$, counts leading-zero strings such as $0928$, giving $2016$ ✗.',
    },
    {
      q: 'How many three-digit positive integers contain at least one digit equal to $0$?',
      answer: '$171$',
      solution:
        'Complementary counting. There are $900$ three-digit integers. Those with no $0$ at all have three nonzero digits: $9 \\cdot 9 \\cdot 9 = 729$. So $900 - 729 = 171$ contain at least one $0$ ✓. Second route, by cases on how many zeros. Exactly one $0$: it sits in the tens or units place ($2$ choices) and the other two digits are nonzero, $2 \\cdot 9 \\cdot 9 = 162$. Exactly two zeros: both non-leading places are $0$ and the hundreds digit is any of $9$, giving the $9$ numbers $100, 200, \\ldots, 900$. Total $162 + 9 = 171$ ✓. STOPPING AT THE EXACTLY-ONE-ZERO CASE, $162$, forgets the nine numbers $100, 200, \\ldots, 900$ that hold two zeros, giving $162$ ✗.',
    },
  ],

  // slot 10 — permutations of a fixed digit set with interacting first/last restrictions.
  //          Lanes: digits 2-7, even and > 300000 -> 312;
  //          digits 1-6, divisible by 4 with odd lead -> 108;
  //          derived: digits 1-5, odd and < 40000 -> 42.
  [
    {
      q: 'The digits $2, 3, 4, 5, 6, 7$ are each used exactly once to form a six-digit number. How many of these numbers are even and greater than $300{,}000$?',
      answer: '$312$',
      solution:
        'The last digit must be even and the first digit must not be $2$, and the two restrictions interact because $2$ is even. Split on the last digit. Last digit $2$: the first digit can be any of the $5$ remaining digits, all of them at least $3$, then the middle four digits arrange in $4! = 24$ ways, giving $5 \\cdot 24 = 120$. Last digit $4$: the first digit is one of $3, 5, 6, 7$ ($4$ choices), then $24$, giving $96$. Last digit $6$: likewise $96$. Total $120 + 96 + 96 = 312$ ✓. Second route, complementary. Even numbers with no size restriction: $3$ choices for the last digit, then $5! = 120$ for the rest, so $360$. The even numbers that fail to exceed $300{,}000$ are exactly those starting with $2$: the last digit is then $4$ or $6$ ($2$ choices) and the middle four digits arrange in $24$ ways, so $48$. Even and greater than $300{,}000$: $360 - 48 = 312$ ✓. TREATING THE TWO ENDS AS INDEPENDENT, $5 \\cdot 3 \\cdot 4! = 360$, lets the first digit be $2$ while the last digit is also $2$ and misses that a leading $2$ steals an even digit from the last place, giving $360$ ✗.',
    },
    {
      q: 'The digits $1, 2, 3, 4, 5, 6$ are each used exactly once to form a six-digit number. How many of these numbers are divisible by $4$ and have an odd first digit?',
      answer: '$108$',
      solution:
        'A number is divisible by $4$ exactly when its last two digits form a multiple of $4$. Using two different digits from $1$ through $6$, the possible endings are $12, 16, 24, 32, 36, 52, 56, 64$: eight endings. Two of them, $24$ and $64$, use two even digits and leave $1, 3, 5$ and one even digit, so the first digit has $3$ odd choices; the other six endings each use one odd and one even digit and leave two odd digits, so the first digit has $2$ choices. That gives $2 \\cdot 3 + 6 \\cdot 2 = 18$ ways to fix the first digit and the ending, and the three middle digits then arrange in $3! = 6$ ways: $18 \\cdot 6 = 108$ ✓. Second route, complementary. Multiples of $4$ with no restriction on the first digit: $8$ endings, then $4! = 24$ orders for the other four digits, so $192$. Multiples of $4$ with an even first digit: after $24$ or $64$ only one even digit is left ($1$ choice), after each of the other six endings two even digits are left ($2$ choices), so $2 \\cdot 1 + 6 \\cdot 2 = 14$ first-digit-and-ending choices, times $6$ arrangements, $84$. Odd first digit: $192 - 84 = 108$ ✓. GIVING EVERY ENDING THREE ODD CHOICES FOR THE FIRST DIGIT, $8 \\cdot 3 \\cdot 6 = 144$, forgets that an ending like $12$ has already used an odd digit, giving $144$ ✗.',
    },
    {
      q: 'The digits $1, 2, 3, 4, 5$ are each used exactly once to form a five-digit number. How many of these numbers are odd and less than $40{,}000$?',
      answer: '$42$',
      solution:
        'The first digit must be $1$, $2$, or $3$ and the last digit must be $1$, $3$, or $5$; the restrictions interact because $1$ and $3$ appear in both lists. Split on the first digit. First digit $1$: the last digit is $3$ or $5$ ($2$ choices), then the middle three digits arrange in $3! = 6$ ways, giving $12$. First digit $2$: the last digit is $1$, $3$, or $5$ ($3$ choices), then $6$, giving $18$. First digit $3$: the last digit is $1$ or $5$, giving $12$. Total $12 + 18 + 12 = 42$ ✓. Second route, complementary. Odd numbers with no size restriction: $3$ choices for the last digit, then $4! = 24$, so $72$. Odd numbers that are $40{,}000$ or more start with $4$ or $5$: first digit $4$ leaves $3$ odd choices for the last digit, $3 \\cdot 6 = 18$; first digit $5$ leaves $2$, $2 \\cdot 6 = 12$; so $30$. Odd and less than $40{,}000$: $72 - 30 = 42$ ✓. MULTIPLYING THE TWO RESTRICTIONS AS IF INDEPENDENT, $3 \\cdot 3 \\cdot 3! = 54$, counts strings whose first and last digit are both $1$ or both $3$, which cannot happen when each digit is used once, giving $54$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 1,
  worksheet,
}
