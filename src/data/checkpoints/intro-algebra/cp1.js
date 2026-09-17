// Introduction to Algebra — Checkpoint 1: The Slow Clock (after chapter 3, covers 1–3)
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'A glass bottle filled to the brim with maple syrup weighs $1480$ grams. The same bottle filled exactly halfway with syrup weighs $860$ grams. How many grams does the empty bottle weigh?',
    choices: ['$240$', '$430$', '$620$', '$740$', '$1240$'],
    answer: 0,
    solution:
      'Let the bottle weigh $B$ grams and a full load of syrup weigh $S$ grams. Full: $B + S = 1480$. Half full means half the syrup, not half the weight, so $B + \\frac{S}{2} = 860$. Subtracting the second equation from the first leaves $\\frac{S}{2} = 620$, so $S = 1240$ and the bottle is $1480 - 1240 = 240$ grams. The choice $430$ halves the half-full weight as if the bottle were half of it; $620$ stops at the difference of the two weighings, which is half the syrup; $740$ halves $1480$, treating “half full” as half the total weight; and $1240$ is the syrup, not the bottle.',
    topic: 'algebra',
    chapter: 3,
  },
  {
    q: 'A solid wooden cube, shown in the figure, has a volume of $2^{15}$ cubic centimeters. What is its surface area, in square centimeters?',
    fig: {
      view: [-1.4, -1.1, 5.4, 4.9],
      elems: [
        { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
        { t: 'poly', pts: [[0, 3], [3, 3], [4.3, 4.1], [1.3, 4.1]], fill: false },
        { t: 'poly', pts: [[3, 0], [4.3, 1.1], [4.3, 4.1], [3, 3]], fill: false },
        { t: 'seg', a: [0, 0], b: [1.3, 1.1], dash: true },
        { t: 'seg', a: [1.3, 1.1], b: [4.3, 1.1], dash: true },
        { t: 'seg', a: [1.3, 1.1], b: [1.3, 4.1], dash: true },
        { t: 'label', p: [0, 1.5], text: 's', dx: -12, dy: 4 },
        { t: 'label', p: [1.5, 0], text: 'volume 2¹⁵ cm³', dx: 0, dy: 18 },
      ],
    },
    choices: ['$6 \\cdot 2^{5}$', '$3 \\cdot 2^{8}$', '$2^{10}$', '$3 \\cdot 2^{10}$', '$3 \\cdot 2^{11}$'],
    answer: 4,
    solution:
      'If the edge is $s$, then $s^3 = 2^{15}$, so $s = 2^{15/3} = 2^5 = 32$ centimeters. One face has area $s^2 = 2^{10}$, and six faces give $6 \\cdot 2^{10} = 3 \\cdot 2^{11}$, which is $6144$ square centimeters. The choice $6 \\cdot 2^{5}$ multiplies six by the edge instead of by a face; $3 \\cdot 2^{8}$ squares the edge by adding $2$ to the exponent, as if $(2^5)^2$ were $2^7$; $2^{10}$ is a single face; and $3 \\cdot 2^{10}$ counts only the three faces that can be seen in the figure.',
    topic: 'arithmetic',
    chapter: 1,
  },
  {
    q: 'The rectangle in the figure has sides of length $3x - 4$ centimeters and $x + 6$ centimeters, and its perimeter is $68$ centimeters. What is its area, in square centimeters?',
    fig: {
      view: [-0.8, -1.1, 6.6, 4.4],
      elems: [
        { t: 'poly', pts: [[0, 0], [5, 0], [5, 3.5], [0, 3.5]], fill: false },
        { t: 'label', p: [2.5, 0], text: '3x − 4', dx: 0, dy: 17 },
        { t: 'label', p: [5, 1.75], text: 'x + 6', dx: 24, dy: 4 },
      ],
    },
    choices: ['$8$', '$34$', '$112$', '$160$', '$280$'],
    answer: 4,
    solution:
      'The perimeter is twice the sum of the two sides: $2\\,[(3x - 4) + (x + 6)] = 2(4x + 2) = 8x + 4$. Setting $8x + 4 = 68$ gives $x = 8$, but $x$ is not a side: the sides are $3(8) - 4 = 20$ and $8 + 6 = 14$, so the area is $20 \\times 14 = 280$. The choice $8$ stops at $x$; $34$ is half the perimeter, the two sides added rather than multiplied; $112 = 14 \\times 8$ and $160 = 20 \\times 8$ each use $x$ itself as one of the sides.',
    topic: 'geometry',
    chapter: 3,
  },
  // ---- Band B ----
  {
    q: 'At a school fair a magician tells a volunteer: “Think of any number. Multiply it by $4$. Add $24$. Divide by $4$. Add $3$. Now subtract the number you first thought of, and multiply what is left by $6$.” Without asking a single question, the magician announces the volunteer’s final result. What number does she announce?',
    choices: ['$9$', '$18$', '$36$', '$54$', '$162$'],
    answer: 3,
    solution:
      'Call the volunteer’s number $n$ and follow the instructions: $4n$, then $4n + 24$, then $\\frac{4n + 24}{4} = n + 6$, then $n + 9$. Subtracting $n$ leaves $9$ no matter what $n$ was, and $9 \\times 6 = 54$, so the magician always announces $54$. The choice $9$ stops before the final multiplication; $18 = 3 \\times 6$ loses the $6$ that came from $24 \\div 4$ and keeps only the added $3$; $36 = 6 \\times 6$ forgets the added $3$ instead; and $162 = 27 \\times 6$ skips the division, carrying $24 + 3 = 27$ straight through.',
    topic: 'algebra',
    chapter: 2,
  },
  {
    q: 'Two candles are lit at the same moment. The first is $30$ cm tall and would burn away completely in $2$ hours; the second is $24$ cm tall and would burn away completely in $4$ hours. Each burns at a steady rate. After how many minutes are the two candles the same height?',
    choices: ['$20$', '$24$', '$40$', '$60$', '$120$'],
    answer: 2,
    solution:
      'The burn-out times must first be turned into rates: the first candle loses $30 \\div 2 = 15$ cm per hour and the second loses $24 \\div 4 = 6$ cm per hour. After $t$ hours their heights are $30 - 15t$ and $24 - 6t$, and these are equal when $9t = 6$, so $t = \\frac{2}{3}$ hour, which is $40$ minutes; both candles are then $20$ cm tall. The choice $20$ is that common height, not a time; $24$ minutes is $\\frac{6}{15}$ hour, closing the $6$ cm gap with the first candle’s rate alone; $60$ minutes is $\\frac{6}{6}$ hour, using only the second candle’s rate; and $120$ is the difference in the burn-out times, which says nothing about when the heights match.',
    topic: 'rates',
    chapter: 3,
  },
  {
    q: 'A gym locker opens with a two-digit code. Writing the two digits in the opposite order gives a number that is $36$ less than the code, and the two digits add up to $12$. What is the code?',
    choices: ['$48$', '$57$', '$66$', '$75$', '$84$'],
    answer: 4,
    solution:
      'With tens digit $a$ and units digit $b$, the code is $10a + b$ and its reversal is $10b + a$. Their difference is $(10a + b) - (10b + a) = 9(a - b)$, so $9(a - b) = 36$ and $a - b = 4$. Together with $a + b = 12$ this gives $a = 8$ and $b = 4$: the code is $84$, and indeed $84 - 48 = 36$. The choice $48$ is the reversed number rather than the code; $57$ and $75$ come from moving each digit only $1$ away from $6$ instead of $2$, halving the difference $4$ a second time; and $66$ splits the digit sum evenly, ignoring the reversal altogether.',
    topic: 'number theory',
    chapter: 3,
  },
  {
    q: 'A $156$ cm ribbon is cut into three pieces. The second piece is $3$ cm longer than twice the first, and the third piece is $7$ cm shorter than twice the second. How long, in centimeters, is the longest piece?',
    choices: ['$22$', '$44$', '$47$', '$87$', '$94$'],
    answer: 3,
    solution:
      'Let the first piece be $x$ cm. The second is $2x + 3$, and the third is $2(2x + 3) - 7 = 4x - 1$. The three add to $x + (2x + 3) + (4x - 1) = 7x + 2 = 156$, so $x = 22$, and the pieces are $22$, $47$, and $87$ cm; the question asks for the longest, $87$. The choice $22$ stops at the first piece, which is the variable; $44$ is twice the first piece, the second before its extra $3$ cm; $47$ is the second piece; and $94 = 2 \\times 47$ forgets to take the $7$ cm off the third.',
    topic: 'algebra',
    chapter: 3,
  },
  // ---- Band C ----
  {
    q: 'Mira has taken several tests this term. If her next test scores $70$, her average for the term will drop to $77$; if it scores $94$ instead, her average will rise to $80$. How many tests has Mira taken so far?',
    choices: ['$3$', '$6$', '$7$', '$8$', '$24$'],
    answer: 2,
    solution:
      'Say Mira has taken $n$ tests with total $S$. Then $S + 70 = 77(n + 1)$ and $S + 94 = 80(n + 1)$. Subtracting, the extra $24$ points on the next test raise the average of $n + 1$ tests by $3$, so $3(n + 1) = 24$, $n + 1 = 8$, and $n = 7$. (Then $S = 546$, a current average of $78$, though that was not asked.) The choice $3$ is the gap between the two averages; $6$ takes one off the $8$ twice; $8$ is the number of tests including the one not yet taken; and $24$ is the gap between the two possible scores.',
    topic: 'statistics',
    chapter: 3,
  },
  {
    q: 'Three silos of grain are labeled by the number of grains they hold: silo $P$ holds $2^{210}$ grains, silo $Q$ holds $3^{120}$, and silo $R$ holds $5^{90}$. Which of the following lists the silos from the fewest grains to the most?',
    choices: ['$P, Q, R$', '$P, R, Q$', '$Q, P, R$', '$Q, R, P$', '$R, Q, P$'],
    answer: 3,
    solution:
      'The exponents $210$, $120$, and $90$ are all multiples of $30$, so each count can be written as a thirtieth power: $2^{210} = (2^7)^{30} = 128^{30}$, $3^{120} = (3^4)^{30} = 81^{30}$, and $5^{90} = (5^3)^{30} = 125^{30}$. With the exponents matched, the bases decide: $81 < 125 < 128$, so the order from fewest to most is $Q, R, P$. The choice $P, Q, R$ ranks the silos by base alone; $P, R, Q$ is the correct order written from most to fewest; $Q, P, R$ ranks by the products of base and exponent, $420$, $360$, and $450$; and $R, Q, P$ ranks by exponent alone.',
    topic: 'number theory',
    chapter: 1,
  },
  {
    q: 'A tool-hire shop charges a fixed booking fee plus the same amount for each day a floor sander is kept. Keeping the sander for $3$ days costs $\\$90$, and keeping it for $7$ days costs $\\$170$. How many dollars does it cost to keep the sander for $12$ days?',
    choices: ['$240$', '$250$', '$270$', '$360$', '$410$'],
    answer: 2,
    solution:
      'Going from $3$ days to $7$ days adds $4$ days and $\\$80$, so each extra day costs $\\$20$. From $7$ days to $12$ days is $5$ more days, so the cost is $170 + 5 \\times 20 = 270$ dollars. The booking fee, $90 - 3 \\times 20 = 30$, never needs to be found. The choice $240 = 12 \\times 20$ drops the booking fee entirely; $250$ adds only four days beyond the seventh; $360$ scales the $3$-day price by four, as if there were no fee; and $410$ adds twelve more days on top of the $7$-day price.',
    topic: 'patterns',
    chapter: 3,
  },
  {
    q: 'A wall clock in a bakery runs at a steady rate but loses $6$ minutes during every real hour. It was set to the correct time at $6{:}00$ in the morning. Later that day its hands stand as shown in the figure. What is the real time at that moment?',
    fig: {
      view: [-1.3, -1.3, 1.3, 1.3],
      elems: [
        { t: 'circle', c: [0, 0], r: 1, fill: false },
        { t: 'seg', a: [0, 0.86], b: [0, 1] },
        { t: 'seg', a: [0.43, 0.745], b: [0.5, 0.866] },
        { t: 'seg', a: [0.745, 0.43], b: [0.866, 0.5] },
        { t: 'seg', a: [0.86, 0], b: [1, 0] },
        { t: 'seg', a: [0.745, -0.43], b: [0.866, -0.5] },
        { t: 'seg', a: [0.43, -0.745], b: [0.5, -0.866] },
        { t: 'seg', a: [0, -0.86], b: [0, -1] },
        { t: 'seg', a: [-0.43, -0.745], b: [-0.5, -0.866] },
        { t: 'seg', a: [-0.745, -0.43], b: [-0.866, -0.5] },
        { t: 'seg', a: [-0.86, 0], b: [-1, 0] },
        { t: 'seg', a: [-0.745, 0.43], b: [-0.866, 0.5] },
        { t: 'seg', a: [-0.43, 0.745], b: [-0.5, 0.866] },
        { t: 'label', p: [0, 0.72], text: '12', dx: 0, dy: 4 },
        { t: 'label', p: [0.72, 0], text: '3', dx: 0, dy: 4 },
        { t: 'label', p: [0, -0.72], text: '6', dx: 0, dy: 4 },
        { t: 'label', p: [-0.72, 0], text: '9', dx: 0, dy: 4 },
        { t: 'seg', a: [0, 0], b: [0, 0.62] },
        { t: 'seg', a: [0, 0], b: [0.46, 0] },
        { t: 'point', p: [0, 0] },
      ],
    },
    choices: ['$2{:}06$ pm', '$3{:}06$ pm', '$3{:}54$ pm', '$4{:}00$ pm', '$4{:}06$ pm'],
    answer: 3,
    solution:
      'The face shows $3$ o’clock, so the clock has advanced $9$ hours, or $540$ minutes, since it was set. In each real hour it advances only $54$ minutes, so $540$ clock-minutes take $540 \\div 54 = 10$ real hours, and the real time is $6{:}00 + 10$ hours $= 4{:}00$ pm; as a check, $10$ real hours lose $60$ minutes, exactly the gap between $3{:}00$ and $4{:}00$. The choice $2{:}06$ pm applies the ratio backwards, shrinking $9$ hours to $8$ hours $6$ minutes; $3{:}06$ pm adds a single $6$ minutes; $3{:}54$ pm adds $6$ minutes for each of the $9$ hours the clock shows rather than the $10$ real hours; and $4{:}06$ pm charges an eleventh hour’s loss.',
    topic: 'rates',
    chapter: 3,
  },
  // ---- Band D ----
  {
    q: 'For an assembly, chairs are set out in rows with the same number of chairs in every row. With $8$ chairs in each row, $5$ students are left standing. With $9$ chairs in each row, every student is seated, every row is full except the last, and the last row has just $2$ students in it. If instead only $7$ chairs were placed in each of the same rows, how many students would be left standing?',
    choices: ['$8$', '$12$', '$17$', '$21$', '$24$'],
    answer: 2,
    solution:
      'Let there be $r$ rows. With $8$ per row the students number $8r + 5$. With $9$ per row, the first $r - 1$ rows are full and the last holds $2$, so the students number $9(r - 1) + 2 = 9r - 7$. Equating, $8r + 5 = 9r - 7$ gives $r = 12$, and there are $101$ students: $12 \\times 8 + 5 = 101$ and $11 \\times 9 + 2 = 101$. Twelve rows of $7$ seat $84$, so $101 - 84 = 17$ students stand. The choice $8$ reads the last row as $2$ students beyond $r$ full rows, solving $8r + 5 = 9r + 2$ to get $3$ rows and $29$ students, of whom $29 - 21 = 8$ stand; $12$ reads it as $2$ short of $r$ full rows, solving $8r + 5 = 9r - 2$ to get $7$ rows and $61$ students, with $61 - 49 = 12$ standing; $21$ takes $r - 1$ full rows but subtracts the $2$ instead of adding it, giving $16$ rows, $133$ students, and $133 - 112 = 21$ standing; and $24 = 101 - 77$ seats only the $11$ full rows of the second layout.',
    topic: 'number theory',
    chapter: 3,
  },
  {
    q: 'Two cashiers at a market stall have different ways to work out the price, in dollars, of $n$ jars of honey. The first computes $a(n + 4) + b(n - 1)$, where $a$ and $b$ are fixed numbers; the second computes $7n + 3$. For every whole number of jars the two prices agree. What is $a - b$?',
    choices: ['$-3$', '$2$', '$3$', '$5$', '$7$'],
    answer: 0,
    solution:
      'Two linear expressions that agree at more than one input agree for every input, so we may test any values we like. At $n = 1$ the second bracket vanishes: $5a = 10$, so $a = 2$. At $n = -4$ the first bracket vanishes: $-5b = -25$, so $b = 5$. (Expanding instead gives $a + b = 7$ and $4a - b = 3$, with the same solution.) Therefore $a - b = 2 - 5 = -3$. The choices $2$ and $5$ are $a$ and $b$ themselves; $3$ is $b - a$, the subtraction the wrong way round; and $7$ is $a + b$, which comes from matching only the coefficient of $n$ and never using the constant term.',
    topic: 'algebra',
    chapter: 2,
  },
  {
    q: 'A collector leaves a chest of identical coins to her nieces and nephews. The first heir is given $2$ coins plus one eighth of what is then left; the second is given $4$ coins plus one eighth of what is then left; the third is given $6$ coins plus one eighth of what is then left; and so on, each heir receiving $2$ more coins than the one before plus one eighth of the remainder. The chest is exactly emptied, and every heir receives the same number of coins. How many coins does each heir receive?',
    choices: ['$12$', '$14$', '$16$', '$28$', '$98$'],
    answer: 1,
    solution:
      'Let the chest hold $T$ coins. The first heir gets $2 + \\frac{T - 2}{8} = \\frac{T + 14}{8}$, leaving $\\frac{7T - 14}{8}$. The second gets $4 + \\frac{1}{8}\\left(\\frac{7T - 14}{8} - 4\\right) = \\frac{7T + 210}{64}$. Setting the two shares equal, $8(T + 14) = 7T + 210$, so $T = 98$ and each share is $\\frac{98 + 14}{8} = 14$ coins. As a check, $98 \\div 14 = 7$ heirs: the seventh finds exactly $14$ coins left, takes them, and the eighth of nothing is nothing. The choice $12$ is the share if each heir took a seventh of the remainder instead of an eighth, which needs a chest of $72$; $16 = 2 \\times 8$ treats the $8$ in the fraction as the number of heirs and hands out the last heir’s fixed gift alone; $28$ divides a doubled chest of $196$ coins, the $2$-coin step counted twice, among the $7$ heirs; and $98$ is the whole chest, not one share.',
    topic: 'fractions',
    chapter: 3,
  },
  {
    q: 'In a tournament, the prize for winning on day $n$ is $2^n$ tokens: $2$ tokens on day $1$, $4$ tokens on day $2$, $8$ tokens on day $3$, and so on. A player who wins on exactly two different days keeps both prizes. How many different totals of at most $600$ tokens can such a player end up with?',
    choices: ['$28$', '$34$', '$35$', '$36$', '$43$'],
    answer: 1,
    solution:
      'A total is $2^a + 2^b$ with $a > b \\ge 1$. Written in binary it has exactly two $1$s, in places $a$ and $b$, and no other pair of days produces the same pattern, so different pairs of days always give different totals: counting totals is counting pairs. If the later day is at most day $8$, the largest total is $256 + 128 = 384$, under the cap, and there are $\\binom{8}{2} = 28$ such pairs. If the later day is day $9$, the total is $512 + 2^b \\le 600$, so $2^b \\le 88$ and $b$ runs from $1$ to $6$, giving $6$ more. Day $10$ already pays $1024$. The count is $28 + 6 = 34$. The choice $28$ stops at day $8$; $35$ lets $512 + 128 = 640$ slip under the cap; $36 = \\binom{9}{2}$ ignores the cap altogether; and $43$ admits a $1$-token prize from a day $0$ that does not exist.',
    topic: 'number theory',
    chapter: 1,
  },
]

export default {
  id: 'intro-algebra-cp1',
  book: 'intro-algebra',
  number: 1,
  after: 3,
  covers: [1, 3],
  title: 'The Slow Clock',
  blurb: 'Bottles, candles, a lagging clock, and a chest of coins: every problem hides one linear fact, and the work is deciding which quantity deserves the letter.',
  minutes: 25,
  problems,
}
