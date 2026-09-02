// Counting & Probability — Chapter 5: More With Combinations
// All problems, explanations, and examples are original MathQuest content.

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

const s52 = {
  id: '5.2',
  title: 'Paths on a Grid',
  learn: {
    concepts: [
      {
        heading: 'A path is a word',
        body: 'Walk from the bottom-left corner of a street grid to the top-right corner, moving only right or up along the streets. Write $R$ each time you go right one block and $U$ each time you go up one block. A grid that is $m$ blocks wide and $n$ blocks tall forces exactly $m$ letters $R$ and $n$ letters $U$, in some order — and every order gives a different path. So counting paths is counting arrangements of the word $RR\\cdots RUU\\cdots U$.',
      },
      {
        heading: 'The formula',
        body: 'A word with $m$ copies of $R$ and $n$ copies of $U$ has $m+n$ slots; the path is decided once you choose which $m$ of the slots hold an $R$. That is $\\binom{m+n}{m}$ paths, which equals $\\binom{m+n}{n}$. Count blocks along each edge, not street corners: a grid $4$ blocks wide has $5$ corners along the bottom but only $4$ steps of $R$. Counting corners is the classic slip.',
      },
      {
        heading: 'Through a point, or around one',
        body: 'If a path must pass through a corner $P$, cut the trip in two: count the paths from $A$ to $P$, count the paths from $P$ to $B$, and multiply, since any first half can be followed by any second half. If a corner is closed, count the paths that go through it and subtract them from the total. Two closed corners need care: subtracting both throws away the paths through both corners twice, so add those back once.',
      },
      {
        heading: 'Corner by corner',
        body: 'When the grid has an awkward shape or several closed corners, write at each corner the number of ways to reach it. A corner can only be entered from the left or from below, so its number is the sum of the two numbers next to it; a closed corner gets $0$. Fill the grid from $A$ outward and read the answer at $B$. This is slower than the formula but it never fails, and on a small grid it is a fine way to check a formula answer.',
      },
    ],
    examples: [
      {
        problem: 'How many paths go from $A$ to $B$ on the grid shown, moving only right or up along the streets?',
        fig: grid(4, 3),
        steps: [
          'The grid is $4$ blocks wide and $3$ blocks tall, so every path is a word with four $R$’s and three $U$’s.',
          'The word has $7$ letters; choosing which $3$ of them are $U$’s fixes the path.',
          'There are $\\binom{7}{3} = 35$ such words, so $35$ paths.',
        ],
        answer: 'There are $35$ paths.',
      },
      {
        problem: 'Moving only right or up, how many paths from $A$ to $B$ pass through the corner $P$?',
        fig: grid(5, 3, { marks: [{ p: [2, 1], label: 'P' }] }),
        steps: [
          'Split the trip at $P$: first from $A$ to $P$, then from $P$ to $B$.',
          '$P$ is $2$ blocks right and $1$ block up from $A$, so there are $\\binom{3}{1} = 3$ ways to reach it.',
          '$B$ is $3$ blocks right and $2$ blocks up from $P$, so there are $\\binom{5}{2} = 10$ ways to finish.',
          'Any first half pairs with any second half: $3 \\times 10 = 30$ paths.',
        ],
        answer: '$30$ paths pass through $P$.',
      },
      {
        problem: 'The corner marked ✕ is closed. Moving only right or up, how many paths from $A$ to $B$ avoid it?',
        fig: grid(4, 4, { closed: [[2, 2]] }),
        steps: [
          'With nothing closed there are $\\binom{8}{4} = 70$ paths.',
          'The closed corner is $2$ right and $2$ up from $A$, and $B$ is $2$ right and $2$ up from it, so $\\binom{4}{2} \\times \\binom{4}{2} = 36$ paths go through it.',
          'Every path either uses the closed corner or avoids it, so $70 - 36 = 34$ paths avoid it.',
        ],
        answer: '$34$ paths avoid the closed corner.',
      },
    ],
  },
  problems: [
    {
      q: 'Moving only right or up along the streets, how many paths are there from $A$ to $B$?',
      fig: grid(3, 3),
      choices: ['$9$', '$20$', '$6$', '$15$'],
      answer: 1,
      solution: 'Each path is a word with three $R$’s and three $U$’s, and there are $\\binom{6}{3} = 20$ such words. Multiplying the side lengths gives $9$, which counts blocks rather than paths; $6$ is the number of steps, and $15 = \\binom{6}{2}$ chooses the wrong number of slots.',
    },
    {
      q: 'On the wider grid shown, how many paths run from $A$ to $B$ if every step must go right or up?',
      fig: grid(5, 2),
      choices: ['$21$', '$10$', '$35$', '$42$'],
      answer: 0,
      solution: 'The word has five $R$’s and two $U$’s, so choose the $2$ slots for the $U$’s: $\\binom{7}{2} = 21$. Choosing $3$ slots instead gives $35$; forgetting that the two $U$’s are interchangeable gives $7 \\times 6 = 42$; and $5 \\times 2 = 10$ is the number of blocks.',
    },
    {
      q: 'A robot starts at $A$ and must reach its charging dock at $B$ by taking exactly $4$ steps right and $4$ steps up, in any order. On the way it must roll over the sensor pad at corner $P$. How many different routes can it take?',
      fig: grid(4, 4, { marks: [{ p: [1, 1], label: 'P' }] }),
      choices: ['$70$', '$22$', '$40$', '$30$'],
      answer: 2,
      solution: 'Split the route at $P$. From $A$ to $P$ is $1$ right and $1$ up: $\\binom{2}{1} = 2$ ways. From $P$ to $B$ is $3$ right and $3$ up: $\\binom{6}{3} = 20$ ways. Any first leg pairs with any second leg, so $2 \\times 20 = 40$. Answering $\\binom{8}{4} = 70$ ignores the pad entirely; $2 + 20 = 22$ adds the legs instead of multiplying; $70 - 40 = 30$ counts the routes that miss $P$.',
    },
    {
      q: 'Moving only right or up, how many paths from $A$ to $B$ pass through corner $P$?',
      fig: grid(5, 4, { marks: [{ p: [2, 2], label: 'P' }] }),
      choices: ['$126$', '$16$', '$66$', '$60$'],
      answer: 3,
      solution: 'From $A$ to $P$ is $2$ right and $2$ up: $\\binom{4}{2} = 6$ ways. From $P$ to $B$ is $3$ right and $2$ up: $\\binom{5}{2} = 10$ ways. Multiply: $6 \\times 10 = 60$. Adding the halves gives $16$; $126$ is the total with no condition; $66 = 126 - 60$ counts the paths that miss $P$.',
    },
    {
      q: 'The corner marked ✕ is closed for repairs. Moving only right or up, how many paths from $A$ to $B$ avoid it?',
      fig: grid(4, 3, { closed: [[2, 1]] }),
      choices: ['$18$', '$17$', '$35$', '$32$'],
      answer: 1,
      solution: 'All paths: $\\binom{7}{3} = 35$. Through the closed corner: $\\binom{3}{1}$ ways to reach it times $\\binom{4}{2}$ ways to finish, so $3 \\times 6 = 18$. Avoiding it: $35 - 18 = 17$. Answering $18$ is the through-count rather than the avoid-count, and $32$ subtracts only the $3$ ways of reaching the corner.',
    },
    {
      q: 'The bold street segment is the only one with a bridge over a creek, and Maya wants to walk from $A$ to $B$ moving only right or up while crossing that bridge. How many routes can she take?',
      fig: grid(5, 3, { hl: [[[2, 1], [3, 1]]] }),
      choices: ['$30$', '$24$', '$9$', '$18$'],
      answer: 3,
      solution: 'A route that uses the bridge reaches its left end, crosses, and continues from its right end. Paths from $A$ to the left end $(2$ right, $1$ up$)$: $\\binom{3}{1} = 3$. Paths from the right end to $B$ $(2$ right, $2$ up$)$: $\\binom{4}{2} = 6$. Multiply: $3 \\times 6 = 18$. Counting all paths through the left end gives $30$ and through the right end gives $24$; both include routes that turn up instead of crossing. Adding $3 + 6 = 9$ is the wrong operation.',
    },
    {
      q: 'A delivery driver starts at $A$, must stop at both $P$ and $Q$, and ends at $B$, driving only right or up. How many routes are possible?',
      fig: grid(6, 4, { marks: [{ p: [2, 1], label: 'P' }, { p: [4, 3], label: 'Q' }] }),
      choices: ['$54$', '$210$', '$18$', '$12$'],
      answer: 0,
      solution: 'Since the driver only moves right or up, $P$ must come before $Q$. Count the three legs and multiply: $A$ to $P$ is $\\binom{3}{1} = 3$, $P$ to $Q$ is $\\binom{4}{2} = 6$, and $Q$ to $B$ is $\\binom{3}{1} = 3$, so $3 \\times 6 \\times 3 = 54$. Adding the legs gives $12$, stopping after two legs gives $18$, and $210$ ignores the stops entirely.',
    },
    {
      q: 'Both corners marked ✕ are closed. Moving only right or up, how many paths from $A$ to $B$ avoid both of them?',
      fig: grid(6, 4, { closed: [[2, 2], [4, 2]] }),
      choices: ['$30$', '$120$', '$66$', '$144$'],
      answer: 2,
      solution: 'Total: $\\binom{10}{4} = 210$. Through the left ✕: $\\binom{4}{2}\\binom{6}{2} = 6 \\times 15 = 90$. Through the right ✕: $\\binom{6}{2}\\binom{4}{2} = 90$. A path through both goes left ✕ to right ✕ along one straight street, so those number $6 \\times 1 \\times 6 = 36$, and they were subtracted twice. Answer: $210 - 90 - 90 + 36 = 66$. Forgetting to add back gives $30$; subtracting only one corner gives $120$; $144 = 210 - 66$ is the complement.',
    },
    {
      q: 'On a $3 \\times 3$ block grid, a token may move one block right, one block up, or one block diagonally up-and-right in a single move. How many different move sequences take it from the bottom-left corner to the top-right corner?',
      choices: ['$51$', '$63$', '$50$', '$33$'],
      answer: 1,
      solution: 'Sort by the number $d$ of diagonal moves. With $d = 0$ the word has three $R$’s and three $U$’s: $\\binom{6}{3} = 20$. With $d = 1$ it has $R, R, U, U, D$: $\\frac{5!}{2!\\,2!} = 30$. With $d = 2$ it has $R, U, D, D$: $\\frac{4!}{2!} = 12$. With $d = 3$ there is $1$ word. Total $20 + 30 + 12 + 1 = 63$. Leaving out the $d = 2$ case gives $51$; leaving out $d = 2$ and $d = 3$ gives $50$; leaving out $d = 1$ gives $33$.',
    },
    {
      q: 'Three corners marked ✕ are closed. Moving only right or up, how many paths from $A$ to $B$ avoid all three?',
      fig: grid(5, 4, { closed: [[1, 2], [3, 1], [4, 3]] }),
      choices: ['$41$', '$35$', '$19$', '$40$'],
      answer: 2,
      solution: 'With three closed corners the subtract-and-add-back bookkeeping gets messy, so fill the grid corner by corner: each corner’s number is the sum of the numbers directly left and directly below, and a closed corner is $0$. The bottom row and left column are all $1$. The second row reads $1, 2, 3, 0, 1, 2$; the third reads $1, 0, 3, 3, 4, 6$; the fourth reads $1, 1, 4, 7, 0, 6$; and the top reads $1, 2, 6, 13, 13, 19$. So $19$ paths avoid every ✕. Ignoring one of the three closed corners gives $41$, $35$, or $40$.',
    },
  ],
}

const s53 = {
  id: '5.3',
  title: 'More Committee-type Problems',
  learn: {
    concepts: [
      {
        heading: 'Choosing from several groups',
        body: 'When a committee needs $3$ of the $7$ teachers and $2$ of the $5$ parents, make the two choices separately and multiply: $\\binom{7}{3}\\binom{5}{2} = 35 \\times 10 = 350$. Each teacher-trio can be paired with each parent-pair, which is exactly what multiplication counts. Adding $35 + 10$ is the slip — that would count committees made of only teachers or only parents.',
      },
      {
        heading: '“At least one” means count the opposite',
        body: 'To count committees with at least one girl, count every committee and subtract the ones with no girls at all. Do not pick a girl first and then fill the rest freely: a committee with two girls gets counted once for each girl, so that plan overcounts. When the rule is “at least one boy and at least one girl”, subtract both the all-boy and the all-girl committees; those two groups do not overlap, so nothing needs adding back.',
      },
      {
        heading: 'Named people in or out',
        body: 'If Priya must be on a $4$-person committee chosen from $10$ people, put her on it and choose the other $3$ from the other $9$: $\\binom{9}{3}$. If Quinn must be off, remove him and choose from $9$: $\\binom{9}{4}$. For a rule like “Tia and Uma are not both on it”, subtract the committees containing both, or split into cases; for “both or neither”, add the both-case to the neither-case.',
      },
      {
        heading: 'Named teams versus unnamed teams',
        body: 'Splitting $8$ kids into a Red team of $4$ and a Blue team of $4$ is $\\binom{8}{4} = 70$ ways: pick Red, and Blue is what is left. If the teams have no names, picking $\\{$Ann, Bo, Cy, Di$\\}$ and picking the other four describe the same split, so every split was counted twice: $\\frac{70}{2} = 35$. Divide by $2$ only when the two teams are the same size and unnamed — a team of $3$ and a team of $5$ can never be confused with each other.',
      },
    ],
    examples: [
      {
        problem: 'A club has $6$ boys and $8$ girls. How many $5$-person committees have exactly $2$ boys and $3$ girls?',
        steps: [
          'Choose the boys: $\\binom{6}{2} = 15$ ways.',
          'Choose the girls: $\\binom{8}{3} = 56$ ways.',
          'Any boy-pair goes with any girl-trio, so multiply: $15 \\times 56 = 840$.',
        ],
        answer: '$840$ committees.',
      },
      {
        problem: 'A $4$-person committee is chosen from $10$ people, two of whom are Ann and Ben. How many committees include at least one of Ann and Ben?',
        steps: [
          'Count all committees: $\\binom{10}{4} = 210$.',
          'The committees to throw away have neither Ann nor Ben, so they are chosen from the other $8$ people: $\\binom{8}{4} = 70$.',
          'Subtract: $210 - 70 = 140$.',
          'Picking Ann or Ben first and filling the rest freely would give $2 \\times \\binom{9}{3} = 168$, which counts every committee containing both of them twice.',
        ],
        answer: '$140$ committees.',
      },
      {
        problem: 'Six friends want to split into two teams of $3$ for a game. The teams have no names or colors. In how many ways can they split up?',
        steps: [
          'Pretend one team is called the first team and choose it: $\\binom{6}{3} = 20$ ways.',
          'But choosing $\\{$Ana, Ben, Cal$\\}$ as the first team and choosing $\\{$Dev, Eli, Fay$\\}$ as the first team produce the same split of the six friends.',
          'Every split was counted exactly twice, so there are $\\frac{20}{2} = 10$ ways.',
        ],
        answer: '$10$ ways.',
      },
    ],
  },
  problems: [
    {
      q: 'A relay squad is made of $2$ of the $6$ sprinters, $1$ of the $4$ hurdlers, and $1$ of the $5$ distance runners on a track team. How many different squads are possible?',
      choices: ['$24$', '$300$', '$1365$', '$600$'],
      answer: 1,
      solution: 'Choose each group separately, then multiply: $\\binom{6}{2} \\times \\binom{4}{1} \\times \\binom{5}{1} = 15 \\times 4 \\times 5 = 300$. Adding gives $15 + 4 + 5 = 24$; choosing any $4$ of the $15$ athletes gives $\\binom{15}{4} = 1365$ and ignores the mix; $600$ comes from treating the two sprinters as an ordered pair.',
    },
    {
      q: 'A $4$-person committee is chosen from $10$ students, and both Priya and Raj must be on it. How many committees are possible?',
      choices: ['$210$', '$56$', '$28$', '$45$'],
      answer: 2,
      solution: 'Priya and Raj take two seats, so choose the other $2$ members from the remaining $8$: $\\binom{8}{2} = 28$. The total $\\binom{10}{4} = 210$ ignores the rule, $\\binom{8}{3} = 56$ seats only one of the two, and $\\binom{10}{2} = 45$ forgets to remove Priya and Raj from the pool.',
    },
    {
      q: 'A $5$-person committee is chosen from $10$ students. Quinn and Ryan are both unavailable and cannot serve. How many committees are possible?',
      choices: ['$56$', '$252$', '$126$', '$70$'],
      answer: 0,
      solution: 'Remove both unavailable students and choose $5$ from the remaining $8$: $\\binom{8}{5} = 56$. Using all $10$ gives $252$; removing only one of them gives $\\binom{9}{5} = 126$; $\\binom{8}{4} = 70$ removes a seat as well as the two people.',
    },
    {
      q: 'A $3$-person committee is chosen from $6$ boys and $4$ girls. How many committees include at least one girl?',
      choices: ['$120$', '$20$', '$144$', '$100$'],
      answer: 3,
      solution: 'Count all committees and subtract the all-boy ones: $\\binom{10}{3} - \\binom{6}{3} = 120 - 20 = 100$. Picking a girl first and then any $2$ of the other $9$ gives $4 \\times 36 = 144$, which counts a committee with two girls twice and one with three girls three times. $20$ is the count of the committees being thrown away, and $120$ ignores the rule.',
    },
    {
      q: 'A $4$-person committee is chosen from $5$ boys and $5$ girls, and it must include at least one boy and at least one girl. How many committees are possible?',
      choices: ['$210$', '$200$', '$205$', '$100$'],
      answer: 1,
      solution: 'All committees: $\\binom{10}{4} = 210$. The bad ones are all-boy, $\\binom{5}{4} = 5$, or all-girl, $\\binom{5}{4} = 5$, and no committee is both. So $210 - 5 - 5 = 200$. Subtracting only one of the bad groups gives $205$, and $\\binom{5}{2}\\binom{5}{2} = 100$ counts only the committees with exactly two of each.',
    },
    {
      q: 'Eight players at practice split into a team of $3$ and a team of $5$ for a drill. The teams have no names, colors, or captains. In how many ways can they split?',
      choices: ['$56$', '$28$', '$336$', '$70$'],
      answer: 0,
      solution: 'Choose the $3$ players for the smaller team, and the other $5$ form the larger one: $\\binom{8}{3} = 56$. There is no halving here — a team of $3$ and a team of $5$ are told apart by their sizes, so no split has been counted twice. Halving anyway gives $28$; $8 \\times 7 \\times 6 = 336$ treats the small team as an ordered lineup; $\\binom{8}{4} = 70$ splits the players $4$ and $4$ instead.',
    },
    {
      q: 'A $4$-person committee is chosen from $8$ people. Tia will serve only if Uma also serves, while Uma is happy to serve with or without Tia. How many committees are possible?',
      choices: ['$70$', '$20$', '$35$', '$50$'],
      answer: 3,
      solution: 'The only forbidden committees have Tia without Uma, and those fill the other $3$ seats from the $6$ other people: $\\binom{6}{3} = 20$. So $\\binom{8}{4} - 20 = 70 - 20 = 50$. As a check by cases: both serve, $\\binom{6}{2} = 15$; Uma without Tia, $\\binom{6}{3} = 20$; neither, $\\binom{6}{4} = 15$; and $15 + 20 + 15 = 50$. Answering $20$ gives the forbidden committees, $35 = 15 + 20$ forgets the committees with neither, and $70$ ignores the rule.',
    },
    {
      q: 'A $5$-person committee is chosen from $6$ boys and $5$ girls, and it must include at least $2$ boys and at least $2$ girls. How many committees are possible?',
      choices: ['$462$', '$200$', '$350$', '$431$'],
      answer: 2,
      solution: 'With $5$ seats, the committee has either $2$ boys and $3$ girls or $3$ boys and $2$ girls, and the two cases cannot overlap. First case: $\\binom{6}{2}\\binom{5}{3} = 15 \\times 10 = 150$. Second case: $\\binom{6}{3}\\binom{5}{2} = 20 \\times 10 = 200$. Add: $150 + 200 = 350$. As a check by complement, $\\binom{11}{5} = 462$ committees in all, minus the $1 + 6 \\times 5 = 31$ with fewer than $2$ boys and the $6 + 5 \\times 15 = 81$ with fewer than $2$ girls, is $462 - 112 = 350$. Answering $200$ stops after one case, $431 = 462 - 31$ subtracts only one bad group, and $462$ ignores the rule.',
    },
    {
      q: 'Nine campers are divided into three teams of $3$ for a relay. The teams are not named or numbered in any way. How many different divisions are there?',
      choices: ['$280$', '$1680$', '$560$', '$840$'],
      answer: 0,
      solution: 'Pick a first team, a second, and a third: $\\binom{9}{3}\\binom{6}{3}\\binom{3}{3} = 84 \\times 20 \\times 1 = 1680$. The same three teams can be listed as first, second, third in $3! = 6$ orders, so each real division was counted $6$ times: $\\frac{1680}{6} = 280$. Dividing by $3$ instead of $3!$ gives $560$, dividing by $2$ gives $840$, and $1680$ forgets to divide at all.',
    },
    {
      q: 'Twelve players are divided into three unnamed teams of $4$. Alex and Blake have been fighting, and the coach insists they be on different teams. How many divisions are possible?',
      choices: ['$5775$', '$4200$', '$1575$', '$700$'],
      answer: 1,
      solution: 'Let the players themselves label the teams. Alex’s team needs $3$ more players from the $10$ who are not Alex or Blake: $\\binom{10}{3} = 120$. Blake’s team then needs $3$ more from the $7$ remaining: $\\binom{7}{3} = 35$. The last four form the third team. Since a team is pinned down by whether it holds Alex, Blake, or neither, no division by $3!$ is needed: $120 \\times 35 = 4200$. As a check, all divisions number $\\frac{\\binom{12}{4}\\binom{8}{4}}{3!} = 5775$, and those with Alex and Blake together number $\\binom{10}{2} \\times \\frac{\\binom{8}{4}}{2} = 45 \\times 35 = 1575$; and $5775 - 1575 = 4200$. Dividing $4200$ by $3!$ anyway gives $700$.',
    },
  ],
}

const s54 = {
  id: '5.4',
  title: 'Distinguishability',
  learn: {
    concepts: [
      {
        heading: 'Two questions before you count',
        body: 'Every “balls into boxes” problem hides two questions: can you tell the balls apart, and can you tell the boxes apart? A red ball and a blue ball are distinguishable; five identical white marbles are not. Boxes labeled $A$ and $B$ are distinguishable; two plain bags on the floor are not. The same numbers give four different answers depending on the two yes-or-no answers, so settle them before writing anything down.',
      },
      {
        heading: 'Distinguishable balls, distinguishable boxes',
        body: 'Each ball independently chooses a box. With $n$ different balls and $k$ labeled boxes that is $k \\times k \\times \\cdots \\times k = k^n$ ways — for $4$ balls and $3$ boxes, $3^4 = 81$. Empty boxes are allowed unless the problem says otherwise. If every box must get a ball, subtract the assignments that leave some box empty, remembering that an assignment leaving two boxes empty gets subtracted once for each of them.',
      },
      {
        heading: 'Identical balls, distinguishable boxes',
        body: 'When the balls are identical, all that matters is how many land in each box, so you are counting lists of counts that add to $n$. Five identical balls into boxes $A$ and $B$: box $A$ gets $0, 1, 2, 3, 4$, or $5$, so $6$ ways. With more boxes, picture the balls in a row with dividers between the boxes: $5$ balls in $3$ boxes is a word of $5$ stars and $2$ bars, such as $\\ast\\ast|\\ast|\\ast\\ast$, and the number of such words is $\\binom{7}{2} = 21$ — the same count as a path on a $5 \\times 2$ grid.',
      },
      {
        heading: 'Indistinguishable boxes: list, don’t divide',
        body: 'When the boxes have no labels, only the grouping matters. Identical balls into identical boxes is a list of box-sizes with the order ignored: $4$ balls into $2$ boxes is $4+0$, $3+1$, or $2+2$, so $3$ ways. Different balls into identical boxes means splitting the balls into unlabeled piles, and the safe method is to list by pile sizes. Dividing the labeled count by $k!$ is tempting but usually wrong, because an arrangement like “everything in one box” is not counted $k!$ times.',
      },
    ],
    examples: [
      {
        problem: 'Four different books are placed into three labeled bins. Bins may stay empty. How many placements are there?',
        steps: [
          'The books are distinguishable and the bins are distinguishable, so each book makes its own choice.',
          'Each of the $4$ books picks one of $3$ bins: $3 \\times 3 \\times 3 \\times 3 = 3^4$.',
          'That is $81$ placements.',
        ],
        answer: '$81$ placements.',
      },
      {
        problem: 'Five identical marbles are dropped into three cups labeled $A$, $B$, and $C$. Cups may be empty. How many different results are there?',
        steps: [
          'Only the counts matter, so a result is a list $(a, b, c)$ of non-negative whole numbers with $a + b + c = 5$.',
          'Sort by $a$: if $a = 0$ then $b$ can be $0$ through $5$, giving $6$ results; $a = 1$ gives $5$; then $4, 3, 2, 1$.',
          'Total: $6 + 5 + 4 + 3 + 2 + 1 = 21$.',
          'The same number appears as $\\binom{7}{2}$: write the marbles as $5$ stars and use $2$ bars to separate the cups, and choose where the bars go among $7$ symbols.',
        ],
        answer: '$21$ results.',
      },
      {
        problem: 'Four different toys are put into two identical, unlabeled boxes. A box may be empty. How many different ways are there?',
        steps: [
          'Since the boxes are identical, a way is just a split of the toys into two unlabeled groups.',
          'List by group sizes. All four together: $1$ way. A group of three and a single: choose the single, $4$ ways. Two groups of two: choose a partner for the first toy, $3$ ways.',
          'Total: $1 + 4 + 3 = 8$.',
          'Check: with labeled boxes there are $2^4 = 16$ ways, and swapping the labels pairs them up, so $\\frac{16}{2} = 8$. Halving works here only because no placement is unchanged by the swap.',
        ],
        answer: '$8$ ways.',
      },
    ],
  },
  problems: [
    {
      q: 'Five different keys are hung on two labeled hooks, left and right. A hook may hold any number of keys, including none. How many arrangements are there?',
      choices: ['$10$', '$25$', '$32$', '$6$'],
      answer: 2,
      solution: 'Each key chooses left or right: $2^5 = 32$. Squaring the wrong way gives $5^2 = 25$; $6$ is the answer when the keys are identical, since only the count on the left hook would matter; $10 = \\binom{5}{2}$ counts one particular split size.',
    },
    {
      q: 'Eight identical stickers are split between two envelopes labeled $A$ and $B$, and each envelope must get at least one sticker. How many different splits are there?',
      choices: ['$7$', '$256$', '$9$', '$8$'],
      answer: 0,
      solution: 'The stickers are identical, so only the number in envelope $A$ matters, and it can be $1, 2, 3, 4, 5, 6$, or $7$: that is $7$ splits. Answering $2^8 = 256$ treats the stickers as different; $9$ allows an empty envelope by letting $A$ hold $0$ or $8$; $8$ forgets to exclude one of those two.',
    },
    {
      q: 'Three different stickers are given to three children, Ali, Bea, and Cal. A child may receive any number of stickers, including none. How many ways are there?',
      choices: ['$9$', '$6$', '$10$', '$27$'],
      answer: 3,
      solution: 'Each sticker picks one of three children: $3^3 = 27$. The answer $6 = 3!$ counts only the ways where each child gets exactly one; $9 = 3 \\times 3$ stops after two stickers; $10$ is the count for identical stickers.',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of non-negative integers satisfy $a + b + c = 8$? (The triple $(8, 0, 0)$ counts, and $(1, 2, 5)$ and $(5, 2, 1)$ are different triples.)',
      choices: ['$36$', '$45$', '$55$', '$28$'],
      answer: 1,
      solution: 'This is $8$ identical balls dropped into three labeled boxes $a$, $b$, $c$, with empty boxes allowed: arrange $8$ stars and $2$ bars, $\\binom{10}{2} = 45$. Sorting by $a$ checks it: $a = 0$ gives $9$ triples, then $8, 7, \\ldots, 1$, and $9 + 8 + \\cdots + 1 = 45$. The answer $\\binom{9}{2} = 36$ uses $9$ symbols instead of $10$, $\\binom{11}{2} = 55$ uses $11$, and $\\binom{8}{2} = 28$ forgets the bars entirely.',
    },
    {
      q: 'Four different plants are placed on two labeled shelves, upper and lower, and neither shelf may be left empty. How many arrangements are there?',
      choices: ['$16$', '$15$', '$14$', '$7$'],
      answer: 2,
      solution: 'With empties allowed, each plant picks a shelf: $2^4 = 16$. Exactly two of those leave a shelf empty — all on the upper, all on the lower — so $16 - 2 = 14$. Subtracting only one gives $15$; $7$ is the answer for unlabeled shelves; $16$ ignores the rule.',
    },
    {
      q: 'Five different toys are split between two identical, unlabeled bags, and each bag must get at least one toy. How many different ways are there?',
      choices: ['$15$', '$30$', '$16$', '$10$'],
      answer: 0,
      solution: 'Pretend the bags are labeled: $2^5 = 32$ assignments, minus the $2$ that leave a bag empty, leaves $30$. Swapping the labels turns each of those into a different assignment of the same split, so every real split was counted twice: $\\frac{30}{2} = 15$. Check by sizes: a $1$-and-$4$ split is $\\binom{5}{1} = 5$ ways and a $2$-and-$3$ split is $\\binom{5}{2} = 10$ ways, again $15$. The answer $30$ forgets the bags are identical; $16 = 2^4$ allows an empty bag; $10$ counts only the $2$-and-$3$ splits.',
    },
    {
      q: 'Six identical candies are shared among three children, Dev, Eve, and Fin, and every child must receive at least one candy. How many ways can the candies be shared?',
      choices: ['$28$', '$25$', '$7$', '$10$'],
      answer: 3,
      solution: 'Hand each child one candy first; that leaves $3$ identical candies to share with no restriction, which is $3$ stars and $2$ bars: $\\binom{5}{2} = 10$. Skipping the rule gives $\\binom{8}{2} = 28$. Subtracting from $28$ only the $3$ ways that leave two children empty-handed gives $25$; the $7$ ways that leave Dev empty-handed is a piece of a longer subtraction, not the answer.',
    },
    {
      q: 'Six identical marbles are placed into three identical, unlabeled cups. A cup may be empty. How many different placements are there?',
      choices: ['$28$', '$7$', '$11$', '$3$'],
      answer: 1,
      solution: 'Only the multiset of cup-sizes matters, so list the ways to write $6$ as a sum of at most three parts, largest first: $6$, $5+1$, $4+2$, $3+3$, $4+1+1$, $3+2+1$, $2+2+2$. That is $7$ placements. Labeled cups would give $\\binom{8}{2} = 28$; allowing any number of parts gives $11$; requiring every cup to be non-empty keeps only the last $3$.',
    },
    {
      q: 'Four different stuffed animals are packed into three identical, unlabeled moving boxes. A box may stay empty. How many different packings are there?',
      choices: ['$81$', '$6$', '$27$', '$14$'],
      answer: 3,
      solution: 'Sort by how many boxes are used. One box: $1$ way. Two boxes: split the animals into two unlabeled non-empty groups, sizes $3+1$ in $4$ ways or $2+2$ in $3$ ways, so $7$. Three boxes: sizes $2+1+1$, and choosing the pair decides everything, $\\binom{4}{2} = 6$. Total $1 + 7 + 6 = 14$. Labeled boxes give $3^4 = 81$; dividing that by $3$ gives $27$ and by $3! = 6$ gives a non-integer, which is a sign that plain division cannot work here; $6$ counts only the packings that use all three boxes.',
    },
    {
      q: 'Five different charms, one of them gold and one silver, are placed on three labeled bracelets. Every bracelet must get at least one charm, and the gold and silver charms must be on different bracelets. How many arrangements are there?',
      choices: ['$114$', '$150$', '$162$', '$69$'],
      answer: 0,
      solution: 'First count arrangements with every bracelet non-empty and no rule about gold and silver: $3^5 = 243$, minus the $3 \\times 2^5 = 96$ that leave a chosen bracelet empty, plus the $3$ that pile everything on one bracelet and were subtracted twice, gives $150$. Among those, the ones with gold and silver together can be counted by gluing the two into a single charm: $4$ charms onto $3$ non-empty bracelets is $3^4 - 3 \\times 2^4 + 3 = 36$. So $150 - 36 = 114$. Answering $150$ ignores the gold-silver rule; $162 = 3 \\times 2 \\times 27$ separates gold and silver but allows empty bracelets; $69 = 150 - 81$ subtracts every together-arrangement, including ones with an empty bracelet that were never in the $150$.',
    },
  ],
}

const challenge = [
  {
    q: 'A street grid is $7$ blocks wide and $3$ blocks tall. Moving only right or up along the streets, how many paths from the bottom-left corner to the top-right corner begin with a step up?',
    choices: ['$120$', '$84$', '$60$', '$36$'],
    answer: 3,
    solution: 'Each path is a word with seven $R$’s and three $U$’s. If the first letter is $U$, the remaining $9$ letters hold seven $R$’s and two $U$’s: $\\binom{9}{2} = 36$. Answering $\\binom{10}{3} = 120$ counts every path; $\\binom{9}{3} = 84$ fixes the first step but still places three $U$’s; $60$ assumes half the paths start upward, though with more $R$’s than $U$’s fewer than half do.',
  },
  {
    q: 'A club of $12$ members chooses a $3$-person committee, and then $2$ of those $3$ are chosen to present the committee’s report. How many different outcomes (committee plus its pair of presenters) are possible?',
    choices: ['$660$', '$220$', '$66$', '$1320$'],
    answer: 0,
    solution: 'Choose the committee, then its presenters: $\\binom{12}{3} \\times \\binom{3}{2} = 220 \\times 3 = 660$. Equivalently, choose the $2$ presenters from the club and then the third member from the other $10$: $\\binom{12}{2} \\times 10 = 660$. Answering $220$ forgets the presenters, $\\binom{12}{2} = 66$ forgets the third member, and $1320$ treats the two presenters as an ordered pair.',
  },
  {
    q: 'Six identical tokens are placed into four boxes labeled $A$, $B$, $C$, and $D$. Box $A$ must get at least one token; the other boxes may be empty. How many different placements are there?',
    choices: ['$84$', '$28$', '$56$', '$10$'],
    answer: 2,
    solution: 'Put one token in box $A$ first; the other $5$ identical tokens then go anywhere, which is $5$ stars and $3$ bars: $\\binom{8}{3} = 56$. As a check, all placements number $\\binom{9}{3} = 84$ and those with $A$ empty put $6$ tokens into $3$ boxes, $\\binom{8}{2} = 28$, and $84 - 28 = 56$. Answering $84$ ignores the rule, $28$ is the complement, and $10 = \\binom{5}{3}$ requires every box to be non-empty.',
  },
  {
    q: 'Four different balls are placed into two boxes labeled $A$ and $B$; a box may be empty. How many placements put at least two balls in box $A$?',
    choices: ['$16$', '$11$', '$10$', '$5$'],
    answer: 1,
    solution: 'A placement is decided by which balls go in $A$. At least two means a set of size $2$, $3$, or $4$: $\\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 6 + 4 + 1 = 11$. Forgetting the all-four case gives $10$, counting only sizes $3$ and $4$ gives $5$, and $2^4 = 16$ ignores the rule.',
  },
  {
    q: 'Moving only right or up, how many paths from $A$ to $B$ pass through corner $P$ but not through corner $Q$?',
    fig: grid(6, 4, { marks: [{ p: [2, 2], label: 'P' }, { p: [4, 3], label: 'Q' }] }),
    choices: ['$90$', '$54$', '$156$', '$36$'],
    answer: 3,
    solution: 'Paths through $P$: $\\binom{4}{2}\\binom{6}{2} = 6 \\times 15 = 90$. Among those, the ones that also visit $Q$ number $\\binom{4}{2} \\times \\binom{3}{1} \\times \\binom{3}{1} = 6 \\times 3 \\times 3 = 54$. Subtract: $90 - 54 = 36$. Answering $90$ forgets to exclude $Q$; $54$ is the excluded group; $156 = 210 - 54$ subtracts the excluded group from all $210$ paths instead of from the $90$ that visit $P$.',
  },
  {
    q: 'Three classes each send $3$ students to a workshop, $9$ students in all. A $4$-student panel is chosen from them, and every class must have at least one student on the panel. How many panels are possible?',
    choices: ['$81$', '$126$', '$27$', '$162$'],
    answer: 0,
    solution: 'With $4$ seats and $3$ classes each represented, one class sends $2$ and the others send $1$ each. Choose the doubled class ($3$ ways), its pair ($\\binom{3}{2} = 3$), and one student from each other class ($3 \\times 3$): $3 \\times 3 \\times 9 = 81$. Picking one from each class and then one more freely gives $27 \\times 6 = 162$, which counts every panel twice (once for each of the two students from the doubled class taken as the “extra” one); $27$ stops after one per class; $\\binom{9}{4} = 126$ ignores the rule.',
  },
  {
    q: 'Both corners marked ✕ are closed. Moving only right or up, how many paths from $A$ to $B$ avoid both?',
    fig: grid(4, 4, { closed: [[1, 3], [3, 1]] }),
    choices: ['$54$', '$22$', '$38$', '$32$'],
    answer: 2,
    solution: 'Total: $\\binom{8}{4} = 70$. Through the upper-left ✕: $\\binom{4}{1}\\binom{4}{1} = 16$; through the lower-right ✕: also $16$. No path visits both, because after the upper-left ✕ a path can never come back down to the lower-right one — so there is nothing to add back. Answer: $70 - 16 - 16 = 38$. Subtracting only one corner gives $54$, subtracting a phantom overlap gives $22$, and $32$ is the number of bad paths.',
  },
  {
    q: 'Ten campers, including twins Cam and Dee, are split into two unnamed teams of $5$. The twins insist on being together. How many splits are possible?',
    choices: ['$126$', '$56$', '$70$', '$28$'],
    answer: 1,
    solution: 'The twins’ team is pinned down as “the team with the twins”, so choose its other $3$ members from the $8$ non-twins: $\\binom{8}{3} = 56$; the other five form the second team, and no division by $2$ is needed. As a check, all splits number $\\frac{\\binom{10}{5}}{2} = 126$ and those with the twins apart number $\\binom{8}{4} = 70$, and $126 - 70 = 56$. Halving to $28$ divides out a symmetry that the twins already broke.',
  },
  {
    q: 'A bug crawls along the edges of a stack of unit cubes arranged $2$ by $2$ by $2$, from one bottom corner to the opposite top corner. Each move goes one unit east, north, or up, and it never moves west, south, or down. How many routes pass through the center of the stack — the one lattice point shared by all eight cubes?',
    choices: ['$90$', '$54$', '$12$', '$36$'],
    answer: 3,
    solution: 'The center is $1$ east, $1$ north, and $1$ up from the start, so split the route there. From the start to the center is a word with one $E$, one $N$, and one $U$: $3! = 6$ routes. From the center to the far corner is again one of each: $6$ routes. Any first half pairs with any second half: $6 \\times 6 = 36$. As a check, all routes number $\\frac{6!}{2!\\,2!\\,2!} = 90$, and a route visits the center exactly when its first three moves use three different directions. Answering $90$ ignores the center; $54 = 90 - 36$ counts the routes that miss it; $6 + 6 = 12$ adds the halves instead of multiplying.',
  },
  {
    q: 'Four married couples ($8$ people) are at a party. A $3$-person cleanup crew is chosen from them, and no married couple may both be on the crew. How many crews are possible?',
    choices: ['$32$', '$56$', '$24$', '$192$'],
    answer: 0,
    solution: 'The three crew members must come from three different couples. Choose which three couples: $\\binom{4}{3} = 4$; then choose one person from each of those couples: $2^3 = 8$. Multiply: $4 \\times 8 = 32$. As a check, all crews number $\\binom{8}{3} = 56$, and crews containing a couple number $4 \\times 6 = 24$ (pick the couple, then any third person), giving $56 - 24 = 32$ again. Answering $24$ is the bad count, $56$ ignores the rule, and $192 = 8 \\times 6 \\times 4$ picks the crew one person at a time and forgets to divide by $3!$.',
  },
  {
    q: 'Five different books are sorted into three identical, unlabeled piles, and no pile may be empty. How many different sortings are there?',
    choices: ['$150$', '$41$', '$25$', '$10$'],
    answer: 2,
    solution: 'The pile sizes are $3+1+1$ or $2+2+1$. For $3+1+1$, choosing the trio decides everything: $\\binom{5}{3} = 10$. For $2+2+1$, choose the single book ($5$ ways), then split the other four into two unlabeled pairs ($3$ ways): $15$. Total $10 + 15 = 25$. Labeled piles would give $25 \\times 3! = 150$; allowing empty piles adds the $1 + 15$ sortings using one or two piles, giving $41$; $10$ stops after the first case.',
  },
  {
    q: 'Moving only right or up, how many paths from $A$ to $B$ never go above the dashed diagonal? A path may touch the diagonal, but every corner it visits must satisfy “height $\\le$ distance from the left edge”.',
    fig: (() => {
      const f = grid(5, 5)
      f.elems.splice(12, 0, { t: 'seg', a: [0, 0], b: [5, 5], dash: true })
      return f
    })(),
    choices: ['$126$', '$42$', '$84$', '$21$'],
    answer: 1,
    solution: 'The formula does not know about the diagonal, so count corner by corner, giving every corner above the diagonal a $0$. The bottom row is all $1$’s. The next row, starting at the diagonal corner, reads $1, 2, 3, 4, 5$; the next reads $2, 5, 9, 14$; then $5, 14, 28$; then $14, 42$; and the top corner gets $42$. Halving the unrestricted total $\\binom{10}{5} = 252$ to get $126$ is tempting but wrong, since paths that cross the diagonal are not matched one-to-one with paths that stay below; $84$ and $21$ are other fractions of $252$ with no counting behind them.',
  },
]

const worksheet = [
  {
    q: 'A street grid is $6$ blocks wide and $2$ blocks tall. Moving only right or up, how many paths are there from the bottom-left corner to the top-right corner?',
    answer: '$28$',
    solution: 'A path is a word with six $R$’s and two $U$’s; choose the two $U$ positions among $8$: $\\binom{8}{2} = 28$.',
  },
  {
    q: 'On the grid shown, a walker goes from $A$ to $B$ moving only right or up and wants to stop at corner $P$ on the way. How many routes are there?',
    fig: grid(4, 4, { marks: [{ p: [1, 3], label: 'P', dx: -14, dy: -7 }] }),
    answer: '$16$',
    solution: 'From $A$ to $P$ is $1$ right and $3$ up: $\\binom{4}{1} = 4$ ways. From $P$ to $B$ is $3$ right and $1$ up: $\\binom{4}{1} = 4$ ways. Multiply: $4 \\times 4 = 16$.',
  },
  {
    q: 'A $4$-person committee is chosen from $5$ boys and $4$ girls, and it must include at least one boy and at least one girl. How many committees are possible?',
    answer: '$120$',
    solution: 'All committees minus the all-boy ones and the all-girl ones, which cannot overlap: $\\binom{9}{4} - \\binom{5}{4} - \\binom{4}{4} = 126 - 5 - 1 = 120$.',
  },
  {
    q: 'A $5$-person committee is chosen from $12$ people. Hana must be on it, and Ivan must not. How many committees are possible?',
    answer: '$210$',
    solution: 'Seat Hana and remove Ivan; the other $4$ seats are filled from the remaining $10$ people: $\\binom{10}{4} = 210$.',
  },
  {
    q: 'Eight children, including Ann and Bo, split into two teams of $4$ for a game. The teams have no names, and Ann and Bo must be on different teams. In how many ways can they split?',
    answer: '$20$',
    solution: 'Call the teams “Ann’s team” and “Bo’s team”; that names them, so no halving is needed. Ann’s team takes $3$ more children from the $6$ who are not Ann or Bo, $\\binom{6}{3} = 20$, and the other three join Bo. As a check, all splits number $\\frac{\\binom{8}{4}}{2} = 35$, and those with Ann and Bo together number $\\binom{6}{2} = 15$; $35 - 15 = 20$.',
  },
  {
    q: 'Six identical marbles are dropped into three cups labeled $A$, $B$, and $C$. Cup $A$ must receive at least $2$ marbles; the other cups may be empty. How many different results are there?',
    answer: '$15$',
    solution: 'Put $2$ marbles in cup $A$ first. The other $4$ identical marbles go anywhere: $4$ stars and $2$ bars, $\\binom{6}{2} = 15$. Listing by the count in cup $A$ ($2$ through $6$) gives $5 + 4 + 3 + 2 + 1 = 15$ as well.',
  },
  {
    q: 'Four different letters are dropped into three labeled mailboxes, and exactly $2$ of the letters must land in mailbox $1$. The other mailboxes may receive any number of letters, including none. How many ways are there?',
    answer: '$24$',
    solution: 'Choose which $2$ letters go in mailbox $1$: $\\binom{4}{2} = 6$. Each of the other $2$ letters independently picks mailbox $2$ or $3$: $2^2 = 4$. Multiply: $6 \\times 4 = 24$.',
  },
  {
    q: 'Four different puzzles are divided between two identical, unlabeled bags, and neither bag may be empty. How many different divisions are there?',
    answer: '$7$',
    solution: 'List by bag sizes: a $1$-and-$3$ split is decided by the lone puzzle, $4$ ways; a $2$-and-$2$ split is decided by the partner of the first puzzle, $3$ ways. Total $7$. As a check, $(2^4 - 2) \\div 2 = 7$.',
  },
  {
    q: 'The two corners marked ✕ are flooded. Moving only right or up, how many paths from $A$ to $B$ stay clear of both flooded corners?',
    fig: grid(5, 4, { closed: [[2, 2], [3, 3]] }),
    answer: '$42$',
    solution: 'Total $\\binom{9}{4} = 126$. Through the lower ✕: $\\binom{4}{2}\\binom{5}{2} = 60$. Through the upper ✕: $\\binom{6}{3}\\binom{3}{1} = 60$. Through both: $6 \\times \\binom{2}{1} \\times 3 = 36$, subtracted twice so far. Answer: $126 - 60 - 60 + 36 = 42$.',
  },
  {
    q: 'Seven identical ornaments are hung on three labeled hooks. Every hook must hold at least $1$ ornament, and no hook may hold more than $3$. How many arrangements are there?',
    answer: '$6$',
    solution: 'The counts on the three hooks are a list of three numbers from $1$ to $3$ adding to $7$. The largest is $3$ (three $2$’s add to only $6$), leaving $4$ for the other two, which is $3 + 1$ or $2 + 2$. The lists are the $3$ orderings of $3, 3, 1$ and the $3$ orderings of $3, 2, 2$: $6$ arrangements.',
  },
]

export default {
  id: 'intro-counting-ch05',
  book: 'intro-counting',
  number: 5,
  title: 'More With Combinations',
  intro:
    'Combinations do more than pick committees. In this chapter they count routes across a city grid, handle committees with rules about who is in and who is out, and settle the slippery question of whether the things you are counting can even be told apart. By the end you will spot $\\binom{n}{k}$ hiding in problems that never mention choosing anything.',
  sections: [s52, s53, s54],
  challenge,
  worksheet,
}
