// Counting & Probability — Chapter 1: Counting Is Arithmetic
// All problems, explanations, and examples are original MathQuest content.

const s12 = {
  id: '1.2',
  title: 'Counting Lists of Numbers',
  learn: {
    concepts: [
      {
        heading: 'Posts, not gaps',
        body: 'The list $a, a+1, a+2, \\ldots, b$ has $b - a + 1$ numbers, not $b - a$. Subtracting only counts the jumps between neighbors, and a row of posts always has one more post than gaps. Test it on something tiny: from $8$ to $10$ the subtraction gives $2$, but the list $8, 9, 10$ plainly has $3$ members. Whenever you count a stretch of consecutive integers, add the one back.',
      },
      {
        heading: 'Lists with a step',
        body: 'A list like $7, 12, 17, \\ldots, 152$ climbs by $5$ each time. Shrink it into a consecutive list without changing its length: subtract $7$ from everything to get $0, 5, 10, \\ldots, 145$, then divide by $5$ to get $0, 1, 2, \\ldots, 29$, which has $30$ numbers. In one formula, a list from $a$ to $b$ with step $d$ has $\\frac{b - a}{d} + 1$ members — the same posts-and-gaps idea, with gaps of width $d$.',
      },
      {
        heading: 'Multiples between bounds',
        body: 'To count the multiples of $k$ from $m$ to $n$, find the first multiple that is at least $m$ and the last multiple that is at most $n$, then count that stepped list. The multiples of $6$ from $100$ to $400$ run $102, 108, \\ldots, 396$, so there are $\\frac{396 - 102}{6} + 1 = 50$. The trap is the endpoints: check whether the bounds themselves are multiples, and whether the problem says “between” (endpoints excluded) or “from … to” (endpoints included).',
      },
      {
        heading: 'Lists in disguise',
        body: 'Many counting questions are secretly a list. “How many perfect squares lie between $50$ and $1000$?” is really asking how many integers $n$ satisfy $8 \\le n \\le 31$, because $8^2 = 64$ is the first square past $50$ and $31^2 = 961$ is the last one under $1000$. Find the rule that generates the objects, work out which values of $n$ fit the bounds, and count those $n$ — the list $8, 9, \\ldots, 31$ has $24$ members.',
      },
    ],
    examples: [
      {
        problem: 'How many integers are in the list $23, 24, 25, \\ldots, 91$?',
        steps: [
          'The jump from $23$ to $91$ is $91 - 23 = 68$, which counts gaps between neighbors.',
          'A list has one more member than it has gaps, so add one.',
          'The list contains $91 - 23 + 1 = 69$ integers.',
        ],
        answer: '$69$ integers.',
      },
      {
        problem: 'How many numbers are in the list $7, 12, 17, \\ldots, 152$?',
        steps: [
          'Each number is $5$ more than the one before, so the list is arithmetic with step $5$.',
          'Subtract $7$ from every entry to get $0, 5, 10, \\ldots, 145$, then divide by $5$ to get $0, 1, 2, \\ldots, 29$.',
          'That consecutive list runs from $0$ to $29$, so it has $29 - 0 + 1 = 30$ numbers, and the original list has the same length.',
        ],
        answer: '$30$ numbers.',
      },
      {
        problem: 'How many multiples of $6$ are strictly between $100$ and $400$?',
        steps: [
          'The first multiple of $6$ past $100$ is $102$, and the last one before $400$ is $396$; neither bound is itself a multiple of $6$, so “strictly” changes nothing here.',
          'Divide the list $102, 108, \\ldots, 396$ by $6$ to get $17, 18, \\ldots, 66$.',
          'That consecutive list has $66 - 17 + 1 = 50$ members.',
        ],
        answer: '$50$ multiples.',
      },
    ],
  },
  problems: [
    {
      q: 'How many integers are in the list $14, 15, 16, \\ldots, 63$?',
      choices: ['$49$', '$48$', '$50$', '$51$'],
      answer: 2,
      solution: 'Count posts, not gaps: $63 - 14 + 1 = 50$. The subtraction $63 - 14 = 49$ counts only the jumps between neighbors, and $51$ comes from adding one twice.',
    },
    {
      q: 'A charity run hands out bib numbers $37$ through $112$, with no number skipped and every number used once. How many runners get a bib?',
      choices: ['$76$', '$75$', '$77$', '$74$'],
      answer: 0,
      solution: 'Bibs $37$ to $112$ inclusive number $112 - 37 + 1 = 76$. The bare subtraction $112 - 37 = 75$ misses the first runner, and $74$ drops both ends.',
    },
    {
      q: 'How many numbers are in the list $4, 8, 12, \\ldots, 96$?',
      choices: ['$23$', '$24$', '$25$', '$92$'],
      answer: 1,
      solution: 'Divide every entry by $4$ to get $1, 2, \\ldots, 24$, a list of $24$ numbers. Subtracting $96 - 4 = 92$ counts nothing useful, and $23$ is the number of gaps rather than posts.',
    },
    {
      q: 'How many multiples of $7$ are there from $50$ to $300$, inclusive?',
      choices: ['$42$', '$34$', '$36$', '$35$'],
      answer: 3,
      solution: 'The first multiple of $7$ at or above $50$ is $56 = 7 \\cdot 8$, and the last at or below $300$ is $294 = 7 \\cdot 42$. Dividing by $7$ turns the list into $8, 9, \\ldots, 42$, which has $42 - 8 + 1 = 35$ members. Choosing $42$ counts every multiple from $7$ up, ignoring the lower bound; $34$ is the gap count.',
    },
    {
      q: 'How many numbers are in the list $3, 7, 11, \\ldots, 199$?',
      choices: ['$50$', '$49$', '$51$', '$66$'],
      answer: 0,
      solution: 'The step is $4$. Subtract $3$ from each entry to get $0, 4, 8, \\ldots, 196$, then divide by $4$ to get $0, 1, \\ldots, 49$, which has $50$ numbers. The choice $49$ is the number of gaps, $51$ adds the one back twice, and $66$ comes from dividing $199$ by the first term $3$ instead of by the step.',
    },
    {
      q: 'How many three-digit positive integers have $3$ as their units digit?',
      choices: ['$89$', '$100$', '$90$', '$91$'],
      answer: 2,
      solution: 'Such numbers are $103, 113, 123, \\ldots, 993$, a list with step $10$. Subtract $103$ and divide by $10$: $0, 1, \\ldots, 89$, so there are $90$ of them. Equivalently, the hundreds digit has $9$ options and the tens digit $10$, with the units fixed. Answering $100$ lets the hundreds digit be $0$.',
    },
    {
      q: 'How many integers $n$ satisfy $-17 \\le n \\le 42$?',
      choices: ['$59$', '$60$', '$25$', '$61$'],
      answer: 1,
      solution: 'The posts-not-gaps rule works with negatives too: $42 - (-17) + 1 = 60$. You can also count $17$ negative integers, the number $0$, and $42$ positive integers: $17 + 1 + 42 = 60$. The choice $25$ comes from computing $42 - 17$, forgetting that subtracting a negative adds; $59$ is the gap count.',
    },
    {
      q: 'How many perfect squares are strictly between $50$ and $1000$?',
      choices: ['$23$', '$31$', '$25$', '$24$'],
      answer: 3,
      solution: 'The squares in range are $8^2 = 64$ up through $31^2 = 961$ (since $7^2 = 49$ is too small and $32^2 = 1024$ is too big). Counting the bases $8, 9, \\ldots, 31$ gives $31 - 8 + 1 = 24$ squares. Choosing $31$ counts all squares from $1^2$ up and ignores the lower bound; $23$ is the gap count.',
    },
    {
      q: 'The sequence $5, 12, 19, 26, \\ldots$ continues by adding $7$ each time. How many terms of the sequence are less than $1000$?',
      choices: ['$143$', '$142$', '$144$', '$141$'],
      answer: 0,
      solution: 'The terms are $5 + 7k$ for $k = 0, 1, 2, \\ldots$. We need $5 + 7k < 1000$, so $7k < 995$, so $k \\le 142$ (because $7 \\cdot 142 = 994$ and $7 \\cdot 143 = 1001$). The values $k = 0$ through $k = 142$ give $143$ terms. Answering $142$ forgets the $k = 0$ term, the number $5$ itself.',
    },
    {
      q: 'How many odd perfect squares are there strictly between $100$ and $2000$?',
      choices: ['$34$', '$16$', '$17$', '$18$'],
      answer: 2,
      solution: 'A square is odd exactly when its base is odd. The squares from $100$ to $2000$ have bases $10$ through $44$ (as $44^2 = 1936$ and $45^2 = 2025$), and $10^2 = 100$ is even so the bound does not matter. The odd bases are $11, 13, \\ldots, 43$, a step-$2$ list with $\\frac{43 - 11}{2} + 1 = 17$ members. Choosing $34$ counts every square in the range, odd or even; $16$ is the gap count of the odd list.',
    },
  ],
}

const s13 = {
  id: '1.3',
  title: 'Counting with Addition and Subtraction',
  learn: {
    concepts: [
      {
        heading: 'Add when the groups cannot overlap',
        body: 'If every object you want belongs to exactly one of several groups, the total is the sum of the group sizes. Two-digit numbers and three-digit numbers never overlap, so there are $90 + 900 = 990$ numbers with two or three digits. Before adding, ask the one question that matters: could a single object land in two of my groups? If it can, plain addition counts it twice.',
      },
      {
        heading: 'Fix the overlap by subtracting it',
        body: 'When groups $A$ and $B$ share members, adding $|A| + |B|$ counts each shared member twice, so subtract the overlap once: $|A \\text{ or } B| = |A| + |B| - |A \\text{ and } B|$. Among $1$ to $80$ there are $13$ multiples of $6$ and $10$ multiples of $8$, but the $3$ multiples of $24$ are in both lists, so $13 + 10 - 3 = 20$ numbers are multiples of $6$ or $8$. The overlap of “multiple of $a$” and “multiple of $b$” is “multiple of the least common multiple,” not “multiple of $ab$.”',
      },
      {
        heading: 'Count what you do not want',
        body: 'Sometimes the objects you want are messy but the objects you do not want are tidy. Then count everything, count the unwanted ones, and subtract. “At least one” is the classic case: the opposite of “at least one $7$” is “no $7$ at all,” which is a single clean condition. The total minus the no-$7$ count is the at-least-one-$7$ count.',
      },
      {
        heading: 'The trap: adding cases that touch',
        body: 'The most common slip is splitting into cases that quietly share members and then adding. “Numbers with a $7$ in the tens place” and “numbers with a $7$ in the units place” both contain $77$. Whenever you add, either prove the cases are disjoint or subtract the overlap; and when a count comes out suspicious, shrink the problem to a version you can list by hand and compare.',
      },
    ],
    examples: [
      {
        problem: 'How many integers from $1$ to $80$ are multiples of $6$ or of $8$?',
        steps: [
          'Multiples of $6$ up to $80$: $6, 12, \\ldots, 78$, which is $13$ numbers; multiples of $8$: $8, 16, \\ldots, 80$, which is $10$ numbers.',
          'A number in both lists is a multiple of $\\text{lcm}(6, 8) = 24$, and there are $3$ of those up to $80$: $24$, $48$, $72$.',
          'Add the two lists and remove the double-counted overlap: $13 + 10 - 3 = 20$.',
        ],
        answer: '$20$ integers.',
      },
      {
        problem: 'A shelf holds $48$ books. Of them, $30$ are hardcover, $25$ are in English, and $12$ are hardcover books in English. How many of the books are neither hardcover nor in English?',
        steps: [
          'The number of books that are hardcover or in English is $30 + 25 - 12 = 43$, since the $12$ books in both groups were added twice.',
          'The books that are neither are everything else on the shelf.',
          'That leaves $48 - 43 = 5$ books.',
        ],
        answer: '$5$ books.',
      },
      {
        problem: 'How many integers from $1$ to $100$ are divisible by neither $3$ nor $7$?',
        steps: [
          'It is easier to count the numbers that are divisible by at least one of them and subtract from $100$.',
          'There are $33$ multiples of $3$, $14$ multiples of $7$, and $4$ multiples of $21$ up to $100$, so $33 + 14 - 4 = 43$ numbers are divisible by $3$ or $7$.',
          'The rest are divisible by neither: $100 - 43 = 57$.',
        ],
        answer: '$57$ integers.',
      },
    ],
  },
  problems: [
    {
      q: 'A club has $12$ members who play chess and $9$ members who play go, and no member plays both games. How many members play at least one of the two games?',
      choices: ['$3$', '$21$', '$108$', '$20$'],
      answer: 1,
      solution: 'The two groups share nobody, so they simply add: $12 + 9 = 21$. Multiplying to get $108$ would count pairs of members, not members; and there is no overlap to subtract, so $20$ removes a person who was never double-counted.',
    },
    {
      q: 'How many integers from $1$ to $60$ are multiples of $6$ or of $9$?',
      choices: ['$16$', '$15$', '$10$', '$13$'],
      answer: 3,
      solution: 'There are $10$ multiples of $6$ and $6$ multiples of $9$ up to $60$, and the multiples of $\\text{lcm}(6, 9) = 18$ — namely $18$, $36$, $54$ — are in both lists. So $10 + 6 - 3 = 13$. Adding without subtracting gives $16$; treating the overlap as multiples of $6 \\cdot 9 = 54$ gives $15$; subtracting the overlap twice gives $10$.',
    },
    {
      q: 'In a class of $30$ students, $18$ like apples, $15$ like bananas, and $7$ like both. How many students like neither fruit?',
      choices: ['$4$', '$11$', '$3$', '$8$'],
      answer: 0,
      solution: 'Students who like at least one fruit number $18 + 15 - 7 = 26$, so $30 - 26 = 4$ like neither. The choice $11$ is the number who like only apples, and $8$ is the number who like only bananas.',
    },
    {
      q: 'How many two-digit positive integers contain the digit $7$ at least once?',
      choices: ['$20$', '$17$', '$18$', '$19$'],
      answer: 2,
      solution: 'Count the complement. A two-digit number with no $7$ has $8$ choices for its tens digit ($1$ through $9$ except $7$) and $9$ for its units digit, so $72$ of the $90$ two-digit numbers avoid $7$, leaving $90 - 72 = 18$. Adding the $10$ numbers $70$ to $79$ and the $9$ numbers ending in $7$ gives $19$, which counts $77$ twice.',
    },
    {
      q: 'How many integers from $1$ to $200$ are divisible by $6$ but not by $8$?',
      choices: ['$33$', '$25$', '$8$', '$29$'],
      answer: 1,
      solution: 'There are $33$ multiples of $6$ up to $200$ (since $6 \\cdot 33 = 198$). A multiple of $6$ that is also a multiple of $8$ is a multiple of $\\text{lcm}(6, 8) = 24$, and there are $8$ of those. Remove them: $33 - 8 = 25$. Removing multiples of $48$ instead of $24$ (thinking the overlap is $6 \\cdot 8$) gives $29$; forgetting to remove anything gives $33$.',
    },
    {
      q: 'In a class of $32$ students, $20$ own a bike, $14$ own a scooter, and $5$ own neither. How many students own both a bike and a scooter?',
      choices: ['$7$', '$2$', '$12$', '$9$'],
      answer: 0,
      solution: 'The students who own at least one are $32 - 5 = 27$. Since $20 + 14 = 34$ counts the both-owners twice, the overlap is $34 - 27 = 7$. Using $32$ instead of $27$ as the “at least one” total gives $2$.',
    },
    {
      q: 'How many three-digit positive integers are divisible by $5$ or by $7$?',
      choices: ['$308$', '$256$', '$180$', '$282$'],
      answer: 3,
      solution: 'Three-digit multiples of $5$ run $100$ to $995$: $\\frac{995 - 100}{5} + 1 = 180$. Multiples of $7$ run $105$ to $994$: $\\frac{994 - 105}{7} + 1 = 128$. Multiples of $35$ run $105$ to $980$: $\\frac{980 - 105}{35} + 1 = 26$. So $180 + 128 - 26 = 282$. Skipping the subtraction gives $308$; subtracting the overlap twice gives $256$.',
    },
    {
      q: 'How many integers from $1$ to $100$ are divisible by at least one of $2$, $3$, and $5$?',
      choices: ['$103$', '$71$', '$74$', '$26$'],
      answer: 2,
      solution: 'Add the three lists: $50 + 33 + 20 = 103$. That counts numbers in two lists twice, so subtract the pairwise overlaps: $16$ multiples of $6$, $10$ of $10$, and $6$ of $15$, giving $103 - 32 = 71$. But the $3$ multiples of $30$ were added three times and then subtracted three times, so they are currently not counted at all; add them back: $71 + 3 = 74$. The choices $103$ and $71$ are the two half-finished stages, and $26$ is the number divisible by none of them.',
    },
    {
      q: 'How many integers from $1$ to $1000$ contain the digit $0$ at least once?',
      choices: ['$181$', '$180$', '$819$', '$190$'],
      answer: 0,
      solution: 'Count the numbers with no zero. There are $9$ one-digit, $9 \\cdot 9 = 81$ two-digit, and $9 \\cdot 9 \\cdot 9 = 729$ three-digit numbers with no $0$, so $819$ of the numbers from $1$ to $999$ avoid the digit; the number $1000$ contains zeros. That gives $1000 - 819 = 181$. Forgetting that $1000$ itself counts gives $180$; $819$ is the complement.',
    },
    {
      q: 'How many integers from $1$ to $500$ are divisible by none of $3$, $4$, and $5$?',
      choices: ['$109$', '$200$', '$208$', '$300$'],
      answer: 1,
      solution: 'Count the numbers divisible by at least one and subtract from $500$. The single lists have $166$, $125$, and $100$ members. The pairwise overlaps are multiples of $12$, $15$, and $20$: $41$, $33$, and $25$. The triple overlap is multiples of $60$: $8$. So at least one: $391 - 99 + 8 = 300$, and none: $500 - 300 = 200$. Stopping after the single lists gives $109$; forgetting to add back the multiples of $60$ gives $208$; $300$ is the complement.',
    },
  ],
}

const s14 = {
  id: '1.4',
  title: 'Counting Multiple Events',
  learn: {
    concepts: [
      {
        heading: 'Stages multiply',
        body: 'If a task happens in stages, and stage one can be done in $a$ ways and stage two in $b$ ways no matter how stage one went, the whole task can be done in $a \\cdot b$ ways. Picture a grid: each of the $a$ first choices heads a row of $b$ second choices, and the rows never share an outcome. A lock code that is a letter followed by a digit has $26 \\cdot 10 = 260$ possibilities, one per cell of that grid.',
      },
      {
        heading: 'Chains of stages',
        body: 'The idea extends to any number of stages: multiply the number of options at every stage. A four-digit number with every digit odd has $5$ options in each of $4$ slots, so there are $5^4 = 625$ of them. The order in which you fill the slots is yours to choose — pick the order that keeps every stage’s count fixed. Leading digits cannot be $0$, so the first slot of a number usually has $9$ options, not $10$.',
      },
      {
        heading: 'When the stages interact',
        body: 'Multiplication needs each stage’s count to be the same regardless of earlier choices. It breaks when a later stage depends on what was chosen before. Counting even three-digit numbers with distinct digits, the hundreds digit has $9$ options if the units digit is $0$ but only $8$ if the units digit is $2$, $4$, $6$, or $8$ — when the units digit is $0$, the hundreds digit only has to avoid $0$, which it had to avoid anyway; when the units digit is $2$, it must avoid both $0$ and $2$. The fix is to fill the most restricted slot first, and when that is not enough, split into cases and add the case counts.',
      },
      {
        heading: 'Multiply for “and then,” add for “or”',
        body: 'A choice made at every stage multiplies; a choice between separate routes adds. An outfit of one shirt from $4$ and either one of $3$ pants or one of $2$ shorts is $4 \\cdot (3 + 2) = 20$ outfits — multiply across the stages, add within the either-or. The trap is adding stage counts (a locker code is not $26 + 10$ things) or multiplying alternatives that never happen together.',
      },
    ],
    examples: [
      {
        problem: 'A locker code is one letter followed by two digits. How many different codes are possible?',
        steps: [
          'The letter can be any of $26$; the first digit any of $10$; the second digit any of $10$, regardless of what came before.',
          'Three independent stages multiply.',
          'There are $26 \\cdot 10 \\cdot 10 = 2600$ codes.',
        ],
        answer: '$2600$ codes.',
      },
      {
        problem: 'Rafa picks a shirt from $4$ choices, then picks either one of $3$ pairs of pants or one of $2$ pairs of shorts. How many outfits can he make?',
        steps: [
          'The bottom half is an either-or: $3 + 2 = 5$ possible choices, since pants and shorts are separate lists.',
          'The shirt and the bottom half are stages that go together, so they multiply.',
          'Total: $4 \\cdot 5 = 20$ outfits.',
        ],
        answer: '$20$ outfits.',
      },
      {
        problem: 'How many odd three-digit positive integers have three different digits?',
        steps: [
          'Fill the most restricted slot first: the units digit must be odd, so it has $5$ options.',
          'The hundreds digit cannot be $0$ and cannot repeat the units digit, leaving $8$ options; this count is $8$ no matter which odd digit was used.',
          'The tens digit must avoid the two digits already used, leaving $8$ options.',
          'Multiply: $5 \\cdot 8 \\cdot 8 = 320$. Starting with the hundreds digit instead would make the units-digit count depend on whether an odd digit was already used.',
        ],
        answer: '$320$ integers.',
      },
    ],
  },
  problems: [
    {
      q: 'A custom keychain is one of $3$ shapes, one of $5$ colors, and one of $2$ ring styles. How many different keychains are possible?',
      choices: ['$10$', '$15$', '$28$', '$30$'],
      answer: 3,
      solution: 'Three stages, each made regardless of the others: $3 \\cdot 5 \\cdot 2 = 30$. Adding the counts gives $10$, which would be right only if a keychain were one item chosen from a single list of $10$; $15$ and $28$ each drop one stage.',
    },
    {
      q: 'A password is exactly $4$ characters long, and each character is any one of the $26$ lowercase letters or the $10$ digits. Characters may repeat. How many different passwords are possible?',
      choices: ['$1{,}679{,}616$', '$466{,}976$', '$1{,}413{,}720$', '$144$'],
      answer: 0,
      solution: 'Every slot has $26 + 10 = 36$ options, and the four slots are independent: $36^4 = 1{,}679{,}616$. Choosing $466{,}976 = 26^4 + 10^4$ counts only all-letter and all-digit passwords; $1{,}413{,}720 = 36 \\cdot 35 \\cdot 34 \\cdot 33$ forbids repeats the problem allows; $144 = 36 \\cdot 4$ adds the slots instead of multiplying.',
    },
    {
      q: 'How many five-digit positive integers have every digit equal to $1$, $2$, or $3$?',
      choices: ['$125$', '$15$', '$243$', '$162$'],
      answer: 2,
      solution: 'Each of the five slots takes one of the $3$ allowed digits, and the leading digit is automatically nonzero: $3^5 = 243$. Choosing $125 = 5^3$ swaps the roles of slots and options; $162 = 2 \\cdot 3^4$ wrongly removes an option from the first slot; $15$ adds the slot counts.',
    },
    {
      q: 'How many three-digit positive integers have three different digits, all of them even?',
      choices: ['$100$', '$48$', '$60$', '$64$'],
      answer: 1,
      solution: 'The hundreds digit must be even and nonzero: $2, 4, 6, 8$, so $4$ options. The tens digit is any of the other four even digits ($0$ is now allowed), and the units digit any of the remaining three: $4 \\cdot 4 \\cdot 3 = 48$. Choosing $60 = 5 \\cdot 4 \\cdot 3$ allows a leading $0$; $100 = 4 \\cdot 5 \\cdot 5$ forgets that the digits must differ; $64 = 4^3$ does both.',
    },
    {
      q: 'Ren spins a spinner with $3$ equal sections twice and then rolls two standard six-sided dice, one red and one blue. How many different sequences of results are possible?',
      choices: ['$324$', '$18$', '$54$', '$108$'],
      answer: 0,
      solution: 'Each spin has $3$ outcomes and each die has $6$: $3 \\cdot 3 \\cdot 6 \\cdot 6 = 324$. Adding $3 + 3 + 6 + 6$ gives $18$; $54$ drops one die; $108$ drops one spin.',
    },
    {
      q: 'A cafe lets you build a meal by choosing one of $6$ mains, and then either choosing one of $4$ desserts or skipping dessert entirely. How many different meals are possible?',
      choices: ['$24$', '$10$', '$11$', '$30$'],
      answer: 3,
      solution: 'The dessert stage has $4 + 1 = 5$ options once “no dessert” is counted as a choice. Then $6 \\cdot 5 = 30$. Choosing $24$ forgets the skip option, and $10$ or $11$ adds instead of multiplying.',
    },
    {
      q: 'How many even three-digit positive integers have three different digits?',
      choices: ['$360$', '$328$', '$320$', '$400$'],
      answer: 1,
      solution: 'The units digit must be even, but its choice changes what the hundreds digit can do, so split. Units digit $0$: the hundreds digit has $9$ options and the tens digit $8$, giving $72$. Units digit $2$, $4$, $6$, or $8$: the hundreds digit avoids $0$ and the units digit, $8$ options, then the tens digit has $8$; that is $4 \\cdot 8 \\cdot 8 = 256$. Total $72 + 256 = 328$. Treating all five even units digits alike as $5 \\cdot 8 \\cdot 8 = 320$ undercounts the $0$ case; $5 \\cdot 9 \\cdot 8 = 360$ lets $0$ lead.',
    },
    {
      q: 'How many strings of four different letters from the English alphabet begin with a vowel (A, E, I, O, or U) and end with a consonant?',
      choices: ['$70{,}980$', '$63{,}000$', '$57{,}960$', '$60{,}480$'],
      answer: 2,
      solution: 'Fill the ends first, since they are restricted: $5$ vowels for the first slot, $21$ consonants for the last. The two middle slots then take any unused letters: $24$, then $23$. So $5 \\cdot 21 \\cdot 24 \\cdot 23 = 57{,}960$. Letting the middle letters repeat gives $5 \\cdot 21 \\cdot 26 \\cdot 26 = 70{,}980$; forgetting that the first vowel is also used up gives $5 \\cdot 21 \\cdot 25 \\cdot 24 = 63{,}000$; giving both middle slots $24$ options gives $60{,}480$.',
    },
    {
      q: 'How many positive integers less than $1000$ have all of their digits different and none of their digits equal to $0$?',
      choices: ['$585$', '$504$', '$729$', '$648$'],
      answer: 0,
      solution: 'The numbers split by length, and lengths never overlap, so add. One-digit: $9$. Two-digit: $9 \\cdot 8 = 72$. Three-digit: $9 \\cdot 8 \\cdot 7 = 504$. Total $9 + 72 + 504 = 585$. Choosing $504$ counts only three-digit numbers; $729$ allows repeats; $648$ allows a $0$ in the last two slots.',
    },
    {
      q: 'How many three-digit positive integers contain exactly one digit equal to $5$?',
      choices: ['$243$', '$81$', '$225$', '$216$'],
      answer: 2,
      solution: 'Split by where the $5$ sits, since the hundreds slot has different rules. The $5$ in the hundreds place: the other two digits each avoid $5$, $9 \\cdot 9 = 81$. The $5$ in the tens place: the hundreds digit avoids $0$ and $5$ ($8$ options), the units digit avoids $5$ ($9$), giving $72$. The $5$ in the units place: likewise $72$. Total $81 + 72 + 72 = 225$. Treating every position like the hundreds place gives $243$; treating every position like the tens place gives $216$; $81$ is just one case.',
    },
  ],
}

const s15 = {
  id: '1.5',
  title: 'Permutations',
  learn: {
    concepts: [
      {
        heading: 'Arranging everything: $n!$',
        body: 'To line up $n$ different objects in a row, fill the positions one at a time: $n$ choices for the first spot, $n - 1$ for the second (one object is used up), $n - 2$ for the third, and so on down to $1$. The stages multiply, and the product $n \\cdot (n-1) \\cdot (n-2) \\cdots 2 \\cdot 1$ is written $n!$, read “$n$ factorial.” Six runners can finish a race in $6! = 720$ different orders. An arrangement in a definite order is called a permutation.',
      },
      {
        heading: 'Arranging some of them: a decreasing run',
        body: 'If only $k$ of the $n$ objects get placed, the same slot-by-slot count stops after $k$ factors: $n \\cdot (n-1) \\cdots (n-k+1)$. Handing out gold, silver, and bronze among $9$ competitors is $9 \\cdot 8 \\cdot 7 = 504$ ways — three factors, one per medal, each one smaller because a competitor cannot win twice. This equals $\\frac{n!}{(n-k)!}$: the full factorial with the unused tail $(n-k)!$ divided away.',
      },
      {
        heading: 'Factorials without the arithmetic',
        body: 'Never compute a big factorial when a ratio is asked for. Since $10! = 10 \\cdot 9 \\cdot 8!$, the ratio $\\frac{10!}{8!}$ is just $10 \\cdot 9 = 90$: everything from $8$ down cancels. Also $0! = 1$ (there is exactly one way to arrange nothing), which is what makes $\\frac{n!}{(n-n)!} = n!$ come out right when every object is placed.',
      },
      {
        heading: 'What permutations do not count',
        body: 'A permutation counts orderings of distinguishable objects. If the problem only asks which objects were chosen, not in what order, $n!$ overcounts; if some objects are identical, swapping them changes nothing and $n!$ overcounts again. Both fixes come in later chapters. For now the working trap is restrictions: when a certain person must sit at an end, or two people must be together, place the restricted people first, then arrange the rest — and never multiply by $n!$ as if the restriction were not there.',
      },
    ],
    examples: [
      {
        problem: 'Six runners finish a race with no ties. In how many different orders can they finish?',
        steps: [
          'The winner can be any of the $6$ runners.',
          'Second place is any of the remaining $5$, third any of the remaining $4$, and so on down to the last runner, who has $1$ option.',
          'Multiply: $6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 6! = 720$.',
        ],
        answer: '$720$ orders.',
      },
      {
        problem: 'Nine competitors enter a contest that awards a gold, a silver, and a bronze medal to three different people. In how many ways can the medals be awarded?',
        steps: [
          'Gold can go to any of the $9$ competitors.',
          'Silver then goes to one of the other $8$, and bronze to one of the remaining $7$.',
          'The medals are different, so this ordered count is what we want: $9 \\cdot 8 \\cdot 7 = 504$.',
        ],
        answer: '$504$ ways.',
      },
      {
        problem: 'Five children, one of whom is Ana, line up in a row for a photo. Ana insists on standing at one of the two ends. How many lineups are possible?',
        steps: [
          'Place the restricted person first: Ana has $2$ possible positions, the left end or the right end.',
          'The other four children fill the remaining four spots in any order: $4! = 24$ ways.',
          'The two stages multiply: $2 \\cdot 24 = 48$.',
        ],
        answer: '$48$ lineups.',
      },
    ],
  },
  problems: [
    {
      q: 'The five letters of the word GRAPH are arranged in a row. How many different arrangements are there?',
      choices: ['$25$', '$120$', '$24$', '$60$'],
      answer: 1,
      solution: 'The five letters are all different and all get placed, in order: $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$. The choice $24$ is $4!$, as if one letter were pinned in place; $60$ halves the count as if two letters were identical; $25$ is $5^2$.',
    },
    {
      q: 'A class of $7$ students elects a president, a vice president, and a secretary, all different people. In how many ways can the three offices be filled?',
      choices: ['$343$', '$5040$', '$35$', '$210$'],
      answer: 3,
      solution: 'Three offices, filled one at a time from a shrinking pool: $7 \\cdot 6 \\cdot 5 = 210$. Letting one student hold several offices gives $7^3 = 343$; $5040 = 7!$ arranges all seven students; $35$ would count three-person groups with no offices attached.',
    },
    {
      q: 'What is the value of $\\frac{8!}{6!}$?',
      choices: ['$56$', '$336$', '$48$', '$8$'],
      answer: 0,
      solution: 'Write $8! = 8 \\cdot 7 \\cdot 6!$, so the $6!$ cancels and $\\frac{8!}{6!} = 8 \\cdot 7 = 56$. The choice $336$ is $8 \\cdot 7 \\cdot 6$, one factor too many; $48 = 8 \\cdot 6$ multiplies the two given numbers; $8$ stops after a single factor.',
    },
    {
      q: 'How many four-letter strings can be made from the letters A, B, C, D, E, F, G, H if no letter may be used more than once?',
      choices: ['$4096$', '$70$', '$1680$', '$40{,}320$'],
      answer: 2,
      solution: 'Four slots from a pool of $8$ with no repeats: $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$. Allowing repeats gives $8^4 = 4096$; $40{,}320 = 8!$ arranges all eight letters; $70$ ignores the order of the four letters chosen.',
    },
    {
      q: 'Six people, including Jo and Kai, sit in a row of six chairs. Jo must sit in the leftmost chair, and Kai must not sit in the rightmost chair. How many seatings are possible?',
      choices: ['$120$', '$720$', '$24$', '$96$'],
      answer: 3,
      solution: 'Seat the restricted people first. Jo has $1$ choice. Kai then has $4$ choices: any chair except Jo’s and the rightmost one. The other four people fill the four remaining chairs in $4! = 24$ ways. Total $1 \\cdot 4 \\cdot 24 = 96$. Choosing $120$ seats Jo and then forgets Kai’s restriction; $24$ pins Kai to a single chair as well; $720$ ignores both restrictions.',
    },
    {
      q: 'How many four-digit positive integers have four different digits?',
      choices: ['$4536$', '$5040$', '$9000$', '$6561$'],
      answer: 0,
      solution: 'The thousands digit avoids $0$: $9$ options. The hundreds digit avoids only the digit already used, so $0$ is allowed: $9$ options. Then $8$ and $7$. Total $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. The choice $5040 = 10 \\cdot 9 \\cdot 8 \\cdot 7$ allows a leading zero; $9000$ counts all four-digit numbers; $6561 = 9^4$ forgets the digits must differ.',
    },
    {
      q: 'Eight different people, five boys and three girls, stand in a row. The three girls must stand next to each other, in a single block. How many arrangements are possible?',
      choices: ['$720$', '$4320$', '$40{,}320$', '$2160$'],
      answer: 1,
      solution: 'Glue the girls into one block. That block plus the $5$ boys make $6$ units, arranged in $6! = 720$ ways. Inside the block the three girls can stand in $3! = 6$ orders. Multiply: $720 \\cdot 6 = 4320$. Choosing $720$ forgets that the girls inside the block are different people; $40{,}320 = 8!$ ignores the restriction; $2160$ uses $3$ instead of $3!$ for the block.',
    },
    {
      q: 'The six letters of the word PLANET are arranged in a row. How many arrangements have a consonant at both ends?',
      choices: ['$144$', '$384$', '$288$', '$432$'],
      answer: 2,
      solution: 'PLANET has four consonants (P, L, N, T) and two vowels. Fill the restricted end slots first: $4$ choices for the left end, then $3$ for the right end. The four remaining letters fill the middle in $4! = 24$ ways. Total $4 \\cdot 3 \\cdot 24 = 288$. Using $4 \\cdot 4$ for the ends gives $384$ and lets one consonant appear twice; $432 = 720 - 288$ counts the arrangements with a vowel at some end, the complement; $144$ halves the answer as if the two ends were interchangeable.',
    },
    {
      q: 'Seven people, including Ann and Ben, sit in a row of seven chairs. How many seatings have Ann and Ben not sitting next to each other?',
      choices: ['$1440$', '$4320$', '$3960$', '$3600$'],
      answer: 3,
      solution: 'Count the complement. All seatings: $7! = 5040$. Seatings with Ann and Ben adjacent: glue them into a block, arrange $6$ units in $6! = 720$ ways, and multiply by $2$ for the order inside the block, giving $1440$. So $5040 - 1440 = 3600$. Choosing $1440$ answers the opposite question; $4320$ forgets to double for Ann-Ben versus Ben-Ann inside the block.',
    },
    {
      q: 'The digits $1, 2, 3, 4, 5$ are each used exactly once to form a five-digit number. How many of these numbers are even and greater than $30{,}000$?',
      choices: ['$24$', '$30$', '$36$', '$48$'],
      answer: 1,
      solution: 'The first digit must be $3$, $4$, or $5$ and the last digit must be $2$ or $4$, but these interact because $4$ cannot be in both places. Case 1, first digit $3$ or $5$: $2$ choices, then the last digit is $2$ or $4$ ($2$ choices), then the middle three digits arrange in $3! = 6$ ways: $2 \\cdot 2 \\cdot 6 = 24$. Case 2, first digit $4$: the last digit must be $2$, and the middle arranges in $6$ ways. Total $24 + 6 = 30$. Multiplying $3 \\cdot 2 \\cdot 6 = 36$ ignores the interaction; $24$ drops the second case.',
    },
  ],
}

const challenge = [
  {
    q: 'How many numbers are in the list $-8, -5, -2, \\ldots, 61$?',
    choices: ['$23$', '$69$', '$24$', '$25$'],
    answer: 2,
    solution: 'The step is $3$. Add $8$ to every entry to get $0, 3, 6, \\ldots, 69$, then divide by $3$ to get $0, 1, \\ldots, 23$, which has $24$ members. The choice $69$ is the shifted last entry, not a count, and $23$ is the number of gaps.',
  },
  {
    q: 'How many three-digit positive integers have all three digits even?',
    choices: ['$100$', '$125$', '$80$', '$64$'],
    answer: 0,
    solution: 'The hundreds digit must be even and nonzero: $2, 4, 6, 8$, so $4$ options. The tens and units digits can each be any of the $5$ even digits, $0$ included. Total $4 \\cdot 5 \\cdot 5 = 100$. Choosing $125$ lets the number start with $0$; $64$ forbids $0$ everywhere.',
  },
  {
    q: 'How many integers from $1$ to $360$ are multiples of at least one of $4$, $6$, and $9$?',
    choices: ['$190$', '$130$', '$160$', '$140$'],
    answer: 3,
    solution: 'The single lists have $90$, $60$, and $40$ members, adding to $190$. The pairwise overlaps are multiples of $12$, $36$, and $18$: $30$, $10$, and $20$, so subtract $60$ to reach $130$. The multiples of $36$ (the least common multiple of all three) were added three times and subtracted three times, so add the $10$ of them back: $140$. The choices $190$ and $130$ are the two half-finished stages; $160$ uses the products $24$, $36$, $54$ as the overlaps instead of the least common multiples.',
  },
  {
    q: 'How many integers from $1$ to $300$ contain the digit $7$ at least once?',
    choices: ['$43$', '$57$', '$60$', '$63$'],
    answer: 1,
    solution: 'Count the numbers with no $7$. Write every number from $0$ to $299$ as three digits with leading zeros allowed: the hundreds digit is $0$, $1$, or $2$ (never $7$), and each of the other two digits has $9$ non-$7$ options, giving $3 \\cdot 9 \\cdot 9 = 243$ numbers with no $7$, one of which is $0$. Then $300$ itself has no $7$. Among $1$ to $300$ that is $242 + 1 = 243$ numbers with no $7$, so $300 - 243 = 57$ contain one. The choice $43$ stops at $250$; $60$ adds the $30$ numbers with $7$ in the tens place to the $30$ with $7$ in the units place and forgets they share $77$, $177$, $277$.',
  },
  {
    q: 'How many three-digit positive integers have a digit sum of $25$ or more?',
    choices: ['$10$', '$7$', '$9$', '$12$'],
    answer: 0,
    solution: 'The largest possible sum is $27$, so split by sum. Sum $27$: only $999$. Sum $26$: two $9$s and an $8$, and the $8$ can be in any of $3$ positions. Sum $25$: either two $9$s and a $7$ ($3$ positions for the $7$) or one $9$ and two $8$s ($3$ positions for the $9$). Total $1 + 3 + 3 + 3 = 10$. Forgetting the $9, 8, 8$ pattern gives $7$.',
  },
  {
    q: 'How many integers from $1$ to $1000$ are divisible by $3$ or by $5$, but not by both?',
    choices: ['$533$', '$335$', '$401$', '$467$'],
    answer: 2,
    solution: 'Divisible by $3$: $333$. Divisible by $5$: $200$. Divisible by both, that is by $15$: $66$. Divisible by $3$ or $5$ is $333 + 200 - 66 = 467$, but that still includes the $66$ multiples of $15$, which the problem excludes; remove them again: $467 - 66 = 401$. Equivalently, subtract the overlap twice from the plain sum. Choosing $467$ stops one step early; $533$ adds the lists and never subtracts.',
  },
  {
    q: 'Four married couples stand in a row of $8$ for a photograph. Each couple must stand together, side by side. How many arrangements are possible?',
    choices: ['$24$', '$384$', '$40{,}320$', '$192$'],
    answer: 1,
    solution: 'Glue each couple into a block. The four blocks can be ordered in $4! = 24$ ways, and inside each block the two partners can swap, giving $2$ choices per couple and $2^4 = 16$ overall. Total $24 \\cdot 16 = 384$. Choosing $24$ forgets the swaps inside blocks; $192$ multiplies by $8 = 2 \\cdot 4$ instead of $2^4$; $40{,}320 = 8!$ ignores the couples entirely.',
  },
  {
    q: 'Four boys and three girls, all different people, stand in a row of $7$ so that no two girls stand next to each other. How many arrangements are possible?',
    choices: ['$576$', '$4320$', '$240$', '$1440$'],
    answer: 3,
    solution: 'Place the boys first: $4! = 24$ orders. A row of four boys has $5$ slots for a girl — before the first boy, between neighbors, and after the last — and putting the three girls in three different slots is exactly what keeps them apart. The girls are different people, so the slots are chosen in order: $5 \cdot 4 \cdot 3 = 60$. Total $24 \cdot 60 = 1440$. Choosing $576 = 24 \cdot 4 \cdot 3 \cdot 2$ forgets the two end slots; $240 = 24 \cdot 10$ treats the girls as interchangeable; $4320 = 7! - 5! \cdot 3!$ only stops the three girls from forming a single block, which still allows two of them to touch.',
  },
  {
    q: 'How many three-digit positive integers have digits whose product is $12$?',
    choices: ['$15$', '$12$', '$18$', '$9$'],
    answer: 0,
    solution: 'List the sets of three digits from $1$ to $9$ that multiply to $12$: $\\{1, 2, 6\\}$, $\\{1, 3, 4\\}$, and $\\{2, 2, 3\\}$ (no digit can be $0$, and $12 = 1 \\cdot 1 \\cdot 12$ needs a digit larger than $9$). Three different digits can be ordered in $3! = 6$ ways each, giving $12$. The set $\\{2, 2, 3\\}$ has only $3$ orders, one for each position of the $3$. Total $6 + 6 + 3 = 15$. Choosing $18$ treats $2, 2, 3$ as if all three digits were different; $12$ forgets that set.',
  },
  {
    q: 'The six letters of the word CRAYON are arranged in a row. In how many of the arrangements does the C appear somewhere to the left of the R (not necessarily next to it)?',
    choices: ['$240$', '$120$', '$360$', '$720$'],
    answer: 2,
    solution: 'There are $6! = 720$ arrangements in all. Pair each arrangement with the one obtained by swapping the C and the R: this pairs every C-before-R arrangement with exactly one R-before-C arrangement, so the two kinds are equally numerous. Half of $720$ is $360$. The choice $240$ is $2 \\cdot 5!$, the count with C and R adjacent (in either order); $120$ is the count with C and R adjacent and C first.',
  },
  {
    q: 'How many four-digit positive integers have four different digits and contain both the digit $0$ and the digit $9$?',
    choices: ['$672$', '$504$', '$448$', '$336$'],
    answer: 1,
    solution: 'Place the restricted digit first. The $0$ cannot lead, so it takes one of the $3$ non-leading positions. The $9$ then takes any of the $3$ remaining positions. The last two positions are filled with two different digits from the $8$ digits other than $0$ and $9$: $8 \\cdot 7 = 56$ ways. Total $3 \\cdot 3 \\cdot 56 = 504$. Letting $0$ take any of the $4$ positions gives $672$; giving the $9$ only $2$ positions gives $336$.',
  },
  {
    q: 'How many four-digit positive integers have four different digits and are divisible by $5$?',
    choices: ['$1008$', '$1800$', '$896$', '$952$'],
    answer: 3,
    solution: 'The units digit is $0$ or $5$, and the two cases behave differently, so split. Units digit $0$: the thousands digit has $9$ options, then $8$, then $7$, giving $504$. Units digit $5$: the thousands digit avoids $0$ and $5$ ($8$ options), the hundreds digit avoids the two used digits ($8$ options, since $0$ is now allowed), the tens digit has $7$: $8 \\cdot 8 \\cdot 7 = 448$. Total $504 + 448 = 952$. Treating both cases like the $0$ case gives $1008$; treating both like the $5$ case gives $896$; $1800$ ignores the distinct-digit condition.',
  },
]

const worksheet = [
  {
    q: 'How many integers are in the list $31, 32, 33, \\ldots, 118$?',
    answer: '$88$',
    solution: 'Posts, not gaps: $118 - 31 + 1 = 88$.',
  },
  {
    q: 'How many numbers are in the list $9, 16, 23, \\ldots, 380$?',
    answer: '$54$',
    solution: 'The step is $7$. Subtract $9$ to get $0, 7, \\ldots, 371$ and divide by $7$ to get $0, 1, \\ldots, 53$, so there are $54$ numbers.',
  },
  {
    q: 'The list $11, 18, 25, \\ldots, m$ climbs by $7$ each time and contains exactly $40$ numbers. What is $m$?',
    answer: '$284$',
    solution: 'The first number is $11$ and there are $39$ jumps of $7$ after it, so $m = 11 + 39 \\cdot 7 = 284$. Using $40$ jumps gives $291$, one number too many.',
  },
  {
    q: 'How many integers from $1$ to $90$ are multiples of neither $4$ nor $9$?',
    answer: '$60$',
    solution: 'There are $22$ multiples of $4$ and $10$ multiples of $9$; the overlap is the $2$ multiples of $36$. So $22 + 10 - 2 = 30$ numbers are multiples of at least one, and $90 - 30 = 60$ are multiples of neither.',
  },
  {
    q: 'In a class of $28$ students, $17$ play soccer, $13$ are in the band, and $6$ do neither. How many students both play soccer and are in the band?',
    answer: '$8$',
    solution: 'Students in at least one activity: $28 - 6 = 22$. Adding $17 + 13 = 30$ counts the both-students twice, so the overlap is $30 - 22 = 8$.',
  },
  {
    q: 'How many four-digit positive integers have four different digits, all of them odd?',
    answer: '$120$',
    solution: 'Only the five odd digits are available and none may repeat: $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$.',
  },
  {
    q: 'What is the value of $\\frac{9!}{7!}$?',
    answer: '$72$',
    solution: 'Since $9! = 9 \\cdot 8 \\cdot 7!$, the ratio is $9 \\cdot 8 = 72$.',
  },
  {
    q: 'Six friends, including Mia and Noah, line up in a row. Mia must stand at one end of the row and Noah at the other end. How many lineups are possible?',
    answer: '$48$',
    solution: 'Place the restricted people first: either Mia is on the left and Noah on the right, or the reverse, so $2$ ways. The other four friends fill the four middle spots in $4! = 24$ ways. Total $2 \\cdot 24 = 48$.',
  },
  {
    q: 'How many three-digit positive integers contain exactly one digit equal to $0$?',
    answer: '$162$',
    solution: 'The $0$ cannot be the hundreds digit. If the $0$ is the tens digit, the hundreds and units digits each have $9$ nonzero options: $81$. If the $0$ is the units digit, likewise $81$. Total $81 + 81 = 162$.',
  },
  {
    q: 'The digits $1, 2, 3, 4, 5$ are each used exactly once to form a five-digit number. How many of these numbers are odd and greater than $40{,}000$?',
    answer: '$30$',
    solution: 'The first digit is $4$ or $5$ and the last digit is odd, and the cases interact because $5$ is both. First digit $4$: the last digit is $1$, $3$, or $5$ ($3$ choices), and the middle three digits arrange in $3! = 6$ ways, giving $18$. First digit $5$: the last digit is $1$ or $3$ ($2$ choices), then $6$ arrangements, giving $12$. Total $18 + 12 = 30$.',
  },
]

export default {
  id: 'intro-counting-ch01',
  book: 'intro-counting',
  number: 1,
  title: 'Counting Is Arithmetic',
  intro:
    'Most counting questions are arithmetic in disguise: a list to measure, groups to add or subtract, stages to multiply. This chapter gives you those four tools and teaches you to spot which one a problem is asking for — including the moments when a tempting shortcut counts something twice or misses it entirely. Master these and the harder chapters ahead become combinations of moves you already know.',
  sections: [s12, s13, s14, s15],
  challenge,
  worksheet,
}
