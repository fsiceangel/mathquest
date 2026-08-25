// Prealgebra chapter 15 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.
//
// Every counting question below was settled by writing out the complete list,
// smallest case to largest, rather than by reasoning about it. Every
// work-backwards answer was run FORWARD through the original steps, and that
// forward run is printed in the solution. Every pattern was tested against all
// of its given terms, and each sequence was chosen so that the jump rule and
// the nth-term rule agree on the continuation.

const challenge = [
  // 1. Units digit of a big power — find the cycle, then use the remainder.
  [
    {
      q: 'What is the units digit of $3^{40}$?',
      choices: ['$1$', '$3$', '$9$', '$7$'],
      answer: 0,
      solution: 'Try small cases: $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, $3^5 = 243$. The units digits go $3, 9, 7, 1$ and then start over, so the cycle has length $4$. Now find the address: $40 = 4 \\times 10$ exactly, so the remainder is $0$ — and a remainder of $0$ means we finish the cycle, landing on its LAST entry, $1$. ($3$ is the $1$st entry, grabbed by treating a remainder of $0$ as a remainder of $1$; $9$ is the $2$nd entry; $7$ is the $3$rd.)',
    },
    {
      q: 'What is the units digit of $7^{35}$?',
      choices: ['$1$', '$7$', '$9$', '$3$'],
      answer: 3,
      solution: 'Small cases first: $7^1 = 7$, $7^2 = 49$, $7^3 = 343$, $7^4 = 2401$, and $7^5$ ends in $7$ again. The cycle is $7, 9, 3, 1$, repeating every $4$. Divide to find the address: $35 = 4 \\times 8 + 3$, so the remainder is $3$ and $7^{35}$ matches the $3$rd entry, which is $3$. ($7$ is the $1$st entry; $9$ is the $2$nd; $1$ is the $4$th, which is where a remainder of $0$ would land.)',
    },
    {
      q: 'What is the units digit of $8^{45}$?',
      choices: ['$4$', '$8$', '$2$', '$6$'],
      answer: 1,
      solution: 'The powers of $8$ end in $8, 4, 2, 6$ and then repeat every $4$ ($8, 64, 512, 4096, 32768, \\ldots$). Since $45 = 4 \\times 11 + 1$, the remainder is $1$, so $8^{45}$ matches the very first entry of the cycle: $8$. ($4$ is the $2$nd entry; $2$ is the $3$rd; $6$ is the $4$th — the one a remainder of $0$ would point to, and grabbing the last entry no matter what the remainder is is the classic slip.)',
    },
  ],
  // 2. Long sums tamed by pairing the ends.
  [
    {
      q: 'Compute $3 + 6 + 9 + \\cdots + 150$.',
      choices: ['$3825$', '$7650$', '$1275$', '$3750$'],
      answer: 0,
      solution: 'Find a pattern by pairing the ends: $3 + 150 = 153$, $6 + 147 = 153$, $9 + 144 = 153$, and so on — every pair totals $153$. There are $150 \\div 3 = 50$ terms, which make $50 \\div 2 = 25$ pairs, so the sum is $25 \\times 153 = 3825$. ($7650 = 50 \\times 153$ uses $50$ pairs, which counts every term twice; $1275 = 1 + 2 + \\cdots + 50$ forgets that each term is three times a counting number; $3750 = 25 \\times 150$ uses the largest term as the pair total instead of $153$.)',
    },
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 80$.',
      choices: ['$6480$', '$3200$', '$3240$', '$3321$'],
      answer: 2,
      solution: 'Pair the ends: $1 + 80 = 81$, $2 + 79 = 81$, $3 + 78 = 81$, all the way to $40 + 41 = 81$. The $80$ terms make $40$ pairs, so the sum is $40 \\times 81 = 3240$. ($6480 = 80 \\times 81$ uses $80$ pairs, double the truth; $3200 = 40 \\times 80$ pairs each term to $80$ instead of $81$; $3321 = 41 \\times 81$ squeezes in one extra pair, which would need $82$ terms.)',
    },
    {
      q: 'Compute $5 + 10 + 15 + \\cdots + 200$.',
      choices: ['$8200$', '$820$', '$4000$', '$4100$'],
      answer: 3,
      solution: 'Each pair from the ends totals the same amount: $5 + 200 = 205$, $10 + 195 = 205$, and so on. There are $200 \\div 5 = 40$ terms, hence $20$ pairs, and the sum is $20 \\times 205 = 4100$. ($8200 = 40 \\times 205$ counts $40$ pairs, using every term twice; $820 = 1 + 2 + \\cdots + 40$ drops the factor of $5$; $4000 = 20 \\times 200$ pairs to the largest term rather than to $205$.)',
    },
  ],
  // 3. Days of the week: only the remainder on division by 7 matters.
  [
    {
      q: 'March $1$ falls on a Thursday. What day of the week is March $29$ of the same year?',
      choices: ['Thursday', 'Friday', 'Wednesday', 'Saturday'],
      answer: 0,
      solution: 'Count the days BETWEEN the two dates, not the dates themselves: March $29$ is $29 - 1 = 28$ days after March $1$. Weeks repeat every $7$, and $28 = 7 \\times 4$ exactly, so $28$ days is four whole weeks and the day of the week does not move at all: Thursday. (You can check it by listing the Thursdays: March $1, 8, 15, 22, 29$.) (Friday comes from using $29$ days instead of $28$; Wednesday from using $27$; Saturday from walking on to March $31$, which is $30$ days out.)',
    },
    {
      q: 'June $1$ falls on a Saturday. What day of the week is June $20$ of the same year?',
      choices: ['Friday', 'Wednesday', 'Thursday', 'Saturday'],
      answer: 2,
      solution: 'June $20$ is $20 - 1 = 19$ days after June $1$. Divide by $7$: $19 = 7 \\times 2 + 5$. Two whole weeks land back on Saturday (June $15$), and $5$ more days go Sunday, Monday, Tuesday, Wednesday, Thursday — so June $20$ is a Thursday. (Friday comes from counting $20$ days instead of $19$; Wednesday from counting $18$; Saturday from rounding $19$ up to $21$ and assuming the day does not move.)',
    },
    {
      q: 'Today is Thursday. What day of the week will it be $100$ days from today?',
      choices: ['Friday', 'Thursday', 'Sunday', 'Saturday'],
      answer: 3,
      solution: 'Days of the week repeat every $7$, so divide: $100 = 7 \\times 14 + 2$. Fourteen whole weeks bring us right back to Thursday, and $2$ extra days give Friday, then Saturday. (Friday would need a remainder of $1$; Sunday a remainder of $3$; Thursday a remainder of $0$, which would happen at $98$ days, not $100$.)',
    },
  ],
  // 4. Coin counting — settled by a complete, ordered list.
  [
    {
      q: 'How many ways can you make $25$ cents using pennies, nickels, and dimes?',
      choices: ['$10$', '$9$', '$18$', '$12$'],
      answer: 3,
      solution: 'Organize by the biggest coin and finish each case before moving on. Two dimes leaves $5$ cents: $1$ nickel, or $5$ pennies — $2$ ways. One dime leaves $15$ cents: $3$, $2$, $1$, or $0$ nickels with pennies filling in — $4$ ways. No dimes leaves $25$ cents: $5$, $4$, $3$, $2$, $1$, or $0$ nickels — $6$ ways. The complete list is $2 + 4 + 6 = 12$ ways. ($10$ leaves out the two-dime case; $9$ drops the no-nickel row from each of the three cases; $18 = 3 \\times 6$ assumes all three dime cases offer the same six nickel counts, but two dimes leave room for only one nickel.)',
    },
    {
      q: 'How many ways can you make $20$ cents using pennies, nickels, and dimes?',
      choices: ['$9$', '$8$', '$6$', '$15$'],
      answer: 0,
      solution: 'List by the number of dimes. Two dimes: nothing left, so $1$ way. One dime leaves $10$ cents: $2$ nickels, $1$ nickel and $5$ pennies, or $10$ pennies — $3$ ways. No dimes leaves $20$ cents: $4$, $3$, $2$, $1$, or $0$ nickels — $5$ ways. Total: $1 + 3 + 5 = 9$ ways. ($8$ forgets the two-dime case, where the coins finish the job exactly; $6$ drops the all-pennies row from each case; $15 = 3 \\times 5$ assumes every dime case offers five nickel choices.)',
    },
    {
      q: 'How many ways can you make $40$ cents using nickels, dimes, and quarters?',
      choices: ['$5$', '$10$', '$7$', '$6$'],
      answer: 2,
      solution: 'Organize by quarters. One quarter leaves $15$ cents in nickels and dimes: $1$ dime and $1$ nickel, or $3$ nickels — $2$ ways. No quarters leaves $40$ cents: $4$ dimes; $3$ dimes and $2$ nickels; $2$ dimes and $4$ nickels; $1$ dime and $6$ nickels; $8$ nickels — $5$ ways. Total: $2 + 5 = 7$ ways. ($5$ counts only the no-quarter case; $6$ leaves out the all-nickels way at the very bottom of the list; $10 = 2 \\times 5$ assumes the quarter case offers the same five choices as the no-quarter case, but only $15$ cents is left over there.)',
    },
  ],
  // 5. Every pair counted once — the handshake count.
  [
    {
      q: 'Ten chess players each play exactly one game against every other player. How many games are played?',
      choices: ['$90$', '$45$', '$55$', '$100$'],
      answer: 1,
      solution: 'Count in an organized way. The first player has $9$ opponents. The second player adds $8$ games not already counted, the third adds $7$, and so on down to the ninth player, who adds $1$. The total is $9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45$ games. ($90 = 10 \\times 9$ counts each game twice, once from each side of the board; $55 = 1 + 2 + \\cdots + 10$ slips in an extra term, as if someone played themselves; $100 = 10 \\times 10$ does both at once.)',
    },
    {
      q: 'Six teams are in a league, and every pair of teams plays each other exactly once. How many games are on the schedule?',
      choices: ['$15$', '$30$', '$36$', '$21$'],
      answer: 0,
      solution: 'List by team, never repeating a matchup. Team $1$ has $5$ opponents; team $2$ adds $4$ new games; team $3$ adds $3$; team $4$ adds $2$; team $5$ adds $1$; team $6$ has no one new left. Total: $5 + 4 + 3 + 2 + 1 = 15$ games. ($30 = 6 \\times 5$ counts every game twice; $36 = 6 \\times 6$ also lets a team play itself; $21 = 1 + 2 + \\cdots + 6$ adds one term too many.)',
    },
    {
      q: 'Nine dots are marked around a circle. A chord is drawn joining every pair of dots. How many chords are drawn?',
      choices: ['$72$', '$45$', '$36$', '$81$'],
      answer: 2,
      solution: 'Count the chords one dot at a time, and never count a chord twice. From the first dot there are $8$ chords. The second dot adds $7$ new ones (its chord to the first dot is already drawn), the third adds $6$, and so on. The total is $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$ chords. ($72 = 9 \\times 8$ counts each chord from both ends; $45 = 1 + 2 + \\cdots + 9$ has one term too many; $81 = 9 \\times 9$ also joins each dot to itself, which is not a chord.)',
    },
  ],
  // 6. The gaps take the time, not the strikes — a fencepost in disguise.
  [
    {
      q: 'A tower clock takes $12$ seconds to strike $4$ o\'clock (that is, $4$ strikes). How long does it take to strike $10$ o\'clock?',
      choices: ['$36$ seconds', '$30$ seconds', '$27$ seconds', '$40$ seconds'],
      answer: 0,
      solution: 'Draw the strikes as dots on a line: $4$ dots have only $3$ gaps between them, and it is the gaps that take the time. So each gap is $12 \\div 3 = 4$ seconds. Ten strikes have $10 - 1 = 9$ gaps, so the striking takes $9 \\times 4 = 36$ seconds. ($30 = 12 \\times \\frac{10}{4}$ scales by the number of strikes instead of the number of gaps; $27 = 9 \\times 3$ uses the right count of gaps but a gap length of $12 \\div 4 = 3$, dividing by strikes rather than gaps; $40 = 10 \\times 4$ charges for $10$ gaps.)',
    },
    {
      q: 'A ship\'s bell takes $20$ seconds to ring $5$ times, with equal gaps between rings. How long does it take to ring $9$ times?',
      choices: ['$36$ seconds', '$40$ seconds', '$45$ seconds', '$32$ seconds'],
      answer: 1,
      solution: 'Sketch $5$ dots: there are $4$ gaps between them, so each gap lasts $20 \\div 4 = 5$ seconds. Nine rings have $9 - 1 = 8$ gaps: $8 \\times 5 = 40$ seconds. ($36 = 20 \\times \\frac{9}{5}$ scales by rings instead of gaps; $45 = 9 \\times 5$ counts $9$ gaps, one per ring; $32 = 8 \\times 4$ has the right number of gaps but uses $20 \\div 5 = 4$ seconds for each, dividing by rings rather than gaps.)',
    },
    {
      q: 'A lighthouse gives $7$ flashes in $42$ seconds, timed from the first flash to the last, with equal gaps between flashes. How long does a run of $10$ flashes take?',
      choices: ['$60$ seconds', '$70$ seconds', '$54$ seconds', '$63$ seconds'],
      answer: 3,
      solution: 'Draw $7$ dots for the flashes: they enclose $6$ gaps, and the clock only runs during the gaps. Each gap is $42 \\div 6 = 7$ seconds. Ten flashes have $9$ gaps, so the run takes $9 \\times 7 = 63$ seconds. ($60 = 42 \\times \\frac{10}{7}$ scales by flashes instead of gaps; $70 = 10 \\times 7$ counts a gap for every flash; $54 = 9 \\times 6$ counts the gaps correctly but prices each at $42 \\div 7 = 6$ seconds.)',
    },
  ],
  // 7. Two overlapping circles — the shared part gets counted twice.
  [
    {
      q: 'A youth center has $45$ members. Of them, $24$ play chess, $18$ paint, and $7$ do both. How many members do neither?',
      choices: ['$3$', '$35$', '$10$', '$7$'],
      answer: 2,
      solution: 'Draw two overlapping circles and write $7$ in the overlap first. Adding $24 + 18 = 42$ counts those $7$ members twice, so the number doing at least one activity is $42 - 7 = 35$. That leaves $45 - 35 = 10$ members outside both circles. ($3 = 45 - 24 - 18$ never puts the double-counted $7$ back; $35$ is the number doing at least one activity, which answers the other half of the picture; $7$ is the overlap itself.)',
    },
    {
      q: 'At a camp of $60$ children, $31$ swim, $26$ run, and $12$ do both. How many do neither?',
      choices: ['$45$', '$3$', '$12$', '$15$'],
      answer: 3,
      solution: 'Put $12$ in the overlap of two circles. Children doing at least one activity: $31 + 26 - 12 = 45$, subtracting the $12$ who were counted in both totals. So $60 - 45 = 15$ children do neither. ($3 = 60 - 31 - 26$ subtracts the $12$ twice by forgetting to add them back; $45$ is the at-least-one count; $12$ just repeats the overlap.)',
    },
    {
      q: 'Of $50$ hikers, $30$ carry a map, $26$ carry a compass, and $4$ carry neither. How many carry both?',
      choices: ['$6$', '$10$', '$46$', '$4$'],
      answer: 1,
      solution: 'Work from the picture. Since $4$ hikers carry neither, the two circles together hold $50 - 4 = 46$ hikers. Adding the two totals gives $30 + 26 = 56$, which is $56 - 46 = 10$ too many — and that excess is exactly the group counted twice. So $10$ hikers carry both. Check: $30 + 26 - 10 = 46$, and $46 + 4 = 50$. ✓ ($6 = 30 + 26 - 50$ forgets the $4$ who are outside both circles; $46$ is the number carrying at least one item; $4$ is the neither count.)',
    },
  ],
  // 8. Work backwards — and every answer is run forwards again to prove it.
  [
    {
      q: 'Nadia doubles her money, spends $\\$9$, doubles what is left, then spends $\\$6$. She ends with $\\$36$. How much did she start with?',
      choices: ['$\\$12$', '$\\$21$', '$\\$30$', '$\\$15$'],
      answer: 3,
      solution: 'Rewind, undoing the LAST step first. Undo "spends $\\$6$": $36 + 6 = 42$. Undo the second doubling: $42 \\div 2 = 21$. Undo "spends $\\$9$": $21 + 9 = 30$. Undo the first doubling: $30 \\div 2 = 15$. Check forwards: $15 \\to 30 \\to 21 \\to 42 \\to 36$. ✓ ($\\$12$ comes from subtracting the amounts spent while rewinding instead of adding them back: $(36 - 6) \\div 2 = 15$, then $15 + 9 = 24$, then $24 \\div 2 = 12$; $\\$21$ and $\\$30$ are amounts she really did hold partway through the story, but the question asks for the very start.)',
    },
    {
      q: 'Sam doubles his marble collection, gives away $14$ marbles, doubles what is left, then gives away $8$. He ends with $40$ marbles. How many did he start with?',
      choices: ['$24$', '$38$', '$19$', '$15$'],
      answer: 2,
      solution: 'Undo the steps in reverse order. Undo "gives away $8$": $40 + 8 = 48$. Undo the second doubling: $48 \\div 2 = 24$. Undo "gives away $14$": $24 + 14 = 38$. Undo the first doubling: $38 \\div 2 = 19$. Check forwards: $19 \\to 38 \\to 24 \\to 48 \\to 40$. ✓ ($15$ comes from subtracting the giveaways instead of adding them back while rewinding; $24$ and $38$ are real counts from the middle of the story, not the starting count.)',
    },
    {
      q: 'Priya thinks of a number, multiplies it by $4$, subtracts $8$, then takes half of the result. She gets $14$. What was her number?',
      choices: ['$9$', '$15$', '$5$', '$28$'],
      answer: 0,
      solution: 'Three steps, undone last-first. Undo the halving: $14 \\times 2 = 28$. Undo "subtract $8$": $28 + 8 = 36$. Undo "multiply by $4$": $36 \\div 4 = 9$. Check forwards: $9 \\times 4 = 36$, $36 - 8 = 28$, half of $28$ is $14$. ✓ ($15$ undoes in the wrong order — $28 \\div 4 = 7$ and then $7 + 8 = 15$ — and running $15$ forwards gives $26$, not $14$; $5$ subtracts the $8$ instead of adding it back, since $(28 - 8) \\div 4 = 5$; $28$ stops after the very first undo.)',
    },
  ],
  // 9. Figurate numbers — the rule is tested on every listed term.
  [
    {
      q: 'Square figures are built from dots: figure $1$ has $1$ dot, figure $2$ has $4$ dots, figure $3$ has $9$ dots, and figure $4$ has $16$ dots. How many dots does figure $12$ have?',
      choices: ['$121$', '$144$', '$169$', '$132$'],
      answer: 1,
      solution: 'Test a rule on every clue: figure $n$ holds $n \\times n$ dots, and indeed $1 \\times 1 = 1$, $2 \\times 2 = 4$, $3 \\times 3 = 9$, $4 \\times 4 = 16$ — all four match. So figure $12$ has $12 \\times 12 = 144$ dots. The jumps agree: they run $3, 5, 7, \\ldots$, growing by $2$ each time, and adding the odd numbers up to $23$ gives $144$ as well. ($121$ is figure $11$ and $169$ is figure $13$ — off-by-one landings; $132 = 12 \\times 11$ multiplies by the wrong second factor.)',
    },
    {
      q: 'Cans are stacked in rows: the top row has $2$ cans, the next row has $4$, the next has $6$, and each row holds $2$ more cans than the row above it. How many cans are in a stack of $12$ rows?',
      choices: ['$156$', '$78$', '$144$', '$312$'],
      answer: 0,
      solution: 'The rows hold $2, 4, 6, \\ldots, 24$ cans, so the total is $2 + 4 + 6 + \\cdots + 24$. Pair the ends: $2 + 24 = 26$, $4 + 22 = 26$, and so on. Twelve terms make $6$ pairs, so the total is $6 \\times 26 = 156$ cans. ($78 = 1 + 2 + \\cdots + 12$ forgets that every row is doubled; $144 = 12 \\times 12$ pretends every row holds $12$ cans; $312 = 12 \\times 26$ uses $12$ pairs, counting every row twice.)',
    },
    {
      q: 'Triangle figures grow $1, 3, 6, 10, 15, \\ldots$ dots, so figure $n$ has $1 + 2 + \\cdots + n$ dots. Which figure has exactly $78$ dots?',
      choices: ['Figure $11$', 'Figure $13$', 'Figure $12$', 'Figure $39$'],
      answer: 2,
      solution: 'Work backwards from $78$ by pairing: $1 + 2 + \\cdots + n$ is $n$ halves of $(n + 1)$, so we need $n \\times (n + 1) = 156$. Two consecutive numbers multiplying to $156$: $12 \\times 13 = 156$, so $n = 12$. Check forwards by pairing $1 + 2 + \\cdots + 12$: six pairs of $13$ give $78$. ✓ (Figure $11$ has $66$ dots and figure $13$ has $91$ — both miss; Figure $39$ comes from halving $78$, but halving is not how these figures grow.)',
    },
  ],
  // 10. Two-digit numbers by digit product — listed out in full.
  [
    {
      q: 'How many two-digit numbers have digits whose product is $16$?',
      choices: ['$2$', '$6$', '$4$', '$3$'],
      answer: 3,
      solution: 'List the ways to write $16$ as a product of two single digits: $2 \\times 8$, $4 \\times 4$, and $8 \\times 2$. Those give the numbers $28$, $44$, and $82$ — a complete list of $3$ numbers, and checking every two-digit number from $10$ to $99$ turns up no others. ($2$ leaves out $44$, forgetting that the two digits may be equal; $4$ also counts $1 \\times 16$, but $16$ is not a digit; $6$ counts every factor pair of $16$ in both orders, which double-counts $4 \\times 4$ and again admits the non-digit $16$.)',
    },
    {
      q: 'How many two-digit numbers have digits whose product is $18$?',
      choices: ['$3$', '$4$', '$6$', '$2$'],
      answer: 1,
      solution: 'Write $18$ as a product of two single digits: $2 \\times 9$, $3 \\times 6$, $6 \\times 3$, $9 \\times 2$. The numbers are $29$, $36$, $63$, $92$ — that is $4$ numbers. ($3$ writes one of the two pairs in only one order; $2$ lists the pairs $\\{2, 9\\}$ and $\\{3, 6\\}$ but never reverses either; $6$ also counts $1 \\times 18$ and $18 \\times 1$, and $18$ is not a digit.)',
    },
    {
      q: 'How many two-digit numbers have digits whose product is $0$?',
      choices: ['$9$', '$10$', '$18$', '$8$'],
      answer: 0,
      solution: 'A product is $0$ exactly when one of the digits is $0$. A two-digit number cannot begin with $0$, so the $0$ must be the units digit, and the tens digit runs $1$ through $9$. The complete list is $10, 20, 30, 40, 50, 60, 70, 80, 90$ — check both edges: $10$ is the smallest two-digit number of this kind and $90$ the largest. That is $9$ numbers. ($10$ slips in $00$, which is not a two-digit number; $18$ adds a second family with a leading zero, like $07$; $8$ starts the list at $20$ and loses $10$.)',
    },
  ],
  // 11. Cuts, pieces, and one closed loop.
  [
    {
      q: 'A log is sawn into $9$ pieces. Each cut takes $5$ minutes. How long does the sawing take?',
      choices: ['$40$ minutes', '$45$ minutes', '$8$ minutes', '$50$ minutes'],
      answer: 0,
      solution: 'Draw the log as a bar split into $9$ pieces: the cuts are the lines BETWEEN pieces, so there are $9 - 1 = 8$ of them. The sawing takes $8 \\times 5 = 40$ minutes. ($45 = 9 \\times 5$ charges for one cut per piece, the classic off-by-one; $8$ is the number of cuts, which is a count and not a number of minutes; $50 = 10 \\times 5$ adds a pointless extra cut at the far end of the log.)',
    },
    {
      q: 'Each cut through a plank takes $6$ minutes, and the whole job took $30$ minutes. How many pieces did the plank end up in?',
      choices: ['$5$', '$4$', '$6$', '$7$'],
      answer: 2,
      solution: 'Work backwards to the number of cuts: $30 \\div 6 = 5$ cuts. Now draw them: $5$ cuts across a plank leave $5 + 1 = 6$ pieces, since pieces are always one more than cuts on a straight plank. Check forwards: $6$ pieces need $5$ cuts, and $5 \\times 6 = 30$ minutes. ✓ ($5$ answers with the cuts instead of the pieces; $4$ subtracts one when it should add; $7$ adds one to the cut count and then one more.)',
    },
    {
      q: 'A closed ring of braided dough is cut straight through in $9$ places. How many pieces does it fall into?',
      choices: ['$10$', '$9$', '$8$', '$18$'],
      answer: 1,
      solution: 'Draw the ring and mark the $9$ cuts around it. Each piece runs from one cut to the next cut going around, so pieces and cuts pair up one-to-one: $9$ pieces. A loop has no ends, which is exactly why it does not get the extra piece a straight rope gets. (Try the smallest case in the drawing: one cut turns the ring into one long strip, not two.) ($10$ applies the straight-rope rule "cuts $+\\, 1$"; $8$ applies "cuts $-\\, 1$"; $18$ doubles.)',
    },
  ],
  // 12. Doubling and tripling sequences, run backwards.
  [
    {
      q: 'In a sequence, each term is $3$ times the term before it. The $5$th term is $405$. What is the $1$st term?',
      choices: ['$135$', '$5$', '$45$', '$15$'],
      answer: 1,
      solution: 'Between term $1$ and term $5$ there are $4$ jumps, so undo $4$ multiplications by dividing $4$ times: $405 \\to 135 \\to 45 \\to 15 \\to 5$. Check forwards: $5, 15, 45, 135, 405$ — five terms, each triple the last. ✓ ($135$, $45$, and $15$ are what you get by stopping after one, two, or three of the four divisions.)',
    },
    {
      q: 'In a sequence, each term is double the term before it. The $6$th term is $224$. What is the $1$st term?',
      choices: ['$112$', '$14$', '$7$', '$28$'],
      answer: 2,
      solution: 'Term $1$ to term $6$ is $5$ jumps, so halve five times: $224 \\to 112 \\to 56 \\to 28 \\to 14 \\to 7$. Check forwards: $7, 14, 28, 56, 112, 224$ — the $6$th term is $224$. ✓ ($112$, $28$, and $14$ are honest terms of the sequence, but they sit at positions $5$, $3$, and $2$; each comes from halving too few times.)',
    },
    {
      q: 'A sequence starts at $6$, and each term after that is double the term before it. Which term of the sequence equals $384$?',
      choices: ['Term $7$', 'Term $6$', 'Term $8$', 'Term $64$'],
      answer: 0,
      solution: 'Work backwards from $384$, halving until you reach the start, and count the steps: $384 \\to 192 \\to 96 \\to 48 \\to 24 \\to 12 \\to 6$ takes $6$ halvings. Six jumps past the $1$st term lands on the $7$th. Check forwards by listing: $6, 12, 24, 48, 96, 192, 384$ — and $384$ really is the $7$th number written. ✓ (Term $6$ counts the jumps instead of the terms; Term $8$ adds one jump too many; Term $64 = 384 \\div 6$ mistakes a ratio for a position.)',
    },
  ],
]

const worksheet = [
  // 1. Continue a sequence — the jump rule and the nth-term rule agree.
  [
    {
      q: 'What is the next term of the sequence $2, 8, 18, 32, 50, \\ldots$?',
      answer: '$72$',
      solution: 'Test a rule against every term: these are twice the squares, $2 \\times 1$, $2 \\times 4$, $2 \\times 9$, $2 \\times 16$, $2 \\times 25$ — all five match, so the $6$th term is $2 \\times 36 = 72$. The jumps confirm it: they run $6, 10, 14, 18$, growing by $4$ each time, so the next jump is $22$ and $50 + 22 = 72$. Two different rules, one answer.',
    },
    {
      q: 'What is the next term of the sequence $1, 8, 27, 64, \\ldots$?',
      answer: '$125$',
      solution: 'These are the perfect cubes: $1 \\times 1 \\times 1 = 1$, $2 \\times 2 \\times 2 = 8$, $3 \\times 3 \\times 3 = 27$, $4 \\times 4 \\times 4 = 64$. Every listed term fits, so the next is $5 \\times 5 \\times 5 = 125$. (The jumps $7, 19, 37$ grow by $12$, then $18$ — those growths themselves climb by $6$, which predicts a next jump of $37 + 24 = 61$, and $64 + 61 = 125$ as well.)',
    },
    {
      q: 'What is the next term of the sequence $2, 5, 10, 17, 26, \\ldots$?',
      answer: '$37$',
      solution: 'Each term is one more than a square: $1 + 1$, $4 + 1$, $9 + 1$, $16 + 1$, $25 + 1$ — the rule fits all five terms, so the next is $36 + 1 = 37$. Checking the jumps gives the same answer: they run $3, 5, 7, 9$ — the odd numbers — so the next jump is $11$, and $26 + 11 = 37$.',
    },
  ],
  // 2. Units digits from a repeating cycle.
  [
    {
      q: 'What is the units digit of $4^{31}$?',
      answer: '$4$',
      solution: 'Try small cases: $4^1 = 4$, $4^2 = 16$, $4^3 = 64$, $4^4 = 256$. The units digits go $4, 6, 4, 6, \\ldots$ — a cycle of length $2$, with odd exponents landing on $4$ and even ones on $6$. Since $31$ is odd, the units digit is $4$.',
    },
    {
      q: 'What is the units digit of $7^{100}$?',
      answer: '$1$',
      solution: 'The powers of $7$ end in $7, 9, 3, 1$ and then repeat every $4$. Divide to find the address: $100 = 4 \\times 25$ exactly, so the remainder is $0$. A remainder of $0$ means the cycle finishes, landing on its last entry: $1$.',
    },
    {
      q: 'What is the units digit of $12^{25}$?',
      answer: '$2$',
      solution: 'Only the units digit of the base matters, so this behaves exactly like the powers of $2$, which end in $2, 4, 8, 6$ repeating every $4$. Since $25 = 4 \\times 6 + 1$, the remainder is $1$ and the answer is the first entry of the cycle: $2$.',
    },
  ],
  // 3. Coin lists, organized by the biggest coin.
  [
    {
      q: 'How many ways can you make $35$ cents using only dimes and nickels?',
      answer: '$4$ ways',
      solution: 'List by the number of dimes, largest first: $3$ dimes and $1$ nickel; $2$ dimes and $3$ nickels; $1$ dime and $5$ nickels; $0$ dimes and $7$ nickels. Four dimes would be $40$ cents, too much, so the list is complete at both ends: $4$ ways.',
    },
    {
      q: 'How many ways can you make $40$ cents using only quarters and nickels?',
      answer: '$2$ ways',
      solution: 'Organize by quarters. One quarter leaves $15$ cents, which is exactly $3$ nickels. Zero quarters leaves $40$ cents, which is $8$ nickels. Two quarters would already be $50$ cents, too much. The list has $2$ ways.',
    },
    {
      q: 'How many ways can you make $25$ cents using only nickels and pennies?',
      answer: '$6$ ways',
      solution: 'Organize by nickels, counting down: $5$ nickels; $4$ nickels and $5$ pennies; $3$ nickels and $10$ pennies; $2$ nickels and $15$ pennies; $1$ nickel and $20$ pennies; $0$ nickels and $25$ pennies. The nickel count runs from $5$ down to $0$, which is $5 - 0 + 1 = 6$ ways.',
    },
  ],
  // 4. Fenceposts: one straight line, one closed loop, one run backwards.
  [
    {
      q: 'A straight fence runs $72$ meters, with a post every $8$ meters including one at each end. How many posts are there?',
      answer: '$10$ posts',
      solution: 'Sketch the fence and mark the posts by their distance from the left end: $0, 8, 16, 24, 32, 40, 48, 56, 64, 72$. There are $72 \\div 8 = 9$ gaps, and a straight fence always carries one more post than gaps: $9 + 1 = 10$ posts, which is exactly how many the list holds.',
    },
    {
      q: 'A square courtyard has sides of $15$ meters. A lantern is hung every $5$ meters all the way around the border, with one at each corner. How many lanterns are there?',
      answer: '$12$ lanterns',
      solution: 'The border is a closed loop of length $4 \\times 15 = 60$ meters, so there are $60 \\div 5 = 12$ gaps. On a loop the posts and gaps pair up one-to-one — there is no free end to add an extra post — so there are $12$ lanterns. Walking the border and listing positions confirms it: $0, 5, 10, \\ldots, 55$, and the next step, $60$, is back at the start. The corners at $0$, $15$, $30$, and $45$ are all in the list, as required.',
    },
    {
      q: 'A straight row of $11$ trees is planted with $7$ meters between neighbouring trees. How far is it from the first tree to the last?',
      answer: '$70$ meters',
      solution: 'Draw the trees as dots: $11$ dots in a straight row have $11 - 1 = 10$ gaps between them, and only the gaps have length. So the row measures $10 \\times 7 = 70$ meters. (Using $11$ gaps gives $77$ meters, which would put a gap past the last tree.)',
    },
  ],
  // 5. Undo the steps in reverse order.
  [
    {
      q: 'I think of a number, multiply it by $6$, then add $7$. The result is $61$. What was my number?',
      answer: '$9$',
      solution: 'Undo the last step first: $61 - 7 = 54$. Then undo the multiplication: $54 \\div 6 = 9$. Check forwards: $9 \\times 6 = 54$, and $54 + 7 = 61$. ✓',
    },
    {
      q: 'I think of a number, subtract $9$, then multiply the result by $3$. I end with $42$. What was my number?',
      answer: '$23$',
      solution: 'Undo in reverse order. The last step was "multiply by $3$," so divide: $42 \\div 3 = 14$. The step before was "subtract $9$," so add it back: $14 + 9 = 23$. Check forwards: $23 - 9 = 14$, and $14 \\times 3 = 42$. ✓',
    },
    {
      q: 'I think of a number, divide it by $5$, then add $12$. The result is $20$. What was my number?',
      answer: '$40$',
      solution: 'Undo the addition first: $20 - 12 = 8$. Then undo the division by multiplying: $8 \\times 5 = 40$. Check forwards: $40 \\div 5 = 8$, and $8 + 12 = 20$. ✓',
    },
  ],
  // 6. Cuts and pieces, including a loop and a reversed direction.
  [
    {
      q: 'How many cuts are needed to slice a rope into $11$ pieces?',
      answer: '$10$ cuts',
      solution: 'Draw the rope as a bar divided into $11$ pieces. The cuts are the lines between neighbouring pieces, so there is always one fewer cut than pieces: $11 - 1 = 10$ cuts.',
    },
    {
      q: 'A circular wreath of braided dough is cut straight through into $8$ pieces. How many cuts are needed?',
      answer: '$8$ cuts',
      solution: 'A loop has no ends, so it is not like a rope. Draw the ring: each cut opens one new place where the dough separates, and each piece runs from one cut to the next going around, so the pieces and the cuts match up one for one — $8$ cuts. (Check the smallest case on the drawing: one cut turns the wreath into a single long strip, which is one piece from one cut.)',
    },
    {
      q: 'A plank is cut straight through $9$ times. How many pieces does it end up in?',
      answer: '$10$ pieces',
      solution: 'Draw $9$ cut lines across a straight plank. Each cut adds exactly one more piece to what was there before, and the uncut plank was already one piece, so the total is $9 + 1 = 10$ pieces. Check backwards: $10$ pieces really do need $10 - 1 = 9$ cuts. ✓',
    },
  ],
  // 7. Units digit of a power with a two-digit base.
  [
    {
      q: 'What is the units digit of $22^{30}$?',
      answer: '$4$',
      solution: 'Only the units digit $2$ matters, so this follows the powers of $2$, which end in $2, 4, 8, 6$ and repeat every $4$. Since $30 = 4 \\times 7 + 2$, the remainder is $2$, so the answer is the $2$nd entry of the cycle: $4$.',
    },
    {
      q: 'What is the units digit of $17^{21}$?',
      answer: '$7$',
      solution: 'The base ends in $7$, and the powers of $7$ end in $7, 9, 3, 1$ repeating every $4$. Since $21 = 4 \\times 5 + 1$, the remainder is $1$, landing on the first entry of the cycle: $7$.',
    },
    {
      q: 'What is the units digit of $19^{47}$?',
      answer: '$9$',
      solution: 'The base ends in $9$, and the powers of $9$ end in $9, 1, 9, 1, \\ldots$ — a cycle of length $2$. Odd exponents land on $9$ and even exponents on $1$. Since $47$ is odd, the units digit is $9$.',
    },
  ],
  // 8. Overlapping groups, solved for the overlap and for the outside.
  [
    {
      q: 'Every one of $60$ campers swims or paddles, or does both: $41$ swim and $34$ paddle. How many do both?',
      answer: '$15$ campers',
      solution: 'Draw two overlapping circles that together hold all $60$ campers. Adding $41 + 34 = 75$ counts each camper in the overlap twice, so the excess $75 - 60 = 15$ is exactly the number counted twice. So $15$ campers do both. Check: $41 + 34 - 15 = 60$. ✓',
    },
    {
      q: 'In a class of $28$ students, every student studies French or Spanish, or both: $19$ study French and $16$ study Spanish. How many study both?',
      answer: '$7$ students',
      solution: 'Adding the two lists gives $19 + 16 = 35$ names, but only $28$ students exist. The extra $35 - 28 = 7$ names are the students written down twice — the ones taking both languages. So $7$ study both. Check: $19 + 16 - 7 = 28$. ✓',
    },
    {
      q: 'Of $45$ club members, $26$ play guitar, $21$ play piano, and $8$ play both. How many play neither?',
      answer: '$6$ members',
      solution: 'Put $8$ in the overlap of two circles. Members playing at least one instrument: $26 + 21 - 8 = 39$, where the $8$ is subtracted because it was counted in both totals. That leaves $45 - 39 = 6$ members outside both circles. (Computing $45 - 26 - 21 = -2$ shows what happens when the overlap is never added back — a negative count is impossible, which is the warning sign.)',
    },
  ],
  // 9. Multi-step rewinds, each proved by a forward run.
  [
    {
      q: 'Rosa gives a third of her stickers to Tom, then gives half of what is left to Uma. She then buys $9$ more stickers and now has $21$. How many stickers did she start with?',
      answer: '$36$ stickers',
      solution: 'Rewind, last step first. Undo the purchase: $21 - 9 = 12$. Undo the gift to Uma — that gift was half of what she held, so the $12$ is the other half: $12 \\times 2 = 24$. Undo the gift to Tom — she gave away a third and kept two thirds, so $24$ is two thirds; one third is $24 \\div 2 = 12$, and the whole is $12 \\times 3 = 36$. Check forwards: $36$ minus a third ($12$) is $24$; half of $24$ goes to Uma, leaving $12$; plus $9$ is $21$. ✓',
    },
    {
      q: 'Ben gives half of his cards to Cy, then gives $7$ more to Dee. He then finds $4$ cards under his desk and now has $19$. How many cards did he start with?',
      answer: '$44$ cards',
      solution: 'Work backwards. Undo the lucky find: $19 - 4 = 15$. Undo the gift to Dee: $15 + 7 = 22$. Undo the gift to Cy — that was half his cards, so the $22$ he kept is the other half: $22 \\times 2 = 44$. Check forwards: $44 \\to 22 \\to 15 \\to 19$. ✓',
    },
    {
      q: 'A tank loses half of its water, then loses a quarter of what remains. Then $5$ liters are poured in, and the tank now holds $35$ liters. How much water did it start with?',
      answer: '$80$ liters',
      solution: 'Rewind from $35$. Undo the pouring: $35 - 5 = 30$. Undo the second loss — losing a quarter leaves three quarters, so $30$ is three quarters of what was there: one quarter is $30 \\div 3 = 10$, and the whole is $10 \\times 4 = 40$. Undo the first loss: $40$ is half the original, so the tank started with $40 \\times 2 = 80$ liters. Check forwards: $80 \\to 40$; a quarter of $40$ is $10$, leaving $30$; plus $5$ is $35$. ✓',
    },
  ],
  // 10. Alternating sums, grouped into pairs.
  [
    {
      q: 'Compute $1 - 2 + 3 - 4 + 5 - 6 + \\cdots + 99 - 100$.',
      answer: '$-50$',
      solution: 'Group the terms in pairs from the left: $(1 - 2) + (3 - 4) + \\cdots + (99 - 100)$. Every pair equals $-1$, and the $100$ terms make exactly $50$ pairs with nothing left over, so the total is $50 \\times (-1) = -50$. (Small-case check: $1 - 2 + 3 - 4 = -2$, and the rule predicts $2$ pairs, or $-2$. ✓)',
    },
    {
      q: 'Compute $2 - 4 + 6 - 8 + 10 - 12 + \\cdots + 198 - 200$.',
      answer: '$-100$',
      solution: 'Pair from the left: $(2 - 4) + (6 - 8) + \\cdots + (198 - 200)$. Each pair equals $-2$. There are $200 \\div 2 = 100$ terms, so $50$ pairs, and nothing is left dangling: the total is $50 \\times (-2) = -100$. (Small-case check: $2 - 4 + 6 - 8 = -4$, which is $2$ pairs of $-2$. ✓)',
    },
    {
      q: 'Compute $100 - 99 + 98 - 97 + \\cdots + 2 - 1$.',
      answer: '$50$',
      solution: 'This time the big number comes first in every pair: $(100 - 99) + (98 - 97) + \\cdots + (2 - 1)$. Each pair equals $+1$, and the $100$ terms make $50$ pairs, so the total is $50$. (Small-case check: $4 - 3 + 2 - 1 = 2$, which is $2$ pairs of $+1$. ✓ Note how flipping the order flips the sign compared with starting at the small end.)',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 15,
  challenge,
  worksheet,
}
