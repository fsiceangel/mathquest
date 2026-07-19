// Prealgebra — Chapter 15: Problem-Solving Strategies
// All problems, explanations, and examples are original MathQuest content.

const s151 = {
  id: '15.1',
  title: 'Find a Pattern',
  learn: {
    concepts: [
      {
        heading: 'Ask how the terms change',
        body: 'When you meet a sequence like $4, 7, 10, 13, \\ldots$, do not stare at the numbers — look at the jumps between them. Here each term is $3$ more than the last. Once you know the rule, you can predict any term without listing them all.',
      },
      {
        heading: 'Units digits travel in cycles',
        body: 'The units digit of a product only depends on the units digits being multiplied. So the units digits of $7^1, 7^2, 7^3, 7^4, \\ldots$ go $7, 9, 3, 1$ and then repeat forever in a cycle of length $4$. Powers of every digit settle into a short repeating cycle like this.',
      },
      {
        heading: 'Remainders tell you where you are in a cycle',
        body: 'Anything that repeats — days of the week, bead colors, units digits — is governed by remainders. To find the $50$th item in a pattern that repeats every $4$, divide: $50 = 4 \\times 12 + 2$, so the $50$th item matches the $2$nd. The remainder is your address inside the cycle.',
      },
      {
        heading: 'Try small cases first',
        body: 'Facing a big scary question like "what is the units digit of $7^{2026}$"? Shrink it! Work out the first few small cases, spot the pattern, then ride the pattern all the way up. Small cases are the pattern-finder\'s best friend.',
      },
    ],
    examples: [
      {
        problem: 'What is the units digit of $7^{2026}$?',
        steps: [
          'Try small cases: $7^1 = 7$, $7^2 = 49$, $7^3 = 343$, $7^4 = 2401$. The units digits go $7, 9, 3, 1$ — then $7^5$ ends in $7$ again, so the cycle $7, 9, 3, 1$ repeats every $4$ powers.',
          'Find our address in the cycle: $2026 = 4 \\times 506 + 2$, so the remainder is $2$.',
          'A remainder of $2$ means $7^{2026}$ matches the $2$nd entry of the cycle, which is $9$.',
        ],
        answer: 'The units digit of $7^{2026}$ is $9$',
      },
      {
        problem: 'The sequence $2, 5, 8, 11, \\ldots$ adds $3$ each time. What is its $20$th term?',
        steps: [
          'Do not list all $20$ terms — count the jumps instead. Getting from the $1$st term to the $20$th takes $19$ jumps of $3$.',
          'So the $20$th term is $2 + 19 \\times 3 = 2 + 57$.',
        ],
        answer: 'The $20$th term is $59$',
      },
      {
        problem: 'A necklace repeats the pattern red, red, blue over and over. What color is the $50$th bead?',
        steps: [
          'The pattern repeats every $3$ beads, so divide by $3$: $50 = 3 \\times 16 + 2$.',
          'A remainder of $2$ means the $50$th bead matches the $2$nd bead of the pattern.',
          'The pattern is red, red, blue — so the $2$nd bead is red.',
        ],
        answer: 'The $50$th bead is red',
      },
    ],
  },
  problems: [
    {
      q: 'What is the next term of the sequence $4, 7, 10, 13, \\ldots$?',
      choices: ['$15$', '$16$', '$17$', '$19$'],
      answer: 1,
      solution: 'Find the pattern: each term is $3$ more than the one before. So the next term is $13 + 3 = 16$.',
    },
    {
      q: 'What is the next term of the sequence $3, 6, 12, 24, \\ldots$?',
      choices: ['$36$', '$30$', '$48$', '$27$'],
      answer: 2,
      solution: 'Check the jumps: $3 \\to 6 \\to 12 \\to 24$. Each term is double the one before — the sequence multiplies, it does not add. So the next term is $24 \\times 2 = 48$. (If you guessed $36$, you assumed the sequence keeps adding $12$ — always test your rule on every jump!)',
    },
    {
      q: 'A bracelet repeats the pattern red, orange, yellow, green over and over. What color is the $27$th bead?',
      choices: ['Red', 'Orange', 'Yellow', 'Green'],
      answer: 2,
      solution: 'The pattern repeats every $4$ beads, so use a remainder: $27 = 4 \\times 6 + 3$. A remainder of $3$ means the $27$th bead matches the $3$rd in the pattern, which is yellow.',
    },
    {
      q: 'What is the units digit of $6^{100}$?',
      choices: ['$0$', '$2$', '$4$', '$6$'],
      answer: 3,
      solution: 'Try small cases: $6^1 = 6$, $6^2 = 36$, $6^3 = 216$. The units digit is $6$ every single time — a cycle of length $1$! So $6^{100}$ ends in $6$.',
    },
    {
      q: 'The sequence $5, 9, 13, 17, \\ldots$ adds $4$ each time. What is its $30$th term?',
      choices: ['$121$', '$125$', '$117$', '$120$'],
      answer: 0,
      solution: 'Count the jumps, not the terms: reaching the $30$th term takes $29$ jumps of $4$. So it is $5 + 29 \\times 4 = 5 + 116 = 121$. (Careful: using $30$ jumps gives $125$, one jump too many — a term-versus-jump mix-up.)',
    },
    {
      q: 'What is the units digit of $3^{15}$?',
      choices: ['$1$', '$3$', '$7$', '$9$'],
      answer: 2,
      solution: 'Small cases first: $3^1, 3^2, 3^3, 3^4$ end in $3, 9, 7, 1$, and then the cycle repeats every $4$. Since $15 = 4 \\times 3 + 3$, the remainder is $3$, so $3^{15}$ matches the $3$rd entry of the cycle: $7$.',
    },
    {
      q: 'Today is Tuesday. What day of the week will it be $40$ days from today?',
      choices: ['Saturday', 'Sunday', 'Monday', 'Friday'],
      answer: 1,
      solution: 'Days of the week repeat every $7$, so only the remainder matters: $40 = 7 \\times 5 + 5$. Five weeks from today is Tuesday again, and $5$ more days takes us to Sunday.',
    },
    {
      q: 'What is the units digit of $8^{22}$?',
      choices: ['$8$', '$2$', '$6$', '$4$'],
      answer: 3,
      solution: 'The powers of $8$ end in $8, 4, 2, 6$ and then repeat every $4$. Since $22 = 4 \\times 5 + 2$, the remainder is $2$, so $8^{22}$ matches the $2$nd entry: $4$. (Careful: forgetting the remainder step and grabbing the last cycle entry gives $6$.)',
    },
    {
      q: 'A number machine follows one secret rule. It turns $2$ into $7$, turns $3$ into $10$, and turns $5$ into $16$. What does it turn $10$ into?',
      choices: ['$31$', '$30$', '$15$', '$33$'],
      answer: 0,
      solution: 'Hunt for the rule and test it on every clue. "Triple, then add $1$" works: $3 \\times 2 + 1 = 7$, $3 \\times 3 + 1 = 10$, $3 \\times 5 + 1 = 16$. So $10$ becomes $3 \\times 10 + 1 = 31$. (The rule "add $5$" fits the first clue but fails the second — one clue is never enough!)',
    },
    {
      q: 'What is the units digit of $3^{2026} + 7^{2026}$?',
      choices: ['$8$', '$0$', '$2$', '$6$'],
      answer: 0,
      solution: 'Handle each power with its cycle. Powers of $3$ end in $3, 9, 7, 1$ repeating, and $2026 = 4 \\times 506 + 2$, so $3^{2026}$ ends in $9$. Powers of $7$ end in $7, 9, 3, 1$, so $7^{2026}$ also ends in $9$. The sum ends the way $9 + 9 = 18$ ends: in $8$.',
    },
  ],
}

const s152 = {
  id: '15.2',
  title: 'Make a List',
  learn: {
    concepts: [
      {
        heading: 'Write them all down — in order',
        body: 'When a problem asks "how many ways," the surest tool is a complete list. The trick is to list in a strict order — smallest to largest, or biggest coin first — so you can be certain nothing is skipped and nothing appears twice.',
      },
      {
        heading: 'Organize by cases',
        body: 'Big lists become easy when you split them into cases. Counting ways to make $50$ cents? First list all ways with two quarters, then all ways with one quarter, then all ways with none. Finish each case completely before moving to the next.',
      },
      {
        heading: 'Watch for sneaky duplicates',
        body: 'Decide up front whether order matters. Choosing the pair $2$ and $4$ is the same as choosing $4$ and $2$ — if you list both, your count is double the truth. Writing each pair with the smaller number first kills duplicates automatically.',
      },
      {
        heading: 'A list can beat a formula',
        body: 'Formulas are fast but fragile — one forgotten condition and the answer is wrong. When the numbers are small, a careful list is often quicker, and you can literally see that it is complete. Champions list first and formula-check second.',
      },
    ],
    examples: [
      {
        problem: 'How many ways can you make $25$ cents using only dimes and nickels?',
        steps: [
          'Organize by the number of dimes — the biggest coin first.',
          'Two dimes: $20$ cents, so $1$ nickel finishes it. One dime: $10$ cents, so $3$ nickels. Zero dimes: $5$ nickels.',
          'The list is complete: $(2$ dimes, $1$ nickel$)$, $(1$ dime, $3$ nickels$)$, $(0$ dimes, $5$ nickels$)$ — nothing skipped, nothing repeated.',
        ],
        answer: 'There are $3$ ways',
      },
      {
        problem: 'How many two-digit numbers have digits that add up to $9$?',
        steps: [
          'List in increasing order so nothing is missed: $18, 27, 36, 45, 54, 63, 72, 81, 90$.',
          'Check the edges: $09$ is not a two-digit number, and $90$ works since $9 + 0 = 9$.',
          'Count the list: $9$ numbers.',
        ],
        answer: 'There are $9$ such numbers',
      },
      {
        problem: 'Using the digits $1$, $2$, and $3$ at most once each, how many two-digit numbers can you build?',
        steps: [
          'Organize by tens digit. Tens digit $1$: the numbers $12, 13$. Tens digit $2$: $21, 23$. Tens digit $3$: $31, 32$.',
          'Each case gives $2$ numbers, and there are $3$ cases: $3 \\times 2 = 6$.',
        ],
        answer: 'There are $6$ two-digit numbers',
      },
    ],
  },
  problems: [
    {
      q: 'A sandwich shop offers $2$ kinds of bread and $3$ fillings. How many different one-filling sandwiches are possible?',
      choices: ['$5$', '$6$', '$8$', '$9$'],
      answer: 1,
      solution: 'Make an organized list by bread. Each bread pairs with $3$ fillings, so the list has $2 \\times 3 = 6$ sandwiches. (Adding $2 + 3 = 5$ is the classic trap — choices multiply, they do not add.)',
    },
    {
      q: 'How many two-digit numbers have two equal odd digits, like $77$?',
      choices: ['$4$', '$9$', '$5$', '$10$'],
      answer: 2,
      solution: 'List them: the digit must be odd, so the numbers are $11, 33, 55, 77, 99$. That is $5$ numbers — one for each odd digit $1, 3, 5, 7, 9$.',
    },
    {
      q: 'How many ways can you make $10$ cents using only nickels and pennies?',
      choices: ['$2$', '$3$', '$4$', '$5$'],
      answer: 1,
      solution: 'Organize by nickels: $2$ nickels ($0$ pennies), $1$ nickel ($5$ pennies), $0$ nickels ($10$ pennies). The complete list has $3$ ways.',
    },
    {
      q: 'How many two-digit numbers have a units digit of $7$?',
      choices: ['$10$', '$8$', '$7$', '$9$'],
      answer: 3,
      solution: 'List them in order: $17, 27, 37, 47, 57, 67, 77, 87, 97$. The tens digit runs from $1$ to $9$, so there are $9$ numbers. (Counting $07$ would give $10$, but that is not a two-digit number.)',
    },
    {
      q: 'How many ways can you make $30$ cents using only dimes and nickels?',
      choices: ['$3$', '$5$', '$6$', '$4$'],
      answer: 3,
      solution: 'Organize by dimes: $3$ dimes, $2$ dimes with $2$ nickels, $1$ dime with $4$ nickels, $0$ dimes with $6$ nickels. The list has $4$ ways — do not forget the all-nickels case!',
    },
    {
      q: 'How many two-digit numbers have digits that add up to $6$?',
      choices: ['$5$', '$7$', '$6$', '$4$'],
      answer: 2,
      solution: 'List in increasing order: $15, 24, 33, 42, 51, 60$. That is $6$ numbers. The sneaky edge cases: $06$ is not two-digit, but $60$ counts since $6 + 0 = 6$.',
    },
    {
      q: 'How many ways can you choose two different numbers from $1, 2, 3, 4, 5$ so that they add up to $6$?',
      choices: ['$2$', '$3$', '$4$', '$5$'],
      answer: 0,
      solution: 'List each pair with the smaller number first: $1 + 5$ and $2 + 4$. That is $2$ ways. ($3 + 3$ uses the same number twice, so it does not count — and $5 + 1$ is a duplicate of $1 + 5$.)',
    },
    {
      q: 'How many ways can you make $50$ cents using quarters, dimes, and nickels?',
      choices: ['$8$', '$10$', '$9$', '$12$'],
      answer: 1,
      solution: 'Organize by quarters. Two quarters: $1$ way. One quarter leaves $25$ cents: $(2,1), (1,3), (0,5)$ in dimes and nickels — $3$ ways. Zero quarters leaves $50$ cents: dimes can be $5, 4, 3, 2, 1, 0$ with nickels filling in — $6$ ways. Total: $1 + 3 + 6 = 10$.',
    },
    {
      q: 'How many three-digit numbers use only the digits $1$ and $2$? (Repeats are allowed, like $212$.)',
      choices: ['$6$', '$9$', '$8$', '$4$'],
      answer: 2,
      solution: 'List them in order: $111, 112, 121, 122, 211, 212, 221, 222$. Each of the $3$ places has $2$ choices, so the list has $2 \\times 2 \\times 2 = 8$ numbers — and the organized list confirms it.',
    },
    {
      q: 'How many two-digit numbers have digits that differ by exactly $3$?',
      choices: ['$13$', '$12$', '$14$', '$7$'],
      answer: 0,
      solution: 'Split into two cases. Tens digit bigger: $30, 41, 52, 63, 74, 85, 96$ — that is $7$. Units digit bigger: $14, 25, 36, 47, 58, 69$ — that is $6$. Total: $7 + 6 = 13$. (Missing the second case entirely gives only $7$; forgetting that $30$ works gives $12$.)',
    },
  ],
}

const s153 = {
  id: '15.3',
  title: 'Draw a Picture',
  learn: {
    concepts: [
      {
        heading: 'Turn words into a sketch',
        body: 'A rough drawing — dots for posts, a bar for a ribbon, a line for a number line — turns a wordy puzzle into something you can see. The picture does not need to be pretty; it needs to show what is really being counted.',
      },
      {
        heading: 'Posts and gaps are different counts',
        body: 'Draw a fence: the posts are dots and the gaps are the spaces between them. A straight fence with $4$ gaps has $5$ posts — always one more post than gaps. This off-by-one surprise is called the fencepost effect, and a sketch makes it impossible to miss.',
      },
      {
        heading: 'Cuts make one more piece',
        body: 'Slicing works like fenceposts in reverse: each cut adds one piece, so cutting a ribbon $5$ times gives $6$ pieces. But a closed loop is different — a ring cut $5$ times gives just $5$ pieces, because the loop starts as one piece with no ends.',
      },
      {
        heading: 'Overlaps get counted twice',
        body: 'When two groups share members — students who like both soccer and basketball, or two strips glued with an overlap — adding the group sizes counts the shared part twice. Draw two overlapping circles or bars, and subtract the overlap once to fix the double count.',
      },
    ],
    examples: [
      {
        problem: 'A straight fence is $40$ meters long, with a post every $5$ meters, including one at each end. How many posts are there?',
        steps: [
          'Sketch it: a line $40$ m long, split into gaps of $5$ m. The number of gaps is $40 \\div 5 = 8$.',
          'Now count dots in the sketch: a straight fence has one more post than gaps, so there are $8 + 1 = 9$ posts.',
        ],
        answer: 'There are $9$ posts',
      },
      {
        problem: 'A $12$-meter ribbon is cut into $2$-meter pieces. How many cuts are needed?',
        steps: [
          'Draw the ribbon as a bar split into $12 \\div 2 = 6$ pieces.',
          'The cuts are the lines between pieces — one fewer than the pieces. So $6$ pieces need $6 - 1 = 5$ cuts.',
        ],
        answer: 'Only $5$ cuts are needed',
      },
      {
        problem: 'In a class of $25$ students, $15$ like soccer, $14$ like basketball, and $8$ like both. How many like neither sport?',
        steps: [
          'Draw two overlapping circles and put $8$ in the overlap first.',
          'Adding $15 + 14 = 29$ counts those $8$ students twice, so the number who like at least one sport is $29 - 8 = 21$.',
          'That leaves $25 - 21 = 4$ students outside both circles.',
        ],
        answer: '$4$ students like neither sport',
      },
    ],
  },
  problems: [
    {
      q: 'A baker cuts a long baguette into $5$ pieces. How many cuts does she make?',
      choices: ['$5$', '$6$', '$4$', '$3$'],
      answer: 2,
      solution: 'Draw a bar split into $5$ pieces: the cuts are the $4$ lines between pieces. Cuts are always one fewer than pieces on a straight loaf.',
    },
    {
      q: 'A straight path is $30$ meters long, with a tree planted every $6$ meters, including at both ends. How many trees are there?',
      choices: ['$5$', '$6$', '$7$', '$4$'],
      answer: 1,
      solution: 'Sketch the path: $30 \\div 6 = 5$ gaps between trees. A straight row has one more tree than gaps: $5 + 1 = 6$ trees. (Answering $5$ is the fencepost trap — that counts the gaps.)',
    },
    {
      q: 'An elevator starts on floor $7$, goes down $4$ floors, up $6$ floors, then down $2$ floors. What floor is it on now?',
      choices: ['$6$', '$8$', '$5$', '$7$'],
      answer: 3,
      solution: 'Draw a vertical number line and hop along it: $7 \\to 3 \\to 9 \\to 7$. The elevator ends right back on floor $7$.',
    },
    {
      q: 'Each cut through a log takes $2$ minutes. How long does it take to saw the log into $4$ pieces?',
      choices: ['$8$ minutes', '$6$ minutes', '$4$ minutes', '$10$ minutes'],
      answer: 1,
      solution: 'Picture the log: $4$ pieces need only $3$ cuts — the cuts sit between the pieces. So the time is $3 \\times 2 = 6$ minutes. (Charging for $4$ cuts gives $8$ minutes, the classic off-by-one.)',
    },
    {
      q: 'An ant stands at $-3$ on a number line. It walks $9$ units right, then $4$ units left. Where is it now?',
      choices: ['$2$', '$-2$', '$8$', '$0$'],
      answer: 0,
      solution: 'Draw the number line and trace the trip: $-3 + 9 = 6$, then $6 - 4 = 2$. The ant ends at $2$.',
    },
    {
      q: 'In a class of $30$ students, $18$ have a dog, $12$ have a cat, and $5$ have both. How many have neither pet?',
      choices: ['$0$', '$3$', '$5$', '$10$'],
      answer: 2,
      solution: 'Draw two overlapping circles with $5$ in the middle. Students with at least one pet: $18 + 12 - 5 = 25$ — we subtract $5$ because the both-pets kids were counted twice. That leaves $30 - 25 = 5$ with neither. (Computing $30 - 18 - 12 = 0$ forgets the overlap.)',
    },
    {
      q: 'A square garden has sides of $12$ meters. Posts are placed around the whole border every $3$ meters, with a post at each corner. How many posts are there?',
      choices: ['$17$', '$15$', '$18$', '$16$'],
      answer: 3,
      solution: 'The border is a closed loop of $4 \\times 12 = 48$ meters, giving $48 \\div 3 = 16$ gaps. On a loop, every post is shared by two gaps, so posts equal gaps: $16$ posts. (Adding one extra, as on a straight fence, gives $17$ — but a loop has no ends!)',
    },
    {
      q: 'Mia climbs the stairs from the $3$rd floor to the $9$th floor. Each flight between floors has $12$ steps. How many steps does she climb?',
      choices: ['$72$', '$96$', '$108$', '$84$'],
      answer: 0,
      solution: 'Draw the floors as dots: from floor $3$ to floor $9$ there are $9 - 3 = 6$ flights (count the gaps, not the floors). So Mia climbs $6 \\times 12 = 72$ steps. (Using $9$ flights gives $108$ — that counts from the ground, not from floor $3$.)',
    },
    {
      q: 'A snail is at the bottom of a $10$-meter well. Each day it climbs up $3$ meters, and each night it slips back $2$ meters. On which day does it first reach the top?',
      choices: ['Day $10$', 'Day $8$', 'Day $7$', 'Day $9$'],
      answer: 1,
      solution: 'Draw the well and track the snail: after each full day-and-night it gains only $1$ meter, so after $7$ nights it sits at $7$ meters. On day $8$ it climbs $3$ more and reaches $10$ — it is out before it can slip! (Dividing $10 \\div 1 = 10$ misses that the final climb needs no slip.)',
    },
    {
      q: 'Three paper strips, each $20$ cm long, are glued into one long strip. Each of the two joints overlaps by $3$ cm. How long is the finished strip?',
      choices: ['$60$ cm', '$57$ cm', '$51$ cm', '$54$ cm'],
      answer: 3,
      solution: 'Draw three bars with the ends overlapping. The total paper is $3 \\times 20 = 60$ cm, but each of the $2$ joints hides $3$ cm of double-counted overlap. So the strip is $60 - 2 \\times 3 = 54$ cm. (Subtracting only one overlap gives $57$; three overlaps gives $51$ — the picture shows exactly two joints.)',
    },
  ],
}

const s154 = {
  id: '15.4',
  title: 'Work Backwards',
  learn: {
    concepts: [
      {
        heading: 'Start where the problem ends',
        body: 'Some puzzles tell you the ending and ask for the beginning: "after all these steps, the result is $20$." Instead of guessing the start, begin at the $20$ and walk the steps in reverse. The end is the strongest clue you have — use it first.',
      },
      {
        heading: 'Undo each operation with its opposite',
        body: 'Every operation has an undo button: subtraction undoes addition, division undoes multiplication, and doubling undoes halving. Walking backwards means pressing the undo button for each step.',
      },
      {
        heading: 'Reverse the order, too',
        body: 'Steps must be undone last-step-first, just like taking off shoes before socks. If a number was doubled and then had $6$ added, working backwards you subtract $6$ first, then halve. Undoing in the wrong order is the most common backwards mistake.',
      },
      {
        heading: 'Check by running forwards',
        body: 'The best part of working backwards is the free check: take your answer, run the original steps forward, and see whether you land on the given ending. If you do, your answer is certain — no doubt left at all.',
      },
    ],
    examples: [
      {
        problem: 'I think of a number, double it, and add $6$. The result is $20$. What was my number?',
        steps: [
          'Work backwards from $20$, undoing the last step first.',
          'The last step was "add $6$," so undo it: $20 - 6 = 14$.',
          'The step before was "double," so undo it: $14 \\div 2 = 7$.',
          'Check forwards: $7$ doubled is $14$, plus $6$ is $20$. ✓',
        ],
        answer: 'The number was $7$',
      },
      {
        problem: 'Kim gives half of her stickers to Jo, then gives $3$ stickers to Lee. She has $9$ left. How many did she start with?',
        steps: [
          'Start at the end: Kim finishes with $9$ stickers.',
          'Undo the gift to Lee: before giving $3$ away she had $9 + 3 = 12$.',
          'Undo the gift to Jo: giving away half means $12$ is the half she kept, so she started with $12 \\times 2 = 24$.',
        ],
        answer: 'Kim started with $24$ stickers',
      },
      {
        problem: 'After a $25\\%$ discount, a jacket costs $\\$36$. What was the original price?',
        steps: [
          'A $25\\%$ discount means you pay $75\\%$, which is $\\frac{3}{4}$ of the original price.',
          'So $\\frac{3}{4}$ of the original is $\\$36$: one quarter is $36 \\div 3 = 12$, and four quarters make $12 \\times 4 = 48$.',
          'Check forwards: $25\\%$ of $\\$48$ is $\\$12$, and $48 - 12 = 36$. ✓',
        ],
        answer: 'The original price was $\\$48$',
      },
    ],
  },
  problems: [
    {
      q: 'I think of a number and add $5$. The result is $12$. What was my number?',
      choices: ['$7$', '$17$', '$8$', '$5$'],
      answer: 0,
      solution: 'Work backwards: undo "add $5$" by subtracting: $12 - 5 = 7$. (Adding instead gives $17$ — remember to press the undo button, not the same button again.)',
    },
    {
      q: 'I think of a number, multiply it by $3$, then subtract $4$. The result is $17$. What was my number?',
      choices: ['$6$', '$7$', '$9$', '$5$'],
      answer: 1,
      solution: 'Undo the steps last-first: undo "subtract $4$" to get $17 + 4 = 21$, then undo "multiply by $3$" to get $21 \\div 3 = 7$. Check forwards: $7 \\times 3 - 4 = 17$. ✓',
    },
    {
      q: 'I think of a number, subtract $6$, then double the result. I end with $18$. What was my number?',
      choices: ['$12$', '$30$', '$15$', '$9$'],
      answer: 2,
      solution: 'Backwards, last step first: undo the doubling with $18 \\div 2 = 9$, then undo "subtract $6$" with $9 + 6 = 15$. (Undoing in the wrong order — $18 + 6 = 24$, then halving — gives $12$, which fails the forward check.)',
    },
    {
      q: 'Half of a number, plus $10$, equals $16$. What is the number?',
      choices: ['$3$', '$22$', '$6$', '$12$'],
      answer: 3,
      solution: 'Work backwards from $16$: undo "plus $10$" to get $6$, then undo the halving by doubling: $6 \\times 2 = 12$. Check: half of $12$ is $6$, plus $10$ is $16$. ✓',
    },
    {
      q: 'A bus leaves the station with some passengers. At the first stop, $5$ get off and $8$ get on. At the second stop, half of the passengers get off, leaving $9$ on board. How many passengers left the station?',
      choices: ['$15$', '$12$', '$18$', '$21$'],
      answer: 0,
      solution: 'Work backwards from the $9$ still aboard. Undo the second stop: $9$ is the half that stayed, so before it there were $18$. Undo the first stop by reversing both changes: subtract the $8$ who got on and return the $5$ who got off: $18 - 8 + 5 = 15$.',
    },
    {
      q: 'Emma spends half of her money on a book, then $\\$4$ on a snack. She has $\\$6$ left. How much did she start with?',
      choices: ['$\\$16$', '$\\$20$', '$\\$10$', '$\\$24$'],
      answer: 1,
      solution: 'Backwards from $\\$6$: undo the snack to get $6 + 4 = 10$, then undo "spent half" by doubling: $10 \\times 2 = 20$. (Doubling before adding back the $\\$4$ gives $\\$16$ — undo the last step first!)',
    },
    {
      q: 'A number increased by $50\\%$ of itself becomes $36$. What was the number?',
      choices: ['$18$', '$54$', '$24$', '$30$'],
      answer: 2,
      solution: 'Growing by $50\\%$ means the result is $\\frac{3}{2}$ of the start. So $36$ is three halves: one half is $36 \\div 3 = 12$, and the whole number is $2 \\times 12 = 24$. Check forwards: $50\\%$ of $24$ is $12$, and $24 + 12 = 36$. ✓ (Subtracting $50\\%$ of $36$ gives $18$ — but the $50\\%$ was measured from the smaller starting number, not from $36$.)',
    },
    {
      q: 'I think of a number, double it, add $6$, then take half of everything. The result is $13$. What was my number?',
      choices: ['$16$', '$20$', '$8$', '$10$'],
      answer: 3,
      solution: 'Undo three steps in reverse: undo the final halving ($13 \\times 2 = 26$), undo "add $6$" ($26 - 6 = 20$), undo the doubling ($20 \\div 2 = 10$). Check forwards: $10 \\to 20 \\to 26 \\to 13$. ✓',
    },
    {
      q: 'A jar of candies is attacked! Ana eats half of them, then Ben eats half of what is left, then Cal eats $5$. Now $7$ remain. How many candies were in the jar at the start?',
      choices: ['$48$', '$33$', '$24$', '$96$'],
      answer: 0,
      solution: 'Rewind the feast: before Cal ate $5$ there were $7 + 5 = 12$. Before Ben ate half there were $12 \\times 2 = 24$. Before Ana ate half there were $24 \\times 2 = 48$. Check forwards: $48 \\to 24 \\to 12 \\to 7$. ✓',
    },
    {
      q: 'A game is on sale: first the price is cut by $20\\%$, then a coupon takes $\\$5$ more off. The final price is $\\$27$. What was the original price?',
      choices: ['$\\$38$', '$\\$45$', '$\\$32$', '$\\$40$'],
      answer: 3,
      solution: 'Backwards, last step first: undo the coupon to get $27 + 5 = 32$. A $20\\%$ cut means $\\$32$ is $80\\% = \\frac{4}{5}$ of the original, so one fifth is $32 \\div 4 = 8$ and the original is $5 \\times 8 = 40$. Check forwards: $40 - 8 = 32$, then $32 - 5 = 27$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'What is the units digit of $2^{100}$?',
    choices: ['$2$', '$4$', '$6$', '$8$'],
    answer: 2,
    solution: 'Find a pattern: powers of $2$ end in $2, 4, 8, 6$ and repeat every $4$. Since $100 = 4 \\times 25$ exactly, the remainder is $0$, which lands on the last entry of the cycle: $6$.',
  },
  {
    q: 'Compute $2 + 4 + 6 + \\cdots + 100$.',
    choices: ['$2500$', '$2550$', '$5050$', '$2600$'],
    answer: 1,
    solution: 'Find a pattern by pairing the ends: $2 + 100 = 102$, $4 + 98 = 102$, and so on. There are $50$ even numbers, making $25$ pairs of $102$: the sum is $25 \\times 102 = 2550$.',
  },
  {
    q: 'January $1$ falls on a Monday. What day of the week is January $31$ of the same year?',
    choices: ['Tuesday', 'Wednesday', 'Thursday', 'Monday'],
    answer: 1,
    solution: 'January $31$ is $30$ days after January $1$. Weeks cycle every $7$, and $30 = 7 \\times 4 + 2$, so it is $2$ days past Monday: Wednesday.',
  },
  {
    q: 'How many ways can you make $15$ cents using pennies, nickels, and dimes?',
    choices: ['$5$', '$6$', '$7$', '$8$'],
    answer: 1,
    solution: 'Make a list organized by the biggest coin. With a dime, the remaining $5$ cents is a nickel or $5$ pennies: $2$ ways. With no dime: $3$ nickels; $2$ nickels and $5$ pennies; $1$ nickel and $10$ pennies; $15$ pennies: $4$ ways. Total: $2 + 4 = 6$.',
  },
  {
    q: 'Eight friends meet, and each pair shakes hands exactly once. How many handshakes happen?',
    choices: ['$28$', '$56$', '$36$', '$64$'],
    answer: 0,
    solution: 'Make an organized count: the first person shakes $7$ hands, the next adds $6$ new ones, then $5$, and so on. The total is $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$. (Computing $8 \\times 7 = 56$ counts every handshake twice — once from each shaker.)',
  },
  {
    q: 'A clock takes $10$ seconds to strike $6$ o\'clock (that is, $6$ strikes). How long does it take to strike $12$ o\'clock?',
    choices: ['$20$ seconds', '$24$ seconds', '$22$ seconds', '$12$ seconds'],
    answer: 2,
    solution: 'Draw the strikes as dots: $6$ strikes have $5$ gaps between them, so each gap lasts $10 \\div 5 = 2$ seconds. Then $12$ strikes have $11$ gaps: $11 \\times 2 = 22$ seconds. (The tempting $20$ seconds comes from doubling — but the gaps are what take time, not the strikes.)',
  },
  {
    q: 'In a school club of $40$ students, $22$ are in band, $19$ are in choir, and $6$ are in both. How many are in neither?',
    choices: ['$5$', '$1$', '$6$', '$0$'],
    answer: 0,
    solution: 'Draw two overlapping circles with $6$ in the middle. Students in at least one group: $22 + 19 - 6 = 35$, subtracting the double-counted overlap. That leaves $40 - 35 = 5$ in neither.',
  },
  {
    q: 'Mia doubles her money, spends $\\$10$, doubles what is left, then spends $\\$12$. She ends with $\\$20$. How much did she start with?',
    choices: ['$\\$11$', '$\\$13$', '$\\$15$', '$\\$18$'],
    answer: 1,
    solution: 'Work backwards, undoing each step: $20 + 12 = 32$; then $32 \\div 2 = 16$; then $16 + 10 = 26$; then $26 \\div 2 = 13$. Check forwards: $13 \\to 26 \\to 16 \\to 32 \\to 20$. ✓',
  },
  {
    q: 'Triangle figures are built from dots: figure $1$ has $1$ dot, figure $2$ has $3$ dots, figure $3$ has $6$ dots, figure $4$ has $10$ dots. How many dots does figure $10$ have?',
    choices: ['$45$', '$50$', '$60$', '$55$'],
    answer: 3,
    solution: 'Find the pattern in the jumps: $+2, +3, +4, \\ldots$ — each new figure adds a row with one more dot. Figure $10$ has $1 + 2 + 3 + \\cdots + 10$ dots, and pairing the ends gives $5 \\times 11 = 55$.',
  },
  {
    q: 'How many two-digit numbers have digits whose product is $12$?',
    choices: ['$2$', '$3$', '$4$', '$6$'],
    answer: 2,
    solution: 'Make a list from the factor pairs of $12$ using single digits: $2 \\times 6$, $3 \\times 4$, $4 \\times 3$, $6 \\times 2$ give $26, 34, 43, 62$. That is $4$ numbers. ($12 = 1 \\times 12$ and $2 \\times 6$... careful — $12$ is not a digit, so $1$-and-$12$ contributes nothing.)',
  },
  {
    q: 'Cutting a rope takes $3$ minutes per cut. How long does it take to cut the rope into $8$ pieces?',
    choices: ['$24$ minutes', '$18$ minutes', '$8$ minutes', '$21$ minutes'],
    answer: 3,
    solution: 'Draw the rope: $8$ pieces need only $7$ cuts, since cuts sit between pieces. Time: $7 \\times 3 = 21$ minutes. (Charging for $8$ cuts gives the off-by-one answer of $24$.)',
  },
  {
    q: 'In a sequence, each term is double the previous term. The $5$th term is $80$. What is the $1$st term?',
    choices: ['$16$', '$8$', '$10$', '$5$'],
    answer: 3,
    solution: 'Work backwards by halving: $80 \\to 40 \\to 20 \\to 10 \\to 5$. Four halvings undo the four doublings between term $1$ and term $5$. Check forwards: $5, 10, 20, 40, 80$. ✓',
  },
]

const worksheet = [
  {
    q: 'What is the next term of the sequence $1, 4, 9, 16, 25, \\ldots$?',
    answer: '$36$',
    solution: 'Find the pattern: these are the perfect squares $1^2, 2^2, 3^2, 4^2, 5^2$. The next is $6^2 = 36$. (You can also spot the jumps $+3, +5, +7, +9$ — the next jump is $+11$.)',
  },
  {
    q: 'What is the units digit of $9^{55}$?',
    answer: '$9$',
    solution: 'Powers of $9$ end in $9, 1, 9, 1, \\ldots$ — a cycle of length $2$. Odd exponents land on $9$, even exponents on $1$. Since $55$ is odd, the units digit is $9$.',
  },
  {
    q: 'How many ways can you make $20$ cents using only dimes and nickels?',
    answer: '$3$ ways',
    solution: 'Make a list organized by dimes: $2$ dimes; $1$ dime and $2$ nickels; $0$ dimes and $4$ nickels. That is $3$ ways.',
  },
  {
    q: 'A straight garden path is $45$ meters long, with a lamp every $9$ meters, including at both ends. How many lamps are there?',
    answer: '$6$ lamps',
    solution: 'Draw a picture: $45 \\div 9 = 5$ gaps between lamps. A straight path has one more lamp than gaps: $5 + 1 = 6$.',
  },
  {
    q: 'I think of a number, multiply it by $4$, then subtract $5$. The result is $27$. What was my number?',
    answer: '$8$',
    solution: 'Work backwards, last step first: undo "subtract $5$" to get $27 + 5 = 32$, then undo "multiply by $4$" to get $32 \\div 4 = 8$. Check forwards: $8 \\times 4 - 5 = 27$. ✓',
  },
  {
    q: 'How many cuts are needed to slice a baguette into $6$ pieces?',
    answer: '$5$ cuts',
    solution: 'Draw the baguette: the cuts sit between the pieces, so $6$ pieces need $6 - 1 = 5$ cuts.',
  },
  {
    q: 'What is the units digit of $13^{13}$?',
    answer: '$3$',
    solution: 'Only the units digit $3$ matters, so this matches the powers of $3$, which end in $3, 9, 7, 1$ repeating every $4$. Since $13 = 4 \\times 3 + 1$, the remainder is $1$, landing on the first entry of the cycle: $3$.',
  },
  {
    q: 'All $50$ students in a grade like pizza or burgers (or both): $32$ like pizza and $27$ like burgers. How many like both?',
    answer: '$9$ students',
    solution: 'Draw two overlapping circles. Adding $32 + 27 = 59$ counts the overlap twice, but only $50$ students exist — so the extra $59 - 50 = 9$ is exactly the number counted twice. $9$ students like both.',
  },
  {
    q: 'Ali gives half of his marbles to Ben, then half of what remains to Carla. Then he finds $6$ marbles under the couch, and now he has $14$. How many marbles did Ali start with?',
    answer: '$32$ marbles',
    solution: 'Work backwards from $14$: undo the lucky find to get $14 - 6 = 8$. Undo the gift to Carla by doubling: $16$. Undo the gift to Ben by doubling: $32$. Check forwards: $32 \\to 16 \\to 8 \\to 14$. ✓',
  },
  {
    q: 'Compute $1 - 2 + 3 - 4 + 5 - 6 + \\cdots - 2024 + 2025$.',
    answer: '$1013$',
    solution: 'Find a pattern by grouping: $(1 - 2) + (3 - 4) + \\cdots + (2023 - 2024)$ makes $1012$ pairs, each equal to $-1$, followed by the lone $+2025$. Total: $-1012 + 2025 = 1013$. (Small-case check: $1 - 2 + 3 = 2$, and our rule gives $-1 + 3 = 2$. ✓)',
  },
]

export default {
  id: 'prealgebra-ch15',
  book: 'prealgebra',
  number: 15,
  title: 'Problem-Solving Strategies',
  intro:
    'You have built a whole toolbox in this book — arithmetic, fractions, percents, angles, and counting. This final chapter is about the tools that tell you which tool to grab: finding patterns, making organized lists, drawing pictures, and working backwards. Master these four strategies and no puzzle will know what hit it!',
  sections: [s151, s152, s153, s154],
  challenge,
  worksheet,
}
