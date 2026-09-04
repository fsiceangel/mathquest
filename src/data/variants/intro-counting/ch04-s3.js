// Counting & Probability chapter 4 — variations for section 4.4
// (Our First Combinatorial Identity). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: chosen groups have no roles and no
//    order unless the stem names a role, every object in a pool is different and
//    may be used at most once, and "at least one" or "exactly one" is spelled out
//    in words rather than left to inference.
//  - Every keyed answer is reached twice along routes that share no steps. Route
//    one is almost always the who-is-left-out argument the section is built on;
//    route two is a direct computation that never mentions the identity — the
//    factorial formula, a split on one object, an ordered count divided down, a
//    table of values, or an inclusion–exclusion count. Route two never reuses
//    route one’s number.
//  - Each distractor is one named slip — forgetting to divide, flipping the top
//    instead of the bottom, leaving out one object too many, adding the bottoms
//    instead of subtracting, reporting an intermediate product — and the slip is
//    named in CAPS.

const s44 = [
  // slot 1 — flip a large bottom number to a small one
  [
    {
      q: 'What is $\\binom{22}{20}$?',
      choices: ['$462$', '$22$', '$231$', '$210$'],
      answer: 2,
      solution:
        'Route one, who is left out. Choosing $20$ of $22$ objects to keep is the same decision as choosing the $2$ to leave out, so $\\binom{22}{20}$ counts pairs. Number the objects $1$ through $22$ and sort each pair by its smaller number: the pair whose smaller number is $1$ has $21$ partners, then $20$, and so on down to $1$. That is $21 + 20 + \\cdots + 1 = 231$ ✓. Route two, the formula. $\\binom{22}{20} = \\frac{22!}{20!\\,2!}$, and the $20!$ cancels all but two of the factors on top, leaving $\\frac{22 \\cdot 21}{2} = 231$ ✓. (The choice $462$ is $22 \\cdot 21$ and FORGETS TO DIVIDE BY $2!$, counting the left-out pair in order ✗; $22$ is $\\binom{22}{21}$ and LEAVES OUT ONLY ONE object ✗; $210$ is $\\binom{21}{2}$ and DROPS AN OBJECT FROM THE POOL, counting the pairs among $21$ objects instead of $22$ ✗.)',
    },
    {
      q: 'A shop displays $19$ of its $21$ different hats in the window; the window shows them as a set, in no order. How many different displays are possible?',
      choices: ['$210$', '$420$', '$21$', '$1330$'],
      answer: 0,
      solution:
        'Route one, who is left out. A display of $19$ hats is decided the moment you say which $2$ hats stay off the window, so the displays match the pairs of hats one for one. Number the hats and sort each pair by its lower number: $20 + 19 + \\cdots + 1 = 210$ pairs ✓. Route two, the formula. $\\binom{21}{19} = \\frac{21!}{19!\\,2!} = \\frac{21 \\cdot 20}{2} = 210$ ✓. (The choice $420$ is $21 \\cdot 20$ and TREATS THE TWO HELD-BACK HATS AS ORDERED, counting every pair twice ✗; $21$ holds back ONE HAT INSTEAD OF TWO ✗; $1330$ is $\\binom{21}{3}$ and HOLDS BACK THREE ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{n-2} = 300$. What is $n$?',
      choices: ['$24$', '$26$', '$600$', '$25$'],
      answer: 3,
      solution:
        'Route one, who is left out. Choosing $n - 2$ of the $n$ objects is the same as choosing the $2$ left out, so $\\binom{n}{n-2}$ is the number of pairs, $\\frac{n(n-1)}{2}$. Setting that equal to $300$ gives $n(n-1) = 600$, and $600 = 25 \\cdot 24$, so $n = 25$ ✓. Route two, build a table. Compute $\\binom{n}{n-2}$ straight from the formula for a few values: $n = 20$ gives $190$, $n = 23$ gives $253$, $n = 24$ gives $276$, and $n = 25$ gives $300$ ✓. Each step up adds more pairs than the last, so the values never repeat and $25$ is the only answer. (The choice $24$ SHIFTS THE FACTORS UP, solving $n(n+1) = 600$ from $24 \\cdot 25$ ✗; $26$ SHIFTS THEM DOWN, solving $(n-1)(n-2) = 600$ and reading $n - 1 = 25$ ✗; $600$ REPORTS THE PRODUCT $n(n-1)$ instead of $n$ ✗.)',
    },
  ],
  // slot 2 — a sum of two flipped terms
  [
    {
      q: 'What is $\\binom{17}{16} + \\binom{17}{15}$?',
      choices: ['$153$', '$34$', '$136$', '$289$'],
      answer: 0,
      solution:
        'Route one, who is left out. $\\binom{17}{16}$ counts the ways to leave exactly one of the $17$ objects out, and there are $17$ of those. $\\binom{17}{15}$ counts the ways to leave exactly two out; sorting each left-out pair by its lower number gives $16 + 15 + \\cdots + 1 = 136$. The sum is $17 + 136 = 153$ ✓. Route two, the formula on each term. $\\binom{17}{16} = \\frac{17!}{16!\\,1!} = 17$ and $\\binom{17}{15} = \\frac{17!}{15!\\,2!} = \\frac{17 \\cdot 16}{2} = 136$, so the sum is $153$ ✓. (The choice $34$ TREATS BOTH TERMS AS $17$ ✗; $136$ DROPS THE FIRST TERM ✗; $289$ is $17 \\cdot 17$ and MULTIPLIES WHERE THE PROBLEM ADDS ✗.)',
    },
    {
      q: 'A club of $15$ members must leave exactly $13$ people out of a photo, or else exactly $14$ people out. How many more ways are there to leave out $13$ than to leave out $14$?',
      choices: ['$120$', '$105$', '$90$', '$15$'],
      answer: 2,
      solution:
        'Route one, who is left out. Naming the $13$ who stay out is the same as naming the $2$ who pose, so there are $\\binom{15}{2} = \\frac{15 \\cdot 14}{2} = 105$ ways. Naming the $14$ who stay out is the same as naming the single person who poses, so there are $15$ ways. The difference is $105 - 15 = 90$ ✓. Route two, count the left-out groups themselves. A left-out group of $14$ is fixed by the one member missing from it, so there are $15$ such groups. Every left-out group of $13$ comes from dropping one more member out of a group of $14$: that is $15 \\cdot 14 = 210$ drops, and each group of $13$ shows up twice, once for each of the two members that could be added back, giving $210 \\div 2 = 105$ groups of $13$. The difference is $90$ ✓. (The choice $120$ ADDS THE TWO COUNTS instead of subtracting ✗; $105$ REPORTS ONLY THE FIRST COUNT ✗; $15$ REPORTS ONLY THE SECOND ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{n-1} + \\binom{n}{n-2} = 120$. What is $n$?',
      choices: ['$16$', '$15$', '$60$', '$240$'],
      answer: 1,
      solution:
        'Route one, who is left out. $\\binom{n}{n-1}$ counts the ways to leave one object out, which is $n$, and $\\binom{n}{n-2}$ counts the ways to leave two out, which is $\\frac{n(n-1)}{2}$. So $n + \\frac{n(n-1)}{2} = 120$. Doubling gives $2n + n^2 - n = 240$, that is $n(n+1) = 240 = 15 \\cdot 16$, so $n = 15$ ✓. Route two, build a table. Evaluate the sum straight from the formula: $n = 13$ gives $13 + 78 = 91$, $n = 14$ gives $14 + 91 = 105$, and $n = 15$ gives $15 + 105 = 120$ ✓. The sum grows with $n$, so no other value works. (The choice $16$ DROPS THE FIRST TERM, since $\\binom{16}{14} = 120$ on its own ✗; $60$ TREATS BOTH TERMS AS $n$ and solves $2n = 120$ ✗; $240$ REPORTS THE PRODUCT $n(n+1)$ instead of $n$ ✗.)',
    },
  ],
  // slot 3 — recognize the flipped form
  [
    {
      q: 'Which of the following is equal to $\\binom{15}{6}$?',
      choices: ['$\\binom{15}{4}$', '$\\binom{15}{9}$', '$\\binom{9}{6}$', '$\\binom{15}{11}$'],
      answer: 1,
      solution:
        'Route one, who is left out. Choosing $6$ of $15$ objects to keep names the $9$ that are left out, and choosing those $9$ names the $6$ that are kept, so the two collections are matched one for one and $\\binom{15}{6} = \\binom{15}{9}$ ✓. The identity keeps the top number at $15$ and replaces the bottom by $15 - 6 = 9$. Route two, the formula. $\\binom{15}{6} = \\frac{15!}{6!\\,9!}$ and $\\binom{15}{9} = \\frac{15!}{9!\\,6!}$; the two denominators are the same product written in the other order, so the values match, and both come to $5005$ ✓. (The choice $\\binom{15}{4}$ PAIRS THE BOTTOMS SO THEY ADD TO $10$ rather than to the top number, and equals $1365$ ✗; $\\binom{9}{6}$ MOVES THE SUBTRACTION TO THE TOP, replacing $15$ by $15 - 6$, and equals $84$ ✗; $\\binom{15}{11}$ PAIRS THE BOTTOMS SO THEY ADD TO $17$, and equals $1365$ ✗.)',
    },
    {
      q: 'Which of the following is equal to $\\binom{n}{n-3}$ for every integer $n \\ge 3$?',
      choices: ['$\\binom{n-3}{3}$', '$\\binom{3}{n}$', '$\\binom{n}{n}$', '$\\binom{n}{3}$'],
      answer: 3,
      solution:
        'Route one, who is left out. A choice of $n - 3$ objects out of $n$ is settled by naming the $3$ objects that are left out, and every set of $3$ left out gives back exactly one choice of $n - 3$ kept. So the two counts are equal: $\\binom{n}{n-3} = \\binom{n}{3}$ ✓. Route two, the formula. $\\binom{n}{n-3} = \\frac{n!}{(n-3)!\\,\\bigl(n - (n-3)\\bigr)!} = \\frac{n!}{(n-3)!\\,3!}$, and that last expression is the formula for $\\binom{n}{3}$ written out ✓. (The choice $\\binom{n-3}{3}$ SHRINKS THE TOP NUMBER TOO; at $n = 8$ it is $\\binom{5}{3} = 10$ while $\\binom{8}{5} = 56$ ✗. The choice $\\binom{3}{n}$ TURNS THE SYMBOL UPSIDE DOWN and is $0$ for every $n > 3$ ✗; $\\binom{n}{n}$ READS "ALL BUT THREE" AS "ALL" and is always $1$ ✗.)',
    },
    {
      q: '$\\binom{16}{k} = \\binom{16}{9}$ and $k \\ne 9$. What is $k$?',
      choices: ['$9$', '$8$', '$7$', '$25$'],
      answer: 2,
      solution:
        'Route one, who is left out. Leaving $9$ of the $16$ objects out keeps $7$ behind, and matching each left-out group of $9$ with the $7$ it spares is a one-to-one pairing. So $\\binom{16}{9} = \\binom{16}{7}$, and since $k$ may not be $9$, we get $k = 7$ ✓. Route two, compute the values. Working the formula out gives $\\binom{16}{9} = 11440$, and the neighboring values are $\\binom{16}{6} = 8008$, $\\binom{16}{7} = 11440$ ✓, and $\\binom{16}{8} = 12870$. Only $k = 7$ matches. (The choice $9$ IGNORES THE CONDITION $k \\ne 9$ ✗; $8$ HALVES THE TOP NUMBER, guessing that the match sits at the middle, but $\\binom{16}{8} = 12870$ ✗; $25$ ADDS the top and the bottom instead of subtracting, and $\\binom{16}{25} = 0$ ✗.)',
    },
  ],
  // slot 4 — a choice stated as "all but a few"
  [
    {
      q: 'A carpenter will use $11$ of her $13$ different chisels on a project; the chisels used are a set, in no order. How many choices are possible?',
      choices: ['$156$', '$13$', '$286$', '$78$'],
      answer: 3,
      solution:
        'Route one, who is left out. Saying which $11$ chisels are used is the same as saying which $2$ stay in the case, so the choices match the pairs of chisels. Number the chisels and sort each pair by its lower number: $12 + 11 + \\cdots + 1 = 78$ ✓. Route two, the formula. $\\binom{13}{11} = \\frac{13!}{11!\\,2!}$; the $11!$ cancels all but two factors on top, leaving $\\frac{13 \\cdot 12}{2} = 78$ ✓. (The choice $156$ is $13 \\cdot 12$ and FORGETS TO DIVIDE BY $2!$, treating the two left in the case as a first and a second ✗; $13$ LEAVES ONLY ONE CHISEL IN THE CASE ✗; $286$ is $\\binom{13}{3}$ and LEAVES THREE behind ✗.)',
    },
    {
      q: 'A test has $13$ questions and a student answers exactly $10$ of them; only which questions are answered matters, not the order. How many choices are possible?',
      choices: ['$78$', '$286$', '$1716$', '$220$'],
      answer: 1,
      solution:
        'Route one, who is left out. Picking the $10$ answered questions is the same as picking the $3$ skipped ones. Pick the skipped three in order: $13 \\cdot 12 \\cdot 11 = 1716$ ordered triples. Each set of three skipped questions appears in $3! = 6$ of those orders, so there are $1716 \\div 6 = 286$ sets ✓. Route two, split on one question. Either question $1$ is answered, in which case $9$ more come from the other $12$, giving $\\binom{12}{9} = 220$ choices, or it is skipped, in which case all $10$ come from the other $12$, giving $\\binom{12}{10} = 66$. The two cases cannot overlap, so the total is $220 + 66 = 286$ ✓. (The choice $78$ SKIPS ONLY TWO questions ✗; $1716$ is $13 \\cdot 12 \\cdot 11$ and FORGETS TO DIVIDE BY $3!$, ordering the skipped questions ✗; $220$ is $\\binom{12}{9}$ and COUNTS ONLY THE CHOICES THAT ANSWER QUESTION $1$, forgetting the ones that skip it ✗.)',
    },
    {
      q: 'A librarian displays all but $2$ of her $n$ different new books, and exactly $231$ different displays are possible. What is $n$?',
      choices: ['$22$', '$21$', '$23$', '$462$'],
      answer: 0,
      solution:
        'Route one, who is left out. A display is settled by naming the $2$ books held back, so the number of displays is the number of pairs, $\\frac{n(n-1)}{2} = 231$. Then $n(n-1) = 462 = 22 \\cdot 21$, so $n = 22$ ✓. Route two, build a table. Count the pairs straight from the formula for a few sizes: $20$ books give $190$ displays, $21$ books give $210$, and $22$ books give $231$ ✓. Adding a book always adds new pairs, so the counts strictly increase and $22$ is the only size that works. (The choice $21$ SHIFTS THE FACTORS UP, solving $n(n+1) = 462$ from $21 \\cdot 22$ ✗; $23$ SHIFTS THEM DOWN, solving $(n-1)(n-2) = 462$ and reading $n - 1 = 22$ ✗; $462$ REPORTS THE PRODUCT $n(n-1)$ instead of $n$ ✗.)',
    },
  ],
  // slot 5 — two different bottoms give the same value
  [
    {
      q: 'For what positive integer $n$ with $n \\ge 9$ is $\\binom{n}{2} = \\binom{n}{9}$?',
      choices: ['$7$', '$9$', '$11$', '$18$'],
      answer: 2,
      solution:
        'Route one, who is left out. Choosing $2$ of the $n$ objects to keep is the same as choosing the $n - 2$ to leave out, so $\\binom{n}{2} = \\binom{n}{n-2}$ for every $n$. Since $2 \\ne 9$, the equality in the problem can only be this pairing, which forces $9 = n - 2$ and $n = 11$ ✓. Route two, compare the two sides directly. Evaluate both from the formula as $n$ climbs: at $n = 9$ they are $36$ and $1$; at $n = 10$ they are $45$ and $10$; at $n = 11$ they are $55$ and $55$ ✓; at $n = 12$ they are $66$ and $220$. The left side crawls upward while the right side races past it, so the two sides meet exactly once, at $n = 11$. (The choice $7$ TAKES THE DIFFERENCE $9 - 2$ instead of relating the bottoms to $n$, and $\\binom{7}{9} = 0$ while $\\binom{7}{2} = 21$ ✗; $9$ SETS $n$ TO THE LARGER BOTTOM, but $\\binom{9}{2} = 36$ and $\\binom{9}{9} = 1$ ✗; $18$ DOUBLES THE LARGER BOTTOM, but $\\binom{18}{2} = 153$ and $\\binom{18}{9} = 48620$ ✗.)',
    },
    {
      q: 'A team has $n$ players, and the number of different groups of $3$ that can be chosen from it equals the number of different groups of $13$ that can be chosen from it, where $n \\ge 13$. Groups have no roles and no order. What is $n$?',
      choices: ['$16$', '$10$', '$13$', '$39$'],
      answer: 0,
      solution:
        'Route one, who is left out. Every group of $3$ players determines the $n - 3$ players outside it, and every group of $n - 3$ determines the $3$ outside it, so those two counts are always equal. The problem says the count for groups of $3$ equals the count for groups of $13$, and $3 \\ne 13$, so $13$ must be the left-out size: $13 = n - 3$ and $n = 16$ ✓. Route two, compare the two counts directly. Evaluate both from the formula: at $n = 13$ they are $286$ and $1$; at $n = 15$ they are $455$ and $105$; at $n = 16$ they are $560$ and $560$ ✓; at $n = 17$ they are $680$ and $2380$. The counts cross exactly once, at $n = 16$. (The choice $10$ TAKES THE DIFFERENCE $13 - 3$, and a team of $10$ has no group of $13$ at all ✗; $13$ SETS $n$ TO THE LARGER GROUP SIZE, where the counts are $286$ and $1$ ✗; $39$ MULTIPLIES THE TWO BOTTOMS, and $\\binom{39}{3} = 9139$ is nowhere near $\\binom{39}{13}$ ✗.)',
    },
    {
      q: 'For which positive integer $k$ with $k + 6 \\le 40$ is $\\binom{40}{k} = \\binom{40}{k+6}$?',
      choices: ['$20$', '$23$', '$34$', '$17$'],
      answer: 3,
      solution:
        'Route one, who is left out. Choosing $k$ of $40$ objects to keep is the same as choosing the $40 - k$ to leave out, so $\\binom{40}{k} = \\binom{40}{40-k}$. Both bottoms $k$ and $k + 6$ sit between $0$ and $40$, and they are different, so they must be a keep-and-leave-out pair: $k + 6 = 40 - k$, giving $2k = 34$ and $k = 17$ ✓. Route two, a small model plus exact arithmetic. Run the same shape on a pool small enough to list: on $10$ objects with a gap of $2$, writing out every subset shows that among the $k$ with $k + 2 \\le 10$, $\\binom{10}{k} = \\binom{10}{k+2}$ holds only at $k = 4$, where $4 + 6 = 10$ — the two bottoms add up to the top. Applying that pattern here, $k + (k+6) = 40$ and $k = 17$; multiplying the factors out exactly confirms it, since $\\binom{40}{17}$ and $\\binom{40}{23}$ are both $88732378800$ ✓. (The choice $20$ HALVES THE TOP NUMBER, guessing the middle, but $\\binom{40}{20} = 137846528820$ while $\\binom{40}{26} = 23206929840$ ✗; $23$ REPORTS THE OTHER BOTTOM, $k + 6$, instead of $k$ ✗; $34$ FORGETS TO HALVE, stopping at $2k$ ✗.)',
    },
  ],
  // slot 6 — flip a bottom that is three below the top
  [
    {
      q: 'A crew of $11$ is chosen from $14$ workers, with no roles on the crew. How many crews are possible?',
      choices: ['$2184$', '$14$', '$91$', '$364$'],
      answer: 3,
      solution:
        'Route one, who is left out. Naming the $11$ on the crew is the same as naming the $3$ who are off it. Pick those three in order: $14 \\cdot 13 \\cdot 12 = 2184$ ordered triples, and each set of three shows up in $3! = 6$ orders, so there are $2184 \\div 6 = 364$ crews ✓. Route two, split on one worker. Either the newest worker is on the crew, in which case $10$ more come from the other $13$, giving $\\binom{13}{10} = 286$ crews, or she is not, in which case all $11$ come from the other $13$, giving $\\binom{13}{11} = 78$. The cases do not overlap and cover everything, so there are $286 + 78 = 364$ crews ✓. (The choice $2184$ STOPS BEFORE DIVIDING BY $3!$, ordering the three left off ✗; $14$ LEAVES ONLY ONE WORKER OFF ✗; $91$ is $\\binom{14}{2}$ and LEAVES TWO OFF instead of three ✗.)',
    },
    {
      q: 'A quilt is made from $15$ of the $18$ different fabric squares in a box; only which squares are used matters. How many choices are possible?',
      choices: ['$153$', '$816$', '$4896$', '$3060$'],
      answer: 1,
      solution:
        'Route one, who is left out. Choosing the $15$ squares sewn in is the same as choosing the $3$ left in the box. Pick those three in order: $18 \\cdot 17 \\cdot 16 = 4896$ ordered triples, and each set of three appears in $3! = 6$ orders, giving $4896 \\div 6 = 816$ choices ✓. Route two, split on one square. Either the striped square is used, in which case $14$ more come from the other $17$, giving $\\binom{17}{14} = 680$ quilts, or it is not, in which case all $15$ come from the other $17$, giving $\\binom{17}{15} = 136$. Adding the two cases gives $680 + 136 = 816$ ✓. (The choice $153$ is $\\binom{18}{2}$ and LEAVES TWO SQUARES BEHIND instead of three ✗; $4896$ STOPS BEFORE DIVIDING BY $3!$ ✗; $3060$ is $\\binom{18}{4}$ and LEAVES FOUR BEHIND ✗.)',
    },
    {
      q: 'A committee of $n-3$ people is chosen from a club of $n$ people, and there are exactly $1140$ possible committees. What is $n$?',
      choices: ['$20$', '$19$', '$21$', '$6840$'],
      answer: 0,
      solution:
        'Route one, who is left out. A committee of $n - 3$ is settled by naming the $3$ who are left off, so the number of committees is the number of triples, $\\frac{n(n-1)(n-2)}{6} = 1140$. Then $n(n-1)(n-2) = 6840 = 20 \\cdot 19 \\cdot 18$, so $n = 20$ ✓. Route two, build a table. Count the triples straight from the formula: $18$ people give $816$ committees, $19$ give $969$, and $20$ give $1140$ ✓. Adding a member always adds new triples, so the counts strictly increase and $20$ is the only club size that works. (The choice $19$ SHIFTS THE FACTORS UP, reading the product $20 \\cdot 19 \\cdot 18$ as $(n+1)n(n-1)$ ✗; $21$ SHIFTS THEM DOWN, reading it as $(n-1)(n-2)(n-3)$ ✗; $6840$ REPORTS THE PRODUCT before dividing by $3!$, and it is not a club size at all ✗.)',
    },
  ],
  // slot 7 — combine two expressions that the identity makes equal
  [
    {
      q: 'What is $\\binom{21}{19} + \\binom{21}{2}$?',
      choices: ['$210$', '$420$', '$441$', '$231$'],
      answer: 1,
      solution:
        'Route one, who is left out. $\\binom{21}{19}$ counts the ways to keep $19$ of $21$ objects, which is the same as counting the ways to leave $2$ out — exactly what $\\binom{21}{2}$ counts. So the two terms are equal and the sum is twice one of them. Sorting each pair by its lower number gives $20 + 19 + \\cdots + 1 = 210$ pairs, so the sum is $2 \\cdot 210 = 420$ ✓. Route two, the formula on each term separately. $\\binom{21}{19} = \\frac{21!}{19!\\,2!} = \\frac{21 \\cdot 20}{2} = 210$ and $\\binom{21}{2} = \\frac{21 \\cdot 20}{2} = 210$, so the sum is $210 + 210 = 420$ ✓. (The choice $210$ NOTICES THE TWO TERMS ARE EQUAL AND REPORTS ONE OF THEM ✗; $441$ is $21 \\cdot 21$ and MULTIPLIES WHERE THE PROBLEM ADDS ✗; $231$ is $\\binom{22}{2}$ and COUNTS PAIRS FROM $22$ OBJECTS INSTEAD OF $21$, reporting one term rather than the sum ✗.)',
    },
    {
      q: 'What is $\\dfrac{\\binom{30}{27}}{\\binom{30}{3}}$?',
      choices: ['$4060$', '$9$', '$0$', '$1$'],
      answer: 3,
      solution:
        'Route one, who is left out. The numerator counts the ways to keep $27$ of $30$ objects, and each such choice is settled by naming the $3$ left out — which is what the denominator counts. The two numbers count the very same collection, so the quotient of these equal positive numbers is $1$ ✓. Route two, evaluate both. $\\binom{30}{27} = \\frac{30!}{27!\\,3!} = \\frac{30 \\cdot 29 \\cdot 28}{6} = 4060$ and $\\binom{30}{3} = \\frac{30 \\cdot 29 \\cdot 28}{6} = 4060$, so the quotient is $\\frac{4060}{4060} = 1$ ✓. (The choice $4060$ EVALUATES ONLY THE NUMERATOR, as though the denominator were $1$ ✗; $9$ DIVIDES THE BOTTOM NUMBERS, $27 \\div 3$, which is not how the symbols work ✗; $0$ CONFUSES THE QUOTIENT WITH A DIFFERENCE, since it is the difference that vanishes ✗.)',
    },
    {
      q: '$\\binom{26}{k} = \\binom{26}{22}$ and $k \\ne 22$. What is $k$?',
      choices: ['$22$', '$48$', '$4$', '$13$'],
      answer: 2,
      solution:
        'Route one, who is left out. Keeping $22$ of the $26$ objects leaves $4$ behind, and matching each choice of $22$ kept with the $4$ left out is a one-to-one pairing. So $\\binom{26}{22} = \\binom{26}{4}$, and since $k$ may not be $22$, we get $k = 4$ ✓. Route two, compute the values. Working from the formula, $\\binom{26}{22} = 14950$. Scanning the small bottoms gives $\\binom{26}{3} = 2600$, $\\binom{26}{4} = 14950$ ✓, and $\\binom{26}{5} = 65780$, so $k = 4$ is the only other bottom that matches. (The choice $22$ IGNORES THE CONDITION $k \\ne 22$ ✗; $48$ ADDS the top and the bottom instead of subtracting, and $\\binom{26}{48} = 0$ ✗; $13$ HALVES THE TOP NUMBER, but $\\binom{26}{13} = 10400600$ ✗.)',
    },
  ],
  // slot 8 — flip first, then single out a member of the chosen group
  [
    {
      q: 'A magazine will print $11$ of the $14$ different poems it has accepted, and one of the printed poems is chosen to open the issue. Two outcomes are the same only if the same eleven poems are printed and the same poem opens the issue. In how many ways can this be done?',
      choices: ['$5096$', '$364$', '$4004$', '$1092$'],
      answer: 2,
      solution:
        'Route one, who is left out, then the opener. Naming the $11$ poems printed is the same as naming the $3$ held back, and there are $\\binom{14}{3} = \\frac{14 \\cdot 13 \\cdot 12}{6} = 364$ ways to do that. For each of those, the opening poem is any of the $11$ printed, so the total is $364 \\cdot 11 = 4004$ ✓. Route two, the opener first. Choose the opening poem from all $14$, which is $14$ ways. That poem is printed, so the other $10$ printed poems come from the remaining $13$: $\\binom{13}{10} = 286$ ways. Multiplying gives $14 \\cdot 286 = 4004$ ✓. (The choice $5096$ is $364 \\cdot 14$ and PICKS THE OPENER FROM ALL FOURTEEN, including the poems held back ✗; $364$ FORGETS THE OPENER and counts only the sets of eleven ✗; $1092$ is $364 \\cdot 3$ and PICKS THE OPENER FROM THE THREE HELD BACK ✗.)',
    },
    {
      q: 'A museum displays $9$ of its $11$ different masks and gives one of the displayed masks a spotlight. Two outcomes are the same only if the same nine are displayed and the same mask is lit. In how many ways can this be done?',
      choices: ['$495$', '$605$', '$55$', '$110$'],
      answer: 0,
      solution:
        'Route one, who is left out, then the spotlight. Choosing the $9$ masks on display is the same as choosing the $2$ kept in storage, and there are $\\binom{11}{2} = \\frac{11 \\cdot 10}{2} = 55$ ways to do that. The spotlight then goes to any of the $9$ on display, so the total is $55 \\cdot 9 = 495$ ✓. Route two, the spotlight first. Choose the lit mask from all $11$, which is $11$ ways. That mask is on display, so the other $8$ displayed masks come from the remaining $10$: $\\binom{10}{8} = 45$ ways. Multiplying gives $11 \\cdot 45 = 495$ ✓. (The choice $605$ is $55 \\cdot 11$ and LIGHTS A MASK CHOSEN FROM ALL ELEVEN, including the two in storage ✗; $55$ FORGETS THE SPOTLIGHT ✗; $110$ is $55 \\cdot 2$ and LIGHTS ONE OF THE TWO STORED MASKS ✗.)',
    },
    {
      q: 'From $11$ people, $9$ are chosen for a trip and then $2$ of the $9$ are named co-leaders, with neither co-leader ranking above the other. Two outcomes are the same only if the same nine travel and the same two people lead. In how many ways can this be done?',
      choices: ['$3025$', '$55$', '$3960$', '$1980$'],
      answer: 3,
      solution:
        'Route one, who is left out, then the co-leaders. Naming the $9$ travelers is the same as naming the $2$ who stay home, and there are $\\binom{11}{2} = 55$ ways. The co-leader pair is then any $2$ of the $9$ travelers, which is $\\binom{9}{2} = 36$ ways. Multiplying gives $55 \\cdot 36 = 1980$ ✓. Route two, order the leaders, then divide. Build the outcome as a first leader, a second leader, and the rest of the party: $11$ choices for the first named leader, $10$ for the second, and then $7$ more travelers from the $9$ people still unassigned, which is $\\binom{9}{7} = 36$ ways. That is $11 \\cdot 10 \\cdot 36 = 3960$ builds. Since the co-leaders are equal, each real outcome was built twice, once for each order of naming them, so the answer is $3960 \\div 2 = 1980$ ✓. (The choice $3025$ is $55 \\cdot 55$ and PICKS THE CO-LEADERS FROM ALL ELEVEN, including the two who stayed home ✗; $55$ FORGETS THE CO-LEADERS ✗; $3960$ STOPS BEFORE HALVING and leaves the two co-leaders ordered ✗.)',
    },
  ],
  // slot 9 — a rule on the group is easier to read as a rule on the left-out set
  [
    {
      q: 'A choir of $16$ will send $13$ singers to a festival, and at least one of Cleo and Dev must stay home. How many different groups of $13$ can be sent?',
      choices: ['$196$', '$560$', '$364$', '$210$'],
      answer: 0,
      solution:
        'Route one, who is left out, with a complement. Sending $13$ of $16$ is the same as keeping $3$ home, so count the stay-home triples instead. The rule says such a triple must include Cleo or Dev or both. Every triple: $\\binom{16}{3} = 560$. Triples with neither of them, drawn from the other $14$ singers: $\\binom{14}{3} = 364$. Subtracting gives $560 - 364 = 196$ ✓. Route two, count the stay-home triples directly. Triples that include Cleo: two more from the other $15$, $\\binom{15}{2} = 105$. Triples that include Dev: likewise $105$. Triples holding both are counted in each list, and there are $14$ of them, one for each third singer. So the count is $105 + 105 - 14 = 196$ ✓. (The choice $560$ IGNORES THE RULE ✗; $364$ IS THE COMPLEMENT, the groups in which both Cleo and Dev travel ✗; $210$ ADDS THE TWO LISTS WITHOUT REMOVING THE OVERLAP, counting the both-of-them triples twice ✗.)',
    },
    {
      q: 'A florist will use $12$ of her $15$ different flowers in an arrangement, and at least one of the two roses must be left out. How many different arrangements are possible?',
      choices: ['$455$', '$286$', '$169$', '$182$'],
      answer: 2,
      solution:
        'Route one, who is left out, with a complement. Using $12$ of $15$ flowers is the same as leaving $3$ out, so count the left-out triples. The rule says such a triple must contain at least one rose. Every triple: $\\binom{15}{3} = 455$. Triples with no rose, drawn from the other $13$ flowers: $\\binom{13}{3} = 286$. Subtracting gives $455 - 286 = 169$ ✓. Route two, casework on the roses. If exactly one rose is left out, choose which rose, $2$ ways, and two more left-out flowers from the $13$ that are not roses, $\\binom{13}{2} = 78$ ways: $2 \\cdot 78 = 156$. If both roses are left out, the third left-out flower is any of the other $13$: $13$ ways. The cases are separate, so the total is $156 + 13 = 169$ ✓. (The choice $455$ IGNORES THE RULE ✗; $286$ IS THE COMPLEMENT, the arrangements using both roses ✗; $182$ ADDS THE "CONTAINS ROSE ONE" AND "CONTAINS ROSE TWO" LISTS WITHOUT REMOVING THE OVERLAP ✗.)',
    },
    {
      q: 'A photographer poses $9$ of the $12$ people at a party, so $3$ are left out, and exactly one of Rosa and Sam must be left out. How many different groups of $9$ can be posed?',
      choices: ['$220$', '$90$', '$100$', '$45$'],
      answer: 1,
      solution:
        'Route one, who is left out, built directly. Posing $9$ of $12$ is the same as leaving out $3$, so build the left-out triple. Exactly one of Rosa and Sam belongs to it: choose which one, $2$ ways. The other two left-out people come from the $10$ who are neither Rosa nor Sam, $\\binom{10}{2} = 45$ ways. Multiplying gives $2 \\cdot 45 = 90$ ✓. Route two, strip away the other cases. Every left-out triple: $\\binom{12}{3} = 220$. Triples with neither Rosa nor Sam: $\\binom{10}{3} = 120$. Triples with both of them, where the third person is any of the other $10$: $10$. What remains holds exactly one of the two, so the count is $220 - 120 - 10 = 90$ ✓. (The choice $220$ IGNORES THE RULE ✗; $100$ COUNTS "AT LEAST ONE" INSTEAD OF "EXACTLY ONE", leaving the both-of-them triples in ✗; $45$ COUNTS ONLY THE TRIPLES THAT LEAVE OUT ROSA and forgets the ones that leave out Sam ✗.)',
    },
  ],
  // slot 10 — the identity mirrors a list of values
  [
    {
      q: 'For how many integers $k$ with $0 \\le k \\le 10$ is $\\binom{10}{k}$ greater than $100$?',
      choices: ['$5$', '$3$', '$4$', '$6$'],
      answer: 0,
      solution:
        'Route one, work the small half and mirror it. Compute upward: $\\binom{10}{0} = 1$, $\\binom{10}{1} = 10$, $\\binom{10}{2} = 45$, $\\binom{10}{3} = 120$, $\\binom{10}{4} = 210$, $\\binom{10}{5} = 252$. On this half only $k = 3, 4, 5$ clear $100$. Because keeping $k$ objects is the same as leaving $10 - k$ out, $\\binom{10}{k} = \\binom{10}{10-k}$, so $k = 7$ mirrors $k = 3$ and $k = 6$ mirrors $k = 4$, while $k = 5$ is its own mirror and is not counted twice. That gives $k = 3, 4, 5, 6, 7$, five values ✓. Route two, list every value. The eleven values are $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$; reading along, the entries above $100$ are $120, 210, 252, 210, 120$, which is five of them ✓. (The choice $3$ COUNTS ONLY THE SMALL HALF and forgets the mirrored bottoms ✗; $4$ PAIRS $3$ WITH $7$ AND $4$ WITH $6$ BUT DROPS THE SELF-MIRRORING $k = 5$ ✗; $6$ ALSO COUNTS $k = 2$, where $\\binom{10}{2} = 45$ does not clear $100$ ✗.)',
    },
    {
      q: 'For how many integers $k$ with $0 \\le k \\le 11$ is $\\binom{11}{k}$ less than $100$?',
      choices: ['$3$', '$2$', '$6$', '$8$'],
      answer: 2,
      solution:
        'Route one, work the small half and mirror it. Compute upward: $\\binom{11}{0} = 1$, $\\binom{11}{1} = 11$, $\\binom{11}{2} = 55$, $\\binom{11}{3} = 165$, $\\binom{11}{4} = 330$, $\\binom{11}{5} = 462$. On this half only $k = 0, 1, 2$ stay below $100$. Since $\\binom{11}{k} = \\binom{11}{11-k}$, each of those has a mirror at $k = 11, 10, 9$, and because $11$ is odd no value mirrors itself. That is $6$ values ✓. Route two, list every value. The twelve values are $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$; the ones below $100$ are $1, 11, 55, 55, 11, 1$, which is six of them ✓. (The choice $3$ COUNTS ONLY THE SMALL HALF and forgets the mirrored bottoms ✗; $2$ COUNTS ONLY THE TWO ENDS, where the value is $1$, and misses that $11$ and $55$ are also below $100$ ✗; $8$ ALSO COUNTS $k = 3$ AND $k = 8$, where the value is $165$ ✗.)',
    },
    {
      q: 'Over the integers $k$ with $0 \\le k \\le 15$, what is the largest value of $\\binom{15}{k}$?',
      choices: ['$3432$', '$6435$', '$12870$', '$32768$'],
      answer: 1,
      solution:
        'Route one, use the mirror to find the peak. Since $\\binom{15}{k} = \\binom{15}{15-k}$, the list of values reads the same forwards and backwards, folding about the gap between $k = 7$ and $k = 8$. The values rise as $k$ climbs toward that gap, so the largest one sits at the fold: $\\binom{15}{7} = \\binom{15}{8} = 6435$ ✓. Route two, climb the list and watch it turn. Compute in order: $1, 15, 105, 455, 1365, 3003, 5005, 6435$ at $k = 7$, then $6435$ at $k = 8$, then $5005, 3003, 1365, 455, 105, 15, 1$. The values increase up to $6435$ and decrease after, so $6435$ is the maximum ✓. (The choice $3432$ is $\\binom{14}{7}$ and USES A TOP NUMBER OF $14$ ✗; $12870$ is $\\binom{16}{8}$ and USES A TOP NUMBER OF $16$ ✗; $32768$ is $2^{15}$, the TOTAL OF ALL THE VALUES rather than the largest single one ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 4,
  sections: { '4.4': s44 },
}
