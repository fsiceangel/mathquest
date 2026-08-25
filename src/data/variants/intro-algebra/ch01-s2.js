// Introduction to Algebra chapter 1 — variations for sections 1.4-1.6.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every equation answer was verified by substituting it back into the
//    original equation, and the substitution is shown in the solution.
//  - Every distributed negative was checked twice: once by evaluating inside
//    the parentheses first, once term by term after the flip.
//  - Every factoring answer was checked by expanding the factored form back out.
//  - Every exponent value is an exact integer (or an exact fraction); nothing
//    is rounded, and no choice repeats another choice's VALUE.
//  - Numbers were chosen so the named wrong method never lands on the correct
//    answer: e.g. no power like $2^2$ where adding and multiplying exponents
//    would agree, and no equation where the wrong inverse gives the same value.

const s14 = [
  // p1 — distribute over a sum
  [
    {
      q: 'Use distribution to compute $7(20 + 3)$.',
      choices: ['$161$', '$143$', '$41$', '$140$'],
      answer: 0,
      solution:
        'Distribution reaches EVERY term inside: $7(20 + 3) = 7 \\cdot 20 + 7 \\cdot 3 = 140 + 21 = 161$. Check by adding first: $20 + 3 = 23$, and $7 \\cdot 23 = 161$. ✓ The choice $143$ multiplies only the $20$ and then drops the $3$ in untouched. The choice $41$ makes the opposite mistake, $20 + 7 \\cdot 3$. The choice $140$ is just $7 \\cdot 20$, with the second term forgotten entirely.',
    },
    {
      q: 'Use distribution to compute $8(30 + 4)$.',
      choices: ['$244$', '$62$', '$272$', '$240$'],
      answer: 2,
      solution:
        'Multiply the $8$ into both terms: $8 \\cdot 30 + 8 \\cdot 4 = 240 + 32 = 272$. Check by adding first: $30 + 4 = 34$, and $8 \\cdot 34 = 272$. ✓ The choice $244$ multiplies only the $30$, giving $240 + 4$. The choice $62$ multiplies only the $4$, giving $30 + 32$. The choice $240$ stops after $8 \\cdot 30$.',
    },
    {
      q: 'A club fills $5$ identical gift bags. Each bag gets $40$ stickers and $7$ pencils. How many items go into the bags altogether?',
      choices: ['$207$', '$235$', '$75$', '$200$'],
      answer: 1,
      solution:
        'Each bag holds $40 + 7 = 47$ items, so five bags hold $5 \\cdot 47 = 235$ items. Distribution says the same thing: $5(40 + 7) = 5 \\cdot 40 + 5 \\cdot 7 = 200 + 35 = 235$. ✓ The choice $207$ multiplies only the stickers and then adds a single bag\'s $7$ pencils. The choice $75$ multiplies only the pencils. The choice $200$ counts the stickers alone and forgets the pencils.',
    },
  ],
  // p2 — multiply by a number just above a round one
  [
    {
      q: 'Compute $7 \\times 103$.',
      choices: ['$703$', '$721$', '$700$', '$110$'],
      answer: 1,
      solution:
        'Split the $103$: $7 \\times 103 = 7(100 + 3) = 700 + 21 = 721$. The choice $703$ multiplies the $100$ but forgets to multiply the $3$, writing $700 + 3$. The choice $700$ drops the extra $3$ altogether. The choice $110$ adds $7 + 103$ instead of multiplying.',
    },
    {
      q: 'Compute $12 \\times 101$.',
      choices: ['$1201$', '$1200$', '$113$', '$1212$'],
      answer: 3,
      solution:
        'Write $101 = 100 + 1$ and distribute: $12 \\times 100 + 12 \\times 1 = 1200 + 12 = 1212$. The choice $1201$ multiplies the $100$ and then just tacks on the leftover $1$ without multiplying it. The choice $1200$ ignores the $+1$ entirely. The choice $113$ is $12 + 101$ — an addition, not a product.',
    },
    {
      q: 'Compute $8 \\times 104$.',
      choices: ['$804$', '$800$', '$832$', '$112$'],
      answer: 2,
      solution:
        'Break $104$ into $100 + 4$: $8 \\times 100 + 8 \\times 4 = 800 + 32 = 832$. The choice $804$ multiplies only the $100$ and appends the untouched $4$. The choice $800$ forgets the $+4$. The choice $112$ adds $8 + 104$ instead of multiplying.',
    },
  ],
  // p3 — distributing a negative
  [
    {
      q: 'Simplify $-(12 - 5)$.',
      choices: ['$-7$', '$7$', '$-17$', '$17$'],
      answer: 0,
      solution:
        'The minus sign multiplies every term inside by $-1$, so both signs flip: $-(12 - 5) = -12 + 5 = -7$. Check the other way: inside first, $12 - 5 = 7$, and the opposite of $7$ is $-7$. ✓ The choice $-17$ writes $-12 - 5$, flipping the first term but leaving the second one alone — the single most common slip in this section. The choice $7$ forgets the outside minus sign, and $17$ makes both mistakes at once.',
    },
    {
      q: 'Simplify $-(7 - 11)$.',
      choices: ['$-4$', '$-18$', '$18$', '$4$'],
      answer: 3,
      solution:
        'Flip every sign inside: $-(7 - 11) = -7 + 11 = 4$. Check by working inside first: $7 - 11 = -4$, and the opposite of $-4$ is $+4$. ✓ Notice the answer is POSITIVE — a minus sign out front does not force a negative result. The choice $-4$ is the value inside the parentheses, with the negation never applied. The choice $-18$ writes $-7 - 11$, forgetting to flip the second term, and $18$ is that same slip without the outer minus.',
    },
    {
      q: 'Simplify $-(12 - 5 + 4)$.',
      choices: ['$11$', '$-11$', '$-3$', '$-21$'],
      answer: 1,
      solution:
        'Every one of the three terms flips: $-(12 - 5 + 4) = -12 + 5 - 4 = -11$. Check by computing inside first: $12 - 5 + 4 = 11$, and the opposite of $11$ is $-11$. ✓ The choice $-3$ comes from $-12 + 5 + 4$, flipping the first two terms but leaving the $+4$ positive. The choice $-21$ is $-12 - 5 - 4$, which flips nothing after the first term. The choice $11$ skips the negation entirely.',
    },
  ],
  // p4 — factoring a common factor out of a sum
  [
    {
      q: 'Fill in the blank: $21 + 35 = 7 \\times \\square$.',
      choices: ['$8$', '$3$', '$5$', '$56$'],
      answer: 0,
      solution:
        'Pull the $7$ out of each term: $21 = 7 \\cdot 3$ and $35 = 7 \\cdot 5$, so $21 + 35 = 7(3 + 5) = 7 \\times 8$. Expand to check: $7 \\times 8 = 56$, and $21 + 35 = 56$. ✓ The choice $3$ stops after factoring the first term, and $5$ after the second — the blank needs their SUM. The choice $56$ is the total itself, which would need to be divided by $7$ first.',
    },
    {
      q: 'Fill in the blank: $40 + 64 = 8 \\times \\square$.',
      choices: ['$5$', '$8$', '$13$', '$104$'],
      answer: 2,
      solution:
        'Factor $8$ out of both terms: $40 = 8 \\cdot 5$ and $64 = 8 \\cdot 8$, so $40 + 64 = 8(5 + 8) = 8 \\times 13$. Expand to check: $8 \\times 13 = 104$, and $40 + 64 = 104$. ✓ The choices $5$ and $8$ each report only one of the two pieces. The choice $104$ is the sum before any factor comes out.',
    },
    {
      q: 'Fill in the blank: $45 - 27 = 9 \\times \\square$.',
      choices: ['$8$', '$18$', '$5$', '$2$'],
      answer: 3,
      solution:
        'Factoring works over a difference too: $45 = 9 \\cdot 5$ and $27 = 9 \\cdot 3$, so $45 - 27 = 9(5 - 3) = 9 \\times 2$. Expand to check: $9 \\times 2 = 18$, and $45 - 27 = 18$. ✓ The choice $8$ adds the two pieces, $5 + 3$, when the problem subtracts them. The choice $18$ is the difference itself, not yet divided by $9$. The choice $5$ stops after factoring the $45$.',
    },
  ],
  // p5 — a two-digit number times 101 or 102
  [
    {
      q: 'Compute $47 \\cdot 101$.',
      choices: ['$4700$', '$4701$', '$5170$', '$4747$'],
      answer: 3,
      solution:
        'Write $101 = 100 + 1$ and distribute: $47 \\cdot 100 + 47 \\cdot 1 = 4700 + 47 = 4747$. (Multiplying a two-digit number by $101$ always just repeats its digits!) The choice $4700$ stops after $47 \\cdot 100$. The choice $4701$ multiplies only the $100$ and then adds a bare $1$. The choice $5170$ is $47 \\cdot 110$ — reading $101$ as $110$.',
    },
    {
      q: 'Compute $62 \\cdot 101$.',
      choices: ['$6200$', '$6262$', '$6201$', '$6820$'],
      answer: 1,
      solution:
        'Split $101$ into $100 + 1$: $62 \\cdot 100 + 62 \\cdot 1 = 6200 + 62 = 6262$. The choice $6200$ forgets the second product. The choice $6201$ adds a bare $1$ instead of another $62$. The choice $6820$ is $62 \\cdot 110$, which comes from misreading the middle digit.',
    },
    {
      q: 'Compute $29 \\cdot 102$.',
      choices: ['$2958$', '$2902$', '$2900$', '$3190$'],
      answer: 0,
      solution:
        'Write $102 = 100 + 2$: $29 \\cdot 100 + 29 \\cdot 2 = 2900 + 58 = 2958$. The choice $2902$ multiplies only the $100$ and then adds a bare $2$ — but the $2$ has to be multiplied by $29$ as well. The choice $2900$ drops the second term, and $3190$ is $29 \\cdot 110$.',
    },
  ],
  // p6 — factoring out a common factor from two products
  [
    {
      q: 'Compute $56 \\cdot 38 - 56 \\cdot 28$.',
      choices: ['$3696$', '$560$', '$66$', '$10$'],
      answer: 1,
      solution:
        'Both products share the factor $56$, so pull it out: $56(38 - 28) = 56 \\cdot 10 = 560$. Neither big product ever has to be computed. The choice $3696$ is $56(38 + 28)$, adding inside the parentheses when the problem subtracts. The choice $66$ is $56 + 10$, adding the common factor instead of multiplying by it. The choice $10$ stops at $38 - 28$ and forgets the $56$ entirely.',
    },
    {
      q: 'Compute $73 \\cdot 45 - 73 \\cdot 35$.',
      choices: ['$5840$', '$83$', '$10$', '$730$'],
      answer: 3,
      solution:
        'Factor out the shared $73$: $73(45 - 35) = 73 \\cdot 10 = 730$. The choice $5840$ is $73(45 + 35) = 73 \\cdot 80$, adding inside instead of subtracting. The choice $83$ adds the common factor, $73 + 10$, rather than multiplying by it. The choice $10$ is only the contents of the parentheses.',
    },
    {
      q: 'Compute $19 \\cdot 64 + 19 \\cdot 36$.',
      choices: ['$532$', '$119$', '$1900$', '$100$'],
      answer: 2,
      solution:
        'Factoring works just as well over a sum, and here it is beautiful: $19(64 + 36) = 19 \\cdot 100 = 1900$. Always glance inside for a friendly total like $100$ before grinding out either product. The choice $532$ is $19(64 - 36)$, subtracting when the problem adds. The choice $119$ is $19 + 100$, adding the common factor instead of multiplying. The choice $100$ is just the sum inside the parentheses.',
    },
  ],
  // p7 — multiply by a number just below a round one
  [
    {
      q: 'Compute $997 \\times 6$.',
      choices: ['$5997$', '$6018$', '$5982$', '$6000$'],
      answer: 2,
      solution:
        'Write $997 = 1000 - 3$ and distribute: $6 \\times 1000 - 6 \\times 3 = 6000 - 18 = 5982$. The choice $5997$ subtracts a bare $3$ instead of $6 \\times 3$. The choice $6018$ adds the correction when the $-3$ says to subtract it. The choice $6000$ drops the correction altogether.',
    },
    {
      q: 'Compute $8 \\times 996$.',
      choices: ['$7968$', '$7996$', '$8032$', '$8000$'],
      answer: 0,
      solution:
        'Since $996 = 1000 - 4$, we get $8 \\times 1000 - 8 \\times 4 = 8000 - 32 = 7968$. The choice $7996$ subtracts a bare $4$ rather than $8 \\times 4$. The choice $8032$ adds $32$ instead of subtracting it — but $996$ is BELOW $1000$, so the answer must land below $8000$. The choice $8000$ forgets the correction.',
    },
    {
      q: 'A stadium sells all $995$ seats for each of $9$ shows. How many tickets is that in total?',
      choices: ['$8995$', '$8955$', '$9045$', '$9000$'],
      answer: 1,
      solution:
        'Think of each show as $1000 - 5$ seats: $9 \\times 995 = 9 \\times 1000 - 9 \\times 5 = 9000 - 45 = 8955$ tickets. The choice $8995$ takes away a single $5$ instead of $9$ fives. The choice $9045$ adds the $45$ instead of subtracting it, which would claim more than $1000$ seats per show. The choice $9000$ ignores the five missing seats per show.',
    },
  ],
  // p8 — multiply using a nearby multiple of ten
  [
    {
      q: 'Compute $35 \\times 19$.',
      choices: ['$700$', '$699$', '$735$', '$665$'],
      answer: 3,
      solution:
        'Write $19 = 20 - 1$: $35 \\times 20 - 35 \\times 1 = 700 - 35 = 665$. The choice $700$ is $35 \\times 20$ with the correction forgotten. The choice $699$ subtracts a bare $1$ rather than $35 \\times 1$. The choice $735$ adds the $35$ instead of subtracting it — but $19 < 20$, so the product must be less than $700$.',
    },
    {
      q: 'Compute $45 \\times 21$.',
      choices: ['$900$', '$901$', '$945$', '$855$'],
      answer: 2,
      solution:
        'This time the nearby round number is below: $21 = 20 + 1$, so $45 \\times 20 + 45 \\times 1 = 900 + 45 = 945$. The choice $900$ stops at $45 \\times 20$. The choice $901$ adds a bare $1$ instead of another $45$. The choice $855$ subtracts the $45$, but $21 > 20$, so the answer must exceed $900$.',
    },
    {
      q: 'Compute $50 \\times 18$.',
      choices: ['$900$', '$1000$', '$998$', '$1100$'],
      answer: 0,
      solution:
        'Write $18 = 20 - 2$: $50 \\times 20 - 50 \\times 2 = 1000 - 100 = 900$. The choice $1000$ is $50 \\times 20$ with the correction forgotten. The choice $998$ subtracts a bare $2$ instead of $50 \\times 2$. The choice $1100$ adds the $100$ rather than subtracting it.',
    },
  ],
  // p9 — spot the hidden common factor
  [
    {
      q: 'Compute $32 \\cdot 97 + 96$.',
      choices: ['$3200$', '$3104$', '$3296$', '$3168$'],
      answer: 0,
      solution:
        'The hidden step: $96 = 32 \\cdot 3$. Now both terms carry a factor of $32$, so $32 \\cdot 97 + 32 \\cdot 3 = 32(97 + 3) = 32 \\cdot 100 = 3200$. The choice $3104$ is $32 \\cdot 97$ with the $+96$ never added. The choice $3296$ rounds the product up to $32 \\cdot 100$ and then adds the $96$ on top, counting it twice. The choice $3168$ is $32 \\cdot 99$, which treats $96$ as $32 \\cdot 2$.',
    },
    {
      q: 'Compute $63 \\cdot 96 + 252$.',
      choices: ['$6048$', '$6300$', '$6552$', '$6237$'],
      answer: 1,
      solution:
        'Notice $252 = 63 \\cdot 4$. That turns the sum into $63 \\cdot 96 + 63 \\cdot 4 = 63(96 + 4) = 63 \\cdot 100 = 6300$. The choice $6048$ is $63 \\cdot 96$ alone. The choice $6552$ is $63 \\cdot 100 + 252$, which counts the $252$ a second time after it has already been folded in. The choice $6237$ is $63 \\cdot 99$, from reading $252$ as $63 \\cdot 3$.',
    },
    {
      q: 'Compute $28 \\cdot 104 - 112$.',
      choices: ['$2912$', '$3024$', '$2688$', '$2800$'],
      answer: 3,
      solution:
        'Here the hidden factor sits in a subtraction: $112 = 28 \\cdot 4$, so $28 \\cdot 104 - 28 \\cdot 4 = 28(104 - 4) = 28 \\cdot 100 = 2800$. The choice $2912$ is $28 \\cdot 104$ with the $-112$ never applied. The choice $3024$ adds the $112$ instead of subtracting it. The choice $2688$ is $28 \\cdot 96$, from reading $112$ as $28 \\cdot 8$.',
    },
  ],
  // p10 — a product of two numbers straddling a round one
  [
    {
      q: 'Compute $29 \\times 31$.',
      choices: ['$900$', '$899$', '$901$', '$871$'],
      answer: 1,
      solution:
        'The two factors straddle $30$, so write it as $(30 - 1)(30 + 1)$ and distribute twice: $30 \\cdot 30 + 30 \\cdot 1 - 1 \\cdot 30 - 1 \\cdot 1 = 900 + 30 - 30 - 1 = 899$. The middle terms cancel, leaving $30^2 - 1$. The choice $900$ is $30^2$ with the $-1$ forgotten. The choice $901$ adds the $1$ instead of subtracting it. The choice $871$ is $29 \\cdot 30 + 1$, which adds $1$ where another $29$ belongs.',
    },
    {
      q: 'Compute $48 \\times 52$.',
      choices: ['$2500$', '$2504$', '$2496$', '$2400$'],
      answer: 2,
      solution:
        'The factors straddle $50$: $(50 - 2)(50 + 2) = 50 \\cdot 50 + 50 \\cdot 2 - 2 \\cdot 50 - 2 \\cdot 2 = 2500 + 100 - 100 - 4 = 2496$. Again the middle terms cancel and only $50^2 - 2^2$ survives. The choice $2500$ is $50^2$ with the correction forgotten. The choice $2504$ adds the $4$ instead of subtracting it. The choice $2400$ is $48 \\cdot 50$, stopping one step early.',
    },
    {
      q: 'Compute $18 \\times 22$.',
      choices: ['$400$', '$404$', '$360$', '$396$'],
      answer: 3,
      solution:
        'Both factors sit $2$ away from $20$, so use $(20 - 2)(20 + 2) = 400 + 40 - 40 - 4 = 396$, which is $20^2 - 2^2$. The choice $400$ is $20^2$ with the $-4$ forgotten. The choice $404$ adds the $4$ instead of subtracting. The choice $360$ is $18 \\cdot 20$, one step short of the answer.',
    },
  ],
]

const s15 = [
  // p1 — one step: undo an addition
  [
    {
      q: 'Solve $x + 6 = 30$.',
      choices: ['$36$', '$24$', '$-24$', '$5$'],
      answer: 1,
      solution:
        'The $x$ has had $6$ added to it, so subtract $6$ from both sides: $x = 30 - 6 = 24$. Check: $24 + 6 = 30$. ✓ The choice $36$ adds the $6$ again instead of undoing it. The choice $-24$ subtracts backwards, $6 - 30$. The choice $5$ divides, $30 \\div 6$ — but the $6$ was ADDED to $x$, not multiplied by it, so division is the wrong inverse. (If the equation had been $6x = 30$, then $5$ would be right.)',
    },
    {
      q: 'Ben had a stack of cards. After a friend gave him $13$ more, he had $39$. How many cards did he start with?',
      choices: ['$52$', '$3$', '$26$', '$-26$'],
      answer: 2,
      solution:
        'Let $x$ be the starting number, so $x + 13 = 39$. Subtract $13$ from both sides: $x = 39 - 13 = 26$. Check: $26 + 13 = 39$. ✓ The choice $52$ adds the $13$ instead of taking it away, which would mean he had MORE before the gift. The choice $3$ divides, $39 \\div 13$, using the wrong inverse. The choice $-26$ subtracts in the wrong order, $13 - 39$.',
    },
    {
      q: 'Solve $x + 20 = 8$.',
      choices: ['$28$', '$12$', '$-28$', '$-12$'],
      answer: 3,
      solution:
        'Subtract $20$ from both sides: $x = 8 - 20 = -12$. Check: $-12 + 20 = 8$. ✓ Adding $20$ to something and landing BELOW $20$ means the starting value had to be negative, so a negative answer is exactly what to expect. The choice $28$ adds instead of subtracting. The choice $12$ subtracts in the wrong order, $20 - 8$, losing the sign. The choice $-28$ negates the sum, $-(8 + 20)$.',
    },
  ],
  // p2 — one step: undo a subtraction
  [
    {
      q: 'Solve $x - 8 = 15$.',
      choices: ['$23$', '$7$', '$-7$', '$120$'],
      answer: 0,
      solution:
        'The $x$ has had $8$ taken away, so add $8$ to both sides: $x = 15 + 8 = 23$. Check: $23 - 8 = 15$. ✓ The choice $7$ subtracts the $8$ again, repeating the operation instead of undoing it. The choice $-7$ subtracts backwards, $8 - 15$. The choice $120$ multiplies, $8 \\times 15$, which undoes a division rather than a subtraction.',
    },
    {
      q: 'Solve $x - 14 = 6$.',
      choices: ['$-8$', '$8$', '$84$', '$20$'],
      answer: 3,
      solution:
        'Add $14$ to both sides: $x = 6 + 14 = 20$. Check: $20 - 14 = 6$. ✓ The choice $-8$ subtracts the $14$ again, $6 - 14$. The choice $8$ is $14 - 6$, the same subtraction run backwards. The choice $84$ multiplies $14 \\times 6$, the wrong inverse entirely.',
    },
    {
      q: 'After paying $\\$18$ for a book, Rosa had $\\$25$ left. How much money did she have before she paid?',
      choices: ['$\\$7$', '$\\$43$', '$-\\$7$', '$\\$450$'],
      answer: 1,
      solution:
        'If $x$ is what she started with, then $x - 18 = 25$. Add $18$ to both sides: $x = 25 + 18 = 43$, so she had $\\$43$. Check: $43 - 18 = 25$. ✓ Sense check: she must have started with MORE than the $\\$25$ she has left. The choice $\\$7$ subtracts the $\\$18$ a second time. The choice $-\\$7$ computes $18 - 25$, and money spent cannot leave a negative starting balance. The choice $\\$450$ multiplies $18 \\times 25$.',
    },
  ],
  // p3 — one step: undo a multiplication
  [
    {
      q: 'Solve $7x = 91$.',
      choices: ['$637$', '$98$', '$13$', '$84$'],
      answer: 2,
      solution:
        'The $x$ was multiplied by $7$, so divide both sides by $7$: $x = 91 \\div 7 = 13$. Check: $7 \\cdot 13 = 91$. ✓ The choice $637$ multiplies by $7$ again, $7 \\times 91$. The choice $98$ adds, $91 + 7$, and $84$ subtracts, $91 - 7$ — but nothing was added to or subtracted from $x$ here, so neither is the right inverse.',
    },
    {
      q: 'Solve $8x = 96$.',
      choices: ['$12$', '$768$', '$104$', '$88$'],
      answer: 0,
      solution:
        'Divide both sides by $8$: $x = 96 \\div 8 = 12$. Check: $8 \\cdot 12 = 96$. ✓ The choice $768$ multiplies again, $8 \\times 96$. The choice $104$ adds $8$ and $88$ subtracts $8$; both undo an operation that never happened.',
    },
    {
      q: 'A shelf holds $9$ boxes with the same number of books in each, $153$ books in all. How many books are in one box?',
      choices: ['$162$', '$17$', '$1377$', '$144$'],
      answer: 1,
      solution:
        'If $x$ is the number per box, then $9x = 153$. Divide both sides by $9$: $x = 153 \\div 9 = 17$. Check: $9 \\cdot 17 = 153$. ✓ The choice $162$ adds $9$ to the total and $144$ subtracts $9$ from it, but the boxes MULTIPLY, so only division undoes them. The choice $1377$ multiplies $9 \\times 153$, which would count nine shelves instead of one box.',
    },
  ],
  // p4 — one step: undo a division
  [
    {
      q: 'Solve $\\frac{x}{5} = 9$.',
      choices: ['$\\frac{9}{5}$', '$14$', '$4$', '$45$'],
      answer: 3,
      solution:
        'The $x$ was divided by $5$, so multiply both sides by $5$: $x = 9 \\cdot 5 = 45$. Check: $\\frac{45}{5} = 9$. ✓ The choice $\\frac{9}{5}$ divides again instead of undoing the division. The choice $14$ adds $5$ and $4$ subtracts $5$; neither reverses a division.',
    },
    {
      q: 'Solve $\\frac{x}{7} = 6$.',
      choices: ['$42$', '$\\frac{6}{7}$', '$13$', '$-1$'],
      answer: 0,
      solution:
        'Multiply both sides by $7$: $x = 6 \\cdot 7 = 42$. Check: $\\frac{42}{7} = 6$. ✓ Dividing by $7$ made the number smaller, so undoing it must make it bigger — the answer has to exceed $6$. The choice $\\frac{6}{7}$ divides a second time, $13$ adds $7$, and $-1$ subtracts, $6 - 7$.',
    },
    {
      q: 'A ribbon is cut into $8$ equal pieces, and each piece is $15$ cm long. How long was the ribbon?',
      choices: ['$\\frac{15}{8}$', '$23$', '$120$', '$7$'],
      answer: 2,
      solution:
        'If $x$ is the original length, then $\\frac{x}{8} = 15$. Multiply both sides by $8$: $x = 15 \\cdot 8 = 120$ cm. Check: $\\frac{120}{8} = 15$. ✓ The whole ribbon must be far longer than one piece. The choice $\\frac{15}{8}$ divides again, $23$ adds $8$, and $7$ subtracts $8$.',
    },
  ],
  // p5 — two steps: multiply then add
  [
    {
      q: 'Solve $3x + 6 = 27$.',
      choices: ['$3$', '$7$', '$11$', '$21$'],
      answer: 1,
      solution:
        'The $x$ was multiplied by $3$, then $6$ was added, so undo in reverse: subtract $6$ from both sides to get $3x = 21$, then divide by $3$ to get $x = 7$. Check: $3 \\cdot 7 + 6 = 21 + 6 = 27$. ✓ The choice $3$ undoes in the wrong order — dividing $27$ by $3$ first gives $9$, then subtracting $6$ gives $3$. The choice $11$ adds the $6$ instead of subtracting it, $\\frac{27 + 6}{3}$. The choice $21$ stops at $3x = 21$ and forgets to divide.',
    },
    {
      q: 'Solve $2x + 9 = 25$.',
      choices: ['$16$', '$17$', '$14$', '$8$'],
      answer: 3,
      solution:
        'Subtract $9$ from both sides: $2x = 16$. Divide both sides by $2$: $x = 8$. Check: $2 \\cdot 8 + 9 = 16 + 9 = 25$. ✓ The choice $16$ is the value of $2x$, one step short of $x$. The choice $17$ adds the $9$ instead of removing it, $\\frac{25 + 9}{2}$. The choice $14$ subtracts the $2$ rather than dividing by it, $25 - 9 - 2$.',
    },
    {
      q: 'A bike shop charges an $\\$8$ deposit plus $\\$4$ for each hour of rental. Nadia paid $\\$40$ in total. How many hours did she rent for?',
      choices: ['$12$', '$32$', '$8$', '$28$'],
      answer: 2,
      solution:
        'With $h$ hours the cost is $4h + 8 = 40$. Subtract the $\\$8$ deposit from both sides: $4h = 32$. Divide by $4$: $h = 8$ hours. Check: $4 \\cdot 8 + 8 = 32 + 8 = 40$. ✓ The choice $12$ adds the deposit instead of removing it, $\\frac{40 + 8}{4}$. The choice $32$ is the amount spent on hours, not the number of hours. The choice $28$ subtracts the $\\$4$ rate rather than dividing by it, $40 - 8 - 4$.',
    },
  ],
  // p6 — two steps: multiply then subtract
  [
    {
      q: 'Solve $5x - 10 = 40$.',
      choices: ['$10$', '$6$', '$50$', '$18$'],
      answer: 0,
      solution:
        'Undo the subtraction first: add $10$ to both sides to get $5x = 50$. Then divide by $5$: $x = 10$. Check: $5 \\cdot 10 - 10 = 50 - 10 = 40$. ✓ The choice $6$ subtracts the $10$ instead of adding it, $\\frac{40 - 10}{5}$ — the equation says $10$ was taken away, so putting it back means adding. The choice $50$ stops at $5x = 50$. The choice $18$ undoes in the wrong order: $40 \\div 5 = 8$, then $8 + 10 = 18$.',
    },
    {
      q: 'Solve $4x - 6 = 26$.',
      choices: ['$32$', '$8$', '$5$', '$20$'],
      answer: 1,
      solution:
        'Add $6$ to both sides: $4x = 32$. Divide by $4$: $x = 8$. Check: $4 \\cdot 8 - 6 = 32 - 6 = 26$. ✓ The choice $32$ is $4x$, one division short. The choice $5$ subtracts the $6$ instead of adding it, $\\frac{26 - 6}{4}$. The choice $20$ is that same subtraction, $26 - 6$, with the division never done.',
    },
    {
      q: 'Sam thinks of a number, multiplies it by $6$, then subtracts $9$. He ends up with $45$. What was his number?',
      choices: ['$54$', '$6$', '$36$', '$9$'],
      answer: 3,
      solution:
        'Write it as $6n - 9 = 45$. Add $9$ to both sides: $6n = 54$. Divide by $6$: $n = 9$. Check: $6 \\cdot 9 - 9 = 54 - 9 = 45$. ✓ The choice $54$ is $6n$, not $n$. The choice $6$ subtracts the $9$ instead of adding it back, $\\frac{45 - 9}{6}$. The choice $36$ is $45 - 9$ with the division forgotten as well.',
    },
  ],
  // p7 — variables on both sides
  [
    {
      q: 'Solve $4x + 5 = 2x + 23$.',
      choices: ['$3$', '$18$', '$9$', '$14$'],
      answer: 2,
      solution:
        'Gather the $x$ terms on one side: subtract $2x$ from both sides to get $2x + 5 = 23$. Subtract $5$: $2x = 18$. Divide by $2$: $x = 9$. Check both sides separately: $4 \\cdot 9 + 5 = 36 + 5 = 41$ and $2 \\cdot 9 + 23 = 18 + 23 = 41$. They agree. ✓ The choice $3$ ADDS the $x$ terms, $6x = 18$, instead of subtracting one from the other. The choice $18$ stops at $2x = 18$. The choice $14$ moves the $+5$ the wrong way, $\\frac{23 + 5}{2}$.',
    },
    {
      q: 'Solve $7x - 8 = 3x + 12$.',
      choices: ['$1$', '$2$', '$20$', '$5$'],
      answer: 3,
      solution:
        'Subtract $3x$ from both sides: $4x - 8 = 12$. Add $8$: $4x = 20$. Divide by $4$: $x = 5$. Check: $7 \\cdot 5 - 8 = 35 - 8 = 27$ and $3 \\cdot 5 + 12 = 15 + 12 = 27$. Both sides equal $27$. ✓ The choice $1$ subtracts the $8$ from the right side instead of adding it, $4x = 12 - 8$. The choice $2$ adds the $x$ terms, $10x = 20$. The choice $20$ stops at $4x = 20$.',
    },
    {
      q: 'Plan A costs $\\$4$ to join plus $\\$9$ a month. Plan B costs $\\$28$ to join plus $\\$5$ a month. After how many months do the two plans cost the same?',
      choices: ['$6$', '$8$', '$24$', '$32$'],
      answer: 0,
      solution:
        'Set the two costs equal: $9m + 4 = 5m + 28$. Subtract $5m$ from both sides: $4m + 4 = 28$. Subtract $4$: $4m = 24$. Divide by $4$: $m = 6$ months. Check: Plan A costs $9 \\cdot 6 + 4 = 54 + 4 = 58$ and Plan B costs $5 \\cdot 6 + 28 = 30 + 28 = 58$. Equal. ✓ The choice $8$ adds the $\\$4$ joining fee to the $\\$28$ instead of subtracting it, $\\frac{28 + 4}{4}$. The choice $24$ stops at $4m = 24$, and $32$ makes both of those mistakes at once.',
    },
  ],
  // p8 — equations with no solution
  [
    {
      q: 'How many solutions does $x + 6 = x + 2$ have?',
      choices: ['No number is a solution', 'Exactly one: $x = 4$', 'Exactly one: $x = -4$', 'Every number is a solution'],
      answer: 0,
      solution:
        'Subtract $x$ from both sides and the variable vanishes, leaving $6 = 2$ — false, whatever $x$ is. A number plus $6$ is always $4$ more than that same number plus $2$, so the two sides can never meet. The choices $x = 4$ and $x = -4$ come from subtracting the constants as if that were a solution, but plugging $x = 4$ in gives $10 = 6$, which is false. The last choice describes the opposite situation, an identity.',
    },
    {
      q: 'How many solutions does $5x - 3 = 5x + 8$ have?',
      choices: ['Every number is a solution', 'No number is a solution', 'Exactly one: $x = 11$', 'Exactly one: $x = 0$'],
      answer: 1,
      solution:
        'Subtract $5x$ from both sides: the $x$ terms cancel and you are left with $-3 = 8$, which is false for every $x$. So the equation has no solution. Test $x = 11$ to be sure it is not one: the left side is $5 \\cdot 11 - 3 = 52$ and the right side is $5 \\cdot 11 + 8 = 63$, and $52 \\ne 63$. Test $x = 0$: the sides are $-3$ and $8$, still unequal. The first choice would need both sides to be the same expression, and they differ by $11$.',
    },
    {
      q: 'Which of these equations has NO solution?',
      choices: ['$x + 3 = 3 + x$', '$2x = x$', '$x + 3 = x - 3$', '$3(x + 1) = 3x + 3$'],
      answer: 2,
      solution:
        'Subtracting $x$ from both sides of $x + 3 = x - 3$ leaves $3 = -3$, which is false for every $x$ — no solution. The equation $x + 3 = 3 + x$ is true for every number, since addition can be reordered. The equation $2x = x$ has exactly one solution: subtract $x$ to get $x = 0$, and $2 \\cdot 0 = 0$ checks out. And $3(x + 1) = 3x + 3$ is just distribution, so it is true for every number too.',
    },
  ],
  // p9 — equations true for every number
  [
    {
      q: 'How many solutions does $5(x + 2) = 5x + 10$ have?',
      choices: ['Every number is a solution', 'Exactly one: $x = 2$', 'No number is a solution', 'Exactly one: $x = 0$'],
      answer: 0,
      solution:
        'Distribute the left side: $5(x + 2) = 5x + 10$, which is exactly the right side. The two sides are the same expression written two ways, so every number works. Try $x = 3$: the left is $5 \\cdot 5 = 25$ and the right is $15 + 10 = 25$. ✓ Try $x = -1$: the left is $5 \\cdot 1 = 5$ and the right is $-5 + 10 = 5$. ✓ The single-value choices each pick one number out of infinitely many, and "no solution" would need the two sides to differ by a nonzero constant.',
    },
    {
      q: 'How many solutions does $3(x - 4) = 3x - 12$ have?',
      choices: ['Exactly one: $x = 4$', 'No number is a solution', 'Every number is a solution', 'Exactly one: $x = -4$'],
      answer: 2,
      solution:
        'Distributing the left side gives $3x - 12$, matching the right side exactly, so the equation is an identity: every number is a solution. Try $x = 4$: the left is $3 \\cdot 0 = 0$ and the right is $12 - 12 = 0$. ✓ Try $x = 10$: the left is $3 \\cdot 6 = 18$ and the right is $30 - 12 = 18$. ✓ The choice $x = 4$ is a solution, but so is every other number, so calling it the ONLY one is wrong.',
    },
    {
      q: 'Which of these equations is true for EVERY number $x$?',
      choices: ['$4(x + 5) = 4x + 5$', '$2(x + 3) = 2x$', '$5x = 5 + x$', '$4(x + 5) = 4x + 20$'],
      answer: 3,
      solution:
        'Distributing gives $4(x + 5) = 4x + 20$, so the last equation is an identity — both sides are the same expression. The first choice multiplies only the $x$ and leaves the $5$ alone; subtracting $4x$ turns it into $20 = 5$, so it has no solution. The second gives $2x + 6 = 2x$, or $6 = 0$: no solution either. The third, $5x = 5 + x$, becomes $4x = 5$, so it is true for exactly one number, $x = \\frac{5}{4}$ — not for every number.',
    },
  ],
  // p10 — scale the whole equation instead of solving for x
  [
    {
      q: 'If $8x + 6 = 30$, what is the value of $4x + 3$?',
      choices: ['$15$', '$30$', '$60$', '$12$'],
      answer: 0,
      solution:
        'No need to find $x$ first: $4x + 3$ is exactly HALF of $8x + 6$. Halving both sides of $8x + 6 = 30$ gives $4x + 3 = 15$. The slow way agrees: $8x = 24$, so $x = 3$, and $4 \\cdot 3 + 3 = 15$. ✓ The choice $30$ forgets to halve. The choice $60$ doubles when the problem asks for a half. The choice $12$ is $4x$, leaving off the $+3$.',
    },
    {
      q: 'If $2x + 7 = 15$, what is the value of $6x + 21$?',
      choices: ['$30$', '$45$', '$15$', '$22$'],
      answer: 1,
      solution:
        'Look at the shape: $6x + 21$ is three times $2x + 7$. Multiplying both sides of $2x + 7 = 15$ by $3$ gives $6x + 21 = 45$. Checking the long way: $2x = 8$, so $x = 4$, and $6 \\cdot 4 + 21 = 24 + 21 = 45$. ✓ The choice $30$ doubles instead of tripling. The choice $15$ forgets to scale at all. The choice $22$ adds the $7$ to the $15$ rather than noticing the factor of $3$.',
    },
    {
      q: 'If $7x - 4 = 24$, what is the value of $14x - 8$?',
      choices: ['$24$', '$56$', '$20$', '$48$'],
      answer: 3,
      solution:
        'Every term of $14x - 8$ is double the matching term of $7x - 4$, so doubling both sides of $7x - 4 = 24$ gives $14x - 8 = 48$. The long way confirms it: $7x = 28$, so $x = 4$, and $14 \\cdot 4 - 8 = 56 - 8 = 48$. ✓ The choice $24$ forgets to double. The choice $56$ is $14x$ without the $-8$. The choice $20$ is $24 - 4$, subtracting again instead of scaling.',
    },
  ],
]

const s16 = [
  // p1 — evaluate a single power
  [
    {
      q: 'Evaluate $3^4$.',
      choices: ['$81$', '$12$', '$64$', '$7$'],
      answer: 0,
      solution:
        '$3^4$ means four factors of $3$: $3 \\cdot 3 \\cdot 3 \\cdot 3 = 9 \\cdot 9 = 81$. The choice $12$ multiplies the base by the exponent, $3 \\times 4$ — but an exponent counts copies, it is not a factor. The choice $64$ swaps the two numbers, computing $4^3$ instead. The choice $7$ adds them.',
    },
    {
      q: 'Evaluate $2^6$.',
      choices: ['$12$', '$36$', '$64$', '$8$'],
      answer: 2,
      solution:
        'Six factors of $2$: $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 64$. Doubling step by step gives $2, 4, 8, 16, 32, 64$. The choice $12$ is $2 \\times 6$, treating the exponent as a multiplier. The choice $36$ is $6^2$, with base and exponent swapped. The choice $8$ is $2 + 6$.',
    },
    {
      q: 'Evaluate $5^3$.',
      choices: ['$15$', '$243$', '$8$', '$125$'],
      answer: 3,
      solution:
        'Three factors of $5$: $5 \\cdot 5 \\cdot 5 = 25 \\cdot 5 = 125$. The choice $15$ is $5 \\times 3$. The choice $243$ is $3^5$, the base and exponent swapped — and it shows how much the order matters, since $125 \\ne 243$. The choice $8$ is $5 + 3$.',
    },
  ],
  // p2 — multiplying powers of the same base
  [
    {
      q: 'Simplify $2^4 \\cdot 2^3$ and evaluate.',
      choices: ['$4096$', '$128$', '$16384$', '$14$'],
      answer: 1,
      solution:
        'Same base, so ADD the exponents: four $2$s times three $2$s is seven $2$s, $2^4 \\cdot 2^3 = 2^7 = 128$. Check directly: $16 \\cdot 8 = 128$. ✓ The choice $4096$ multiplies the exponents, giving $2^{12}$ — and $2^{12} = 4096$, nowhere near $128$, so the two rules really do differ. The choice $16384$ multiplies the bases as well, $4^7$. The choice $14$ is $2 \\times (4 + 3)$.',
    },
    {
      q: 'Simplify $5^2 \\cdot 5^3$ and evaluate.',
      choices: ['$3125$', '$15625$', '$150$', '$25$'],
      answer: 0,
      solution:
        'Add the exponents: $5^2 \\cdot 5^3 = 5^5 = 3125$. Check directly: $25 \\cdot 125 = 3125$. ✓ The choice $15625$ multiplies the exponents to get $5^6$. The choice $150$ ADDS the two powers, $25 + 125$, instead of multiplying them. The choice $25$ is $5 \\times (2 + 3)$, treating the exponent as a multiplier.',
    },
    {
      q: 'Simplify $7^3 \\cdot 7$ and evaluate.',
      choices: ['$343$', '$350$', '$2401$', '$21$'],
      answer: 2,
      solution:
        'A lone $7$ is really $7^1$, so this is $7^3 \\cdot 7^1 = 7^{3+1} = 7^4 = 2401$. Check directly: $343 \\cdot 7 = 2401$. ✓ The choice $343$ is $7^3$ — the mistake of treating the bare $7$ as though it contributed nothing (an exponent of $0$ rather than $1$). The choice $350$ adds, $343 + 7$. The choice $21$ is $7 \\times 3$.',
    },
  ],
  // p3 — the zero exponent
  [
    {
      q: 'What is $12^0$?',
      choices: ['$0$', '$1$', '$12$', 'Undefined'],
      answer: 1,
      solution:
        'Any nonzero number raised to the zero power is $1$, so $12^0 = 1$. The quotient law forces it: $\\frac{12^5}{12^5} = 1$, and the law says the same quotient is $12^{5-5} = 12^0$. The choice $0$ confuses the exponent with the answer. The choice $12$ would be $12^1$. And the expression is perfectly well defined, so "Undefined" is wrong.',
    },
    {
      q: 'Evaluate $(-4)^0$.',
      choices: ['$-1$', '$0$', '$1$', '$-4$'],
      answer: 2,
      solution:
        'The base $-4$ is not zero, so the zero-exponent rule applies exactly as usual: $(-4)^0 = 1$. Check it with the quotient law: $\\frac{(-4)^3}{(-4)^3} = \\frac{-64}{-64} = 1$, and that quotient is $(-4)^{3-3} = (-4)^0$. The choice $-1$ assumes the minus sign somehow survives, but there are no factors of $-4$ left to carry it. The choice $0$ mistakes the exponent for the answer, and $-4$ would be $(-4)^1$.',
    },
    {
      q: 'Which of these expressions is equal to $1$?',
      choices: ['$9^1$', '$0^9$', '$(-1)^9$', '$9^0$'],
      answer: 3,
      solution:
        'A nonzero base to the zero power is $1$, so $9^0 = 1$. The others: $9^1 = 9$, since one factor of $9$ is just $9$. And $0^9$ is nine factors of $0$, which is $0$. And $(-1)^9$ has nine negative factors — an odd count, so the minus signs do not pair off and the value is $-1$.',
    },
  ],
  // p4 — powers of negative numbers, and where the minus sign sits
  [
    {
      q: 'Evaluate $(-5)^2$.',
      choices: ['$25$', '$-25$', '$-10$', '$10$'],
      answer: 0,
      solution:
        'The parentheses make the whole $-5$ the base: $(-5)^2 = (-5)(-5) = 25$. Two negative factors pair off, so the result is positive. The choice $-25$ is $-5^2$, which means $-(5^2)$ — without parentheses the base is just $5$ and the minus sign stays outside. The choices $-10$ and $10$ multiply the base by the exponent instead of using it as a count.',
    },
    {
      q: 'Evaluate $-4^2$.',
      choices: ['$16$', '$8$', '$-8$', '$-16$'],
      answer: 3,
      solution:
        'With no parentheses, the exponent grabs only the $4$: $-4^2$ means $-(4^2) = -(16) = -16$. The base here is $4$, not $-4$. The choice $16$ is $(-4)^2$, which DOES square the negative and gives a positive answer — compare the two carefully, since one pair of parentheses is the whole difference. The choices $8$ and $-8$ come from $4 \\times 2$.',
    },
    {
      q: 'Evaluate $(-2)^3$.',
      choices: ['$8$', '$-8$', '$-6$', '$6$'],
      answer: 1,
      solution:
        'Three factors of $-2$: $(-2)(-2)(-2) = 4 \\cdot (-2) = -8$. An ODD number of negative factors leaves one minus sign unpaired, so the answer is negative. (Compare $(-2)^2 = 4$, where the count is even.) The choice $8$ loses the sign. The choices $-6$ and $6$ compute $-2 \\times 3$.',
    },
  ],
  // p5 — negative exponents
  [
    {
      q: 'Evaluate $3^{-2}$.',
      choices: ['$-9$', '$\\frac{1}{9}$', '$-\\frac{1}{9}$', '$-6$'],
      answer: 1,
      solution:
        'A negative exponent means reciprocal, not negative: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$. The answer is positive — the minus sign lives in the exponent, not on the value. The choice $-9$ negates instead of flipping. The choice $-\\frac{1}{9}$ flips AND negates, doing the job twice. The choice $-6$ multiplies $3 \\times (-2)$.',
    },
    {
      q: 'Evaluate $5^{-2}$.',
      choices: ['$-25$', '$-\\frac{1}{25}$', '$\\frac{1}{25}$', '$\\frac{1}{10}$'],
      answer: 2,
      solution:
        'Flip the base and drop the minus: $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$. The choice $-25$ treats the negative exponent as a sign change. The choice $-\\frac{1}{25}$ takes the reciprocal and negates as well. The choice $\\frac{1}{10}$ comes from $\\frac{1}{5 \\times 2}$, multiplying the base by the exponent instead of using it as a count.',
    },
    {
      q: 'Evaluate $10^{-3}$.',
      choices: ['$-1000$', '$-\\frac{1}{1000}$', '$\\frac{1}{30}$', '$\\frac{1}{1000}$'],
      answer: 3,
      solution:
        'The negative exponent gives a reciprocal: $10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000}$. The choice $-1000$ negates rather than flipping. The choice $-\\frac{1}{1000}$ does both. The choice $\\frac{1}{30}$ is $\\frac{1}{10 \\times 3}$, multiplying the base by the exponent.',
    },
  ],
  // p6 — a power raised to a power
  [
    {
      q: 'Evaluate $(3^2)^3$.',
      choices: ['$729$', '$243$', '$6561$', '$27$'],
      answer: 0,
      solution:
        'A power of a power MULTIPLIES the exponents: $(3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729$. Check directly: $3^2 = 9$ and $9^3 = 729$. ✓ The choice $243$ adds the exponents to get $3^5$ — that is the rule for multiplying two powers, not for raising one to a power, and $243 \\ne 729$ shows the two rules are genuinely different. The choice $6561$ is $3^8$, from stacking the exponents as $3^{(2^3)}$. The choice $27$ is $3^3$, ignoring the inner exponent.',
    },
    {
      q: 'Evaluate $(2^4)^2$.',
      choices: ['$64$', '$65536$', '$256$', '$16$'],
      answer: 2,
      solution:
        'Multiply the exponents: $(2^4)^2 = 2^{4 \\cdot 2} = 2^8 = 256$. Check directly: $2^4 = 16$ and $16^2 = 256$. ✓ The choice $64$ adds the exponents instead, giving $2^6$. The choice $65536$ is $2^{16}$, from squaring the exponent rather than doubling it. The choice $16$ is $2^4$, with the outer power never applied.',
    },
    {
      q: 'Evaluate $(10^3)^2$.',
      choices: ['$100000$', '$1000000000$', '$1000$', '$1000000$'],
      answer: 3,
      solution:
        'Multiply the exponents: $(10^3)^2 = 10^{3 \\cdot 2} = 10^6 = 1000000$. Check directly: $10^3 = 1000$ and $1000^2 = 1000000$. ✓ The choice $100000$ is $10^5$, from adding the exponents. The choice $1000000000$ is $10^9$, from stacking them as $10^{(3^2)}$. The choice $1000$ is $10^3$, with the squaring forgotten.',
    },
  ],
  // p7 — dividing powers of the same base
  [
    {
      q: 'Evaluate $\\frac{3^8}{3^5}$.',
      choices: ['$27$', '$\\frac{1}{27}$', '$1$', '$6561$'],
      answer: 0,
      solution:
        'Dividing cancels copies, so SUBTRACT the exponents: $\\frac{3^8}{3^5} = 3^{8-5} = 3^3 = 27$. Five of the eight $3$s cancel and three survive. The choice $\\frac{1}{27}$ subtracts backwards, $3^{5-8} = 3^{-3}$. The choice $1$ divides the bases as well, leaving $1^3$ — but the bases cancel only through the exponents, they are not divided separately. The choice $6561$ is $3^8$, with the denominator ignored.',
    },
    {
      q: 'Evaluate $\\frac{7^6}{7^4}$.',
      choices: ['$\\frac{1}{49}$', '$49$', '$1$', '$117649$'],
      answer: 1,
      solution:
        'Subtract the exponents: $\\frac{7^6}{7^4} = 7^{6-4} = 7^2 = 49$. Four of the six $7$s cancel, leaving two. The choice $\\frac{1}{49}$ subtracts in the wrong order, giving $7^{-2}$. The choice $1$ cancels the bases too. The choice $117649$ is $7^6$, forgetting to divide at all.',
    },
    {
      q: 'Evaluate $\\frac{10^7}{10^4}$.',
      choices: ['$\\frac{1}{1000}$', '$1$', '$1000$', '$10000000$'],
      answer: 2,
      solution:
        'Subtract the exponents: $\\frac{10^7}{10^4} = 10^{7-4} = 10^3 = 1000$. The choice $\\frac{1}{1000}$ subtracts backwards, $10^{-3}$. The choice $1$ divides the bases as well as subtracting the exponents. The choice $10000000$ is $10^7$, the numerator alone.',
    },
  ],
  // p8 — an exponent on a product
  [
    {
      q: 'Evaluate $(3 \\cdot 4)^2$.',
      choices: ['$48$', '$36$', '$24$', '$144$'],
      answer: 3,
      solution:
        'The exponent hits EVERY factor: $(3 \\cdot 4)^2 = 3^2 \\cdot 4^2 = 9 \\cdot 16 = 144$. Or simply multiply first: $12^2 = 144$. ✓ The choice $48$ is $3 \\cdot 4^2$, squaring only the second factor. The choice $36$ is $3^2 \\cdot 4$, squaring only the first. The choice $24$ is $2 \\times 12$, treating the exponent as a multiplier.',
    },
    {
      q: 'Evaluate $(2 \\cdot 7)^3$.',
      choices: ['$2744$', '$686$', '$56$', '$42$'],
      answer: 0,
      solution:
        'Cube each factor: $(2 \\cdot 7)^3 = 2^3 \\cdot 7^3 = 8 \\cdot 343 = 2744$. Or multiply first: $14^3 = 2744$. ✓ The choice $686$ is $2 \\cdot 7^3$, which leaves the $2$ uncubed. The choice $56$ is $2^3 \\cdot 7$, cubing only the $2$. The choice $42$ is $3 \\times 14$.',
    },
    {
      q: 'Evaluate $(5 \\cdot 2)^4$.',
      choices: ['$80$', '$10000$', '$1250$', '$40$'],
      answer: 1,
      solution:
        'Raise both factors to the fourth power: $(5 \\cdot 2)^4 = 5^4 \\cdot 2^4 = 625 \\cdot 16 = 10000$. Or multiply first: $10^4 = 10000$. ✓ The choice $80$ is $5 \\cdot 2^4$, with the $5$ left alone. The choice $1250$ is $5^4 \\cdot 2$, with the $2$ left alone. The choice $40$ is $4 \\times 10$.',
    },
  ],
  // p9 — multiplying powers of a negative base
  [
    {
      q: 'Evaluate $(-3)^2 \\cdot (-3)^3$.',
      choices: ['$243$', '$-243$', '$729$', '$-15$'],
      answer: 1,
      solution:
        'Same base, so add the exponents: $(-3)^2 \\cdot (-3)^3 = (-3)^5$. Five negative factors is an ODD count, so one minus sign is left unpaired and the answer is negative: $(-3)^5 = -243$. Check directly: $9 \\cdot (-27) = -243$. ✓ The choice $243$ drops the sign. The choice $729$ multiplies the exponents to get $(-3)^6$, and six factors would pair off to a positive value — the wrong rule AND the wrong sign. The choice $-15$ is $-3 \\times 5$.',
    },
    {
      q: 'Evaluate $(-2)^4 \\cdot (-2)^3$.',
      choices: ['$128$', '$4096$', '$-128$', '$-14$'],
      answer: 2,
      solution:
        'Add the exponents: $(-2)^4 \\cdot (-2)^3 = (-2)^7$. Seven negative factors is odd, so the result is negative: $(-2)^7 = -128$. Check directly: $16 \\cdot (-8) = -128$. ✓ The choice $128$ has the right size but the wrong sign. The choice $4096$ multiplies the exponents, giving $(-2)^{12}$, which is positive because $12$ is even. The choice $-14$ is $-2 \\times 7$.',
    },
    {
      q: 'Evaluate $(-2)^5 \\cdot (-2)^3$.',
      choices: ['$-256$', '$-32768$', '$-16$', '$256$'],
      answer: 3,
      solution:
        'Add the exponents: $(-2)^5 \\cdot (-2)^3 = (-2)^8$. Eight negative factors is an EVEN count, so they all pair off and the answer is positive: $(-2)^8 = 256$. Check directly: $(-32) \\cdot (-8) = 256$ — a negative times a negative. ✓ The choice $-256$ assumes a negative base always gives a negative answer. The choice $-32768$ multiplies the exponents to get $(-2)^{15}$. The choice $-16$ is $-2 \\times 8$.',
    },
  ],
  // p10 — make the bases match before dividing
  [
    {
      q: 'Evaluate $\\frac{9^6}{3^{10}}$.',
      choices: ['$9$', '$\\frac{1}{81}$', '$\\frac{1}{9}$', '$531441$'],
      answer: 0,
      solution:
        'The bases differ, so rewrite one of them first. Since $9 = 3^2$, we get $9^6 = (3^2)^6 = 3^{12}$. Now $\\frac{3^{12}}{3^{10}} = 3^{12-10} = 3^2 = 9$. The choice $\\frac{1}{81}$ subtracts the exponents while the bases still disagree, $3^{6-10} = 3^{-4}$. The choice $\\frac{1}{9}$ converts wrongly as $9^6 = 3^{6+2} = 3^8$, adding the $2$ instead of multiplying by it, and then $3^{8-10} = 3^{-2}$. The choice $531441$ is $9^6$ with the denominator dropped.',
    },
    {
      q: 'Evaluate $\\frac{8^5}{2^{12}}$.',
      choices: ['$\\frac{1}{128}$', '$\\frac{1}{16}$', '$8$', '$32768$'],
      answer: 2,
      solution:
        'Match the bases: $8 = 2^3$, so $8^5 = (2^3)^5 = 2^{15}$. Then $\\frac{2^{15}}{2^{12}} = 2^{15-12} = 2^3 = 8$. The choice $\\frac{1}{128}$ subtracts the exponents without converting, $2^{5-12} = 2^{-7}$. The choice $\\frac{1}{16}$ converts wrongly as $8^5 = 2^{5+3} = 2^8$, adding the $3$ rather than multiplying, and then $2^{8-12} = 2^{-4}$. The choice $32768$ is $8^5$ alone.',
    },
    {
      q: 'Evaluate $\\frac{2^{14}}{4^5}$.',
      choices: ['$512$', '$128$', '$16384$', '$16$'],
      answer: 3,
      solution:
        'This time the DENOMINATOR needs rewriting: $4 = 2^2$, so $4^5 = (2^2)^5 = 2^{10}$. Then $\\frac{2^{14}}{2^{10}} = 2^{14-10} = 2^4 = 16$. The choice $512$ subtracts the exponents with the bases still mismatched, $2^{14-5} = 2^9$. The choice $128$ converts wrongly as $4^5 = 2^{5+2} = 2^7$, giving $2^{14-7}$. The choice $16384$ is $2^{14}$, the numerator by itself.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 1,
  sections: {
    '1.4': s14,
    '1.5': s15,
    '1.6': s16,
  },
}
