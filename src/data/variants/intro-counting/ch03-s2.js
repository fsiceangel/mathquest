// Counting & Probability chapter 3 — variations for section 3.3
// (Counting Pairs of Items). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: whether each pair is served once or
//    twice, whether the two people in a pair come from one group or from two
//    different groups, and exactly which pairs are excluded. People, teams,
//    points and posts are all different, and no pair is used twice.
//  - Route one is usually the section's own move — add up the pairs from each
//    item's point of view, then divide by the number of times each pair was
//    counted. Route two is independent of it: a sum over the items of the pairs
//    each one starts, a split into pair types that cannot overlap, a complement,
//    or a build-up that adds one item at a time.
//  - Each distractor is one named slip: forgetting the halving, using $n$ where
//    $n - 1$ belongs, halving a count that was never doubled, removing a group's
//    pairs without adding its single line back, or reporting the count of pairs
//    when the question asked for the number of items.

const s33 = [
  // slot 1 — one action per pair, and the same count run backwards
  [
    {
      q: 'Nineteen researchers at a workshop each trade name badges with every other researcher exactly once, one trade per pair of researchers. How many trades take place?',
      choices: ['$342$', '$361$', '$190$', '$171$'],
      answer: 3,
      solution:
        'Route one, count from each researcher and divide. Each of the $19$ researchers trades with the other $18$, giving $19 \\times 18 = 342$. A trade between two researchers has now been counted once from each side, so every trade appears exactly twice and there are $\\frac{342}{2} = 171$ trades ✓. Route two, count each trade by whoever arrived first. Number the researchers $1$ through $19$ in order of arrival and record each trade under its lower number. Researcher $1$ takes the $18$ trades with everyone after her, researcher $2$ takes $17$, and so on down to researcher $18$, who takes the single trade with researcher $19$. Every trade is recorded once, so the total is $18 + 17 + \\cdots + 1 = 171$ ✓. (The choice $342$ FORGETS THE HALVING and reports each trade twice ✗; $361$ IS $19^2$, which lets a researcher trade badges with herself ✗; $190$ IS THE COUNT FOR $20$ RESEARCHERS, since $\\frac{20 \\cdot 19}{2} = 190$ ✗.)',
    },
    {
      q: 'Twenty-two points are marked on a circle, and a chord is drawn joining every pair of them. No three of the chords meet at one interior point. How many chords are drawn?',
      choices: ['$462$', '$231$', '$484$', '$209$'],
      answer: 1,
      solution:
        'Route one, count from each point and divide. From each of the $22$ points a chord runs to each of the other $21$ points, giving $22 \\times 21 = 462$. Each chord has two endpoints and was therefore drawn once from each end, so the number of chords is $\\frac{462}{2} = 231$ ✓. Route two, mark the points one at a time. When the $k$-th point is marked, it needs a chord to each of the $k - 1$ points already on the circle, and it needs no others. So the first point adds $0$ chords, the second adds $1$, the third adds $2$, and so on to the twenty-second, which adds $21$. The total is $1 + 2 + \\cdots + 21 = 231$ ✓. (The choice $462$ FORGETS THAT EACH CHORD WAS DRAWN FROM BOTH OF ITS ENDS ✗; $484$ IS $22^2$, which joins a point to itself ✗; $209$ THROWS AWAY THE $22$ CHORDS JOINING NEIGHBORING POINTS, as though the question had asked only for diagonals ✗.)',
    },
    {
      q: 'In a chess club, every pair of members played exactly one game against each other, and $153$ games were played in all. How many members does the club have?',
      choices: ['$18$', '$17$', '$306$', '$153$'],
      answer: 0,
      solution:
        'Route one, undo the halving. With $n$ members, adding up the games from each member’s point of view gives $n(n-1)$, and every game is counted twice that way, so $\\frac{n(n-1)}{2} = 153$ and $n(n-1) = 306$. Two consecutive whole numbers with product $306$ are $18$ and $17$, so $n = 18$ ✓. Route two, add members one at a time. When the $m$-th member joins, she plays one game against each of the $m - 1$ members already there, so the schedule grows by $m - 1$ games and the running total is $1 + 2 + \\cdots + (n-1)$. Since $1 + 2 + \\cdots + 17 = 153$, the last term is $17$, so $n - 1 = 17$ and $n = 18$ ✓. The running total climbs with every new member, so no other club size gives $153$. (The choice $17$ STOPS ONE STEP SHORT, naming the smaller factor of $306 = 18 \\times 17$ ✗; $306$ REPORTS THE DOUBLED COUNT AS THE MEMBERSHIP ✗; $153$ TAKES THE NUMBER OF GAMES AS THE NUMBER OF MEMBERS ✗.)',
    },
  ],
  // slot 2 — one meeting per pair, and what one withdrawal costs
  [
    {
      q: 'A tea shop stocks $17$ different teas and sells one blend for every pair of different teas, where a blend is the same however its two teas are named. How many blends does the shop sell?',
      choices: ['$272$', '$136$', '$289$', '$153$'],
      answer: 1,
      solution:
        'Route one, count from each tea and divide. Each of the $17$ teas is blended with the other $16$, giving $17 \\times 16 = 272$. Every blend has two teas in it and so was counted from both, making $\\frac{272}{2} = 136$ blends ✓. Route two, split the shelf in two. Put $8$ teas on one shelf and the other $9$ on a second shelf. Blends of two teas from the first shelf, counted by the tea that comes first alphabetically, number $7 + 6 + \\cdots + 1 = 28$. Blends of two teas from the second shelf number $8 + 7 + \\cdots + 1 = 36$. Blends that take one tea from each shelf are fixed by naming the tea from each, with no repeats, so there are $8 \\times 9 = 72$. Every blend falls in exactly one of the three groups, so the total is $28 + 36 + 72 = 136$ ✓. (The choice $272$ FORGETS THE HALVING ✗; $289$ IS $17^2$, which blends a tea with itself ✗; $153$ IS THE COUNT FOR $18$ TEAS, since $\\frac{18 \\cdot 17}{2} = 153$ ✗.)',
    },
    {
      q: 'Sixteen towns are to be joined so that every pair of towns has exactly one direct road between them. How many roads are needed?',
      choices: ['$240$', '$256$', '$105$', '$120$'],
      answer: 3,
      solution:
        'Route one, count from each town and divide. Each of the $16$ towns needs a road to the other $15$, giving $16 \\times 15 = 240$. A road runs between two towns and was named once by each of them, so the number of roads is $\\frac{240}{2} = 120$ ✓. Route two, connect the towns one at a time. When the $k$-th town is connected, it needs a road to each of the $k - 1$ towns already joined, and the older roads are untouched. The road count therefore grows by $1$, then $2$, then $3$, and so on up to $15$ for the last town, for a total of $1 + 2 + \\cdots + 15 = 120$ ✓. (The choice $240$ FORGETS THAT EACH ROAD JOINS TWO TOWNS AND WAS COUNTED FROM BOTH ✗; $256$ IS $16^2$, which builds a road from a town to itself ✗; $105$ IS THE COUNT FOR $15$ TOWNS, since $\\frac{15 \\cdot 14}{2} = 105$ ✗.)',
    },
    {
      q: 'A round-robin chess tournament was arranged for $21$ players, every pair to play exactly one game, but one player withdrew before any game was played and the rest of the schedule was kept. How many fewer games are played than were arranged?',
      choices: ['$21$', '$190$', '$20$', '$210$'],
      answer: 2,
      solution:
        'Route one, count both schedules and subtract. The arranged tournament has $\\frac{21 \\cdot 20}{2} = 210$ games, because $21 \\times 20$ counts every game from both players. With $20$ players left, the same reasoning gives $\\frac{20 \\cdot 19}{2} = 190$ games. The drop is $210 - 190 = 20$ ✓. Route two, look only at the games that disappear. A game is cancelled exactly when the withdrawing player was in it, and he was scheduled against each of the other $20$ players, once each. Every other game has two players who are both still in the tournament, so it survives untouched. That makes exactly $20$ cancelled games ✓. (The choice $21$ USES $n$ WHERE $n - 1$ BELONGS, scheduling the withdrawing player against himself as well ✗; $190$ REPORTS THE GAMES STILL PLAYED instead of the drop ✗; $210$ REPORTS THE ORIGINAL SCHEDULE ✗.)',
    },
  ],
  // slot 3 — pairs of corners, minus the pairs that are neighbors
  [
    {
      q: 'How many diagonals does a convex $11$-gon have? (A diagonal joins two corners that are not next to each other.)',
      choices: ['$55$', '$88$', '$44$', '$33$'],
      answer: 2,
      solution:
        'Route one, count from each corner and divide. From a corner, a diagonal can run to every corner except itself and its two neighbors, so each of the $11$ corners starts $11 - 3 = 8$ diagonals, giving $11 \\times 8 = 88$. Each diagonal was drawn once from each of its two ends, so there are $\\frac{88}{2} = 44$ diagonals ✓. Route two, take all pairs of corners and remove the sides. Counting each pair of corners by the corner it meets first going clockwise from a fixed start gives $10 + 9 + \\cdots + 1 = 55$ pairs in all. Exactly $11$ of those pairs are neighboring corners, and those pairs are the sides, not diagonals. So the diagonals number $55 - 11 = 44$ ✓. (The choice $55$ COUNTS EVERY PAIR OF CORNERS, SIDES INCLUDED ✗; $88$ FORGETS THAT EACH DIAGONAL WAS DRAWN FROM BOTH OF ITS ENDS ✗; $33$ REMOVES THE $11$ SIDES A SECOND TIME, taking $55 - 11 - 11$ ✗.)',
    },
    {
      q: 'Twelve posts stand evenly spaced around a circular yard, and a rope is stretched between every pair of posts. The ropes joining neighboring posts form the fence. How many of the ropes are not part of the fence?',
      choices: ['$54$', '$108$', '$66$', '$42$'],
      answer: 0,
      solution:
        'Route one, count all the ropes and remove the fence. Each of the $12$ posts is roped to the other $11$, giving $12 \\times 11 = 132$, and each rope was counted from both of its posts, so there are $\\frac{132}{2} = 66$ ropes in all. Going around the circle, neighboring posts form exactly $12$ pairs, so $12$ ropes make up the fence and $66 - 12 = 54$ ropes do not ✓. Route two, count the non-fence ropes from each post. From one post, a rope avoids the fence exactly when it goes to a post that is neither the post itself nor either of its two neighbors, and there are $12 - 3 = 9$ such posts. That gives $12 \\times 9 = 108$, with every non-fence rope counted once from each of its two posts, so there are $\\frac{108}{2} = 54$ ✓. (The choice $108$ FORGETS THE HALVING ✗; $66$ COUNTS EVERY ROPE, FENCE INCLUDED ✗; $42$ SUBTRACTS THE $12$ FENCE ROPES A SECOND TIME ✗.)',
    },
    {
      q: 'A convex polygon has exactly $77$ diagonals. How many sides does it have?',
      choices: ['$13$', '$77$', '$15$', '$14$'],
      answer: 3,
      solution:
        'Route one, undo the halving. Each of the $n$ corners starts $n - 3$ diagonals, and each diagonal is started from both ends, so $\\frac{n(n-3)}{2} = 77$ and $n(n-3) = 154$. Testing whole numbers, $13 \\times 10 = 130$ is too small and $15 \\times 12 = 180$ is too large, while $14 \\times 11 = 154$ lands exactly, so $n = 14$ ✓. Route two, grow the polygon one corner at a time. Adding a corner between two neighboring corners of an $m$-gon gives the new corner a diagonal to every old corner but its two neighbors, which is $m - 2$ diagonals, and the old side between those two neighbors becomes a diagonal as well, for $m - 1$ new diagonals in all. Starting from a triangle with $0$, the counts run $0, 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77$ for $3, 4, \\ldots, 14$ sides, reaching $77$ at $14$ sides ✓. The list climbs at every step, so no other polygon has $77$ diagonals. (The choice $13$ UNDERSHOOTS, since a $13$-gon has $65$ diagonals ✗; $77$ TAKES THE NUMBER OF DIAGONALS AS THE NUMBER OF SIDES ✗; $15$ OVERSHOOTS, since a $15$-gon has $90$ diagonals ✗.)',
    },
  ],
  // slot 4 — two events per pair, forward and backward
  [
    {
      q: 'A badminton club has $13$ players, and every pair of players plays exactly two matches against each other. How many matches are played?',
      choices: ['$156$', '$78$', '$312$', '$169$'],
      answer: 0,
      solution:
        'Route one, count the pairs, then give each pair its two matches. Adding up opponents from each player’s side gives $13 \\times 12 = 156$, which counts every pair twice, so there are $\\frac{156}{2} = 78$ pairs of players. Each pair plays $2$ matches, and matches of different pairs are different matches, so the total is $78 \\times 2 = 156$ ✓. Route two, count from the players and halve once. Each player meets each of the other $12$ players twice, so each player plays $12 \\times 2 = 24$ matches. Adding that over all players gives $13 \\times 24 = 312$, and every match is counted once by each of its two players, so the number of matches is $\\frac{312}{2} = 156$ ✓. (The choice $78$ STOPS AT THE PAIRS and forgets the second match ✗; $312$ NEVER REMOVES THE DOUBLE COUNT, reporting the sum over players ✗; $169$ IS $13^2$, which has a player facing herself ✗.)',
    },
    {
      q: 'Each of $12$ pen pals mails one postcard to every other pen pal, so each pair of pen pals exchanges two postcards. How many postcards are mailed in all?',
      choices: ['$66$', '$264$', '$132$', '$144$'],
      answer: 2,
      solution:
        'Route one, count the pairs, then give each pair its two postcards. From each pen pal’s side there are $11$ others, so $12 \\times 11 = 132$ counts every pair twice and there are $\\frac{132}{2} = 66$ pairs. Each pair accounts for $2$ postcards, one in each direction, so $66 \\times 2 = 132$ postcards ✓. Route two, count by sender. Every postcard has exactly one sender and one receiver, so sorting the postcards by sender loses nothing and repeats nothing. Each of the $12$ pen pals sends $11$ postcards, one to each of the others, so the pile holds $12 \\times 11 = 132$ postcards and no halving is needed ✓. (The choice $66$ COUNTS THE PAIRS AND FORGETS that each pair exchanges two postcards ✗; $264$ MULTIPLIES THE UNHALVED $12 \\times 11$ BY $2$, doubling a count that was already counted from both sides ✗; $144$ IS $12^2$, which has a pen pal mailing herself ✗.)',
    },
    {
      q: 'In an art club, every pair of members drew exactly two portraits, each member of the pair drawing the other once, and $110$ portraits were drawn in all. How many members does the club have?',
      choices: ['$10$', '$11$', '$55$', '$110$'],
      answer: 1,
      solution:
        'Route one, undo both corrections. With $n$ members there are $\\frac{n(n-1)}{2}$ pairs, and each pair drew $2$ portraits, so the portrait count is $2 \\cdot \\frac{n(n-1)}{2} = n(n-1)$. Setting $n(n-1) = 110$ and looking for consecutive whole numbers, $10 \\times 9 = 90$ is too small and $12 \\times 11 = 132$ is too large, while $11 \\times 10 = 110$ fits, so $n = 11$ ✓. Route two, add members one at a time. When the $m$-th member joins, she forms $m - 1$ new pairs and each new pair brings $2$ portraits, so the total grows by $2(m-1)$. The running totals are $2, 6, 12, 20, 30, 42, 56, 72, 90, 110$ as the club grows from $2$ to $11$ members, and $110$ appears at $11$ members ✓. The totals rise at every step, so $11$ is the only club size that works. (The choice $10$ STOPS ONE STEP SHORT, naming the smaller factor of $110 = 11 \\times 10$ ✗; $55$ TAKES THE NUMBER OF PAIRS AS THE NUMBER OF MEMBERS ✗; $110$ TAKES THE NUMBER OF PORTRAITS AS THE NUMBER OF MEMBERS ✗.)',
    },
  ],
  // slot 5 — two different groups, so nothing is double counted
  [
    {
      q: 'At a science fair, each of the $7$ judges talks with each of the $9$ presenters exactly once. No judge talks with another judge and no presenter talks with another presenter, and there are no other conversations. How many conversations take place?',
      choices: ['$16$', '$63$', '$120$', '$126$'],
      answer: 1,
      solution:
        'Route one, pair one from each group. A conversation is one judge together with one presenter, so it is fixed by naming its judge ($7$ ways) and its presenter ($9$ ways), giving $7 \\times 9 = 63$. Nothing here is counted twice: the two people in a conversation are never both judges or both presenters, so no conversation is produced by two different judge-and-presenter choices, and there is nothing to halve ✓. Route two, start from everyone and remove the pairs that do not talk. If all $16$ people at the fair talked with everyone else, the count would be $\\frac{16 \\cdot 15}{2} = 120$ conversations. Pairs of judges do not talk, and those number $\\frac{7 \\cdot 6}{2} = 21$; pairs of presenters do not talk, and those number $\\frac{9 \\cdot 8}{2} = 36$. Removing both kinds leaves $120 - 21 - 36 = 63$ ✓. (The choice $16$ ADDS THE TWO GROUPS instead of pairing them ✗; $120$ LETS JUDGES TALK WITH JUDGES AND PRESENTERS WITH PRESENTERS ✗; $126$ COUNTS EACH CONVERSATION FROM BOTH SIDES, though $7 \\times 9$ already lists each one exactly once ✗.)',
    },
    {
      q: 'Ten points lie on one straight line and $7$ other points lie on a second line parallel to it. A segment is drawn between every pair of points that do not lie on the same line, and no other segments are drawn. How many segments are there?',
      choices: ['$136$', '$35$', '$17$', '$70$'],
      answer: 3,
      solution:
        'Route one, pair one point from each line. Every segment drawn has one endpoint on the first line and one on the second, so it is fixed by naming its endpoint on the first line ($10$ ways) and its endpoint on the second ($7$ ways): $10 \\times 7 = 70$. Because the two endpoints come from different lines, no segment arises from two different choices, so nothing is halved ✓. Route two, start from all pairs and remove the same-line pairs. All $17$ points taken two at a time give $\\frac{17 \\cdot 16}{2} = 136$ pairs. Pairs inside the first line number $\\frac{10 \\cdot 9}{2} = 45$ and pairs inside the second number $\\frac{7 \\cdot 6}{2} = 21$, and none of those pairs is joined. That leaves $136 - 45 - 21 = 70$ segments ✓. (The choice $136$ DRAWS A SEGMENT FOR EVERY PAIR, same-line pairs included ✗; $35$ HALVES $10 \\times 7$ OUT OF REFLEX, though no segment was counted twice ✗; $17$ ADDS THE TWO SETS OF POINTS instead of pairing them ✗.)',
    },
    {
      q: 'At a welcome event, each of the $6$ hosts greeted every guest exactly once. No guest greeted another guest, no host greeted another host, and there were $102$ greetings in all. How many guests were there?',
      choices: ['$23$', '$34$', '$17$', '$96$'],
      answer: 2,
      solution:
        'Route one, pair one from each group. A greeting is one host together with one guest, so with $g$ guests the count is $6g$, and no greeting is produced twice because a greeting never joins two hosts or two guests. Setting $6g = 102$ gives $g = 17$ ✓. Route two, start from everyone and remove the pairs that did not greet. With $g$ guests there are $6 + g$ people, and if everyone greeted everyone the count would be $\\frac{(6+g)(5+g)}{2}$. Host–host pairs, $\\frac{6 \\cdot 5}{2} = 15$ of them, did not greet, and neither did the $\\frac{g(g-1)}{2}$ guest–guest pairs. So the greetings number $\\frac{g^2 + 11g + 30}{2} - 15 - \\frac{g^2 - g}{2} = \\frac{12g}{2} = 6g$. At $g = 17$ that is $102$ ✓, and since the count grows with every extra guest, $17$ is the only answer. (The choice $23$ REPORTS EVERYONE PRESENT, hosts included ✗; $34$ HALVES A COUNT THAT WAS NEVER DOUBLED, solving $\\frac{6g}{2} = 102$ ✗; $96$ SUBTRACTS THE $6$ HOSTS FROM THE GREETINGS ✗.)',
    },
  ],
  // slot 6 — the count is given and the size is wanted
  [
    {
      q: 'A convex polygon has exactly $90$ diagonals. How many sides does it have?',
      choices: ['$13$', '$90$', '$16$', '$15$'],
      answer: 3,
      solution:
        'Route one, undo the halving. Each of the $n$ corners starts $n - 3$ diagonals, one to every corner but itself and its two neighbors, and each diagonal gets started from both ends. So $\\frac{n(n-3)}{2} = 90$ and $n(n-3) = 180$. Among consecutive-style products, $14 \\times 11 = 154$ falls short and $16 \\times 13 = 208$ overshoots, while $15 \\times 12 = 180$ is exact, so $n = 15$ ✓. Route two, take all pairs of corners and drop the sides. Every diagonal is a pair of corners that is not a side, so the diagonal count is $\\frac{n(n-1)}{2} - n$. At $n = 15$ the pairs number $1 + 2 + \\cdots + 14 = 105$, and removing the $15$ sides leaves $105 - 15 = 90$ ✓. Checking the neighbors the same way, $14$ corners give $91 - 14 = 77$ and $16$ give $120 - 16 = 104$, so $15$ is the only fit. (The choice $13$ UNDERSHOOTS, since a $13$-gon has $65$ diagonals ✗; $90$ TAKES THE NUMBER OF DIAGONALS AS THE NUMBER OF SIDES ✗; $16$ OVERSHOOTS, since a $16$-gon has $104$ diagonals ✗.)',
    },
    {
      q: 'Every pair of members of a club exchanged gifts, each member of the pair giving the other exactly one gift, for $272$ gifts in all. How many members are in the club?',
      choices: ['$16$', '$17$', '$136$', '$272$'],
      answer: 1,
      solution:
        'Route one, pairs first, then two gifts each. With $n$ members the pairs number $\\frac{n(n-1)}{2}$, since $n(n-1)$ counts each pair from both members. Each pair produced $2$ gifts, so the gift count is $2 \\cdot \\frac{n(n-1)}{2} = n(n-1) = 272$. Looking for consecutive whole numbers, $16 \\times 15 = 240$ is too few and $18 \\times 17 = 306$ too many, while $17 \\times 16 = 272$ fits, so $n = 17$ ✓. Route two, add members one at a time. When the $m$-th member joins, she forms $m - 1$ new pairs and each new pair brings $2$ gifts, so the total grows by $2(m-1)$. The running totals are $2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272$ as the club grows from $2$ members to $17$, so $n = 17$ ✓, and since the totals rise at every step no other size works. (The choice $16$ STOPS ONE STEP SHORT, naming the smaller factor of $272 = 17 \\times 16$ ✗; $136$ TAKES THE NUMBER OF PAIRS AS THE NUMBER OF MEMBERS ✗; $272$ TAKES THE NUMBER OF GIFTS AS THE NUMBER OF MEMBERS ✗.)',
    },
    {
      q: 'A convex polygon has exactly $54$ diagonals. Counting sides and diagonals together, how many segments join pairs of its vertices?',
      choices: ['$66$', '$63$', '$54$', '$132$'],
      answer: 0,
      solution:
        'Route one, find the polygon, then count all pairs of vertices. Each of the $n$ corners starts $n - 3$ diagonals and each diagonal is started twice, so $\\frac{n(n-3)}{2} = 54$ and $n(n-3) = 108 = 12 \\times 9$, giving $n = 12$. A segment joining two vertices is fixed by the pair of vertices it uses, and $12 \\times 11 = 132$ names each pair from both ends, so there are $\\frac{132}{2} = 66$ such segments ✓. Route two, grow the polygon, then add the sides. Adding a vertex to an $m$-gon gives the new vertex $m - 2$ diagonals and turns one old side into a diagonal, so the diagonal count grows by $m - 1$; starting from $0$ for a triangle the counts run $0, 2, 5, 9, 14, 20, 27, 35, 44, 54$ for $3$ through $12$ sides, so the polygon has $12$ sides. Every segment between two vertices is either a side or a diagonal and never both, so the total is $12 + 54 = 66$ ✓. (The choice $63$ SOLVES $n(n-3) = 54$ WITHOUT HALVING, gets $9$ sides, and adds those $9$ to the $54$ ✗; $54$ REPORTS THE DIAGONALS ALONE and forgets the sides ✗; $132$ IS $12 \\times 11$, the pairs of vertices counted from both ends ✗.)',
    },
  ],
  // slot 7 — one group inside the group refuses, forward and backward
  [
    {
      q: 'At a reunion of $18$ people, $4$ of them are cousins who do not shake hands with one another. Every other pair of people at the reunion shakes hands exactly once. How many handshakes take place?',
      choices: ['$153$', '$141$', '$147$', '$145$'],
      answer: 2,
      solution:
        'Route one, count all pairs and remove the ones that are skipped. If everyone shook hands with everyone, the count would be $\\frac{18 \\cdot 17}{2} = 153$, since $18 \\times 17$ counts each pair from both people. The skipped pairs are pairs of cousins, and $4$ cousins form $\\frac{4 \\cdot 3}{2} = 6$ pairs. So there are $153 - 6 = 147$ handshakes ✓. Route two, split the handshakes by type. A handshake is cousin with cousin, cousin with non-cousin, or non-cousin with non-cousin, and these three kinds cannot overlap. Cousin–cousin handshakes: $0$. Cousin–non-cousin: each of the $4$ cousins shakes with each of the $14$ others, and such a pair has exactly one cousin in it, so no halving is needed and there are $4 \\times 14 = 56$. Non-cousin–non-cousin: $\\frac{14 \\cdot 13}{2} = 91$. Adding, $0 + 56 + 91 = 147$ ✓. (The choice $153$ IGNORES THE COUSINS’ RULE ✗; $141$ SUBTRACTS $4 \\times 3 = 12$, counting each skipped handshake from both cousins ✗; $145$ SUBTRACTS $4 \\times 2 = 8$, as if each cousin skipped just two handshakes ✗.)',
    },
    {
      q: 'A league has $15$ teams and every pair of teams plays exactly once, except that the $5$ teams from one city do not play each other at all. How many games are scheduled?',
      choices: ['$95$', '$105$', '$85$', '$100$'],
      answer: 0,
      solution:
        'Route one, count all pairs and remove the city pairs. With no exception the schedule would hold $\\frac{15 \\cdot 14}{2} = 105$ games, since $15 \\times 14$ counts every pair from both teams. The games dropped are the ones between two city teams, and $5$ teams form $\\frac{5 \\cdot 4}{2} = 10$ pairs. So the schedule has $105 - 10 = 95$ games ✓. Route two, split the games by type. Every scheduled game is either between two of the $10$ outside teams or between a city team and an outside team, and no game is both. Games among the outside teams number $\\frac{10 \\cdot 9}{2} = 45$. Games between a city team and an outside team are fixed by naming the city team ($5$ ways) and the outside team ($10$ ways), with no double count because the two teams come from different groups: $5 \\times 10 = 50$. Adding, $45 + 50 = 95$ ✓. (The choice $105$ IGNORES THE CITY RULE ✗; $85$ REMOVES $5 \\times 4 = 20$ PAIRS, counting each dropped game from both city teams ✗; $100$ REMOVES ONLY $5$ GAMES, one per city team ✗.)',
    },
    {
      q: 'At a reunion of $18$ people, one family group does not shake hands within itself, and every other pair of people shakes hands exactly once. In all, $147$ handshakes take place. How many people are in that family group?',
      choices: ['$6$', '$3$', '$5$', '$4$'],
      answer: 3,
      solution:
        'Route one, work back from the missing handshakes. All $18$ people shaking with everyone would give $\\frac{18 \\cdot 17}{2} = 153$ handshakes, so exactly $153 - 147 = 6$ handshakes are missing. The missing ones are the pairs inside the family group, and a group of $k$ people has $\\frac{k(k-1)}{2}$ pairs, since $k(k-1)$ counts each pair from both ends. So $\\frac{k(k-1)}{2} = 6$, giving $k(k-1) = 12 = 4 \\times 3$ and $k = 4$ ✓. Route two, split the handshakes by type and test. With a family of $k$, the handshakes are the $k(18-k)$ family-with-outsider ones, which need no halving because each such pair has exactly one family member, plus the $\\frac{(18-k)(17-k)}{2}$ handshakes among the outsiders. At $k = 3$ that is $3 \\times 15 = 45$ and $\\frac{15 \\cdot 14}{2} = 105$, for $150$; at $k = 4$ it is $4 \\times 14 = 56$ and $\\frac{14 \\cdot 13}{2} = 91$, for $147$ ✓; at $k = 5$ it is $5 \\times 13 = 65$ and $\\frac{13 \\cdot 12}{2} = 78$, for $143$. The total falls as the family grows, so $k = 4$ is the only answer. (The choice $6$ REPORTS THE NUMBER OF MISSING HANDSHAKES, not the size of the family ✗; $3$ SOLVES $k(k-1) = 6$, forgetting that the family’s pairs were counted from both ends ✗; $5$ OVERSHOOTS THE FAMILY SIZE, since $5$ relatives leave only $143$ handshakes ✗.)',
    },
  ],
  // slot 8 — what one more vertex or one more member costs
  [
    {
      q: 'A new vertex is added to a convex polygon, placed between two neighboring vertices so that the polygon stays convex, and the new polygon has exactly $19$ more diagonals than the old one. How many sides did the old polygon have?',
      choices: ['$21$', '$19$', '$20$', '$22$'],
      answer: 2,
      solution:
        'Route one, follow what the new vertex changes. Call the old polygon an $n$-gon. In the new polygon the added vertex has $(n+1) - 3 = n - 2$ diagonals of its own, one to every old vertex except the two it now sits between. On top of that, the old side joining those two neighbors is no longer a side, because the new vertex has come between them, so it becomes a diagonal. No other segment changes its status, so the diagonal count rises by $(n-2) + 1 = n - 1$. Setting $n - 1 = 19$ gives $n = 20$ ✓. Route two, count pairs of vertices instead. In an $m$-gon the segments joining pairs of vertices number $\\frac{m(m-1)}{2}$, of which $m$ are sides, so the diagonals number $\\frac{m(m-1)}{2} - m$. A $20$-gon then has $190 - 20 = 170$ diagonals and a $21$-gon has $210 - 21 = 189$, a rise of exactly $19$ ✓. The neighbors miss: going from $19$ to $20$ sides the rise is $170 - 152 = 18$, and from $21$ to $22$ it is $209 - 189 = 20$, so $20$ is the only old size that works. (The choice $21$ FORGETS THAT THE OLD SIDE BECOMES A DIAGONAL, solving $n - 2 = 19$ ✗; $19$ LETS THE NEW VERTEX JOIN ALL $n$ OLD VERTICES, solving $n = 19$ ✗; $22$ USES $n - 3$, the diagonals per vertex of the old polygon, as the rise ✗.)',
    },
    {
      q: 'In a club, every pair of members plays one game against each other. One new member joins, and the number of games in the schedule rises by $24$. How many members does the club have after the newcomer joins?',
      choices: ['$25$', '$24$', '$12$', '$300$'],
      answer: 0,
      solution:
        'Route one, look only at the games the newcomer brings. Let the club hold $m$ members after the newcomer joins. The new games are exactly the games the newcomer plays, one against each of the $m - 1$ members already there, and no game between two older members is added or lost. So the rise is $m - 1 = 24$ and $m = 25$ ✓. Route two, write both schedules and subtract. With $m$ members the schedule holds $\\frac{m(m-1)}{2}$ games, since $m(m-1)$ counts each pair from both members. At $m = 25$ that is $300$ games and at $m = 24$ it is $276$, a rise of $300 - 276 = 24$ ✓. Testing the neighbors, going from $23$ to $24$ members raises the count by $276 - 253 = 23$ and going from $25$ to $26$ raises it by $325 - 300 = 25$, so $25$ is the only membership that fits. (The choice $24$ REPORTS THE MEMBERSHIP BEFORE the newcomer joined ✗; $12$ HALVES THE RISE a second time, though the newcomer’s games were never double counted ✗; $300$ REPORTS THE WHOLE SCHEDULE AFTER the newcomer joins ✗.)',
    },
    {
      q: 'A convex $12$-gon is changed into a convex $14$-gon by adding two new vertices. How many more diagonals does the new polygon have than the old one?',
      choices: ['$25$', '$21$', '$131$', '$23$'],
      answer: 3,
      solution:
        'Route one, count both polygons and subtract. In an $m$-gon each vertex starts $m - 3$ diagonals and each diagonal is started from both of its ends, so the count is $\\frac{m(m-3)}{2}$. The $12$-gon has $\\frac{12 \\cdot 9}{2} = 54$ diagonals and the $14$-gon has $\\frac{14 \\cdot 11}{2} = 77$, so the new polygon has $77 - 54 = 23$ more ✓. Route two, add the vertices one at a time. Putting a vertex between two neighbors of an $m$-gon gives that vertex $m - 2$ diagonals of its own and turns the old side between its neighbors into a diagonal, a rise of $m - 1$. Going from $12$ sides to $13$ raises the count by $11$, and going from $13$ to $14$ raises it by $12$. Altogether the rise is $11 + 12 = 23$ ✓. (The choice $25$ USES $m$ RATHER THAN $m - 1$ AT EACH STEP, adding $12 + 13$ ✗; $21$ USES $m - 2$ AT EACH STEP, adding $10 + 11$ and forgetting the side that becomes a diagonal ✗; $131$ ADDS THE TWO DIAGONAL COUNTS instead of subtracting ✗.)',
    },
  ],
  // slot 9 — everyone has the same number of partners
  [
    {
      q: 'At a party of $14$ people, each person has shaken hands with exactly $5$ of the others, and no pair of people shook hands twice. How many handshakes have taken place?',
      choices: ['$70$', '$35$', '$91$', '$65$'],
      answer: 1,
      solution:
        'Route one, add up what each person reports and divide. Asking all $14$ people how many hands they shook gives $14 \\times 5 = 70$. Every handshake was reported by both of the people in it, exactly twice, so the number of handshakes is $\\frac{70}{2} = 35$ ✓. Route two, count the pairs who did not shake. Each person failed to shake with $14 - 1 - 5 = 8$ others, so asking everyone for that number gives $14 \\times 8 = 112$, and each non-shaking pair is reported by both of its people, so there are $\\frac{112}{2} = 56$ pairs who did not shake. All pairs of people number $\\frac{14 \\cdot 13}{2} = 91$, and every pair either shook or did not. So the handshakes number $91 - 56 = 35$ ✓. (The choice $70$ FORGETS THAT EACH HANDSHAKE APPEARS IN TWO PEOPLE’S COUNTS ✗; $91$ IS THE COUNT IF EVERYONE SHOOK EVERYONE’S HAND, ignoring the limit of $5$ ✗; $65$ USES $13$ PEOPLE instead of $14$ in the sum ✗.)',
    },
    {
      q: 'In a network of $18$ computers, each computer is joined by a direct cable to exactly $3$ of the others, and no two computers share more than one cable. How many cables are there?',
      choices: ['$54$', '$153$', '$51$', '$27$'],
      answer: 3,
      solution:
        'Route one, count cable ends. Each of the $18$ computers has $3$ cable ends plugged into it, so the network has $18 \\times 3 = 54$ cable ends in all. Every cable has exactly two ends, one at each of the computers it joins, so the number of cables is $\\frac{54}{2} = 27$ ✓. Route two, split the network in half. Put $9$ of the computers in group A and the other $9$ in group B. Write $x$ for the cables with both ends in A, $y$ for the cables with both ends in B, and $z$ for the cables running from A to B. Counting the $3$ cables at each A computer gives $9 \\times 3 = 27$, and in that count an A–A cable is met at both of its ends while an A–B cable is met at only one, so $2x + z = 27$. The same count inside B gives $2y + z = 27$. Adding the two equations, $2x + 2y + 2z = 54$, so the total number of cables is $x + y + z = 27$ ✓. (The choice $54$ REPORTS CABLE ENDS, not cables ✗; $153$ IS THE COUNT WITH A CABLE BETWEEN EVERY PAIR, ignoring the limit of $3$ ✗; $51$ USES $17$ COMPUTERS instead of $18$ IN THE COUNT OF CABLE ENDS, $17 \\times 3$ ✗.)',
    },
    {
      q: 'In a group of $21$ people, friendship is mutual, each person has exactly $k$ friends inside the group, and there are $63$ friendships in the group. What is $k$?',
      choices: ['$3$', '$126$', '$6$', '$63$'],
      answer: 2,
      solution:
        'Route one, add up the friend counts. Asking each of the $21$ people how many friends she has in the group gives $21k$. Because friendship is mutual, every friendship is reported by both people in it, so that sum is twice the number of friendships: $21k = 2 \\times 63 = 126$, giving $k = 6$ ✓. Route two, work through the non-friendships. All pairs of people number $\\frac{21 \\cdot 20}{2} = 210$, and each pair is either a friendship or not, so there are $210 - 63 = 147$ non-friendly pairs. Each person is a non-friend of $20 - k$ others, so summing that over the group gives $21(20-k)$, and each non-friendly pair is reported twice: $21(20-k) = 2 \\times 147 = 294$, so $20 - k = 14$ and $k = 6$ ✓. Both counts move steadily with $k$, so $6$ is the only value that fits. (The choice $3$ FORGETS THAT EACH FRIENDSHIP IS REPORTED BY BOTH FRIENDS, solving $21k = 63$ ✗; $126$ REPORTS THE SUM OF EVERYONE’S FRIEND COUNTS instead of one person’s ✗; $63$ TAKES THE NUMBER OF FRIENDSHIPS AS $k$ ✗.)',
    },
  ],
  // slot 10 — pairs of points, where collinear pairs collapse to one line
  [
    {
      q: 'Twelve points are marked in the plane. Exactly $5$ of them lie on one straight line, and no other three of the points are collinear. How many distinct straight lines pass through at least two of the points?',
      choices: ['$66$', '$56$', '$61$', '$57$'],
      answer: 3,
      solution:
        'Route one, count pairs and repair the overcount. Pretend each pair of points gave its own line: $12 \\times 11$ counts each pair from both points, so there are $\\frac{12 \\cdot 11}{2} = 66$ pairs. Every pair not drawn from the special five gives a line of its own, since no other three points are collinear. But the $5$ collinear points supply $\\frac{5 \\cdot 4}{2} = 10$ pairs that all name the same single line, so those $10$ should count as $1$: the answer is $66 - 10 + 1 = 57$ ✓. Route two, sort the lines by how they meet the special line. Call the $5$ collinear points special and the other $7$ loose. A line through two loose points cannot also pass through a special point, or three points would be collinear off the special line, so those lines number $\\frac{7 \\cdot 6}{2} = 21$ and each is counted once. A line through one loose point and one special point contains no second loose point and no second special point, for the same reason, so each such line comes from exactly one choice: $7 \\times 5 = 35$. Finally the special line itself is $1$ more. Every line through two marked points is of exactly one of these kinds, so the total is $21 + 35 + 1 = 57$ ✓. (The choice $66$ TREATS ALL $66$ PAIRS AS DIFFERENT LINES ✗; $56$ REMOVES THE $10$ PAIRS BUT NEVER ADDS THE SPECIAL LINE BACK ✗; $61$ REMOVES ONLY $5$ PAIRS, one per point on the special line ✗.)',
    },
    {
      q: 'Eleven points are marked in the plane: $4$ of them lie on one straight line, $3$ others lie on a second straight line, no point lies on both lines, and no other three of the points are collinear. How many distinct straight lines pass through at least two of the points?',
      choices: ['$55$', '$48$', '$46$', '$50$'],
      answer: 1,
      solution:
        'Route one, count pairs and repair each overcount. All pairs of the $11$ points number $\\frac{11 \\cdot 10}{2} = 55$, since $11 \\times 10$ counts each pair from both points. The $4$ points on the first line supply $\\frac{4 \\cdot 3}{2} = 6$ pairs that all name one line, so those $6$ must become $1$; the $3$ points on the second line supply $\\frac{3 \\cdot 2}{2} = 3$ pairs that name one line, so those $3$ must become $1$. Every other pair names a line of its own. The total is $55 - 6 + 1 - 3 + 1 = 48$ ✓. Route two, sort the lines by which groups their points come from. Four points sit on the first line, $3$ on the second, and the remaining $4$ are loose. Because no three points are collinear apart from those two groups, a line joining points from two different groups holds exactly one point from each, so such lines are counted once each: first-line point with second-line point, $4 \\times 3 = 12$; first-line point with loose point, $4 \\times 4 = 16$; second-line point with loose point, $3 \\times 4 = 12$. Lines through two loose points number $\\frac{4 \\cdot 3}{2} = 6$. Add the two special lines themselves, $2$ more. The total is $12 + 16 + 12 + 6 + 2 = 48$ ✓. (The choice $55$ IGNORES BOTH COLLINEAR GROUPS ✗; $46$ REMOVES THE $6$ AND THE $3$ PAIRS BUT ADDS NEITHER LINE BACK ✗; $50$ REPAIRS ONLY THE FOUR-POINT LINE and leaves the three-point line overcounted ✗.)',
    },
    {
      q: 'Some points are marked in the plane. Exactly $6$ of them lie on one straight line, and no other three of the points are collinear. The marked points determine exactly $91$ distinct straight lines, counting every line that passes through at least two of them. How many points are marked?',
      choices: ['$15$', '$14$', '$16$', '$105$'],
      answer: 0,
      solution:
        'Route one, count pairs and repair the overcount, then solve. With $n$ points there are $\\frac{n(n-1)}{2}$ pairs. All of them name different lines except the $\\frac{6 \\cdot 5}{2} = 15$ pairs drawn from the special six, which all name one line, so the line count is $\\frac{n(n-1)}{2} - 15 + 1 = 91$. That gives $\\frac{n(n-1)}{2} = 105$ and $n(n-1) = 210 = 15 \\times 14$, so $n = 15$ ✓. Route two, sort the lines by type and test. Write $m$ for the number of loose points, the ones off the special line. Lines through two loose points number $\\frac{m(m-1)}{2}$; lines through one loose point and one special point number $6m$, each counted once because such a line holds no second point of either kind; and the special line itself is $1$ more. At $m = 8$ the total is $28 + 48 + 1 = 77$; at $m = 9$ it is $36 + 54 + 1 = 91$ ✓; at $m = 10$ it is $45 + 60 + 1 = 106$. The total climbs with $m$, so $m = 9$ and the marked points number $9 + 6 = 15$. (The choice $14$ READS $91$ AS THE NUMBER OF PAIRS, since $\\frac{14 \\cdot 13}{2} = 91$, and ignores the collinear six ✗; $16$ OVERSHOOTS, since $16$ points with $6$ collinear determine $106$ lines ✗; $105$ TAKES THE NUMBER OF PAIRS AS THE NUMBER OF POINTS ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 3,
  sections: { '3.3': s33 },
}
