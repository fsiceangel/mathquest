// Counting & Probability chapter 12 — variations for section 12.5
// (Another Interesting Combinatorial Identity). All problems and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: rows and positions are numbered
//    from $0$, a "subset" includes the empty set unless the stem says
//    otherwise, a committee of "any size" includes the empty one unless a
//    bound is stated, and every size bound is written out in words.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    count-two-ways argument for $\binom{n}{0} + \cdots + \binom{n}{n} = 2^n$
//    against a term-by-term addition of the row entries, a complementary
//    count, a pairing, or a split into cases. Route two never reuses route
//    one’s number.
//  - Each distractor is one named slip — keeping the empty set, dropping it
//    twice, halving without removing the middle entry first, reading off the
//    complement — and the slip is named in CAPS.

const s125 = [
  // slot 1 — two whole rows added together
  [
    {
      q: 'What is $\\left(\\binom{5}{0} + \\binom{5}{1} + \\cdots + \\binom{5}{5}\\right) + \\left(\\binom{9}{0} + \\binom{9}{1} + \\cdots + \\binom{9}{9}\\right)$?',
      choices: ['$544$', '$16384$', '$512$', '$1024$'],
      answer: 0,
      solution:
        'Route one, count subsets two ways. The first bracket sorts the subsets of a $5$-element set by size, so it counts every one of them; walking the $5$ elements and saying “in” or “out” counts the same subsets as $2^5 = 32$. The second bracket does the same for a $9$-element set: $2^9 = 512$. The total is $32 + 512 = 544$ ✓. Route two, add the entries. Row $5$ is $1, 5, 10, 10, 5, 1$ and $1 + 5 + 10 + 10 + 5 + 1 = 32$; row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$ and $1 + 9 + 36 + 84 + 126 + 126 + 84 + 36 + 9 + 1 = 512$; together $544$ ✓. (The choice $16384$ MULTIPLIES THE TWO ROW SUMS instead of adding them ✗; $512$ REPORTS ROW $9$ ALONE and drops row $5$ ✗; $1024$ TREATS BOTH BRACKETS AS ROW $9$, doubling the larger one ✗.)',
    },
    {
      q: 'Set $A$ has $6$ elements and set $B$ has $9$ elements. Counting the empty set and the whole set each time, how many subsets does $A$ have and how many does $B$ have, added together?',
      choices: ['$574$', '$32768$', '$576$', '$512$'],
      answer: 2,
      solution:
        'Route one, in or out. Each of the $6$ elements of $A$ is either in a subset or out of it, so $A$ has $2^6 = 64$ subsets, and likewise $B$ has $2^9 = 512$. The total is $64 + 512 = 576$ ✓. Route two, sort by size. The subsets of $A$ of size $k$ number $\\binom{6}{k}$, and row $6$ is $1, 6, 15, 20, 15, 6, 1$, which adds to $64$; the subsets of $B$ sorted by size give row $9$, $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, which adds to $512$. Together $576$ ✓. (The choice $574$ THROWS OUT THE EMPTY SET FROM EACH, though the question counts it ✗; $32768$ MULTIPLIES THE TWO COUNTS, which would count one subset of $A$ paired with one of $B$ ✗; $512$ COUNTS $B$ ONLY ✗.)',
    },
    {
      q: 'For a positive integer $n$, the entries of row $n$ of Pascal’s triangle together with the entries of row $n+1$ add up to $384$ in all. What is $n$? (The single $1$ at the top is row $0$.)',
      choices: ['$8$', '$7$', '$6$', '$9$'],
      answer: 1,
      solution:
        'Route one, solve the equation. Row $n$ sums to $2^n$ and row $n+1$ sums to $2^{n+1} = 2 \\cdot 2^n$, so the two rows together give $3 \\cdot 2^n = 384$. Then $2^n = 128$, and halving $128$ down to $1$ takes exactly $7$ steps, so $n = 7$ ✓. Route two, tabulate the pairs. Consecutive row sums are $1, 2, 4, 8, 16, 32, 64, 128, 256, 512$, so neighboring rows total $1 + 2 = 3$, $2 + 4 = 6$, and so on: rows $6$ and $7$ give $64 + 128 = 192$, rows $7$ and $8$ give $128 + 256 = 384$, and rows $8$ and $9$ give $256 + 512 = 768$. Only the pair starting at row $7$ hits $384$ ✓. (The choice $8$ NAMES THE SECOND ROW OF THE PAIR ✗; $6$ IS OFF BY ONE THE OTHER WAY, giving $192$ ✗; $9$ TREATS $384$ AS A SINGLE ROW SUM and rounds up to $2^9 = 512$ ✗.)',
    },
  ],
  // slot 2 — how many subsets does a set have
  [
    {
      q: 'How many subsets does a set of $11$ elements have, counting the empty set and the set itself?',
      choices: ['$2047$', '$121$', '$2046$', '$2048$'],
      answer: 3,
      solution:
        'Route one, in or out. Build a subset by going through the $11$ elements and saying “in” or “out” for each — $2$ choices, $11$ times — and every subset arises exactly once, so there are $2^{11} = 2048$ ✓. Route two, sort by size. The subsets of size $k$ number $\\binom{11}{k}$, so the total is all of row $11$: $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$. Adding the first six gives $1 + 11 + 55 + 165 + 330 + 462 = 1024$, and the row is a palindrome, so the whole row is $2 \\cdot 1024 = 2048$ ✓. (The choice $2047$ LEAVES OUT THE EMPTY SET, which the question counts ✗; $121$ IS $11^2$, with base and exponent swapped ✗; $2046$ DROPS BOTH THE EMPTY SET AND THE WHOLE SET ✗.)',
    },
    {
      q: 'How many subsets does a set of $7$ elements have that are neither the empty set nor the whole set?',
      choices: ['$127$', '$126$', '$128$', '$120$'],
      answer: 1,
      solution:
        'Route one, count everything and subtract. Saying “in” or “out” for each of the $7$ elements gives $2^7 = 128$ subsets in all. Exactly two of them are barred, the empty set and the whole set, so $128 - 2 = 126$ ✓. Route two, add the sizes that are allowed. The permitted sizes are $1$ through $6$, so the count is $\\binom{7}{1} + \\binom{7}{2} + \\binom{7}{3} + \\binom{7}{4} + \\binom{7}{5} + \\binom{7}{6} = 7 + 21 + 35 + 35 + 21 + 7 = 126$ ✓. (The choice $127$ BARS ONLY THE EMPTY SET and keeps the whole set ✗; $128$ BARS NEITHER ✗; $120$ ALSO THROWS OUT THE SEVEN ONE-ELEMENT SUBSETS, which the stem allows ✗.)',
    },
    {
      q: 'A set has exactly $32768$ subsets, counting the empty set and the set itself. How many of its subsets have an odd number of elements?',
      choices: ['$16384$', '$15$', '$16383$', '$32768$'],
      answer: 0,
      solution:
        'Route one, the alternating sum. Since each element is in or out, the set has $2^n = 32768$ subsets, and repeatedly halving $32768$ reaches $1$ after $15$ steps, so $n = 15$. The alternating sum $\\binom{15}{0} - \\binom{15}{1} + \\cdots - \\binom{15}{15}$ is $0$, which says the even-sized subsets and the odd-sized subsets are equally numerous. So the odd ones number $\\frac{32768}{2} = 16384$ ✓. Route two, pair them off. Fix one element of the set and match every subset with the subset obtained by toggling that element in or out. This matching is a pairing of the subsets into couples, and the two members of a couple differ in size by $1$, so one is odd-sized and one is even-sized. Every odd-sized subset therefore has its own partner, and the odd-sized subsets are exactly half of $32768$, namely $16384$ ✓. (The choice $15$ REPORTS THE NUMBER OF ELEMENTS instead of the number of subsets asked for ✗; $16383$ SUBTRACTS AN EMPTY SET that was never in this count, since the empty set has size $0$ and is even ✗; $32768$ IGNORES THE ODD-SIZE CONDITION and counts every subset ✗.)',
    },
  ],
  // slot 3 — row sums that start early or stop early
  [
    {
      q: 'What is $\\binom{12}{1} + \\binom{12}{2} + \\binom{12}{3} + \\cdots + \\binom{12}{12}$? Note that the sum starts at $\\binom{12}{1}$.',
      choices: ['$4096$', '$4095$', '$4094$', '$2048$'],
      answer: 1,
      solution:
        'Route one, complete the row. The full row is $\\binom{12}{0} + \\binom{12}{1} + \\cdots + \\binom{12}{12} = 2^{12} = 4096$, because it counts every subset of a $12$-element set and each element is in or out. This sum is missing only $\\binom{12}{0} = 1$, so it is $4096 - 1 = 4095$ ✓. Route two, add the twelve terms. Row $12$ is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$, and starting at the $12$: $12 + 66 + 220 + 495 + 792 + 924 + 792 + 495 + 220 + 66 + 12 + 1 = 4095$ ✓. (The choice $4096$ FORGETS THAT $\\binom{12}{0}$ IS MISSING ✗; $4094$ DROPS $\\binom{12}{12}$ AS WELL, though the sum runs all the way to it ✗; $2048$ HALVES THE ROW, as if the sum stopped at the middle entry ✗.)',
    },
    {
      q: 'What is $\\binom{9}{2} + \\binom{9}{3} + \\binom{9}{4} + \\binom{9}{5} + \\binom{9}{6} + \\binom{9}{7}$? Note that the sum starts at $\\binom{9}{2}$ and stops at $\\binom{9}{7}$.',
      choices: ['$502$', '$512$', '$494$', '$492$'],
      answer: 3,
      solution:
        'Route one, complete the row. All of row $9$ sums to $2^9 = 512$, since it counts every subset of a $9$-element set. Four terms are missing: $\\binom{9}{0} = 1$, $\\binom{9}{1} = 9$, $\\binom{9}{8} = 9$ and $\\binom{9}{9} = 1$, which total $20$. So the sum is $512 - 20 = 492$ ✓. Route two, add the six terms. Row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, so the terms in positions $2$ through $7$ are $36, 84, 126, 126, 84, 36$, and $36 + 84 + 126 + 126 + 84 + 36 = 492$ ✓. (The choice $502$ REMOVES ONLY THE TWO TERMS AT THE START and keeps the two at the end ✗; $512$ IS THE FULL ROW, ignoring that four terms are missing ✗; $494$ DROPS ONLY $\\binom{9}{1}$ AND $\\binom{9}{8}$, forgetting the $1$ at each end ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{1} + \\binom{n}{2} + \\cdots + \\binom{n}{n} = 255$. Note that the sum starts at $\\binom{n}{1}$. What is $n$?',
      choices: ['$7$', '$9$', '$8$', '$16$'],
      answer: 2,
      solution:
        'Route one, complete the row. The full row sums to $2^n$, and this sum omits only $\\binom{n}{0} = 1$, so $2^n - 1 = 255$ and $2^n = 256$. Halving $256$ down to $1$ takes $8$ steps, so $n = 8$ ✓. Route two, count subsets. Sorting by size, the sum counts every non-empty subset of an $n$-element set, so the set has $255$ non-empty subsets. Each element is in or out, giving $2^n$ subsets in all, one of them empty. Testing sets from the small end, a $7$-element set has $127$ non-empty subsets and a $9$-element set has $511$, while an $8$-element set has $255$ ✓. (The choice $7$ IS OFF BY ONE LOW, giving $127$ ✗; $9$ IS OFF BY ONE HIGH, giving $511$ ✗; $16$ SOLVES $n^2 = 256$, confusing $2^n$ with $n^2$ ✗.)',
    },
  ],
  // slot 4 — committees and selections with a lower or upper size bound
  [
    {
      q: 'A juice bar offers $8$ different add-ins. A drink must have at least $2$ add-ins and may have as many as all $8$. How many different sets of add-ins are possible?',
      choices: ['$255$', '$248$', '$247$', '$246$'],
      answer: 2,
      solution:
        'Route one, count everything and subtract. Each add-in is either in the drink or not, so there are $2^8 = 256$ sets of add-ins in all. The ones that are too small are the empty set ($1$ of them) and the single add-ins ($\\binom{8}{1} = 8$ of them), so $256 - 1 - 8 = 247$ ✓. Route two, add the allowed sizes. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, so the sizes from $2$ through $8$ give $28 + 56 + 70 + 56 + 28 + 8 + 1 = 247$ ✓. (The choice $255$ REMOVES ONLY THE EMPTY SET and keeps the eight single add-ins ✗; $248$ REMOVES THE SINGLES BUT FORGETS THE EMPTY SET ✗; $246$ ALSO THROWS OUT THE ALL-EIGHT DRINK, which the stem allows ✗.)',
    },
    {
      q: 'A study group of $8$ friends sends a subgroup to present. The subgroup may have any size from $0$ to $5$ members, the empty subgroup included. How many different subgroups are possible?',
      choices: ['$219$', '$218$', '$228$', '$163$'],
      answer: 0,
      solution:
        'Route one, count everything and subtract. Each friend is in the subgroup or not, so there are $2^8 = 256$ subgroups in all. The ones that are too big have $6$, $7$ or $8$ members, and they number $\\binom{8}{6} + \\binom{8}{7} + \\binom{8}{8} = 28 + 8 + 1 = 37$. So $256 - 37 = 219$ ✓. Route two, add the allowed sizes. The sizes $0$ through $5$ contribute $\\binom{8}{0} + \\binom{8}{1} + \\binom{8}{2} + \\binom{8}{3} + \\binom{8}{4} + \\binom{8}{5} = 1 + 8 + 28 + 56 + 70 + 56 = 219$ ✓. (The choice $218$ THROWS OUT THE EMPTY SUBGROUP, which the stem allows ✗; $228$ REMOVES ONLY THE SIX-MEMBER SUBGROUPS and forgets the larger ones ✗; $163$ STOPS AT SIZE $4$, one size short ✗.)',
    },
    {
      q: 'A juice bar offers $n$ different add-ins, for a positive integer $n$, and a drink must have at least $2$ of them. Exactly $502$ different sets of add-ins are possible. How many sets of add-ins use at least $3$ of them?',
      choices: ['$502$', '$430$', '$493$', '$466$'],
      answer: 3,
      solution:
        'Route one, find $n$, then subtract the pairs. Sets with at least $2$ add-ins number $2^n - 1 - n$, all sets minus the empty one and the $n$ singles. Setting $2^n - 1 - n = 502$ gives $2^n = 503 + n$, and $n = 9$ works since $512 = 503 + 9$. Raising the bar from $2$ to $3$ removes the two-add-in sets, of which there are $\\binom{9}{2} = 36$, so the answer is $502 - 36 = 466$ ✓. Route two, pin down $n$ by testing, then add. An $8$-add-in bar allows $2^8 - 1 - 8 = 247$ sets of at least $2$, and a $10$-add-in bar allows $2^{10} - 1 - 10 = 1013$, so the count $502$ belongs to $n = 9$. Row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, and the sizes $3$ through $9$ give $84 + 126 + 126 + 84 + 36 + 9 + 1 = 466$ ✓. (The choice $502$ REPEATS THE GIVEN COUNT without raising the bar ✗; $430$ REMOVES THE $36$ PAIRS TWICE ✗; $493$ REMOVES THE NINE SINGLE ADD-INS instead of the pairs, though the singles were already gone ✗.)',
    },
  ],
  // slot 5 — half a row, using symmetry
  [
    {
      q: 'What is $\\binom{14}{0} + \\binom{14}{1} + \\binom{14}{2} + \\binom{14}{3} + \\binom{14}{4} + \\binom{14}{5} + \\binom{14}{6}$? Note that the sum stops at $\\binom{14}{6}$.',
      choices: ['$6476$', '$8192$', '$9908$', '$12952$'],
      answer: 0,
      solution:
        'Route one, use the row sum and the symmetry. All of row $14$ adds to $2^{14} = 16384$, since it counts every subset of a $14$-element set. Row $14$ has $15$ entries and so a single middle entry, $\\binom{14}{7} = 3432$. The seven entries before the middle mirror the seven after it, so each block is $\\frac{16384 - 3432}{2} = \\frac{12952}{2} = 6476$ ✓. Route two, add the seven terms. Building row $14$ by the additive rule gives $1, 14, 91, 364, 1001, 2002, 3003$ for positions $0$ through $6$, and $1 + 14 + 91 + 364 + 1001 + 2002 + 3003 = 6476$ ✓. (The choice $8192$ HALVES THE ROW WITHOUT REMOVING THE MIDDLE ENTRY FIRST ✗; $9908$ INCLUDES $\\binom{14}{7}$, though the sum stops one entry earlier ✗; $12952$ REMOVES THE MIDDLE ENTRY BUT FORGETS TO HALVE ✗.)',
    },
    {
      q: 'What is $\\binom{10}{4} + \\binom{10}{5} + \\binom{10}{6} + \\cdots + \\binom{10}{10}$? Note that the sum starts at $\\binom{10}{4}$.',
      choices: ['$1024$', '$904$', '$848$', '$512$'],
      answer: 2,
      solution:
        'Route one, complete the row. Row $10$ sums to $2^{10} = 1024$, one for each subset of a $10$-element set. The missing terms are $\\binom{10}{0} + \\binom{10}{1} + \\binom{10}{2} + \\binom{10}{3} = 1 + 10 + 45 + 120 = 176$, so the sum is $1024 - 176 = 848$ ✓. Route two, add the seven terms. Row $10$ is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$, so positions $4$ through $10$ give $210 + 252 + 210 + 120 + 45 + 10 + 1 = 848$ ✓. (The choice $1024$ IS THE FULL ROW, ignoring the four missing terms ✗; $904$ REMOVES ONLY $\\binom{10}{3}$ ✗; $512$ HALVES THE ROW, as if the sum began right at the middle ✗.)',
    },
    {
      q: 'Row $n$ of Pascal’s triangle has a single middle entry, for a positive integer $n$, and the entries lying before that middle entry add up to $386$. What is the middle entry?',
      choices: ['$210$', '$252$', '$772$', '$1024$'],
      answer: 1,
      solution:
        'Route one, set up the row sum. A single middle entry means $n$ is even. The entries before the middle mirror the entries after it, so the whole row is $386 + m + 386$, where $m$ is the middle entry, and the whole row is $2^n$. Then $m = 2^n - 772$. For $n = 10$ this gives $1024 - 772 = 252$, and the middle entry of row $10$ really is $\\binom{10}{5} = 252$; for $n = 12$ it would give $4096 - 772 = 3324$, which is not row $12$’s middle entry $924$, and smaller even rows give a negative $m$. So the middle entry is $252$ ✓. Route two, add up the front halves. Row $6$ before its middle is $1 + 6 + 15 = 22$; row $8$ before its middle is $1 + 8 + 28 + 56 = 93$; row $10$ before its middle is $1 + 10 + 45 + 120 + 210 = 386$, matching the given total, and the entry it stops just short of is $\\binom{10}{5} = 252$ ✓. (The choice $210$ TAKES THE LAST ENTRY BEFORE THE MIDDLE instead of the middle itself ✗; $772$ DOUBLES THE GIVEN SUM, reporting the two outer blocks rather than what sits between them ✗; $1024$ REPORTS THE WHOLE ROW SUM ✗.)',
    },
  ],
  // slot 6 — alternating sums and the even/odd split
  [
    {
      q: 'What is $\\binom{12}{0} - \\binom{12}{1} + \\binom{12}{2} - \\cdots + \\binom{12}{12}$, with the signs alternating, if the middle term $\\binom{12}{6}$ is left out of the sum altogether?',
      choices: ['$0$', '$-924$', '$924$', '$-1848$'],
      answer: 1,
      solution:
        'Route one, start from the full alternating sum. Each entry of row $11$ feeds the two side-by-side entries of row $12$ directly below it, and those two sit in positions of opposite parity, so they carry opposite signs and its two contributions cancel. Nothing survives, so the full alternating sum of row $12$ is $0$. The omitted term sits in position $6$, an even position, so it appears with a plus sign as $+\\binom{12}{6} = +924$. Removing it leaves $0 - 924 = -924$ ✓. Route two, pair the mirror images. In row $12$ the entries in positions $k$ and $12 - k$ are equal, and their signs $(-1)^k$ and $(-1)^{12-k}$ agree, so the twelve remaining terms fall into six matching pairs and total $2\\left(1 - 12 + 66 - 220 + 495 - 792\\right) = 2(-462) = -924$ ✓. (The choice $0$ KEEPS THE MIDDLE TERM and reports the full alternating sum ✗; $924$ FLIPS THE SIGN, as if the omitted term had carried a minus ✗; $-1848$ SUBTRACTS THE MIDDLE TERM TWICE ✗.)',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 11\\}$ have an odd number of elements?',
      choices: ['$1023$', '$2048$', '$512$', '$1024$'],
      answer: 3,
      solution:
        'Route one, the alternating sum. The alternating sum of row $11$ is $\\binom{11}{0} - \\binom{11}{1} + \\cdots - \\binom{11}{11} = 0$, which says the even-sized subsets and the odd-sized subsets are equal in number. There are $2^{11} = 2048$ subsets in all, so $\\frac{2048}{2} = 1024$ have an odd number of elements ✓. Route two, build them directly. Choose freely which of $2, 3, \\ldots, 11$ to take — $2^{10} = 1024$ ways — and then decide about the number $1$: exactly one of “in” or “out” makes the total size odd. So each of the $1024$ choices extends to exactly one odd-sized subset, and every odd-sized subset arises once: $1024$ ✓. (The choice $1023$ REMOVES THE EMPTY SET, which has size $0$ and was never in this count ✗; $2048$ COUNTS EVERY SUBSET, ignoring the odd-size condition ✗; $512$ HALVES ONE TIME TOO MANY ✗.)',
    },
    {
      q: 'For a positive integer $n$, an $n$-element set has exactly $2048$ subsets whose size is even (the empty set counts as having size $0$, which is even). How many subsets does the set have in all?',
      choices: ['$2048$', '$12$', '$4096$', '$4095$'],
      answer: 2,
      solution:
        'Route one, double the even half. For any $n \\ge 1$ the alternating sum $\\binom{n}{0} - \\binom{n}{1} + \\cdots = 0$, so the even-sized subsets and the odd-sized subsets are equally numerous. Every subset is one or the other, so the total is $2 \\cdot 2048 = 4096$ ✓. Route two, find $n$ first. The even-sized subsets of an $n$-element set number $2^{n-1}$, so $2^{n-1} = 2048$, and halving $2048$ to $1$ takes $11$ steps, giving $n - 1 = 11$ and $n = 12$. A $12$-element set has one subset for each “in or out” pattern, so it has $2^{12} = 4096$ subsets ✓. (The choice $2048$ REPEATS THE GIVEN COUNT and forgets the odd-sized subsets ✗; $12$ REPORTS $n$ instead of the number of subsets ✗; $4095$ THROWS OUT THE EMPTY SET, which the question counts ✗.)',
    },
  ],
  // slot 7 — parity together with a membership condition
  [
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an odd number of elements and contain the number $10$?',
      choices: ['$512$', '$255$', '$128$', '$256$'],
      answer: 3,
      solution:
        'Route one, fix $10$ and count the rest. With $10$ already in, the rest of the subset is any subset of $\\{1, 2, \\ldots, 9\\}$, and the total size is odd exactly when that rest has an even number of elements. The alternating sum of row $9$ is $0$, so the even-sized subsets of a $9$-element set are half of $2^9 = 512$, namely $256$ ✓. Route two, add the sizes. The subset consists of $10$ together with an even number of the other nine, so it is counted by $\\binom{9}{0} + \\binom{9}{2} + \\binom{9}{4} + \\binom{9}{6} + \\binom{9}{8} = 1 + 36 + 126 + 84 + 9 = 256$ ✓. (The choice $512$ COUNTS EVERY SUBSET CONTAINING $10$, dropping the odd-size condition ✗; $255$ THROWS OUT THE SUBSET $\\{10\\}$, though a one-element subset has odd size ✗; $128$ HALVES ONCE FOR EACH CONDITION, as if both cut the count in half ✗.)',
    },
    {
      q: 'A committee of any size, including the empty committee, is chosen from $7$ people, and the number of members on it must be even. How many committees are possible?',
      choices: ['$63$', '$64$', '$128$', '$32$'],
      answer: 1,
      solution:
        'Route one, the alternating sum. The alternating sum of row $7$ is $\\binom{7}{0} - \\binom{7}{1} + \\cdots - \\binom{7}{7} = 0$, so the even-sized committees and the odd-sized ones are equally numerous. Every one of the $2^7 = 128$ committees is one or the other, so the even-sized ones number $\\frac{128}{2} = 64$ ✓. Route two, add the even sizes. Row $7$ is $1, 7, 21, 35, 35, 21, 7, 1$, so the sizes $0$, $2$, $4$ and $6$ give $1 + 21 + 35 + 7 = 64$ ✓. (The choice $63$ THROWS OUT THE EMPTY COMMITTEE, though $0$ is an even number of members and the stem allows it ✗; $128$ COUNTS EVERY COMMITTEE, ignoring the even condition ✗; $32$ HALVES TWICE ✗.)',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ have an even number of elements and contain at least one odd number? The empty set counts as having $0$ elements, which is even.',
      choices: ['$496$', '$512$', '$480$', '$495$'],
      answer: 0,
      solution:
        'Route one, subtract the bad ones. Half of the $2^{10} = 1024$ subsets have even size, since the alternating sum of row $10$ is $0$, so there are $512$ even-sized subsets. Those containing no odd number are the even-sized subsets of $\\{2, 4, 6, 8, 10\\}$, and half of that set’s $2^5 = 32$ subsets have even size, so there are $16$ of them. That leaves $512 - 16 = 496$ ✓. Route two, split on the odd numbers used. Suppose the subset takes $a$ of the five odd numbers, with $a \\ge 1$, and $b$ of the five even numbers. The size $a + b$ is even exactly when $b$ matches the parity of $a$, and among the $32$ subsets of the five even numbers exactly $16$ have any given parity of size. So the count is $16$ for each non-empty choice of odd numbers: $16 \\cdot (2^5 - 1) = 16 \\cdot 31 = 496$ ✓. (The choice $512$ COUNTS EVERY EVEN-SIZED SUBSET, dropping the odd-number requirement ✗; $480$ SUBTRACTS ALL $32$ SUBSETS OF THE EVEN NUMBERS instead of only the even-sized ones ✗; $495$ REMOVES THE EMPTY SET A SECOND TIME, though it was already among the $16$ ✗.)',
    },
  ],
  // slot 8 — subsets pinned down on a few named elements
  [
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 11\\}$ contain the number $1$ but do not contain the number $2$?',
      choices: ['$1024$', '$2048$', '$512$', '$511$'],
      answer: 2,
      solution:
        'Route one, in or out on what is left. The numbers $1$ and $2$ are already settled — $1$ is in, $2$ is out — so the only freedom is over the nine numbers $3, 4, \\ldots, 11$, each in or out. That gives $2^9 = 512$ ✓. Route two, take a difference. The subsets containing $1$ number $2^{10} = 1024$, since the other ten numbers are free. Among those, the ones that also contain $2$ have both $1$ and $2$ fixed in and the other nine free, so there are $2^9$ of them; sorting those nine by size shows this is $\\binom{9}{0} + \\binom{9}{1} + \\cdots + \\binom{9}{9} = 512$. Removing them leaves $1024 - 512 = 512$ ✓. (The choice $1024$ COUNTS EVERY SUBSET CONTAINING $1$ and forgets to bar $2$ ✗; $2048$ IGNORES BOTH CONDITIONS ✗; $511$ THROWS OUT THE SUBSET $\\{1\\}$, though it meets both conditions ✗.)',
    },
    {
      q: 'A committee of any size, including the empty committee, is chosen from a club of $11$ members, two of whom are the president and the treasurer. The committee must include at least one of those two. How many committees are possible?',
      choices: ['$1536$', '$512$', '$1024$', '$1535$'],
      answer: 0,
      solution:
        'Route one, count everything and subtract. Every committee is a subset of the club, so there are $2^{11} = 2048$ of them. The forbidden ones include neither officer, so they are drawn from the other $9$ members: $2^9 = 512$ of those. That leaves $2048 - 512 = 1536$ ✓. Route two, cases on the two officers. The pair of officers can appear in four patterns — neither, president only, treasurer only, both — and three of them are allowed. Whichever pattern is used, the remaining $9$ members are each in or out, giving $2^9 = 512$ completions. So the count is $3 \\cdot 512 = 1536$ ✓. (The choice $512$ REPORTS THE FORBIDDEN COMMITTEES, the complement of what was asked ✗; $1024$ ADDS ONLY THE TWO “EXACTLY ONE OFFICER” CASES and forgets the committees holding both ✗; $1535$ REMOVES THE EMPTY COMMITTEE A SECOND TIME, though it was already barred for holding no officer ✗.)',
    },
    {
      q: 'How many subsets of $\\{1, 2, 3, \\ldots, 11\\}$ contain the number $11$ and no other odd number?',
      choices: ['$64$', '$31$', '$1024$', '$32$'],
      answer: 3,
      solution:
        'Route one, in or out on what is left. The odd numbers here are $1, 3, 5, 7, 9, 11$. The stem forces $11$ in and the other five odd numbers out, so six of the eleven decisions are made. The five even numbers $2, 4, 6, 8, 10$ are each free, in or out, giving $2^5 = 32$ ✓. Route two, sort by size. Such a subset is $\\{11\\}$ together with some subset of $\\{2, 4, 6, 8, 10\\}$, so counting by how many even numbers it takes gives $\\binom{5}{0} + \\binom{5}{1} + \\binom{5}{2} + \\binom{5}{3} + \\binom{5}{4} + \\binom{5}{5} = 1 + 5 + 10 + 10 + 5 + 1 = 32$ ✓. (The choice $64$ LEAVES $11$ FREE as well, doubling the count ✗; $31$ THROWS OUT THE SUBSET $\\{11\\}$, which meets both conditions ✗; $1024$ COUNTS EVERY SUBSET CONTAINING $11$ and forgets to bar the other odd numbers ✗.)',
    },
  ],
  // slot 9 — solve for the club size, or count with a lower bound
  [
    {
      q: 'A club with $n$ members can form exactly $4083$ different committees that have at least $2$ members, for a positive integer $n$. What is $n$?',
      choices: ['$12$', '$11$', '$13$', '$4096$'],
      answer: 0,
      solution:
        'Route one, solve the equation. Committees with at least $2$ members number $2^n - 1 - n$: every subset of the club, minus the empty committee and the $n$ one-member committees. Setting $2^n - 1 - n = 4083$ and trying $n = 12$ gives $4096 - 1 - 12 = 4083$ ✓. Route two, restore the missing committees. Adding back the empty committee and the singles shows the club has $4083 + 1 + n$ committees in all, and that total must be a power of $2$, since each member is on a committee or off it. The powers of $2$ near $4084$ are $2048$ and $4096$; only $4096$ can be written as $4084 + n$ with $n$ positive, and it forces $n = 12$. Checking the neighbors confirms it: an $11$-member club gives $2048 - 12 = 2036$ and a $13$-member club gives $8192 - 14 = 8178$ ✓. (The choice $11$ IS OFF BY ONE LOW, giving $2036$ ✗; $13$ IS OFF BY ONE HIGH, giving $8178$ ✗; $4096$ REPORTS THE TOTAL NUMBER OF COMMITTEES instead of $n$ ✗.)',
    },
    {
      q: 'A club with $n$ members can form exactly $562$ different committees that have at most $2$ members, counting the empty committee, for a positive integer $n$. What is $n$?',
      choices: ['$34$', '$32$', '$33$', '$528$'],
      answer: 2,
      solution:
        'Route one, solve the equation. Committees of at most $2$ members are those of size $0$, $1$ and $2$, so their number is $1 + n + \\binom{n}{2} = 562$. Then $n + \\frac{n(n-1)}{2} = 561$, which tidies to $\\frac{n(n+1)}{2} = 561$, so $n(n+1) = 1122 = 33 \\cdot 34$ and $n = 33$ ✓. Route two, fold the count into one combination. By the rule that side-by-side entries add to the entry below, $\\binom{n}{1} + \\binom{n}{2} = \\binom{n+1}{2}$, so the count is $1 + \\binom{n+1}{2} = 562$, giving $\\binom{n+1}{2} = 561$. Since $\\binom{34}{2} = \\frac{34 \\cdot 33}{2} = 561$, we get $n + 1 = 34$ and $n = 33$ ✓. (The choice $34$ REPORTS THE TOP OF THAT COMBINATION rather than $n$ ✗; $32$ IS OFF BY ONE LOW, giving $1 + 32 + 496 = 529$ ✗; $528$ REPORTS THE NUMBER OF TWO-MEMBER COMMITTEES instead of $n$ ✗.)',
    },
    {
      q: 'A club has $11$ members. How many of the possible committees, taken over every size, have at least $2$ members?',
      choices: ['$2047$', '$2036$', '$2037$', '$2035$'],
      answer: 1,
      solution:
        'Route one, count everything and subtract. Each member is on the committee or off it, so the club has $2^{11} = 2048$ possible committees. The ones that are too small are the empty committee ($1$) and the one-member committees ($\\binom{11}{1} = 11$), so $2048 - 1 - 11 = 2036$ ✓. Route two, add the allowed sizes. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$, so the sizes $2$ through $11$ give $55 + 165 + 330 + 462 + 462 + 330 + 165 + 55 + 11 + 1 = 2036$ ✓. (The choice $2047$ REMOVES ONLY THE EMPTY COMMITTEE ✗; $2037$ REMOVES THE ELEVEN SINGLES BUT KEEPS THE EMPTY COMMITTEE ✗; $2035$ ALSO THROWS OUT THE WHOLE-CLUB COMMITTEE, which the stem allows ✗.)',
    },
  ],
  // slot 10 — committee against leftovers, using symmetry about the middle
  [
    {
      q: 'A club has $11$ members. A committee is any group of members, of any size, in which the members on the committee outnumber the members left off it. How many such committees are possible?',
      choices: ['$2048$', '$1023$', '$562$', '$1024$'],
      answer: 3,
      solution:
        'Route one, pair each committee with its complement. There are $2^{11} = 2048$ committees in all. Matching each committee with the group left off it pairs the committees two by two, and since $11$ is odd the two members of a pair never have the same size, so exactly one of them outnumbers its leftovers. The winners are therefore half of $2048$, namely $1024$ ✓. Route two, add the qualifying sizes. A committee of size $k$ leaves $11 - k$ off, and $k > 11 - k$ means $k \\ge 6$. Row $11$ gives $\\binom{11}{6} + \\binom{11}{7} + \\cdots + \\binom{11}{11} = 462 + 330 + 165 + 55 + 11 + 1 = 1024$ ✓. (The choice $2048$ COUNTS EVERY COMMITTEE ✗; $1023$ THROWS OUT THE WHOLE-CLUB COMMITTEE, which outnumbers its empty leftovers ✗; $562$ STARTS AT SIZE $7$, one size too high ✗.)',
    },
    {
      q: 'A club has $12$ members. A committee is any group of members, of any size. In how many of the possible committees are the members on the committee exactly as many as the members left off it?',
      choices: ['$792$', '$924$', '$4096$', '$2048$'],
      answer: 1,
      solution:
        'Route one, name the size. If $k$ members serve and $12 - k$ are left off, the two sides match exactly when $k = 6$. So the count is the number of $6$-member committees, $\\binom{12}{6}$, which is the middle entry of row $12$ and equals $924$ ✓. Route two, work from the row sum. All $2^{12} = 4096$ committees split into three groups: fewer on than off, exactly equal, and more on than off. The first and third groups are mirror images of each other under swapping a committee for its leftovers, so they have the same size, and the entries of row $12$ before the middle add to $1 + 12 + 66 + 220 + 495 + 792 = 1586$. The tied group is therefore $4096 - 2 \\cdot 1586 = 4096 - 3172 = 924$ ✓. (The choice $792$ IS $\\binom{12}{5}$, one position off the middle ✗; $4096$ COUNTS EVERY COMMITTEE ✗; $2048$ ASSUMES THE TIES ARE HALF of all committees ✗.)',
    },
    {
      q: 'A club has $10$ members. A committee is any group of members, of any size, including the empty one. In how many of the possible committees do the members on the committee at least equal in number the members left off it?',
      choices: ['$638$', '$386$', '$512$', '$772$'],
      answer: 0,
      solution:
        'Route one, split the row about its middle. There are $2^{10} = 1024$ committees. A committee of size $k$ leaves $10 - k$ off, so “at least equal” means $k \\ge 5$. The committees with $k < 5$ and those with $k > 5$ are mirror images under swapping a committee for its leftovers, so they are equal in number, and the tied ones number $\\binom{10}{5} = 252$. That gives $\\frac{1024 - 252}{2} = 386$ committees with more on than off, and adding the ties gives $386 + 252 = 638$ ✓. Route two, add the qualifying sizes. Row $10$ is $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$, so the sizes $5$ through $10$ give $252 + 210 + 120 + 45 + 10 + 1 = 638$ ✓. (The choice $386$ THROWS OUT THE FIVE-VERSUS-FIVE TIES, though “at least equal” keeps them ✗; $512$ ASSUMES EXACTLY HALF, ignoring the ties ✗; $772$ REMOVES THE TIES BUT FORGETS TO HALVE ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 12, sections: { '12.5': s125 } }
