// Introduction to Algebra chapter 21 — variations for section 21.3
// (Geometric Sequences). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every key was worked twice by two genuinely different routes, and the
//    second route is written out in the solution. Ratios were found by
//    dividing one pair of neighbours AND by rebuilding the whole printed
//    sequence forward from the candidate ratio. Distant terms were found with
//    $a \cdot r^{n-1}$ AND by listing the terms one at a time. Middle terms
//    were found with the geometric mean $\sqrt{ab}$ AND by solving for the
//    ratio first and stepping once. Threshold problems were solved with powers
//    of the ratio AND by tabulating the value at the two hours/days/weeks on
//    either side of the answer.
//  - Slot shapes are preserved exactly: slot 5 always has a NEGATIVE ratio so
//    the signs alternate, slot 6 always answers with a TERM POSITION rather
//    than a value, and slot 9 always asks when a growing quantity FIRST
//    EXCEEDS a threshold.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: THE COMMON DIFFERENCE WHERE THE RATIO BELONGS,
//    THE RATIO UPSIDE DOWN, REPORTING THE FIRST TERM, REPORTING THE SECOND
//    TERM, REPORTING THE DIFFERENCE INSTEAD OF THE TERM, THINKING IT HITS
//    ZERO, ONE EXTRA MULTIPLICATION, ONE MULTIPLICATION TOO FEW, TREATING IT
//    AS ARITHMETIC, KEEPING THE SIGN OF THE PREVIOUS TERM, WALKING BACKWARD,
//    READING THE POWER AS THE POSITION, THE ARITHMETIC MEAN, THE PRODUCT
//    BEFORE THE SQUARE ROOT, TREATING THE JUMP AS ONE MULTIPLICATION,
//    REPORTING THE RATIO INSTEAD OF THE TERM, REPORTING THE STEP INSTEAD OF
//    THE TERM, and REPORTING THE NUMBER THE POWER HAD TO BEAT.
//  - No two choices inside an item name the same number.

const s213 = [
  // s3 — read the common ratio off a printed sequence: divide, never subtract.
  [
    {
      q: 'What is the common ratio of the geometric sequence $7, 28, 112, 448, \\ldots$?',
      choices: ['$21$', '$4$', '$7$', '$28$'],
      answer: 1,
      solution:
        'The common ratio is what you multiply by, so divide a term by the one before it: $\\frac{28}{7} = 4$ ✓. Check a second, independent way by rebuilding the printed sequence from that ratio: $7 \\times 4 = 28$ ✓, $28 \\times 4 = 112$ ✓, $112 \\times 4 = 448$ ✓ — every hop lands exactly on a printed term, so $r = 4$. (The choice $21$ is THE COMMON DIFFERENCE WHERE THE RATIO BELONGS, $28 - 7$, and it is not even constant here: the next gap is $112 - 28 = 84$ ✗; the choice $7$ is REPORTING THE FIRST TERM; the choice $28$ is REPORTING THE SECOND TERM instead of the ratio ✗.)',
    },
    {
      q: 'What is the common ratio of the geometric sequence $6, 30, 150, 750, \\ldots$?',
      choices: ['$24$', '$6$', '$5$', '$30$'],
      answer: 2,
      solution:
        'Divide any term by the one before it: $\\frac{30}{6} = 5$ ✓, and the same division further along gives $\\frac{150}{30} = 5$ ✓ and $\\frac{750}{150} = 5$ ✓. Check a second, independent way by multiplying forward from the front: $6 \\to 30 \\to 150 \\to 750$ takes three multiplications by $5$, and it reproduces the list exactly ✓. (The choice $24$ is THE COMMON DIFFERENCE WHERE THE RATIO BELONGS, $30 - 6$ — but the next gap is $120$, so no constant difference exists ✗; the choice $6$ is REPORTING THE FIRST TERM; the choice $30$ is REPORTING THE SECOND TERM ✗.)',
    },
    {
      q: 'What is the common ratio of the geometric sequence $1024, 256, 64, 16, \\ldots$?',
      choices: ['$4$', '$-768$', '$256$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'Always divide a term by the one BEFORE it: $\\frac{256}{1024} = \\frac{1}{4}$ ✓. Check a second, independent way by rebuilding the list: a quarter of $1024$ is $256$ ✓, a quarter of $256$ is $64$ ✓, a quarter of $64$ is $16$ ✓. A ratio between $0$ and $1$ is exactly what makes a geometric sequence shrink. (The choice $4$ is THE RATIO UPSIDE DOWN, $\\frac{1024}{256}$ — that is how many times bigger the earlier term is, and multiplying by $4$ would send the sequence the wrong way ✗; the choice $-768$ is THE COMMON DIFFERENCE WHERE THE RATIO BELONGS, $256 - 1024$; the choice $256$ is REPORTING THE SECOND TERM ✗.)',
    },
  ],
  // s3 — the next term of a shrinking geometric sequence: multiply, do not subtract.
  [
    {
      q: 'What is the next term of the geometric sequence $768, 192, 48, 12, \\ldots$?',
      choices: ['$3$', '$0$', '$\\frac{3}{4}$', '$-24$'],
      answer: 0,
      solution:
        'The ratio is $\\frac{192}{768} = \\frac{1}{4}$, so each term is a quarter of the one before. The next term is $12 \\times \\frac{1}{4} = 3$ ✓. Check a second, independent way by dividing instead of multiplying: taking a quarter is the same as dividing by $4$, and $12 \\div 4 = 3$ ✓ — the same answer from the other direction. (The choice $0$ is THINKING IT HITS ZERO; the terms shrink toward $0$ forever but never land on it ✗; the choice $\\frac{3}{4}$ is ONE EXTRA MULTIPLICATION, which gives the term after the one asked for; the choice $-24$ is TREATING IT AS ARITHMETIC, adding the last gap $12 - 48 = -36$ ✗.)',
    },
    {
      q: 'What is the next term of the geometric sequence $96, 48, 24, 12, \\ldots$?',
      choices: ['$0$', '$6$', '$3$', '$-12$'],
      answer: 1,
      solution:
        'Each term is half the one before, since $\\frac{48}{96} = \\frac{1}{2}$, so the next term is $12 \\times \\frac{1}{2} = 6$ ✓. Check a second, independent way by counting the halvings from the front: $96 \\to 48 \\to 24 \\to 12 \\to 6$ is four halvings, and $\\frac{96}{2^4} = \\frac{96}{16} = 6$ ✓. (The choice $0$ is TREATING IT AS ARITHMETIC, adding the gap $12 - 24 = -12$, and it is also THINKING IT HITS ZERO — a halving sequence never reaches $0$ ✗; the choice $3$ is ONE EXTRA MULTIPLICATION, the term after next; the choice $-12$ is REPORTING THE DIFFERENCE INSTEAD OF THE TERM ✗.)',
    },
    {
      q: 'What is the next term of the geometric sequence $3125, 625, 125, 25, \\ldots$?',
      choices: ['$0$', '$-75$', '$1$', '$5$'],
      answer: 3,
      solution:
        'Divide neighbours to get the ratio: $\\frac{625}{3125} = \\frac{1}{5}$ ✓, so the next term is $25 \\times \\frac{1}{5} = 5$ ✓. Check a second, independent way by dividing by $5$ down the whole list: $3125 \\to 625 \\to 125 \\to 25 \\to 5$, and each printed term matches ✓. (The choice $0$ is THINKING IT HITS ZERO ✗; the choice $-75$ is TREATING IT AS ARITHMETIC, adding the last gap $25 - 125 = -100$; the choice $1$ is ONE EXTRA MULTIPLICATION, the term one step past the one asked for ✗.)',
    },
  ],
  // s3 — the 5th term from a printed start: count multiplications, not terms.
  [
    {
      q: 'What is the $5$th term of the geometric sequence $4, 16, 64, \\ldots$?',
      choices: ['$4096$', '$256$', '$1024$', '$52$'],
      answer: 2,
      solution:
        'Here $a = 4$ and $r = \\frac{16}{4} = 4$. Reaching the $5$th term takes $5 - 1 = 4$ multiplications: $4 \\cdot 4^4 = 4 \\times 256 = 1024$ ✓. Check a second, independent way by listing the terms out loud: $4$, $16$, $64$, $256$, $1024$ — the fifth one is $1024$ ✓. (The choice $4096$ is ONE EXTRA MULTIPLICATION, $4 \\cdot 4^5$, which is the $6$th term; the choice $256$ is ONE MULTIPLICATION TOO FEW, the $4$th term; the choice $52$ is TREATING IT AS ARITHMETIC, using the first gap $12$ as a common difference to get $4 + 4 \\times 12$ ✗.)',
    },
    {
      q: 'What is the $5$th term of the geometric sequence $12, 60, 300, \\ldots$?',
      choices: ['$37500$', '$1500$', '$204$', '$7500$'],
      answer: 3,
      solution:
        'The ratio is $\\frac{60}{12} = 5$ and the first term is $12$, so the $5$th term is $12 \\cdot 5^4 = 12 \\times 625 = 7500$ ✓ — four multiplications, because the first term needs none. Check a second, independent way by walking the list: $12$, $60$, $300$, $1500$, $7500$ ✓. (The choice $37500$ is ONE EXTRA MULTIPLICATION, $12 \\cdot 5^5$; the choice $1500$ is ONE MULTIPLICATION TOO FEW, the $4$th term; the choice $204$ is TREATING IT AS ARITHMETIC, $12 + 4 \\times 48$ ✗.)',
    },
    {
      q: 'What is the $5$th term of the geometric sequence $16, 24, 36, \\ldots$?',
      choices: ['$81$', '$121.5$', '$54$', '$48$'],
      answer: 0,
      solution:
        'The ratio is $\\frac{24}{16} = \\frac{3}{2}$, so the $5$th term is $16 \\cdot \\left(\\frac{3}{2}\\right)^4 = 16 \\times \\frac{81}{16} = 81$ ✓. Check a second, independent way by stepping term by term, where multiplying by $\\frac{3}{2}$ means "add half of it": $16 \\to 24 \\to 36 \\to 54 \\to 81$ ✓. A fractional ratio still grows the sequence, just more gently. (The choice $121.5$ is ONE EXTRA MULTIPLICATION, the $6$th term; the choice $54$ is ONE MULTIPLICATION TOO FEW, the $4$th term; the choice $48$ is TREATING IT AS ARITHMETIC, $16 + 4 \\times 8$ ✗.)',
    },
  ],
  // s3 — spot the geometric list among arithmetic and pattern lookalikes.
  [
    {
      q: 'Exactly one of these four sequences is geometric. Which one?',
      choices: ['$7, 14, 21, 28, \\ldots$', '$8, 32, 128, 512, \\ldots$', '$1, 8, 27, 64, \\ldots$', '$2, 3, 5, 8, \\ldots$'],
      answer: 1,
      solution:
        'Geometric means the ratio of neighbours is the SAME every time. Test $8, 32, 128, 512$: $\\frac{32}{8} = 4$ ✓, $\\frac{128}{32} = 4$ ✓, $\\frac{512}{128} = 4$ ✓. Check a second, independent way by rebuilding it forward: $8 \\to 32 \\to 128 \\to 512$ is three quadruplings, and it reproduces the list ✓. (In $7, 14, 21, 28$ the first ratio is $2$ but the next is $\\frac{21}{14} = \\frac{3}{2}$ ✗ — that list is arithmetic, stepping by $7$; $1, 8, 27, 64$ are the cubes, with ratios $8$, $\\frac{27}{8}$, $\\frac{64}{27}$ ✗; in $2, 3, 5, 8$ the gaps are $1, 2, 3$ and the ratios keep changing ✗.)',
    },
    {
      q: 'Which of these sequences has a constant common ratio?',
      choices: ['$1, 2, 6, 24, \\ldots$', '$9, 16, 23, 30, \\ldots$', '$54, 18, 6, 2, \\ldots$', '$12, 6, 4, 3, \\ldots$'],
      answer: 2,
      solution:
        'Divide each term by the one before. For $54, 18, 6, 2$: $\\frac{18}{54} = \\frac{1}{3}$ ✓, $\\frac{6}{18} = \\frac{1}{3}$ ✓, $\\frac{2}{6} = \\frac{1}{3}$ ✓ — one constant ratio, so it is geometric. Check a second, independent way by multiplying forward: a third of $54$ is $18$ ✓, a third of $18$ is $6$ ✓, a third of $6$ is $2$ ✓. (In $1, 2, 6, 24$ the ratios are $2, 3, 4$ ✗; $9, 16, 23, 30$ is arithmetic with difference $7$ ✗; $12, 6, 4, 3$ shrinks, which is tempting, but its ratios are $\\frac{1}{2}$, $\\frac{2}{3}$, $\\frac{3}{4}$ ✗ — shrinking is not the same as geometric.)',
    },
    {
      q: 'Which of these sequences is built by multiplying by the same number every step?',
      choices: ['$32, 48, 72, 108, \\ldots$', '$4, 8, 12, 16, \\ldots$', '$1, 3, 6, 10, \\ldots$', '$2, 6, 12, 36, \\ldots$'],
      answer: 0,
      solution:
        'Check the ratios of $32, 48, 72, 108$: $\\frac{48}{32} = \\frac{3}{2}$ ✓, $\\frac{72}{48} = \\frac{3}{2}$ ✓, $\\frac{108}{72} = \\frac{3}{2}$ ✓ — a constant ratio, so it is geometric even though the ratio is not a whole number. Check a second, independent way by stepping forward, since multiplying by $\\frac{3}{2}$ means adding half: $32 + 16 = 48$ ✓, $48 + 24 = 72$ ✓, $72 + 36 = 108$ ✓. (In $4, 8, 12, 16$ the first ratio is $2$ and the next is $\\frac{3}{2}$ ✗ — arithmetic, stepping by $4$; $1, 3, 6, 10$ are the triangular numbers, gaps $2, 3, 4$ ✗; in $2, 6, 12, 36$ the ratios are $3, 2, 3$ ✗, so close but not constant.)',
    },
  ],
  // s3 — a NEGATIVE ratio: the signs must alternate every single step.
  [
    {
      q: 'What is the next term of the geometric sequence $6, -12, 24, -48, \\ldots$?',
      choices: ['$-96$', '$24$', '$-192$', '$96$'],
      answer: 3,
      solution:
        'The ratio is $\\frac{-12}{6} = -2$, so the sizes double and the signs flip every step. The next term is $-48 \\times (-2) = 96$ ✓, positive because a negative times a negative is positive. Check a second, independent way by reading the pattern of signs: the terms run positive, negative, positive, negative, so the next one MUST be positive, and its size is $2 \\times 48 = 96$ ✓. (The choice $-96$ is KEEPING THE SIGN OF THE PREVIOUS TERM, correct in size but wrong in sign ✗; the choice $24$ is WALKING BACKWARD, dividing by the ratio and landing on the term you already had; the choice $-192$ is ONE EXTRA MULTIPLICATION, the term after next ✗.)',
    },
    {
      q: 'What is the next term of the geometric sequence $112, -56, 28, -14, \\ldots$?',
      choices: ['$7$', '$-7$', '$28$', '$-\\frac{7}{2}$'],
      answer: 0,
      solution:
        'Divide neighbours: $\\frac{-56}{112} = -\\frac{1}{2}$, so each term is half the size of the one before and the sign flips. The next term is $-14 \\times \\left(-\\frac{1}{2}\\right) = 7$ ✓. Check a second, independent way by handling size and sign separately: half of $14$ is $7$, and after a negative term comes a positive one, so the answer is $+7$ ✓. (The choice $-7$ is KEEPING THE SIGN OF THE PREVIOUS TERM ✗; the choice $28$ is WALKING BACKWARD, multiplying by $-2$ instead of $-\\frac{1}{2}$ and returning to an earlier term; the choice $-\\frac{7}{2}$ is ONE EXTRA MULTIPLICATION ✗.)',
    },
    {
      q: 'What is the next term of the geometric sequence $512, -128, 32, -8, \\ldots$?',
      choices: ['$-2$', '$2$', '$32$', '$-\\frac{1}{2}$'],
      answer: 1,
      solution:
        'The ratio is $\\frac{-128}{512} = -\\frac{1}{4}$ ✓, confirmed further along by $\\frac{-8}{32} = -\\frac{1}{4}$ ✓. So the next term is $-8 \\times \\left(-\\frac{1}{4}\\right) = 2$ ✓. Check a second, independent way with sizes and signs apart: the sizes are $512, 128, 32, 8$, each a quarter of the last, so the next size is $2$; the signs go $+, -, +, -$, so the next sign is $+$, giving $2$ ✓. (The choice $-2$ is KEEPING THE SIGN OF THE PREVIOUS TERM ✗; the choice $32$ is WALKING BACKWARD to a term already listed; the choice $-\\frac{1}{2}$ is ONE EXTRA MULTIPLICATION ✗.)',
    },
  ],
  // s3 — which POSITION holds a given value (the answer is a term number).
  [
    {
      q: 'In the geometric sequence with first term $6$ and common ratio $4$, which term equals $1536$?',
      choices: ['The $4$th', 'The $6$th', 'The $5$th', 'The $256$th'],
      answer: 2,
      solution:
        'We need $6 \\cdot 4^{n-1} = 1536$, so $4^{n-1} = 256 = 4^4$, giving $n - 1 = 4$ and $n = 5$ ✓. Check a second, independent way by listing the terms: $6$, $24$, $96$, $384$, $1536$ — the value shows up in the fifth spot ✓. (The choice The $4$th is forgetting that the exponent counts MULTIPLICATIONS, one fewer than the term number, so $n - 1 = 4$ does not mean $n = 4$ ✗; the choice The $6$th steps one term too far, to $6144$; the choice The $256$th is READING THE POWER AS THE POSITION, mistaking the value $256$ for a term number ✗.)',
    },
    {
      q: 'In the geometric sequence with first term $4$ and common ratio $5$, which term equals $12500$?',
      choices: ['The $5$th', 'The $7$th', 'The $3125$th', 'The $6$th'],
      answer: 3,
      solution:
        'Solve $4 \\cdot 5^{n-1} = 12500$: dividing gives $5^{n-1} = 3125 = 5^5$, so $n - 1 = 5$ and $n = 6$ ✓. Check a second, independent way by writing the sequence out: $4$, $20$, $100$, $500$, $2500$, $12500$ — six terms to get there ✓. (The choice The $5$th treats the exponent $5$ as the term number, one short ✗ — the $5$th term is only $2500$; the choice The $7$th overshoots to $62500$; the choice The $3125$th is READING THE POWER AS THE POSITION ✗.)',
    },
    {
      q: 'In the geometric sequence with first term $7$ and common ratio $2$, which term equals $896$?',
      choices: ['The $9$th', 'The $8$th', 'The $7$th', 'The $128$th'],
      answer: 1,
      solution:
        'We need $7 \\cdot 2^{n-1} = 896$, so $2^{n-1} = 128 = 2^7$, which gives $n - 1 = 7$ and $n = 8$ ✓. Check a second, independent way by doubling from the start: $7$, $14$, $28$, $56$, $112$, $224$, $448$, $896$ — count them and you land on eight ✓. (The choice The $7$th is stopping at the exponent instead of the term number, and the $7$th term is $448$ ✗; the choice The $9$th doubles once too often, to $1792$; the choice The $128$th is READING THE POWER AS THE POSITION ✗.)',
    },
  ],
  // s3 — geometric mean of two numbers: multiply then square-root, never average.
  [
    {
      q: 'What is the geometric mean of $7$ and $63$?',
      choices: ['$21$', '$35$', '$441$', '$56$'],
      answer: 0,
      solution:
        'The geometric mean of $a$ and $b$ is $\\sqrt{ab}$, so here it is $\\sqrt{7 \\times 63} = \\sqrt{441} = 21$ ✓. Check a second, independent way by testing the ratios, which is what "geometric" really demands: $\\frac{21}{7} = 3$ and $\\frac{63}{21} = 3$ ✓ — the same ratio on both sides, so $7, 21, 63$ really is geometric. (The choice $35$ is THE ARITHMETIC MEAN, $\\frac{7 + 63}{2}$, which would give ratios $5$ and $\\frac{9}{5}$ ✗; the choice $441$ is THE PRODUCT BEFORE THE SQUARE ROOT; the choice $56$ is THE COMMON DIFFERENCE WHERE THE RATIO BELONGS, $63 - 7$ ✗.)',
    },
    {
      q: 'What is the geometric mean of $8$ and $50$?',
      choices: ['$29$', '$400$', '$20$', '$42$'],
      answer: 2,
      solution:
        'Multiply first, then take the square root: $\\sqrt{8 \\times 50} = \\sqrt{400} = 20$ ✓. Check a second, independent way by solving for the ratio: if $8, x, 50$ is geometric then $\\frac{x}{8} = \\frac{50}{x}$, and cross-multiplying gives $x^2 = 400$, so $x = 20$ for positive terms ✓ (the ratio is $\\frac{20}{8} = \\frac{5}{2}$, and $20 \\times \\frac{5}{2} = 50$ ✓). (The choice $29$ is THE ARITHMETIC MEAN, $\\frac{8 + 50}{2}$ ✗; the choice $400$ is THE PRODUCT BEFORE THE SQUARE ROOT; the choice $42$ is THE COMMON DIFFERENCE WHERE THE RATIO BELONGS, $50 - 8$ ✗.)',
    },
    {
      q: 'What is the geometric mean of $6$ and $24$?',
      choices: ['$15$', '$144$', '$18$', '$12$'],
      answer: 3,
      solution:
        'The geometric mean is $\\sqrt{6 \\times 24} = \\sqrt{144} = 12$ ✓. Check a second, independent way by hunting for the ratio directly: doubling $6$ gives $12$ and doubling $12$ gives $24$, so the ratio is $2$ on both sides and $12$ sits in the middle geometrically ✓. (The choice $15$ is THE ARITHMETIC MEAN, $\\frac{6 + 24}{2}$ — it is the middle of $6$ and $24$ by ADDING, but its ratios are $\\frac{5}{2}$ and $\\frac{8}{5}$ ✗; the choice $144$ is THE PRODUCT BEFORE THE SQUARE ROOT; the choice $18$ is THE COMMON DIFFERENCE WHERE THE RATIO BELONGS, $24 - 6$ ✗.)',
    },
  ],
  // s3 — two terms two apart give r^2; step back once for the first term.
  [
    {
      q: 'A geometric sequence with a positive common ratio has $2$nd term $12$ and $4$th term $192$. What is the first term?',
      choices: ['$4$', '$3$', '$48$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'From the $2$nd term to the $4$th is $2$ multiplications, so $12 \\cdot r^2 = 192$, giving $r^2 = 16$ and $r = 4$ (positive, as stated). Step back once from the $2$nd term: the first term is $\\frac{12}{4} = 3$ ✓. Check a second, independent way by building the sequence forward from $3$: $3$, $12$, $48$, $192$ — both given terms land where they should ✓. (The choice $4$ is REPORTING THE RATIO INSTEAD OF THE TERM; the choice $48$ is the $3$rd term, found by stepping the wrong way from the $2$nd ✗; the choice $\\frac{3}{4}$ is TREATING THE JUMP AS ONE MULTIPLICATION, taking $r = 16$ and computing $\\frac{12}{16}$ ✗.)',
    },
    {
      q: 'A geometric sequence with a positive common ratio has $2$nd term $45$ and $4$th term $1125$. What is the first term?',
      choices: ['$5$', '$225$', '$9$', '$\\frac{9}{5}$'],
      answer: 2,
      solution:
        'Two terms apart means two multiplications: $45 \\cdot r^2 = 1125$, so $r^2 = 25$ and $r = 5$. One step back from the $2$nd term gives the first: $\\frac{45}{5} = 9$ ✓. Check a second, independent way by listing forward from $9$: $9$, $45$, $225$, $1125$ ✓ — the $2$nd and $4$th terms match the problem exactly. (The choice $5$ is REPORTING THE RATIO INSTEAD OF THE TERM; the choice $225$ is the $3$rd term ✗; the choice $\\frac{9}{5}$ is TREATING THE JUMP AS ONE MULTIPLICATION, using $r = 25$ to get $\\frac{45}{25}$ ✗.)',
    },
    {
      q: 'A geometric sequence with a positive common ratio has $2$nd term $36$ and $4$th term $81$. What is the first term?',
      choices: ['$\\frac{3}{2}$', '$54$', '$18$', '$24$'],
      answer: 3,
      solution:
        'Set up the two multiplications: $36 \\cdot r^2 = 81$, so $r^2 = \\frac{81}{36} = \\frac{9}{4}$ and $r = \\frac{3}{2}$. Stepping back once means dividing: the first term is $36 \\div \\frac{3}{2} = 36 \\times \\frac{2}{3} = 24$ ✓. Check a second, independent way by running forward from $24$: $24$, $36$, $54$, $81$ ✓ — the given terms sit in the right places. (The choice $\\frac{3}{2}$ is REPORTING THE RATIO INSTEAD OF THE TERM; the choice $54$ is the $3$rd term, stepping forward instead of back ✗; the choice $18$ is halving instead of dividing by the ratio $\\frac{3}{2}$ ✗.)',
    },
  ],
  // s3 — growth word problem: after how many whole steps does it FIRST exceed a threshold?
  [
    {
      q: 'Lena posts a dance clip. It has $6$ shares on the day she posts it, and the number of shares quadruples every day, so after $d$ days it has $6 \\cdot 4^d$ shares. After how many whole days does the number of shares first exceed $24000$?',
      choices: ['$6$', '$5$', '$4000$', '$7$'],
      answer: 0,
      solution:
        'We need $6 \\cdot 4^d > 24000$, which means $4^d > 4000$. Powers of $4$: $4^5 = 1024$ is not enough ✗, but $4^6 = 4096$ clears it ✓, so $d = 6$. Check a second, independent way by tabulating the two days on either side: after $5$ days there are $6 \\times 1024 = 6144$ shares, still under $24000$ ✗, and after $6$ days there are $6 \\times 4096 = 24576$ shares ✓. (The choice $5$ stops one day short, at $6144$ ✗; the choice $7$ goes one day past the FIRST day that works; the choice $4000$ reports the number the power had to beat, not a count of days ✗.)',
    },
    {
      q: 'Algae covers $4$ square meters of Mei’s pond, and the covered area doubles every week, so after $w$ weeks it covers $4 \\cdot 2^w$ square meters. After how many whole weeks does the covered area first exceed $300$ square meters?',
      choices: ['$6$', '$75$', '$7$', '$8$'],
      answer: 2,
      solution:
        'We need $4 \\cdot 2^w > 300$, so $2^w > 75$. Powers of $2$: $2^6 = 64$ falls short ✗, while $2^7 = 128$ clears it ✓, so $w = 7$. Check a second, independent way by doubling week by week: $4, 8, 16, 32, 64, 128, 256, 512$ — after $6$ weeks the pond has $256$ square meters covered ✗, and after $7$ weeks it has $512$ ✓. (The choice $6$ stops at $256$, which has not passed $300$ ✗; the choice $8$ waits a week longer than needed; the choice $75$ is the number the power had to beat, not a count of weeks ✗.)',
    },
    {
      q: 'At camp, $7$ people know the nickname Nadia invented, and the number of people who know it is multiplied by $5$ every hour, so after $h$ hours it is known by $7 \\cdot 5^h$ people. After how many whole hours is it first known by more than $21000$ people?',
      choices: ['$4$', '$5$', '$6$', '$3000$'],
      answer: 1,
      solution:
        'We need $7 \\cdot 5^h > 21000$, so $5^h > 3000$. Powers of $5$: $5^4 = 625$ is far too small ✗, and $5^5 = 3125$ passes ✓, so $h = 5$. Check a second, independent way by evaluating the two neighbouring hours: after $4$ hours, $7 \\times 625 = 4375$ people ✗; after $5$ hours, $7 \\times 3125 = 21875$ people ✓. (The choice $4$ stops one hour short at $4375$ ✗; the choice $6$ passes the FIRST hour that works, landing at $109375$; the choice $3000$ is the number the power had to beat, not a count of hours ✗.)',
    },
  ],
  // s3 — a missing middle term between two given terms is their geometric mean.
  [
    {
      q: 'In a geometric sequence of positive numbers, the $3$rd term is $4$ and the $5$th term is $36$. What is the $4$th term?',
      choices: ['$12$', '$20$', '$144$', '$16$'],
      answer: 0,
      solution:
        'A term squeezed between two others is their geometric mean: the $4$th term is $\\sqrt{4 \\times 36} = \\sqrt{144} = 12$ ✓. Check a second, independent way by finding the ratio first: two steps carry $4$ to $36$, so $r^2 = 9$ and $r = 3$, which puts the $4$th term at $4 \\times 3 = 12$ ✓ (and $12 \\times 3 = 36$ ✓). (The choice $20$ is THE ARITHMETIC MEAN, $\\frac{4 + 36}{2}$ — the right idea for a sequence that ADDS, but this one multiplies ✗; the choice $144$ is THE PRODUCT BEFORE THE SQUARE ROOT; the choice $16$ is REPORTING THE STEP INSTEAD OF THE TERM, half of $36 - 4$ ✗.)',
    },
    {
      q: 'In a geometric sequence of positive numbers, the $3$rd term is $12$ and the $5$th term is $48$. What is the $4$th term?',
      choices: ['$30$', '$576$', '$24$', '$18$'],
      answer: 2,
      solution:
        'The $4$th term is the geometric mean of its neighbours: $\\sqrt{12 \\times 48} = \\sqrt{576} = 24$ ✓. Check a second, independent way through the ratio: $12 \\cdot r^2 = 48$ gives $r^2 = 4$ and $r = 2$, so the $4$th term is $12 \\times 2 = 24$ ✓, and doubling again returns $48$ ✓. (The choice $30$ is THE ARITHMETIC MEAN, $\\frac{12 + 48}{2}$ ✗; the choice $576$ is THE PRODUCT BEFORE THE SQUARE ROOT; the choice $18$ is REPORTING THE STEP INSTEAD OF THE TERM, half of $48 - 12$ ✗.)',
    },
    {
      q: 'In a geometric sequence of positive numbers, the $3$rd term is $32$ and the $5$th term is $50$. What is the $4$th term?',
      choices: ['$41$', '$1600$', '$9$', '$40$'],
      answer: 3,
      solution:
        'Take the geometric mean of the two given terms: $\\sqrt{32 \\times 50} = \\sqrt{1600} = 40$ ✓. Check a second, independent way with the ratio: $32 \\cdot r^2 = 50$ gives $r^2 = \\frac{50}{32} = \\frac{25}{16}$, so $r = \\frac{5}{4}$ and the $4$th term is $32 \\times \\frac{5}{4} = 40$ ✓ (then $40 \\times \\frac{5}{4} = 50$ ✓). (The choice $41$ is THE ARITHMETIC MEAN, $\\frac{32 + 50}{2}$, which is very close to the right answer but has ratios $\\frac{41}{32}$ and $\\frac{50}{41}$ that do not match ✗; the choice $1600$ is THE PRODUCT BEFORE THE SQUARE ROOT; the choice $9$ is REPORTING THE STEP INSTEAD OF THE TERM, half of $50 - 32$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  sections: {
    '21.3': s213,
  },
}
