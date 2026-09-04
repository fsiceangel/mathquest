// Counting & Probability chapter 13 — variations for section 13.3
// (A Step-by-Step Solution). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: whether the items are identical,
//    whether the boxes are labeled, whether a box may be empty, and every
//    minimum and cap written out.
//  - Route one always builds the table the section is about — casework on the
//    first box, with the rows listed and added — and route two reaches the same
//    number a different way: a bars count, a prepaid shift, complementary
//    counting, inclusion and exclusion, or a listing of sorted patterns.
//  - Each distractor is one named slip — a dropped end of the sum, a cap
//    ignored, a cap applied to only one box, the complement reported instead of
//    the count — named in CAPS.

const s133 = [
  // slot 1 — the plain ladder, one box at a time
  [
    {
      q: 'How many ordered quintuples $(x_1, x_2, x_3, x_4, x_5)$ of non-negative integers satisfy $x_1 + x_2 + x_3 + x_4 + x_5 = 4$?',
      choices: ['$35$', '$56$', '$70$', '$126$'],
      answer: 2,
      solution:
        'Route one, casework on $x_1$. First build the four-variable column: four non-negative integers summing to $m$ can be chosen in $1, 4, 10, 20, 35$ ways for $m = 0, 1, 2, 3, 4$, each entry a running sum of the entries above it. Now let $x_1 = j$; the other four must sum to $4 - j$, so the rows are $35, 20, 10, 4, 1$ for $j = 0, 1, 2, 3, 4$, and $35 + 20 + 10 + 4 + 1 = 70$ ✓. Route two, stars and bars. Write $4$ stars in a row and insert $4$ bars among them to cut the row into five blocks, the $i$th block giving $x_i$; every arrangement of the $8$ symbols gives exactly one quintuple, so the count is $\\binom{8}{4} = 70$ ✓. (The choice $35$ DROPS THE $x_1 = 0$ ROW, adding only $20 + 10 + 4 + 1$ ✗; $56 = \\binom{8}{5}$ USES FIVE BARS FOR FIVE BLOCKS, though five blocks need only four cuts ✗; $126 = \\binom{9}{4}$ LAYS OUT ONE EXTRA STAR ✗.)',
    },
    {
      q: 'Five identical pears are placed into four bowls labeled $1$ through $4$; a bowl may be empty. How many placements are there?',
      choices: ['$56$', '$35$', '$70$', '$21$'],
      answer: 0,
      solution:
        'Route one, casework on bowl $1$. If bowl $1$ holds $j$ pears, the other $5 - j$ pears go into three bowls, and three bowls holding $m$ identical pears can be filled in $\\frac{(m+1)(m+2)}{2}$ ways — a triangular number. For $j = 0, 1, 2, 3, 4, 5$ the rows are $21, 15, 10, 6, 3, 1$, and $21 + 15 + 10 + 6 + 3 + 1 = 56$ ✓. Route two, stars and bars. Line up $5$ stars for the pears and $3$ bars to separate the four bowls; each of the $\\binom{8}{3} = 56$ arrangements of the $8$ symbols names one placement ✓. (The choice $35$ FORGETS THE ROW WHERE BOWL $1$ IS EMPTY, adding only $15 + 10 + 6 + 3 + 1$ ✗; $70 = \\binom{8}{4}$ USES FOUR BARS FOR FOUR BOWLS instead of three ✗; $21$ STOPS AT THREE BOWLS, reporting one row of the table as the whole sum ✗.)',
    },
    {
      q: '*Reversed:* For a non-negative integer $n$, exactly $455$ ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = n$. What is $n$?',
      choices: ['$11$', '$15$', '$13$', '$12$'],
      answer: 3,
      solution:
        'Route one, climb the four-variable column. Three non-negative integers summing to $m$ can be chosen in $\\frac{(m+1)(m+2)}{2}$ ways, so four variables summing to $n$ can be counted by a running sum of triangular numbers: $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455$ for $n = 0$ through $12$. The value $455$ first and only appears at $n = 12$, and the column strictly increases, so $n = 12$ ✓. Route two, solve the cubic. Stars and bars gives $\\binom{n+3}{3} = \\frac{(n+1)(n+2)(n+3)}{6}$, so $(n+1)(n+2)(n+3) = 6 \\cdot 455 = 2730$. Three consecutive integers near $\\sqrt[3]{2730} \\approx 14$ multiply to $13 \\cdot 14 \\cdot 15 = 2730$, so $n + 1 = 13$ and $n = 12$ ✓. (The choice $11$ STOPS ONE ROW SHORT, where the count is $\\binom{14}{3} = 364$ ✗; $15$ REPORTS $n + 3$, THE TOP OF THE BINOMIAL, instead of $n$ ✗; $13$ OVERSHOOTS BY ONE ROW, where the count is $\\binom{16}{3} = 560$ ✗.)',
    },
  ],
  // slot 2 — one box capped or floored
  [
    {
      q: 'Twelve identical beads are placed into three boxes labeled $A$, $B$, $C$. Box $A$ may hold at most $3$ beads; the other boxes may hold any number, including none. How many placements are there?',
      choices: ['$46$', '$91$', '$33$', '$45$'],
      answer: 0,
      solution:
        'Route one, casework on box $A$. The cap makes the sum short: $A$ holds $j = 0, 1, 2, 3$ beads, and the remaining $12 - j$ beads split between $B$ and $C$ in $13 - j$ ways. The rows are $13, 12, 11, 10$, and $13 + 12 + 11 + 10 = 46$ ✓. Route two, complementary counting. Without any cap, $12$ beads into three boxes can be placed in $\\binom{14}{2} = 91$ ways. A placement breaks the cap exactly when $A$ holds at least $4$; putting $4$ beads in $A$ first leaves $8$ beads to place freely, which is $\\binom{10}{2} = 45$ ways. So the legal count is $91 - 45 = 46$ ✓. (The choice $91$ IGNORES THE CAP ALTOGETHER ✗; $33$ DROPS THE $A = 0$ ROW, adding only $12 + 11 + 10$ ✗; $45$ IS THE COUNT THAT BREAKS THE CAP, the complement rather than the answer ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 11$ with $z \\leq 4$?',
      choices: ['$78$', '$28$', '$50$', '$42$'],
      answer: 2,
      solution:
        'Route one, casework on $z$. Let $z = j$ for $j = 0, 1, 2, 3, 4$; then $x + y = 11 - j$, which has $12 - j$ non-negative solutions. The rows are $12, 11, 10, 9, 8$, and $12 + 11 + 10 + 9 + 8 = 50$ ✓. Route two, complementary counting. All triples number $\\binom{13}{2} = 78$. Those with $z \\geq 5$ are found by writing $z = 5 + z\'$ with $z\' \\geq 0$, giving $x + y + z\' = 6$ and $\\binom{8}{2} = 28$ triples. So the count is $78 - 28 = 50$ ✓. (The choice $78$ DROPS THE CAP ✗; $28$ COUNTS THE TRIPLES THAT BREAK THE CAP ✗; $42$ READS "AT MOST $4$" AS "AT MOST $3$", stopping the table one row early ✗.)',
    },
    {
      q: '*Derived:* Nine identical tokens are placed into three jars labeled $A$, $B$, $C$. Jar $A$ must hold at least $3$ tokens; the other jars may hold any number, including none. How many placements are there?',
      choices: ['$55$', '$28$', '$36$', '$21$'],
      answer: 1,
      solution:
        'Route one, casework on jar $A$. The floor makes the sum start late: $A$ holds $j = 3, 4, 5, 6, 7, 8, 9$ tokens, and the remaining $9 - j$ tokens split between $B$ and $C$ in $10 - j$ ways. The rows are $7, 6, 5, 4, 3, 2, 1$, and $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$ ✓. Route two, prepay the minimum. Drop $3$ tokens into $A$ before anything else; the remaining $6$ tokens then go anywhere at all, since $A$ has already met its floor. Six identical tokens into three jars can be placed in $\\binom{8}{2} = 28$ ways ✓. (The choice $55$ IGNORES THE MINIMUM, counting all $\\binom{11}{2}$ placements ✗; $36$ PREPAYS ONLY $2$ TOKENS, leaving $7$ free ✗; $21$ STARTS THE TABLE AT $A = 4$, losing the largest row ✗.)',
    },
  ],
  // slot 3 — wider ladders, more boxes
  [
    {
      q: 'Eleven identical walnuts are placed into five trays labeled $A$ through $E$, and no tray may hold more than $3$ walnuts. A tray may be empty. How many placements are there?',
      choices: ['$70$', '$65$', '$61$', '$34$'],
      answer: 1,
      solution:
        'Route one, casework on tray $A$. The cap keeps the sum short: $A$ holds $j = 0, 1, 2, 3$ walnuts, and the other $11 - j$ walnuts fill four trays that are capped at $3$ as well, so count each row by listing sorted patterns. Sum $11$: $3{+}3{+}3{+}2$ in $4$ orders, so $4$. Sum $10$: $3{+}3{+}3{+}1$ in $4$ and $3{+}3{+}2{+}2$ in $6$, so $10$. Sum $9$: $3{+}3{+}3{+}0$ in $4$, $3{+}3{+}2{+}1$ in $12$, $3{+}2{+}2{+}2$ in $4$, so $20$. Sum $8$: $3{+}3{+}2{+}0$ in $12$, $3{+}3{+}1{+}1$ in $6$, $3{+}2{+}2{+}1$ in $12$, $2{+}2{+}2{+}2$ in $1$, so $31$. The rows are $4, 10, 20, 31$, and $4 + 10 + 20 + 31 = 65$ ✓. Route two, count the empty slots instead. Five full trays would hold $15$ walnuts, so every placement leaves $15 - 11 = 4$ empty slots; let $y_i = 3 - x_i$ be the empty slots in tray $i$. The $y_i$ are non-negative and sum to $4$, and there are $\\binom{8}{4} = 70$ such quintuples. But $x_i \\geq 0$ forces $y_i \\leq 3$, so throw out the $5$ quintuples in which one $y_i$ is $4$ and the rest are $0$: the count is $70 - 5 = 65$ ✓. (The choice $70$ FORGETS THAT THE EMPTY SLOTS ARE CAPPED TOO, letting a tray hold $-1$ walnuts ✗; $61$ DROPS THE ROW WHERE TRAY $A$ IS EMPTY, adding only $10 + 20 + 31$ ✗; $34$ READS THE CAP AS "FEWER THAN $3$", stopping the table at $j = 2$ ✗.)',
    },
    {
      q: 'How many ordered triples $(a, b, c)$ of non-negative integers satisfy $a + b + c = 15$ with $a$ even? (Zero counts as even.)',
      choices: ['$136$', '$64$', '$56$', '$72$'],
      answer: 3,
      solution:
        'Route one, casework on $a$. The even values available are $a = 0, 2, 4, 6, 8, 10, 12, 14$, and each one leaves $b + c = 15 - a$, a split of $15 - a$ units between two non-negative integers with $16 - a$ solutions. The rows are $16, 14, 12, 10, 8, 6, 4, 2$, and $16 + 14 + 12 + 10 + 8 + 6 + 4 + 2 = 72$ ✓. Route two, complementary counting. With no condition on $a$ there are $\\binom{17}{2} = 136$ triples. Count the odd-$a$ triples on their own by writing $a = 2t + 1$: then $2t + 1 \\leq 15$ forces $t = 0$ through $7$, and $b + c = 14 - 2t$ has $15 - 2t$ solutions, giving $15 + 13 + 11 + 9 + 7 + 5 + 3 + 1 = 64$. Every triple has $a$ either even or odd, so the even-$a$ count is $136 - 64 = 72$ ✓. (The choice $136$ IGNORES THE CONDITION ON $a$ ✗; $64$ COUNTS AN ODD $a$ instead ✗; $56$ DROPS THE $a = 0$ ROW, the largest one ✗.)',
    },
    {
      q: '*Derived:* Five identical stamps are sorted into six envelopes labeled $U$, $V$, $W$, $X$, $Y$, $Z$; an envelope may be empty. How many sortings are there?',
      choices: ['$126$', '$462$', '$252$', '$56$'],
      answer: 2,
      solution:
        'Route one, casework on envelope $U$. Five envelopes holding $m$ identical stamps can be filled in $\\binom{m+4}{4}$ ways, which is $1, 5, 15, 35, 70, 126$ for $m = 0$ through $5$ — each entry the running sum of the four-envelope column. If $U$ takes $j$ stamps, the other $5 - j$ go into five envelopes, so the rows for $j = 0$ through $5$ are $126, 70, 35, 15, 5, 1$, and $126 + 70 + 35 + 15 + 5 + 1 = 252$ ✓. Route two, stars and bars. Five stars and $5$ bars sit in a row of $10$ symbols, the bars cutting the stamps into six blocks, so the count is $\\binom{10}{5} = 252$ ✓. (The choice $126$ FORGETS ONE ENVELOPE, counting five instead of six ✗; $462 = \\binom{11}{5}$ SORTS SIX STAMPS instead of five ✗; $56$ READS THE FOUR-ENVELOPE COLUMN, adding the triangular numbers $21 + 15 + 10 + 6 + 3 + 1$ ✗.)',
    },
  ],
  // slot 4 — positive parts with a cap or a floor on one of them
  [
    {
      q: 'How many ordered triples $(a, b, c)$ of positive integers satisfy $a + b + c = 12$ with $a \\leq 4$?',
      choices: ['$55$', '$21$', '$42$', '$34$'],
      answer: 3,
      solution:
        'Route one, casework on $a$. Because every part is positive, $a$ runs from $1$ to $4$, and $b + c = 12 - a$ in positive integers has $12 - a - 1 = 11 - a$ solutions. The rows for $a = 1, 2, 3, 4$ are $10, 9, 8, 7$, and $10 + 9 + 8 + 7 = 34$ ✓. Route two, complementary counting. Positive triples summing to $12$ number $\\binom{11}{2} = 55$, from cutting a row of $12$ units at $2$ of the $11$ gaps. Those with $a \\geq 5$ come from setting $a = a\' + 4$ with $a\' \\geq 1$, giving $a\' + b + c = 8$ and $\\binom{7}{2} = 21$ triples. So the count is $55 - 21 = 34$ ✓. (The choice $55$ IGNORES THE CAP ON $a$ ✗; $21$ REPORTS THE TRIPLES WITH $a \\geq 5$, the complement ✗; $42$ LETS $b$ OR $c$ BE ZERO, adding $12 + 11 + 10 + 9$ ✗.)',
    },
    {
      q: 'Thirteen identical chairs are set out in three labeled rows — front, middle, back — with every row holding at least one chair and the front row holding at most $5$. How many arrangements of row sizes are there?',
      choices: ['$66$', '$45$', '$55$', '$21$'],
      answer: 1,
      solution:
        'Route one, casework on the front row. The front row holds $j = 1, 2, 3, 4, 5$ chairs, and the middle and back rows then split $13 - j$ chairs with each holding at least one, which can be done in $12 - j$ ways. The rows of the table are $11, 10, 9, 8, 7$, and $11 + 10 + 9 + 8 + 7 = 45$ ✓. Route two, complementary counting. Ignoring the cap, three non-empty rows splitting $13$ chairs number $\\binom{12}{2} = 66$, one for each way of cutting the row of $13$ chairs at $2$ of its $12$ gaps. A cap-breaking arrangement has the front row holding at least $6$: give the front row $6$ chairs and each other row $1$, leaving $5$ chairs to place freely among the three rows, $\\binom{7}{2} = 21$ ways. So the count is $66 - 21 = 45$ ✓. (The choice $66$ IGNORES THE CAP ON THE FRONT ROW ✗; $55$ LETS THE MIDDLE OR BACK ROW BE EMPTY, adding $13 + 12 + 11 + 10 + 9$ ✗; $21$ IS THE COUNT WITH THE FRONT ROW HOLDING AT LEAST $6$, the complement ✗.)',
    },
    {
      q: '*Derived:* How many ordered triples $(a, b, c)$ of positive integers satisfy $a + b + c = 10$ with $a \\geq 4$?',
      choices: ['$15$', '$36$', '$21$', '$10$'],
      answer: 0,
      solution:
        'Route one, casework on $a$. Since $b$ and $c$ are positive, $a$ can be $4$ through $8$, and $b + c = 10 - a$ in positive integers has $9 - a$ solutions. The rows for $a = 4, 5, 6, 7, 8$ are $5, 4, 3, 2, 1$, and $5 + 4 + 3 + 2 + 1 = 15$ ✓. Route two, prepay the minimum. Write $a = a\' + 3$; then $a\' \\geq 1$ exactly when $a \\geq 4$, and $a\' + b + c = 7$ with all three positive. Cutting a row of $7$ units at $2$ of its $6$ gaps gives $\\binom{6}{2} = 15$ ✓. (The choice $36$ IGNORES THE MINIMUM, counting all $\\binom{9}{2}$ positive triples ✗; $21$ IS THE COMPLEMENT, the triples with $a \\leq 3$ ✗; $10$ STARTS THE TABLE AT $a = 5$, losing the largest row ✗.)',
    },
  ],
  // slot 5 — a floor on every box
  [
    {
      q: 'Fifteen identical pencils are given to four students, and each student must receive at least $3$ pencils. How many ways are there?',
      choices: ['$120$', '$35$', '$20$', '$364$'],
      answer: 2,
      solution:
        'Route one, casework on the first student. That student takes $j$ pencils, and since the other three need $9$ between them, $j$ runs from $3$ to $6$. The remaining $15 - j$ pencils go to three students each needing at least $3$, which after setting aside their nine leaves $6 - j$ free pencils and $\\binom{8-j}{2}$ ways. The rows for $j = 3, 4, 5, 6$ are $10, 6, 3, 1$, and $10 + 6 + 3 + 1 = 20$ ✓. Route two, prepay every minimum at once. Hand each of the four students $3$ pencils, using $12$ of them; the remaining $3$ pencils may go anywhere, and $3$ identical pencils among $4$ students can be dealt in $\\binom{6}{3} = 20$ ways ✓. (The choice $120$ PREPAYS ONLY $2$ PENCILS PER STUDENT, leaving $7$ free ✗; $35$ MISCOUNTS THE LEFTOVER, distributing $4$ pencils instead of $3$ ✗; $364$ PREPAYS ONLY $1$ PENCIL PER STUDENT ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of integers with $x \\geq 2$, $y \\geq 3$, and $z \\geq 1$ satisfy $x + y + z = 13$?',
      choices: ['$36$', '$105$', '$45$', '$78$'],
      answer: 0,
      solution:
        'Route one, casework on $x$. Since $y \\geq 3$ and $z \\geq 1$ eat four of the thirteen, $x$ runs from $2$ to $9$. For each $x = j$, the pair $(y, z)$ satisfies $y + z = 13 - j$ with $y \\geq 3$ and $z \\geq 1$, and letting $y$ run from $3$ up to $12 - j$ gives $10 - j$ choices. The rows for $j = 2$ through $9$ are $8, 7, 6, 5, 4, 3, 2, 1$, and $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$ ✓. Route two, shift every floor to zero. Put $x = x\' + 2$, $y = y\' + 3$, $z = z\' + 1$ with $x\', y\', z\' \\geq 0$; the equation becomes $x\' + y\' + z\' = 13 - 6 = 7$, and the shift is reversible, so the count is $\\binom{9}{2} = 36$ ✓. (The choice $105$ DROPS ALL THREE FLOORS, counting $\\binom{15}{2}$ ✗; $45$ FORGETS THE $z \\geq 1$ FLOOR, shifting by only $5$ ✗; $78$ APPLIES ONLY THE $x \\geq 2$ FLOOR ✗.)',
    },
    {
      q: '*Reversed:* Some identical candies are shared among three children so that every child receives at least $2$ candies, and there are exactly $45$ ways. How many candies are there?',
      choices: ['$13$', '$8$', '$15$', '$14$'],
      answer: 3,
      solution:
        'Route one, climb the ladder of totals. With $N$ candies and a floor of $2$ each, let the first child take $j$; the other two then split $N - j$ with each taking at least $2$, which is $N - j - 3$ ways when $N - j \\geq 4$. Adding those rows for $j = 2$ up to $N - 4$ gives a triangular number, and the totals $N = 6, 7, 8, 9, 10, 11, 12, 13, 14$ give $1, 3, 6, 10, 15, 21, 28, 36, 45$ ways. The count strictly increases, so $45$ pins $N = 14$ ✓. Route two, prepay and solve. Give each child $2$ candies first, using $6$; the remaining $N - 6$ candies go anywhere, so the count is $\\binom{N-4}{2} = 45$, that is $(N-4)(N-5) = 90 = 10 \\cdot 9$. Consecutive integers force $N - 4 = 10$, so $N = 14$ ✓. (The choice $13$ STOPS ONE RUNG SHORT, where the count is $36$ ✗; $8$ REPORTS THE FREE CANDIES $N - 6$ instead of the total ✗; $15$ OVERSHOOTS, where the count is $55$ ✗.)',
    },
  ],
  // slot 6 — a tight cap or floor on the last box
  [
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 6$ with $w \\leq 2$?',
      choices: ['$84$', '$64$', '$49$', '$20$'],
      answer: 1,
      solution:
        'Route one, casework on $w$. The cap cuts the sum to three rows: $w = 0$ leaves $x + y + z = 6$ with $\\frac{7 \\cdot 8}{2} = 28$ solutions, $w = 1$ leaves $x + y + z = 5$ with $21$, and $w = 2$ leaves $x + y + z = 4$ with $15$. Adding, $28 + 21 + 15 = 64$ ✓. Route two, complementary counting. All quadruples number $\\binom{9}{3} = 84$. Those with $w \\geq 3$ come from $w = 3 + w\'$, giving $x + y + z + w\' = 3$ and $\\binom{6}{3} = 20$ quadruples. So the count is $84 - 20 = 64$ ✓. (The choice $84$ DROPS THE CAP ON $w$ ✗; $49$ READS "AT MOST $2$" AS "AT MOST $1$", adding only $28 + 21$ ✗; $20$ COUNTS THE QUADRUPLES WITH $w \\geq 3$, the complement ✗.)',
    },
    {
      q: 'Eight identical lamps are placed into four rooms labeled $1$ through $4$, and room $4$ may hold at most $1$ lamp; the other rooms may hold any number, including none. How many placements are there?',
      choices: ['$165$', '$45$', '$84$', '$81$'],
      answer: 3,
      solution:
        'Route one, casework on room $4$. It holds $0$ or $1$ lamp, so the table has two rows. With room $4$ empty, $8$ lamps go into three rooms in $\\binom{10}{2} = 45$ ways; with one lamp there, $7$ lamps go into three rooms in $\\binom{9}{2} = 36$ ways. Adding, $45 + 36 = 81$ ✓. Route two, complementary counting. Ignoring the cap, $8$ lamps into four rooms can be placed in $\\binom{11}{3} = 165$ ways. A placement breaks the cap when room $4$ holds at least $2$; putting $2$ lamps there first leaves $6$ lamps free among the four rooms, $\\binom{9}{3} = 84$ ways. So the count is $165 - 84 = 81$ ✓. (The choice $165$ IGNORES THE CAP ✗; $45$ KEEPS ONLY THE ROW WITH ROOM $4$ EMPTY ✗; $84$ COUNTS THE PLACEMENTS THAT BREAK THE CAP ✗.)',
    },
    {
      q: '*Derived:* How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 5$ with $w \\geq 2$?',
      choices: ['$56$', '$36$', '$20$', '$35$'],
      answer: 2,
      solution:
        'Route one, casework on $w$. The floor makes the sum start at $w = 2$ and run to $w = 5$. For $w = 2, 3, 4, 5$ the rest satisfy $x + y + z = 3, 2, 1, 0$, with $10, 6, 3, 1$ solutions — the triangular numbers. Adding, $10 + 6 + 3 + 1 = 20$ ✓. Route two, shift the floor to zero. Set $w = w\' + 2$ with $w\' \\geq 0$; then $x + y + z + w\' = 3$, and each such quadruple comes from exactly one original, so the count is $\\binom{6}{3} = 20$ ✓. (The choice $56$ DROPS THE FLOOR ON $w$, counting all $\\binom{8}{3}$ quadruples ✗; $36$ IS THE COMPLEMENT, the quadruples with $w \\leq 1$ ✗; $35$ SHIFTS $w$ BY ONLY $1$, counting $w \\geq 1$ ✗.)',
    },
  ],
  // slot 7 — one box restricted by parity or by a multiple
  [
    {
      q: 'Twelve identical coins are handed to Ana, Bo, and Cy. Ana must receive an even number of coins (zero counts as even); the others may receive any number, including none. How many ways are there?',
      choices: ['$49$', '$91$', '$42$', '$36$'],
      answer: 0,
      solution:
        'Route one, casework on Ana. She takes $0, 2, 4, 6, 8, 10$, or $12$ coins, leaving $12, 10, 8, 6, 4, 2, 0$ for Bo and Cy, who split $m$ coins in $m + 1$ ways. The rows are $13, 11, 9, 7, 5, 3, 1$, and $13 + 11 + 9 + 7 + 5 + 3 + 1 = 49$ ✓. Route two, complementary counting. With no condition there are $\\binom{14}{2} = 91$ deals. Count the odd-Ana deals on their own by writing her share as $2t + 1$: then $2t + 1 \\leq 12$ forces $t = 0$ through $5$, and Bo and Cy split $11 - 2t$ coins in $12 - 2t$ ways, giving $12 + 10 + 8 + 6 + 4 + 2 = 42$. So the even-Ana count is $91 - 42 = 49$ ✓. (The choice $91$ IGNORES THE CONDITION ✗; $42$ COUNTS AN ODD SHARE FOR ANA instead ✗; $36$ DROPS THE ANA $= 0$ ROW, the largest one ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 9$ with $x$ odd?',
      choices: ['$55$', '$30$', '$25$', '$24$'],
      answer: 2,
      solution:
        'Route one, casework on $x$. The odd values available are $x = 1, 3, 5, 7, 9$, leaving $y + z = 8, 6, 4, 2, 0$ with $9, 7, 5, 3, 1$ solutions. Adding, $9 + 7 + 5 + 3 + 1 = 25$ ✓. Route two, complementary counting. All triples number $\\binom{11}{2} = 55$. The even-$x$ triples are counted separately by writing $x = 2s$: then $s = 0, 1, 2, 3, 4$ and $y + z = 9 - 2s$ has $10 - 2s$ solutions, giving $10 + 8 + 6 + 4 + 2 = 30$. Since every triple has $x$ either even or odd, the odd count is $55 - 30 = 25$ ✓. (The choice $55$ IGNORES THE CONDITION ✗; $30$ COUNTS EVEN $x$ instead ✗; $24$ FORGETS THE $x = 9$ ROW, where $y = z = 0$ ✗.)',
    },
    {
      q: '*Derived:* Ten identical coins are handed to Ana, Bo, and Cy. Ana must receive a number of coins that is a multiple of $3$ (zero counts as a multiple of $3$); the others may receive any number, including none. How many ways are there?',
      choices: ['$66$', '$26$', '$15$', '$22$'],
      answer: 1,
      solution:
        'Route one, casework on Ana. Her share can be $0, 3, 6$, or $9$, leaving $10, 7, 4, 1$ coins for Bo and Cy, who split $m$ coins in $m + 1$ ways. The rows are $11, 8, 5, 2$, and $11 + 8 + 5 + 2 = 26$ ✓. Route two, strip away the other two residues. All deals number $\\binom{12}{2} = 66$. If Ana’s share leaves remainder $1$ on division by $3$ it is $1, 4, 7$, or $10$, leaving $9, 6, 3, 0$ coins and $10 + 7 + 4 + 1 = 22$ deals; if it leaves remainder $2$ it is $2, 5$, or $8$, leaving $8, 5, 2$ coins and $9 + 6 + 3 = 18$ deals. Every share falls in exactly one residue class, so the multiple-of-$3$ count is $66 - 22 - 18 = 26$ ✓. (The choice $66$ IGNORES THE CONDITION ✗; $15$ DROPS THE ANA $= 0$ ROW ✗; $22$ COUNTS THE SHARES ONE MORE THAN A MULTIPLE OF $3$ ✗.)',
    },
  ],
  // slot 8 — the same cap on every box
  [
    {
      q: 'Eleven identical marbles are placed into three cups labeled $A$, $B$, $C$, and no cup may hold more than $6$ marbles. A cup may be empty. How many placements are there?',
      choices: ['$78$', '$45$', '$63$', '$33$'],
      answer: 3,
      solution:
        'Route one, casework on cup $A$. Let $A$ hold $j$ marbles, $j = 0$ through $6$; then $B + C = 11 - j$ with both at most $6$. When the leftover $s$ is more than $6$, the pairs run from $(s - 6, 6)$ to $(6, s - 6)$, which is $13 - s$ of them; when $s \\leq 6$ every split works, $s + 1$ of them. The rows for $j = 0$ through $6$ are therefore $2, 3, 4, 5, 6, 7, 6$, and $2 + 3 + 4 + 5 + 6 + 7 + 6 = 33$ ✓. Route two, inclusion and exclusion. Without caps there are $\\binom{13}{2} = 78$ placements. A cup breaks its cap by holding at least $7$; prepaying $7$ to one named cup leaves $4$ marbles free, $\\binom{6}{2} = 15$ ways, and there are $3$ cups, so $45$ placements break a cap. Two cups cannot both break it, since $7 + 7 = 14 > 11$, so nothing is double counted and the answer is $78 - 45 = 33$ ✓. (The choice $78$ IGNORES THE CAPS ✗; $45$ COUNTS THE PLACEMENTS THAT BREAK A CAP ✗; $63$ CAPS ONLY CUP $A$, leaving $B$ and $C$ free to overflow ✗.)',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 6$ with each of the four at most $3$?',
      choices: ['$84$', '$44$', '$74$', '$40$'],
      answer: 1,
      solution:
        'Route one, casework on $x$. Let $x = j$ for $j = 0, 1, 2, 3$; the other three must sum to $6 - j$ with each at most $3$, and those inner counts come from listing sorted patterns. Sum $6$: $3{+}3{+}0$ in $3$ orders, $3{+}2{+}1$ in $6$, $2{+}2{+}2$ in $1$, total $10$. Sum $5$: $3{+}2{+}0$ in $6$, $3{+}1{+}1$ in $3$, $2{+}2{+}1$ in $3$, total $12$. Sum $4$: $3{+}1{+}0$ in $6$, $2{+}2{+}0$ in $3$, $2{+}1{+}1$ in $3$, total $12$. Sum $3$: $3{+}0{+}0$ in $3$, $2{+}1{+}0$ in $6$, $1{+}1{+}1$ in $1$, total $10$. The rows are $10, 12, 12, 10$, and $10 + 12 + 12 + 10 = 44$ ✓. Route two, inclusion and exclusion. All quadruples number $\\binom{9}{3} = 84$. A variable breaks its cap by being at least $4$; prepaying $4$ to one named variable leaves $2$ units free, $\\binom{5}{3} = 10$ ways, and there are $4$ variables, so $40$ quadruples break a cap. Two variables cannot both break it, since $4 + 4 = 8 > 6$, so the answer is $84 - 40 = 44$ ✓. (The choice $84$ IGNORES THE CAPS ✗; $74$ CAPS ONLY $x$ ✗; $40$ COUNTS THE QUADRUPLES THAT BREAK A CAP ✗.)',
    },
    {
      q: '*Derived:* Eight identical marbles are placed into three cups labeled $A$, $B$, $C$, and no cup may hold more than $5$ marbles. A cup may be empty. How many placements are there?',
      choices: ['$27$', '$45$', '$39$', '$18$'],
      answer: 0,
      solution:
        'Route one, casework on cup $A$. Let $A$ hold $j$ marbles, $j = 0$ through $5$; then $B + C = 8 - j$ with both at most $5$. For a leftover $s$ above $5$ the splits run from $(s - 5, 5)$ to $(5, s - 5)$, which is $11 - s$ of them; for $s \\leq 5$ all $s + 1$ splits work. The rows for $j = 0, 1, 2, 3, 4, 5$ are $3, 4, 5, 6, 5, 4$, and $3 + 4 + 5 + 6 + 5 + 4 = 27$ ✓. Route two, inclusion and exclusion. Uncapped there are $\\binom{10}{2} = 45$ placements. A cup breaks its cap by holding at least $6$; prepaying $6$ to a named cup leaves $2$ marbles free, $\\binom{4}{2} = 6$ ways, times $3$ cups is $18$. No two cups can both overflow, since $6 + 6 = 12 > 8$, so the answer is $45 - 18 = 27$ ✓. (The choice $45$ IGNORES THE CAP ✗; $39$ CAPS ONLY CUP $A$ ✗; $18$ COUNTS THE PLACEMENTS THAT BREAK A CAP ✗.)',
    },
  ],
  // slot 9 — a parity condition on a pair of boxes
  [
    {
      q: 'Eleven identical marbles are placed into cups labeled $A$, $B$, $C$ (a cup may be empty). In how many placements do cups $A$ and $B$ together hold an even number of marbles? (Zero counts as even.)',
      choices: ['$78$', '$42$', '$36$', '$39$'],
      answer: 2,
      solution:
        'Route one, casework on cup $C$. Since $A + B + C = 11$ is odd, $A + B$ is even exactly when $C$ is odd. So $C = 1, 3, 5, 7, 9, 11$, leaving $10, 8, 6, 4, 2, 0$ marbles for $A$ and $B$, who split $m$ marbles in $m + 1$ ways. The rows are $11, 9, 7, 5, 3, 1$, and $11 + 9 + 7 + 5 + 3 + 1 = 36$ ✓. Route two, casework on the parities of $A$ and $B$. Their sum is even when both are even or both are odd. Both even: $A = 2a$, $B = 2b$ with $2a + 2b \\leq 11$, so $a + b \\leq 5$, and the pairs $(a, b)$ with $a + b \\leq 5$ number $\\binom{7}{2} = 21$; cup $C$ is then forced. Both odd: $A = 2a + 1$, $B = 2b + 1$ with $2a + 2b + 2 \\leq 11$, so $a + b \\leq 4$, giving $\\binom{6}{2} = 15$ pairs. Adding, $21 + 15 = 36$ ✓. (The choice $78$ IGNORES THE CONDITION ✗; $42$ MAKES $C$ EVEN INSTEAD, counting the odd totals for $A$ and $B$ ✗; $39$ HALVES $78$, assuming the even and odd cases are the same size ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 12$ with $x + y$ even? (Zero counts as even.)',
      choices: ['$49$', '$91$', '$42$', '$48$'],
      answer: 0,
      solution:
        'Route one, casework on $z$. Since $x + y + z = 12$ is even, $x + y$ is even exactly when $z$ is even. So $z = 0, 2, 4, 6, 8, 10, 12$, leaving $x + y = 12, 10, 8, 6, 4, 2, 0$ with $13, 11, 9, 7, 5, 3, 1$ solutions. Adding, $13 + 11 + 9 + 7 + 5 + 3 + 1 = 49$ ✓. Route two, casework on the parities of $x$ and $y$. Both even: $x = 2a$, $y = 2b$ with $2a + 2b \\leq 12$, so $a + b \\leq 6$, and the pairs number $\\binom{8}{2} = 28$, with $z$ forced. Both odd: $x = 2a + 1$, $y = 2b + 1$ with $2a + 2b + 2 \\leq 12$, so $a + b \\leq 5$, giving $\\binom{7}{2} = 21$ pairs. Adding, $28 + 21 = 49$ ✓. (The choice $91$ DROPS THE CONDITION ✗; $42$ COUNTS $x + y$ ODD instead ✗; $48$ FORGETS THE ROW $z = 12$, where $x = y = 0$ ✗.)',
    },
    {
      q: '*Derived:* Nine identical marbles are placed into cups labeled $A$, $B$, $C$ (a cup may be empty). In how many placements do cups $A$ and $B$ together hold an even number of marbles? (Zero counts as even.)',
      choices: ['$30$', '$55$', '$16$', '$25$'],
      answer: 3,
      solution:
        'Route one, casework on cup $C$. Because $A + B + C = 9$ is odd, $A + B$ is even exactly when $C$ is odd, so $C = 1, 3, 5, 7, 9$ and $A + B = 8, 6, 4, 2, 0$, split in $9, 7, 5, 3, 1$ ways. Adding, $9 + 7 + 5 + 3 + 1 = 25$ ✓. Route two, casework on the parities of $A$ and $B$. Both even: $A = 2a$, $B = 2b$ with $2a + 2b \\leq 9$, so $a + b \\leq 4$ and the pairs number $\\binom{6}{2} = 15$, with $C$ forced. Both odd: $A = 2a + 1$, $B = 2b + 1$ with $2a + 2b + 2 \\leq 9$, so $a + b \\leq 3$, giving $\\binom{5}{2} = 10$ pairs. Adding, $15 + 10 = 25$ ✓. (The choice $30$ COUNTS AN ODD TOTAL FOR $A$ AND $B$ instead ✗; $55$ IGNORES THE CONDITION ✗; $16$ DROPS THE $C = 1$ ROW, the largest one ✗.)',
    },
  ],
  // slot 10 — caps tight enough that most placements are illegal
  [
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 14$ with each of $x$, $y$, $z$ at most $6$?',
      choices: ['$120$', '$105$', '$36$', '$15$'],
      answer: 3,
      solution:
        'Route one, casework on $x$. With $y$ and $z$ each at most $6$ they can carry at most $12$, so $x \\geq 2$; and the cap gives $x \\leq 6$. For $x = j$ the leftover is $s = 14 - j$, which is more than $6$ in every row, so the splits run from $(s - 6, 6)$ to $(6, s - 6)$, that is $13 - s = j - 1$ of them. The rows for $j = 2, 3, 4, 5, 6$ are $1, 2, 3, 4, 5$, and $1 + 2 + 3 + 4 + 5 = 15$ ✓. Route two, inclusion and exclusion. Uncapped there are $\\binom{16}{2} = 120$ triples. A variable overflows by being at least $7$; prepaying $7$ to a named variable leaves $7$ units free, $\\binom{9}{2} = 36$ ways, times $3$ variables is $108$. Two variables can both overflow here, since $7 + 7 = 14$ exactly: each such pair forces both to be $7$ and the third to be $0$, one triple per pair, so $3$ triples were counted twice. The overflowing count is $108 - 3 = 105$, and the answer is $120 - 105 = 15$ ✓. (The choice $120$ IGNORES THE CAPS ✗; $105$ COUNTS THE TRIPLES THAT BREAK A CAP ✗; $36$ IS ONE VARIABLE’S OVERFLOW COUNT, before the other two are considered ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 18$ with each of $x$, $y$, $z$ at most $9$?',
      choices: ['$190$', '$55$', '$45$', '$135$'],
      answer: 1,
      solution:
        'Route one, casework on $x$. The cap gives $x = j$ for $j = 0$ through $9$, and the leftover $s = 18 - j$ is always at least $9$, so the splits with both parts at most $9$ run from $(s - 9, 9)$ to $(9, s - 9)$, which is $19 - s = j + 1$ of them. The rows for $j = 0$ through $9$ are $1, 2, 3, \\ldots, 10$, and $1 + 2 + \\cdots + 10 = 55$ ✓. Route two, inclusion and exclusion. Uncapped there are $\\binom{20}{2} = 190$ triples. A variable overflows by being at least $10$; prepaying $10$ to a named variable leaves $8$ units free, $\\binom{10}{2} = 45$ ways, times $3$ variables is $135$. Two cannot both overflow, since $10 + 10 = 20 > 18$, so no triple is double counted and the answer is $190 - 135 = 55$ ✓. (The choice $190$ IGNORES THE CAPS ✗; $135$ COUNTS THE TRIPLES THAT BREAK A CAP ✗; $45$ IS ONE VARIABLE’S OVERFLOW COUNT, not the total overflow ✗.)',
    },
    {
      q: '*Derived:* How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 15$ with at least one of $x$, $y$, $z$ greater than $7$?',
      choices: ['$108$', '$136$', '$105$', '$28$'],
      answer: 0,
      solution:
        'Route one, build the safe table and subtract. All triples number $\\binom{17}{2} = 136$. Now count the triples with every variable at most $7$ by casework on $x$: since $y$ and $z$ carry at most $14$, $x \\geq 1$, and for $x = j$ the leftover $s = 15 - j$ exceeds $7$, so the splits run from $(s - 7, 7)$ to $(7, s - 7)$, which is $15 - s = j$ of them. The rows for $j = 1$ through $7$ are $1, 2, 3, 4, 5, 6, 7$, summing to $28$. The triples with at least one variable above $7$ therefore number $136 - 28 = 108$ ✓. Route two, count them directly. Two variables cannot both exceed $7$, since that would need at least $8 + 8 = 16 > 15$, so the triples split cleanly by which single variable is large. For $x \\geq 8$, write $x = 8 + x\'$ to get $x\' + y + z = 7$ with $\\binom{9}{2} = 36$ solutions, and the same holds for $y$ and for $z$: $3 \\cdot 36 = 108$ ✓. (The choice $136$ COUNTS EVERY TRIPLE, condition and all ✗; $105$ SUBTRACTS AN OVERLAP THAT CANNOT HAPPEN, as though two variables could both exceed $7$ ✗; $28$ IS THE COMPLEMENT, the triples with every variable at most $7$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 13, sections: { '13.3': s133 } }
