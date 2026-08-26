// Introduction to Algebra chapter 21 — variations for section 21.5
// (Telescoping). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every item keeps its base problem's ANSWER SHAPE. A slot that asks which
//    difference equals a fraction still offers differences; a slot that asks
//    for a product still asks for a product; the infinite sum stays infinite;
//    the hidden-telescope slot still hands over plain integer denominators.
//  - Every key was worked twice. Sums were collapsed by splitting
//    $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$ AND checked a second,
//    independent way (short sums added outright over a common denominator,
//    long sums checked against directly-added prefixes or against a pattern
//    read off the first few partial sums). Products were collapsed by
//    cancelling AND checked by multiplying out the opening factors.
//  - Every fraction answer is in lowest terms, and the solution says where the
//    reducing happened.
//  - Each distractor is one named mistake, named in CAPS: THE ADDED ENDPOINTS,
//    THE BACKWARDS DIFFERENCE, THE WRONG GAP, THE LOST LAST STEP, THE LOST
//    FIRST TERM, THE LOST FIRST DENOMINATOR, THE LOST FIRST NUMERATOR, THE
//    FORGOTTEN LAST FACTOR, ONLY THE LAST FACTOR, THE FLIPPED PRODUCT, and
//    ONE TERM TOO FAR.
//  - No two choices inside an item name the same number.

const s215 = [
  // s5 — read the splitting identity backwards: which DIFFERENCE is the term?
  [
    {
      q: 'Which difference equals $\\frac{1}{7 \\cdot 8}$?',
      choices: [
        '$\\frac{1}{7} - \\frac{1}{8}$',
        '$\\frac{1}{8} - \\frac{1}{7}$',
        '$\\frac{1}{7} + \\frac{1}{8}$',
        '$\\frac{1}{6} - \\frac{1}{8}$',
      ],
      answer: 0,
      solution:
        'The splitting identity is $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, and here $n = 7$, so $\\frac{1}{7 \\cdot 8} = \\frac{1}{7} - \\frac{1}{8}$ ✓. Check a second, independent way by combining the chosen difference over the common denominator $56$: $\\frac{8}{56} - \\frac{7}{56} = \\frac{1}{56}$, and $7 \\cdot 8 = 56$ ✓ — the two really are the same number. (The choice $\\frac{1}{8} - \\frac{1}{7}$ is THE BACKWARDS DIFFERENCE, worth $-\\frac{1}{56}$, and a positive fraction is never negative; $\\frac{1}{7} + \\frac{1}{8}$ is THE ADDED ENDPOINTS, worth $\\frac{15}{56}$; $\\frac{1}{6} - \\frac{1}{8}$ is THE WRONG GAP — it skips a step and lands on $\\frac{4}{24} - \\frac{3}{24} = \\frac{1}{24}$.)',
    },
    {
      q: 'Which difference equals $\\frac{1}{3 \\cdot 4}$?',
      choices: [
        '$\\frac{1}{3} + \\frac{1}{4}$',
        '$\\frac{1}{3} - \\frac{1}{4}$',
        '$\\frac{1}{4} - \\frac{1}{3}$',
        '$\\frac{1}{2} - \\frac{1}{4}$',
      ],
      answer: 1,
      solution:
        'Take $n = 3$ in $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$: the term $\\frac{1}{3 \\cdot 4}$ splits into $\\frac{1}{3} - \\frac{1}{4}$ ✓. Check a second, independent way by subtracting over the common denominator $12$: $\\frac{4}{12} - \\frac{3}{12} = \\frac{1}{12}$, and $3 \\cdot 4 = 12$ ✓. (The choice $\\frac{1}{3} + \\frac{1}{4}$ is THE ADDED ENDPOINTS, worth $\\frac{7}{12}$; $\\frac{1}{4} - \\frac{1}{3}$ is THE BACKWARDS DIFFERENCE, worth $-\\frac{1}{12}$; $\\frac{1}{2} - \\frac{1}{4}$ is THE WRONG GAP, worth $\\frac{1}{4}$ — the two denominators must be consecutive.)',
    },
    {
      q: 'Which difference equals $\\frac{1}{11 \\cdot 12}$?',
      choices: [
        '$\\frac{1}{12} - \\frac{1}{11}$',
        '$\\frac{1}{11} + \\frac{1}{12}$',
        '$\\frac{1}{10} - \\frac{1}{12}$',
        '$\\frac{1}{11} - \\frac{1}{12}$',
      ],
      answer: 3,
      solution:
        'With $n = 11$ the identity $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ gives $\\frac{1}{11 \\cdot 12} = \\frac{1}{11} - \\frac{1}{12}$ ✓. Check a second, independent way over the common denominator $132$: $\\frac{12}{132} - \\frac{11}{132} = \\frac{1}{132}$, and $11 \\cdot 12 = 132$ ✓. (The first choice is THE BACKWARDS DIFFERENCE, worth $-\\frac{1}{132}$; $\\frac{1}{11} + \\frac{1}{12}$ is THE ADDED ENDPOINTS, worth $\\frac{23}{132}$; $\\frac{1}{10} - \\frac{1}{12}$ is THE WRONG GAP, worth $\\frac{6}{60} - \\frac{5}{60} = \\frac{1}{60}$, which is far too big.)',
    },
  ],
  // s5 — the shortest possible telescope: two terms, split and cancel one piece.
  [
    {
      q: 'Compute $\\frac{1}{3 \\cdot 4} + \\frac{1}{4 \\cdot 5}$.',
      choices: ['$\\frac{2}{15}$', '$\\frac{8}{15}$', '$\\frac{1}{12}$', '$\\frac{1}{20}$'],
      answer: 0,
      solution:
        'Split and cancel: $\\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right)$. The two $\\frac{1}{4}$ pieces kill each other, leaving first minus last: $\\frac{1}{3} - \\frac{1}{5} = \\frac{5}{15} - \\frac{3}{15} = \\frac{2}{15}$ ✓, already in lowest terms since $2$ and $15$ share no factor. Check a second, independent way by adding the two original fractions outright: $\\frac{1}{12} + \\frac{1}{20} = \\frac{5}{60} + \\frac{3}{60} = \\frac{8}{60} = \\frac{2}{15}$ ✓ (divide top and bottom by $4$). (The choice $\\frac{8}{15}$ is THE ADDED ENDPOINTS, $\\frac{1}{3} + \\frac{1}{5}$; $\\frac{1}{12}$ is THE LOST LAST STEP, stopping at $\\frac{1}{3} - \\frac{1}{4}$; $\\frac{1}{20}$ is THE LOST FIRST TERM, reporting only $\\frac{1}{4} - \\frac{1}{5}$.)',
    },
    {
      q: 'Compute $\\frac{1}{6 \\cdot 7} + \\frac{1}{7 \\cdot 8}$.',
      choices: ['$\\frac{7}{24}$', '$\\frac{1}{42}$', '$\\frac{1}{24}$', '$\\frac{1}{56}$'],
      answer: 2,
      solution:
        'Split and cancel: $\\left(\\frac{1}{6} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{8}\\right)$, and the $\\frac{1}{7}$ pieces cancel, leaving $\\frac{1}{6} - \\frac{1}{8} = \\frac{4}{24} - \\frac{3}{24} = \\frac{1}{24}$ ✓. Check a second, independent way by adding the originals over a common denominator: $\\frac{1}{42} + \\frac{1}{56}$; since $42 = 2 \\cdot 3 \\cdot 7$ and $56 = 2^3 \\cdot 7$, the common denominator is $168$, giving $\\frac{4}{168} + \\frac{3}{168} = \\frac{7}{168} = \\frac{1}{24}$ ✓ (divide top and bottom by $7$). (The choice $\\frac{7}{24}$ is THE ADDED ENDPOINTS, $\\frac{1}{6} + \\frac{1}{8}$; $\\frac{1}{42}$ is THE LOST LAST STEP, stopping at $\\frac{1}{6} - \\frac{1}{7}$; $\\frac{1}{56}$ is THE LOST FIRST TERM.)',
    },
    {
      q: 'Compute $\\frac{1}{9 \\cdot 10} + \\frac{1}{10 \\cdot 11}$.',
      choices: ['$\\frac{20}{99}$', '$\\frac{1}{90}$', '$\\frac{1}{110}$', '$\\frac{2}{99}$'],
      answer: 3,
      solution:
        'Split and cancel: $\\left(\\frac{1}{9} - \\frac{1}{10}\\right) + \\left(\\frac{1}{10} - \\frac{1}{11}\\right) = \\frac{1}{9} - \\frac{1}{11} = \\frac{11}{99} - \\frac{9}{99} = \\frac{2}{99}$ ✓, in lowest terms because $99 = 9 \\cdot 11$ is odd. Check a second, independent way by adding the originals: $\\frac{1}{90} + \\frac{1}{110}$ over the common denominator $990$ is $\\frac{11}{990} + \\frac{9}{990} = \\frac{20}{990} = \\frac{2}{99}$ ✓ (divide top and bottom by $10$). (The choice $\\frac{20}{99}$ is THE ADDED ENDPOINTS, $\\frac{1}{9} + \\frac{1}{11}$; $\\frac{1}{90}$ is THE LOST LAST STEP, stopping at $\\frac{1}{9} - \\frac{1}{10}$; $\\frac{1}{110}$ is THE LOST FIRST TERM.)',
    },
  ],
  // s5 — four terms written out in full: watch three middle pieces vanish.
  [
    {
      q: 'Compute $\\frac{1}{3 \\cdot 4} + \\frac{1}{4 \\cdot 5} + \\frac{1}{5 \\cdot 6} + \\frac{1}{6 \\cdot 7}$.',
      choices: ['$\\frac{10}{21}$', '$\\frac{4}{21}$', '$\\frac{1}{6}$', '$\\frac{3}{28}$'],
      answer: 1,
      solution:
        'Split every term: $\\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right) + \\left(\\frac{1}{6} - \\frac{1}{7}\\right)$. The pieces $\\frac{1}{4}$, $\\frac{1}{5}$, $\\frac{1}{6}$ each show up once positive and once negative, so they vanish, leaving first minus last: $\\frac{1}{3} - \\frac{1}{7} = \\frac{7}{21} - \\frac{3}{21} = \\frac{4}{21}$ ✓, in lowest terms since $21 = 3 \\cdot 7$ is odd and not a multiple of $4$\'s factors. Check a second, independent way by adding the four fractions outright over $420$: $\\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42} = \\frac{35}{420} + \\frac{21}{420} + \\frac{14}{420} + \\frac{10}{420} = \\frac{80}{420} = \\frac{4}{21}$ ✓ (divide top and bottom by $20$). (The choice $\\frac{10}{21}$ is THE ADDED ENDPOINTS; $\\frac{1}{6}$ is THE LOST LAST STEP, stopping at $\\frac{1}{3} - \\frac{1}{6}$; $\\frac{3}{28}$ is THE LOST FIRST TERM, starting the collapse at $\\frac{1}{4}$.)',
    },
    {
      q: 'Compute $\\frac{1}{5 \\cdot 6} + \\frac{1}{6 \\cdot 7} + \\frac{1}{7 \\cdot 8} + \\frac{1}{8 \\cdot 9}$.',
      choices: ['$\\frac{14}{45}$', '$\\frac{3}{40}$', '$\\frac{4}{45}$', '$\\frac{1}{18}$'],
      answer: 2,
      solution:
        'Split every term and let the middle collapse: $\\left(\\frac{1}{5} - \\frac{1}{6}\\right) + \\left(\\frac{1}{6} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{8}\\right) + \\left(\\frac{1}{8} - \\frac{1}{9}\\right) = \\frac{1}{5} - \\frac{1}{9} = \\frac{9}{45} - \\frac{5}{45} = \\frac{4}{45}$ ✓, in lowest terms because $45 = 3^2 \\cdot 5$ has no factor of $2$. Check a second, independent way by adding the originals over $2520$: $\\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56} + \\frac{1}{72} = \\frac{84}{2520} + \\frac{60}{2520} + \\frac{45}{2520} + \\frac{35}{2520} = \\frac{224}{2520} = \\frac{4}{45}$ ✓ (divide top and bottom by $56$). (The choice $\\frac{14}{45}$ is THE ADDED ENDPOINTS, $\\frac{1}{5} + \\frac{1}{9}$; $\\frac{3}{40}$ is THE LOST LAST STEP, $\\frac{1}{5} - \\frac{1}{8}$; $\\frac{1}{18}$ is THE LOST FIRST TERM, $\\frac{1}{6} - \\frac{1}{9}$.)',
    },
    {
      q: 'Compute $\\frac{1}{4 \\cdot 5} + \\frac{1}{5 \\cdot 6} + \\frac{1}{6 \\cdot 7} + \\frac{1}{7 \\cdot 8}$.',
      choices: ['$\\frac{3}{8}$', '$\\frac{3}{28}$', '$\\frac{3}{40}$', '$\\frac{1}{8}$'],
      answer: 3,
      solution:
        'Split every term: $\\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right) + \\left(\\frac{1}{6} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{8}\\right)$, and everything between the ends cancels: $\\frac{1}{4} - \\frac{1}{8} = \\frac{2}{8} - \\frac{1}{8} = \\frac{1}{8}$ ✓. Check a second, independent way by adding the originals over $840$: $\\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56} = \\frac{42}{840} + \\frac{28}{840} + \\frac{20}{840} + \\frac{15}{840} = \\frac{105}{840} = \\frac{1}{8}$ ✓ (divide top and bottom by $105$). (The choice $\\frac{3}{8}$ is THE ADDED ENDPOINTS, $\\frac{1}{4} + \\frac{1}{8}$; $\\frac{3}{28}$ is THE LOST LAST STEP, $\\frac{1}{4} - \\frac{1}{7}$; $\\frac{3}{40}$ is THE LOST FIRST TERM, $\\frac{1}{5} - \\frac{1}{8}$.)',
    },
  ],
  // s5 — a short telescoping PRODUCT: the first denominator is what survives below.
  [
    {
      q: 'Compute the product $\\frac{4}{3} \\cdot \\frac{5}{4} \\cdot \\frac{6}{5} \\cdot \\frac{7}{6}$.',
      choices: ['$\\frac{7}{3}$', '$7$', '$2$', '$\\frac{3}{7}$'],
      answer: 0,
      solution:
        'Each numerator cancels the next denominator: the $4$s go, the $5$s go, the $6$s go. Only the FIRST denominator $3$ and the LAST numerator $7$ survive, so the product is $\\frac{7}{3}$ ✓. Check a second, independent way by multiplying out from the left and watching the pattern: $\\frac{4}{3}$, then $\\frac{4}{3} \\cdot \\frac{5}{4} = \\frac{20}{12} = \\frac{5}{3}$, then $\\frac{5}{3} \\cdot \\frac{6}{5} = \\frac{30}{15} = 2 = \\frac{6}{3}$, then $\\frac{6}{3} \\cdot \\frac{7}{6} = \\frac{7}{3}$ ✓ — every running product is "latest numerator over $3$". (The choice $7$ is THE LOST FIRST DENOMINATOR, as if the chain had started at $\\frac{2}{1}$; $2$ is THE FORGOTTEN LAST FACTOR, the running product $\\frac{6}{3}$; $\\frac{3}{7}$ is THE FLIPPED PRODUCT.)',
    },
    {
      q: 'Compute the product $\\frac{5}{4} \\cdot \\frac{6}{5} \\cdot \\frac{7}{6} \\cdot \\frac{8}{7}$.',
      choices: ['$8$', '$2$', '$\\frac{7}{4}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'The $5$s, $6$s and $7$s all cancel in neighbouring pairs, leaving the last numerator over the first denominator: $\\frac{8}{4} = 2$ ✓. Check a second, independent way by multiplying step by step: $\\frac{5}{4}$, then $\\frac{5}{4} \\cdot \\frac{6}{5} = \\frac{6}{4} = \\frac{3}{2}$, then $\\frac{3}{2} \\cdot \\frac{7}{6} = \\frac{21}{12} = \\frac{7}{4}$, then $\\frac{7}{4} \\cdot \\frac{8}{7} = \\frac{8}{4} = 2$ ✓. (The choice $8$ is THE LOST FIRST DENOMINATOR — this product starts at $\\frac{5}{4}$, so a $4$ is left underneath; $\\frac{7}{4}$ is THE FORGOTTEN LAST FACTOR; $\\frac{1}{2}$ is THE FLIPPED PRODUCT.)',
    },
    {
      q: 'Compute the product $\\frac{6}{5} \\cdot \\frac{7}{6} \\cdot \\frac{8}{7} \\cdot \\frac{9}{8}$.',
      choices: ['$9$', '$\\frac{5}{9}$', '$\\frac{9}{5}$', '$\\frac{8}{5}$'],
      answer: 2,
      solution:
        'Cancel each numerator against the next denominator — the $6$s, $7$s and $8$s all disappear — and what is left is the last numerator over the first denominator: $\\frac{9}{5}$ ✓, already in lowest terms. Check a second, independent way by multiplying out: $\\frac{6}{5} \\cdot \\frac{7}{6} = \\frac{42}{30} = \\frac{7}{5}$, then $\\frac{7}{5} \\cdot \\frac{8}{7} = \\frac{8}{5}$, then $\\frac{8}{5} \\cdot \\frac{9}{8} = \\frac{9}{5}$ ✓ — the denominator never budges from $5$. (The choice $9$ is THE LOST FIRST DENOMINATOR; $\\frac{8}{5}$ is THE FORGOTTEN LAST FACTOR; $\\frac{5}{9}$ is THE FLIPPED PRODUCT.)',
    },
  ],
  // s5 — a long sum that does NOT start at 1·2, so the surviving first piece is not 1.
  [
    {
      q: 'Compute $\\frac{1}{4 \\cdot 5} + \\frac{1}{5 \\cdot 6} + \\cdots + \\frac{1}{13 \\cdot 14}$.',
      choices: ['$\\frac{5}{28}$', '$\\frac{9}{28}$', '$\\frac{9}{52}$', '$\\frac{9}{70}$'],
      answer: 0,
      solution:
        'Split every term as $\\frac{1}{n} - \\frac{1}{n+1}$. The chain runs from $n = 4$ to $n = 13$, so it opens with $\\frac{1}{4}$ and closes with $-\\frac{1}{14}$, and every piece in between appears twice with opposite signs. First minus last: $\\frac{1}{4} - \\frac{1}{14} = \\frac{7}{28} - \\frac{2}{28} = \\frac{5}{28}$ ✓, in lowest terms since $28 = 2^2 \\cdot 7$ has no factor of $5$. Check a second, independent way by testing the collapse rule on a short prefix and then extending it: the first two terms add outright to $\\frac{1}{20} + \\frac{1}{30} = \\frac{3}{60} + \\frac{2}{60} = \\frac{5}{60} = \\frac{1}{12}$, which is exactly $\\frac{1}{4} - \\frac{1}{6}$ ✓, so the rule "first minus one past the last" is doing what it claims, and running it out to $\\frac{1}{13 \\cdot 14}$ gives $\\frac{1}{4} - \\frac{1}{14}$ ✓. (The choice $\\frac{9}{28}$ is THE ADDED ENDPOINTS, $\\frac{1}{4} + \\frac{1}{14}$; $\\frac{9}{52}$ keeps $\\frac{1}{13}$ instead of $\\frac{1}{14}$ — the last term ends at $\\frac{1}{14}$, not at the number that opened it; $\\frac{9}{70}$ is THE LOST FIRST TERM, starting the collapse at $\\frac{1}{5}$.)',
    },
    {
      q: 'Compute $\\frac{1}{5 \\cdot 6} + \\frac{1}{6 \\cdot 7} + \\cdots + \\frac{1}{14 \\cdot 15}$.',
      choices: ['$\\frac{4}{15}$', '$\\frac{9}{70}$', '$\\frac{2}{15}$', '$\\frac{1}{10}$'],
      answer: 2,
      solution:
        'The chain runs from $n = 5$ to $n = 14$, so splitting gives $\\frac{1}{5} - \\frac{1}{6} + \\frac{1}{6} - \\frac{1}{7} + \\cdots + \\frac{1}{14} - \\frac{1}{15}$, and only the outermost pieces survive: $\\frac{1}{5} - \\frac{1}{15} = \\frac{3}{15} - \\frac{1}{15} = \\frac{2}{15}$ ✓, in lowest terms since $15$ is odd. Check a second, independent way by adding the first three terms outright and comparing with the rule: $\\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56} = \\frac{28}{840} + \\frac{20}{840} + \\frac{15}{840} = \\frac{63}{840} = \\frac{3}{40}$, and $\\frac{1}{5} - \\frac{1}{8} = \\frac{8}{40} - \\frac{5}{40} = \\frac{3}{40}$ ✓ — the collapse rule survives a hand check, so we may trust it out to the end. (The choice $\\frac{4}{15}$ is THE ADDED ENDPOINTS; $\\frac{9}{70}$ stops at $\\frac{1}{5} - \\frac{1}{14}$, one step short; $\\frac{1}{10}$ is THE LOST FIRST TERM, $\\frac{1}{6} - \\frac{1}{15}$.)',
    },
    {
      q: 'Compute $\\frac{1}{6 \\cdot 7} + \\frac{1}{7 \\cdot 8} + \\cdots + \\frac{1}{20 \\cdot 21}$.',
      choices: ['$\\frac{3}{14}$', '$\\frac{7}{60}$', '$\\frac{2}{21}$', '$\\frac{5}{42}$'],
      answer: 3,
      solution:
        'Splitting runs the chain from $n = 6$ to $n = 20$, so the survivors are $\\frac{1}{6}$ at the front and $-\\frac{1}{21}$ at the back: $\\frac{1}{6} - \\frac{1}{21} = \\frac{7}{42} - \\frac{2}{42} = \\frac{5}{42}$ ✓, in lowest terms because $42 = 2 \\cdot 3 \\cdot 7$ shares no factor with $5$. Check a second, independent way by hand-adding the opening pair and matching it against the rule: $\\frac{1}{42} + \\frac{1}{56} = \\frac{4}{168} + \\frac{3}{168} = \\frac{7}{168} = \\frac{1}{24}$, and $\\frac{1}{6} - \\frac{1}{8} = \\frac{1}{24}$ ✓, so the collapse behaves; continuing to the last term $\\frac{1}{20 \\cdot 21}$ pushes the back end to $\\frac{1}{21}$ ✓. (The choice $\\frac{3}{14}$ is THE ADDED ENDPOINTS, $\\frac{1}{6} + \\frac{1}{21}$; $\\frac{7}{60}$ stops the back end at $\\frac{1}{20}$ instead of $\\frac{1}{21}$; $\\frac{2}{21}$ is THE LOST FIRST TERM, $\\frac{1}{7} - \\frac{1}{21}$.)',
    },
  ],
  // s5 — a very long sum starting at 1·2: no arithmetic marathon, just collapse it.
  [
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{49 \\cdot 50}$.',
      choices: ['$\\frac{50}{51}$', '$\\frac{49}{50}$', '$1$', '$\\frac{51}{50}$'],
      answer: 1,
      solution:
        'There is no need to add $49$ fractions. Split each one: the sum becomes $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{49} - \\frac{1}{50}\\right)$, and only the ends survive: $1 - \\frac{1}{50} = \\frac{49}{50}$ ✓. Check a second, independent way by adding small versions by hand and reading off the pattern: one term gives $\\frac{1}{2}$, two terms give $\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$, three terms give $\\frac{2}{3} + \\frac{1}{12} = \\frac{3}{4}$, four give $\\frac{3}{4} + \\frac{1}{20} = \\frac{4}{5}$ — so $k$ terms give $\\frac{k}{k+1}$, and $k = 49$ gives $\\frac{49}{50}$ ✓. (The choice $\\frac{50}{51}$ is ONE TERM TOO FAR, the answer for a sum ending at $\\frac{1}{50 \\cdot 51}$; $1$ forgets the leftover $\\frac{1}{50}$; $\\frac{51}{50}$ is THE ADDED ENDPOINTS, $1 + \\frac{1}{50}$, and a pile of fractions each under $\\frac{1}{2}$ cannot exceed $1$ here.)',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{30 \\cdot 31}$.',
      choices: ['$1$', '$\\frac{31}{32}$', '$\\frac{30}{31}$', '$\\frac{31}{30}$'],
      answer: 2,
      solution:
        'Split and collapse: $\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{30} - \\frac{1}{31}\\right) = 1 - \\frac{1}{31} = \\frac{30}{31}$ ✓, in lowest terms since $31$ is prime. Check a second, independent way by building the pattern from short sums added by hand: $\\frac{1}{2}$, then $\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$, then $+\\frac{1}{12} = \\frac{3}{4}$, then $+\\frac{1}{20} = \\frac{4}{5}$ — the running total after $k$ terms is $\\frac{k}{k+1}$, and the last term here is $\\frac{1}{30 \\cdot 31}$, so $k = 30$ and the total is $\\frac{30}{31}$ ✓. (The choice $1$ forgets the leftover $\\frac{1}{31}$; $\\frac{31}{32}$ is ONE TERM TOO FAR; $\\frac{31}{30}$ is THE ADDED ENDPOINTS, $1 + \\frac{1}{31}$.)',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{60 \\cdot 61}$.',
      choices: ['$\\frac{61}{60}$', '$1$', '$\\frac{61}{62}$', '$\\frac{60}{61}$'],
      answer: 3,
      solution:
        'Split every term into $\\frac{1}{n} - \\frac{1}{n+1}$ and let the middle cancel: the sum is $1 - \\frac{1}{61} = \\frac{60}{61}$ ✓, in lowest terms since $61$ is prime. Check a second, independent way with the pattern from hand-added short sums: after one term $\\frac{1}{2}$, after two $\\frac{2}{3}$, after three $\\frac{3}{4}$, after four $\\frac{4}{5}$ — after $k$ terms the total is $\\frac{k}{k+1}$. The final term $\\frac{1}{60 \\cdot 61}$ marks $k = 60$, giving $\\frac{60}{61}$ ✓ — and notice the totals creep toward $1$ without ever reaching it. (The choice $\\frac{61}{60}$ is THE ADDED ENDPOINTS and is bigger than $1$, which is impossible here; $1$ forgets the leftover $\\frac{1}{61}$; $\\frac{61}{62}$ is ONE TERM TOO FAR.)',
    },
  ],
  // s5 — a long telescoping PRODUCT that starts above 2/1: the leftover below is the first denominator.
  [
    {
      q: 'Compute the product $\\frac{4}{3} \\cdot \\frac{5}{4} \\cdot \\frac{6}{5} \\cdots \\frac{24}{23}$.',
      choices: ['$8$', '$24$', '$\\frac{23}{3}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'Every numerator cancels the denominator of the next fraction, so the whole chain collapses to the LAST numerator over the FIRST denominator: $\\frac{24}{3} = 8$ ✓. Check a second, independent way by multiplying the opening factors and watching the shape of the running product: $\\frac{4}{3}$, then $\\frac{4}{3} \\cdot \\frac{5}{4} = \\frac{5}{3}$, then $\\cdot \\frac{6}{5} = \\frac{6}{3} = 2$, then $\\cdot \\frac{7}{6} = \\frac{7}{3}$ — the denominator is stuck at $3$ and the numerator is always the newest one, so stopping at $\\frac{24}{23}$ leaves $\\frac{24}{3} = 8$ ✓. (The choice $24$ is THE LOST FIRST DENOMINATOR — this product begins at $\\frac{4}{3}$, not $\\frac{2}{1}$, so a $3$ stays underneath; $\\frac{23}{3}$ is THE FORGOTTEN LAST FACTOR, the running product one step early; $\\frac{1}{8}$ is THE FLIPPED PRODUCT.)',
    },
    {
      q: 'Compute the product $\\frac{5}{4} \\cdot \\frac{6}{5} \\cdot \\frac{7}{6} \\cdots \\frac{36}{35}$.',
      choices: ['$36$', '$9$', '$\\frac{35}{4}$', '$\\frac{1}{9}$'],
      answer: 1,
      solution:
        'Each numerator meets its twin in the next denominator and both vanish; the only survivors are the first denominator $4$ and the last numerator $36$, so the product is $\\frac{36}{4} = 9$ ✓. Check a second, independent way by multiplying out the front of the chain: $\\frac{5}{4}$, then $\\frac{6}{4} = \\frac{3}{2}$, then $\\frac{7}{4}$, then $\\frac{8}{4} = 2$ — each step just replaces the numerator, leaving $4$ below, so the final value is $\\frac{36}{4} = 9$ ✓. (The choice $36$ is THE LOST FIRST DENOMINATOR; $\\frac{35}{4}$ is THE FORGOTTEN LAST FACTOR, stopping at $\\frac{35}{34}$; $\\frac{1}{9}$ is THE FLIPPED PRODUCT.)',
    },
    {
      q: 'Compute the product $\\frac{7}{6} \\cdot \\frac{8}{7} \\cdot \\frac{9}{8} \\cdots \\frac{42}{41}$.',
      choices: ['$42$', '$\\frac{41}{6}$', '$\\frac{1}{7}$', '$7$'],
      answer: 3,
      solution:
        'The $7$s cancel, the $8$s cancel, and so on all the way up to the $41$s. What is left is the last numerator over the first denominator: $\\frac{42}{6} = 7$ ✓. Check a second, independent way by multiplying the first few factors: $\\frac{7}{6}$, then $\\frac{7}{6} \\cdot \\frac{8}{7} = \\frac{8}{6} = \\frac{4}{3}$, then $\\cdot \\frac{9}{8} = \\frac{9}{6} = \\frac{3}{2}$, then $\\cdot \\frac{10}{9} = \\frac{10}{6} = \\frac{5}{3}$ — written over $6$ these are $\\frac{8}{6}, \\frac{9}{6}, \\frac{10}{6}$, so the pattern "newest numerator over $6$" holds, and the last numerator $42$ gives $\\frac{42}{6} = 7$ ✓. (The choice $42$ is THE LOST FIRST DENOMINATOR; $\\frac{41}{6}$ is THE FORGOTTEN LAST FACTOR; $\\frac{1}{7}$ is THE FLIPPED PRODUCT.)',
    },
  ],
  // s5 — rewrite each (1 - 1/n) factor before you can see the telescope.
  [
    {
      q: 'Compute $\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right) \\cdots \\left(1 - \\frac{1}{12}\\right)$.',
      choices: ['$\\frac{1}{12}$', '$\\frac{11}{12}$', '$\\frac{1}{2}$', '$\\frac{1}{11}$'],
      answer: 0,
      solution:
        'Rewrite each factor first: $1 - \\frac{1}{n} = \\frac{n-1}{n}$. The product becomes $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} \\cdots \\frac{11}{12}$, where every numerator cancels the next denominator. This time the survivors are the FIRST numerator $1$ and the LAST denominator $12$, so the product is $\\frac{1}{12}$ ✓. Check a second, independent way by multiplying out the opening factors: $\\frac{1}{2}$, then $\\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{3}$, then $\\cdot \\frac{3}{4} = \\frac{1}{4}$, then $\\cdot \\frac{4}{5} = \\frac{1}{5}$ — after the factor built from $n$ the running product is exactly $\\frac{1}{n}$, so the factor built from $12$ leaves $\\frac{1}{12}$ ✓. (The choice $\\frac{11}{12}$ is ONLY THE LAST FACTOR; $\\frac{1}{11}$ is THE FORGOTTEN LAST FACTOR, the running product one step early; $\\frac{1}{2}$ is only the first factor.)',
    },
    {
      q: 'Compute $\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right) \\cdots \\left(1 - \\frac{1}{17}\\right)$.',
      choices: ['$\\frac{16}{17}$', '$\\frac{2}{17}$', '$\\frac{1}{17}$', '$\\frac{17}{2}$'],
      answer: 1,
      solution:
        'Rewrite: $1 - \\frac{1}{n} = \\frac{n-1}{n}$, so the product is $\\frac{2}{3} \\cdot \\frac{3}{4} \\cdot \\frac{4}{5} \\cdots \\frac{16}{17}$. The chain starts at $\\frac{2}{3}$, not at $\\frac{1}{2}$, so the survivors are the first numerator $2$ and the last denominator $17$: the product is $\\frac{2}{17}$ ✓, already in lowest terms since $17$ is prime. Check a second, independent way by multiplying out: $\\frac{2}{3}$, then $\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{2}{4} = \\frac{1}{2}$, then $\\cdot \\frac{4}{5} = \\frac{2}{5}$, then $\\cdot \\frac{5}{6} = \\frac{2}{6} = \\frac{1}{3}$ — written over the newest denominator these are $\\frac{2}{4}, \\frac{2}{5}, \\frac{2}{6}$, so the numerator stays $2$ forever and the last denominator is $17$ ✓. (The choice $\\frac{16}{17}$ is ONLY THE LAST FACTOR; $\\frac{1}{17}$ is THE LOST FIRST NUMERATOR, the answer if the chain had begun at $1 - \\frac{1}{2}$; $\\frac{17}{2}$ is THE FLIPPED PRODUCT.)',
    },
    {
      q: 'Compute $\\left(1 - \\frac{1}{4}\\right)\\left(1 - \\frac{1}{5}\\right)\\left(1 - \\frac{1}{6}\\right) \\cdots \\left(1 - \\frac{1}{20}\\right)$.',
      choices: ['$\\frac{19}{20}$', '$\\frac{1}{20}$', '$\\frac{3}{20}$', '$\\frac{20}{3}$'],
      answer: 2,
      solution:
        'Each factor is $1 - \\frac{1}{n} = \\frac{n-1}{n}$, so the product is $\\frac{3}{4} \\cdot \\frac{4}{5} \\cdot \\frac{5}{6} \\cdots \\frac{19}{20}$. Everything cancels except the first numerator $3$ and the last denominator $20$, giving $\\frac{3}{20}$ ✓, in lowest terms because $20 = 2^2 \\cdot 5$ has no factor of $3$. Check a second, independent way by multiplying out the front: $\\frac{3}{4}$, then $\\frac{3}{4} \\cdot \\frac{4}{5} = \\frac{3}{5}$, then $\\cdot \\frac{5}{6} = \\frac{3}{6} = \\frac{1}{2}$, then $\\cdot \\frac{6}{7} = \\frac{3}{7}$ — the numerator is pinned at $3$ while the denominator marches upward, ending at $20$ ✓. (The choice $\\frac{19}{20}$ is ONLY THE LAST FACTOR; $\\frac{1}{20}$ is THE LOST FIRST NUMERATOR; $\\frac{20}{3}$ is THE FLIPPED PRODUCT.)',
    },
  ],
  // s5 — an INFINITE telescope: the partial sum is first-minus-a-shrinking-piece.
  [
    {
      q: 'Compute the infinite sum $\\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\frac{1}{4 \\cdot 5} + \\cdots$',
      choices: ['$1$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', 'It grows without bound'],
      answer: 1,
      solution:
        'Split and collapse the first $k$ terms: they run from $\\frac{1}{2} - \\frac{1}{3}$ up to $\\frac{1}{k+1} - \\frac{1}{k+2}$, so the partial sum is $\\frac{1}{2} - \\frac{1}{k+2}$. As $k$ grows, $\\frac{1}{k+2}$ shrinks to nothing, so the total climbs toward exactly $\\frac{1}{2}$ ✓ — never past it, since a positive piece is always being subtracted. Check a second, independent way by adding the first few by hand: $\\frac{1}{6}$, then $\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}$, then $+\\frac{1}{20} = \\frac{3}{10}$, then $+\\frac{1}{30} = \\frac{1}{3}$ — and $\\frac{1}{6}, \\frac{1}{4}, \\frac{3}{10}, \\frac{1}{3}$ are exactly $\\frac{1}{2}$ minus $\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}, \\frac{1}{6}$ ✓, closing in on $\\frac{1}{2}$. (The choice $1$ belongs to the sum that starts at $\\frac{1}{1 \\cdot 2}$; $\\frac{1}{3}$ is where you stand after only four terms; "It grows without bound" is wrong because the partial sums never pass $\\frac{1}{2}$.)',
    },
    {
      q: 'Compute the infinite sum $\\frac{1}{3 \\cdot 4} + \\frac{1}{4 \\cdot 5} + \\frac{1}{5 \\cdot 6} + \\cdots$',
      choices: ['It grows without bound', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'Collapse the first $k$ terms: the chain opens at $\\frac{1}{3}$ and closes at $-\\frac{1}{k+3}$, so the partial sum is $\\frac{1}{3} - \\frac{1}{k+3}$. That subtracted piece shrinks toward $0$, so the sum settles on exactly $\\frac{1}{3}$ ✓. Check a second, independent way by adding by hand: $\\frac{1}{12}$, then $\\frac{1}{12} + \\frac{1}{20} = \\frac{2}{15}$, then $+\\frac{1}{30} = \\frac{1}{6}$, then $+\\frac{1}{42} = \\frac{4}{21}$ — these are $\\frac{1}{3}$ minus $\\frac{1}{4}, \\frac{1}{5}, \\frac{1}{6}, \\frac{1}{7}$ ✓, a total edging up to $\\frac{1}{3}$ and stopping there. (The choice $\\frac{1}{2}$ belongs to the sum starting at $\\frac{1}{2 \\cdot 3}$; $\\frac{1}{4}$ belongs to the one starting at $\\frac{1}{4 \\cdot 5}$; "It grows without bound" is wrong — every partial sum stays under $\\frac{1}{3}$.)',
    },
    {
      q: 'Compute the infinite sum $\\frac{1}{4 \\cdot 5} + \\frac{1}{5 \\cdot 6} + \\frac{1}{6 \\cdot 7} + \\cdots$',
      choices: ['$1$', '$\\frac{1}{5}$', 'It grows without bound', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'Split each term and add the first $k$ of them: everything between cancels and the partial sum is $\\frac{1}{4} - \\frac{1}{k+4}$. The piece being subtracted shrinks toward $0$ as $k$ grows, so the sum approaches exactly $\\frac{1}{4}$ ✓. Check a second, independent way by hand: $\\frac{1}{20}$, then $\\frac{1}{20} + \\frac{1}{30} = \\frac{1}{12}$, then $+\\frac{1}{42} = \\frac{3}{28}$, then $+\\frac{1}{56} = \\frac{1}{8}$ — and $\\frac{1}{20}, \\frac{1}{12}, \\frac{3}{28}, \\frac{1}{8}$ are $\\frac{1}{4}$ minus $\\frac{1}{5}, \\frac{1}{6}, \\frac{1}{7}, \\frac{1}{8}$ ✓. (The choice $1$ belongs to the sum that starts at $\\frac{1}{1 \\cdot 2}$; $\\frac{1}{5}$ mistakes the second denominator of the opening term for the survivor; "It grows without bound" is wrong, since the partial sums never reach $\\frac{1}{4}$.)',
    },
  ],
  // s5 — the telescope is hidden: the denominators arrive as plain integers.
  [
    {
      q: 'Compute $\\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56}$.',
      choices: ['$\\frac{5}{24}$', '$\\frac{11}{24}$', '$\\frac{4}{21}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'Factor the denominators and a telescope appears: $12 = 3 \\cdot 4$, $20 = 4 \\cdot 5$, $30 = 5 \\cdot 6$, $42 = 6 \\cdot 7$, $56 = 7 \\cdot 8$ — consecutive pairs every time. Split each term and cancel the middle: $\\frac{1}{3} - \\frac{1}{8} = \\frac{8}{24} - \\frac{3}{24} = \\frac{5}{24}$ ✓, in lowest terms since $24$ is not a multiple of $5$. Check a second, independent way by adding the five fractions outright over $840$: $\\frac{70}{840} + \\frac{42}{840} + \\frac{28}{840} + \\frac{20}{840} + \\frac{15}{840} = \\frac{175}{840} = \\frac{5}{24}$ ✓ (divide top and bottom by $35$). (The choice $\\frac{11}{24}$ is THE ADDED ENDPOINTS, $\\frac{1}{3} + \\frac{1}{8}$; $\\frac{4}{21}$ is THE LOST LAST STEP, $\\frac{1}{3} - \\frac{1}{7}$; $\\frac{1}{8}$ is THE LOST FIRST TERM, $\\frac{1}{4} - \\frac{1}{8}$.)',
    },
    {
      q: 'Compute $\\frac{1}{20} + \\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56} + \\frac{1}{72}$.',
      choices: ['$\\frac{13}{36}$', '$\\frac{1}{8}$', '$\\frac{5}{36}$', '$\\frac{4}{45}$'],
      answer: 2,
      solution:
        'Look for consecutive products underneath: $20 = 4 \\cdot 5$, $30 = 5 \\cdot 6$, $42 = 6 \\cdot 7$, $56 = 7 \\cdot 8$, $72 = 8 \\cdot 9$. Splitting turns the sum into $\\frac{1}{4} - \\frac{1}{5} + \\frac{1}{5} - \\frac{1}{6} + \\cdots + \\frac{1}{8} - \\frac{1}{9}$, which collapses to $\\frac{1}{4} - \\frac{1}{9} = \\frac{9}{36} - \\frac{4}{36} = \\frac{5}{36}$ ✓, in lowest terms since $36$ has no factor of $5$. Check a second, independent way by adding outright over $2520$: $\\frac{126}{2520} + \\frac{84}{2520} + \\frac{60}{2520} + \\frac{45}{2520} + \\frac{35}{2520} = \\frac{350}{2520} = \\frac{5}{36}$ ✓ (divide top and bottom by $70$). (The choice $\\frac{13}{36}$ is THE ADDED ENDPOINTS; $\\frac{1}{8}$ is THE LOST LAST STEP, $\\frac{1}{4} - \\frac{1}{8}$; $\\frac{4}{45}$ is THE LOST FIRST TERM, $\\frac{1}{5} - \\frac{1}{9}$.)',
    },
    {
      q: 'Compute $\\frac{1}{30} + \\frac{1}{42} + \\frac{1}{56} + \\frac{1}{72} + \\frac{1}{90}$.',
      choices: ['$\\frac{3}{10}$', '$\\frac{4}{45}$', '$\\frac{1}{15}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        'The denominators are consecutive products in disguise: $30 = 5 \\cdot 6$, $42 = 6 \\cdot 7$, $56 = 7 \\cdot 8$, $72 = 8 \\cdot 9$, $90 = 9 \\cdot 10$. Split each term and let the middle cancel: $\\frac{1}{5} - \\frac{1}{10} = \\frac{2}{10} - \\frac{1}{10} = \\frac{1}{10}$ ✓. Check a second, independent way by adding the originals over $2520$: $\\frac{84}{2520} + \\frac{60}{2520} + \\frac{45}{2520} + \\frac{35}{2520} + \\frac{28}{2520} = \\frac{252}{2520} = \\frac{1}{10}$ ✓ (divide top and bottom by $252$). (The choice $\\frac{3}{10}$ is THE ADDED ENDPOINTS, $\\frac{1}{5} + \\frac{1}{10}$; $\\frac{4}{45}$ is THE LOST LAST STEP, $\\frac{1}{5} - \\frac{1}{9}$; $\\frac{1}{15}$ is THE LOST FIRST TERM, $\\frac{1}{6} - \\frac{1}{10}$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  sections: {
    '21.5': s215,
  },
}
