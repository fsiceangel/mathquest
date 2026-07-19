// Prealgebra — Chapter 14: Counting
// All problems, explanations, and examples are original MathQuest content.

const s141 = {
  id: '14.1',
  title: 'Counting with Addition and Subtraction',
  learn: {
    concepts: [
      {
        heading: 'Count the numbers, not the gap',
        body: 'How many integers are in the list $a, a+1, a+2, \\ldots, b$? It is tempting to say $b - a$, but that only counts the jumps between numbers. The list itself has one more member than that: $b - a + 1$ numbers. Try it small: from $5$ to $7$ there are $7 - 5 + 1 = 3$ numbers, and sure enough the list is $5, 6, 7$.',
      },
      {
        heading: 'Skip-counting lists',
        body: 'To count a list like $6, 8, 10, \\ldots, 40$ that skips by twos, first turn it into a list of consecutive integers. Divide every number by $2$ to get $3, 4, 5, \\ldots, 20$ — same length, easier to count: $20 - 3 + 1 = 18$ numbers. Divide (and shift if needed) until the list is consecutive, then use $b - a + 1$.',
      },
      {
        heading: 'Counting with a condition',
        body: 'Questions like "how many multiples of $5$ are there from $1$ to $60$?" are skip-counting in disguise. The multiples are $5, 10, 15, \\ldots, 60$; dividing by $5$ gives $1, 2, 3, \\ldots, 12$, so there are $12$ of them. Rewrite the condition as a list, then count the list.',
      },
      {
        heading: 'Either-or counting',
        body: 'To count things that are in group A or group B, you can add the two group sizes — but anything in BOTH groups just got counted twice! Subtract the overlap once to fix it: $\\text{either} = A + B - \\text{both}$. This is called counting with overlap, and forgetting the subtraction is the classic slip.',
      },
    ],
    examples: [
      {
        problem: 'How many integers are in the list $12, 13, 14, \\ldots, 47$?',
        steps: [
          'The gap from $12$ to $47$ is $47 - 12 = 35$ jumps.',
          'But a list has one more number than it has jumps — picture $3$ fence posts holding up $2$ rails.',
          'So the count is $47 - 12 + 1 = 36$.',
        ],
        answer: 'There are $36$ integers in the list.',
      },
      {
        problem: 'How many even numbers are there from $10$ to $50$, including both ends?',
        steps: [
          'The even numbers form the list $10, 12, 14, \\ldots, 50$.',
          'Divide everything by $2$ to make the list consecutive: $5, 6, 7, \\ldots, 25$. The new list has exactly as many numbers as the old one.',
          'Count the consecutive list: $25 - 5 + 1 = 21$.',
        ],
        answer: 'There are $21$ even numbers.',
      },
      {
        problem: 'In a class, $14$ students have a dog, $9$ have a cat, and $4$ have both. How many students have a dog or a cat?',
        steps: [
          'Adding $14 + 9 = 23$ counts the $4$ both-pet students twice — once in each group.',
          'Subtract the overlap once: $23 - 4 = 19$.',
        ],
        answer: '$19$ students have a dog or a cat.',
      },
    ],
  },
  problems: [
    {
      q: 'How many integers are in the list $5, 6, 7, \\ldots, 15$?',
      choices: ['$10$', '$12$', '$11$', '$9$'],
      answer: 2,
      solution: 'The gap is $15 - 5 = 10$, but the list has one more number than the gap: $15 - 5 + 1 = 11$. Check with a tiny list: from $5$ to $6$ the gap is $1$ but there are $2$ numbers.',
    },
    {
      q: 'Leo reads pages $8$ through $20$ of his book, including both pages. How many pages does he read?',
      choices: ['$13$', '$12$', '$14$', '$11$'],
      answer: 0,
      solution: 'Count the pages, not the gap: $20 - 8 + 1 = 13$ pages. The subtraction $20 - 8 = 12$ only counts the page turns between them.',
    },
    {
      q: 'How many multiples of $5$ are there from $1$ to $60$?',
      choices: ['$11$', '$12$', '$13$', '$10$'],
      answer: 1,
      solution: 'The multiples are $5, 10, 15, \\ldots, 60$. Divide each by $5$ to get the consecutive list $1, 2, \\ldots, 12$, which clearly has $12$ numbers.',
    },
    {
      q: 'How many numbers are in the list $3, 6, 9, \\ldots, 30$?',
      choices: ['$9$', '$11$', '$27$', '$10$'],
      answer: 3,
      solution: 'Divide every number by $3$: the list becomes $1, 2, 3, \\ldots, 10$, which has $10$ numbers. Dividing does not change how many numbers there are — it just makes them easier to count.',
    },
    {
      q: 'How many even numbers are there from $14$ to $58$, including both ends?',
      choices: ['$22$', '$23$', '$44$', '$24$'],
      answer: 1,
      solution: 'The list is $14, 16, \\ldots, 58$. Divide by $2$: it becomes $7, 8, \\ldots, 29$. Count: $29 - 7 + 1 = 23$.',
    },
    {
      q: 'The houses on Maple Street are numbered $25$ through $104$, with no numbers skipped. How many houses are there?',
      choices: ['$80$', '$79$', '$129$', '$81$'],
      answer: 0,
      solution: 'Count the house numbers from $25$ to $104$: that is $104 - 25 + 1 = 80$ houses. Remember the $+1$ — subtracting alone leaves out one house.',
    },
    {
      q: 'In Mr. Diaz\'s class, $16$ students play soccer, $11$ play chess, and $5$ play both. How many students play soccer or chess?',
      choices: ['$27$', '$21$', '$23$', '$22$'],
      answer: 3,
      solution: 'Adding $16 + 11 = 27$ counts the $5$ double-players twice. Subtract the overlap once: $27 - 5 = 22$ students.',
    },
    {
      q: 'How many multiples of $4$ are there from $30$ to $90$?',
      choices: ['$14$', '$60$', '$15$', '$16$'],
      answer: 2,
      solution: 'The first multiple of $4$ that is at least $30$ is $32$, and the last one at most $90$ is $88$. The list $32, 36, \\ldots, 88$ divided by $4$ becomes $8, 9, \\ldots, 22$, which has $22 - 8 + 1 = 15$ numbers.',
    },
    {
      q: 'How many numbers from $1$ to $100$ are multiples of $3$ or multiples of $5$?',
      choices: ['$47$', '$53$', '$46$', '$48$'],
      answer: 0,
      solution: 'There are $33$ multiples of $3$ (up through $99$) and $20$ multiples of $5$ (up through $100$). But multiples of $15$ — there are $6$ of them — got counted in both groups. So the answer is $33 + 20 - 6 = 47$.',
    },
    {
      q: 'A straight fence is $60$ feet long, with a post every $5$ feet, including a post at each end. How many posts are there?',
      choices: ['$12$', '$13$', '$11$', '$14$'],
      answer: 1,
      solution: 'The fence has $60 \\div 5 = 12$ gaps between posts. Posts outnumber gaps by exactly one (there is a post at both ends), so there are $12 + 1 = 13$ posts. This is the fencepost idea in its natural habitat!',
    },
  ],
}

const s142 = {
  id: '14.2',
  title: 'The Multiplication Principle',
  learn: {
    concepts: [
      {
        heading: 'Independent choices multiply',
        body: 'If you can make one choice in $m$ ways and a second, separate choice in $n$ ways, together there are $m \\times n$ combinations. With $3$ shirts and $4$ pairs of pants, each shirt can go with each of the $4$ pants, so there are $3 \\times 4 = 12$ outfits. Adding $3 + 4 = 7$ would be counting the clothes, not the outfits!',
      },
      {
        heading: 'Draw the slots',
        body: 'For a longer string of choices, draw a blank slot for each decision and write how many options fill it. A code with a letter followed by a digit has slots $\\underline{26} \\times \\underline{10} = 260$. The principle chains as far as you need: three slots, four slots, or more.',
      },
      {
        heading: 'No repeats? Options shrink',
        body: 'When items cannot repeat, each slot has one fewer option than the slot before. Lining up $4$ books: any of $4$ can go first, then $3$ remain for the second spot, then $2$, then $1$. Total: $4 \\times 3 \\times 2 \\times 1 = 24$ arrangements.',
      },
      {
        heading: 'Handle the picky slot first',
        body: 'When one slot has a restriction — "the first digit cannot be $0$", "Mia must stand in the middle" — fill that slot FIRST, then count the freer slots. Dealing with the restriction early keeps the later counts simple.',
      },
    ],
    examples: [
      {
        problem: 'A yogurt shop offers $3$ flavors and $4$ toppings. How many ways can you pick one flavor and one topping?',
        steps: [
          'Two separate choices: flavor ($3$ ways) and topping ($4$ ways).',
          'Every flavor pairs with every topping, so multiply: $3 \\times 4 = 12$.',
        ],
        answer: 'There are $12$ flavor-and-topping combinations.',
      },
      {
        problem: 'In how many different orders can $4$ books be lined up on a shelf?',
        steps: [
          'Fill the shelf one spot at a time. The first spot can hold any of the $4$ books.',
          'A book is now used up, so the second spot has $3$ choices, the third has $2$, and the last book takes the final spot: $1$ choice.',
          'Multiply the slots: $4 \\times 3 \\times 2 \\times 1 = 24$.',
        ],
        answer: 'The books can be lined up in $24$ orders.',
      },
      {
        problem: 'A locker tag is one letter followed by one digit, but the digit cannot be $0$. How many tags are possible?',
        steps: [
          'The letter slot has $26$ options.',
          'The digit slot is the picky one: digits $1$ through $9$ are allowed, so $9$ options.',
          'Multiply: $26 \\times 9 = 234$.',
        ],
        answer: 'There are $234$ possible tags.',
      },
    ],
  },
  problems: [
    {
      q: 'A deli offers $2$ kinds of sandwich and $3$ kinds of drink. How many ways can you choose one sandwich and one drink?',
      choices: ['$6$', '$5$', '$8$', '$9$'],
      answer: 0,
      solution: 'Each of the $2$ sandwiches can go with each of the $3$ drinks: $2 \\times 3 = 6$ combos. Adding $2 + 3 = 5$ counts the menu items, not the meals.',
    },
    {
      q: 'Nadia has $4$ shirts and $2$ hats. How many shirt-and-hat outfits can she make?',
      choices: ['$6$', '$4$', '$8$', '$16$'],
      answer: 2,
      solution: 'Two independent choices multiply: $4 \\times 2 = 8$ outfits. Every shirt works with every hat.',
    },
    {
      q: 'You flip a coin and then roll a die. How many different results are possible?',
      choices: ['$8$', '$12$', '$36$', '$6$'],
      answer: 1,
      solution: 'The coin has $2$ outcomes and the die has $6$, and any coin result can pair with any die result: $2 \\times 6 = 12$.',
    },
    {
      q: 'A quiz has $3$ true-or-false questions. How many different ways can the answer sheet be filled out?',
      choices: ['$6$', '$9$', '$4$', '$8$'],
      answer: 3,
      solution: 'Each question is a slot with $2$ options: $2 \\times 2 \\times 2 = 8$. (Careful: $3 \\times 2 = 6$ mixes up the number of questions with the choices per question.)',
    },
    {
      q: 'In how many different orders can $3$ students line up for lunch?',
      choices: ['$3$', '$6$', '$9$', '$27$'],
      answer: 1,
      solution: 'The first spot has $3$ choices, then $2$ remain, then $1$: $3 \\times 2 \\times 1 = 6$ orders. The options shrink because a student cannot be in two places at once.',
    },
    {
      q: 'How many ways can $4$ different trophies be arranged in a row on a shelf?',
      choices: ['$24$', '$16$', '$12$', '$256$'],
      answer: 0,
      solution: 'No repeats, so the slots shrink: $4 \\times 3 \\times 2 \\times 1 = 24$. The answer $256 = 4^4$ would be right only if the same trophy could magically appear in several spots.',
    },
    {
      q: 'A bike lock code is $2$ digits long, and each digit can be $0$ through $9$ (repeats allowed). How many codes are possible?',
      choices: ['$20$', '$90$', '$100$', '$81$'],
      answer: 2,
      solution: 'Each slot has all $10$ digits available: $10 \\times 10 = 100$ codes. The answer $90$ would be for codes where the digits must differ, and $20$ comes from adding instead of multiplying.',
    },
    {
      q: 'A license plate has two letters followed by one digit, with repeats allowed. How many plates are possible?',
      choices: ['$62$', '$676$', '$2600$', '$6760$'],
      answer: 3,
      solution: 'Three slots: $26 \\times 26 \\times 10$. First $26 \\times 26 = 676$, then $676 \\times 10 = 6760$. Forgetting the digit slot gives $676$, and adding the slot sizes gives only $62$.',
    },
    {
      q: 'How many $4$-digit numbers have all four digits odd?',
      choices: ['$500$', '$20$', '$625$', '$3125$'],
      answer: 2,
      solution: 'Each digit must come from $\\{1, 3, 5, 7, 9\\}$ — that is $5$ options per slot, and repeats are fine: $5 \\times 5 \\times 5 \\times 5 = 625$. A first digit of $0$ is never a worry here, since $0$ is not odd.',
    },
    {
      q: 'Five friends line up for a photo, but Ava insists on standing first. How many lineups are possible?',
      choices: ['$120$', '$24$', '$48$', '$12$'],
      answer: 1,
      solution: 'Handle the picky slot first: Ava takes spot one ($1$ way). The remaining $4$ friends fill the other spots in $4 \\times 3 \\times 2 \\times 1 = 24$ ways. Without the restriction there would be $120$ lineups — the restriction cuts it to a fifth.',
    },
  ],
}

const s143 = {
  id: '14.3',
  title: 'Casework',
  learn: {
    concepts: [
      {
        heading: 'Split a hard count into easy pieces',
        body: 'When one big count feels slippery, break it into cases: smaller counts that are each easy on their own. Count each case, then add the cases together. Casework turns "how do I even start?" into a short to-do list.',
      },
      {
        heading: 'Choose cases that organize the count',
        body: 'Good cases follow one feature of the problem: the value of the first die, the number of dimes, the tens digit. Pick a feature so that inside each case, the rest of the count is forced or simple.',
      },
      {
        heading: 'No overlaps, no leftovers',
        body: 'Cases must cover every possibility exactly once. If two cases share an outcome, you will count it twice; if an outcome fits no case, you will miss it. Before adding, ask: could anything land in two of my cases? Could anything slip between them?',
      },
      {
        heading: 'Add at the end',
        body: 'Within a single case you often multiply (choices in a row), but separate cases are either-or, so their counts ADD. Multiply inside cases, add across cases.',
      },
    ],
    examples: [
      {
        problem: 'Two dice are rolled, one red and one blue. In how many ways can the dice sum to $6$?',
        steps: [
          'Use cases based on the red die. Red $= 1$ needs blue $= 5$; red $= 2$ needs blue $= 4$; red $= 3$ needs blue $= 3$; red $= 4$ needs blue $= 2$; red $= 5$ needs blue $= 1$.',
          'Red $= 6$ would need blue $= 0$, which is impossible — so that case is empty.',
          'Each working case gives exactly one roll, and there are $5$ working cases.',
        ],
        answer: 'There are $5$ ways to roll a sum of $6$.',
      },
      {
        problem: 'How many ways can you make $30$ cents using only dimes and nickels?',
        steps: [
          'Use cases based on the number of dimes: it can be $0$, $1$, $2$, or $3$.',
          'In each case the nickels are forced: $0$ dimes needs $6$ nickels, $1$ dime needs $4$, $2$ dimes needs $2$, and $3$ dimes needs $0$.',
          'Every case works and no two cases overlap, so there are $4$ ways.',
        ],
        answer: 'There are $4$ ways to make $30$ cents.',
      },
      {
        problem: 'How many two-digit numbers have digits that add up to $7$?',
        steps: [
          'Use cases based on the tens digit, which runs from $1$ to $7$ (a tens digit of $8$ or $9$ would push the sum past $7$).',
          'Each tens digit forces the units digit: $16, 25, 34, 43, 52, 61, 70$.',
          'That is one number per case, for $7$ cases.',
        ],
        answer: 'There are $7$ such two-digit numbers.',
      },
    ],
  },
  problems: [
    {
      q: 'Two coins are flipped. In how many ways can you get exactly one head?',
      choices: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      solution: 'Two cases: the head is on the first coin (HT) or on the second coin (TH). Each case is one outcome, so there are $2$ ways. (HH has two heads and TT has none, so neither fits.)',
    },
    {
      q: 'Two dice are rolled. In how many ways can they sum to $4$?',
      choices: ['$3$', '$2$', '$4$', '$6$'],
      answer: 0,
      solution: 'Cases by the first die: $1 + 3$, $2 + 2$, and $3 + 1$. A first die of $4$ or more overshoots. That is $3$ ways — and note $(1,3)$ and $(3,1)$ count separately because the dice are different.',
    },
    {
      q: 'How many ways can you make $20$ cents using only dimes and nickels?',
      choices: ['$2$', '$4$', '$3$', '$5$'],
      answer: 2,
      solution: 'Cases by dimes: $0$ dimes with $4$ nickels, $1$ dime with $2$ nickels, or $2$ dimes with $0$ nickels. The nickels are forced each time, so there are $3$ ways.',
    },
    {
      q: 'How many two-digit numbers have both digits the same?',
      choices: ['$10$', '$8$', '$90$', '$9$'],
      answer: 3,
      solution: 'One case per tens digit: $11, 22, 33, \\ldots, 99$. The tens digit runs from $1$ to $9$ (a two-digit number cannot start with $0$), so there are $9$ such numbers.',
    },
    {
      q: 'Two dice are rolled. In how many ways can they sum to $7$?',
      choices: ['$6$', '$5$', '$7$', '$3$'],
      answer: 0,
      solution: 'Every first-die value works: $1+6$, $2+5$, $3+4$, $4+3$, $5+2$, $6+1$. That is $6$ ways — a sum of $7$ is the most common dice sum for exactly this reason.',
    },
    {
      q: 'How many two-digit numbers have digits that add up to $10$?',
      choices: ['$8$', '$11$', '$9$', '$10$'],
      answer: 2,
      solution: 'Cases by tens digit: $19, 28, 37, 46, 55, 64, 73, 82, 91$. The tens digit runs $1$ through $9$, and each forces the units digit, so there are $9$ numbers. (A units digit of $0$ would need a tens digit of $10$ — impossible.)',
    },
    {
      q: 'How many ways can you make $25$ cents using only pennies and nickels?',
      choices: ['$5$', '$6$', '$7$', '$4$'],
      answer: 1,
      solution: 'Cases by nickels: $0, 1, 2, 3, 4,$ or $5$ nickels, with pennies filling in the rest each time. That is $6$ ways. Do not forget the all-pennies case and the all-nickels case!',
    },
    {
      q: 'A cafe lunch is one main dish plus one drink. There are $2$ soups and $3$ salads to pick as the main, and $2$ drinks. How many different lunches are possible?',
      choices: ['$12$', '$7$', '$5$', '$10$'],
      answer: 3,
      solution: 'Case 1: soup lunches, $2 \\times 2 = 4$. Case 2: salad lunches, $3 \\times 2 = 6$. The cases do not overlap (a main is soup or salad, never both), so add: $4 + 6 = 10$ lunches. Multiply inside cases, add across cases.',
    },
    {
      q: 'How many two-digit numbers have a tens digit that is bigger than the units digit?',
      choices: ['$45$', '$44$', '$36$', '$50$'],
      answer: 0,
      solution: 'Cases by tens digit $t$: the units digit can be anything from $0$ up to $t - 1$, which is $t$ choices. So the counts are $1 + 2 + 3 + \\cdots + 9$ for $t = 1$ through $9$. Pair the ends to sum: $1 + \\cdots + 9 = 45$.',
    },
    {
      q: 'Two dice are rolled. In how many ways can the product of the two numbers be $12$?',
      choices: ['$3$', '$4$', '$5$', '$6$'],
      answer: 1,
      solution: 'List factor pairs of $12$ where both factors are $1$ through $6$: $2 \\times 6$, $3 \\times 4$, $4 \\times 3$, and $6 \\times 2$. The pair $1 \\times 12$ fails since dice stop at $6$. That is $4$ ways — and no case repeats, since each names a different (first, second) roll.',
    },
  ],
}

const s144 = {
  id: '14.4',
  title: 'Counting Pairs',
  learn: {
    concepts: [
      {
        heading: 'The handshake question',
        body: 'If $n$ people each shake hands with everyone else exactly once, how many handshakes happen? Each of the $n$ people shakes $n - 1$ hands, which suggests $n(n-1)$. But wait — that counts every handshake twice, once from each shaker\'s point of view!',
      },
      {
        heading: 'Why we divide by 2',
        body: 'A handshake between Ana and Ben shows up once in Ana\'s count and once in Ben\'s. Every handshake gets double-counted, so the true total is $\\frac{n(n-1)}{2}$. For $6$ people: $\\frac{6 \\times 5}{2} = 15$ handshakes. Divide by $2$ exactly when the two members of a pair play the same role.',
      },
      {
        heading: 'Same idea, new costumes',
        body: 'Lots of problems are the handshake problem in disguise: games in a round-robin tournament (each pair of teams plays once), segments connecting points (each pair of points gets one segment), choosing two co-captains. If the answer is "one per pair," the count is $\\frac{n(n-1)}{2}$.',
      },
      {
        heading: 'Pairs from two different groups',
        body: 'If a pair must have one member from EACH of two different groups — one boy and one girl, one red point and one blue point — just multiply the group sizes. No dividing by $2$ here: the two members play different roles, so nothing gets counted twice.',
      },
    ],
    examples: [
      {
        problem: 'Six friends all shake hands with each other exactly once. How many handshakes are there?',
        steps: [
          'Each of the $6$ friends shakes $5$ other hands, giving $6 \\times 5 = 30$ shakes counted person-by-person.',
          'Every handshake was counted twice — once by each of its two shakers.',
          'Divide by $2$: $\\frac{30}{2} = 15$.',
        ],
        answer: 'There are $15$ handshakes.',
      },
      {
        problem: 'Eight teams play a round-robin tournament: every pair of teams plays exactly one game. How many games are played?',
        steps: [
          'One game per pair of teams — this is the handshake problem wearing a jersey.',
          'Compute $\\frac{8 \\times 7}{2} = \\frac{56}{2} = 28$.',
        ],
        answer: 'There are $28$ games.',
      },
      {
        problem: 'A dance pair must have one of $3$ boys and one of $4$ girls. How many different pairs are possible?',
        steps: [
          'The pair has one member from each group, so the roles are different — no double counting to worry about.',
          'Multiply the group sizes: $3 \\times 4 = 12$.',
        ],
        answer: 'There are $12$ possible pairs. (No dividing by $2$ — a boy-girl pair can never be counted once from each "side" of the same group.)',
      },
    ],
  },
  problems: [
    {
      q: 'Four people at a meeting all shake hands with each other once. How many handshakes are there?',
      choices: ['$12$', '$4$', '$6$', '$8$'],
      answer: 2,
      solution: 'Each of $4$ people shakes $3$ hands: $4 \\times 3 = 12$, but that counts every shake twice. Divide by $2$: $\\frac{12}{2} = 6$.',
    },
    {
      q: 'Five teams play a round-robin: each pair of teams plays exactly one game. How many games are there?',
      choices: ['$10$', '$20$', '$25$', '$5$'],
      answer: 0,
      solution: 'One game per pair of teams: $\\frac{5 \\times 4}{2} = 10$. The answer $20$ forgets that each game involves two teams and gets counted twice.',
    },
    {
      q: 'A relay pair needs one of $3$ girls and one of $5$ boys. How many different pairs are possible?',
      choices: ['$15$', '$8$', '$28$', '$30$'],
      answer: 0,
      solution: 'One member from each group: multiply, $3 \\times 5 = 15$. We do NOT divide by $2$, because a girl-boy pair is never double-counted — the two spots are filled from different groups.',
    },
    {
      q: 'Six points are drawn on a circle, and every pair of points is connected by a segment. How many segments are there?',
      choices: ['$30$', '$12$', '$36$', '$15$'],
      answer: 3,
      solution: 'One segment per pair of points: $\\frac{6 \\times 5}{2} = 15$. Each segment has two endpoints, so the raw count $30$ is exactly double the truth.',
    },
    {
      q: 'Ten people at a party all shake hands with each other once. How many handshakes are there?',
      choices: ['$90$', '$45$', '$100$', '$50$'],
      answer: 1,
      solution: 'Handshakes come one per pair: $\\frac{10 \\times 9}{2} = 45$. The answer $90$ counts each handshake from both sides.',
    },
    {
      q: 'A club with $7$ members wants to choose $2$ co-captains. In how many ways can the pair be chosen?',
      choices: ['$42$', '$49$', '$21$', '$14$'],
      answer: 2,
      solution: 'The two co-captains have the same role, so choosing Zoe-then-Sam is the same pair as Sam-then-Zoe. Count $\\frac{7 \\times 6}{2} = 21$ pairs.',
    },
    {
      q: 'Twelve teams enter a chess league where every pair of teams plays exactly once. How many games are played?',
      choices: ['$132$', '$66$', '$144$', '$60$'],
      answer: 1,
      solution: 'One game per pair: $\\frac{12 \\times 11}{2} = \\frac{132}{2} = 66$. Forgetting the division gives $132$, and $144 = 12 \\times 12$ would even let teams play themselves!',
    },
    {
      q: 'At a gathering, every pair of guests shook hands, and there were $28$ handshakes in all. How many guests were there?',
      choices: ['$7$', '$14$', '$9$', '$8$'],
      answer: 3,
      solution: 'We need $\\frac{n(n-1)}{2} = 28$, so $n(n-1) = 56$. Two consecutive numbers multiplying to $56$ are $8$ and $7$, so $n = 8$. Check: $\\frac{8 \\times 7}{2} = 28$.',
    },
    {
      q: 'Four red points and five blue points are drawn, and a segment is drawn between every red-blue pair (but not between same-colored points). How many segments are there?',
      choices: ['$20$', '$9$', '$36$', '$10$'],
      answer: 0,
      solution: 'Each segment pairs one red with one blue point — two different groups, so multiply: $4 \\times 5 = 20$. No division by $2$: a red-blue segment cannot be counted twice from within one group. ($36$ would count all pairs among $9$ points, including same-color ones.)',
    },
    {
      q: 'Nine people are at a party. Everyone shakes hands with everyone else, except that two of the guests are feuding and skip each other. How many handshakes happen?',
      choices: ['$36$', '$34$', '$35$', '$72$'],
      answer: 2,
      solution: 'With no feud there would be $\\frac{9 \\times 8}{2} = 36$ handshakes. The feud removes exactly one pair, so $36 - 1 = 35$. Counting the full picture and subtracting the exceptions is often easier than counting around them.',
    },
  ],
}

const s145 = {
  id: '14.5',
  title: 'Probability',
  learn: {
    concepts: [
      {
        heading: 'The probability fraction',
        body: 'When every outcome is equally likely, the probability of an event is $\\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$. A standard die has $6$ equally likely faces, and $2$ of them ($5$ and $6$) are bigger than $4$, so the probability of rolling bigger than $4$ is $\\frac{2}{6} = \\frac{1}{3}$. Always give the fraction in lowest terms.',
      },
      {
        heading: 'The scale from 0 to 1',
        body: 'Probabilities live between $0$ and $1$. An impossible event has probability $0$, a certain event has probability $1$, and everything else falls in between. If you ever compute a probability bigger than $1$, something went wrong — probably the favorable count outgrew the total!',
      },
      {
        heading: 'The "not" shortcut',
        body: 'Either an event happens or it does not, so the two probabilities add to $1$: $P(\\text{not } A) = 1 - P(A)$. This complement trick shines when "not" is easier to count — "at least one head" is a mouthful, but "no heads at all" is a single outcome.',
      },
      {
        heading: 'Two-step experiments',
        body: 'For an experiment with two independent steps — two coins, two dice, two spins — the multiplication principle counts the outcomes. Two dice have $6 \\times 6 = 36$ equally likely results. Count the favorable results the same way (or with casework), then form the fraction.',
      },
    ],
    examples: [
      {
        problem: 'A standard die is rolled. What is the probability of rolling a $5$ or a $6$?',
        steps: [
          'There are $6$ equally likely outcomes.',
          'Two of them are favorable: $5$ and $6$.',
          'The probability is $\\frac{2}{6}$, which reduces to $\\frac{1}{3}$.',
        ],
        answer: 'The probability is $\\frac{1}{3}$.',
      },
      {
        problem: 'A bag holds $3$ red marbles and $5$ blue marbles. One marble is drawn at random. What is the probability it is NOT red?',
        steps: [
          'First find $P(\\text{red}) = \\frac{3}{8}$, since $3$ of the $8$ marbles are red.',
          'Use the complement: $P(\\text{not red}) = 1 - \\frac{3}{8} = \\frac{5}{8}$.',
          'Check directly: the $5$ blue marbles are exactly the not-red ones, and $\\frac{5}{8}$ matches.',
        ],
        answer: 'The probability is $\\frac{5}{8}$.',
      },
      {
        problem: 'Two fair coins are flipped. What is the probability that both show heads?',
        steps: [
          'The multiplication principle gives $2 \\times 2 = 4$ equally likely outcomes: HH, HT, TH, TT.',
          'Only HH is favorable.',
        ],
        answer: 'The probability is $\\frac{1}{4}$.',
      },
    ],
  },
  problems: [
    {
      q: 'A fair coin is flipped once. What is the probability it lands heads?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$1$'],
      answer: 0,
      solution: 'There are $2$ equally likely outcomes, and $1$ of them is heads: $\\frac{1}{2}$.',
    },
    {
      q: 'A standard die is rolled. What is the probability of rolling exactly $3$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{5}{6}$'],
      answer: 1,
      solution: 'One favorable face out of $6$ equally likely faces: $\\frac{1}{6}$. (Do not confuse the face value $3$ with the count of favorable outcomes, which is just $1$.)',
    },
    {
      q: 'A bag holds $4$ red marbles and $6$ blue marbles. What is the probability a random draw is red?',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{5}$', '$\\frac{1}{2}$', '$\\frac{2}{5}$'],
      answer: 3,
      solution: 'There are $4 + 6 = 10$ marbles total, and $4$ are red: $\\frac{4}{10} = \\frac{2}{5}$. Careful: comparing red to blue gives $\\frac{4}{6}$, but probability compares favorable to TOTAL.',
    },
    {
      q: 'A standard die is rolled. What is the probability of rolling an even number?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'The even faces are $2$, $4$, and $6$ — that is $3$ favorable out of $6$: $\\frac{3}{6} = \\frac{1}{2}$.',
    },
    {
      q: 'A standard die is rolled. What is the probability of NOT rolling a $6$?',
      choices: ['$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'Use the complement: $P(\\text{not } 6) = 1 - P(6) = 1 - \\frac{1}{6} = \\frac{5}{6}$. Or count directly: five of the six faces are not $6$.',
    },
    {
      q: 'A spinner has $8$ equal sections, and $3$ of them are yellow. What is the probability the spinner does NOT land on yellow?',
      choices: ['$\\frac{3}{8}$', '$\\frac{1}{2}$', '$\\frac{3}{5}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution: 'The not-yellow sections number $8 - 3 = 5$, so the probability is $\\frac{5}{8}$. Equivalently, $1 - \\frac{3}{8} = \\frac{5}{8}$.',
    },
    {
      q: 'Two fair coins are flipped. What is the probability that both land tails?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution: 'There are $2 \\times 2 = 4$ equally likely outcomes, and only TT works: $\\frac{1}{4}$. (Not $\\frac{1}{3}$ — the outcomes "one head, one tail" happen in two ways, HT and TH, so the four outcomes must all be listed.)',
    },
    {
      q: 'A bag holds $2$ green, $3$ yellow, and $5$ red marbles. What is the probability a random draw is green or yellow?',
      choices: ['$\\frac{1}{5}$', '$\\frac{3}{10}$', '$\\frac{1}{2}$', '$\\frac{2}{5}$'],
      answer: 2,
      solution: 'Green or yellow covers $2 + 3 = 5$ marbles out of $10$ total: $\\frac{5}{10} = \\frac{1}{2}$. The two colors do not overlap, so we may simply add their counts.',
    },
    {
      q: 'Two standard dice are rolled. What is the probability the sum is $7$?',
      choices: ['$\\frac{7}{36}$', '$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{1}{7}$'],
      answer: 1,
      solution: 'There are $6 \\times 6 = 36$ equally likely rolls. Casework shows $6$ of them sum to $7$: $1+6, 2+5, 3+4, 4+3, 5+2, 6+1$. So the probability is $\\frac{6}{36} = \\frac{1}{6}$.',
    },
    {
      q: 'A fair coin is flipped $3$ times. What is the probability of getting at least one head?',
      choices: ['$\\frac{1}{8}$', '$\\frac{3}{4}$', '$\\frac{7}{8}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution: '"At least one head" is a mouthful, so count the opposite: "no heads" means TTT, just $1$ outcome out of $2 \\times 2 \\times 2 = 8$. So $P(\\text{at least one head}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
    },
  ],
}

const challenge = [
  {
    q: 'A concert hall numbers its seats from $37$ to $118$, with no numbers skipped. How many seats are there?',
    choices: ['$81$', '$82$', '$80$', '$83$'],
    answer: 1,
    solution: 'The gap from $37$ to $118$ is $118 - 37 = 81$, but a list has one more member than its gap: $118 - 37 + 1 = 82$ seats. Subtracting alone leaves one seat uncounted — the fencepost slip.',
  },
  {
    q: 'How many multiples of $6$ are there from $100$ to $300$?',
    choices: ['$33$', '$50$', '$35$', '$34$'],
    answer: 3,
    solution: 'The first multiple of $6$ that is at least $100$ is $102 = 6 \\times 17$, and the last one at most $300$ is $300 = 6 \\times 50$. Dividing the list $102, 108, \\ldots, 300$ by $6$ gives $17, 18, \\ldots, 50$, which has $50 - 17 + 1 = 34$ numbers. ($50$ would be right only if the list started at $6$.)',
  },
  {
    q: 'How many numbers from $1$ to $60$ are multiples of $4$ or multiples of $6$?',
    choices: ['$20$', '$25$', '$15$', '$18$'],
    answer: 0,
    solution: 'There are $15$ multiples of $4$ and $10$ multiples of $6$. But multiples of $12$ — there are $5$ of them, like $12$ and $24$ — landed in both groups, so $15 + 10 = 25$ counts each of those twice. Subtract the overlap once: $15 + 10 - 5 = 20$.',
  },
  {
    q: 'A computer password is two different letters followed by two different digits. How many passwords are possible?',
    choices: ['$67{,}600$', '$65{,}000$', '$58{,}500$', '$5850$'],
    answer: 2,
    solution: 'Four slots, with options shrinking inside each type: $26 \\times 25$ for the letters and $10 \\times 9$ for the digits. That is $650 \\times 90 = 58{,}500$. The answer $67{,}600 = 26 \\times 26 \\times 10 \\times 10$ forgets that repeats are not allowed.',
  },
  {
    q: 'How many three-digit numbers have all three digits different?',
    choices: ['$729$', '$648$', '$720$', '$900$'],
    answer: 1,
    solution: 'Handle the picky slot first: the hundreds digit cannot be $0$, so it has $9$ options. The tens digit can be anything except the hundreds digit — $0$ is welcome now — so $9$ options again. The units digit avoids both: $8$ options. Total: $9 \\times 9 \\times 8 = 648$. ($720 = 10 \\times 9 \\times 8$ forgets the no-leading-zero rule.)',
  },
  {
    q: 'Five friends line up for a photo, but Jo and Kim insist on standing next to each other. How many lineups are possible?',
    choices: ['$48$', '$24$', '$120$', '$96$'],
    answer: 0,
    solution: 'Glue Jo and Kim into one block. Now $4$ units — the block plus the other $3$ friends — line up in $4 \\times 3 \\times 2 \\times 1 = 24$ ways. Inside the block, Jo can stand left or right of Kim: $2$ ways. Multiply: $24 \\times 2 = 48$ lineups.',
  },
  {
    q: 'How many three-digit numbers have digits that add up to $5$?',
    choices: ['$12$', '$21$', '$14$', '$15$'],
    answer: 3,
    solution: 'Cases by the hundreds digit, which runs $1$ through $5$. If it is $1$, the last two digits must sum to $4$: that happens in $5$ ways ($04, 13, 22, 31, 40$). A hundreds digit of $2$ leaves sum $3$: $4$ ways. The pattern continues: $5 + 4 + 3 + 2 + 1 = 15$ numbers.',
  },
  {
    q: 'Two standard dice are rolled. In how many ways can the sum be $10$ or more?',
    choices: ['$5$', '$6$', '$8$', '$3$'],
    answer: 1,
    solution: 'Cases by the sum. Sum $10$: $(4,6), (5,5), (6,4)$ — $3$ ways. Sum $11$: $(5,6), (6,5)$ — $2$ ways. Sum $12$: $(6,6)$ — $1$ way. The cases do not overlap, so add: $3 + 2 + 1 = 6$ ways.',
  },
  {
    q: 'Ten teams enter a league where every pair of teams plays exactly twice — once at each team\'s home field. How many games are played?',
    choices: ['$45$', '$180$', '$90$', '$100$'],
    answer: 2,
    solution: 'First count the pairs of teams: $\\frac{10 \\times 9}{2} = 45$. Each pair plays $2$ games, so there are $45 \\times 2 = 90$ games. ($45$ forgets the second game; $180$ doubles a count that was already doubled.)',
  },
  {
    q: 'A stop-sign shape has $8$ corners. How many diagonals does it have? (A diagonal connects two corners that are not next to each other.)',
    choices: ['$20$', '$28$', '$56$', '$16$'],
    answer: 0,
    solution: 'Every pair of corners gives a segment: $\\frac{8 \\times 7}{2} = 28$ segments. But $8$ of these connect neighboring corners — those are the sides, not diagonals. Subtract them: $28 - 8 = 20$ diagonals.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that the sum is $8$?',
    choices: ['$\\frac{1}{6}$', '$\\frac{1}{9}$', '$\\frac{7}{36}$', '$\\frac{5}{36}$'],
    answer: 3,
    solution: 'There are $6 \\times 6 = 36$ equally likely rolls. Casework on the first die finds the sums of $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$ — just $5$ ways, because $(4,4)$ has no partner roll. The probability is $\\frac{5}{36}$. (Unlike a sum of $7$, this is NOT $\\frac{1}{6}$!)',
  },
  {
    q: 'A spinner has $4$ equal sections numbered $1$ through $4$. It is spun twice. What is the probability that at least one spin lands on $4$?',
    choices: ['$\\frac{1}{2}$', '$\\frac{9}{16}$', '$\\frac{7}{16}$', '$\\frac{1}{4}$'],
    answer: 2,
    solution: 'Count the opposite: BOTH spins miss the $4$. Each spin misses in $3$ of $4$ ways, so $3 \\times 3 = 9$ of the $16$ equally likely results have no $4$ at all. Then $P(\\text{at least one } 4) = 1 - \\frac{9}{16} = \\frac{7}{16}$. Adding $\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$ is wrong — it counts the double-$4$ result twice.',
  },
]

const worksheet = [
  {
    q: 'How many integers are in the list $18, 19, 20, \\ldots, 74$?',
    answer: '$57$',
    solution: 'Count the numbers, not the gap: $74 - 18 + 1 = 57$. The subtraction $74 - 18 = 56$ only counts the jumps between neighbors.',
  },
  {
    q: 'A cafe meal is one of $4$ sandwiches, one of $3$ sides, and one of $2$ desserts. How many different meals are possible?',
    answer: '$24$',
    solution: 'Three independent choices multiply: $4 \\times 3 \\times 2 = 24$ meals.',
  },
  {
    q: 'How many ways can you make $40$ cents using only dimes and nickels?',
    answer: '$5$',
    solution: 'Cases by the number of dimes: $0, 1, 2, 3,$ or $4$. Each case forces the nickels ($8, 6, 4, 2, 0$ of them), so there are $5$ ways.',
  },
  {
    q: 'Thirteen people at a reunion all shake hands with each other exactly once. How many handshakes are there?',
    answer: '$78$',
    solution: 'Each of $13$ people shakes $12$ hands, but $13 \\times 12 = 156$ counts every handshake twice — once from each side. Divide by $2$: $\\frac{13 \\times 12}{2} = 78$.',
  },
  {
    q: 'A bag holds $3$ red, $4$ blue, and $5$ green marbles. One marble is drawn at random. What is the probability it is blue?',
    answer: '$\\frac{1}{3}$',
    solution: 'There are $3 + 4 + 5 = 12$ marbles, and $4$ are blue: $\\frac{4}{12} = \\frac{1}{3}$.',
  },
  {
    q: 'How many multiples of $7$ are there from $1$ to $150$?',
    answer: '$21$',
    solution: 'The multiples are $7, 14, \\ldots, 147$. Divide each by $7$ to get the consecutive list $1, 2, \\ldots, 21$ — so there are $21$ of them.',
  },
  {
    q: 'How many three-digit numbers bigger than $500$ have all three digits odd?',
    answer: '$75$',
    solution: 'The hundreds digit must be odd and at least $5$: that is $5$, $7$, or $9$ — and note that every all-odd number in the $500$s is at least $511$, so all of them beat $500$. The tens and units digits can each be any of the $5$ odd digits. Multiply the slots: $3 \\times 5 \\times 5 = 75$.',
  },
  {
    q: 'How many three-digit numbers have digits that add up to $4$?',
    answer: '$10$',
    solution: 'Cases by the hundreds digit, which runs $1$ through $4$. Hundreds digit $1$ leaves sum $3$ for the last two digits: $4$ ways ($03, 12, 21, 30$). Hundreds digit $2$ leaves sum $2$: $3$ ways. Then $2$ ways, then $1$ way. Total: $4 + 3 + 2 + 1 = 10$.',
  },
  {
    q: 'Twenty students in a club each exchange phone numbers with every other student. How many exchanges happen?',
    answer: '$190$',
    solution: 'One exchange per pair of students — the handshake problem with phones. Count $\\frac{20 \\times 19}{2} = \\frac{380}{2} = 190$. Without the division, each exchange is counted once by each of its two students.',
  },
  {
    q: 'Two standard dice are rolled. What is the probability that at least one die shows a $6$?',
    answer: '$\\frac{11}{36}$',
    solution: 'Count the opposite: neither die shows a $6$. Each die avoids $6$ in $5$ ways, so $5 \\times 5 = 25$ of the $36$ rolls have no $6$. That leaves $36 - 25 = 11$ favorable rolls: $P = 1 - \\frac{25}{36} = \\frac{11}{36}$. (Careful: $\\frac{1}{6} + \\frac{1}{6} = \\frac{12}{36}$ overcounts the double-$6$ roll.)',
  },
]

export default {
  id: 'prealgebra-ch14',
  book: 'prealgebra',
  number: 14,
  title: 'Counting',
  intro:
    'How many outfits, how many handshakes, how many ways can it happen? Counting questions look simple, but counting one-by-one gets old fast. In this chapter you will learn to count cleverly — with lists, slots, cases, and pairs — and then use counting to predict chance itself.',
  sections: [s141, s142, s143, s144, s145],
  challenge,
  worksheet,
}
