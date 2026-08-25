// Introduction to Algebra chapter 9 — variations for section 9.5, Optimization.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD twice: once by substituting the winning input to produce the
//    claimed value, and once by substituting the OTHER endpoint (or the nearest
//    allowed neighbour) to show it really does worse. For a maximum that means
//    proving nothing allowed beats it; for a minimum, that nothing allowed
//    falls below it.
//  - Three named traps run through the file and are kept apart on purpose.
//    The DIRECTION trap: a positive coefficient sends the maximum to the right
//    endpoint, a negative coefficient sends it to the left, and reading that
//    backwards is the single most common slip. The BALANCE trap: with a fixed
//    sum the product peaks at the balanced split, and when the balanced split
//    is not a whole number the nearest whole neighbours win instead. The
//    REPORTING trap: naming the input when the question asked for the value of
//    the expression, or the reverse.
//  - Every distractor is one named mistake, and inside any single item no two
//    choices are the same number written two ways.
//  - The base problems of section 9.5 carry no figures, so neither do these.

const s95 = [
  // p1 — a linear expression x + c on a closed interval: push to the right end
  //      for the maximum, to the left end for the minimum
  [
    {
      q: 'If $3 \\le x \\le 9$, what is the smallest possible value of $x + 5$?',
      choices: ['$14$', '$8$', '$3$', '$-2$'],
      answer: 1,
      solution:
        'Carry the whole interval through: adding $5$ to every part of $3 \\le x \\le 9$ gives $8 \\le x + 5 \\le 14$. The smallest value is $8$. Check it forward at the left endpoint $x = 3$: $3 + 5 = 8$ ✓. Check the other end, $x = 9$: $9 + 5 = 14$, which is bigger, so $8$ really is the floor ✓. (The choice $14$ reports the maximum instead of the minimum; the choice $3$ stops at the endpoint value of $x$ and forgets to add $5$; the choice $-2$ subtracts $5$ where the expression adds it.)',
    },
    {
      q: 'If $-4 \\le x \\le 2$, what is the largest possible value of $x - 6$?',
      choices: ['$-10$', '$10$', '$-4$', '$8$'],
      answer: 2,
      solution:
        'Subtract $6$ from every part of $-4 \\le x \\le 2$: $-10 \\le x - 6 \\le -4$. The largest value is $-4$. Check it forward at $x = 2$: $2 - 6 = -4$ ✓. Check the other end, $x = -4$: $-4 - 6 = -10$, and $-10$ sits to the LEFT of $-4$, so it is smaller ✓. (The choice $-10$ takes the left endpoint, which gives the minimum — with negative answers it is easy to think the one with the bigger digits is bigger; the choice $10$ computes $6 - x$ at $x = -4$ instead of $x - 6$; the choice $8$ adds $6$ at $x = 2$ instead of subtracting.)',
    },
    {
      q: 'A number $t$ satisfies $-7 \\le t \\le -2$. What is the largest possible value of $t + 10$?',
      choices: ['$3$', '$17$', '$-2$', '$8$'],
      answer: 3,
      solution:
        'Add $10$ to every part of $-7 \\le t \\le -2$: $3 \\le t + 10 \\le 8$. The largest value is $8$. Check it forward at the right endpoint $t = -2$: $-2 + 10 = 8$ ✓. Check the far end, $t = -7$: $-7 + 10 = 3$, which is smaller ✓. (The choice $3$ uses $t = -7$, the endpoint that gives the minimum; the choice $17$ computes $10 - t$ at $t = -7$ rather than $t + 10$; the choice $-2$ reports the winning value of $t$ instead of the value of $t + 10$.)',
    },
  ],
  // p2 — multiplying or dividing the interval by a POSITIVE number: the order
  //      of the endpoints is preserved, so no reversal
  [
    {
      q: 'If $3 \\le x \\le 8$, what is the largest possible value of $5x$?',
      choices: ['$40$', '$15$', '$13$', '$8$'],
      answer: 0,
      solution:
        'Multiply every part of $3 \\le x \\le 8$ by the positive number $5$: $15 \\le 5x \\le 40$. Multiplying by a positive number keeps the endpoints in order, so the maximum sits at the right end. Check it forward at $x = 8$: $5(8) = 40$ ✓. Check the left end, $x = 3$: $5(3) = 15$, which is smaller ✓. (The choice $15$ reports the minimum; the choice $13$ ADDS $5$ to $8$ instead of multiplying; the choice $8$ gives the winning value of $x$ rather than the value of $5x$.)',
    },
    {
      q: 'If $4 \\le x \\le 12$, what is the smallest possible value of $\\frac{x}{4}$?',
      choices: ['$3$', '$1$', '$0$', '$16$'],
      answer: 1,
      solution:
        'Divide every part of $4 \\le x \\le 12$ by the positive number $4$: $1 \\le \\frac{x}{4} \\le 3$. The smallest value is $1$. Check it forward at $x = 4$: $\\frac{4}{4} = 1$ ✓. Check the other end, $x = 12$: $\\frac{12}{4} = 3$, which is bigger ✓. (The choice $3$ reports the maximum instead of the minimum; the choice $0$ subtracts $4$ from $4$ where the expression divides; the choice $16$ multiplies $4$ by $4$ instead of dividing.)',
    },
    {
      q: 'A number $w$ satisfies $2 \\le w \\le 9$. What is the smallest possible value of $7w$?',
      choices: ['$63$', '$9$', '$\\frac{2}{7}$', '$14$'],
      answer: 3,
      solution:
        'Multiply every part of $2 \\le w \\le 9$ by $7$: $14 \\le 7w \\le 63$. Since $7$ is positive, the smallest $w$ gives the smallest product. Check it forward at $w = 2$: $7(2) = 14$ ✓. Check the far end, $w = 9$: $7(9) = 63$, which is far bigger ✓. (The choice $63$ reports the maximum; the choice $9$ adds $7$ to $2$ instead of multiplying; the choice $\\frac{2}{7}$ divides by $7$ where the expression multiplies.)',
    },
  ],
  // p3 — a NEGATIVE coefficient reverses which endpoint wins
  [
    {
      q: 'If $1 \\le x \\le 5$, what is the largest possible value of $20 - 3x$?',
      choices: ['$5$', '$23$', '$17$', '$20$'],
      answer: 2,
      solution:
        'The coefficient of $x$ is $-3$, which is negative, so a SMALLER $x$ makes the whole expression bigger. The smallest allowed $x$ is $1$. Check it forward: $20 - 3(1) = 17$ ✓. Check the other end, $x = 5$: $20 - 15 = 5$, much smaller ✓. Carrying the interval confirms the range: from $3 \\le 3x \\le 15$ we get $5 \\le 20 - 3x \\le 17$. (The choice $5$ takes the right endpoint, which is exactly the DIRECTION trap — that value is the minimum; the choice $23$ computes $20 + 3(1)$, losing the minus sign; the choice $20$ uses $x = 0$, but $0$ is outside the allowed interval.)',
    },
    {
      q: 'If $-2 \\le x \\le 4$, what is the smallest possible value of $6 - 5x$?',
      choices: ['$16$', '$4$', '$-20$', '$-14$'],
      answer: 3,
      solution:
        'The coefficient of $x$ is $-5$, so a BIGGER $x$ makes the expression smaller. The biggest allowed $x$ is $4$. Check it forward: $6 - 5(4) = 6 - 20 = -14$ ✓. Check the other end, $x = -2$: $6 - 5(-2) = 6 + 10 = 16$, which is far larger ✓. (The choice $16$ takes the left endpoint, which gives the maximum here, not the minimum; the choice $4$ subtracts before multiplying at $x = 4$, computing $(6 - 5) \\times 4$; the choice $-20$ drops the $6$ and reports only $-5(4)$.)',
    },
    {
      q: 'A number $k$ satisfies $-3 \\le k \\le 2$. What is the largest possible value of $8 - 4k$?',
      choices: ['$20$', '$0$', '$-4$', '$12$'],
      answer: 0,
      solution:
        'The coefficient of $k$ is $-4$, so the smallest $k$ produces the largest value. The smallest allowed $k$ is $-3$. Check it forward: $8 - 4(-3) = 8 + 12 = 20$ ✓. Check the other end, $k = 2$: $8 - 8 = 0$, which is smaller ✓. (The choice $0$ takes the right endpoint, which gives the minimum; the choice $-4$ treats $-4(-3)$ as $-12$ and gets $8 - 12$, forgetting that a negative times a negative is positive; the choice $12$ drops the $8$ and reports only $-4(-3)$.)',
    },
  ],
  // p4 — squares: check both endpoints, and remember 0 in the middle
  [
    {
      q: 'If $-5 \\le x \\le 2$, what is the largest possible value of $x^2$?',
      choices: ['$4$', '$0$', '$-25$', '$25$'],
      answer: 3,
      solution:
        'Squaring measures distance from $0$, so the winner is whichever endpoint is FARTHER from zero — and $-5$ is five steps away while $2$ is only two. Check both forward: $(-5)^2 = 25$ and $2^2 = 4$, so $25$ is the maximum ✓. Nothing in between beats it, since every $x$ in the interval is within $5$ of zero ✓. (The choice $4$ checks only the right endpoint, as if a bigger $x$ always meant a bigger square; the choice $0$ is the MINIMUM of $x^2$, reached at $x = 0$; the choice $-25$ writes $(-5)^2$ as negative, but a square is never negative.)',
    },
    {
      q: 'If $-4 \\le x \\le 6$, what is the smallest possible value of $x^2$?',
      choices: ['$0$', '$16$', '$-4$', '$36$'],
      answer: 0,
      solution:
        'A square is never negative, and $x^2 = 0$ exactly when $x = 0$. Since $0$ lies inside $-4 \\le x \\le 6$, that minimum is actually reachable. Check it forward: $0^2 = 0$ ✓, and any other allowed $x$ gives something positive, for instance $(-1)^2 = 1$ and $3^2 = 9$ ✓. (The choice $16$ is $(-4)^2$, from assuming the minimum must sit at an endpoint — true for a straight line, false for a square; the choice $-4$ reports the smallest value of $x$ instead of the smallest value of $x^2$; the choice $36$ is $6^2$, the MAXIMUM.)',
    },
    {
      q: 'If $-6 \\le x \\le -1$, what is the smallest possible value of $x^2$?',
      choices: ['$0$', '$36$', '$1$', '$-1$'],
      answer: 2,
      solution:
        'Every allowed $x$ is negative, so $x = 0$ is out of reach and the smallest square belongs to the endpoint CLOSEST to zero, namely $x = -1$. Check it forward: $(-1)^2 = 1$ ✓. Check the far endpoint, $x = -6$: $(-6)^2 = 36$, much bigger, and a middle value such as $x = -3$ gives $9$, still bigger than $1$ ✓. (The choice $0$ assumes a square always bottoms out at $0$, but $0$ is not in this interval; the choice $36$ is the maximum, not the minimum; the choice $-1$ reports the winning value of $x$ instead of the value of $x^2$.)',
    },
  ],
  // p5 — fixed EVEN sum: the balanced split is available and wins
  [
    {
      q: 'Two whole numbers add up to $18$. What is the largest their product can be?',
      choices: ['$81$', '$80$', '$324$', '$9$'],
      answer: 0,
      solution:
        'With a fixed sum, the product is largest when the two numbers are as equal as possible. Half of $18$ is $9$, and $9$ is a whole number, so the balanced split is allowed. Check it forward: $9 + 9 = 18$ ✓ and $9 \\times 9 = 81$. Check the neighbours: $8 + 10 = 18$ gives $80$, and $7 + 11 = 18$ gives $77$ — every step away from balance costs more ✓. (The choice $80$ stops at the split $8$ and $10$, one step off balance; the choice $324$ is $18 \\times 18$, using the total as both numbers, but those two add to $36$, not $18$; the choice $9$ names each number rather than their product.)',
    },
    {
      q: 'A rectangle has a perimeter of $28$ units, and both side lengths are whole numbers. What is the largest possible area?',
      choices: ['$196$', '$48$', '$49$', '$13$'],
      answer: 2,
      solution:
        'Perimeter $28$ means the length and width add to $14$, since the perimeter counts each side twice. A fixed sum means the product — here the area — peaks at the balanced split, and half of $14$ is the whole number $7$. Check it forward: a $7$ by $7$ square has perimeter $2(7 + 7) = 28$ ✓ and area $49$. Check a neighbour: $6$ by $8$ also has perimeter $28$ ✓, but its area is only $48$ ✓. (The choice $196$ is $14 \\times 14$, using half the perimeter as EACH side, which would make the perimeter $56$; the choice $48$ is the $6$ by $8$ neighbour; the choice $13$ is the $1$ by $13$ rectangle, the most stretched-out one allowed and therefore the smallest area.)',
    },
    {
      q: 'Two whole numbers have a sum of $30$. Which pair gives the largest product?',
      choices: ['$14$ and $16$', '$10$ and $20$', '$1$ and $29$', '$15$ and $15$'],
      answer: 3,
      solution:
        'All four pairs really do add to $30$, so the only question is which product is biggest — and with a fixed sum, balance wins. Half of $30$ is the whole number $15$. Check all four forward: $15 \\times 15 = 225$, $14 \\times 16 = 224$, $10 \\times 20 = 200$, $1 \\times 29 = 29$ ✓. The balanced pair is the champion. (The choice $14$ and $16$ is one step off balance and misses by exactly $1$; the choice $10$ and $20$ is five steps off; the choice $1$ and $29$ is as lopsided as whole numbers allow, and it gives the SMALLEST product of the four.)',
    },
  ],
  // p6 — two independent intervals, all values positive: push each variable to
  //      the end that helps
  [
    {
      q: 'If $2 \\le a \\le 5$ and $4 \\le b \\le 9$, what is the largest possible value of $ab$?',
      choices: ['$8$', '$45$', '$14$', '$20$'],
      answer: 1,
      solution:
        'Every allowed value is positive, so a bigger factor always means a bigger product: take $a$ and $b$ both as large as possible. Check it forward at $a = 5$, $b = 9$: $5 \\times 9 = 45$ ✓. Check a rival: $a = 4$, $b = 9$ gives $36$, and $a = 5$, $b = 8$ gives $40$ — both fall short ✓. (The choice $8$ is $2 \\times 4$, both factors at their smallest, which is the MINIMUM; the choice $14$ adds $5 + 9$ instead of multiplying; the choice $20$ is $5 \\times 4$, pairing the biggest $a$ with the smallest $b$.)',
    },
    {
      q: 'If $3 \\le x \\le 8$ and $2 \\le y \\le 6$, what is the smallest possible value of $xy$?',
      choices: ['$48$', '$5$', '$18$', '$6$'],
      answer: 3,
      solution:
        'All the allowed values are positive, so shrinking either factor shrinks the product: take $x$ and $y$ both as small as possible. Check it forward at $x = 3$, $y = 2$: $3 \\times 2 = 6$ ✓. Check the rivals: $x = 4$, $y = 2$ gives $8$, and $x = 3$, $y = 3$ gives $9$ — both are larger ✓. (The choice $48$ is $8 \\times 6$, the maximum rather than the minimum; the choice $5$ adds $3 + 2$ instead of multiplying; the choice $18$ is $3 \\times 6$, pairing the smallest $x$ with the largest $y$.)',
    },
    {
      q: 'If $1 \\le p \\le 6$ and $2 \\le q \\le 5$, what is the largest possible value of $\\frac{p}{q}$?',
      choices: ['$3$', '$\\frac{6}{5}$', '$\\frac{1}{5}$', '$30$'],
      answer: 0,
      solution:
        'A quotient grows when the top grows and when the bottom SHRINKS, so take $p$ as large as allowed and $q$ as small as allowed. Check it forward at $p = 6$, $q = 2$: $\\frac{6}{2} = 3$ ✓. Check the rivals: $p = 6$, $q = 3$ gives $2$, and $p = 5$, $q = 2$ gives $2.5$ — neither reaches $3$ ✓. (The choice $\\frac{6}{5}$ makes BOTH numbers as large as possible, which is the trap: a bigger divisor makes the quotient smaller, and $\\frac{6}{5}$ is only $1.2$; the choice $\\frac{1}{5}$ is the smallest top over the largest bottom, so it is the minimum; the choice $30$ multiplies $6$ by $5$ instead of dividing.)',
    },
  ],
  // p7 — a difference across two intervals: the two variables pull opposite ways
  [
    {
      q: 'If $3 \\le x \\le 10$ and $4 \\le y \\le 12$, what is the smallest possible value of $y - x$?',
      choices: ['$9$', '$1$', '$-6$', '$-9$'],
      answer: 2,
      solution:
        'To make $y - x$ as small as possible, make $y$ as small as allowed AND $x$ as large as allowed — subtracting more leaves less. Check it forward at $y = 4$, $x = 10$: $4 - 10 = -6$ ✓. Check the rivals: $y = 5$, $x = 10$ gives $-5$, and $y = 4$, $x = 9$ gives $-5$ — both are larger than $-6$ ✓. (The choice $9$ is $12 - 3$, the largest value of $y - x$, not the smallest; the choice $1$ is $4 - 3$, which shrinks $y$ but forgets that $x$ should GROW; the choice $-9$ is $3 - 12$, which computes $x - y$ instead of $y - x$.)',
    },
    {
      q: 'If $2 \\le x \\le 7$ and $1 \\le y \\le 5$, what is the largest possible value of $x - y$?',
      choices: ['$-3$', '$6$', '$2$', '$12$'],
      answer: 1,
      solution:
        'To make $x - y$ as large as possible, start as high as allowed and subtract as little as allowed: take $x = 7$ and $y = 1$. Check it forward: $7 - 1 = 6$ ✓. Check the rivals: $x = 6$, $y = 1$ gives $5$, and $x = 7$, $y = 2$ gives $5$ — neither reaches $6$ ✓. (The choice $-3$ is $2 - 5$, the SMALLEST value of $x - y$; the choice $2$ is $7 - 5$, which grows $x$ but also grows the amount being subtracted; the choice $12$ is $7 + 5$, adding where the expression subtracts.)',
    },
    {
      q: 'Two numbers satisfy $-3 \\le x \\le 2$ and $1 \\le y \\le 6$. How small can $y - x$ be?',
      choices: ['$9$', '$4$', '$-9$', '$-1$'],
      answer: 3,
      solution:
        'Make $y$ as small as allowed and $x$ as large as allowed: $y = 1$ and $x = 2$. Check it forward: $1 - 2 = -1$ ✓. Check the rivals: $y = 1$, $x = 1$ gives $0$, and $y = 2$, $x = 2$ gives $0$ — both are bigger than $-1$ ✓. (The choice $9$ is $6 - (-3)$, the largest value rather than the smallest; the choice $4$ is $1 - (-3)$, taking the SMALLEST $x$, but subtracting a negative adds, which pushes the answer up instead of down; the choice $-9$ is $-3 - 6$, computing $x - y$ instead of $y - x$.)',
    },
  ],
  // p8 — a product whose two factors have a fixed sum, hidden inside one variable
  [
    {
      q: 'Let $x$ be a whole number. What is the largest possible value of $x(12 - x)$?',
      choices: ['$36$', '$35$', '$144$', '$6$'],
      answer: 0,
      solution:
        'The two factors are $x$ and $12 - x$, and they always add to $12$ — a fixed sum. Balance them: $x = 6$ makes both factors $6$. Check it forward: $6 \\times (12 - 6) = 6 \\times 6 = 36$ ✓. Check the neighbours: $x = 5$ gives $5 \\times 7 = 35$ and $x = 7$ gives $7 \\times 5 = 35$, both smaller ✓. (The choice $35$ stops at a neighbour split; the choice $144$ is $12 \\times 12$, using the fixed sum as both factors; the choice $6$ reports the winning value of $x$ instead of the value of the product.)',
    },
    {
      q: 'Let $n$ be a whole number. Which value of $n$ makes $n(20 - n)$ as large as possible?',
      choices: ['$20$', '$9$', '$10$', '$100$'],
      answer: 2,
      solution:
        'The factors $n$ and $20 - n$ add to $20$ no matter what $n$ is, so the product peaks where they are equal: $n = 10$ makes both factors $10$. Check it forward: $10 \\times (20 - 10) = 100$ ✓. Check the neighbours: $n = 9$ gives $9 \\times 11 = 99$ and $n = 11$ gives $11 \\times 9 = 99$, both smaller ✓. (The choice $20$ uses the fixed sum as the input, but $n = 20$ gives $20 \\times 0 = 0$; the choice $9$ is one step off balance; the choice $100$ is the largest PRODUCT, while the question asked for the value of $n$ that produces it.)',
    },
    {
      q: 'Let $x$ be a whole number. What is the largest possible value of $(x + 1)(9 - x)$?',
      choices: ['$24$', '$25$', '$20$', '$10$'],
      answer: 1,
      solution:
        'Add the two factors: $(x + 1) + (9 - x) = 10$, a fixed sum, so aim to make both factors $5$. That needs $x + 1 = 5$, so $x = 4$ — and then $9 - x = 5$ as well. Check it forward: $(4 + 1)(9 - 4) = 5 \\times 5 = 25$ ✓. Check the neighbours: $x = 3$ gives $4 \\times 6 = 24$ and $x = 5$ gives $6 \\times 4 = 24$, both smaller ✓. (The choice $24$ stops at a neighbour; the choice $20$ balances $x$ against $9 - x$ and forgets the $+1$, computing $4 \\times 5$ instead of $5 \\times 5$; the choice $10$ reports the fixed SUM of the two factors instead of their product.)',
    },
  ],
  // p9 — fixed ODD sum: the balanced split is not whole, so test the neighbours
  [
    {
      q: 'Two whole numbers add up to $21$, and their product is as large as possible. What are the two numbers?',
      choices: ['$9$ and $12$', '$10$ and $11$', '$10.5$ and $10.5$', '$1$ and $20$'],
      answer: 1,
      solution:
        'Balance would put both numbers at $\\frac{21}{2} = 10.5$, which is not a whole number, so take the closest whole neighbours: $10$ and $11$. Check them forward: $10 + 11 = 21$ ✓ and $10 \\times 11 = 110$. Check the rivals: $9 \\times 12 = 108$ and $8 \\times 13 = 104$ — the further from balance, the worse ✓. (The choice $9$ and $12$ is one step further off balance; the choice $10.5$ and $10.5$ would give the bigger product $110.25$, but those are not whole numbers and so are not allowed; the choice $1$ and $20$ is the most lopsided split, worth only $20$.)',
    },
    {
      q: 'Two whole numbers add up to $27$. What is the largest their product can be?',
      choices: ['$182$', '$182.25$', '$180$', '$169$'],
      answer: 0,
      solution:
        'Half of $27$ is $13.5$, which is not a whole number, so the best allowed split is the pair of neighbours $13$ and $14$. Check it forward: $13 + 14 = 27$ ✓ and $13 \\times 14 = 182$. Check the next split out: $12 + 15 = 27$ gives $180$, which is smaller ✓. (The choice $182.25$ is $13.5 \\times 13.5$, the balanced product that whole numbers cannot reach; the choice $180$ is the $12$ and $15$ split; the choice $169$ is $13 \\times 13$, using $13$ twice — but those add to $26$, not $27$.)',
    },
    {
      q: 'Nia cuts a ribbon $19$ cm long into two pieces, each a whole number of centimetres. What is the largest possible product of the two lengths?',
      choices: ['$90.25$', '$88$', '$90$', '$81$'],
      answer: 2,
      solution:
        'The two pieces always add to $19$ cm, a fixed sum, so the product peaks at the most balanced whole-number cut. Half of $19$ is $9.5$, so take $9$ and $10$. Check it forward: $9 + 10 = 19$ ✓ and $9 \\times 10 = 90$. Check the next cut out: $8 + 11 = 19$ gives $88$, which is smaller ✓. (The choice $90.25$ is $9.5 \\times 9.5$, which needs half-centimetre pieces; the choice $88$ is the $8$ and $11$ cut; the choice $81$ is $9 \\times 9$, two pieces that would only use $18$ cm of the ribbon.)',
    },
  ],
  // p10 — a linear constraint with whole-number solutions: list what is legal,
  //       then pick the most balanced one
  [
    {
      q: 'Positive whole numbers $x$ and $y$ satisfy $2x + 3y = 36$. What is the largest possible value of $xy$?',
      choices: ['$30$', '$48$', '$18$', '$54$'],
      answer: 3,
      solution:
        'From $2x = 36 - 3y$ we get $x = \\frac{36 - 3y}{2}$, which is a whole number only when $y$ is even. List every legal pair: $y = 2, x = 15, xy = 30$; $y = 4, x = 12, xy = 48$; $y = 6, x = 9, xy = 54$; $y = 8, x = 6, xy = 48$; $y = 10, x = 3, xy = 30$. The winner is $54$. Check it forward: $2(9) + 3(6) = 18 + 18 = 36$ ✓, and $9 \\times 6 = 54$ ✓. The two pieces $2x$ and $3y$ are perfectly balanced there, at $18$ each ✓. (The choice $30$ is the most lopsided legal pair; the choice $48$ is one step off balance; the choice $18$ reports the balanced half-total $2x = 3y = 18$ instead of the product $xy$.)',
    },
    {
      q: 'Positive whole numbers $x$ and $y$ satisfy $5x + y = 30$. What is the largest possible value of $xy$?',
      choices: ['$25$', '$45$', '$40$', '$15$'],
      answer: 1,
      solution:
        'Here $y = 30 - 5x$, which is a positive whole number for $x = 1, 2, 3, 4, 5$. List the pairs: $x = 1, y = 25, xy = 25$; $x = 2, y = 20, xy = 40$; $x = 3, y = 15, xy = 45$; $x = 4, y = 10, xy = 40$; $x = 5, y = 5, xy = 25$. The winner is $45$. Check it forward: $5(3) + 15 = 15 + 15 = 30$ ✓, and $3 \\times 15 = 45$ ✓ — again the balanced case, with $5x$ and $y$ each equal to $15$ ✓. (The choice $25$ comes from the end pairs $x = 1$ or $x = 5$; the choice $40$ is one step off balance either way; the choice $15$ reports the half-total $5x = y = 15$ instead of $xy$.)',
    },
    {
      q: 'Positive whole numbers $x$ and $y$ satisfy $x + 6y = 24$. Which value of $y$ makes $xy$ as large as possible?',
      choices: ['$2$', '$3$', '$12$', '$24$'],
      answer: 0,
      solution:
        'Since $x = 24 - 6y$ must stay positive, $y$ can only be $1$, $2$, or $3$. List them: $y = 1, x = 18, xy = 18$; $y = 2, x = 12, xy = 24$; $y = 3, x = 6, xy = 18$. The largest product comes from $y = 2$. Check it forward: $12 + 6(2) = 24$ ✓, and $12 \\times 2 = 24$, which beats both $18$s ✓. Notice the balance: at $y = 2$ the pieces $x = 12$ and $6y = 12$ are equal. (The choice $3$ is one step past the balanced case and drops to $18$; the choice $12$ is the value of $x$ at the winning pair, not the value of $y$; the choice $24$ is the largest product itself, which the question did not ask for.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 9,
  sections: { '9.5': s95 },
}
