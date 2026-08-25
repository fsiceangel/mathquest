// Prealgebra chapter 3 — variations for sections 3.1-3.3.
// All problems and solutions are original MathQuest content.

const s31 = [
  // p1 — recognise a multiple from a short list
  [
    {
      q: 'Which of these numbers is a multiple of $7$?',
      choices: ['$56$', '$46$', '$60$', '$65$'],
      answer: 0,
      solution:
        'Skip-count by sevens: $7, 14, 21, 28, 35, 42, 49, 56, 63, 70$. Only $56 = 7 \\times 8$ shows up. The others land in the gaps: $46$ sits between $42$ and $49$, $60$ between $56$ and $63$, and $65$ between $63$ and $70$.',
    },
    {
      q: 'Which of these numbers is a multiple of $9$?',
      choices: ['$39$', '$63$', '$75$', '$82$'],
      answer: 1,
      solution:
        'The multiples of $9$ run $9, 18, 27, 36, 45, 54, 63, 72, 81, 90$. The number $63 = 9 \\times 7$ is on the list. Watch out for near-misses: $39$ falls between $36$ and $45$, $75$ between $72$ and $81$, and $82$ between $81$ and $90$.',
    },
    {
      q: 'Which of these numbers is a multiple of $12$?',
      choices: ['$56$', '$66$', '$70$', '$72$'],
      answer: 3,
      solution:
        'Skip-count by twelves: $12, 24, 36, 48, 60, 72$. Only $72 = 12 \\times 6$ appears. Being even is not enough — $56$, $66$, and $70$ are all even, yet each one falls between two multiples of $12$.',
    },
  ],
  // p2 — name the nth multiple
  [
    {
      q: 'What is the fourth multiple of $8$?',
      choices: ['$32$', '$24$', '$40$', '$12$'],
      answer: 0,
      solution:
        'The fourth multiple of $8$ is $8 \\times 4 = 32$. Counting carefully matters: $24 = 8 \\times 3$ is the third multiple and $40 = 8 \\times 5$ is the fifth. And $12$ comes from adding the two numbers instead of multiplying them.',
    },
    {
      q: 'What is the seventh multiple of $6$?',
      choices: ['$36$', '$48$', '$42$', '$13$'],
      answer: 2,
      solution:
        'The seventh multiple of $6$ is $6 \\times 7 = 42$. Stopping one step early gives $36 = 6 \\times 6$, and one step too far gives $48 = 6 \\times 8$. The choice $13$ is $6 + 7$, which is addition, not multiplication.',
    },
    {
      q: 'The multiples of $11$ are $11, 22, 33, \\ldots$ Where does $99$ sit in that list?',
      choices: ['The $8$th multiple', 'The $10$th multiple', 'The $11$th multiple', 'The $9$th multiple'],
      answer: 3,
      solution:
        'You need the number of elevens that make $99$: since $99 \\div 11 = 9$, the number $99 = 11 \\times 9$ is the ninth multiple. The $8$th is $88$ and the $10$th is $110$. The choice "$11$th" just echoes the $11$ you are counting by.',
    },
  ],
  // p3 — continue or repair a skip-counting pattern
  [
    {
      q: 'Fill in the blank in this skip-counting pattern: $6, 12, 18, 24, \\square$',
      choices: ['$30$', '$32$', '$28$', '$36$'],
      answer: 0,
      solution:
        'Every step adds $6$, so from $24$ you hop to $24 + 6 = 30$, which is $6 \\times 5$. The trap answers use the wrong step: $32$ adds $8$, $28$ adds $4$, and $36$ jumps two steps at once to $6 \\times 6$.',
    },
    {
      q: 'A skip-counting pattern starts $14, 28, 42, 56$. What number comes next?',
      choices: ['$66$', '$70$', '$72$', '$84$'],
      answer: 1,
      solution:
        'Each step adds $14$, so the next number is $56 + 14 = 70 = 14 \\times 5$. Adding a round $10$ instead would give $66$, adding $16$ would give $72$, and $84 = 14 \\times 6$ skips a whole step ahead.',
    },
    {
      q: 'One number is missing from this list of multiples of $15$: $15, 30, \\square, 60, 75$. What is it?',
      choices: ['$40$', '$35$', '$45$', '$50$'],
      answer: 2,
      solution:
        'The steps go up by $15$, so the missing number is $30 + 15 = 45 = 15 \\times 3$. You can check it from the other side too: $60 - 15 = 45$. ✓ The other choices come from stepping by $10$, by $5$, or by $20$.',
    },
  ],
  // p4 — spot the non-multiple
  [
    {
      q: 'Which of these is NOT a multiple of $7$?',
      choices: ['$57$', '$56$', '$63$', '$49$'],
      answer: 0,
      solution:
        'Three of these are on the sevens list: $49 = 7 \\times 7$, $56 = 7 \\times 8$, and $63 = 7 \\times 9$. But $57$ is wedged between $56$ and $63$, so no whole number of sevens reaches it exactly.',
    },
    {
      q: 'Which of these is NOT a multiple of $9$?',
      choices: ['$72$', '$81$', '$96$', '$99$'],
      answer: 2,
      solution:
        'Check them off: $72 = 9 \\times 8$, $81 = 9 \\times 9$, and $99 = 9 \\times 11$. The odd one out is $96$, which sits between $9 \\times 10 = 90$ and $9 \\times 11 = 99$. (It is a multiple of $8$ instead: $96 = 8 \\times 12$.)',
    },
    {
      q: 'Which of these is NOT a multiple of $4$?',
      choices: ['$52$', '$68$', '$84$', '$74$'],
      answer: 3,
      solution:
        'Divide each by $4$: $52 = 4 \\times 13$, $68 = 4 \\times 17$, and $84 = 4 \\times 21$. But $74$ falls between $4 \\times 18 = 72$ and $4 \\times 19 = 76$. Being even gets a number halfway there, but it is not enough for $4$.',
    },
  ],
  // p5 — find a common multiple
  [
    {
      q: 'Which number is a common multiple of $4$ and $6$?',
      choices: ['$18$', '$24$', '$16$', '$10$'],
      answer: 1,
      solution:
        'A common multiple has to appear on BOTH lists. Here $24 = 4 \\times 6$ and $24 = 6 \\times 4$, so it qualifies. The number $18$ is a multiple of $6$ only, $16$ is a multiple of $4$ only, and $10$ is just $4 + 6$ — adding is not the same as finding a shared multiple.',
    },
    {
      q: 'Which number is a common multiple of $2$ and $7$?',
      choices: ['$21$', '$27$', '$28$', '$16$'],
      answer: 2,
      solution:
        'The number must be even (a multiple of $2$) and also on the sevens list. Since $28 = 2 \\times 14 = 7 \\times 4$, it passes both tests. The number $21$ is a multiple of $7$ but odd, $16$ is even but not a multiple of $7$, and $27$ is neither.',
    },
    {
      q: 'Which number appears on the multiples list of both $5$ and $6$?',
      choices: ['$25$', '$36$', '$11$', '$30$'],
      answer: 3,
      solution:
        'Multiples of $5$: $5, 10, 15, 20, 25, 30, \\ldots$ Multiples of $6$: $6, 12, 18, 24, 30, \\ldots$ The first number on both lists is $30 = 5 \\times 6$. The number $25$ belongs to the fives only, $36$ to the sixes only, and $11$ is the sum $5 + 6$.',
    },
  ],
  // p6 — multiples in a packing story
  [
    {
      q: 'Omar arranges chairs into rows of $6$ with none left over. Which total number of chairs could he have?',
      choices: ['$54$', '$50$', '$46$', '$58$'],
      answer: 0,
      solution:
        'Filling complete rows of $6$ means the total is a multiple of $6$. Since $54 = 6 \\times 9$, Omar could set out $54$ chairs in $9$ full rows. The other totals fall between multiples of $6$: $46$ leaves $4$ chairs over, $50$ leaves $2$, and $58$ leaves $4$.',
    },
    {
      q: 'A florist ties tulips into bunches of $9$ with none left over. Which total number of tulips could she have?',
      choices: ['$70$', '$72$', '$75$', '$78$'],
      answer: 1,
      solution:
        'The total must be a multiple of $9$. Since $72 = 9 \\times 8$, she can make exactly $8$ bunches. The nearest multiples of $9$ on either side are $63$ and $81$, so $70$, $75$, and $78$ all leave loose tulips behind.',
    },
    {
      q: 'Trading cards come in sealed packs of $7$. Which of these could be the total number of cards in a pile of full packs?',
      choices: ['$60$', '$65$', '$68$', '$63$'],
      answer: 3,
      solution:
        'A pile of full packs holds a multiple of $7$ cards. Since $63 = 7 \\times 9$, a pile of $9$ packs gives exactly $63$. The multiples of $7$ near the other choices are $56$ and $70$, so $60$, $65$, and $68$ would each require tearing a pack apart.',
    },
  ],
  // p7 — count multiples inside a range starting at 1
  [
    {
      q: 'How many multiples of $6$ are there from $1$ to $100$?',
      choices: ['$17$', '$16$', '$15$', '$6$'],
      answer: 1,
      solution:
        'The multiples are $6 \\times 1, 6 \\times 2, \\ldots$ and the largest one under $100$ is $6 \\times 16 = 96$, since $6 \\times 17 = 102$ overshoots. So there are $16$ of them. Counting $102$ anyway gives $17$, and stopping at the round number $90$ gives $15$.',
    },
    {
      q: 'How many multiples of $9$ are there from $1$ to $200$?',
      choices: ['$21$', '$23$', '$22$', '$20$'],
      answer: 2,
      solution:
        'Find the last multiple of $9$ that fits: $9 \\times 22 = 198$, while $9 \\times 23 = 207$ is too big. So the count is $22$. Including $207$ by mistake gives $23$, stopping one short at $189$ gives $21$, and stopping at the tidy $180$ gives $20$.',
    },
    {
      q: 'How many multiples of $25$ are there from $1$ to $300$?',
      choices: ['$11$', '$13$', '$10$', '$12$'],
      answer: 3,
      solution:
        'The multiples are $25, 50, 75, \\ldots, 300$, and $300 = 25 \\times 12$ lands exactly on the end of the range, so it counts. That makes $12$. Forgetting to count $300$ itself gives $11$, reaching for $325$ gives $13$, and stopping at $250$ gives $10$.',
    },
  ],
  // p8 — smallest number that is a multiple of both
  [
    {
      q: 'What is the smallest number that is a multiple of both $4$ and $10$?',
      choices: ['$20$', '$40$', '$14$', '$10$'],
      answer: 0,
      solution:
        'Walk up the multiples of $10$ and stop at the first one that is also a multiple of $4$: $10$ (no), $20$ (yes, $20 = 4 \\times 5$). So the answer is $20$. The product $4 \\times 10 = 40$ is a common multiple but not the smallest, $14$ is the sum, and $10$ alone is not a multiple of $4$.',
    },
    {
      q: 'What is the smallest number that is a multiple of both $9$ and $12$?',
      choices: ['$108$', '$3$', '$36$', '$21$'],
      answer: 2,
      solution:
        'March up the multiples of $12$: $12$ (not a multiple of $9$), $24$ (no), $36$ (yes — $36 = 9 \\times 4$). So $36$ is the smallest. The product $9 \\times 12 = 108$ is a common multiple but far from the least, $3$ is the biggest shared DIVISOR, and $21$ is the sum.',
    },
    {
      q: 'A number is a multiple of $6$ and also a multiple of $15$. What is the smallest it could be?',
      choices: ['$90$', '$45$', '$3$', '$30$'],
      answer: 3,
      solution:
        'List the multiples of $15$ and test each against $6$: $15$ (odd, so no), $30$ (yes, $30 = 6 \\times 5$). The smallest is $30$. The product $6 \\times 15 = 90$ works but is three times too big, $45$ is a multiple of $15$ only, and $3$ is the largest shared divisor.',
    },
  ],
  // p9 — count multiples strictly inside a range
  [
    {
      q: 'How many multiples of $6$ are there between $200$ and $300$?',
      choices: ['$16$', '$17$', '$15$', '$50$'],
      answer: 0,
      solution:
        'The first multiple of $6$ past $200$ is $6 \\times 34 = 204$, and the last one before $300$ is $6 \\times 49 = 294$. Counting from the $34$th to the $49$th gives $49 - 34 + 1 = 16$. Forgetting the "$+1$" gives $15$; counting $300 = 6 \\times 50$ as well gives $17$; and $50$ is how many multiples of $6$ there are all the way from the start.',
    },
    {
      q: 'How many multiples of $9$ are there between $50$ and $150$?',
      choices: ['$10$', '$11$', '$12$', '$16$'],
      answer: 1,
      solution:
        'The first multiple of $9$ past $50$ is $9 \\times 6 = 54$, and the last one below $150$ is $9 \\times 16 = 144$. That runs from the $6$th multiple to the $16$th, giving $16 - 6 + 1 = 11$. Subtracting without adding $1$ gives $10$, and $16$ is the count of ALL multiples of $9$ below $150$, ignoring the lower end of the range.',
    },
    {
      q: 'How many multiples of $12$ are there between $100$ and $500$?',
      choices: ['$32$', '$41$', '$34$', '$33$'],
      answer: 3,
      solution:
        'The first multiple of $12$ past $100$ is $12 \\times 9 = 108$, and the last one below $500$ is $12 \\times 41 = 492$. So the count is $41 - 9 + 1 = 33$. Dropping the "$+1$" gives $32$, sneaking in $12 \\times 42 = 504$ gives $34$, and $41$ counts every multiple of $12$ from the very beginning.',
    },
  ],
  // p10 — two repeating events line up
  [
    {
      q: 'In a $200$-beat song, a drummer hits a cymbal on every $4$th beat and rings a bell on every $6$th beat. On how many beats do both sound together?',
      choices: ['$16$', '$8$', '$33$', '$50$'],
      answer: 0,
      solution:
        'Both sound on beats that are multiples of $4$ AND of $6$ — that is, multiples of $12$. The largest one that fits is $12 \\times 16 = 192$, so there are $16$ shared beats. Using the product $24$ instead of $12$ gives only $8$; the lonely counts are $33$ bell beats and $50$ cymbal beats.',
    },
    {
      q: 'Lights at a rink flash red every $5$ seconds and blue every $8$ seconds, starting together. In the first $300$ seconds, how many times do they flash together?',
      choices: ['$8$', '$7$', '$37$', '$60$'],
      answer: 1,
      solution:
        'They match on multiples of both $5$ and $8$, which are the multiples of $40$: $40, 80, 120, 160, 200, 240, 280$. The next one, $320$, is past $300$, so the answer is $7$. Rounding $300 \\div 40 = 7.5$ up gives $8$, while $37$ and $60$ count the blue and red flashes separately.',
    },
    {
      q: 'Two conveyor belts drop a box every $9$ seconds and every $12$ seconds, and both just dropped one. Over the next $150$ seconds, how many times will they drop boxes at the same moment?',
      choices: ['$1$', '$3$', '$4$', '$16$'],
      answer: 2,
      solution:
        'The shared moments are the multiples of both $9$ and $12$: the smallest is $36$, so the times are $36, 72, 108, 144$ — four of them, since $180$ is past the window. Using the product $108$ as the repeat time would find only $1$; stopping at $108$ loses the last one; and $16$ counts the drops of the faster belt alone.',
    },
  ],
]

const s32 = [
  // p1 — divisibility by 5
  [
    {
      q: 'Only one of these numbers is divisible by $5$. Which one is it?',
      choices: ['$470$', '$407$', '$451$', '$474$'],
      answer: 0,
      solution:
        'Only the ones digit matters, because every whole number of tens is already divisible by $5$. A number passes if it ends in $0$ or $5$, and only $470$ does. The endings $7$, $1$, and $4$ all fail.',
    },
    {
      q: 'Which of these numbers is NOT divisible by $5$?',
      choices: ['$620$', '$935$', '$418$', '$705$'],
      answer: 2,
      solution:
        'Look at the last digit of each: $620$ ends in $0$ ✓, $935$ ends in $5$ ✓, and $705$ ends in $5$ ✓. Only $418$ ends in something else, so it is the one that fails. (It is even, but evenness has nothing to do with the test for $5$.)',
    },
    {
      q: 'A number ends in the digit $5$. Which statement is definitely true?',
      choices: [
        'It is divisible by $10$',
        'It is divisible by $2$',
        'It is divisible by $25$',
        'It is divisible by $5$',
      ],
      answer: 3,
      solution:
        'Ending in $0$ or $5$ is exactly the test for $5$, so that one is guaranteed. The others are not: $15$ ends in $5$ but is odd, is not a multiple of $10$, and is not a multiple of $25$. Divisibility by $10$ needs a final $0$, not a final $5$.',
    },
  ],
  // p2 — divisibility by 2
  [
    {
      q: 'Which of these four-digit numbers is divisible by $2$?',
      choices: ['$5{,}294$', '$6{,}381$', '$2{,}745$', '$8{,}117$'],
      answer: 0,
      solution:
        'Divisible by $2$ means even, and only the ones digit decides it. The number $5{,}294$ ends in $4$, an even digit, so it passes. The others end in $1$, $5$, and $7$ — all odd, no matter how large the number is.',
    },
    {
      q: 'Which of these numbers is NOT divisible by $2$?',
      choices: ['$3{,}450$', '$7{,}629$', '$4{,}186$', '$2{,}974$'],
      answer: 1,
      solution:
        'Check the last digit of each: $0$, $9$, $6$, $4$. Three of them are even, but $7{,}629$ ends in $9$, so it is odd and fails the test for $2$.',
    },
    {
      q: 'Anaya says a number is divisible by $2$ whenever any one of its digits is even. Which number shows she is wrong?',
      choices: ['$246$', '$482$', '$623$', '$130$'],
      answer: 2,
      solution:
        'To disprove her rule you need a number with an even digit somewhere that is still odd. In $623$ the middle digit $2$ is even, yet the number ends in $3$, so it is odd and not divisible by $2$. The other three all end in an even digit, so they obey her rule by accident. Only the ONES digit matters.',
    },
  ],
  // p3 — divisibility by 3 via digit sum
  [
    {
      q: 'Only one of these four numbers survives the digit-sum test for $3$. Which one?',
      choices: ['$614$', '$615$', '$617$', '$619$'],
      answer: 1,
      solution:
        'Add the digits of each: $6 + 1 + 4 = 11$, $6 + 1 + 5 = 12$, $6 + 1 + 7 = 14$, $6 + 1 + 9 = 16$. Only $12$ is a multiple of $3$, so only $615$ passes. Check: $615 = 3 \\times 205$. ✓',
    },
    {
      q: 'Which of these numbers is NOT divisible by $3$?',
      choices: ['$531$', '$624$', '$715$', '$807$'],
      answer: 2,
      solution:
        'The digit sums are $531 \\to 9$, $624 \\to 12$, $715 \\to 13$, and $807 \\to 15$. Three of those sums are multiples of $3$, but $13$ is not, so $715$ is the odd one out.',
    },
    {
      q: 'The digits of a whole number add up to $24$. What can you say for sure?',
      choices: [
        'It is divisible by $9$',
        'It is divisible by $6$',
        'It is divisible by $2$',
        'It is divisible by $3$',
      ],
      answer: 3,
      solution:
        'Since $24 = 3 \\times 8$ is a multiple of $3$, the number is divisible by $3$. But $24$ is not a multiple of $9$, so $9$ is out. And a digit sum says nothing about evenness: $699$ has digit sum $24$ and is odd, which rules out both $2$ and $6$.',
    },
  ],
  // p4 — divisibility by 10
  [
    {
      q: 'These four numbers use the same digits in different orders. Which one is divisible by $10$?',
      choices: ['$4{,}015$', '$4{,}150$', '$4{,}105$', '$4{,}501$'],
      answer: 1,
      solution:
        'Divisible by $10$ means the number ends in $0$, and only $4{,}150$ does. The digits are the same in all four numbers — what matters is which digit is last. Note $4{,}015$ and $4{,}105$ are divisible by $5$, but ending in $5$ is not enough for $10$.',
    },
    {
      q: 'Which of these numbers is divisible by both $5$ and $2$?',
      choices: ['$385$', '$392$', '$390$', '$399$'],
      answer: 2,
      solution:
        'To pass both tests the number must end in $0$ or $5$ AND be even — which leaves only a final $0$. That is $390$. The number $385$ passes the test for $5$ alone, $392$ passes the test for $2$ alone, and $399$ passes neither.',
    },
    {
      q: 'Which number is divisible by $5$ but NOT by $10$?',
      choices: ['$820$', '$806$', '$900$', '$865$'],
      answer: 3,
      solution:
        'A multiple of $5$ that misses $10$ must end in $5$, so the answer is $865$. Both $820$ and $900$ end in $0$, so they are divisible by $10$ too, and $806$ is not a multiple of $5$ at all.',
    },
  ],
  // p5 — divisibility by 4 via the last two digits
  [
    {
      q: 'All four of these numbers are even. Which one is also divisible by $4$?',
      choices: ['$748$', '$726$', '$514$', '$630$'],
      answer: 0,
      solution:
        'Because $100 = 4 \\times 25$, only the last two digits matter. Those are $48$, $26$, $14$, and $30$. Only $48 = 4 \\times 12$ is a multiple of $4$, so $748$ is the one. All four numbers are even, which shows that passing the test for $2$ is not enough for $4$.',
    },
    {
      q: 'Which of these numbers is NOT divisible by $4$?',
      choices: ['$916$', '$938$', '$724$', '$552$'],
      answer: 1,
      solution:
        'Look at the last two digits: $16 = 4 \\times 4$ ✓, $38$ ✗ (it sits between $36$ and $40$), $24 = 4 \\times 6$ ✓, $52 = 4 \\times 13$ ✓. So $938$ is the one that fails.',
    },
    {
      q: 'The last two digits of a four-digit number are $36$. What can you conclude?',
      choices: [
        'It is divisible by $8$',
        'It is divisible by $9$',
        'It is not divisible by $4$',
        'It is divisible by $4$',
      ],
      answer: 3,
      solution:
        'Since $36 = 4 \\times 9$, the last-two-digits test passes and the number is divisible by $4$. It need not be divisible by $8$ ($1{,}236 = 8 \\times 154 + 4$) and need not be divisible by $9$, since that test uses ALL the digits — $1{,}136$ has digit sum $11$.',
    },
  ],
  // p6 — divisibility by 9 via digit sum
  [
    {
      q: 'Which of these four-digit numbers is divisible by $9$?',
      choices: ['$5{,}238$', '$4{,}271$', '$3{,}160$', '$7{,}415$'],
      answer: 0,
      solution:
        'Add the digits: $5 + 2 + 3 + 8 = 18$, and $18 = 9 \\times 2$, so $5{,}238$ passes. The other digit sums are $14$, $10$, and $17$ — none of them multiples of $9$.',
    },
    {
      q: 'Which of these numbers is NOT divisible by $9$?',
      choices: ['$8{,}613$', '$5{,}471$', '$2{,}349$', '$6{,}201$'],
      answer: 1,
      solution:
        'The digit sums are $8{,}613 \\to 18$, $5{,}471 \\to 17$, $2{,}349 \\to 18$, and $6{,}201 \\to 9$. Every sum except $17$ is a multiple of $9$, so $5{,}471$ is the one that fails.',
    },
    {
      q: 'A number is divisible by $3$ but not by $9$. Which of these could be its digit sum?',
      choices: ['$18$', '$9$', '$12$', '$16$'],
      answer: 2,
      solution:
        'The digit sum has to be a multiple of $3$ (so the test for $3$ passes) but not a multiple of $9$ (so the test for $9$ fails). Of the choices, $9$ and $18$ are multiples of $9$, and $16$ is not even a multiple of $3$. Only $12$ fits — for example, $48$ has digit sum $12$, and $48 = 3 \\times 16$ while $48 \\div 9$ leaves a remainder.',
    },
  ],
  // p7 — divisibility by 6 needs both tests
  [
    {
      q: 'Only one of these numbers passes BOTH the test for $2$ and the test for $3$. Which one?',
      choices: ['$723$', '$726$', '$734$', '$851$'],
      answer: 1,
      solution:
        'A multiple of $6$ must be even AND have a digit sum divisible by $3$. Only $726$ manages both: it ends in $6$, and $7 + 2 + 6 = 15 = 3 \\times 5$. Check: $726 = 6 \\times 121$. ✓ Meanwhile $723$ has digit sum $12$ but is odd, $734$ is even but has digit sum $14$, and $851$ fails both tests.',
    },
    {
      q: 'Which of these numbers is NOT divisible by $6$?',
      choices: ['$438$', '$714$', '$925$', '$552$'],
      answer: 2,
      solution:
        'Run both tests on each. $438$: even, digit sum $15$ ✓. $714$: even, digit sum $12$ ✓. $552$: even, digit sum $12$ ✓. But $925$ is odd, so it fails the test for $2$ before you even reach the digit sum.',
    },
    {
      q: 'A whole number is even and its digits add up to $21$. Which statement is true?',
      choices: [
        'It is divisible by $9$',
        'It is divisible by $12$',
        'It is not divisible by $6$',
        'It is divisible by $6$',
      ],
      answer: 3,
      solution:
        'Even means divisible by $2$, and a digit sum of $21 = 3 \\times 7$ means divisible by $3$. Passing both tests means divisible by $6$. It need not reach $9$, since $21$ is not a multiple of $9$, and it need not reach $12$: the number $786$ is even with digit sum $21$, yet $786 \\div 12$ is not a whole number.',
    },
  ],
  // p8 — find the missing digit for divisibility by 9
  [
    {
      q: 'The three-digit number $4\\square 6$ is divisible by $9$. What digit goes in the box?',
      choices: ['$8$', '$5$', '$2$', '$9$'],
      answer: 0,
      solution:
        'The digit sum is $4 + \\square + 6 = 10 + \\square$, and it must be a multiple of $9$. A single digit keeps the sum between $10$ and $19$, and the only multiple of $9$ there is $18$, so $\\square = 8$. Check: $486 = 9 \\times 54$. ✓ Choosing $5$ or $2$ aims for $15$ or $12$, which are multiples of $3$ but not of $9$.',
    },
    {
      q: 'The three-digit number $\\square 27$ is divisible by $9$. What digit goes in the box?',
      choices: ['$3$', '$9$', '$0$', '$6$'],
      answer: 1,
      solution:
        'The digit sum is $\\square + 2 + 7 = \\square + 9$, which must be a multiple of $9$. That allows $\\square = 0$ or $\\square = 9$ — but a $0$ in the leading spot would leave only the two-digit number $27$. So the box holds $9$, giving $927 = 9 \\times 103$. ✓ The choices $3$ and $6$ give digit sums $12$ and $15$, multiples of $3$ only.',
    },
    {
      q: 'The four-digit number $26\\square 3$ is divisible by $9$. What digit goes in the box?',
      choices: ['$4$', '$1$', '$9$', '$7$'],
      answer: 3,
      solution:
        'The digit sum is $2 + 6 + \\square + 3 = 11 + \\square$, which runs from $11$ to $20$. The only multiple of $9$ in that range is $18$, so $\\square = 7$. Check: $2673 = 9 \\times 297$. ✓ The digits $4$ and $1$ would give sums $15$ and $12$ — good enough for $3$, not for $9$ — and $9$ would give $20$.',
    },
  ],
  // p9 — combine two tests to pin down a digit
  [
    {
      q: 'What is the smallest digit $d$ that makes the four-digit number $3d16$ divisible by $12$?',
      choices: ['$2$', '$0$', '$5$', '$8$'],
      answer: 0,
      solution:
        'Divisible by $12$ means divisible by both $3$ and $4$. The test for $4$ looks at the last two digits, $16 = 4 \\times 4$, which passes no matter what $d$ is. The test for $3$ needs $3 + d + 1 + 6 = 10 + d$ to be a multiple of $3$, so $d = 2$, $5$, or $8$. The smallest is $d = 2$. Check: $3216 = 12 \\times 268$. ✓ ($d = 0$ gives digit sum $10$, which fails.)',
    },
    {
      q: 'What is the largest digit $d$ that makes the four-digit number $52d8$ divisible by $12$?',
      choices: ['$0$', '$3$', '$6$', '$9$'],
      answer: 2,
      solution:
        'Test for $4$: the last two digits form "$d8$", and among $08, 18, 28, \\ldots, 98$ the multiples of $4$ are $08, 28, 48, 68, 88$ — so $d$ must be even. Test for $3$: the digit sum $5 + 2 + d + 8 = 15 + d$ must be a multiple of $3$, so $d = 0, 3, 6,$ or $9$. Both together leave $d = 0$ or $d = 6$, and the largest is $6$. Check: $5268 = 12 \\times 439$. ✓',
    },
    {
      q: 'For how many digits $d$ is the four-digit number $8d46$ divisible by $6$?',
      choices: ['$3$', '$10$', '$2$', '$4$'],
      answer: 3,
      solution:
        'The number ends in $6$, so it is even for every choice of $d$ — the test for $2$ is free. That leaves the test for $3$: the digit sum $8 + d + 4 + 6 = 18 + d$ must be a multiple of $3$, and since $18$ already is, $d$ itself must be. So $d = 0, 3, 6, 9$ — four digits. Forgetting $d = 0$ gives $3$, thinking evenness alone settles it gives $10$, and also demanding that $d$ be even gives $2$.',
    },
  ],
  // p10 — count the numbers of a given digit pattern that pass a test
  [
    {
      q: 'How many three-digit numbers of the form $5\\square 8$ are divisible by $3$?',
      choices: ['$3$', '$4$', '$10$', '$0$'],
      answer: 0,
      solution:
        'The digit sum is $5 + \\square + 8 = 13 + \\square$, which must be a multiple of $3$. As $\\square$ runs from $0$ to $9$ the sum runs from $13$ to $22$, and the multiples of $3$ in that stretch are $15$, $18$, and $21$, giving $\\square = 2, 5, 8$. That is $3$ numbers: $528$, $558$, $588$. Requiring $\\square$ itself to be a multiple of $3$ is the classic slip, and it wrongly gives $4$.',
    },
    {
      q: 'How many three-digit numbers of the form $\\square 42$ are divisible by $9$?',
      choices: ['$0$', '$1$', '$4$', '$3$'],
      answer: 1,
      solution:
        'The digit sum is $\\square + 4 + 2 = \\square + 6$, which must be a multiple of $9$. That forces $\\square + 6 = 9$, so $\\square = 3$ — and $\\square + 6 = 18$ would need $\\square = 12$, which is not a digit. Only $342$ works, so the answer is $1$. Check: $342 = 9 \\times 38$. ✓ Using the test for $3$ instead would let $\\square = 0, 3, 6, 9$, and a leading $0$ is not allowed anyway.',
    },
    {
      q: 'How many three-digit numbers of the form $6\\square 4$ are divisible by $4$?',
      choices: ['$10$', '$4$', '$2$', '$5$'],
      answer: 3,
      solution:
        'Only the last two digits matter, so ask which of $04, 14, 24, \\ldots, 94$ are multiples of $4$. They are $04, 24, 44, 64, 84$ — exactly the even values of $\\square$, so $\\square = 0, 2, 4, 6, 8$ and the answer is $5$. Thinking any even ending is enough gives $10$, forgetting $\\square = 0$ gives $4$, and also running the test for $3$ would leave only $\\square = 2$ and $\\square = 8$.',
    },
  ],
]

const s33 = [
  // p1 — pick the prime out of a list
  [
    {
      q: 'One of these four numbers is prime. Which one is it?',
      choices: ['$29$', '$33$', '$35$', '$39$'],
      answer: 0,
      solution:
        'The three composites give themselves away with quick tests: $33 = 3 \\times 11$ and $39 = 3 \\times 13$ have digit sums $6$ and $12$, and $35 = 5 \\times 7$ ends in $5$. But $29$ is odd, has digit sum $11$, and does not end in $0$ or $5$; since $\\sqrt{29} < 6$, that is every test needed. It is prime.',
    },
    {
      q: 'Three of these numbers are composite. Which one is prime?',
      choices: ['$49$', '$53$', '$51$', '$57$'],
      answer: 1,
      solution:
        'Watch the sneaky ones: $49 = 7 \\times 7$, $51 = 3 \\times 17$ (digit sum $6$), and $57 = 3 \\times 19$ (digit sum $12$). That leaves $53$, which survives $2$, $3$, and $5$, and since $\\sqrt{53} < 8$ the only test left is $7$: $7 \\times 7 = 49$ and $7 \\times 8 = 56$, so $7$ misses. $53$ is prime.',
    },
    {
      q: 'Which of these numbers has exactly two divisors?',
      choices: ['$63$', '$65$', '$69$', '$61$'],
      answer: 3,
      solution:
        '"Exactly two divisors" is the definition of prime. Rule out $63 = 7 \\times 9$, $65 = 5 \\times 13$, and $69 = 3 \\times 23$. The number $61$ is odd, has digit sum $7$, does not end in $0$ or $5$, and is not a multiple of $7$ ($7 \\times 8 = 56$, $7 \\times 9 = 63$). Since $\\sqrt{61} < 8$, it is prime, with only $1$ and $61$ as divisors.',
    },
  ],
  // p2 — small facts about the first primes
  [
    {
      q: 'What is the smallest odd prime number?',
      choices: ['$3$', '$1$', '$2$', '$5$'],
      answer: 0,
      solution:
        'The primes in order are $2, 3, 5, 7, \\ldots$ The first one is $2$, but $2$ is even, so the smallest ODD prime is the next one, $3$. The number $1$ is not prime at all — it has only one divisor — and $5$ is the second odd prime.',
    },
    {
      q: 'Which number is the only even prime?',
      choices: ['$0$', '$2$', '$4$', '$1$'],
      answer: 1,
      solution:
        'Any even number bigger than $2$ has $1$, $2$, and itself as divisors, so it is composite — $4 = 2 \\times 2$ is the first example. That leaves $2$, whose only divisors are $1$ and $2$. The number $1$ is odd and not prime, and $0$ is divisible by every number.',
    },
    {
      q: 'How many prime numbers are less than $10$?',
      choices: ['$3$', '$5$', '$6$', '$4$'],
      answer: 3,
      solution:
        'Check each number from $2$ up: $2$ ✓, $3$ ✓, $4 = 2 \\times 2$, $5$ ✓, $6 = 2 \\times 3$, $7$ ✓, $8 = 2 \\times 4$, $9 = 3 \\times 3$. That is $2, 3, 5, 7$ — four primes. Forgetting that $2$ counts gives $3$; counting $1$ as prime gives $5$; counting both $1$ and $9$ gives $6$.',
    },
  ],
  // p3 — pick the composite out of a list
  [
    {
      q: 'Which number in this list is composite?',
      choices: ['$51$', '$53$', '$59$', '$61$'],
      answer: 0,
      solution:
        'The digit sum of $51$ is $5 + 1 = 6$, a multiple of $3$, so $51 = 3 \\times 17$ is composite. The others survive every test up to their square roots (each is under $64 = 8^2$, so $2, 3, 5,$ and $7$ are enough), which makes $53$, $59$, and $61$ prime.',
    },
    {
      q: 'Three of these numbers are prime. Which one is composite?',
      choices: ['$67$', '$71$', '$77$', '$79$'],
      answer: 2,
      solution:
        'All four are odd with digit sums that miss $3$, and none ends in $0$ or $5$ — so you must go on to $7$. And $7$ catches one: $77 = 7 \\times 11$. Since $\\sqrt{79} < 9$, testing $2, 3, 5, 7$ is the whole job, and $67$, $71$, and $79$ pass it, so they are prime.',
    },
    {
      q: 'Which of these numbers has more than two divisors?',
      choices: ['$83$', '$89$', '$97$', '$87$'],
      answer: 3,
      solution:
        'More than two divisors means composite. The digit sum of $87$ is $8 + 7 = 15$, a multiple of $3$, so $87 = 3 \\times 29$ — its divisors are $1, 3, 29, 87$. The others are all under $100$ and survive $2, 3, 5,$ and $7$, so $83$, $89$, and $97$ are prime, with exactly two divisors each.',
    },
  ],
  // p4 — the definition, and where 1 sits
  [
    {
      q: 'Which statement about the number $1$ is TRUE?',
      choices: [
        'It is the smallest prime number',
        'It is neither prime nor composite',
        'It is composite because it divides every number',
        'It is prime because nothing else divides it',
      ],
      answer: 1,
      solution:
        'A prime has exactly two divisors and a composite has more than two. The number $1$ has just one divisor, so it lands in neither group. The smallest prime is $2$, and dividing lots of numbers is not what makes a number composite — what counts is how many divisors the number ITSELF has.',
    },
    {
      q: 'A whole number is called composite when it has how many divisors?',
      choices: ['Exactly two', 'Exactly one', 'More than two', 'Fewer than two'],
      answer: 2,
      solution:
        'A composite number has more than two divisors — for instance $10$ has four: $1, 2, 5, 10$. "Exactly two" is the definition of prime, and "exactly one" describes $1$, which is neither. No whole number bigger than $0$ has fewer than one divisor.',
    },
    {
      q: 'Kai says every whole number bigger than $0$ is either prime or composite. Which number shows he is wrong?',
      choices: ['$2$', '$9$', '$11$', '$1$'],
      answer: 3,
      solution:
        'You need a counterexample — a number that is neither. That is $1$: it has exactly one divisor, so it is not prime (which needs two) and not composite (which needs more than two). The numbers $2$ and $11$ are prime and $9 = 3 \\times 3$ is composite, so none of them contradict Kai.',
    },
  ],
  // p5 — count primes in a decade
  [
    {
      q: 'How many prime numbers are there between $40$ and $50$?',
      choices: ['$3$', '$2$', '$4$', '$5$'],
      answer: 0,
      solution:
        'Test the odd numbers $41, 43, 45, 47, 49$. Out go $45 = 5 \\times 9$ and $49 = 7 \\times 7$. The survivors are $41$, $43$, and $47$ — three primes. The count $4$ comes from letting $49$ slip through, and $5$ from letting both $45$ and $49$ through.',
    },
    {
      q: 'How many prime numbers are there between $50$ and $60$?',
      choices: ['$4$', '$3$', '$2$', '$1$'],
      answer: 2,
      solution:
        'The odd candidates are $51, 53, 55, 57, 59$. Now sift: $51 = 3 \\times 17$ and $57 = 3 \\times 19$ (digit sums $6$ and $12$), and $55 = 5 \\times 11$. Only $53$ and $59$ remain, so the answer is $2$. Missing the digit-sum test on $51$ or $57$ is what pushes people to $3$ or $4$.',
    },
    {
      q: 'How many prime numbers are there between $10$ and $20$?',
      choices: ['$2$', '$5$', '$3$', '$4$'],
      answer: 3,
      solution:
        'Test the odd numbers $11, 13, 15, 17, 19$. Only $15 = 3 \\times 5$ is composite, so $11, 13, 17, 19$ are all prime — that is $4$. Letting $15$ through gives $5$, and dropping one of the real primes gives $3$ or $2$.',
    },
  ],
  // p6 — the right REASON a number is prime or composite
  [
    {
      q: 'Which statement about $87$ is true?',
      choices: [
        'It is composite because $87 = 3 \\times 29$',
        'It is prime because it is odd',
        'It is prime because $2$ and $5$ do not divide it',
        'It is composite because it ends in $7$',
      ],
      answer: 0,
      solution:
        'The digit sum $8 + 7 = 15$ is a multiple of $3$, and sure enough $3 \\times 29 = 87$. So $87$ is composite, and the reason is a genuine factor pair. Being odd never makes a number prime, stopping after $2$ and $5$ skips the test that catches this one, and the final digit tells you nothing — $7$ and $17$ both end in $7$ and are prime.',
    },
    {
      q: 'Which statement about $119$ is true?',
      choices: [
        'It is prime because $2$, $3$, and $5$ all fail to divide it',
        'It is composite because $119 = 7 \\times 17$',
        'It is prime because it is odd',
        'It is composite because $119 = 11 \\times 13$',
      ],
      answer: 1,
      solution:
        'Since $\\sqrt{119}$ is between $10$ and $11$, you must test $2, 3, 5, 7,$ and finally $11$. The first three miss, but $7 \\times 17 = 119$ — caught. Stopping at $5$ is the trap. And $11 \\times 13 = 143$, not $119$, so that last choice names the wrong factor pair.',
    },
    {
      q: 'Which statement about $133$ is true?',
      choices: [
        'It is prime, since $2$, $3$, and $5$ do not divide it',
        'It is composite because $133 = 3 \\times 44$',
        'It is prime because $\\sqrt{133}$ is less than $12$',
        'It is composite because $133 = 7 \\times 19$',
      ],
      answer: 3,
      solution:
        'Keep testing past $5$: $7 \\times 19 = 133$, so the number is composite. The digit sum $1 + 3 + 3 = 7$ shows $3$ is not a factor, and indeed $3 \\times 44 = 132$, one short. Knowing $\\sqrt{133} < 12$ tells you where to STOP testing, not that a number is prime.',
    },
  ],
  // p7 — how far do you have to test?
  [
    {
      q: 'To decide whether $211$ is prime by trial division, which primes do you need to test?',
      choices: ['$2, 3, 5, 7, 11, 13$', '$2, 3, 5, 7, 11$', '$2, 3, 5, 7$', 'Every prime up to $105$'],
      answer: 0,
      solution:
        'Since $14 \\times 14 = 196$ and $15 \\times 15 = 225$, the square root of $211$ sits between $14$ and $15$. So you test every prime up to $14$: that is $2, 3, 5, 7, 11, 13$. Stopping at $11$ leaves a gap, and testing all the way to $105$ is a huge waste — a factor above $\\sqrt{211}$ would already have a partner below it. (All six tests fail, so $211$ is prime.)',
    },
    {
      q: 'To decide whether $97$ is prime by trial division, which primes do you need to test?',
      choices: ['$2, 3, 5$', '$2, 3, 5, 7$', '$2, 3, 5, 7, 11$', 'Every prime up to $48$'],
      answer: 1,
      solution:
        'Since $9 \\times 9 = 81$ and $10 \\times 10 = 100$, the square root of $97$ is just under $10$, so you need the primes up to $9$: $2, 3, 5, 7$. Quitting after $5$ is exactly how numbers like $91 = 7 \\times 13$ sneak past, and $11$ is already beyond the square root, so testing it is wasted effort.',
    },
    {
      q: 'When you test whether a number $n$ is prime, why is it safe to stop once your test prime grows past $\\sqrt{n}$?',
      choices: [
        'Because primes bigger than $\\sqrt{n}$ are rare',
        'Because $\\sqrt{n}$ is always a whole number',
        'Because every number has a prime divisor below $\\sqrt{n}$',
        'Because if both factors were bigger than $\\sqrt{n}$, their product would be bigger than $n$',
      ],
      answer: 3,
      solution:
        'Divisors come in pairs whose product is $n$. If BOTH members of a pair were larger than $\\sqrt{n}$, the product would exceed $\\sqrt{n} \\times \\sqrt{n} = n$ — impossible. So every factor pair has a member at or below $\\sqrt{n}$, and testing up to there catches any factorization. Note that a prime like $13$ has no prime divisor below $\\sqrt{13}$ at all, so that third statement is simply false.',
    },
  ],
  // p8 — twin primes
  [
    {
      q: 'Which of these is a pair of twin primes?',
      choices: ['$29$ and $31$', '$33$ and $35$', '$23$ and $25$', '$7$ and $11$'],
      answer: 0,
      solution:
        'Twin primes are two primes that differ by exactly $2$. Both $29$ and $31$ are prime and $31 - 29 = 2$. ✓ The pair $33$ and $35$ fails on both counts ($33 = 3 \\times 11$, $35 = 5 \\times 7$), $25 = 5 \\times 5$ is composite, and $7$ and $11$ are both prime but differ by $4$.',
    },
    {
      q: 'Which of these is NOT a pair of twin primes?',
      choices: ['$5$ and $7$', '$19$ and $21$', '$11$ and $13$', '$41$ and $43$'],
      answer: 1,
      solution:
        'Each pair differs by $2$, so the gap is fine everywhere — the question is whether both numbers are prime. In $19$ and $21$, the second one is $21 = 3 \\times 7$, which is composite, so that pair is out. The other three pairs are made of two genuine primes.',
    },
    {
      q: 'The primes $59$ and $61$ are twin primes. Which pair below is also a twin prime pair?',
      choices: ['$47$ and $49$', '$53$ and $55$', '$71$ and $73$', '$83$ and $85$'],
      answer: 2,
      solution:
        'Every listed pair differs by $2$, so test the numbers themselves. Out go $49 = 7 \\times 7$, $55 = 5 \\times 11$, and $85 = 5 \\times 17$. That leaves $71$ and $73$, and both survive the tests up to their square roots (under $9$), so they are twin primes.',
    },
  ],
  // p9 — the extreme prime in a range
  [
    {
      q: 'What is the largest prime number less than $50$?',
      choices: ['$49$', '$47$', '$45$', '$43$'],
      answer: 1,
      solution:
        'Work downward from $49$: it is $7 \\times 7$, so composite. Next, $48$ is even and $47$ is the next odd candidate. Test it: odd, digit sum $11$, does not end in $0$ or $5$, and $7 \\times 6 = 42$ while $7 \\times 7 = 49$, so $7$ misses. Since $\\sqrt{47} < 7$, that settles it — $47$ is prime. ($45 = 9 \\times 5$, and $43$ is prime but smaller.)',
    },
    {
      q: 'What is the smallest prime number greater than $50$?',
      choices: ['$51$', '$55$', '$53$', '$57$'],
      answer: 2,
      solution:
        'Climb upward: $51$ has digit sum $6$, so $51 = 3 \\times 17$. Then $52$ is even, and $53$ is next. Test it: odd, digit sum $8$, no final $0$ or $5$, and $7 \\times 7 = 49$ with $7 \\times 8 = 56$, so $7$ misses. Since $\\sqrt{53} < 8$, we are done — $53$ is prime. ($55 = 5 \\times 11$ and $57 = 3 \\times 19$.)',
    },
    {
      q: 'What is the largest prime number less than $80$?',
      choices: ['$77$', '$75$', '$73$', '$79$'],
      answer: 3,
      solution:
        'Start at $79$ and test it: odd, digit sum $16$, no final $0$ or $5$, and $7 \\times 11 = 77$ with $7 \\times 12 = 84$, so $7$ misses. Since $\\sqrt{79} < 9$, those tests are enough and $79$ is prime — no need to go lower. ($77 = 7 \\times 11$, $75 = 3 \\times 25$, and $73$ is prime but smaller.)',
    },
  ],
  // p10 — hunt a prime with a prime neighbour
  [
    {
      q: 'A prime $p$ between $50$ and $80$ has the property that $p + 2$ is also prime. What is the largest such $p$?',
      choices: ['$71$', '$73$', '$59$', '$67$'],
      answer: 0,
      solution:
        'The primes in that stretch are $53, 59, 61, 67, 71, 73, 79$. Now check each partner: $55 = 5 \\times 11$ ✗, $61$ ✓, $63 = 7 \\times 9$ ✗, $69 = 3 \\times 23$ ✗, $73$ ✓, $75$ ✗, $81 = 9 \\times 9$ ✗. Two values of $p$ work, $59$ and $71$, and the largest is $71$. The choice $73$ is the OTHER half of that twin pair, not $p$ itself.',
    },
    {
      q: 'A prime $q$ between $20$ and $40$ has the property that $q - 2$ is also prime. What is $q$?',
      choices: ['$29$', '$31$', '$23$', '$37$'],
      answer: 1,
      solution:
        'The primes there are $23, 29, 31, 37$. Subtract $2$ from each: $21 = 3 \\times 7$ ✗, $27 = 3 \\times 9$ ✗, $29$ ✓, $35 = 5 \\times 7$ ✗. Only $q = 31$ works, since $29$ and $31$ are twin primes. Choosing $29$ answers the wrong question — that is $q - 2$, not $q$.',
    },
    {
      q: 'Between $95$ and $106$ there is exactly one pair of twin primes. What is the smaller prime in the pair?',
      choices: ['$97$', '$103$', '$101$', '$107$'],
      answer: 2,
      solution:
        'The primes in that window are $97$, $101$, and $103$ (the numbers $99 = 9 \\times 11$ and $105 = 5 \\times 21$ are composite). Check the gaps: $101 - 97 = 4$, but $103 - 101 = 2$. So the twin pair is $101$ and $103$, and the smaller one is $101$. The choice $103$ is the larger member, and $107$ lies outside the window.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 3,
  sections: {
    '3.1': s31,
    '3.2': s32,
    '3.3': s33,
  },
}
