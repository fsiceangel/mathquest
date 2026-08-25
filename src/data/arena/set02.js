// Arena paper — The Clockwork Circuit
// Twenty-five original MathQuest problems, ordered from gentle to genuinely hard.

const problems = [
  {
    q: 'What is $\\frac{2}{5}$ of $45$?',
    choices: ['$9$', '$18$', '$22.5$', '$27$', '$90$'],
    answer: 1,
    solution:
      'One fifth of $45$ is $\\frac{45}{5} = 9$, so two fifths is $2 \\times 9 = 18$. Stopping at $9$ gives only one fifth; $27$ is the other three fifths; $22.5$ is half of $45$; and $90$ comes from multiplying by $2$ but forgetting to divide by $5$.',
    topic: 'fractions',
  },
  {
    q: 'A ribbon $2.4$ meters long is cut into pieces that are each $0.3$ meters long. How many pieces are there?',
    choices: ['$0.8$', '$6$', '$7$', '$8$', '$80$'],
    answer: 3,
    solution:
      'Multiply both numbers by $10$ to clear the decimals: $2.4 \\div 0.3 = 24 \\div 3 = 8$. So there are $8$ pieces. Dividing by $3$ instead of $0.3$ gives $0.8$, and shifting the decimal one place too far gives $80$. There is no off-by-one here — each cut piece is counted once, so $7$ is a miscount.',
    topic: 'arithmetic',
  },
  {
    q: 'What is the greatest common divisor of $84$ and $126$?',
    choices: ['$42$', '$84$', '$126$', '$210$', '$252$'],
    answer: 0,
    solution:
      'Factor both: $84 = 2^2 \\cdot 3 \\cdot 7$ and $126 = 2 \\cdot 3^2 \\cdot 7$. Take the smaller power of each shared prime: $2 \\cdot 3 \\cdot 7 = 42$. (A quick check: $84 = 2 \\times 42$ and $126 = 3 \\times 42$.) The number $252$ is the least common multiple, and $210$ is the sum — both answer different questions.',
    topic: 'number theory',
  },
  {
    q: 'In the triangle shown, $\\angle B = 42^\\circ$ and $\\angle C = 65^\\circ$. How many degrees is $\\angle A$?',
    fig: {
      view: [-1, -1, 8, 5.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [7, 0], [4.93, 4.44]], fill: false },
        { t: 'point', p: [0, 0], label: 'B', dx: -12, dy: 12 },
        { t: 'point', p: [7, 0], label: 'C', dx: 10, dy: 12 },
        { t: 'point', p: [4.93, 4.44], label: 'A', dx: 4, dy: -8 },
        { t: 'angle', at: [0, 0], from: [7, 0], to: [4.93, 4.44], r: 0.9, label: '42' },
        { t: 'angle', at: [7, 0], from: [4.93, 4.44], to: [0, 0], r: 0.9, label: '65' },
      ],
    },
    choices: ['$25$', '$48$', '$73$', '$107$', '$253$'],
    answer: 2,
    solution:
      'The three angles of a triangle add to $180^\\circ$. The two given angles total $42 + 65 = 107$, so $\\angle A = 180 - 107 = 73$ degrees. Choosing $107$ stops one step early, and $253$ comes from using $360$ instead of $180$. Nothing in the picture is a right angle, so $90 - 42 = 48$ and $180 - 90 - 65 = 25$ are both built on an assumption that was never given.',
    topic: 'geometry',
  },
  {
    q: 'A jacket costs $\\$80$. During a sale it is marked $15\\%$ off. What is the sale price?',
    choices: ['$\\$12$', '$\\$65$', '$\\$68$', '$\\$72$', '$\\$92$'],
    answer: 2,
    solution:
      'Ten percent of $\\$80$ is $\\$8$, and five percent is half of that, $\\$4$, so the discount is $\\$8 + \\$4 = \\$12$. The sale price is $\\$80 - \\$12 = \\$68$. A neater route: paying $85\\%$ means $0.85 \\times 80 = 68$. The choice $\\$12$ is the discount itself, $\\$65$ comes from subtracting $15$ dollars instead of $15$ percent, $\\$72$ is $10\\%$ off, and $\\$92$ adds the discount instead of subtracting it.',
    topic: 'percents',
  },
  {
    q: 'Maya read $\\frac{1}{3}$ of a book on Monday and $\\frac{1}{4}$ of the book on Tuesday. What fraction of the book is still unread?',
    choices: ['$\\frac{1}{12}$', '$\\frac{2}{7}$', '$\\frac{7}{12}$', '$\\frac{5}{7}$', '$\\frac{5}{12}$'],
    answer: 4,
    solution:
      'She has read $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$ of the book. What remains is $1 - \\frac{7}{12} = \\frac{5}{12}$. The choice $\\frac{7}{12}$ answers the wrong question (how much she read), $\\frac{1}{12}$ comes from subtracting the two fractions, and $\\frac{2}{7}$ comes from adding numerators and denominators, which is never a legal move.',
    topic: 'fractions',
  },
  {
    q: 'A train covers $210$ kilometers in $2.5$ hours. Traveling at the same steady speed, how many kilometers does it cover in $4$ hours?',
    choices: ['$84$', '$336$', '$420$', '$525$', '$840$'],
    answer: 1,
    solution:
      'First find the speed: $210 \\div 2.5 = 84$ kilometers per hour. Then $84 \\times 4 = 336$ kilometers. The choice $84$ is the speed, not a distance; $840$ is $210 \\times 4$, which forgets that $210$ already took $2.5$ hours; $525$ is $210 \\times 2.5$, multiplying by the time instead of dividing; and $420$ just doubles $210$.',
    topic: 'ratios',
  },
  {
    q: 'A pizza shop offers $4$ kinds of crust, $3$ kinds of sauce, and $6$ toppings. A pizza uses one crust, one sauce, and two different toppings. How many different pizzas are possible?',
    choices: ['$180$', '$360$', '$72$', '$60$', '$13$'],
    answer: 0,
    solution:
      'Choose the two toppings first. There are $\\frac{6 \\times 5}{2} = 15$ ways, dividing by $2$ because pepper-then-olive is the same pizza as olive-then-pepper. Now multiply by the independent choices: $4 \\times 3 \\times 15 = 180$. The choice $360$ forgets to divide by $2$ and treats the topping order as meaningful, $72$ uses just one topping, $60$ leaves out the sauce, and $13$ adds when it should multiply.',
    topic: 'counting',
  },
  {
    q: 'The mean of six numbers is $21$. One of the numbers is deleted, and the mean of the five that remain is $23$. What number was deleted?',
    choices: ['$2$', '$11$', '$19$', '$21$', '$23$'],
    answer: 1,
    solution:
      'Turn each mean into a total. Six numbers averaging $21$ total $6 \\times 21 = 126$. Five numbers averaging $23$ total $5 \\times 23 = 115$. The deleted number is the difference: $126 - 115 = 11$. It makes sense that it is small — removing it pulled the mean up. The choice $2$ is only the gap between the two means, and $19$ comes from $21 - 2$.',
    topic: 'statistics',
  },
  {
    q: 'The trapezoid shown has parallel sides of length $10$ and $6$, and the distance between those sides is $4$. What is its area?',
    fig: {
      view: [-1, -1.2, 11, 5.5],
      elems: [
        { t: 'poly', pts: [[0, 0], [10, 0], [8, 4], [2, 4]], fill: false },
        { t: 'seg', a: [2, 4], b: [2, 0], dash: true },
        { t: 'right', at: [2, 0], from: [10, 0], to: [2, 4] },
        { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 16 },
        { t: 'label', p: [5, 4], text: '6', dx: 0, dy: -8 },
        { t: 'label', p: [2, 2], text: '4', dx: -12, dy: 4 },
      ],
    },
    choices: ['$16$', '$24$', '$32$', '$40$', '$64$'],
    answer: 2,
    solution:
      'The area of a trapezoid is the average of the two parallel sides times the height: $\\frac{10 + 6}{2} \\times 4 = 8 \\times 4 = 32$. The choice $64$ multiplies $(10+6)$ by $4$ and forgets to halve, $40$ uses only the long side, $24$ uses only the short side, and $16$ stops after adding the two parallel sides.',
    topic: 'geometry',
  },
  {
    q: 'A bag holds $4$ red, $5$ blue, and $3$ green marbles. Two marbles are drawn at random without replacement. What is the probability that both are blue?',
    choices: ['$\\frac{1}{6}$', '$\\frac{5}{33}$', '$\\frac{25}{144}$', '$\\frac{10}{33}$', '$\\frac{5}{12}$'],
    answer: 1,
    solution:
      'There are $12$ marbles. The first draw is blue with probability $\\frac{5}{12}$. Once a blue marble is gone, $4$ of the remaining $11$ are blue, so the second draw is blue with probability $\\frac{4}{11}$. Multiply: $\\frac{5}{12} \\times \\frac{4}{11} = \\frac{20}{132} = \\frac{5}{33}$. The choice $\\frac{25}{144}$ is $\\left(\\frac{5}{12}\\right)^2$, which would be right only if the first marble were put back; $\\frac{5}{12}$ describes just the first draw; and $\\frac{10}{33}$ is twice the answer, from counting each blue pair in both orders on top but not on the bottom.',
    topic: 'probability',
  },
  {
    q: 'If $3x + 7 = 5x - 11$, what is the value of $x^2$?',
    choices: ['$81$', '$2$', '$4$', '$9$', '$18$'],
    answer: 0,
    solution:
      'Collect the $x$ terms on one side: subtract $3x$ from both sides to get $7 = 2x - 11$, then add $11$ to get $18 = 2x$, so $x = 9$. The question asks for $x^2 = 81$. Choice $9$ is $x$ itself, $18$ is $2x$, and $2$ and $4$ come from mishandling the constants as $11 - 7 = 4$ and reading off $x = 2$.',
    topic: 'algebra',
  },
  {
    q: 'What is the smallest positive integer that leaves a remainder of $3$ when divided by $5$ and a remainder of $4$ when divided by $7$?',
    choices: ['$8$', '$13$', '$23$', '$53$', '$18$'],
    answer: 4,
    solution:
      'Numbers leaving remainder $3$ upon division by $5$ are $3, 8, 13, 18, 23, 28, \\dots$ — count up by fives. Now test each against the second condition: $3$ leaves $3$, $8$ leaves $1$, $13$ leaves $6$, and $18$ leaves $4$ when divided by $7$. So $18$ is the smallest that works. Every wrong choice here passes the first test and fails the second, except $53 = 18 + 35$, which does work but is not the smallest.',
    topic: 'number theory',
  },
  {
    q: 'What is the value of $1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{5} - \\frac{1}{6}$?',
    choices: ['$\\frac{47}{60}$', '$\\frac{19}{20}$', '$\\frac{67}{60}$', '$\\frac{37}{60}$', '$\\frac{49}{20}$'],
    answer: 3,
    solution:
      'Use the common denominator $60$: the terms become $\\frac{60}{60} - \\frac{30}{60} + \\frac{20}{60} - \\frac{15}{60} + \\frac{12}{60} - \\frac{10}{60}$. Now just track the numerator: $60 - 30 + 20 - 15 + 12 - 10 = 37$, so the value is $\\frac{37}{60}$, which does not reduce. A good check is to pair the terms: $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right) = \\frac{1}{2} + \\frac{1}{12} + \\frac{1}{30} = \\frac{30 + 5 + 2}{60} = \\frac{37}{60}$. Dropping the final term gives $\\frac{47}{60}$, flipping its sign gives $\\frac{19}{20}$, flipping the sign on $\\frac{1}{4}$ gives $\\frac{67}{60}$, and adding every term gives $\\frac{49}{20}$.',
    topic: 'fractions',
  },
  {
    q: 'In a chess club the ratio of boys to girls is $3:5$. After $4$ more boys join, the ratio becomes $5:7$. How many girls are in the club?',
    choices: ['$21$', '$25$', '$28$', '$35$', '$49$'],
    answer: 3,
    solution:
      'Write the original counts as $3k$ boys and $5k$ girls, so that the $3:5$ ratio is built in. No girls join, so after the change there are $3k + 4$ boys and still $5k$ girls, and $\\frac{3k+4}{5k} = \\frac{5}{7}$. Cross-multiply: $7(3k+4) = 25k$, so $21k + 28 = 25k$ and $4k = 28$, giving $k = 7$. The number of girls is $5k = 35$. (Check: $21$ boys become $25$, and $25:35 = 5:7$.) The choices $21$ and $25$ are the boy counts before and after, and $28$ is the value of $4k$.',
    topic: 'ratios',
  },
  {
    q: 'What is the value of $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\cdots + \\frac{1}{9 \\cdot 10}$?',
    choices: ['$\\frac{9}{10}$', '$\\frac{1}{10}$', '$\\frac{1}{2}$', '$\\frac{8}{9}$', '$\\frac{11}{10}$'],
    answer: 0,
    solution:
      'Adding ten fractions one at a time is miserable, so look for structure. Notice that $\\frac{1}{1 \\cdot 2} = \\frac{1}{1} - \\frac{1}{2}$, that $\\frac{1}{2 \\cdot 3} = \\frac{1}{2} - \\frac{1}{3}$, and in general $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Rewriting the whole sum this way gives $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{9} - \\frac{1}{10}\\right)$. Every interior piece cancels with its neighbor, leaving only $1 - \\frac{1}{10} = \\frac{9}{10}$. Stopping the chain at $\\frac{1}{8 \\cdot 9}$ gives $\\frac{8}{9}$, the leftover piece alone is $\\frac{1}{10}$, and adding instead of subtracting that piece gives $\\frac{11}{10}$.',
    topic: 'arithmetic',
  },
  {
    q: 'How many positive divisors of $720$ are perfect squares?',
    choices: ['$3$', '$4$', '$12$', '$30$', '$6$'],
    answer: 4,
    solution:
      'Factor: $720 = 2^4 \\cdot 3^2 \\cdot 5$. A divisor looks like $2^a 3^b 5^c$ with $a \\le 4$, $b \\le 2$, $c \\le 1$, and it is a perfect square exactly when every exponent is even. So $a$ can be $0$, $2$, or $4$ ($3$ ways), $b$ can be $0$ or $2$ ($2$ ways), and $c$ must be $0$ ($1$ way). That gives $3 \\times 2 \\times 1 = 6$ square divisors: $1, 4, 16, 9, 36, 144$. The choice $30$ counts all the divisors of $720$, and $12$ comes from wrongly allowing $5^2$, which does not divide $720$.',
    topic: 'number theory',
  },
  {
    q: 'Two standard six-sided dice are rolled. What is the probability that the product of the two numbers is a multiple of $6$?',
    choices: ['$\\frac{1}{6}$', '$\\frac{5}{18}$', '$\\frac{11}{36}$', '$\\frac{5}{12}$', '$\\frac{1}{2}$'],
    answer: 3,
    solution:
      'There are $36$ equally likely rolls. The product is a multiple of $6$ when it has both a factor of $2$ and a factor of $3$. If either die shows a $6$, that happens automatically: $11$ rolls contain a $6$. Otherwise the $3$ must come from a die showing $3$ and the $2$ from the other die showing $2$ or $4$, giving $(3,2), (2,3), (3,4), (4,3)$ — four more rolls. Total: $11 + 4 = 15$ rolls, so the probability is $\\frac{15}{36} = \\frac{5}{12}$. The choice $\\frac{11}{36}$ counts only the rolls containing a $6$ and misses the four extra pairs.',
    topic: 'probability',
  },
  {
    q: 'Two similar triangles have perimeters $30$ and $42$. The area of the smaller triangle is $50$. What is the area of the larger triangle?',
    choices: ['$35$', '$62$', '$70$', '$490$', '$98$'],
    answer: 4,
    solution:
      'Perimeter is a length, so the ratio of perimeters is the ratio of matching sides: $\\frac{42}{30} = \\frac{7}{5}$. Areas scale by the square of that ratio, $\\left(\\frac{7}{5}\\right)^2 = \\frac{49}{25}$. So the larger area is $50 \\times \\frac{49}{25} = 2 \\times 49 = 98$. The choice $70$ applies $\\frac{7}{5}$ to the area without squaring it, $35$ scales in the wrong direction, $490$ squares only the $7$, and $62$ adds the perimeter difference $12$ to the area, which mixes up lengths and areas.',
    topic: 'geometry',
  },
  {
    q: 'A sequence begins $2, 5, 10, 17, 26, \\dots$ The gaps between consecutive terms are $3, 5, 7, 9, \\dots$, and they keep going through the odd numbers. What is the $20$th term?',
    choices: ['$362$', '$380$', '$400$', '$401$', '$442$'],
    answer: 3,
    solution:
      'Adding the odd numbers is a hint: $1 + 3 = 4$, $1 + 3 + 5 = 9$, $1 + 3 + 5 + 7 = 16$ — sums of consecutive odd numbers are perfect squares. Line the sequence up against the squares: $2 = 1^2 + 1$, $5 = 2^2 + 1$, $10 = 3^2 + 1$, $17 = 4^2 + 1$, $26 = 5^2 + 1$. So the $n$th term is $n^2 + 1$, and the $20$th term is $400 + 1 = 401$. The choice $400$ forgets the $+1$, and $362 = 19^2 + 1$ counts the gaps instead of the terms.',
    topic: 'patterns',
  },
  {
    q: 'What is the remainder when $3^{2026}$ is divided by $7$?',
    choices: ['$4$', '$1$', '$2$', '$3$', '$6$'],
    answer: 0,
    solution:
      'List the remainders of the powers of $3$: $3^1 \\equiv 3$, $3^2 \\equiv 2$, $3^3 \\equiv 6$, $3^4 \\equiv 4$, $3^5 \\equiv 5$, $3^6 \\equiv 1 \\pmod 7$. Since $3^6$ leaves remainder $1$, the pattern repeats every $6$ powers. Now divide the exponent by the cycle length: $2026 = 6 \\times 337 + 4$, so $3^{2026} \\equiv 3^4 \\equiv 4 \\pmod 7$. The choice $1$ assumes the exponent lands exactly at the end of a cycle, and $6$ comes from reducing the exponent modulo $7$ instead of modulo $6$.',
    topic: 'number theory',
  },
  {
    q: 'A messenger travels along the grid of streets shown, always moving one block east or one block north, from corner $A$ to corner $B$. The corner marked with an $\\times$ is closed and cannot be used. How many routes are possible?',
    fig: {
      view: [-0.7, -0.7, 4.7, 3.7],
      elems: [
        { t: 'seg', a: [0, 0], b: [4, 0] },
        { t: 'seg', a: [0, 1], b: [4, 1] },
        { t: 'seg', a: [0, 2], b: [4, 2] },
        { t: 'seg', a: [0, 3], b: [4, 3] },
        { t: 'seg', a: [0, 0], b: [0, 3] },
        { t: 'seg', a: [1, 0], b: [1, 3] },
        { t: 'seg', a: [2, 0], b: [2, 3] },
        { t: 'seg', a: [3, 0], b: [3, 3] },
        { t: 'seg', a: [4, 0], b: [4, 3] },
        { t: 'seg', a: [1.75, 0.75], b: [2.25, 1.25] },
        { t: 'seg', a: [1.75, 1.25], b: [2.25, 0.75] },
        { t: 'point', p: [0, 0], label: 'A', dx: -14, dy: 14 },
        { t: 'point', p: [4, 3], label: 'B', dx: 10, dy: -6 },
      ],
    },
    choices: ['$18$', '$17$', '$29$', '$32$', '$35$'],
    answer: 1,
    solution:
      'Every route uses exactly $4$ east moves and $3$ north moves, so a route is just a choice of which $3$ of the $7$ moves are north: $\\frac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$ routes in all. Now subtract the bad ones. The closed corner sits $2$ east and $1$ north of $A$, reachable in $\\frac{3 \\cdot 2}{2 \\cdot 1} \\cdot \\frac{1}{1} = 3$ ways (choose which $1$ of those $3$ moves is north). From there to $B$ takes $2$ east and $2$ north moves, which can be arranged in $\\frac{4 \\cdot 3}{2 \\cdot 1} = 6$ ways. So $3 \\times 6 = 18$ routes pass through the closed corner, leaving $35 - 18 = 17$ good routes. The choice $18$ counts the blocked routes instead of the open ones, $35$ ignores the closure, and $32$ subtracts only the $3$ ways of reaching the closed corner.',
    topic: 'counting',
  },
  {
    q: 'Square $ABCD$ has side length $12$. Point $M$ is the midpoint of $\\overline{BC}$ and point $N$ is the midpoint of $\\overline{CD}$. What is the area of triangle $AMN$?',
    fig: {
      view: [-1.5, -1.5, 13.5, 13.5],
      elems: [
        { t: 'poly', pts: [[0, 12], [12, 12], [12, 0], [0, 0]], fill: false },
        { t: 'poly', pts: [[0, 12], [12, 6], [6, 0]], fill: false },
        { t: 'point', p: [0, 12], label: 'A', dx: -12, dy: -4 },
        { t: 'point', p: [12, 12], label: 'B', dx: 8, dy: -4 },
        { t: 'point', p: [12, 0], label: 'C', dx: 8, dy: 14 },
        { t: 'point', p: [0, 0], label: 'D', dx: -12, dy: 14 },
        { t: 'point', p: [12, 6], label: 'M', dx: 10, dy: 4 },
        { t: 'point', p: [6, 0], label: 'N', dx: 0, dy: 16 },
        { t: 'tick', a: [12, 12], b: [12, 6], n: 1 },
        { t: 'tick', a: [12, 6], b: [12, 0], n: 1 },
        { t: 'tick', a: [12, 0], b: [6, 0], n: 2 },
        { t: 'tick', a: [6, 0], b: [0, 0], n: 2 },
      ],
    },
    choices: ['$36$', '$72$', '$90$', '$108$', '$54$'],
    answer: 4,
    solution:
      'Triangle $AMN$ has no convenient base and height, so find it by removing the three corner triangles from the square. The square has area $12^2 = 144$. Triangle $ABM$ has legs $AB = 12$ and $BM = 6$, so its area is $\\frac{12 \\cdot 6}{2} = 36$. Triangle $MCN$ has legs $MC = 6$ and $CN = 6$, so its area is $\\frac{6 \\cdot 6}{2} = 18$. Triangle $AND$ has legs $DN = 6$ and $DA = 12$, so its area is $\\frac{6 \\cdot 12}{2} = 36$. Subtracting, $144 - 36 - 18 - 36 = 54$. Forgetting the small corner triangle $MCN$ leaves $72$; forgetting $AND$ leaves $90$; subtracting only one triangle leaves $108$; and $36$ is what you get by treating $AMN$ as a right triangle with legs $12$ and $6$, which it is not.',
    topic: 'geometry',
  },
  {
    q: 'Point $P$ lies inside rectangle $ABCD$, where $A$, $B$, $C$, $D$ are the corners in order. Given $PA = 4$, $PB = 8$, and $PC = 13$, what is $PD$?',
    fig: {
      view: [-1.5, -1.5, 12.7, 14.1],
      elems: [
        { t: 'poly', pts: [[0, 0], [11.117, 0], [11.117, 12.568], [0, 12.568]], fill: false },
        { t: 'seg', a: [3.4, 2.107], b: [0, 0] },
        { t: 'seg', a: [3.4, 2.107], b: [11.117, 0] },
        { t: 'seg', a: [3.4, 2.107], b: [11.117, 12.568] },
        { t: 'seg', a: [3.4, 2.107], b: [0, 12.568] },
        { t: 'point', p: [0, 0], label: 'A', dx: -13, dy: 13 },
        { t: 'point', p: [11.117, 0], label: 'B', dx: 10, dy: 13 },
        { t: 'point', p: [11.117, 12.568], label: 'C', dx: 10, dy: -4 },
        { t: 'point', p: [0, 12.568], label: 'D', dx: -13, dy: -4 },
        { t: 'point', p: [3.4, 2.107], label: 'P', dx: -4, dy: -8 },
        { t: 'label', p: [1.7, 1.05], text: '4', dx: 6, dy: 12 },
        { t: 'label', p: [7.26, 1.05], text: '8', dx: 0, dy: 14 },
        { t: 'label', p: [7.26, 7.34], text: '13', dx: 12, dy: 0 },
        { t: 'label', p: [1.7, 7.34], text: '?', dx: -12, dy: 0 },
      ],
    },
    choices: ['$5$', '$9$', '$11$', '$17$', '$25$'],
    answer: 2,
    solution:
      'Drop a perpendicular from $P$ to each side of the rectangle. Call the horizontal distances from $P$ to the left and right sides $p$ and $q$, and the vertical distances to the bottom and top sides $r$ and $s$. Each corner distance is then a hypotenuse: $PA^2 = p^2 + r^2$, $PB^2 = q^2 + r^2$, $PC^2 = q^2 + s^2$, and $PD^2 = p^2 + s^2$. Look at the two diagonal pairs: $PA^2 + PC^2 = p^2 + r^2 + q^2 + s^2$ and $PB^2 + PD^2 = q^2 + r^2 + p^2 + s^2$. They are the same four squares, so $PA^2 + PC^2 = PB^2 + PD^2$. Now substitute: $16 + 169 = 64 + PD^2$, so $PD^2 = 185 - 64 = 121$ and $PD = 11$. The choice $9$ comes from doing $4 + 13 - 8$ with the lengths instead of their squares, $17$ adds $4$ and $13$, $5$ is $13 - 8$, and $25$ adds all three given lengths.',
    topic: 'geometry',
  },
  {
    q: 'The numbers $1, 2, 3, \\dots, 10$ are written on a board. A move consists of erasing any two numbers $a$ and $b$ and writing the single number $a + b - 1$ in their place. After nine moves exactly one number remains. What is it?',
    choices: ['$36$', '$45$', '$46$', '$54$', '$55$'],
    answer: 2,
    solution:
      'Trying moves at random is hopeless, so hunt for something that never changes. Each move deletes two numbers and writes one, so the count of numbers on the board drops by $1$. Each move also replaces a total of $a + b$ by $a + b - 1$, so the sum of the numbers on the board drops by exactly $1$ as well. That means the quantity (sum) $-$ (count) never changes at all. At the start the sum is $1 + 2 + \\cdots + 10 = 55$ and the count is $10$, so that quantity is $55 - 10 = 45$. At the end the count is $1$, so the final sum must be $45 + 1 = 46$ — and with one number left, that number is $46$. Notice the answer does not depend on which pairs you choose, which is exactly what an invariant buys you. The choice $55$ ignores the $-1$ entirely, $54$ subtracts a single $1$, and $45$ subtracts one $1$ for each of the ten starting numbers instead of one for each of the nine moves.',
    topic: 'logic',
  },
]

export default {
  id: 'set02',
  title: 'The Clockwork Circuit',
  blurb: 'Twenty-five problems that start easy and tighten like a spring — the last five are meant to be hard.',
  minutes: 40,
  problems,
}
