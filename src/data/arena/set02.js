// Arena paper — The Clockwork Circuit
// Twenty-five original MathQuest problems, ordered from gentle to genuinely hard.

const problems = [
  {
    q: 'A wind-up gauge in a clock shop displays the value of $\\frac{15 - 39}{4} - 3$. Which of the following is the number it shows?',
    choices: ['$-24$', '$-9$', '$-3$', '$3$', '$9$'],
    answer: 1,
    solution:
      'Work the fraction first: $15 - 39 = -24$, and $-24 \\div 4 = -6$. Then $-6 - 3 = -9$. Two slips flip a sign: $-6 + 3 = -3$ treats the final subtraction as adding, and $6 - 3 = 3$ drops the minus on the fraction. Adding both mistakes gives $9$, and $-24$ comes from dividing by $4 - 3 = 1$, as if the $-3$ belonged to the denominator.',
    topic: 'arithmetic',
  },
  {
    q: 'A tin holds $56$ gears. Exactly $\\frac{3}{8}$ of them are brass and the rest are steel. How many steel gears are in the tin?',
    choices: ['$7$', '$21$', '$28$', '$35$', '$49$'],
    answer: 3,
    solution:
      'One eighth of $56$ is $7$, so the brass gears number $3 \\times 7 = 21$. The steel gears are what is left: $56 - 21 = 35$. A faster route is to notice that the steel gears are $\\frac{5}{8}$ of the tin, and $5 \\times 7 = 35$. The choice $21$ counts the brass gears, $7$ is a single eighth, $49$ removes only one eighth instead of three, and $28$ assumes the two kinds are split evenly.',
    topic: 'fractions',
  },
  {
    q: 'Nadia has taken five quizzes, and her mean score is $84$. Four of the scores are $79$, $88$, $91$, and $76$. What is the fifth score?',
    choices: ['$2$', '$66.8$', '$83.5$', '$84$', '$86$'],
    answer: 4,
    solution:
      'A mean of $84$ over five quizzes means the five scores total $5 \\times 84 = 420$. The four known scores total $79 + 88 + 91 + 76 = 334$, so the fifth is $420 - 334 = 86$. The choice $84$ assumes the missing score simply equals the mean, $83.5$ is the mean of the four known scores, $66.8$ divides those four scores by five, and $2$ comes from using $4 \\times 84 = 336$ as the total instead of $5 \\times 84$.',
    topic: 'statistics',
  },
  {
    q: 'The clock face shown is a $9$ by $6$ rectangle with a $2$ by $2$ square cut out of one corner. What is the area of the shape?',
    fig: {
      view: [-0.8, -1.3, 10.4, 7],
      elems: [
        { t: 'poly', pts: [[0, 0], [9, 0], [9, 6], [2, 6], [2, 4], [0, 4]], fill: false },
        { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 16 },
        { t: 'label', p: [9, 3], text: '6', dx: 12, dy: 4 },
        { t: 'label', p: [2, 5], text: '2', dx: 10, dy: 4 },
        { t: 'label', p: [1, 4], text: '2', dx: 0, dy: 15 },
        { t: 'label', p: [5, 2.6], text: 'area = ?', dx: 0, dy: 4 },
      ],
    },
    choices: ['$46$', '$50$', '$52$', '$54$', '$58$'],
    answer: 1,
    solution:
      'Start with the full rectangle, $9 \\times 6 = 54$, and remove the missing square, $2 \\times 2 = 4$, leaving $50$. The choice $54$ forgets to remove the notch at all, $52$ subtracts the side length $2$ instead of the area $4$, $46$ subtracts $2 \\times 4 = 8$ by mixing the notch with the leftover $4$ on the left edge, and $58$ adds the notch instead of removing it.',
    topic: 'geometry',
  },
  {
    q: 'A workshop floor measures $84$ cm by $60$ cm. It is to be covered exactly by identical square tiles, none of them cut, using as few tiles as possible. How many tiles are needed?',
    choices: ['$5$', '$7$', '$12$', '$20$', '$35$'],
    answer: 4,
    solution:
      'For the tiles to fit exactly, the tile side must divide both $84$ and $60$, and fewest tiles means the largest such side: the greatest common factor. Since $84 = 2^2 \\cdot 3 \\cdot 7$ and $60 = 2^2 \\cdot 3 \\cdot 5$, that is $12$ cm. The floor then holds $84 \\div 12 = 7$ tiles along one side and $60 \\div 12 = 5$ along the other, so $7 \\times 5 = 35$ tiles. The choice $12$ is the tile side, not a count; $7$ and $5$ are the counts along a single edge; and $20$ counts only the tiles that touch the border of the $7 \\times 5$ arrangement.',
    topic: 'number theory',
  },
  {
    q: 'Three springs are wound from a single wire of $96$ coils, split among them in the ratio $3:4:5$. How many more coils does the largest spring have than the smallest?',
    choices: ['$2$', '$8$', '$16$', '$24$', '$40$'],
    answer: 2,
    solution:
      'The ratio has $3 + 4 + 5 = 12$ parts, so one part is $96 \\div 12 = 8$ coils. The smallest spring has $3 \\times 8 = 24$ coils and the largest has $5 \\times 8 = 40$, a difference of $16$. Since the springs differ by $5 - 3 = 2$ parts, the shortcut is $2 \\times 8 = 16$. The choices $24$ and $40$ are the two springs themselves, $8$ is one part, and $2$ is the difference in the ratio numbers before they are scaled up.',
    topic: 'ratios',
  },
  {
    q: 'Twice a number, increased by $9$, equals $41$. What is three times the number?',
    choices: ['$16$', '$25$', '$32$', '$48$', '$75$'],
    answer: 3,
    solution:
      'Call the number $n$. Then $2n + 9 = 41$, so $2n = 32$ and $n = 16$. The question asks for $3n = 48$. The choice $16$ stops at the number itself, and $32$ stops at twice the number. Adding $9$ instead of subtracting gives $2n = 50$ and $n = 25$, which is the choice $25$, and tripling that mistake gives $75$.',
    topic: 'algebra',
  },
  {
    q: 'The end wall of a shed is shaped like the figure: a rectangle $10$ meters wide and $4$ meters tall, topped by a triangle whose peak is $3$ meters above the rectangle. What is the area of the wall in square meters?',
    fig: {
      view: [-0.8, -1.3, 11.6, 8],
      elems: [
        { t: 'poly', pts: [[0, 0], [10, 0], [10, 4], [5, 7], [0, 4]], fill: false },
        { t: 'seg', a: [5, 7], b: [5, 4], dash: true },
        { t: 'seg', a: [0, 4], b: [10, 4], dash: true },
        { t: 'right', at: [5, 4], from: [10, 4], to: [5, 7] },
        { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 16 },
        { t: 'label', p: [10, 2], text: '4', dx: 12, dy: 4 },
        { t: 'label', p: [5, 5.5], text: '3', dx: 10, dy: 4 },
        { t: 'label', p: [5, 2], text: 'area = ?', dx: 0, dy: 4 },
      ],
    },
    choices: ['$15$', '$40$', '$55$', '$70$', '$75$'],
    answer: 2,
    solution:
      'Split the wall along the dashed line. The rectangle has area $10 \\times 4 = 40$, and the triangle has base $10$ and height $3$, so its area is $\\frac{1}{2} \\times 10 \\times 3 = 15$. Together, $40 + 15 = 55$. The choices $40$ and $15$ are the two pieces on their own, $70$ forgets to halve the triangle (or just multiplies $10$ by the full height $7$), and $75$ uses $7$ instead of $3$ as the height of the triangle.',
    topic: 'geometry',
  },
  {
    q: 'A collector owns $7$ pocket watches with a mean age of $15$ years. She buys one more watch, and the mean age of her $8$ watches becomes $17$ years. How old is the new watch?',
    choices: ['$2$', '$14$', '$16$', '$17$', '$31$'],
    answer: 4,
    solution:
      'Turn means into totals. Seven watches averaging $15$ years total $7 \\times 15 = 105$ years; eight watches averaging $17$ years total $8 \\times 17 = 136$ years. The new watch supplies the difference, $136 - 105 = 31$ years. Another way to see it: the new watch must be $17$ years old to match the new mean, plus $2$ extra years for each of the $7$ old watches to lift them from $15$ to $17$, and $17 + 14 = 31$. The choice $14$ is that lift alone, $17$ is only the matching part, $2$ is the change in the mean, and $16$ pretends there were eight watches before the purchase.',
    topic: 'statistics',
  },
  {
    q: 'At a guild meeting, each of the $14$ clockmakers present shakes hands exactly once with every other clockmaker. How many handshakes take place?',
    choices: ['$91$', '$105$', '$182$', '$196$', '$210$'],
    answer: 0,
    solution:
      'Each of the $14$ people shakes $13$ hands, which gives $14 \\times 13 = 182$ if you count from every person. But that counts each handshake twice, once from each end, so the number of handshakes is $\\frac{182}{2} = 91$. The choice $182$ skips the halving, $196$ is $14^2$ and lets people shake their own hands, $105$ is $\\frac{15 \\times 14}{2}$ with the count off by one, and $210$ makes both of those last mistakes at once.',
    topic: 'counting',
  },
  {
    q: 'A tower has three bells. One rings every $8$ seconds, one every $12$ seconds, and one every $18$ seconds. All three ring together exactly at noon. How many seconds pass before all three next ring together?',
    choices: ['$24$', '$36$', '$72$', '$144$', '$1728$'],
    answer: 2,
    solution:
      'The three bells next coincide after the least common multiple of $8$, $12$, and $18$. Factor them: $8 = 2^3$, $12 = 2^2 \\cdot 3$, $18 = 2 \\cdot 3^2$. Taking the highest power of each prime gives $2^3 \\cdot 3^2 = 72$ seconds. The choice $24$ is the least common multiple of just $8$ and $12$, and $36$ of just $12$ and $18$ — each one leaves out a bell. Multiplying all three gives $1728$, far past the first meeting, and $144$ doubles the answer by taking $2^4$.',
    topic: 'number theory',
  },
  {
    q: 'In the figure, $AB = AC$ and $\\angle BAC = 40^\\circ$. Point $D$ lies on side $\\overline{AC}$ so that $BD = BC$. How many degrees is $\\angle ABD$?',
    fig: {
      view: [-3.2, -0.8, 3.2, 6.4],
      elems: [
        { t: 'poly', pts: [[-2.052, 0], [2.052, 0], [0, 5.638]], fill: false },
        { t: 'seg', a: [-2.052, 0], b: [1.092, 2.638] },
        { t: 'point', p: [0, 5.638], label: 'A', dx: -4, dy: -8 },
        { t: 'point', p: [-2.052, 0], label: 'B', dx: -14, dy: 12 },
        { t: 'point', p: [2.052, 0], label: 'C', dx: 8, dy: 12 },
        { t: 'point', p: [1.092, 2.638], label: 'D', dx: 8, dy: 0 },
        { t: 'tick', a: [0, 5.638], b: [-2.052, 0], n: 1 },
        { t: 'tick', a: [0, 5.638], b: [2.052, 0], n: 1 },
        { t: 'tick', a: [-2.052, 0], b: [1.092, 2.638], n: 2 },
        { t: 'tick', a: [-2.052, 0], b: [2.052, 0], n: 2 },
        { t: 'angle', at: [0, 5.638], from: [-2.052, 0], to: [2.052, 0], r: 0.7, label: '40' },
        { t: 'angle', at: [-2.052, 0], from: [1.092, 2.638], to: [0, 5.638], r: 1.1, label: '?' },
      ],
    },
    choices: ['$30$', '$35$', '$40$', '$70$', '$110$'],
    answer: 0,
    solution:
      'Since $AB = AC$, the base angles of triangle $ABC$ are equal, and each is $\\frac{180 - 40}{2} = 70^\\circ$. Now look at triangle $BDC$: $BD = BC$ makes it isosceles with $\\angle BDC = \\angle BCD = 70^\\circ$, so $\\angle DBC = 180 - 70 - 70 = 40^\\circ$. The angle asked for is the rest of $\\angle ABC$: $\\angle ABD = 70 - 40 = 30^\\circ$. The choice $40$ stops at $\\angle DBC$, $70$ is the base angle, $110$ is $\\angle ADB$, and $35$ comes from assuming $\\overline{BD}$ bisects $\\angle ABC$, which is not given.',
    topic: 'geometry',
  },
  {
    q: 'On a timed puzzle, the $12$ students in the morning group averaged $82$ points and the $18$ students in the afternoon group averaged $77$ points. What was the mean score of all $30$ students?',
    choices: ['$77$', '$79$', '$79.5$', '$80$', '$82$'],
    answer: 1,
    solution:
      'Means of different-sized groups cannot simply be averaged; go through totals. The morning group scored $12 \\times 82 = 984$ points in all and the afternoon group $18 \\times 77 = 1386$, so all $30$ students scored $984 + 1386 = 2370$ and the mean is $2370 \\div 30 = 79$. It makes sense that this sits closer to $77$, since the afternoon group is bigger. The choice $79.5$ averages the two means as if the groups were the same size, $80$ swaps the group sizes, and $77$ and $82$ are the two group means themselves.',
    topic: 'statistics',
  },
  {
    q: 'How many three-digit numbers have digits that add up to exactly $6$?',
    choices: ['$15$', '$20$', '$21$', '$28$', '$36$'],
    answer: 2,
    solution:
      'Sort by the hundreds digit, which must be at least $1$. If it is $1$, the last two digits add to $5$, which happens in $6$ ways ($05, 14, 23, 32, 41, 50$). If it is $2$, the last two add to $4$: $5$ ways. Continuing, hundreds digit $3, 4, 5, 6$ give $4, 3, 2, 1$ ways, and the count is $6 + 5 + 4 + 3 + 2 + 1 = 21$. The choice $28$ also allows a leading zero, counting numbers like $033$, and $20$ drops the single number $600$. Stopping after hundreds digit $3$ gives $15$, and $36 = 6 \\times 6$ ignores the way the digits constrain one another.',
    topic: 'counting',
  },
  {
    q: 'Two standard six-sided dice are rolled. What is the probability that the sum of the two numbers showing is a multiple of $4$?',
    choices: ['$\\frac{1}{6}$', '$\\frac{2}{9}$', '$\\frac{1}{4}$', '$\\frac{5}{18}$', '$\\frac{1}{3}$'],
    answer: 2,
    solution:
      'The sum runs from $2$ to $12$, so the multiples of $4$ available are $4$, $8$, and $12$. A sum of $4$ comes from $(1,3), (2,2), (3,1)$: three rolls. A sum of $8$ comes from $(2,6), (3,5), (4,4), (5,3), (6,2)$: five rolls. A sum of $12$ comes only from $(6,6)$. That is $3 + 5 + 1 = 9$ of the $36$ equally likely rolls, so the probability is $\\frac{9}{36} = \\frac{1}{4}$. The choice $\\frac{2}{9}$ forgets the sum $12$, $\\frac{1}{6}$ gives the sums $4$ and $8$ three rolls each and forgets $12$, $\\frac{5}{18}$ counts a sum of $4$ four times, and $\\frac{1}{3}$ counts four rolls for each of the three sums.',
    topic: 'probability',
  },
  {
    q: 'The dot figures below continue in the same way. The first three figures have $1$, $5$, and $12$ dots. How many dots are in figure $20$?',
    fig: {
      view: [-0.9, -1.5, 8.2, 4.8],
      elems: [
        { t: 'point', p: [0, 0] },
        { t: 'point', p: [2, 0] }, { t: 'point', p: [3, 0] },
        { t: 'point', p: [2, 1] }, { t: 'point', p: [3, 1] },
        { t: 'point', p: [2.5, 2] },
        { t: 'point', p: [5, 0] }, { t: 'point', p: [6, 0] }, { t: 'point', p: [7, 0] },
        { t: 'point', p: [5, 1] }, { t: 'point', p: [6, 1] }, { t: 'point', p: [7, 1] },
        { t: 'point', p: [5, 2] }, { t: 'point', p: [6, 2] }, { t: 'point', p: [7, 2] },
        { t: 'point', p: [5.5, 3] }, { t: 'point', p: [6.5, 3] },
        { t: 'point', p: [6, 4] },
        { t: 'label', p: [0, 0], text: 'figure 1', dx: 0, dy: 24 },
        { t: 'label', p: [2.5, 0], text: 'figure 2', dx: 0, dy: 24 },
        { t: 'label', p: [6, 0], text: 'figure 3', dx: 0, dy: 24 },
      ],
    },
    choices: ['$131$', '$210$', '$400$', '$571$', '$590$'],
    answer: 4,
    solution:
      'Look at how each figure is built rather than at the totals. Figure $2$ is a $2$ by $2$ square with one dot on top; figure $3$ is a $3$ by $3$ square with a cap of $2$ dots and then $1$ dot. So figure $n$ is an $n$ by $n$ square of $n^2$ dots wearing a triangular cap whose rows hold $n-1$, $n-2$, $\\dots$, $1$ dots, and the cap has $\\frac{(n-1)n}{2}$ dots in all. Check: figure $3$ has $9 + 3 = 12$ dots, as promised. So figure $20$ has $20^2 + \\frac{19 \\times 20}{2} = 400 + 190 = 590$ dots. The choice $400$ counts only the square and forgets the cap, $571$ gives the cap $18$ rows instead of $19$, $210$ treats the figures as plain triangles and takes the $20$th triangular number, and $131$ extends the differences $4, 7$ as if they stayed at $7$, giving $12 + 17 \\times 7$, when in fact each difference grows by $3$.',
    topic: 'patterns',
  },
  {
    q: 'A square of side $6$ is drawn inside a circle so that all four corners lie on the circle, and the square is shaded. What is the total area of the part of the circle that is not shaded?',
    fig: {
      view: [-5.2, -5.2, 5.2, 5.2],
      elems: [
        { t: 'poly', pts: [[-3, -3], [3, -3], [3, 3], [-3, 3]] },
        { t: 'circle', c: [0, 0], r: 4.243 },
        { t: 'seg', a: [-3, -3], b: [3, 3], dash: true },
        { t: 'label', p: [0, -3], text: '6', dx: 0, dy: -8 },
        { t: 'label', p: [0, 3.62], text: '?', dx: 0, dy: 4 },
      ],
    },
    choices: ['$18\\pi - 36$', '$18\\pi - 18$', '$36\\pi - 72$', '$36\\pi - 36$', '$72\\pi - 36$'],
    answer: 0,
    solution:
      'The unshaded part is the circle minus the square, so the job is to find the radius. A diagonal of the square passes through the center and is a diameter of the circle. By the Pythagorean theorem the diagonal is $\\sqrt{6^2 + 6^2} = \\sqrt{72}$, so the radius $r$ satisfies $r = \\frac{\\sqrt{72}}{2}$ and $r^2 = \\frac{72}{4} = 18$ — no need to simplify the root. The circle has area $18\\pi$, the square has area $36$, and the unshaded region is $18\\pi - 36$. The choice $36\\pi - 36$ uses the side $6$ as the radius, $72\\pi - 36$ uses the whole diagonal squared as $r^2$, $18\\pi - 18$ subtracts only half the square, and $36\\pi - 72$ takes the side as the radius and then rebuilds the square from the wrong diagonal.',
    topic: 'geometry',
  },
  {
    q: 'How many positive divisors of $6480$ are perfect squares?',
    choices: ['$4$', '$6$', '$9$', '$16$', '$50$'],
    answer: 2,
    solution:
      'Factor: $6480 = 2^4 \\cdot 3^4 \\cdot 5$. A divisor has the form $2^a \\cdot 3^b \\cdot 5^c$ with $a \\le 4$, $b \\le 4$, $c \\le 1$, and it is a perfect square exactly when every exponent is even. So $a \\in \\{0, 2, 4\\}$ and $b \\in \\{0, 2, 4\\}$ give three choices each, while $c$ must be $0$. That is $3 \\times 3 \\times 1 = 9$ square divisors: $1, 4, 16, 9, 36, 144, 81, 324, 1296$. The choice $50$ counts all the divisors, $16$ counts exponents $1$ through $4$ instead of the even ones, $4$ forgets that an exponent of $0$ is even, and $6 = 3 \\times 2$ forgets it for just one of the two primes.',
    topic: 'number theory',
  },
  {
    q: 'Five friends — Ada, Ben, Cleo, Dev, and Eli — finished a race with no ties. Ben finished somewhere after Cleo. Exactly one runner finished between Ada and Dev. Eli finished immediately ahead of Cleo. Dev finished ahead of Ben. Who finished last?',
    choices: ['Ada', 'Ben', 'Cleo', 'Dev', 'Eli'],
    answer: 0,
    solution:
      'Start with the tightest clue: Eli is immediately ahead of Cleo, so they occupy consecutive places, and Ben is somewhere after Cleo. That makes Eli, Cleo, Ben appear in that order with Eli and Cleo adjacent. Ada and Dev have exactly one runner between them, so they sit in places $1$ and $3$, $2$ and $4$, or $3$ and $5$. Try places $1$ and $3$: then Eli and Cleo would need two consecutive places among $2, 4, 5$, which forces $4$ and $5$ — but Ben has to come after Cleo, and no place is left. Try places $2$ and $4$: Eli–Cleo need consecutive places among $1, 3, 5$, which is impossible. So Ada and Dev take places $3$ and $5$, Eli and Cleo take $1$ and $2$, and Ben takes $4$. Since Dev is ahead of Ben, Dev is in place $3$ and Ada is in place $5$. The order is Eli, Cleo, Dev, Ben, Ada, and Ada is last. Ben is the tempting answer because he is behind three named people, but the clue about Ada and Dev pushes Ada behind him.',
    topic: 'logic',
  },
  {
    q: 'The numbers $2, 3, 5, 6, 7, 9, 11$ are written on seven cards. Two of the cards are drawn at random. What is the probability that the product of the two numbers drawn is even?',
    choices: ['$\\frac{2}{7}$', '$\\frac{10}{21}$', '$\\frac{1}{2}$', '$\\frac{11}{21}$', '$\\frac{4}{7}$'],
    answer: 3,
    solution:
      'A product is odd only when both factors are odd, so count the complement. There are $\\frac{7 \\times 6}{2} = 21$ equally likely pairs of cards. Five of the cards are odd ($3, 5, 7, 9, 11$), so $\\frac{5 \\times 4}{2} = 10$ pairs give an odd product, and the other $21 - 10 = 11$ pairs give an even product. The probability is $\\frac{11}{21}$. The choice $\\frac{10}{21}$ answers the opposite question, $\\frac{2}{7}$ is the chance that one particular card is even, $\\frac{4}{7}$ adds that chance for two cards and double-counts the pair of even cards, and $\\frac{1}{2}$ assumes even and odd products are equally likely.',
    topic: 'probability',
  },
  {
    q: 'In the figure, points $D$ and $E$ lie on side $\\overline{BC}$ of triangle $ABC$, point $F$ lies on side $\\overline{AC}$, and segments $\\overline{AD}$, $\\overline{AE}$, and $\\overline{BF}$ are drawn. How many triangles of any size appear in the figure?',
    fig: {
      view: [-0.8, -0.9, 8.8, 6.8],
      elems: [
        { t: 'poly', pts: [[0, 0], [8, 0], [4, 6]], fill: false },
        { t: 'seg', a: [4, 6], b: [3, 0] },
        { t: 'seg', a: [4, 6], b: [5.5, 0] },
        { t: 'seg', a: [0, 0], b: [6, 3] },
        { t: 'point', p: [4, 6], label: 'A', dx: -4, dy: -8 },
        { t: 'point', p: [0, 0], label: 'B', dx: -14, dy: 12 },
        { t: 'point', p: [8, 0], label: 'C', dx: 8, dy: 12 },
        { t: 'point', p: [3, 0], label: 'D', dx: -4, dy: 16 },
        { t: 'point', p: [5.5, 0], label: 'E', dx: 2, dy: 16 },
        { t: 'point', p: [6, 3], label: 'F', dx: 10, dy: 2 },
      ],
    },
    choices: ['$9$', '$12$', '$15$', '$18$', '$20$'],
    answer: 2,
    solution:
      'Every triangle in the figure is cut out by three of the six drawn lines. Four of the lines pass through $A$ ($AB$, $AD$, $AE$, $AC$), and the other two are $BC$ and $BF$. Three lines through $A$ never make a triangle, so each triangle uses exactly two lines through $A$ together with one or both of $BC$ and $BF$. Two lines through $A$ plus $BC$: $\\frac{4 \\times 3}{2} = 6$ triangles, with bases on $BC$. Two lines through $A$ plus $BF$: since $BF$ crosses all four lines through $A$, another $6$ triangles. Finally one line through $A$ with both $BC$ and $BF$: those two segments meet at $B$, so the line through $A$ must not pass through $B$, which leaves $AD$, $AE$, and $AC$, for $3$ more triangles. The total is $6 + 6 + 3 = 15$. The choice $12$ misses the three triangles that use both $BC$ and $BF$, $9$ keeps only the triangles with a side along $BC$, $18$ gives every apex-$A$ pair a third base that is not there, and $20$ counts all $\\binom{6}{3}$ triples of lines, including the degenerate ones.',
    topic: 'counting',
  },
  {
    q: 'In the figure, $O$ is the center of the circle and $\\overline{PT}$ is tangent to the circle at $T$, with $PT = 20$ and $OP = 25$. Chord $\\overline{TB}$ is perpendicular to $\\overline{OP}$. What is the length of $\\overline{TB}$?',
    fig: {
      view: [-16.5, -16.5, 27.5, 16.5],
      elems: [
        { t: 'circle', c: [0, 0], r: 15 },
        { t: 'seg', a: [0, 0], b: [25, 0] },
        { t: 'seg', a: [0, 0], b: [9, 12] },
        { t: 'seg', a: [9, 12], b: [25, 0] },
        { t: 'seg', a: [9, 12], b: [9, -12] },
        { t: 'right', at: [9, 12], from: [0, 0], to: [25, 0], s: 1.4 },
        { t: 'right', at: [9, 0], from: [25, 0], to: [9, 12], s: 1.4 },
        { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 14 },
        { t: 'point', p: [25, 0], label: 'P', dx: 8, dy: 14 },
        { t: 'point', p: [9, 12], label: 'T', dx: -4, dy: -10 },
        { t: 'point', p: [9, -12], label: 'B', dx: -4, dy: 18 },
        { t: 'label', p: [17, 6], text: '20', dx: 10, dy: -6 },
        { t: 'label', p: [17, 0], text: '25', dx: 0, dy: 18 },
        { t: 'label', p: [9, -6], text: '?', dx: -12, dy: 4 },
      ],
    },
    choices: ['$12$', '$15$', '$18$', '$24$', '$30$'],
    answer: 3,
    solution:
      'A tangent is perpendicular to the radius at the point of contact, so triangle $OTP$ has a right angle at $T$ and $OT = \\sqrt{25^2 - 20^2} = \\sqrt{225} = 15$: the radius is $15$. Let $M$ be the point where the chord crosses $\\overline{OP}$. A radius perpendicular to a chord bisects it, so $TB = 2 \\cdot TM$, and $TM$ is the altitude to the hypotenuse of right triangle $OTP$. The area of that triangle two ways gives $\\frac{1}{2} \\cdot 15 \\cdot 20 = \\frac{1}{2} \\cdot 25 \\cdot TM$, so $TM = 12$ and $TB = 24$. (Without the area trick: $OM = \\frac{OT^2}{OP} = \\frac{225}{25} = 9$, and then $TM = \\sqrt{15^2 - 9^2} = 12$.) The choice $12$ forgets to double, $15$ is the radius, $30$ is the diameter, and $18$ doubles $OM$ instead of $TM$.',
    topic: 'geometry',
  },
  {
    q: 'What is the exact value of the product $\\frac{3}{4} \\cdot \\frac{8}{9} \\cdot \\frac{15}{16} \\cdot \\frac{24}{25} \\cdots \\frac{399}{400}$, whose $19$ factors are $1 - \\frac{1}{k^2}$ for $k = 2, 3, \\dots, 20$?',
    choices: ['$\\frac{1}{40}$', '$\\frac{19}{40}$', '$\\frac{1}{2}$', '$\\frac{21}{40}$', '$\\frac{21}{20}$'],
    answer: 3,
    solution:
      'Each factor splits: $1 - \\frac{1}{k^2} = \\frac{(k-1)(k+1)}{k \\cdot k}$. Write every numerator that way and the product becomes two chains: the $(k-1)$ parts give $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} \\cdots \\frac{19}{20}$, which collapses to $\\frac{1}{20}$, and the $(k+1)$ parts give $\\frac{3}{2} \\cdot \\frac{4}{3} \\cdot \\frac{5}{4} \\cdots \\frac{21}{20}$, which collapses to $\\frac{21}{2}$. Multiplying, $\\frac{1}{20} \\cdot \\frac{21}{2} = \\frac{21}{40}$. Checking with two factors, $\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{2}{3}$, and the formula $\\frac{k+1}{2k}$ with $k = 3$ gives $\\frac{4}{6} = \\frac{2}{3}$. The choice $\\frac{1}{2}$ is where the product is heading as the chain grows, not its value after $19$ factors; $\\frac{21}{20}$ multiplies $\\frac{1}{20}$ by $21$ and forgets the $2$ left in the denominator of the rising chain; $\\frac{1}{40}$ keeps the falling chain and the $\\frac{1}{2}$ but drops the $21$; and $\\frac{19}{40}$ keeps $19$ instead of $21$ as the survivor of the rising chain, confusing the last numerator that cancels with the one that does not.',
    topic: 'fractions',
  },
  {
    q: 'A courier walks along the grid of streets shown from corner $A$ to corner $B$, always moving one block east or one block north. The corner marked with a small square is closed for repairs and cannot be passed through. How many different routes can the courier take?',
    fig: {
      view: [-0.7, -0.7, 6.7, 4.7],
      elems: [
        { t: 'seg', a: [0, 0], b: [6, 0] },
        { t: 'seg', a: [0, 1], b: [6, 1] },
        { t: 'seg', a: [0, 2], b: [6, 2] },
        { t: 'seg', a: [0, 3], b: [6, 3] },
        { t: 'seg', a: [0, 4], b: [6, 4] },
        { t: 'seg', a: [0, 0], b: [0, 4] },
        { t: 'seg', a: [1, 0], b: [1, 4] },
        { t: 'seg', a: [2, 0], b: [2, 4] },
        { t: 'seg', a: [3, 0], b: [3, 4] },
        { t: 'seg', a: [4, 0], b: [4, 4] },
        { t: 'seg', a: [5, 0], b: [5, 4] },
        { t: 'seg', a: [6, 0], b: [6, 4] },
        { t: 'poly', pts: [[3.75, 1.75], [4.25, 1.75], [4.25, 2.25], [3.75, 2.25]] },
        { t: 'point', p: [0, 0], label: 'A', dx: -14, dy: 14 },
        { t: 'point', p: [6, 4], label: 'B', dx: 8, dy: -6 },
      ],
    },
    choices: ['$90$', '$120$', '$195$', '$204$', '$210$'],
    answer: 1,
    solution:
      'Every route from $A$ to $B$ uses $6$ east moves and $4$ north moves in some order, so ignoring the closure there are $\\binom{10}{4} = 210$ routes. Now count the routes that pass through the closed corner, which sits $4$ blocks east and $2$ blocks north of $A$. Reaching it takes $4$ east and $2$ north moves, $\\binom{6}{2} = 15$ ways; finishing from there to $B$ takes $2$ east and $2$ north, $\\binom{4}{2} = 6$ ways. So $15 \\times 6 = 90$ routes go through the closed corner, and $210 - 90 = 120$ avoid it. The choice $90$ is the number of blocked routes, $210$ ignores the closure, $195$ subtracts only the $15$ ways of reaching the corner, and $204$ subtracts only the $6$ ways of leaving it.',
    topic: 'counting',
  },
  {
    q: 'How many positive integers $n \\le 1000$ leave a remainder of $2$ when divided by $5$ and also make $n^2 + 2$ a multiple of $3$?',
    choices: ['$67$', '$132$', '$133$', '$134$', '$200$'],
    answer: 3,
    solution:
      'Translate the second condition first. Modulo $3$ the squares are $0^2 = 0$, $1^2 = 1$, and $2^2 = 4 \\equiv 1$, so $n^2 + 2$ is a multiple of $3$ exactly when $n^2 \\equiv 1$, that is, when $n$ is not a multiple of $3$. Now the two conditions live modulo $5$ and modulo $3$, so they repeat together with period $15$. Among $1$ to $15$ the numbers with remainder $2$ on division by $5$ are $2$, $7$, and $12$; the last is a multiple of $3$ and is thrown out, leaving the residues $2$ and $7 \\pmod{15}$. Since $1000 = 15 \\times 66 + 10$, the $66$ full blocks contribute $2 \\times 66 = 132$ numbers, and the tail $991$ to $1000$ holds $992$ and $997$, both of which qualify. The total is $134$. The choice $200$ counts every $n \\equiv 2 \\pmod 5$ and forgets the mod-$3$ condition altogether, $67$ keeps only $n \\equiv 1 \\pmod 3$ and misses that $n \\equiv 2 \\pmod 3$ also gives $n^2 \\equiv 1$, $132$ stops at the full blocks and drops $992$ and $997$, and $133$ drops one of those two.',
    topic: 'number theory',
  },
]

export default {
  id: 'set02',
  title: 'The Clockwork Circuit',
  blurb: 'Gears, bells, and grids: each problem turns one more notch than the last, and the final five reward finding the mechanism before touching the arithmetic.',
  minutes: 40,
  problems,
}
