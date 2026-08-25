// Introduction to Algebra chapter 5 — variations for sections 5.4 and 5.5.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every word problem was checked against its STORY as well as its algebra:
//    counts of tickets, coins, animals and kilograms are whole and positive,
//    ages are realistic, digits stay in the range 0-9, and every mixture uses a
//    positive amount of BOTH ingredients.
//  - Every solution pair was substituted back into BOTH original equations,
//    and for the disguised systems the check is done in the ORIGINAL fraction
//    form, not in the cleared-up form.
//  - Every distractor is the output of a named mistake — the other unknown,
//    the total instead of a part, a value read at the wrong stage of the work,
//    a swapped ratio or swapped digits, or dividing by the wrong number. No two
//    choices in an item share a VALUE, and no factored or scaled equation is
//    ever offered as a distractor of an equation it is equivalent to.
//  - Numbers were chosen so that ignoring the second fact never lands on the
//    key, and so the two unknowns are never equal (which would hide a swap).

const s54 = [
  // p1 — sum of two numbers plus "one is c more than the other"
  [
    {
      q: 'Two numbers add up to $26$, and one of them is $6$ more than the other. What is the larger number?',
      choices: ['$10$', '$16$', '$13$', '$20$'],
      answer: 1,
      solution:
        'Let the smaller number be $x$, so the larger is $x + 6$. Then $x + (x + 6) = 26$, which is $2x + 6 = 26$, so $2x = 20$ and $x = 10$. The LARGER number is $10 + 6 = 16$. Check against the story: $16 + 10 = 26$ ✓ and $16 - 10 = 6$ ✓. The choice $10$ is the smaller number. The choice $13$ splits $26$ evenly, which would only be right if the two numbers were equal. The choice $20$ stops at $2x = 20$ and forgets the final halving.',
    },
    {
      q: 'Two numbers add up to $34$, and one of them is $8$ more than the other. What is the smaller number?',
      choices: ['$21$', '$26$', '$13$', '$17$'],
      answer: 2,
      solution:
        'Let the smaller number be $x$; the larger is $x + 8$. Then $2x + 8 = 34$, so $2x = 26$ and $x = 13$. This time the question wants the SMALLER number, so $13$ is the answer. Check: $13 + 21 = 34$ ✓ and $21 - 13 = 8$ ✓. The choice $21$ is the larger number. The choice $26$ stops at $2x = 26$. The choice $17$ halves $34$ and ignores the $8$ entirely.',
    },
    {
      q: 'Two numbers add up to $32$, and one of them is $12$ more than the other. What is the larger number?',
      choices: ['$10$', '$16$', '$20$', '$22$'],
      answer: 3,
      solution:
        'Let the smaller be $x$; the larger is $x + 12$. Then $2x + 12 = 32$, so $2x = 20$ and $x = 10$. The larger number is $10 + 12 = 22$. Check: $22 + 10 = 32$ ✓ and $22 - 10 = 12$ ✓. The choice $10$ is the smaller number. The choice $20$ stops at $2x = 20$. The choice $16$ halves $32$, which ignores the gap between the numbers.',
    },
  ],
  // p2 — sum and difference given outright
  [
    {
      q: 'Two numbers have a sum of $31$ and a difference of $7$. What is the smaller number?',
      choices: ['$12$', '$19$', '$38$', '$24$'],
      answer: 0,
      solution:
        'Write $x + y = 31$ and $x - y = 7$ with $x$ the larger. Adding the equations cancels $y$: $2x = 38$, so $x = 19$ and then $y = 31 - 19 = 12$. The smaller number is $12$. Check: $19 + 12 = 31$ ✓ and $19 - 12 = 7$ ✓. The choice $19$ is the larger number. The choice $38$ stops at $2x = 38$. The choice $24$ comes from SUBTRACTING the equations, which gives $2y = 24$ — one halving short.',
    },
    {
      q: 'Two numbers have a sum of $40$ and a difference of $14$. What is the larger number?',
      choices: ['$13$', '$54$', '$27$', '$20$'],
      answer: 2,
      solution:
        'From $x + y = 40$ and $x - y = 14$, adding gives $2x = 54$, so $x = 27$ and $y = 40 - 27 = 13$. The larger number is $27$. Check: $27 + 13 = 40$ ✓ and $27 - 13 = 14$ ✓. The choice $13$ is the smaller number. The choice $54$ stops at $2x = 54$. The choice $20$ halves $40$, as though the difference were $0$.',
    },
    {
      q: 'Two numbers have a sum of $23$ and a difference of $9$. What is the smaller number?',
      choices: ['$16$', '$32$', '$14$', '$7$'],
      answer: 3,
      solution:
        'From $x + y = 23$ and $x - y = 9$, adding gives $2x = 32$, so $x = 16$ and $y = 23 - 16 = 7$. Check: $16 + 7 = 23$ ✓ and $16 - 7 = 9$ ✓. The choice $16$ is the larger number. The choice $32$ stops at $2x = 32$. The choice $14$ is $2y$, what subtracting the equations gives before the last halving.',
    },
  ],
  // p3 — two prices, a count equation and a value equation
  [
    {
      q: 'Erasers cost $\\$3$ and notebooks cost $\\$5$. Maya buys $7$ items for $\\$27$. How many notebooks did she buy?',
      choices: ['$3$', '$4$', '$7$', '$6$'],
      answer: 0,
      solution:
        'Let $e$ be erasers and $n$ be notebooks. Count: $e + n = 7$. Value: $3e + 5n = 27$. Multiply the count equation by $3$: $3e + 3n = 21$. Subtract it from the value equation: $2n = 6$, so $n = 3$ and $e = 4$. Check against the story: $3(4) + 5(3) = 12 + 15 = 27$ ✓ and $4 + 3 = 7$ items ✓. The choice $4$ is the number of erasers. The choice $7$ is the total number of items. The choice $6$ stops at $2n = 6$.',
    },
    {
      q: 'Stickers cost $\\$2$ and badges cost $\\$5$. Omar buys $9$ of them for $\\$30$. How many stickers did he buy?',
      choices: ['$4$', '$9$', '$5$', '$12$'],
      answer: 2,
      solution:
        'Let $s$ be stickers and $b$ be badges. Count: $s + b = 9$. Value: $2s + 5b = 30$. Double the count equation: $2s + 2b = 18$. Subtract: $3b = 12$, so $b = 4$ and $s = 9 - 4 = 5$. The question asks for STICKERS, so the answer is $5$. Check: $2(5) + 5(4) = 10 + 20 = 30$ ✓ and $5 + 4 = 9$ ✓. The choice $4$ is the number of badges. The choice $9$ is the total. The choice $12$ stops at $3b = 12$.',
    },
    {
      q: 'A bakery sells muffins for $\\$4$ and scones for $\\$6$. A tray of $8$ baked items costs $\\$38$. How many scones are on the tray?',
      choices: ['$5$', '$8$', '$6$', '$3$'],
      answer: 3,
      solution:
        'Let $m$ be muffins and $s$ be scones. Count: $m + s = 8$. Value: $4m + 6s = 38$. Multiply the count equation by $4$: $4m + 4s = 32$. Subtract: $2s = 6$, so $s = 3$ and $m = 5$. Check: $4(5) + 6(3) = 20 + 18 = 38$ ✓ and $5 + 3 = 8$ items ✓. The choice $5$ is the number of muffins. The choice $8$ is the total. The choice $6$ stops at $2s = 6$ — and it is also the price of a scone, which is not what was asked.',
    },
  ],
  // p4 — ages, one person older than the other
  [
    {
      q: 'Nadia is $5$ years older than her brother Theo, and their ages add up to $27$. How old is Nadia?',
      choices: ['$11$', '$16$', '$22$', '$32$'],
      answer: 1,
      solution:
        'Let Theo be $t$ years old; Nadia is $t + 5$. Then $t + (t + 5) = 27$, so $2t = 22$ and $t = 11$. Nadia is $11 + 5 = 16$. Check the story: $16 + 11 = 27$ ✓ and Nadia is $5$ years older ✓. The choice $11$ is Theo’s age — solve for the person the question names. The choice $22$ stops at $2t = 22$. The choice $32$ adds $27 + 5$ instead of subtracting the $5$ first.',
    },
    {
      q: 'Priya is $7$ years younger than her cousin Devi, and their ages add up to $35$. How old is Priya?',
      choices: ['$14$', '$21$', '$28$', '$42$'],
      answer: 0,
      solution:
        'Let Priya be $p$; Devi is $p + 7$. Then $p + (p + 7) = 35$, so $2p = 28$ and $p = 14$. Priya is $14$ and Devi is $21$. Check: $14 + 21 = 35$ ✓ and $21 - 14 = 7$ ✓. The choice $21$ is Devi’s age. The choice $28$ stops at $2p = 28$. The choice $42$ adds $35 + 7$ rather than subtracting.',
    },
    {
      q: 'Mr. Ruiz is $4$ years older than Mrs. Ruiz, and their ages add up to $86$. How old is Mrs. Ruiz?',
      choices: ['$45$', '$82$', '$43$', '$41$'],
      answer: 3,
      solution:
        'Let Mrs. Ruiz be $x$; Mr. Ruiz is $x + 4$. Then $2x + 4 = 86$, so $2x = 82$ and $x = 41$. Mrs. Ruiz is $41$ and Mr. Ruiz is $45$. Check: $41 + 45 = 86$ ✓ and $45 - 41 = 4$ ✓. The choice $45$ is Mr. Ruiz’s age. The choice $82$ stops at $2x = 82$. The choice $43$ halves $86$, which would be right only if they were the same age.',
    },
  ],
  // p5 — two ticket prices, count and total takings
  [
    {
      q: 'An aquarium charges $\\$12$ for an adult ticket and $\\$7$ for a child ticket. It sold $9$ tickets for $\\$88$. How many adult tickets were sold?',
      choices: ['$5$', '$4$', '$9$', '$25$'],
      answer: 0,
      solution:
        'Let $a$ be adult tickets and $c$ be child tickets. Count: $a + c = 9$. Value: $12a + 7c = 88$. Multiply the count equation by $7$: $7a + 7c = 63$. Subtract: $5a = 25$, so $a = 5$ and $c = 4$. Check: $12(5) + 7(4) = 60 + 28 = 88$ ✓ and $5 + 4 = 9$ tickets ✓. The choice $4$ is the number of child tickets. The choice $9$ is the total sold. The choice $25$ stops at $5a = 25$.',
    },
    {
      q: 'A concert charges $\\$15$ for an adult ticket and $\\$8$ for a student ticket. It sold $12$ tickets for $\\$145$. How many STUDENT tickets were sold?',
      choices: ['$7$', '$5$', '$12$', '$49$'],
      answer: 1,
      solution:
        'Let $a$ be adult tickets and $s$ be student tickets. Count: $a + s = 12$. Value: $15a + 8s = 145$. Multiply the count equation by $8$: $8a + 8s = 96$. Subtract: $7a = 49$, so $a = 7$ and $s = 12 - 7 = 5$. The question asks for STUDENT tickets: $5$. Check: $15(7) + 8(5) = 105 + 40 = 145$ ✓ and $7 + 5 = 12$ ✓. The choice $7$ is the adult count, the number you reach first. The choice $12$ is the total. The choice $49$ stops at $7a = 49$.',
    },
    {
      q: 'A zoo charges $\\$11$ for an adult ticket and $\\$6$ for a child ticket. It sold $14$ tickets for $\\$124$. How many child tickets were sold?',
      choices: ['$8$', '$14$', '$6$', '$40$'],
      answer: 2,
      solution:
        'Let $a$ be adult tickets and $c$ be child tickets. Count: $a + c = 14$. Value: $11a + 6c = 124$. Multiply the count equation by $6$: $6a + 6c = 84$. Subtract: $5a = 40$, so $a = 8$ and $c = 14 - 8 = 6$. Check: $11(8) + 6(6) = 88 + 36 = 124$ ✓ and $8 + 6 = 14$ ✓. The choice $8$ is the adult count. The choice $14$ is the total. The choice $40$ stops at $5a = 40$.',
    },
  ],
  // p6 — coins: a count equation and a value equation in cents
  [
    {
      q: 'A jar holds $18$ coins, all nickels and dimes, worth $\\$1.45$ in total. How many nickels are in the jar?',
      choices: ['$11$', '$7$', '$18$', '$9$'],
      answer: 1,
      solution:
        'Work in cents so there are no decimals. Count: $n + d = 18$. Value: $5n + 10d = 145$. Multiply the count equation by $5$: $5n + 5d = 90$. Subtract: $5d = 55$, so $d = 11$ dimes and $n = 18 - 11 = 7$ nickels. Check the story: $7$ nickels and $11$ dimes are $35 + 110 = 145$ cents ✓ and $7 + 11 = 18$ coins ✓. The choice $11$ is the number of dimes. The choice $18$ is the total number of coins. The choice $9$ splits the coins evenly, which the value does not allow.',
    },
    {
      q: 'A coin purse holds $11$ coins, all dimes and quarters, worth $\\$1.85$ in total. How many quarters are in the purse?',
      choices: ['$6$', '$11$', '$5$', '$3$'],
      answer: 2,
      solution:
        'In cents: $d + q = 11$ and $10d + 25q = 185$. Multiply the count equation by $10$: $10d + 10q = 110$. Subtract: $15q = 75$, so $q = 5$ quarters and $d = 6$ dimes. Check: $6(10) + 5(25) = 60 + 125 = 185$ cents ✓ and $6 + 5 = 11$ coins ✓. The choice $6$ is the number of dimes — it is also what you get if you swap the two coin values by mistake. The choice $11$ is the total number of coins. The choice $3$ divides the leftover $75$ cents by $25$ instead of by the $15$-cent gap between a quarter and a dime.',
    },
    {
      q: 'A coin box holds $20$ coins, all nickels and quarters, worth $\\$3.20$ in total. How many nickels are in the box?',
      choices: ['$11$', '$20$', '$10$', '$9$'],
      answer: 3,
      solution:
        'In cents: $n + q = 20$ and $5n + 25q = 320$. Multiply the count equation by $5$: $5n + 5q = 100$. Subtract: $20q = 220$, so $q = 11$ quarters and $n = 20 - 11 = 9$ nickels. Check: $9(5) + 11(25) = 45 + 275 = 320$ cents ✓ and $9 + 11 = 20$ coins ✓. The choice $11$ is the number of quarters. The choice $20$ is the total number of coins. The choice $10$ splits the coins evenly and ignores the value equation.',
    },
  ],
  // p7 — heads and legs
  [
    {
      q: 'A pen holds rabbits and ducks — $20$ heads and $56$ legs in all. How many rabbits are there?',
      choices: ['$8$', '$12$', '$16$', '$20$'],
      answer: 0,
      solution:
        'Let $r$ be rabbits (four legs each) and $d$ be ducks (two legs each). Heads: $r + d = 20$. Legs: $4r + 2d = 56$. Double the head equation: $2r + 2d = 40$. Subtract: $2r = 16$, so $r = 8$ rabbits and $d = 12$ ducks. Check: $4(8) + 2(12) = 32 + 24 = 56$ legs ✓ and $8 + 12 = 20$ heads ✓. The choice $12$ is the number of ducks. The choice $16$ stops at $2r = 16$. The choice $20$ is the head count.',
    },
    {
      q: 'A field holds sheep and geese — $18$ heads and $52$ legs in all. How many geese are there?',
      choices: ['$8$', '$18$', '$10$', '$9$'],
      answer: 2,
      solution:
        'Let $s$ be sheep (four legs) and $g$ be geese (two legs). Heads: $s + g = 18$. Legs: $4s + 2g = 52$. Double the head equation: $2s + 2g = 36$. Subtract: $2s = 16$, so $s = 8$ sheep and $g = 18 - 8 = 10$ geese. Check: $4(8) + 2(10) = 32 + 20 = 52$ legs ✓ and $8 + 10 = 18$ heads ✓. The choice $8$ is the number of sheep. The choice $18$ is the head count. The choice $9$ splits the heads evenly, which the leg count rules out.',
    },
    {
      q: 'A barn holds horses and hens — $14$ heads and $40$ legs in all. How many horses are there?',
      choices: ['$8$', '$14$', '$12$', '$6$'],
      answer: 3,
      solution:
        'Let $h$ be horses (four legs) and $n$ be hens (two legs). Heads: $h + n = 14$. Legs: $4h + 2n = 40$. Double the head equation: $2h + 2n = 28$. Subtract: $2h = 12$, so $h = 6$ horses and $n = 8$ hens. Check: $4(6) + 2(8) = 24 + 16 = 40$ legs ✓ and $6 + 8 = 14$ heads ✓. The choice $8$ is the number of hens. The choice $14$ is the head count. The choice $12$ stops at $2h = 12$.',
    },
  ],
  // p8 — sum given, larger is a multiple of the smaller
  [
    {
      q: 'The sum of two numbers is $45$, and the larger is four times the smaller. What is the larger number?',
      choices: ['$9$', '$36$', '$15$', '$41$'],
      answer: 1,
      solution:
        'Let the smaller be $s$; the larger is $4s$. Then $s + 4s = 45$, so $5s = 45$ and $s = 9$. The larger number is $4(9) = 36$. Check: $36 + 9 = 45$ ✓ and $36$ is four times $9$ ✓. The choice $9$ is the smaller number. The choice $15$ solves $3s = 45$, as if the larger were only twice the smaller. The choice $41$ subtracts the $4$ instead of dividing by $5$.',
    },
    {
      q: 'The sum of two numbers is $60$, and the larger is three times the smaller. What is the smaller number?',
      choices: ['$45$', '$20$', '$15$', '$30$'],
      answer: 2,
      solution:
        'Let the smaller be $s$; the larger is $3s$. Then $s + 3s = 4s = 60$, so $s = 15$ and the larger is $45$. The question asks for the SMALLER number: $15$. Check: $45 + 15 = 60$ ✓ and $45$ is three times $15$ ✓. The choice $45$ is the larger number. The choice $20$ divides by $3$, the multiplier, instead of by $4$, the number of equal parts. The choice $30$ halves $60$.',
    },
    {
      q: 'The sum of two numbers is $48$, and the larger is five times the smaller. What is the DIFFERENCE between the two numbers?',
      choices: ['$32$', '$40$', '$8$', '$48$'],
      answer: 0,
      solution:
        'Let the smaller be $s$; the larger is $5s$. Then $6s = 48$, so $s = 8$ and the larger is $40$. The question asks for the difference: $40 - 8 = 32$. Check: $40 + 8 = 48$ ✓, $40$ is five times $8$ ✓, and $40 - 8 = 32$ ✓. The choices $40$ and $8$ are the two numbers themselves — one more subtraction was needed. The choice $48$ repeats the sum.',
    },
  ],
  // p9 — mixture of two prices per kilogram
  [
    {
      q: 'A shop mixes $\\$5$-per-kg oats with $\\$8$-per-kg oats to make $12$ kg of mix worth $\\$81$. How many kg of the $\\$8$ oats are used?',
      choices: ['$5$', '$7$', '$12$', '$21$'],
      answer: 1,
      solution:
        'Let $x$ be kg of the $\\$5$ oats and $y$ be kg of the $\\$8$ oats. Weight: $x + y = 12$. Value: $5x + 8y = 81$. Multiply the weight equation by $5$: $5x + 5y = 60$. Subtract: $3y = 21$, so $y = 7$ kg and $x = 5$ kg. Check: $5(5) + 8(7) = 25 + 56 = 81$ ✓ and $5 + 7 = 12$ kg ✓. The choice $5$ is the amount of the cheaper oats. The choice $12$ is the total weight. The choice $21$ stops at $3y = 21$.',
    },
    {
      q: 'A café blends $\\$7$-per-kg tea with $\\$12$-per-kg tea to make $15$ kg of blend worth $\\$145$. How many kg of the $\\$7$ tea are used?',
      choices: ['$8$', '$15$', '$40$', '$7$'],
      answer: 3,
      solution:
        'Let $x$ be kg of the $\\$7$ tea and $y$ be kg of the $\\$12$ tea. Weight: $x + y = 15$. Value: $7x + 12y = 145$. Multiply the weight equation by $7$: $7x + 7y = 105$. Subtract: $5y = 40$, so $y = 8$ kg and $x = 15 - 8 = 7$ kg. The question asks for the CHEAPER tea: $7$ kg. Check: $7(7) + 12(8) = 49 + 96 = 145$ ✓ and $7 + 8 = 15$ kg ✓. The choice $8$ is the amount of the dearer tea. The choice $15$ is the total weight, and $40$ stops at $5y = 40$.',
    },
    {
      q: 'A grocer mixes $\\$4$-per-kg rice with $\\$10$-per-kg rice to make $9$ kg worth $\\$60$. How many kg of the $\\$10$ rice are used?',
      choices: ['$5$', '$9$', '$4$', '$24$'],
      answer: 2,
      solution:
        'Let $x$ be kg of the $\\$4$ rice and $y$ be kg of the $\\$10$ rice. Weight: $x + y = 9$. Value: $4x + 10y = 60$. Multiply the weight equation by $4$: $4x + 4y = 36$. Subtract: $6y = 24$, so $y = 4$ kg and $x = 5$ kg. Check: $4(5) + 10(4) = 20 + 40 = 60$ ✓ and $5 + 4 = 9$ kg ✓. The choice $5$ is the amount of the cheaper rice. The choice $9$ is the total weight. The choice $24$ stops at $6y = 24$.',
    },
  ],
  // p10 — two-digit number from facts about its digits
  [
    {
      q: 'A two-digit number has digits that add up to $13$, and its tens digit is $5$ more than its units digit. What is the number?',
      choices: ['$94$', '$49$', '$85$', '$76$'],
      answer: 0,
      solution:
        'Let $t$ be the tens digit and $u$ the units digit: $t + u = 13$ and $t - u = 5$. Adding gives $2t = 18$, so $t = 9$ and $u = 4$ — the number is $94$. Check: $9 + 4 = 13$ ✓ and $9 - 4 = 5$ ✓. Every choice here has digit sum $13$, so the sum alone cannot decide. The choice $49$ has the digits swapped, so its tens digit is $5$ LESS than its units digit. The choice $85$ has digit difference $3$ and $76$ has digit difference $1$.',
    },
    {
      q: 'A two-digit number has digits that add up to $9$, and its units digit is $3$ more than its tens digit. What is the number?',
      choices: ['$63$', '$45$', '$36$', '$27$'],
      answer: 2,
      solution:
        'Careful — this time the UNITS digit is the bigger one: $t + u = 9$ and $u - t = 3$. Adding gives $2u = 12$, so $u = 6$ and $t = 3$, making the number $36$. Check: $3 + 6 = 9$ ✓ and $6 - 3 = 3$ ✓. All four choices have digit sum $9$. The choice $63$ is the digits swapped and has its tens digit $3$ larger instead. The choice $45$ has a digit gap of $1$, and $27$ has a gap of $5$.',
    },
    {
      q: 'A two-digit number has digits that add up to $12$, and its tens digit is twice its units digit. What is the number?',
      choices: ['$48$', '$84$', '$93$', '$66$'],
      answer: 1,
      solution:
        'Let $t$ be the tens digit and $u$ the units digit: $t + u = 12$ and $t = 2u$. Substituting gives $2u + u = 3u = 12$, so $u = 4$ and $t = 8$ — the number is $84$. Check: $8 + 4 = 12$ ✓ and $8$ is twice $4$ ✓. Again every choice has digit sum $12$. The choice $48$ swaps the digits, so there the UNITS digit is twice the tens digit. The choice $93$ has a tens digit three times its units digit, and $66$ has equal digits.',
    },
  ],
]

const s55 = [
  // p1 — clear a single denominator
  [
    {
      q: 'Multiplying both sides of $\\frac{x+y}{3} = 7$ by $3$ gives which equation?',
      choices: ['$x + y = 7$', '$x + y = 21$', '$3x + 3y = 7$', '$x + y = 10$'],
      answer: 1,
      solution:
        'Multiplying by $3$ cancels the denominator on the left and multiplies the right by $3$ as well: $x + y = 21$. Check with a sample pair, $(15, 6)$: the original reads $\\frac{21}{3} = 7$ ✓ and $15 + 6 = 21$ ✓. The choice $x + y = 7$ multiplies only the left side and leaves the right alone. The choice $3x + 3y = 7$ makes the opposite slip, multiplying the numerator without cancelling the denominator and leaving the right side untouched. The choice $x + y = 10$ ADDS $3$ to the right side instead of multiplying.',
    },
    {
      q: 'Multiplying both sides of $\\frac{x-y}{4} = 6$ by $4$ gives which equation?',
      choices: ['$x - y = 6$', '$x - y = 10$', '$x - y = 24$', '$4x - y = 24$'],
      answer: 2,
      solution:
        'Multiplying by $4$ removes the denominator and multiplies the right side: $x - y = 24$. Check with $(30, 6)$: the original reads $\\frac{24}{4} = 6$ ✓. The choice $x - y = 6$ forgets that BOTH sides must be multiplied. The choice $x - y = 10$ adds $4$ to the right side instead of multiplying. The choice $4x - y = 24$ multiplies only the first term of the numerator — the whole numerator was over the $4$, not just the $x$.',
    },
    {
      q: 'What does $\\frac{2x+y}{5} = 4$ become when both sides are multiplied by $5$?',
      choices: ['$2x + y = 4$', '$2x + 5y = 20$', '$2x + y = 9$', '$2x + y = 20$'],
      answer: 3,
      solution:
        'The whole numerator sits over the $5$, so multiplying by $5$ leaves it unchanged and turns the right side into $20$: $2x + y = 20$. Check with $(8, 4)$: the original reads $\\frac{16+4}{5} = \\frac{20}{5} = 4$ ✓. The choice $2x + y = 4$ leaves the right side alone. The choice $2x + 5y = 20$ multiplies one term of the numerator by $5$ while cancelling the denominator for the other. The choice $2x + y = 9$ adds $5$ to the right side instead of multiplying.',
    },
  ],
  // p2 — fractions with a shared denominator, paired with a difference
  [
    {
      q: 'Solve $\\frac{x}{3} + \\frac{y}{3} = 5$ and $x - y = 3$. What is $y$?',
      choices: ['$6$', '$9$', '$5$', '$18$'],
      answer: 0,
      solution:
        'Multiply the first equation by $3$: $x + y = 15$. Add that to $x - y = 3$: $2x = 18$, so $x = 9$ and $y = 15 - 9 = 6$. Check in the ORIGINALS: $\\frac{9}{3} + \\frac{6}{3} = 3 + 2 = 5$ ✓ and $9 - 6 = 3$ ✓. The choice $9$ is $x$, the value found first. The choice $18$ stops at $2x = 18$. The choice $5$ copies the right-hand side of the fraction equation without clearing it.',
    },
    {
      q: 'Solve $\\frac{x}{4} + \\frac{y}{4} = 7$ and $x - y = 6$. What is $x$?',
      choices: ['$11$', '$17$', '$34$', '$14$'],
      answer: 1,
      solution:
        'Multiply the first equation by $4$: $x + y = 28$. Add $x - y = 6$: $2x = 34$, so $x = 17$ and $y = 28 - 17 = 11$. Check in the ORIGINALS: $\\frac{17}{4} + \\frac{11}{4} = \\frac{28}{4} = 7$ ✓ and $17 - 11 = 6$ ✓. The choice $11$ is $y$. The choice $34$ stops at $2x = 34$. The choice $14$ halves $28$ and ignores the difference equation.',
    },
    {
      q: 'Solve $\\frac{x}{6} + \\frac{y}{6} = 3$ and $x - y = 4$. What is $y$?',
      choices: ['$11$', '$22$', '$9$', '$7$'],
      answer: 3,
      solution:
        'Multiply the first equation by $6$: $x + y = 18$. Add $x - y = 4$: $2x = 22$, so $x = 11$ and $y = 18 - 11 = 7$. Check in the ORIGINALS: $\\frac{11}{6} + \\frac{7}{6} = \\frac{18}{6} = 3$ ✓ and $11 - 7 = 4$ ✓. The choice $11$ is $x$. The choice $22$ stops at $2x = 22$. The choice $9$ halves $18$, which would be right only if the difference were $0$.',
    },
  ],
  // p3 — contradictory equations: no solution
  [
    {
      q: 'How many solutions does the system $x + y = 12$ and $x + y = 5$ have?',
      choices: ['None', 'Exactly one', 'Infinitely many', 'Exactly seven'],
      answer: 0,
      solution:
        'One sum cannot be both $12$ and $5$. Subtracting the equations wipes out both variables and leaves $0 = 7$, which is impossible, so no pair works at all. The answer "exactly seven" reads that leftover $7$ as a count of solutions — it is a contradiction, not a tally. "Infinitely many" would need the two equations to say the SAME thing; here they say opposite things.',
    },
    {
      q: 'How many pairs satisfy both $\\frac{x+y}{2} = 6$ and $x + y = 15$?',
      choices: ['Exactly one', 'Infinitely many', 'None', 'Exactly two'],
      answer: 2,
      solution:
        'Take the disguise off first: multiplying the first equation by $2$ gives $x + y = 12$. But the second equation insists $x + y = 15$, and a single sum cannot be both. So there is no solution. The trap is to compare $6$ with $15$ before clearing the fraction; you must tidy each equation into the form (number)$x$ + (number)$y$ = (number) before deciding. The choice "exactly two" reads the denominator $2$ as a count.',
    },
    {
      q: 'How many solutions does the system $x + y = 9$ and $4x + 4y = 30$ have?',
      choices: ['Infinitely many', 'Exactly one', 'Exactly four', 'None'],
      answer: 3,
      solution:
        'Multiply the first equation by $4$: $4x + 4y = 36$. The second equation claims that same expression equals $30$, so the two contradict each other and there is no solution. Watch the right-hand side: quadrupling the left of $x + y = 9$ should have produced $36$, not $30$. If the second equation HAD read $4x + 4y = 36$, the answer would be "infinitely many" instead — that is the only difference between the two special cases.',
    },
  ],
  // p4 — the same equation twice: infinitely many
  [
    {
      q: 'How many solutions does the system $3x + 3y = 21$ and $x + y = 7$ have?',
      choices: ['Infinitely many', 'Exactly one', 'None', 'Exactly three'],
      answer: 0,
      solution:
        'Divide the first equation by $3$: it becomes $x + y = 7$, exactly the second equation. The "two" equations are one equation written twice, so they narrow nothing down: $(0, 7)$, $(2, 5)$, $(3.5, 3.5)$ and endlessly more all work. The choice "exactly three" reads the coefficient $3$ as a count of solutions. Here the right-hand side was scaled correctly, which is what makes this agreement rather than contradiction.',
    },
    {
      q: 'How many solutions does the system $x - y = 4$ and $5x - 5y = 20$ have?',
      choices: ['None', 'Infinitely many', 'Exactly one', 'Exactly five'],
      answer: 1,
      solution:
        'Divide the second equation by $5$: it becomes $x - y = 4$, the same as the first. Both sides were scaled by $5$, so the equations agree completely and there are infinitely many pairs: $(4, 0)$, $(10, 6)$, $(1, -3)$, and so on. Eliminating a variable here gives $0 = 0$, the signature of infinitely many solutions — quite different from the $0 = 3$ that signals none.',
    },
    {
      q: 'How many solutions does the system $\\frac{x+y}{4} = 3$ and $2x + 2y = 24$ have?',
      choices: ['Exactly one', 'None', 'Infinitely many', 'Exactly four'],
      answer: 2,
      solution:
        'Clear both disguises. The first equation times $4$ gives $x + y = 12$; the second divided by $2$ gives $x + y = 12$ as well. Once tidied they are identical, so infinitely many pairs satisfy both. The choice "exactly four" reads the denominator as a count. Notice that the two equations looked nothing alike until they were cleaned up — that is why tidying comes before counting.',
    },
  ],
  // p5 — clear a fraction in both equations, report the pair
  [
    {
      q: 'Solve the system $\\frac{x+y}{2} = 10$ and $\\frac{x-y}{4} = 2$.',
      choices: ['$(6, 14)$', '$(14, 6)$', '$(10, 10)$', '$(16, 4)$'],
      answer: 1,
      solution:
        'Clear each fraction: the first becomes $x + y = 20$ and the second becomes $x - y = 8$. Adding gives $2x = 28$, so $x = 14$ and $y = 6$. Check in the ORIGINALS: $\\frac{14+6}{2} = \\frac{20}{2} = 10$ ✓ and $\\frac{14-6}{4} = \\frac{8}{4} = 2$ ✓. The pair $(6, 14)$ reverses the coordinates and makes the second difference negative. The pair $(10, 10)$ satisfies the first equation only — its difference is $0$. The pair $(16, 4)$ also sums to $20$ but its difference is $12$, giving $3$ instead of $2$.',
    },
    {
      q: 'Solve the system $\\frac{x+y}{5} = 6$ and $\\frac{x-y}{3} = 4$.',
      choices: ['$(9, 21)$', '$(15, 15)$', '$(21, 9)$', '$(24, 6)$'],
      answer: 2,
      solution:
        'Clear the fractions: $x + y = 30$ and $x - y = 12$. Adding gives $2x = 42$, so $x = 21$ and $y = 9$. Check in the ORIGINALS: $\\frac{21+9}{5} = \\frac{30}{5} = 6$ ✓ and $\\frac{21-9}{3} = \\frac{12}{3} = 4$ ✓. The pair $(9, 21)$ is the key reversed. The pair $(15, 15)$ sums to $30$ but has difference $0$. The pair $(24, 6)$ sums to $30$ with difference $18$, which gives $6$ rather than $4$ — three of the four choices pass the first equation, so the second one decides.',
    },
    {
      q: 'Solve the system $\\frac{x+y}{4} = 7$ and $\\frac{x-y}{2} = 4$.',
      choices: ['$(10, 18)$', '$(14, 14)$', '$(20, 8)$', '$(18, 10)$'],
      answer: 3,
      solution:
        'Clear the fractions: $x + y = 28$ and $x - y = 8$. Adding gives $2x = 36$, so $x = 18$ and $y = 10$. Check in the ORIGINALS: $\\frac{18+10}{4} = \\frac{28}{4} = 7$ ✓ and $\\frac{18-10}{2} = \\frac{8}{2} = 4$ ✓. The pair $(10, 18)$ is the key reversed. The pair $(14, 14)$ has difference $0$, and $(20, 8)$ has difference $12$, giving $6$ instead of $4$.',
    },
  ],
  // p6 — a proportion cross-multiplied, paired with a sum or difference
  [
    {
      q: 'Two numbers satisfy $\\frac{x}{y} = 3$ and $x + y = 24$. What is $y$?',
      choices: ['$6$', '$18$', '$8$', '$12$'],
      answer: 0,
      solution:
        'The proportion says $x = 3y$. Substitute into the sum: $3y + y = 4y = 24$, so $y = 6$ and $x = 18$. Check: $\\frac{18}{6} = 3$ ✓ and $18 + 6 = 24$ ✓. The choice $18$ is $x$, not $y$. The choice $8$ divides $24$ by $3$, the ratio, instead of by $4$, the number of equal parts the ratio creates. The choice $12$ halves $24$, which would be right only if the two numbers were equal.',
    },
    {
      q: 'Two numbers satisfy $\\frac{x}{y} = \\frac{2}{5}$ and $x + y = 28$. What is $x$?',
      choices: ['$20$', '$8$', '$14$', '$4$'],
      answer: 1,
      solution:
        'Cross-multiply: $5x = 2y$. It is easiest to write $x = 2t$ and $y = 5t$, so the ratio is automatic. Then $2t + 5t = 7t = 28$, giving $t = 4$, and so $x = 8$ and $y = 20$. Check: $\\frac{8}{20} = \\frac{2}{5}$ ✓ and $8 + 20 = 28$ ✓. The choice $20$ is $y$ — it is also what you get if you read the ratio backwards. The choice $4$ is the multiplier $t$, not either number. The choice $14$ halves $28$ and ignores the ratio.',
    },
    {
      q: 'Two numbers satisfy $\\frac{x}{y} = \\frac{5}{3}$ and $x - y = 8$. What is $x$?',
      choices: ['$12$', '$4$', '$20$', '$32$'],
      answer: 2,
      solution:
        'Write $x = 5t$ and $y = 3t$ so the ratio holds automatically. The second fact gives $5t - 3t = 2t = 8$, so $t = 4$, making $x = 20$ and $y = 12$. Check: $\\frac{20}{12} = \\frac{5}{3}$ ✓ and $20 - 12 = 8$ ✓. The choice $12$ is $y$. The choice $4$ is the multiplier $t$. The choice $32$ is the SUM $x + y$, not the value asked for.',
    },
  ],
  // p7 — clear a fraction, then pair it with a rearranged second fact
  [
    {
      q: 'Solve $\\frac{x}{5} + \\frac{y}{5} = 5$ and $x = y + 7$. What is $x$?',
      choices: ['$9$', '$16$', '$18$', '$25$'],
      answer: 1,
      solution:
        'Multiply the first equation by $5$: $x + y = 25$. The second equation already gives $x$ in terms of $y$, so substitute: $(y + 7) + y = 25$, which is $2y + 7 = 25$, so $2y = 18$ and $y = 9$. Then $x = 9 + 7 = 16$. Check in the ORIGINALS: $\\frac{16}{5} + \\frac{9}{5} = \\frac{25}{5} = 5$ ✓ and $16 = 9 + 7$ ✓. The choice $9$ is $y$. The choice $18$ stops at $2y = 18$. The choice $25$ is the cleared total $x + y$.',
    },
    {
      q: 'Solve $\\frac{x}{2} + \\frac{y}{2} = 8$ and $2x - y = 5$. What is $y$?',
      choices: ['$7$', '$16$', '$21$', '$9$'],
      answer: 3,
      solution:
        'Multiply the first equation by $2$: $x + y = 16$. Adding that to $2x - y = 5$ cancels $y$: $3x = 21$, so $x = 7$ and $y = 16 - 7 = 9$. Check in the ORIGINALS: $\\frac{7}{2} + \\frac{9}{2} = \\frac{16}{2} = 8$ ✓ and $2(7) - 9 = 14 - 9 = 5$ ✓. The choice $7$ is $x$. The choice $21$ stops at $3x = 21$. The choice $16$ is the cleared total $x + y$.',
    },
    {
      q: 'Solve $\\frac{x}{4} + \\frac{y}{4} = 6$ and $x = 3y$. What is $x$?',
      choices: ['$18$', '$6$', '$24$', '$8$'],
      answer: 0,
      solution:
        'Multiply the first equation by $4$: $x + y = 24$. Substitute $x = 3y$: $3y + y = 4y = 24$, so $y = 6$ and $x = 3(6) = 18$. Check in the ORIGINALS: $\\frac{18}{4} + \\frac{6}{4} = \\frac{24}{4} = 6$ ✓ and $18 = 3(6)$ ✓. The choice $6$ is $y$ — and it is also the right-hand side of the fraction equation, so it looks doubly familiar without being the answer. The choice $24$ is the cleared total. The choice $8$ divides $24$ by $3$, the multiplier, instead of by $4$.',
    },
  ],
  // p8 — identify which system has none / infinitely many / exactly one
  [
    {
      q: 'Which one of these systems has no solution at all?',
      choices: [
        '$x + y = 6$ and $x - y = 2$',
        '$x + y = 6$ and $x + y = 11$',
        '$x + y = 6$ and $3x + 3y = 18$',
        '$2x + y = 6$ and $x + y = 4$',
      ],
      answer: 1,
      solution:
        'A single sum cannot be both $6$ and $11$, so the second system is impossible. The first system solves to $(4, 2)$: $4 + 2 = 6$ ✓ and $4 - 2 = 2$ ✓. In the third system the second equation is just the first tripled — both sides — so that one has infinitely many solutions, which is the opposite of none. The fourth solves to $(2, 2)$: $2(2) + 2 = 6$ ✓ and $2 + 2 = 4$ ✓.',
    },
    {
      q: 'Which system has INFINITELY MANY solutions?',
      choices: [
        '$x + y = 5$ and $4x + 4y = 24$',
        '$x + y = 5$ and $x - y = 1$',
        '$x + y = 5$ and $4x + 4y = 20$',
        '$x = 5$ and $y = 5$',
      ],
      answer: 2,
      solution:
        'Divide $4x + 4y = 20$ by $4$: it becomes $x + y = 5$, the same as its partner, so the third system carries one piece of information twice and has infinitely many solutions. The first system looks almost identical but the right side is $24$ where quadrupling $5$ demands $20$, so it CONTRADICTS itself and has none. The second solves to $(3, 2)$: $3 + 2 = 5$ ✓ and $3 - 2 = 1$ ✓. The fourth already names both values, so it has exactly one solution.',
    },
    {
      q: 'Which system has EXACTLY ONE solution?',
      choices: [
        '$x + y = 7$ and $2x + 2y = 14$',
        '$x + y = 7$ and $x + y = 2$',
        '$\\frac{x+y}{3} = 4$ and $x + y = 12$',
        '$2x + y = 9$ and $x - y = 3$',
      ],
      answer: 3,
      solution:
        'Only the fourth system says two genuinely different things. Adding its equations gives $3x = 12$, so $x = 4$ and $y = 1$. Check BOTH: $2(4) + 1 = 9$ ✓ and $4 - 1 = 3$ ✓. In the first system the second equation is the first doubled, so it has infinitely many solutions. The second system contradicts itself and has none. In the third, clearing the fraction turns the first equation into $x + y = 12$, the same as the second — infinitely many again.',
    },
  ],
  // p9 — clear fractions in both equations, then eliminate
  [
    {
      q: 'Solve $\\frac{3x+y}{4} = 5$ and $\\frac{x+y}{3} = 4$. What is $x$?',
      choices: ['$8$', '$4$', '$12$', '$20$'],
      answer: 1,
      solution:
        'Clear both denominators: $3x + y = 20$ and $x + y = 12$. The $y$ terms already match, so subtract the second from the first: $2x = 8$, giving $x = 4$, and then $y = 12 - 4 = 8$. Check in the ORIGINALS: $\\frac{3(4)+8}{4} = \\frac{20}{4} = 5$ ✓ and $\\frac{4+8}{3} = \\frac{12}{3} = 4$ ✓. The choice $8$ is $y$. The choices $12$ and $20$ are the cleared right-hand sides, not the value of a variable.',
    },
    {
      q: 'Solve $\\frac{x+3y}{4} = 6$ and $\\frac{x+y}{2} = 5$. What is $y$?',
      choices: ['$3$', '$10$', '$7$', '$14$'],
      answer: 2,
      solution:
        'Clear both denominators: $x + 3y = 24$ and $x + y = 10$. The $x$ terms match, so subtract: $2y = 14$, giving $y = 7$, and then $x = 10 - 7 = 3$. Check in the ORIGINALS: $\\frac{3+3(7)}{4} = \\frac{24}{4} = 6$ ✓ and $\\frac{3+7}{2} = \\frac{10}{2} = 5$ ✓. The choice $3$ is $x$. The choice $14$ stops at $2y = 14$. The choice $10$ is the cleared total $x + y$.',
    },
    {
      q: 'Solve $\\frac{4x+3y}{5} = 9$ and $\\frac{x+y}{2} = 6$. What is $x$?',
      choices: ['$9$', '$3$', '$12$', '$45$'],
      answer: 0,
      solution:
        'Clear both denominators: $4x + 3y = 45$ and $x + y = 12$. Multiply the second by $3$ to match the $y$ terms: $3x + 3y = 36$. Subtract: $x = 9$, and then $y = 12 - 9 = 3$. Check in the ORIGINALS: $\\frac{4(9)+3(3)}{5} = \\frac{36+9}{5} = \\frac{45}{5} = 9$ ✓ and $\\frac{9+3}{2} = \\frac{12}{2} = 6$ ✓. The choice $3$ is $y$. The choices $12$ and $45$ are the cleared right-hand sides.',
    },
  ],
  // p10 — choose the constant that makes the two equations agree
  [
    {
      q: 'For what value of $k$ does the system $x + y = 6$ and $3x + 3y = k$ have infinitely many solutions?',
      choices: ['$6$', '$9$', '$18$', '$3$'],
      answer: 2,
      solution:
        'The second equation is the first multiplied by $3$ — but only if the right side was tripled too. That needs $k = 3 \\times 6 = 18$. Then both equations say $x + y = 6$ and every solution of one solves the other. For any other $k$ they contradict each other and there is no solution at all. The choice $6$ copies the right side without scaling it. The choice $9$ ADDS $3$ instead of multiplying. The choice $3$ is the multiplier itself.',
    },
    {
      q: 'For what value of $k$ does the system $2x + 2y = 14$ and $x + y = k$ have infinitely many solutions?',
      choices: ['$14$', '$7$', '$28$', '$2$'],
      answer: 1,
      solution:
        'This time the scaling runs the other way: dividing $2x + 2y = 14$ by $2$ gives $x + y = 7$, so the second equation matches only when $k = 7$. The choice $14$ copies the right side without halving it. The choice $28$ doubles when it should halve. The choice $2$ is the multiplier, not a right-hand side. For every $k$ other than $7$ the system has no solution.',
    },
    {
      q: 'The system $x + y = 8$ and $5x + 5y = k$ has NO solution for every value of $k$ except one. What is that exceptional value?',
      choices: ['$8$', '$13$', '$5$', '$40$'],
      answer: 3,
      solution:
        'Dividing the second equation by $5$ gives $x + y = \\frac{k}{5}$. That agrees with $x + y = 8$ only when $\\frac{k}{5} = 8$, meaning $k = 40$ — and then the equations are identical, so there are infinitely many solutions rather than none. Every other $k$ makes the same sum equal two different numbers, which is impossible. The choice $8$ leaves the right side unscaled. The choice $13$ adds $5$ instead of multiplying. The choice $5$ is the multiplier.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 5,
  sections: {
    '5.4': s54,
    '5.5': s55,
  },
}
