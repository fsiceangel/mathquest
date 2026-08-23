// Introduction to Algebra — Chapter 21: Sequences & Series
// All problems, explanations, and examples are original MathQuest content.

const s211 = {
  id: '21.1',
  title: 'Arithmetic Sequences',
  learn: {
    concepts: [
      {
        heading: 'Same step every time',
        body: 'An arithmetic sequence is a list of numbers where you take the same step to get from each term to the next. That step is called the common difference $d$. In $3, 8, 13, 18, \\ldots$ the common difference is $5$; in $40, 33, 26, \\ldots$ it is $-7$ — steps can go down, too!',
      },
      {
        heading: 'The $n$th term: count the steps, not the terms',
        body: 'To walk from the first term to the $n$th term, you take $n - 1$ steps (not $n$!). So if the first term is $a$, the $n$th term is $a + (n-1)d$. The $10$th term of $4, 9, 14, \\ldots$ is $4 + 9 \\times 5 = 49$ — nine steps, because the first term needs no step at all.',
      },
      {
        heading: 'Work backwards from any two terms',
        body: 'Two terms pin down the whole sequence. From the $5$th term to the $9$th term is $9 - 5 = 4$ steps, so the difference of those terms equals $4d$. Divide by the number of steps to find $d$, then walk backwards to find the first term.',
      },
      {
        heading: 'Each term is the average of its neighbors',
        body: 'In an arithmetic sequence, every term sits exactly halfway between the term before and the term after: it is their arithmetic mean. If $5, x, 19$ is arithmetic, then $x = \\frac{5 + 19}{2} = 12$. This is a quick test — and a quick tool for filling in gaps.',
      },
    ],
    examples: [
      {
        problem: 'Find the $50$th term of the arithmetic sequence $7, 11, 15, \\ldots$',
        steps: [
          'The first term is $a = 7$ and the common difference is $d = 11 - 7 = 4$.',
          'To reach the $50$th term we take $50 - 1 = 49$ steps of size $4$.',
          'So the $50$th term is $7 + 49 \\times 4 = 7 + 196 = 203$.',
        ],
        answer: 'The $50$th term is $203$',
      },
      {
        problem: 'The $5$th term of an arithmetic sequence is $22$ and the $9$th term is $38$. Find the first term.',
        steps: [
          'From the $5$th term to the $9$th term is $4$ steps, and the terms grew by $38 - 22 = 16$.',
          'So $4d = 16$, which gives $d = 4$.',
          'Walk backwards from the $5$th term: the first term is $22 - 4 \\times 4 = 22 - 16 = 6$.',
        ],
        answer: 'The first term is $6$',
      },
      {
        problem: 'Insert three numbers between $8$ and $24$ so that all five numbers form an arithmetic sequence.',
        steps: [
          'Five numbers means $4$ gaps between $8$ and $24$ — count the gaps, not the new numbers!',
          'Each gap is $\\frac{24 - 8}{4} = 4$.',
          'Start at $8$ and hop by $4$: the three new numbers are $12$, $16$, and $20$.',
        ],
        answer: 'The sequence is $8, 12, 16, 20, 24$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the common difference of the arithmetic sequence $3, 8, 13, 18, \\ldots$?',
      choices: ['$3$', '$5$', '$8$', '$15$'],
      answer: 1,
      solution: 'The common difference is the step from one term to the next: $8 - 3 = 5$. Check the other gaps: $13 - 8 = 5$ and $18 - 13 = 5$. Same step every time!',
    },
    {
      q: 'What is the next term of the arithmetic sequence $40, 33, 26, 19, \\ldots$?',
      choices: ['$12$', '$13$', '$-7$', '$11$'],
      answer: 0,
      solution: 'The common difference is $33 - 40 = -7$, so each term drops by $7$. The next term is $19 - 7 = 12$. (The difference $-7$ is the step, not the next term.)',
    },
    {
      q: 'What is the $10$th term of the arithmetic sequence $4, 9, 14, \\ldots$?',
      choices: ['$54$', '$44$', '$49$', '$50$'],
      answer: 2,
      solution: 'Here $a = 4$ and $d = 5$. Reaching the $10$th term takes $10 - 1 = 9$ steps: $4 + 9 \\times 5 = 49$. (Using $10$ steps gives $54$, one term too far — count steps, not terms.)',
    },
    {
      q: 'Which of these sequences is arithmetic?',
      choices: ['$1, 2, 4, 8, \\ldots$', '$2, 5, 8, 11, \\ldots$', '$1, 4, 9, 16, \\ldots$', '$1, 1, 2, 3, \\ldots$'],
      answer: 1,
      solution: 'Arithmetic means the same difference between neighbors. In $2, 5, 8, 11$ every gap is $3$. In $1, 2, 4, 8$ the gaps are $1, 2, 4$ (that one is geometric — it multiplies); in $1, 4, 9, 16$ the gaps are $3, 5, 7$; in $1, 1, 2, 3$ the gaps are $0, 1, 1$.',
    },
    {
      q: 'What is the $100$th term of the arithmetic sequence $2, 5, 8, \\ldots$?',
      choices: ['$302$', '$300$', '$296$', '$299$'],
      answer: 3,
      solution: 'With $a = 2$ and $d = 3$, the $100$th term takes $99$ steps: $2 + 99 \\times 3 = 2 + 297 = 299$. The tempting $302$ comes from taking $100$ steps — one too many.',
    },
    {
      q: 'An arithmetic sequence has first term $11$, and its $7$th term is $47$. What is the common difference?',
      choices: ['$6$', '$7$', '$5$', '$36$'],
      answer: 0,
      solution: 'From the $1$st term to the $7$th term is $6$ steps, and the sequence grew by $47 - 11 = 36$. So $6d = 36$, giving $d = 6$. (Dividing by $7$ would count one step too many.)',
    },
    {
      q: 'Which of these numbers is a term of the arithmetic sequence $7, 11, 15, 19, \\ldots$?',
      choices: ['$100$', '$102$', '$103$', '$105$'],
      answer: 2,
      solution: 'Every term has the form $7 + 4k$, so a term minus $7$ must be a multiple of $4$. Check: $103 - 7 = 96 = 4 \\times 24$, so $103$ is the $25$th term. The others leave $93$, $95$, and $98$, none of which are multiples of $4$.',
    },
    {
      q: 'The numbers $5, x, 19$ form an arithmetic sequence. What is $x$?',
      choices: ['$14$', '$12$', '$24$', '$7$'],
      answer: 1,
      solution: 'The middle term of an arithmetic sequence is the average of its neighbors: $x = \\frac{5 + 19}{2} = 12$. Check: $5, 12, 19$ steps by $7$ each time.',
    },
    {
      q: 'How many terms of the arithmetic sequence $12, 19, 26, \\ldots$ are less than $300$?',
      choices: ['$42$', '$41$', '$43$', '$40$'],
      answer: 0,
      solution: 'The $n$th term is $12 + 7(n-1)$. We need $12 + 7(n-1) < 300$, so $7(n-1) < 288$, which means $n - 1 \\le 41$. The $42$nd term is $12 + 7 \\times 41 = 299$, still under $300$, but the $43$rd term is $306$. So $42$ terms qualify.',
    },
    {
      q: 'Three consecutive terms of an arithmetic sequence add up to $51$, and the largest of them is $27$. What is the common difference?',
      choices: ['$5$', '$17$', '$7$', '$10$'],
      answer: 3,
      solution: 'Three consecutive terms average out to the middle one, so the middle term is $\\frac{51}{3} = 17$. The largest term is one step above the middle: $17 + d = 27$, so $d = 10$. Check: $7 + 17 + 27 = 51$.',
    },
  ],
}

const s212 = {
  id: '21.2',
  title: 'Arithmetic Series',
  learn: {
    concepts: [
      {
        heading: 'Pair the ends',
        body: 'A series is a sum of the terms of a sequence. To sum an arithmetic series, pair the first term with the last, the second with the second-to-last, and so on — every pair has the same sum! For $1 + 2 + \\cdots + 10$, each of the $5$ pairs sums to $11$, so the total is $5 \\times 11 = 55$.',
      },
      {
        heading: 'The sum formula',
        body: 'Pairing gives a formula: the sum of an arithmetic series is $\\frac{n}{2}(\\text{first} + \\text{last})$, where $n$ is the number of terms. You can read it as: number of terms times the average term, since $\\frac{\\text{first} + \\text{last}}{2}$ is the average of all the terms.',
      },
      {
        heading: 'Count the terms first (beware the fencepost!)',
        body: 'Before summing, you must know $n$. For a series with common difference $d$, the count is $n = \\frac{\\text{last} - \\text{first}}{d} + 1$. That $+1$ matters: from $4$ to $40$ by threes there are $12$ gaps but $13$ terms — just like a fence with $12$ gaps needs $13$ posts.',
      },
      {
        heading: 'The most famous sum of all',
        body: 'The sum $1 + 2 + 3 + \\cdots + n$ equals $\\frac{n(n+1)}{2}$. And here is a beautiful bonus: the sum of the first $n$ odd numbers, $1 + 3 + 5 + \\cdots$, is exactly $n^2$ — odd numbers stack up into perfect squares.',
      },
    ],
    examples: [
      {
        problem: 'Compute $1 + 2 + 3 + \\cdots + 40$.',
        steps: [
          'Pair the ends: $1 + 40 = 41$, $2 + 39 = 41$, and so on.',
          'There are $40$ terms, so there are $20$ pairs, each summing to $41$.',
          'The total is $20 \\times 41 = 820$. (The formula agrees: $\\frac{40 \\times 41}{2} = 820$.)',
        ],
        answer: '$1 + 2 + \\cdots + 40 = 820$',
      },
      {
        problem: 'Compute $5 + 8 + 11 + \\cdots + 62$.',
        steps: [
          'Count the terms first: $n = \\frac{62 - 5}{3} + 1 = 19 + 1 = 20$. Do not forget the $+1$!',
          'Now use the formula: the sum is $\\frac{20}{2}(5 + 62) = 10 \\times 67$.',
          'That gives $670$.',
        ],
        answer: '$5 + 8 + \\cdots + 62 = 670$',
      },
      {
        problem: 'A theater has $12$ rows. The front row has $15$ seats, and each row behind has $2$ more seats than the row in front of it. How many seats are there in all?',
        steps: [
          'The row sizes form an arithmetic sequence: $15, 17, 19, \\ldots$ with $d = 2$.',
          'The back row is the $12$th: $15 + 11 \\times 2 = 37$ seats.',
          'Total seats: $\\frac{12}{2}(15 + 37) = 6 \\times 52 = 312$.',
        ],
        answer: 'The theater has $312$ seats',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 12$.',
      choices: ['$72$', '$66$', '$78$', '$84$'],
      answer: 2,
      solution: 'Use the formula $\\frac{n(n+1)}{2}$ with $n = 12$: the sum is $\\frac{12 \\times 13}{2} = 78$. Or pair the ends: $6$ pairs each summing to $13$ gives $6 \\times 13 = 78$.',
    },
    {
      q: 'Compute $2 + 4 + 6 + \\cdots + 20$.',
      choices: ['$100$', '$105$', '$120$', '$110$'],
      answer: 3,
      solution: 'These are twice the numbers $1$ through $10$, so the sum is $2 \\times 55 = 110$. Or: there are $10$ terms averaging $\\frac{2 + 20}{2} = 11$, giving $10 \\times 11 = 110$.',
    },
    {
      q: 'How many terms are in the sequence $4, 7, 10, \\ldots, 40$?',
      choices: ['$13$', '$12$', '$14$', '$36$'],
      answer: 0,
      solution: 'Count gaps first: $\\frac{40 - 4}{3} = 12$ gaps. Then add one for the starting term: $12 + 1 = 13$ terms. The fencepost strikes: $12$ counts the gaps, not the terms.',
    },
    {
      q: 'An arithmetic series has $8$ terms; the first is $3$ and the last is $31$. What is the sum?',
      choices: ['$272$', '$136$', '$124$', '$68$'],
      answer: 1,
      solution: 'Sum $= \\frac{n}{2}(\\text{first} + \\text{last}) = \\frac{8}{2}(3 + 31) = 4 \\times 34 = 136$. (Forgetting to halve gives $272$ — that counts every term twice.)',
    },
    {
      q: 'Compute $1 + 3 + 5 + \\cdots + 29$.',
      choices: ['$210$', '$240$', '$200$', '$225$'],
      answer: 3,
      solution: 'These are the first $15$ odd numbers (count: $\\frac{29 - 1}{2} + 1 = 15$), and the first $n$ odd numbers sum to $n^2$. So the sum is $15^2 = 225$. The formula agrees: $\\frac{15}{2}(1 + 29) = 15 \\times 15 = 225$.',
    },
    {
      q: 'Compute $10 + 14 + 18 + \\cdots + 50$.',
      choices: ['$330$', '$300$', '$360$', '$320$'],
      answer: 0,
      solution: 'Count terms: $\\frac{50 - 10}{4} + 1 = 11$. Then sum: $\\frac{11}{2}(10 + 50) = 11 \\times 30 = 330$. (Using $10$ terms gives $300$ — the fencepost error at work.)',
    },
    {
      q: 'Logs are stacked so each row has one fewer log than the row below. The bottom row has $16$ logs and the top row has $9$. How many logs are in the stack?',
      choices: ['$96$', '$112$', '$100$', '$90$'],
      answer: 2,
      solution: 'The rows have $16, 15, \\ldots, 9$ logs — that is $16 - 9 + 1 = 8$ rows. Sum: $\\frac{8}{2}(16 + 9) = 4 \\times 25 = 100$ logs.',
    },
    {
      q: 'Compute $51 + 52 + 53 + \\cdots + 100$.',
      choices: ['$2525$', '$3775$', '$3825$', '$5050$'],
      answer: 1,
      solution: 'There are $100 - 51 + 1 = 50$ terms averaging $\\frac{51 + 100}{2} = 75.5$, so the sum is $50 \\times 75.5 = 3775$. Another route: $(1 + \\cdots + 100) - (1 + \\cdots + 50) = 5050 - 1275 = 3775$.',
    },
    {
      q: 'An arithmetic series has $20$ terms, its first term is $7$, and its sum is $730$. What is the last term?',
      choices: ['$66$', '$73$', '$33$', '$59$'],
      answer: 0,
      solution: 'From $\\frac{20}{2}(7 + \\text{last}) = 730$ we get $10(7 + \\text{last}) = 730$, so $7 + \\text{last} = 73$ and the last term is $66$. (Stopping at $73$ forgets to remove the first term.)',
    },
    {
      q: 'A theater has $15$ rows. The front row has $20$ seats and each row has $3$ more seats than the one in front. How many seats in all?',
      choices: ['$630$', '$615$', '$600$', '$570$'],
      answer: 1,
      solution: 'The back row is the $15$th: $20 + 14 \\times 3 = 62$ seats. Total: $\\frac{15}{2}(20 + 62) = \\frac{15 \\times 82}{2} = 15 \\times 41 = 615$.',
    },
  ],
}

const s213 = {
  id: '21.3',
  title: 'Geometric Sequences',
  learn: {
    concepts: [
      {
        heading: 'Multiply instead of add',
        body: 'A geometric sequence multiplies by the same number each time. That multiplier is the common ratio $r$. In $5, 15, 45, 135, \\ldots$ the ratio is $3$; to find it, divide any term by the one before: $\\frac{15}{5} = 3$.',
      },
      {
        heading: 'The $n$th term: count the multiplications',
        body: 'Just like arithmetic sequences, getting from the first term to the $n$th takes $n - 1$ moves — here, $n - 1$ multiplications. So the $n$th term is $a \\cdot r^{n-1}$. The $6$th term of $3, 6, 12, \\ldots$ is $3 \\cdot 2^5 = 96$.',
      },
      {
        heading: 'Ratios can be negative or fractional',
        body: 'A negative ratio makes the signs alternate: $81, -27, 9, -3, \\ldots$ has $r = -\\frac{1}{3}$. A ratio between $-1$ and $1$ makes the terms shrink toward $0$: $64, 32, 16, 8, \\ldots$ has $r = \\frac{1}{2}$. The rule is the same — always divide a term by the previous one.',
      },
      {
        heading: 'The geometric mean',
        body: 'In a geometric sequence of positive numbers, each term is the geometric mean of its neighbors: $x = \\sqrt{ab}$ if $a, x, b$ is geometric. That is because $\\frac{x}{a} = \\frac{b}{x}$ forces $x^2 = ab$. So between $4$ and $25$ sits $\\sqrt{100} = 10$.',
      },
    ],
    examples: [
      {
        problem: 'Find the $6$th term of the geometric sequence $3, 6, 12, \\ldots$',
        steps: [
          'The first term is $a = 3$ and the ratio is $r = \\frac{6}{3} = 2$.',
          'Reaching the $6$th term takes $6 - 1 = 5$ multiplications by $2$.',
          'So the $6$th term is $3 \\cdot 2^5 = 3 \\times 32 = 96$.',
        ],
        answer: 'The $6$th term is $96$',
      },
      {
        problem: 'The $2$nd term of a geometric sequence is $12$ and the $5$th term is $96$. Find the common ratio and the first term.',
        steps: [
          'From the $2$nd term to the $5$th is $3$ multiplications, so $12 \\cdot r^3 = 96$.',
          'That gives $r^3 = 8$, so $r = 2$.',
          'Step back once from the $2$nd term: the first term is $\\frac{12}{2} = 6$.',
        ],
        answer: 'The ratio is $2$ and the first term is $6$',
      },
      {
        problem: 'Find the geometric mean of $4$ and $25$.',
        steps: [
          'The geometric mean of $a$ and $b$ is $\\sqrt{ab}$.',
          'Here $\\sqrt{4 \\times 25} = \\sqrt{100} = 10$.',
          'Check the ratios: $4, 10, 25$ gives $\\frac{10}{4} = 2.5$ and $\\frac{25}{10} = 2.5$ — the same, so it really is geometric.',
        ],
        answer: 'The geometric mean is $10$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the common ratio of the geometric sequence $5, 15, 45, 135, \\ldots$?',
      choices: ['$3$', '$10$', '$5$', '$15$'],
      answer: 0,
      solution: 'Divide any term by the one before it: $\\frac{15}{5} = 3$. Check: $\\frac{45}{15} = 3$ and $\\frac{135}{45} = 3$. (The difference $15 - 5 = 10$ is not constant here — this sequence multiplies, it does not add.)',
    },
    {
      q: 'What is the next term of the geometric sequence $64, 32, 16, 8, \\ldots$?',
      choices: ['$0$', '$2$', '$4$', '$6$'],
      answer: 2,
      solution: 'The ratio is $\\frac{32}{64} = \\frac{1}{2}$, so each term is half the one before. The next term is $8 \\times \\frac{1}{2} = 4$. The terms shrink toward $0$ but never reach it.',
    },
    {
      q: 'What is the $5$th term of the geometric sequence $2, 6, 18, \\ldots$?',
      choices: ['$486$', '$162$', '$54$', '$108$'],
      answer: 1,
      solution: 'With $a = 2$ and $r = 3$, the $5$th term takes $4$ multiplications: $2 \\cdot 3^4 = 2 \\times 81 = 162$. (Five multiplications gives $486$, the $6$th term — count moves, not terms.)',
    },
    {
      q: 'Which of these sequences is geometric?',
      choices: ['$2, 4, 6, 8, \\ldots$', '$1, 4, 9, 16, \\ldots$', '$5, 10, 15, 20, \\ldots$', '$3, 6, 12, 24, \\ldots$'],
      answer: 3,
      solution: 'Geometric means a constant ratio. In $3, 6, 12, 24$ every ratio is $2$. In $2, 4, 6, 8$ the ratios are $2, 1.5, \\frac{4}{3}$ — that one is arithmetic (constant difference $2$), and so is $5, 10, 15, 20$. In $1, 4, 9, 16$ neither differences nor ratios are constant.',
    },
    {
      q: 'What is the next term of the geometric sequence $81, -27, 9, -3, \\ldots$?',
      choices: ['$-1$', '$3$', '$1$', '$-9$'],
      answer: 2,
      solution: 'The ratio is $\\frac{-27}{81} = -\\frac{1}{3}$, so signs alternate and sizes shrink by a factor of $3$. The next term is $-3 \\times \\left(-\\frac{1}{3}\\right) = 1$. After a negative term comes a positive one.',
    },
    {
      q: 'In the geometric sequence with first term $5$ and common ratio $2$, which term equals $320$?',
      choices: ['The $7$th', 'The $6$th', 'The $8$th', 'The $64$th'],
      answer: 0,
      solution: 'We need $5 \\cdot 2^{n-1} = 320$, so $2^{n-1} = 64 = 2^6$. Then $n - 1 = 6$, so $n = 7$. Check: $5, 10, 20, 40, 80, 160, 320$ — the $7$th term indeed.',
    },
    {
      q: 'What is the geometric mean of $8$ and $18$?',
      choices: ['$13$', '$12$', '$144$', '$10$'],
      answer: 1,
      solution: 'The geometric mean is $\\sqrt{8 \\times 18} = \\sqrt{144} = 12$. ($13$ is the arithmetic mean — the average — and $144$ is the product before taking the square root.)',
    },
    {
      q: 'A geometric sequence with a positive common ratio has $2$nd term $10$ and $4$th term $250$. What is the first term?',
      choices: ['$2$', '$5$', '$\\frac{1}{2}$', '$50$'],
      answer: 0,
      solution: 'From the $2$nd to the $4$th term is $2$ multiplications: $10 \\cdot r^2 = 250$, so $r^2 = 25$ and $r = 5$. Step back once from the $2$nd term: the first term is $\\frac{10}{5} = 2$.',
    },
    {
      q: 'A colony starts with $5$ bacteria and doubles every hour, so after $h$ hours it has $5 \\cdot 2^h$ bacteria. After how many hours does it first exceed $1000$?',
      choices: ['$7$', '$200$', '$9$', '$8$'],
      answer: 3,
      solution: 'We need $5 \\cdot 2^h > 1000$, so $2^h > 200$. Powers of $2$: $2^7 = 128$ is not enough, but $2^8 = 256$ works. After $7$ hours there are $640$ bacteria; after $8$ hours, $1280$. So the answer is $8$ hours.',
    },
    {
      q: 'In a geometric sequence of positive numbers, the $3$rd term is $12$ and the $5$th term is $27$. What is the $4$th term?',
      choices: ['$19.5$', '$18$', '$15$', '$16$'],
      answer: 1,
      solution: 'The $4$th term is the geometric mean of its neighbors: $\\sqrt{12 \\times 27} = \\sqrt{324} = 18$. ($19.5$ is the arithmetic mean — the right idea for arithmetic sequences, but this one multiplies.) Check: $r = \\frac{18}{12} = \\frac{3}{2}$ and $18 \\times \\frac{3}{2} = 27$.',
    },
  ],
}

const s214 = {
  id: '21.4',
  title: 'Geometric Series',
  learn: {
    concepts: [
      {
        heading: 'The shift-and-subtract trick',
        body: 'To sum $S = 1 + 2 + 4 + \\cdots + 256$, multiply the whole thing by the ratio: $2S = 2 + 4 + \\cdots + 512$. Subtract: almost everything cancels, leaving $2S - S = 512 - 1$. So $S = 511$. This trick works for every geometric series and gives the formula $S = \\frac{a(r^n - 1)}{r - 1}$.',
      },
      {
        heading: 'Infinite series can have finite sums',
        body: 'Walk halfway across a room, then half the rest, then half of that: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$. You never pass the far wall, but you get as close as you like — the halves fill exactly one whole room. When $|r| < 1$ the terms shrink fast enough for the sum to settle on a single number.',
      },
      {
        heading: 'The infinite sum formula',
        body: 'When $|r| < 1$, the infinite geometric series sums to $\\frac{a}{1 - r}$, where $a$ is the first term. So $1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots = \\frac{1}{1 - \\frac{1}{2}} = 2$. But beware: if $|r| \\ge 1$ the terms never shrink, the sum grows without bound, and the formula does not apply at all.',
      },
      {
        heading: 'Repeating decimals are geometric series in disguise',
        body: 'The decimal $0.\\overline{7} = 0.777\\ldots$ is really $\\frac{7}{10} + \\frac{7}{100} + \\frac{7}{1000} + \\cdots$, a geometric series with $r = \\frac{1}{10}$. Its sum is $\\frac{7/10}{9/10} = \\frac{7}{9}$. The same idea shows the famous fact $0.\\overline{9} = \\frac{9}{9} = 1$ — exactly $1$, not just close!',
      },
    ],
    examples: [
      {
        problem: 'Compute $1 + 2 + 4 + 8 + \\cdots + 256$.',
        steps: [
          'Call the sum $S$ and multiply by the ratio $2$: then $2S = 2 + 4 + 8 + \\cdots + 512$.',
          'Subtract $S$ from $2S$: every term from $2$ through $256$ cancels, leaving $S = 512 - 1$.',
          'So $S = 511$.',
        ],
        answer: '$1 + 2 + 4 + \\cdots + 256 = 511$',
      },
      {
        problem: 'Compute the infinite sum $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$',
        steps: [
          'Here $a = 1$ and $r = \\frac{1}{2}$, and since $|r| < 1$ the sum settles on a number.',
          'Use the formula: $\\frac{a}{1 - r} = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$.',
          'It makes sense: after $1$ you add half the remaining distance to $2$, then half again, forever.',
        ],
        answer: 'The sum is $2$',
      },
      {
        problem: 'Write $0.\\overline{7}$ as a fraction.',
        steps: [
          'Expand the decimal: $0.777\\ldots = \\frac{7}{10} + \\frac{7}{100} + \\frac{7}{1000} + \\cdots$, a geometric series with $a = \\frac{7}{10}$ and $r = \\frac{1}{10}$.',
          'Apply the infinite sum formula: $\\frac{a}{1 - r} = \\frac{7/10}{1 - 1/10} = \\frac{7/10}{9/10}$.',
          'The tens cancel: the sum is $\\frac{7}{9}$.',
        ],
        answer: '$0.\\overline{7} = \\frac{7}{9}$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $1 + 2 + 4 + 8 + 16$.',
      choices: ['$30$', '$32$', '$15$', '$31$'],
      answer: 3,
      solution: 'Add directly, or use the pattern: each sum of powers of $2$ is one less than the next power. Since the next term would be $32$, the sum is $32 - 1 = 31$.',
    },
    {
      q: 'Compute the infinite sum $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$',
      choices: ['$2$', '$\\frac{15}{8}$', '$3$', 'It grows without bound'],
      answer: 0,
      solution: 'Here $a = 1$ and $r = \\frac{1}{2}$, so the sum is $\\frac{1}{1 - \\frac{1}{2}} = 2$. Each new term fills half the remaining gap to $2$ — the whole gap gets filled. ($\\frac{15}{8}$ is where you stand after just four terms.)',
    },
    {
      q: 'Compute $3 + 6 + 12 + 24 + 48$.',
      choices: ['$90$', '$93$', '$96$', '$45$'],
      answer: 1,
      solution: 'Shift and subtract: doubling the sum gives $6 + 12 + 24 + 48 + 96$, and subtracting the original leaves $96 - 3 = 93$. Direct addition confirms it: $3 + 6 + 12 + 24 + 48 = 93$.',
    },
    {
      q: 'Compute the infinite sum $6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\cdots$',
      choices: ['$8$', '$12$', '$9$', '$10$'],
      answer: 2,
      solution: 'The ratio is $\\frac{2}{6} = \\frac{1}{3}$, safely between $-1$ and $1$. The sum is $\\frac{a}{1 - r} = \\frac{6}{1 - \\frac{1}{3}} = \\frac{6}{\\frac{2}{3}} = 9$.',
    },
    {
      q: 'Write $0.\\overline{4}$ as a fraction.',
      choices: ['$\\frac{4}{9}$', '$\\frac{2}{5}$', '$\\frac{4}{11}$', '$\\frac{4}{99}$'],
      answer: 0,
      solution: '$0.444\\ldots = \\frac{4}{10} + \\frac{4}{100} + \\cdots$ with ratio $\\frac{1}{10}$, so the sum is $\\frac{4/10}{9/10} = \\frac{4}{9}$. ($\\frac{2}{5} = 0.4$ exactly, which stops — the repeating tail is what pushes it up to $\\frac{4}{9}$.)',
    },
    {
      q: 'Which of these infinite series adds up to a finite number?',
      choices: ['$1 + 2 + 4 + 8 + \\cdots$', '$5 + 5 + 5 + 5 + \\cdots$', '$4 + 6 + 9 + \\frac{27}{2} + \\cdots$', '$9 + 6 + 4 + \\frac{8}{3} + \\cdots$'],
      answer: 3,
      solution: 'An infinite geometric series settles only when $|r| < 1$. The ratios here are $2$, $1$, $\\frac{3}{2}$, and $\\frac{2}{3}$. Only the last is smaller than $1$ in size, so only $9 + 6 + 4 + \\cdots$ converges (to $\\frac{9}{1 - 2/3} = 27$, in fact).',
    },
    {
      q: 'Compute $2 + 6 + 18 + \\cdots + 486$.',
      choices: ['$726$', '$728$', '$730$', '$364$'],
      answer: 1,
      solution: 'The terms are $2 \\cdot 3^{n-1}$, and $486 = 2 \\cdot 3^5$, so there are $6$ terms. Shift and subtract: $3S - S = (6 + \\cdots + 1458) - (2 + \\cdots + 486) = 1458 - 2$, so $2S = 1456$ and $S = 728$.',
    },
    {
      q: 'An infinite geometric series has sum $12$ and common ratio $\\frac{1}{4}$. What is its first term?',
      choices: ['$3$', '$16$', '$9$', '$12$'],
      answer: 2,
      solution: 'From $\\frac{a}{1 - r} = 12$ with $r = \\frac{1}{4}$: $\\frac{a}{3/4} = 12$, so $a = 12 \\times \\frac{3}{4} = 9$. Check: $9 + \\frac{9}{4} + \\frac{9}{16} + \\cdots$ heads to $12$.',
    },
    {
      q: 'A ball is dropped from $8$ meters. Each bounce carries it up to exactly half its previous height, and it bounces forever. What total distance does it travel?',
      choices: ['$24$ meters', '$16$ meters', '$32$ meters', '$20$ meters'],
      answer: 0,
      solution: 'The first drop is $8$. After that, each bounce goes up some height and comes back down the same height: the bounce heights are $4, 2, 1, \\ldots$, summing to $\\frac{4}{1 - 1/2} = 8$, and we count each twice (up and down), giving $16$. Total: $8 + 16 = 24$ meters.',
    },
    {
      q: 'Write $0.\\overline{27}$ as a fraction.',
      choices: ['$\\frac{27}{100}$', '$\\frac{3}{11}$', '$\\frac{3}{10}$', '$\\frac{2}{7}$'],
      answer: 1,
      solution: 'The block $27$ repeats every two digits: $0.272727\\ldots = \\frac{27}{100} + \\frac{27}{10000} + \\cdots$ with ratio $\\frac{1}{100}$. The sum is $\\frac{27/100}{99/100} = \\frac{27}{99} = \\frac{3}{11}$. ($\\frac{27}{100}$ is just the first block, with no repeating tail.)',
    },
  ],
}

const s215 = {
  id: '21.5',
  title: 'Telescoping',
  learn: {
    concepts: [
      {
        heading: 'Split one fraction into two',
        body: 'Here is a magic identity: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Check it by combining the right side: $\\frac{n+1}{n(n+1)} - \\frac{n}{n(n+1)} = \\frac{1}{n(n+1)}$. So $\\frac{1}{2 \\cdot 3} = \\frac{1}{2} - \\frac{1}{3}$, and so on. Splitting like this is called partial fractions.',
      },
      {
        heading: 'The sum collapses like a telescope',
        body: 'Split every term of $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4}$ and watch: $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right)$. Every middle piece cancels with its neighbor, leaving just first minus last: $1 - \\frac{1}{4} = \\frac{3}{4}$. The sum collapses like an old spyglass.',
      },
      {
        heading: 'Products telescope too',
        body: 'In $\\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{10}{9}$, each numerator cancels the next denominator. Everything vanishes except the very first denominator and the very last numerator, leaving $\\frac{10}{1} = 10$.',
      },
      {
        heading: 'When should you look for a telescope?',
        body: 'Watch for terms built from consecutive numbers — products like $n(n+1)$ in a denominator, or fractions like $\\frac{n+1}{n}$. Those are the fingerprints of a telescoping sum or product. When you spot one, split the terms and let the middle cancel.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{9 \\cdot 10}$.',
        steps: [
          'Split each term: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$.',
          'The sum becomes $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{9} - \\frac{1}{10}\\right)$.',
          'All the middle pieces cancel in pairs, leaving first minus last: $1 - \\frac{1}{10} = \\frac{9}{10}$.',
        ],
        answer: 'The sum is $\\frac{9}{10}$',
      },
      {
        problem: 'Compute the product $\\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{10}{9}$.',
        steps: [
          'Each numerator matches the next fraction\'s denominator: the $2$s cancel, the $3$s cancel, all the way up to the $9$s.',
          'Only the first denominator ($1$) and the last numerator ($10$) survive.',
          'The product is $\\frac{10}{1} = 10$.',
        ],
        answer: 'The product is $10$',
      },
      {
        problem: 'Compute $\\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30}$.',
        steps: [
          'These denominators hide consecutive products: $6 = 2 \\cdot 3$, $12 = 3 \\cdot 4$, $20 = 4 \\cdot 5$, $30 = 5 \\cdot 6$. A telescope in disguise!',
          'Split each term: the sum is $\\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right)$.',
          'The middle cancels, leaving $\\frac{1}{2} - \\frac{1}{6} = \\frac{3}{6} - \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$.',
        ],
        answer: 'The sum is $\\frac{1}{3}$',
      },
    ],
  },
  problems: [
    {
      q: 'Which difference equals $\\frac{1}{5 \\cdot 6}$?',
      choices: ['$\\frac{1}{5} + \\frac{1}{6}$', '$\\frac{1}{6} - \\frac{1}{5}$', '$\\frac{1}{5} - \\frac{1}{6}$', '$\\frac{1}{4} - \\frac{1}{6}$'],
      answer: 2,
      solution: 'By the splitting identity, $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, so $\\frac{1}{5 \\cdot 6} = \\frac{1}{5} - \\frac{1}{6}$. Check: $\\frac{6}{30} - \\frac{5}{30} = \\frac{1}{30} = \\frac{1}{5 \\cdot 6}$. (Watch the order: $\\frac{1}{6} - \\frac{1}{5}$ is negative.)',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3}$.',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{5}{6}$'],
      answer: 1,
      solution: 'Split and cancel: $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) = 1 - \\frac{1}{3} = \\frac{2}{3}$. Direct check: $\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$.',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\frac{1}{4 \\cdot 5}$.',
      choices: ['$\\frac{4}{5}$', '$\\frac{5}{6}$', '$\\frac{1}{5}$', '$\\frac{6}{5}$'],
      answer: 0,
      solution: 'The telescope collapses to first minus last: $1 - \\frac{1}{5} = \\frac{4}{5}$. All the middle fractions ($\\frac{1}{2}$, $\\frac{1}{3}$, $\\frac{1}{4}$) appear once positive and once negative, so they vanish.',
    },
    {
      q: 'Compute the product $\\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdot \\frac{5}{4}$.',
      choices: ['$4$', '$1$', '$24$', '$5$'],
      answer: 3,
      solution: 'Each numerator cancels the next denominator: the $2$s, $3$s, and $4$s all vanish. Only the last numerator over the first denominator survives: $\\frac{5}{1} = 5$.',
    },
    {
      q: 'Compute $\\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\cdots + \\frac{1}{9 \\cdot 10}$.',
      choices: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{9}{10}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'The telescope collapses to first minus last: $\\frac{1}{2} - \\frac{1}{10} = \\frac{5}{10} - \\frac{1}{10} = \\frac{4}{10} = \\frac{2}{5}$. (Adding $\\frac{1}{2} + \\frac{1}{10} = \\frac{3}{5}$ is the classic slip — the pieces cancel by subtraction.)',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{99 \\cdot 100}$.',
      choices: ['$\\frac{99}{100}$', '$1$', '$\\frac{100}{101}$', '$\\frac{101}{100}$'],
      answer: 0,
      solution: 'No need to add $99$ fractions! Split each term and collapse: $1 - \\frac{1}{100} = \\frac{99}{100}$. The telescope does all the work.',
    },
    {
      q: 'Compute the product $\\frac{3}{2} \\cdot \\frac{4}{3} \\cdot \\frac{5}{4} \\cdots \\frac{20}{19}$.',
      choices: ['$20$', '$19$', '$10$', '$5$'],
      answer: 2,
      solution: 'Everything cancels except the first denominator and the last numerator: $\\frac{20}{2} = 10$. (The answer $20$ forgets that this product starts at $\\frac{3}{2}$, not $\\frac{2}{1}$ — the leftover denominator is $2$.)',
    },
    {
      q: 'Compute $\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right) \\cdots \\left(1 - \\frac{1}{10}\\right)$.',
      choices: ['$\\frac{9}{10}$', '$\\frac{1}{2}$', '$\\frac{1}{9}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution: 'Rewrite each factor: $1 - \\frac{1}{n} = \\frac{n-1}{n}$. The product becomes $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} \\cdots \\frac{9}{10}$, and everything cancels except the first numerator and last denominator: $\\frac{1}{10}$.',
    },
    {
      q: 'Compute the infinite sum $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\cdots$',
      choices: ['$1$', '$\\frac{1}{2}$', '$2$', 'It grows without bound'],
      answer: 0,
      solution: 'The sum of the first $n$ terms is $1 - \\frac{1}{n+1}$, by telescoping. As $n$ grows, $\\frac{1}{n+1}$ shrinks to nothing, so the sum climbs toward exactly $1$. An infinite pile of fractions, and it fits inside $1$!',
    },
    {
      q: 'Compute $\\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42}$.',
      choices: ['$\\frac{9}{14}$', '$\\frac{5}{14}$', '$\\frac{1}{2}$', '$\\frac{2}{7}$'],
      answer: 1,
      solution: 'The denominators are $2 \\cdot 3, 3 \\cdot 4, 4 \\cdot 5, 5 \\cdot 6, 6 \\cdot 7$ — a hidden telescope. It collapses to $\\frac{1}{2} - \\frac{1}{7} = \\frac{7}{14} - \\frac{2}{14} = \\frac{5}{14}$.',
    },
  ],
}

const challenge = [
  {
    q: 'What is the $30$th term of the arithmetic sequence $8, 15, 22, \\ldots$?',
    choices: ['$211$', '$218$', '$204$', '$210$'],
    answer: 0,
    solution: 'With $a = 8$ and $d = 7$, the $30$th term takes $29$ steps: $8 + 29 \\times 7 = 8 + 203 = 211$. ($218$ takes $30$ steps — one too many.)',
  },
  {
    q: 'Compute $3 + 7 + 11 + \\cdots + 99$.',
    choices: ['$1224$', '$1326$', '$1275$', '$2550$'],
    answer: 2,
    solution: 'Count terms: $\\frac{99 - 3}{4} + 1 = 25$. Sum: $\\frac{25}{2}(3 + 99) = 25 \\times 51 = 1275$.',
  },
  {
    q: 'What is the sum of the first $60$ positive even numbers?',
    choices: ['$3600$', '$3660$', '$3720$', '$1830$'],
    answer: 1,
    solution: 'The evens $2 + 4 + \\cdots + 120$ are twice $1 + 2 + \\cdots + 60$. Since $1 + \\cdots + 60 = \\frac{60 \\times 61}{2} = 1830$, the answer is $2 \\times 1830 = 3660$. In general the first $n$ evens sum to $n(n+1)$.',
  },
  {
    q: 'A geometric sequence has $4$th term $24$ and $7$th term $192$. What is its first term?',
    choices: ['$6$', '$8$', '$2$', '$3$'],
    answer: 3,
    solution: 'From the $4$th to the $7$th term is $3$ multiplications: $24 \\cdot r^3 = 192$, so $r^3 = 8$ and $r = 2$. Step back three times from the $4$th term: $\\frac{24}{2^3} = \\frac{24}{8} = 3$.',
  },
  {
    q: 'An infinite geometric series has first term $8$ and sum $20$. What is the common ratio?',
    choices: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$'],
    answer: 0,
    solution: 'From $\\frac{8}{1 - r} = 20$ we get $1 - r = \\frac{8}{20} = \\frac{2}{5}$, so $r = \\frac{3}{5}$. Check: $|r| < 1$, so the series really does converge.',
  },
  {
    q: 'Write $0.\\overline{63}$ as a fraction in lowest terms.',
    choices: ['$\\frac{63}{100}$', '$\\frac{7}{11}$', '$\\frac{9}{13}$', '$\\frac{7}{10}$'],
    answer: 1,
    solution: 'The two-digit block repeats: $0.\\overline{63} = \\frac{63}{100} + \\frac{63}{10000} + \\cdots = \\frac{63/100}{99/100} = \\frac{63}{99}$. Divide top and bottom by $9$: $\\frac{7}{11}$.',
  },
  {
    q: 'Compute $\\frac{1}{10 \\cdot 11} + \\frac{1}{11 \\cdot 12} + \\cdots + \\frac{1}{19 \\cdot 20}$.',
    choices: ['$\\frac{3}{20}$', '$\\frac{1}{10}$', '$\\frac{1}{20}$', '$\\frac{1}{200}$'],
    answer: 2,
    solution: 'Telescope: the sum collapses to $\\frac{1}{10} - \\frac{1}{20} = \\frac{2}{20} - \\frac{1}{20} = \\frac{1}{20}$. First minus last — the middle all cancels.',
  },
  {
    q: 'How many multiples of $7$ are there between $100$ and $500$?',
    choices: ['$56$', '$58$', '$71$', '$57$'],
    answer: 3,
    solution: 'The first multiple past $100$ is $105 = 7 \\times 15$, and the last before $500$ is $497 = 7 \\times 71$. Count: $71 - 15 + 1 = 57$. (Forgetting the $+1$ gives $56$ — the fencepost again.)',
  },
  {
    q: 'Compute $1 + 2 + 4 + 8 + \\cdots + 1024$.',
    choices: ['$2047$', '$2048$', '$1023$', '$2046$'],
    answer: 0,
    solution: 'A sum of powers of $2$ starting at $1$ is one less than the next power. The next term after $1024$ would be $2048$, so the sum is $2048 - 1 = 2047$. Shift-and-subtract proves it: $2S - S = 2048 - 1$.',
  },
  {
    q: 'A workout plan starts with $10$ push-ups on day $1$ and adds $3$ push-ups each day. How many push-ups in total over the first $14$ days?',
    choices: ['$406$', '$420$', '$413$', '$386$'],
    answer: 2,
    solution: 'Day $14$ has $10 + 13 \\times 3 = 49$ push-ups. Total: $\\frac{14}{2}(10 + 49) = 7 \\times 59 = 413$.',
  },
  {
    q: 'Compute the product $\\left(1 + \\frac{1}{1}\\right)\\left(1 + \\frac{1}{2}\\right)\\left(1 + \\frac{1}{3}\\right) \\cdots \\left(1 + \\frac{1}{49}\\right)$.',
    choices: ['$49$', '$50$', '$25$', '$2$'],
    answer: 1,
    solution: 'Each factor is $1 + \\frac{1}{n} = \\frac{n+1}{n}$, so the product is $\\frac{2}{1} \\cdot \\frac{3}{2} \\cdots \\frac{50}{49}$. Everything cancels except the last numerator over the first denominator: $\\frac{50}{1} = 50$.',
  },
  {
    q: 'The numbers $3, x, 27$ form a geometric sequence, and $x$ is negative. What is $x$?',
    choices: ['$9$', '$15$', '$-15$', '$-9$'],
    answer: 3,
    solution: 'The middle term satisfies $x^2 = 3 \\times 27 = 81$, so $x = 9$ or $x = -9$. Since $x$ is negative, $x = -9$. Check: the ratio is $\\frac{-9}{3} = -3$, and $-9 \\times (-3) = 27$. A geometric sequence can indeed alternate signs!',
  },
]

const worksheet = [
  {
    q: 'Find the $25$th term of the arithmetic sequence $6, 10, 14, \\ldots$',
    answer: '$102$',
    solution: 'With $a = 6$ and $d = 4$, the $25$th term takes $24$ steps: $6 + 24 \\times 4 = 6 + 96 = 102$.',
  },
  {
    q: 'Compute $1 + 2 + 3 + \\cdots + 60$.',
    answer: '$1830$',
    solution: 'Use $\\frac{n(n+1)}{2}$ with $n = 60$: $\\frac{60 \\times 61}{2} = 30 \\times 61 = 1830$.',
  },
  {
    q: 'Find the $7$th term of the geometric sequence $2, 6, 18, \\ldots$',
    answer: '$1458$',
    solution: 'The ratio is $3$, and the $7$th term takes $6$ multiplications: $2 \\cdot 3^6 = 2 \\times 729 = 1458$.',
  },
  {
    q: 'Compute $5 + 10 + 15 + \\cdots + 100$.',
    answer: '$1050$',
    solution: 'There are $\\frac{100 - 5}{5} + 1 = 20$ terms. Sum: $\\frac{20}{2}(5 + 100) = 10 \\times 105 = 1050$.',
  },
  {
    q: 'Compute the infinite sum $12 + 6 + 3 + \\frac{3}{2} + \\cdots$',
    answer: '$24$',
    solution: 'The ratio is $\\frac{1}{2}$, so the sum is $\\frac{a}{1 - r} = \\frac{12}{1 - \\frac{1}{2}} = 24$. Each term fills half the gap that remains.',
  },
  {
    q: 'Write $0.\\overline{5}$ as a fraction.',
    answer: '$\\frac{5}{9}$',
    solution: '$0.555\\ldots = \\frac{5}{10} + \\frac{5}{100} + \\cdots$, a geometric series with ratio $\\frac{1}{10}$. Sum: $\\frac{5/10}{9/10} = \\frac{5}{9}$.',
  },
  {
    q: 'The $5$th term of an arithmetic sequence is $17$ and the $12$th term is $45$. Find the $20$th term.',
    answer: '$77$',
    solution: 'From the $5$th to the $12$th term is $7$ steps covering $45 - 17 = 28$, so $d = 4$. The first term is $17 - 4 \\times 4 = 1$. The $20$th term is $1 + 19 \\times 4 = 77$. (Shortcut: from the $12$th term, take $8$ more steps: $45 + 32 = 77$.)',
  },
  {
    q: 'Compute $5 + 10 + 20 + \\cdots + 640$.',
    answer: '$1275$',
    solution: 'The terms are $5 \\cdot 2^{n-1}$ and $640 = 5 \\cdot 2^7$, so there are $8$ terms. Shift and subtract: $2S - S = 1280 - 5$, so $S = 1275$.',
  },
  {
    q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{24 \\cdot 25}$.',
    answer: '$\\frac{24}{25}$',
    solution: 'Split each term as $\\frac{1}{n} - \\frac{1}{n+1}$ and let the telescope collapse: $1 - \\frac{1}{25} = \\frac{24}{25}$.',
  },
  {
    q: 'A ball is dropped from $10$ meters and each bounce reaches $\\frac{3}{5}$ of its previous height, bouncing forever. Find the total distance it travels.',
    answer: '$40$ meters',
    solution: 'The first drop is $10$. The bounce heights are $6, \\frac{18}{5}, \\ldots$, an infinite geometric series with sum $\\frac{6}{1 - \\frac{3}{5}} = \\frac{6}{\\frac{2}{5}} = 15$. Each bounce is traveled twice (up and down), adding $2 \\times 15 = 30$. Total: $10 + 30 = 40$ meters.',
  },
]

export default {
  id: 'intro-algebra-ch21',
  book: 'intro-algebra',
  number: 21,
  title: 'Sequences & Series',
  intro:
    'A sequence is a list of numbers that follows a pattern, and a series is what you get when you add them up. In this chapter you will learn to leap straight to the millionth term, to sum a hundred numbers in one line, and to watch infinite sums collapse into a single tidy answer.',
  sections: [s211, s212, s213, s214, s215],
  challenge,
  worksheet,
}
