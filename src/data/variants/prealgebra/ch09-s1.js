// Prealgebra chapter 9 — variations for sections 9.1-9.3 (Square Roots).
// All problems and solutions are original MathQuest content.
// Every radical answer here is in simplest radical form: no perfect-square
// factor is left under a root, and no root is left in a denominator.

const s91 = [
  // p1 — root of a perfect square, with the "halving is not rooting" trap
  [
    {
      q: 'What is $\\sqrt{81}$?',
      choices: ['$9$', '$40.5$', '$6561$', '$18$'],
      answer: 0,
      solution:
        'We need the number that multiplies by itself to give $81$: since $9 \\times 9 = 81$, we get $\\sqrt{81} = 9$. The choice $40.5$ is half of $81$ — halving is not rooting. The choice $6561$ is $81^2$, which squares instead of rooting, and $18$ doubles $9$ instead of stopping there.',
    },
    {
      q: 'What is $\\sqrt{121}$?',
      choices: ['$60.5$', '$12$', '$11$', '$10$'],
      answer: 2,
      solution:
        'Hunt among the low teens: $10^2 = 100$ is too small and $12^2 = 144$ is too big, but $11 \\times 11 = 121$ lands exactly. So $\\sqrt{121} = 11$. The choice $60.5$ is half of $121$, and $12$ and $10$ are the roots of the neighbouring squares $144$ and $100$, not of $121$.',
    },
    {
      q: 'What is $\\sqrt{256}$?',
      choices: ['$128$', '$15$', '$17$', '$16$'],
      answer: 3,
      solution:
        'Test squares in the middle teens: $15^2 = 225$ is too small and $17^2 = 289$ is too big, while $16 \\times 16 = 256$ is exact. So $\\sqrt{256} = 16$. The choice $128$ is half of $256$ — a different operation entirely.',
    },
  ],
  // p2 — root of a perfect square, with the "squaring goes the other way" trap
  [
    {
      q: 'What is $\\sqrt{36}$?',
      choices: ['$18$', '$6$', '$1296$', '$12$'],
      answer: 1,
      solution:
        'Since $6 \\times 6 = 36$, the square root of $36$ is $6$. The choice $1296$ is $36^2$ — that is squaring, which runs in the opposite direction from rooting. The choice $18$ halves $36$, and $12$ doubles the correct answer.',
    },
    {
      q: 'What is $\\sqrt{49}$?',
      choices: ['$2401$', '$24.5$', '$7$', '$14$'],
      answer: 2,
      solution:
        'Since $7 \\times 7 = 49$, we get $\\sqrt{49} = 7$. The choice $2401$ is $49^2$, which squares the number instead of rooting it; $24.5$ is half of $49$; and $14$ is double the correct answer.',
    },
    {
      q: 'What is $\\sqrt{100}$?',
      choices: ['$50$', '$10000$', '$20$', '$10$'],
      answer: 3,
      solution:
        'Since $10 \\times 10 = 100$, the square root of $100$ is $10$. The choice $10000$ is $100^2$ — squaring, not rooting. The choice $50$ halves $100$, and $20$ doubles the correct answer.',
    },
  ],
  // p3 — spotting the perfect square in a list
  [
    {
      q: 'Which of these numbers is the square of a whole number?',
      choices: ['$144$', '$140$', '$150$', '$160$'],
      answer: 0,
      solution:
        'A perfect square is a whole number times itself. Since $12 \\times 12 = 144$, the number $144$ is a perfect square. The others are trapped between squares with no whole number to land on: $121 < 140 < 144$, $144 < 150 < 169$, and $144 < 160 < 169$.',
    },
    {
      q: 'Exactly one of these numbers is a perfect square. Which one?',
      choices: ['$60$', '$64$', '$68$', '$72$'],
      answer: 1,
      solution:
        'Since $8 \\times 8 = 64$, the number $64$ is a perfect square. The others fall between two squares: $49 < 60 < 64$, and both $68$ and $72$ sit between $64$ and $81$. Being close to a square is not the same as being one.',
    },
    {
      q: 'Which number in this list can be written as a whole number times itself?',
      choices: ['$98$', '$110$', '$126$', '$121$'],
      answer: 3,
      solution:
        'Since $11 \\times 11 = 121$, the number $121$ is a perfect square. The others land between squares: $81 < 98 < 100$, $100 < 110 < 121$, and $121 < 126 < 144$.',
    },
  ],
  // p4 — root of a larger perfect square, found by testing neighbours
  [
    {
      q: 'What is $\\sqrt{225}$?',
      choices: ['$15$', '$112.5$', '$14$', '$16$'],
      answer: 0,
      solution:
        'Test squares in the middle teens: $14^2 = 196$ is too small and $16^2 = 256$ is too big, while $15 \\times 15 = 225$ is exact. So $\\sqrt{225} = 15$. The choice $112.5$ is half of $225$ — halving is not rooting.',
    },
    {
      q: 'What is $\\sqrt{289}$?',
      choices: ['$144.5$', '$17$', '$16$', '$18$'],
      answer: 1,
      solution:
        'Work through the high teens: $16^2 = 256$ falls short and $18^2 = 324$ overshoots, but $17 \\times 17 = 289$ is exact. So $\\sqrt{289} = 17$. The choice $144.5$ is half of $289$, which answers a completely different question.',
    },
    {
      q: 'What is $\\sqrt{361}$?',
      choices: ['$180.5$', '$18$', '$19$', '$20$'],
      answer: 2,
      solution:
        'Near the top of the teens: $18^2 = 324$ is too small and $20^2 = 400$ is too big, while $19 \\times 19 = 361$ hits it exactly. So $\\sqrt{361} = 19$. The choice $180.5$ is half of $361$ — halving is not rooting.',
    },
  ],
  // p5 — squaring undoes rooting
  [
    {
      q: 'What is $(\\sqrt{13})^2$?',
      choices: ['$169$', '$13$', '$26$', '$6.5$'],
      answer: 1,
      solution:
        'By definition, $\\sqrt{13}$ is the number whose square is $13$, so squaring it hands $13$ straight back. The choice $169$ is $13^2$ — that squares the $13$ instead of squaring its root. The choice $26$ doubles and $6.5$ halves, and neither has anything to do with squaring.',
    },
    {
      q: 'What is $(\\sqrt{30})^2$?',
      choices: ['$900$', '$60$', '$30$', '$15$'],
      answer: 2,
      solution:
        'Squaring undoes rooting, so $(\\sqrt{30})^2 = 30$ — no decimals needed. The choice $900$ is $30^2$, which squares the number under the root rather than the root itself; $60$ doubles $30$ and $15$ halves it.',
    },
    {
      q: 'What is $(\\sqrt{23})^2$?',
      choices: ['$529$', '$46$', '$11.5$', '$23$'],
      answer: 3,
      solution:
        'The number $\\sqrt{23}$ is built to have square $23$, so $(\\sqrt{23})^2 = 23$. The choice $529$ is $23^2$, squaring the wrong thing; $46$ is double $23$ and $11.5$ is half of it — doubling and halving are not squaring.',
    },
  ],
  // p6 — rooting undoes squaring
  [
    {
      q: 'If $m$ is a positive number, what is $(\\sqrt{m})^2$?',
      choices: ['$m$', '$m^2$', '$\\sqrt{m}$', '$2m$'],
      answer: 0,
      solution:
        'The number $\\sqrt{m}$ is the one whose square is $m$, so squaring it returns $m$. The choice $m^2$ squares the $m$ as well as the root — one squaring too many. The choice $\\sqrt{m}$ forgets to square at all, and $2m$ treats squaring as doubling.',
    },
    {
      q: 'What is $\\sqrt{5^2}$?',
      choices: ['$25$', '$10$', '$5$', '$\\sqrt{5}$'],
      answer: 2,
      solution:
        'Work inside first: $5^2 = 25$, and $\\sqrt{25} = 5$. Rooting undoes squaring, so you land back on $5$. The choice $25$ stops after the squaring and never takes the root; $10$ doubles instead of rooting; and $\\sqrt{5}$ drops the exponent without doing anything with it.',
    },
    {
      q: 'If $x = -6$, what is $\\sqrt{x^2}$?',
      choices: ['$-6$', '$-36$', '$36$', '$6$'],
      answer: 3,
      solution:
        'Work inside first: $x^2 = (-6)^2 = 36$, because a negative times a negative is positive. Then $\\sqrt{36} = 6$. A square root is never negative, so the answer is $6$, not $-6$ — the shortcut "$\\sqrt{x^2} = x$" only works when $x$ is positive. The choice $-36$ comes from writing $(-6)^2$ as $-36$ and losing the sign rule, and $36$ stops after the squaring without taking the root.',
    },
  ],
  // p7 — root of a fraction
  [
    {
      q: 'What is $\\sqrt{\\frac{16}{81}}$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{16}{9}$', '$\\frac{9}{4}$', '$\\frac{8}{81}$'],
      answer: 0,
      solution:
        'Root the top and the bottom separately: $\\sqrt{16} = 4$ and $\\sqrt{81} = 9$, so the answer is $\\frac{4}{9}$. Check: $\\frac{4}{9} \\times \\frac{4}{9} = \\frac{16}{81}$. The choice $\\frac{16}{9}$ roots only the bottom, $\\frac{9}{4}$ flips the fraction upside down, and $\\frac{8}{81}$ halves the top instead of rooting it and leaves the bottom alone.',
    },
    {
      q: 'What is $\\sqrt{\\frac{36}{121}}$?',
      choices: ['$\\frac{18}{121}$', '$\\frac{6}{11}$', '$\\frac{36}{11}$', '$\\frac{11}{6}$'],
      answer: 1,
      solution:
        'Both parts are perfect squares: $\\sqrt{36} = 6$ and $\\sqrt{121} = 11$, so the answer is $\\frac{6}{11}$. Check: $\\frac{6}{11} \\times \\frac{6}{11} = \\frac{36}{121}$. The choice $\\frac{18}{121}$ halves the top instead of rooting it, $\\frac{36}{11}$ roots only the bottom, and $\\frac{11}{6}$ is the answer turned upside down.',
    },
    {
      q: 'What is $\\sqrt{\\frac{9}{64}}$?',
      choices: ['$\\frac{9}{8}$', '$\\frac{3}{64}$', '$\\frac{8}{3}$', '$\\frac{3}{8}$'],
      answer: 3,
      solution:
        'Root the top and the bottom separately: $\\sqrt{9} = 3$ and $\\sqrt{64} = 8$, giving $\\frac{3}{8}$. Check: $\\frac{3}{8} \\times \\frac{3}{8} = \\frac{9}{64}$. The choice $\\frac{9}{8}$ roots only the bottom, $\\frac{3}{64}$ roots only the top, and $\\frac{8}{3}$ flips the answer over.',
    },
  ],
  // p8 — combining two roots; roots do not split across + or -
  [
    {
      q: 'Compute $\\sqrt{225} - \\sqrt{81}$.',
      choices: ['$6$', '$\\sqrt{144}$', '$24$', '$144$'],
      answer: 0,
      solution:
        'Take each root first: $\\sqrt{225} = 15$ and $\\sqrt{81} = 9$, so the difference is $15 - 9 = 6$. The choice $\\sqrt{144}$ comes from subtracting inside the root, $225 - 81 = 144$ — but roots do not split across subtraction, and $\\sqrt{144} = 12$, not $6$. The choice $144$ subtracts inside and then forgets to root, and $24$ adds the two roots instead of subtracting.',
    },
    {
      q: 'Compute $\\sqrt{169} - \\sqrt{25}$.',
      choices: ['$\\sqrt{144}$', '$8$', '$18$', '$144$'],
      answer: 1,
      solution:
        'Root each number first: $\\sqrt{169} = 13$ and $\\sqrt{25} = 5$, so the difference is $13 - 5 = 8$. The choice $\\sqrt{144}$ subtracts under the root ($169 - 25 = 144$), which is not allowed — it equals $12$. The choice $144$ subtracts inside and skips the root entirely, and $18$ adds $13 + 5$ instead of subtracting.',
    },
    {
      q: 'Compute $\\sqrt{36} + \\sqrt{64}$.',
      choices: ['$\\sqrt{100}$', '$100$', '$14$', '$2$'],
      answer: 2,
      solution:
        'Take each root first: $\\sqrt{36} = 6$ and $\\sqrt{64} = 8$, so the sum is $6 + 8 = 14$. The tempting choice $\\sqrt{100}$ adds under the root, and it equals $10$, not $14$ — that is the whole point that $\\sqrt{a + b}$ and $\\sqrt{a} + \\sqrt{b}$ are different numbers. The choice $100$ adds inside and forgets to root, and $2$ subtracts the roots instead of adding them.',
    },
  ],
  // p9 — a root of a root
  [
    {
      q: 'What is $\\sqrt{\\sqrt{16}}$?',
      choices: ['$2$', '$4$', '$8$', '$256$'],
      answer: 0,
      solution:
        'Work from the inside out: $\\sqrt{16} = 4$, and then $\\sqrt{4} = 2$. Check: $2^2 = 4$ and $4^2 = 16$. The choice $4$ stops after only one rooting; $8$ halves $16$ instead of rooting it; and $256$ is $16^2$, which squares instead of rooting.',
    },
    {
      q: 'What is $\\sqrt{\\sqrt{256}}$?',
      choices: ['$16$', '$128$', '$4$', '$8$'],
      answer: 2,
      solution:
        'Two rootings in a row: $\\sqrt{256} = 16$, and then $\\sqrt{16} = 4$. Check: $4^2 = 16$ and $16^2 = 256$. The choice $16$ stops after the first root; $8$ halves that $16$ rather than rooting it; and $128$ halves $256$ at the very first step.',
    },
    {
      q: 'What is $\\sqrt{\\sqrt{625}}$?',
      choices: ['$25$', '$312.5$', '$12.5$', '$5$'],
      answer: 3,
      solution:
        'Inside out: $\\sqrt{625} = 25$, and then $\\sqrt{25} = 5$. Check: $5^2 = 25$ and $25^2 = 625$. The choice $25$ stops after one rooting; $12.5$ halves that $25$ instead of rooting it; and $312.5$ halves $625$ at the first step.',
    },
  ],
  // p10 — square area and perimeter
  [
    {
      q: 'A square patio has an area of $196$ square meters. What is its perimeter?',
      choices: ['$14$ meters', '$56$ meters', '$49$ meters', '$784$ meters'],
      answer: 1,
      solution:
        'The side length is $\\sqrt{196} = 14$ meters, since $14^2 = 196$. A square has four equal sides, so the perimeter is $4 \\times 14 = 56$ meters. The choice $14$ stops at the side length instead of going all the way around. The choice $49$ divides the area by $4$, and $784$ multiplies the area by $4$ — but the quartering and the multiplying belong to the side, not the area.',
    },
    {
      q: 'A square tile has an area of $144$ square centimeters. What is its perimeter?',
      choices: ['$36$ cm', '$576$ cm', '$48$ cm', '$12$ cm'],
      answer: 2,
      solution:
        'First find the side: $\\sqrt{144} = 12$ cm, because $12^2 = 144$. Then the perimeter is $4 \\times 12 = 48$ cm. The choice $12$ gives only one side. The choice $36$ divides the area by $4$ instead of rooting it first, and $576$ multiplies the area by $4$.',
    },
    {
      q: 'A square window has a perimeter of $36$ inches. What is its area?',
      choices: ['$1296$ square inches', '$9$ square inches', '$18$ square inches', '$81$ square inches'],
      answer: 3,
      solution:
        'Run the chain backwards. Four equal sides make $36$ inches, so each side is $36 \\div 4 = 9$ inches, and the area is $9^2 = 81$ square inches. The choice $9$ stops at the side length. The choice $18$ halves the perimeter instead of quartering it, and $1296$ squares the whole perimeter, $36^2$, instead of squaring one side.',
    },
  ],
]

const s92 = [
  // p1 — trapping a root between two consecutive integers
  [
    {
      q: '$\\sqrt{30}$ is between which two consecutive integers?',
      choices: ['$5$ and $6$', '$4$ and $5$', '$6$ and $7$', '$15$ and $16$'],
      answer: 0,
      solution:
        'Find the perfect squares on either side of $30$: since $25 < 30 < 36$, taking roots keeps the order and gives $5 < \\sqrt{30} < 6$. The choice $4$ and $5$ uses the squares $16$ and $25$, both of which sit below $30$. The choice $6$ and $7$ uses $36$ and $49$, both above $30$. The choice $15$ and $16$ comes from halving $30$ — halving is not rooting.',
    },
    {
      q: '$\\sqrt{55}$ is between which two consecutive integers?',
      choices: ['$6$ and $7$', '$7$ and $8$', '$8$ and $9$', '$27$ and $28$'],
      answer: 1,
      solution:
        'The perfect squares around $55$ are $49 = 7^2$ and $64 = 8^2$. Since $49 < 55 < 64$, we get $7 < \\sqrt{55} < 8$. The choice $6$ and $7$ uses $36$ and $49$, which are both below $55$; the choice $8$ and $9$ uses $64$ and $81$, both above it; and $27$ and $28$ halves $55$ instead of rooting it.',
    },
    {
      q: '$\\sqrt{110}$ is between which two consecutive integers?',
      choices: ['$9$ and $10$', '$11$ and $12$', '$55$ and $56$', '$10$ and $11$'],
      answer: 3,
      solution:
        'The perfect squares around $110$ are $100 = 10^2$ and $121 = 11^2$. Since $100 < 110 < 121$, we get $10 < \\sqrt{110} < 11$. The choice $9$ and $10$ uses $81$ and $100$, which are both too small; $11$ and $12$ uses $121$ and $144$, both too big; and $55$ and $56$ halves $110$.',
    },
  ],
  // p2 — simplifying a root by pulling out a square factor
  [
    {
      q: 'Simplify $\\sqrt{12}$.',
      choices: ['$4\\sqrt{3}$', '$2\\sqrt{3}$', '$\\sqrt{8}$', '$3\\sqrt{2}$'],
      answer: 1,
      solution:
        'The largest perfect square factor of $12$ is $4$, so $\\sqrt{12} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$. Check by squaring: $(2\\sqrt{3})^2 = 4 \\cdot 3 = 12$. The choice $4\\sqrt{3}$ brings the $4$ out unchanged instead of bringing out its root, $2$. The choice $\\sqrt{8}$ subtracts the $4$ from the $12$ instead of dividing. The choice $3\\sqrt{2}$ pulls out the wrong factor, and it squares to $18$, not $12$.',
    },
    {
      q: 'Simplify $\\sqrt{18}$.',
      choices: ['$9\\sqrt{2}$', '$3\\sqrt{6}$', '$3\\sqrt{2}$', '$6$'],
      answer: 2,
      solution:
        'Since $18 = 9 \\cdot 2$, we get $\\sqrt{18} = \\sqrt{9} \\cdot \\sqrt{2} = 3\\sqrt{2}$. Check: $(3\\sqrt{2})^2 = 9 \\cdot 2 = 18$. The choice $9\\sqrt{2}$ leaves the $9$ un-rooted as it comes out. The choice $3\\sqrt{6}$ writes $18 = 3 \\cdot 6$ and pulls the $3$ out even though $3$ is not a perfect square. The choice $6$ multiplies the $3$ and the $2$ together instead of leaving $\\sqrt{2}$ under the root.',
    },
    {
      q: 'Simplify $\\sqrt{44}$.',
      choices: ['$4\\sqrt{11}$', '$\\sqrt{40}$', '$2\\sqrt{22}$', '$2\\sqrt{11}$'],
      answer: 3,
      solution:
        'The largest perfect square factor of $44$ is $4$, so $\\sqrt{44} = \\sqrt{4} \\cdot \\sqrt{11} = 2\\sqrt{11}$. Check: $(2\\sqrt{11})^2 = 4 \\cdot 11 = 44$. The choice $4\\sqrt{11}$ brings the $4$ out whole instead of as its root $2$. The choice $\\sqrt{40}$ subtracts the $4$ instead of dividing by it. The choice $2\\sqrt{22}$ divides $44$ by $2$ instead of by $4$ — when a $2$ steps outside, the number inside must lose the whole factor of $4$.',
    },
  ],
  // p3 — a big square factor leaves as its root
  [
    {
      q: 'Simplify $\\sqrt{98}$.',
      choices: ['$7\\sqrt{2}$', '$49\\sqrt{2}$', '$2\\sqrt{7}$', '$14$'],
      answer: 0,
      solution:
        'Since $98 = 49 \\cdot 2$, we get $\\sqrt{98} = \\sqrt{49} \\cdot \\sqrt{2} = 7\\sqrt{2}$. Check: $(7\\sqrt{2})^2 = 49 \\cdot 2 = 98$. The choice $49\\sqrt{2}$ lets the $49$ leave the root unchanged instead of leaving as $7$. The choice $2\\sqrt{7}$ swaps the two roles, and it squares to $28$. The choice $14$ multiplies $7 \\cdot 2$ and throws the radical away.',
    },
    {
      q: 'Simplify $\\sqrt{54}$.',
      choices: ['$27\\sqrt{2}$', '$3\\sqrt{6}$', '$9\\sqrt{6}$', '$3\\sqrt{18}$'],
      answer: 1,
      solution:
        'The largest perfect square factor of $54$ is $9$, since $54 = 9 \\cdot 6$. So $\\sqrt{54} = \\sqrt{9} \\cdot \\sqrt{6} = 3\\sqrt{6}$, and $6 = 2 \\cdot 3$ hides no further square. Check: $(3\\sqrt{6})^2 = 9 \\cdot 6 = 54$. The choice $9\\sqrt{6}$ lets the $9$ out un-rooted. The choice $27\\sqrt{2}$ treats $27$ as if it were a perfect square, which it is not. The choice $3\\sqrt{18}$ writes $54 = 3 \\cdot 18$ and pulls out the $3$, another non-square.',
    },
    {
      q: 'Simplify $\\sqrt{63}$.',
      choices: ['$9\\sqrt{7}$', '$3\\sqrt{21}$', '$3\\sqrt{7}$', '$7\\sqrt{3}$'],
      answer: 2,
      solution:
        'Since $63 = 9 \\cdot 7$, we get $\\sqrt{63} = \\sqrt{9} \\cdot \\sqrt{7} = 3\\sqrt{7}$. Check: $(3\\sqrt{7})^2 = 9 \\cdot 7 = 63$. The choice $9\\sqrt{7}$ brings the $9$ out whole rather than as $3$. The choice $3\\sqrt{21}$ divides $63$ by $3$ instead of by the full square factor $9$. The choice $7\\sqrt{3}$ swaps the two numbers, and it squares to $147$.',
    },
  ],
  // p4 — trapping a larger root between two consecutive integers
  [
    {
      q: '$\\sqrt{72}$ is between which two consecutive integers?',
      choices: ['$8$ and $9$', '$7$ and $8$', '$9$ and $10$', '$36$ and $37$'],
      answer: 0,
      solution:
        'The perfect squares around $72$ are $64 = 8^2$ and $81 = 9^2$. Since $64 < 72 < 81$, we get $8 < \\sqrt{72} < 9$. The choice $7$ and $8$ uses $49$ and $64$, both below $72$; $9$ and $10$ uses $81$ and $100$, both above; and $36$ and $37$ halves $72$ instead of rooting it.',
    },
    {
      q: '$\\sqrt{130}$ is between which two consecutive integers?',
      choices: ['$10$ and $11$', '$12$ and $13$', '$11$ and $12$', '$65$ and $66$'],
      answer: 2,
      solution:
        'The perfect squares around $130$ are $121 = 11^2$ and $144 = 12^2$. Since $121 < 130 < 144$, we get $11 < \\sqrt{130} < 12$. The choice $10$ and $11$ uses $100$ and $121$, both under $130$; $12$ and $13$ uses $144$ and $169$, both over it; and $65$ and $66$ halves $130$.',
    },
    {
      q: '$\\sqrt{200}$ is between which two consecutive integers?',
      choices: ['$13$ and $14$', '$100$ and $101$', '$15$ and $16$', '$14$ and $15$'],
      answer: 3,
      solution:
        'The perfect squares around $200$ are $196 = 14^2$ and $225 = 15^2$. Since $196 < 200 < 225$, we get $14 < \\sqrt{200} < 15$ — the root sits just above $14$, because $200$ is only a little past $196$. The choice $13$ and $14$ uses $169$ and $196$, both below $200$; $15$ and $16$ uses $225$ and $256$, both above; and $100$ and $101$ halves $200$.',
    },
  ],
  // p5 — simplifying, with the "watch which number comes out" trap
  [
    {
      q: 'Simplify $\\sqrt{28}$.',
      choices: ['$4\\sqrt{7}$', '$2\\sqrt{7}$', '$7\\sqrt{2}$', '$2\\sqrt{14}$'],
      answer: 1,
      solution:
        'Since $28 = 4 \\cdot 7$, we get $\\sqrt{28} = \\sqrt{4} \\cdot \\sqrt{7} = 2\\sqrt{7}$. Check: $(2\\sqrt{7})^2 = 4 \\cdot 7 = 28$. The choice $4\\sqrt{7}$ lets the $4$ out without rooting it. The choice $7\\sqrt{2}$ swaps the order, and it squares to $98$, not $28$. The choice $2\\sqrt{14}$ divides $28$ by $2$ instead of by $4$ — the whole square factor has to leave.',
    },
    {
      q: 'Simplify $\\sqrt{99}$.',
      choices: ['$9\\sqrt{11}$', '$11\\sqrt{3}$', '$3\\sqrt{11}$', '$3\\sqrt{33}$'],
      answer: 2,
      solution:
        'Since $99 = 9 \\cdot 11$, we get $\\sqrt{99} = \\sqrt{9} \\cdot \\sqrt{11} = 3\\sqrt{11}$, and $11$ is prime so nothing more comes out. Check: $(3\\sqrt{11})^2 = 9 \\cdot 11 = 99$. The choice $9\\sqrt{11}$ brings the $9$ out whole. The choice $11\\sqrt{3}$ swaps the two numbers and squares to $363$. The choice $3\\sqrt{33}$ divides $99$ by $3$ instead of by $9$.',
    },
    {
      q: 'Simplify $\\sqrt{112}$ completely.',
      choices: ['$16\\sqrt{7}$', '$7\\sqrt{4}$', '$4\\sqrt{28}$', '$4\\sqrt{7}$'],
      answer: 3,
      solution:
        'The largest perfect square factor of $112$ is $16$, since $112 = 16 \\cdot 7$. So $\\sqrt{112} = \\sqrt{16} \\cdot \\sqrt{7} = 4\\sqrt{7}$. Check: $(4\\sqrt{7})^2 = 16 \\cdot 7 = 112$. The choice $16\\sqrt{7}$ lets the $16$ out un-rooted. The choice $7\\sqrt{4}$ pulls out the $7$ and leaves the square behind — backwards, and it equals $14$, whose square is $196$. The choice $4\\sqrt{28}$ takes $\\sqrt{16} = 4$ outside but then divides $112$ by $4$ instead of by $16$.',
    },
  ],
  // p6 — which radical is already fully simplified
  [
    {
      q: 'Which of these radicals needs no further simplifying?',
      choices: ['$\\sqrt{35}$', '$\\sqrt{20}$', '$\\sqrt{45}$', '$\\sqrt{50}$'],
      answer: 0,
      solution:
        'Fully simplified means no perfect square factor bigger than $1$ hides under the root. Since $35 = 5 \\cdot 7$, there is nothing to pull out, so $\\sqrt{35}$ is done. The others all hide a square: $\\sqrt{20} = 2\\sqrt{5}$, $\\sqrt{45} = 3\\sqrt{5}$, and $\\sqrt{50} = 5\\sqrt{2}$.',
    },
    {
      q: 'Which of these radicals is already in simplest radical form?',
      choices: ['$\\sqrt{24}$', '$\\sqrt{33}$', '$\\sqrt{28}$', '$\\sqrt{63}$'],
      answer: 1,
      solution:
        'Break each number into primes and look for a repeated one. Since $33 = 3 \\cdot 11$, no factor repeats, so $\\sqrt{33}$ is already simplified. The others hide a $4$ or a $9$: $\\sqrt{24} = 2\\sqrt{6}$, $\\sqrt{28} = 2\\sqrt{7}$, and $\\sqrt{63} = 3\\sqrt{7}$.',
    },
    {
      q: 'From which of these radicals can nothing be pulled out from under the root?',
      choices: ['$\\sqrt{40}$', '$\\sqrt{98}$', '$\\sqrt{42}$', '$\\sqrt{54}$'],
      answer: 2,
      solution:
        'Since $42 = 2 \\cdot 3 \\cdot 7$, every prime appears just once and no square can come out — so $\\sqrt{42}$ is fully simplified. The others do hide squares: $\\sqrt{40} = 2\\sqrt{10}$, $\\sqrt{98} = 7\\sqrt{2}$, and $\\sqrt{54} = 3\\sqrt{6}$.',
    },
  ],
  // p7 — hunting for the LARGEST square factor
  [
    {
      q: 'Simplify $\\sqrt{80}$ completely.',
      choices: ['$4\\sqrt{5}$', '$16\\sqrt{5}$', '$5\\sqrt{4}$', '$4\\sqrt{20}$'],
      answer: 0,
      solution:
        'The largest perfect square factor of $80$ is $16$, since $80 = 16 \\cdot 5$. So $\\sqrt{80} = \\sqrt{16} \\cdot \\sqrt{5} = 4\\sqrt{5}$. Check: $(4\\sqrt{5})^2 = 16 \\cdot 5 = 80$. The choice $16\\sqrt{5}$ brings the $16$ out unchanged. The choice $5\\sqrt{4}$ pulls out the $5$ and leaves the square inside — exactly backwards, and it equals $10$. The choice $4\\sqrt{20}$ takes $4$ outside but only divides $80$ by $4$.',
    },
    {
      q: 'Simplify $\\sqrt{108}$ completely.',
      choices: ['$36\\sqrt{3}$', '$54$', '$6\\sqrt{3}$', '$3\\sqrt{36}$'],
      answer: 2,
      solution:
        'The largest perfect square factor of $108$ is $36$, since $108 = 36 \\cdot 3$. So $\\sqrt{108} = \\sqrt{36} \\cdot \\sqrt{3} = 6\\sqrt{3}$. Check: $(6\\sqrt{3})^2 = 36 \\cdot 3 = 108$. The choice $36\\sqrt{3}$ lets the $36$ leave without being rooted. The choice $3\\sqrt{36}$ takes out the $3$ and leaves the square behind; it equals $18$, whose square is $324$. The choice $54$ halves $108$ instead of rooting it.',
    },
    {
      q: 'Simplify $\\sqrt{147}$ completely.',
      choices: ['$49\\sqrt{3}$', '$3\\sqrt{49}$', '$7\\sqrt{21}$', '$7\\sqrt{3}$'],
      answer: 3,
      solution:
        'The largest perfect square factor of $147$ is $49$, since $147 = 49 \\cdot 3$. So $\\sqrt{147} = \\sqrt{49} \\cdot \\sqrt{3} = 7\\sqrt{3}$. Check: $(7\\sqrt{3})^2 = 49 \\cdot 3 = 147$. The choice $49\\sqrt{3}$ brings the $49$ out un-rooted. The choice $3\\sqrt{49}$ pulls out the non-square $3$ and leaves the square inside; it equals $21$. The choice $7\\sqrt{21}$ moves a $7$ outside but divides $147$ by only $7$ instead of by $49$.',
    },
  ],
  // p8 — what irrational means
  [
    {
      q: 'Which statement about $\\sqrt{5}$ is true?',
      choices: [
        'Its decimal goes on forever without ever repeating',
        'It equals $\\frac{9}{4}$ exactly',
        'It equals $2.236$ exactly',
        'It is exactly halfway between $2$ and $3$',
      ],
      answer: 0,
      solution:
        'Since $5$ is not a perfect square, $\\sqrt{5}$ is irrational: no fraction of whole numbers equals it, and its decimal never ends or repeats. Test the others by squaring: $\\left(\\frac{9}{4}\\right)^2 = \\frac{81}{16}$, which is $5.0625$, not $5$; $2.236^2 = 4.999696$, close but not exact; and halfway between $2$ and $3$ is $2.5$, whose square is $6.25$.',
    },
    {
      q: 'Which statement about $\\sqrt{7}$ is true?',
      choices: [
        'It equals $\\frac{8}{3}$ exactly',
        'No fraction of whole numbers is equal to it',
        'It equals $3.5$, because that is half of $7$',
        'Squaring $2.6$ gives exactly $7$',
      ],
      answer: 1,
      solution:
        'Since $7$ is not a perfect square, $\\sqrt{7}$ is irrational, so no fraction of whole numbers can equal it. Squaring settles the rest: $\\left(\\frac{8}{3}\\right)^2 = \\frac{64}{9}$, which is about $7.11$, not $7$; $3.5^2 = 12.25$, so halving is definitely not rooting; and $2.6^2 = 6.76$, near $7$ but not equal to it.',
    },
    {
      q: 'Which of these numbers is irrational?',
      choices: ['$\\sqrt{36}$', '$\\frac{22}{7}$', '$\\sqrt{\\frac{4}{9}}$', '$\\sqrt{10}$'],
      answer: 3,
      solution:
        'A square root is irrational exactly when the number inside is not a perfect square. Here $10$ is not, so $\\sqrt{10}$ is irrational. The others are all rational: $\\sqrt{36} = 6$, the fraction $\\frac{22}{7}$ is a ratio of whole numbers by definition, and $\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$. Do not be fooled by $\\frac{22}{7}$ sitting near $\\sqrt{10}$ on the number line — $\\left(\\frac{22}{7}\\right)^2 = \\frac{484}{49}$, which is under $10$, so they are different numbers.',
    },
  ],
  // p9 — estimating a root to one decimal place
  [
    {
      q: 'Which of these is closest to $\\sqrt{30}$?',
      choices: ['$5.5$', '$15$', '$5.1$', '$6.3$'],
      answer: 0,
      solution:
        'Since $25 < 30 < 36$, the root is between $5$ and $6$, and $30$ sits near the middle. Test by squaring: $5.5^2 = 30.25$, wonderfully close to $30$. The others miss: $5.1^2 = 26.01$ and $6.3^2 = 39.69$. The choice $15$ halves $30$, which is a completely different operation.',
    },
    {
      q: 'Which of these is closest to $\\sqrt{85}$?',
      choices: ['$8.4$', '$9.2$', '$42.5$', '$9.8$'],
      answer: 1,
      solution:
        'Since $81 < 85 < 100$, the root is between $9$ and $10$, and $85$ is much nearer to $81$, so the root is only a little above $9$. Test: $9.2^2 = 84.64$, very close to $85$. The others miss: $8.4^2 = 70.56$ is far too small and $9.8^2 = 96.04$ is far too big. The choice $42.5$ halves $85$.',
    },
    {
      q: 'Which of these is closest to $\\sqrt{130}$?',
      choices: ['$65$', '$10.8$', '$11.4$', '$12.1$'],
      answer: 2,
      solution:
        'Since $121 < 130 < 144$, the root is between $11$ and $12$, and $130$ is closer to $121$. Test: $11.4^2 = 129.96$, almost exactly $130$. The others miss: $10.8^2 = 116.64$ and $12.1^2 = 146.41$. The choice $65$ halves $130$ — halving is not rooting.',
    },
  ],
  // p10 — the hardest simplification: a large square factor
  [
    {
      q: 'Simplify $\\sqrt{300}$ completely.',
      choices: ['$10\\sqrt{3}$', '$100\\sqrt{3}$', '$3\\sqrt{100}$', '$10\\sqrt{30}$'],
      answer: 0,
      solution:
        'The largest perfect square factor of $300$ is $100$, since $300 = 100 \\cdot 3$. So $\\sqrt{300} = \\sqrt{100} \\cdot \\sqrt{3} = 10\\sqrt{3}$. Check: $(10\\sqrt{3})^2 = 100 \\cdot 3 = 300$. The choice $100\\sqrt{3}$ lets the $100$ out without rooting it. The choice $3\\sqrt{100}$ pulls out the non-square $3$ and leaves the square inside; it equals $30$, whose square is $900$. The choice $10\\sqrt{30}$ moves a $10$ outside but divides $300$ by only $10$.',
    },
    {
      q: 'Simplify $\\sqrt{252}$ completely.',
      choices: ['$36\\sqrt{7}$', '$126$', '$6\\sqrt{7}$', '$7\\sqrt{36}$'],
      answer: 2,
      solution:
        'Hunt for the largest square factor: $252 = 36 \\cdot 7$. So $\\sqrt{252} = \\sqrt{36} \\cdot \\sqrt{7} = 6\\sqrt{7}$, and $7$ is prime, so we are done in one step. Check: $(6\\sqrt{7})^2 = 36 \\cdot 7 = 252$. The choice $36\\sqrt{7}$ brings the $36$ out un-rooted. The choice $7\\sqrt{36}$ takes out the $7$ and leaves the square behind; it equals $42$. The choice $126$ halves $252$ instead of rooting it.',
    },
    {
      q: 'Simplify $\\sqrt{288}$ completely.',
      choices: ['$144\\sqrt{2}$', '$2\\sqrt{144}$', '$12\\sqrt{24}$', '$12\\sqrt{2}$'],
      answer: 3,
      solution:
        'The largest perfect square factor of $288$ is $144$, since $288 = 144 \\cdot 2$. So $\\sqrt{288} = \\sqrt{144} \\cdot \\sqrt{2} = 12\\sqrt{2}$. Check: $(12\\sqrt{2})^2 = 144 \\cdot 2 = 288$. The choice $144\\sqrt{2}$ lets the $144$ leave whole. The choice $2\\sqrt{144}$ pulls out the $2$ and leaves the square inside; it equals $24$, whose square is $576$. The choice $12\\sqrt{24}$ takes a $12$ outside but divides $288$ by only $12$ instead of by $144$.',
    },
  ],
]

const s93 = [
  // p1 — merging two roots into a perfect square
  [
    {
      q: 'Compute $\\sqrt{5} \\cdot \\sqrt{45}$.',
      choices: ['$15$', '$\\sqrt{50}$', '$225$', '$\\sqrt{9}$'],
      answer: 0,
      solution:
        'Merge the roots: $\\sqrt{5} \\cdot \\sqrt{45} = \\sqrt{5 \\cdot 45} = \\sqrt{225} = 15$. The choice $\\sqrt{50}$ adds inside the root instead of multiplying — when roots multiply, the numbers inside multiply. The choice $225$ multiplies inside but then forgets to take the root, and $\\sqrt{9}$ divides inside instead of multiplying.',
    },
    {
      q: 'Compute $\\sqrt{6} \\cdot \\sqrt{24}$.',
      choices: ['$\\sqrt{30}$', '$12$', '$144$', '$\\sqrt{18}$'],
      answer: 1,
      solution:
        'Merge into one root: $\\sqrt{6} \\cdot \\sqrt{24} = \\sqrt{144} = 12$, since $6 \\cdot 24 = 144$. The choice $\\sqrt{30}$ adds the two numbers inside the root, which is not how multiplication of roots works. The choice $144$ stops before taking the root, and $\\sqrt{18}$ subtracts inside ($24 - 6$).',
    },
    {
      q: 'Compute $\\sqrt{7} \\cdot \\sqrt{28}$.',
      choices: ['$\\sqrt{35}$', '$196$', '$14$', '$\\sqrt{21}$'],
      answer: 2,
      solution:
        'Merge the roots: $\\sqrt{7} \\cdot \\sqrt{28} = \\sqrt{7 \\cdot 28} = \\sqrt{196} = 14$. The choice $\\sqrt{35}$ adds inside instead of multiplying, $\\sqrt{21}$ subtracts inside, and $196$ multiplies correctly but never takes the root at the end.',
    },
  ],
  // p2 — adding like radicals
  [
    {
      q: 'Compute $2\\sqrt{5} + 6\\sqrt{5}$.',
      choices: ['$8\\sqrt{10}$', '$8\\sqrt{5}$', '$12\\sqrt{5}$', '$\\sqrt{40}$'],
      answer: 1,
      solution:
        'Like radicals add the way apples do: $2$ of them plus $6$ of them is $8$ of them, so the answer is $8\\sqrt{5}$. The $\\sqrt{5}$ never changes. The choice $8\\sqrt{10}$ adds the insides as well as the counts. The choice $12\\sqrt{5}$ multiplies the counts $2 \\cdot 6$ instead of adding them, and $\\sqrt{40}$ merges everything into one root as if this were a multiplication.',
    },
    {
      q: 'Compute $5\\sqrt{3} + \\sqrt{3}$.',
      choices: ['$5\\sqrt{6}$', '$6\\sqrt{6}$', '$6\\sqrt{3}$', '$5\\sqrt{3}$'],
      answer: 2,
      solution:
        'A lone $\\sqrt{3}$ means $1\\sqrt{3}$, so this is $5$ of them plus $1$ of them, which is $6\\sqrt{3}$. The choice $5\\sqrt{3}$ treats the lone radical as nothing at all. The choice $6\\sqrt{6}$ counts correctly but also adds the two $3$s inside the root, and $5\\sqrt{6}$ makes both mistakes at once.',
    },
    {
      q: 'Compute $3\\sqrt{6} + 4\\sqrt{6} + \\sqrt{6}$.',
      choices: ['$8\\sqrt{18}$', '$7\\sqrt{6}$', '$12\\sqrt{6}$', '$8\\sqrt{6}$'],
      answer: 3,
      solution:
        'Count the like radicals: $3 + 4 + 1 = 8$, so the total is $8\\sqrt{6}$. The choice $7\\sqrt{6}$ forgets that the lone $\\sqrt{6}$ counts as one of them. The choice $8\\sqrt{18}$ adds the insides too ($6 + 6 + 6$), and $12\\sqrt{6}$ multiplies the counts $3 \\cdot 4 \\cdot 1$ instead of adding them.',
    },
  ],
  // p3 — dividing roots
  [
    {
      q: 'Compute $\\frac{\\sqrt{72}}{\\sqrt{2}}$.',
      choices: ['$6$', '$36$', '$\\sqrt{70}$', '$\\sqrt{144}$'],
      answer: 0,
      solution:
        'Merge into one root and divide inside: $\\frac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{\\frac{72}{2}} = \\sqrt{36} = 6$. The choice $36$ divides inside but forgets to take the root. The choice $\\sqrt{70}$ subtracts inside instead of dividing, and $\\sqrt{144}$ multiplies inside instead of dividing — it equals $12$, twice too big.',
    },
    {
      q: 'Compute $\\frac{\\sqrt{98}}{\\sqrt{2}}$.',
      choices: ['$\\sqrt{96}$', '$7$', '$49$', '$\\sqrt{196}$'],
      answer: 1,
      solution:
        'Divide inside the root: $\\frac{\\sqrt{98}}{\\sqrt{2}} = \\sqrt{\\frac{98}{2}} = \\sqrt{49} = 7$. The choice $\\sqrt{96}$ subtracts inside, which roots never allow. The choice $49$ divides correctly but skips the final root, and $\\sqrt{196}$ multiplies inside instead of dividing, giving $14$.',
    },
    {
      q: 'Compute $\\frac{\\sqrt{162}}{\\sqrt{2}}$.',
      choices: ['$\\sqrt{160}$', '$81$', '$\\sqrt{324}$', '$9$'],
      answer: 3,
      solution:
        'Merge and divide: $\\frac{\\sqrt{162}}{\\sqrt{2}} = \\sqrt{\\frac{162}{2}} = \\sqrt{81} = 9$. The choice $81$ divides inside but never roots. The choice $\\sqrt{160}$ subtracts inside instead of dividing, and $\\sqrt{324}$ multiplies inside instead of dividing, which gives $18$.',
    },
  ],
  // p4 — roots do not split across addition
  [
    {
      q: 'What is $\\sqrt{36 + 64}$?',
      choices: ['$10$', '$14$', '$100$', '$\\sqrt{28}$'],
      answer: 0,
      solution:
        'Add inside FIRST: $36 + 64 = 100$, so $\\sqrt{36 + 64} = \\sqrt{100} = 10$. The tempting choice $14$ comes from $\\sqrt{36} + \\sqrt{64} = 6 + 8$ — but roots do not split across addition, and $10 \\ne 14$. The choice $100$ adds inside and then forgets the root, and $\\sqrt{28}$ subtracts inside instead of adding.',
    },
    {
      q: 'What is $\\sqrt{25 + 144}$?',
      choices: ['$17$', '$169$', '$13$', '$\\sqrt{119}$'],
      answer: 2,
      solution:
        'Do the addition under the root first: $25 + 144 = 169$, and $\\sqrt{169} = 13$. The choice $17$ splits the root across the plus sign, $\\sqrt{25} + \\sqrt{144} = 5 + 12$, which is not allowed. The choice $169$ never takes the root, and $\\sqrt{119}$ subtracts inside instead of adding.',
    },
    {
      q: 'What is $\\sqrt{81 + 144}$?',
      choices: ['$21$', '$225$', '$\\sqrt{63}$', '$15$'],
      answer: 3,
      solution:
        'Add first: $81 + 144 = 225$, and $\\sqrt{225} = 15$. The choice $21$ is $\\sqrt{81} + \\sqrt{144} = 9 + 12$, the split-across-addition mistake — and $15 \\ne 21$, which is exactly why the rule matters. The choice $225$ leaves the root undone, and $\\sqrt{63}$ subtracts inside.',
    },
  ],
  // p5 — two non-whole roots whose product is whole
  [
    {
      q: 'Compute $\\sqrt{18} \\cdot \\sqrt{2}$.',
      choices: ['$\\sqrt{20}$', '$6$', '$36$', '$\\sqrt{16}$'],
      answer: 1,
      solution:
        'Merge the roots: $\\sqrt{18} \\cdot \\sqrt{2} = \\sqrt{36} = 6$. Neither $\\sqrt{18}$ nor $\\sqrt{2}$ is a whole number, yet their product is — the roots team up. The choice $\\sqrt{20}$ adds inside instead of multiplying, $\\sqrt{16}$ subtracts inside, and $36$ multiplies inside but forgets the root.',
    },
    {
      q: 'Compute $\\sqrt{27} \\cdot \\sqrt{3}$.',
      choices: ['$\\sqrt{30}$', '$81$', '$9$', '$\\sqrt{24}$'],
      answer: 2,
      solution:
        'Merge into one root: $\\sqrt{27} \\cdot \\sqrt{3} = \\sqrt{81} = 9$, since $27 \\cdot 3 = 81$. The choice $\\sqrt{30}$ adds the insides, $\\sqrt{24}$ subtracts them, and $81$ multiplies them correctly but leaves the root untaken.',
    },
    {
      q: 'Compute $\\sqrt{32} \\cdot \\sqrt{2}$.',
      choices: ['$\\sqrt{34}$', '$64$', '$\\sqrt{30}$', '$8$'],
      answer: 3,
      solution:
        'Merge the roots: $\\sqrt{32} \\cdot \\sqrt{2} = \\sqrt{64} = 8$, since $32 \\cdot 2 = 64$. The choice $\\sqrt{34}$ adds inside the root, $\\sqrt{30}$ subtracts inside, and $64$ multiplies inside but stops one step short of the root.',
    },
  ],
  // p6 — simplify each radical first, then combine
  [
    {
      q: 'Simplify $\\sqrt{8} + \\sqrt{18}$.',
      choices: ['$5\\sqrt{2}$', '$\\sqrt{26}$', '$6\\sqrt{2}$', '$5\\sqrt{6}$'],
      answer: 0,
      solution:
        'They do not match yet, so simplify each one first: $\\sqrt{8} = 2\\sqrt{2}$ and $\\sqrt{18} = 3\\sqrt{2}$. Now they are like radicals: $2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$. The choice $\\sqrt{26}$ adds under the roots, which is never allowed for addition. The choice $6\\sqrt{2}$ multiplies the counts $2 \\cdot 3$ instead of adding them, and $5\\sqrt{6}$ adds the counts but then multiplies the insides.',
    },
    {
      q: 'Simplify $\\sqrt{50} + \\sqrt{32}$.',
      choices: ['$\\sqrt{82}$', '$9\\sqrt{2}$', '$20\\sqrt{2}$', '$9\\sqrt{4}$'],
      answer: 1,
      solution:
        'Simplify each first: $\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{32} = 4\\sqrt{2}$. They match, so $5\\sqrt{2} + 4\\sqrt{2} = 9\\sqrt{2}$. The choice $\\sqrt{82}$ adds under the roots. The choice $20\\sqrt{2}$ multiplies the counts $5 \\cdot 4$, and $9\\sqrt{4}$ counts correctly but also adds the insides, $2 + 2 = 4$ — and it equals $18$, far too big.',
    },
    {
      q: 'Simplify $\\sqrt{63} + \\sqrt{28}$.',
      choices: ['$\\sqrt{91}$', '$6\\sqrt{7}$', '$5\\sqrt{14}$', '$5\\sqrt{7}$'],
      answer: 3,
      solution:
        'Simplify each radical first: $\\sqrt{63} = 3\\sqrt{7}$ and $\\sqrt{28} = 2\\sqrt{7}$. Now they are alike, so $3\\sqrt{7} + 2\\sqrt{7} = 5\\sqrt{7}$. The choice $\\sqrt{91}$ adds under the roots. The choice $6\\sqrt{7}$ multiplies the counts $3 \\cdot 2$ instead of adding, and $5\\sqrt{14}$ adds the counts but also adds the insides.',
    },
  ],
  // p7 — rationalizing a denominator
  [
    {
      q: 'Rationalize the denominator: $\\frac{12}{\\sqrt{6}} = ?$',
      choices: ['$2\\sqrt{6}$', '$12\\sqrt{6}$', '$\\frac{\\sqrt{6}}{2}$', '$2$'],
      answer: 0,
      solution:
        'Multiply the top and bottom by $\\sqrt{6}$, which is multiplying by $1$: $\\frac{12}{\\sqrt{6}} \\cdot \\frac{\\sqrt{6}}{\\sqrt{6}} = \\frac{12\\sqrt{6}}{6} = 2\\sqrt{6}$. Check: $2\\sqrt{6} \\cdot \\sqrt{6} = 2 \\cdot 6 = 12$. The choice $12\\sqrt{6}$ multiplies the top but forgets that the bottom became $6$. The choice $\\frac{\\sqrt{6}}{2}$ turns the fraction upside down, and $2$ cancels the radical away entirely.',
    },
    {
      q: 'Rationalize the denominator: $\\frac{14}{\\sqrt{7}} = ?$',
      choices: ['$14\\sqrt{7}$', '$2\\sqrt{7}$', '$2$', '$\\frac{\\sqrt{7}}{2}$'],
      answer: 1,
      solution:
        'Multiply top and bottom by $\\sqrt{7}$: $\\frac{14}{\\sqrt{7}} \\cdot \\frac{\\sqrt{7}}{\\sqrt{7}} = \\frac{14\\sqrt{7}}{7} = 2\\sqrt{7}$. Check: $2\\sqrt{7} \\cdot \\sqrt{7} = 2 \\cdot 7 = 14$. The choice $14\\sqrt{7}$ forgets to divide by the new denominator $7$. The choice $2$ drops the radical instead of keeping it, and $\\frac{\\sqrt{7}}{2}$ flips the fraction over.',
    },
    {
      q: 'Rationalize the denominator: $\\frac{8}{\\sqrt{2}} = ?$',
      choices: ['$8\\sqrt{2}$', '$\\frac{\\sqrt{2}}{4}$', '$4\\sqrt{2}$', '$4$'],
      answer: 2,
      solution:
        'Multiply top and bottom by $\\sqrt{2}$: $\\frac{8}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$. Check: $4\\sqrt{2} \\cdot \\sqrt{2} = 4 \\cdot 2 = 8$. The choice $8\\sqrt{2}$ never divides by the new denominator $2$. The choice $4$ throws the radical away, and $\\frac{\\sqrt{2}}{4}$ flips the answer upside down.',
    },
  ],
  // p8 — subtracting like radicals
  [
    {
      q: 'Compute $7\\sqrt{5} - \\sqrt{5}$.',
      choices: ['$6\\sqrt{5}$', '$6$', '$7\\sqrt{5}$', '$8\\sqrt{5}$'],
      answer: 0,
      solution:
        'Think of $\\sqrt{5}$ as an object: $7$ of them minus $1$ of them leaves $6$ of them, so the answer is $6\\sqrt{5}$. The choice $7\\sqrt{5}$ treats the lone $\\sqrt{5}$ as zero of them. The choice $6$ drops the radical after counting, and $8\\sqrt{5}$ adds instead of subtracting.',
    },
    {
      q: 'Compute $9\\sqrt{6} - 4\\sqrt{6}$.',
      choices: ['$5$', '$13\\sqrt{6}$', '$5\\sqrt{6}$', '$36\\sqrt{6}$'],
      answer: 2,
      solution:
        'The radicals match, so just subtract the counts: $9 - 4 = 5$, giving $5\\sqrt{6}$. The choice $5$ counts correctly but throws the $\\sqrt{6}$ away. The choice $13\\sqrt{6}$ adds instead of subtracting, and $36\\sqrt{6}$ multiplies the counts $9 \\cdot 4$.',
    },
    {
      q: 'Compute $8\\sqrt{7} - 3\\sqrt{7} - \\sqrt{7}$.',
      choices: ['$5\\sqrt{7}$', '$12\\sqrt{7}$', '$4$', '$4\\sqrt{7}$'],
      answer: 3,
      solution:
        'Count the like radicals in order: $8 - 3 - 1 = 4$, so the answer is $4\\sqrt{7}$. The choice $5\\sqrt{7}$ forgets that the lone $\\sqrt{7}$ counts as one of them and stops at $8 - 3$. The choice $12\\sqrt{7}$ adds all three counts instead of subtracting, and $4$ counts right but loses the radical.',
    },
  ],
  // p9 — merge, then simplify what is left
  [
    {
      q: 'Compute $\\sqrt{10} \\cdot \\sqrt{5}$, fully simplified.',
      choices: ['$\\sqrt{15}$', '$5\\sqrt{2}$', '$50$', '$5\\sqrt{10}$'],
      answer: 1,
      solution:
        'Merge first: $\\sqrt{10} \\cdot \\sqrt{5} = \\sqrt{50}$. Then simplify, since $50 = 25 \\cdot 2$: $\\sqrt{50} = 5\\sqrt{2}$. Check: $(5\\sqrt{2})^2 = 25 \\cdot 2 = 50$. The choice $\\sqrt{15}$ adds inside instead of multiplying. The choice $50$ stops before the root is taken, and $5\\sqrt{10}$ writes $50 = 5 \\cdot 10$ and pulls out the $5$, which is not a perfect square.',
    },
    {
      q: 'Compute $\\sqrt{14} \\cdot \\sqrt{7}$, fully simplified.',
      choices: ['$\\sqrt{21}$', '$98$', '$7\\sqrt{2}$', '$7\\sqrt{14}$'],
      answer: 2,
      solution:
        'Merge: $\\sqrt{14} \\cdot \\sqrt{7} = \\sqrt{98}$. Then simplify, since $98 = 49 \\cdot 2$: $\\sqrt{98} = 7\\sqrt{2}$. Check: $(7\\sqrt{2})^2 = 49 \\cdot 2 = 98$. The choice $\\sqrt{21}$ adds inside instead of multiplying, $98$ never takes the root, and $7\\sqrt{14}$ pulls a $7$ out of $\\sqrt{98}$ while only dividing by $7$ instead of by $49$.',
    },
    {
      q: 'Compute $\\sqrt{6} \\cdot \\sqrt{8}$, fully simplified.',
      choices: ['$\\sqrt{14}$', '$48$', '$4\\sqrt{12}$', '$4\\sqrt{3}$'],
      answer: 3,
      solution:
        'Merge first: $\\sqrt{6} \\cdot \\sqrt{8} = \\sqrt{48}$. The largest perfect square factor of $48$ is $16$, so $\\sqrt{48} = 4\\sqrt{3}$. Check: $(4\\sqrt{3})^2 = 16 \\cdot 3 = 48$. The choice $\\sqrt{14}$ adds inside instead of multiplying. The choice $48$ forgets the root, and $4\\sqrt{12}$ brings a $4$ outside but divides $48$ by only $4$ instead of by $16$.',
    },
  ],
  // p10 — squaring a term that has a coefficient and a radical
  [
    {
      q: 'Compute $(3\\sqrt{7})^2$.',
      choices: ['$63$', '$21$', '$441$', '$9\\sqrt{7}$'],
      answer: 0,
      solution:
        'Square each part: $(3\\sqrt{7})^2 = 3^2 \\cdot (\\sqrt{7})^2 = 9 \\cdot 7 = 63$. The choice $21$ multiplies $3 \\cdot 7$ without squaring anything. The choice $441$ is $21^2$, squaring that product a second time, and $9\\sqrt{7}$ squares only the $3$ and leaves the radical alone.',
    },
    {
      q: 'Compute $(5\\sqrt{2})^2$.',
      choices: ['$10$', '$50$', '$25\\sqrt{2}$', '$100$'],
      answer: 1,
      solution:
        'Both factors get squared: $(5\\sqrt{2})^2 = 5^2 \\cdot (\\sqrt{2})^2 = 25 \\cdot 2 = 50$. The choice $10$ multiplies $5 \\cdot 2$ and never squares. The choice $25\\sqrt{2}$ squares the $5$ but leaves the $\\sqrt{2}$ untouched, and $100$ is $10^2$, which squares the product $5 \\cdot 2$ instead.',
    },
    {
      q: 'Compute $(6\\sqrt{2})^2$.',
      choices: ['$12$', '$36\\sqrt{2}$', '$72$', '$144$'],
      answer: 2,
      solution:
        'Square each part: $(6\\sqrt{2})^2 = 6^2 \\cdot (\\sqrt{2})^2 = 36 \\cdot 2 = 72$. The choice $12$ multiplies $6 \\cdot 2$ with no squaring at all. The choice $36\\sqrt{2}$ squares only the $6$ and forgets that $(\\sqrt{2})^2 = 2$, and $144$ is $12^2$, squaring the product instead of each factor.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 9,
  sections: {
    '9.1': s91,
    '9.2': s92,
    '9.3': s93,
  },
}
