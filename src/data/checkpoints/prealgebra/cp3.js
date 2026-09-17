// Prealgebra — Checkpoint 3: sits after chapter 9 and draws on chapters 1–9.
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'A commuter train rolls along at a steady $81$ kilometers per hour. What is its speed in meters per second?',
    choices: ['$1.35$', '$22.5$', '$291.6$', '$1350$', '$81000$'],
    answer: 1,
    solution: 'One kilometer is $1000$ meters and one hour is $3600$ seconds, so $81$ kilometers in an hour is $81 \\times 1000 = 81000$ meters in $3600$ seconds, and $81000 \\div 3600 = 22.5$ meters per second. The shortcut is to divide by $3.6$. Dividing $81$ by $60$ alone gives $1.35$, as if an hour held sixty seconds and a kilometer were a meter; multiplying by $3.6$ instead of dividing gives $291.6$, the conversion run backwards; $1350$ converts the kilometers but divides by only one $60$; and $81000$ converts the kilometers and forgets the time altogether.',
    topic: 'rates',
    chapter: 7,
  },
  {
    q: 'In a jar of coins, $15\\%$ of the coins are quarters and $10\\%$ are dimes, and there are $42$ more quarters than dimes. How many coins are in the jar?',
    choices: ['$84$', '$168$', '$280$', '$420$', '$840$'],
    answer: 4,
    solution: 'The quarters outnumber the dimes by $15\\% - 10\\% = 5\\%$ of the jar, so $5\\%$ of the jar is $42$ coins and the whole jar is $42 \\times 20 = 840$ coins. Check: $15\\%$ of $840$ is $126$ and $10\\%$ is $84$, which differ by $42$. Doubling $42$ to get $84$ treats $5\\%$ as if it were a half; $168$ divides by $25\\%$, the two percents added instead of subtracted; and $280$ and $420$ divide $42$ by $15\\%$ and by $10\\%$, each treating the gap as though it were one group’s whole count.',
    topic: 'percents',
    chapter: 8,
  },
  {
    q: 'The square in the figure has area $47$. Which whole number is closest to its perimeter?',
    fig: {
      view: [-1.2, -1.2, 8.1, 8.1],
      elems: [
        { t: 'poly', pts: [[0, 0], [6.856, 0], [6.856, 6.856], [0, 6.856]], fill: false },
        { t: 'right', at: [0, 0], from: [6.856, 0], to: [0, 6.856], s: 0.45 },
        { t: 'right', at: [6.856, 6.856], from: [0, 6.856], to: [6.856, 0], s: 0.45 },
        { t: 'tick', a: [0, 0], b: [6.856, 0], n: 1 },
        { t: 'tick', a: [6.856, 0], b: [6.856, 6.856], n: 1 },
        { t: 'tick', a: [6.856, 6.856], b: [0, 6.856], n: 1 },
        { t: 'tick', a: [0, 6.856], b: [0, 0], n: 1 },
        { t: 'label', p: [3.428, 3.428], text: 'area 47' },
      ],
    },
    choices: ['$7$', '$14$', '$27$', '$47$', '$188$'],
    answer: 2,
    solution: 'The side is $\\sqrt{47}$. Since $6.8^2 = 46.24$ and $6.9^2 = 47.61$, the side lies between $6.8$ and $6.9$, a little under $6.86$, so the perimeter $4\\sqrt{47}$ is about $4 \\times 6.86 = 27.4$, and the closest whole number is $27$. Rounding the side to $7$ answers a different question; $14$ doubles the side instead of taking all four; $47$ is the area itself; and $188$ multiplies the area by $4$ rather than the side.',
    topic: 'arithmetic',
    chapter: 9,
  },

  // ---- Band B ----
  {
    q: 'A garden tap fills a $2.5$-liter watering can in $6$ seconds. At the same rate, how many minutes does it take to fill a $200$-liter tub?',
    choices: ['$8$', '$10$', '$20$', '$80$', '$480$'],
    answer: 0,
    solution: 'The tub holds $200 \\div 2.5 = 80$ cans’ worth, and each can takes $6$ seconds, so the tub takes $80 \\times 6 = 480$ seconds, which is $480 \\div 60 = 8$ minutes. Rounding the can down to $2$ liters gives $100$ fills and $600$ seconds, or $10$ minutes; $20$ skips the division by the can’s size and treats every liter as a $6$-second fill; $80$ is the number of cans, not a time; and $480$ is the right amount of time in the wrong unit, seconds instead of minutes.',
    topic: 'rates',
    chapter: 7,
  },
  {
    q: 'Mira’s shelf holds $25\\%$ more books than Theo’s shelf. Theo’s count is what percent less than Mira’s?',
    choices: ['$16\\%$', '$20\\%$', '$25\\%$', '$33\\frac{1}{3}\\%$', '$80\\%$'],
    answer: 1,
    solution: 'Give Theo $100$ books, so Mira has $125$. Theo is short by $25$ books, but the question measures that gap against Mira’s $125$, not Theo’s $100$: $\\frac{25}{125} = \\frac{1}{5} = 20\\%$. The base has switched, which is the whole point. Dividing the $20$ by $1.25$ a second time gives $16\\%$; $25\\%$ measures the gap against the smaller shelf, the base that was not asked for; $33\\frac{1}{3}\\%$ answers the reverse question, how much more the larger shelf holds when the smaller is $25\\%$ less; and $80\\%$ is what Theo’s shelf is of Mira’s, not how much less.',
    topic: 'percents',
    chapter: 8,
  },
  {
    q: 'Two fountains in a plaza each send up a jet of water at a steady interval. The two intervals, in seconds, are in the ratio $4:9$, and the largest whole number of seconds that divides both intervals exactly is $5$. If the two jets go up together now, how many seconds pass before they next go up together?',
    choices: ['$36$', '$45$', '$65$', '$180$', '$900$'],
    answer: 3,
    solution: 'Write the intervals as $4k$ and $9k$ seconds. Because $4$ and $9$ share no factor, the greatest common divisor of $4k$ and $9k$ is $k$ itself, so $k = 5$ and the intervals are $20$ and $45$ seconds. The jets next coincide after the least common multiple, $5 \\times 4 \\times 9 = 180$ seconds; check that $180 = 9 \\times 20 = 4 \\times 45$. The choice $36$ is $4 \\times 9$ with the factor $5$ left out; $45$ is one interval of the slower fountain, when the faster one is only $2.25$ intervals along; $65$ is $5 \\times 13$, the sum of the two intervals rather than a common multiple; and $900$ is the product $20 \\times 45$, a common multiple but far from the least.',
    topic: 'number theory',
    chapter: 3,
  },
  {
    q: 'A jar holds $75$ marbles, red and blue, in the ratio $2:3$. Two fifths of the red marbles are taken out. What is the ratio of red to blue marbles in the jar now?',
    choices: ['$2:5$', '$8:15$', '$2:3$', '$10:9$', '$5:2$'],
    answer: 0,
    solution: 'Turn the ratio into counts first: $2 + 3 = 5$ parts of $15$ marbles each, so $30$ red and $45$ blue. Two fifths of $30$ is $12$, leaving $18$ red beside the untouched $45$ blue, and $18:45$ simplifies by $9$ to $2:5$. Subtracting $\\frac{2}{5}$ from the ratio part $2$ itself gives $\\frac{8}{5}:3 = 8:15$; $2:3$ assumes that taking marbles out leaves the ratio alone, true only if both colors were cut in the same proportion; $10:9$ takes two fifths of the blue instead of the red; and $5:2$ is the right pair written the wrong way around.',
    topic: 'ratios',
    chapter: 7,
  },
  {
    q: 'A bike shop marks a helmet up $60\\%$ above what it paid, then sells it at $25\\%$ off the marked price. The shop’s profit is what percent of what it paid?',
    choices: ['$16\\frac{2}{3}\\%$', '$20\\%$', '$35\\%$', '$45\\%$', '$60\\%$'],
    answer: 1,
    solution: 'Let the shop pay $\\$100$. The tag then reads $\\$160$, and $25\\%$ off that tag removes $\\$40$, so the helmet sells for $\\$120$ and the profit is $\\$20$ on a $\\$100$ cost: $20\\%$. The multipliers say it faster: $1.6 \\times 0.75 = 1.2$. Measuring the $\\$20$ against the $\\$120$ sale price instead of the cost gives $16\\frac{2}{3}\\%$; $35\\%$ subtracts the percents, $60 - 25$, as though both were taken of the same amount; $45\\%$ cuts a quarter off the $60\\%$ markup alone, forgetting that the discount also bites the original $\\$100$; and $60\\%$ is the profit the shop hoped for before the sale.',
    topic: 'percents',
    chapter: 8,
  },

  // ---- Band C ----
  {
    q: 'Two squares stand side by side on a line, with areas $28$ and $63$ as marked. What is the total width of the two squares, in simplest radical form?',
    fig: {
      view: [-1.4, -1.3, 14.7, 9.0],
      elems: [
        { t: 'seg', a: [-1.0, 0], b: [14.3, 0] },
        { t: 'poly', pts: [[0, 0], [5.292, 0], [5.292, 5.292], [0, 5.292]], fill: false },
        { t: 'poly', pts: [[5.292, 0], [13.229, 0], [13.229, 7.937], [5.292, 7.937]], fill: false },
        { t: 'label', p: [2.646, 2.646], text: '28' },
        { t: 'label', p: [9.26, 3.97], text: '63' },
      ],
    },
    choices: ['$\\sqrt{7}$', '$\\sqrt{91}$', '$5\\sqrt{7}$', '$6\\sqrt{7}$', '$5\\sqrt{14}$'],
    answer: 2,
    solution: 'Each side is the square root of its area, so the width is $\\sqrt{28} + \\sqrt{63}$. Pull out the perfect squares: $\\sqrt{28} = \\sqrt{4 \\cdot 7} = 2\\sqrt{7}$ and $\\sqrt{63} = \\sqrt{9 \\cdot 7} = 3\\sqrt{7}$. Like radicals add: $2\\sqrt{7} + 3\\sqrt{7} = 5\\sqrt{7}$, about $13.2$. The choice $\\sqrt{7}$ is the difference of the sides, not the sum; $\\sqrt{91}$ adds the areas under one root, but $\\sqrt{28} + \\sqrt{63}$ is not $\\sqrt{28 + 63}$; $6\\sqrt{7}$ multiplies the coefficients $2$ and $3$ instead of adding them; and $5\\sqrt{14}$ adds the sevens under the root as well as the numbers in front.',
    topic: 'arithmetic',
    chapter: 9,
  },
  {
    q: 'Two shelves hold books in the ratio $3:2$. When $9$ books are moved from the fuller shelf to the other, the two shelves hold the same number. How many books are on the two shelves altogether?',
    choices: ['$18$', '$36$', '$45$', '$54$', '$90$'],
    answer: 4,
    solution: 'Let the shelves hold $3x$ and $2x$ books. After the move they hold $3x - 9$ and $2x + 9$, and these are equal, so $x = 18$. The shelves began with $54$ and $36$ books, and the total is $5x = 90$. Check: $54 - 9 = 45 = 36 + 9$. The choice $18$ is $x$, one ratio part, not a shelf; $36$ is the emptier shelf before the move; $45$ is either shelf after it; and $54$ is the fuller shelf before — each answers a question that was not asked.',
    topic: 'ratios',
    chapter: 7,
  },
  {
    q: 'Priya cycles from home to the lake at $15$ kilometers per hour and rides straight back along the same road at $30$ kilometers per hour. What is her average speed, in kilometers per hour, for the whole ride?',
    choices: ['$10$', '$15$', '$20$', '$22.5$', '$45$'],
    answer: 2,
    solution: 'No distance is given, so choose one that suits both speeds: say the lake is $30$ km away. The ride out takes $2$ hours and the ride back takes $1$, so she covers $60$ km in $3$ hours, an average of $20$ km/h. Any distance gives the same answer, because she always spends twice as long at the slow speed as at the fast one. The choice $10$ divides the one-way distance $30$ by the full $3$ hours, forgetting the return leg; $15$ is the slower speed alone; $22.5$ averages the two speeds, which would only be right if she spent equal time at each; and $45$ adds them.',
    topic: 'rates',
    chapter: 7,
  },

  // ---- Band D ----
  {
    q: 'At a fruit stand there are $2$ apples for every $5$ pears and $3$ pears for every $4$ plums. The stand has more than $210$ pieces of fruit but fewer than $260$. How many plums are there?',
    choices: ['$36$', '$84$', '$90$', '$120$', '$246$'],
    answer: 3,
    solution: 'Pears appear in both ratios with different numbers, $5$ and $3$, so scale each ratio until the pears agree at their least common multiple $15$: apples to pears becomes $6:15$ and pears to plums becomes $15:20$, so apples to pears to plums is $6:15:20$, which is $41$ parts. The total must be a multiple of $41$ strictly between $210$ and $260$; $41 \\times 5 = 205$ is too small and $41 \\times 7 = 287$ too large, so the total is $41 \\times 6 = 246$ and the plums number $20 \\times 6 = 120$. The choice $36$ is the apples; $84$ comes from tripling the second ratio like the first instead of multiplying it by $5$, which gives $6:15:12$, thirty-three parts, the total $231$, and $12 \\times 7 = 84$ plums; $90$ is the pears; and $246$ is the whole stand.',
    topic: 'ratios',
    chapter: 7,
  },
  {
    q: 'Notebooks cost $\\$3.20$ each at a stationery shop. Whenever the total before any discount is $\\$40$ or more, the shop takes $15\\%$ off the whole purchase. Jun has $\\$42$ and buys as many notebooks as the money allows. How much money does Jun have left?',
    choices: ['$\\$0.40$', '$\\$1.20$', '$\\$3.60$', '$\\$6.64$', '$\\$7.20$'],
    answer: 1,
    solution: 'There are two branches. Without the discount, $42 \\div 3.20$ is a little over $13$, so $13$ notebooks fit the budget; but $13 \\times 3.20 = 41.60$ already passes $\\$40$, so the discount switches on, Jun pays only $\\$35.36$, and money is left for more. With the discount, each notebook effectively costs $0.85 \\times 3.20 = \\$2.72$, and $42 \\div 2.72$ is about $15.4$, so try $15$: the pre-discount total is $\\$48$, which clears the threshold, and $85\\%$ of $48$ is $\\$40.80$, within budget. Sixteen would cost $0.85 \\times 51.20 = \\$43.52$, too much. So Jun buys $15$ notebooks and keeps $42 - 40.80 = \\$1.20$. The choice $\\$0.40$ pays full price for $13$ notebooks, missing the discount those $13$ have already earned; $\\$3.60$ stops at $12$ notebooks to stay under the $\\$40$ line, as if crossing it were a penalty; $\\$6.64$ applies the discount to $13$ notebooks but never asks whether the savings buy more; and $\\$7.20$ is the amount the discount took off the $15$ notebooks, not the money left in Jun’s pocket.',
    topic: 'algebra',
    chapter: 5,
  },
  {
    q: 'Every fraction in lowest terms whose denominator is at most $12$ and whose value lies strictly between $\\frac{1}{3}$ and $\\frac{2}{3}$ is written on a card. What is the sum of the numbers on all the cards?',
    choices: ['$6\\frac{1}{2}$', '$7$', '$7\\frac{1}{2}$', '$8\\frac{1}{2}$', '$11$'],
    answer: 2,
    solution: 'Listing denominator by denominator gives $\\frac{1}{2}$; $\\frac{2}{5}$, $\\frac{3}{5}$; $\\frac{3}{7}$, $\\frac{4}{7}$; $\\frac{3}{8}$, $\\frac{5}{8}$; $\\frac{4}{9}$, $\\frac{5}{9}$; $\\frac{4}{11}$, $\\frac{5}{11}$, $\\frac{6}{11}$, $\\frac{7}{11}$; and $\\frac{5}{12}$, $\\frac{7}{12}$, fifteen cards in all, and the list shows why there is no need to add them one by one. The fences $\\frac{1}{3}$ and $\\frac{2}{3}$ sit at the same distance from $\\frac{1}{2}$, so whenever $\\frac{a}{b}$ is on a card, its mirror $1 - \\frac{a}{b} = \\frac{b - a}{b}$ has the same denominator, is still in lowest terms, and is also on a card. The cards pair off into seven pairs that each sum to $1$, and the one card that is its own mirror, $\\frac{1}{2}$, is left over: the total is $7 + \\frac{1}{2} = 7\\frac{1}{2}$. Reading at most $12$ as less than $12$ drops $\\frac{5}{12}$ and $\\frac{7}{12}$ and gives $6\\frac{1}{2}$; pairing off and forgetting the unpaired $\\frac{1}{2}$ gives $7$; adding the fences $\\frac{1}{3}$ and $\\frac{2}{3}$ as an eighth pair gives $8\\frac{1}{2}$; and writing the seven reducible fractions such as $\\frac{2}{4}$ and $\\frac{4}{8}$ on cards too gives eleven pairs and $11$.',
    topic: 'fractions',
    chapter: 4,
  },
  {
    q: 'At the end of a summer camp every camper filled in a survey: $75\\%$ said they enjoyed canoeing, $80\\%$ enjoyed the campfire, and $90\\%$ enjoyed archery. What is the smallest possible percent of campers who enjoyed all three?',
    fig: {
      view: [-2.4, -2.3, 4.6, 4.2],
      elems: [
        { t: 'circle', c: [0, 0], r: 1.7, fill: false },
        { t: 'circle', c: [2.2, 0], r: 1.7, fill: false },
        { t: 'circle', c: [1.1, 1.9], r: 1.7, fill: false },
        { t: 'label', p: [-0.9, -0.9], text: 'canoeing 75%' },
        { t: 'label', p: [3.1, -0.9], text: 'campfire 80%' },
        { t: 'label', p: [1.1, 2.9], text: 'archery 90%' },
      ],
    },
    choices: ['$25\\%$', '$45\\%$', '$54\\%$', '$55\\%$', '$75\\%$'],
    answer: 1,
    solution: 'Count who missed out. $25\\%$ did not enjoy canoeing, $20\\%$ did not enjoy the campfire, and $10\\%$ did not enjoy archery. A camper who failed to enjoy all three belongs to at least one of those groups, and together the groups hold at most $25 + 20 + 10 = 55\\%$ of the campers, with equality only when no camper is in two of them. So at least $100 - 55 = 45\\%$ enjoyed all three, and $45\\%$ is reachable by keeping the three groups apart. The choice $25\\%$ is the largest group that missed one activity; $54\\%$ multiplies $0.75 \\times 0.8 \\times 0.9$, which assumes the answers are independent and gives a typical value rather than the least possible; $55\\%$ is the bound on those who missed something, not its complement; and $75\\%$ is the largest possible share of campers who enjoyed all three, not the smallest.',
    topic: 'percents',
    chapter: 8,
  },
]

export default {
  id: 'prealgebra-cp3',
  book: 'prealgebra',
  number: 3,
  after: 9,
  covers: [1, 9],
  title: 'Sliding Scales',
  blurb: 'Speeds, percents, and ratios that each hide a switch of unit or base, two square roots to tame, and a camp survey that only yields to counting who missed out.',
  minutes: 25,
  problems,
}
