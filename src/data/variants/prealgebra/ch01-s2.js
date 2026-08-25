// Prealgebra chapter 1 — variations for sections 1.5-1.7.
// All problems and solutions are original MathQuest content.

const s15 = [
  // p1 — small subtraction that crosses zero
  [
    {
      q: 'Compute $6 - 11$.',
      choices: ['$-5$', '$5$', '$17$', '$-17$'],
      answer: 0,
      solution: 'You are taking away more than you started with, so the answer lands below zero. Since $11 - 6 = 5$, the gap is $5$, and it falls on the negative side: $6 - 11 = -5$.',
    },
    {
      q: 'Compute $12 - 20$.',
      choices: ['$8$', '$-32$', '$-8$', '$32$'],
      answer: 2,
      solution: '$20$ is bigger than $12$, so expect a negative answer. The gap is $20 - 12 = 8$, so $12 - 20 = -8$. (If you got $-32$ or $32$, you added instead of subtracting.)',
    },
    {
      q: 'At dawn the temperature was $4$ degrees. By noon it had dropped $11$ degrees. What is the temperature at noon?',
      choices: ['$7$ degrees', '$15$ degrees', '$-15$ degrees', '$-7$ degrees'],
      answer: 3,
      solution: 'A drop means subtract: $4 - 11$. You only have $4$ degrees above zero to give away, so the other $7$ degrees carry you below zero. $4 - 11 = -7$, so it is $-7$ degrees.',
    },
  ],
  // p2 — subtracting a negative
  [
    {
      q: 'Compute $9 - (-6)$.',
      choices: ['$15$', '$3$', '$-15$', '$-3$'],
      answer: 0,
      solution: 'Subtracting a number means adding its opposite, and the opposite of $-6$ is $6$. So $9 - (-6) = 9 + 6 = 15$. Getting $3$ means you dropped the inner minus sign and computed $9 - 6$.',
    },
    {
      q: 'Compute $12 - (-7)$.',
      choices: ['$5$', '$19$', '$-19$', '$-5$'],
      answer: 1,
      solution: 'Taking away a negative gives back: $12 - (-7) = 12 + 7 = 19$. Think of it as erasing a debt of $7$ — you end up richer, not poorer.',
    },
    {
      q: 'Compute $-2 - (-9)$.',
      choices: ['$-11$', '$11$', '$-7$', '$7$'],
      answer: 3,
      solution: 'Rewrite the subtraction as adding the opposite: $-2 - (-9) = -2 + 9$. Now you are $2$ below zero and climbing $9$, which lands you at $7$. Getting $-11$ means you added both negatives instead of flipping the second one.',
    },
  ],
  // p3 — rewriting a subtraction as an addition
  [
    {
      q: 'Which addition means the same thing as $23 - 9$?',
      choices: ['$9 + (-23)$', '$-(23 + 9)$', '$23 + (-9)$', '$(-23) + 9$'],
      answer: 2,
      solution: 'Subtraction is addition of the opposite, so keep the first number as it is and flip the sign of the second: $23 - 9 = 23 + (-9)$. The choice $9 + (-23)$ reverses the roles and equals $-14$, the opposite of what you want.',
    },
    {
      q: '$41 + (-17)$ is another way of writing which subtraction?',
      choices: ['$17 - 41$', '$41 - 17$', '$-41 - 17$', '$41 + 17$'],
      answer: 1,
      solution: 'Read the rule backwards: adding $-17$ is the same as subtracting $17$, and the number in front stays put. So $41 + (-17) = 41 - 17$. Swapping to $17 - 41$ would negate the answer.',
    },
    {
      q: 'Rewrite $56 - (-13)$ as an addition.',
      choices: ['$56 + (-13)$', '$-56 + 13$', '$-(56 + 13)$', '$56 + 13$'],
      answer: 3,
      solution: 'The rule says add the opposite of what is being subtracted. The number being subtracted is $-13$, and its opposite is $+13$. So $56 - (-13) = 56 + 13$. Choosing $56 + (-13)$ means you copied the minus sign instead of flipping it.',
    },
  ],
  // p4 — subtracting from a round number by counting up
  [
    {
      q: 'Compute $500 - 236$.',
      choices: ['$264$', '$336$', '$274$', '$364$'],
      answer: 0,
      solution: 'Count up from $236$ instead of borrowing. From $236$ to $300$ is $64$, and from $300$ to $500$ is $200$. Together that is $64 + 200 = 264$. (The choice $336$ comes from subtracting each column as "bigger minus smaller," which is not allowed.)',
    },
    {
      q: 'Compute $600 - 385$.',
      choices: ['$225$', '$215$', '$315$', '$385$'],
      answer: 1,
      solution: 'Hop up from $385$: to $400$ is $15$, then to $600$ is another $200$. So the distance is $15 + 200 = 215$. If you thought the first hop was $25$ you would land on $225$, and if you counted $300$ for the second hop you would get $315$.',
    },
    {
      q: 'What number must be added to $268$ to reach $700$?',
      choices: ['$438$', '$568$', '$432$', '$532$'],
      answer: 2,
      solution: 'This is really $700 - 268$, and counting up is the natural way to do it. From $268$ to $300$ is $32$; from $300$ to $700$ is $400$. The missing number is $32 + 400 = 432$. Check it: $268 + 432 = 700$.',
    },
  ],
  // p5 — round the subtrahend up, then adjust; answer goes negative
  [
    {
      q: 'Compute $27 - 98$.',
      choices: ['$-71$', '$71$', '$-73$', '$-75$'],
      answer: 0,
      solution: 'Subtract the friendly $100$ first: $27 - 100 = -73$. You took away $2$ too many, so hand $2$ back: $-73 + 2 = -71$. Stopping at $-73$ forgets the adjustment, and going to $-75$ adjusts in the wrong direction.',
    },
    {
      q: 'Compute $36 - 102$.',
      choices: ['$66$', '$-64$', '$-66$', '$-68$'],
      answer: 2,
      solution: 'Round $102$ down to $100$: $36 - 100 = -64$. But you were supposed to take away $2$ more, so go $2$ further down: $-64 - 2 = -66$. Note the adjustment direction flips when you round the subtrahend down instead of up.',
    },
    {
      q: 'A hiker standing $34$ meters above sea level climbs down $97$ meters into a canyon. What is her elevation now?',
      choices: ['$63$ meters', '$-66$ meters', '$-69$ meters', '$-63$ meters'],
      answer: 3,
      solution: 'Going down means subtracting: $34 - 97$. Take away $100$ first: $34 - 100 = -66$. That is $3$ too much, so give $3$ back: $-66 + 3 = -63$. She is $63$ meters below sea level, or $-63$ meters.',
    },
  ],
  // p6 — a chain of subtractions, reordered to be friendly
  [
    {
      q: 'Compute $73 - 28 - 13$.',
      choices: ['$45$', '$32$', '$58$', '$60$'],
      answer: 1,
      solution: 'Write it as signed addition, $73 + (-28) + (-13)$, then reorder to take the easy bite first: $73 - 13 = 60$, and $60 - 28 = 32$. The choice $45$ is where you stop after only $73 - 28$, and $60$ is where you stop after only $73 - 13$.',
    },
    {
      q: 'Compute $91 - 34 - 21$.',
      choices: ['$78$', '$57$', '$36$', '$70$'],
      answer: 2,
      solution: 'Keep each minus glued to its number: $91 + (-34) + (-21)$. Peel off the friendly $21$ first: $91 - 21 = 70$, then $70 - 34 = 36$. If you accidentally turned the last term positive you would get $78$.',
    },
    {
      q: 'Compute $48 - 25 - 8 - 15$.',
      choices: ['$46$', '$30$', '$15$', '$0$'],
      answer: 3,
      solution: 'Rewrite as $48 + (-25) + (-8) + (-15)$ and hunt for round pairs. The two negatives combine nicely: $25 + 15 = 40$, and the positives give $48 - 8 = 40$. So the total is $40 - 40 = 0$. Getting $46$ means you grouped everything after the first minus sign together.',
    },
  ],
  // p7 — swapping the order of a subtraction
  [
    {
      q: 'If $a - b = 15$, what is $b - a$?',
      choices: ['$-15$', '$15$', '$\\frac{1}{15}$', '$0$'],
      answer: 0,
      solution: 'Reversing a subtraction reverses the sign of the result: $b - a = -(a - b)$. Since $a - b = 15$, you get $b - a = -15$. You never need to know what $a$ and $b$ actually are.',
    },
    {
      q: 'If $m - n = -6$, what is $n - m$?',
      choices: ['$-6$', '$\\frac{1}{6}$', '$0$', '$6$'],
      answer: 3,
      solution: 'Again $n - m = -(m - n)$. Here $m - n$ is already negative, so flipping it makes it positive: $n - m = -(-6) = 6$. The rule works in both directions.',
    },
    {
      q: 'If $p - q = 9$, what is $(q - p) + 4$?',
      choices: ['$13$', '$-5$', '$5$', '$-13$'],
      answer: 1,
      solution: 'Do the swap first: $q - p = -(p - q) = -9$. Then add the $4$: $-9 + 4 = -5$. Answering $13$ means you forgot to flip the sign before adding.',
    },
  ],
  // p8 — three-digit subtraction by rounding and adjusting
  [
    {
      q: 'Compute $743 - 396$.',
      choices: ['$343$', '$347$', '$453$', '$339$'],
      answer: 1,
      solution: 'Take away a round $400$: $743 - 400 = 343$. That was $4$ too many, so give $4$ back: $343 + 4 = 347$. Stopping at $343$ skips the payback, and $453$ comes from subtracting each column as "bigger minus smaller."',
    },
    {
      q: 'Compute $812 - 498$.',
      choices: ['$312$', '$316$', '$314$', '$486$'],
      answer: 2,
      solution: '$498$ is only $2$ away from $500$, so subtract $500$ instead: $812 - 500 = 312$. You overshot by $2$, so add it back: $312 + 2 = 314$. Adding in the wrong direction gives $316$.',
    },
    {
      q: 'Sofia starts with $\\$625$ and spends $\\$198$ on a bike repair. How much does she have left?',
      choices: ['$\\$425$', '$\\$573$', '$\\$429$', '$\\$427$'],
      answer: 3,
      solution: 'Pretend she spent $\\$200$: $625 - 200 = 425$. She actually spent $\\$2$ less, so she keeps $\\$2$ more: $425 + 2 = 427$. She has $\\$427$ left.',
    },
  ],
  // p9 — long alternating chain, grouped in pairs
  [
    {
      q: 'Compute $30 - 29 + 28 - 27 + \\cdots + 2 - 1$.',
      choices: ['$15$', '$30$', '$0$', '$1$'],
      answer: 0,
      solution: 'Bracket the terms two at a time: $(30 - 29) + (28 - 27) + \\cdots + (2 - 1)$. Every bracket is worth exactly $1$. The numbers $30$ down to $1$ make $15$ such pairs, so the sum is $15$.',
    },
    {
      q: 'Compute $1 - 2 + 3 - 4 + \\cdots + 19 - 20$.',
      choices: ['$10$', '$-1$', '$-10$', '$0$'],
      answer: 2,
      solution: 'Pair from the left this time: $(1 - 2) + (3 - 4) + \\cdots + (19 - 20)$. Each bracket is $-1$, and $20$ terms make $10$ brackets, so the total is $10 \\times (-1) = -10$. The sign matters — starting small and subtracting big tips every pair negative.',
    },
    {
      q: 'Compute $21 - 20 + 19 - 18 + \\cdots + 3 - 2 + 1$.',
      choices: ['$10$', '$11$', '$0$', '$1$'],
      answer: 1,
      solution: 'Pair off from the front: $(21 - 20) + (19 - 18) + \\cdots + (3 - 2)$, which uses the numbers $21$ down to $2$ and gives $10$ pairs worth $1$ each. But there is a leftover $+1$ at the very end with no partner, so the total is $10 + 1 = 11$. Watch for that lonely last term.',
    },
  ],
  // p10 — parentheses inside a subtraction
  [
    {
      q: 'Compute $40 - (15 - 6)$.',
      choices: ['$31$', '$19$', '$29$', '$49$'],
      answer: 0,
      solution: 'Parentheses first: $15 - 6 = 9$. Then $40 - 9 = 31$. Dropping the parentheses and computing $40 - 15 - 6$ gives $19$, a different answer — the parentheses protect that inner subtraction.',
    },
    {
      q: 'Compute $18 - (7 - 12)$.',
      choices: ['$13$', '$-1$', '$23$', '$-23$'],
      answer: 2,
      solution: 'Inside first: $7 - 12 = -5$. Now you are subtracting a negative, which adds: $18 - (-5) = 18 + 5 = 23$. Computing the inside as $5$ instead of $-5$ gives $13$, and erasing the parentheses gives $18 - 7 - 12 = -1$.',
    },
    {
      q: 'What number goes in the blank? $36 - (\\square - 8) = 30$',
      choices: ['$-2$', '$22$', '$6$', '$14$'],
      answer: 3,
      solution: 'Work from the outside in. Since $36 - 6 = 30$, whatever is inside the parentheses must equal $6$. So $\\square - 8 = 6$, which means $\\square = 14$. Stopping at $6$ answers the inner question instead of the one asked, and ignoring the parentheses leads to $-2$.',
    },
  ],
]

const s16 = [
  // p1 — reciprocal of a whole number
  [
    {
      q: 'What is the reciprocal of $9$?',
      choices: ['$\\frac{1}{9}$', '$-9$', '$9$', '$0.9$'],
      answer: 0,
      solution: 'The reciprocal is the partner that multiplies with $9$ to give exactly $1$. That is $\\frac{1}{9}$, since $9 \\times \\frac{1}{9} = \\frac{9}{9} = 1$. A reciprocal is not an opposite, so $-9$ is not it.',
    },
    {
      q: 'What is the reciprocal of $11$?',
      choices: ['$-11$', '$1.1$', '$\\frac{1}{11}$', '$11$'],
      answer: 2,
      solution: 'Write the whole number as $\\frac{11}{1}$ and flip it to get $\\frac{1}{11}$. Check: $11 \\times \\frac{1}{11} = 1$. Only $1$ and $-1$ are their own reciprocals, so $11$ is not the answer.',
    },
    {
      q: 'Which number multiplied by $7$ gives exactly $1$?',
      choices: ['$0$', '$7$', '$-\\frac{1}{7}$', '$\\frac{1}{7}$'],
      answer: 3,
      solution: 'This is the definition of a reciprocal, asked in the other direction. You need $7 \\times \\square = 1$, so $\\square = \\frac{1}{7}$. The choice $-\\frac{1}{7}$ gives $-1$, which is off by a sign.',
    },
  ],
  // p2 — a number times its reciprocal
  [
    {
      q: 'What is $15 \\times \\frac{1}{15}$?',
      choices: ['$1$', '$15$', '$225$', '$0$'],
      answer: 0,
      solution: 'These two are reciprocals, so their product is $1$ by definition: $15 \\times \\frac{1}{15} = \\frac{15}{15} = 1$. Answering $225$ means you multiplied $15$ by $15$ and ignored the fraction bar.',
    },
    {
      q: 'What is $\\frac{1}{20} \\times 20$?',
      choices: ['$0$', '$1$', '$20$', '$\\frac{1}{400}$'],
      answer: 1,
      solution: 'Order does not matter in multiplication, so this is the same reciprocal pair as $20 \\times \\frac{1}{20}$, and the product is $1$. Answering $\\frac{1}{400}$ means you multiplied the two bottoms after turning $20$ into $\\frac{1}{20}$ as well.',
    },
    {
      q: 'What is $\\frac{3}{8} \\times \\frac{8}{3}$?',
      choices: ['$0$', '$\\frac{9}{64}$', '$1$', '$\\frac{64}{9}$'],
      answer: 2,
      solution: 'These fractions are flips of each other, so they are reciprocals: $\\frac{3}{8} \\times \\frac{8}{3} = \\frac{24}{24} = 1$. Getting $\\frac{9}{64}$ means you multiplied top by top and bottom by bottom without noticing the flip, using $3 \\times 3$ and $8 \\times 8$.',
    },
  ],
  // p3 — reciprocal of a fraction
  [
    {
      q: 'What is the reciprocal of $\\frac{5}{8}$?',
      choices: ['$\\frac{5}{8}$', '$\\frac{1}{8}$', '$\\frac{8}{5}$', '$-\\frac{8}{5}$'],
      answer: 2,
      solution: 'Flip the fraction over: $\\frac{5}{8}$ becomes $\\frac{8}{5}$. Check it: $\\frac{5}{8} \\times \\frac{8}{5} = \\frac{40}{40} = 1$. Answering $\\frac{1}{8}$ means you only flipped part of it.',
    },
    {
      q: 'What is the reciprocal of $\\frac{9}{4}$?',
      choices: ['$\\frac{9}{4}$', '$\\frac{4}{9}$', '$\\frac{1}{9}$', '$-\\frac{4}{9}$'],
      answer: 1,
      solution: 'Top and bottom trade places: $\\frac{9}{4}$ becomes $\\frac{4}{9}$, and $\\frac{9}{4} \\times \\frac{4}{9} = \\frac{36}{36} = 1$. Notice that a fraction bigger than $1$ has a reciprocal smaller than $1$.',
    },
    {
      q: 'The reciprocal of a certain fraction is $\\frac{11}{3}$. What is the fraction?',
      choices: ['$\\frac{11}{3}$', '$\\frac{1}{11}$', '$-\\frac{3}{11}$', '$\\frac{3}{11}$'],
      answer: 3,
      solution: 'Reciprocals come in pairs, so flipping $\\frac{11}{3}$ takes you back to the original: the fraction is $\\frac{3}{11}$. Confirm it: $\\frac{3}{11} \\times \\frac{11}{3} = 1$, so they really are partners.',
    },
  ],
  // p4 — zero has no reciprocal
  [
    {
      q: 'For which value of $n$ is the statement $n \\times \\frac{1}{n} = 1$ NOT true?',
      choices: ['$n = 5$', '$n = 0$', '$n = -3$', '$n = \\frac{1}{2}$'],
      answer: 1,
      solution: 'Every number has a multiply-to-one partner except one troublemaker. When $n = 0$ the expression $\\frac{1}{n}$ does not even exist, and no number times $0$ can reach $1$. All the others work fine, including the negative one: $-3 \\times \\left(-\\frac{1}{3}\\right) = 1$.',
    },
    {
      q: 'Sam claims that every number has a reciprocal. Which single number proves him wrong?',
      choices: ['$1$', '$-1$', '$\\frac{1}{1000}$', '$0$'],
      answer: 3,
      solution: 'To disprove a claim you only need one counterexample. Both $1$ and $-1$ are their own reciprocals, and $\\frac{1}{1000}$ has the reciprocal $1000$. But $0$ has none, because anything times $0$ is $0$ and never $1$.',
    },
    {
      q: 'Why does $0$ have no reciprocal?',
      choices: [
        'Because $0 \\times n = 0$ for every number $n$, so the product is never $1$',
        'Because $0$ is neither positive nor negative',
        'Because the reciprocal of $0$ equals $0$',
        'Because $0$ is smaller than $1$',
      ],
      answer: 0,
      solution: 'A reciprocal of $0$ would have to satisfy $0 \\times \\square = 1$. But multiplying anything by $0$ wipes it out to $0$, so that equation has no solution at all. Being unsigned or being small has nothing to do with it — $\\frac{1}{1000}$ is tiny and still has a reciprocal.',
    },
  ],
  // p5 — numbers that are their own reciprocals, and flipping twice
  [
    {
      q: 'What is the reciprocal of $-1$?',
      choices: ['$-1$', '$1$', '$0$', '$\\frac{1}{2}$'],
      answer: 0,
      solution: 'You need the partner that multiplies with $-1$ to give $1$. Since $(-1) \\times (-1) = 1$, the reciprocal of $-1$ is itself. Answering $1$ forgets that two negatives are needed to make the product positive.',
    },
    {
      q: 'What is the reciprocal of the reciprocal of $\\frac{4}{7}$?',
      choices: ['$\\frac{7}{4}$', '$1$', '$\\frac{4}{7}$', '$\\frac{16}{49}$'],
      answer: 2,
      solution: 'Flip once: $\\frac{4}{7}$ becomes $\\frac{7}{4}$. Flip again: $\\frac{7}{4}$ becomes $\\frac{4}{7}$. Two flips put the top and bottom right back where they started, so the answer is $\\frac{4}{7}$. Stopping after one flip gives $\\frac{7}{4}$.',
    },
    {
      q: 'Which of these numbers is equal to its own reciprocal?',
      choices: ['$2$', '$\\frac{1}{3}$', '$0$', '$1$'],
      answer: 3,
      solution: 'Test each one. The reciprocal of $2$ is $\\frac{1}{2}$, and the reciprocal of $\\frac{1}{3}$ is $3$ — neither matches itself. Zero has no reciprocal at all. But $1 \\times 1 = 1$, so $1$ is its own reciprocal.',
    },
  ],
  // p6 — reciprocals of negative numbers
  [
    {
      q: 'What is the reciprocal of $-10$?',
      choices: ['$-\\frac{1}{10}$', '$\\frac{1}{10}$', '$10$', '$-10$'],
      answer: 0,
      solution: 'The product has to be positive $1$, and a negative times a positive is negative — so the reciprocal must also be negative. Flip the size and keep the sign: $-\\frac{1}{10}$, since $(-10) \\times \\left(-\\frac{1}{10}\\right) = 1$.',
    },
    {
      q: 'What is the reciprocal of $-\\frac{3}{5}$?',
      choices: ['$\\frac{5}{3}$', '$\\frac{3}{5}$', '$-\\frac{5}{3}$', '$-\\frac{3}{5}$'],
      answer: 2,
      solution: 'Flip the fraction and carry the minus sign along: $-\\frac{3}{5}$ becomes $-\\frac{5}{3}$. Check: $\\left(-\\frac{3}{5}\\right) \\times \\left(-\\frac{5}{3}\\right) = \\frac{15}{15} = 1$, positive because both factors are negative.',
    },
    {
      q: 'What number goes in the blank? $(-8) \\times \\square = 1$',
      choices: ['$\\frac{1}{8}$', '$-\\frac{1}{8}$', '$8$', '$-8$'],
      answer: 1,
      solution: 'The blank holds the reciprocal of $-8$. Its size must be $\\frac{1}{8}$ so the product is $1$ in magnitude, and it must be negative so the two minus signs cancel: $\\square = -\\frac{1}{8}$. Using $\\frac{1}{8}$ would give $-1$ instead.',
    },
  ],
  // p7 — solving x times a fraction equals 1
  [
    {
      q: 'A number $y$ satisfies $y \\times \\frac{7}{2} = 1$. What is $y$?',
      choices: ['$\\frac{7}{2}$', '$\\frac{1}{7}$', '$\\frac{2}{7}$', '$-\\frac{7}{2}$'],
      answer: 2,
      solution: 'Any two numbers whose product is $1$ are reciprocals, so $y$ must be the reciprocal of $\\frac{7}{2}$. Flip it: $y = \\frac{2}{7}$. Confirm: $\\frac{2}{7} \\times \\frac{7}{2} = \\frac{14}{14} = 1$.',
    },
    {
      q: 'A number $k$ satisfies $k \\times \\left(-\\frac{6}{5}\\right) = 1$. What is $k$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{6}{5}$', '$-\\frac{6}{5}$', '$-\\frac{5}{6}$'],
      answer: 3,
      solution: '$k$ is the reciprocal of $-\\frac{6}{5}$, so flip the fraction and keep the minus sign: $k = -\\frac{5}{6}$. Dropping the sign gives $\\frac{5}{6}$, whose product with $-\\frac{6}{5}$ is $-1$, not $1$.',
    },
    {
      q: 'If $w$ is the reciprocal of $\\frac{8}{3}$, what is $w \\times 8$?',
      choices: ['$8$', '$3$', '$\\frac{64}{3}$', '$\\frac{1}{3}$'],
      answer: 1,
      solution: 'First find $w$ by flipping: $w = \\frac{3}{8}$. Then $w \\times 8 = \\frac{3}{8} \\times 8 = \\frac{24}{8} = 3$. Skipping the flip and using $\\frac{8}{3} \\times 8$ gives $\\frac{64}{3}$.',
    },
  ],
  // p8 — simplify inside first, then take the reciprocal
  [
    {
      q: 'What is the reciprocal of $3 \\times \\frac{7}{3}$?',
      choices: ['$\\frac{1}{7}$', '$7$', '$\\frac{3}{7}$', '$\\frac{7}{3}$'],
      answer: 0,
      solution: 'Tidy up inside before flipping: $3 \\times \\frac{7}{3} = \\frac{21}{3} = 7$. The reciprocal of $7$ is $\\frac{1}{7}$. Answering $7$ means you simplified correctly but forgot the flip.',
    },
    {
      q: 'What is the reciprocal of $\\frac{5}{6} \\times 12$?',
      choices: ['$10$', '$\\frac{6}{5}$', '$\\frac{1}{10}$', '$\\frac{1}{60}$'],
      answer: 2,
      solution: 'Simplify first: $\\frac{5}{6} \\times 12 = \\frac{60}{6} = 10$. Now flip: the reciprocal of $10$ is $\\frac{1}{10}$. Flipping only the fraction gives $\\frac{6}{5}$, and multiplying the bottoms gives $\\frac{1}{60}$ — both skip the simplification step.',
    },
    {
      q: 'What is the reciprocal of $\\frac{2}{5} \\times \\frac{5}{2} \\times 4$?',
      choices: ['$4$', '$\\frac{1}{16}$', '$\\frac{5}{2}$', '$\\frac{1}{4}$'],
      answer: 3,
      solution: 'Spot the reciprocal pair hiding inside: $\\frac{2}{5} \\times \\frac{5}{2} = 1$, so the whole product is $1 \\times 4 = 4$. The reciprocal of $4$ is $\\frac{1}{4}$. Answering $4$ stops one step early.',
    },
  ],
  // p9 — a reciprocal pair hiding in a longer product
  [
    {
      q: 'Compute $\\frac{5}{8} \\times 6 \\times \\frac{8}{5}$.',
      choices: ['$6$', '$1$', '$\\frac{15}{4}$', '$\\frac{48}{5}$'],
      answer: 0,
      solution: 'Multiplication lets you reorder freely, so pull the two flips together: $\\frac{5}{8} \\times \\frac{8}{5} = 1$. That leaves $1 \\times 6 = 6$. Answering $\\frac{15}{4}$ means you multiplied the first two factors and stopped; $\\frac{48}{5}$ means you paired the wrong two.',
    },
    {
      q: 'Compute $12 \\times \\frac{4}{9} \\times \\frac{9}{4}$.',
      choices: ['$1$', '$\\frac{16}{3}$', '$27$', '$12$'],
      answer: 3,
      solution: 'The last two factors are reciprocals, so $\\frac{4}{9} \\times \\frac{9}{4} = 1$ and the product is just $12$. Answering $1$ forgets that the $12$ is still there; $\\frac{16}{3}$ and $27$ come from multiplying $12$ by only one of the fractions.',
    },
    {
      q: 'If $\\frac{6}{11} \\times \\frac{11}{6} \\times n = 20$, what is $n$?',
      choices: ['$1$', '$20$', '$\\frac{20}{11}$', '$\\frac{11}{6}$'],
      answer: 1,
      solution: 'Simplify the left side before solving: $\\frac{6}{11} \\times \\frac{11}{6} = 1$, so the equation is really $1 \\times n = 20$. That gives $n = 20$. The two fractions do no work at all — they were a disguise.',
    },
  ],
  // p10 — comparing a number to its reciprocal
  [
    {
      q: 'Which of these numbers is SMALLER than its own reciprocal?',
      choices: ['$5$', '$\\frac{1}{4}$', '$-\\frac{1}{5}$', '$1$'],
      answer: 1,
      solution: 'Take each in turn. The reciprocal of $5$ is $\\frac{1}{5}$, which is smaller, so $5$ is bigger than its reciprocal. The reciprocal of $\\frac{1}{4}$ is $4$, and $\\frac{1}{4} < 4$, so this one works. The reciprocal of $-\\frac{1}{5}$ is $-5$, and $-\\frac{1}{5}$ sits to the right of $-5$ on the number line, so it is bigger. And $1$ equals its own reciprocal.',
    },
    {
      q: 'Which of these numbers has a reciprocal greater than $1$?',
      choices: ['$\\frac{2}{3}$', '$4$', '$-\\frac{1}{2}$', '$1$'],
      answer: 0,
      solution: 'Flipping a positive fraction that is less than $1$ makes it bigger than $1$: the reciprocal of $\\frac{2}{3}$ is $\\frac{3}{2}$, which is greater than $1$. The reciprocal of $4$ is $\\frac{1}{4}$, the reciprocal of $-\\frac{1}{2}$ is $-2$ (negative, so certainly not above $1$), and the reciprocal of $1$ is $1$ exactly.',
    },
    {
      q: 'Put these three numbers in order from smallest to largest: the reciprocal of $2$, the reciprocal of $-2$, and the reciprocal of $\\frac{1}{5}$.',
      choices: [
        '$\\frac{1}{2}$, $-\\frac{1}{2}$, $5$',
        '$5$, $\\frac{1}{2}$, $-\\frac{1}{2}$',
        '$-\\frac{1}{2}$, $\\frac{1}{2}$, $5$',
        '$-\\frac{1}{2}$, $5$, $\\frac{1}{2}$',
      ],
      answer: 2,
      solution: 'Find all three reciprocals first: the reciprocal of $2$ is $\\frac{1}{2}$, the reciprocal of $-2$ is $-\\frac{1}{2}$, and the reciprocal of $\\frac{1}{5}$ is $5$. Now order them on the number line. The negative one is leftmost, then $\\frac{1}{2}$, then $5$: the order is $-\\frac{1}{2}$, $\\frac{1}{2}$, $5$.',
    },
  ],
]

const s17 = [
  // p1 — basic division fact
  [
    {
      q: 'Compute $72 \\div 9$.',
      choices: ['$8$', '$9$', '$7$', '$6$'],
      answer: 0,
      solution: 'Ask what number times $9$ makes $72$. Since $8 \\times 9 = 72$, the answer is $72 \\div 9 = 8$. Checking by multiplying back is the fastest way to be sure.',
    },
    {
      q: 'Compute $54 \\div 6$.',
      choices: ['$6$', '$7$', '$8$', '$9$'],
      answer: 3,
      solution: 'You want the missing factor in $6 \\times \\square = 54$. Since $6 \\times 9 = 54$, we get $54 \\div 6 = 9$. Notice $54 \\div 9 = 6$ as well — the two factors trade places.',
    },
    {
      q: 'A baker packs $84$ muffins into boxes that hold $7$ muffins each. How many boxes does she fill?',
      choices: ['$11$', '$12$', '$13$', '$77$'],
      answer: 1,
      solution: 'Sharing $84$ into groups of $7$ is division: $84 \\div 7$. Since $7 \\times 12 = 84$, she fills $12$ boxes. Answering $77$ means you subtracted $7$ instead of dividing by it.',
    },
  ],
  // p2 — zero divided by a number
  [
    {
      q: 'What is $0 \\div 45$?',
      choices: ['$45$', 'Undefined', '$0$', '$1$'],
      answer: 2,
      solution: 'Split nothing among $45$ people and each person gets nothing: $0 \\div 45 = 0$. Check by multiplying back: $0 \\times 45 = 0$, which matches. Zero on top is perfectly legal — only zero on the bottom is trouble.',
    },
    {
      q: 'The statement $0 \\div n = 0$ is true for which numbers $n$?',
      choices: ['Every number', 'Every number except $0$', 'Only $n = 1$', 'Only positive numbers'],
      answer: 1,
      solution: 'Dividing zero by any nonzero number gives $0$, and that includes negatives: $0 \\div (-7) = 0$. The one number you must exclude is $n = 0$, because $0 \\div 0$ has no single answer — every number times $0$ gives $0$, so nothing pins it down.',
    },
    {
      q: 'Which of these expressions is equal to $0$?',
      choices: ['$\\frac{9}{0}$', '$\\frac{0}{0}$', '$0 - 9$', '$\\frac{0}{9}$'],
      answer: 3,
      solution: 'A fraction bar is division. $\\frac{0}{9}$ means $0 \\div 9 = 0$, so that is the one. Both $\\frac{9}{0}$ and $\\frac{0}{0}$ have zero on the bottom, so they are undefined, and $0 - 9 = -9$, not $0$.',
    },
  ],
  // p3 — dividing by zero is undefined
  [
    {
      q: 'What is $\\frac{8}{0}$?',
      choices: ['$0$', 'Undefined', '$8$', '$1$'],
      answer: 1,
      solution: 'The fraction bar means $8 \\div 0$, which asks for a number that multiplies with $0$ to give $8$. Everything times $0$ is $0$, never $8$, so no such number exists and the expression is undefined. It is not $0$ — do not confuse it with $\\frac{0}{8}$.',
    },
    {
      q: 'Why is $5 \\div 0$ undefined?',
      choices: [
        'Because no number times $0$ can equal $5$',
        'Because $0$ is neither positive nor negative',
        'Because $5$ does not divide evenly into $0$',
        'Because dividing always makes a number smaller',
      ],
      answer: 0,
      solution: 'A quotient $5 \\div 0$ would be the answer to $0 \\times \\square = 5$. Since anything times $0$ is $0$, that equation can never be satisfied, so there is nothing for the quotient to be. The other reasons are red herrings — dividing by $\\frac{1}{2}$ makes numbers bigger, for instance.',
    },
    {
      q: 'Which of these expressions is undefined?',
      choices: ['$\\frac{0}{14}$', '$\\frac{14}{1}$', '$\\frac{14}{0}$', '$\\frac{1}{14}$'],
      answer: 2,
      solution: 'Scan the denominators — that is where the danger is. $\\frac{14}{0}$ has $0$ on the bottom, so it is undefined. The others are all fine: $\\frac{0}{14} = 0$, $\\frac{14}{1} = 14$, and $\\frac{1}{14}$ is just a small fraction.',
    },
  ],
  // p4 — one negative sign in a quotient
  [
    {
      q: 'Compute $(-56) \\div 7$.',
      choices: ['$8$', '$-8$', '$-7$', '$-9$'],
      answer: 1,
      solution: 'Handle the size first: $56 \\div 7 = 8$. There is exactly one minus sign in the problem, so the answer is negative: $(-56) \\div 7 = -8$. Check by multiplying: $(-8) \\times 7 = -56$.',
    },
    {
      q: 'Compute $72 \\div (-6)$.',
      choices: ['$12$', '$-\\frac{1}{12}$', '$-432$', '$-12$'],
      answer: 3,
      solution: 'Ignore signs for a moment: $72 \\div 6 = 12$. One negative sign makes the quotient negative, so the answer is $-12$. The choice $-432$ comes from multiplying instead of dividing, and $-\\frac{1}{12}$ comes from dividing the wrong way round.',
    },
    {
      q: 'Over $6$ hours the temperature fell a total of $54$ degrees, at a steady rate. What was the change in temperature each hour?',
      choices: ['$9$ degrees', '$-6$ degrees', '$-9$ degrees', '$-324$ degrees'],
      answer: 2,
      solution: 'A fall of $54$ is a change of $-54$, spread evenly over $6$ hours: $(-54) \\div 6$. The size is $54 \\div 6 = 9$, and the single minus sign keeps the answer negative, so the change is $-9$ degrees per hour. Answering $-324$ multiplies when you should divide.',
    },
  ],
  // p5 — two negative signs
  [
    {
      q: 'Compute $(-96) \\div (-8)$.',
      choices: ['$12$', '$-12$', '$768$', '$-768$'],
      answer: 0,
      solution: 'Count the minus signs: there are two, and they cancel each other, so the answer is positive. Then $96 \\div 8 = 12$, giving $(-96) \\div (-8) = 12$. The huge choices come from multiplying instead of dividing.',
    },
    {
      q: 'Compute $(-3) \\div (-15)$.',
      choices: ['$5$', '$-5$', '$-\\frac{1}{5}$', '$\\frac{1}{5}$'],
      answer: 3,
      solution: 'Two negatives make the answer positive. For the size, $3 \\div 15 = \\frac{3}{15} = \\frac{1}{5}$ — a small number, because you are splitting $3$ into $15$ parts. So the answer is $\\frac{1}{5}$. Answering $5$ divides the bigger number by the smaller one, which reverses the problem.',
    },
    {
      q: 'Which of these quotients is positive?',
      choices: ['$\\frac{-40}{8}$', '$\\frac{40}{-20}$', '$\\frac{-40}{-10}$', '$\\frac{-40}{5}$'],
      answer: 2,
      solution: 'You do not need the sizes at all — just count minus signs in each quotient. The first, second, and fourth each have exactly one, so all three are negative ($-5$, $-2$, and $-8$). Only $\\frac{-40}{-10}$ has two minus signs, which cancel, giving $+4$.',
    },
  ],
  // p6 — dividing by a unit fraction
  [
    {
      q: 'Compute $15 \\div \\frac{1}{3}$.',
      choices: ['$5$', '$\\frac{1}{45}$', '$45$', '$18$'],
      answer: 2,
      solution: 'Dividing by a number means multiplying by its reciprocal, and the reciprocal of $\\frac{1}{3}$ is $3$. So $15 \\div \\frac{1}{3} = 15 \\times 3 = 45$. It makes sense that the answer grew: there are $45$ thirds inside $15$ wholes. Answering $5$ multiplies by $\\frac{1}{3}$ instead of dividing by it.',
    },
    {
      q: 'Compute $8 \\div \\frac{1}{4}$.',
      choices: ['$32$', '$2$', '$\\frac{1}{32}$', '$12$'],
      answer: 0,
      solution: 'Flip and multiply: the reciprocal of $\\frac{1}{4}$ is $4$, so $8 \\div \\frac{1}{4} = 8 \\times 4 = 32$. Picture $8$ pizzas cut into quarters — that is $32$ slices. The choice $2$ is $8 \\times \\frac{1}{4}$, which is the opposite operation.',
    },
    {
      q: 'A recipe uses a scoop that holds exactly one third of a cup. How many scoops of flour fill $7$ cups?',
      choices: ['$\\frac{7}{3}$', '$\\frac{3}{7}$', '$10$', '$21$'],
      answer: 3,
      solution: '"How many thirds fit in $7$" is the division $7 \\div \\frac{1}{3}$. Dividing by $\\frac{1}{3}$ is multiplying by $3$, so the answer is $7 \\times 3 = 21$ scoops. Answering $\\frac{7}{3}$ means you took a third of $7$ instead of counting the thirds inside it.',
    },
  ],
  // p7 — a chain of divisions, combined into one
  [
    {
      q: 'Compute $700 \\div 2 \\div 50$.',
      choices: ['$7$', '$70$', '$350$', '$14$'],
      answer: 0,
      solution: 'Dividing by $2$ and then by $50$ is the same as dividing by $2 \\times 50 = 100$ in one go. So $700 \\div 100 = 7$. The choices $350$ and $14$ are where you land if you stop after only one of the two divisions.',
    },
    {
      q: 'Compute $1200 \\div 8 \\div 25$.',
      choices: ['$150$', '$48$', '$60$', '$6$'],
      answer: 3,
      solution: 'Combine the two divisors: $8 \\times 25 = 200$, so this is $1200 \\div 200 = 6$. Doing them one at a time works too ($1200 \\div 8 = 150$, then $150 \\div 25 = 6$), but combining first makes the numbers friendlier. Stopping at $150$ or at $1200 \\div 25 = 48$ leaves the job half done.',
    },
    {
      q: 'Compute $480 \\div 5 \\div 4 \\div 6$.',
      choices: ['$96$', '$4$', '$24$', '$20$'],
      answer: 1,
      solution: 'Multiply all three divisors into one: $5 \\times 4 \\times 6 = 120$. Then $480 \\div 120 = 4$. If you combine only the last two divisors and compute $480 \\div 24$ you get $20$, which skips dividing by $5$; stopping partway gives $96$ or $24$.',
    },
  ],
  // p8 — solving for a missing number in a division
  [
    {
      q: 'If $x \\div 6 = 9$, what is $x$?',
      choices: ['$15$', '$\\frac{2}{3}$', '$54$', '$3$'],
      answer: 2,
      solution: 'Read the equation as "$x$ split into $6$ equal parts gives $9$ each." To rebuild $x$, put the parts back together: $x = 6 \\times 9 = 54$. Check it: $54 \\div 6 = 9$. Answering $15$ adds the two numbers instead.',
    },
    {
      q: 'If $91 \\div y = 13$, what is $y$?',
      choices: ['$13$', '$78$', '$104$', '$7$'],
      answer: 3,
      solution: 'Here the unknown is the divisor, so turn the equation into a multiplication: $y \\times 13 = 91$. Since $7 \\times 13 = 91$, we get $y = 7$. The choices $78$ and $104$ come from subtracting or adding $13$ instead of dividing.',
    },
    {
      q: 'What number divided by $\\frac{1}{4}$ gives $20$?',
      choices: ['$80$', '$5$', '$\\frac{1}{5}$', '$16$'],
      answer: 1,
      solution: 'Call it $n$, so $n \\div \\frac{1}{4} = 20$. Dividing by $\\frac{1}{4}$ is multiplying by $4$, so the equation is $n \\times 4 = 20$, which gives $n = 5$. Check: $5 \\div \\frac{1}{4} = 5 \\times 4 = 20$. Answering $80$ multiplies when you should divide.',
    },
  ],
  // p9 — dividing by powers of two, or undoing it
  [
    {
      q: 'Compute $600 \\div 8$.',
      choices: ['$75$', '$150$', '$300$', '$60$'],
      answer: 0,
      solution: 'Since $8 = 2 \\times 2 \\times 2$, dividing by $8$ is halving three times: $600 \\to 300 \\to 150 \\to 75$. The answer is $75$. The choices $300$ and $150$ are where you stop if you halve only once or twice.',
    },
    {
      q: 'Compute $1000 \\div 125$.',
      choices: ['$4$', '$80$', '$8$', '$40$'],
      answer: 2,
      solution: 'Look for the missing factor: what times $125$ gives $1000$? Since $125 \\times 8 = 1000$, the answer is $8$. It helps to remember that $125$ is one eighth of $1000$, which is the same fact read backwards. Answering $40$ divides by $25$ instead of $125$.',
    },
    {
      q: 'Compute $3200 \\div 16$.',
      choices: ['$400$', '$800$', '$20$', '$200$'],
      answer: 3,
      solution: '$16 = 2 \\times 2 \\times 2 \\times 2$, so halve four times: $3200 \\to 1600 \\to 800 \\to 400 \\to 200$. The answer is $200$. Stopping after two or three halvings gives $800$ or $400$, and $20$ loses a zero along the way.',
    },
  ],
  // p10 — a quotient divided by its own reverse
  [
    {
      q: 'Compute $(30 \\div 5) \\div (5 \\div 30)$.',
      choices: ['$36$', '$1$', '$6$', '$\\frac{1}{36}$'],
      answer: 0,
      solution: 'Do each bracket first: $30 \\div 5 = 6$ and $5 \\div 30 = \\frac{1}{6}$. Reversing a division turns the answer into its reciprocal. Now divide: $6 \\div \\frac{1}{6} = 6 \\times 6 = 36$. Dividing by a reciprocal multiplies, which is why the answer is the square.',
    },
    {
      q: 'Compute $(3 \\div 12) \\div (12 \\div 3)$.',
      choices: ['$16$', '$1$', '$\\frac{1}{16}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution: 'The brackets give $3 \\div 12 = \\frac{1}{4}$ and $12 \\div 3 = 4$, which are reciprocals of each other. Then $\\frac{1}{4} \\div 4 = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$. This time the small number goes on top, so the answer shrinks instead of growing.',
    },
    {
      q: 'If $a \\div b = 4$, what is $(a \\div b) \\div (b \\div a)$?',
      choices: ['$1$', '$16$', '$4$', '$\\frac{1}{16}$'],
      answer: 1,
      solution: 'You are told $a \\div b = 4$, and reversing a division gives the reciprocal, so $b \\div a = \\frac{1}{4}$. Then $4 \\div \\frac{1}{4} = 4 \\times 4 = 16$. You never need $a$ and $b$ themselves — the reversal rule does all the work.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 1,
  sections: {
    '1.5': s15,
    '1.6': s16,
    '1.7': s17,
  },
}
