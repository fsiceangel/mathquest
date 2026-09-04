// Counting & Probability chapter 13 — variations for section 13.2
// (The Problem). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every count here is small enough to write out by hand, and route one of
//    every solution is an organized list: fix one box, step its count down,
//    and read the cases off in order so nothing is skipped or repeated.
//  - Every stem settles its own conventions before it asks anything: whether
//    the items are identical, whether the boxes are labeled, whether a box may
//    be empty, and every minimum and cap spelled out.
//  - Route two never reuses route one’s bookkeeping — it is a complement, a
//    symmetry pairing, an inclusion–exclusion, a divider count, or a shift.
//  - Each distractor is one named slip — a dropped condition, an off-by-one at
//    a boundary, a complement reported in place of the count, a sum where a
//    product belongs — named in CAPS.

const s132 = [
  // slot 1 — splitting a total between two labeled places
  [
    {
      q: 'How many ordered pairs $(x, y)$ of positive integers satisfy $x + y = 12$?',
      choices: ['$12$', '$13$', '$22$', '$11$'],
      answer: 3,
      solution:
        'Route one, list in order. Step $x$ down from its largest value: $(11, 1), (10, 2), (9, 3), \\ldots, (1, 11)$. Every $x$ from $1$ to $11$ appears exactly once, and $y = 12 - x$ is forced, so there are $11$ pairs ✓. Route two, cut a row. Lay $12$ identical units in a row; a pair is the same thing as one cut that leaves a non-empty block on each side. There are $11$ gaps between consecutive units and exactly one cut to place, so $11$ pairs ✓. (The choice $12$ LETS $x$ RUN UP TO $12$, where $y$ would be $0$ and not positive ✗; $13$ ALLOWS A ZERO AT BOTH ENDS, counting $(0,12)$ and $(12,0)$ as well ✗; $22$ COUNTS EACH PAIR TWICE, once as $(x,y)$ and once as $(y,x)$, though the pairs are already ordered ✗.)',
    },
    {
      q: 'Nine identical stamps are split between two albums labeled Left and Right, and each album must receive at least one stamp. How many splits are there?',
      choices: ['$10$', '$8$', '$4$', '$9$'],
      answer: 1,
      solution:
        'Route one, list in order. Because the stamps are identical and the albums are labeled, a split is just the pair (Left, Right). Step Left down from $8$: $(8,1), (7,2), (6,3), (5,4), (4,5), (3,6), (2,7), (1,8)$ — that is $8$ splits ✓. Route two, count and remove. With no restriction Left could hold $0, 1, 2, \\ldots, 9$, which is $10$ splits; exactly two of those leave an album empty, namely $(0,9)$ and $(9,0)$. So $10 - 2 = 8$ ✓. (The choice $10$ IGNORES THE “AT LEAST ONE” RULE and keeps both empty splits ✗; $4$ TREATS THE ALBUMS AS INTERCHANGEABLE, counting only $\\{1,8\\}, \\{2,7\\}, \\{3,6\\}, \\{4,5\\}$, though Left and Right are labeled ✗; $9$ REMOVES ONLY ONE OF THE TWO EMPTY SPLITS, an off-by-one at one end ✗.)',
    },
    {
      q: 'For a positive integer $N$, exactly $20$ ordered pairs $(x, y)$ of positive integers satisfy $x + y = N$. What is $N$?',
      choices: ['$21$', '$20$', '$19$', '$40$'],
      answer: 0,
      solution:
        'Route one, build the ladder by listing. For $N = 2$ the only pair is $(1,1)$: $1$ pair. For $N = 3$: $(1,2), (2,1)$, $2$ pairs. For $N = 4$: $(1,3), (2,2), (3,1)$, $3$ pairs. Each step up in $N$ adds one more pair, because $x$ may now be one larger, so $N$ gives $N - 1$ pairs. Setting $N - 1 = 20$ gives $N = 21$ ✓. Route two, cut a row. A pair of positive parts summing to $N$ is one cut in a row of $N$ units, and a row of $N$ units has $N - 1$ gaps to cut at. So $N - 1 = 20$ and $N = 21$ ✓. (The choice $20$ REPORTS THE NUMBER OF PAIRS AS $N$, forgetting the count sits one below $N$ ✗; $19$ USES NON-NEGATIVE PAIRS, for which the count is $N + 1$, and solves $N + 1 = 20$ ✗; $40$ DOUBLES $N$, as if each pair had to be listed forwards and backwards ✗.)',
    },
  ],
  // slot 2 — one kind pinned, the rest free
  [
    {
      q: 'A juice bar sells mango, peach, and plum smoothies. Ravi buys exactly $7$ smoothies, exactly $3$ of which are mango; he may take any number of the other two kinds, including none. How many different orders are possible? (Two orders are the same if they have the same number of each kind.)',
      choices: ['$36$', '$5$', '$3$', '$4$'],
      answer: 1,
      solution:
        'Route one, list in order. The mango count is pinned at $3$, so the only freedom is how the other $7 - 3 = 4$ smoothies split between peach and plum. Step peach down: $(4,0), (3,1), (2,2), (1,3), (0,4)$ — $5$ orders ✓. Route two, place one divider. Lay the $4$ non-mango smoothies in a row and drop in a single divider; everything before it is peach, everything after it is plum. A row of $4$ items has $5$ places for that divider (before the first, in each of the three gaps, after the last), so $5$ orders ✓. (The choice $36$ COUNTS EVERY ORDER OF $7$ SMOOTHIES and drops the mango condition entirely ✗; $3$ FORCES BOTH OTHER KINDS TO APPEAR, allowing only $(3,1), (2,2), (1,3)$ ✗; $4$ REPORTS THE NUMBER OF LEFTOVER SMOOTHIES rather than the number of splits, which is one more ✗.)',
    },
    {
      q: 'Ten identical beads are strung on three labeled cords $X$, $Y$, $Z$. Cord $X$ must hold exactly $4$ beads; cords $Y$ and $Z$ may hold any number of beads, including none. How many different results are there?',
      choices: ['$66$', '$5$', '$6$', '$7$'],
      answer: 3,
      solution:
        'Route one, list in order. With $X$ pinned at $4$, the remaining $6$ beads must be shared by $Y$ and $Z$. Step $Y$ down: $(6,0), (5,1), (4,2), (3,3), (2,4), (1,5), (0,6)$ — $7$ results ✓. Route two, add back the empty cases. If $Y$ and $Z$ each had to hold at least one bead, $Y$ could be $1, 2, 3, 4, 5$, which is $5$ results. The rule as written also permits the two results where one of them is bare, $(6,0)$ and $(0,6)$, so the total is $5 + 2 = 7$ ✓. (The choice $66$ COUNTS EVERY WAY TO PLACE $10$ BEADS on the three cords, ignoring the condition on $X$ ✗; $5$ FORBIDS AN EMPTY CORD even though the stem allows one ✗; $6$ REPORTS THE NUMBER OF LEFTOVER BEADS instead of the number of splits ✗.)',
    },
    {
      q: 'A tea shop sells three blends. Mei buys exactly $n$ cups, exactly $2$ of which are green; she may take any number of the other two blends, including none. Exactly $8$ different purchases are possible. (Two purchases are the same if they have the same number of each blend.) What is $n$?',
      choices: ['$8$', '$10$', '$9$', '$11$'],
      answer: 2,
      solution:
        'Route one, build the ladder by listing. With the green count pinned at $2$, a purchase is settled by how the other $n - 2$ cups split between the two remaining blends. For $n = 3$ that leftover is $1$ cup: $(1,0), (0,1)$, $2$ purchases. For $n = 4$: $(2,0), (1,1), (0,2)$, $3$ purchases. For $n = 5$: $4$ purchases. Each extra cup adds one purchase, so $n$ gives $n - 1$; setting $n - 1 = 8$ gives $n = 9$ ✓. Route two, place one divider. The $n - 2$ non-green cups form a row, and a purchase is one divider dropped into it, with $n - 1$ available places. So $n - 1 = 8$ and $n = 9$ ✓. (The choice $8$ REPORTS THE NUMBER OF PURCHASES AS $n$ ✗; $10$ SOLVES $n - 2 = 8$, forgetting that splitting $n-2$ cups between two blends has $n-1$ outcomes, not $n-2$ ✗; $11$ FORCES BOTH OTHER BLENDS TO APPEAR, giving $n - 3 = 8$ ✗.)',
    },
  ],
  // slot 3 — alphabetical strings and their purchase disguise
  [
    {
      q: 'How many three-letter strings, using only the letters $A$, $B$, $C$, $D$, $E$ with repeats allowed, are in alphabetical order (no letter comes earlier in the alphabet than the letter before it) and use at least two different letters?',
      choices: ['$30$', '$35$', '$20$', '$125$'],
      answer: 0,
      solution:
        'Route one, list in order, then remove. An alphabetical string is settled by how many of each letter it uses, so sort by the number of $A$’s. Three $A$’s: $1$ string. Two $A$’s: the last slot is $B$, $C$, $D$, or $E$, $4$ strings. One $A$: the other two slots form an alphabetical pair drawn from $B$, $C$, $D$, $E$, and listing them gives $BB, BC, BD, BE, CC, CD, CE, DD, DE, EE$, $10$ strings. No $A$’s: sort the three-slot strings over $B$, $C$, $D$, $E$ by their first letter — $10$ start with $B$, $6$ with $C$, $3$ with $D$, $1$ with $E$, so $20$. The total is $1 + 4 + 10 + 20 = 35$, and the $5$ one-letter strings $AAA, BBB, CCC, DDD, EEE$ must go: $35 - 5 = 30$ ✓. Route two, count by how many letters appear. Exactly two different letters: pick the pair, $\\binom{5}{2} = 10$ ways, and decide whether the earlier letter appears once or twice, $2$ ways — $20$ strings. Exactly three different letters: pick them, $\\binom{5}{3} = 10$ ways, and the string is then forced. Total $20 + 10 = 30$ ✓. (The choice $35$ FORGETS TO REMOVE THE FIVE ONE-LETTER STRINGS ✗; $20$ COUNTS ONLY THE STRINGS USING EXACTLY TWO LETTERS, dropping the ten that use three ✗; $125$ IS $5^3$, counting every string whether or not it is in alphabetical order ✗.)',
    },
    {
      q: 'A deli sells ham, turkey, and veggie wraps. Sam buys $4$ wraps, any number of each kind including none, but not all $4$ of the same kind. How many different purchases are possible? (Two purchases are the same if they have the same number of each kind.)',
      choices: ['$15$', '$9$', '$12$', '$81$'],
      answer: 2,
      solution:
        'Route one, list in order, then remove. A purchase is the triple (ham, turkey, veggie) adding to $4$. Step the ham count down: ham $4$ gives $1$ purchase; ham $3$ leaves $1$ wrap for turkey or veggie, $2$; ham $2$ leaves $2$, so $3$; ham $1$ leaves $3$, so $4$; ham $0$ leaves $4$, so $5$. That is $1 + 2 + 3 + 4 + 5 = 15$ purchases, of which $3$ are all one kind: $15 - 3 = 12$ ✓. Route two, count by how many kinds appear. Exactly two kinds: choose which two, $3$ ways, then split $4$ wraps with both kinds present — $(3,1), (2,2), (1,3)$, $3$ ways — for $9$ purchases. Exactly three kinds: every kind gets at least one, leaving one spare wrap to hand to one of the three kinds, $3$ purchases. Total $9 + 3 = 12$ ✓. (The choice $15$ KEEPS THE THREE ALL-ONE-KIND PURCHASES the stem forbids ✗; $9$ COUNTS ONLY THE TWO-KIND PURCHASES, dropping the three that use every kind ✗; $81$ IS $3^4$, treating the four wraps as distinguishable and ordered ✗.)',
    },
    {
      q: 'Using only the letters $A$, $B$, $C$ with repeats allowed, exactly $36$ strings of length $n$ are in alphabetical order (no letter comes earlier in the alphabet than the letter before it). What is $n$?',
      choices: ['$9$', '$7$', '$8$', '$10$'],
      answer: 1,
      solution:
        'Route one, build the ladder by listing. A string is settled by its counts of $A$, $B$, $C$. Length $1$: $3$ strings. Length $2$: $AA, AB, AC, BB, BC, CC$, $6$. Length $3$: $10$. Length $4$: $15$. The counts climb $3, 6, 10, 15, 21, 28, 36$ as $n$ runs $1, 2, 3, 4, 5, 6, 7$, since each new length adds one more case for the number of $A$’s. So $n = 7$ ✓. Route two, sum the cases in closed form. If the string holds $a$ copies of $A$, the remaining $n - a$ slots split between $B$ and $C$ in $n - a + 1$ ways, so the total is $(n+1) + n + \\cdots + 1 = \\frac{(n+1)(n+2)}{2}$. Setting that to $36$ gives $(n+1)(n+2) = 72 = 8 \\cdot 9$, so $n + 1 = 8$ and $n = 7$ ✓. (The choice $9$ STOPS AT $n + 2 = 9$ and reports that instead of $n$ ✗; $8$ USES $\\binom{n+1}{2}$ FOR THE COUNT, an off-by-one in which index sits on top ✗; $10$ COUNTS ONLY THE STRINGS USING ALL THREE LETTERS, whose count is $\\binom{n-1}{2} = 36$ ✗.)',
    },
  ],
  // slot 4 — odd parts
  [
    {
      q: 'How many ordered triples $(a, b, c)$ of positive odd integers satisfy $a + b + c = 9$?',
      choices: ['$28$', '$4$', '$10$', '$25$'],
      answer: 2,
      solution:
        'Route one, list in order. Sort by $a$, which must be $1$, $3$, $5$, or $7$. For $a = 1$, $b + c = 8$ with both odd: $(1,7), (3,5), (5,3), (7,1)$, $4$ triples. For $a = 3$, $b + c = 6$: $(1,5), (3,3), (5,1)$, $3$. For $a = 5$, $b + c = 4$: $(1,3), (3,1)$, $2$. For $a = 7$, only $(1,1)$. Total $4 + 3 + 2 + 1 = 10$ ✓. Route two, unordered first, then arrange. The sets of three positive odd numbers adding to $9$, written smallest first, are $1{+}1{+}7$, $1{+}3{+}5$, and $3{+}3{+}3$. The first has $3$ orderings, the second $6$, the third $1$: $3 + 6 + 1 = 10$ ✓. (The choice $28$ DROPS THE ODDNESS and counts every positive triple ✗; $4$ COUNTS ONLY THE CASE $a = 1$ ✗; $25$ PICKS $a$ AND $b$ FREELY from $\\{1, 3, 5, 7, 9\\}$ and forgets that $c$ must then still be a positive odd number ✗.)',
    },
    {
      q: 'Eleven identical logs are stacked in three labeled piles — front, middle, back — and every pile must hold an odd number of logs. How many different results are there?',
      choices: ['$15$', '$78$', '$45$', '$36$'],
      answer: 0,
      solution:
        'Route one, list in order. An odd pile holds at least $1$ log, so the front pile holds $1$, $3$, $5$, $7$, or $9$. Front $1$: the other two are odd and add to $10$, so the middle is $1, 3, 5, 7, 9$ — $5$ results. Front $3$: middle from $1, 3, 5, 7$ — $4$. Front $5$: $3$. Front $7$: $2$. Front $9$: $1$. Total $5 + 4 + 3 + 2 + 1 = 15$ ✓. Route two, unordered first, then arrange. The sets of three positive odd numbers adding to $11$ are $1{+}1{+}9$, $1{+}3{+}7$, $1{+}5{+}5$, and $3{+}3{+}5$, with $3$, $6$, $3$, and $3$ orderings: $3 + 6 + 3 + 3 = 15$ ✓. (The choice $78$ IGNORES THE ODD RULE and counts every stacking ✗; $45$ ONLY KEEPS THE PILES NON-EMPTY, which is weaker than odd ✗; $36$ IS $6 \\times 6$, choosing the front and middle piles freely from the six odd values $1$ through $11$ and forgetting the back pile must still come out positive and odd ✗.)',
    },
    {
      q: 'For a positive integer $N$, exactly $21$ ordered triples $(a, b, c)$ of positive odd integers satisfy $a + b + c = N$. What is $N$?',
      choices: ['$21$', '$11$', '$7$', '$13$'],
      answer: 3,
      solution:
        'Route one, build the ladder by listing. Three odd numbers add to an odd total, so $N$ is odd. $N = 3$: only $(1,1,1)$, $1$ triple. $N = 5$: $(1,1,3)$ in $3$ orders, so $3$. $N = 7$: $6$. $N = 9$: $10$. $N = 11$: $15$. $N = 13$: $21$ ✓, since each step of $2$ in $N$ adds one more value for $a$ and one more triple in every earlier case. So $N = 13$ ✓. Route two, halve the odd parts. Write $a = 2p + 1$, $b = 2q + 1$, $c = 2r + 1$ with $p$, $q$, $r$ non-negative; then $p + q + r = \\frac{N-3}{2} = m$. The number of non-negative triples adding to $m$ is $\\frac{(m+1)(m+2)}{2}$, and setting that to $21$ gives $(m+1)(m+2) = 42 = 6 \\cdot 7$, so $m = 5$ and $N = 2 \\cdot 5 + 3 = 13$ ✓. (The choice $21$ REPORTS THE NUMBER OF TRIPLES AS $N$ ✗; $11$ STOPS ONE RUNG EARLY on the ladder $1, 3, 6, 10, 15, 21$, where $N = 11$ gives only $15$ ✗; $7$ REPORTS THE $7$ FROM $\\binom{7}{2} = 21$ instead of $N$ ✗.)',
    },
  ],
  // slot 5 — a minimum on one share
  [
    {
      q: 'Nine identical marbles are shared between two jars labeled $A$ and $B$. Jar $A$ must receive at least $4$ marbles; jar $B$ may receive none. How many ways are there?',
      choices: ['$10$', '$5$', '$9$', '$6$'],
      answer: 3,
      solution:
        'Route one, list in order. Only jar $A$’s count matters, since jar $B$ takes the rest. Step $A$ down from $9$: $(9,0), (8,1), (7,2), (6,3), (5,4), (4,5)$, and $A = 3$ is already too small. That is $6$ ways ✓. Route two, count and remove. With no minimum, jar $A$ could hold $0$ through $9$, which is $10$ ways. The forbidden ones are $A = 0, 1, 2, 3$ — four of them — so $10 - 4 = 6$ ✓. (The choice $10$ DROPS THE MINIMUM ✗; $5$ READS “AT LEAST $4$” AS “MORE THAN $4$”, starting the list at $A = 5$ ✗; $9$ REMOVES ONLY ONE FORBIDDEN VALUE instead of all four ✗.)',
    },
    {
      q: 'How many ordered pairs $(x, y)$ of integers with $x \\geq 3$ and $y \\geq 2$ satisfy $x + y = 17$?',
      choices: ['$18$', '$13$', '$16$', '$12$'],
      answer: 1,
      solution:
        'Route one, list in order. Since $y = 17 - x$ must be at least $2$, we need $x \\leq 15$; together with $x \\geq 3$ that gives $x = 3, 4, 5, \\ldots, 15$. Stepping down from the top: $(15,2), (14,3), \\ldots, (3,14)$ — every whole number from $3$ to $15$ appears once, which is $15 - 3 + 1 = 13$ pairs ✓. Route two, shift both floors to zero. Put $u = x - 3$ and $v = y - 2$, so $u$ and $v$ are non-negative and $u + v = 17 - 3 - 2 = 12$. A non-negative pair adding to $12$ is settled by $u$, which runs $0$ through $12$: $13$ pairs ✓. (The choice $18$ DROPS BOTH FLOORS, letting $x$ run from $0$ to $17$ ✗; $16$ ONLY REQUIRES BOTH TO BE POSITIVE, with $x$ from $1$ to $16$ ✗; $12$ READS $x \\geq 3$ AS $x > 3$, starting the list at $x = 4$ ✗.)',
    },
    {
      q: 'Eleven identical erasers are shared between Pia and Quin. Pia must receive at least $m$ erasers; Quin may receive none. There are exactly $4$ ways. What is $m$?',
      choices: ['$8$', '$7$', '$4$', '$3$'],
      answer: 0,
      solution:
        'Route one, list in order and climb. A way is settled by Pia’s count, so try values of $m$ from the top. $m = 11$: Pia takes $11$ only, $1$ way. $m = 10$: $10$ or $11$, $2$ ways. $m = 9$: $3$ ways. $m = 8$: Pia takes $8, 9, 10, 11$ — $4$ ways ✓, so $m = 8$ ✓. Route two, count the allowed values directly. Pia’s share runs over the whole numbers from $m$ up to $11$, and that list holds $11 - m + 1 = 12 - m$ values. Setting $12 - m = 4$ gives $m = 8$ ✓. (The choice $7$ SOLVES $11 - m = 4$, forgetting that a run from $m$ to $11$ contains $12 - m$ numbers, not $11 - m$ ✗; $4$ REPORTS THE NUMBER OF WAYS AS $m$ ✗; $3$ REPORTS THE MOST QUIN CAN RECEIVE, $11 - 8$, instead of Pia’s minimum ✗.)',
    },
  ],
  // slot 6 — comparing two boxes
  [
    {
      q: 'Five identical coins are dropped into three boxes labeled $A$, $B$, $C$, and any box may be empty. In how many placements does box $A$ hold more coins than box $B$?',
      choices: ['$9$', '$21$', '$12$', '$3$'],
      answer: 0,
      solution:
        'Route one, list in order. A placement is settled by the pair (coins in $A$, coins in $B$) with $A > B$ and $A + B \\leq 5$, because box $C$ takes whatever is left. Step $B$ up from $0$. $B = 0$: $A = 1, 2, 3, 4, 5$, five placements. $B = 1$: $A = 2, 3, 4$, three placements. $B = 2$: $A$ would have to be at least $3$, and $2 + 3 = 5$ works, so one placement. $B = 3$ needs $A \\geq 4$ and $3 + 4 > 5$, so nothing further. Total $5 + 3 + 1 = 9$ ✓. Route two, pair off by swapping. Every placement of $5$ coins into three labeled boxes is a triple adding to $5$, and stepping $A$ down from $5$ gives $6 + 5 + 4 + 3 + 2 + 1 = 21$ of them. The ties $A = B$ are $(0,0,5), (1,1,3), (2,2,1)$ — three placements. Swapping $A$ and $B$ matches each of the remaining $21 - 3 = 18$ placements with a different one, exactly one of each pair having $A > B$, so half of $18$ is $9$ ✓. (The choice $21$ COUNTS EVERY PLACEMENT ✗; $12$ ALSO COUNTS THE THREE TIES, answering “at least as many” ✗; $3$ COUNTS ONLY THE TIES ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 7$ with $x < y$?',
      choices: ['$36$', '$20$', '$16$', '$4$'],
      answer: 2,
      solution:
        'Route one, list in order. Fix $x$ and let $y$ run, with $z = 7 - x - y$ forced to be non-negative. $x = 0$: $y$ from $1$ to $7$, seven triples. $x = 1$: $y$ from $2$ to $6$, five. $x = 2$: $y$ from $3$ to $5$, three. $x = 3$: only $y = 4$, one. $x = 4$ would need $y \\geq 5$ and $4 + 5 > 7$. Total $7 + 5 + 3 + 1 = 16$ ✓. Route two, pair off by swapping. All non-negative triples adding to $7$ number $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$. The ties $x = y$ force $z = 7 - 2x$ to be non-negative, so $x = 0, 1, 2, 3$ — four triples. Swapping $x$ and $y$ pairs up the other $36 - 4 = 32$, and exactly one triple in each pair has $x < y$: $32 \\div 2 = 16$ ✓. (The choice $36$ DROPS THE COMPARISON ✗; $20$ ANSWERS $x \\leq y$, adding the four ties ✗; $4$ COUNTS ONLY THE TIES ✗.)',
    },
    {
      q: 'Nine identical buttons are dropped into three cups labeled $A$, $B$, $C$; a cup may be empty. In how many placements does cup $A$ hold at least as many buttons as cup $B$?',
      choices: ['$25$', '$30$', '$55$', '$5$'],
      answer: 1,
      solution:
        'Route one, list in order. A placement is settled by (buttons in $A$, buttons in $B$) with $A \\geq B$ and $A + B \\leq 9$, since cup $C$ takes the rest. Step $B$ up. $B = 0$: $A = 0$ through $9$, ten placements. $B = 1$: $A = 1$ through $8$, eight. $B = 2$: $A = 2$ through $7$, six. $B = 3$: $A = 3$ through $6$, four. $B = 4$: $A = 4$ or $5$, two. $B = 5$ would need $A \\geq 5$ and $5 + 5 > 9$. Total $10 + 8 + 6 + 4 + 2 = 30$ ✓. Route two, pair off by swapping, then add the ties. All triples adding to $9$ number $10 + 9 + 8 + \\cdots + 1 = 55$. The ties $A = B$ need $9 - 2A \\geq 0$, so $A = 0, 1, 2, 3, 4$ — five placements. Swapping $A$ and $B$ splits the other $50$ evenly, giving $25$ with $A > B$; adding the five ties gives $25 + 5 = 30$ ✓. (The choice $25$ READS “AT LEAST AS MANY” AS “MORE THAN”, dropping the five ties ✗; $55$ DROPS THE COMPARISON ✗; $5$ COUNTS ONLY THE TIES ✗.)',
    },
  ],
  // slot 7 — a parity condition on one or two shares
  [
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 6$ with $x$ even? (Zero counts as even.)',
      choices: ['$28$', '$16$', '$12$', '$15$'],
      answer: 1,
      solution:
        'Route one, list in order. The even values of $x$ are $0$, $2$, $4$, $6$. Once $x$ is fixed, $y + z = 6 - x$ and the pair is settled by $y$, which runs from $0$ up to $6 - x$. So $x = 0$ gives $7$, $x = 2$ gives $5$, $x = 4$ gives $3$, and $x = 6$ gives $1$. Total $7 + 5 + 3 + 1 = 16$ ✓. Route two, count everything and remove the odd cases. All non-negative triples adding to $6$ number $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$. The odd values $x = 1, 3, 5$ contribute $6 + 4 + 2 = 12$, so the even ones number $28 - 12 = 16$ ✓. (The choice $28$ DROPS THE PARITY CONDITION ✗; $12$ IS THE ODD-$x$ COUNT, the complement ✗; $15$ FORGETS THE CASE $x = 6$, where $y = z = 0$ ✗.)',
    },
    {
      q: 'Eight identical cookies are handed to three children — Ana, Bo, Cy. Ana must receive an odd number of cookies; Bo and Cy may receive any number, including none. How many ways are there?',
      choices: ['$45$', '$25$', '$18$', '$20$'],
      answer: 3,
      solution:
        'Route one, list in order. Ana’s share must be odd, so it is $1$, $3$, $5$, or $7$. What is left goes to Bo and Cy, and that split is settled by Bo’s count. Ana $1$ leaves $7$, so $8$ ways. Ana $3$ leaves $5$, so $6$. Ana $5$ leaves $3$, so $4$. Ana $7$ leaves $1$, so $2$. Total $8 + 6 + 4 + 2 = 20$ ✓. Route two, count everything and remove the even cases. All handouts of $8$ cookies to three children number $9 + 8 + 7 + \\cdots + 1 = 45$. If Ana’s share is even it is $0, 2, 4, 6, 8$, contributing $9 + 7 + 5 + 3 + 1 = 25$. So the odd shares number $45 - 25 = 20$ ✓. (The choice $45$ DROPS THE ODD CONDITION ✗; $25$ IS THE EVEN-SHARE COUNT, the complement ✗; $18$ FORGETS THE CASE ANA TAKES $7$ ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 14$ with both $x$ and $y$ even? (Zero counts as even.)',
      choices: ['$120$', '$64$', '$36$', '$84$'],
      answer: 2,
      solution:
        'Route one, list in order. Let $x$ run through the even values $0, 2, 4, \\ldots, 14$. For each one, $y$ must be even with $y \\leq 14 - x$, so $y$ has $\\frac{14 - x}{2} + 1$ choices, and $z$ is then forced. Reading down the list, $x = 0$ gives $8$, then $7$, $6$, $5$, $4$, $3$, $2$, and $x = 14$ gives $1$. Total $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$ ✓. Route two, halve everything and use dividers. Since $14$ is even and $x$, $y$ are even, $z = 14 - x - y$ is even too. Write $x = 2a$, $y = 2b$, $z = 2c$; then $a + b + c = 7$ with $a, b, c$ non-negative, and each such triple gives exactly one original triple. Counting those with two dividers dropped among the $9$ places of a row of $7$ units and $2$ dividers gives $\\binom{9}{2} = 36$ ✓. (The choice $120$ DROPS BOTH PARITY CONDITIONS ✗; $64$ KEEPS ONLY “$x$ EVEN” and lets $y$ be anything ✗; $84$ IS THE COMPLEMENT, counting the triples in which at least one of $x$, $y$ is odd ✗.)',
    },
  ],
  // slot 8 — exactly one empty share
  [
    {
      q: 'Nine identical stickers are divided among three children — Pia, Quin, Rex — so that exactly one child receives none. How many divisions are possible?',
      choices: ['$55$', '$28$', '$24$', '$27$'],
      answer: 2,
      solution:
        'Route one, list in order after choosing the empty child. Pick which child receives nothing: $3$ ways. The other two must then split $9$ stickers with each getting at least one, and that split is settled by the first of them, which steps down $8, 7, 6, \\ldots, 1$ — $8$ ways. So $3 \\times 8 = 24$ ✓. Route two, subtract the other cases from the total. All divisions of $9$ stickers among three children number $10 + 9 + 8 + \\cdots + 1 = 55$. Those with every child served number $7 + 6 + 5 + \\cdots + 1 = 28$ (let Pia’s share run from $1$ to $7$ and count Quin’s options each time). Those with two children empty are the $3$ divisions where one child takes all $9$. So exactly one empty child gives $55 - 28 - 3 = 24$ ✓. (The choice $55$ COUNTS EVERY DIVISION ✗; $28$ COUNTS THE DIVISIONS WHERE NO CHILD IS EMPTY ✗; $27$ COUNTS EVERY DIVISION WITH AT LEAST ONE EMPTY CHILD, so it also keeps the three where two are empty ✗.)',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of non-negative integers satisfy $a + b + c = 8$ with exactly one of $a$, $b$, $c$ equal to $0$?',
      choices: ['$21$', '$45$', '$24$', '$27$'],
      answer: 0,
      solution:
        'Route one, list in order after choosing the zero. Pick which of the three is $0$: $3$ ways. The other two are positive and add to $8$, and stepping the first down gives $7, 6, 5, 4, 3, 2, 1$ — $7$ ways. So $3 \\times 7 = 21$ ✓. Route two, inclusion–exclusion. Triples with $a = 0$ number $9$ (the pair $b + c = 8$ is settled by $b$), and the same for $b = 0$ and for $c = 0$, giving $27$ tallies. A triple with exactly one zero is tallied once; a triple with two zeros — there are $3$ of these, $(8,0,0)$, $(0,8,0)$, $(0,0,8)$ — is tallied twice. So the exactly-one-zero count is $27 - 2 \\cdot 3 = 21$ ✓. (The choice $45$ COUNTS EVERY TRIPLE ✗; $24$ COUNTS EVERY TRIPLE WITH AT LEAST ONE ZERO, keeping the three with two zeros ✗; $27$ IS THE RAW TALLY $3 \\times 9$, which double-counts each triple that has two zeros ✗.)',
    },
    {
      q: 'Some identical balloons are divided among three children so that exactly one child receives none, and there are $30$ such divisions. How many balloons are there?',
      choices: ['$10$', '$30$', '$12$', '$11$'],
      answer: 3,
      solution:
        'Route one, list in order and climb. With $n$ balloons, pick the empty child ($3$ ways) and then split $n$ between the other two with each getting at least one, which is $n - 1$ ways as the first of them steps from $n - 1$ down to $1$. So the count is $3(n-1)$: $n = 9$ gives $24$, $n = 10$ gives $27$, $n = 11$ gives $30$ ✓. So there are $11$ balloons ✓. Route two, subtract the other cases. All divisions of $n$ balloons number $\\frac{(n+1)(n+2)}{2}$, those with every child served number $\\frac{(n-1)(n-2)}{2}$, and $3$ have two children empty. The difference is $\\frac{(n^2+3n+2) - (n^2-3n+2)}{2} - 3 = 3n - 3$. Setting $3n - 3 = 30$ gives $n = 11$ ✓. (The choice $10$ SOLVES $3n = 30$, forgetting that the two served children must each get at least one balloon ✗; $30$ REPORTS THE NUMBER OF DIVISIONS AS THE NUMBER OF BALLOONS ✗; $12$ SOLVES $3(n-2) = 30$, taking one balloon too many off the top ✗.)',
    },
  ],
  // slot 9 — alphabetical strings with a letter required
  [
    {
      q: 'How many six-letter strings, using only the letters $X$, $Y$, $Z$ with repeats allowed, are in alphabetical order (no letter comes earlier in the alphabet than the letter before it) and contain at least one $Y$?',
      choices: ['$28$', '$21$', '$7$', '$22$'],
      answer: 1,
      solution:
        'Route one, list in order, then remove. An alphabetical string is settled by its counts of $X$, $Y$, $Z$, which add to $6$. Stepping the $X$ count down from $6$ gives $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$ strings in all. The $Y$-free ones use only $X$ and $Z$, and the $X$ count there runs $0$ through $6$: $7$ strings. So $28 - 7 = 21$ ✓. Route two, count by how many $Y$’s there are. If the string holds $k$ copies of $Y$ with $k \\geq 1$, the other $6 - k$ slots split between $X$ and $Z$ in $7 - k$ ways. Summing over $k = 1, 2, 3, 4, 5, 6$ gives $6 + 5 + 4 + 3 + 2 + 1 = 21$ ✓. (The choice $28$ FORGETS THE “AT LEAST ONE $Y$” CONDITION ✗; $7$ IS THE $Y$-FREE COUNT, the complement ✗; $22$ MISCOUNTS THE $Y$-FREE STRINGS AS SIX, forgetting one end of the run — usually $XXXXXX$ or $ZZZZZZ$ ✗.)',
    },
    {
      q: 'A stand sells three sizes of cup — small, medium, large. Rui buys $7$ cups, any number of each size including none, but must include at least one medium. How many different purchases are possible? (Two purchases are the same if they have the same number of each size.)',
      choices: ['$36$', '$8$', '$15$', '$28$'],
      answer: 3,
      solution:
        'Route one, list in order, then remove. A purchase is the triple (small, medium, large) adding to $7$. Stepping the small count down from $7$ gives $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36$ purchases. Those with no medium split $7$ cups between small and large, and the small count runs $0$ through $7$: $8$ purchases. So $36 - 8 = 28$ ✓. Route two, set one medium aside first. Buy one medium up front; the remaining $6$ cups may then be any sizes at all, and this pairing is one-to-one because subtracting a medium from any qualifying purchase returns a free purchase of $6$. Stepping the small count down, free purchases of $6$ cups number $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$ ✓. (The choice $36$ FORGETS THE MEDIUM REQUIREMENT ✗; $8$ IS THE MEDIUM-FREE COUNT, the complement ✗; $15$ DEMANDS ALL THREE SIZES, which is stronger than what the stem asks ✗.)',
    },
    {
      q: 'How many five-digit strings, using only the digits $1$, $2$, $3$, are non-decreasing (no digit is smaller than the digit before it) and contain at least one $1$ and at least one $3$?',
      choices: ['$21$', '$15$', '$10$', '$9$'],
      answer: 2,
      solution:
        'Route one, list in order. Such a string is settled by its counts $(a, b, c)$ of $1$’s, $2$’s and $3$’s, adding to $5$ with $a \\geq 1$ and $c \\geq 1$. Step $a$ up. $a = 1$: $c$ may be $1, 2, 3, 4$, four strings. $a = 2$: $c = 1, 2, 3$, three. $a = 3$: $c = 1, 2$, two. $a = 4$: $c = 1$, one. Total $4 + 3 + 2 + 1 = 10$ ✓. Route two, inclusion–exclusion. All non-decreasing strings of length $5$ over three digits number $6 + 5 + 4 + 3 + 2 + 1 = 21$. Those with no $1$ use only $2$ and $3$, giving $6$; likewise $6$ have no $3$; and exactly $1$ string, $22222$, has neither. So $21 - 6 - 6 + 1 = 10$ ✓. (The choice $21$ DROPS BOTH REQUIREMENTS ✗; $15$ REQUIRES A $1$ BUT NOT A $3$ ✗; $9$ FORGETS TO ADD BACK $22222$, which was removed twice ✗.)',
    },
  ],
  // slot 10 — two colors placed independently
  [
    {
      q: 'Six identical green beads and three identical white beads are placed into two boxes labeled $1$ and $2$. A box may be empty, and beads of the same color are indistinguishable. How many different placements are there?',
      choices: ['$11$', '$28$', '$10$', '$56$'],
      answer: 1,
      solution:
        'Route one, list in order. A placement is settled by what box $1$ holds. Step the green count in box $1$ down from $6$; for each of those $7$ values the white count in box $1$ may be $0$, $1$, $2$, or $3$, giving $4$ placements. Reading the list, $4 + 4 + 4 + 4 + 4 + 4 + 4 = 28$ ✓. Route two, sort by how many beads box $1$ holds in total. If box $1$ holds $t$ beads, count the pairs (green, white) with green $+$ white $= t$, green $\\leq 6$, white $\\leq 3$: for $t = 0, 1, 2$ there are $1, 2, 3$ pairs; for $t = 3, 4, 5, 6$ there are $4$ each, since the white count is capped at $3$; for $t = 7, 8, 9$ there are $3, 2, 1$. Adding, $1 + 2 + 3 + 4 + 4 + 4 + 4 + 3 + 2 + 1 = 28$ ✓. (The choice $11$ ADDS THE TWO COLOR COUNTS instead of multiplying them ✗; $10$ TREATS ALL NINE BEADS AS ALIKE, ignoring the colors ✗; $56$ DOUBLES for no reason, as though the two boxes could be told apart twice over ✗.)',
    },
    {
      q: 'Three identical nickels and two identical dimes are dropped into three labeled jars; a jar may be empty, and coins of the same kind are indistinguishable. How many different results are there?',
      choices: ['$16$', '$21$', '$243$', '$60$'],
      answer: 3,
      solution:
        'Route one, list in order. The nickels and the dimes are placed separately, and a result is the pair of those two placements. Nickels: step the first jar’s count down from $3$ and count the splits of the rest between the other two jars — $4 + 3 + 2 + 1 = 10$. Dimes: the same reading gives $3 + 2 + 1 = 6$. Every nickel placement can meet every dime placement and no two pairings agree, so $10 \\times 6 = 60$ ✓. Route two, drop in dividers. Lay the $3$ nickels in a row with $2$ dividers to mark the jar boundaries; the arrangement is settled by which $2$ of the $5$ positions hold dividers, $\\binom{5}{2} = 10$ ways. The $2$ dimes with $2$ dividers give $\\binom{4}{2} = 6$ ways. Together, $10 \\times 6 = 60$ ✓. (The choice $16$ ADDS THE TWO COUNTS instead of multiplying ✗; $21$ TREATS ALL FIVE COINS AS ALIKE ✗; $243$ IS $3^5$, treating every coin as distinguishable ✗.)',
    },
    {
      q: 'Five identical red tiles and some identical blue tiles are placed into two labeled boxes; a box may be empty, and tiles of the same color are indistinguishable. There are $42$ placements in all. How many blue tiles are there?',
      choices: ['$7$', '$35$', '$6$', '$36$'],
      answer: 2,
      solution:
        'Route one, list in order and climb. The red tiles are settled by how many sit in box $1$, which runs $0$ through $5$: $6$ choices. With $b$ blue tiles the blue count in box $1$ runs $0$ through $b$: $b + 1$ choices. So the total is $6(b+1)$, and the ladder reads $b = 4 \\to 30$, $b = 5 \\to 36$, $b = 6 \\to 42$ ✓. So there are $6$ blue tiles ✓. Route two, divide the total by the red count. Every placement pairs one red choice with one blue choice, and the red choices number $6$ no matter what the blues do, so the blue choices number $42 \\div 6 = 7$. The blue count in box $1$ runs over $b + 1$ values, so $b + 1 = 7$ and $b = 6$ ✓. (The choice $7$ REPORTS $b + 1$, THE NUMBER OF BLUE CHOICES, instead of the number of blue tiles ✗; $35$ ADDS WHERE IT SHOULD MULTIPLY, solving $6 + (b+1) = 42$ ✗; $36$ TREATS ALL THE TILES AS ALIKE, solving $(5 + b) + 1 = 42$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 13, sections: { '13.2': s132 } }
