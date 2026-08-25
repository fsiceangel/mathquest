// Prealgebra chapter 14 — variations for sections 14.1-14.3.
// All problems and solutions are original MathQuest content.
// Every count keyed here was checked by literally building the set and
// measuring it, not by trusting a formula.

const s141 = [
  // p1 — counting a consecutive list (fencepost)
  [
    {
      q: 'How many integers are in the list $9, 10, 11, \\ldots, 26$?',
      choices: ['$17$', '$18$', '$26$', '$19$'],
      answer: 1,
      solution:
        'The gap from $9$ to $26$ is $26 - 9 = 17$ jumps, but a list always holds one more number than it has jumps: $26 - 9 + 1 = 18$. Test the rule on a tiny list — from $9$ to $10$ the gap is $1$ and the numbers are $2$. Stopping at the gap gives $17$; adding $1$ a second time gives $19$; and $26$ just repeats the last number in the list instead of counting the list.',
    },
    {
      q: 'How many integers are in the list $30, 31, 32, \\ldots, 74$?',
      choices: ['$44$', '$46$', '$45$', '$104$'],
      answer: 2,
      solution:
        'Count the numbers, not the gap: $74 - 30 + 1 = 45$. The bare subtraction $74 - 30 = 44$ counts only the steps from one number to the next, so it misses one member of the list. Adding $1$ twice, once for each end, gives $46$ — but only ONE extra number is needed. And $104$ comes from adding the two endpoints instead of subtracting them.',
    },
    {
      q: 'A list of consecutive integers starts at $12$ and contains exactly $20$ numbers. What is the last number in the list?',
      choices: ['$32$', '$30$', '$8$', '$31$'],
      answer: 3,
      solution:
        'Run the fencepost rule backwards. If the list is $12, 13, \\ldots, b$ then its length is $b - 12 + 1 = 20$, so $b - 12 = 19$ and $b = 31$. Check by counting the list $12, 13, \\ldots, 31$: that is $31 - 12 + 1 = 20$ numbers. ✓ The trap is $32 = 12 + 20$, which forgets that $12$ is itself one of the twenty; $30$ subtracts one too many; and $8 = 20 - 12$ subtracts when it should add.',
    },
  ],
  // p2 — an inclusive count dressed as a word problem
  [
    {
      q: 'A row in a theatre has seats numbered $14$ through $39$, with no numbers skipped. How many seats are in the row?',
      choices: ['$25$', '$26$', '$27$', '$53$'],
      answer: 1,
      solution:
        'Count the seat numbers, not the gaps between them: $39 - 14 + 1 = 26$ seats. The subtraction $39 - 14 = 25$ counts the spaces between neighbouring seats, of which there is one fewer than there are seats. Adding $1$ for each end gives $27$, one too many, and $53 = 14 + 39$ adds the endpoints instead of subtracting them.',
    },
    {
      q: 'A summer camp runs from day $6$ through day $19$, with no days off. How many days long is the camp?',
      choices: ['$14$', '$13$', '$15$', '$25$'],
      answer: 0,
      solution:
        'Both the first day and the last day count, so this is an inclusive count: $19 - 6 + 1 = 14$ days. Writing out $6, 7, 8, \\ldots, 19$ and counting confirms it. The answer $13$ is $19 - 6$, which measures the nights between day $6$ and day $19$ rather than the days themselves; $15$ adds $1$ once for each end; and $25 = 6 + 19$ adds when it should subtract.',
    },
    {
      q: 'Priya works exercises $23$ through $41$ in her workbook. How many exercises does she work?',
      choices: ['$18$', '$20$', '$19$', '$64$'],
      answer: 2,
      solution:
        'Exercise $23$ and exercise $41$ are both worked, so count inclusively: $41 - 23 + 1 = 19$ exercises. Subtracting alone gives $18$, which leaves out one of the two end exercises; adding $1$ twice gives $20$; and $64 = 23 + 41$ adds the endpoints rather than subtracting them.',
    },
  ],
  // p3 — multiples inside a range that starts at 1
  [
    {
      q: 'How many multiples of $4$ are there from $1$ to $52$?',
      choices: ['$12$', '$14$', '$13$', '$26$'],
      answer: 2,
      solution:
        'The multiples are $4, 8, 12, \\ldots, 52$. Divide every one of them by $4$ and the list turns into $1, 2, 3, \\ldots, 13$ — the same length, but now easy to count: $13$ numbers. Dividing does not change how many numbers there are. The answer $12$ drops the first multiple by counting $2$ through $13$; $14$ counts $0$ as a multiple, but the list starts at $1$; and $26$ divides by $2$ instead of by $4$.',
    },
    {
      q: 'How many multiples of $9$ are there from $1$ to $90$?',
      choices: ['$10$', '$9$', '$11$', '$81$'],
      answer: 0,
      solution:
        'The multiples are $9, 18, 27, \\ldots, 90$. Divide each by $9$: the list becomes $1, 2, 3, \\ldots, 10$, so there are $10$ of them. The answer $9$ comes from taking the gap $10 - 1$ of that divided list and forgetting the $+1$; $11$ counts $0$ as a multiple; and $81 = 90 - 9$ subtracts where the problem calls for dividing.',
    },
    {
      q: 'How many multiples of $6$ are there from $1$ to $100$?',
      choices: ['$15$', '$17$', '$94$', '$16$'],
      answer: 3,
      solution:
        'The largest multiple of $6$ that fits is $96$, since $102$ is past $100$. So the list is $6, 12, \\ldots, 96$, and dividing by $6$ turns it into $1, 2, \\ldots, 16$: there are $16$ multiples. The answer $17$ comes from rounding $100 \\div 6$ up and letting $102$ sneak into the range; $15$ drops one end of the divided list; and $94 = 100 - 6$ subtracts instead of dividing.',
    },
  ],
  // p4 — counting a skip-counting list
  [
    {
      q: 'How many numbers are in the list $4, 8, 12, \\ldots, 48$?',
      choices: ['$12$', '$11$', '$44$', '$13$'],
      answer: 0,
      solution:
        'Divide every number by $4$. The list becomes $1, 2, 3, \\ldots, 12$, which plainly has $12$ numbers, and dividing never changes how many numbers a list holds. The answer $11$ takes the gap $12 - 1$ of the divided list and forgets to add $1$; $13$ counts a $0$ that is not in the list; and $44 = 48 - 4$ subtracts the endpoints without dividing first, which counts nothing at all.',
    },
    {
      q: 'How many numbers are in the list $7, 14, 21, \\ldots, 91$?',
      choices: ['$12$', '$13$', '$14$', '$84$'],
      answer: 1,
      solution:
        'Every number in the list is a multiple of $7$, so divide by $7$: the list becomes $1, 2, 3, \\ldots, 13$. That is $13$ numbers, so the original list has $13$ numbers too. The answer $12$ is the gap $13 - 1$ with the $+1$ forgotten; $14$ adds an extra number at the front; and $84 = 91 - 7$ subtracts instead of dividing.',
    },
    {
      q: 'How many numbers are in the list $5, 10, 15, \\ldots, 85$?',
      choices: ['$16$', '$80$', '$17$', '$18$'],
      answer: 2,
      solution:
        'Divide each number by $5$ to get the consecutive list $1, 2, 3, \\ldots, 17$, which has $17$ numbers. Since dividing keeps the list the same length, the original list has $17$ numbers as well. The answer $16$ forgets the $+1$ on the divided list; $18$ adds one too many; and $80 = 85 - 5$ subtracts the ends without turning the list consecutive first.',
    },
  ],
  // p5 — every-other-number counts on a closed range
  [
    {
      q: 'How many even numbers are there from $22$ to $68$, including both ends?',
      choices: ['$23$', '$24$', '$46$', '$25$'],
      answer: 1,
      solution:
        'The even numbers form the list $22, 24, 26, \\ldots, 68$. Divide everything by $2$ to make it consecutive: $11, 12, 13, \\ldots, 34$. Now count: $34 - 11 + 1 = 24$. The answer $23$ stops at the gap $34 - 11$ and forgets the $+1$; $25$ adds $1$ once for each end when only one extra is needed; and $46 = 68 - 22$ never halves the range at all.',
    },
    {
      q: 'How many odd numbers are there from $15$ to $47$, including both ends?',
      choices: ['$16$', '$32$', '$17$', '$18$'],
      answer: 2,
      solution:
        'The odd numbers here are $15, 17, 19, \\ldots, 47$. They jump by $2$, so shift and divide to make them consecutive: subtracting $1$ and halving turns the list into $7, 8, 9, \\ldots, 23$. Count that: $23 - 7 + 1 = 17$. The answer $16$ forgets the $+1$; $18$ adds one too many; and $32 = 47 - 15$ counts the raw gap, as though every number in between were odd.',
    },
    {
      q: 'How many even numbers are there from $8$ to $90$, including both ends?',
      choices: ['$41$', '$82$', '$43$', '$42$'],
      answer: 3,
      solution:
        'The list is $8, 10, 12, \\ldots, 90$. Halve every number to get $4, 5, 6, \\ldots, 45$, a consecutive list of the same length, and count it: $45 - 4 + 1 = 42$. The answer $41$ leaves off the $+1$; $43$ adds $1$ twice; and $82 = 90 - 8$ is the whole gap, which counts odd numbers too and skips the fencepost correction besides.',
    },
  ],
  // p6 — a longer inclusive count in context
  [
    {
      q: 'The lockers along one hallway are numbered $48$ through $137$, with no numbers skipped. How many lockers are there?',
      choices: ['$89$', '$90$', '$91$', '$185$'],
      answer: 1,
      solution:
        'Count the locker numbers from $48$ to $137$ inclusively: $137 - 48 + 1 = 90$ lockers. The subtraction $137 - 48 = 89$ counts the spaces between lockers, and there is always one fewer space than locker. Adding $1$ for each end gives $91$, one too many, and $185 = 48 + 137$ adds the endpoints instead of subtracting.',
    },
    {
      q: 'An apartment building numbers its units $200$ through $349$, skipping nothing. How many units are there?',
      choices: ['$150$', '$149$', '$151$', '$549$'],
      answer: 0,
      solution:
        'This is an inclusive count: $349 - 200 + 1 = 150$ units. It helps to notice that $200$ through $349$ covers exactly as many numbers as $1$ through $150$ — just shifted along by $199$. The answer $149$ forgets the $+1$; $151$ adds $1$ twice; and $549 = 200 + 349$ adds the endpoints when it should subtract them.',
    },
    {
      q: 'A car park numbers its stalls $61$ through $148$, with none missing. How many stalls are there?',
      choices: ['$87$', '$209$', '$88$', '$89$'],
      answer: 2,
      solution:
        'Count the stall numbers inclusively: $148 - 61 + 1 = 88$ stalls. The bare gap $148 - 61 = 87$ counts the steps from one stall to the next and so leaves one stall out. Adding an extra $1$ for each end gives $89$, and $209 = 61 + 148$ adds the endpoints instead of subtracting them.',
    },
  ],
  // p7 — counting with overlap
  [
    {
      q: 'In a music class, $18$ students play piano, $13$ play violin, and $6$ play both. How many students play piano or violin?',
      choices: ['$31$', '$25$', '$19$', '$37$'],
      answer: 1,
      solution:
        'Adding $18 + 13 = 31$ counts each of the $6$ students who play both instruments twice — once as a pianist and once as a violinist. Subtract the overlap exactly once: $31 - 6 = 25$ students. The answer $31$ skips that subtraction; $19 = 31 - 6 - 6$ subtracts the overlap twice, which then leaves the both-players out entirely; and $37 = 31 + 6$ adds the overlap instead of removing it.',
    },
    {
      q: 'In a lunchroom survey, $21$ students said they like pizza, $15$ said they like tacos, and $9$ said they like both. How many students like pizza or tacos?',
      choices: ['$36$', '$45$', '$27$', '$18$'],
      answer: 2,
      solution:
        'The sum $21 + 15 = 36$ counts the $9$ both-likers once in each group, so it is $9$ too big. Take the overlap off once: $36 - 9 = 27$ students. The answer $36$ forgets to subtract; $45 = 36 + 9$ adds the overlap; and $18 = 36 - 9 - 9$ subtracts it twice, which erases the both-likers from the count altogether.',
    },
    {
      q: 'At a school, $12$ students belong to the art club and $17$ belong to the drama club. Altogether $24$ students belong to at least one of the two clubs. How many students belong to both clubs?',
      choices: ['$5$', '$29$', '$0$', '$7$'],
      answer: 0,
      solution:
        'The overlap rule says $\\text{either} = \\text{art} + \\text{drama} - \\text{both}$, so $24 = 12 + 17 - \\text{both}$, giving $\\text{both} = 29 - 24 = 5$ students. Check it: $12 + 17 - 5 = 24$. ✓ The answer $29$ is just $12 + 17$, which ignores the given total of $24$; $0$ assumes the clubs share nobody, but then the total would have been $29$; and $7 = 24 - 17$ subtracts only one of the two clubs.',
    },
  ],
  // p8 — multiples inside a range that does not start at 1
  [
    {
      q: 'How many multiples of $3$ are there from $20$ to $70$?',
      choices: ['$16$', '$17$', '$18$', '$50$'],
      answer: 1,
      solution:
        'The first multiple of $3$ that is at least $20$ is $21$, and the last one at most $70$ is $69$. Divide the list $21, 24, \\ldots, 69$ by $3$ to get $7, 8, \\ldots, 23$, which has $23 - 7 + 1 = 17$ numbers. The answer $16$ forgets the $+1$; $18$ lets $18$ into the range even though $18 < 20$; and $50 = 70 - 20$ is the size of the gap of the whole range, not a count of multiples.',
    },
    {
      q: 'How many multiples of $6$ are there from $40$ to $100$?',
      choices: ['$11$', '$60$', '$10$', '$9$'],
      answer: 2,
      solution:
        'The first multiple of $6$ at or above $40$ is $42 = 6 \\times 7$, and the last one at or below $100$ is $96 = 6 \\times 16$. Dividing the list $42, 48, \\ldots, 96$ by $6$ gives $7, 8, \\ldots, 16$, so there are $16 - 7 + 1 = 10$ of them. The answer $9$ leaves off the $+1$; $11$ counts $36$ as well, but $36$ is below $40$; and $60 = 100 - 40$ measures the range instead of counting multiples.',
    },
    {
      q: 'How many multiples of $7$ are there from $50$ to $200$?',
      choices: ['$150$', '$20$', '$22$', '$21$'],
      answer: 3,
      solution:
        'The first multiple of $7$ that is at least $50$ is $56 = 7 \\times 8$, and the last one at most $200$ is $196 = 7 \\times 28$. Divide the list $56, 63, \\ldots, 196$ by $7$: it becomes $8, 9, \\ldots, 28$, which holds $28 - 8 + 1 = 21$ numbers. The answer $20$ forgets the $+1$; $22$ also counts $49$, which is below $50$; and $150 = 200 - 50$ is the gap of the whole range.',
    },
  ],
  // p9 — either-or counting with two multiple conditions
  [
    {
      q: 'How many numbers from $1$ to $60$ are multiples of $2$ or multiples of $3$?',
      choices: ['$50$', '$40$', '$30$', '$10$'],
      answer: 1,
      solution:
        'There are $30$ multiples of $2$ and $20$ multiples of $3$ in this range. A number counted in both groups is a multiple of $6$, and there are $10$ of those. Since $30 + 20 = 50$ counts each multiple of $6$ twice, subtract the overlap once: $30 + 20 - 10 = 40$. The answer $50$ never subtracts; $30$ subtracts the overlap twice, dropping the multiples of $6$ out of the count; and $10$ counts only the overlap, which answers "multiples of $2$ AND $3$" instead of "or".',
    },
    {
      q: 'How many numbers from $1$ to $80$ are multiples of $4$ or multiples of $10$?',
      choices: ['$28$', '$20$', '$4$', '$24$'],
      answer: 3,
      solution:
        'There are $20$ multiples of $4$ and $8$ multiples of $10$. A number in both groups must be a multiple of $20$, and there are $4$ of those: $20, 40, 60, 80$. So the count is $20 + 8 - 4 = 24$. The answer $28$ forgets the overlap; $20$ subtracts it twice; and $4$ reports only the overlap, which is the "both" count, not the "or" count.',
    },
    {
      q: 'How many numbers from $1$ to $90$ are multiples of $3$ or multiples of $7$?',
      choices: ['$42$', '$34$', '$38$', '$4$'],
      answer: 2,
      solution:
        'There are $30$ multiples of $3$ and $12$ multiples of $7$ in the range. The numbers counted twice are the multiples of $21$: $21, 42, 63, 84$, so $4$ of them. Subtract that overlap once: $30 + 12 - 4 = 38$. The answer $42$ omits the subtraction; $34$ subtracts the overlap twice; and $4$ gives just the overlap itself.',
    },
  ],
  // p10 — fenceposts in the wild
  [
    {
      q: 'A straight walking path is $84$ metres long, with a lamp every $12$ metres, including a lamp at each end. How many lamps are there?',
      choices: ['$7$', '$8$', '$9$', '$6$'],
      answer: 1,
      solution:
        'The path splits into $84 \\div 12 = 7$ equal gaps. A straight line of gaps always has one more endpoint than it has gaps, and there is a lamp at each end, so the count is $7 + 1 = 8$ lamps. Check by listing the distances $0, 12, 24, 36, 48, 60, 72, 84$ — that is $8$ lamps. The answer $7$ counts gaps instead of lamps; $9$ adds one lamp for each end when only one extra is needed; and $6$ subtracts one instead of adding.',
    },
    {
      q: 'A ribbon $45$ cm long has a knot tied every $5$ cm, including a knot at each end. How many knots are there?',
      choices: ['$10$', '$9$', '$11$', '$8$'],
      answer: 0,
      solution:
        'The knots cut the ribbon into $45 \\div 5 = 9$ pieces, and a straight ribbon has one more knot than piece because both ends are knotted: $9 + 1 = 10$ knots. Listing the positions $0, 5, 10, \\ldots, 45$ gives $10$ knots. ✓ The answer $9$ counts the pieces; $11$ adds an extra knot at each end; and $8$ subtracts one instead of adding one.',
    },
    {
      q: 'Nine trees are planted in a straight row, with $6$ metres between each tree and the next. How far is it from the first tree to the last tree?',
      choices: ['$54$ m', '$42$ m', '$48$ m', '$15$ m'],
      answer: 2,
      solution:
        'What gets multiplied is the number of GAPS, not the number of trees, and $9$ trees in a row make $9 - 1 = 8$ gaps. So the distance is $8 \\times 6 = 48$ metres. Check by pacing the row: the trees sit at $0, 6, 12, 18, 24, 30, 36, 42, 48$ metres, which is $9$ trees ending at $48$. ✓ The answer $54 = 9 \\times 6$ multiplies by the trees instead of the gaps; $42 = 7 \\times 6$ takes away one gap too many; and $15 = 9 + 6$ adds where the problem calls for multiplying.',
    },
  ],
]

const s142 = [
  // p1 — two independent choices
  [
    {
      q: 'A bakery offers $3$ kinds of bagel and $4$ kinds of spread. How many ways can you choose one bagel and one spread?',
      choices: ['$7$', '$12$', '$9$', '$16$'],
      answer: 1,
      solution:
        'Each of the $3$ bagels can be paired with each of the $4$ spreads, so the choices multiply: $3 \\times 4 = 12$ combinations. Picture a grid with $3$ rows and $4$ columns — every cell is one order. The answer $7 = 3 + 4$ counts the items on the menu rather than the pairings; $9 = 3 \\times 3$ and $16 = 4 \\times 4$ each use one number twice and ignore the other.',
    },
    {
      q: 'A juice bar has $5$ flavours and $2$ cup sizes. How many ways can you pick one flavour and one size?',
      choices: ['$10$', '$7$', '$25$', '$4$'],
      answer: 0,
      solution:
        'The flavour choice and the size choice are separate, and every flavour comes in every size, so multiply: $5 \\times 2 = 10$ drinks. The answer $7 = 5 + 2$ adds when the choices should multiply — adding would count how many things are listed on the menu board, not how many drinks you could order. The answers $25 = 5 \\times 5$ and $4 = 2 \\times 2$ use one of the numbers twice.',
    },
    {
      q: 'Theo owns $3$ hats and $5$ scarves. How many different hat-and-scarf pairs can he wear?',
      choices: ['$8$', '$9$', '$15$', '$25$'],
      answer: 2,
      solution:
        'Two independent choices multiply: $3 \\times 5 = 15$ pairs. Each hat can be worn with any of the $5$ scarves, so each hat accounts for $5$ pairs, and $5 + 5 + 5 = 15$ agrees. The answer $8 = 3 + 5$ counts the garments instead of the outfits; $9 = 3 \\times 3$ and $25 = 5 \\times 5$ each square one number and forget the other.',
    },
  ],
  // p2 — the same principle, slightly bigger
  [
    {
      q: 'Nina has $5$ T-shirts and $3$ scarves. How many T-shirt-and-scarf outfits can she make?',
      choices: ['$8$', '$15$', '$9$', '$25$'],
      answer: 1,
      solution:
        'Every T-shirt goes with every scarf, so multiply: $5 \\times 3 = 15$ outfits. The answer $8 = 5 + 3$ counts pieces of clothing, not outfits; $9 = 3 \\times 3$ forgets the shirts; and $25 = 5 \\times 5$ forgets the scarves.',
    },
    {
      q: 'A costume is one of $6$ tops together with one of $4$ skirts. How many different costumes are possible?',
      choices: ['$10$', '$16$', '$24$', '$36$'],
      answer: 2,
      solution:
        'The two choices are independent, so they multiply: $6 \\times 4 = 24$ costumes. The answer $10 = 6 + 4$ adds instead of multiplying; $16 = 4 \\times 4$ and $36 = 6 \\times 6$ each use one number twice and drop the other.',
    },
    {
      q: 'Owen owns $4$ jackets and some pairs of gloves. He can put together $20$ different jacket-and-glove outfits. How many pairs of gloves does he own?',
      choices: ['$5$', '$16$', '$24$', '$80$'],
      answer: 0,
      solution:
        'If $g$ is the number of glove pairs, the multiplication principle says $4 \\times g = 20$, so $g = 20 \\div 4 = 5$ pairs. Check: $4 \\times 5 = 20$ outfits. ✓ The answer $16 = 20 - 4$ subtracts when the outfits came from multiplying; $24 = 20 + 4$ adds; and $80 = 20 \\times 4$ multiplies again instead of undoing the multiplication.',
    },
  ],
  // p3 — a two-stage experiment
  [
    {
      q: 'A spinner with $4$ equal sections is spun, and then a standard die is rolled. How many different results are possible?',
      choices: ['$10$', '$16$', '$36$', '$24$'],
      answer: 3,
      solution:
        'The spinner has $4$ outcomes and the die has $6$, and any spinner result can pair with any die result: $4 \\times 6 = 24$ results. The answer $10 = 4 + 6$ counts the outcomes of the two devices separately instead of pairing them; $16 = 4 \\times 4$ and $36 = 6 \\times 6$ pretend the same device was used twice.',
    },
    {
      q: 'A coin is flipped, and then a spinner with $5$ equal sections is spun. How many different results are possible?',
      choices: ['$10$', '$7$', '$25$', '$32$'],
      answer: 0,
      solution:
        'Two slots: the coin fills its slot in $2$ ways and the spinner fills its slot in $5$ ways, so there are $2 \\times 5 = 10$ results. Listing them helps: heads with each of the $5$ sections, then tails with each of the $5$. The answer $7 = 2 + 5$ adds instead of multiplying; $25 = 5 \\times 5$ uses the spinner twice; and $32 = 2^5$ treats the experiment as five coin flips.',
    },
    {
      q: 'A standard die is rolled, and then one card is drawn from a set of $3$ cards. How many different results are possible?',
      choices: ['$9$', '$36$', '$18$', '$216$'],
      answer: 2,
      solution:
        'Every one of the $6$ die faces can be followed by any of the $3$ cards, so multiply: $6 \\times 3 = 18$ results. The answer $9 = 6 + 3$ adds the two counts; $36 = 6 \\times 6$ rolls the die twice; and $216 = 6 \\times 6 \\times 6$ rolls it three times.',
    },
  ],
  // p4 — repeated slots with the same number of options
  [
    {
      q: 'A quiz has $4$ true-or-false questions. In how many different ways can the answer sheet be filled out?',
      choices: ['$8$', '$16$', '$6$', '$24$'],
      answer: 1,
      solution:
        'Each question is a slot with $2$ options, and the slots are independent: $2 \\times 2 \\times 2 \\times 2 = 16$ ways. The answer $8 = 4 \\times 2$ mixes up the number of questions with the number of options per question; $6 = 4 + 2$ adds them; and $24 = 4 \\times 3 \\times 2 \\times 1$ shrinks the options as if an answer could be used only once — but nothing stops all four answers from being "true".',
    },
    {
      q: 'A survey has $3$ questions, and each one may be answered Yes, No, or Maybe. In how many different ways can the survey be filled out?',
      choices: ['$9$', '$6$', '$27$', '$81$'],
      answer: 2,
      solution:
        'Draw a slot per question and write $3$ in each, since each question has $3$ possible answers: $3 \\times 3 \\times 3 = 27$ ways. The answer $9 = 3 \\times 3$ uses only two slots; $6 = 3 + 3$ adds instead of multiplying; and $81 = 3 \\times 3 \\times 3 \\times 3$ uses a fourth slot that does not exist.',
    },
    {
      q: 'A control panel has $5$ switches, and each switch is either up or down. How many different settings of the panel are possible?',
      choices: ['$32$', '$10$', '$25$', '$7$'],
      answer: 0,
      solution:
        'Each switch is a slot with $2$ options, and the switches do not affect one another: $2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$ settings. The answer $10 = 5 \\times 2$ multiplies the number of switches by the number of positions instead of chaining the slots; $25 = 5 \\times 5$ swaps the roles of the two numbers; and $7 = 5 + 2$ adds them.',
    },
  ],
  // p5 — arranging three things
  [
    {
      q: 'In how many different orders can $3$ songs be played, one after another?',
      choices: ['$6$', '$5$', '$9$', '$27$'],
      answer: 0,
      solution:
        'Fill the schedule one slot at a time. Any of the $3$ songs can go first; that song is then used up, so $2$ remain for the second slot and $1$ for the last: $3 \\times 2 \\times 1 = 6$ orders. The answer $5 = 3 + 2$ adds the slot counts instead of multiplying them; $9 = 3 \\times 3$ and $27 = 3 \\times 3 \\times 3$ forget that the options shrink, since a song cannot be played in two different positions.',
    },
    {
      q: 'Three runners finish a race with no ties. How many different finishing orders are possible?',
      choices: ['$3$', '$9$', '$6$', '$27$'],
      answer: 2,
      solution:
        'Think of first, second, and third place as three slots. First place can go to any of the $3$ runners, second place to either of the $2$ who are left, and third place to the last one: $3 \\times 2 \\times 1 = 6$ orders. The answer $3$ counts the runners rather than the orders; $9 = 3 \\times 3$ and $27 = 3 \\times 3 \\times 3$ let a runner take more than one place at once.',
    },
    {
      q: 'Three cards labelled A, B, and C are dealt to three players, one card each. How many different deals are possible?',
      choices: ['$9$', '$6$', '$3$', '$27$'],
      answer: 1,
      solution:
        'Hand out the cards one player at a time. The first player can get any of the $3$ cards, the second any of the $2$ that remain, and the third takes the last card: $3 \\times 2 \\times 1 = 6$ deals. The answer $9 = 3 \\times 3$ and the answer $27 = 3 \\times 3 \\times 3$ both ignore that a card, once dealt, is gone; and $3$ just counts the cards.',
    },
  ],
  // p6 — arranging four or five things
  [
    {
      q: 'In how many different orders can $5$ different plants be lined up on a windowsill?',
      choices: ['$25$', '$120$', '$20$', '$3125$'],
      answer: 1,
      solution:
        'The slots shrink as plants are used up: $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ orders. The answer $20 = 5 \\times 4$ stops after two slots; $25 = 5 \\times 5$ fills only two slots and forgets the shrinking; and $3125 = 5^5$ would be right only if the same plant could stand in several places at once.',
    },
    {
      q: 'Four different masks are hung in a row on a wall. How many different arrangements are possible?',
      choices: ['$16$', '$12$', '$24$', '$10$'],
      answer: 2,
      solution:
        'Hang them one hook at a time: $4$ choices for the first hook, then $3$, then $2$, then $1$, giving $4 \\times 3 \\times 2 \\times 1 = 24$ arrangements. The answer $12 = 4 \\times 3$ stops after two hooks; $16 = 4 \\times 4$ ignores the shrinking; and $10 = 4 + 3 + 2 + 1$ adds the slot counts instead of multiplying them.',
    },
    {
      q: 'In how many different orders can the four letters M, A, T, H be written in a row?',
      choices: ['$4$', '$16$', '$10$', '$24$'],
      answer: 3,
      solution:
        'There are $4$ choices for the first letter, then $3$ for the second, $2$ for the third, and $1$ for the last: $4 \\times 3 \\times 2 \\times 1 = 24$ orders. The answer $4$ counts the letters instead of the orderings; $16 = 4 \\times 4$ keeps the options from shrinking; and $10 = 4 + 3 + 2 + 1$ adds the slots when independent slots must be multiplied.',
    },
  ],
  // p7 — codes, with and without repeats
  [
    {
      q: 'A tag is $2$ letters long, and each letter must be one of A, B, C, D, E. Repeats are allowed. How many tags are possible?',
      choices: ['$10$', '$25$', '$20$', '$32$'],
      answer: 1,
      solution:
        'Each of the two slots can be filled by any of the $5$ letters, and using a letter in the first slot does not use it up: $5 \\times 5 = 25$ tags. The answer $20 = 5 \\times 4$ would be the count if the two letters had to be different; $10 = 5 + 5$ adds the slots instead of multiplying; and $32 = 2^5$ swaps the roles of the slot count and the option count.',
    },
    {
      q: 'A phone passcode is $3$ digits long, and each digit may be $0$ through $9$ with repeats allowed. How many passcodes are possible?',
      choices: ['$1000$', '$30$', '$720$', '$900$'],
      answer: 0,
      solution:
        'Three slots, each holding any of the $10$ digits: $10 \\times 10 \\times 10 = 1000$ passcodes. The answer $720 = 10 \\times 9 \\times 8$ forbids repeats, which this passcode allows; $900 = 9 \\times 10 \\times 10$ bans a leading $0$, but a passcode may certainly start with $0$; and $30 = 10 + 10 + 10$ adds the slots instead of multiplying them.',
    },
    {
      q: 'A $2$-digit code uses digits $0$ through $9$, but the two digits must be different. How many codes are possible?',
      choices: ['$100$', '$19$', '$45$', '$90$'],
      answer: 3,
      solution:
        'The first slot takes any of the $10$ digits. Because the second digit must differ from the first, that slot has only $9$ options left: $10 \\times 9 = 90$ codes. The answer $100 = 10 \\times 10$ allows repeats; $19 = 10 + 9$ adds the slots; and $45$ halves $90$, which would only make sense if the order of the two digits did not matter — but in a code it does, since $27$ and $72$ are different codes.',
    },
  ],
  // p8 — chains of letter and digit slots
  [
    {
      q: 'A parking permit shows one letter followed by two digits, with repeats allowed. How many permits are possible?',
      choices: ['$2600$', '$46$', '$260$', '$67{,}600$'],
      answer: 0,
      solution:
        'Three slots: $26 \\times 10 \\times 10$. Work left to right: $26 \\times 10 = 260$, then $260 \\times 10 = 2600$ permits. The answer $260$ forgets one of the digit slots; $67{,}600 = 26 \\times 26 \\times 10 \\times 10$ invents a second letter slot; and $46 = 26 + 10 + 10$ adds the slot sizes instead of multiplying them.',
    },
    {
      q: 'A club badge shows three letters, with repeats allowed. How many badges are possible?',
      choices: ['$78$', '$676$', '$17{,}576$', '$15{,}600$'],
      answer: 2,
      solution:
        'Each of the three slots holds any of the $26$ letters: $26 \\times 26 \\times 26$. Step through it: $26 \\times 26 = 676$, then $676 \\times 26 = 17{,}576$ badges. The answer $676$ stops after two slots; $15{,}600 = 26 \\times 25 \\times 24$ forbids repeats, which the badge allows; and $78 = 26 \\times 3$ multiplies the options by the number of slots rather than chaining the slots together.',
    },
    {
      q: 'A ticket number is two digits followed by two letters, with repeats allowed. How many ticket numbers are possible?',
      choices: ['$72$', '$67{,}600$', '$2600$', '$6760$'],
      answer: 1,
      solution:
        'Four slots: $10 \\times 10 \\times 26 \\times 26$. Take it in pieces — $10 \\times 10 = 100$ and $26 \\times 26 = 676$, so the total is $100 \\times 676 = 67{,}600$ tickets. The answer $2600$ uses only one letter slot; $6760$ uses only one digit slot; and $72 = 10 + 10 + 26 + 26$ adds the slot sizes when independent slots must be multiplied.',
    },
  ],
  // p9 — digits drawn from a restricted set
  [
    {
      q: 'How many three-digit numbers have all three digits even?',
      choices: ['$125$', '$100$', '$64$', '$20$'],
      answer: 1,
      solution:
        'Handle the picky slot first. The hundreds digit must be even AND cannot be $0$, so it comes from $\\{2, 4, 6, 8\\}$ — that is $4$ options. The tens and units digits may be any of the $5$ even digits $\\{0, 2, 4, 6, 8\\}$, repeats allowed. Multiply: $4 \\times 5 \\times 5 = 100$. The answer $125 = 5 \\times 5 \\times 5$ forgets that a three-digit number cannot start with $0$; $64 = 4 \\times 4 \\times 4$ bans $0$ from every slot, though $0$ is fine in the last two; and $20 = 4 \\times 5$ leaves out the units slot.',
    },
    {
      q: 'How many three-digit numbers have all three digits odd?',
      choices: ['$25$', '$15$', '$125$', '$60$'],
      answer: 2,
      solution:
        'Each digit must come from $\\{1, 3, 5, 7, 9\\}$, which is $5$ options per slot, and repeats are allowed: $5 \\times 5 \\times 5 = 125$. There is no leading-zero worry here, because $0$ is not odd, so the hundreds slot keeps all $5$ options. The answer $25 = 5 \\times 5$ uses only two slots; $15 = 5 + 5 + 5$ adds the slots; and $60 = 5 \\times 4 \\times 3$ shrinks the options as if the digits had to differ.',
    },
    {
      q: 'How many four-digit numbers use only the digits $1$, $2$, and $3$?',
      choices: ['$81$', '$12$', '$64$', '$24$'],
      answer: 0,
      solution:
        'Every one of the four slots may hold $1$, $2$, or $3$, and digits may repeat: $3 \\times 3 \\times 3 \\times 3 = 81$ numbers. No slot is picky, since $0$ is not among the allowed digits and so cannot lead. The answer $12 = 3 \\times 4$ multiplies the options by the number of slots; $64 = 4 \\times 4 \\times 4$ swaps the roles of the option count and the slot count; and $24 = 4 \\times 3 \\times 2 \\times 1$ forbids repeats, which nothing here forbids.',
    },
  ],
  // p10 — one slot is restricted
  [
    {
      q: 'Four students line up at the classroom door, but Ben insists on being first. How many lineups are possible?',
      choices: ['$6$', '$24$', '$12$', '$3$'],
      answer: 0,
      solution:
        'Fill the picky slot first: Ben takes the front spot, which he can do in exactly $1$ way. The other $3$ students then fill the remaining spots in $3 \\times 2 \\times 1 = 6$ ways, so there are $1 \\times 6 = 6$ lineups. The answer $24 = 4 \\times 3 \\times 2 \\times 1$ ignores the restriction entirely; $12 = 4 \\times 3$ stops after two slots; and $3$ counts only who could stand directly behind Ben.',
    },
    {
      q: 'Six friends stand in a row for a photo, but Rosa insists on standing last. How many lineups are possible?',
      choices: ['$720$', '$120$', '$24$', '$30$'],
      answer: 1,
      solution:
        'Place Rosa first, in the one spot she will accept: $1$ way. The remaining $5$ friends then fill the other five spots in $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ ways. So there are $120$ lineups — exactly one sixth of the unrestricted total, which makes sense because Rosa is last in one sixth of all lineups. The answer $720 = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$ forgets the restriction; $24$ removes two people instead of one; and $30 = 6 \\times 5$ stops after two slots.',
    },
    {
      q: 'Five friends sit in a row of five chairs, and Kai insists on the middle chair. How many seatings are possible?',
      choices: ['$120$', '$60$', '$4$', '$24$'],
      answer: 3,
      solution:
        'Seat Kai first: the middle chair is fixed, so that is $1$ way. The other $4$ friends fill the remaining four chairs in $4 \\times 3 \\times 2 \\times 1 = 24$ ways, giving $24$ seatings. The answer $120 = 5 \\times 4 \\times 3 \\times 2 \\times 1$ ignores the restriction; $60$ halves that total as if only two chairs were ruled out; and $4$ counts the friends who are left rather than their arrangements.',
    },
  ],
]

const s143 = [
  // p1 — the smallest casework there is
  [
    {
      q: 'Two coins are flipped. In how many ways can you get exactly one tail?',
      choices: ['$2$', '$1$', '$3$', '$4$'],
      answer: 0,
      solution:
        'Two cases, split by which coin shows the tail. Case 1: the tail is on the first coin, giving TH. Case 2: the tail is on the second coin, giving HT. The cases cannot overlap, because a single flip result cannot have its one tail in two different places, and each case holds exactly $1$ outcome, so the total is $1 + 1 = 2$. The answer $1$ treats TH and HT as the same result, but the coins are separate; $4$ counts all four outcomes HH, HT, TH, TT; and $3$ throws out only the double-tail.',
    },
    {
      q: 'Three coins are flipped. In how many ways can you get exactly two heads?',
      choices: ['$2$', '$6$', '$3$', '$1$'],
      answer: 2,
      solution:
        'Use cases based on which coin is the odd one out — the single tail. Tail on the first coin gives THH, tail on the second gives HTH, tail on the third gives HHT. No outcome fits two cases, since a result with exactly two heads has exactly one tail sitting in exactly one position, so the total is $1 + 1 + 1 = 3$. The answer $1$ counts "two heads and a tail" as a single result and ignores where the tail sits; $2$ finds THH and HHT but misses the split HTH; and $6 = 3 \\times 2$ multiplies where separate cases must be added.',
    },
    {
      q: 'Two coins are flipped. In how many ways can you get at least one head?',
      choices: ['$1$', '$2$', '$4$', '$3$'],
      answer: 3,
      solution:
        '"At least one head" splits into two disjoint cases: exactly one head, or exactly two heads. Exactly one head happens in $2$ ways (HT and TH) and exactly two heads happens in $1$ way (HH), so the total is $2 + 1 = 3$. The cases cannot overlap because an outcome has one exact number of heads. Check against the full list HH, HT, TH, TT — only TT fails. The answer $1$ counts only HH; $2$ counts only the mixed results and forgets HH; and $4$ counts every outcome, including TT.',
    },
  ],
  // p2 — small dice sums
  [
    {
      q: 'A red die and a blue die are rolled. In how many ways can they sum to $5$?',
      choices: ['$2$', '$4$', '$5$', '$3$'],
      answer: 1,
      solution:
        'Take cases on the red die. Red $1$ forces blue $4$; red $2$ forces blue $3$; red $3$ forces blue $2$; red $4$ forces blue $1$. Red $5$ would need blue $0$ and red $6$ would need a negative, so those cases are empty. Each surviving case gives exactly one roll, so there are $4$ ways. The answer $2$ counts $\\{1,4\\}$ and $\\{2,3\\}$ as unordered pairs, but the dice are different colours, so red $1$ with blue $4$ is not the same roll as red $4$ with blue $1$; $5$ lets a die show $0$; and $3$ drops one of the two orders.',
    },
    {
      q: 'Two dice are rolled. In how many ways can they sum to $3$?',
      choices: ['$2$', '$1$', '$3$', '$4$'],
      answer: 0,
      solution:
        'Cases by the first die: first $1$ forces second $2$, and first $2$ forces second $1$. A first die of $3$ or more overshoots, since the second die is at least $1$. That is $2$ ways, and the two cases cannot overlap because they name different values for the first die. The answer $1$ counts $\\{1,2\\}$ only once, but the dice are separate and $(1,2)$ and $(2,1)$ are different rolls; $3$ counts an impossible roll with a $0$ on it; and $4$ counts each of the two rolls twice.',
    },
    {
      q: 'Two dice are rolled. In how many ways can they sum to $10$?',
      choices: ['$2$', '$4$', '$3$', '$5$'],
      answer: 2,
      solution:
        'Cases by the first die: first $4$ forces second $6$, first $5$ forces second $5$, first $6$ forces second $4$. A first die of $3$ or less would need a second die of $7$ or more, which no die can show. That gives $3$ ways. The answer $2$ counts the unordered pairs $\\{4,6\\}$ and $\\{5,5\\}$, forgetting that $(4,6)$ and $(6,4)$ are two different rolls; $4$ counts the double $(5,5)$ twice, but there is only one way for both dice to show $5$; and $5$ adds phantom rolls in which a die shows $7$ or more.',
    },
  ],
  // p3 — coin combinations with two coin values
  [
    {
      q: 'How many ways can you make $35$ cents using only dimes and nickels?',
      choices: ['$3$', '$4$', '$5$', '$7$'],
      answer: 1,
      solution:
        'Use cases based on the number of dimes, which can be $0$, $1$, $2$, or $3$ — four dimes would already be $40$ cents. In each case the nickels are forced: $0$ dimes needs $7$ nickels, $1$ dime needs $5$, $2$ dimes needs $3$, and $3$ dimes needs $1$. The cases cannot overlap, since each names a different number of dimes, and none is missed. So there are $4$ ways. The answer $3$ forgets the all-nickels case; $5$ counts an impossible $4$-dime case; and $7$ is the number of nickels in one case, not a count of ways.',
    },
    {
      q: 'How many ways can you make $30$ cents using only quarters and nickels?',
      choices: ['$2$', '$3$', '$1$', '$6$'],
      answer: 0,
      solution:
        'Take cases on the number of quarters. With $0$ quarters, the whole $30$ cents must be nickels: $6$ of them. With $1$ quarter, $5$ cents remain, so $1$ nickel. Two quarters would be $50$ cents, too much. The cases are disjoint because they use different numbers of quarters, so the count is $1 + 1 = 2$ ways. The answer $3$ counts an impossible $2$-quarter case; $1$ forgets the all-nickels case; and $6$ reports the number of nickels in the first case rather than the number of ways.',
    },
    {
      q: 'How many ways can you make $45$ cents using only dimes and nickels?',
      choices: ['$4$', '$9$', '$5$', '$6$'],
      answer: 2,
      solution:
        'Cases by the number of dimes: $0$, $1$, $2$, $3$, or $4$. Five dimes would be $50$ cents, past the target. Each case forces the nickels ($9$, $7$, $5$, $3$, and $1$ of them), and no two cases can describe the same pile of coins because they hold different numbers of dimes. That is $5$ ways. The answer $4$ forgets the all-nickels case; $6$ counts an impossible $5$-dime case; and $9$ is the nickel count in one case, not a count of ways.',
    },
  ],
  // p4 — digit patterns, one case per leading digit
  [
    {
      q: 'How many three-digit numbers have all three digits the same?',
      choices: ['$10$', '$9$', '$27$', '$900$'],
      answer: 1,
      solution:
        'One case per repeated digit: $111, 222, 333, \\ldots, 999$. The repeated digit runs from $1$ to $9$, because a three-digit number cannot start with $0$, so there are $9$ such numbers. The cases cannot overlap, since each names a different digit. The answer $10$ counts $000$ as well, but that is not a three-digit number; $27 = 9 \\times 3$ counts each number once per digit position; and $900$ is the count of all three-digit numbers.',
    },
    {
      q: 'How many two-digit numbers have both digits odd?',
      choices: ['$10$', '$20$', '$25$', '$50$'],
      answer: 2,
      solution:
        'Use one case per tens digit. The tens digit must be odd, so it is one of $1, 3, 5, 7, 9$ — five cases, and none of them is $0$, so the leading-digit rule causes no trouble. Inside each case the units digit may be any of the $5$ odd digits, so each case holds $5$ numbers. Multiply inside a case and add across the cases: $5 + 5 + 5 + 5 + 5 = 5 \\times 5 = 25$. The answer $10 = 5 + 5$ adds where a single case needs multiplying; $20 = 5 \\times 4$ makes the digits differ, though $11$ and $33$ are perfectly good; and $50 = 5 \\times 10$ lets the units digit be anything.',
    },
    {
      q: 'How many two-digit numbers have a tens digit that is exactly twice the units digit?',
      choices: ['$4$', '$5$', '$9$', '$3$'],
      answer: 0,
      solution:
        'Take cases on the units digit $u$; the tens digit is then forced to be $2u$. $u = 1$ gives $21$, $u = 2$ gives $42$, $u = 3$ gives $63$, and $u = 4$ gives $84$. From $u = 5$ on, the tens digit would be $10$ or more, which no single digit can be. The case $u = 0$ gives a tens digit of $0$, and $00$ is not a two-digit number. So there are $4$ numbers, and no two cases can produce the same number since they have different units digits. The answer $5$ counts the $u = 0$ case; $3$ stops at $63$ and misses $84$; and $9$ assumes one number for each tens digit $1$ through $9$ without checking whether the units digit exists.',
    },
  ],
  // p5 — bigger dice counts
  [
    {
      q: 'Two dice are rolled. In how many ways can they sum to $8$?',
      choices: ['$4$', '$5$', '$6$', '$3$'],
      answer: 1,
      solution:
        'Cases by the first die: $2 + 6$, $3 + 5$, $4 + 4$, $5 + 3$, $6 + 2$. A first die of $1$ would need a $7$ on the second, which is impossible, so that case is empty. Each surviving case gives exactly one roll, and the cases are disjoint because they name different first dice: $5$ ways. The answer $4$ drops the double $(4,4)$, which is a legitimate roll; $3$ counts unordered pairs only; and $6$ assumes every sum works out like a sum of $7$, which is the only sum with all six first-die values available.',
    },
    {
      q: 'Two dice are rolled. In how many ways can the sum be a multiple of $5$?',
      choices: ['$4$', '$8$', '$7$', '$3$'],
      answer: 2,
      solution:
        'Two dice can total anywhere from $2$ to $12$, so the multiples of $5$ within reach are $5$ and $10$. Case 1, sum $5$: $(1,4), (2,3), (3,2), (4,1)$ — that is $4$ rolls. Case 2, sum $10$: $(4,6), (5,5), (6,4)$ — that is $3$ rolls. The cases cannot overlap, since a roll has just one sum, so add them: $4 + 3 = 7$ ways. The answer $4$ counts only the first case; $3$ counts only the second; and $8 = 4 + 4$ assumes sum $10$ has as many rolls as sum $5$, but $10$ is closer to the top of the range and loses some.',
    },
    {
      q: 'Two dice are rolled. In how many ways can both dice show the same number?',
      choices: ['$12$', '$36$', '$30$', '$6$'],
      answer: 3,
      solution:
        'Use one case per value on the first die. If the first die shows $1$, the second is forced to be $1$; if the first shows $2$, the second must be $2$; and so on through $6$. Each of the $6$ cases holds exactly one roll, and no roll fits two cases because the first die shows one value, so there are $6$ ways. The answer $12 = 6 \\times 2$ counts each double twice, as though $(3,3)$ could happen in two different orders; $36$ counts every possible roll; and $30$ counts the rolls where the dice DIFFER.',
    },
  ],
  // p6 — two-digit numbers with a fixed digit sum
  [
    {
      q: 'How many two-digit numbers have digits that add up to $8$?',
      choices: ['$9$', '$8$', '$6$', '$7$'],
      answer: 1,
      solution:
        'Take cases on the tens digit, which must be at least $1$ and at most $8$. Each choice forces the units digit: $17, 26, 35, 44, 53, 62, 71, 80$. That is one number per case for $8$ cases, and no number appears in two cases because each has its own tens digit. The answer $9$ also counts $08$, but that is not a two-digit number; $7$ throws out $80$, though a units digit of $0$ is perfectly legal; and $6$ discards both of those end cases.',
    },
    {
      q: 'How many two-digit numbers have digits that add up to $12$?',
      choices: ['$9$', '$8$', '$7$', '$6$'],
      answer: 2,
      solution:
        'Cases by the tens digit. The tens digit cannot be $1$ or $2$, because the units digit would have to be $11$ or $10$, and a digit stops at $9$. So the tens digit runs from $3$ to $9$, each forcing the units digit: $39, 48, 57, 66, 75, 84, 93$. That is $7$ numbers. The answer $9$ assumes every tens digit from $1$ to $9$ works without checking; $8$ lets the tens digit be $2$ with a "units digit" of $10$; and $6$ drops the double-digit case $66$, which is a genuine answer.',
    },
    {
      q: 'How many two-digit numbers have digits that add up to $5$?',
      choices: ['$5$', '$6$', '$4$', '$9$'],
      answer: 0,
      solution:
        'Cases by the tens digit, which runs from $1$ to $5$ — a tens digit of $6$ or more would already pass $5$. Each case forces the units digit: $14, 23, 32, 41, 50$. That is $5$ numbers, one per case, with no overlap. The answer $6$ also counts $05$, which is not a two-digit number; $4$ discards $50$, even though a units digit of $0$ is allowed; and $9$ assumes one number for each tens digit $1$ through $9$ without checking that the units digit can be found.',
    },
  ],
  // p7 — coin combinations where one coin is a penny
  [
    {
      q: 'How many ways can you make $30$ cents using only pennies and nickels?',
      choices: ['$6$', '$7$', '$5$', '$30$'],
      answer: 1,
      solution:
        'Use cases based on the number of nickels: $0, 1, 2, 3, 4, 5$, or $6$. Any more than $6$ nickels would pass $30$ cents. In every case the pennies simply fill in whatever is left, so each case works, and no two cases overlap because they use different numbers of nickels. Count the cases from $0$ to $6$ inclusively: $6 - 0 + 1 = 7$ ways. The answer $6$ counts the gap instead of the cases, which drops one of the two ends; $5$ drops both the all-pennies and the all-nickels case; and $30$ is the number of pennies in one case, not a number of ways.',
    },
    {
      q: 'How many ways can you make $40$ cents using only pennies and dimes?',
      choices: ['$5$', '$4$', '$3$', '$40$'],
      answer: 0,
      solution:
        'Cases by the number of dimes: $0, 1, 2, 3$, or $4$. Five dimes would be $50$ cents. Each case leaves an amount that the pennies cover exactly, so all five cases work and none of them overlaps another. Counting $0$ through $4$ inclusively gives $4 - 0 + 1 = 5$ ways. The answer $4$ forgets the all-pennies case; $3$ forgets both end cases; and $40$ counts the pennies in one case rather than counting cases.',
    },
    {
      q: 'How many ways can you make $45$ cents using only pennies and nickels?',
      choices: ['$8$', '$9$', '$45$', '$10$'],
      answer: 3,
      solution:
        'Take cases on the number of nickels, which can be anything from $0$ up to $9$, since $10$ nickels would be $50$ cents. The pennies then fill the gap in every case, so all of these work, and the cases are disjoint because each uses a different number of nickels. Count $0$ through $9$ inclusively: $9 - 0 + 1 = 10$ ways. The answer $9$ takes the gap $9 - 0$ and forgets the $+1$, which quietly drops the all-pennies case; $8$ drops both end cases; and $45$ counts pennies, not ways.',
    },
  ],
  // p8 — multiply inside cases, add across cases
  [
    {
      q: 'A breakfast is one main dish plus one juice. The mains are $3$ kinds of pancake and $4$ kinds of omelette, and there are $2$ juices. How many different breakfasts are possible?',
      choices: ['$24$', '$14$', '$9$', '$12$'],
      answer: 1,
      solution:
        'Case 1: pancake breakfasts, $3 \\times 2 = 6$. Case 2: omelette breakfasts, $4 \\times 2 = 8$. A main dish is either a pancake or an omelette and never both, so the cases cannot overlap, and every breakfast lands in one of them. Add across the cases: $6 + 8 = 14$ breakfasts. The answer $24 = 3 \\times 4 \\times 2$ multiplies the two case sizes together, as though a breakfast had both a pancake and an omelette; $9 = 3 + 4 + 2$ adds where each case needs multiplying; and $12 = 3 \\times 4$ pairs mains with mains and forgets the juice.',
    },
    {
      q: 'A lunch is one dish with one extra. There are $2$ pasta dishes, each served with one of $3$ sauces, and $3$ pizzas, each served with one of $4$ toppings. How many different lunches are possible?',
      choices: ['$18$', '$12$', '$72$', '$35$'],
      answer: 0,
      solution:
        'The two cases have different multipliers, so they must be counted separately. Case 1: pasta lunches, $2 \\times 3 = 6$. Case 2: pizza lunches, $3 \\times 4 = 12$. No lunch is both a pasta and a pizza, so the cases are disjoint, and adding them gives $6 + 12 = 18$ lunches. The answer $12$ counts only the pizza case; $72 = 6 \\times 12$ multiplies the cases when separate cases must be added; and $35 = (2 + 3) \\times (3 + 4)$ pools the dishes and the extras, which would pair a pasta dish with a pizza topping.',
    },
    {
      q: 'A snack is one drink plus one pastry. There are $3$ hot drinks and $2$ cold drinks, and $4$ pastries. How many different snacks are possible?',
      choices: ['$24$', '$9$', '$20$', '$12$'],
      answer: 2,
      solution:
        'Case 1: hot-drink snacks, $3 \\times 4 = 12$. Case 2: cold-drink snacks, $2 \\times 4 = 8$. A drink is hot or cold but never both, so the cases neither overlap nor leave anything out. Add: $12 + 8 = 20$ snacks. (Since both cases share the same $4$ pastries, you can also gather the drinks first: $(3 + 2) \\times 4 = 20$.) The answer $24 = 3 \\times 2 \\times 4$ multiplies the two drink groups together, as though a snack came with two drinks; $9 = 3 + 2 + 4$ adds everything; and $12$ counts only the hot-drink case.',
    },
  ],
  // p9 — summing a run of case counts
  [
    {
      q: 'How many two-digit numbers have a units digit that is bigger than the tens digit?',
      choices: ['$45$', '$36$', '$54$', '$81$'],
      answer: 1,
      solution:
        'Take cases on the tens digit $t$, which runs from $1$ to $9$. The units digit must be one of $t+1, t+2, \\ldots, 9$, which is $9 - t$ choices. So the case counts are $8, 7, 6, 5, 4, 3, 2, 1, 0$ as $t$ goes from $1$ to $9$ — the case $t = 9$ is empty, since no digit beats $9$. Add across the cases: $8 + 7 + \\cdots + 1 = 36$. The answer $45 = 9 + 8 + \\cdots + 1$ comes from also allowing a tens digit of $0$, but then the number is not two digits; $54$ answers the opposite question, counting numbers whose tens digit is at least as big as the units digit; and $81$ counts every two-digit number with two different digits, which is both directions at once.',
    },
    {
      q: 'How many two-digit numbers have a tens digit that is at least as big as the units digit?',
      choices: ['$45$', '$54$', '$36$', '$55$'],
      answer: 1,
      solution:
        'Cases by the tens digit $t$, running from $1$ to $9$. "At least as big" lets the units digit be anything from $0$ up to $t$, which is $t + 1$ choices. The case counts are therefore $2, 3, 4, \\ldots, 10$, and adding them gives $2 + 3 + \\cdots + 10 = 54$. (Equivalently: $45$ numbers have a strictly bigger tens digit, plus the $9$ numbers with equal digits, giving $45 + 9 = 54$.) The answer $45$ counts only the strictly-bigger numbers and leaves out $11, 22, \\ldots, 99$; $36$ answers the opposite question; and $55$ also counts $00$, which is not a two-digit number.',
    },
    {
      q: 'How many two-digit numbers have two different digits?',
      choices: ['$45$', '$90$', '$81$', '$72$'],
      answer: 2,
      solution:
        'Cases by the tens digit $t$, which runs from $1$ to $9$. Within a case the units digit can be any of the $10$ digits except $t$ itself, giving $9$ choices. Multiply inside the case, add across the cases: nine cases of $9$ each, so $9 \\times 9 = 81$. Another route: there are $90$ two-digit numbers in all, and $9$ of them ($11$ through $99$) repeat a digit, so $90 - 9 = 81$. ✓ The answer $45$ counts only the half whose tens digit is the bigger one; $90$ forgets to remove the repeated-digit numbers; and $72$ removes them twice.',
    },
  ],
  // p10 — dice products
  [
    {
      q: 'Two dice are rolled. In how many ways can the product of the two numbers be $6$?',
      choices: ['$2$', '$4$', '$3$', '$6$'],
      answer: 1,
      solution:
        'List the factor pairs of $6$ in which both factors are between $1$ and $6$: $1 \\times 6$, $2 \\times 3$, $3 \\times 2$, and $6 \\times 1$. Every one of these is a legal roll, and no two of them are the same (first, second) roll, so there are $4$ ways. The answer $2$ counts the unordered pairs $\\{1,6\\}$ and $\\{2,3\\}$, but the two dice are separate, so $(2,3)$ and $(3,2)$ are different rolls; $3$ drops one of those orders; and $6$ assumes every value of the first die leads somewhere, which only happens for a sum of $7$, not for this product.',
    },
    {
      q: 'Two dice are rolled. In how many ways can the product of the two numbers be $4$?',
      choices: ['$4$', '$2$', '$3$', '$1$'],
      answer: 2,
      solution:
        'The factor pairs of $4$ using values from $1$ to $6$ are $1 \\times 4$, $2 \\times 2$, and $4 \\times 1$. That is $3$ rolls, and no roll is listed twice because each names a different (first, second) pair. The answer $4$ counts $(2,2)$ twice, but there is only one way for both dice to show a $2$; $2$ treats $\\{1,4\\}$ as a single roll instead of two; and $1$ counts only the double $(2,2)$.',
    },
    {
      q: 'Two dice are rolled. In how many ways can the product of the two numbers be $24$?',
      choices: ['$2$', '$4$', '$3$', '$1$'],
      answer: 0,
      solution:
        'Look for factor pairs of $24$ with both factors between $1$ and $6$: only $4 \\times 6$ and $6 \\times 4$ qualify. The pairs $1 \\times 24$, $2 \\times 12$, and $3 \\times 8$ all need a face bigger than $6$, so those cases are empty. That leaves $2$ ways. The answer $4$ keeps the impossible $3 \\times 8$ pair and its reverse; $3$ keeps one impossible pair; and $1$ counts $\\{4,6\\}$ once, forgetting that the dice are separate and $(4,6)$ and $(6,4)$ are different rolls.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 14,
  sections: {
    '14.1': s141,
    '14.2': s142,
    '14.3': s143,
  },
}
