// Introduction to Algebra chapter 3 — variations for sections 3.3 and 3.4.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was re-derived with exact fractions and substituted
//    back into the equation the solution sets up.
//  - Every word-problem answer is a whole number wherever the story counts
//    physical things, and each story was re-read with the answer in place.
//  - Every named wrong method was computed and confirmed to (a) differ from
//    the key and (b) appear among the four choices.
//  - No two choices in an item share a VALUE (compared as reduced fractions,
//    not as strings).
//  - For two-step items that name the wrong-order mistake, the leading
//    coefficient is never $1$ and the constant is never $0$ — otherwise the
//    mistake would land on the correct answer.

const s33 = [
  // p1 — "less than" flips the order of the subtraction
  [
    {
      q: 'Nine less than a number is $24$. What is the number?',
      choices: ['$15$', '$-15$', '$33$', '$24$'],
      answer: 2,
      solution:
        '"Nine less than a number" means you START with the number and take $9$ away, so it is $n - 9$, not $9 - n$. The equation is $n - 9 = 24$. Add $9$ to both sides: $n = 33$. Check against the story: $33 - 9 = 24$. ✓ The choice $15$ subtracts again, $24 - 9$, instead of undoing the subtraction. The choice $-15$ reads the phrase backwards as $9 - n = 24$. The choice $24$ is the result the story ends with, not the number it starts with.',
    },
    {
      q: 'Twelve less than a number is $8$. What is the number?',
      choices: ['$20$', '$-4$', '$4$', '$8$'],
      answer: 0,
      solution:
        'Write the phrase as $n - 12 = 8$ and add $12$ to both sides: $n = 20$. Check: $20 - 12 = 8$. ✓ The choice $-4$ subtracts a second time, $8 - 12$. The choice $4$ reverses the phrase into $12 - n = 8$, which is the "less than" trap. The choice $8$ is the answer to a different question — it is what is LEFT after the twelve is taken away.',
    },
    {
      q: 'Six less than a number is $-2$. What is the number?',
      choices: ['$-8$', '$8$', '$-2$', '$4$'],
      answer: 3,
      solution:
        'The equation is $n - 6 = -2$. Add $6$ to both sides: $n = -2 + 6 = 4$. Check: $4 - 6 = -2$. ✓ A negative result does not force a negative starting number — taking $6$ from $4$ simply overshoots zero. The choice $-8$ subtracts again, $-2 - 6$. The choice $8$ reads it as $6 - n = -2$. The choice $-2$ is the ending value, not the number.',
    },
  ],
  // p2 — "times a number, decreased by b, is c"
  [
    {
      q: 'Three times a number, decreased by $6$, is $27$. What is the number?',
      choices: ['$11$', '$7$', '$3$', '$33$'],
      answer: 0,
      solution:
        'The phrase builds $3n - 6$, so the equation is $3n - 6 = 27$. Undo in reverse order: add $6$ first, giving $3n = 33$, then divide by $3$ to get $n = 11$. Check: $3(11) - 6 = 33 - 6 = 27$. ✓ The choice $7$ subtracts the $6$ instead of adding it back, $\\frac{27 - 6}{3}$. The choice $3$ undoes in the WRONG ORDER — dividing first gives $27 \\div 3 = 9$, and then subtracting $6$ gives $3$. The choice $33$ is the value of $3n$, one division short of the answer.',
    },
    {
      q: 'Four times a number, decreased by $8$, is $28$. What is the number?',
      choices: ['$5$', '$9$', '$-1$', '$36$'],
      answer: 1,
      solution:
        'The equation is $4n - 8 = 28$. Add $8$: $4n = 36$. Divide by $4$: $n = 9$. Check: $4(9) - 8 = 36 - 8 = 28$. ✓ The choice $5$ subtracts the $8$ rather than adding it, $\\frac{28 - 8}{4}$. The choice $-1$ divides before undoing the subtraction: $28 \\div 4 = 7$, then $7 - 8 = -1$. The choice $36$ is $4n$, not $n$.',
    },
    {
      q: 'Theo thinks of a number, multiplies it by $6$, and then subtracts $18$. He ends up with $24$. What number did Theo start with?',
      choices: ['$1$', '$42$', '$-14$', '$7$'],
      answer: 3,
      solution:
        'Let $n$ be his starting number. The steps build $6n - 18$, so $6n - 18 = 24$. Add $18$: $6n = 42$. Divide by $6$: $n = 7$. Check by replaying the story: $6 \\cdot 7 = 42$, and $42 - 18 = 24$. ✓ The choice $1$ subtracts the $18$ instead of adding it, $\\frac{24 - 18}{6}$. The choice $-14$ undoes the two steps in the wrong order: $24 \\div 6 = 4$, then $4 - 18 = -14$. The choice $42$ answers a different question — it is the number Theo had after multiplying, before he subtracted.',
    },
  ],
  // p3 — consecutive integers, and which one the question wants
  [
    {
      q: 'The sum of three consecutive integers is $72$. What is the smallest of the three?',
      choices: ['$24$', '$23$', '$25$', '$21$'],
      answer: 1,
      solution:
        'Let the integers be $n$, $n + 1$, $n + 2$. Their sum is $3n + 3 = 72$, so $3n = 69$ and $n = 23$. The three integers are $23, 24, 25$, and the SMALLEST is $23$. Check: $23 + 24 + 25 = 72$. ✓ The choice $24$ answers a different question — it is the middle integer, which is also just $72 \\div 3$. The choice $25$ is the largest. The choice $21$ comes from dividing first and then subtracting, $72 \\div 3 - 3$.',
    },
    {
      q: 'The sum of three consecutive ODD integers is $51$. What is the largest of the three?',
      choices: ['$15$', '$17$', '$19$', '$18$'],
      answer: 2,
      solution:
        'Consecutive odd integers step by $2$, so call them $n$, $n + 2$, $n + 4$. Then $3n + 6 = 51$, giving $3n = 45$ and $n = 15$. The integers are $15, 17, 19$ — all odd, as required — and the largest is $19$. Check: $15 + 17 + 19 = 51$. ✓ The choice $18$ comes from using a step of $1$ instead of $2$: that gives $3n + 3 = 51$, $n = 16$, and a largest of $18$ — but $16, 17, 18$ are not all odd. The choice $17$ is the middle integer ($51 \\div 3$), and $15$ is the smallest.',
    },
    {
      q: 'Three neighbouring houses have consecutive house numbers that add up to $96$. What is the largest of the three numbers?',
      choices: ['$31$', '$32$', '$34$', '$33$'],
      answer: 3,
      solution:
        'Let the numbers be $n$, $n + 1$, $n + 2$, so $3n + 3 = 96$, giving $3n = 93$ and $n = 31$. The houses are numbered $31, 32, 33$, and the largest is $33$. Check: $31 + 32 + 33 = 96$. ✓ The choice $34$ comes from reading the numbers as consecutive EVEN ones, $n$, $n + 2$, $n + 4$: that gives $3n + 6 = 96$, $n = 30$, and $30, 32, 34$ — those really do add to $96$, which is why the wrong reading is so tempting, but the story says consecutive, not consecutive even. The choice $32$ is the middle house ($96 \\div 3$) and $31$ is the smallest.',
    },
  ],
  // p4 — a number plus (or minus) a fraction of itself
  [
    {
      q: 'A number plus a third of itself equals $40$. What is the number?',
      choices: ['$30$', '$120$', '$\\frac{160}{3}$', '$10$'],
      answer: 0,
      solution:
        'The equation is $n + \\frac{n}{3} = 40$. Since $n = \\frac{3n}{3}$, the left side combines to $\\frac{4}{3}n = 40$. Multiply both sides by the reciprocal $\\frac{3}{4}$: $n = 40 \\cdot \\frac{3}{4} = 30$. Check: a third of $30$ is $10$, and $30 + 10 = 40$. ✓ The choice $10$ answers a different question — it is the THIRD of the number, not the number. The choice $120$ solves $\\frac{n}{3} = 40$, dropping the "$n$ plus" entirely. The choice $\\frac{160}{3}$ multiplies by $\\frac{4}{3}$ instead of by its reciprocal.',
    },
    {
      q: 'A number minus a quarter of itself equals $27$. What is the number?',
      choices: ['$108$', '$36$', '$\\frac{81}{4}$', '$9$'],
      answer: 1,
      solution:
        'The equation is $n - \\frac{n}{4} = 27$, which combines to $\\frac{3}{4}n = 27$. Multiply both sides by $\\frac{4}{3}$: $n = 27 \\cdot \\frac{4}{3} = 36$. Check: a quarter of $36$ is $9$, and $36 - 9 = 27$. ✓ The choice $9$ answers a different question — it is the quarter that was removed. The choice $108$ solves $\\frac{n}{4} = 27$, forgetting the subtraction. The choice $\\frac{81}{4}$ multiplies by $\\frac{3}{4}$ instead of flipping it to $\\frac{4}{3}$.',
    },
    {
      q: 'A community garden has some tomato plants, plus a number of pepper plants equal to two-thirds of the tomato count. There are $45$ plants in all. How many tomato plants are there?',
      choices: ['$75$', '$18$', '$27$', '$30$'],
      answer: 2,
      solution:
        'Let $t$ be the number of tomato plants, so there are $\\frac{2}{3}t$ pepper plants and $t + \\frac{2}{3}t = 45$. Combine the left side: $\\frac{5}{3}t = 45$, so $t = 45 \\cdot \\frac{3}{5} = 27$. Check the story: two-thirds of $27$ is $18$ peppers, and $27 + 18 = 45$ plants. ✓ (Both counts are whole plants, as they must be.) The choice $18$ answers a different question — it is the number of PEPPER plants. The choice $75$ multiplies by $\\frac{5}{3}$ instead of by its reciprocal. The choice $30$ is $\\frac{2}{3}$ of $45$, which treats the peppers as two-thirds of the TOTAL rather than of the tomatoes.',
    },
  ],
  // p5 — "k times as old/large" together with a fixed difference
  [
    {
      q: 'Ravi is four times as old as his cousin, and Ravi is $18$ years older than his cousin. How old is Ravi?',
      choices: ['$24$', '$6$', '$18$', '$72$'],
      answer: 0,
      solution:
        'Let $c$ be the cousin\'s age. "Four times as old" says Ravi is $4c$; "$18$ years older" says Ravi is $c + 18$. Those describe the same age, so $4c = c + 18$. Subtract $c$: $3c = 18$, so $c = 6$ and Ravi is $4 \\cdot 6 = 24$. Check both sentences: $24$ is four times $6$ ✓, and $24 - 6 = 18$ ✓. The choice $6$ answers a different question — it is the COUSIN\'s age. The choice $18$ is the age gap itself, which the problem hands you. The choice $72$ multiplies the gap by $4$ instead of dividing it by $3$.',
    },
    {
      q: 'A tank holds five times as much water as a bucket, and the tank holds $28$ litres more than the bucket. How many litres does the bucket hold?',
      choices: ['$28$', '$35$', '$7$', '$140$'],
      answer: 2,
      solution:
        'Let $b$ be the bucket\'s capacity. The tank is both $5b$ and $b + 28$, so $5b = b + 28$. Subtract $b$: $4b = 28$, giving $b = 7$ litres. Check: the tank holds $5 \\cdot 7 = 35$ litres, and $35 - 7 = 28$ ✓. The choice $35$ answers a different question — it is the TANK\'s capacity. The choice $28$ is the given difference. The choice $140$ multiplies the difference by $5$ instead of dividing it by $4$.',
    },
    {
      q: 'Marisol has six times as many stickers as her little brother, and she has $35$ more stickers than he does. How many stickers does Marisol have?',
      choices: ['$7$', '$35$', '$210$', '$42$'],
      answer: 3,
      solution:
        'Let $b$ be the brother\'s sticker count. Marisol has both $6b$ and $b + 35$, so $6b = b + 35$. Subtract $b$: $5b = 35$, so $b = 7$ and Marisol has $6 \\cdot 7 = 42$ stickers. Check: $42$ is six times $7$ ✓, and $42 - 7 = 35$ ✓. Both counts are whole stickers. The choice $7$ answers a different question — it is the BROTHER\'s count. The choice $35$ is the difference given in the problem. The choice $210$ multiplies the difference by $6$ rather than dividing it by $5$.',
    },
  ],
  // p6 — two people/groups, one described in terms of the other, with a total
  [
    {
      q: 'Omar has $\\$4$ more than three times as much money as Ivy. Together they have $\\$44$. How much does Omar have?',
      choices: ['$\\$10$', '$\\$34$', '$\\$40$', '$\\$37$'],
      answer: 1,
      solution:
        'Let $v$ be Ivy\'s amount, so Omar has $3v + 4$. Together: $v + (3v + 4) = 44$, which is $4v + 4 = 44$. Subtract $4$: $4v = 40$, so $v = 10$ and Omar has $3(10) + 4 = 34$ dollars. Check: $10 + 34 = 44$ ✓, and $\\$34$ is indeed $\\$4$ more than three times $\\$10$ ✓. The choice $\\$10$ answers a different question — it is IVY\'s amount. The choice $\\$40$ is the value of $4v$, an intermediate number that belongs to neither person. The choice $\\$37$ divides the $\\$44$ by $4$ first and only then subtracts, giving $3(11) + 4$; but $11 + 37 = 48$, not $44$.',
    },
    {
      q: 'A pet shop has $3$ fewer cats than twice the number of dogs. Altogether there are $36$ cats and dogs. How many dogs are there?',
      choices: ['$11$', '$23$', '$13$', '$39$'],
      answer: 2,
      solution:
        'Let $d$ be the number of dogs, so there are $2d - 3$ cats. Altogether: $d + (2d - 3) = 36$, which is $3d - 3 = 36$. Add $3$: $3d = 39$, so $d = 13$ dogs. Check the story: cats number $2(13) - 3 = 23$, and $13 + 23 = 36$ ✓. Both are whole animals. The choice $23$ answers a different question — it is the number of CATS. The choice $11$ subtracts the $3$ instead of adding it back, $\\frac{36 - 3}{3}$. The choice $39$ is the value of $3d$, one division short.',
    },
    {
      q: 'A shelf holds $7$ more paperbacks than twice the number of hardcovers. There are $52$ books on the shelf in all. How many paperbacks are there?',
      choices: ['$15$', '$45$', '$30$', '$37$'],
      answer: 3,
      solution:
        'Let $h$ be the number of hardcovers, so there are $2h + 7$ paperbacks. In all: $h + (2h + 7) = 52$, which is $3h + 7 = 52$. Subtract $7$: $3h = 45$, so $h = 15$ and there are $2(15) + 7 = 37$ paperbacks. Check: $15 + 37 = 52$ ✓, and $37$ is $7$ more than twice $15$ ✓. The choice $15$ answers a different question — it is the HARDCOVER count. The choice $45$ is the value of $3h$. The choice $30$ is $2h$ with the extra $7$ never added back on.',
    },
  ],
  // p7 — rectangle perimeter, with the two sides related
  [
    {
      q: 'A rectangle\'s length is $4$ cm more than its width, and its perimeter is $44$ cm. What is the length?',
      choices: ['$13$ cm', '$9$ cm', '$24$ cm', '$11$ cm'],
      answer: 0,
      solution:
        'Let $w$ be the width, so the length is $w + 4$. Perimeter counts each side twice: $2(w + w + 4) = 44$, so $2w + 4 = 22$, giving $2w = 18$ and $w = 9$. The LENGTH is $9 + 4 = 13$ cm. Check: $2(9 + 13) = 2(22) = 44$ ✓. The choice $9$ answers a different question — it is the width. The choice $24$ comes from writing $w + (w + 4) = 44$, which sets only HALF the perimeter equal to $44$; that gives $w = 20$ and a length of $24$. The choice $11$ is $44 \\div 4$, which would be right only for a square.',
    },
    {
      q: 'A rectangle is three times as long as it is wide, and its perimeter is $48$ cm. What is the width?',
      choices: ['$12$ cm', '$6$ cm', '$18$ cm', '$24$ cm'],
      answer: 1,
      solution:
        'Let $w$ be the width, so the length is $3w$. Then $2(w + 3w) = 48$, so $8w = 48$ and $w = 6$ cm. Check: the length is $18$ cm, and $2(6 + 18) = 2(24) = 48$ ✓. The choice $18$ answers a different question — it is the LENGTH. The choice $12$ comes from $w + 3w = 48$, using the semi-perimeter as if it were the whole perimeter. The choice $24$ is that semi-perimeter, $48 \\div 2$, which is the sum of one length and one width rather than the width alone.',
    },
    {
      q: 'A rectangle\'s width is $3$ m less than its length, and its perimeter is $34$ m. What is the length?',
      choices: ['$7$ m', '$\\frac{17}{2}$ m', '$20$ m', '$10$ m'],
      answer: 3,
      solution:
        'Let $L$ be the length, so the width is $L - 3$. Then $2(L + L - 3) = 34$, so $2L - 3 = 17$, giving $2L = 20$ and $L = 10$ m. Check: the width is $7$ m, and $2(10 + 7) = 2(17) = 34$ ✓. The choice $7$ answers a different question — it is the width. The choice $20$ is the value of $2L$, one division short. The choice $\\frac{17}{2}$ is $34 \\div 4$, the side of a SQUARE with that perimeter, which ignores the $3$ m difference.',
    },
  ],
  // p8 — two ticket prices, a known head count, and a known total
  [
    {
      q: 'Ride tickets at a school fair cost $\\$4$ for students and $\\$7$ for adults. A group of $12$ people spent $\\$60$ on tickets. How many students were in the group?',
      choices: ['$8$', '$4$', '$15$', '$12$'],
      answer: 0,
      solution:
        'Let $s$ be the number of students; then $12 - s$ people are adults. The cost equation is $4s + 7(12 - s) = 60$. Distribute: $4s + 84 - 7s = 60$, so $-3s = -24$ and $s = 8$ students. Check the story: $8$ students and $12 - 8 = 4$ adults, costing $8(4) + 4(7) = 32 + 28 = 60$ dollars ✓ — and every count is a whole person. The choice $4$ answers a different question — it is the number of ADULTS. The choice $12$ is the whole group. The choice $15$ is $60 \\div 4$, which prices everyone as a student and even exceeds the size of the group.',
    },
    {
      q: 'Hot dogs cost $\\$3$ and pretzels cost $\\$5$ at a snack stand. A family bought $9$ snacks in all and paid $\\$35$. How many pretzels did they buy?',
      choices: ['$5$', '$4$', '$7$', '$9$'],
      answer: 1,
      solution:
        'Let $p$ be the number of pretzels, so $9 - p$ snacks are hot dogs. Then $5p + 3(9 - p) = 35$. Distribute: $5p + 27 - 3p = 35$, so $2p = 8$ and $p = 4$ pretzels. Check: $4$ pretzels and $5$ hot dogs cost $20 + 15 = 35$ dollars, and $4 + 5 = 9$ snacks ✓. The choice $5$ answers a different question — it is the number of HOT DOGS. The choice $7$ is $35 \\div 5$, which prices every snack as a pretzel. The choice $9$ is the total number of snacks.',
    },
    {
      q: 'A club sold $20$ raffle tickets, some at $\\$2$ each and the rest at $\\$5$ each, taking in $\\$67$ altogether. How many $\\$5$ tickets did the club sell?',
      choices: ['$11$', '$20$', '$9$', '$27$'],
      answer: 2,
      solution:
        'Let $f$ be the number of $\\$5$ tickets, so $20 - f$ tickets sold at $\\$2$. Then $5f + 2(20 - f) = 67$. Distribute: $5f + 40 - 2f = 67$, so $3f = 27$ and $f = 9$ tickets. Check: $9$ tickets at $\\$5$ and $11$ at $\\$2$ give $45 + 22 = 67$ dollars, and $9 + 11 = 20$ tickets ✓. The choice $11$ answers a different question — it is the number of $\\$2$ tickets. The choice $27$ is the value of $3f$, one division short. The choice $20$ is every ticket the club sold.',
    },
  ],
  // p9 — several consecutive integers of a stated parity
  [
    {
      q: 'The sum of four consecutive odd integers is $56$. What is the smallest of them?',
      choices: ['$11$', '$14$', '$13$', '$17$'],
      answer: 0,
      solution:
        'Consecutive odd integers step by $2$: call them $n$, $n + 2$, $n + 4$, $n + 6$. Their sum is $4n + 12 = 56$, so $4n = 44$ and $n = 11$. The integers are $11, 13, 15, 17$ — all odd ✓ — and the smallest is $11$. Check: $11 + 13 + 15 + 17 = 56$ ✓. The choice $17$ answers a different question — it is the greatest. The choice $13$ is the second one. The choice $14$ is $56 \\div 4$, the average of the four; with an even count of integers the average is not one of them at all.',
    },
    {
      q: 'The sum of five consecutive integers is $85$. What is the greatest of them?',
      choices: ['$15$', '$17$', '$19$', '$21$'],
      answer: 2,
      solution:
        'Let the integers be $n$ through $n + 4$. Their sum is $5n + 10 = 85$, so $5n = 75$ and $n = 15$. The integers are $15, 16, 17, 18, 19$ and the greatest is $19$. Check: $15 + 16 + 17 + 18 + 19 = 85$ ✓. The choice $21$ comes from stepping by $2$, as though the integers were consecutive ODD ones: $5n + 20 = 85$ gives $n = 13$ and the list $13, 15, 17, 19, 21$, which also sums to $85$ — a genuinely different answer to a differently worded problem. The choice $17$ is the middle integer ($85 \\div 5$) and $15$ is the smallest.',
    },
    {
      q: 'Four consecutive even house numbers on one side of a street add up to $76$. What is the greatest of them?',
      choices: ['$16$', '$19$', '$20$', '$22$'],
      answer: 3,
      solution:
        'Consecutive even numbers step by $2$: let them be $n$, $n + 2$, $n + 4$, $n + 6$. Then $4n + 12 = 76$, so $4n = 64$ and $n = 16$. The house numbers are $16, 18, 20, 22$ — all even ✓ — and the greatest is $22$. Check: $16 + 18 + 20 + 22 = 76$ ✓. The choice $16$ is the smallest. The choice $20$ is the third one, from stopping at $n + 4$. The choice $19$ is $76 \\div 4$, the average of the four, which is not even and so cannot be a house number in this list.',
    },
  ],
  // p10 — everyone ages together
  [
    {
      q: 'Leo is $7$ and his aunt is $31$. In how many years will his aunt be exactly three times as old as Leo?',
      choices: ['$12$', '$5$', '$24$', '$10$'],
      answer: 1,
      solution:
        'In $n$ years Leo will be $7 + n$ and his aunt will be $31 + n$ — both of them age. The condition is $31 + n = 3(7 + n)$. Distribute: $31 + n = 21 + 3n$. Subtract $n$ and $21$: $10 = 2n$, so $n = 5$ years. Check the story: in $5$ years Leo is $12$ and his aunt is $36$, and $36 = 3 \\times 12$ ✓. The choice $12$ answers a different question — it is LEO\'s age at that moment. The choice $24$ is the age gap, $31 - 7$, which never changes. The choice $10$ is the value of $2n$, one division short.',
    },
    {
      q: 'Sofia is $5$ and her uncle is $37$. In how many years will her uncle be exactly five times as old as Sofia?',
      choices: ['$32$', '$8$', '$3$', '$12$'],
      answer: 2,
      solution:
        'In $n$ years Sofia is $5 + n$ and her uncle is $37 + n$. The condition is $37 + n = 5(5 + n)$, so $37 + n = 25 + 5n$. Subtract $n$ and $25$: $12 = 4n$, giving $n = 3$ years. Check: in $3$ years Sofia is $8$ and her uncle is $40$, and $40 = 5 \\times 8$ ✓. The choice $8$ answers a different question — it is SOFIA\'s age then. The choice $32$ is the unchanging age gap, $37 - 5$. The choice $12$ is the value of $4n$.',
    },
    {
      q: 'Nate is $14$ and his father is $41$. How many years AGO was his father exactly four times as old as Nate?',
      choices: ['$9$', '$27$', '$15$', '$5$'],
      answer: 3,
      solution:
        'Going backwards, both of them get younger: $n$ years ago Nate was $14 - n$ and his father was $41 - n$. The condition is $41 - n = 4(14 - n)$. Distribute: $41 - n = 56 - 4n$. Add $4n$ and subtract $41$: $3n = 15$, so $n = 5$ years ago. Check: $5$ years ago Nate was $9$ and his father was $36$, and $36 = 4 \\times 9$ ✓. The choice $9$ answers a different question — it is NATE\'s age back then. The choice $27$ is the age gap, $41 - 14$. The choice $15$ is the value of $3n$.',
    },
  ],
]

const s34 = [
  // p1 — a plain numerical proportion
  [
    {
      q: 'Solve $\\frac{x}{4} = \\frac{9}{12}$.',
      choices: ['$x = 3$', '$x = 36$', '$x = 27$', '$x = \\frac{16}{3}$'],
      answer: 0,
      solution:
        'Cross-multiply: $12x = 4 \\cdot 9 = 36$, so $x = 3$. Clearing denominators instead gives the same thing — multiplying both sides by $12$ turns the equation into $3x = 9$, so $x = 3$ again. Check: $\\frac{3}{4} = \\frac{9}{12}$, since both reduce to three quarters. ✓ The choice $36$ is the cross product itself, stopping before the division by $12$. The choice $27$ divides by the wrong number, $\\frac{9 \\cdot 12}{4}$. The choice $\\frac{16}{3}$ crosses the wrong pair, $9x = 4 \\cdot 12$.',
    },
    {
      q: 'Solve $\\frac{5}{x} = \\frac{15}{21}$.',
      choices: ['$x = 105$', '$x = 7$', '$x = 63$', '$x = \\frac{25}{7}$'],
      answer: 1,
      solution:
        'The unknown is downstairs this time, but cross-multiplying works exactly the same: $5 \\cdot 21 = 15x$, so $105 = 15x$ and $x = 7$. Check: $\\frac{5}{7} = \\frac{15}{21}$, since $\\frac{15}{21}$ reduces to $\\frac{5}{7}$. ✓ The choice $105$ is the cross product before the division. The choice $63$ divides by the wrong number, $\\frac{15 \\cdot 21}{5}$. The choice $\\frac{25}{7}$ crosses the wrong pair, $5 \\cdot 15 = 21x$.',
    },
    {
      q: 'Solve $\\frac{x}{6} = \\frac{10}{4}$.',
      choices: ['$x = 60$', '$x = \\frac{20}{3}$', '$x = 15$', '$x = \\frac{12}{5}$'],
      answer: 2,
      solution:
        'Cross-multiply: $4x = 6 \\cdot 10 = 60$, so $x = 15$. Check: $\\frac{15}{6} = \\frac{5}{2}$ and $\\frac{10}{4} = \\frac{5}{2}$ — equal. ✓ The choice $60$ is the cross product with the final division skipped. The choice $\\frac{20}{3}$ divides by $6$ instead of by $4$. The choice $\\frac{12}{5}$ crosses the wrong pair, $10x = 6 \\cdot 4$.',
    },
  ],
  // p2 — one fraction equal to a number, with a two-step numerator
  [
    {
      q: 'Solve $\\frac{x - 3}{4} = 6$.',
      choices: ['$x = 24$', '$x = 27$', '$x = 21$', '$x = \\frac{9}{2}$'],
      answer: 1,
      solution:
        'Multiply both sides by $4$: $x - 3 = 24$. Then add $3$: $x = 27$. Check: $\\frac{27 - 3}{4} = \\frac{24}{4} = 6$. ✓ The choice $24$ is the value of $x - 3$, one step short of $x$. The choice $21$ subtracts the $3$ instead of adding it back. The choice $\\frac{9}{2}$ DIVIDES by $4$ rather than multiplying, giving $x - 3 = \\frac{3}{2}$ — but the numerator was divided by $4$, so undoing it must multiply.',
    },
    {
      q: 'Solve $\\frac{2x + 1}{3} = 5$.',
      choices: ['$x = 15$', '$x = 8$', '$x = 7$', '$x = 14$'],
      answer: 2,
      solution:
        'Multiply both sides by $3$: $2x + 1 = 15$. Subtract $1$: $2x = 14$. Divide by $2$: $x = 7$. Check: $\\frac{2(7) + 1}{3} = \\frac{15}{3} = 5$. ✓ The choice $15$ is the value of $2x + 1$. The choice $14$ is the value of $2x$, one division short. The choice $8$ ADDS the $1$ instead of subtracting it, $\\frac{15 + 1}{2}$.',
    },
    {
      q: 'Solve $\\frac{3x - 2}{5} = 8$.',
      choices: ['$x = 40$', '$x = 42$', '$x = \\frac{38}{3}$', '$x = 14$'],
      answer: 3,
      solution:
        'Multiply both sides by $5$: $3x - 2 = 40$. Add $2$: $3x = 42$. Divide by $3$: $x = 14$. Check: $\\frac{3(14) - 2}{5} = \\frac{40}{5} = 8$. ✓ The choice $40$ is the value of $3x - 2$ and $42$ is the value of $3x$; both are real numbers in the working, but neither is $x$. The choice $\\frac{38}{3}$ subtracts the $2$ instead of adding it back, $\\frac{40 - 2}{3}$.',
    },
  ],
  // p3 — a proportion with x on both sides
  [
    {
      q: 'Solve $\\frac{x}{3} = \\frac{x - 8}{2}$.',
      choices: ['$x = 24$', '$x = 8$', '$x = -24$', '$x = \\frac{24}{5}$'],
      answer: 0,
      solution:
        'Cross-multiply, keeping the whole numerator in parentheses: $2x = 3(x - 8)$. Distribute: $2x = 3x - 24$. Subtract $3x$: $-x = -24$, so $x = 24$. Check: $\\frac{24}{3} = 8$ and $\\frac{24 - 8}{2} = \\frac{16}{2} = 8$ — equal. ✓ The choice $8$ drops the parentheses, writing $2x = 3x - 8$. The choice $-24$ loses the sign at the last step; a negative divided by a negative is positive. The choice $\\frac{24}{5}$ moves the $3x$ across as $+3x$, giving $5x = 24$.',
    },
    {
      q: 'Solve $\\frac{x}{5} = \\frac{x + 4}{7}$.',
      choices: ['$x = 2$', '$x = 20$', '$x = 10$', '$x = -10$'],
      answer: 2,
      solution:
        'Cross-multiply: $7x = 5(x + 4)$. Distribute: $7x = 5x + 20$. Subtract $5x$: $2x = 20$, so $x = 10$. Check: $\\frac{10}{5} = 2$ and $\\frac{10 + 4}{7} = \\frac{14}{7} = 2$ — equal. ✓ The choice $2$ forgets that the $5$ must reach the $4$ as well, writing $7x = 5x + 4$. The choice $20$ is the value of $2x$, one division short. The choice $-10$ is a sign slip when the $5x$ crosses over.',
    },
    {
      q: 'Solve $\\frac{x - 10}{3} = \\frac{x}{8}$.',
      choices: ['$x = 80$', '$x = 2$', '$x = -16$', '$x = 16$'],
      answer: 3,
      solution:
        'Cross-multiply with parentheses: $8(x - 10) = 3x$. Distribute: $8x - 80 = 3x$. Subtract $3x$ and add $80$: $5x = 80$, so $x = 16$. Check: $\\frac{16 - 10}{3} = \\frac{6}{3} = 2$ and $\\frac{16}{8} = 2$ — equal. ✓ The choice $2$ drops the parentheses, writing $8x - 10 = 3x$. The choice $80$ is the value of $5x$. The choice $-16$ comes from a sign slip in the last division.',
    },
  ],
  // p4 — two fractions of x, cleared with a common denominator
  [
    {
      q: 'Solve $\\frac{x}{3} + \\frac{x}{4} = 14$.',
      choices: ['$x = 24$', '$x = 98$', '$x = 168$', '$x = 2$'],
      answer: 0,
      solution:
        'The denominators are $3$ and $4$, so multiply EVERY term by $12$: $4x + 3x = 168$. Then $7x = 168$ and $x = 24$. Check: $\\frac{24}{3} + \\frac{24}{4} = 8 + 6 = 14$. ✓ The choice $2$ multiplies only the LEFT side by $12$, leaving $7x = 14$ — a common multiple has to hit both sides of the equals sign. The choice $168$ is the value of $7x$. The choice $98$ adds the denominators, treating $\\frac{x}{3} + \\frac{x}{4}$ as $\\frac{x}{7}$; denominators are never added like that.',
    },
    {
      q: 'Solve $\\frac{x}{2} - \\frac{x}{6} = 4$.',
      choices: ['$x = 24$', '$x = 12$', '$x = 6$', '$x = 2$'],
      answer: 1,
      solution:
        'Multiply every term by $6$: $3x - x = 24$, so $2x = 24$ and $x = 12$. Check: $\\frac{12}{2} - \\frac{12}{6} = 6 - 2 = 4$. ✓ The choice $6$ adds where the problem subtracts, $3x + x = 24$. The choice $24$ is the value of $2x$. The choice $2$ multiplies only the left side by $6$, leaving $2x = 4$.',
    },
    {
      q: 'Solve $\\frac{2x}{5} + \\frac{x}{2} = 27$.',
      choices: ['$x = 63$', '$x = 270$', '$x = 3$', '$x = 30$'],
      answer: 3,
      solution:
        'Multiply every term by $10$: $\\frac{10 \\cdot 2x}{5} + \\frac{10 \\cdot x}{2} = 270$, which is $4x + 5x = 270$. So $9x = 270$ and $x = 30$. Check: $\\frac{60}{5} + \\frac{30}{2} = 12 + 15 = 27$. ✓ The choice $63$ adds across the top and bottom at once, turning the left side into $\\frac{3x}{7}$. The choice $270$ is the value of $9x$. The choice $3$ multiplies only the left side by $10$, leaving $9x = 27$.',
    },
  ],
  // p5 — a proportion with a binomial in each numerator
  [
    {
      q: 'Solve $\\frac{3x + 2}{4} = \\frac{x + 6}{2}$.',
      choices: ['$x = 2$', '$x = 10$', '$x = 20$', '$x = 1$'],
      answer: 1,
      solution:
        'Cross-multiply, wrapping each numerator in parentheses: $2(3x + 2) = 4(x + 6)$. Distribute: $6x + 4 = 4x + 24$. Subtract $4x$ and $4$: $2x = 20$, so $x = 10$. Check: $\\frac{3(10) + 2}{4} = \\frac{32}{4} = 8$ and $\\frac{10 + 6}{2} = \\frac{16}{2} = 8$ — equal. ✓ The choice $2$ drops the parentheses on BOTH sides, writing $6x + 2 = 4x + 6$. The choice $1$ drops them on the right only, writing $6x + 4 = 4x + 6$. The choice $20$ is the value of $2x$.',
    },
    {
      q: 'Solve $\\frac{x - 5}{2} = \\frac{2x - 16}{3}$.',
      choices: ['$x = 27$', '$x = 1$', '$x = 17$', '$x = -17$'],
      answer: 2,
      solution:
        'Cross-multiply with parentheses: $3(x - 5) = 2(2x - 16)$. Distribute: $3x - 15 = 4x - 32$. Subtract $4x$ and add $15$: $-x = -17$, so $x = 17$. Check: $\\frac{17 - 5}{2} = \\frac{12}{2} = 6$ and $\\frac{2(17) - 16}{3} = \\frac{18}{3} = 6$ — equal. ✓ The choice $27$ loses the parentheses on the left, writing $3x - 5 = 4x - 32$. The choice $1$ loses them on the right, writing $3x - 15 = 4x - 16$. The choice $-17$ forgets that a negative divided by a negative is positive.',
    },
    {
      q: 'Solve $\\frac{4x + 3}{5} = \\frac{2x + 9}{3}$.',
      choices: ['$x = 36$', '$x = 3$', '$x = 0$', '$x = 18$'],
      answer: 3,
      solution:
        'Cross-multiply with parentheses: $3(4x + 3) = 5(2x + 9)$. Distribute: $12x + 9 = 10x + 45$. Subtract $10x$ and $9$: $2x = 36$, so $x = 18$. Check: $\\frac{4(18) + 3}{5} = \\frac{75}{5} = 15$ and $\\frac{2(18) + 9}{3} = \\frac{45}{3} = 15$ — equal. ✓ The choice $3$ drops the parentheses on both sides, writing $12x + 3 = 10x + 9$. The choice $0$ drops them on the right only, writing $12x + 9 = 10x + 9$. The choice $36$ is the value of $2x$.',
    },
  ],
  // p6 — the variable alone in a denominator
  [
    {
      q: 'Solve $\\frac{12}{x} = 8$. (Note that $x = 0$ is excluded.)',
      choices: ['$x = \\frac{3}{2}$', '$x = 96$', '$x = \\frac{2}{3}$', '$x = 4$'],
      answer: 0,
      solution:
        'Multiply both sides by $x$: $12 = 8x$, so $x = \\frac{12}{8} = \\frac{3}{2}$. Check: $12 \\div \\frac{3}{2} = 12 \\cdot \\frac{2}{3} = 8$. ✓ The choice $96$ multiplies $12 \\cdot 8$ instead of dividing. The choice $\\frac{2}{3}$ is the reciprocal of the answer — the classic flip, from solving for $\\frac{1}{x}$ and forgetting to turn it back over. The choice $4$ subtracts, $12 - 8$, which undoes nothing here.',
    },
    {
      q: 'Solve $\\frac{14}{x} = 4$. (Note that $x = 0$ is excluded.)',
      choices: ['$x = 56$', '$x = \\frac{7}{2}$', '$x = \\frac{2}{7}$', '$x = 10$'],
      answer: 1,
      solution:
        'Multiply both sides by $x$: $14 = 4x$, so $x = \\frac{14}{4} = \\frac{7}{2}$. Check: $14 \\div \\frac{7}{2} = 14 \\cdot \\frac{2}{7} = 4$. ✓ Sense check: dividing $14$ by something bigger than $3$ should land near $4$, and $\\frac{7}{2} = 3.5$ fits. The choice $56$ multiplies $14 \\cdot 4$. The choice $\\frac{2}{7}$ is the reciprocal of the answer. The choice $10$ subtracts, $14 - 4$.',
    },
    {
      q: 'Solve $\\frac{18}{x} = \\frac{4}{3}$. (Note that $x = 0$ is excluded.)',
      choices: ['$x = 24$', '$x = 54$', '$x = \\frac{27}{2}$', '$x = \\frac{2}{27}$'],
      answer: 2,
      solution:
        'Cross-multiply: $18 \\cdot 3 = 4x$, so $54 = 4x$ and $x = \\frac{54}{4} = \\frac{27}{2}$. Check: $18 \\div \\frac{27}{2} = 18 \\cdot \\frac{2}{27} = \\frac{36}{27} = \\frac{4}{3}$. ✓ The choice $54$ is the cross product itself, before dividing by $4$. The choice $24$ divides by the wrong number, $\\frac{18 \\cdot 4}{3}$. The choice $\\frac{2}{27}$ is the reciprocal of the answer.',
    },
  ],
  // p7 — variables in both denominators
  [
    {
      q: 'Solve $\\frac{4}{x} = \\frac{7}{x + 9}$.',
      choices: ['$x = 12$', '$x = 3$', '$x = -12$', '$x = 36$'],
      answer: 0,
      solution:
        'First note the excluded values: $x \\neq 0$ and $x \\neq -9$, since either would make a denominator zero. Cross-multiply, keeping the numerator in parentheses: $4(x + 9) = 7x$. Distribute: $4x + 36 = 7x$, so $36 = 3x$ and $x = 12$, which is not excluded. Check: $\\frac{4}{12} = \\frac{1}{3}$ and $\\frac{7}{21} = \\frac{1}{3}$ — equal. ✓ The choice $3$ lets the $4$ reach only the $x$, writing $4x + 9 = 7x$. The choice $36$ is the value of $3x$. The choice $-12$ is a sign slip.',
    },
    {
      q: 'Solve $\\frac{6}{x} = \\frac{10}{x + 6}$.',
      choices: ['$x = \\frac{3}{2}$', '$x = 36$', '$x = 9$', '$x = -9$'],
      answer: 2,
      solution:
        'Excluded values: $x \\neq 0$ and $x \\neq -6$. Cross-multiply: $6(x + 6) = 10x$, so $6x + 36 = 10x$, giving $36 = 4x$ and $x = 9$ — not an excluded value. Check: $\\frac{6}{9} = \\frac{2}{3}$ and $\\frac{10}{15} = \\frac{2}{3}$ — equal. ✓ The choice $\\frac{3}{2}$ comes from $6x + 6 = 10x$, where the $6$ out front never multiplies the $6$ inside. The choice $36$ is the value of $4x$. The choice $-9$ is a sign slip in the final division.',
    },
    {
      q: 'Solve $\\frac{5}{x - 3} = \\frac{8}{x}$.',
      choices: ['$x = 3$', '$x = 1$', '$x = 24$', '$x = 8$'],
      answer: 3,
      solution:
        'Excluded values: $x \\neq 3$ and $x \\neq 0$. Cross-multiply with parentheses: $5x = 8(x - 3)$. Distribute: $5x = 8x - 24$, so $24 = 3x$ and $x = 8$, which is allowed. Check: $\\frac{5}{8 - 3} = \\frac{5}{5} = 1$ and $\\frac{8}{8} = 1$ — equal. ✓ The choice $3$ is an EXCLUDED value; it looks tempting because it appears in the problem, but it would divide by zero. The choice $1$ comes from $5x = 8x - 3$, where the $8$ never reaches the $3$. The choice $24$ is the value of $3x$.',
    },
  ],
  // p8 — a plain fraction plus a fraction with a binomial numerator
  [
    {
      q: 'Solve $\\frac{x}{3} + \\frac{x + 5}{2} = 10$.',
      choices: ['$x = 9$', '$x = 11$', '$x = 45$', '$x = -1$'],
      answer: 0,
      solution:
        'Multiply every term by $6$: $2x + 3(x + 5) = 60$. The $3$ must multiply the WHOLE numerator, so distribute: $2x + 3x + 15 = 60$, giving $5x = 45$ and $x = 9$. Check: $\\frac{9}{3} + \\frac{9 + 5}{2} = 3 + 7 = 10$. ✓ The choice $11$ writes $3x + 5$ instead of $3(x + 5)$, losing the $\\times 3$ on the $5$. The choice $45$ is the value of $5x$. The choice $-1$ multiplies only the left side by $6$, leaving $5x + 15 = 10$.',
    },
    {
      q: 'Solve $\\frac{x + 3}{2} - \\frac{x}{5} = 6$.',
      choices: ['$x = 45$', '$x = 15$', '$x = 19$', '$x = \\frac{45}{7}$'],
      answer: 1,
      solution:
        'Multiply every term by $10$: $5(x + 3) - 2x = 60$. Distribute: $5x + 15 - 2x = 60$, so $3x = 45$ and $x = 15$. Check: $\\frac{15 + 3}{2} - \\frac{15}{5} = 9 - 3 = 6$. ✓ The choice $19$ writes $5x + 3$ instead of $5(x + 3)$. The choice $\\frac{45}{7}$ adds where the problem subtracts, giving $5x + 15 + 2x = 60$. The choice $45$ is the value of $3x$.',
    },
    {
      q: 'Solve $\\frac{x}{6} + \\frac{x - 4}{2} = 8$.',
      choices: ['$x = 13$', '$x = 60$', '$x = 5$', '$x = 15$'],
      answer: 3,
      solution:
        'Multiply every term by $6$: $x + 3(x - 4) = 48$. Distribute: $x + 3x - 12 = 48$, so $4x = 60$ and $x = 15$. Check: $\\frac{15}{6} + \\frac{15 - 4}{2} = \\frac{5}{2} + \\frac{11}{2} = \\frac{16}{2} = 8$. ✓ The choice $13$ writes $3x - 4$ instead of $3(x - 4)$, so the $3$ never reaches the $4$. The choice $60$ is the value of $4x$. The choice $5$ multiplies only the left side by $6$, leaving $4x - 12 = 8$.',
    },
  ],
  // p9 — nested parentheses
  [
    {
      q: 'Solve $3(2(x + 4) - 5) = 4x + 21$.',
      choices: ['$x = 1$', '$x = 6$', '$x = 12$', '$x = -9$'],
      answer: 1,
      solution:
        'Work from the inside out. The inner layer is $2(x + 4) = 2x + 8$, so the bracket holds $2x + 8 - 5 = 2x + 3$. Multiplying by the outer $3$ gives $6x + 9$. Now solve $6x + 9 = 4x + 21$: subtract $4x$ and $9$ to get $2x = 12$, so $x = 6$. Check: $3(2(10) - 5) = 3(15) = 45$ and $4(6) + 21 = 45$ — equal. ✓ The choice $1$ lets the outer $3$ skip the $-5$, giving $6x + 24 - 5 = 6x + 19$. The choice $12$ lets the inner $2$ skip the $+4$, giving $3(2x + 4 - 5) = 6x - 3$. The choice $-9$ forgets the outer $3$ altogether.',
    },
    {
      q: 'Solve $4(2(x - 3) + 5) = 6x + 6$.',
      choices: ['$x = \\frac{25}{2}$', '$x = -1$', '$x = 5$', '$x = 10$'],
      answer: 2,
      solution:
        'Inside out: $2(x - 3) = 2x - 6$, so the bracket holds $2x - 6 + 5 = 2x - 1$. Times the outer $4$: $8x - 4$. Solve $8x - 4 = 6x + 6$: subtract $6x$ and add $4$ to get $2x = 10$, so $x = 5$. Check: $4(2(2) + 5) = 4(9) = 36$ and $6(5) + 6 = 36$ — equal. ✓ The choice $\\frac{25}{2}$ lets the outer $4$ skip the $+5$, giving $8x - 24 + 5$. The choice $-1$ lets the inner $2$ skip the $-3$, giving $4(2x - 3 + 5) = 8x + 8$. The choice $10$ is the value of $2x$.',
    },
    {
      q: 'Solve $5(3(x - 2) - 1) = 12x + 13$.',
      choices: ['$x = \\frac{44}{3}$', '$x = \\frac{28}{3}$', '$x = 48$', '$x = 16$'],
      answer: 3,
      solution:
        'Peel one layer at a time: $3(x - 2) = 3x - 6$, so the bracket holds $3x - 6 - 1 = 3x - 7$. Times the outer $5$: $15x - 35$. Solve $15x - 35 = 12x + 13$: subtract $12x$ and add $35$ to get $3x = 48$, so $x = 16$. Check: $5(3(14) - 1) = 5(41) = 205$ and $12(16) + 13 = 192 + 13 = 205$ — equal. ✓ The choice $\\frac{44}{3}$ lets the outer $5$ skip the $-1$, giving $15x - 30 - 1$. The choice $\\frac{28}{3}$ lets the inner $3$ skip the $-2$, giving $5(3x - 2 - 1) = 15x - 15$. The choice $48$ is the value of $3x$.',
    },
  ],
  // p10 — a binomial in both denominators, with excluded values in play
  [
    {
      q: 'Solve $\\frac{4}{x - 3} = \\frac{6}{x + 1}$.',
      choices: ['$x = 11$', '$x = 2$', '$x = 22$', '$x = 3$'],
      answer: 0,
      solution:
        'Excluded values: $x \\neq 3$ and $x \\neq -1$. Cross-multiply with parentheses: $4(x + 1) = 6(x - 3)$. Distribute: $4x + 4 = 6x - 18$, so $22 = 2x$ and $x = 11$, which is allowed. Check: $\\frac{4}{11 - 3} = \\frac{4}{8} = \\frac{1}{2}$ and $\\frac{6}{11 + 1} = \\frac{6}{12} = \\frac{1}{2}$ — equal. ✓ The choice $2$ drops both sets of parentheses, writing $4x + 1 = 6x - 3$. The choice $22$ is the value of $2x$. The choice $3$ is an EXCLUDED value — it appears in the problem and makes the left denominator zero, so it can never be a solution.',
    },
    {
      q: 'Solve $\\frac{3}{x + 5} = \\frac{8}{x + 20}$.',
      choices: ['$x = 3$', '$x = 20$', '$x = 4$', '$x = -4$'],
      answer: 2,
      solution:
        'Excluded values: $x \\neq -5$ and $x \\neq -20$. Cross-multiply: $3(x + 20) = 8(x + 5)$. Distribute: $3x + 60 = 8x + 40$, so $20 = 5x$ and $x = 4$, which is allowed. Check: $\\frac{3}{9} = \\frac{1}{3}$ and $\\frac{8}{24} = \\frac{1}{3}$ — equal. ✓ The choice $3$ drops the parentheses, writing $3x + 20 = 8x + 5$. The choice $20$ is the value of $5x$. The choice $-4$ is a sign slip in the last division.',
    },
    {
      q: 'Solve $\\frac{9}{x + 2} = \\frac{5}{x - 6}$.',
      choices: ['$x = 2$', '$x = 64$', '$x = 6$', '$x = 16$'],
      answer: 3,
      solution:
        'Excluded values: $x \\neq -2$ and $x \\neq 6$. Cross-multiply with parentheses: $9(x - 6) = 5(x + 2)$. Distribute: $9x - 54 = 5x + 10$, so $4x = 64$ and $x = 16$, which is allowed. Check: $\\frac{9}{16 + 2} = \\frac{9}{18} = \\frac{1}{2}$ and $\\frac{5}{16 - 6} = \\frac{5}{10} = \\frac{1}{2}$ — equal. ✓ The choice $2$ drops both sets of parentheses, writing $9x - 6 = 5x + 2$. The choice $64$ is the value of $4x$. The choice $6$ is an EXCLUDED value that makes the right denominator zero.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 3,
  sections: {
    '3.3': s33,
    '3.4': s34,
  },
}
