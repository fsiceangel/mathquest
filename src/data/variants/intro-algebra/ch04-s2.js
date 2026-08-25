// Introduction to Algebra chapter 4 — variations for sections 4.4 and 4.5,
// plus the chapter challenge and the chapter worksheet. All problems and
// solutions are original MathQuest content.
//
// House rules used while authoring this file:
//  - Every algebraic answer was checked NUMERICALLY at several substitutions
//    per variable, including negative values and values other than 0, 1 and 2,
//    with exact rational arithmetic (no floating point).
//  - Every equation answer was substituted back into its own original
//    equation, at several values of the free variables.
//  - Every factoring answer was expanded back out term by term.
//  - Every named wrong method was computed as its own expression and compared
//    to the key. A distractor that coincides with the key would reward the very
//    mistake it is testing, so none are allowed here. An incompletely factored
//    form is EQUAL to the key, so it never appears as a distractor either.
//  - All four choices of every item were compared pairwise as functions, over
//    mixed-sign inputs, so no two choices are secretly the same expression.
//  - The three variations of any one base problem always use three different
//    answer positions.

const s44 = [
  // p1 — cancel a common numeric factor out of a one-variable fraction.
  [
    {
      q: 'Simplify $\\frac{4m}{10}$.',
      choices: ['$\\frac{4m}{5}$', '$\\frac{2m}{5}$', '$\\frac{2}{5m}$', '$\\frac{5}{2m}$'],
      answer: 1,
      solution:
        'Top and bottom share a factor of $2$: $\\frac{4m}{10} = \\frac{2 \\cdot 2 \\cdot m}{2 \\cdot 5} = \\frac{2m}{5}$. Check with $m = 15$: the original is $\\frac{60}{10} = 6$, and $\\frac{2 \\cdot 15}{5} = 6$. ✓ ($\\frac{4m}{5}$ divides the bottom by $2$ but forgets to divide the top — cancelling has to happen on both sides at once; $\\frac{2}{5m}$ moves the $m$ to the denominator, but the $m$ was never on the bottom; $\\frac{5}{2m}$ flips the whole fraction upside down.)',
    },
    {
      q: 'Simplify $\\frac{12k}{9}$.',
      choices: ['$\\frac{4k}{3}$', '$4k$', '$\\frac{4}{3k}$', '$\\frac{3}{4k}$'],
      answer: 0,
      solution:
        'The common factor is $3$: $\\frac{12k}{9} = \\frac{3 \\cdot 4 \\cdot k}{3 \\cdot 3} = \\frac{4k}{3}$. The fraction is bigger than $k$ here, because $\\frac{12}{9} > 1$. Check with $k = 6$: the original is $\\frac{72}{9} = 8$, and $\\frac{4 \\cdot 6}{3} = 8$. ✓ ($4k$ divides only the top by $3$ and then drops the denominator entirely; $\\frac{4}{3k}$ sends the $k$ to the bottom, where it never was; $\\frac{3}{4k}$ turns the answer upside down.)',
    },
    {
      q: 'Simplify $\\frac{7p}{21}$.',
      choices: ['$\\frac{7p}{3}$', '$\\frac{1}{3p}$', '$\\frac{p}{3}$', '$\\frac{3}{p}$'],
      answer: 2,
      solution:
        'Here the whole coefficient cancels: $\\frac{7p}{21} = \\frac{7 \\cdot p}{7 \\cdot 3} = \\frac{p}{3}$. The $7$ on top shrinks to $1$, and $1 \\cdot p$ is just $p$. Check with $p = 9$: the original is $\\frac{63}{21} = 3$, and $\\frac{9}{3} = 3$. ✓ ($\\frac{7p}{3}$ divides only the $21$ by $7$; $\\frac{1}{3p}$ keeps the $1$ on top but pushes the $p$ to the bottom; $\\frac{3}{p}$ is the reciprocal of the right answer.)',
    },
  ],
  // p2 — cancel a number AND a shared letter.
  [
    {
      q: 'Simplify $\\frac{6ab}{9a}$.',
      choices: ['$\\frac{2ab}{3}$', '$\\frac{2}{3}$', '$\\frac{2b}{3}$', '$\\frac{2b}{3a}$'],
      answer: 2,
      solution:
        'Two cancellations happen: a $3$ from the numbers, and the single $a$ that both top and bottom carry. That leaves $\\frac{6ab}{9a} = \\frac{2b}{3}$. The $b$ survives because only the top has one. Check with $a = 4$, $b = 5$: the original is $\\frac{120}{36} = \\frac{10}{3}$, and $\\frac{2 \\cdot 5}{3} = \\frac{10}{3}$. ✓ ($\\frac{2ab}{3}$ cancels the numbers but forgets the $a$; $\\frac{2}{3}$ cancels the $b$ too, even though the bottom has no $b$ to cancel it against; $\\frac{2b}{3a}$ leaves a leftover $a$ on the bottom, as if the top had no $a$ at all.)',
    },
    {
      q: 'Simplify $\\frac{9st}{12s}$.',
      choices: ['$\\frac{3t}{4}$', '$\\frac{3st}{4}$', '$\\frac{3t}{4s}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'The numbers share a $3$, and the letter $s$ appears once on top and once on the bottom, so it cancels completely: $\\frac{9st}{12s} = \\frac{3t}{4}$. Check with $s = 2$, $t = 8$: the original is $\\frac{144}{24} = 6$, and $\\frac{3 \\cdot 8}{4} = 6$. ✓ ($\\frac{3st}{4}$ cancels only the numbers; $\\frac{3t}{4s}$ removes the $s$ from the top only, leaving one stranded below; $\\frac{3}{4}$ throws away the $t$, which had no partner to cancel with.)',
    },
    {
      q: 'Simplify $\\frac{14c}{21cd}$.',
      choices: ['$\\frac{2c}{3d}$', '$\\frac{2d}{3}$', '$\\frac{3d}{2}$', '$\\frac{2}{3d}$'],
      answer: 3,
      solution:
        'This time the extra letter sits on the BOTTOM. Cancel a $7$ from the numbers and the shared $c$: $\\frac{14c}{21cd} = \\frac{2}{3d}$. The $d$ stays downstairs, so the answer is a fraction with a variable in its denominator — perfectly normal. Check with $c = 5$, $d = 2$: the original is $\\frac{70}{210} = \\frac{1}{3}$, and $\\frac{2}{3 \\cdot 2} = \\frac{1}{3}$. ✓ ($\\frac{2c}{3d}$ forgets to cancel the $c$; $\\frac{2d}{3}$ pulls the leftover $d$ up to the top, but the $d$ was a denominator; $\\frac{3d}{2}$ is the whole thing flipped.)',
    },
  ],
  // p3 — a repeated letter: cancel one copy, not all of them.
  [
    {
      q: 'Simplify $\\frac{14x^2y}{21xy}$.',
      choices: ['$\\frac{2x^2}{3}$', '$\\frac{2x}{3}$', '$\\frac{2xy}{3}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Write the top as $14 \\cdot x \\cdot x \\cdot y$ and the bottom as $21 \\cdot x \\cdot y$. Cancel a $7$ from the numbers, ONE $x$ (the bottom only has one to offer), and the whole $y$: $\\frac{14x^2y}{21xy} = \\frac{2x}{3}$. Check with $x = 3$, $y = 5$: the original is $\\frac{14 \\cdot 9 \\cdot 5}{21 \\cdot 3 \\cdot 5} = \\frac{630}{315} = 2$, and $\\frac{2 \\cdot 3}{3} = 2$. ✓ ($\\frac{2x^2}{3}$ cancels the $y$ but leaves both $x$s; $\\frac{2xy}{3}$ cancels one $x$ but forgets the $y$; $\\frac{2}{3}$ cancels every letter in sight, as if $x^2$ and $x$ were the same size.)',
    },
    {
      q: 'Simplify $\\frac{12m^2n^2}{18mn}$.',
      choices: ['$\\frac{2m^2n}{3}$', '$\\frac{2mn^2}{3}$', '$\\frac{2}{3}$', '$\\frac{2mn}{3}$'],
      answer: 3,
      solution:
        'The numbers share a $6$. Each letter appears twice on top and once on the bottom, so each loses exactly one copy: $\\frac{12m^2n^2}{18mn} = \\frac{2mn}{3}$. Check with $m = 3$, $n = -2$: the original is $\\frac{12 \\cdot 9 \\cdot 4}{18 \\cdot 3 \\cdot (-2)} = \\frac{432}{-108} = -4$, and $\\frac{2(3)(-2)}{3} = -4$. ✓ ($\\frac{2m^2n}{3}$ cancels an $n$ but forgets to cancel an $m$; $\\frac{2mn^2}{3}$ does the reverse; $\\frac{2}{3}$ cancels both letters completely, which would only be right if the top and bottom had equal numbers of each.)',
    },
    {
      q: 'Simplify $\\frac{18x^2yz}{24xyz}$.',
      choices: ['$\\frac{3x^2}{4}$', '$\\frac{3}{4}$', '$\\frac{3x}{4}$', '$\\frac{4}{3x}$'],
      answer: 2,
      solution:
        'Three letters, but only one of them is unbalanced. The $y$ and the $z$ each appear once on top and once on the bottom, so both vanish; the $x$ appears twice on top and once below, so one $x$ survives. With a $6$ cancelled from the numbers: $\\frac{18x^2yz}{24xyz} = \\frac{3x}{4}$. Check with $x = 4$, $y = 3$, $z = -1$: the original is $\\frac{18 \\cdot 16 \\cdot 3 \\cdot (-1)}{24 \\cdot 4 \\cdot 3 \\cdot (-1)} = \\frac{-864}{-288} = 3$, and $\\frac{3 \\cdot 4}{4} = 3$. ✓ ($\\frac{3x^2}{4}$ forgets that one $x$ cancels; $\\frac{3}{4}$ cancels both $x$s; $\\frac{4}{3x}$ is the reciprocal of the right answer.)',
    },
  ],
  // p4 — same denominator, so only the numerators combine.
  [
    {
      q: 'Simplify $\\frac{5a}{b} - \\frac{2a}{b}$.',
      choices: ['$\\frac{7a}{b}$', '$\\frac{3}{b}$', '$\\frac{3a}{b}$', '$\\frac{3a}{b^2}$'],
      answer: 2,
      solution:
        'The denominators already match, so only the tops do anything: $5a - 2a = 3a$, giving $\\frac{3a}{b}$. Five of something minus two of the same thing leaves three of it. Check with $a = 4$, $b = 3$: the original is $\\frac{20}{3} - \\frac{8}{3} = \\frac{12}{3} = 4$, and $\\frac{3 \\cdot 4}{3} = 4$. ✓ ($\\frac{7a}{b}$ adds the coefficients instead of subtracting; $\\frac{3}{b}$ subtracts the coefficients but then loses the $a$ — the variable never disappears when like terms combine; $\\frac{3a}{b^2}$ multiplies the two denominators together, but denominators that already agree are simply kept.)',
    },
    {
      q: 'Simplify $\\frac{3m}{n} + \\frac{m}{n}$.',
      choices: ['$\\frac{4m}{2n}$', '$\\frac{4m}{n}$', '$\\frac{3m^2}{n^2}$', '$\\frac{4}{n}$'],
      answer: 1,
      solution:
        'Remember that $\\frac{m}{n}$ means $\\frac{1m}{n}$, so the tops give $3m + 1m = 4m$ and the answer is $\\frac{4m}{n}$. Check with $m = 5$, $n = -2$: the original is $\\frac{15}{-2} + \\frac{5}{-2} = \\frac{20}{-2} = -10$, and $\\frac{4 \\cdot 5}{-2} = -10$. ✓ ($\\frac{4m}{2n}$ adds the denominators as well, which halves the answer; $\\frac{3m^2}{n^2}$ multiplies the two fractions instead of adding them; $\\frac{4}{n}$ combines the coefficients but drops the $m$.)',
    },
    {
      q: 'Simplify $\\frac{4x}{y} - \\frac{x}{y} + \\frac{2x}{y}$.',
      choices: ['$\\frac{7x}{y}$', '$\\frac{x}{y}$', '$\\frac{5x}{3y}$', '$\\frac{5x}{y}$'],
      answer: 3,
      solution:
        'All three denominators are $y$, so gather the numerators left to right: $4x - x + 2x = 5x$, giving $\\frac{5x}{y}$. Check with $x = 3$, $y = 4$: the original is $\\frac{12}{4} - \\frac{3}{4} + \\frac{6}{4} = \\frac{15}{4}$, and $\\frac{5 \\cdot 3}{4} = \\frac{15}{4}$. ✓ ($\\frac{7x}{y}$ adds all three coefficients, ignoring the minus sign; $\\frac{x}{y}$ subtracts the last term too, as if the minus sign covered everything after it — it covers only $\\frac{x}{y}$; $\\frac{5x}{3y}$ adds the three denominators, which they never do.)',
    },
  ],
  // p5 — a fraction bar divides the WHOLE numerator; no cancelling across a plus.
  [
    {
      q: 'Which expression is equal to $\\frac{y + 6}{6}$?',
      choices: ['$y + 1$', '$\\frac{y}{6} + 1$', '$\\frac{y + 1}{6}$', '$\\frac{y}{6} + 6$'],
      answer: 1,
      solution:
        'The bar divides everything on top, so split it term by term: $\\frac{y + 6}{6} = \\frac{y}{6} + \\frac{6}{6} = \\frac{y}{6} + 1$. Check with $y = 12$: the original is $\\frac{18}{6} = 3$, and $\\frac{12}{6} + 1 = 3$. ✓ ($y + 1$ cancels the two $6$s, but the $6$ on top is ADDED, not multiplied — cancelling only works on factors. At $y = 12$ that choice gives $13$, nowhere near $3$; $\\frac{y + 1}{6}$ shrinks the top $6$ to a $1$ but leaves it inside the numerator, which divides it a second time; $\\frac{y}{6} + 6$ splits the fraction correctly but forgets to divide the second piece.)',
    },
    {
      q: 'Which expression is equal to $\\frac{6b - 9}{3}$?',
      choices: ['$6b - 3$', '$2b - 9$', '$2b + 3$', '$2b - 3$'],
      answer: 3,
      solution:
        'Divide EVERY term on top by $3$: $\\frac{6b}{3} - \\frac{9}{3} = 2b - 3$. Check with $b = 5$: the original is $\\frac{30 - 9}{3} = \\frac{21}{3} = 7$, and $2(5) - 3 = 7$. ✓ ($6b - 3$ divides only the $9$; $2b - 9$ divides only the $6b$ — the bar reaches both terms or neither; $2b + 3$ divides both but loses the minus sign, and at $b = 5$ it gives $13$ instead of $7$.)',
    },
    {
      q: 'Which single fraction is equal to $\\frac{m}{5} - 2$?',
      choices: ['$\\frac{m - 10}{5}$', '$\\frac{m - 2}{5}$', '$\\frac{5m - 10}{5}$', '$\\frac{m + 10}{5}$'],
      answer: 0,
      solution:
        'This is the previous idea run backwards. To put $2$ over the denominator $5$, rewrite it as $\\frac{10}{5}$: $\\frac{m}{5} - \\frac{10}{5} = \\frac{m - 10}{5}$. Check with $m = 20$: the original is $4 - 2 = 2$, and $\\frac{20 - 10}{5} = 2$. ✓ ($\\frac{m - 2}{5}$ slides the $2$ under the bar without rescaling it, which secretly divides it by $5$; $\\frac{5m - 10}{5}$ rescales the $2$ but multiplies the $m$ by $5$ as well, and that piece was already over $5$; $\\frac{m + 10}{5}$ turns the subtraction into an addition.)',
    },
  ],
  // p6 — multiply straight across, then cancel.
  [
    {
      q: 'Simplify $\\frac{3a}{4} \\cdot \\frac{8}{a}$.',
      choices: ['$6$', '$6a$', '$\\frac{6}{a}$', '$\\frac{3a^2}{32}$'],
      answer: 0,
      solution:
        'Multiply tops together and bottoms together: $\\frac{3a \\cdot 8}{4 \\cdot a} = \\frac{24a}{4a}$. Top and bottom each hold exactly one $a$, so the $a$ cancels completely, and $24 \\div 4 = 6$. Check with $a = 7$: the original is $\\frac{21}{4} \\cdot \\frac{8}{7} = \\frac{168}{28} = 6$, no matter what $a$ is. ✓ ($6a$ cancels the numbers but lets the $a$ survive on top; $\\frac{6}{a}$ strands it on the bottom; $\\frac{3a^2}{32}$ flips the second fraction first, which is the rule for DIVISION, not multiplication.)',
    },
    {
      q: 'Simplify $\\frac{4x}{5} \\cdot \\frac{15}{2}$.',
      choices: ['$6$', '$\\frac{6}{x}$', '$6x$', '$\\frac{8x}{75}$'],
      answer: 2,
      solution:
        'Straight across: $\\frac{4x \\cdot 15}{5 \\cdot 2} = \\frac{60x}{10} = 6x$. This time there is no $x$ on any denominator, so the $x$ has nothing to cancel against and rides along. Check with $x = 3$: the original is $\\frac{12}{5} \\cdot \\frac{15}{2} = \\frac{180}{10} = 18$, and $6(3) = 18$. ✓ ($6$ cancels the $x$ anyway, but a variable needs a partner below the bar to cancel; $\\frac{6}{x}$ pushes it downstairs; $\\frac{8x}{75}$ flips the second fraction, turning the problem into a division.)',
    },
    {
      q: 'Simplify $\\frac{3a}{2b} \\cdot \\frac{4b}{9}$.',
      choices: ['$\\frac{2ab}{3}$', '$\\frac{2a}{3b}$', '$\\frac{27a}{8b^2}$', '$\\frac{2a}{3}$'],
      answer: 3,
      solution:
        'Multiply across first: $\\frac{3a \\cdot 4b}{2b \\cdot 9} = \\frac{12ab}{18b}$. Now cancel: a $6$ from the numbers and the single $b$ that appears above and below, leaving $\\frac{2a}{3}$. Check with $a = 5$, $b = -3$: the original is $\\frac{15}{-6} \\cdot \\frac{-12}{9} = \\frac{-180}{-54} = \\frac{10}{3}$, and $\\frac{2 \\cdot 5}{3} = \\frac{10}{3}$. ✓ ($\\frac{2ab}{3}$ keeps a $b$ on top even though it cancelled; $\\frac{2a}{3b}$ keeps one on the bottom; $\\frac{27a}{8b^2}$ flips the second fraction, which would be right only if the problem said $\\div$.)',
    },
  ],
  // p7 — divide by flipping the SECOND fraction.
  [
    {
      q: 'Compute $\\frac{2p}{5} \\div \\frac{p}{10}$.',
      choices: ['$4$', '$\\frac{p^2}{25}$', '$4p$', '$\\frac{1}{4}$'],
      answer: 0,
      solution:
        'Dividing by a fraction means multiplying by its reciprocal, so flip the SECOND one: $\\frac{2p}{5} \\cdot \\frac{10}{p} = \\frac{20p}{5p} = 4$. The $p$s cancel and $20 \\div 5 = 4$. Check with $p = 6$: the original is $\\frac{12}{5} \\div \\frac{6}{10} = \\frac{12}{5} \\cdot \\frac{10}{6} = \\frac{120}{30} = 4$. ✓ ($\\frac{p^2}{25}$ multiplies without flipping at all, since $\\frac{2p \\cdot p}{5 \\cdot 10} = \\frac{2p^2}{50}$; $4p$ flips correctly but forgets that the $p$s cancel; $\\frac{1}{4}$ flips the FIRST fraction instead of the second, giving $\\frac{5}{2p} \\cdot \\frac{p}{10} = \\frac{5p}{20p}$ — the reciprocal of the right answer.)',
    },
    {
      q: 'Compute $\\frac{8k}{9} \\div \\frac{2k}{3}$.',
      choices: ['$\\frac{16k^2}{27}$', '$\\frac{4}{3}$', '$\\frac{4k}{3}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'Flip the second fraction and multiply: $\\frac{8k}{9} \\cdot \\frac{3}{2k} = \\frac{24k}{18k} = \\frac{4}{3}$. Cancel the $k$ and a factor of $6$ from the numbers. Check with $k = 3$: the original is $\\frac{24}{9} \\div \\frac{6}{3} = \\frac{8}{3} \\div 2 = \\frac{4}{3}$. ✓ ($\\frac{16k^2}{27}$ multiplies straight across without flipping; $\\frac{4k}{3}$ keeps a $k$ that actually cancels; $\\frac{3}{4}$ flips the first fraction rather than the second, which turns the answer upside down.)',
    },
    {
      q: 'Compute $\\frac{6a^2}{5} \\div \\frac{2a}{15}$.',
      choices: ['$\\frac{4a^3}{25}$', '$9$', '$9a$', '$\\frac{1}{9a}$'],
      answer: 2,
      solution:
        'Flip the second fraction: $\\frac{6a^2}{5} \\cdot \\frac{15}{2a} = \\frac{90a^2}{10a} = 9a$. The top has two $a$s and the bottom has one, so one $a$ survives. Check with $a = -2$: the original is $\\frac{24}{5} \\div \\frac{-4}{15} = \\frac{24}{5} \\cdot \\frac{15}{-4} = \\frac{360}{-20} = -18$, and $9(-2) = -18$. ✓ ($\\frac{4a^3}{25}$ never flips, giving $\\frac{12a^3}{75}$; $9$ cancels both $a$s even though the bottom only had one; $\\frac{1}{9a}$ flips the first fraction instead of the second.)',
    },
  ],
  // p8 — build a common denominator, rescaling each numerator by its OWN factor.
  [
    {
      q: 'Add $\\frac{x}{3} + \\frac{y}{4}$.',
      choices: ['$\\frac{x + y}{7}$', '$\\frac{x + y}{12}$', '$\\frac{3x + 4y}{12}$', '$\\frac{4x + 3y}{12}$'],
      answer: 3,
      solution:
        'The common denominator is $12$. To turn $\\frac{x}{3}$ into twelfths, multiply top and bottom by $4$: $\\frac{4x}{12}$. To turn $\\frac{y}{4}$ into twelfths, multiply by $3$: $\\frac{3y}{12}$. Now add the tops: $\\frac{4x + 3y}{12}$. Since $4x$ and $3y$ are not like terms, the numerator stays a sum. Check with $x = 6$, $y = 8$: the original is $2 + 2 = 4$, and $\\frac{24 + 24}{12} = 4$. ✓ ($\\frac{x + y}{7}$ adds tops and bottoms straight across, which is never a legal move; $\\frac{x + y}{12}$ finds the right denominator but forgets to rescale the numerators; $\\frac{3x + 4y}{12}$ swaps the two multipliers — each numerator must be multiplied by the same number as its OWN denominator.)',
    },
    {
      q: 'Subtract: $\\frac{m}{2} - \\frac{n}{5}$.',
      choices: ['$\\frac{5m - 2n}{10}$', '$\\frac{2m - 5n}{10}$', '$\\frac{m - n}{10}$', '$\\frac{m - n}{3}$'],
      answer: 0,
      solution:
        'The common denominator is $10$. The first fraction needs a factor of $5$ on top and bottom: $\\frac{5m}{10}$. The second needs a factor of $2$: $\\frac{2n}{10}$. Subtracting the tops gives $\\frac{5m - 2n}{10}$. Check with $m = 4$, $n = -5$: the original is $2 - (-1) = 3$, and $\\frac{20 + 10}{10} = 3$. ✓ ($\\frac{2m - 5n}{10}$ swaps the multipliers; $\\frac{m - n}{10}$ builds the denominator but never rescales; $\\frac{m - n}{3}$ subtracts tops and bottoms separately, which is not an operation at all.)',
    },
    {
      q: 'Add $\\frac{p}{6} + \\frac{q}{9}$.',
      choices: ['$\\frac{2p + 3q}{18}$', '$\\frac{3p + 2q}{18}$', '$\\frac{p + q}{18}$', '$\\frac{p + q}{15}$'],
      answer: 1,
      solution:
        'Here the denominators are not coprime, so the least common denominator is $18$, not $54$. Multiply the first fraction by $\\frac{3}{3}$ and the second by $\\frac{2}{2}$: $\\frac{3p}{18} + \\frac{2q}{18} = \\frac{3p + 2q}{18}$. Check with $p = 12$, $q = -9$: the original is $2 + (-1) = 1$, and $\\frac{36 - 18}{18} = 1$. ✓ ($\\frac{2p + 3q}{18}$ swaps the multipliers — the $6$ needs a $3$ to reach $18$, not a $2$; $\\frac{p + q}{18}$ forgets to rescale; $\\frac{p + q}{15}$ adds the denominators.)',
    },
  ],
  // p9 — leftover letters land on whichever side had more of them.
  [
    {
      q: 'Simplify $\\frac{10a^3b}{15ab^2}$.',
      choices: ['$\\frac{2a^3}{3b^2}$', '$\\frac{2b}{3a^2}$', '$\\frac{2a^2}{3b}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        'Count copies of each letter. The top has three $a$s, the bottom one, so two $a$s survive ON TOP. The top has one $b$, the bottom two, so one $b$ survives ON THE BOTTOM. With a $5$ cancelled from the numbers: $\\frac{10a^3b}{15ab^2} = \\frac{2a^2}{3b}$. Check with $a = 2$, $b = -3$: the original is $\\frac{10 \\cdot 8 \\cdot (-3)}{15 \\cdot 2 \\cdot 9} = \\frac{-240}{270} = -\\frac{8}{9}$, and $\\frac{2 \\cdot 4}{3 \\cdot (-3)} = -\\frac{8}{9}$. ✓ ($\\frac{2a^3}{3b^2}$ cancels the numbers only; $\\frac{2b}{3a^2}$ puts each leftover on the wrong side; $\\frac{2}{3}$ cancels every letter, which would need equal counts on both sides.)',
    },
    {
      q: 'Simplify $\\frac{20x^2yz}{25xy^2z}$.',
      choices: ['$\\frac{4y}{5x}$', '$\\frac{4x}{5y}$', '$\\frac{4xz}{5y}$', '$\\frac{4}{5}$'],
      answer: 1,
      solution:
        'Take the letters one at a time. Two $x$s on top against one below leaves one $x$ up top. One $y$ on top against two below leaves one $y$ down below. The $z$ appears once on each side, so it disappears. With a $5$ cancelled from the numbers: $\\frac{20x^2yz}{25xy^2z} = \\frac{4x}{5y}$. Check with $x = 3$, $y = 2$, $z = -4$: the original is $\\frac{20 \\cdot 9 \\cdot 2 \\cdot (-4)}{25 \\cdot 3 \\cdot 4 \\cdot (-4)} = \\frac{-1440}{-1200} = \\frac{6}{5}$, and $\\frac{4 \\cdot 3}{5 \\cdot 2} = \\frac{6}{5}$. ✓ ($\\frac{4y}{5x}$ swaps the two survivors; $\\frac{4xz}{5y}$ keeps the $z$ even though it cancelled; $\\frac{4}{5}$ cancels the $x$ and $y$ as well, ignoring that their counts differ.)',
    },
    {
      q: 'Simplify $\\frac{9m^3n^2}{12m^2n^4}$.',
      choices: ['$\\frac{3n^2}{4m}$', '$\\frac{3mn^2}{4}$', '$\\frac{3m}{4n^6}$', '$\\frac{3m}{4n^2}$'],
      answer: 3,
      solution:
        'The $m$ count is $3$ above and $2$ below, so one $m$ stays on top. The $n$ count is $2$ above and $4$ below, so two $n$s stay on the bottom. Cancelling a $3$ from the numbers gives $\\frac{9m^3n^2}{12m^2n^4} = \\frac{3m}{4n^2}$. Check with $m = 2$, $n = -1$: the original is $\\frac{9 \\cdot 8 \\cdot 1}{12 \\cdot 4 \\cdot 1} = \\frac{72}{48} = \\frac{3}{2}$, and $\\frac{3 \\cdot 2}{4 \\cdot 1} = \\frac{3}{2}$. ✓ ($\\frac{3n^2}{4m}$ swaps which letter ends up where; $\\frac{3mn^2}{4}$ lifts the leftover $n$s to the top, but the bottom had more of them; $\\frac{3m}{4n^6}$ ADDS the $n$ exponents instead of subtracting them.)',
    },
  ],
  // p10 — nearly-equal fractions: rescale before combining.
  [
    {
      q: 'Simplify $\\frac{a}{b} - \\frac{a}{3b}$.',
      choices: ['$0$', '$\\frac{4a}{3b}$', '$\\frac{2a}{3b}$', '$-\\frac{2a}{3b}$'],
      answer: 2,
      solution:
        'The two fractions have the same numerator but different denominators, so they are not equal and the difference is not $0$. Use the common denominator $3b$: $\\frac{a}{b} = \\frac{3a}{3b}$, so $\\frac{3a}{3b} - \\frac{a}{3b} = \\frac{2a}{3b}$. Check with $a = 6$, $b = 2$: the original is $3 - 1 = 2$, and $\\frac{12}{6} = 2$. ✓ ($0$ assumes the two fractions are the same; $\\frac{4a}{3b}$ adds instead of subtracting; $-\\frac{2a}{3b}$ subtracts in the wrong order — the bigger piece comes first here, so the answer is positive whenever $\\frac{a}{b}$ is.)',
    },
    {
      q: 'Simplify $\\frac{2x}{y} - \\frac{x}{4y}$.',
      choices: ['$\\frac{7x}{4y}$', '$\\frac{x}{4y}$', '$\\frac{9x}{4y}$', '$\\frac{7x}{3y}$'],
      answer: 0,
      solution:
        'Rewrite the first fraction over $4y$ by multiplying top and bottom by $4$: $\\frac{2x}{y} = \\frac{8x}{4y}$. Then $\\frac{8x}{4y} - \\frac{x}{4y} = \\frac{7x}{4y}$. Check with $x = 4$, $y = 2$: the original is $4 - \\frac{4}{8} = 4 - \\frac{1}{2} = \\frac{7}{2}$, and $\\frac{28}{8} = \\frac{7}{2}$. ✓ ($\\frac{x}{4y}$ keeps the new denominator but forgets to rescale the first numerator, subtracting $2x - x$; $\\frac{9x}{4y}$ adds instead of subtracting; $\\frac{7x}{3y}$ subtracts the denominators too, $4y - y = 3y$.)',
    },
    {
      q: 'Simplify $\\frac{m}{2n} + \\frac{m}{3n}$.',
      choices: ['$\\frac{2m}{5n}$', '$\\frac{5m}{6n}$', '$\\frac{m}{3n}$', '$\\frac{m^2}{6n^2}$'],
      answer: 1,
      solution:
        'The common denominator is $6n$. Multiply the first fraction by $\\frac{3}{3}$ and the second by $\\frac{2}{2}$: $\\frac{3m}{6n} + \\frac{2m}{6n} = \\frac{5m}{6n}$. Check with $m = 6$, $n = -1$: the original is $\\frac{6}{-2} + \\frac{6}{-3} = -3 + (-2) = -5$, and $\\frac{30}{-6} = -5$. ✓ ($\\frac{2m}{5n}$ adds tops and bottoms straight across; $\\frac{m}{3n}$ builds the denominator $6n$ but leaves both numerators as $m$, giving $\\frac{2m}{6n}$; $\\frac{m^2}{6n^2}$ multiplies the two fractions instead of adding them.)',
    },
  ],
]

const s45 = [
  // p1 — one subtraction undoes one addition.
  [
    {
      q: 'Solve $a + b = 14$ for $a$.',
      choices: ['$a = 14 - b$', '$a = b - 14$', '$a = 14 + b$', '$a = 14b$'],
      answer: 0,
      solution:
        'The $b$ is being added to $a$, so subtract $b$ from both sides: $a = 14 - b$. Check with $b = 9$: the formula gives $a = 5$, and $5 + 9 = 14$. ✓ ($a = b - 14$ subtracts in the wrong order — at $b = 9$ it would give $-5$, and $-5 + 9$ is $4$, not $14$; $a = 14 + b$ adds $b$ to both sides instead of subtracting it; $a = 14b$ reads the plus sign as a multiplication.)',
    },
    {
      q: 'Solve $m + n = -6$ for $n$.',
      choices: ['$n = m + 6$', '$n = -6 + m$', '$n = 6 - m$', '$n = -6 - m$'],
      answer: 3,
      solution:
        'Subtract $m$ from both sides: $n = -6 - m$. A negative number on the right changes nothing about the method — the same move works. Check with $m = 4$: the formula gives $n = -10$, and $4 + (-10) = -6$. ✓ ($n = m + 6$ flips both signs; $n = -6 + m$ adds $m$ instead of subtracting it, and at $m = 4$ gives $-2$, so $4 + (-2) = 2 \\neq -6$; $n = 6 - m$ loses the minus sign on the $6$.)',
    },
    {
      q: 'Solve $12 = c + d$ for $c$.',
      choices: ['$c = d - 12$', '$c = 12 - d$', '$c = 12 + d$', '$c = \\frac{12}{d}$'],
      answer: 1,
      solution:
        'It does not matter that the lone number is on the LEFT this time — an equation reads the same both ways. Subtract $d$ from both sides: $12 - d = c$, that is, $c = 12 - d$. Check with $d = 5$: the formula gives $c = 7$, and $12 = 7 + 5$. ✓ ($c = d - 12$ subtracts in the wrong order; $c = 12 + d$ moves the $d$ across without changing its sign; $c = \\frac{12}{d}$ divides, but $d$ was added, not multiplied.)',
    },
  ],
  // p2 — one division undoes one multiplication.
  [
    {
      q: 'Solve $5a = 20b$ for $a$.',
      choices: ['$a = \\frac{b}{4}$', '$a = 4b$', '$a = 100b$', '$a = 20b - 5$'],
      answer: 1,
      solution:
        'The $5$ is multiplying $a$, so divide both sides by $5$: $a = \\frac{20b}{5} = 4b$. Check with $b = 3$: then $a = 12$, and $5(12) = 60$ while $20(3) = 60$. ✓ ($a = \\frac{b}{4}$ divides the wrong way round — $a$ is the BIGGER quantity here; $a = 100b$ multiplies by $5$ instead of dividing; $a = 20b - 5$ subtracts the $5$, but a coefficient leaves by division, never by subtraction.)',
    },
    {
      q: 'Solve $3p = 12q$ for $q$.',
      choices: ['$q = 4p$', '$q = \\frac{p}{3}$', '$q = \\frac{p}{4}$', '$q = \\frac{4}{p}$'],
      answer: 2,
      solution:
        'This time we want $q$, and $q$ is multiplied by $12$, so divide both sides by $12$: $q = \\frac{3p}{12} = \\frac{p}{4}$. Check with $p = 8$: then $q = 2$, and $3(8) = 24$ while $12(2) = 24$. ✓ ($q = 4p$ divides in the wrong direction; $q = \\frac{p}{3}$ divides by the coefficient sitting on the OTHER side; $q = \\frac{4}{p}$ turns the correct answer upside down.)',
    },
    {
      q: 'Solve $-3x = 9y$ for $x$.',
      choices: ['$x = 3y$', '$x = -\\frac{y}{3}$', '$x = -27y$', '$x = -3y$'],
      answer: 3,
      solution:
        'Divide both sides by $-3$, sign and all: $x = \\frac{9y}{-3} = -3y$. Check with $y = 2$: then $x = -6$, and $-3(-6) = 18$ while $9(2) = 18$. ✓ ($x = 3y$ divides by $3$ and forgets the minus; $x = -\\frac{y}{3}$ divides the wrong way round; $x = -27y$ multiplies by $3$ instead of dividing.)',
    },
  ],
  // p3 — a subtracted term crosses over as an addition.
  [
    {
      q: 'Solve $p - q = 12$ for $p$.',
      choices: ['$p = q + 12$', '$p = 12 - q$', '$p = q - 12$', '$p = 12q$'],
      answer: 0,
      solution:
        'The $q$ is being subtracted from $p$, so add $q$ to both sides: $p = 12 + q$, usually written $p = q + 12$. Check with $q = 5$: then $p = 17$, and $17 - 5 = 12$. ✓ ($p = 12 - q$ subtracts $q$ again instead of undoing the subtraction; $p = q - 12$ has the subtraction backwards; $p = 12q$ turns the minus into a times.)',
    },
    {
      q: 'Solve $u - v = 8$ for $v$.',
      choices: ['$v = u + 8$', '$v = 8 - u$', '$v = u - 8$', '$v = 8u$'],
      answer: 2,
      solution:
        'Careful — this time we want the variable that is being SUBTRACTED. Subtract $u$ from both sides: $-v = 8 - u$. Now multiply both sides by $-1$, flipping every sign: $v = u - 8$. Check with $u = 20$: then $v = 12$, and $20 - 12 = 8$. ✓ ($v = u + 8$ adds where the sign flip should subtract, and at $u = 20$ gives $28$, but $20 - 28 = -8$; $v = 8 - u$ skips the final sign flip; $v = 8u$ reads the minus as a times.)',
    },
    {
      q: 'Solve $h - k = -5$ for $h$.',
      choices: ['$h = -5 - k$', '$h = k - 5$', '$h = k + 5$', '$h = 5 - k$'],
      answer: 1,
      solution:
        'Add $k$ to both sides: $h = -5 + k$, which is neater as $h = k - 5$. Check with $k = 3$: then $h = -2$, and $-2 - 3 = -5$. ✓ ($h = -5 - k$ subtracts $k$ instead of adding it; $h = k + 5$ loses the minus sign on the $5$, and at $k = 3$ gives $8$, but $8 - 3 = 5$, not $-5$; $h = 5 - k$ flips both signs at once.)',
    },
  ],
  // p4 — spot which operation is attached to the wanted variable.
  [
    {
      q: 'Solve $w = 7z$ for $z$.',
      choices: ['$z = 7w$', '$z = \\frac{7}{w}$', '$z = w - 7$', '$z = \\frac{w}{7}$'],
      answer: 3,
      solution:
        'Seven $z$s make one $w$, so a single $z$ is a seventh of $w$: divide both sides by $7$ to get $z = \\frac{w}{7}$. Check with $z = 4$: then $w = 28$, and $\\frac{28}{7} = 4$. ✓ ($z = 7w$ multiplies when it should divide — that would make $z$ the bigger quantity; $z = \\frac{7}{w}$ is upside down; $z = w - 7$ subtracts a coefficient, which is not how multiplication is undone.)',
    },
    {
      q: 'Solve $T = \\frac{S}{6}$ for $S$.',
      choices: ['$S = 6T$', '$S = \\frac{T}{6}$', '$S = \\frac{6}{T}$', '$S = T + 6$'],
      answer: 0,
      solution:
        'Here $S$ is being DIVIDED by $6$, so undo it by multiplying both sides by $6$: $S = 6T$. Check with $S = 42$: then $T = 7$, and $6(7) = 42$. ✓ ($S = \\frac{T}{6}$ divides again instead of undoing the division; $S = \\frac{6}{T}$ is the reciprocal; $S = T + 6$ adds, but the $6$ was never added to anything.)',
    },
    {
      q: 'Solve $y = \\frac{3x}{5}$ for $x$.',
      choices: ['$x = \\frac{3y}{5}$', '$x = \\frac{5}{3y}$', '$x = \\frac{5y}{3}$', '$x = 15y$'],
      answer: 2,
      solution:
        'The $x$ has been multiplied by $\\frac{3}{5}$, so undo that by multiplying both sides by the reciprocal $\\frac{5}{3}$: $x = \\frac{5y}{3}$. Check with $x = 10$: then $y = \\frac{30}{5} = 6$, and $\\frac{5 \\cdot 6}{3} = 10$. ✓ ($x = \\frac{3y}{5}$ forgets to flip the fraction; $x = \\frac{5}{3y}$ takes the reciprocal of the whole expression, dragging $y$ to the bottom with it; $x = 15y$ multiplies by BOTH $5$ and $3$ instead of multiplying by $5$ and dividing by $3$.)',
    },
  ],
  // p5 — the wanted variable already has coefficient 1: one subtraction, no division.
  [
    {
      q: 'Solve $5a + b = 30$ for $b$.',
      choices: ['$b = 30 + 5a$', '$b = 5a - 30$', '$b = 30 - 5a$', '$b = 6 - a$'],
      answer: 2,
      solution:
        'Subtract $5a$ from both sides: $b = 30 - 5a$. No division is needed, because $b$ already stands alone with a coefficient of $1$. Check with $a = 4$: then $b = 10$, and $5(4) + 10 = 30$. ✓ ($b = 30 + 5a$ moves the $5a$ across without changing its sign; $b = 5a - 30$ subtracts in the wrong order; $b = 6 - a$ divides the whole equation by $5$, which also divides $b$ — but nothing asked us to shrink $b$.)',
    },
    {
      q: 'Solve $2p + q = -8$ for $q$.',
      choices: ['$q = 2p - 8$', '$q = -8 - 2p$', '$q = 8 - 2p$', '$q = -4 - p$'],
      answer: 1,
      solution:
        'Subtract $2p$ from both sides: $q = -8 - 2p$. Check with $p = 3$: then $q = -14$, and $2(3) + (-14) = -8$. ✓ ($q = 2p - 8$ carries the $2p$ across without flipping its sign; $q = 8 - 2p$ drops the minus sign on the $8$; $q = -4 - p$ divides everything by $2$, which shrinks $q$ as well, even though $q$ had no coefficient to remove.)',
    },
    {
      q: 'Solve $y - 6x = 4$ for $y$.',
      choices: ['$y = 4 - 6x$', '$y = 6x - 4$', '$y = \\frac{4}{6x}$', '$y = 6x + 4$'],
      answer: 3,
      solution:
        'The $6x$ is being subtracted, so add $6x$ to both sides: $y = 4 + 6x$, or $y = 6x + 4$. Check with $x = 2$: then $y = 16$, and $16 - 6(2) = 4$. ✓ ($y = 4 - 6x$ subtracts $6x$ a second time instead of undoing the subtraction; $y = 6x - 4$ moves the $4$ across as well, which it never had to; $y = \\frac{4}{6x}$ divides, but $6x$ was subtracted, not multiplied onto $y$.)',
    },
  ],
  // p6 — two steps: move a term, then divide the WHOLE side.
  [
    {
      q: 'Solve $5x + 2y = 40$ for $y$.',
      choices: ['$y = \\frac{40 - 5x}{2}$', '$y = 40 - 5x$', '$y = 20 - 5x$', '$y = \\frac{40 + 5x}{2}$'],
      answer: 0,
      solution:
        'Two steps. Subtract $5x$: $2y = 40 - 5x$. Then divide the ENTIRE right side by $2$: $y = \\frac{40 - 5x}{2}$. Check with $x = 4$: then $y = \\frac{40 - 20}{2} = 10$, and $5(4) + 2(10) = 40$. ✓ ($y = 40 - 5x$ never divides by $2$; $y = 20 - 5x$ divides only the $40$ — the bar has to cover both terms; $y = \\frac{40 + 5x}{2}$ moves $5x$ across without changing its sign.)',
    },
    {
      q: 'Solve $4a - 3b = 24$ for $b$.',
      choices: ['$b = \\frac{24 - 4a}{3}$', '$b = 4a - 24$', '$b = \\frac{4a - 24}{3}$', '$b = \\frac{4a}{3} - 24$'],
      answer: 2,
      solution:
        'Subtract $4a$ from both sides: $-3b = 24 - 4a$. Now divide by $-3$, which flips the sign of every term: $b = \\frac{24 - 4a}{-3} = \\frac{4a - 24}{3}$. Check with $a = 9$: then $b = \\frac{36 - 24}{3} = 4$, and $4(9) - 3(4) = 36 - 12 = 24$. ✓ ($b = \\frac{24 - 4a}{3}$ divides by $3$ instead of $-3$, so every sign comes out backwards — at $a = 9$ it gives $-4$; $b = 4a - 24$ forgets to divide; $b = \\frac{4a}{3} - 24$ divides only the first term.)',
    },
    {
      q: 'Solve $7m + 4n = 28$ for $m$.',
      choices: ['$m = 28 - 4n$', '$m = \\frac{28 - 4n}{7}$', '$m = 4 - 4n$', '$m = \\frac{28 - 4n}{4}$'],
      answer: 1,
      solution:
        'Subtract $4n$: $7m = 28 - 4n$. Then divide everything by $7$ — the coefficient attached to the variable we want: $m = \\frac{28 - 4n}{7}$. Check with $n = 7$: then $m = \\frac{28 - 28}{7} = 0$, and $7(0) + 4(7) = 28$. ✓ Try $n = -7$ too: $m = \\frac{28 + 28}{7} = 8$, and $7(8) + 4(-7) = 56 - 28 = 28$. ✓ ($m = 28 - 4n$ skips the division; $m = 4 - 4n$ divides only the $28$; $m = \\frac{28 - 4n}{4}$ divides by the coefficient of the OTHER variable.)',
    },
  ],
  // p7 — a formula with a fractional coefficient.
  [
    {
      q: 'The area of a triangle is $A = \\frac{1}{2}bh$. Solve for $b$.',
      choices: ['$b = \\frac{A}{2h}$', '$b = \\frac{2h}{A}$', '$b = \\frac{2A}{h}$', '$b = 2A - h$'],
      answer: 2,
      solution:
        'Multiply both sides by $2$ to clear the fraction: $2A = bh$. Then divide by $h$: $b = \\frac{2A}{h}$. Check with $b = 10$ and $h = 3$: then $A = 15$, and $\\frac{2 \\cdot 15}{3} = 10$. ✓ ($b = \\frac{A}{2h}$ divides by $2$, but the $\\frac{1}{2}$ was already dividing — undoing it means multiplying, so the $2$ belongs on TOP; $b = \\frac{2h}{A}$ is upside down; $b = 2A - h$ subtracts $h$, but $h$ was multiplied.)',
    },
    {
      q: 'The volume of a cone is $V = \\frac{1}{3}Bh$, where $B$ is the base area. Solve for $B$.',
      choices: ['$B = \\frac{3V}{h}$', '$B = \\frac{V}{3h}$', '$B = \\frac{3h}{V}$', '$B = 3V - h$'],
      answer: 0,
      solution:
        'Multiply both sides by $3$: $3V = Bh$. Then divide by $h$: $B = \\frac{3V}{h}$. Check with $B = 12$ and $h = 5$: then $V = \\frac{1}{3}(12)(5) = 20$, and $\\frac{3 \\cdot 20}{5} = 12$. ✓ ($B = \\frac{V}{3h}$ divides by $3$ when it should multiply; $B = \\frac{3h}{V}$ is the reciprocal; $B = 3V - h$ subtracts a factor instead of dividing by it.)',
    },
    {
      q: 'A triangle has area $A = 24$ and base $b = 6$. Using $A = \\frac{1}{2}bh$, what is its height $h$?',
      choices: ['$2$', '$42$', '$4$', '$8$'],
      answer: 3,
      solution:
        'Rearrange first, substitute second. From $A = \\frac{1}{2}bh$ we get $h = \\frac{2A}{b}$, so $h = \\frac{2 \\cdot 24}{6} = \\frac{48}{6} = 8$. Check straight from the original: $\\frac{1}{2}(6)(8) = 24$. ✓ ($2$ comes from $\\frac{A}{2b} = \\frac{24}{12}$, putting the $2$ on the bottom instead of the top; $42$ comes from $2A - b = 48 - 6$, subtracting the base instead of dividing by it; $4$ comes from $\\frac{A}{b} = \\frac{24}{6}$, forgetting the $\\frac{1}{2}$ altogether — and $\\frac{1}{2}(6)(4) = 12$, only half the area.)',
    },
  ],
  // p8 — a two-factor formula, solved for one factor.
  [
    {
      q: 'The cost of $n$ identical tickets is $C = np$, where $p$ is the price of one ticket. Solve for $p$.',
      choices: ['$p = Cn$', '$p = \\frac{C}{n}$', '$p = \\frac{n}{C}$', '$p = C - n$'],
      answer: 1,
      solution:
        'Divide both sides by $n$: $p = \\frac{C}{n}$. It matches common sense — the price of one ticket is the total split among the tickets. Check with $n = 6$ and $p = 9$: then $C = 54$, and $\\frac{54}{6} = 9$. ✓ ($p = Cn$ multiplies where it should divide, which would make one ticket cost more than all of them; $p = \\frac{n}{C}$ is upside down; $p = C - n$ subtracts the count from the cost, which mixes up two different kinds of quantity.)',
    },
    {
      q: 'The work done by a steady push is $W = Fd$, where $F$ is the force and $d$ is the distance. Solve for $d$.',
      choices: ['$d = WF$', '$d = \\frac{F}{W}$', '$d = W - F$', '$d = \\frac{W}{F}$'],
      answer: 3,
      solution:
        'The $F$ is multiplying $d$, so divide both sides by $F$: $d = \\frac{W}{F}$. Check with $F = 8$ and $d = 5$: then $W = 40$, and $\\frac{40}{8} = 5$. ✓ ($d = WF$ multiplies instead of dividing; $d = \\frac{F}{W}$ is the reciprocal of the right answer; $d = W - F$ subtracts a factor, which never undoes a multiplication.)',
    },
    {
      q: 'The distance formula is $d = rt$. Solve for $r$.',
      choices: ['$r = \\frac{d}{t}$', '$r = \\frac{t}{d}$', '$r = dt$', '$r = d - t$'],
      answer: 0,
      solution:
        'Divide both sides by $t$: $r = \\frac{d}{t}$. Speed is distance divided by time — going $150$ miles in $3$ hours is $\\frac{150}{3} = 50$ miles per hour. Check: $50 \\times 3 = 150$. ✓ ($r = \\frac{t}{d}$ is upside down and would report hours per mile; $r = dt$ multiplies instead of dividing; $r = d - t$ subtracts two quantities that are not even measured in the same units.)',
    },
  ],
  // p9 — move a term, THEN divide, so the moved term lands inside the fraction.
  [
    {
      q: 'Solve $y = 4x - 7z$ for $x$.',
      choices: ['$x = \\frac{y - 7z}{4}$', '$x = 4(y + 7z)$', '$x = \\frac{y + 7z}{4}$', '$x = \\frac{y}{4} + 7z$'],
      answer: 2,
      solution:
        'Add $7z$ to both sides so the $x$ term stands alone: $y + 7z = 4x$. Then divide everything by $4$: $x = \\frac{y + 7z}{4}$. Check with $x = 5$, $z = 2$: then $y = 20 - 14 = 6$, and $\\frac{6 + 14}{4} = 5$. ✓ ($x = \\frac{y - 7z}{4}$ forgets that a subtracted term crosses over as an addition; $x = 4(y + 7z)$ multiplies by $4$ instead of dividing; $x = \\frac{y}{4} + 7z$ divides only the $y$, because the $7z$ was added AFTER the division instead of before it.)',
    },
    {
      q: 'Solve $P = 3Q + 2R$ for $Q$.',
      choices: ['$Q = \\frac{P + 2R}{3}$', '$Q = \\frac{P - 2R}{3}$', '$Q = \\frac{P}{3} - 2R$', '$Q = P - 2R$'],
      answer: 1,
      solution:
        'Subtract $2R$ from both sides: $P - 2R = 3Q$. Then divide the whole left side by $3$: $Q = \\frac{P - 2R}{3}$. Check with $Q = 4$, $R = 6$: then $P = 12 + 12 = 24$, and $\\frac{24 - 12}{3} = 4$. ✓ ($Q = \\frac{P + 2R}{3}$ moves $2R$ across without flipping its sign; $Q = \\frac{P}{3} - 2R$ divides only the $P$; $Q = P - 2R$ forgets the division entirely.)',
    },
    {
      q: 'Solve $k = 8m - n$ for $n$.',
      choices: ['$n = k - 8m$', '$n = 8m + k$', '$n = -8m - k$', '$n = 8m - k$'],
      answer: 3,
      solution:
        'The wanted variable is the one being subtracted, so move it first: add $n$ to both sides to get $k + n = 8m$, then subtract $k$: $n = 8m - k$. Check with $m = 3$, $n = 5$: then $k = 24 - 5 = 19$, and $8(3) - 19 = 5$. ✓ ($n = k - 8m$ is the negative of the right answer — it comes from subtracting in the wrong order; $n = 8m + k$ carries the $k$ across without flipping its sign; $n = -8m - k$ flips both signs at once.)',
    },
  ],
  // p10 — clear the fraction FIRST, then peel the remaining terms.
  [
    {
      q: 'Solve $\\frac{a - b}{4} = c$ for $b$.',
      choices: ['$b = a - 4c$', '$b = 4c - a$', '$b = a + 4c$', '$b = \\frac{a}{4} - c$'],
      answer: 0,
      solution:
        'Undo the division first: multiply both sides by $4$ to get $a - b = 4c$. Now add $b$ and subtract $4c$: $a - 4c = b$. Check with $a = 20$, $b = 8$: then $c = \\frac{12}{4} = 3$, and $20 - 4(3) = 8$. ✓ ($b = 4c - a$ subtracts in the wrong order — it is the negative of the answer; $b = a + 4c$ forgets to flip the sign of $4c$ when moving it; $b = \\frac{a}{4} - c$ divides $a$ by $4$ instead of multiplying $c$ by $4$, which is undoing the fraction in exactly the wrong direction.)',
    },
    {
      q: 'Solve $\\frac{2m + n}{5} = p$ for $n$.',
      choices: ['$n = \\frac{p}{5} - 2m$', '$n = 5p + 2m$', '$n = 5p - 2m$', '$n = \\frac{5p - 2m}{2}$'],
      answer: 2,
      solution:
        'Multiply both sides by $5$: $2m + n = 5p$. Then subtract $2m$: $n = 5p - 2m$. Check with $m = 4$, $n = 7$: then $p = \\frac{8 + 7}{5} = 3$, and $5(3) - 2(4) = 15 - 8 = 7$. ✓ ($n = \\frac{p}{5} - 2m$ divides by $5$ when it should multiply; $n = 5p + 2m$ moves the $2m$ across without changing its sign; $n = \\frac{5p - 2m}{2}$ divides by $2$ at the end, but the $2$ belongs to $m$, not to $n$.)',
    },
    {
      q: 'Solve $\\frac{p - 2q}{3} = r$ for $q$.',
      choices: ['$q = \\frac{3r - p}{2}$', '$q = p - 3r$', '$q = \\frac{p + 3r}{2}$', '$q = \\frac{p - 3r}{2}$'],
      answer: 3,
      solution:
        'Clear the fraction: multiply both sides by $3$ to get $p - 2q = 3r$. Move the $2q$ and the $3r$: $p - 3r = 2q$. Finally divide by $2$: $q = \\frac{p - 3r}{2}$. Check with $p = 14$, $q = 4$: then $r = \\frac{14 - 8}{3} = 2$, and $\\frac{14 - 6}{2} = 4$. ✓ ($q = \\frac{3r - p}{2}$ divides by $-2$ worth of sign confusion — it is the negative of the answer; $q = p - 3r$ forgets the final division by $2$; $q = \\frac{p + 3r}{2}$ carries $3r$ across without flipping its sign.)',
    },
  ],
]

const challenge = [
  // 1. Square a binomial by working INSIDE the parentheses first.
  [
    {
      q: 'Evaluate $(3a - b)^2$ when $a = -2$ and $b = 4$.',
      choices: ['$100$', '$-100$', '$20$', '$-20$'],
      answer: 0,
      solution:
        'Parentheses before exponents. Inside: $3(-2) - 4 = -6 - 4 = -10$. Now square: $(-10)^2 = 100$. A negative squared is positive, because $(-10)(-10) = 100$. ($-100$ squares the $10$ but drags the minus sign along for the ride — squaring destroys the sign; $20$ squares each piece on its own as $9a^2 - b^2 = 36 - 16$, but $(u - v)^2$ is not $u^2 - v^2$; $-20$ doubles the inside instead of squaring it, $2(-10)$.)',
    },
    {
      q: 'Evaluate $(a + 2b)^2$ when $a = 5$ and $b = -4$.',
      choices: ['$-9$', '$-6$', '$9$', '$89$'],
      answer: 2,
      solution:
        'Inside first: $5 + 2(-4) = 5 - 8 = -3$. Then square: $(-3)^2 = 9$. ($-9$ keeps the minus sign through the squaring; $-6$ doubles the inside, $2(-3)$, instead of squaring it; $89$ squares each term separately as $a^2 + 4b^2 = 25 + 64$, which throws away the cross term — a quick test shows it cannot be right, since the true answer is only $9$.)',
    },
    {
      q: 'Evaluate $(x - 3y)^2$ when $x = -4$ and $y = -2$.',
      choices: ['$100$', '$4$', '$-20$', '$52$'],
      answer: 1,
      solution:
        'Both variables are negative, so substitute with parentheses: $(-4) - 3(-2) = -4 + 6 = 2$. Then square: $2^2 = 4$. Notice that subtracting $3y$ ADDS $6$ here, because $y$ itself is negative. ($100$ comes from treating $-3y$ as $-6$, forgetting that $y = -2$ makes it $+6$; that would square $-10$; $-20$ squares each term separately as $x^2 - 9y^2 = 16 - 36$; $52$ does $x^2 + 9y^2 = 16 + 36$.)',
    },
  ],
  // 2. Two families of terms that look alike but are not.
  [
    {
      q: 'Simplify $5a^2b + 4ab^2 - 2a^2b - 6ab^2$.',
      choices: ['$3a^2b + 2ab^2$', '$3a^2b - 2ab^2$', '$a^2b^2$', '$7a^2b - 2ab^2$'],
      answer: 1,
      solution:
        'Sort into families. The $a^2b$ terms: $5 - 2 = 3$, giving $3a^2b$. The $ab^2$ terms: $4 - 6 = -2$, giving $-2ab^2$. The two families cannot merge, so the answer is $3a^2b - 2ab^2$. Test $a = 2$, $b = 3$: the original is $60 + 72 - 24 - 108 = 0$, and $3(4)(3) - 2(2)(9) = 36 - 36 = 0$. ✓ ($3a^2b + 2ab^2$ gets $4 - 6$ backwards; $a^2b^2$ merges all four terms into one, but $a^2b$ and $ab^2$ put the square on different letters; $7a^2b - 2ab^2$ adds $5 + 2$ instead of subtracting.)',
    },
    {
      q: 'Simplify $7x^2y - 3xy^2 - 2x^2y + 5xy^2$.',
      choices: ['$5x^2y - 2xy^2$', '$9x^2y + 2xy^2$', '$7x^2y^2$', '$5x^2y + 2xy^2$'],
      answer: 3,
      solution:
        'The $x^2y$ family gives $7 - 2 = 5$; the $xy^2$ family gives $-3 + 5 = 2$. So the answer is $5x^2y + 2xy^2$. Test $x = 3$, $y = -1$: the original is $7(9)(-1) - 3(3)(1) - 2(9)(-1) + 5(3)(1) = -63 - 9 + 18 + 15 = -39$, and $5(9)(-1) + 2(3)(1) = -45 + 6 = -39$. ✓ ($5x^2y - 2xy^2$ reads $-3 + 5$ as $-2$; $9x^2y + 2xy^2$ adds $7 + 2$ instead of subtracting; $7x^2y^2$ throws all four terms into one pile.)',
    },
    {
      q: 'Simplify $2m^2n - 5mn^2 + mn^2 - 6m^2n + 4m^2n$.',
      choices: ['$12m^2n - 4mn^2$', '$-4m^2n$', '$-4mn^2$', '$-4m^2n - 4mn^2$'],
      answer: 2,
      solution:
        'Five terms, two families. The $m^2n$ coefficients are $2$, $-6$ and $4$, and $2 - 6 + 4 = 0$ — that whole family cancels itself out and vanishes. The $mn^2$ coefficients are $-5$ and $1$, giving $-4mn^2$. So the answer is just $-4mn^2$. Test $m = 2$, $n = 3$: the original is $24 - 90 + 18 - 72 + 48 = -72$, and $-4(2)(9) = -72$. ✓ ($12m^2n - 4mn^2$ adds $2 + 6 + 4$, ignoring the minus on the $6$; $-4m^2n$ attaches the surviving $-4$ to the wrong family; $-4m^2n - 4mn^2$ assumes both families ended at $-4$.)',
    },
  ],
  // 3. Four products, none of them like terms.
  [
    {
      q: 'Expand $(a + b)(a + 5)$.',
      choices: ['$a^2 + 5a + ab + 5b$', '$a^2 + 5b$', '$a^2 + 6ab + 5b$', '$a^2 + ab + 5b$'],
      answer: 0,
      solution:
        'Each term of the first bracket meets each term of the second — four products in all: $a \\cdot a = a^2$, $a \\cdot 5 = 5a$, $b \\cdot a = ab$, $b \\cdot 5 = 5b$. None of these four are like terms ($5a$ has one letter, $ab$ has two), so nothing combines: $a^2 + 5a + ab + 5b$. Test $a = 2$, $b = 3$: the original is $(5)(7) = 35$, and $4 + 10 + 6 + 15 = 35$. ✓ ($a^2 + 5b$ multiplies only the firsts and only the lasts, missing half the products; $a^2 + 6ab + 5b$ merges $5a$ and $ab$ into $6ab$, but they are different families; $a^2 + ab + 5b$ simply loses the $5a$.)',
    },
    {
      q: 'Expand $(2x + 3)(y + 4)$.',
      choices: ['$2xy + 12$', '$2xy + 8x + 3y + 7$', '$2xy + 8x + 3y + 12$', '$2xy + 6x + 4y + 12$'],
      answer: 2,
      solution:
        'Four products, coefficients included: $2x \\cdot y = 2xy$, $2x \\cdot 4 = 8x$, $3 \\cdot y = 3y$, $3 \\cdot 4 = 12$. Together: $2xy + 8x + 3y + 12$. Test $x = 1$, $y = 2$: the original is $(5)(6) = 30$, and $4 + 8 + 6 + 12 = 30$. ✓ ($2xy + 12$ keeps only the firsts and the lasts; $2xy + 8x + 3y + 7$ ADDS $3 + 4$ instead of multiplying them; $2xy + 6x + 4y + 12$ pairs each number with the wrong letter — the $4$ lives with $2x$ and the $3$ lives with $y$, not the other way round.)',
    },
    {
      q: 'Expand $(p + 7)(p + q)$.',
      choices: ['$p^2 + 7q$', '$p^2 + pq + 7p + 7q$', '$p^2 + 8pq + 7q$', '$p^2 + pq + 7q$'],
      answer: 1,
      solution:
        'The four products are $p \\cdot p = p^2$, $p \\cdot q = pq$, $7 \\cdot p = 7p$, $7 \\cdot q = 7q$. The terms $pq$ and $7p$ are NOT like terms, so all four stay: $p^2 + pq + 7p + 7q$. Test $p = 2$, $q = 3$: the original is $(9)(5) = 45$, and $4 + 6 + 14 + 21 = 45$. ✓ ($p^2 + 7q$ keeps only the outer pair of products; $p^2 + 8pq + 7q$ merges $pq$ and $7p$ into $8pq$; $p^2 + pq + 7q$ drops the $7p$ entirely.)',
    },
  ],
  // 4. Pull out the GREATEST common factor and check by expanding.
  [
    {
      q: 'Factor $15x^2y - 20xy$.',
      choices: ['$5xy(3x - 4y)$', '$5xy(3x - 4)$', '$5xy(3xy - 4)$', '$5y(3x - 4)$'],
      answer: 1,
      solution:
        'The coefficients $15$ and $20$ share a $5$; both terms carry at least one $x$ and one $y$. So the greatest common factor is $5xy$. Dividing: $\\frac{15x^2y}{5xy} = 3x$ and $\\frac{20xy}{5xy} = 4$. That gives $5xy(3x - 4)$. Check by expanding: $5xy \\cdot 3x = 15x^2y$ and $5xy \\cdot 4 = 20xy$. ✓ ($5xy(3x - 4y)$ expands to $15x^2y - 20xy^2$, an extra $y$ too many; $5xy(3xy - 4)$ expands to $15x^2y^2 - 20xy$; $5y(3x - 4)$ expands to $15xy - 20y$, since it never took the $x$ out.)',
    },
    {
      q: 'Factor $8m^3n + 12m^2n^2$.',
      choices: ['$4m^2n(2m + 3)$', '$4mn(2m + 3n)$', '$4m^2n(2 + 3n)$', '$4m^2n(2m + 3n)$'],
      answer: 3,
      solution:
        'The numbers share a $4$. Both terms have at least two $m$s and at least one $n$, so the greatest common factor is $4m^2n$. Dividing: $\\frac{8m^3n}{4m^2n} = 2m$ and $\\frac{12m^2n^2}{4m^2n} = 3n$. The factored form is $4m^2n(2m + 3n)$. Check: $4m^2n \\cdot 2m = 8m^3n$ and $4m^2n \\cdot 3n = 12m^2n^2$. ✓ ($4m^2n(2m + 3)$ expands to $8m^3n + 12m^2n$, one $n$ short; $4mn(2m + 3n)$ expands to $8m^2n + 12mn^2$; $4m^2n(2 + 3n)$ expands to $8m^2n + 12m^2n^2$, having left an $m$ behind in the first term.)',
    },
    {
      q: 'Factor $9a^2b^2 - 6ab$.',
      choices: ['$3ab(3a - 2b)$', '$3ab(3ab + 2)$', '$3ab(3ab - 2)$', '$3ab(3ab - 6)$'],
      answer: 2,
      solution:
        'The numbers share a $3$; both terms carry at least one $a$ and one $b$. So pull out $3ab$: $\\frac{9a^2b^2}{3ab} = 3ab$ and $\\frac{6ab}{3ab} = 2$. The answer is $3ab(3ab - 2)$. Check by expanding: $3ab \\cdot 3ab = 9a^2b^2$ and $3ab \\cdot 2 = 6ab$. ✓ ($3ab(3a - 2b)$ expands to $9a^2b - 6ab^2$; $3ab(3ab + 2)$ flips the sign, expanding to $9a^2b^2 + 6ab$; $3ab(3ab - 6)$ divided the second term by $ab$ only and forgot the $3$, expanding to $9a^2b^2 - 18ab$.)',
    },
  ],
  // 5. Cancel numbers and letters in a monomial fraction.
  [
    {
      q: 'Simplify $\\frac{15a^3b}{20a^2b}$.',
      choices: ['$\\frac{3a}{4}$', '$\\frac{3ab}{4}$', '$\\frac{3a}{4b}$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Cancel a $5$ from the numbers. The $a$ count is $3$ above and $2$ below, so one $a$ survives on top; the $b$ appears once on each side, so it cancels completely: $\\frac{15a^3b}{20a^2b} = \\frac{3a}{4}$. Check with $a = 2$, $b = -3$: the original is $\\frac{15 \\cdot 8 \\cdot (-3)}{20 \\cdot 4 \\cdot (-3)} = \\frac{-360}{-240} = \\frac{3}{2}$, and $\\frac{3 \\cdot 2}{4} = \\frac{3}{2}$. ✓ ($\\frac{3ab}{4}$ keeps a $b$ that cancelled; $\\frac{3a}{4b}$ strands one below; $\\frac{3}{4}$ cancels both $a$s even though the top had one more.)',
    },
    {
      q: 'Simplify $\\frac{14xy^3}{21xy}$.',
      choices: ['$\\frac{2y^3}{3}$', '$\\frac{2xy^2}{3}$', '$\\frac{2}{3y^2}$', '$\\frac{2y^2}{3}$'],
      answer: 3,
      solution:
        'Cancel a $7$ from the numbers. The $x$ appears once on each side and disappears; the $y$ count is $3$ above and $1$ below, so two $y$s survive on top: $\\frac{14xy^3}{21xy} = \\frac{2y^2}{3}$. Check with $x = 5$, $y = -2$: the original is $\\frac{14 \\cdot 5 \\cdot (-8)}{21 \\cdot 5 \\cdot (-2)} = \\frac{-560}{-210} = \\frac{8}{3}$, and $\\frac{2 \\cdot 4}{3} = \\frac{8}{3}$. ✓ ($\\frac{2y^3}{3}$ cancels the $x$ but forgets that one $y$ also cancels; $\\frac{2xy^2}{3}$ does the reverse; $\\frac{2}{3y^2}$ puts the surviving $y$s on the wrong side of the bar.)',
    },
    {
      q: 'Simplify $\\frac{24m^2n^3}{18m^3n}$.',
      choices: ['$\\frac{4mn^2}{3}$', '$\\frac{4n^2}{3m}$', '$\\frac{4m}{3n^2}$', '$\\frac{4}{3}$'],
      answer: 1,
      solution:
        'Cancel a $6$ from the numbers, leaving $\\frac{4}{3}$. The $m$ count is $2$ above and $3$ below, so one $m$ survives BELOW. The $n$ count is $3$ above and $1$ below, so two $n$s survive ABOVE: $\\frac{24m^2n^3}{18m^3n} = \\frac{4n^2}{3m}$. Check with $m = -2$, $n = 3$: the original is $\\frac{24 \\cdot 4 \\cdot 27}{18 \\cdot (-8) \\cdot 3} = \\frac{2592}{-432} = -6$, and $\\frac{4 \\cdot 9}{3(-2)} = \\frac{36}{-6} = -6$. ✓ ($\\frac{4mn^2}{3}$ lifts the leftover $m$ to the top, but the bottom had more $m$s; $\\frac{4m}{3n^2}$ swaps both survivors; $\\frac{4}{3}$ cancels every letter, which needs matching counts.)',
    },
  ],
  // 6. Multiply two fractions; the variable cancels out completely.
  [
    {
      q: 'Simplify $\\frac{3x}{8} \\cdot \\frac{4}{9x}$.',
      choices: ['$\\frac{x}{6}$', '$6$', '$\\frac{1}{6}$', '$\\frac{27x^2}{32}$'],
      answer: 2,
      solution:
        'Multiply straight across: $\\frac{3x \\cdot 4}{8 \\cdot 9x} = \\frac{12x}{72x}$. Top and bottom each hold one $x$, so it cancels, and $\\frac{12}{72} = \\frac{1}{6}$. Check with $x = 4$: the original is $\\frac{12}{8} \\cdot \\frac{4}{36} = \\frac{48}{288} = \\frac{1}{6}$. ✓ ($\\frac{x}{6}$ lets the $x$ survive; $6$ divides $72$ by $12$ instead of $12$ by $72$, turning the answer upside down; $\\frac{27x^2}{32}$ flips the second fraction, which is the rule for dividing, not multiplying.)',
    },
    {
      q: 'Simplify $\\frac{5m}{6} \\cdot \\frac{9}{10m}$.',
      choices: ['$\\frac{3}{4}$', '$\\frac{3m}{4}$', '$\\frac{4}{3}$', '$\\frac{25m^2}{27}$'],
      answer: 0,
      solution:
        'Across the top and across the bottom: $\\frac{5m \\cdot 9}{6 \\cdot 10m} = \\frac{45m}{60m}$. The $m$ cancels and $\\frac{45}{60} = \\frac{3}{4}$. Check with $m = -2$: the original is $\\frac{-10}{6} \\cdot \\frac{9}{-20} = \\frac{-90}{-120} = \\frac{3}{4}$. ✓ ($\\frac{3m}{4}$ keeps the $m$; $\\frac{4}{3}$ is the reciprocal, from dividing the wrong way round; $\\frac{25m^2}{27}$ flips the second fraction, giving $\\frac{5m}{6} \\cdot \\frac{10m}{9}$.)',
    },
    {
      q: 'Simplify $\\frac{4a}{7b} \\cdot \\frac{21b}{8}$.',
      choices: ['$\\frac{3ab}{2}$', '$\\frac{3a}{2b}$', '$\\frac{32a}{147b^2}$', '$\\frac{3a}{2}$'],
      answer: 3,
      solution:
        'Multiply across: $\\frac{4a \\cdot 21b}{7b \\cdot 8} = \\frac{84ab}{56b}$. The $b$ appears once above and once below, so it cancels, and $\\frac{84}{56} = \\frac{3}{2}$, leaving $\\frac{3a}{2}$. Check with $a = 5$, $b = -1$: the original is $\\frac{20}{-7} \\cdot \\frac{-21}{8} = \\frac{-420}{-56} = \\frac{15}{2}$, and $\\frac{3 \\cdot 5}{2} = \\frac{15}{2}$. ✓ ($\\frac{3ab}{2}$ keeps a $b$ on top; $\\frac{3a}{2b}$ keeps one on the bottom; $\\frac{32a}{147b^2}$ flips the second fraction as if the problem were a division.)',
    },
  ],
  // 7. Signed arithmetic across several products.
  [
    {
      q: 'If $a = -3$, $b = 4$, and $c = -2$, evaluate $ab + bc + ca$.',
      choices: ['$26$', '$-26$', '$24$', '$-14$'],
      answer: 3,
      solution:
        'One product at a time, signs and all: $ab = (-3)(4) = -12$; $bc = (4)(-2) = -8$; $ca = (-2)(-3) = +6$, because a negative times a negative is positive. Adding: $-12 - 8 + 6 = -14$. ($26$ drops every minus sign and computes $12 + 8 + 6$; $-26$ gets $ca$ wrong, making it $-6$; $24$ is the product $abc = (-3)(4)(-2)$, not the sum of the three pairs.)',
    },
    {
      q: 'If $x = 5$, $y = -2$, and $z = -1$, evaluate $xy - yz + zx$.',
      choices: ['$-7$', '$-17$', '$13$', '$-13$'],
      answer: 1,
      solution:
        'Compute each product first: $xy = (5)(-2) = -10$; $yz = (-2)(-1) = +2$, so $-yz = -2$; $zx = (-1)(5) = -5$. Now add: $-10 - 2 - 5 = -17$. ($-7$ makes $zx$ positive, using $-10 - 2 + 5$; $13$ ignores every minus sign, computing $10 - 2 + 5$; $-13$ takes $yz = -2$, so the middle term becomes $+2$ instead of $-2$ — that sign flip is the whole trap.)',
    },
    {
      q: 'If $p = -2$, $q = -3$, and $r = 5$, evaluate $p^2q - qr + pr$.',
      choices: ['$-37$', '$17$', '$-7$', '$7$'],
      answer: 2,
      solution:
        'Exponent first: $p^2 = (-2)^2 = 4$. So $p^2q = (4)(-3) = -12$. Next $qr = (-3)(5) = -15$, and subtracting it gives $-(-15) = +15$. Finally $pr = (-2)(5) = -10$. Adding up: $-12 + 15 - 10 = -7$. ($-37$ subtracts $15$ instead of adding it, forgetting that $qr$ is itself negative; $17$ computes $(-2)^2$ as $-4$, but squaring a negative gives a positive; $7$ ignores all the minus signs and computes $12 - 15 + 10$.)',
    },
  ],
  // 8. Dividing by a NEGATIVE coefficient flips every sign.
  [
    {
      q: 'Solve $6x - 3y = 18$ for $y$.',
      choices: ['$y = 2x - 6$', '$y = 6 - 2x$', '$y = 2x + 6$', '$y = 6x - 6$'],
      answer: 0,
      solution:
        'Subtract $6x$ from both sides: $-3y = 18 - 6x$. Now divide by $-3$, and every sign on the right flips: $y = \\frac{18 - 6x}{-3} = -6 + 2x = 2x - 6$. Check with $x = 5$: the formula gives $y = 4$, and $6(5) - 3(4) = 30 - 12 = 18$. ✓ ($y = 6 - 2x$ divides by $+3$ and forgets the sign flip; $y = 2x + 6$ flips the $x$ term but not the constant; $y = 6x - 6$ divides the $18$ by $3$ but leaves the $6x$ undivided.)',
    },
    {
      q: 'Solve $10a - 5b = 20$ for $a$.',
      choices: ['$a = \\frac{4 - b}{2}$', '$a = 2 + 5b$', '$a = \\frac{4 + b}{2}$', '$a = 4 + b$'],
      answer: 2,
      solution:
        'This time we want the variable with the POSITIVE coefficient, so no sign flip is needed at the end. Add $5b$ to both sides: $10a = 20 + 5b$. Divide everything by $10$: $a = \\frac{20 + 5b}{10} = \\frac{4 + b}{2}$. Check with $b = 6$: the formula gives $a = 5$, and $10(5) - 5(6) = 50 - 30 = 20$. ✓ ($a = \\frac{4 - b}{2}$ moves the $-5b$ across without flipping its sign; $a = 2 + 5b$ divides only the $20$; $a = 4 + b$ divides by $5$ instead of $10$.)',
    },
    {
      q: 'Solve $12 - 3m = 4n$ for $m$.',
      choices: ['$m = 4 - 4n$', '$m = \\frac{12 - 4n}{3}$', '$m = \\frac{4n - 12}{3}$', '$m = 4n - 4$'],
      answer: 1,
      solution:
        'Subtract $12$ from both sides: $-3m = 4n - 12$. Divide by $-3$, flipping every sign: $m = \\frac{4n - 12}{-3} = \\frac{12 - 4n}{3}$. Check with $n = 3$: the formula gives $m = 0$, and $12 - 3(0) = 12 = 4(3)$. ✓ Try $n = -3$: $m = \\frac{12 + 12}{3} = 8$, and $12 - 24 = -12 = 4(-3)$. ✓ ($m = 4 - 4n$ divides only the $12$ by $3$; $m = \\frac{4n - 12}{3}$ divides by $3$ instead of $-3$, so every sign is backwards; $m = 4n - 4$ makes both of those slips at once.)',
    },
  ],
  // 9. Rearranging the rectangle perimeter formula.
  [
    {
      q: 'The perimeter of a rectangle is $P = 2l + 2w$. Solve for $l$.',
      choices: ['$l = P - 2w$', '$l = \\frac{P + 2w}{2}$', '$l = \\frac{P - 2w}{2}$', '$l = \\frac{P}{2} - 2w$'],
      answer: 2,
      solution:
        'Subtract $2w$ from both sides: $P - 2w = 2l$. Then divide the WHOLE left side by $2$: $l = \\frac{P - 2w}{2}$. Check with $l = 7$, $w = 3$: then $P = 14 + 6 = 20$, and $\\frac{20 - 6}{2} = 7$. ✓ ($l = P - 2w$ never divides by $2$; $l = \\frac{P + 2w}{2}$ moves $2w$ across without flipping its sign; $l = \\frac{P}{2} - 2w$ divides only the $P$, so the $2w$ escapes the division.)',
    },
    {
      q: 'A rectangle\'s perimeter can also be written $P = 2(l + w)$. Solve for $w$.',
      choices: ['$w = \\frac{P}{2} - l$', '$w = P - 2l$', '$w = \\frac{P - l}{2}$', '$w = \\frac{P}{2} + l$'],
      answer: 0,
      solution:
        'The whole bracket is multiplied by $2$, so divide both sides by $2$ first: $\\frac{P}{2} = l + w$. Then subtract $l$: $w = \\frac{P}{2} - l$. Check with $l = 9$, $w = 4$: then $P = 2(13) = 26$, and $\\frac{26}{2} - 9 = 13 - 9 = 4$. ✓ ($w = P - 2l$ subtracts before dividing and then never divides; $w = \\frac{P - l}{2}$ divides the $l$ by $2$ as well, but the $l$ was already outside the division; $w = \\frac{P}{2} + l$ adds where it should subtract.)',
    },
    {
      q: 'A rectangle has perimeter $P = 34$ and length $l = 12$. Using $P = 2l + 2w$, what is its width $w$?',
      choices: ['$10$', '$22$', '$11$', '$5$'],
      answer: 3,
      solution:
        'Rearrange first: $w = \\frac{P - 2l}{2}$. Now substitute: $w = \\frac{34 - 24}{2} = \\frac{10}{2} = 5$. Check straight from the original: $2(12) + 2(5) = 24 + 10 = 34$. ✓ ($10$ stops at $P - 2l$ without dividing by $2$; $22$ subtracts $l$ instead of $2l$ and skips the division, $34 - 12$; $11$ computes $\\frac{34 - 12}{2}$, forgetting to double the length — and $2(12) + 2(11) = 46$, far too big.)',
    },
  ],
  // 10. Split a fraction term by term; cancel only what is a factor of the whole term.
  [
    {
      q: 'Which expression is equal to $\\frac{a + b}{b}$?',
      choices: ['$\\frac{a}{b} + 1$', '$a + 1$', '$\\frac{a}{b}$', '$\\frac{a + 1}{b}$'],
      answer: 0,
      solution:
        'Split the fraction term by term: $\\frac{a + b}{b} = \\frac{a}{b} + \\frac{b}{b} = \\frac{a}{b} + 1$. The $b$s cancel only in the second piece, where $b$ is a factor of the whole term. Test $a = 6$, $b = 3$: the original is $\\frac{9}{3} = 3$, and $\\frac{6}{3} + 1 = 3$. ✓ ($a + 1$ cancels the $b$ across the plus sign, which is never allowed — at $a = 6$, $b = 3$ it gives $7$; $\\frac{a}{b}$ cancels the second piece away instead of turning it into $1$; $\\frac{a + 1}{b}$ shrinks the top $b$ to a $1$ but leaves it inside the numerator, so it gets divided a second time.)',
    },
    {
      q: 'Which expression is equal to $\\frac{3m - n}{m}$?',
      choices: ['$3 - n$', '$\\frac{3 - n}{m}$', '$3m - \\frac{n}{m}$', '$3 - \\frac{n}{m}$'],
      answer: 3,
      solution:
        'Divide each term on top by $m$: $\\frac{3m}{m} - \\frac{n}{m} = 3 - \\frac{n}{m}$. The $m$ cancels completely in the first piece because it is a factor there; in the second piece $n$ has no $m$ to cancel with. Test $m = 2$, $n = 4$: the original is $\\frac{6 - 4}{2} = 1$, and $3 - \\frac{4}{2} = 1$. ✓ ($3 - n$ cancels the $m$ out of the second term as well; $\\frac{3 - n}{m}$ divides the first term twice, once by cancelling and once by the bar; $3m - \\frac{n}{m}$ divides only the second term.)',
    },
    {
      q: 'Which expression is equal to $\\frac{2x + 6y}{2y}$?',
      choices: ['$x + 3$', '$\\frac{x}{y} + 3$', '$\\frac{x}{y} + 6$', '$\\frac{2x}{y} + 3$'],
      answer: 1,
      solution:
        'Split first, simplify second: $\\frac{2x + 6y}{2y} = \\frac{2x}{2y} + \\frac{6y}{2y}$. The first piece loses its $2$s to give $\\frac{x}{y}$; the second loses both the $y$ and a factor of $2$ to give $3$. So the answer is $\\frac{x}{y} + 3$. Test $x = 4$, $y = 2$: the original is $\\frac{8 + 12}{4} = 5$, and $\\frac{4}{2} + 3 = 5$. ✓ ($x + 3$ cancels the $y$ out of the first term too; $\\frac{x}{y} + 6$ cancels the $y$ in the second term but forgets the $2$; $\\frac{2x}{y} + 3$ cancels the $y$ but not the $2$ in the first term.)',
    },
  ],
  // 11. Distribute across two brackets, one of them subtracted.
  [
    {
      q: 'Simplify $4(2a + 3b) - 2(a - 5b)$.',
      choices: ['$6a + 22b$', '$6a + 2b$', '$10a + 2b$', '$6a + 12b$'],
      answer: 0,
      solution:
        'Distribute both brackets, keeping the minus glued to the $2$: $4(2a + 3b) = 8a + 12b$, and $-2(a - 5b) = -2a + 10b$, because $-2 \\times -5b = +10b$. Combine: $8a - 2a = 6a$ and $12b + 10b = 22b$, giving $6a + 22b$. Test $a = 1$, $b = 1$: the original is $4(5) - 2(-4) = 20 + 8 = 28$, and $6 + 22 = 28$. ✓ ($6a + 2b$ writes $-2a - 10b$, forgetting the sign flip on $-5b$; $10a + 2b$ treats the second bracket as ADDED, $+2(a - 5b)$; $6a + 12b$ subtracts the $2a$ but loses the second bracket\'s $b$ term completely.)',
    },
    {
      q: 'Simplify $5(x - 2y) - 3(2x - y)$.',
      choices: ['$-x - 13y$', '$11x - 13y$', '$-x - 7y$', '$-x - 9y$'],
      answer: 2,
      solution:
        'Distribute: $5(x - 2y) = 5x - 10y$, and $-3(2x - y) = -6x + 3y$, since $-3 \\times -y = +3y$. Combine: $5x - 6x = -x$ and $-10y + 3y = -7y$, giving $-x - 7y$. Test $x = 2$, $y = 1$: the original is $5(0) - 3(3) = -9$, and $-2 - 7 = -9$. ✓ ($-x - 13y$ misses the sign flip, writing $-6x - 3y$; $11x - 13y$ treats the second bracket as added; $-x - 9y$ distributes the $3$ to $2x$ but not to $-y$, leaving $+y$ instead of $+3y$.)',
    },
    {
      q: 'Simplify $-2(3m - n) + 4(m - 2n)$.',
      choices: ['$-2m - 7n$', '$-2m - 6n$', '$-2m - 10n$', '$-2m + 10n$'],
      answer: 1,
      solution:
        'Two distributions, each with a sign to watch: $-2(3m - n) = -6m + 2n$, and $4(m - 2n) = 4m - 8n$. Combine: $-6m + 4m = -2m$ and $2n - 8n = -6n$, giving $-2m - 6n$. Test $m = 1$, $n = -1$: the original is $-2(4) + 4(3) = -8 + 12 = 4$, and $-2 + 6 = 4$. ✓ ($-2m - 7n$ distributes the $-2$ only to the $3m$, leaving $+n$ instead of $+2n$; $-2m - 10n$ writes $-2 \\times -n = -2n$, missing that two negatives make a positive; $-2m + 10n$ makes the opposite slip inside the second bracket, writing $+8n$.)',
    },
  ],
  // 12. Undo a fractional coefficient AND a constant, in reverse order.
  [
    {
      q: 'The water level in a tank is $L = \\frac{2}{3}t + 5$, where $t$ is the time in minutes. Solve for $t$.',
      choices: ['$t = \\frac{2}{3}(L - 5)$', '$t = \\frac{3}{2}L - 5$', '$t = \\frac{3}{2}L + 5$', '$t = \\frac{3}{2}(L - 5)$'],
      answer: 3,
      solution:
        'Undo the operations in reverse order. The $+5$ happened last, so subtract it first: $L - 5 = \\frac{2}{3}t$. Then multiply both sides by the reciprocal $\\frac{3}{2}$: $t = \\frac{3}{2}(L - 5)$. Check with $t = 9$: then $L = 6 + 5 = 11$, and $\\frac{3}{2}(11 - 5) = \\frac{3}{2}(6) = 9$. ✓ ($t = \\frac{2}{3}(L - 5)$ multiplies by the same fraction instead of flipping it; $t = \\frac{3}{2}L - 5$ scales before subtracting, so the $5$ never gets scaled; $t = \\frac{3}{2}L + 5$ adds where it should subtract.)',
    },
    {
      q: 'A ride costs $C = \\frac{5}{2}m + 3$ dollars for $m$ miles. Solve for $m$.',
      choices: ['$m = \\frac{5}{2}(C - 3)$', '$m = \\frac{2}{5}(C - 3)$', '$m = \\frac{2}{5}C - 3$', '$m = \\frac{2}{5}C + 3$'],
      answer: 1,
      solution:
        'Subtract the flat $3$ first, since it was added last: $C - 3 = \\frac{5}{2}m$. Then multiply by the reciprocal $\\frac{2}{5}$: $m = \\frac{2}{5}(C - 3)$. Check with $m = 4$: then $C = 10 + 3 = 13$, and $\\frac{2}{5}(13 - 3) = \\frac{2}{5}(10) = 4$. ✓ ($m = \\frac{5}{2}(C - 3)$ forgets to flip the fraction; $m = \\frac{2}{5}C - 3$ scales $C$ before removing the $3$, so the $3$ is never scaled; $m = \\frac{2}{5}C + 3$ adds instead of subtracting.)',
    },
    {
      q: 'The Celsius formula is $C = \\frac{5}{9}(F - 32)$. Solve for $F$.',
      choices: ['$F = \\frac{9}{5}C - 32$', '$F = \\frac{5}{9}C + 32$', '$F = \\frac{9}{5}C + 32$', '$F = \\frac{9}{5}(C + 32)$'],
      answer: 2,
      solution:
        'This runs the familiar conversion backwards. Multiply both sides by the reciprocal $\\frac{9}{5}$ to free the bracket: $\\frac{9}{5}C = F - 32$. Then add $32$: $F = \\frac{9}{5}C + 32$. Check with $C = 100$: the formula gives $F = 180 + 32 = 212$, which is indeed boiling point. ✓ ($F = \\frac{9}{5}C - 32$ subtracts $32$ instead of adding it, and would report $148$ for boiling water; $F = \\frac{5}{9}C + 32$ forgets to flip the fraction; $F = \\frac{9}{5}(C + 32)$ adds the $32$ before scaling, but the $-32$ sat INSIDE the bracket, so it must come back out after the scaling.)',
    },
  ],
]

const worksheet = [
  // 1. Substitute two values, one of them negative.
  [
    {
      q: 'Evaluate $5a + 2b$ when $a = -3$ and $b = 4$.',
      answer: '$-7$',
      solution:
        'Substitute with parentheses so the signs survive: $5(-3) + 2(4) = -15 + 8 = -7$. Adding $8$ to $-15$ moves you toward zero but not past it, so the answer stays negative.',
    },
    {
      q: 'Evaluate $4m - 3n$ when $m = -2$ and $n = -5$.',
      answer: '$7$',
      solution:
        'Both values are negative, so write them in parentheses: $4(-2) - 3(-5) = -8 - (-15) = -8 + 15 = 7$. Subtracting $-15$ is the same as adding $15$, which is why the answer comes out positive.',
    },
    {
      q: 'Evaluate $3p + 6q$ when $p = 7$ and $q = -4$.',
      answer: '$-3$',
      solution:
        'Substitute: $3(7) + 6(-4) = 21 - 24 = -3$. The second term is bigger in size than the first, so the sum lands just below zero.',
    },
  ],
  // 2. Combine one family; the loner has no partner.
  [
    {
      q: 'Simplify $9xy - 3xy + 5y$.',
      answer: '$6xy + 5y$',
      solution:
        'The $xy$ terms are like terms: $9 - 3 = 6$, giving $6xy$. The $5y$ has no partner, because $xy$ and $y$ are different families, so it comes along unchanged: $6xy + 5y$. Check with $x = 2$, $y = 3$: the original is $54 - 18 + 15 = 51$, and $6(2)(3) + 15 = 36 + 15 = 51$. ✓',
    },
    {
      q: 'Simplify $2mn + 6m - 5mn$.',
      answer: '$6m - 3mn$',
      solution:
        'Only the $mn$ terms can join: $2 - 5 = -3$, giving $-3mn$. The $6m$ stands alone. Writing the positive term first: $6m - 3mn$. Check with $m = 4$, $n = -1$: the original is $-8 + 24 + 20 = 36$, and $24 - 3(4)(-1) = 24 + 12 = 36$. ✓',
    },
    {
      q: 'Simplify $8pq + 3p - pq - 5p$.',
      answer: '$7pq - 2p$',
      solution:
        'Two families this time. The $pq$ terms: $8 - 1 = 7$, since $-pq$ means a coefficient of $-1$. The $p$ terms: $3 - 5 = -2$. So the answer is $7pq - 2p$. Check with $p = 3$, $q = 2$: the original is $48 + 9 - 6 - 15 = 36$, and $7(3)(2) - 2(3) = 42 - 6 = 36$. ✓',
    },
  ],
  // 3. Distribute a monomial across two terms.
  [
    {
      q: 'Expand $5a(3b - 2c)$.',
      answer: '$15ab - 10ac$',
      solution:
        'The $5a$ multiplies every term inside: $5a \\cdot 3b = 15ab$ and $5a \\cdot (-2c) = -10ac$. So the expansion is $15ab - 10ac$. Check with $a = 2$, $b = 1$, $c = 3$: the original is $10(3 - 6) = -30$, and $30 - 60 = -30$. ✓',
    },
    {
      q: 'Expand $-3m(4n + 5p)$.',
      answer: '$-12mn - 15mp$',
      solution:
        'The minus sign belongs to the $3m$ and travels to both terms: $-3m \\cdot 4n = -12mn$ and $-3m \\cdot 5p = -15mp$. Both products are negative, so the answer is $-12mn - 15mp$. Check with $m = 1$, $n = 2$, $p = -1$: the original is $-3(8 - 5) = -9$, and $-24 + 15 = -9$. ✓',
    },
    {
      q: 'Expand $2xy(3x - 7z)$.',
      answer: '$6x^2y - 14xyz$',
      solution:
        'The factor outside carries two letters, so track both: $2xy \\cdot 3x = 6x^2y$, because $x \\cdot x = x^2$, and $2xy \\cdot (-7z) = -14xyz$. The answer is $6x^2y - 14xyz$. Check with $x = 2$, $y = 3$, $z = 1$: the original is $12(6 - 7) = -12$, and $6(4)(3) - 14(2)(3)(1) = 72 - 84 = -12$. ✓',
    },
  ],
  // 4. Pull out the greatest common factor, then expand to check.
  [
    {
      q: 'Factor $12ab + 18a$.',
      answer: '$6a(2b + 3)$',
      solution:
        'The numbers $12$ and $18$ share a $6$, and both terms carry an $a$, so the greatest common factor is $6a$. Dividing: $\\frac{12ab}{6a} = 2b$ and $\\frac{18a}{6a} = 3$. That gives $6a(2b + 3)$. Expand to check: $6a \\cdot 2b = 12ab$ and $6a \\cdot 3 = 18a$. ✓',
    },
    {
      q: 'Factor $14xy - 21y$.',
      answer: '$7y(2x - 3)$',
      solution:
        'The numbers share a $7$. The letter they share is $y$, not $x$ — the second term has no $x$ at all — so the greatest common factor is $7y$. Dividing: $\\frac{14xy}{7y} = 2x$ and $\\frac{21y}{7y} = 3$. The answer is $7y(2x - 3)$. Expand to check: $14xy - 21y$. ✓',
    },
    {
      q: 'Factor $9m^2n + 6mn$.',
      answer: '$3mn(3m + 2)$',
      solution:
        'The numbers share a $3$. Both terms hold at least one $m$ and one $n$, so pull out $3mn$. Dividing: $\\frac{9m^2n}{3mn} = 3m$ and $\\frac{6mn}{3mn} = 2$. The answer is $3mn(3m + 2)$. Expand to check: $3mn \\cdot 3m = 9m^2n$ and $3mn \\cdot 2 = 6mn$. ✓',
    },
  ],
  // 5. Cancel numbers and letters in a monomial fraction.
  [
    {
      q: 'Simplify $\\frac{15a^2b}{20ab}$.',
      answer: '$\\frac{3a}{4}$',
      solution:
        'Cancel a $5$ from the numbers to get $\\frac{3}{4}$. The $a$ count is $2$ above and $1$ below, so one $a$ survives on top; the $b$ appears once on each side and disappears entirely. The answer is $\\frac{3a}{4}$. Check with $a = 4$, $b = -1$: the original is $\\frac{15 \\cdot 16 \\cdot (-1)}{20 \\cdot 4 \\cdot (-1)} = \\frac{-240}{-80} = 3$, and $\\frac{3 \\cdot 4}{4} = 3$. ✓',
    },
    {
      q: 'Simplify $\\frac{18mn^3}{24mn}$.',
      answer: '$\\frac{3n^2}{4}$',
      solution:
        'Cancel a $6$ from the numbers to get $\\frac{3}{4}$. The $m$ cancels completely, one for one. The $n$ count is $3$ above and $1$ below, so two $n$s survive on top: $\\frac{3n^2}{4}$. Check with $m = 5$, $n = -2$: the original is $\\frac{18 \\cdot 5 \\cdot (-8)}{24 \\cdot 5 \\cdot (-2)} = \\frac{-720}{-240} = 3$, and $\\frac{3 \\cdot 4}{4} = 3$. ✓',
    },
    {
      q: 'Simplify $\\frac{10xy^2}{25x^2y}$.',
      answer: '$\\frac{2y}{5x}$',
      solution:
        'Cancel a $5$ from the numbers, leaving $\\frac{2}{5}$. This time the letters split up: the bottom has more $x$s ($2$ against $1$), so one $x$ survives BELOW, while the top has more $y$s ($2$ against $1$), so one $y$ survives ABOVE. The answer is $\\frac{2y}{5x}$. Check with $x = 2$, $y = 3$: the original is $\\frac{10 \\cdot 2 \\cdot 9}{25 \\cdot 4 \\cdot 3} = \\frac{180}{300} = \\frac{3}{5}$, and $\\frac{2 \\cdot 3}{5 \\cdot 2} = \\frac{3}{5}$. ✓',
    },
  ],
  // 6. Isolate one variable in a two-variable equation.
  [
    {
      q: 'Solve $a + 3b = 12$ for $a$.',
      answer: '$a = 12 - 3b$',
      solution:
        'Subtract $3b$ from both sides: $a = 12 - 3b$. Check with $b = 3$: then $a = 12 - 9 = 3$, and $3 + 3(3) = 12$. ✓ Try a negative too, $b = -2$: then $a = 12 + 6 = 18$, and $18 + 3(-2) = 12$. ✓',
    },
    {
      q: 'Solve $3x + y = 21$ for $y$.',
      answer: '$y = 21 - 3x$',
      solution:
        'The $y$ is already alone apart from the $3x$ sitting beside it, so subtract $3x$ from both sides: $y = 21 - 3x$. Check with $x = 4$: then $y = 21 - 12 = 9$, and $3(4) + 9 = 21$. ✓',
    },
    {
      q: 'Solve $u - 6v = -8$ for $u$.',
      answer: '$u = 6v - 8$',
      solution:
        'Add $6v$ to both sides to move it away from the $u$: $u = -8 + 6v$, which is usually written $u = 6v - 8$. Check with $v = 2$: then $u = 12 - 8 = 4$, and $4 - 6(2) = 4 - 12 = -8$. ✓',
    },
  ],
  // 7. Three brackets, with subtraction flipping signs.
  [
    {
      q: 'Simplify $(5x + y) - (2x - 3y) + (x - 2y)$.',
      answer: '$4x + 2y$',
      solution:
        'The minus sign in front of the middle bracket flips both signs inside it: $5x + y - 2x + 3y + x - 2y$. The $x$ terms: $5 - 2 + 1 = 4$. The $y$ terms: $1 + 3 - 2 = 2$. So the answer is $4x + 2y$. Check with $x = 1$, $y = 1$: the original is $6 - (-1) + (-1) = 6$, and $4 + 2 = 6$. ✓',
    },
    {
      q: 'Simplify $(4m - 3n) - (m + 2n) - (2m - 5n)$.',
      answer: '$m$',
      solution:
        'Two brackets are subtracted, so flip the signs inside both: $4m - 3n - m - 2n - 2m + 5n$. The $m$ terms: $4 - 1 - 2 = 1$. The $n$ terms: $-3 - 2 + 5 = 0$ — that family cancels itself out completely and disappears. All that is left is $m$. Check with $m = 3$, $n = 5$: the original is $(-3) - (13) - (-19) = -3 - 13 + 19 = 3$, which is exactly $m$. ✓',
    },
    {
      q: 'Simplify $(2p + 7q) - (5p - q) + (4p - 4q)$.',
      answer: '$p + 4q$',
      solution:
        'Flip both signs inside the subtracted bracket: $2p + 7q - 5p + q + 4p - 4q$. The $p$ terms: $2 - 5 + 4 = 1$. The $q$ terms: $7 + 1 - 4 = 4$. So the answer is $p + 4q$. Check with $p = 2$, $q = -1$: the original is $(-3) - (11) + (12) = -2$, and $2 + 4(-1) = -2$. ✓',
    },
  ],
  // 8. Combine two fractions over a common denominator.
  [
    {
      q: 'Add $\\frac{m}{3} + \\frac{n}{5}$.',
      answer: '$\\frac{5m + 3n}{15}$',
      solution:
        'The least common denominator of $3$ and $5$ is $15$. Convert each fraction: $\\frac{m}{3} = \\frac{5m}{15}$ and $\\frac{n}{5} = \\frac{3n}{15}$. Now the tops can be added: $\\frac{5m + 3n}{15}$. Notice the $5$ lands on the $m$, not on the $n$. Check with $m = 3$, $n = 5$: the original is $1 + 1 = 2$, and $\\frac{15 + 15}{15} = 2$. ✓',
    },
    {
      q: 'Subtract $\\frac{x}{6} - \\frac{y}{8}$.',
      answer: '$\\frac{4x - 3y}{24}$',
      solution:
        'The least common denominator of $6$ and $8$ is $24$, not $48$ — the smallest number both divide into. Convert: $\\frac{x}{6} = \\frac{4x}{24}$ and $\\frac{y}{8} = \\frac{3y}{24}$. Subtract the tops: $\\frac{4x - 3y}{24}$. Check with $x = 6$, $y = -8$: the original is $1 - (-1) = 2$, and $\\frac{24 + 24}{24} = 2$. ✓',
    },
    {
      q: 'Add $\\frac{p}{10} + \\frac{q}{4}$.',
      answer: '$\\frac{2p + 5q}{20}$',
      solution:
        'The least common denominator of $10$ and $4$ is $20$. Convert: $\\frac{p}{10} = \\frac{2p}{20}$ and $\\frac{q}{4} = \\frac{5q}{20}$. Add the tops: $\\frac{2p + 5q}{20}$. Check with $p = 10$, $q = -4$: the original is $1 - 1 = 0$, and $\\frac{20 - 20}{20} = 0$. ✓',
    },
  ],
  // 9. Rearrange a formula where the target is multiplied by two other letters.
  [
    {
      q: 'The area of a rectangle is $A = lw$. Solve for $l$.',
      answer: '$l = \\frac{A}{w}$',
      solution:
        'The $l$ is multiplied by $w$, so undo that by dividing both sides by $w$: $l = \\frac{A}{w}$. Check with $l = 7$, $w = 3$: then $A = 21$, and $\\frac{21}{3} = 7$. ✓',
    },
    {
      q: 'The volume of a cylinder is $V = \\pi r^2 h$. Solve for $h$.',
      answer: '$h = \\frac{V}{\\pi r^2}$',
      solution:
        'Everything sitting next to the $h$ — the $\\pi$ and the $r^2$ — is multiplying it, so divide both sides by the whole product $\\pi r^2$: $h = \\frac{V}{\\pi r^2}$. It does not matter that $\\pi$ is a strange number; it behaves like any other factor. Check with $r = 2$, $h = 5$: then $V = 20\\pi$, and $\\frac{20\\pi}{4\\pi} = 5$. ✓',
    },
    {
      q: 'The cost of tiling a rectangular floor is $C = pab$, where $p$ is the price per square metre and the room measures $a$ metres by $b$ metres. Solve for $p$.',
      answer: '$p = \\frac{C}{ab}$',
      solution:
        'The $p$ is multiplied by both $a$ and $b$, so divide both sides by $ab$ in one move: $p = \\frac{C}{ab}$. Check with $p = 6$, $a = 3$, $b = 5$: then $C = 90$, and $\\frac{90}{3 \\cdot 5} = \\frac{90}{15} = 6$. ✓',
    },
  ],
  // 10. Evaluate a three-term expression with a negative variable.
  [
    {
      q: 'Evaluate $a^2b + ab^2 - ab$ when $a = -2$ and $b = 5$.',
      answer: '$-20$',
      solution:
        'Term by term: $a^2 = (-2)^2 = 4$, so $a^2b = (4)(5) = 20$; then $ab^2 = (-2)(25) = -50$; then $ab = (-2)(5) = -10$, so $-ab = +10$. Adding: $20 - 50 + 10 = -20$. The middle term is the biggest, which is why the total ends up negative.',
    },
    {
      q: 'Evaluate $m^2n - mn^2 - mn$ when $m = -3$ and $n = -1$.',
      answer: '$-9$',
      solution:
        'Both variables are negative, so square carefully. $m^2 = 9$, so $m^2n = (9)(-1) = -9$. Next $n^2 = 1$, so $mn^2 = (-3)(1) = -3$, and subtracting it gives $+3$. Finally $mn = (-3)(-1) = 3$, and subtracting it gives $-3$. Adding: $-9 + 3 - 3 = -9$.',
    },
    {
      q: 'Evaluate $pq^2 - p^2q + 2pq$ when $p = 4$ and $q = -3$.',
      answer: '$60$',
      solution:
        'Squaring kills the minus sign, so watch which letter gets squared. $q^2 = 9$, so $pq^2 = (4)(9) = 36$. Then $p^2 = 16$, so $p^2q = (16)(-3) = -48$, and subtracting it gives $+48$. Finally $2pq = 2(4)(-3) = -24$. Adding: $36 + 48 - 24 = 60$.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 4,
  sections: {
    '4.4': s44,
    '4.5': s45,
  },
  challenge,
  worksheet,
}
