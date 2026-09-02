// Counting & Probability — Chapter 2: Basic Counting Techniques
// All problems, explanations, and examples are original MathQuest content.

const s22 = {
  id: '2.2',
  title: 'Casework',
  learn: {
    concepts: [
      {
        heading: 'Split the count into cases',
        body: 'When one formula will not cover every object you are counting, chop the problem into cases, count each case on its own, and add. Casework works when the cases are disjoint (no object lands in two cases) and exhaustive (every object lands in some case). Miss either condition and the sum is wrong before you start.',
      },
      {
        heading: 'Organize by the most constrained choice',
        body: 'Pick the cases using whichever part of the object has the fewest options or the tightest rule — the biggest coin, the largest side, the leftmost digit. Fixing that piece first makes each case a simple count. Casing on a loose piece leaves the hard part inside every case.',
      },
      {
        heading: 'Write the cases down',
        body: 'Cases hide from you when they live only in your head. List them in a table or a column with the count next to each: "tens digit $1$: $6$ numbers, tens digit $2$: $5$ numbers, …" The list is your proof that nothing is skipped and nothing is repeated, and it makes the final addition painless.',
      },
      {
        heading: 'The trap: overlapping or missing cases',
        body: 'The two classic slips are counting an object twice because it fits two cases, and losing a case entirely — a boundary case like "zero of that coin" or "single-digit numbers" is the usual victim. After you add, sanity-check one small case by listing its objects by hand.',
      },
    ],
    examples: [
      {
        problem: 'How many positive integers less than $100$ have digits that add up to $7$?',
        steps: [
          'Split by how many digits the number has: one digit or two digits.',
          'One digit: only $7$ itself, so $1$ number.',
          'Two digits: the tens digit $t$ runs from $1$ to $7$ and the units digit is $7 - t$, giving $16, 25, 34, 43, 52, 61, 70$ — that is $7$ numbers.',
          'Add the cases: $1 + 7 = 8$.',
        ],
        answer: 'There are $8$ such integers.',
      },
      {
        problem: 'In how many ways can $40$ cents be made from quarters, dimes, and nickels? (Only the number of each coin matters, and any coin may be left out.)',
        steps: [
          'Case on the biggest coin. With no quarter, $40$ cents comes from dimes and nickels: $0, 1, 2, 3$, or $4$ dimes, with nickels filling the rest — $5$ ways.',
          'With one quarter, $15$ cents remains: $0$ or $1$ dime — $2$ ways.',
          'Two quarters is already $50$ cents, too much, so there are no more cases.',
          'Add: $5 + 2 = 7$.',
        ],
        answer: 'There are $7$ ways.',
      },
      {
        problem: 'A $4 \\times 4$ grid is made of $16$ unit squares. How many squares of any size can be traced along its grid lines?',
        steps: [
          'Case on the size of the square: side $1, 2, 3$, or $4$.',
          'A $k \\times k$ square is fixed by its top-left corner, which can sit in $(5-k)$ positions across and $(5-k)$ positions down, so there are $(5-k)^2$ of them.',
          'That gives $16 + 9 + 4 + 1$ squares.',
          'Add: $30$.',
        ],
        answer: 'There are $30$ squares.',
      },
    ],
  },
  problems: [
    {
      q: 'A penny, a nickel, and a dime are each flipped once. In how many ways can the three coins land so that at most one of them shows heads?',
      choices: ['$3$', '$7$', '$4$', '$8$'],
      answer: 2,
      solution: 'Case on the number of heads. Zero heads: all three coins show tails, $1$ way. Exactly one head: choose which of the three coins it is, $3$ ways. Add the disjoint cases: $1 + 3 = 4$. Forgetting the zero-heads case gives $3$; $7$ is the count with at most two heads, and $8$ is every possible outcome.',
    },
    {
      q: 'A red die and a blue die are rolled. How many of the $36$ possible rolls have a sum that is a multiple of $5$?',
      choices: ['$7$', '$4$', '$6$', '$3$'],
      answer: 0,
      solution: 'The possible sums run from $2$ to $12$, so the multiples of $5$ are $5$ and $10$. Sum $5$: $(1,4), (2,3), (3,2), (4,1)$ — $4$ rolls. Sum $10$: $(4,6), (5,5), (6,4)$ — $3$ rolls. Add the disjoint cases: $4 + 3 = 7$. Answering $4$ or $3$ means only one case was counted.',
    },
    {
      q: 'How many two-digit positive integers have two digits that differ by exactly $4$?',
      choices: ['$10$', '$6$', '$5$', '$11$'],
      answer: 3,
      solution: 'Case on which digit is bigger. Tens digit larger: it runs from $4$ to $9$ with the units digit $4$ less, giving $40, 51, 62, 73, 84, 95$ — $6$ numbers. Units digit larger: the tens digit runs from $1$ to $5$, giving $15, 26, 37, 48, 59$ — $5$ numbers. Add: $6 + 5 = 11$. Forgetting that the units digit may be $0$ drops $40$ and gives $10$; $6$ and $5$ are single cases.',
    },
    {
      q: 'How many two-digit positive integers have a tens digit that is at least $3$ more than the units digit?',
      choices: ['$21$', '$28$', '$36$', '$45$'],
      answer: 1,
      solution: 'Case on the tens digit $t$, which must be at least $3$. The units digit can be anything from $0$ up to $t - 3$, which is $t - 2$ choices. Add over $t = 3, 4, \\ldots, 9$: $1 + 2 + \\cdots + 7 = 28$. Reading "at least $3$ more" as "more than $3$ more" gives $0 + 1 + \\cdots + 6 = 21$; allowing a difference of $2$ gives $36$; $45$ counts every number whose tens digit is larger at all.',
    },
    {
      q: 'A shop sells small stickers for $\\$2$ and large stickers for $\\$3$. In how many ways can Nora spend exactly $\\$18$? (Only the number of each size matters, and she may buy none of one size.)',
      choices: ['$4$', '$7$', '$3$', '$6$'],
      answer: 0,
      solution: 'Case on the number of large stickers $L$. The remaining $18 - 3L$ dollars must be a multiple of $2$, so $L$ must be even: $L = 0, 2, 4$, or $6$ (that last one uses all $\\$18$). Each of those leaves a whole number of small stickers, so there are $4$ ways. Counting every $L$ from $0$ to $6$ gives $7$ and includes impossible odd cases; dropping $L = 0$ gives $3$.',
    },
    {
      q: 'How many ordered pairs of positive integers $(a, b)$ satisfy $a + 2b \\le 10$?',
      choices: ['$16$', '$25$', '$20$', '$24$'],
      answer: 2,
      solution: 'Case on $b$, the variable with the bigger coefficient. $b = 1$: $a \\le 8$, $8$ values. $b = 2$: $a \\le 6$, $6$ values. $b = 3$: $4$ values. $b = 4$: $2$ values. $b = 5$ leaves nothing for $a$. Total $8 + 6 + 4 + 2 = 20$. Allowing $a = 0$ gives $25$; reading the inequality as strict gives $16$.',
    },
    {
      q: 'How many triangles have integer side lengths and perimeter $15$? Two triangles with the same three side lengths count as the same triangle.',
      choices: ['$6$', '$8$', '$19$', '$7$'],
      answer: 3,
      solution: 'Call the longest side $c$. The other two sides must add to more than $c$, so $c < 7.5$, and $c$ is at least $5$ (three sides of $5$). $c = 7$: the others add to $8$ with neither above $7$: $\\{1,7\\}, \\{2,6\\}, \\{3,5\\}, \\{4,4\\}$ — $4$ triangles. $c = 6$: sum $9$, neither above $6$: $\\{3,6\\}, \\{4,5\\}$ — $2$. $c = 5$: $\\{5,5\\}$ — $1$. Total $7$. Ignoring the triangle inequality counts all $19$ ways to split $15$ into three parts; losing the $c = 5$ case gives $6$.',
    },
    {
      q: 'How many three-digit positive integers have digits that add up to $23$?',
      choices: ['$15$', '$24$', '$12$', '$18$'],
      answer: 0,
      solution: 'Three digits add to at most $27$, so the digits are large; case on the set of digits. With two $9$s the third is $5$: $\\{9, 9, 5\\}$, $3$ orders. With one $9$ the others add to $14$: $\\{9, 8, 6\\}$ with $3! = 6$ orders, and $\\{9, 7, 7\\}$ with $3$ orders. With no $9$ the digits are at most $8$, so $\\{8, 8, 7\\}$ is the only set, $3$ orders. No digit is $0$, so every order is a three-digit number. Total $3 + 6 + 3 + 3 = 15$. Giving every set $6$ orders gives $24$; giving $\\{9, 9, 5\\}$ six orders gives $18$; missing one of the three-order sets gives $12$.',
    },
    {
      q: 'How many integers from $1$ to $999$ have exactly two digits equal to $7$? (Do not pad with leading zeros; $77$ has two digits.)',
      choices: ['$26$', '$28$', '$27$', '$30$'],
      answer: 2,
      solution: 'Two-digit numbers: only $77$. Three-digit numbers: case on which position is not a $7$. Units not $7$: $77x$ with $x$ any of $9$ digits. Tens not $7$: $7x7$, $9$ numbers. Hundreds not $7$: $x77$ with $x$ from $1$ to $9$ except $7$, so $8$ numbers. Total $1 + 9 + 9 + 8 = 27$. Forgetting $77$ gives $26$; letting $x = 0$ in $x77$ double-counts $77$ for $28$.',
    },
    {
      q: 'How many positive integers less than $1000$ have digits whose product is $24$?',
      choices: ['$21$', '$28$', '$22$', '$25$'],
      answer: 3,
      solution: 'No one-digit number works. Two digits multiplying to $24$: $\\{3,8\\}$ or $\\{4,6\\}$, each in $2$ orders — $4$ numbers. Three digits: the digit sets are $\\{1,3,8\\}$, $\\{1,4,6\\}$, and $\\{2,3,4\\}$, each with $3! = 6$ orders, and $\\{2,2,6\\}$ with only $3$ orders because the $2$s match. That is $18 + 3 = 21$. Total $4 + 21 = 25$. Forgetting the two-digit numbers gives $21$; giving $\\{2,2,6\\}$ six orders gives $28$; missing the set $\\{2,2,6\\}$ gives $22$.',
    },
  ],
}

const s23 = {
  id: '2.3',
  title: 'Complementary Counting',
  learn: {
    concepts: [
      {
        heading: 'Count what you do not want',
        body: 'Sometimes the objects you want are messy but the ones you do not want are tidy. Then count everything, count the unwanted, and subtract: $\\text{wanted} = \\text{total} - \\text{unwanted}$. The unwanted set is called the complement, and the only requirement is that every object is in exactly one of the two piles.',
      },
      {
        heading: '"At least one" is the big signal',
        body: 'The phrase "at least one" hides many cases — exactly one, exactly two, and so on. Its complement is a single clean case: "none". So to count strings with at least one $A$, count all strings and subtract the strings with no $A$ at all. "Not all the same" works the same way: its complement is "all the same", which is usually a handful of objects.',
      },
      {
        heading: 'Choose the smaller job',
        body: 'Before you start, ask which pile is easier to count directly. If the direct count needs five cases and the complement needs one, take the complement. If the complement is itself a tangle, count directly. Neither is "the" method; the question is which side of the subtraction is simpler.',
      },
      {
        heading: 'The trap: a complement with overlap',
        body: 'When the unwanted objects come in two kinds — say multiples of $2$ and multiples of $3$ — adding the two kinds double-counts anything that is both. Subtract the overlap once before you subtract from the total: $\\text{unwanted} = A + B - \\text{both}$. Forgetting this is the most common complementary-counting error.',
      },
    ],
    examples: [
      {
        problem: 'How many integers from $1$ to $100$ are not multiples of $4$?',
        steps: [
          'Counting the non-multiples directly would mean listing them; counting multiples of $4$ is easy.',
          'The multiples of $4$ in the range are $4, 8, \\ldots, 100$, which is $100 \\div 4 = 25$ numbers.',
          'Subtract from the total: $100 - 25 = 75$.',
        ],
        answer: '$75$ integers are not multiples of $4$.',
      },
      {
        problem: 'How many three-digit positive integers contain at least one digit $0$?',
        steps: [
          '"At least one $0$" has several cases, so count the complement: three-digit numbers with no $0$ at all.',
          'Each of the three digits then has $9$ choices ($1$ through $9$), giving $9 \\times 9 \\times 9 = 729$ numbers with no zero.',
          'There are $900$ three-digit numbers in all, so $900 - 729 = 171$ contain a $0$.',
        ],
        answer: '$171$ three-digit numbers contain at least one $0$.',
      },
      {
        problem: 'How many integers from $1$ to $60$ are divisible by neither $2$ nor $3$?',
        steps: [
          'The unwanted numbers are those divisible by $2$ or by $3$; count them and subtract.',
          'Multiples of $2$: $30$. Multiples of $3$: $20$. But multiples of $6$ appear in both lists, and there are $10$ of them.',
          'So the unwanted count is $30 + 20 - 10 = 40$, not $50$.',
          'Subtract: $60 - 40 = 20$.',
        ],
        answer: '$20$ integers are divisible by neither $2$ nor $3$.',
      },
    ],
  },
  problems: [
    {
      q: 'How many two-digit positive integers are not multiples of $3$?',
      choices: ['$30$', '$60$', '$57$', '$61$'],
      answer: 1,
      solution: 'There are $90$ two-digit integers. The two-digit multiples of $3$ run from $12 = 3 \\cdot 4$ to $99 = 3 \\cdot 33$, so there are $33 - 4 + 1 = 30$ of them. Subtract: $90 - 30 = 60$. Choosing $30$ answers the complement; $57$ subtracts all $33$ multiples of $3$ up to $99$, including the one-digit ones $3, 6, 9$; $61$ comes from $33 - 4 = 29$ multiples, the off-by-one at the boundary.',
    },
    {
      q: 'A coin is flipped $5$ times and the sequence of heads and tails is recorded. How many of the possible sequences contain at least one head?',
      choices: ['$32$', '$16$', '$31$', '$30$'],
      answer: 2,
      solution: 'There are $2^5 = 32$ sequences. The only one with no head is TTTTT, so $32 - 1 = 31$ sequences have at least one head. Subtracting the two all-same sequences gives $30$, but "all tails" is the only unwanted one here.',
    },
    {
      q: 'How many four-digit positive integers contain at least one digit $5$?',
      choices: ['$3168$', '$3439$', '$2439$', '$3600$'],
      answer: 0,
      solution: 'There are $9000$ four-digit numbers. Those with no $5$: the first digit has $8$ choices ($1$ to $9$ except $5$) and each other digit has $9$, so $8 \\times 9 \\times 9 \\times 9 = 5832$. Subtract: $9000 - 5832 = 3168$. Using $9^4$ for the no-$5$ count forgets that the first digit also cannot be $0$ and gives $2439$; starting from $10000$ gives $3439$.',
    },
    {
      q: 'A red die and a blue die are rolled. How many of the $36$ possible rolls show two different numbers?',
      choices: ['$15$', '$36$', '$25$', '$30$'],
      answer: 3,
      solution: 'The complement is "the two dice match", which happens in $6$ rolls ($1$-$1$ through $6$-$6$). So $36 - 6 = 30$ rolls show different numbers. The answer $15$ counts unordered pairs of different numbers, but the dice are different colors, so $(2,5)$ and $(5,2)$ are different rolls.',
    },
    {
      q: 'A code is a string of $3$ letters, each chosen from A, B, C, D, with repeats allowed. How many codes contain at least one A?',
      choices: ['$27$', '$37$', '$48$', '$36$'],
      answer: 1,
      solution: 'All codes: $4^3 = 64$. Codes with no A use only B, C, D: $3^3 = 27$. Subtract: $64 - 27 = 37$. Choosing a position for the A and filling the other two freely gives $3 \\times 16 = 48$, which counts codes like AAB more than once.',
    },
    {
      q: 'How many integers from $1$ to $200$ are neither perfect squares nor perfect cubes?',
      choices: ['$181$', '$186$', '$183$', '$184$'],
      answer: 2,
      solution: 'Squares up to $200$: $1^2$ through $14^2$, so $14$. Cubes: $1^3$ through $5^3 = 125$, so $5$. Numbers that are both are sixth powers: $1$ and $64$, so $2$. The unwanted count is $14 + 5 - 2 = 17$, and $200 - 17 = 183$. Forgetting the overlap subtracts $19$ and gives $181$.',
    },
    {
      q: 'A string of $4$ digits is formed using only the digits $1, 2, 3, 4$, with repeats allowed. How many such strings use at least two different digits?',
      choices: ['$252$', '$255$', '$240$', '$232$'],
      answer: 0,
      solution: 'All strings: $4^4 = 256$. The complement, "only one digit is used", means all four digits match: $1111, 2222, 3333, 4444$ — $4$ strings. So $256 - 4 = 252$. Subtracting only $1$ (as if there were a single all-same string) gives $255$.',
    },
    {
      q: 'How many integers from $1$ to $999$ contain at least one digit $3$?',
      choices: ['$300$', '$270$', '$243$', '$271$'],
      answer: 3,
      solution: 'Think of the $1000$ integers from $0$ to $999$ as three-digit strings with leading zeros allowed. Strings with no $3$: $9^3 = 729$. So $1000 - 729 = 271$ strings contain a $3$, and none of them is $0$, so the answer for $1$ to $999$ is also $271$. Subtracting $729$ from $999$ instead gives $270$ — but $729$ includes the string $000$, which is not in the range.',
    },
    {
      q: 'Three dice — one red, one blue, one green — are rolled. How many of the $216$ outcomes include at least one $6$ but are not all the same number?',
      choices: ['$91$', '$85$', '$90$', '$125$'],
      answer: 2,
      solution: 'First count outcomes with at least one $6$: the complement has no $6$, $5^3 = 125$ outcomes, so $216 - 125 = 91$. Among those $91$, the only outcome with all three dice the same is $6$-$6$-$6$. Remove it: $90$. Answering $91$ ignores the "not all the same" condition; subtracting all six triples gives $85$, but five of them contain no $6$ and were never counted.',
    },
    {
      q: 'Five friends each pick one of three ice cream flavors: mint, mango, or fudge. In how many ways can they choose so that every flavor is picked by at least one friend?',
      choices: ['$147$', '$150$', '$96$', '$216$'],
      answer: 1,
      solution: 'All choices: $3^5 = 243$. Unwanted: some flavor is picked by nobody. Choices avoiding mint: $2^5 = 32$, and the same for each flavor, $96$ in all — but a choice avoiding two flavors (everyone picks the same one) was counted twice, once for each missing flavor, and there are $3$ of those. Unwanted $= 96 - 3 = 93$, so wanted $= 243 - 93 = 150$. Skipping the add-back gives $147$.',
    },
  ],
}

const s24 = {
  id: '2.4',
  title: 'Constructive Counting',
  learn: {
    concepts: [
      {
        heading: 'Build the object one decision at a time',
        body: 'Instead of staring at the whole set, imagine constructing one object step by step: choose the first digit, then the second, then the third. If every step has the same number of options no matter what came before, multiply the option counts. The number of complete objects is the product.',
      },
      {
        heading: 'Most restricted choice first',
        body: 'Make the pickiest decision first. If a number must be even, choose its last digit before anything else; if a runner must get a medal, hand out her medal first. Settling the tight constraint early keeps the later option counts clean. Leaving it for last usually means the number of options depends on earlier choices, and the multiplication breaks.',
      },
      {
        heading: 'When the order of decisions matters',
        body: 'Multiplication needs a fixed number of options at each step. For a three-digit number with distinct digits, choosing hundreds then tens then units gives $9 \\times 9 \\times 8$ every time. For an even one, choosing units first gives different counts when the units digit is $0$ than when it is not — so split into those two cases, construct each, and add.',
      },
      {
        heading: 'The trap: dependent steps',
        body: 'The slip to watch for is multiplying option counts that are not fixed. "The last digit is even, so $5$ choices; the first digit is nonzero and different, so $8$ choices" is wrong when the last digit is $0$, because then the first digit has $9$ choices. Whenever a count "depends", stop and case on the thing it depends on.',
      },
    ],
    examples: [
      {
        problem: 'How many three-digit positive integers have all three digits prime? (The prime digits are $2, 3, 5$, and $7$.)',
        steps: [
          'Build the number digit by digit; each digit must be one of $2, 3, 5, 7$.',
          'The hundreds digit has $4$ choices, and so do the tens and units digits — none of them depends on the others, and $0$ never comes up.',
          'Multiply: $4 \\times 4 \\times 4 = 64$.',
        ],
        answer: 'There are $64$ such numbers.',
      },
      {
        problem: 'How many three-digit positive integers have three different digits?',
        steps: [
          'The hundreds digit cannot be $0$, so it has $9$ choices.',
          'The tens digit can be anything except the hundreds digit: $9$ choices ($0$ is now allowed).',
          'The units digit must avoid both earlier digits: $8$ choices.',
          'Multiply: $9 \\times 9 \\times 8 = 648$.',
        ],
        answer: 'There are $648$ such numbers.',
      },
      {
        problem: 'How many three-digit positive integers have three different digits and are multiples of $5$?',
        steps: [
          'The units digit is the most restricted — it must be $0$ or $5$ — so pick it first; but the count for the hundreds digit will depend on which one it is, so split into two cases.',
          'Units digit $0$: the hundreds digit has $9$ choices and the tens digit $8$, giving $72$ numbers.',
          'Units digit $5$: the hundreds digit must avoid $0$ and $5$, $8$ choices; the tens digit avoids two digits, $8$ choices; that is $64$ numbers.',
          'Add the cases: $72 + 64 = 136$.',
        ],
        answer: 'There are $136$ such numbers.',
      },
    ],
  },
  problems: [
    {
      q: 'A PIN is a string of $4$ digits, and it may start with $0$. How many PINs have four different digits?',
      choices: ['$10000$', '$5040$', '$4536$', '$6561$'],
      answer: 1,
      solution: 'Build the PIN left to right: $10$ choices for the first digit, then $9$, $8$, and $7$ as each digit must avoid the ones already used. Multiply: $10 \\times 9 \\times 8 \\times 7 = 5040$. Starting with $9$ choices ($4536$) wrongly bans a leading $0$, which the stem allows.',
    },
    {
      q: 'How many three-digit positive integers have a middle digit of $0$ and no repeated digit?',
      choices: ['$72$', '$81$', '$90$', '$64$'],
      answer: 0,
      solution: 'The middle digit is fixed. The hundreds digit cannot be $0$, so $9$ choices; the units digit cannot be $0$ or the hundreds digit, so $8$ choices. Multiply: $9 \\times 8 = 72$. Giving the units digit $9$ choices ($81$) lets it repeat the hundreds digit.',
    },
    {
      q: 'A bike-rack tag is one letter followed by $3$ digits. The letter must be a vowel (A, E, I, O, or U), and the three digits must all be different. How many tags are possible?',
      choices: ['$5000$', '$720$', '$3600$', '$18720$'],
      answer: 2,
      solution: 'Letter: $5$ choices. Digits, built left to right with no repeats: $10 \\times 9 \\times 8 = 720$. Multiply: $5 \\times 720 = 3600$. Letting the digits repeat gives $5 \\times 1000 = 5000$; $720$ forgets the letter; $18720$ allows any of the $26$ letters.',
    },
    {
      q: 'How many three-digit positive integers have three different digits, none of which is $7$?',
      choices: ['$504$', '$648$', '$576$', '$448$'],
      answer: 3,
      solution: 'Build left to right with $7$ banned everywhere. The hundreds digit avoids $0$ and $7$: $8$ choices. The tens digit avoids $7$ and the hundreds digit: $8$ choices ($0$ is now allowed). The units digit avoids $7$ and both earlier digits: $7$ choices. Multiply: $8 \\times 8 \\times 7 = 448$. Using $9 \\times 8 \\times 7 = 504$ forgets that the hundreds digit cannot be $0$ either; $8 \\times 9 \\times 8 = 576$ lets the tens digit be $7$; $648$ ignores the ban on $7$.',
    },
    {
      q: 'How many four-digit positive integers have four different digits and contain the digit $0$?',
      choices: ['$1008$', '$1512$', '$2016$', '$504$'],
      answer: 1,
      solution: 'The $0$ is the restricted digit, so place it first: it cannot lead, so it takes the hundreds, tens, or units position — $3$ choices. The other three positions are filled left to right from the nine nonzero digits with no repeats: $9 \\times 8 \\times 7 = 504$. Multiply: $3 \\times 504 = 1512$. Giving the $0$ all four positions ($2016$) allows a leading zero; $504$ forgets to choose where the $0$ goes; $1008$ allows it only two positions.',
    },
    {
      q: 'Eight runners race, and gold, silver, and bronze medals go to the first three finishers. Kai is one of the runners. How many ways can the medals be awarded so that Kai wins one of them? (No ties.)',
      choices: ['$126$', '$336$', '$42$', '$168$'],
      answer: 0,
      solution: 'Kai is the restricted runner, so decide his medal first: $3$ choices. The other two medals go to two of the remaining $7$ runners in order: $7 \\times 6 = 42$. Multiply: $3 \\times 42 = 126$. Answering $42$ forgets to choose which medal Kai gets; $336$ is all medal outcomes with no restriction.',
    },
    {
      q: 'How many four-digit strings use only the digits $1, 2, 3$ and have no two neighboring digits equal?',
      choices: ['$81$', '$12$', '$36$', '$24$'],
      answer: 3,
      solution: 'Build left to right. The first digit has $3$ choices. Each later digit must differ from the one just before it, leaving $2$ choices, no matter which digit that was. Multiply: $3 \\times 2 \\times 2 \\times 2 = 24$. Allowing all strings gives $81$; $12$ forgets one of the three $2$-choice steps; $36$ gives the last digit $3$ choices as if it only had to differ from the first.',
    },
    {
      q: 'How many three-digit positive integers have a digit sum that is even?',
      choices: ['$500$', '$405$', '$450$', '$400$'],
      answer: 2,
      solution: 'Choose the hundreds and tens digits freely: $9 \\times 10 = 90$ ways. Whatever they add to, the units digit must have the parity that makes the total even, and exactly $5$ of the ten digits have that parity. Multiply: $90 \\times 5 = 450$. Deciding the units digit first, before its parity is known, is what leads to $500$ or $400$.',
    },
    {
      q: 'How many even four-digit positive integers have four different digits?',
      choices: ['$2520$', '$2296$', '$2240$', '$2304$'],
      answer: 1,
      solution: 'Pick the units digit first and case on whether it is $0$. Units $0$: the other three digits are chosen from $9$, then $8$, then $7$ digits, $504$ numbers. Units $2, 4, 6$, or $8$: the first digit avoids $0$ and the units digit, $8$ choices, then $8$ and $7$: $4 \\times 8 \\times 8 \\times 7 = 1792$. Add: $2296$. Using $9 \\times 8 \\times 7 \\times 5 = 2520$ lets the first digit be $0$ in the nonzero cases.',
    },
    {
      q: 'How many four-digit positive integers have four different digits and are divisible by $25$?',
      choices: ['$147$', '$168$', '$154$', '$196$'],
      answer: 2,
      solution: 'A multiple of $25$ ends in $00, 25, 50$, or $75$; with distinct digits, $00$ is out. Ending $25$: the thousands digit avoids $0, 2, 5$ ($7$ choices) and the hundreds digit avoids the three used digits ($7$ choices): $49$. Ending $75$: likewise $49$. Ending $50$: the thousands digit only avoids $5$ and $0$, so $8$ choices, then $7$: $56$. Add: $49 + 49 + 56 = 154$. Treating the $50$ ending like the others gives $147$.',
    },
  ],
}

const s25 = {
  id: '2.5',
  title: 'Counting with Restrictions',
  learn: {
    concepts: [
      {
        heading: 'Place the restricted item first',
        body: 'When arranging people or objects in a row with a rule attached — someone must sit at an end, a digit must be first — deal with the rule before anything else. Put the restricted item in one of its allowed spots, then arrange everyone else freely in the remaining spots and multiply. This is constructive counting with the tight decision made first.',
      },
      {
        heading: 'Glue items that must be together',
        body: 'If two items must be next to each other, tape them into one block and arrange the block with the other items: $n$ items with two glued behave like $n - 1$ items, so there are $(n-1)!$ arrangements. Then multiply by the number of ways to order the items inside the block — $2$ for a pair, $3! = 6$ for a trio. Forgetting that inside-the-block factor is the classic slip.',
      },
      {
        heading: 'Use the complement for "not next to"',
        body: '"Must not be adjacent" is hard to build directly but easy to complement: count all arrangements, glue the pair and count the ones where they are adjacent, and subtract. For $n$ items and one forbidden pair that is $n! - 2 \\cdot (n-1)!$.',
      },
      {
        heading: 'The trap: rules that interact',
        body: 'With two rules at once — a block plus an end condition, say — check whether one rule changes the options for the other. Often the safest plan is to handle the strictest rule first, then treat the block or complement inside what is left. When the interaction gets tangled, casework on the position of the most restricted item cuts through it.',
      },
    ],
    examples: [
      {
        problem: 'Five different books are lined up on a shelf. In how many of the arrangements are the atlas and the dictionary next to each other?',
        steps: [
          'Glue the atlas and the dictionary into one block, so there are $4$ items to arrange: the block and the $3$ other books.',
          'Those $4$ items can be ordered in $4! = 24$ ways.',
          'Inside the block, the atlas can be on the left or the right: $2$ ways.',
          'Multiply: $24 \\times 2 = 48$.',
        ],
        answer: 'There are $48$ arrangements.',
      },
      {
        problem: 'Six friends stand in a row for a photo. Mia insists on standing at one of the two ends. How many arrangements are possible?',
        steps: [
          'Mia is the restricted person, so place her first: $2$ choices of end.',
          'The other five friends fill the remaining five spots in any order: $5! = 120$ ways.',
          'Multiply: $2 \\times 120 = 240$.',
        ],
        answer: 'There are $240$ arrangements.',
      },
      {
        problem: 'Five people, including Raj and Sam, sit in a row of five chairs. In how many arrangements are Raj and Sam not next to each other?',
        steps: [
          'Count all arrangements, then subtract the ones where Raj and Sam are together.',
          'All arrangements: $5! = 120$.',
          'Raj and Sam together: glue them, arrange $4$ items in $4! = 24$ ways, times $2$ for the order inside the block: $48$.',
          'Subtract: $120 - 48 = 72$.',
        ],
        answer: 'There are $72$ arrangements.',
      },
    ],
  },
  problems: [
    {
      q: 'Five children line up for a slide. The two tallest, Ivy and Jun, must be the last two in line, in either order. How many different lines are possible?',
      choices: ['$6$', '$12$', '$48$', '$120$'],
      answer: 1,
      solution: 'Fill the restricted spots first: the last two places hold Ivy and Jun in $2$ orders. The other three children take the first three places in $3! = 6$ ways. Multiply: $2 \\times 6 = 12$. Answering $6$ forgets that Ivy and Jun can swap; $48$ lets the pair stand together anywhere in the line instead of only at the back; $120$ ignores the rule.',
    },
    {
      q: 'The letters P, Q, R, S, T, U are arranged in a row. In how many arrangements do P, Q, R stand side by side, reading PQR from left to right?',
      choices: ['$6$', '$144$', '$24$', '$720$'],
      answer: 2,
      solution: 'Glue P, Q, R into one block whose inside order is already fixed as PQR. That leaves $4$ items — the block, S, T, U — to arrange: $4! = 24$. Nothing more to multiply, because the block has only $1$ allowed inside order. Answering $144$ multiplies by $3! = 6$ inside orders the stem does not allow; $720$ ignores the rule; $6$ only orders S, T, U.',
    },
    {
      q: 'Seven different cars park in a row of seven spaces. The red car must take one of the three spaces nearest the entrance. How many parkings are possible?',
      choices: ['$720$', '$2160$', '$5040$', '$1440$'],
      answer: 1,
      solution: 'Park the restricted car first: $3$ allowed spaces. The other six cars fill the remaining six spaces in $6! = 720$ ways. Multiply: $3 \\times 720 = 2160$. The choice $720$ fixes the red car in a single space; $1440$ gives it only two; $5040$ ignores the rule.',
    },
    {
      q: 'Six students line up in a single file. Dev must be at the front of the line, and Eli must not stand directly behind Dev. How many lines are possible?',
      choices: ['$96$', '$120$', '$480$', '$24$'],
      answer: 0,
      solution: 'Place Dev first; he is fixed at the front. With Dev in place, the five others fill the five spots behind him in $5! = 120$ ways, and Eli is directly behind Dev in $4! = 24$ of those. Subtract: $120 - 24 = 96$. Choosing $120$ ignores Eli’s rule; $24$ is the complement; $480$ counts lines where Dev and Eli are not neighbors but forgets Dev must be at the front.',
    },
    {
      q: 'Six different books, three of them math books, are placed on a shelf. In how many arrangements are the three math books all next to each other?',
      choices: ['$24$', '$48$', '$720$', '$144$'],
      answer: 3,
      solution: 'Glue the three math books into one block: $4$ items, $4! = 24$ orders. Inside the block the math books can be ordered in $3! = 6$ ways. Multiply: $24 \\times 6 = 144$. Using $2$ for the inside order (as if the block were a pair) gives $48$; forgetting it gives $24$.',
    },
    {
      q: 'Three boys and four girls, all different people, stand in a row so that boys and girls alternate. How many arrangements are possible?',
      choices: ['$288$', '$5040$', '$144$', '$24$'],
      answer: 2,
      solution: 'Decide the pattern first. With four girls and three boys in seven spots, the only alternating pattern is GBGBGBG — a boy at either end would leave two girls touching. Then the girls fill their four spots in $4! = 24$ ways and the boys fill theirs in $3! = 6$ ways. Multiply: $24 \\times 6 = 144$. Doubling to $288$ assumes both genders can start, as they could with equal numbers; $5040$ ignores the rule; $24$ orders only the girls and forgets to order the boys.',
    },
    {
      q: 'Seven people, including Ava and Ben, sit in a row of seven chairs. In how many seatings do Ava and Ben occupy the two end chairs?',
      choices: ['$240$', '$120$', '$1440$', '$720$'],
      answer: 0,
      solution: 'Place the restricted pair first: Ava takes the left end and Ben the right, or the reverse — $2$ ways. The other five fill the middle chairs in $5! = 120$ ways. Multiply: $240$. Answering $120$ forgets that the pair can swap ends.',
    },
    {
      q: 'Six people, including Ava, Ben, and Cal, sit in a row. Ava and Ben must sit next to each other, and Cal must sit at one of the two ends. How many seatings are possible?',
      choices: ['$48$', '$192$', '$96$', '$240$'],
      answer: 2,
      solution: 'Handle the end rule first: Cal takes one of $2$ ends. That leaves five seats in a row for the other five people. Glue Ava and Ben: the block plus three others make $4$ items, $4! = 24$ orders, times $2$ for the order inside the block — $48$ seatings for the five seats. Multiply by Cal’s $2$ choices: $96$. Answering $48$ fixes Cal at a single end; $240$ ignores the glued pair.',
    },
    {
      q: 'Six people, including Ava, Ben, and Cal, sit in a row. Cal must sit at one of the two ends, and Ava and Ben must not sit next to each other. How many seatings are possible?',
      choices: ['$240$', '$96$', '$192$', '$144$'],
      answer: 3,
      solution: 'Seat Cal first: $2$ ends, then $5! = 120$ orders for the rest, so $240$ seatings obey the end rule. From those, remove the ones where Ava and Ben are together: with Cal at an end, the other five seats hold a glued pair plus three people, $4! \\times 2 = 48$, and Cal’s two ends double it to $96$. Subtract: $240 - 96 = 144$. Choosing $192$ subtracts only $48$, forgetting Cal has two possible ends.',
    },
    {
      q: 'Four boys and three girls, all different people, stand in a row so that no two girls are next to each other. How many arrangements are possible?',
      choices: ['$1440$', '$240$', '$144$', '$720$'],
      answer: 0,
      solution: 'Arrange the four boys first: $4! = 24$ ways. They create five gaps — before the first boy, between neighbors, and after the last. Each girl must go in a different gap so that no two girls touch: the first girl picks one of $5$ gaps, the next one of $4$, the last one of $3$, for $60$ placements. Multiply: $24 \\times 60 = 1440$. Answering $144$ only allows the strict alternating pattern BGBGBGB; $240$ picks the three gaps without ordering the girls.',
    },
  ],
}

const challenge = [
  {
    q: 'How many integers from $1$ to $100$ are divisible by $2$ or by $5$, but not by $10$?',
    choices: ['$60$', '$40$', '$50$', '$70$'],
    answer: 2,
    solution: 'Multiples of $2$: $50$. Multiples of $5$: $20$. Multiples of $10$ are in both lists: $10$. So $50 + 20 - 10 = 60$ integers are divisible by $2$ or $5$. Every multiple of $10$ is among those $60$, and the question throws them out: $60 - 10 = 50$. Answering $60$ forgets to remove the multiples of $10$; $40$ removes them twice; $70$ adds the two lists without fixing the overlap.',
  },
  {
    q: 'A red die and a blue die are rolled. How many of the $36$ rolls have an odd product or a sum of $7$?',
    choices: ['$14$', '$15$', '$18$', '$9$'],
    answer: 1,
    solution: 'Odd product means both dice are odd: $3 \\times 3 = 9$ rolls. Sum $7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, $6$ rolls. Is there overlap? Two odd numbers add to an even number, so no roll is in both lists. Add: $9 + 6 = 15$. Subtracting a phantom overlap gives $14$; $18$ counts rolls with an odd sum instead.',
  },
  {
    q: 'How many three-digit positive integers have at least one repeated digit?',
    choices: ['$648$', '$243$', '$270$', '$252$'],
    answer: 3,
    solution: '"At least one repeat" is messy; its complement, all digits different, is a clean construction: $9 \\times 9 \\times 8 = 648$. Subtract from $900$: $252$. Choosing $648$ answers the complement; $243$ counts only numbers with exactly two equal digits and misses $111, 222, \\ldots, 999$.',
  },
  {
    q: 'Five people, including Ann and Ben, stand in a row. Neither Ann nor Ben may stand at either end. How many arrangements are possible?',
    choices: ['$36$', '$72$', '$48$', '$24$'],
    answer: 0,
    solution: 'The ends are the restricted spots, so fill them first from the three other people: $3$ choices for the left end and $2$ for the right. The three middle spots take the remaining three people, Ann and Ben among them, in $3! = 6$ ways. Multiply: $6 \\times 6 = 36$. Doubling to $72$ counts the end pair twice.',
  },
  {
    q: 'How many four-digit positive integers have digits that add up to $5$?',
    choices: ['$56$', '$20$', '$35$', '$30$'],
    answer: 2,
    solution: 'Case on the thousands digit $d$, which is at least $1$. The other three digits add to $5 - d$, and three digits can add to $s$ (for $s \\le 9$) in $\\frac{(s+1)(s+2)}{2}$ ways. So $d = 1$ gives $15$, $d = 2$ gives $10$, $d = 3$ gives $6$, $d = 4$ gives $3$, $d = 5$ gives $1$: total $35$. Allowing a leading $0$ adds the $21$ ways for $d = 0$ and gives $56$.',
  },
  {
    q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $a + b + c = 10$ and $a < b < c$?',
    choices: ['$36$', '$8$', '$5$', '$4$'],
    answer: 3,
    solution: 'Case on the smallest number $a$. Since $a < b < c$, the three add to more than $3a$, so $a \\le 3$. $a = 1$: $b + c = 9$ with $1 < b < c$, so $(b, c) = (2, 7), (3, 6), (4, 5)$ — $3$ triples. $a = 2$: $b + c = 8$ with $2 < b < c$, only $(3, 5)$ — $1$ triple. $a = 3$: $b + c = 7$ with $3 < b < c$ is impossible, since $b = 4$ forces $c = 3$. Total $3 + 1 = 4$. Answering $36$ drops the $a < b < c$ condition and counts every ordered triple of positive integers; $5$ lets $b = c$ sneak in with $(2, 4, 4)$; $8$ keeps $a$ smallest but allows $b$ and $c$ in either order, counting each triple twice.',
  },
  {
    q: 'Ann, Ben, Cal, Dee, and Eve stand in a row. Ann refuses to stand next to Ben and also refuses to stand next to Cal. How many arrangements are possible?',
    choices: ['$24$', '$72$', '$36$', '$48$'],
    answer: 2,
    solution: 'Case on Ann’s spot, since both rules are about her neighbors. Ann at an end ($2$ ways): her one neighbor must be Dee or Eve ($2$ ways), and the other three fill the rest in $3! = 6$ ways — $24$. Ann in the second or fourth spot ($2$ ways): both neighbors must be Dee and Eve in some order ($2$ ways), and Ben and Cal take the last two spots in $2$ ways — $8$. Ann in the middle: neighbors Dee and Eve ($2$ ways), Ben and Cal at the ends ($2$ ways) — $4$. Total $24 + 8 + 4 = 36$. Subtracting both adjacent counts from $120$ without adding back the $12$ arrangements where Ann is between Ben and Cal gives $24$.',
  },
  {
    q: 'How many integers from $1$ to $999$ contain at least one digit $4$ and no digit $5$?',
    choices: ['$271$', '$217$', '$216$', '$243$'],
    answer: 1,
    solution: 'Pad to three-digit strings from $000$ to $999$. Strings with no $5$: $9^3 = 729$. Strings with no $5$ and no $4$: $8^3 = 512$. So strings with a $4$ and no $5$: $729 - 512 = 217$, and $000$ is not among them, so the answer for $1$ to $999$ is $217$. Ignoring the no-$5$ rule gives $271$.',
  },
  {
    q: 'How many three-digit positive integers have exactly two digits the same (and the third different)?',
    choices: ['$243$', '$252$', '$270$', '$225$'],
    answer: 0,
    solution: 'Case on which position holds the odd digit out. Pattern AAB: the repeated digit A is $1$ to $9$ ($9$ choices) and B is any other digit ($9$ choices), $81$ numbers. Pattern ABA: likewise $81$. Pattern BAA: B is $1$ to $9$ ($9$ choices) and A is any other digit, including $0$ ($9$ choices), $81$. Total $243$. The answer $252$ also counts the nine numbers with all three digits equal.',
  },
  {
    q: 'Four boys and four girls, all different people, stand in a row so that no two girls are next to each other. How many arrangements are possible?',
    choices: ['$1152$', '$2880$', '$5760$', '$576$'],
    answer: 1,
    solution: 'Arrange the boys: $4! = 24$. They create $5$ gaps (including the two ends), and the four girls must occupy four different gaps: $5 \\times 4 \\times 3 \\times 2 = 120$ ordered placements. Multiply: $24 \\times 120 = 2880$. Answering $1152$ counts only the two alternating patterns and misses the three patterns where girls take both ends and two boys sit together in the middle.',
  },
  {
    q: 'How many four-digit positive integers have four different digits and are divisible by $4$?',
    choices: ['$1120$', '$1078$', '$1232$', '$2250$'],
    answer: 0,
    solution: 'A number is divisible by $4$ exactly when its last two digits form a multiple of $4$, so build from the right. The two-digit endings $00$ through $96$ that are multiples of $4$ number $25$, but $00$, $44$, and $88$ repeat a digit, leaving $22$ endings. Case on whether the ending contains a $0$. It does for $04, 08, 20, 40, 60, 80$ — $6$ endings; then the thousands digit avoids only the two used digits ($8$ choices) and the hundreds digit avoids three ($7$ choices): $6 \times 56 = 336$. The other $16$ endings have no $0$, so the thousands digit must also avoid $0$ ($7$ choices), then $7$ for the hundreds digit: $16 \times 49 = 784$. Add: $336 + 784 = 1120$. Treating every ending like a zero-free one gives $22 \times 49 = 1078$; letting the thousands digit be $0$ gives $22 \times 56 = 1232$; $2250$ counts every four-digit multiple of $4$ and ignores the distinct-digit rule.',
  },
  {
    q: 'Seven people, including Ava, Ben, and Cal, sit in a row. Ava and Ben must sit next to each other, and Cal must not sit next to either of them. How many seatings are possible?',
    choices: ['$1440$', '$480$', '$720$', '$960$'],
    answer: 3,
    solution: 'Glue Ava and Ben into a block. Now there are $6$ items: the block, Cal, and four others. The rule says Cal is not next to the block, which is a "not adjacent" condition on two of six items: $6! - 2 \\cdot 5! = 720 - 240 = 480$ arrangements. The block itself has $2$ inside orders, so $480 \\times 2 = 960$. Answering $480$ forgets the inside order; $1440$ ignores Cal’s rule.',
  },
]

const worksheet = [
  {
    q: 'How many two-digit positive integers have a units digit that is at least twice the tens digit?',
    answer: '$20$',
    solution: 'Case on the tens digit $t$; the units digit must be at least $2t$, so $t \\le 4$. $t = 1$: units $2$ through $9$, $8$ numbers. $t = 2$: units $4$ through $9$, $6$ numbers. $t = 3$: units $6$ through $9$, $4$ numbers. $t = 4$: units $8$ or $9$, $2$ numbers. Total $8 + 6 + 4 + 2 = 20$.',
  },
  {
    q: 'How many rectangles with positive integer side lengths have a perimeter of $20$? A rectangle and the same rectangle turned on its side count as one rectangle.',
    answer: '$5$',
    solution: 'The two side lengths add to $10$. Call the shorter side (or either side, if they tie) $a$, so $a \\le 10 - a$ and $a \\le 5$. Case on $a$: $a = 1, 2, 3, 4, 5$ give the rectangles $1 \\times 9$, $2 \\times 8$, $3 \\times 7$, $4 \\times 6$, $5 \\times 5$. Total $5$. Counting $1 \\times 9$ and $9 \\times 1$ separately would give $9$.',
  },
  {
    q: 'How many integers from $1$ to $200$ are multiples of $3$ but not multiples of $5$?',
    answer: '$53$',
    solution: 'Multiples of $3$ up to $200$: $3, 6, \\ldots, 198$, which is $66$ numbers. The unwanted ones among them are also multiples of $5$, so multiples of $15$: $15, 30, \\ldots, 195$, which is $13$ numbers. Subtract: $66 - 13 = 53$.',
  },
  {
    q: 'A string of $5$ letters is formed from the letters X and Y, repeats allowed. How many such strings contain at least two X’s?',
    answer: '$26$',
    solution: 'All strings: $2^5 = 32$. The complement is "fewer than two X’s": no X ($1$ string) or exactly one X ($5$ strings, one for each position). Subtract: $32 - 6 = 26$.',
  },
  {
    q: 'How many odd four-digit positive integers have four different digits?',
    answer: '$2240$',
    solution: 'Units digit first: $5$ odd choices. Thousands digit: not $0$ and not the units digit, $8$ choices. Hundreds and tens digits avoid what is used: $8$ and then $7$. Multiply: $5 \\times 8 \\times 8 \\times 7 = 2240$.',
  },
  {
    q: 'Seven different books are placed on a shelf. In how many arrangements is the atlas at the left end and the two cookbooks next to each other?',
    answer: '$240$',
    solution: 'Place the atlas first; it is fixed at the left end. The other six books fill the remaining six spots. Glue the cookbooks: $5$ items in $5! = 120$ orders, times $2$ for the order inside the block. $120 \\times 2 = 240$.',
  },
  {
    q: 'Six people, including Ava, Ben, and Cal, sit in a row of six chairs. Ava and Ben must sit next to each other, and Cal must not sit in either end chair. How many seatings are possible?',
    answer: '$144$',
    solution: 'Glue Ava and Ben into a block, giving $5$ items: the block, Cal, and three others. Cal sits in an end chair exactly when he is the first or last of the five items, so count item orders with Cal at neither end: $5! - 2 \\cdot 4! = 120 - 48 = 72$. Multiply by $2$ for the order inside the block: $144$.',
  },
  {
    q: 'Three dice — red, blue, and green — are rolled. How many of the $216$ outcomes show at least one $6$ and do not have three different numbers?',
    answer: '$31$',
    solution: 'Outcomes with at least one $6$: $216 - 5^3 = 91$. Among these, the ones with three different numbers have exactly one $6$: choose its die ($3$ ways), then two different non-$6$ values for the other dice in order ($5 \\times 4 = 20$), so $60$. Subtract: $91 - 60 = 31$.',
  },
  {
    q: 'How many three-digit positive integers have digits whose product is $8$?',
    answer: '$10$',
    solution: 'Case on the digit set. $\\{1, 1, 8\\}$: $3$ orders. $\\{1, 2, 4\\}$: $3! = 6$ orders. $\\{2, 2, 2\\}$: $1$. No digit is $0$, so every order is a valid three-digit number. Total $3 + 6 + 1 = 10$.',
  },
  {
    q: 'Four boys and three girls, all different people, stand in a row so that a boy stands at each end and no two girls are next to each other. How many arrangements are possible?',
    answer: '$144$',
    solution: 'Arrange the boys: $4! = 24$. With boys at both ends, the girls can only use the three gaps between neighboring boys, and no two girls may share a gap, so the three girls take the three gaps one each: $3! = 6$. Multiply: $24 \\times 6 = 144$.',
  },
]

export default {
  id: 'intro-counting-ch02',
  book: 'intro-counting',
  number: 2,
  title: 'Basic Counting Techniques',
  intro:
    'Most counting problems are too tangled for a single formula. This chapter gives you four ways to untangle them: split into cases, count the opposite and subtract, build the object one decision at a time, and handle rules like "must sit together" or "cannot be at the end". With these you can count almost anything a contest throws at you.',
  sections: [s22, s23, s24, s25],
  challenge,
  worksheet,
}
