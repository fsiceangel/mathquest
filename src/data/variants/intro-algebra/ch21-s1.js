// Introduction to Algebra chapter 21 — variations for section 21.1
// (Arithmetic Sequences). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked twice by two genuinely different routes, and the
//    second route is written out in the solution. A common difference was
//    found by subtracting neighbours AND by checking that a two-gap jump is
//    exactly twice one gap. An nth term was found with $a + (n-1)d$ AND by
//    anchoring on a different term of the same sequence and stepping from
//    there. A missing middle term was found by averaging AND by forcing the
//    two gaps to be equal. A count was found by solving the inequality AND by
//    naming the last surviving term and the first term that breaks the bound.
//  - Every slot keeps the shape of its base answer: a difference stays a
//    difference, a next term stays a next term, a count stays a count.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS, and that mistake really does produce that choice. The traps running
//    through this section are: THE EXTRA STEP, THE MISSING STEP, THE FENCEPOST,
//    REPORTING THE DIFFERENCE, REPORTING A TERM, SKIPPING A TERM, STEPPING THE
//    WRONG WAY, DROPPING THE FIRST TERM, FORGETTING THE OFFSET, DIVIDING BY THE
//    NUMBER OF TERMS, FORGETTING TO SUBTRACT THE FIRST TERM, REPORTING THE
//    TOTAL GROWTH, REPORTING THE WHOLE GAP, HALVING THE GAP, REPORTING THE SUM,
//    REPORTING THE MIDDLE TERM, and COUNTING THE BOUNDARY TERM.
//  - No two choices inside an item name the same number.

const s211 = [
  // s1 — read the common difference straight off an increasing sequence.
  [
    {
      q: 'What is the common difference of the arithmetic sequence $6, 15, 24, 33, \\ldots$?',
      choices: ['$9$', '$6$', '$15$', '$18$'],
      answer: 0,
      solution:
        'The common difference is the step from each term to the next: $15 - 6 = 9$ ✓. Every other gap agrees: $24 - 15 = 9$ ✓ and $33 - 24 = 9$ ✓, so the step really is the same every time. Check a second, independent way by jumping two gaps at once instead of one: from $6$ to $24$ is $18$, and two equal steps must make $18$, so one step is $\\frac{18}{2} = 9$ ✓ — and from $15$ to $33$ is also $18$, the same two-step jump. (The choice $6$ is REPORTING A TERM, handing back the first term instead of the step; the choice $15$ is REPORTING A TERM as well, this time the second one; the choice $18$ is SKIPPING A TERM, measuring $24 - 6$ across two gaps and calling it one.)',
    },
    {
      q: 'What is the common difference of the arithmetic sequence $8, 19, 30, 41, \\ldots$?',
      choices: ['$8$', '$19$', '$11$', '$22$'],
      answer: 2,
      solution:
        'Subtract neighbours: $19 - 8 = 11$ ✓, and the pattern holds since $30 - 19 = 11$ ✓ and $41 - 30 = 11$ ✓. Check a second, independent way with the neighbour-average test: in an arithmetic sequence the middle of any three terms is the average of the outer two, and $\\frac{8 + 30}{2} = 19$ ✓, which pins the middle term at $19$ and forces each gap to be half of $30 - 8 = 22$, that is $11$ ✓. (The choice $8$ is REPORTING A TERM, the first one; the choice $19$ is REPORTING A TERM, the second one; the choice $22$ is SKIPPING A TERM, the two-gap jump $30 - 8$ mistaken for a single step.)',
    },
    {
      q: 'What is the common difference of the arithmetic sequence $24, 30, 36, 42, \\ldots$?',
      choices: ['$24$', '$30$', '$12$', '$6$'],
      answer: 3,
      solution:
        'Take the step from one term to the next: $30 - 24 = 6$ ✓. The rest agree: $36 - 30 = 6$ ✓ and $42 - 36 = 6$ ✓. Check a second, independent way by measuring the whole run instead of one gap: from $24$ to $42$ is $18$, and that run covers three gaps, so each gap is $\\frac{18}{3} = 6$ ✓ — a completely different division, the same step. (The choice $24$ is REPORTING A TERM, the first one; the choice $30$ is REPORTING A TERM, the second one; the choice $12$ is SKIPPING A TERM, reading $36 - 24$ across two gaps as though it were one.)',
    },
  ],
  // s2 — next term of a DECREASING sequence; the difference is not the answer.
  [
    {
      q: 'What is the next term of the arithmetic sequence $60, 49, 38, 27, \\ldots$?',
      choices: ['$-11$', '$16$', '$38$', '$5$'],
      answer: 1,
      solution:
        'The common difference is $49 - 60 = -11$, so every term drops by $11$. The next term comes after $27$: $27 - 11 = 16$ ✓. Check a second, independent way without ever naming $d$: in an arithmetic sequence each term is the average of its neighbours, so the missing term $t$ must satisfy $27 = \\frac{38 + t}{2}$, giving $38 + t = 54$ and $t = 16$ ✓ — same landing spot, different reasoning. (The choice $-11$ is REPORTING THE DIFFERENCE, which is the size of the step, not the term you land on; the choice $38$ is STEPPING THE WRONG WAY, adding $11$ to $27$ and walking back up the sequence; the choice $5$ is THE EXTRA STEP, dropping $11$ twice from $27$ and landing on the term after the one asked for.)',
    },
    {
      q: 'What is the next term of the arithmetic sequence $54, 41, 28, 15, \\ldots$?',
      choices: ['$-13$', '$28$', '$2$', '$-11$'],
      answer: 2,
      solution:
        'Each step is $41 - 54 = -13$, and the gaps confirm it: $28 - 41 = -13$ ✓ and $15 - 28 = -13$ ✓. The next term is $15 - 13 = 2$ ✓. Check a second, independent way with the neighbour-average rule: the term $t$ after $15$ must make $15$ the average of $28$ and $t$, so $28 + t = 30$ and $t = 2$ ✓. (The choice $-13$ is REPORTING THE DIFFERENCE instead of the next term; the choice $28$ is STEPPING THE WRONG WAY, adding $13$ to $15$ and returning to a term already listed; the choice $-11$ is THE EXTRA STEP, subtracting $13$ twice and overshooting into the term after next.)',
    },
    {
      q: 'What is the next term of the arithmetic sequence $72, 63, 54, 45, \\ldots$?',
      choices: ['$-9$', '$54$', '$27$', '$36$'],
      answer: 3,
      solution:
        'The sequence falls by $63 - 72 = -9$ each time, so the next term is $45 - 9 = 36$ ✓. Check a second, independent way by reading the terms as $72$ minus a pile of nines: $72, 72 - 9, 72 - 18, 72 - 27$, so the listed terms use $0, 1, 2, 3$ nines and the next one uses $4$: $72 - 36 = 36$ ✓ — a different bookkeeping, the same answer. (The choice $-9$ is REPORTING THE DIFFERENCE, the step rather than the term; the choice $54$ is STEPPING THE WRONG WAY, adding $9$ to $45$ and climbing back into the list; the choice $27$ is THE EXTRA STEP, subtracting $9$ twice from $45$.)',
    },
  ],
  // s3 — the nth term for a modest n: count steps, not terms.
  [
    {
      q: 'What is the $12$th term of the arithmetic sequence $6, 15, 24, \\ldots$?',
      choices: ['$105$', '$114$', '$96$', '$108$'],
      answer: 0,
      solution:
        'Here $a = 6$ and $d = 15 - 6 = 9$. Walking from the $1$st term to the $12$th takes $12 - 1 = 11$ steps, so the $12$th term is $6 + 11 \\times 9 = 6 + 99 = 105$ ✓. Check a second, independent way by anchoring somewhere else in the sequence: the $3$rd term is $24$, and from the $3$rd to the $12$th is $12 - 3 = 9$ more steps, giving $24 + 9 \\times 9 = 24 + 81 = 105$ ✓ — a different anchor and a different multiplication, the same term. (The choice $114$ is THE EXTRA STEP, $6 + 12 \\times 9$, which lands on the $13$th term; the choice $96$ is THE MISSING STEP, $6 + 10 \\times 9$, the $11$th term; the choice $108$ is DROPPING THE FIRST TERM, computing $12 \\times 9$ as though the sequence began at $9$.)',
    },
    {
      q: 'What is the $9$th term of the arithmetic sequence $8, 19, 30, \\ldots$?',
      choices: ['$107$', '$96$', '$85$', '$99$'],
      answer: 1,
      solution:
        'With $a = 8$ and $d = 11$, reaching the $9$th term takes $9 - 1 = 8$ steps: $8 + 8 \\times 11 = 8 + 88 = 96$ ✓. Check a second, independent way by listing in blocks instead of multiplying: the $5$th term is $8 + 4 \\times 11 = 52$, and four more steps give $52 + 44 = 96$ ✓ — the sequence $52, 63, 74, 85, 96$ walks right onto it. (The choice $107$ is THE EXTRA STEP, $8 + 9 \\times 11$, one term too far; the choice $85$ is THE MISSING STEP, $8 + 7 \\times 11$, the $8$th term; the choice $99$ is DROPPING THE FIRST TERM, computing $9 \\times 11$ and forgetting the sequence starts at $8$.)',
    },
    {
      q: 'What is the $15$th term of the arithmetic sequence $24, 30, 36, \\ldots$?',
      choices: ['$114$', '$102$', '$90$', '$108$'],
      answer: 3,
      solution:
        'Here $a = 24$ and $d = 6$, and the $15$th term takes $15 - 1 = 14$ steps: $24 + 14 \\times 6 = 24 + 84 = 108$ ✓. Check a second, independent way by factoring the whole sequence: every term is a multiple of $6$, since $24 = 6 \\times 4$, $30 = 6 \\times 5$, $36 = 6 \\times 6$ — the $n$th term is $6 \\times (n + 3)$, so the $15$th is $6 \\times 18 = 108$ ✓. (The choice $114$ is THE EXTRA STEP, $24 + 15 \\times 6$, the $16$th term; the choice $102$ is THE MISSING STEP, $24 + 13 \\times 6$, the $14$th term; the choice $90$ is DROPPING THE FIRST TERM, computing $15 \\times 6$ alone.)',
    },
  ],
  // s4 — spot the arithmetic sequence among four patterns.
  [
    {
      q: 'One of these sequences is arithmetic. Which one?',
      choices: ['$16, 27, 38, 49, \\ldots$', '$2, 6, 18, 54, \\ldots$', '$1, 3, 6, 10, \\ldots$', '$2, 2, 4, 6, \\ldots$'],
      answer: 0,
      solution:
        'Arithmetic means the gap between neighbours never changes. In $16, 27, 38, 49$ the gaps are $11, 11, 11$ ✓ — same step every time. The others fail: $2, 6, 18, 54$ has gaps $4, 12, 36$ (it multiplies by $3$ instead, so it is geometric) ✗; $1, 3, 6, 10$ has gaps $2, 3, 4$ ✗; $2, 2, 4, 6$ has gaps $0, 2, 2$ ✗. Check the winner a second, independent way with the neighbour-average test, which does not use gaps at all: $\\frac{16 + 38}{2} = 27$ ✓ and $\\frac{27 + 49}{2} = 38$ ✓, so every inner term sits exactly halfway between its neighbours. Running the same test on $1, 3, 6, 10$ gives $\\frac{1 + 6}{2} = 3.5 \\ne 3$ ✗.',
    },
    {
      q: 'Which of the sequences below is arithmetic?',
      choices: ['$1, 5, 25, 125, \\ldots$', '$2, 3, 5, 7, \\ldots$', '$20, 33, 46, 59, \\ldots$', '$1, 8, 27, 64, \\ldots$'],
      answer: 2,
      solution:
        'Measure the gaps. In $20, 33, 46, 59$ they are $13, 13, 13$ ✓ — constant, so this one is arithmetic. The others: $1, 5, 25, 125$ has gaps $4, 20, 100$ (it multiplies by $5$) ✗; $2, 3, 5, 7$ has gaps $1, 2, 2$ ✗; $1, 8, 27, 64$ has gaps $7, 19, 37$ (these are the cubes) ✗. Check a second, independent way by testing whether each inner term is the average of its neighbours: $\\frac{20 + 46}{2} = 33$ ✓ and $\\frac{33 + 59}{2} = 46$ ✓ for the winner, while $\\frac{1 + 27}{2} = 14 \\ne 8$ ✗ for the cubes.',
    },
    {
      q: 'Exactly one of these sequences is arithmetic. Which is it?',
      choices: ['$4, 12, 36, 108, \\ldots$', '$1, 2, 6, 24, \\ldots$', '$2, 4, 7, 11, \\ldots$', '$40, 46, 52, 58, \\ldots$'],
      answer: 3,
      solution:
        'Subtract neighbours in each list. For $40, 46, 52, 58$ the gaps are $6, 6, 6$ ✓, so it is arithmetic. For $4, 12, 36, 108$ the gaps are $8, 24, 72$ (each term is triple the one before) ✗; for $1, 2, 6, 24$ the multipliers are $2, 3, 4$ and the gaps are $1, 4, 18$ ✗; for $2, 4, 7, 11$ the gaps are $2, 3, 4$, growing by one each time ✗. Check a second, independent way with the halfway test: $\\frac{40 + 52}{2} = 46$ ✓ and $\\frac{46 + 58}{2} = 52$ ✓, while $\\frac{2 + 11}{2} = 6.5 \\ne 7$ ✗ shows the third list is a near miss, not a hit.',
    },
  ],
  // s5 — the nth term for a large n, where listing is hopeless.
  [
    {
      q: 'What is the $40$th term of the arithmetic sequence $6, 17, 28, \\ldots$?',
      choices: ['$435$', '$446$', '$424$', '$440$'],
      answer: 0,
      solution:
        'Here $a = 6$ and $d = 11$. Reaching the $40$th term takes $40 - 1 = 39$ steps: $6 + 39 \\times 11 = 6 + 429 = 435$ ✓. Check a second, independent way by anchoring partway along: the $12$th term is $6 + 11 \\times 11 = 127$, and from the $12$th to the $40$th is $28$ more steps, giving $127 + 28 \\times 11 = 127 + 308 = 435$ ✓ — different anchor, different products, same term. (The choice $446$ is THE EXTRA STEP, $6 + 40 \\times 11$, which is the $41$st term; the choice $424$ is THE MISSING STEP, $6 + 38 \\times 11$, the $39$th term; the choice $440$ is DROPPING THE FIRST TERM, computing $40 \\times 11$ as though the list began at $11$.)',
    },
    {
      q: 'What is the $60$th term of the arithmetic sequence $8, 17, 26, \\ldots$?',
      choices: ['$548$', '$539$', '$530$', '$540$'],
      answer: 1,
      solution:
        'With $a = 8$ and $d = 9$, the $60$th term takes $59$ steps: $8 + 59 \\times 9 = 8 + 531 = 539$ ✓. Check a second, independent way by rewriting the rule in closed form first: $8 + 9(n - 1) = 9n - 1$, so every term is one less than a multiple of $9$, and the $60$th term is $9 \\times 60 - 1 = 540 - 1 = 539$ ✓ — no step-counting at all this time. (The choice $548$ is THE EXTRA STEP, $8 + 60 \\times 9$; the choice $530$ is THE MISSING STEP, $8 + 58 \\times 9$; the choice $540$ is DROPPING THE FIRST TERM, reporting $60 \\times 9$.)',
    },
    {
      q: 'What is the $80$th term of the arithmetic sequence $16, 22, 28, \\ldots$?',
      choices: ['$496$', '$484$', '$490$', '$480$'],
      answer: 2,
      solution:
        'Here $a = 16$ and $d = 6$, so the $80$th term takes $79$ steps: $16 + 79 \\times 6 = 16 + 474 = 490$ ✓. Check a second, independent way through a closed form: $16 + 6(n - 1) = 6n + 10$, so the $80$th term is $6 \\times 80 + 10 = 480 + 10 = 490$ ✓ — and the formula passes its own test on the printed terms, since $n = 1$ gives $16$ ✓ and $n = 3$ gives $28$ ✓. (The choice $496$ is THE EXTRA STEP, $16 + 80 \\times 6$; the choice $484$ is THE MISSING STEP, $16 + 78 \\times 6$; the choice $480$ is DROPPING THE FIRST TERM, computing $80 \\times 6$ and ignoring where the sequence starts.)',
    },
  ],
  // s6 — two terms are given; recover the common difference.
  [
    {
      q: 'An arithmetic sequence has first term $24$, and its $9$th term is $72$. What is the common difference?',
      choices: ['$48$', '$6$', '$9$', '$8$'],
      answer: 1,
      solution:
        'From the $1$st term to the $9$th term is $9 - 1 = 8$ steps, and the sequence grew by $72 - 24 = 48$. So $8d = 48$ and $d = 6$ ✓. Check a second, independent way through the midpoint: the $5$th term sits four steps from each end, so it is the average of the two given terms, $\\frac{24 + 72}{2} = 48$; from the $1$st term to the $5$th is $4$ steps covering $48 - 24 = 24$, so $d = \\frac{24}{4} = 6$ ✓ — a smaller, separate division that agrees. (The choice $48$ is REPORTING THE TOTAL GROWTH, the whole climb rather than one step; the choice $9$ is FORGETTING TO SUBTRACT THE FIRST TERM, $\\frac{72}{8}$; the choice $8$ is REPORTING THE NUMBER OF STEPS instead of the size of one step.)',
    },
    {
      q: 'An arithmetic sequence has first term $36$, and its $13$th term is $192$. What is the common difference?',
      choices: ['$156$', '$12$', '$13$', '$16$'],
      answer: 2,
      solution:
        'From the $1$st to the $13$th term is $12$ steps, and the growth is $192 - 36 = 156$. So $12d = 156$ and $d = 13$ ✓. Check a second, independent way through the midpoint: the $7$th term is six steps from each end, so it equals $\\frac{36 + 192}{2} = 114$; from the $1$st to the $7$th is $6$ steps covering $114 - 36 = 78$, giving $d = \\frac{78}{6} = 13$ ✓. (The choice $156$ is REPORTING THE TOTAL GROWTH instead of one step; the choice $12$ is DIVIDING BY THE NUMBER OF TERMS, $\\frac{156}{13}$, counting $13$ steps where there are only $12$; the choice $16$ is FORGETTING TO SUBTRACT THE FIRST TERM, $\\frac{192}{12}$.)',
    },
    {
      q: 'An arithmetic sequence has first term $20$, and its $11$th term is $130$. What is the common difference?',
      choices: ['$110$', '$10$', '$13$', '$11$'],
      answer: 3,
      solution:
        'From the $1$st to the $11$th term is $10$ steps, and the sequence climbed $130 - 20 = 110$. So $10d = 110$ and $d = 11$ ✓. Check a second, independent way by walking the candidate forward in blocks: with $d = 11$, five steps add $55$, so the $6$th term is $75$ and five more steps land on $75 + 55 = 130$ ✓, exactly the $11$th term we were promised. (The choice $110$ is REPORTING THE TOTAL GROWTH; the choice $10$ is DIVIDING BY THE NUMBER OF TERMS, $\\frac{110}{11}$, one step too many; the choice $13$ is FORGETTING TO SUBTRACT THE FIRST TERM, $\\frac{130}{10}$.)',
    },
  ],
  // s7 — which offered number actually appears in the sequence?
  [
    {
      q: 'Which of these numbers is a term of the arithmetic sequence $12, 21, 30, 39, \\ldots$?',
      choices: ['$102$', '$99$', '$108$', '$100$'],
      answer: 0,
      solution:
        'Every term has the form $12 + 9k$, so a number is a term exactly when subtracting $12$ leaves a multiple of $9$. Test each: $102 - 12 = 90 = 9 \\times 10$ ✓, so $102$ is the $11$th term; $99 - 12 = 87$ ✗, $108 - 12 = 96$ ✗, and $100 - 12 = 88$ ✗, none of which are multiples of $9$. Check a second, independent way with remainders instead of subtraction: $12$ leaves remainder $3$ on division by $9$, and adding nines never changes that remainder, so every term of this sequence leaves remainder $3$. Now $102 = 9 \\times 11 + 3$ ✓, while $99$ and $108$ leave remainder $0$ ✗ and $100$ leaves remainder $1$ ✗. (The choices $99$ and $108$ are FORGETTING THE OFFSET — both are multiples of $9$, which would be right if the list started at $9$ instead of $12$; the choice $100$ is a round number that no step ever lands on, since the terms nearest it are $93$ and $102$.)',
    },
    {
      q: 'Which of these numbers is a term of the arithmetic sequence $28, 39, 50, 61, \\ldots$?',
      choices: ['$110$', '$116$', '$120$', '$132$'],
      answer: 1,
      solution:
        'The terms are $28 + 11k$, so subtract $28$ and look for a multiple of $11$: $116 - 28 = 88 = 11 \\times 8$ ✓, making $116$ the $9$th term. The others fail: $110 - 28 = 82$ ✗, $120 - 28 = 92$ ✗, $132 - 28 = 104$ ✗. Check a second, independent way with remainders: $28$ leaves remainder $6$ when divided by $11$, and adding elevens preserves that, so every term leaves remainder $6$. Indeed $116 = 11 \\times 10 + 6$ ✓, while $110$ and $132$ leave remainder $0$ ✗ and $120$ leaves remainder $10$ ✗. (The choices $110$ and $132$ are FORGETTING THE OFFSET, picking multiples of $11$ as though the sequence started at $11$; the choice $120$ falls in the gap between the terms $116$ and $127$.)',
    },
    {
      q: 'Which of these numbers is a term of the arithmetic sequence $24, 37, 50, 63, \\ldots$?',
      choices: ['$104$', '$120$', '$130$', '$128$'],
      answer: 3,
      solution:
        'Every term is $24 + 13k$, so a term minus $24$ must be a multiple of $13$: $128 - 24 = 104 = 13 \\times 8$ ✓, so $128$ is the $9$th term. The rest miss: $104 - 24 = 80$ ✗, $120 - 24 = 96$ ✗, $130 - 24 = 106$ ✗. Check a second, independent way with remainders: $24$ leaves remainder $11$ on division by $13$, so every term does. And $128 = 13 \\times 9 + 11$ ✓, while $104$ and $130$ leave remainder $0$ ✗ and $120$ leaves remainder $3$ ✗. (The choices $104$ and $130$ are FORGETTING THE OFFSET — multiples of $13$, right only for a sequence starting at $13$; the choice $120$ sits between the terms $115$ and $128$ and is never landed on.)',
    },
  ],
  // s8 — fill the missing middle term: it is the average of its neighbours.
  [
    {
      q: 'The numbers $18, x, 44$ form an arithmetic sequence. What is $x$?',
      choices: ['$31$', '$26$', '$62$', '$13$'],
      answer: 0,
      solution:
        'The middle term of an arithmetic sequence is the average of its neighbours: $x = \\frac{18 + 44}{2} = \\frac{62}{2} = 31$ ✓. Check a second, independent way by splitting the gap rather than averaging the ends: the whole run from $18$ to $44$ is $26$, and it must be covered by two equal steps, so each step is $13$ and the middle term is $18 + 13 = 31$ ✓ — and stepping once more gives $31 + 13 = 44$ ✓, exactly the far end. (The choice $26$ is REPORTING THE WHOLE GAP, $44 - 18$; the choice $62$ is REPORTING THE SUM and never halving it; the choice $13$ is HALVING THE GAP but forgetting to start from $18$ — that is the common difference, not the term.)',
    },
    {
      q: 'The numbers $16, x, 38$ form an arithmetic sequence. What is $x$?',
      choices: ['$22$', '$54$', '$27$', '$11$'],
      answer: 2,
      solution:
        'The middle term is the average of the outer two: $x = \\frac{16 + 38}{2} = \\frac{54}{2} = 27$ ✓. Check a second, independent way by forcing the two gaps to match: from $16$ to $38$ is $22$, split into two equal steps of $11$, so $x = 16 + 11 = 27$ ✓ and $27 + 11 = 38$ ✓ closes the sequence. (The choice $22$ is REPORTING THE WHOLE GAP, $38 - 16$; the choice $54$ is REPORTING THE SUM without halving; the choice $11$ is HALVING THE GAP and stopping there, which names the common difference instead of the term.)',
    },
    {
      q: 'The numbers $24, x, 42$ form an arithmetic sequence. What is $x$?',
      choices: ['$18$', '$66$', '$9$', '$33$'],
      answer: 3,
      solution:
        'The middle term is the average of its neighbours: $x = \\frac{24 + 42}{2} = \\frac{66}{2} = 33$ ✓. Check a second, independent way by splitting the run into two equal steps: $42 - 24 = 18$, so each step is $9$ and the middle term is $24 + 9 = 33$ ✓, with $33 + 9 = 42$ ✓ landing on the last term. (The choice $18$ is REPORTING THE WHOLE GAP; the choice $66$ is REPORTING THE SUM and skipping the halving; the choice $9$ is HALVING THE GAP alone, which is the common difference rather than the missing term.)',
    },
  ],
  // s9 — count how many terms stay under a bound.
  [
    {
      q: 'How many terms of the arithmetic sequence $36, 49, 62, \\ldots$ are less than $500$?',
      choices: ['$35$', '$36$', '$37$', '$38$'],
      answer: 1,
      solution:
        'The $n$th term is $36 + 13(n-1)$. We need $36 + 13(n-1) < 500$, so $13(n-1) < 464$ and therefore $n - 1 \\le 35$, since $13 \\times 35 = 455$ fits but $13 \\times 36 = 468$ does not. That gives $n \\le 36$: there are $36$ terms ✓. Check a second, independent way by naming the boundary terms outright: $36 + 13 \\times 35 = 491 < 500$ ✓ and the very next term is $491 + 13 = 504$ ✗. So $491$ is the last survivor, and since $491 - 36 = 455 = 13 \\times 35$ it sits $35$ steps along, making it the $36$th term ✓. (The choice $35$ is THE FENCEPOST, counting the $35$ steps instead of the $36$ terms; the choice $37$ is COUNTING THE BOUNDARY TERM, keeping $504$ even though it is over the line; the choice $38$ is FORGETTING THE OFFSET, counting the multiples of $13$ below $500$ — there are $38$ of those, but this sequence starts at $36$, not $13$.)',
    },
    {
      q: 'How many terms of the arithmetic sequence $12, 23, 34, \\ldots$ are less than $600$?',
      choices: ['$53$', '$55$', '$54$', '$50$'],
      answer: 2,
      solution:
        'The $n$th term is $12 + 11(n-1)$. Require $12 + 11(n-1) < 600$, so $11(n-1) < 588$ and $n - 1 \\le 53$, because $11 \\times 53 = 583$ fits while $11 \\times 54 = 594$ pushes the term to $606$. So $n \\le 54$: there are $54$ terms ✓. Check a second, independent way by simplifying the rule first: $12 + 11(n-1) = 11n + 1$, so the terms are the numbers one more than a multiple of $11$. We need $11n + 1 < 600$, that is $11n < 599$, and $11 \\times 54 = 594$ ✓ while $11 \\times 55 = 605$ ✗ — so $n$ runs from $1$ to $54$, and the last surviving term is $595$ ✓. (The choice $53$ is THE FENCEPOST, counting steps rather than terms; the choice $55$ is COUNTING THE BOUNDARY TERM, keeping the $606$ that broke the bound; the choice $50$ is USING THE FIRST TERM AS THE STEP, counting $12, 24, 36, \\ldots$ up to $600$ as though the sequence were the multiples of $12$.)',
    },
    {
      q: 'How many terms of the arithmetic sequence $18, 27, 36, \\ldots$ are less than $400$?',
      choices: ['$42$', '$44$', '$45$', '$43$'],
      answer: 3,
      solution:
        'The $n$th term is $18 + 9(n-1)$. Require $18 + 9(n-1) < 400$, so $9(n-1) < 382$ and $n - 1 \\le 42$, since $9 \\times 42 = 378$ works but $9 \\times 43 = 387$ makes the term $405$. So $n \\le 43$: there are $43$ terms ✓. Check a second, independent way by recognising what the terms are: $18 + 9(n-1) = 9(n+1)$, so the sequence is exactly the multiples of $9$ starting at $9 \\times 2 = 18$. The multiples of $9$ below $400$ run from $9 \\times 2$ up to $9 \\times 44 = 396$, and counting those multipliers gives $44 - 2 + 1 = 43$ ✓. (The choice $42$ is THE FENCEPOST, counting the $42$ steps; the choice $44$ is COUNTING THE BOUNDARY TERM, keeping $405$; the choice $45$ is DROPPING THE FIRST TERM from the inequality, solving $9(n-1) < 400$ and letting $n$ reach $45$.)',
    },
  ],
  // s10 — three consecutive terms: a sum and the largest term give the step.
  [
    {
      q: 'Three consecutive terms of an arithmetic sequence add up to $66$, and the largest of them is $30$. What is the common difference?',
      choices: ['$8$', '$22$', '$16$', '$36$'],
      answer: 0,
      solution:
        'Three consecutive terms average out to the middle one, so the middle term is $\\frac{66}{3} = 22$. The largest term is one step above the middle: $22 + d = 30$, so $d = 8$ ✓. Check a second, independent way by anchoring on the largest term instead of the middle: the three terms are $30$, $30 - d$, and $30 - 2d$, and their sum is $90 - 3d = 66$, so $3d = 24$ and $d = 8$ ✓. The terms are $14, 22, 30$, and $14 + 22 + 30 = 66$ ✓. (The choice $22$ is REPORTING THE MIDDLE TERM instead of the step; the choice $16$ is REPORTING THE WHOLE GAP $30 - 14$, which covers two steps, not one; the choice $36$ is $66 - 30$, the sum of the other two terms rather than a difference at all.)',
    },
    {
      q: 'Three consecutive terms of an arithmetic sequence add up to $78$, and the largest of them is $38$. What is the common difference?',
      choices: ['$26$', '$12$', '$24$', '$40$'],
      answer: 1,
      solution:
        'The middle of three consecutive terms is their average: $\\frac{78}{3} = 26$. The largest sits one step above it, so $26 + d = 38$ and $d = 12$ ✓. Check a second, independent way by writing the terms as $38 - 2d$, $38 - d$, $38$: their sum is $114 - 3d = 78$, so $3d = 36$ and $d = 12$ ✓. The terms are $14, 26, 38$, which really do add to $78$ ✓. (The choice $26$ is REPORTING THE MIDDLE TERM; the choice $24$ is REPORTING THE WHOLE GAP $38 - 14$, two steps wide; the choice $40$ is $78 - 38$, what the other two terms add up to.)',
    },
    {
      q: 'Three consecutive terms of an arithmetic sequence add up to $90$, and the largest of them is $43$. What is the common difference?',
      choices: ['$30$', '$26$', '$13$', '$47$'],
      answer: 2,
      solution:
        'The middle term is the average of the three: $\\frac{90}{3} = 30$. Since the largest is one step above the middle, $30 + d = 43$ and $d = 13$ ✓. Check a second, independent way from the top down: the terms are $43 - 2d$, $43 - d$, $43$, summing to $129 - 3d = 90$, so $3d = 39$ and $d = 13$ ✓. That gives $17, 30, 43$, and $17 + 30 + 43 = 90$ ✓. (The choice $30$ is REPORTING THE MIDDLE TERM rather than the step; the choice $26$ is REPORTING THE WHOLE GAP $43 - 17$, which is two steps; the choice $47$ is $90 - 43$, the total of the two smaller terms.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  sections: {
    '21.1': s211,
  },
}
