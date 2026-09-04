// Counting & Probability chapter 13 — variations for the challenge problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: identical items versus different
//    ones, labeled boxes, whether a box may be empty, every minimum and every
//    cap spelled out, and where a sum starts and stops.
//  - Every keyed answer is reached twice along routes that share no steps:
//    casework against a substitution, a direct count against a complementary
//    one, a term-by-term sum against a hockey stick, a formula against a
//    bijection.
//  - Each distractor is one named slip — a dropped condition, a lost head of a
//    stick, a missing add-back, an off-by-one — named in CAPS.

const challenge = [
  // slot 1 — parity conditions on part of a distribution
  [
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 13$ with $x + y$ even? (Zero counts as even.)',
      choices: ['$560$', '$168$', '$254$', '$280$'],
      answer: 3,
      solution:
        'Route one, casework on $s = x + y$. For a fixed $s$ there are $s + 1$ pairs $(x, y)$ and $14 - s$ pairs $(z, w)$, since $z + w = 13 - s$. Running $s$ over the even values $0, 2, 4, 6, 8, 10, 12$ gives $1 \\cdot 14 + 3 \\cdot 12 + 5 \\cdot 10 + 7 \\cdot 8 + 9 \\cdot 6 + 11 \\cdot 4 + 13 \\cdot 2 = 14 + 36 + 50 + 56 + 54 + 44 + 26 = 280$ ✓. Route two, a pairing argument. The total $13$ is odd, so $x + y$ and $z + w$ always have opposite parity; swapping the two halves, $(x, y, z, w) \\mapsto (z, w, x, y)$, therefore matches each solution with $x + y$ even to exactly one solution with $x + y$ odd. The two classes are the same size, so each is half of all $\\binom{16}{3} = 560$ solutions, namely $280$ ✓. (The choice $560$ IGNORES THE PARITY CONDITION and counts every solution ✗; $168$ READS “$x + y$ EVEN” AS “$x$ AND $y$ BOTH EVEN”, a strictly smaller set with $168$ members ✗; $254$ STOPS THE CASEWORK AT $s = 10$, dropping the $13 \\cdot 2 = 26$ solutions with $s = 12$ ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d = 12$ with $a + b$ odd?',
      choices: ['$455$', '$224$', '$231$', '$91$'],
      answer: 1,
      solution:
        'Route one, casework on $s = a + b$. For a fixed $s$ there are $s + 1$ pairs $(a, b)$ and $13 - s$ pairs $(c, d)$. Running $s$ over the odd values $1, 3, 5, 7, 9, 11$ gives $2 \\cdot 12 + 4 \\cdot 10 + 6 \\cdot 8 + 8 \\cdot 6 + 10 \\cdot 4 + 12 \\cdot 2 = 24 + 40 + 48 + 48 + 40 + 24 = 224$ ✓. Route two, track which variables are odd. The total $12$ is even, so an even number of the four variables are odd. If $a + b$ is odd then exactly one of $a, b$ is odd, and to keep the count even exactly one of $c, d$ is odd as well: $2 \\cdot 2 = 4$ choices of which. Say $a$ and $c$ are the odd ones, so $a = 2p + 1$, $b = 2q$, $c = 2r + 1$, $d = 2s$ for non-negative $p, q, r, s$; then $p + q + r + s = 5$, which has $\\binom{8}{3} = 56$ solutions. Total $4 \\cdot 56 = 224$ ✓. (The choice $455 = \\binom{15}{3}$ IGNORES THE PARITY CONDITION ✗; $231$ COUNTS $a + b$ EVEN INSTEAD, the other half of the $455$ ✗; $91$ READS “$a + b$ ODD” AS “$a$ AND $b$ BOTH ODD”, which holds for only $91$ solutions ✗.)',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 11$ with both $x$ and $y$ even? (Zero counts as even.)',
      choices: ['$112$', '$364$', '$182$', '$100$'],
      answer: 0,
      solution:
        'Route one, casework on how much the even pair uses. Write $x = 2p$ and $y = 2q$ and let $t = p + q$, so $x + y = 2t$ and $t$ runs from $0$ to $5$. There are $t + 1$ pairs $(p, q)$ and $12 - 2t$ pairs $(z, w)$, since $z + w = 11 - 2t$. The cases give $1 \\cdot 12 + 2 \\cdot 10 + 3 \\cdot 8 + 4 \\cdot 6 + 5 \\cdot 4 + 6 \\cdot 2 = 12 + 20 + 24 + 24 + 20 + 12 = 112$ ✓. Route two, track which variables are odd. With $x$ and $y$ even and the total $11$ odd, exactly one of $z, w$ is odd. If $z$ is the odd one, put $x = 2p$, $y = 2q$, $z = 2c + 1$, $w = 2d$; then $p + q + c + d = 5$, giving $\\binom{8}{3} = 56$ solutions, and the case where $w$ is odd gives another $56$. Total $112$ ✓. (The choice $364 = \\binom{14}{3}$ IGNORES THE PARITY CONDITION ✗; $182$ ASKS ONLY THAT $x + y$ BE EVEN, which allows $x$ and $y$ to be both odd ✗; $100$ STOPS THE CASEWORK AT $t = 4$, dropping the $6 \\cdot 2 = 12$ solutions with $x + y = 10$ ✗.)',
    },
  ],
  // slot 2 — a distribution with two boxes tied to each other
  [
    {
      q: 'Twelve identical medals are placed in four display cases labeled $1$ through $4$. Every case must hold at least one medal, and cases $1$ and $2$ must hold the same number. How many placements are there?',
      choices: ['$165$', '$25$', '$36$', '$24$'],
      answer: 1,
      solution:
        'Route one, casework on the tied cases. Let cases $1$ and $2$ each hold $j \\geq 1$ medals. Cases $3$ and $4$ then split the remaining $12 - 2j$ medals with each getting at least one, which can be done in $11 - 2j$ ways, and this needs $12 - 2j \\geq 2$, so $j \\leq 5$. The cases $j = 1, 2, 3, 4, 5$ give $9 + 7 + 5 + 3 + 1 = 25$ ✓. Route two, count a lattice region the other way. Pay every case one medal up front and write $j = j\' + 1$, $c = c\' + 1$, $d = d\' + 1$ for the extras; the equation $2j + c + d = 12$ becomes $2j\' + c\' + d\' = 8$. Since $d\'$ is forced once $j\'$ and $c\'$ are chosen, count the pairs $(j\', c\')$ with $2j\' + c\' \\leq 8$ by columns, fixing $c\'$ first: $c\' = 0$ allows $j\' \\leq 4$, and as $c\'$ runs $0, 1, \\ldots, 8$ the counts are $5, 4, 4, 3, 3, 2, 2, 1, 1$, totaling $25$ ✓. (The choice $165 = \\binom{11}{3}$ DROPS THE EQUAL-CASES CONDITION and just makes every case non-empty ✗; $36$ LETS CASES $3$ AND $4$ BE EMPTY, adding the eleven placements with $j = 6$ and the extra empty splits ✗; $24$ FORGETS THE CASE $j = 5$, where cases $3$ and $4$ take one medal each ✗.)',
    },
    {
      q: 'Among the ordered quadruples $(a, b, c, d)$ of positive integers with $a + b + c + d = 15$, how many have $c = d$?',
      choices: ['$364$', '$56$', '$30$', '$42$'],
      answer: 3,
      solution:
        'Route one, casework on the tied pair. Let $c = d = j \\geq 1$. Then $a + b = 15 - 2j$ with $a, b \\geq 1$, which has $14 - 2j$ solutions, and this is positive only for $j \\leq 6$. The cases $j = 1$ through $6$ give $12 + 10 + 8 + 6 + 4 + 2 = 42$ ✓. Route two, substitute and count by columns. Put $a = a\' + 1$, $b = b\' + 1$, $j = j\' + 1$ for the extras above the minimum of $1$; then $a\' + b\' + 2j\' = 15 - 4 = 11$. Since $b\'$ is determined by $a\'$ and $j\'$, count the pairs $(j\', a\')$ with $2j\' + a\' \\leq 11$: for $j\' = 0, 1, 2, 3, 4, 5$ the value $a\'$ has $12, 10, 8, 6, 4, 2$ choices, and $j\' \\geq 6$ would need $12 > 11$. The total is $42$ ✓. (The choice $364 = \\binom{14}{3}$ DROPS THE CONDITION $c = d$ ✗; $56$ LETS $a$ AND $b$ BE ZERO, which the word “positive” forbids ✗; $30$ FORGETS THE CASE $j = 1$, the largest single case at $12$ solutions ✗.)',
    },
    {
      q: 'Some identical medals are placed in four display cases labeled $1$ through $4$. Every case holds at least one medal, and cases $1$ and $2$ hold the same number. There are exactly $121$ placements. How many medals are there?',
      choices: ['$12$', '$22$', '$24$', '$26$'],
      answer: 2,
      solution:
        'Route one, build the count for an even total and solve. With $n = 2m$ medals and cases $1$ and $2$ each holding $j \\geq 1$, cases $3$ and $4$ split $n - 2j$ medals with each getting at least one, in $n - 2j - 1$ ways; as $j$ runs from $1$ up to $m - 1$ these counts are the odd numbers $2m - 3, 2m - 5, \\ldots, 3, 1$. The sum of the first $m - 1$ odd numbers is $(m - 1)^2$, so $(m - 1)^2 = 121$ gives $m - 1 = 11$, $m = 12$, and $n = 24$ ✓. Route two, test candidates directly. For $n = 22$ the case counts are $19 + 17 + \\cdots + 1 = 100$; for $n = 24$ they are $21 + 19 + 17 + 15 + 13 + 11 + 9 + 7 + 5 + 3 + 1 = 121$, which matches; for $n = 26$ they are $23 + 21 + \\cdots + 1 = 144$. The count strictly increases with $n$, so $n = 24$ is the only answer ✓. (The choice $12$ REPORTS $m$ ITSELF rather than the $2m$ medals — with $12$ medals there are only $25$ placements ✗; $22$ SOLVES $m^2 = 121$, forgetting that $j = m$ would leave cases $3$ and $4$ empty, and gives only $100$ placements ✗; $26$ READS $m - 1 = 12$ INSTEAD OF $m - 1 = 11$ and gives $144$ placements ✗.)',
    },
  ],
  // slot 3 — hockey sticks with the head removed
  [
    {
      q: 'Compute $\\binom{7}{4} + \\binom{8}{4} + \\binom{9}{4} + \\cdots + \\binom{14}{4}$. Note that the sum starts at $\\binom{7}{4}$.',
      choices: ['$3003$', '$2968$', '$2982$', '$2947$'],
      answer: 2,
      solution:
        'Route one, complete the stick and remove its head. The full stick with $r = 4$ running up to $n = 14$ is $\\binom{4}{4} + \\binom{5}{4} + \\cdots + \\binom{14}{4} = \\binom{15}{5} = 3003$. The missing head $\\binom{4}{4} + \\binom{5}{4} + \\binom{6}{4}$ is itself a stick, equal to $\\binom{7}{5} = 21$. The answer is $3003 - 21 = 2982$ ✓. Route two, add the eight terms. They are $\\binom{7}{4} = 35$, $70$, $126$, $210$, $330$, $495$, $715$, $1001$, and $35 + 70 = 105$, $+126 = 231$, $+210 = 441$, $+330 = 771$, $+495 = 1266$, $+715 = 1981$, $+1001 = 2982$ ✓. (The choice $3003$ FORGETS TO REMOVE THE HEAD ✗; $2968$ REMOVES $\\binom{7}{4} = 35$, the first term that belongs to the sum, instead of the head that does not ✗; $2947$ REMOVES $\\binom{8}{5} = 56$, cutting the head one term too deep ✗.)',
    },
    {
      q: 'Compute $\\binom{8}{2} + \\binom{9}{2} + \\binom{10}{2} + \\cdots + \\binom{20}{2}$. Note that the sum starts at $\\binom{8}{2}$.',
      choices: ['$1274$', '$1330$', '$1302$', '$1246$'],
      answer: 0,
      solution:
        'Route one, complete the stick and remove its head. The full stick $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{20}{2}$ equals $\\binom{21}{3} = 1330$, and the head $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{7}{2}$ is the shorter stick $\\binom{8}{3} = 56$. The answer is $1330 - 56 = 1274$ ✓. Route two, add the thirteen terms. They are $28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190$; running totals give $64, 109, 164, 230, 308, 399, 504, 624, 760, 913, 1084, 1274$ ✓. (The choice $1330$ FORGETS TO REMOVE THE HEAD ✗; $1302$ REMOVES $\\binom{8}{2} = 28$, the first term that belongs, instead of the head ✗; $1246$ REMOVES $\\binom{9}{3} = 84$, cutting the head one term too deep ✗.)',
    },
    {
      q: 'Compute $\\binom{6}{3} + \\binom{7}{3} + \\binom{8}{3} + \\cdots + \\binom{20}{3}$. Note that the sum starts at $\\binom{6}{3}$.',
      choices: ['$5985$', '$5965$', '$5950$', '$5970$'],
      answer: 3,
      solution:
        'Route one, complete the stick and remove its head. The full stick $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{20}{3}$ equals $\\binom{21}{4} = 5985$, and the head $\\binom{3}{3} + \\binom{4}{3} + \\binom{5}{3} = 1 + 4 + 10$ is the stick $\\binom{6}{4} = 15$. The answer is $5985 - 15 = 5970$ ✓. Route two, add the fifteen terms. They are $20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816, 969, 1140$; running totals give $55, 111, 195, 315, 480, 700, 986, 1350, 1805, 2365, 3045, 3861, 4830, 5970$ ✓. (The choice $5985$ FORGETS TO REMOVE THE HEAD ✗; $5965$ REMOVES $\\binom{6}{3} = 20$, the first term that belongs, instead of the head ✗; $5950$ REMOVES $\\binom{7}{4} = 35$, cutting the head one term too deep ✗.)',
    },
  ],
  // slot 4 — monotone strings and multisets
  [
    {
      q: 'How many $5$-letter strings using the letters $A, B, C, D, E, F$ are in alphabetical order, meaning each letter is the same as or later in the alphabet than the letter before it? Repeats are allowed.',
      choices: ['$252$', '$7776$', '$6$', '$462$'],
      answer: 0,
      solution:
        'Route one, stars and bars. Such a string is completely determined by how many times each of the $6$ letters appears, with the counts adding to $5$. That is $5$ stars and $5$ bars, so $\\binom{10}{5} = 252$ ✓. Route two, casework on the first letter. If the string starts with the $j$th letter, the remaining $4$ letters form an alphabetical string over the $7 - j$ letters from the $j$th onward, and there are $\\binom{(7 - j) + 3}{4} = \\binom{10 - j}{4}$ of those. Summing over $j = 1$ through $6$ gives $126 + 70 + 35 + 15 + 5 + 1 = 252$ ✓. (The choice $7776 = 6^5$ IGNORES THE ORDERING CONDITION and counts every string ✗; $6 = \\binom{6}{5}$ FORBIDS REPEATS, counting only the strings with five different letters ✗; $462 = \\binom{11}{5}$ USES SIX BARS for six letters instead of five ✗.)',
    },
    {
      q: 'A bakery sells $7$ kinds of cookie. How many different boxes of $5$ cookies are possible, using any number of each kind (a kind may be skipped)? Boxes with the same counts of each kind are the same box.',
      choices: ['$16807$', '$21$', '$462$', '$792$'],
      answer: 2,
      solution:
        'Route one, stars and bars. A box is determined by the seven counts, one per kind, adding to $5$: that is $5$ stars and $6$ bars, so $\\binom{11}{5} = 462$ ✓. Route two, casework on the first kind. If the box holds $j$ cookies of kind $1$, the other $5 - j$ cookies come from the remaining $6$ kinds in $\\binom{(5 - j) + 5}{5} = \\binom{10 - j}{5}$ ways. Summing over $j = 0$ through $5$ gives $252 + 126 + 56 + 21 + 6 + 1 = 462$ ✓. (The choice $16807 = 7^5$ TREATS THE FIVE COOKIES AS DISTINGUISHABLE, counting the order they are packed in ✗; $21 = \\binom{7}{5}$ FORBIDS REPEATS, allowing only boxes with five different kinds ✗; $792 = \\binom{12}{5}$ USES SEVEN BARS for seven kinds instead of six ✗.)',
    },
    {
      q: 'How many $4$-letter strings using the letters $A, B, C, D, E, F$ are in alphabetical order (each letter the same as or later in the alphabet than the one before it, repeats allowed) and use at least two different letters?',
      choices: ['$126$', '$120$', '$1290$', '$15$'],
      answer: 1,
      solution:
        'Route one, count all and remove the constants. Alphabetical $4$-letter strings over $6$ letters are the multisets of size $4$, namely $\\binom{9}{4} = 126$. Exactly $6$ of them use a single letter — $AAAA$ through $FFFF$ — so the answer is $126 - 6 = 120$ ✓. Route two, casework on how many different letters appear. With exactly two letters: choose them in $\\binom{6}{2} = 15$ ways and split the four slots as $1+3$, $2+2$, or $3+1$, giving $15 \\cdot 3 = 45$. With exactly three: $\\binom{6}{3} = 20$ choices and $\\binom{3}{2} = 3$ ways to write $4$ as three positive counts, giving $60$. With exactly four: $\\binom{6}{4} = 15$, one arrangement each. The total is $45 + 60 + 15 = 120$ ✓. (The choice $126$ KEEPS THE SIX ONE-LETTER STRINGS ✗; $1290 = 6^4 - 6$ IGNORES THE ALPHABETICAL CONDITION while still removing the constants ✗; $15 = \\binom{6}{4}$ FORBIDS REPEATS ENTIRELY, counting only the strings with four different letters ✗.)',
    },
  ],
  // slot 5 — two minimums paid up front
  [
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 17$ with $x \\geq 4$ and $y \\geq 5$?',
      choices: ['$171$', '$105$', '$36$', '$45$'],
      answer: 3,
      solution:
        'Route one, pay the minimums first. Set $x = 4 + x\'$ and $y = 5 + y\'$ with $x\', y\' \\geq 0$; the equation becomes $x\' + y\' + z = 8$ with no restrictions left, and $8$ stars with $2$ bars give $\\binom{10}{2} = 45$ ✓. Route two, casework on $z$. For a fixed $z$ the pair must satisfy $x + y = 17 - z$ with $x \\geq 4$ and $y \\geq 5$, so $x$ runs from $4$ up to $12 - z$, which is $9 - z$ values, and $z$ can be $0$ through $8$. The counts $9, 8, 7, 6, 5, 4, 3, 2, 1$ add to $45$ ✓. (The choice $171 = \\binom{19}{2}$ IGNORES BOTH MINIMUMS ✗; $105 = \\binom{15}{2}$ PAYS ONLY $x$ ITS FOUR and leaves $y$ free ✗; $36 = \\binom{9}{2}$ ALSO FORCES $z \\geq 1$, a minimum $z$ does not have ✗.)',
    },
    {
      q: 'Twenty identical bricks are placed into three bins labeled $A$, $B$, $C$. Bin $A$ must hold at least $6$ bricks and bin $B$ at least $4$; bin $C$ may hold any number, including none. How many placements are there?',
      choices: ['$231$', '$66$', '$120$', '$220$'],
      answer: 1,
      solution:
        'Route one, pay the minimums first. Put $6$ bricks in $A$ and $4$ in $B$, using $10$; the remaining $10$ bricks go into the three bins with no restriction, which is $10$ stars and $2$ bars, $\\binom{12}{2} = 66$ ✓. Route two, casework on bin $C$. If $C$ holds $c$ bricks then $A + B = 20 - c$ with $A \\geq 6$ and $B \\geq 4$, so $A$ runs from $6$ to $16 - c$, which is $11 - c$ values, and $c$ can be $0$ through $10$. The counts $11, 10, 9, \\ldots, 1$ add to $66$ ✓. (The choice $231 = \\binom{22}{2}$ IGNORES BOTH MINIMUMS ✗; $120 = \\binom{16}{2}$ PAYS ONLY BIN $A$ its six ✗; $220 = \\binom{12}{3}$ USES THREE BARS FOR THREE BINS instead of two ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z = 14$ with $x \\geq 2$ and $y \\geq 3$?',
      choices: ['$55$', '$120$', '$91$', '$165$'],
      answer: 0,
      solution:
        'Route one, pay the minimums first. Set $x = 2 + x\'$ and $y = 3 + y\'$; then $x\' + y\' + z = 9$ with everything free, giving $\\binom{11}{2} = 55$ ✓. Route two, casework on $z$. For a fixed $z$ we need $x + y = 14 - z$ with $x \\geq 2$ and $y \\geq 3$, so $x$ runs from $2$ to $11 - z$, which is $10 - z$ values, and $z$ can be $0$ through $9$. The counts $10, 9, 8, \\ldots, 1$ add to $55$ ✓. (The choice $120 = \\binom{16}{2}$ IGNORES BOTH MINIMUMS ✗; $91 = \\binom{14}{2}$ PAYS ONLY $x$ ITS TWO ✗; $165 = \\binom{11}{3}$ USES THREE BARS FOR THREE VARIABLES instead of two ✗.)',
    },
  ],
  // slot 6 — a condition on the total held by two of the recipients
  [
    {
      q: 'Eleven identical badges are given to four scouts — Ana, Ben, Cal, Dee. Ana and Ben together must receive exactly $6$ badges; any scout may receive none. How many ways are there?',
      choices: ['$364$', '$13$', '$42$', '$56$'],
      answer: 2,
      solution:
        'Route one, split the problem in two. Ana and Ben share their $6$ badges in $7$ ways, since Ana may take $0$ through $6$, and Cal and Dee share the remaining $5$ badges in $6$ ways. The two halves are independent, so multiply: $7 \\cdot 6 = 42$ ✓. Route two, subtract two tail counts. Let $s$ be Ana and Ben\'s total; the number of placements with a given $s$ is $(s + 1)(12 - s)$. Summing from $s = 6$ upward gives $42 + 40 + 36 + 30 + 22 + 12 = 182$ placements with $s \\geq 6$, and summing from $s = 7$ upward gives $40 + 36 + 30 + 22 + 12 = 140$ with $s \\geq 7$. The difference $182 - 140 = 42$ is the count with $s$ exactly $6$ ✓. (The choice $364 = \\binom{14}{3}$ IGNORES THE CONDITION ✗; $13$ ADDS $7$ AND $6$ INSTEAD OF MULTIPLYING them ✗; $56 = 8 \\cdot 7$ MISCOUNTS BOTH SPLITS, giving each half one phantom extra way ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $a + b + c + d = 9$ with $a + b = 5$?',
      choices: ['$30$', '$220$', '$11$', '$20$'],
      answer: 0,
      solution:
        'Route one, split the problem in two. The pair $(a, b)$ with $a + b = 5$ can be chosen in $6$ ways, and then $c + d = 4$ can be chosen in $5$ ways. Multiplying, $6 \\cdot 5 = 30$ ✓. Route two, subtract two tail counts. With $s = a + b$, the number of quadruples with that value of $s$ is $(s + 1)(10 - s)$. Summing from $s = 5$ up gives $30 + 28 + 24 + 18 + 10 = 110$, and from $s = 6$ up gives $28 + 24 + 18 + 10 = 80$. The difference $110 - 80 = 30$ counts exactly $s = 5$ ✓. (The choice $220 = \\binom{12}{3}$ IGNORES THE CONDITION ✗; $11$ ADDS $6$ AND $5$ INSTEAD OF MULTIPLYING ✗; $20 = 5 \\cdot 4$ COUNTS ONLY THE SPLITS WITH EVERY VARIABLE POSITIVE, though zeros are allowed ✗.)',
    },
    {
      q: 'Seven identical prizes are given to four children — Ana, Ben, Cal, Dee. Ana and Ben together must receive at least $5$ prizes; any child may receive none. How many ways are there?',
      choices: ['$120$', '$18$', '$60$', '$40$'],
      answer: 3,
      solution:
        'Route one, casework on Ana and Ben\'s total $s$. For a given $s$ there are $s + 1$ ways to split it between Ana and Ben and $8 - s$ ways to split the remaining $7 - s$ prizes between Cal and Dee. The allowed values $s = 5, 6, 7$ give $6 \\cdot 3 + 7 \\cdot 2 + 8 \\cdot 1 = 18 + 14 + 8 = 40$ ✓. Route two, count the complement. All placements number $\\binom{10}{3} = 120$. Those with $s \\leq 4$ are $1 \\cdot 8 + 2 \\cdot 7 + 3 \\cdot 6 + 4 \\cdot 5 + 5 \\cdot 4 = 8 + 14 + 18 + 20 + 20 = 80$. The answer is $120 - 80 = 40$ ✓. (The choice $120$ IGNORES THE CONDITION ✗; $18$ COUNTS ONLY $s = 5$, reading “at least $5$” as “exactly $5$” ✗; $60$ HALVES THE $120$ as though “at least $5$” and “at most $4$” were equally likely, which they are not ✗.)',
    },
  ],
  // slot 7 — inequalities on a whole sum
  [
    {
      q: 'How many ordered quintuples $(a, b, c, d, e)$ of non-negative integers satisfy $a + b + c + d + e \\leq 7$?',
      choices: ['$330$', '$792$', '$924$', '$462$'],
      answer: 1,
      solution:
        'Route one, add a slack variable. Let $f \\geq 0$ be the amount by which the sum falls short, so $a + b + c + d + e + f = 7$ exactly. That is $7$ stars and $5$ bars, $\\binom{12}{5} = 792$ ✓. Route two, add the layers. Solutions with sum exactly $n$ number $\\binom{n + 4}{4}$, so the answer is $1 + 5 + 15 + 35 + 70 + 126 + 210 + 330$ for $n = 0$ through $7$; the running totals are $6, 21, 56, 126, 252, 462, 792$ ✓. (The choice $330 = \\binom{11}{4}$ COUNTS ONLY THE TOP LAYER, sum exactly $7$ ✗; $924 = \\binom{12}{6}$ PICKS THE WRONG BOTTOM NUMBER, using six bars for six variables ✗; $462 = \\binom{11}{5}$ FORGETS ONE STAR, counting sum at most $6$ ✗.)',
    },
    {
      q: 'How many ordered triples $(x, y, z)$ of non-negative integers satisfy $x + y + z \\leq 12$?',
      choices: ['$91$', '$1365$', '$364$', '$455$'],
      answer: 3,
      solution:
        'Route one, add a slack variable. With $w \\geq 0$ absorbing the shortfall, $x + y + z + w = 12$, which is $12$ stars and $3$ bars: $\\binom{15}{3} = 455$ ✓. Route two, add the layers. Solutions with sum exactly $n$ number $\\binom{n + 2}{2}$, the triangular numbers, so the answer is $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 + 45 + 55 + 66 + 78 + 91$; the running totals are $4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455$ ✓. (The choice $91 = \\binom{14}{2}$ COUNTS ONLY THE TOP LAYER, sum exactly $12$ ✗; $1365 = \\binom{15}{4}$ PICKS THE WRONG BOTTOM NUMBER ✗; $364 = \\binom{14}{3}$ FORGETS ONE STAR, counting sum at most $11$ ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of non-negative integers satisfy $3 \\leq a + b + c + d \\leq 6$?',
      choices: ['$210$', '$84$', '$195$', '$190$'],
      answer: 2,
      solution:
        'Route one, subtract two slack counts. Quadruples with sum at most $6$ number $\\binom{10}{4} = 210$, using a fifth slack variable, and those with sum at most $2$ number $\\binom{6}{4} = 15$ the same way. Everything in the first count that is not in the second has sum between $3$ and $6$, so the answer is $210 - 15 = 195$ ✓. Route two, add the four layers. Solutions with sum exactly $n$ number $\\binom{n + 3}{3}$, so for $n = 3, 4, 5, 6$ we get $20 + 35 + 56 + 84 = 195$ ✓. (The choice $210$ IGNORES THE LOWER BOUND, counting every sum from $0$ to $6$ ✗; $84 = \\binom{9}{3}$ COUNTS ONLY SUM EXACTLY $6$ ✗; $190$ SUBTRACTS THE $n = 3$ LAYER, the first one that belongs, instead of the layers below it ✗.)',
    },
  ],
  // slot 8 — one box outweighing the rest
  [
    {
      q: 'Twelve identical coins are placed into four jars labeled $A$, $B$, $C$, $D$; a jar may be empty. In how many placements does jar $A$ hold more coins than jars $B$, $C$, and $D$ combined?',
      choices: ['$56$', '$455$', '$84$', '$35$'],
      answer: 0,
      solution:
        'Route one, substitute. If $A$ holds $a$ coins the other three hold $12 - a$, and $a > 12 - a$ forces $a \\geq 7$. Write $a = 7 + a\'$; then $a\' + B + C + D = 5$ with all four free, giving $\\binom{8}{3} = 56$ ✓. Route two, casework on $a$. For $a = 7, 8, 9, 10, 11, 12$ the other three jars share $5, 4, 3, 2, 1, 0$ coins in $\\binom{7}{2}, \\binom{6}{2}, \\binom{5}{2}, \\binom{4}{2}, \\binom{3}{2}, \\binom{2}{2}$ ways, that is $21 + 15 + 10 + 6 + 3 + 1 = 56$ ✓. (The choice $455 = \\binom{15}{3}$ IGNORES THE CONDITION ✗; $84$ ALLOWS THE TIE $a = 6$, where jar $A$ merely matches the other three ✗; $35 = \\binom{7}{3}$ STARTS THE SUBSTITUTION AT $a = 8$, one step too high ✗.)',
    },
    {
      q: 'How many ordered quadruples $(w, x, y, z)$ of non-negative integers satisfy $w + x + y + z = 9$ with $w \\geq x + y + z$?',
      choices: ['$220$', '$20$', '$35$', '$56$'],
      answer: 2,
      solution:
        'Route one, substitute. The condition says $w \\geq 9 - w$, so $2w \\geq 9$ and $w \\geq 5$; note that because $9$ is odd there is no tie to worry about. Writing $w = 5 + w\'$ gives $w\' + x + y + z = 4$ with everything free, so $\\binom{7}{3} = 35$ ✓. Route two, casework on $w$. For $w = 5, 6, 7, 8, 9$ the other three variables sum to $4, 3, 2, 1, 0$, giving $\\binom{6}{2} + \\binom{5}{2} + \\binom{4}{2} + \\binom{3}{2} + \\binom{2}{2} = 15 + 10 + 6 + 3 + 1 = 35$ ✓. (The choice $220 = \\binom{12}{3}$ IGNORES THE CONDITION ✗; $20 = \\binom{6}{3}$ STARTS AT $w = 6$, one step too high ✗; $56$ SOLVES $w \\geq 9 - w$ AS $w \\geq 4$, keeping the $21$ placements where the other three outweigh $w$ ✗.)',
    },
    {
      q: 'Ten identical coins are placed into three jars labeled $A$, $B$, $C$; a jar may be empty. In how many placements does jar $A$ hold fewer coins than jars $B$ and $C$ combined?',
      choices: ['$66$', '$45$', '$21$', '$51$'],
      answer: 1,
      solution:
        'Route one, casework on $a$. Jar $A$ holding $a$ coins leaves $10 - a$ for the other two, and $a < 10 - a$ forces $a \\leq 4$. For $a = 0, 1, 2, 3, 4$ the pair $(B, C)$ splits $10, 9, 8, 7, 6$ coins in $11, 10, 9, 8, 7$ ways, totaling $45$ ✓. Route two, count the complement. All placements number $\\binom{12}{2} = 66$. The complement is $a \\geq 10 - a$, that is $a \\geq 5$, and for $a = 5$ through $10$ the pair $(B, C)$ splits $5, 4, 3, 2, 1, 0$ coins in $6 + 5 + 4 + 3 + 2 + 1 = 21$ ways. The answer is $66 - 21 = 45$ ✓. (The choice $66$ IGNORES THE CONDITION ✗; $21$ REPORTS THE COMPLEMENT instead of the count asked for ✗; $51$ INCLUDES THE TIE $a = 5$, reading “fewer than” as “at most” ✗.)',
    },
  ],
  // slot 9 — a floor and a ceiling on every box
  [
    {
      q: 'Sixteen identical marbles are placed into three cups labeled $A$, $B$, $C$, and every cup must hold at least $3$ and at most $8$ marbles. How many placements are there?',
      choices: ['$36$', '$9$', '$27$', '$33$'],
      answer: 2,
      solution:
        'Route one, pay the floors and then remove the overflows. Give each cup $3$ marbles, using $9$; the remaining $7$ are free except that no cup may take more than $5$ extra. Without that cap there are $\\binom{9}{2} = 36$ placements. A cup taking at least $6$ extra uses $6$ of the $7$, leaving $1$ marble to place in $3$ ways, so each of the $3$ cups gives $3$ bad placements, $9$ in all, and two cups cannot both overflow since $12 > 7$. The answer is $36 - 9 = 27$ ✓. Route two, casework on cup $A$. With $A$ holding $a$ marbles, cups $B$ and $C$ share $16 - a$, each between $3$ and $8$, so $B$ runs from $\\max(3, 8 - a)$ to $\\min(8, 13 - a)$. For $a = 3, 4, 5, 6, 7, 8$ that is $4, 5, 6, 5, 4, 3$ choices, and $4 + 5 + 6 + 5 + 4 + 3 = 27$ ✓. (The choice $36$ IGNORES THE MAXIMUM OF $8$ ✗; $9$ REPORTS THE OVERFLOW COUNT instead of subtracting it ✗; $33$ COUNTS ONLY ONE BAD PLACEMENT PER CUP, forgetting that the leftover marble has $3$ homes ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of integers satisfy $a + b + c + d = 11$ with each of the four at least $1$ and at most $4$?',
      choices: ['$40$', '$120$', '$80$', '$60$'],
      answer: 0,
      solution:
        'Route one, pay the floors and then remove the overflows. Subtract $1$ from each variable, leaving $a\' + b\' + c\' + d\' = 7$ with each at most $3$. Without the cap that is $\\binom{10}{3} = 120$. A chosen variable at least $4$: pay it $4$, spread the remaining $3$ freely, $\\binom{6}{3} = 20$, times $4$ variables is $80$; two variables would need $8 > 7$, so nothing is double-counted. The answer is $120 - 80 = 40$ ✓. Route two, casework on $a$ with the triples listed. If $a = 1$ then $b + c + d = 10$ with each in $\\{1, 2, 3, 4\\}$: the patterns are $4{,}4{,}2$ and $4{,}3{,}3$, giving $3 + 3 = 6$ triples. If $a = 2$, sum $9$: $4{,}4{,}1$, $4{,}3{,}2$, $3{,}3{,}3$ give $3 + 6 + 1 = 10$. If $a = 3$, sum $8$: $4{,}3{,}1$, $4{,}2{,}2$, $3{,}3{,}2$ give $6 + 3 + 3 = 12$. If $a = 4$, sum $7$: $4{,}2{,}1$, $3{,}3{,}1$, $3{,}2{,}2$ give $6 + 3 + 3 = 12$. Total $6 + 10 + 12 + 12 = 40$ ✓. (The choice $120$ IGNORES THE MAXIMUM OF $4$ ✗; $80$ REPORTS THE SUBTRACTED OVERFLOW PIECE alone ✗; $60$ REMOVES THE OVERFLOW FOR ONLY THREE OF THE FOUR VARIABLES ✗.)',
    },
    {
      q: 'Twelve identical marbles are placed into four cups labeled $A$, $B$, $C$, $D$, and every cup must hold at least $1$ and at most $5$ marbles. How many placements are there?',
      choices: ['$165$', '$80$', '$105$', '$85$'],
      answer: 3,
      solution:
        'Route one, pay the floors and then remove the overflows. Give each cup one marble, leaving $8$ to spread with no cup taking more than $4$ extra. Without the cap there are $\\binom{11}{3} = 165$ placements. A chosen cup taking at least $5$ extra uses $5$ of the $8$, leaving $3$ to spread in $\\binom{6}{3} = 20$ ways, and $4$ cups give $80$; two cups would need $10 > 8$. The answer is $165 - 80 = 85$ ✓. Route two, casework on cup $A$. With $A$ holding $a$ marbles, cups $B$, $C$, $D$ share $12 - a$, each between $1$ and $5$. Counting those triples for $a = 1, 2, 3, 4, 5$ — sums $11, 10, 9, 8, 7$ — gives $15, 18, 19, 18, 15$, and $15 + 18 + 19 + 18 + 15 = 85$ ✓. (The choice $165$ IGNORES THE MAXIMUM OF $5$ ✗; $80$ REPORTS THE SUBTRACTED OVERFLOW PIECE alone ✗; $105$ REMOVES THE OVERFLOW FOR ONLY THREE OF THE FOUR CUPS ✗.)',
    },
  ],
  // slot 10 — monotone digit strings that must be genuine integers
  [
    {
      q: 'How many five-digit positive integers have non-increasing digits, meaning each digit is at most the digit to its left? (For example, $97310$ and $55200$ qualify.)',
      choices: ['$2002$', '$2001$', '$3003$', '$252$'],
      answer: 1,
      solution:
        'Route one, count strings and drop the one that is not an integer. A non-increasing five-digit string is fixed by how many of each digit $0$ through $9$ it uses, with the counts adding to $5$: that is $5$ stars and $9$ bars, $\\binom{14}{5} = 2002$. Every such string leads with its largest digit, so the only one beginning with $0$ is $00000$. The answer is $2002 - 1 = 2001$ ✓. Route two, casework on the leading digit. If the number starts with $d$, the other four digits are non-increasing and at most $d$, so they form a multiset of size $4$ from the $d + 1$ digits $0$ through $d$: $\\binom{d + 4}{4}$ of them. Summing over $d = 1$ through $9$ gives $5 + 15 + 35 + 70 + 126 + 210 + 330 + 495 + 715 = 2001$ ✓. (The choice $2002$ KEEPS THE STRING $00000$, which is not a five-digit integer ✗; $3003 = \\binom{15}{5}$ USES TEN BARS for ten digits instead of nine ✗; $252 = \\binom{10}{5}$ FORBIDS REPEATED DIGITS ✗.)',
    },
    {
      q: 'How many three-digit positive integers have non-decreasing digits, meaning each digit is at least the digit to its left? (For example, $138$ and $477$ qualify.)',
      choices: ['$220$', '$219$', '$84$', '$165$'],
      answer: 3,
      solution:
        'Route one, notice which digits can appear. The leading digit of a three-digit integer is at least $1$, and the digits never decrease, so all three digits lie in $\\{1, 2, \\ldots, 9\\}$. Such a number is fixed by how many of each of those $9$ digits it uses, with the counts adding to $3$: $\\binom{11}{3} = 165$ ✓. Route two, count all strings and remove the ones leading with $0$. Non-decreasing three-digit strings over $0$ through $9$ number $\\binom{12}{3} = 220$. Those beginning with $0$ have their last two digits non-decreasing over all ten digits, $\\binom{11}{2} = 55$ of them. The answer is $220 - 55 = 165$ ✓. (The choice $220$ ALLOWS A LEADING $0$, counting strings rather than integers ✗; $219$ REMOVES ONLY $000$, forgetting the other $54$ strings that start with $0$ ✗; $84 = \\binom{9}{3}$ FORBIDS REPEATED DIGITS ✗.)',
    },
    {
      q: 'How many four-digit positive integers have non-increasing digits and use no digit $0$?',
      choices: ['$715$', '$126$', '$495$', '$714$'],
      answer: 2,
      solution:
        'Route one, count multisets. Such a number uses four digits from $\\{1, 2, \\ldots, 9\\}$ with repeats allowed, and once the four digits are chosen there is exactly one non-increasing order for them. The counts of the nine digits add to $4$: $4$ stars and $8$ bars, $\\binom{12}{4} = 495$. The leading digit is the largest, so it is never $0$ and every multiset gives a genuine four-digit integer ✓. Route two, casework on the leading digit. If the number starts with $d$, the other three digits are non-increasing and lie in $\\{1, \\ldots, d\\}$, a multiset of size $3$ from $d$ values: $\\binom{d + 2}{3}$. Summing over $d = 1$ through $9$ gives $1 + 4 + 10 + 20 + 35 + 56 + 84 + 120 + 165 = 495$ ✓. (The choice $715 = \\binom{13}{4}$ ALLOWS THE DIGIT $0$, which the problem forbids ✗; $714$ ALLOWS THE DIGIT $0$ and then removes only the string $0000$ ✗; $126 = \\binom{9}{4}$ FORBIDS REPEATED DIGITS ✗.)',
    },
  ],
  // slot 11 — summing an extreme element over all subsets
  [
    {
      q: 'For every $3$-element subset of $\\{1, 2, \\ldots, 12\\}$, write down its smallest element. What is the sum of all these smallest elements?',
      choices: ['$715$', '$220$', '$286$', '$495$'],
      answer: 0,
      solution:
        'Route one, group by the smallest element. A subset whose smallest element is $m$ picks its other two members from the $12 - m$ values above $m$, so there are $\\binom{12 - m}{2}$ of them. The sum is $1 \\cdot 55 + 2 \\cdot 45 + 3 \\cdot 36 + 4 \\cdot 28 + 5 \\cdot 21 + 6 \\cdot 15 + 7 \\cdot 10 + 8 \\cdot 6 + 9 \\cdot 3 + 10 \\cdot 1 = 55 + 90 + 108 + 112 + 105 + 90 + 70 + 48 + 27 + 10 = 715$ ✓. Route two, a bijection. Adjoin to each $3$-element subset one brand-new smallest element, chosen from $\\{0, 1, \\ldots, m - 1\\}$ where $m$ is the current smallest — exactly $m$ choices, so the number of ways to do this over all subsets is the very sum we want. The results are precisely the $4$-element subsets of $\\{0, 1, \\ldots, 12\\}$, each arising once (drop its smallest element to recover the original). So the sum is $\\binom{13}{4} = 715$ ✓. (The choice $220 = \\binom{12}{3}$ COUNTS THE SUBSETS instead of summing their smallest elements ✗; $286 = \\binom{13}{3}$ MOVES THE BOTTOM INDEX DOWN, counting $3$-element subsets of the enlarged set rather than $4$-element ones ✗; $495 = \\binom{12}{4}$ MOVES THE TOP INDEX DOWN, forgetting that the bijection needs the extra element $0$ ✗.)',
    },
    {
      q: 'For every $5$-element subset of $\\{1, 2, \\ldots, 11\\}$, write down its largest element. What is the sum of all these largest elements?',
      choices: ['$462$', '$5544$', '$4620$', '$924$'],
      answer: 2,
      solution:
        'Route one, group by the largest element. A subset whose largest element is $M$ picks its other four members from the $M - 1$ values below $M$, giving $\\binom{M - 1}{4}$ subsets. The sum is $5 \\cdot 1 + 6 \\cdot 5 + 7 \\cdot 15 + 8 \\cdot 35 + 9 \\cdot 70 + 10 \\cdot 126 + 11 \\cdot 210 = 5 + 30 + 105 + 280 + 630 + 1260 + 2310 = 4620$ ✓. Route two, count the gaps instead. Adjoin to each subset one new largest element from $\\{M + 1, \\ldots, 12\\}$, which can be done in $12 - M$ ways; the results are exactly the $6$-element subsets of $\\{1, \\ldots, 12\\}$, each arising once, so $\\sum (12 - M) = \\binom{12}{6} = 924$ over all subsets. Since there are $\\binom{11}{5} = 462$ subsets in all, $\\sum M = 12 \\cdot 462 - 924 = 5544 - 924 = 4620$ ✓. (The choice $462$ COUNTS THE SUBSETS instead of summing their largest elements ✗; $5544$ TREATS EVERY LARGEST ELEMENT AS $12$, which is not even in the set ✗; $924 = \\binom{12}{6}$ SUMS THE GAPS $12 - M$ rather than the largest elements themselves ✗.)',
    },
    {
      q: 'For every $4$-element subset of $\\{1, 2, \\ldots, 10\\}$, write down its largest element. What is the sum of all these largest elements?',
      choices: ['$210$', '$1848$', '$2310$', '$462$'],
      answer: 1,
      solution:
        'Route one, group by the largest element. A subset with largest element $M$ has $\\binom{M - 1}{3}$ forms, so the sum is $4 \\cdot 1 + 5 \\cdot 4 + 6 \\cdot 10 + 7 \\cdot 20 + 8 \\cdot 35 + 9 \\cdot 56 + 10 \\cdot 84 = 4 + 20 + 60 + 140 + 280 + 504 + 840 = 1848$ ✓. Route two, count the gaps instead. Adjoining a new largest element from $\\{M + 1, \\ldots, 11\\}$ can be done in $11 - M$ ways and produces every $5$-element subset of $\\{1, \\ldots, 11\\}$ exactly once, so $\\sum (11 - M) = \\binom{11}{5} = 462$. There are $\\binom{10}{4} = 210$ subsets, so $\\sum M = 11 \\cdot 210 - 462 = 2310 - 462 = 1848$ ✓. (The choice $210$ COUNTS THE SUBSETS instead of summing ✗; $2310$ TREATS EVERY LARGEST ELEMENT AS $11$, which is not in the set ✗; $462 = \\binom{11}{5}$ SUMS THE GAPS $11 - M$ rather than the largest elements ✗.)',
    },
  ],
  // slot 12 — caps on every variable, by inclusion and exclusion
  [
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 18$ with each variable at most $7$?',
      choices: ['$1330$', '$246$', '$186$', '$1144$'],
      answer: 1,
      solution:
        'Route one, inclusion and exclusion. All solutions: $\\binom{21}{3} = 1330$. One chosen variable at least $8$: pay it $8$, spread the remaining $10$, $\\binom{13}{3} = 286$, times $4$ variables is $1144$. Two chosen variables both at least $8$: pay $16$, spread $2$, $\\binom{5}{3} = 10$, times $\\binom{4}{2} = 6$ pairs is $60$, and those were removed twice. Three overflows would need $24 > 18$. The answer is $1330 - 1144 + 60 = 246$ ✓. Route two, count the room left over instead. Set $x\' = 7 - x$ and likewise for the others; each $x\'$ is again between $0$ and $7$, and the four of them sum to $28 - 18 = 10$. Solutions of $x\' + y\' + z\' + w\' = 10$ with no cap number $\\binom{13}{3} = 286$; one variable at least $8$ leaves $2$ to spread, $\\binom{5}{3} = 10$, times $4$ is $40$, and two cannot both overflow. So the count is $286 - 40 = 246$ ✓. (The choice $1330$ IGNORES THE CAPS ✗; $186$ FORGETS THE ADD-BACK of the $60$ doubly-removed solutions ✗; $1144$ REPORTS THE SUBTRACTED PIECE alone ✗.)',
    },
    {
      q: 'Twenty-two identical apples are placed into five crates labeled $1$ through $5$, and no crate may hold more than $6$ apples. A crate may be empty. How many placements are there?',
      choices: ['$14950$', '$520$', '$495$', '$470$'],
      answer: 3,
      solution:
        'Route one, inclusion and exclusion. All placements: $\\binom{26}{4} = 14950$. One chosen crate at least $7$: pay $7$, spread $15$, $\\binom{19}{4} = 3876$, times $5$ is $19380$. Two chosen crates at least $7$ each: pay $14$, spread $8$, $\\binom{12}{4} = 495$, times $\\binom{5}{2} = 10$ is $4950$. Three at least $7$ each: pay $21$, spread $1$, $\\binom{5}{4} = 5$, times $\\binom{5}{3} = 10$ is $50$; four would need $28 > 22$. The answer is $14950 - 19380 + 4950 - 50 = 470$ ✓. Route two, count the empty space instead. Let $x_i\' = 6 - x_i$ be the room left in crate $i$; each $x_i\'$ lies between $0$ and $6$, and the five of them sum to $30 - 22 = 8$. Without the cap that is $\\binom{12}{4} = 495$; a crate with $x_i\' \\geq 7$ leaves $1$ unit to spread, $\\binom{5}{4} = 5$ ways, times $5$ crates is $25$, and two cannot both overflow. So the count is $495 - 25 = 470$ ✓. (The choice $14950$ IGNORES THE CAPS ✗; $520$ STOPS AFTER THE PAIRS, forgetting the $50$ triple overflows ✗; $495$ USES THE ROOM-LEFT COUNT WITHOUT ITS OWN CAP ✗.)',
    },
    {
      q: 'How many ordered quadruples $(x, y, z, w)$ of non-negative integers satisfy $x + y + z + w = 20$ with at least one variable greater than $8$?',
      choices: ['$1456$', '$1771$', '$1396$', '$375$'],
      answer: 2,
      solution:
        'Route one, count the offenders directly. A variable greater than $8$ means at least $9$. One chosen variable at least $9$: pay it $9$, spread the remaining $11$, $\\binom{14}{3} = 364$, times $4$ variables is $1456$. Two chosen variables at least $9$ each: pay $18$, spread $2$, $\\binom{5}{3} = 10$, times $\\binom{4}{2} = 6$ pairs is $60$; those solutions were counted twice, and three overflows would need $27 > 20$. The answer is $1456 - 60 = 1396$ ✓. Route two, count the complement. Solutions with every variable at most $8$ can be counted through the leftover room $x\' = 8 - x$ and its partners, which sum to $32 - 20 = 12$ and are each at most $8$: that is $\\binom{15}{3} = 455$ without the cap, minus $4 \\cdot \\binom{6}{3} = 80$ for a single overflow (two would need $18 > 12$), so $375$. Since there are $\\binom{23}{3} = 1771$ solutions in all, the answer is $1771 - 375 = 1396$ ✓. (The choice $1456$ FORGETS TO REMOVE THE $60$ SOLUTIONS COUNTED TWICE, those with two big variables ✗; $1771$ COUNTS EVERY SOLUTION, ignoring the condition ✗; $375$ REPORTS THE COMPLEMENT, the solutions with no variable above $8$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 13,
  challenge,
}
