// Prealgebra chapter 1 — variations for the chapter challenge and worksheet.
// All problems and solutions are original MathQuest content.

const challenge = [
  // 1. Gauss pairing on a long sum.
  [
    {
      q: 'Compute $2 + 4 + 6 + \\cdots + 98 + 100$.',
      choices: ['$1275$', '$2500$', '$2550$', '$5050$'],
      answer: 2,
      solution: 'Every term has a factor of $2$, so pull it out: $2 + 4 + \\cdots + 100 = 2 \\times (1 + 2 + \\cdots + 50)$. Now pair the ends of the inner sum: $1 + 50 = 51$, $2 + 49 = 51$, and so on — $25$ pairs of $51$, which is $25 \\times 51 = 1275$. Double it: $2 \\times 1275 = 2550$.',
    },
    {
      q: 'Compute $51 + 52 + 53 + \\cdots + 99 + 100$.',
      choices: ['$2525$', '$3750$', '$5050$', '$3775$'],
      answer: 3,
      solution: 'Pair the ends: $51 + 100 = 151$, $52 + 99 = 151$, and so on. There are $50$ numbers, so $25$ pairs, each summing to $151$: $25 \\times 151 = 3775$. (Half the numbers does not mean half the sum — these are the big ones!)',
    },
    {
      q: 'A woodpile is stacked so the top row holds $1$ log, the next row holds $2$ logs, the next holds $3$, and so on down to a bottom row of $30$ logs. How many logs are in the pile?',
      choices: ['$450$', '$465$', '$435$', '$900$'],
      answer: 1,
      solution: 'The pile holds $1 + 2 + 3 + \\cdots + 30$. Pair the top row with the bottom row: $1 + 30 = 31$, then $2 + 29 = 31$, and so on. The $30$ rows make $15$ pairs, each holding $31$ logs, so the pile has $15 \\times 31 = 465$ logs.',
    },
  ],
  // 2. Regroup factors to build a round number.
  [
    {
      q: 'Compute $4 \\times 27 \\times 250$.',
      choices: ['$2700$', '$10{,}800$', '$27{,}000$', '$54{,}000$'],
      answer: 2,
      solution: 'Hunt for the friendly pair before multiplying anything: $4 \\times 250 = 1000$. Regrouping gives $(4 \\times 250) \\times 27 = 1000 \\times 27 = 27{,}000$.',
    },
    {
      q: 'Compute $16 \\times 125 \\times 5$.',
      choices: ['$10{,}000$', '$12{,}500$', '$2000$', '$1000$'],
      answer: 0,
      solution: 'Split $16$ into $8 \\times 2$ so that a friendly pair appears: $16 \\times 125 \\times 5 = 8 \\times 2 \\times 125 \\times 5$. Now $8 \\times 125 = 1000$ and $2 \\times 5 = 10$, so the product is $1000 \\times 10 = 10{,}000$.',
    },
    {
      q: 'Compute $50 \\times 19 \\times 20$.',
      choices: ['$1900$', '$38{,}000$', '$20{,}000$', '$19{,}000$'],
      answer: 3,
      solution: 'Leave the awkward $19$ alone and pair the round numbers: $50 \\times 20 = 1000$. Then $1000 \\times 19 = 19{,}000$.',
    },
  ],
  // 3. Distributive property, pulled out backwards.
  [
    {
      q: 'Compute $83 \\times 58 + 83 \\times 42$.',
      choices: ['$8300$', '$830$', '$7470$', '$16{,}600$'],
      answer: 0,
      solution: 'Both products share the factor $83$, so run the distributive property backwards: $83 \\times 58 + 83 \\times 42 = 83 \\times (58 + 42) = 83 \\times 100 = 8300$.',
    },
    {
      q: 'Compute $73 \\times 125 - 73 \\times 25$.',
      choices: ['$730$', '$7300$', '$9125$', '$10{,}950$'],
      answer: 1,
      solution: 'The distributive property works over subtraction too: $73 \\times 125 - 73 \\times 25 = 73 \\times (125 - 25) = 73 \\times 100 = 7300$. Notice we subtract inside the parentheses — adding there would answer a different question.',
    },
    {
      q: 'Sasha computes $64 \\times 19 + 64 \\times \\square$ and gets exactly $6400$. What number is in the box?',
      choices: ['$100$', '$19$', '$5184$', '$81$'],
      answer: 3,
      solution: 'Factor out the $64$: the expression is $64 \\times (19 + \\square)$. For that to equal $6400 = 64 \\times 100$, the parentheses must hold $100$. So $19 + \\square = 100$, which makes $\\square = 81$.',
    },
  ],
  // 4. Sign of a product from the count of negative factors.
  [
    {
      q: 'Compute $(-2) \\times (-2) \\times (-2) \\times (-2)$.',
      choices: ['$16$', '$-16$', '$8$', '$-8$'],
      answer: 0,
      solution: 'Count the negative factors: four of them, an even number, so all the sign flips cancel and the product is positive. The sizes give $2 \\times 2 \\times 2 \\times 2 = 16$, so the answer is $16$.',
    },
    {
      q: 'Compute $(-1) \\times (-2) \\times (-3) \\times (-4) \\times (-5)$.',
      choices: ['$120$', '$-120$', '$-15$', '$15$'],
      answer: 1,
      solution: 'There are five negative factors — an odd number — so the product is negative. The sizes multiply to $1 \\times 2 \\times 3 \\times 4 \\times 5 = 120$, so the answer is $-120$.',
    },
    {
      q: 'Five numbers are multiplied together. Three of them are negative and two are positive, and their sizes (ignoring signs) are $2$, $2$, $5$, $5$, and $3$. What is the product?',
      choices: ['$-17$', '$300$', '$-300$', '$17$'],
      answer: 2,
      solution: 'You do not need to know which factors are which. Each negative factor flips the sign once, and three flips is an odd number, so the product is negative. The sizes multiply to $2 \\times 2 \\times 5 \\times 5 \\times 3 = 300$, so the product is $-300$.',
    },
  ],
  // 5. Alternating sum handled by pairing.
  [
    {
      q: 'Compute $2 - 4 + 6 - 8 + \\cdots + 78 - 80$.',
      choices: ['$-20$', '$40$', '$-40$', '$-80$'],
      answer: 2,
      solution: 'Group the terms two at a time: $(2 - 4) + (6 - 8) + \\cdots + (78 - 80)$. Each pair equals $-2$. The list runs $2, 4, 6, \\ldots, 80$, which is $40$ numbers, so there are $20$ pairs. The total is $20 \\times (-2) = -40$.',
    },
    {
      q: 'Compute $1 - 2 + 3 - 4 + \\cdots - 98 + 99$.',
      choices: ['$49$', '$50$', '$-49$', '$-50$'],
      answer: 1,
      solution: 'This sum ends on a plus, so pair from the left and watch for a leftover: $(1 - 2) + (3 - 4) + \\cdots + (97 - 98) + 99$. Each pair equals $-1$, and the numbers $1$ through $98$ make $49$ pairs, giving $-49$. Then the lonely $99$ joins in: $-49 + 99 = 50$.',
    },
    {
      q: 'Compute $-1 + 2 - 3 + 4 - \\cdots - 59 + 60$.',
      choices: ['$-30$', '$60$', '$0$', '$30$'],
      answer: 3,
      solution: 'This one starts with a minus, so each pair is (small negative) plus (bigger positive): $(-1 + 2) + (-3 + 4) + \\cdots + (-59 + 60)$. Every pair equals $+1$. The numbers $1$ through $60$ make $30$ pairs, so the sum is $30$.',
    },
  ],
  // 6. Distribute over a near-round number.
  [
    {
      q: 'Compute $998 \\times 35$.',
      choices: ['$34{,}930$', '$34{,}965$', '$35{,}070$', '$34{,}860$'],
      answer: 0,
      solution: 'Write $998$ as $1000 - 2$ and distribute: $998 \\times 35 = 1000 \\times 35 - 2 \\times 35 = 35{,}000 - 70 = 34{,}930$. The number of $35$s you take away matches how far $998$ sits below $1000$ — that is $2$ of them, not $1$.',
    },
    {
      q: 'Compute $1002 \\times 64$.',
      choices: ['$64{,}000$', '$64{,}064$', '$64{,}128$', '$63{,}872$'],
      answer: 2,
      solution: 'Here the friendly number is below, not above: $1002 = 1000 + 2$. Distribute: $1002 \\times 64 = 64{,}000 + 2 \\times 64 = 64{,}000 + 128 = 64{,}128$. Since $1002$ is bigger than $1000$, the extra gets added on.',
    },
    {
      q: 'Compute $99 \\times 99$.',
      choices: ['$9899$', '$9900$', '$9702$', '$9801$'],
      answer: 3,
      solution: 'Rewrite one factor as $100 - 1$ and distribute: $99 \\times 99 = 99 \\times 100 - 99 \\times 1 = 9900 - 99 = 9801$. Take away a whole group of $99$, not just $1$.',
    },
  ],
  // 7. Zero-product property.
  [
    {
      q: 'Three numbers $x$, $y$, and $z$ satisfy $x \\times y \\times z = 0$, and you are told that $x = 5$. What must be true?',
      choices: ['At least one of $y$ and $z$ is $0$', 'Both $y$ and $z$ must be $0$', '$y$ and $z$ are opposites', 'No such $y$ and $z$ exist'],
      answer: 0,
      solution: 'A product of nonzero numbers is never $0$, so some factor has to be $0$. It cannot be $x$, since $x = 5$. That leaves $y$ and $z$: at least one of them is $0$. Both could be $0$, but only one is required — for instance $y = 0$ and $z = 7$ works fine.',
    },
    {
      q: 'For how many whole numbers $n$ from $1$ to $10$ does $(n - 3) \\times (n - 7) \\times (n - 11) = 0$?',
      choices: ['$1$', '$2$', '$3$', '$0$'],
      answer: 1,
      solution: 'A product is $0$ exactly when one of its factors is $0$. So we need $n - 3 = 0$, or $n - 7 = 0$, or $n - 11 = 0$ — that is, $n = 3$, $n = 7$, or $n = 11$. Only $3$ and $7$ land between $1$ and $10$, so the answer is $2$ values.',
    },
    {
      q: 'Two numbers multiply to zero: $(x - 4) \\times (x + 6) = 0$. What are the possible values of $x$?',
      choices: ['$-4$ or $6$', '$4$ or $6$', '$-4$ or $-6$', '$4$ or $-6$'],
      answer: 3,
      solution: 'One of the two factors must be $0$. If $x - 4 = 0$, then $x = 4$. If $x + 6 = 0$, then $x$ is the number you add $6$ to and get $0$ — that is $x = -6$. So $x$ is $4$ or $-6$. Check: $4 - 4 = 0$, and $-6 + 6 = 0$.',
    },
  ],
  // 8. Rewrite a division to make it easy.
  [
    {
      q: 'Compute $1450 \\div 25$.',
      choices: ['$232$', '$58$', '$145$', '$29$'],
      answer: 1,
      solution: 'Multiplying both numbers by the same amount does not change a quotient, so multiply both by $4$ to turn the divisor into $100$: $1450 \\div 25 = 5800 \\div 100 = 58$. Both numbers have to be scaled — scaling only the top would change the answer.',
    },
    {
      q: 'Compute $4000 \\div 125$.',
      choices: ['$32$', '$256$', '$320$', '$500$'],
      answer: 0,
      solution: 'Multiply both numbers by $8$, since $125 \\times 8 = 1000$: $4000 \\div 125 = 32{,}000 \\div 1000 = 32$.',
    },
    {
      q: 'Compute $2400 \\div 16$.',
      choices: ['$300$', '$600$', '$150$', '$1500$'],
      answer: 2,
      solution: 'Since $16 = 2 \\times 2 \\times 2 \\times 2$, dividing by $16$ is halving four times: $2400 \\to 1200 \\to 600 \\to 300 \\to 150$. Four halvings, not three — stopping early divides by only $8$.',
    },
  ],
  // 9. Counting negations.
  [
    {
      q: 'Simplify $-(-(-(-(-6))))$.',
      choices: ['$-6$', '$6$', '$-30$', '$30$'],
      answer: 0,
      solution: 'Count the minus signs in front: there are five. Each one flips you to the other side of the number line, and an odd number of flips leaves you on the negative side. So the answer is $-6$.',
    },
    {
      q: 'A number $x$ satisfies $-(-(-x)) = 12$. What is $x$?',
      choices: ['$12$', '$4$', '$-12$', '$-4$'],
      answer: 2,
      solution: 'Simplify the left side first. Three negations is an odd number of flips, so $-(-(-x)) = -x$. The equation is really $-x = 12$, which means $x = -12$. Check: $-(-(-(-12))) $ has three flips applied to $-12$, giving $12$. ✓',
    },
    {
      q: 'Simplify $-(-3) - (-(-4))$.',
      choices: ['$7$', '$1$', '$-7$', '$-1$'],
      answer: 3,
      solution: 'Take the two pieces one at a time. The first is $-(-3)$: two flips, so it is $3$. The second is $-(-4) = 4$, and then a third flip makes $-(-(-4)) = -4$. The expression asks you to subtract that piece: $3 - 4 = -1$.',
    },
  ],
  // 10. Order of operations with signed numbers.
  [
    {
      q: 'Compute $(4 - 11) \\times (-5)$.',
      choices: ['$-35$', '$35$', '$59$', '$-59$'],
      answer: 1,
      solution: 'Parentheses first: $4 - 11 = -7$, since $11$ is bigger than $4$. Then $(-7) \\times (-5) = 35$ — two negative factors make a positive product.',
    },
    {
      q: 'Compute $(-3) \\times (7 - 10) \\times (-2)$.',
      choices: ['$18$', '$-1$', '$-18$', '$1$'],
      answer: 2,
      solution: 'Do the parentheses first: $7 - 10 = -3$. Now the product is $(-3) \\times (-3) \\times (-2)$. Three negative factors is an odd number, so the answer is negative, and the sizes give $3 \\times 3 \\times 2 = 18$. The answer is $-18$.',
    },
    {
      q: 'Compute $(-4) \\times (6 - 9) - 5$.',
      choices: ['$17$', '$-7$', '$-17$', '$7$'],
      answer: 3,
      solution: 'Parentheses first: $6 - 9 = -3$. Next multiplication: $(-4) \\times (-3) = 12$, positive because two negatives cancel. Subtraction comes last: $12 - 5 = 7$.',
    },
  ],
  // 11. Reciprocal of an expression you must simplify first.
  [
    {
      q: 'What is the reciprocal of $6 \\div 21$?',
      choices: ['$\\frac{7}{2}$', '$\\frac{2}{7}$', '$\\frac{1}{126}$', '$126$'],
      answer: 0,
      solution: 'Simplify before flipping: $6 \\div 21 = \\frac{6}{21} = \\frac{2}{7}$. Now flip it: the reciprocal is $\\frac{7}{2}$. Check: $\\frac{2}{7} \\times \\frac{7}{2} = 1$. ✓',
    },
    {
      q: 'The reciprocal of $x$ is $\\frac{3}{8}$. What is the reciprocal of $2x$?',
      choices: ['$\\frac{16}{3}$', '$\\frac{3}{4}$', '$\\frac{3}{16}$', '$\\frac{8}{3}$'],
      answer: 2,
      solution: 'If the reciprocal of $x$ is $\\frac{3}{8}$, then flipping back gives $x = \\frac{8}{3}$. Doubling it gives $2x = \\frac{16}{3}$, and flipping that gives $\\frac{3}{16}$. Notice that doubling a number halves its reciprocal — $\\frac{3}{16}$ is half of $\\frac{3}{8}$, not double.',
    },
    {
      q: 'What is the reciprocal of $(-6) \\div 15$?',
      choices: ['$\\frac{5}{2}$', '$-\\frac{2}{5}$', '$\\frac{2}{5}$', '$-\\frac{5}{2}$'],
      answer: 3,
      solution: 'First simplify: $(-6) \\div 15 = -\\frac{6}{15} = -\\frac{2}{5}$. A reciprocal must multiply back to $+1$, so it keeps the minus sign: the reciprocal is $-\\frac{5}{2}$. Check: $\\left(-\\frac{2}{5}\\right) \\times \\left(-\\frac{5}{2}\\right) = 1$. ✓',
    },
  ],
  // 12. A quantity equal to its own opposite must be zero.
  [
    {
      q: 'A number $y$ satisfies $y + 12 = -(y + 12)$. What is $y$?',
      choices: ['$-12$', '$12$', '$0$', '$-6$'],
      answer: 0,
      solution: 'Think of $y + 12$ as a single quantity. The equation says this quantity equals its own opposite, and the only number that equals its own opposite is $0$. So $y + 12 = 0$, which makes $y = -12$. Check: both sides are $0$. ✓',
    },
    {
      q: 'For which value of $x$ is $x - 20$ the opposite of $x + 6$?',
      choices: ['$-7$', '$7$', '$14$', '$13$'],
      answer: 1,
      solution: 'Two numbers are opposites exactly when they add to $0$. So $(x - 20) + (x + 6) = 0$. The left side is $x + x - 20 + 6 = 2x - 14$, so $2x - 14 = 0$, giving $2x = 14$ and $x = 7$. Check: $7 - 20 = -13$ and $7 + 6 = 13$ — opposites. ✓',
    },
    {
      q: 'Two numbers $p$ and $q$ satisfy $p - q = q - p$, and also $p + q = 18$. What is $p$?',
      choices: ['$18$', '$0$', '$9$', '$36$'],
      answer: 2,
      solution: 'Swapping a subtraction gives the opposite: $q - p = -(p - q)$. So the first equation says $p - q$ equals its own opposite, which forces $p - q = 0$, meaning $p = q$. Then $p + q = 18$ becomes $p + p = 18$, so $p = 9$.',
    },
  ],
]

const worksheet = [
  // 1. Friendly pairs in a long sum.
  [
    {
      q: 'Compute $125 + 68 + 75 + 32$.',
      answer: '$300$',
      solution: 'Reorder to bring friendly numbers together: $125 + 75 = 200$ and $68 + 32 = 100$. Adding those gives $200 + 100 = 300$.',
    },
    {
      q: 'Compute $47 + 88 + 53 + 12 + 60$.',
      answer: '$260$',
      solution: 'Look for pairs that make $100$: $47 + 53 = 100$ and $88 + 12 = 100$. That leaves the $60$ on its own, so the total is $100 + 100 + 60 = 260$.',
    },
    {
      q: 'A reading club logged $86$ pages one week, then $145$, then $114$, then $55$. How many pages did the club log in all?',
      answer: '$400$',
      solution: 'Add in whatever order is easiest: $86 + 114 = 200$ and $145 + 55 = 200$. The club logged $200 + 200 = 400$ pages.',
    },
  ],
  // 2. Regroup factors.
  [
    {
      q: 'Compute $8 \\times 23 \\times 125$.',
      answer: '$23{,}000$',
      solution: 'Multiply the friendly pair first: $8 \\times 125 = 1000$. Then $1000 \\times 23 = 23{,}000$.',
    },
    {
      q: 'Compute $5 \\times 37 \\times 20$.',
      answer: '$3700$',
      solution: 'Regroup so the round numbers meet: $5 \\times 20 = 100$, and then $100 \\times 37 = 3700$.',
    },
    {
      q: 'A shop packs $25$ pencils in a box, $12$ boxes in a crate, and ships $8$ crates. How many pencils is that?',
      answer: '$2400$',
      solution: 'The total is $25 \\times 12 \\times 8$. Pair the friendly factors instead of going in order: $25 \\times 8 = 200$, and then $200 \\times 12 = 2400$ pencils.',
    },
  ],
  // 3. Signed reordering of a subtraction chain.
  [
    {
      q: 'Compute $64 - 39 + 36 - 41$.',
      answer: '$20$',
      solution: 'Keep each sign glued to its number and reorder: $(64 + 36) - (39 + 41) = 100 - 80 = 20$.',
    },
    {
      q: 'Compute $128 - 75 + 72 - 25$.',
      answer: '$100$',
      solution: 'Group the positives and the negatives separately: $(128 + 72) - (75 + 25) = 200 - 100 = 100$.',
    },
    {
      q: 'Compute $45 - 88 + 55 - 92$.',
      answer: '$-80$',
      solution: 'Reorder with signs attached: $(45 + 55) - (88 + 92) = 100 - 180$. Since $180$ is larger, the answer is negative: $-80$.',
    },
  ],
  // 4. Counting negative factors.
  [
    {
      q: 'Compute $(-4) \\times 25 \\times (-3)$.',
      answer: '$300$',
      solution: 'Two negative factors cancel each other, so the product is positive. Multiply the sizes, taking the friendly pair first: $4 \\times 25 = 100$, then $100 \\times 3 = 300$.',
    },
    {
      q: 'Compute $(-2) \\times (-5) \\times (-9)$.',
      answer: '$-90$',
      solution: 'Three negative factors is an odd number, so the product is negative. The sizes give $2 \\times 5 = 10$, then $10 \\times 9 = 90$, so the answer is $-90$.',
    },
    {
      q: 'Compute $(-6) \\times (-1) \\times (-5) \\times (-2)$.',
      answer: '$60$',
      solution: 'Four negative factors is an even number, so all the flips cancel and the product is positive. The sizes give $6 \\times 5 = 30$ and $1 \\times 2 = 2$, so the answer is $30 \\times 2 = 60$.',
    },
  ],
  // 5. Missing number in an addition or subtraction sentence.
  [
    {
      q: 'What number goes in the blank? $376 + \\square = 604$',
      answer: '$228$',
      solution: 'Count up from $376$ in easy hops: $24$ more reaches $400$, then $204$ more reaches $604$. The blank is $24 + 204 = 228$. Check: $376 + 228 = 604$. ✓',
    },
    {
      q: 'What number goes in the blank? $\\square + 189 = 435$',
      answer: '$246$',
      solution: 'Order does not matter in addition, so this asks the same thing as $189 + \\square = 435$. Count up from $189$: $11$ reaches $200$, then $235$ more reaches $435$. The blank is $11 + 235 = 246$. Check: $246 + 189 = 435$. ✓',
    },
    {
      q: 'What number goes in the blank? $\\square - 158 = 347$',
      answer: '$505$',
      solution: 'Here the blank is the number you start from, so put back what was taken away: $\\square = 347 + 158$. Add: $347 + 158 = 505$. Check: $505 - 158 = 347$. ✓',
    },
  ],
  // 6. Distributive property over a near-round number.
  [
    {
      q: 'Use the distributive property to compute $7 \\times 998$.',
      answer: '$6986$',
      solution: 'Write $998 = 1000 - 2$. Then $7 \\times 998 = 7000 - 7 \\times 2 = 7000 - 14 = 6986$. Because $998$ is $2$ below $1000$, you take away two $7$s.',
    },
    {
      q: 'Use the distributive property to compute $9 \\times 1004$.',
      answer: '$9036$',
      solution: 'Write $1004 = 1000 + 4$. Then $9 \\times 1004 = 9000 + 9 \\times 4 = 9000 + 36 = 9036$. This time the friendly number is smaller, so the extra gets added on.',
    },
    {
      q: 'Use the distributive property to compute $12 \\times 995$.',
      answer: '$11{,}940$',
      solution: 'Write $995 = 1000 - 5$. Then $12 \\times 995 = 12{,}000 - 12 \\times 5 = 12{,}000 - 60 = 11{,}940$.',
    },
  ],
  // 7. Nested negations.
  [
    {
      q: 'Simplify $-(-(-(-23)))$.',
      answer: '$23$',
      solution: 'Count the minus signs: there are four. Each one flips to the other side of the number line, and an even number of flips brings you home. The answer is $23$.',
    },
    {
      q: 'Simplify $-(-(-(-(-9))))$.',
      answer: '$-9$',
      solution: 'There are five minus signs. Five flips is an odd number, so you finish on the negative side: the answer is $-9$.',
    },
    {
      q: 'Simplify $-(-5) + (-(-(-3)))$.',
      answer: '$2$',
      solution: 'Handle each piece separately. $-(-5)$ has two flips, so it is $5$. $-(-(-3))$ has three flips, an odd number, so it is $-3$. Then $5 + (-3) = 2$.',
    },
  ],
  // 8. Chained division combined into one easy division.
  [
    {
      q: 'Compute $56{,}000 \\div 8 \\div 125$.',
      answer: '$56$',
      solution: 'Dividing by $8$ and then by $125$ is the same as dividing by $8 \\times 125 = 1000$. So the answer is $56{,}000 \\div 1000 = 56$.',
    },
    {
      q: 'Compute $3200 \\div 2 \\div 50$.',
      answer: '$32$',
      solution: 'Two divisions in a row combine into one: dividing by $2$ then by $50$ is dividing by $2 \\times 50 = 100$. So the answer is $3200 \\div 100 = 32$.',
    },
    {
      q: 'Compute $6400 \\div 4 \\div 4 \\div 4$.',
      answer: '$100$',
      solution: 'Three divisions by $4$ combine into a single division by $4 \\times 4 \\times 4 = 64$, so the answer is $6400 \\div 64 = 100$. Stepping through works too: $6400 \\to 1600 \\to 400 \\to 100$.',
    },
  ],
  // 9. Telescoping differences.
  [
    {
      q: 'If $x - y = 23$ and $x - z = 9$, what is $z - y$?',
      answer: '$14$',
      solution: 'Subtract the second fact from the first: $(x - y) - (x - z) = z - y$, because the two $x$ terms cancel and subtracting $-z$ adds $z$. So $z - y = 23 - 9 = 14$.',
    },
    {
      q: 'If $a - b = 6$ and $b - c = -10$, what is $a - c$?',
      answer: '$-4$',
      solution: 'Add the two facts: $(a - b) + (b - c) = a - c$, since $-b$ and $+b$ cancel. So $a - c = 6 + (-10) = -4$.',
    },
    {
      q: 'If $m - n = 9$, $n - p = 4$, and $p - q = 7$, what is $m - q$?',
      answer: '$20$',
      solution: 'Add all three facts. Going down the chain, $-n$ cancels $+n$ and $-p$ cancels $+p$, leaving $m - q$. So $m - q = 9 + 4 + 7 = 20$.',
    },
  ],
  // 10. Product of many equal signed factors.
  [
    {
      q: 'Compute the product $(1-3) \\times (2-4) \\times (3-5) \\times \\cdots \\times (6-8)$.',
      answer: '$64$',
      solution: 'Every factor equals $-2$, and there are $6$ of them: $(1-3)$, $(2-4)$, $(3-5)$, $(4-6)$, $(5-7)$, and $(6-8)$. Six negative factors is an even number, so the product is positive, and the sizes give $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$. The answer is $64$.',
    },
    {
      q: 'Compute the product $(5-6) \\times (6-7) \\times (7-8) \\times \\cdots \\times (14-15)$.',
      answer: '$1$',
      solution: 'Each factor equals $-1$. Counting the first numbers $5, 6, 7, \\ldots, 14$ gives $10$ factors. An even number of negatives makes a positive product, and the sizes all equal $1$, so the answer is $1$.',
    },
    {
      q: 'Compute the product $(1-4) \\times (2-5) \\times (3-6) \\times (4-7)$.',
      answer: '$81$',
      solution: 'Every factor equals $-3$, and there are $4$ of them. Four negatives is an even number, so the product is positive: $3 \\times 3 \\times 3 \\times 3 = 81$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 1,
  challenge,
  worksheet,
}
