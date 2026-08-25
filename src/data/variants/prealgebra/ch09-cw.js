// Prealgebra chapter 9 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.

const challenge = [
  // 1. The square root of a three-digit perfect square.
  [
    {
      q: 'What is $\\sqrt{784}$?',
      choices: ['$28$', '$27$', '$29$', '$392$'],
      answer: 0,
      solution: 'Hunt among the squares of the high twenties: $27^2 = 729$ falls short and $28 \\times 28 = 784$ lands exactly. So $\\sqrt{784} = 28$. ($27$ and $29$ are near misses — $27^2 = 729$ and $29^2 = 841$; $392$ is half of $784$, and halving is not rooting.)',
    },
    {
      q: 'What is $\\sqrt{484}$?',
      choices: ['$21$', '$242$', '$22$', '$23$'],
      answer: 2,
      solution: 'Try the low twenties: $21^2 = 441$ is too small, and $22 \\times 22 = 484$ is exact. So $\\sqrt{484} = 22$. ($21$ and $23$ are the neighbours that miss, since $23^2 = 529$; $242$ is half of $484$ — a completely different operation.)',
    },
    {
      q: 'What is $\\sqrt{576}$?',
      choices: ['$23$', '$288$', '$25$', '$24$'],
      answer: 3,
      solution: 'Squeeze it between squares you know: $23^2 = 529$ is too small and $25^2 = 625$ overshoots, so test the number in between — $24 \\times 24 = 576$. ($23$ and $25$ are the near misses; $288$ is half of $576$, and halving never gives a square root.)',
    },
  ],
  // 2. Pulling the LARGEST perfect square out of a big radicand.
  [
    {
      q: 'Simplify $\\sqrt{675}$ completely.',
      choices: ['$225\\sqrt{3}$', '$3\\sqrt{15}$', '$15\\sqrt{3}$', '$15$'],
      answer: 2,
      solution: 'The largest perfect square factor of $675$ is $225$, since $675 = 225 \\cdot 3$. So $\\sqrt{675} = \\sqrt{225} \\cdot \\sqrt{3} = 15\\sqrt{3}$. Check: $(15\\sqrt{3})^2 = 225 \\cdot 3 = 675$. ($225\\sqrt{3}$ pulls the $225$ out without rooting it; $15$ roots the $225$ but throws the leftover $\\sqrt{3}$ away; $3\\sqrt{15}$ puts the two numbers on the wrong sides of the radical sign.)',
    },
    {
      q: 'Simplify $\\sqrt{432}$ completely.',
      choices: ['$144\\sqrt{3}$', '$4\\sqrt{3}$', '$12$', '$12\\sqrt{3}$'],
      answer: 3,
      solution: 'Since $432 = 144 \\cdot 3$, split the root: $\\sqrt{432} = \\sqrt{144} \\cdot \\sqrt{3} = 12\\sqrt{3}$. Check: $(12\\sqrt{3})^2 = 144 \\cdot 3 = 432$. ($144\\sqrt{3}$ forgets to root the $144$; $12$ throws away the leftover $\\sqrt{3}$; $4\\sqrt{3}$ comes from stopping at the small factor $16$, which gives $4\\sqrt{27}$, and then trimming $\\sqrt{27}$ down to $\\sqrt{3}$.)',
    },
    {
      q: 'Simplify $\\sqrt{162}$ completely.',
      choices: ['$81\\sqrt{2}$', '$9\\sqrt{2}$', '$3\\sqrt{2}$', '$81$'],
      answer: 1,
      solution: 'Since $162 = 81 \\cdot 2$, we get $\\sqrt{162} = \\sqrt{81} \\cdot \\sqrt{2} = 9\\sqrt{2}$. Check: $(9\\sqrt{2})^2 = 81 \\cdot 2 = 162$. ($81\\sqrt{2}$ pulls the $81$ out un-rooted; $81$ drops the $\\sqrt{2}$; $3\\sqrt{2}$ comes from using $9$ as the square factor, giving $3\\sqrt{18}$, and then trimming $\\sqrt{18}$ to $\\sqrt{2}$.)',
    },
  ],
  // 3. Simplify each radical first, THEN combine like radicals.
  [
    {
      q: 'Simplify $\\sqrt{80} + \\sqrt{125}$.',
      choices: ['$9\\sqrt{5}$', '$\\sqrt{205}$', '$9\\sqrt{10}$', '$20\\sqrt{5}$'],
      answer: 0,
      solution: 'Simplify each piece first: $\\sqrt{80} = \\sqrt{16} \\cdot \\sqrt{5} = 4\\sqrt{5}$ and $\\sqrt{125} = \\sqrt{25} \\cdot \\sqrt{5} = 5\\sqrt{5}$. Now they are like radicals, so the counts add: $4\\sqrt{5} + 5\\sqrt{5} = 9\\sqrt{5}$. ($\\sqrt{205}$ adds under the roots, which is never allowed; $9\\sqrt{10}$ adds the two $5$s inside as well as the counts outside; $20\\sqrt{5}$ multiplies the counts $4$ and $5$ instead of adding them.)',
    },
    {
      q: 'Simplify $\\sqrt{98} + \\sqrt{50}$.',
      choices: ['$\\sqrt{148}$', '$12\\sqrt{2}$', '$35\\sqrt{2}$', '$12$'],
      answer: 1,
      solution: 'Simplify each first: $\\sqrt{98} = \\sqrt{49} \\cdot \\sqrt{2} = 7\\sqrt{2}$ and $\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$. Same radical, so add the counts: $7\\sqrt{2} + 5\\sqrt{2} = 12\\sqrt{2}$. ($\\sqrt{148}$ adds the numbers under the roots; $35\\sqrt{2}$ multiplies $7$ by $5$ instead of adding; $12$ counts the pieces correctly but then forgets that each one carries a $\\sqrt{2}$.)',
    },
    {
      q: 'Simplify $\\sqrt{108} + \\sqrt{48}$.',
      choices: ['$\\sqrt{156}$', '$10\\sqrt{6}$', '$24\\sqrt{3}$', '$10\\sqrt{3}$'],
      answer: 3,
      solution: 'Simplify each first: $\\sqrt{108} = \\sqrt{36} \\cdot \\sqrt{3} = 6\\sqrt{3}$ and $\\sqrt{48} = \\sqrt{16} \\cdot \\sqrt{3} = 4\\sqrt{3}$. They match, so $6\\sqrt{3} + 4\\sqrt{3} = 10\\sqrt{3}$. ($\\sqrt{156}$ adds under the roots — roots never split across addition; $10\\sqrt{6}$ adds the $3$s inside as well; $24\\sqrt{3}$ multiplies $6$ by $4$ instead of adding.)',
    },
  ],
  // 4. Comparing radicals against a nearby whole number.
  [
    {
      q: 'Four cards show the numbers below. Which card shows the largest number?',
      choices: ['$\\sqrt{122}$', '$11$', '$10.9$', '$\\sqrt{120}$'],
      answer: 0,
      solution: 'Use $11 = \\sqrt{121}$ as the measuring stick. Since $122 > 121$, we get $\\sqrt{122} > 11$, so that card wins. ($\\sqrt{120} < \\sqrt{121} = 11$, so it loses to $11$; $10.9 < 11$ as well; and $11$ itself is beaten by $\\sqrt{122}$.)',
    },
    {
      q: 'Which of these four numbers is the smallest?',
      choices: ['$\\sqrt{80}$', '$8.9$', '$9$', '$\\sqrt{82}$'],
      answer: 1,
      solution: 'Measure against $9 = \\sqrt{81}$: since $80 < 81 < 82$, we know $\\sqrt{80} < 9 < \\sqrt{82}$. That leaves $\\sqrt{80}$ against $8.9$, so square the decimal exactly: $8.9^2 = 79.21$, and $79.21 < 80$, so $8.9 < \\sqrt{80}$. The smallest is $8.9$. ($\\sqrt{80}$ is close but bigger; $9$ and $\\sqrt{82}$ are bigger still.)',
    },
    {
      q: 'Which of these four numbers is the greatest?',
      choices: ['$\\sqrt{63}$', '$\\frac{15}{2}$', '$\\sqrt{65}$', '$8$'],
      answer: 2,
      solution: 'Compare everything with $8 = \\sqrt{64}$. Since $65 > 64$, we get $\\sqrt{65} > 8$. Nothing else clears the bar: $\\sqrt{63} < \\sqrt{64} = 8$, and $\\frac{15}{2} = 7.5 < 8$. So $\\sqrt{65}$ is the greatest.',
    },
  ],
  // 5. Rationalizing a denominator where the numerator is a multiple of the radicand.
  [
    {
      q: 'Rationalize the denominator: $\\frac{12}{\\sqrt{3}} = ?$',
      choices: ['$12\\sqrt{3}$', '$4$', '$\\frac{4}{\\sqrt{3}}$', '$4\\sqrt{3}$'],
      answer: 3,
      solution: 'Multiply top and bottom by $\\sqrt{3}$: $\\frac{12}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$. Check: $4\\sqrt{3} \\cdot \\sqrt{3} = 4 \\cdot 3 = 12$. ($12\\sqrt{3}$ multiplies the top but forgets the bottom became $3$; $\\frac{4}{\\sqrt{3}}$ divides $12$ by $3$ and leaves the root downstairs, so it is neither rationalized nor equal to the answer; $4$ drops the radical entirely.)',
    },
    {
      q: 'Rationalize the denominator: $\\frac{21}{\\sqrt{7}} = ?$',
      choices: ['$3\\sqrt{7}$', '$21\\sqrt{7}$', '$3$', '$\\frac{3}{\\sqrt{7}}$'],
      answer: 0,
      solution: 'Multiply top and bottom by $\\sqrt{7}$: $\\frac{21}{\\sqrt{7}} \\cdot \\frac{\\sqrt{7}}{\\sqrt{7}} = \\frac{21\\sqrt{7}}{7} = 3\\sqrt{7}$. Check: $3\\sqrt{7} \\cdot \\sqrt{7} = 3 \\cdot 7 = 21$. ($21\\sqrt{7}$ forgets to divide by the new denominator $7$; $\\frac{3}{\\sqrt{7}}$ divides $21$ by $7$ but leaves the root in the denominator; $3$ throws the radical away.)',
    },
    {
      q: 'Rationalize the denominator: $\\frac{20}{\\sqrt{5}} = ?$',
      choices: ['$20\\sqrt{5}$', '$4$', '$4\\sqrt{5}$', '$\\frac{4}{\\sqrt{5}}$'],
      answer: 2,
      solution: 'Multiply top and bottom by $\\sqrt{5}$: $\\frac{20}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{20\\sqrt{5}}{5} = 4\\sqrt{5}$. Check: $4\\sqrt{5} \\cdot \\sqrt{5} = 4 \\cdot 5 = 20$. ($20\\sqrt{5}$ skips dividing by the new denominator $5$; $\\frac{4}{\\sqrt{5}}$ divides the top by $5$ but leaves the root below the bar, so it is only a fifth as big as the right answer; $4$ loses the radical.)',
    },
  ],
  // 6. Area of a square back to a side length in simplest radical form.
  [
    {
      q: 'A square tile has an area of $200$ square centimeters. What is its side length, fully simplified?',
      choices: [
        '$100$ centimeters',
        '$10\\sqrt{2}$ centimeters',
        '$2\\sqrt{10}$ centimeters',
        '$10$ centimeters',
      ],
      answer: 1,
      solution: 'The side is $\\sqrt{200}$. Since $200 = 100 \\cdot 2$, the side is $\\sqrt{100} \\cdot \\sqrt{2} = 10\\sqrt{2}$ centimeters. Check: $(10\\sqrt{2})^2 = 100 \\cdot 2 = 200$. ($100$ halves the area instead of rooting it; $10$ roots the $100$ but throws the leftover $\\sqrt{2}$ away; $2\\sqrt{10}$ puts the two numbers on the wrong sides of the radical sign.)',
    },
    {
      q: 'A square courtyard has an area of $300$ square meters. What is its side length, fully simplified?',
      choices: [
        '$100\\sqrt{3}$ meters',
        '$150$ meters',
        '$3\\sqrt{10}$ meters',
        '$10\\sqrt{3}$ meters',
      ],
      answer: 3,
      solution: 'The side is $\\sqrt{300}$, and $300 = 100 \\cdot 3$, so the side is $\\sqrt{100} \\cdot \\sqrt{3} = 10\\sqrt{3}$ meters. Check: $(10\\sqrt{3})^2 = 100 \\cdot 3 = 300$. ($100\\sqrt{3}$ pulls the $100$ out without rooting it; $150$ halves the area instead of rooting it; $3\\sqrt{10}$ swaps the number outside with the number inside.)',
    },
    {
      q: 'A square window pane has an area of $98$ square inches. What is its side length, fully simplified?',
      choices: [
        '$49$ inches',
        '$2\\sqrt{7}$ inches',
        '$7\\sqrt{2}$ inches',
        '$49\\sqrt{2}$ inches',
      ],
      answer: 2,
      solution: 'The side is $\\sqrt{98}$, and $98 = 49 \\cdot 2$, so the side is $\\sqrt{49} \\cdot \\sqrt{2} = 7\\sqrt{2}$ inches. Check: $(7\\sqrt{2})^2 = 49 \\cdot 2 = 98$. ($49$ halves the area instead of rooting it; $49\\sqrt{2}$ forgets to root the $49$; $2\\sqrt{7}$ has the outside and inside numbers swapped.)',
    },
  ],
  // 7. Merging three radicals into one perfect square.
  [
    {
      q: 'Compute $\\sqrt{3} \\cdot \\sqrt{5} \\cdot \\sqrt{15}$.',
      choices: ['$\\sqrt{23}$', '$225$', '$\\sqrt{15}$', '$15$'],
      answer: 3,
      solution: 'Merge all three roots into one: $\\sqrt{3 \\cdot 5 \\cdot 15} = \\sqrt{225} = 15$, since $15^2 = 225$. ($\\sqrt{23}$ adds $3 + 5 + 15$ inside instead of multiplying; $225$ multiplies correctly but never takes the root at the end; $\\sqrt{15}$ merges only the first two roots and leaves the third one out.)',
    },
    {
      q: 'Compute $\\sqrt{2} \\cdot \\sqrt{5} \\cdot \\sqrt{10}$.',
      choices: ['$\\sqrt{17}$', '$10$', '$100$', '$\\sqrt{50}$'],
      answer: 1,
      solution: 'Merge all three: $\\sqrt{2 \\cdot 5 \\cdot 10} = \\sqrt{100} = 10$. ($\\sqrt{17}$ adds $2 + 5 + 10$ under the root; $100$ multiplies inside but forgets the final root; $\\sqrt{50}$ merges $\\sqrt{5} \\cdot \\sqrt{10}$ and forgets the $\\sqrt{2}$.)',
    },
    {
      q: 'Compute $\\sqrt{6} \\cdot \\sqrt{8} \\cdot \\sqrt{12}$.',
      choices: ['$24$', '$\\sqrt{26}$', '$576$', '$4\\sqrt{6}$'],
      answer: 0,
      solution: 'Merge all three: $\\sqrt{6 \\cdot 8 \\cdot 12} = \\sqrt{576} = 24$, since $24^2 = 576$. ($\\sqrt{26}$ adds $6 + 8 + 12$ inside instead of multiplying; $576$ stops one step early, before taking the root; $4\\sqrt{6}$ is $\\sqrt{8} \\cdot \\sqrt{12} = \\sqrt{96}$ simplified, with the $\\sqrt{6}$ left out.)',
    },
  ],
  // 8. Trapping a root between consecutive integers.
  [
    {
      q: '$\\sqrt{170}$ is between which two consecutive integers?',
      choices: ['$12$ and $13$', '$85$ and $86$', '$13$ and $14$', '$14$ and $15$'],
      answer: 2,
      solution: 'The perfect squares on either side of $170$ are $169 = 13^2$ and $196 = 14^2$. Since $169 < 170 < 196$, taking roots gives $13 < \\sqrt{170} < 14$ — and $170$ sits just one past $169$, so the root barely clears $13$. ($12$ and $13$ would need $170 < 169$, which is false; $14$ and $15$ would need $170 > 196$; $85$ and $86$ comes from halving, not rooting.)',
    },
    {
      q: '$\\sqrt{250}$ is between which two consecutive integers?',
      choices: ['$16$ and $17$', '$15$ and $16$', '$125$ and $126$', '$14$ and $15$'],
      answer: 1,
      solution: 'The neighbouring perfect squares are $225 = 15^2$ and $256 = 16^2$, and $225 < 250 < 256$, so $15 < \\sqrt{250} < 16$. Notice how close $250$ sits to $256$ — the root is only a little under $16$. ($14$ and $15$ would need $250 < 225$; $16$ and $17$ would need $250 > 256$; $125$ and $126$ halves instead of rooting.)',
    },
    {
      q: '$\\sqrt{115}$ is between which two consecutive integers?',
      choices: ['$57$ and $58$', '$9$ and $10$', '$11$ and $12$', '$10$ and $11$'],
      answer: 3,
      solution: 'The perfect squares on either side of $115$ are $100 = 10^2$ and $121 = 11^2$: since $100 < 115 < 121$, we get $10 < \\sqrt{115} < 11$. ($9$ and $10$ would need $115 < 100$; $11$ and $12$ would need $115 > 121$; $57$ and $58$ comes from halving.)',
    },
  ],
  // 9. Multiplying two matching radical terms — the roots cash in.
  [
    {
      q: 'Compute $5\\sqrt{3} \\cdot 2\\sqrt{3}$.',
      choices: ['$10\\sqrt{3}$', '$30$', '$10\\sqrt{6}$', '$7\\sqrt{3}$'],
      answer: 1,
      solution: 'Multiply the whole numbers and the radicals separately: $5 \\cdot 2 = 10$ and $\\sqrt{3} \\cdot \\sqrt{3} = 3$. Then $10 \\cdot 3 = 30$. ($10\\sqrt{3}$ multiplies the counts but leaves the pair of $\\sqrt{3}$s as a single $\\sqrt{3}$; $10\\sqrt{6}$ adds $3 + 3$ under the root instead of multiplying; $7\\sqrt{3}$ adds the counts $5 + 2$, as if this were a sum of like radicals rather than a product.)',
    },
    {
      q: 'Compute $2\\sqrt{5} \\cdot 6\\sqrt{5}$.',
      choices: ['$60$', '$12\\sqrt{5}$', '$12\\sqrt{10}$', '$8\\sqrt{5}$'],
      answer: 0,
      solution: 'Whole numbers: $2 \\cdot 6 = 12$. Radicals: $\\sqrt{5} \\cdot \\sqrt{5} = 5$. Multiply those results: $12 \\cdot 5 = 60$. ($12\\sqrt{5}$ forgets that the two $\\sqrt{5}$s collapse into a plain $5$; $12\\sqrt{10}$ adds $5 + 5$ under the root; $8\\sqrt{5}$ adds the counts $2 + 6$ as though this were $2\\sqrt{5} + 6\\sqrt{5}$.)',
    },
    {
      q: 'Compute $4\\sqrt{6} \\cdot 3\\sqrt{6}$.',
      choices: ['$12\\sqrt{6}$', '$12\\sqrt{12}$', '$72$', '$7\\sqrt{6}$'],
      answer: 2,
      solution: 'Whole numbers: $4 \\cdot 3 = 12$. Radicals: $\\sqrt{6} \\cdot \\sqrt{6} = 6$. So the product is $12 \\cdot 6 = 72$. ($12\\sqrt{6}$ never cashes in the pair of $\\sqrt{6}$s; $12\\sqrt{12}$ adds $6 + 6$ under the root instead of multiplying; $7\\sqrt{6}$ adds the counts $4 + 3$ as though this were a sum.)',
    },
  ],
  // 10. Which radical identity actually holds?
  [
    {
      q: 'Only one of these equations is TRUE. Which one?',
      choices: [
        '$\\sqrt{2} \\cdot \\sqrt{8} = 4$',
        '$\\sqrt{16} + \\sqrt{9} = \\sqrt{25}$',
        '$\\sqrt{25 + 144} = 17$',
        '$\\sqrt{36} - \\sqrt{16} = \\sqrt{20}$',
      ],
      answer: 0,
      solution: 'Roots merge across multiplication: $\\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{16} = 4$. True! The others all try to split a root across a $+$ or a $-$: $\\sqrt{16} + \\sqrt{9} = 4 + 3 = 7$, while $\\sqrt{25} = 5$; $\\sqrt{25 + 144} = \\sqrt{169} = 13$, not the $5 + 12 = 17$ you get by rooting each piece; and $\\sqrt{36} - \\sqrt{16} = 6 - 4 = 2$, while $\\sqrt{20}$ sits between $4$ and $5$.',
    },
    {
      q: 'Exactly one of these equations is TRUE. Which one?',
      choices: [
        '$\\sqrt{9} + \\sqrt{16} = \\sqrt{25}$',
        '$\\sqrt{64 + 36} = 14$',
        '$\\frac{\\sqrt{72}}{\\sqrt{2}} = 6$',
        '$\\sqrt{100} - \\sqrt{4} = \\sqrt{96}$',
      ],
      answer: 2,
      solution: 'Roots merge across division: $\\frac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{\\frac{72}{2}} = \\sqrt{36} = 6$. True! The rest split across $+$ or $-$: $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$, but $\\sqrt{25} = 5$; $\\sqrt{64 + 36} = \\sqrt{100} = 10$, not the $8 + 6 = 14$ from rooting each piece; and $\\sqrt{100} - \\sqrt{4} = 10 - 2 = 8$, while $\\sqrt{96}$ sits between $9$ and $10$.',
    },
    {
      q: 'Which of these equations is TRUE?',
      choices: [
        '$\\sqrt{4} + \\sqrt{25} = \\sqrt{29}$',
        '$\\sqrt{49} - \\sqrt{4} = \\sqrt{45}$',
        '$\\sqrt{16 + 9} = 7$',
        '$\\sqrt{3} \\cdot \\sqrt{27} = 9$',
      ],
      answer: 3,
      solution: 'Multiplication is the operation roots merge across: $\\sqrt{3} \\cdot \\sqrt{27} = \\sqrt{81} = 9$. True! The others fail: $\\sqrt{4} + \\sqrt{25} = 2 + 5 = 7$, but $\\sqrt{29}$ is between $5$ and $6$; $\\sqrt{49} - \\sqrt{4} = 7 - 2 = 5$, but $\\sqrt{45} = 3\\sqrt{5}$ is between $6$ and $7$; and $\\sqrt{16 + 9} = \\sqrt{25} = 5$, not the $4 + 3 = 7$ that comes from rooting each piece separately.',
    },
  ],
  // 11. Dividing radicals down to a whole number.
  [
    {
      q: 'Compute $\\frac{\\sqrt{512}}{\\sqrt{2}}$.',
      choices: ['$256$', '$\\sqrt{510}$', '$16$', '$32$'],
      answer: 2,
      solution: 'Merge into one root: $\\frac{\\sqrt{512}}{\\sqrt{2}} = \\sqrt{\\frac{512}{2}} = \\sqrt{256} = 16$. ($256$ divides inside correctly but forgets the final root; $\\sqrt{510}$ subtracts inside instead of dividing; $32$ is $\\sqrt{1024}$, which comes from multiplying the two roots instead of dividing.)',
    },
    {
      q: 'Compute $\\frac{\\sqrt{432}}{\\sqrt{3}}$.',
      choices: ['$12$', '$144$', '$\\sqrt{429}$', '$36$'],
      answer: 0,
      solution: 'Merge into one root: $\\frac{\\sqrt{432}}{\\sqrt{3}} = \\sqrt{\\frac{432}{3}} = \\sqrt{144} = 12$. ($144$ stops before taking the root; $\\sqrt{429}$ subtracts inside instead of dividing; $36$ is $\\sqrt{1296}$, from multiplying the roots instead of dividing.)',
    },
    {
      q: 'Compute $\\frac{\\sqrt{588}}{\\sqrt{3}}$.',
      choices: ['$\\sqrt{585}$', '$14$', '$196$', '$42$'],
      answer: 1,
      solution: 'Merge into one root: $\\frac{\\sqrt{588}}{\\sqrt{3}} = \\sqrt{\\frac{588}{3}} = \\sqrt{196} = 14$. ($196$ forgets the last root; $\\sqrt{585}$ subtracts inside instead of dividing; $42$ is $\\sqrt{1764}$, from multiplying the two roots.)',
    },
  ],
  // 12. Undoing a square root to recover the number underneath.
  [
    {
      q: 'A positive number $y$ satisfies $\\sqrt{y} = 11$. What is $y$?',
      choices: ['$121$', '$22$', '$5.5$', '$\\sqrt{11}$'],
      answer: 0,
      solution: 'Squaring undoes rooting, so $y = 11^2 = 121$. Check: $\\sqrt{121} = 11$. ($22$ doubles instead of squaring; $5.5$ halves; $\\sqrt{11}$ takes another root instead of undoing the one already there.)',
    },
    {
      q: 'A positive number $k$ satisfies $\\sqrt{k} + 4 = 13$. What is $k$?',
      choices: ['$9$', '$81$', '$169$', '$17$'],
      answer: 1,
      solution: 'Peel the outside layer first: subtract $4$ from both sides to get $\\sqrt{k} = 9$, then square: $k = 81$. Check: $\\sqrt{81} + 4 = 9 + 4 = 13$. ($9$ stops at $\\sqrt{k}$ without squaring; $169$ squares the $13$ before subtracting the $4$; $17$ adds $4$ to $13$ instead of subtracting.)',
    },
    {
      q: 'A positive number $m$ satisfies $\\sqrt{m} = 2\\sqrt{3}$. What is $m$?',
      choices: ['$6$', '$36$', '$4\\sqrt{3}$', '$12$'],
      answer: 3,
      solution: 'Square both sides, remembering that BOTH parts get squared: $m = (2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$. Check: $\\sqrt{12} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$. ($6$ squares the radical but forgets to square the $2$; $36$ treats $2\\sqrt{3}$ as if it were $2 \\cdot 3 = 6$ and squares that; $4\\sqrt{3}$ doubles instead of squaring.)',
    },
  ],
]

const worksheet = [
  // 1. The root of a three-digit perfect square.
  [
    {
      q: 'Compute $\\sqrt{225}$.',
      answer: '$15$',
      solution: 'We need the number whose square is $225$: $14^2 = 196$ falls short, and $15 \\times 15 = 225$ is exact. So $\\sqrt{225} = 15$.',
    },
    {
      q: 'Compute $\\sqrt{289}$.',
      answer: '$17$',
      solution: 'Try the middle teens: $16^2 = 256$ is too small, and $17 \\times 17 = 289$ lands exactly. So $\\sqrt{289} = 17$.',
    },
    {
      q: 'Compute $\\sqrt{441}$.',
      answer: '$21$',
      solution: 'Start from a square you know: $20^2 = 400$ is a little too small, so try the next one up — $21 \\times 21 = 441$. So $\\sqrt{441} = 21$.',
    },
  ],
  // 2. Trapping a root between consecutive integers.
  [
    {
      q: 'Between which two consecutive integers is $\\sqrt{110}$?',
      answer: '$10$ and $11$',
      solution: 'The perfect squares around $110$ are $100 = 10^2$ and $121 = 11^2$. Since $100 < 110 < 121$, taking roots gives $10 < \\sqrt{110} < 11$.',
    },
    {
      q: 'Between which two consecutive integers is $\\sqrt{55}$?',
      answer: '$7$ and $8$',
      solution: 'The perfect squares around $55$ are $49 = 7^2$ and $64 = 8^2$. Since $49 < 55 < 64$, we get $7 < \\sqrt{55} < 8$.',
    },
    {
      q: 'Between which two consecutive integers is $\\sqrt{136}$?',
      answer: '$11$ and $12$',
      solution: 'The perfect squares around $136$ are $121 = 11^2$ and $144 = 12^2$. Since $121 < 136 < 144$, we get $11 < \\sqrt{136} < 12$.',
    },
  ],
  // 3. Pulling out the largest perfect square factor.
  [
    {
      q: 'Simplify $\\sqrt{175}$ completely.',
      answer: '$5\\sqrt{7}$',
      solution: 'The largest perfect square factor of $175$ is $25$, since $175 = 25 \\cdot 7$. So $\\sqrt{175} = \\sqrt{25} \\cdot \\sqrt{7} = 5\\sqrt{7}$. Check: $(5\\sqrt{7})^2 = 25 \\cdot 7 = 175$. And $7$ is prime, so nothing else can come out.',
    },
    {
      q: 'Simplify $\\sqrt{242}$ completely.',
      answer: '$11\\sqrt{2}$',
      solution: 'The largest perfect square factor of $242$ is $121$, since $242 = 121 \\cdot 2$. So $\\sqrt{242} = \\sqrt{121} \\cdot \\sqrt{2} = 11\\sqrt{2}$. Check: $(11\\sqrt{2})^2 = 121 \\cdot 2 = 242$.',
    },
    {
      q: 'Simplify $\\sqrt{245}$ completely.',
      answer: '$7\\sqrt{5}$',
      solution: 'The largest perfect square factor of $245$ is $49$, since $245 = 49 \\cdot 5$. So $\\sqrt{245} = \\sqrt{49} \\cdot \\sqrt{5} = 7\\sqrt{5}$. Check: $(7\\sqrt{5})^2 = 49 \\cdot 5 = 245$.',
    },
  ],
  // 4. The square root of a fraction.
  [
    {
      q: 'Compute $\\sqrt{\\frac{9}{49}}$.',
      answer: '$\\frac{3}{7}$',
      solution: 'Root the top and the bottom separately: $\\sqrt{9} = 3$ and $\\sqrt{49} = 7$, so the answer is $\\frac{3}{7}$. Check: $\\frac{3}{7} \\times \\frac{3}{7} = \\frac{9}{49}$.',
    },
    {
      q: 'Compute $\\sqrt{\\frac{81}{121}}$.',
      answer: '$\\frac{9}{11}$',
      solution: 'Root the top and the bottom separately: $\\sqrt{81} = 9$ and $\\sqrt{121} = 11$, so the answer is $\\frac{9}{11}$. Check: $\\frac{9}{11} \\times \\frac{9}{11} = \\frac{81}{121}$.',
    },
    {
      q: 'Compute $\\sqrt{\\frac{144}{169}}$.',
      answer: '$\\frac{12}{13}$',
      solution: 'Root the top and the bottom separately: $\\sqrt{144} = 12$ and $\\sqrt{169} = 13$, so the answer is $\\frac{12}{13}$. Check: $\\frac{12}{13} \\times \\frac{12}{13} = \\frac{144}{169}$.',
    },
  ],
  // 5. Two radicals whose product is a whole number.
  [
    {
      q: 'Compute $\\sqrt{3} \\cdot \\sqrt{27}$.',
      answer: '$9$',
      solution: 'Merge the roots: $\\sqrt{3} \\cdot \\sqrt{27} = \\sqrt{3 \\cdot 27} = \\sqrt{81} = 9$. The numbers inside multiply — they never add.',
    },
    {
      q: 'Compute $\\sqrt{8} \\cdot \\sqrt{18}$.',
      answer: '$12$',
      solution: 'Merge the roots: $\\sqrt{8} \\cdot \\sqrt{18} = \\sqrt{144} = 12$. Neither factor is a whole number on its own, yet together they land exactly on $12$.',
    },
    {
      q: 'Compute $\\sqrt{10} \\cdot \\sqrt{40}$.',
      answer: '$20$',
      solution: 'Merge the roots: $\\sqrt{10} \\cdot \\sqrt{40} = \\sqrt{400} = 20$, since $20^2 = 400$.',
    },
  ],
  // 6. Combining a string of like radicals, including a bare one.
  [
    {
      q: 'Compute $8\\sqrt{5} - 3\\sqrt{5} + \\sqrt{5}$.',
      answer: '$6\\sqrt{5}$',
      solution: 'Every term carries the same radical, so just count them: $8 - 3 + 1 = 6$. The total is $6\\sqrt{5}$. The lone $\\sqrt{5}$ counts as $1\\sqrt{5}$, not as nothing.',
    },
    {
      q: 'Compute $5\\sqrt{2} + \\sqrt{2} - 3\\sqrt{2}$.',
      answer: '$3\\sqrt{2}$',
      solution: 'All three terms are like radicals, so count them: $5 + 1 - 3 = 3$. The total is $3\\sqrt{2}$.',
    },
    {
      q: 'Compute $10\\sqrt{6} - 4\\sqrt{6} - \\sqrt{6}$.',
      answer: '$5\\sqrt{6}$',
      solution: 'Count the like radicals: $10 - 4 - 1 = 5$, so the answer is $5\\sqrt{6}$. Watch that last term — subtracting a bare $\\sqrt{6}$ takes away one of them.',
    },
  ],
  // 7. Simplify both radicals, then discover they match.
  [
    {
      q: 'Simplify $\\sqrt{300} + \\sqrt{27}$.',
      answer: '$13\\sqrt{3}$',
      solution: 'Simplify each first: $\\sqrt{300} = \\sqrt{100} \\cdot \\sqrt{3} = 10\\sqrt{3}$ and $\\sqrt{27} = \\sqrt{9} \\cdot \\sqrt{3} = 3\\sqrt{3}$. Now they match: $10\\sqrt{3} + 3\\sqrt{3} = 13\\sqrt{3}$.',
    },
    {
      q: 'Simplify $\\sqrt{98} + \\sqrt{8}$.',
      answer: '$9\\sqrt{2}$',
      solution: 'Simplify each first: $\\sqrt{98} = \\sqrt{49} \\cdot \\sqrt{2} = 7\\sqrt{2}$ and $\\sqrt{8} = \\sqrt{4} \\cdot \\sqrt{2} = 2\\sqrt{2}$. Now they are like radicals: $7\\sqrt{2} + 2\\sqrt{2} = 9\\sqrt{2}$.',
    },
    {
      q: 'Simplify $\\sqrt{500} + \\sqrt{20}$.',
      answer: '$12\\sqrt{5}$',
      solution: 'Simplify each first: $\\sqrt{500} = \\sqrt{100} \\cdot \\sqrt{5} = 10\\sqrt{5}$ and $\\sqrt{20} = \\sqrt{4} \\cdot \\sqrt{5} = 2\\sqrt{5}$. They match, so $10\\sqrt{5} + 2\\sqrt{5} = 12\\sqrt{5}$.',
    },
  ],
  // 8. Rationalizing a denominator.
  [
    {
      q: 'Rationalize the denominator: $\\frac{9}{\\sqrt{3}}$.',
      answer: '$3\\sqrt{3}$',
      solution: 'Multiply top and bottom by $\\sqrt{3}$: $\\frac{9}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{9\\sqrt{3}}{3} = 3\\sqrt{3}$. Check: $3\\sqrt{3} \\cdot \\sqrt{3} = 3 \\cdot 3 = 9$.',
    },
    {
      q: 'Rationalize the denominator: $\\frac{15}{\\sqrt{5}}$.',
      answer: '$3\\sqrt{5}$',
      solution: 'Multiply top and bottom by $\\sqrt{5}$: $\\frac{15}{\\sqrt{5}} \\cdot \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{15\\sqrt{5}}{5} = 3\\sqrt{5}$. Check: $3\\sqrt{5} \\cdot \\sqrt{5} = 3 \\cdot 5 = 15$.',
    },
    {
      q: 'Rationalize the denominator: $\\frac{6}{\\sqrt{2}}$.',
      answer: '$3\\sqrt{2}$',
      solution: 'Multiply top and bottom by $\\sqrt{2}$: $\\frac{6}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$. Check: $3\\sqrt{2} \\cdot \\sqrt{2} = 3 \\cdot 2 = 6$.',
    },
  ],
  // 9. Area of a square back to a side in simplest radical form.
  [
    {
      q: 'A square flower bed has an area of $45$ square meters. Find its side length, fully simplified.',
      answer: '$3\\sqrt{5}$ meters',
      solution: 'The side is $\\sqrt{45}$. The largest perfect square factor of $45$ is $9$, so the side is $\\sqrt{9} \\cdot \\sqrt{5} = 3\\sqrt{5}$ meters. Check: $(3\\sqrt{5})^2 = 9 \\cdot 5 = 45$.',
    },
    {
      q: 'A square trampoline has an area of $50$ square feet. Find its side length, fully simplified.',
      answer: '$5\\sqrt{2}$ feet',
      solution: 'The side is $\\sqrt{50}$. The largest perfect square factor of $50$ is $25$, so the side is $\\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$ feet. Check: $(5\\sqrt{2})^2 = 25 \\cdot 2 = 50$.',
    },
    {
      q: 'A square sandpit has an area of $192$ square feet. Find its side length, fully simplified.',
      answer: '$8\\sqrt{3}$ feet',
      solution: 'The side is $\\sqrt{192}$. The largest perfect square factor of $192$ is $64$, since $192 = 64 \\cdot 3$, so the side is $\\sqrt{64} \\cdot \\sqrt{3} = 8\\sqrt{3}$ feet. Check: $(8\\sqrt{3})^2 = 64 \\cdot 3 = 192$.',
    },
  ],
  // 10. Squaring radical terms, then combining.
  [
    {
      q: 'Compute $(4\\sqrt{2})^2 + (2\\sqrt{5})^2$.',
      answer: '$52$',
      solution: 'Square each part of each term: $(4\\sqrt{2})^2 = 16 \\cdot 2 = 32$ and $(2\\sqrt{5})^2 = 4 \\cdot 5 = 20$. Then add: $32 + 20 = 52$.',
    },
    {
      q: 'Compute $(5\\sqrt{2})^2 - (3\\sqrt{3})^2$.',
      answer: '$23$',
      solution: 'Square each part of each term: $(5\\sqrt{2})^2 = 25 \\cdot 2 = 50$ and $(3\\sqrt{3})^2 = 9 \\cdot 3 = 27$. Then subtract: $50 - 27 = 23$.',
    },
    {
      q: 'Compute $(3\\sqrt{6})^2 + (2\\sqrt{7})^2$.',
      answer: '$82$',
      solution: 'Square each part of each term: $(3\\sqrt{6})^2 = 9 \\cdot 6 = 54$ and $(2\\sqrt{7})^2 = 4 \\cdot 7 = 28$. Then add: $54 + 28 = 82$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 9,
  challenge,
  worksheet,
}
