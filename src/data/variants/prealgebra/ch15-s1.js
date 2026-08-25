// Prealgebra chapter 15 — variations for sections 15.1-15.2.
// All problems and solutions are original MathQuest content.
//
// Every sequence here is shown with enough terms that one rule reproduces all
// of them, and every counting answer was settled by listing the cases in a
// fixed order rather than by a formula.

const s151 = [
  // p1 — the next term of a sequence that grows by a constant amount
  [
    {
      q: 'What is the next term of the sequence $6, 11, 16, 21, \\ldots$?',
      choices: ['$26$', '$25$', '$27$', '$31$'],
      answer: 0,
      solution:
        'The rule is "add $5$ to the term before." Test it on every jump given, not just the first: $6 + 5 = 11$, $11 + 5 = 16$, $16 + 5 = 21$. ✓ So the next term is $21 + 5 = 26$. Reading the first jump as $4$ gives $25$ and reading it as $6$ gives $27$; $31$ jumps twice and lands on the term after the next one.',
    },
    {
      q: 'Leo counts his marbles each morning: $2, 9, 16, 23, \\ldots$. If the pattern continues, how many will he have on the next morning?',
      choices: ['$29$', '$31$', '$30$', '$37$'],
      answer: 2,
      solution:
        'The rule is "add $7$ each morning," and it fits every jump listed: $2 + 7 = 9$, $9 + 7 = 16$, $16 + 7 = 23$. ✓ The next term is $23 + 7 = 30$. Using a jump of $6$ gives $29$ and a jump of $8$ gives $31$; $37$ adds $7$ twice, skipping a morning.',
    },
    {
      q: 'What is the next term of the sequence $50, 43, 36, 29, \\ldots$?',
      choices: ['$23$', '$21$', '$15$', '$22$'],
      answer: 3,
      solution:
        'This sequence shrinks. The rule is "subtract $7$ from the term before," and it reproduces every term shown: $50 - 7 = 43$, $43 - 7 = 36$, $36 - 7 = 29$. ✓ So the next term is $29 - 7 = 22$. Subtracting $6$ gives $23$ and subtracting $8$ gives $21$; $15$ subtracts $7$ twice and skips a term.',
    },
  ],
  // p2 — the next term of a sequence that multiplies
  [
    {
      q: 'What is the next term of the sequence $2, 6, 18, 54, \\ldots$?',
      choices: ['$108$', '$162$', '$90$', '$216$'],
      answer: 1,
      solution:
        'The jumps are $4$, $12$, $36$ — not equal, so the sequence does not add a fixed amount. Check ratios instead: $6 \\div 2 = 3$, $18 \\div 6 = 3$, $54 \\div 18 = 3$. The rule is "triple the term before," so the next term is $54 \\times 3 = 162$. Doubling instead of tripling gives $108$; adding the last jump of $36$ gives $90$; multiplying by $4$ gives $216$.',
    },
    {
      q: 'What is the next term of the sequence $5, 10, 20, 40, \\ldots$?',
      choices: ['$80$', '$60$', '$45$', '$160$'],
      answer: 0,
      solution:
        'Test a rule on every jump: $5 \\times 2 = 10$, $10 \\times 2 = 20$, $20 \\times 2 = 40$. ✓ The rule is "double the term before," so the next term is $40 \\times 2 = 80$. Adding the last jump of $20$ gives $60$; adding the first jump of $5$ gives $45$ — that rule fails at the very second term; and $160$ doubles twice, skipping a term.',
    },
    {
      q: 'What is the next term of the sequence $1, 4, 16, 64, \\ldots$?',
      choices: ['$68$', '$128$', '$112$', '$256$'],
      answer: 3,
      solution:
        'The jumps $3$, $12$, $48$ keep changing, so try ratios: $4 \\div 1 = 4$, $16 \\div 4 = 4$, $64 \\div 16 = 4$. The rule is "multiply the term before by $4$," giving $64 \\times 4 = 256$. Adding $4$ gives $68$; doubling instead of quadrupling gives $128$; adding the last jump of $48$ gives $112$.',
    },
  ],
  // p3 — where a repeating pattern lands, using a remainder
  [
    {
      q: 'A ribbon repeats the beads blue, pink, white, gold over and over. What color is the $43$rd bead?',
      choices: ['White', 'Gold', 'Pink', 'Blue'],
      answer: 0,
      solution:
        'The pattern repeats every $4$ beads, so divide and keep the remainder: $43 = 4 \\times 10 + 3$. Ten complete repeats use up $40$ beads, and the $43$rd bead is the $3$rd bead of the next repeat, which is white. Gold is the $4$th bead — one too far. Pink is the $2$nd — one too few. Blue is where you land if you skip the remainder step and just name the color the pattern starts with.',
    },
    {
      q: 'A necklace repeats the beads amber, jade, coral, ivory, onyx over and over. What color is the $68$th bead?',
      choices: ['Jade', 'Coral', 'Onyx', 'Ivory'],
      answer: 1,
      solution:
        'The pattern repeats every $5$ beads, so use a remainder: $68 = 5 \\times 13 + 3$. Thirteen full repeats cover $65$ beads, and bead $68$ is the $3$rd of the next repeat: coral. Jade is the $2$nd bead, one short; ivory is the $4$th, one too far; and onyx is the last bead of the pattern, which would only be right if the remainder were $0$.',
    },
    {
      q: 'Four friends feed the class rabbit in the repeating order Ana, Ben, Cal, Dee. Who feeds it on day $50$?',
      choices: ['Cal', 'Dee', 'Ana', 'Ben'],
      answer: 3,
      solution:
        'The rotation repeats every $4$ days, so divide: $50 = 4 \\times 12 + 2$. Twelve full rotations take $48$ days, so day $50$ is the $2$nd name of the next rotation: Ben. Cal is the $3$rd name, one too far; Ana is the $1$st, one short; and Dee would be right only if $50$ were a multiple of $4$ — but $48$ is the multiple, not $50$.',
    },
  ],
  // p4 — a units digit whose cycle is very short
  [
    {
      q: 'What is the units digit of $5^{63}$?',
      choices: ['$0$', '$5$', '$2$', '$3$'],
      answer: 1,
      solution:
        'Try small cases: $5^1 = 5$, $5^2 = 25$, $5^3 = 125$. Every power of $5$ ends in $5$ — a cycle of length $1$ — so no remainder work is needed and $5^{63}$ ends in $5$. Choosing $2$ reads the tens digit of $25$ instead of its units digit; $0$ treats powers of $5$ like powers of $10$; and $3$ just copies the units digit of the exponent $63$.',
    },
    {
      q: 'What is the units digit of $9^{31}$?',
      choices: ['$9$', '$1$', '$7$', '$8$'],
      answer: 0,
      solution:
        'Small cases first: $9^1 = 9$, $9^2 = 81$, $9^3 = 729$, $9^4 = 6561$. The units digits run $9, 1, 9, 1, \\ldots$ — a cycle of length $2$, with odd exponents landing on $9$ and even ones on $1$. Since $31$ is odd, the units digit is $9$. Choosing $1$ takes the even-exponent entry; $7$ comes from using the cycle of $3$ instead ($3, 9, 7, 1$ with $31 = 4 \\times 7 + 3$); and $8$ reads the tens digit of $9^2 = 81$.',
    },
    {
      q: 'What is the units digit of $4^{18}$?',
      choices: ['$2$', '$8$', '$6$', '$4$'],
      answer: 2,
      solution:
        'Small cases: $4^1 = 4$, $4^2 = 16$, $4^3 = 64$, $4^4 = 256$. The units digits go $4, 6, 4, 6, \\ldots$ — a cycle of length $2$, odd exponents on $4$ and even exponents on $6$. Since $18$ is even, the units digit is $6$. Choosing $4$ grabs the odd-exponent entry; $8$ assumes the units digits keep doubling ($4$, then $8$); and $2$ copies the units digit of the exponent $18$.',
    },
  ],
  // p5 — a far-away term of a sequence that adds a fixed amount
  [
    {
      q: 'The sequence $7, 10, 13, 16, \\ldots$ adds $3$ each time. What is its $25$th term?',
      choices: ['$82$', '$79$', '$75$', '$76$'],
      answer: 1,
      solution:
        'Count jumps, not terms: getting from the $1$st term to the $25$th takes $24$ jumps of $3$. So the term is $7 + 24 \\times 3 = 7 + 72 = 79$. Check the rule on the terms given: $7 + 1 \\times 3 = 10$ ✓ and $7 + 3 \\times 3 = 16$ ✓, so the $n$th term is $7 + (n - 1) \\times 3$. Using $25$ jumps gives $82$, one jump too many; using $23$ gives $76$, one too few; and $75$ is $25 \\times 3$, which forgets to start from $7$.',
    },
    {
      q: 'The sequence $2, 8, 14, 20, \\ldots$ adds $6$ each time. What is its $18$th term?',
      choices: ['$110$', '$98$', '$104$', '$108$'],
      answer: 2,
      solution:
        'Reaching the $18$th term takes $17$ jumps of $6$, so the term is $2 + 17 \\times 6 = 2 + 102 = 104$. The rule $2 + (n - 1) \\times 6$ checks out on every term shown: $n = 1$ gives $2$ ✓, $n = 2$ gives $8$ ✓, $n = 4$ gives $20$ ✓. Using $18$ jumps gives $110$; using $16$ gives $98$; and $108 = 18 \\times 6$ leaves out the starting $2$.',
    },
    {
      q: 'The sequence $9, 14, 19, 24, \\ldots$ adds $5$ each time. What is its $40$th term?',
      choices: ['$209$', '$199$', '$200$', '$204$'],
      answer: 3,
      solution:
        'From the $1$st term to the $40$th is $39$ jumps of $5$, so the term is $9 + 39 \\times 5 = 9 + 195 = 204$. Test the formula $9 + (n - 1) \\times 5$ on the given terms: $n = 1$ gives $9$ ✓ and $n = 4$ gives $24$ ✓ — it produces the first term, not the zeroth. Using $40$ jumps gives $209$; using $38$ gives $199$; and $200 = 40 \\times 5$ forgets the starting $9$.',
    },
  ],
  // p6 — a units digit from a cycle of length four
  [
    {
      q: 'What is the units digit of $7^{23}$?',
      choices: ['$3$', '$1$', '$7$', '$9$'],
      answer: 0,
      solution:
        'Small cases: $7^1 = 7$, $7^2 = 49$, $7^3 = 343$, $7^4 = 2401$, and $7^5$ ends in $7$ again. The units digits cycle $7, 9, 3, 1$ every $4$ powers. Now find the address: $23 = 4 \\times 5 + 3$, so $7^{23}$ matches the $3$rd entry, which is $3$. Choosing $1$ grabs the last entry of the cycle and skips the remainder step; $9$ is the $2$nd entry, one short; and $7$ is the $1$st entry, as if the exponent did not matter.',
    },
    {
      q: 'What is the units digit of $2^{19}$?',
      choices: ['$6$', '$4$', '$8$', '$2$'],
      answer: 2,
      solution:
        'The powers of $2$ end in $2, 4, 8, 6$ and then repeat, a cycle of length $4$. Divide to find the address: $19 = 4 \\times 4 + 3$, so $2^{19}$ matches the $3$rd entry of the cycle, which is $8$. Choosing $6$ takes the last entry of the cycle, the classic slip when the remainder step is skipped; $4$ is the $2$nd entry, one short; and $2$ is the $1$st entry.',
    },
    {
      q: 'What is the units digit of $3^{22}$?',
      choices: ['$7$', '$9$', '$1$', '$3$'],
      answer: 1,
      solution:
        'The powers of $3$ end in $3, 9, 7, 1$, repeating every $4$. Since $22 = 4 \\times 5 + 2$, the remainder is $2$, so $3^{22}$ matches the $2$nd entry of the cycle: $9$. Choosing $7$ counts one entry too far; $1$ takes the last entry, which is right only when the remainder is $0$; and $3$ takes the first entry.',
    },
  ],
  // p7 — days of the week repeat every seven
  [
    {
      q: 'Today is Thursday. What day of the week will it be $30$ days from today?',
      choices: ['Saturday', 'Friday', 'Sunday', 'Thursday'],
      answer: 0,
      solution:
        'Days repeat every $7$, so only the remainder matters: $30 = 7 \\times 4 + 2$. Four weeks from Thursday is Thursday again, and $2$ more days lands on Saturday. Friday comes from a remainder of $1$, one day short; Sunday from a remainder of $3$, one day too far; and Thursday assumes $30$ is a whole number of weeks — it is $28$ that is a multiple of $7$, not $30$.',
    },
    {
      q: 'Today is Sunday. What day of the week was it $25$ days ago?',
      choices: ['Thursday', 'Tuesday', 'Wednesday', 'Sunday'],
      answer: 2,
      solution:
        'Divide first: $25 = 7 \\times 3 + 4$. Three weeks ago was a Sunday, so go back $4$ more days: Saturday, Friday, Thursday, Wednesday. The answer is Wednesday. Thursday is what you get by counting the $4$ days forward instead of backward; Tuesday goes back $5$ days instead of $4$; and Sunday assumes $25$ is a whole number of weeks, but $21$ is the multiple of $7$, not $25$.',
    },
    {
      q: 'Today is Friday. What day of the week will it be $100$ days from today?',
      choices: ['Saturday', 'Monday', 'Friday', 'Sunday'],
      answer: 3,
      solution:
        'Only the remainder after dividing by $7$ matters: $100 = 7 \\times 14 + 2$. Fourteen weeks from Friday is Friday again, and $2$ more days gives Sunday. Saturday comes from a remainder of $1$; Monday from a remainder of $3$; and Friday from assuming $100$ is a multiple of $7$ — the nearby multiple is $98$.',
    },
  ],
  // p8 — a units digit where the remainder step is easy to skip
  [
    {
      q: 'What is the units digit of $8^{31}$?',
      choices: ['$2$', '$6$', '$4$', '$8$'],
      answer: 0,
      solution:
        'The powers of $8$ end in $8, 4, 2, 6$ and then repeat every $4$. Find the address: $31 = 4 \\times 7 + 3$, so $8^{31}$ matches the $3$rd entry of the cycle, which is $2$. Choosing $6$ grabs the last entry of the cycle without doing the remainder step; $4$ is the $2$nd entry, one short; and $8$ is the $1$st entry.',
    },
    {
      q: 'What is the units digit of $7^{29}$?',
      choices: ['$9$', '$1$', '$7$', '$3$'],
      answer: 2,
      solution:
        'The powers of $7$ end in $7, 9, 3, 1$, repeating every $4$. Since $29 = 4 \\times 7 + 1$, the remainder is $1$, so $7^{29}$ matches the $1$st entry of the cycle: $7$. A remainder of $1$ means you have just started a fresh cycle, not that you move one past the start — moving one past gives $9$. Choosing $1$ takes the last entry of the cycle, and $3$ takes the $3$rd.',
    },
    {
      q: 'What is the units digit of $2^{46}$?',
      choices: ['$6$', '$4$', '$8$', '$2$'],
      answer: 1,
      solution:
        'The powers of $2$ end in $2, 4, 8, 6$, a cycle of length $4$. Divide: $46 = 4 \\times 11 + 2$, so $2^{46}$ matches the $2$nd entry, which is $4$. Choosing $6$ takes the last entry of the cycle and skips the remainder; $8$ is the $3$rd entry, one too far; and $2$ is the $1$st entry.',
    },
  ],
  // p9 — find the secret rule of a number machine
  [
    {
      q: 'A number machine follows one secret rule. It turns $1$ into $6$, turns $4$ into $21$, and turns $6$ into $31$. What does it turn $9$ into?',
      choices: ['$45$', '$46$', '$14$', '$54$'],
      answer: 1,
      solution:
        'Hunt for a rule and test it on every clue. "Multiply by $5$, then add $1$" works all three times: $5 \\times 1 + 1 = 6$, $5 \\times 4 + 1 = 21$, $5 \\times 6 + 1 = 31$. ✓ So $9$ becomes $5 \\times 9 + 1 = 46$. Choosing $45$ multiplies by $5$ but forgets the $+1$. The rule "add $5$" fits the first clue but turns $4$ into $9$, not $21$, and it gives $14$; "multiply by $6$" also fits only the first clue and gives $54$. One clue is never enough.',
    },
    {
      q: 'A number machine follows one secret rule. It turns $2$ into $5$, turns $4$ into $9$, and turns $8$ into $17$. What does it turn $12$ into?',
      choices: ['$24$', '$26$', '$25$', '$15$'],
      answer: 2,
      solution:
        'Test rules against every clue. "Double, then add $1$" fits all three: $2 \\times 2 + 1 = 5$, $2 \\times 4 + 1 = 9$, $2 \\times 8 + 1 = 17$. ✓ So $12$ becomes $2 \\times 12 + 1 = 25$. Choosing $24$ doubles but drops the $+1$; $26$ adds the $1$ first and then doubles, $2 \\times (12 + 1)$, which is the right steps in the wrong order; and $15$ uses "add $3$", a rule that fits the first clue only — it would turn $4$ into $7$, not $9$.',
    },
    {
      q: 'A number machine follows one secret rule. It turns $2$ into $7$, turns $5$ into $19$, and turns $8$ into $31$. What does it turn $10$ into?',
      choices: ['$40$', '$41$', '$15$', '$39$'],
      answer: 3,
      solution:
        'The rule "multiply by $4$, then subtract $1$" reproduces every clue: $4 \\times 2 - 1 = 7$, $4 \\times 5 - 1 = 19$, $4 \\times 8 - 1 = 31$. ✓ So $10$ becomes $4 \\times 10 - 1 = 39$. Choosing $40$ multiplies by $4$ and forgets the $-1$; $41$ adds $1$ where the rule subtracts it; and $15$ uses "add $5$", which fits the first clue but turns $5$ into $10$ instead of $19$.',
    },
  ],
  // p10 — combining two units-digit cycles
  [
    {
      q: 'What is the units digit of $2^{50} + 3^{50}$?',
      choices: ['$7$', '$3$', '$5$', '$6$'],
      answer: 1,
      solution:
        'Handle each power with its own cycle. Powers of $2$ end in $2, 4, 8, 6$, and $50 = 4 \\times 12 + 2$, so $2^{50}$ ends in $4$. Powers of $3$ end in $3, 9, 7, 1$, and the same remainder $2$ makes $3^{50}$ end in $9$. The sum ends the way $4 + 9 = 13$ ends: in $3$. Taking the last entry of each cycle gives $6 + 1 = 7$; taking the first entry of each gives $2 + 3 = 5$; and multiplying the two units digits instead of adding them gives $4 \\times 9 = 36$, ending in $6$.',
    },
    {
      q: 'What is the units digit of $7^{35} + 8^{35}$?',
      choices: ['$5$', '$7$', '$3$', '$6$'],
      answer: 0,
      solution:
        'Work one power at a time. Since $35 = 4 \\times 8 + 3$, the remainder is $3$ for both. Powers of $7$ cycle $7, 9, 3, 1$, so $7^{35}$ ends in $3$; powers of $8$ cycle $8, 4, 2, 6$, so $8^{35}$ ends in $2$. The sum ends in $3 + 2 = 5$. Grabbing the last entry of each cycle gives $1 + 6 = 7$; slipping one place short in each cycle gives $9 + 4 = 13$, ending in $3$; and multiplying instead of adding gives $3 \\times 2 = 6$.',
    },
    {
      q: 'What is the units digit of $3^{51} \\times 4^{51}$?',
      choices: ['$6$', '$4$', '$1$', '$8$'],
      answer: 3,
      solution:
        'Find each units digit, then multiply. Powers of $3$ cycle $3, 9, 7, 1$, and $51 = 4 \\times 12 + 3$, so $3^{51}$ ends in $7$. Powers of $4$ cycle $4, 6$, and $51$ is odd, so $4^{51}$ ends in $4$. The product ends the way $7 \\times 4 = 28$ ends: in $8$. (Check another way: $3^{51} \\times 4^{51} = 12^{51}$, and the powers of $12$ end like the powers of $2$ — cycle $2, 4, 8, 6$ with remainder $3$ — giving $8$ again. ✓) Taking the last entry of each cycle gives $1 \\times 6 = 6$; slipping one place in each gives $9 \\times 6 = 54$, ending in $4$; and adding instead of multiplying gives $7 + 4 = 11$, ending in $1$.',
    },
  ],
]

const s152 = [
  // p1 — two independent choices multiply
  [
    {
      q: 'A juice bar offers $4$ juices and $3$ cup sizes. How many different one-juice, one-size orders are possible?',
      choices: ['$7$', '$9$', '$12$', '$24$'],
      answer: 2,
      solution:
        'List by juice. Each of the $4$ juices can be ordered in $3$ sizes, so the list has $4$ groups of $3$: $4 \\times 3 = 12$ orders. Adding $4 + 3 = 7$ is the classic trap — choices multiply, they do not add. Choosing $9$ pairs the sizes with themselves ($3 \\times 3$) and forgets the juices. Choosing $24$ counts every order twice, as if "mango then large" and "large then mango" were two different orders.',
    },
    {
      q: 'A pizza shop has $5$ crusts and $2$ sauces. How many different crust-and-sauce pizzas are possible?',
      choices: ['$10$', '$7$', '$20$', '$25$'],
      answer: 0,
      solution:
        'Organize the list by crust: each of the $5$ crusts goes with $2$ sauces, giving $5$ pairs of pizzas, so $5 \\times 2 = 10$ in all. Adding $5 + 2 = 7$ counts the ingredients, not the pizzas. Choosing $20$ counts each pizza twice by treating crust-then-sauce and sauce-then-crust as different. Choosing $25$ multiplies the crusts by themselves.',
    },
    {
      q: 'A tea shop pairs each of its $6$ teas with every cup size on the menu, giving $18$ different orders in all. How many cup sizes are on the menu?',
      choices: ['$12$', '$24$', '$108$', '$3$'],
      answer: 3,
      solution:
        'The orders came from multiplying, so undo it with division: $18 \\div 6 = 3$ cup sizes. Check by listing: $6$ teas in $3$ sizes is $6 \\times 3 = 18$ orders. ✓ Choosing $12$ subtracts ($18 - 6$) where a division belongs; $24$ adds; and $108$ multiplies $18 \\times 6$, which would be the answer if there were $18$ sizes.',
    },
  ],
  // p2 — two-digit numbers built from equal digits
  [
    {
      q: 'How many two-digit numbers have two equal digits that are both even, like $44$?',
      choices: ['$4$', '$5$', '$9$', '$10$'],
      answer: 0,
      solution:
        'The even digits are $0, 2, 4, 6, 8$, so list one number for each: $00$ is not a two-digit number, and the rest give $22, 44, 66, 88$. That is $4$ numbers. Choosing $5$ counts $00$, which has no tens digit at all. Choosing $9$ counts every two-digit number with equal digits, $11$ through $99$, including the odd ones. Choosing $10$ counts all nine of those plus $00$.',
    },
    {
      q: 'How many two-digit numbers have two equal digits that are both multiples of $3$, like $66$?',
      choices: ['$4$', '$9$', '$12$', '$3$'],
      answer: 3,
      solution:
        'The digits that are multiples of $3$ are $0, 3, 6, 9$. A two-digit number cannot start with $0$, so the list is $33, 66, 99$ — that is $3$ numbers. Choosing $4$ counts $00$ as well. Choosing $12$ drops the word "equal" and counts every two-digit number whose digits are both multiples of $3$ (three choices for the tens digit times four for the units). Choosing $9$ counts every equal-digit two-digit number.',
    },
    {
      q: 'Ana writes down every two-digit number whose two digits are equal, in order, starting $11, 22, 33, \\ldots$. What is the $7$th number she writes?',
      choices: ['$66$', '$77$', '$88$', '$70$'],
      answer: 1,
      solution:
        'Write the list out and count along it: $11$ (1st), $22$ (2nd), $33$ (3rd), $44$ (4th), $55$ (5th), $66$ (6th), $77$ (7th). The answer is $77$. Choosing $66$ counts $11$ as the $0$th number; choosing $88$ counts an imaginary $00$ at the front of the list; and $70$ comes from computing $7 \\times 10$ instead of reading the list.',
    },
  ],
  // p3 — ways to make an amount from two coins
  [
    {
      q: 'How many ways can you make $15$ cents using only nickels and pennies?',
      choices: ['$3$', '$5$', '$4$', '$2$'],
      answer: 2,
      solution:
        'Organize by the number of nickels, biggest first: $3$ nickels and $0$ pennies; $2$ nickels and $5$ pennies; $1$ nickel and $10$ pennies; $0$ nickels and $15$ pennies. The list is complete, so there are $4$ ways. Choosing $3$ forgets the all-pennies case. Choosing $5$ goes one step too far and counts $4$ nickels, which is $20$ cents. Choosing $2$ counts only the ways that use at least one of each coin.',
    },
    {
      q: 'How many ways can you make $20$ cents using only nickels and pennies?',
      choices: ['$5$', '$4$', '$6$', '$3$'],
      answer: 0,
      solution:
        'List by the number of nickels: $4, 3, 2, 1, 0$ nickels, with pennies filling the rest ($0, 5, 10, 15, 20$ pennies). Every case works, so there are $5$ ways. Choosing $4$ forgets the all-pennies case at the end of the list. Choosing $6$ counts a $5$-nickel case, but that is $25$ cents — one step past the edge. Choosing $3$ keeps only the ways that use both coins.',
    },
    {
      q: 'How many ways can you make $23$ cents using only dimes and pennies?',
      choices: ['$4$', '$2$', '$1$', '$3$'],
      answer: 3,
      solution:
        'Organize by dimes: $2$ dimes and $3$ pennies; $1$ dime and $13$ pennies; $0$ dimes and $23$ pennies. That is $3$ ways. Choosing $4$ counts a $3$-dime case, but $30$ cents is already more than $23$. Choosing $2$ forgets the all-pennies case. Choosing $1$ stops after the way that uses the most dimes, forgetting that fewer dimes also work.',
    },
  ],
  // p4 — counting a run of numbers without an off-by-one
  [
    {
      q: 'How many two-digit numbers have a tens digit of $4$?',
      choices: ['$9$', '$11$', '$10$', '$8$'],
      answer: 2,
      solution:
        'List them: $40, 41, 42, 43, 44, 45, 46, 47, 48, 49$. The units digit runs from $0$ to $9$, and counting from $0$ to $9$ inclusive gives $9 - 0 + 1 = 10$ numbers. Choosing $9$ computes $49 - 40$ and forgets the $+1$ (the same slip drops $40$ from the list). Choosing $11$ counts $50$ as well. Choosing $8$ drops both ends of the list.',
    },
    {
      q: 'How many two-digit numbers are there altogether?',
      choices: ['$90$', '$89$', '$91$', '$99$'],
      answer: 0,
      solution:
        'The two-digit numbers run from $10$ to $99$. Counting a run of whole numbers inclusively gives $99 - 10 + 1 = 90$ numbers. A quick check: there are nine choices for the tens digit ($1$ through $9$) and ten for the units digit, and $9 \\times 10 = 90$. ✓ Choosing $89$ computes $99 - 10$ and forgets the $+1$. Choosing $91$ counts $100$ as well. Choosing $99$ counts every number from $1$ to $99$, including the one-digit ones.',
    },
    {
      q: 'Yusuf lists every two-digit number whose units digit is $4$ or $9$. How many numbers are on his list?',
      choices: ['$20$', '$18$', '$9$', '$10$'],
      answer: 1,
      solution:
        'Split into two cases. Units digit $4$: $14, 24, 34, 44, 54, 64, 74, 84, 94$ — the tens digit runs $1$ to $9$, so $9$ numbers. Units digit $9$: $19, 29, \\ldots, 99$ — another $9$. Total $9 + 9 = 18$. Choosing $20$ counts $04$ and $09$, which are not two-digit numbers. Choosing $9$ does only one of the two cases. Choosing $10$ does one case and counts its leading-zero number too.',
    },
  ],
  // p5 — ways to make an amount, with a case that is easy to drop
  [
    {
      q: 'How many ways can you make $45$ cents using only dimes and nickels?',
      choices: ['$5$', '$4$', '$6$', '$9$'],
      answer: 0,
      solution:
        'Organize by dimes, biggest coin first: $4$ dimes and $1$ nickel; $3$ dimes and $3$ nickels; $2$ dimes and $5$ nickels; $1$ dime and $7$ nickels; $0$ dimes and $9$ nickels. That is $5$ ways. Choosing $4$ forgets the all-nickels case. Choosing $6$ counts a $5$-dime case, but $50$ cents overshoots $45$. Choosing $9$ reports the number of nickels in the last way instead of the number of ways.',
    },
    {
      q: 'How many ways can you make $60$ cents using only dimes and nickels?',
      choices: ['$6$', '$7$', '$8$', '$12$'],
      answer: 1,
      solution:
        'List by dimes: $6$ dimes; $5$ dimes and $2$ nickels; $4$ and $4$; $3$ and $6$; $2$ and $8$; $1$ and $10$; $0$ dimes and $12$ nickels. Counting the dime totals $6, 5, 4, 3, 2, 1, 0$ inclusively gives $6 - 0 + 1 = 7$ ways. Choosing $6$ forgets the all-nickels case at the end. Choosing $8$ counts a $7$-dime case, which is $70$ cents. Choosing $12$ reports the number of nickels in the all-nickel way.',
    },
    {
      q: 'How many ways can you make $55$ cents using only quarters and nickels?',
      choices: ['$2$', '$4$', '$3$', '$11$'],
      answer: 2,
      solution:
        'Organize by quarters: $2$ quarters and $1$ nickel; $1$ quarter and $6$ nickels; $0$ quarters and $11$ nickels. That is $3$ ways. Choosing $2$ forgets the no-quarter case. Choosing $4$ counts a $3$-quarter case, but $75$ cents is more than $55$. Choosing $11$ reports the nickels in the last way instead of the number of ways.',
    },
  ],
  // p6 — two-digit numbers with a given digit sum
  [
    {
      q: 'How many two-digit numbers have digits that add up to $5$?',
      choices: ['$4$', '$5$', '$6$', '$9$'],
      answer: 1,
      solution:
        'List in increasing order so nothing is skipped: $14, 23, 32, 41, 50$. That is $5$ numbers. Check both edges: $05$ is not a two-digit number, while $50$ does count because $5 + 0 = 5$. Choosing $4$ drops $50$, forgetting that a units digit may be $0$. Choosing $6$ counts $05$. Choosing $9$ assumes every tens digit from $1$ to $9$ gives one number, but a tens digit of $6$ or more would need a negative units digit.',
    },
    {
      q: 'How many two-digit numbers have digits that add up to $8$?',
      choices: ['$8$', '$9$', '$7$', '$10$'],
      answer: 0,
      solution:
        'List them in order: $17, 26, 35, 44, 53, 62, 71, 80$. The tens digit runs from $1$ to $8$, so there are $8 - 1 + 1 = 8$ numbers. Choosing $9$ counts $08$, which is not a two-digit number. Choosing $7$ drops $80$, forgetting that $8 + 0 = 8$. Choosing $10$ counts one number for each of the ten digits $0$ through $9$.',
    },
    {
      q: 'How many two-digit numbers have digits that add up to $12$?',
      choices: ['$9$', '$8$', '$6$', '$7$'],
      answer: 3,
      solution:
        'List in order: $39, 48, 57, 66, 75, 84, 93$. That is $7$ numbers. The tens digit cannot be $1$ or $2$, because the units digit would have to be $11$ or $10$, and no digit is that big — so the tens digit runs from $3$ to $9$, giving $9 - 3 + 1 = 7$. Choosing $9$ assumes every tens digit $1$ through $9$ works. Choosing $8$ lets the tens digit be $2$ and pairs it with an impossible units digit of $10$. Choosing $6$ computes $9 - 3$ and forgets the $+1$.',
    },
  ],
  // p7 — pairs of different numbers with a given sum
  [
    {
      q: 'How many ways can you choose two different numbers from $1, 2, 3, 4, 5, 6, 7$ so that they add up to $8$?',
      choices: ['$4$', '$3$', '$6$', '$2$'],
      answer: 1,
      solution:
        'List each pair with the smaller number first, which kills duplicates automatically: $1 + 7$, $2 + 6$, $3 + 5$. Then comes $4 + 4$, which uses the same number twice, so the list stops there: $3$ ways. Choosing $4$ counts $4 + 4$. Choosing $6$ lists both orders of each pair, doubling the true count. Choosing $2$ stops one pair short and misses $3 + 5$.',
    },
    {
      q: 'How many ways can you choose two different numbers from $1$ through $9$ so that they add up to $10$?',
      choices: ['$4$', '$5$', '$8$', '$3$'],
      answer: 0,
      solution:
        'Write each pair smaller number first: $1 + 9$, $2 + 8$, $3 + 7$, $4 + 6$. The next one would be $5 + 5$, which repeats a number, so the list is complete with $4$ ways. Choosing $5$ counts $5 + 5$. Choosing $8$ counts both orders of each pair. Choosing $3$ misses the end pair $1 + 9$.',
    },
    {
      q: 'How many ways can you choose two different numbers from $1$ through $10$ so that they add up to $11$?',
      choices: ['$4$', '$10$', '$5$', '$6$'],
      answer: 2,
      solution:
        'List with the smaller number first: $1 + 10$, $2 + 9$, $3 + 8$, $4 + 7$, $5 + 6$. The next pair would start with $6$, but $6 + 5$ is the pair we already have written the other way round, so the list stops: $5$ ways. Choosing $10$ writes both orders of every pair. Choosing $6$ keeps going one step past the middle and counts $6 + 5$ as new. Choosing $4$ misses the end pair $1 + 10$.',
    },
  ],
  // p8 — a three-coin count that needs organized cases
  [
    {
      q: 'How many ways can you make $40$ cents using quarters, dimes, and nickels?',
      choices: ['$7$', '$5$', '$6$', '$8$'],
      answer: 0,
      solution:
        'Organize by quarters. One quarter leaves $15$ cents: $1$ dime and $1$ nickel, or $0$ dimes and $3$ nickels — $2$ ways. Zero quarters leaves $40$ cents, and the dimes can be $4, 3, 2, 1, 0$ with nickels filling the rest — $5$ ways. Two quarters is already $50$ cents, too much. Total: $2 + 5 = 7$. Choosing $5$ does only the no-quarter case. Choosing $6$ forgets the $4$-dimes-and-no-nickels way. Choosing $8$ allows a quarter with $2$ dimes, which is $45$ cents.',
    },
    {
      q: 'How many ways can you make $55$ cents using quarters, dimes, and nickels?',
      choices: ['$10$', '$11$', '$6$', '$12$'],
      answer: 1,
      solution:
        'Split by quarters and finish each case before moving on. Two quarters leaves $5$ cents: $1$ nickel — $1$ way. One quarter leaves $30$ cents: dimes can be $3, 2, 1, 0$ — $4$ ways. Zero quarters leaves $55$ cents: dimes can be $5, 4, 3, 2, 1, 0$ — $6$ ways. Total: $1 + 4 + 6 = 11$. Choosing $10$ forgets that two quarters fit inside $55$ cents. Choosing $6$ does only the no-quarter case. Choosing $12$ allows a quarter with $4$ dimes, which is $65$ cents.',
    },
    {
      q: 'How many ways can you make $45$ cents using quarters, dimes, and nickels?',
      choices: ['$5$', '$9$', '$8$', '$7$'],
      answer: 2,
      solution:
        'Take the quarters case by case. One quarter leaves $20$ cents: $2$ dimes, or $1$ dime and $2$ nickels, or $4$ nickels — $3$ ways. Zero quarters leaves $45$ cents: dimes can be $4, 3, 2, 1, 0$ with nickels filling in — $5$ ways. Two quarters is $50$ cents, too much. Total: $3 + 5 = 8$. Choosing $5$ does only the no-quarter case. Choosing $7$ forgets the all-nickels way. Choosing $9$ allows a quarter with $3$ dimes, which is $55$ cents.',
    },
  ],
  // p9 — numbers built from a small set of digits
  [
    {
      q: 'How many three-digit numbers use only the digits $5$, $6$, and $7$? (Repeats are allowed, like $565$.)',
      choices: ['$9$', '$27$', '$81$', '$6$'],
      answer: 1,
      solution:
        'Organize the list by the hundreds digit. With a $5$ in front there are $555, 556, 557, 565, 566, 567, 575, 576, 577$ — nine numbers — and the same nine shapes appear behind a $6$ and behind a $7$. Each of the $3$ places has $3$ choices, so the count is $3 \\times 3 \\times 3 = 27$. Choosing $9$ fills only two places. Choosing $81$ fills four. Choosing $6$ counts only the numbers whose three digits are all different ($3 \\times 2 \\times 1$).',
    },
    {
      q: 'How many three-digit numbers use only the digits $0$ and $8$? (Repeats are allowed, like $808$.)',
      choices: ['$8$', '$6$', '$4$', '$3$'],
      answer: 2,
      solution:
        'A three-digit number cannot start with $0$, so the hundreds digit must be $8$; the other two places are free. List them: $800, 808, 880, 888$. That is $4$ numbers, and it matches $1 \\times 2 \\times 2 = 4$. Choosing $8$ uses $2 \\times 2 \\times 2$ and counts strings like $088$ and $008$, which are not three-digit numbers. Choosing $6$ throws out only $000$ and $008$, forgetting that $080$ and $088$ fail too. Choosing $3$ misses $800$, forgetting that a three-digit number may end in $0$.',
    },
    {
      q: 'How many four-digit numbers use only the digits $1$ and $6$? (Repeats are allowed, like $1616$.)',
      choices: ['$16$', '$8$', '$4$', '$32$'],
      answer: 0,
      solution:
        'Each of the $4$ places can be filled in $2$ ways, so the count is $2 \\times 2 \\times 2 \\times 2 = 16$. An organized list confirms it: the eight numbers starting with $1$ ($1111, 1116, 1161, 1166, 1611, 1616, 1661, 1666$) and the eight matching ones starting with $6$. Choosing $8$ fills only three places. Choosing $32$ fills five. Choosing $4$ counts only the numbers with exactly one $6$ ($6111, 1611, 1161, 1116$).',
    },
  ],
  // p10 — two-digit numbers whose digits differ by a fixed amount
  [
    {
      q: 'How many two-digit numbers have digits that differ by exactly $4$?',
      choices: ['$6$', '$11$', '$12$', '$10$'],
      answer: 1,
      solution:
        'Split into two cases. Tens digit bigger: $40, 51, 62, 73, 84, 95$ — that is $6$. Units digit bigger: $15, 26, 37, 48, 59$ — that is $5$, and the list stops there because a tens digit of $6$ would need a units digit of $10$. Total: $6 + 5 = 11$. Choosing $6$ does only the first case. Choosing $12$ counts $04$, which is not a two-digit number. Choosing $10$ drops $40$, forgetting that a units digit of $0$ is allowed.',
    },
    {
      q: 'How many two-digit numbers have digits that differ by exactly $2$?',
      choices: ['$8$', '$16$', '$15$', '$14$'],
      answer: 2,
      solution:
        'Handle the two cases separately. Tens digit bigger: $20, 31, 42, 53, 64, 75, 86, 97$ — that is $8$. Units digit bigger: $13, 24, 35, 46, 57, 68, 79$ — that is $7$, stopping because a tens digit of $8$ would need a units digit of $10$. Total: $8 + 7 = 15$. Choosing $8$ does only the first case. Choosing $16$ counts $02$. Choosing $14$ drops $20$, forgetting that a units digit of $0$ counts.',
    },
    {
      q: 'How many two-digit numbers have digits that differ by exactly $5$?',
      choices: ['$5$', '$10$', '$8$', '$9$'],
      answer: 3,
      solution:
        'Two cases again. Tens digit bigger: $50, 61, 72, 83, 94$ — that is $5$. Units digit bigger: $16, 27, 38, 49$ — that is $4$, and it stops because a tens digit of $5$ would need a units digit of $10$. Total: $5 + 4 = 9$. Choosing $5$ does only the first case. Choosing $10$ counts $05$, which is not a two-digit number. Choosing $8$ drops $50$, forgetting that the units digit may be $0$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 15,
  sections: {
    '15.1': s151,
    '15.2': s152,
  },
}
