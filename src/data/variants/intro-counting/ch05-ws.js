// Counting chapter 5 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$330$'.
//  - Every key was brute-forced in node before the stem was written: grid keys
//    by enumerating every monotone path on the grid exactly as it is drawn,
//    committee keys by enumerating subsets, pairing and unlabeled-container
//    keys by canonical set-partition enumeration (never a division by $k!$),
//    identical-item keys by enumerating full integer tuples. Pin deviations:
//    none — all thirty keys matched.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number; the most tempting wrong
//    answer’s trap is then named in CAPS, ending ✗.
//  - Conventions are settled in every stem: on a grid, $A$ is the bottom-left
//    corner, $B$ the top-right, and every step goes one block right or one
//    block up along the streets (a grid $w$ blocks wide has $w+1$ corners along
//    the bottom); people and objects are all different unless the stem says
//    identical; committees and teams are unordered, and "unnamed" means two
//    divisions that swap the groups count once; every distribution stem says
//    whether the items are identical, whether the containers are labeled, and
//    whether a container may be empty.

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

const worksheet = [
  // slot 1 — plain grid counts and the multiset arrangement behind them.
  //          Lanes: 7 by 4 grid -> 330; row of 12 chairs -> 495;
  //          derived: 8 by 3 grid, last step up -> 45.
  [
    {
      q: 'A street grid is $7$ blocks wide and $4$ blocks tall. Corner $A$ is the bottom-left corner and corner $B$ is the top-right corner, and every step goes one block right or one block up along the streets. How many paths run from $A$ to $B$?',
      answer: '$330$',
      solution:
        'A path is a word. Every path uses exactly $7$ steps $R$ and $4$ steps $U$ in some order, and every order is a different path, so the word has $11$ letters and the path is settled once you choose which $4$ of the $11$ slots hold a $U$: $\\binom{11}{4} = 330$ ✓. Second route, corner by corner. Write beside each corner the number of paths from $A$ to it. The bottom row and the left column are all $1$, and every other corner takes the sum of its left neighbor and its lower neighbor. Row by row the counts read $1, 1, 1, 1, 1, 1, 1, 1$; then $1, 2, 3, 4, 5, 6, 7, 8$; then $1, 3, 6, 10, 15, 21, 28, 36$; then $1, 4, 10, 20, 35, 56, 84, 120$; and finally $1, 5, 15, 35, 70, 126, 210, 330$, so $B$ carries $330$ ✓. COUNTING CORNERS INSTEAD OF BLOCKS turns the grid into $8$ steps right and $5$ steps up and gives $\\binom{13}{5} = 1287$ ✗.',
    },
    {
      q: 'A row of $12$ chairs is set out using $4$ identical folding chairs and $8$ identical stacking chairs. Chairs of the same kind cannot be told apart, and the row is read from left to right. How many different rows are possible?',
      answer: '$495$',
      solution:
        'Choose the positions. The row is settled once you say which $4$ of the $12$ positions hold folding chairs, since the chairs within a kind are interchangeable: $\\binom{12}{4} = 495$ ✓. Second route, gaps. Set out the $8$ stacking chairs first; they make one row, and they create $9$ gaps — one before the first, one after the last, and $7$ between neighbors. Now decide how many folding chairs sit in each gap: a list of $9$ whole numbers adding to $4$, which is $4$ stars and $8$ bars, $\\binom{12}{8} = 495$ ✓. TREATING THE FOUR FOLDING CHAIRS AS DIFFERENT gives $12 \\times 11 \\times 10 \\times 9 = 11880$ ✗.',
    },
    {
      q: 'A street grid is $8$ blocks wide and $3$ blocks tall, with $A$ at the bottom-left corner and $B$ at the top-right corner; every step goes one block right or one block up. How many of the paths from $A$ to $B$ finish with a step up?',
      answer: '$45$',
      solution:
        'Peel off the last step. A path that ends going up must arrive at the corner one block below $B$, which is $8$ right and $2$ up from $A$; from there the final step is forced. Paths from $A$ to that corner use $8$ steps $R$ and $2$ steps $U$: $\\binom{10}{2} = 45$ ✓. Second route, split the whole family by its last letter. Every path ends with $U$ or with $R$, so count all of them and remove the ones ending in $R$. All paths: $\\binom{11}{3} = 165$. A path ending in $R$ arrives at the corner one block left of $B$, which is $7$ right and $3$ up, and there are $\\binom{10}{3} = 120$ of those. So $165 - 120 = 45$ ✓. READING THE LAST STEP AS A STEP RIGHT counts the other family and gives $120$ ✗.',
    },
  ],

  // slot 2 — paths forced through, or kept away from, one marked corner.
  //          Lanes: 6 by 3 through P(3,2) -> 40; 6 by 5 through S(3,2) -> 200;
  //          derived: 5 by 5 avoiding P(1,2) -> 147.
  [
    {
      q: 'The grid shown is $6$ blocks wide and $3$ blocks tall, with $A$ at the bottom-left and $B$ at the top-right; every step goes one block right or one block up. A walker must stop at the marked corner $P$, which is $3$ blocks right and $2$ blocks up from $A$. How many routes from $A$ to $B$ are there?',
      fig: grid(6, 3, { marks: [{ p: [3, 2], label: 'P' }] }),
      answer: '$40$',
      solution:
        'Cut the trip at $P$. From $A$ to $P$ is $3$ right and $2$ up, so $\\binom{5}{2} = 10$ ways. From $P$ to $B$ is $3$ right and $1$ up, so $\\binom{4}{1} = 4$ ways. Any first half can be followed by any second half: $10 \\times 4 = 40$ ✓. Second route, corner by corner on a trimmed grid. A route that visits $P$ can only use corners that lie weakly below-left of $P$ or weakly above-right of $P$; erase every other corner and sweep once from $A$. The bottom row gives $1, 1, 1, 1$ and stops; the next row $1, 2, 3, 4$; the row at height $2$ reads $1, 3, 6, 10, 10, 10, 10$; the top row starts at $P$’s column with $10$ and then reads $20, 30, 40$. So $B$ carries $40$ ✓. ADDING THE TWO HALVES instead of multiplying gives $10 + 4 = 14$ ✗.',
    },
    {
      q: 'A window-washing rig crosses a grid of cables that is $6$ panels east and $5$ panels north. It starts at the southwest corner $A$, finishes at the northeast corner $B$, and each move takes it one panel east or one panel north along the cables. On the way it must collect supplies at the platform $S$, which is $3$ panels east and $2$ panels north of $A$. How many routes are possible?',
      fig: grid(6, 5, { marks: [{ p: [3, 2], label: 'S' }] }),
      answer: '$200$',
      solution:
        'Cut the trip at $S$. From $A$ to $S$ is $3$ east and $2$ north: $\\binom{5}{2} = 10$ routes. From $S$ to $B$ is $3$ east and $3$ north: $\\binom{6}{3} = 20$ routes. Multiply, since the halves are chosen independently: $10 \\times 20 = 200$ ✓. Second route, remove the routes that skip $S$. All routes use $6$ east moves and $5$ north moves: $\\binom{11}{5} = 462$. Now count the routes that never touch $S$ by sweeping corner by corner with a $0$ written at $S$; the top row of that sweep reads $1, 6, 21, 46, 86, 152, 262$, so $262$ routes miss the platform. That leaves $462 - 262 = 200$ ✓. IGNORING THE REQUIRED STOP and reporting every route across the cables gives $462$ ✗.',
    },
    {
      q: 'The grid shown is $5$ blocks wide and $5$ blocks tall, with $A$ at the bottom-left and $B$ at the top-right; every step goes one block right or one block up. How many paths from $A$ to $B$ never touch the marked corner $P$, which sits $1$ block right and $2$ blocks up from $A$?',
      fig: grid(5, 5, { marks: [{ p: [1, 2], label: 'P' }] }),
      answer: '$147$',
      solution:
        'Count everything, then throw out the bad paths. All paths use $5$ steps $R$ and $5$ steps $U$: $\\binom{10}{5} = 252$. A path through $P$ is a first half from $A$ to $P$ ($1$ right, $2$ up, so $\\binom{3}{1} = 3$ ways) followed by a second half from $P$ to $B$ ($4$ right, $3$ up, so $\\binom{7}{3} = 35$ ways), giving $3 \\times 35 = 105$ paths through $P$. The good paths number $252 - 105 = 147$ ✓. Second route, corner by corner with $P$ erased. Write $0$ at $P$ and let every other corner be the sum of its left and lower neighbors. The rows read $1, 1, 1, 1, 1, 1$; then $1, 2, 3, 4, 5, 6$; then $1, 0, 3, 7, 12, 18$; then $1, 1, 4, 11, 23, 41$; then $1, 2, 6, 17, 40, 81$; and the top row $1, 3, 9, 26, 66, 147$ ✓. ANSWERING $105$ reports the paths that DO run through $P$, the opposite family ✗.',
    },
  ],

  // slot 3 — committees with a "one of each kind" floor.
  //          Lanes: 5 from 7J+5S, both kinds -> 770; 4 snacks from 6F+3C -> 111;
  //          derived: 4 from 5B+4G with at least 2 girls -> 81.
  [
    {
      q: 'A $5$-person committee is chosen from $7$ juniors and $5$ seniors, all $12$ students different, and a committee is an unordered set of people. The committee must include at least one junior and at least one senior. How many committees are possible?',
      answer: '$770$',
      solution:
        'Count all, subtract the lopsided ones. Any $5$ of the $12$ students: $\\binom{12}{5} = 792$. The committees that break the rule are the all-junior ones, $\\binom{7}{5} = 21$, and the all-senior one, $\\binom{5}{5} = 1$; a committee cannot be both. So $792 - 21 - 1 = 770$ ✓. Second route, casework on the number of juniors, which must run from $1$ to $4$: $\\binom{7}{1}\\binom{5}{4} = 35$, $\\binom{7}{2}\\binom{5}{3} = 210$, $\\binom{7}{3}\\binom{5}{2} = 350$, and $\\binom{7}{4}\\binom{5}{1} = 175$. Adding: $35 + 210 + 350 + 175 = 770$ ✓. SUBTRACTING ONLY THE ALL-JUNIOR COMMITTEES forgets that five seniors can also fill the room and gives $792 - 21 = 771$ ✗.',
    },
    {
      q: 'A snack box holds $4$ items chosen from $6$ different fruits and $3$ different crackers, all nine items distinct and at most one of each item; the box is an unordered selection, so only which items are inside matters. The box must contain at least one fruit and at least one cracker. How many boxes are possible?',
      answer: '$111$',
      solution:
        'Count all, subtract the lopsided ones. Any $4$ of the $9$ items: $\\binom{9}{4} = 126$. All-fruit boxes: $\\binom{6}{4} = 15$. All-cracker boxes are impossible, since only $3$ crackers exist. So $126 - 15 = 111$ ✓. Second route, casework on the number of crackers, which runs from $1$ to $3$: $\\binom{3}{1}\\binom{6}{3} = 60$, $\\binom{3}{2}\\binom{6}{2} = 45$, and $\\binom{3}{3}\\binom{6}{1} = 6$. Adding: $60 + 45 + 6 = 111$ ✓. RESERVING ONE FRUIT AND ONE CRACKER FIRST and then filling the last two slots freely counts the same box many times over — $6 \\times 3 \\times \\binom{7}{2} = 378$ ✗.',
    },
    {
      q: 'A $4$-person committee is chosen from $5$ boys and $4$ girls, all nine students different, and a committee is an unordered set. In how many of the committees are there at least $2$ girls?',
      answer: '$81$',
      solution:
        'Casework on the number of girls, which must be $2$, $3$, or $4$: $\\binom{4}{2}\\binom{5}{2} = 6 \\times 10 = 60$, then $\\binom{4}{3}\\binom{5}{1} = 4 \\times 5 = 20$, then $\\binom{4}{4}\\binom{5}{0} = 1$. Adding: $60 + 20 + 1 = 81$ ✓. Second route, remove the girl-poor committees. All committees: $\\binom{9}{4} = 126$. Committees with no girl: $\\binom{5}{4} = 5$. Committees with exactly one girl: $\\binom{4}{1}\\binom{5}{3} = 4 \\times 10 = 40$. So $126 - 5 - 40 = 81$ ✓. READING "at least $2$" AS "exactly $2$" stops at the first case and gives $60$ ✗.',
    },
  ],

  // slot 4 — one member forced in, one forced out.
  //          Lanes: 6 from 13 -> 462; 3 songs from 10 -> 28;
  //          reversed: solve for the group size n -> 15.
  [
    {
      q: 'A $6$-person committee is chosen from $13$ people, all different, and a committee is an unordered set. Ines must serve on it and Jonas must not. How many committees are possible?',
      answer: '$462$',
      solution:
        'Settle the two named people first. Seating Ines uses one of the six chairs, and barring Jonas removes one of the candidates, so $5$ chairs must be filled from the $11$ people who are neither Ines nor Jonas: $\\binom{11}{5} = 462$ ✓. Second route, start from the committees that contain Ines and prune. Committees containing Ines: fill the other $5$ chairs from the remaining $12$ people, $\\binom{12}{5} = 792$. Among those, the ones that also contain Jonas have $4$ chairs left for the other $11$ people, $\\binom{11}{4} = 330$. Removing them: $792 - 330 = 462$ ✓. SEATING INES BUT FORGETTING TO BAR JONAS leaves $\\binom{12}{5} = 792$ ✗.',
    },
    {
      q: 'A set list of $3$ songs is chosen from $10$ different songs; the set list is an unordered set of songs. The anthem must be on the set list and the ballad must be left off. How many set lists are possible?',
      answer: '$28$',
      solution:
        'Settle the two named songs first. The anthem takes one of the three places and the ballad is out of the running, so the other $2$ places are filled from the remaining $8$ songs: $\\binom{8}{2} = 28$ ✓. Second route, work down from every set list. All set lists: $\\binom{10}{3} = 120$. Those without the anthem: $\\binom{9}{3} = 84$, so $120 - 84 = 36$ contain the anthem. Of those $36$, the ones that also carry the ballad have one place left for the other $8$ songs, $\\binom{8}{1} = 8$. So $36 - 8 = 28$ ✓. DROPPING THE BALLAD RULE and filling two places from the other nine songs gives $\\binom{9}{2} = 36$ ✗.',
    },
    {
      q: 'A $5$-person committee is chosen from $n$ people, all different, and a committee is an unordered set. Lena must serve on it and Omar must not, and there are exactly $715$ possible committees. What is $n$?',
      answer: '$15$',
      solution:
        'Reduce to a plain choice. Seating Lena and barring Omar leaves $4$ chairs to be filled from the $n - 2$ people who are neither of them, so $\\binom{n-2}{4} = 715$. Testing upward, $\\binom{12}{4} = 495$ and $\\binom{13}{4} = \\frac{13 \\times 12 \\times 11 \\times 10}{24} = 715$, and $\\binom{14}{4} = 1001$ is already too big, so $n - 2 = 13$ and $n = 15$ ✓. Second route, build $715$ by a different identity. Line the $m$ available people up in order and sort the $4$-person groups by their highest-ranked member: if that member sits in position $k$, the other three come from the $k-1$ people below, giving $\\binom{k-1}{3}$ groups. Summing for $m = 13$: $1 + 4 + 10 + 20 + 35 + 56 + 84 + 120 + 165 + 220 = 715$, so $13$ people must remain and the group holds $13 + 2 = 15$ ✓. SOLVING $\\binom{n}{4} = 715$ forgets that Lena and Omar were already spoken for and answers $n = 13$ ✗.',
    },
  ],

  // slot 5 — perfect matchings into unnamed pairs, with forbidden partners.
  //          Lanes: 6 friends, one banned pair -> 12; 10 socks -> 840;
  //          derived: 8 friends, two banned pairs -> 78.
  [
    {
      q: 'Six friends split into three pairs for a card game. The pairs have no names and no table numbers, so a split is just a way of matching the six people up. Ann and Bo must not be partners. In how many ways can the six split?',
      answer: '$12$',
      solution:
        'Count all matchings, remove the bad ones. To match six people, pick a partner for the first person ($5$ ways), then a partner for the lowest-numbered person still free ($3$ ways), and the last two are forced: $5 \\times 3 \\times 1 = 15$ matchings. Those with Ann and Bo together are matchings of the other four, $3 \\times 1 = 3$. So $15 - 3 = 12$ ✓. Second route, build the split directly with no subtraction. Ann may partner any of the four people who are not Bo: $4$ choices. Bo is still unmatched, and he takes any of the three people left: $3$ choices. The final two are forced into a pair: $1$ way. That is $4 \\times 3 = 12$ ✓. TREATING "Ann with Bo" AS A SINGLE BAD SPLIT rather than the three matchings it belongs to gives $15 - 1 = 14$ ✗.',
    },
    {
      q: 'Ten different socks are matched into five pairs. The pairs are unnamed — a pairing is just a way of matching the ten socks up, two at a time. In how many pairings are two particular socks NOT matched with each other?',
      answer: '$840$',
      solution:
        'Count all pairings, remove the bad ones. Matching ten socks: give the first sock a partner ($9$ ways), then the lowest-numbered free sock a partner ($7$ ways), and so on: $9 \\times 7 \\times 5 \\times 3 \\times 1 = 945$. Pairings that match the two particular socks are pairings of the other eight, $7 \\times 5 \\times 3 \\times 1 = 105$. So $945 - 105 = 840$ ✓. Second route, build the pairing directly. Sock $1$ takes any partner except sock $2$: $8$ choices. Sock $2$ is still free and takes any of the $7$ socks left: $7$ choices. The remaining six socks pair up in $5 \\times 3 \\times 1 = 15$ ways. That is $8 \\times 7 \\times 15 = 840$ ✓. FORGETTING THE PAIRS ARE UNNAMED — computing $\\binom{10}{2}\\binom{8}{2}\\binom{6}{2}\\binom{4}{2}\\binom{2}{2} = 113400$ and subtracting the $12600$ bad ones — counts every pairing $5! = 120$ times and gives $100800$ ✗.',
    },
    {
      q: 'Eight friends split into four pairs. The pairs have no names and no table numbers. Ann must not be paired with Bo, and Cy must not be paired with Di. In how many ways can the eight split?',
      answer: '$78$',
      solution:
        'Inclusion-exclusion. All matchings of eight people: $7 \\times 5 \\times 3 \\times 1 = 105$. Those with Ann and Bo together are matchings of the other six, $5 \\times 3 \\times 1 = 15$; those with Cy and Di together are also $15$. Those with both bad pairs are matchings of the remaining four, $3 \\times 1 = 3$, and they were removed twice, so add them back: $105 - 15 - 15 + 3 = 78$ ✓. Second route, casework on Ann’s partner, with no subtraction at the end. If Ann partners Cy or Di ($2$ choices), the Cy-Di rule can no longer be broken, and the remaining six people match freely: $2 \\times 15 = 30$. If Ann partners one of the four friends who are neither Bo, Cy, nor Di ($4$ choices), the six left over are Bo, Cy, Di and three others, and they match in $15$ ways of which the $3$ with Cy and Di together are barred: $4 \\times 12 = 48$. Ann cannot partner Bo. Total $30 + 48 = 78$ ✓. SUBTRACTING BOTH BAD CASES WITHOUT ADDING BACK THE OVERLAP gives $105 - 15 - 15 = 75$ ✗.',
    },
  ],

  // slot 6 — identical items into labeled containers with a floor on one.
  //          Lanes: 10 bricks, bin A >= 3 -> 36; 10 pastries from 3 kinds -> 45;
  //          reversed: solve for the number of marbles -> 17.
  [
    {
      q: 'Ten identical bricks are stacked into $3$ bins labeled $A$, $B$, and $C$. The bricks cannot be told apart, the bins are different, bin $A$ must receive at least $3$ bricks, and bins $B$ and $C$ may stay empty. How many stackings are possible?',
      answer: '$36$',
      solution:
        'Pay the floor first. Drop $3$ bricks into bin $A$ before anything else; the remaining $7$ identical bricks then go anywhere among the three bins with no restriction, which is $7$ stars and $2$ bars: $\\binom{9}{2} = 36$ ✓. Second route, casework on bin $A$. If bin $A$ holds $a$ bricks, the other $10 - a$ bricks split between $B$ and $C$ in $10 - a + 1$ ways. Running $a$ from $3$ to $10$: $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$ ✓. IGNORING THE FLOOR ON BIN $A$ and distributing all ten bricks freely gives $\\binom{12}{2} = 66$ ✗.',
    },
    {
      q: 'A shopper buys $10$ pastries chosen from $3$ kinds. Pastries of the same kind are identical, any number of each kind may be taken including none, and at least $2$ of the ten must be croissants. How many purchases are possible?',
      answer: '$45$',
      solution:
        'Pay the floor first. Buy $2$ croissants at the start; the other $8$ pastries are then chosen freely from the $3$ kinds, which is $8$ stars and $2$ bars: $\\binom{10}{2} = 45$ ✓. Second route, remove the croissant-poor purchases. All purchases of $10$ pastries from $3$ kinds: $\\binom{12}{2} = 66$. Purchases with no croissant use $2$ kinds for all ten pastries: $11$ of them. Purchases with exactly one croissant spread $9$ pastries over the other $2$ kinds: $10$ of them. So $66 - 11 - 10 = 45$ ✓. READING "at least $2$" AS "exactly $2$" spreads the other eight over the two remaining kinds and gives $9$ ✗.',
    },
    {
      q: 'Identical marbles are dropped into $3$ cups labeled $A$, $B$, and $C$. The marbles cannot be told apart, the cups are different, cup $A$ must get at least $2$ marbles, and cups $B$ and $C$ may be left empty. There are exactly $136$ different results. How many marbles are there?',
      answer: '$17$',
      solution:
        'Pay the floor, then solve. With $n$ marbles, put $2$ in cup $A$ first; the other $n - 2$ go anywhere among $3$ cups, giving $\\binom{n-2+2}{2} = \\binom{n}{2}$ results. Setting $\\binom{n}{2} = 136$ gives $n(n-1) = 272$, and $17 \\times 16 = 272$, so $n = 17$ ✓. Second route, work from the unrestricted count downward. With $n$ marbles and no floor there are $\\binom{n+2}{2}$ results; the barred ones are those with $0$ or exactly $1$ marble in cup $A$, numbering $(n + 1) + n = 2n + 1$. Trying $n = 17$: $\\binom{19}{2} = 171$ and $2(17) + 1 = 35$, and $171 - 35 = 136$ ✓. SOLVING $\\binom{n+2}{2} = 136$, that is, forgetting cup $A$’s floor, gives $n + 2 = 17$ and the answer $15$ ✗.',
    },
  ],

  // slot 7 — different items into labeled boxes with a count fixed on one box.
  //          Lanes: 6 letters, exactly 2 in box 1 -> 240; 5 students, 3 in club A -> 90;
  //          derived: 5 letters, box 1 gets at least 3 -> 51.
  [
    {
      q: 'Six different letters are dropped into $3$ mailboxes labeled $1$, $2$, and $3$. The letters are all different, the mailboxes are different, exactly $2$ letters must land in mailbox $1$, and mailboxes $2$ and $3$ may receive any number of letters, including none. In how many ways can this be done?',
      answer: '$240$',
      solution:
        'Fill the special box, then the rest. Choose the $2$ letters for mailbox $1$: $\\binom{6}{2} = 15$. Each of the other $4$ letters then independently picks mailbox $2$ or mailbox $3$, and no other rule applies: $2^4 = 16$. Multiply: $15 \\times 16 = 240$ ✓. Second route, casework on the three box sizes. If the boxes hold $2$, $j$, and $4 - j$ letters, the number of ways to hand out six different letters in those amounts is $\\frac{6!}{2!\\,j!\\,(4-j)!}$. Running $j$ from $0$ to $4$ gives $15, 60, 90, 60, 15$, and $15 + 60 + 90 + 60 + 15 = 240$ ✓. LETTING THE OTHER FOUR LETTERS PICK ANY OF THE THREE MAILBOXES breaks the "exactly $2$" rule and gives $15 \\times 3^4 = 1215$ ✗.',
    },
    {
      q: 'Each of $5$ different students joins one of $4$ clubs labeled $A$, $B$, $C$, and $D$. The students are all different, the clubs are different, exactly $3$ students must join club $A$, and the other clubs may end up with no members. In how many ways can this happen?',
      answer: '$90$',
      solution:
        'Fill the special club, then the rest. Choose the $3$ students for club $A$: $\\binom{5}{3} = 10$. Each of the other $2$ students then independently picks one of clubs $B$, $C$, $D$: $3^2 = 9$. Multiply: $10 \\times 9 = 90$ ✓. Second route, casework on how the four club sizes come out. Club $A$ holds $3$, and the other two students are spread over $B$, $C$, $D$. If they land in the same club, the size list is $3, 2, 0, 0$ in one of $3$ arrangements, each giving $\\frac{5!}{3!\\,2!} = 10$ ways, so $30$. If they land in different clubs, the size list is $3, 1, 1, 0$ in one of $3$ arrangements, each giving $\\frac{5!}{3!\\,1!\\,1!} = 20$ ways, so $60$. Total $30 + 60 = 90$ ✓. LETTING THE OTHER TWO STUDENTS PICK ANY OF THE FOUR CLUBS allows a fourth student into club $A$ and gives $10 \\times 4^2 = 160$ ✗.',
    },
    {
      q: 'Five different letters are dropped into $3$ mailboxes labeled $1$, $2$, and $3$. The letters are all different, the mailboxes are different, and every mailbox may receive any number of letters, including none. In how many ways does mailbox $1$ receive at least $3$ letters?',
      answer: '$51$',
      solution:
        'Casework on how full mailbox $1$ gets. Exactly $3$: choose them, $\\binom{5}{3} = 10$, and each remaining letter picks mailbox $2$ or $3$, $2^2 = 4$, giving $40$. Exactly $4$: $\\binom{5}{4} = 5$ times $2^1 = 2$, giving $10$. Exactly $5$: $1$ way. Adding: $40 + 10 + 1 = 51$ ✓. Second route, remove the light cases from every possible drop. Each of the $5$ letters picks any of $3$ mailboxes: $3^5 = 243$. Mailbox $1$ empty: $2^5 = 32$. Mailbox $1$ holding exactly one letter: $\\binom{5}{1} \\times 2^4 = 5 \\times 16 = 80$. Exactly two: $\\binom{5}{2} \\times 2^3 = 10 \\times 8 = 80$. So $243 - 32 - 80 - 80 = 51$ ✓. STOPPING AT EXACTLY THREE LETTERS drops the fuller mailboxes and gives $40$ ✗.',
    },
  ],

  // slot 8 — two identical, unlabeled containers.
  //          Lanes: 7 different games, none empty -> 63; 9 identical stones -> 4;
  //          derived: 6 different puzzles, empty allowed -> 32.
  [
    {
      q: 'Seven different games are divided between two identical, unlabeled boxes, and neither box may be empty. The boxes cannot be told apart, so two divisions that swap the contents of the boxes count as the same division. How many divisions are there?',
      answer: '$63$',
      solution:
        'Label the boxes, then undo the labeling. If the boxes were marked "left" and "right", each game would choose one of them: $2^7 = 128$ assignments, of which the $2$ that leave a box empty are barred, leaving $126$. Swapping the labels turns every allowed assignment into a different allowed assignment, so the $126$ fall into pairs that describe the same unlabeled division: $126 \\div 2 = 63$ ✓. Second route, casework on the sizes, with no division at any point. The two box sizes must be $1$ and $6$, $2$ and $5$, or $3$ and $4$. A $1$-and-$6$ division is named by the lone game, $\\binom{7}{1} = 7$; a $2$-and-$5$ division by the smaller box, $\\binom{7}{2} = 21$; a $3$-and-$4$ division by the box of three, $\\binom{7}{3} = 35$. Since the two sizes always differ, no division is counted twice: $7 + 21 + 35 = 63$ ✓. FORGETTING TO BAR THE EMPTY BOX gives $2^7 \\div 2 = 64$ ✗.',
    },
    {
      q: 'Nine identical stones are divided between two identical, unlabeled bowls, and neither bowl may be empty. The stones cannot be told apart and neither can the bowls, so only the two counts matter and swapping them changes nothing. How many divisions are there?',
      answer: '$4$',
      solution:
        'List the size pairs. Since the stones are identical and the bowls are interchangeable, a division is just an unordered pair of positive counts adding to $9$: $1$ and $8$, $2$ and $7$, $3$ and $6$, $4$ and $5$. Writing the smaller count first exhausts the list, so there are $4$ ✓. Second route, label the bowls and undo it. With bowls marked "left" and "right", the left bowl may hold $1$ through $8$ stones and the right bowl takes the rest: $8$ labeled divisions. Swapping the labels pairs these up, and no labeled division is its own mirror because $9$ is odd and the two counts can never be equal: $8 \\div 2 = 4$ ✓. TREATING THE BOWLS AS LABELED reports the $8$ labeled divisions ✗.',
    },
    {
      q: 'Six different puzzles are divided between two identical, unlabeled bags, and this time a bag may be left empty. The bags cannot be told apart, so two divisions that swap the contents of the bags count as the same division. How many divisions are there?',
      answer: '$32$',
      solution:
        'Casework on the sizes. The two bag sizes may be $0$ and $6$, $1$ and $5$, $2$ and $4$, or $3$ and $3$. The first three are named by the smaller bag: $1$, $\\binom{6}{1} = 6$, and $\\binom{6}{2} = 15$. The $3$-and-$3$ case is the only one where the two bags have equal size, so naming one bag counts each division twice: $\\binom{6}{3} \\div 2 = 20 \\div 2 = 10$. Adding: $1 + 6 + 15 + 10 = 32$ ✓. Second route, anchor on one puzzle and never divide. Call the bag holding puzzle $1$ "the first bag" — this is a genuine name, since the puzzles are all different, so it settles the labeling for free. Each of the other $5$ puzzles then chooses the first bag or the other bag, with nothing to forbid: $2^5 = 32$ ✓. ANSWERING $31$ reports the count when neither bag may be empty and loses the division that leaves one bag bare ✗.',
    },
  ],

  // slot 9 — two closed corners: avoid both, or hit at least one.
  //          Lanes: 6 by 4 avoid (1,1) and (4,3) -> 53; rook lattice 6 by 3 -> 38;
  //          derived: 6 by 5, run into at least one -> 312.
  [
    {
      q: 'The grid shown is $6$ blocks wide and $4$ blocks tall, with $A$ at the bottom-left and $B$ at the top-right; every step goes one block right or one block up. The two corners marked ✕ are closed: the one $1$ block right and $1$ block up from $A$, and the one $4$ blocks right and $3$ blocks up from $A$. How many paths from $A$ to $B$ avoid both closed corners?',
      fig: grid(6, 4, { closed: [[1, 1], [4, 3]] }),
      answer: '$53$',
      solution:
        'Inclusion-exclusion. All paths use $6$ steps $R$ and $4$ steps $U$: $\\binom{10}{4} = 210$. Through the lower ✕: $\\binom{2}{1}\\binom{8}{3} = 2 \\times 56 = 112$. Through the upper ✕: $\\binom{7}{3}\\binom{3}{1} = 35 \\times 3 = 105$. Through both, in that order: $2 \\times \\binom{5}{2} \\times 3 = 2 \\times 10 \\times 3 = 60$, and those were removed twice, so add them back once: $210 - 112 - 105 + 60 = 53$ ✓. Second route, corner by corner with $0$ written at each ✕. The rows read $1, 1, 1, 1, 1, 1, 1$; then $1, 0, 1, 2, 3, 4, 5$; then $1, 1, 2, 4, 7, 11, 16$; then $1, 2, 4, 8, 0, 11, 27$; and the top row $1, 3, 7, 15, 15, 26, 53$ ✓. AVOIDING ONLY THE LOWER ✕ gives $210 - 112 = 98$ ✗.',
    },
    {
      q: 'A rook starts on the bottom-left square of a board with $7$ columns and $4$ rows of squares and moves one square right or one square up per move until it reaches the top-right square. Two squares hold pieces and may not be entered: the square $1$ right and $2$ up from the start, and the square $3$ right and $2$ up. The figure shows the lattice of the rook’s moves, with $A$ the starting square, $B$ the finishing square, and each ✕ a square it may not enter. How many move sequences are possible?',
      fig: grid(6, 3, { closed: [[1, 2], [3, 2]] }),
      answer: '$38$',
      solution:
        'Corner by corner. The rook makes $6$ rightward moves and $3$ upward moves in all, so its lattice of squares is $6$ steps wide and $3$ steps tall. Write $0$ at each blocked square and let every other square carry the sum of the square to its left and the square below it. The rows read $1, 1, 1, 1, 1, 1, 1$; then $1, 2, 3, 4, 5, 6, 7$; then $1, 0, 3, 0, 5, 11, 18$; and the top row $1, 1, 4, 4, 9, 20, 38$ ✓. Second route, inclusion-exclusion on the two blocked squares. All sequences: $\\binom{9}{3} = 84$. Through the left blocked square: $\\binom{3}{1}\\binom{6}{1} = 3 \\times 6 = 18$. Through the right one: $\\binom{5}{2}\\binom{4}{1} = 10 \\times 4 = 40$. Through both: the stretch between them is $2$ rightward moves and nothing else, $1$ way, so $3 \\times 1 \\times 4 = 12$. Then $84 - 18 - 40 + 12 = 38$ ✓. SUBTRACTING BOTH BLOCKED SQUARES WITHOUT ADDING BACK THE OVERLAP gives $84 - 18 - 40 = 26$ ✗.',
    },
    {
      q: 'The grid shown is $6$ blocks wide and $5$ blocks tall, with $A$ at the bottom-left and $B$ at the top-right; every step goes one block right or one block up. The two corners marked ✕ are closed: the one $2$ blocks right and $2$ blocks up from $A$, and the one $4$ blocks right and $3$ blocks up from $A$. How many paths from $A$ to $B$ run into at least one of the closed corners?',
      fig: grid(6, 5, { closed: [[2, 2], [4, 3]] }),
      answer: '$312$',
      solution:
        'Count the ruined paths straight on. Through the lower ✕: $\\binom{4}{2}\\binom{7}{3} = 6 \\times 35 = 210$. Through the upper ✕: $\\binom{7}{3}\\binom{4}{2} = 35 \\times 6 = 210$. A path can hit both, and those were counted twice: from $A$ to the lower ✕ is $6$ ways, between the two ✕’s is $2$ right and $1$ up, $\\binom{3}{1} = 3$ ways, and from the upper ✕ to $B$ is $6$ ways, so $6 \\times 3 \\times 6 = 108$. That gives $210 + 210 - 108 = 312$ ✓. Second route, count the clear paths and subtract. All paths: $\\binom{11}{5} = 462$. Sweeping corner by corner with $0$ at each ✕, the rows read $1, 1, 1, 1, 1, 1, 1$; then $1, 2, 3, 4, 5, 6, 7$; then $1, 3, 0, 4, 9, 15, 22$; then $1, 4, 4, 8, 0, 15, 37$; then $1, 5, 9, 17, 17, 32, 69$; and the top row $1, 6, 15, 32, 49, 81, 150$. So $150$ paths stay clear and $462 - 150 = 312$ are ruined ✓. ADDING THE TWO THROUGH-COUNTS WITHOUT REMOVING THE OVERLAP counts the $108$ double offenders twice and gives $420$ ✗.',
    },
  ],

  // slot 10 — identical items with both a floor and a ceiling.
  //          Lanes: 10 ornaments on 4 hooks, 1 to 4 -> 44; triples summing to 11 -> 12;
  //          derived: 12 ornaments on 4 hooks, 2 to 5 -> 31.
  [
    {
      q: 'Ten identical ornaments are hung on $4$ hooks labeled $1$ through $4$. The ornaments cannot be told apart, the hooks are different, every hook must hold at least $1$ ornament, and no hook may hold more than $4$. How many arrangements are there?',
      answer: '$44$',
      solution:
        'Pay the floor, then remove the overloads. Hang one ornament on each hook first; the remaining $6$ are spread over the $4$ hooks with each hook taking at most $3$ extra. Ignoring the ceiling, that is $6$ stars and $3$ bars, $\\binom{9}{3} = 84$. An overloaded hook takes $4$ or more extra; hand it $4$ up front and spread the remaining $2$ freely, $\\binom{5}{3} = 10$ ways, and any of the $4$ hooks could be the culprit, so $4 \\times 10 = 40$. Two hooks cannot both overload, since that would need $8$ extra ornaments and only $6$ exist, so nothing is double-subtracted: $84 - 40 = 44$ ✓. Second route, list the size patterns. The four counts are whole numbers from $1$ to $4$ adding to $10$: the patterns are $4, 4, 1, 1$ with $\\frac{4!}{2!\\,2!} = 6$ orderings; $4, 3, 2, 1$ with $4! = 24$; $4, 2, 2, 2$ with $4$; $3, 3, 3, 1$ with $4$; and $3, 3, 2, 2$ with $6$. Adding: $6 + 24 + 4 + 4 + 6 = 44$ ✓. SUBTRACTING FOR HOOKS THAT TAKE FIVE OR MORE EXTRA instead of four or more misreads the ceiling and gives $84 - 16 = 68$ ✗.',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of integers satisfy $a + b + c = 11$ with $2 \\le a \\le 5$, $2 \\le b \\le 5$, and $2 \\le c \\le 5$? The triples $(2, 4, 5)$ and $(5, 4, 2)$ are different.',
      answer: '$12$',
      solution:
        'Shift, then remove the overshoots. Let $x = a - 2$, $y = b - 2$, $z = c - 2$, so $x + y + z = 5$ with each of $x, y, z$ between $0$ and $3$. Ignoring the ceilings there are $\\binom{7}{2} = 21$ triples. If one of them is $4$ or more, hand it $4$ and spread the last $1$ freely, $\\binom{3}{2} = 3$ ways, and any of the $3$ letters could be the culprit: $3 \\times 3 = 9$. Two cannot overshoot at once, since that needs $8 > 5$. So $21 - 9 = 12$ ✓. Second route, casework on $a$. If $a = 2$ then $b + c = 9$ with both between $2$ and $5$: $(4,5)$ and $(5,4)$, so $2$. If $a = 3$ then $b + c = 8$: $(3,5), (4,4), (5,3)$, so $3$. If $a = 4$ then $b + c = 7$: $(2,5), (3,4), (4,3), (5,2)$, so $4$. If $a = 5$ then $b + c = 6$: $(2,4), (3,3), (4,2)$, so $3$. Adding: $2 + 3 + 4 + 3 = 12$ ✓. TREATING THE TRIPLE AS UNORDERED finds only the three value sets $\\{2, 4, 5\\}$, $\\{3, 3, 5\\}$, $\\{3, 4, 4\\}$ and answers $3$ ✗.',
    },
    {
      q: 'Twelve identical ornaments are hung on $4$ hooks labeled $1$ through $4$, with every hook holding at least $2$ ornaments. The ornaments cannot be told apart and the hooks are different. In how many of those arrangements does no hook hold more than $5$ ornaments?',
      answer: '$31$',
      solution:
        'Pay the floor, then remove the overloads. Hang $2$ ornaments on each hook first, using $8$; the remaining $4$ are spread over the $4$ hooks with each hook taking at most $3$ extra. Ignoring the ceiling, that is $\\binom{7}{3} = 35$. An overloaded hook takes $4$ extra, which uses up every spare ornament and leaves exactly $1$ way per hook, so $4$ arrangements are barred, and two hooks cannot overload at once. That gives $35 - 4 = 31$ ✓. Second route, list the size patterns. The four counts are whole numbers from $2$ to $5$ adding to $12$: $2, 2, 3, 5$ with $\\frac{4!}{2!} = 12$ orderings; $2, 2, 4, 4$ with $\\frac{4!}{2!\\,2!} = 6$; $2, 3, 3, 4$ with $12$; and $3, 3, 3, 3$ with $1$. Adding: $12 + 6 + 12 + 1 = 31$ ✓. IGNORING THE CEILING ALTOGETHER and reporting every arrangement with at least $2$ per hook gives $35$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 5,
  worksheet,
}
