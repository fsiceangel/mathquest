// Counting & Probability — Chapter 4: Committees and Combinations
// All problems, explanations, and examples are original MathQuest content.

const s42 = {
  id: '4.2',
  title: 'Committee Forming',
  learn: {
    concepts: [
      {
        heading: 'Officers versus committees',
        body: 'A club of $5$ people picks a president and a treasurer: $5$ choices for president, then $4$ for treasurer, so $5 \\times 4 = 20$ outcomes. Now the same club picks two people for a committee with no titles. Choosing Ana then Ben and choosing Ben then Ana both give the committee $\\{\\text{Ana}, \\text{Ben}\\}$, so the $20$ ordered picks describe only $\\frac{20}{2} = 10$ committees. Titles make order matter; a committee does not care who was named first.',
      },
      {
        heading: 'Count in order, then divide',
        body: 'To choose a committee of $k$ people from $n$, first count the ordered selections: $n(n-1)(n-2)\\cdots$ with $k$ factors. Every committee shows up once for each way to order its $k$ members, which is $k!$ times. So the number of committees is the ordered count divided by $k!$. A committee of $3$ from $7$ people: $\\frac{7 \\times 6 \\times 5}{3!} = \\frac{210}{6} = 35$.',
      },
      {
        heading: 'The name and the symbol',
        body: 'A choice of $k$ objects from $n$ where order does not matter is called a combination, written $\\binom{n}{k}$ and read "$n$ choose $k$". So $\\binom{7}{3} = 35$ and $\\binom{5}{2} = 10$. The symbol answers one question only: how many different groups of size $k$ can be pulled from a set of $n$ different things. The things must be distinguishable and each may be picked at most once.',
      },
      {
        heading: 'The trap: dividing when the roles differ',
        body: 'Divide by $k!$ only when the chosen people are interchangeable. If two people are chosen as captain and vice-captain, swapping them gives a different outcome, so the ordered count $n(n-1)$ is already right. And if a committee is chosen from two separate pools — say two teachers and two students — count each pool as its own committee and multiply; do not choose four people from everyone and hope.',
      },
    ],
    examples: [
      {
        problem: 'How many two-person committees can be chosen from a group of $9$ people?',
        steps: [
          'Choosing in order gives $9 \\times 8 = 72$ ordered pairs.',
          'Each committee of two was counted twice, once in each order.',
          'So there are $\\frac{72}{2} = 36$ committees.',
        ],
        answer: 'There are $36$ committees, which is $\\binom{9}{2}$.',
      },
      {
        problem: 'A soccer coach picks $3$ of her $6$ midfielders to start the match. In how many ways can she pick the three starters?',
        steps: [
          'Picking one at a time gives $6 \\times 5 \\times 4 = 120$ ordered lists.',
          'Any three starters can be listed in $3! = 6$ orders, and the coach does not care which order she names them in.',
          'Divide: $\\frac{120}{6} = 20$ ways.',
        ],
        answer: 'The coach has $\\binom{6}{3} = 20$ ways to pick the starters.',
      },
      {
        problem: 'A committee is formed with $2$ of $5$ parents and $1$ of $4$ teachers. How many different committees are possible?',
        steps: [
          'The parents are chosen from their own pool: $\\frac{5 \\times 4}{2} = 10$ ways.',
          'The teacher is chosen from the other pool: $4$ ways.',
          'Any parent pair can go with any teacher, so multiply: $10 \\times 4 = 40$.',
        ],
        answer: 'There are $40$ possible committees.',
      },
    ],
  },
  problems: [
    {
      q: 'A book club has $6$ members. How many ways are there to choose $2$ of them to bring snacks next week?',
      choices: ['$30$', '$15$', '$12$', '$36$'],
      answer: 1,
      solution: 'Ordered choices give $6 \\times 5 = 30$, and each pair was counted twice, so there are $\\frac{30}{2} = 15$ ways. The choice $30$ forgets that the two snack-bringers have no order; $36$ lets the same person be picked twice.',
    },
    {
      q: 'Five friends want to send $3$ of their group to a concert. In how many ways can the $3$ concert-goers be chosen?',
      choices: ['$60$', '$15$', '$10$', '$20$'],
      answer: 2,
      solution: 'In order there are $5 \\times 4 \\times 3 = 60$ selections, but each group of three appears in $3! = 6$ orders. So there are $\\frac{60}{6} = 10$ groups. Dividing by $3$ instead of $3!$ gives the tempting $20$.',
    },
    {
      q: 'Choosing $3$ people from $7$ one at a time gives $7 \\times 6 \\times 5 = 210$ ordered lists. How many of those lists describe the same $3$-person committee?',
      choices: ['$3$', '$7$', '$6$', '$35$'],
      answer: 2,
      solution: 'A fixed committee of three people can be listed in $3! = 6$ different orders, so each committee appears $6$ times among the $210$ lists. That is why the number of committees is $\\frac{210}{6} = 35$ — the choice $35$ is the number of committees, not the number of repeats.',
    },
    {
      q: 'A club has $8$ members. Let $P$ be the number of ways to choose a president and a treasurer (two different people), and let $Q$ be the number of ways to choose $2$ members to serve as equal co-chairs. What is $P - Q$?',
      choices: ['$28$', '$0$', '$56$', '$84$'],
      answer: 0,
      solution: 'Titles make order matter, so $P = 8 \\times 7 = 56$. Co-chairs are interchangeable, so $Q = \\frac{56}{2} = 28$. Then $P - Q = 56 - 28 = 28$. The choice $0$ treats the two situations as the same.',
    },
    {
      q: 'An ice cream shop has $4$ flavors. A bowl holds $3$ scoops, all of different flavors, and the scoops are mixed together so their order does not matter. How many different bowls can be made?',
      choices: ['$24$', '$12$', '$4$', '$64$'],
      answer: 2,
      solution: 'Ordered, there are $4 \\times 3 \\times 2 = 24$ ways, and each set of three flavors appears in $3! = 6$ orders, so there are $\\frac{24}{6} = 4$ bowls. Quicker: choosing $3$ flavors to use is the same as choosing the $1$ flavor to skip, and there are $4$ ways to do that. The choice $64$ allows repeated flavors in order.',
    },
    {
      q: 'A class of $9$ students needs a $3$-person cleanup crew. How many different crews are possible?',
      choices: ['$504$', '$27$', '$168$', '$84$'],
      answer: 3,
      solution: 'Ordered selections: $9 \\times 8 \\times 7 = 504$. Each crew appears $3! = 6$ times, so there are $\\frac{504}{6} = 84$ crews. Dividing by $3$ instead of $6$ gives $168$.',
    },
    {
      q: 'A coach must choose $4$ of her $10$ players to run a relay. The order they run in will be decided later. How many different groups of $4$ runners can she choose?',
      choices: ['$5040$', '$210$', '$840$', '$40$'],
      answer: 1,
      solution: 'Ordered: $10 \\times 9 \\times 8 \\times 7 = 5040$. Each group of four appears in $4! = 24$ orders, so there are $\\frac{5040}{24} = 210$ groups. The choice $5040$ counts running orders, which the coach has not chosen yet; $840$ divides by $3!$ instead of $4!$.',
    },
    {
      q: 'A committee is made of $2$ girls chosen from $5$ girls and $2$ boys chosen from $6$ boys. How many different committees are possible?',
      choices: ['$25$', '$330$', '$150$', '$300$'],
      answer: 2,
      solution: 'Count each pool separately: the girls can be chosen in $\\frac{5 \\times 4}{2} = 10$ ways and the boys in $\\frac{6 \\times 5}{2} = 15$ ways. Any girl pair goes with any boy pair, so multiply: $10 \\times 15 = 150$. Adding gives $25$; choosing any $4$ of all $11$ people ignores the two-and-two rule and gives $330$.',
    },
    {
      q: 'A $4$-person committee is chosen from $8$ people. Maya will serve only if Noor also serves; Noor is willing to serve with or without Maya. How many committees are possible?',
      choices: ['$35$', '$70$', '$30$', '$50$'],
      answer: 3,
      solution: 'Split on Maya. If Maya serves, Noor must too, and the other $2$ seats go to $2$ of the remaining $6$ people: $\\binom{6}{2} = 15$ committees. If Maya does not serve, all $4$ seats go to the other $7$ people, with no rule on Noor: $\\binom{7}{4} = 35$ committees. Add: $15 + 35 = 50$. The choice $70$ is $\\binom{8}{4}$ with the rule ignored; $35$ leaves Maya out entirely; $30$ forgets that Noor may serve without Maya and only allows both or neither.',
    },
    {
      q: 'A $4$-person committee is chosen from $9$ people. Ravi and Sofia refuse to serve together, though either may serve alone. How many committees are possible?',
      choices: ['$105$', '$70$', '$126$', '$21$'],
      answer: 0,
      solution: 'Count every committee, then throw away the bad ones. Without any rule there are $\\frac{9 \\times 8 \\times 7 \\times 6}{4!} = 126$ committees. The bad ones contain both Ravi and Sofia plus $2$ of the other $7$ people: $\\frac{7 \\times 6}{2} = 21$. So $126 - 21 = 105$ committees obey the rule. The choice $70$ removes one of the two people entirely, which is too strict.',
    },
  ],
}

const s43 = {
  id: '4.3',
  title: 'How to Compute Combinations',
  learn: {
    concepts: [
      {
        heading: 'The formula',
        body: 'The ordered count $n(n-1)\\cdots(n-k+1)$ is $\\frac{n!}{(n-k)!}$, because dividing $n!$ by $(n-k)!$ cancels every factor below $n-k+1$. Dividing once more by $k!$ for the orderings gives $\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$. For $\\binom{6}{2}$ that is $\\frac{720}{2 \\cdot 24} = 15$. The formula is tidy, but you will almost never multiply out the factorials.',
      },
      {
        heading: 'Cancel before you multiply',
        body: 'Write only the $k$ factors that survive on top and $k!$ on the bottom, then cancel. $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1}$: the $3$ cancels into the $9$ and the $2$ into the $8$, leaving $10 \\cdot 3 \\cdot 4 = 120$. Since $\\binom{n}{k}$ counts groups, the bottom always divides the top exactly — if you get a fraction, look for the slip.',
      },
      {
        heading: 'Two shortcuts worth memorizing',
        body: 'Choosing $2$ from $n$ is $\\binom{n}{2} = \\frac{n(n-1)}{2}$, the number of handshakes among $n$ people. And $\\binom{n}{1} = n$, $\\binom{n}{0} = 1$, $\\binom{n}{n} = 1$: there is one way to choose nobody, one way to choose everybody, and $n$ ways to choose a single person. The formula agrees, since $0! = 1$ makes $\\binom{n}{0} = \\frac{n!}{0!\\,n!} = 1$.',
      },
      {
        heading: 'The trap: the wrong denominator',
        body: 'The denominator is $k!$, the number of orderings of the chosen group — not $k$, and not $n$. Students who divide $10 \\cdot 9 \\cdot 8$ by $3$ get $240$ instead of $120$. The other classic slip is putting the wrong number of factors on top: $\\binom{9}{4}$ needs four factors, $9 \\cdot 8 \\cdot 7 \\cdot 6$, ending at $n - k + 1 = 6$. Count the factors on top; there should be exactly $k$ of them.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\binom{8}{3}$.',
        steps: [
          'Put $k = 3$ factors on top, starting at $8$: $\\frac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1}$.',
          'Cancel: $\\frac{6}{3 \\cdot 2} = 1$, leaving $8 \\cdot 7 = 56$.',
          'Check that the answer is a whole number, as a count of groups must be.',
        ],
        answer: '$\\binom{8}{3} = 56$.',
      },
      {
        problem: 'Compute $\\binom{13}{2}$, $\\binom{13}{1}$, and $\\binom{13}{0}$.',
        steps: [
          'The handshake shortcut gives $\\binom{13}{2} = \\frac{13 \\cdot 12}{2} = 78$.',
          'There are $13$ ways to choose one thing, so $\\binom{13}{1} = 13$.',
          'There is exactly one way to choose nothing, so $\\binom{13}{0} = 1$.',
        ],
        answer: '$78$, $13$, and $1$.',
      },
      {
        problem: 'A pizza place offers $8$ toppings. How many pizzas have exactly $4$ toppings?',
        steps: [
          'The toppings are a set, not a list, so the count is $\\binom{8}{4}$.',
          'Write four factors over $4! = 24$: $\\frac{8 \\cdot 7 \\cdot 6 \\cdot 5}{24}$.',
          'Cancel $8 \\cdot 6 = 48$ against $24$ to get $2$, leaving $2 \\cdot 7 \\cdot 5 = 70$.',
        ],
        answer: 'There are $\\binom{8}{4} = 70$ such pizzas.',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\binom{10}{2}$?',
      choices: ['$90$', '$20$', '$45$', '$100$'],
      answer: 2,
      solution: 'Use the handshake shortcut: $\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$. Forgetting the division gives $90$; $20$ comes from adding $10 + 10$ instead of multiplying.',
    },
    {
      q: 'What is $\\binom{12}{3}$?',
      choices: ['$220$', '$1320$', '$440$', '$36$'],
      answer: 0,
      solution: 'Three factors over $3! = 6$: $\\frac{12 \\cdot 11 \\cdot 10}{6}$. Cancel $12 \\div 6 = 2$, leaving $2 \\cdot 11 \\cdot 10 = 220$. Skipping the division gives $1320$, and dividing by $3$ instead of $3!$ gives $440$.',
    },
    {
      q: 'What is $\\binom{9}{0} + \\binom{9}{1} + \\binom{9}{9}$?',
      choices: ['$9$', '$11$', '$10$', '$12$'],
      answer: 1,
      solution: 'There is one way to choose nothing, $9$ ways to choose one thing, and one way to choose all nine: $1 + 9 + 1 = 11$. The answer $10$ comes from thinking $\\binom{9}{0} = 0$.',
    },
    {
      q: 'A teacher has $15$ different stickers and gives $2$ of them to a student. How many different pairs of stickers could the student receive?',
      choices: ['$210$', '$30$', '$225$', '$105$'],
      answer: 3,
      solution: 'The pair is a set, so it is $\\binom{15}{2} = \\frac{15 \\cdot 14}{2} = 105$. The choice $210$ treats the stickers as first and second; $225$ allows the same sticker twice.',
    },
    {
      q: 'What is $\\binom{9}{4}$?',
      choices: ['$3024$', '$126$', '$252$', '$63$'],
      answer: 1,
      solution: 'Four factors over $4! = 24$: $\\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24}$. Cancel $8 \\cdot 6 = 48$ against $24$ to get $2$, so the value is $2 \\cdot 9 \\cdot 7 = 126$. Dividing by $12$ instead of $24$ gives $252$; skipping the division gives $3024$.',
    },
    {
      q: 'A park has $11$ different trails, and a hiker will walk $5$ of them this month. How many different sets of $5$ trails can she choose?',
      choices: ['$55$', '$252$', '$462$', '$924$'],
      answer: 2,
      solution: 'She chooses a set of $5$ from $11$: $\\binom{11}{5} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{120}$. Cancel $10 \\cdot 9 \\cdot 8 = 720$ against $120$ to get $6$, leaving $6 \\cdot 11 \\cdot 7 = 462$. The choice $55$ multiplies $11 \\cdot 5$; $924$ is $\\binom{12}{6}$, one too many trails and one too many chosen.',
    },
    {
      q: 'For which value of $n$ is $\\binom{n}{2} = 66$?',
      choices: ['$11$', '$33$', '$13$', '$12$'],
      answer: 3,
      solution: 'We need $\\frac{n(n-1)}{2} = 66$, so $n(n-1) = 132$. Two consecutive integers with product $132$ are $12$ and $11$, so $n = 12$. Check: $\\binom{12}{2} = \\frac{12 \\cdot 11}{2} = 66$. The choice $11$ is $n - 1$; $33$ is half of $66$.',
    },
    {
      q: 'A pet show picks $3$ of $7$ dogs and $2$ of $4$ cats to appear in the finale. How many different finale groups are possible?',
      choices: ['$41$', '$462$', '$210$', '$105$'],
      answer: 2,
      solution: 'Choose from each pool and multiply: $\\binom{7}{3} \\cdot \\binom{4}{2} = 35 \\cdot 6 = 210$. Adding the two counts gives $41$; choosing any $5$ of the $11$ animals gives $\\binom{11}{5} = 462$, which ignores the three-and-two rule; $105$ divides one factor of $2$ too many.',
    },
    {
      q: 'A hockey squad has $11$ players, $2$ of whom are goalies. A lineup of $5$ players is chosen for a drill and must contain exactly one goalie. How many lineups are possible?',
      choices: ['$462$', '$252$', '$126$', '$210$'],
      answer: 1,
      solution: 'Choose the goalie: $\\binom{2}{1} = 2$ ways. Then choose the other $4$ players from the $9$ non-goalies: $\\binom{9}{4} = 126$ ways. Multiply: $2 \\cdot 126 = 252$. The choice $126$ forgets that either goalie could be the one; $462$ is $\\binom{11}{5}$, which allows zero or two goalies.',
    },
    {
      q: 'Twelve points are marked on a piece of paper. Five of them lie on one straight line, four others lie on a second straight line, and no other three of the twelve points are collinear. How many triangles have all three vertices among the twelve points?',
      choices: ['$220$', '$210$', '$206$', '$216$'],
      answer: 2,
      solution: 'Any $3$ of the $12$ points would give $\\binom{12}{3} = 220$ triangles, except that $3$ points on the same line make no triangle at all. The bad triples are $3$ of the $5$ points on the first line, $\\binom{5}{3} = 10$, or $3$ of the $4$ points on the second line, $\\binom{4}{3} = 4$; no triple can be bad in both ways, since the two lines share no marked point. So there are $220 - 10 - 4 = 206$ triangles. The choice $210$ forgets the second line, and $216$ forgets the first.',
    },
  ],
}

const s44 = {
  id: '4.4',
  title: 'Our First Combinatorial Identity',
  learn: {
    concepts: [
      {
        heading: 'Choosing who stays behind',
        body: 'Picking $2$ of $7$ friends to come along is the same decision as picking the $5$ who stay home: every group of $2$ chosen matches exactly one group of $5$ left out. So $\\binom{7}{2} = \\binom{7}{5}$, and both equal $21$. In general, choosing $k$ of $n$ objects to keep is the same as choosing $n - k$ of them to discard, which gives the identity $\\binom{n}{k} = \\binom{n}{n-k}$.',
      },
      {
        heading: 'The formula agrees',
        body: 'Swap $k$ and $n - k$ in $\\frac{n!}{k!\\,(n-k)!}$ and the two factorials on the bottom simply trade places, so the value does not change. Both explanations are worth knowing: the formula proves the identity in one line, while the "who stays behind" idea tells you why it is true and helps you see it in problems.',
      },
      {
        heading: 'Use it to shrink big computations',
        body: 'Never compute $\\binom{20}{18}$ with eighteen factors on top. Flip it: $\\binom{20}{18} = \\binom{20}{2} = \\frac{20 \\cdot 19}{2} = 190$. Whenever $k$ is more than half of $n$, replace it with $n - k$ first. The pattern $\\binom{n}{n-1} = \\binom{n}{1} = n$ and $\\binom{n}{n} = \\binom{n}{0} = 1$ is the same idea at the edges.',
      },
      {
        heading: 'The trap: flipping the wrong number',
        body: 'The identity swaps the bottom number for $n - k$; it never changes the top. $\\binom{10}{7}$ equals $\\binom{10}{3}$, not $\\binom{7}{3}$ or $\\binom{3}{10}$. Also, $\\binom{n}{k} = \\binom{n}{j}$ does not force $j = k$: it can also mean $j = n - k$. If $\\binom{n}{3} = \\binom{n}{7}$ for some $n \\ge 7$, the two bottoms must add up to $n$, so $n = 10$.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\binom{16}{15}$ and $\\binom{24}{22}$.',
        steps: [
          'Flip each bottom number to $n - k$: $\\binom{16}{15} = \\binom{16}{1}$ and $\\binom{24}{22} = \\binom{24}{2}$.',
          'There are $16$ ways to choose one thing, so $\\binom{16}{15} = 16$.',
          'The handshake shortcut gives $\\binom{24}{2} = \\frac{24 \\cdot 23}{2} = 276$.',
        ],
        answer: '$\\binom{16}{15} = 16$ and $\\binom{24}{22} = 276$.',
      },
      {
        problem: 'A team of $7$ is chosen from $10$ players. How many different teams are possible?',
        steps: [
          'Choosing the $7$ who play is the same as choosing the $3$ who sit out, so the count is $\\binom{10}{7} = \\binom{10}{3}$.',
          'Compute the smaller one: $\\frac{10 \\cdot 9 \\cdot 8}{6} = 120$.',
          'Choosing the $7$ directly would need seven factors on top over $7! = 5040$ and gives the same $120$, with far more cancelling.',
        ],
        answer: 'There are $120$ possible teams.',
      },
      {
        problem: 'For what positive integer $n$ is $\\binom{n}{4} = \\binom{n}{9}$, given that $n$ is at least $9$?',
        steps: [
          'If $\\binom{n}{4}$ equals $\\binom{n}{9}$ with $4 \\ne 9$, the identity says the two bottom numbers must be $k$ and $n - k$.',
          'So $4 + 9 = n$, which gives $n = 13$.',
          'Check: $\\binom{13}{4} = 715$ and $\\binom{13}{9} = \\binom{13}{4} = 715$.',
        ],
        answer: '$n = 13$.',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\binom{20}{18}$?',
      choices: ['$380$', '$190$', '$20$', '$360$'],
      answer: 1,
      solution: 'Flip to the smaller bottom: $\\binom{20}{18} = \\binom{20}{2} = \\frac{20 \\cdot 19}{2} = 190$. The choice $380$ forgets the division by $2$; $20$ is $\\binom{20}{19}$.',
    },
    {
      q: 'What is $\\binom{14}{13} + \\binom{14}{12}$?',
      choices: ['$28$', '$91$', '$196$', '$105$'],
      answer: 3,
      solution: 'Flip each bottom number: $\\binom{14}{13} = \\binom{14}{1} = 14$ and $\\binom{14}{12} = \\binom{14}{2} = \\frac{14 \\cdot 13}{2} = 91$. Add: $14 + 91 = 105$. The choice $28$ treats both terms as $14$; $91$ drops the first term; $196$ multiplies $14 \\cdot 14$.',
    },
    {
      q: 'Which of the following is equal to $\\binom{11}{4}$?',
      choices: ['$\\binom{11}{7}$', '$\\binom{11}{6}$', '$\\binom{7}{4}$', '$\\binom{11}{3}$'],
      answer: 0,
      solution: 'The identity keeps the top and replaces the bottom by $11 - 4 = 7$, so $\\binom{11}{4} = \\binom{11}{7}$. The choice $\\binom{7}{4}$ changes the top number, which the identity never does.',
    },
    {
      q: 'A librarian must choose $10$ of $12$ new books to display. How many different displays are possible?',
      choices: ['$132$', '$12$', '$66$', '$120$'],
      answer: 2,
      solution: 'Choosing the $10$ to display is the same as choosing the $2$ to keep in the back: $\\binom{12}{10} = \\binom{12}{2} = \\frac{12 \\cdot 11}{2} = 66$. The choice $132$ picks the two hidden books in order.',
    },
    {
      q: 'For what positive integer $n$ greater than $7$ is $\\binom{n}{3} = \\binom{n}{7}$?',
      choices: ['$4$', '$10$', '$21$', '$7$'],
      answer: 1,
      solution: 'Since $3 \\ne 7$, the equality must come from the identity $\\binom{n}{k} = \\binom{n}{n-k}$, so $3 + 7 = n$ and $n = 10$. The choice $4$ is the difference $7 - 3$ rather than the sum.',
    },
    {
      q: 'A committee of $9$ is chosen from a club of $11$ people. How many committees are possible?',
      choices: ['$110$', '$99$', '$55$', '$165$'],
      answer: 2,
      solution: 'Choosing $9$ to serve is the same as choosing the $2$ who do not: $\\binom{11}{9} = \\binom{11}{2} = \\frac{11 \\cdot 10}{2} = 55$. The choice $110$ forgets the division; $165$ is $\\binom{11}{3}$, three left out instead of two.',
    },
    {
      q: 'What is $\\binom{25}{23} - \\binom{25}{2}$?',
      choices: ['$0$', '$300$', '$600$', '$23$'],
      answer: 0,
      solution: 'Since $23 = 25 - 2$, the identity says $\\binom{25}{23} = \\binom{25}{2}$, so the difference is $0$. Each term is $\\frac{25 \\cdot 24}{2} = 300$, which is the tempting wrong answer for anyone who computes only one of them.',
    },
    {
      q: 'From a class of $12$ students, $10$ are chosen to go on a trip, and then one of the $10$ is chosen to be the group leader. In how many ways can this be done?',
      choices: ['$66$', '$660$', '$6600$', '$132$'],
      answer: 1,
      solution: 'Choose the $2$ who stay behind: $\\binom{12}{10} = \\binom{12}{2} = 66$ ways. Then choose the leader from the $10$ travelers: $10$ ways. Multiply: $66 \\cdot 10 = 660$. Choosing the leader first and then $9$ more from $11$ gives the same $12 \\cdot \\binom{11}{9} = 12 \\cdot 55 = 660$. The choice $132$ picks the leader and only one companion.',
    },
    {
      q: 'A photographer will pose $12$ of the $14$ people at a reunion, and at least one of Ana and Ben must be left out of the photo. How many different groups of $12$ can be posed?',
      choices: ['$66$', '$91$', '$26$', '$25$'],
      answer: 3,
      solution: 'Choosing the $12$ who pose is the same as choosing the $2$ who are left out, so count pairs of left-out people. Without any rule there are $\\binom{14}{2} = 91$ pairs. The bad pairs leave out neither Ana nor Ben, so both come from the other $12$ people: $\\binom{12}{2} = 66$. Subtract: $91 - 66 = 25$. Directly: the left-out pair contains Ana ($13$ pairs) or Ben ($13$ pairs), and the pair $\\{\\text{Ana}, \\text{Ben}\\}$ was counted in both lists, so $13 + 13 - 1 = 25$. The choice $66$ is the complement; $91$ ignores the rule; $26$ counts the Ana-and-Ben pair twice.',
    },
    {
      q: 'For how many integers $k$ with $0 \\le k \\le 12$ is $\\binom{12}{k}$ greater than $200$?',
      choices: ['$6$', '$4$', '$3$', '$7$'],
      answer: 3,
      solution: 'Compute the small ones: $\\binom{12}{0} = 1$, $\\binom{12}{1} = 12$, $\\binom{12}{2} = 66$, $\\binom{12}{3} = 220$. From $k = 3$ up to the middle the values keep growing, and the identity $\\binom{12}{k} = \\binom{12}{12-k}$ mirrors them: $k = 3, 4, 5, 6$ work, and so do their mirrors $k = 9, 8, 7, 6$. That is $k = 3, 4, 5, 6, 7, 8, 9$, seven values. The choice $4$ counts only the left half; $6$ pairs $3$ with $9$, $4$ with $8$, $5$ with $7$, and forgets that $k = 6$ mirrors itself.',
    },
  ],
}

const challenge = [
  {
    q: 'A cook has $8$ different spices and will put $5$ of them into a stew. How many different sets of $5$ spices can she use?',
    choices: ['$6720$', '$56$', '$336$', '$40$'],
    answer: 1,
    solution: 'The spices form a set, so the count is $\\binom{8}{5} = \\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$. The choice $6720$ is the ordered count $8 \\cdot 7 \\cdot 6 \\cdot 5 \\cdot 4$; $336$ flips to three factors but forgets to divide by $3!$; $40$ multiplies $8 \\cdot 5$.',
  },
  {
    q: 'A club has $4$ members. A committee may have any number of members from $1$ to $4$. How many different committees can the club form?',
    choices: ['$15$', '$16$', '$14$', '$10$'],
    answer: 0,
    solution: 'Count by size: $\\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 4 + 6 + 4 + 1 = 15$. The choice $16$ also counts the empty committee, which the problem rules out; $14$ forgets the committee of all four; $10$ stops after size $2$.',
  },
  {
    q: 'What is $\\binom{30}{28}$?',
    choices: ['$870$', '$30$', '$406$', '$435$'],
    answer: 3,
    solution: 'Flip to the smaller bottom: $\\binom{30}{28} = \\binom{30}{2} = \\frac{30 \\cdot 29}{2} = 435$. The choice $870$ forgets to divide by $2$; $406$ is $\\binom{29}{2}$, which flips the top number too.',
  },
  {
    q: 'A team of $4$ is chosen from $5$ boys and $4$ girls, and it must have exactly $2$ boys and $2$ girls. How many different teams are possible?',
    choices: ['$126$', '$16$', '$60$', '$120$'],
    answer: 2,
    solution: 'Choose the boys and the girls from their own pools and multiply: $\\binom{5}{2} \\cdot \\binom{4}{2} = 10 \\cdot 6 = 60$. The choice $126$ is $\\binom{9}{4}$, any four people at all; $16$ adds the two counts instead of multiplying.',
  },
  {
    q: 'A $3$-person committee is chosen from $10$ students, including the twins Kai and Kim. How many committees include at least one of the twins?',
    choices: ['$56$', '$64$', '$120$', '$28$'],
    answer: 1,
    solution: 'Count the committees with no twin and subtract from the total. All committees: $\\binom{10}{3} = 120$. Committees with neither twin: $\\binom{8}{3} = 56$. So $120 - 56 = 64$ committees include at least one twin. The choice $56$ is the complement itself, and $28$ is $\\binom{8}{2}$, the committees with exactly one particular twin.',
  },
  {
    q: 'A sundae has $3$ scoops of different flavors chosen from $8$ flavors, and one of the three is placed on top. Two sundaes are the same only if they use the same three flavors and the same flavor on top. How many different sundaes are possible?',
    choices: ['$56$', '$336$', '$168$', '$24$'],
    answer: 2,
    solution: 'Choose the set of three flavors, $\\binom{8}{3} = 56$ ways, then choose which of the three goes on top, $3$ ways: $56 \\cdot 3 = 168$. Choosing the top flavor first and then two more from seven gives the same $8 \\cdot \\binom{7}{2} = 8 \\cdot 21 = 168$. The choice $336$ orders all three scoops, which the sundae does not; $56$ forgets the top flavor.',
  },
  {
    q: 'A code is a string of $4$ different letters chosen from the nine letters $A$ through $I$, written in alphabetical order, such as $BDEH$. How many different codes are there?',
    choices: ['$3024$', '$126$', '$504$', '$36$'],
    answer: 1,
    solution: 'Once the set of four letters is chosen, alphabetical order fixes the string, so each code is the same thing as a $4$-element set of letters: $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24} = 126$. The choice $3024$ counts the strings in every order; $504$ divides by $3!$ instead of $4!$; $36$ multiplies $9 \\cdot 4$.',
  },
  {
    q: 'A committee of $4$ is chosen from $6$ teachers and $5$ students. It must contain at least $2$ students. How many committees are possible?',
    choices: ['$330$', '$315$', '$100$', '$215$'],
    answer: 3,
    solution: 'Subtract the committees with too few students from the total. All committees: $\\binom{11}{4} = 330$. No students: $\\binom{6}{4} = 15$. Exactly one student: $5 \\cdot \\binom{6}{3} = 5 \\cdot 20 = 100$. So $330 - 15 - 100 = 215$ committees have at least two students. The choice $315$ removes only the zero-student committees; $100$ is the one-student case by itself.',
  },
  {
    q: 'A committee of $5$ is chosen from $9$ people. Lena and Marco are best friends: either both of them serve or neither of them does. How many committees are possible?',
    choices: ['$126$', '$35$', '$56$', '$21$'],
    answer: 2,
    solution: 'Two cases. If both serve, the other $3$ seats go to $3$ of the remaining $7$ people: $\\binom{7}{3} = 35$. If neither serves, all $5$ seats go to the remaining $7$: $\\binom{7}{5} = \\binom{7}{2} = 21$. Add: $35 + 21 = 56$. The choice $126$ is $\\binom{9}{5}$ with no rule; $35$ and $21$ are the two cases alone.',
  },
  {
    q: 'A hiking group of $5$ is chosen from $4$ adults and $6$ children. The group must include at least $2$ adults, and the twins Cleo and Dan (both children) will not both go. How many different groups are possible?',
    choices: ['$158$', '$186$', '$162$', '$130$'],
    answer: 0,
    solution: 'First count by the number of adults, ignoring the twins. Two adults and three children: $\\binom{4}{2} \\cdot \\binom{6}{3} = 6 \\cdot 20 = 120$. Three adults and two children: $\\binom{4}{3} \\cdot \\binom{6}{2} = 4 \\cdot 15 = 60$. Four adults and one child: $1 \\cdot 6 = 6$. That is $186$ groups. Now remove the groups containing both twins. With two adults, the twins fill two of the three child spots and $1$ of the other $4$ children fills the third: $6 \\cdot 4 = 24$. With three adults, the two child spots are exactly the twins: $4 \\cdot 1 = 4$. With four adults there is only one child, so the twins cannot both go. Subtract: $186 - 24 - 4 = 158$. The choice $186$ ignores the twins; $162$ forgets the three-adult case; $130$ subtracts all $\\binom{8}{3} = 56$ groups containing both twins, including ones with too few adults that were never counted.',
  },
  {
    q: 'A squad has $6$ forwards and $4$ defenders. A lineup of $5$ players is chosen from the squad; it must include at least $2$ defenders, and the twins Ira and Jae (both forwards) play together or not at all. How many lineups are possible?',
    choices: ['$28$', '$52$', '$112$', '$80$'],
    answer: 3,
    solution: 'Split on the twins. If both play, $3$ more players come from the other $4$ forwards and the $4$ defenders, with at least $2$ defenders: two defenders and one forward, $\\binom{4}{2} \\cdot 4 = 24$, or three defenders, $\\binom{4}{3} = 4$, for $28$ lineups. If neither plays, all $5$ come from the $4$ other forwards and the $4$ defenders, with at least $2$ defenders: two defenders, $\\binom{4}{2} \\cdot \\binom{4}{3} = 6 \\cdot 4 = 24$; three defenders, $\\binom{4}{3} \\cdot \\binom{4}{2} = 4 \\cdot 6 = 24$; four defenders, $1 \\cdot 4 = 4$; that is $52$ lineups. Add the two cases: $28 + 52 = 80$. The choices $28$ and $52$ are the two cases alone; $112$ is $\\binom{8}{3} + \\binom{8}{5}$, which applies the twin rule but forgets the defenders.',
  },
  {
    q: 'A committee of $4$ is chosen from $5$ seniors and $6$ juniors. The committee must have more seniors than juniors, and it cannot include both Priya (a senior) and Quinn (a junior). How many committees are possible?',
    choices: ['$65$', '$60$', '$59$', '$54$'],
    answer: 2,
    solution: 'More seniors than juniors means $3$ seniors and $1$ junior, or $4$ seniors. Those give $\\binom{5}{3} \\cdot 6 = 60$ and $\\binom{5}{4} = 5$, so $65$ committees before the Priya–Quinn rule. Now remove the ones with both: a $4$-senior committee has no Quinn, so only the $3$-and-$1$ case matters, where the junior is Quinn and Priya joins $2$ of the other $4$ seniors: $\\binom{4}{2} = 6$. The answer is $65 - 6 = 59$. The choice $65$ ignores the rule, and $54$ subtracts an extra $5$ for the $4$-senior committees that never contained Quinn.',
  },
]

const worksheet = [
  {
    q: 'How many ways are there to choose $2$ of $8$ different puzzles to bring on a car trip?',
    answer: '$28$',
    solution: 'The two puzzles form a set, so it is $\\binom{8}{2} = \\frac{8 \\cdot 7}{2} = 28$.',
  },
  {
    q: 'Compute $\\binom{12}{4}$.',
    answer: '$495$',
    solution: 'Four factors over $4! = 24$: $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24}$. Cancel $12 \\cdot 10 = 120$ against $24$ to get $5$, leaving $5 \\cdot 11 \\cdot 9 = 495$.',
  },
  {
    q: 'Compute $\\binom{18}{16}$.',
    answer: '$153$',
    solution: 'Flip to the smaller bottom: $\\binom{18}{16} = \\binom{18}{2} = \\frac{18 \\cdot 17}{2} = 153$.',
  },
  {
    q: 'A reading group has $8$ members. Two of them are chosen to pick next month’s book together, and then one of the remaining $6$ members is chosen to host the meeting. In how many ways can this be done?',
    answer: '$168$',
    solution: 'The two book-pickers have no order, so there are $\\binom{8}{2} = 28$ ways to choose them, and then $6$ ways to choose the host: $28 \\cdot 6 = 168$.',
  },
  {
    q: 'A bag holds $4$ red marbles and $5$ blue marbles, all different. How many ways are there to choose $2$ red marbles and $2$ blue marbles?',
    answer: '$60$',
    solution: 'Choose from each color separately and multiply: $\\binom{4}{2} \\cdot \\binom{5}{2} = 6 \\cdot 10 = 60$.',
  },
  {
    q: 'A $3$-person committee is chosen from $10$ people, and Dev must be on it. How many committees are possible?',
    answer: '$36$',
    solution: 'Seat Dev first; then choose $2$ of the other $9$ people: $\\binom{9}{2} = \\frac{9 \\cdot 8}{2} = 36$.',
  },
  {
    q: 'Find the positive integer $n$ for which $\\binom{n}{2} = 78$.',
    answer: '$13$',
    solution: 'We need $\\frac{n(n-1)}{2} = 78$, so $n(n-1) = 156 = 13 \\cdot 12$, giving $n = 13$.',
  },
  {
    q: 'A $4$-person committee is chosen from $10$ people. Eli and Fay will not serve together, though either may serve without the other. How many committees are possible?',
    answer: '$182$',
    solution: 'All committees: $\\binom{10}{4} = 210$. Committees with both Eli and Fay take $2$ more people from the other $8$: $\\binom{8}{2} = 28$. Subtract: $210 - 28 = 182$.',
  },
  {
    q: 'Eight points, one of them labeled $P$, are marked on a circle. How many quadrilaterals with all four vertices among the eight points have $P$ as one of their vertices?',
    answer: '$35$',
    solution: 'Since $P$ is already a vertex, choose the other $3$ vertices from the remaining $7$ points: $\\binom{7}{3} = 35$. Any four points on a circle form a quadrilateral, so nothing is lost.',
  },
  {
    q: 'A committee of $5$ is chosen from $6$ women and $5$ men. It must contain at least $3$ women, and it cannot contain both Wanda (a woman) and Max (a man). How many committees are possible?',
    answer: '$231$',
    solution: 'First count by the number of women. Three women and two men: $\\binom{6}{3} \\cdot \\binom{5}{2} = 20 \\cdot 10 = 200$. Four women and one man: $\\binom{6}{4} \\cdot 5 = 15 \\cdot 5 = 75$. Five women: $\\binom{6}{5} = 6$. That is $281$ committees. Now remove those containing both Wanda and Max. With three women: Wanda plus $2$ of the other $5$ women, Max plus $1$ of the other $4$ men, $\\binom{5}{2} \\cdot 4 = 40$. With four women: Wanda plus $3$ of the other $5$ women and Max alone, $\\binom{5}{3} = 10$. Five women means no Max. So $281 - 40 - 10 = 231$.',
  },
]

export default {
  id: 'intro-counting-ch04',
  book: 'intro-counting',
  number: 4,
  title: 'Committees and Combinations',
  intro:
    'Choosing a team, a set of toppings, or a handful of books from a shelf is different from lining things up: nobody cares who was picked first. This chapter shows you how to count such groups by counting in order and then dividing out the orderings, gives you the $\\binom{n}{k}$ symbol and a fast way to compute it, and hands you your first identity — the fact that choosing who is in is the same as choosing who is out.',
  sections: [s42, s43, s44],
  challenge,
  worksheet,
}
