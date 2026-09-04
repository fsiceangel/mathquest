// Counting & Probability chapter 5 — variations for the CHALLENGE set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Chapter 5 welds combinations onto three settings: monotone paths on a
//    street grid, committees with membership rules, and distributions where
//    the objects or the containers may be identical. Every stem settles its
//    conventions out loud — grid size in blocks, which corners are marked or
//    closed, which moves are allowed; whether people and objects are all
//    different; whether teams, piles, boxes or envelopes carry labels; and
//    whether a container may be left empty.
//  - Every keyed answer was worked twice along routes that share no steps,
//    and the two routes had to agree before the key was written: word count
//    vs. a corner-by-corner table (slots 1, 5, 7, 12); pick-the-committee vs.
//    pick-the-sub-group-first (slot 2); reserve-then-distribute vs. casework
//    on one container (slot 3); subsets by size vs. the complement over every
//    placement (slot 4); size casework vs. a complement over the
//    left-out group (slot 6); name-the-team vs. a complement over all splits
//    (slot 8); split-at-the-point vs. casework on the opening moves (slot 9);
//    pair-by-pair construction vs. inclusion-exclusion (slot 10); size
//    casework vs. labeled surjections divided by the label count (slot 11).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.

// Street grid drawn to scale: w blocks wide, h blocks tall, corner A at the
// bottom-left and B at the top-right. `marks` are labeled corners a path must
// visit, `closed` corners get an ✕, `hl` lists street segments drawn bold.
function grid(w, h, { marks = [], closed = [], hl = [] } = {}) {
  const elems = []
  for (let x = 0; x <= w; x += 1) elems.push({ t: 'seg', a: [x, 0], b: [x, h] })
  for (let y = 0; y <= h; y += 1) elems.push({ t: 'seg', a: [0, y], b: [w, y] })
  for (const [a, b] of hl) elems.push({ t: 'seg', a, b, hl: true })
  for (const [x, y] of closed) {
    elems.push({ t: 'seg', a: [x - 0.25, y - 0.25], b: [x + 0.25, y + 0.25], hl: true })
    elems.push({ t: 'seg', a: [x - 0.25, y + 0.25], b: [x + 0.25, y - 0.25], hl: true })
  }
  for (const m of marks) elems.push({ t: 'point', p: m.p, label: m.label, dx: m.dx ?? 7, dy: m.dy ?? -7 })
  elems.push({ t: 'point', p: [0, 0], label: 'A', dx: -15, dy: 15 })
  elems.push({ t: 'point', p: [w, h], label: 'B', dx: 6, dy: -6 })
  return { view: [-0.7, -0.7, w + 0.7, h + 0.7], elems }
}

// grid(w, h) with the dashed main diagonal spliced in ahead of the A and B
// labels, exactly where ch05.js puts it.
function diagGrid(n) {
  const f = grid(n, n)
  f.elems.splice(2 * (n + 1), 0, { t: 'seg', a: [0, 0], b: [n, n], dash: true })
  return f
}

const challenge = [
  // slot 1 — a forced first (or last) letter in the path word. Lane: a wire
  // on a circuit board / a coin stack with a pinned bottom coin / both ends
  // pinned.
  [
    {
      q: 'On a circuit board the solder pads sit at the corners of a grid $9$ units wide and $3$ units tall. A wire is run from the pad $A$ at the bottom-left corner to the pad $B$ at the top-right corner, and each of its segments goes one unit right or one unit up from pad to pad. How many such wires begin with an upward segment?',
      choices: ['$55$', '$220$', '$165$', '$66$'],
      answer: 0,
      solution:
        'Every wire is a word with nine $R$’s and three $U$’s. Forcing the first letter to be $U$ leaves $11$ letters holding nine $R$’s and two $U$’s, and the wire is fixed once the two $U$ positions are chosen: $\\binom{11}{2} = 55$ ✓. Now check pad by pad instead, with no formula. After the forced segment the wire sits at the pad $1$ up from $A$, so give that pad a $1$ and fill in the rest of the board, each pad getting the sum of the pad to its left and the pad below it, with $0$ everywhere on the bottom row (that row is unreachable once the first segment goes up). The row at height $1$ reads $1, 1, 1, 1, 1, 1, 1, 1, 1, 1$; the row at height $2$ reads $1, 2, 3, 4, 5, 6, 7, 8, 9, 10$; the row at height $3$ reads $1, 3, 6, 10, 15, 21, 28, 36, 45, 55$, and $B$ holds $55$ ✓. (The choice $220$ is COUNTING EVERY WIRE, $\\binom{12}{3}$, and ignoring the first segment ✗; the choice $165$ is FIXING THE FIRST SEGMENT BUT STILL PLACING THREE $U$’s in the remaining eleven letters, $\\binom{11}{3}$ ✗; the choice $66$ is DROPPING A $U$ BUT KEEPING ALL TWELVE SLOTS, $\\binom{12}{2}$ ✗.)',
    },
    {
      q: 'A stack of $12$ coins is built from $7$ identical gold coins and $5$ identical silver coins. Coins of the same metal cannot be told apart, so a stack is described only by the order of metals from bottom to top. In how many of these stacks is the bottom coin gold?',
      choices: ['$792$', '$330$', '$462$', '$396$'],
      answer: 2,
      solution:
        'Place a gold coin on the bottom. The other $11$ positions hold six gold coins and five silver coins, and the stack is decided once the five silver positions are chosen: $\\binom{11}{5} = 462$ ✓. A second, independent route counts the other case and subtracts. All stacks number $\\binom{12}{5} = 792$, since a stack is fixed by which five of the twelve positions are silver. A stack with a silver coin on the bottom has seven gold and four silver coins left in $11$ positions: $\\binom{11}{4} = 330$. Every stack has one metal or the other on the bottom, so the gold-bottom stacks number $792 - 330 = 462$ ✓. (The choice $792$ is COUNTING EVERY STACK and ignoring the bottom coin ✗; the choice $330$ is COUNTING THE SILVER-BOTTOM STACKS, the other case ✗; the choice $396$ is ASSUMING HALF THE STACKS have gold on the bottom, though gold outnumbers silver ✗.)',
    },
    {
      q: 'The grid shown is $5$ blocks wide and $4$ blocks tall, $A$ is the bottom-left corner, $B$ is the top-right corner, and every step goes one block right or one block up along the streets. How many paths from $A$ to $B$ begin with a step up and end with a step right?',
      fig: grid(5, 4),
      choices: ['$126$', '$35$', '$56$', '$70$'],
      answer: 1,
      solution:
        'A path is a word with five $R$’s and four $U$’s. Pin the first letter as $U$ and the last letter as $R$; the seven letters between them hold four $R$’s and three $U$’s, so the path is fixed by choosing the three $U$ positions among those seven: $\\binom{7}{3} = 35$ ✓. Check corner by corner. The first step lands the walker at the corner $1$ up from $A$, and the last step means the walker reaches the corner $1$ left of $B$, at $4$ right and $4$ up from $A$, before finishing. So count the paths from the first corner to that one, giving the starting corner a $1$ and adding left-plus-below across the strip from height $1$ to height $4$: the height-$1$ row reads $1, 1, 1, 1, 1$; height $2$ reads $1, 2, 3, 4, 5$; height $3$ reads $1, 3, 6, 10, 15$; height $4$ reads $1, 4, 10, 20, 35$, and that last entry is the corner just left of $B$ ✓. (The choice $126$ is IGNORING BOTH END CONDITIONS and counting all $\\binom{9}{4}$ paths ✗; the choice $56$ is ENFORCING ONLY THE FIRST STEP, $\\binom{8}{3}$ ✗; the choice $70$ is ENFORCING ONLY THE LAST STEP, $\\binom{8}{4}$ ✗.)',
    },
  ],

  // slot 2 — choose a set, then a sub-group inside it. Lane: a potter’s
  // glazes / books and a display case / a named person in both layers.
  [
    {
      q: 'A potter has $10$ different glazes, picks $4$ of them for a test firing, and afterwards picks $2$ of those $4$ for the winter line. The glazes are all different, the firing set is an unordered set of $4$, and the winter pair is an unordered pair. How many outcomes (firing set together with its winter pair) are possible?',
      choices: ['$210$', '$1260$', '$2520$', '$45$'],
      answer: 1,
      solution:
        'Build the outcome in the order the potter does. The firing set is any $4$ of the $10$ glazes, $\\binom{10}{4} = 210$, and the winter pair is any $2$ of those $4$, $\\binom{4}{2} = 6$: $210 \\times 6 = 1260$ ✓. A second route builds the same outcome from the inside out, never using $210$ or $6$. Pick the two winter glazes straight out of the ten, $\\binom{10}{2} = 45$, then fill the other two firing slots from the $8$ glazes left, $\\binom{8}{2} = 28$: $45 \\times 28 = 1260$ ✓. (The choice $210$ is STOPPING AT THE FIRING SET and never naming the winter pair ✗; the choice $2520$ is TREATING THE WINTER PAIR AS AN ORDERED PAIR, $210 \\times 4 \\times 3$ ✗; the choice $45$ is NAMING ONLY THE WINTER PAIR and forgetting the other two firing slots ✗.)',
    },
    {
      q: 'From $9$ different books, $4$ are chosen for a shelf, and then $2$ of those $4$ are put in the display case. The shelf holding is an unordered set of $4$ books and the display case an unordered pair. How many outcomes are possible?',
      choices: ['$126$', '$1512$', '$36$', '$756$'],
      answer: 3,
      solution:
        'Choose the shelf, then the display pair inside it: $\\binom{9}{4} = 126$ shelves, and $\\binom{4}{2} = 6$ display pairs within each, so $126 \\times 6 = 756$ ✓. Independently, choose the display pair first from all nine books, $\\binom{9}{2} = 36$, and then the two shelf books that stay out of the case from the $7$ remaining, $\\binom{7}{2} = 21$: $36 \\times 21 = 756$ ✓. (The choice $126$ is STOPPING AT THE SHELF and never filling the case ✗; the choice $1512$ is ORDERING THE DISPLAY PAIR, $126 \\times 4 \\times 3$ ✗; the choice $36$ is COUNTING ONLY THE DISPLAY PAIR and forgetting the other two shelf books ✗.)',
    },
    {
      q: 'A club of $11$ members, one of whom is Kian, chooses a $4$-person committee and then $2$ of those $4$ as presenters. Members are all different, the committee is an unordered set, and the presenters are an unordered pair. In how many outcomes is Kian on the committee and also one of the presenters?',
      choices: ['$720$', '$120$', '$360$', '$1980$'],
      answer: 2,
      solution:
        'Seat Kian on the committee and fill the other three seats from the $10$ other members: $\\binom{10}{3} = 120$ committees. Inside such a committee the presenting pair must contain Kian, so it is Kian together with one of his three committee-mates: $3$ pairs. That gives $120 \\times 3 = 360$ ✓. Build it the other way round instead. The presenting pair is Kian plus one of the $10$ other members, $10$ ways; the two remaining committee seats are then filled from the $9$ members still unused, $\\binom{9}{2} = 36$: $10 \\times 36 = 360$ ✓. (The choice $720$ is SEATING KIAN BUT LEAVING THE PRESENTERS FREE, $120 \\times 6$ ✗; the choice $120$ is STOPPING AT THE COMMITTEE ✗; the choice $1980$ is COUNTING EVERY OUTCOME with no condition on Kian, $\\binom{11}{4} \\times 6 = 330 \\times 6$ ✗.)',
    },
  ],

  // slot 3 — identical items into labeled boxes with a floor on one box.
  // Lane: sandbags on carts / a different floor and container / every box
  // floored.
  [
    {
      q: 'Eight identical sandbags are loaded onto $3$ carts labeled $A$, $B$, and $C$. The sandbags cannot be told apart, the carts can, cart $A$ must carry at least $2$ sandbags, and carts $B$ and $C$ may be left empty. How many loadings are there?',
      choices: ['$45$', '$36$', '$17$', '$28$'],
      answer: 3,
      solution:
        'Pay the debt first: put $2$ sandbags on cart $A$. The remaining $6$ identical sandbags may go anywhere, which is $6$ stars and $2$ bars in a row: $\\binom{8}{2} = 28$ ✓. Now list by the load on cart $A$ instead, with no stars-and-bars at all. If $A$ carries $a$ sandbags, the other $8 - a$ sandbags split between $B$ and $C$ in $9 - a$ ways, and $a$ runs from $2$ to $8$: $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$ ✓. (The choice $45$ is IGNORING THE RULE and counting all $\\binom{10}{2}$ loadings ✗; the choice $36$ is DEMANDING ONLY ONE SANDBAG ON $A$, $\\binom{9}{2}$ ✗; the choice $17$ is COUNTING THE FORBIDDEN LOADINGS, the ones with $A$ carrying $0$ or $1$ ✗.)',
    },
    {
      q: 'Eleven identical seedlings are planted in $3$ trays labeled $A$, $B$, and $C$. Seedlings cannot be told apart, trays can, tray $C$ must get at least $4$ seedlings, and trays $A$ and $B$ may be left empty. How many plantings are there?',
      choices: ['$78$', '$36$', '$45$', '$66$'],
      answer: 1,
      solution:
        'Set $4$ seedlings in tray $C$ up front. The other $7$ identical seedlings go anywhere among the three trays: $7$ stars and $2$ bars, $\\binom{9}{2} = 36$ ✓. Check by complement. All plantings number $\\binom{13}{2} = 78$. A planting is bad when $C$ holds $0$, $1$, $2$ or $3$; with $c$ in tray $C$ the other $11 - c$ seedlings split between $A$ and $B$ in $12 - c$ ways, giving $12 + 11 + 10 + 9 = 42$ bad plantings, and $78 - 42 = 36$ ✓. (The choice $78$ is IGNORING THE RULE ✗; the choice $45$ is RESERVING ONLY THREE SEEDLINGS for tray $C$, $\\binom{10}{2}$ ✗; the choice $66$ is DEMANDING ONLY ONE SEEDLING in tray $C$, $\\binom{12}{2}$ ✗.)',
    },
    {
      q: 'Eleven identical tokens are placed into $4$ boxes labeled $1$, $2$, $3$, and $4$. The tokens cannot be told apart, the boxes can, and every box must receive at least one token. How many placements are there?',
      choices: ['$120$', '$364$', '$165$', '$210$'],
      answer: 0,
      solution:
        'Hand one token to each box first. The $7$ tokens left over go anywhere among the four boxes: $7$ stars and $3$ bars, $\\binom{10}{3} = 120$ ✓. Count again by casework on box $4$, using no bars at all. If box $4$ holds $d$ tokens, the other $11 - d$ tokens fill three boxes each holding at least one, and that count is $\\binom{10 - d}{2}$. Running $d$ from $1$ to $8$: $36 + 28 + 21 + 15 + 10 + 6 + 3 + 1 = 120$ ✓. (The choice $364$ is LETTING BOXES BE EMPTY, $\\binom{14}{3}$ ✗; the choice $165$ is USING $\\binom{11}{3}$, which subtracts nothing for the tokens already handed out ✗; the choice $210$ is CHOOSING FOUR BAR POSITIONS INSTEAD OF THREE, $\\binom{10}{4}$ ✗.)',
    },
  ],

  // slot 4 — different objects into two labeled bins with a size floor.
  // Lane: errands split between two people / keep-or-cut marks / a floor on
  // both.
  [
    {
      q: 'Seven different errands are divided between Tova and Bram. Each errand is run by exactly one of them, and either of them may end up with none. In how many divisions does Tova run at least $5$ of the errands?',
      choices: ['$128$', '$28$', '$29$', '$58$'],
      answer: 2,
      solution:
        'A division is decided entirely by which errands fall to Tova, so count the subsets of size $5$, $6$, or $7$: $\\binom{7}{5} + \\binom{7}{6} + \\binom{7}{7} = 21 + 7 + 1 = 29$ ✓. Count the divisions that break the rule instead, and take them away from all of them. Every errand goes to one of two people, so there are $2^7 = 128$ divisions in all. A division breaks the rule when Tova runs four errands or fewer, and sorting those by the size of her share gives $1 + 7 + 21 + 35 + 35 = 99$ of them. Then $128 - 99 = 29$ ✓. (The choice $128$ is IGNORING THE RULE and counting all $2^7$ divisions ✗; the choice $28$ is FORGETTING THE CASE WHERE ALL SEVEN ERRANDS fall to Tova ✗; the choice $58$ is COUNTING EITHER PERSON with at least five errands, $29 + 29$, though only Tova was asked about ✗.)',
    },
    {
      q: 'A draft quiz has $5$ different questions, and an editor marks each question either "keep" or "cut". Every question gets exactly one mark. In how many outcomes are at least $3$ questions kept?',
      choices: ['$16$', '$32$', '$15$', '$6$'],
      answer: 0,
      solution:
        'An outcome is decided by the set of kept questions, so add the sets of size $3$, $4$, and $5$: $\\binom{5}{3} + \\binom{5}{4} + \\binom{5}{5} = 10 + 5 + 1 = 16$ ✓. A second route uses a symmetry rather than any binomial coefficient. Flipping every mark turns an outcome that keeps $k$ questions into one that keeps $5 - k$, and flipping twice returns the original, so this pairs the outcomes with at least $3$ kept against the outcomes with at most $2$ kept. Because $5$ is odd no outcome is paired with itself, and the two groups together are all $2^5 = 32$ outcomes, so each group holds $32 \\div 2 = 16$ ✓. (The choice $32$ is IGNORING THE RULE and counting every marking ✗; the choice $15$ is FORGETTING THE KEEP-ALL-FIVE OUTCOME ✗; the choice $6$ is READING "AT LEAST $3$" AS "AT LEAST $4$", $5 + 1$ ✗.)',
    },
    {
      q: 'Six different balls are placed into two boxes labeled $A$ and $B$. Every ball goes into exactly one box. In how many placements does each box hold at least $2$ balls?',
      choices: ['$64$', '$62$', '$20$', '$50$'],
      answer: 3,
      solution:
        'Count the bad placements and subtract. All placements number $2^6 = 64$, and a placement fails when box $A$ holds $0$, $1$, $5$, or $6$ balls (those are exactly the cases where one box holds fewer than two): $1 + 6 + 6 + 1 = 14$, so $64 - 14 = 50$ ✓. Count the good ones directly instead. A placement is fixed by box $A$’s contents, and both boxes hold at least two exactly when box $A$’s size is $2$, $3$, or $4$: $\\binom{6}{2} + \\binom{6}{3} + \\binom{6}{4} = 15 + 20 + 15 = 50$ ✓. (The choice $64$ is IGNORING THE RULE ✗; the choice $62$ is BARRING ONLY EMPTY BOXES and allowing a lone ball ✗; the choice $20$ is ASSUMING AN EVEN THREE-AND-THREE SPLIT, $\\binom{6}{3}$ ✗.)',
    },
  ],

  // slot 5 — through one marked corner but not the other. Lane: a marsh
  // boardwalk / a transit map / the roles of the two corners swapped.
  [
    {
      q: 'A marsh boardwalk is laid out as a grid $7$ units east and $3$ units north, with a viewing deck at every corner. $A$ is the southwest corner, $B$ is the northeast corner, and every step goes one unit east or one unit north along the boardwalk. The deck $P$ is $2$ east and $1$ north of $A$, and the deck $Q$ is $5$ east and $2$ north of $A$. How many walks from $A$ to $B$ visit $P$ but never $Q$?',
      fig: grid(7, 3, { marks: [{ p: [2, 1], label: 'P' }, { p: [5, 2], label: 'Q' }] }),
      choices: ['$27$', '$63$', '$36$', '$84$'],
      answer: 0,
      solution:
        'Count the walks through $P$ and remove those that also meet $Q$. From $A$ to $P$ is $2$ east and $1$ north, $\\binom{3}{1} = 3$ ways; from $P$ to $B$ is $5$ east and $2$ north, $\\binom{7}{2} = 21$ ways; so $3 \\times 21 = 63$ walks visit $P$. Of those, the ones that also visit $Q$ split into three legs: $A$ to $P$ ($3$), $P$ to $Q$, which is $3$ east and $1$ north ($\\binom{4}{1} = 4$), and $Q$ to $B$, which is $2$ east and $1$ north ($\\binom{3}{1} = 3$): $3 \\times 4 \\times 3 = 36$. Then $63 - 36 = 27$ ✓. Independently, count the second half with $Q$ simply closed off, corner by corner. Beyond $P$ the boardwalk is $5$ units wide and $2$ units tall with $Q$ sitting $3$ east and $1$ north inside it; giving $Q$ a $0$ and adding left-plus-below, the bottom row reads $1, 1, 1, 1, 1, 1$, the middle row reads $1, 2, 3, 0, 1, 2$, and the top row reads $1, 3, 6, 6, 7, 9$, so $9$ second halves survive. With $3$ first halves that is $3 \\times 9 = 27$ ✓. (The choice $63$ is STOPPING AT THE WALKS THROUGH $P$ and never excluding $Q$ ✗; the choice $36$ is COUNTING THE EXCLUDED WALKS, the ones through both decks ✗; the choice $84$ is SUBTRACTING THE $36$ FROM ALL $120$ WALKS instead of from the $63$ that visit $P$ ✗.)',
    },
    {
      q: 'A transit map’s stations sit at the corners of a grid $6$ stops east and $3$ stops north. A trip starts at the southwest corner, ends at the northeast corner, and every leg goes one stop east or one stop north. Station $P$ is $2$ east and $1$ north of the start, and station $Q$ is $4$ east and $2$ north of the start. How many trips stop at $P$ but never at $Q$?',
      fig: grid(6, 3, { marks: [{ p: [2, 1], label: 'P' }, { p: [4, 2], label: 'Q' }] }),
      choices: ['$45$', '$27$', '$18$', '$57$'],
      answer: 2,
      solution:
        'Trips through $P$: the start to $P$ is $2$ east and $1$ north, $\\binom{3}{1} = 3$ ways, and $P$ to the far corner is $4$ east and $2$ north, $\\binom{6}{2} = 15$ ways, so $3 \\times 15 = 45$. Trips through both $P$ and $Q$ take three legs: $3$, then $P$ to $Q$ ($2$ east, $1$ north, $\\binom{3}{1} = 3$), then $Q$ to the corner ($2$ east, $1$ north, $3$): $3 \\times 3 \\times 3 = 27$. So $45 - 27 = 18$ ✓. Now close $Q$ and count the leg after $P$ corner by corner. Beyond $P$ the map is $4$ stops wide and $2$ stops tall with $Q$ at $2$ east, $1$ north inside it. Giving $Q$ a $0$: the bottom row reads $1, 1, 1, 1, 1$, the middle row reads $1, 2, 0, 1, 2$, and the top row reads $1, 3, 3, 4, 6$, so $6$ tail legs survive. With $3$ ways to reach $P$, that is $3 \\times 6 = 18$ ✓. (The choice $45$ is STOPPING AT THE TRIPS THROUGH $P$ ✗; the choice $27$ is COUNTING THE EXCLUDED TRIPS, the ones visiting both stations ✗; the choice $57$ is SUBTRACTING THE $27$ FROM ALL $84$ TRIPS instead of from the $45$ that visit $P$ ✗.)',
    },
    {
      q: 'The grid shown is $7$ blocks wide and $4$ blocks tall, $A$ is the bottom-left corner, $B$ is the top-right corner, and every step goes one block right or one block up along the streets. The corner $P$ is $2$ right and $2$ up from $A$, and the corner $Q$ is $5$ right and $3$ up from $A$. How many paths from $A$ to $B$ pass through $Q$ but not through $P$?',
      fig: grid(7, 4, { marks: [{ p: [2, 2], label: 'P' }, { p: [5, 3], label: 'Q' }] }),
      choices: ['$168$', '$96$', '$72$', '$258$'],
      answer: 1,
      solution:
        'Paths through $Q$: $A$ to $Q$ is $5$ right and $3$ up, $\\binom{8}{3} = 56$, and $Q$ to $B$ is $2$ right and $1$ up, $\\binom{3}{1} = 3$, giving $56 \\times 3 = 168$. Among them, the paths that also visit $P$ run $A$ to $P$ ($2$ right, $2$ up, $\\binom{4}{2} = 6$), $P$ to $Q$ ($3$ right, $1$ up, $\\binom{4}{1} = 4$), $Q$ to $B$ ($3$): $6 \\times 4 \\times 3 = 72$. So $168 - 72 = 96$ ✓. For an independent route, close $P$ and count the way to $Q$ corner by corner. On the $5$-wide, $3$-tall block from $A$ to $Q$, with $P$ at $2$ right and $2$ up given a $0$: the bottom row reads $1, 1, 1, 1, 1, 1$; the next reads $1, 2, 3, 4, 5, 6$; the next reads $1, 3, 0, 4, 9, 15$; the top reads $1, 4, 4, 8, 17, 32$. So $32$ paths reach $Q$ without touching $P$, and each continues to $B$ in $3$ ways: $32 \\times 3 = 96$ ✓. (The choice $168$ is STOPPING AT THE PATHS THROUGH $Q$ ✗; the choice $72$ is COUNTING THE EXCLUDED PATHS, the ones through both corners ✗; the choice $258$ is SUBTRACTING THE $72$ FROM ALL $330$ PATHS instead of from the $168$ that visit $Q$ ✗.)',
    },
  ],
  // slot 6 — every group represented in a small selection. Lane: four
  // bakeries of two pies / three albums of three / the complement, a group
  // shut out.
  [
    {
      q: 'Four bakeries each enter $2$ different pies in a summer contest, $8$ pies in all and all different. A judge picks $5$ of the pies for the final round; the picked group is an unordered set, and every bakery must have at least one of its two pies in it. How many groups are possible?',
      choices: ['$56$', '$32$', '$64$', '$16$'],
      answer: 1,
      solution:
        'Each bakery enters only two pies, so filling $5$ places from $4$ bakeries with none shut out means one bakery supplies both of its pies and the other three supply one each. Choose the doubled bakery, $4$ ways; its pair is forced; then choose one pie from each of the other three bakeries, $2^3 = 8$ ways: $4 \\times 8 = 32$ ✓. Count from the other end for an independent check, by looking at the three pies left out. All groups number $\\binom{8}{5} = 56$. A bakery is shut out exactly when both of its pies are among the three left out, so a bad group is one whose omitted trio contains a whole bakery: choose that bakery, $4$ ways, then the third omitted pie from the other $6$, giving $4 \\times 6 = 24$. No omitted trio can hold two whole bakeries, since that needs four pies, so nothing is double-counted: $56 - 24 = 32$ ✓. (The choice $56$ is IGNORING THE REPRESENTATION RULE ✗; the choice $64$ is PICKING ONE PIE PER BAKERY AND THEN A FIFTH FREELY, $2^4 \\times 4$, which counts every group twice, once for each pie of the doubled bakery ✗; the choice $16$ is STOPPING AFTER ONE PIE PER BAKERY and never picking the fifth ✗.)',
    },
    {
      q: 'Three albums hold $3$ different tracks each, $9$ songs in all. A playlist is an unordered set of $5$ different songs, and it must include at least one song from each album. How many playlists are possible?',
      choices: ['$126$', '$405$', '$27$', '$108$'],
      answer: 3,
      solution:
        'Split into cases by how many songs each album contributes. Five songs from three albums, each album giving between $1$ and $3$, means the contributions are $3+1+1$ or $2+2+1$. For $3+1+1$: choose which album gives three ($3$ ways), take all of it ($1$ way), and take one song from each of the others ($3 \\times 3$): $3 \\times 9 = 27$. For $2+2+1$: choose which album gives one ($3$ ways), pick that song ($3$), and pick two from each of the other albums ($3 \\times 3$): $3 \\times 3 \\times 9 = 81$. Total $27 + 81 = 108$ ✓. Now subtract the failures instead. All playlists number $\\binom{9}{5} = 126$. A playlist misses an album exactly when all five songs come from the other two albums’ $6$ songs, $\\binom{6}{5} = 6$ playlists per album, so $3 \\times 6 = 18$; two albums cannot both be missed, since one album holds only $3$ songs. So $126 - 18 = 108$ ✓. (The choice $126$ is IGNORING THE RULE ✗; the choice $405$ is PICKING ONE SONG PER ALBUM AND THEN TWO MORE FREELY, $27 \\times \\binom{6}{2}$, which counts most playlists several times ✗; the choice $27$ is STOPPING AFTER ONE SONG PER ALBUM ✗.)',
    },
    {
      q: 'Three classes each send $3$ students to a workshop, $9$ students in all and all different. A $5$-student panel is chosen; a panel is an unordered set. In how many panels is at least one class left out entirely?',
      choices: ['$108$', '$126$', '$18$', '$6$'],
      answer: 2,
      solution:
        'Count the shut-out panels head on. A class is left out exactly when all $5$ panelists come from the other two classes, which hold $6$ students between them: $\\binom{6}{5} = 6$ panels for each choice of shut-out class. Two classes cannot both be shut out, because a single class supplies only $3$ students and the panel needs $5$, so there is no overlap to remove: $3 \\times 6 = 18$ ✓. Reach the same number from the complement. Panels with every class represented have class contributions $3+1+1$ or $2+2+1$: the first gives $3 \\times (1 \\times 3 \\times 3) = 27$, the second gives $3 \\times (3 \\times 3 \\times 3) = 81$, so $108$ panels represent all three classes. All panels number $\\binom{9}{5} = 126$, and $126 - 108 = 18$ ✓. (The choice $108$ is COUNTING THE PANELS WITH EVERY CLASS REPRESENTED, the opposite of the question ✗; the choice $126$ is COUNTING EVERY PANEL ✗; the choice $6$ is FORGETTING TO CHOOSE WHICH CLASS is shut out ✗.)',
    },
  ],

  // slot 7 — two closed corners. Lane: greenhouse walkways, no overlap / a
  // shallow grid with one ✕ on the bottom edge / the ruined paths instead.
  [
    {
      q: 'A greenhouse’s walkways meet at the corners of a grid $5$ benches wide and $5$ benches tall. $A$ is the bottom-left corner, $B$ is the top-right corner, and every step goes one bench east or one bench north along a walkway. Two corners are blocked by planters and may not be entered, each marked ✕: the one $1$ east and $4$ north of $A$, and the one $4$ east and $1$ north of $A$. How many walks from $A$ to $B$ avoid both?',
      fig: grid(5, 5, { closed: [[1, 4], [4, 1]] }),
      choices: ['$252$', '$227$', '$50$', '$202$'],
      answer: 3,
      solution:
        'All walks number $\\binom{10}{5} = 252$. Walks through the upper-left ✕: $\\binom{5}{1} \\times \\binom{5}{1} = 5 \\times 5 = 25$, since $A$ to it is $1$ east and $4$ north and it to $B$ is $4$ east and $1$ north. Walks through the lower-right ✕: by the same split, $25$. No walk can meet both, because going from one to the other would require steps west or steps south. So $252 - 25 - 25 = 202$ ✓. Verify corner by corner, giving each ✕ a $0$ and adding left-plus-below. Bottom row: $1, 1, 1, 1, 1, 1$. Height $1$: $1, 2, 3, 4, 0, 1$. Height $2$: $1, 3, 6, 10, 10, 11$. Height $3$: $1, 4, 10, 20, 30, 41$. Height $4$: $1, 0, 10, 30, 60, 101$. Height $5$: $1, 1, 11, 41, 101, 202$, and $B$ holds $202$ ✓. (The choice $252$ is IGNORING THE PLANTERS ✗; the choice $227$ is SUBTRACTING ONLY ONE ✕ ✗; the choice $50$ is COUNTING THE BLOCKED WALKS rather than the surviving ones ✗.)',
    },
    {
      q: 'A hotel’s corridors meet at the corners of a grid $5$ units east and $3$ units north. A walk starts at the southwest corner, ends at the northeast corner, and every step goes one unit east or one unit north. Two junctions are barricaded and may not be entered, both marked ✕: the one $1$ east and $3$ north of the start, and the one $4$ east and $0$ north, on the bottom edge. How many walks are there?',
      fig: grid(5, 3, { closed: [[1, 3], [4, 0]] }),
      choices: ['$56$', '$48$', '$52$', '$8$'],
      answer: 1,
      solution:
        'All walks number $\\binom{8}{3} = 56$. Walks through the ✕ at $1$ east, $3$ north: the start reaches it in $\\binom{4}{1} = 4$ ways, and from it the finish is $4$ east and $0$ north, which is $1$ way, so $4$ walks. Walks through the ✕ at $4$ east, $0$ north: the start reaches it along the bottom in $1$ way, and from it the finish is $1$ east and $3$ north, $\\binom{4}{1} = 4$ ways, so $4$ walks. No walk meets both, since from either one the other lies down or back. So $56 - 4 - 4 = 48$ ✓. Check corner by corner with a $0$ at each ✕. Bottom row: $1, 1, 1, 1, 0, 0$. Height $1$: $1, 2, 3, 4, 4, 4$. Height $2$: $1, 3, 6, 10, 14, 18$. Height $3$: $1, 0, 6, 16, 30, 48$, and the northeast corner holds $48$ ✓. (The choice $56$ is IGNORING THE BARRICADES ✗; the choice $52$ is SUBTRACTING ONLY ONE ✕ ✗; the choice $8$ is COUNTING THE BARRICADED WALKS ✗.)',
    },
    {
      q: 'The grid shown is $5$ blocks wide and $4$ blocks tall, $A$ is the bottom-left corner, $B$ is the top-right corner, and every step goes one block right or one block up along the streets. The corner $1$ right and $3$ up from $A$ and the corner $4$ right and $1$ up from $A$ are closed, each marked ✕. How many paths from $A$ to $B$ run into a closed corner, that is, pass through at least one ✕?',
      fig: grid(5, 4, { closed: [[1, 3], [4, 1]] }),
      choices: ['$40$', '$86$', '$126$', '$20$'],
      answer: 0,
      solution:
        'Count the ruined paths directly. Through the ✕ at $1$ right, $3$ up: $A$ reaches it in $\\binom{4}{1} = 4$ ways and it reaches $B$ ($4$ right, $1$ up) in $\\binom{5}{1} = 5$ ways, so $20$. Through the ✕ at $4$ right, $1$ up: $A$ reaches it in $\\binom{5}{1} = 5$ ways and it reaches $B$ ($1$ right, $3$ up) in $\\binom{4}{1} = 4$ ways, so $20$. A path cannot meet both, since one lies up-and-left of the other, so nothing is double-counted: $20 + 20 = 40$ ✓. Independently, count the clean paths corner by corner and subtract from the total $\\binom{9}{4} = 126$. With a $0$ at each ✕ the rows read: bottom $1, 1, 1, 1, 1, 1$; height $1$: $1, 2, 3, 4, 0, 1$; height $2$: $1, 3, 6, 10, 10, 11$; height $3$: $1, 0, 6, 16, 26, 37$; height $4$: $1, 1, 7, 23, 49, 86$. So $86$ paths stay clean and $126 - 86 = 40$ run into a ✕ ✓. (The choice $86$ is COUNTING THE PATHS THAT AVOID BOTH ✕, the opposite of the question ✗; the choice $126$ is COUNTING EVERY PATH ✗; the choice $20$ is STOPPING AFTER ONE ✕ ✗.)',
    },
  ],

  // slot 8 — unnamed groups with two people pinned together or apart. Lane:
  // two ship watches, together / unequal group sizes / apart.
  [
    {
      q: 'Fourteen sailors, among them Odile and Zane, are divided into two watches of $7$ aboard a research ship. The watches carry no names, numbers, or officers, so a division that swaps the two watches counts as the same division. In how many divisions are Odile and Zane in the same watch?',
      choices: ['$1716$', '$924$', '$792$', '$396$'],
      answer: 2,
      solution:
        'The phrase "the watch holding Odile and Zane" already tells the two watches apart, so no halving is needed here. Fill that watch: it holds Odile, Zane, and $5$ more chosen from the $12$ other sailors, $\\binom{12}{5} = 792$, and the remaining seven form the other watch ✓. Check by complement. All divisions number $\\frac{1}{2}\\binom{14}{7} = \\frac{3432}{2} = 1716$, the halving accounting for the swap. Divisions that separate the pair are named by "Odile’s watch", which takes $6$ more from the $12$ others with Zane barred, $\\binom{12}{6} = 924$. Then $1716 - 924 = 792$ ✓. (The choice $1716$ is COUNTING EVERY DIVISION and ignoring the pair ✗; the choice $924$ is COUNTING THE DIVISIONS THAT SEPARATE ODILE AND ZANE ✗; the choice $396$ is HALVING A SECOND TIME, though naming a watch by the pair it holds already broke the swap symmetry ✗.)',
    },
    {
      q: 'Ten different beads, two of which are the jade bead and the amber bead, are divided into an unnamed group of $4$ and an unnamed group of $6$. The groups carry no labels, but they have different sizes. In how many divisions do the jade bead and the amber bead land in the same group?',
      choices: ['$98$', '$210$', '$112$', '$49$'],
      answer: 0,
      solution:
        'Split into two cases. Both named beads in the group of $4$: choose its other $2$ members from the $8$ remaining beads, $\\binom{8}{2} = 28$. Both in the group of $6$: choose its other $4$ members from the $8$ remaining, $\\binom{8}{4} = 70$. The cases cannot overlap, so $28 + 70 = 98$ ✓. Check by complement. Because the two groups have different sizes, a division is fixed by naming the group of $4$ and nothing needs halving: $\\binom{10}{4} = 210$ divisions in all. The named beads are apart exactly when the group of $4$ holds one of them: choose which one ($2$ ways) and $3$ more beads from the other $8$, $\\binom{8}{3} = 56$, giving $2 \\times 56 = 112$. Then $210 - 112 = 98$ ✓. (The choice $210$ is COUNTING EVERY DIVISION ✗; the choice $112$ is COUNTING THE DIVISIONS WITH THE TWO BEADS APART ✗; the choice $49$ is HALVING FOR INTERCHANGEABLE GROUPS, though a group of $4$ and a group of $6$ can never be swapped ✗.)',
    },
    {
      q: 'Twelve players, two of whom are Rae and Sol, are split into two teams of $6$. The teams have no names, so swapping the two teams gives the same split. In how many splits are Rae and Sol on different teams?',
      choices: ['$462$', '$210$', '$126$', '$252$'],
      answer: 3,
      solution:
        'If Rae and Sol are apart, the phrases "Rae’s team" and "Sol’s team" name the two teams, so the swap symmetry is already broken and no halving is needed. Rae’s team takes $5$ more players from the $10$ who are neither Rae nor Sol, $\\binom{10}{5} = 252$, and the rest join Sol ✓. Check the other way. All splits number $\\frac{1}{2}\\binom{12}{6} = \\frac{924}{2} = 462$. Splits with Rae and Sol together are named by "the team with both of them", which takes $4$ more from the remaining $10$, $\\binom{10}{4} = 210$. Then $462 - 210 = 252$ ✓. (The choice $462$ is COUNTING EVERY SPLIT ✗; the choice $210$ is COUNTING THE SPLITS WITH THE TWO TOGETHER ✗; the choice $126$ is HALVING A SECOND TIME after the teams were already named for Rae and Sol ✗.)',
    },
  ],
  // slot 9 — monotone routes in three dimensions, or the same word count in
  // one line. Lane: a mine of cubical chambers, through the point / a letter
  // code with a pinned first letter / a lopsided stack, missing the point.
  [
    {
      q: 'A surveyor walks the tunnels of a mine dug as a $3$ by $3$ by $3$ array of cubical chambers, from the lowest southwest corner to the highest northeast corner. Each leg follows one tunnel east, one tunnel north, or one ramp up, and never west, south, or down. How many walks pass through the point $1$ east, $1$ north, and $1$ up from the start?',
      choices: ['$540$', '$1680$', '$1140$', '$96$'],
      answer: 0,
      solution:
        'Split the walk at that point. From the start to it takes one $E$, one $N$, and one $U$ in some order, $3! = 6$ walks. From it to the far corner takes two $E$’s, two $N$’s, and two $U$’s, $\\frac{6!}{2!\\,2!\\,2!} = 90$ walks. Any first half may be followed by any second half: $6 \\times 90 = 540$ ✓. Independently, sort every walk by its first three legs and throw away the ones that cannot reach the point. A whole walk is a word with three $E$’s, three $N$’s, and three $U$’s, and there are $\\frac{9!}{3!\\,3!\\,3!} = 1680$ of them. A walk stands on the point after three legs exactly when its first three letters are all different, so count the other openings. An opening with exactly two letters alike can be arranged in $3$ orders, the doubled letter chosen $3$ ways and the single one $2$ ways, giving $18$ openings; each leaves one of the doubled letter, two of the single one, and three of the third, $\\frac{6!}{1!\\,2!\\,3!} = 60$ tails, for $18 \\times 60 = 1080$. An opening of three identical letters comes in $3$ kinds and leaves $\\frac{6!}{3!\\,3!} = 20$ tails, for $60$. So $1680 - 1080 - 60 = 540$ ✓. (The choice $1680$ is COUNTING EVERY WALK ✗; the choice $1140$ is COUNTING THE WALKS THAT MISS THE POINT ✗; the choice $96$ is ADDING THE TWO HALVES, $6 + 90$, instead of multiplying ✗.)',
    },
    {
      q: 'A $7$-character code is built from three $X$’s, two $Y$’s, and two $Z$’s. Characters of the same letter are identical, so a code is described only by the pattern of letters from left to right. How many of these codes begin with $Z$?',
      choices: ['$210$', '$90$', '$60$', '$70$'],
      answer: 2,
      solution:
        'Put a $Z$ in the first slot. The other six slots hold three $X$’s, two $Y$’s, and one $Z$, and the code is fixed once those are arranged: $\\frac{6!}{3!\\,2!\\,1!} = 60$ ✓. A second route counts the other two openings and subtracts. All codes number $\\frac{7!}{3!\\,2!\\,2!} = 210$. Codes beginning with $X$ leave two $X$’s, two $Y$’s, and two $Z$’s: $\\frac{6!}{2!\\,2!\\,2!} = 90$. Codes beginning with $Y$ leave three $X$’s, one $Y$, and two $Z$’s: $\\frac{6!}{3!\\,1!\\,2!} = 60$. Every code opens with one of the three letters, so the $Z$-openers number $210 - 90 - 60 = 60$ ✓. (The choice $210$ is COUNTING EVERY CODE ✗; the choice $90$ is COUNTING THE CODES THAT BEGIN WITH $X$ ✗; the choice $70$ is ASSUMING THE THREE LETTERS LEAD EQUALLY OFTEN, $210 \\div 3$, though there are more $X$’s than $Z$’s ✗.)',
    },
    {
      q: 'A bug crawls along the edges of a $3$-by-$2$-by-$2$ stack of unit cubes, from one bottom corner to the opposite top corner, which is $3$ units east, $2$ units north, and $2$ units up from the start. Each move goes one unit east, one unit north, or one unit up, and it never moves west, south, or down. How many routes miss the lattice point $1$ east, $1$ north, and $1$ up from the start?',
      choices: ['$210$', '$138$', '$72$', '$18$'],
      answer: 1,
      solution:
        'A route is a word with three $E$’s, two $N$’s, and two $U$’s, so all routes number $\\frac{7!}{3!\\,2!\\,2!} = 210$. A route stands on the point after three moves exactly when its first three letters are one of each direction, $3! = 6$ openings, and the tail then holds two $E$’s, one $N$, and one $U$, $\\frac{4!}{2!\\,1!\\,1!} = 12$ arrangements: $6 \\times 12 = 72$ routes hit the point. So $210 - 72 = 138$ miss it ✓. Count the missing routes directly instead, by listing the openings that repeat a letter and the tails each one leaves. Opening $EEE$: $1$ order, tail two $N$’s and two $U$’s, $\\frac{4!}{2!\\,2!} = 6$, so $6$. Opening with two $E$’s and an $N$: $3$ orders, tail one $E$, one $N$, two $U$’s, $\\frac{4!}{1!\\,1!\\,2!} = 12$, so $36$. Two $E$’s and a $U$: $3$ orders, tail $12$, so $36$. Two $N$’s and an $E$: $3$ orders, tail two $E$’s and two $U$’s, $6$, so $18$. Two $N$’s and a $U$: $3$ orders, tail three $E$’s and one $U$, $\\frac{4!}{3!} = 4$, so $12$. Two $U$’s and an $E$: $3$ orders, tail $6$, so $18$. Two $U$’s and an $N$: $3$ orders, tail $4$, so $12$. Openings $NNN$ and $UUU$ are impossible with only two of each. Adding: $6 + 36 + 36 + 18 + 12 + 18 + 12 = 138$ ✓. (The choice $210$ is COUNTING EVERY ROUTE ✗; the choice $72$ is COUNTING THE ROUTES THROUGH THE POINT ✗; the choice $18$ is ADDING THE TWO HALVES, $6 + 12$, instead of multiplying ✗.)',
    },
  ],

  // slot 10 — no two chosen items from the same pair. Lane: five two-person
  // kayaks / six pairs of shoes / the complement.
  [
    {
      q: 'Ten paddlers race in five two-person kayaks, and all ten paddlers are different. A $4$-person portage party is chosen; the party is an unordered set, and no kayak may have both of its paddlers in it. How many parties are possible?',
      choices: ['$210$', '$80$', '$130$', '$1920$'],
      answer: 1,
      solution:
        'The four party members must come from four different kayaks. Choose which four kayaks are represented, $\\binom{5}{4} = 5$, then choose one paddler from each of them, $2^4 = 16$: $5 \\times 16 = 80$ ✓. Check by removing the bad parties from all of them. All parties number $\\binom{10}{4} = 210$. A party is bad when it holds both paddlers of some kayak: choose the kayak, $5$ ways, and the other two members from the remaining $8$ paddlers, $\\binom{8}{2} = 28$, giving $140$ — but a party holding two full kayaks was counted once for each of them, and there are $\\binom{5}{2} = 10$ such parties, so the bad parties number $140 - 10 = 130$. Then $210 - 130 = 80$ ✓. (The choice $210$ is IGNORING THE RULE ✗; the choice $130$ is COUNTING THE PARTIES THAT DO HOLD A FULL KAYAK ✗; the choice $1920$ is PICKING THE PARTY ONE PERSON AT A TIME, $10 \\times 8 \\times 6 \\times 4$, and forgetting to divide by $4!$ ✗.)',
    },
    {
      q: 'A closet holds $6$ pairs of shoes, $12$ shoes in all, and every shoe is distinguishable. Three shoes are chosen; the choice is an unordered set, and no two of the chosen shoes may come from the same pair. How many choices are possible?',
      choices: ['$220$', '$60$', '$960$', '$160$'],
      answer: 3,
      solution:
        'The three shoes come from three different pairs. Choose which pairs, $\\binom{6}{3} = 20$, then choose left or right from each, $2^3 = 8$: $20 \\times 8 = 160$ ✓. Check by complement. All choices of three shoes number $\\binom{12}{3} = 220$. A choice is bad when two of the shoes match, and since only three shoes are taken it can contain at most one matched pair: choose the matched pair, $6$ ways, then a third shoe from the other $10$, giving $6 \\times 10 = 60$ bad choices with no overlap to correct. Then $220 - 60 = 160$ ✓. (The choice $220$ is IGNORING THE RULE ✗; the choice $60$ is COUNTING THE FORBIDDEN CHOICES ✗; the choice $960$ is PICKING THE SHOES IN ORDER, $12 \\times 10 \\times 8$, and forgetting to divide by $3!$ ✗.)',
    },
    {
      q: 'Five married couples ($10$ people, all different) are at a dinner, and a $4$-person crew is chosen; a crew is an unordered set. In how many crews does at least one married couple serve together?',
      choices: ['$80$', '$140$', '$130$', '$210$'],
      answer: 2,
      solution:
        'Count the crews holding a couple directly. Choose a couple, $5$ ways, and two more people from the other $8$, $\\binom{8}{2} = 28$: that is $140$ crews, but a crew made of two whole couples was counted twice, once for each of its couples. There are $\\binom{5}{2} = 10$ such crews, so the answer is $140 - 10 = 130$ ✓. Check by complement. All crews number $\\binom{10}{4} = 210$. A crew with no couple takes four different couples, $\\binom{5}{4} = 5$, and one person from each, $2^4 = 16$, for $80$ crews. Then $210 - 80 = 130$ ✓. (The choice $80$ is COUNTING THE CREWS WITH NO COUPLE, the opposite of the question ✗; the choice $140$ is FORGETTING TO REMOVE THE DOUBLE-COUNTED TWO-COUPLE CREWS ✗; the choice $210$ is COUNTING EVERY CREW ✗.)',
    },
  ],

  // slot 11 — different objects into identical containers. Lane: six scarves
  // into three hampers / six tasks into four crews / empty allowed.
  [
    {
      q: 'Six different scarves are packed into $3$ identical, unlabeled hampers, and no hamper may be left empty. Two packings count as the same when they produce the same collection of hamper contents. How many packings are there?',
      choices: ['$540$', '$122$', '$75$', '$90$'],
      answer: 3,
      solution:
        'Work through the possible hamper sizes. Sizes $4+1+1$: the packing is decided by which four scarves share a hamper, $\\binom{6}{4} = 15$. Sizes $3+2+1$: choose the trio, $\\binom{6}{3} = 20$, then the pair from the $3$ scarves left, $\\binom{3}{2} = 3$, giving $60$. Sizes $2+2+2$: lay the scarves out in a fixed order, pair the first one with one of the other $5$, then take the first scarf still unpaired and pair it with one of the $3$ still free, and the last two share a hamper, giving $5 \\times 3 = 15$; no division by anything is needed, since this construction meets each packing exactly once. Total $15 + 60 + 15 = 90$ ✓. A second route labels the hampers, counts, and then unlabels. Assignments of $6$ scarves to $3$ labeled hampers number $3^6 = 729$; by inclusion-exclusion the ones using all three hampers number $729 - 3 \\times 2^6 + 3 \\times 1^6 = 729 - 192 + 3 = 540$. Each unlabeled packing into three non-empty hampers arises from exactly $3! = 6$ labeled ones, so $540 \\div 6 = 90$ ✓. (The choice $540$ is LEAVING THE HAMPERS LABELED ✗; the choice $122$ is ALLOWING EMPTY HAMPERS, adding the $1$ one-hamper and $31$ two-hamper packings ✗; the choice $75$ is DROPPING THE $2+2+2$ CASE, keeping only $15 + 60$ ✗.)',
    },
    {
      q: 'Six different tasks are handed out to $4$ identical, unlabeled crews, and no crew may be left idle. Two assignments count as the same when they produce the same collection of task groups. How many assignments are there?',
      choices: ['$1560$', '$65$', '$187$', '$20$'],
      answer: 1,
      solution:
        'Six tasks split among four non-idle crews means group sizes $3+1+1+1$ or $2+2+1+1$. For $3+1+1+1$: the assignment is decided by which three tasks share a crew, $\\binom{6}{3} = 20$. For $2+2+1+1$: choose the two tasks that stand alone, $\\binom{6}{2} = 15$, then split the other four into two unlabeled pairs — pair the lowest task with one of the other $3$ and the remaining two are a pair, $3$ ways — giving $15 \\times 3 = 45$. Total $20 + 45 = 65$ ✓. Independently, label the crews and unlabel at the end. Assignments onto $4$ labeled crews with none idle number $4^6 - \\binom{4}{1}3^6 + \\binom{4}{2}2^6 - \\binom{4}{3}1^6 = 4096 - 2916 + 384 - 4 = 1560$, and each unlabeled assignment corresponds to $4! = 24$ labeled ones, so $1560 \\div 24 = 65$ ✓. (The choice $1560$ is LEAVING THE CREWS LABELED ✗; the choice $187$ is ALLOWING IDLE CREWS, adding the $1 + 31 + 90$ assignments that use fewer than four ✗; the choice $20$ is STOPPING AFTER THE $3+1+1+1$ CASE ✗.)',
    },
    {
      q: 'Six different photographs are sorted into $3$ identical, unlabeled envelopes, and an envelope may be left empty. Two sortings count as the same when they produce the same collection of non-empty envelopes. How many sortings are there?',
      choices: ['$122$', '$90$', '$729$', '$123$'],
      answer: 0,
      solution:
        'Split on how many envelopes end up used. One envelope: $1$ sorting. Two envelopes: a sorting is a split of the six photographs into two non-empty groups, and since the envelopes are identical each split is counted twice by the $2^6$ ways of marking photographs, so $\\frac{2^6 - 2}{2} = 31$. Three envelopes: sizes $4+1+1$ give $\\binom{6}{4} = 15$, sizes $3+2+1$ give $\\binom{6}{3}\\binom{3}{2} = 60$, and sizes $2+2+2$ give $5 \\times 3 = 15$, for $90$. Total $1 + 31 + 90 = 122$ ✓. A second route starts from labeled envelopes. Assignments to $3$ labeled envelopes number $3^6 = 729$, and they sort by how many envelopes are used: all three, $729 - 3 \\times 2^6 + 3 = 540$; exactly two, $\\binom{3}{2}(2^6 - 2) = 3 \\times 62 = 186$; exactly one, $3$. Those add to $540 + 186 + 3 = 729$, as they must. Stripping the labels divides each block by the number of ways to hang labels on the used envelopes: $540 \\div 3! = 90$, $186 \\div (3 \\times 2) = 31$, and $3 \\div 3 = 1$, so $90 + 31 + 1 = 122$ ✓. (The choice $90$ is DEMANDING THAT EVERY ENVELOPE BE USED ✗; the choice $729$ is LEAVING THE ENVELOPES LABELED, $3^6$ ✗; the choice $123$ is USING $2^6 \\div 2 = 32$ TWO-ENVELOPE SORTINGS and forgetting to drop the split that leaves one of the two empty ✗.)',
    },
  ],

  // slot 12 — paths held under the diagonal. Lane: a vineyard under a dashed
  // line / parentheses, the same count in a line / the paths that break out.
  [
    {
      q: 'A vineyard’s service tracks meet at the corners of a grid $6$ units wide and $6$ units tall, $A$ is the bottom-left corner, $B$ is the top-right corner, and every move goes one unit right or one unit up along a track. The dashed line on the vineyard plan runs straight from $A$ to $B$. How many routes from $A$ to $B$ never rise above that line? A route may touch the line, but every corner it visits must have height at most its distance from the left edge.',
      fig: diagGrid(6),
      choices: ['$924$', '$462$', '$132$', '$429$'],
      answer: 2,
      solution:
        'No formula knows about the dashed line, so count corner by corner, writing $0$ at every corner above it and otherwise adding the corner to the left and the corner below. The bottom row is all $1$’s. The row at height $1$, read from the corner on the line rightward, is $1, 2, 3, 4, 5, 6$; height $2$ gives $2, 5, 9, 14, 20$; height $3$ gives $5, 14, 28, 48$; height $4$ gives $14, 42, 90$; height $5$ gives $42, 132$; and $B$, at height $6$, gets $132$ ✓. A second route counts the bad routes by reflection. A bad route touches the line of corners one step above the dashed line, the corners with height exactly one more than their distance from the left edge. Take a bad route and reflect everything up to its first touch of that line across the line itself; the reflected piece starts at the mirror image of $A$, which is $1$ left and $1$ up from $A$, and the rest of the route is unchanged, so the result runs from that mirror point to $B$. The step is reversible, so bad routes match one-for-one with routes from the mirror point to $B$, which take $7$ steps right and $5$ steps up: $\\binom{12}{5} = 792$. All routes number $\\binom{12}{6} = 924$, so the good ones number $924 - 792 = 132$ ✓. (The choice $924$ is COUNTING EVERY ROUTE ✗; the choice $462$ is HALVING THE TOTAL, as though staying under and rising above were equally common ✗; the choice $429$ is THE COUNT FOR A $7$-BY-$7$ GRID, one size too large ✗.)',
    },
    {
      q: 'A string is written with $7$ left parentheses and $7$ right parentheses, $14$ characters in all; parentheses of the same kind are identical. In how many of these strings does every prefix contain at least as many left parentheses as right parentheses?',
      choices: ['$429$', '$3432$', '$1716$', '$132$'],
      answer: 0,
      solution:
        'Read the string as a walk: a left parenthesis is a step right, a right parenthesis a step up, so a string is a path across a grid $7$ blocks wide and $7$ blocks tall, and the prefix rule says every corner visited has height at most its distance from the left edge. Count corner by corner with $0$ above the diagonal. The bottom row is all $1$’s; height $1$ reads $1, 2, 3, 4, 5, 6, 7$; height $2$ reads $2, 5, 9, 14, 20, 27$; height $3$ reads $5, 14, 28, 48, 75$; height $4$ reads $14, 42, 90, 165$; height $5$ reads $42, 132, 297$; height $6$ reads $132, 429$; and the last corner gets $429$ ✓. Count the bad strings by reflection instead. A bad string has a first prefix in which the right parentheses lead by exactly one; flip every character of that prefix, leaving the rest alone. The flip turns the string into one with $8$ right and $6$ left parentheses, and it can be undone by flipping the same prefix back, so the bad strings correspond one-for-one with those: $\\binom{14}{6} = 3003$. All strings number $\\binom{14}{7} = 3432$, so the good ones number $3432 - 3003 = 429$ ✓. (The choice $3432$ is COUNTING EVERY STRING ✗; the choice $1716$ is HALVING THE TOTAL ✗; the choice $132$ is THE COUNT FOR SIX PAIRS of parentheses, one pair short ✗.)',
    },
    {
      q: 'The grid shown is $4$ blocks wide and $4$ blocks tall, $A$ is the bottom-left corner, $B$ is the top-right corner, and every step goes one block right or one block up along the streets. How many paths from $A$ to $B$ do rise above the dashed diagonal, that is, visit at least one corner whose height exceeds its distance from the left edge?',
      fig: diagGrid(4),
      choices: ['$14$', '$70$', '$35$', '$56$'],
      answer: 3,
      solution:
        'Count the offending paths directly by reflection. Rising above the diagonal means touching the line of corners whose height is exactly one more than their distance from the left edge. Given such a path, reflect the piece from $A$ up to its first touch of that line across the line; the reflected piece begins at the mirror image of $A$, the point $1$ left and $1$ up from $A$, and the rest of the path is untouched. Reflecting the same first-touch piece again undoes the move, so the offending paths correspond one-for-one with paths from that mirror point to $B$, which take $5$ steps right and $3$ steps up: $\\binom{8}{3} = 56$ ✓. Now count the well-behaved paths corner by corner and subtract. Writing $0$ above the diagonal, the bottom row is $1, 1, 1, 1, 1$; height $1$ reads $1, 2, 3, 4$ from the diagonal corner rightward; height $2$ reads $2, 5, 9$; height $3$ reads $5, 14$; and $B$ gets $14$. All paths number $\\binom{8}{4} = 70$, so $70 - 14 = 56$ rise above ✓. (The choice $14$ is COUNTING THE PATHS THAT STAY ON OR BELOW the diagonal, the opposite of the question ✗; the choice $70$ is COUNTING EVERY PATH ✗; the choice $35$ is HALVING THE TOTAL ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 5,
  challenge,
}
