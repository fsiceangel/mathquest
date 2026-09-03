// Introduction to Counting chapter 2 — variations for section 2.3
// (Complementary Counting). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its conventions: dice and spinners are named or
//    ordered, so (2, 5) and (5, 2) are different outcomes; "from a to b"
//    includes both ends; "at least" is inclusive; strings may repeat
//    letters or digits unless the stem says otherwise; a "three-digit"
//    or "four-digit" integer has no leading zero.
//  - Every keyed answer is reached twice along routes that share no
//    steps: a complement subtracted from a total against a direct
//    casework split (by the number of matching symbols, by the position
//    of the first special symbol, by the shape of the multiset). Route
//    two never borrows route one’s number.
//  - Each distractor is one named slip — reporting the complement,
//    forgetting the leading-zero restriction, subtracting objects that
//    were never counted, forgetting the add-back — and the slip is named
//    in CAPS.

const s23 = [
  // s1 — "not a multiple", "not a square".
  [
    {
      q: 'How many three-digit positive integers are not multiples of $7$?',
      choices: ['$128$', '$758$', '$772$', '$773$'],
      answer: 2,
      solution:
        'Route one, subtract the multiples. There are $900$ three-digit integers. The three-digit multiples of $7$ run from $105 = 7 \\cdot 15$ to $994 = 7 \\cdot 142$, so there are $142 - 15 + 1 = 128$ of them, and $900 - 128 = 772$ are not multiples ✓. Route two, count survivors block by block. Any $7$ consecutive integers contain exactly one multiple of $7$, hence exactly $6$ non-multiples. Starting at $100$, the blocks $100$–$106$, $107$–$113$, and so on: $128$ full blocks reach $100 + 7 \\cdot 128 - 1 = 995$ and hold $128 \\cdot 6 = 768$ non-multiples. The leftover integers $996, 997, 998, 999$ lie strictly between the multiples $994$ and $1001$, so all four survive: $768 + 4 = 772$ ✓. (The value $128$ IS THE COMPLEMENT, the multiples themselves ✗. The value $758$ SUBTRACTS ALL $142$ MULTIPLES OF $7$ UP TO $999$, including the fourteen one- and two-digit ones ✗. The value $773$ COUNTS THE MULTIPLES AS $142 - 15 = 127$, the off-by-one at the boundary ✗.)',
    },
    {
      q: 'How many integers from $1$ to $250$, inclusive, are not perfect squares?',
      choices: ['$235$', '$15$', '$234$', '$236$'],
      answer: 0,
      solution:
        'Route one, subtract the squares. Since $15^2 = 225 \\le 250$ and $16^2 = 256 > 250$, the squares in range are $1^2, 2^2, \\ldots, 15^2$, fifteen of them. So $250 - 15 = 235$ integers are not squares ✓. Route two, count the gaps between consecutive squares. Strictly between $k^2$ and $(k+1)^2$ there are $(k+1)^2 - k^2 - 1 = 2k$ integers, none of them squares. For $k = 1, \\ldots, 14$ these gaps hold $2(1 + 2 + \\cdots + 14) = 2 \\cdot 105 = 210$ non-squares, covering everything from $2$ up to $224$. Above $225$ the integers $226, 227, \\ldots, 250$ are $25$ more non-squares, since the next square is $256$. Total $210 + 25 = 235$ ✓. (The value $15$ IS THE COMPLEMENT, the number of squares ✗. The value $234$ COUNTS $16^2 = 256$ AS IN RANGE, subtracting sixteen squares ✗. The value $236$ FORGETS THAT $1$ IS A PERFECT SQUARE and subtracts only fourteen ✗.)',
    },
    {
      q: 'For exactly one integer $k \\ge 2$, exactly $75$ of the $90$ two-digit positive integers are not multiples of $k$. What is $k$?',
      choices: ['$4$', '$5$', '$7$', '$6$'],
      answer: 3,
      solution:
        'Route one, turn the count around. If $75$ two-digit integers are not multiples of $k$, then $90 - 75 = 15$ of them are. The number of two-digit multiples of $k$ is $\\lfloor 99/k \\rfloor - \\lfloor 9/k \\rfloor$; for $k = 6$ this is $16 - 1 = 15$, since the multiples run $12, 18, \\ldots, 96$. So $k = 6$ ✓. Route two, work directly with blocks. Since $\\frac{75}{90} = \\frac{5}{6}$, guess that $5$ of every $6$ consecutive integers survive, which happens exactly when $k = 6$. Check directly: $90 = 15 \\cdot 6$, so the two-digit integers split into fifteen blocks $10$–$15$, $16$–$21$, $\\ldots$, $94$–$99$, each containing exactly one multiple of $6$ and five non-multiples, for $15 \\cdot 5 = 75$ non-multiples ✓. The neighbors fail: $k = 5$ has $18$ multiples, leaving $72$, and $k = 7$ has $13$ multiples, leaving $77$, so $6$ is the only answer. (The value $4$ HAS $22$ TWO-DIGIT MULTIPLES, leaving $68$ non-multiples ✗. The value $5$ HAS $18$ TWO-DIGIT MULTIPLES, leaving $72$ ✗. The value $7$ HAS $13$ TWO-DIGIT MULTIPLES, leaving $77$ ✗.)',
    },
  ],
  // s2 — "at least one" against "none".
  [
    {
      q: 'A coin is flipped $6$ times and the sequence of heads and tails is recorded. How many of the possible sequences contain at least one tail?',
      choices: ['$64$', '$62$', '$32$', '$63$'],
      answer: 3,
      solution:
        'Route one, subtract the no-tail sequence. There are $2^6 = 64$ sequences, and exactly one of them, HHHHHH, has no tail. So $64 - 1 = 63$ ✓. Route two, casework on the number of tails. Exactly $t$ tails can be placed in $\\binom{6}{t}$ ways, and $t$ runs from $1$ to $6$: $\\binom{6}{1} + \\binom{6}{2} + \\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 6 + 15 + 20 + 15 + 6 + 1 = 63$ ✓. (The value $64$ IS THE TOTAL, ignoring the condition ✗. The value $62$ SUBTRACTS BOTH ALL-SAME SEQUENCES, but TTTTTT contains tails and belongs in the count ✗. The value $32$ TAKES HALF THE SEQUENCES, as if "at least one tail" and "no tail" were equally common ✗.)',
    },
    {
      q: 'A quiz has $4$ questions, and each question is answered A, B, or C. How many possible answer sheets contain at least one A?',
      choices: ['$81$', '$65$', '$16$', '$108$'],
      answer: 1,
      solution:
        'Route one, subtract the sheets with no A. There are $3^4 = 81$ answer sheets. A sheet with no A uses only B and C on every question: $2^4 = 16$ sheets. So $81 - 16 = 65$ ✓. Route two, casework on the number of A’s. Exactly $a$ questions answered A: choose which $\\binom{4}{a}$ and answer the rest B or C in $2^{4-a}$ ways. Summing $a = 1, 2, 3, 4$: $4 \\cdot 8 + 6 \\cdot 4 + 4 \\cdot 2 + 1 \\cdot 1 = 32 + 24 + 8 + 1 = 65$ ✓. (The value $81$ IS THE TOTAL, ignoring the condition ✗. The value $16$ IS THE COMPLEMENT, the sheets with no A at all ✗. The value $108$ PICKS A QUESTION TO BE A AND FILLS THE REST FREELY, $4 \\cdot 27$, counting a sheet like AABC twice ✗.)',
    },
    {
      q: 'A coin is flipped $n$ times and the sequence of heads and tails is recorded. Exactly $127$ of the possible sequences contain at least one head. What is $n$?',
      choices: ['$7$', '$6$', '$8$', '$128$'],
      answer: 0,
      solution:
        'Route one, complement then solve. Of the $2^n$ sequences, exactly one (all tails) has no head, so $2^n - 1 = 127$, giving $2^n = 128 = 2^7$ and $n = 7$ ✓. Route two, casework sums for candidate $n$. The sequences with at least one head number $\\binom{n}{1} + \\binom{n}{2} + \\cdots + \\binom{n}{n}$. For $n = 7$ this is $7 + 21 + 35 + 35 + 21 + 7 + 1 = 127$ ✓, while $n = 6$ gives $6 + 15 + 20 + 15 + 6 + 1 = 63$ and $n = 8$ gives $255$; the sum grows with $n$, so $7$ is the only solution. (The value $6$ GIVES ONLY $63$ SEQUENCES with a head ✗. The value $8$ GIVES $255$ SEQUENCES with a head ✗. The value $128$ REPORTS THE TOTAL NUMBER OF SEQUENCES $2^n$ instead of the number of flips ✗.)',
    },
  ],
  // s3 — digits and letters with a required symbol.
  [
    {
      q: 'How many five-digit positive integers contain at least one digit $2$?',
      choices: ['$52488$', '$37512$', '$40951$', '$30951$'],
      answer: 1,
      solution:
        'Route one, subtract the numbers with no $2$. There are $90000$ five-digit integers. With no $2$, the leading digit has $8$ choices ($1$–$9$ except $2$) and each of the other four has $9$, so $8 \\cdot 9^4 = 52488$. Subtract: $90000 - 52488 = 37512$ ✓. Route two, casework on the position of the leftmost $2$. Leftmost $2$ in place $1$: the other four digits are free, $10^4 = 10000$. In place $2$: the leading digit avoids $0$ and $2$ ($8$ ways), then $2$, then $10^3$: $8000$. In place $3$: $8 \\cdot 9 \\cdot 10^2 = 7200$. In place $4$: $8 \\cdot 9 \\cdot 9 \\cdot 10 = 6480$. In place $5$: $8 \\cdot 9^3 = 5832$. Sum: $10000 + 8000 + 7200 + 6480 + 5832 = 37512$ ✓. (The value $52488$ IS THE COMPLEMENT, the numbers with no $2$ ✗. The value $40951$ ALLOWS A LEADING ZERO, computing $10^5 - 9^5$ over all five-digit strings ✗. The value $30951$ USES $9^5$ FOR THE NO-$2$ COUNT, forgetting that the leading digit also cannot be $0$ ✗.)',
    },
    {
      q: 'A string of $4$ letters is formed from A, B, C, D, E, F, with repeats allowed. How many such strings contain at least one E?',
      choices: ['$625$', '$1296$', '$500$', '$671$'],
      answer: 3,
      solution:
        'Route one, subtract the strings with no E. All strings: $6^4 = 1296$. Strings with no E use only the other five letters: $5^4 = 625$. So $1296 - 625 = 671$ ✓. Route two, casework on the number of E’s. Exactly $e$ positions hold E, chosen in $\\binom{4}{e}$ ways, and the remaining positions take any of $5$ letters: $\\binom{4}{1} 5^3 + \\binom{4}{2} 5^2 + \\binom{4}{3} 5 + \\binom{4}{4} = 500 + 150 + 20 + 1 = 671$ ✓. (The value $625$ IS THE COMPLEMENT, the strings with no E ✗. The value $1296$ IS THE TOTAL, ignoring the condition ✗. The value $500$ COUNTS ONLY STRINGS WITH EXACTLY ONE E ✗.)',
    },
    {
      q: 'How many four-digit positive integers contain at least one digit $5$ and at least one digit $0$?',
      choices: ['$3168$', '$974$', '$703$', '$4904$'],
      answer: 2,
      solution:
        'Route one, subtract two complements and add back the overlap. Of the $9000$ four-digit integers, those with no $5$ number $8 \\cdot 9^3 = 5832$, those with no $0$ number $9^4 = 6561$, and those with neither $5$ nor $0$ number $8 \\cdot 8^3 = 4096$. Numbers missing at least one of the two digits: $5832 + 6561 - 4096 = 8297$. So $9000 - 8297 = 703$ ✓. Route two, casework on the zeros. A $0$ can sit only in the last three places. Exactly one $0$: choose its place ($3$ ways); the other three digits are from $1$–$9$ and must include a $5$, and among the $9^3 = 729$ nonzero triples the $8^3 = 512$ with no $5$ fail, leaving $217$; total $3 \\cdot 217 = 651$. Exactly two $0$’s: $3$ ways to place them; the other two digits are nonzero with at least one $5$: $81 - 64 = 17$; total $51$. Exactly three $0$’s: the leading digit must itself be $5$, one number. Sum $651 + 51 + 1 = 703$ ✓. (The value $3168$ REQUIRES ONLY THE $5$ and ignores the $0$ ✗. The value $974$ ALLOWS A LEADING ZERO, running the count over all strings $0000$–$9999$ ✗. The value $4904$ COUNTS NUMBERS WITH A $5$ OR A $0$, subtracting only the neither-digit count from $9000$ ✗.)',
    },
  ],
  // s4 — "not all the same", "different".
  [
    {
      q: 'Three dice — one red, one blue, one green — are rolled. How many of the $216$ possible outcomes do not have all three dice showing the same number?',
      choices: ['$210$', '$215$', '$120$', '$6$'],
      answer: 0,
      solution:
        'Route one, subtract the all-same outcomes. The three dice all match in exactly $6$ outcomes, $1$-$1$-$1$ through $6$-$6$-$6$. So $216 - 6 = 210$ ✓. Route two, casework on how many values appear. All three different: $6 \\cdot 5 \\cdot 4 = 120$. Exactly two the same: choose the repeated value ($6$), the other value ($5$), and which die shows the odd value ($3$): $90$. Sum $120 + 90 = 210$ ✓. (The value $215$ SUBTRACTS A SINGLE ALL-SAME OUTCOME, but there is one for each of the six numbers ✗. The value $120$ COUNTS ONLY OUTCOMES WITH THREE DIFFERENT NUMBERS, dropping the ones with exactly one matching pair ✗. The value $6$ IS THE COMPLEMENT ✗.)',
    },
    {
      q: 'Lin and Mo each secretly write down one digit from $0$ to $9$. Counting an ordered pair (Lin’s digit, Mo’s digit) as one choice, how many choices have them writing different digits?',
      choices: ['$100$', '$45$', '$90$', '$81$'],
      answer: 2,
      solution:
        'Route one, subtract the matches. There are $10 \\cdot 10 = 100$ ordered pairs, and they match in exactly $10$ of them, $(0, 0)$ through $(9, 9)$. So $100 - 10 = 90$ ✓. Route two, build the pair directly. Lin writes any of $10$ digits; whatever she writes, Mo has $9$ digits left that differ from it. So $10 \\cdot 9 = 90$ ✓. (The value $100$ IS THE TOTAL, ignoring the condition ✗. The value $45$ TREATS THE PAIR AS UNORDERED, but (Lin $3$, Mo $8$) and (Lin $8$, Mo $3$) are different choices ✗. The value $81$ GIVES BOTH PEOPLE ONLY $9$ DIGITS, as if Lin could not use one of them ✗.)',
    },
    {
      q: 'A red die and a blue die are rolled. How many of the $36$ possible rolls show two numbers that differ by at least $2$?',
      choices: ['$30$', '$20$', '$26$', '$10$'],
      answer: 1,
      solution:
        'Route one, subtract the close rolls. The rolls that differ by less than $2$ are the $6$ doubles and the rolls that differ by exactly $1$: the pairs $\\{1,2\\}, \\{2,3\\}, \\{3,4\\}, \\{4,5\\}, \\{5,6\\}$, each in two orders, $10$ rolls. So $36 - 6 - 10 = 20$ ✓. Route two, casework on the red die. Red $1$: blue $3, 4, 5, 6$, four rolls. Red $2$: blue $4, 5, 6$, three. Red $3$: blue $1, 5, 6$, three. Red $4$: blue $1, 2, 6$, three. Red $5$: blue $1, 2, 3$, three. Red $6$: blue $1, 2, 3, 4$, four. Sum $4 + 3 + 3 + 3 + 3 + 4 = 20$ ✓. (The value $30$ REMOVES ONLY THE DOUBLES, keeping the rolls that differ by exactly $1$ ✗. The value $26$ REMOVES ONLY THE DIFFER-BY-ONE ROLLS, keeping the doubles ✗. The value $10$ COUNTS UNORDERED PAIRS OF NUMBERS, but the dice are different colors ✗.)',
    },
  ],
  // s5 — codes with a required letter.
  [
    {
      q: 'A code is a string of $4$ letters, each chosen from A, B, C, D, E, with repeats allowed. How many codes contain at least one E?',
      choices: ['$256$', '$625$', '$369$', '$500$'],
      answer: 2,
      solution:
        'Route one, subtract the E-free codes. All codes: $5^4 = 625$. Codes with no E use only A, B, C, D: $4^4 = 256$. So $625 - 256 = 369$ ✓. Route two, casework on the number of E’s. Exactly $e$ E’s: place them in $\\binom{4}{e}$ ways, fill the rest from four letters. $\\binom{4}{1} 4^3 + \\binom{4}{2} 4^2 + \\binom{4}{3} 4 + \\binom{4}{4} = 256 + 96 + 16 + 1 = 369$ ✓. (The value $256$ IS THE COMPLEMENT, the codes with no E ✗. The value $625$ IS THE TOTAL, ignoring the condition ✗. The value $500$ PICKS A POSITION FOR AN E AND FILLS THE REST FREELY, $4 \\cdot 125$, counting a code like EEAB twice ✗.)',
    },
    {
      q: 'A string of $5$ digits is formed using only the digits $1, 2, 3$, with repeats allowed. How many such strings contain at least one $3$?',
      choices: ['$211$', '$243$', '$32$', '$405$'],
      answer: 0,
      solution:
        'Route one, subtract the $3$-free strings. All strings: $3^5 = 243$. Strings with no $3$ use only $1$ and $2$: $2^5 = 32$. So $243 - 32 = 211$ ✓. Route two, casework on the number of $3$’s. Exactly $t$ of the five places hold a $3$, and the other $5 - t$ places hold $1$ or $2$: $\\binom{5}{1} 2^4 + \\binom{5}{2} 2^3 + \\binom{5}{3} 2^2 + \\binom{5}{4} 2 + \\binom{5}{5} = 80 + 80 + 40 + 10 + 1 = 211$ ✓. (The value $243$ IS THE TOTAL, ignoring the condition ✗. The value $32$ IS THE COMPLEMENT, the strings with no $3$ ✗. The value $405$ PICKS A POSITION FOR A $3$ AND FILLS THE REST FREELY, $5 \\cdot 81$, counting strings with several $3$’s more than once ✗.)',
    },
    {
      q: 'A $3$-letter code uses the letters A, B, C, D, and a letter may be used more than once. How many codes use the letter A at least once and also use the letter B at least once?',
      choices: ['$10$', '$37$', '$12$', '$18$'],
      answer: 3,
      solution:
        'Route one, subtract two complements and add back the overlap. All codes: $4^3 = 64$. Codes with no A: $3^3 = 27$; codes with no B: $27$; codes with neither A nor B: $2^3 = 8$. Codes missing at least one of the two letters: $27 + 27 - 8 = 46$. So $64 - 46 = 18$ ✓. Route two, casework on the letters used. The code has three places and must hold an A and a B, so its letters are either A, B, and one other letter, or A, B with one of them repeated. Case A, B, and a third letter from C, D: $2$ choices of the letter and $3! = 6$ orders, $12$ codes. Case A, A, B: $3$ orders. Case A, B, B: $3$ orders. Sum $12 + 3 + 3 = 18$ ✓. (The value $10$ FORGETS THE ADD-BACK, subtracting both $27$’s without restoring the $8$ codes removed twice ✗. The value $37$ REQUIRES ONLY THE A and ignores the B ✗. The value $12$ FORCES THE THIRD LETTER TO BE DIFFERENT, dropping codes like ABA and BAB ✗.)',
    },
  ],
  // s6 — squares and cubes, a complement with overlap.
  [
    {
      q: 'How many integers from $1$ to $500$, inclusive, are neither perfect squares nor perfect cubes?',
      choices: ['$27$', '$471$', '$472$', '$473$'],
      answer: 3,
      solution:
        'Route one, inclusion–exclusion on the unwanted set. Squares up to $500$: $1^2$ through $22^2 = 484$, so $22$. Cubes: $1^3$ through $7^3 = 343$, so $7$. Numbers that are both are sixth powers: $1$ and $64$, so $2$. Unwanted $= 22 + 7 - 2 = 27$, and $500 - 27 = 473$ ✓. Route two, remove the squares, then the cubes that remain. Removing the $22$ squares leaves $500 - 22 = 478$ integers. Of the seven cubes $1, 8, 27, 64, 125, 216, 343$, two ($1$ and $64$) are squares and are already gone; the other five are still present. Remove them: $478 - 5 = 473$ ✓. (The value $27$ IS THE COMPLEMENT, the squares-or-cubes count ✗. The value $471$ FORGETS THE OVERLAP, removing $1$ and $64$ twice ✗. The value $472$ CATCHES $1$ BUT NOT $64$ as a number that is both a square and a cube ✗.)',
    },
    {
      q: 'How many integers from $1$ to $300$, inclusive, are neither perfect squares nor multiples of $10$?',
      choices: ['$253$', '$254$', '$46$', '$255$'],
      answer: 1,
      solution:
        'Route one, inclusion–exclusion on the unwanted set. Squares up to $300$: $1^2$ through $17^2 = 289$, so $17$. Multiples of $10$: $30$. A square that is a multiple of $10$ must be a multiple of $100$, and the only one up to $300$ is $100$, so the overlap is $1$. Unwanted $= 17 + 30 - 1 = 46$, and $300 - 46 = 254$ ✓. Route two, remove the multiples of $10$ first, then the squares that remain. Removing the $30$ multiples of $10$ leaves $270$ integers. Of the $17$ squares, only $100$ was among the removed numbers, so $16$ squares are still present. Remove them: $270 - 16 = 254$ ✓. (The value $253$ FORGETS THE OVERLAP, removing $100$ twice ✗. The value $46$ IS THE COMPLEMENT, the squares-or-multiples count ✗. The value $255$ SUBTRACTS THE OVERLAP TWICE, as if $100$ and $400$ were both in range ✗.)',
    },
    {
      q: 'How many integers from $1$ to $1000$, inclusive, are perfect squares or perfect cubes (or both)?',
      choices: ['$38$', '$41$', '$40$', '$35$'],
      answer: 0,
      solution:
        'Route one, inclusion–exclusion. Squares up to $1000$: $1^2$ through $31^2 = 961$, so $31$. Cubes: $1^3$ through $10^3 = 1000$, so $10$. Both: the sixth powers $1$, $64$, and $729$, so $3$. Squares or cubes: $31 + 10 - 3 = 38$ ✓. Route two, start from the squares and add the new cubes. The $31$ squares are all in. Of the ten cubes, $1 = 1^2$, $64 = 8^2$, and $729 = 27^2$ are squares already counted; the other seven, $8, 27, 125, 216, 343, 512, 1000$, are new. So $31 + 7 = 38$ ✓. (The value $41$ ADDS THE TWO LISTS WITHOUT REMOVING THE OVERLAP ✗. The value $40$ CATCHES ONLY $1$ AS BOTH A SQUARE AND A CUBE, missing $64$ and $729$ ✗. The value $35$ SUBTRACTS THE OVERLAP TWICE ✗.)',
    },
  ],
  // s7 — "at least two different" and "exactly two different".
  [
    {
      q: 'A string of $5$ digits is formed using only the digits $1, 2, 3$, with repeats allowed. How many such strings use at least two different digits?',
      choices: ['$243$', '$240$', '$242$', '$150$'],
      answer: 1,
      solution:
        'Route one, subtract the one-digit strings. All strings: $3^5 = 243$. A string using only one digit is $11111$, $22222$, or $33333$, three strings. So $243 - 3 = 240$ ✓. Route two, casework on the first place that breaks the run. Pick the first digit ($3$ ways). Since the string is not constant, there is a first position $k$ (with $2 \\le k \\le 5$) whose digit differs from the first digit; positions $2$ through $k - 1$ copy the first digit, position $k$ has $2$ choices, and every later position has $3$. Summing over $k$: $3 \\cdot 2 \\cdot (3^3 + 3^2 + 3^1 + 3^0) = 6 \\cdot 40 = 240$ ✓. (The value $243$ IS THE TOTAL, ignoring the condition ✗. The value $242$ SUBTRACTS A SINGLE ALL-SAME STRING, but there is one for each digit ✗. The value $150$ COUNTS ONLY STRINGS USING ALL THREE DIGITS, dropping the ones that use exactly two ✗.)',
    },
    {
      q: 'Five friends each choose one of $4$ pizza toppings. How many ways can they choose so that they do not all pick the same topping?',
      choices: ['$1024$', '$1023$', '$4$', '$1020$'],
      answer: 3,
      solution:
        'Route one, subtract the unanimous choices. All choices: $4^5 = 1024$. They all pick the same topping in exactly $4$ ways, one per topping. So $1024 - 4 = 1020$ ✓. Route two, casework on the first friend to disagree. The first friend picks any of $4$ toppings. Since the group is not unanimous, there is a first friend, number $k$ with $2 \\le k \\le 5$, who picks something else: friends $2$ through $k - 1$ copy the first pick, friend $k$ has $3$ choices, and each later friend has $4$. Summing: $4 \\cdot 3 \\cdot (4^3 + 4^2 + 4 + 1) = 12 \\cdot 85 = 1020$ ✓. (The value $1024$ IS THE TOTAL, ignoring the condition ✗. The value $1023$ SUBTRACTS A SINGLE UNANIMOUS CHOICE, but there is one for each topping ✗. The value $4$ IS THE COMPLEMENT ✗.)',
    },
    {
      q: 'A string of $5$ digits is formed using only the digits $1, 2, 3, 4$, with repeats allowed. How many such strings use exactly two different digits?',
      choices: ['$192$', '$360$', '$180$', '$60$'],
      answer: 2,
      solution:
        'Route one, choose the pair and subtract the constants. Choose which two digits appear: $\\binom{4}{2} = 6$ pairs. Strings built from a given pair number $2^5 = 32$, but two of those use only one of the digits, so $32 - 2 = 30$ use both. Total $6 \\cdot 30 = 180$ ✓. Route two, build from the first digit. The first place takes any of $4$ digits, and the second digit that appears is one of the other $3$. The remaining four places each hold one of the two digits, and at least one of them must be the second digit: casework on how many of the four, $\\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 4 + 6 + 4 + 1 = 15$. Total $4 \\cdot 3 \\cdot 15 = 180$ ✓. (The value $192$ FORGETS TO REMOVE THE CONSTANT STRINGS, taking $6 \\cdot 32$ ✗. The value $360$ TREATS THE PAIR AS ORDERED, $4 \\cdot 3 \\cdot 30$, counting each pair of digits twice ✗. The value $60$ ALLOWS ONLY A TWO-THREE SPLIT of the five places, $6 \\cdot \\binom{5}{2}$, dropping the one-four splits ✗.)',
    },
  ],
  // s8 — leading zeros and required digits.
  [
    {
      q: 'How many integers from $1$ to $9999$, inclusive, contain at least one digit $8$?',
      choices: ['$3439$', '$3438$', '$6561$', '$3168$'],
      answer: 0,
      solution:
        'Route one, pad to four digits and subtract. Write each integer from $0$ to $9999$ as a four-character string with leading zeros: $10000$ strings, of which $9^4 = 6561$ contain no $8$. So $10000 - 6561 = 3439$ strings contain an $8$. The string $0000$ has no $8$, so removing $0$ from the range changes nothing: $3439$ ✓. Route two, casework on the position of the leftmost $8$ in the padded string. Leftmost $8$ in place $1$: $10^3 = 1000$. In place $2$: $9 \\cdot 1 \\cdot 10^2 = 900$. In place $3$: $9^2 \\cdot 10 = 810$. In place $4$: $9^3 = 729$. Sum $1000 + 900 + 810 + 729 = 3439$ ✓. (The value $3438$ SUBTRACTS $6561$ FROM $9999$, but $6561$ counts the string $0000$, which is not in the range ✗. The value $6561$ IS THE COMPLEMENT, the strings with no $8$ ✗. The value $3168$ COUNTS ONLY THE FOUR-DIGIT INTEGERS, dropping every integer below $1000$ ✗.)',
    },
    {
      q: 'How many three-digit positive integers have at least one even digit?',
      choices: ['$125$', '$450$', '$775$', '$875$'],
      answer: 2,
      solution:
        'Route one, subtract the all-odd numbers. There are $900$ three-digit integers. A number with no even digit has each of its three digits from $1, 3, 5, 7, 9$: $5^3 = 125$. So $900 - 125 = 775$ ✓. Route two, casework on the leftmost even digit. Hundreds digit even ($2, 4, 6, 8$): $4 \\cdot 10 \\cdot 10 = 400$. Hundreds odd, tens even ($0, 2, 4, 6, 8$): $5 \\cdot 5 \\cdot 10 = 250$. Hundreds and tens odd, units even: $5 \\cdot 5 \\cdot 5 = 125$. Sum $400 + 250 + 125 = 775$ ✓. (The value $125$ IS THE COMPLEMENT, the all-odd numbers ✗. The value $450$ COUNTS THE EVEN NUMBERS, confusing "has an even digit" with "is even" ✗. The value $875$ USES $5^2$ FOR THE ALL-ODD COUNT, restricting only two of the three digits ✗.)',
    },
    {
      q: 'How many integers from $1$ to $999$, inclusive, contain at least one digit $1$ and at least one digit $2$?',
      choices: ['$60$', '$54$', '$48$', '$512$'],
      answer: 1,
      solution:
        'Route one, pad to three digits and use inclusion–exclusion. Over the $1000$ strings $000$–$999$: no $1$, $9^3 = 729$; no $2$, $729$; neither, $8^3 = 512$. Strings missing at least one of the digits: $729 + 729 - 512 = 946$, so $1000 - 946 = 54$ contain both. The string $000$ contains neither, so the count for $1$ to $999$ is also $54$ ✓. Route two, casework on the three characters. A three-character string holding a $1$ and a $2$ is either $1$, $2$, and a third character from the other eight digits, or $1$ and $2$ with one of them repeated. First case: $8$ choices of the third character and $3! = 6$ orders, $48$ strings. Second case: $1, 1, 2$ in $3$ orders and $1, 2, 2$ in $3$ orders, $6$ strings. Sum $48 + 6 = 54$, and a string like $012$ is the integer $12$, which is in range ✓. (The value $60$ PICKS A PLACE FOR THE $1$, A PLACE FOR THE $2$, AND FILLS THE THIRD FREELY, $3 \\cdot 2 \\cdot 10$, counting $112$ and $122$ more than once ✗. The value $48$ FORCES THE THIRD DIGIT TO BE NEITHER $1$ NOR $2$, dropping numbers like $121$ ✗. The value $512$ IS THE NEITHER-DIGIT COUNT, the add-back term ✗.)',
    },
  ],
  // s9 — "at least one six" combined with a second condition.
  [
    {
      q: 'Four dice — red, blue, green, and yellow — are rolled. How many of the $1296$ possible outcomes include at least one $6$ but do not have all four dice showing the same number?',
      choices: ['$671$', '$665$', '$625$', '$670$'],
      answer: 3,
      solution:
        'Route one, complement then remove the one bad outcome. Outcomes with no $6$: $5^4 = 625$, so $1296 - 625 = 671$ outcomes include a $6$. Among them the only all-same outcome is $6$-$6$-$6$-$6$; remove it: $671 - 1 = 670$ ✓. Route two, casework on the number of sixes. Exactly one $6$: $4 \\cdot 5^3 = 500$. Exactly two: $\\binom{4}{2} \\cdot 5^2 = 150$. Exactly three: $4 \\cdot 5 = 20$. Exactly four: the single all-same outcome, excluded. Sum $500 + 150 + 20 = 670$ ✓. (The value $671$ IGNORES THE "NOT ALL THE SAME" CONDITION ✗. The value $665$ SUBTRACTS ALL SIX ALL-SAME OUTCOMES, but five of them contain no $6$ and were never counted ✗. The value $625$ IS THE COMPLEMENT, the outcomes with no $6$ ✗.)',
    },
    {
      q: 'Three spinners each have $4$ equal sections numbered $1$ through $4$. Each is spun once and the results are recorded in order (first, second, third). How many of the $64$ possible outcomes include at least one $4$ but do not have all three spinners showing the same number?',
      choices: ['$37$', '$36$', '$33$', '$27$'],
      answer: 1,
      solution:
        'Route one, complement then remove the one bad outcome. Outcomes with no $4$: $3^3 = 27$, so $64 - 27 = 37$ include a $4$. The only one of those with all three the same is $4$-$4$-$4$; remove it: $36$ ✓. Route two, casework on the number of fours. Exactly one $4$: $3 \\cdot 3^2 = 27$. Exactly two: $\\binom{3}{2} \\cdot 3 = 9$. Exactly three: the all-same outcome, excluded. Sum $27 + 9 = 36$ ✓. (The value $37$ IGNORES THE "NOT ALL THE SAME" CONDITION ✗. The value $33$ SUBTRACTS ALL FOUR ALL-SAME OUTCOMES, but three of them contain no $4$ ✗. The value $27$ IS THE COMPLEMENT, the outcomes with no $4$ ✗.)',
    },
    {
      q: 'Three dice — one red, one blue, one green — are rolled. How many of the $216$ possible outcomes include at least one $6$ and have exactly two of the three dice showing the same number?',
      choices: ['$30$', '$90$', '$15$', '$60$'],
      answer: 0,
      solution:
        'Route one, complement within the exactly-two-same outcomes. Outcomes with exactly two dice matching: choose the repeated value ($6$), the different value ($5$), and which die is the odd one ($3$), so $90$. Those with no $6$ at all: repeated value from $1$–$5$ ($5$), different value from the remaining four ($4$), odd die ($3$), so $60$. Subtract: $90 - 60 = 30$ ✓. Route two, casework on where the $6$ sits. Either the matching pair is a pair of $6$’s and the odd die shows one of $1$–$5$: $5$ values and $3$ positions for the odd die, $15$ outcomes. Or the odd die shows $6$ and the pair shows one of $1$–$5$: $5$ values and $3$ positions, $15$ outcomes. Sum $15 + 15 = 30$ ✓. (The value $90$ COUNTS EVERY EXACTLY-TWO-SAME OUTCOME, ignoring the $6$ ✗. The value $15$ COUNTS ONLY THE OUTCOMES WHOSE PAIR IS SIXES, missing a lone $6$ beside a different pair ✗. The value $60$ IS THE COMPLEMENT, the exactly-two-same outcomes with no $6$ ✗.)',
    },
  ],
  // s10 — every option used at least once.
  [
    {
      q: 'Six friends each pick one of three ice cream flavors: mint, mango, or fudge. In how many ways can they choose so that every flavor is picked by at least one friend?',
      choices: ['$537$', '$189$', '$540$', '$729$'],
      answer: 2,
      solution:
        'Route one, subtract the choices that miss a flavor. All choices: $3^6 = 729$. Choices avoiding a particular flavor: $2^6 = 64$, and there are three flavors, $192$ — but a choice avoiding two flavors (everyone picks the same one) was counted twice, once per missing flavor, and there are $3$ of those. Unwanted $= 192 - 3 = 189$, so $729 - 189 = 540$ ✓. Route two, casework on how the six friends split. Split $4, 1, 1$: choose the popular flavor ($3$), the four friends who pick it ($\\binom{6}{4} = 15$), and which of the last two friends gets which remaining flavor ($2$): $90$. Split $3, 2, 1$: assign the three sizes to the three flavors ($3! = 6$), choose the three friends ($\\binom{6}{3} = 20$), then the two ($\\binom{3}{2} = 3$): $360$. Split $2, 2, 2$: $\\binom{6}{2} \\binom{4}{2} = 15 \\cdot 6 = 90$. Sum $90 + 360 + 90 = 540$ ✓. (The value $537$ FORGETS THE ADD-BACK, subtracting $192$ without restoring the three unanimous choices ✗. The value $189$ IS THE COMPLEMENT, the choices missing some flavor ✗. The value $729$ IS THE TOTAL, ignoring the condition ✗.)',
    },
    {
      q: 'Five different balls are placed into $4$ boxes labeled $1$ through $4$, each ball into exactly one box. How many placements leave no box empty?',
      choices: ['$240$', '$244$', '$52$', '$120$'],
      answer: 0,
      solution:
        'Route one, inclusion–exclusion on the empty boxes. All placements: $4^5 = 1024$. Placements avoiding a particular box: $3^5 = 243$, times $4$ boxes, $972$. Avoiding two particular boxes: $2^5 = 32$, times $\\binom{4}{2} = 6$, $192$. Avoiding three: $1$, times $4$. Placements with at least one empty box: $972 - 192 + 4 = 784$, so $1024 - 784 = 240$ ✓. Route two, build the placement directly. Five balls into four nonempty boxes means exactly one box holds two balls and the other three hold one each. Choose the two balls that share: $\\binom{5}{2} = 10$. Now there are four bundles (the pair and three singles), and they go to the four labeled boxes one each: $4! = 24$. Total $10 \\cdot 24 = 240$ ✓. (The value $244$ FORGETS THE FINAL TERM, never subtracting the four placements that avoid three boxes ✗. The value $52$ STOPS AFTER SUBTRACTING THE SINGLE-BOX TERM, $1024 - 972$ ✗. The value $120$ SENDS THE BALLS OUT ONE BY ONE WITHOUT REPEATING A BOX, $5 \\cdot 4 \\cdot 3 \\cdot 2$, forgetting that the fifth ball also needs a box ✗.)',
    },
    {
      q: 'Five friends each pick one of three ice cream flavors: mint, mango, or fudge. In how many ways can they choose so that exactly one flavor is picked by nobody?',
      choices: ['$96$', '$93$', '$30$', '$90$'],
      answer: 3,
      solution:
        'Route one, choose the missing flavor and subtract the unanimous choices. The unpicked flavor can be any of $3$. The five friends then use only the other two flavors, $2^5 = 32$ ways, but the $2$ unanimous choices leave a second flavor unpicked and must be removed: $30$. Total $3 \\cdot 30 = 90$ ✓. Route two, casework on the head count. Choose the unpicked flavor ($3$ ways) and call the other two X and Y. The number of friends picking X is $1, 2, 3$, or $4$, since both X and Y need at least one: $\\binom{5}{1} + \\binom{5}{2} + \\binom{5}{3} + \\binom{5}{4} = 5 + 10 + 10 + 5 = 30$. Total $3 \\cdot 30 = 90$ ✓. (The value $96$ KEEPS THE UNANIMOUS CHOICES, in which two flavors are unpicked ✗. The value $93$ COUNTS CHOICES WITH AT LEAST ONE FLAVOR UNPICKED, the inclusion–exclusion total ✗. The value $30$ FORGETS TO CHOOSE WHICH FLAVOR IS MISSING ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 2, sections: { '2.3': s23 } }
