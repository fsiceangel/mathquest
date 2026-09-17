// Checkpoint 2 — The Faded Receipt
// Fifteen original MathQuest problems drawing on chapters 1–6, ordered from a
// contest paper’s middle to its hardest.

export default {
  id: 'intro-algebra-cp2',
  book: 'intro-algebra',
  number: 2,
  after: 6,
  covers: [1, 6],
  title: 'The Faded Receipt',
  blurb:
    'Prices, ages, race margins and clock hands that keep their equations hidden; every problem reads like a story until the right pair of facts lines up.',
  minutes: 25,
  problems: [
    {
      q: 'A soup recipe for $8$ servings calls for $3$ cups of stock. Priya’s measuring jug is marked only in milliliters, and $1$ cup is $240$ milliliters. How many milliliters of stock does she need to make $14$ servings?',
      choices: ['$720$', '$1260$', '$1440$', '$1680$', '$3360$'],
      answer: 1,
      solution:
        'Fourteen servings is $\\frac{14}{8} = \\frac{7}{4}$ of the recipe, so the stock scales to $3 \\times \\frac{7}{4} = 5\\frac{1}{4}$ cups, and $5\\frac{1}{4} \\times 240 = 1260$ milliliters. The choice $720$ converts the original $3$ cups without scaling at all, $1440$ rounds the stock up to a whole $6$ cups before converting, $1680$ scales by the six extra servings instead of the original eight, giving $3 \\times \\frac{14}{6} = 7$ cups, and $3360$ uses a full cup for each of the $14$ servings.',
      topic: 'ratios',
      chapter: 6,
    },
    {
      q: 'A jacket is marked $30\\%$ off, and $10\\%$ sales tax is added to the discounted price at the register. The receipt shows a final total of $\\$61.60$. What was the jacket’s sticker price?',
      choices: ['$\\$56$', '$\\$72.80$', '$\\$77$', '$\\$80$', '$\\$88$'],
      answer: 3,
      solution:
        'The discount multiplies the sticker price by $0.7$ and the tax then multiplies by $1.1$, so the final total is $0.7 \\times 1.1 = 0.77$ of the sticker price. Undoing that gives $61.60 \\div 0.77 = 80$, so the jacket was marked $\\$80$: check $80 \\to 56 \\to 61.60$. The choice $\\$56$ undoes only the tax, $\\$72.80$ multiplies by $1.3$ to put the discount back instead of dividing by $0.7$, $\\$77$ nets the two percents into a single $20\\%$ discount and divides by $0.8$, and $\\$88$ undoes only the discount.',
      topic: 'percents',
      chapter: 6,
    },
    {
      q: 'A rectangular sheet of card is cut into four smaller rectangles by one cut parallel to each side, as shown. Three of the pieces have areas $21$, $35$ and $27$ square centimeters. What is the area, in square centimeters, of the whole sheet?',
      fig: {
        view: [-1, -1, 17, 17],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [16, 16], [0, 16]], fill: false },
          { t: 'seg', a: [6, 0], b: [6, 16] },
          { t: 'seg', a: [0, 9], b: [16, 9] },
          { t: 'label', p: [3, 12.5], text: '21', dx: 0, dy: 5 },
          { t: 'label', p: [11, 12.5], text: '35', dx: 0, dy: 5 },
          { t: 'label', p: [3, 4.5], text: '27', dx: 0, dy: 5 },
          { t: 'label', p: [11, 4.5], text: '?', dx: 0, dy: 5 },
        ],
      },
      choices: ['$128$', '$131$', '$139$', '$145$', '$166$'],
      answer: 0,
      solution:
        'The two top pieces share a height, so their widths are in the ratio $21 : 35 = 3 : 5$. The two bottom pieces share the same pair of widths, so the unlabeled piece is $\\frac{5}{3}$ of the $27$ piece: $27 \\times \\frac{5}{3} = 45$. Equivalently, the products of diagonally opposite pieces are equal, $21 \\times 45 = 35 \\times 27 = 945$. The whole sheet is then $21 + 35 + 27 + 45 = 128$. Each wrong choice fills the unlabeled piece with a sum of the given areas instead of comparing them: $131$ uses $21 + 27 = 48$, the left column; $139$ uses $21 + 35 = 56$, the top row; $145$ uses $35 + 27 = 62$, the two neighbors of the unlabeled piece; and $166$ uses all three, $83$.',
      topic: 'geometry',
      chapter: 4,
    },
    {
      q: 'A $35$-question contest awards $5$ points for each correct answer, takes away $2$ points for each wrong answer, and gives $0$ for a question left blank. Marcus left exactly $7$ questions blank and scored $70$ points. How many questions did he answer correctly?',
      choices: ['$10$', '$14$', '$18$', '$20$', '$25$'],
      answer: 2,
      solution:
        'Set the blanks aside first: Marcus answered $35 - 7 = 28$ questions. If $c$ of them were correct, then $28 - c$ were wrong, and the score is $5c - 2(28 - c) = 7c - 56 = 70$, so $7c = 126$ and $c = 18$. The choice $10$ is the number he got wrong, $14$ ignores the penalty and divides $70$ by $5$, $20$ treats the blanks as wrong answers and solves $7c - 70 = 70$, and $25$ adds the seven blanks to the correct count as if they had been marked right.',
      topic: 'algebra',
      chapter: 3,
    },
    {
      q: 'Two jars hold marbles, with $7$ marbles in the first jar for every $2$ in the second. After $15$ marbles are moved from the first jar to the second, the first jar holds $4$ marbles for every $5$ in the second. Marbles are then moved from the first jar to the second, one at a time, until the second jar holds exactly twice as many as the first. How many marbles does the second jar hold at that point?',
      choices: ['$10$', '$15$', '$20$', '$25$', '$30$'],
      answer: 4,
      solution:
        'Moving marbles between the jars leaves the total $T$ unchanged, and both ratios split it into $9$ parts, so one part is $\\frac{T}{9}$ before and after the first move. The first jar drops from $7$ parts to $4$ parts, a loss of $3$ parts, and that loss is the $15$ marbles moved. So a part is $5$ marbles and $T = 45$: the jars go from $35$ and $10$ to $20$ and $25$. The final arrangement splits the same $45$ marbles $1 : 2$, so the second jar ends with $30$ and the first with $15$, after $5$ more marbles cross. The choice $10$ is the second jar before anything moves, $15$ is the first jar at the end, and $20$ and $25$ are the two jars after the first move, where a student who forgets the last step stops.',
      topic: 'ratios',
      chapter: 6,
    },
    {
      q: 'A share price rises by $x\\%$ on Monday and then falls by $x\\%$ on Tuesday. At Tuesday’s close it is $36\\%$ below Monday’s opening price. What is $x$?',
      choices: ['$6$', '$18$', '$36$', '$60$', '$64$'],
      answer: 3,
      solution:
        'Write $r = \\frac{x}{100}$. The rise multiplies the price by $1 + r$ and the fall by $1 - r$, so the two days together multiply it by $(1 + r)(1 - r) = 1 - r^2$. Ending $36\\%$ below the start means $1 - r^2 = 0.64$, so $r^2 = 0.36$, $r = 0.6$ and $x = 60$: check $1.6 \\times 0.4 = 0.64$. The choice $6$ takes the square root of $36$ and forgets the price is a percent, $18$ splits the $36\\%$ evenly across the two days, $36$ uses the whole drop as the daily rate, and $64$ is where the price ends as a percent of where it began.',
      topic: 'percents',
      chapter: 6,
    },
    {
      q: 'A colony of bacteria triples in size every $12$ minutes. It was placed in a dish at $1{:}00$ pm and had exactly filled the dish at $3{:}42$ pm. At what time was the dish $\\frac{1}{81}$ full?',
      choices: ['$1{:}02$ pm', '$2{:}21$ pm', '$2{:}42$ pm', '$2{:}54$ pm', '$3{:}06$ pm'],
      answer: 3,
      solution:
        'Run the clock backward: each $12$ minutes before $3{:}42$ the colony was one third of its size. Since $81 = 3^4$, the dish was $\\frac{1}{81}$ full four triplings earlier, that is $4 \\times 12 = 48$ minutes before $3{:}42$, at $2{:}54$ pm. The starting time is a distraction. The choice $1{:}02$ divides the $162$ minutes of growth by $81$ and adds $2$ minutes to the start, $2{:}21$ goes back $81$ minutes, $2{:}42$ goes back five triplings, and $3{:}06$ goes back three, as if $81$ were $3^3$.',
      topic: 'patterns',
      chapter: 1,
    },
    {
      q: 'At a bakery stall, $2$ muffins, $3$ teas and $1$ scone cost $\\$17$; $1$ muffin, $1$ tea and $3$ scones cost $\\$13$; and $4$ muffins, $5$ teas and $7$ scones cost $\\$43$. How much do $5$ muffins and $8$ teas cost?',
      choices: ['$\\$30$', '$\\$38$', '$\\$43$', '$\\$47$', '$\\$51$'],
      answer: 1,
      solution:
        'Call the prices $m$, $t$ and $s$. Three of the first order minus one of the second is $3(2m + 3t + s) - (m + t + 3s) = 5m + 8t$, exactly the basket asked for, so it costs $3 \\times 17 - 13 = 38$ dollars. The third order is the first plus twice the second ($17 + 26 = 43$), so it adds nothing new and the individual prices cannot be pinned down — only the combination can. The choice $\\$30$ adds the first two orders, which buys $3$ muffins, $4$ teas and $4$ scones; $\\$43$ reads off the third order; $\\$47$ is twice the first order plus the second, which is $5$ muffins, $7$ teas and $5$ scones; and $\\$51$ triples the first order without taking the second away.',
      topic: 'algebra',
      chapter: 5,
    },
    {
      q: 'In a $100$-meter race Asha finishes exactly $10$ meters ahead of Ben, and in a $100$-meter race Ben finishes exactly $20$ meters ahead of Chen. Each runner always runs at the same constant speed. If Asha and Chen run a $100$-meter race, by how many meters does Asha win?',
      choices: ['$28$', '$30$', '$32$', '$72$', '$90$'],
      answer: 0,
      solution:
        'When Asha runs $100$ meters, Ben runs $90$, so Ben’s speed is $0.9$ of Asha’s. When Ben runs $100$, Chen runs $80$, so Chen’s speed is $0.8$ of Ben’s and therefore $0.9 \\times 0.8 = 0.72$ of Asha’s. In the time Asha covers $100$ meters, Chen covers $72$, and Asha wins by $28$ meters. The choice $30$ adds the two margins as if they were measured against the same runner, $32$ adds the $2$-meter overlap instead of removing it, $72$ is how far Chen has run, and $90$ is how far Ben has run when Asha finishes.',
      topic: 'ratios',
      chapter: 6,
    },
    {
      q: 'A rectangular garden bed is to be reshaped. If its length is increased by $5$ meters and its width decreased by $2$ meters, as shown, its area does not change. If instead its length is decreased by $4$ meters and its width increased by $4$ meters, its area again does not change. What is the perimeter of the original bed, in meters?',
      fig: {
        view: [-1, -1.4, 16.5, 7.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 6], [0, 6]], fill: false },
          { t: 'seg', a: [10, 0], b: [15, 0], dash: true },
          { t: 'seg', a: [15, 0], b: [15, 4], dash: true },
          { t: 'seg', a: [15, 4], b: [0, 4], dash: true },
          { t: 'label', p: [12.5, 0], text: '5', dx: 0, dy: 16 },
          { t: 'label', p: [10, 5], text: '2', dx: 12, dy: 4 },
        ],
      },
      choices: ['$16$', '$28$', '$32$', '$38$', '$60$'],
      answer: 2,
      solution:
        'Let the bed be $x$ by $y$. The first reshaping gives $(x + 5)(y - 2) = xy$; the $xy$ terms cancel and $5y - 2x = 10$ remains. The second gives $(x - 4)(y + 4) = xy$, which reduces to $4x - 4y = 16$, or $x = y + 4$. Substituting, $5y - 2y - 8 = 10$, so $y = 6$ and $x = 10$: check $15 \\times 4 = 6 \\times 10 = 60$. The perimeter is $2(10 + 6) = 32$. The choice $16$ stops at $x + y$, $28$ is the perimeter of the $10$ by $4$ bed left after shrinking the width and forgetting to lengthen it, $38$ is the perimeter of the reshaped $15$ by $4$ bed, and $60$ is the area.',
      topic: 'geometry',
      chapter: 4,
    },
    {
      q: 'Exactly one pair of parentheses is inserted into the expression $6 \\times 4 - 3 \\times 2 + 5$, enclosing at least two of the numbers, and the result is worked out. What is the difference between the largest and the smallest values that can be obtained this way?',
      choices: ['$30$', '$40$', '$44$', '$47$', '$54$'],
      answer: 4,
      solution:
        'There are only ten ways to place the parentheses, and four of them leave the value at $23$. The others give $47$ from $(6 \\times 4 - 3) \\times 2 + 5$, $18$ from $6 \\times (4 - 3 \\times 2 + 5)$, $17$ from $6 \\times (4 - 3) \\times 2 + 5$, $13$ from $6 \\times 4 - (3 \\times 2 + 5)$, $3$ from $6 \\times 4 - 3 \\times (2 + 5)$, and $-7$ from $6 \\times (4 - 3 \\times 2) + 5$. The largest is $47$ and the smallest is $-7$, so the difference is $47 - (-7) = 54$. The choice $30$ uses the plain value $23$ as the largest, $40$ subtracts $7$ instead of $-7$, $44$ takes the smallest to be $3$ by missing the one negative outcome, and $47$ is the largest value on its own.',
      topic: 'logic',
      chapter: 1,
    },
    {
      q: 'Lin says to her younger cousin Tam, “I am twice as old as you were when I was as old as you are now.” The sum of their ages today is $105$. How old is Lin?',
      choices: ['$45$', '$60$', '$63$', '$70$', '$84$'],
      answer: 1,
      solution:
        'Let Lin be $L$ and Tam be $T$ today. The gap $g = L - T$ never changes, so Lin was Tam’s present age $g$ years ago, and Tam was then $T - g = 2T - L$. Lin’s claim is $L = 2(2T - L)$, so $3L = 4T$ and the ages are in the ratio $4 : 3$. With a sum of $105$, Lin is $60$ and Tam is $45$: fifteen years ago Lin was $45$ and Tam was $30$, and $60$ is twice $30$. The choice $45$ is Tam’s age, $63$ comes from doubling only Tam’s present age, $L = 2T - g$, which with $g = L - T$ gives a $3 : 2$ split, $70$ reads the claim as simply “twice as old as you are now”, and $84$ takes Lin’s $4$ parts out of $5$ instead of out of $7$.',
      topic: 'algebra',
      chapter: 5,
    },
    {
      q: 'Four parcels have different weights, each a whole number of grams. Weighed two at a time in every possible pairing, the six readings, in some order, are $14$, $21$, $25$, $28$, $32$ and $39$ grams. How many grams does the heaviest parcel weigh?',
      choices: ['$18$', '$19.5$', '$21.5$', '$23$', '$25$'],
      answer: 3,
      solution:
        'Call the weights $a < b < c < d$. Every parcel appears in three pairings, so the six readings add to three times the total: $159 \\div 3 = 53$. The lightest reading is $a + b = 14$ and the heaviest is $c + d = 39$; the next ones in from each end are $a + c = 21$ and $b + d = 32$. That leaves $25$ and $28$ as $a + d$ and $b + c$ in some order. If $b + c = 25$, then $a = \\frac{(a + b) + (a + c) - (b + c)}{2} = \\frac{14 + 21 - 25}{2} = 5$, giving $5$, $9$, $16$, $23$, which reproduces all six readings. If $b + c = 28$, the same step gives $a = 3.5$ grams, which is not a whole number, so the heaviest parcel is $23$ grams. The choice $18$ subtracts $21$ from $39$, $19.5$ halves the heaviest reading as if the two heaviest parcels were equal, $21.5$ is the heaviest parcel in the rejected half-gram reading of the middle pair, and $25$ takes a middle reading for a parcel.',
      topic: 'logic',
      chapter: 5,
    },
    {
      q: 'A receipt lists three lines: $2$ pens, $1$ ruler and $3$ notepads for $\\$10.\\square 5$; $3$ pens, $4$ rulers and $1$ notepad for $\\$8.90$; and $1$ pen, $2$ rulers and $2$ notepads for $\\$7.45$, where $\\square$ is a digit smudged beyond reading. Each item has a fixed price in whole cents. What is the smudged digit?',
      choices: ['$3$', '$5$', '$6$', '$8$', '$9$'],
      answer: 2,
      solution:
        'Work in cents with pen $p$, ruler $r$, notepad $n$ and smudged digit $k$: $2p + r + 3n = 1005 + 10k$, $3p + 4r + n = 890$ and $p + 2r + 2n = 745$. The last line gives $p = 745 - 2r - 2n$; putting that into the other two leaves $2r + 5n = 1345$ and $3r + n = 485 - 10k$. Eliminating $n$ gives $13r = 1080 - 50k$, so $1080 - 50k$ must be a multiple of $13$. Since $1080 = 13 \\times 83 + 1$ and $50 = 13 \\times 3 + 11$, this needs $11k$ to leave remainder $1$ on division by $13$, and among the digits only $k = 6$ works ($66 = 65 + 1$). Then $r = 60$, $n = 245$ and $p = 135$: a pen is $\\$1.35$, a ruler $\\$0.60$, a notepad $\\$2.45$, and the first line is $\\$10.65$. Every other digit leaves the ruler at a fraction of a cent: $3$ gives $\\frac{930}{13}$, $5$ gives $\\frac{830}{13}$, $8$ gives $\\frac{680}{13}$ and $9$ gives $\\frac{630}{13}$, so those choices are what a student picks by solving with decimals and rounding.',
      topic: 'logic',
      chapter: 5,
    },
    {
      q: 'The clock shows $3{:}00$. Both hands turn at their usual steady rates. How many minutes after $3{:}00$ will the two hands next form a right angle?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5, fill: false },
          { t: 'seg', a: [0, 4.5], b: [0, 5] },
          { t: 'seg', a: [2.25, 3.9], b: [2.5, 4.33] },
          { t: 'seg', a: [3.9, 2.25], b: [4.33, 2.5] },
          { t: 'seg', a: [4.5, 0], b: [5, 0] },
          { t: 'seg', a: [3.9, -2.25], b: [4.33, -2.5] },
          { t: 'seg', a: [2.25, -3.9], b: [2.5, -4.33] },
          { t: 'seg', a: [0, -4.5], b: [0, -5] },
          { t: 'seg', a: [-2.25, -3.9], b: [-2.5, -4.33] },
          { t: 'seg', a: [-3.9, -2.25], b: [-4.33, -2.5] },
          { t: 'seg', a: [-4.5, 0], b: [-5, 0] },
          { t: 'seg', a: [-3.9, 2.25], b: [-4.33, 2.5] },
          { t: 'seg', a: [-2.25, 3.9], b: [-2.5, 4.33] },
          { t: 'label', p: [0, 3.7], text: '12', dx: 0, dy: 4 },
          { t: 'label', p: [3.7, 0], text: '3', dx: 0, dy: 4 },
          { t: 'label', p: [0, -3.7], text: '6', dx: 0, dy: 4 },
          { t: 'label', p: [-3.7, 0], text: '9', dx: 0, dy: 4 },
          { t: 'seg', a: [0, 0], b: [2.8, 0] },
          { t: 'seg', a: [0, 0], b: [0, 4.1] },
          { t: 'point', p: [0, 0] },
        ],
      },
      choices: ['$16\\frac{4}{11}$', '$30$', '$32\\frac{8}{11}$', '$36$', '$49\\frac{1}{11}$'],
      answer: 2,
      solution:
        'The minute hand turns $6^\\circ$ per minute and the hour hand $0.5^\\circ$ per minute, so the minute hand gains $5.5^\\circ$ on the hour hand every minute. At $3{:}00$ the minute hand is $90^\\circ$ behind the hour hand, so the hands already form a right angle, and the next one comes when the minute hand is $90^\\circ$ ahead: it must gain $180^\\circ$, which takes $\\frac{180}{5.5} = \\frac{360}{11} = 32\\frac{8}{11}$ minutes. The choice $16\\frac{4}{11}$ gains only $90^\\circ$, which is when the hands overlap, $30$ freezes the hour hand on the $3$ and moves the minute hand to the $6$, $36$ has the hour hand turning a full degree per minute so the gain is only $5^\\circ$, and $49\\frac{1}{11}$ gains $270^\\circ$, which is when the hands point in opposite directions.',
      topic: 'rates',
      chapter: 6,
    },
  ],
}
