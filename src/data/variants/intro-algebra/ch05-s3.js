// Introduction to Algebra chapter 5 — variations for section 5.6 and the
// chapter challenge. All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every solution was substituted back into EVERY original equation of its
//    own system, not just the one it was solved from. Three-variable systems
//    were checked against all three equations.
//  - Every choice was compared with the other three by VALUE, not by the string
//    that prints it, so no two choices in an item can secretly agree.
//  - Every distractor is the output of a named mistake, and the solution says
//    which one: the other variable's value, the running total before the final
//    subtraction, forgetting to halve after adding a symmetric system, dividing
//    by the number of variables instead of by the number of copies, reporting
//    dollars instead of a count, or answering the opposite question.
//  - Numbers were chosen so that the named wrong method never lands on the key,
//    and so that no two variables in a system share a value (equal values would
//    hide a swap error).
//  - Every word problem was checked against its STORY as well as its algebra:
//    counts of tickets, coins, and people are whole and positive, and ages are
//    plausible and consistent with the ordering the question names.

const s56 = [
  // p1 — a chain: one known value unlocks the next equation, then the next.
  [
    {
      q: 'If $a = 5$, $a + b = 12$, and $b + c = 20$, what is $c$?',
      choices: ['$13$', '$7$', '$8$', '$25$'],
      answer: 0,
      solution:
        'Work along the chain. The first equation hands you $a = 5$, so the second becomes $5 + b = 12$ and $b = 7$. Feed that into the third: $7 + c = 20$, so $c = 13$. Check: $5 + 7 = 12$ ✓ and $7 + 13 = 20$ ✓. (The choice $7$ is $b$ — one domino short of the answer. The choice $8$ comes from subtracting the second equation from the third, $20 - 12$, which combines two totals that were never meant to be compared. The choice $25$ adds $20 + 5$ instead of chaining through $b$.)',
    },
    {
      q: 'If $p = 4$, $p + q = 13$, and $q + r = 21$, what is $r$?',
      choices: ['$9$', '$8$', '$17$', '$12$'],
      answer: 3,
      solution:
        'Chain through: $p = 4$ makes the second equation $4 + q = 13$, so $q = 9$. Then $9 + r = 21$ gives $r = 12$. Check: $4 + 9 = 13$ ✓ and $9 + 12 = 21$ ✓. (The choice $9$ is $q$, not $r$. The choice $8$ comes from $21 - 13$, subtracting one total from another. The choice $17$ comes from $21 - 4$, subtracting $p$ from an equation that does not contain $p$.)',
    },
    {
      q: 'If $z = 6$, $y + z = 15$, and $x + y = 20$, what is $x$?',
      choices: ['$9$', '$11$', '$14$', '$5$'],
      answer: 1,
      solution:
        'This chain runs backwards, but the method is the same. From $z = 6$ the second equation reads $y + 6 = 15$, so $y = 9$. Then $x + 9 = 20$ gives $x = 11$. Check: $9 + 6 = 15$ ✓ and $11 + 9 = 20$ ✓. (The choice $9$ is $y$, the middle link. The choice $14$ comes from $20 - 6$, subtracting $z$ from an equation $z$ never appears in. The choice $5$ comes from $20 - 15$, subtracting one total from the other instead of subtracting $y$.)',
    },
  ],
  // p2 — the add-everything trick: three pairwise sums give the grand total.
  [
    {
      q: 'If $x + y = 7$, $y + z = 13$, and $x + z = 16$, what is $x + y + z$?',
      choices: ['$36$', '$12$', '$18$', '$11$'],
      answer: 2,
      solution:
        'Add all three equations. Every variable appears in exactly two of them, so the left side becomes $2x + 2y + 2z$ and the right side is $7 + 13 + 16 = 36$. That is $2(x + y + z) = 36$, so $x + y + z = 18$. Check by peeling: $x = 18 - 13 = 5$, $y = 18 - 16 = 2$, $z = 18 - 7 = 11$, and indeed $5 + 2 = 7$ ✓, $2 + 11 = 13$ ✓, $5 + 11 = 16$ ✓. (The choice $36$ forgets to halve and counts everybody twice. The choice $12$ divides by $3$, one for each variable — but the doubling came from the three EQUATIONS, not from the three letters. The choice $11$ is $z$ alone, the largest single value.)',
    },
    {
      q: 'If $m + n = 15$, $n + k = 19$, and $m + k = 14$, what is $m + n + k$?',
      choices: ['$48$', '$24$', '$16$', '$10$'],
      answer: 1,
      solution:
        'Adding the three equations counts each variable twice: $2(m + n + k) = 15 + 19 + 14 = 48$, so $m + n + k = 24$. Check by peeling: $m = 24 - 19 = 5$, $n = 24 - 14 = 10$, $k = 24 - 15 = 9$, and $5 + 10 = 15$ ✓, $10 + 9 = 19$ ✓, $5 + 9 = 14$ ✓. (The choice $48$ skips the halving. The choice $16$ divides by $3$ instead of $2$. The choice $10$ is $n$ by itself.)',
    },
    {
      q: 'If $u + v = 18$, $v + w = 27$, and $u + w = 21$, what is $u + v + w$?',
      choices: ['$66$', '$22$', '$15$', '$33$'],
      answer: 3,
      solution:
        'Add the three equations: $2(u + v + w) = 18 + 27 + 21 = 66$, so $u + v + w = 33$. Check by peeling: $u = 33 - 27 = 6$, $v = 33 - 21 = 12$, $w = 33 - 18 = 15$, and $6 + 12 = 18$ ✓, $12 + 15 = 27$ ✓, $6 + 15 = 21$ ✓. (The choice $66$ forgets to halve. The choice $22$ divides by $3$. The choice $15$ is $w$ alone — the biggest of the three, but not their total.)',
    },
  ],
  // p3 — pairwise sums, then peel off the variable the question names.
  [
    {
      q: 'If $a + b = 11$, $b + c = 16$, and $a + c = 13$, what is $c$?',
      choices: ['$4$', '$9$', '$7$', '$20$'],
      answer: 1,
      solution:
        'Add all three: $2(a + b + c) = 11 + 16 + 13 = 40$, so $a + b + c = 20$. To peel off $c$, subtract the equation that leaves $c$ out — that is $a + b = 11$: $c = 20 - 11 = 9$. Check: $a = 20 - 16 = 4$ and $b = 20 - 13 = 7$, so $4 + 7 = 11$ ✓, $7 + 9 = 16$ ✓, $4 + 9 = 13$ ✓. (The choice $4$ comes from subtracting $b + c = 16$ instead, which peels off $a$. The choice $7$ peels off $b$. The choice $20$ is the grand total, one subtraction short.)',
    },
    {
      q: 'If $p + q = 14$, $q + r = 19$, and $p + r = 17$, what is $p$?',
      choices: ['$6$', '$11$', '$8$', '$25$'],
      answer: 0,
      solution:
        'Add all three: $2(p + q + r) = 14 + 19 + 17 = 50$, so $p + q + r = 25$. Peel off $p$ by subtracting the equation without $p$, namely $q + r = 19$: $p = 25 - 19 = 6$. Check: $q = 25 - 17 = 8$ and $r = 25 - 14 = 11$, so $6 + 8 = 14$ ✓, $8 + 11 = 19$ ✓, $6 + 11 = 17$ ✓. (The choice $11$ subtracts $p + q = 14$, which peels off $r$. The choice $8$ peels off $q$. The choice $25$ is the total of all three.)',
    },
    {
      q: 'If $d + e = 8$, $e + f = 17$, and $d + f = 13$, what is $e$?',
      choices: ['$2$', '$11$', '$6$', '$19$'],
      answer: 2,
      solution:
        'Add all three: $2(d + e + f) = 8 + 17 + 13 = 38$, so $d + e + f = 19$. Peel off $e$ by subtracting the equation without $e$, namely $d + f = 13$: $e = 19 - 13 = 6$. Check: $d = 19 - 17 = 2$ and $f = 19 - 8 = 11$, so $2 + 6 = 8$ ✓, $6 + 11 = 17$ ✓, $2 + 11 = 13$ ✓. (The choice $2$ subtracts $e + f = 17$, peeling off $d$. The choice $11$ peels off $f$. The choice $19$ is the grand total.)',
    },
  ],
  // p4 — the whole group minus a part leaves the rest.
  [
    {
      q: 'If $a + b + c = 31$ and $a + b = 19$, what is $c$?',
      choices: ['$12$', '$50$', '$-12$', '$19$'],
      answer: 0,
      solution:
        'Subtract the second equation from the first: $(a + b + c) - (a + b) = 31 - 19$, and everything on the left cancels except $c$, so $c = 12$. (The choice $50$ adds the two totals instead of subtracting them. The choice $-12$ subtracts backwards, computing $19 - 31$. The choice $19$ just copies the value of $a + b$.)',
    },
    {
      q: 'If $p + q + r = 24$ and $q + r = 9$, what is $p$?',
      choices: ['$33$', '$9$', '$15$', '$-15$'],
      answer: 2,
      solution:
        'The part $q + r$ sits inside the whole $p + q + r$, so subtract: $24 - 9 = 15$, giving $p = 15$. (The choice $33$ adds the totals. The choice $9$ copies $q + r$. The choice $-15$ comes from subtracting backwards, $9 - 24$.)',
    },
    {
      q: 'If $m + n + t = 28$ and $m = 6$, what is $n + t$?',
      choices: ['$34$', '$-22$', '$6$', '$22$'],
      answer: 3,
      solution:
        'Take the single known value out of the total: $n + t = 28 - 6 = 22$. (The choice $34$ adds $28 + 6$. The choice $-22$ subtracts backwards, $6 - 28$. The choice $6$ just repeats $m$, which is not what was asked for.)',
    },
  ],
  // p5 — peel off the variable that is MISSING from one of the equations.
  [
    {
      q: 'If $x + y = 13$, $y + z = 18$, and $x + z = 15$, what is $y$?',
      choices: ['$5$', '$8$', '$10$', '$23$'],
      answer: 1,
      solution:
        'Add all three: $2(x + y + z) = 13 + 18 + 15 = 46$, so $x + y + z = 23$. The equation with no $y$ in it is $x + z = 15$, so subtracting it leaves $y = 23 - 15 = 8$. Check: $x = 23 - 18 = 5$ and $z = 23 - 13 = 10$, so $5 + 8 = 13$ ✓, $8 + 10 = 18$ ✓, $5 + 10 = 15$ ✓. (The choice $5$ subtracts $y + z = 18$, which removes $y$ along with $z$ and leaves $x$. The choice $10$ is $z$. The choice $23$ is the total, one subtraction short.)',
    },
    {
      q: 'If $a + b = 16$, $b + c = 21$, and $a + c = 19$, what is $c$?',
      choices: ['$7$', '$9$', '$28$', '$12$'],
      answer: 3,
      solution:
        'Add all three: $2(a + b + c) = 16 + 21 + 19 = 56$, so $a + b + c = 28$. The equation missing $c$ is $a + b = 16$, so $c = 28 - 16 = 12$. Check: $a = 28 - 21 = 7$ and $b = 28 - 19 = 9$, so $7 + 9 = 16$ ✓, $9 + 12 = 21$ ✓, $7 + 12 = 19$ ✓. (The choice $7$ subtracts $b + c = 21$ and lands on $a$. The choice $9$ lands on $b$. The choice $28$ is the grand total.)',
    },
    {
      q: 'If $m + n = 17$, $n + p = 24$, and $m + p = 21$, what is $m$?',
      choices: ['$7$', '$14$', '$10$', '$31$'],
      answer: 0,
      solution:
        'Add all three: $2(m + n + p) = 17 + 24 + 21 = 62$, so $m + n + p = 31$. The equation without $m$ is $n + p = 24$, so $m = 31 - 24 = 7$. Check: $n = 31 - 21 = 10$ and $p = 31 - 17 = 14$, so $7 + 10 = 17$ ✓, $10 + 14 = 24$ ✓, $7 + 14 = 21$ ✓. (The choice $14$ subtracts $m + n = 17$ and lands on $p$. The choice $10$ lands on $n$. The choice $31$ is the total of all three.)',
    },
  ],
  // p6 — every variable rewritten in terms of one of them.
  [
    {
      q: 'If $b = 3a$, $c = 2b$, and $a + b + c = 30$, what is $c$?',
      choices: ['$3$', '$9$', '$10$', '$18$'],
      answer: 3,
      solution:
        'Write everything in terms of $a$: $b = 3a$ and $c = 2b = 6a$. Then $a + 3a + 6a = 10a = 30$, so $a = 3$, $b = 9$, and $c = 18$. Check: $3 + 9 + 18 = 30$ ✓, and $18 = 2 \\times 9$ ✓. (The choice $3$ is $a$ and the choice $9$ is $b$ — the question asks for $c$. The choice $10$ comes from writing $c = 2a$ instead of $c = 2b$, which gives $6a = 30$, $a = 5$, and $c = 10$.)',
    },
    {
      q: 'If $q = 2p$, $r = 3q$, and $p + q + r = 45$, what is $q$?',
      choices: ['$10$', '$5$', '$30$', '$15$'],
      answer: 0,
      solution:
        'In terms of $p$: $q = 2p$ and $r = 3q = 6p$. So $p + 2p + 6p = 9p = 45$, giving $p = 5$, $q = 10$, and $r = 30$. Check: $5 + 10 + 30 = 45$ ✓, and $30 = 3 \\times 10$ ✓. (The choice $5$ is $p$ and the choice $30$ is $r$. The choice $15$ is $45 \\div 3$, splitting the total equally among the three variables — but they are not equal, they are in the ratio $1 : 2 : 6$.)',
    },
    {
      q: 'If $y = 3x$, $z = x + y$, and $x + y + z = 40$, what is $x$?',
      choices: ['$15$', '$5$', '$20$', '$10$'],
      answer: 1,
      solution:
        'Rewrite in terms of $x$: $y = 3x$, and $z = x + y = x + 3x = 4x$. Then $x + 3x + 4x = 8x = 40$, so $x = 5$, $y = 15$, and $z = 20$. Check: $5 + 15 + 20 = 40$ ✓, and $20 = 5 + 15$ ✓. (The choice $15$ is $y$ and the choice $20$ is $z$. The choice $10$ comes from leaving $z$ out of the total and solving $x + y = 40$, which gives $4x = 40$.)',
    },
  ],
  // p7 — solve the symmetric system, then compare the three values.
  [
    {
      q: 'If $a + b = 14$, $b + c = 20$, and $a + c = 18$, which of $a$, $b$, $c$ is the largest, and what is its value?',
      choices: ['$b$, which is $8$', '$a$, which is $6$', '$c$, which is $12$', '$c$, which is $26$'],
      answer: 2,
      solution:
        'Add all three: $2(a + b + c) = 14 + 20 + 18 = 52$, so $a + b + c = 26$. Peel off each variable: $a = 26 - 20 = 6$, $b = 26 - 18 = 8$, $c = 26 - 14 = 12$. The largest is $c = 12$. Check: $6 + 8 = 14$ ✓, $8 + 12 = 20$ ✓, $6 + 12 = 18$ ✓. (The choices naming $a$ and $b$ pick out the two smaller values. The choice "$c$, which is $26$" identifies the right variable but reports the grand total instead of subtracting $a + b = 14$ from it.)',
    },
    {
      q: 'If $p + q = 19$, $q + r = 23$, and $p + r = 16$, which of $p$, $q$, $r$ is the smallest, and what is its value?',
      choices: ['$q$, which is $13$', '$r$, which is $10$', '$p$, which is $29$', '$p$, which is $6$'],
      answer: 3,
      solution:
        'Add all three: $2(p + q + r) = 19 + 23 + 16 = 58$, so $p + q + r = 29$. Peel off each: $p = 29 - 23 = 6$, $q = 29 - 16 = 13$, $r = 29 - 19 = 10$. The SMALLEST is $p = 6$. Check: $6 + 13 = 19$ ✓, $13 + 10 = 23$ ✓, $6 + 10 = 16$ ✓. (The choice "$q$, which is $13$" answers the opposite question — that is the largest. The choice naming $r$ picks the middle value. The choice "$p$, which is $29$" names the right variable but gives the grand total.)',
    },
    {
      q: 'If $d + e = 22$, $e + f = 15$, and $d + f = 19$, which of $d$, $e$, $f$ is the largest, and what is its value?',
      choices: ['$d$, which is $13$', '$f$, which is $6$', '$e$, which is $9$', '$d$, which is $28$'],
      answer: 0,
      solution:
        'Add all three: $2(d + e + f) = 22 + 15 + 19 = 56$, so $d + e + f = 28$. Peel off each: $d = 28 - 15 = 13$, $e = 28 - 19 = 9$, $f = 28 - 22 = 6$. The largest is $d = 13$. Check: $13 + 9 = 22$ ✓, $9 + 6 = 15$ ✓, $13 + 6 = 19$ ✓. (The choices naming $f$ and $e$ report the smallest and the middle value. The choice "$d$, which is $28$" stops at the grand total instead of subtracting $e + f = 15$.)',
    },
  ],
  // p8 — one variable plus two offsets from it.
  [
    {
      q: 'If $a + b + c = 33$, $b = a + 3$, and $c = a + 6$, what is $c$?',
      choices: ['$8$', '$14$', '$11$', '$24$'],
      answer: 1,
      solution:
        'Substitute both expressions into the total: $a + (a + 3) + (a + 6) = 33$, so $3a + 9 = 33$, giving $3a = 24$ and $a = 8$. Then $b = 11$ and $c = 8 + 6 = 14$. Check: $8 + 11 + 14 = 33$ ✓. (The choice $8$ is $a$ and the choice $11$ is $b$. The choice $24$ is the value of $3a$, one division short of $a$ — and it is not $c$ either way.)',
    },
    {
      q: 'If $p + q + r = 41$, $q = p + 4$, and $r = p + 7$, what is $p$?',
      choices: ['$17$', '$14$', '$10$', '$30$'],
      answer: 2,
      solution:
        'Substitute: $p + (p + 4) + (p + 7) = 41$, so $3p + 11 = 41$, giving $3p = 30$ and $p = 10$. Then $q = 14$ and $r = 17$. Check: $10 + 14 + 17 = 41$ ✓. (The choice $17$ is $r$ and the choice $14$ is $q$. The choice $30$ is the value of $3p$, stopping before the division.)',
    },
    {
      q: 'If $m + n + t = 47$, $n = m + 5$, and $t = m + 9$, what is $n$?',
      choices: ['$16$', '$20$', '$11$', '$33$'],
      answer: 0,
      solution:
        'Substitute: $m + (m + 5) + (m + 9) = 47$, so $3m + 14 = 47$, giving $3m = 33$ and $m = 11$. Then $n = 11 + 5 = 16$ and $t = 20$. Check: $11 + 16 + 20 = 47$ ✓. (The choice $20$ is $t$ and the choice $11$ is $m$. The choice $33$ is the value of $3m$, one division early.)',
    },
  ],
  // p9 — each variable doubled once: adding gives four copies of the total.
  [
    {
      q: 'If $2a + b + c = 21$, $a + 2b + c = 23$, and $a + b + 2c = 28$, what is $a + b + c$?',
      choices: ['$72$', '$24$', '$18$', '$36$'],
      answer: 2,
      solution:
        'Add all three equations. Each letter appears once, once, and twice, for four copies in all: $4(a + b + c) = 21 + 23 + 28 = 72$, so $a + b + c = 18$. Check by subtracting $18$ from each equation: $a = 21 - 18 = 3$, $b = 23 - 18 = 5$, $c = 28 - 18 = 10$, and $3 + 5 + 10 = 18$ ✓, with $2(3) + 5 + 10 = 21$ ✓, $3 + 2(5) + 10 = 23$ ✓, $3 + 5 + 2(10) = 28$ ✓. (The choice $72$ never divides. The choice $36$ divides by $2$, the rule for a system where each letter appears twice — here each appears FOUR times. The choice $24$ divides by $3$, one per variable.)',
    },
    {
      q: 'If $2p + q + r = 26$, $p + 2q + r = 27$, and $p + q + 2r = 31$, what is $p + q + r$?',
      choices: ['$84$', '$42$', '$28$', '$21$'],
      answer: 3,
      solution:
        'Adding all three gives four copies of each letter: $4(p + q + r) = 26 + 27 + 31 = 84$, so $p + q + r = 21$. Check: $p = 26 - 21 = 5$, $q = 27 - 21 = 6$, $r = 31 - 21 = 10$, and $5 + 6 + 10 = 21$ ✓, with $2(5) + 6 + 10 = 26$ ✓, $5 + 2(6) + 10 = 27$ ✓, $5 + 6 + 2(10) = 31$ ✓. (The choice $84$ forgets to divide. The choice $42$ divides by $2$ instead of $4$. The choice $28$ divides by $3$, one for each variable.)',
    },
    {
      q: 'If $2m + n + t = 23$, $m + 2n + t = 26$, and $m + n + 2t = 31$, what is $t$?',
      choices: ['$3$', '$11$', '$20$', '$80$'],
      answer: 1,
      solution:
        'Add all three: $4(m + n + t) = 23 + 26 + 31 = 80$, so $m + n + t = 20$. Now subtract that total from the third equation: $(m + n + 2t) - (m + n + t) = 31 - 20$, which leaves $t = 11$. Check: $m = 23 - 20 = 3$ and $n = 26 - 20 = 6$, so $3 + 6 + 11 = 20$ ✓, with $2(3) + 6 + 11 = 23$ ✓, $3 + 2(6) + 11 = 26$ ✓, $3 + 6 + 2(11) = 31$ ✓. (The choice $20$ is the total $m + n + t$, one subtraction short. The choice $3$ is $m$, from subtracting the total from the FIRST equation. The choice $80$ is the raw sum before dividing by $4$.)',
    },
  ],
  // p10 — four variables in a chain: group them so the middle pair cancels.
  [
    {
      q: 'If $a + b = 6$, $b + c = 9$, and $c + d = 11$, what is $d + a$?',
      choices: ['$8$', '$17$', '$26$', '$5$'],
      answer: 0,
      solution:
        'Group the outer two equations: $(a + b) + (c + d) = 6 + 11 = 17$, so all four letters together make $17$. The pair $(b + c) + (d + a)$ uses exactly the same four letters, so it also makes $17$. Since $b + c = 9$, we get $d + a = 17 - 9 = 8$. Check with any allowed choice of $b$: if $b = 2$ then $a = 4$, $c = 7$, $d = 4$, and $d + a = 8$ ✓; if $b = 3$ then $a = 3$, $c = 6$, $d = 5$, and $d + a = 8$ ✓. (The choice $17$ is the total of all four letters, one subtraction short. The choice $26$ adds all three equations, which counts $b$ and $c$ twice. The choice $5$ comes from $11 - 6$, subtracting the outer equations from each other.)',
    },
    {
      q: 'If $p + q = 8$, $q + r = 13$, and $r + s = 15$, what is $s + p$?',
      choices: ['$23$', '$7$', '$10$', '$36$'],
      answer: 2,
      solution:
        'Pair the first and third equations: $(p + q) + (r + s) = 8 + 15 = 23$, so all four letters sum to $23$. The grouping $(q + r) + (s + p)$ covers the same four letters, so it equals $23$ too. With $q + r = 13$, that gives $s + p = 23 - 13 = 10$. Check with $q = 5$: then $p = 3$, $r = 8$, $s = 7$, and $s + p = 10$ ✓; with $q = 6$: $p = 2$, $r = 7$, $s = 8$, and $s + p = 10$ ✓. (The choice $23$ is the four-letter total, not the pair asked for. The choice $36$ adds all three equations and double-counts $q$ and $r$. The choice $7$ comes from $15 - 8$, subtracting the outer equations.)',
    },
    {
      q: 'If $a + b = 7$, $b + c = 12$, and $c + d = 15$, what is $a + b + c + d$?',
      choices: ['$34$', '$22$', '$17$', '$8$'],
      answer: 1,
      solution:
        'The first and third equations between them mention each of the four letters exactly once, so just add those two: $a + b + c + d = 7 + 15 = 22$. The middle equation is not needed at all. Check with $b = 3$: then $a = 4$, $c = 9$, $d = 6$, and $4 + 3 + 9 + 6 = 22$ ✓. (The choice $34$ adds all three equations, counting $b$ and $c$ twice. The choice $17$ halves that sum of $34$ — the halving trick belongs to a ring of THREE equations in three letters, not to a chain of four. The choice $8$ comes from $15 - 7$.)',
    },
  ],
]

const challenge = [
  // 1. Sum and difference, then a product — two steps past the system.
  [
    {
      q: 'If $x + y = 18$ and $x - y = 4$, what is the product $xy$?',
      choices: ['$77$', '$154$', '$72$', '$18$'],
      answer: 0,
      solution:
        'Add the equations to cancel $y$: $2x = 22$, so $x = 11$. Then $11 + y = 18$ gives $y = 7$. The product is $11 \\times 7 = 77$. Check both originals: $11 + 7 = 18$ ✓ and $11 - 7 = 4$ ✓. (The choice $154$ comes from $2y = 14$ and then using $y = 14$ without halving, giving $11 \\times 14$. The choice $72$ multiplies the two given numbers, $18 \\times 4$, instead of the two unknowns. The choice $18$ reports the sum — the product was asked for.)',
    },
    {
      q: 'If $x + y = 20$ and $x - y = 8$, what is the product $xy$?',
      choices: ['$168$', '$20$', '$84$', '$160$'],
      answer: 2,
      solution:
        'Add: $2x = 28$, so $x = 14$, and then $y = 20 - 14 = 6$. The product is $14 \\times 6 = 84$. Check: $14 + 6 = 20$ ✓ and $14 - 6 = 8$ ✓. (The choice $168$ comes from $2y = 12$ and then forgetting to halve, giving $14 \\times 12$. The choice $160$ multiplies the givens, $20 \\times 8$. The choice $20$ is the sum, not the product.)',
    },
    {
      q: 'Two numbers have a sum of $24$ and a difference of $10$. What is their product?',
      choices: ['$240$', '$238$', '$24$', '$119$'],
      answer: 3,
      solution:
        'Call them $x$ and $y$ with $x$ the larger: $x + y = 24$ and $x - y = 10$. Adding gives $2x = 34$, so $x = 17$ and $y = 24 - 17 = 7$. The product is $17 \\times 7 = 119$. Check: $17 + 7 = 24$ ✓ and $17 - 7 = 10$ ✓. (The choice $240$ multiplies the sum by the difference. The choice $238$ comes from $2y = 14$ and using $y = 14$ unhalved, giving $17 \\times 14$. The choice $24$ is the sum itself.)',
    },
  ],
  // 2. Two equations sharing a bare +y — subtract, then finish.
  [
    {
      q: 'Solve $4x + y = 26$ and $x + y = 11$. What is $y$?',
      choices: ['$5$', '$6$', '$15$', '$-6$'],
      answer: 1,
      solution:
        'Both equations end in $+y$, so subtract the second from the first: $(4x + y) - (x + y) = 26 - 11$, leaving $3x = 15$ and $x = 5$. Then $5 + y = 11$ gives $y = 6$. Check: $4(5) + 6 = 26$ ✓ and $5 + 6 = 11$ ✓. (The choice $5$ is $x$, not $y$. The choice $15$ is the value of $3x$, stopping before the division. The choice $-6$ comes from subtracting backwards at the last step, computing $5 - 11$.)',
    },
    {
      q: 'Solve $5x + y = 34$ and $x + y = 10$. What is $x$?',
      choices: ['$4$', '$-6$', '$6$', '$24$'],
      answer: 2,
      solution:
        'Subtract the second equation from the first: $4x = 34 - 10 = 24$, so $x = 6$. Then $6 + y = 10$ gives $y = 4$. Check: $5(6) + 4 = 34$ ✓ and $6 + 4 = 10$ ✓. (The choice $4$ is $y$. The choice $24$ is the value of $4x$, one division short. The choice $-6$ subtracts the right-hand sides in the wrong order, $10 - 34 = -24$.)',
    },
    {
      q: 'Solve $2x + 3y = 31$ and $x + 3y = 20$. What is $x + y$?',
      choices: ['$11$', '$3$', '$51$', '$14$'],
      answer: 3,
      solution:
        'The $3y$ terms match, so subtract: $(2x + 3y) - (x + 3y) = 31 - 20$, leaving $x = 11$. Then $11 + 3y = 20$ gives $3y = 9$ and $y = 3$. The question asks for $x + y = 11 + 3 = 14$. Check both originals: $2(11) + 3(3) = 22 + 9 = 31$ ✓ and $11 + 9 = 20$ ✓. (The choice $11$ is $x$ alone and the choice $3$ is $y$ alone — one more addition was needed. The choice $51$ adds the two right-hand sides.)',
    },
  ],
  // 3. Substitution where one equation already gives y — report the whole pair.
  [
    {
      q: 'Solve the system $y = 4x - 3$ and $3x + y = 32$.',
      choices: ['$(17, 5)$', '$(5, 20)$', '$(5, 17)$', '$(4, 13)$'],
      answer: 2,
      solution:
        'Substitute $4x - 3$ for $y$: $3x + (4x - 3) = 32$, so $7x - 3 = 32$, giving $7x = 35$ and $x = 5$. Then $y = 4(5) - 3 = 17$, so the pair is $(5, 17)$. Check: $17 = 4(5) - 3$ ✓ and $3(5) + 17 = 32$ ✓. (The choice $(17, 5)$ has the coordinates reversed. The choice $(5, 20)$ drops the $-3$, using $y = 4x$. The choice $(4, 13)$ does satisfy $y = 4x - 3$, but $3(4) + 13 = 25$, not $32$ — a pair must pass BOTH equations.)',
    },
    {
      q: 'Solve the system $y = 3x + 2$ and $5x + y = 34$.',
      choices: ['$(4, 14)$', '$(14, 4)$', '$(4, 12)$', '$(3, 11)$'],
      answer: 0,
      solution:
        'Substitute: $5x + (3x + 2) = 34$, so $8x + 2 = 34$, giving $8x = 32$ and $x = 4$. Then $y = 3(4) + 2 = 14$, so the pair is $(4, 14)$. Check: $14 = 3(4) + 2$ ✓ and $5(4) + 14 = 34$ ✓. (The choice $(14, 4)$ reverses the coordinates. The choice $(4, 12)$ drops the $+2$. The choice $(3, 11)$ satisfies $y = 3x + 2$ but gives $5(3) + 11 = 26$, failing the second equation.)',
    },
    {
      q: 'Solve the system $y = 2x - 6$ and $3x + y = 29$.',
      choices: ['$(8, 7)$', '$(7, 14)$', '$(5, 4)$', '$(7, 8)$'],
      answer: 3,
      solution:
        'Substitute: $3x + (2x - 6) = 29$, so $5x - 6 = 29$, giving $5x = 35$ and $x = 7$. Then $y = 2(7) - 6 = 8$, so the pair is $(7, 8)$. Check: $8 = 2(7) - 6$ ✓ and $3(7) + 8 = 29$ ✓. (The choice $(8, 7)$ reverses the coordinates — and here the two values differ, so the swap really does give a different, wrong pair. The choice $(7, 14)$ drops the $-6$. The choice $(5, 4)$ satisfies $y = 2x - 6$ but gives $3(5) + 4 = 19$, not $29$.)',
    },
  ],
  // 4. Tickets: a count equation and a value equation.
  [
    {
      q: 'A concert sold $150$ tickets — adults at $\\$9$ and students at $\\$5$ — for a total of $\\$1070$. How many student tickets were sold?',
      choices: ['$80$', '$70$', '$350$', '$150$'],
      answer: 1,
      solution:
        'Let $a$ be adult tickets and $s$ be student tickets. Count: $a + s = 150$. Value: $9a + 5s = 1070$. Multiply the count equation by $9$: $9a + 9s = 1350$. Subtract the value equation: $4s = 280$, so $s = 70$, and then $a = 80$. Check against the story: $80$ adults and $70$ students really do make $150$ tickets, and $9(80) + 5(70) = 720 + 350 = 1070$ ✓. (The choice $80$ is the number of ADULT tickets. The choice $350$ is the dollars the students paid, not how many of them there were. The choice $150$ is the total ticket count.)',
    },
    {
      q: 'A ferry sold $140$ tickets — adults at $\\$8$ and children at $\\$3$ — for a total of $\\$845$. How many adult tickets were sold?',
      choices: ['$55$', '$140$', '$680$', '$85$'],
      answer: 3,
      solution:
        'Count: $a + c = 140$. Value: $8a + 3c = 845$. Multiply the count by $3$: $3a + 3c = 420$. Subtract that from the value equation: $5a = 425$, so $a = 85$ and $c = 55$. Check: $85 + 55 = 140$ tickets ✓ and $8(85) + 3(55) = 680 + 165 = 845$ ✓. (The choice $55$ is the number of CHILD tickets. The choice $680$ is the dollars the adults paid. The choice $140$ is the total number of tickets.)',
    },
    {
      q: 'A theater sold $90$ tickets — lawn seats at $\\$6$ and stand seats at $\\$11$ — for a total of $\\$740$. How many MORE lawn tickets than stand tickets were sold?',
      choices: ['$50$', '$40$', '$10$', '$90$'],
      answer: 2,
      solution:
        'Let $\\ell$ be lawn tickets and $s$ be stand tickets. Count: $\\ell + s = 90$. Value: $6\\ell + 11s = 740$. Multiply the count by $6$: $6\\ell + 6s = 540$. Subtract from the value equation: $5s = 200$, so $s = 40$ and $\\ell = 50$. The question asks for the DIFFERENCE: $50 - 40 = 10$. Check: $6(50) + 11(40) = 300 + 440 = 740$ ✓. (The choice $50$ is the lawn count and the choice $40$ is the stand count — each is one subtraction short of the answer. The choice $90$ is the total.)',
    },
  ],
  // 5. Fractions in disguise — clear the denominators first.
  [
    {
      q: 'Solve $\\frac{x+y}{5} = 4$ and $\\frac{x-y}{3} = 2$. What is $x$?',
      choices: ['$3$', '$13$', '$26$', '$7$'],
      answer: 1,
      solution:
        'Multiply the first equation by $5$ and the second by $3$: $x + y = 20$ and $x - y = 6$. Add them: $2x = 26$, so $x = 13$, and then $y = 7$. Check the ORIGINALS: $\\frac{13+7}{5} = 4$ ✓ and $\\frac{13-7}{3} = 2$ ✓. (The choice $7$ is $y$. The choice $26$ is the value of $2x$, one halving short. The choice $3$ comes from never clearing the fractions at all and solving $x + y = 4$ with $x - y = 2$.)',
    },
    {
      q: 'Solve $\\frac{x+y}{3} = 8$ and $\\frac{x-y}{4} = 2$. What is $y$?',
      choices: ['$16$', '$3$', '$8$', '$12$'],
      answer: 2,
      solution:
        'Clear the fractions: $x + y = 24$ and $x - y = 8$. Subtract the second from the first: $2y = 16$, so $y = 8$, and then $x = 16$. Check the originals: $\\frac{16+8}{3} = 8$ ✓ and $\\frac{16-8}{4} = 2$ ✓. (The choice $16$ is $x$. The choice $3$ comes from leaving the denominators in place and solving $x + y = 8$ with $x - y = 2$. The choice $12$ halves the sum $24$ and ignores the difference entirely.)',
    },
    {
      q: 'Solve $\\frac{2x+y}{3} = 7$ and $\\frac{x+y}{2} = 6$. What is $x$?',
      choices: ['$3$', '$12$', '$1$', '$9$'],
      answer: 3,
      solution:
        'Clear the denominators: $2x + y = 21$ and $x + y = 12$. Both contain a bare $+y$, so subtract: $x = 9$. Then $9 + y = 12$ gives $y = 3$. Check the originals: $\\frac{2(9)+3}{3} = \\frac{21}{3} = 7$ ✓ and $\\frac{9+3}{2} = 6$ ✓. (The choice $3$ is $y$. The choice $12$ is $x + y$, not $x$. The choice $1$ comes from skipping the clearing step and solving $2x + y = 7$ with $x + y = 6$.)',
    },
  ],
  // 6. Counting the solutions: proportional left sides decide everything.
  [
    {
      q: 'How many solutions does the system $3x + 5y = 12$ and $6x + 10y = 30$ have?',
      choices: ['Infinitely many', 'None', 'Exactly one', 'Exactly two'],
      answer: 1,
      solution:
        'Double the first equation: it becomes $6x + 10y = 24$. The second equation insists the very same left side equals $30$. One expression cannot be both $24$ and $30$, so the system has NO solution. (Choosing "infinitely many" is the classic slip: the left sides do match after doubling, but the right sides do not — $2 \\times 12 = 24$, not $30$. "Exactly one" would need left sides that are NOT proportional, and a linear system can never have exactly two solutions.)',
    },
    {
      q: 'How many solutions does the system $4x + 7y = 20$ and $12x + 21y = 60$ have?',
      choices: ['None', 'Exactly one', 'Infinitely many', 'Exactly two'],
      answer: 2,
      solution:
        'Multiply the first equation by $3$: $12x + 21y = 60$ — character for character the second equation. The two equations carry exactly the same information, so every solution of one solves the other, and there are infinitely many: $(5, 0)$, $(-2, 4)$, and endlessly on. ("None" comes from noticing the left sides match and stopping there without checking that $3 \\times 20 = 60$ as well. "Exactly one" would need left sides that are not proportional. A linear system never has exactly two solutions.)',
    },
    {
      q: 'How many solutions does the system $2x + 5y = 18$ and $6x + 10y = 44$ have?',
      choices: ['Exactly one', 'None', 'Infinitely many', 'Exactly two'],
      answer: 0,
      solution:
        'Tripling the first equation gives $6x + 15y = 54$, whose $y$ term does not match the second equation — the left sides are NOT proportional ($2 : 6$ is not $5 : 10$). So this is an ordinary system with exactly one solution. Halve the second equation to get $3x + 5y = 22$, subtract the first, and $x = 4$; then $2(4) + 5y = 18$ gives $y = 2$. Check: $6(4) + 10(2) = 24 + 20 = 44$ ✓. ("None" and "infinitely many" both require proportional left sides, which this system does not have; a linear system never has exactly two solutions.)',
    },
  ],
  // 7. An average is a disguised sum.
  [
    {
      q: 'The average of two numbers is $20$, and their difference is $8$. What is the larger number?',
      choices: ['$28$', '$24$', '$14$', '$16$'],
      answer: 1,
      solution:
        'An average of $20$ means the SUM is $2 \\times 20 = 40$. So $x + y = 40$ and $x - y = 8$. Add: $2x = 48$, giving $x = 24$ and $y = 16$. Check: the average of $24$ and $16$ is $\\frac{40}{2} = 20$ ✓, and $24 - 16 = 8$ ✓. (The choice $16$ is the smaller number. The choice $14$ treats the average as the sum, solving $x + y = 20$ with $x - y = 8$. The choice $28$ just adds the average and the difference.)',
    },
    {
      q: 'The average of two numbers is $16$, and their difference is $6$. What is the smaller number?',
      choices: ['$13$', '$19$', '$5$', '$10$'],
      answer: 0,
      solution:
        'The sum is $2 \\times 16 = 32$, so $x + y = 32$ and $x - y = 6$. Subtracting gives $2y = 26$, so the smaller number is $y = 13$ (and $x = 19$). Check: $\\frac{19 + 13}{2} = 16$ ✓ and $19 - 13 = 6$ ✓. (The choice $19$ is the larger number. The choice $5$ treats the average as the sum, solving $x + y = 16$ with $x - y = 6$. The choice $10$ subtracts the difference from the average, $16 - 6$.)',
    },
    {
      q: 'The average of two numbers is $25$, and one of them is $12$ more than the other. What is the larger number?',
      choices: ['$19$', '$37$', '$31$', '$25$'],
      answer: 2,
      solution:
        'The average of $25$ means the sum is $50$, and "one is $12$ more" means the difference is $12$: $x + y = 50$ and $x - y = 12$. Add: $2x = 62$, so $x = 31$ and $y = 19$. Check: $\\frac{31 + 19}{2} = 25$ ✓ and $31 - 19 = 12$ ✓. (The choice $19$ is the smaller number. The choice $37$ adds $25 + 12$. The choice $25$ is the average itself, which would only be the answer if the two numbers were equal.)',
    },
  ],
  // 8. Three pairwise sums — add, halve, peel.
  [
    {
      q: 'If $a + b = 21$, $b + c = 26$, and $a + c = 23$, what is $b$?',
      choices: ['$9$', '$12$', '$14$', '$35$'],
      answer: 1,
      solution:
        'Add all three equations: $2(a + b + c) = 21 + 26 + 23 = 70$, so $a + b + c = 35$. To isolate $b$, subtract the equation without $b$ in it, namely $a + c = 23$: $b = 35 - 23 = 12$. Check: $a = 35 - 26 = 9$ and $c = 35 - 21 = 14$, so $9 + 12 = 21$ ✓, $12 + 14 = 26$ ✓, $9 + 14 = 23$ ✓. (The choice $9$ subtracts $b + c = 26$ and lands on $a$. The choice $14$ lands on $c$. The choice $35$ is the grand total.)',
    },
    {
      q: 'If $m + n = 18$, $n + k = 25$, and $m + k = 23$, what is $m$?',
      choices: ['$10$', '$15$', '$33$', '$8$'],
      answer: 3,
      solution:
        'Add all three: $2(m + n + k) = 18 + 25 + 23 = 66$, so $m + n + k = 33$. Subtract the equation without $m$, namely $n + k = 25$: $m = 33 - 25 = 8$. Check: $n = 33 - 23 = 10$ and $k = 33 - 18 = 15$, so $8 + 10 = 18$ ✓, $10 + 15 = 25$ ✓, $8 + 15 = 23$ ✓. (The choice $10$ is $n$ and the choice $15$ is $k$ — each comes from subtracting the wrong equation. The choice $33$ is the total, one subtraction short.)',
    },
    {
      q: 'If $u + v = 12$, $v + w = 20$, and $u + w = 16$, what is $w - u$?',
      choices: ['$8$', '$-8$', '$4$', '$12$'],
      answer: 0,
      solution:
        'You do not need the individual values here. Subtract the first equation from the second: $(v + w) - (u + v) = 20 - 12$, and the $v$ terms cancel, leaving $w - u = 8$. Check with the actual values: adding all three gives $2(u + v + w) = 48$, so the total is $24$ and $u = 24 - 20 = 4$, $v = 24 - 16 = 8$, $w = 24 - 12 = 12$; indeed $12 - 4 = 8$ ✓ and $4 + 8 = 12$ ✓, $8 + 12 = 20$ ✓, $4 + 12 = 16$ ✓. (The choice $-8$ subtracts in the wrong order, $12 - 20$. The choice $4$ is $u$ and the choice $12$ is $w$ — the question asks for their difference.)',
    },
  ],
  // 9. Matching coefficients on one variable — subtract straight away.
  [
    {
      q: 'Solve $7x + 4y = 61$ and $3x + 4y = 33$. What is $x$?',
      choices: ['$3$', '$7$', '$-7$', '$28$'],
      answer: 1,
      solution:
        'The $4y$ terms already match, so subtract the second equation from the first: $4x = 61 - 33 = 28$, giving $x = 7$. Then $3(7) + 4y = 33$ gives $4y = 12$ and $y = 3$. Check both: $7(7) + 4(3) = 49 + 12 = 61$ ✓ and $3(7) + 4(3) = 21 + 12 = 33$ ✓. (The choice $3$ is $y$. The choice $28$ is the value of $4x$, one division short. The choice $-7$ subtracts the right-hand sides in the wrong order, $33 - 61 = -28$.)',
    },
    {
      q: 'Solve $6x + 5y = 39$ and $2x + 5y = 23$. What is $y$?',
      choices: ['$4$', '$15$', '$3$', '$16$'],
      answer: 2,
      solution:
        'Subtract to remove the matching $5y$: $4x = 39 - 23 = 16$, so $x = 4$. Then $2(4) + 5y = 23$ gives $5y = 15$ and $y = 3$. Check both: $6(4) + 5(3) = 24 + 15 = 39$ ✓ and $2(4) + 5(3) = 8 + 15 = 23$ ✓. (The choice $4$ is $x$, not $y$. The choice $15$ is the value of $5y$, stopping before the division. The choice $16$ is the value of $4x$.)',
    },
    {
      q: 'Solve $4x + 7y = 40$ and $4x + 3y = 24$. What is the product $xy$?',
      choices: ['$7$', '$4$', '$16$', '$12$'],
      answer: 3,
      solution:
        'This time the $4x$ terms match, so subtract: $4y = 40 - 24 = 16$, giving $y = 4$. Then $4x + 3(4) = 24$ gives $4x = 12$ and $x = 3$. The product is $3 \\times 4 = 12$. Check both: $4(3) + 7(4) = 12 + 28 = 40$ ✓ and $4(3) + 3(4) = 12 + 12 = 24$ ✓. (The choice $7$ is the SUM $x + y$, not the product. The choice $4$ is $y$ alone. The choice $16$ is the value of $4y$, one division short.)',
    },
  ],
  // 10. Choosing k so a second equation is a copy of the first.
  [
    {
      q: 'For what value of $k$ does the system $x + 3y = 7$ and $4x + 12y = k$ have infinitely many solutions?',
      choices: ['$28$', '$7$', '$11$', '$4$'],
      answer: 0,
      solution:
        'The left side of the second equation is exactly $4$ times the left side of the first, so the equations agree only if the RIGHT side is multiplied by $4$ as well: $k = 4 \\times 7 = 28$. Then the second equation is a copy of the first and every solution of $x + 3y = 7$ works. For any other $k$ the two demand different values from the same expression, and there is no solution at all. (The choice $7$ copies the first right-hand side without scaling it. The choice $11$ adds $7 + 4$. The choice $4$ is the multiplier itself.)',
    },
    {
      q: 'For what value of $k$ does the system $2x + 5y = 9$ and $6x + 15y = k$ have infinitely many solutions?',
      choices: ['$9$', '$12$', '$27$', '$3$'],
      answer: 2,
      solution:
        'The second left side is $3$ times the first, so the right side must be tripled too: $k = 3 \\times 9 = 27$. Then the equations are identical and there are infinitely many solutions; any other $k$ gives a contradiction and none. (The choice $9$ copies the right-hand side unscaled. The choice $12$ adds $9 + 3$. The choice $3$ is the multiplier.)',
    },
    {
      q: 'For what value of $k$ does the system $3x + 4y = 8$ and $9x + 12y = k$ have EXACTLY ONE solution?',
      choices: ['$24$', '$8$', '$3$', 'No value of $k$'],
      answer: 3,
      solution:
        'The second left side is always $3$ times the first, whatever $k$ is, so the two equations can never pin down a single pair. If $k = 24$ they are the same equation and there are infinitely many solutions; for every other $k$ they contradict each other and there are none. So no value of $k$ produces exactly one solution. (The choice $24$ is the value that gives infinitely many — the opposite of one. The choice $8$ copies the first right-hand side, and the choice $3$ is the multiplier; neither changes the fact that the left sides stay proportional.)',
    },
  ],
  // 11. Coins: count equation plus a value equation in cents.
  [
    {
      q: 'A jar of $30$ coins, all dimes and quarters, is worth $\\$5.55$. How many quarters are in the jar?',
      choices: ['$17$', '$13$', '$4$', '$30$'],
      answer: 0,
      solution:
        'Work in cents so everything stays a whole number: $d + q = 30$ and $10d + 25q = 555$. Multiply the count equation by $10$: $10d + 10q = 300$. Subtract: $15q = 255$, so $q = 17$ and $d = 13$. Check against the story: $13$ dimes and $17$ quarters really do make $30$ coins, and $10(13) + 25(17) = 130 + 425 = 555$ cents ✓. (The choice $13$ is the number of DIMES. The choice $4$ is how many more quarters than dimes there are. The choice $30$ is the total number of coins.)',
    },
    {
      q: 'A purse holds $20$ coins, all nickels and dimes, worth $\\$1.65$. How many nickels are in the purse?',
      choices: ['$13$', '$20$', '$7$', '$6$'],
      answer: 2,
      solution:
        'In cents: $n + d = 20$ and $5n + 10d = 165$. Multiply the count by $5$: $5n + 5d = 100$. Subtract: $5d = 65$, so $d = 13$ and $n = 20 - 13 = 7$. Check: $7 + 13 = 20$ coins ✓ and $5(7) + 10(13) = 35 + 130 = 165$ cents ✓. (The choice $13$ is the number of DIMES. The choice $6$ is the difference between the two counts. The choice $20$ is the total number of coins.)',
    },
    {
      q: 'A box holds $24$ coins, all dimes and quarters, worth $\\$4.50$ altogether. What is the total value of the quarters?',
      choices: ['$\\$1.00$', '$\\$3.50$', '$\\$4.50$', '$\\$2.40$'],
      answer: 1,
      solution:
        'In cents: $d + q = 24$ and $10d + 25q = 450$. Multiply the count by $10$: $10d + 10q = 240$. Subtract: $15q = 210$, so $q = 14$ and $d = 10$. The quarters are worth $25 \\times 14 = 350$ cents, or $\\$3.50$. Check: $10$ dimes and $14$ quarters are $24$ coins ✓, worth $100 + 350 = 450$ cents ✓. (The choice $\\$1.00$ is the value of the DIMES. The choice $\\$4.50$ is the whole box. The choice $\\$2.40$ values all $24$ coins at ten cents each.)',
    },
  ],
  // 12. Ages from pairwise sums — check the story, not just the algebra.
  [
    {
      q: 'Three cousins’ ages pair up like this: the first two sum to $17$, the last two sum to $25$, and the first and third sum to $22$. How old is the youngest cousin?',
      choices: ['$7$', '$15$', '$10$', '$32$'],
      answer: 0,
      solution:
        'Call the ages $A$, $B$, $C$: $A + B = 17$, $B + C = 25$, $A + C = 22$. Add all three: $2(A + B + C) = 64$, so $A + B + C = 32$. Peel off each: $A = 32 - 25 = 7$, $B = 32 - 22 = 10$, $C = 32 - 17 = 15$. The ages are $7$, $10$, and $15$ — three plausible cousins — and the youngest is $7$. Check: $7 + 10 = 17$ ✓, $10 + 15 = 25$ ✓, $7 + 15 = 22$ ✓. (The choice $15$ is the OLDEST cousin and the choice $10$ is the middle one. The choice $32$ is the sum of all three ages.)',
    },
    {
      q: 'Three friends’ ages pair up like this: the first two sum to $23$, the last two sum to $19$, and the first and third sum to $20$. How old is the oldest friend?',
      choices: ['$8$', '$11$', '$31$', '$12$'],
      answer: 3,
      solution:
        'With $A + B = 23$, $B + C = 19$, $A + C = 20$, adding gives $2(A + B + C) = 62$, so $A + B + C = 31$. Peel off each: $A = 31 - 19 = 12$, $B = 31 - 20 = 11$, $C = 31 - 23 = 8$. The ages are $12$, $11$, and $8$, so the oldest is $12$. Check: $12 + 11 = 23$ ✓, $11 + 8 = 19$ ✓, $12 + 8 = 20$ ✓. (Notice the oldest is listed FIRST here — the labels $A$, $B$, $C$ are just names, not an ordering. The choice $8$ is the youngest and the choice $11$ the middle friend; the choice $31$ is the sum of all three ages.)',
    },
    {
      q: 'Three siblings’ ages pair up like this: the two youngest sum to $14$, the two oldest sum to $23$, and the youngest and oldest sum to $19$. What is the sum of all three ages?',
      choices: ['$56$', '$37$', '$28$', '$14$'],
      answer: 2,
      solution:
        'Let the ages be $A < B < C$. The two youngest give $A + B = 14$, the two oldest give $B + C = 23$, and the youngest with the oldest gives $A + C = 19$. Add all three: $2(A + B + C) = 56$, so $A + B + C = 28$. Check the story too: $A = 28 - 23 = 5$, $B = 28 - 19 = 9$, $C = 28 - 14 = 14$, and $5 < 9 < 14$, so the labels really are youngest to oldest; also $5 + 9 = 14$ ✓, $9 + 14 = 23$ ✓, $5 + 14 = 19$ ✓. (The choice $56$ forgets to halve. The choice $37$ adds just two of the three pair sums, $14 + 23$. The choice $14$ is the oldest sibling’s age on its own.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 5,
  sections: {
    '5.6': s56,
  },
  challenge,
}
