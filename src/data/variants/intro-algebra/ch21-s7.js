// Introduction to Algebra chapter 21 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so the
//    whole teaching load sits in the solution. There are no `choices` keys in
//    this file, and no `answer` is a bare number.
//  - Every key was worked out by hand and then confirmed a SECOND, independent
//    way, and that second route is written into the solution. The standard
//    confirmations here: an $n$th term is confirmed by walking from a DIFFERENT
//    landmark term, or by a closed form read off the terms; a triangular sum is
//    confirmed by pairing the ends or by splitting the range in two; an
//    arithmetic series is confirmed by factoring the terms into a simpler sum
//    or by using the middle term as the average; an infinite geometric sum is
//    confirmed by the identity $S = a + rS$, which never touches the formula; a
//    repeating decimal is confirmed by the $10x - x$ subtraction; a finite
//    geometric sum is confirmed by plain addition; a telescope is confirmed by
//    adding the first few terms by hand and matching the predicted pattern; a
//    bouncing ball is confirmed by summing all the falls and all the rises as
//    two separate series.
//  - The arithmetic stays printable: no calculator is needed anywhere, and
//    every fraction answer is in lowest terms.
//  - Traps that run through the file. THE COUNTED TERMS: taking $n$ steps to
//    reach the $n$th term instead of $n - 1$. THE UNHALVED PRODUCT: reporting
//    $n(n+1)$ for a triangular sum, which counts every number twice. THE
//    FENCEPOST: dropping the $+1$ when counting the terms of a series. THE
//    FLIPPED DENOMINATOR: dividing by $r$ instead of $1 - r$. THE STOPPED
//    DECIMAL: turning $0.\overline{d}$ into $\frac{d}{10}$. THE MISCOUNTED
//    GAP: dividing by a term position instead of by the steps between two
//    positions. THE UNDIVIDED DIFFERENCE: stopping at $(r-1)S$ after shifting
//    and subtracting. THE ADDED ENDS: adding the two survivors of a telescope
//    instead of subtracting. THE ONE-WAY BOUNCE: counting each bounce height
//    once when the ball travels it twice.

const worksheet = [
  // w1 — the nth term of an arithmetic sequence read off its first few terms.
  //      Differences of 6, 8 and 11, and one variation framed as a word
  //      problem, but the answer is always a single whole number.
  [
    {
      q: 'Find the $30$th term of the arithmetic sequence $7, 13, 19, \\ldots$',
      answer: '$181$',
      solution:
        'The first term is $a = 7$ and the common difference is $13 - 7 = 6$. Reaching the $30$th term takes $30 - 1 = 29$ steps: $7 + 29 \\times 6 = 7 + 174 = 181$. Second route from a different landmark: the $10$th term is $7 + 9 \\times 6 = 61$, and the $30$th term is $20$ steps past that, so $61 + 20 \\times 6 = 61 + 120 = 181$ ✓. THE COUNTED TERMS is the trap: taking $30$ steps gives $187$ ✗, which is the $31$st term — the first term needs no step at all.',
    },
    {
      q: 'Find the $20$th term of the arithmetic sequence $9, 17, 25, \\ldots$',
      answer: '$161$',
      solution:
        'Here $a = 9$ and $d = 17 - 9 = 8$, so the $20$th term takes $19$ steps: $9 + 19 \\times 8 = 9 + 152 = 161$. Second route by reading a closed form off the terms: $9 = 8 + 1$, $17 = 16 + 1$, $25 = 24 + 1$, so the $n$th term is $8n + 1$, and $8 \\times 20 + 1 = 161$ ✓ — no stepping required. THE COUNTED TERMS is the trap: $9 + 20 \\times 8 = 169$ ✗ walks one step too far.',
    },
    {
      q: 'Wren writes down $4, 15, 26, \\ldots$, adding the same amount each time. What is the $15$th number she writes?',
      answer: '$158$',
      solution:
        'The amount she adds is $15 - 4 = 11$, and $26 - 15 = 11$ agrees. Getting to her $15$th number takes $14$ additions: $4 + 14 \\times 11 = 4 + 154 = 158$. Second route from a landmark partway along: her $10$th number is $4 + 9 \\times 11 = 103$, and five more additions give $103 + 55 = 158$ ✓. THE COUNTED TERMS is the trap: $4 + 15 \\times 11 = 169$ ✗ counts an extra addition, since the $4$ is already written before any adding starts.',
    },
  ],

  // w2 — the triangular sum $1 + 2 + \cdots + n$. Same one-line formula every
  //      time, and the second route never reuses it.
  [
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 45$.',
      answer: '$1035$',
      solution:
        'Use $\\frac{n(n+1)}{2}$ with $n = 45$: $\\frac{45 \\times 46}{2} = 45 \\times 23 = 1035$. Second route by pairing the ends, which never mentions the formula: $1 + 45 = 46$, $2 + 44 = 46$, and so on down to $22 + 24 = 46$ — that is $22$ pairs, with the lonely $23$ left in the middle. Total: $22 \\times 46 + 23 = 1012 + 23 = 1035$ ✓. THE UNHALVED PRODUCT is the trap: reporting $45 \\times 46 = 2070$ ✗, which counts every number twice.',
    },
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 80$.',
      answer: '$3240$',
      solution:
        'With $n = 80$ the formula gives $\\frac{80 \\times 81}{2} = 40 \\times 81 = 3240$. Second route by splitting the range in half: $1 + \\cdots + 40 = \\frac{40 \\times 41}{2} = 820$, and $41 + \\cdots + 80$ has $40$ terms averaging $\\frac{41 + 80}{2} = 60.5$, giving $40 \\times 60.5 = 2420$. Together: $820 + 2420 = 3240$ ✓. THE UNHALVED PRODUCT is the trap: $80 \\times 81 = 6480$ ✗ is exactly double the answer.',
    },
    {
      q: 'Zeno adds up every whole number from $1$ to $38$. What total does he get?',
      answer: '$741$',
      solution:
        'The sum of the whole numbers from $1$ to $n$ is $\\frac{n(n+1)}{2}$, so Zeno gets $\\frac{38 \\times 39}{2} = 19 \\times 39 = 741$. Second route by trimming a bigger sum: $1 + \\cdots + 40 = \\frac{40 \\times 41}{2} = 820$, and removing the last two numbers gives $820 - 40 - 39 = 741$ ✓. THE UNHALVED PRODUCT is the trap: $38 \\times 39 = 1482$ ✗ — pairing the ends builds $19$ pairs, not $38$.',
    },
  ],

  // w3 — the nth term of a geometric sequence. Ratios 4, 1/4 and 3/4, so one
  //      variation grows, one shrinks to a small whole number, and one shrinks
  //      by a fraction that keeps every term whole.
  [
    {
      q: 'Find the $6$th term of the geometric sequence $2, 8, 32, \\ldots$',
      answer: '$2048$',
      solution:
        'The ratio is $\\frac{8}{2} = 4$, and $\\frac{32}{8} = 4$ agrees. The $6$th term takes $6 - 1 = 5$ multiplications: $2 \\cdot 4^5 = 2 \\times 1024 = 2048$. Second route by writing the terms out: $2, 8, 32, 128, 512, 2048$ ✓ — the sixth entry on the list is the same number the formula produced. THE EXTRA MULTIPLICATION is the trap: $2 \\cdot 4^6 = 8192$ ✗ is the $7$th term.',
    },
    {
      q: 'Ursula’s sequence starts $512, 128, 32, \\ldots$, and each term is the same fraction of the one before. What is her $5$th term?',
      answer: '$2$',
      solution:
        'The ratio is $\\frac{128}{512} = \\frac{1}{4}$, so each term is a quarter of the one before. The $5$th term takes $4$ multiplications: $512 \\cdot \\left(\\frac{1}{4}\\right)^4 = \\frac{512}{256} = 2$. Second route by quartering step by step: $512, 128, 32, 8, 2$ ✓. THE EXTRA MULTIPLICATION is the trap: quartering five times gives $\\frac{1}{2}$ ✗, which is the $6$th term — four moves separate the $1$st term from the $5$th.',
    },
    {
      q: 'Find the $5$th term of the geometric sequence $486, 324, 216, \\ldots$',
      answer: '$96$',
      solution:
        'The ratio is $\\frac{324}{486} = \\frac{2}{3}$, and $\\frac{216}{324} = \\frac{2}{3}$ agrees. The $5$th term takes $4$ multiplications: $486 \\cdot \\left(\\frac{2}{3}\\right)^4 = 486 \\cdot \\frac{16}{81} = 6 \\cdot 16 = 96$. Second route by stepping: $216 \\times \\frac{2}{3} = 144$, then $144 \\times \\frac{2}{3} = 96$ ✓. THE SUBTRACTED STEP is the trap: the gaps are $162$, then $108$, so treating the sequence as arithmetic and subtracting $162$ each time gives $486, 324, 162, 0, -162$ ✗ — this sequence multiplies, and a shrinking multiplier never reaches zero.',
    },
  ],

  // w4 — an arithmetic series whose term count has to be worked out before the
  //      sum formula can be used. Differences of 8, 6 and 11.
  [
    {
      q: 'Compute $4 + 12 + 20 + \\cdots + 100$.',
      answer: '$676$',
      solution:
        'Count the terms first: $\\frac{100 - 4}{8} + 1 = 12 + 1 = 13$. Then sum: $\\frac{13}{2}(4 + 100) = 13 \\times 52 = 676$. Second route by factoring the terms: every one is $4$ times an odd number, so the sum is $4(1 + 3 + 5 + \\cdots + 25) = 4 \\times 13^2 = 4 \\times 169 = 676$ ✓, since the first $13$ odd numbers stack into a perfect square. THE FENCEPOST is the trap: using $12$ terms gives $6 \\times 104 = 624$ ✗.',
    },
    {
      q: 'Compute $7 + 13 + 19 + \\cdots + 97$.',
      answer: '$832$',
      solution:
        'The common difference is $6$, so the term count is $\\frac{97 - 7}{6} + 1 = 15 + 1 = 16$. Sum: $\\frac{16}{2}(7 + 97) = 8 \\times 104 = 832$. Second route by rewriting each term as $6k + 1$ for $k = 1, 2, \\ldots, 16$: the sum is $6(1 + 2 + \\cdots + 16) + 16 = 6 \\times 136 + 16 = 816 + 16 = 832$ ✓. THE FENCEPOST is the trap: $15$ terms gives $\\frac{15}{2}(104) = 780$ ✗ — $15$ counts the gaps between terms, and there is always one more post than gap.',
    },
    {
      q: 'Compute $3 + 14 + 25 + \\cdots + 113$.',
      answer: '$638$',
      solution:
        'The common difference is $11$, so there are $\\frac{113 - 3}{11} + 1 = 10 + 1 = 11$ terms. Sum: $\\frac{11}{2}(3 + 113) = 11 \\times 58 = 638$. Second route using the middle term: an odd number of terms has a middle one, the $6$th, and it equals the average of the whole list. That term is $3 + 5 \\times 11 = 58$, so the sum is $11 \\times 58 = 638$ ✓. THE FENCEPOST is the trap: $10$ terms gives $5 \\times 116 = 580$ ✗.',
    },
  ],

  // w5 — an infinite geometric series given by its opening terms. Ratios 1/4,
  //      2/3 and 3/4, all safely inside $|r| < 1$, all with whole-number sums.
  [
    {
      q: 'Compute the infinite sum $24 + 6 + \\frac{3}{2} + \\frac{3}{8} + \\cdots$',
      answer: '$32$',
      solution:
        'The ratio is $\\frac{6}{24} = \\frac{1}{4}$, comfortably inside $|r| < 1$, so the sum settles on a number: $\\frac{a}{1 - r} = \\frac{24}{1 - \\frac{1}{4}} = \\frac{24}{\\frac{3}{4}} = 32$. Second route without the formula: everything after the first term is the whole sum shrunk by a quarter, so $S = 24 + \\frac{1}{4}S$, giving $\\frac{3}{4}S = 24$ and $S = 32$ ✓. THE FLIPPED DENOMINATOR is the trap: dividing by the ratio gives $\\frac{24}{1/4} = 96$ ✗ — the divisor is $1 - r$, not $r$.',
    },
    {
      q: 'Compute the infinite sum $18 + 12 + 8 + \\frac{16}{3} + \\cdots$',
      answer: '$54$',
      solution:
        'The ratio is $\\frac{12}{18} = \\frac{2}{3}$, and $\\frac{8}{12} = \\frac{2}{3}$ agrees. The sum is $\\frac{18}{1 - \\frac{2}{3}} = \\frac{18}{\\frac{1}{3}} = 54$. Second route by self-reference: the tail after the first term is $\\frac{2}{3}$ of the whole sum, so $S = 18 + \\frac{2}{3}S$, which leaves $\\frac{1}{3}S = 18$ and $S = 54$ ✓. THE FLIPPED DENOMINATOR is the trap: $\\frac{18}{2/3} = 27$ ✗, which is less than the four terms already printed ($\\approx 43.3$) — a running total can never overshoot the sum it is climbing toward.',
    },
    {
      q: 'Tomas adds $16 + 12 + 9 + \\frac{27}{4} + \\cdots$ forever. What number does his total settle on?',
      answer: '$64$',
      solution:
        'Each term is $\\frac{3}{4}$ of the one before ($\\frac{12}{16} = \\frac{3}{4}$ and $\\frac{9}{12} = \\frac{3}{4}$), so the total is $\\frac{16}{1 - \\frac{3}{4}} = \\frac{16}{\\frac{1}{4}} = 64$. Second route by self-reference: $S = 16 + \\frac{3}{4}S$, so $\\frac{1}{4}S = 16$ and $S = 64$ ✓. THE STOPPED SUM is the trap: adding only the four printed terms gives $43.75$ ✗ and calling that the answer; when the ratio is as large as $\\frac{3}{4}$ the terms shrink slowly, and the invisible tail is worth more than the visible head.',
    },
  ],

  // w6 — a repeating decimal turned into a fraction. One-digit blocks only, so
  //      the answer is always ninths (in lowest terms).
  [
    {
      q: 'Write the repeating decimal $0.\\overline{2} = 0.222\\ldots$ as a fraction.',
      answer: '$\\frac{2}{9}$',
      solution:
        'Expand it: $0.222\\ldots = \\frac{2}{10} + \\frac{2}{100} + \\frac{2}{1000} + \\cdots$, a geometric series with $a = \\frac{2}{10}$ and $r = \\frac{1}{10}$. Sum: $\\frac{2/10}{9/10} = \\frac{2}{9}$. Second route with no series at all: let $x = 0.\\overline{2}$, so $10x = 2.\\overline{2}$; subtracting kills the whole tail and leaves $9x = 2$, giving $x = \\frac{2}{9}$ ✓. THE STOPPED DECIMAL is the trap: answering $\\frac{2}{10} = \\frac{1}{5}$ ✗, which is $0.2$ exactly and stops dead, while the endless tail pushes the true value a little higher.',
    },
    {
      q: 'Yara writes the endless decimal $0.\\overline{8} = 0.888\\ldots$ Turn it into a fraction.',
      answer: '$\\frac{8}{9}$',
      solution:
        'Read it as a series: $\\frac{8}{10} + \\frac{8}{100} + \\frac{8}{1000} + \\cdots$, geometric with ratio $\\frac{1}{10}$, so the sum is $\\frac{8/10}{9/10} = \\frac{8}{9}$. Second route by subtraction: if $x = 0.\\overline{8}$ then $10x = 8.\\overline{8}$, and $10x - x = 8$, so $9x = 8$ and $x = \\frac{8}{9}$ ✓. A division confirms it: $8 \\div 9$ gives $0.888\\ldots$ THE STOPPED DECIMAL is the trap: $\\frac{8}{10} = \\frac{4}{5}$ ✗ is the value after one digit, not after infinitely many.',
    },
    {
      q: 'Write the repeating decimal $0.\\overline{3} = 0.333\\ldots$ as a fraction in lowest terms.',
      answer: '$\\frac{1}{3}$',
      solution:
        'As a series it is $\\frac{3}{10} + \\frac{3}{100} + \\cdots$ with ratio $\\frac{1}{10}$, summing to $\\frac{3/10}{9/10} = \\frac{3}{9}$, and dividing top and bottom by $3$ gives $\\frac{1}{3}$. Second route by subtraction: $x = 0.\\overline{3}$ gives $10x = 3.\\overline{3}$, so $9x = 3$ and $x = \\frac{3}{9} = \\frac{1}{3}$ ✓. Dividing $1$ by $3$ returns $0.333\\ldots$, closing the loop. Two traps. THE UNREDUCED FRACTION stops at $\\frac{3}{9}$ — right value, unfinished. THE STOPPED DECIMAL answers $\\frac{3}{10}$ ✗, which is $0.3$ with nothing after it.',
    },
  ],

  // w7 — two term positions given, a THIRD position asked for. All three
  //      positions stay in the question; the answer is one whole number.
  [
    {
      q: 'The $4$th term of an arithmetic sequence is $19$ and the $10$th term is $55$. Find the $18$th term.',
      answer: '$103$',
      solution:
        'From the $4$th term to the $10$th is $10 - 4 = 6$ steps, covering $55 - 19 = 36$, so $6d = 36$ and $d = 6$. Walk back to the start: the first term is $19 - 3 \\times 6 = 1$, and the $18$th term is $1 + 17 \\times 6 = 103$. Second route that never finds the first term: from the $10$th term take $18 - 10 = 8$ more steps, $55 + 8 \\times 6 = 55 + 48 = 103$ ✓. THE MISCOUNTED GAP is the trap: dividing $36$ by $10$ or by $4$ ✗ — subtract the POSITIONS to count the steps between them.',
    },
    {
      q: 'Tomas is filling in an arithmetic sequence. Its $3$rd term is $20$ and its $9$th term is $68$. What is the $15$th term?',
      answer: '$116$',
      solution:
        'From the $3$rd term to the $9$th is $6$ steps covering $68 - 20 = 48$, so $d = 8$. The first term is $20 - 2 \\times 8 = 4$, and the $15$th term is $4 + 14 \\times 8 = 116$. Second route with no common difference at all: the positions $3$, $9$, $15$ are equally spaced, so the $15$th term sits as far above the $9$th as the $9$th sits above the $3$rd — that is $68 + 48 = 116$ ✓. THE MISCOUNTED GAP is the trap: reading "$3$rd to $9$th" as $9$ steps and reporting $d = \\frac{48}{9}$ ✗, which is not even a whole number.',
    },
    {
      q: 'The $6$th term of an arithmetic sequence is $62$ and the $10$th term is $106$. Find the $16$th term.',
      answer: '$172$',
      solution:
        'From the $6$th term to the $10$th is $4$ steps covering $106 - 62 = 44$, so $d = 11$. The first term is $62 - 5 \\times 11 = 7$, and the $16$th term is $7 + 15 \\times 11 = 7 + 165 = 172$. Second route straight from the $10$th term: $16 - 10 = 6$ more steps give $106 + 6 \\times 11 = 106 + 66 = 172$ ✓. THE MISCOUNTED GAP is the trap: dividing $44$ by $6$ or by $10$ ✗ instead of by the $4$ steps that separate the two given positions.',
    },
  ],

  // w8 — a finite geometric series written with its first terms and its last.
  //      Shift-and-subtract first, plain addition as the check.
  [
    {
      q: 'Compute $3 + 12 + 48 + \\cdots + 3072$.',
      answer: '$4095$',
      solution:
        'The ratio is $4$, so the terms are $3 \\cdot 4^{n-1}$; since $3072 = 3 \\times 1024 = 3 \\cdot 4^5$, there are $6$ terms. Shift and subtract: $4S - S = 12288 - 3$, so $3S = 12285$ and $S = 4095$. Second route by plain addition: $3 + 12 = 15$, $+48 = 63$, $+192 = 255$, $+768 = 1023$, $+3072 = 4095$ ✓ — and every running total is one less than a power of $4$. THE UNDIVIDED DIFFERENCE is the trap: reporting $12285$ ✗, forgetting that subtracting $S$ from $4S$ leaves THREE copies of $S$.',
    },
    {
      q: 'Compute $2 + 10 + 50 + \\cdots + 1250$.',
      answer: '$1562$',
      solution:
        'The ratio is $5$ and the terms are $2 \\cdot 5^{n-1}$; since $1250 = 2 \\times 625 = 2 \\cdot 5^4$, there are $5$ terms. Shift and subtract: $5S - S = 6250 - 2$, so $4S = 6248$ and $S = 1562$. Second route by adding the five terms: $2 + 10 + 50 + 250 + 1250 = 1562$ ✓. THE UNDIVIDED DIFFERENCE is the trap: answering $6248$ ✗; the subtraction leaves FOUR copies of $S$, so the total still has to be divided by $4$.',
    },
    {
      q: 'Compute $1 + 6 + 36 + \\cdots + 1296$.',
      answer: '$1555$',
      solution:
        'The ratio is $6$ and $1296 = 6^4$, so there are $5$ terms: $1, 6, 36, 216, 1296$. Shift and subtract: $6S - S = 7776 - 1$, so $5S = 7775$ and $S = 1555$. Second route by adding them: $1 + 6 = 7$, $+36 = 43$, $+216 = 259$, $+1296 = 1555$ ✓. THE SKIPPED MIDDLE is the trap: adding only the terms printed on the page gives $1 + 6 + 36 + 1296 = 1339$ ✗ — the $\\cdots$ is hiding the $216$.',
    },
  ],

  // w9 — a telescoping sum of $\frac{1}{n(n+1)}$. Two run from $1 \cdot 2$, one
  //      starts partway along so the leading survivor is not $1$.
  [
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{14 \\cdot 15}$.',
      answer: '$\\frac{14}{15}$',
      solution:
        'Split each term as $\\frac{1}{n} - \\frac{1}{n+1}$. Every middle piece shows up once positive and once negative, so the sum collapses to first minus last: $1 - \\frac{1}{15} = \\frac{14}{15}$. Second route by watching the partial sums grow: one term gives $\\frac{1}{2}$, two give $\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$, three give $\\frac{2}{3} + \\frac{1}{12} = \\frac{3}{4}$ — after $n$ terms the running total is $\\frac{n}{n+1}$, so $14$ terms give $\\frac{14}{15}$ ✓. THE ADDED ENDS is the trap: $1 + \\frac{1}{15} = \\frac{16}{15}$ ✗; the survivors are joined by a MINUS sign, and the partial sums are visibly climbing toward $1$ from below.',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{35 \\cdot 36}$.',
      answer: '$\\frac{35}{36}$',
      solution:
        'No need to add $35$ fractions. Split each term as $\\frac{1}{n} - \\frac{1}{n+1}$ and let the middle cancel: the sum is $1 - \\frac{1}{36} = \\frac{35}{36}$. Second route that tests the collapse on a case small enough to add by hand: the first three terms are $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} = \\frac{6 + 2 + 1}{12} = \\frac{9}{12} = \\frac{3}{4}$, which is exactly $1 - \\frac{1}{4}$ as the telescope predicts for three terms ✓, so the same cancelling at $35$ terms leaves $1 - \\frac{1}{36}$. THE ADDED ENDS is the trap: $1 + \\frac{1}{36}$ ✗ is bigger than $1$, and a telescope like this one can never reach $1$.',
    },
    {
      q: 'Compute $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{20 \\cdot 21}$.',
      answer: '$\\frac{20}{21}$',
      solution:
        'Split each term: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Written out, every inside piece cancels against its neighbour and only the two ends survive, so the sum is $1 - \\frac{1}{21} = \\frac{21}{21} - \\frac{1}{21} = \\frac{20}{21}$. Second route by pattern, adding only the first few: $\\frac{1}{2}$, then $\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$, then $+ \\frac{1}{12} = \\frac{3}{4}$ — the partial sums are $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}$, so stopping at $\\frac{1}{20 \\cdot 21}$ gives $\\frac{20}{21}$ ✓. Two traps. THE WRONG LAST DENOMINATOR uses $20$ instead of $21$ and reports $\\frac{19}{20}$ ✗ — the telescope ends on $\\frac{1}{n+1}$, not $\\frac{1}{n}$. THE FORGOTTEN FRONT drops the leading $1$ and reports just $\\frac{1}{21}$ ✗.',
    },
  ],

  // w10 — a ball bouncing forever, answer in meters. Every drop height and
  //       every rebound ratio is chosen so the total is a whole number.
  [
    {
      q: 'A ball is dropped from $12$ meters and each bounce carries it back up to $\\frac{1}{4}$ of its previous height, bouncing forever. Find the total distance it travels.',
      answer: '$20$ meters',
      solution:
        'The first drop is $12$ and is traveled once. After that the bounce heights are $3, \\frac{3}{4}, \\frac{3}{16}, \\ldots$, an infinite geometric series with sum $\\frac{3}{1 - \\frac{1}{4}} = \\frac{3}{\\frac{3}{4}} = 4$, and each bounce height is covered twice, going up and coming back down: $2 \\times 4 = 8$. Total: $12 + 8 = 20$ meters. Second route by separating the falls from the rises: the falls are $12, 3, \\frac{3}{4}, \\ldots$, summing to $\\frac{12}{1 - \\frac{1}{4}} = 16$, and the rises are that same list without the opening $12$, worth $16 - 12 = 4$; together $16 + 4 = 20$ ✓. THE ONE-WAY BOUNCE is the trap: counting each bounce height once for $12 + 4 = 16$ ✗ — the ball has to come down again every single time.',
    },
    {
      q: 'Yara drops a ball from $9$ meters. Each bounce returns it to $\\frac{2}{3}$ of the height it fell from, and it bounces forever. What total distance does the ball travel?',
      answer: '$45$ meters',
      solution:
        'The opening drop is $9$. The bounce heights are $6, 4, \\frac{8}{3}, \\ldots$, an infinite geometric series with ratio $\\frac{2}{3}$ and sum $\\frac{6}{1 - \\frac{2}{3}} = \\frac{6}{\\frac{1}{3}} = 18$; doubling for the up-and-down gives $36$. Total: $9 + 36 = 45$ meters. Second route by summing all the falls and all the rises separately: the falls are $9, 6, 4, \\ldots$, summing to $\\frac{9}{1 - \\frac{2}{3}} = 27$, and the rises are the same list minus the first $9$, worth $27 - 9 = 18$; together $27 + 18 = 45$ ✓. THE DOUBLED DROP is the trap: doubling the whole $27$ for $54$ ✗ — the very first fall is never matched by a rise, since nothing lifted the ball up there.',
    },
    {
      q: 'Ursula drops a ball from $8$ meters. Each bounce takes it back up to $\\frac{3}{4}$ of its previous height, and the bouncing never stops. Find the total distance the ball travels.',
      answer: '$56$ meters',
      solution:
        'The first drop is $8$. The bounce heights are $6, \\frac{9}{2}, \\frac{27}{8}, \\ldots$ with ratio $\\frac{3}{4}$, summing to $\\frac{6}{1 - \\frac{3}{4}} = \\frac{6}{\\frac{1}{4}} = 24$, and each is traveled twice: $2 \\times 24 = 48$. Total: $8 + 48 = 56$ meters. Second route by splitting the journey into falls and rises: the falls are $8, 6, \\frac{9}{2}, \\ldots$, summing to $\\frac{8}{1 - \\frac{3}{4}} = 32$, and the rises are that list without the opening $8$, worth $32 - 8 = 24$; together $32 + 24 = 56$ ✓. THE ONE-WAY BOUNCE is the trap: reporting $8 + 24 = 32$ ✗, which counts every rise but forgets that the ball falls back down after each one.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  worksheet,
}
