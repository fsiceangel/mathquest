// Counting & Probability chapter 5 — variations for section 5.4
// (Distinguishability). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem answers both questions before it asks anything: are the ITEMS
//    identical or all different, and are the CONTAINERS labeled or
//    interchangeable? Every stem also says whether a container may be empty.
//  - Route one is almost always a direct construction or an organized list
//    small enough to check by hand; route two is a complement, a divider
//    count, a gluing bijection, or a pairing argument, and never reuses route
//    one’s bookkeeping.
//  - Where the containers are interchangeable the count is built by listing
//    groupings, not by dividing a labeled count by $k!$ — division is shown
//    only when the solution first checks that nothing is left fixed by a swap.
//  - Each distractor is one named slip: labeled containers read as
//    interchangeable or the reverse, a dropped “no empty container” rule, an
//    exponent with its base and power swapped, an off-by-one in a divider
//    count, or the complement reported in place of the count.

const s54 = [
  // slot 1 — different items, labeled containers, empties allowed
  [
    {
      q: 'Six different photographs are filed in $3$ albums labeled $A$, $B$, and $C$. The photographs are all different, the albums are told apart by their labels, and an album may hold any number of photographs, including none. How many filings are there?',
      choices: ['$216$', '$18$', '$28$', '$729$'],
      answer: 3,
      solution:
        'Route one, one decision per photograph. The photographs are different, so each one makes its own choice of album, and the albums are labeled, so those three choices are three different outcomes. Photograph $1$ has $3$ albums to go in, and so does photograph $2$, and so on through photograph $6$. Multiplying the six independent choices gives $3 \\times 3 \\times 3 \\times 3 \\times 3 \\times 3 = 3^6 = 729$ ✓. Route two, count the words. A filing is completely recorded by writing, in photograph order, the label of the album each photograph goes into — a $6$-letter word over the alphabet $\\{A, B, C\\}$. Different filings give different words and every word describes a filing, so the filings are in one-to-one correspondence with those words. There are $3$ letters available in each of $6$ places, so $3^6 = 729$ words ✓. (The choice $216$ SWAPS THE BASE AND THE EXPONENT, computing $6^3$ as though each album chose a photograph ✗; $18$ ADDS THE CHOICES INSTEAD OF MULTIPLYING, reading $3$ albums for each of $6$ photographs as $3 \\times 6$ ✗; $28$ TREATS THE PHOTOGRAPHS AS IDENTICAL, counting only the album totals, which is $\\binom{8}{2} = 28$ ✗.)',
    },
    {
      q: 'Each of $4$ different quiz questions is handed to one of $5$ study groups labeled $1$ through $5$. The questions are all different, the groups are told apart by their numbers, and a group may receive any number of questions, including none. In how many ways can the questions be handed out?',
      choices: ['$1024$', '$625$', '$120$', '$70$'],
      answer: 1,
      solution:
        'Route one, one decision per question. Each of the $4$ different questions is handed to exactly one of the $5$ labeled groups, and those decisions do not interfere with one another because a group may take any number. That is $5$ choices four times over: $5 \\times 5 \\times 5 \\times 5 = 5^4 = 625$ ✓. Route two, count by how many groups are used. If all $4$ questions go to one group there are $5$ ways. If exactly $2$ groups are used, choose them in $\\binom{5}{2} = 10$ ways and split the questions between those two labeled groups with neither empty in $2^4 - 2 = 14$ ways: $140$. Exactly $3$ groups: $\\binom{5}{3} = 10$ ways to choose them, and $3^4 - 3 \\times 2^4 + 3 = 36$ ways to fill all three: $360$. Exactly $4$ groups: $\\binom{5}{4} = 5$ ways to choose them, and $4! = 24$ ways to give the four questions one apiece: $120$. Total $5 + 140 + 360 + 120 = 625$ ✓. (The choice $1024$ SWAPS THE BASE AND THE EXPONENT, computing $4^5$ ✗; $120$ FORBIDS TWO QUESTIONS FROM SHARING A GROUP, counting $5 \\times 4 \\times 3 \\times 2$ ✗; $70$ TREATS THE QUESTIONS AS IDENTICAL, counting only the group totals, which is $\\binom{8}{4} = 70$ ✗.)',
    },
    {
      q: '*Reversed.* Each of $n$ different flags is flown on one of $3$ poles labeled left, center, and right. The flags are all different, the poles are told apart, and a pole may be left bare. There are exactly $243$ arrangements. What is $n$?',
      choices: ['$5$', '$4$', '$6$', '$81$'],
      answer: 0,
      solution:
        'Route one, build the ladder. Each flag picks one of the $3$ labeled poles, so $n$ flags give $3^n$ arrangements. Step $n$ up and read the ladder: $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, $3^5 = 243$. The first time the count reaches $243$ is at $n = 5$, and the ladder only climbs from there, so $n = 5$ ✓. Route two, split by the left pole. Sort the arrangements by which flags fly on the left pole: if $k$ of the $n$ flags are there, chosen in $\\binom{n}{k}$ ways, each of the other $n - k$ flags picks center or right, in $2^{n-k}$ ways. For $n = 5$ that sum is $32 + 5 \\times 16 + 10 \\times 8 + 10 \\times 4 + 5 \\times 2 + 1 = 32 + 80 + 80 + 40 + 10 + 1 = 243$, which is the total the problem gives. The same sum for $n = 4$ is $16 + 32 + 24 + 8 + 1 = 81$ and for $n = 6$ it is $729$, and hanging one more flag can only raise the count, so $n = 5$ is the only value that fits ✓. (The choice $4$ STOPS ONE RUNG TOO EARLY, at the $81$ arrangements that $4$ flags give ✗; $6$ GOES ONE RUNG TOO FAR, to the $729$ arrangements that $6$ flags give ✗; $81$ REPORTS $243 \\div 3$, a count of arrangements rather than the number of flags asked for ✗.)',
    },
  ],
  // slot 2 — identical items, two labeled containers, none empty
  [
    {
      q: 'Twelve identical pencils are divided between two cups labeled $A$ and $B$. The pencils are all alike, the cups are told apart by their labels, and each cup must hold at least one pencil. How many divisions are there?',
      choices: ['$13$', '$11$', '$12$', '$6$'],
      answer: 1,
      solution:
        'Route one, list in order. Because the pencils are identical and the cups are labeled, a division is recorded by the single number in cup $A$; cup $B$ then holds whatever is left. Cup $A$ must hold at least one and must leave at least one, so it holds $1, 2, 3, \\ldots, 11$. Stepping down from the top: $(11,1), (10,2), (9,3), (8,4), (7,5), (6,6), (5,7), (4,8), (3,9), (2,10), (1,11)$ — that is $11$ divisions ✓. Route two, cut the row. Lay the $12$ identical pencils in a row and make one cut; everything left of the cut goes to $A$, everything right of it to $B$. A cut in one of the gaps between consecutive pencils leaves both cups non-empty, and every legal division comes from exactly one such cut. A row of $12$ pencils has $11$ gaps, so $11$ divisions ✓. (The choice $13$ IGNORES THE “AT LEAST ONE” RULE and keeps the two divisions that leave a cup empty ✗; $12$ REMOVES ONLY ONE OF THOSE TWO EMPTY DIVISIONS, an off-by-one at one end ✗; $6$ TREATS THE TWO CUPS AS INTERCHANGEABLE, keeping only $\\{1,11\\}, \\{2,10\\}, \\{3,9\\}, \\{4,8\\}, \\{5,7\\}, \\{6,6\\}$, though $A$ and $B$ are labeled ✗.)',
    },
    {
      q: 'How many ordered pairs $(a, b)$ of **positive** integers satisfy $a + b = 15$? (The pairs $(4, 11)$ and $(11, 4)$ are different pairs.)',
      choices: ['$16$', '$15$', '$7$', '$14$'],
      answer: 3,
      solution:
        'Route one, list in order. Once $a$ is chosen, $b = 15 - a$ is forced, so the pairs are in one-to-one correspondence with the legal values of $a$. Positivity of $a$ makes $a \\ge 1$; positivity of $b$ makes $a \\le 14$. Stepping $a$ down from $14$: $(14,1), (13,2), (12,3), \\ldots, (1,14)$, one pair for each of the $14$ values ✓. Route two, place a divider. Write $15$ identical units in a row; the two parts of the pair are the block before a divider and the block after it. A divider dropped in one of the gaps between consecutive units leaves a non-empty block on each side, which is exactly what positivity demands. A row of $15$ units has $14$ gaps, so $14$ pairs ✓. (The choice $16$ ALLOWS A ZERO AT EITHER END, counting the non-negative solutions $(0,15)$ and $(15,0)$ as well ✗; $15$ LETS $a$ RUN UP TO $15$, where $b$ would be $0$ and not positive ✗; $7$ TREATS THE PAIRS AS UNORDERED, counting $(4,11)$ and $(11,4)$ as one ✗.)',
    },
    {
      q: '*Reversed.* Identical pebbles are split between two buckets labeled $A$ and $B$. The pebbles are all alike, the buckets are told apart, and each bucket must receive at least one pebble. There are exactly $19$ splits. How many pebbles are there?',
      choices: ['$19$', '$18$', '$20$', '$38$'],
      answer: 2,
      solution:
        'Route one, build the ladder by listing. With $n$ identical pebbles and labeled buckets, a split is recorded by the count in bucket $A$, which runs from $1$ up to $n - 1$; that is $n - 1$ splits. Check the small end: $2$ pebbles give the single split $(1,1)$, and $n - 1 = 1$; $3$ pebbles give $(1,2)$ and $(2,1)$, and $n - 1 = 2$. Every extra pebble adds exactly one more legal value of $A$, so setting $n - 1 = 19$ gives $n = 20$ ✓. Route two, cut the row. A split with both buckets non-empty is one cut in a gap between consecutive pebbles, and a row of $n$ pebbles has $n - 1$ gaps. Nineteen splits means $19$ gaps, so the row holds $20$ pebbles ✓. (The choice $19$ REPORTS THE NUMBER OF SPLITS AS THE NUMBER OF PEBBLES, though the count sits one below the pebble total ✗; $18$ USES THE EMPTIES-ALLOWED COUNT $n + 1$ and solves $n + 1 = 19$ ✗; $38$ DOUBLES THE COUNT, as if each split had to be listed once for each bucket ✗.)',
    },
  ],
  // slot 3 — different items, labeled containers, and the surjective version
  [
    {
      q: 'Each of $5$ different chores is assigned to one of $4$ housemates, Ana, Ben, Cleo, and Dov. The chores are all different, the housemates are all different people, and a housemate may end up with any number of chores, including none. How many assignments are there?',
      choices: ['$1024$', '$625$', '$20$', '$56$'],
      answer: 0,
      solution:
        'Route one, one decision per chore. The chores are different, so each is assigned on its own, and the housemates are different people, so naming a different housemate gives a different assignment. Each of the $5$ chores has $4$ housemates available, and nothing links the decisions because a housemate may take any number: $4 \\times 4 \\times 4 \\times 4 \\times 4 = 4^5 = 1024$ ✓. Route two, sort by how many housemates end up with work. If one housemate does everything, naming that person settles it: $4$ ways. If exactly two share, choose the pair in $\\binom{4}{2} = 6$ ways and split the $5$ chores between two named people with neither idle in $2^5 - 2 = 30$ ways: $6 \\times 30 = 180$. If exactly three share, choose them in $\\binom{4}{3} = 4$ ways; their chore counts are $3, 1, 1$ or $2, 2, 1$, worth $3 \\times \\binom{5}{3} \\times 2 = 60$ and $3 \\times 5 \\times \\binom{4}{2} = 90$, so $4 \\times 150 = 600$. If all four share, the counts are $2, 1, 1, 1$: pick the pair in $\\binom{5}{2} = 10$ ways, then hand the four groups to the four housemates in $4! = 24$ ways, giving $240$. Total $4 + 180 + 600 + 240 = 1024$ ✓. (The choice $625$ SWAPS THE BASE AND THE EXPONENT, computing $5^4$ as though each housemate chose a chore ✗; $20$ ADDS INSTEAD OF MULTIPLYING, reading $4$ housemates for each of $5$ chores as $4 \\times 5$ ✗; $56$ TREATS THE CHORES AS IDENTICAL, counting only how many chores each housemate ends up with, which is $\\binom{8}{3} = 56$ ✗.)',
    },
    {
      q: 'The $6$ faces of a wooden block are stamped with the numbers $1$ through $6$, so the faces are told apart by their stamps. Each face is painted either teal or cream, the two colors are told apart, and either color may be left unused. How many paint jobs are there?',
      choices: ['$12$', '$36$', '$64$', '$7$'],
      answer: 2,
      solution:
        'Route one, one decision per face. The faces are distinguishable because of their stamps, so each face is painted on its own, and there are $2$ colors available for each. Six independent two-way decisions give $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^6 = 64$ ✓. Route two, choose the teal set. A paint job is decided the moment you say which faces are teal, since the rest are cream. That is a choice of a subset of the six stamped faces, and the number of subsets of a $6$-element set is $\\binom{6}{0} + \\binom{6}{1} + \\binom{6}{2} + \\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 1 + 6 + 15 + 20 + 15 + 6 + 1 = 64$ ✓. (The choice $12$ ADDS INSTEAD OF MULTIPLYING, reading $2$ colors for each of $6$ faces as $6 \\times 2$ ✗; $36$ SWAPS THE BASE AND THE EXPONENT, computing $6^2$ ✗; $7$ TREATS THE FACES AS INTERCHANGEABLE, counting only how many faces are teal, which runs from $0$ to $6$ ✗.)',
    },
    {
      q: '*Derived.* Four different badges are given to $3$ scouts, Gil, Hana, and Ivo. The badges are all different, the scouts are all different people, and every scout must receive at least one badge. In how many ways can the badges be given out?',
      choices: ['$81$', '$36$', '$33$', '$6$'],
      answer: 1,
      solution:
        'Route one, remove the bad assignments. With no rule, each of the $4$ badges picks a scout: $3^4 = 81$. Assignments that leave a chosen scout empty-handed use only the other two scouts: $2^4 = 16$ each, and there are $3$ scouts to choose, giving $48$. But an assignment that piles all four badges on one scout leaves two scouts empty and was subtracted twice, so add those $3$ back: $81 - 48 + 3 = 36$ ✓. Route two, sort by shape. Four badges among three scouts with nobody empty forces the sizes $2, 1, 1$. Choose the two badges that travel together in $\\binom{4}{2} = 6$ ways; the remaining two badges are singletons. Now hand the three groups to the three named scouts: $3! = 6$ ways, since the scouts are distinguishable. That is $6 \\times 6 = 36$ ✓. (The choice $81$ DROPS THE “EVERY SCOUT” RULE and counts all $3^4$ assignments ✗; $33$ SUBTRACTS THE EMPTY-SCOUT CASES WITHOUT ADDING BACK the three all-on-one assignments removed twice, giving $81 - 48$ ✗; $6$ TREATS THE SCOUTS AS INTERCHANGEABLE, counting only the $6$ ways to split the badges into unlabeled groups of sizes $2,1,1$ ✗.)',
    },
  ],
  // slot 4 — identical items, labeled containers, dividers
  [
    {
      q: 'Seven identical bricks are placed in $4$ crates labeled $W$, $X$, $Y$, and $Z$. The bricks are all alike, the crates are told apart by their labels, and a crate may be left empty. How many placements are there?',
      choices: ['$84$', '$20$', '$120$', '$11$'],
      answer: 2,
      solution:
        'Route one, dividers in a row. Since the bricks are identical and the crates are labeled, a placement is exactly a list $(w, x, y, z)$ of non-negative counts adding to $7$. Write the $7$ bricks as $7$ stars in a row and insert $3$ dividers among them; the stars before the first divider go to $W$, those between the first and second to $X$, and so on, and a divider at either end or two dividers side by side record an empty crate. The arrangement is decided by which $3$ of the $7 + 3 = 10$ symbol positions hold dividers: $\\binom{10}{3} = 120$ ✓. Route two, peel off the first crate. Sort by $w$, the number in crate $W$. If $w = 7$ the rest are empty: $1$ way. If $w = 6$, one brick is shared among three labeled crates: $3$ ways. In general, once $w$ is fixed, the remaining $7 - w$ bricks go into $3$ labeled crates in $\\binom{7 - w + 2}{2}$ ways. Summing from $w = 7$ down to $w = 0$: $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 = 120$ ✓. (The choice $84$ IS $\\binom{9}{3}$, one symbol short, as if the row held $7$ stars and only $2$ dividers ✗; $20$ FORBIDS AN EMPTY CRATE, giving one brick to each crate first and counting $\\binom{6}{3} = 20$ ✗; $11$ TREATS THE FOUR CRATES AS INTERCHANGEABLE, counting only the multiset of crate totals ✗.)',
    },
    {
      q: 'A florist builds a bouquet of exactly $6$ flowers using $4$ kinds of flower: aster, daisy, lily, and rose. Flowers of the same kind are identical, the four kinds are told apart, and any number of each kind — including none — may be used. How many different bouquets are there?',
      choices: ['$84$', '$126$', '$10$', '$4096$'],
      answer: 0,
      solution:
        'Route one, dividers in a row. A bouquet is recorded by the four counts $(a, d, l, r)$ of non-negative integers with $a + d + l + r = 6$, because flowers of a kind cannot be told apart. Write $6$ stars for the flowers and place $3$ dividers to mark where one kind ends and the next begins. The bouquet is decided by which $3$ of the $6 + 3 = 9$ positions hold dividers: $\\binom{9}{3} = 84$ ✓. Route two, sort by the aster count. If $a = 6$ there is $1$ bouquet. Otherwise $6 - a$ flowers are split among three labeled kinds, which is $\\binom{6 - a + 2}{2}$ bouquets. Running $a$ from $6$ down to $0$ gives $1 + 3 + 6 + 10 + 15 + 21 + 28 = 84$ ✓. (The choice $126$ IS $\\binom{9}{4}$, choosing four positions from the nine symbols when only $3$ dividers are placed ✗; $10$ FORCES EVERY KIND TO APPEAR, using one of each first and counting $\\binom{5}{3} = 10$ ✗; $4096$ TREATS THE SIX FLOWERS AS DISTINGUISHABLE, computing $4^6$ ✗.)',
    },
    {
      q: '*Derived.* How many ordered triples $(a, b, c)$ of **positive** integers satisfy $a + b + c = 12$? (The triples $(2, 4, 6)$ and $(6, 4, 2)$ are different triples.)',
      choices: ['$91$', '$66$', '$12$', '$55$'],
      answer: 3,
      solution:
        'Route one, dividers in the gaps. Write $12$ identical units in a row and drop in $2$ dividers, each in a gap between consecutive units and no two in the same gap; the three blocks are $a$, $b$, $c$ in order, and each block is non-empty exactly because the dividers avoid the ends and each other. A row of $12$ units has $11$ gaps and $2$ dividers to place, so $\\binom{11}{2} = 55$ ✓. Route two, sort by $a$ and add the rows. Fix $a$. Then $b + c = 12 - a$ with both positive, which has $12 - a - 1 = 11 - a$ solutions. Running $a$ from $1$ to $10$: $10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55$ ✓. (The choice $91$ ALLOWS ZEROS, counting the non-negative solutions $\\binom{14}{2} = 91$ ✗; $66$ IS $\\binom{12}{2}$, treating the row of $12$ units as though it had $12$ gaps rather than $11$ ✗; $12$ TREATS THE TRIPLES AS UNORDERED, counting only the $12$ ways to write $12$ as a sum of three positive parts without regard to order ✗.)',
    },
  ],
  // slot 5 — different items, labeled containers, none empty
  [
    {
      q: 'Six different tools are put into two drawers labeled top and bottom. The tools are all different, the drawers are told apart, and neither drawer may be left empty. How many arrangements are there?',
      choices: ['$64$', '$63$', '$31$', '$62$'],
      answer: 3,
      solution:
        'Route one, count then remove. Ignore the rule for a moment: each of the $6$ different tools picks one of the $2$ labeled drawers, giving $2^6 = 64$ arrangements. Exactly two of those break the rule — all six tools in the top drawer, and all six in the bottom. Removing both leaves $64 - 2 = 62$ ✓. Route two, sort by the size of the top drawer. The top drawer may hold $1, 2, 3, 4$, or $5$ tools, and choosing which tools it holds fixes the bottom drawer completely. Summing over the legal sizes: $\\binom{6}{1} + \\binom{6}{2} + \\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} = 6 + 15 + 20 + 15 + 6 = 62$ ✓. (The choice $64$ DROPS THE “NEITHER EMPTY” RULE and keeps both all-in-one arrangements ✗; $63$ REMOVES ONLY ONE OF THE TWO empty-drawer arrangements ✗; $31$ TREATS THE TWO DRAWERS AS INTERCHANGEABLE, halving $62$ though the drawers carry labels ✗.)',
    },
    {
      q: 'Five different paintings are hung in $3$ galleries labeled left, center, and right. The paintings are all different, the galleries are told apart by their labels, and every gallery must display at least one painting. (Only which paintings hang in which gallery matters, not their order inside a gallery.) How many arrangements are there?',
      choices: ['$243$', '$150$', '$147$', '$25$'],
      answer: 1,
      solution:
        'Route one, count then correct. With no rule, each of the $5$ paintings picks a gallery: $3^5 = 243$. Arrangements that leave a named gallery empty use only the other two galleries: $2^5 = 32$ each, and there are $3$ galleries to name, which removes $96$. Arrangements that crowd all five paintings into one gallery leave two galleries empty and were removed twice, so add those $3$ back: $243 - 96 + 3 = 150$ ✓. Route two, sort by shape and then label. With no gallery empty, the gallery sizes are either $3, 1, 1$ or $2, 2, 1$. For sizes $3, 1, 1$: pick the gallery that shows three paintings ($3$ labeled choices), pick which three paintings they are ($\\binom{5}{3} = 10$), then hand the two leftover paintings to the two remaining labeled galleries ($2$ ways) — $3 \\times 10 \\times 2 = 60$. For sizes $2, 2, 1$: pick the gallery with the lone painting ($3$), pick that painting ($5$), then choose which two of the remaining four hang in whichever of the other two galleries stands further left ($\\binom{4}{2} = 6$) — $3 \\times 5 \\times 6 = 90$. Total $60 + 90 = 150$ ✓. (The choice $243$ DROPS THE “EVERY GALLERY” RULE ✗; $147$ SUBTRACTS THE EMPTY-GALLERY CASES WITHOUT ADDING BACK the three all-in-one arrangements removed twice, giving $243 - 96$ ✗; $25$ TREATS THE THREE GALLERIES AS INTERCHANGEABLE, counting only the $25$ ways to split the paintings into three unlabeled non-empty groups ✗.)',
    },
    {
      q: '*Derived.* Eight different ornaments, among them a star and a bell, are hung on two trees labeled front and back. The ornaments are all different, the trees are told apart, neither tree may be left bare, and the star and the bell must hang on different trees. How many arrangements are there?',
      choices: ['$128$', '$254$', '$256$', '$64$'],
      answer: 0,
      solution:
        'Route one, place the two special ornaments first. The star has $2$ labeled trees to choose from, and the bell must then take the other one: $2 \\times 1 = 2$ ways. Once those two are placed, both trees already hold something, so the “neither bare” rule can no longer be broken, and each of the remaining $6$ ornaments is free to pick either tree: $2^6 = 64$. Multiplying, $2 \\times 64 = 128$ ✓. Route two, count then remove. Start from every arrangement with neither tree bare: $2^8 - 2 = 254$. Remove the ones in which the star and the bell share a tree, found by tying those two into a single bundle — $7$ objects onto $2$ labeled trees with neither bare is $2^7 - 2 = 126$, and untying a bundle recovers the original arrangement uniquely. So $254 - 126 = 128$ ✓. (The choice $254$ DROPS THE STAR-AND-BELL RULE, counting every arrangement with neither tree bare ✗; $256$ DROPS BOTH RULES, counting all $2^8$ assignments ✗; $64$ TREATS THE TWO TREES AS INTERCHANGEABLE, halving $128$ though the trees carry labels ✗.)',
    },
  ],
  // slot 6 — different items, two INTERCHANGEABLE containers
  [
    {
      q: 'Six different puzzles are divided between two plain canvas bags. The puzzles are all different, the two bags are identical and carry no labels — so a division that swaps the contents of the bags is the same division — and neither bag may be empty. How many divisions are there?',
      choices: ['$62$', '$31$', '$32$', '$64$'],
      answer: 1,
      solution:
        'Route one, list by group sizes. Because the bags carry no labels, a division is just a way of splitting the six puzzles into two unlabeled non-empty groups, so it is named by its unordered pair of group sizes: $1$-and-$5$, $2$-and-$4$, or $3$-and-$3$. For $1$-and-$5$, naming the lone puzzle names the split: $\\binom{6}{1} = 6$. For $2$-and-$4$, naming the pair names the split: $\\binom{6}{2} = 15$. For $3$-and-$3$, naming one group of three names the split, but each split gets named twice, once by each half: $\\binom{6}{3} \\div 2 = 20 \\div 2 = 10$. Total $6 + 15 + 10 = 31$ ✓. Route two, label the bags, then check the pairing. Pretend the bags are marked $A$ and $B$: each puzzle picks a bag, giving $2^6 = 64$, minus the $2$ that leave a bag empty, so $62$ labeled arrangements. Swapping the two marks sends each labeled arrangement to a different one — different because no arrangement can equal its own swap when both bags are non-empty, since a puzzle would have to sit in both bags at once. So the labeled arrangements fall into pairs, and each pair is one real division: $62 \\div 2 = 31$ ✓. (The choice $62$ TREATS THE BAGS AS LABELED, counting each division once for each way of marking the bags ✗; $32$ ALLOWS AN EMPTY BAG, halving $2^6$ instead of $2^6 - 2$ ✗; $64$ TREATS THE BAGS AS LABELED AND ALLOWS AN EMPTY ONE, counting all $2^6$ assignments ✗.)',
    },
    {
      q: 'In how many ways can the set $\\{1, 2, 3, 4, 5, 6, 7\\}$ be split into two non-empty groups, if the two groups are interchangeable — neither group is labeled, so a split that swaps the two groups is the same split — and every number lands in exactly one group?',
      choices: ['$126$', '$64$', '$128$', '$63$'],
      answer: 3,
      solution:
        'Route one, name one group and pair off. Consider first the splits into an ordered pair (first group, second group) with both non-empty: choosing the first group is choosing a non-empty proper subset of a $7$-element set, and there are $2^7 - 2 = 126$ of those. Since the groups are interchangeable, each real split appears exactly twice in that list, once as $(S, S^c)$ and once as $(S^c, S)$, and never once only, because $S = S^c$ is impossible. So $126 \\div 2 = 63$ ✓. Route two, list by group sizes. The unordered pair of sizes is $1$-and-$6$, $2$-and-$5$, or $3$-and-$4$; the sizes cannot tie because $7$ is odd. Naming the smaller group names the split, and the smaller group is uniquely determined in each case: $\\binom{7}{1} + \\binom{7}{2} + \\binom{7}{3} = 7 + 21 + 35 = 63$ ✓. (The choice $126$ TREATS THE TWO GROUPS AS LABELED, counting $(S, S^c)$ and $(S^c, S)$ separately ✗; $64$ HALVES $2^7$ WITHOUT FIRST REMOVING the two splits that leave a group empty ✗; $128$ COUNTS EVERY SUBSET, labeled groups and empty groups included ✗.)',
    },
    {
      q: '*Derived.* Eight different toys, among them a drum and a yo-yo, are divided between two plain sacks. The toys are all different, the two sacks are identical and unlabeled — swapping their contents gives the same division — neither sack may be empty, and the drum and the yo-yo must go in different sacks. How many divisions are there?',
      choices: ['$128$', '$127$', '$64$', '$254$'],
      answer: 2,
      solution:
        'Route one, anchor on the drum. Since the sacks are unlabeled, call the sack holding the drum “the drum’s sack”; that name is unambiguous and costs nothing, because it is read off the contents rather than stamped on the outside. The yo-yo must go in the other sack, which is now determined. Each of the remaining $6$ toys then chooses one of the two named sacks freely, and neither sack can be empty because the drum and the yo-yo are already split: $2^6 = 64$ divisions ✓. Route two, label, then pair off. With the sacks marked $A$ and $B$, put the drum in either mark ($2$ ways), the yo-yo in the other ($1$ way), and the other $6$ toys anywhere ($2^6 = 64$): $128$ labeled arrangements, all automatically non-empty. Swapping the marks changes every one of them, since it moves the drum, so the $128$ fall into pairs and each pair is one real division: $128 \\div 2 = 64$ ✓. (The choice $128$ TREATS THE SACKS AS LABELED, counting each division once per marking ✗; $127$ DROPS THE DRUM-AND-YO-YO RULE, counting all $\\left(2^8 - 2\\right) \\div 2$ divisions with neither sack empty ✗; $254$ DROPS THE RULE AND LABELS THE SACKS, counting $2^8 - 2$ ✗.)',
    },
  ],
  // slot 7 — identical items, labeled containers, none empty
  [
    {
      q: 'Nine identical pencils are handed out to $4$ students, Rae, Sol, Tam, and Uzo. The pencils are all alike, the students are all different people, and every student must receive at least one pencil. In how many ways can the pencils be handed out?',
      choices: ['$56$', '$220$', '$84$', '$6$'],
      answer: 0,
      solution:
        'Route one, give one away first, then use dividers. Hand each of the $4$ students a single pencil to satisfy the rule; that uses $4$ pencils and leaves $5$ to hand out with no restriction at all. Because the pencils are identical and the students are distinguishable, those $5$ are shared by writing $5$ stars and $3$ dividers in a row: $\\binom{5 + 3}{3} = \\binom{8}{3} = 56$ ✓. Route two, cut the row of nine. Lay the $9$ identical pencils in a row and make $3$ cuts, each in a gap between consecutive pencils and no two cuts in the same gap; the four blocks go to Rae, Sol, Tam, and Uzo in order, and every block is non-empty exactly because the cuts avoid the ends and each other. A row of $9$ pencils has $8$ gaps, so $\\binom{8}{3} = 56$ ✓. (The choice $220$ DROPS THE “EVERY STUDENT” RULE, counting $\\binom{12}{3} = 220$ placements with empty hands allowed ✗; $84$ COUNTS NINE GAPS INSTEAD OF EIGHT, computing $\\binom{9}{3}$ as if a row of $9$ pencils had a gap to spare ✗; $6$ TREATS THE FOUR STUDENTS AS INTERCHANGEABLE, counting only the $6$ multisets of pencil totals ✗.)',
    },
    {
      q: 'A player scores exactly $14$ points across the $3$ periods of a game and scores at least one point in each period. The three periods are told apart by when they happen, and only the point totals matter. How many ordered triples of period scores are possible?',
      choices: ['$120$', '$91$', '$78$', '$16$'],
      answer: 2,
      solution:
        'Route one, cut the row. Lay $14$ identical points in a row and make $2$ cuts, each in a gap between consecutive points and no two in the same gap; the three blocks are the first, second, and third period scores, and each is at least $1$ exactly because the cuts avoid the ends and each other. A row of $14$ points has $13$ gaps, so $\\binom{13}{2} = 78$ ✓. Route two, sort by the first period. Fix the first-period score $p$. The remaining $14 - p$ points split between two later periods with each getting at least one, which has $14 - p - 1 = 13 - p$ ways. Running $p$ from $1$ to $12$: $12 + 11 + 10 + \\cdots + 1 = \\frac{12 \\times 13}{2} = 78$ ✓. (The choice $120$ ALLOWS A SCORELESS PERIOD, counting the non-negative triples $\\binom{16}{2} = 120$ ✗; $91$ IS $\\binom{14}{2}$, treating a row of $14$ points as though it had $14$ gaps rather than $13$ ✗; $16$ TREATS THE THREE PERIODS AS INTERCHANGEABLE, counting only the $16$ ways to write $14$ as a sum of three positive parts without regard to order ✗.)',
    },
    {
      q: '*Reversed.* Identical seeds are shared among $3$ gardeners, Bo, Cy, and Di. The seeds are all alike, the gardeners are all different people, and every gardener must receive at least one seed. There are exactly $45$ ways to share them. How many seeds are there?',
      choices: ['$10$', '$11$', '$8$', '$12$'],
      answer: 1,
      solution:
        'Route one, cut the row and solve. With $n$ identical seeds and $3$ distinguishable gardeners, a sharing with nobody empty-handed is $2$ cuts placed in the $n - 1$ gaps of a row of $n$ seeds, so the count is $\\binom{n-1}{2}$. Setting $\\binom{n-1}{2} = 45$ gives $\\frac{(n-1)(n-2)}{2} = 45$, so $(n-1)(n-2) = 90 = 10 \\times 9$, and $n - 1 = 10$, $n = 11$ ✓. Route two, climb the ladder by listing. Give each gardener one seed first; the leftover $n - 3$ seeds are then shared freely among $3$ gardeners, which is $\\binom{n-3+2}{2} = \\binom{n-1}{2}$ ways. Read the ladder upward: $n = 8$ gives $\\binom{7}{2} = 21$; $n = 9$ gives $28$; $n = 10$ gives $36$; $n = 11$ gives $45$. The counts only grow, so $n = 11$ is the one ✓. (The choice $10$ REPORTS $n - 1$, the number of gaps in the row, rather than the number of seeds ✗; $8$ USES THE EMPTIES-ALLOWED FORMULA, solving $\\binom{n+2}{2} = 45$ ✗; $12$ OVERSHOOTS BY ONE, giving $\\binom{11}{2} = 55$ sharings ✗.)',
    },
  ],
  // slot 8 — identical items, INTERCHANGEABLE containers
  [
    {
      q: 'Eight identical buttons are placed into $3$ plain tins. The buttons are all alike, the three tins are identical and carry no labels — so only the multiset of tin totals matters — and a tin may be left empty. How many placements are there?',
      choices: ['$45$', '$5$', '$10$', '$22$'],
      answer: 2,
      solution:
        'Route one, list the size multisets in order. A placement is recorded by the three tin totals with the order thrown away, so list every way to write $8$ as a sum of at most three parts, largest part first: $8$; $7+1$; $6+2$; $5+3$; $4+4$; $6+1+1$; $5+2+1$; $4+3+1$; $4+2+2$; $3+3+2$. That is $10$ placements ✓. Route two, sort by the largest tin. If the largest tin holds $8$, $7$, $6$, or $5$, the rest is a placement of $0$, $1$, $2$, or $3$ buttons into two plain tins with no part exceeding the largest, giving $1, 1, 2, 2$ ways. If the largest holds $4$, the other two hold $4$ between them with neither above $4$: $4+0$, $3+1$, $2+2$, so $3$ ways. If the largest holds $3$, the other two hold $5$ with neither above $3$: $3+2$, so $1$ way. A largest tin of $2$ or less cannot reach $8$ with three tins. Total $1 + 1 + 2 + 2 + 3 + 1 = 10$ ✓. (The choice $45$ TREATS THE TINS AS LABELED, counting the $\\binom{10}{2} = 45$ ordered triples of totals ✗; $5$ FORBIDS AN EMPTY TIN, keeping only the five three-part sums ✗; $22$ PUTS NO CEILING ON THE NUMBER OF TINS, counting all $22$ ways to write $8$ as a sum of positive parts ✗.)',
    },
    {
      q: 'Ten identical folding chairs are placed in $4$ plain rooms. The chairs are all alike, the four rooms are identical and unlabeled — so only the multiset of room totals matters — and a room may be left empty. How many placements are there?',
      choices: ['$23$', '$286$', '$9$', '$42$'],
      answer: 0,
      solution:
        'Route one, list by the number of rooms used. One room: $10$ — $1$ way. Two rooms: $9+1$, $8+2$, $7+3$, $6+4$, $5+5$ — $5$ ways. Three rooms: $8+1+1$, $7+2+1$, $6+3+1$, $6+2+2$, $5+4+1$, $5+3+2$, $4+4+2$, $4+3+3$ — $8$ ways. Four rooms: $7+1+1+1$, $6+2+1+1$, $5+3+1+1$, $5+2+2+1$, $4+4+1+1$, $4+3+2+1$, $4+2+2+2$, $3+3+3+1$, $3+3+2+2$ — $9$ ways. Total $1 + 5 + 8 + 9 = 23$ ✓. Route two, sort by the largest room. Largest $10$: $1$. Largest $9, 8, 7$: the rest is $1, 2, 3$ chairs in at most three plain rooms, giving $1, 2, 3$. Largest $6$: the other $4$ in at most three plain rooms with no part above $6$ — $4$, $3{+}1$, $2{+}2$, $2{+}1{+}1$, $1{+}1{+}1{+}1$ is too many rooms, so $4$ ways. Largest $5$: the other $5$ in at most three rooms with no part above $5$ — $5$, $4{+}1$, $3{+}2$, $3{+}1{+}1$, $2{+}2{+}1$ — $5$ ways. Largest $4$: the other $6$ in at most three rooms with no part above $4$ — $4{+}2$, $3{+}3$, $4{+}1{+}1$, $3{+}2{+}1$, $2{+}2{+}2$ — $5$ ways. Largest $3$: the other $7$ in at most three rooms each at most $3$ — $3{+}3{+}1$, $3{+}2{+}2$ — $2$ ways. Largest $2$ tops out at $8$ chairs. Total $1 + 1 + 2 + 3 + 4 + 5 + 5 + 2 = 23$ ✓. (The choice $286$ TREATS THE ROOMS AS LABELED, counting the $\\binom{13}{3} = 286$ ordered lists of totals ✗; $9$ FORBIDS AN EMPTY ROOM, keeping only the nine four-part sums ✗; $42$ PUTS NO CEILING ON THE NUMBER OF ROOMS, counting all $42$ ways to write $10$ as a sum of positive parts ✗.)',
    },
    {
      q: '*Derived.* Twelve identical beads are placed into $3$ plain boxes. The beads are all alike, the three boxes are identical and unlabeled — only the multiset of box totals matters — and no box may be left empty. How many placements are there?',
      choices: ['$55$', '$19$', '$77$', '$12$'],
      answer: 3,
      solution:
        'Route one, list by the largest box. A placement is a way to write $12$ as a sum of exactly three positive parts, order ignored, so list them largest part first. Largest $10$: $10+1+1$. Largest $9$: $9+2+1$. Largest $8$: $8+3+1$, $8+2+2$. Largest $7$: $7+4+1$, $7+3+2$. Largest $6$: $6+5+1$, $6+4+2$, $6+3+3$. Largest $5$: $5+5+2$, $5+4+3$. Largest $4$: $4+4+4$. That is $1+1+2+2+3+2+1 = 12$ placements ✓. Route two, take one bead out of each box. Removing one bead from every box leaves $9$ identical beads in $3$ plain boxes with empties now allowed, and the correspondence runs both ways, so the two counts match. List the ways to write $9$ as a sum of at most three parts: $9$; $8+1$; $7+2$; $6+3$; $5+4$; $7+1+1$; $6+2+1$; $5+3+1$; $5+2+2$; $4+4+1$; $4+3+2$; $3+3+3$ — $12$ again ✓. (The choice $55$ TREATS THE BOXES AS LABELED, counting the $\\binom{11}{2} = 55$ ordered triples of positive totals ✗; $19$ ALLOWS AN EMPTY BOX, counting all $19$ ways to write $12$ as a sum of at most three parts ✗; $77$ PUTS NO CEILING ON THE NUMBER OF BOXES, counting all $77$ ways to write $12$ as a sum of positive parts ✗.)',
    },
  ],
  // slot 9 — different items, INTERCHANGEABLE containers
  [
    {
      q: 'Five different books are packed into $4$ plain shipping boxes. The books are all different, the four boxes are identical and carry no labels — so only the grouping of the books matters — and a box may stay empty. How many packings are there?',
      choices: ['$51$', '$1024$', '$52$', '$10$'],
      answer: 0,
      solution:
        'Route one, list by the number of boxes used. Since the boxes are unlabeled, a packing is a split of the five books into unlabeled non-empty groups, and at most $4$ groups are available. One group: $1$ way. Two groups: sizes $4{+}1$ in $\\binom{5}{1} = 5$ ways, or $3{+}2$ in $\\binom{5}{2} = 10$ ways — $15$. Three groups: sizes $3{+}1{+}1$, fixed by naming the trio, $\\binom{5}{3} = 10$ ways; or $2{+}2{+}1$, fixed by naming the single book ($5$ ways) and then partnering one of the remaining four ($3$ ways), $15$ — $25$ in all. Four groups: sizes $2{+}1{+}1{+}1$, fixed by naming the pair, $\\binom{5}{2} = 10$. Total $1 + 15 + 25 + 10 = 51$ ✓. Route two, label the boxes, then divide with a reason. Sort the packings by the number $j$ of boxes actually used, and count each case first with the boxes marked $1$ through $4$. For $j = 1$ there is $1$ marked way once the box is named; for $j = 2$, filling two named boxes with neither empty is $2^5 - 2 = 30$; for $j = 3$ it is $3^5 - 3 \\times 2^5 + 3 = 150$; for $j = 4$ it is $4^5 - 4 \\times 3^5 + 6 \\times 2^5 - 4 = 1024 - 972 + 192 - 4 = 240$. In each case the $j$ groups are non-empty, so they are different sets, and the $j!$ ways of pinning the marks onto them give $j!$ different marked fillings with none left fixed. Dividing each case by its $j!$: $1 + \\frac{30}{2} + \\frac{150}{6} + \\frac{240}{24} = 1 + 15 + 25 + 10 = 51$ ✓. (The choice $1024$ TREATS THE BOXES AS LABELED, counting $4^5$ assignments ✗; $52$ ALLOWS A FIFTH BOX, keeping the split into five one-book groups ✗; $10$ REQUIRES ALL FOUR BOXES TO BE USED, keeping only the $2{+}1{+}1{+}1$ splits ✗.)',
    },
    {
      q: 'Five different tasks are handed out to work crews. The tasks are all different, the crews are interchangeable and carry no names — only which tasks share a crew matters — every crew must receive at least one task, and the number of crews is not fixed in advance. In how many ways can the tasks be handed out?',
      choices: ['$51$', '$41$', '$52$', '$25$'],
      answer: 2,
      solution:
        'Route one, list by the number of crews. A hand-out is a split of the five tasks into unlabeled non-empty groups, one group per crew, and the number of groups may be anything from $1$ to $5$. One crew: $1$ way. Two crews: $4{+}1$ gives $\\binom{5}{1} = 5$, $3{+}2$ gives $\\binom{5}{2} = 10$ — $15$. Three crews: $3{+}1{+}1$ gives $\\binom{5}{3} = 10$, $2{+}2{+}1$ gives $5 \\times 3 = 15$ — $25$. Four crews: $2{+}1{+}1{+}1$, named by its pair, $\\binom{5}{2} = 10$. Five crews: every task alone, $1$ way. Total $1 + 15 + 25 + 10 + 1 = 52$ ✓. Route two, grow the answer one task at a time. Let $B_n$ be the number of hand-outs for $n$ tasks. Adding a new task, it either joins some group of the old split or starts a group of its own; sorting by how many of the old tasks share the new task’s crew gives $B_{n+1} = \\sum_{k=0}^{n} \\binom{n}{k} B_{n-k}$. From $B_0 = 1$: $B_1 = 1$, $B_2 = 2$, $B_3 = 5$, $B_4 = 15$, and $B_5 = \\binom{4}{0} \\cdot 15 + \\binom{4}{1} \\cdot 5 + \\binom{4}{2} \\cdot 2 + \\binom{4}{3} \\cdot 1 + \\binom{4}{4} \\cdot 1 = 15 + 20 + 12 + 4 + 1 = 52$ ✓. (The choice $51$ CAPS THE CREWS AT FOUR, dropping the hand-out that gives every task its own crew ✗; $41$ CAPS THE CREWS AT THREE ✗; $25$ FIXES THE NUMBER OF CREWS AT THREE, though the stem leaves it open ✗.)',
    },
    {
      q: '*Derived.* Five different figurines are packed into $3$ plain cartons. The figurines are all different, the three cartons are identical and unlabeled — only the grouping of the figurines matters — and no carton may be left empty. How many packings are there?',
      choices: ['$150$', '$25$', '$50$', '$41$'],
      answer: 1,
      solution:
        'Route one, list by group sizes. Five figurines in three unlabeled non-empty groups forces sizes $3{+}1{+}1$ or $2{+}2{+}1$. For $3{+}1{+}1$: naming the group of three settles everything, since the other two figurines are singletons, giving $\\binom{5}{3} = 10$ packings. For $2{+}2{+}1$: name the lone figurine ($5$ ways), then pair up the remaining four by choosing a partner for the first of them ($3$ ways), which fixes the other pair — $15$ packings. Total $10 + 15 = 25$ ✓. Route two, label the cartons, then divide with a reason. With the cartons marked $1$, $2$, $3$, the count with no carton empty is $3^5 - 3 \\times 2^5 + 3 = 243 - 96 + 3 = 150$. Because every carton is non-empty, the three groups are pairwise different as sets, so the $3! = 6$ ways to attach the marks to them all give different labeled arrangements and none is left fixed by relabeling. Each unlabeled packing therefore appears exactly $6$ times: $150 \\div 6 = 25$ ✓. (The choice $150$ TREATS THE CARTONS AS LABELED, counting each packing once per marking ✗; $50$ DIVIDES BY THE NUMBER OF CARTONS INSTEAD OF BY $3! = 6$, computing $150 \\div 3$ ✗; $41$ ALLOWS AN EMPTY CARTON, counting all splits into at most three unlabeled groups ✗.)',
    },
  ],
  // slot 10 — different items, labeled containers, none empty, plus a pair rule
  [
    {
      q: 'Six different stickers, among them a red one and a blue one, are placed in $3$ albums labeled $A$, $B$, and $C$. The stickers are all different, the albums are told apart by their labels, every album must get at least one sticker, and the red sticker and the blue sticker must go in different albums. How many arrangements are there?',
      choices: ['$540$', '$390$', '$486$', '$150$'],
      answer: 1,
      solution:
        'Route one, count all, then remove the together ones. First, every album non-empty with no color rule: $3^6 - 3 \\times 2^6 + 3 = 729 - 192 + 3 = 540$. Among those, count the ones where red and blue share an album by gluing the two stickers into a single object: $5$ objects into $3$ labeled albums with none empty is $3^5 - 3 \\times 2^5 + 3 = 243 - 96 + 3 = 150$. Every arrangement with red and blue together corresponds to exactly one glued arrangement and back again, so $540 - 150 = 390$ ✓. Route two, count apart first, then remove the empty-album cases. Arrangements with red and blue in different albums, empty albums allowed: red picks any of $3$, blue picks either of the other $2$, and the remaining $4$ stickers are free — $3 \\times 2 \\times 3^4 = 486$. Now remove those that leave an album bare. Since red and blue already occupy two different albums, only the third album can be bare, and it is a named album: with red and blue confined to the other two albums, choose which album is bare ($3$ ways), place red and blue in the remaining two labeled albums ($2$ ways), and send the other $4$ stickers to those same two albums ($2^4 = 16$ ways) — $3 \\times 2 \\times 16 = 96$. So $486 - 96 = 390$ ✓. (The choice $540$ DROPS THE RED-AND-BLUE RULE, counting every arrangement with no album empty ✗; $486$ DROPS THE “EVERY ALBUM” RULE, keeping arrangements that leave an album bare ✗; $150$ REPORTS THE TOGETHER COUNT, the complement that was meant to be subtracted ✗.)',
    },
    {
      q: 'Five different tools, one of them a hammer, are put into $3$ toolboxes labeled $1$, $2$, and $3$. The tools are all different, the toolboxes are told apart by their numbers, every toolbox must hold at least one tool, and the hammer must be the only tool in its toolbox. How many arrangements are there?',
      choices: ['$150$', '$48$', '$14$', '$42$'],
      answer: 3,
      solution:
        'Route one, place the hammer, then fill the rest. Choose the hammer’s toolbox: $3$ labeled choices. That toolbox is now closed, since the hammer must be alone in it. The other $4$ tools must fill the remaining $2$ labeled toolboxes with neither empty, which is $2^4 - 2 = 14$ ways. Multiplying, $3 \\times 14 = 42$ ✓. Route two, count hammer-alone arrangements, then remove the bad ones. Ignore the “every toolbox” rule: put the hammer in one of $3$ toolboxes and send the other $4$ tools anywhere among the remaining $2$, which is $3 \\times 2^4 = 48$ arrangements with the hammer alone. Of those, the ones leaving a toolbox empty pile all four other tools into a single toolbox: $3$ choices for the hammer times $2$ choices of which of the other two takes everything, so $6$. Then $48 - 6 = 42$ ✓. (The choice $150$ DROPS THE HAMMER RULE, counting every arrangement with no toolbox empty ✗; $48$ DROPS THE “EVERY TOOLBOX” RULE, keeping the six arrangements that leave a toolbox empty ✗; $14$ FORGETS TO CHOOSE THE HAMMER’S TOOLBOX, reporting only the $2^4 - 2$ ways to fill the other two ✗.)',
    },
    {
      q: '*Derived.* Seven different beads, among them a jade bead and an amber bead, are placed in $3$ cups labeled $X$, $Y$, and $Z$. The beads are all different, the cups are told apart by their labels, no cup may be left empty, and the jade bead and the amber bead must go in the **same** cup. How many arrangements are there?',
      choices: ['$1806$', '$729$', '$540$', '$1266$'],
      answer: 2,
      solution:
        'Route one, glue the pair. Because jade and amber must share a cup, tie them together into one bundle. The arrangement is then a placement of $6$ objects — the bundle plus the other $5$ beads — into $3$ labeled cups with no cup empty, and untying the bundle recovers the original arrangement uniquely, so the two counts agree. That count is $3^6 - 3 \\times 2^6 + 3 = 729 - 192 + 3 = 540$ ✓. Route two, choose the shared cup first. Jade and amber sit together in one of the $3$ labeled cups, so name that cup: $3$ choices, and it is already occupied. The other $5$ beads are then free, except that the two remaining cups must each finish with at least one bead. Of the $3^5 = 243$ ways to place those $5$ beads, the $2^5 = 32$ that never use the first of those two cups and the $32$ that never use the second must go, and the $1$ that uses neither was removed twice, so $243 - 64 + 1 = 180$ placements leave both of them occupied. Multiplying by the choice of shared cup: $3 \\times 180 = 540$ ✓. (The choice $1806$ DROPS THE JADE-AND-AMBER RULE, counting all $3^7 - 3 \\times 2^7 + 3$ arrangements with no cup empty ✗; $729$ DROPS THE “NO EMPTY CUP” RULE from the glued count, reporting $3^6$ ✗; $1266$ REPORTS THE COMPLEMENT, the arrangements with jade and amber in different cups ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 5,
  sections: { '5.4': s54 },
}
