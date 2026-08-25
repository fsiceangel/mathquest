// Prealgebra chapter 14 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.
// Every count below was checked by literally enumerating the objects being
// counted (nested loops over the actual dice, digits, letters, and lineups).

const challenge = [
  // 1. An inclusive range: count the numbers, not the gaps.
  [
    {
      q: 'A hallway has lockers numbered $46$ through $133$, with no numbers skipped. How many lockers are there?',
      choices: ['$86$', '$87$', '$88$', '$89$'],
      answer: 2,
      solution: 'Count the lockers, not the gaps between them: $133 - 46 + 1 = 88$. Test the idea on a tiny hallway — lockers $46$ and $47$ have a gap of $1$ but there are $2$ lockers. ($87$ is the bare subtraction $133 - 46$, which counts the steps from one locker to the next; $86$ subtracts one more, as though both end lockers were left out; $89$ applies the $+1$ twice.)',
    },
    {
      q: 'A magazine article runs from page $68$ to page $145$, using every page in between. How many pages long is it?',
      choices: ['$78$', '$77$', '$79$', '$76$'],
      answer: 0,
      solution: 'A page count is a fencepost count: $145 - 68 + 1 = 78$ pages. ($77$ is $145 - 68$, which counts page turns rather than pages; $79$ adds the $+1$ twice; $76$ drops a page at each end.)',
    },
    {
      q: 'A raffle uses tickets numbered $76$ through $164$, with no numbers skipped. How many tickets are there?',
      choices: ['$88$', '$90$', '$87$', '$89$'],
      answer: 3,
      solution: 'The list $76, 77, \\ldots, 164$ has $164 - 76 + 1 = 89$ members. ($88$ is $164 - 76$, the number of steps between neighbouring tickets; $90$ adds the $+1$ twice; $87$ subtracts an extra ticket on top of that.)',
    },
  ],
  // 2. Multiples inside a window — find the ends first, then count the list.
  [
    {
      q: 'How many multiples of $7$ are there from $200$ to $500$?',
      choices: ['$43$', '$42$', '$71$', '$44$'],
      answer: 0,
      solution: 'The first multiple of $7$ that is at least $200$ is $203 = 7 \\times 29$, and the last one at most $500$ is $497 = 7 \\times 71$. Dividing the list $203, 210, \\ldots, 497$ by $7$ gives $29, 30, \\ldots, 71$, which has $71 - 29 + 1 = 43$ numbers. ($42$ drops the $+1$; $71$ counts every multiple of $7$ from $1$ to $500$, ignoring the lower end; $44$ adds one too many.)',
    },
    {
      q: 'How many multiples of $8$ are there from $150$ to $400$?',
      choices: ['$31$', '$50$', '$32$', '$33$'],
      answer: 2,
      solution: 'The first multiple of $8$ that is at least $150$ is $152 = 8 \\times 19$, and the last one at most $400$ is $400 = 8 \\times 50$. Divide the list by $8$: it becomes $19, 20, \\ldots, 50$, which has $50 - 19 + 1 = 32$ numbers. ($31$ forgets the $+1$; $50$ counts the multiples of $8$ all the way from $1$; $33$ adds one too many.)',
    },
    {
      q: 'How many multiples of $9$ are there from $250$ to $600$?',
      choices: ['$38$', '$39$', '$66$', '$40$'],
      answer: 1,
      solution: 'The first multiple of $9$ at or above $250$ is $252 = 9 \\times 28$, and the last one at or below $600$ is $594 = 9 \\times 66$. Dividing the list by $9$ gives $28, 29, \\ldots, 66$, so there are $66 - 28 + 1 = 39$ of them. ($38$ leaves off the $+1$; $66$ counts from $9$ instead of from $252$; $40$ overshoots by one.)',
    },
  ],
  // 3. Either-or counting: add the groups, then remove the overlap once.
  [
    {
      q: 'How many numbers from $1$ to $72$ are multiples of $4$ or multiples of $6$?',
      choices: ['$30$', '$24$', '$27$', '$18$'],
      answer: 1,
      solution: 'From $1$ to $72$ there are $18$ multiples of $4$ and $12$ multiples of $6$. A number in BOTH groups is a multiple of $12$, and there are $6$ of those ($12, 24, \\ldots, 72$) — each was counted twice. So the answer is $18 + 12 - 6 = 24$. ($30$ forgets to subtract the overlap; $27$ uses multiples of $4 \\times 6 = 24$ as the overlap, but a number divisible by both $4$ and $6$ only has to be a multiple of $12$; $18$ subtracts the overlap twice.)',
    },
    {
      q: 'How many numbers from $1$ to $100$ are multiples of $6$ or multiples of $10$?',
      choices: ['$26$', '$25$', '$20$', '$23$'],
      answer: 3,
      solution: 'There are $16$ multiples of $6$ and $10$ multiples of $10$. The numbers in both groups are the multiples of $30$ — namely $30, 60, 90$, so $3$ of them — and they got counted once in each group. Subtract the overlap once: $16 + 10 - 3 = 23$. ($26$ never subtracts; $25$ uses multiples of $6 \\times 10 = 60$ as the overlap, catching only $60$; $20$ subtracts the $3$ twice.)',
    },
    {
      q: 'How many numbers from $1$ to $200$ are multiples of $8$ or multiples of $10$?',
      choices: ['$45$', '$43$', '$40$', '$35$'],
      answer: 2,
      solution: 'There are $25$ multiples of $8$ and $20$ multiples of $10$. Numbers in both groups are multiples of $40$: $40, 80, 120, 160, 200$, which is $5$ numbers, and each was counted twice. So the answer is $25 + 20 - 5 = 40$. ($45$ forgets the overlap entirely; $43$ uses multiples of $8 \\times 10 = 80$ as the overlap, finding only $2$; $35$ removes the overlap twice.)',
    },
  ],
  // 4. Slot counting where some slots may not repeat.
  [
    {
      q: 'A game tag is three different letters followed by one digit. How many tags are possible?',
      choices: ['$175{,}760$', '$15{,}600$', '$140{,}400$', '$156{,}000$'],
      answer: 3,
      solution: 'Four slots. The letter slots shrink because no letter repeats: $26 \\times 25 \\times 24 = 15{,}600$. The digit slot is free: $10$ options. Multiply: $15{,}600 \\times 10 = 156{,}000$. ($175{,}760 = 26 \\times 26 \\times 26 \\times 10$ lets the letters repeat; $15{,}600$ forgets the digit slot altogether; $140{,}400$ bans $0$ from the digit slot, but $0$ is a perfectly good digit here.)',
    },
    {
      q: 'A raffle code is two different letters followed by three different digits. How many codes are possible?',
      choices: ['$676{,}000$', '$468{,}000$', '$650{,}000$', '$58{,}500$'],
      answer: 1,
      solution: 'The letters give $26 \\times 25 = 650$ and the digits give $10 \\times 9 \\times 8 = 720$, since each slot loses one option to the slot before it. Multiply the two blocks: $650 \\times 720 = 468{,}000$. ($676{,}000$ lets everything repeat; $650{,}000$ keeps the letters different but lets the digits repeat; $58{,}500$ uses only two digit slots instead of three.)',
    },
    {
      q: 'A password is two different vowels (chosen from A, E, I, O, U) followed by two different digits. How many passwords are possible?',
      choices: ['$1800$', '$2500$', '$2000$', '$200$'],
      answer: 0,
      solution: 'Vowels: $5 \\times 4 = 20$ ways, since the second vowel cannot copy the first. Digits: $10 \\times 9 = 90$ ways. The two blocks are independent, so multiply: $20 \\times 90 = 1800$. ($2500 = 5 \\times 5 \\times 10 \\times 10$ lets both pairs repeat; $2000$ keeps the vowels different but lets the digits repeat; $200$ uses only one digit slot.)',
    },
  ],
  // 5. Distinct digits, with the leading slot handled first.
  [
    {
      q: 'How many four-digit numbers have all four digits different?',
      choices: ['$4536$', '$5040$', '$3024$', '$9000$'],
      answer: 0,
      solution: 'Handle the picky slot first: the thousands digit cannot be $0$, so it has $9$ options. The hundreds digit may now be $0$ but not the digit already used: $9$ options. Then $8$, then $7$. Total: $9 \\times 9 \\times 8 \\times 7 = 4536$. ($5040 = 10 \\times 9 \\times 8 \\times 7$ forgets that a four-digit number cannot start with $0$; $3024 = 9 \\times 8 \\times 7 \\times 6$ bans $0$ from every slot instead of just the first; $9000$ is simply how many four-digit numbers there are, with no condition at all.)',
    },
    {
      q: 'How many three-digit numbers have all three digits different and use no $0$ at all?',
      choices: ['$648$', '$729$', '$504$', '$720$'],
      answer: 2,
      solution: 'With $0$ banned everywhere, the hundreds slot has the nine digits $1$ through $9$, the tens slot has the $8$ that are left, and the units slot has $7$: $9 \\times 8 \\times 7 = 504$. ($648$ is the count when $0$ is allowed in the last two slots; $729 = 9 \\times 9 \\times 9$ lets the digits repeat; $720 = 10 \\times 9 \\times 8$ allows $0$ anywhere, even in front.)',
    },
    {
      q: 'How many three-digit numbers have all three digits different and an even hundreds digit?',
      choices: ['$360$', '$400$', '$320$', '$288$'],
      answer: 3,
      solution: 'Picky slot first: an even hundreds digit that is not $0$ leaves $2, 4, 6, 8$ — four options. The tens digit can be any digit except the one already used: $9$ options. The units digit avoids both: $8$ options. Total: $4 \\times 9 \\times 8 = 288$. ($360 = 5 \\times 9 \\times 8$ counts $0$ as an allowed hundreds digit — $0$ is even, but no three-digit number starts with it; $400 = 4 \\times 10 \\times 10$ forgets that the digits must differ; $320 = 4 \\times 10 \\times 8$ lets the tens digit copy the hundreds digit.)',
    },
  ],
  // 6. Glue the restricted pair into a block (and once, count the opposite).
  [
    {
      q: 'Six students line up at the door, but Ravi and Sofia insist on standing next to each other. How many lineups are possible?',
      choices: ['$120$', '$720$', '$240$', '$1440$'],
      answer: 2,
      solution: 'Glue Ravi and Sofia into a single block. That leaves $5$ units to arrange — the block plus the other $4$ students — in $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ ways. Inside the block there are $2$ orders. Multiply: $120 \\times 2 = 240$ lineups. ($120$ forgets the swap inside the block; $720$ is every lineup of $6$ students with no restriction; $1440$ doubles the unrestricted count instead of the block count.)',
    },
    {
      q: 'Five cousins line up for a photo, but the two youngest refuse to stand next to each other. How many lineups are possible?',
      choices: ['$48$', '$72$', '$96$', '$120$'],
      answer: 1,
      solution: 'Count the opposite and subtract. All five line up in $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ ways. Lineups where the two youngest ARE together: glue them into a block, giving $4 \\times 3 \\times 2 \\times 1 = 24$ arrangements of the four units, times $2$ for the order inside the block, so $48$. Subtract: $120 - 48 = 72$. ($48$ is the together count — the opposite of what was asked; $96 = 120 - 24$ forgets the swap inside the block; $120$ ignores the restriction.)',
    },
    {
      q: 'Seven runners line up at the start, but the two team captains must stand side by side. How many lineups are possible?',
      choices: ['$720$', '$5040$', '$2880$', '$1440$'],
      answer: 3,
      solution: 'Treat the two captains as one block. Then $6$ units line up in $6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$ ways, and the block itself has $2$ internal orders: $720 \\times 2 = 1440$. ($720$ forgets the swap inside the block; $5040$ is every lineup of $7$ runners with no restriction; $2880$ doubles the unrestricted count rather than the block count.)',
    },
  ],
  // 7. Casework on the leading digit, with a sum condition.
  [
    {
      q: 'How many three-digit numbers have digits that add up to $6$?',
      choices: ['$28$', '$21$', '$15$', '$6$'],
      answer: 1,
      solution: 'Case on the hundreds digit, which runs from $1$ to $6$ (a bigger one would already pass $6$). Once it is fixed, the last two digits must add to what is left, and a pair of digits adding to $s$ can be chosen in $s + 1$ ways: $0$ and $s$, $1$ and $s-1$, all the way to $s$ and $0$. The cases give $6, 5, 4, 3, 2, 1$ numbers, and no number lands in two cases because it has only one hundreds digit. Add: $6 + 5 + 4 + 3 + 2 + 1 = 21$. ($28$ also allows a hundreds digit of $0$, but then it is not a three-digit number; $15$ uses $s$ instead of $s + 1$ and loses every number ending in $0$; $6$ counts just one number per case.)',
    },
    {
      q: 'How many three-digit numbers have digits that add up to $7$?',
      choices: ['$28$', '$36$', '$21$', '$7$'],
      answer: 0,
      solution: 'Case on the hundreds digit $h$, which runs from $1$ to $7$. The last two digits must add to $7 - h$, and a pair of digits adding to $s$ can be picked in $s + 1$ ways. So the cases hold $7, 6, 5, 4, 3, 2, 1$ numbers. The cases cannot overlap (one hundreds digit each) and nothing is left out, so add: $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$. ($36$ lets the hundreds digit be $0$; $21$ counts $s$ ways instead of $s + 1$, dropping the numbers that end in $0$; $7$ assumes each case forces exactly one number.)',
    },
    {
      q: 'How many three-digit numbers have digits that add up to $8$?',
      choices: ['$45$', '$28$', '$36$', '$8$'],
      answer: 2,
      solution: 'Case on the hundreds digit $h$, running from $1$ to $8$. The other two digits must add to $8 - h$, which can be done in $(8 - h) + 1$ ways. The case counts are $8, 7, 6, 5, 4, 3, 2, 1$, and they are disjoint since a number has a single hundreds digit. Add: $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$. ($45$ throws in a hundreds digit of $0$; $28$ uses $s$ ways instead of $s + 1$; $8$ counts one number per case.)',
    },
  ],
  // 8. Dice casework — disjoint cases, then add.
  [
    {
      q: 'Two standard dice are rolled, one red and one blue. In how many ways can the sum be $5$ or less?',
      choices: ['$6$', '$15$', '$4$', '$10$'],
      answer: 3,
      solution: 'Case on the sum. Sum $2$: $(1,1)$ — $1$ way. Sum $3$: $(1,2), (2,1)$ — $2$ ways. Sum $4$: $(1,3), (2,2), (3,1)$ — $3$ ways. Sum $5$: $(1,4), (2,3), (3,2), (4,1)$ — $4$ ways. A roll has exactly one sum, so the cases cannot overlap, and together they cover everything at most $5$. Add: $1 + 2 + 3 + 4 = 10$. ($6$ stops at a sum of $4$; $15$ also counts the sum $6$; $4$ counts one roll per sum, forgetting that the red and blue dice are different.)',
    },
    {
      q: 'Two standard dice are rolled. In how many ways can the sum be a multiple of $5$?',
      choices: ['$4$', '$3$', '$7$', '$13$'],
      answer: 2,
      solution: 'The reachable sums are $2$ through $12$, so the only multiples of $5$ in play are $5$ and $10$. Sum $5$: $(1,4), (2,3), (3,2), (4,1)$ — $4$ ways. Sum $10$: $(4,6), (5,5), (6,4)$ — $3$ ways. No roll has two different sums, so the cases are disjoint and we add: $4 + 3 = 7$. ($4$ counts only the sum of $5$; $3$ counts only the sum of $10$; $13$ assumes a sum of $s$ always happens in $s - 1$ ways, which is true at $5$ but false at $10$, where the faces stop at $6$.)',
    },
    {
      q: 'Two standard dice are rolled. In how many ways can the sum be a prime number?',
      choices: ['$15$', '$14$', '$19$', '$13$'],
      answer: 0,
      solution: 'The possible sums run from $2$ to $12$, and the primes among them are $2, 3, 5, 7, 11$. Count each: sum $2$ has $1$ way, sum $3$ has $2$, sum $5$ has $4$, sum $7$ has $6$, and sum $11$ has $2$. Every roll has exactly one sum, so the cases neither overlap nor leave anything out. Add: $1 + 2 + 4 + 6 + 2 = 15$. ($14$ forgets that $2$ is prime; $19$ also counts the sum $9$, which is $3 \\times 3$; $13$ leaves out the sum $3$.)',
    },
  ],
  // 9. Pairs first, then the repeats per pair (and once, run it backwards).
  [
    {
      q: 'Eight clubs enter a league where every pair of clubs meets exactly three times. How many games are played?',
      choices: ['$84$', '$28$', '$168$', '$56$'],
      answer: 0,
      solution: 'First count the pairs of clubs: $\\frac{8 \\times 7}{2} = 28$, halving because a pair counted from one club is the same pair counted from the other. Each pair meets $3$ times, so there are $28 \\times 3 = 84$ games. ($28$ gives each pair only one game; $168 = 8 \\times 7 \\times 3$ never halves the doubled pair count; $56 = 8 \\times 7$ is the pair count before halving.)',
    },
    {
      q: 'Twelve teams enter a league where every pair of teams plays exactly twice — once at each home field. How many games are played?',
      choices: ['$66$', '$264$', '$144$', '$132$'],
      answer: 3,
      solution: 'The pairs of teams number $\\frac{12 \\times 11}{2} = 66$. Each pair plays $2$ games, so the league has $66 \\times 2 = 132$ games. ($66$ forgets the second game; $264$ doubles a count that was already doubled; $144 = 12 \\times 12$ would even let a team play itself.)',
    },
    {
      q: 'In a league, every pair of teams plays exactly twice, and $110$ games are played in all. How many teams are in the league?',
      choices: ['$10$', '$11$', '$55$', '$22$'],
      answer: 1,
      solution: 'With $n$ teams there are $\\frac{n(n-1)}{2}$ pairs, and each pair plays twice, so the games number $2 \\cdot \\frac{n(n-1)}{2} = n(n-1) = 110$. Two consecutive whole numbers whose product is $110$ are $11$ and $10$, so $n = 11$ — and no other $n$ works, since $n(n-1)$ grows steadily. Check: $\\frac{11 \\times 10}{2} = 55$ pairs, and $55 \\times 2 = 110$ games. ✓ ($10$ is how many opponents each team faces, not how many teams there are; $55$ is the number of PAIRS; $22$ doubles the team count, but the doubling belongs to the games.)',
    },
  ],
  // 10. All pairs, minus the pairs that do not count.
  [
    {
      q: 'A ten-sided shape has $10$ corners. How many diagonals does it have? (A diagonal connects two corners that are not next to each other.)',
      choices: ['$45$', '$90$', '$25$', '$35$'],
      answer: 3,
      solution: 'Every pair of corners gives a segment: $\\frac{10 \\times 9}{2} = 45$ segments, halved because a segment has two endpoints and would otherwise be counted from each one. Ten of those segments join neighbouring corners — those are the sides, not diagonals. Subtract: $45 - 10 = 35$. ($45$ counts the sides as diagonals; $90 = 10 \\times 9$ forgets to halve; $25$ removes $20$, taking each side away twice.)',
    },
    {
      q: 'In a class of $12$ students, every pair works together once, except that three of the students are triplets who never partner with one another. How many partnerships are there?',
      choices: ['$66$', '$132$', '$63$', '$36$'],
      answer: 2,
      solution: 'If everyone partnered with everyone, there would be $\\frac{12 \\times 11}{2} = 66$ partnerships. The three triplets form $3$ pairs among themselves, and exactly those $3$ never happen. Subtract: $66 - 3 = 63$. ($66$ forgets the exception; $132$ forgets to halve, counting each partnership from both sides; $36$ removes the triplets from the class entirely, but they still partner with the other nine students.)',
    },
    {
      q: 'A seven-sided shape has $7$ corners. How many diagonals does it have? (A diagonal connects two corners that are not next to each other.)',
      choices: ['$21$', '$14$', '$42$', '$7$'],
      answer: 1,
      solution: 'Pairs of corners: $\\frac{7 \\times 6}{2} = 21$ segments. Seven of them connect neighbouring corners and are sides rather than diagonals, so $21 - 7 = 14$ diagonals. ($21$ keeps the sides in; $42 = 7 \\times 6$ never halves; $7$ subtracts $14$, removing every side twice.)',
    },
  ],
  // 11. Probability from a 36-outcome sample space.
  [
    {
      q: 'Two standard dice are rolled. What is the probability that the sum is $5$?',
      choices: ['$\\frac{1}{18}$', '$\\frac{5}{36}$', '$\\frac{1}{9}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution: 'The two dice give $6 \\times 6 = 36$ equally likely rolls. The sum is $5$ on $(1,4), (2,3), (3,2), (4,1)$ — $4$ rolls — so the probability is $\\frac{4}{36} = \\frac{1}{9}$. ($\\frac{1}{18} = \\frac{2}{36}$ counts $\\{1,4\\}$ and $\\{2,3\\}$ once each, forgetting that the two dice are separate and $(1,4)$ differs from $(4,1)$; $\\frac{5}{36}$ throws in a $(0,5)$ roll, but a die has no $0$ face; $\\frac{1}{6}$ assumes every sum is as likely as $7$.)',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the sum is $10$?',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{9}$', '$\\frac{1}{18}$', '$\\frac{1}{6}$'],
      answer: 0,
      solution: 'Of the $36$ equally likely rolls, the sum is $10$ on $(4,6), (5,5), (6,4)$ — just $3$ — so the probability is $\\frac{3}{36} = \\frac{1}{12}$. ($\\frac{1}{9} = \\frac{4}{36}$ doubles both pairs, but $(5,5)$ is its own reverse and must not be counted twice; $\\frac{1}{18} = \\frac{2}{36}$ never doubles at all and so misses $(6,4)$; $\\frac{1}{6}$ assumes all sums are equally likely.)',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that the two numbers differ by exactly $1$?',
      choices: ['$\\frac{5}{36}$', '$\\frac{5}{18}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution: 'List the favourable rolls: $(1,2), (2,1), (2,3), (3,2), (3,4), (4,3), (4,5), (5,4), (5,6), (6,5)$ — that is $10$ of the $36$ equally likely rolls, so the probability is $\\frac{10}{36} = \\frac{5}{18}$. ($\\frac{5}{36}$ counts each pair once instead of in both orders; $\\frac{1}{6} = \\frac{6}{36}$ assumes one roll for each starting value $1$ through $6$, but a first die of $6$ has no partner $7$; $\\frac{1}{3} = \\frac{12}{36}$ makes that same slip and then doubles it.)',
    },
  ],
  // 12. "At least one" — count the opposite.
  [
    {
      q: 'A spinner has $3$ equal sections coloured blue, red, and green. It is spun twice. What is the probability that at least one spin lands on blue?',
      choices: ['$\\frac{4}{9}$', '$\\frac{5}{9}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$'],
      answer: 1,
      solution: 'Count the opposite: BOTH spins miss blue. Each spin misses in $2$ of its $3$ ways, so $2 \\times 2 = 4$ of the $3 \\times 3 = 9$ equally likely results have no blue. Then $P(\\text{at least one blue}) = 1 - \\frac{4}{9} = \\frac{5}{9}$. ($\\frac{4}{9}$ is the probability of NO blue; $\\frac{2}{3} = \\frac{1}{3} + \\frac{1}{3}$ adds the two spins and counts the blue-blue result twice; $\\frac{1}{9}$ is the probability that both spins land on blue.)',
    },
    {
      q: 'A bag holds $2$ red marbles and $3$ white marbles. A marble is drawn, put back, and then a marble is drawn again. What is the probability that at least one draw is red?',
      choices: ['$\\frac{9}{25}$', '$\\frac{7}{10}$', '$\\frac{4}{5}$', '$\\frac{16}{25}$'],
      answer: 3,
      solution: 'The marble is put back, so each draw sees all $5$ marbles and there are $5 \\times 5 = 25$ equally likely ordered draws. Both draws miss red in $3 \\times 3 = 9$ of them, so $P(\\text{at least one red}) = 1 - \\frac{9}{25} = \\frac{16}{25}$. ($\\frac{9}{25}$ is the no-red probability; $\\frac{7}{10}$ is the answer if the first marble were NOT put back, which would leave only $5 \\times 4 = 20$ ordered draws; $\\frac{4}{5} = \\frac{2}{5} + \\frac{2}{5}$ adds the draws and double-counts the red-red results.)',
    },
    {
      q: 'A spinner has $4$ equal sections labelled A, B, C, and D. It is spun three times. What is the probability that at least one spin lands on A?',
      choices: ['$\\frac{37}{64}$', '$\\frac{27}{64}$', '$\\frac{3}{4}$', '$\\frac{1}{64}$'],
      answer: 0,
      solution: 'Count the opposite: all three spins miss A. Each spin misses in $3$ of $4$ ways, so $3 \\times 3 \\times 3 = 27$ of the $4 \\times 4 \\times 4 = 64$ equally likely results avoid A entirely. Then $P(\\text{at least one A}) = 1 - \\frac{27}{64} = \\frac{37}{64}$. ($\\frac{27}{64}$ is the probability of no A at all; $\\frac{3}{4} = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4}$ adds the three spins, which counts any result with two or three A sections more than once; $\\frac{1}{64}$ is the probability that all three spins land on A.)',
    },
  ],
]

const worksheet = [
  // 1. Counting an inclusive list.
  [
    {
      q: 'How many integers are in the list $23, 24, 25, \\ldots, 88$?',
      answer: '$66$',
      solution: 'Count the numbers, not the gaps: $88 - 23 + 1 = 66$. The subtraction $88 - 23 = 65$ counts only the steps from one number to the next, and a list always has one more member than it has steps.',
    },
    {
      q: 'How many integers are in the list $45, 46, 47, \\ldots, 130$?',
      answer: '$86$',
      solution: 'Use $b - a + 1$: $130 - 45 + 1 = 86$ integers. Check the idea on a short list — from $45$ to $46$ the difference is $1$ but there are $2$ numbers.',
    },
    {
      q: 'A chapter of a book starts on page $137$ and ends on page $201$. How many pages long is the chapter?',
      answer: '$65$',
      solution: 'This is a fencepost count: $201 - 137 + 1 = 65$ pages. Subtracting alone gives $64$, which counts the page turns inside the chapter rather than the pages themselves.',
    },
  ],
  // 2. Three independent choices multiply.
  [
    {
      q: 'Maya picks an outfit from $5$ shirts, $4$ pairs of pants, and $3$ scarves. How many different outfits can she make?',
      answer: '$60$',
      solution: 'Three separate choices, so multiply: $5 \\times 4 \\times 3 = 60$ outfits. Adding would count the clothes, not the outfits.',
    },
    {
      q: 'A taco shop lets you pick $1$ of $2$ shells, $1$ of $5$ fillings, and $1$ of $3$ sauces. How many different tacos are possible?',
      answer: '$30$',
      solution: 'Each shell goes with each filling and each sauce, so the choices multiply: $2 \\times 5 \\times 3 = 30$ tacos.',
    },
    {
      q: 'A pizza is made from one of $3$ crusts, one of $6$ toppings, and one of $2$ sizes. How many different pizzas are possible?',
      answer: '$36$',
      solution: 'Multiply the three independent choices: $3 \\times 6 \\times 2 = 36$ pizzas.',
    },
  ],
  // 3. Coin casework.
  [
    {
      q: 'How many ways can you make $55$ cents using only quarters and nickels?',
      answer: '$3$',
      solution: 'Case on the number of quarters: $0$, $1$, or $2$ (three quarters is already $75$ cents). Each case forces the nickels — $11$, $6$, or $1$ of them — so there are $3$ ways.',
    },
    {
      q: 'How many ways can you make $60$ cents using only dimes and nickels?',
      answer: '$7$',
      solution: 'Case on the number of dimes: $0, 1, 2, 3, 4, 5,$ or $6$. Each case forces the nickels ($12, 10, 8, 6, 4, 2, 0$ of them), and no two cases overlap, so there are $7$ ways. Do not forget the all-dimes and all-nickels cases at the ends.',
    },
    {
      q: 'How many ways can you make $75$ cents using only quarters and nickels?',
      answer: '$4$',
      solution: 'Case on the number of quarters: $0, 1, 2,$ or $3$. The nickels then fill in the rest: $15, 10, 5,$ or $0$. That is $4$ ways.',
    },
  ],
  // 4. One count per pair — divide by 2.
  [
    {
      q: 'Fifteen cousins at a reunion all shake hands with each other exactly once. How many handshakes are there?',
      answer: '$105$',
      solution: 'Each of the $15$ cousins shakes $14$ hands, giving $15 \\times 14 = 210$ — but that counts every handshake twice, once from each side. Divide by $2$: $\\frac{15 \\times 14}{2} = 105$.',
    },
    {
      q: 'Eleven teams play a season in which every pair of teams meets exactly once. How many games are played?',
      answer: '$55$',
      solution: 'One game per pair of teams, so $\\frac{11 \\times 10}{2} = \\frac{110}{2} = 55$. Skipping the division would count each game once for each of its two teams.',
    },
    {
      q: 'Sixteen points are drawn on a circle, and every pair of points is joined by a segment. How many segments are there?',
      answer: '$120$',
      solution: 'One segment per pair of points: $\\frac{16 \\times 15}{2} = \\frac{240}{2} = 120$. The halving is needed because a segment has two endpoints and would otherwise be counted from each one.',
    },
  ],
  // 5. Probability from a bag of marbles.
  [
    {
      q: 'A bag holds $5$ red, $3$ blue, and $2$ yellow marbles. One marble is drawn at random. What is the probability it is red?',
      answer: '$\\frac{1}{2}$',
      solution: 'There are $5 + 3 + 2 = 10$ marbles in all, and $5$ are red: $\\frac{5}{10} = \\frac{1}{2}$.',
    },
    {
      q: 'A bag holds $2$ green, $7$ white, and $6$ black marbles. One marble is drawn at random. What is the probability it is green?',
      answer: '$\\frac{2}{15}$',
      solution: 'The bag holds $2 + 7 + 6 = 15$ marbles, and $2$ are green: $\\frac{2}{15}$, which is already in lowest terms. Probability compares the favourable count to the TOTAL, not to the other colours.',
    },
    {
      q: 'A bag holds $6$ red, $4$ blue, and $8$ green marbles. One marble is drawn at random. What is the probability it is blue?',
      answer: '$\\frac{2}{9}$',
      solution: 'There are $6 + 4 + 8 = 18$ marbles, and $4$ are blue: $\\frac{4}{18} = \\frac{2}{9}$ after dividing top and bottom by $2$.',
    },
  ],
  // 6. Counting multiples up to a bound.
  [
    {
      q: 'How many multiples of $9$ are there from $1$ to $200$?',
      answer: '$22$',
      solution: 'The multiples are $9, 18, \\ldots, 198$. Divide each by $9$ to get the consecutive list $1, 2, \\ldots, 22$, so there are $22$ of them. The next multiple, $207$, is past $200$.',
    },
    {
      q: 'How many multiples of $6$ are there from $1$ to $145$?',
      answer: '$24$',
      solution: 'The largest multiple of $6$ that is at most $145$ is $144 = 6 \\times 24$, so the list is $6, 12, \\ldots, 144$. Dividing by $6$ gives $1, 2, \\ldots, 24$: there are $24$.',
    },
    {
      q: 'How many multiples of $12$ are there from $1$ to $250$?',
      answer: '$20$',
      solution: 'The last multiple of $12$ at or below $250$ is $240 = 12 \\times 20$. Dividing the list $12, 24, \\ldots, 240$ by $12$ gives $1, 2, \\ldots, 20$, so there are $20$.',
    },
  ],
  // 7. Slot counting with a restricted leading digit.
  [
    {
      q: 'How many three-digit numbers less than $600$ have all three digits even?',
      answer: '$50$',
      solution: 'The hundreds digit must be even, cannot be $0$ (or the number would not be three digits), and must keep the number under $600$: only $2$ and $4$ work, so $2$ options. The tens and units digits can each be any of the five even digits $0, 2, 4, 6, 8$. Multiply the slots: $2 \\times 5 \\times 5 = 50$. The largest such number is $488$, safely under $600$.',
    },
    {
      q: 'How many four-digit numbers have all four digits even?',
      answer: '$500$',
      solution: 'The thousands digit must be even and not $0$: that leaves $2, 4, 6, 8$, so $4$ options. Each of the other three digits can be any of the five even digits: $5 \\times 5 \\times 5 = 125$. Multiply: $4 \\times 125 = 500$.',
    },
    {
      q: 'How many three-digit numbers bigger than $300$ have all three digits odd?',
      answer: '$100$',
      solution: 'The hundreds digit must be odd and at least $3$: that is $3, 5, 7,$ or $9$ — four options. (Every all-odd number in the $300$s is at least $311$, so all of them really are bigger than $300$.) The tens and units digits can each be any of the five odd digits. Multiply: $4 \\times 5 \\times 5 = 100$.',
    },
  ],
  // 8. Digit-sum casework on the hundreds digit.
  [
    {
      q: 'How many three-digit numbers have digits that add up to $3$?',
      answer: '$6$',
      solution: 'Case on the hundreds digit, which runs from $1$ to $3$. Hundreds digit $1$ leaves a sum of $2$ for the last two digits: $3$ ways ($02, 11, 20$). Hundreds digit $2$ leaves $1$: $2$ ways. Hundreds digit $3$ leaves $0$: $1$ way. The cases cannot overlap, so add: $3 + 2 + 1 = 6$.',
    },
    {
      q: 'How many three-digit numbers have digits that add up to $9$?',
      answer: '$45$',
      solution: 'Case on the hundreds digit $h$, which runs from $1$ to $9$. The last two digits must add to $9 - h$, and a pair of digits adding to $s$ can be chosen in $s + 1$ ways ($0$ and $s$, $1$ and $s-1$, up to $s$ and $0$). So the cases hold $9, 8, 7, \\ldots, 1$ numbers. Add them: $9 + 8 + \\cdots + 1 = 45$.',
    },
    {
      q: 'How many three-digit numbers have digits that add up to $10$?',
      answer: '$54$',
      solution: 'Case on the hundreds digit $h$, from $1$ to $9$; the last two digits must add to $10 - h$. A pair of digits adding to $s$ can be chosen in $s + 1$ ways as long as $s \\le 9$ — and here $s = 10 - h$ is at most $9$, so the rule holds in every case. The counts are $10, 9, 8, \\ldots, 2$, and adding gives $10 + 9 + \\cdots + 2 = 54$.',
    },
  ],
  // 9. One event per pair of people.
  [
    {
      q: 'Twenty-five people at a workshop each swap business cards with every other person exactly once. How many swaps happen?',
      answer: '$300$',
      solution: 'One swap per pair of people: $\\frac{25 \\times 24}{2} = \\frac{600}{2} = 300$. Each of the $25$ people swaps with $24$ others, but every swap involves two people and would otherwise be counted twice.',
    },
    {
      q: 'Eighteen players in a chess club each play every other player exactly once. How many games are played?',
      answer: '$153$',
      solution: 'One game per pair of players: $\\frac{18 \\times 17}{2} = \\frac{306}{2} = 153$. Forgetting the division counts each game once for each of its two players.',
    },
    {
      q: 'Thirty guests at a party each clink glasses with every other guest exactly once. How many clinks are there?',
      answer: '$435$',
      solution: 'One clink per pair of guests: $\\frac{30 \\times 29}{2} = \\frac{870}{2} = 435$.',
    },
  ],
  // 10. "At least one" via the complement.
  [
    {
      q: 'Two standard dice are rolled. What is the probability that at least one die shows an even number?',
      answer: '$\\frac{3}{4}$',
      solution: 'Count the opposite: both dice show odd numbers. Each die is odd in $3$ of its $6$ ways, so $3 \\times 3 = 9$ of the $36$ equally likely rolls are all odd. Then $P = 1 - \\frac{9}{36} = \\frac{27}{36} = \\frac{3}{4}$. (Adding $\\frac{1}{2} + \\frac{1}{2} = 1$ would claim an even number is certain, yet the roll $(3,5)$ has none.)',
    },
    {
      q: 'Two standard dice are rolled. What is the probability that at least one die shows a number bigger than $4$?',
      answer: '$\\frac{5}{9}$',
      solution: 'The opposite is that both dice show $4$ or less, which happens in $4 \\times 4 = 16$ of the $36$ equally likely rolls. So $P = 1 - \\frac{16}{36} = \\frac{20}{36} = \\frac{5}{9}$.',
    },
    {
      q: 'A fair coin is flipped and a standard die is rolled. What is the probability of getting heads, or a $6$, or both?',
      answer: '$\\frac{7}{12}$',
      solution: 'There are $2 \\times 6 = 12$ equally likely results. The opposite of "heads or a six" is "tails AND not a six", which happens in $1 \\times 5 = 5$ ways. So $P = 1 - \\frac{5}{12} = \\frac{7}{12}$. (Adding $\\frac{1}{2} + \\frac{1}{6} = \\frac{8}{12}$ counts the heads-with-a-six result twice.)',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 14,
  challenge,
  worksheet,
}
