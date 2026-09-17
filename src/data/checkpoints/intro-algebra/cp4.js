// Introduction to Algebra — Checkpoint 4: sits after chapter 12 and draws on chapters 1–12.
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'A game spinner is drawn on the grid shown. Its arrow pivots at the origin and the tip starts at $(2, 1)$. Every time a bell rings, the arrow turns exactly a quarter turn counterclockwise about the pivot, so the tip only ever visits the four marked points. Where is the tip after the $1235$th ring?',
    fig: {
      view: [-3, -3, 3, 3],
      grid: true,
      elems: [
        { t: 'seg', a: [0, 0], b: [2, 1] },
        { t: 'point', p: [0, 0] },
        { t: 'point', p: [2, 1], label: '(2, 1)', dx: 18, dy: -6 },
        { t: 'point', p: [-1, 2] },
        { t: 'point', p: [-2, -1] },
        { t: 'point', p: [1, -2] },
      ],
    },
    choices: ['$(-2, -1)$', '$(-1, 2)$', '$(1, -2)$', '$(2, -1)$', '$(2, 1)$'],
    answer: 2,
    solution:
      'Read the tip as the complex number $2 + i$; a quarter turn counterclockwise multiplies by $i$. One ring sends it to $i(2 + i) = -1 + 2i$, a second to $-2 - i$, a third to $1 - 2i$, and a fourth back to $2 + i$, so the position repeats every $4$ rings. Since $1235 = 4 \\times 308 + 3$, the tip is where three rings put it: $(1, -2)$. The choice $(-2, -1)$ is two rings, the position for a remainder of $2$ (as after $1234$ rings). The choice $(-1, 2)$ is one ring, and also where three clockwise turns would land. The choice $(2, -1)$ only flips the sign of $y$, a reflection in the $x$-axis rather than a rotation. The choice $(2, 1)$ is the start, correct only if $1235$ were a multiple of $4$.',
    topic: 'patterns',
    chapter: 12,
  },
  {
    q: 'A landscaper marks out a square courtyard whose area equals the area of a $44$ m by $52$ m lawn plus the area of a $4$ m by $4$ m fountain base. How long, in meters, is one side of the courtyard?',
    choices: ['$47$', '$48$', '$50$', '$52$', '$96$'],
    answer: 1,
    solution:
      'The two lawn sides straddle $48$: they are $48 - 4$ and $48 + 4$, so their product is $48^2 - 4^2$. Adding the $4^2$ from the fountain base restores exactly $48^2$, and the courtyard side is $48$ with no long multiplication at all. The choice $47$ ignores the fountain base: $44 \\times 52 = 2288$ and $\\sqrt{2288}$ is a little under $48$, so cutting it off at a whole number gives $47$. The choice $50$ treats the base as $4$ extra meters of lawn instead of an area, averaging $44 + 4$ and $52$. The choice $52$ is just the longer lawn side, and $96$ is the two lawn sides added together.',
    topic: 'arithmetic',
    chapter: 11,
  },
  {
    q: 'A rectangular vegetable bed is $9$ feet longer than it is wide and covers $190$ square feet, as shown. How many feet of edging are needed to run all the way around the bed?',
    fig: {
      view: [-1, -1.5, 20, 11.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [19, 0], [19, 10], [0, 10]], fill: false },
        { t: 'label', p: [9.5, 0], text: 'w + 9', dx: 0, dy: 16 },
        { t: 'label', p: [19, 5], text: 'w', dx: 12, dy: 4 },
        { t: 'label', p: [9.5, 5], text: 'area 190', dx: 0, dy: 4 },
      ],
    },
    choices: ['$10$', '$19$', '$29$', '$58$', '$94$'],
    answer: 3,
    solution:
      'With width $w$ the length is $w + 9$, so $w(w + 9) = 190$, or $w^2 + 9w - 190 = 0$. Two numbers with product $190$ and difference $9$ are $10$ and $19$, so this factors as $(w + 19)(w - 10) = 0$. A width cannot be $-19$, so $w = 10$, the length is $19$, and the edging is $2(10 + 19) = 58$ feet. The choices $10$ and $19$ are the width and the length, not the distance around. The choice $29$ is one width plus one length, half the perimeter. The choice $94$ takes the rejected root $19$ as the width, pairs it with a length of $28$, and doubles the sum.',
    topic: 'geometry',
    chapter: 10,
  },
  // ---- Band B ----
  {
    q: 'Two meshing gears have $31$ teeth between them, and the product of their tooth counts is $168$. How many more teeth does the larger gear have than the smaller one?',
    choices: ['$7$', '$17$', '$24$', '$25$', '$289$'],
    answer: 1,
    solution:
      'Call the counts $x$ and $y$. Squaring the sum gives $(x + y)^2 = x^2 + 2xy + y^2$, and the square of the difference is $(x - y)^2 = x^2 - 2xy + y^2$, which is $4xy$ less. So $(x - y)^2 = 31^2 - 4 \\times 168 = 961 - 672 = 289$, and the difference is $17$ without ever finding the gears themselves. The choices $7$ and $24$ are the two gears, which a student who does solve for them might report instead of the difference. The choice $25$ comes from subtracting $2xy$ instead of $4xy$: $961 - 336 = 625$, whose root is $25$, but that is $\\sqrt{x^2 + y^2}$, not the difference. The choice $289$ stops at the square of the difference and never takes the root.',
    topic: 'algebra',
    chapter: 10,
  },
  {
    q: 'Thirty percent of the stamps in Priya’s album are foreign, and fifty percent of the stamps in Ravi’s album are foreign. The two albums hold exactly the same number of foreign stamps, and together they hold $160$ stamps. How many stamps are in Priya’s album?',
    choices: ['$48$', '$60$', '$80$', '$100$', '$112$'],
    answer: 3,
    solution:
      'If Priya has $P$ stamps and Ravi has $R$, then $0.3P = 0.5R$, so $3P = 5R$ and $P : R = 5 : 3$. The $160$ stamps split into $5 + 3 = 8$ equal parts of $20$, and Priya’s five parts make $100$. The choice $48$ is $30\\%$ of the combined $160$, treating the percent as if it applied to both albums at once. The choice $60$ is Ravi’s album, the ratio read the wrong way round. The choice $80$ assumes the albums are equal, forgetting that the smaller percent must belong to the larger album. The choice $112$ is $160$ minus $48$, removing Priya’s percent from the total instead of using it to compare the albums.',
    topic: 'percents',
    chapter: 6,
  },
  {
    q: 'A square patio is $25$ tiles across. A new square patio is laid with identical tiles and needs $96\\%$ more tiles than the old one. How many more tiles across is the new patio than the old one?',
    choices: ['$10$', '$12$', '$14$', '$24$', '$35$'],
    answer: 0,
    solution:
      'Tiles measure area, so if the side grows by a factor of $k$, the tile count grows by $k^2$. A count that is $96\\%$ larger is $1.96$ times the old one, so $k^2 = 1.96$ and $k = 1.4$. The new patio is $1.4 \\times 25 = 35$ tiles across, which is $10$ more than before. The choice $12$ halves the percent to $48\\%$ and applies it to the side, as if the square root of $1.96$ were $1.48$. The choice $14$ is $40\\%$ of the new width $35$ rather than of the old width $25$. The choice $24$ applies the full $96\\%$ to the side, treating the tile count as if it grew in proportion to the side. The choice $35$ is the new width itself, not the increase.',
    topic: 'ratios',
    chapter: 6,
  },
  {
    q: 'A cipher machine holds a secret pair of whole numbers $(x, y)$. It forms the complex number $x + yi$, multiplies it by $3 - 2i$, and displays the product. Today it displayed $12 + 5i$. What is $x + y$?',
    choices: ['$-1$', '$2$', '$3$', '$5$', '$17$'],
    answer: 3,
    solution:
      'Expanding, $(x + yi)(3 - 2i) = 3x - 2xi + 3yi - 2yi^2 = (3x + 2y) + (3y - 2x)i$. Matching this to $12 + 5i$ gives the two facts $3x + 2y = 12$ and $-2x + 3y = 5$. Tripling the first and doubling the second, then adding, gives $13x = 26$, so $x = 2$ and then $y = 3$; the check $(2 + 3i)(3 - 2i) = 6 - 4i + 9i + 6 = 12 + 5i$ passes. So $x + y = 5$. The choice $-1$ is $x - y$, and $2$ and $3$ are $x$ and $y$ on their own. The choice $17$ adds the two parts of the display, $12 + 5$, without decoding anything.',
    topic: 'algebra',
    chapter: 12,
  },
  // ---- Band C ----
  {
    q: 'A square archery target $56$ cm on a side is painted as nested squares sharing a center. The outermost band, between the $56$ cm square and a $55$ cm square, is red; the next band, between the $55$ cm and $54$ cm squares, is white; then red, then white, and so on, alternating inward until the $1$ cm center square, which is white. What is the total red area, in square centimeters?',
    choices: ['$1540$', '$1568$', '$1596$', '$1624$', '$3192$'],
    answer: 2,
    solution:
      'Each red band is the difference of two squares whose sides are consecutive: $56^2 - 55^2$, $54^2 - 53^2$, and so on down to $2^2 - 1^2$. Because $n^2 - (n - 1)^2 = (n - (n - 1))(n + (n - 1)) = 2n - 1$, and $2n - 1 = n + (n - 1)$, the red bands together have area $(56 + 55) + (54 + 53) + \\cdots + (2 + 1) = 56 + 55 + \\cdots + 1$. That sum is $\\frac{56 \\times 57}{2} = 1596$. The choice $1540$ is $1 + 2 + \\cdots + 55$, losing the outermost band. The choice $1568$ is half the whole target, which the alternating bands do not split evenly. The choice $1624$ is $\\frac{56 \\times 58}{2}$, an off-by-one in the pairing formula. The choice $3192$ is $56 \\times 57$ with the halving forgotten.',
    topic: 'arithmetic',
    chapter: 11,
  },
  {
    q: 'A $12$ cm by $8$ cm photo is mounted on a rectangular card, leaving a border of the same width on all four sides, as shown. The border has exactly the same area as the photo. How wide is the border, in centimeters?',
    fig: {
      view: [-1, -1, 17, 13],
      elems: [
        { t: 'poly', pts: [[0, 0], [16, 0], [16, 12], [0, 12]], fill: false },
        { t: 'poly', pts: [[2, 2], [14, 2], [14, 10], [2, 10]], fill: false },
        { t: 'label', p: [8, 2], text: '12', dx: 0, dy: 16 },
        { t: 'label', p: [14, 6], text: '8', dx: -10, dy: 4 },
        { t: 'label', p: [8, 6.5], text: 'photo', dx: 0, dy: 4 },
      ],
    },
    choices: ['$2$', '$2.4$', '$4$', '$6$', '$12$'],
    answer: 0,
    solution:
      'With border width $w$ the card measures $(12 + 2w)$ by $(8 + 2w)$, and it must hold two photo areas: $(12 + 2w)(8 + 2w) = 2 \\times 96 = 192$. Expanding, $96 + 40w + 4w^2 = 192$, so $4w^2 + 40w - 96 = 0$, and dividing by $4$ gives $w^2 + 10w - 24 = (w + 12)(w - 2) = 0$. The width is $2$ cm; the check $16 \\times 12 = 192$ confirms it. The choice $2.4$ counts only the four side strips, $2w(12 + 8) = 96$, and forgets the four corner squares. The choice $4$ adds $w$ to each dimension only once, as if the border ran along two sides only. The choice $6$ comes from forgetting to divide the $96$ when the equation is divided by $4$, giving $w^2 + 10w - 96 = 0$. The choice $12$ is the size of the rejected root.',
    topic: 'geometry',
    chapter: 10,
  },
  {
    q: 'A tour boat cruises at $14$ km/h in still water. It travels $48$ km downriver to a landing and then $48$ km back upriver, and the two legs together take exactly $7$ hours. How fast is the river’s current, in km/h?',
    choices: ['$2$', '$4$', '$10$', '$12$', '$16$'],
    answer: 0,
    solution:
      'Let the current be $c$. The legs take $\\frac{48}{14 + c}$ and $\\frac{48}{14 - c}$ hours, and adding them over the common denominator gives $\\frac{48 \\times 28}{196 - c^2} = 7$, so $196 - c^2 = 192$ and $c = 2$. The check is quick: $48 \\div 16 = 3$ hours down and $48 \\div 12 = 4$ hours up. The choice $4$ is $c^2$, the root never taken. The choice $10$ comes from adding the two fractions as $\\frac{48 \\times 14}{196 - c^2}$, dropping the second $14$ from the numerator, which gives $196 - c^2 = 96$. The choices $12$ and $16$ are the boat’s speeds upriver and downriver, not the current.',
    topic: 'rates',
    chapter: 7,
  },
  {
    q: 'A wind-up ant on a desk crawls $1$ cm due east. Before every step after that, it turns $90^\\circ$ to its left and then crawls $1$ cm. After $1010$ steps, how far, in centimeters, is the ant from its starting point?',
    choices: ['$0$', '$1$', '$\\sqrt{2}$', '$2$', '$1010$'],
    answer: 2,
    solution:
      'Take east as $1$ and each left turn as multiplication by $i$: the steps are $1, i, i^2, i^3, \\ldots$, and the ant’s position after $n$ steps is $1 + i + i^2 + \\cdots + i^{n-1}$. Any four steps in a row add to $1 + i - 1 - i = 0$, a closed square, so only the remainder of $n$ on division by $4$ matters. Since $1010 = 4 \\times 252 + 2$, the position is $1 + i$, the point $(1, 1)$, at distance $\\sqrt{2}$ from the start. The choice $0$ treats $1010$ as a multiple of $4$, or assumes the loops must cancel completely. The choice $1$ is the distance for a remainder of $1$ or $3$, an off-by-one in the count. The choice $2$ adds the two leftover legs end to end instead of measuring the straight-line gap. The choice $1010$ is the length of the whole crawl.',
    topic: 'patterns',
    chapter: 12,
  },
  // ---- Band D ----
  {
    q: 'A red hose and a blue hose each fill a pond in a whole number of hours when used alone, and running together they fill it in exactly $24$ hours. How many possible pairs (red time, blue time) are there?',
    choices: ['$8$', '$10$', '$11$', '$20$', '$21$'],
    answer: 4,
    solution:
      'With alone-times $r$ and $b$, the rates add: $\\frac{1}{r} + \\frac{1}{b} = \\frac{1}{24}$, so $24b + 24r = rb$, or $rb - 24r - 24b = 0$. Adding $576$ to both sides makes the left side factor: $(r - 24)(b - 24) = 576$. Each hose alone is slower than the pair, so both factors are positive, and every ordered factor pair of $576 = 2^6 \\cdot 3^2$ gives one pair of times; there are $(6 + 1)(2 + 1) = 21$ divisors, so $21$ ordered pairs. Negative factor pairs would need one time below $24$ and the other below $0$, so they add nothing. The choice $8$ counts the divisors of $24$ itself, skipping the step that adds $576$. The choice $10$ counts the pairs with the colors ignored and then drops the case where both hoses take $48$ hours as well; $11$ is that same color-blind count with the equal pair kept. The choice $20$ removes that equal pair from the ordered count, though (48, 48) is a perfectly good pair.',
    topic: 'number theory',
    chapter: 11,
  },
  {
    q: 'A puzzle box has a dial that sets the number $k$. The box opens only when the equation $x^2 - kx + 100 = 0$ has two different solutions that are both positive whole numbers. What is the sum of all values of $k$ that open the box?',
    choices: ['$20$', '$101$', '$106$', '$207$', '$227$'],
    answer: 3,
    solution:
      'If the solutions are $p$ and $q$, then $x^2 - kx + 100 = (x - p)(x - q)$, so $pq = 100$ and $p + q = k$. The ways to write $100$ as a product of two different positive whole numbers are $1 \\times 100$, $2 \\times 50$, $4 \\times 25$ and $5 \\times 20$, giving $k = 101, 52, 29, 25$, whose sum is $207$. The pair $10 \\times 10$ gives $k = 20$, but then the equation has only one solution, so the box stays shut. The choice $20$ is exactly that excluded value. The choice $101$ stops at the largest $k$. The choice $106$ leaves out the pair $1 \\times 100$, as if $1$ were not allowed as a solution. The choice $227$ counts the repeated solution $10$ as two solutions.',
    topic: 'algebra',
    chapter: 10,
  },
  {
    q: 'A vault code is a complex number $a + bi$ whose parts $a$ and $b$ are integers. The vault’s display shows the square of the code, which today reads $16 + 30i$. If $a > 0$, what is $a + b$?',
    choices: ['$-8$', '$2$', '$3$', '$5$', '$8$'],
    answer: 4,
    solution:
      'Squaring gives $(a + bi)^2 = (a^2 - b^2) + 2abi$, so $a^2 - b^2 = 16$ and $2ab = 30$, that is $ab = 15$. With $a$ and $b$ integers, $ab = 15$ leaves only the pairs $(1, 15), (3, 5), (5, 3), (15, 1)$ and their negatives, and only $a = 5, b = 3$ or $a = -5, b = -3$ satisfy $a^2 - b^2 = 16$. Since $a > 0$, the code is $5 + 3i$, and $a + b = 8$; the check $(5 + 3i)^2 = 25 + 30i - 9 = 16 + 30i$ passes. The choice $-8$ is the sum for the other square root, $-5 - 3i$, whose $a$ is negative. The choice $2$ is $a - b$, and $3$ and $5$ are $b$ and $a$ alone.',
    topic: 'algebra',
    chapter: 12,
  },
  {
    q: 'A raffle prints tickets numbered $1$ through $6^6$, and exactly one of them wins. The losing tickets are packed into identical bundles, each holding a prime number of tickets, with none left over. What is the largest possible bundle size?',
    choices: ['$7$', '$31$', '$43$', '$217$', '$1333$'],
    answer: 2,
    solution:
      'There are $6^6 - 1$ losing tickets, and the bundle size must be a prime factor of it. Write $6^6 - 1 = (6^3)^2 - 1 = (6^3 - 1)(6^3 + 1) = 215 \\times 217$. Neither factor is prime: $215 = 5 \\times 43$, and $217 = 7 \\times 31$ (the cube patterns say the same thing, since $6^3 - 1 = 5(36 + 6 + 1)$ and $6^3 + 1 = 7(36 - 6 + 1)$). So $6^6 - 1 = 5 \\times 7 \\times 31 \\times 43$, and the largest bundle holds $43$ tickets. The choices $7$ and $31$ are the other primes hiding in $217$. The choice $217$ stops after the first split and takes $6^3 + 1$ for a prime, though it is $7 \\times 31$. The choice $1333$ comes from splitting as $(6^2)^3 - 1 = 35 \\times 1333$ and stopping there; $1333 = 31 \\times 43$ still factors.',
    topic: 'number theory',
    chapter: 11,
  },
]

export default {
  id: 'intro-algebra-cp4',
  book: 'intro-algebra',
  number: 4,
  after: 12,
  covers: [1, 12],
  title: 'Quarter Turns',
  blurb: 'Spinners and crawling ants that only ever turn a quarter, courtyards that hide a product plus a corner, and a closing stretch where the hoses, the dial and the raffle bundles all need one factoring step more than seems necessary.',
  minutes: 25,
  problems,
}
