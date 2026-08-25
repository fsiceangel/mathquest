// Prealgebra chapter 6 — variations for sections 6.1-6.2.
// All problems and solutions are original MathQuest content.
// Rounding everywhere uses the round-half-up convention.

const s61 = [
  // p1 — reading a digit's place value
  [
    {
      q: 'In the number $8.264$, which digit is in the thousandths place?',
      choices: ['$4$', '$6$', '$2$', '$8$'],
      answer: 0,
      solution:
        'Count places moving right from the point: $2$ is tenths, $6$ is hundredths, $4$ is thousandths. So the answer is $4$. Choosing $6$ means starting the count at hundredths instead of tenths, and $2$ stops one place too soon.',
    },
    {
      q: 'In the number $50.913$, which digit is in the tenths place?',
      choices: ['$1$', '$9$', '$3$', '$0$'],
      answer: 1,
      solution:
        'The tenths place is the FIRST place to the right of the decimal point, so it holds the $9$. Picking $1$ reads the hundredths digit and picking $3$ reads the thousandths digit. The $0$ is on the left-hand side of the point, in the ones place — place value on the left never counts as tenths.',
    },
    {
      q: 'In the number $7.4085$, the digit $8$ sits in which place?',
      choices: ['Tenths', 'Hundredths', 'Ten-thousandths', 'Thousandths'],
      answer: 3,
      solution:
        'Walk right from the point: $4$ tenths, $0$ hundredths, $8$ thousandths, $5$ ten-thousandths. The $8$ is in the thousandths place. Skipping over the $0$ while counting is the classic slip — that lands you on hundredths — and counting the decimal point itself as a place pushes you one too far, to ten-thousandths.',
    },
  ],
  // p2 — adding decimals with different numbers of places
  [
    {
      q: 'Compute $4.8 + 0.35$.',
      choices: ['$5.15$', '$4.43$', '$4.15$', '$8.3$'],
      answer: 0,
      solution:
        'Write $4.8$ as $4.80$ so the places match, then add: hundredths $0 + 5 = 5$; tenths $8 + 3 = 11$, so write $1$ and carry $1$; ones $4 + 0 + 1 = 5$. The sum is $5.15$. Lining up the right-hand ends instead treats $4.8$ as $4.08$ and gives $4.43$; forgetting to carry the extra whole gives $4.15$; ignoring the point altogether and adding $48 + 35 = 83$ gives $8.3$.',
    },
    {
      q: 'A recipe uses $0.75$ litre of milk and $1.6$ litres of water. How many litres of liquid is that altogether?',
      choices: ['$1.81$', '$0.85$', '$2.35$', '$1.35$'],
      answer: 2,
      solution:
        '"Altogether" means add. Write $1.6$ as $1.60$ and stack the points: $0.75 + 1.60 = 2.35$ litres. Lining up the right-hand ends turns $1.6$ into $1.06$ and gives $1.81$; forgetting the carry out of the tenths gives $1.35$; and $0.85$ answers a different question — how much MORE water there is than milk.',
    },
    {
      q: 'What number must be added to $0.9$ to make $4.35$?',
      choices: ['$5.25$', '$4.26$', '$4.45$', '$3.45$'],
      answer: 3,
      solution:
        'Undo the addition by subtracting: $4.35 - 0.90 = 3.45$. Check: $3.45 + 0.90 = 4.35$. ✓ Adding the two numbers instead gives $5.25$; lining up the right-hand ends treats $0.9$ as $0.09$ and gives $4.26$; and forgetting to drop the tenths digit from $3$ to $2$ after borrowing gives $4.45$.',
    },
  ],
  // p3 — multiplying by a power of ten
  [
    {
      q: 'Compute $0.83 \\times 100$.',
      choices: ['$83$', '$8.3$', '$830$', '$0.0083$'],
      answer: 0,
      solution:
        'Multiplying by $100$ slides the decimal point two places to the right: $0.83 \\to 8.3 \\to 83$. Sliding only one place gives $8.3$, sliding three places gives $830$, and sliding to the LEFT gives $0.0083$ — that would be dividing by $100$, which makes a number smaller instead of bigger.',
    },
    {
      q: 'Compute $5.14 \\times 1000$.',
      choices: ['$514$', '$5140$', '$51.4$', '$0.00514$'],
      answer: 1,
      solution:
        '$1000$ has three zeros, so the point slides three places right: $5.14 \\to 51.4 \\to 514 \\to 5140$. You need a zero to fill the last empty place. Stopping after two slides gives $514$ (that happens when you run out of digits and give up), one slide gives $51.4$, and sliding left gives $0.00514$.',
    },
    {
      q: 'A number is multiplied by $100$, and the result is $6.2$. What was the number?',
      choices: ['$620$', '$0.62$', '$0.062$', '$0.0062$'],
      answer: 2,
      solution:
        'To undo a multiplication by $100$, slide the point two places to the LEFT: $6.2 \\to 0.62 \\to 0.062$. Check: $0.062 \\times 100 = 6.2$. ✓ Sliding right instead gives $620$, sliding only one place gives $0.62$, and counting the three characters of "$100$" instead of its two zeros gives $0.0062$.',
    },
  ],
  // p4 — subtracting a decimal from a number with fewer places
  [
    {
      q: 'Compute $5 - 1.35$.',
      choices: ['$4.35$', '$3.65$', '$3.75$', '$6.35$'],
      answer: 1,
      solution:
        'Write $5$ as $5.00$ and line up the points. In tenths: $500$ hundredths minus $135$ hundredths is $365$ hundredths, so the answer is $3.65$. Check: $3.65 + 1.35 = 5$. ✓ Taking the smaller digit from the larger in each column gives $4.35$; forgetting that the tenths digit drops to $9$ after the borrow gives $3.75$; and adding instead of subtracting gives $6.35$.',
    },
    {
      q: 'Compute $8.2 - 3.47$.',
      choices: ['$4.55$', '$11.67$', '$4.73$', '$5.27$'],
      answer: 2,
      solution:
        'Write $8.2$ as $8.20$ so both numbers reach the hundredths place: $8.20 - 3.47 = 4.73$. Check: $4.73 + 3.47 = 8.20$. ✓ Lining up the right-hand ends turns $8.2$ into $8.02$ and gives $4.55$; subtracting the smaller digit from the larger in every column gives $5.27$; adding gives $11.67$.',
    },
    {
      q: 'A bottle holds $1.5$ litres of water. Amir pours out $0.86$ litre. How many litres are left?',
      choices: ['$0.19$', '$0.74$', '$1.36$', '$0.64$'],
      answer: 3,
      solution:
        'Write $1.5$ as $1.50$ and subtract: $1.50 - 0.86 = 0.64$ litre. Check: $0.64 + 0.86 = 1.50$. ✓ Lining up the right-hand ends treats $1.5$ as $1.05$ and gives $0.19$; forgetting that the tenths digit falls from $5$ to $4$ once you borrow for the hundredths gives $0.74$; flipping each column so the smaller digit is always taken from the larger gives $1.36$, which is more than you started with.',
    },
  ],
  // p5 — multiplying two decimals by counting places
  [
    {
      q: 'Compute $0.3 \\times 0.6$.',
      choices: ['$0.18$', '$1.8$', '$0.9$', '$0.018$'],
      answer: 0,
      solution:
        'Ignore the points: $3 \\times 6 = 18$. The factors hold $1 + 1 = 2$ decimal places, so the answer needs two: $0.18$. Counting only one place slides the point one spot too far right and gives $1.8$ — which is bigger than both factors, impossible here. Counting three places gives $0.018$, and adding instead of multiplying gives $0.9$.',
    },
    {
      q: 'Compute $0.07 \\times 0.5$.',
      choices: ['$0.35$', '$0.035$', '$0.0035$', '$0.57$'],
      answer: 1,
      solution:
        'First $7 \\times 5 = 35$. Now count decimal places: $0.07$ has two and $0.5$ has one, so the answer needs $2 + 1 = 3$: $0.035$. Using only two places moves the point one spot too far right and gives $0.35$; using four places gives $0.0035$; and $0.57$ comes from adding the two decimals instead of multiplying them.',
    },
    {
      q: 'A rectangular tile measures $0.8$ metre by $0.15$ metre. What is its area, in square metres?',
      choices: ['$1.2$', '$0.012$', '$0.12$', '$1.9$'],
      answer: 2,
      solution:
        'Area is length times width. Ignore the points: $8 \\times 15 = 120$. The factors hold $1 + 2 = 3$ decimal places, so the product is $0.120$, which is $0.12$ square metre. Misplacing the point one spot to the right gives $1.2$ and one spot to the left gives $0.012$. The choice $1.9$ is the distance around the tile, $2 \\times (0.8 + 0.15)$ — a perimeter, not an area.',
    },
  ],
  // p6 — dividing a decimal by a whole number
  [
    {
      q: 'Compute $5.15 \\div 5$.',
      choices: ['$1.03$', '$1.3$', '$10.3$', '$0.103$'],
      answer: 0,
      solution:
        'The divisor $5$ is already whole, so divide and bring the point straight up: $515 \\div 5 = 103$, giving $5.15 \\div 5 = 1.03$. Check: $1.03 \\times 5 = 5.15$. ✓ The tempting error is $1.3$: $5$ does not go into $1$ tenth, and the $0$ that belongs in the tenths place gets skipped instead of written. Sliding the point one place the wrong way gives $10.3$ or $0.103$.',
    },
    {
      q: 'Compute $2.16 \\div 8$.',
      choices: ['$2.7$', '$0.27$', '$0.027$', '$17.28$'],
      answer: 1,
      solution:
        'Since $216 \\div 8 = 27$, we get $2.16 \\div 8 = 0.27$. Check: $0.27 \\times 8 = 2.16$. ✓ Note that $8$ does not fit into $2$ wholes, so the answer starts with $0$ in the ones place; forgetting that gives $2.7$, and overshooting the other way gives $0.027$. Multiplying instead of dividing gives $17.28$ — far bigger than what you started with.',
    },
    {
      q: 'A $7.44$-litre jug of juice is shared equally among $6$ glasses. How many litres go into each glass?',
      choices: ['$12.4$', '$44.64$', '$0.124$', '$1.24$'],
      answer: 3,
      solution:
        'Sharing equally is division: $7.44 \\div 6$. Since $744 \\div 6 = 124$, each glass gets $1.24$ litres. Check: $1.24 \\times 6 = 7.44$. ✓ Putting the point one place too far right gives $12.4$, which is more juice than the whole jug held; one place too far left gives $0.124$; and multiplying instead of dividing gives $44.64$.',
    },
  ],
  // p7 — dividing by a decimal
  [
    {
      q: 'Compute $4.8 \\div 0.6$.',
      choices: ['$0.8$', '$8$', '$80$', '$2.88$'],
      answer: 1,
      solution:
        'The divisor is not whole, so slide the point one place right in BOTH numbers: $4.8 \\div 0.6 = 48 \\div 6 = 8$. Sliding only the divisor gives $4.8 \\div 6 = 0.8$ — the most common slip, since both numbers must move together. Sliding the dividend two places but the divisor only one gives $480 \\div 6 = 80$, and multiplying instead of dividing gives $2.88$.',
    },
    {
      q: 'Compute $0.72 \\div 0.08$.',
      choices: ['$0.09$', '$0.9$', '$9$', '$0.0576$'],
      answer: 2,
      solution:
        'Slide both points two places right: $0.72 \\div 0.08 = 72 \\div 8 = 9$. Sense check — $0.08$ is tiny, so many of them fit inside $0.72$, and the answer should be bigger than $1$. Making the divisor whole while leaving the dividend alone gives $0.72 \\div 8 = 0.09$; moving the divisor only one place gives $0.72 \\div 0.8 = 0.9$; and multiplying gives $0.0576$.',
    },
    {
      q: 'Sam wants to rewrite $5.6 \\div 0.7$ as a division by a whole number. Which of these has the same answer?',
      choices: ['$0.56 \\div 7$', '$5.6 \\div 7$', '$560 \\div 7$', '$56 \\div 7$'],
      answer: 3,
      solution:
        'Both numbers must be multiplied by the same power of $10$, or the quotient changes. Sliding each point one place right turns $5.6 \\div 0.7$ into $56 \\div 7$, which equals $8$. In $5.6 \\div 7$ only the divisor moved; in $0.56 \\div 7$ the dividend moved the wrong way; and in $560 \\div 7$ the dividend moved two places while the divisor moved one.',
    },
  ],
  // p8 — dividing by a power of ten
  [
    {
      q: 'Compute $48.3 \\div 10$.',
      choices: ['$4.83$', '$0.483$', '$483$', '$38.3$'],
      answer: 0,
      solution:
        'Dividing by $10$ slides the decimal point one place to the LEFT: $48.3$ becomes $4.83$. Check: $4.83 \\times 10 = 48.3$. ✓ Sliding two places gives $0.483$, sliding right gives $483$ (that is multiplying, not dividing), and $38.3$ comes from subtracting $10$ instead of dividing by it.',
    },
    {
      q: 'Compute $6.5 \\div 1000$.',
      choices: ['$0.065$', '$0.0065$', '$6500$', '$0.65$'],
      answer: 1,
      solution:
        'Three zeros in $1000$ means three slides to the left: $6.5 \\to 0.65 \\to 0.065 \\to 0.0065$. You have to write zeros to fill the empty places. Stopping after one slide gives $0.65$, after two gives $0.065$, and sliding right gives $6500$.',
    },
    {
      q: 'A number is divided by $100$, and the answer is $0.4$. What was the number?',
      choices: ['$0.004$', '$4$', '$0.04$', '$40$'],
      answer: 3,
      solution:
        'Dividing slid the point two places left, so undo it by sliding two places RIGHT: $0.4 \\to 4 \\to 40$. Check: $40 \\div 100 = 0.4$. ✓ Dividing again instead of undoing gives $0.004$, sliding only one place right gives $4$, and sliding one place left gives $0.04$.',
    },
  ],
  // p9 — a multiplication whose product is a tidy number
  [
    {
      q: 'Compute $2.5 \\times 1.2$.',
      choices: ['$3$', '$30$', '$0.3$', '$3.7$'],
      answer: 0,
      solution:
        'Ignore the points: $25 \\times 12 = 300$. The factors hold $1 + 1 = 2$ decimal places, so put the point two spots in: $3.00$, which is exactly $3$. Counting only one place slides the point one spot too far right and gives $30$; counting three places gives $0.3$; and $3.7$ is the sum $2.5 + 1.2$, not the product.',
    },
    {
      q: 'Compute $0.25 \\times 60$.',
      choices: ['$1.5$', '$240$', '$15$', '$150$'],
      answer: 2,
      solution:
        'Ignore the points: $25 \\times 60 = 1500$. Only $0.25$ carries decimal places — two of them — so the answer is $15.00$, that is $15$. Sense check: $0.25$ is one quarter, and a quarter of $60$ is $15$. ✓ Putting the point one place too far left gives $1.5$ and one place too far right gives $150$. The choice $240$ comes from dividing by one quarter instead of taking one quarter.',
    },
    {
      q: 'Rope costs $\\$0.75$ per metre. What do $2.4$ metres cost?',
      choices: ['$\\$18$', '$\\$0.18$', '$\\$3.15$', '$\\$1.80$'],
      answer: 3,
      solution:
        'Multiply the price by the length. Ignore the points: $75 \\times 24 = 1800$. The factors hold $2 + 1 = 3$ decimal places, so the product is $1.800$, or $\\$1.80$. Estimate to be sure: $0.75$ is about $\\$1$ less a quarter, and $2.4$ metres of it should cost under $\\$2$. ✓ Misplacing the point one spot right gives $\\$18$ and one spot left gives $\\$0.18$; adding the two numbers gives $\\$3.15$.',
    },
  ],
  // p10 — a "how many pieces fit" division by a decimal
  [
    {
      q: 'A pitcher holds $5.4$ litres of lemonade. How many $0.36$-litre cups can be filled from it?',
      choices: ['$1.5$', '$15$', '$150$', '$1.944$'],
      answer: 1,
      solution:
        'Asking how many cups fit is a division: $5.4 \\div 0.36$. Slide both points two places right to make the divisor whole: $540 \\div 36 = 15$ cups. Check: $15 \\times 0.36 = 5.4$. ✓ Moving the divisor one place only gives $5.4 \\div 3.6 = 1.5$; moving the dividend two places but the divisor one gives $540 \\div 3.6 = 150$; and multiplying instead of dividing gives $1.944$.',
    },
    {
      q: 'A baker has $4.2$ kilograms of dough and uses $0.35$ kilogram for each loaf. How many loaves can she make?',
      choices: ['$0.12$', '$3.85$', '$12$', '$1.2$'],
      answer: 2,
      solution:
        'Divide the dough by the amount per loaf: $4.2 \\div 0.35$. Slide both points two places right: $420 \\div 35 = 12$ loaves. Check: $12 \\times 0.35 = 4.2$. ✓ Making the divisor whole while leaving the dough alone gives $4.2 \\div 35 = 0.12$; sliding the divisor only one place gives $4.2 \\div 3.5 = 1.2$; and subtracting instead of dividing gives $3.85$.',
    },
    {
      q: 'Floor tiles are each $0.25$ metre wide. Laid in a row with no gaps, how many tiles are needed to span $8.5$ metres?',
      choices: ['$2.125$', '$3.4$', '$340$', '$34$'],
      answer: 3,
      solution:
        'How many widths of $0.25$ fit into $8.5$? Slide both points two places right: $850 \\div 25 = 34$ tiles. Check: $34 \\times 0.25 = 8.5$. ✓ Each metre takes $4$ tiles, so $8.5$ metres taking $34$ is exactly right. Multiplying instead of dividing gives $2.125$; sliding the divisor one place only gives $8.5 \\div 2.5 = 3.4$; sliding the dividend two places and the divisor one gives $850 \\div 2.5 = 340$.',
    },
  ],
]

const s62 = [
  // p1 — rounding to the nearest whole number
  [
    {
      q: 'Round $12.4$ to the nearest whole number.',
      choices: ['$12$', '$13$', '$12.5$', '$10$'],
      answer: 0,
      solution:
        'The deciding digit is the tenths digit, $4$. Since $4 < 5$, round down and drop the rest: $12.4$ rounds to $12$. On the number line $12.4$ sits only $0.4$ from $12$ but $0.6$ from $13$. Rounding up out of habit gives $13$; $12.5$ rounds to the nearest half instead of the nearest whole; $10$ rounds to the nearest ten.',
    },
    {
      q: 'Round $8.5$ to the nearest whole number.',
      choices: ['$8$', '$8.5$', '$9$', '$10$'],
      answer: 2,
      solution:
        '$8.5$ sits exactly halfway between $8$ and $9$, so there is no nearer neighbour. The round-half-up convention settles the tie by rounding up: $8.5$ rounds to $9$. Rounding the tie down gives $8$; leaving the number alone gives $8.5$, which is not a whole number at all; and $10$ is the nearest ten, not the nearest whole number.',
    },
    {
      q: 'Round $29.8$ to the nearest whole number.',
      choices: ['$29$', '$30.8$', '$29.5$', '$30$'],
      answer: 3,
      solution:
        'The deciding digit is $8$, so the ones digit rounds up. Here $9$ ones become $10$ ones, and the carry ripples into the tens: $29.8$ rounds to $30$. Chopping off the decimal part instead of rounding gives $29$; rounding the whole-number part up but forgetting to drop the tail gives $30.8$; and $29.5$ rounds to the nearest half.',
    },
  ],
  // p2 — rounding to the nearest tenth, deciding digit small
  [
    {
      q: 'Round $7.83$ to the nearest tenth.',
      choices: ['$7.9$', '$7.8$', '$8$', '$7.83$'],
      answer: 1,
      solution:
        'The tenths digit is $8$ and the deciding digit next door is the hundredths digit, $3$. Since $3 < 5$, keep the $8$ and drop the rest: $7.83$ rounds to $7.8$. Rounding up anyway gives $7.9$; rounding to the nearest whole number gives $8$; and $7.83$ has not been rounded at all.',
    },
    {
      q: 'Round $0.462$ to the nearest tenth.',
      choices: ['$0.4$', '$0.46$', '$0.5$', '$0$'],
      answer: 2,
      solution:
        'Only the digit immediately right of the tenths place decides, and that is the hundredths digit $6$. Since $6 \\ge 5$, round the tenths digit up from $4$ to $5$: $0.462$ rounds to $0.5$. Looking at the LAST digit, $2$, instead of the deciding digit gives $0.4$; rounding to the nearest hundredth gives $0.46$; and rounding to the nearest WHOLE number gives $0$, since the tenths digit $4$ is below $5$.',
    },
    {
      q: 'Round $6.03$ to the nearest tenth.',
      choices: ['$6.1$', '$6.3$', '$6.03$', '$6.0$'],
      answer: 3,
      solution:
        'The tenths digit is $0$ and the deciding hundredths digit is $3$. Since $3 < 5$, the tenths digit stays $0$: the answer is $6.0$. Write the zero — it is what shows the rounding was done to the tenths place. Rounding up gives $6.1$; sliding the $3$ into the tenths place, as if the $0$ could be ignored, gives $6.3$; and $6.03$ is the unrounded number.',
    },
  ],
  // p3 — ties round up
  [
    {
      q: 'Round $2.45$ to the nearest tenth.',
      choices: ['$2.5$', '$2.4$', '$2$', '$2.45$'],
      answer: 0,
      solution:
        '$2.45$ is exactly halfway between $2.4$ and $2.5$, so the deciding digit is a $5$ with nothing after it. Round-half-up sends ties upward: the answer is $2.5$. Rounding the tie down gives $2.4$; rounding to the nearest whole number gives $2$; and $2.45$ is the number you started with.',
    },
    {
      q: 'Round $0.995$ to the nearest hundredth.',
      choices: ['$0.99$', '$0.90$', '$1.00$', '$1.01$'],
      answer: 2,
      solution:
        'The hundredths digit is $9$ and the deciding thousandths digit is $5$ — an exact tie, so round half up. Rounding $99$ hundredths up gives $100$ hundredths, and the carry ripples all the way through: $0.99 + 0.01 = 1.00$. Rounding the tie down gives $0.99$; clearing the hundredths to $0$ but bumping the tenths instead of the ones gives $0.90$; and carrying and ALSO bumping the hundredths gives $1.01$.',
    },
    {
      q: 'Round $3.65$ to the nearest tenth.',
      choices: ['$3.6$', '$4$', '$3.66$', '$3.7$'],
      answer: 3,
      solution:
        'The deciding hundredths digit is $5$ with nothing beyond it, so $3.65$ is a perfect tie between $3.6$ and $3.7$. Round-half-up breaks it upward: the answer is $3.7$. Rounding the tie down gives $3.6$; adding $1$ to the last digit instead of rounding at the tenths place gives $3.66$; and $4$ is the nearest whole number.',
    },
  ],
  // p4 — rounding to the nearest hundredth
  [
    {
      q: 'Round $0.7362$ to the nearest hundredth.',
      choices: ['$0.74$', '$0.73$', '$0.7$', '$0.736$'],
      answer: 0,
      solution:
        'The hundredths digit is $3$, and the deciding digit is the thousandths digit, $6$. Since $6 \\ge 5$, round up: $0.7362$ rounds to $0.74$. Chopping the tail off instead of rounding gives $0.73$ (so does looking at the final digit $2$ rather than the deciding digit); $0.7$ is rounded to the nearest tenth and $0.736$ to the nearest thousandth.',
    },
    {
      q: 'Round $9.6947$ to the nearest hundredth.',
      choices: ['$9.695$', '$9.69$', '$9.70$', '$9.694$'],
      answer: 1,
      solution:
        'The hundredths digit is $9$ and the deciding digit right next to it is $4$. Since $4 < 5$, the hundredths digit stays put: the answer is $9.69$. Rounding to the nearest thousandth gives $9.695$, and chopping at the thousandths place gives $9.694$. The trap is $9.70$: that comes from rounding twice, first $9.6947 \\to 9.695$ and then up again. Only ONE digit decides, and it is the one immediately after the place you keep.',
    },
    {
      q: 'Round $4.7952$ to the nearest hundredth.',
      choices: ['$4.79$', '$4.795$', '$4.70$', '$4.80$'],
      answer: 3,
      solution:
        'The hundredths digit is $9$ and the deciding thousandths digit is $5$, so round up. Since $79$ hundredths become $80$ hundredths, the carry moves into the tenths: $4.79 + 0.01 = 4.80$. Chopping instead of rounding gives $4.79$; rounding to the nearest thousandth gives $4.795$; and writing $0$ in the hundredths place while forgetting to bump the tenths from $7$ to $8$ gives $4.70$.',
    },
  ],
  // p5 — rounding that carries into the next place
  [
    {
      q: 'Round $7.98$ to the nearest tenth.',
      choices: ['$8.0$', '$7.9$', '$7.10$', '$7.99$'],
      answer: 0,
      solution:
        'The deciding hundredths digit is $8$, so the tenths digit $9$ must round up. Nine tenths plus one tenth is ten tenths, which is a whole: the carry moves into the ones place and $7.98$ rounds to $8.0$. Writing "ten tenths" as $7.10$ is the classic slip — and $7.10$ is really $7.1$, which is SMALLER than $7.9$. Chopping gives $7.9$, and bumping the hundredths digit instead of the tenths gives $7.99$.',
    },
    {
      q: 'Round $2.996$ to the nearest tenth.',
      choices: ['$2.99$', '$3.0$', '$2.9$', '$2.10$'],
      answer: 1,
      solution:
        'Round to the TENTHS place, so the deciding digit is the hundredths digit, $9$. The tenths digit $9$ rounds up to ten tenths, which carries into the ones: $2.996$ rounds to $3.0$. Rounding to the nearest hundredth answers a different question and gives $2.99$; chopping gives $2.9$; and writing the ten tenths in place instead of carrying gives $2.10$.',
    },
    {
      q: 'Round $49.97$ to the nearest tenth.',
      choices: ['$49.9$', '$49.10$', '$50.1$', '$50.0$'],
      answer: 3,
      solution:
        'The deciding hundredths digit is $7$, so the $9$ tenths round up to $10$ tenths. That carry makes the ones digit $9$ into $10$ as well, so it ripples again into the tens: $49.97$ rounds to $50.0$. Chopping gives $49.9$; writing ten tenths in place with no carry gives $49.10$; and carrying while also leaving a tenth behind gives $50.1$.',
    },
  ],
  // p6 — which number rounds to a given target
  [
    {
      q: 'Which of these numbers rounds to $8$ when rounded to the nearest whole number?',
      choices: ['$7.5$', '$8.5$', '$7.49$', '$9.2$'],
      answer: 0,
      solution:
        'A number rounds to $8$ when it is at least $7.5$ and below $8.5$. Check each: $7.5$ is a tie, and round-half-up sends it to $8$ ✓; $8.5$ is also a tie, but it rounds UP to $9$; $7.49$ rounds down to $7$, since the deciding digit is $4$; and $9.2$ rounds to $9$.',
    },
    {
      q: 'Which of these numbers rounds to $3.2$ when rounded to the nearest tenth?',
      choices: ['$3.25$', '$3.16$', '$3.14$', '$3.09$'],
      answer: 1,
      solution:
        'To land on $3.2$ a number must be at least $3.15$ and less than $3.25$. Check each: $3.25$ is a tie that rounds up to $3.3$; $3.16$ rounds to $3.2$ ✓; $3.14$ rounds down to $3.1$; and $3.09$ also rounds to $3.1$, since its tenths digit is $0$ and the deciding digit $9$ pushes it up one tenth.',
    },
    {
      q: 'Which of these numbers rounds to $0.6$ when rounded to the nearest tenth?',
      choices: ['$0.65$', '$0.549$', '$0.55$', '$0.66$'],
      answer: 2,
      solution:
        'The numbers that round to $0.6$ run from $0.55$ up to (but not including) $0.65$. Check each: $0.55$ is a tie that rounds up to $0.6$ ✓; $0.65$ is a tie too, but it rounds up to $0.7$; $0.549$ rounds to $0.5$, because the deciding digit is the $4$ right after the tenths place, not the $9$ at the end; and $0.66$ rounds to $0.7$.',
    },
  ],
  // p7 — estimating by rounding first
  [
    {
      q: 'To estimate $8.7 \\times 5.2$, round each number to the nearest whole number and multiply. What estimate do you get?',
      choices: ['$40$', '$45$', '$54$', '$45.24$'],
      answer: 1,
      solution:
        '$8.7$ rounds to $9$ and $5.2$ rounds to $5$, so the estimate is $9 \\times 5 = 45$. Chopping both numbers instead of rounding gives $8 \\times 5 = 40$; rounding both UP gives $9 \\times 6 = 54$; and $45.24$ is the exact product, which is a fine answer to a different question — the estimate is meant to be quick and friendly.',
    },
    {
      q: 'To estimate $61.4 - 28.75$, round each number to the nearest whole number and subtract. What estimate do you get?',
      choices: ['$33$', '$40$', '$32$', '$32.65$'],
      answer: 2,
      solution:
        '$61.4$ rounds to $61$ and $28.75$ rounds to $29$, so the estimate is $61 - 29 = 32$. Chopping $28.75$ down to $28$ instead of rounding it gives $33$; rounding to the nearest TEN instead gives $60 - 20 = 40$; and $32.65$ is the exact difference, not an estimate. The estimate lands close, which is exactly the point.',
    },
    {
      q: 'Sam computes $3.02 \\times 19.6$ and gets $5.9192$. Rounding each factor to a friendly whole number, roughly what should the answer be?',
      choices: ['$23$', '$6$', '$600$', '$60$'],
      answer: 3,
      solution:
        '$3.02$ rounds to $3$ and $19.6$ rounds to $20$, so the answer should be near $3 \\times 20 = 60$. Sam\'s $5.9192$ is about ten times too small — his decimal point slipped one place, and the true product is $59.192$. Adding the rounded numbers instead of multiplying gives $23$; dropping the zero from $20$ gives $6$; and rounding $3.02$ to $30$ gives $600$.',
    },
  ],
  // p8 — rounding to the hundredth when the carry ripples
  [
    {
      q: 'Round $8.5962$ to the nearest hundredth.',
      choices: ['$8.60$', '$8.59$', '$8.596$', '$8.50$'],
      answer: 0,
      solution:
        'The deciding thousandths digit is $6$, so the hundredths digit $9$ rounds up. That makes $60$ hundredths, with the carry moving into the tenths: $8.59 + 0.01 = 8.60$. Keep the final zero to show the hundredths place. Chopping gives $8.59$; rounding to the nearest thousandth gives $8.596$; and writing $0$ in the hundredths place while leaving the tenths digit at $5$ gives $8.50$.',
    },
    {
      q: 'Round $0.6989$ to the nearest hundredth.',
      choices: ['$0.69$', '$0.71$', '$0.70$', '$0.60$'],
      answer: 2,
      solution:
        'The hundredths digit is $9$ and the deciding thousandths digit is $8$, so round up: $69$ hundredths become $70$ hundredths, and the tenths digit climbs from $6$ to $7$. The answer is $0.70$. Chopping gives $0.69$; carrying into the tenths and ALSO bumping the hundredths gives $0.71$; and clearing the hundredths to $0$ without carrying gives $0.60$.',
    },
    {
      q: 'Round $19.995$ to the nearest hundredth.',
      choices: ['$19.99$', '$19.90$', '$20.01$', '$20.00$'],
      answer: 3,
      solution:
        'The deciding thousandths digit is $5$ with nothing after it, so this is a tie and round-half-up rounds it up. Adding one hundredth to $19.99$ makes every $9$ roll over: $19.99 + 0.01 = 20.00$. Rounding the tie down gives $19.99$; writing the $0$ in the hundredths place but dropping the carry gives $19.90$; and carrying all the way and then bumping the hundredths again gives $20.01$.',
    },
  ],
  // p9 — one digit decides; never round in stages
  [
    {
      q: 'Round $7.2481$ to the nearest tenth.',
      choices: ['$7.2$', '$7.3$', '$7.25$', '$7$'],
      answer: 0,
      solution:
        'The only digit that decides is the hundredths digit, $4$, and $4 < 5$, so round down to $7.2$. Rounding in stages from the right — $7.2481 \\to 7.248 \\to 7.25 \\to 7.3$ — is the trap, and it gives the wrong answer: $7.2481$ really is closer to $7.2$ than to $7.3$. The choice $7.25$ rounds to the hundredth, and $7$ rounds to the whole number.',
    },
    {
      q: 'Round $0.3499$ to the nearest tenth.',
      choices: ['$0.4$', '$0.3$', '$0.35$', '$0.349$'],
      answer: 1,
      solution:
        'The deciding digit is the hundredths digit, $4$. Since $4 < 5$, the answer is $0.3$ — even though the digits after it are big. Those $9$s only ever add up to less than one hundredth, so they can never carry the number past the halfway mark of $0.35$. Rounding in stages gives $0.4$; $0.35$ is rounded to the hundredth and $0.349$ to the thousandth.',
    },
    {
      q: 'Round $6.3449$ to the nearest hundredth.',
      choices: ['$6.35$', '$6.3$', '$6.345$', '$6.34$'],
      answer: 3,
      solution:
        'Keep the hundredths place, so the deciding digit is the thousandths digit, $4$. Since $4 < 5$, the answer is $6.34$. Working from the right in stages — $6.3449 \\to 6.345 \\to 6.35$ — breaks the one-digit rule and gives $6.35$. The choice $6.3$ is rounded to the tenth and $6.345$ to the thousandth.',
    },
  ],
  // p10 — working backwards from a rounded value
  [
    {
      q: 'A decimal rounds to $2.4$ when rounded to the nearest tenth. Which of these could it be?',
      choices: ['$2.449$', '$2.45$', '$2.349$', '$2.34$'],
      answer: 0,
      solution:
        'The numbers that round to $2.4$ start at $2.35$ and stop just below $2.45$. Check each: $2.449$ is inside the range and rounds to $2.4$ ✓; $2.45$ is a tie that rounds UP to $2.5$, so it just misses; $2.349$ rounds to $2.3$, because the deciding digit is the $4$ next to the tenths place; and $2.34$ rounds to $2.3$ as well.',
    },
    {
      q: 'A decimal rounds to $0.56$ when rounded to the nearest hundredth. Which of these could it be?',
      choices: ['$0.565$', '$0.5649$', '$0.5549$', '$0.554$'],
      answer: 1,
      solution:
        'To round to $0.56$, a number must be at least $0.555$ and less than $0.565$. Check each: $0.5649$ sits inside and rounds to $0.56$ ✓; $0.565$ is a tie that rounds up to $0.57$; $0.5549$ rounds to $0.55$, since the deciding thousandths digit is $4$ — the $9$ at the end never gets a vote; and $0.554$ rounds to $0.55$ too.',
    },
    {
      q: 'Rounded to the nearest tenth, a number becomes $5.0$. Which of these could the number be?',
      choices: ['$5.06$', '$4.949$', '$4.96$', '$5.05$'],
      answer: 2,
      solution:
        'The numbers that round to $5.0$ run from $4.95$ up to just below $5.05$ — the range straddles the whole number. Check each: $4.96$ rounds up to $5.0$ ✓; $5.06$ rounds to $5.1$; $4.949$ rounds to $4.9$, since the deciding digit is $4$; and $5.05$ is a tie that rounds up to $5.1$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 6,
  sections: {
    '6.1': s61,
    '6.2': s62,
  },
}
