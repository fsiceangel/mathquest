// Counting chapter 6 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$84$'.
//  - Every key was brute-forced in node by enumerating the objects (multiset
//    arrangements, grid paths as point lists, integer tuples, digit strings,
//    subsets, permutations of labeled people around tables and in rows) before
//    the stem was written, and every key matches its pin. Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number; the most tempting wrong
//    answer’s trap is then named in CAPS, ending ✗.
//  - Conventions are settled in every stem: people, books, and cards are all
//    different unless the stem says identical; "row" means order matters;
//    round-table seatings that differ by a rotation are the same (said each
//    time); grid paths move one unit right or one unit up per step; open
//    circles in a figure are blocked corners, solid points must be visited.

// Street grid drawn to scale: w blocks wide, h blocks tall, corner A at the
// bottom-left and B at the top-right. `marks` are labeled corners a path must
// visit, `open` corners are drawn as open (blocked) circles, `hl` lists street
// segments drawn bold.
function grid(w, h, { marks = [], open = [], hl = [] } = {}) {
  const elems = []
  for (let x = 0; x <= w; x += 1) elems.push({ t: 'seg', a: [x, 0], b: [x, h] })
  for (let y = 0; y <= h; y += 1) elems.push({ t: 'seg', a: [0, y], b: [w, y] })
  for (const [a, b] of hl) elems.push({ t: 'seg', a, b, hl: true })
  for (const m of open) elems.push({ t: 'point', p: m.p, open: true, label: m.label, dx: m.dx ?? 7, dy: m.dy ?? -7 })
  for (const m of marks) elems.push({ t: 'point', p: m.p, label: m.label, dx: m.dx ?? 7, dy: m.dy ?? -7 })
  elems.push({ t: 'point', p: [0, 0], label: 'A', dx: -15, dy: 15 })
  elems.push({ t: 'point', p: [w, h], label: 'B', dx: 6, dy: -6 })
  return { view: [-0.7, -0.7, w + 0.7, h + 0.7], elems }
}

const fig2v2 = grid(4, 4, { marks: [{ p: [1, 1], label: '(1, 1)', dx: 10, dy: 16 }], hl: [[[2, 2], [3, 2]]] })
fig2v2.elems.push({ t: 'label', p: [2.5, 2], text: 'closed', dx: 0, dy: 16 })

const worksheet = [
  // slot 1 — multiset arrangements with adjacency rules, inclusion-exclusion.
  //          Lanes: TOMATO both pairs apart -> 84; 3R3B2W flags -> 380;
  //          derived: BALLOON O’s together, L’s apart -> 240.
  [
    {
      q: 'How many distinct arrangements of the letters of $TOMATO$ have neither the two $T$’s next to each other nor the two $O$’s next to each other?',
      answer: '$84$',
      solution:
        'Inclusion-exclusion. All arrangements: $\\frac{6!}{2!\\,2!} = 180$. Glue the $T$’s: $\\frac{5!}{2!} = 60$; glue the $O$’s: also $60$; glue both: $4! = 24$. Subtract each bad kind and add back the overlap: $180 - 60 - 60 + 24 = 84$ ✓. Second route, gaps first. Keep the $T$’s apart from the start: arrange $O, O, M, A$ in $\\frac{4!}{2!} = 12$ ways, then drop the two $T$’s into $2$ of the $5$ gaps around those letters, $\\binom{5}{2} = 10$, for $120$ arrangements with the $T$’s apart. Among these the $O$’s may still touch: glue them and repeat, $3! = 6$ arrangements of $[OO], M, A$ times $\\binom{4}{2} = 6$ gap choices, $36$. So $120 - 36 = 84$ ✓. STOPPING AT $180 - 60 - 60 = 60$ subtracts the arrangements with both pairs glued twice and never adds them back, giving $60$ ✗.',
    },
    {
      q: 'Three identical red flags, three identical blue flags, and two identical white flags are hung in a row. How many arrangements have no two white flags next to each other and the three red flags NOT all next to one another?',
      answer: '$380$',
      solution:
        'Inclusion-exclusion. All arrangements: $\\frac{8!}{3!\\,3!\\,2!} = 560$. Whites glued: $\\frac{7!}{3!\\,3!} = 140$. All three reds glued: $\\frac{6!}{3!\\,2!} = 60$. Both glued at once: $\\frac{5!}{3!} = 20$. So $560 - 140 - 60 + 20 = 380$ ✓. Second route, gaps first. Arrange the reds and blues: $\\frac{6!}{3!\\,3!} = 20$ ways, then place the two whites in different gaps, $\\binom{7}{2} = 21$, for $20 \\cdot 21 = 420$ arrangements with the whites apart. Remove those whose reds sit together: arrange $[RRR], B, B, B$ in $\\frac{4!}{3!} = 4$ ways, whites in $\\binom{5}{2} = 10$ gap pairs, $40$. So $420 - 40 = 380$ ✓. FORGETTING THE ADD-BACK, $560 - 140 - 60 = 360$, removes the arrangements with whites together AND reds together twice, giving $360$ ✗.',
    },
    {
      q: 'How many distinct arrangements of the letters of $BALLOON$ have the two $O$’s next to each other but the two $L$’s not next to each other?',
      answer: '$240$',
      solution:
        'Glue and subtract. With the $O$’s glued into one block, the six units $B, A, L, L, [OO], N$ arrange in $\\frac{6!}{2!} = 360$ ways. Among these, the $L$’s together means gluing them too: $5! = 120$. So $360 - 120 = 240$ ✓. Second route, gaps. Glue the $O$’s and arrange the four units $B, A, [OO], N$: $4! = 24$ ways. These create $5$ gaps, and putting the two $L$’s into two different gaps keeps them apart: $\\binom{5}{2} = 10$. Multiply: $24 \\cdot 10 = 240$ ✓. TREATING THE GLUED $O$’S AS TWO DIFFERENT LETTERS multiplies everything by an extra $2$ even though swapping identical $O$’s changes nothing, giving $480$ ✗.',
    },
  ],
  // slot 2 — grid paths: a required point plus blocked corners or a closed street.
  //          Lanes: 6x4 through (2,1) avoiding (3,3),(5,2) -> 33; 4x4 through
  //          (1,1) with the street (2,2)-(3,2) closed -> 28; derived: 5x5 avoid
  //          (2,2),(3,3), through (3,1) or (1,3) -> 72.
  [
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (6, 4)$ on the grid shown, one step right or one step up at a time. The path must pass through the solid point $(2, 1)$, and the two open points are blocked. How many paths are possible?',
      fig: grid(6, 4, {
        marks: [{ p: [2, 1], label: '(2, 1)', dx: 10, dy: 16 }],
        open: [{ p: [3, 3], label: '(3, 3)', dx: -28, dy: -6 }, { p: [5, 2], label: '(5, 2)', dx: 10, dy: 16 }],
      }),
      answer: '$33$',
      solution:
        'Split at the required point. From $A$ to $(2, 1)$: $\\binom{3}{1} = 3$ paths, none of which can reach either blocked point. From $(2, 1)$ to $B$ there are $\\binom{7}{3} = 35$ paths; through $(3, 3)$: $\\binom{3}{2} \\cdot \\binom{4}{1} = 12$; through $(5, 2)$: $\\binom{4}{1} \\cdot \\binom{3}{1} = 12$; no path visits both, since $(5, 2)$ is below and to the right of $(3, 3)$. Good second legs: $35 - 12 - 12 = 11$, so $3 \\cdot 11 = 33$ ✓. Second route, corner by corner. Starting from $(2, 1)$ with a $1$, write at each corner the sum of the counts to its left and below, entering $0$ at each blocked corner: the row $y = 1$ reads $1, 1, 1, 1, 1$ out to $x = 6$; the row $y = 2$ builds $1, 2, 3$, then $0$ at the blocked $(5, 2)$ and $1$ at $(6, 2)$; the row $y = 3$ reads $1, 0, 3, 3, 4$ with its $0$ at $(3, 3)$; and the top row finishes $1, 1, 4, 7, 11$, so $11$ at $B$. The three first legs $RRU$, $RUR$, $URR$ each pair with all $11$: $33$ ✓. SUBTRACTING THE BAD SECOND LEGS ONLY ONCE, $3 \\cdot 35 - 12 - 12 = 81$, forgets that every bad second leg pairs with all $3$ first legs, giving $81$ ✗.',
    },
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (4, 4)$ on the grid shown, one step right or one step up at a time. The path must pass through the solid point $(1, 1)$, and the bold street segment from $(2, 2)$ to $(3, 2)$ is closed: a path may not travel along it, though it may touch either endpoint. How many paths are possible?',
      fig: fig2v2,
      answer: '$28$',
      solution:
        'Split at the required point. From $A$ to $(1, 1)$: $2$ paths ($RU$ and $UR$). From $(1, 1)$ to $B$: $\\binom{6}{3} = 20$ paths in all. A path uses the closed street exactly when it reaches $(2, 2)$ and then steps right: $(1, 1)$ to $(2, 2)$ in $2$ ways, across the closed street, then $(3, 2)$ to $B$ in $\\binom{3}{1} = 3$ ways, so $2 \\cdot 3 = 6$ bad second legs. Good: $20 - 6 = 14$, and $2 \\cdot 14 = 28$ ✓. Second route, corner by corner. From $(1, 1)$ write a $1$ and add left-plus-below at each corner, except that $(3, 2)$ may not receive the count from $(2, 2)$: the corner $(3, 2)$ gets only the $1$ from below, then the top row builds to $14$ at $B$. Each of the $2$ first legs pairs with all $14$: $28$ ✓. BLOCKING THE CORNER $(2, 2)$ ITSELF instead of just the street removes legal paths that pass through $(2, 2)$ and then go up, leaving $20 - 2 \\cdot \\binom{4}{2} = 8$ second legs and giving $16$ ✗.',
    },
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (5, 5)$ on the grid shown, one step right or one step up at a time. The two open points are blocked. How many paths avoid both blocked points and pass through at least one of the solid points $(3, 1)$ and $(1, 3)$?',
      fig: grid(5, 5, {
        marks: [{ p: [3, 1], label: '(3, 1)', dx: 10, dy: 16 }, { p: [1, 3], label: '(1, 3)', dx: -28, dy: -6 }],
        open: [{ p: [2, 2], label: '(2, 2)', dx: 10, dy: 16 }, { p: [3, 3], label: '(3, 3)', dx: 12, dy: -6 }],
      }),
      answer: '$72$',
      solution:
        'No path visits both solid points: from $(3, 1)$ the corner $(1, 3)$ is up and to the LEFT, so the two cases just add. Through $(3, 1)$: $\\binom{4}{1} = 4$ first legs, none touching a blocked point; second legs $\\binom{6}{2} = 15$, minus those through $(3, 3)$, which is $1 \\cdot \\binom{4}{2} = 6$ (the corner $(2, 2)$ is unreachable from $(3, 1)$), so $4 \\cdot 9 = 36$. The reflection across the diagonal swaps $(3, 1)$ with $(1, 3)$ and keeps both blocked points fixed, so the $(1, 3)$ case is another $36$: total $72$ ✓. Second route, complement inside the legal paths. Paths avoiding both blocked points: $\\binom{10}{5} - 120 - 120 + 72 = 84$, since $\\binom{4}{2}\\binom{6}{3} = 120$ pass through each blocked point and $\\binom{4}{2} \\cdot 2 \\cdot \\binom{4}{2} = 72$ pass through both. Legal paths that miss BOTH solid points must cross the line $x + y = 4$ at $(4, 0)$, $(0, 4)$, or off-limits corners; a corner count with zeros at all four marked points gives $12$ such paths. So $84 - 12 = 72$ ✓. FORGETTING THAT $(3, 3)$ STILL BLOCKS the second leg counts $4 \\cdot 15 = 60$ per solid point, giving $120$ ✗.',
    },
  ],
  // slot 3 — restricted integer sums: casework or stars and bars with repairs.
  //          Lanes: triples sum 20, distinct, each at most 9 -> 24; pairs with
  //          a+b <= 15, a != b -> 98; derived: 3-sets summing to 15 -> 12.
  [
    {
      q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $a + b + c = 20$ with $a$, $b$, and $c$ all different and each at most $9$?',
      answer: '$24$',
      solution:
        'List the sets. The largest entry is at most $9$ and the three sum to $20$, so the largest is at least $7$; checking largest $= 9$: $\\{3, 8, 9\\}, \\{4, 7, 9\\}, \\{5, 6, 9\\}$; largest $= 8$: $\\{5, 7, 8\\}$; largest $= 7$: the other two would sum to $13$ with both below $7$, impossible. Four sets, each arranging in $3! = 6$ orders: $4 \\cdot 6 = 24$ ✓. Second route, a mirror. Replace each entry by $10$ minus itself: $(a, b, c) \\mapsto (10-a, 10-b, 10-c)$ is a perfect matching between our triples and the ordered triples of DIFFERENT integers from $1$ to $9$ summing to $30 - 20 = 10$. Sets summing to $10$: $\\{1, 2, 7\\}, \\{1, 3, 6\\}, \\{1, 4, 5\\}, \\{2, 3, 5\\}$ — four sets, so $4 \\cdot 6 = 24$ again ✓. DROPPING THE ALL-DIFFERENT CONDITION and running stars and bars with the cap, $\\binom{19}{2} - 3\\binom{10}{2} = 36$, quietly counts triples like $(2, 9, 9)$, giving $36$ ✗.',
    },
    {
      q: 'How many ordered pairs of positive integers $(a, b)$ satisfy $a + b \\le 15$ with $a \\ne b$?',
      answer: '$98$',
      solution:
        'Count all, remove the ties. For each sum $s$ from $2$ to $15$ there are $s - 1$ ordered pairs of positive integers, so $1 + 2 + \\cdots + 14 = 105$ pairs in all. Ties have $2a \\le 15$, so $a = 1$ through $7$: seven ties. That leaves $105 - 7 = 98$ ✓. Second route, halve the smaller side. Count the pairs with $a < b$ directly: for each $b$ from $2$ to $14$, the entry $a$ runs from $1$ up to the smaller of $b - 1$ and $15 - b$, giving $1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1$ as $b$ goes $2, 3, \\ldots, 14$ — a sum of $49$. Every pair with $a \\ne b$ is one of these or its reverse, so double: $98$ ✓. FORGETTING $a \\ne b$ keeps the seven doubles like $(4, 4)$ and reports the full $105$ ✗.',
    },
    {
      q: 'How many sets $\\{a, b, c\\}$ of three DIFFERENT positive integers have $a + b + c = 15$?',
      answer: '$12$',
      solution:
        'Casework on the smallest entry. Smallest $1$: the other two sum to $14$ with $1 < b < c$, so $b = 2, 3, 4, 5, 6$: five sets. Smallest $2$: $b + c = 13$, $2 < b < c$, so $b = 3, 4, 5, 6$: four. Smallest $3$: $b + c = 12$, $b = 4, 5$: two. Smallest $4$: $b + c = 11$, $b = 5$: one. Total $5 + 4 + 2 + 1 = 12$ ✓. Second route, order and divide. Ordered triples of positive integers summing to $15$: $\\binom{14}{2} = 91$. All three equal: just $(5, 5, 5)$. Exactly two equal: the pair value $k$ gives the third entry $15 - 2k \\ge 1$ and $\\ne k$, so $k = 1, 2, 3, 4, 6, 7$ — six values, each with $3$ positions for the odd one out, $18$ triples. All-different ordered triples: $91 - 1 - 18 = 72$, and each set is counted $3! = 6$ times: $72 / 6 = 12$ ✓. DIVIDING ALL $91$ ORDERED TRIPLES BY $3!$ treats $(5, 5, 5)$ and the $18$ two-equal triples as if they too came in packs of six; rounding the resulting $91/6$ down gives $15$ ✗.',
    },
  ],
  // slot 4 — digit/dice products: list the multisets, watch the repeats.
  //          Lanes: four-digit product 36 -> 72; three dice product 12 -> 15;
  //          derived: five-digit product 12 -> 70.
  [
    {
      q: 'How many four-digit positive integers have digits whose product is $36$?',
      answer: '$72$',
      solution:
        'List the digit sets. No digit is $0$, and every digit divides $36$, so the sets of four digits from $1$–$9$ with product $36$ are $\\{1, 1, 4, 9\\}$, $\\{1, 2, 2, 9\\}$, $\\{1, 3, 3, 4\\}$, $\\{1, 2, 3, 6\\}$, $\\{1, 1, 6, 6\\}$, and $\\{2, 2, 3, 3\\}$. The first three each have one repeated pair, $\\frac{4!}{2!} = 12$ arrangements; $\\{1, 2, 3, 6\\}$ gives $4! = 24$; the last two each have two repeated pairs, $\\frac{4!}{2!\\,2!} = 6$. Total $12 + 12 + 12 + 24 + 6 + 6 = 72$ ✓. Second route, hand out prime factors. Since $36 = 2 \\cdot 2 \\cdot 3 \\cdot 3$, give the two $2$’s to the four positions (both to one position, $4$ ways, or one each to two positions, $\\binom{4}{2} = 6$ ways) and the two $3$’s likewise ($4$ or $6$ ways); untouched positions hold $1$. An assignment fails only when one position collects more than a single digit can hold: both $2$’s plus a $3$ (a “digit” $12$ or $36$) or a $2$ plus both $3$’s (an $18$). Both-$2$’s with both-$3$’s: $4 \\cdot 4 - 4 = 12$ valid; both-$2$’s with split $3$’s: $4 \\cdot 6 - 12 = 12$; split $2$’s with both-$3$’s: $6 \\cdot 4 - 12 = 12$; split with split: all $6 \\cdot 6 = 36$ valid, a shared position holding $6$. Total $12 + 12 + 12 + 36 = 72$ ✓. MISSING THE DOUBLE-PAIR SETS $\\{1, 1, 6, 6\\}$ and $\\{2, 2, 3, 3\\}$ leaves $12 + 12 + 12 + 24 = 60$ ✗.',
    },
    {
      q: 'Three standard dice, one red, one blue, and one green, are rolled. How many of the $216$ possible outcomes have the three rolls multiplying to $12$?',
      answer: '$15$',
      solution:
        'List the roll sets. Sets of three values from $1$–$6$ with product $12$: $\\{1, 2, 6\\}$ and $\\{1, 3, 4\\}$, each spreading over the three colored dice in $3! = 6$ ways, and $\\{2, 2, 3\\}$, which has a repeat and gives $\\frac{3!}{2!} = 3$ outcomes. Total $6 + 6 + 3 = 15$ ✓. Second route, casework on the red die. Red $1$: blue times green is $12$, so $(2, 6), (6, 2), (3, 4), (4, 3)$ — $4$ outcomes. Red $2$: product $6$: $(1, 6), (6, 1), (2, 3), (3, 2)$ — $4$. Red $3$: product $4$: $(1, 4), (4, 1), (2, 2)$ — $3$. Red $4$: product $3$: $(1, 3), (3, 1)$ — $2$. Red $5$: nothing, since $5$ does not divide $12$ — $0$. Red $6$: product $2$: $(1, 2), (2, 1)$ — $2$. Total $4 + 4 + 3 + 2 + 0 + 2 = 15$ ✓. GIVING $\\{2, 2, 3\\}$ ALL SIX ORDERS ignores that the two $2$’s are the same value on different dice already counted, counting each such outcome twice for $18$ ✗.',
    },
    {
      q: 'How many five-digit positive integers have digits whose product is $12$?',
      answer: '$70$',
      solution:
        'List the digit sets. No digit is $0$, and the product is so small that at least two digits are $1$. The sets are $\\{1, 1, 1, 2, 6\\}$ and $\\{1, 1, 1, 3, 4\\}$, each with $\\frac{5!}{3!} = 20$ arrangements, and $\\{1, 1, 2, 2, 3\\}$, with $\\frac{5!}{2!\\,2!} = 30$. Total $20 + 20 + 30 = 70$ ✓. Second route, casework on how many $1$’s. Three $1$’s: the other two digits multiply to $12$ using digits bigger than $1$: $\\{2, 6\\}$ or $\\{3, 4\\}$; place the two special digits in order, $5 \\cdot 4 = 20$ each, for $40$. Two $1$’s: three digits bigger than $1$ with product $12$: only $\\{2, 2, 3\\}$; choose the $3$’s position, $5$ ways, then the two $2$ positions among the remaining four, $\\binom{4}{2} = 6$: $30$. Four $1$’s would force a fifth digit of $12$ — impossible. Total $40 + 30 = 70$ ✓. ALLOWING A “DIGIT” $12$ sneaks in the five arrangements of $\\{1, 1, 1, 1, 12\\}$, giving $75$ ✗.',
    },
  ],
  // slot 5 — round tables: fix a seat, then spread people out.
  //          Lanes: 8 seats, A,B,C spread, Dee beside Ana -> 576; 11 chairs,
  //          4 sitters all separated -> 120; derived: spread ABCD with Ana
  //          opposite Ben -> 48.
  [
    {
      q: 'Eight people, including Ana, Ben, Cal, and Dee, sit around a round table with eight seats; seatings that differ by a rotation are the same. No two of Ana, Ben, and Cal sit next to each other, and Dee sits next to Ana. How many seatings are possible?',
      answer: '$576$',
      solution:
        'Fix Ana’s seat to remove rotations. Dee takes one of the $2$ seats beside her. Ben and Cal must avoid both seats beside Ana, leaving the $5$ seats across from her, which form a row; choosing two of those with none adjacent gives $\\binom{5}{2} - 4 = 6$ seat pairs, times $2$ for who sits where, is $12$. The remaining four people fill the last four seats in $4! = 24$ ways. Total $2 \\cdot 12 \\cdot 24 = 576$ ✓. Second route, spread first and use symmetry. Seatings with no two of Ana, Ben, Cal adjacent: fix Ana, put Ben and Cal across from her in $12$ ways as above, and let the other FIVE people fill the remaining five seats freely: $12 \\cdot 5! = 1440$. The two seats beside Ana are among those five, and each of the five people is equally likely to hold either one, so Dee sits beside Ana in $\\frac{2}{5}$ of these: $1440 \\cdot \\frac{2}{5} = 576$ ✓. DROPPING THE BEN–CAL CONDITION lets them take any two of the five far seats, $2 \\cdot (5 \\cdot 4) \\cdot 24 = 960$ ✗.',
    },
    {
      q: 'A round table has $11$ chairs. Ana, Ben, Cal, and Dee sit down and the other seven chairs stay empty; seatings that differ by a rotation are the same. In how many seatings does no person sit next to another person?',
      answer: '$120$',
      solution:
        'Fix Ana’s chair to remove rotations. Her two neighboring chairs must stay empty, so Ben, Cal, and Dee choose chairs from the remaining $8$, which form a row, with no two chosen chairs adjacent: by the shift bijection that is $\\binom{6}{3} = 20$ chair sets, and the three people take them in $3! = 6$ orders. Total $20 \\cdot 6 = 120$ ✓. Second route, count chair sets around the circle. The number of ways to choose $4$ of $11$ chairs in a circle with no two adjacent is $\\frac{11}{7}\\binom{7}{4} = 55$; seat the four people on a chosen set in $4! = 24$ ways, giving $55 \\cdot 24 = 1320$ seatings of labeled chairs. Since $11$ is prime and the chairs are not all alike in use, no seating survives a nontrivial rotation, so the $1320$ split into orbits of $11$: $1320 / 11 = 120$ ✓. LETTING BEN, CAL, AND DEE SIT FREELY in the row of $8$, only avoiding Ana’s neighbors, gives $\\binom{8}{3} \\cdot 6 = 336$ ✗.',
    },
    {
      q: 'Eight people, including Ana, Ben, Cal, and Dee, sit around a round table with eight seats; seatings that differ by a rotation are the same. No two of Ana, Ben, Cal, and Dee sit next to each other, and Ana sits directly opposite Ben. How many seatings are possible?',
      answer: '$48$',
      solution:
        'Fix Ana’s seat; Ben’s seat is forced, directly opposite. The two seats beside Ana and the two beside Ben are all off-limits to Cal and Dee, which leaves exactly the two seats halfway between them, one on each side of the table — and those two are not adjacent to each other. Cal and Dee take them in $2$ ways, and the other four people fill the remaining four seats in $4! = 24$ ways: $2 \\cdot 24 = 48$ ✓. Second route, spread first. Four people in eight round seats with no two adjacent must take every other seat: the four gaps between them hold one empty seat each. Fix Ana; Ben, Cal, and Dee take the seats at distances $2$, $4$, and $6$ around from her in $3! = 6$ orders, and the rest sit in $4! = 24$ ways: $144$ spread-out seatings. Ben holds the distance-$4$ seat — the one opposite Ana — in $2$ of the $6$ orders, a third of the time, so $144 / 3 = 48$ ✓. NEVER ENFORCING THE OPPOSITE CONDITION counts all $144$ spread-out seatings ✗.',
    },
  ],
  // slot 6 — subsets filtered by an arithmetic property of sum or product.
  //          Lanes: 4-subsets of 1..10 with odd sum -> 100; 3 cards with
  //          product a multiple of 4 -> 80; derived: 3-subsets of 1..12 with
  //          sum a multiple of 3 -> 76.
  [
    {
      q: 'How many $4$-element subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an odd sum?',
      answer: '$100$',
      solution:
        'Casework on the odd entries. The set has $5$ odd and $5$ even numbers, and a sum of four numbers is odd exactly when the subset holds an odd number of odd entries: one or three. One odd: $\\binom{5}{1}\\binom{5}{3} = 50$. Three odd: $\\binom{5}{3}\\binom{5}{1} = 50$. Total $100$ ✓. Second route, complement. Even-sum subsets hold zero, two, or four odd entries: $\\binom{5}{4} + \\binom{5}{2}\\binom{5}{2} + \\binom{5}{4} = 5 + 100 + 5 = 110$, and there are $\\binom{10}{4} = 210$ subsets in all, so $210 - 110 = 100$ have an odd sum ✓. ASSUMING ODD AND EVEN SUMS SPLIT EVENLY halves $210$; the split leans even because the all-even and all-odd subsets both land on the even side, and the guess gives $105$ ✗.',
    },
    {
      q: 'Three different cards are drawn together from ten cards numbered $1$ through $10$. How many of the $\\binom{10}{3} = 120$ possible draws have a product that is a multiple of $4$?',
      answer: '$80$',
      solution:
        'Complement. The product misses being a multiple of $4$ when the draw has no even card at all, $\\binom{5}{3} = 10$ ways, or exactly one even card carrying a single factor of $2$ — that card is $2$, $6$, or $10$, joined by two odd cards: $3 \\cdot \\binom{5}{2} = 30$. So $120 - 10 - 30 = 80$ ✓. Second route, direct casework. Draws containing $4$ or $8$: $120 - \\binom{8}{3} = 64$, and each already carries a factor of $4$. Draws avoiding both $4$ and $8$ need two factors of $2$ from $\\{2, 6, 10\\}$: two of those three plus any odd card, $\\binom{3}{2} \\cdot 5 = 15$, or all three of them, $1$ more. Total $64 + 15 + 1 = 80$ ✓. COUNTING ONLY THE DRAWS WITH A $4$ OR AN $8$ forgets that two cards like $2$ and $6$ also build a multiple of $4$ together, giving $64$ ✗.',
    },
    {
      q: 'How many $3$-element subsets of $\\{1, 2, 3, \\ldots, 12\\}$ have a sum that is a multiple of $3$?',
      answer: '$76$',
      solution:
        'Sort by remainders. Dividing by $3$ splits $\\{1, \\ldots, 12\\}$ into three groups of four: remainders $0$, $1$, and $2$. A triple sums to a multiple of $3$ exactly when all three share a remainder or all three remainders differ. Same remainder: $3 \\cdot \\binom{4}{3} = 12$. One of each: $4 \\cdot 4 \\cdot 4 = 64$. Total $12 + 64 = 76$ ✓. Second route, complement. A bad triple has exactly two entries sharing a remainder: pick the doubled remainder and the different lone one, $3 \\cdot 2 = 6$ patterns, and twice-plus-once never lands on a multiple of $3$ when the two remainders differ, so every such triple really is bad: $6 \\cdot \\binom{4}{2}\\binom{4}{1} = 144$. From $\\binom{12}{3} = 220$: $220 - 144 = 76$ ✓. COUNTING ONLY THE ONE-OF-EACH TRIPLES forgets sets like $\\{3, 6, 9\\}$ whose entries all share a remainder, giving $64$ ✗.',
    },
  ],
  // slot 7 — block unions: glue, then track the union or the exactly-one event.
  //          Lanes: 3 mysteries + 3 cookbooks union -> 216; twins or the three
  //          Lees -> 1872; derived: exactly one block of 4 math + 3 novels -> 720.
  [
    {
      q: 'Three different mystery novels and three different cookbooks are arranged in a row on a shelf. In how many arrangements are the three mysteries all together, or the three cookbooks all together, or both?',
      answer: '$216$',
      solution:
        'Inclusion-exclusion. Mysteries together: glue them into a block and arrange it with the three cookbooks, $4! \\cdot 3! = 144$. Cookbooks together: also $144$. Both together: two blocks, $2! \\cdot 3! \\cdot 3! = 72$, counted inside each $144$. Union: $144 + 144 - 72 = 216$ ✓. Second route, count shelf patterns. Which positions hold mysteries is a choice of $3$ spots from $6$: $\\binom{6}{3} = 20$ patterns. Patterns with the three mystery spots consecutive: $4$; with the three cookbook spots consecutive: $4$; with both: $2$, each type filling a half. Union of patterns: $4 + 4 - 2 = 6$, and each pattern is filled with actual titles in $3! \\cdot 3! = 36$ ways: $6 \\cdot 36 = 216$ ✓. ADDING $144 + 144 = 288$ counts every both-blocks arrangement twice ✗.',
    },
    {
      q: 'Seven children stand in a row for a photo: the two Kim twins, the three Lee siblings, and two others, all seven different people. In how many arrangements are the two twins next to each other, or the three Lees all together, or both?',
      answer: '$1872$',
      solution:
        'Inclusion-exclusion. Twins glued: $6! \\cdot 2 = 1440$. Lees glued: $5! \\cdot 3! = 720$. Both glued: the two blocks and the two others make four units, $4! \\cdot 2 \\cdot 3! = 288$. Union: $1440 + 720 - 288 = 1872$ ✓. Second route, count row patterns. Mark each position K, L, or O: $\\binom{7}{2}\\binom{5}{3} = 210$ patterns. Twin spots adjacent: the K-block sits in $6$ places and the Lees pick from the rest, $6 \\cdot \\binom{5}{3} = 60$. Lee spots consecutive: $5 \\cdot \\binom{4}{2} = 30$. Both: the two blocks and two O’s in a row of four units, $\\frac{4!}{2!} = 12$ patterns. Union: $60 + 30 - 12 = 78$ patterns, each filled by the actual children in $2! \\cdot 3! \\cdot 2! = 24$ ways: $78 \\cdot 24 = 1872$ ✓. SKIPPING THE SUBTRACTION, $1440 + 720 = 2160$, double-counts every photo with both families bunched ✗.',
    },
    {
      q: 'Four different math books and three different novels are arranged in a row on a shelf. In how many arrangements is EXACTLY one of the following true: the three novels are all together; the four math books are all together?',
      answer: '$720$',
      solution:
        'Subtract the overlap from each side. Novels together: $5! \\cdot 3! = 720$. Math together: $4! \\cdot 4! = 576$. Both: $2! \\cdot 4! \\cdot 3! = 288$. Novels-only: $720 - 288 = 432$; math-only: $576 - 288 = 288$. Exactly one: $432 + 288 = 720$ ✓. Second route, count shelf patterns. Choose the three novel positions: $\\binom{7}{3} = 35$ patterns. Novel spots consecutive: $5$ patterns; math spots consecutive: $4$; both at once: $2$. Exactly one: $(5 - 2) + (4 - 2) = 5$ patterns, each filled with titles in $3! \\cdot 4! = 144$ ways: $5 \\cdot 144 = 720$ ✓. COMPUTING THE “OR” INSTEAD, $720 + 576 - 288 = 1008$, keeps the arrangements where both groups sit together, which the word EXACTLY throws out ✗.',
    },
  ],
  // slot 8 — non-adjacent placements in a row with pinned ends.
  //          Lanes: 10 flips, 4 spread heads, tails at both ends -> 5; 3 cars
  //          in 11 spaces, last space empty -> 56; derived: no two heads,
  //          heads first, any count -> 21.
  [
    {
      q: 'A coin is flipped $10$ times. How many sequences of heads and tails have exactly $4$ heads, no two heads on consecutive flips, and tails on both the first flip and the last flip?',
      answer: '$5$',
      solution:
        'Shrink to the middle. Flips $1$ and $10$ are tails, so flips $2$ through $9$ — eight flips — must hold exactly $4$ heads with no two adjacent. By the shift bijection (subtract $0, 1, 2, 3$ from the head positions in order), such choices match $4$-subsets of a $5$-element set: $\\binom{5}{4} = 5$ ✓. Second route, list them. With positions numbered $2$–$9$, four spread-out heads squeeze into $\\{2, 4, 6, 8\\}$, $\\{2, 4, 6, 9\\}$, $\\{2, 4, 7, 9\\}$, $\\{2, 5, 7, 9\\}$, or $\\{3, 5, 7, 9\\}$ — the leftmost head has almost no room, and sliding one head right at a time produces exactly these five ✓. RUNNING THE GAP COUNT ON ALL TEN FLIPS, $\\binom{7}{4} = 35$, ignores the forced tails at the two ends ✗.',
    },
    {
      q: 'A parking row has $11$ spaces in a line. Three identical cars park so that no two cars are in adjacent spaces and space $11$ stays empty. How many arrangements are possible?',
      answer: '$56$',
      solution:
        'Shrink the row. Space $11$ is empty, so the cars pick $3$ of spaces $1$–$10$ with no two adjacent. The shift bijection (subtract $0, 1, 2$ from the chosen spaces in increasing order) matches these choices with plain $3$-subsets of $8$ spaces: $\\binom{8}{3} = 56$ ✓. Second route, stars and bars on the empty spaces. Spaces $1$–$10$ hold $3$ cars and $7$ empties; write the empties as four runs — before the first car, between cars (two runs, each at least $1$), and after the last car. Solutions of $e_0 + e_1 + e_2 + e_3 = 7$ with $e_1, e_2 \\ge 1$: set aside one empty for each middle run, leaving $e_0 + f_1 + f_2 + e_3 = 5$ in whole numbers with no restrictions, $\\binom{8}{3} = 56$ ✓. FORGETTING THAT SPACE $11$ MUST STAY EMPTY runs the count on all eleven spaces and gives $\\binom{9}{3} = 84$ ✗.',
    },
    {
      q: 'A coin is flipped $8$ times. How many sequences of heads and tails have no two heads on consecutive flips and heads on the very first flip?',
      answer: '$21$',
      solution:
        'Casework on the number of heads. Flip $1$ is heads, so flip $2$ is tails, and flips $3$–$8$ are six flips with no two consecutive heads. Zero heads there: $1$ way. One head: $6$. Two heads: place them in the six flips with a gap, $\\binom{5}{2} = 10$. Three heads: $\\binom{4}{3} = 4$. Four heads cannot fit in six flips without touching. Total $1 + 6 + 10 + 4 = 21$ ✓. Second route, build up flip by flip. Let $a_n$ count the no-two-heads sequences of length $n$: a sequence ends in T (append T to any shorter one) or in TH (append to one two shorter), so $a_n = a_{n-1} + a_{n-2}$ with $a_1 = 2$, $a_2 = 3$: the list runs $2, 3, 5, 8, 13, 21$, and flips $3$–$8$ form exactly such a length-$6$ sequence: $21$ ✓. TREATING FLIPS $2$–$8$ AS FREE, forgetting that flip $2$ sits next to the opening head and must be tails, counts the no-two-heads sequences of length $7$ and gives $34$ ✗.',
    },
  ],
  // slot 9 — rectangles in a grid located by choosing boundary lines.
  //          Lanes: contain two diagonal unit squares -> 16; strictly enclose
  //          a grid point -> 24; derived: non-square containers -> 26.
  [
    {
      q: 'A $5 \\times 5$ grid of unit squares has its bottom-left corner at $(0, 0)$ and its top-right corner at $(5, 5)$. How many rectangles with sides along the grid lines contain BOTH the unit square with opposite corners $(1, 1), (2, 2)$ and the unit square with opposite corners $(3, 3), (4, 4)$?',
      answer: '$16$',
      solution:
        'Choose the four boundary lines. Containing the first square needs the left line at $x \\le 1$ and the right at $x \\ge 2$; containing the second needs left $\\le 3$ and right $\\ge 4$. Both at once: left line $x = 0$ or $1$ ($2$ choices), right line $x = 4$ or $5$ ($2$ choices), and the same for bottom and top: $2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$ ✓. Second route, contain one, subtract the misses. Rectangles containing the first unit square: $2 \\cdot 4 \\cdot 2 \\cdot 4 = 64$. Of these, the ones MISSING the second square have their right line at $x \\le 3$ or their top line at $y \\le 3$: $2 \\cdot 2 \\cdot 2 \\cdot 4 = 32$ with a short right side, $32$ with a short top, and $2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$ with both. So $64 - (32 + 32 - 16) = 16$ ✓. COMPUTING THE UNION of the two containment counts, $64 + 64 - 16 = 112$, answers “contains at least one of the squares,” not both ✗.',
    },
    {
      q: 'A $5 \\times 4$ grid of unit squares ($5$ wide, $4$ tall) has its bottom-left corner at $(0, 0)$ and its top-right corner at $(5, 4)$. How many rectangles with sides along the grid lines contain the grid point $(2, 2)$ strictly inside them, not on the boundary?',
      answer: '$24$',
      solution:
        'Choose the four boundary lines. Strictly inside means the left line is at $x < 2$, the right at $x > 2$, the bottom at $y < 2$, and the top at $y > 2$: left $\\in \\{0, 1\\}$, right $\\in \\{3, 4, 5\\}$, bottom $\\in \\{0, 1\\}$, top $\\in \\{3, 4\\}$, so $2 \\cdot 3 \\cdot 2 \\cdot 2 = 24$ ✓. Second route, list the spans. The horizontal span $[l, r]$ must jump across $x = 2$: $[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5]$ — six spans. The vertical span must jump across $y = 2$: $[0, 3], [0, 4], [1, 3], [1, 4]$ — four spans. Any horizontal span pairs with any vertical one: $6 \\cdot 4 = 24$ ✓. LETTING THE POINT SIT ON THE BOUNDARY relaxes every inequality: $(3 \\cdot 4 - 1)(3 \\cdot 3 - 1) = 88$ rectangles merely touch or contain the point, not strictly, giving $88$ ✗.',
    },
    {
      q: 'A $4 \\times 4$ grid of unit squares has its bottom-left corner at $(0, 0)$ and its top-right corner at $(4, 4)$. How many rectangles with sides along the grid lines are NOT squares and contain the entire unit square with opposite corners $(1, 1)$ and $(2, 2)$?',
      answer: '$26$',
      solution:
        'Count all containers, subtract the square ones. Containers need left $\\le 1$, right $\\ge 2$, bottom $\\le 1$, top $\\ge 2$: $2 \\cdot 3 \\cdot 2 \\cdot 3 = 36$. Square containers by side length: side $1$ is the unit square itself, $1$; side $2$: the left line is $x = 0$ or $1$ and the square then reaches across, $2 \\cdot 2 = 4$; side $3$: $2 \\cdot 2 = 4$ again since both placements of $[l, l+3]$ cover $[1, 2]$; side $4$: the whole grid, $1$. That is $1 + 4 + 4 + 1 = 10$ squares, so $36 - 10 = 26$ non-squares ✓. Second route, tally by width and height. The number of horizontal spans of width $w$ covering $[1, 2]$ is $1, 2, 2, 1$ for $w = 1, 2, 3, 4$, and the same list works vertically. Non-square containers pair different width and height: the full pairing table sums to $(1 + 2 + 2 + 1)^2 = 36$, and its diagonal — equal width and height — sums to $1^2 + 2^2 + 2^2 + 1^2 = 10$, leaving $26$ ✓. SUBTRACTING ONLY THE UNIT SQUARE ITSELF forgets the nine larger squares that also contain it, giving $35$ ✗.',
    },
  ],
  // slot 10 — rows with a pinned seat, a glued pair, and a separated pair.
  //          Lanes: Fay in the middle of 7 -> 128; Kai at the right end of
  //          7 -> 192; derived: Eli at an end of 8, kept clear of the glued
  //          pair -> 1632.
  [
    {
      q: 'Seven people, including Ana, Ben, Cal, Dee, and Fay, sit in a row of $7$ chairs. Fay sits in the middle chair, Cal and Dee sit next to each other, and Ana and Ben do not sit next to each other. How many arrangements are possible?',
      answer: '$128$',
      solution:
        'Place the block, then repair. Fay takes chair $4$, splitting the row into chairs $1$–$3$ and $5$–$7$. The Cal–Dee pair must fit inside one half: two placements in each half, $4$ in all, times $2$ for the order, is $8$. The other four people fill the four remaining chairs in $4! = 24$ ways, but whatever the block placement, exactly two adjacent pairs of free chairs survive in the untouched half, so Ana and Ben sit together in $2 \\cdot 2 \\cdot 2! = 8$ of those fillings: $24 - 8 = 16$ good fillings, and $8 \\cdot 16 = 128$ ✓. Second route, subtract the double-block count. With Fay fixed, arrangements with Cal–Dee adjacent: $8 \\cdot 24 = 192$. Arrangements with BOTH pairs adjacent: the two blocks must land in different halves ($2$ ways to assign), each block sitting in one of $2$ positions in its half, orders $2 \\cdot 2$, and the last two people take the two leftover chairs in $2!$ ways: $2 \\cdot 2 \\cdot 2 \\cdot 4 \\cdot 2 = 64$. So $192 - 64 = 128$ ✓. TREATING THE MIDDLE AS AN ORDINARY ROW OF SIX for the block, $5 \\cdot 2 \\cdot 24 = 240$ minus adjacents, forgets that Fay’s chair breaks the row and no block may straddle chair $4$ ✗.',
    },
    {
      q: 'Seven runners line up in a row for a photo. Kai stands at the right end, the twins Lin and Mo stand next to each other, and Nia does not stand next to Kai. How many lineups are possible?',
      answer: '$192$',
      solution:
        'Glue and subtract. Kai holds chair $7$; chairs $1$–$6$ hold the rest. Glue Lin and Mo: five units fill the six-chair row in $5! \\cdot 2 = 240$ ways. Remove the lineups with Nia in chair $6$: the twin block then sits in chairs $1$–$5$, $4$ placements, $2$ orders, and the last three runners take the three open chairs in $3! = 6$ ways: $4 \\cdot 2 \\cdot 6 = 48$. So $240 - 48 = 192$ ✓. Second route, place the block first. Block in chairs $(5, 6)$: chair $6$ is taken by a twin, so Nia sits anywhere among the four open chairs: $2 \\cdot 4 \\cdot 3! = 48$. Block in one of the four placements $(1,2)$ through $(4,5)$: chair $6$ is open and banned for Nia, so she picks one of $3$ chairs, the rest fill in $3!$: $4 \\cdot 2 \\cdot 3 \\cdot 6 = 144$. Total $48 + 144 = 192$ ✓. SUBTRACTING NIA-AT-CHAIR-$6$ WITH ALL FIVE BLOCK PLACEMENTS, $5 \\cdot 2 \\cdot 6 = 60$, counts the impossible case of the block at $(5, 6)$ overlapping Nia and gives $240 - 60 = 180$ ✗.',
    },
    {
      q: 'Eight people, including Ana, Ben, Cal, Dee, and Eli, sit in a row of $8$ chairs. Eli sits at one of the two ends, Cal and Dee sit next to each other, Ana and Ben do not sit next to each other, and Eli sits next to neither Cal nor Dee. How many arrangements are possible?',
      answer: '$1632$',
      solution:
        'Build from Eli’s end. Say Eli takes chair $1$ (double at the finish). The Cal–Dee block must avoid chair $2$, so it sits at $(3,4), (4,5), (5,6), (6,7)$, or $(7,8)$, times $2$ orders. The other five people fill the five open chairs in $5! = 120$ ways; among the open chairs, the first four block placements each leave $3$ adjacent chair pairs and the placement $(7,8)$ leaves $4$, so Ana–Ben adjacent costs $3 \\cdot 2 \\cdot 3! = 36$ or $48$. Good fillings: $4 \\cdot (120 - 36) + (120 - 48) = 408$, times $2$ orders is $816$, times $2$ ends is $1632$ ✓. Second route, glue twice and subtract. Eli at chair $1$: Cal–Dee glued in the seven-chair row: $6! \\cdot 2 = 1440$; remove the block at $(2, 3)$: $5! \\cdot 2 = 240$; so $1200$ respect Eli’s space. Among those, Ana–Ben also glued: two blocks and three singles, $5! \\cdot 2 \\cdot 2 = 480$, minus the Cal–Dee block at $(2, 3)$ with Ana–Ben glued elsewhere, $4 \\cdot 2 \\cdot 2 \\cdot 3! = 96$, leaves $384$. So $1200 - 384 = 816$ per end, $1632$ in all ✓. DROPPING THE “NEXT TO NEITHER” CONDITION gives the familiar $2 \\cdot (1440 - 480) = 1920$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 6,
  worksheet,
}
