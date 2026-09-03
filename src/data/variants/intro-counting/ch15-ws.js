// Counting chapter 15 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$105$' or an exact fraction such as '$\frac{9}{2}$'.
//  - Every key was brute-forced in node before the stem was written: full
//    enumeration of every discrete sample space (all $2^8$ flip sequences, all
//    $6^6$ roll sequences, all token subsets, all $7!$ letter orders, all
//    $\binom{16}{3}$ dot triples, all $\binom{10}{5}$ point selections), and
//    the continuous keys by exact area decomposition cross-checked with Monte
//    Carlo at $n = 4{,}000{,}000$. Every key matches its pin. Pin deviations:
//    none.
//  - This is the capstone chapter, so every variation mixes at least two
//    techniques, and every solution runs two genuinely different routes that
//    each end ✓ — linearity of expectation vs. a distribution or double count
//    (slots 1, 4, 10), direct casework vs. a complement (slots 2, 8, 9), stars
//    and bars vs. casework or a complement (slot 3), symmetry vs. constructive
//    placement (slot 5), triangle decomposition vs. slicing (slot 6), a
//    bijection vs. hockey-stick casework or a complement (slot 7). Route two
//    never re-imports route one’s number. The solution then names the most
//    tempting wrong answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: dice are standard and fair unless
//    the stem says otherwise; coins, spinners, and picks are fair and
//    independent; drawn objects are distinguishable and drawn without
//    replacement unless the stem says independently; continuous choices are
//    uniform and independent; expected values are exact fractions.

const worksheet = [
  // slot 1 — expected number of runs (linearity over run-starts).
  //          Lanes: 8 flips -> 9/2; die rolled 6 times -> 31/6;
  //          reversed: expected runs 13/2 -> n = 12.
  [
    {
      q: 'A fair coin is flipped $8$ times. A run is a maximal block of consecutive flips that all show the same face; for example, $HHTHHTTT$ has four runs. What is the expected number of runs?',
      answer: '$\\frac{9}{2}$',
      solution:
        'One piece per flip. The first flip always starts a run, and each of the $7$ later flips starts a new run exactly when it differs from the flip just before it, which happens with probability $\\frac{1}{2}$. Expected values add even though neighboring pieces overlap, so the expected number of runs is $1 + 7 \\cdot \\frac{1}{2} = \\frac{9}{2}$ ✓. Second route, by the run-count distribution. A sequence has exactly $r$ runs when exactly $r - 1$ of its $7$ neighbor boundaries switch faces, so $2\\binom{7}{r-1}$ sequences have $r$ runs (the leading $2$ picks the first face). The total number of runs over all $256$ sequences is $\\sum_r r \\cdot 2\\binom{7}{r-1} = 2\\left(7 \\cdot 2^6 + 2^7\\right) = 1152$, and $\\frac{1152}{256} = \\frac{9}{2}$ ✓. MULTIPLYING ALL $8$ FLIPS BY $\\frac{1}{2}$ gives $4$; it makes the first flip earn its run only half the time, when the first flip starts a run no matter what it shows ✗.',
    },
    {
      q: 'A standard die is rolled $6$ times. A run is a maximal block of consecutive rolls that all show the same number. What is the expected number of runs?',
      answer: '$\\frac{31}{6}$',
      solution:
        'The first roll starts a run, and each of the $5$ later rolls starts a new run exactly when it differs from the roll just before it, probability $\\frac{5}{6}$. By linearity the expected number of runs is $1 + 5 \\cdot \\frac{5}{6} = \\frac{31}{6}$ ✓. Second route, by counting runs across all $6^6 = 46656$ sequences. A sequence with $r$ runs is built by choosing which $r - 1$ of the $5$ boundaries switch, then the first number ($6$ ways) and each later run’s number ($5$ ways each), so $\\binom{5}{r-1} \\cdot 6 \\cdot 5^{r-1}$ sequences have $r$ runs. The grand total of runs is $6\\sum_k (k+1)\\binom{5}{k}5^k = 6\\left(25 \\cdot 6^4 + 6^5\\right) = 241056$, and $\\frac{241056}{46656} = \\frac{31}{6}$ ✓. COUNTING ONLY THE CHANGES, $5 \\cdot \\frac{5}{6} = \\frac{25}{6}$, forgets the run that the first roll starts all by itself ✗.',
    },
    {
      q: 'A fair coin is flipped $n$ times, and the expected number of runs (maximal blocks of consecutive equal faces) is exactly $\\frac{13}{2}$. What is $n$?',
      answer: '$12$',
      solution:
        'The first flip starts a run and each of the other $n - 1$ flips starts one with probability $\\frac{1}{2}$, so the expected number of runs is $1 + \\frac{n-1}{2}$. Setting $1 + \\frac{n-1}{2} = \\frac{13}{2}$ gives $n - 1 = 11$, so $n = 12$ ✓. Second route, splitting runs by face. A heads-run starts at flip $1$ if that flip is heads (probability $\\frac{1}{2}$) or at any of the $n - 1$ later flips showing heads right after a tails (probability $\\frac{1}{4}$ each), so heads-runs average $\\frac{1}{2} + \\frac{n-1}{4}$; tails-runs match by symmetry, and adding gives $\\frac{n+1}{2}$ runs in all. Then $\\frac{n+1}{2} = \\frac{13}{2}$ forces $n = 12$ ✓. SETTING $\\frac{n}{2} = \\frac{13}{2}$ gives $13$; it prices every flip at $\\frac{1}{2}$ and forgets the guaranteed first run pushes the average to $\\frac{n+1}{2}$ ✗.',
    },
  ],

  // slot 2 — all same or all different (casework + complement).
  //          Lanes: 4R4B4G draw 3 -> 19/55; 3 people 4 doors -> 7/16;
  //          derived: 3R3B3G exactly two share -> 9/14.
  [
    {
      q: 'A jar holds $4$ red, $4$ blue, and $4$ green tokens. Three tokens are drawn at random at the same time. What is the probability that the three tokens are either all the same color or all different colors?',
      answer: '$\\frac{19}{55}$',
      solution:
        'There are $\\binom{12}{3} = 220$ equally likely sets of three tokens. All the same color: pick the color, then $3$ of its $4$ tokens, $3 \\cdot \\binom{4}{3} = 12$ sets. All different colors: one token of each color, $4 \\cdot 4 \\cdot 4 = 64$ sets. The two events cannot overlap, so the probability is $\\frac{12 + 64}{220} = \\frac{76}{220} = \\frac{19}{55}$ ✓. Second route, through the complement. The only other outcome is a two-and-one split: pick the doubled color ($3$ ways), two of its four tokens ($\\binom{4}{2} = 6$), and one of the $8$ tokens of the other colors, $3 \\cdot 6 \\cdot 8 = 144$ sets. Then $220 - 144 = 76$ sets remain, and $\\frac{76}{220} = \\frac{19}{55}$ ✓. TREATING THE DRAWS AS INDEPENDENT COLOR PICKS gives $\\frac{3}{27} + \\frac{6}{27} = \\frac{1}{3}$; drawing without replacement thins out each color as it is used, so the with-replacement model overpays the all-same trios ✗.',
    },
    {
      q: 'Three people each independently pick one of $4$ doors, every door equally likely. What is the probability that all three pick the same door or all three pick different doors?',
      answer: '$\\frac{7}{16}$',
      solution:
        'The picks form $4^3 = 64$ equally likely ordered outcomes. All the same door: $4$ outcomes. All different doors: $4 \\cdot 3 \\cdot 2 = 24$ outcomes. Adding the disjoint events gives $\\frac{28}{64} = \\frac{7}{16}$ ✓. Second route, through the complement. The remaining outcomes have exactly two people sharing: choose which two people share ($3$ ways), their common door ($4$ ways), and a different door for the third person ($3$ ways), $3 \\cdot 4 \\cdot 3 = 36$ outcomes, and $1 - \\frac{36}{64} = \\frac{28}{64} = \\frac{7}{16}$ ✓. COUNTING UNORDERED DOOR CHOICES AS EQUALLY LIKELY — $4$ all-same and $\\binom{4}{3} = 4$ all-different of the $20$ multisets, $\\frac{8}{20} = \\frac{2}{5}$ — is wrong because a multiset like two-and-one arises from more ordered picks than an all-same triple does ✗.',
    },
    {
      q: 'A jar holds $3$ red, $3$ blue, and $3$ green tokens. Three tokens are drawn at random at the same time. What is the probability that exactly two of the three tokens share a color?',
      answer: '$\\frac{9}{14}$',
      solution:
        'Count the two-and-one splits directly among the $\\binom{9}{3} = 84$ sets: pick the doubled color ($3$ ways), two of its three tokens ($\\binom{3}{2} = 3$ ways), and one of the $6$ tokens of the other two colors, $3 \\cdot 3 \\cdot 6 = 54$ sets, so the probability is $\\frac{54}{84} = \\frac{9}{14}$ ✓. Second route, through the complement. The sets that fail are all one color ($3$ sets, one per color) or all different colors ($3 \\cdot 3 \\cdot 3 = 27$ sets), $30$ in all; the other $84 - 30 = 54$ sets have exactly one shared color, and $\\frac{54}{84} = \\frac{9}{14}$ ✓. LETTING THE THIRD TOKEN BE ANY OF THE $7$ LEFT OVER, $3 \\cdot 3 \\cdot 7 = 63$, sneaks the all-same trios back in through the third draw and gives $\\frac{63}{84} = \\frac{3}{4}$ ✗.',
    },
  ],

  // slot 3 — pairs with a sum cap (stars and bars with slack + casework).
  //          Lanes: m+n <= 15 -> 105; m even, m+n <= 30 -> 210;
  //          reversed: 325 pairs -> k = 26.
  [
    {
      q: 'How many ordered pairs of positive integers $(m, n)$ satisfy $m + n \\le 15$?',
      answer: '$105$',
      solution:
        'Introduce the slack $k = 16 - m - n$; the condition $m + n \\le 15$ says exactly that $k \\ge 1$, so the pairs correspond to the positive solutions of $m + n + k = 16$, and stars and bars with three positive parts gives $\\binom{15}{2} = 105$ ✓. Second route, casework on the sum $s = m + n$: for each $s$ from $2$ to $15$ there are $s - 1$ pairs (choose $m$ from $1$ to $s - 1$), and $1 + 2 + \\cdots + 14 = 105$ ✓. DEFINING THE SLACK AS $15 - m - n$ AND STILL DEMANDING $k \\ge 1$ counts only the pairs with $m + n \\le 14$, which is $\\binom{14}{2} = 91$ — it silently deletes the $14$ pairs whose sum is exactly $15$ ✗.',
    },
    {
      q: 'How many ordered pairs of positive integers $(m, n)$ satisfy $m + n \\le 30$, where $m$ is even?',
      answer: '$210$',
      solution:
        'Write $m = 2j$ with $j \\ge 1$: for each $j$ from $1$ to $14$, the values of $n$ run from $1$ to $30 - 2j$, so the count is $28 + 26 + \\cdots + 2 = 2(1 + 2 + \\cdots + 14) = 210$ ✓. Second route, by subtracting the odd-$m$ pairs from all pairs. All pairs with $m + n \\le 30$: casework on the sum gives $1 + 2 + \\cdots + 29 = \\binom{30}{2} = 435$. Odd $m$: for $m = 1, 3, \\ldots, 29$ there are $29, 27, \\ldots, 1$ choices of $n$, and the sum of the first $15$ odd numbers is $15^2 = 225$. So the even-$m$ pairs number $435 - 225 = 210$ ✓. HALVING $435$ on the grounds that $m$ is even half the time gives $217.5$, which is not even a whole number — small odd values of $m$ leave more room for $n$ than the even values do ✗.',
    },
    {
      q: 'The ordered pairs of positive integers $(m, n)$ with $m + n \\le k$ number exactly $325$. What is $k$?',
      answer: '$26$',
      solution:
        'Casework on the sum shows the count is $1 + 2 + \\cdots + (k - 1) = \\frac{k(k-1)}{2}$, so $k(k - 1) = 650 = 25 \\cdot 26$, and $k = 26$ ✓. Second route, by recognizing the triangular number: $325 = 1 + 2 + \\cdots + 25$, and the casework ladder $s = 2, 3, \\ldots, k$ contributes $1, 2, \\ldots, k - 1$ pairs, so its top step is $k - 1 = 25$, giving $k = 26$; the check $\\binom{26}{2} = 325$ confirms it, and the count grows strictly with $k$, so no other $k$ works ✓. READING $325 = 1 + \\cdots + 25$ AS $k = 25$ mistakes the ladder’s top step for $k$ itself; the pairs with sum exactly $26$ are still allowed, and $k = 25$ counts only $300$ pairs ✗.',
    },
  ],

  // slot 4 — expected lonely picks (linearity + incidence count).
  //          Lanes: 5 dice -> 3125/1296; 4 people pick 1-8 -> 343/128;
  //          derived: 4 dice sharing -> 91/54.
  [
    {
      q: 'Five standard dice are rolled. A die is called lonely if the number it shows appears on none of the other four dice. What is the expected number of lonely dice?',
      answer: '$\\frac{3125}{1296}$',
      solution:
        'One piece per die. A fixed die is lonely when each of the other four dice avoids its number, and each avoids it with probability $\\frac{5}{6}$ independently, so a fixed die is lonely with probability $\\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$. The pieces are far from independent, but expected values add: $5 \\cdot \\frac{625}{1296} = \\frac{3125}{1296}$ ✓. Second route, by counting (roll, lonely die) incidences. Fix a die and a value $v$: the outcomes in which that die shows $v$ and the other four avoid $v$ number $5^4 = 625$. Summing over $6$ values and $5$ dice gives $5 \\cdot 6 \\cdot 625 = 18750$ incidences spread over $6^5 = 7776$ rolls, an average of $\\frac{18750}{7776} = \\frac{3125}{1296}$ lonely dice ✓. RAISING $\\frac{5}{6}$ TO THE FIFTH POWER, $5 \\cdot \\left(\\frac{5}{6}\\right)^5$, makes each die dodge its own number too — only the other four dice have to avoid it ✗.',
    },
    {
      q: 'Four people each independently pick a whole number from $1$ to $8$, every number equally likely. What is the expected number of people whose number was picked by nobody else?',
      answer: '$\\frac{343}{128}$',
      solution:
        'One piece per person. A fixed person’s number is avoided by each of the other three people with probability $\\frac{7}{8}$ independently, so that person is the unique picker with probability $\\left(\\frac{7}{8}\\right)^3 = \\frac{343}{512}$, and linearity gives $4 \\cdot \\frac{343}{512} = \\frac{343}{128}$ ✓. Second route, by incidences: fix a person and a value; the pick-lists where that person takes that value and the other three dodge it number $7^3 = 343$, so there are $4 \\cdot 8 \\cdot 343 = 10976$ (list, unique picker) incidences over $8^4 = 4096$ lists, an average of $\\frac{10976}{4096} = \\frac{343}{128}$ ✓. USING THE EXPONENT $4$, $4 \\cdot \\left(\\frac{7}{8}\\right)^4 = \\frac{2401}{1024}$, forces the person to avoid their own number as well as the other three people’s ✗.',
    },
    {
      q: 'Four standard dice are rolled. What is the expected number of dice that share their value with at least one other die?',
      answer: '$\\frac{91}{54}$',
      solution:
        'One piece per die, through its complement. A fixed die fails to share only when all three other dice avoid its number, probability $\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$, so it shares with probability $1 - \\frac{125}{216} = \\frac{91}{216}$, and linearity gives $4 \\cdot \\frac{91}{216} = \\frac{91}{54}$ ✓. Second route, by full enumeration: across all $6^4 = 1296$ rolls the sharing dice total $2184$ (every all-different roll contributes $0$, every roll with one matched pair contributes $2$, and so on), and $\\frac{2184}{1296} = \\frac{91}{54}$ ✓. DOUBLING THE EXPECTED NUMBER OF MATCHING PAIRS, $2 \\cdot \\binom{4}{2} \\cdot \\frac{1}{6} = 2$, counts a die twice whenever it matches two different dice, as in a triple ✗.',
    },
  ],

  // slot 5 — relative-order probabilities (symmetry + constructive count).
  //          Lanes: A-G with A first of four, E<F -> 1/8; 6 runners -> 5/24;
  //          derived: conditional A<C given A<B -> 2/3.
  [
    {
      q: 'The seven letters $A$ through $G$ are arranged in a row in random order. What is the probability that $A$ appears somewhere before each of $B$, $C$, and $D$, and $E$ appears somewhere before $F$?',
      answer: '$\\frac{1}{8}$',
      solution:
        'Look only at $A$, $B$, $C$, $D$: by symmetry each of the four is equally likely to be the earliest, so $A$ leads with probability $\\frac{1}{4}$. The order of $E$ and $F$ involves disjoint letters, hence is independent, and $E$ before $F$ has probability $\\frac{1}{2}$. Multiply: $\\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{1}{8}$ ✓. Second route, by building the good rows: choose $4$ of the $7$ positions for $A$–$D$ ($\\binom{7}{4} = 35$ ways), where $A$ must take the earliest of them and $B$, $C$, $D$ fill the rest in $3! = 6$ orders; choose $2$ of the remaining $3$ positions for $E$ and $F$ with $E$ earlier ($3$ ways); $G$ takes the last spot. That is $35 \\cdot 6 \\cdot 3 = 630$ of the $7! = 5040$ rows, and $\\frac{630}{5040} = \\frac{1}{8}$ ✓. MULTIPLYING FOUR INDEPENDENT-LOOKING HALVES, $\\left(\\frac{1}{2}\\right)^3 \\cdot \\frac{1}{2} = \\frac{1}{16}$, treats $A$ before $B$, $A$ before $C$, and $A$ before $D$ as independent, but all three lean on where $A$ sits ✗.',
    },
    {
      q: 'Six runners, among them Pia, Quinn, Rob, and Sam, finish a race in random order with no ties. What is the probability that Pia finishes ahead of Quinn, Pia finishes ahead of Rob, and Sam finishes ahead of Quinn?',
      answer: '$\\frac{5}{24}$',
      solution:
        'Only the relative order of the four named runners matters, and its $4! = 24$ patterns are equally likely. Casework on which of the four is earliest: if Pia leads, the requirement left is Sam before Quinn, true in half of the $3! = 6$ completions, $3$ patterns; if Sam leads, Pia must still beat both Quinn and Rob, so Pia is next and Quinn, Rob finish in either order, $2$ patterns; Quinn or Rob leading is impossible. That is $5$ of $24$, probability $\\frac{5}{24}$ ✓. Second route, by counting finishes: choose $4$ of the $6$ finishing positions for the named runners ($\\binom{6}{4} = 15$ ways), fill them with one of the $5$ good patterns, and let the other two runners take the leftover spots in $2! = 2$ orders: $15 \\cdot 5 \\cdot 2 = 150$ of the $720$ finishes, and $\\frac{150}{720} = \\frac{5}{24}$ ✓. MULTIPLYING $\\frac{1}{3}$ (Pia beats Quinn and Rob) BY $\\frac{1}{2}$ (Sam beats Quinn) gives $\\frac{1}{6}$, but both events involve Quinn, so they are not independent ✗.',
    },
    {
      q: 'The six letters $A$ through $F$ are arranged in a row in random order, and $A$ turns out to appear somewhere before $B$. Given that, what is the probability that $A$ also appears somewhere before $C$?',
      answer: '$\\frac{2}{3}$',
      solution:
        'Only the relative order of $A$, $B$, $C$ matters, and its $6$ patterns are equally likely. The condition $A$ before $B$ keeps $ABC$, $ACB$, $CAB$; of these, $A$ is also before $C$ in $ABC$ and $ACB$. So the conditional probability is $\\frac{2}{3}$ ✓. Second route, by the ratio of probabilities: $A$ before both $B$ and $C$ means $A$ is earliest of the three, probability $\\frac{1}{3}$ by symmetry, while $A$ before $B$ has probability $\\frac{1}{2}$, and $\\frac{1/3}{1/2} = \\frac{2}{3}$ ✓. ANSWERING $\\frac{1}{2}$ on the grounds that $C$ was never mentioned in the given ignores that learning $A$ beat $B$ tilts $A$ toward the front of the row, dragging it ahead of $C$ more often than not ✗.',
    },
  ],

  // slot 6 — wedge between two lines in a rectangle (area + slicing).
  //          Lanes: [0,5]x[0,2] -> 1/10; two-triangle union in [0,2]^2 -> 1/2;
  //          reversed: probability 1/12 -> a = 6.
  [
    {
      q: 'A number $x$ is chosen uniformly at random from $0$ to $5$ and, independently, a number $y$ is chosen uniformly at random from $0$ to $2$. What is the probability that $y$ is larger than $x$ but smaller than $2x$?',
      answer: '$\\frac{1}{10}$',
      solution:
        'The outcome is a point in a $5 \\times 2$ rectangle of area $10$, and the event is the wedge between the lines $y = x$ and $y = 2x$. Both lines leave the rectangle through the top edge, $y = 2x$ at $x = 1$ and $y = x$ at $x = 2$, so the wedge is the triangle with corners $(0, 0)$, $(1, 2)$, $(2, 2)$: base $1$ along the top edge, height $2$, area $1$. The probability is $\\frac{1}{10}$ ✓. Second route, by vertical slices: for $0 \\le x \\le 1$ the slice runs from $y = x$ up to $y = 2x$, length $x$; for $1 \\le x \\le 2$ the top is capped at $2$, length $2 - x$; past $x = 2$ the slice is empty. The two pieces contribute areas $\\frac{1}{2}$ and $\\frac{1}{2}$, total $1$, and $\\frac{1}{10}$ again ✓. RUNNING BOTH LINES TO THE RIGHT EDGE $x = 5$ pretends the wedge keeps widening forever and produces area $\\frac{25}{2}$, a "probability" of $\\frac{5}{4}$ — bigger than $1$, so the cap $y \\le 2$ cannot be ignored ✗.',
    },
    {
      q: 'Numbers $x$ and $y$ are each chosen uniformly at random from $0$ to $2$, independently of each other. What is the probability that $y < \\frac{x}{2}$ or $y > 2x$?',
      answer: '$\\frac{1}{2}$',
      solution:
        'The outcome is a point in a $2 \\times 2$ square of area $4$. Below $y = \\frac{x}{2}$ lies the triangle with corners $(0, 0)$, $(2, 0)$, $(2, 1)$, area $1$; above $y = 2x$ lies the triangle with corners $(0, 0)$, $(1, 2)$, $(0, 2)$, area $1$. The regions meet only at the origin, so the probability is $\\frac{2}{4} = \\frac{1}{2}$ ✓. Second route, through the middle band $\\frac{x}{2} \\le y \\le 2x$: its vertical slice has length $\\frac{3x}{2}$ for $0 \\le x \\le 1$ and $2 - \\frac{x}{2}$ for $1 \\le x \\le 2$, areas $\\frac{3}{4}$ and $\\frac{5}{4}$, total $2$; the complement of the band has probability $1 - \\frac{2}{4} = \\frac{1}{2}$ ✓. READING THE LINES AS $y = x$ makes each region a half-square of area $2$ and gives probability $1$ — the slopes $\\frac{1}{2}$ and $2$ pinch the two corner triangles down to area $1$ each ✗.',
    },
    {
      q: 'A number $x$ is chosen uniformly at random from $0$ to $a$, where $a \\ge 2$, and independently a number $y$ is chosen uniformly at random from $0$ to $2$. The probability that $x < y < 2x$ is $\\frac{1}{12}$. What is $a$?',
      answer: '$6$',
      solution:
        'Because $a \\ge 2$, both lines exit through the top edge inside the rectangle — $y = 2x$ at $x = 1$ and $y = x$ at $x = 2$ — so the event is always the same triangle with corners $(0, 0)$, $(1, 2)$, $(2, 2)$ of area $1$, no matter how wide the rectangle is. The probability is $\\frac{1}{2a}$, and $\\frac{1}{2a} = \\frac{1}{12}$ gives $a = 6$ ✓. Second route, by slicing: the event’s area is $\\int_0^1 x\\,dx + \\int_1^2 (2 - x)\\,dx = \\frac{1}{2} + \\frac{1}{2} = 1$ with every slice past $x = 2$ empty, while the rectangle’s area is $2a$; solving $\\frac{1}{2a} = \\frac{1}{12}$ gives $a = 6$, and $6 \\ge 2$ is consistent with the setup ✓. LETTING THE WEDGE GROW WITH $a$, area $\\frac{a^2}{2}$, turns the equation into $\\frac{a}{4} = \\frac{1}{12}$ and $a = \\frac{1}{3}$, which contradicts $a \\ge 2$ — the cap $y \\le 2$ froze the wedge long before $x$ reaches $a$ ✗.',
    },
  ],

  // slot 7 — mixed strict/weak chains (bijection + hockey stick / complement).
  //          Lanes: a<=b<c<=12 -> 286; quadruples with b-a>=2 -> 330;
  //          reversed: 364 triples -> n = 13.
  [
    {
      q: 'How many ordered triples of integers $(a, b, c)$ satisfy $1 \\le a \\le b < c \\le 12$?',
      answer: '$286$',
      solution:
        'Nudge the ties apart: send $(a, b, c)$ to $(a, b + 1, c + 1)$. The conditions $a \\le b$ and $b < c$ become $a < b + 1 < c + 1 \\le 13$, a strictly increasing triple from $1$ to $13$, and the map reverses uniquely, so the count is $\\binom{13}{3} = 286$ ✓. Second route, casework on $c$: for each $c$ the pairs with $1 \\le a \\le b \\le c - 1$ number $\\binom{c}{2}$ (weakly increasing pairs from $c - 1$ values), and $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{12}{2} = \\binom{13}{3} = 286$ by the hockey stick identity ✓. MAKING EVERY INEQUALITY STRICT gives $\\binom{12}{3} = 220$ and throws away all $66$ triples with $a = b$ ✗.',
    },
    {
      q: 'How many ordered quadruples of integers $(a, b, c, d)$ satisfy $1 \\le a < b < c < d \\le 12$ with $b - a \\ge 2$?',
      answer: '$330$',
      solution:
        'Close the required gap: send $(a, b, c, d)$ to $(a, b - 1, c - 1, d - 1)$. The condition $b - a \\ge 2$ says exactly $a < b - 1$, so the image is a strictly increasing quadruple from $1$ to $11$, and the map reverses uniquely: $\\binom{11}{4} = 330$ ✓. Second route, through the complement: of all $\\binom{12}{4} = 495$ increasing quadruples, remove those with $b = a + 1$. For each such adjacent start, $c$ and $d$ come from the $11 - a$ values above $b$, so the bad quadruples number $\\binom{10}{2} + \\binom{9}{2} + \\cdots + \\binom{2}{2} = \\binom{11}{3} = 165$, and $495 - 165 = 330$ ✓. COUNTING THE BAD QUADRUPLES AS $11 \\cdot \\binom{10}{2} = 495$ — an adjacent pair times any two of the ten leftover values — lets $c$ or $d$ fall below $b$, wipes out everything, and leaves $0$ ✗.',
    },
    {
      q: 'The ordered triples of integers $(a, b, c)$ with $1 \\le a < b \\le c \\le n$ number exactly $364$. What is $n$?',
      answer: '$13$',
      solution:
        'Separate the tie: sending $(a, b, c)$ to $(a, b, c + 1)$ turns the conditions into $a < b < c + 1 \\le n + 1$, a strict triple from $1$ to $n + 1$, so the count is $\\binom{n+1}{3}$. Then $\\binom{n+1}{3} = 364$ gives $n + 1 = 14$, since $\\frac{14 \\cdot 13 \\cdot 12}{6} = 364$, so $n = 13$ ✓. Second route, verify by casework: for $n = 13$, each $c$ allows $\\binom{c}{2}$ strict pairs $a < b \\le c$, and $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{13}{2} = \\binom{14}{3} = 364$ by the hockey stick identity; the count grows strictly with $n$, so $13$ is the only answer ✓. SOLVING $\\binom{n}{3} = 364$ gives $n = 14$ — it forgets that the shift borrowed one extra value, so the strict triples live in $1$ to $n + 1$, not $1$ to $n$ ✗.',
    },
  ],

  // slot 8 — lattice-point counting (complement over lines + casework).
  //          Lanes: 3x4 dot grid triangles -> 200; 5x5 squares incl. tilted -> 50;
  //          derived: 4x4 random triple is a triangle -> 129/140.
  [
    {
      q: 'Twelve dots are arranged in a grid of $3$ rows and $4$ columns, with neighboring dots one unit apart. How many triangles have all three corners at dots of the grid?',
      answer: '$200$',
      solution:
        'Any $3$ dots make a triangle unless they lie on a line, so start with $\\binom{12}{3} = 220$ and subtract the collinear triples. Rows: $3 \\cdot \\binom{4}{3} = 12$. Columns: $4$ columns of three dots, $4$ triples. Slanted lines with three dots: the slope $1$ and slope $-1$ lines each appear twice, $4$ triples, and a steeper or shallower line leaves the grid before its third dot. So $220 - 20 = 200$ ✓. Second route, casework on how many rows the dots use: three dots in one row are always collinear, $0$ triangles; dots in exactly two rows always form a triangle (a line through two dots of one row is horizontal and misses the other row), and there are $3 \\cdot 2 \\cdot \\binom{4}{2} \\cdot 4 = 144$ such triples; one dot in each row gives $4^3 = 64$ triples, of which $4$ vertical and $4$ slanted ones are collinear, $56$ triangles. Total $144 + 56 = 200$ ✓. SUBTRACTING ONLY ROWS AND COLUMNS, $220 - 16 = 204$, misses the four slanted lines entirely ✗.',
    },
    {
      q: 'Twenty-five dots are arranged in a $5 \\times 5$ square grid, with neighboring dots one unit apart. How many squares, tilted squares included, have all four corners at dots of the grid?',
      answer: '$50$',
      solution:
        'Group the squares by bounding box. Every square, tilted or not, inscribes in a unique upright $k \\times k$ box, and each box hosts exactly $k$ squares: slide the square’s corner along the box’s bottom edge to one of $k$ spots (one spot is the upright square itself, the other $k - 1$ are tilted). The $k \\times k$ boxes sit in $(5 - k)^2$ positions, so the total is $\\sum_{k=1}^{4} k(5-k)^2 = 16 + 18 + 12 + 4 = 50$ ✓. Second route, by edge vectors: upright squares of side $p$ come in $(5 - p)^2$ positions, $16 + 9 + 4 + 1 = 30$; a tilted square with edge vector $(p, q)$, $p, q \\ge 1$, needs a $(p+q) \\times (p+q)$ box, giving $9$ squares for $(1,1)$, $4 + 4$ for $(1,2)$ and $(2,1)$, $1 + 1$ for $(1,3)$ and $(3,1)$, and $1$ for $(2,2)$ — $20$ tilted in all, and $30 + 20 = 50$ ✓. COUNTING ONLY UPRIGHT SQUARES gives $30$ and forgets the twenty tilted ones ✗.',
    },
    {
      q: 'Sixteen dots are arranged in a $4 \\times 4$ square grid, with neighboring dots one unit apart. Three of the dots are chosen at random, with every set of three dots equally likely. What is the probability that the three dots form a triangle, that is, do not all lie on one line?',
      answer: '$\\frac{129}{140}$',
      solution:
        'Count the collinear failures among the $\\binom{16}{3} = 560$ sets. Lines with four dots: $4$ rows, $4$ columns, and $2$ long diagonals, each holding $\\binom{4}{3} = 4$ triples, $40$ in all; lines with exactly three dots: $4$ short slope $\\pm 1$ diagonals, $4$ triples; no other line passes through three dots. So $560 - 44 = 516$ sets are triangles, probability $\\frac{516}{560} = \\frac{129}{140}$ ✓. Second route, recount the failures by pairs: for each pair of dots, count the extra dots on their line — each $4$-dot line has $\\binom{4}{2} = 6$ pairs with $2$ extras and each $3$-dot line has $3$ pairs with $1$ extra, giving $10 \\cdot 12 + 4 \\cdot 3 = 132$ (pair, extra) counts; every collinear triple is counted once per pair inside it, $3$ times, so there are $\\frac{132}{3} = 44$ collinear triples and the probability is $1 - \\frac{44}{560} = \\frac{129}{140}$ ✓. FORGETTING THE FOUR SHORT DIAGONALS leaves $\\frac{560 - 40}{560} = \\frac{13}{14}$ ✗.',
    },
  ],

  // slot 9 — divisibility of a random product (complement + second structure).
  //          Lanes: 4 dice mult of 4 -> 37/48; picks 1-9 mult of 3 -> 19/27;
  //          derived: 3 dice mult of 4 not 8 -> 7/24.
  [
    {
      q: 'Four standard dice are rolled. What is the probability that the product of the four numbers is a multiple of $4$?',
      answer: '$\\frac{37}{48}$',
      solution:
        'Track factors of $2$: an odd face gives none, a $2$ or $6$ gives one, a $4$ gives two. The product fails only when the dice supply at most one factor: all four odd, $3^4 = 81$ rolls, or exactly one die showing $2$ or $6$ with the rest odd, $4 \\cdot 2 \\cdot 3^3 = 216$ rolls. So $297$ of the $6^4 = 1296$ rolls fail, and the probability is $\\frac{999}{1296} = \\frac{37}{48}$ ✓. Second route, splitting the successes directly: rolls with at least one $4$ number $6^4 - 5^4 = 671$; rolls with no $4$ but at least two dice from $\\{2, 6\\}$ number $5^4 - 81 - 216 = 328$, since removing the all-odd and one-single rolls from the no-$4$ rolls leaves exactly them. Adding gives $671 + 328 = 999$, the same $\\frac{37}{48}$ ✓. SETTLING FOR ONE EVEN DIE, $1 - \\left(\\frac{1}{2}\\right)^4 = \\frac{15}{16}$, forgets that a lone $2$ or $6$ contributes only one factor of $2$ ✗.',
    },
    {
      q: 'Three people each independently pick a whole number from $1$ to $9$, every number equally likely. What is the probability that the product of the three numbers is a multiple of $3$?',
      answer: '$\\frac{19}{27}$',
      solution:
        'The product is a multiple of $3$ exactly when someone picks $3$, $6$, or $9$. Complement: each person avoids those three values with probability $\\frac{6}{9} = \\frac{2}{3}$, independently, so all three avoid them with probability $\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$, and the answer is $1 - \\frac{8}{27} = \\frac{19}{27}$ ✓. Second route, inclusion-exclusion on who picks a multiple of $3$: $3 \\cdot \\frac{1}{3} - 3 \\cdot \\frac{1}{9} + \\frac{1}{27} = 1 - \\frac{1}{3} + \\frac{1}{27} = \\frac{19}{27}$ ✓. ADDING THE THREE INDIVIDUAL CHANCES, $3 \\cdot \\frac{1}{3} = 1$, counts the picks where two or three people hit a multiple of $3$ several times over and lands on a certainty that plainly is not there ✗.',
    },
    {
      q: 'Three standard dice are rolled. What is the probability that the product of the three numbers is a multiple of $4$ but not a multiple of $8$?',
      answer: '$\\frac{7}{24}$',
      solution:
        'The product must carry exactly two factors of $2$; an odd face carries none, a $2$ or $6$ carries one, and a $4$ carries two. Exactly two factors arise in two ways: one die shows $4$ and the other two are odd, $3 \\cdot 1 \\cdot 3^2 = 27$ rolls, or two dice come from $\\{2, 6\\}$ and the third is odd, $\\binom{3}{2} \\cdot 2^2 \\cdot 3 = 36$ rolls. So $\\frac{63}{216} = \\frac{7}{24}$ ✓. Second route, by a bookkeeping polynomial: encode one die as $3 + 2x + x^2$, where the exponent of $x$ records the factors of $2$ a face contributes; the rolls with exactly two factors are counted by the coefficient of $x^2$ in $(3 + 2x + x^2)^3$, which is $3 \\cdot 3^2 \\cdot 1 + 3 \\cdot 3 \\cdot 2^2 = 27 + 36 = 63$, and $\\frac{63}{216} = \\frac{7}{24}$ ✓. STOPPING AT "MULTIPLE OF $4$" gives $\\frac{135}{216} = \\frac{5}{8}$ — a $4$ paired with another even die tips the product to a multiple of $8$, and all such rolls must be thrown out ✗.',
    },
  ],

  // slot 10 — expected special sides of a random polygon (linearity + double count).
  //          Lanes: 10 points choose 5 -> 20/9; 12 chairs choose 5 adjacency -> 5/3;
  //          derived: 8 points choose 4, sides NOT short -> 16/7.
  [
    {
      q: 'Ten points are equally spaced around a circle. Five of them are chosen at random, with every set of five equally likely, and joined in order around the circle to make a pentagon. A side of the pentagon is short if it joins two of the ten points that are next to each other on the circle. What is the expected number of short sides?',
      answer: '$\\frac{20}{9}$',
      solution:
        'One piece per neighboring pair of points; there are $10$ such pairs, and a pair becomes a short side exactly when both its points are chosen, since no point can sit between neighbors. Choosing the five points one membership at a time, a fixed pair is entirely chosen with probability $\\frac{5}{10} \\cdot \\frac{4}{9} = \\frac{2}{9}$, and linearity gives $10 \\cdot \\frac{2}{9} = \\frac{20}{9}$ ✓. Second route, a global double count of (selection, short side) incidences: a fixed pair is inside $\\binom{8}{3} = 56$ of the $\\binom{10}{5} = 252$ selections, so the incidences total $10 \\cdot 56 = 560$, an average of $\\frac{560}{252} = \\frac{20}{9}$ short sides per pentagon ✓. MULTIPLYING BY THE PENTAGON’S FIVE SIDES, $5 \\cdot \\frac{2}{9} = \\frac{10}{9}$, puts the indicator on the wrong objects — any of the ten neighbor pairs can turn into a side, and the count of short sides ranges over all of them ✗.',
    },
    {
      q: 'Twelve chairs are set in a row, and five of them are occupied at random, with every set of five chairs equally likely. What is the expected number of pairs of neighboring chairs that are both occupied?',
      answer: '$\\frac{5}{3}$',
      solution:
        'One piece per neighboring pair of chairs; a row of $12$ has $11$ of them. Assigning the five occupants one chair-membership at a time, a fixed pair is fully occupied with probability $\\frac{5}{12} \\cdot \\frac{4}{11} = \\frac{5}{33}$, so linearity gives $11 \\cdot \\frac{5}{33} = \\frac{5}{3}$ ✓. Second route, by double counting (seating, occupied pair) incidences: a fixed pair lies inside $\\binom{10}{3} = 120$ of the $\\binom{12}{5} = 792$ seatings, so the incidences total $11 \\cdot 120 = 1320$, an average of $\\frac{1320}{792} = \\frac{5}{3}$ ✓. USING $12$ PAIRS, as if the last chair wrapped around to meet the first, gives $12 \\cdot \\frac{5}{33} = \\frac{20}{11}$ — a row has one fewer neighboring pair than a circle ✗.',
    },
    {
      q: 'Eight points are equally spaced around a circle. Four of them are chosen at random, with every set of four equally likely, and joined in order around the circle to make a quadrilateral. A side is short if it joins two of the eight points that are next to each other on the circle. What is the expected number of sides that are not short?',
      answer: '$\\frac{16}{7}$',
      solution:
        'The quadrilateral always has exactly $4$ sides, so count the short ones and subtract. There are $8$ neighboring pairs, and each becomes a short side exactly when both its points are chosen, probability $\\frac{4}{8} \\cdot \\frac{3}{7} = \\frac{3}{14}$, so the expected number of short sides is $8 \\cdot \\frac{3}{14} = \\frac{12}{7}$ and the expected number of other sides is $4 - \\frac{12}{7} = \\frac{16}{7}$ ✓. Second route, directly by chord length over the $\\binom{8}{4} = 70$ selections: a pair two steps apart is a side exactly when both points are chosen and the point between them is not, $\\binom{5}{2} = 10$ selections, for each of $8$ pairs; a pair three steps apart needs its two-point near arc empty ($\\binom{4}{2} = 6$) or its entire far arc empty ($1$), $7$ selections, for each of $8$ pairs; a diameter pair needs one three-point arc empty, $2 \\cdot \\binom{3}{2} = 6$ selections, for each of $4$ pairs. Adding, $\\frac{8 \\cdot 10 + 8 \\cdot 7 + 4 \\cdot 6}{70} = \\frac{160}{70} = \\frac{16}{7}$ ✓. SUBTRACTING FROM $8$, $8 - \\frac{12}{7} = \\frac{44}{7}$, confuses the eight neighbor pairs with the sides — the quadrilateral only ever has four ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 15,
  worksheet,
}
