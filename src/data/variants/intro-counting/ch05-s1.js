// Counting & Probability chapter 5 — variations for section 5.2 (Paths on a Grid).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem names the grid’s size in blocks, says that $A$ is the
//    bottom-left corner and $B$ the top-right, and states the movement rule
//    out loud (one block right or one block up, unless a diagonal move is
//    explicitly allowed). Blocked corners, required corners, and bold
//    segments are described in words as well as drawn, so the figure is a
//    picture of the stem and never the only place a condition lives.
//  - Every keyed answer was brute-forced by enumerating every path on the
//    grid exactly as it is drawn here before the choices were written, and
//    each solution reaches it twice along routes that share no steps: a
//    corner-by-corner fill against a product of binomial coefficients, an
//    inclusion–exclusion count against a complement, a casework sum against
//    a sequential choice.
//  - Each distractor is one named slip, named in CAPS at the end of the
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

const s52 = [
  // slot 1 — a plain grid count, the same count worn as identical objects in
  // a row, and the count run backwards to recover the width.
  [
    {
      q: 'A town’s streets form a grid $6$ blocks wide and $3$ blocks tall, shown below. $A$ is the bottom-left corner, $B$ is the top-right corner, and every step goes one block right or one block up along the streets. How many paths run from $A$ to $B$?',
      fig: grid(6, 3),
      choices: ['$126$', '$18$', '$84$', '$120$'],
      answer: 2,
      solution:
        'Route one, read a path as a word. Every path uses exactly six $R$’s and three $U$’s, in some order, and every order is a different path. The word has $9$ letters, and the path is fixed once you say which $3$ of them are $U$’s: $\\binom{9}{3} = 84$ ✓. Route two, fill the grid corner by corner. A corner can be entered only from the left or from below, so its number is the sum of the numbers directly left and directly below it, and the bottom row and left column are all $1$. The row one block up reads $1, 2, 3, 4, 5, 6, 7$; the next reads $1, 3, 6, 10, 15, 21, 28$; the top reads $1, 4, 10, 20, 35, 56, 84$, and $B$ holds $84$ ✓. (The choice $126$ CHOOSES THE WRONG NUMBER OF SLOTS, $\\binom{9}{4}$, as though there were four up-steps ✗. The choice $18$ MULTIPLIES THE TWO BLOCK COUNTS, $6 \\times 3$, which counts blocks and not paths ✗. The choice $120$ COUNTS CORNERS INSTEAD OF BLOCKS: the bottom edge has $7$ corners but only $6$ steps, and $\\binom{10}{3} = 120$ ✗.)',
    },
    {
      q: 'A stack of $9$ coins is built from $5$ identical dimes and $4$ identical nickels. Coins of the same kind cannot be told apart, and two stacks are different when they differ at some level of the stack. How many different stacks are possible?',
      choices: ['$126$', '$362880$', '$20$', '$3024$'],
      answer: 0,
      solution:
        'Route one, choose the nickel levels. A stack is decided once you say which of the $9$ levels hold the nickels, and there are $4$ of them: $\\binom{9}{4} = 126$ ✓. Route two, build the stack from the bottom with a recursion. Let $f(d, n)$ be the number of stacks made from $d$ dimes and $n$ nickels. The bottom coin is a dime or a nickel, so $f(d, n) = f(d - 1, n) + f(d, n - 1)$, with $f(d, 0) = f(0, n) = 1$. Filling the table by rows of $n$: $n = 1$ gives $1, 2, 3, 4, 5, 6$; $n = 2$ gives $1, 3, 6, 10, 15, 21$; $n = 3$ gives $1, 4, 10, 20, 35, 56$; $n = 4$ gives $1, 5, 15, 35, 70, 126$, so $f(5, 4) = 126$ ✓. (The choice $362880$ TREATS ALL NINE COINS AS DIFFERENT, counting $9!$ orderings ✗. The choice $20$ MULTIPLIES THE TWO COIN COUNTS, $5 \\times 4$ ✗. The choice $3024$ PLACES THE FOUR NICKELS IN ORDER, $9 \\times 8 \\times 7 \\times 6$, though nickels are interchangeable ✗.)',
    },
    {
      q: 'A street grid is $n$ blocks wide and $2$ blocks tall. Moving only one block right or one block up along the streets, there are exactly $36$ paths from the bottom-left corner to the top-right corner. What is $n$?',
      choices: ['$9$', '$18$', '$8$', '$7$'],
      answer: 3,
      solution:
        'Route one, solve the equation. A path is a word with $n$ letters $R$ and $2$ letters $U$, so the count is $\\binom{n + 2}{2} = \\frac{(n + 2)(n + 1)}{2}$. Setting that equal to $36$ gives $(n + 2)(n + 1) = 72 = 9 \\times 8$, so $n + 2 = 9$ and $n = 7$ ✓. Route two, tabulate widths until $36$ appears. Fill a $2$-block-tall grid corner by corner and read the top-right entry as the grid grows one block at a time: width $1$ gives $3$, then $6, 10, 15, 21, 28$, and width $7$ gives $36$ ✓. The counts strictly increase, so no other width works. (The choice $9$ REPORTS THE NUMBER OF STEPS, $n + 2$, instead of the width ✗. The choice $18$ SOLVES $2n = 36$, multiplying the block counts ✗. The choice $8$ REPORTS THE CORNER COUNT ALONG THE BOTTOM EDGE, $n + 1$, which is one more than the number of blocks ✗.)',
    },
  ],
  // slot 2 — a long thin grid, the same lattice hidden inside a chessboard,
  // and the count reversed on a taller grid.
  [
    {
      q: 'A grid of streets is $8$ blocks wide and $2$ blocks tall, shown below. $A$ is the bottom-left corner and $B$ the top-right corner, and every step goes one block right or one block up. How many paths run from $A$ to $B$?',
      fig: grid(8, 2),
      choices: ['$16$', '$45$', '$120$', '$55$'],
      answer: 1,
      solution:
        'Route one, count words. Each path is an arrangement of eight $R$’s and two $U$’s, so choose the two slots that hold the $U$’s: $\\binom{10}{2} = 45$ ✓. Route two, record where the climbs happen. A path is fixed by the two columns at which it steps up, each of which is one of the $9$ vertical streets numbered $0$ through $8$. If the two climbs happen at different streets there are $\\binom{9}{2} = 36$ choices; if both happen at the same street there are $9$. Total $36 + 9 = 45$ ✓. (The choice $16$ MULTIPLIES THE BLOCK COUNTS, $8 \\times 2$ ✗. The choice $120$ CHOOSES THREE SLOTS INSTEAD OF TWO, $\\binom{10}{3}$ ✗. The choice $55$ COUNTS CORNERS INSTEAD OF BLOCKS, treating the $9$ corners along the bottom as $9$ right-steps and computing $\\binom{11}{2}$ ✗.)',
    },
    {
      q: 'A rook stands on the bottom-left square of a board with $8$ columns and $6$ rows of squares. Each move takes it one square right or one square up, and it moves until it stands on the top-right square. How many different move sequences are possible?',
      choices: ['$3003$', '$48$', '$924$', '$792$'],
      answer: 3,
      solution:
        'Route one, count the moves. Crossing $8$ columns takes $7$ right moves and crossing $6$ rows takes $5$ up moves, so a sequence is a word with seven $R$’s and five $U$’s: $\\binom{12}{5} = 792$ ✓. Route two, fill the board square by square. Write in each square the number of sequences that reach it; the bottom row and left column are all $1$, and every other square is the sum of the squares to its left and below. The rows read $1, 1, 1, 1, 1, 1, 1, 1$; then $1, 2, 3, 4, 5, 6, 7, 8$; then $1, 3, 6, 10, 15, 21, 28, 36$; then $1, 4, 10, 20, 35, 56, 84, 120$; then $1, 5, 15, 35, 70, 126, 210, 330$; and the top row ends $1, 6, 21, 56, 126, 252, 462, 792$ ✓. (The choice $3003$ TREATS $8$ AND $6$ AS MOVE COUNTS, $\\binom{14}{6}$, though a board of $8$ columns needs only $7$ right moves ✗. The choice $48$ MULTIPLIES THE COLUMN AND ROW COUNTS, counting squares ✗. The choice $924$ USES SIX UP MOVES INSTEAD OF FIVE, $\\binom{12}{6}$ ✗.)',
    },
    {
      q: 'A street grid is $3$ blocks tall and $w$ blocks wide. Moving only one block right or one block up, there are exactly $165$ paths from the bottom-left corner $A$ to the top-right corner $B$. What is $w$?',
      choices: ['$11$', '$9$', '$8$', '$55$'],
      answer: 2,
      solution:
        'Route one, solve the equation. The count is $\\binom{w + 3}{3} = \\frac{(w + 3)(w + 2)(w + 1)}{6}$, so $(w + 3)(w + 2)(w + 1) = 990 = 11 \\times 10 \\times 9$. Hence $w + 3 = 11$ and $w = 8$ ✓. Route two, tabulate widths. The top-right entry of a $3$-block-tall grid, filled corner by corner, runs $1, 4, 10, 20, 35, 56, 84, 120, 165$ as the width goes $0, 1, 2, \\ldots, 8$, and it increases every time, so $165$ belongs to width $8$ and to no other ✓. (The choice $11$ REPORTS THE TOTAL NUMBER OF STEPS, $w + 3$ ✗. The choice $9$ REPORTS THE CORNER COUNT ALONG THE BOTTOM EDGE, $w + 1$ ✗. The choice $55$ SOLVES $3w = 165$, multiplying the block counts ✗.)',
    },
  ],
  // slot 3 — a required corner, the same split hidden in a row of beads, and
  // the required corner turned into a forbidden one.
  [
    {
      q: 'On the street grid below, which is $7$ blocks wide and $3$ blocks tall, $A$ is the bottom-left corner and $B$ the top-right corner, and every step goes one block right or one block up. The corner $P$ is $3$ blocks right and $1$ block up from $A$. How many paths from $A$ to $B$ pass through $P$?',
      fig: grid(7, 3, { marks: [{ p: [3, 1], label: 'P' }] }),
      choices: ['$120$', '$19$', '$80$', '$60$'],
      answer: 3,
      solution:
        'Route one, cut the trip at $P$. From $A$ to $P$ is $3$ right and $1$ up: $\\binom{4}{1} = 4$ ways. From $P$ to $B$ is $4$ right and $2$ up: $\\binom{6}{2} = 15$ ways. Any first half pairs with any second half, so $4 \\times 15 = 60$ ✓. Route two, count the paths that miss $P$ and subtract. All paths number $\\binom{10}{3} = 120$. Now fill the grid corner by corner with $P$ set to $0$: the row one block up reads $1, 2, 3, 0, 1, 2, 3, 4$, the next reads $1, 3, 6, 6, 7, 9, 12, 16$, and the top reads $1, 4, 10, 16, 23, 32, 44, 60$, so $60$ paths avoid $P$ and $120 - 60 = 60$ use it ✓. On this particular grid the two halves happen to come out equal, which is a fact about the grid and not a shortcut. (The choice $120$ IGNORES $P$ and counts every path ✗. The choice $19$ ADDS THE TWO LEGS, $4 + 15$, instead of multiplying ✗. The choice $80$ MISCOUNTS THE SECOND LEG AS THREE UP-STEPS, $4 \\times \\binom{6}{3}$, though only $2$ up-steps remain after $P$ ✗.)',
    },
    {
      q: 'A row of $10$ beads is strung from $6$ identical red beads and $4$ identical blue beads; beads of the same color cannot be told apart, and the row has a definite first bead and last bead. In how many such rows do the first $5$ beads include exactly $2$ red beads?',
      choices: ['$210$', '$50$', '$15$', '$100$'],
      answer: 1,
      solution:
        'Route one, split the row at the halfway point and count the reds. Choose which $2$ of the first five positions are red: $\\binom{5}{2} = 10$ ways. The remaining $4$ red beads must sit in the last five positions: $\\binom{5}{4} = 5$ ways. Multiply: $10 \\times 5 = 50$ ✓. Route two, count the blue beads instead. If the first five hold exactly $2$ red beads they hold exactly $3$ blue ones, so choose those three positions: $\\binom{5}{3} = 10$. The one remaining blue bead sits somewhere in the last five: $\\binom{5}{1} = 5$. That gives $10 \\times 5 = 50$ ✓. As a check on the bookkeeping, letting $j$ be the number of reds among the first five gives $5, 50, 100, 50, 5$ for $j = 1, 2, 3, 4, 5$, and those sum to $210 = \\binom{10}{4}$, every row of the ten beads. (The choice $210$ COUNTS EVERY ROW and forgets the condition ✗. The choice $15$ ADDS THE TWO HALVES, $10 + 5$ ✗. The choice $100$ DEMANDS EXACTLY TWO REDS IN THE LAST FIVE AS WELL, $\\binom{5}{2}^2$, but the last five must hold four ✗.)',
    },
    {
      q: 'On the street grid below, which is $7$ blocks wide and $2$ blocks tall, $A$ is the bottom-left corner and $B$ the top-right corner, and every step goes one block right or one block up. The corner $P$ is $3$ blocks right and $1$ block up from $A$. How many paths from $A$ to $B$ miss $P$ entirely?',
      fig: grid(7, 2, { marks: [{ p: [3, 1], label: 'P' }] }),
      choices: ['$16$', '$20$', '$36$', '$32$'],
      answer: 0,
      solution:
        'Route one, count everything and take away the paths through $P$. All paths: $\\binom{9}{2} = 36$. Through $P$: $\\binom{4}{1} = 4$ ways to reach it and $\\binom{5}{1} = 5$ ways to finish, so $4 \\times 5 = 20$. Every path either uses $P$ or misses it, so $36 - 20 = 16$ ✓. Route two, fill the grid corner by corner with $P$ closed. The bottom row is all $1$; the row one block up reads $1, 2, 3, 0, 1, 2, 3, 4$; the top row reads $1, 3, 6, 6, 7, 9, 12, 16$, and $B$ holds $16$ ✓. (The choice $20$ REPORTS THE PATHS THROUGH $P$, the opposite question ✗. The choice $36$ IGNORES $P$ ✗. The choice $32$ SUBTRACTS ONLY THE FOUR WAYS OF REACHING $P$ and forgets that each of them continues in $5$ ways ✗.)',
    },
  ],
  // slot 4 — a required corner on a tall grid, the same idea as a trail
  // network, and the required corner turned into one to be avoided.
  [
    {
      q: 'On the street grid below, which is $7$ blocks wide and $4$ blocks tall, $A$ is the bottom-left corner and $B$ the top-right corner, and every step goes one block right or one block up. The corner $P$ sits $2$ blocks right and $1$ block up from $A$. How many paths from $A$ to $B$ pass through $P$?',
      fig: grid(7, 4, { marks: [{ p: [2, 1], label: 'P' }] }),
      choices: ['$168$', '$330$', '$59$', '$162$'],
      answer: 0,
      solution:
        'Route one, cut the trip at $P$. From $A$ to $P$ is $2$ right and $1$ up: $\\binom{3}{1} = 3$ ways. From $P$ to $B$ is $5$ right and $3$ up: $\\binom{8}{3} = 56$ ways. Multiply: $3 \\times 56 = 168$ ✓. Route two, subtract the paths that miss $P$. All paths number $\\binom{11}{4} = 330$. Filling the grid corner by corner with $P$ set to $0$, the rows above the all-$1$ bottom read $1, 2, 0, 1, 2, 3, 4, 5$; then $1, 3, 3, 4, 6, 9, 13, 18$; then $1, 4, 7, 11, 17, 26, 39, 57$; then $1, 5, 12, 23, 40, 66, 105, 162$. So $162$ paths miss $P$ and $330 - 162 = 168$ use it ✓. (The choice $330$ IGNORES $P$ ✗. The choice $59$ ADDS THE LEGS, $3 + 56$ ✗. The choice $162$ REPORTS THE PATHS THAT MISS $P$ ✗.)',
    },
    {
      q: 'A trail network runs $6$ legs east and $4$ legs north from camp $A$ to peak $B$; the trails meet at the corners of the grid below, and every leg goes one unit east or one unit north. A hiker must refill at the spring $S$, which sits $3$ legs east and $2$ legs north of camp. How many trips from $A$ to $B$ are possible?',
      fig: grid(6, 4, { marks: [{ p: [3, 2], label: 'S' }] }),
      choices: ['$210$', '$20$', '$100$', '$110$'],
      answer: 2,
      solution:
        'Route one, split the trip at the spring. From $A$ to $S$ is $3$ east and $2$ north: $\\binom{5}{2} = 10$ ways. From $S$ to $B$ is $3$ east and $2$ north as well: $\\binom{5}{2} = 10$ ways. Every first half pairs with every second half, so $10 \\times 10 = 100$ ✓. Route two, subtract the trips that skip the spring. All trips number $\\binom{10}{4} = 210$. Filling the grid corner by corner with $S$ set to $0$, the rows above the all-$1$ bottom read $1, 2, 3, 4, 5, 6, 7$; then $1, 3, 6, 0, 5, 11, 18$; then $1, 4, 10, 10, 15, 26, 44$; then $1, 5, 15, 25, 40, 66, 110$. So $110$ trips skip the spring and $210 - 110 = 100$ visit it ✓. (The choice $210$ IGNORES THE SPRING ✗. The choice $20$ ADDS THE TWO HALVES, $10 + 10$ ✗. The choice $110$ REPORTS THE TRIPS THAT SKIP THE SPRING ✗.)',
    },
    {
      q: 'On the street grid below, which is $7$ blocks wide and $3$ blocks tall, $A$ is the bottom-left corner and $B$ the top-right corner, and every step goes one block right or one block up. The corner $P$ sits $4$ blocks right and $1$ block up from $A$. How many paths from $A$ to $B$ never touch $P$?',
      fig: grid(7, 3, { marks: [{ p: [4, 1], label: 'P' }] }),
      choices: ['$50$', '$70$', '$120$', '$115$'],
      answer: 1,
      solution:
        'Route one, count everything and take away the paths through $P$. All paths: $\\binom{10}{3} = 120$. Through $P$: $\\binom{5}{1} = 5$ ways in and $\\binom{5}{2} = 10$ ways on to $B$, so $5 \\times 10 = 50$. Therefore $120 - 50 = 70$ ✓. Route two, fill the grid corner by corner with $P$ closed. Above the all-$1$ bottom row the rows read $1, 2, 3, 4, 0, 1, 2, 3$; then $1, 3, 6, 10, 10, 11, 13, 16$; then $1, 4, 10, 20, 30, 41, 54, 70$, and $B$ holds $70$ ✓. (The choice $50$ REPORTS THE PATHS THAT DO TOUCH $P$ ✗. The choice $120$ IGNORES $P$ ✗. The choice $115$ SUBTRACTS ONLY THE FIVE WAYS OF REACHING $P$, forgetting that each continues in $10$ ways ✗.)',
    },
  ],
  // slot 5 — one closed corner, the same closure as a roped-off junction, and
  // the question flipped to count the paths the closure ruins.
  [
    {
      q: 'On the street grid below, which is $5$ blocks wide and $3$ blocks tall, the corner marked ✕ — $3$ blocks right and $2$ blocks up from $A$ — is closed for repairs. $A$ is the bottom-left corner, $B$ the top-right corner, and every step goes one block right or one block up. How many paths from $A$ to $B$ avoid the closed corner?',
      fig: grid(5, 3, { closed: [[3, 2]] }),
      choices: ['$30$', '$56$', '$26$', '$46$'],
      answer: 2,
      solution:
        'Route one, subtract the ruined paths. All paths: $\\binom{8}{3} = 56$. Through the closed corner: $\\binom{5}{2} = 10$ ways to reach it and $\\binom{3}{1} = 3$ ways to finish, so $10 \\times 3 = 30$. Avoiding it: $56 - 30 = 26$ ✓. Route two, fill the grid corner by corner with the closed corner set to $0$. The bottom row is all $1$; the next reads $1, 2, 3, 4, 5, 6$; the next reads $1, 3, 6, 0, 5, 11$; the top reads $1, 4, 10, 10, 15, 26$, and $B$ holds $26$ ✓. (The choice $30$ REPORTS THE PATHS THROUGH THE CLOSED CORNER ✗. The choice $56$ IGNORES THE CLOSURE ✗. The choice $46$ SUBTRACTS ONLY THE TEN WAYS OF REACHING THE CLOSED CORNER, forgetting the three ways each of them finishes ✗.)',
    },
    {
      q: 'A museum’s galleries sit at the corners of the grid below, which is $6$ units east and $2$ units north. A visitor walks from the entrance corner $A$ at the southwest to the shop corner $B$ at the northeast, going only one unit east or one unit north at a time. The junction marked ✕, which is $2$ units east and $1$ unit north of the entrance, is roped off. How many walks are possible?',
      fig: grid(6, 2, { closed: [[2, 1]] }),
      choices: ['$13$', '$15$', '$28$', '$25$'],
      answer: 0,
      solution:
        'Route one, subtract the walks through the roped-off junction. All walks: $\\binom{8}{2} = 28$. Through the junction: $\\binom{3}{1} = 3$ ways to reach it and $\\binom{5}{1} = 5$ ways to finish, so $3 \\times 5 = 15$. Avoiding it: $28 - 15 = 13$ ✓. Route two, fill the grid corner by corner with the junction set to $0$. The bottom row is all $1$; the middle row reads $1, 2, 0, 1, 2, 3, 4$; the top row reads $1, 3, 3, 4, 6, 9, 13$, and $B$ holds $13$ ✓. (The choice $15$ REPORTS THE WALKS THROUGH THE ROPED-OFF JUNCTION ✗. The choice $28$ IGNORES THE ROPE ✗. The choice $25$ SUBTRACTS ONLY THE THREE WAYS OF REACHING THE JUNCTION ✗.)',
    },
    {
      q: 'On the street grid below, which is $4$ blocks wide and $4$ blocks tall, the corner marked ✕ — $2$ blocks right and $1$ block up from $A$ — is closed. $A$ is the bottom-left corner, $B$ the top-right corner, and every step goes one block right or one block up. How many paths from $A$ to $B$ are ruined by the closure, meaning they run through that corner?',
      fig: grid(4, 4, { closed: [[2, 1]] }),
      choices: ['$40$', '$70$', '$13$', '$30$'],
      answer: 3,
      solution:
        'Route one, cut the ruined paths at the closed corner. Reaching it takes $2$ right and $1$ up: $\\binom{3}{1} = 3$ ways. Finishing takes $2$ right and $3$ up: $\\binom{5}{2} = 10$ ways. Multiply: $3 \\times 10 = 30$ ✓. Route two, count the survivors and subtract from the total. All paths: $\\binom{8}{4} = 70$. Filling the grid corner by corner with the corner set to $0$ gives rows $1, 2, 0, 1, 2$; then $1, 3, 3, 4, 6$; then $1, 4, 7, 11, 17$; then $1, 5, 12, 23, 40$, so $40$ paths survive and $70 - 40 = 30$ are ruined ✓. (The choice $40$ REPORTS THE PATHS THAT AVOID THE CLOSED CORNER ✗. The choice $70$ COUNTS EVERY PATH ✗. The choice $13$ ADDS THE TWO LEGS, $3 + 10$, instead of multiplying ✗.)',
    },
  ],
  // slot 6 — a required bold segment, a vertical one, and a forbidden one.
  // Route two always classifies what a path does at one end of the segment.
  [
    {
      q: 'On the street grid below, which is $6$ blocks wide and $4$ blocks tall, the bold segment is the only bridge over a creek. It is the horizontal street segment joining the corner $1$ block right and $1$ block up from $A$ to the corner $2$ blocks right and $1$ block up from $A$. Every step goes one block right or one block up, $A$ is the bottom-left corner, and $B$ is the top-right corner. How many routes from $A$ to $B$ cross the bridge?',
      fig: grid(6, 4, { hl: [[[1, 1], [2, 1]]] }),
      choices: ['$70$', '$112$', '$105$', '$37$'],
      answer: 0,
      solution:
        'Route one, cut the route at the bridge. Reaching the left end takes $1$ right and $1$ up: $\\binom{2}{1} = 2$ ways. After crossing, the walk from the right end to $B$ takes $4$ right and $3$ up: $\\binom{7}{3} = 35$ ways. Multiply: $2 \\times 35 = 70$ ✓. Route two, take every route through the left end and throw away the ones that turn up. Routes through the left end: $2 \\times \\binom{8}{3} = 2 \\times 56 = 112$. Those that step up out of the left end instead of crossing must then walk from the corner $1$ right, $2$ up to $B$, which is $5$ right and $2$ up: $2 \\times \\binom{7}{2} = 2 \\times 21 = 42$. So $112 - 42 = 70$ routes leave the left end by the bridge ✓. (The choice $112$ COUNTS EVERY ROUTE THROUGH THE BRIDGE’S LEFT END, including the ones that turn up and never cross ✗. The choice $105$ COUNTS EVERY ROUTE THROUGH THE BRIDGE’S RIGHT END, $3 \\times 35$, including the ones that arrive there from below ✗. The choice $37$ ADDS THE LEGS, $2 + 35$ ✗.)',
    },
    {
      q: 'On the street grid below, which is $5$ blocks wide and $4$ blocks tall, the bold vertical segment is the building’s only elevator. It joins the corner $3$ blocks right and $1$ block up from $A$ to the corner $3$ blocks right and $2$ blocks up from $A$. Every step goes one block right or one block up, $A$ is the bottom-left corner, and $B$ is the top-right corner. How many routes from $A$ to $B$ ride the elevator?',
      fig: grid(5, 4, { hl: [[[3, 1], [3, 2]]] }),
      choices: ['$40$', '$60$', '$24$', '$10$'],
      answer: 2,
      solution:
        'Route one, cut the route at the elevator. Reaching its lower end takes $3$ right and $1$ up: $\\binom{4}{1} = 4$ ways. From its upper end to $B$ takes $2$ right and $2$ up: $\\binom{4}{2} = 6$ ways. Multiply: $4 \\times 6 = 24$ ✓. Route two, take every route through the lower end and throw away the ones that step right. Routes through the lower end: $4 \\times \\binom{5}{2} = 4 \\times 10 = 40$. Those that step right out of it must walk from the corner $4$ right, $1$ up to $B$, which is $1$ right and $3$ up: $4 \\times \\binom{4}{1} = 4 \\times 4 = 16$. So $40 - 16 = 24$ routes leave the lower end going up ✓. (The choice $40$ COUNTS EVERY ROUTE THROUGH THE ELEVATOR’S LOWER END, including the ones that step right ✗. The choice $60$ COUNTS EVERY ROUTE THROUGH ITS UPPER END, $\\binom{5}{2} \\times 6$, including the ones that arrive from the left ✗. The choice $10$ ADDS THE LEGS, $4 + 6$ ✗.)',
    },
    {
      q: 'On the street grid below, which is $6$ blocks wide and $3$ blocks tall, the bold segment is closed to walkers. It is the horizontal street segment joining the corner $2$ blocks right and $1$ block up from $A$ to the corner $3$ blocks right and $1$ block up from $A$; both of its end corners are still open. Every step goes one block right or one block up, $A$ is the bottom-left corner, and $B$ is the top-right corner. How many routes from $A$ to $B$ do not use the closed segment?',
      fig: grid(6, 3, { hl: [[[2, 1], [3, 1]]] }),
      choices: ['$30$', '$54$', '$84$', '$39$'],
      answer: 1,
      solution:
        'Route one, subtract the routes that use it. All routes: $\\binom{9}{3} = 84$. A route using the segment reaches its left end in $\\binom{3}{1} = 3$ ways and finishes from its right end, $3$ right and $2$ up from there, in $\\binom{5}{2} = 10$ ways, so $3 \\times 10 = 30$ routes use it. Therefore $84 - 30 = 54$ ✓. Route two, fill the grid corner by corner with the closed segment removed. Every corner still sums the numbers to its left and below, except the corner $3$ right and $1$ up, which can now be entered only from below and so takes just the number underneath it. The bottom row is all $1$; the next reads $1, 2, 3, 1, 2, 3, 4$; the next reads $1, 3, 6, 7, 9, 12, 16$; the top reads $1, 4, 10, 17, 26, 38, 54$, and $B$ holds $54$ ✓. (The choice $30$ REPORTS THE ROUTES THAT DO USE THE CLOSED SEGMENT ✗. The choice $84$ IGNORES THE CLOSURE ✗. The choice $39$ CLOSES THE WHOLE CORNER $2$ RIGHT AND $1$ UP INSTEAD OF A SINGLE SEGMENT, computing $84 - 45$, but a walker may still stand there and turn up ✗.)',
    },
  ],
  // slot 7 — two required corners, the same idea in three dimensions, and the
  // pair turned into two corners to be avoided.
  [
    {
      q: 'On the street grid below, which is $7$ blocks wide and $5$ blocks tall, a route from $A$ (bottom-left) to $B$ (top-right) moves one block right or one block up at a time and must visit both $P$, the corner $2$ blocks right and $1$ block up from $A$, and $Q$, the corner $5$ blocks right and $3$ blocks up from $A$. How many such routes are there?',
      fig: grid(7, 5, { marks: [{ p: [2, 1], label: 'P' }, { p: [5, 3], label: 'Q' }] }),
      choices: ['$792$', '$180$', '$19$', '$30$'],
      answer: 1,
      solution:
        'Route one, cut the route into three legs. Since every step goes right or up, $P$ must come before $Q$. From $A$ to $P$ is $2$ right and $1$ up: $\\binom{3}{1} = 3$. From $P$ to $Q$ is $3$ right and $2$ up: $\\binom{5}{2} = 10$. From $Q$ to $B$ is $2$ right and $2$ up: $\\binom{4}{2} = 6$. Multiply: $3 \\times 10 \\times 6 = 180$ ✓. Route two, take the routes through $P$ and remove the ones that skip $Q$. Routes through $P$: $3 \\times \\binom{9}{4} = 3 \\times 126 = 378$, since $B$ is $5$ right and $4$ up from $P$. Now fill that $5$-by-$4$ stretch beyond $P$ corner by corner with $Q$ closed: the rows read $1, 2, 3, 4, 5, 6$; then $1, 3, 6, 0, 5, 11$; then $1, 4, 10, 10, 15, 26$; then $1, 5, 15, 25, 40, 66$, so $66$ of the continuations skip $Q$, giving $3 \\times 66 = 198$ routes through $P$ that miss $Q$. Then $378 - 198 = 180$ ✓. (The choice $792$ IGNORES BOTH STOPS, counting all $\\binom{12}{5}$ routes ✗. The choice $19$ ADDS THE THREE LEGS, $3 + 10 + 6$ ✗. The choice $30$ STOPS AFTER TWO LEGS, $3 \\times 10$, and never walks from $Q$ to $B$ ✗.)',
    },
    {
      q: 'A drone flies along the edges of a scaffold from the corner $(0, 0, 0)$ to the corner that is $3$ units east, $2$ units north, and $2$ units up. Each move takes it one unit east, one unit north, or one unit up, and it never moves west, south, or down. The flight must pass through the joint that is $1$ unit east, $1$ unit north, and $1$ unit up from the start. How many flight plans are possible?',
      choices: ['$210$', '$18$', '$138$', '$72$'],
      answer: 3,
      solution:
        'Route one, cut the flight at the required joint. The first leg is one move east, one north, and one up in some order: $3! = 6$ plans. The second leg covers $2$ east, $1$ north, and $1$ up, a word of $4$ moves with the two easts interchangeable: $\\frac{4!}{2!} = 12$ plans. Multiply: $6 \\times 12 = 72$ ✓. Route two, subtract the flights that miss the joint. All flights are words with three easts, two norths, and two ups: $\\frac{7!}{3!\\,2!\\,2!} = 210$. Fill the scaffold joint by joint, each joint holding the sum of the counts at the joints one unit west, one unit south, and one unit below it, with the required joint set to $0$; the far corner then holds $138$, the flights that miss it. So $210 - 138 = 72$ ✓. (The choice $210$ IGNORES THE REQUIRED JOINT ✗. The choice $18$ ADDS THE TWO LEGS, $6 + 12$ ✗. The choice $138$ REPORTS THE FLIGHTS THAT MISS THE JOINT ✗.)',
    },
    {
      q: 'On the street grid below, which is $7$ blocks wide and $4$ blocks tall, $P$ is the corner $2$ blocks right and $1$ block up from $A$ and $Q$ is the corner $5$ blocks right and $3$ blocks up from $A$. Moving one block right or one block up at a time from $A$ (bottom-left) to $B$ (top-right), how many paths visit neither $P$ nor $Q$?',
      fig: grid(7, 4, { marks: [{ p: [2, 1], label: 'P' }, { p: [5, 3], label: 'Q' }] }),
      choices: ['$162$', '$330$', '$84$', '$246$'],
      answer: 2,
      solution:
        'Route one, subtract and add back. All paths: $\\binom{11}{4} = 330$. Through $P$: $\\binom{3}{1}\\binom{8}{3} = 3 \\times 56 = 168$. Through $Q$: $\\binom{8}{3}\\binom{3}{1} = 56 \\times 3 = 168$. Paths through both go $A$ to $P$ to $Q$ to $B$: $3 \\times \\binom{5}{2} \\times 3 = 3 \\times 10 \\times 3 = 90$, and they were subtracted twice, so they must be added back once. Paths visiting at least one: $168 + 168 - 90 = 246$, and $330 - 246 = 84$ visit neither ✓. Route two, fill the grid corner by corner with both $P$ and $Q$ set to $0$. Above the all-$1$ bottom row the rows read $1, 2, 0, 1, 2, 3, 4, 5$; then $1, 3, 3, 4, 6, 9, 13, 18$; then $1, 4, 7, 11, 17, 0, 13, 31$; then $1, 5, 12, 23, 40, 40, 53, 84$, and $B$ holds $84$ ✓. (The choice $162$ SUBTRACTS ONLY THE PATHS THROUGH $P$, $330 - 168$ ✗. The choice $330$ IGNORES BOTH CORNERS ✗. The choice $246$ REPORTS THE PATHS THAT VISIT AT LEAST ONE OF THEM ✗.)',
    },
  ],
  // slot 8 — two closed corners, the same pair as a flooded orchard, and the
  // question flipped to count the spoiled paths.
  [
    {
      q: 'On the street grid below, which is $6$ blocks wide and $3$ blocks tall, both corners marked ✕ are closed: one is $2$ blocks right and $1$ block up from $A$, the other is $4$ blocks right and $2$ blocks up from $A$. $A$ is the bottom-left corner, $B$ the top-right, and every step goes one block right or one block up. How many paths from $A$ to $B$ avoid both closed corners?',
      fig: grid(6, 3, { closed: [[2, 1], [4, 2]] }),
      choices: ['$39$', '$63$', '$84$', '$21$'],
      answer: 3,
      solution:
        'Route one, subtract and add back. All paths: $\\binom{9}{3} = 84$. Through the first ✕: $\\binom{3}{1}\\binom{6}{2} = 3 \\times 15 = 45$. Through the second ✕: $\\binom{6}{2}\\binom{3}{1} = 15 \\times 3 = 45$. A path through both goes from the first to the second by $2$ right and $1$ up, $\\binom{3}{1} = 3$ ways, so those number $3 \\times 3 \\times 3 = 27$; they were removed twice and must be added back once. Answer: $84 - 45 - 45 + 27 = 21$ ✓. Route two, fill the grid corner by corner with both ✕ corners set to $0$. The bottom row is all $1$; the next reads $1, 2, 0, 1, 2, 3, 4$; the next reads $1, 3, 3, 4, 0, 3, 7$; the top reads $1, 4, 7, 11, 11, 14, 21$, and $B$ holds $21$ ✓. (The choice $39$ CLOSES ONLY ONE CORNER, $84 - 45$ ✗. The choice $63$ REPORTS THE PATHS THAT HIT AT LEAST ONE CLOSED CORNER, $84 - 21$ ✗. The choice $84$ IGNORES BOTH CLOSURES ✗.)',
    },
    {
      q: 'An orchard’s paths meet at the corners of the grid below, which is $5$ units east and $4$ units north. The two junctions marked ✕ are flooded: one is $2$ units east and $1$ unit north of the southwest corner $A$, the other is $3$ units east and $3$ units north of $A$. Walking only one unit east or one unit north at a time, how many routes cross the orchard from $A$ to the northeast corner $B$?',
      fig: grid(5, 4, { closed: [[2, 1], [3, 3]] }),
      choices: ['$6$', '$33$', '$66$', '$126$'],
      answer: 1,
      solution:
        'Route one, subtract and add back. All routes: $\\binom{9}{4} = 126$. Through the lower ✕: $\\binom{3}{1}\\binom{6}{3} = 3 \\times 20 = 60$. Through the upper ✕: $\\binom{6}{3}\\binom{3}{1} = 20 \\times 3 = 60$. A route through both goes from the lower to the upper by $1$ east and $2$ north, $\\binom{3}{1} = 3$ ways, so those number $3 \\times 3 \\times 3 = 27$ and must be added back once. Answer: $126 - 60 - 60 + 27 = 33$ ✓. Route two, fill the grid corner by corner with both ✕ junctions set to $0$. Above the all-$1$ bottom row the rows read $1, 2, 0, 1, 2, 3$; then $1, 3, 3, 4, 6, 9$; then $1, 4, 7, 0, 6, 15$; then $1, 5, 12, 12, 18, 33$, and $B$ holds $33$ ✓. (The choice $6$ FORGETS TO ADD BACK the routes through both junctions, computing $126 - 60 - 60$ ✗. The choice $66$ FLOODS ONLY ONE JUNCTION, $126 - 60$ ✗. The choice $126$ IGNORES BOTH FLOODS ✗.)',
    },
    {
      q: 'On the street grid below, which is $5$ blocks wide and $3$ blocks tall, the two corners marked ✕ are closed: one is $1$ block right and $1$ block up from $A$, the other is $3$ blocks right and $2$ blocks up from $A$. $A$ is the bottom-left corner, $B$ the top-right, and every step goes one block right or one block up. How many paths from $A$ to $B$ are spoiled, meaning they run through at least one closed corner?',
      fig: grid(5, 3, { closed: [[1, 1], [3, 2]] }),
      choices: ['$42$', '$14$', '$60$', '$26$'],
      answer: 0,
      solution:
        'Route one, count each closed corner and remove the double count. Through the lower ✕: $\\binom{2}{1}\\binom{6}{2} = 2 \\times 15 = 30$. Through the upper ✕: $\\binom{5}{2}\\binom{3}{1} = 10 \\times 3 = 30$. Paths through both go from the lower to the upper by $2$ right and $1$ up, $\\binom{3}{1} = 3$ ways, so they number $2 \\times 3 \\times 3 = 18$ and have been counted in both totals. Spoiled paths: $30 + 30 - 18 = 42$ ✓. Route two, count the clean paths and subtract from the total. All paths: $\\binom{8}{3} = 56$. Filling the grid corner by corner with both ✕ corners set to $0$ gives rows $1, 0, 1, 2, 3, 4$; then $1, 1, 2, 0, 3, 7$; then $1, 2, 4, 4, 7, 14$, so $14$ paths are clean and $56 - 14 = 42$ are spoiled ✓. (The choice $14$ REPORTS THE CLEAN PATHS ✗. The choice $60$ ADDS THE TWO THROUGH-COUNTS AND NEVER REMOVES THE $18$ PATHS COUNTED TWICE ✗. The choice $26$ ANSWERS FOR ONE CORNER ONLY, giving the $56 - 30$ paths that miss the lower ✕ ✗.)',
    },
  ],
  // slot 9 — diagonal moves allowed. Route two is a corner-by-corner fill in
  // which a corner also collects the number diagonally below and left of it.
  [
    {
      q: 'On a street grid $4$ blocks wide and $2$ blocks tall, a token starts at the bottom-left corner $A$ and finishes at the top-right corner $B$. Each move takes it one block right, one block up, or one block diagonally up-and-right across a single block. How many different move sequences carry it from $A$ to $B$?',
      choices: ['$15$', '$35$', '$41$', '$21$'],
      answer: 2,
      solution:
        'Route one, do casework on the number $d$ of diagonal moves. Each diagonal covers one right and one up at once, so with $d$ diagonals the token still makes $4 - d$ right moves and $2 - d$ up moves. With $d = 0$ the word has four $R$’s and two $U$’s: $\\binom{6}{2} = 15$. With $d = 1$ it is $R, R, R, U, D$: $\\frac{5!}{3!} = 20$. With $d = 2$ it is $R, R, D, D$: $\\frac{4!}{2!\\,2!} = 6$. Total $15 + 20 + 6 = 41$ ✓. Route two, fill the grid corner by corner. A corner can now be entered from the left, from below, or diagonally from below-left, so its number is the sum of those three neighbors. The bottom row is $1, 1, 1, 1, 1$; the middle row is $1, 3, 5, 7, 9$; the top row is $1, 5, 13, 25, 41$, and $B$ holds $41$ ✓. (The choice $15$ IGNORES THE DIAGONAL MOVES entirely ✗. The choice $35$ DROPS THE TWO-DIAGONAL CASE, adding only $15 + 20$ ✗. The choice $21$ DROPS THE ONE-DIAGONAL CASE, adding only $15 + 6$ ✗.)',
    },
    {
      q: 'A chess king starts on the bottom-left square of a board with $4$ columns and $3$ rows of squares. Each move takes it one square right, one square up, or one square diagonally up-and-right, and it moves until it stands on the top-right square. How many different move sequences are possible?',
      choices: ['$25$', '$10$', '$22$', '$13$'],
      answer: 0,
      solution:
        'Route one, do casework on the number $d$ of diagonal moves. Crossing $4$ columns needs $3$ steps of rightward progress and crossing $3$ rows needs $2$ steps of upward progress, and a diagonal supplies one of each. With $d = 0$ the word has three $R$’s and two $U$’s: $\\binom{5}{2} = 10$. With $d = 1$ it is $R, R, U, D$: $\\frac{4!}{2!} = 12$. With $d = 2$ it is $R, D, D$: $\\frac{3!}{2!} = 3$. Total $10 + 12 + 3 = 25$ ✓. Route two, fill the board square by square, each square taking the sum of the squares to its left, below it, and diagonally below-left. The bottom row is $1, 1, 1, 1$; the middle row is $1, 3, 5, 7$; the top row is $1, 5, 13, 25$, and the top-right square holds $25$ ✓. (The choice $10$ IGNORES THE DIAGONAL MOVES ✗. The choice $22$ DROPS THE TWO-DIAGONAL CASE, adding only $10 + 12$ ✗. The choice $13$ DROPS THE ONE-DIAGONAL CASE, adding only $10 + 3$ ✗.)',
    },
    {
      q: 'On a street grid $4$ blocks wide and $4$ blocks tall, a token goes from the bottom-left corner $A$ to the top-right corner $B$, each move taking it one block right, one block up, or one block diagonally up-and-right. How many of its move sequences use exactly two diagonal moves?',
      choices: ['$321$', '$180$', '$15$', '$90$'],
      answer: 3,
      solution:
        'Route one, write the sequence as a word. Two diagonals cover two blocks of rightward progress and two of upward progress, leaving $2$ right moves and $2$ up moves. So the sequence is an arrangement of $R, R, U, U, D, D$: $\\frac{6!}{2!\\,2!\\,2!} = \\frac{720}{8} = 90$ ✓. Route two, fill the grid corner by corner while keeping track of how many diagonals have been used. A corner is entered from the left, from below, or diagonally from below-left, and only the diagonal entry raises the tally, so the number of ways to reach a corner with exactly two diagonals is the sum of the two-diagonal numbers directly left and directly below it plus the one-diagonal number at the corner below-left. Reaching a corner with no diagonal at all is the ordinary path count, whose rows from the bottom read $1, 1, 1, 1, 1$; $1, 2, 3, 4, 5$; $1, 3, 6, 10, 15$; $1, 4, 10, 20, 35$; $1, 5, 15, 35, 70$. The one-diagonal numbers then read $0, 0, 0, 0, 0$; $0, 1, 2, 3, 4$; $0, 2, 6, 12, 20$; $0, 3, 12, 30, 60$; $0, 4, 20, 60, 140$. The two-diagonal numbers read $0, 0, 0, 0, 0$; $0, 0, 0, 0, 0$; $0, 0, 1, 3, 6$; $0, 0, 3, 12, 30$; $0, 0, 6, 30, 90$, and $B$ holds $90$ ✓. (The choice $321$ COUNTS EVERY SEQUENCE from $A$ to $B$, whatever the number of diagonals ✗. The choice $180$ TREATS THE TWO DIAGONAL MOVES AS DIFFERENT, dividing only by $2!\\,2!$ ✗. The choice $15$ STOPS AFTER CHOOSING WHICH $2$ OF THE $6$ MOVES ARE DIAGONAL, $\\binom{6}{2} = 15$, and never arranges the rights and ups ✗.)',
    },
  ],
  // slot 10 — three closed corners. The fill is the reliable route and
  // inclusion–exclusion is the check, or the other way round.
  [
    {
      q: 'On the street grid below, which is $5$ blocks wide and $4$ blocks tall, three corners marked ✕ are closed: $2$ blocks right and $1$ block up from $A$, $1$ block right and $3$ blocks up from $A$, and $3$ blocks right and $2$ blocks up from $A$. $A$ is the bottom-left corner, $B$ the top-right, and every step goes one block right or one block up. How many paths from $A$ to $B$ avoid all three?',
      fig: grid(5, 4, { closed: [[2, 1], [1, 3], [3, 2]] }),
      choices: ['$46$', '$42$', '$126$', '$22$'],
      answer: 3,
      solution:
        'Route one, fill the grid corner by corner, since three closures make the subtract-and-add-back bookkeeping heavy. Each corner is the sum of the numbers directly left and directly below, and each ✕ is $0$. The bottom row is all $1$; the next reads $1, 2, 0, 1, 2, 3$; the next reads $1, 3, 3, 0, 2, 5$; the next reads $1, 0, 3, 3, 5, 10$; the top reads $1, 1, 4, 7, 12, 22$, and $B$ holds $22$ ✓. Route two, subtract and add back. All paths: $\\binom{9}{4} = 126$. Through $(2, 1)$: $\\binom{3}{1}\\binom{6}{3} = 3 \\times 20 = 60$. Through $(1, 3)$: $\\binom{4}{1}\\binom{5}{1} = 4 \\times 5 = 20$. Through $(3, 2)$: $\\binom{5}{2}\\binom{4}{2} = 10 \\times 6 = 60$. The only pair a single path can hit is $(2, 1)$ then $(3, 2)$, since the corner $1$ right and $3$ up is never left of and below either of the others: $3 \\times \\binom{2}{1} \\times 6 = 36$. No path hits all three. Paths hitting at least one: $60 + 20 + 60 - 36 = 104$, and $126 - 104 = 22$ ✓. (The choice $46$ OVERLOOKS THE CLOSED CORNER $2$ RIGHT AND $1$ UP, closing only the other two ✗. The choice $42$ OVERLOOKS THE CLOSED CORNER $1$ RIGHT AND $3$ UP ✗. The choice $126$ IGNORES ALL THREE CLOSURES ✗.)',
    },
    {
      q: 'A warehouse’s aisles meet at the corners of the grid below, which is $5$ units east and $3$ units north. Three junctions marked ✕ are blocked by pallets: $1$ unit east and $2$ units north of the southwest corner $A$, $3$ units east and $1$ unit north of $A$, and $4$ units east and $2$ units north of $A$. Moving only one unit east or one unit north at a time, how many routes cross the warehouse from $A$ to the northeast corner $B$?',
      fig: grid(5, 3, { closed: [[1, 2], [3, 1], [4, 2]] }),
      choices: ['$18$', '$9$', '$17$', '$56$'],
      answer: 1,
      solution:
        'Route one, fill the grid corner by corner with each blocked junction set to $0$, every other corner being the sum of the numbers to its left and below. The bottom row is all $1$; the next reads $1, 2, 3, 0, 1, 2$; the next reads $1, 0, 3, 3, 0, 2$; the top reads $1, 1, 4, 7, 7, 9$, and $B$ holds $9$ ✓. Route two, subtract and add back. All routes: $\\binom{8}{3} = 56$. Through $(1, 2)$: $\\binom{3}{1}\\binom{5}{1} = 15$. Through $(3, 1)$: $\\binom{4}{1}\\binom{4}{2} = 4 \\times 6 = 24$. Through $(4, 2)$: $\\binom{6}{2}\\binom{2}{1} = 15 \\times 2 = 30$. Pairs a route can hit: $(1, 2)$ then $(4, 2)$, $3 \\times 1 \\times 2 = 6$; and $(3, 1)$ then $(4, 2)$, $4 \\times \\binom{2}{1} \\times 2 = 16$. No route reaches $(3, 1)$ after $(1, 2)$, since that would need a step south, so no route hits all three. Routes hitting at least one: $15 + 24 + 30 - 6 - 16 = 47$, and $56 - 47 = 9$ ✓. (The choice $18$ OVERLOOKS THE JUNCTION $1$ EAST AND $2$ NORTH, blocking only the other two ✗. The choice $17$ OVERLOOKS ONE OF THE TWO EASTERN JUNCTIONS ✗. The choice $56$ IGNORES ALL THREE PALLETS ✗.)',
    },
    {
      q: 'On the street grid below, which is $4$ blocks wide and $4$ blocks tall, three corners marked ✕ are closed: $1$ block right and $2$ blocks up from $A$, $2$ blocks right and $3$ blocks up from $A$, and $3$ blocks right and $1$ block up from $A$. $A$ is the bottom-left corner, $B$ the top-right, and every step goes one block right or one block up. How many paths from $A$ to $B$ are blocked, meaning they run through at least one of the three?',
      fig: grid(4, 4, { closed: [[1, 2], [2, 3], [3, 1]] }),
      choices: ['$58$', '$12$', '$76$', '$46$'],
      answer: 0,
      solution:
        'Route one, count each closed corner and remove the double counts. Through $(1, 2)$: $\\binom{3}{1}\\binom{5}{2} = 3 \\times 10 = 30$. Through $(2, 3)$: $\\binom{5}{2}\\binom{3}{1} = 10 \\times 3 = 30$. Through $(3, 1)$: $\\binom{4}{1}\\binom{4}{1} = 4 \\times 4 = 16$. The only pair one path can hit is $(1, 2)$ then $(2, 3)$: $3 \\times \\binom{2}{1} \\times 3 = 18$; the corner $3$ right and $1$ up sits below and right of both others, so no path pairs it with either, and no path hits all three. Blocked paths: $30 + 30 + 16 - 18 = 58$ ✓. Route two, count the clear paths and subtract. All paths: $\\binom{8}{4} = 70$. Filling the grid corner by corner with the three ✕ corners set to $0$ gives rows $1, 2, 3, 0, 1$; then $1, 0, 3, 3, 4$; then $1, 1, 0, 3, 7$; then $1, 2, 2, 5, 12$, so $12$ paths are clear and $70 - 12 = 58$ are blocked ✓. (The choice $12$ REPORTS THE CLEAR PATHS ✗. The choice $76$ ADDS THE THREE THROUGH-COUNTS AND NEVER REMOVES THE $18$ PATHS COUNTED TWICE ✗. The choice $46$ OVERLOOKS THE CLOSED CORNER $1$ RIGHT AND $2$ UP, counting the paths blocked by the other two ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 5,
  sections: { '5.2': s52 },
}
