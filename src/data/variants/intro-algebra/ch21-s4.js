// Introduction to Algebra chapter 21 — variations for section 21.4
// (Geometric Series). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked twice by two genuinely different routes. Short finite
//    sums were added straight down the line AND settled by shift-and-subtract;
//    infinite sums were run through $\frac{a}{1-r}$ AND re-derived from
//    $S = a + rS$; repeating decimals were summed as geometric series AND
//    checked by long division of the keyed fraction; the reverse problems
//    (sum and ratio given, first term wanted) were solved forwards AND checked
//    by summing the series the answer builds.
//  - Convergence is decided by the SIZE of the ratio, never by whether the
//    terms happen to look small.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: THE DROPPED LAST TERM, ANSWERING WITH THE NEXT
//    TERM, FORGETTING TO DIVIDE BY r MINUS 1, SUBTRACTING THE WRONG END,
//    MULTIPLYING BY 1 MINUS r, DIVIDING BY r, THE FLIPPED DENOMINATOR,
//    IGNORING THAT THE RATIO IS SMALL, THE DROPPED TAIL, THE WRONG BLOCK
//    LENGTH, CANCELLING A DIGIT INSTEAD OF A FACTOR, ONE TERM SHORT, ONE TERM
//    TOO MANY, JUDGING BY THE FIRST TERM INSTEAD OF THE RATIO, NO DOUBLING,
//    DROPPING THE FIRST TRIP, and DOUBLING THE FIRST TRIP TOO.
//  - No two choices inside an item name the same value.

const s214 = [
  // s4 — a short finite geometric sum, five terms written out: add it, and
  // confirm with shift-and-subtract.
  [
    {
      q: 'Compute $5 + 15 + 45 + 135 + 405$.',
      choices: ['$200$', '$605$', '$1210$', '$1215$'],
      answer: 1,
      solution:
        'Add straight down the line: $5 + 15 = 20$, then $20 + 45 = 65$, then $65 + 135 = 200$, then $200 + 405 = 605$ ✓. Check a second, independent way with shift-and-subtract. The ratio is $\\frac{15}{5} = 3$, so $3S = 15 + 45 + 135 + 405 + 1215$; subtracting the original sum cancels everything in the middle and leaves $2S = 1215 - 5 = 1210$, so $S = 605$ ✓. (The choice $200$ is THE DROPPED LAST TERM, the total of just the first four; the choice $1210$ is FORGETTING TO DIVIDE BY $r - 1$ at the end of the shift-and-subtract; the choice $1215$ is ANSWERING WITH THE NEXT TERM instead of the sum.)',
    },
    {
      q: 'Compute $9 + 18 + 36 + 72 + 144$.',
      choices: ['$279$', '$135$', '$270$', '$288$'],
      answer: 0,
      solution:
        'Add in order: $9 + 18 = 27$, then $27 + 36 = 63$, then $63 + 72 = 135$, then $135 + 144 = 279$ ✓. Check a second, independent way with shift-and-subtract. The ratio is $2$, so $2S = 18 + 36 + 72 + 144 + 288$; subtracting $S$ wipes out every shared term and leaves $S = 288 - 9 = 279$ ✓ — with ratio $2$ there is no dividing left to do. (The choice $135$ is THE DROPPED LAST TERM; the choice $288$ is ANSWERING WITH THE NEXT TERM; the choice $270$ is SUBTRACTING THE WRONG END, $288 - 18$, when the leftover on the low end is the FIRST term.)',
    },
    {
      q: 'Compute $5 + 20 + 80 + 320 + 1280$.',
      choices: ['$425$', '$5115$', '$1705$', '$5120$'],
      answer: 2,
      solution:
        'Add straight down the line: $5 + 20 = 25$, then $25 + 80 = 105$, then $105 + 320 = 425$, then $425 + 1280 = 1705$ ✓. Check a second, independent way with shift-and-subtract. The ratio is $\\frac{20}{5} = 4$, so $4S = 20 + 80 + 320 + 1280 + 5120$, and subtracting $S$ leaves $3S = 5120 - 5 = 5115$, so $S = \\frac{5115}{3} = 1705$ ✓. (The choice $425$ is THE DROPPED LAST TERM; the choice $5115$ is FORGETTING TO DIVIDE BY $r - 1$, here the $3$; the choice $5120$ is ANSWERING WITH THE NEXT TERM.)',
    },
  ],
  // s4 — an infinite series whose ratio is safely small: does it settle, and on
  // what number?
  [
    {
      q: 'Compute the infinite sum $20 + 4 + \\frac{4}{5} + \\frac{4}{25} + \\cdots$',
      choices: ['$16$', '$25$', '$100$', 'It grows without bound'],
      answer: 1,
      solution:
        'The ratio is $\\frac{4}{20} = \\frac{1}{5}$, and $\\left|\\frac{1}{5}\\right| < 1$, so the sum really does settle on a number: $\\frac{a}{1 - r} = \\frac{20}{1 - \\frac{1}{5}} = \\frac{20}{\\frac{4}{5}} = 25$ ✓. Check a second, independent way without the formula. Peel off the first term: everything after it is $\\frac{1}{5}$ of the whole sum, so $S = 20 + \\frac{1}{5}S$, giving $\\frac{4}{5}S = 20$ and $S = 25$ ✓. The partial totals agree, climbing $20$, $24$, $24.8$, $24.96$ toward $25$. (The choice $16$ is MULTIPLYING BY $1 - r$ instead of dividing, $20 \\times \\frac{4}{5}$; the choice $100$ is DIVIDING BY $r$, $20 \\div \\frac{1}{5}$; the choice that it grows without bound is IGNORING THAT THE RATIO IS SMALL — terms shrinking by a factor of $5$ cannot pile up forever.)',
    },
    {
      q: 'Compute the infinite sum $5 + \\frac{10}{3} + \\frac{20}{9} + \\frac{40}{27} + \\cdots$',
      choices: ['$3$', 'It grows without bound', '$15$', '$\\frac{15}{2}$'],
      answer: 2,
      solution:
        'The ratio is $\\frac{10/3}{5} = \\frac{2}{3}$, which is below $1$ in size, so the series converges: $\\frac{a}{1 - r} = \\frac{5}{1 - \\frac{2}{3}} = \\frac{5}{\\frac{1}{3}} = 15$ ✓. Check a second, independent way without the formula. Peeling off the first term leaves $\\frac{2}{3}$ of the whole sum, so $S = 5 + \\frac{2}{3}S$, giving $\\frac{1}{3}S = 5$ and $S = 15$ ✓. The partial totals creep up: $5$, $\\frac{25}{3} \\approx 8.33$, $\\frac{95}{9} \\approx 10.56$, then about $12.04$ — slow, but headed for $15$. (The choice $3$ is THE FLIPPED DENOMINATOR, $\\frac{5}{1 + \\frac{2}{3}}$; the choice $\\frac{15}{2}$ is DIVIDING BY $r$, $5 \\div \\frac{2}{3}$; the choice that it grows without bound is IGNORING THAT THE RATIO IS SMALL — a ratio of $\\frac{2}{3}$ shrinks the terms, even though it shrinks them slowly.)',
    },
    {
      q: 'Compute the infinite sum $9 + \\frac{27}{4} + \\frac{81}{16} + \\frac{243}{64} + \\cdots$',
      choices: ['$\\frac{36}{7}$', '$12$', 'It grows without bound', '$36$'],
      answer: 3,
      solution:
        'The ratio is $\\frac{27/4}{9} = \\frac{3}{4}$, below $1$ in size, so the sum settles: $\\frac{a}{1 - r} = \\frac{9}{1 - \\frac{3}{4}} = \\frac{9}{\\frac{1}{4}} = 36$ ✓. Check a second, independent way without the formula. Everything after the first term is $\\frac{3}{4}$ of the whole, so $S = 9 + \\frac{3}{4}S$, giving $\\frac{1}{4}S = 9$ and $S = 36$ ✓. (The choice $\\frac{36}{7}$ is THE FLIPPED DENOMINATOR, $\\frac{9}{1 + \\frac{3}{4}}$ — and it is smaller than the first term, which is impossible for a sum of positive numbers; the choice $12$ is DIVIDING BY $r$, $9 \\div \\frac{3}{4}$; the choice that it grows without bound is IGNORING THAT THE RATIO IS SMALL.)',
    },
  ],
  // s4 — five written terms again, but here shift-and-subtract leads and the
  // direct addition is the check.
  [
    {
      q: 'Compute $9 + 27 + 81 + 243 + 729$.',
      choices: ['$1089$', '$360$', '$2178$', '$2187$'],
      answer: 0,
      solution:
        'Shift and subtract. The ratio is $3$, so $3S = 27 + 81 + 243 + 729 + 2187$; subtracting $S$ cancels every term the two lists share and leaves $2S = 2187 - 9 = 2178$, so $S = 1089$ ✓. Check a second, independent way by plain addition: $9 + 27 = 36$, $36 + 81 = 117$, $117 + 243 = 360$, $360 + 729 = 1089$ ✓. (The choice $360$ is THE DROPPED LAST TERM; the choice $2178$ is FORGETTING TO DIVIDE BY $r - 1$, here the $2$; the choice $2187$ is ANSWERING WITH THE NEXT TERM.)',
    },
    {
      q: 'Compute $45 + 90 + 180 + 360 + 720$.',
      choices: ['$675$', '$1350$', '$1395$', '$1440$'],
      answer: 2,
      solution:
        'Shift and subtract. The ratio is $2$, so $2S = 90 + 180 + 360 + 720 + 1440$; subtracting $S$ leaves $S = 1440 - 45 = 1395$ ✓ — the top of the doubled list minus the bottom of the original. Check a second, independent way by adding in order: $45 + 90 = 135$, $135 + 180 = 315$, $315 + 360 = 675$, $675 + 720 = 1395$ ✓. (The choice $675$ is THE DROPPED LAST TERM; the choice $1440$ is ANSWERING WITH THE NEXT TERM; the choice $1350$ is SUBTRACTING THE WRONG END, $1440 - 90$, when the term left over below is the first one, $45$.)',
    },
    {
      q: 'Compute $9 + 36 + 144 + 576 + 2304$.',
      choices: ['$765$', '$9207$', '$9216$', '$3069$'],
      answer: 3,
      solution:
        'Shift and subtract. The ratio is $\\frac{36}{9} = 4$, so $4S = 36 + 144 + 576 + 2304 + 9216$; subtracting $S$ leaves $3S = 9216 - 9 = 9207$, so $S = \\frac{9207}{3} = 3069$ ✓. Check a second, independent way by adding in order: $9 + 36 = 45$, $45 + 144 = 189$, $189 + 576 = 765$, $765 + 2304 = 3069$ ✓. (The choice $765$ is THE DROPPED LAST TERM; the choice $9207$ is FORGETTING TO DIVIDE BY $r - 1$, here the $3$; the choice $9216$ is ANSWERING WITH THE NEXT TERM.)',
    },
  ],
  // s4 — an infinite series with a fractional ratio: run it through the
  // infinite-sum formula and land on a whole number.
  [
    {
      q: 'Compute the infinite sum $30 + 10 + \\frac{10}{3} + \\frac{10}{9} + \\cdots$',
      choices: ['$45$', '$\\frac{45}{2}$', '$90$', '$20$'],
      answer: 0,
      solution:
        'The ratio is $\\frac{10}{30} = \\frac{1}{3}$, comfortably between $-1$ and $1$, so the formula applies: $\\frac{a}{1 - r} = \\frac{30}{1 - \\frac{1}{3}} = \\frac{30}{\\frac{2}{3}} = 30 \\times \\frac{3}{2} = 45$ ✓. Check a second, independent way by re-deriving the total from scratch: everything after the first term is $\\frac{1}{3}$ of the whole sum, so $S = 30 + \\frac{1}{3}S$, hence $\\frac{2}{3}S = 30$ and $S = 45$ ✓. The running totals back this up: $30$, $40$, $\\frac{130}{3} \\approx 43.3$, then about $44.4$ — closing in on $45$. (The choice $\\frac{45}{2}$ is THE FLIPPED DENOMINATOR, $\\frac{30}{1 + \\frac{1}{3}}$, which is less than the first term alone ✗; the choice $90$ is DIVIDING BY $r$; the choice $20$ is MULTIPLYING BY $1 - r$, $30 \\times \\frac{2}{3}$.)',
    },
    {
      q: 'Compute the infinite sum $5 + \\frac{15}{4} + \\frac{45}{16} + \\frac{135}{64} + \\cdots$',
      choices: ['$\\frac{20}{7}$', '$20$', '$\\frac{20}{3}$', '$\\frac{5}{4}$'],
      answer: 1,
      solution:
        'The ratio is $\\frac{15/4}{5} = \\frac{3}{4}$, so $|r| < 1$ and the sum settles: $\\frac{a}{1 - r} = \\frac{5}{1 - \\frac{3}{4}} = \\frac{5}{\\frac{1}{4}} = 20$ ✓. Check a second, independent way by re-deriving it: the tail after the first term is $\\frac{3}{4}$ of the whole, so $S = 5 + \\frac{3}{4}S$, hence $\\frac{1}{4}S = 5$ and $S = 20$ ✓. A ratio this close to $1$ makes the climb slow — four terms only reach $\\frac{875}{64} \\approx 13.7$ — but the total is still finite. (The choice $\\frac{20}{7}$ is THE FLIPPED DENOMINATOR, $\\frac{5}{1 + \\frac{3}{4}}$; the choice $\\frac{20}{3}$ is DIVIDING BY $r$, $5 \\div \\frac{3}{4}$; the choice $\\frac{5}{4}$ is MULTIPLYING BY $1 - r$, $5 \\times \\frac{1}{4}$, which is smaller than the first term ✗.)',
    },
    {
      q: 'Compute the infinite sum $40 + 8 + \\frac{8}{5} + \\frac{8}{25} + \\cdots$',
      choices: ['$\\frac{100}{3}$', '$200$', '$32$', '$50$'],
      answer: 3,
      solution:
        'The ratio is $\\frac{8}{40} = \\frac{1}{5}$, so the formula applies: $\\frac{a}{1 - r} = \\frac{40}{1 - \\frac{1}{5}} = \\frac{40}{\\frac{4}{5}} = 40 \\times \\frac{5}{4} = 50$ ✓. Check a second, independent way by re-deriving it: the part after the first term is $\\frac{1}{5}$ of the whole sum, so $S = 40 + \\frac{1}{5}S$, hence $\\frac{4}{5}S = 40$ and $S = 50$ ✓. Running totals: $40$, $48$, $49.6$, $49.92$ — squeezing up to $50$ without ever passing it. (The choice $\\frac{100}{3}$ is THE FLIPPED DENOMINATOR, $\\frac{40}{1 + \\frac{1}{5}}$, and it is below the first term ✗; the choice $200$ is DIVIDING BY $r$; the choice $32$ is MULTIPLYING BY $1 - r$, $40 \\times \\frac{4}{5}$.)',
    },
  ],
  // s4 — a repeating decimal with a one-digit block, turned into a fraction.
  [
    {
      q: 'Write $0.\\overline{8}$ as a fraction.',
      choices: ['$\\frac{4}{5}$', '$\\frac{8}{9}$', '$\\frac{8}{11}$', '$\\frac{8}{99}$'],
      answer: 1,
      solution:
        'Expand the decimal: $0.888\\ldots = \\frac{8}{10} + \\frac{8}{100} + \\frac{8}{1000} + \\cdots$, a geometric series with $a = \\frac{8}{10}$ and $r = \\frac{1}{10}$. Its sum is $\\frac{8/10}{1 - 1/10} = \\frac{8/10}{9/10} = \\frac{8}{9}$ ✓. Check a second, independent way by dividing $8$ by $9$ the long way: $9$ goes into $80$ eight times with remainder $8$, and that same remainder returns forever, giving $0.888\\ldots$ ✓. (The choice $\\frac{4}{5}$ is THE DROPPED TAIL — it equals $0.8$ exactly, and the repeating digits push the value higher; the choice $\\frac{8}{11}$ is $0.\\overline{72}$, not our decimal; the choice $\\frac{8}{99}$ is THE WRONG BLOCK LENGTH, the answer for the two-digit block $0.\\overline{08}$.)',
    },
    {
      q: 'Write $0.\\overline{2}$ as a fraction.',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{11}$', '$\\frac{2}{9}$', '$\\frac{2}{99}$'],
      answer: 2,
      solution:
        'Expand the decimal: $0.222\\ldots = \\frac{2}{10} + \\frac{2}{100} + \\frac{2}{1000} + \\cdots$, geometric with $a = \\frac{2}{10}$ and $r = \\frac{1}{10}$. The sum is $\\frac{2/10}{9/10} = \\frac{2}{9}$ ✓. Check a second, independent way by long division: $9$ into $20$ goes twice with remainder $2$, and the remainder repeats forever, so $\\frac{2}{9} = 0.222\\ldots$ ✓. (The choice $\\frac{1}{5}$ is THE DROPPED TAIL, since $\\frac{1}{5} = 0.2$ and stops there; the choice $\\frac{2}{11}$ is $0.\\overline{18}$; the choice $\\frac{2}{99}$ is THE WRONG BLOCK LENGTH, which belongs to $0.\\overline{02}$.)',
    },
    {
      q: 'Write $0.\\overline{6}$ as a fraction in lowest terms.',
      choices: ['$\\frac{3}{5}$', '$\\frac{6}{11}$', '$\\frac{2}{33}$', '$\\frac{2}{3}$'],
      answer: 3,
      solution:
        'Expand the decimal: $0.666\\ldots = \\frac{6}{10} + \\frac{6}{100} + \\cdots$, geometric with $r = \\frac{1}{10}$, so the sum is $\\frac{6/10}{9/10} = \\frac{6}{9}$, which reduces to $\\frac{2}{3}$ ✓. Check a second, independent way by long division: $3$ into $20$ goes six times with remainder $2$, forever, so $\\frac{2}{3} = 0.666\\ldots$ ✓. (The choice $\\frac{3}{5}$ is THE DROPPED TAIL, exactly $0.6$; the choice $\\frac{6}{11}$ is $0.\\overline{54}$; the choice $\\frac{2}{33}$ is THE WRONG BLOCK LENGTH, since $\\frac{6}{99} = \\frac{2}{33} = 0.\\overline{06}$.)',
    },
  ],
  // s4 — convergence is about the SIZE of the ratio: pick the one series that
  // adds up to a finite number.
  [
    {
      q: 'One of these infinite series settles on a finite total. Which one?',
      choices: [
        '$45 + 15 + 5 + \\frac{5}{3} + \\cdots$',
        '$2 + 8 + 32 + 128 + \\cdots$',
        '$6 + 6 + 6 + 6 + \\cdots$',
        '$8 + 12 + 18 + 27 + \\cdots$',
      ],
      answer: 0,
      solution:
        'Divide each term by the one before it to read off the four ratios: $\\frac{15}{45} = \\frac{1}{3}$, then $\\frac{8}{2} = 4$, then $\\frac{6}{6} = 1$, then $\\frac{12}{8} = \\frac{3}{2}$. An infinite geometric series settles only when $|r| < 1$, and only $\\frac{1}{3}$ qualifies, so the first series is the one with a finite total — in fact $\\frac{45}{1 - \\frac{1}{3}} = \\frac{45}{\\frac{2}{3}} = \\frac{135}{2}$ ✓. Check a second, independent way by watching the terms themselves: in $45, 15, 5, \\frac{5}{3}, \\ldots$ they shrink toward $0$ ✓, while the other three lists have terms that grow ($2, 8, 32$ and $8, 12, 18$) or never shrink at all ($6, 6, 6$) ✗ — a pile of sixes passes any number you name. (Choosing $2 + 8 + 32 + \\cdots$ or $8 + 12 + 18 + \\cdots$ is JUDGING BY THE FIRST TERM INSTEAD OF THE RATIO, since both start small and still run away; choosing $6 + 6 + 6 + \\cdots$ treats $r = 1$ as small enough, but the boundary case is exactly the one that fails.)',
    },
    {
      q: 'Which one of these infinite series has a finite sum?',
      choices: [
        '$4 + 12 + 36 + 108 + \\cdots$',
        '$27 + 18 + 12 + 8 + \\cdots$',
        '$16 + 24 + 36 + 54 + \\cdots$',
        '$9 + 9 + 9 + 9 + \\cdots$',
      ],
      answer: 1,
      solution:
        'Read off the ratios: $\\frac{12}{4} = 3$, then $\\frac{18}{27} = \\frac{2}{3}$, then $\\frac{24}{16} = \\frac{3}{2}$, then $\\frac{9}{9} = 1$. Only $\\frac{2}{3}$ is below $1$ in size, so only $27 + 18 + 12 + 8 + \\cdots$ has a finite total, namely $\\frac{27}{1 - \\frac{2}{3}} = \\frac{27}{\\frac{1}{3}} = 81$ ✓. Check a second, independent way by testing whether the terms head to $0$: the second list runs $27, 18, 12, 8, \\frac{16}{3}, \\ldots$, shrinking steadily ✓, while $16, 24, 36, 54$ grows even though it looks tame at the start ✗, $4, 12, 36$ explodes ✗, and a list of nines never budges ✗. (Choosing $16 + 24 + 36 + \\cdots$ is JUDGING BY THE FIRST TERM INSTEAD OF THE RATIO — growth of $50\\%$ a term is still growth; choosing $9 + 9 + 9 + \\cdots$ treats the boundary $r = 1$ as convergent, but after $n$ terms that sum is $9n$, which passes every bound.)',
    },
    {
      q: 'Exactly one of these infinite series adds up to a number instead of running away forever. Which one?',
      choices: [
        '$2 - 6 + 18 - 54 + \\cdots$',
        '$11 + 11 + 11 + 11 + \\cdots$',
        '$50 + 10 + 2 + \\frac{2}{5} + \\cdots$',
        '$16 + 20 + 25 + \\frac{125}{4} + \\cdots$',
      ],
      answer: 2,
      solution:
        'Read off the ratios: $\\frac{-6}{2} = -3$, then $\\frac{11}{11} = 1$, then $\\frac{10}{50} = \\frac{1}{5}$, then $\\frac{20}{16} = \\frac{5}{4}$. The test is on the SIZE of the ratio, so $|-3| = 3$ is far too big and $\\frac{5}{4}$ is too big as well; only $\\frac{1}{5}$ passes, and $50 + 10 + 2 + \\cdots$ sums to $\\frac{50}{1 - \\frac{1}{5}} = \\frac{50}{\\frac{4}{5}} = \\frac{125}{2}$ ✓. Check a second, independent way by looking at the terms: $50, 10, 2, \\frac{2}{5}$ dives toward $0$ ✓, while $2, -6, 18, -54$ swings wider and wider ✗, the elevens never shrink ✗, and $16, 20, 25$ grows by a quarter each time ✗. (Choosing $2 - 6 + 18 - \\cdots$ is reading the minus signs as shrinkage, when the SIZE of each term triples; choosing $16 + 20 + 25 + \\cdots$ is JUDGING BY THE FIRST TERM INSTEAD OF THE RATIO; choosing the elevens treats $r = 1$ as small enough.)',
    },
  ],
  // s4 — a finite geometric sum given by its ends: count the terms first, then
  // shift and subtract.
  [
    {
      q: 'Compute $20 + 60 + 180 + \\cdots + 4860$.',
      choices: ['$7280$', '$2420$', '$14560$', '$21860$'],
      answer: 0,
      solution:
        'Count the terms before summing anything. The ratio is $3$, so the terms are $20 \\cdot 3^{n-1}$, and $4860 = 20 \\times 243 = 20 \\cdot 3^5$ tells us the last term is the $6$th. Now shift and subtract: $3S = 60 + 180 + \\cdots + 4860 + 14580$, and subtracting $S$ leaves $2S = 14580 - 20 = 14560$, so $S = 7280$ ✓. Check a second, independent way by writing out all six terms and adding: $20, 60, 180, 540, 1620, 4860$ give running totals $20, 80, 260, 800, 2420, 7280$ ✓. (The choice $2420$ is ONE TERM SHORT, stopping at $1620$; the choice $14560$ is FORGETTING TO DIVIDE BY $r - 1$; the choice $21860$ is ONE TERM TOO MANY, adding the $7$th term $14580$.)',
    },
    {
      q: 'Compute $15 + 30 + 60 + \\cdots + 960$.',
      choices: ['$945$', '$1920$', '$1905$', '$3825$'],
      answer: 2,
      solution:
        'Count the terms first. The ratio is $2$ and the terms are $15 \\cdot 2^{n-1}$; since $960 = 15 \\times 64 = 15 \\cdot 2^6$, the last term is the $7$th. Shift and subtract: $2S = 30 + 60 + \\cdots + 960 + 1920$, and subtracting $S$ leaves $S = 1920 - 15 = 1905$ ✓. Check a second, independent way by listing and adding all seven terms: $15, 30, 60, 120, 240, 480, 960$ give running totals $15, 45, 105, 225, 465, 945, 1905$ ✓. (The choice $945$ is ONE TERM SHORT, the total of the first six; the choice $1920$ is ANSWERING WITH THE NEXT TERM; the choice $3825$ is ONE TERM TOO MANY, $1905 + 1920$.)',
    },
    {
      q: 'Compute $30 + 90 + 270 + \\cdots + 2430$.',
      choices: ['$1200$', '$7260$', '$7290$', '$3630$'],
      answer: 3,
      solution:
        'Count the terms first. The ratio is $3$ and the terms are $30 \\cdot 3^{n-1}$; since $2430 = 30 \\times 81 = 30 \\cdot 3^4$, the last term is the $5$th. Shift and subtract: $3S = 90 + 270 + 810 + 2430 + 7290$, so $2S = 7290 - 30 = 7260$ and $S = 3630$ ✓. Check a second, independent way by adding the five terms $30, 90, 270, 810, 2430$ in order: $30, 120, 390, 1200, 3630$ ✓. (The choice $1200$ is ONE TERM SHORT, stopping at $810$; the choice $7260$ is FORGETTING TO DIVIDE BY $r - 1$, here the $2$; the choice $7290$ is ANSWERING WITH THE NEXT TERM.)',
    },
  ],
  // s4 — the reverse question: the infinite sum and the ratio are given, and
  // the first term is what is missing.
  [
    {
      q: 'An infinite geometric series has sum $45$ and common ratio $\\frac{2}{3}$. What is its first term?',
      choices: ['$15$', '$75$', '$30$', '$\\frac{135}{2}$'],
      answer: 0,
      solution:
        'Start from $\\frac{a}{1 - r} = 45$ with $r = \\frac{2}{3}$. Since $1 - r = \\frac{1}{3}$, the equation is $\\frac{a}{1/3} = 45$, that is $3a = 45$, so $a = 15$ ✓. Check a second, independent way by building the series the answer claims and summing it: $15 + 10 + \\frac{20}{3} + \\frac{40}{9} + \\cdots$ has first term $15$ and ratio $\\frac{2}{3}$, and $\\frac{15}{1 - \\frac{2}{3}} = \\frac{15}{\\frac{1}{3}} = 45$ ✓. It also makes sense that the first term is well below the total, because a slow ratio like $\\frac{2}{3}$ leaves plenty of sum in the tail. (The choice $75$ uses $1 + r$ instead of $1 - r$, THE FLIPPED DENOMINATOR, and a first term larger than the whole sum is impossible for positive terms ✗; the choice $30$ is $45 \\times \\frac{2}{3}$, MULTIPLYING BY $r$ instead of by $1 - r$; the choice $\\frac{135}{2}$ is DIVIDING BY $r$, $45 \\div \\frac{2}{3}$.)',
    },
    {
      q: 'An infinite geometric series has sum $30$ and common ratio $\\frac{1}{3}$. What is its first term?',
      choices: ['$40$', '$20$', '$10$', '$90$'],
      answer: 1,
      solution:
        'From $\\frac{a}{1 - r} = 30$ with $r = \\frac{1}{3}$: here $1 - r = \\frac{2}{3}$, so $\\frac{a}{2/3} = 30$, giving $a = 30 \\times \\frac{2}{3} = 20$ ✓. Check a second, independent way by summing the series that first term produces: $20 + \\frac{20}{3} + \\frac{20}{9} + \\cdots$ has running totals $20$, $\\frac{80}{3} \\approx 26.7$, $\\frac{260}{9} \\approx 28.9$, closing on $\\frac{20}{2/3} = 30$ ✓. (The choice $40$ is THE FLIPPED DENOMINATOR, $30 \\times \\frac{4}{3}$, and exceeds the total ✗; the choice $10$ is MULTIPLYING BY $r$, $30 \\times \\frac{1}{3}$; the choice $90$ is DIVIDING BY $r$, $30 \\div \\frac{1}{3}$.)',
    },
    {
      q: 'An infinite geometric series has sum $100$ and common ratio $\\frac{3}{4}$. What is its first term?',
      choices: ['$175$', '$75$', '$\\frac{400}{3}$', '$25$'],
      answer: 3,
      solution:
        'From $\\frac{a}{1 - r} = 100$ with $r = \\frac{3}{4}$: here $1 - r = \\frac{1}{4}$, so $\\frac{a}{1/4} = 100$, that is $4a = 100$, giving $a = 25$ ✓. Check a second, independent way by summing the series that answer builds: $25 + \\frac{75}{4} + \\frac{225}{16} + \\cdots$ has ratio $\\frac{3}{4}$ and total $\\frac{25}{\\frac{1}{4}} = 100$ ✓. A ratio this close to $1$ means the first term is only a quarter of the sum — almost all of the total lives in the tail. (The choice $175$ is THE FLIPPED DENOMINATOR, $100 \\times \\frac{7}{4}$ ✗; the choice $75$ is MULTIPLYING BY $r$, $100 \\times \\frac{3}{4}$; the choice $\\frac{400}{3}$ is DIVIDING BY $r$, $100 \\div \\frac{3}{4}$.)',
    },
  ],
  // s4 — a shrinking physical process that runs forever: total travel is an
  // infinite geometric sum, and the trips that get counted twice are the trap.
  [
    {
      q: 'Omar pulls the bob of a pendulum $40$ cm to the right of its resting point and lets go. It swings across and reaches $30$ cm to the left, then back to $\\frac{3}{4}$ of that on the right, and so on forever. What total distance does the bob travel?',
      choices: ['$160$ cm', '$280$ cm', '$240$ cm', '$320$ cm'],
      answer: 1,
      solution:
        'Break the journey at the resting point. The bob starts $40$ cm out, so its first trip to the centre covers those $40$ cm — counted ONCE, because it is never travelled again. After that the far points are $30, \\frac{45}{2}, \\frac{135}{8}, \\ldots$ cm from centre, and each of those distances is travelled twice: once going out, once coming back. That tail sums to $\\frac{30}{1 - \\frac{3}{4}} = \\frac{30}{\\frac{1}{4}} = 120$ cm, doubled to $240$ cm. Total: $40 + 240 = 280$ cm ✓. Check a second, independent way by adding the swings themselves: the first swing runs from $40$ cm right to $30$ cm left, a distance of $70$ cm; the next runs $30 + \\frac{45}{2} = \\frac{105}{2}$ cm; each swing is $\\frac{3}{4}$ of the one before, so the swings total $\\frac{70}{1 - \\frac{3}{4}} = 280$ cm ✓ — the same number by a route that never split the trip at the centre. (The choice $160$ cm is NO DOUBLING, $\\frac{40}{1 - 3/4}$, which counts each amplitude once; the choice $240$ cm is DROPPING THE FIRST TRIP, the $40$ cm that starts everything; the choice $320$ cm is DOUBLING THE FIRST TRIP TOO, even though the bob covers that opening $40$ cm only once.)',
    },
    {
      q: 'Priya presses a spring toy flat on the floor and lets go. It leaps $45$ cm straight up and drops back down, and every leap after that reaches $\\frac{2}{3}$ of the height of the leap before it, forever. What total vertical distance does the toy travel?',
      choices: ['$135$ cm', '$225$ cm', '$270$ cm', '$90$ cm'],
      answer: 2,
      solution:
        'Every leap here is a round trip: the toy rises some height and falls the same height, so each leap contributes twice its height — including the first, since the toy begins on the floor and its opening $45$ cm rise is followed by a $45$ cm fall. The heights are $45, 30, 20, \\frac{40}{3}, \\ldots$ with ratio $\\frac{2}{3}$, summing to $\\frac{45}{1 - \\frac{2}{3}} = \\frac{45}{\\frac{1}{3}} = 135$ cm. Doubling gives $270$ cm ✓. Check a second, independent way by doubling first and summing after: the round trips measure $90, 60, 40, \\frac{80}{3}, \\ldots$ cm, themselves geometric with ratio $\\frac{2}{3}$ and first term $90$, so the total is $\\frac{90}{\\frac{1}{3}} = 270$ cm ✓. (The choice $135$ cm is NO DOUBLING, counting only the rises; the choice $225$ cm treats the opening leap as a one-way trip, $45 + 2 \\times 90$, but the toy comes back down from it; the choice $90$ cm is the first leap alone, up and down, with the infinite tail ignored.)',
    },
    {
      q: 'Rosa starts a metronome by tipping its arm $90$ mm to the right of centre. The arm swings across to $30$ mm on the left, then to $\\frac{1}{3}$ of that on the right, and so on forever. What total distance does the tip of the arm travel?',
      choices: ['$135$ mm', '$90$ mm', '$270$ mm', '$180$ mm'],
      answer: 3,
      solution:
        'Split the travel at the centre line. The opening $90$ mm is covered once and never again. Every later turning point — $30, 10, \\frac{10}{3}, \\ldots$ mm from centre — is reached once and left once, so those distances count twice. The tail sums to $\\frac{30}{1 - \\frac{1}{3}} = \\frac{30}{\\frac{2}{3}} = 45$ mm, doubled to $90$ mm, and the total is $90 + 90 = 180$ mm ✓. Check a second, independent way by summing whole swings instead: the first swing carries the tip from $90$ mm right to $30$ mm left, a distance of $120$ mm; each swing is $\\frac{1}{3}$ of the previous one, so the swings total $\\frac{120}{1 - \\frac{1}{3}} = \\frac{120}{\\frac{2}{3}} = 180$ mm ✓. (The choice $135$ mm is NO DOUBLING, $\\frac{90}{1 - 1/3}$; the choice $90$ mm is DROPPING THE FIRST TRIP and keeping only the doubled tail; the choice $270$ mm is DOUBLING THE FIRST TRIP TOO.)',
    },
  ],
  // s4 — a repeating decimal with a two-digit block: the ratio is one hundredth,
  // not one tenth.
  [
    {
      q: 'Write $0.\\overline{18}$ as a fraction in lowest terms.',
      choices: ['$\\frac{2}{11}$', '$\\frac{9}{50}$', '$\\frac{1}{5}$', '$\\frac{2}{9}$'],
      answer: 0,
      solution:
        'The block $18$ repeats every two digits, so the ratio is $\\frac{1}{100}$, not $\\frac{1}{10}$: $0.181818\\ldots = \\frac{18}{100} + \\frac{18}{10000} + \\frac{18}{1000000} + \\cdots$. The sum is $\\frac{18/100}{1 - 1/100} = \\frac{18/100}{99/100} = \\frac{18}{99} = \\frac{2}{11}$ ✓. Check a second, independent way by dividing $2$ by $11$ the long way: $11$ into $20$ goes once with remainder $9$, then $11$ into $90$ goes eight times with remainder $2$, and that first remainder is back, so the digits $18$ repeat forever ✓. (The choice $\\frac{9}{50}$ is THE DROPPED TAIL, exactly $0.18$; the choice $\\frac{1}{5}$ is THE WRONG BLOCK LENGTH, dividing by $90$ as though a single digit repeated; the choice $\\frac{2}{9}$ is CANCELLING A DIGIT INSTEAD OF A FACTOR, striking a $9$ out of $\\frac{18}{99}$ — and $\\frac{2}{9} = 0.222\\ldots$, a different decimal entirely ✗.)',
    },
    {
      q: 'Write $0.\\overline{45}$ as a fraction in lowest terms.',
      choices: ['$\\frac{9}{20}$', '$\\frac{1}{2}$', '$\\frac{5}{11}$', '$\\frac{5}{9}$'],
      answer: 2,
      solution:
        'The repeating block is two digits long, so the ratio is $\\frac{1}{100}$: $0.454545\\ldots = \\frac{45}{100} + \\frac{45}{10000} + \\cdots$, and the sum is $\\frac{45/100}{99/100} = \\frac{45}{99} = \\frac{5}{11}$ ✓. Check a second, independent way by long division of $5$ by $11$: $11$ into $50$ goes four times with remainder $6$, then $11$ into $60$ goes five times with remainder $5$, which is where we started — so $0.454545\\ldots$ ✓. (The choice $\\frac{9}{20}$ is THE DROPPED TAIL, exactly $0.45$; the choice $\\frac{1}{2}$ is THE WRONG BLOCK LENGTH, $\\frac{45}{90}$, which is $0.5$ ✗; the choice $\\frac{5}{9}$ is CANCELLING A DIGIT INSTEAD OF A FACTOR in $\\frac{45}{99}$, and it equals $0.555\\ldots$ ✗.)',
    },
    {
      q: 'Write $0.\\overline{09}$ as a fraction in lowest terms.',
      choices: ['$\\frac{9}{100}$', '$\\frac{1}{10}$', '$\\frac{1}{9}$', '$\\frac{1}{11}$'],
      answer: 3,
      solution:
        'Two digits repeat, so the ratio is $\\frac{1}{100}$: $0.090909\\ldots = \\frac{9}{100} + \\frac{9}{10000} + \\cdots = \\frac{9/100}{99/100} = \\frac{9}{99} = \\frac{1}{11}$ ✓. Check a second, independent way by long division of $1$ by $11$: $11$ does not go into $10$, so the first decimal digit is $0$; then $11$ into $100$ goes nine times with remainder $1$, and that starting remainder is back, so the pair $09$ repeats forever ✓. (The choice $\\frac{9}{100}$ is THE DROPPED TAIL, exactly $0.09$; the choice $\\frac{1}{10}$ is THE WRONG BLOCK LENGTH, $\\frac{9}{90} = 0.1$ ✗; the choice $\\frac{1}{9}$ is CANCELLING A DIGIT INSTEAD OF A FACTOR in $\\frac{9}{99}$, and it equals $0.111\\ldots$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  sections: {
    '21.4': s214,
  },
}
