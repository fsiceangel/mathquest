// Counting & Probability chapter 13 — variations for section 13.4
// (A Clever Solution). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: whether the items are identical,
//    whether the boxes are labeled, whether a box may be empty, and every
//    minimum and every cap written out in full.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    stars-and-bars count against a recursion on the first box, a gap bijection,
//    a complementary substitution, or a direct enumeration of the small cases.
//  - Each distractor is one named slip — the $\binom{n+k}{k}$ bar miscount, a
//    minimum that was never paid, an off-by-one payment, a missing add-back —
//    named in CAPS.

const s134 = [
  // slot 1 — the plain formula
  [
    {
      q: 'How many ordered quintuples $(x_1, x_2, x_3, x_4, x_5)$ of non-negative integers satisfy $x_1 + x_2 + x_3 + x_4 + x_5 = 8$?',
      choices: ['$1287$', '$495$', '$792$', '$70$'],
      answer: 1,
      solution:
        'Route one, stars and bars. Eight identical units go into $5$ labeled slots, so a row holds $8$ stars and $4$ bars — $5$ slots need only $4$ dividers. Choose which $4$ of the $12$ symbols are bars: $\\binom{12}{4} = 495$ ✓. Route two, peel off $x_1$. If $x_1 = j$ then $x_2 + x_3 + x_4 + x_5 = 8 - j$, and the number of non-negative quadruples summing to $m$ is $\\binom{m+3}{3}$. Adding over $j = 0$ to $8$: $165 + 120 + 84 + 56 + 35 + 20 + 10 + 4 + 1 = 495$ ✓. (The choice $1287 = \\binom{13}{5}$ USES $5$ BARS FOR $5$ SLOTS, the $\\binom{n+k}{k}$ miscount — it is the count for six slots ✗; $792 = \\binom{12}{5}$ KEEPS THE RIGHT TOTAL BUT PICKS THE WRONG NUMBER OF POSITIONS ✗; $70 = \\binom{8}{4}$ FORGETS TO ADD THE BARS TO THE TOTAL, choosing from $8$ symbols instead of $12$ ✗.)',
    },
    {
      q: 'Nine identical crayons are placed into five cups labeled $1$ through $5$. A cup may be empty. How many placements are there?',
      choices: ['$2002$', '$1287$', '$126$', '$715$'],
      answer: 3,
      solution:
        'Route one, stars and bars. The crayons are identical and the cups are labeled, so a placement is a list of five counts adding to $9$: $9$ stars and $4$ bars, and $\\binom{13}{4} = 715$ ✓. Route two, split on cup $1$. If cup $1$ takes $j$ crayons, the other $9 - j$ go into $4$ cups, which can happen $\\binom{12-j}{3}$ ways. Adding over $j = 0$ to $9$: $220 + 165 + 120 + 84 + 56 + 35 + 20 + 10 + 4 + 1 = 715$ ✓. (The choice $2002 = \\binom{14}{5}$ USES $5$ BARS FOR $5$ CUPS ✗; $1287 = \\binom{13}{5}$ HAS THE RIGHT TOTAL BUT CHOOSES $5$ POSITIONS ✗; $126 = \\binom{9}{4}$ FORGETS TO ADD THE BARS TO THE TOTAL ✗.)',
    },
    {
      q: 'How many ordered quadruples $(x_1, x_2, x_3, x_4)$ of positive integers (each $x_i \\geq 1$) satisfy $x_1 + x_2 + x_3 + x_4 = 9$?',
      choices: ['$220$', '$84$', '$56$', '$70$'],
      answer: 2,
      solution:
        'Route one, pay the minimum first. Give each variable its $1$, using $4$; the remaining $5$ units are split among $4$ variables with no restriction: $5$ stars and $3$ bars, $\\binom{8}{3} = 56$ ✓. Route two, cut a row of nine. Write $9$ units in a row; a positive quadruple is exactly a choice of $3$ of the $8$ gaps between neighboring units at which to cut. Different cut sets give different quadruples and every quadruple arises once, so the count is $\\binom{8}{3} = 56$ ✓. (Cross-check by peeling $x_1 = j$ for $j = 1$ to $6$: $21 + 15 + 10 + 6 + 3 + 1 = 56$.) (The choice $220 = \\binom{12}{3}$ ALLOWS ZEROS, skipping the payment entirely ✗; $84 = \\binom{9}{3}$ PAYS ONLY ONE UNIT IN TOTAL instead of one per variable ✗; $70 = \\binom{8}{4}$ pays correctly but CHOOSES $4$ BAR POSITIONS FOR $4$ VARIABLES ✗.)',
    },
  ],
  // slot 2 — kinds of item, and the reversed form
  [
    {
      q: 'A pizza shop offers $5$ toppings. Mia orders $6$ scoops of topping in all, taking any number of each kind, and a topping may be skipped. How many different orders are possible? (Two orders are the same if they use the same number of scoops of each topping.)',
      choices: ['$462$', '$252$', '$15$', '$210$'],
      answer: 3,
      solution:
        'Route one, stars and bars. An order is a list of five counts adding to $6$, so the row has $6$ stars and $4$ bars: $\\binom{10}{4} = 210$ ✓. Route two, split on the first topping. If topping $1$ gets $j$ scoops, the other $6 - j$ scoops come from $4$ toppings, which happens $\\binom{9-j}{3}$ ways. Adding over $j = 0$ to $6$: $84 + 56 + 35 + 20 + 10 + 4 + 1 = 210$ ✓. (The choice $462 = \\binom{11}{5}$ USES $5$ BARS FOR $5$ TOPPINGS ✗; $252 = \\binom{10}{5}$ has the right total but CHOOSES $5$ POSITIONS INSTEAD OF $4$ ✗; $15 = \\binom{6}{4}$ FORGETS TO ADD THE BARS TO THE TOTAL ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d = 14$?',
      choices: ['$3060$', '$680$', '$2380$', '$364$'],
      answer: 1,
      solution:
        'Route one, stars and bars. Fourteen stars and $3$ bars, so $\\binom{17}{3} = 680$ ✓. Route two, add up the triangular numbers. Fixing $a = j$ leaves a triple summing to $14 - j$, and the triples summing to $m$ number $\\binom{m+2}{2}$, the $(m+1)$st triangular number. So the total is $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 + 45 + 55 + 66 + 78 + 91 + 105 + 120 = 680$ ✓. (The choice $3060 = \\binom{18}{4}$ USES $4$ BARS FOR $4$ VARIABLES ✗; $2380 = \\binom{17}{4}$ has the right total but CHOOSES $4$ POSITIONS ✗; $364 = \\binom{14}{3}$ FORGETS TO ADD THE BARS TO THE TOTAL ✗.)',
    },
    {
      q: 'A florist builds a bouquet of $12$ flowers from $k$ kinds, using any number of each kind and possibly none of some kinds. Bouquets with the same number of each kind are the same, and there are exactly $1820$ different bouquets. What is $k$?',
      choices: ['$5$', '$4$', '$6$', '$16$'],
      answer: 0,
      solution:
        'Route one, set up the formula and solve. Twelve flowers into $k$ labeled kinds gives $\\binom{12 + k - 1}{k - 1} = \\binom{k + 11}{k - 1}$ bouquets. For $k = 5$ that is $\\binom{16}{4} = \\frac{16 \\cdot 15 \\cdot 14 \\cdot 13}{24} = 1820$ ✓. Route two, build the table and use monotonicity. Counting directly: with $3$ kinds a bouquet is a triple summing to $12$, and there are $\\binom{14}{2} = 91$; with $4$ kinds, $\\binom{15}{3} = 455$; with $5$ kinds, $\\binom{16}{4} = 1820$. Adding a kind can only increase the count — every old bouquet survives by taking none of the new kind, and new ones appear — so the run $91, 455, 1820$ is strictly increasing and $k = 5$ is the only answer ✓. (The choice $4$ SOLVES $\\binom{12+k}{k} = 1820$, the $\\binom{n+k}{k}$ bar miscount, which lands on $\\binom{16}{4}$ with $k = 4$ ✗; $6$ ALLOWS $k - 2$ BARS instead of $k - 1$, so $\\binom{16}{4}$ is read off at $k = 6$ ✗; $16$ REPORTS THE TOP NUMBER OF $\\binom{16}{4}$ rather than the number of kinds ✗.)',
    },
  ],
  // slot 3 — a minimum of one or two per box
  [
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of positive integers satisfy $a + b + c + d = 15$?',
      choices: ['$816$', '$680$', '$364$', '$455$'],
      answer: 2,
      solution:
        'Route one, pay the minimum first. Hand each variable its $1$, using $4$, and split the remaining $11$ freely among $4$ variables: $11$ stars and $3$ bars, $\\binom{14}{3} = 364$ ✓. Route two, cut a row of fifteen. Lay $15$ units in a row. A positive quadruple corresponds to choosing $3$ of the $14$ gaps between neighboring units and cutting there; the four pieces are the four values, each at least $1$. The map runs both ways, so the count is $\\binom{14}{3} = 364$ ✓. (The choice $816 = \\binom{18}{3}$ ALLOWS ZEROS, ignoring the word positive ✗; $680 = \\binom{17}{3}$ PAYS ONLY ONE UNIT IN TOTAL instead of one per variable ✗; $455 = \\binom{15}{3}$ PAYS ONLY THREE OF THE FOUR VARIABLES ✗.)',
    },
    {
      q: 'Sixteen identical chairs are placed into five rooms labeled $1$ through $5$, and every room must receive at least one chair. How many placements are there?',
      choices: ['$1365$', '$4845$', '$3003$', '$1820$'],
      answer: 0,
      solution:
        'Route one, pay the minimum first. Put one chair in each room, using $5$; the remaining $11$ chairs go anywhere among the $5$ rooms: $11$ stars and $4$ bars, $\\binom{15}{4} = 1365$ ✓. Route two, split on room $1$. If room $1$ takes $j$ chairs ($1 \\leq j \\leq 12$), the other $16 - j$ chairs fill $4$ rooms each holding at least one, which happens $\\binom{15-j}{3}$ ways. Adding: $364 + 286 + 220 + 165 + 120 + 84 + 56 + 35 + 20 + 10 + 4 + 1 = 1365$ ✓. (The choice $4845 = \\binom{20}{4}$ IGNORES THE MINIMUM and lets rooms stand empty ✗; $3003 = \\binom{15}{5}$ pays correctly but USES $5$ BARS FOR $5$ ROOMS ✗; $1820 = \\binom{16}{4}$ PAYS ONLY FOUR OF THE FIVE ROOMS ✗.)',
    },
    {
      q: 'How many ordered quintuples $(a, b, c, d, e)$ of integers, each at least $2$, satisfy $a + b + c + d + e = 20$?',
      choices: ['$10626$', '$3876$', '$2002$', '$1001$'],
      answer: 3,
      solution:
        'Route one, pay the minimum first. Give every variable its $2$, using $10$, and distribute the remaining $10$ freely among $5$ variables: $10$ stars and $4$ bars, $\\binom{14}{4} = 1001$ ✓. Route two, split on $a$. With $a = j$ (so $2 \\leq j \\leq 12$), the other four variables are each at least $2$ and sum to $20 - j$; paying them $8$ leaves $12 - j$ free among $4$, which is $\\binom{15-j}{3}$. Adding over $j = 2$ to $12$: $286 + 220 + 165 + 120 + 84 + 56 + 35 + 20 + 10 + 4 + 1 = 1001$ ✓. (The choice $10626 = \\binom{24}{4}$ IGNORES THE MINIMUM ✗; $3876 = \\binom{19}{4}$ PAYS ONLY $1$ PER VARIABLE instead of $2$ ✗; $2002 = \\binom{14}{5}$ pays correctly but USES $5$ BARS FOR $5$ VARIABLES ✗.)',
    },
  ],
  // slot 4 — a larger minimum, and solving for it
  [
    {
      q: 'Twenty-five identical beads are placed into four boxes labeled $1$ through $4$, and each box must hold at least $4$ beads. How many placements are there?',
      choices: ['$220$', '$3276$', '$2024$', '$495$'],
      answer: 0,
      solution:
        'Route one, pay the minimum first. Put $4$ beads in each box, using $16$; the remaining $9$ beads go anywhere: $9$ stars and $3$ bars, $\\binom{12}{3} = 220$ ✓. Route two, split on box $1$. Box $1$ can hold $b$ beads for $4 \\leq b \\leq 13$, since the other three boxes need $12$ between them. For each $b$ the other three boxes hold $25 - b$ beads with each at least $4$, which after paying $12$ leaves $13 - b$ free among $3$ boxes: $\\binom{15-b}{2}$ ways. Adding for $b = 4$ up to $13$: $55 + 45 + 36 + 28 + 21 + 15 + 10 + 6 + 3 + 1 = 220$ ✓. (The choice $3276 = \\binom{28}{3}$ IGNORES THE MINIMUM ✗; $2024 = \\binom{24}{3}$ PAYS ONLY $1$ PER BOX instead of $4$ ✗; $495 = \\binom{12}{4}$ pays correctly but USES $4$ BARS FOR $4$ BOXES ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of integers, each at least $5$, satisfy $x + y + z = 30$?',
      choices: ['$496$', '$406$', '$136$', '$190$'],
      answer: 2,
      solution:
        'Route one, pay the minimum first. Give each variable its $5$, using $15$, and split the remaining $15$ freely among $3$ variables: $15$ stars and $2$ bars, $\\binom{17}{2} = 136$ ✓. Route two, count the pairs directly. Fix $x$; then $y$ must satisfy $y \\geq 5$ and $z = 30 - x - y \\geq 5$, so $5 \\leq y \\leq 25 - x$, giving $21 - x$ choices. This is positive for $5 \\leq x \\leq 20$, so the total is $16 + 15 + 14 + \\cdots + 1 = \\frac{16 \\cdot 17}{2} = 136$ ✓. (The choice $496 = \\binom{32}{2}$ IGNORES THE MINIMUM ✗; $406 = \\binom{29}{2}$ PAYS ONLY $1$ PER VARIABLE ✗; $190 = \\binom{20}{2}$ PAYS $4$ PER VARIABLE, one short of the required $5$ ✗.)',
    },
    {
      q: 'Twenty identical marbles are placed into three jars labeled $A$, $B$, $C$, and each jar must hold at least $m$ marbles, where $m$ is a non-negative integer. There are exactly $45$ placements. What is $m$?',
      choices: ['$3$', '$4$', '$5$', '$12$'],
      answer: 1,
      solution:
        'Route one, set up the formula and solve. Paying each jar $m$ uses $3m$ and leaves $20 - 3m$ marbles free among $3$ jars, so the count is $\\binom{22 - 3m}{2} = 45$. Since $\\binom{10}{2} = 45$, we need $22 - 3m = 10$, so $m = 4$ ✓. Route two, build the table. Count each candidate from scratch: $m = 3$ leaves $11$ marbles free, $\\binom{13}{2} = 78$; $m = 4$ leaves $8$, $\\binom{10}{2} = 45$; $m = 5$ leaves $5$, $\\binom{7}{2} = 21$. Raising $m$ can only remove placements, so the run $78, 45, 21$ is strictly decreasing and $m = 4$ is the only value giving $45$ ✓. (The choice $3$ STOPS ONE STEP SHORT and gives $78$ placements, not $45$ ✗; $5$ OVERSHOOTS BY ONE PAYMENT and gives $21$ ✗; $12$ SUBTRACTS THE MINIMUM ONCE INSTEAD OF ONCE PER JAR, since $\\binom{20 - 12 + 2}{2} = 45$ ✗.)',
    },
  ],
  // slot 5 — one variable fixed, another with a floor
  [
    {
      q: 'Eighteen identical coins are given to four friends — Wen, Xu, Yi, and Zo. Wen must receive exactly $4$ coins and Xu at least $3$; Yi and Zo may receive any number, including none. How many ways are there?',
      choices: ['$120$', '$78$', '$364$', '$105$'],
      answer: 1,
      solution:
        'Route one, settle Wen, then pay Xu. Wen’s $4$ coins are fixed, so $14$ coins remain for Xu, Yi, and Zo with Xu holding at least $3$. Pay Xu his $3$; the remaining $11$ coins go freely to three friends: $11$ stars and $2$ bars, $\\binom{13}{2} = 78$ ✓. Route two, count on Xu’s share. With Wen at $4$, let Xu take $j$ coins, $3 \\leq j \\leq 14$. Then Yi and Zo split $14 - j$ coins, which can be done in $15 - j$ ways. Adding for $j = 3$ up to $14$: $12 + 11 + 10 + \\cdots + 1 = \\frac{12 \\cdot 13}{2} = 78$ ✓. (The choice $120 = \\binom{16}{2}$ FORGETS XU’S MINIMUM and splits all $14$ freely ✗; $364 = \\binom{14}{3}$ KEEPS WEN AS A FOURTH FREE VARIABLE after already settling her ✗; $105 = \\binom{15}{2}$ PAYS XU ONLY $1$ instead of $3$ ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d = 24$ with $a = 8$ and $b \\geq 4$?',
      choices: ['$153$', '$455$', '$1771$', '$91$'],
      answer: 3,
      solution:
        'Route one, settle $a$, then pay $b$. With $a = 8$ we need $b + c + d = 16$ and $b \\geq 4$. Pay $b$ its $4$, leaving $12$ to split freely among three variables: $12$ stars and $2$ bars, $\\binom{14}{2} = 91$ ✓. Route two, count on $b$. With $a = 8$, let $b = j$ for $4 \\leq j \\leq 16$. Then $c + d = 16 - j$, which has $17 - j$ non-negative solutions. Adding for $j = 4$ up to $16$: $13 + 12 + 11 + \\cdots + 1 = \\frac{13 \\cdot 14}{2} = 91$ ✓. (The choice $153 = \\binom{18}{2}$ FORGETS THE CONDITION $b \\geq 4$ ✗; $455 = \\binom{15}{3}$ KEEPS $a$ AS A FREE FOURTH VARIABLE after fixing it at $8$ ✗; $1771 = \\binom{23}{3}$ IGNORES $a = 8$ ALTOGETHER, paying only $b$ ✗.)',
    },
    {
      q: 'Fifteen identical stickers are given to four children — Ana, Ben, Cy, and Di. Ana must receive at least $3$ stickers and Ben at least $2$; Cy and Di may receive any number, including none. How many ways are there?',
      choices: ['$816$', '$560$', '$286$', '$165$'],
      answer: 2,
      solution:
        'Route one, pay both minimums first. Give Ana $3$ and Ben $2$, using $5$; the remaining $10$ stickers go freely to the four children: $10$ stars and $3$ bars, $\\binom{13}{3} = 286$ ✓. Route two, count on Ana’s share. Let Ana take $a$ stickers, $3 \\leq a \\leq 13$, since Ben still needs $2$. The other $15 - a$ stickers go to Ben, Cy, and Di with Ben at least $2$; paying Ben leaves $13 - a$ free among three, which is $\\binom{15-a}{2}$ ways. Adding for $a = 3$ up to $13$: $66 + 55 + 45 + 36 + 28 + 21 + 15 + 10 + 6 + 3 + 1 = 286$ ✓. (The choice $816 = \\binom{18}{3}$ IGNORES BOTH MINIMUMS ✗; $560 = \\binom{16}{3}$ PAYS $1$ TO EACH OF THE FOUR CHILDREN instead of paying Ana $3$ and Ben $2$ ✗; $165 = \\binom{11}{3}$ READS BOTH MINIMUMS AS STRICT, paying Ana $4$ and Ben $3$ ✗.)',
    },
  ],
  // slot 6 — every kind used, one kind constrained
  [
    {
      q: 'A bakery sells $6$ kinds of bread, one of them rye. A basket holds $12$ loaves, includes at least one loaf of every kind, and contains exactly $4$ rye loaves. How many different baskets are possible? (Baskets with the same number of loaves of each kind are the same.)',
      choices: ['$495$', '$330$', '$462$', '$35$'],
      answer: 3,
      solution:
        'Route one, settle rye, then pay the rest. The $4$ rye loaves are fixed, so $8$ loaves come from the other $5$ kinds with at least one of each. Pay one loaf to each of those $5$ kinds, leaving $3$ loaves free among $5$ kinds: $3$ stars and $4$ bars, $\\binom{7}{4} = 35$ ✓. Route two, list the shapes of the three extra loaves. Those $3$ extra loaves fall into exactly three patterns. All three to one kind: $5$ ways. Two to one kind and one to another: $5 \\cdot 4 = 20$ ordered ways, since the kinds play different roles. One each to three different kinds: $\\binom{5}{3} = 10$. Total $5 + 20 + 10 = 35$ ✓. (The choice $495 = \\binom{12}{4}$ FORGETS THE AT-LEAST-ONE RULE for the other five kinds ✗; $330 = \\binom{11}{4}$ PAYS ONLY ONE LOAF IN TOTAL rather than one per kind ✗; $462 = \\binom{11}{5}$ pays every kind once but IGNORES THE EXACT RYE COUNT, leaving rye free ✗.)',
    },
    {
      q: 'How many ordered quintuples $(a, b, c, d, e)$ of positive integers satisfy $a + b + c + d + e = 14$ with $a = 4$?',
      choices: ['$286$', '$84$', '$126$', '$120$'],
      answer: 1,
      solution:
        'Route one, settle $a$, then pay the rest. With $a = 4$ we need $b + c + d + e = 10$ with all four positive. Pay each of them $1$, using $4$, and split the remaining $6$ freely: $6$ stars and $3$ bars, $\\binom{9}{3} = 84$ ✓. Route two, count on $b$. Let $b = j$ for $1 \\leq j \\leq 7$, since $c$, $d$, $e$ still need $1$ each. Then $c + d + e = 10 - j$ with all positive, which is $\\binom{9-j}{2}$ ways. Adding: $28 + 21 + 15 + 10 + 6 + 3 + 1 = 84$ ✓. (The choice $286 = \\binom{13}{3}$ ALLOWS ZEROS among $b$, $c$, $d$, $e$ ✗; $126 = \\binom{9}{4}$ KEEPS $a$ AS A FIFTH FREE VARIABLE after fixing it at $4$ ✗; $120 = \\binom{10}{3}$ PAYS ONLY THREE OF THE FOUR REMAINING VARIABLES ✗.)',
    },
    {
      q: 'A shop sells $5$ kinds of doughnut, one of them chocolate. A box holds $10$ doughnuts, includes at least one of every kind, and contains at most $3$ chocolate. How many different boxes are possible? (Boxes with the same number of each kind are the same.)',
      choices: ['$111$', '$126$', '$20$', '$15$'],
      answer: 0,
      solution:
        'Route one, count all, then remove the violators. Ignoring the cap, pay one doughnut to each of the $5$ kinds and split the remaining $5$ freely: $\\binom{9}{4} = 126$ boxes. A box violates the cap when it has at least $4$ chocolate; pay chocolate $4$ and the other four kinds $1$ each, using $8$, and split the remaining $2$ freely among $5$ kinds: $\\binom{6}{4} = 15$. So $126 - 15 = 111$ ✓. Route two, case on the chocolate count. Chocolate can be $1$, $2$, or $3$. With $c$ chocolate, the other $4$ kinds hold $10 - c$ doughnuts with at least one each, which after paying $4$ leaves $6 - c$ free among $4$ kinds: $\\binom{9-c}{3}$. That gives $\\binom{8}{3} + \\binom{7}{3} + \\binom{6}{3} = 56 + 35 + 20 = 111$ ✓. (The choice $126$ IGNORES THE CAP ✗; $20$ READS "AT MOST $3$" AS "EXACTLY $3$", counting only the last case ✗; $15$ REPORTS THE VIOLATOR COUNT instead of subtracting it ✗.)',
    },
  ],
  // slot 7 — upper bounds by complement
  [
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 14$ with $x \\leq 5$?',
      choices: ['$75$', '$120$', '$45$', '$65$'],
      answer: 0,
      solution:
        'Route one, complementary counting. All triples: $14$ stars and $2$ bars, $\\binom{16}{2} = 120$. Those violating the bound have $x \\geq 6$; pay $x$ its $6$ and split the remaining $8$ freely, $\\binom{10}{2} = 45$. So $120 - 45 = 75$ ✓. Route two, count the allowed cases directly. For each $x$ from $0$ to $5$, the pair $(y, z)$ satisfies $y + z = 14 - x$, which has $15 - x$ non-negative solutions. Adding: $15 + 14 + 13 + 12 + 11 + 10 = 75$ ✓. (The choice $120$ IGNORES THE BOUND ✗; $45$ REPORTS THE VIOLATORS instead of subtracting them ✗; $65$ SUBTRACTS THE TRIPLES WITH $x \\geq 5$, an off-by-one in the complement that throws away the allowed case $x = 5$ ✗.)',
    },
    {
      q: 'Eighteen identical apples are placed into four crates labeled $1$ through $4$. Crate $1$ may hold at most $6$ apples; the other crates may hold any number, including none. How many placements are there?',
      choices: ['$1330$', '$364$', '$966$', '$875$'],
      answer: 2,
      solution:
        'Route one, complementary counting. All placements: $18$ stars and $3$ bars, $\\binom{21}{3} = 1330$. Violators have crate $1$ holding at least $7$; pay it $7$ and split the remaining $11$ freely among four crates, $\\binom{14}{3} = 364$. So $1330 - 364 = 966$ ✓. Route two, split on crate $1$. If crate $1$ holds $j$ apples with $0 \\leq j \\leq 6$, the other $18 - j$ apples go into $3$ crates, which is $\\binom{20-j}{2}$ ways. Adding: $190 + 171 + 153 + 136 + 120 + 105 + 91 = 966$ ✓. (The choice $1330$ IGNORES THE CAP ✗; $364$ REPORTS THE VIOLATORS instead of subtracting them ✗; $875$ SUBTRACTS THE PLACEMENTS WITH CRATE $1$ AT LEAST $6$, an off-by-one that discards the allowed case of exactly $6$ ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 12$ with $x \\leq 4$ and $y \\leq 6$?',
      choices: ['$91$', '$35$', '$55$', '$34$'],
      answer: 1,
      solution:
        'Route one, inclusion and exclusion. All triples: $\\binom{14}{2} = 91$. Those with $x \\geq 5$: pay $5$, split $7$, $\\binom{9}{2} = 36$. Those with $y \\geq 7$: pay $7$, split $5$, $\\binom{7}{2} = 21$. Both at once needs $5 + 7 = 12$ units, leaving $0$ to split, so $\\binom{2}{2} = 1$ triple, and it was removed twice. So $91 - 36 - 21 + 1 = 35$ ✓. Route two, sweep $x$ and count $y$ by hand. For a fixed $x$ from $0$ to $4$, we need $0 \\leq y \\leq 6$ and $z = 12 - x - y \\geq 0$, so $y \\leq 12 - x$. Since $12 - x$ is at least $8$ over this range, the binding limit is always $y \\leq 6$, giving $7$ values of $y$ for each of the $5$ values of $x$: $5 \\cdot 7 = 35$ ✓. (The choice $91$ IGNORES BOTH BOUNDS ✗; $55$ APPLIES ONLY THE BOUND ON $x$ ✗; $34$ SUBTRACTS BOTH VIOLATOR SETS BUT NEVER ADDS BACK the triple counted twice ✗.)',
    },
  ],
  // slot 8 — inequalities and a slack variable
  [
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d \\leq 7$?',
      choices: ['$120$', '$792$', '$330$', '$165$'],
      answer: 2,
      solution:
        'Route one, add a slack variable. Let $s = 7 - (a + b + c + d)$, a non-negative integer. Every quadruple with sum at most $7$ matches exactly one quintuple $(a, b, c, d, s)$ with $a + b + c + d + s = 7$, and back again by dropping $s$. That count is $7$ stars and $4$ bars: $\\binom{11}{4} = 330$ ✓. Route two, add the layers. Group the quadruples by their sum $m$; there are $\\binom{m+3}{3}$ with sum exactly $m$. Adding for $m = 0$ through $7$: $1 + 4 + 10 + 20 + 35 + 56 + 84 + 120 = 330$ ✓. (The choice $120 = \\binom{10}{3}$ COUNTS ONLY THE QUADRUPLES WITH SUM EXACTLY $7$ ✗; $792 = \\binom{12}{5}$ ADDS THE SLACK VARIABLE BUT THEN USES $5$ BARS FOR $5$ VARIABLES ✗; $165 = \\binom{11}{3}$ ADDS THE SLACK VARIABLE BUT KEEPS ONLY $3$ BARS, as if there were still four ✗.)',
    },
    {
      q: 'A vending machine sells $3$ kinds of snack. Ravi buys any number of each kind, possibly none of some kinds, but takes at most $9$ snacks in total. How many different selections are possible? (Selections with the same number of each kind are the same.)',
      choices: ['$220$', '$55$', '$66$', '$715$'],
      answer: 0,
      solution:
        'Route one, add a slack variable. Let $s$ be the number of snacks Ravi leaves behind out of $9$. A selection with at most $9$ snacks matches exactly one quadruple of non-negative counts summing to $9$, and back again by dropping $s$. That is $9$ stars and $3$ bars: $\\binom{12}{3} = 220$ ✓. Route two, add the layers. Selections of exactly $m$ snacks from $3$ kinds number $\\binom{m+2}{2}$. Adding for $m = 0$ through $9$: $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 + 45 + 55 = 220$ ✓. (The choice $55 = \\binom{11}{2}$ COUNTS ONLY THE SELECTIONS OF EXACTLY $9$ SNACKS ✗; $66 = \\binom{12}{2}$ ADDS THE SLACK VARIABLE BUT KEEPS ONLY $2$ BARS ✗; $715 = \\binom{13}{4}$ ADDS THE SLACK VARIABLE AND THEN USES $4$ BARS FOR $4$ VARIABLES ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $5 \\leq x + y + z \\leq 10$?',
      choices: ['$286$', '$230$', '$66$', '$251$'],
      answer: 3,
      solution:
        'Route one, add the layers. Triples with sum exactly $m$ number $\\binom{m+2}{2}$, so the answer is $\\binom{7}{2} + \\binom{8}{2} + \\binom{9}{2} + \\binom{10}{2} + \\binom{11}{2} + \\binom{12}{2} = 21 + 28 + 36 + 45 + 55 + 66 = 251$ ✓. Route two, subtract two slack counts. Triples with sum at most $10$ correspond, through a slack variable, to quadruples summing to $10$: $\\binom{13}{3} = 286$. Triples with sum at most $4$ correspond likewise to quadruples summing to $4$: $\\binom{7}{3} = 35$. The triples we want are those in the first family and not the second, so $286 - 35 = 251$ ✓. (The choice $286$ COUNTS EVERY SUM FROM $0$ TO $10$, dropping the lower bound ✗; $230$ SUBTRACTS THE $m = 5$ LAYER TOO, reading the lower bound as strict ✗; $66$ COUNTS ONLY THE TOP LAYER $m = 10$ ✗.)',
    },
  ],
  // slot 9 — parity conditions
  [
    {
      q: 'Sixteen identical marbles are placed into four boxes labeled $1$ through $4$ so that every box holds an even number of marbles. Zero counts as even. How many placements are there?',
      choices: ['$969$', '$165$', '$330$', '$84$'],
      answer: 1,
      solution:
        'Route one, halve everything. Write box $i$’s count as $2a_i$ with $a_i \\geq 0$. Then $2(a_1 + a_2 + a_3 + a_4) = 16$, so $a_1 + a_2 + a_3 + a_4 = 8$, and every such quadruple gives exactly one legal placement. That is $8$ stars and $3$ bars: $\\binom{11}{3} = 165$ ✓. Route two, split on box $1$. Box $1$ holds $2j$ marbles for $0 \\leq j \\leq 8$; the other three boxes then hold $16 - 2j$ marbles, all even. Halving those three gives a triple summing to $8 - j$, which is $\\binom{10-j}{2}$ ways. Adding: $45 + 36 + 28 + 21 + 15 + 10 + 6 + 3 + 1 = 165$ ✓. (The choice $969 = \\binom{19}{3}$ IGNORES THE PARITY CONDITION ✗; $330 = \\binom{11}{4}$ halves correctly but USES $4$ BARS FOR $4$ BOXES ✗; $84 = \\binom{9}{3}$ SOLVES THE ALL-ODD VERSION, paying each box $1$ before halving ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of positive odd integers satisfy $x + y + z = 25$?',
      choices: ['$276$', '$351$', '$91$', '$78$'],
      answer: 3,
      solution:
        'Route one, write each variable as $2a + 1$. Set $x = 2a + 1$, $y = 2b + 1$, $z = 2c + 1$ with $a, b, c \\geq 0$. Then $2(a + b + c) + 3 = 25$, so $a + b + c = 11$, and the correspondence runs both ways. That is $11$ stars and $2$ bars: $\\binom{13}{2} = 78$ ✓. Route two, count on $x$. Let $x$ be odd with $1 \\leq x \\leq 23$. Then $y + z = 25 - x$, an even number, with $y$ odd and positive and $z = 25 - x - y$ then automatically odd and positive as long as $y \\leq 25 - x - 1$. So $y$ runs over the odd numbers from $1$ to $24 - x$, giving $\\frac{25-x}{2}$ choices. For $x = 1, 3, 5, \\ldots, 23$ that is $12 + 11 + 10 + \\cdots + 1 = \\frac{12 \\cdot 13}{2} = 78$ ✓. (The choice $276$ REQUIRES ONLY THAT THE VARIABLES BE POSITIVE, dropping the parity ✗; $351 = \\binom{27}{2}$ DROPS BOTH CONDITIONS ✗; $91 = \\binom{14}{2}$ HALVES $25 - 1$ INSTEAD OF $25 - 3$, paying only one variable before halving ✗.)',
    },
    {
      q: 'Some identical marbles are placed into four labeled boxes so that every box holds an odd number of marbles, and there are exactly $220$ placements. How many marbles are there?',
      choices: ['$20$', '$13$', '$22$', '$24$'],
      answer: 2,
      solution:
        'Route one, set up the formula and solve. Write each box’s count as $2a_i + 1$. If there are $n$ marbles then $2(a_1 + a_2 + a_3 + a_4) + 4 = n$, so $n$ must be even and the $a_i$ sum to $s = \\frac{n-4}{2}$. The placement count is $\\binom{s+3}{3} = 220$, and $\\binom{12}{3} = 220$ gives $s = 9$, so $n = 4 + 18 = 22$ ✓. Route two, build the table. Count each candidate from scratch: with $18$ marbles, $s = 7$ and $\\binom{10}{3} = 120$; with $20$ marbles, $s = 8$ and $\\binom{11}{3} = 165$; with $22$ marbles, $s = 9$ and $\\binom{12}{3} = 220$. The count strictly increases with $n$, so $22$ is the only answer ✓. (The choice $20$ STOPS ONE STEP SHORT, giving $165$ placements ✗; $13$ FORGETS THE DOUBLING, adding $9$ to $4$ instead of $2 \\cdot 9$ — and four odd numbers cannot sum to an odd total ✗; $24$ OVERSHOOTS BY ONE STEP, giving $286$ ✗.)',
    },
  ],
  // slot 10 — caps on every box
  [
    {
      q: 'Fourteen identical candies are given to four children, and no child may receive more than $6$ candies. A child may receive none. How many ways are there?',
      choices: ['$206$', '$680$', '$200$', '$560$'],
      answer: 0,
      solution:
        'Route one, inclusion and exclusion. All distributions: $14$ stars and $3$ bars, $\\binom{17}{3} = 680$. One named child over the cap holds at least $7$; pay that child $7$ and split the remaining $7$ freely, $\\binom{10}{3} = 120$, and there are $4$ choices of child, so $480$. Two children can both be over, since $7 + 7 = 14$ uses every candy: each of the $\\binom{4}{2} = 6$ pairs gives exactly $1$ distribution, and those were removed twice. So $680 - 480 + 6 = 206$ ✓. Route two, flip every count. Set $y_i = 6 - x_i$, so each $y_i$ runs from $0$ to $6$ and $y_1 + y_2 + y_3 + y_4 = 24 - 14 = 10$. This is a bijection, so we may count the flipped tuples instead. All quadruples summing to $10$: $\\binom{13}{3} = 286$. A flipped count above $6$ means $y_i \\geq 7$; pay $7$ and split $3$, $\\binom{6}{3} = 20$, times $4$ children is $80$. Two of them cannot both reach $7$, since $14 > 10$, so nothing needs adding back: $286 - 80 = 206$ ✓. (The choice $680$ IGNORES THE CAP ✗; $200$ SKIPS THE ADD-BACK, subtracting the six doubly-counted distributions twice ✗; $560$ SUBTRACTS THE OVERFLOW FOR ONLY ONE CHILD instead of all four ✗.)',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 13$ with each of the four at most $5$?',
      choices: ['$560$', '$80$', '$104$', '$440$'],
      answer: 2,
      solution:
        'Route one, inclusion and exclusion. All quadruples: $\\binom{16}{3} = 560$. One named variable at $6$ or more: pay $6$ and split $7$, $\\binom{10}{3} = 120$, times $4$ variables is $480$. Two named variables both at $6$ or more: pay $12$ and split $1$, $\\binom{4}{3} = 4$, times $\\binom{4}{2} = 6$ pairs is $24$, and those were removed twice. So $560 - 480 + 24 = 104$ ✓. Route two, flip every variable. Set $y_i = 5 - x_i$, a bijection sending our quadruples to those with each $y_i$ between $0$ and $5$ and $y_1 + y_2 + y_3 + y_4 = 20 - 13 = 7$. All quadruples summing to $7$: $\\binom{10}{3} = 120$. A flipped variable over $5$ means $y_i \\geq 6$; pay $6$ and split $1$, $\\binom{4}{3} = 4$, times $4$ is $16$. Two cannot both reach $6$, since $12 > 7$, so $120 - 16 = 104$ ✓. (The choice $560$ IGNORES THE CAP ✗; $80$ SKIPS THE ADD-BACK ✗; $440$ SUBTRACTS THE OVERFLOW FOR ONLY ONE VARIABLE instead of all four ✗.)',
    },
    {
      q: 'Twelve identical candies are given to four children, a child may receive none, and at least one child receives more than $5$ candies. How many ways are there?',
      choices: ['$336$', '$330$', '$125$', '$455$'],
      answer: 1,
      solution:
        'Route one, inclusion and exclusion on the over-quota children. Let $A_i$ be the distributions in which child $i$ receives at least $6$. Then $|A_i| = \\binom{9}{3} = 84$ — pay that child $6$ and split the remaining $6$ freely — and there are $4$ children, giving $336$. Two children can both reach $6$ only by taking $6$ each, using all $12$ candies, so $|A_i \\cap A_j| = 1$ for each of the $\\binom{4}{2} = 6$ pairs, and no three can overlap. So the union is $336 - 6 = 330$ ✓. Route two, split by how many children are over quota and count each case from scratch. Exactly two over quota forces $6$ and $6$ with the others at zero: $\\binom{4}{2} = 6$ ways. Exactly one over quota: choose the child ($4$ ways) and give it $c$ candies, $6 \\leq c \\leq 12$, with the other three sharing $12 - c$ and each holding at most $5$. For $c = 6$ the other three share $6$ with none above $5$: $\\binom{8}{2} - 3 = 28 - 3 = 25$. For $c = 7$ through $12$ the leftover is at most $5$, so no cap can bite: $21, 15, 10, 6, 3, 1$. That is $25 + 21 + 15 + 10 + 6 + 3 + 1 = 81$ per child, or $324$. Total $324 + 6 = 330$ ✓. (The choice $336$ SKIPS THE OVERLAP, counting the six double-overflow distributions twice ✗; $125$ REPORTS THE COMPLEMENT, the distributions with every child at $5$ or below ✗; $455$ COUNTS EVERY DISTRIBUTION, ignoring the condition ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 13,
  sections: {
    '13.4': s134,
  },
}
