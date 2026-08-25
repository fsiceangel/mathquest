// Introduction to Algebra chapter 5 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` string, and a solution. There are no choices to write, so every
//    ounce of teaching lives in the solution.
//  - Every pair (or triple) was re-derived from scratch and then substituted
//    back into EVERY original equation of its own system — and for the
//    disguised systems the check is done in the ORIGINAL fraction form, never
//    in the tidied-up form.
//  - Every word problem was checked against its STORY as well as its algebra:
//    counts of tickets, coins, stamps and boxes are whole and positive, and
//    every weight is positive.
//  - A variation changes the numbers AND the context, and where it makes sense
//    the direction too: solve for the other letter, report a difference instead
//    of a pair, or start from the equation that hides the subtraction.
//  - Numbers were chosen so the two unknowns in a system are never equal (equal
//    values would let a swapped pair slip through the check unnoticed).

const worksheet = [
  // 1. Sum and difference given outright — add the equations to cancel a letter.
  [
    {
      q: 'Solve the system $x + y = 20$ and $x - y = 6$.',
      answer: '$(x, y) = (13, 7)$',
      solution:
        'The $y$ terms are $+y$ and $-y$, so ADD the two equations and they cancel: $2x = 26$, giving $x = 13$. Put that back into the first equation: $13 + y = 20$, so $y = 7$. Check in BOTH originals: $13 + 7 = 20$ ✓ and $13 - 7 = 6$ ✓.',
    },
    {
      q: 'Solve the system $m + n = 15$ and $m - n = 9$.',
      answer: '$(m, n) = (12, 3)$',
      solution:
        'Different letters, same plan. Adding the equations cancels $n$: $2m = 24$, so $m = 12$. Then $12 + n = 15$ gives $n = 3$. Check both originals: $12 + 3 = 15$ ✓ and $12 - 3 = 9$ ✓. Write the pair in the order the letters were named: $(m, n) = (12, 3)$.',
    },
    {
      q: 'Solve the system $x + y = 9$ and $x - y = -3$.',
      answer: '$(x, y) = (3, 6)$',
      solution:
        'A negative difference is nothing to fear — the method does not change. Add the equations: $2x = 9 + (-3) = 6$, so $x = 3$. Then $3 + y = 9$ gives $y = 6$. Check both originals: $3 + 6 = 9$ ✓ and $3 - 6 = -3$ ✓. The minus sign was telling you that $y$ is the bigger number this time.',
    },
  ],
  // 2. One equation already gives a letter by itself — substitute it.
  [
    {
      q: 'Solve the system $y = x + 6$ and $x + y = 24$.',
      answer: '$(x, y) = (9, 15)$',
      solution:
        'The first equation says $y$ IS $x + 6$, so replace $y$ in the second one: $x + (x + 6) = 24$. Combine: $2x + 6 = 24$, so $2x = 18$ and $x = 9$. Then $y = 9 + 6 = 15$. Check both originals: $15 = 9 + 6$ ✓ and $9 + 15 = 24$ ✓.',
    },
    {
      q: 'Solve the system $x = y - 5$ and $x + y = 21$.',
      answer: '$(x, y) = (8, 13)$',
      solution:
        'This time it is $x$ that is handed to you, in terms of $y$. Substitute into the second equation: $(y - 5) + y = 21$, so $2y - 5 = 21$, $2y = 26$, and $y = 13$. Then $x = 13 - 5 = 8$. Check both originals: $8 = 13 - 5$ ✓ and $8 + 13 = 21$ ✓. Notice $x$ came out SMALLER than $y$ — the equation said so from the start.',
    },
    {
      q: 'Solve the system $y = 3x - 2$ and $x + y = 18$.',
      answer: '$(x, y) = (5, 13)$',
      solution:
        'Substitute the whole expression, parentheses and all: $x + (3x - 2) = 18$. That is $4x - 2 = 18$, so $4x = 20$ and $x = 5$. Then $y = 3(5) - 2 = 13$. Check both originals: $13 = 3(5) - 2 = 15 - 2$ ✓ and $5 + 13 = 18$ ✓. Dropping the $-2$ inside the parentheses is the classic slip here.',
    },
  ],
  // 3. Matching terms in both equations — subtract to eliminate.
  [
    {
      q: 'Solve the system $3x + y = 17$ and $x + y = 9$.',
      answer: '$(x, y) = (4, 5)$',
      solution:
        'Both equations contain $+y$, so SUBTRACT the second from the first — every term, right-hand sides included: $(3x + y) - (x + y) = 17 - 9$ leaves $2x = 8$, so $x = 4$. Then $4 + y = 9$ gives $y = 5$. Check both originals: $3(4) + 5 = 12 + 5 = 17$ ✓ and $4 + 5 = 9$ ✓.',
    },
    {
      q: 'Solve the system $x + 4y = 23$ and $x + y = 11$.',
      answer: '$(x, y) = (7, 4)$',
      solution:
        'This time it is the $x$ terms that match, so subtracting removes $x$ instead: $(x + 4y) - (x + y) = 23 - 11$ leaves $3y = 12$, so $y = 4$. Then $x + 4 = 11$ gives $x = 7$. Check both originals: $7 + 4(4) = 7 + 16 = 23$ ✓ and $7 + 4 = 11$ ✓. Look at which letter already matches before you decide what to eliminate.',
    },
    {
      q: 'Solve the system $5a + 2b = 34$ and $3a + 2b = 22$.',
      answer: '$(a, b) = (6, 2)$',
      solution:
        'The $2b$ terms are identical, so subtract the second equation from the first: $(5a + 2b) - (3a + 2b) = 34 - 22$, leaving $2a = 12$ and $a = 6$. Put that into the second equation: $3(6) + 2b = 22$, so $18 + 2b = 22$, $2b = 4$, and $b = 2$. Check both originals: $5(6) + 2(2) = 30 + 4 = 34$ ✓ and $3(6) + 2(2) = 18 + 4 = 22$ ✓.',
    },
  ],
  // 4. One equation, two unknowns — produce two different solution pairs.
  [
    {
      q: 'Write down two DIFFERENT solution pairs of the equation $x + y = 12$.',
      answer: 'Any two distinct pairs summing to $12$, such as $(2, 10)$ and $(5, 7)$',
      solution:
        'Choose any number you like for $x$, then let $y = 12 - x$. Taking $x = 2$ gives $y = 10$, and taking $x = 5$ gives $y = 7$. Check both: $2 + 10 = 12$ ✓ and $5 + 7 = 12$ ✓. One equation with two unknowns has infinitely many solutions, so any two correct — and different — pairs earn full credit.',
    },
    {
      q: 'Write down two DIFFERENT solution pairs of the equation $x - y = 5$.',
      answer: 'Any two distinct pairs whose difference is $5$, such as $(6, 1)$ and $(9, 4)$',
      solution:
        'A difference works just like a sum: pick $x$, then let $y = x - 5$. Taking $x = 6$ gives $y = 1$, and taking $x = 9$ gives $y = 4$. Check both: $6 - 1 = 5$ ✓ and $9 - 4 = 5$ ✓. Order matters — $(1, 6)$ would give $1 - 6 = -5$, which is a different equation.',
    },
    {
      q: 'Write down two DIFFERENT solution pairs of the equation $2x + y = 10$.',
      answer: 'Any two distinct pairs that fit, such as $(1, 8)$ and $(3, 4)$',
      solution:
        'A coefficient does not change the idea. Pick $x$, then let $y = 10 - 2x$. Taking $x = 1$ gives $y = 10 - 2 = 8$, and taking $x = 3$ gives $y = 10 - 6 = 4$. Check both: $2(1) + 8 = 10$ ✓ and $2(3) + 4 = 10$ ✓. Remember to double the $x$ before subtracting — that is the only new step.',
    },
  ],
  // 5. Count equation plus value equation, two prices.
  [
    {
      q: 'A bake sale sold $12$ items — muffins at $\\$3$ each and cookies at $\\$2$ each — for $\\$31$. How many of each were sold?',
      answer: '$7$ muffins and $5$ cookies',
      solution:
        'Let $m$ be muffins and $c$ be cookies. Count: $m + c = 12$. Value: $3m + 2c = 31$. Multiply the count equation by $2$: $2m + 2c = 24$. Subtract it from the value equation: $m = 7$, and then $7 + c = 12$ gives $c = 5$. Check both originals — and the story: $7 + 5 = 12$ items ✓ and $3(7) + 2(5) = 21 + 10 = 31$ dollars ✓. Both counts are whole and positive, as items must be.',
    },
    {
      q: 'A school play sold $15$ tickets — balcony seats at $\\$9$ each and floor seats at $\\$5$ each — for $\\$99$. How many of each were sold?',
      answer: '$6$ balcony tickets and $9$ floor tickets',
      solution:
        'Let $b$ be balcony tickets and $f$ be floor tickets. Count: $b + f = 15$. Value: $9b + 5f = 99$. Multiply the count equation by $5$: $5b + 5f = 75$. Subtract: $4b = 24$, so $b = 6$ and $f = 15 - 6 = 9$. Check both originals: $6 + 9 = 15$ tickets ✓ and $9(6) + 5(9) = 54 + 45 = 99$ dollars ✓.',
    },
    {
      q: 'A swim meet sold $20$ wristbands — adult ones at $\\$8$ each and junior ones at $\\$5$ each — for $\\$136$. How many MORE adult wristbands than junior ones were sold?',
      answer: '$4$ more adult wristbands ($12$ adult and $8$ junior)',
      solution:
        'Let $a$ be adult wristbands and $j$ be junior ones. Count: $a + j = 20$. Value: $8a + 5j = 136$. Multiply the count equation by $5$: $5a + 5j = 100$. Subtract: $3a = 36$, so $a = 12$ and $j = 20 - 12 = 8$. Check both originals: $12 + 8 = 20$ ✓ and $8(12) + 5(8) = 96 + 40 = 136$ ✓. Now reread the question — it wants the DIFFERENCE, so one more step: $12 - 8 = 4$.',
    },
  ],
  // 6. Fractions in both equations — clear them, then add.
  [
    {
      q: 'Solve the system $\\frac{x+y}{3} = 6$ and $\\frac{x-y}{2} = 3$.',
      answer: '$(x, y) = (12, 6)$',
      solution:
        'Take the disguises off. Multiply the first equation by $3$: $x + y = 18$. Multiply the second by $2$: $x - y = 6$. Now add them: $2x = 24$, so $x = 12$, and then $12 + y = 18$ gives $y = 6$. Check in the ORIGINAL fraction equations: $\\frac{12+6}{3} = \\frac{18}{3} = 6$ ✓ and $\\frac{12-6}{2} = \\frac{6}{2} = 3$ ✓.',
    },
    {
      q: 'Solve the system $\\frac{x+y}{5} = 4$ and $\\frac{x-y}{2} = 5$.',
      answer: '$(x, y) = (15, 5)$',
      solution:
        'Clear each denominator, remembering to multiply the RIGHT side too: the first becomes $x + y = 20$ and the second becomes $x - y = 10$. Add: $2x = 30$, so $x = 15$ and $y = 20 - 15 = 5$. Check in the ORIGINALS: $\\frac{15+5}{5} = \\frac{20}{5} = 4$ ✓ and $\\frac{15-5}{2} = \\frac{10}{2} = 5$ ✓.',
    },
    {
      q: 'Solve the system $\\frac{x+y}{4} = 5$ and $\\frac{y-x}{2} = 4$.',
      answer: '$(x, y) = (6, 14)$',
      solution:
        'Read the second numerator carefully — it is $y - x$, not $x - y$. Clearing gives $x + y = 20$ and $y - x = 8$. Adding these cancels $x$ this time: $2y = 28$, so $y = 14$, and then $x = 20 - 14 = 6$. Check in the ORIGINALS: $\\frac{6+14}{4} = \\frac{20}{4} = 5$ ✓ and $\\frac{14-6}{2} = \\frac{8}{2} = 4$ ✓. Here $y$ is the larger number, which is exactly what $y - x = 8$ promised.',
    },
  ],
  // 7. Neither letter matches — scale BOTH equations before eliminating.
  [
    {
      q: 'Solve the system $2x + 3y = 27$ and $5x + 2y = 40$.',
      answer: '$(x, y) = (6, 5)$',
      solution:
        'Nothing matches yet, so build a match. To make both $y$ terms $6y$, multiply the first equation by $2$ ($4x + 6y = 54$) and the second by $3$ ($15x + 6y = 120$). Subtract: $11x = 66$, so $x = 6$. Then $2(6) + 3y = 27$ gives $3y = 15$ and $y = 5$. Check both originals: $2(6) + 3(5) = 12 + 15 = 27$ ✓ and $5(6) + 2(5) = 30 + 10 = 40$ ✓.',
    },
    {
      q: 'Solve the system $4x + 3y = 26$ and $3x + 5y = 25$, then give the value of $x + y$.',
      answer: '$x + y = 7$',
      solution:
        'Aim at the $x$ terms: multiply the first equation by $3$ ($12x + 9y = 78$) and the second by $4$ ($12x + 20y = 100$). Subtract: $11y = 22$, so $y = 2$. Then $4x + 3(2) = 26$ gives $4x = 20$ and $x = 5$. Check both originals: $4(5) + 3(2) = 20 + 6 = 26$ ✓ and $3(5) + 5(2) = 15 + 10 = 25$ ✓. The question asks for $x + y = 5 + 2 = 7$ — one small step past the pair.',
    },
    {
      q: 'Solve the system $3p + 4q = 33$ and $2p + 5q = 29$.',
      answer: '$(p, q) = (7, 3)$',
      solution:
        'To cancel $p$, make both coefficients $6$: multiply the first equation by $2$ ($6p + 8q = 66$) and the second by $3$ ($6p + 15q = 87$). Subtract: $7q = 21$, so $q = 3$. Then $3p + 4(3) = 33$ gives $3p = 21$ and $p = 7$. Check both originals: $3(7) + 4(3) = 21 + 12 = 33$ ✓ and $2(7) + 5(3) = 14 + 15 = 29$ ✓.',
    },
  ],
  // 8. Coins and stamps — a count equation and a value equation in cents.
  [
    {
      q: 'A handful of $15$ coins, all nickels and quarters, is worth $\\$2.35$. How many of each coin are there?',
      answer: '$7$ nickels and $8$ quarters',
      solution:
        'Work in cents so there are no decimals. Count: $n + q = 15$. Value: $5n + 25q = 235$. Divide the value equation by $5$ to make it friendlier: $n + 5q = 47$. Subtract the count equation: $4q = 32$, so $q = 8$ and $n = 15 - 8 = 7$. Check both originals and the story: $7 + 8 = 15$ coins ✓ and $5(7) + 25(8) = 35 + 200 = 235$ cents ✓.',
    },
    {
      q: 'A jar of $21$ coins, all nickels and dimes, is worth $\\$1.65$. How many of each coin are there?',
      answer: '$9$ nickels and $12$ dimes',
      solution:
        'In cents: $n + d = 21$ and $5n + 10d = 165$. Divide the value equation by $5$: $n + 2d = 33$. Subtract the count equation: $d = 12$, and then $n = 21 - 12 = 9$. Check both originals: $9 + 12 = 21$ coins ✓ and $5(9) + 10(12) = 45 + 120 = 165$ cents ✓. Both counts are whole and positive, as coins must be.',
    },
    {
      q: 'A folder holds $16$ stamps. Some are worth $20$ cents each and the rest are worth $45$ cents each, and altogether they are worth $\\$5.45$. How many of each stamp are in the folder?',
      answer: '$7$ twenty-cent stamps and $9$ forty-five-cent stamps',
      solution:
        'Let $t$ be the $20$-cent stamps and $f$ be the $45$-cent stamps, and work entirely in cents. Count: $t + f = 16$. Value: $20t + 45f = 545$. Multiply the count equation by $20$: $20t + 20f = 320$. Subtract: $25f = 225$, so $f = 9$ and $t = 16 - 9 = 7$. Check both originals: $7 + 9 = 16$ stamps ✓ and $20(7) + 45(9) = 140 + 405 = 545$ cents, which is $\\$5.45$ ✓.',
    },
  ],
  // 9. Three unknowns, given in pairs — add all three, then peel each off.
  [
    {
      q: 'If $x + y = 11$, $y + z = 14$, and $x + z = 9$, find $x$, $y$, and $z$.',
      answer: '$x = 3$, $y = 8$, $z = 6$',
      solution:
        'Add all three equations. Every letter appears in exactly two of them, so the left side is $2x + 2y + 2z$: $2(x + y + z) = 11 + 14 + 9 = 34$, giving $x + y + z = 17$. Now peel off one letter at a time by subtracting each original equation from that total: $z = 17 - 11 = 6$, $x = 17 - 14 = 3$, $y = 17 - 9 = 8$. Check all three originals: $3 + 8 = 11$ ✓, $8 + 6 = 14$ ✓, $3 + 6 = 9$ ✓.',
    },
    {
      q: 'If $p + q = 20$, $q + r = 17$, and $p + r = 13$, find $p$, $q$, and $r$.',
      answer: '$p = 8$, $q = 12$, $r = 5$',
      solution:
        'Add all three: $2(p + q + r) = 20 + 17 + 13 = 50$, so $p + q + r = 25$. Subtract each original from the total to peel off the missing letter: $r = 25 - 20 = 5$, $p = 25 - 17 = 8$, $q = 25 - 13 = 12$. Check all three originals: $8 + 12 = 20$ ✓, $12 + 5 = 17$ ✓, $8 + 5 = 13$ ✓. Forgetting to halve the $50$ is the one slip to watch for.',
    },
    {
      q: 'Three boxes are weighed two at a time. The first and second together weigh $19$ kg, the second and third together weigh $23$ kg, and the first and third together weigh $16$ kg. How heavy is each box?',
      answer: 'The boxes weigh $6$ kg, $13$ kg, and $10$ kg',
      solution:
        'Let the weights be $a$, $b$, and $c$ in kilograms: $a + b = 19$, $b + c = 23$, $a + c = 16$. Adding all three counts every box twice: $2(a + b + c) = 19 + 23 + 16 = 58$, so all three together weigh $29$ kg. Peel each one off: $c = 29 - 19 = 10$, $a = 29 - 23 = 6$, $b = 29 - 16 = 13$. Check all three originals — and the story: $6 + 13 = 19$ ✓, $13 + 10 = 23$ ✓, $6 + 10 = 16$ ✓, and every weight is positive, as a real box must be.',
    },
  ],
  // 10. The special cases: when does a scaled copy contradict, agree, or pin down?
  [
    {
      q: 'For which values of $k$ does the system $3x + y = 5$ and $6x + 2y = k$ have NO solution?',
      answer: 'Every $k$ except $10$ (if $k = 10$ there are infinitely many solutions)',
      solution:
        'Divide the second equation by $2$: it says $3x + y = \\frac{k}{2}$. The first says $3x + y = 5$. The same expression cannot equal two different numbers, so as long as $\\frac{k}{2} \\neq 5$ — that is, $k \\neq 10$ — the two equations contradict each other and no pair works. If $k = 10$ the second equation is just the first doubled, both sides, so the equations agree completely and there are infinitely many solutions. No value of $k$ gives exactly one.',
    },
    {
      q: 'For which value of $k$ does the system $x + 4y = 9$ and $5x + 20y = k$ have INFINITELY many solutions?',
      answer: '$k = 45$',
      solution:
        'Look at the left sides: $5x + 20y$ is exactly $5$ times $x + 4y$. For the second equation to be a true copy of the first, the right side must be multiplied by $5$ as well: $k = 5 \\times 9 = 45$. Then both equations say the same thing and every solution of $x + 4y = 9$ works — for instance $(1, 2)$, since $1 + 4(2) = 9$ ✓ and $5(1) + 20(2) = 45$ ✓. For any other $k$ the two equations contradict each other and the system has no solution at all.',
    },
    {
      q: 'Is there a value of $k$ for which the system $2x + 6y = 8$ and $x + 3y = k$ has exactly ONE solution? Say what happens for each $k$ instead.',
      answer: 'No — the system has infinitely many solutions when $k = 4$, and no solution for every other $k$',
      solution:
        'Divide the first equation by $2$: it becomes $x + 3y = 4$. So the system really says $x + 3y = 4$ and $x + 3y = k$. If $k = 4$ the two are the same single equation, which pins nothing down: $(4, 0)$, $(1, 1)$, $(-2, 2)$ and endlessly more all work. If $k \\neq 4$ the same expression would have to equal two different numbers, which is impossible, so there is no solution. Exactly one solution never happens, because the two equations were never really different.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 5,
  worksheet,
}
