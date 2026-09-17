// Introduction to Algebra — Checkpoint 6: sits after chapter 18 and draws on chapters 1–18.
// All problems, figures, and solutions are original MathQuest content.

const problems = [
  // ---- Band A ----
  {
    q: 'A card game uses two action cards. The card SQUARE replaces a player’s number by its square, and the card PLUS FIVE adds $5$ to it. Lena holds a number and notices that playing SQUARE and then PLUS FIVE would leave her with exactly the same number as playing PLUS FIVE and then SQUARE. What number does Lena hold?',
    choices: ['$-5$', '$-2$', '$0$', '$2$', '$5$'],
    answer: 1,
    solution:
      'Call her number $n$. Squaring and then adding gives $n^2 + 5$; adding and then squaring gives $(n + 5)^2 = n^2 + 10n + 25$. The two orders agree when $n^2 + 5 = n^2 + 10n + 25$, and the squares cancel, leaving $10n = -20$, so $n = -2$. Check: $(-2)^2 + 5 = 9$ and $(-2 + 5)^2 = 9$. The choice $-5$ is the number that PLUS FIVE turns into $0$, a tempting way to make squaring harmless, but it gives $25 + 5 = 30$ against $0^2 = 0$. The choice $0$ is the guess that only zero could make two different orders agree, but $0 + 5 = 5$ while $(0 + 5)^2 = 25$. The choice $2$ drops the sign in $10n = -20$, and $5$ is the card’s own constant, which gives $30$ against $100$.',
    topic: 'logic',
    chapter: 16,
  },
  {
    q: 'A storage crate is $(3x + 4)$ decimeters long, $(2x - 1)$ decimeters wide and $(x + 2)$ decimeters tall, where $x$ is a number greater than $1$ that the maker has not yet fixed. When the crate’s volume is written out as a polynomial in $x$, what is the coefficient of $x^2$?',
    choices: ['$-8$', '$6$', '$12$', '$17$', '$23$'],
    answer: 3,
    solution:
      'An $x^2$ term arises whenever the product takes the $x$ from two of the three factors and the constant from the third, so the coefficient is $3 \\cdot 2 \\cdot 2 + 3 \\cdot (-1) \\cdot 1 + 4 \\cdot 2 \\cdot 1 = 12 - 3 + 8 = 17$. No full expansion is needed, though one confirms $6x^3 + 17x^2 + 6x - 8$. The choice $-8$ is the constant term, the product of the three constants. The choice $6$ is the coefficient of $x^3$, the product of the three leading coefficients. The choice $12$ keeps only the largest of the three products, and $23$ treats the $-1$ in the width as $+1$, giving $12 + 3 + 8$.',
    topic: 'patterns',
    chapter: 18,
  },
  {
    q: 'The broken line in the figure is the complete graph of a function $f$; its corners are at the labeled points. What is $f(3) - f(-1)$?',
    fig: {
      view: [-4.5, -3.5, 6.5, 5.5],
      grid: true,
      elems: [
        { t: 'curve', pts: [[-3, 4], [-1, 1], [1, 3], [3, -2], [5, 0]] },
        { t: 'point', p: [-3, 4], label: '(-3, 4)', dx: -14, dy: -8 },
        { t: 'point', p: [-1, 1], label: '(-1, 1)', dx: -40, dy: 4 },
        { t: 'point', p: [1, 3], label: '(1, 3)', dx: 6, dy: -6 },
        { t: 'point', p: [3, -2], label: '(3, -2)', dx: 8, dy: 4 },
        { t: 'point', p: [5, 0], label: '(5, 0)', dx: 8, dy: -6 },
      ],
    },
    choices: ['$-3$', '$-1$', '$1$', '$3$', '$4$'],
    answer: 0,
    solution:
      'Read heights, not positions. At $x = 3$ the graph is at the corner $(3, -2)$, so $f(3) = -2$; at $x = -1$ it is at $(-1, 1)$, so $f(-1) = 1$. Then $f(3) - f(-1) = -2 - 1 = -3$. The choice $-1$ adds the two heights instead of subtracting. The choice $1$ is $f(-1)$ alone, the second height. The choice $3$ subtracts in the wrong order, $f(-1) - f(3)$. The choice $4$ subtracts the inputs, $3 - (-1)$, reading the $x$-coordinates as if they were the outputs.',
    topic: 'geometry',
    chapter: 17,
  },
  // ---- Band B ----
  {
    q: 'A bicycle’s price was cut by $25\\%$ in the winter sale, raised by $40\\%$ when the spring models arrived, and cut by $20\\%$ at the end-of-season clearance. By what percent is the clearance price below the original price?',
    choices: ['$5\\%$', '$8\\%$', '$15\\%$', '$16\\%$', '$40\\%$'],
    answer: 3,
    solution:
      'Each change multiplies the price: the first cut leaves $0.75$ of it, the raise multiplies by $1.4$, and the last cut by $0.8$. Together, $0.75 \\times 1.4 \\times 0.8 = 0.84$, so the clearance price is $84\\%$ of the original, which is $16\\%$ below it. The choice $5\\%$ adds the three percents, $-25 + 40 - 20$, as if each applied to the original price. The choice $8\\%$ adds the $40\\%$ raise to the original price rather than the reduced one, $0.75 + 0.40 = 1.15$, and then applies the last cut correctly, $1.15 \\times 0.8 = 0.92$. The choice $15\\%$ multiplies the first two changes correctly, reaching $105\\%$, and then subtracts $20$ from that percent. The choice $40\\%$ multiplies only the two cuts, $0.75 \\times 0.8 = 0.6$, and forgets the raise.',
    topic: 'percents',
    chapter: 6,
  },
  {
    q: 'A chain message spreads through the phones at a school. At the end of hour $1$ it sits on $5$ phones. During each later hour every phone holding the message forwards it to one new phone, and exactly one phone deletes it, so the number of phones holding the message becomes one less than double the previous count. How many phones hold the message at the end of hour $10$?',
    choices: ['$1024$', '$1025$', '$2047$', '$2048$', '$2049$'],
    answer: 4,
    solution:
      'Write $h(n)$ for the count at the end of hour $n$, so $h(1) = 5$ and $h(n + 1) = 2h(n) - 1$. Subtracting $1$ from both sides of the rule gives $h(n + 1) - 1 = 2(h(n) - 1)$: the quantity $h(n) - 1$ simply doubles each hour, starting from $h(1) - 1 = 4$. After nine doublings it is $4 \\cdot 2^9 = 2^{11} = 2048$, so $h(10) = 2049$. The choice $1024$ doubles from $1$ ten times, dropping both the $5$ and the extra $1$; the choice $1025$ is one doubling short, $2^{10} + 1$; the choice $2047$ subtracts the $1$ instead of adding it back; and $2048$ is $h(10) - 1$, the doubled quantity without the final step of adding $1$.',
    topic: 'patterns',
    chapter: 16,
  },
  {
    q: 'The broken line in the figure, with corners at the labeled points, is the graph of a function $f$. The graph of $g(x) = f(x - 3) + 2$ has exactly the same shape. What are the coordinates of its highest point?',
    fig: {
      view: [-3.5, -1.5, 5.5, 4.5],
      grid: true,
      elems: [
        { t: 'curve', pts: [[-2, 0], [1, 3], [4, 0]] },
        { t: 'point', p: [-2, 0], label: '(-2, 0)', dx: -30, dy: -8 },
        { t: 'point', p: [1, 3], label: '(1, 3)', dx: 8, dy: -6 },
        { t: 'point', p: [4, 0], label: '(4, 0)', dx: 8, dy: -8 },
      ],
    },
    choices: ['$(-2, 1)$', '$(-2, 5)$', '$(1, 5)$', '$(4, 1)$', '$(4, 5)$'],
    answer: 4,
    solution:
      'The value $g(x)$ is $2$ more than $f$ taken $3$ units to the left of $x$, so the graph of $g$ is the graph of $f$ moved $3$ units to the right and $2$ units up. The peak $(1, 3)$ of $f$ lands at $(1 + 3, 3 + 2) = (4, 5)$; check: $g(4) = f(1) + 2 = 5$, while for any other $x$ the value $f(x - 3)$ is below $3$. The choice $(-2, 1)$ reverses both moves. The choice $(-2, 5)$ reads $x - 3$ as a move to the left, the most common slip, and gets the vertical move right. The choice $(1, 5)$ applies only the vertical move. The choice $(4, 1)$ moves right correctly but takes the $+2$ as a drop.',
    topic: 'geometry',
    chapter: 17,
  },
  {
    q: 'Stage $n$ of a mosaic uses $an^2 + bn + c$ tiles, with the same fixed numbers $a$, $b$ and $c$ at every stage. Stage $0$ uses $3$ tiles, stage $1$ uses $5$, and stage $2$ uses $11$. How many tiles does stage $5$ use?',
    choices: ['$29$', '$35$', '$53$', '$75$', '$245$'],
    answer: 2,
    solution:
      'Stage $0$ gives $c = 3$ at once. Stage $1$ gives $a + b = 2$ and stage $2$ gives $4a + 2b = 8$; subtracting twice the first from the second leaves $2a = 4$, so $a = 2$ and $b = 0$. The rule is $2n^2 + 3$ and stage $5$ uses $2 \\cdot 25 + 3 = 53$ tiles. Equivalently, the counts $3, 5, 11$ climb by $2$ and then $6$, and for a rule of this form the climbs themselves grow by a constant, here $4$, giving $11 + 10 + 14 + 18 = 53$. The choice $29$ keeps adding $6$ from stage $2$ on, as though the growth were steady. The choice $35$ is stage $4$, one stage short. The choice $75$ is stage $6$, one stage past. The choice $245$ triples the climb each stage, $6, 18, 54, 162$, reading the pattern as geometric.',
    topic: 'patterns',
    chapter: 5,
  },
  // ---- Band C ----
  {
    q: 'A rule $M$ assigns a number $M(x)$ to every nonzero number $x$, and for every such $x$ it satisfies $M(x) + 3M\\left(\\frac{1}{x}\\right) = 8x$. What is $M(3)$?',
    choices: ['$-2$', '$2$', '$6$', '$\\frac{26}{3}$', '$24$'],
    answer: 0,
    solution:
      'Use the rule twice. With $x = 3$: $M(3) + 3M(\\frac{1}{3}) = 24$. With $x = \\frac{1}{3}$: $M(\\frac{1}{3}) + 3M(3) = \\frac{8}{3}$. Multiply the second by $3$ to get $3M(\\frac{1}{3}) + 9M(3) = 8$, and subtract the first: $8M(3) = -16$, so $M(3) = -2$. Indeed the only rule that works is $M(x) = \\frac{3}{x} - x$, and it gives $M(3) = 1 - 3 = -2$. The choice $2$ drops a sign in the last subtraction. The choice $6$ assumes $M(3)$ and $M(\\frac{1}{3})$ are equal, so that $4M(3) = 24$. The choice $\\frac{26}{3}$ is $M(\\frac{1}{3})$, the other unknown. The choice $24$ reads the single substitution $x = 3$ as if the second term were not there.',
    topic: 'algebra',
    chapter: 16,
  },
  {
    q: 'A polynomial is produced by multiplying out $(1 + 3x)^2(1 + x)^3$. Priya needs just one number from the result: the coefficient of $x^3$. What is it?',
    choices: ['$10$', '$27$', '$45$', '$46$', '$90$'],
    answer: 3,
    solution:
      'Think of the product as five factors in a row, two of them $(1 + 3x)$ and three of them $(1 + x)$. An $x^3$ term comes from choosing the $x$ in exactly three factors and the $1$ in the other two. If neither $(1 + 3x)$ contributes an $x$, all three $(1 + x)$ factors must, in $1$ way. If exactly one of the two does, there are $2$ ways to pick it, it brings a factor $3$, and $\\binom{3}{2} = 3$ pairs of the others complete the term: $2 \\cdot 3 \\cdot 3 = 18$. If both do, they bring $9$ and one of $3$ others joins them: $27$. The coefficient is $1 + 18 + 27 = 46$. The choice $10$ is $\\binom{5}{3}$, ignoring the $3$s. The choice $27$ keeps only the last case. The choice $45$ forgets the case where the $x^3$ comes entirely from the $(1 + x)$ factors. The choice $90$ multiplies $\\binom{5}{3}$ by $9$ as if every factor carried a $3$.',
    topic: 'counting',
    chapter: 18,
  },
  {
    q: 'The broken line in the figure, with corners at lattice points, is the complete graph of a function $f$. A number $x$ is called steady if $f(x) = x$. How many steady numbers are there?',
    fig: {
      view: [-6, -5, 7, 8],
      grid: true,
      elems: [
        { t: 'curve', pts: [[-5, -1], [-3, -4], [-1, 1], [1, 3], [4, 3], [6, 7]] },
        { t: 'point', p: [-5, -1] },
        { t: 'point', p: [-3, -4] },
        { t: 'point', p: [-1, 1] },
        { t: 'point', p: [1, 3] },
        { t: 'point', p: [4, 3] },
        { t: 'point', p: [6, 7] },
      ],
    },
    choices: ['$2$', '$3$', '$4$', '$5$', '$6$'],
    answer: 2,
    solution:
      'A steady number is a crossing of the graph with the line $y = x$, so draw that line through the origin at $45^\\circ$ and walk left to right. The steep first piece from $(-5, -1)$ to $(-3, -4)$ starts above the line and ends below it: one crossing. The piece from $(-3, -4)$ to $(-1, 1)$ climbs back from below to above: a second. The piece from $(-1, 1)$ to $(1, 3)$ runs parallel to the line, two units above it, and never meets it. The flat piece at height $3$ from $x = 1$ to $x = 4$ is crossed at $(3, 3)$: a third. The last piece from $(4, 3)$ to $(6, 7)$ passes through $(5, 5)$: a fourth. So there are $4$ steady numbers. The choice $2$ counts only the two crossings at lattice points, $(3, 3)$ and $(5, 5)$. The choice $3$ misses the crossing on the flat piece, where nothing looks like an intersection until the line is drawn. The choice $5$ counts the parallel piece as touching the line, and $6$ counts every corner of the graph.',
    topic: 'geometry',
    chapter: 17,
  },
  {
    q: 'Two four-key ciphers $f$ and $g$ each send every key in $\\{1, 2, 3, 4\\}$ to a key: $f(1) = 3$, $f(2) = 4$, $f(3) = 2$, $f(4) = 1$, and $g(1) = 2$, $g(2) = 4$, $g(3) = 3$, $g(4) = 1$. A key is called stable if encoding it with $g$ and then with $f$ gives the same key as encoding it with $f$ and then with $g$. How many of the four keys are stable?',
    choices: ['$0$', '$1$', '$2$', '$3$', '$4$'],
    answer: 1,
    solution:
      'Check each key. For $1$: $g$ then $f$ gives $f(2) = 4$, while $f$ then $g$ gives $g(3) = 3$. For $2$: $f(4) = 1$ and $g(4) = 1$, the same. For $3$: $f(3) = 2$ against $g(2) = 4$. For $4$: $f(1) = 3$ against $g(1) = 2$. Only key $2$ is stable, so the answer is $1$. The choice $0$ counts the keys that return to themselves under $g$ then $f$, and there are none. The choice $2$ counts the keys where $f$ and $g$ give the same output, namely $2$ and $4$, which is a different question. The choice $3$ counts the keys that are not stable. The choice $4$ comes from multiplying the two outputs, $f(x) \\cdot g(x)$, which agrees in either order for every key; but the ciphers are applied one after the other, not multiplied.',
    topic: 'logic',
    chapter: 16,
  },
  // ---- Band D ----
  {
    q: 'The passcode to a clubhouse door is $p(9)$, where $p$ is a polynomial with integer coefficients. The only facts known about $p$ are $p(2) = 7$ and $p(5) = 13$. Which of the following cannot be the passcode?',
    choices: ['$21$', '$35$', '$49$', '$77$', '$105$'],
    answer: 1,
    solution:
      'For a polynomial with integer coefficients, $p(a) - p(b)$ is always divisible by $a - b$: each term $ka^n - kb^n = k(a - b)(a^{n-1} + a^{n-2}b + \\cdots + b^{n-1})$ carries the factor $a - b$, and the constant terms cancel. So $p(9) - p(5)$ must be a multiple of $4$ and $p(9) - p(2)$ a multiple of $7$. The value $35$ passes the second test, since $35 - 7 = 28$, but $35 - 13 = 22$ is not a multiple of $4$, so $35$ is impossible. The other four pass both tests, and each is reached: $p(x) = 7 + 2(x - 2) + k(x - 2)(x - 5)$ satisfies both facts and gives $p(9) = 21 + 28k$, which is $21$, $49$, $77$ and $105$ for $k = 0, 1, 2, 3$. A student who tests only the gap from $p(2)$, divisibility by $7$, accepts $35$ along with the other four, since all five are multiples of $7$; the gap from $p(5)$ is the test that separates them.',
    topic: 'number theory',
    chapter: 11,
  },
  {
    q: 'A game awards every positive whole number a score, and the scores obey one law: the score of a product is the sum of the scores of its factors, so $s(mn) = s(m) + s(n)$ for all positive whole numbers $m$ and $n$. It is known that $s(6) = 11$ and $s(12) = 15$. What is $s(48)$?',
    choices: ['$19$', '$23$', '$26$', '$60$', '$165$'],
    answer: 1,
    solution:
      'Since $12 = 2 \\cdot 6$, the law gives $s(2) = s(12) - s(6) = 4$, and then $s(3) = s(6) - s(2) = 7$. Now $48 = 2^4 \\cdot 3$, so $s(48) = 4 \\cdot s(2) + s(3) = 16 + 7 = 23$; equivalently $48 = 12 \\cdot 4$ with $s(4) = 2s(2) = 8$, so $15 + 8 = 23$. The choice $19$ uses $s(4) = s(2)$, forgetting that $4$ carries two factors of $2$. The choice $26$ adds $s(12) + s(6)$, but $12 \\cdot 6$ is $72$, not $48$. The choice $60$ multiplies $s(12)$ by $4$ because $48 = 4 \\cdot 12$, but the law adds scores; it never scales them. The choice $165$ multiplies $s(6)$ by $s(12)$, turning the sum in the law into a product.',
    topic: 'algebra',
    chapter: 16,
  },
  {
    q: 'The broken line in the figure, with corners at lattice points, is the complete graph of a function $f$, defined only for $-5 \\le x \\le 8$. A signal passes through $f$ twice in a row. For how many inputs $x$ is the final output $f(f(x))$ equal to $0$?',
    fig: {
      view: [-6, -5, 9, 5],
      grid: true,
      elems: [
        { t: 'curve', pts: [[-5, 4], [-3, -4], [-1, 4], [2, 4], [6, 0], [8, -2]] },
        { t: 'point', p: [-5, 4] },
        { t: 'point', p: [-3, -4] },
        { t: 'point', p: [-1, 4] },
        { t: 'point', p: [2, 4] },
        { t: 'point', p: [6, 0] },
        { t: 'point', p: [8, -2] },
      ],
    },
    choices: ['$2$', '$3$', '$4$', '$5$', '$6$'],
    answer: 2,
    solution:
      'First find where $f$ itself is $0$: the graph crosses the $x$-axis at $x = -4$, at $x = -2$ and at $x = 6$, and nowhere else. So $f(f(x)) = 0$ exactly when $f(x)$ is $-4$, $-2$ or $6$. The graph never rises above $4$, so $f(x) = 6$ has no solution at all. The graph reaches $-4$ only at its lowest corner, so $f(x) = -4$ has the single solution $x = -3$. The height $-2$ is reached on the way down from $(-5, 4)$, at $x = -3.5$, on the way up to $(-1, 4)$, at $x = -2.5$, and at the far right end $(8, -2)$: three solutions. In all there are $1 + 3 = 4$ inputs. The choice $2$ counts only the two crossings of height $-2$ that sit inside a slanted piece. The choice $3$ stops at the three zeros of $f$ itself. The choice $5$ awards the unreachable zero $6$ a solution of its own. The choice $6$ gives every zero two preimages, as though each height were hit twice.',
    topic: 'geometry',
    chapter: 17,
  },
  {
    q: 'Mika finds that $x^4 + 4x^2 + 16$ can be written as the product $(x^2 + ax + b)(x^2 + cx + d)$, where $a$, $b$, $c$ and $d$ are integers. What is $a + b + c + d$?',
    choices: ['$-8$', '$0$', '$4$', '$8$', '$12$'],
    answer: 3,
    solution:
      'Multiply out and match: the $x^3$ term gives $a + c = 0$, the $x^2$ term $b + d + ac = 4$, the $x$ term $ad + bc = 0$, and the constant $bd = 16$. With $c = -a$ the $x$ condition becomes $a(d - b) = 0$. If $a = 0$ then $b + d = 4$ and $bd = 16$, which no integers satisfy, so $d = b$, and $b^2 = 16$ forces $b = \\pm 4$. Then $2b - a^2 = 4$: with $b = 4$ this gives $a^2 = 4$, while $b = -4$ would need $a^2 = -12$. So $b = d = 4$ and $\\{a, c\\} = \\{2, -2\\}$, giving $(x^2 + 2x + 4)(x^2 - 2x + 4)$ and $a + b + c + d = 8$. The choice $-8$ takes the sign $b = d = -4$ without checking that no $a$ then works. The choice $0$ stops at $a + c = 0$ and forgets $b$ and $d$. The choice $4$ is a single one of $b$ and $d$, or the $x^2$ coefficient. The choice $12$ drops the minus sign on $c$, adding $2 + 4 + 2 + 4$.',
    topic: 'algebra',
    chapter: 18,
  },
]

export default {
  id: 'intro-algebra-cp6',
  book: 'intro-algebra',
  number: 6,
  after: 18,
  covers: [1, 18],
  title: 'Steady Keys',
  blurb: 'Machines that must agree in either order, graphs read for their heights rather than their positions, and a closing run where a polynomial gives itself away through the numbers it cannot produce.',
  minutes: 25,
  problems,
}
