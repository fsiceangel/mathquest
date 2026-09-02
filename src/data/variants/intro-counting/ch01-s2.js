// Introduction to Counting chapter 1 — variations for section 1.3
// (Counting with Addition and Subtraction). All problems and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its conventions: groups are disjoint or they are not,
//    "from a to b" includes both ends, "two-digit" and "three-digit" mean
//    positive integers with no leading zero.
//  - Every keyed answer is reached twice along routes that share no steps:
//    inclusion–exclusion against a complement count, a formula against a
//    direct list or a casework split, a Venn diagram filled from the inside
//    against one filled from the outside. Route two never borrows route
//    one’s number.
//  - Each distractor is one named slip — adding groups that overlap, using
//    the product where the least common multiple belongs, subtracting the
//    overlap twice, forgetting the add-back in a three-set count — and the
//    slip is named in CAPS.

const s13 = [
  // s1 — disjoint groups add.
  [
    {
      q: 'A library runs a mystery club with $14$ members and a poetry club with $11$ members, and no person belongs to both clubs. How many people belong to at least one of the two clubs?',
      choices: ['$3$', '$154$', '$25$', '$24$'],
      answer: 2,
      solution:
        'Route one, add disjoint groups. "At least one club" means the mystery members together with the poetry members, and since nobody is in both, every person is counted exactly once by $14 + 11 = 25$ ✓. Route two, inclusion–exclusion with the overlap written in. The general rule is $|A \\text{ or } B| = |A| + |B| - |A \\text{ and } B|$, and here $|A \\text{ and } B| = 0$, so the count is $14 + 11 - 0 = 25$; the formula agrees because there was nothing to remove ✓. (The value $3$ SUBTRACTS ONE CLUB FROM THE OTHER, which counts nobody in particular ✗. The value $154$ MULTIPLIES THE TWO SIZES, which counts pairs of people rather than people ✗. The value $24$ SUBTRACTS AN OVERLAP OF ONE that the stem says does not exist ✗.)',
    },
    {
      q: 'A drawer holds $8$ red socks, $6$ blue socks, and $9$ white socks, and every sock is exactly one of those colors. How many socks are in the drawer?',
      choices: ['$23$', '$14$', '$432$', '$17$'],
      answer: 0,
      solution:
        'Route one, three disjoint groups add. Each sock has exactly one color, so the color groups partition the drawer, and the total is $8 + 6 + 9 = 23$ ✓. Route two, count by removing one group at a time. Take out the white socks; the $9$ removed leave the red and blue ones, which are $8 + 6 = 14$ socks. Put the white ones back: $14 + 9 = 23$, and the subtraction-then-addition confirms the pieces never shared a sock ✓. (The value $14$ FORGETS THE WHITE SOCKS ✗. The value $432$ MULTIPLIES THE GROUP SIZES, which counts triples of socks, one of each color ✗. The value $17$ FORGETS THE BLUE SOCKS ✗.)',
    },
    {
      q: 'An orchestra has $37$ members, and each member plays exactly one of two kinds of instrument: strings or winds. If $22$ members play strings, how many play winds?',
      choices: ['$59$', '$14$', '$22$', '$15$'],
      answer: 3,
      solution:
        'Route one, subtract the known group. Strings and winds are disjoint and together cover the orchestra, so winds $= 37 - 22 = 15$ ✓. Route two, solve the addition equation. Let $w$ be the number of wind players; disjoint groups add, so $22 + w = 37$. Counting up from $22$: eight more reaches $30$, seven more reaches $37$, so $w = 8 + 7 = 15$ ✓. (The value $59$ ADDS INSTEAD OF SUBTRACTING, producing a number larger than the whole orchestra ✗. The value $22$ REPORTS THE STRING PLAYERS, the group that was given ✗. The value $14$ MISCOUNTS THE SUBTRACTION BY ONE, as if the $37$th member were excluded ✗.)',
    },
  ],
  // s2 — "or" between two multiple-lists.
  [
    {
      q: 'How many integers from $1$ to $120$, inclusive, are multiples of $4$ or multiples of $10$ (or both)?',
      choices: ['$36$', '$42$', '$39$', '$30$'],
      answer: 0,
      solution:
        'Route one, inclusion–exclusion. Up to $120$ there are $\\frac{120}{4} = 30$ multiples of $4$ and $\\frac{120}{10} = 12$ multiples of $10$. A number in both lists is a multiple of $\\text{lcm}(4, 10) = 20$, and there are $\\frac{120}{20} = 6$ of those, so the count is $30 + 12 - 6 = 36$ ✓. Route two, count the multiples of $10$ that the multiples of $4$ miss. A multiple of $10$ is $10k$, and $10k$ is a multiple of $4$ exactly when $k$ is even. Among $k = 1, \\ldots, 12$ the odd values $1, 3, 5, 7, 9, 11$ give six multiples of $10$ that are not multiples of $4$: $10, 30, 50, 70, 90, 110$. Add them to the $30$ multiples of $4$: $30 + 6 = 36$ ✓. (The value $42$ ADDS THE TWO LISTS WITHOUT REMOVING THE OVERLAP, so the multiples of $20$ are counted twice ✗. The value $39$ TAKES THE OVERLAP TO BE MULTIPLES OF $4 \\cdot 10 = 40$, of which there are only $3$ ✗. The value $30$ SUBTRACTS THE OVERLAP TWICE ✗.)',
    },
    {
      q: 'How many integers from $1$ to $100$, inclusive, are perfect squares or perfect cubes (or both)?',
      choices: ['$14$', '$13$', '$12$', '$10$'],
      answer: 2,
      solution:
        'Route one, inclusion–exclusion. The squares are $1^2, 2^2, \\ldots, 10^2$, ten of them; the cubes are $1, 8, 27, 64$, four of them. A number that is both a square and a cube is a sixth power, and the sixth powers up to $100$ are $1$ and $64$. So $10 + 4 - 2 = 12$ ✓. Route two, list the cubes that are not squares and add them to the squares. Of $1, 8, 27, 64$, the values $1 = 1^2$ and $64 = 8^2$ are squares, while $8$ and $27$ are not. So the cubes contribute exactly two new numbers beyond the ten squares: $10 + 2 = 12$ ✓. (The value $14$ ADDS SQUARES AND CUBES WITHOUT REMOVING THE OVERLAP, counting $1$ and $64$ twice ✗. The value $13$ FORGETS THAT $64$ IS BOTH A SQUARE AND A CUBE and removes only $1$ ✗. The value $10$ SUBTRACTS THE OVERLAP TWICE ✗.)',
    },
    {
      q: 'How many integers from $1$ to $90$, inclusive, are multiples of exactly one of the numbers $6$ and $10$ — that is, a multiple of $6$ or of $10$ but not of both?',
      choices: ['$21$', '$18$', '$12$', '$24$'],
      answer: 1,
      solution:
        'Route one, remove the overlap from each list. Up to $90$ there are $15$ multiples of $6$, $9$ multiples of $10$, and $3$ multiples of $\\text{lcm}(6, 10) = 30$. The multiples of $6$ that are not multiples of $10$ number $15 - 3 = 12$; the multiples of $10$ that are not multiples of $6$ number $9 - 3 = 6$. These two groups are disjoint, so exactly one: $12 + 6 = 18$ ✓. Route two, take "or" and remove "both" once. Multiples of $6$ or $10$ number $15 + 9 - 3 = 21$, and that "or" set still contains the $3$ numbers $30, 60, 90$ that are multiples of both. Taking them out leaves $21 - 3 = 18$ ✓. (The value $21$ IS THE "OR" COUNT, which still includes the multiples of both ✗. The value $24$ ADDS THE LISTS WITH NO CORRECTION AT ALL ✗. The value $12$ COUNTS ONLY THE MULTIPLES OF $6$ that avoid $10$ and forgets the other direction ✗.)',
    },
  ],
  // s3 — Venn diagrams: neither, and exactly one.
  [
    {
      q: 'Of $45$ campers, $26$ went swimming, $22$ went canoeing, and $12$ did both. How many campers did neither activity?',
      choices: ['$14$', '$9$', '$10$', '$33$'],
      answer: 1,
      solution:
        'Route one, inclusion–exclusion then complement. Campers who did at least one activity number $26 + 22 - 12 = 36$, since the $12$ who did both were added twice. Everyone else did neither: $45 - 36 = 9$ ✓. Route two, fill the Venn diagram from the inside out. The overlap holds $12$. Swimming only is $26 - 12 = 14$, canoeing only is $22 - 12 = 10$. The three regions inside the circles hold $14 + 12 + 10 = 36$ campers, and the region outside both circles holds $45 - 36 = 9$ ✓. (The value $14$ IS THE SWIMMING-ONLY REGION, not the outside ✗. The value $10$ IS THE CANOEING-ONLY REGION ✗. The value $33$ SUBTRACTS ONLY THE OVERLAP FROM THE TOTAL, ignoring the campers who did one activity ✗.)',
    },
    {
      q: 'In a parking lot of $55$ cars, $31$ are white, $22$ have a sunroof, and $9$ are white cars with a sunroof. How many cars are neither white nor have a sunroof?',
      choices: ['$22$', '$13$', '$2$', '$11$'],
      answer: 3,
      solution:
        'Route one, count "white or sunroof" and subtract from the lot. White or sunroof: $31 + 22 - 9 = 44$ cars, the $9$ counted in both groups being removed once. Neither: $55 - 44 = 11$ ✓. Route two, peel the lot apart one condition at a time. Start with the $55 - 31 = 24$ cars that are not white. Among the $22$ sunroof cars, $9$ are white, so $22 - 9 = 13$ sunroof cars are not white, and those $13$ sit inside the $24$. The non-white cars without a sunroof are therefore $24 - 13 = 11$ ✓. (The value $22$ IS THE WHITE-ONLY REGION, $31 - 9$ ✗. The value $13$ IS THE SUNROOF-ONLY REGION, $22 - 9$ ✗. The value $2$ ADDS THE TWO GROUPS WITHOUT REMOVING THE OVERLAP and subtracts $53$ from $55$ ✗.)',
    },
    {
      q: 'Of $40$ students, $24$ like pizza, $19$ like tacos, and $11$ like both. How many students like exactly one of the two foods?',
      choices: ['$32$', '$13$', '$21$', '$43$'],
      answer: 2,
      solution:
        'Route one, add the two "only" regions. Pizza only is $24 - 11 = 13$; tacos only is $19 - 11 = 8$. The regions are disjoint, so exactly one: $13 + 8 = 21$ ✓. Route two, subtract the overlap twice from the raw sum. The sum $24 + 19 = 43$ counts each both-lover twice and each exactly-one student once. Removing $2 \\cdot 11 = 22$ deletes the both-lovers entirely and leaves only the students counted once: $43 - 22 = 21$ ✓. (The value $32$ IS "AT LEAST ONE", $24 + 19 - 11$, which still includes the $11$ who like both ✗. The value $13$ IS PIZZA-ONLY ALONE and forgets the tacos-only students ✗. The value $43$ ADDS THE GROUPS WITH NO CORRECTION, counting the both-lovers twice ✗.)',
    },
  ],
  // s4 — "at least one" digit, by complement.
  [
    {
      q: 'How many three-digit positive integers contain the digit $4$ at least once?',
      choices: ['$648$', '$280$', '$171$', '$252$'],
      answer: 3,
      solution:
        'Route one, complement. There are $900$ three-digit numbers. Those with no $4$ have $8$ choices for the hundreds digit ($1$–$9$ except $4$) and $9$ choices for each of the other two digits, so $8 \\cdot 9 \\cdot 9 = 648$ avoid the digit. At least one $4$: $900 - 648 = 252$ ✓. Route two, casework on the hundreds digit. If the hundreds digit is $4$, all $100$ numbers $400$–$499$ qualify. If it is one of the other $8$ digits, the last two digits must contain a $4$: of the $100$ two-digit endings $00$–$99$, those with no $4$ number $9 \\cdot 9 = 81$, so $19$ endings contain a $4$, giving $8 \\cdot 19 = 152$. Total $100 + 152 = 252$ ✓. (The value $648$ IS THE COMPLEMENT, the numbers with no $4$ ✗. The value $280$ ADDS THE THREE PLACE-CASES $100 + 90 + 90$ WITHOUT REMOVING OVERLAPS, so numbers like $44$ and $404$ are counted twice or three times ✗. The value $171$ USES $9$ CHOICES FOR THE HUNDREDS DIGIT in the complement, allowing a leading $0$ ✗.)',
    },
    {
      q: 'How many two-digit positive integers have at least one even digit? (The digit $0$ counts as even.)',
      choices: ['$25$', '$65$', '$85$', '$45$'],
      answer: 1,
      solution:
        'Route one, complement. There are $90$ two-digit numbers. A number with no even digit has both digits odd: $5$ choices for the tens digit and $5$ for the units digit, $25$ numbers. At least one even digit: $90 - 25 = 65$ ✓. Route two, inclusion–exclusion on the two places. Even tens digit ($2, 4, 6, 8$): $4 \\cdot 10 = 40$ numbers. Even units digit ($0, 2, 4, 6, 8$): $9 \\cdot 5 = 45$ numbers. Both digits even: $4 \\cdot 5 = 20$. So $40 + 45 - 20 = 65$ ✓. (The value $25$ IS THE COMPLEMENT, the numbers with both digits odd ✗. The value $85$ ADDS THE TWO PLACE-CASES WITHOUT REMOVING THE OVERLAP of numbers with both digits even ✗. The value $45$ COUNTS ONLY THE EVEN-UNITS CASE and forgets the even tens digit ✗.)',
    },
    {
      q: 'How many two-digit positive integers contain the digit $5$ or the digit $6$ at least once?',
      choices: ['$34$', '$38$', '$56$', '$36$'],
      answer: 0,
      solution:
        'Route one, complement. A two-digit number avoiding both $5$ and $6$ has $7$ choices for its tens digit ($1$–$9$ minus two) and $8$ choices for its units digit ($0$–$9$ minus two), so $7 \\cdot 8 = 56$ avoid both. The rest contain a $5$ or a $6$: $90 - 56 = 34$ ✓. Route two, inclusion–exclusion on the two places. Tens digit is $5$ or $6$: $2 \\cdot 10 = 20$ numbers. Units digit is $5$ or $6$: $9 \\cdot 2 = 18$ numbers. Both places from $\\{5, 6\\}$: $2 \\cdot 2 = 4$ numbers, namely $55, 56, 65, 66$. So $20 + 18 - 4 = 34$ ✓. (The value $38$ ADDS THE TWO PLACE-CASES WITHOUT REMOVING THE OVERLAP ✗. The value $56$ IS THE COMPLEMENT, the numbers with neither digit ✗. The value $36$ REMOVES ONLY $55$ AND $66$ FROM THE OVERLAP, forgetting $56$ and $65$ ✗.)',
    },
  ],
  // s5 — divisible by one thing but not another.
  [
    {
      q: 'How many integers from $1$ to $300$, inclusive, are divisible by $4$ but not by $6$?',
      choices: ['$75$', '$63$', '$50$', '$25$'],
      answer: 2,
      solution:
        'Route one, subtract the overlap from the multiples of $4$. Up to $300$ there are $\\frac{300}{4} = 75$ multiples of $4$. A multiple of $4$ that is also a multiple of $6$ is a multiple of $\\text{lcm}(4, 6) = 12$, and there are $\\frac{300}{12} = 25$ of those. Remove them: $75 - 25 = 50$ ✓. Route two, look at the pattern inside each block of $12$. In $1$–$12$ the multiples of $4$ are $4, 8, 12$, and only $12$ is divisible by $6$, so each block of twelve consecutive integers contributes exactly $2$ numbers that are multiples of $4$ but not $6$. There are $\\frac{300}{12} = 25$ complete blocks, giving $25 \\cdot 2 = 50$ ✓. (The value $75$ REMOVES NOTHING, counting every multiple of $4$ ✗. The value $63$ REMOVES THE MULTIPLES OF $4 \\cdot 6 = 24$ instead of the multiples of the least common multiple $12$ ✗. The value $25$ IS THE OVERLAP ITSELF, the numbers that were supposed to be thrown away ✗.)',
    },
    {
      q: 'How many three-digit positive integers are divisible by $9$ but not by $5$?',
      choices: ['$80$', '$100$', '$20$', '$79$'],
      answer: 0,
      solution:
        'Route one, count the multiples of $9$ and remove the multiples of $45$. Three-digit multiples of $9$ run from $108$ to $999$: $\\frac{999 - 108}{9} + 1 = 100$. A multiple of $9$ that is also a multiple of $5$ is a multiple of $\\text{lcm}(9, 5) = 45$; three-digit multiples of $45$ run from $135$ to $990$: $\\frac{990 - 135}{45} + 1 = 20$. So $100 - 20 = 80$ ✓. Route two, count by blocks of $45$. Any $45$ consecutive integers contain exactly $5$ multiples of $9$ and exactly $1$ multiple of $45$, so each block holds $5 - 1 = 4$ multiples of $9$ that are not multiples of $5$; the first block $100$–$144$ shows it, with $108, 117, 126, 135, 144$ and only $135$ divisible by $5$. The $900$ three-digit numbers split into $\\frac{900}{45} = 20$ complete blocks, giving $20 \\cdot 4 = 80$ ✓. (The value $100$ REMOVES NOTHING, counting every three-digit multiple of $9$ ✗. The value $20$ IS THE OVERLAP, the multiples of $45$ that should have been removed ✗. The value $79$ DROPS THE $+1$ WHEN COUNTING THE LIST of multiples of $9$, getting $99$ instead of $100$ ✗.)',
    },
    {
      q: 'How many integers from $1$ to $300$, inclusive, are divisible by $6$ but divisible by neither $8$ nor $9$?',
      choices: ['$22$', '$38$', '$34$', '$26$'],
      answer: 3,
      solution:
        'Route one, inclusion–exclusion inside the multiples of $6$. There are $\\frac{300}{6} = 50$ multiples of $6$. Among them, the multiples of $8$ are the multiples of $\\text{lcm}(6, 8) = 24$, of which there are $12$; the multiples of $9$ are the multiples of $\\text{lcm}(6, 9) = 18$, of which there are $16$; and the multiples of both $8$ and $9$ are the multiples of $\\text{lcm}(6, 8, 9) = 72$, of which there are $4$. Multiples of $6$ that hit $8$ or $9$: $12 + 16 - 4 = 24$. Multiples of $6$ that avoid both: $50 - 24 = 26$ ✓. Route two, work with $k$ where the number is $6k$, $k = 1, \\ldots, 50$. Now $6k$ is divisible by $8$ exactly when $k$ is divisible by $4$, and $6k$ is divisible by $9$ exactly when $k$ is divisible by $3$. So count $k \\le 50$ divisible by neither $3$ nor $4$: multiples of $3$ number $16$, multiples of $4$ number $12$, multiples of $12$ number $4$, so $16 + 12 - 4 = 24$ values of $k$ are excluded and $50 - 24 = 26$ remain ✓. (The value $22$ FORGETS TO ADD BACK THE MULTIPLES OF $72$, which were subtracted twice ✗. The value $38$ REMOVES ONLY THE MULTIPLES OF $8$ and ignores $9$ ✗. The value $34$ REMOVES ONLY THE MULTIPLES OF $9$ and ignores $8$ ✗.)',
    },
  ],
  // s6 — Venn diagrams solved for the overlap, or for the total.
  [
    {
      q: 'Of $50$ campers, $29$ went hiking, $33$ went fishing, and $4$ did neither. How many campers did both?',
      choices: ['$12$', '$16$', '$13$', '$17$'],
      answer: 1,
      solution:
        'Route one, find "at least one" first, then the overlap. Since $4$ did neither, $50 - 4 = 46$ campers did at least one activity. The sum $29 + 33 = 62$ counts the both-campers twice, so the overlap is $62 - 46 = 16$ ✓. Route two, fill the Venn diagram with an unknown. Let $x$ be the number who did both. Then hiking only is $29 - x$, fishing only is $33 - x$, and the four regions add to the whole camp: $(29 - x) + x + (33 - x) + 4 = 50$, so $66 - x = 50$ and $x = 16$ ✓. (The value $12$ USES $50$ AS THE "AT LEAST ONE" TOTAL, forgetting that the $4$ who did neither are not in either circle ✗. The value $13$ IS THE HIKING-ONLY REGION, $29 - 16$ ✗. The value $17$ IS THE FISHING-ONLY REGION, $33 - 16$ ✗.)',
    },
    {
      q: 'A box holds $40$ buttons. Of them, $23$ are round, $25$ are red, and $6$ are neither round nor red. How many buttons are both round and red?',
      choices: ['$8$', '$9$', '$11$', '$14$'],
      answer: 3,
      solution:
        'Route one, "at least one" then the overlap. Buttons that are round or red number $40 - 6 = 34$. The sum $23 + 25 = 48$ counts the round-and-red buttons twice, so the overlap is $48 - 34 = 14$ ✓. Route two, count the non-round buttons two ways. There are $40 - 23 = 17$ buttons that are not round, and $6$ of them are also not red, so $17 - 6 = 11$ buttons are red but not round. Since $25$ buttons are red, the rest of the red ones are round: $25 - 11 = 14$ ✓. (The value $8$ USES $40$ AS THE "AT LEAST ONE" TOTAL, ignoring the $6$ buttons outside both circles ✗. The value $9$ IS THE ROUND-ONLY REGION, $23 - 14$ ✗. The value $11$ IS THE RED-ONLY REGION, $25 - 14$ ✗.)',
    },
    {
      q: 'In a class, $21$ students own a dog, $16$ own a cat, $9$ own both a dog and a cat, and $7$ own neither. How many students are in the class?',
      choices: ['$44$', '$28$', '$35$', '$53$'],
      answer: 2,
      solution:
        'Route one, inclusion–exclusion plus the outsiders. Students who own at least one pet number $21 + 16 - 9 = 28$, since the $9$ two-pet owners were added twice. Add the students outside both groups: $28 + 7 = 35$ ✓. Route two, add the four Venn regions one at a time. Dog only: $21 - 9 = 12$. Cat only: $16 - 9 = 7$. Both: $9$. Neither: $7$. The regions are disjoint and cover the class: $12 + 7 + 9 + 7 = 35$ ✓. (The value $44$ ADDS THE DOG AND CAT GROUPS WITHOUT REMOVING THE OVERLAP before adding the $7$ ✗. The value $28$ FORGETS THE STUDENTS WHO OWN NEITHER ✗. The value $53$ ADDS ALL FOUR GIVEN NUMBERS, treating the $9$ both-owners as a fifth group instead of an overlap ✗.)',
    },
  ],
  // s7 — "or" among three-digit numbers, and "exactly one".
  [
    {
      q: 'How many three-digit positive integers are divisible by $4$ or by $9$ (or both)?',
      choices: ['$300$', '$325$', '$275$', '$600$'],
      answer: 0,
      solution:
        'Route one, inclusion–exclusion. Three-digit multiples of $4$ run from $100$ to $996$: $\\frac{996 - 100}{4} + 1 = 225$. Multiples of $9$ run from $108$ to $999$: $\\frac{999 - 108}{9} + 1 = 100$. Multiples of both are multiples of $\\text{lcm}(4, 9) = 36$, running from $108$ to $972$: $\\frac{972 - 108}{36} + 1 = 25$. So $225 + 100 - 25 = 300$ ✓. Route two, count by blocks of $36$. Among any $36$ consecutive integers, $9$ are multiples of $4$, $4$ are multiples of $9$, and exactly $1$ is a multiple of both, so $9 + 4 - 1 = 12$ are divisible by $4$ or $9$. The $900$ three-digit numbers form $\\frac{900}{36} = 25$ complete blocks, giving $25 \\cdot 12 = 300$ ✓. (The value $325$ ADDS THE TWO LISTS WITHOUT REMOVING THE OVERLAP ✗. The value $275$ SUBTRACTS THE OVERLAP TWICE ✗. The value $600$ IS THE COMPLEMENT, the three-digit numbers divisible by neither ✗.)',
    },
    {
      q: 'How many integers from $1$ to $400$, inclusive, are perfect squares or even numbers (or both)?',
      choices: ['$220$', '$200$', '$210$', '$190$'],
      answer: 2,
      solution:
        'Route one, inclusion–exclusion. The squares up to $400 = 20^2$ number $20$; the even numbers number $\\frac{400}{2} = 200$. A square is even exactly when its root is even, so the even squares are $2^2, 4^2, \\ldots, 20^2$, ten of them. So $20 + 200 - 10 = 210$ ✓. Route two, start from the evens and add the squares they miss. Every even number is already in; the only new numbers a square can add are odd squares. The odd squares up to $400$ are $1^2, 3^2, \\ldots, 19^2$, and the odd roots $1, 3, \\ldots, 19$ number $10$. So $200 + 10 = 210$ ✓. (The value $220$ ADDS SQUARES AND EVENS WITHOUT REMOVING THE EVEN SQUARES ✗. The value $200$ SUBTRACTS THE OVERLAP TWICE ✗. The value $190$ COUNTS THE EVEN NUMBERS THAT ARE NOT SQUARES, throwing the squares away instead of keeping them ✗.)',
    },
    {
      q: 'How many three-digit positive integers are divisible by exactly one of the numbers $5$ and $8$ — that is, by $5$ or by $8$ but not by both?',
      choices: ['$270$', '$248$', '$292$', '$158$'],
      answer: 1,
      solution:
        'Route one, subtract the overlap from each list. Three-digit multiples of $5$ run $100$ to $995$: $\\frac{995 - 100}{5} + 1 = 180$. Multiples of $8$ run $104$ to $992$: $\\frac{992 - 104}{8} + 1 = 112$. Multiples of $\\text{lcm}(5, 8) = 40$ run $120$ to $960$: $\\frac{960 - 120}{40} + 1 = 22$. Only $5$: $180 - 22 = 158$; only $8$: $112 - 22 = 90$; the two groups are disjoint, so $158 + 90 = 248$ ✓. Route two, count by blocks of $40$. In any $40$ consecutive integers there are $8$ multiples of $5$ and $5$ multiples of $8$, and exactly one number is a multiple of both. Multiples of exactly one: $8 + 5 - 2 \\cdot 1 = 11$ per block. The three-digit numbers $100$–$999$ break into $\\frac{900}{40} = 22$ complete blocks of $40$ plus a leftover run $980$–$999$; the blocks give $22 \\cdot 11 = 242$, and the leftover run contains the multiples of $5$: $980, 985, 990, 995$, the multiples of $8$: $984, 992$, and no multiple of $40$, so it adds $6$. Total $242 + 6 = 248$ ✓. (The value $270$ IS THE "OR" COUNT, $180 + 112 - 22$, which still includes the multiples of both ✗. The value $292$ ADDS THE TWO LISTS WITH NO CORRECTION ✗. The value $158$ COUNTS ONLY THE MULTIPLES OF $5$ that avoid $8$ ✗.)',
    },
  ],
  // s8 — three overlapping groups.
  [
    {
      q: 'How many integers from $1$ to $200$, inclusive, are divisible by at least one of $3$, $4$, and $5$?',
      choices: ['$156$', '$117$', '$80$', '$120$'],
      answer: 3,
      solution:
        'Route one, inclusion–exclusion with three sets. Singles: $66$ multiples of $3$, $50$ of $4$, $40$ of $5$, total $156$. Pairwise overlaps are multiples of $12$, $15$, and $20$: $16$, $13$, and $10$, total $39$. The triple overlap is multiples of $60$: $3$. At least one: $156 - 39 + 3 = 120$ ✓. Route two, count by blocks of $60$. In $1$–$60$, the numbers divisible by none of $3$, $4$, $5$ are the ones that survive all three crossings-out: list them as $1, 2, 7, 11, 13, 14, 17, 19, 22, 23, 26, 29, 31, 34, 37, 38, 41, 43, 46, 47, 49, 53, 58, 59$, which is $24$ numbers, so $36$ per block are divisible by at least one. Three blocks give $108$. The leftover $181$–$200$ has the same pattern as $1$–$20$, where the numbers divisible by none are $1, 2, 7, 11, 13, 14, 17, 19$, eight of them, so $12$ of the $20$ qualify. Total $108 + 12 = 120$ ✓. (The value $156$ STOPS AFTER ADDING THE THREE SINGLE LISTS ✗. The value $117$ FORGETS TO ADD BACK THE TRIPLE OVERLAP, the multiples of $60$ ✗. The value $80$ IS THE COMPLEMENT, the numbers divisible by none of the three ✗.)',
    },
    {
      q: 'A school has $150$ students. Of them, $60$ are in band, $45$ in choir, and $40$ in drama; $20$ are in both band and choir, $15$ in both band and drama, $12$ in both choir and drama; and $5$ are in all three. How many students are in at least one of the three activities?',
      choices: ['$145$', '$103$', '$98$', '$47$'],
      answer: 1,
      solution:
        'Route one, inclusion–exclusion. Singles: $60 + 45 + 40 = 145$. Subtract the pairwise overlaps: $145 - (20 + 15 + 12) = 98$. The $5$ students in all three were added three times and subtracted three times, so add them back: $98 + 5 = 103$ ✓. Route two, fill the seven regions of the Venn diagram from the center out. Center: $5$. Band-and-choir only: $20 - 5 = 15$; band-and-drama only: $15 - 5 = 10$; choir-and-drama only: $12 - 5 = 7$. Band only: $60 - 15 - 10 - 5 = 30$; choir only: $45 - 15 - 7 - 5 = 18$; drama only: $40 - 10 - 7 - 5 = 18$. Sum of all seven regions: $5 + 15 + 10 + 7 + 30 + 18 + 18 = 103$ ✓. (The value $145$ ADDS THE THREE GROUPS WITH NO CORRECTION ✗. The value $98$ FORGETS TO ADD BACK THE STUDENTS IN ALL THREE ✗. The value $47$ IS THE NUMBER IN NO ACTIVITY, $150 - 103$ ✗.)',
    },
    {
      q: 'How many integers from $1$ to $210$, inclusive, are divisible by at least two of the numbers $2$, $3$, and $5$?',
      choices: ['$56$', '$70$', '$63$', '$49$'],
      answer: 0,
      solution:
        'Route one, add the pairwise lists and fix the triple overlap. Divisible by $2$ and $3$ means divisible by $6$: $35$ numbers. By $2$ and $5$, divisible by $10$: $21$. By $3$ and $5$, divisible by $15$: $14$. Adding gives $35 + 21 + 14 = 70$, but a multiple of $30$ lies in all three pairwise lists and was counted three times; it should count once, so subtract it twice: $70 - 2 \\cdot 7 = 56$, using the $7$ multiples of $30$ ✓. Route two, count by blocks of $30$. In $1$–$30$, the numbers divisible by at least two of $2, 3, 5$ are $6, 10, 12, 15, 18, 20, 24, 30$, eight of them. There are $\\frac{210}{30} = 7$ complete blocks and no leftover, so $7 \\cdot 8 = 56$ ✓. (The value $70$ ADDS THE THREE PAIRWISE LISTS WITH NO CORRECTION, counting each multiple of $30$ three times ✗. The value $63$ SUBTRACTS THE TRIPLE OVERLAP ONLY ONCE, leaving each multiple of $30$ counted twice ✗. The value $49$ SUBTRACTS THE TRIPLE OVERLAP THREE TIMES, which counts "exactly two" and throws the multiples of $30$ away ✗.)',
    },
  ],
  // s9 — digits from 1 to 1000, by complement.
  [
    {
      q: 'How many integers from $1$ to $1000$, inclusive, contain the digit $5$ at least once?',
      choices: ['$729$', '$271$', '$300$', '$270$'],
      answer: 1,
      solution:
        'Route one, complement. Pad every number from $0$ to $999$ to three digits; the strings with no $5$ number $9 \\cdot 9 \\cdot 9 = 729$, and one of them is $000$, so $728$ numbers from $1$ to $999$ avoid the digit $5$. The number $1000$ also has no $5$, so $729$ of the $1000$ numbers avoid it, and $1000 - 729 = 271$ contain it ✓. Route two, count by length. One-digit: just $5$, one number. Two-digit with a $5$: $90$ total minus $8 \\cdot 9 = 72$ without, $18$. Three-digit with a $5$: $900$ minus $8 \\cdot 9 \\cdot 9 = 648$ without, $252$. The number $1000$ has no $5$. Total $1 + 18 + 252 = 271$ ✓. (The value $729$ IS THE COMPLEMENT, the numbers with no $5$ ✗. The value $300$ ADDS "HUNDREDS IS $5$", "TENS IS $5$", "UNITS IS $5$" WITHOUT REMOVING OVERLAPS like $55$ and $555$ ✗. The value $270$ FORGETS THAT $000$ IS AMONG THE $729$ PADDED STRINGS and subtracts $729$ from $999$ ✗.)',
    },
    {
      q: 'How many integers from $1$ to $1000$, inclusive, contain at least one digit greater than $7$ — that is, at least one $8$ or at least one $9$?',
      choices: ['$512$', '$600$', '$489$', '$488$'],
      answer: 3,
      solution:
        'Route one, complement. Pad $0$ to $999$ to three digits; strings using only the digits $0$–$7$ number $8^3 = 512$, and one of them is $000$, so $511$ numbers from $1$ to $999$ have every digit at most $7$. The number $1000$ also has every digit at most $7$, making $512$ numbers that avoid $8$ and $9$, so $1000 - 512 = 488$ contain one ✓. Route two, count by length. One-digit: $8$ and $9$, two numbers. Two-digit: $90$ total minus those with both digits in $0$–$7$, which have $7$ choices for the tens digit and $8$ for the units, $56$; that leaves $34$. Three-digit: $900$ minus $7 \\cdot 8 \\cdot 8 = 448$, leaving $452$. The number $1000$ adds nothing. Total $2 + 34 + 452 = 488$ ✓. (The value $512$ IS THE COMPLEMENT, the numbers with no digit above $7$ ✗. The value $600$ ADDS THE THREE PLACE-CASES OF $200$ EACH WITHOUT REMOVING OVERLAPS ✗. The value $489$ FORGETS THAT $1000$ ITSELF HAS NO $8$ OR $9$ and subtracts only $511$ ✗.)',
    },
    {
      q: 'How many integers from $1$ to $1000$, inclusive, contain at least one digit $0$ and at least one digit $8$?',
      choices: ['$35$', '$19$', '$36$', '$171$'],
      answer: 2,
      solution:
        'Route one, casework on where the $8$ sits. A one-digit number cannot hold both digits, and the only two-digit number with a $0$ and an $8$ is $80$. Three-digit numbers: if the hundreds digit is $8$, the last two digits must contain a $0$, and $100 - 81 = 19$ of the endings $00$–$99$ do. If the hundreds digit is not $8$, it has $8$ choices ($1$–$9$ except $8$), and the last two digits must be exactly $0$ and $8$ in some order, $08$ or $80$, so $8 \\cdot 2 = 16$. The number $1000$ has no $8$. Total $1 + 19 + 16 = 36$ ✓. Route two, complement inside the numbers that contain a $0$. Three-digit numbers with at least one $0$ number $900 - 729 = 171$. Among them, those with no $8$ have hundreds digit from $8$ options and the other two digits from the nine digits other than $8$, with at least one $0$: $8 \\cdot 9 \\cdot 9 - 8 \\cdot 8 \\cdot 8 = 648 - 512 = 136$. So $171 - 136 = 35$ three-digit numbers have a $0$ and an $8$; add $80$ from the two-digit numbers, and $1000$ contributes nothing: $35 + 1 = 36$ ✓. (The value $35$ FORGETS THE TWO-DIGIT NUMBER $80$ ✗. The value $19$ COUNTS ONLY THE NUMBERS WITH HUNDREDS DIGIT $8$ ✗. The value $171$ COUNTS EVERY THREE-DIGIT NUMBER WITH A $0$ and never requires the $8$ ✗.)',
    },
  ],
  // s10 — divisible by none, and exactly one, of three numbers.
  [
    {
      q: 'How many integers from $1$ to $720$, inclusive, are divisible by none of $4$, $5$, and $6$?',
      choices: ['$336$', '$276$', '$384$', '$396$'],
      answer: 2,
      solution:
        'Route one, inclusion–exclusion then complement. Singles: $\\frac{720}{4} = 180$, $\\frac{720}{5} = 144$, $\\frac{720}{6} = 120$, total $444$. Pairwise overlaps are multiples of $\\text{lcm}(4, 5) = 20$, $\\text{lcm}(4, 6) = 12$, $\\text{lcm}(5, 6) = 30$: $36 + 60 + 24 = 120$. Triple overlap: multiples of $\\text{lcm}(4, 5, 6) = 60$, which number $12$. At least one: $444 - 120 + 12 = 336$. None: $720 - 336 = 384$ ✓. Route two, count by blocks of $60$. In $1$–$60$, cross out the multiples of $4$ ($15$ numbers), then the multiples of $5$ not yet crossed out ($12$ minus the $3$ multiples of $20$, so $9$ more), then the multiples of $6$ not yet crossed out: the ten multiples of $6$ are $6, 12, \\ldots, 60$, of which $12, 24, 36, 48, 60$ are multiples of $4$ and $30$ is a multiple of $5$, so $4$ more. Crossed out: $15 + 9 + 4 = 28$, leaving $32$ survivors per block. Twelve blocks: $12 \\cdot 32 = 384$ ✓. (The value $336$ IS THE COMPLEMENT, the numbers divisible by at least one ✗. The value $276$ STOPS AFTER SUBTRACTING THE THREE SINGLE LISTS from $720$ ✗. The value $396$ FORGETS TO ADD BACK THE MULTIPLES OF $60$ before taking the complement ✗.)',
    },
    {
      q: 'How many two-digit positive integers are divisible by none of $3$, $5$, and $7$?',
      choices: ['$41$', '$49$', '$29$', '$45$'],
      answer: 0,
      solution:
        'Route one, inclusion–exclusion on the $90$ two-digit numbers. Multiples of $3$ run $12$ to $99$: $30$. Multiples of $5$ run $10$ to $95$: $18$. Multiples of $7$ run $14$ to $98$: $13$. Pairwise: multiples of $15$ are $15, 30, \\ldots, 90$, six; multiples of $21$ are $21, 42, 63, 84$, four; multiples of $35$ are $35, 70$, two. No two-digit number is a multiple of $105$. At least one: $61 - 12 + 0 = 49$. None: $90 - 49 = 41$ ✓. Route two, complement of the count from $1$ to $99$ minus the count from $1$ to $9$. From $1$ to $99$: singles $33 + 19 + 14 = 66$, pairwise $6 + 4 + 2 = 12$, triple $0$, so $54$ are divisible by at least one and $45$ by none. From $1$ to $9$ the numbers divisible by none of $3, 5, 7$ are $1, 2, 4, 8$, four of them. Two-digit numbers divisible by none: $45 - 4 = 41$ ✓. (The value $49$ IS THE COMPLEMENT, the two-digit numbers divisible by at least one ✗. The value $29$ STOPS AFTER SUBTRACTING THE THREE SINGLE LISTS from $90$ ✗. The value $45$ COUNTS FROM $1$ INSTEAD OF FROM $10$, keeping the one-digit numbers $1, 2, 4, 8$ ✗.)',
    },
    {
      q: 'How many integers from $1$ to $300$, inclusive, are divisible by exactly one of the numbers $3$, $5$, and $8$?',
      choices: ['$160$', '$119$', '$197$', '$125$'],
      answer: 3,
      solution:
        'Route one, the exactly-one formula. Singles: $100$ multiples of $3$, $60$ of $5$, $37$ of $8$, total $197$. Pairwise: multiples of $15$, $24$, $40$ number $20$, $12$, $7$, total $39$. Triple: multiples of $120$ number $2$. A number in exactly one list is counted once in the singles and nowhere else; a number in exactly two lists is counted twice in the singles and once in the pairwise sum; a number in all three is counted three times, three times, and once. So exactly one $= 197 - 2 \\cdot 39 + 3 \\cdot 2 = 125$ ✓. Route two, three disjoint "only" counts. Only $3$: multiples of $3$ minus those also divisible by $5$ or $8$, which are multiples of $15$ or $24$: $100 - (20 + 12 - 2) = 70$. Only $5$: $60 - (20 + 7 - 2) = 35$. Only $8$: $37 - (12 + 7 - 2) = 20$. Sum $70 + 35 + 20 = 125$ ✓. (The value $160$ IS "AT LEAST ONE", $197 - 39 + 2$, which keeps the numbers in two or three lists ✗. The value $119$ SUBTRACTS THE PAIRWISE OVERLAPS TWICE BUT NEVER ADDS BACK the multiples of $120$ ✗. The value $197$ ADDS THE THREE LISTS WITH NO CORRECTION ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 1, sections: { '1.3': s13 } }
