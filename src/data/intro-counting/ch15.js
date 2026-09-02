// Counting & Probability — Chapter 15: More Challenging Problems
// All problems, explanations, and examples are original MathQuest content.

const s152 = {
  id: '15.2',
  title: 'Problems',
  learn: {
    concepts: [
      {
        heading: 'Say what one object is, or what one outcome is',
        body: 'A hard problem never tells you which chapter it came from, so start by writing one sentence that names the thing: "one object is a string of $5$ symbols", "one outcome is an ordered list of $3$ die rolls". That sentence settles the conventions the problem is hiding — distinguishable or not, ordered or not, repeats allowed or not, rotations the same or not. For probability, name the event in the same breath: "the event is that the third draw is red." If you cannot write the sentence, you are not ready to count, and any formula you reach for is a guess.',
      },
      {
        heading: 'Shrink it until you can list it',
        body: 'Before trusting a formula on $10$ flips or $8$ people, run the same idea on $3$ flips or $4$ people and list every object by hand. The tiny case does three jobs: it shows you the structure (maybe the answers go $1, 2, 3, 5, 8$ and a recursion is hiding), it catches an off-by-one at a boundary, and it tells you whether your formula counted each object once. A method that gives the wrong number on the small case is wrong on the big one too, no matter how confident it felt.',
      },
      {
        heading: 'Choose the tool by the shape of the condition',
        body: 'Casework fits a condition that splits cleanly into piles ("by how many corners are used"). Complementary counting fits "at least one" and "not all", because the opposite is tiny — but if two bad things can happen at once, add back their overlap. A bijection fits an object with no formula: match it to something you can count, like matching a sum to a row of dots with cuts. Symmetry fits a question where the outcomes trade places — if the $6$ orders of three distinct values are equally likely, the increasing order has probability $\\frac{1}{6}$ with no counting at all. Try each tool for ten seconds; the right one makes the problem shorter.',
      },
      {
        heading: 'Probability: pick a viewpoint and keep it. Expected value: split it',
        body: 'Count the sample space and the event the same way — both as ordered lists or both as unordered sets — because mixing them silently changes the denominator. Draws without replacement are fine as either, as long as you do not switch halfway. For expected value, do not fight the whole random thing at once: write the quantity as a sum of small pieces (one per position, one per pair, one per value), find the expected value of each piece, and add. This works even when the pieces depend on each other, which is the whole reason it is powerful.',
      },
    ],
    examples: [
      {
        problem: 'Nine points are equally spaced around a circle. Three of them are chosen at random. What is the probability that the triangle they form contains the center of the circle?',
        steps: [
          'One outcome is a $3$-point subset, so there are $\\binom{9}{3} = 84$ equally likely outcomes; the event is awkward to build directly, so aim for the complement.',
          'A triangle misses the center exactly when all three points fit inside a half-circle, and with $9$ points no two are directly opposite, so "half-circle" means a run of at most $5$ consecutive points.',
          'Count the bad triangles by symmetry: walk clockwise and call the first point of the run its leader; the other two points must lie among the next $4$ points clockwise, giving $\\binom{4}{2} = 6$ triangles per leader.',
          'Every bad triangle has exactly one leader, so there are $9 \\cdot 6 = 54$ bad triangles, $84 - 54 = 30$ good ones, and the probability is $\\frac{30}{84} = \\frac{5}{14}$.',
          'Small check with $5$ points: a run of at most $3$ points gives $5 \\cdot \\binom{2}{2} = 5$ bad triangles out of $\\binom{5}{3} = 10$, and a quick sketch confirms exactly half the triangles contain the center.',
        ],
        answer: 'The probability is $\\frac{5}{14}$.',
      },
      {
        problem: 'Six people check their hats, and the hats are handed back at random, one to each person. Two people form a swapped pair if each of them is holding the other one’s hat. What is the expected number of swapped pairs?',
        steps: [
          'The quantity is a sum of pieces: for each of the $\\binom{6}{2} = 15$ pairs of people, write $1$ if that pair is swapped and $0$ if not; the number of swapped pairs is the sum of these $15$ pieces.',
          'Fix one pair, say Ana and Ben; the pieces depend on each other, but expected value adds anyway, so all we need is the probability this one pair is swapped.',
          'Ana gets Ben’s hat with probability $\\frac{1}{6}$, and then Ben gets Ana’s hat with probability $\\frac{1}{5}$, a dependent second draw; the pair is swapped with probability $\\frac{1}{6} \\cdot \\frac{1}{5} = \\frac{1}{30}$.',
          'Adding the $15$ pieces gives $15 \\cdot \\frac{1}{30} = \\frac{1}{2}$.',
        ],
        answer: 'The expected number of swapped pairs is $\\frac{1}{2}$.',
      },
      {
        problem: 'A $6$-meter ribbon is cut at two points chosen independently and uniformly at random along its length, making three pieces. What is the probability that every piece is shorter than $4$ meters?',
        steps: [
          'Name the outcome: the two cut positions $u$ and $v$, each anywhere from $0$ to $6$, so outcomes are points of a $6 \\times 6$ square and probability is area divided by $36$.',
          'The event "every piece is shorter than $4$" has a small complement: some piece is at least $4$ meters, and since the pieces total $6$, two pieces can never both be that long — the three bad events do not overlap.',
          'The left piece is at least $4$ when both cuts are past the $4$-meter mark: a $2 \\times 2$ corner of the square, area $4$. By symmetry the right piece gives another $4$.',
          'The middle piece is at least $4$ when the cuts are $4$ or more apart: two triangles with legs $2$, total area $4$ again.',
          'So the bad area is $12$ out of $36$, and the probability that every piece is short is $1 - \\frac{12}{36} = \\frac{2}{3}$.',
        ],
        answer: 'The probability is $\\frac{2}{3}$.',
      },
    ],
  },
  problems: [
    {
      q: 'How many of the integers from $1$ to $999$ have all of their digits odd?',
      choices: ['$125$', '$155$', '$150$', '$500$'],
      answer: 1,
      solution: 'Name the object: a one-, two-, or three-digit integer built only from the five odd digits $1, 3, 5, 7, 9$. Sort by length: $5$ one-digit numbers, $5 \\cdot 5 = 25$ two-digit numbers, and $5 \\cdot 5 \\cdot 5 = 125$ three-digit numbers, for $5 + 25 + 125 = 155$ in all; there is no leading-zero worry, since $0$ is not odd. $125$ counts only the three-digit numbers, $150$ forgets the one-digit numbers, and $500$ makes only the leading digit odd.',
    },
    {
      q: 'A standard die is rolled $4$ times. A roll is called a step up if it is strictly larger than the roll just before it (the first roll cannot be a step up). What is the expected number of steps up?',
      choices: ['$\\frac{5}{12}$', '$\\frac{3}{2}$', '$\\frac{5}{4}$', '$\\frac{5}{3}$'],
      answer: 2,
      solution: 'Split into pieces: there are $3$ neighboring pairs of rolls, and each is a step up with the same probability. Of the $36$ ordered results for a pair, $6$ are ties, and the remaining $30$ split evenly by symmetry, so a strict increase has probability $\\frac{15}{36} = \\frac{5}{12}$. Adding three pieces gives $3 \\cdot \\frac{5}{12} = \\frac{5}{4}$. The pieces overlap in the rolls they use, but expected value adds anyway. $\\frac{3}{2}$ forgets the ties, $\\frac{5}{3}$ counts four pairs, and $\\frac{5}{12}$ is one pair only.',
    },
    {
      q: 'How many ordered triples of nonnegative integers $(a, b, c)$ satisfy $a + b + c = 12$ with each of $a$, $b$, and $c$ at most $6$?',
      choices: ['$7$', '$28$', '$70$', '$91$'],
      answer: 1,
      solution: 'Without the cap, stars and bars gives $\\binom{14}{2} = 91$ triples. Now subtract the ones where some entry is $7$ or more: if $a \\ge 7$, write $a = a\' + 7$ and count solutions of $a\' + b + c = 5$, which is $\\binom{7}{2} = 21$; the same for $b$ and for $c$. Two entries of $7$ or more would need a sum of at least $14$, so nothing was subtracted twice, and the answer is $91 - 3 \\cdot 21 = 28$. $91$ ignores the cap; $70$ removes only one entry’s overflow; $7$ comes from shifting by $6$ instead of $7$, which also throws out the legal value $6$.',
    },
    {
      q: 'How many six-digit numbers use each of the digits $1, 1, 2, 2, 3, 3$ exactly once and have no two equal digits next to each other?',
      choices: ['$30$', '$36$', '$54$', '$90$'],
      answer: 0,
      solution: 'There are $\\frac{6!}{2!\\,2!\\,2!} = 90$ arrangements in all. Subtract those with a glued pair: gluing the two $1$’s into one block leaves $5$ items with two repeated pairs, $\\frac{5!}{2!\\,2!} = 30$, and likewise for $2$’s and $3$’s, so $3 \\cdot 30 = 90$ — but arrangements with two glued pairs were subtracted twice. Add those back: $3 \\cdot \\frac{4!}{2!} = 36$. Now arrangements with all three pairs glued have been counted $1 - 3 + 3$ times, so subtract them once: $3! = 6$. The count is $90 - 90 + 36 - 6 = 30$. $90$ skips the restriction, $36$ stops after adding back, and $54$ is $90 - 36$.',
    },
    {
      q: 'Four standard dice are rolled. What is the probability that the four numbers rolled are all different and the largest of them is $6$?',
      choices: ['$\\frac{5}{108}$', '$\\frac{5}{27}$', '$\\frac{5}{18}$', '$\\frac{671}{1296}$'],
      answer: 1,
      solution: 'One outcome is an ordered list of four rolls, $6^4 = 1296$ in all. Build a favorable one: choose which die shows the $6$ ($4$ ways), then fill the other three dice, in order, with different values from $1$ through $5$, $5 \\cdot 4 \\cdot 3 = 60$ ways, for $4 \\cdot 60 = 240$ outcomes and probability $\\frac{240}{1296} = \\frac{5}{27}$. Symmetry says the same: of the $360$ rolls with four different values, the set of values is a random $4$-subset of six, which contains $6$ with probability $\\frac{4}{6}$. $\\frac{5}{18}$ forgets to require the $6$, $\\frac{5}{108}$ puts the $6$ on one particular die, and $\\frac{671}{1296}$ is the chance that some die shows a $6$ with no condition on the others.',
    },
    {
      q: 'A token starts at $0$ on a number line. Each second it moves $1$ unit right or $1$ unit left, each with probability $\\frac{1}{2}$, independently of earlier moves. What is the probability that after $6$ seconds the token is back at $0$ and was never to the left of $0$ at any time?',
      choices: ['$\\frac{1}{64}$', '$\\frac{1}{16}$', '$\\frac{5}{16}$', '$\\frac{5}{64}$'],
      answer: 3,
      solution: 'One outcome is a string of $6$ moves, $2^6 = 64$ equally likely. Being back at $0$ needs exactly $3$ rights and $3$ lefts, and "never left of $0$" means that at every point of the string, the rights so far are at least as many as the lefts so far. Shrink and list: writing R and L, the string must start with R, and the second L cannot come before the second R, nor the third L before the third R; checking the $\\binom{6}{3} = 20$ balanced strings leaves exactly RRRLLL, RRLRLL, RRLLRL, RLRRLL, RLRLRL. So the probability is $\\frac{5}{64}$. $\\frac{5}{16}$ forgets the "never left of $0$" condition and keeps all $20$ balanced strings, $\\frac{1}{16}$ misses one of the five strings in the list, and $\\frac{1}{64}$ counts only RRRLLL.',
    },
    {
      q: 'A fair coin is flipped $7$ times. What is the probability that the number of heads is a multiple of $3$? (Zero heads counts, since $0$ is a multiple of $3$.)',
      choices: ['$\\frac{1}{3}$', '$\\frac{43}{128}$', '$\\frac{35}{128}$', '$\\frac{21}{64}$'],
      answer: 1,
      solution: 'Sort by the number of heads: $0$, $3$, or $6$ heads out of $7$ flips. The counts are $\\binom{7}{0} = 1$, $\\binom{7}{3} = 35$, and $\\binom{7}{6} = 7$, so $43$ of the $2^7 = 128$ sequences qualify and the probability is $\\frac{43}{128}$. $\\frac{1}{3}$ guesses that the three possible remainders are equally likely, which is not true for a small number of flips; $\\frac{35}{128}$ counts only exactly $3$ heads; $\\frac{21}{64}$ drops the all-tails sequence.',
    },
    {
      q: 'A number $x$ is chosen uniformly at random from $0$ to $3$ and, independently, a number $y$ is chosen uniformly at random from $0$ to $2$. What is the probability that $x$ and $y$ differ by less than $1$?',
      fig: {
        view: [-0.5, -0.5, 3.5, 2.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [1, 0], [3, 2], [1, 2], [0, 1]] },
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 2], [0, 2]], fill: false },
          { t: 'seg', a: [0, 1], b: [1, 2], dash: true },
          { t: 'seg', a: [1, 0], b: [3, 2], dash: true },
          { t: 'label', p: [0, 0], text: 'O', dx: -10, dy: 12 },
          { t: 'label', p: [3, 0], text: '(3, 0)', dx: 4, dy: 14 },
          { t: 'label', p: [0, 2], text: '(0, 2)', dx: -18, dy: -6 },
          { t: 'label', p: [3, 2], text: '(3, 2)', dx: 8, dy: -6 },
        ],
      },
      answer: 2,
      choices: ['$\\frac{5}{12}$', '$\\frac{1}{2}$', '$\\frac{7}{12}$', '$\\frac{2}{3}$'],
      solution: 'The outcome is a point $(x, y)$ in a $3 \\times 2$ rectangle of area $6$, and the event is the band between the lines $y = x + 1$ and $y = x - 1$. Count the complement: above the upper line is the triangle with corners $(0, 1)$, $(0, 2)$, $(1, 2)$, area $\\frac{1}{2}$; below the lower line is the triangle with corners $(1, 0)$, $(3, 0)$, $(3, 2)$, area $2$. The band has area $6 - \\frac{5}{2} = \\frac{7}{2}$, so the probability is $\\frac{7}{2} \\div 6 = \\frac{7}{12}$. $\\frac{5}{12}$ is the complement, $\\frac{1}{2}$ is a guess that the two lines split the rectangle evenly, and $\\frac{2}{3}$ drops the small triangle.',
    },
    {
      q: 'How many four-digit positive integers have four different digits that, read from left to right, are neither strictly increasing nor strictly decreasing?',
      choices: ['$4116$', '$4284$', '$4410$', '$4200$'],
      answer: 3,
      solution: 'Four-digit numbers with four different digits: $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. A strictly increasing number is determined by its set of digits, which cannot include $0$ (it would have to come first), so there are $\\binom{9}{4} = 126$ of them. A strictly decreasing number is also determined by its set, and here $0$ is allowed since it lands last, so there are $\\binom{10}{4} = 210$. No number is both, so the answer is $4536 - 126 - 210 = 4200$. $4284$ forbids $0$ in the decreasing case too, $4116$ allows it in the increasing case, and $4410$ subtracts only the increasing numbers.',
    },
    {
      q: 'Five boys and five girls sit in random order around a round table with $10$ seats. Two people are neighbors if they sit in adjacent seats. What is the expected number of pairs of neighbors that consist of one boy and one girl?',
      choices: ['$\\frac{50}{9}$', '$5$', '$\\frac{25}{9}$', '$\\frac{40}{9}$'],
      answer: 0,
      solution: 'There are $10$ neighboring pairs of seats around the table, and by symmetry each is a boy-girl pair with the same probability. For one fixed pair of seats, the first seat holds a boy with probability $\\frac{5}{10}$ and then the second holds a girl with probability $\\frac{5}{9}$, and the girl-then-boy order gives the same, so the probability is $2 \\cdot \\frac{5}{10} \\cdot \\frac{5}{9} = \\frac{5}{9}$. Adding the $10$ pieces gives $\\frac{50}{9}$, and it does not matter that the pieces are dependent. $5$ treats the second seat as a fair coin, $\\frac{25}{9}$ forgets the girl-then-boy order, and $\\frac{40}{9}$ counts same-gender pairs instead.',
    },
  ],
}

const challenge = [
  {
    q: 'How many strings of $5$ symbols, each symbol chosen from $X$, $Y$, and $Z$, have no two equal symbols next to each other and use all three symbols at least once?',
    choices: ['$36$', '$42$', '$45$', '$48$'],
    answer: 1,
    solution: 'First count strings with no two equal neighbors: $3$ choices for the first symbol and $2$ for each later one, $3 \\cdot 2^4 = 48$. Now remove the ones that miss a symbol. A string that uses only two symbols and never repeats a neighbor must alternate, so there are exactly $2$ such strings for each of the $3$ pairs of symbols, $6$ in all, and a string cannot miss two symbols. The answer is $48 - 6 = 42$. $48$ skips the "all three" condition, $45$ removes one string per missing symbol instead of two, and $36$ removes four per pair.',
  },
  {
    q: 'How many ordered pairs $(A, B)$ of subsets of $\\{1, 2, 3, 4, 5\\}$ have $A$ a proper subset of $B$, meaning that every element of $A$ is in $B$ and $B$ has at least one element that $A$ does not?',
    choices: ['$496$', '$211$', '$243$', '$992$'],
    answer: 1,
    solution: 'Match each pair to a label on every element: an element is in neither set, in $B$ only, or in both, and the condition $A \\subseteq B$ forbids the fourth possibility, "in $A$ only." Every element gets one of $3$ labels independently, so there are $3^5 = 243$ pairs with $A \\subseteq B$. Exactly $2^5 = 32$ of those have $A = B$ (every element labeled "neither" or "both"), so the proper ones number $243 - 32 = 211$. $243$ allows $A = B$, $992 = 32 \\cdot 31$ counts every ordered pair of different subsets whether or not one contains the other, and $496$ is the unordered version of that.',
  },
  {
    q: 'Three standard dice are rolled. What is the probability that the sum of the three numbers is a multiple of $3$?',
    choices: ['$\\frac{1}{3}$', '$\\frac{35}{108}$', '$\\frac{25}{108}$', '$\\frac{19}{27}$'],
    answer: 0,
    solution: 'Use symmetry on the last die: whatever the first two dice show, exactly $2$ of the $6$ faces of the third die make the total a multiple of $3$, because the faces $1$ through $6$ leave each of the remainders $0, 1, 2$ (on division by $3$) exactly twice. So the probability is $\\frac{2}{6} = \\frac{1}{3}$ with no casework. Checking by the sums: the totals $3, 6, 9, 12, 15, 18$ occur in $1, 10, 25, 25, 10, 1$ of the $216$ rolls, and $\\frac{72}{216} = \\frac{1}{3}$. $\\frac{35}{108}$ drops the totals $3$ and $18$, $\\frac{25}{108}$ keeps only $9$ and $12$, and $\\frac{19}{27}$ answers whether some die shows a $3$ or a $6$.',
  },
  {
    q: 'The numbers $1$ through $8$ are written in a row in random order. Two numbers are adjacent if they are next to each other in the row. What is the expected number of adjacent pairs whose two numbers differ by exactly $1$?',
    choices: ['$\\frac{1}{4}$', '$\\frac{7}{8}$', '$\\frac{7}{4}$', '$2$'],
    answer: 2,
    solution: 'Split into one piece per pair of neighboring positions; there are $7$ of them, and by symmetry each holds two numbers differing by $1$ with the same probability. Fix one such pair of positions: the ordered pair of numbers in them is equally likely to be any of the $8 \\cdot 7 = 56$ ordered pairs of different numbers, and $14$ of those differ by $1$ (the $7$ pairs $\\{k, k+1\\}$, each in either order), so the probability is $\\frac{14}{56} = \\frac{1}{4}$. Adding $7$ pieces gives $\\frac{7}{4}$; the pieces are dependent, but expected values add anyway. $\\frac{7}{8}$ counts each pair $\\{k, k+1\\}$ in only one order, $2$ uses $8$ pairs of positions, and $\\frac{1}{4}$ is a single piece.',
  },
  {
    q: 'How many four-digit positive integers have the property that the sum of the first two digits equals the sum of the last two digits?',
    choices: ['$285$', '$330$', '$615$', '$670$'],
    answer: 2,
    solution: 'Work case by case on the common sum $s$. For a pair of digits with no leading-digit restriction, the number of ways to make sum $s$ is $s + 1$ for $s \\le 9$ and $19 - s$ for $10 \\le s \\le 18$. The first pair cannot start with $0$: for $s \\le 9$ that kills exactly one pair ($0$ then $s$), leaving $s$ ways, and for $s \\ge 10$ nothing is lost. Multiply and add: $\\sum_{s=1}^{9} s(s + 1) = 330$ and $\\sum_{s=10}^{18} (19 - s)^2 = 285$, total $615$. $670$ lets the number start with $0$, and $330$ and $285$ each keep only half of the sums.',
  },
  {
    q: 'How many subsets of $\\{1, 2, 3, \\ldots, 10\\}$ contain more odd numbers than even numbers? (The empty set has no odd numbers and no even numbers.)',
    choices: ['$252$', '$386$', '$512$', '$638$'],
    answer: 1,
    solution: 'Swapping each odd number $k$ with the even number $k + 1$ turns a subset with more odds into one with more evens and back, so those two kinds of subsets are equally numerous, and the leftover subsets have the same number of odds as evens. Count the balanced ones: $j$ of the $5$ odds and $j$ of the $5$ evens, $\\sum_{j} \\binom{5}{j}^2 = \\binom{10}{5} = 252$, by the identity that choosing $5$ of $10$ is choosing $j$ from one half and $5 - j$ from the other. So the answer is $\\frac{1024 - 252}{2} = 386$. $512$ assumes there are no balanced subsets, $638$ counts "at least as many odds", and $252$ is the balanced count itself.',
  },
  {
    q: 'A point is chosen uniformly at random inside a square of side length $2$. What is the expected value of its distance to the nearest side of the square?',
    choices: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
    answer: 0,
    solution: 'Draw both diagonals; they cut the square into four congruent triangles, and inside the bottom triangle the nearest side is the bottom, so the distance is just the height $y$ above it. By symmetry all four triangles give the same average, so the answer is the average height of a point in the triangle with corners $(0, 0)$, $(2, 0)$, $(1, 1)$. The average of a coordinate over a triangle is that coordinate of the centroid, which is $\\frac{0 + 0 + 1}{3} = \\frac{1}{3}$. $\\frac{1}{2}$ is the average distance to one fixed side, $\\frac{1}{4}$ halves that for no reason, and $\\frac{2}{3}$ comes from a triangle whose apex is at height $2$, forgetting that the diagonals cross at height $1$.',
  },
  {
    q: 'A $3 \\times 3$ grid has $9$ unit squares. Three of the squares are chosen at random and shaded. What is the probability that no two shaded squares share a side?',
    choices: ['$\\frac{3}{14}$', '$\\frac{5}{21}$', '$\\frac{1}{4}$', '$\\frac{11}{42}$'],
    answer: 3,
    solution: 'There are $\\binom{9}{3} = 84$ selections. Sort the good ones by whether the center is shaded. Center shaded: every edge-middle square touches it, so the other two must be corners, $\\binom{4}{2} = 6$ ways, and corners never touch. Center not shaded: three corners, $4$ ways; two corners and one edge-middle, which works only for two corners on the same side of the grid with the edge-middle on the opposite side, $4$ ways; one corner and the two edge-middles it does not touch, $4$ ways; three edge-middles, $4$ ways. That is $6 + 16 = 22$, so the probability is $\\frac{22}{84} = \\frac{11}{42}$. $\\frac{3}{14}$ drops the two-corners-one-edge case, $\\frac{5}{21}$ counts only $4$ selections with the center shaded, and $\\frac{1}{4}$ misses one selection somewhere.',
  },
  {
    q: 'A frog starts at $0$ on a number line. Each second it jumps forward $1$ unit or $2$ units, each with probability $\\frac{1}{2}$, independently of earlier jumps. What is the probability that the frog lands on $4$ at some point?',
    choices: ['$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{11}{16}$', '$\\frac{3}{4}$'],
    answer: 2,
    solution: 'Let $p_n$ be the probability of landing on $n$. To land on $n$ the frog must first land on $n - 1$ and then jump $1$, or land on $n - 2$ and then jump $2$, and these routes cannot both happen, so $p_n = \\frac{1}{2} p_{n-1} + \\frac{1}{2} p_{n-2}$. Start small: $p_0 = 1$ and $p_1 = \\frac{1}{2}$, then $p_2 = \\frac{3}{4}$, $p_3 = \\frac{5}{8}$, and $p_4 = \\frac{1}{2}\\left(\\frac{5}{8} + \\frac{3}{4}\\right) = \\frac{11}{16}$. $\\frac{5}{8}$ and $\\frac{3}{4}$ are $p_3$ and $p_2$, one step short, and $\\frac{1}{2}$ is only the chance that one particular jump has length $1$.',
  },
  {
    q: 'The numbers $1$ through $7$ are written in a row in random order. A number is a peak if it is larger than every number next to it (a number at an end has only one neighbor). What is the expected number of peaks?',
    choices: ['$\\frac{8}{3}$', '$\\frac{7}{3}$', '$\\frac{13}{6}$', '$\\frac{7}{2}$'],
    answer: 0,
    solution: 'One piece per position. An interior position is a peak when its number is the largest of the three numbers in that window, and by symmetry each of the three is the largest equally often, so the probability is $\\frac{1}{3}$. An end position looks at a window of two numbers, so it is a peak with probability $\\frac{1}{2}$. Add: $5 \\cdot \\frac{1}{3} + 2 \\cdot \\frac{1}{2} = \\frac{8}{3}$. $\\frac{7}{3}$ treats the ends like interior positions, $\\frac{7}{2}$ treats every position like an end, and $\\frac{13}{6}$ drops one of the ends.',
  },
  {
    q: 'A fair coin is flipped $10$ times. What is the probability that at some point three consecutive flips are all heads?',
    choices: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{63}{128}$', '$\\frac{65}{128}$'],
    answer: 3,
    solution: 'Count the complement, sequences with no $HHH$, and let $a_n$ be how many there are for $n$ flips. Sort by how the sequence ends: it ends in $T$, in $HT$, or in $HHT$, with the part before that being any shorter good sequence, so $a_n = a_{n-1} + a_{n-2} + a_{n-3}$. Small cases: $a_1 = 2$, $a_2 = 4$, $a_3 = 7$, then $13, 24, 44, 81, 149, 274, 504$. So $1024 - 504 = 520$ sequences contain $HHH$, and the probability is $\\frac{520}{1024} = \\frac{65}{128}$. $\\frac{63}{128}$ reads $504$ as the number of good sequences, $\\frac{1}{2}$ is a guess from "about half", and $\\frac{1}{8}$ is the chance for one fixed window of three flips.',
  },
  {
    q: 'Five cards numbered $1$ through $5$ are shuffled and laid out in a row from left to right. A card is a record if its number is larger than the number on every card to its left; the first card is always a record. What is the expected number of records?',
    choices: ['$1$', '$\\frac{25}{12}$', '$\\frac{137}{60}$', '$\\frac{5}{2}$'],
    answer: 2,
    solution: 'One piece per position. The card in position $k$ is a record exactly when it is the largest of the first $k$ cards, and by symmetry each of those $k$ cards is the largest equally often, so the probability is $\\frac{1}{k}$. The pieces depend on one another, but expected values add: $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{5} = \\frac{137}{60}$. $\\frac{5}{2}$ gives every position a coin flip, $\\frac{25}{12}$ stops at four cards, and $1$ counts only the guaranteed first record.',
  },
]

const worksheet = [
  {
    q: 'A fair coin is flipped $5$ times. A run is a maximal block of consecutive flips that all show the same face; for example, $HHTHH$ has three runs. What is the expected number of runs?',
    answer: '$3$',
    solution: 'The first flip starts a run, and each of the $4$ later flips starts a new run exactly when it differs from the flip before it, which happens with probability $\\frac{1}{2}$. So the expected number of runs is $1 + 4 \\cdot \\frac{1}{2} = 3$. Listing all $32$ sequences and averaging gives the same $\\frac{96}{32} = 3$.',
  },
  {
    q: 'A jar holds $3$ red, $3$ blue, and $3$ green tokens. Three tokens are drawn at random at the same time. What is the probability that the three tokens are either all the same color or all different colors?',
    answer: '$\\frac{5}{14}$',
    solution: 'There are $\\binom{9}{3} = 84$ equally likely sets of three tokens. All the same color: one color’s whole trio, $3$ sets. All different colors: one token of each color, $3 \\cdot 3 \\cdot 3 = 27$ sets. The two events cannot overlap, so add them: $\\frac{30}{84} = \\frac{5}{14}$. The remaining $54$ sets are the two-and-one splits.',
  },
  {
    q: 'How many ordered pairs of positive integers $(m, n)$ satisfy $m + n \\le 20$?',
    answer: '$190$',
    solution: 'Match each pair with the triple $(m, n, k)$ where $k = 21 - m - n$ is the slack; the condition $m + n \\le 20$ says exactly that $k \\ge 1$, so the pairs correspond to the positive solutions of $m + n + k = 21$, and stars and bars with three positive parts gives $\\binom{20}{2} = 190$. Casework on the sum $s = m + n$ agrees: $s$ runs from $2$ to $20$ with $s - 1$ pairs each, and $1 + 2 + \\cdots + 19 = 190$.',
  },
  {
    q: 'Four standard dice are rolled. A die is called lonely if the number it shows appears on none of the other three dice. What is the expected number of lonely dice?',
    answer: '$\\frac{125}{54}$',
    solution: 'One piece per die. A fixed die is lonely when each of the other three dice avoids its number, and each does so with probability $\\frac{5}{6}$ independently, so the probability is $\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$. The four pieces are not independent (if three dice match, the fourth is automatically lonely), but expected values add: $4 \\cdot \\frac{125}{216} = \\frac{125}{54}$. Counting lonely dice across all $1296$ rolls and averaging gives $\\frac{3000}{1296} = \\frac{125}{54}$ as well.',
  },
  {
    q: 'The six letters $A, B, C, D, E, F$ are arranged in a row in random order. What is the probability that $A$ appears somewhere before both $B$ and $C$, and $D$ appears somewhere before $E$?',
    answer: '$\\frac{1}{6}$',
    solution: 'Look only at the letters $A$, $B$, $C$: their $6$ relative orders are equally likely, and $A$ is first in $2$ of them, so that part has probability $\\frac{1}{3}$. The relative order of $D$ and $E$ involves different letters, so it is independent of that, and $D$ before $E$ has probability $\\frac{1}{2}$. Multiply: $\\frac{1}{3} \\cdot \\frac{1}{2} = \\frac{1}{6}$. Directly, $120$ of the $720$ arrangements work.',
  },
  {
    q: 'A number $x$ is chosen uniformly at random from $0$ to $4$ and, independently, a number $y$ is chosen uniformly at random from $0$ to $2$. What is the probability that $y$ is larger than $x$ but smaller than $2x$?',
    answer: '$\\frac{1}{8}$',
    solution: 'The outcome is a point in a $4 \\times 2$ rectangle of area $8$, and the event is the wedge between the lines $y = x$ and $y = 2x$. Both lines leave the rectangle through the top edge, $y = 2x$ at $x = 1$ and $y = x$ at $x = 2$, so the wedge is the triangle with corners $(0, 0)$, $(1, 2)$, and $(2, 2)$: base $1$ along the top edge and height $2$, area $1$. The probability is $\\frac{1}{8}$. Running either line to the right edge of the rectangle instead of the top edge gives the wrong region.',
  },
  {
    q: 'How many ordered triples of integers $(a, b, c)$ satisfy $1 \\le a < b \\le c \\le 10$?',
    answer: '$165$',
    solution: 'Replace $c$ by $c + 1$: the condition becomes $1 \\le a < b < c + 1 \\le 11$, three strictly increasing numbers from $1$ to $11$, and every such triple comes from exactly one original triple. So the count is $\\binom{11}{3} = 165$. The same number falls out of casework on $c$: for each $c$ there are $\\binom{c}{2}$ choices of $a < b \\le c$, and $\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{10}{2} = \\binom{11}{3}$ by the hockey stick identity.',
  },
  {
    q: 'Sixteen dots are arranged in a $4 \\times 4$ square grid, with neighboring dots one unit apart. How many triangles have all three corners at dots of the grid?',
    answer: '$516$',
    solution: 'Any $3$ dots make a triangle unless they lie on a line, so start with $\\binom{16}{3} = 560$ and subtract the collinear triples. Each of the $4$ rows and $4$ columns has $\\binom{4}{3} = 4$ triples, $32$ in all; the two long diagonals have $4$ dots each, another $8$; and there are $4$ shorter diagonals with exactly $3$ dots, $4$ more. No other line passes through three dots of the grid, so the answer is $560 - 44 = 516$.',
  },
  {
    q: 'Three standard dice are rolled. What is the probability that the product of the three numbers is a multiple of $4$?',
    answer: '$\\frac{5}{8}$',
    solution: 'Count the complement: the product misses a factor of $4$ when either all three numbers are odd, $3^3 = 27$ rolls, or exactly one die shows $2$ or $6$ (a single factor of $2$) while the other two are odd, $3 \\cdot 2 \\cdot 3^2 = 54$ rolls. A $4$ on any die, or two dice each contributing a factor of $2$, already makes a multiple of $4$. So $81$ of the $216$ rolls fail, and the probability is $\\frac{135}{216} = \\frac{5}{8}$. Forgetting that a lone $2$ or $6$ is not enough gives $\\frac{7}{8}$.',
  },
  {
    q: 'Eight points are equally spaced around a circle. Four of them are chosen at random, with every set of four equally likely, and joined in order around the circle to make a quadrilateral. A side of the quadrilateral is short if it joins two of the eight points that are next to each other on the circle. What is the expected number of short sides?',
    answer: '$\\frac{12}{7}$',
    solution: 'One piece per pair of neighboring points on the circle; there are $8$ such pairs, and the quadrilateral has a short side along a pair exactly when both of its points are chosen, since two chosen neighbors have no chosen point between them and so are joined. A fixed pair is entirely chosen in $\\binom{6}{2} = 15$ of the $\\binom{8}{4} = 70$ selections, probability $\\frac{3}{14}$. The pieces overlap in the points they use, but expected values add: $8 \\cdot \\frac{3}{14} = \\frac{12}{7}$. Casework on the number of short sides gives the same average, but it takes five cases to reach it.',
  },
]

export default {
  id: 'intro-counting-ch15',
  book: 'intro-counting',
  number: 15,
  title: 'More Challenging Problems',
  intro:
    'You now own every tool in this book: casework, complements, symmetry, combinations, paths, probability, expected value, and the identities of Pascal’s triangle. The problems in this final chapter do not say which tool they want — that is the whole point. Learn to read a problem twice, shrink it, choose the tool that makes it shortest, and check that you counted each thing exactly once.',
  sections: [s152],
  challenge,
  worksheet,
}