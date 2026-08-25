// Prealgebra chapter 5 — variations for sections 5.4-5.5.
// All problems and solutions are original MathQuest content.

const s54 = [
  // p1 — one-step translation: a number plus something is a total
  [
    {
      q: 'A number increased by $9$ is $23$. What is the number?',
      choices: ['$32$', '$14$', '$9$', '$207$'],
      answer: 1,
      solution:
        'Let $n$ be the number: $n + 9 = 23$. Subtract $9$ from both sides: $n = 14$. Check: $14 + 9 = 23$. ✓ Adding the $9$ instead of undoing it gives $32$, and multiplying gives $207$.',
    },
    {
      q: 'Mia dropped $6$ more beads into her jar, and then the jar held $19$ beads. How many beads were in the jar before?',
      choices: ['$25$', '$6$', '$13$', '$114$'],
      answer: 2,
      solution:
        'Let $b$ be the starting number of beads: $b + 6 = 19$. Subtract $6$: $b = 13$. Check: $13$ beads plus the $6$ new ones is $19$. ✓ The choice $25$ adds the $6$ a second time, and $6$ just repeats the number of beads she dropped in.',
    },
    {
      q: 'The sum of a number and $12$ is $30$. What is the number?',
      choices: ['$42$', '$12$', '$360$', '$18$'],
      answer: 3,
      solution:
        '"Sum" means add, so the sentence is $n + 12 = 30$. Subtract $12$ from both sides: $n = 18$. Check: $18 + 12 = 30$. ✓ Answering $42$ runs the story forward instead of backward, and $360$ multiplies when the word "sum" called for addition.',
    },
  ],
  // p2 — one-step translation: a multiplication undone
  [
    {
      q: 'A number tripled is $51$. What is the number?',
      choices: ['$17$', '$153$', '$48$', '$54$'],
      answer: 0,
      solution:
        '"Tripled" means multiplied by $3$: $3n = 51$, so $n = 51 \\div 3 = 17$. Check: $3 \\times 17 = 51$. ✓ Tripling $51$ gives $153$, which runs the story forward; $48$ and $54$ subtract or add the $3$ instead of dividing by it.',
    },
    {
      q: 'Every crate holds the same number of oranges. Six crates hold $84$ oranges altogether. How many oranges are in one crate?',
      choices: ['$504$', '$14$', '$78$', '$90$'],
      answer: 1,
      solution:
        'Let $c$ be the oranges in one crate: $6c = 84$, so $c = 84 \\div 6 = 14$. Check: six crates of $14$ hold $84$. ✓ Multiplying gives $504$, which is far more oranges than the story has; $78$ and $84 + 6 = 90$ treat the $6$ as something to subtract or add.',
    },
    {
      q: 'A number multiplied by $8$ gives $56$. What is the number?',
      choices: ['$448$', '$48$', '$64$', '$7$'],
      answer: 3,
      solution:
        'The sentence is $8n = 56$, so undo the multiplication with division: $n = 56 \\div 8 = 7$. Check: $8 \\times 7 = 56$. ✓ Multiplying again gives $448$; taking $56 - 8 = 48$ or $56 + 8 = 64$ undoes an operation that was never done.',
    },
  ],
  // p3 — two-step translation: multiply, then add or subtract
  [
    {
      q: 'Four times a number, minus $9$, is $27$. What is the number?',
      choices: ['$9$', '$\\frac{9}{2}$', '$36$', '$4$'],
      answer: 0,
      solution:
        'The equation is $4n - 9 = 27$. Add $9$ to both sides: $4n = 36$. Divide by $4$: $n = 9$. Check: $4 \\times 9 - 9 = 27$. ✓ Subtracting the $9$ instead gives $4n = 18$ and the wrong answer $\\frac{9}{2}$, while $36$ stops one step early and $4$ just repeats the coefficient.',
    },
    {
      q: 'Six times a number, plus $5$, is $53$. What is the number?',
      choices: ['$\\frac{29}{3}$', '$8$', '$48$', '$6$'],
      answer: 1,
      solution:
        'Translate: $6n + 5 = 53$. Subtract $5$: $6n = 48$. Divide by $6$: $n = 8$. Check: $6 \\times 8 + 5 = 53$. ✓ Adding the $5$ instead gives $6n = 58$ and $n = \\frac{29}{3}$; answering $48$ forgets the final division.',
    },
    {
      q: 'Nina thinks of a number, multiplies it by $7$, and then takes away $4$. She ends up with $31$. What number did she think of?',
      choices: ['$\\frac{27}{7}$', '$35$', '$5$', '$7$'],
      answer: 2,
      solution:
        'Let $n$ be her number: $7n - 4 = 31$. Undo in reverse order — add $4$ first to get $7n = 35$, then divide by $7$ to get $n = 5$. Check: $7 \\times 5 = 35$, take away $4$ and you land on $31$. ✓ Taking $4$ away again gives $\\frac{27}{7}$, and $35$ stops before the division.',
    },
  ],
  // p4 — two quantities, one a fixed amount more than the other
  [
    {
      q: 'Ines has $6$ more stamps than Omar. Together they have $28$ stamps. How many stamps does INES have?',
      choices: ['$17$', '$11$', '$14$', '$22$'],
      answer: 0,
      solution:
        'Let $m$ be Omar\'s stamps; Ines has $m + 6$. Together: $m + (m + 6) = 28$, so $2m = 22$ and $m = 11$. The question asks about Ines: $11 + 6 = 17$. Check: $11 + 17 = 28$. ✓ Answering $11$ gives Omar\'s count, $14$ splits the $28$ evenly and ignores the difference, and $22$ forgets to halve.',
    },
    {
      q: 'A blue rope is $8$ cm longer than a red rope. Laid end to end, the two ropes stretch $54$ cm. How long is the BLUE rope?',
      choices: ['$23$', '$27$', '$31$', '$46$'],
      answer: 2,
      solution:
        'Let $r$ be the red rope\'s length; the blue one is $r + 8$. Then $r + (r + 8) = 54$, so $2r = 46$ and $r = 23$. The blue rope is $23 + 8 = 31$ cm. Check: $23 + 31 = 54$ and the blue rope is $8$ cm longer. ✓ The choice $23$ is the red rope, $27$ splits $54$ in half as if the ropes matched, and $46$ never gets halved.',
    },
    {
      q: 'In a two-game match, Team Falcon scored $10$ points more than Team Heron. The two teams scored $76$ points in all. How many points did HERON score?',
      choices: ['$43$', '$38$', '$66$', '$33$'],
      answer: 3,
      solution:
        'Let $h$ be Heron\'s points; Falcon scored $h + 10$. Then $h + (h + 10) = 76$, so $2h = 66$ and $h = 33$. Check: Heron $33$, Falcon $43$, and $33 + 43 = 76$. ✓ Reread the question — $43$ is Falcon\'s total, $38$ is half of $76$ (which would need the teams to be tied), and $66$ is the sum before halving.',
    },
  ],
  // p5 — two consecutive integers
  [
    {
      q: 'Two consecutive integers add up to $59$. What is the smaller one?',
      choices: ['$29$', '$30$', '$\\frac{59}{2}$', '$58$'],
      answer: 0,
      solution:
        'Let the smaller be $n$; the next one is $n + 1$. Then $n + (n + 1) = 59$, so $2n + 1 = 59$, giving $2n = 58$ and $n = 29$. The integers are $29$ and $30$. Check: $29 + 30 = 59$. ✓ The choice $30$ is the larger one, $\\frac{59}{2}$ halves without first removing the extra $1$, and $58$ stops before dividing.',
    },
    {
      q: 'Two consecutive integers add up to $73$. What is the LARGER one?',
      choices: ['$36$', '$37$', '$\\frac{73}{2}$', '$72$'],
      answer: 1,
      solution:
        'Call the smaller $n$: $n + (n + 1) = 73$, so $2n = 72$ and $n = 36$. The integers are $36$ and $37$, and the question asks for the larger: $37$. Check: $36 + 37 = 73$. ✓ Answering $36$ stops at the variable instead of the question, and $\\frac{73}{2}$ forgets that the two integers are not equal.',
    },
    {
      q: 'The two page numbers showing when a book lies open are consecutive, and they add up to $95$. What is the smaller page number?',
      choices: ['$48$', '$\\frac{95}{2}$', '$94$', '$47$'],
      answer: 3,
      solution:
        'Let the smaller page be $n$, so the facing page is $n + 1$. Then $2n + 1 = 95$, so $2n = 94$ and $n = 47$. The pages are $47$ and $48$. Check: $47 + 48 = 95$. ✓ The choice $48$ is the facing page, $94$ is the value of $2n$ before dividing, and $\\frac{95}{2}$ is not even a page number.',
    },
  ],
  // p6 — two quantities differing by a fixed amount, asking for the smaller
  [
    {
      q: 'Dana is $6$ years older than her cousin Eli, and their ages add up to $34$. How old is ELI?',
      choices: ['$20$', '$14$', '$17$', '$28$'],
      answer: 1,
      solution:
        'Let $e$ be Eli\'s age; Dana is $e + 6$. Then $e + (e + 6) = 34$, so $2e = 28$ and $e = 14$. Check: Eli is $14$, Dana is $20$, and $14 + 20 = 34$. ✓ The choice $20$ is Dana\'s age, $17$ halves $34$ as if the cousins were the same age, and $28$ is $2e$ before the division.',
    },
    {
      q: 'Two shelves hold $58$ books in all. The top shelf holds $8$ more books than the bottom shelf. How many books are on the BOTTOM shelf?',
      choices: ['$33$', '$29$', '$25$', '$50$'],
      answer: 2,
      solution:
        'Let $b$ be the books on the bottom shelf; the top shelf has $b + 8$. Then $b + (b + 8) = 58$, so $2b = 50$ and $b = 25$. Check: bottom $25$, top $33$, and $25 + 33 = 58$ with a gap of $8$. ✓ Answering $33$ describes the top shelf, $29$ splits the books evenly, and $50$ skips the final division.',
    },
    {
      q: 'A ribbon $41$ cm long is cut into two pieces, one of them $5$ cm longer than the other. How long is the SHORTER piece?',
      choices: ['$23$', '$\\frac{41}{2}$', '$36$', '$18$'],
      answer: 3,
      solution:
        'Let $s$ be the shorter piece; the longer is $s + 5$. The two pieces make the whole ribbon: $s + (s + 5) = 41$, so $2s = 36$ and $s = 18$ cm. Check: $18 + 23 = 41$, and $23$ is indeed $5$ cm longer. ✓ The choice $23$ is the longer piece, $\\frac{41}{2}$ cuts the ribbon in half instead, and $36$ is $2s$ before dividing.',
    },
  ],
  // p7 — a per-item price plus (or minus) a single charge for the whole order
  [
    {
      q: 'A skating rink charges $\\$5$ an hour, plus a flat $\\$10$ fee to rent skates for the visit. Dev paid $\\$60$ in all. For how many hours did he skate?',
      choices: ['$10$', '$12$', '$14$', '$50$'],
      answer: 0,
      solution:
        'Let $h$ be the hours: $5h + 10 = 60$. The rental is charged once, so take it off first: $5h = 50$, and dividing by $5$ gives $h = 10$. Check: $5 \\times 10 + 10 = 60$. ✓ Ignoring the fee gives $60 \\div 5 = 12$, adding the fee instead of subtracting gives $70 \\div 5 = 14$, and $50$ forgets to divide by the hourly price.',
    },
    {
      q: 'A pottery studio charges $\\$6$ for each bowl painted, plus a $\\$12$ studio fee for the visit. Nadia\'s family paid $\\$66$. How many bowls did they paint?',
      choices: ['$11$', '$9$', '$13$', '$54$'],
      answer: 1,
      solution:
        'Let $b$ be the bowls: $6b + 12 = 66$. Subtract the one-time fee: $6b = 54$, so $b = 9$. Check: $6 \\times 9 + 12 = 54 + 12 = 66$. ✓ Forgetting the fee gives $66 \\div 6 = 11$, adding it gives $78 \\div 6 = 13$, and $54$ is the cost of the bowls rather than their number.',
    },
    {
      q: 'Tara buys plants at $\\$4$ each and uses a coupon that takes $\\$8$ off the whole order. She pays $\\$52$. How many plants did she buy?',
      choices: ['$13$', '$11$', '$15$', '$60$'],
      answer: 2,
      solution:
        'The coupon is subtracted once, so the equation is $4p - 8 = 52$. Undo the coupon by ADDING $8$: $4p = 60$, so $p = 15$. Check: $4 \\times 15 = 60$, less the $\\$8$ coupon, is $\\$52$. ✓ Ignoring the coupon gives $52 \\div 4 = 13$, subtracting instead of adding gives $44 \\div 4 = 11$, and $60$ is the price before the coupon, not a count.',
    },
  ],
  // p8 — three consecutive integers
  [
    {
      q: 'Three consecutive integers add up to $72$. What is the SMALLEST of them?',
      choices: ['$23$', '$24$', '$25$', '$69$'],
      answer: 0,
      solution:
        'Let the smallest be $n$: $n + (n + 1) + (n + 2) = 72$, so $3n + 3 = 72$, giving $3n = 69$ and $n = 23$. The integers are $23$, $24$, $25$. Check: $23 + 24 + 25 = 72$. ✓ The choice $24$ is $72 \\div 3$, which lands on the MIDDLE integer, $25$ is the largest, and $69$ is $3n$ before dividing.',
    },
    {
      q: 'Three consecutive integers add up to $93$. What is the LARGEST of them?',
      choices: ['$30$', '$31$', '$32$', '$90$'],
      answer: 2,
      solution:
        'With the smallest called $n$, the sum is $3n + 3 = 93$, so $3n = 90$ and $n = 30$. The integers are $30$, $31$, $32$, and the largest is $32$. Check: $30 + 31 + 32 = 93$. ✓ Answering $30$ stops at the variable, $31$ is $93 \\div 3$ — the middle integer — and $90$ is $3n$.',
    },
    {
      q: 'Three consecutive integers add up to $57$. What is the sum of the smallest and the largest?',
      choices: ['$19$', '$39$', '$57$', '$38$'],
      answer: 3,
      solution:
        'Let the smallest be $n$: $3n + 3 = 57$, so $3n = 54$ and $n = 18$. The integers are $18$, $19$, $20$, and the question wants $18 + 20 = 38$. Check: $18 + 19 + 20 = 57$. ✓ The choice $19$ is only the middle integer, $39$ adds the wrong pair ($19 + 20$), and $57$ adds all three.',
    },
  ],
  // p9 — one quantity a multiple of the other
  [
    {
      q: 'A pet shop has three times as many goldfish as guppies. Altogether there are $48$ fish. How many GOLDFISH are there?',
      choices: ['$36$', '$12$', '$24$', '$16$'],
      answer: 0,
      solution:
        'Let $g$ be the guppies; the goldfish number $3g$. Together: $g + 3g = 48$, so $4g = 48$ and $g = 12$. The goldfish number $3 \\times 12 = 36$. Check: $12 + 36 = 48$. ✓ The choice $12$ is the guppy count, $24$ splits the fish evenly between the two kinds, and $16$ is $48 \\div 3$ — three shares instead of the four the story needs.',
    },
    {
      q: 'Yuki read twice as many pages as Sam. Together they read $54$ pages. How many pages did SAM read?',
      choices: ['$36$', '$18$', '$27$', '$26$'],
      answer: 1,
      solution:
        'Let $s$ be Sam\'s pages; Yuki read $2s$. Then $s + 2s = 54$, so $3s = 54$ and $s = 18$. Check: Sam $18$, Yuki $36$, and $18 + 36 = 54$. ✓ The choice $36$ is Yuki\'s total, $27$ splits the pages evenly, and $26$ comes from reading "twice as many" as "$2$ more than", which would give $s + (s + 2) = 54$.',
    },
    {
      q: 'A jar holds red and blue beads, with four times as many blue beads as red ones, and $60$ beads in all. How many BLUE beads are in the jar?',
      choices: ['$12$', '$15$', '$48$', '$32$'],
      answer: 2,
      solution:
        'Let $r$ be the red beads; the blue ones number $4r$. Then $r + 4r = 60$, so $5r = 60$ and $r = 12$. The blue beads number $4 \\times 12 = 48$. Check: $12 + 48 = 60$. ✓ The choice $12$ is the red count, $15$ is $60 \\div 4$ — but the beads fall into $5$ equal shares, not $4$ — and $32$ comes from misreading "four times as many" as "four more than".',
    },
  ],
  // p10 — the unknown appears on both sides
  [
    {
      q: 'A number multiplied by $5$, then decreased by $12$, gives the same result as the number increased by $8$. What is the number?',
      choices: ['$-1$', '$5$', '$\\frac{10}{3}$', '$20$'],
      answer: 1,
      solution:
        'Translate each half: $5n - 12 = n + 8$. Subtract $n$ from both sides: $4n - 12 = 8$. Add $12$: $4n = 20$, so $n = 5$. Check: $5 \\times 5 - 12 = 13$ and $5 + 8 = 13$. ✓ Subtracting the $12$ again gives $4n = -4$ and $n = -1$; ADDING the $n$ instead of subtracting gives $6n = 20$ and $n = \\frac{10}{3}$; $20$ stops one step early.',
    },
    {
      q: 'Four times a number, decreased by $3$, equals twice the number increased by $11$. What is the number?',
      choices: ['$\\frac{7}{3}$', '$4$', '$7$', '$14$'],
      answer: 2,
      solution:
        'The sentence becomes $4n - 3 = 2n + 11$. Subtract $2n$: $2n - 3 = 11$. Add $3$: $2n = 14$, so $n = 7$. Check: $4 \\times 7 - 3 = 25$ and $2 \\times 7 + 11 = 25$. ✓ Adding the $2n$ instead of subtracting gives $6n = 14$ and $\\frac{7}{3}$; subtracting the $11$ gives $2n = 8$ and $4$; $14$ forgets the last division.',
    },
    {
      q: 'Two candles are lit at the same moment. One starts $24$ cm tall and burns down $3$ cm each hour; the other starts $16$ cm tall and burns down $1$ cm each hour. After how many hours are the two candles the same height?',
      choices: ['$2$', '$8$', '$12$', '$4$'],
      answer: 3,
      solution:
        'Let $h$ be the hours. The heights are $24 - 3h$ and $16 - h$, and we want them equal: $24 - 3h = 16 - h$. Add $3h$ to both sides: $24 = 16 + 2h$, so $2h = 8$ and $h = 4$. Check: $24 - 12 = 12$ and $16 - 4 = 12$ — both candles are $12$ cm tall. ✓ Subtracting $h$ instead of adding $3h$ gives $4h = 8$ and the wrong answer $2$; $8$ is the value of $2h$; and $12$ is the shared HEIGHT, not the time.',
    },
  ],
]

const s55 = [
  // p1 — add or subtract a number; the sign never moves
  [
    {
      q: 'Solve $x + 7 > 12$.',
      choices: ['$x > 5$', '$x > 19$', '$x < 5$', '$x \\ge 5$'],
      answer: 0,
      solution:
        'Subtract $7$ from both sides: $x > 5$. Subtracting never flips the sign. Check $x = 6$: $6 + 7 = 13 > 12$. ✓ And the boundary fails, since $5 + 7 = 12$ is not GREATER than $12$ — so $x \\ge 5$ sweeps in one number too many. Adding the $7$ instead would give $x > 19$, but $x = 6$ already works.',
    },
    {
      q: 'Solve $x + 11 \\ge 20$.',
      choices: ['$x \\ge 31$', '$x > 9$', '$x \\ge 9$', '$x \\le 9$'],
      answer: 2,
      solution:
        'Subtract $11$ from both sides: $x \\ge 9$. The "or equal" survives, and $x = 9$ really is a solution: $9 + 11 = 20 \\ge 20$. ✓ That is why $x > 9$ is wrong — it throws away the boundary. Adding $11$ gives $x \\ge 31$, and flipping to $x \\le 9$ fails at $x = 0$, since $0 + 11 = 11$ is not at least $20$.',
    },
    {
      q: 'Solve $x - 5 > 8$.',
      choices: ['$x > 3$', '$x < 13$', '$x \\ge 13$', '$x > 13$'],
      answer: 3,
      solution:
        'Add $5$ to both sides: $x > 13$. Check $x = 14$: $14 - 5 = 9 > 8$. ✓ The boundary $13$ fails, since $13 - 5 = 8$ is not greater than $8$, so $x \\ge 13$ is one number too generous. Subtracting the $5$ gives $x > 3$, but $x = 4$ makes the left side $-1$.',
    },
  ],
  // p2 — the same skill with "or equal" signs
  [
    {
      q: 'Solve $x - 8 \\le 6$.',
      choices: ['$x \\le -2$', '$x \\le 14$', '$x \\ge 14$', '$x < 14$'],
      answer: 1,
      solution:
        'Add $8$ to both sides: $x \\le 14$. Adding keeps the sign pointing the same way and keeps the "or equal": $x = 14$ works, since $14 - 8 = 6 \\le 6$. ✓ So $x < 14$ is one number short. Subtracting the $8$ gives $x \\le -2$, and $x \\ge 14$ fails at $x = 20$, because $20 - 8 = 12$ is not at most $6$.',
    },
    {
      q: 'Solve $x + 6 \\le 19$.',
      choices: ['$x \\le 25$', '$x \\ge 13$', '$x \\le 13$', '$x < 13$'],
      answer: 2,
      solution:
        'Subtract $6$ from both sides: $x \\le 13$. Test the boundary: $13 + 6 = 19 \\le 19$. ✓ It is included, so $x < 13$ leaves out a real solution. Adding the $6$ gives $x \\le 25$, but $x = 20$ makes the left side $26$; and $x \\ge 13$ has the direction backwards.',
    },
    {
      q: 'Solve $x - 12 \\ge -5$.',
      choices: ['$x \\ge -17$', '$x \\le 7$', '$x > 7$', '$x \\ge 7$'],
      answer: 3,
      solution:
        'Add $12$ to both sides: $x \\ge -5 + 12 = 7$. Check the boundary: $7 - 12 = -5 \\ge -5$. ✓ It counts, so $x > 7$ is too strict. Subtracting $12$ gives $x \\ge -17$, but $x = 0$ makes the left side $-12$, which is not at least $-5$. A negative on the right does not make the answer negative.',
    },
  ],
  // p3 — multiply or divide by a POSITIVE number: no flip
  [
    {
      q: 'Solve $6x < 48$.',
      choices: ['$x < 8$', '$x < 42$', '$x > 8$', '$x < 54$'],
      answer: 0,
      solution:
        'Divide both sides by $6$: $x < 8$. We divided by a POSITIVE number, so the sign stays put. Check $x = 5$: $6 \\times 5 = 30 < 48$. ✓ Flipping to $x > 8$ is the classic over-application of the negative rule — and $x = 10$ gives $60$, which is not less than $48$. Subtracting or adding the $6$ gives $x < 42$ and $x < 54$.',
    },
    {
      q: 'Solve $9x \\ge 54$.',
      choices: ['$x \\ge 45$', '$x \\ge 6$', '$x \\le 6$', '$x > 6$'],
      answer: 1,
      solution:
        'Divide both sides by $9$: $x \\ge 6$. Dividing by a positive number leaves the sign alone, and the boundary is included: $9 \\times 6 = 54 \\ge 54$. ✓ So $x > 6$ drops a solution. Subtracting $9$ gives $x \\ge 45$, and $x \\le 6$ fails at $x = 0$.',
    },
    {
      q: 'Solve $\\frac{x}{3} > 5$.',
      choices: ['$x > \\frac{5}{3}$', '$x < 15$', '$x > 15$', '$x > 8$'],
      answer: 2,
      solution:
        'The $x$ was divided by $3$, so multiply both sides by $3$: $x > 15$. Multiplying by a positive number does not flip anything. Check $x = 18$: $18 \\div 3 = 6 > 5$. ✓ Dividing by $3$ instead gives $x > \\frac{5}{3}$, but $x = 2$ makes the left side $\\frac{2}{3}$; adding $3$ gives $x > 8$, and $x = 9$ only reaches $3$.',
    },
  ],
  // p4 — testing candidate values against a solved inequality
  [
    {
      q: 'Which value of $x$ is a solution of $3x - 2 > 13$?',
      choices: ['$6$', '$5$', '$4$', '$0$'],
      answer: 0,
      solution:
        'Solve first: add $2$ to get $3x > 15$, then divide by $3$ to get $x > 5$. Only $6$ clears the bar: $3 \\times 6 - 2 = 16 > 13$. ✓ Watch $x = 5$ — it gives exactly $13$, and $13 > 13$ is false, so the boundary itself is not a solution. The values $4$ and $0$ give $10$ and $-2$.',
    },
    {
      q: 'Which value of $x$ is a solution of $4x + 3 \\ge 23$?',
      choices: ['$3$', '$5$', '$4$', '$0$'],
      answer: 1,
      solution:
        'Subtract $3$: $4x \\ge 20$, so $x \\ge 5$. Here the boundary DOES count, because the sign says "or equal": $4 \\times 5 + 3 = 23 \\ge 23$. ✓ The value $4$ falls just short at $19$, and $3$ and $0$ give $15$ and $3$.',
    },
    {
      q: 'Which value of $x$ is NOT a solution of $5x - 4 < 11$?',
      choices: ['$0$', '$2$', '$-1$', '$3$'],
      answer: 3,
      solution:
        'Add $4$: $5x < 15$, so $x < 3$. The question asks for the value that FAILS, and $3$ is exactly the boundary: $5 \\times 3 - 4 = 11$, which is not less than $11$. ✓ The other three all work: $0$, $2$, and $-1$ give $-4$, $6$, and $-9$, every one of them below $11$.',
    },
  ],
  // p5 — dividing by a negative coefficient
  [
    {
      q: 'Solve $-3x < 18$.',
      choices: ['$x < -6$', '$x > -6$', '$x > 6$', '$x < 6$'],
      answer: 1,
      solution:
        'Divide both sides by $-3$ and FLIP the sign: $x > -6$. Check $x = 0$: $-3 \\times 0 = 0 < 18$. ✓ Skipping the flip gives $x < -6$, but $x = -7$ makes the left side $21$, which is not less than $18$. And the boundary $x = -6$ gives exactly $18$, so it is correctly left out.',
    },
    {
      q: 'Solve $-5x > 20$.',
      choices: ['$x > -4$', '$x < 4$', '$x < -4$', '$x > 4$'],
      answer: 2,
      solution:
        'Divide by $-5$ and flip: $x < -4$. Check $x = -5$: $-5 \\times (-5) = 25 > 20$. ✓ Without the flip you would write $x > -4$, but $x = 0$ gives $0$, which is not greater than $20$. The boundary $x = -4$ gives exactly $20$ and is properly excluded, and losing the minus sign gives the wrong side of zero entirely.',
    },
    {
      q: 'Solve $-4x \\ge -24$.',
      choices: ['$x \\ge 6$', '$x \\le -6$', '$x \\ge -6$', '$x \\le 6$'],
      answer: 3,
      solution:
        'Divide both sides by $-4$ and flip: $x \\le 6$. Two negatives make the right side positive: $-24 \\div -4 = 6$. Check $x = 0$: $0 \\ge -24$. ✓ And the boundary works: $-4 \\times 6 = -24 \\ge -24$. ✓ Forgetting the flip gives $x \\ge 6$, but $x = 10$ makes the left side $-40$, far below $-24$.',
    },
  ],
  // p6 — multiplying by -1
  [
    {
      q: 'Solve $-x > 9$.',
      choices: ['$x < -9$', '$x > -9$', '$x < 9$', '$x > 9$'],
      answer: 0,
      solution:
        'Multiply both sides by $-1$ and FLIP: $x < -9$. Check $x = -10$: $-(-10) = 10 > 9$. ✓ Without the flip you get $x > -9$, but $x = 0$ gives $0$, which is not greater than $9$. It makes sense — if the opposite of $x$ is big and positive, $x$ itself must sit far below zero.',
    },
    {
      q: 'Solve $-x \\le 7$.',
      choices: ['$x \\le -7$', '$x \\ge 7$', '$x \\ge -7$', '$x \\le 7$'],
      answer: 2,
      solution:
        'Multiply both sides by $-1$ and flip: $x \\ge -7$. The boundary is included: $-(-7) = 7 \\le 7$. ✓ Check a value inside, $x = 0$: $-0 = 0 \\le 7$. ✓ Forgetting the flip gives $x \\le -7$, but $x = -20$ makes the left side $20$, which is not at most $7$.',
    },
    {
      q: 'Solve $-x < -6$.',
      choices: ['$x < 6$', '$x > -6$', '$x < -6$', '$x > 6$'],
      answer: 3,
      solution:
        'Multiply both sides by $-1$ and flip the sign: $x > 6$. Check $x = 7$: $-7 < -6$. ✓ Multiplying without flipping gives $x < 6$, yet $x = 0$ makes the left side $0$, which is not less than $-6$. The boundary $x = 6$ gives $-6$, and $-6 < -6$ is false, so it stays out.',
    },
  ],
  // p7 — two-step inequalities with a positive coefficient
  [
    {
      q: 'Solve $5x - 3 \\le 22$.',
      choices: ['$x \\le 5$', '$x \\le \\frac{19}{5}$', '$x \\ge 5$', '$x < 5$'],
      answer: 0,
      solution:
        'Add $3$ to both sides: $5x \\le 25$. Divide by $5$ — a positive number, so no flip: $x \\le 5$. The boundary counts: $5 \\times 5 - 3 = 22 \\le 22$. ✓ That rules out $x < 5$. Subtracting the $3$ instead gives $5x \\le 19$ and $x \\le \\frac{19}{5}$, and $x \\ge 5$ fails at $x = 10$.',
    },
    {
      q: 'Solve $7x + 4 < 39$.',
      choices: ['$x < \\frac{43}{7}$', '$x < 5$', '$x > 5$', '$x \\le 5$'],
      answer: 1,
      solution:
        'Subtract $4$: $7x < 35$. Divide by $7$: $x < 5$. Check $x = 4$: $7 \\times 4 + 4 = 32 < 39$. ✓ The boundary fails, since $7 \\times 5 + 4 = 39$ is not less than $39$ — so $x \\le 5$ includes one number too many. Adding the $4$ gives $7x < 43$ and $x < \\frac{43}{7}$.',
    },
    {
      q: 'Solve $2x - 7 \\ge 9$.',
      choices: ['$x \\ge 1$', '$x \\le 8$', '$x > 8$', '$x \\ge 8$'],
      answer: 3,
      solution:
        'Add $7$ to both sides: $2x \\ge 16$. Divide by $2$: $x \\ge 8$. The boundary is a solution: $2 \\times 8 - 7 = 9 \\ge 9$. ✓ So $x > 8$ is too strict. Subtracting the $7$ gives $2x \\ge 2$ and $x \\ge 1$, but $x = 1$ makes the left side $-5$; and $x \\le 8$ points the wrong way.',
    },
  ],
  // p8 — describing the solution set in words
  [
    {
      q: 'Which sentence describes all solutions of $4x + 5 \\le 29$?',
      choices: [
        'All numbers less than or equal to $6$',
        'All numbers less than $6$',
        'All numbers greater than or equal to $6$',
        'All numbers less than or equal to $\\frac{17}{2}$',
      ],
      answer: 0,
      solution:
        'Subtract $5$: $4x \\le 24$. Divide by $4$: $x \\le 6$. The number $6$ itself belongs, since $4 \\times 6 + 5 = 29 \\le 29$ ✓ — so "less than $6$" leaves out a real solution. Adding the $5$ by mistake gives $4x \\le 34$ and the endpoint $\\frac{17}{2}$, and the "greater than" version fails at $x = 10$.',
    },
    {
      q: 'Which sentence describes all solutions of $2x - 9 > 5$?',
      choices: [
        'All numbers greater than $-2$',
        'All numbers greater than $7$',
        'All numbers greater than or equal to $7$',
        'All numbers less than $7$',
      ],
      answer: 1,
      solution:
        'Add $9$ to both sides: $2x > 14$. Divide by $2$: $x > 7$. Check $x = 8$: $2 \\times 8 - 9 = 7 > 5$. ✓ The endpoint is excluded, because $2 \\times 7 - 9 = 5$ is not greater than $5$ — so the "or equal to" version is wrong. Subtracting the $9$ gives $2x > -4$ and the endpoint $-2$, but $x = 0$ makes the left side $-9$.',
    },
    {
      q: 'Which sentence describes all solutions of $-3x \\ge 12$?',
      choices: [
        'All numbers greater than or equal to $-4$',
        'All numbers less than or equal to $4$',
        'All numbers less than or equal to $-4$',
        'All numbers greater than or equal to $4$',
      ],
      answer: 2,
      solution:
        'Divide both sides by $-3$ and FLIP the sign: $x \\le -4$. Check $x = -5$: $-3 \\times (-5) = 15 \\ge 12$. ✓ The boundary works too: $-3 \\times (-4) = 12 \\ge 12$. ✓ Forgetting the flip gives "greater than or equal to $-4$", but $x = 0$ makes the left side $0$; and dropping the minus sign puts the answer on the wrong side of zero, where $x = 4$ gives $-12$.',
    },
  ],
  // p9 — counting the integers in a range
  [
    {
      q: 'How many integers $x$ satisfy $-4 \\le x < 3$?',
      choices: ['$7$', '$8$', '$6$', '$3$'],
      answer: 0,
      solution:
        'Read the endpoints carefully: $-4$ is included ($\\le$) but $3$ is not (strict $<$). List them: $-4, -3, -2, -1, 0, 1, 2$ — that is $7$ integers. Counting $3$ as well gives $8$, dropping $0$ (or the $-4$) gives $6$, and listing only $0, 1, 2$ gives $3$ — but negative whole numbers are integers too.',
    },
    {
      q: 'How many integers $x$ satisfy $-1 < x < 6$?',
      choices: ['$8$', '$5$', '$6$', '$7$'],
      answer: 2,
      solution:
        'Both signs are strict, so BOTH endpoints are shut out. The list is $0, 1, 2, 3, 4, 5$ — that is $6$ integers. Letting one endpoint in gives $7$, letting both $-1$ and $6$ in gives $8$, and forgetting that $0$ is an integer gives $5$.',
    },
    {
      q: 'How many integers $x$ satisfy $-3 \\le x \\le 4$?',
      choices: ['$7$', '$6$', '$4$', '$8$'],
      answer: 3,
      solution:
        'Both endpoints are included here. List them: $-3, -2, -1, 0, 1, 2, 3, 4$ — that is $8$ integers. Simply subtracting the endpoints, $4 - (-3) = 7$, forgets to add one for a doubly closed range; treating both ends as strict gives $6$; and counting only $1, 2, 3, 4$ gives $4$.',
    },
  ],
  // p10 — a negative variable term buried inside a two-step inequality
  [
    {
      q: 'Solve $9 - 4x \\le 1$.',
      choices: ['$x \\ge 2$', '$x \\le 2$', '$x \\ge -2$', '$x > 2$'],
      answer: 0,
      solution:
        'Subtract $9$ from both sides: $-4x \\le -8$. Now divide by $-4$ and FLIP the sign: $x \\ge 2$. Check $x = 3$: $9 - 12 = -3 \\le 1$. ✓ The boundary counts: $9 - 8 = 1 \\le 1$ ✓, so $x > 2$ is too strict. Forgetting the flip gives $x \\le 2$, but $x = 0$ makes the left side $9$; and $-8 \\div -4$ is $+2$, not $-2$.',
    },
    {
      q: 'Solve $5 - 3x > 14$.',
      choices: ['$x > -3$', '$x < -3$', '$x < 3$', '$x > 3$'],
      answer: 1,
      solution:
        'Subtract $5$: $-3x > 9$. Divide by $-3$ and FLIP: $x < -3$. Check $x = -4$: $5 + 12 = 17 > 14$. ✓ The boundary gives exactly $14$, so it stays out. Skipping the flip gives $x > -3$, but $x = 0$ makes the left side $5$; and losing the minus sign lands you at $x < 3$, where $x = 0$ fails again.',
    },
    {
      q: 'Solve $14 - 5x \\ge -6$.',
      choices: ['$x \\ge 4$', '$x \\le -4$', '$x < 4$', '$x \\le 4$'],
      answer: 3,
      solution:
        'Subtract $14$ from both sides: $-5x \\ge -20$. Divide by $-5$ and FLIP the sign: $x \\le 4$. Check $x = 0$: $14 \\ge -6$. ✓ The boundary is a solution: $14 - 20 = -6 \\ge -6$ ✓, so $x < 4$ drops it. Forgetting the flip gives $x \\ge 4$, but $x = 10$ makes the left side $-36$; and $-20 \\div -5$ is $+4$, so $x \\le -4$ has the sign wrong.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 5,
  sections: {
    '5.4': s54,
    '5.5': s55,
  },
}
