// Counting & Probability chapter 3 — variations for the challenge problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: letters, digits, people and beads
//    are all different unless the stem calls them identical; a row is read left
//    to right and is never reversed; a number may not begin with $0$; and every
//    problem with a symmetry says in words whether rotations count as the same
//    and whether flips count as the same.
//  - Every keyed answer is reached twice along routes that share no steps:
//    gluing a block against choosing positions, a direct count against a
//    complement, casework on a pattern against counting labeled objects and
//    dividing out the copies.
//  - No key here leans on a division that could hide a fixed point. Wherever an
//    object can be unchanged by a turn or a flip, the solution says so and
//    counts the families by hand instead.
//  - Each distractor is one named slip — a repeat left undivided, a symmetry
//    forgotten or invented, a complement answered, a count reported instead of
//    the unknown — named in CAPS.

const challenge = [
  // slot 1 — permutations of a multiset
  [
    {
      q: 'How many different arrangements of the letters of $BOOKKEEPER$ are there?',
      choices: ['$3628800$', '$151200$', '$362880$', '$302400$'],
      answer: 1,
      solution:
        'The word has ten letters: three $E$’s, two $O$’s, two $K$’s, and one each of $B$, $P$, $R$. Route one, count as if the letters were all different and divide out the repeats. Ten different letters would give $10! = 3628800$ orders. Each real arrangement is produced once for every way of shuffling its identical letters among their own spots, which is $3! \\cdot 2! \\cdot 2! = 24$ ways, so there are $\\frac{3628800}{24} = 151200$ arrangements ✓. Route two, hand out the spots. Choose which $3$ of the $10$ spots hold the $E$’s: $\\binom{10}{3} = 120$. From the $7$ spots left choose $2$ for the $O$’s: $\\binom{7}{2} = 21$. From the $5$ left choose $2$ for the $K$’s: $\\binom{5}{2} = 10$. The last three spots take $B$, $P$, $R$ in $3! = 6$ orders. That gives $120 \\cdot 21 \\cdot 10 \\cdot 6 = 151200$ ✓. (The choice $3628800$ TREATS ALL TEN LETTERS AS DIFFERENT ✗; $362880$ DIVIDES BY $3! + 2! + 2! = 10$ INSTEAD OF THE PRODUCT $24$ ✗; $302400$ DIVIDES BY $3$ RATHER THAN $3!$ for the three $E$’s ✗.)',
    },
    {
      q: 'A drone flies from one corner of a rectangular block to the opposite corner, moving one unit at a time along the edges of a grid: $4$ units east, $3$ units north, and $2$ units up, in some order. Two flight paths are different when the sequence of moves is different; moves of the same kind are interchangeable. How many different flight paths are there?',
      choices: ['$362880$', '$15120$', '$2520$', '$1260$'],
      answer: 3,
      solution:
        'A path is a sequence of $4 + 3 + 2 = 9$ moves, four of them the letter $E$, three the letter $N$, and two the letter $U$. Route one, count as if the nine moves were all different and divide out the repeats. That would be $9! = 362880$ sequences, and each real path is produced $4! \\cdot 3! \\cdot 2! = 24 \\cdot 6 \\cdot 2 = 288$ times by shuffling moves of the same kind among themselves: $\\frac{362880}{288} = 1260$ ✓. Route two, hand out the nine slots. Choose which $4$ of the $9$ slots are east moves: $\\binom{9}{4} = 126$. From the $5$ slots left choose $3$ for the north moves: $\\binom{5}{3} = 10$. The last two slots must be the up moves, in $1$ way. That gives $126 \\cdot 10 = 1260$ ✓. (The choice $362880$ TREATS THE NINE MOVES AS ALL DIFFERENT ✗; $15120$ DIVIDES ONLY BY $4!$, forgetting that the north and up moves repeat too ✗; $2520$ DIVIDES BY $4!\\,3!$ AND FORGETS THE TWO IDENTICAL UP MOVES ✗.)',
    },
    {
      q: 'How many arrangements of the letters of $BOOKKEEPER$ both begin and end with the letter $E$?',
      choices: ['$40320$', '$20160$', '$10080$', '$60480$'],
      answer: 2,
      solution:
        'Route one, pin the ends and arrange the middle. The three $E$’s are identical, so there is exactly one way to put an $E$ in the first spot and an $E$ in the last spot. The eight middle spots then hold $B$, $O$, $O$, $K$, $K$, $E$, $P$, $R$, with the $O$’s identical and the $K$’s identical: $\\frac{8!}{2!\\,2!} = \\frac{40320}{4} = 10080$ ✓. Route two, hand out the spots one letter at a time. Both ends are $E$’s, so the third $E$ takes one of the $8$ middle spots: $8$ ways. From the $7$ middle spots left choose $2$ for the $O$’s: $\\binom{7}{2} = 21$; from the $5$ left choose $2$ for the $K$’s: $\\binom{5}{2} = 10$; the last three spots take $B$, $P$, $R$ in $3! = 6$ orders. That gives $8 \\cdot 21 \\cdot 10 \\cdot 6 = 10080$ ✓. (The choice $40320$ TREATS THE EIGHT MIDDLE LETTERS AS ALL DIFFERENT ✗; $20160$ DIVIDES BY ONLY ONE OF THE TWO REPEATED PAIRS ✗; $60480$ MULTIPLIES BY $3 \\cdot 2$ AS IF THE THREE IDENTICAL $E$’S COULD BE TOLD APART at the two ends ✗.)',
    },
  ],
  // slot 2 — pairs, with a schedule that weights some pairs twice
  [
    {
      q: 'A league of $12$ teams is split into two divisions of $6$. Each pair of teams in the same division plays two games against each other, and each pair of teams from different divisions plays one game. How many games are played in all?',
      choices: ['$66$', '$132$', '$60$', '$96$'],
      answer: 3,
      solution:
        'Route one, sort the pairs by type. Pairs inside one division: $\\binom{6}{2} = 15$, and there are two divisions, so $30$ same-division pairs, each playing twice, for $60$ games. Pairs from different divisions: $6 \\cdot 6 = 36$, each playing once, for $36$ games. Together $60 + 36 = 96$ ✓. Route two, count from the teams’ side and halve. A team plays its $5$ division rivals twice, which is $10$ games, and each of the $6$ teams in the other division once, which is $6$ games, for $16$ games per team. Over all $12$ teams that is $12 \\cdot 16 = 192$ team-slots, and every game fills exactly two of them: $\\frac{192}{2} = 96$ ✓. (The choice $66 = \\binom{12}{2}$ GIVES EVERY PAIR JUST ONE GAME, forgetting the second same-division meeting ✗; $132$ PLAYS EVERY PAIR TWICE, doubling the cross-division games as well ✗; $60$ COUNTS ONLY THE SAME-DIVISION GAMES ✗.)',
    },
    {
      q: 'Twenty-five students sit at five tables of five. Every two students at the same table shake hands exactly once, and no one shakes hands with a student at another table. How many handshakes take place?',
      choices: ['$100$', '$50$', '$300$', '$10$'],
      answer: 1,
      solution:
        'Route one, count one table and multiply. At a single table the handshakes are the pairs of the five students there, $\\frac{5 \\cdot 4}{2} = 10$. The five tables share no handshakes, so there are $5 \\cdot 10 = 50$ ✓. Route two, count from the students’ side and halve. Each student shakes hands with the $4$ others at their own table, giving $25 \\cdot 4 = 100$ handshake-ends, and every handshake has exactly two ends: $\\frac{100}{2} = 50$ ✓. (The choice $100$ FORGETS THAT EACH HANDSHAKE WAS COUNTED FROM BOTH SIDES ✗; $300 = \\frac{25 \\cdot 24}{2}$ LETS EVERY PAIR IN THE ROOM SHAKE HANDS ✗; $10$ IS ONE TABLE’S HANDSHAKES, not all five tables’ ✗.)',
    },
    {
      q: 'In a league every pair of teams plays exactly one game. If one more team joined the league, and that team also played every other team exactly once, the schedule would grow by exactly $15$ games. How many games are in the schedule now?',
      choices: ['$105$', '$15$', '$120$', '$210$'],
      answer: 0,
      solution:
        'Route one, see what a newcomer adds. Every game already scheduled stays, and the new games are exactly the ones the newcomer plays: one against each team already in the league. So the growth equals the current number of teams, which is therefore $15$. Fifteen teams give $\\binom{15}{2} = \\frac{15 \\cdot 14}{2} = 105$ games ✓. Route two, work with the counting formula. With $n$ teams the schedule holds $\\frac{n(n-1)}{2}$ games, so the growth is $\\frac{(n+1)n}{2} - \\frac{n(n-1)}{2} = \\frac{n\\big[(n+1) - (n-1)\\big]}{2} = n$, and $n = 15$. Counting the current schedule a different way, each of the $15$ teams appears in $14$ games, giving $15 \\cdot 14 = 210$ team-slots, and each game fills two: $\\frac{210}{2} = 105$ ✓. (The choice $15$ REPORTS THE NUMBER OF TEAMS, which is also the growth, rather than the games in the schedule ✗; $120 = \\binom{16}{2}$ IS THE SCHEDULE AFTER THE NEWCOMER JOINS ✗; $210$ COUNTS EACH GAME ONCE FOR EACH OF ITS TWO TEAMS ✗.)',
    },
  ],
  // slot 3 — bracelets and badges, rotations and flips
  [
    {
      q: 'A bracelet is strung from $9$ different beads in a loop, three of which are glass, and no two of the three glass beads may be next to each other. Two bracelets are the same if one can be rotated or flipped over to match the other. How many different bracelets are there?',
      choices: ['$20160$', '$14400$', '$7200$', '$1200$'],
      answer: 2,
      solution:
        'Route one, build the loop from the six other beads outward. String the $6$ non-glass beads into a loop of their own: that is $\\frac{(6-1)!}{2} = \\frac{120}{2} = 60$ bracelets, once rotations and flips are taken out. The loop leaves $6$ gaps between neighboring beads; putting at most one glass bead in a gap is exactly the rule that no two glass beads touch, so choose $3$ of the $6$ gaps, $\\binom{6}{3} = 20$ ways, and place the three different glass beads in them in $3! = 6$ orders. Since the six non-glass beads are all different, no rotation or flip carries their loop back to itself, so no bracelet is built twice: $60 \\cdot 20 \\cdot 6 = 7200$ ✓. Route two, count labeled loops and divide honestly. Number the $9$ places around the loop. Of the $\\binom{9}{3} = 84$ ways to pick three places, $9$ hold three in a row and $9 \\cdot 5 = 45$ hold exactly one neighboring pair, so $84 - 9 - 45 = 30$ place-triples have no two neighbors. Fill them with the glass beads in $3! = 6$ ways and the rest with the other beads in $6! = 720$ ways: $30 \\cdot 6 \\cdot 720 = 129600$ labeled bracelets. All nine beads are different, so no labeled bracelet is unchanged by any turn or flip, and every bracelet shows up exactly $9 \\cdot 2 = 18$ times: $\\frac{129600}{18} = 7200$ ✓. (The choice $20160 = \\frac{9!}{18}$ IGNORES THE RULE ABOUT THE GLASS BEADS ✗; $14400$ DIVIDES BY THE $9$ TURNS ONLY, forgetting the bracelet can be flipped over ✗; $1200$ PICKS THE THREE GAPS BUT NEVER ORDERS THE THREE DIFFERENT GLASS BEADS ✗.)',
    },
    {
      q: 'Each corner of a regular pentagon-shaped badge is painted amber or jade, and colors may repeat. Two badges are the same if one can be rotated or flipped over to match the other. How many different badges are there?',
      choices: ['$8$', '$32$', '$6$', '$10$'],
      answer: 0,
      solution:
        'Route one, casework on how many corners are amber. None: $1$ badge. One amber: $1$, since a turn carries any single corner to any other. Two amber: the two amber corners are either neighbors or one corner apart, and no turn or flip changes that spacing, so $2$. Three amber is the same as two jade, so $2$; four amber is the same as one jade, so $1$; five amber: $1$. Total $1 + 1 + 2 + 2 + 1 + 1 = 8$ ✓. Route two, count labeled badges and merge families. There are $2^5 = 32$ labeled badges. A turn of one to four steps can leave a badge unchanged only if all five corners match, so exactly $2$ labeled badges — solid amber and solid jade — are fixed by a turn; the other $30$ fall into families of $5$, giving $\\frac{30}{5} + 2 = 8$ badges up to turning alone. Now allow flips: a flipped badge is another one of these $8$, and going through them — solid amber, solid jade, one amber, one jade, two amber together, two amber apart, and the two jade versions of those last two — each is its own mirror image, so no two merge and the count stays $8$ ✓. (The choice $32$ COUNTS EVERY LABELED BADGE, treating turned and flipped copies as different ✗; $6$ MISSES THAT TWO AMBER CORNERS CAN BE NEIGHBORS OR ONE APART, allowing a single pattern for two ambers and a single one for three ✗; $10$ GIVES A PAIR OF CORNERS THREE POSSIBLE SPACINGS when a pentagon offers only two ✗.)',
    },
    {
      q: 'A bracelet is strung from $8$ different beads in a loop, evenly spaced, and the ruby bead must be directly opposite the sapphire bead. Two bracelets are the same if one can be rotated or flipped over to match the other. How many different bracelets are there?',
      choices: ['$720$', '$180$', '$2520$', '$360$'],
      answer: 3,
      solution:
        'Route one, count labeled loops and divide honestly. Number the $8$ places. The ruby can take any of the $8$ places and the sapphire is then forced into the place across from it; the other $6$ beads fill the rest in $6! = 720$ ways, for $8 \\cdot 720 = 5760$ labeled bracelets. All eight beads are different, so no labeled bracelet is unchanged by any of the $8$ turns or $8$ flips, and each bracelet is counted $16$ times: $\\frac{5760}{16} = 360$ ✓. Route two, use up the symmetries by hand. Turn the bracelet so the ruby sits at the top; every bracelet can be turned that way in exactly one manner, so all $8$ turns are now spent, and the sapphire is forced to the bottom. The remaining $6$ beads fill the six side places in $6! = 720$ ways. One symmetry is left over, the flip across the ruby–sapphire line, and it swaps beads that are different, so it never returns an arrangement to itself; the $720$ therefore pair up: $\\frac{720}{2} = 360$ ✓. (The choice $720$ STOPS AFTER THE TURNS and forgets the bracelet can be flipped over ✗; $180$ DIVIDES BY THE FLIP A SECOND TIME ✗; $2520 = \\frac{8!}{16}$ IGNORES THE RULE that ruby and sapphire sit opposite ✗.)',
    },
  ],
  // slot 4 — diagonals and near-diagonals
  [
    {
      q: 'In a convex $12$-gon every pair of vertices is joined by a segment. How many of these segments are neither sides of the polygon nor segments joining two vertices that are exactly two apart around the polygon?',
      choices: ['$42$', '$54$', '$66$', '$30$'],
      answer: 0,
      solution:
        'Route one, start with everything and subtract. All segments joining two vertices: $\\binom{12}{2} = \\frac{12 \\cdot 11}{2} = 66$. Going around the polygon there are $12$ pairs of neighboring vertices, so $12$ sides, and $12$ pairs exactly two apart, so $12$ more segments. That leaves $66 - 12 - 12 = 42$ ✓. Route two, count from each vertex and halve. From one vertex, the wanted segments skip that vertex itself, its two neighbors, and the two vertices two steps away, leaving $12 - 1 - 2 - 2 = 7$ partners. Over all vertices that is $12 \\cdot 7 = 84$, and every wanted segment was counted from both of its ends: $\\frac{84}{2} = 42$ ✓. (The choice $54$ SUBTRACTS THE SIDES ONLY, leaving every diagonal in ✗; $66$ COUNTS EVERY SEGMENT, sides included ✗; $30$ ALSO THROWS OUT THE $12$ SEGMENTS THREE APART ✗.)',
    },
    {
      q: 'Eighteen trees stand evenly spaced around a circular park, and a straight path is built between every pair of trees that are not neighbors around the circle. How many paths are built?',
      choices: ['$153$', '$270$', '$135$', '$117$'],
      answer: 2,
      solution:
        'Route one, start with every pair and remove the neighbors. Pairs of trees: $\\binom{18}{2} = \\frac{18 \\cdot 17}{2} = 153$. Going around the circle, $18$ of those pairs are neighbors, and each neighboring pair is one pair, not two: $153 - 18 = 135$ ✓. Route two, count from each tree and halve. A tree is joined by a path to every tree except itself and its two neighbors, so $18 - 3 = 15$ of them. Over all trees that is $18 \\cdot 15 = 270$ path-ends, and each path has two ends: $\\frac{270}{2} = 135$ ✓. (The choice $153$ INCLUDES THE NEIGHBORING PAIRS, which get no path ✗; $270$ FORGETS THAT EACH PATH WAS COUNTED FROM BOTH OF ITS TREES ✗; $117$ REMOVES EACH NEIGHBORING PAIR TWICE, subtracting $36$ instead of $18$ ✗.)',
    },
    {
      q: 'A convex polygon has exactly $152$ diagonals. (A diagonal joins two corners that are not next to each other.) How many sides does it have?',
      choices: ['$16$', '$19$', '$17$', '$171$'],
      answer: 1,
      solution:
        'Route one, count diagonals from each corner. In a polygon with $n$ sides each corner sends a diagonal to every corner but itself and its two neighbors, which is $n - 3$ of them, and $n(n-3)$ counts each diagonal once from each end. So $\\frac{n(n-3)}{2} = 152$, that is $n(n-3) = 304$. Testing whole numbers: $17 \\cdot 14 = 238$, $18 \\cdot 15 = 270$, $19 \\cdot 16 = 304$ ✓, $20 \\cdot 17 = 340$. The products only grow as $n$ grows, so $n = 19$ and no other value works ✓. Route two, check through the total segment count. Every pair of corners gives either a side or a diagonal, so a polygon with $n$ sides has $\\binom{n}{2} - n$ diagonals. For $n = 19$ that is $\\binom{19}{2} - 19 = 171 - 19 = 152$ ✓. Since $\\binom{n}{2} - n$ climbs steadily — it is $135$ at $n = 18$ and $170$ at $n = 20$ — no other polygon has $152$ diagonals ✓. (The choice $16$ REPORTS $n - 3$, the number of diagonals leaving a single corner ✗; $17$ TAKES $n \\approx \\sqrt{304}$ and ignores the $-3$, but a $17$-gon has only $119$ diagonals ✗; $171$ REPORTS THE TOTAL NUMBER OF SEGMENTS joining pairs of corners instead of the number of sides ✗.)',
    },
  ],
  // slot 5 — blocks of repeated letters, together and apart
  [
    {
      q: 'In how many arrangements of the letters of $CARIBBEAN$ are the two $A$’s next to each other and the two $B$’s also next to each other? (The nine letters are written in a row, read left to right.)',
      choices: ['$20160$', '$90720$', '$5040$', '$10080$'],
      answer: 2,
      solution:
        'The word has nine letters: two $A$’s, two $B$’s, and one each of $C$, $R$, $I$, $E$, $N$. Route one, glue each pair into a block. Tie the two $A$’s together into one block $AA$ and the two $B$’s into one block $BB$. The row then holds seven things — $AA$, $BB$, $C$, $R$, $I$, $E$, $N$ — and they are all different from one another, so they can be ordered in $7! = 5040$ ways. Nothing is divided out afterward, because the identical letters are locked inside their blocks and swapping them changes nothing ✓. Route two, place the two blocks by position. Each block covers two neighboring spots of the nine-spot row. There are $8$ places a two-spot block can sit, so $\\binom{8}{2} = 28$ pairs of block positions, of which $7$ overlap (the ones starting at neighboring spots), leaving $28 - 7 = 21$ disjoint pairs. Say which of the two positions holds $AA$ and which holds $BB$: $2$ ways. The remaining five spots take $C$, $R$, $I$, $E$, $N$ in $5! = 120$ orders. That gives $21 \\cdot 2 \\cdot 120 = 5040$ ✓. (The choice $20160 = \\frac{8!}{2!}$ GLUES ONLY THE $A$’S and leaves the two $B$’s loose ✗; $90720$ COUNTS EVERY ARRANGEMENT of the word ✗; $10080$ MULTIPLIES BY $2$ for the order of the two identical $A$’s inside their block, which produces nothing new ✗.)',
    },
    {
      q: 'Ten flags hang in a row: $4$ identical red flags, $3$ identical blue flags, and $3$ identical white flags. In how many different-looking rows are all four red flags together in a block and all three blue flags together in a block?',
      choices: ['$20$', '$120$', '$4200$', '$140$'],
      answer: 0,
      solution:
        'Route one, glue and divide out the identical whites. Tie the four reds into one block and the three blues into another. The row then holds five things: the red block, the blue block, and three white flags that are identical to one another. Ordering five things of which three are alike gives $\\frac{5!}{3!} = \\frac{120}{6} = 20$ different-looking rows ✓. Route two, choose slots for the two blocks. Read the row as five slots in order: whatever is not a block is a white flag. Pick which of the $5$ slots holds the red block, $5$ ways, then which of the remaining $4$ holds the blue block, $4$ ways; the white flags fill the last three slots in exactly $1$ way, since they are identical. That gives $5 \\cdot 4 = 20$ ✓. (The choice $120$ TREATS THE THREE WHITE FLAGS AS DIFFERENT ✗; $4200 = \\frac{10!}{4!\\,3!\\,3!}$ COUNTS EVERY ROW of the ten flags ✗; $140$ GLUES ONLY THE FOUR REDS and leaves the blues loose ✗.)',
    },
    {
      q: 'In how many arrangements of the letters of $CARIBBEAN$ are the two $A$’s next to each other while the two $B$’s are not next to each other? (The nine letters are written in a row, read left to right.)',
      choices: ['$20160$', '$5040$', '$70560$', '$15120$'],
      answer: 3,
      solution:
        'Route one, subtract inside the $A$-together arrangements. Glue the two $A$’s into a block: the row then holds eight things, the block $AA$ and $C$, $R$, $I$, $B$, $B$, $E$, $N$, with the two $B$’s identical, giving $\\frac{8!}{2!} = \\frac{40320}{2} = 20160$ arrangements with the $A$’s together. Among those, the ones whose $B$’s are also together are counted by gluing the $B$’s too, which leaves seven different things and $7! = 5040$ arrangements. So $20160 - 5040 = 15120$ ✓. Route two, build them directly with the gap method. Glue the $A$’s into a block and set down only the six things that are not $B$’s — the block $AA$ together with $C$, $R$, $I$, $E$, $N$ — in a row: $6! = 720$ orders. Those six things create $7$ gaps, counting the two ends. Dropping the two identical $B$’s into two different gaps guarantees something sits between them, so they are not neighbors: $\\binom{7}{2} = 21$ choices, and the $B$’s are identical so no ordering follows. That gives $720 \\cdot 21 = 15120$ ✓. (The choice $20160$ STOPS AT "the $A$’s together" and never separates the $B$’s ✗; $5040$ COUNTS THE ARRANGEMENTS WITH BOTH PAIRS TOGETHER, the opposite of what is asked ✗; $70560$ SEPARATES THE $B$’S BUT DROPS THE RULE ABOUT THE $A$’S ✗.)',
    },
  ],
  // slot 6 — pairs where one group never pairs with itself
  [
    {
      q: 'At a meeting of $16$ people, $6$ of them wear badges. Two people shake hands exactly once if at least one of them wears a badge, and otherwise they do not shake hands at all. How many handshakes take place?',
      choices: ['$60$', '$75$', '$120$', '$45$'],
      answer: 1,
      solution:
        'Route one, count every pair and remove the ones that never shake. All pairs of people: $\\binom{16}{2} = \\frac{16 \\cdot 15}{2} = 120$. The pairs that do not shake are exactly the pairs with no badge between them, chosen from the $10$ people without badges: $\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$. So $120 - 45 = 75$ handshakes ✓. Route two, sort the handshakes by how many badges the pair holds. Two badge wearers: $\\binom{6}{2} = 15$ pairs. Exactly one badge wearer: $6 \\cdot 10 = 60$ pairs, since the badge wearer and the other person are picked from different groups. Together $15 + 60 = 75$ ✓. (The choice $60$ COUNTS ONLY THE BADGE-WITH-NO-BADGE HANDSHAKES and drops the $15$ between two badge wearers ✗; $120$ LETS EVERY PAIR SHAKE HANDS ✗; $45$ REPORTS THE PAIRS THAT DO NOT SHAKE ✗.)',
    },
    {
      q: 'Fourteen points are marked in the plane, no three of them on one line; $6$ of the points are red and the other $8$ are blue. A segment is drawn between every pair of points except pairs in which both points are blue. How many segments are drawn?',
      choices: ['$48$', '$91$', '$28$', '$63$'],
      answer: 3,
      solution:
        'Route one, take all pairs and remove the blue ones. Pairs of points: $\\binom{14}{2} = \\frac{14 \\cdot 13}{2} = 91$. Pairs of blue points: $\\binom{8}{2} = \\frac{8 \\cdot 7}{2} = 28$. So $91 - 28 = 63$ segments ✓. Route two, build the two kinds of segment that are drawn. Red-to-red segments: $\\binom{6}{2} = 15$. Red-to-blue segments: each of the $6$ reds joins each of the $8$ blues once, and no such segment is counted twice because its ends lie in different groups: $6 \\cdot 8 = 48$. Together $15 + 48 = 63$ ✓. (The choice $48$ DRAWS ONLY THE RED-TO-BLUE SEGMENTS, dropping the $15$ red-to-red ones ✗; $91$ JOINS EVERY PAIR of points ✗; $28$ REPORTS THE BLUE PAIRS THAT ARE LEFT OUT ✗.)',
    },
    {
      q: 'At a gathering of $18$ people, everyone wearing a name tag shook hands exactly once with every other person present, and no two people without a tag shook hands with each other. There were $138$ handshakes in all. How many of the $18$ people wore name tags?',
      choices: ['$11$', '$6$', '$12$', '$15$'],
      answer: 2,
      solution:
        'Route one, count the missing handshakes. If everyone had shaken hands with everyone there would be $\\binom{18}{2} = 153$ handshakes. The only ones missing are the pairs of untagged people, so with $u$ people untagged, $153 - \\binom{u}{2} = 138$, giving $\\binom{u}{2} = 15$ and $u(u-1) = 30$, so $u = 6$. Since $\\binom{u}{2}$ grows as $u$ grows, $u = 6$ is the only whole answer, and the tagged group holds $18 - 6 = 12$ people ✓. Route two, build the handshakes from a guess and check the shape. With $t$ people tagged, the tagged shake among themselves $\\binom{t}{2}$ times and shake each of the $18 - t$ untagged people once, for $t(18-t)$ more, a total of $\\frac{t(t-1)}{2} + t(18-t) = \\frac{t(35-t)}{2}$. At $t = 12$ that is $\\frac{12 \\cdot 23}{2} = 138$ ✓, matching by the parts as well: $\\binom{12}{2} = 66$ and $12 \\cdot 6 = 72$, and $66 + 72 = 138$. The expression $\\frac{t(35-t)}{2}$ climbs steadily for $t$ from $0$ to $17$, so no other $t$ gives $138$ ✓. (The choice $11$ STOPS ONE SHORT — eleven tags give only $153 - \\binom{7}{2} = 132$ handshakes ✗; $6$ REPORTS THE UNTAGGED GROUP, stopping at $18 - t = 6$ ✗; $15$ IS THE NUMBER OF MISSING HANDSHAKES $\\binom{6}{2}$, not a count of people ✗.)',
    },
  ],
  // slot 7 — round tables with a block of consecutive seats
  [
    {
      q: 'Nine people sit around a round table with nine evenly spaced seats. Dara, Elin, and Ivo must sit in three consecutive seats, in that order clockwise — Dara, then Elin, then Ivo. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$720$', '$4320$', '$5040$', '$1440$'],
      answer: 0,
      solution:
        'Route one, glue the three friends into one block. The stem fixes the order inside the block, so the block has only one internal arrangement. That leaves seven things at the table — the block and the six other people — and around a table where rotations count as the same, $k$ things can be seated in $(k-1)!$ ways, so $(7-1)! = 6! = 720$ ✓. Route two, pin one person to use up the rotations. Every seating can be turned so that Dara sits in the north seat, in exactly one way, so counting seatings with Dara fixed there counts each seating once. Elin must then take the seat one step clockwise from Dara and Ivo the seat after that: both forced. The six remaining people fill the six remaining seats in $6! = 720$ ways ✓. (The choice $4320$ LETS DARA, ELIN AND IVO SIT IN ANY OF THE $3!$ ORDERS, though the stem fixes one ✗; $5040 = 7!$ ARRANGES THE SEVEN THINGS AS A ROW and never divides out the rotations ✗; $1440$ ALLOWS BOTH THE CLOCKWISE ORDER AND ITS REVERSE ✗.)',
    },
    {
      q: 'Nine different photographs are arranged at nine evenly spaced positions around a circular frame, one photograph per position. Four of them are portraits and must occupy four consecutive positions. Arrangements that differ by a rotation of the frame are the same, and the frame is never flipped over. How many arrangements are there?',
      choices: ['$120$', '$17280$', '$2880$', '$5760$'],
      answer: 2,
      solution:
        'Route one, glue the portraits into one block. The frame then carries six things — the portrait block and the five other photographs — and around a circle where rotations count as the same they can be arranged in $(6-1)! = 5! = 120$ ways. Inside the block the four different portraits can be ordered in $4! = 24$ ways: $120 \\cdot 24 = 2880$ ✓. Route two, count labeled frames and divide. Number the nine positions. There are $9$ runs of four consecutive positions. Put the portraits into a chosen run in $4! = 24$ ways and the other five photographs into the remaining positions in $5! = 120$ ways, for $9 \\cdot 24 \\cdot 120 = 25920$ labeled arrangements. All nine photographs are different, so no labeled arrangement is unchanged by a turn, and each arrangement of the frame appears exactly $9$ times: $\\frac{25920}{9} = 2880$ ✓. (The choice $120$ FORGETS TO ORDER THE FOUR PORTRAITS inside their block ✗; $17280 = 6! \\cdot 4!$ NEVER DIVIDES OUT THE ROTATIONS ✗; $5760$ MULTIPLIES BY $2$ FOR A FLIP the stem rules out ✗.)',
    },
    {
      q: 'Nine people sit around a round table with nine evenly spaced seats. Dara, Elin, and Ivo must sit in three consecutive seats, in any order among themselves. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$720$', '$4320$', '$30240$', '$8640$'],
      answer: 1,
      solution:
        'Route one, glue and then order inside. Tie the three friends into one block: seven things sit around the table, and since rotations count as the same seating that is $(7-1)! = 6! = 720$ arrangements. Inside the block the three friends can be ordered in $3! = 6$ ways: $720 \\cdot 6 = 4320$ ✓. Route two, count labeled seatings and divide. Number the nine seats. There are $9$ runs of three consecutive seats. Seat the three friends in a chosen run in $3! = 6$ ways and the other six people in the remaining seats in $6! = 720$ ways, for $9 \\cdot 6 \\cdot 720 = 38880$ labeled seatings. The nine people are all different, so no labeled seating is unchanged by a turn and each seating is counted $9$ times: $\\frac{38880}{9} = 4320$ ✓. (The choice $720$ FORGETS THE $3!$ ORDERS inside the block ✗; $30240 = 7! \\cdot 3!$ NEVER DIVIDES OUT THE ROTATIONS ✗; $8640$ MULTIPLIES BY $2$ as if the table could be turned over ✗.)',
    },
  ],
  // slot 8 — numbers from a multiset of digits
  [
    {
      q: 'How many seven-digit even numbers can be formed using each of the digits $1, 1, 2, 2, 4, 4, 4$ exactly once?',
      choices: ['$210$', '$105$', '$90$', '$150$'],
      answer: 3,
      solution:
        'Route one, casework on the last digit. A number is even when its last digit is $2$ or $4$. Last digit $2$: the other six digits are $1, 1, 2, 4, 4, 4$, giving $\\frac{6!}{2!\\,3!} = \\frac{720}{12} = 60$ numbers. Last digit $4$: the other six are $1, 1, 2, 2, 4, 4$, giving $\\frac{6!}{2!\\,2!\\,2!} = \\frac{720}{8} = 90$. Together $60 + 90 = 150$ ✓. Route two, take all the numbers and subtract the odd ones. All arrangements of the seven digits: $\\frac{7!}{2!\\,2!\\,3!} = \\frac{5040}{24} = 210$, and none begins with $0$ since there is no $0$. An odd number ends in $1$, and the other six digits are then $1, 2, 2, 4, 4, 4$: $\\frac{6!}{2!\\,3!} = 60$ odd numbers. So $210 - 60 = 150$ ✓. (The choice $210$ COUNTS EVERY NUMBER, odd ones included ✗; $105$ HALVES THE $210$ as if half the numbers were even, though the digits are not split evenly ✗; $90$ KEEPS ONLY THE NUMBERS ENDING IN $4$ ✗.)',
    },
    {
      q: 'How many six-digit odd numbers can be formed using each of the digits $0, 1, 1, 2, 2, 2$ exactly once? (A number may not begin with $0$.)',
      choices: ['$20$', '$16$', '$50$', '$10$'],
      answer: 1,
      solution:
        'Route one, pin the last digit and then remove the bad starts. An odd number must end in $1$. The other five digits are $0, 1, 2, 2, 2$, arranged in $\\frac{5!}{3!} = \\frac{120}{6} = 20$ ways. Of those, the ones that begin with $0$ leave $1, 2, 2, 2$ for the four middle spots: $\\frac{4!}{3!} = 4$. So $20 - 4 = 16$ ✓. Route two, casework on the first digit. The number ends in $1$, and its first digit is $1$ or $2$. First digit $1$, last digit $1$: the four middle digits are $0, 2, 2, 2$, giving $\\frac{4!}{3!} = 4$ numbers. First digit $2$, last digit $1$: the four middle digits are $0, 1, 2, 2$, giving $\\frac{4!}{2!} = 12$ numbers. Together $4 + 12 = 16$ ✓. (The choice $20$ FORGETS THAT A NUMBER MAY NOT BEGIN WITH $0$ ✗; $50$ COUNTS EVERY six-digit number from these digits, even ones included ✗; $10$ HALVES THE $20$ as if half of them began with $0$ ✗.)',
    },
    {
      q: 'How many of the seven-digit numbers formed by using each of the digits $1, 1, 2, 2, 4, 4, 4$ exactly once are multiples of $4$?',
      choices: ['$80$', '$150$', '$105$', '$60$'],
      answer: 0,
      solution:
        'Route one, use the last two digits. A whole number is a multiple of $4$ exactly when the two-digit number made by its last two digits is a multiple of $4$. From these digits the last two could be $11, 12, 14, 21, 22, 24, 41, 42$ or $44$, and only $12$, $24$ and $44$ are multiples of $4$. Ending $12$: the other five digits are $1, 2, 4, 4, 4$, giving $\\frac{5!}{3!} = 20$ numbers. Ending $24$: the others are $1, 1, 2, 4, 4$, giving $\\frac{5!}{2!\\,2!} = 30$. Ending $44$: the others are $1, 1, 2, 2, 4$, giving $\\frac{5!}{2!\\,2!} = 30$. Together $20 + 30 + 30 = 80$ ✓. Route two, start from the even numbers and subtract. A number here is even when it ends in $2$ or $4$: ending in $2$ leaves $1, 1, 2, 4, 4, 4$ for $\\frac{6!}{2!\\,3!} = 60$ numbers, and ending in $4$ leaves $1, 1, 2, 2, 4, 4$ for $\\frac{6!}{2!\\,2!\\,2!} = 90$, so $150$ even numbers. An even number here fails to be a multiple of $4$ exactly when its last two digits are $22$, $42$ or $14$. Ending $22$: the others are $1, 1, 4, 4, 4$, giving $\\frac{5!}{2!\\,3!} = 10$. Ending $42$: the others are $1, 1, 2, 4, 4$, giving $30$. Ending $14$: the others are $1, 2, 2, 4, 4$, giving $30$. That is $70$ failures, so $150 - 70 = 80$ ✓. (The choice $150$ COUNTS EVERY EVEN NUMBER, not only the multiples of $4$ ✗; $105$ TAKES HALF OF THE $210$ arrangements ✗; $60$ MISSES THE ENDING $12$, adding only the $24$ and $44$ cases ✗.)',
    },
  ],
  // slot 9 — two-color symmetry counts where a plain division would fail
  [
    {
      q: 'Each corner of a regular octagon is painted red or blue, and colors may repeat. Two paintings are the same if a rotation of the octagon turns one into the other; flipping the octagon over is not allowed. How many different paintings are there?',
      choices: ['$256$', '$36$', '$32$', '$30$'],
      answer: 1,
      solution:
        'Route one, sort the labeled paintings by how soon the pattern repeats. There are $2^8 = 256$ labeled paintings, and $\\frac{256}{8}$ would be wrong because some paintings are unchanged by a turn. A painting is unchanged by some turn exactly when its pattern repeats with period $1$, $2$ or $4$. Period dividing $1$: $2$ labeled paintings (all red, all blue), each its own whole family, giving $2$. Period dividing $2$: $2^2 = 4$ labeled, so $4 - 2 = 2$ have period exactly $2$, and these sit in families of $2$, giving $1$. Period dividing $4$: $2^4 = 16$ labeled, so $16 - 4 = 12$ have period exactly $4$, in families of $4$, giving $3$. Everything else, $256 - 16 = 240$ labeled paintings, has families of $8$, giving $30$. Total $2 + 1 + 3 + 30 = 36$ ✓. Route two, casework on the number of red corners. Zero reds: $1$; one red: $1$; two reds: the gap between them is $1$, $2$, $3$ or $4$ steps, so $4$; three reds: the three gaps between neighboring reds are positive whole numbers adding to $8$, and only their cyclic order matters, so of the $\\binom{7}{2} = 21$ ordered gap lists none repeats under a turn (that would need three equal gaps, impossible since $8$ is not a multiple of $3$), giving $\\frac{21}{3} = 7$; four reds: $10$, since of the $\\binom{7}{3} = 35$ ordered gap lists one is fixed by every turn and three more by the half turn, giving $\\frac{35 + 1 + 3 + 1}{4} = 10$. By swapping colors, five reds gives $7$, six gives $4$, seven gives $1$, eight gives $1$. Total $1 + 1 + 4 + 7 + 10 + 7 + 4 + 1 + 1 = 36$ ✓. (The choice $256$ COUNTS EVERY LABELED PAINTING ✗; $32 = \\frac{256}{8}$ IS THE PLAIN DIVISION, which fails because the solid and repeating paintings are unchanged by a turn ✗; $30$ ALSO IDENTIFIES FLIPPED PAINTINGS, which the stem forbids ✗.)',
    },
    {
      q: 'A bracelet is strung from $7$ beads in a loop, each bead either amber or jade, with beads of the same kind identical. Bracelets that differ by a rotation or by a flip of the bracelet are the same. How many different bracelets are there?',
      choices: ['$128$', '$20$', '$64$', '$18$'],
      answer: 3,
      solution:
        'Route one, count up to turning first, then allow the flip. There are $2^7 = 128$ labeled strings. Since $7$ is a prime, a turn of one to six steps can leave a string unchanged only if every bead matches, so exactly $2$ strings are fixed and the other $126$ fall into families of $7$: $\\frac{126}{7} + 2 = 20$ bracelets up to turning alone. Now the flip: each of those $20$ either is its own mirror image or merges with a different one. Describing a bracelet by the gaps between neighboring amber beads, the only classes that are not their own mirror images are the two three-amber ones with gaps $1, 2, 4$ read the two ways around, and the two four-amber ones matching them by color swap. So exactly two pairs merge: $20 - 2 = 18$ ✓. Route two, casework on the number of amber beads. Zero: $1$; one: $1$; two: the two ambers are $1$, $2$ or $3$ steps apart, so $3$; three: the three gaps between neighboring ambers are positive and add to $7$, and up to turning and flipping only the gap multiset matters — $\\{1,1,5\\}$, $\\{1,2,4\\}$, $\\{1,3,3\\}$, $\\{2,2,3\\}$ — so $4$. Swapping colors gives $4$ for four ambers, $3$ for five, $1$ for six, $1$ for seven. Total $1 + 1 + 3 + 4 + 4 + 3 + 1 + 1 = 18$ ✓. (The choice $128$ COUNTS EVERY LABELED STRING of seven beads ✗; $20$ STOPS AT THE TURNS and never flips the bracelet over ✗; $64$ DIVIDES THE $128$ BY $2$ FOR THE FLIP and forgets the seven turns ✗.)',
    },
    {
      q: 'Each corner of a regular hexagon is painted red or blue, and colors may repeat. Two paintings are now the same if a rotation of the hexagon OR a flip of the hexagon turns one into the other. How many different paintings are there?',
      choices: ['$14$', '$64$', '$13$', '$32$'],
      answer: 2,
      solution:
        'Route one, casework on the number of red corners, with both turns and flips allowed. Zero reds: $1$; one red: $1$; two reds: the two reds are $1$, $2$ or $3$ steps apart, so $3$; three reds: the three gaps between neighboring reds are positive whole numbers adding to $6$, and up to turning and flipping only the multiset matters — $\\{1,1,4\\}$, $\\{1,2,3\\}$, $\\{2,2,2\\}$ — so $3$. Swapping colors gives $3$ for four reds, $1$ for five, $1$ for six. Total $1 + 1 + 3 + 3 + 3 + 1 + 1 = 13$ ✓. Route two, count up to turning first, then merge the mirror pairs. There are $2^6 = 64$ labeled paintings, and a plain division by $6$ fails because some are unchanged by a turn, so sort them by how soon the pattern repeats: $2$ labeled paintings have period $1$, giving $2$ classes; $4 - 2 = 2$ have period exactly $2$, in families of $2$, giving $1$; $8 - 2 = 6$ have period exactly $3$, in families of $3$, giving $2$; the remaining $64 - 10 = 54$ have families of $6$, giving $9$. That is $2 + 1 + 2 + 9 = 14$ paintings up to turning alone. Allowing flips, only the two three-red classes with gaps $1, 2, 3$ read the two ways around are mirror images of each other; every other class is its own mirror image. So one pair merges: $14 - 1 = 13$ ✓. (The choice $14$ STOPS AT THE TURNS and never flips the hexagon ✗; $64$ COUNTS EVERY LABELED PAINTING ✗; $32$ DIVIDES BY $2$ FOR THE FLIP ALONE and forgets the six turns ✗.)',
    },
  ],
  // slot 10 — one group that never pairs with itself, solved for the unknown
  [
    {
      q: 'A club has $8$ seniors and some juniors. Every pair of members shakes hands exactly once, except that no two seniors shake hands with each other. There were $272$ handshakes. How many juniors are in the club?',
      choices: ['$25$', '$34$', '$17$', '$18$'],
      answer: 2,
      solution:
        'Route one, count the missing handshakes. Let the club hold $n$ members in all. If everyone shook everyone there would be $\\binom{n}{2}$ handshakes, and the only missing ones are the $\\binom{8}{2} = 28$ pairs of seniors. So $\\binom{n}{2} = 272 + 28 = 300$, that is $n(n-1) = 600$. Testing: $24 \\cdot 23 = 552$ and $25 \\cdot 24 = 600$ ✓, and the products only grow, so $n = 25$ and the juniors number $25 - 8 = 17$ ✓. Route two, build the handshakes from the juniors. With $j$ juniors, the handshakes are the junior pairs, $\\binom{j}{2}$, plus the senior–junior ones, $8j$: $\\frac{j(j-1)}{2} + 8j = 272$, so $j(j-1) + 16j = 544$ and $j^2 + 15j - 544 = 0$. Then $j = \\frac{-15 + \\sqrt{225 + 2176}}{2} = \\frac{-15 + 49}{2} = 17$ ✓, and checking, $\\binom{17}{2} = 136$ and $8 \\cdot 17 = 136$, which add to $272$ ✓. (The choice $25$ REPORTS THE WHOLE MEMBERSHIP, seniors included ✗; $34$ SOLVES $8j = 272$, counting only the senior–junior handshakes ✗; $18$ OVERSHOOTS — with $18$ juniors there would be $\\binom{26}{2} - 28 = 297$ handshakes ✗.)',
    },
    {
      q: 'Six points are marked strictly inside a circle and some points are marked on the circle itself. A segment joins every pair of the marked points except pairs in which both points are inside, and there are $175$ segments in all. How many points are on the circle?',
      choices: ['$14$', '$20$', '$15$', '$13$'],
      answer: 0,
      solution:
        'Route one, count the missing segments. Let there be $n$ marked points altogether. Every pair would give $\\binom{n}{2}$ segments, and the missing ones are exactly the $\\binom{6}{2} = 15$ pairs of inside points. So $\\binom{n}{2} = 175 + 15 = 190$, that is $n(n-1) = 380$. Testing: $19 \\cdot 18 = 342$ and $20 \\cdot 19 = 380$ ✓, and the products only grow, so $n = 20$ and the circle carries $20 - 6 = 14$ points ✓. Route two, build the segments from the circle points. With $p$ points on the circle, the segments drawn are the circle-to-circle ones, $\\binom{p}{2}$, plus the inside-to-circle ones, $6p$: $\\frac{p(p-1)}{2} + 6p = 175$, so $p(p-1) + 12p = 350$ and $p^2 + 11p - 350 = 0$. Then $p = \\frac{-11 + \\sqrt{121 + 1400}}{2} = \\frac{-11 + 39}{2} = 14$ ✓, and checking, $\\binom{14}{2} = 91$ and $6 \\cdot 14 = 84$, which add to $175$ ✓. (The choice $20$ REPORTS ALL THE MARKED POINTS, the six inside ones included ✗; $15$ IS THE NUMBER OF SEGMENTS LEFT OUT, $\\binom{6}{2}$, not a count of points ✗; $13$ FALLS ONE SHORT — with $13$ points on the circle there would be only $\\binom{19}{2} - 15 = 156$ segments ✗.)',
    },
    {
      q: 'A club has $8$ seniors and $17$ juniors, and every pair of members shakes hands exactly once except that no two seniors shake hands with each other. How many of the handshakes are between a senior and a junior?',
      choices: ['$272$', '$300$', '$68$', '$136$'],
      answer: 3,
      solution:
        'Route one, pair the two groups directly. Each of the $8$ seniors shakes hands once with each of the $17$ juniors, and no such handshake is counted twice, because its two people come from different groups and so the pair is named once by choosing a senior and once by choosing a junior — not twice over: $8 \\cdot 17 = 136$ ✓. Route two, count every handshake and take away the junior ones. All handshakes that take place are the pairs of the $25$ members except the $\\binom{8}{2} = 28$ senior pairs: $\\binom{25}{2} - 28 = 300 - 28 = 272$. Of those, the ones between two juniors number $\\binom{17}{2} = \\frac{17 \\cdot 16}{2} = 136$. What is left is senior with junior: $272 - 136 = 136$ ✓, so the two kinds happen to be equally common here. (The choice $272$ REPORTS EVERY HANDSHAKE, the junior pairs included ✗; $300$ COUNTS ALL PAIRS OF THE $25$ MEMBERS, senior pairs included ✗; $68$ HALVES $8 \\cdot 17$ as if each senior–junior handshake had been counted twice, though its two people come from different groups ✗.)',
    },
  ],
  // slot 11 — couples at a round table
  [
    {
      q: 'Four married couples sit around a round table with eight evenly spaced seats, men and women alternating, and no one sits next to their own spouse. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$12$', '$144$', '$132$', '$96$'],
      answer: 0,
      solution:
        'Route one, seat the men, then see where the wives can go. Pin one man in the north seat; every seating can be turned that way in exactly one manner, so the rotations are used up. The men then hold four alternating seats and the other three men fill theirs in $3! = 6$ orders. Call the men $M_1, M_2, M_3, M_4$ clockwise and number the four women’s seats so that seat $k$ lies between $M_k$ and $M_{k+1}$, counting around. Wife $W_k$ is barred from seat $k-1$ and seat $k$, so she must take seat $k+1$ or $k+2$. If any wife takes the seat one further along, the next wife is squeezed into doing the same, and likewise for two further along, so the wives all shift the same amount: $2$ ways. That gives $6 \\cdot 2 = 12$ ✓. Route two, pin one man and fill the table seat by seat. Number the seats $1$ through $8$ clockwise with $M_1$ in seat $1$, so men hold the odd seats and women the even ones. His wife cannot be in seat $2$ or seat $8$, so she takes seat $4$ or seat $6$: $2$ choices. Put the other three men into seats $3$, $5$, $7$ in $3! = 6$ ways. Now the three remaining wives must fill seats $2$, $6$, $8$ (if $W_1$ took seat $4$), and each is barred from the two seats beside her husband: the wife of the man in seat $7$ cannot use seat $6$ or seat $8$, so she must take seat $2$; the wife of the man in seat $5$ cannot use seat $6$, so she takes seat $8$; the last wife takes seat $6$. Every step after the first two was forced, so $2 \\cdot 6 \\cdot 1 = 12$ ✓. (The choice $144$ IGNORES THE SPOUSE RULE, counting every alternating seating ✗; $132$ COUNTS THE SEATINGS IN WHICH AT LEAST ONE COUPLE SITS TOGETHER, the opposite of what is asked ✗; $96$ DROPS THE ALTERNATING RULE and counts the seatings in which every couple sits together ✗.)',
    },
    {
      q: 'Three married couples and two other friends — eight people in all — sit around a round table with eight evenly spaced seats, and each couple sits together in two neighboring seats. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$960$', '$24$', '$192$', '$48$'],
      answer: 2,
      solution:
        'Route one, glue each couple into a block. The table then holds five things: three couple-blocks and the two friends. Around a table where rotations count as the same seating, five things sit in $(5-1)! = 4! = 24$ ways. Inside each block the two spouses can sit in $2$ orders, and the three blocks choose independently: $2^3 = 8$. That gives $24 \\cdot 8 = 192$ ✓. Route two, pin one person to use up the rotations. Seat one of the two friends in the north seat; every seating can be turned that way in exactly one manner. Reading clockwise from that friend, the remaining seven seats hold, in order, the other friend and the three couple-blocks — four items in a line, which can be ordered in $4! = 24$ ways, since the block widths leave no choice about where each lands. Each block still has $2$ internal orders, for $2^3 = 8$: $24 \\cdot 8 = 192$ ✓. (The choice $960 = 5! \\cdot 8$ NEVER DIVIDES OUT THE ROTATIONS ✗; $24$ FORGETS THE TWO ORDERS INSIDE EACH COUPLE ✗; $48$ USES ONE FACTOR OF $2$ instead of $2^3$ ✗.)',
    },
    {
      q: 'Four married couples sit around a round table with eight evenly spaced seats, men and women alternating, and at least one person sits next to their own spouse. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$12$', '$132$', '$144$', '$48$'],
      answer: 1,
      solution:
        'Route one, count all the alternating seatings and take away the ones nobody wants. Pin one man in the north seat to use up the rotations; the other three men fill their seats in $3! = 6$ ways and the four women fill the four seats between them in $4! = 24$ ways, so there are $6 \\cdot 24 = 144$ alternating seatings in all. Now the ones with nobody beside a spouse: numbering the women’s seats so that seat $k$ lies between $M_k$ and $M_{k+1}$, wife $W_k$ must avoid seats $k-1$ and $k$, and once one wife shifts a given number of seats along the others are forced to shift the same amount, giving just $2$ such placements, so $6 \\cdot 2 = 12$ seatings. That leaves $144 - 12 = 132$ ✓. Route two, sort the placements by how many couples end up together. Keep the men pinned as above, which fixes $6$ men orders, and look at the $24$ ways the wives can take the four seats. Sorting them by how many wives land beside their husband gives $2$ with none, $8$ with exactly one, $4$ with exactly two, $8$ with exactly three, and $2$ with all four, which does add to $24$. The placements with at least one are $8 + 4 + 8 + 2 = 22$, so the seatings number $6 \\cdot 22 = 132$ ✓. (The choice $12$ COUNTS THE SEATINGS WITH NO COUPLE TOGETHER, the complement ✗; $144$ COUNTS EVERY ALTERNATING SEATING, spouse rule and all ✗; $48$ KEEPS ONLY THE SEATINGS IN WHICH EXACTLY ONE COUPLE SITS TOGETHER ✗.)',
    },
  ],
  // slot 12 — loops of identical beads
  [
    {
      q: 'A bracelet is strung from $8$ beads in a loop: $4$ identical amber beads and $4$ identical jade beads. Bracelets that differ by a rotation or by a flip of the bracelet are the same. How many different bracelets are there?',
      choices: ['$70$', '$10$', '$35$', '$8$'],
      answer: 3,
      solution:
        'Route one, describe a bracelet by the gaps between neighboring amber beads. Those gaps are four positive whole numbers adding to $8$, and turning the bracelet only shifts the list while flipping it reverses the list, so a bracelet is a gap list read up to shifting and reversing. The possible multisets are $\\{1,1,1,5\\}$, $\\{1,1,2,4\\}$, $\\{1,1,3,3\\}$, $\\{1,2,2,3\\}$ and $\\{2,2,2,2\\}$. The first and the last give $1$ bracelet each. The multiset $\\{1,1,2,4\\}$ has three shift-classes, $2114$, $2141$ and $2411$, of which the first and third reverse into each other, giving $2$ bracelets; $\\{1,2,2,3\\}$ behaves the same way, giving $2$; and $\\{1,1,3,3\\}$ has the two shift-classes $1133$ and $1313$, each its own reverse, giving $2$. Total $1 + 2 + 2 + 2 + 1 = 8$ ✓. Route two, count labeled strings and merge families. There are $\\binom{8}{4} = 70$ labeled strings. A string is unchanged by a turn only if it repeats: with four of each color that means a repeating block of length $2$ (the two alternating strings) or of length $4$ (the $\\binom{4}{2} = 6$ strings whose two halves match, the alternating pair among them). So $2$ labeled strings sit in families of $2$, giving $1$ class; $6 - 2 = 4$ sit in families of $4$, giving $1$; and $70 - 6 = 64$ sit in families of $8$, giving $8$ — that is $10$ bracelets up to turning alone. Allowing the flip, only the two $\\{1,1,2,4\\}$ classes and the two $\\{1,2,2,3\\}$ classes are mirror images of each other, so two pairs merge: $10 - 2 = 8$ ✓. (The choice $70$ COUNTS EVERY LABELED STRING ✗; $10$ STOPS AT THE TURNS and never flips the bracelet over ✗; $35$ DIVIDES THE $70$ BY $2$ FOR THE FLIP and forgets the eight turns ✗.)',
    },
    {
      q: 'A necklace is strung from $9$ beads in a loop: $3$ identical red beads and $6$ identical white beads. Necklaces that differ by a rotation or by a flip of the necklace are the same. How many different necklaces are there?',
      choices: ['$84$', '$7$', '$10$', '$42$'],
      answer: 1,
      solution:
        'Route one, describe a necklace by the gaps between neighboring red beads. Those gaps are three positive whole numbers adding to $9$, read up to shifting (a turn) and reversing (a flip). For three gaps, a multiset whose parts are not all distinct gives exactly one such reading, and a multiset with three distinct parts gives two shift-classes that are reverses of each other, so they merge into one as well. Every multiset therefore gives exactly one necklace, and the multisets are $\\{1,1,7\\}$, $\\{1,2,6\\}$, $\\{1,3,5\\}$, $\\{1,4,4\\}$, $\\{2,2,5\\}$, $\\{2,3,4\\}$ and $\\{3,3,3\\}$ — seven of them, so $7$ necklaces ✓. Route two, count labeled strings and merge families. There are $\\binom{9}{3} = 84$ labeled strings. Since $9$ has divisors $1$, $3$ and $9$, a string unchanged by a turn must repeat with period $3$, which with three reds means one red per block: $3$ such strings, sitting in families of $3$ and giving $1$ class. The other $84 - 3 = 81$ sit in families of $9$, giving $9$ classes, so $10$ necklaces up to turning alone. Allowing the flip, a class merges with a different one exactly when its gap multiset has three distinct parts — $\\{1,2,6\\}$, $\\{1,3,5\\}$ and $\\{2,3,4\\}$ — which is three merging pairs: $10 - 3 = 7$ ✓. (The choice $84$ COUNTS EVERY LABELED STRING ✗; $10$ STOPS AT THE TURNS and never flips the necklace over ✗; $42$ DIVIDES THE $84$ BY $2$ FOR THE FLIP and forgets the nine turns ✗.)',
    },
    {
      q: 'A bracelet of $6$ beads — $2$ identical red, $2$ identical blue, and $2$ identical green — is sewn flat onto a bag, so it can still be turned in place, meaning bracelets that differ by a rotation are the same, but it can no longer be lifted off and flipped over, so a bracelet and its mirror image are different. How many different bracelets are there?',
      choices: ['$16$', '$90$', '$15$', '$11$'],
      answer: 0,
      solution:
        'Route one, count labeled loops and size the families honestly. Numbering the six places gives $\\frac{6!}{2!\\,2!\\,2!} = \\frac{720}{8} = 90$ labeled loops, and dividing by $6$ is not allowed, since some loops are unchanged by a turn. Such a loop repeats with period $1$, $2$ or $3$. Period $1$ needs all six beads one color, impossible here; period $2$ needs three copies of a two-bead block, so three beads of one color, also impossible; period $3$ needs two copies of a three-bead block holding one red, one blue and one green, and there are $3! = 6$ such loops. Those $6$ are unchanged by the half turn, so their families hold only $3$ loops each, giving $2$ bracelets, and the other $90 - 6 = 84$ have full families of $6$, giving $14$. Total $2 + 14 = 16$ ✓. Route two, casework on how far apart the two reds are. Turn the bracelet so a red bead sits at the top; the second red is then $1$, $2$ or $3$ steps clockwise from it. If the reds are $1$ step apart, the choice of red places can be made in $6$ ways around the loop and no turn carries that pair of places back to itself, so each bracelet is met once; the remaining four places take $B$, $B$, $G$, $G$ in $\\frac{4!}{2!\\,2!} = 6$ ways, giving $6$ bracelets. Reds $2$ steps apart works the same way: $6$ bracelets. Reds opposite, $3$ steps apart: the half turn does carry that pair of places back to itself, so the $6$ fillings of the other four places are counted twice except the $2$ fillings that the half turn leaves alone, giving $\\frac{6-2}{2} + 2 = 4$ bracelets. Total $6 + 6 + 4 = 16$ ✓. (The choice $90$ COUNTS EVERY LABELED LOOP ✗; $15 = \\frac{90}{6}$ IS THE PLAIN DIVISION, which fails because some loops are unchanged by a turn ✗; $11$ ALSO ALLOWS FLIPS, which this bracelet cannot do since it is sewn down ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 3,
  challenge,
}
