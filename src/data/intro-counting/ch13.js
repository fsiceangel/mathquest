// Counting & Probability — Chapter 13: The Hockey Stick Identity
// All problems, explanations, and examples are original MathQuest content.

const s132 = {
  id: '13.2',
  title: 'The Problem',
  learn: {
    concepts: [
      {
        heading: 'One problem, a whole chapter',
        body: 'Here is the question this chapter circles around: $7$ identical pencils are dropped into $4$ cups labeled $A$, $B$, $C$, $D$, and a cup may stay empty. How many different results are there? Because the pencils are identical, a result is nothing more than the four counts — $(3, 0, 4, 0)$ is one result, $(0, 3, 0, 4)$ is a different one — so we are counting lists of four non-negative whole numbers that add to $7$.',
      },
      {
        heading: 'The same problem in disguise',
        body: 'Many questions are this problem wearing a costume. “How many non-negative integer solutions does $x_1 + x_2 + x_3 + x_4 = 7$ have?” is exactly $7$ pencils into $4$ cups. “How many ways can $7$ identical coins be handed to $4$ children?” is the same. So is “how many $7$-letter strings use the letters $A, B, C, D$ in alphabetical order?” — such a string is settled once you know how many of each letter it has, and those four counts add to $7$.',
      },
      {
        heading: 'When it is small, list — in order',
        body: 'For tiny $n$ and $k$, the honest method is to list every result, and the way not to miss one is to sort: start with the most in the first box and step it down, and inside each case do the same for the second box. For $2$ items into $3$ boxes the list is $(2,0,0), (1,1,0), (1,0,1), (0,2,0), (0,1,1), (0,0,2)$ — six results, and the ordering guarantees nothing was skipped or repeated.',
      },
      {
        heading: 'Settle the conventions first',
        body: 'Three questions decide which problem you are solving: are the items identical (if the $7$ pencils were all different, each would pick a cup on its own for $4^7$ results), are the boxes labeled (unlabeled boxes make $(3,4,0,0)$ and $(4,3,0,0)$ the same), and may a box be empty? The trap is answering a different problem than the one asked, so read the stem for all three before you count anything.',
      },
    ],
    examples: [
      {
        problem: 'Three identical marbles are placed into two cups labeled $A$ and $B$. A cup may be empty. How many different results are there?',
        steps: [
          'A result is the pair (marbles in $A$, marbles in $B$), and the two numbers add to $3$.',
          'Step the count in $A$ down from $3$: $(3,0), (2,1), (1,2), (0,3)$.',
          'That is every pair of non-negative integers with sum $3$, so there are $4$ results — one more than the number of marbles, because $A$ can hold anything from $0$ to $3$.',
        ],
        answer: 'There are $4$ results.',
      },
      {
        problem: 'How many ordered triples $(a, b, c)$ of non-negative integers satisfy $a + b + c = 3$?',
        steps: [
          'Sort by $a$. If $a = 3$, then $b = c = 0$: $1$ triple.',
          'If $a = 2$, then $b + c = 1$, which has $2$ solutions; if $a = 1$, then $b + c = 2$ has $3$ solutions; if $a = 0$, then $b + c = 3$ has $4$ solutions.',
          'Add the cases: $1 + 2 + 3 + 4 = 10$ triples.',
        ],
        answer: 'There are $10$ ordered triples.',
      },
      {
        problem: 'How many strings of four digits, each digit $1$, $2$, or $3$, are non-decreasing — that is, no digit is smaller than the digit before it?',
        steps: [
          'A non-decreasing string is completely determined by how many $1$’s, $2$’s, and $3$’s it contains, since those must appear in order: three $1$’s and one $3$ can only be $1113$.',
          'So the count equals the number of ways to split $4$ identical “slots” among the three digits, with a digit allowed to appear zero times.',
          'Sort by the number of $1$’s: four $1$’s gives $1$ string; three $1$’s leaves one slot for $2$ or $3$, $2$ strings; two $1$’s leaves two slots, $3$ strings; one $1$ leaves three slots, $4$ strings; no $1$’s, $5$ strings.',
          'Total: $1 + 2 + 3 + 4 + 5 = 15$ strings.',
        ],
        answer: 'There are $15$ non-decreasing strings.',
      },
    ],
  },
  problems: [
    {
      q: 'How many ordered pairs $(x, y)$ of positive integers satisfy $x + y = 8$?',
      choices: ['$8$', '$9$', '$7$', '$14$'],
      answer: 2,
      solution: 'Choose $x$ from $1$ to $7$, and $y = 8 - x$ is forced and positive: $(1,7), (2,6), \\ldots, (7,1)$ is $7$ pairs. Answering $8$ lets $x$ run to $8$, where $y$ would be $0$; $9$ allows zeros at both ends; $14$ counts each pair twice.',
    },
    {
      q: 'A bakery sells blueberry, banana, and bran muffins. Ava buys exactly $5$ muffins, exactly $2$ of which are blueberry; she may take any number of the other two kinds, including none. How many different purchases are possible? (Two purchases are the same if they have the same number of each kind.)',
      choices: ['$4$', '$21$', '$3$', '$6$'],
      answer: 0,
      solution: 'The blueberry count is fixed, so only the split of the other $3$ muffins between banana and bran matters: banana can be $0$, $1$, $2$, or $3$, and bran is the rest. That is $4$ purchases. The answer $21$ counts every purchase of $5$ muffins, ignoring the blueberry condition; $3$ forgets that banana may be $0$ (or $3$); $6 = 3!$ arranges the kinds instead of counting purchases.',
    },
    {
      q: 'How many three-letter strings, using only the letters $A$, $B$, $C$, $D$ with repeats allowed, are in alphabetical order (no letter comes earlier in the alphabet than the letter before it) and use at least two different letters?',
      choices: ['$20$', '$64$', '$12$', '$16$'],
      answer: 3,
      solution: 'An alphabetical string is fixed by how many of each letter it uses, so first count ways to give $3$ identical slots to $4$ letters. Sort by the number of $A$’s: three $A$’s, $1$ string; two $A$’s, the last slot has $3$ choices; one $A$, two slots among $B, C, D$ give $6$ strings; no $A$’s, three slots among three letters give $10$. That is $1 + 3 + 6 + 10 = 20$ strings, and the $4$ single-letter strings $AAA, BBB, CCC, DDD$ must be removed: $20 - 4 = 16$. The choice $20$ forgets to remove them; $64$ counts every string; $12$ counts only the strings that use exactly two different letters.',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of positive odd integers satisfy $a + b + c = 7$?',
      choices: ['$15$', '$6$', '$3$', '$9$'],
      answer: 1,
      solution: 'Sort by $a$, which can be $1$, $3$, or $5$. For $a = 1$, $b + c = 6$ with both odd: $(1,5), (3,3), (5,1)$, $3$ triples. For $a = 3$, $b + c = 4$: $(1,3), (3,1)$, $2$ triples. For $a = 5$, only $(1,1)$. Total $3 + 2 + 1 = 6$. The answer $15$ counts all positive triples, ignoring oddness; $3$ counts only the case $a = 1$; $9 = 3 \\times 3$ picks $a$ and $b$ freely from $\\{1, 3, 5\\}$ and forgets that $c$ must then be a positive odd number.',
    },
    {
      q: 'Five identical candies are shared between Ren and Sol. Ren must receive at least $2$ candies; Sol may receive none. How many ways can the candies be shared?',
      choices: ['$6$', '$3$', '$4$', '$5$'],
      answer: 2,
      solution: 'Only Ren’s count matters, and it can be $2$, $3$, $4$, or $5$, with Sol taking the rest: $4$ ways. The answer $6$ ignores Ren’s minimum; $3$ reads “at least $2$” as “more than $2$”; $5$ is off by one at the boundary.',
    },
    {
      q: 'Four identical pens are placed into three pockets — left, right, and chest — and any pocket may be empty. In how many placements does the left pocket hold more pens than the right pocket?',
      choices: ['$15$', '$9$', '$3$', '$6$'],
      answer: 3,
      solution: 'List the pairs (left, right) with left larger and a total of at most $4$; the chest pocket takes whatever is left. Right $0$: left $1, 2, 3, 4$, four placements. Right $1$: left $2$ or $3$, two placements. Right $2$ would need left at least $3$, too many pens. Total $4 + 2 = 6$. The answer $15$ counts every placement; $9$ also counts the three ties $(0,0), (1,1), (2,2)$; $3$ counts only those ties.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 4$ with $x$ even?',
      choices: ['$9$', '$15$', '$6$', '$8$'],
      answer: 0,
      solution: 'The even values of $x$ are $0$, $2$, $4$. Then $y + z = 4$ has $5$ solutions, $y + z = 2$ has $3$, and $y + z = 0$ has $1$: $5 + 3 + 1 = 9$. The answer $15$ drops the evenness condition; $6$ counts the odd-$x$ triples instead; $8$ forgets $x = 4$.',
    },
    {
      q: 'Seven identical apples are divided among three children, Kai, Lin, and Mo, so that exactly one child receives no apples. How many divisions are possible?',
      choices: ['$36$', '$18$', '$15$', '$24$'],
      answer: 1,
      solution: 'Choose the child who gets nothing, $3$ ways. The other two children then split $7$ apples with each getting at least $1$: the first of them gets $1$ through $6$, so $6$ ways. Total $3 \\times 6 = 18$. The answer $36$ counts every division; $15$ counts the divisions where every child gets an apple; $24 = 3 \\times 8$ lets the second child also be empty, which counts a division like $(7, 0, 0)$ more than once.',
    },
    {
      q: 'How many five-digit strings, using only the digits $1$, $2$, $3$, are non-decreasing and contain at least one $2$?',
      choices: ['$15$', '$6$', '$21$', '$16$'],
      answer: 0,
      solution: 'A non-decreasing string is fixed by its counts of $1$, $2$, and $3$, which add to $5$: there are $6 + 5 + 4 + 3 + 2 + 1 = 21$ such strings. Those with no $2$ use only $1$’s and $3$’s, and the number of $1$’s can be $0$ through $5$: $6$ strings. So $21 - 6 = 15$. The answer $21$ forgets the condition; $6$ is the complement; $16$ misses one of the six $2$-free strings (usually $11111$ or $33333$).',
    },
    {
      q: 'Four identical red balls and two identical blue balls are placed into two boxes labeled $L$ and $R$. A box may be empty. How many different placements are there?',
      choices: ['$15$', '$7$', '$8$', '$30$'],
      answer: 0,
      solution: 'Red and blue are placed independently: the reds have $5$ placements (box $L$ gets $0$ to $4$) and the blues have $3$ (box $L$ gets $0$ to $2$), so $5 \\times 3 = 15$ placements. Answering $8$ adds the two counts instead of multiplying; $7$ treats all six balls as identical; $30$ doubles for no reason.',
    },
  ],
}

const s133 = {
  id: '13.3',
  title: 'A Step-by-Step Solution',
  learn: {
    concepts: [
      {
        heading: 'Decide the first box, then recurse',
        body: 'Listing $7$ pencils into $4$ cups by hand is painful, so organize it: ask how many pencils cup $A$ gets. If $A$ gets $j$, the other $7 - j$ pencils go into the remaining $3$ cups — the same problem, one cup smaller. So the count for $4$ cups is a sum of counts for $3$ cups, and the count for $3$ cups is a sum of counts for $2$ cups. Each step peels off one box.',
      },
      {
        heading: 'Climb the ladder',
        body: 'One box: $n$ items go in, $1$ way. Two boxes: the first gets $0$ through $n$, so $n + 1$ ways. Three boxes: the first gets $j$, leaving $n - j$ items for two boxes, $n - j + 1$ ways; summing $j = 0$ to $n$ gives $(n+1) + n + \\cdots + 1$, the triangular number $\\frac{(n+1)(n+2)}{2}$. Four boxes: a sum of triangular numbers. For the pencils: $36 + 28 + 21 + 15 + 10 + 6 + 3 + 1 = 120$.',
      },
      {
        heading: 'Keep a table',
        body: 'Write a table whose entry in row $n$, column $k$ is the number of ways to put $n$ identical items into $k$ labeled boxes. Each entry is the sum of the column-$(k-1)$ entries in rows $0$ through $n$ — or, faster, the entry above it plus the entry to its left: either box $1$ is empty (the entry to the left) or it is not, in which case remove one item from box $1$ (the entry above). That is Pascal’s rule, and it fills a table quickly.',
      },
      {
        heading: 'Restrictions just trim the sum',
        body: 'If a box must hold at least $m$ items, put $m$ in first and distribute the rest. If a box may hold at most $m$, the first-box casework simply runs $j = 0$ through $m$ instead of $0$ through $n$. The trap is the ends of the sum: forgetting the $j = 0$ term (the box may be empty) or the $j = n$ term (all items in one box) is the usual way to lose one case.',
      },
    ],
    examples: [
      {
        problem: 'Six identical rings are placed into three boxes labeled $P$, $Q$, $R$; a box may be empty. Count the placements step by step.',
        steps: [
          'Let box $P$ get $j$ rings, for $j = 0, 1, \\ldots, 6$; the other $6 - j$ rings go to $Q$ and $R$.',
          'Two boxes holding $6 - j$ identical rings can be filled in $(6 - j) + 1 = 7 - j$ ways.',
          'Summing over $j$: $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$ placements.',
        ],
        answer: 'There are $28$ placements.',
      },
      {
        problem: 'Six identical coins are dropped into four jars labeled $1$ through $4$; a jar may be empty. How many distributions are there?',
        steps: [
          'If jar $1$ gets $j$ coins, the other $6 - j$ coins go into three jars, and by the three-box formula that is $\\frac{(7-j)(8-j)}{2}$ ways — a triangular number.',
          'Tabulate for $j = 0$ through $6$: $28, 21, 15, 10, 6, 3, 1$.',
          'Add them: $28 + 21 + 15 + 10 + 6 + 3 + 1 = 84$.',
        ],
        answer: 'There are $84$ distributions.',
      },
      {
        problem: 'Five identical candies are shared among three children, and no child may receive more than $3$. A child may receive none. How many ways are there?',
        steps: [
          'Let the first child get $j$ candies, where $j$ runs only from $0$ to $3$ because of the cap.',
          'The other two children split $5 - j$ candies with each getting at most $3$: for $j = 0$ the splits of $5$ are $(2,3)$ and $(3,2)$, $2$ ways; for $j = 1$ the splits of $4$ are $(1,3), (2,2), (3,1)$, $3$ ways; for $j = 2$ the splits of $3$ are all four allowed, $4$ ways; for $j = 3$ the splits of $2$ are all three allowed, $3$ ways.',
          'Total: $2 + 3 + 4 + 3 = 12$.',
          'Check: the sorted patterns are $3,2,0$ (six orders), $3,1,1$ (three), and $2,2,1$ (three), and $6 + 3 + 3 = 12$.',
        ],
        answer: 'There are $12$ ways.',
      },
    ],
  },
  problems: [
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 4$?',
      choices: ['$20$', '$35$', '$56$', '$15$'],
      answer: 1,
      solution: 'Let $x = j$; then $y + z + w = 4 - j$ has the triangular number $\\frac{(5-j)(6-j)}{2}$ of solutions: $15, 10, 6, 3, 1$ for $j = 0$ to $4$. Sum: $35$. The answer $20$ drops the $j = 0$ term; $15$ stops at three variables; $56 = \\binom{8}{3}$ puts one too many on top of the formula.',
    },
    {
      q: 'Nine identical tokens are placed into three jars labeled $A$, $B$, $C$. Jar $A$ may hold at most $2$ tokens; the other jars may hold any number, including none. How many placements are there?',
      choices: ['$55$', '$19$', '$28$', '$27$'],
      answer: 3,
      solution: 'Jar $A$ gets $0$, $1$, or $2$ tokens, and the remaining $9$, $8$, or $7$ tokens split between $B$ and $C$ in $10$, $9$, or $8$ ways. Total $10 + 9 + 8 = 27$. The answer $55$ ignores the cap; $28$ is the number of placements with $A$ holding at least $3$; $19$ forgets the case $A = 2$.',
    },
    {
      q: 'Five identical stamps are sorted into five envelopes labeled $V$, $W$, $X$, $Y$, $Z$; an envelope may be empty. How many sortings are there?',
      choices: ['$126$', '$70$', '$252$', '$56$'],
      answer: 0,
      solution: 'Build the table one column at a time. Four envelopes holding $0, 1, 2, 3, 4, 5$ stamps can be filled in $1, 4, 10, 20, 35, 56$ ways (each a sum of triangular numbers). If $V$ gets $j$ stamps, the other $5 - j$ go into four envelopes, so the total is $56 + 35 + 20 + 10 + 4 + 1 = 126$. The answer $70$ is the count for $4$ stamps in five envelopes; $56$ is the count for $5$ stamps in four envelopes, forgetting $V$; $252 = \\binom{10}{5}$ puts one too many on top of the formula.',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of positive integers satisfy $a + b + c = 10$ with $a \\leq 3$?',
      choices: ['$27$', '$36$', '$21$', '$15$'],
      answer: 2,
      solution: 'With $a = j$ for $j = 1, 2, 3$, the equation $b + c = 10 - j$ in positive integers has $9 - j$ solutions: $8 + 7 + 6 = 21$. The answer $36$ counts all positive triples, ignoring the cap on $a$; $15$ is the number of positive triples with $a \\geq 4$; $27 = 10 + 9 + 8$ lets $b$ or $c$ be $0$.',
    },
    {
      q: 'Eight identical candies are shared among three children, and each child must receive at least $2$ candies. How many ways can the candies be shared?',
      choices: ['$45$', '$6$', '$15$', '$21$'],
      answer: 1,
      solution: 'Give each child $2$ candies first; that uses $6$, and the last $2$ candies are shared with no restriction. The first child gets $0$, $1$, or $2$ of them, leaving $3$, $2$, or $1$ ways for the others: $3 + 2 + 1 = 6$. The answer $45$ ignores the minimum; $15 = \\binom{6}{2}$ pays only two of the children first; $21$ pays each child only $1$ first, the positive-solutions count.',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 5$ with $w \\leq 1$?',
      choices: ['$36$', '$56$', '$21$', '$20$'],
      answer: 0,
      solution: 'Case $w = 0$: $x + y + z = 5$ has $6 + 5 + 4 + 3 + 2 + 1 = 21$ solutions. Case $w = 1$: $x + y + z = 4$ has $15$. Total $36$. The answer $56$ drops the condition; $21$ forgets $w = 1$; $20$ is the number of solutions with $w \\geq 2$.',
    },
    {
      q: 'Ten identical coins are handed to Ana, Bo, and Cy. Ana must receive an even number of coins (zero counts as even); the others may receive any number. How many ways are there?',
      choices: ['$66$', '$30$', '$33$', '$36$'],
      answer: 3,
      solution: 'Ana gets $0, 2, 4, 6, 8$, or $10$ coins, leaving $10, 8, 6, 4, 2, 0$ coins for Bo and Cy, which they split in $11, 9, 7, 5, 3, 1$ ways. Sum: $36$. The answer $66$ ignores the condition; $30$ is the odd-Ana count; $33$ is half of $66$, which is wrong because the even and odd cases are not equal in size.',
    },
    {
      q: 'Eight identical marbles are placed into three cups labeled $A$, $B$, $C$, and no cup may hold more than $4$ marbles. A cup may be empty. How many placements are there?',
      choices: ['$45$', '$35$', '$15$', '$30$'],
      answer: 2,
      solution: 'Let $A$ hold $j$ marbles, $j = 0$ to $4$. Then $B + C = 8 - j$ with both at most $4$: for $j = 0$ only $(4,4)$, $1$ way; $j = 1$: $(3,4), (4,3)$, $2$ ways; $j = 2$: $3$ ways; $j = 3$: $4$ ways; $j = 4$: $B$ from $0$ to $4$, $5$ ways. Total $1 + 2 + 3 + 4 + 5 = 15$. The answer $45$ ignores the cap; $30$ is the number of placements that break it; $35$ caps only cup $A$.',
    },
    {
      q: 'Nine identical marbles are placed into cups labeled $A$, $B$, $C$ (a cup may be empty). In how many placements do cups $A$ and $B$ together hold an odd number of marbles?',
      choices: ['$25$', '$30$', '$55$', '$20$'],
      answer: 1,
      solution: 'Since $A + B + C = 9$, cups $A$ and $B$ hold an odd total exactly when $C$ holds an even number: $C = 0, 2, 4, 6, 8$. That leaves $9, 7, 5, 3, 1$ marbles for $A$ and $B$, split in $10, 8, 6, 4, 2$ ways. Total $30$. The answer $25$ comes from making $C$ odd instead; $55$ ignores the condition; $20$ forgets the $C = 0$ case.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 15$ with each of $x$, $y$, $z$ at most $7$?',
      choices: ['$136$', '$36$', '$28$', '$108$'],
      answer: 2,
      solution: 'Let $x = j$, $j = 0$ to $7$, so $y + z = 15 - j$ with $y, z \\leq 7$. For $j = 0$ the sum $15$ is impossible (at most $14$). For $j = 1$, only $(7,7)$; $j = 2$: $y = 6$ or $7$, $2$ ways; and in general $j$ ways up to $j = 7$, where $y + z = 8$ has $y = 1$ through $7$, $7$ ways. Total $0 + 1 + 2 + \\cdots + 7 = 28$. The answer $136$ ignores the caps; $108$ is the number of triples that break a cap; $36$ is the number of triples with $x \\geq 8$ — one variable’s overflow, not the answer.',
    },
  ],
}

const s134 = {
  id: '13.4',
  title: 'A Clever Solution',
  learn: {
    concepts: [
      {
        heading: 'Stars and bars',
        body: 'Draw the $7$ pencils as $7$ stars in a row and drop in $3$ bars: $\\star\\star\\,|\\,\\star\\,|\\,|\\,\\star\\star\\star\\star$ means cup $A$ gets $2$, $B$ gets $1$, $C$ gets $0$, $D$ gets $4$. Every row of $7$ stars and $3$ bars is one distribution, and every distribution is one row. So the answer is the number of ways to choose which $3$ of the $10$ positions hold bars: $\\binom{10}{3} = 120$ — the same $120$ the ladder produced, in one line.',
      },
      {
        heading: 'The formula',
        body: 'For $n$ identical items into $k$ labeled boxes with empties allowed, the row has $n$ stars and $k - 1$ bars, so the count is $\\binom{n + k - 1}{k - 1}$, which equals $\\binom{n + k - 1}{n}$. Say it in words: total symbols choose bars. The trap is the bar count — $k$ boxes need only $k - 1$ bars, so the top number is $n + k - 1$, not $n + k$.',
      },
      {
        heading: 'A minimum per box: pay it first',
        body: 'If every box must hold at least $1$, hand each box one item before you start and distribute the remaining $n - k$ freely: $\\binom{n - 1}{k - 1}$. Different minimums work the same way — subtract them all from $n$, then use the formula on what is left. Positive solutions of $x + y + z = 10$: pay $3$, distribute $7$, $\\binom{9}{2} = 36$.',
      },
      {
        heading: 'A maximum per box: count the violators',
        body: 'An upper bound is handled by complement. To count distributions with no box above $m$, count all of them, subtract those where some box holds at least $m + 1$ (pay that box $m + 1$ and distribute the rest), and add back the distributions where two boxes both overflow, since those were subtracted twice. Check whether a double overflow is even possible — when $2(m+1) > n$ it is not, and the add-back is zero.',
      },
    ],
    examples: [
      {
        problem: 'How many ordered quintuples $(a, b, c, d, e)$ of non-negative integers satisfy $a + b + c + d + e = 10$?',
        steps: [
          'This is $10$ identical items into $5$ labeled boxes: $10$ stars and $4$ bars.',
          'Choose the $4$ bar positions among $14$ symbols: $\\binom{14}{4}$.',
          'Compute $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$.',
        ],
        answer: 'There are $1001$ solutions.',
      },
      {
        problem: 'Twelve identical cupcakes are given to five children, and each child must receive at least $2$. How many ways are there?',
        steps: [
          'Pay the minimum first: give each child $2$ cupcakes, using $10$.',
          'The remaining $2$ cupcakes go to $5$ children with no restriction: $2$ stars and $4$ bars.',
          'Count: $\\binom{6}{4} = 15$.',
        ],
        answer: 'There are $15$ ways.',
      },
      {
        problem: 'Ten identical coins are placed into three jars labeled $A$, $B$, $C$, and no jar may hold more than $5$ coins. A jar may be empty. How many placements are there?',
        steps: [
          'Without the cap there are $\\binom{12}{2} = 66$ placements.',
          'Count the violators: if jar $A$ holds at least $6$, give it $6$ first and distribute the other $4$ coins freely, $\\binom{6}{2} = 15$ ways; the same for $B$ and for $C$, so $45$ placements have an overflowing jar.',
          'Two jars cannot both hold $6$ or more, since $12 > 10$, so nothing was double-subtracted.',
          'Answer: $66 - 45 = 21$.',
        ],
        answer: 'There are $21$ placements.',
      },
    ],
  },
  problems: [
    {
      q: 'How many ordered quadruples $(x_1, x_2, x_3, x_4)$ of non-negative integers satisfy $x_1 + x_2 + x_3 + x_4 = 9$?',
      choices: ['$220$', '$715$', '$495$', '$84$'],
      answer: 0,
      solution: 'Nine stars and $3$ bars: $\\binom{12}{3} = 220$. The answer $715 = \\binom{13}{4}$ uses $4$ bars; $495 = \\binom{12}{4}$ chooses the wrong number from the right total; $84 = \\binom{9}{3}$ forgets to add the bars to the total.',
    },
    {
      q: 'A florist builds a bouquet of $12$ flowers from roses, lilies, tulips, and daisies, using any number of each kind (possibly none). How many different bouquets are possible? (Two bouquets are the same if they have the same number of each kind.)',
      choices: ['$1365$', '$495$', '$455$', '$220$'],
      answer: 2,
      solution: 'A bouquet is a list of four counts adding to $12$: $12$ stars and $3$ bars, $\\binom{15}{3} = 455$. The answer $1365 = \\binom{15}{4}$ uses $4$ bars; $495 = \\binom{12}{4}$ mixes up the numbers; $220 = \\binom{12}{3}$ forgets to add the bars to the total.',
    },
    {
      q: 'How many ordered quintuples $(a, b, c, d, e)$ of positive integers satisfy $a + b + c + d + e = 12$?',
      choices: ['$1820$', '$330$', '$462$', '$495$'],
      answer: 1,
      solution: 'Pay each variable $1$ first, leaving $7$ to distribute among $5$ variables freely: $\\binom{11}{4} = 330$. The answer $1820 = \\binom{16}{4}$ allows zeros; $462 = \\binom{11}{5}$ picks the wrong bottom number; $495 = \\binom{12}{4}$ skips the payment and forgets to add the bars to the total.',
    },
    {
      q: 'Twenty identical marbles are placed into three jars labeled $A$, $B$, $C$, and each jar must hold at least $3$ marbles. How many placements are there?',
      choices: ['$231$', '$171$', '$66$', '$78$'],
      answer: 3,
      solution: 'Put $3$ marbles in each jar first, using $9$; the other $11$ go anywhere: $\\binom{13}{2} = 78$. The answer $231 = \\binom{22}{2}$ ignores the minimum; $171 = \\binom{19}{2}$ pays only $1$ per jar; $66 = \\binom{12}{2}$ subtracts one too many.',
    },
    {
      q: 'Fifteen identical stickers are given to four children — Ana, Ben, Cy, and Di. Ana must receive exactly $3$ stickers and Ben at least $2$; Cy and Di may receive any number, including none. How many ways are there?',
      choices: ['$66$', '$91$', '$364$', '$55$'],
      answer: 0,
      solution: 'Ana’s $3$ stickers are settled, and paying Ben his $2$ leaves $10$ stickers for Ben, Cy, and Di with no restriction: $10$ stars and $2$ bars, $\\binom{12}{2} = 66$. The answer $91 = \\binom{14}{2}$ forgets Ben’s minimum; $364 = \\binom{14}{3}$ keeps Ana as a free fourth variable after paying her; $55 = \\binom{11}{2}$ reads “at least $2$” as “more than $2$”.',
    },
    {
      q: 'A shop sells $5$ kinds of doughnut, one of them chocolate. Jo buys a box of $10$ doughnuts that includes at least one of every kind and exactly $3$ chocolate. How many different boxes are possible? (Boxes with the same counts of each kind are the same.)',
      choices: ['$120$', '$84$', '$20$', '$126$'],
      answer: 2,
      solution: 'The chocolate count is settled, so the other $7$ doughnuts come from $4$ kinds with at least one of each. Pay one of each first, then choose the remaining $3$ freely from $4$ kinds: $3$ stars and $3$ bars, $\\binom{6}{3} = 20$. The answer $120 = \\binom{10}{3}$ forgets the minimum for the other four kinds; $84 = \\binom{9}{3}$ pays only one doughnut in total; $126 = \\binom{9}{4}$ pays every kind once but ignores the exact chocolate count.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 12$ with $x \\leq 4$?',
      choices: ['$91$', '$36$', '$45$', '$55$'],
      answer: 3,
      solution: 'All solutions: $\\binom{14}{2} = 91$. Those with $x \\geq 5$: pay $x$ five, distribute $7$, $\\binom{9}{2} = 36$. So $91 - 36 = 55$. Check by cases: $x = 0$ to $4$ gives $13 + 12 + 11 + 10 + 9 = 55$. The answer $91$ ignores the bound; $36$ is the complement; $45 = \\binom{10}{2}$ is the number of triples with $x \\geq 4$, an off-by-one in the complement.',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z \\leq 10$?',
      choices: ['$66$', '$286$', '$220$', '$231$'],
      answer: 1,
      solution: 'Add a fourth non-negative variable $w$ that absorbs the slack: every solution of $x + y + z \\leq 10$ matches exactly one solution of $x + y + z + w = 10$. That is $10$ stars and $3$ bars, $\\binom{13}{3} = 286$. The answer $66$ counts only $x + y + z = 10$; $220 = \\binom{12}{3}$ uses the wrong total; $231$ is $\\binom{22}{2}$, a misfire.',
    },
    {
      q: 'Fourteen identical marbles are placed into four boxes labeled $1$ through $4$ so that every box holds an odd number of marbles. How many placements are there?',
      choices: ['$56$', '$120$', '$680$', '$286$'],
      answer: 0,
      solution: 'Write each box’s count as $2a + 1$ with $a \\geq 0$. Then $2(a_1 + a_2 + a_3 + a_4) + 4 = 14$, so $a_1 + a_2 + a_3 + a_4 = 5$: $\\binom{8}{3} = 56$. The answer $120 = \\binom{10}{3}$ solves for all-even counts instead; $680 = \\binom{17}{3}$ ignores the parity condition; $286 = \\binom{13}{3}$ pays only $1$ per box and forgets the doubling.',
    },
    {
      q: 'Twelve identical candies are given to four children, and no child may receive more than $5$. A child may receive none. How many ways are there?',
      choices: ['$119$', '$455$', '$371$', '$125$'],
      answer: 3,
      solution: 'All distributions: $\\binom{15}{3} = 455$. One particular child getting at least $6$: pay $6$, distribute $6$, $\\binom{9}{3} = 84$, and there are $4$ children, so subtract $336$. But two children can both get $6$ — that uses all $12$ candies, $1$ way for each of the $\\binom{4}{2} = 6$ pairs — and those $6$ distributions were subtracted twice, so add them back: $455 - 336 + 6 = 125$. The answer $119$ skips the add-back; $371$ subtracts $84$ only once; $455$ ignores the cap.',
    },
  ],
}

const s135 = {
  id: '13.5',
  title: 'The Identity',
  learn: {
    concepts: [
      {
        heading: 'Two answers to one question',
        body: 'The step-by-step method said $7$ pencils into $4$ cups is $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{9}{2}$, and stars and bars said it is $\\binom{10}{3}$. Both are right, so they are equal. In general, distributing $n$ items into $k$ boxes by cases on the first box gives $\\sum_{i=r}^{n+r} \\binom{i}{r} = \\binom{n+r+1}{r+1}$ with $r = k - 2$. Cleaned up, the hockey stick identity reads $\\binom{r}{r} + \\binom{r+1}{r} + \\cdots + \\binom{n}{r} = \\binom{n+1}{r+1}$.',
      },
      {
        heading: 'Why the name',
        body: 'Shade the entries $\\binom{r}{r}, \\binom{r+1}{r}, \\ldots, \\binom{n}{r}$ in Pascal’s triangle: they run down one diagonal. Their sum sits one row lower and one step over, at $\\binom{n+1}{r+1}$ — the blade of a hockey stick bending off the handle. Try $r = 1$: $1 + 2 + 3 + 4 + 5 = 15 = \\binom{6}{2}$. Try $r = 2$: $1 + 3 + 6 + 10 = 20 = \\binom{6}{3}$.',
      },
      {
        heading: 'A second proof, by the largest element',
        body: 'Count the $(r+1)$-element subsets of $\\{1, 2, \\ldots, n+1\\}$ by their largest element $m$. If the largest is $m$, the other $r$ elements come from $\\{1, \\ldots, m-1\\}$ in $\\binom{m-1}{r}$ ways. Summing over $m = r+1$ through $n+1$ gives $\\binom{r}{r} + \\cdots + \\binom{n}{r}$, and the total is $\\binom{n+1}{r+1}$. Whenever a sum sorts objects by their largest (or smallest) member, expect a hockey stick.',
      },
      {
        heading: 'Recognizing it in disguise, and the trap',
        body: 'Triangular numbers are $\\binom{i+1}{2}$, so $1 + 3 + 6 + \\cdots$ is a hockey stick with $r = 2$; products $i(i+1) = 2\\binom{i+1}{2}$ hide one too. The trap is the starting term: the identity needs the sum to begin at $\\binom{r}{r} = 1$. If it begins later, use the full stick and subtract the missing front: $\\sum_{i=a}^{n} \\binom{i}{r} = \\binom{n+1}{r+1} - \\binom{a}{r+1}$, since the terms from $r$ to $a - 1$ add to $\\binom{a}{r+1}$.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\binom{2}{2} + \\binom{3}{2} + \\binom{4}{2} + \\cdots + \\binom{9}{2}$.',
        steps: [
          'The bottom number is $2$ throughout and the sum starts at $\\binom{2}{2}$, so this is a complete hockey stick with $r = 2$ and $n = 9$.',
          'The identity gives $\\binom{9+1}{2+1} = \\binom{10}{3}$.',
          'Compute $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$, which matches adding $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36$ by hand.',
        ],
        answer: 'The sum is $120$.',
      },
      {
        problem: 'Find the sum of the first ten triangular numbers, $1 + 3 + 6 + 10 + \\cdots + 55$.',
        steps: [
          'The $i$th triangular number is $\\frac{i(i+1)}{2} = \\binom{i+1}{2}$, so the sum is $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{11}{2}$.',
          'That is a hockey stick with $r = 2$ ending at $n = 11$, so it equals $\\binom{12}{3}$.',
          'Compute $\\binom{12}{3} = \\frac{12 \\cdot 11 \\cdot 10}{6} = 220$.',
        ],
        answer: 'The sum is $220$.',
      },
      {
        problem: 'Compute $\\binom{5}{3} + \\binom{6}{3} + \\binom{7}{3} + \\cdots + \\binom{12}{3}$.',
        steps: [
          'The sum starts at $\\binom{5}{3}$, not at $\\binom{3}{3}$, so the identity does not apply directly.',
          'The full stick $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{12}{3}$ equals $\\binom{13}{4} = 715$.',
          'The missing front, $\\binom{3}{3} + \\binom{4}{3}$, is itself a stick: $\\binom{5}{4} = 5$.',
          'So the sum is $715 - 5 = 710$.',
        ],
        answer: 'The sum is $710$.',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\binom{3}{3} + \\binom{4}{3} + \\binom{5}{3} + \\binom{6}{3} + \\binom{7}{3} + \\binom{8}{3}$.',
      choices: ['$84$', '$70$', '$125$', '$126$'],
      answer: 3,
      solution: 'A complete hockey stick with $r = 3$ and $n = 8$: the sum is $\\binom{9}{4} = 126$. The answer $84 = \\binom{9}{3}$ forgets to raise the bottom number; $70 = \\binom{8}{4}$ forgets to raise the top; $125$ drops the first term $\\binom{3}{3} = 1$.',
    },
    {
      q: 'Find the sum of the first eleven triangular numbers: $1 + 3 + 6 + 10 + \\cdots + 66$.',
      choices: ['$220$', '$286$', '$364$', '$231$'],
      answer: 1,
      solution: 'The $i$th triangular number is $\\binom{i+1}{2}$, so the sum is $\\binom{2}{2} + \\cdots + \\binom{12}{2} = \\binom{13}{3} = 286$. The answer $220$ stops at ten terms; $364 = \\binom{14}{3}$ goes one term too far; $231$ is the twenty-first triangular number, a different object.',
    },
    {
      q: 'Compute $\\binom{4}{4} + \\binom{5}{4} + \\binom{6}{4} + \\binom{7}{4} + \\binom{8}{4} + \\binom{9}{4}$.',
      choices: ['$210$', '$126$', '$252$', '$251$'],
      answer: 2,
      solution: 'The bottom is $4$ throughout and the sum starts at $\\binom{4}{4}$: a complete stick, equal to $\\binom{10}{5} = 252$. The answer $210 = \\binom{10}{4}$ forgets to raise the bottom; $126 = \\binom{9}{5}$ forgets to raise the top; $251$ drops the first term.',
    },
    {
      q: 'Compute $\\binom{6}{2} + \\binom{7}{2} + \\binom{8}{2} + \\cdots + \\binom{12}{2}$.',
      choices: ['$266$', '$286$', '$271$', '$276$'],
      answer: 0,
      solution: 'The sum starts at $\\binom{6}{2}$, so take the full stick $\\binom{2}{2} + \\cdots + \\binom{12}{2} = \\binom{13}{3} = 286$ and remove the front $\\binom{2}{2} + \\cdots + \\binom{5}{2} = \\binom{6}{3} = 20$: $286 - 20 = 266$. The answer $286$ forgets to remove the front; $276$ removes only through $\\binom{4}{2}$; $271$ removes $\\binom{6}{2} = 15$ instead of $\\binom{6}{3}$, the first term that belongs rather than the front that does not.',
    },
    {
      q: 'How many $4$-element subsets of $\\{1, 2, 3, \\ldots, 20\\}$ have largest element at most $12$?',
      choices: ['$165$', '$495$', '$4845$', '$330$'],
      answer: 1,
      solution: 'Sort by the largest element $m$, which runs from $4$ to $12$: the other three elements are chosen below $m$, $\\binom{m-1}{3}$ ways. The sum $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{11}{3}$ is a hockey stick equal to $\\binom{12}{4} = 495$ — which makes sense, since such a subset is just a $4$-element subset of $\\{1, \\ldots, 12\\}$. The answer $165 = \\binom{11}{3}$ counts only subsets with largest element exactly $12$; $4845$ ignores the condition; $330 = \\binom{11}{4}$ requires the largest to be at most $11$.',
    },
    {
      q: 'Compute $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\cdots + 14 \\cdot 15$.',
      choices: ['$560$', '$1015$', '$910$', '$1120$'],
      answer: 3,
      solution: 'Each term is $i(i+1) = 2\\binom{i+1}{2}$, so the sum is $2\\left(\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{15}{2}\\right) = 2\\binom{16}{3} = 2 \\cdot 560 = 1120$. The answer $560$ forgets the factor of $2$; $1015$ is $1^2 + \\cdots + 14^2$, the wrong sum; $910 = 2\\binom{15}{3}$ stops the stick one term short.',
    },
    {
      q: 'A grocer stacks oranges in triangular layers: the top layer has $1$ orange, the next has $3$, then $6$, then $10$, and so on, each layer the next triangular number. The stack has $12$ layers. How many oranges are in it?',
      choices: ['$364$', '$286$', '$455$', '$936$'],
      answer: 0,
      solution: 'The layers are $\\binom{2}{2}, \\binom{3}{2}, \\ldots, \\binom{13}{2}$, and their sum is the hockey stick $\\binom{14}{3} = 364$. The answer $286$ stops at $11$ layers; $455$ adds a thirteenth; $936 = 12 \\times 78$ gives every layer the bottom layer’s count.',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of integers satisfy $1 \\leq a \\leq b \\leq c \\leq 10$?',
      choices: ['$120$', '$1000$', '$220$', '$165$'],
      answer: 2,
      solution: 'Sort by $c$: given $c$, the pair $(a, b)$ with $1 \\leq a \\leq b \\leq c$ can be chosen in $\\binom{c+1}{2}$ ways (a multiset of size $2$ from $c$ values). Summing $c = 1$ to $10$ gives $\\binom{2}{2} + \\cdots + \\binom{11}{2} = \\binom{12}{3} = 220$. Equivalently, such a triple is a multiset of size $3$ from $10$ values, $3$ stars and $9$ bars. The answer $120 = \\binom{10}{3}$ requires strict inequalities; $1000$ drops the ordering; $165 = \\binom{11}{3}$ misplaces the top by one.',
    },
    {
      q: 'Compute $1 \\cdot 9 + 2 \\cdot 8 + 3 \\cdot 7 + \\cdots + 9 \\cdot 1$.',
      choices: ['$285$', '$165$', '$450$', '$220$'],
      answer: 1,
      solution: 'Interpret the sum: choose a $3$-element subset of $\\{1, 2, \\ldots, 11\\}$ and sort it by its middle element $m$. There are $m - 1$ choices below $m$ and $11 - m$ above, so subsets with middle $m$ number $(m-1)(11-m)$, and $m = 2$ through $10$ gives exactly the terms $1 \\cdot 9, 2 \\cdot 8, \\ldots, 9 \\cdot 1$. So the sum is $\\binom{11}{3} = 165$. Checking by arithmetic, $10(1 + \\cdots + 9) - (1^2 + \\cdots + 9^2) = 450 - 285 = 165$; the answers $450$ and $285$ are those two pieces; $220 = \\binom{12}{3}$ overshoots the set by one.',
    },
    {
      q: 'For every $3$-element subset of $\\{1, 2, \\ldots, 8\\}$, write down its largest element. What is the sum of all these largest elements?',
      choices: ['$126$', '$378$', '$252$', '$210$'],
      answer: 1,
      solution: 'Subsets with largest element $m$ number $\\binom{m-1}{2}$, so the sum is $\\sum_{m=3}^{8} m\\binom{m-1}{2}$. Since $m\\binom{m-1}{2} = 3\\binom{m}{3}$, the sum is $3\\left(\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{8}{3}\\right) = 3\\binom{9}{4} = 378$. By hand: $3 + 12 + 30 + 60 + 105 + 168 = 378$. The answer $126 = \\binom{9}{4}$ forgets the factor of $3$; $252$ uses a factor of $2$ instead of $3$; $210 = 3\\binom{8}{4}$ misplaces the top of the stick by one.',
    },
  ],
}

const challenge = [
  {
    q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 11$ with $x + y$ even?',
    choices: ['$364$', '$112$', '$182$', '$170$'],
    answer: 2,
    solution: 'If $x + y = s$ with $s$ even, there are $s + 1$ choices for $(x, y)$ and $12 - s$ choices for $(z, w)$: the cases $s = 0, 2, 4, 6, 8, 10$ give $1 \\cdot 12 + 3 \\cdot 10 + 5 \\cdot 8 + 7 \\cdot 6 + 9 \\cdot 4 + 11 \\cdot 2 = 182$. Slicker: because the total $11$ is odd, $x + y$ and $z + w$ have opposite parity, so swapping the pairs $(x, y) \\leftrightarrow (z, w)$ matches each solution with $x + y$ even to exactly one with $x + y$ odd — the two classes are equal, and each is half of $\\binom{14}{3} = 364$, which is $182$. The answer $364$ ignores the condition; $170$ drops the case $x = y = 0$; $112$ reads “$x + y$ even” as “$x$ and $y$ both even”.',
  },
  {
    q: 'Ten identical medals are placed in four display cases labeled $1$ through $4$. Every case must hold at least one medal, and cases $1$ and $2$ must hold the same number. How many placements are there?',
    choices: ['$16$', '$84$', '$25$', '$15$'],
    answer: 0,
    solution: 'Let cases $1$ and $2$ each hold $j \\geq 1$ medals; then cases $3$ and $4$ split the other $10 - 2j$ medals with each getting at least one, which is $10 - 2j - 1$ ways. That forces $j \\leq 4$, and the cases give $7 + 5 + 3 + 1 = 16$. The answer $84 = \\binom{9}{3}$ drops the equal-cases condition; $25$ lets cases $3$ and $4$ be empty; $15$ forgets the case $j = 4$.',
  },
  {
    q: 'Compute $\\binom{6}{3} + \\binom{7}{3} + \\binom{8}{3} + \\cdots + \\binom{13}{3}$.',
    choices: ['$1001$', '$986$', '$981$', '$966$'],
    answer: 1,
    solution: 'The sum starts at $\\binom{6}{3}$, not at $\\binom{3}{3}$, so use the full stick and subtract the missing head: $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{13}{3} = \\binom{14}{4} = 1001$, and the head $\\binom{3}{3} + \\binom{4}{3} + \\binom{5}{3}$ is itself a stick, $\\binom{6}{4} = 15$. The sum is $1001 - 15 = 986$. The answer $1001$ forgets to remove the head; $981$ removes $\\binom{6}{3} = 20$, the first term that belongs, instead of the head that does not; $966$ removes $\\binom{7}{4} = 35$, cutting one term too deep.',
  },
  {
    q: 'How many $4$-letter strings using the letters $A, B, C, D, E, F$ are in alphabetical order, meaning each letter is the same as or later in the alphabet than the letter before it? Repeats are allowed.',
    choices: ['$1296$', '$15$', '$210$', '$126$'],
    answer: 3,
    solution: 'Such a string is fixed by how many times each of the $6$ letters appears, with the counts adding to $4$: $4$ stars and $5$ bars, $\\binom{9}{4} = 126$. The answer $1296 = 6^4$ ignores the ordering; $15 = \\binom{6}{4}$ forbids repeats; $210 = \\binom{10}{4}$ uses $6$ bars.',
  },
  {
    q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 9$ with $x \\geq 2$ and $y \\geq 3$?',
    choices: ['$55$', '$36$', '$15$', '$10$'],
    answer: 2,
    solution: 'Pay $x$ two and $y$ three, leaving $4$ to distribute among three variables: $\\binom{6}{2} = 15$. The answer $55$ ignores the minimums; $36 = \\binom{9}{2}$ pays only $x$; $10$ pays $z$ a minimum it does not have.',
  },
  {
    q: 'Seven identical prizes are given to four children — Ana, Ben, Cal, and Dee. Ana and Ben together must receive exactly $3$ prizes; any child may receive none. How many ways are there?',
    choices: ['$120$', '$20$', '$9$', '$40$'],
    answer: 1,
    solution: 'Split the problem: Ana and Ben share $3$ prizes in $4$ ways (Ana gets $0$ to $3$), and Cal and Dee share the other $4$ prizes in $5$ ways. Multiply: $4 \\times 5 = 20$. The answer $9$ adds instead of multiplying; $120$ ignores the condition; $40$ doubles by treating the two halves as swappable.',
  },
  {
    q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d \\leq 6$?',
    choices: ['$210$', '$84$', '$126$', '$252$'],
    answer: 0,
    solution: 'Add a fifth variable $e \\geq 0$ for the slack, so $a + b + c + d + e = 6$: $6$ stars and $4$ bars, $\\binom{10}{4} = 210$. The answer $84 = \\binom{9}{3}$ counts only sum exactly $6$; $126 = \\binom{9}{4}$ forgets one star; $252 = \\binom{10}{5}$ picks the wrong bottom number.',
  },
  {
    q: 'Ten identical coins are placed into three jars labeled $A$, $B$, $C$; a jar may be empty. In how many placements does jar $A$ hold more coins than jars $B$ and $C$ combined?',
    choices: ['$21$', '$66$', '$20$', '$15$'],
    answer: 3,
    solution: 'Let $A$ hold $a$ coins; then $B$ and $C$ together hold $10 - a$, and the condition $a > 10 - a$ means $a \\geq 6$. For $a = 6, 7, 8, 9, 10$ the other $4, 3, 2, 1, 0$ coins split between $B$ and $C$ in $5, 4, 3, 2, 1$ ways: total $15$. The answer $21$ includes $a = 5$, where $A$ only ties; $66$ ignores the condition; $20$ counts $A$ holding more than each of $B$ and $C$ separately, a weaker condition.',
  },
  {
    q: 'Twelve identical marbles are placed into three cups labeled $A$, $B$, $C$, and every cup must hold at least $2$ and at most $6$ marbles. How many placements are there?',
    choices: ['$28$', '$19$', '$9$', '$21$'],
    answer: 1,
    solution: 'Pay each cup $2$ marbles, leaving $6$ to distribute with each cup taking at most $4$ more. Without the cap that is $\\binom{8}{2} = 28$. A cup taking at least $5$ more: give it $5$, distribute the last $1$ in $3$ ways, and there are $3$ cups, so $9$ violators; two cups cannot both take $5$. Answer: $28 - 9 = 19$. The answer $28$ ignores the maximum; $9$ is the complement; $21$ subtracts $7$ after miscounting the overflow.',
  },
  {
    q: 'How many four-digit positive integers have non-increasing digits, meaning each digit is at most the digit to its left? (For example, $9731$ and $5500$ qualify.)',
    choices: ['$714$', '$715$', '$1287$', '$210$'],
    answer: 0,
    solution: 'A non-increasing string is fixed by how many of each digit $0$ through $9$ it uses, with the counts adding to $4$: $\\binom{13}{4} = 715$ strings. Every such string has its largest digit first, so the only one that starts with $0$ is $0000$, which is not a four-digit integer. Answer: $715 - 1 = 714$. The answer $715$ keeps $0000$; $1287 = \\binom{13}{5}$ uses the wrong bottom; $210 = \\binom{10}{4}$ forbids repeated digits.',
  },
  {
    q: 'For every $4$-element subset of $\\{1, 2, \\ldots, 10\\}$, write down its smallest element. What is the sum of all these smallest elements?',
    choices: ['$210$', '$252$', '$330$', '$462$'],
    answer: 3,
    solution: 'Subsets with smallest element $m$ number $\\binom{10-m}{3}$, since the other three come from the $10 - m$ larger values. The sum is $1 \\cdot 84 + 2 \\cdot 56 + 3 \\cdot 35 + 4 \\cdot 20 + 5 \\cdot 10 + 6 \\cdot 4 + 7 \\cdot 1 = 462$. The slick view: a $4$-element subset with smallest element $m$ can be extended to a $5$-element subset of $\\{0, 1, \\ldots, 10\\}$ by adding one new smallest element, chosen from $0$ through $m - 1$ in exactly $m$ ways, and every $5$-element subset arises exactly once — so the sum is $\\binom{11}{5} = 462$. The answer $210 = \\binom{10}{4}$ counts the subsets rather than summing; $252 = \\binom{10}{5}$ and $330 = \\binom{11}{4}$ misplace the stick by one.',
  },
  {
    q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 20$ with each variable at most $8$?',
    choices: ['$375$', '$315$', '$1771$', '$1456$'],
    answer: 0,
    solution: 'All solutions: $\\binom{23}{3} = 1771$. One chosen variable at least $9$: pay it $9$, distribute $11$, $\\binom{14}{3} = 364$, times $4$ variables is $1456$. Two chosen variables both at least $9$: pay $18$, distribute $2$, $\\binom{5}{3} = 10$, times $\\binom{4}{2} = 6$ pairs is $60$, and these were subtracted twice. Three overflows would need $27 > 20$. Answer: $1771 - 1456 + 60 = 375$. The answer $315$ forgets the add-back; $1771$ ignores the caps; $1456$ is the subtracted piece alone.',
  },
]

const worksheet = [
  {
    q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 8$?',
    answer: '$165$',
    solution: 'Eight stars and $3$ bars: choose the bar positions among $11$ symbols, $\\binom{11}{3} = 165$.',
  },
  {
    q: 'Twenty-one identical trading cards are divided among four friends, and each friend must receive at least $2$ cards. How many ways are there to divide the cards?',
    answer: '$560$',
    solution: 'Give each friend $2$ cards first, using $8$; the remaining $13$ cards go to $4$ friends with no restriction: $13$ stars and $3$ bars, $\\binom{16}{3} = 560$. As a check, casework on the first friend’s extras gives $\\binom{15}{2} + \\binom{14}{2} + \\cdots + \\binom{2}{2}$, a complete hockey stick equal to the same $\\binom{16}{3} = 560$.',
  },
  {
    q: 'Compute $\\binom{3}{3} + \\binom{4}{3} + \\binom{5}{3} + \\cdots + \\binom{11}{3}$.',
    answer: '$495$',
    solution: 'A complete hockey stick with $r = 3$ and top term $n = 11$: the sum is $\\binom{12}{4} = 495$.',
  },
  {
    q: 'How many three-digit strings, using the digits $0$ through $9$ and allowing a leading $0$, are non-decreasing — each digit at least as large as the digit before it?',
    answer: '$220$',
    solution: 'A non-decreasing string is determined by how many of each of the $10$ digits it contains, with the counts adding to $3$. That is $3$ stars and $9$ bars: $\\binom{12}{3} = 220$.',
  },
  {
    q: 'Eleven identical stickers are given to four children — Ana, Bo, Cy, and Di. Ana must receive an odd number of stickers; the others may receive any number, including none. How many ways are there?',
    answer: '$161$',
    solution: 'Ana gets $1, 3, 5, 7, 9$, or $11$ stickers, leaving $10, 8, 6, 4, 2, 0$ for the other three children, who share them in $\\binom{12}{2}, \\binom{10}{2}, \\binom{8}{2}, \\binom{6}{2}, \\binom{4}{2}, \\binom{2}{2}$ ways. Add: $66 + 45 + 28 + 15 + 6 + 1 = 161$.',
  },
  {
    q: 'Find the sum of the first twenty triangular numbers, $1 + 3 + 6 + 10 + \\cdots + 210$.',
    answer: '$1540$',
    solution: 'The $i$th triangular number is $\\binom{i+1}{2}$, so the sum is $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{21}{2}$, a hockey stick equal to $\\binom{22}{3} = \\frac{22 \\cdot 21 \\cdot 20}{6} = 1540$.',
  },
  {
    q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 15$ with each of $x$, $y$, $z$ at most $6$?',
    answer: '$10$',
    solution: 'All solutions: $\\binom{17}{2} = 136$. One chosen variable at least $7$: pay $7$, distribute $8$, $\\binom{10}{2} = 45$, times $3$ is $135$. Two chosen variables both at least $7$: pay $14$, distribute $1$ in $3$ ways, times $3$ pairs is $9$, subtracted twice so add back. Answer $136 - 135 + 9 = 10$. Check: the sorted patterns are $6,6,3$ (three orders), $6,5,4$ (six), and $5,5,5$ (one).',
  },
  {
    q: 'For every $2$-element subset of $\\{1, 2, \\ldots, 12\\}$, write down its larger element. What is the sum of all these larger elements?',
    answer: '$572$',
    solution: 'Subsets with larger element $m$ number $m - 1$, so the sum is $\\sum_{m=2}^{12} m(m-1) = 2\\sum_{m=2}^{12} \\binom{m}{2} = 2\\binom{13}{3} = 2 \\cdot 286 = 572$.',
  },
  {
    q: 'A fruit stand sells apples, bananas, cherries, and dates. Lu buys $15$ pieces of fruit, any number of each kind, but at most $4$ apples. How many different purchases are possible? (Purchases with the same counts of each kind are the same.)',
    answer: '$530$',
    solution: 'All purchases: $\\binom{18}{3} = 816$. Those with at least $5$ apples: pay $5$ apples, choose $10$ more pieces freely, $\\binom{13}{3} = 286$. Answer $816 - 286 = 530$. By cases on the apples, $0$ through $4$: $\\binom{17}{2} + \\binom{16}{2} + \\binom{15}{2} + \\binom{14}{2} + \\binom{13}{2} = 136 + 120 + 105 + 91 + 78 = 530$, a hockey stick with its front removed.',
  },
  {
    q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 9$ with $x \\leq y$?',
    answer: '$125$',
    solution: 'All solutions: $\\binom{12}{3} = 220$. Those with $x = y$: then $2x + z + w = 9$, and $x = 0$ to $4$ leaves $9, 7, 5, 3, 1$ for $z + w$, giving $10 + 8 + 6 + 4 + 2 = 30$ solutions. The rest split evenly between $x < y$ and $x > y$ by swapping, so $x < y$ has $\\frac{220 - 30}{2} = 95$. Answer $95 + 30 = 125$.',
  },
]

export default {
  id: 'intro-counting-ch13',
  book: 'intro-counting',
  number: 13,
  title: 'The Hockey Stick Identity',
  intro:
    'One question — how many ways can identical things be dropped into labeled boxes — gets solved three times in this chapter: by listing, by patient casework, and by a trick with stars and bars. Comparing the answers hands you the hockey stick identity, a formula that adds up a whole diagonal of Pascal’s triangle in one stroke.',
  sections: [s132, s133, s134, s135],
  challenge,
  worksheet,
}
