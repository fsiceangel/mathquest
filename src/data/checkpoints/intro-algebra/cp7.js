// Introduction to Algebra — Checkpoint 7: sits after chapter 22 and draws on chapters 1–22.
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'A cargo scale shows a parcel’s weight in kilograms on two dials: the left dial rounds the true weight down to a whole number, the right dial rounds it up. For a certain parcel the two dials show different numbers, and the numbers add to $15$. Which of the following could be the true weight of the parcel, in kilograms?',
    choices: ['$6.5$', '$7$', '$7.5$', '$8$', '$15$'],
    answer: 2,
    solution:
      'Because the dials disagree, the weight is not a whole number, so the rounded-up reading is exactly one more than the rounded-down reading. Two consecutive whole numbers adding to $15$ must be $7$ and $8$, so the true weight lies strictly between $7$ and $8$, and $7.5$ is the only choice in that range. A weight of $6.5$ would show $6$ and $7$, which add to $13$. A whole-number weight such as $7$ or $8$ makes both dials agree, giving $14$ or $16$. And $15$ is the total of the two dials, not a weight that could produce it.',
    topic: 'number theory',
    chapter: 20,
  },
  {
    q: 'At noon exactly $4$ people in a town know a rumor, and every hour the number of people who know it triples. After how many full hours does the number of people who know the rumor first exceed $2000$?',
    choices: ['$4$', '$5$', '$6$', '$7$', '$9$'],
    answer: 2,
    solution:
      'After $h$ hours the count is $4 \\cdot 3^h$, so the question is the first $h$ with $3^h > 500$. The powers of $3$ run $81, 243, 729, \\ldots$, and $3^6 = 729$ is the first past $500$: after $6$ hours the count is $4 \\cdot 729 = 2916$, while after $5$ hours it is only $4 \\cdot 243 = 972$. The choice $4$ merges $4 \\cdot 3^h$ into $12^h$ and finds $12^4 = 20736$ as the first power past $2000$. The choice $5$ stops at the last hour before the target instead of the first hour past it. The choice $7$ adds one more hour after the threshold is already crossed; it is also what forgetting the $4$ gives, since $3^7 = 2187$ is the first power of $3$ alone past $2000$. And $9$ multiplies $2000$ by $4$ instead of dividing, hunting for $3^h > 8000$, which first happens at $3^9 = 19683$.',
    topic: 'patterns',
    chapter: 19,
  },
  {
    q: 'A rectangular garden bed has an area of $3$ square meters and needs exactly $10$ meters of edging to go all the way around it. A drainage pipe is to be laid corner to corner along a diagonal of the bed. How long is the pipe, in meters?',
    choices: ['$4$', '$\\sqrt{19}$', '$\\sqrt{22}$', '$5$', '$\\sqrt{31}$'],
    answer: 1,
    solution:
      'Call the sides $a$ and $b$. The edging gives $a + b = 5$ and the area gives $ab = 3$, and there is no need to find the sides themselves. The diagonal squared is $a^2 + b^2 = (a + b)^2 - 2ab = 25 - 6 = 19$, so the pipe is $\\sqrt{19}$ meters long. The choice $4$ subtracts $3^2 = 9$ from $25$, squaring the area instead of doubling it. The choice $\\sqrt{22}$ subtracts the area only once, $25 - 3$, and $\\sqrt{31}$ adds $2ab$ instead of subtracting it. The choice $5$ is $a + b$, half the edging, and a diagonal is always shorter than the two sides it cuts across.',
    topic: 'algebra',
    chapter: 22,
  },
  // ---- Band B ----
  {
    q: 'A counter starts at $1$. A machine multiplies it by $16$ five times and then by $125$ nine times. When the final value is written out in full, how many digits does it have?',
    choices: ['$14$', '$20$', '$21$', '$25$', '$27$'],
    answer: 3,
    solution:
      'Break the multipliers into primes: $16 = 2^4$ and $125 = 5^3$, so the final value is $2^{20} \\cdot 5^{27}$. Pair each $2$ with a $5$: $2^{20} \\cdot 5^{20} = 10^{20}$, and seven factors of $5$ are left over, so the number is $5^7 \\cdot 10^{20} = 78125 \\cdot 10^{20}$, which is $78125$ followed by $20$ zeros: $5 + 20 = 25$ digits. The choice $14$ adds the numbers of presses, $5 + 9$, as though each multiplication added one digit. The choice $20$ counts only the zeros, forgetting the $78125$ in front. The choice $21$ is the number of digits of $10^{20}$ itself, as if the leftover $5^7$ were a single digit. And $27$ takes the number of factors of $5$ as the digit count, as though the twenty factors of $2$ contributed nothing at all.',
    topic: 'number theory',
    chapter: 19,
  },
  {
    q: 'A jeweler’s balance settles on a reading of $0.4363636\\ldots$ grams, with the pair of digits $36$ repeating forever. What is this weight as a fraction in lowest terms?',
    choices: ['$\\frac{2}{5}$', '$\\frac{24}{55}$', '$\\frac{436}{999}$', '$\\frac{11}{25}$', '$\\frac{42}{55}$'],
    answer: 1,
    solution:
      'Split the reading where the repetition begins: $0.4363636\\ldots = 0.4 + 0.0363636\\ldots$. The tail is $\\frac{36}{1000} + \\frac{36}{100000} + \\cdots$, a sum whose first term is $\\frac{36}{1000}$ and whose ratio is $\\frac{1}{100}$, so it equals $\\frac{36}{1000} \\div \\left(1 - \\frac{1}{100}\\right) = \\frac{36}{990} = \\frac{2}{55}$. Then $\\frac{2}{5} + \\frac{2}{55} = \\frac{22}{55} + \\frac{2}{55} = \\frac{24}{55}$, and $24 \\div 55 = 0.43636\\ldots$ checks. The choice $\\frac{2}{5}$ drops the repeating tail altogether. The choice $\\frac{436}{999}$ treats all three digits $436$ as the repeating block. The choice $\\frac{11}{25}$ is $0.44$, reading the $36$ as a single non-repeating $0.04$. The choice $\\frac{42}{55}$ is $\\frac{2}{5} + \\frac{36}{99}$, forgetting that the repeating block starts one place later than the point.',
    topic: 'fractions',
    chapter: 21,
  },
  {
    q: 'The figure shows the graph of $y = |x - 1| - 2$ together with the horizontal line $y = 5$. What is the area of the triangle enclosed between the V-shaped graph and the line?',
    fig: {
      view: [-8, -4, 10, 8],
      grid: true,
      elems: [
        { t: 'poly', pts: [[-8, 7], [1, -2], [10, 7]], closed: false },
        { t: 'seg', a: [-8, 5], b: [10, 5] },
        { t: 'point', p: [1, -2], label: '(1, -2)', dx: 0, dy: 16 },
        { t: 'label', p: [-3.5, 5], text: 'y = 5', dx: 0, dy: -8 },
      ],
    },
    choices: ['$17.5$', '$24.5$', '$25$', '$35$', '$49$'],
    answer: 4,
    solution:
      'The line meets the V where $|x - 1| - 2 = 5$, that is $|x - 1| = 7$, so at $x = -6$ and $x = 8$: the top of the triangle is a base of $14$ along the line $y = 5$. The third vertex is the point of the V at $(1, -2)$, which is $5 - (-2) = 7$ below the line, so the area is $\\frac{1}{2} \\cdot 14 \\cdot 7 = 49$. The choice $17.5$ uses the run from the vertex to one crossing, $7$, as the whole base together with a height of $5$ measured from the $x$-axis. The choice $24.5$ halves the base the same way against the true height of $7$. The choice $25$ solves $|x - 1| = 5$ instead, ignoring the $-2$, and again reads the height as $5$. And $35$ fixes one of those two slips but not the other.',
    topic: 'geometry',
    chapter: 20,
  },
  {
    q: 'A vending machine accepts any integer $n$ other than $2$, positive, negative or zero, and prints the value of $\\frac{3n + 2}{n - 2}$. For how many inputs $n$ does the machine print an integer?',
    choices: ['$4$', '$5$', '$6$', '$8$', '$9$'],
    answer: 3,
    solution:
      'Since $3n + 2 = 3(n - 2) + 8$, the printed value is $3 + \\frac{8}{n - 2}$, which is an integer exactly when $n - 2$ divides $8$. The divisors of $8$ are $\\pm 1, \\pm 2, \\pm 4, \\pm 8$, eight of them, giving $n = 3, 1, 4, 0, 6, -2, 10, -6$; each one checks, for instance $n = -6$ prints $\\frac{-16}{-8} = 2$. The choice $4$ counts only the positive divisors of $8$. The choice $5$ keeps only the positive inputs $1, 3, 4, 6, 10$, although the machine accepts negatives and zero. The choice $6$ comes from miscomputing the leftover as $2 - 6 = -4$, whose divisors number six. The choice $9$ adds the forbidden input $n = 2$, where the machine has nothing to divide by.',
    topic: 'number theory',
    chapter: 20,
  },
  // ---- Band C ----
  {
    q: 'A square tile has side $12$. It is divided into four equal squares, the top-right one is painted, and the bottom-left one is then treated exactly like the whole tile: divided into four, its top-right quarter painted, its bottom-left quarter divided again, and so on without end. The figure shows the first three stages. What is the total painted area?',
    fig: {
      view: [-1, -1.5, 13, 13],
      elems: [
        { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
        { t: 'seg', a: [6, 0], b: [6, 12] },
        { t: 'seg', a: [0, 6], b: [12, 6] },
        { t: 'poly', pts: [[6, 6], [12, 6], [12, 12], [6, 12]], fill: true },
        { t: 'seg', a: [3, 0], b: [3, 6] },
        { t: 'seg', a: [0, 3], b: [6, 3] },
        { t: 'poly', pts: [[3, 3], [6, 3], [6, 6], [3, 6]], fill: true },
        { t: 'seg', a: [1.5, 0], b: [1.5, 3] },
        { t: 'seg', a: [0, 1.5], b: [3, 1.5] },
        { t: 'poly', pts: [[1.5, 1.5], [3, 1.5], [3, 3], [1.5, 3]], fill: true },
        { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 16 },
      ],
    },
    choices: ['$36$', '$45$', '$47.25$', '$48$', '$72$'],
    answer: 3,
    solution:
      'Let $S$ be the total painted area. The first painted square has area $6 \\times 6 = 36$, and everything painted after that lies inside the bottom-left quarter, which is a copy of the whole tile at half scale, so the paint inside it has area $\\frac{S}{4}$. Hence $S = 36 + \\frac{S}{4}$, and $\\frac{3}{4}S = 36$ gives $S = 48$: exactly one third of the tile, which fits, since at every stage the painted square is one of three equal squares surrounding the next copy. The choice $36$ stops after the first stage, $45$ after the second ($36 + 9$), and $47.25$ after the three stages drawn; the process never ends, so the total climbs past all of these. The choice $72$ halves the added area at each stage instead of quartering it, using the side ratio where the area ratio belongs.',
    topic: 'geometry',
    chapter: 22,
  },
  {
    q: 'Two square plots of land are measured. The larger plot has $30$ square meters more area than the smaller one, and its side is $2$ meters longer. What is the area of the larger plot, in square meters?',
    choices: ['$42.25$', '$56.25$', '$60$', '$72.25$', '$225$'],
    answer: 3,
    solution:
      'Call the sides $s$ and $t$ with $s - t = 2$. The area difference factors: $s^2 - t^2 = (s - t)(s + t) = 30$, so $s + t = 15$, and no quadratic ever needs solving. Adding $s - t = 2$ gives $2s = 17$, so $s = 8.5$ and the larger plot has area $8.5^2 = 72.25$; as a check, the smaller side is $6.5$ and $72.25 - 42.25 = 30$. The choice $42.25$ is the smaller plot. The choice $56.25$ takes half of $15$ as the side, forgetting to split the $2$ meters between the two plots. The choice $60$ multiplies the two given differences instead of dividing them, and $225$ squares the sum of the sides as if $15$ were itself a side.',
    topic: 'algebra',
    chapter: 11,
  },
  {
    q: 'An outdoor theater numbers its seats with odd numbers only, filling row after row: row $1$ has the single seat $1$, row $2$ has seats $3$ and $5$, row $3$ has seats $7$, $9$ and $11$, and each row holds one more seat than the row before it. What is the number on the first seat of row $16$?',
    choices: ['$225$', '$239$', '$241$', '$256$', '$271$'],
    answer: 2,
    solution:
      'Rows $1$ through $15$ hold $1 + 2 + \\cdots + 15 = 120$ seats, so the first seat of row $16$ carries the $121$st odd number. The $k$th odd number is $2k - 1$, so it is $2 \\cdot 121 - 1 = 241$. A quick check: the first seat of row $n$ is $n^2 - n + 1$, which gives $1, 3, 7$ for the first three rows and $241$ for $n = 16$. The choice $225$ is $15^2$, the sum of the first $15$ odd numbers, which counts seats rather than reading a label. The choice $239$ is the $120$th odd number, the last seat of row $15$. The choice $256$ is $16^2$, and $271$ is the $136$th odd number, the last seat of row $16$ rather than the first.',
    topic: 'patterns',
    chapter: 21,
  },
  {
    q: 'Each morning for $40$ days a florist receives a delivery: $1$ tulip on day $1$, $2$ on day $2$, and so on up to $40$ on day $40$. Each day she arranges as many of that day’s tulips as possible into a full square block, $s$ tulips by $s$ tulips with $s$ as large as possible, and sells the leftovers loose. What is the sum of the $40$ values of $s$?',
    choices: ['$155$', '$170$', '$189$', '$203$', '$210$'],
    answer: 0,
    solution:
      'On day $k$ the block side $s$ is the largest whole number with $s^2 \\le k$, so group the days by $s$. Days $1$ to $3$ give $s = 1$, days $4$ to $8$ give $s = 2$, days $9$ to $15$ give $3$, days $16$ to $24$ give $4$, and days $25$ to $35$ give $5$: blocks of $3, 5, 7, 9, 11$ days. The last block, $s = 6$, would run from day $36$ to day $48$ but is cut off at day $40$, only $5$ days. The sum is $1 \\cdot 3 + 2 \\cdot 5 + 3 \\cdot 7 + 4 \\cdot 9 + 5 \\cdot 11 + 6 \\cdot 5 = 3 + 10 + 21 + 36 + 55 + 30 = 155$. The choice $170$ rounds each $\\sqrt{k}$ to the nearest whole number instead of always down. The choice $189$ rounds every day up. The choice $203$ gives the last block its full $13$ days, running on to a day $48$ that never comes, and $210$ adds a day $49$ with $s = 7$ on top of that.',
    topic: 'counting',
    chapter: 20,
  },
  // ---- Band D ----
  {
    q: 'Three real numbers are written on a card. Their sum is $2$, the sum of their squares is $10$, and their product is $-1$. What is the sum of their cubes?',
    choices: ['$8$', '$11$', '$17$', '$20$', '$23$'],
    answer: 4,
    solution:
      'Call the numbers $x, y, z$ and let $q = xy + yz + zx$. Squaring the sum, $(x + y + z)^2 = x^2 + y^2 + z^2 + 2q$ gives $4 = 10 + 2q$, so $q = -3$. The identity $x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - q)$ then gives $x^3 + y^3 + z^3 = 2(10 + 3) + 3(-1) = 26 - 3 = 23$. Hunting for the numbers themselves leads nowhere in the time available: they are the roots of $t^3 - 2t^2 - 3t + 1 = 0$, which has no rational root. The choice $8$ is $2^3$, cubing the sum. The choice $11$ takes $q = +3$ from a sign slip in $4 = 10 + 2q$ and computes $2(10 - 3) - 3$. The choice $17$ is $2 \\cdot 10 - 3$, leaving $q$ out of the bracket, and $20$ is $2 \\cdot 10$, dropping the product term as well.',
    topic: 'algebra',
    chapter: 22,
  },
  {
    q: 'A contractor offers an apprentice an unusual pay plan for an $8$-day job: on day $k$ the apprentice receives $k \\cdot 3^k$ dollars, so $\\$3$ on day $1$, $\\$18$ on day $2$, $\\$81$ on day $3$, and so on. How many dollars does the apprentice receive in total over the $8$ days?',
    choices: ['$\\$9840$', '$\\$21324$', '$\\$52488$', '$\\$73812$', '$\\$147624$'],
    answer: 3,
    solution:
      'Let $T = 1 \\cdot 3 + 2 \\cdot 9 + 3 \\cdot 27 + \\cdots + 8 \\cdot 6561$. Tripling shifts every term one day later: $3T = 1 \\cdot 9 + 2 \\cdot 27 + \\cdots + 7 \\cdot 6561 + 8 \\cdot 19683$. Subtract $T$ from $3T$: each power of $3$ from $9$ to $6561$ appears one more time in $T$ than in $3T$, the first term $3$ of $T$ has no partner, and $8 \\cdot 19683$ stands alone in $3T$, so $2T = 8 \\cdot 19683 - (3 + 9 + 27 + \\cdots + 6561) = 157464 - 9840 = 147624$ and $T = 73812$. The choice $\\$9840$ is the plain tripling total $3 + 9 + \\cdots + 6561$, the pay if day $k$ paid only $3^k$. The choice $\\$21324$ stops after day $7$. The choice $\\$52488$ is day $8$ alone, and $\\$147624$ is $2T$, the shift-and-subtract finished without the final halving.',
    topic: 'patterns',
    chapter: 21,
  },
  {
    q: 'Ten shops stand along a straight road at mile markers $1, 2, \\ldots, 10$, as shown. A delivery van will be based at a depot somewhere on the road, and each day it makes a separate run from the depot to each shop and straight back; the shop at marker $7$ needs three runs a day, every other shop one. The depot can be placed anywhere on the road. What is the least possible total distance, in miles, the van drives in a day?',
    fig: {
      view: [-0.5, -1.2, 11.5, 1.8],
      elems: [
        { t: 'seg', a: [0, 0], b: [11, 0] },
        { t: 'point', p: [1, 0], label: '1', dx: 0, dy: 16 },
        { t: 'point', p: [2, 0], label: '2', dx: 0, dy: 16 },
        { t: 'point', p: [3, 0], label: '3', dx: 0, dy: 16 },
        { t: 'point', p: [4, 0], label: '4', dx: 0, dy: 16 },
        { t: 'point', p: [5, 0], label: '5', dx: 0, dy: 16 },
        { t: 'point', p: [6, 0], label: '6', dx: 0, dy: 16 },
        { t: 'point', p: [7, 0], label: '7', dx: 0, dy: 16 },
        { t: 'point', p: [8, 0], label: '8', dx: 0, dy: 16 },
        { t: 'point', p: [9, 0], label: '9', dx: 0, dy: 16 },
        { t: 'point', p: [10, 0], label: '10', dx: 0, dy: 16 },
        { t: 'circle', c: [7, 0], r: 0.3 },
        { t: 'label', p: [7, 0.4], text: '3 runs', dx: 0, dy: -6 },
      ],
    },
    choices: ['$27$', '$50$', '$54$', '$56$', '$58$'],
    answer: 2,
    solution:
      'Each run contributes twice the shop’s distance from the depot, so the task is to place the depot at a point $d$ that makes $|d - 1| + |d - 2| + \\cdots + |d - 10| + 2|d - 7|$ as small as possible, the shop at $7$ counting three times, and then double the result. Sliding the depot toward whichever side holds more of the $12$ counted runs always lowers the sum, so the depot belongs where the two sides balance: markers $1$ to $6$ carry six runs and markers $7$ to $10$ carry the other six ($3 + 1 + 1 + 1$). Every point from marker $6$ to marker $7$ therefore gives the same minimum. At $d = 6$ the one-way sum is $5 + 4 + 3 + 2 + 1 + 0 + 3 \\cdot 1 + 2 + 3 + 4 = 27$, and at $d = 7$ it is $6 + 5 + 4 + 3 + 2 + 1 + 0 + 1 + 2 + 3 = 27$ as well, so the least daily distance is $2 \\cdot 27 = 54$ miles. The choice $27$ forgets the return legs. The choice $50$ ignores the extra runs and balances the ten shops at $5.5$; once the three runs to marker $7$ are counted, that placement costs $2 \\cdot 28 = 56$, the next choice. And $58$ puts the depot at marker $5$, halfway along the row of shops rather than at the balance point.',
    topic: 'logic',
    chapter: 20,
  },
  {
    q: 'A calculator has a single key. With the display starting at $0$, each press adds a fixed positive integer $k$ to the display and then replaces the result by its square root. After a great many presses the display settles down to a steady value. For how many integers $k$ from $1$ to $300$ is that steady value a whole number?',
    choices: ['$16$', '$17$', '$18$', '$23$', '$24$'],
    answer: 0,
    solution:
      'If the display settles at $x$, one more press leaves it unchanged, so $\\sqrt{k + x} = x$, that is $x^2 - x = k$, or $k = x(x - 1)$. The steady value is a whole number exactly when $k$ is a product of two consecutive whole numbers: $1 \\cdot 2 = 2$, $2 \\cdot 3 = 6$, $3 \\cdot 4 = 12$, and so on. Since $16 \\cdot 17 = 272 \\le 300$ while $17 \\cdot 18 = 306$ is too big, the values $x = 2, 3, \\ldots, 17$ work: $16$ of them. For instance $k = 6$ settles at $3$, since $\\sqrt{6 + 3} = 3$. The choice $17$ is the number of perfect squares up to $300$, the guess that the display settles only when $k$ itself is a square; it is also what counting $x = 1$ gives, though its $k$ is $0$ and not allowed. The choice $18$ counts one product past the limit. The choices $23$ and $24$ count the triangular numbers up to $300$, forgetting that $x(x - 1)$ is twice a triangular number: $23$ of them lie below $300$ and a $24$th sits exactly at $300$.',
    topic: 'number theory',
    chapter: 22,
  },
]

export default {
  id: 'intro-algebra-cp7',
  book: 'intro-algebra',
  number: 7,
  after: 22,
  covers: [1, 22],
  title: 'Nested Ledgers',
  blurb: 'Dials that round both ways, rumors and pay plans that keep multiplying, a tile that paints a smaller copy of itself in its own corner, and a closing run where a depot, a one-key calculator and three unnamed numbers each hide the single relation that does all the work.',
  minutes: 25,
  problems,
}
