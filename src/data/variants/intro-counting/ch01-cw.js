// Counting & Probability chapter 1 — variations for the CHALLENGE set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - These are the hardest items in the chapter, so every stem settles its
//    conventions out loud (people are different, order matters in a row,
//    integers have no leading zero) before it asks anything.
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: shift-and-divide
//    vs. splitting the list at zero (slot 1); a digit-by-digit product vs.
//    stripping leading zeros from a larger count (slot 2); inclusion-exclusion
//    vs. a sieve or disjoint blocks (slot 3); complement vs. place-by-place
//    inclusion-exclusion (slot 4); listing digit multisets vs. counting
//    deficits from 9 (slot 5); the overlap formula vs. two disjoint blocks
//    (slot 6); blocks vs. filling seats left to right or a symmetry (slot 7);
//    gap placement vs. patterns or a complement (slot 8); digit sets vs.
//    casework on the hundreds digit (slot 9); a swap symmetry vs. choosing
//    positions (slot 10); placing restricted digits vs. a complement (slot 11);
//    casework on the units digit vs. a complement or a front-pair count
//    (slot 12).
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.

const challenge = [
  // slot 1 — arithmetic lists that cross zero. Route two splits the list at
  // zero and counts the two halves separately.
  // Lane: negative start / multiples on a number line / reversed, find the end.
  [
    {
      q: 'How many numbers are in the list $-13, -9, -5, \\ldots, 87$?',
      choices: ['$25$', '$100$', '$22$', '$26$'],
      answer: 3,
      solution:
        'The list climbs by $4$ each time. Add $13$ to every entry to get $0, 4, 8, \\ldots, 100$, then divide every entry by $4$ to get $0, 1, 2, \\ldots, 25$, which has $26$ members ✓. Check a second, independent way by splitting the list at zero. The negative entries are $-13, -9, -5, -1$, four of them; the next entry is $3$, and the positive entries $3, 7, 11, \\ldots, 87$ number $\\frac{87 - 3}{4} + 1 = 22$. No entry is $0$, so the list has $4 + 22 = 26$ numbers ✓. (The choice $25$ is COUNTING THE GAPS $\\frac{100}{4}$ instead of the posts ✗; the choice $100$ is REPORTING THE SHIFTED LAST ENTRY $87 + 13$ as though it were a count ✗; the choice $22$ is COUNTING ONLY THE POSITIVE ENTRIES and dropping the four negative ones ✗.)',
    },
    {
      q: 'A number line has a dot at every multiple of $7$ from $-63$ to $105$, inclusive (so $0$ gets a dot too). How many dots are there?',
      choices: ['$24$', '$25$', '$168$', '$15$'],
      answer: 1,
      solution:
        'Divide every dotted number by $7$: the dots sit at $-9, -8, -7, \\ldots, 15$, a list of consecutive integers with $15 - (-9) + 1 = 25$ members ✓. Check a second, independent way by counting the three parts separately. The negative dots $-63, -56, \\ldots, -7$ are the negatives of the first $9$ positive multiples of $7$, so there are $9$ of them; the number $0$ gets one dot; the positive dots $7, 14, \\ldots, 105$ number $\\frac{105}{7} = 15$. Total $9 + 1 + 15 = 25$ ✓. (The choice $24$ is COUNTING THE GAPS $\\frac{105 - (-63)}{7}$ rather than the dots ✗; the choice $168$ is REPORTING THE LENGTH OF THE INTERVAL, never dividing by the spacing ✗; the choice $15$ is COUNTING ONLY THE POSITIVE MULTIPLES and ignoring $0$ and the negatives ✗.)',
    },
    {
      q: 'The list $-11, -7, -3, \\ldots$ climbs by $4$ each time and contains exactly $30$ numbers. What is the last number in the list?',
      choices: ['$105$', '$109$', '$101$', '$120$'],
      answer: 0,
      solution:
        'A list of $30$ numbers has $29$ jumps after its first entry, so the last number is $-11 + 29 \\cdot 4 = -11 + 116 = 105$ ✓. Check a second, independent way by splitting the list at zero. The entries $-11, -7, -3$ are the only negative ones, three numbers, and the next entry is $1$. The remaining $30 - 3 = 27$ entries are $1, 5, 9, \\ldots$, and the $27$th of these is $1 + 26 \\cdot 4 = 105$ ✓. (The choice $109$ is USING $30$ JUMPS INSTEAD OF $29$, which lands one number past the end ✗; the choice $101$ is USING $28$ JUMPS, one number short ✗; the choice $120$ is MULTIPLYING $30 \\cdot 4$ AND FORGETTING THE STARTING VALUE entirely ✗.)',
    },
  ],
  // slot 2 — every digit from a restricted set, with the leading digit the
  // only place $0$ is refused. Route two counts the digit strings with leading
  // zeros allowed and then strips the ones that begin with $0$.
  // Lane: four digits all even / digits greater than 5 with digit sum a multiple of 3 / derived, even OR odd.
  [
    {
      q: 'How many four-digit positive integers have all four digits even?',
      choices: ['$625$', '$500$', '$4500$', '$256$'], answer: 1,
      solution:
        'The thousands digit must be even and nonzero: $2, 4, 6, 8$, so $4$ options. Each of the other three digits can be any of the $5$ even digits, $0$ included. Total $4 \\cdot 5 \\cdot 5 \\cdot 5 = 500$ ✓. Check a second, independent way by counting strings first. There are $5^4 = 625$ strings of four even digits if a leading $0$ is allowed. Those that begin with $0$ have three free even digits after it, $5^3 = 125$ strings, and they are exactly the strings that are not four-digit integers. That leaves $625 - 125 = 500$ ✓. (The choice $625$ is LETTING THE NUMBER START WITH $0$, counting all $5^4$ strings ✗; the choice $256$ is FORBIDDING $0$ IN EVERY POSITION, using $4^4$ ✗; the choice $4500$ is TAKING HALF OF ALL FOUR-DIGIT INTEGERS, as though an even number were the same thing as a number with even digits ✗.)',
    },
    {
      q: 'How many three-digit positive integers have every digit greater than $5$ and a digit sum that is a multiple of $3$?',
      choices: ['$21$', '$12$', '$20$', '$22$'],
      answer: 3,
      solution:
        'Every digit is $6$, $7$, $8$, or $9$. Sort them by remainder when divided by $3$: $6$ and $9$ leave $0$, $7$ leaves $1$, and $8$ leaves $2$. Three remainders add to a multiple of $3$ only when all three are the same or all three are different. All remainders $0$: each digit is $6$ or $9$, giving $2 \\cdot 2 \\cdot 2 = 8$ numbers. All remainders $1$: only $777$. All remainders $2$: only $888$. One of each remainder: the three remainders can be placed in the three positions in $3! = 6$ orders, and the remainder-$0$ position holds a $6$ or a $9$, so $6 \\cdot 2 = 12$ numbers. Total $8 + 1 + 1 + 12 = 22$ ✓. Check a second, independent way by choosing the first two digits freely and asking what the units digit must be. There are $4 \\cdot 4 = 16$ pairs for the hundreds and tens digits. If the pair’s sum is a multiple of $3$, the units digit must leave remainder $0$, so it has $2$ options ($6$ or $9$); otherwise the units digit must supply the one missing remainder, so it has exactly $1$ option ($7$ or $8$). The pairs whose sum is a multiple of $3$ are the four pairs from $\\{6, 9\\}$ together with $78$ and $87$, which is $6$ pairs; the other $10$ pairs are not. Total $6 \\cdot 2 + 10 \\cdot 1 = 22$ ✓. (The choice $20$ is LEAVING OUT $777$ AND $888$, the two numbers whose digits all leave the same nonzero remainder ✗; the choice $12$ is COUNTING THE MIXED CASE AS A SET, taking $7$, $8$, and a $6$ or $9$ in only $2$ ways instead of in $2 \\cdot 3! = 12$ orderings ✗; the choice $21$ is ASSUMING EXACTLY ONE THIRD OF THE $64$ NUMBERS WORK and rounding $\\frac{64}{3}$ down ✗.)',
    },
    {
      q: 'How many three-digit positive integers have all three digits even, or all three digits odd?',
      choices: ['$250$', '$200$', '$225$', '$125$'],
      answer: 2,
      solution:
        'No number is in both groups, so count each and add. All even: the hundreds digit is $2, 4, 6$, or $8$ and the other two digits are any of the $5$ even digits, $4 \\cdot 5 \\cdot 5 = 100$. All odd: every position has the $5$ odd digits available and $0$ is not odd, $5 \\cdot 5 \\cdot 5 = 125$. Total $100 + 125 = 225$ ✓. Check a second, independent way by starting from strings. Among the $1000$ three-character digit strings $000$ through $999$, exactly $5^3 = 125$ are all even and $5^3 = 125$ are all odd, $250$ in all. A string fails to be a three-digit integer only when it begins with $0$; an all-odd string never does, and an all-even string does in $5 \\cdot 5 = 25$ cases. So $250 - 25 = 225$ ✓. (The choice $250$ is COUNTING $5^3$ FOR BOTH GROUPS and letting even numbers begin with $0$ ✗; the choice $200$ is USING $4 \\cdot 5 \\cdot 5$ FOR THE ODD GROUP TOO, throwing away an odd hundreds digit for no reason ✗; the choice $125$ is COUNTING ONLY THE ALL-ODD GROUP ✗.)',
    },
  ],
  // slot 3 — three overlapping lists. Route two avoids the three-set formula:
  // a sieve that removes one list at a time, a listing by disjoint classes,
  // or the pairwise blocks with the third list excluded.
  // Lane: at least one of three / powers / derived, exactly two of three.
  [
    {
      q: 'How many integers from $1$ to $420$ are multiples of at least one of $5$, $6$, and $7$?',
      choices: ['$180$', '$214$', '$178$', '$176$'],
      answer: 0,
      solution:
        'The single lists have $\\frac{420}{5} = 84$, $\\frac{420}{6} = 70$, and $\\frac{420}{7} = 60$ members, adding to $214$. The pairwise overlaps are the multiples of $30$, $35$, and $42$: $14$, $12$, and $10$, so subtract $36$ to reach $178$. The multiples of $210$, the least common multiple of all three, were added three times and subtracted three times, so add the $2$ of them back: $180$ ✓. Check a second, independent way with a sieve that removes one list at a time and counts what survives. Remove the multiples of $5$: $420 - 84 = 336$ numbers remain. Among them, the multiples of $7$ that are not multiples of $5$ number $60 - 12 = 48$; remove them, leaving $288$. Among those, the multiples of $6$ that are multiples of neither $5$ nor $7$ number $70 - 14 - 10 + 2 = 48$; remove them, leaving $240$ numbers that are multiples of none. So $420 - 240 = 180$ are multiples of at least one ✓. (The choice $214$ is ADDING THE THREE LISTS AND NEVER SUBTRACTING an overlap ✗; the choice $178$ is STOPPING AFTER THE PAIRWISE SUBTRACTION, never restoring the multiples of $210$ ✗; the choice $176$ is SUBTRACTING THE TRIPLE OVERLAP instead of adding it back ✗.)',
    },
    {
      q: 'How many integers from $1$ to $1000$ are a perfect square, a perfect cube, or a perfect fifth power (or more than one of these)?',
      choices: ['$44$', '$39$', '$40$', '$41$'], answer: 2,
      solution:
        'Squares: $1^2$ through $31^2 = 961$, so $31$. Cubes: $1^3$ through $10^3 = 1000$, so $10$. Fifth powers: $1, 32, 243$, so $3$. A number that is both a square and a cube is a sixth power: $1, 64, 729$, so $3$. Both a square and a fifth power means a tenth power: only $1$, since $2^{10} = 1024$. Both a cube and a fifth power means a fifteenth power: only $1$. All three means a thirtieth power: only $1$. Inclusion-exclusion gives $31 + 10 + 3 - 3 - 1 - 1 + 1 = 40$ ✓. Check a second, independent way by sorting the numbers into classes that do not overlap. Take all $31$ squares. Then add the cubes that are not squares: of the ten cubes, $1$, $64$, and $729$ are squares, so $7$ new numbers ($8, 27, 125, 216, 343, 512, 1000$). Then add the fifth powers that are neither squares nor cubes: $32$ and $243$, since $1$ is already counted, so $2$ new numbers. Total $31 + 7 + 2 = 40$ ✓. (The choice $44$ is ADDING THE THREE LISTS AND IGNORING every overlap ✗; the choice $39$ is FORGETTING TO ADD BACK the number $1$ that all three lists share ✗; the choice $41$ is SUBTRACTING ONLY THE THREE SIXTH POWERS, missing every overlap that involves a fifth power ✗.)',
    },
    {
      q: 'How many integers from $1$ to $540$ are multiples of exactly two of the three numbers $4$, $6$, and $9$?',
      choices: ['$90$', '$45$', '$75$', '$60$'],
      answer: 1,
      solution:
        'The pairwise overlaps are the multiples of $\\text{lcm}(4, 6) = 12$, $\\text{lcm}(4, 9) = 36$, and $\\text{lcm}(6, 9) = 18$: $45$, $15$, and $30$ numbers, adding to $90$. A multiple of all three, that is a multiple of $36$, sits in every one of those three lists, and there are $15$ such numbers, so they were counted three times when they should be counted zero times. Exactly two: $90 - 3 \\cdot 15 = 45$ ✓. Check a second, independent way by building the three blocks directly, each with the third number excluded. Multiples of $12$ that are not multiples of $9$: $45 - 15 = 30$. Multiples of $36$ that are not multiples of $6$: none, because every multiple of $36$ is a multiple of $6$, so this block is empty. Multiples of $18$ that are not multiples of $4$: $30 - 15 = 15$. Total $30 + 0 + 15 = 45$ ✓. (The choice $90$ is ADDING THE THREE PAIRWISE LISTS and never removing the multiples of $36$ ✗; the choice $75$ is SUBTRACTING THE TRIPLE OVERLAP ONCE instead of three times ✗; the choice $60$ is SUBTRACTING IT TWICE, leaving each multiple of $36$ counted once ✗.)',
    },
  ],
  // slot 4 — a digit that must appear. Route two counts by place value with
  // inclusion-exclusion, or by casework on the leading digit, never by the
  // complement the first route uses.
  // Lane: digit 4 up to 700 / a 6 or a 7 / derived, a digit exactly twice.
  [
    {
      q: 'How many integers from $1$ to $700$ contain the digit $4$ at least once?',
      choices: ['$240$', '$215$', '$214$', '$213$'],
      answer: 2,
      solution:
        'Count the numbers with no $4$. Write every number from $0$ to $699$ as three digits with leading zeros allowed: the hundreds digit is one of $0, 1, 2, 3, 5, 6$ ($6$ options), and each of the other two digits has $9$ non-$4$ options, giving $6 \\cdot 9 \\cdot 9 = 486$ strings, one of which is $000$. Then $700$ itself has no $4$. So among $1$ to $700$ there are $485 + 1 = 486$ numbers with no $4$, and $700 - 486 = 214$ contain one ✓. Check a second, independent way by place value. Numbers from $1$ to $700$ with $4$ as the hundreds digit: $400$ to $499$, $100$ of them. With $4$ as the tens digit: $40$ to $49$, $140$ to $149$, and so on up to $640$ to $649$, $7 \\cdot 10 = 70$. With $4$ as the units digit: $4, 14, \\ldots, 694$, also $70$. Adding gives $240$, but numbers with two $4$s were counted twice: hundreds and tens ($440$ to $449$): $10$; hundreds and units ($404, 414, \\ldots, 494$): $10$; tens and units ($44, 144, \\ldots, 644$): $7$. Subtracting $27$ leaves $213$, and $444$, removed three times after being added three times, goes back once: $214$ ✓. (The choice $240$ is ADDING THE THREE PLACE COUNTS and never removing a double count ✗; the choice $215$ is FORGETTING THAT $700$ ITSELF HAS NO $4$, using $485$ as the complement ✗; the choice $213$ is NEVER ADDING $444$ BACK after subtracting it three times ✗.)',
    },
    {
      q: 'How many three-digit positive integers contain at least one digit $6$ or at least one digit $7$?',
      choices: ['$452$', '$448$', '$504$', '$252$'],
      answer: 0,
      solution:
        'Count the three-digit numbers with no $6$ and no $7$. The hundreds digit has $7$ options ($1, 2, 3, 4, 5, 8, 9$) and each of the other two digits has $8$ options, so $7 \\cdot 8 \\cdot 8 = 448$. Of the $900$ three-digit numbers, $900 - 448 = 452$ contain a $6$ or a $7$ ✓. Check a second, independent way by casework on the hundreds digit. If the hundreds digit is $6$ or $7$ ($2$ ways), every one of the $100$ tails works: $200$ numbers. If the hundreds digit is one of the other $7$ nonzero digits, the two-digit tail $00$ through $99$ must contain a $6$ or a $7$; the tails with neither have $8 \\cdot 8 = 64$ options, so $100 - 64 = 36$ tails work, giving $7 \\cdot 36 = 252$. Total $200 + 252 = 452$ ✓. (The choice $448$ is REPORTING THE COMPLEMENT, the numbers with neither digit ✗; the choice $504$ is ADDING THE $252$ NUMBERS WITH A $6$ TO THE $252$ WITH A $7$ and never removing those with both ✗; the choice $252$ is FORBIDDING ONLY ONE OF THE TWO DIGITS in the complement ✗.)',
    },
    {
      q: 'How many integers from $1$ to $500$ contain the digit $2$ exactly twice?',
      choices: ['$21$', '$27$', '$23$', '$22$'],
      answer: 3,
      solution:
        'Split by the hundreds digit. With no hundreds digit, the only two-digit candidate is $22$: $1$ number. Hundreds digit $2$: the tens and units digits must contain exactly one more $2$; either the tens digit is $2$ and the units digit is one of the $9$ other digits, or the units digit is $2$ and the tens digit is one of the $9$ others, so $18$ numbers. Hundreds digit $1$, $3$, or $4$: both remaining digits must be $2$, giving $122$, $322$, $422$: $3$ numbers. The number $500$ has no $2$. Total $1 + 18 + 3 = 22$ ✓. Check a second, independent way by choosing positions. Write each number from $000$ to $499$ as a three-digit string. Choose which two of the three positions hold the $2$s ($3$ ways), and fill the remaining position with a non-$2$ digit: if the free position is the hundreds place, it may be $0, 1, 3$, or $4$ ($4$ options, since the string must stay below $500$); if the free position is the tens or the units place, the hundreds digit is already $2$ and the free digit has $9$ options. That gives $4 + 9 + 9 = 22$ strings, none of which is $000$, and $500$ adds nothing ✓. (The choice $21$ is FORGETTING THE TWO-DIGIT NUMBER $22$ ✗; the choice $27$ is IGNORING THE CAP OF $500$ and allowing every hundreds digit from $1$ to $9$ ✗; the choice $23$ is INCLUDING $222$, which has three $2$s, not exactly two ✗.)',
    },
  ],
  // slot 5 — digit sums near the maximum. Route two replaces each digit by its
  // deficit from 9 and counts small deficit totals, which never lists a
  // single digit multiset.
  // Lane: three digits, sum at least 24 / four digits, sum at least 33 /
  // derived, sum exactly 21.
  [
    {
      q: 'How many three-digit positive integers have a digit sum of $24$ or more?',
      choices: ['$19$', '$20$', '$14$', '$17$'],
      answer: 1,
      solution:
        'The largest possible sum is $27$, so split by sum. Sum $27$: only $999$. Sum $26$: two $9$s and an $8$, with $3$ positions for the $8$. Sum $25$: two $9$s and a $7$ ($3$ orders) or a $9$ with two $8$s ($3$ orders), $6$ in all. Sum $24$: two $9$s and a $6$ ($3$ orders), or $9, 8, 7$ all different ($3! = 6$ orders), or $888$ ($1$ order), $10$ in all. Total $1 + 3 + 6 + 10 = 20$ ✓. Check a second, independent way by counting deficits. Write each digit as $9$ minus a deficit; a digit sum of at least $24$ means the three deficits add to at most $3$, and every such digit is at least $6$, so the hundreds digit is never $0$. Ordered triples of deficits with total $0$: $1$; total $1$: $3$ (which position carries it); total $2$: $6$ (one position carries $2$, $3$ ways, or two positions carry $1$ each, $3$ ways); total $3$: $10$ (one position carries $3$: $3$ ways; a $2$ and a $1$: $6$ ways; three $1$s: $1$ way). Total $1 + 3 + 6 + 10 = 20$ ✓. (The choice $19$ is FORGETTING $888$, the only number with three equal digits at sum $24$ ✗; the choice $14$ is DROPPING THE PATTERN $9, 8, 7$ with its six orders ✗; the choice $17$ is DROPPING THE PATTERN $9, 8, 8$ at sum $25$ ✗.)',
    },
    {
      q: 'How many four-digit positive integers have a digit sum of $33$ or more?',
      choices: ['$31$', '$29$', '$15$', '$35$'],
      answer: 3,
      solution:
        'The largest sum is $36$. Sum $36$: only $9999$. Sum $35$: three $9$s and an $8$, $4$ positions. Sum $34$: three $9$s and a $7$ ($4$ orders) or two $9$s and two $8$s ($\\binom{4}{2} = 6$ orders), $10$ in all. Sum $33$: three $9$s and a $6$ ($4$ orders), or two $9$s with an $8$ and a $7$ ($4 \\cdot 3 = 12$ orders, choosing the positions of the $8$ and the $7$), or one $9$ and three $8$s ($4$ orders), $20$ in all. Total $1 + 4 + 10 + 20 = 35$ ✓. Check a second, independent way by counting deficits. Replace each digit by $9$ minus the digit; the sum is at least $33$ exactly when the four deficits total at most $3$, and every digit is then at least $6$, so no leading zero can occur. Deficit total $0$: $1$ way. Total $1$: $4$ ways. Total $2$: a single $2$ ($4$ ways) or two $1$s ($6$ ways), $10$. Total $3$: a single $3$ ($4$), a $2$ and a $1$ ($4 \\cdot 3 = 12$), three $1$s ($4$), $20$. Total $1 + 4 + 10 + 20 = 35$ ✓. (The choice $31$ is FORGETTING THE PATTERN $9, 8, 8, 8$ at sum $33$ ✗; the choice $29$ is FORGETTING THE PATTERN $9, 9, 8, 8$ at sum $34$ ✗; the choice $15$ is STOPPING AT SUM $34$ and never counting sum $33$ ✗.)',
    },
    {
      q: 'How many three-digit positive integers have a digit sum of exactly $21$?',
      choices: ['$27$', '$25$', '$28$', '$22$'],
      answer: 2,
      solution:
        'List the multisets of three digits (each at most $9$) with sum $21$, then count their orders. With a $9$: $\\{9, 9, 3\\}$ ($3$ orders), $\\{9, 8, 4\\}$ ($6$), $\\{9, 7, 5\\}$ ($6$), $\\{9, 6, 6\\}$ ($3$). Largest digit $8$: $\\{8, 8, 5\\}$ ($3$), $\\{8, 7, 6\\}$ ($6$). Largest digit $7$: $\\{7, 7, 7\\}$ ($1$). No digit is $0$, so every order is a three-digit integer. Total $3 + 6 + 6 + 3 + 3 + 6 + 1 = 28$ ✓. Check a second, independent way by counting deficits. Write each digit as $9$ minus a deficit; a sum of $21$ means the three deficits add to exactly $6$, and no deficit can exceed $6$, so the cap of $9$ never interferes and every digit is at least $3$. Count ordered triples of nonnegative integers adding to $6$ by the first deficit: if it is $0$, the other two add to $6$ in $7$ ways; if $1$, in $6$ ways; and so on down to $6$, in $1$ way. Total $7 + 6 + 5 + 4 + 3 + 2 + 1 = 28$ ✓. (The choice $27$ is FORGETTING $777$ ✗; the choice $25$ is FORGETTING THE MULTISET $\\{9, 6, 6\\}$ ✗; the choice $22$ is DROPPING ONE OF THE THREE-DIFFERENT-DIGIT MULTISETS, which costs six orders ✗.)',
    },
  ],
  // slot 6 — "or, but not both." Route two never subtracts an overlap twice:
  // it builds the two (or three) disjoint blocks and adds them.
  // Lane: 4 or 6 up to 600 / 3 or 8 among three-digit numbers / derived,
  // exactly one of three.
  [
    {
      q: 'How many integers from $1$ to $600$ are divisible by $4$ or by $6$, but not by both?',
      choices: ['$200$', '$250$', '$100$', '$150$'],
      answer: 3,
      solution:
        'Divisible by $4$: $150$. Divisible by $6$: $100$. Divisible by both, that is by $12$: $50$. The plain sum $250$ counts each multiple of $12$ twice, and the problem wants it counted zero times, so subtract the overlap twice: $250 - 100 = 150$ ✓. Check a second, independent way with two disjoint blocks. Multiples of $4$ that are not multiples of $12$: $150 - 50 = 100$. Multiples of $6$ that are not multiples of $12$: $100 - 50 = 50$. No number is in both blocks, so the answer is $100 + 50 = 150$ ✓. (The choice $200$ is SUBTRACTING THE OVERLAP ONLY ONCE, which counts "divisible by $4$ or $6$" and keeps the multiples of $12$ ✗; the choice $250$ is ADDING THE TWO LISTS and never subtracting ✗; the choice $100$ is REPORTING ONLY THE FIRST BLOCK, the multiples of $4$ that are not multiples of $12$ ✗.)',
    },
    {
      q: 'How many three-digit positive integers are divisible by $3$ or by $8$, but not by both?',
      choices: ['$412$', '$338$', '$375$', '$301$'],
      answer: 1,
      solution:
        'Three-digit multiples of $3$ run from $102$ to $999$: $\\frac{999 - 102}{3} + 1 = 300$. Multiples of $8$ run from $104$ to $992$: $\\frac{992 - 104}{8} + 1 = 112$. Multiples of both, that is of $24$, run from $120$ to $984$: $\\frac{984 - 120}{24} + 1 = 37$. Subtract the overlap twice from the plain sum: $300 + 112 - 2 \\cdot 37 = 338$ ✓. Check a second, independent way with disjoint blocks. Multiples of $3$ that are not multiples of $24$: $300 - 37 = 263$. Multiples of $8$ that are not multiples of $24$: $112 - 37 = 75$. The blocks share nothing, so $263 + 75 = 338$ ✓. (The choice $412$ is ADDING THE TWO LISTS and never subtracting ✗; the choice $375$ is SUBTRACTING THE OVERLAP ONCE, which still includes the multiples of $24$ ✗; the choice $301$ is SUBTRACTING THE OVERLAP THREE TIMES ✗.)',
    },
    {
      q: 'How many integers from $1$ to $420$ are divisible by exactly one of the three numbers $3$, $5$, and $7$?',
      choices: ['$176$', '$224$', '$168$', '$164$'], answer: 0,
      solution:
        'The single lists have $140$, $84$, and $60$ members, adding to $284$. The pairwise lists are the multiples of $15$, $21$, and $35$: $28$, $20$, and $12$, adding to $60$, and there are $4$ multiples of $105$. A number in exactly two lists appears twice in the $284$ and once in the $60$, so subtracting $2 \\cdot 60$ removes it; a number in all three appears three times in the $284$ and three times in the $60$, so after that subtraction it stands at $3 - 6 = -3$ and needs $3$ added back for each of the $4$ such numbers. Exactly one: $284 - 120 + 12 = 176$ ✓. Check a second, independent way with three disjoint blocks. Multiples of $3$ that are multiples of neither $5$ nor $7$: $140 - 28 - 20 + 4 = 96$. Multiples of $5$ that are multiples of neither $3$ nor $7$: $84 - 28 - 12 + 4 = 48$. Multiples of $7$ that are multiples of neither $3$ nor $5$: $60 - 20 - 12 + 4 = 32$. Total $96 + 48 + 32 = 176$ ✓. (The choice $164$ is NEVER ADDING BACK THE MULTIPLES OF $105$ after subtracting them too often ✗; the choice $224$ is SUBTRACTING THE PAIRWISE LISTS ONLY ONCE, which leaves every number in two lists counted once and every number in all three counted once ✗; the choice $168$ is ADDING BACK EACH MULTIPLE OF $105$ ONCE instead of three times ✗.)',
    },
  ],
  // slot 7 — couples and pairs that must stay together. Route two never glues
  // a block: it fills the row seat by seat, or uses a symmetry across the
  // couples.
  // Lane: five couples / three subject pairs / derived, a named couple pinned
  // at one end.
  [
    {
      q: 'Five married couples, ten different people, stand in a row of $10$ for a photograph. Each couple must stand together, side by side. How many arrangements are possible?',
      choices: ['$120$', '$1200$', '$3840$', '$3{,}628{,}800$'],
      answer: 2,
      solution:
        'Glue each couple into a block. The five blocks can be ordered in $5! = 120$ ways, and inside each block the two partners can swap, giving $2$ choices per couple and $2^5 = 32$ overall. Total $120 \\cdot 32 = 3840$ ✓. Check a second, independent way by filling the row from the left. The leftmost spot can be any of the $10$ people, and then the second spot must be that person’s partner, $1$ choice. The third spot can be any of the $8$ people left, and the fourth must be that person’s partner. Continuing, the free choices are $10, 8, 6, 4, 2$ and everything else is forced: $10 \\cdot 8 \\cdot 6 \\cdot 4 \\cdot 2 = 3840$ ✓. (The choice $120$ is FORGETTING THE SWAPS INSIDE THE BLOCKS ✗; the choice $1200$ is MULTIPLYING BY $2 \\cdot 5 = 10$ INSTEAD OF $2^5$, as though the couples shared one swap decision ✗; the choice $3{,}628{,}800$ is $10!$, IGNORING THE COUPLES ENTIRELY ✗.)',
    },
    {
      q: 'Six different books, two on math, two on science, and two on history, are placed on a shelf in a row. The two books on each subject must be next to each other. How many shelvings are possible?',
      choices: ['$48$', '$720$', '$36$', '$6$'], answer: 0,
      solution:
        'Glue each subject’s pair into a block. The three blocks can be ordered in $3! = 6$ ways, and inside each block the two books can swap, $2^3 = 8$ ways in all. Total $6 \\cdot 8 = 48$ ✓. Check a second, independent way by filling the shelf from the left. The leftmost spot takes any of the $6$ books; the second spot must take the other book on that subject, $1$ choice. The third spot takes any of the $4$ books left, and the fourth is forced. The fifth takes either of the $2$ remaining books and the sixth is forced. Total $6 \\cdot 4 \\cdot 2 = 48$ ✓. (The choice $6$ is ORDERING THE BLOCKS AND FORGETTING THE SWAPS inside them ✗; the choice $720$ is $6!$, IGNORING THE SUBJECT CONDITION ✗; the choice $36$ is MULTIPLYING BY $2 \\cdot 3 = 6$ INSTEAD OF $2^3$ for the swaps ✗.)',
    },
    {
      q: 'Four married couples, eight different people including the Novak couple, stand in a row of $8$. Each couple must stand together, side by side, and the Novak couple must occupy the two leftmost spots. How many arrangements are possible?',
      choices: ['$48$', '$12$', '$384$', '$96$'], answer: 3,
      solution:
        'The Novaks fill the two leftmost spots in $2$ orders. The other three couples become three blocks in the remaining six spots: $3! = 6$ orders of blocks, and $2^3 = 8$ ways to arrange the partners inside them. Total $2 \\cdot 6 \\cdot 8 = 96$ ✓. Check a second, independent way with a symmetry. With no condition on who stands left, four couples stand together in $4! \\cdot 2^4 = 24 \\cdot 16 = 384$ ways. In every one of those arrangements exactly one couple occupies the two leftmost spots, and swapping the names of two couples throughout turns arrangements led by one couple into arrangements led by the other, so each of the $4$ couples leads equally often: $\\frac{384}{4} = 96$ ✓. (The choice $48$ is FORGETTING THAT THE NOVAKS CAN SWAP with each other ✗; the choice $384$ is IGNORING THE CONDITION ON THE NOVAKS altogether ✗; the choice $12$ is MULTIPLYING THE BLOCK ORDERS BY A SINGLE SWAP, $3! \\cdot 2$, instead of one swap per couple ✗.)',
    },
  ],
  // slot 8 — girls kept apart, or forced together. Route two never places
  // the boys first: it chooses positions, counts letter patterns, or removes
  // the forbidden cases from a total.
  // Lane: five boys three girls / two boys with two girls between / derived,
  // at least two girls adjacent.
  [
    {
      q: 'Five boys and three girls, all different people, stand in a row of $8$ so that no two girls stand next to each other. How many arrangements are possible?',
      choices: ['$14{,}400$', '$2400$', '$2880$', '$36{,}000$'],
      answer: 0,
      solution:
        'Place the boys first: $5! = 120$ orders. A row of five boys has $6$ slots for a girl, before the first boy, between neighbors, and after the last, and putting the three girls in three different slots is exactly what keeps them apart. The girls are different people, so the slots are chosen in order: $6 \\cdot 5 \\cdot 4 = 120$. Total $120 \\cdot 120 = 14{,}400$ ✓. Check a second, independent way by choosing the girls’ positions in the row of $8$ first. A set of three positions from $1$ to $8$ with no two consecutive: subtract $0, 1, 2$ from the three positions in increasing order and they become three different positions from $1$ to $6$ with no restriction, and the process reverses, so there are $\\binom{6}{3} = 20$ such sets. The three girls fill a chosen set in $3! = 6$ ways and the boys fill the other five spots in $5! = 120$ ways: $20 \\cdot 6 \\cdot 120 = 14{,}400$ ✓. (The choice $2400$ is TREATING THE GIRLS AS INTERCHANGEABLE, using $20$ slot choices instead of $120$ ✗; the choice $2880$ is FORGETTING THE TWO END SLOTS, using $4 \\cdot 3 \\cdot 2$ ✗; the choice $36{,}000$ is $8! - 6! \\cdot 3!$, which only stops the three girls from forming a single block and still lets two of them touch ✗.)',
    },
    {
      q: 'Five girls and two boys, all different people, stand in a row of $7$ so that at least two girls stand between the two boys. How many arrangements are possible?',
      choices: ['$3600$', '$1200$', '$2400$', '$960$'],
      answer: 2,
      solution:
        'Choose the boys’ positions first. Two positions from $1$ to $7$ with at least two spots between them differ by at least $3$: position $1$ pairs with $4, 5, 6, 7$ ($4$ ways), position $2$ with $5, 6, 7$ ($3$), position $3$ with $6, 7$ ($2$), position $4$ with $7$ ($1$), so $10$ pairs of positions. The two boys fill a chosen pair in $2$ orders, and the five girls fill the other five spots in $5! = 120$ ways. Total $10 \\cdot 2 \\cdot 120 = 2400$ ✓. Check a second, independent way by removing the forbidden cases from the $7! = 5040$ arrangements. The boys stand side by side in $2 \\cdot 6! = 1440$ arrangements. Exactly one girl stands between them in $5 \\cdot 2 \\cdot 5 \\cdot 4! = 1200$ arrangements: $5$ places for the boy-girl-boy trio, $2$ orders for the boys, $5$ choices of the girl in the middle, $4!$ orders for the other girls. Everything else has at least two girls between the boys: $5040 - 1440 - 1200 = 2400$ ✓. (The choice $3600$ is COUNTING EVERY ARRANGEMENT WHERE THE BOYS ARE NOT ADJACENT, allowing a single girl between them ✗; the choice $1200$ is FORGETTING THAT THE TWO BOYS CAN SWAP ✗; the choice $960$ is REQUIRING EXACTLY TWO GIRLS BETWEEN THEM, using only the $4$ position pairs that differ by $3$ ✗.)',
    },
    {
      q: 'Four boys and four girls, all different people, stand in a row of $8$. In how many arrangements do at least two girls stand next to each other?',
      choices: ['$2880$', '$37{,}440$', '$39{,}168$', '$34{,}560$'],
      answer: 1,
      solution:
        'Count the opposite and subtract. Arrangements with no two girls adjacent: place the boys, $4! = 24$ ways, then put the four girls into four different ones of the $5$ slots around the boys, $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$ ways, so $24 \\cdot 120 = 2880$. All arrangements: $8! = 40{,}320$. So $40{,}320 - 2880 = 37{,}440$ have at least two girls adjacent ✓. Check a second, independent way through boy-girl patterns, never using $8!$. Write each arrangement as a pattern of four B’s and four G’s; there are $\\binom{8}{4} = 70$ patterns. A pattern with no two G’s adjacent needs the four G’s in four different ones of the $5$ gaps around the B’s, so there are $\\binom{5}{4} = 5$ such patterns, leaving $65$ patterns in which some GG appears. Each pattern is filled by the four boys in $4!$ ways and the four girls in $4!$ ways, $576$ fillings, so $65 \\cdot 576 = 37{,}440$ ✓. (The choice $2880$ is REPORTING THE COMPLEMENT, the arrangements with no two girls adjacent ✗; the choice $39{,}168$ is SUBTRACTING ONLY THE TWO ALTERNATING PATTERNS, $2 \\cdot 4! \\cdot 4!$, and missing the other three patterns that keep the girls apart ✗; the choice $34{,}560$ is SUBTRACTING THE COMPLEMENT TWICE ✗.)',
    },
  ],
  // slot 9 — digit products. Route two never lists a multiset: it fixes the
  // hundreds digit (or asks whether a particular digit appears) and counts
  // the tails whose product finishes the job.
  // Lane: product 24 / four digits, product 6 / derived, product 72.
  [
    {
      q: 'How many three-digit positive integers have digits whose product is $24$?',
      choices: ['$24$', '$21$', '$18$', '$15$'],
      answer: 1,
      solution:
        'List the multisets of three digits from $1$ to $9$ with product $24$ (no digit can be $0$): $\\{1, 3, 8\\}$, $\\{1, 4, 6\\}$, $\\{2, 3, 4\\}$, each with $3! = 6$ orders, and $\\{2, 2, 6\\}$, with $3$ orders, one for each position of the $6$. Total $6 + 6 + 6 + 3 = 21$ ✓. Check a second, independent way by casework on the hundreds digit $h$, counting ordered pairs (tens, units) whose product is $\\frac{24}{h}$. $h = 1$: product $24$ from $(3, 8), (4, 6), (6, 4), (8, 3)$: $4$. $h = 2$: product $12$ from $(2, 6), (3, 4), (4, 3), (6, 2)$: $4$. $h = 3$: product $8$ from $(1, 8), (2, 4), (4, 2), (8, 1)$: $4$. $h = 4$: product $6$ from $(1, 6), (2, 3), (3, 2), (6, 1)$: $4$. $h = 6$: product $4$ from $(1, 4), (2, 2), (4, 1)$: $3$. $h = 8$: product $3$ from $(1, 3), (3, 1)$: $2$. The digits $5, 7, 9$ do not divide $24$. Total $4 + 4 + 4 + 4 + 3 + 2 = 21$ ✓. (The choice $24$ is TREATING $\\{2, 2, 6\\}$ AS THREE DIFFERENT DIGITS and giving it six orders ✗; the choice $18$ is FORGETTING THE MULTISET $\\{2, 2, 6\\}$ ✗; the choice $15$ is FORGETTING THE MULTISET $\\{1, 3, 8\\}$ ✗.)',
    },
    {
      q: 'How many four-digit positive integers have digits whose product is $6$?',
      choices: ['$8$', '$28$', '$12$', '$16$'], answer: 3,
      solution:
        'No digit can be $0$. The multisets of four digits with product $6$ are $\\{1, 1, 1, 6\\}$, with $4$ orders (the position of the $6$), and $\\{1, 1, 2, 3\\}$, with $4 \\cdot 3 = 12$ orders (a position for the $2$, then one for the $3$). Total $4 + 12 = 16$ ✓. Check a second, independent way by asking whether the digit $6$ appears. If it does, the other three digits multiply to $1$ and are all $1$, so the number is determined by where the $6$ sits: $4$ numbers. If no digit is $6$, the factor $3$ must come from a single digit $3$ (a $9$ would make the product at least $9$), so exactly one digit is $3$; the other three digits multiply to $2$, so exactly one of them is $2$ and the rest are $1$. Choose the position of the $3$ ($4$ ways) and then of the $2$ ($3$ ways): $12$ numbers. Total $4 + 12 = 16$ ✓. (The choice $28$ is GIVING $\\{1, 1, 2, 3\\}$ ALL $4! = 24$ ORDERS, as though the two $1$s were different ✗; the choice $12$ is FORGETTING THE MULTISET $\\{1, 1, 1, 6\\}$ ✗; the choice $8$ is GIVING $\\{1, 1, 2, 3\\}$ ONLY $4$ ORDERS, placing the $2$ and forgetting to place the $3$ ✗.)',
    },
    {
      q: 'How many three-digit positive integers have digits whose product is $72$?',
      choices: ['$30$', '$21$', '$24$', '$18$'], answer: 2,
      solution:
        'List the multisets of three digits from $1$ to $9$ with product $72$. Containing a $9$: $\\{1, 8, 9\\}$ and $\\{2, 4, 9\\}$, $6$ orders each. Largest digit $8$: $\\{3, 3, 8\\}$, $3$ orders. Largest digit $6$: $\\{2, 6, 6\\}$, $3$ orders, and $\\{3, 4, 6\\}$, $6$ orders. No multiset has largest digit $4$ or less, since $4 \\cdot 4 \\cdot 4 < 72$. Total $6 + 6 + 3 + 3 + 6 = 24$ ✓. Check a second, independent way by casework on the hundreds digit $h$, counting ordered pairs (tens, units) with product $\\frac{72}{h}$. $h = 1$: product $72$ from $(8, 9), (9, 8)$: $2$. $h = 2$: product $36$ from $(4, 9), (6, 6), (9, 4)$: $3$. $h = 3$: product $24$ from $(3, 8), (4, 6), (6, 4), (8, 3)$: $4$. $h = 4$: product $18$ from $(2, 9), (3, 6), (6, 3), (9, 2)$: $4$. $h = 6$: product $12$ from $(2, 6), (3, 4), (4, 3), (6, 2)$: $4$. $h = 8$: product $9$ from $(1, 9), (3, 3), (9, 1)$: $3$. $h = 9$: product $8$ from $(1, 8), (2, 4), (4, 2), (8, 1)$: $4$. The digits $5$ and $7$ do not divide $72$. Total $2 + 3 + 4 + 4 + 4 + 3 + 4 = 24$ ✓. (The choice $30$ is GIVING THE TWO REPEATED-DIGIT MULTISETS SIX ORDERS EACH ✗; the choice $21$ is FORGETTING THE MULTISET $\\{3, 3, 8\\}$ ✗; the choice $18$ is DROPPING ONE OF THE THREE-DIFFERENT-DIGIT MULTISETS ✗.)',
    },
  ],
  // slot 10 — one letter before another. Route two never uses the swap
  // symmetry: it chooses the positions of the restricted letters outright.
  // Lane: B before T / a chain of three runners / derived, before but not
  // adjacent.
  [
    {
      q: 'The seven letters of the word BLANKET are arranged in a row. In how many of the arrangements does the B appear somewhere to the left of the T (not necessarily next to it)?',
      choices: ['$5040$', '$1440$', '$720$', '$2520$'],
      answer: 3,
      solution:
        'There are $7! = 5040$ arrangements in all. Pair each arrangement with the one obtained by swapping the B and the T: every B-before-T arrangement is paired with exactly one T-before-B arrangement, so the two kinds are equally numerous, and the answer is $\\frac{5040}{2} = 2520$ ✓. Check a second, independent way by choosing positions. Pick the two positions that B and T will occupy, $\\binom{7}{2} = 21$ ways; B must take the left one of the pair and T the right one, so there is no further choice for them. The other five letters, all different, fill the remaining five positions in $5! = 120$ ways. Total $21 \\cdot 120 = 2520$ ✓. (The choice $5040$ is COUNTING EVERY ARRANGEMENT, ignoring the condition ✗; the choice $1440$ is $2 \\cdot 6!$, COUNTING ONLY ARRANGEMENTS WITH B AND T ADJACENT, in either order ✗; the choice $720$ is COUNTING ONLY ARRANGEMENTS WITH B IMMEDIATELY LEFT OF T ✗.)',
    },
    {
      q: 'Six runners, including Ada, Bo, and Cy, finish a race with no ties. In how many finishing orders does Ada finish ahead of Bo and Bo finish ahead of Cy (the three need not be consecutive)?',
      choices: ['$360$', '$120$', '$240$', '$24$'], answer: 1,
      solution:
        'There are $6! = 720$ finishing orders. Group them by which three positions Ada, Bo, and Cy occupy and where the other three runners finish: within each group the three named runners can be permuted among their three positions in $3! = 6$ ways, and exactly one of those six has Ada first, Bo second, Cy third among them. So the answer is $\\frac{720}{6} = 120$ ✓. Check a second, independent way by choosing positions. Choose the three finishing positions that Ada, Bo, and Cy will take, $\\binom{6}{3} = 20$ ways; they must fill those positions in the one allowed order, best position to Ada, worst to Cy. The other three runners fill the remaining three positions in $3! = 6$ ways. Total $20 \\cdot 6 = 120$ ✓. (The choice $360$ is HALVING ONLY ONCE, enforcing Ada ahead of Bo and forgetting Cy ✗; the choice $240$ is DIVIDING BY $3$ INSTEAD OF $3!$, as though only three orders of the trio were possible ✗; the choice $24$ is FORCING THE THREE TO FINISH CONSECUTIVELY, gluing them into one block ✗.)',
    },
    {
      q: 'The six letters of the word TURKEY are arranged in a row. In how many of the arrangements is the T somewhere to the left of the U, but not immediately next to it?',
      choices: ['$240$', '$120$', '$480$', '$360$'], answer: 0,
      solution:
        'By the swap symmetry, T is left of U in half of the $6! = 720$ arrangements, that is $360$. Among these, T is immediately left of U when the pair TU acts as one block among the other four letters, $5! = 120$ arrangements. Remove them: $360 - 120 = 240$ ✓. Check a second, independent way by choosing positions. The positions of T and U must be a pair $(i, j)$ with $j - i \\ge 2$: position $1$ for T allows U in $3, 4, 5, 6$ ($4$ ways), position $2$ allows $4, 5, 6$ ($3$), position $3$ allows $5, 6$ ($2$), position $4$ allows $6$ ($1$), so $10$ pairs. The other four letters fill the remaining four positions in $4! = 24$ ways. Total $10 \\cdot 24 = 240$ ✓. (The choice $360$ is COUNTING EVERY ARRANGEMENT WITH T LEFT OF U, including the adjacent ones ✗; the choice $120$ is REPORTING THE ADJACENT CASE that should have been removed ✗; the choice $480$ is REMOVING THE ADJACENT PAIRS FROM ALL $720$ ARRANGEMENTS and never halving ✗.)',
    },
  ],
  // slot 11 — distinct digits with two required members. Route two never
  // places a required digit: it counts by complement inside a restricted
  // digit set.
  // Lane: five digits with 0 and 5 / letters with A and B / derived, 0 in,
  // 9 out.
  [
    {
      q: 'How many five-digit positive integers have five different digits and contain both the digit $0$ and the digit $5$?',
      choices: ['$6720$', '$4032$', '$5376$', '$1344$'],
      answer: 2,
      solution:
        'Place the restricted digit first. The $0$ cannot lead, so it takes one of the $4$ non-leading positions. The $5$ then takes any of the $4$ remaining positions. The last three positions are filled with three different digits from the $8$ digits other than $0$ and $5$: $8 \\cdot 7 \\cdot 6 = 336$ ways. Total $4 \\cdot 4 \\cdot 336 = 5376$ ✓. Check a second, independent way by complement. Five-digit integers with five different digits that contain a $0$: all such integers number $9 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 27{,}216$, and those with no $0$ number $9 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5 = 15{,}120$, so $12{,}096$ contain a $0$. Now those that contain a $0$ but no $5$: using only the nine digits other than $5$, the distinct-digit five-digit integers number $8 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5 = 13{,}440$, and those with no $0$ either (digits $1$–$4$, $6$–$9$) number $8 \\cdot 7 \\cdot 6 \\cdot 5 \\cdot 4 = 6720$, so $6720$ contain a $0$ but no $5$. Containing both: $12{,}096 - 6720 = 5376$ ✓. (The choice $6720$ is LETTING THE $0$ TAKE ANY OF THE $5$ POSITIONS, including the lead ✗; the choice $4032$ is GIVING THE $5$ ONLY $3$ POSITIONS, as though the lead were closed to it too ✗; the choice $1344$ is PLACING THE $0$ AND FORGETTING TO PLACE THE $5$, multiplying $4 \\cdot 336$ ✗.)',
    },
    {
      q: 'How many four-letter strings of four different letters chosen from A, B, C, D, E, F, G, H contain both the letter A and the letter B?',
      choices: ['$360$', '$1680$', '$180$', '$840$'],
      answer: 0,
      solution:
        'Place the required letters first. A takes any of the $4$ positions and B any of the remaining $3$. The other two positions are filled with two different letters from the $6$ letters C through H: $6 \\cdot 5 = 30$. Total $4 \\cdot 3 \\cdot 30 = 360$ ✓. Check a second, independent way by complement. All strings of four different letters from the eight: $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$. Strings with no A: $7 \\cdot 6 \\cdot 5 \\cdot 4 = 840$; with no B: also $840$; with neither: $6 \\cdot 5 \\cdot 4 \\cdot 3 = 360$. Strings missing at least one of A, B: $840 + 840 - 360 = 1320$. So strings with both: $1680 - 1320 = 360$ ✓. (The choice $1680$ is COUNTING EVERY STRING OF DIFFERENT LETTERS, ignoring the condition ✗; the choice $180$ is CHOOSING THE POSITIONS OF A AND B AS AN UNORDERED PAIR, $\\binom{4}{2} \\cdot 30$, and forgetting that A and B can trade places ✗; the choice $840$ is REMOVING ONLY THE STRINGS WITH NO A from the total ✗.)',
    },
    {
      q: 'How many four-digit positive integers have four different digits, contain the digit $0$, and do not contain the digit $9$?',
      choices: ['$1344$', '$1512$', '$2016$', '$1008$'],
      answer: 3,
      solution:
        'Place the $0$ first: it cannot lead, so it takes one of the $3$ non-leading positions. The other three positions are filled with three different digits from $1$ through $8$, since $0$ is used and $9$ is forbidden: $8 \\cdot 7 \\cdot 6 = 336$. Total $3 \\cdot 336 = 1008$ ✓. Check a second, independent way by complement inside the digits $0$ through $8$. Four-digit integers with four different digits drawn from $0$ through $8$: the thousands digit has $8$ options (not $0$), then $8$, $7$, $6$ for the rest, so $8 \\cdot 8 \\cdot 7 \\cdot 6 = 2688$. Those using no $0$ at all, drawn from $1$ through $8$: $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$. The difference, $2688 - 1680 = 1008$, is the count with a $0$ and no $9$ ✓. (The choice $1344$ is LETTING THE $0$ TAKE ANY OF THE $4$ POSITIONS, including the lead ✗; the choice $1512$ is ALLOWING THE DIGIT $9$, filling the other positions from nine digits ✗; the choice $2016$ is ALLOWING $9$ AND A LEADING $0$ BOTH, $4 \\cdot 9 \\cdot 8 \\cdot 7$ ✗.)',
    },
  ],
  // slot 12 — distinct digits with a divisibility condition on the tail.
  // Route two never splits on the units digit the same way: it counts
  // strings with a leading zero and strips them, counts the odd ones and
  // subtracts, or counts the front pair by complement.
  // Lane: five digits, divisible by 5 / four digits, divisible by 25 /
  // derived, four digits, even.
  [
    {
      q: 'How many five-digit positive integers have five different digits and are divisible by $5$?',
      choices: ['$5712$', '$6048$', '$18{,}000$', '$3024$'],
      answer: 0,
      solution:
        'The units digit is $0$ or $5$, and the two cases behave differently, so split. Units digit $0$: the leading digit has $9$ options, then $8$, $7$, $6$ for the middle three, giving $3024$. Units digit $5$: the leading digit avoids $0$ and $5$ ($8$ options), the next avoids the two used digits ($8$ options, since $0$ is now allowed), then $7$, then $6$: $8 \\cdot 8 \\cdot 7 \\cdot 6 = 2688$. Total $3024 + 2688 = 5712$ ✓. Check a second, independent way by counting strings first. Among strings of five different digits with a leading $0$ allowed, those ending in $0$ number $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$ and those ending in $5$ number the same, $6048$ strings in all. A string ending in $0$ cannot also begin with $0$, and a string ending in $5$ begins with $0$ in $8 \\cdot 7 \\cdot 6 = 336$ cases. Removing those, $6048 - 336 = 5712$ ✓. (The choice $6048$ is TREATING THE UNITS-$5$ CASE LIKE THE UNITS-$0$ CASE, letting the number begin with $0$ ✗; the choice $18{,}000$ is IGNORING THE DIFFERENT-DIGITS CONDITION, $9 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 2$ ✗; the choice $3024$ is COUNTING ONLY THE NUMBERS ENDING IN $0$ ✗.)',
    },
    {
      q: 'How many four-digit positive integers have four different digits and are divisible by $25$?',
      choices: ['$196$', '$147$', '$154$', '$168$'],
      answer: 2,
      solution:
        'A multiple of $25$ ends in $00$, $25$, $50$, or $75$, and $00$ repeats a digit, so three endings remain. Ending $25$: the thousands digit avoids $0$, $2$, $5$ ($7$ options) and the hundreds digit avoids the three used digits ($7$ options), giving $49$. Ending $75$: likewise $49$. Ending $50$: the thousands digit avoids $0$ and $5$ ($8$ options) and the hundreds digit avoids the three used digits ($7$ options), giving $56$. Total $49 + 49 + 56 = 154$ ✓. Check a second, independent way by counting the front pair by complement. The thousands and hundreds digits form a two-digit number from $10$ to $99$ with different digits, $81$ of them. For the ending $25$, the front pair must avoid $2$ and $5$: pairs whose tens digit is $2$ or $5$ number $2 \\cdot 9 = 18$, and pairs whose units digit is $2$ or $5$ while the tens digit is neither number $7 \\cdot 2 = 14$, so $81 - 32 = 49$ pairs survive; the ending $75$ gives $49$ the same way. For the ending $50$, the front pair must avoid $5$ and $0$: tens digit $5$ gives $9$ pairs, and a units digit of $0$ or $5$ with the tens digit neither gives $8 \\cdot 2 = 16$, so $81 - 25 = 56$ survive. Total $49 + 49 + 56 = 154$ ✓. (The choice $196$ is COUNTING THE ENDING $00$ AS A FOURTH CASE worth $49$ ✗; the choice $147$ is USING $49$ FOR ALL THREE ENDINGS, forgetting that the ending $50$ already holds the $0$, so its thousands digit loses only one option to it and has $8$ ✗; the choice $168$ is TREATING EVERY ENDING LIKE $50$, $3 \\cdot 56$ ✗.)',
    },
    {
      q: 'How many four-digit positive integers have four different digits and are even?',
      choices: ['$2520$', '$2296$', '$2240$', '$4500$'],
      answer: 1,
      solution:
        'The units digit is even, and $0$ behaves differently from the other even digits, so split. Units digit $0$: the thousands digit has $9$ options, then $8$ and $7$, giving $504$. Units digit $2$, $4$, $6$, or $8$ ($4$ ways): the thousands digit avoids $0$ and the units digit ($8$ options), the hundreds digit avoids the two used digits ($8$ options, since $0$ is allowed there), the tens digit has $7$: $4 \\cdot 8 \\cdot 8 \\cdot 7 = 1792$. Total $504 + 1792 = 2296$ ✓. Check a second, independent way by subtracting the odd ones. Four-digit integers with four different digits: $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. The odd ones have units digit $1, 3, 5, 7$, or $9$ ($5$ ways), a thousands digit avoiding $0$ and the units digit ($8$), a hundreds digit avoiding the two used digits ($8$), and a tens digit avoiding three ($7$): $5 \\cdot 8 \\cdot 8 \\cdot 7 = 2240$. Even: $4536 - 2240 = 2296$ ✓. (The choice $2520$ is TREATING EVERY EVEN UNITS DIGIT LIKE $0$, $5 \\cdot 504$ ✗; the choice $2240$ is TREATING $0$ LIKE THE OTHER EVEN DIGITS, $5 \\cdot 448$, which is the count of odd ones ✗; the choice $4500$ is TAKING HALF OF ALL FOUR-DIGIT INTEGERS and ignoring the different-digits condition ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 1,
  challenge,
}
