// Counting & Probability — Chapter 12: Pascal’s Triangle
// All problems, explanations, and examples are original MathQuest content.

const s122 = {
  id: '12.2',
  title: 'Constructing Pascal’s Triangle',
  learn: {
    concepts: [
      {
        heading: 'One rule builds the whole thing',
        body: 'Pascal’s triangle starts with a single $1$ at the top. Every entry below it is the sum of the two entries sitting diagonally above it — the one up-and-left plus the one up-and-right. Where an entry has only one neighbor above (along the two slanted edges), treat the missing neighbor as $0$, so every edge entry is $1$. From $1, 3, 3, 1$ the next line is $1, \\ 1+3, \\ 3+3, \\ 3+1, \\ 1 = 1, 4, 6, 4, 1$.',
      },
      {
        heading: 'Count rows and positions from zero',
        body: 'The single $1$ at the top is row $0$, the line $1, 1$ is row $1$, and so on, so row $n$ has $n + 1$ entries. Inside a row, positions also start at $0$: in row $4$, the entry $6$ sits in position $2$. The trap is the phrase “the fifth row” — it usually means row $4$. Always name a row by its number, and remember that the entry in position $1$ of row $n$ is $n$ itself, which tells you which row you are on.',
      },
      {
        heading: 'Every row is a palindrome',
        body: 'Each row reads the same forwards and backwards, so the entry in position $k$ of row $n$ equals the entry in position $n - k$. That halves the work of building a row: compute up to the middle, then mirror. Odd-numbered rows have two equal middle entries ($10, 10$ in row $5$); even-numbered rows have a single largest entry in the center ($6$ in row $4$).',
      },
      {
        heading: 'Row sums double',
        body: 'Add the entries of a row: $1$, $2$, $4$, $8$, $16, \\ldots$ — each row sums to twice the row before. That is because every entry of a row gets added into exactly two entries of the next row (one down-left, one down-right), so the next row’s total is the old total counted twice. Row $n$ sums to $2^n$. A quick check while building: if your row does not sum to a power of $2$, an addition slipped.',
      },
    ],
    examples: [
      {
        problem: 'Row $5$ of Pascal’s triangle is $1, 5, 10, 10, 5, 1$. Write out row $6$.',
        steps: [
          'Row $6$ has $7$ entries, and the two ends are $1$.',
          'Each inside entry is the sum of two neighbors from row $5$: $1 + 5 = 6$, $5 + 10 = 15$, $10 + 10 = 20$.',
          'The row is symmetric, so after the middle $20$ it mirrors back: $15, 6, 1$.',
          'Check the sum: $1 + 6 + 15 + 20 + 15 + 6 + 1 = 64 = 2^6$.',
        ],
        answer: 'Row $6$ is $1, 6, 15, 20, 15, 6, 1$.',
      },
      {
        problem: 'What number sits in position $3$ of row $8$? (Rows and positions both start from $0$.)',
        steps: [
          'Build down from row $6 = 1, 6, 15, 20, 15, 6, 1$.',
          'Row $7$ is $1, 7, 21, 35, 35, 21, 7, 1$, since $1 + 6 = 7$, $6 + 15 = 21$, $15 + 20 = 35$, then mirror.',
          'Position $3$ of row $8$ is the sum of positions $2$ and $3$ of row $7$: $21 + 35 = 56$.',
        ],
        answer: 'The entry is $56$.',
      },
      {
        problem: 'The entries of one row of Pascal’s triangle add up to $256$. Which row is it, and how many entries does it have?',
        steps: [
          'Row $n$ sums to $2^n$, so we need $2^n = 256$.',
          'Since $2^8 = 256$, this is row $8$.',
          'Row $n$ has $n + 1$ entries, so row $8$ has $9$ entries — not $8$.',
        ],
        answer: 'It is row $8$, which has $9$ entries.',
      },
    ],
  },
  problems: [
    {
      q: 'Which row of Pascal’s triangle is $1, 5, 10, 10, 5, 1$? (The single $1$ at the top is row $0$.)',
      choices: ['Row $4$', 'Row $5$', 'Row $6$', 'Row $10$'],
      answer: 1,
      solution: 'The entry in position $1$ of row $n$ is always $n$, and here that entry is $5$. Check: the row has $6 = 5 + 1$ entries and sums to $32 = 2^5$. Counting from $1$ instead of $0$ gives the wrong “row $6$”; $10$ is the row’s middle entry, not its number.',
    },
    {
      q: 'Row $6$ of Pascal’s triangle is $1, 6, 15, 20, 15, 6, 1$. What is the entry in position $2$ of row $7$? (Positions start from $0$.)',
      choices: ['$15$', '$21$', '$35$', '$7$'],
      answer: 1,
      solution: 'Position $2$ of row $7$ sits below positions $1$ and $2$ of row $6$, so it is $6 + 15 = 21$. Adding $15 + 20$ gives $35$, which is position $3$; $7$ is position $1$.',
    },
    {
      q: 'How many entries does row $9$ of Pascal’s triangle have? (The single $1$ at the top is row $0$.)',
      choices: ['$10$', '$9$', '$11$', '$512$'],
      answer: 0,
      solution: 'Row $0$ has one entry, row $1$ has two, and each row has one more entry than the row above, so row $n$ has $n + 1$ entries. Row $9$ has $10$. The number $512 = 2^9$ is the row’s sum, not its length.',
    },
    {
      q: 'What is the sum of all the entries in row $10$ of Pascal’s triangle? (The single $1$ at the top is row $0$.)',
      choices: ['$100$', '$512$', '$2048$', '$1024$'],
      answer: 3,
      solution: 'Row sums double from $1$ in row $0$, so row $n$ sums to $2^n$. Row $10$ sums to $2^{10} = 1024$. Choosing $512$ or $2048$ comes from being off by one row.',
    },
    {
      q: 'What is the middle entry of row $8$ of Pascal’s triangle? (The single $1$ at the top is row $0$.)',
      choices: ['$56$', '$70$', '$84$', '$126$'],
      answer: 1,
      solution: 'Row $7$ is $1, 7, 21, 35, 35, 21, 7, 1$, so the middle of row $8$ (position $4$) is $35 + 35 = 70$. The entry $56 = 21 + 35$ is its neighbor; $84$ and $126$ live in row $9$.',
    },
    {
      q: 'What is the sum of the entries of row $9$ of Pascal’s triangle, leaving out the $1$ at each end of the row? (The single $1$ at the top is row $0$.)',
      choices: ['$254$', '$511$', '$510$', '$1022$'],
      answer: 2,
      solution: 'The whole of row $9$ sums to $2^9 = 512$. Removing the two end $1$s leaves $512 - 2 = 510$. Subtracting only one $1$ gives $511$; using row $8$ gives $254$.',
    },
    {
      q: 'In one row of Pascal’s triangle, the entry in position $1$ is $12$. What is the entry in position $2$ of that same row? (Positions start from $0$.)',
      choices: ['$66$', '$55$', '$78$', '$24$'],
      answer: 0,
      solution: 'Position $1$ of row $n$ is $n$, so this is row $12$. Position $2$ entries run $1, 3, 6, 10, 15, \\ldots$ — each is the previous one plus the row number — and for row $12$ that is $1 + 2 + \\cdots + 11 = 66$. The value $55$ belongs to row $11$ and $78$ to row $13$; $24$ is just doubling $12$.',
    },
    {
      q: 'Two entries sitting side by side in the same row of Pascal’s triangle are $84$ and $126$. Exactly one entry in the row above is diagonally above both of them. What is that entry?',
      choices: ['$42$', '$70$', '$210$', '$56$'],
      answer: 3,
      solution: 'Row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, so $84$ and $126$ are positions $3$ and $4$ of row $9$. The entry above both of them is position $3$ of row $8 = 1, 8, 28, 56, 70, \\ldots$, which is $56$. Check: $84 = 28 + 56$ and $126 = 56 + 70$. The sum $210$ is the entry below them, not above; $70$ is the other parent of $126$ alone.',
    },
    {
      q: 'What is the sum of every entry in rows $0$ through $7$ of Pascal’s triangle, all eight rows combined?',
      choices: ['$128$', '$254$', '$255$', '$256$'],
      answer: 2,
      solution: 'Row $n$ sums to $2^n$, so the total is $1 + 2 + 4 + \\cdots + 128$. Each new power of $2$ is one more than the sum of all the earlier ones, so the total is $2^8 - 1 = 255$. Forgetting row $0$ gives $254$; $256$ is the sum of row $8$ alone.',
    },
    {
      q: 'How many entries of row $12$ of Pascal’s triangle are odd? (The single $1$ at the top is row $0$.)',
      choices: ['$4$', '$2$', '$6$', '$13$'],
      answer: 0,
      solution: 'Building the rows while tracking only odd or even (odd $+$ odd and even $+$ even are even; odd $+$ even is odd) gives row $8$ as odd only at its two ends, then the odd entries spread one step inward per row. Row $12$ is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$: the odd entries are $1, 495, 495, 1$, so there are $4$. Counting only the end $1$s gives $2$.',
    },
  ],
}

const s123 = {
  id: '12.3',
  title: 'Those Numbers Look Familiar!',
  learn: {
    concepts: [
      {
        heading: 'The entries are combinations',
        body: 'Row $4$ of the triangle is $1, 4, 6, 4, 1$, and $\\binom{4}{0}, \\binom{4}{1}, \\binom{4}{2}, \\binom{4}{3}, \\binom{4}{4}$ is also $1, 4, 6, 4, 1$. This is no accident: the entry in row $n$, position $k$ is exactly $\\binom{n}{k}$. So the whole triangle is a table of combinations, with the top number of the symbol naming the row and the bottom number naming the position.',
      },
      {
        heading: 'Why: count the paths down',
        body: 'Start at the top and walk down the triangle, each step going down-left or down-right. To land in row $n$, position $k$, you take $n$ steps, and your position is the number of steps that went right — so you must choose which $k$ of the $n$ steps go right: $\\binom{n}{k}$ ways. The number of paths to any spot is the number of paths to the spot up-left plus the number to the spot up-right, which is exactly the rule that builds the triangle. Same rule, same starting $1$, so the paths and the entries agree everywhere.',
      },
      {
        heading: 'Read it both ways',
        body: 'Need $\\binom{7}{3}$? Row $7$ is $1, 7, 21, 35, 35, 21, 7, 1$, and position $3$ holds $35$. Going the other way, if you spot $462$ in position $5$ of row $11$, you have learned that $\\binom{11}{5} = 462$ for free. The mirror symmetry of each row is the identity $\\binom{n}{k} = \\binom{n}{n-k}$ made visible.',
      },
      {
        heading: 'The trap: off by one',
        body: 'Both the row and the position start at $0$, so $\\binom{6}{2}$ is the third number of the seventh line, not the second number of the sixth. A quick guard: the entry you read for $\\binom{n}{k}$ should sit in a line whose position-$1$ entry is $n$. If the line begins $1, 7, \\ldots$ and you wanted $\\binom{6}{k}$, back up a row.',
      },
    ],
    examples: [
      {
        problem: 'Use row $7$ of Pascal’s triangle, $1, 7, 21, 35, 35, 21, 7, 1$, to find $\\binom{7}{4}$.',
        steps: [
          'The top number, $7$, names the row; the bottom number, $4$, names the position.',
          'Counting from position $0$: $1, 7, 21, 35$ are positions $0$ through $3$, so position $4$ is the second $35$.',
          'By symmetry this matches $\\binom{7}{3} = 35$ in position $3$, as it should.',
        ],
        answer: '$\\binom{7}{4} = 35$.',
      },
      {
        problem: 'A librarian picks $3$ of $9$ new titles to feature. Where in Pascal’s triangle is the number of possible picks, and what is it?',
        steps: [
          'The count is $\\binom{9}{3}$: row $9$, position $3$.',
          'Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, so position $3$ of row $9$ is $28 + 56 = 84$.',
          'Check by formula: $\\frac{9 \\cdot 8 \\cdot 7}{3 \\cdot 2 \\cdot 1} = 84$.',
        ],
        answer: 'It is the entry in row $9$, position $3$, which is $84$.',
      },
      {
        problem: 'The number $210$ appears in row $10$ of Pascal’s triangle. In which positions of that row does it appear?',
        steps: [
          'Row $10$ is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$.',
          'The number $210$ sits in position $4$ and, by symmetry, position $6$.',
          'So $\\binom{10}{4} = \\binom{10}{6} = 210$: choosing $4$ of $10$ is the same as choosing the $6$ to leave out.',
        ],
        answer: 'Positions $4$ and $6$.',
      },
    ],
  },
  problems: [
    {
      q: 'Which combination is the entry in row $8$, position $3$ of Pascal’s triangle? (Rows and positions start at $0$.)',
      choices: ['$\\binom{8}{3}$', '$\\binom{3}{8}$', '$\\binom{7}{3}$', '$\\binom{8}{4}$'],
      answer: 0,
      solution: 'The row number goes on top and the position on the bottom: $\\binom{8}{3} = 56$. Writing $\\binom{3}{8}$ swaps them, and $\\binom{7}{3}$ is one row too high — that slip comes from counting rows from $1$.',
    },
    {
      q: 'Row $6$ of Pascal’s triangle is $1, 6, 15, 20, 15, 6, 1$. Without computing any factorials, use the row to find $\\binom{6}{3} - \\binom{6}{5}$. (Positions start at $0$.)',
      choices: ['$9$', '$14$', '$5$', '$0$'],
      answer: 1,
      solution: 'Position $3$ holds $20$ and position $5$ holds $6$, so $\\binom{6}{3} - \\binom{6}{5} = 20 - 6 = 14$. Counting positions from $1$ reads both entries as $15$ and gives $0$; taking $\\binom{6}{5}$ to be the $15$ next to the middle gives $5$, and reading $\\binom{6}{3}$ as $15$ gives $9$.',
    },
    {
      q: 'The entry in row $10$, position $6$ of Pascal’s triangle is $210$. Which of the following also equals $210$? (Rows and positions start at $0$.)',
      choices: ['$\\binom{10}{5}$', '$\\binom{11}{6}$', '$\\binom{9}{6}$', '$\\binom{10}{4}$'],
      answer: 3,
      solution: 'Every row is a palindrome, so position $6$ of row $10$ matches position $10 - 6 = 4$: $\\binom{10}{4} = 210$. The others are different entries: $\\binom{10}{5} = 252$, $\\binom{11}{6} = 462$, and $\\binom{9}{6} = 84$.',
    },
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $5$ steps, each going down-left or down-right. How many different walks end at position $2$ of row $5$? (Positions start at $0$.)',
      choices: ['$5$', '$20$', '$10$', '$32$'],
      answer: 2,
      solution: 'Ending in position $2$ means exactly $2$ of the $5$ steps went right, and there are $\\binom{5}{2} = 10$ ways to choose which two — the entry in row $5$, position $2$. The number $32 = 2^5$ counts all $5$-step walks to anywhere in row $5$.',
    },
    {
      q: 'Row $8$ of Pascal’s triangle is $1, 8, 28, 56, 70, 56, 28, 8, 1$. A florist chooses $k$ different kinds of flowers out of $8$ kinds for a bouquet and finds there are exactly $56$ possible choices. What can $k$ be? (Positions start at $0$.)',
      choices: ['$3$ only', '$3$ or $5$', '$4$', '$2$ or $6$'],
      answer: 1,
      solution: 'The number of choices is $\\binom{8}{k}$, the entry in position $k$ of row $8$. The value $56$ appears in positions $3$ and $5$, so $k = 3$ or $k = 5$: choosing $3$ kinds to use is the same as choosing $5$ kinds to leave out. Stopping at the first $56$ gives “$3$ only”; $4$ is the position of the center entry $70$; counting positions from $1$ gives $2$ or $6$.',
    },
    {
      q: 'The number of ways to choose $5$ of $8$ different cards is an entry of Pascal’s triangle. Which position of row $8$ holds it, and what is its value? (Rows and positions start at $0$.)',
      choices: ['Position $5$, value $56$', 'Position $5$, value $70$', 'Position $4$, value $70$', 'Position $6$, value $28$'],
      answer: 0,
      solution: 'The count is $\\binom{8}{5}$, which sits in position $5$ of row $8 = 1, 8, 28, 56, 70, 56, 28, 8, 1$, so its value is $56$. The center entry $70$ is $\\binom{8}{4}$; it is tempting because $5$ is close to the middle, but position $5$ is one step past it.',
    },
    {
      q: 'Row $11$ of Pascal’s triangle is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$. What is $\\binom{11}{4} + \\binom{11}{7}$?',
      choices: ['$495$', '$792$', '$330$', '$660$'],
      answer: 3,
      solution: 'Position $4$ holds $330$, and position $7$ mirrors position $11 - 7 = 4$, so it also holds $330$. The sum is $660$. Mirroring position $7$ to position $3$ instead of $4$ (using $10 - 7$ rather than $11 - 7$) reads it as $165$ and gives $495$; $792$ is $\\binom{12}{5}$; $330$ is only one of the two terms.',
    },
    {
      q: 'An entry of Pascal’s triangle equals $1287$ and sits in position $5$ of its row. Which row is it in? (Rows and positions start at $0$.)',
      choices: ['Row $12$', 'Row $13$', 'Row $14$', 'Row $15$'],
      answer: 1,
      solution: 'We need $\\binom{n}{5} = 1287$. Try rows: $\\binom{12}{5} = 792$, $\\binom{13}{5} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{120} = 1287$. So it is row $13$. Row $14$ gives $2002$ in position $5$ and row $15$ gives $3003$.',
    },
    {
      q: 'A walk starts at the $1$ at the top of Pascal’s triangle and takes $6$ steps, each going down-left or down-right, ending somewhere in row $6 = 1, 6, 15, 20, 15, 6, 1$. How many of the possible walks end at an entry whose value is at least $15$?',
      choices: ['$3$', '$64$', '$35$', '$50$'],
      answer: 3,
      solution: 'The entry at each position counts the walks that end there, so the walks ending at an entry of at least $15$ number $15 + 20 + 15 = 50$ — the entries in positions $2$, $3$, and $4$ added together. Answering $3$ counts the qualifying entries instead of the walks to them; $35 = 15 + 20$ forgets the mirror $15$; $64 = 2^6$ counts every walk to row $6$.',
    },
    {
      q: 'In one row of Pascal’s triangle, the entries in positions $4$ and $5$ are both $126$. What is the entry in position $4$ of the row two rows farther down? (Rows and positions start at $0$.)',
      choices: ['$330$', '$252$', '$462$', '$210$'],
      answer: 0,
      solution: 'Two equal neighbors are the middle pair of an odd row, so positions $4$ and $5$ are the center of row $9$. Two rows down is row $11$, and position $4$ there is $\\binom{11}{4} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8}{24} = 330$. Going down only one row gives $\\binom{10}{4} = 210$; $252$ and $462$ are the middle entries of rows $10$ and $11$, not position $4$.',
    },
  ],
}

const s124 = {
  id: '12.4',
  title: 'An Interesting Combinatorial Identity',
  learn: {
    concepts: [
      {
        heading: 'The building rule, written in symbols',
        body: 'The entry in row $n$, position $k$ is the sum of the two entries above it, which live in row $n - 1$ at positions $k - 1$ and $k$. Since every entry is a combination, that says $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$. For instance $\\binom{6}{2} = \\binom{5}{1} + \\binom{5}{2} = 5 + 10 = 15$. This is Pascal’s identity, and it holds for every row and every position.',
      },
      {
        heading: 'Why it is true: is Zoe on the committee?',
        body: 'Count the $k$-person committees from $n$ people by asking about one particular person, Zoe. Committees that include Zoe still need $k - 1$ more people from the other $n - 1$: $\\binom{n-1}{k-1}$ of them. Committees that leave Zoe out choose all $k$ from the other $n - 1$: $\\binom{n-1}{k}$. Every committee is in exactly one of the two piles, so adding the piles gives all $\\binom{n}{k}$ committees.',
      },
      {
        heading: 'Use it forwards and backwards',
        body: 'Forwards, the identity builds a new value from two known ones: from $\\binom{9}{3} = 84$ and $\\binom{9}{4} = 126$ you get $\\binom{10}{4} = 210$ with no multiplication. Backwards, rearrange it as a subtraction: $\\binom{n-1}{k} = \\binom{n}{k} - \\binom{n-1}{k-1}$, so a missing entry can be recovered from the one below it and its other parent. Applied twice or three times, it turns one combination into a sum of several from rows higher up.',
      },
      {
        heading: 'The trap: both pieces come from one row up',
        body: 'The two terms on the right have the same top number, $n - 1$, and bottom numbers $k - 1$ and $k$. A common slip is $\\binom{n}{k-1} + \\binom{n}{k}$, which stays in row $n$; that sum is a real entry, but it is $\\binom{n+1}{k}$, one row farther down. When you split a committee count into with-Zoe and without-Zoe, both counts draw from the same $n - 1$ remaining people.',
      },
    ],
    examples: [
      {
        problem: 'Given that $\\binom{9}{3} = 84$ and $\\binom{9}{4} = 126$, find $\\binom{10}{4}$ without a formula.',
        steps: [
          'Pascal’s identity with $n = 10$ and $k = 4$ says $\\binom{10}{4} = \\binom{9}{3} + \\binom{9}{4}$.',
          'Substitute the given values: $84 + 126 = 210$.',
          'Check: $\\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{24} = 210$.',
        ],
        answer: '$\\binom{10}{4} = 210$.',
      },
      {
        problem: 'You know $\\binom{12}{5} = 792$ and $\\binom{13}{5} = 1287$. Find $\\binom{12}{4}$.',
        steps: [
          'The identity says $\\binom{13}{5} = \\binom{12}{4} + \\binom{12}{5}$.',
          'Rearrange: $\\binom{12}{4} = \\binom{13}{5} - \\binom{12}{5} = 1287 - 792$.',
          'So $\\binom{12}{4} = 495$; a formula check gives $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$ too.',
        ],
        answer: '$\\binom{12}{4} = 495$.',
      },
      {
        problem: 'A $5$-person committee is chosen from $11$ students, one of whom is Fatima. Count the committees with Fatima, count the committees without her, and use the two counts to find the total.',
        steps: [
          'With Fatima: she takes one seat, and the other $4$ come from the remaining $10$ students, $\\binom{10}{4} = 210$ ways.',
          'Without Fatima: all $5$ come from the other $10$, $\\binom{10}{5} = 252$ ways.',
          'Every committee is in exactly one pile, so the total is $210 + 252 = 462$.',
          'That is $\\binom{11}{5}$, as the identity promises.',
        ],
        answer: 'With Fatima: $210$; without: $252$; total $\\binom{11}{5} = 462$.',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\binom{7}{3} + \\binom{7}{4}$?',
      choices: ['$56$', '$35$', '$70$', '$140$'],
      answer: 2,
      solution: 'By Pascal’s identity, $\\binom{7}{3} + \\binom{7}{4} = \\binom{8}{4} = 70$. Directly, $35 + 35 = 70$. Answering $35$ forgets to add; $56$ is the neighbor $\\binom{8}{3}$.',
    },
    {
      q: 'Which sum equals $\\binom{10}{3}$?',
      choices: ['$\\binom{9}{2} + \\binom{9}{3}$', '$\\binom{9}{3} + \\binom{9}{4}$', '$\\binom{10}{2} + \\binom{10}{3}$', '$\\binom{9}{3} + \\binom{10}{2}$'],
      answer: 0,
      solution: 'The two parents of $\\binom{10}{3}$ both sit in row $9$, at positions $2$ and $3$: $\\binom{9}{2} + \\binom{9}{3} = 36 + 84 = 120 = \\binom{10}{3}$. The sum $\\binom{9}{3} + \\binom{9}{4}$ is $\\binom{10}{4}$, and $\\binom{10}{2} + \\binom{10}{3}$ is $\\binom{11}{3}$.',
    },
    {
      q: 'Which single combination equals $\\binom{20}{9} + \\binom{20}{10}$?',
      choices: ['$\\binom{21}{9}$', '$\\binom{21}{10}$', '$\\binom{20}{19}$', '$\\binom{40}{19}$'],
      answer: 1,
      solution: 'Two neighbors in row $20$, at positions $9$ and $10$, add to the entry directly below them: row $21$, position $10$. So the sum is $\\binom{21}{10}$. Writing $\\binom{21}{9}$ keeps the smaller bottom number instead of the larger one; $\\binom{20}{19}$ adds the bottoms and stays in row $20$; $\\binom{40}{19}$ adds everything in sight.',
    },
    {
      q: 'An entry of Pascal’s triangle is $792$, and the two entries directly below it, in the next row, are $1287$ (down-left) and $1716$ (down-right). What are the two entries on either side of $792$ in its own row?',
      choices: ['$2079$ and $2508$', '$792$ and $924$', '$1287$ and $1716$', '$495$ and $924$'],
      answer: 3,
      solution: 'Each entry below $792$ is $792$ plus one of its neighbors. The down-left child is $792$ plus the left neighbor, so that neighbor is $1287 - 792 = 495$; the down-right child is $792$ plus the right neighbor, so that one is $1716 - 792 = 924$. (This is row $12$: $\\binom{12}{4}, \\binom{12}{5}, \\binom{12}{6} = 495, 792, 924$.) Adding instead of subtracting gives $2079$ and $2508$, which are not in the row at all; “$792$ and $924$” repeats the given entry in place of the left neighbor.',
    },
    {
      q: 'A $4$-person committee is chosen from $10$ people, one of whom is Omar. There are $84$ possible committees that include Omar. How many possible committees do not include Omar?',
      choices: ['$126$', '$84$', '$210$', '$294$'],
      answer: 0,
      solution: 'Committees without Omar choose all $4$ from the other $9$ people: $\\binom{9}{4} = 126$. Check with the identity: $84 + 126 = 210 = \\binom{10}{4}$, the total. Answering $210$ gives all committees, and $294$ adds the total to the with-Omar count.',
    },
    {
      q: 'For some positive integer $n$, $\\binom{n-1}{3} = 20$ and $\\binom{n-1}{4} = 15$. What is $n$?',
      choices: ['$6$', '$7$', '$35$', '$8$'],
      answer: 1,
      solution: 'The row with $20$ in position $3$ and $15$ in position $4$ is row $6 = 1, 6, 15, 20, 15, 6, 1$, so $n - 1 = 6$ and $n = 7$. Then $\\binom{7}{4} = 20 + 15 = 35$ — that is the sum, not $n$. Answering $6$ forgets the shift from $n - 1$ to $n$.',
    },
    {
      q: 'Which single combination equals $\\binom{9}{4} - \\binom{8}{4} - \\binom{7}{3}$?',
      choices: ['$\\binom{7}{3}$', '$\\binom{8}{2}$', '$\\binom{7}{2}$', '$\\binom{6}{2}$'],
      answer: 2,
      solution: 'Peel off one parent at a time. The identity gives $\\binom{9}{4} - \\binom{8}{4} = \\binom{8}{3}$, and then $\\binom{8}{3} - \\binom{7}{3} = \\binom{7}{2}$. Numerically, $126 - 70 - 35 = 21 = \\binom{7}{2}$. Stopping after one step leaves $\\binom{8}{3} = 56$; $\\binom{6}{2} = 15$ goes one row too far.',
    },
    {
      q: 'From a class of $n$ students, $3$-person committees are formed. Exactly $66$ of the possible committees include Priya. How many of the possible committees include neither Priya nor Quinn?',
      choices: ['$220$', '$286$', '$55$', '$165$'],
      answer: 3,
      solution: 'Committees with Priya pick $2$ more from the other $n - 1$ students, so $\\binom{n-1}{2} = 66$, which gives $n - 1 = 12$ and $n = 13$. Committees avoiding both Priya and Quinn choose all $3$ from the remaining $11$: $\\binom{11}{3} = 165$. Answering $220 = \\binom{12}{3}$ removes only one of the two; $286 = \\binom{13}{3}$ is the total.',
    },
    {
      q: 'What is $\\binom{10}{3} + \\binom{10}{4} + \\binom{11}{5}$?',
      choices: ['$792$', '$462$', '$582$', '$924$'],
      answer: 0,
      solution: 'Combine the first two with the identity: $\\binom{10}{3} + \\binom{10}{4} = \\binom{11}{4}$. Then $\\binom{11}{4} + \\binom{11}{5} = \\binom{12}{5} = 792$. Check: $120 + 210 + 462 = 792$. Adding only the first two gives $330$; $582$ comes from $120 + 462$ and dropping the middle term.',
    },
    {
      q: 'For some positive integer $n$, $\\binom{n}{4} - \\binom{n-1}{4} = 455$. What is $\\binom{n}{2}$?',
      choices: ['$105$', '$120$', '$136$', '$455$'],
      answer: 1,
      solution: 'The identity rearranges to $\\binom{n}{4} - \\binom{n-1}{4} = \\binom{n-1}{3}$, so $\\binom{n-1}{3} = 455$. Since $\\binom{14}{3} = 364$ and $\\binom{15}{3} = 455$, we get $n - 1 = 15$ and $n = 16$. Then $\\binom{16}{2} = 120$. Using $n = 15$ gives $105$, and $136 = \\binom{17}{2}$ is one row too far.',
    },
  ],
}

const s125 = {
  id: '12.5',
  title: 'Another Interesting Combinatorial Identity',
  learn: {
    concepts: [
      {
        heading: 'A whole row adds to a power of two',
        body: 'In Section 12.2 we saw that row $n$ of the triangle sums to $2^n$. Now that the entries have names, that fact is an identity about combinations: $\\binom{n}{0} + \\binom{n}{1} + \\binom{n}{2} + \\cdots + \\binom{n}{n} = 2^n$. For row $5$: $1 + 5 + 10 + 10 + 5 + 1 = 32 = 2^5$.',
      },
      {
        heading: 'Why: count subsets two ways',
        body: 'How many subsets does a set of $n$ things have, counting the empty set and the whole set? One way: sort the subsets by size. There are $\\binom{n}{k}$ subsets of size $k$, so the total is $\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n}$. Another way: walk through the $n$ things one at a time and say “in” or “out” for each — $2$ choices, $n$ times, so $2^n$ subsets. Both counts describe the same collection, so they are equal.',
      },
      {
        heading: 'Committees of any size',
        body: 'The identity is the fast answer to “a committee of any size”. From $n$ people, any committee at all — including the empty one — can be formed in $2^n$ ways; requiring at least one member leaves $2^n - 1$; requiring at least two leaves $2^n - 1 - n$. Half a row is also easy when $n$ is odd: by symmetry, $\\binom{n}{0} + \\cdots + \\binom{n}{(n-1)/2}$ is exactly half of $2^n$, which is $2^{n-1}$.',
      },
      {
        heading: 'A small extension: the alternating sum',
        body: 'Put minus signs on every other entry: $1 - 4 + 6 - 4 + 1 = 0$, and $1 - 5 + 10 - 10 + 5 - 1 = 0$. For every row from row $1$ on, $\\binom{n}{0} - \\binom{n}{1} + \\binom{n}{2} - \\cdots = 0$, because each entry of row $n - 1$ feeds into two side-by-side entries of row $n$, and those two carry opposite signs, so its two contributions cancel and nothing is left. So the even-sized subsets and the odd-sized subsets of an $n$-element set are equally numerous: $2^{n-1}$ of each. The trap in all of this is the empty set — it is a subset, and “at least one member” has to subtract it.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\binom{8}{0} + \\binom{8}{1} + \\binom{8}{2} + \\cdots + \\binom{8}{8}$.',
        steps: [
          'This is the sum of all of row $8$, which counts every subset of an $8$-element set.',
          'Each of the $8$ elements is in or out, so there are $2^8$ subsets.',
          'The sum is $256$.',
        ],
        answer: '$256$.',
      },
      {
        problem: 'A club of $7$ members wants to send a delegation to a conference. A delegation can be any number of members, but it must have at least one. How many different delegations are possible?',
        steps: [
          'Any group of members, including the empty group, is one of the $2^7 = 128$ subsets of the club.',
          'The identity says this equals $\\binom{7}{1} + \\binom{7}{2} + \\cdots + \\binom{7}{7}$ plus the one empty delegation.',
          'Throw out the empty group: $128 - 1 = 127$.',
        ],
        answer: '$127$ delegations.',
      },
      {
        problem: 'Find $\\binom{9}{0} + \\binom{9}{1} + \\binom{9}{2} + \\binom{9}{3} + \\binom{9}{4}$.',
        steps: [
          'This is the first half of row $9$, which has $10$ entries; the missing half is $\\binom{9}{5}$ through $\\binom{9}{9}$.',
          'By symmetry $\\binom{9}{k} = \\binom{9}{9-k}$, the two halves are equal, so each is half the full row.',
          'The full row sums to $2^9 = 512$, so the half is $256$.',
        ],
        answer: '$256$.',
      },
    ],
  },
  problems: [
    {
      q: 'What is $\\left(\\binom{7}{0} + \\binom{7}{1} + \\cdots + \\binom{7}{7}\\right) + \\left(\\binom{8}{0} + \\binom{8}{1} + \\cdots + \\binom{8}{8}\\right)$?',
      choices: ['$256$', '$512$', '$32768$', '$384$'],
      answer: 3,
      solution: 'Each bracket is the full sum of one row: row $7$ sums to $2^7 = 128$ and row $8$ to $2^8 = 256$, so the total is $128 + 256 = 384$. Answering $256$ drops row $7$; $512$ assumes two full rows add up to the next row, but each row is twice the one before it, not the sum of the two before it; $32768 = 2^{15}$ multiplies the two row sums instead of adding them.',
    },
    {
      q: 'How many subsets does a set of $5$ elements have, counting the empty set and the set itself?',
      choices: ['$31$', '$25$', '$32$', '$10$'],
      answer: 2,
      solution: 'Each of the $5$ elements is either in the subset or not, so there are $2^5 = 32$ subsets — the same as $\\binom{5}{0} + \\binom{5}{1} + \\cdots + \\binom{5}{5}$. Answering $31$ leaves out the empty set; $25 = 5^2$ has the base and exponent swapped.',
    },
    {
      q: 'What is $\\binom{10}{1} + \\binom{10}{2} + \\binom{10}{3} + \\cdots + \\binom{10}{10}$?',
      choices: ['$1023$', '$1024$', '$1022$', '$512$'],
      answer: 0,
      solution: 'The full row $10$ sums to $2^{10} = 1024$. This sum starts at $\\binom{10}{1}$, so it is missing exactly $\\binom{10}{0} = 1$: the answer is $1023$. Dropping both end terms would give $1022$.',
    },
    {
      q: 'A sandwich shop offers $7$ different toppings. A sandwich must have at least $2$ toppings, and it can have as many as all $7$. How many different sets of toppings are possible?',
      choices: ['$127$', '$120$', '$121$', '$119$'],
      answer: 1,
      solution: 'All $2^7 = 128$ subsets of the toppings, minus the ones that are too small: the empty set ($1$) and the single toppings ($\\binom{7}{1} = 7$). That leaves $128 - 1 - 7 = 120$. Answering $127$ only removes the empty set; $121$ forgets the empty set while removing the singles.',
    },
    {
      q: 'What is $\\binom{8}{0} + \\binom{8}{1} + \\binom{8}{2} + \\binom{8}{3}$?',
      choices: ['$128$', '$163$', '$186$', '$93$'],
      answer: 3,
      solution: 'Row $8$ sums to $2^8 = 256$ and has a single middle entry, $\\binom{8}{4} = 70$. The entries before the middle mirror the entries after it, so the four entries in positions $0$ through $3$ sum to $\\frac{256 - 70}{2} = 93$. Directly: $1 + 8 + 28 + 56 = 93$. Answering $128$ halves the row without removing the middle first; $163$ adds the middle entry to this half; $186$ removes the middle but forgets to halve.',
    },
    {
      q: 'What is $\\binom{9}{0} - \\binom{9}{1} + \\binom{9}{2} - \\binom{9}{3} + \\cdots - \\binom{9}{9}$, with the signs alternating?',
      choices: ['$0$', '$512$', '$-512$', '$1$'],
      answer: 0,
      solution: 'Row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, and with alternating signs each entry cancels against its mirror image, since the mirror of an even position is an odd one when $n$ is odd. The sum is $0$. Answering $512$ ignores the minus signs; $1$ comes from only looking at the first term.',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, 4, 5, 6, 7, 8\\}$ have an even number of elements? The empty set counts as having $0$ elements, which is even.',
      choices: ['$127$', '$256$', '$128$', '$129$'],
      answer: 2,
      solution: 'The alternating sum of row $8$ is $0$, so the even-sized subsets and the odd-sized subsets are equal in number. There are $2^8 = 256$ subsets in all, so $\\frac{256}{2} = 128$ have even size. Directly: $1 + 28 + 70 + 28 + 1 = 128$. Answering $127$ drops the empty set; $256$ counts every subset.',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 9\\}$ contain the number $9$ and at least one other number?',
      choices: ['$511$', '$255$', '$256$', '$254$'],
      answer: 1,
      solution: 'Once $9$ is in, the rest of the subset is any subset of the other $8$ numbers, $2^8 = 256$ choices, and “at least one other number” rules out the empty choice: $256 - 1 = 255$. Answering $511$ forgets that $9$ is decided already; $254$ subtracts an extra one.',
    },
    {
      q: 'A club with $n$ members can form exactly $1013$ different committees that have at least $2$ members. What is $n$?',
      choices: ['$9$', '$11$', '$12$', '$10$'],
      answer: 3,
      solution: 'Committees with at least $2$ members number $2^n - 1 - n$ (all subsets, minus the empty set and the $n$ singles). Since $2^{10} - 11 = 1013$, we have $n = 10$. Check the neighbors: $n = 9$ gives $502$ and $n = 11$ gives $2036$, so no other value works.',
    },
    {
      q: 'A club has $10$ members. A committee is any group of members, of any size, in which the members on the committee outnumber the members left off it. How many such committees are possible?',
      choices: ['$512$', '$252$', '$386$', '$638$'],
      answer: 2,
      solution: 'A committee of size $k$ outnumbers the leftovers when $k > 5$. The $2^{10} = 1024$ subsets split into sizes below $5$, exactly $5$, and above $5$; the below and above groups are mirror images with equal counts, and the middle is $\\binom{10}{5} = 252$. So the count is $\\frac{1024 - 252}{2} = 386$. Answering $512$ assumes exactly half, forgetting the $5$-versus-$5$ ties; $638$ includes those ties.',
    },
  ],
}

const challenge = [
  {
    q: 'One row of Pascal’s triangle has exactly $13$ entries. What is the sum of those entries? (The single $1$ at the top is row $0$.)',
    choices: ['$8192$', '$4096$', '$2048$', '$13$'],
    answer: 1,
    solution: 'Row $n$ has $n + 1$ entries, so $13$ entries means row $12$, which sums to $2^{12} = 4096$. Treating $13$ entries as row $13$ gives $8192$; $2048$ is off by one row the other way.',
  },
  {
    q: 'What is $\\binom{8}{2} + \\binom{8}{3}$?',
    choices: ['$56$', '$36$', '$120$', '$84$'],
    answer: 3,
    solution: 'By Pascal’s identity this is $\\binom{9}{3} = 84$; directly, $28 + 56 = 84$. Answering $56$ keeps only the larger term, and $120 = \\binom{10}{3}$ is one row too far.',
  },
  {
    q: 'Which is larger, the entry in row $10$, position $3$ of Pascal’s triangle or the entry in row $9$, position $4$, and by how much? (Rows and positions start at $0$.)',
    choices: ['Row $9$’s entry, by $6$', 'Row $10$’s entry, by $6$', 'They are equal', 'Row $9$’s entry, by $39$'],
    answer: 0,
    solution: 'The entries are $\\binom{10}{3} = 120$ and $\\binom{9}{4} = 126$, so row $9$’s entry is larger, by $6$. The lower row does not automatically hold the bigger number — position $4$ of row $9$ is its center, where entries peak. Counting positions from $1$ compares $45$ with $84$ and gives a gap of $39$.',
  },
  {
    q: 'A set has $6$ elements. How many of its subsets have fewer than $5$ elements? (The empty set is a subset.)',
    choices: ['$58$', '$63$', '$57$', '$42$'],
    answer: 2,
    solution: 'There are $2^6 = 64$ subsets in all. Those with $5$ or more elements are the $\\binom{6}{5} = 6$ five-element subsets and the whole set, $7$ in total, so $64 - 7 = 57$ have fewer than $5$. Answering $58$ forgets to remove the whole set; $63$ removes only the whole set; $42$ stops at $3$ elements, misreading “fewer than $5$” as “fewer than $4$”.',
  },
  {
    q: 'What is $\\binom{12}{1} + \\binom{12}{3} + \\binom{12}{5} + \\binom{12}{7} + \\binom{12}{9} + \\binom{12}{11}$?',
    choices: ['$4096$', '$2048$', '$2047$', '$1024$'],
    answer: 1,
    solution: 'These are the odd-position entries of row $12$. The alternating sum of a row is $0$, so the odd positions and the even positions each contribute half of the row total $2^{12} = 4096$: the answer is $2048$. Answering $4096$ counts the whole row, and $2047$ subtracts a $1$ that was never included.',
  },
  {
    q: 'In one row of Pascal’s triangle, the entries in positions $2$ and $3$ are $66$ and $220$. What is the entry in position $4$ of the next row down? (Rows and positions start at $0$.)',
    choices: ['$715$', '$286$', '$495$', '$1001$'],
    answer: 0,
    solution: 'Position $2$ equal to $66 = \\binom{12}{2}$ places us in row $12$ (and $\\binom{12}{3} = 220$ confirms it). The next row is row $13$, and $\\binom{13}{4} = \\binom{12}{3} + \\binom{12}{4} = 220 + 495 = 715$. Adding the two given entries gives $286$, which is position $3$ of row $13$, not position $4$.',
  },
  {
    q: 'How many odd entries are there in rows $0$ through $6$ of Pascal’s triangle, all seven rows combined?',
    choices: ['$28$', '$18$', '$13$', '$19$'],
    answer: 3,
    solution: 'Build the seven rows, or just track odd and even: $1$; $1, 1$; $1, 2, 1$; $1, 3, 3, 1$; $1, 4, 6, 4, 1$; $1, 5, 10, 10, 5, 1$; $1, 6, 15, 20, 15, 6, 1$ have $1, 2, 2, 4, 2, 4, 4$ odd entries respectively, for a total of $19$. Leaving out row $0$ gives $18$; $28$ counts every entry; $13$ counts only the $1$s at the ends of the rows.',
  },
  {
    q: 'A school council can include any of its $6$ teachers and any of its $4$ students, in any numbers, as long as at least one teacher is on it. How many different councils are possible?',
    choices: ['$1023$', '$1024$', '$1008$', '$1007$'],
    answer: 2,
    solution: 'Choose the teachers and the students separately. The teacher group is any nonempty subset of $6$: $2^6 - 1 = 63$ ways. The student group is any subset of $4$, empty allowed: $2^4 = 16$ ways. Multiply: $63 \\times 16 = 1008$. Answering $1023$ only removes the single all-empty council, but it also has to remove every council made of students alone.',
  },
  {
    q: 'The number $3003$ appears in position $5$ of one row of Pascal’s triangle and in position $6$ of a different row. What is the sum of those two row numbers? (Rows and positions start at $0$.)',
    choices: ['$28$', '$29$', '$30$', '$27$'],
    answer: 1,
    solution: 'Find $n$ with $\\binom{n}{5} = 3003$: $\\binom{14}{5} = 2002$ and $\\binom{15}{5} = 3003$, so that row is $15$. Then $\\binom{n}{6} = 3003$: $\\binom{14}{6} = \\frac{14}{6} \\cdot \\binom{13}{5} = \\frac{14 \\cdot 1287}{6} = 3003$, so that row is $14$. The sum is $15 + 14 = 29$. Answering $30$ or $28$ comes from taking the same row for both.',
  },
  {
    q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an even number of elements and contain exactly one of the numbers $1$ and $2$? The empty set counts as having $0$ elements, which is even.',
    choices: ['$256$', '$128$', '$512$', '$384$'],
    answer: 0,
    solution: 'Decide which of $1$ and $2$ is in: $2$ ways. That one element is in and the other is out, so the rest of the subset is a subset of the other $8$ numbers, and it must have an odd number of elements to make the total even. Odd-sized subsets of an $8$-element set number $\\frac{2^8}{2} = 128$, so the count is $2 \\times 128 = 256$. Answering $128$ handles only the case where $1$ is in and $2$ is out; $512$ counts every even-sized subset, whether or not it uses $1$ or $2$; $384$ counts the even-sized subsets with at least one of $1$ and $2$, which also lets in the subsets containing both.',
  },
  {
    q: 'A club with $n$ members can form exactly $968$ different committees that have at least $3$ members. What is $n$?',
    choices: ['$9$', '$11$', '$10$', '$12$'],
    answer: 2,
    solution: 'Committees with at least $3$ members number $2^n - 1 - n - \\binom{n}{2}$: all subsets, minus the empty set, the $n$ one-member committees, and the $\\binom{n}{2}$ two-member committees. For $n = 10$ that is $1024 - 1 - 10 - 45 = 968$, so $n = 10$. The neighbors miss on both sides: $n = 9$ gives $512 - 1 - 9 - 36 = 466$, $n = 11$ gives $2048 - 1 - 11 - 55 = 1981$, and $n = 12$ gives $4017$. Forgetting to remove the pairs and solving $2^n - 1 - n = 968$ has no integer solution at all, which is the sign that a size class was skipped.',
  },
  {
    q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an even number of elements and contain at least one of the numbers $1$ and $2$?',
    choices: ['$256$', '$448$', '$128$', '$384$'],
    answer: 3,
    solution: 'Count the even-sized subsets and subtract the ones that use neither $1$ nor $2$. Even-sized subsets of a $10$-element set: $\\frac{2^{10}}{2} = 512$. Even-sized subsets avoiding both $1$ and $2$ are even-sized subsets of the other $8$ numbers: $\\frac{2^8}{2} = 128$. So the answer is $512 - 128 = 384$. Answering $256$ subtracts the wrong complement ($2^8$, all subsets of the other eight), and $448$ subtracts only the even-sized subsets of $7$ elements.',
  },
]

const worksheet = [
  {
    q: 'In one row of Pascal’s triangle, the entry in position $1$ is $15$. What is the entry in position $3$ of that row? (Rows and positions start at $0$.)',
    answer: '$455$',
    solution: 'Position $1$ of row $n$ is $n$, so this is row $15$, and position $3$ is $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{6} = 455$.',
  },
  {
    q: 'The entry in row $11$, position $3$ of Pascal’s triangle is $165$. What is the entry in row $12$, position $3$? (Rows and positions start at $0$.)',
    answer: '$220$',
    solution: 'The entry in row $12$, position $3$ is the sum of the two entries above it: the given $165$ and its left neighbor $\\binom{11}{2} = \\frac{11 \\cdot 10}{2} = 55$. So it is $165 + 55 = 220 = \\binom{12}{3}$.',
  },
  {
    q: 'What is the sum of all the entries in row $13$ of Pascal’s triangle? (The single $1$ at the top is row $0$.)',
    answer: '$8192$',
    solution: 'Row $n$ sums to $2^n$ because every entry feeds into two entries of the next row. Row $13$ sums to $2^{13} = 8192$.',
  },
  {
    q: 'Express $\\binom{6}{2} + \\binom{6}{3}$ as a single combination, and give its value.',
    answer: '$\\binom{7}{3} = 35$',
    solution: 'The two terms are the parents of the entry one row down: $\\binom{6}{2} + \\binom{6}{3} = \\binom{7}{3}$, and $15 + 20 = 35$.',
  },
  {
    q: 'Express $\\binom{20}{5} + 2\\binom{20}{6} + \\binom{20}{7}$ as a single combination.',
    answer: '$\\binom{22}{7}$',
    solution: 'Split the doubled term and pair up: $\\left(\\binom{20}{5} + \\binom{20}{6}\\right) + \\left(\\binom{20}{6} + \\binom{20}{7}\\right) = \\binom{21}{6} + \\binom{21}{7}$ by Pascal’s identity, and one more application gives $\\binom{22}{7}$, which is $170544$.',
  },
  {
    q: 'A set has $9$ elements. How many of its subsets have at least $2$ elements?',
    answer: '$502$',
    solution: 'All $2^9 = 512$ subsets, minus the empty set and the $9$ one-element subsets: $512 - 1 - 9 = 502$.',
  },
  {
    q: 'The number $21$ appears in exactly two rows of Pascal’s triangle. Name both rows and the positions within each row that hold $21$. (Rows and positions start at $0$.)',
    answer: 'Row $7$ (positions $2$ and $5$) and row $21$ (positions $1$ and $20$)',
    solution: 'Position $1$ of row $21$ is $21$, and by symmetry so is position $20$. Closer to the middle, $\\binom{7}{2} = 21$ puts it in positions $2$ and $5$ of row $7$. Nothing else works: $\\binom{n}{2}$ passes $21$ after $n = 7$, and every entry at least three steps from an edge is $\\binom{n}{3}$ or bigger, which is $20$ at $n = 6$ and at least $35$ from $n = 7$ on.',
  },
  {
    q: 'Compute $\\binom{12}{7} + \\binom{12}{8} + \\binom{12}{9} + \\binom{12}{10} + \\binom{12}{11} + \\binom{12}{12}$.',
    answer: '$1586$',
    solution: 'Row $12$ sums to $2^{12} = 4096$ and has a single middle entry, $\\binom{12}{6} = 924$. The six entries after the middle mirror the six before it, so they sum to $\\frac{4096 - 924}{2} = 1586$.',
  },
  {
    q: 'A committee of any size, including the empty committee, is chosen from $8$ people. Ana and Ben refuse to serve together, though either may serve without the other. How many committees are possible?',
    answer: '$192$',
    solution: 'All $2^8 = 256$ subsets, minus the ones containing both Ana and Ben. With those two in, the rest of the committee is any subset of the other $6$ people: $2^6 = 64$. So $256 - 64 = 192$.',
  },
  {
    q: 'A group has $5$ boys and $5$ girls. A team may have any number of members, but it must include at least one boy and at least one girl. How many different teams are possible?',
    answer: '$961$',
    solution: 'Choose the boys and the girls separately. Any nonempty subset of the $5$ boys: $2^5 - 1 = 31$ ways. Any nonempty subset of the $5$ girls: also $31$. Multiply: $31 \\times 31 = 961$.',
  },
]

export default {
  id: 'intro-counting-ch12',
  book: 'intro-counting',
  number: 12,
  title: 'Pascal’s Triangle',
  intro:
    'Stack up the numbers $1$, then $1, 1$, then $1, 2, 1$, adding neighbors to get each new row, and something surprising happens: every combination you have ever computed shows up in the pile. In this chapter you will build Pascal’s triangle, discover that its entries are $\\binom{n}{k}$, and turn two patterns in the triangle into identities that let you add combinations, count committees of any size, and find subsets with a property without touching a formula.',
  sections: [s122, s123, s124, s125],
  challenge,
  worksheet,
}
