// Prealgebra — Chapter 1: Properties of Arithmetic
// All problems, explanations, and examples are original MathQuest content.

const s12 = {
  id: '1.2',
  title: 'Addition',
  learn: {
    concepts: [
      {
        heading: 'Numbers can swap places',
        body: 'When you add two numbers, the order does not matter: $a + b = b + a$. So $8 + 5$ and $5 + 8$ are both $13$. Mathematicians call this the commutative property of addition — "commute" means to move around!',
      },
      {
        heading: 'Grouping does not matter either',
        body: 'When you add three or more numbers, you can group them any way you like: $(a + b) + c = a + (b + c)$. This is the associative property. It means you get to choose which pair to add first.',
      },
      {
        heading: 'Zero is invisible',
        body: 'Adding $0$ to any number leaves it unchanged: $a + 0 = a$. That is why $0$ is called the identity for addition — the number keeps its identity.',
      },
      {
        heading: 'Rearrange to make it easy',
        body: 'These properties are not just rules to memorize — they are permission slips! You may reorder and regroup any sum to make it friendlier. Look for pairs that make nice round numbers like $10$, $100$, or $1000$.',
      },
    ],
    examples: [
      {
        problem: 'Compute $47 + 68 + 53$ without a calculator.',
        steps: [
          'Adding left to right ($47 + 68 = 115$, then $115 + 53$) works, but there is a slicker way.',
          'Notice that $47 + 53 = 100$ — a lovely round number. The commutative property lets us swap: $47 + 68 + 53 = 47 + 53 + 68$.',
          'Now group the friendly pair: $(47 + 53) + 68 = 100 + 68$.',
        ],
        answer: '$47 + 68 + 53 = 168$',
      },
      {
        problem: 'Compute $1 + 2 + 3 + \\cdots + 9 + 10$.',
        steps: [
          'Instead of adding one number at a time, pair the ends: $1 + 10 = 11$, $2 + 9 = 11$, $3 + 8 = 11$, $4 + 7 = 11$, $5 + 6 = 11$.',
          'Every pair adds to $11$, and there are $5$ pairs.',
          'So the whole sum is $5 \\times 11 = 55$.',
        ],
        answer: '$1 + 2 + \\cdots + 10 = 55$',
      },
      {
        problem: 'What number goes in the blank? $38 + \\square = 71$',
        steps: [
          'Count up from $38$ to $71$ in easy hops.',
          'From $38$ to $40$ is $2$. From $40$ to $70$ is $30$. From $70$ to $71$ is $1$.',
          'Total hop: $2 + 30 + 1 = 33$.',
        ],
        answer: '$\\square = 33$, since $38 + 33 = 71$',
      },
    ],
  },
  problems: [
    {
      q: 'Which equation shows the commutative property of addition?',
      choices: ['$8 + 5 = 5 + 8$', '$(3 + 4) + 5 = 3 + (4 + 5)$', '$7 + 0 = 7$', '$6 + 6 = 12$'],
      answer: 0,
      solution: 'The commutative property says two numbers can swap places when added: $a + b = b + a$. Only $8 + 5 = 5 + 8$ shows a swap. The grouping equation is the associative property, and $7 + 0 = 7$ shows the identity property.',
    },
    {
      q: 'What is $0 + 236$?',
      choices: ['$0$', '$237$', '$236$', '$2360$'],
      answer: 2,
      solution: 'Adding $0$ never changes a number: $0 + 236 = 236$. Zero is the identity for addition.',
    },
    {
      q: 'Compute $25 + 79 + 75$.',
      choices: ['$169$', '$179$', '$189$', '$199$'],
      answer: 1,
      solution: 'Swap so the friendly pair meets: $25 + 75 = 100$. Then $100 + 79 = 179$.',
    },
    {
      q: 'Compute $18 + 27 + 2 + 3$.',
      choices: ['$40$', '$48$', '$52$', '$50$'],
      answer: 3,
      solution: 'Pair numbers that make round sums: $18 + 2 = 20$ and $27 + 3 = 30$. Then $20 + 30 = 50$.',
    },
    {
      q: 'What number goes in the blank? $46 + \\square = 102$',
      choices: ['$66$', '$54$', '$56$', '$64$'],
      answer: 2,
      solution: 'Count up from $46$: to reach $100$ takes $54$, and $2$ more reaches $102$, so the blank is $54 + 2 = 56$. Check: $46 + 56 = 102$. ✓',
    },
    {
      q: 'To compute $199 + 87$, Maya first computes $200 + 87 = 287$. What should she do next?',
      choices: ['Add $1$ to get $288$', 'Nothing — the answer is $287$', 'Subtract $87$', 'Subtract $1$ to get $286$'],
      answer: 3,
      solution: 'Maya used $200$, which is $1$ more than $199$. Her total is $1$ too big, so she subtracts $1$: $199 + 87 = 287 - 1 = 286$.',
    },
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 20$.',
      choices: ['$210$', '$200$', '$190$', '$220$'],
      answer: 0,
      solution: 'Pair the ends: $1 + 20 = 21$, $2 + 19 = 21$, and so on. There are $10$ pairs, each summing to $21$, so the total is $10 \\times 21 = 210$.',
    },
    {
      q: 'If $a + b = 40$ and $a + b + c = 63$, what is $c$?',
      choices: ['$103$', '$23$', '$27$', '$33$'],
      answer: 1,
      solution: 'The sum $a + b + c$ is just $(a + b) + c = 40 + c$. Since $40 + c = 63$, count up from $40$ to $63$: that is $23$. So $c = 23$.',
    },
    {
      q: 'Compute $96 + 97 + 98 + 99 + 100 + 101 + 102 + 103 + 104$.',
      choices: ['$890$', '$1000$', '$900$', '$910$'],
      answer: 2,
      solution: 'The numbers balance around $100$: $96 + 104 = 200$, $97 + 103 = 200$, $98 + 102 = 200$, $99 + 101 = 200$, and $100$ alone. That is $4 \\times 200 + 100 = 900$. Another view: nine numbers averaging $100$ give $9 \\times 100 = 900$.',
    },
    {
      q: 'What is the sum of the first ten odd numbers, $1 + 3 + 5 + \\cdots + 19$?',
      choices: ['$90$', '$110$', '$121$', '$100$'],
      answer: 3,
      solution: 'Pair the ends: $1 + 19 = 20$, $3 + 17 = 20$, $5 + 15 = 20$, $7 + 13 = 20$, $9 + 11 = 20$. Five pairs of $20$ make $5 \\times 20 = 100$. Fun fact: the sum of the first $n$ odd numbers is always $n \\times n$ — here $10 \\times 10 = 100$!',
    },
  ],
}

const s13 = {
  id: '1.3',
  title: 'Multiplication',
  learn: {
    concepts: [
      {
        heading: 'Factors can swap places',
        body: 'Just like addition, multiplication is commutative: $a \\times b = b \\times a$. A $3 \\times 4$ grid of dots and a $4 \\times 3$ grid hold exactly the same number of dots — you just turned the grid sideways.',
      },
      {
        heading: 'Group factors any way you like',
        body: 'Multiplication is also associative: $(a \\times b) \\times c = a \\times (b \\times c)$. With a string of factors, you choose which pair to multiply first — so hunt for pairs that make $10$, $100$, or $1000$.',
      },
      {
        heading: 'The special numbers $1$ and $0$',
        body: 'Multiplying by $1$ changes nothing: $a \\times 1 = a$, so $1$ is the identity for multiplication. Multiplying by $0$ wipes everything out: $a \\times 0 = 0$, always.',
      },
      {
        heading: 'The distributive property',
        body: 'Multiplication distributes over addition: $a(b + c) = ab + ac$. This is the bridge between the two operations, and it works in both directions — you can break a hard product apart, or pull a common factor out.',
      },
    ],
    examples: [
      {
        problem: 'Compute $4 \\times 17 \\times 25$.',
        steps: [
          'Do not grind through $4 \\times 17$ first! Look for the friendly pair.',
          '$4 \\times 25 = 100$, so swap and regroup: $4 \\times 17 \\times 25 = (4 \\times 25) \\times 17$.',
          'Now it is easy: $100 \\times 17 = 1700$.',
        ],
        answer: '$4 \\times 17 \\times 25 = 1700$',
      },
      {
        problem: 'Compute $7 \\times 98$ without long multiplication.',
        steps: [
          'Think of $98$ as $100 - 2$.',
          'Distribute: $7 \\times (100 - 2) = 7 \\times 100 - 7 \\times 2$.',
          'That is $700 - 14 = 686$.',
        ],
        answer: '$7 \\times 98 = 686$',
      },
      {
        problem: 'Compute $6 \\times 13 + 6 \\times 7$.',
        steps: [
          'Both products share a factor of $6$, so run the distributive property backwards.',
          '$6 \\times 13 + 6 \\times 7 = 6 \\times (13 + 7) = 6 \\times 20$.',
        ],
        answer: '$6 \\times 13 + 6 \\times 7 = 120$',
      },
    ],
  },
  problems: [
    {
      q: 'Which equation shows the commutative property of multiplication?',
      choices: ['$(2 \\times 3) \\times 4 = 2 \\times (3 \\times 4)$', '$9 \\times 4 = 4 \\times 9$', '$5 \\times 1 = 5$', '$5 \\times 0 = 0$'],
      answer: 1,
      solution: 'Commutative means the two factors swap places: $9 \\times 4 = 4 \\times 9$. The first equation regroups three factors (associative), and the others show the special roles of $1$ and $0$.',
    },
    {
      q: 'What is $87 \\times 1$?',
      choices: ['$87$', '$88$', '$0$', '$870$'],
      answer: 0,
      solution: 'Multiplying by $1$ never changes a number: $87 \\times 1 = 87$. That is why $1$ is called the identity for multiplication.',
    },
    {
      q: 'What is $452 \\times 0$?',
      choices: ['$452$', '$1$', '$0$', '$4520$'],
      answer: 2,
      solution: 'Any number times $0$ is $0$ — even a big number like $452$. Zero groups of anything is nothing!',
    },
    {
      q: 'Compute $2 \\times 38 \\times 5$.',
      choices: ['$370$', '$376$', '$390$', '$380$'],
      answer: 3,
      solution: 'Pair the friendly factors first: $2 \\times 5 = 10$. Then $10 \\times 38 = 380$.',
    },
    {
      q: 'Compute $4 \\times 9 \\times 25$.',
      choices: ['$900$', '$800$', '$1000$', '$860$'],
      answer: 0,
      solution: 'Swap so that $4$ meets $25$: $4 \\times 25 = 100$. Then $100 \\times 9 = 900$.',
    },
    {
      q: 'Compute $6 \\times 99$.',
      choices: ['$606$', '$594$', '$600$', '$588$'],
      answer: 1,
      solution: 'Write $99$ as $100 - 1$ and distribute: $6 \\times 99 = 6 \\times 100 - 6 \\times 1 = 600 - 6 = 594$.',
    },
    {
      q: 'You know that $14 \\times 25 = 350$. What is $14 \\times 26$?',
      choices: ['$375$', '$360$', '$364$', '$376$'],
      answer: 2,
      solution: '$14 \\times 26$ means one more group of $14$ than $14 \\times 25$. So $14 \\times 26 = 350 + 14 = 364$. (Careful: we add another $14$, not another $25$!)',
    },
    {
      q: 'Compute $17 \\times 23 + 17 \\times 77$.',
      choices: ['$1600$', '$1710$', '$3400$', '$1700$'],
      answer: 3,
      solution: 'Pull out the common factor: $17 \\times 23 + 17 \\times 77 = 17 \\times (23 + 77) = 17 \\times 100 = 1700$.',
    },
    {
      q: 'Compute $25 \\times 32 \\times 125$.',
      choices: ['$10{,}000$', '$100{,}000$', '$125{,}000$', '$80{,}000$'],
      answer: 1,
      solution: 'Break $32$ into helpful pieces: $32 = 4 \\times 8$. Then $25 \\times 4 = 100$ and $8 \\times 125 = 1000$, so the product is $100 \\times 1000 = 100{,}000$.',
    },
    {
      q: 'Two whole numbers, each bigger than $1$, multiply to $24$. What is the largest their sum could be?',
      choices: ['$10$', '$11$', '$25$', '$14$'],
      answer: 3,
      solution: 'List the ways: $2 \\times 12$, $3 \\times 8$, $4 \\times 6$. Their sums are $14$, $11$, and $10$. The largest is $2 + 12 = 14$. (We cannot use $1 \\times 24$ since each number must be bigger than $1$.)',
    },
  ],
}

const s14 = {
  id: '1.4',
  title: 'Negation',
  learn: {
    concepts: [
      {
        heading: 'Every number has an opposite',
        body: 'The negation (or opposite) of a number sits the same distance from $0$, but on the other side of the number line. Opposites cancel: $n + (-n) = 0$. The opposite of $7$ is $-7$, and the opposite of $-7$ is $7$.',
      },
      {
        heading: 'Negation is multiplying by $-1$',
        body: 'Writing $-n$ means exactly $(-1) \\times n$. This one idea explains all the sign rules — negating is just one more factor of $-1$.',
      },
      {
        heading: 'Two flips bring you back',
        body: 'Negating twice returns the original number: $-(-n) = n$. Flip to the other side of the number line, flip back — you are home again.',
      },
      {
        heading: 'Count the minus signs',
        body: 'When multiplying several numbers, each negative factor flips the sign once. An even number of negative factors gives a positive product; an odd number gives a negative product.',
      },
    ],
    examples: [
      {
        problem: 'Simplify $-(-(-5))$.',
        steps: [
          'Work from the inside out. The innermost part is $-5$.',
          'Negate once: $-(-5) = 5$.',
          'Negate again: $-(5) = -5$. Three flips is an odd number, so we end up negative.',
        ],
        answer: '$-(-(-5)) = -5$',
      },
      {
        problem: 'Compute $(-4) \\times (-7)$.',
        steps: [
          'Think of $(-4) \\times (-7)$ as $(-1) \\times 4 \\times (-1) \\times 7$.',
          'The two factors of $-1$ multiply to $+1$ — they cancel each other.',
          'That leaves $4 \\times 7 = 28$.',
        ],
        answer: '$(-4) \\times (-7) = 28$',
      },
      {
        problem: 'Compute $(-2) \\times 3 \\times (-5)$.',
        steps: [
          'Count the negative factors: there are $2$, an even number, so the answer is positive.',
          'Multiply the sizes: $2 \\times 3 \\times 5 = 30$.',
        ],
        answer: '$(-2) \\times 3 \\times (-5) = 30$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the opposite of $12$?',
      choices: ['$-12$', '$12$', '$\\frac{1}{12}$', '$0$'],
      answer: 0,
      solution: 'The opposite of a number is its negation — same distance from $0$, other side of the number line. The opposite of $12$ is $-12$. (Careful: $\\frac{1}{12}$ is the reciprocal, a different idea!)',
    },
    {
      q: 'Simplify $-(-9)$.',
      choices: ['$-9$', '$9$', '$0$', '$81$'],
      answer: 1,
      solution: 'Negating twice brings you back: $-(-9) = 9$. Two flips on the number line return you to the positive side.',
    },
    {
      q: 'What is $15 + (-15)$?',
      choices: ['$30$', '$-30$', '$0$', '$1$'],
      answer: 2,
      solution: 'A number plus its opposite is always $0$: that is exactly what "opposite" means. $15 + (-15) = 0$.',
    },
    {
      q: 'Compute $(-6) \\times 4$.',
      choices: ['$24$', '$-24$', '$-10$', '$2$'],
      answer: 1,
      solution: 'One negative factor makes the product negative: $(-6) \\times 4 = -(6 \\times 4) = -24$.',
    },
    {
      q: 'Compute $(-8) \\times (-3)$.',
      choices: ['$-24$', '$-11$', '$11$', '$24$'],
      answer: 3,
      solution: 'Two negative factors: the two $-1$s cancel, so the product is positive. $(-8) \\times (-3) = 24$.',
    },
    {
      q: 'Simplify $-(-(-2))$.',
      choices: ['$2$', '$-2$', '$0$', '$-8$'],
      answer: 1,
      solution: 'Count the flips: three negations is an odd number, so the result is negative. $-(-(-2)) = -2$.',
    },
    {
      q: 'What is $(-1) \\times (-1) \\times (-1) \\times (-1) \\times (-1)$?',
      choices: ['$-5$', '$5$', '$-1$', '$1$'],
      answer: 2,
      solution: 'Five factors of $-1$: an odd count of negatives gives a negative product, and the sizes multiply to $1$. So the answer is $-1$.',
    },
    {
      q: 'Compute $(-2) \\times (-3) \\times (-1) \\times 4$.',
      choices: ['$-24$', '$24$', '$-10$', '$10$'],
      answer: 0,
      solution: 'Count the negative factors: three of them, an odd number, so the product is negative. The sizes give $2 \\times 3 \\times 1 \\times 4 = 24$, so the answer is $-24$.',
    },
    {
      q: 'Six negative numbers are multiplied together. What can you say about the product?',
      choices: ['It is positive', 'It is negative', 'It is zero', 'It could be either'],
      answer: 0,
      solution: 'Each negative factor flips the sign once. Six flips is an even number, so all the flips cancel and the product is positive.',
    },
    {
      q: 'Compute $(-1) + (-1) \\times (-1)$.',
      choices: ['$-2$', '$-1$', '$2$', '$0$'],
      answer: 3,
      solution: 'Multiplication comes before addition! First $(-1) \\times (-1) = 1$. Then $(-1) + 1 = 0$.',
    },
  ],
}

const s15 = {
  id: '1.5',
  title: 'Subtraction',
  learn: {
    concepts: [
      {
        heading: 'Subtraction is adding the opposite',
        body: 'Every subtraction is secretly an addition: $a - b = a + (-b)$. This is great news, because addition lets us swap and regroup — so once we rewrite, we get all those superpowers back.',
      },
      {
        heading: 'Order matters now',
        body: 'Unlike addition, $a - b$ and $b - a$ are usually different. In fact they are opposites: $b - a = -(a - b)$. So $9 - 4 = 5$ but $4 - 9 = -5$.',
      },
      {
        heading: 'Subtracting a negative is adding',
        body: 'Taking away a debt makes you richer! $a - (-b) = a + b$, because the opposite of $-b$ is $b$. So $8 - (-5) = 8 + 5 = 13$.',
      },
      {
        heading: 'Keep each sign glued to its number',
        body: 'In a long chain like $23 - 58 + 77 - 42$, think of it as adding signed numbers: $23 + (-58) + 77 + (-42)$. Now you may reorder freely — just keep every minus sign attached to its number.',
      },
    ],
    examples: [
      {
        problem: 'Compute $154 - 97$.',
        steps: [
          '$97$ is awkward, but $100$ is friendly. Subtract $100$ instead: $154 - 100 = 54$.',
          'We took away $3$ too many, so give $3$ back: $54 + 3 = 57$.',
        ],
        answer: '$154 - 97 = 57$',
      },
      {
        problem: 'Compute $8 - (-5)$.',
        steps: [
          'Subtracting means adding the opposite, and the opposite of $-5$ is $5$.',
          'So $8 - (-5) = 8 + 5 = 13$.',
        ],
        answer: '$8 - (-5) = 13$',
      },
      {
        problem: 'Compute $23 - 58 + 77 - 42$.',
        steps: [
          'Rewrite as signed addition: $23 + (-58) + 77 + (-42)$.',
          'Reorder into friendly pairs: $(23 + 77) + ((-58) + (-42))$.',
          'That is $100 + (-100) = 0$.',
        ],
        answer: '$23 - 58 + 77 - 42 = 0$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $9 - 13$.',
      choices: ['$4$', '$-4$', '$-3$', '$22$'],
      answer: 1,
      solution: '$13$ is bigger than $9$, so the answer is negative. Since $13 - 9 = 4$, we get $9 - 13 = -4$.',
    },
    {
      q: 'Compute $7 - (-4)$.',
      choices: ['$3$', '$-11$', '$11$', '$-3$'],
      answer: 2,
      solution: 'Subtracting a negative is adding: $7 - (-4) = 7 + 4 = 11$.',
    },
    {
      q: 'Which addition means the same thing as $15 - 8$?',
      choices: ['$15 + (-8)$', '$(-15) + 8$', '$8 + (-15)$', '$-(15 + 8)$'],
      answer: 0,
      solution: 'Subtraction is adding the opposite: $15 - 8 = 15 + (-8)$. The choice $8 + (-15)$ equals $8 - 15$, which is the opposite of what we want.',
    },
    {
      q: 'Compute $300 - 178$.',
      choices: ['$132$', '$128$', '$222$', '$122$'],
      answer: 3,
      solution: 'Count up from $178$: adding $22$ reaches $200$, then $100$ more reaches $300$. Total: $22 + 100 = 122$.',
    },
    {
      q: 'Compute $41 - 99$.',
      choices: ['$58$', '$-58$', '$-68$', '$-57$'],
      answer: 1,
      solution: 'Subtract $100$ instead, then give $1$ back: $41 - 100 = -59$, and $-59 + 1 = -58$.',
    },
    {
      q: 'Compute $62 - 17 - 12$.',
      choices: ['$33$', '$43$', '$23$', '$37$'],
      answer: 0,
      solution: 'Reorder the signed numbers: $62 + (-17) + (-12) = 62 - 12 - 17 = 50 - 17 = 33$.',
    },
    {
      q: 'If $x - y = 8$, what is $y - x$?',
      choices: ['$8$', '$\\frac{1}{8}$', '$-8$', '$0$'],
      answer: 2,
      solution: 'Swapping the order of a subtraction negates the answer: $y - x = -(x - y) = -8$.',
    },
    {
      q: 'Compute $555 - 297$.',
      choices: ['$258$', '$252$', '$268$', '$262$'],
      answer: 0,
      solution: 'Subtract $300$, then give back the extra $3$: $555 - 300 = 255$, and $255 + 3 = 258$.',
    },
    {
      q: 'Compute $20 - 19 + 18 - 17 + \\cdots + 2 - 1$.',
      choices: ['$0$', '$5$', '$20$', '$10$'],
      answer: 3,
      solution: 'Group in pairs: $(20 - 19) + (18 - 17) + \\cdots + (2 - 1)$. Each pair equals $1$, and there are $10$ pairs, so the total is $10$.',
    },
    {
      q: 'Compute $25 - (10 - 4)$.',
      choices: ['$11$', '$19$', '$39$', '$21$'],
      answer: 1,
      solution: 'Parentheses first: $10 - 4 = 6$. Then $25 - 6 = 19$. (Note this is NOT the same as $25 - 10 - 4 = 11$ — the parentheses change everything!)',
    },
  ],
}

const s16 = {
  id: '1.6',
  title: 'Reciprocals',
  learn: {
    concepts: [
      {
        heading: 'The multiply-to-one partner',
        body: 'The reciprocal of a number $n$ is $\\frac{1}{n}$ — the number you multiply $n$ by to get exactly $1$. For example, $8 \\times \\frac{1}{8} = 1$, so $\\frac{1}{8}$ is the reciprocal of $8$.',
      },
      {
        heading: 'To flip a fraction, flip it!',
        body: 'The reciprocal of $\\frac{a}{b}$ is $\\frac{b}{a}$, because $\\frac{a}{b} \\times \\frac{b}{a} = \\frac{ab}{ab} = 1$. Flipping is the whole trick.',
      },
      {
        heading: 'Flip twice, get back home',
        body: 'The reciprocal of a reciprocal is the original number — flipping a fraction twice puts the top and bottom back where they started. And negative numbers keep their sign: the reciprocal of $-4$ is $-\\frac{1}{4}$, since a negative times a negative gives $+1$.',
      },
      {
        heading: 'Zero is left out',
        body: '$0$ has no reciprocal. No number times $0$ can ever equal $1$, because anything times $0$ is $0$. Every other number has exactly one reciprocal.',
      },
    ],
    examples: [
      {
        problem: 'Find the reciprocal of $8$, and check it.',
        steps: [
          'The reciprocal of $8$ is $\\frac{1}{8}$.',
          'Check by multiplying: $8 \\times \\frac{1}{8} = \\frac{8}{8} = 1$. It works!',
        ],
        answer: 'The reciprocal of $8$ is $\\frac{1}{8}$',
      },
      {
        problem: 'Find the reciprocal of $\\frac{3}{4}$.',
        steps: [
          'Flip the fraction: top and bottom trade places.',
          '$\\frac{3}{4}$ becomes $\\frac{4}{3}$. Check: $\\frac{3}{4} \\times \\frac{4}{3} = \\frac{12}{12} = 1$.',
        ],
        answer: 'The reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$',
      },
      {
        problem: 'What is the reciprocal of the reciprocal of $\\frac{5}{9}$?',
        steps: [
          'First flip: $\\frac{5}{9}$ becomes $\\frac{9}{5}$.',
          'Second flip: $\\frac{9}{5}$ becomes $\\frac{5}{9}$ — right back where we started.',
        ],
        answer: 'The reciprocal of the reciprocal of $\\frac{5}{9}$ is $\\frac{5}{9}$',
      },
    ],
  },
  problems: [
    {
      q: 'What is the reciprocal of $6$?',
      choices: ['$-6$', '$\\frac{1}{6}$', '$6$', '$0.6$'],
      answer: 1,
      solution: 'The reciprocal of $6$ is the number that multiplies with $6$ to give $1$: that is $\\frac{1}{6}$, since $6 \\times \\frac{1}{6} = 1$.',
    },
    {
      q: 'What is $12 \\times \\frac{1}{12}$?',
      choices: ['$0$', '$12$', '$144$', '$1$'],
      answer: 3,
      solution: 'A number times its reciprocal is always $1$: $12 \\times \\frac{1}{12} = \\frac{12}{12} = 1$.',
    },
    {
      q: 'What is the reciprocal of $\\frac{2}{7}$?',
      choices: ['$\\frac{7}{2}$', '$\\frac{2}{7}$', '$-\\frac{2}{7}$', '$\\frac{1}{7}$'],
      answer: 0,
      solution: 'Flip the fraction: the reciprocal of $\\frac{2}{7}$ is $\\frac{7}{2}$. Check: $\\frac{2}{7} \\times \\frac{7}{2} = \\frac{14}{14} = 1$.',
    },
    {
      q: 'Which number has no reciprocal?',
      choices: ['$1$', '$-1$', '$0$', '$\\frac{1}{2}$'],
      answer: 2,
      solution: 'Anything times $0$ is $0$, so nothing times $0$ can equal $1$. That means $0$ has no reciprocal — it is the only number left out.',
    },
    {
      q: 'What is the reciprocal of $1$?',
      choices: ['$0$', '$1$', '$-1$', '$\\frac{1}{10}$'],
      answer: 1,
      solution: 'We need the number that multiplies with $1$ to give $1$ — and $1 \\times 1 = 1$. So $1$ is its own reciprocal!',
    },
    {
      q: 'What is the reciprocal of $-4$?',
      choices: ['$4$', '$\\frac{1}{4}$', '$-4$', '$-\\frac{1}{4}$'],
      answer: 3,
      solution: 'The product must equal $+1$, so the reciprocal keeps the minus sign: $(-4) \\times \\left(-\\frac{1}{4}\\right) = 1$. The reciprocal of $-4$ is $-\\frac{1}{4}$.',
    },
    {
      q: 'A number $x$ satisfies $x \\times \\frac{5}{3} = 1$. What is $x$?',
      choices: ['$\\frac{3}{5}$', '$\\frac{5}{3}$', '$-\\frac{5}{3}$', '$1$'],
      answer: 0,
      solution: 'If $x$ times $\\frac{5}{3}$ equals $1$, then $x$ is the reciprocal of $\\frac{5}{3}$. Flip it: $x = \\frac{3}{5}$.',
    },
    {
      q: 'What is the reciprocal of $2 \\times \\frac{5}{2}$?',
      choices: ['$5$', '$\\frac{1}{5}$', '$\\frac{2}{5}$', '$\\frac{5}{2}$'],
      answer: 1,
      solution: 'Simplify inside first: $2 \\times \\frac{5}{2} = 5$. The reciprocal of $5$ is $\\frac{1}{5}$.',
    },
    {
      q: 'Compute $\\frac{7}{3} \\times \\frac{3}{7} \\times 9$.',
      choices: ['$1$', '$\\frac{9}{49}$', '$9$', '$\\frac{49}{9}$'],
      answer: 2,
      solution: '$\\frac{7}{3}$ and $\\frac{3}{7}$ are reciprocals, so they multiply to $1$. That leaves $1 \\times 9 = 9$.',
    },
    {
      q: 'Which of these numbers is bigger than its own reciprocal?',
      choices: ['$\\frac{1}{2}$', '$1$', '$-2$', '$3$'],
      answer: 3,
      solution: 'Check each: the reciprocal of $3$ is $\\frac{1}{3}$, and $3 > \\frac{1}{3}$. ✓ For $\\frac{1}{2}$, the reciprocal is $2$, which is bigger. For $1$, they are equal. For $-2$, the reciprocal is $-\\frac{1}{2}$, and $-\\frac{1}{2}$ is actually greater than $-2$ on the number line!',
    },
  ],
}

const s17 = {
  id: '1.7',
  title: 'Division',
  learn: {
    concepts: [
      {
        heading: 'Division is multiplying by the reciprocal',
        body: 'Dividing by $b$ means multiplying by $\\frac{1}{b}$: that is, $a \\div b = a \\times \\frac{1}{b}$. Every division problem is secretly a multiplication problem — which means all our multiplication tricks still work.',
      },
      {
        heading: 'Order matters',
        body: '$a \\div b$ and $b \\div a$ are usually different: $12 \\div 3 = 4$, but $3 \\div 12 = \\frac{1}{4}$. In fact, they are reciprocals of each other!',
      },
      {
        heading: 'Signs work just like multiplication',
        body: 'Negative divided by positive is negative; negative divided by negative is positive. Count the minus signs, just as with products.',
      },
      {
        heading: 'Zero: one direction fine, one forbidden',
        body: '$0$ divided by any nonzero number is $0$ — sharing nothing gives everyone nothing. But dividing BY zero is undefined: $a \\div 0$ would need a number that multiplies with $0$ to give $a$, and no such number exists.',
      },
    ],
    examples: [
      {
        problem: 'Compute $(-72) \\div 8$.',
        steps: [
          'Ignore the sign for a moment: $72 \\div 8 = 9$.',
          'One negative in the problem means a negative answer.',
        ],
        answer: '$(-72) \\div 8 = -9$',
      },
      {
        problem: 'Compute $400 \\div 25$ without long division.',
        steps: [
          'Doubling both numbers does not change the answer (both get twice as big).',
          'Double twice: $400 \\div 25 = 800 \\div 50 = 1600 \\div 100$.',
          'Now it is easy: $1600 \\div 100 = 16$.',
        ],
        answer: '$400 \\div 25 = 16$',
      },
      {
        problem: 'Compute $12 \\div \\frac{1}{2}$.',
        steps: [
          'Dividing by a number means multiplying by its reciprocal, and the reciprocal of $\\frac{1}{2}$ is $2$.',
          'So $12 \\div \\frac{1}{2} = 12 \\times 2 = 24$. (It makes sense: there are $24$ halves in $12$ wholes!)',
        ],
        answer: '$12 \\div \\frac{1}{2} = 24$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $56 \\div 8$.',
      choices: ['$8$', '$6$', '$7$', '$9$'],
      answer: 2,
      solution: 'We need the number that multiplies with $8$ to make $56$: since $7 \\times 8 = 56$, we get $56 \\div 8 = 7$.',
    },
    {
      q: 'What is $0 \\div 17$?',
      choices: ['$0$', '$17$', 'Undefined', '$\\frac{1}{17}$'],
      answer: 0,
      solution: 'Splitting nothing into $17$ parts gives nothing in each part: $0 \\div 17 = 0$. (Dividing zero is fine — dividing BY zero is the forbidden one.)',
    },
    {
      q: 'What is $23 \\div 0$?',
      choices: ['$0$', '$23$', '$1$', 'Undefined'],
      answer: 3,
      solution: '$23 \\div 0$ would be a number that multiplies with $0$ to give $23$. But anything times $0$ is $0$, never $23$. No such number exists, so division by zero is undefined.',
    },
    {
      q: 'Compute $(-45) \\div 9$.',
      choices: ['$-5$', '$5$', '$-6$', '$-4$'],
      answer: 0,
      solution: '$45 \\div 9 = 5$, and one negative sign makes the answer negative: $(-45) \\div 9 = -5$.',
    },
    {
      q: 'Compute $(-64) \\div (-4)$.',
      choices: ['$-16$', '$16$', '$-12$', '$12$'],
      answer: 1,
      solution: 'Two negatives cancel, so the answer is positive: $64 \\div 4 = 16$.',
    },
    {
      q: 'Compute $12 \\div \\frac{1}{2}$.',
      choices: ['$6$', '$24$', '$\\frac{1}{24}$', '$14$'],
      answer: 1,
      solution: 'Dividing by $\\frac{1}{2}$ means multiplying by its reciprocal, $2$: so $12 \\div \\frac{1}{2} = 12 \\times 2 = 24$. Think of it as counting the halves inside $12$.',
    },
    {
      q: 'Compute $900 \\div 4 \\div 25$.',
      choices: ['$90$', '$3$', '$9$', '$36$'],
      answer: 2,
      solution: 'Dividing by $4$ and then by $25$ is the same as dividing by $4 \\times 25 = 100$. So $900 \\div 100 = 9$.',
    },
    {
      q: 'If $84 \\div x = 7$, what is $x$?',
      choices: ['$12$', '$7$', '$14$', '$77$'],
      answer: 0,
      solution: 'We need $7 \\times x = 84$. Since $7 \\times 12 = 84$, we get $x = 12$.',
    },
    {
      q: 'Compute $1000 \\div 8$.',
      choices: ['$120$', '$125$', '$135$', '$115$'],
      answer: 1,
      solution: 'Halve three times: $1000 \\to 500 \\to 250 \\to 125$. Dividing by $8$ is the same as halving $3$ times, since $8 = 2 \\times 2 \\times 2$.',
    },
    {
      q: 'Compute $(20 \\div 4) \\div (4 \\div 20)$.',
      choices: ['$1$', '$5$', '$\\frac{1}{25}$', '$25$'],
      answer: 3,
      solution: 'First each part: $20 \\div 4 = 5$ and $4 \\div 20 = \\frac{1}{5}$. Then $5 \\div \\frac{1}{5} = 5 \\times 5 = 25$. Swapping a division flips it into the reciprocal — dividing by that reciprocal multiplies!',
    },
  ],
}

const challenge = [
  {
    q: 'Compute $1 + 2 + 3 + \\cdots + 100$.',
    choices: ['$5050$', '$5000$', '$10100$', '$4950$'],
    answer: 0,
    solution: 'Pair the ends: $1 + 100 = 101$, $2 + 99 = 101$, and so on — $50$ pairs, each summing to $101$. Total: $50 \\times 101 = 5050$.',
  },
  {
    q: 'Compute $25 \\times 17 \\times 8$.',
    choices: ['$3200$', '$3400$', '$4000$', '$3500$'],
    answer: 1,
    solution: 'Pair the friendly factors: $25 \\times 8 = 200$. Then $200 \\times 17 = 3400$.',
  },
  {
    q: 'Compute $47 \\times 36 + 47 \\times 64$.',
    choices: ['$470$', '$4600$', '$4700$', '$47{,}000$'],
    answer: 2,
    solution: 'Pull out the common factor of $47$: $47 \\times (36 + 64) = 47 \\times 100 = 4700$.',
  },
  {
    q: 'Compute $(-3) \\times (-3) \\times (-3)$.',
    choices: ['$27$', '$-9$', '$9$', '$-27$'],
    answer: 3,
    solution: 'Three negative factors — an odd number — so the product is negative. The sizes give $3 \\times 3 \\times 3 = 27$, so the answer is $-27$.',
  },
  {
    q: 'Compute $1 - 2 + 3 - 4 + \\cdots + 99 - 100$.',
    choices: ['$-50$', '$50$', '$0$', '$-100$'],
    answer: 0,
    solution: 'Group in pairs: $(1 - 2) + (3 - 4) + \\cdots + (99 - 100)$. Each pair equals $-1$, and there are $50$ pairs, so the sum is $-50$.',
  },
  {
    q: 'Compute $999 \\times 47$.',
    choices: ['$46{,}853$', '$46{,}953$', '$47{,}047$', '$45{,}953$'],
    answer: 1,
    solution: 'Write $999$ as $1000 - 1$ and distribute: $999 \\times 47 = 47{,}000 - 47 = 46{,}953$.',
  },
  {
    q: 'Two numbers $a$ and $b$ satisfy $a \\times b = 0$. What must be true?',
    choices: ['Both must be $0$', '$a$ must be $0$', 'At least one of them is $0$', 'They must be opposites'],
    answer: 2,
    solution: 'A product of nonzero numbers is never $0$. So the only way to get $0$ is for at least one factor to be $0$ — maybe both, but one is enough.',
  },
  {
    q: 'Compute $875 \\div 25$.',
    choices: ['$25$', '$45$', '$30$', '$35$'],
    answer: 3,
    solution: 'Multiply both numbers by $4$ to make the divisor $100$: $875 \\div 25 = 3500 \\div 100 = 35$.',
  },
  {
    q: 'Simplify $-(-(-(-10)))$.',
    choices: ['$-10$', '$10$', '$0$', '$-40$'],
    answer: 1,
    solution: 'Count the negations: four of them, an even number, so all the flips cancel. The answer is $10$.',
  },
  {
    q: 'Compute $(5 - 8) \\times (-6)$.',
    choices: ['$18$', '$-18$', '$78$', '$-13$'],
    answer: 0,
    solution: 'Parentheses first: $5 - 8 = -3$. Then $(-3) \\times (-6) = 18$ — two negatives make a positive.',
  },
  {
    q: 'What is the reciprocal of $4 \\div 10$?',
    choices: ['$\\frac{2}{5}$', '$\\frac{5}{2}$', '$\\frac{1}{40}$', '$40$'],
    answer: 1,
    solution: '$4 \\div 10 = \\frac{4}{10} = \\frac{2}{5}$. Flip it to get the reciprocal: $\\frac{5}{2}$.',
  },
  {
    q: 'A number $x$ satisfies $x - 37 = 37 - x$. What is $x$?',
    choices: ['$0$', '$74$', '$-37$', '$37$'],
    answer: 3,
    solution: 'The left side is the opposite of the right side — and a number equal to its own opposite must be $0$. So $x - 37 = 0$, which means $x = 37$. Check: $37 - 37 = 0$ on both sides. ✓',
  },
]

const worksheet = [
  {
    q: 'Compute $58 + 27 + 42 + 73$.',
    answer: '$200$',
    solution: 'Pair the friendly numbers: $58 + 42 = 100$ and $27 + 73 = 100$. Total: $200$.',
  },
  {
    q: 'Compute $4 \\times 18 \\times 25$.',
    answer: '$1800$',
    solution: 'Regroup: $4 \\times 25 = 100$, then $100 \\times 18 = 1800$.',
  },
  {
    q: 'Compute $83 - 47 + 17 - 53$.',
    answer: '$0$',
    solution: 'Keep signs glued to their numbers and reorder: $(83 + 17) - (47 + 53) = 100 - 100 = 0$.',
  },
  {
    q: 'Compute $(-12) \\times (-5) \\times 2$.',
    answer: '$120$',
    solution: 'Two negative factors make a positive product: $12 \\times 5 \\times 2 = 120$.',
  },
  {
    q: 'What number goes in the blank? $245 + \\square = 512$',
    answer: '$267$',
    solution: 'Count up from $245$: adding $55$ reaches $300$, then $212$ more reaches $512$. Total: $55 + 212 = 267$.',
  },
  {
    q: 'Use the distributive property to compute $8 \\times 997$.',
    answer: '$7976$',
    solution: 'Write $997 = 1000 - 3$: then $8 \\times 997 = 8000 - 24 = 7976$.',
  },
  {
    q: 'Simplify $-(-(-14))$.',
    answer: '$-14$',
    solution: 'Three negations — an odd number of flips — so the result is negative: $-14$.',
  },
  {
    q: 'Compute $4500 \\div 4 \\div 25$.',
    answer: '$45$',
    solution: 'Dividing by $4$ then $25$ is dividing by $100$: $4500 \\div 100 = 45$.',
  },
  {
    q: 'If $a - b = 5$ and $b - c = 7$, what is $a - c$?',
    answer: '$12$',
    solution: 'Add the two equations: $(a - b) + (b - c) = a - c$, because $-b$ and $+b$ cancel. So $a - c = 5 + 7 = 12$.',
  },
  {
    q: 'Compute the product $(1-2) \\times (2-3) \\times (3-4) \\times \\cdots \\times (9-10)$.',
    answer: '$-1$',
    solution: 'Each factor equals $-1$, and there are $9$ factors. An odd number of negatives gives a negative product: $(-1)^9$ has size $1$ and negative sign, so the answer is $-1$.',
  },
]

export default {
  id: 'prealgebra-ch01',
  book: 'prealgebra',
  number: 1,
  title: 'Properties of Arithmetic',
  intro:
    'Why start with arithmetic? Because all of algebra is built on a few simple rules about how numbers behave. In this chapter you will meet those rules — and learn to use them to make hard-looking calculations easy.',
  sections: [s12, s13, s14, s15, s16, s17],
  challenge,
  worksheet,
}
