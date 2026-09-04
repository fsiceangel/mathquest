// Counting chapter 3 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$2520$'.
//  - Every key was brute-forced in node before the stem was written. Multiset
//    rows and letter arrangements came from a deduplicating permutation
//    recursion and were then filtered on the stated condition; pair counts came
//    from listing the pairs; every circular item was checked by generating all
//    labeled arrangements and reducing each one to its lexicographic minimum
//    over the stated group (cyclic when only rotations identify arrangements,
//    dihedral when flips do too), so no key here leans on a division that a
//    fixed arrangement would break. The "find $n$" slots were solved by scanning
//    $n$ and confirming a single hit. Every key matches its pin. Pin
//    deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: divide-out-the-repeats vs.
//    choosing position sets (slots 1, 6, 9); a degree double count vs. a
//    complement or a build-up (slots 2, 3, 7); fix-one-object vs. count-labeled-
//    then-divide, or a total-and-share argument (slots 4, 8); a complement vs. a
//    direct placement, and casework vs. averaging over the symmetries (slots 5,
//    10). Each solution then names the most tempting wrong answer’s trap in
//    CAPS, ending ✗; every one of those wrong values was computed in node too.
//  - Conventions are settled in every stem: repeated letters, tiles, counters
//    and beads of one kind are identical while everything else is different; a
//    row is read left to right and never flipped; every symmetry stem says in
//    words whether rotations identify arrangements and whether flips do; every
//    pair rule is spelled out in both directions; a number never begins with $0$.

const worksheet = [
  // slot 1 — permutations of a multiset.
  //          Lanes: BUZZARD -> 2520; 5 red + 4 yellow counters -> 126;
  //          derived: BUZZARD with the two Z’s together -> 720.
  [
    {
      q: 'How many different arrangements of the letters of $BUZZARD$ are there? (The two $Z$’s are identical, so swapping them does not make a new arrangement.)',
      answer: '$2520$',
      solution:
        'Overcount, then divide. Pretend the two $Z$’s carry tiny labels $Z_1$ and $Z_2$. Then all seven letters are different and there are $7! = 5040$ arrangements. Rubbing the labels off, each real arrangement came from exactly $2! = 2$ labeled ones, since the two $Z$’s can be labeled in either order and nothing else moves. So there are $\\frac{5040}{2} = 2520$ arrangements ✓. Second route, by handing out positions. First decide which two of the seven positions hold the $Z$’s: that is $\\binom{7}{2} = 21$ choices, and the two $Z$’s being identical means the choice of a position pair settles them completely. The five remaining positions then take $B, U, A, R, D$ — five different letters — in $5! = 120$ orders. That gives $21 \\cdot 120 = 2520$ ✓. REPORTING $5040$ treats the two $Z$’s as tellable apart, so every arrangement is written down twice ✗.',
    },
    {
      q: 'Nine counters are laid in a row: $5$ identical red counters and $4$ identical yellow counters. Counters of the same color cannot be told apart, and the row is read from left to right and never turned around. How many different-looking rows are possible?',
      answer: '$126$',
      solution:
        'Overcount, then divide. If all nine counters were numbered they could be laid out in $9! = 362880$ orders. Erasing the numbers, each different-looking row comes from $5!$ orderings of the red counters times $4!$ orderings of the yellow ones, that is $120 \\cdot 24 = 2880$ labeled orders. So the answer is $\\frac{362880}{2880} = 126$ ✓. Second route, by splitting on the last counter. Write $f(r, y)$ for the number of rows made from $r$ red and $y$ yellow counters. A row either ends in red, and the first eight places form a row of $4$ red and $4$ yellow, or ends in yellow, leaving $5$ red and $3$ yellow. Rows of $4$ red and $4$ yellow number $70$ and rows of $5$ red and $3$ yellow number $56$, since a row is decided by which places are yellow. So $f(5,4) = 70 + 56 = 126$ ✓. DIVIDING BY ONLY THE LARGER GROUP, $\\frac{9!}{5!} = 3024$, cancels the repeats among the red counters and forgets that the four yellow counters are identical too ✗.',
    },
    {
      q: 'In how many arrangements of the letters of $BUZZARD$ are the two $Z$’s next to each other? (The two $Z$’s are identical.)',
      answer: '$720$',
      solution:
        'Glue the pair. Tape the two $Z$’s together into a single block $ZZ$. The row is now six things — the block, $B$, $U$, $A$, $R$, $D$ — all different from one another, so they can be lined up in $6! = 720$ orders. Because the two $Z$’s are identical, the block reads the same either way round and no order inside it needs counting. So there are $720$ arrangements ✓. Second route, by counting position pairs. An arrangement is fixed by choosing the two positions for the $Z$’s and then filling the rest. Among positions $1$ through $7$, the neighboring pairs are $\\{1,2\\}, \\{2,3\\}, \\ldots, \\{6,7\\}$ — exactly $6$ of them. For each, the other five positions hold $B, U, A, R, D$ in $5! = 120$ orders, giving $6 \\cdot 120 = 720$ ✓. MULTIPLYING THE BLOCK COUNT BY $2$ FOR THE ORDER INSIDE THE BLOCK gives $720 \\cdot 2 = 1440$; that step belongs to a block of two different letters, and here the two $Z$’s cannot be told apart ✗.',
    },
  ],

  // slot 2 — every pair counted once.
  //          Lanes: 23 players shaking hands -> 253; 9-member phone links -> 36;
  //          reversed: 231 handshakes -> 22 members.
  [
    {
      q: 'Twenty-three players at a tournament each shake hands with every other player exactly once. A handshake involves two players and is counted once, not once for each of them. How many handshakes take place?',
      answer: '$253$',
      solution:
        'Count hand-ends, then halve. Each of the $23$ players takes part in $22$ handshakes, one with every other player, so adding up over the players gives $23 \\cdot 22 = 506$. Every handshake was counted twice there, once by each of its two players, so the number of handshakes is $\\frac{506}{2} = 253$ ✓. Second route, by charging each handshake to the earlier player. Number the players $1$ through $23$ and record each handshake against the lower-numbered of its two players. Player $1$ is charged $22$ handshakes, player $2$ is charged $21$ (the one with player $1$ already went to player $1$), and so on down to player $22$, charged $1$, with player $23$ charged none. The total is $22 + 21 + \\cdots + 1$. Pair the ends: $22 + 1 = 23$, $21 + 2 = 23$, and so on for $11$ pairs, giving $11 \\cdot 23 = 253$ ✓. ANSWERING $506$ stops before the halving and counts each handshake once from each side ✗.',
    },
    {
      q: 'A committee of $9$ people sets up a direct phone link between every pair of its members. One link serves both members of a pair, and no two members get more than one link. How many links are set up?',
      answer: '$36$',
      solution:
        'Count link-ends, then halve. Every member has a link to each of the other $8$ members, so counting from the members’ side gives $9 \\cdot 8 = 72$. Each link has two ends and was therefore counted twice, so there are $\\frac{72}{2} = 36$ links ✓. Second route, by adding one member at a time. With $2$ members there is $1$ link. Each new member needs a link to everyone already there, so going from $2$ to $9$ members adds $2, 3, 4, 5, 6, 7$, and $8$ links in turn. The total is $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36$ ✓. GIVING $72$ counts each link once for each of the two members it joins, but one wire between two phones is a single link ✗.',
    },
    {
      q: 'Every pair of members of a club shook hands exactly once, and there were $231$ handshakes in all. Each handshake was counted once, not once per person. How many members does the club have?',
      answer: '$22$',
      solution:
        'Set up and solve. With $n$ members, each person shakes $n - 1$ hands, and $n(n-1)$ counts every handshake twice, so the number of handshakes is $\\frac{n(n-1)}{2}$. Setting $\\frac{n(n-1)}{2} = 231$ gives $n(n-1) = 462$. We need consecutive integers with product $462$; since $\\sqrt{462} \\approx 21.5$, try $22 \\cdot 21 = 462$, which works, so $n = 22$ ✓. Second route, by climbing the table. A club of $20$ has $\\frac{20 \\cdot 19}{2} = 190$ handshakes, a club of $21$ has $\\frac{21 \\cdot 20}{2} = 210$, and a club of $22$ has $\\frac{22 \\cdot 21}{2} = 231$ — a hit. Adding a member always adds handshakes, so the count rises with $n$ and no other club size gives $231$ ✓. SOLVING $\\frac{n(n+1)}{2} = 231$ INSTEAD lands on $n = 21$, because $\\frac{21 \\cdot 22}{2} = 231$; that equation counts a person as shaking their own hand, and a club of $21$ has only $210$ handshakes ✗.',
    },
  ],

  // slot 3 — diagonals of a convex polygon.
  //          Lanes: 16-gon -> 104; 14-gon braces -> 77; reversed: 275 -> 25 sides.
  [
    {
      q: 'How many diagonals does a convex $16$-gon have? (A diagonal joins two corners that are not next to each other, and each diagonal is counted once.)',
      answer: '$104$',
      solution:
        'Count from the corners, then halve. From any one corner, a diagonal can be drawn to every corner except that corner itself and its two neighbors, so each corner sends out $16 - 3 = 13$ diagonals. Counting this way over all corners gives $16 \\cdot 13 = 208$, and every diagonal was counted twice, once at each of its two endpoints. So there are $\\frac{208}{2} = 104$ diagonals ✓. Second route, by subtracting the sides. Joining every pair of the $16$ corners uses $\\frac{16 \\cdot 15}{2} = 120$ segments, since each pair of corners gives one segment. Exactly $16$ of those segments are sides of the polygon, and the rest are diagonals: $120 - 16 = 104$ ✓. STOPPING AT $208$ keeps each diagonal twice, once as drawn from each end ✗.',
    },
    {
      q: 'A convex $14$-sided window frame gets a straight wooden brace between every pair of corners that are not next to each other. One brace serves both of the corners it joins. How many braces are there?',
      answer: '$77$',
      solution:
        'Subtract the frame’s own edges. Every pair of the $14$ corners could be joined; the number of pairs is $\\frac{14 \\cdot 13}{2} = 91$, because naming an ordered pair gives $14 \\cdot 13 = 182$ and each pair is named twice. Of those $91$ segments, $14$ are the edges of the frame itself and get no brace, leaving $91 - 14 = 77$ braces ✓. Second route, corner by corner. A brace runs from each corner to any corner other than itself and its two neighbors, which is $14 - 3 = 11$ corners. Adding over all corners gives $14 \\cdot 11 = 154$ brace-ends, and each brace has two ends, so there are $\\frac{154}{2} = 77$ braces ✓. ANSWERING $91$ counts the $14$ edges of the frame as braces, but neighboring corners are already joined by the frame ✗.',
    },
    {
      q: 'A convex polygon has exactly $275$ diagonals, each counted once. How many sides does it have?',
      answer: '$25$',
      solution:
        'Set up and solve. A convex $n$-gon has $\\frac{n(n-3)}{2}$ diagonals, since each of the $n$ corners sends out $n - 3$ of them and each diagonal is seen from both ends. So $\\frac{n(n-3)}{2} = 275$, giving $n(n-3) = 550$ and $n^2 - 3n - 550 = 0$. This factors as $(n - 25)(n + 22) = 0$, and a polygon has a positive number of sides, so $n = 25$ ✓. Second route, by scanning. A $24$-gon has $\\frac{24 \\cdot 21}{2} = 252$ diagonals, a $25$-gon has $\\frac{25 \\cdot 22}{2} = 275$ — a hit — and a $26$-gon has $\\frac{26 \\cdot 23}{2} = 299$. Each extra side raises the diagonal count, so the count never returns to $275$ and $n = 25$ is the only answer ✓. TAKING $n = 22$ FROM THE FACTORED FORM reads the root off $(n + 22)$ with the wrong sign; a $22$-gon has $\\frac{22 \\cdot 19}{2} = 209$ diagonals ✗.',
    },
  ],

  // slot 4 — arrangements around a circle, rotations only.
  //          Lanes: two trays, 4 and 5 objects -> 144; 6 rings on 8 pegs -> 2520;
  //          derived: 9 numbered seats -> 362880.
  [
    {
      q: 'Four different appetizers are set around one circular tray and five different desserts around another circular tray. On each tray, two settings are the same if one is a rotation of the other, and neither tray is ever flipped over. The two trays are told apart. In how many ways can both trays be set?',
      answer: '$144$',
      solution:
        'Pin one item on each tray. On the appetizer tray, turning the tray until a chosen appetizer sits at the front uses up every rotation and leaves the other $3$ appetizers to fill the remaining spots in $3! = 6$ ways. On the dessert tray, the same trick leaves $4! = 24$ ways. The trays are set independently and are told apart, so the total is $6 \\cdot 24 = 144$ ✓. Second route, count labeled and divide. Number the spots on each tray. Then the appetizers can be placed in $4! = 24$ ways and the desserts in $5! = 120$ ways, for $24 \\cdot 120 = 2880$ numbered settings. Rotating the appetizer tray to any of its $4$ positions and the dessert tray to any of its $5$ positions changes the numbered setting but not the real one, so each real setting was counted $4 \\cdot 5 = 20$ times: $\\frac{2880}{20} = 144$ ✓. REPORTING $2880$ keeps the spot numbers, treating a tray and the same tray turned one notch as different settings ✗.',
    },
    {
      q: 'A circular stand has $8$ evenly spaced pegs, and $6$ different rings are hung on it, at most one ring per peg, so two pegs are left empty. Two arrangements are the same if one is a rotation of the stand into the other, and the stand is never flipped over. How many arrangements are there?',
      answer: '$2520$',
      solution:
        'Pin one ring. Turn the stand until a chosen ring — say the widest one — sits at the top peg. Every arrangement can be turned into exactly one such position, so counting these counts each arrangement once. The other $7$ pegs then hold the remaining $5$ different rings and $2$ empty pegs, and the empty pegs are alike, so the number of ways is $\\frac{7!}{2!} = \\frac{5040}{2} = 2520$ ✓. Second route, count labeled and divide. Number the pegs $1$ through $8$. Choosing which $6$ pegs hold rings and then assigning the rings gives $\\binom{8}{6} \\cdot 6! = 28 \\cdot 720 = 20160$ numbered arrangements. Here dividing by $8$ is safe: a turn that left an arrangement looking unchanged would have to move each ring to a peg holding that same ring, and the rings are all different, so only the do-nothing turn fixes anything. Each arrangement therefore appears in exactly $8$ numbered forms, and $\\frac{20160}{8} = 2520$ ✓. GIVING $20160$ counts the peg numbers as part of the arrangement, so one arrangement and its eight turns are counted as eight ✗.',
    },
    {
      q: 'Nine people sit around a round table whose nine seats are numbered $1$ through $9$, so moving everyone one seat along gives a different seating. How many seatings are there?',
      answer: '$362880$',
      solution:
        'Fill the numbered seats one at a time. Because the seats carry numbers, a seating is just a list saying who is in seat $1$, who is in seat $2$, and so on. Seat $1$ can go to any of $9$ people, seat $2$ to any of the remaining $8$, and so on down to the last seat, giving $9 \\cdot 8 \\cdot 7 \\cdots 1 = 9! = 362880$ seatings ✓. Second route, from the unnumbered count. If the seats were plain and only the circular order mattered, there would be $8! = 40320$ seatings, since pinning one person kills the rotations. Now put the numbers back: each unnumbered seating can be rotated into $9$ different numbered ones, and those $9$ are all different because the seat labels are. So the numbered count is $9 \\cdot 40320 = 362880$ ✓. ANSWERING $40320$ divides by the $9$ rotations, but rotating everyone one seat along changes who sits in seat $1$, so it gives a different seating here ✗.',
    },
  ],

  // slot 5 — loops with rotations AND flips.
  //          Lanes: 9-bead necklace, amber not beside pearl -> 15120;
  //          8-bead two-color bracelet -> 30; derived: amber beside pearl -> 5040.
  [
    {
      q: 'A necklace is strung from $9$ different beads in a loop, among them an amber bead and a pearl bead, and the amber bead must not be next to the pearl bead. Two necklaces are the same if one can be rotated or flipped over to match the other. How many necklaces are there?',
      answer: '$15120$',
      solution:
        'Count all, then take away the bad ones. All told, $9$ different beads in a loop give $\\frac{9!}{9 \\cdot 2} = \\frac{362880}{18} = 20160$ necklaces, because each necklace shows up in $9$ rotations and each of those twice more once flips are allowed. Now the necklaces with amber next to pearl: tape those two beads into one block, leaving $8$ things in a loop, which give $\\frac{8!}{8 \\cdot 2} = \\frac{40320}{16} = 2520$ necklaces, and the block can be strung amber-then-pearl or pearl-then-amber for $2 \\cdot 2520 = 5040$. So the good ones number $20160 - 5040 = 15120$ ✓. Second route, place the beads directly. Rotate the necklace until the amber bead sits at the top; this uses up all $9$ rotations and pins amber in place. The pearl must avoid amber’s two neighbors, so it takes one of the other $6$ spots, and the remaining $7$ beads fill the remaining $7$ spots in $7! = 5040$ ways, giving $6 \\cdot 5040 = 30240$. Flipping the necklace about the line through the amber bead still leaves amber at the top but reverses everything else, and no arrangement of $8$ different beads is unchanged by that reversal, so these $30240$ fall into pairs: $\\frac{30240}{2} = 15120$ ✓. ANSWERING $30240$ divides out the rotations but not the flip, counting each necklace once and once more as its mirror image ✗.',
    },
    {
      q: 'A bracelet is strung from $8$ beads in a loop, each bead either amber or jade, with beads of the same kind identical. Two bracelets are the same if one can be rotated or flipped over to match the other. How many different bracelets are there?',
      answer: '$30$',
      solution:
        'Casework on how many beads are jade. With $0$ jade beads there is $1$ bracelet, and with $1$ jade bead there is $1$. With $2$ jade beads only the gap between them matters, and going around the loop the two gaps can be $1$ and $7$, $2$ and $6$, $3$ and $5$, or $4$ and $4$: that is $4$ bracelets. With $3$ jade beads the three gaps add to $8$, and going round a loop of three gaps the turns and the flip together produce every reordering, so a bracelet is settled by the bag of gap sizes: $\\{6,1,1\\}$, $\\{5,2,1\\}$, $\\{4,3,1\\}$, $\\{4,2,2\\}$, $\\{3,3,2\\}$ — that is $5$ bracelets. With $4$ jade beads the four gaps add to $8$, and now the order around the loop can matter: $5,1,1,1$ gives $1$ bracelet, while $4,2,1,1$, $3,3,1,1$, and $3,2,2,1$ each give $2$ (the odd gaps can sit beside each other or across from each other), and $2,2,2,2$ gives $1$, for $1 + 2 + 2 + 2 + 1 = 8$. Swapping the two colors matches each bracelet with $k$ jade beads to one with $8 - k$, so the counts for $5, 6, 7, 8$ jade beads repeat those for $3, 2, 1, 0$: $5, 4, 1, 1$. The total is $1 + 1 + 4 + 5 + 8 + 5 + 4 + 1 + 1 = 30$ ✓. Second route, average over the symmetries. There are $2^8 = 256$ colorings of $8$ numbered positions, and $16$ symmetries: $8$ turns and $8$ flips. Count the colorings each symmetry leaves looking unchanged. The do-nothing turn leaves all $256$; the turns by $1, 3, 5, 7$ notches force one color all the way round, $2$ each; the turns by $2$ and $6$ notches force a repeating block of $2$, so $2^2 = 4$ each; the turn by $4$ notches forces a repeating block of $4$, so $2^4 = 16$. That is $256 + 4 \\cdot 2 + 2 \\cdot 4 + 16 = 288$. Of the flips, $4$ pass through two opposite beads and leave $2^5 = 32$ colorings each, and $4$ pass between beads and leave $2^4 = 16$ each, adding $128 + 64 = 192$. The number of bracelets is the average, $\\frac{288 + 192}{16} = \\frac{480}{16} = 30$ ✓. DIVIDING $256$ BY THE $16$ SYMMETRIES gives $16$; that division would be right only if no coloring were left unchanged by a turn or a flip, and the all-amber bracelet alone breaks that ✗.',
    },
    {
      q: 'A necklace is strung from $9$ different beads in a loop, among them an amber bead and a pearl bead, and the amber bead must be next to the pearl bead. Two necklaces are the same if one can be rotated or flipped over to match the other. How many necklaces are there?',
      answer: '$5040$',
      solution:
        'Glue the pair, then loop. Tape the amber and pearl beads together into one block. The loop now holds $8$ things, all different, and $8$ different things in a loop that may be rotated and flipped give $\\frac{8!}{8 \\cdot 2} = \\frac{40320}{16} = 2520$ necklaces. The block itself can be strung two ways, amber first or pearl first going clockwise, and those two are not matched by any rotation or flip once the rest of the loop is fixed. So there are $2 \\cdot 2520 = 5040$ necklaces ✓. Second route, place the beads directly. Turn the necklace so the amber bead sits at the top, which uses up all $9$ rotations. The pearl must be at one of amber’s $2$ neighboring spots, and the other $7$ beads fill the remaining $7$ spots in $7! = 5040$ ways, for $2 \\cdot 5040 = 10080$ arrangements with amber pinned. Flipping about the line through the amber bead keeps amber at the top and reverses the rest, and no arrangement of $8$ different beads survives that reversal unchanged, so these come in mirror pairs: $\\frac{10080}{2} = 5040$ ✓. GIVING $10080$ divides out the $9$ rotations and forgets that the necklace can be turned over, so every necklace is counted alongside its mirror image ✗.',
    },
  ],

  // slot 6 — arrangements of a multiset with an end condition.
  //          Lanes: RATTRAP begins and ends with R -> 30; 8 tiles, red at both
  //          ends -> 90; derived: RATTRAP neither begins nor ends with P -> 450.
  [
    {
      q: 'How many arrangements of the letters of $RATTRAP$ both begin and end with $R$? (Letters that repeat are identical: there are two $R$’s, two $A$’s, two $T$’s, and one $P$.)',
      answer: '$30$',
      solution:
        'Pin the ends, then count the middle. Both $R$’s are used up by the two ends, and since they are identical there is only one way to do that. The five middle positions then hold $A, A, T, T, P$. Pretending those five were all different gives $5! = 120$ orders, and each real arrangement was counted $2!$ times for the two $A$’s and $2!$ times for the two $T$’s, so the middle can be filled in $\\frac{120}{2! \\cdot 2!} = \\frac{120}{4} = 30$ ways ✓. Second route, by handing out position sets. An arrangement is settled by saying which positions hold each letter. The $R$’s must take positions $1$ and $7$: $1$ way. From the five positions left, choose $2$ for the $A$’s: $\\binom{5}{2} = 10$ ways. From the three still open, choose $2$ for the $T$’s: $\\binom{3}{2} = 3$ ways. The lone $P$ takes what remains. That is $10 \\cdot 3 = 30$ ✓. MULTIPLYING BY $2$ FOR WHICH $R$ GOES IN FRONT gives $60$; the two $R$’s are identical, so swapping them leaves the word looking exactly the same ✗.',
    },
    {
      q: 'A row of $8$ tiles is laid from $4$ identical red tiles, $2$ identical blue tiles, and $2$ identical green tiles. The row is read from left to right and never turned around. In how many different-looking rows is the first tile red and the last tile red?',
      answer: '$90$',
      solution:
        'Pin the ends, then count the middle. Putting a red tile at each end uses two of the four reds, and the reds are identical so there is one way to do it. The six middle places then hold $2$ red, $2$ blue, and $2$ green tiles. Treating those six as different gives $6! = 720$ orders, and each real row was counted $2!$ times over for each of the three colors, so the count is $\\frac{720}{2! \\cdot 2! \\cdot 2!} = \\frac{720}{8} = 90$ ✓. Second route, by handing out position sets. Positions $1$ and $8$ are red, so the other two reds go in $2$ of the $6$ middle positions: $\\binom{6}{2} = 15$ ways. From the $4$ positions still open, choose $2$ for the blue tiles: $\\binom{4}{2} = 6$ ways. The greens take the last two positions. That is $15 \\cdot 6 = 90$ ✓. CHOOSING WHICH RED TILE SITS FIRST AND WHICH SITS LAST, for $4 \\cdot 3 = 12$ end pairs and $12 \\cdot 90 = 1080$, treats identical red tiles as tellable apart ✗.',
    },
    {
      q: 'How many arrangements of the letters of $RATTRAP$ neither begin nor end with $P$? (Letters that repeat are identical: two $R$’s, two $A$’s, two $T$’s, and one $P$.)',
      answer: '$450$',
      solution:
        'Count all, then take away the bad ones. All the arrangements number $\\frac{7!}{2! \\cdot 2! \\cdot 2!} = \\frac{5040}{8} = 630$. An arrangement is bad if it starts with $P$ or ends with $P$. Starting with $P$ leaves $R, R, A, A, T, T$ for the other six places, which is $\\frac{6!}{2! \\cdot 2! \\cdot 2!} = \\frac{720}{8} = 90$ arrangements, and ending with $P$ gives another $90$. No arrangement is bad both ways, since there is only one $P$ and it cannot sit at both ends. So the good arrangements number $630 - 90 - 90 = 450$ ✓. Second route, by placing $P$ first. The single $P$ has to land in one of positions $2, 3, 4, 5, 6$ — that is $5$ choices. Whichever it takes, the remaining six positions hold $R, R, A, A, T, T$, and those can be arranged in $\\frac{6!}{2! \\cdot 2! \\cdot 2!} = 90$ ways. That gives $5 \\cdot 90 = 450$ ✓. SUBTRACTING JUST ONE BAD CASE, $630 - 90 = 540$, throws out the arrangements that start with $P$ and keeps the ones that end with it ✗.',
    },
  ],

  // slot 7 — everyone has the same number of partners.
  //          Lanes: 16 people, 7 trades each -> 56; 22 sensors, degree 4 -> 44;
  //          reversed: 6 games each and 84 games -> 28 teams.
  [
    {
      q: 'At a conference of $16$ people, each person has traded contact cards with exactly $7$ of the others. A trade is between two people and no pair traded twice. How many trades have taken place?',
      answer: '$56$',
      solution:
        'Count from the people, then halve. Adding up the trades each person took part in gives $16 \\cdot 7 = 112$. Every trade involves two people and so was added in twice, once by each of them, which means the number of trades is $\\frac{112}{2} = 56$ ✓. Second route, through the pairs that did not trade. There are $\\frac{16 \\cdot 15}{2} = 120$ pairs of people in all. Each person failed to trade with $15 - 7 = 8$ others, so counting non-trading pairs from both sides gives $\\frac{16 \\cdot 8}{2} = 64$ such pairs. The pairs that did trade are the rest: $120 - 64 = 56$ ✓. REPORTING $112$ counts a trade once for each of its two people, but a single exchange of cards is one trade ✗.',
    },
    {
      q: 'In a network of $22$ sensors, each sensor is linked directly to exactly $4$ others. A link joins two sensors and no two sensors share more than one link. How many links are there?',
      answer: '$44$',
      solution:
        'Count link-ends, then halve. Each of the $22$ sensors has $4$ links running out of it, so there are $22 \\cdot 4 = 88$ link-ends. A link has exactly two ends, so the number of links is $\\frac{88}{2} = 44$ ✓. Second route, through the pairs that are not linked. The number of pairs of sensors is $\\frac{22 \\cdot 21}{2} = 231$. Each sensor has no link to $21 - 4 = 17$ others, so unlinked pairs number $\\frac{22 \\cdot 17}{2} = 187$. The linked pairs are what is left: $231 - 187 = 44$ ✓. GIVING $88$ counts each cable twice, once from each sensor it reaches ✗.',
    },
    {
      q: 'In a league every pair of teams plays at most once. So far every team has played exactly $6$ games and $84$ games have been played in all, each game counted once rather than once per team. How many teams are in the league?',
      answer: '$28$',
      solution:
        'Set up and solve. With $n$ teams, counting games from the teams’ side gives $6n$, and each game gets counted twice because two teams play in it. So $\\frac{6n}{2} = 84$, that is $3n = 84$ and $n = 28$. Since $3n = 84$ has only one solution, the answer is settled, and $28$ is large enough for each team to have $6$ different opponents ✓. Second route, by counting team-appearances. Each of the $84$ games puts two teams on the field, so there are $2 \\cdot 84 = 168$ team-appearances. Every team accounts for exactly $6$ of them, so the number of teams is $\\frac{168}{6} = 28$ ✓. DIVIDING $84$ BY $6$ TO GET $14$ forgets that each game is shared by two teams; $14$ teams playing $6$ games apiece would account for only $\\frac{14 \\cdot 6}{2} = 42$ games ✗.',
    },
  ],

  // slot 8 — round tables and hoops, rotations only, with an opposite condition.
  //          Lanes: 8 seats with an opposite pair and a neighbor -> 240;
  //          10-bead nailed hoop, opposite pair -> 40320;
  //          derived: 6 seats, not opposite -> 96.
  [
    {
      q: 'Eight people sit around a round table with eight evenly spaced seats. Suri sits directly opposite Tomas, and Vera sits next to Suri. Two seatings are the same if one is a rotation of the other, and the table is never turned over. How many seatings are possible?',
      answer: '$240$',
      solution:
        'Pin Suri, then build outward. Turning the table until Suri is at a chosen seat uses up all $8$ rotations, so every seating is counted exactly once this way. Tomas is then forced into the seat straight across from Suri. Vera must be at one of Suri’s $2$ neighboring seats, and the remaining $5$ people fill the remaining $5$ seats in $5! = 120$ ways. That gives $2 \\cdot 120 = 240$ seatings ✓. Second route, count labeled and divide. Number the seats $1$ through $8$. Suri can take any of the $8$ numbered seats, Tomas is then forced, Vera has $2$ choices, and the rest fill in $5! = 120$ ways, for $8 \\cdot 1 \\cdot 2 \\cdot 120 = 1920$ numbered seatings. Rotating a seating gives $8$ different numbered seatings and never reproduces the same one, because all eight people are different, so each real seating was counted $8$ times: $\\frac{1920}{8} = 240$ ✓. ANSWERING $1920$ keeps the seat numbers, so one seating and its seven turns are counted as eight ✗.',
    },
    {
      q: 'Ten different beads are fixed at ten evenly spaced points on a circular hoop that is nailed to a board, so the hoop can be turned in place — two arrangements that differ by a rotation are the same — but it can never be flipped over. The ruby bead must be directly opposite the pearl bead. How many arrangements are there?',
      answer: '$40320$',
      solution:
        'Pin the ruby. Turn the hoop until the ruby bead is at the top; this uses up all $10$ rotations, so each arrangement is counted once. The pearl is then forced into the point straight across from the ruby, five steps away. The other $8$ beads fill the other $8$ points in $8! = 40320$ ways ✓. Second route, from the unrestricted count and the pearl’s share. Ignoring the condition, $10$ different beads on this hoop give $\\frac{10!}{10} = 9! = 362880$ arrangements, since the $10$ rotations of any arrangement are all different when the beads are. Fix the ruby by turning; the pearl then sits at one of the $9$ remaining points, and by symmetry the $362880$ arrangements split evenly among those $9$ choices. Exactly one choice is the point opposite the ruby, so the count is $\\frac{362880}{9} = 40320$ ✓. DIVIDING AGAIN BY $2$ TO GET $20160$ treats an arrangement and its mirror image as the same, but the hoop is nailed down and can never be turned over ✗.',
    },
    {
      q: 'Six people, including Priya and Rune, sit around a round table with six evenly spaced seats. Two seatings are the same if one is a rotation of the other, and the table is never turned over. In how many seatings is Priya NOT directly opposite Rune?',
      answer: '$96$',
      solution:
        'Count all, then take away the bad ones. Six people at a round table with only rotations identified give $\\frac{6!}{6} = 5! = 120$ seatings. Among them, the ones with Priya directly opposite Rune are found by pinning Priya, which forces Rune across from her and leaves the other $4$ people to fill $4$ seats in $4! = 24$ ways. So the answer is $120 - 24 = 96$ ✓. Second route, seat Rune directly. Turn the table until Priya sits at a chosen seat, using up all $6$ rotations. Rune may take any of the $5$ other seats, of which exactly $1$ is straight across from Priya, leaving $4$ allowed seats. The remaining $4$ people fill the remaining $4$ seats in $4! = 24$ ways, giving $4 \\cdot 24 = 96$ ✓. COUNTING THE BAD SEATINGS AS $3 \\cdot 4! = 72$, one for each of the three pairs of opposite seats, and answering $120 - 72 = 48$ double-counts the rotations: those three pairs of seats become the same pair once the table is turned, and there are only $24$ seatings with Priya opposite Rune ✗.',
    },
  ],

  // slot 9 — numbers from a digit multiset.
  //          Lanes: 1,1,1,6,6,6,8 above 6000000 -> 80; 1,1,5,5,5,6 even -> 10;
  //          derived: 1,1,1,6,6,6,8 odd -> 60.
  [
    {
      q: 'How many seven-digit numbers greater than $6000000$ can be formed by using each of the digits $1, 1, 1, 6, 6, 6, 8$ exactly once? (Digits that repeat are identical, so two arrangements giving the same seven-digit number count once.)',
      answer: '$80$',
      solution:
        'Casework on the leading digit. A seven-digit number is greater than $6000000$ exactly when its first digit is $6$ or $8$, since a leading $1$ gives a number below $2000000$ while any number starting with $6$ is at least $6111168$. If the first digit is $6$, the other six places hold $1, 1, 1, 6, 6, 8$, giving $\\frac{6!}{3! \\cdot 2!} = \\frac{720}{12} = 60$ numbers. If the first digit is $8$, the rest hold $1, 1, 1, 6, 6, 6$, giving $\\frac{6!}{3! \\cdot 3!} = \\frac{720}{36} = 20$. The total is $60 + 20 = 80$ ✓. Second route, count all and subtract. Using all seven digits gives $\\frac{7!}{3! \\cdot 3!} = \\frac{5040}{36} = 140$ numbers. The ones that fail are exactly those starting with $1$; their other six places hold $1, 1, 6, 6, 6, 8$, which is $\\frac{6!}{2! \\cdot 3!} = \\frac{720}{12} = 60$ numbers. So $140 - 60 = 80$ ✓. STOPPING AT $60$ counts only the numbers that begin with $6$ and forgets that a number beginning with $8$ also clears $6000000$ ✗.',
    },
    {
      q: 'How many six-digit even numbers can be formed by using each of the digits $1, 1, 5, 5, 5, 6$ exactly once? (Digits that repeat are identical, so two arrangements giving the same number count once.)',
      answer: '$10$',
      solution:
        'Fix the last digit. A number is even exactly when its last digit is even, and the only even digit available is the single $6$. So the $6$ goes at the end, and the first five places hold $1, 1, 5, 5, 5$. Treating those five as different gives $5! = 120$ orders, and each number was counted $2!$ times for the two $1$’s and $3!$ times for the three $5$’s: $\\frac{120}{2! \\cdot 3!} = \\frac{120}{12} = 10$ ✓. Second route, by handing out position sets. The $6$ must take position $6$: $1$ way. From the five positions left, choose the $2$ that hold the $1$’s: $\\binom{5}{2} = 10$ ways. The three $5$’s fill the remaining three positions, with nothing left to decide since they are identical. That is $10$ numbers ✓. DIVIDING BY ONLY THE TWO $1$’S, $\\frac{5!}{2!} = 60$, treats the three $5$’s as tellable apart and counts each number six times over ✗.',
    },
    {
      q: 'How many of the seven-digit numbers formed by using each of the digits $1, 1, 1, 6, 6, 6, 8$ exactly once are odd? (Digits that repeat are identical, so two arrangements giving the same number count once.)',
      answer: '$60$',
      solution:
        'Fix the last digit. A number is odd exactly when its last digit is odd, and the only odd digit in the list is $1$. Since all three $1$’s are identical, there is just one way to end the number in $1$, and the first six places then hold $1, 1, 6, 6, 6, 8$. That gives $\\frac{6!}{2! \\cdot 3!} = \\frac{720}{12} = 60$ numbers ✓. Second route, by handing out position sets. Decide which positions hold each digit. The three $1$’s take a set of $3$ positions that must include position $7$, so choose the other $2$ from positions $1$ through $6$: $\\binom{6}{2} = 15$ ways. From the $4$ positions still open, choose $3$ for the $6$’s: $\\binom{4}{3} = 4$ ways. The $8$ takes the last free position. That is $15 \\cdot 4 = 60$ ✓. MULTIPLYING BY $3$ FOR WHICH $1$ SITS AT THE END, giving $3 \\cdot 60 = 180$, treats identical digits as tellable apart; the three $1$’s produce the same number no matter which one is written last ✗.',
    },
  ],

  // slot 10 — colorings of a small shape, colors repeatable.
  //          Lanes: triangle with 4 colors, rotations only -> 24;
  //          3 sectors with 6 colors, rotations only -> 76;
  //          derived: triangle with 5 colors, rotations and flips -> 35.
  [
    {
      q: 'Each corner of an equilateral triangle is painted with one of $4$ colors, and colors may repeat. Two paintings are the same if a rotation of the triangle turns one into the other; the triangle is never flipped over. How many different paintings are there?',
      answer: '$24$',
      solution:
        'Casework on how the colors repeat. All three corners the same color: $4$ paintings, one per color. Exactly two corners alike: choose the repeated color in $4$ ways and the odd color in $3$ ways, for $12$; rotation can carry the odd corner to any position, so each such choice gives exactly one painting. All three corners different: choose the set of $3$ colors in $\\binom{4}{3} = 4$ ways, and each set gives $2$ paintings, since reading the three colors clockwise gives $3! = 6$ labeled versions that fall into $2$ groups of $3$ rotations — that is $8$. The total is $4 + 12 + 8 = 24$ ✓. Second route, count labeled and repair the division. Numbering the corners gives $4^3 = 64$ paintings. The $4$ one-color paintings are left unchanged by both nontrivial rotations, so each of them is a painting all by itself. The other $60$ have at least two colors and are moved by every nontrivial rotation, so they come in groups of $3$: $\\frac{60}{3} = 20$ paintings. Altogether $20 + 4 = 24$ ✓. DIVIDING ALL $64$ BY THE $3$ ROTATIONS gives $\\frac{64}{3} \\approx 21.3$, which is not even a whole number; the plain division assumes no painting is left unchanged by a turn, and the one-color paintings are ✗.',
    },
    {
      q: 'A circular badge is divided into $3$ equal sectors, and each sector is painted one of $6$ colors, with colors allowed to repeat. Two badges are the same if a rotation of the badge turns one into the other; the badge is never flipped over. How many different badges are there?',
      answer: '$76$',
      solution:
        'Casework on how the colors repeat. All three sectors the same color: $6$ badges. Exactly two sectors alike: pick the repeated color in $6$ ways and the odd one in $5$ ways, for $30$ badges, since turning the badge puts the odd sector anywhere. All three sectors different: pick the set of $3$ colors in $\\binom{6}{3} = 20$ ways, and each set gives $2$ badges, because the $3! = 6$ ways of writing those colors around the badge split into $2$ groups of $3$ rotations — that is $40$. The total is $6 + 30 + 40 = 76$ ✓. Second route, count labeled and repair the division. With the sectors numbered there are $6^3 = 216$ paintings. Exactly $6$ of them use one color throughout and are unchanged by every rotation, so each stands alone. The remaining $216 - 6 = 210$ are moved by both nontrivial rotations and fall into groups of $3$: $\\frac{210}{3} = 70$. Adding the six solid badges, $70 + 6 = 76$ ✓. DIVIDING ALL $216$ BY $3$ gives $72$, four short; that division would be right only if every painting had three distinct turns, and the six solid-color badges do not ✗.',
    },
    {
      q: 'Each corner of an equilateral triangle is painted with one of $5$ colors, and colors may repeat. Two paintings are now the same if a rotation OR a flip of the triangle turns one into the other. How many different paintings are there?',
      answer: '$35$',
      solution:
        'A painting is just its bag of colors. With both rotations and flips allowed, all six symmetries of the triangle are in play, and they can carry the three corners into any order at all. So two paintings match exactly when they use the same colors the same number of times — a painting is settled by the multiset of its three corner colors, with no order to keep track of. The number of multisets of size $3$ from $5$ colors is $\\binom{5 + 3 - 1}{3} = \\binom{7}{3} = 35$ ✓. Second route, casework on how the colors repeat. All three corners alike: $5$ paintings. Exactly two alike: $5$ choices for the repeated color and $4$ for the odd one, giving $20$. All three different: $\\binom{5}{3} = 10$ color sets, and each gives just $1$ painting, because the clockwise and counterclockwise orders that stayed apart under rotations alone are now matched by a flip. The total is $5 + 20 + 10 = 35$ ✓. KEEPING THE ROTATION-ONLY COUNT $45$ leaves the three-different-color paintings split into two mirror images apiece; a flip turns each into the other, so those $10$ pairs collapse to $10$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 3,
  worksheet,
}
