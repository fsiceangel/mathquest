// Counting & Probability chapter 13 — variations for section 13.5 (The
// Identity, i.e. the hockey stick). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem says where its sum starts and where it stops, spells out what
//    the $i$th term is when the sum is written with dots, and states whether
//    equal values are allowed in a chain of inequalities.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    identity $\binom{r}{r} + \cdots + \binom{n}{r} = \binom{n+1}{r+1}$ against
//    a direct addition of the terms, a running accumulation, a bijection, or a
//    split into power sums. Route two never reuses route one’s number.
//  - Each distractor is one named slip — raising only one of the two numbers,
//    forgetting to subtract the missing head of a mid-diagonal sum, stopping
//    the stick a term short, dropping a constant factor — named in CAPS.

const s135 = [
  // slot 1 — complete sticks, and the reversed "find the top" form
  [
    {
      q: 'Compute $\\binom{4}{4} + \\binom{5}{4} + \\binom{6}{4} + \\cdots + \\binom{12}{4}$. Every term has bottom number $4$, and the sum runs from $\\binom{4}{4}$ through $\\binom{12}{4}$.',
      choices: ['$1287$', '$715$', '$792$', '$1286$'],
      answer: 0,
      solution:
        'Route one, the identity. The bottom number is $4$ in every term and the sum starts at $\\binom{4}{4}$, so this is a complete hockey stick with $r = 4$ and $n = 12$: it equals $\\binom{13}{5} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{120} = \\frac{154440}{120} = 1287$ ✓. Route two, add the nine terms. They are $1, 5, 15, 35, 70, 126, 210, 330, 495$, and $1 + 5 + 15 + 35 + 70 + 126 + 210 + 330 + 495 = 1287$ ✓. (The choice $715$ is $\\binom{13}{4}$, which FORGETS TO RAISE THE BOTTOM NUMBER ✗; $792$ is $\\binom{12}{5}$, which FORGETS TO RAISE THE TOP NUMBER ✗; $1286$ DROPS THE FIRST TERM $\\binom{4}{4} = 1$ ✗.)',
    },
    {
      q: 'Compute $\\binom{5}{5} + \\binom{6}{5} + \\binom{7}{5} + \\binom{8}{5} + \\binom{9}{5}$.',
      choices: ['$252$', '$84$', '$210$', '$209$'],
      answer: 2,
      solution:
        'Route one, the identity. Every bottom number is $5$ and the sum starts at $\\binom{5}{5}$, so it is a complete hockey stick with $r = 5$ and $n = 9$, worth $\\binom{10}{6} = \\binom{10}{4} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{24} = 210$ ✓. Route two, add the five terms: $\\binom{5}{5} = 1$, $\\binom{6}{5} = 6$, $\\binom{7}{5} = 21$, $\\binom{8}{5} = 56$, $\\binom{9}{5} = 126$, and $1 + 6 + 21 + 56 + 126 = 210$ ✓. (The choice $252$ is $\\binom{10}{5}$, FORGETTING TO RAISE THE BOTTOM NUMBER ✗; $84$ is $\\binom{9}{6}$, FORGETTING TO RAISE THE TOP NUMBER ✗; $209$ DROPS THE FIRST TERM $\\binom{5}{5} = 1$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{n}{3} = 3060$. The sum starts at $\\binom{3}{3}$ and includes every term through $\\binom{n}{3}$. What is $n$?',
      choices: ['$16$', '$17$', '$18$', '$15$'],
      answer: 1,
      solution:
        'Route one, the identity. The sum starts at $\\binom{3}{3}$ with bottom number $3$ throughout, so it is a complete stick worth $\\binom{n+1}{4}$. Testing values, $\\binom{17}{4} = 2380$ is too small and $\\binom{18}{4} = 3060$ fits, so $n + 1 = 18$ and $n = 17$ ✓. Route two, accumulate. The terms $\\binom{3}{3}, \\binom{4}{3}, \\ldots$ are $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680$, and their running totals are $1, 5, 15, 35, 70, 126, 210, 330, 495, 715, 1001, 1365, 1820, 2380, 3060$; the total first reaches $3060$ when the term $\\binom{17}{3} = 680$ is added ✓. (The choice $16$ is OFF BY ONE LOW, since stopping at $\\binom{16}{3}$ leaves $2380$ ✗; $18$ SOLVES $\\binom{n}{4} = 3060$, forgetting to raise the top ✗; $15$ REPORTS THE NUMBER OF TERMS, since $\\binom{3}{3}$ through $\\binom{17}{3}$ is fifteen terms ✗.)',
    },
  ],
  // slot 2 — figurate numbers in disguise
  [
    {
      q: 'Find the sum of the first thirteen triangular numbers: $1 + 3 + 6 + 10 + \\cdots + 91$. (The $i$th triangular number is $\\frac{i(i+1)}{2}$, and the thirteenth of them is $91$.)',
      choices: ['$364$', '$560$', '$455$', '$91$'],
      answer: 2,
      solution:
        'Route one, the identity. The $i$th triangular number is $\\frac{i(i+1)}{2} = \\binom{i+1}{2}$, so the thirteen terms are $\\binom{2}{2}, \\binom{3}{2}, \\ldots, \\binom{14}{2}$ — a complete hockey stick with $r = 2$ and $n = 14$, worth $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{6} = 455$ ✓. Route two, add the thirteen numbers directly: $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 + 45 + 55 + 66 + 78 + 91 = 455$ ✓. (The choice $364$ STOPS AT TWELVE TERMS ✗; $560$ ADDS A FOURTEENTH TERM, $105$ ✗; $91$ REPORTS THE LAST TERM instead of the sum ✗.)',
    },
    {
      q: 'The $i$th tetrahedral number is $\\binom{i+2}{3}$, so the sequence begins $1, 4, 10, 20, \\ldots$. Find the sum of the first eight tetrahedral numbers, $1 + 4 + 10 + 20 + \\cdots + 120$.',
      choices: ['$330$', '$210$', '$495$', '$120$'],
      answer: 0,
      solution:
        'Route one, the identity. The eight terms are $\\binom{3}{3}, \\binom{4}{3}, \\ldots, \\binom{10}{3}$ — a complete hockey stick with $r = 3$ and $n = 10$, worth $\\binom{11}{4} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8}{24} = \\frac{7920}{24} = 330$ ✓. Route two, add the eight numbers directly: $1 + 4 + 10 + 20 + 35 + 56 + 84 + 120 = 330$ ✓. (The choice $210$ STOPS AT SEVEN TERMS ✗; $495$ ADDS A NINTH TERM, $165$ ✗; $120$ REPORTS THE LAST TERM instead of the sum ✗.)',
    },
    {
      q: 'The sum of the first $n$ triangular numbers $1 + 3 + 6 + 10 + \\cdots$ is $2300$, where the $i$th triangular number is $\\frac{i(i+1)}{2}$. What is $n$?',
      choices: ['$22$', '$24$', '$25$', '$23$'],
      answer: 3,
      solution:
        'Route one, the identity. Writing the $i$th triangular number as $\\binom{i+1}{2}$, the first $n$ of them add to $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{n+1}{2} = \\binom{n+2}{3}$. So $\\binom{n+2}{3} = 2300$; since $\\binom{24}{3} = 2024$ and $\\binom{25}{3} = 2300$, we have $n + 2 = 25$ and $n = 23$ ✓. Route two, accumulate. Adding $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276$ one at a time gives running totals $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816, 969, 1140, 1330, 1540, 1771, 2024, 2300$, and $2300$ arrives with the twenty-third ✓. (The choice $22$ is OFF BY ONE LOW, since twenty-two of them total $2024$ ✗; $24$ is OFF BY ONE HIGH, since twenty-four total $2600$ ✗; $25$ REPORTS $n + 2$, the top of $\\binom{n+2}{3}$, instead of $n$ ✗.)',
    },
  ],
  // slot 3 — steep sticks, and the reversed form again
  [
    {
      q: 'Compute $\\binom{5}{5} + \\binom{6}{5} + \\binom{7}{5} + \\cdots + \\binom{11}{5}$. Every term has bottom number $5$, and the sum runs from $\\binom{5}{5}$ through $\\binom{11}{5}$.',
      choices: ['$462$', '$792$', '$923$', '$924$'],
      answer: 3,
      solution:
        'Route one, the identity. The sum starts at $\\binom{5}{5}$ and every bottom number is $5$: a complete hockey stick with $r = 5$ and $n = 11$, worth $\\binom{12}{6} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{720} = \\frac{665280}{720} = 924$ ✓. Route two, add the seven terms. They are $1, 6, 21, 56, 126, 252, 462$, and $1 + 6 + 21 + 56 + 126 + 252 + 462 = 924$ ✓. (The choice $462$ is $\\binom{11}{6}$, FORGETTING TO RAISE THE TOP NUMBER ✗; $792$ is $\\binom{12}{5}$, FORGETTING TO RAISE THE BOTTOM NUMBER ✗; $923$ DROPS THE FIRST TERM $\\binom{5}{5} = 1$ ✗.)',
    },
    {
      q: 'Compute $\\binom{6}{6} + \\binom{7}{6} + \\binom{8}{6} + \\cdots + \\binom{11}{6}$. Every term has bottom number $6$, and the sum runs from $\\binom{6}{6}$ through $\\binom{11}{6}$.',
      choices: ['$330$', '$792$', '$924$', '$791$'],
      answer: 1,
      solution:
        'Route one, the identity. The sum starts at $\\binom{6}{6}$ and every bottom number is $6$: a complete hockey stick with $r = 6$ and $n = 11$, worth $\\binom{12}{7} = \\binom{12}{5} = 792$ ✓. Route two, add the six terms: $\\binom{6}{6} = 1$, $\\binom{7}{6} = 7$, $\\binom{8}{6} = 28$, $\\binom{9}{6} = 84$, $\\binom{10}{6} = 210$, $\\binom{11}{6} = 462$, and $1 + 7 + 28 + 84 + 210 + 462 = 792$ ✓. (The choice $330$ is $\\binom{11}{7}$, FORGETTING TO RAISE THE TOP NUMBER ✗; $924$ is $\\binom{12}{6}$, FORGETTING TO RAISE THE BOTTOM NUMBER ✗; $791$ DROPS THE FIRST TERM $\\binom{6}{6} = 1$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{4}{4} + \\binom{5}{4} + \\cdots + \\binom{n}{4} = 6188$. The sum starts at $\\binom{4}{4}$ and includes every term through $\\binom{n}{4}$. What is $n$?',
      choices: ['$16$', '$17$', '$15$', '$13$'],
      answer: 0,
      solution:
        'Route one, the identity. The sum starts at $\\binom{4}{4}$ with bottom number $4$ throughout, so it is a complete stick worth $\\binom{n+1}{5}$. Since $\\binom{16}{5} = 4368$ is too small and $\\binom{17}{5} = 6188$ fits, $n + 1 = 17$ and $n = 16$ ✓. Route two, accumulate. The terms $\\binom{4}{4}, \\binom{5}{4}, \\ldots$ are $1, 5, 15, 35, 70, 126, 210, 330, 495, 715, 1001, 1365, 1820$, whose running totals are $1, 6, 21, 56, 126, 252, 462, 792, 1287, 2002, 3003, 4368, 6188$; the total first reaches $6188$ when $\\binom{16}{4} = 1820$ is added ✓. (The choice $17$ SOLVES $\\binom{n}{5} = 6188$, forgetting to raise the top ✗; $15$ is OFF BY ONE LOW, since stopping at $\\binom{15}{4}$ leaves $4368$ ✗; $13$ REPORTS THE NUMBER OF TERMS, since $\\binom{4}{4}$ through $\\binom{16}{4}$ is thirteen terms ✗.)',
    },
  ],
  // slot 4 — mid-diagonal sums: the missing head must come off
  [
    {
      q: 'Compute $\\binom{5}{3} + \\binom{6}{3} + \\binom{7}{3} + \\cdots + \\binom{13}{3}$. Note that the sum starts at $\\binom{5}{3}$, not at $\\binom{3}{3}$, and stops at $\\binom{13}{3}$.',
      choices: ['$1001$', '$996$', '$991$', '$986$'],
      answer: 1,
      solution:
        'Route one, the identity with the head removed. The full stick $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{13}{3}$ equals $\\binom{14}{4} = 1001$. This sum is missing the front $\\binom{3}{3} + \\binom{4}{3}$, which is itself a stick worth $\\binom{5}{4} = 5$, so the answer is $1001 - 5 = 996$ ✓. Route two, add the nine terms. They are $\\binom{5}{3} = 10$, $20$, $35$, $56$, $84$, $120$, $165$, $220$, $286$, and $10 + 20 + 35 + 56 + 84 + 120 + 165 + 220 + 286 = 996$ ✓. (The choice $1001$ FORGETS TO SUBTRACT THE MISSING HEAD ✗; $991$ SUBTRACTS $\\binom{5}{3} = 10$, the first term that belongs, instead of the head that does not ✗; $986$ TAKES ONE TERM TOO MANY OUT OF THE HEAD, removing $\\binom{6}{4} = 15$ ✗.)',
    },
    {
      q: 'Compute $\\binom{4}{2} + \\binom{5}{2} + \\binom{6}{2} + \\cdots + \\binom{15}{2}$. Note that the sum starts at $\\binom{4}{2}$, not at $\\binom{2}{2}$, and stops at $\\binom{15}{2}$.',
      choices: ['$560$', '$554$', '$550$', '$556$'],
      answer: 3,
      solution:
        'Route one, the identity with the head removed. The full stick $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{15}{2}$ equals $\\binom{16}{3} = \\frac{16 \\cdot 15 \\cdot 14}{6} = 560$. The missing front is $\\binom{2}{2} + \\binom{3}{2} = \\binom{4}{3} = 4$, so the answer is $560 - 4 = 556$ ✓. Route two, add the twelve terms: $6 + 10 + 15 + 21 + 28 + 36 + 45 + 55 + 66 + 78 + 91 + 105 = 556$ ✓. (The choice $560$ FORGETS TO SUBTRACT THE MISSING HEAD ✗; $554$ SUBTRACTS $\\binom{4}{2} = 6$, the first term that belongs, instead of the head that does not ✗; $550$ TAKES ONE TERM TOO MANY OUT OF THE HEAD, removing $\\binom{5}{3} = 10$ ✗.)',
    },
    {
      q: 'Compute $\\binom{13}{2} + \\binom{14}{2} + \\binom{15}{2} + \\cdots + \\binom{20}{2}$. Note that the sum starts at $\\binom{13}{2}$, not at $\\binom{2}{2}$, and stops at $\\binom{20}{2}$.',
      choices: ['$1330$', '$1252$', '$1044$', '$966$'],
      answer: 2,
      solution:
        'Route one, the identity with the head removed. The full stick $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{20}{2}$ equals $\\binom{21}{3} = \\frac{21 \\cdot 20 \\cdot 19}{6} = 1330$. The missing front $\\binom{2}{2} + \\cdots + \\binom{12}{2}$ is itself a stick, worth $\\binom{13}{3} = 286$, so the answer is $1330 - 286 = 1044$ ✓. Route two, add the eight terms: $78 + 91 + 105 + 120 + 136 + 153 + 171 + 190 = 1044$ ✓. (The choice $1330$ FORGETS TO SUBTRACT THE MISSING HEAD ✗; $1252$ SUBTRACTS $\\binom{13}{2} = 78$, the first term that belongs, instead of the head that does not ✗; $966$ TAKES ONE TERM TOO MANY OUT OF THE HEAD, removing $\\binom{14}{3} = 364$ ✗.)',
    },
  ],
  // slot 5 — subsets sorted by their extreme element
  [
    {
      q: 'How many $5$-element subsets of $\\{1, 2, 3, \\ldots, 15\\}$ have largest element at most $11$?',
      choices: ['$210$', '$3003$', '$462$', '$252$'],
      answer: 2,
      solution:
        'Route one, sort by the largest element. If the largest element is $m$, the other four come from $\\{1, \\ldots, m-1\\}$ in $\\binom{m-1}{4}$ ways, and $m$ runs from $5$ to $11$. The total is $\\binom{4}{4} + \\binom{5}{4} + \\cdots + \\binom{10}{4}$, a complete hockey stick worth $\\binom{11}{5} = 462$ ✓. Route two, shrink the set. Such a subset uses no element above $11$, so it is exactly a $5$-element subset of $\\{1, 2, \\ldots, 11\\}$, and there are $\\frac{11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{120} = \\frac{55440}{120} = 462$ of those ✓. (The choice $210$ counts only the subsets whose largest element is EXACTLY $11$ ✗; $3003$ is $\\binom{15}{5}$, IGNORING THE CONDITION ✗; $252$ is $\\binom{10}{5}$, requiring the largest element to be AT MOST $10$ ✗.)',
    },
    {
      q: 'How many $4$-element subsets of $\\{1, 2, 3, \\ldots, 14\\}$ have smallest element at least $6$?',
      choices: ['$126$', '$1001$', '$84$', '$70$'],
      answer: 0,
      solution:
        'Route one, sort by the smallest element. If the smallest element is $m$, the other three come from the $14 - m$ values above it, in $\\binom{14-m}{3}$ ways, and $m$ runs from $6$ to $11$. The total is $\\binom{8}{3} + \\binom{7}{3} + \\cdots + \\binom{3}{3}$ — the same stick read backwards — which equals $\\binom{9}{4} = 126$ ✓. Route two, shrink the set. Such a subset uses no element below $6$, so it is exactly a $4$-element subset of the nine values $\\{6, 7, \\ldots, 14\\}$, and there are $\\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24} = \\frac{3024}{24} = 126$ of those ✓. (The choice $1001$ is $\\binom{14}{4}$, IGNORING THE CONDITION ✗; $84$ is $\\binom{9}{3}$, FORGETTING TO RAISE THE BOTTOM NUMBER of the stick ✗; $70$ is $\\binom{8}{4}$, reading "at least $6$" as "GREATER THAN $6$" ✗.)',
    },
    {
      q: 'How many $4$-element subsets of $\\{1, 2, 3, \\ldots, 20\\}$ have largest element exactly $12$?',
      choices: ['$495$', '$330$', '$220$', '$165$'],
      answer: 3,
      solution:
        'Route one, two sticks. The subsets with largest element at most $12$ number $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{11}{3} = \\binom{12}{4} = 495$, and those with largest element at most $11$ number $\\binom{3}{3} + \\cdots + \\binom{10}{3} = \\binom{11}{4} = 330$. Their difference counts the subsets whose largest element is $12$: $495 - 330 = 165$ ✓. Route two, build the subset. Put $12$ in, then choose the other three elements from $\\{1, 2, \\ldots, 11\\}$, which can be done in $\\frac{11 \\cdot 10 \\cdot 9}{6} = 165$ ways ✓. (The choice $495$ counts largest AT MOST $12$ rather than exactly $12$ ✗; $330$ counts largest at most $11$, LEAVING $12$ OUT ALTOGETHER ✗; $220$ is $\\binom{12}{3}$, CHOOSING THE OTHER THREE FROM $\\{1, \\ldots, 12\\}$ and so allowing $12$ to be picked twice ✗.)',
    },
  ],
  // slot 6 — products of consecutive integers
  [
    {
      q: 'Compute $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\cdots + 10 \\cdot 11$, where the $i$th term is $i(i+1)$ and the last term is $10 \\cdot 11$.',
      choices: ['$440$', '$220$', '$330$', '$385$'],
      answer: 0,
      solution:
        'Route one, the identity. Each term is $i(i+1) = 2 \\cdot \\frac{i(i+1)}{2} = 2\\binom{i+1}{2}$, so the sum is $2\\left(\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{11}{2}\\right) = 2\\binom{12}{3} = 2 \\cdot 220 = 440$ ✓. Route two, add the ten products directly: $2 + 6 + 12 + 20 + 30 + 42 + 56 + 72 + 90 + 110 = 440$ ✓. (The choice $220$ FORGETS THE FACTOR OF $2$ ✗; $330$ is $2\\binom{11}{3}$, STOPPING THE STICK ONE TERM SHORT ✗; $385$ is $1^2 + 2^2 + \\cdots + 10^2$, THE WRONG SUM ✗.)',
    },
    {
      q: 'Compute $1 \\cdot 2 \\cdot 3 + 2 \\cdot 3 \\cdot 4 + 3 \\cdot 4 \\cdot 5 + \\cdots + 8 \\cdot 9 \\cdot 10$, where the $i$th term is $i(i+1)(i+2)$ and the last term is $8 \\cdot 9 \\cdot 10$.',
      choices: ['$330$', '$660$', '$1980$', '$1260$'],
      answer: 2,
      solution:
        'Route one, the identity. Each term is $i(i+1)(i+2) = 6 \\cdot \\frac{i(i+1)(i+2)}{6} = 6\\binom{i+2}{3}$, so the sum is $6\\left(\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{10}{3}\\right) = 6\\binom{11}{4} = 6 \\cdot 330 = 1980$ ✓. Route two, add the eight products directly: $6 + 24 + 60 + 120 + 210 + 336 + 504 + 720 = 1980$ ✓. (The choice $330$ FORGETS THE FACTOR OF $6$ ✗; $660$ USES A FACTOR OF $2$ INSTEAD OF $6$, as if the terms were products of two consecutive integers ✗; $1260$ is $6\\binom{10}{4}$, STOPPING THE STICK ONE TERM SHORT ✗.)',
    },
    {
      q: 'Compute $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\cdots + 20 \\cdot 21$, where the $i$th term is $i(i+1)$ and the last term is $20 \\cdot 21$.',
      choices: ['$1540$', '$3080$', '$2870$', '$2660$'],
      answer: 1,
      solution:
        'Route one, the identity. Each term is $i(i+1) = 2\\binom{i+1}{2}$, so the sum is $2\\left(\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{21}{2}\\right) = 2\\binom{22}{3} = 2 \\cdot 1540 = 3080$ ✓. Route two, split each product. Since $i(i+1) = i^2 + i$, the sum is $(1^2 + 2^2 + \\cdots + 20^2) + (1 + 2 + \\cdots + 20) = \\frac{20 \\cdot 21 \\cdot 41}{6} + \\frac{20 \\cdot 21}{2} = 2870 + 210 = 3080$ ✓. (The choice $1540$ FORGETS THE FACTOR OF $2$ ✗; $2870$ KEEPS ONLY THE SQUARES, $1^2 + \\cdots + 20^2$ ✗; $2660$ is $2\\binom{21}{3}$, STOPPING THE STICK ONE TERM SHORT ✗.)',
    },
  ],
  // slot 7 — triangular layers stacked up
  [
    {
      q: 'A stack of cannonballs has triangular layers: the top layer has $1$ ball, the next $3$, then $6$, then $10$, each layer holding the next triangular number. The stack has $15$ layers in all. How many cannonballs are in it?',
      choices: ['$560$', '$680$', '$816$', '$1800$'],
      answer: 1,
      solution:
        'Route one, the identity. Layer $i$ holds the $i$th triangular number, $\\binom{i+1}{2}$, so fifteen layers hold $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{16}{2} = \\binom{17}{3} = \\frac{17 \\cdot 16 \\cdot 15}{6} = 680$ ✓. Route two, split each layer. Layer $i$ holds $\\frac{i^2 + i}{2}$, so the stack holds $\\frac{1}{2}\\left((1^2 + \\cdots + 15^2) + (1 + \\cdots + 15)\\right) = \\frac{1240 + 120}{2} = \\frac{1360}{2} = 680$ ✓. (The choice $560$ counts only FOURTEEN LAYERS ✗; $816$ counts SIXTEEN LAYERS ✗; $1800$ GIVES EVERY LAYER THE BOTTOM LAYER’S COUNT of $120$ ✗.)',
    },
    {
      q: 'A charity collects money for $14$ days. On day $i$ it collects the $i$th triangular number of dollars — $\\$1$ on day $1$, $\\$3$ on day $2$, $\\$6$ on day $3$, and so on through day $14$. How many dollars does it collect in all?',
      choices: ['$455$', '$680$', '$1470$', '$560$'],
      answer: 3,
      solution:
        'Route one, the identity. Day $i$ brings $\\binom{i+1}{2}$ dollars, so fourteen days bring $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{15}{2} = \\binom{16}{3} = \\frac{16 \\cdot 15 \\cdot 14}{6} = 560$ dollars ✓. Route two, split each day. Day $i$ brings $\\frac{i^2 + i}{2}$ dollars, so the total is $\\frac{1}{2}\\left((1^2 + \\cdots + 14^2) + (1 + \\cdots + 14)\\right) = \\frac{1015 + 105}{2} = \\frac{1120}{2} = 560$ ✓. (The choice $455$ counts only THIRTEEN DAYS ✗; $680$ counts FIFTEEN DAYS ✗; $1470$ GIVES EVERY DAY THE LAST DAY’S $\\$105$ ✗.)',
    },
    {
      q: 'Oranges are stacked in triangular layers, one layer per triangular number starting from the top: $1$ orange in the top layer, then $3$, then $6$, then $10$, and so on. The whole stack holds $1330$ oranges. How many layers does it have?',
      choices: ['$21$', '$18$', '$19$', '$20$'],
      answer: 2,
      solution:
        'Route one, the identity. A stack of $n$ layers holds $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{n+1}{2} = \\binom{n+2}{3}$ oranges. Setting $\\binom{n+2}{3} = 1330$ and testing, $\\binom{20}{3} = 1140$ is too small and $\\binom{21}{3} = 1330$ fits, so $n + 2 = 21$ and $n = 19$ ✓. Route two, stack the layers one at a time. The layers $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190$ give running totals $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816, 969, 1140, 1330$, and $1330$ is reached with the nineteenth layer ✓. (The choice $21$ REPORTS $n + 2$, the top of $\\binom{n+2}{3}$, instead of the number of layers ✗; $18$ is OFF BY ONE LOW, since eighteen layers hold $1140$ ✗; $20$ is OFF BY ONE HIGH, since twenty layers hold $1540$ ✗.)',
    },
  ],
  // slot 8 — non-decreasing chains
  [
    {
      q: 'How many ordered triples $(a, b, c)$ of integers satisfy $1 \\leq a \\leq b \\leq c \\leq 14$? Equal values are allowed.',
      choices: ['$364$', '$2744$', '$680$', '$560$'],
      answer: 3,
      solution:
        'Route one, sort by $c$. For a fixed $c$, the pairs with $1 \\leq a \\leq b \\leq c$ number $\\binom{c+1}{2}$, since choosing $a \\leq b$ from $c$ values is choosing a multiset of size $2$. Summing $c = 1$ through $14$ gives $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{15}{2} = \\binom{16}{3} = 560$ ✓. Route two, a bijection. The map $(a, b, c) \\mapsto (a, b+1, c+2)$ turns each such triple into a strictly increasing triple drawn from $\\{1, 2, \\ldots, 16\\}$, and subtracting $0$, $1$, $2$ reverses it, so the count is $\\frac{16 \\cdot 15 \\cdot 14}{6} = \\frac{3360}{6} = 560$ ✓. (The choice $364$ is $\\binom{14}{3}$, demanding STRICT INEQUALITIES ✗; $2744$ is $14^3$, DROPPING THE ORDERING ✗; $680$ is $\\binom{17}{3}$, MISPLACING THE TOP OF THE STICK BY ONE ✗.)',
    },
    {
      q: 'How many ordered quadruples $(a, b, c, d)$ of integers satisfy $1 \\leq a \\leq b \\leq c \\leq d \\leq 9$? Equal values are allowed.',
      choices: ['$126$', '$495$', '$6561$', '$715$'],
      answer: 1,
      solution:
        'Route one, sort by $d$. For a fixed $d$, the triples with $1 \\leq a \\leq b \\leq c \\leq d$ number $\\binom{d+2}{3}$, a multiset of size $3$ drawn from $d$ values. Summing $d = 1$ through $9$ gives $\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{11}{3} = \\binom{12}{4} = 495$ ✓. Route two, a bijection. The map $(a, b, c, d) \\mapsto (a, b+1, c+2, d+3)$ turns each quadruple into a strictly increasing quadruple drawn from $\\{1, 2, \\ldots, 12\\}$, so the count is $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = \\frac{11880}{24} = 495$ ✓. (The choice $126$ is $\\binom{9}{4}$, demanding STRICT INEQUALITIES ✗; $6561$ is $9^4$, DROPPING THE ORDERING ✗; $715$ is $\\binom{13}{4}$, MISPLACING THE TOP OF THE STICK BY ONE ✗.)',
    },
    {
      q: 'For a positive integer $n$, exactly $1140$ ordered triples $(a, b, c)$ of integers satisfy $1 \\leq a \\leq b \\leq c \\leq n$, where equal values are allowed. What is $n$?',
      choices: ['$18$', '$20$', '$17$', '$19$'],
      answer: 0,
      solution:
        'Route one, sort by $c$. For a fixed $c$ the pairs $(a, b)$ with $1 \\leq a \\leq b \\leq c$ number $\\binom{c+1}{2}$, so the triples counted number $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{n+1}{2} = \\binom{n+2}{3}$. Setting $\\binom{n+2}{3} = 1140$ and testing, $\\binom{19}{3} = 969$ is too small and $\\binom{20}{3} = 1140$ fits, so $n + 2 = 20$ and $n = 18$ ✓. Route two, a bijection and a cube. Sending $(a, b, c)$ to $(a, b+1, c+2)$ gives a strictly increasing triple drawn from $\\{1, \\ldots, n+2\\}$, so the count is $\\frac{(n+2)(n+1)n}{6}$, and $(n+2)(n+1)n = 6 \\cdot 1140 = 6840$. Three consecutive integers with product $6840$ sit just below $19^3 = 6859$, and indeed $20 \\cdot 19 \\cdot 18 = 6840$, so $n = 18$ ✓. (The choice $20$ REPORTS $n + 2$, the top of $\\binom{n+2}{3}$, instead of $n$ ✗; $17$ is OFF BY ONE LOW, since $n = 17$ gives only $969$ triples ✗; $19$ is OFF BY ONE HIGH, since $n = 19$ gives $1330$ triples ✗.)',
    },
  ],
  // slot 9 — sums counted by the middle element
  [
    {
      q: 'Compute $1 \\cdot 11 + 2 \\cdot 10 + 3 \\cdot 9 + \\cdots + 11 \\cdot 1$, where the $i$th term is $i(12 - i)$ and the sum runs from $i = 1$ to $i = 11$.',
      choices: ['$792$', '$506$', '$286$', '$364$'],
      answer: 2,
      solution:
        'Route one, count by the middle element. Take a $3$-element subset of $\\{1, 2, \\ldots, 13\\}$ and look at its middle element $m$: there are $m - 1$ choices below it and $13 - m$ above, so $(m-1)(13-m)$ subsets have middle element $m$. As $m$ runs from $2$ to $12$ these counts are exactly $1 \\cdot 11, 2 \\cdot 10, \\ldots, 11 \\cdot 1$, so the sum counts every $3$-element subset once: $\\binom{13}{3} = \\frac{13 \\cdot 12 \\cdot 11}{6} = 286$ ✓. Route two, split each product. Since $i(12 - i) = 12i - i^2$, the sum is $12(1 + 2 + \\cdots + 11) - (1^2 + 2^2 + \\cdots + 11^2) = 12 \\cdot 66 - 506 = 792 - 506 = 286$ ✓. (The choice $792$ is $12(1 + \\cdots + 11)$, THE FIRST PIECE ALONE ✗; $506$ is $1^2 + \\cdots + 11^2$, THE SECOND PIECE ALONE ✗; $364$ is $\\binom{14}{3}$, OVERSHOOTING THE SET BY ONE ✗.)',
    },
    {
      q: 'Compute $1 \\cdot 12 + 2 \\cdot 11 + 3 \\cdot 10 + \\cdots + 12 \\cdot 1$, where the $i$th term is $i(13 - i)$ and the sum runs from $i = 1$ to $i = 12$.',
      choices: ['$364$', '$286$', '$455$', '$182$'],
      answer: 0,
      solution:
        'Route one, count by the middle element. A $3$-element subset of $\\{1, 2, \\ldots, 14\\}$ with middle element $m$ has $m - 1$ choices below and $14 - m$ above, so there are $(m-1)(14-m)$ of them, and $m$ running from $2$ to $13$ produces exactly $1 \\cdot 12, 2 \\cdot 11, \\ldots, 12 \\cdot 1$. The sum therefore counts every $3$-element subset once: $\\binom{14}{3} = \\frac{14 \\cdot 13 \\cdot 12}{6} = 364$ ✓. Route two, pair the ends. The $i$th term $i(13-i)$ equals the $(13-i)$th term, so the twelve terms split into six equal pairs whose distinct values are $1 \\cdot 12 = 12$, $2 \\cdot 11 = 22$, $3 \\cdot 10 = 30$, $4 \\cdot 9 = 36$, $5 \\cdot 8 = 40$, $6 \\cdot 7 = 42$; then $2(12 + 22 + 30 + 36 + 40 + 42) = 2 \\cdot 182 = 364$ ✓. (The choice $286$ is $\\binom{13}{3}$, STOPPING THE SUM ONE TERM SHORT ✗; $455$ is $\\binom{15}{3}$, RUNNING ONE TERM TOO FAR ✗; $182$ FORGETS TO DOUBLE after pairing the ends ✗.)',
    },
    {
      q: 'Compute $1 \\cdot 13 + 2 \\cdot 12 + 3 \\cdot 11 + \\cdots + 13 \\cdot 1$, where the $i$th term is $i(14 - i)$ and the sum runs from $i = 1$ to $i = 13$.',
      choices: ['$364$', '$560$', '$252$', '$455$'],
      answer: 3,
      solution:
        'Route one, count by the middle element. A $3$-element subset of $\\{1, 2, \\ldots, 15\\}$ with middle element $m$ has $m - 1$ choices below and $15 - m$ above, giving $(m-1)(15-m)$ subsets, and $m = 2$ through $14$ produces exactly $1 \\cdot 13, 2 \\cdot 12, \\ldots, 13 \\cdot 1$. So the sum is $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{6} = 455$ ✓. Route two, add the thirteen products directly: $13 + 24 + 33 + 40 + 45 + 48 + 49 + 48 + 45 + 40 + 33 + 24 + 13 = 455$ ✓. (The choice $364$ is $\\binom{14}{3}$, STOPPING AT $12 \\cdot 1$ ✗; $560$ is $\\binom{16}{3}$, RUNNING ONE TERM TOO FAR ✗; $252$ STOPS AT THE MIDDLE TERM $7 \\cdot 7$, adding only the first seven products ✗.)',
    },
  ],
  // slot 10 — adding up extreme elements
  [
    {
      q: 'For every $3$-element subset of $\\{1, 2, \\ldots, 10\\}$, write down its largest element. What is the sum of all these largest elements?',
      choices: ['$330$', '$660$', '$990$', '$630$'],
      answer: 2,
      solution:
        'Route one, the identity. The subsets whose largest element is $m$ number $\\binom{m-1}{2}$, so the answer is $\\sum_{m=3}^{10} m\\binom{m-1}{2}$. Since $m\\binom{m-1}{2} = 3\\binom{m}{3}$, this equals $3\\left(\\binom{3}{3} + \\binom{4}{3} + \\cdots + \\binom{10}{3}\\right) = 3\\binom{11}{4} = 3 \\cdot 330 = 990$ ✓. Route two, add the eight cases directly: $3 \\cdot 1 + 4 \\cdot 3 + 5 \\cdot 6 + 6 \\cdot 10 + 7 \\cdot 15 + 8 \\cdot 21 + 9 \\cdot 28 + 10 \\cdot 36 = 3 + 12 + 30 + 60 + 105 + 168 + 252 + 360 = 990$ ✓. (The choice $330$ FORGETS THE FACTOR OF $3$ ✗; $660$ USES A FACTOR OF $2$ INSTEAD OF $3$ ✗; $630$ is $3\\binom{10}{4}$, MISPLACING THE TOP OF THE STICK BY ONE ✗.)',
    },
    {
      q: 'For every $2$-element subset of $\\{1, 2, \\ldots, 9\\}$, write down its smaller element. What is the sum of all these smaller elements?',
      choices: ['$120$', '$84$', '$165$', '$240$'],
      answer: 0,
      solution:
        'Route one, count in layers. For each pair, its smaller element $a$ is the number of values $t$ with $1 \\leq t \\leq a$, so the whole sum counts the pairs $(t, \\{a, b\\})$ with $t \\leq a < b$. For a fixed $t$, the two-element subsets whose smaller element is at least $t$ are the $2$-element subsets of $\\{t, \\ldots, 9\\}$, namely $\\binom{10-t}{2}$ of them, and $t$ runs from $1$ to $8$. The total is $\\binom{9}{2} + \\binom{8}{2} + \\cdots + \\binom{2}{2} = \\binom{10}{3} = 120$ ✓. Route two, add by cases. Pairs with smaller element $m$ number $9 - m$, so the sum is $1 \\cdot 8 + 2 \\cdot 7 + 3 \\cdot 6 + 4 \\cdot 5 + 5 \\cdot 4 + 6 \\cdot 3 + 7 \\cdot 2 + 8 \\cdot 1 = 8 + 14 + 18 + 20 + 20 + 18 + 14 + 8 = 120$ ✓. (The choice $84$ is the answer for $\\{1, \\ldots, 8\\}$, STOPPING THE STICK ONE TERM SHORT ✗; $165$ is the answer for $\\{1, \\ldots, 10\\}$, RUNNING ONE TERM TOO FAR ✗; $240$ SUMS THE LARGER ELEMENT of each pair instead ✗.)',
    },
    {
      q: 'For every $3$-element subset of $\\{1, 2, \\ldots, 8\\}$, write down its smallest element. What is the sum of all these smallest elements?',
      choices: ['$378$', '$56$', '$84$', '$126$'],
      answer: 3,
      solution:
        'Route one, count in layers. For each subset, its smallest element is the number of values $t$ with $1 \\leq t \\leq \\min$, so the whole sum counts the pairs $(t, S)$ with $t$ at most every element of $S$. For a fixed $t$, the subsets whose smallest element is at least $t$ are the $3$-element subsets of $\\{t, \\ldots, 8\\}$, namely $\\binom{9-t}{3}$ of them, and $t$ runs from $1$ to $6$. The total is $\\binom{8}{3} + \\binom{7}{3} + \\cdots + \\binom{3}{3} = \\binom{9}{4} = 126$ ✓. Route two, add by cases. Subsets with smallest element $m$ number $\\binom{8-m}{2}$, so the sum is $1 \\cdot 21 + 2 \\cdot 15 + 3 \\cdot 10 + 4 \\cdot 6 + 5 \\cdot 3 + 6 \\cdot 1 = 21 + 30 + 30 + 24 + 15 + 6 = 126$ ✓. (The choice $378$ SUMS THE LARGEST ELEMENT of each subset instead ✗; $56$ is $\\binom{8}{3}$, COUNTING THE SUBSETS rather than adding their smallest elements ✗; $84$ is $\\binom{9}{3}$, FORGETTING TO RAISE THE BOTTOM NUMBER of the stick ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 13, sections: { '13.5': s135 } }
