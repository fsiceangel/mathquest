// Counting & Probability chapter 3 — variations for section 3.2
// (Permutations with Repeated Elements). All problems and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: which objects are identical,
//    that a row or a stack has an order and is never flipped end for end, and
//    whether a number may begin with $0$.
//  - Route one is usually the section’s own discovery — overcount as if every
//    object were different, then divide by the factorial of each repeat count
//    — and route two is independent of it: choosing the positions of each kind
//    of object in turn, a gap placement, a block decomposition, or a running
//    count built up one object at a time.
//  - Each distractor is one named slip: forgetting to divide, dividing by only
//    one of the repeat counts, dividing by $k$ instead of $k!$, multiplying a
//    glued block of identical letters by its inner order, answering the
//    opposite question, or dropping a term from an inclusion-exclusion.

const s32 = [
  // slot 1 — the plain divide-by-the-repeats count, and the same count run backwards
  [
    {
      q: 'How many different arrangements of the letters of $RIFFRAFF$ are there? (An arrangement is a row of all eight letters read left to right.)',
      choices: ['$40320$', '$1680$', '$840$', '$20160$'],
      answer: 2,
      solution:
        'Route one, overcount and divide. The word has $8$ letters: $F$ four times, $R$ twice, and $I$ and $A$ once each. Tag the copies so all eight look different and there are $8! = 40320$ rows. Any one real arrangement comes from $4!$ shuffles of the $F$ tags and $2!$ shuffles of the $R$ tags, so each was counted $4!\\,2! = 24 \\times 2 = 48$ times, and the true count is $\\frac{40320}{48} = 840$ ✓. Route two, hand out the positions. Choose which $4$ of the $8$ spots hold $F$: $\\binom{8}{4} = 70$ ways. Choose which $2$ of the $4$ spots left hold $R$: $\\binom{4}{2} = 6$ ways. The $I$ takes either of the $2$ remaining spots and the $A$ takes the last one: $2$ ways. That is $70 \\times 6 \\times 2 = 840$ ✓. (The choice $40320$ FORGETS TO DIVIDE AT ALL, treating the four $F$’s as four different letters ✗; $1680 = \\frac{8!}{4!}$ DIVIDES ONLY FOR THE $F$’S and leaves the two $R$’s ordered ✗; $20160 = \\frac{8!}{2!}$ DIVIDES ONLY FOR THE $R$’S ✗.)',
    },
    {
      q: 'A gardener plants $7$ bulbs in a single row: $3$ identical tulip bulbs, $2$ identical iris bulbs, and $2$ identical crocus bulbs. Bulbs of the same kind cannot be told apart, and the row is read from one fixed end. How many different-looking rows are possible?',
      choices: ['$210$', '$5040$', '$840$', '$420$'],
      answer: 0,
      solution:
        'Route one, overcount and divide. Pretend all seven bulbs carry labels: $7! = 5040$ rows. Relabeling the three tulips among themselves ($3!$ ways), the two irises ($2!$), and the two crocuses ($2!$) never changes how the row looks, so every different-looking row was counted $3!\\,2!\\,2! = 6 \\times 2 \\times 2 = 24$ times. The count is $\\frac{5040}{24} = 210$ ✓. Route two, hand out the positions. Choose which $3$ of the $7$ spots get tulips: $\\binom{7}{3} = 35$. Choose which $2$ of the $4$ spots left get irises: $\\binom{4}{2} = 6$. The last two spots must both take crocuses, in exactly $1$ way. That is $35 \\times 6 = 210$ ✓. (The choice $5040$ TREATS BULBS OF THE SAME KIND AS DIFFERENT and never divides ✗; $840 = \\frac{7!}{3!}$ DIVIDES ONLY FOR THE TULIPS ✗; $420 = \\frac{7!}{3!\\,2!}$ DIVIDES FOR THE TULIPS AND ONE PAIR ONLY, leaving the other pair ordered ✗.)',
    },
    {
      q: 'A row of $n$ tiles is built from $2$ identical red tiles and $n - 2$ identical white tiles. Tiles of the same color cannot be told apart, the row is read from one fixed end, and exactly $28$ different-looking rows are possible. What is $n$?',
      choices: ['$28$', '$7$', '$56$', '$8$'],
      answer: 3,
      solution:
        'Route one, undo the division. Labeling all $n$ tiles gives $n!$ rows, and dividing for the $2$ reds and the $n-2$ whites leaves $\\frac{n!}{2!\\,(n-2)!} = \\frac{n(n-1)}{2}$ different-looking rows. Setting $\\frac{n(n-1)}{2} = 28$ gives $n(n-1) = 56$, and two consecutive whole numbers with product $56$ are $8$ and $7$, so $n = 8$ ✓. Route two, count the rows by their right-hand red tile. A row is fixed once you know the two spots holding red. Record each row by the further right of those two spots: if it is spot $j$, the other red tile has $j-1$ spots to its left, so spot $2$ gives $1$ row, spot $3$ gives $2$, and so on. The running total is $1 + 2 + 3 + \\cdots$, and $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$, so the last spot used is $8$ and $n = 8$ ✓. (The choice $28$ TAKES THE NUMBER OF ROWS AS THE NUMBER OF TILES ✗; $7$ NAMES THE SMALLER FACTOR OF $56 = 8 \\times 7$ and stops one short — $7$ tiles give only $21$ rows ✗; $56$ REPORTS THE UNDIVIDED PRODUCT $n(n-1)$, which still counts the two reds in both orders ✗.)',
    },
  ],
  // slot 2 — two kinds only, so one binomial choice does the whole job
  [
    {
      q: 'Nine bicycles stand in a row at a rack: $6$ identical blue bicycles and $3$ identical silver bicycles. Bicycles of the same color cannot be told apart, and the row is read from one fixed end. How many different-looking rows are possible?',
      choices: ['$362880$', '$60480$', '$504$', '$84$'],
      answer: 3,
      solution:
        'Route one, overcount and divide. With all nine bicycles labeled there are $9! = 362880$ rows. Shuffling the six blue labels among themselves ($6!$ ways) and the three silver labels among themselves ($3!$ ways) leaves the row looking the same, so each different-looking row was counted $6!\\,3! = 720 \\times 6 = 4320$ times. The count is $\\frac{362880}{4320} = 84$ ✓. Route two, count by the rightmost silver bicycle. A row is fixed by which three spots hold silver, so count triples of spots $a < b < c$ by the largest one. If $c = j$, the other two silver spots are any two of the $j-1$ spots to the left, and pairs from $2, 3, 4, 5, 6, 7, 8$ spots number $1, 3, 6, 10, 15, 21, 28$. Adding, $1 + 3 + 6 + 10 + 15 + 21 + 28 = 84$ ✓. (The choice $362880$ TREATS EVERY BICYCLE AS DIFFERENT and never divides ✗; $60480 = \\frac{9!}{3!}$ DIVIDES ONLY FOR THE SILVER ONES ✗; $504 = \\frac{9!}{6!}$ DIVIDES ONLY FOR THE BLUE ONES ✗.)',
    },
    {
      q: 'A courier walks from one corner of a city grid to another, one block at a time, going $5$ blocks east and $3$ blocks north in some order. Every route uses exactly these $8$ blocks of walking, and two routes are different when the order of the moves differs. How many different routes are there?',
      choices: ['$40320$', '$56$', '$336$', '$6720$'],
      answer: 1,
      solution:
        'Route one, overcount and divide. A route is a list of $8$ moves, five of them east and three of them north. Tag the moves so all eight are different: $8! = 40320$ lists. Reordering the five east tags ($5!$ ways) or the three north tags ($3!$ ways) gives the same walk, so each route was counted $5!\\,3! = 120 \\times 6 = 720$ times, and there are $\\frac{40320}{720} = 56$ routes ✓. Route two, build the grid up corner by corner. Write beside each corner the number of routes reaching it from the start. Every corner on the bottom row or the left column has just one route, and any other corner is reached only from the corner west of it or the corner south of it, so its number is the sum of those two. Filling the six-by-four array of corners row by row: $1, 1, 1, 1, 1, 1$; then $1, 2, 3, 4, 5, 6$; then $1, 3, 6, 10, 15, 21$; then $1, 4, 10, 20, 35, 56$. The far corner carries $56$ ✓. (The choice $40320$ TREATS THE EIGHT MOVES AS EIGHT DIFFERENT THINGS ✗; $336 = \\frac{8!}{5!}$ DIVIDES ONLY FOR THE EAST MOVES ✗; $6720 = \\frac{8!}{3!}$ DIVIDES ONLY FOR THE NORTH MOVES ✗.)',
    },
    {
      q: 'A row is hung from $4$ identical red flags together with some identical blue flags. Flags of the same color cannot be told apart, the row is read from one fixed end, and exactly $126$ different-looking rows are possible. How many blue flags are there?',
      choices: ['$5$', '$9$', '$126$', '$4$'],
      answer: 0,
      solution:
        'Route one, undo the division. With $b$ blue flags the row holds $4 + b$ flags and there are $\\frac{(4+b)!}{4!\\,b!}$ different-looking rows. Try lengths in turn: a row of $8$ gives $\\frac{8!}{4!\\,4!} = 70$, a row of $9$ gives $\\frac{9!}{4!\\,5!} = 126$, and a row of $10$ gives $210$. The counts only climb as the row grows, so the row has $9$ flags and $9 - 4 = 5$ of them are blue ✓. Route two, count the rows by the rightmost red flag. A row of length $n$ is fixed by which four spots hold red flags, so record each row by the furthest right of those four: if that is spot $j$, the other three reds are any three of the $j-1$ spots to its left, and triples from $3, 4, 5, 6, 7, 8$ spots number $1, 4, 10, 20, 35, 56$. The running totals are $1, 5, 15, 35, 70, 126$, reaching $126$ once spot $9$ is available, so the row holds $9$ flags and $5$ are blue ✓. (The choice $9$ NAMES THE TOTAL NUMBER OF FLAGS instead of the blue ones ✗; $126$ TAKES THE NUMBER OF ROWS AS A NUMBER OF FLAGS ✗; $4$ REPORTS THE RED FLAGS, a number the stem already gives, and $4$ blue flags would give only $70$ rows ✗.)',
    },
  ],
  // slot 3 — one repeated kind, and the repeat count asked for in reverse
  [
    {
      q: 'How many different arrangements of the letters of $VACUUM$ are there? (An arrangement is a row of all six letters read left to right.)',
      choices: ['$720$', '$360$', '$180$', '$120$'],
      answer: 1,
      solution:
        'Route one, overcount and divide. The six letters are $V, A, C, U, U, M$, and only $U$ repeats, twice. Tagging the two $U$’s gives $6! = 720$ rows, and swapping the two tags leaves the word unchanged, so each arrangement was counted $2! = 2$ times: $\\frac{720}{2} = 360$ ✓. Route two, hand out the positions. Choose the two spots that hold $U$: $\\binom{6}{2} = 15$ ways. The four remaining letters $V$, $A$, $C$, $M$ are all different and fill the four remaining spots in $4! = 24$ orders. That is $15 \\times 24 = 360$ ✓. (The choice $720$ FORGETS TO DIVIDE for the repeated $U$ ✗; $180$ DIVIDES BY $2!\\,2!$, as though a second letter also repeated ✗; $120 = \\frac{720}{3!}$ DIVIDES BY $3!$, as though there were three $U$’s ✗.)',
    },
    {
      q: 'Five identical apples, one orange, and one pear are set in a row on a shelf. The apples cannot be told apart from one another, the orange and the pear are each unlike everything else, and the row is read from one fixed end. How many different-looking rows are possible?',
      choices: ['$5040$', '$21$', '$840$', '$42$'],
      answer: 3,
      solution:
        'Route one, overcount and divide. Label all seven pieces of fruit: $7! = 5040$ rows. Only the five apples are interchangeable, and shuffling their labels among themselves in $5! = 120$ ways leaves the row looking the same, so $\\frac{5040}{120} = 42$ ✓. Route two, place the two odd fruits. The row looks the same everywhere the apples sit, so a row is fixed once the orange’s spot and the pear’s spot are known. The orange has $7$ spots to choose from and the pear has $6$ left, giving $7 \\times 6 = 42$ choices, and the five apples then fill the remaining five spots in exactly one way ✓. (The choice $5040$ TREATS THE FIVE APPLES AS DIFFERENT ✗; $21$ DIVIDES BY AN EXTRA $2!$, as though the orange and the pear were also alike ✗; $840 = \\frac{7!}{3!}$ DIVIDES BY $3!$ INSTEAD OF $5!$, using the wrong repeat count ✗.)',
    },
    {
      q: 'A $7$-letter word has one letter repeated exactly $k$ times, and all of its other letters are different from one another and from the repeated letter. The word has exactly $840$ different arrangements of its seven letters. What is $k$?',
      choices: ['$6$', '$2$', '$3$', '$4$'],
      answer: 2,
      solution:
        'Route one, undo the division. Seven tagged letters give $7! = 5040$ rows, and only the $k$ copies of the repeated letter are interchangeable, so the number of arrangements is $\\frac{5040}{k!}$. Setting $\\frac{5040}{k!} = 840$ gives $k! = \\frac{5040}{840} = 6$, and the only whole number with $k! = 6$ is $k = 3$ ✓. Route two, hand out the positions and test each $k$. Choose the $k$ spots for the repeated letter, then let the $7-k$ different letters fill the rest in $(7-k)!$ orders: the count is $\\binom{7}{k}(7-k)!$. For $k = 2$ that is $21 \\times 120 = 2520$; for $k = 3$ it is $35 \\times 24 = 840$; for $k = 4$ it is $35 \\times 6 = 210$. Only $k = 3$ gives $840$ ✓. (The choice $6$ NAMES $k!$ RATHER THAN $k$, stopping one step short ✗; $2$ WOULD GIVE $2520$ ARRANGEMENTS, not $840$ ✗; $4$ WOULD GIVE $210$ ARRANGEMENTS, dividing by too much ✗.)',
    },
  ],
  // slot 4 — two repeated kinds at once, forwards and backwards
  [
    {
      q: 'How many eight-digit numbers can be formed using each of the digits $2, 2, 2, 5, 5, 5, 5, 9$ exactly once? (Digits that are equal cannot be told apart, so two numbers are different only when they read differently.)',
      choices: ['$280$', '$40320$', '$1680$', '$6720$'],
      answer: 0,
      solution:
        'Route one, overcount and divide. No digit is $0$, so every ordering is a genuine eight-digit number. Tag the digits so all eight are different: $8! = 40320$ orderings. Shuffling the four $5$ tags ($4!$ ways) or the three $2$ tags ($3!$ ways) leaves the number unchanged, so each number was counted $4!\\,3! = 24 \\times 6 = 144$ times, giving $\\frac{40320}{144} = 280$ ✓. Route two, hand out the places. Choose which $4$ of the $8$ places hold a $5$: $\\binom{8}{4} = 70$. Choose which $3$ of the $4$ places left hold a $2$: $\\binom{4}{3} = 4$. The single $9$ takes the last place. That is $70 \\times 4 = 280$ ✓. (The choice $40320$ TREATS EQUAL DIGITS AS DIFFERENT ✗; $1680 = \\frac{8!}{4!}$ DIVIDES ONLY FOR THE $5$’S ✗; $6720 = \\frac{8!}{3!}$ DIVIDES ONLY FOR THE $2$’S ✗.)',
    },
    {
      q: 'A tower is built by stacking $8$ cubes in a column: $3$ identical red cubes, $3$ identical blue cubes, and $2$ identical yellow cubes. Cubes of the same color cannot be told apart, and the tower is read from the bottom up. How many different towers are possible?',
      choices: ['$40320$', '$3360$', '$560$', '$1120$'],
      answer: 2,
      solution:
        'Route one, overcount and divide. Label all eight cubes: $8! = 40320$ towers. Relabeling the three reds among themselves ($3!$), the three blues among themselves ($3!$), and the two yellows among themselves ($2!$) leaves the tower looking the same, so each tower was counted $3!\\,3!\\,2! = 6 \\times 6 \\times 2 = 72$ times: $\\frac{40320}{72} = 560$ ✓. Route two, hand out the levels. Choose which $3$ of the $8$ levels hold red cubes: $\\binom{8}{3} = 56$. Choose which $3$ of the $5$ levels left hold blue cubes: $\\binom{5}{3} = 10$. The two remaining levels must both be yellow, in exactly one way. That is $56 \\times 10 = 560$ ✓. (The choice $40320$ TREATS EVERY CUBE AS DIFFERENT ✗; $3360 = \\frac{8!}{3!\\,2!}$ DIVIDES FOR ONLY ONE OF THE TWO COLORS THAT APPEAR THREE TIMES ✗; $1120 = \\frac{8!}{3!\\,3!}$ FORGETS THE $2!$ FOR THE YELLOW PAIR ✗.)',
    },
    {
      q: 'Using $n$ copies of the digit $2$ and two copies of the digit $9$, and no other digits, exactly $36$ different numbers can be formed, each using all $n + 2$ digits. What is $n$?',
      choices: ['$36$', '$7$', '$9$', '$8$'],
      answer: 1,
      solution:
        'Route one, undo the division. The number has $n + 2$ digits, and dividing the $(n+2)!$ tagged orderings by $n!$ for the $2$’s and $2!$ for the $9$’s leaves $\\frac{(n+2)(n+1)}{2}$ different numbers. Setting that equal to $36$ gives $(n+2)(n+1) = 72$, and two consecutive whole numbers with product $72$ are $9$ and $8$, so $n + 2 = 9$ and $n = 7$ ✓. Route two, count the numbers by the later $9$. A number is fixed once you know which two places hold a $9$. Record each number by the further right of those two places: if it is place $j$, the earlier $9$ has $j - 1$ places to its left, so the running total across places $2, 3, 4, \\ldots$ is $1 + 2 + 3 + \\cdots$. Since $1 + 2 + \\cdots + 8 = 36$, the last place used is place $9$, the number has $9$ digits, and $9 - 2 = 7$ of them are $2$’s ✓. (The choice $36$ TAKES THE NUMBER OF NUMBERS AS A DIGIT COUNT ✗; $9$ NAMES THE TOTAL NUMBER OF DIGITS rather than the count of $2$’s ✗; $8$ NAMES THE SMALLER FACTOR OF $72 = 9 \\times 8$, and $8$ copies of $2$ would give $45$ numbers ✗.)',
    },
  ],
  // slot 5 — pin a letter in place first, then divide only for what is still free
  [
    {
      q: 'How many arrangements of the letters of $ALFALFA$ begin with $L$? (An arrangement is a row of all seven letters read left to right.)',
      choices: ['$210$', '$120$', '$60$', '$30$'],
      answer: 2,
      solution:
        'Route one, pin first, then divide. The word holds $A$ three times, $L$ twice, and $F$ twice. Put one $L$ in the first spot; there is one way to do that, since the two $L$’s are identical. What is left to arrange is $A, A, A, L, F, F$ — six letters with the $A$ repeated three times and the $F$ repeated twice, while the surviving $L$ now stands alone. So the count is $\\frac{6!}{3!\\,2!} = \\frac{720}{12} = 60$ ✓. Route two, hand out the six remaining spots. Spot one is $L$. Of the six spots left, choose $3$ for the $A$’s: $\\binom{6}{3} = 20$. Of the $3$ spots then left, choose $2$ for the $F$’s: $\\binom{3}{2} = 3$. The last spot takes the second $L$. That is $20 \\times 3 = 60$ ✓. (The choice $210 = \\frac{7!}{3!\\,2!\\,2!}$ IGNORES THE RESTRICTION and counts every arrangement ✗; $120 = \\frac{6!}{3!}$ DIVIDES ONLY FOR THE $A$’S and leaves the two $F$’s ordered ✗; $30 = \\frac{6!}{3!\\,2!\\,2!}$ DIVIDES BY AN EXTRA $2!$ FOR THE $L$’S, but one $L$ is pinned and the other stands alone, so there is nothing there to divide out ✗.)',
    },
    {
      q: 'Eight cars fill a row of eight parking spaces: $3$ identical white cars, $3$ identical black cars, and $2$ identical silver cars. Cars of the same color cannot be told apart, and the spaces are numbered from one fixed end. In how many different-looking rows is a silver car in the first space?',
      choices: ['$140$', '$560$', '$840$', '$70$'],
      answer: 0,
      solution:
        'Route one, pin first, then divide. Put a silver car in space one; there is one way, since the two silver cars are identical. The seven spaces left hold $3$ white, $3$ black, and the one remaining silver car, and only the whites and the blacks repeat: $\\frac{7!}{3!\\,3!} = \\frac{5040}{36} = 140$ ✓. Route two, hand out the seven remaining spaces. Choose which $3$ of them hold white cars: $\\binom{7}{3} = 35$. Choose which $3$ of the $4$ spaces left hold black cars: $\\binom{4}{3} = 4$. The single space still open takes the second silver car. That is $35 \\times 4 = 140$ ✓. (The choice $560 = \\frac{8!}{3!\\,3!\\,2!}$ COUNTS EVERY ROW and never applies the restriction ✗; $840 = \\frac{7!}{3!}$ DIVIDES FOR ONLY ONE OF THE TWO COLORS THAT APPEAR THREE TIMES ✗; $70 = \\frac{7!}{3!\\,3!\\,2!}$ DIVIDES BY AN EXTRA $2!$ FOR THE SILVER CARS, though only one silver car is still free ✗.)',
    },
    {
      q: 'In how many arrangements of the letters of $ALFALFA$ are the first and last letters the same letter? (An arrangement is a row of all seven letters read left to right.)',
      choices: ['$30$', '$90$', '$40$', '$50$'],
      answer: 3,
      solution:
        'Route one, casework on the shared letter, pinning then dividing. The word holds $A$ three times, $L$ twice, and $F$ twice, so the shared letter must be one that appears at least twice — any of the three. Both ends $A$: the five middle letters are $A, L, L, F, F$, giving $\\frac{5!}{2!\\,2!} = 30$. Both ends $L$: the middle is $A, A, A, F, F$, giving $\\frac{5!}{3!\\,2!} = 10$. Both ends $F$: the middle is $A, A, A, L, L$, giving $\\frac{5!}{3!\\,2!} = 10$. Adding, $30 + 10 + 10 = 50$ ✓. Route two, count position sets. An arrangement is fixed by which $3$ spots hold $A$, which $2$ of the rest hold $L$, and the last $2$ hold $F$. The ends are spots $1$ and $7$, and they match exactly when both belong to the $A$ set, or both make up the $L$ set, or both make up the $F$ set. Both in the $A$ set: the third $A$ is one of the other $5$ spots ($5$ ways), then $2$ of the $4$ spots left are $L$: $5 \\times \\binom{4}{2} = 5 \\times 6 = 30$. The $L$ set is exactly $\\{1, 7\\}$: choose $3$ of the other $5$ spots for $A$, $\\binom{5}{3} = 10$. The $F$ set is exactly $\\{1, 7\\}$: likewise $10$. That is $30 + 10 + 10 = 50$ ✓. (The choice $30$ COUNTS ONLY THE CASE WHERE BOTH ENDS ARE $A$ ✗; $90$ ASSUMES ALL THREE LETTERS GIVE THE $A$ COUNT OF $30$, but $L$ and $F$ each have only one spare copy for the middle ✗; $40$ DROPS ONE OF THE THREE CASES, adding $30 + 10$ ✗.)',
    },
  ],
  // slot 6 — glue a block, and remember the block has no inner order to divide out
  [
    {
      q: 'In how many arrangements of the letters of $NONSENSE$ are the three $N$’s all next to each other? (An arrangement is a row of all eight letters read left to right, and "next to each other" means the three $N$’s occupy three consecutive spots.)',
      choices: ['$1680$', '$1080$', '$720$', '$180$'],
      answer: 3,
      solution:
        'Route one, glue the block, then divide. The word holds $N$ three times, $S$ twice, $E$ twice, and one $O$. Glue the three $N$’s into a single block $NNN$. What is being arranged is now six things: the block, $O$, $S$, $S$, $E$, $E$. Tagging them gives $6! = 720$ rows. The block gets no factor of its own: shuffling three identical $N$’s inside it changes nothing you can see. Dividing by $2!$ for the $S$’s and $2!$ for the $E$’s gives $\\frac{720}{4} = 180$ ✓. Route two, choose where the block sits, then hand out the rest. The block covers three consecutive spots, so it can start at spot $1, 2, 3, 4, 5$ or $6$: $6$ placements. The five spots outside the block hold $O, S, S, E, E$; choose $2$ of the $5$ for the $S$’s ($\\binom{5}{2} = 10$), then $2$ of the $3$ left for the $E$’s ($\\binom{3}{2} = 3$), and the $O$ takes the last one: $10 \\times 3 = 30$. That is $6 \\times 30 = 180$ ✓. (The choice $1680 = \\frac{8!}{3!\\,2!\\,2!}$ COUNTS EVERY ARRANGEMENT and ignores the restriction ✗; $1080 = 180 \\times 3!$ MULTIPLIES BY THE BLOCK’S INNER ORDER, but the three $N$’s are identical ✗; $720$ USES $6!$ FOR THE SIX THINGS AND NEVER DIVIDES for the $S$’s and $E$’s ✗.)',
    },
    {
      q: 'A shelf holds $8$ books in a row: $4$ identical copies of a novel, $2$ identical copies of an atlas, and $2$ identical copies of a cookbook. Copies of the same title cannot be told apart, and the shelf is read from one fixed end. In how many different-looking shelvings are the two cookbooks next to each other?',
      choices: ['$420$', '$105$', '$210$', '$315$'],
      answer: 1,
      solution:
        'Route one, glue the block, then divide. Glue the two cookbooks into one block. What is being shelved is now seven things: the block, $4$ identical novels, and $2$ identical atlases. Tagging gives $7! = 5040$ rows, and the block gets no factor of its own, because the two cookbooks inside it are identical copies. Dividing by $4!$ for the novels and $2!$ for the atlases gives $\\frac{5040}{48} = 105$ ✓. Route two, choose where the pair sits, then hand out the rest. The two cookbooks occupy spots $i$ and $i+1$ for $i = 1, 2, \\ldots, 7$: $7$ placements. The six spots left hold $4$ novels and $2$ atlases, and the shelving is fixed once you pick which $2$ of those six hold the atlases: $\\binom{6}{2} = 15$. That is $7 \\times 15 = 105$ ✓. (The choice $420 = \\frac{8!}{4!\\,2!\\,2!}$ COUNTS EVERY SHELVING with no restriction ✗; $210 = 105 \\times 2$ MULTIPLIES BY THE BLOCK’S INNER ORDER, though the two cookbooks are identical ✗; $315 = 420 - 105$ ANSWERS THE OPPOSITE QUESTION, the shelvings where the cookbooks are apart ✗.)',
    },
    {
      q: 'In how many arrangements of the letters of $NONSENSE$ are the two $E$’s next to each other and the two $S$’s also next to each other? (An arrangement is a row of all eight letters read left to right.)',
      choices: ['$120$', '$480$', '$420$', '$1680$'],
      answer: 0,
      solution:
        'Route one, glue both blocks, then divide. Glue the two $E$’s into one block and the two $S$’s into another. What is being arranged is six things: the $E$ block, the $S$ block, $N$, $N$, $N$, and $O$. Tagging gives $6! = 720$ rows, and neither block earns a factor, since each holds two identical letters. Only the three $N$’s repeat, so divide by $3!$: $\\frac{720}{6} = 120$ ✓. Route two, place the distinguishable pieces one at a time. The row breaks into six pieces in order — two blocks, three $N$’s, and an $O$ — and a piece order is fixed once you say where the $E$ block, the $S$ block, and the $O$ go, because the $N$’s then fill whatever is left in exactly one way. The $E$ block takes any of the $6$ piece positions, the $S$ block any of the $5$ left, and the $O$ any of the $4$ still open: $6 \\times 5 \\times 4 = 120$ ✓. (The choice $480 = 120 \\times 2! \\times 2!$ MULTIPLIES BY THE INNER ORDER OF BOTH BLOCKS, though each block holds two identical letters ✗; $420$ COUNTS ONLY THE $E$ CONDITION, the arrangements with the $E$’s together and the $S$’s left free ✗; $1680$ IS EVERY ARRANGEMENT, with neither condition applied ✗.)',
    },
  ],
  // slot 7 — "not next to each other": complement one way, gaps the other
  [
    {
      q: 'In how many arrangements of the letters of $TOFFEE$ are the two $F$’s not next to each other? (An arrangement is a row of all six letters read left to right.)',
      choices: ['$180$', '$120$', '$60$', '$240$'],
      answer: 1,
      solution:
        'Route one, count everything and subtract. The six letters are $T, O, F, F, E, E$, so all arrangements number $\\frac{6!}{2!\\,2!} = \\frac{720}{4} = 180$. Now count the ones to throw away: glue the two $F$’s into a block, leaving five things — the block, $T$, $O$, $E$, $E$ — which arrange in $\\frac{5!}{2!} = 60$ ways, with no factor for the block since the $F$’s are identical. So the $F$’s are apart in $180 - 60 = 120$ arrangements ✓. Route two, place the other letters and use the gaps. Arrange $T, O, E, E$ first: $\\frac{4!}{2!} = 12$ ways. Each such row has $5$ gaps — before it, in its three interior slots, and after it — and the two $F$’s must land in two different gaps so that they cannot touch. Since the $F$’s are identical, the gaps are simply chosen, not ordered: $\\binom{5}{2} = 10$ ways. That is $12 \\times 10 = 120$ ✓. (The choice $180$ COUNTS EVERY ARRANGEMENT with no restriction ✗; $60$ ANSWERS THE OPPOSITE QUESTION, the arrangements where the $F$’s do touch ✗; $240 = 12 \\times 5 \\times 4$ ORDERS THE TWO GAP CHOICES, treating the identical $F$’s as different ✗.)',
    },
    {
      q: 'Seven scoops are stacked in a cone: $3$ identical vanilla, $2$ identical chocolate, and $2$ identical mango. Scoops of the same flavor cannot be told apart, and the stack is read from the bottom up. In how many different stacks do the two chocolate scoops not touch each other?',
      choices: ['$210$', '$60$', '$90$', '$150$'],
      answer: 3,
      solution:
        'Route one, count everything and subtract. All stacks number $\\frac{7!}{3!\\,2!\\,2!} = \\frac{5040}{24} = 210$. Stacks with the chocolates touching: glue them into one block, leaving six things — the block, $3$ vanilla, $2$ mango — which arrange in $\\frac{6!}{3!\\,2!} = \\frac{720}{12} = 60$ ways, with no factor for the block since the two chocolate scoops are identical. So $210 - 60 = 150$ ✓. Route two, stack the other flavors and use the gaps. Stack the five non-chocolate scoops first: $3$ vanilla and $2$ mango give $\\frac{5!}{3!\\,2!} = 10$ stacks. Each such stack offers $6$ gaps — below it, in its four interior slots, and above it — and the two identical chocolate scoops go into two different gaps: $\\binom{6}{2} = 15$ ways. That is $10 \\times 15 = 150$ ✓. (The choice $210$ COUNTS EVERY STACK with no restriction ✗; $60$ ANSWERS THE OPPOSITE QUESTION, the stacks where the chocolates touch ✗; $90 = 210 - 120$ DOUBLES THE GLUED BLOCK, subtracting $60 \\times 2$ as though the two identical chocolate scoops had an inner order ✗.)',
    },
    {
      q: 'In how many arrangements of the letters of $TOFFEE$ are the two $F$’s not next to each other and the two $E$’s also not next to each other? (An arrangement is a row of all six letters read left to right.)',
      choices: ['$120$', '$60$', '$84$', '$24$'],
      answer: 2,
      solution:
        'Route one, subtract both bad sets and add back the overlap. All arrangements: $\\frac{6!}{2!\\,2!} = 180$. Arrangements with the $F$’s together: glue $FF$, leaving the block, $T$, $O$, $E$, $E$, so $\\frac{5!}{2!} = 60$. Arrangements with the $E$’s together: by the same reasoning, $60$. Arrangements counted in both: glue both pairs, leaving four different things — the $F$ block, the $E$ block, $T$, $O$ — so $4! = 24$. The count is $180 - 60 - 60 + 24 = 84$ ✓. Route two, gaps first, then trim. Arrange $T, O, E, E$ ($\\frac{4!}{2!} = 12$ ways) and drop the two identical $F$’s into two of the $5$ gaps, $\\binom{5}{2} = 10$ ways: $120$ rows in which the $F$’s are apart. Among those, the $E$’s end up touching exactly when the $E$’s were already side by side in the four-letter row and no $F$ was dropped into the gap between them. Four-letter rows with the $E$’s together number $3! = 6$, and for each of them the two $F$’s must avoid that one gap and take $2$ of the other $4$: $\\binom{4}{2} = 6$. That removes $6 \\times 6 = 36$ rows, leaving $120 - 36 = 84$ ✓. (The choice $120$ STOPS AFTER THE $F$ CONDITION and never checks the $E$’s ✗; $60 = 180 - 60 - 60$ SUBTRACTS BOTH BAD SETS WITHOUT ADDING BACK the $24$ arrangements counted twice ✗; $24$ REPORTS THE OVERLAP, the arrangements in which both pairs are together ✗.)',
    },
  ],
  // slot 8 — "no two alike are adjacent": gap placement, and the same idea doubled
  [
    {
      q: 'In how many arrangements of the letters of $TENNESSEE$ are no two $S$’s next to each other? (An arrangement is a row of all nine letters read left to right.)',
      choices: ['$2940$', '$3780$', '$840$', '$5880$'],
      answer: 0,
      solution:
        'Route one, place the others and use the gaps. The word holds $E$ four times, $N$ twice, $S$ twice, and one $T$. Arrange the seven non-$S$ letters $T, E, E, E, E, N, N$ first: $\\frac{7!}{4!\\,2!} = \\frac{5040}{48} = 105$ rows. Each such row offers $8$ gaps — before it, in its six interior slots, and after it — and the two identical $S$’s take two different gaps: $\\binom{8}{2} = 28$. That is $105 \\times 28 = 2940$ ✓. Route two, count everything and subtract. All arrangements: $\\frac{9!}{4!\\,2!\\,2!} = \\frac{362880}{96} = 3780$. Arrangements with the $S$’s together: glue them into a block, leaving eight things — the block, $T$, four $E$’s, two $N$’s — which arrange in $\\frac{8!}{4!\\,2!} = \\frac{40320}{48} = 840$ ways, with no factor for the block. So $3780 - 840 = 2940$ ✓. (The choice $3780$ COUNTS EVERY ARRANGEMENT ✗; $840$ ANSWERS THE OPPOSITE QUESTION, the arrangements where the $S$’s do touch ✗; $5880 = 105 \\times 8 \\times 7$ ORDERS THE TWO GAP CHOICES, treating the identical $S$’s as different ✗.)',
    },
    {
      q: 'Ten trees are planted in a row: $6$ identical oaks and $4$ identical maples. Trees of the same kind cannot be told apart, and the row is read from one fixed end. In how many plantings are no two maples next to each other?',
      choices: ['$210$', '$15$', '$35$', '$175$'],
      answer: 2,
      solution:
        'Route one, plant the oaks and use the gaps. The six identical oaks make just one row. That row offers $7$ gaps — before it, in its five interior slots, and after it — and each maple must go in a different gap, since two maples sharing a gap would stand side by side. The four identical maples therefore choose $4$ of the $7$ gaps: $\\binom{7}{4} = 35$ ✓. Route two, count by the last tree in the row. Write $R(m, k)$ for the number of good rows made from $m$ oaks and $k$ maples. A good row either ends in an oak — drop it and a good row with $m-1$ oaks and $k$ maples remains — or ends in a maple, which must be preceded by an oak, so dropping both leaves a good row with $m-1$ oaks and $k-1$ maples. That gives $R(m, k) = R(m-1, k) + R(m-1, k-1)$. Starting from $R(3, 4) = 1$ (the alternating row) and $R(2, 3) = 1$, $R(3, 3) = 4$, $R(4, 3) = 10$, $R(5, 3) = 20$, we climb: $R(4, 4) = 1 + 4 = 5$, $R(5, 4) = 5 + 10 = 15$, $R(6, 4) = 15 + 20 = 35$ ✓. (The choice $210 = \\frac{10!}{6!\\,4!}$ COUNTS EVERY PLANTING with no restriction ✗; $15 = \\binom{6}{4}$ USES ONLY SIX GAPS, forgetting one of the two ends of the row ✗; $175 = 210 - 35$ ANSWERS THE OPPOSITE QUESTION, the plantings where some two maples do touch ✗.)',
    },
    {
      q: 'In how many arrangements of the letters of $TENNESSEE$ are no two $S$’s next to each other and no two $N$’s next to each other either? (An arrangement is a row of all nine letters read left to right.)',
      choices: ['$2940$', '$2310$', '$2100$', '$210$'],
      answer: 1,
      solution:
        'Route one, subtract both bad sets and add back the overlap. All arrangements: $\\frac{9!}{4!\\,2!\\,2!} = 3780$. With the $S$’s glued: $\\frac{8!}{4!\\,2!} = 840$. With the $N$’s glued: $\\frac{8!}{4!\\,2!} = 840$ as well. With both pairs glued, seven things remain — the $S$ block, the $N$ block, $T$, and four $E$’s — giving $\\frac{7!}{4!} = \\frac{5040}{24} = 210$. So the count is $3780 - 840 - 840 + 210 = 2310$ ✓. Route two, gaps first, then trim. Arrange the seven non-$S$ letters $T, E, E, E, E, N, N$ ($\\frac{7!}{4!\\,2!} = 105$ rows) and drop the two identical $S$’s into two of the $8$ gaps ($\\binom{8}{2} = 28$): $105 \\times 28 = 2940$ arrangements have the $S$’s apart. Among those, the $N$’s still touch in the ones built by gluing $NN$: the non-$S$ pieces are then the $N$ block, $T$, and four $E$’s, six pieces arranging in $\\frac{6!}{4!} = 30$ ways, and the two $S$’s take $2$ of the $7$ gaps those pieces leave, $\\binom{7}{2} = 21$, for $30 \\times 21 = 630$. So $2940 - 630 = 2310$ ✓. (The choice $2940$ STOPS AFTER THE $S$ CONDITION and never checks the $N$’s ✗; $2100 = 3780 - 840 - 840$ SUBTRACTS BOTH BAD SETS WITHOUT ADDING BACK the $210$ counted twice ✗; $210$ REPORTS THE OVERLAP, the arrangements in which both pairs are glued together ✗.)',
    },
  ],
  // slot 9 — leading digits and last digits, where a pinned copy changes the divisor
  [
    {
      q: 'How many eight-digit numbers can be formed using each of the digits $0, 0, 2, 2, 9, 9, 9, 9$ exactly once? (A number may not begin with $0$, and digits that are equal cannot be told apart.)',
      choices: ['$420$', '$105$', '$315$', '$405$'],
      answer: 2,
      solution:
        'Route one, count every ordering and subtract the bad ones. All orderings of the eight digits: $\\frac{8!}{2!\\,2!\\,4!} = \\frac{40320}{96} = 420$. Those beginning with $0$: pin a $0$ in the first place, and the seven digits left are $0, 2, 2, 9, 9, 9, 9$, whose orderings number $\\frac{7!}{2!\\,4!} = \\frac{5040}{48} = 105$ — note the second $0$ is still there but stands alone, so it earns no factorial. Valid numbers: $420 - 105 = 315$ ✓. Route two, casework on the leading digit, handing out places. The first digit is $2$ or $9$. If it is $2$, the other seven places hold $0, 0, 2, 9, 9, 9, 9$: choose $2$ of the $7$ places for the zeros ($\\binom{7}{2} = 21$), then $4$ of the $5$ left for the nines ($\\binom{5}{4} = 5$), and the remaining place takes the $2$ — that is $21 \\times 5 = 105$. If the first digit is $9$, the other seven hold $0, 0, 2, 2, 9, 9, 9$: $\\binom{7}{2} = 21$ for the zeros, then $\\binom{5}{2} = 10$ for the twos, nines filling the rest — that is $21 \\times 10 = 210$. Adding, $105 + 210 = 315$ ✓. (The choice $420$ IGNORES THE LEADING-ZERO RULE ✗; $105$ REPORTS THE ORDERINGS THAT WERE THROWN AWAY, the ones beginning with $0$ ✗; $405 = 420 - 15$ FORGETS THE SECOND ZERO among the leftover digits, counting only $\\frac{6!}{2!\\,4!} = 15$ bad orderings ✗.)',
    },
    {
      q: 'A flag has six horizontal stripes — two red, two white, and two blue, with stripes of the same color identical — and the top stripe may not be red. The flag is always hung the same way up, so the stripes are read from the top down. How many different flags are possible?',
      choices: ['$60$', '$90$', '$30$', '$75$'],
      answer: 0,
      solution:
        'Route one, count every flag and subtract the bad ones. All flags: $\\frac{6!}{2!\\,2!\\,2!} = \\frac{720}{8} = 90$. Flags with a red top: pin a red stripe on top, and the five stripes left are $R, W, W, B, B$, giving $\\frac{5!}{2!\\,2!} = \\frac{120}{4} = 30$ — the surviving red stripe stands alone and earns no factorial. So $90 - 30 = 60$ ✓. Route two, casework on the top stripe, handing out places. The top stripe is white or blue. If it is white, the five stripes below are $R, R, W, B, B$: choose $2$ of the $5$ places for red ($\\binom{5}{2} = 10$), then $2$ of the $3$ left for blue ($\\binom{3}{2} = 3$), and the last place takes white — that is $30$. If the top is blue, the same count with blue and white swapped gives $30$. Adding, $30 + 30 = 60$ ✓. (The choice $90$ IGNORES THE RULE ABOUT THE TOP STRIPE ✗; $30$ REPORTS THE FLAGS THAT WERE THROWN AWAY, the ones with a red top ✗; $75 = 90 - 15$ ASSUMES ONLY ONE SIXTH OF THE FLAGS START RED, but two of the six stripes are red, so it is one third of them ✗.)',
    },
    {
      q: 'Of the eight-digit numbers formed by using each of the digits $0, 0, 2, 2, 9, 9, 9, 9$ exactly once with no leading $0$, how many are multiples of $5$? (Digits that are equal cannot be told apart.)',
      choices: ['$105$', '$315$', '$15$', '$90$'],
      answer: 3,
      solution:
        'Route one, pin the last digit, then subtract the bad ones. A whole number is a multiple of $5$ exactly when its last digit is $0$ or $5$, and there is no $5$ among these digits, so the last digit must be $0$. Pin a $0$ in the last place; the seven digits left are $0, 2, 2, 9, 9, 9, 9$, arranging in $\\frac{7!}{2!\\,4!} = \\frac{5040}{48} = 105$ ways. Those beginning with $0$ are not allowed: pin that second $0$ in front too, leaving $2, 2, 9, 9, 9, 9$, which arrange in $\\frac{6!}{2!\\,4!} = \\frac{720}{48} = 15$ ways. So $105 - 15 = 90$ ✓. Route two, casework on the leading digit, handing out places. The last digit is $0$ and the first is $2$ or $9$. If the first is $2$, the six middle places hold $0, 2, 9, 9, 9, 9$: the remaining $0$ picks one of the $6$ places and the remaining $2$ picks one of the $5$ left, nines filling the rest — $6 \\times 5 = 30$. If the first is $9$, the six middle places hold $0, 2, 2, 9, 9, 9$: the $0$ picks one of $6$ places and the two $2$’s take $2$ of the $5$ left ($\\binom{5}{2} = 10$) — $6 \\times 10 = 60$. Adding, $30 + 60 = 90$ ✓. (The choice $105$ FORGETS THAT SOME OF THE ENDINGS IN $0$ ALSO BEGIN WITH $0$ ✗; $315$ COUNTS EVERY VALID EIGHT-DIGIT NUMBER, not only the multiples of $5$ ✗; $15$ REPORTS THE ARRANGEMENTS THROWN AWAY, the ones ending in $0$ and also beginning with $0$ ✗.)',
    },
  ],
  // slot 10 — runs of one color, counted forwards and backwards
  [
    {
      q: 'A row of $8$ tiles is built from $4$ identical black tiles and $4$ identical white tiles. Tiles of the same color cannot be told apart, and the row is read from one fixed end. How many rows have no four consecutive tiles of the same color?',
      choices: ['$70$', '$8$', '$60$', '$62$'],
      answer: 3,
      solution:
        'Route one, count every row and subtract the bad ones. All rows: $\\frac{8!}{4!\\,4!} = \\frac{40320}{576} = 70$. A bad row has four consecutive tiles of one color, and since there are only four tiles of each color, that means all four black tiles sit as one block or all four white tiles do. A black block of four can start at spot $1, 2, 3, 4$ or $5$, and the white tiles then fill the rest, so $5$ rows contain a black block; likewise $5$ contain a white block. The rows $BBBBWWWW$ and $WWWWBBBB$ contain both and were counted twice, so the bad rows number $5 + 5 - 2 = 8$, leaving $70 - 8 = 62$ ✓. Route two, sift the position sets one condition at a time. A row is fixed by which $4$ of the $8$ spots are black, and there are $70$ such sets. Exactly $5$ of them are runs of four consecutive spots, so $65$ sets avoid four blacks in a row. Among those $65$, when are the whites four in a row? The whites occupy spots $1$–$4$, $2$–$5$, $3$–$6$, $4$–$7$ or $5$–$8$; the first and last of those leave the blacks in spots $5$–$8$ and $1$–$4$, blocks already ruled out, while the other three leave the blacks in $\\{1, 6, 7, 8\\}$, $\\{1, 2, 7, 8\\}$ and $\\{1, 2, 3, 8\\}$, which survived the first sift. Removing those $3$ leaves $65 - 3 = 62$ ✓. (The choice $70$ COUNTS EVERY ROW with no restriction ✗; $8$ REPORTS THE BAD ROWS instead of the good ones ✗; $60 = 70 - 10$ SUBTRACTS THE TWO LISTS OF FIVE WITHOUT NOTICING that two rows appear on both lists ✗.)',
    },
    {
      q: 'Nine chairs are set out in a row: $5$ identical red chairs and $4$ identical blue chairs. Chairs of the same color cannot be told apart, and the row is read from one fixed end. How many rows have no three consecutive chairs of the same color?',
      choices: ['$126$', '$45$', '$81$', '$51$'],
      answer: 1,
      solution:
        'Route one, hand the red chairs out around the blue ones. Set the $4$ blue chairs down first. They leave five gaps — before the first blue chair, the three gaps between consecutive blue chairs, and after the last — and the $5$ red chairs are split among these gaps. No three reds in a row means no gap may hold $3$ or more, so every gap holds $0$, $1$ or $2$. Splitting $5$ into five such parts: two gaps hold $2$ and one holds $1$, $\\binom{5}{2} \\times 3 = 30$ ways; or one gap holds $2$ and three hold $1$, $5 \\times \\binom{4}{3} = 20$ ways; or all five hold $1$, $1$ way — a total of $51$ splits. No three blues in a row means no two neighboring inner gaps may be empty at the same time. Inner gaps $1$ and $2$ both empty leaves $5$ reds among three gaps each holding at most $2$, which forces parts $2, 2, 1$ in some order: $3$ splits. Inner gaps $2$ and $3$ both empty gives $3$ more. Inner gaps $1$ and $3$ are not neighbors, so emptying just those two leaves two separate pairs of blues and breaks nothing, and all three inner gaps cannot be empty at once because the two outer gaps hold at most $4$ reds between them. So $51 - 3 - 3 = 45$ ✓. Route two, count by blocks. Read the row as alternating runs of one color, and no three in a row means every run has length $1$ or $2$. Say there are $j$ red runs and $k$ blue runs. Splitting $5$ reds into $j$ runs of length $1$ or $2$ can be done in $\\binom{j}{5-j}$ ways, so $j = 3, 4, 5$ give $3, 4, 1$ ways; splitting $4$ blues into $k$ runs gives $\\binom{k}{4-k}$, so $k = 2, 3, 4$ give $1, 3, 1$ ways. Runs alternate, so $j$ and $k$ differ by at most $1$; when they are equal the row may start with either color ($2$ patterns) and otherwise the color with more runs must start and finish ($1$ pattern). Adding the cases $(j, k)$: $(3,2)$ gives $3 \\times 1 \\times 1 = 3$, $(3,3)$ gives $3 \\times 3 \\times 2 = 18$, $(3,4)$ gives $3 \\times 1 \\times 1 = 3$, $(4,3)$ gives $4 \\times 3 \\times 1 = 12$, $(4,4)$ gives $4 \\times 1 \\times 2 = 8$, and $(5,4)$ gives $1 \\times 1 \\times 1 = 1$. The total is $3 + 18 + 3 + 12 + 8 + 1 = 45$ ✓. (The choice $126 = \\frac{9!}{5!\\,4!}$ COUNTS EVERY ROW with no restriction ✗; $81$ REPORTS THE ROWS THAT DO HAVE THREE IN A ROW ✗; $51$ FORBIDS THREE REDS IN A ROW BUT NEVER RULES OUT THREE BLUES ✗.)',
    },
    {
      q: 'A row of $8$ tiles is built from $4$ identical black tiles and $4$ identical white tiles. Tiles of the same color cannot be told apart, and the row is read from one fixed end. In how many rows does a run of three or more consecutive tiles of the same color appear somewhere?',
      choices: ['$36$', '$8$', '$70$', '$34$'],
      answer: 0,
      solution:
        'Route one, count every row and subtract the run-free ones. All rows: $\\frac{8!}{4!\\,4!} = 70$. A row with no run of three reads as alternating runs of length $1$ or $2$. With $j$ black runs and $k$ white runs, splitting $4$ black tiles into $j$ runs of length $1$ or $2$ can be done in $\\binom{j}{4-j}$ ways, so $j = 2, 3, 4$ give $1, 3, 1$ ways, and the same holds for $k$. Runs alternate, so $j$ and $k$ differ by at most $1$, with $2$ patterns when they are equal and $1$ otherwise. Adding the cases $(j, k)$: $(2,2)$ gives $2$, $(2,3)$ gives $3$, $(3,2)$ gives $3$, $(3,3)$ gives $18$, $(3,4)$ gives $3$, $(4,3)$ gives $3$, and $(4,4)$ gives $2$, for $34$ run-free rows. So $70 - 34 = 36$ ✓. Route two, count the rows with a run directly. Rows with three or more blacks together: a black block of three can start at spots $1$ through $6$, and the fourth black tile must not sit right beside it — the two end placements leave $4$ free spots and the four middle ones leave $3$, giving $2 \\times 4 + 4 \\times 3 = 20$ rows — plus the $5$ rows whose four blacks are all consecutive, for $25$. By the same count $25$ rows have three or more whites together. Rows on both lists have a black run of at least $3$ and a white run of at least $3$: if both runs have length $4$ the row is $BBBBWWWW$ or $WWWWBBBB$ ($2$ rows); if one run has length $4$ and the other exactly $3$, the pieces are a block of four, a block of three, and one loose tile that must not touch its own block, and of the $6$ orders of those three pieces the $4$ that put the loose tile beside its block are out, leaving $2$ rows each way ($4$ rows); if both runs have length exactly $3$, the pieces are $BBB$, $B$, $WWW$, $W$ in some order with neither loose tile beside its own block, which is $4! - 12 - 12 + 8 = 8$ rows. That is $2 + 4 + 8 = 14$ shared rows, so $25 + 25 - 14 = 36$ ✓. (The choice $8$ COUNTS ONLY THE ROWS WITH FOUR IN A ROW and misses every run of exactly three ✗; $70$ COUNTS EVERY ROW ✗; $34 = 70 - 36$ ANSWERS THE OPPOSITE QUESTION, the rows with no run of three or more ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 3,
  sections: { '3.2': s32 },
}
